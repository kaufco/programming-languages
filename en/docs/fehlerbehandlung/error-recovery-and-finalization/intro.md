---
slug: /fehlerbehandlung/error-recovery-and-finalization
title: 12.3. Error Recovery and Finalization
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 12.3. Error Recovery and Finalization

Recovery and finalization in case of errors.

## 12.3.1. Defer Statements

Defer statements enable the execution of code at the end of a function, regardless of how the function terminates (normally or through errors).

### Languages {#sprachen}

<Tabs availableTabs={['d', 'go', 'nim', 'swift', 'v', 'zig']}>
<TabItem value="go" label="Go">

```go
package main

import "fmt"

func processFile() error
{
    file, err := openFile("data.txt")
    if err != nil
    {
        return err
    }
    defer file.Close() // Executed at the end of the function
    
    // Code that may cause errors
    data, err := readFile(file)
    if err != nil
    {
        return err // file.Close() will still be called
    }
    
    fmt.Println(data)
    return nil // file.Close() is called here
}
```

**Special features:**
- `defer` defers execution until the end of the function
- Multiple `defer` statements are executed in LIFO order
- Also executed on `return` or `panic`
- Useful for resource cleanup

**Further reading:**
- [Go Documentation - Defer](https://go.dev/ref/spec#Defer_statements)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
func processFile() throws
{
    let file = try openFile("data.txt")
    defer
    {
        file.close() // Executed at the end of the scope
    }
    
    // Code that may cause errors
    let data = try readFile(file)
    print(data)
    // file.close() is called here
}
```

**Special features:**
- `defer` defers execution until the end of the scope
- Multiple `defer` statements are executed in LIFO order
- Also executed on `return` or `throw`
- Useful for resource cleanup

**Further reading:**
- [Swift Documentation - Defer](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/statements/#Defer-Statement)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
const std = @import("std");

fn processFile() !void
{
    var file = try openFile("data.txt");
    defer file.close(); // Executed at the end of the scope
    
    // Code that may cause errors
    const data = try readFile(&file);
    std.debug.print("{s}\n", .{data});
    // file.close() is called here
}
```

**Special features:**
- `defer` defers execution until the end of the scope
- Multiple `defer` statements are executed in LIFO order
- Also executed on `return` or errors
- Useful for resource cleanup

**Further reading:**
- [Zig Documentation - Defer](https://ziglang.org/documentation/0.11.0/#defer)

</TabItem>
<TabItem value="d" label="D">

```d
// Scope Guards (D's Defer equivalent)
// Required: import std.stdio;

void processFile(string filename) {
    auto file = File(filename, "r");
    scope(exit) file.close();  // Always executed

    scope(failure) writeln("Error processing ", filename);
    scope(success) writeln("Successfully processed: ", filename);

    // ... process file ...
}

void multipleDefers() {
    scope(exit) writeln("Third");
    scope(exit) writeln("Second");
    scope(exit) writeln("First");
    // Output: First, Second, Third (LIFO order)
}
```

**Special features:**
- `scope(exit)`: always executed (like `defer` in Go/Swift)
- `scope(success)`: only on normal exit from scope
- `scope(failure)`: only on exception
- Execution in reverse order of declaration (LIFO)
- More powerful than simple `defer` through the three variants

**Further reading:**
- [D Language Specification - Scope Guard Statement](https://dlang.org/spec/statement.html#scope-guard-statement)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Defer Statement
proc processFile(path: string) =
  let f = open(path)
  defer: f.close()  # executed at the end of the scope
  echo f.readAll()

# Multiple defers (LIFO order)
proc multiDefer() =
  defer: echo "3"
  defer: echo "2"
  defer: echo "1"
  echo "Start"
# Output: Start, 1, 2, 3
```

**Special features:**
- `defer` executes code at the end of the current scope
- LIFO order for multiple `defer` statements
- Also executed on exceptions

**Further reading:**
- [Nim Documentation - Defer Statement](https://nim-lang.org/docs/manual.html#exception-handling-defer-statement)

</TabItem>
<TabItem value="v" label="V">

```v
// Defer Statements
// Required: import os
fn read_data(path string) !string {
    f := os.open(path)!
    defer {
        f.close()
    }
    return f.read_string()
}
```

**Special features:**
- `defer { }` executes code at the end of the scope
- Executed in LIFO order (last `defer` first)
- Useful for resource cleanup

**Further reading:**
- [V Documentation - Defer](https://github.com/vlang/v/blob/master/doc/docs.md#defer)

</TabItem>
</Tabs>


## 12.3.2. Context Managers (with statement)

Context managers enable automatic resource management through defined entry and exit points, regardless of whether errors occur.

### Languages {#sprachen}

<Tabs availableTabs={['java', 'python']} yellowTabs={['prolog']} orangeTabs={['swift']}>
<TabItem value="python" label="Python">

```python
# With with statement
with open("data.txt", "r") as file:
    data = file.read()
    # File is automatically closed, even on errors
    print(data)

# Custom context manager
class FileManager:
    def __init__(self, filename):
        self.filename = filename
        self.file = None
    
    def __enter__(self):
        self.file = open(self.filename, "r")
        return self.file
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        if self.file:
            self.file.close()
        return False  # Do not suppress errors

# Usage
with FileManager("data.txt") as file:
    data = file.read()
    print(data)
```

**Special features:**
- `with` statement for automatic resource management
- `__enter__` and `__exit__` methods for context managers
- `__exit__` is always called, even on errors
- `contextlib.contextmanager` decorator for simple context managers

**Further reading:**
- [Python Documentation - Context Managers](https://docs.python.org/3/reference/datamodel.html#context-managers)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% setup_call_cleanup/3 as Context Manager
% Setup → Body → Cleanup (Cleanup is always executed)
read_file_content(Path, Content) :-
    setup_call_cleanup(
        open(Path, read, Stream),         % Setup: open resource
        read_string(Stream, _, Content),  % Body: use resource
        close(Stream)                     % Cleanup: release resource
    ).

% Nested resource management
copy_file(Source, Dest) :-
    setup_call_cleanup(
        open(Source, read, In),
        setup_call_cleanup(
            open(Dest, write, Out),
            copy_stream_data(In, Out),
            close(Out)),
        close(In)).
```

**Special features:**
- `setup_call_cleanup/3` provides context manager functionality as a built-in ISO predicate
- Setup, Body and Cleanup are passed as Prolog goals
- Cleanup is guaranteed to execute (even on exceptions or failure)
- Nesting possible for multiple resources

**Further reading:**
- [SWI-Prolog Documentation - setup_call_cleanup/3](https://www.swi-prolog.org/pldoc/doc_for?object=setup_call_cleanup/3)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// With defer (similar to context managers)
func processFile() throws
{
    let file = try openFile("data.txt")
    defer
    {
        file.close() // Automatically called
    }
    
    let data = try readFile(file)
    print(data)
}

// With Resource Management Protocol
protocol Resource
{
    func acquire()
    func release()
}

func withResource<T: Resource>(_ resource: T, _ body: (T) throws -> Void) rethrows
{
    resource.acquire()
    defer { resource.release() }
    try body(resource)
}
```

**Special features:**
- No native context managers like in Python
- `defer` is often used for similar purposes
- Resource management can be implemented through protocols and functions

**Further reading:**
- [Swift Documentation - Defer](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/statements/#Defer-Statement)

</TabItem>
<TabItem value="java" label="Java">

```java
// Try-with-resources (since Java 7)
// Required: import java.io.*;
try (BufferedReader reader = new BufferedReader(new FileReader("file.txt"))) {
    String line = reader.readLine();
    System.out.println(line);
}
// reader is automatically closed

// Multiple resources
try (FileInputStream in = new FileInputStream("input.txt");
     FileOutputStream out = new FileOutputStream("output.txt")) {
    // Both are automatically closed
}
```

**Special features:**
- Try-with-resources since Java 7 for `AutoCloseable` resources
- Resources are automatically closed at the end of the block
- Multiple resources separated by semicolon
- Since Java 9: effectively final variables can be used

**Further reading:**
- [Oracle Java Documentation - try-with-resources](https://docs.oracle.com/javase/tutorial/essential/exceptions/tryResourceClose.html)

</TabItem>
</Tabs>


## 12.3.3. Effect Tracking and Isolation

Effect tracking and isolation enables explicit typing and isolation of side effects (including error handling) in the type system.

### Languages {#sprachen}

<Tabs availableTabs={['idris', 'koka', 'lean4', 'mercury', 'ocaml', 'purescript', 'roc']}>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Effect system for error handling (since OCaml 5.0) *)
open Effect

type _ Effect.t += DivisionByZero : int Effect.t

let divide a b =
    if b = 0 then
        perform DivisionByZero
    else
        a / b

(* Handler for Effect *)
let handle_divide a b =
    try_with divide a b
    {
        effc = (fun (type a) (e : a Effect.t) ->
            match e with
            | DivisionByZero -> Some (fun (k : (a, _) continuation) ->
                continue k 0)
            | _ -> None)
    }
```

**Special features:**
- Effect system available (since OCaml 5.0)
- Error handling as effect in the type system
- Handlers for effect isolation
- Compiler enforces handling of effects

**Further reading:**
- [OCaml Documentation - Effect System](https://v2.ocaml.org/manual/effects.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Pure functions vs. IO functions
pureAdd : Int -> Int -> Int
pureAdd a b = a + b

-- Side effects only in IO
greet : String -> IO ()
greet name = putStrLn ("Hello, " ++ name ++ "!")

-- main must be IO ()
main : IO ()
main = greet "World"
```

**Special features:**
- Side effects are isolated through the `IO` type
- Pure functions cannot perform IO operations
- Type system enforces separation of pure code and side effects

**Further reading:**
- [Idris 2 Documentation - IO](https://idris2.readthedocs.io/en/latest/tutorial/starting.html)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
// Pure function: no effect in type
fun add(x : int, y : int) : int
  x + y

// Function with effect: explicit in type
fun greet(name : string) : console ()
  println("Hello, " ++ name ++ "!")

// Function with error effect
effect ctl raise(msg : string) : a

fun safe-divide(a : int, b : int) : raise int
  if b == 0 then raise("Division by zero") else a / b

// Effects are tracked and isolated in the type system
fun compute() : <raise,console> int
  val x = safe-divide(10, 2)
  println(x.show)
  x
```

**Special features:**
- Koka tracks ALL effects explicitly in the type system
- Pure functions have no effect in the type
- Effects are isolated and handled through handlers
- Fundamental language design: effects are Koka's central feature

**Further reading:**
- [Koka Language Guide - Effect Types](https://koka-lang.github.io/koka/doc/book.html#sec-effect-types)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Pure functions have no effects in the type
def pureAdd (x y : Nat) : Nat :=
  x + y

-- IO monad for side effects (explicit in type)
def greet (name : String) : IO Unit :=
  IO.println s!"Hello, {name}!"

-- StateM for state effects
def increment : StateM Nat Unit :=
  modify (fun n => n + 1)

-- ReaderM for environment effects
def readConfig : ReaderM String String :=
  read
```

**Special features:**
- Lean 4 tracks effects through monads in the type system: `IO`, `StateM`, `ReaderM`, `ExceptT`.
- Pure functions have no monadic return type.
- The compiler enforces that side effects are only executed in the appropriate monad.
- Dependent types enable even more precise specifications than simple effect tracking systems.

**Further reading:**
- [Lean 4 Documentation - IO Monad](https://lean-lang.org/lean4/doc/io.html)
- [Lean 4 Documentation - Monads](https://lean-lang.org/lean4/doc/monads.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Pure function: no IO parameter, guaranteed side-effect-free
:- func add(int, int) = int.
add(X, Y) = X + Y.

% IO effect explicit through IO state threading
:- pred greet(string::in, io::di, io::uo) is det.
greet(Name, !IO) :-
    io.format("Hello, %s!\n", [s(Name)], !IO).

% Pure predicate: no IO, must not have side effects
:- pred is_positive(int::in) is semidet.
is_positive(N) :- N > 0.

% Impure declaration for exceptions (rare, explicitly marked)
:- impure pred unsafe_print(string::in) is det.
:- pragma foreign_proc("C", unsafe_print(Msg::in),
    [will_not_call_mercury], "printf(\"%s\", Msg);").

% Compiler error: IO operation in pure context
% :- func broken(int) = int.
% broken(X) = Y :- io.write_int(X, !IO), Y = X.  % ERROR!
```

**Special features:**
- Mercury is a **pure** logic language: side effects only through explicit IO state threading (`!IO`)
- Predicates/functions without `io` parameter are guaranteed side-effect-free
- `impure` declaration for impure foreign code bindings (rare and explicit)
- `promise_pure`/`promise_semipure` for controlled lifting of purity
- Compiler enforces purity: IO operations in pure contexts are a compilation error

**Further reading:**
- [Mercury Language Reference - Purity](https://www.mercurylang.org/information/doc-release/mercury_ref/Purity.html)
- [Mercury Language Reference - Impurity](https://www.mercurylang.org/information/doc-release/mercury_ref/Impurity.html)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Effect Tracking: Effect Monad
pureFunction :: Int -> Int -> Int
pureFunction a b = a + b

-- Side effects must be declared in the type
impureFunction :: Int -> Effect Int
impureFunction n = do
    log ("Processing: " <> show n)
    pure (n * 2)
```

**Special features:**
- `Effect` monad for side effects (synchronous)
- `Aff` monad for asynchronous effects
- Pure functions have no `Effect` type
- Compiler enforces effect tracking

**Further reading:**
- [PureScript Documentation - Effects](https://book.purescript.org/chapter8.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Effect Tracking through Platform system
-- Pure functions cannot perform I/O
-- I/O is handled through tasks

-- app declaration connects with Platform
-- Platform provides task-based I/O
```

**Special features:**
- Pure functions are guaranteed side-effect-free
- I/O is isolated through the Platform/Task system
- Clear separation between pure code and effects

**Further reading:**
- [Roc Documentation](https://www.roc-lang.org/tutorial)

</TabItem>
</Tabs>

