---
slug: /funktionen/funktionsfeatures
title: 7.2. Function Features
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 7.2. Function Features

Additional features of functions.

## 7.2.1. First-Class Functions

Functions that can be treated like normal values: They can be stored in variables, passed as parameters, returned from functions, and created at runtime.

### Languages {#sprachen}

<Tabs availableTabs={['carbon', 'clojure', 'common-lisp', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'elixir', 'elm', 'erlang', 'fsharp', 'gleam', 'go', 'groovy', 'haskell', 'haxe', 'idris', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'lua', 'matlab', 'mercury', 'nim', 'objective-c', 'object-pascal', 'ocaml', 'octave', 'perl', 'php', 'purescript', 'python', 'r', 'racket', 'roc', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'v', 'vbnet', 'zig']} yellowTabs={['prolog']}>
<TabItem value="carbon" label="Carbon">

```cpp
fn Double(x: i32) -> i32 {
    return x * 2;
}

var func: fn(i32) -> i32 = Double;
var result = func(5);
```

**Special features:**
- Experimental language, syntax may still change
- Supports First-Class Functions

**Further reading:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
(defn double [x]
  (* x 2))

(def func double)
(def result (func 5))
```

**Special features:**
- Functions are First-Class objects
- Can be stored in variables and passed around

**Further reading:**
- [Clojure Documentation - Functions](https://clojure.org/reference/functions)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
(defun double (x)
  (* x 2))

(defvar func #'double)
(defvar result (funcall func 5))
```

**Special features:**
- Functions are First-Class objects
- Uses `#'` for function references

**Further reading:**
- [Common Lisp HyperSpec - Functions](http://www.lispworks.com/documentation/HyperSpec/Body/f_fun.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
def double(x)
  x * 2
end

func = ->double
result = func.call(5)
```

**Special features:**
- Functions are First-Class objects via Procs
- Ruby-like syntax

**Further reading:**
- [Crystal Documentation - Procs](https://crystal-lang.org/reference/1.11/syntax_and_semantics/literals/proc.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
int Double(int x)
{
    return x * 2;
}

Func<int, int> func = Double;
int result = func(5);
```

**Special features:**
- Supports First-Class Functions via Delegates and Lambda expressions
- Available since C# 1.0

**Further reading:**
- [Microsoft C# Documentation - Delegates](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/delegates/)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
#include <functional>

int doubleValue(int x) {
    return x * 2;
}

std::function<int(int)> func = doubleValue;
int result = func(5);
```

**Special features:**
- Supports First-Class Functions via function pointers and `std::function`
- Available since C++98

**Further reading:**
- [cppreference.com - std::function](https://en.cppreference.com/w/cpp/utility/functional/function)

</TabItem>
<TabItem value="d" label="D">

```d
int doubleValue(int x) {
    return x * 2;
}

int function(int) func = &doubleValue;
int result = func(5);
```

**Special features:**
- Supports First-Class Functions via function pointers
- Also supports Delegates

**Further reading:**
- [D Language Specification - Function Pointers](https://dlang.org/spec/function.html#function-pointers)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
int doubleValue(int x) {
    return x * 2;
}

int Function(int) func = doubleValue;
int result = func(5);
```

**Special features:**
- Supports First-Class Functions natively
- Functions are First-Class objects

**Further reading:**
- [Dart Documentation - Functions](https://dart.dev/guides/language/language-tour#functions)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
def double(x) do
    x * 2
end

func = &double/1
result = func.(5)
```

**Special features:**
- Functions are First-Class objects
- Supports First-Class Functions natively

**Further reading:**
- [Elixir Documentation - Functions](https://elixir-lang.org/getting-started/basic-types.html#functions)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
double : Int -> Int
double x = x * 2

func : Int -> Int
func = double

result = func 5
```

**Special features:**
- Functional language with explicit type annotations
- Functions are First-Class objects

**Further reading:**
- [Elm Documentation - Functions](https://guide.elm-lang.org/core_language.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
double(X) ->
    X * 2.

Func = fun double/1,
Result = Func(5).
```

**Special features:**
- Functions are First-Class objects
- Supports First-Class Functions natively

**Further reading:**
- [Erlang Documentation - Functions](https://www.erlang.org/doc/reference_manual/functions.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
let double (x: int) : int = x * 2

let func: int -> int = double
let result = func 5
```

**Special features:**
- Functional language with First-Class functions
- Functions are First-Class objects

**Further reading:**
- [F# Documentation - Functions](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/functions/)

</TabItem>
<TabItem value="gleam" label="Gleam">

```erlang
pub fn double(x: Int) -> Int {
    x * 2
}

let func = double
let result = func(5)
```

**Special features:**
- Functional language with explicit type annotations
- Functions are First-Class objects

**Further reading:**
- [Gleam Documentation - Functions](https://gleam.run/documentation/tour/functions/)

</TabItem>
<TabItem value="go" label="Go">

```go
func double(x int) int {
    return x * 2
}

var func func(int) int = double
result := func(5)
```

**Special features:**
- Supports First-Class Functions via function pointers
- Functions are First-Class objects

**Further reading:**
- [Go Documentation - Functions](https://go.dev/ref/spec#Function_declarations)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
def doubleValue(x) {
    x * 2
}

// Method reference with .& operator
def func = this.&doubleValue
def result = func(5) // 10

// Closures as First-Class objects
def multiply = { x, y -> x * y }
def result2 = multiply(3, 4) // 12
```

**Special features:**
- Supports First-Class Functions via Closures and method references
- `.&` operator for method references
- Closures can be assigned to variables and passed as arguments

**Further reading:**
- [Groovy Documentation - Closures](https://groovy-lang.org/closures.html)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
double :: Int -> Int
double x = x * 2

func :: Int -> Int
func = double

result = func 5
```

**Special features:**
- Functional language with explicit type annotations
- Functions are First-Class objects

**Further reading:**
- [Haskell Documentation - Functions](https://www.haskell.org/tutorial/functions.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
function double(x: Int): Int {
    return x * 2;
}

var func: Int -> Int = double;
var result = func(5);
```

**Special features:**
- Supports First-Class Functions natively
- Cross-platform compilation

**Further reading:**
- [Haxe Documentation - Functions](https://haxe.org/manual/types-function.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
double : Int -> Int
double x = x * 2

func : Int -> Int
func = double

result : Int
result = func 5
```

**Special features:**
- Functional language with dependent types
- Functions are First-Class objects

**Further reading:**
- [Idris Documentation - Functions](https://idris2.readthedocs.io/en/latest/tutorial/functions.html)

</TabItem>
<TabItem value="java" label="Java">

```java
import java.util.function.Function;

static int doubleValue(int x) {
    return x * 2;
}

Function<Integer, Integer> func = Main::doubleValue;
int result = func.apply(5);
```

**Special features:**
- Supports First-Class Functions via functional interfaces (since Java 8.0)
- Uses Method References or Lambda expressions

**Further reading:**
- [Oracle Java Documentation - Functional Interfaces](https://docs.oracle.com/javase/tutorial/java/javaOO/lambdaexpressions.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
function double(x) {
    return x * 2;
}

const func = double;
const result = func(5);
```

**Special features:**
- Supports First-Class Functions natively
- Functions are First-Class objects

**Further reading:**
- [MDN Web Docs - Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
function double(x)
    x * 2
end

func = double
result = func(5)
```

**Special features:**
- Supports First-Class Functions natively
- Functions are First-Class objects

**Further reading:**
- [Julia Documentation - Functions](https://docs.julialang.org/en/v1/manual/functions/)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// First-Class Functions
fun double(x: int): int
  x * 2

// Store function as value
val func: (int) -> int = double
val result = func(5) // 10

// Pass function as parameter
fun apply(f: (int) -> int, x: int): int
  f(x)

val r = apply(double, 5) // 10

// Function as return value
fun multiplier(factor: int): (int) -> int
  fn(x) { x * factor }

val triple = multiplier(3)
val tripled = triple(4) // 12
```

**Special features:**
- Functions are full First-Class values
- Can be stored as parameters, return values, and in variables
- Function types are denoted with `->` (e.g. `(int) -> int`)
- Effects are propagated in function types

**Further reading:**
- [Koka Language Guide - Functions](https://koka-lang.github.io/koka/doc/book.html#sec-functions)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
fun double(x: Int): Int {
    return x * 2
}

val func: (Int) -> Int = ::double
val result = func(5)
```

**Special features:**
- Supports First-Class Functions natively
- Functions are First-Class objects

**Further reading:**
- [Kotlin Documentation - Function References](https://kotlinlang.org/docs/reflection.html#function-references)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- First-Class Functions
def double (x : Int) : Int := x * 2

def applyFunc (f : Int → Int) (value : Int) : Int := f value

def result : Int := applyFunc double 5
```

**Special features:**
- Functions are First-Class objects and can be stored in variables, passed as parameters, and returned from functions
- Lean 4 is a functional language where functions are fundamental building blocks
- Function types are annotated with `→` (or `->`)

**Further reading:**
- [Lean 4 Documentation - Functions](https://lean-lang.org/lean4/doc/functions.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
function double(x)
    return x * 2
end

local func = double
local result = func(5)
```

**Special features:**
- Supports First-Class Functions natively
- Functions are First-Class objects

**Further reading:**
- [Lua Documentation - Functions](https://www.lua.org/manual/5.4/manual.html#3.4.11)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
proc double(x: int): int =
    x * 2

var func: proc(x: int): int = double
let result = func(5)
```

**Special features:**
- Supports First-Class Functions via procedures
- Functions are First-Class objects

**Further reading:**
- [Nim Documentation - Procedures](https://nim-lang.org/docs/manual.html#procedures)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
let double (x: int) : int = x * 2

let func: int -> int = double
let result = func 5
```

**Special features:**
- Functional language with First-Class functions
- Functions are First-Class objects

**Further reading:**
- [OCaml Documentation - Functions](https://ocaml.org/docs/first-hour#functions)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
sub double {
    my $x = shift;
    return $x * 2;
}

my $func = \&double;
my $result = $func->(5);
```

**Special features:**
- Supports First-Class Functions via function references
- Functions are First-Class objects

**Further reading:**
- [Perl Documentation - Functions](https://perldoc.perl.org/perlsub)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
function double($x) {
    return $x * 2;
}

$func = 'double';
$result = $func(5);
```

**Special features:**
- Supports First-Class Functions via function names or Closures
- Functions are First-Class objects

**Further reading:**
- [PHP Documentation - Functions](https://www.php.net/manual/en/functions.user-defined.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
double(X, Result) :- Result is X * 2.

% Predicate passed as argument and called with call/2
apply_func(Func, Value, Result) :-
    call(Func, Value, Result).

?- apply_func(double, 5, Result).
%  Result = 10

% Store in variable and call later
?- Func = double, call(Func, 5, Result).
%  Result = 10
```

**Special features:**
- Predicates can be stored as atoms/terms and called with `call/N`
- `call/N` is ISO standard and enables dynamic calling of predicates
- Predicates are not true First-Class values, but terms that are executed via `call/N`

**Further reading:**
- [SWI-Prolog Documentation - Meta-predicates](https://www.swi-prolog.org/pldoc/man?section=metacall)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
double :: Int -> Int
double x = x * 2

func :: Int -> Int
func = double

result :: Int
result = func 5
```

**Special features:**
- Functional language with explicit type annotations
- Functions are First-Class objects

**Further reading:**
- [PureScript Documentation - Functions](https://book.purescript.org/chapter3.html)

</TabItem>
<TabItem value="python" label="Python">

```python
def double(x):
    return x * 2

func = double
result = func(5)
```

**Special features:**
- Supports First-Class Functions natively
- Functions are First-Class objects

**Further reading:**
- [Python Documentation - Functions](https://docs.python.org/3/tutorial/controlflow.html#defining-functions)

</TabItem>
<TabItem value="r" label="R">

```r
double <- function(x) {
    x * 2
}

func <- double
result <- func(5)
```

**Special features:**
- Supports First-Class Functions natively
- Functions are First-Class objects

**Further reading:**
- [R Documentation - Functions](https://cran.r-project.org/doc/manuals/r-release/R-lang.html#Function-objects)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
(define (double x)
    (* x 2))

(define func double)
(define result (func 5))
```

**Special features:**
- Functional language with First-Class functions
- Functions are First-Class objects

**Further reading:**
- [Racket Documentation - Functions](https://docs.racket-lang.org/guide/define.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
double : Int -> Int
double x = x * 2

func : Int -> Int
func = double

result : Int
result = func 5
```

**Special features:**
- Functional language with explicit type annotations
- Functions are First-Class objects

**Further reading:**
- [Roc Documentation - Functions](https://www.roc-lang.org/tutorial#functions)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
def double(x)
    x * 2
end

func = method(:double)
result = func.call(5)
```

**Special features:**
- Supports First-Class Functions via Method objects or Procs
- Functions are First-Class objects

**Further reading:**
- [Ruby Documentation - Methods](https://docs.ruby-lang.org/en/master/syntax/methods_rdoc.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
fn double(x: i32) -> i32 {
    x * 2
}

let func: fn(i32) -> i32 = double;
let result = func(5);
```

**Special features:**
- Supports First-Class Functions via function pointers and Closures
- Type-safe

**Further reading:**
- [Rust Book - Functions](https://doc.rust-lang.org/book/ch03-03-functions.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
def double(x: Int): Int = {
    x * 2
}

val func: Int => Int = double
val result = func(5)
```

**Special features:**
- Functional and object-oriented language
- Functions are First-Class objects

**Further reading:**
- [Scala Documentation - Functions](https://docs.scala-lang.org/tour/functions.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
(define (double x)
    (* x 2))

(define func double)
(define result (func 5))
```

**Special features:**
- Functional language with First-Class functions
- Functions are First-Class objects

**Further reading:**
- [Scheme Documentation - Functions](https://www.scheme.com/tspl4/start.html#./start:h0)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
func double(x: Int) -> Int {
    return x * 2
}

let fn: (Int) -> Int = double
let result = fn(5)
```

**Special features:**
- Supports First-Class Functions natively
- Functions are First-Class objects

**Further reading:**
- [Swift Documentation - Functions](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/functions/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
function double(x: number): number {
    return x * 2;
}

const func: (x: number) => number = double;
const result = func(5);
```

**Special features:**
- Supports First-Class Functions natively
- Full type annotations

**Further reading:**
- [TypeScript Handbook - Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
Function DoubleValue(x As Integer) As Integer
    Return x * 2
End Function

Dim func As Func(Of Integer, Integer) = AddressOf DoubleValue
Dim result As Integer = func(5)
```

**Special features:**
- Supports First-Class Functions via Delegates
- Uses `AddressOf` for function references

**Further reading:**
- [Microsoft VB.NET Documentation - Delegates](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/delegates/)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% First-Class Functions via Function Handles
func = @sin;
result = func(pi/2);  % 1

% Store functions in Cell Arrays
funcs = {@sin, @cos, @tan};
for i = 1:length(funcs)
    disp(funcs{i}(pi/4));
end
```

**Special features:**
- Function Handles (`@`) make functions First-Class Values
- Can be stored, passed, and used in data structures

**Further reading:**
- [MATLAB Documentation - Function Handles](https://www.mathworks.com/help/matlab/matlab_prog/creating-a-function-handle.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% First-Class Functions and predicates
:- module first_class.
:- interface.
:- import_module io.
:- pred main(io::di, io::uo) is det.
:- implementation.
:- import_module int, list, string.

:- func double(int) = int.
double(X) = X * 2.

:- func triple(int) = int.
triple(X) = X * 3.

:- pred main(io::di, io::uo) is det.
main(!IO) :-
    % Store function in variable
    Func = double,
    Result = apply(Func, 5),      % 10
    io.format("double(5) = %d\n", [i(Result)], !IO),

    % Store functions in a list
    Funcs = [double, triple],
    Results = list.map(
        (func(F) = apply(F, 4)),
        Funcs
    ),

    % Pass function as parameter
    Mapped = list.map(double, [1, 2, 3]).  % [2, 4, 6]
```

**Special features:**
- Mercury treats predicates and functions as First-Class values.
- Functions and predicates can be stored in variables, passed as arguments, and used in data structures.
- `apply/N` is used to call function values.
- The type system ensures type safety in Higher-Order operations.

**Further reading:**
- [Mercury Language Reference - Higher-Order](https://www.mercurylang.org/information/doc-release/mercury_ref/Higher-order.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// First-Class Functions: Anonymous Methods (since Delphi 2009)
type
  TIntFunc = reference to function(x: Integer): Integer;

function Apply(func: TIntFunc; value: Integer): Integer;
begin
  Result := func(value);
end;

var
  double: TIntFunc;
  result: Integer;
begin
  double := function(x: Integer): Integer
  begin
    Result := x * 2;
  end;

  result := Apply(double, 5);  // 10
end;
```

**Special features:**
- `reference to function/procedure` for function references (since Delphi 2009)
- Functions can be passed as parameters and stored in variables
- Supports Variable Capture (Closures)

**Further reading:**
- [Delphi Documentation - Anonymous Methods](https://docwiki.embarcadero.com/RADStudio/en/Anonymous_Methods_in_Delphi)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Blocks as First-Class objects
NSString* (^transform)(NSString*) = ^NSString* (NSString *input) {
    return [input uppercaseString];
};

// Store block in variable
NSString *result = transform(@"hallo"); // "HALLO"

// Block as return value
- (NSString* (^)(NSString*))createFormatter {
    return ^NSString* (NSString *input) {
        return [input capitalizedString];
    };
}
```

**Special features:**
- Blocks are First-Class objects (can be assigned, passed, returned)
- C-Function-Pointers as alternative for C functions
- Blocks are stored on the heap (after copy)

**Further reading:**
- [Apple Documentation - Blocks](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/WorkingwithBlocks/WorkingwithBlocks.html)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
% First-Class Functions via Function Handles
func = @sin;
result = func(pi/2);  % 1

% Store functions in data structures
operations = {@plus, @minus, @times};
result = operations{1}(3, 4);  % 7
```

**Special features:**
- Function Handles make functions First-Class values
- Can be stored in variables, passed, and returned
- `@funcname` creates a handle to a named function

**Further reading:**
- [GNU Octave Documentation - Function Handles](https://octave.org/doc/v8.1.0/Function-Handles.html)

</TabItem>
<TabItem value="v" label="V">

```v
// First-Class Functions
fn add(a int, b int) int {
    return a + b
}

// Assign function as value
operation := add
result := operation(3, 4)
println(result)  // 7

// Store functions in array
operations := [fn (a int, b int) int { return a + b },
               fn (a int, b int) int { return a - b }]
```

**Special features:**
- Functions can be assigned to variables
- Functions can be stored in data structures
- Functions can be passed as parameters and returned

**Further reading:**
- [V Documentation - Functions](https://github.com/vlang/v/blob/master/doc/docs.md#functions)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// First-Class Functions: function pointers as values
fn double(x: i32) i32 {
    return x * 2;
}

fn triple(x: i32) i32 {
    return x * 3;
}

// Store function in variable
const func: *const fn (i32) i32 = &double;
const result = func(5);  // 10

// Reassign function pointer
var current_func: *const fn (i32) i32 = &double;
current_func = &triple;
const result2 = current_func(5);  // 15
```

**Special features:**
- Functions can be stored in variables
- Function pointers can be passed and returned
- No Closures (no capture of local variables)
- Function type is explicitly annotated

**Further reading:**
- [Zig Documentation - Functions](https://ziglang.org/documentation/master/#Functions)

</TabItem>
</Tabs>


## 7.2.2. Closures

Functions that can access variables from their surrounding scope, even after the scope has been closed. They "close over" the environment in which they were defined.

### Languages {#sprachen}

<Tabs availableTabs={['carbon', 'clojure', 'common-lisp', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'elixir', 'elm', 'erlang', 'fsharp', 'gleam', 'go', 'groovy', 'haskell', 'haxe', 'idris', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'lua', 'matlab', 'mercury', 'nim', 'objective-c', 'object-pascal', 'ocaml', 'perl', 'php', 'purescript', 'python', 'r', 'racket', 'roc', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'v', 'vbnet', 'wolfram-language']} yellowTabs={['octave', 'prolog']}>
<TabItem value="carbon" label="Carbon">

```cpp
fn CreateCounter() -> fn() -> i32 {
    var count: i32 = 0;
    return fn() -> i32 {
        count = count + 1;
        return count;
    };
}

var counter = CreateCounter();
var result1 = counter();
var result2 = counter();
```

**Special features:**
- Experimental language, syntax may still change
- Supports Closures

**Further reading:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
(defn create-counter []
  (let [count (atom 0)]
    (fn []
      (swap! count inc))))

(def counter (create-counter))
(def result1 (counter))
(def result2 (counter))
```

**Special features:**
- Supports Closures natively
- Uses `atom` for mutable state

**Further reading:**
- [Clojure Documentation - Closures](https://clojure.org/reference/reader#_dispatch)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
(defun create-counter ()
  (let ((count 0))
    (lambda ()
      (incf count))))

(defvar counter (create-counter))
(defvar result1 (funcall counter))
(defvar result2 (funcall counter))
```

**Special features:**
- Supports Closures natively
- Functions are First-Class objects

**Further reading:**
- [Common Lisp HyperSpec - Lambda](http://www.lispworks.com/documentation/HyperSpec/Body/m_lambda.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
def create_counter
  count = 0
  -> { count += 1 }
end

counter = create_counter
result1 = counter.call
result2 = counter.call
```

**Special features:**
- Supports Closures via Procs
- Ruby-like syntax

**Further reading:**
- [Crystal Documentation - Closures](https://crystal-lang.org/reference/1.11/syntax_and_semantics/blocks_and_procs.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
Func<int> CreateCounter()
{
    int count = 0;
    return () => ++count;
}

var counter = CreateCounter();
int result1 = counter();
int result2 = counter();
```

**Special features:**
- Supports Closures via Lambda expressions (since C# 3.0)
- Full Closure support

**Further reading:**
- [Microsoft C# Documentation - Lambda Expressions](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/lambda-expressions)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
#include <functional>

std::function<int()> createCounter() {
    int count = 0;
    return [count]() mutable {
        return ++count;
    };
}

auto counter = createCounter();
int result1 = counter();
int result2 = counter();
```

**Special features:**
- Supports Closures via Lambda expressions (since C++11)
- Uses capture lists for variables

**Further reading:**
- [cppreference.com - Lambda expressions](https://en.cppreference.com/w/cpp/language/lambda)

</TabItem>
<TabItem value="d" label="D">

```d
int delegate() createCounter() {
    int count = 0;
    return delegate() {
        return ++count;
    };
}

auto counter = createCounter();
int result1 = counter();
int result2 = counter();
```

**Special features:**
- Supports Closures via Delegates
- Full Closure support

**Further reading:**
- [D Language Specification - Delegates](https://dlang.org/spec/function.html#closures)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
int Function() createCounter() {
    int count = 0;
    return () {
        return ++count;
    };
}

var counter = createCounter();
int result1 = counter();
int result2 = counter();
```

**Special features:**
- Supports Closures natively
- Full Closure support

**Further reading:**
- [Dart Documentation - Closures](https://dart.dev/guides/language/language-tour#functions)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
defmodule ClosureExample do
  def create_adder(n) do
    fn x -> n + x end
  end

  def create_multiplier(factor) do
    fn x -> x * factor end
  end
end

adder = ClosureExample.create_adder(5)
result1 = adder.(3) # 8
result2 = adder.(10) # 15

multiplier = ClosureExample.create_multiplier(3)
result3 = multiplier.(4) # 12
```

**Special features:**
- Closures capture variables from the surrounding scope
- All captured values are immutable
- For stateful Closures, `Agent` or `GenServer` is needed
- Functions are First-Class Objects

**Further reading:**
- [Elixir Documentation - Anonymous Functions](https://hexdocs.pm/elixir/anonymous-functions.html)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
createCounter : () -> Int
createCounter = 
    let
        count = 0
    in
        \() -> count + 1
```

**Special features:**
- Elm supports Closures, but is purely functional (no mutation)
- Functional language with explicit type annotations

**Further reading:**
- [Elm Documentation - Functions](https://guide.elm-lang.org/core_language.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
create_counter() ->
    Count = 0,
    fun() ->
        Count + 1
    end.

Counter = create_counter(),
Result1 = Counter(),
Result2 = Counter().
```

**Special features:**
- Supports Closures natively
- Erlang is functional (no mutation)

**Further reading:**
- [Erlang Documentation - Fun Expressions](https://www.erlang.org/doc/reference_manual/expressions.html#fun-expressions)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
let createCounter () =
    let count = ref 0
    fun () ->
        count := !count + 1
        !count

let counter = createCounter()
let result1 = counter()
let result2 = counter()
```

**Special features:**
- Supports Closures natively
- Uses `ref` for mutable state

**Further reading:**
- [F# Documentation - Closures](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/functions/)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// Closures: functions capture their environment
pub fn create_adder(x: Int) -> fn(Int) -> Int {
  fn(y) { x + y }
}

let add_five = create_adder(5)
let result = add_five(3)  // 8
```

**Special features:**
- Gleam supports Closures that capture their environment
- All captured variables are immutable
- Closures cannot capture mutable state (no Counter pattern as in imperative languages)

**Further reading:**
- [Gleam Documentation - Anonymous Functions](https://tour.gleam.run/functions/anonymous-functions/)

</TabItem>
<TabItem value="go" label="Go">

```go
func createCounter() func() int {
    count := 0
    return func() int {
        count++
        return count
    }
}

counter := createCounter()
result1 := counter()
result2 := counter()
```

**Special features:**
- Supports Closures natively
- Full Closure support

**Further reading:**
- [Go Documentation - Function literals](https://go.dev/ref/spec#Function_literals)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
def createCounter() {
    def count = 0
    return { ++count }
}

def counter = createCounter()
def result1 = counter()
def result2 = counter()
```

**Special features:**
- Supports Closures natively
- Full Closure support

**Further reading:**
- [Groovy Documentation - Closures](https://groovy-lang.org/closures.html)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
createCounter :: () -> Int
createCounter = 
    let count = 0
    in \() -> count + 1
```

**Special features:**
- Haskell supports Closures, but is purely functional (no mutation)
- Functional language with explicit type annotations

**Further reading:**
- [Haskell Documentation - Functions](https://www.haskell.org/tutorial/functions.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
function createCounter(): Void -> Int {
    var count = 0;
    return function(): Int {
        return ++count;
    };
}

var counter = createCounter();
var result1 = counter();
var result2 = counter();
```

**Special features:**
- Supports Closures natively
- Cross-platform compilation

**Further reading:**
- [Haxe Documentation - Functions](https://haxe.org/manual/types-function.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Closures: functions capture their lexical scope
makeGreeter : String -> String -> String
makeGreeter greeting = \name => greeting ++ ", " ++ name ++ "!"

hello : String -> String
hello = makeGreeter "Hallo"

result : String
result = hello "Welt"  -- "Hallo, Welt!"
```

**Special features:**
- Idris supports Closures, but is purely functional (no mutation)
- Captured variables are always immutable
- Closures arise naturally through Currying and Partial Application

**Further reading:**
- [Idris 2 Documentation - Functions](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html)

</TabItem>
<TabItem value="java" label="Java">

```java
import java.util.function.Supplier;
import java.util.concurrent.atomic.AtomicInteger;

static Supplier<Integer> createCounter() {
    AtomicInteger count = new AtomicInteger(0);
    return () -> count.incrementAndGet();
}

Supplier<Integer> counter = createCounter();
int result1 = counter.get();
int result2 = counter.get();
```

**Special features:**
- Supports Closures via Lambda expressions (since Java 8.0)
- Variables must be effectively final

**Further reading:**
- [Oracle Java Documentation - Lambda Expressions](https://docs.oracle.com/javase/tutorial/java/javaOO/lambdaexpressions.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
function createCounter() {
    let count = 0;
    return function() {
        return ++count;
    };
}

const counter = createCounter();
const result1 = counter();
const result2 = counter();
```

**Special features:**
- Supports Closures natively
- Full Closure support

**Further reading:**
- [MDN Web Docs - Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
function create_counter()
    count = 0
    return function()
        global count
        count += 1
        return count
    end
end

counter = create_counter()
result1 = counter()
result2 = counter()
```

**Special features:**
- Supports Closures natively
- Full Closure support

**Further reading:**
- [Julia Documentation - Closures](https://docs.julialang.org/en/v1/manual/functions/#man-closures)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Closures
fun make-adder(x: int): (int) -> int
  fn(y) { x + y }  // Closure: captures x from outer scope

val add5 = make-adder(5)
val result = add5(3) // 8

// Closure with mutable state
fun counter(): (() -> int)
  var count := 0
  fn()
    count := count + 1
    count
```

**Special features:**
- Closures automatically capture free variables from the enclosing scope
- Both `val` and `var` variables can be captured
- Effects of captured variables are reflected in the function type
- Closures are the primary mechanism for state-based abstractions

**Further reading:**
- [Koka Language Guide - Anonymous Functions](https://koka-lang.github.io/koka/doc/book.html#sec-anonymous-functions)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
fun createCounter(): () -> Int {
    var count = 0
    return { ++count }
}

val counter = createCounter()
val result1 = counter()
val result2 = counter()
```

**Special features:**
- Supports Closures natively
- Full Closure support

**Further reading:**
- [Kotlin Documentation - Closures](https://kotlinlang.org/docs/lambdas.html#closures)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Closures
def createAdder (x : Int) : Int → Int :=
  fun y => x + y

def add5 : Int → Int := createAdder 5
def result1 : Int := add5 3  -- 8
def result2 : Int := add5 10 -- 15
```

**Special features:**
- Closures are realized through Lambda expressions (`fun`) that capture variables from the surrounding scope
- Since Lean 4 is immutable by default, Closures capture values, not mutable references
- Closures are a natural concept in Lean 4 as a functional language

**Further reading:**
- [Lean 4 Documentation - Anonymous Functions](https://lean-lang.org/lean4/doc/functions.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
function create_counter()
    local count = 0
    return function()
        count = count + 1
        return count
    end
end

local counter = create_counter()
local result1 = counter()
local result2 = counter()
```

**Special features:**
- Supports Closures natively
- Full Closure support

**Further reading:**
- [Lua Documentation - Closures](https://www.lua.org/manual/5.4/manual.html#3.4.11)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
proc createCounter(): proc(): int =
    var count = 0
    return proc(): int =
        inc count
        count

let counter = createCounter()
let result1 = counter()
let result2 = counter()
```

**Special features:**
- Supports Closures natively
- Full Closure support

**Further reading:**
- [Nim Documentation - Closures](https://nim-lang.org/docs/manual.html#procedures)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
let create_counter () =
    let count = ref 0 in
    fun () ->
        count := !count + 1;
        !count

let counter = create_counter ()
let result1 = counter ()
let result2 = counter ()
```

**Special features:**
- Supports Closures natively
- Uses `ref` for mutable state

**Further reading:**
- [OCaml Documentation - Closures](https://ocaml.org/docs/first-hour#functions)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
sub create_counter {
    my $count = 0;
    return sub {
        return ++$count;
    };
}

my $counter = create_counter();
my $result1 = $counter->();
my $result2 = $counter->();
```

**Special features:**
- Supports Closures natively
- Full Closure support

**Further reading:**
- [Perl Documentation - Closures](https://perldoc.perl.org/perlsub#Closures)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
function createCounter() {
    $count = 0;
    return function() use (&$count) {
        return ++$count;
    };
}

$counter = createCounter();
$result1 = $counter();
$result2 = $counter();
```

**Special features:**
- Supports Closures via `use` clause (since PHP 5.3)
- `&$count` for reference passing

**Further reading:**
- [PHP Documentation - Closures](https://www.php.net/manual/en/functions.anonymous.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Lambda expressions with variable capture via >>
:- use_module(library(apply)).

create_counter(Counter) :-
    Counter = [In, Out]>>(Out is In + 1).

?- create_counter(Counter), call(Counter, 5, Result).
%  Result = 6

% Capture of an outer variable
multiply_by(Factor, Lambda) :-
    Lambda = [X, Result]>>(Result is X * Factor).

?- multiply_by(3, Func), call(Func, 5, Result).
%  Result = 15
```

**Special features:**
- Prolog supports Closures limitedly via Lambda expressions with the `>>` notation
- Free variables from the surrounding context are bound through unification
- There is no mutable state — Prolog variables are logical variables
- `library(apply)` provides `maplist`, `foldl` etc. for use with Lambdas

**Further reading:**
- [SWI-Prolog Documentation - library(apply)](https://www.swi-prolog.org/pldoc/man?section=apply)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
createCounter :: () -> Int
createCounter = 
    let count = 0
    in \() -> count + 1
```

**Special features:**
- PureScript supports Closures, but is purely functional (no mutation)
- Functional language with explicit type annotations

**Further reading:**
- [PureScript Documentation - Functions](https://book.purescript.org/chapter3.html)

</TabItem>
<TabItem value="python" label="Python">

```python
def create_counter():
    count = 0
    def counter():
        nonlocal count
        count += 1
        return count
    return counter

counter = create_counter()
result1 = counter()
result2 = counter()
```

**Special features:**
- Supports Closures natively
- Uses `nonlocal` for mutable variables

**Further reading:**
- [Python Documentation - Closures](https://docs.python.org/3/tutorial/classes.html#python-scopes-and-namespaces)

</TabItem>
<TabItem value="r" label="R">

```r
create_counter <- function() {
    count <- 0
    function() {
        count <<- count + 1
        count
    }
}

counter <- create_counter()
result1 <- counter()
result2 <- counter()
```

**Special features:**
- Supports Closures natively
- Uses `<<-` for assignment in outer scope

**Further reading:**
- [R Documentation - Closures](https://cran.r-project.org/doc/manuals/r-release/R-lang.html#Closures)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
(define (create-counter)
    (let ((count 0))
        (lambda ()
            (set! count (+ count 1))
            count)))

(define counter (create-counter))
(define result1 (counter))
(define result2 (counter))
```

**Special features:**
- Supports Closures natively
- Uses `set!` for mutation

**Further reading:**
- [Racket Documentation - Closures](https://docs.racket-lang.org/guide/define.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Closures: Lambda captures outer variables
makeGreeter : Str -> (Str -> Str)
makeGreeter = \greeting ->
    \name -> "$(greeting), $(name)!"

greetHello = makeGreeter "Hallo"
result = greetHello "Welt"
```

**Special features:**
- Roc supports Closures (Lambda captures outer variables)
- Purely functional - no mutation in Closures
- Lexical scoping

**Further reading:**
- [Roc Documentation - Functions](https://www.roc-lang.org/tutorial#defining-functions)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
def create_counter
    count = 0
    proc { count += 1 }
end

counter = create_counter
result1 = counter.call
result2 = counter.call
```

**Special features:**
- Supports Closures natively
- Full Closure support

**Further reading:**
- [Ruby Documentation - Closures](https://docs.ruby-lang.org/en/master/syntax/methods_rdoc.html#label-Closures)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
fn create_counter() -> impl FnMut() -> i32 {
    let mut count = 0;
    move || {
        count += 1;
        count
    }
}

let mut counter = create_counter();
let result1 = counter();
let result2 = counter();
```

**Special features:**
- Supports Closures via `move` closures
- Uses `FnMut` for mutable Closures

**Further reading:**
- [Rust Book - Closures](https://doc.rust-lang.org/book/ch13-01-closures.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
def createCounter(): () => Int = {
    var count = 0
    () => {
        count += 1
        count
    }
}

val counter = createCounter()
val result1 = counter()
val result2 = counter()
```

**Special features:**
- Supports Closures natively
- Full Closure support

**Further reading:**
- [Scala Documentation - Closures](https://docs.scala-lang.org/tour/higher-order-functions.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
(define (create-counter)
    (let ((count 0))
        (lambda ()
            (set! count (+ count 1))
            count)))

(define counter (create-counter))
(define result1 (counter))
(define result2 (counter))
```

**Special features:**
- Supports Closures natively
- Uses `set!` for mutation

**Further reading:**
- [Scheme Documentation - Closures](https://www.scheme.com/tspl4/start.html#./start:h0)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
func createCounter() -> () -> Int {
    var count = 0
    return {
        count += 1
        return count
    }
}

let counter = createCounter()
let result1 = counter()
let result2 = counter()
```

**Special features:**
- Supports Closures natively
- Full Closure support

**Further reading:**
- [Swift Documentation - Closures](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/closures/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
function createCounter(): () => number {
    let count = 0;
    return function(): number {
        return ++count;
    };
}

const counter = createCounter();
const result1 = counter();
const result2 = counter();
```

**Special features:**
- Supports Closures natively
- Full Closure support

**Further reading:**
- [TypeScript Handbook - Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
Function CreateCounter() As Func(Of Integer)
    Dim count As Integer = 0
    Return Function() As Integer
        count += 1
        Return count
    End Function
End Function

Dim counter = CreateCounter()
Dim result1 = counter()
Dim result2 = counter()
```

**Special features:**
- Supports Closures via Lambda expressions (since VB.NET 9.0)
- Full Closure support

**Further reading:**
- [Microsoft VB.NET Documentation - Lambda Expressions](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/procedures/lambda-expressions)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% Closures: Anonymous functions capture variables
function f = make_adder(n)
    f = @(x) x + n;  % n is captured from scope
end

add5 = make_adder(5);
add5(3)  % 8
add5(10) % 15
```

**Special features:**
- Anonymous functions capture variables from the surrounding scope
- The captured value is a copy at the time of creation
- Nested functions also have access to the surrounding scope

**Further reading:**
- [MATLAB Documentation - Anonymous Functions](https://www.mathworks.com/help/matlab/matlab_prog/anonymous-functions.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Closures: Lambda expressions capture variables from scope
:- module closures.
:- interface.
:- import_module io.
:- pred main(io::di, io::uo) is det.
:- implementation.
:- import_module int, list, string.

:- func make_adder(int) = (func(int) = int).
make_adder(N) = (func(X) = X + N).

:- pred main(io::di, io::uo) is det.
main(!IO) :-
    % Closure: N is captured from scope
    AddFive = make_adder(5),
    Result1 = apply(AddFive, 3),   % 8
    Result2 = apply(AddFive, 10),  % 15
    io.format("add5(3) = %d\n", [i(Result1)], !IO),
    io.format("add5(10) = %d\n", [i(Result2)], !IO),

    % Inline closure with Lambda syntax
    Multiplier = 3,
    Tripled = list.map(
        (func(X) = X * Multiplier),
        [1, 2, 3, 4]
    ).  % [3, 6, 9, 12]
```

**Special features:**
- Mercury supports Closures via Lambda expressions (`func(...) = ...` and `pred(...) is ... :- ...`).
- Variables from the surrounding scope are captured as immutable values.
- Since Mercury is a purely logical language, all captured values are immutable.
- Closures are often combined with Higher-Order functions like `list.map`, `list.filter`.

**Further reading:**
- [Mercury Language Reference - Higher-Order](https://www.mercurylang.org/information/doc-release/mercury_ref/Higher-order.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Closures: Anonymous Methods with Variable Capture (since Delphi 2009)
type
  TIntFunc = reference to function: Integer;

function MakeCounter: TIntFunc;
var
  count: Integer;
begin
  count := 0;
  Result := function: Integer
  begin
    count := count + 1;
    Result := count;
  end;
end;

var
  counter: TIntFunc;
begin
  counter := MakeCounter;
  WriteLn(counter());  // 1
  WriteLn(counter());  // 2
  WriteLn(counter());  // 3
end;
```

**Special features:**
- Anonymous Methods can capture local variables of the surrounding function
- Captured variables live as long as the Closure
- Available since Delphi 2009

**Further reading:**
- [Delphi Documentation - Anonymous Methods](https://docwiki.embarcadero.com/RADStudio/en/Anonymous_Methods_in_Delphi)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Closure: Block with Variable Capture
int multiplier = 3;
int (^multiply)(int) = ^int(int value) {
    return value * multiplier; // Captures multiplier from scope
};

int result = multiply(5); // 15

// __block for mutable Captures
__block int counter = 0;
void (^increment)(void) = ^{
    counter++; // Modifies captured variable
};
increment();
// counter is now 1
```

**Special features:**
- Blocks are Closures with automatic Variable Capture
- Captured variables are captured as copy by default (const)
- `__block` qualifier enables modification of captured variables
- Blocks since Objective-C 2.0 (Mac OS X 10.6 / iOS 4.0)

**Further reading:**
- [Apple Documentation - Blocks](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/WorkingwithBlocks/WorkingwithBlocks.html)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
% Closures: Anonymous functions capture surrounding variables
function f = make_adder(n)
    f = @(x) x + n;
end

add5 = make_adder(5);
result = add5(3);  % 8
```

**Special features:**
- Anonymous functions capture variables at creation time (by value)
- Changes to the captured variable after creation have no effect

**Further reading:**
- [GNU Octave Documentation - Anonymous Functions](https://octave.org/doc/v8.1.0/Anonymous-Functions.html)

</TabItem>
<TabItem value="v" label="V">

```v
// Closures with explicit capture
mut counter := 0

increment := fn [mut counter] () int {
    counter++
    return counter
}

println(increment())  // 1
println(increment())  // 2
```

**Special features:**
- Closures must explicitly capture outer variables with `[var]`
- `[mut var]` for mutable capture
- Explicit capture prevents accidental side effects

**Further reading:**
- [V Documentation - Closures](https://github.com/vlang/v/blob/master/doc/docs.md#closures)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Closures with Module *)
makeCounter[] := Module[{count = 0},
    Function[count++; count]
]

counter = makeCounter[];
counter[]  (* 1 *)
counter[]  (* 2 *)
counter[]  (* 3 *)
```

**Special features:**
- `Module[]` creates lexically bound variables
- Closure captures the local variable

**Further reading:**
- [Wolfram Language Documentation - Module](https://reference.wolfram.com/language/ref/Module.html)

</TabItem>
</Tabs>


## 7.2.3. Method References / Function Pointers

References to functions or methods that can be stored, passed, and called later without executing them immediately. Enables treating functions as values and using them dynamically.

### Languages {#sprachen}

<Tabs availableTabs={['ada', 'c', 'carbon', 'clojure', 'common-lisp', 'crystal', 'csharp', 'cpp', 'd', 'dart', 'eiffel', 'elixir', 'elm', 'erlang', 'fsharp', 'fortran', 'gleam', 'go', 'groovy', 'haskell', 'haxe', 'idris', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'lua', 'matlab', 'mercury', 'mojo', 'nim', 'objective-c', 'object-pascal', 'ocaml', 'octave', 'odin', 'perl', 'php', 'purescript', 'python', 'r', 'racket', 'roc', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'vbnet', 'v', 'wolfram-language', 'zig']} yellowTabs={['prolog']}>
<TabItem value="ada" label="Ada">

```ada
function Double(X : Integer) return Integer is
begin
    return X * 2;
end Double;

type Func_Access is access function(X : Integer) return Integer;
Func_Ptr : Func_Access := Double'Access;
Result : Integer := Func_Ptr(5);
```

**Special features:**
- Uses `'Access` for function access
- Function pointers must be typed

**Further reading:**
- [Ada Documentation - Access Types](https://learn.adacore.com/courses/intro-to-ada/chapters/access_types.html)

</TabItem>
<TabItem value="c" label="C">

```c
int double_value(int x) {
    return x * 2;
}

int (*func_ptr)(int) = double_value;
int result = func_ptr(5);
```

**Special features:**
- Supports function pointers natively
- Syntax: `return_type (*pointer_name)(parameters)`

**Further reading:**
- [C Documentation - Function Pointers](https://en.cppreference.com/w/c/language/pointer#Function_pointers)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
fn Double(x: i32) -> i32 {
    return x * 2;
}

var func: fn(i32) -> i32 = Double;
var result = func(5);
```

**Special features:**
- Experimental language, syntax may still change
- Supports function references

**Further reading:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
(defn double-value [x]
  (* x 2))

(def func double-value)
(def result (func 5))
```

**Special features:**
- Functions are first-class objects
- Function references can be assigned directly

**Further reading:**
- [Clojure Documentation - Functions](https://clojure.org/reference/functions)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
(defun double-value (x)
  (* x 2))

(defvar func #'double-value)
(defvar result (funcall func 5))
```

**Special features:**
- Uses `#'` for function references
- `funcall` is required to call function references

**Further reading:**
- [Common Lisp HyperSpec - Functions](http://www.lispworks.com/documentation/HyperSpec/Body/f_fun.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
def double_value(x : Int32) : Int32
  x * 2
end

func = ->double_value(Int32)
result = func.call(5)
```

**Special features:**
- Uses `->` for function references
- Type annotations required

**Further reading:**
- [Crystal Documentation - Proc](https://crystal-lang.org/reference/1.11/syntax_and_semantics/literals/proc.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
int DoubleValue(int x) {
    return x * 2;
}

Func<int, int> func = DoubleValue;
int result = func(5);

// Method Group
Action<int> action = Console.WriteLine;
```

**Special features:**
- Uses `Func<T, TResult>` and `Action<T>` delegates
- Method groups can be assigned directly (since C# 2.0)

**Further reading:**
- [Microsoft C# Documentation - Delegates](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/delegates/)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
int doubleValue(int x) {
    return x * 2;
}

int (*funcPtr)(int) = doubleValue;
int result = funcPtr(5);

// Or with std::function (since C++11)
#include <functional>
std::function<int(int)> func = doubleValue;
```

**Special features:**
- Supports both C-style function pointers and `std::function` (since C++11)
- `std::function` is more flexible and can also store function objects

**Further reading:**
- [cppreference.com - Function pointers](https://en.cppreference.com/w/cpp/language/pointer#Function_pointers)
- [cppreference.com - std::function](https://en.cppreference.com/w/cpp/utility/functional/function)

</TabItem>
<TabItem value="d" label="D">

```d
int doubleValue(int x) {
    return x * 2;
}

int function(int) func = &doubleValue;
int result = func(5);
```

**Special features:**
- Uses `&` for function references
- Supports both function pointers and delegates

**Further reading:**
- [D Language Specification - Function Pointers](https://dlang.org/spec/function.html#function_pointers)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
int doubleValue(int x) {
    return x * 2;
}

Function func = doubleValue;
int result = func(5);
```

**Special features:**
- Functions are first-class objects
- Function references can be assigned directly

**Further reading:**
- [Dart Language Tour - Functions](https://dart.dev/guides/language/language-tour#functions)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
double_value (x: INTEGER): INTEGER
    do
        Result := x * 2
    end

func: FUNCTION [INTEGER, INTEGER]
    do
        Result := agent double_value(?)
    end

result: INTEGER
    do
        Result := func.item ([5])
    end
```

**Special features:**
- Uses agents for function references
- `agent` syntax for function references

**Further reading:**
- [Eiffel Documentation - Agents](https://www.eiffel.org/doc/eiffel/Agents)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
def double_value(x) do
    x * 2
end

func = &double_value/1
result = func.(5)
```

**Special features:**
- Uses `&` for function references
- Arity must be specified (`/1`)
- Call with `.()` instead of `()`

**Further reading:**
- [Elixir Documentation - Function Capturing](https://hexdocs.pm/elixir/Kernel.html#&/1)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
doubleValue : Int -> Int
doubleValue x =
    x * 2

func : Int -> Int
func = doubleValue

result = func 5
```

**Special features:**
- Functions are first-class objects
- Function references can be assigned directly

**Further reading:**
- [Elm Documentation - Functions](https://guide.elm-lang.org/core_language.html)

</TabItem>
<TabItem value="erlang" label="Erlang">
```erlang
double_value(X) ->
    X * 2.

% Local function reference
Func = fun double_value/1,
Result = Func(5).

% Fully qualified reference (other module)
Func2 = fun lists:reverse/1,
Result2 = Func2([1, 2, 3]).
```

**Special features:**
- `fun Function/Arity` for local function references
- `fun Module:Function/Arity` for fully qualified function references
- Arity must always be specified

**Further reading:**
- [Erlang Documentation - Fun Expressions](https://www.erlang.org/doc/reference_manual/expressions.html#fun-expressions)
</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
let doubleValue (x: int) : int =
    x * 2

let func = doubleValue
let result = func 5
```

**Special features:**
- Functions are first-class objects
- Function references can be assigned directly

**Further reading:**
- [F# Documentation - Functions](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/functions/)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
function double_value(x) result(res)
    integer, intent(in) :: x
    integer :: res
    res = x * 2
end function double_value

procedure(double_value), pointer :: func
func => double_value
result = func(5)
```

**Special features:**
- Uses procedure pointers (since Fortran 2003)
- `procedure` interface for typing

**Further reading:**
- [Fortran Wiki - Procedure Pointers](https://fortranwiki.org/fortran/show/Procedure+pointers)

</TabItem>
<TabItem value="gleam" label="Gleam">

```erlang
fn double_value(x: Int) -> Int {
  x * 2
}

let func = double_value
let result = func(5)
```

**Special features:**
- Functions are first-class objects
- Function references can be assigned directly

**Further reading:**
- [Gleam Documentation - Functions](https://gleam.run/documentation/tour/functions/)

</TabItem>
<TabItem value="go" label="Go">

```go
func doubleValue(x int) int {
    return x * 2
}

var func func(int) int = doubleValue
result := func(5)
```

**Special features:**
- Functions are first-class objects
- Function references can be assigned directly

**Further reading:**
- [Go Documentation - Function Values](https://go.dev/tour/moretypes/25)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
def doubleValue(x) {
    return x * 2
}

def func = this.&doubleValue
def result = func(5)
```

**Special features:**
- Uses `&` for method references
- Also supports closures

**Further reading:**
- [Groovy Documentation - Method Pointers](https://groovy-lang.org/closures.html#method-pointers)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
doubleValue :: Int -> Int
doubleValue x = x * 2

func :: Int -> Int
func = doubleValue

result = func 5
```

**Special features:**
- Functions are first-class objects
- Function references can be assigned directly

**Further reading:**
- [Haskell Documentation - Functions](https://www.haskell.org/tutorial/functions.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
function doubleValue(x: Int): Int {
    return x * 2;
}

var func: Int -> Int = doubleValue;
var result = func(5);
```

**Special features:**
- Functions are first-class objects
- Function references can be assigned directly

**Further reading:**
- [Haxe Documentation - Functions](https://haxe.org/manual/types-function.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
doubleValue : Int -> Int
doubleValue x = x * 2

func : Int -> Int
func = doubleValue

result : Int
result = func 5
```

**Special features:**
- Functions are first-class objects
- Function references can be assigned directly

**Further reading:**
- [Idris Documentation - Functions](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html)

</TabItem>
<TabItem value="java" label="Java">

```java
int doubleValue(int x) {
    return x * 2;
}

// Method reference (since Java 8)
Function<Integer, Integer> func = this::doubleValue;
int result = func.apply(5);

// Or with lambda
Function<Integer, Integer> func2 = x -> x * 2;
```

**Special features:**
- Method references were introduced in Java 8
- Uses `::` for method references
- Supports `Function<T, R>` and other functional interfaces

**Further reading:**
- [Oracle Java Documentation - Method References](https://docs.oracle.com/javase/tutorial/java/javaOO/methodreferences.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
function doubleValue(x) {
    return x * 2;
}

const func = doubleValue;
const result = func(5);
```

**Special features:**
- Functions are first-class objects
- Function references can be assigned directly

**Further reading:**
- [MDN Web Docs - Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
function double_value(x::Int)::Int
    return x * 2
end

func = double_value
result = func(5)
```

**Special features:**
- Functions are first-class objects
- Function references can be assigned directly

**Further reading:**
- [Julia Documentation - Functions](https://docs.julialang.org/en/v1/manual/functions/)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Function References
fun double(x: int): int
  x * 2

fun increment(x: int): int
  x + 1

// Pass functions directly as references
val numbers = [1, 2, 3, 4, 5]
val doubled = numbers.map(double)       // [2, 4, 6, 8, 10]
val incremented = numbers.map(increment) // [2, 3, 4, 5, 6]

// Store in variables
val f: (int) -> int = double
val result = f(5) // 10
```

**Special features:**
- Functions can be referenced directly by their name
- No special operator (like `::` in Kotlin or `&` in Ruby) needed
- Function names are already values of function type
- Enables elegant passing to higher-order functions

**Further reading:**
- [Koka Language Guide - Functions](https://koka-lang.github.io/koka/doc/book.html#sec-functions)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
fun doubleValue(x: Int): Int {
    return x * 2
}

val func: (Int) -> Int = ::doubleValue
val result = func(5)
```

**Special features:**
- Uses `::` for function references (since Kotlin 1.0)
- Supports both function references and lambda expressions

**Further reading:**
- [Kotlin Documentation - Function References](https://kotlinlang.org/docs/reflection.html#function-references)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Function References
def doubleValue (x : Int) : Int := x * 2

-- Pass function name directly as reference
def applyFunc (f : Int → Int) (value : Int) : Int := f value

def result : Int := applyFunc doubleValue 5
```

**Special features:**
- In Lean 4, functions are first-class values and can be referenced directly by their name
- No special syntax element like `::` or `&` needed — the function name itself is already a reference
- Function references can be stored in variables and passed as arguments

**Further reading:**
- [Lean 4 Documentation - Functions](https://lean-lang.org/lean4/doc/functions.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
function double_value(x)
    return x * 2
end

local func = double_value
local result = func(5)
```

**Special features:**
- Functions are first-class objects
- Function references can be assigned directly

**Further reading:**
- [Lua Documentation - Functions](https://www.lua.org/manual/5.4/manual.html#2.5.9)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
function result = double_value(x)
    result = x * 2;
end

func = @double_value;
result = func(5);
```

**Special features:**
- Uses `@` for function handles
- Function handles can be stored and passed

**Further reading:**
- [MATLAB Documentation - Function Handles](https://www.mathworks.com/help/matlab/matlab_prog/creating-a-function-handle.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Function references / predicate references
:- module func_ref.
:- interface.
:- import_module io.
:- pred main(io::di, io::uo) is det.
:- implementation.
:- import_module int, list, string.

:- func double_value(int) = int.
double_value(X) = X * 2.

:- func triple_value(int) = int.
triple_value(X) = X * 3.

:- pred main(io::di, io::uo) is det.
main(!IO) :-
    % Store reference to a function in variable
    Func = double_value,
    Result = apply(Func, 5),  % 10
    io.format("double_value(5) = %d\n", [i(Result)], !IO),

    % Pass function reference as parameter
    Mapped = list.map(triple_value, [1, 2, 3]),  % [3, 6, 9]

    % Pass predicate reference
    list.filter(int.is_even, [1, 2, 3, 4, 5], Evens).  % [2, 4]
```

**Special features:**
- In Mercury, functions and predicates are referenced by their name.
- References are first-class values and can be stored in variables and passed.
- `apply/N` is used to call function references; `call/N` for predicate references.
- The compiler checks types and modes statically, even with higher-order usage.

**Further reading:**
- [Mercury Language Reference - Higher-Order](https://www.mercurylang.org/information/doc-release/mercury_ref/Higher-order.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
fn double_value(x: Int) -> Int:
    return x * 2

var func = double_value
var result = func(5)
```

**Special features:**
- Functions are first-class objects
- Function references can be assigned directly

**Further reading:**
- [Mojo Documentation - Functions](https://docs.modular.com/mojo/manual/functions/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
proc doubleValue(x: int): int =
    return x * 2

var func = doubleValue
var result = func(5)
```

**Special features:**
- Functions are first-class objects
- Function references can be assigned directly

**Further reading:**
- [Nim Documentation - Procedures](https://nim-lang.org/docs/manual.html#procedures)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
int doubleValue(int x) {
    return x * 2;
}

int (*func)(int) = doubleValue;
int result = func(5);
```

**Special features:**
- Supports C-style function pointers
- Also supports selectors for methods

**Further reading:**
- [Objective-C Documentation - Function Pointers](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
function DoubleValue(x: Integer): Integer;
begin
    Result := x * 2;
end;

type
    TFunc = function(x: Integer): Integer;

var
    func: TFunc;
    result: Integer;
begin
    func := @DoubleValue;
    result := func(5);
end;
```

**Special features:**
- Uses `@` for function pointers
- Function pointers must be typed

**Further reading:**
- [Free Pascal Documentation - Function Pointers](https://www.freepascal.org/docs-html/ref/refsu68.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
let double_value x = x * 2

let func = double_value
let result = func 5
```

**Special features:**
- Functions are first-class objects
- Function references can be assigned directly

**Further reading:**
- [OCaml Documentation - Functions](https://ocaml.org/docs/first-hour)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
function result = double_value(x)
    result = x * 2;
end

func = @double_value;
result = func(5);
```

**Special features:**
- Uses `@` for function handles
- Function handles can be stored and passed

**Further reading:**
- [GNU Octave Documentation - Function Handles](https://octave.org/doc/v8.1.0/Function-Handles.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
double_value :: proc(x: int) -> int {
    return x * 2
}

func := double_value
result := func(5)
```

**Special features:**
- Functions are first-class objects
- Function references can be assigned directly

**Further reading:**
- [Odin Documentation - Procedures](https://odin-lang.org/docs/overview/#procedures)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
sub double_value {
    my ($x) = @_;
    return $x * 2;
}

my $func = \&double_value;
my $result = $func->(5);
```

**Special features:**
- Uses `\&` for function references
- Call with `->()`

**Further reading:**
- [Perl Documentation - Function References](https://perldoc.perl.org/perlref#Code-References)

</TabItem>
<TabItem value="php" label="PHP">

```php
function doubleValue($x) {
    return $x * 2;
}

$func = 'doubleValue';
$result = $func(5);

// Or with callable (since PHP 5.4)
$func2 = 'doubleValue';
$result2 = call_user_func($func2, 5);
```

**Special features:**
- Supports string-based function references
- Also supports `callable` type (since PHP 5.4)

**Further reading:**
- [PHP Documentation - Callables](https://www.php.net/manual/en/language.types.callable.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
double_value(X, Result) :- Result is X * 2.

% Store predicate reference as atom
?- Func = double_value, call(Func, 5, Result).
%  Result = 10

% Pass predicate reference to another predicate
apply_func(Func, Value, Result) :-
    call(Func, Value, Result).

?- apply_func(double_value, 5, Result).
%  Result = 10
```

**Special features:**
- Predicates are referenced by their name (atom)
- `call/N` (ISO standard) calls a predicate dynamically by its name
- No function pointers in the classical sense — instead, atoms/terms are used as references

**Further reading:**
- [SWI-Prolog Documentation - Meta-predicates](https://www.swi-prolog.org/pldoc/man?section=metacall)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
doubleValue :: Int -> Int
doubleValue x = x * 2

func :: Int -> Int
func = doubleValue

result = func 5
```

**Special features:**
- Functions are first-class objects
- Function references can be assigned directly

**Further reading:**
- [PureScript Documentation - Functions](https://book.purescript.org/chapter3.html)

</TabItem>
<TabItem value="python" label="Python">

```python
def double_value(x):
    return x * 2

func = double_value
result = func(5)
```

**Special features:**
- Functions are first-class objects
- Function references can be assigned directly

**Further reading:**
- [Python Documentation - Functions](https://docs.python.org/3/tutorial/controlflow.html#defining-functions)

</TabItem>
<TabItem value="r" label="R">

```r
double_value <- function(x) {
    return(x * 2)
}

func <- double_value
result <- func(5)
```

**Special features:**
- Functions are first-class objects
- Function references can be assigned directly

**Further reading:**
- [R Documentation - Functions](https://cran.r-project.org/doc/manuals/r-release/R-intro.html#Writing-your-own-functions)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
(define (double-value x)
  (* x 2))

(define func double-value)
(define result (func 5))
```

**Special features:**
- Functions are first-class objects
- Function references can be assigned directly

**Further reading:**
- [Racket Documentation - Functions](https://docs.racket-lang.org/guide/define.html)

</TabItem>
<TabItem value="roc" label="Roc">

```roc
doubleValue = \x -> x * 2

func = doubleValue
result = func 5
```

**Special features:**
- Functions are first-class objects
- Function references can be assigned directly

**Further reading:**
- [Roc Documentation - Functions](https://www.roc-lang.org/tutorial)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
def double_value(x)
    return x * 2
end

func = method(:double_value)
result = func.call(5)
```

**Special features:**
- Uses `method(:name)` for method references
- Call with `.call()`

**Further reading:**
- [Ruby Documentation - Method Objects](https://ruby-doc.org/core-3.1.0/Method.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
fn double_value(x: i32) -> i32 {
    x * 2
}

let func: fn(i32) -> i32 = double_value;
let result = func(5);
```

**Special features:**
- Supports function pointers (`fn` type)
- Also supports closures (`Fn`, `FnMut`, `FnOnce` traits)

**Further reading:**
- [Rust Book - Function Pointers](https://doc.rust-lang.org/book/ch19-05-advanced-functions-and-closures.html#function-pointers)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
def doubleValue(x: Int): Int = {
    x * 2
}

val func: Int => Int = doubleValue
val result = func(5)
```

**Special features:**
- Functions are first-class objects
- Method references can be assigned directly

**Further reading:**
- [Scala Documentation - Functions](https://docs.scala-lang.org/tour/basics.html#functions)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
(define (double-value x)
  (* x 2))

(define func double-value)
(define result (func 5))
```

**Special features:**
- Functions are first-class objects
- Function references can be assigned directly

**Further reading:**
- [Scheme Documentation - Functions](https://www.scheme.com/tspl4/start.html#./start:h0)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
func doubleValue(x: Int) -> Int {
    return x * 2
}

let fn: (Int) -> Int = doubleValue
let result = fn(5)
```

**Special features:**
- Functions are first-class objects
- Function references can be assigned directly

**Further reading:**
- [Swift Documentation - Functions](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/functions/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
function doubleValue(x: number): number {
    return x * 2;
}

const func: (x: number) => number = doubleValue;
const result = func(5);
```

**Special features:**
- Functions are first-class objects
- Function references can be assigned directly
- Supports type annotations for function references

**Further reading:**
- [TypeScript Handbook - Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
Function DoubleValue(x As Integer) As Integer
    Return x * 2
End Function

Dim func As Func(Of Integer, Integer) = AddressOf DoubleValue
Dim result As Integer = func(5)
```

**Special features:**
- Uses `AddressOf` for function references
- Supports `Func(Of T, TResult)` delegates

**Further reading:**
- [Microsoft VB.NET Documentation - Delegates](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/delegates/)

</TabItem>
<TabItem value="v" label="V">

```v
fn double_value(x int) int {
    return x * 2
}

func := double_value
result := func(5)
```

**Special features:**
- Functions are first-class objects
- Function references can be assigned directly

**Further reading:**
- [V Documentation - Functions](https://github.com/vlang/v/blob/master/doc/docs.md#functions)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```wolfram
doubleValue[x_] := x * 2

func = doubleValue
result = func[5]
```

**Special features:**
- Functions are first-class objects
- Function references can be assigned directly

**Further reading:**
- [Wolfram Language Documentation - Functions](https://reference.wolfram.com/language/guide/Functions.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
fn double_value(x: i32) i32 {
    return x * 2;
}

const func: fn(i32) i32 = double_value;
const result = func(5);
```

**Special features:**
- Functions are first-class objects
- Function references can be assigned directly

**Further reading:**
- [Zig Documentation - Functions](https://ziglang.org/documentation/0.11.0/#Functions)

</TabItem>
</Tabs>


## 7.2.4. Property References / Field References

References to properties or fields that can be stored, passed, and later used to access or modify properties without immediately reading or writing them. Enables treating properties as values and using them dynamically.

### Languages {#sprachen}

<Tabs availableTabs={['csharp', 'dart', 'groovy', 'java', 'javascript', 'kotlin', 'python', 'ruby', 'scala', 'swift', 'typescript', 'vbnet']}>
<TabItem value="csharp" label="C#">

```csharp
class Person {
    public string Name { get; set; }
}

Person person = new Person { Name = "Alice" };

// Property reference with expression trees (since C# 3.0)
System.Linq.Expressions.Expression<Func<Person, string>> nameRef = p => p.Name;
var nameGetter = nameRef.Compile();
string name = nameGetter(person);

// Or with reflection
var propertyInfo = typeof(Person).GetProperty("Name");
string name2 = (string)propertyInfo.GetValue(person);
```

**Special features:**
- Supports expression trees for property references (since C# 3.0)
- Also supports reflection for property access
- Frequently used in LINQ and data binding

**Further reading:**
- [Microsoft C# Documentation - Expression Trees](https://learn.microsoft.com/en-us/dotnet/csharp/advanced-topics/expression-trees/)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
class Person {
    String name;
    Person(this.name);
}

Person person = Person("Alice");

// Property reference with symbol (since Dart 2.0)
Symbol nameSymbol = #name;
String name = MirrorSystem.getName(nameSymbol).toString();

// Or with reflection
import 'dart:mirrors';
var mirror = reflect(person);
var nameField = mirror.type.declarations[#name];
```

**Special features:**
- Supports symbols for property references (since Dart 2.0)
- Reflection is optional and requires `dart:mirrors`
- Symbols are resolved at runtime

**Further reading:**
- [Dart Documentation - Symbols](https://dart.dev/guides/language/language-tour#symbols)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
class Person {
    String name
}

Person person = new Person(name: "Alice")

// Property reference
def nameRef = Person.metaClass.getProperty(person, "name")
String name = nameRef

// Or with closure
def getName = { Person p -> p.name }
String name2 = getName(person)
```

**Special features:**
- Supports MetaClass for property references
- Also supports closures for property access
- Dynamic property access at runtime

**Further reading:**
- [Groovy Documentation - MetaClass](https://groovy-lang.org/metaprogramming.html#_metaclasses)

</TabItem>
<TabItem value="java" label="Java">

```java
class Person {
    private String name;
    
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
}

Person person = new Person();
person.setName("Alice");

// Property reference with method references (since Java 8)
Function<Person, String> nameGetter = Person::getName;
String name = nameGetter.apply(person);

// Or with reflection
try {
    java.lang.reflect.Method getNameMethod = Person.class.getMethod("getName");
    String name2 = (String)getNameMethod.invoke(person);
} catch (Exception e) {
    // Handle exception
}
```

**Special features:**
- Uses method references for property access (since Java 8)
- Also supports reflection for property access
- Java uses getter/setter pattern for properties

**Further reading:**
- [Oracle Java Documentation - Method References](https://docs.oracle.com/javase/tutorial/java/javaOO/methodreferences.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
class Person {
    constructor(name) {
        this.name = name;
    }
}

const person = new Person("Alice");

// Property reference with string
const propertyName = "name";
const name = person[propertyName];

// Or with function
const getName = (p) => p.name;
const name2 = getName(person);
```

**Special features:**
- Supports string-based property references
- Properties can be accessed dynamically at runtime
- Also supports computed property names

**Further reading:**
- [MDN Web Docs - Property Accessors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
class Person(var name: String)

val person = Person("Alice")

// Property reference (since Kotlin 1.0)
val nameRef: KProperty1<Person, String> = Person::name
val name = nameRef.get(person)

// Or directly
val nameGetter: (Person) -> String = Person::name
val name2 = nameGetter(person)
```

**Special features:**
- Supports property references with `::` syntax (since Kotlin 1.0)
- Property references are first-class objects
- Supports both read and write property references

**Further reading:**
- [Kotlin Documentation - Reflection](https://kotlinlang.org/docs/reflection.html#property-references)

</TabItem>
<TabItem value="python" label="Python">

```python
class Person:
    def __init__(self, name):
        self.name = name

person = Person("Alice")

# Property reference with getattr
property_name = "name"
name = getattr(person, property_name)

# Or with function
def get_name(p):
    return p.name

name2 = get_name(person)
```

**Special features:**
- Supports `getattr` for property references
- Properties can be accessed dynamically at runtime
- Also supports `operator.attrgetter` for property references

**Further reading:**
- [Python Documentation - Built-in Functions](https://docs.python.org/3/library/functions.html#getattr)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
class Person
    attr_accessor :name
    
    def initialize(name)
        @name = name
    end
end

person = Person.new("Alice")

# Property reference with symbol
name_ref = :name
name = person.send(name_ref)

# Or with method
name_getter = person.method(:name)
name2 = name_getter.call
```

**Special features:**
- Supports symbols for property references
- Uses `send` for dynamic method calls
- Also supports `method` for method references

**Further reading:**
- [Ruby Documentation - Object#send](https://ruby-doc.org/core-3.1.0/Object.html#method-i-send)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
class Person(var name: String)

val person = new Person("Alice")

// Property reference with reflection
import scala.reflect.runtime.universe._
val mirror = runtimeMirror(getClass.getClassLoader)
val personType = typeOf[Person]
val nameSymbol = personType.decl(TermName("name")).asTerm
val nameMethod = mirror.reflect(person).reflectField(nameSymbol)
val name = nameMethod.get.asInstanceOf[String]
```

**Special features:**
- Supports reflection for property references
- Uses Scala reflection API
- More complex syntax for property access

**Further reading:**
- [Scala Documentation - Reflection](https://docs.scala-lang.org/overviews/reflection/overview.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
class Person {
    var name: String
    init(name: String) {
        self.name = name
    }
}

let person = Person(name: "Alice")

// Property reference with KeyPath (since Swift 4.0)
let nameKeyPath: KeyPath<Person, String> = \Person.name
let name = person[keyPath: nameKeyPath]

// Or directly
let nameGetter: (Person) -> String = { $0.name }
let name2 = nameGetter(person)
```

**Special features:**
- Supports KeyPath for property references (since Swift 4.0)
- KeyPaths are typed and type-safe
- Supports both read and write KeyPaths

**Further reading:**
- [Swift Documentation - KeyPath](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/keypaths/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

const person = new Person("Alice");

// Property reference with string
const propertyName: keyof Person = "name";
const name = person[propertyName];

// Or with function
const getName = (p: Person): string => p.name;
const name2 = getName(person);
```

**Special features:**
- Supports string-based property references with `keyof` type
- Properties can be accessed dynamically at runtime
- Supports type annotations for property references

**Further reading:**
- [TypeScript Handbook - Keyof Type Operator](https://www.typescriptlang.org/docs/handbook/2/keyof-types.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
Class Person
    Public Property Name As String
End Class

Dim person As New Person With {.Name = "Alice"}

' Property reference with expression trees (since VB.NET 9.0)
Dim nameRef As System.Linq.Expressions.Expression(Of Func(Of Person, String)) = Function(p) p.Name
Dim nameGetter = nameRef.Compile()
Dim name As String = nameGetter(person)

' Or with reflection
Dim propertyInfo = GetType(Person).GetProperty("Name")
Dim name2 As String = CStr(propertyInfo.GetValue(person))
```

**Special features:**
- Supports expression trees for property references (since VB.NET 9.0)
- Also supports reflection for property access
- Frequently used in LINQ and data binding

**Further reading:**
- [Microsoft VB.NET Documentation - Expression Trees](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/concepts/expression-trees/)

</TabItem>
</Tabs>


## 7.2.5. Uniform Function Call Syntax (UFCS)

Enables using functions both as method calls (`obj.method()`) and as standalone function calls (`method(obj)`). The first parameter of a function can be treated as the object on which the function is called, leading to a more uniform and flexible syntax.

### Languages {#sprachen}

<Tabs availableTabs={['crystal', 'd', 'koka', 'lean4', 'nim', 'roc', 'swift', 'v', 'zig']}>
<TabItem value="crystal" label="Crystal">

```crystal
def to_upper(str : String) : String
    str.upcase
end

str = "hello"

# Standalone function call
result1 = to_upper(str)

# Method call (UFCS)
result2 = str.to_upper
```

**Special features:**
- Supports UFCS natively
- Functions can be called both as methods and as standalone functions
- First parameter is treated as receiver

**Further reading:**
- [Crystal Documentation - Methods](https://crystal-lang.org/reference/1.11/syntax_and_semantics/methods.html)

</TabItem>
<TabItem value="d" label="D">

```d
string toUpper(string str) {
    return str.toUpper();
}

string str = "hello";

// Standalone function call
string result1 = toUpper(str);

// Method call (UFCS, since D 2.0)
string result2 = str.toUpper();
```

**Special features:**
- UFCS was introduced in D 2.0
- Functions can be called both as methods and as standalone functions
- First parameter is treated as receiver

**Further reading:**
- [D Language Specification - Uniform Function Call Syntax](https://dlang.org/spec/function.html#pseudo-member)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Uniform Function Call Syntax (Dot Notation)
fun double(x: int): int
  x * 2

fun increment(x: int): int
  x + 1

// Traditional call
val r1 = double(5)     // 10
val r2 = increment(5)  // 6

// UFCS / Dot notation
val r3 = 5.double      // 10
val r4 = 5.increment   // 6

// Chaining through dot notation
val result = 5.double.increment // 11

// Also with multiple parameters
fun add(x: int, y: int): int
  x + y

val r5 = 3.add(4) // 7
```

**Special features:**
- Koka supports dot notation as natural UFCS
- `x.f` is equivalent to `f(x)`, `x.f(y)` to `f(x, y)`
- Enables natural left-to-right chaining
- Works with all top-level functions

**Further reading:**
- [Koka Language Guide - Dot Notation](https://koka-lang.github.io/koka/doc/book.html#sec-dot)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Uniform Function Call Syntax (Dot Notation)
def List.doubleAll (xs : List Int) : List Int :=
  xs.map (· * 2)

def numbers : List Int := [1, 2, 3, 4, 5]

-- Dot notation (UFCS)
def result1 : List Int := numbers.doubleAll

-- Equivalent standalone function call
def result2 : List Int := List.doubleAll numbers

-- Chaining through dot notation
def result3 : List Int := numbers.map (· * 2) |>.filter (· > 4)
```

**Special features:**
- Lean 4 supports generalized dot notation: `x.f` becomes `T.f x`, where `T` is the type of `x`
- Enables method-like syntax for namespace functions
- Chaining is possible through dot notation or the pipe operator `|>`
- Works automatically for all functions in the type's namespace

**Further reading:**
- [Lean 4 Documentation - Dot Notation](https://lean-lang.org/lean4/doc/expressions/dotnotation.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
proc toUpper(str: string): string =
    return str.toUpper()

let str = "hello"

# Standalone function call
let result1 = toUpper(str)

# Method call (UFCS)
let result2 = str.toUpper()
```

**Special features:**
- Supports UFCS natively
- Functions can be called both as methods and as standalone functions
- First parameter is treated as receiver

**Further reading:**
- [Nim Documentation - Method Call Syntax](https://nim-lang.org/docs/manual.html#procedures-method-call-syntax)

</TabItem>
<TabItem value="roc" label="Roc">

```roc
toUpper = \str -> Str.toUpper str

str = "hello"

# Standalone function call
result1 = toUpper str

# Method call (UFCS)
result2 = str |> toUpper
```

**Special features:**
- Supports UFCS via pipe operator (`|>`)
- Functions can be called both as methods and as standalone functions
- Pipe operator enables method call syntax

**Further reading:**
- [Roc Documentation - Functions](https://www.roc-lang.org/tutorial)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
func toUpper(_ str: String) -> String {
    return str.uppercased()
}

let str = "hello"

// Standalone function call
let result1 = toUpper(str)

// Method call (via extension)
extension String {
    func toUpper() -> String {
        return self.uppercased()
    }
}
let result2 = str.toUpper()
```

**Special features:**
- Supports UFCS via extensions
- Functions can be added as methods via extensions
- First parameter can be treated as receiver

**Further reading:**
- [Swift Documentation - Extensions](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/extensions/)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
fn toUpper(str: []const u8) []const u8 {
    // Implementation
    return str;
}

const str = "hello";

// Standalone function call
const result1 = toUpper(str);

// Method call (via struct methods)
const String = struct {
    data: []const u8,
    
    fn toUpper(self: @This()) []const u8 {
        return toUpper(self.data);
    }
};
```

**Special features:**
- Supports UFCS via struct methods
- Functions can be added as methods via structs
- First parameter can be treated as receiver

**Further reading:**
- [Zig Documentation - Structs](https://ziglang.org/documentation/0.11.0/#structs)

</TabItem>
<TabItem value="v" label="V">

```v
// UFCS: Methods and free functions
struct Point {
    x f64
    y f64
}

fn (p Point) distance(other Point) f64 {
    dx := p.x - other.x
    dy := p.y - other.y
    return (dx * dx + dy * dy)
}

p1 := Point{x: 0.0, y: 0.0}
p2 := Point{x: 3.0, y: 4.0}

// Method call
d := p1.distance(p2)

// Array methods
numbers := [3, 1, 4, 1, 5]
sorted := numbers.sorted()
filtered := numbers.filter(it > 2)
```

**Special features:**
- Methods are defined as free functions with receiver
- UFCS enables fluent method chains
- `it` as implicit parameter in short-form closures

**Further reading:**
- [V Documentation - Methods](https://github.com/vlang/v/blob/master/doc/docs.md#methods)

</TabItem>
</Tabs>


## 7.2.6. Recursion

The ability of a function to call itself. Enables solving problems by repeatedly applying the same function to smaller subproblems.

### Languages {#sprachen}

<Tabs availableTabs={['ada', 'c', 'carbon', 'clojure', 'common-lisp', 'crystal', 'csharp', 'cpp', 'd', 'dart', 'eiffel', 'elixir', 'elm', 'erlang', 'fsharp', 'fortran', 'gleam', 'go', 'groovy', 'haskell', 'haxe', 'idris', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'lua', 'matlab', 'mercury', 'mojo', 'nim', 'objective-c', 'object-pascal', 'ocaml', 'octave', 'odin', 'perl', 'php', 'prolog', 'purescript', 'python', 'r', 'racket', 'roc', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'vbnet', 'v', 'wolfram-language', 'zig']}>
<TabItem value="ada" label="Ada">

```ada
function Factorial(N : Natural) return Natural is
begin
    if N <= 1 then
        return 1;
    else
        return N * Factorial(N - 1);
    end if;
end Factorial;

Result : Natural := Factorial(5);
```

**Special features:**
- Supports recursion natively
- Recursive functions must be explicitly declared

**Further reading:**
- [Ada Documentation - Subprograms](https://learn.adacore.com/courses/intro-to-ada/chapters/subprograms.html)

</TabItem>
<TabItem value="c" label="C">

```c
int factorial(int n) {
    if (n <= 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

int result = factorial(5);
```

**Special features:**
- Supports recursion natively
- Recursive functions must be declared before use

**Further reading:**
- [C Documentation - Functions](https://en.cppreference.com/w/c/language/functions)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
fn Factorial(n: i32) -> i32 {
    if (n <= 1) {
        return 1;
    } else {
        return n * Factorial(n - 1);
    }
}

var result = Factorial(5);
```

**Special features:**
- Experimental language, syntax may still change
- Supports recursion natively

**Further reading:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
(defn factorial [n]
  (if (<= n 1)
    1
    (* n (factorial (dec n)))))

(def result (factorial 5))
```

**Special features:**
- Supports recursion natively
- Recursive functions can use `recur` for tail-call optimization

**Further reading:**
- [Clojure Documentation - Recursion](https://clojure.org/reference/special_forms#recur)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
(defun factorial (n)
  (if (<= n 1)
      1
      (* n (factorial (- n 1)))))

(defvar result (factorial 5))
```

**Special features:**
- Supports recursion natively
- Recursive functions can use `labels` for local recursion

**Further reading:**
- [Common Lisp HyperSpec - Functions](http://www.lispworks.com/documentation/HyperSpec/Body/f_fun.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
def factorial(n : Int32) : Int32
    if n <= 1
        1
    else
        n * factorial(n - 1)
    end
end

result = factorial(5)
```

**Special features:**
- Supports recursion natively
- Recursive functions can use tail-call optimization

**Further reading:**
- [Crystal Documentation - Methods](https://crystal-lang.org/reference/1.11/syntax_and_semantics/methods.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
int Factorial(int n) {
    if (n <= 1) {
        return 1;
    } else {
        return n * Factorial(n - 1);
    }
}

int result = Factorial(5);
```

**Special features:**
- Supports recursion natively
- Recursive functions can use tail-call optimization (depending on compiler)

**Further reading:**
- [Microsoft C# Documentation - Methods](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/methods)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
int factorial(int n) {
    if (n <= 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

int result = factorial(5);
```

**Special features:**
- Supports recursion natively
- Recursive functions can use tail-call optimization (depending on compiler)

**Further reading:**
- [cppreference.com - Functions](https://en.cppreference.com/w/cpp/language/functions)

</TabItem>
<TabItem value="d" label="D">

```d
int factorial(int n) {
    if (n <= 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

int result = factorial(5);
```

**Special features:**
- Supports recursion natively
- Recursive functions can use tail-call optimization

**Further reading:**
- [D Language Specification - Functions](https://dlang.org/spec/function.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
int factorial(int n) {
    if (n <= 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

int result = factorial(5);
```

**Special features:**
- Supports recursion natively
- Recursive functions can use tail-call optimization

**Further reading:**
- [Dart Language Tour - Functions](https://dart.dev/guides/language/language-tour#functions)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
factorial (n: INTEGER): INTEGER
    do
        if n <= 1 then
            Result := 1
        else
            Result := n * factorial(n - 1)
        end
    end

result: INTEGER
    do
        Result := factorial(5)
    end
```

**Special features:**
- Supports recursion natively
- Recursive functions must be explicitly declared

**Further reading:**
- [Eiffel Documentation - Routines](https://www.eiffel.org/doc/eiffel/Routines)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
def factorial(n) do
    if n <= 1 do
        1
    else
        n * factorial(n - 1)
    end
end

result = factorial(5)
```

**Special features:**
- Supports recursion natively
- Recursive functions can use tail-call optimization

**Further reading:**
- [Elixir Documentation - Functions](https://elixir-lang.org/getting-started/basic-types.html#functions)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
factorial : Int -> Int
factorial n =
    if n <= 1 then
        1
    else
        n * factorial (n - 1)

result = factorial 5
```

**Special features:**
- Supports recursion natively
- Recursive functions can be used with tail call optimization

**Further reading:**
- [Elm Documentation - Functions](https://guide.elm-lang.org/core_language.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
factorial(N) ->
    if
        N =< 1 -> 1;
        true -> N * factorial(N - 1)
    end.

Result = factorial(5).
```

**Special features:**
- Supports recursion natively
- Recursive functions can be used with tail call optimization

**Further reading:**
- [Erlang Documentation - Functions](https://www.erlang.org/doc/reference_manual/functions.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
let rec factorial n =
    if n <= 1 then
        1
    else
        n * factorial (n - 1)

let result = factorial 5
```

**Special features:**
- Supports recursion natively
- Recursive functions must be marked with `rec`
- Recursive functions can be used with tail call optimization

**Further reading:**
- [F# Documentation - Functions](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/functions/)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
recursive function factorial(n) result(res)
    integer, intent(in) :: n
    integer :: res
    if (n <= 1) then
        res = 1
    else
        res = n * factorial(n - 1)
    end if
end function factorial

result = factorial(5)
```

**Special features:**
- Supports recursion natively (since Fortran 90)
- Recursive functions must be marked with `recursive`

**Further reading:**
- [Fortran Wiki - Recursive Functions](https://fortranwiki.org/fortran/show/recursive)

</TabItem>
<TabItem value="gleam" label="Gleam">

```erlang
fn factorial(n: Int) -> Int {
  case n {
    n if n <= 1 -> 1
    n -> n * factorial(n - 1)
  }
}

let result = factorial(5)
```

**Special features:**
- Supports recursion natively
- Recursive functions can be used with tail call optimization

**Further reading:**
- [Gleam Documentation - Functions](https://gleam.run/documentation/tour/functions/)

</TabItem>
<TabItem value="go" label="Go">

```go
func factorial(n int) int {
    if n <= 1 {
        return 1
    } else {
        return n * factorial(n - 1)
    }
}

result := factorial(5)
```

**Special features:**
- Supports recursion natively
- Recursive functions can be used with tail call optimization

**Further reading:**
- [Go Documentation - Functions](https://go.dev/tour/basics/11)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
def factorial(n) {
    if (n <= 1) {
        return 1
    } else {
        return n * factorial(n - 1)
    }
}

def result = factorial(5) // 120
```

**Special features:**
- Supports recursion natively
- No automatic tail call optimization (see `@TailRecursive` annotation)
- Recursion depth limited by JVM stack size

**Further reading:**
- [Groovy Documentation - Methods](https://groovy-lang.org/objectorientation.html#_methods)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
factorial :: Int -> Int
factorial n
    | n <= 1 = 1
    | otherwise = n * factorial (n - 1)

result = factorial 5
```

**Special features:**
- Supports recursion natively
- Recursive functions can be used with tail call optimization

**Further reading:**
- [Haskell Documentation - Functions](https://www.haskell.org/tutorial/functions.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
function factorial(n:Int):Int {
    if (n <= 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

var result = factorial(5);
```

**Special features:**
- Supports recursion natively
- No guaranteed tail call optimization (target-dependent)

**Further reading:**
- [Haxe Documentation - Functions](https://haxe.org/manual/types-function.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
factorial : Int -> Int
factorial n = if n <= 1 then 1 else n * factorial (n - 1)

result : Int
result = factorial 5
```

**Special features:**
- Supports recursion natively
- Recursive functions can be used with tail call optimization

**Further reading:**
- [Idris Documentation - Functions](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html)

</TabItem>
<TabItem value="java" label="Java">

```java
int factorial(int n) {
    if (n <= 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

int result = factorial(5);
```

**Special features:**
- Supports recursion natively
- No tail call optimization (JVM does not support TCO)
- Deep recursion may result in `StackOverflowError`

**Further reading:**
- [Oracle Java Documentation - Methods](https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
function factorial(n) {
    if (n <= 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

const result = factorial(5);
```

**Special features:**
- Supports recursion natively
- Recursive functions can be used with tail call optimization (depending on the engine)

**Further reading:**
- [MDN Web Docs - Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
function factorial(n::Int)::Int
    if n <= 1
        return 1
    else
        return n * factorial(n - 1)
    end
end

result = factorial(5)
```

**Special features:**
- Supports recursion natively
- Recursive functions can be used with tail call optimization

**Further reading:**
- [Julia Documentation - Functions](https://docs.julialang.org/en/v1/manual/functions/)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Recursion
fun factorial(n: int): int
  if n <= 1 then 1
  else n * factorial(n - 1)

val result = factorial(5) // 120

// Tail-recursive Version
fun factorial-tail(n: int, acc: int = 1): int
  if n <= 1 then acc
  else factorial-tail(n - 1, n * acc)

// Recursion over lists
fun sum(xs: list<int>): int
  match xs
    Nil        -> 0
    Cons(x, rest) -> x + sum(rest)

val s = sum([1, 2, 3, 4, 5]) // 15
```

**Special features:**
- Recursion is the primary iteration mechanism in Koka
- Tail-recursive functions are optimized (TCO)
- Pattern matching on lists with `Cons`/`Nil` is idiomatic
- `fun` functions are recursive by default (no `rec` needed)

**Further reading:**
- [Koka Language Guide - Functions](https://koka-lang.github.io/koka/doc/book.html#sec-functions)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
fun factorial(n: Int): Int {
    return if (n <= 1) {
        1
    } else {
        n * factorial(n - 1)
    }
}

val result = factorial(5)
```

**Special features:**
- Supports recursion natively
- Recursive functions can be used with tail call optimization

**Further reading:**
- [Kotlin Documentation - Functions](https://kotlinlang.org/docs/functions.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Recursion
def factorial : Nat → Nat
  | 0 => 1
  | n + 1 => (n + 1) * factorial n

def result : Nat := factorial 5 -- 120
```

**Special features:**
- Lean 4 supports recursion natively with pattern matching on function definitions
- The compiler checks that recursive calls terminate (Termination Checker)
- For non-trivial termination, `decreasing_by` or `termination_by` can be used
- Structural recursion is automatically recognized

**Further reading:**
- [Lean 4 Documentation - Recursion](https://lean-lang.org/lean4/doc/functions.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
function factorial(n)
    if n <= 1 then
        return 1
    else
        return n * factorial(n - 1)
    end
end

local result = factorial(5)
```

**Special features:**
- Supports recursion natively
- Recursive functions can be used with tail call optimization

**Further reading:**
- [Lua Documentation - Functions](https://www.lua.org/manual/5.4/manual.html#2.5.9)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
function result = factorial(n)
    if n <= 1
        result = 1;
    else
        result = n * factorial(n - 1);
    end
end

result = factorial(5);
```

**Special features:**
- Supports recursion natively
- No tail call optimization available
- Recursion depth is limited by memory

**Further reading:**
- [MATLAB Documentation - Functions](https://www.mathworks.com/help/matlab/ref/function.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Recursion
:- module recursion.
:- interface.
:- import_module io.
:- pred main(io::di, io::uo) is det.
:- implementation.
:- import_module int, list, string.

% Simple recursion
:- func factorial(int) = int.
factorial(N) =
    ( if N =< 1 then 1
      else N * factorial(N - 1)
    ).

% Recursion over lists
:- func sum_list(list(int)) = int.
sum_list([]) = 0.
sum_list([H|T]) = H + sum_list(T).

% Tail-recursive version with accumulator
:- func factorial_acc(int, int) = int.
factorial_acc(N, Acc) =
    ( if N =< 1 then Acc
      else factorial_acc(N - 1, N * Acc)
    ).

:- pred main(io::di, io::uo) is det.
main(!IO) :-
    io.format("5! = %d\n", [i(factorial(5))], !IO),
    io.format("sum([1,2,3]) = %d\n", [i(sum_list([1, 2, 3]))], !IO),
    io.format("5! (tail-rec) = %d\n", [i(factorial_acc(5, 1))], !IO).
```

**Special features:**
- Recursion is the primary control flow paradigm in Mercury (no loops).
- Mercury supports pattern matching on list structures for recursive processing.
- Tail-recursive predicates and functions are optimized by the compiler.
- The compiler can recognize tail recursion and optimize it automatically.

**Further reading:**
- [Mercury Language Reference - Determinism](https://www.mercurylang.org/information/doc-release/mercury_ref/Determinism.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
fn factorial(n: Int) -> Int:
    if n <= 1:
        return 1
    else:
        return n * factorial(n - 1)

var result = factorial(5)
```

**Special features:**
- Supports recursion natively
- Recursive functions can be used with tail call optimization

**Further reading:**
- [Mojo Documentation - Functions](https://docs.modular.com/mojo/manual/functions/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
proc factorial(n: int): int =
    if n <= 1:
        return 1
    else:
        return n * factorial(n - 1)

var result = factorial(5)
```

**Special features:**
- Supports recursion natively
- Recursive functions can be used with tail call optimization

**Further reading:**
- [Nim Documentation - Procedures](https://nim-lang.org/docs/manual.html#procedures)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
int factorial(int n) {
    if (n <= 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

int result = factorial(5);
```

**Special features:**
- Supports recursion natively
- Recursive functions can be used with tail call optimization

**Further reading:**
- [Objective-C Documentation - Functions](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
function Factorial(n: Integer): Integer;
begin
    if n <= 1 then
        Result := 1
    else
        Result := n * Factorial(n - 1);
end;

var
    result: Integer;
begin
    result := Factorial(5);
end;
```

**Special features:**
- Supports recursion natively
- Recursive functions must be explicitly declared

**Further reading:**
- [Free Pascal Documentation - Functions](https://www.freepascal.org/docs-html/ref/refsu68.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
let rec factorial n =
    if n <= 1 then
        1
    else
        n * factorial (n - 1)

let result = factorial 5
```

**Special features:**
- Supports recursion natively
- Recursive functions must be marked with `rec`
- Recursive functions can be used with tail call optimization

**Further reading:**
- [OCaml Documentation - Functions](https://ocaml.org/docs/first-hour)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
function result = factorial(n)
    if n <= 1
        result = 1;
    else
        result = n * factorial(n - 1);
    end
end

result = factorial(5);
```

**Special features:**
- Supports recursion natively
- No tail call optimization (stack overflow possible with deep recursion)

**Further reading:**
- [GNU Octave Documentation - Functions](https://octave.org/doc/v8.1.0/Functions.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
factorial :: proc(n: int) -> int {
    if n <= 1 {
        return 1
    } else {
        return n * factorial(n - 1)
    }
}

result := factorial(5)
```

**Special features:**
- Supports recursion natively
- Recursive functions can be used with tail call optimization

**Further reading:**
- [Odin Documentation - Procedures](https://odin-lang.org/docs/overview/#procedures)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
sub factorial {
    my ($n) = @_;
    if ($n <= 1) {
        return 1;
    } else {
        return $n * factorial($n - 1);
    }
}

my $result = factorial(5);
```

**Special features:**
- Supports recursion natively
- No automatic tail call optimization
- Manual tail call behavior possible with `goto &func`

**Further reading:**
- [Perl Documentation - Functions](https://perldoc.perl.org/perlsub)

</TabItem>
<TabItem value="php" label="PHP">

```php
function factorial($n) {
    if ($n <= 1) {
        return 1;
    } else {
        return $n * factorial($n - 1);
    }
}

$result = factorial(5);
```

**Special features:**
- Supports recursion natively
- No tail call optimization (deep recursion can lead to stack overflow)
- Recursion depth limited by stack size

**Further reading:**
- [PHP Documentation - Functions](https://www.php.net/manual/en/functions.user-defined.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
factorial(0, 1).
factorial(N, Result) :-
    N > 0,
    N1 is N - 1,
    factorial(N1, R1),
    Result is N * R1.

?- factorial(5, Result).
%  Result = 120
```

**Special features:**
- Recursion is the primary control flow mechanism in Prolog (no loops in the classical sense)
- Base case and recursive case are defined as separate clauses
- Pattern matching in the clause head replaces conditional branches

**Further reading:**
- [SWI-Prolog Documentation - Recursion](https://www.swi-prolog.org/pldoc/man?section=recursion)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
factorial :: Int -> Int
factorial n
    | n <= 1 = 1
    | otherwise = n * factorial (n - 1)

result = factorial 5
```

**Special features:**
- Supports recursion natively
- Recursive functions can be used with tail call optimization

**Further reading:**
- [PureScript Documentation - Functions](https://book.purescript.org/chapter3.html)

</TabItem>
<TabItem value="python" label="Python">

```python
def factorial(n):
    if n <= 1:
        return 1
    else:
        return n * factorial(n - 1)

result = factorial(5)
```

**Special features:**
- Supports recursion natively
- Default recursion limit of 1000 (`sys.setrecursionlimit()` to change)
- Python does not support tail call optimization

**Further reading:**
- [Python Documentation - Functions](https://docs.python.org/3/tutorial/controlflow.html#defining-functions)

</TabItem>
<TabItem value="r" label="R">

```r
factorial <- function(n) {
    if (n <= 1) {
        return(1)
    } else {
        return(n * factorial(n - 1))
    }
}

result <- factorial(5)
```

**Special features:**
- Supports recursion natively
- No native tail call optimization
- Stack depth is limited (default approximately 1000 calls)

**Further reading:**
- [R Documentation - Functions](https://cran.r-project.org/doc/manuals/r-release/R-lang.html#Function-objects)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
(define (factorial n)
  (if (<= n 1)
      1
      (* n (factorial (- n 1)))))

(define result (factorial 5))
```

**Special features:**
- Supports recursion natively
- Recursive functions can be used with tail call optimization

**Further reading:**
- [Racket Documentation - Functions](https://docs.racket-lang.org/guide/define.html)

</TabItem>
<TabItem value="roc" label="Roc">

```roc
factorial = \n ->
    if n <= 1 then
        1
    else
        n * factorial (n - 1)

result = factorial 5
```

**Special features:**
- Supports recursion natively
- Recursive functions can be used with tail call optimization

**Further reading:**
- [Roc Documentation - Functions](https://www.roc-lang.org/tutorial)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
def factorial(n)
    if n <= 1
        return 1
    else
        return n * factorial(n - 1)
    end
end

result = factorial(5)
```

**Special features:**
- Supports recursion natively
- Recursive functions can be used with tail call optimization

**Further reading:**
- [Ruby Documentation - Methods](https://ruby-doc.org/core-3.1.0/Method.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
fn factorial(n: i32) -> i32 {
    if n <= 1 {
        1
    } else {
        n * factorial(n - 1)
    }
}

let result = factorial(5);
```

**Special features:**
- Supports recursion natively
- Recursive functions can be used with tail call optimization

**Further reading:**
- [Rust Book - Functions](https://doc.rust-lang.org/book/ch03-03-how-functions-work.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
def factorial(n: Int): Int = {
    if (n <= 1) {
        1
    } else {
        n * factorial(n - 1)
    }
}

val result = factorial(5)
```

**Special features:**
- Supports recursion natively
- Recursive functions can be used with tail call optimization

**Further reading:**
- [Scala Documentation - Functions](https://docs.scala-lang.org/tour/basics.html#functions)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
(define (factorial n)
  (if (<= n 1)
      1
      (* n (factorial (- n 1)))))

(define result (factorial 5))
```

**Special features:**
- Supports recursion natively
- Recursive functions can be used with tail call optimization

**Further reading:**
- [Scheme Documentation - Functions](https://www.scheme.com/tspl4/start.html#./start:h0)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
func factorial(_ n: Int) -> Int {
    if n <= 1 {
        return 1
    } else {
        return n * factorial(n - 1)
    }
}

let result = factorial(5)
```

**Special features:**
- Supports recursion natively
- Recursive functions can be used with tail call optimization

**Further reading:**
- [Swift Documentation - Functions](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/functions/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
function factorial(n: number): number {
    if (n <= 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

const result = factorial(5);
```

**Special features:**
- Supports recursion natively
- Recursive functions can be used with tail call optimization (depending on the engine)

**Further reading:**
- [TypeScript Handbook - Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
Function Factorial(n As Integer) As Integer
    If n <= 1 Then
        Return 1
    Else
        Return n * Factorial(n - 1)
    End If
End Function

Dim result As Integer = Factorial(5)
```

**Special features:**
- Supports recursion natively
- Recursive functions can be used with tail call optimization

**Further reading:**
- [Microsoft VB.NET Documentation - Functions](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/procedures/function-procedures)

</TabItem>
<TabItem value="v" label="V">

```v
fn factorial(n int) int {
    if n <= 1 {
        return 1
    } else {
        return n * factorial(n - 1)
    }
}

result := factorial(5)
```

**Special features:**
- Supports recursion natively
- Recursive functions can be used with tail call optimization

**Further reading:**
- [V Documentation - Functions](https://github.com/vlang/v/blob/master/doc/docs.md#functions)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```wolfram
factorial[n_] := If[n <= 1, 1, n * factorial[n - 1]]

result = factorial[5]
```

**Special features:**
- Supports recursion natively
- Recursive functions can be used with tail call optimization

**Further reading:**
- [Wolfram Language Documentation - Functions](https://reference.wolfram.com/language/guide/Functions.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
fn factorial(n: i32) i32 {
    if (n <= 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

const result = factorial(5);
```

**Special features:**
- Supports recursion natively
- Recursive functions can be used with tail call optimization

**Further reading:**
- [Zig Documentation - Functions](https://ziglang.org/documentation/0.11.0/#Functions)

</TabItem>
</Tabs>


## 7.2.7. Tail Call Optimization

An optimization technique where recursive function calls in tail position (as the last operation before returning) are optimized to avoid stack overflows and reduce memory consumption. The recursive call is replaced by a jump, so no new stack frame is created.

### Languages {#sprachen}

<Tabs availableTabs={['clojure', 'elixir', 'elm', 'erlang', 'fsharp', 'gleam', 'groovy', 'haskell', 'javascript', 'koka', 'kotlin', 'lean4', 'lua', 'mercury', 'ocaml', 'prolog', 'purescript', 'racket', 'roc', 'rust', 'scheme', 'swift']} yellowTabs={['scala']}>
<TabItem value="clojure" label="Clojure">

```clojure
(defn factorial [n]
  (letfn [(fact-helper [n acc]
            (if (<= n 1)
              acc
              (recur (dec n) (* n acc))))]
    (fact-helper n 1)))

(def result (factorial 5))
```

**Special features:**
- Supports TCO via `recur` (since Clojure 1.0)
- `recur` must be explicitly used for tail recursion
- Only possible within the same function or `loop`

**Further reading:**
- [Clojure Documentation - Recur](https://clojure.org/reference/special_forms#recur)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
defmodule Factorial do
    def factorial(n) do
        factorial_helper(n, 1)
    end
    
    defp factorial_helper(n, acc) when n <= 1 do
        acc
    end
    
    defp factorial_helper(n, acc) do
        factorial_helper(n - 1, n * acc)
    end
end

result = Factorial.factorial(5)
```

**Special features:**
- Supports TCO natively
- Tail-recursive functions are automatically optimized
- Erlang VM optimizes tail calls

**Further reading:**
- [Elixir Documentation - Functions](https://elixir-lang.org/getting-started/basic-types.html#functions)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
factorial : Int -> Int
factorial n =
    let
        factHelper n acc =
            if n <= 1 then
                acc
            else
                factHelper (n - 1) (n * acc)
    in
    factHelper n 1

result = factorial 5
```

**Special features:**
- The Elm compiler recognizes tail-recursive functions and converts them to loops in the generated JavaScript
- Tail-recursive functions do not consume stack memory
- Only direct tail recursion is optimized (no mutual recursion)

**Further reading:**
- [Elm Documentation - Functions](https://guide.elm-lang.org/core_language.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
-module(factorial).
-export([factorial/1]).

factorial(N) ->
    factorial_helper(N, 1).

factorial_helper(N, Acc) when N =< 1 ->
    Acc;
factorial_helper(N, Acc) ->
    factorial_helper(N - 1, N * Acc).

Result = factorial:factorial(5).
```

**Special features:**
- Supports TCO natively
- Tail-recursive functions are automatically optimized
- Erlang VM optimizes tail calls

**Further reading:**
- [Erlang Documentation - Functions](https://www.erlang.org/doc/reference_manual/functions.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
let rec factorial n =
    let rec factorialHelper n acc =
        if n <= 1 then
            acc
        else
            factorialHelper (n - 1) (n * acc)
    factorialHelper n 1

let result = factorial 5
```

**Special features:**
- Supports TCO natively
- Tail-recursive functions are automatically optimized
- .NET Runtime optimizes tail calls

**Further reading:**
- [F# Documentation - Functions](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/functions/)

</TabItem>
<TabItem value="gleam" label="Gleam">

```erlang
fn factorial(n: Int) -> Int {
  fn factorial_helper(n: Int, acc: Int) -> Int {
    case n {
      n if n <= 1 -> acc
      n -> factorial_helper(n - 1, n * acc)
    }
  }
  factorial_helper(n, 1)
}

let result = factorial(5)
```

**Special features:**
- Supports TCO natively
- Tail-recursive functions are automatically optimized
- Erlang VM optimizes tail calls

**Further reading:**
- [Gleam Documentation - Functions](https://gleam.run/documentation/tour/functions/)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
factorial :: Int -> Int
factorial n = factorialHelper n 1
    where
        factorialHelper n acc
            | n <= 1 = acc
            | otherwise = factorialHelper (n - 1) (n * acc)

result = factorial 5
```

**Special features:**
- Supports TCO natively
- Tail-recursive functions are automatically optimized
- GHC optimizes tail calls

**Further reading:**
- [Haskell Documentation - Functions](https://www.haskell.org/tutorial/functions.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
function factorial(n) {
    function factorialHelper(n, acc) {
        if (n <= 1) {
            return acc;
        } else {
            return factorialHelper(n - 1, n * acc);
        }
    }
    return factorialHelper(n, 1);
}

const result = factorial(5);
```

**Special features:**
- Supports TCO in ES6 (since ES2015)
- Not all JavaScript engines implement TCO (e.g., V8 does not)
- Tail-recursive functions are only optimized in certain engines

**Further reading:**
- [MDN Web Docs - Tail Call Optimization](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#tail_call_optimization)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Tail Call Optimization
fun factorial(n: int, acc: int = 1): int
  if n <= 1 then acc
  else factorial(n - 1, n * acc) // Tail-recursive call

val result = factorial(5) // 120

// TCO for list operations
fun sum-tail(xs: list<int>, acc: int = 0): int
  match xs
    Nil           -> acc
    Cons(x, rest) -> sum-tail(rest, acc + x) // Tail Call

val s = sum-tail([1, 2, 3, 4, 5]) // 15
```

**Special features:**
- Koka automatically optimizes tail-recursive calls
- No special annotation (like `tailrec`) needed
- The compiler compiles to C and uses TCO
- Perceus reference counting enables efficient tail-recursive data structures

**Further reading:**
- [Koka Language Guide - Functions](https://koka-lang.github.io/koka/doc/book.html#sec-functions)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
tailrec fun factorial(n: Int, acc: Int = 1): Int {
    return if (n <= 1) {
        acc
    } else {
        factorial(n - 1, n * acc)
    }
}

val result = factorial(5)
```

**Special features:**
- Supports TCO with `tailrec` modifier (since Kotlin 1.0)
- `tailrec` must be explicitly used on the recursive function
- Compiler optimizes tail calls only with `tailrec` and issues a warning if the call is not in tail position

**Further reading:**
- [Kotlin Documentation - Tail Recursive Functions](https://kotlinlang.org/docs/functions.html#tail-recursive-functions)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Tail Call Optimization
def factorial (n : Nat) (acc : Nat := 1) : Nat :=
  match n with
  | 0 => acc
  | n + 1 => factorial n ((n + 1) * acc)

def result : Nat := factorial 5 -- 120
```

**Special features:**
- The Lean 4 compiler automatically optimizes tail-recursive functions
- Tail calls are converted to loops to avoid stack overflows
- No explicit annotation (like `tailrec`) needed — optimization happens automatically
- The Termination Checker ensures that recursion terminates

**Further reading:**
- [Lean 4 Documentation - Recursion](https://lean-lang.org/lean4/doc/functions.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Tail Call Optimization
:- module tco.
:- interface.
:- import_module io.
:- pred main(io::di, io::uo) is det.
:- implementation.
:- import_module int, string.

% Tail-recursive function with accumulator
:- func factorial(int) = int.
factorial(N) = factorial_acc(N, 1).

:- func factorial_acc(int, int) = int.
factorial_acc(N, Acc) =
    ( if N =< 1 then Acc
      else factorial_acc(N - 1, N * Acc)
    ).

% Tail-rekursives Prädikat
:- pred sum_to(int::in, int::in, int::out) is det.
sum_to(N, Acc, Result) :-
    ( if N =< 0 then
        Result = Acc
    else
        sum_to(N - 1, Acc + N, Result)
    ).

:- pred main(io::di, io::uo) is det.
main(!IO) :-
    io.format("5! = %d\n", [i(factorial(5))], !IO),
    sum_to(100, 0, Sum),
    io.format("sum(1..100) = %d\n", [i(Sum)], !IO).
```

**Special features:**
- The Mercury compiler (Melbourne Mercury Compiler) automatically optimizes tail-recursive calls.
- Tail calls in `det` and `semidet` predicates are converted to loops.
- No special annotation required — optimization happens automatically.
- Accumulator pattern is the recommended technique for tail-recursive functions.

**Further reading:**
- [Mercury FAQ - Tail Recursion](https://www.mercurylang.org/information/doc-release/mercury_faq/index.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
let rec factorial n =
    let rec factorial_helper n acc =
        if n <= 1 then
            acc
        else
            factorial_helper (n - 1) (n * acc)
    in
    factorial_helper n 1

let result = factorial 5
```

**Special features:**
- Supports TCO natively
- Tail-recursive functions are automatically optimized
- OCaml compiler optimizes tail calls

**Further reading:**
- [OCaml Documentation - Functions](https://ocaml.org/docs/first-hour)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Tail-rekursive Version mit Akkumulator
factorial(N, Result) :-
    factorial_helper(N, 1, Result).

factorial_helper(0, Acc, Acc).
factorial_helper(N, Acc, Result) :-
    N > 0,
    N1 is N - 1,
    Acc1 is N * Acc,
    factorial_helper(N1, Acc1, Result).

?- factorial(5, Result).
%  Result = 120
```

**Special features:**
- Prolog implementations automatically optimize Last Call Optimization (LCO)
- Tail-recursive predicates are executed without additional stack consumption
- Accumulator pattern is the standard procedure for tail-recursive predicates

**Further reading:**
- [SWI-Prolog Documentation - Last Call Optimization](https://www.swi-prolog.org/pldoc/man?section=memory)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
factorial :: Int -> Int
factorial n = factorialHelper n 1
    where
        factorialHelper n acc
            | n <= 1 = acc
            | otherwise = factorialHelper (n - 1) (n * acc)

result = factorial 5
```

**Special features:**
- Supports TCO natively
- Tail-recursive functions are automatically optimized
- JavaScript compiler optimizes tail calls

**Further reading:**
- [PureScript Documentation - Functions](https://book.purescript.org/chapter3.html)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
(define (factorial n)
  (define (factorial-helper n acc)
    (if (<= n 1)
        acc
        (factorial-helper (- n 1) (* n acc))))
  (factorial-helper n 1))

(define result (factorial 5))
```

**Special features:**
- Supports TCO natively
- Tail-recursive functions are automatically optimized
- Racket optimizes tail calls

**Further reading:**
- [Racket Documentation - Functions](https://docs.racket-lang.org/guide/define.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
fn factorial(n: i32) -> i32 {
    fn factorial_helper(n: i32, acc: i32) -> i32 {
        if n <= 1 {
            acc
        } else {
            factorial_helper(n - 1, n * acc)
        }
    }
    factorial_helper(n, 1)
}

let result = factorial(5);
```

**Special features:**
- Supports TCO in certain cases
- Tail-recursive functions are sometimes optimized (depending on the compiler)
- LLVM optimizes tail calls in some cases

**Further reading:**
- [Rust Book - Functions](https://doc.rust-lang.org/book/ch03-03-how-functions-work.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
(define (factorial n)
  (define (factorial-helper n acc)
    (if (<= n 1)
        acc
        (factorial-helper (- n 1) (* n acc))))
  (factorial-helper n 1))

(define result (factorial 5))
```

**Special features:**
- Supports TCO natively
- Tail-recursive functions are automatically optimized
- Scheme specification requires TCO

**Further reading:**
- [Scheme Documentation - Tail Calls](https://www.scheme.com/tspl4/start.html#./start:h0)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
func factorial(_ n: Int) -> Int {
    func factorialHelper(_ n: Int, _ acc: Int) -> Int {
        if n <= 1 {
            return acc
        } else {
            return factorialHelper(n - 1, n * acc)
        }
    }
    return factorialHelper(n, 1)
}

let result = factorial(5)
```

**Special features:**
- Supports TCO in certain cases
- Tail-recursive functions are sometimes optimized (depending on the compiler)
- Swift compiler optimizes tail calls in some cases

**Further reading:**
- [Swift Documentation - Functions](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/functions/)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
import groovy.transform.TailRecursive

// Tail Call Optimization with @TailRecursive
@TailRecursive
def factorial(BigInteger n, BigInteger acc = 1) {
    if (n <= 1) return acc
    return factorial(n - 1, n * acc)
}

println factorial(1000) // Works without StackOverflow
```

**Special features:**
- `@TailRecursive` AST transformation converts tail recursion to a loop
- Only applicable for direct tail calls
- Compilation error if method is not tail-recursive

**Further reading:**
- [Groovy Documentation - TailRecursive](https://docs.groovy-lang.org/latest/html/gapi/groovy/transform/TailRecursive.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Tail Call Optimization (Proper Tail Calls)
-- Lua garantiert Tail Call Optimization

-- Tail-recursive factorial
function factorial(n, acc)
    acc = acc or 1
    if n <= 1 then
        return acc
    end
    return factorial(n - 1, n * acc)  -- Proper Tail Call
end

print(factorial(1000000))  -- No Stack Overflow

-- State machine with Tail Calls
function state_a()
    print("State A")
    return state_b()    -- Proper Tail Call
end

function state_b()
    print("State B")
    return state_a()    -- Proper Tail Call (infinite recursion without Stack Overflow)
end
```

**Special features:**
- Lua guarantees Proper Tail Calls (not just optimization, but part of the specification)
- A tail call occurs when `return func(args)` is the last action
- No stack growth with tail calls
- Enables unlimited recursion depth for state machines
- Only `return func(args)` is a tail call, not `return func(args) + 1` etc.

**Further reading:**
- [Lua Reference Manual - Function Calls](https://www.lua.org/manual/5.4/manual.html#3.4.10)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Tail Call Optimization
factorialHelper : I64, I64 -> I64
factorialHelper = \n, acc ->
    if n <= 1 then
        acc
    else
        factorialHelper (n - 1) (acc * n)

factorial : I64 -> I64
factorial = \n -> factorialHelper n 1
```

**Special features:**
- TCO is automatically applied by the compiler
- Accumulator pattern for tail-recursive functions
- Enables efficient recursion

**Further reading:**
- [Roc Documentation](https://www.roc-lang.org/tutorial)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
import scala.annotation.tailrec

@tailrec
def factorial(n: Int, acc: Int = 1): Int =
{
    if (n <= 1) acc
    else factorial(n - 1, n * acc)
}

val result = factorial(5) // 120
```

**Special features:**
- `@tailrec` annotation guarantees tail call optimization at compile time
- Compiler error if function is not tail-recursive
- Only direct self-recursion is optimized (no mutual recursion)
- Prevents stack overflows with deep recursion

**Further reading:**
- [Scala Documentation - Tail Recursion](https://docs.scala-lang.org/scala3/book/fp-functions-are-values.html)

</TabItem>
</Tabs>


## 7.2.8. Multiple Return Values / Tuples

The ability of a function to return multiple values simultaneously, typically as tuples or structured return values. Enables treating related values together without having to resort to out parameters or wrapper objects.

### Languages {#sprachen}

<Tabs availableTabs={['clojure', 'common-lisp', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'elixir', 'elm', 'erlang', 'fsharp', 'gleam', 'go', 'groovy', 'haskell', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'lua', 'matlab', 'mercury', 'nim', 'ocaml', 'octave', 'perl', 'php', 'prolog', 'python', 'r', 'racket', 'roc', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'v', 'vbnet', 'wolfram-language', 'zig']}>
<TabItem value="csharp" label="C#">

```csharp
(int quotient, int remainder) Divide(int dividend, int divisor) {
    return (dividend / divisor, dividend % divisor);
}

var (quotient, remainder) = Divide(10, 3);
```

**Special features:**
- Supports tuples for multiple return values (since C# 7.0)
- Also supports ValueTuples for named return values
- Destructuring assignment for tuple assignment

**Further reading:**
- [Microsoft C# Documentation - Tuples](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/value-tuples)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
(defn divide [dividend divisor]
  [(quot dividend divisor) (rem dividend divisor)])

(let [[quotient remainder] (divide 10 3)]
  [quotient remainder])
```

**Special features:**
- Supports vectors for multiple return values
- Destructuring assignment for vector assignment
- Functions can return vectors

**Further reading:**
- [Clojure Documentation - Vectors](https://clojure.org/reference/data_structures#vectors)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
(defun divide (dividend divisor)
  (values (floor dividend divisor) (mod dividend divisor)))

(multiple-value-bind (quotient remainder) (divide 10 3)
  (list quotient remainder))
```

**Special features:**
- Supports `values` for multiple return values
- `multiple-value-bind` for destructuring assignment
- Native support for multiple return values

**Further reading:**
- [Common Lisp HyperSpec - Values](http://www.lispworks.com/documentation/HyperSpec/Body/f_values.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
def divide(dividend : Int32, divisor : Int32) : {Int32, Int32}
    {dividend // divisor, dividend % divisor}
end

quotient, remainder = divide(10, 3)
```

**Special features:**
- Supports tuples for multiple return values
- Destructuring assignment for tuple assignment
- Tuple syntax: `{value1, value2}`

**Further reading:**
- [Crystal Documentation - Tuples](https://crystal-lang.org/reference/1.11/syntax_and_semantics/literals/tuple.html)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
#include <tuple>

std::tuple<int, int> divide(int dividend, int divisor) {
    return std::make_tuple(dividend / divisor, dividend % divisor);
}

auto [quotient, remainder] = divide(10, 3);
```

**Special features:**
- Supports `std::tuple` for multiple return values (since C++11)
- Structured bindings for destructuring assignment (since C++17)
- Also supports `std::pair` for two values

**Further reading:**
- [cppreference.com - std::tuple](https://en.cppreference.com/w/cpp/utility/tuple)
- [cppreference.com - Structured Bindings](https://en.cppreference.com/w/cpp/language/structured_binding)

</TabItem>
<TabItem value="d" label="D">

```d
import std.typecons;

Tuple!(int, int) divide(int dividend, int divisor) {
    return tuple(dividend / divisor, dividend % divisor);
}

auto result = divide(10, 3);
auto quotient = result[0];
auto remainder = result[1];
```

**Special features:**
- Supports `Tuple` for multiple return values
- Tuple access via index
- Also supports destructuring assignment

**Further reading:**
- [D Language Specification - Tuples](https://dlang.org/phobos/std_typecons.html#.Tuple)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
(List<int> result) divide(int dividend, int divisor) {
    return [dividend ~/ divisor, dividend % divisor];
}

var result = divide(10, 3);
var quotient = result[0];
var remainder = result[1];
```

**Special features:**
- Supports lists for multiple return values
- List access via index
- Also supports records for named return values (since Dart 3.0)

**Further reading:**
- [Dart Language Tour - Records](https://dart.dev/guides/language/language-tour#records)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
def divide(dividend, divisor) do
    {div(dividend, divisor), rem(dividend, divisor)}
end

{quotient, remainder} = divide(10, 3)
```

**Special features:**
- Supports tuples for multiple return values
- Destructuring assignment for tuple assignment
- Tuple syntax: `{value1, value2}`

**Further reading:**
- [Elixir Documentation - Tuples](https://elixir-lang.org/getting-started/basic-types.html#tuples)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
divide : Int -> Int -> (Int, Int)
divide dividend divisor =
    (dividend // divisor, remainderBy divisor dividend)

(quotient, remainder) = divide 10 3
```

**Special features:**
- Supports tuples for multiple return values
- Destructuring assignment for tuple assignment
- Tuple syntax: `(value1, value2)`

**Further reading:**
- [Elm Documentation - Tuples](https://guide.elm-lang.org/core_language.html#tuples)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
divide(Dividend, Divisor) ->
    {Dividend div Divisor, Dividend rem Divisor}.

{Quotient, Remainder} = divide(10, 3).
```

**Special features:**
- Supports tuples for multiple return values
- Destructuring assignment for tuple assignment
- Tuple syntax: `{value1, value2}`

**Further reading:**
- [Erlang Documentation - Tuples](https://www.erlang.org/doc/reference_manual/data_types.html#tuple)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
let divide dividend divisor =
    (dividend / divisor, dividend % divisor)

let (quotient, remainder) = divide 10 3
```

**Special features:**
- Supports tuples for multiple return values
- Destructuring assignment for tuple assignment
- Tuple syntax: `(value1, value2)`

**Further reading:**
- [F# Documentation - Tuples](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/tuples)

</TabItem>
<TabItem value="go" label="Go">

```go
func divide(dividend, divisor int) (int, int) {
    return dividend / divisor, dividend % divisor
}

quotient, remainder := divide(10, 3)
```

**Special features:**
- Supports multiple return values natively
- Destructuring assignment for multiple return values
- Native syntax without tuples

**Further reading:**
- [Go Documentation - Functions](https://go.dev/tour/basics/11)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
def divide(dividend, divisor) {
    return [dividend.intdiv(divisor), dividend % divisor]
}

def (quotient, remainder) = divide(10, 3)
```

**Special features:**
- Supports lists for multiple return values
- Destructuring assignment for list assignment
- List syntax: `[value1, value2]`

**Further reading:**
- [Groovy Documentation - Lists](https://groovy-lang.org/groovy-dev-kit.html#_working_with_collections)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
divide :: Int -> Int -> (Int, Int)
divide dividend divisor = (dividend `div` divisor, dividend `mod` divisor)

(quotient, remainder) = divide 10 3
```

**Special features:**
- Supports tuples for multiple return values
- Destructuring assignment for tuple assignment
- Tuple syntax: `(value1, value2)`

**Further reading:**
- [Haskell Documentation - Tuples](https://www.haskell.org/tutorial/more.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Mit Record (seit Java 14)
record DivisionResult(int quotient, int remainder) {}

DivisionResult divide(int dividend, int divisor) {
    return new DivisionResult(dividend / divisor, dividend % divisor);
}

var result = divide(10, 3);
int quotient = result.quotient();
int remainder = result.remainder();
```

**Special features:**
- Supports records for multiple return values (since Java 14)
- Previously: wrapper classes or arrays
- Records enable named return values

**Further reading:**
- [Oracle Java Documentation - Records](https://docs.oracle.com/javase/specs/jls/se14/html/jls-8.html#jls-8.10)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
function divide(dividend, divisor) {
    return [Math.floor(dividend / divisor), dividend % divisor];
}

const [quotient, remainder] = divide(10, 3);
```

**Special features:**
- Supports arrays for multiple return values
- Destructuring assignment for array assignment
- Array syntax: `[value1, value2]`

**Further reading:**
- [MDN Web Docs - Destructuring Assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
function divide(dividend::Int, divisor::Int)::Tuple{Int, Int}
    return (dividend ÷ divisor, dividend % divisor)
end

quotient, remainder = divide(10, 3)
```

**Special features:**
- Supports tuples for multiple return values
- Destructuring assignment for tuple assignment
- Tuple syntax: `(value1, value2)`

**Further reading:**
- [Julia Documentation - Tuples](https://docs.julialang.org/en/v1/manual/functions/#Tuples)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Multiple Return Values (Tuples)
fun divide(dividend: int, divisor: int): (int, int)
  (dividend / divisor, dividend % divisor)

val (quotient, remainder) = divide(10, 3) // (3, 1)

// Tuple with three values
fun min-max-avg(xs: list<int>): (int, int, int)
  val mn = xs.minimum(0)
  val mx = xs.maximum(0)
  val avg = xs.sum / xs.length
  (mn, mx, avg)

val (lo, hi, avg) = min-max-avg([3, 1, 4, 1, 5]) // (1, 5, 2)
```

**Special features:**
- Koka uses tuples for multiple return values
- Destructuring with `val (a, b) = ...`
- Tuples are typed: `(int, string)`, `(int, int, int)` etc.
- Can also be achieved with named fields via records

**Further reading:**
- [Koka Language Guide - Tuples](https://koka-lang.github.io/koka/doc/book.html#sec-tuples)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
fun divide(dividend: Int, divisor: Int): Pair<Int, Int> {
    return Pair(dividend / divisor, dividend % divisor)
}

val (quotient, remainder) = divide(10, 3)
```

**Special features:**
- Supports `Pair` for two values
- Also supports `Triple` for three values
- Destructuring assignment for Pair/Triple assignment

**Further reading:**
- [Kotlin Documentation - Destructuring Declarations](https://kotlinlang.org/docs/destructuring-declarations.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Multiple Return Values (Product Types / Tuples)
def divide (dividend divisor : Int) : Int × Int :=
  (dividend / divisor, dividend % divisor)

def result : Int × Int := divide 10 3
def (quotient, remainder) := result
```

**Special features:**
- Lean 4 uses product types (`×` or `Prod`) for multiple return values
- Tuples are created with `(a, b)` and destructured with pattern matching
- Structures (`structure`) can be used for named fields
- Nested tuples are possible: `Int × Int × String`

**Further reading:**
- [Lean 4 Documentation - Structures](https://lean-lang.org/lean4/doc/structures.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
function divide(dividend, divisor)
    return math.floor(dividend / divisor), dividend % divisor
end

local quotient, remainder = divide(10, 3)
```

**Special features:**
- Supports multiple return values natively
- Destructuring assignment for multiple return values
- Native syntax without tuples

**Further reading:**
- [Lua Documentation - Functions](https://www.lua.org/manual/5.4/manual.html#2.5.9)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
proc divide(dividend: int, divisor: int): (int, int) =
    return (dividend div divisor, dividend mod divisor)

let (quotient, remainder) = divide(10, 3)
```

**Special features:**
- Supports tuples for multiple return values
- Destructuring assignment for tuple assignment
- Tuple syntax: `(value1, value2)`

**Further reading:**
- [Nim Documentation - Tuples](https://nim-lang.org/docs/manual.html#types-tuple-type)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
let divide dividend divisor =
    (dividend / divisor, dividend mod divisor)

let (quotient, remainder) = divide 10 3
```

**Special features:**
- Supports tuples for multiple return values
- Destructuring assignment for tuple assignment
- Tuple syntax: `(value1, value2)`

**Further reading:**
- [OCaml Documentation - Tuples](https://ocaml.org/docs/first-hour)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
sub divide {
    my ($dividend, $divisor) = @_;
    return (int($dividend / $divisor), $dividend % $divisor);
}

my ($quotient, $remainder) = divide(10, 3);
```

**Special features:**
- Supports lists for multiple return values
- Destructuring assignment for list assignment
- List syntax: `(value1, value2)`

**Further reading:**
- [Perl Documentation - Functions](https://perldoc.perl.org/perlsub)

</TabItem>
<TabItem value="php" label="PHP">

```php
function divide($dividend, $divisor) {
    return [intval($dividend / $divisor), $dividend % $divisor];
}

list($quotient, $remainder) = divide(10, 3);
```

**Special features:**
- Supports arrays for multiple return values
- Destructuring assignment with `list()` for array assignment
- Array syntax: `[value1, value2]`

**Further reading:**
- [PHP Documentation - Arrays](https://www.php.net/manual/en/language.types.array.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Multiple return values via output arguments
divide(Dividend, Divisor, Quotient, Remainder) :-
    Quotient is Dividend // Divisor,
    Remainder is Dividend mod Divisor.

?- divide(10, 3, Quotient, Remainder).
%  Quotient = 3, Remainder = 1

% Alternatively via compound terms
divide_pair(Dividend, Divisor, Result) :-
    Q is Dividend // Divisor,
    R is Dividend mod Divisor,
    Result = pair(Q, R).

?- divide_pair(10, 3, pair(Q, R)).
%  Q = 3, R = 1
```

**Special features:**
- Prolog does not explicitly return values — instead, multiple output arguments are bound via unification
- Multiple return values are a natural concept, as any argument of a predicate can serve as output
- Alternatively, compound terms like `pair(Q, R)` or lists `[Q, R]` can be used
- Destructuring occurs automatically through pattern matching / unification

**Further reading:**
- [SWI-Prolog Documentation - Arithmetic](https://www.swi-prolog.org/pldoc/man?section=arith)

</TabItem>
<TabItem value="python" label="Python">

```python
def divide(dividend, divisor):
    return dividend // divisor, dividend % divisor

quotient, remainder = divide(10, 3)
```

**Special features:**
- Supports tuples for multiple return values
- Destructuring assignment for tuple assignment
- Tuple syntax: `(value1, value2)` or `value1, value2`

**Further reading:**
- [Python Documentation - Tuples](https://docs.python.org/3/tutorial/datastructures.html#tuples-and-sequences)

</TabItem>
<TabItem value="r" label="R">

```r
divide <- function(dividend, divisor) {
    return(c(dividend %/% divisor, dividend %% divisor))
}

result <- divide(10, 3)
quotient <- result[1]
remainder <- result[2]
```

**Special features:**
- Supports vectors for multiple return values
- Vector access via index
- Vector syntax: `c(value1, value2)`

**Further reading:**
- [R Documentation - Vectors](https://cran.r-project.org/doc/manuals/r-release/R-intro.html#Vectors)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
(define (divide dividend divisor)
  (values (quotient dividend divisor) (remainder dividend divisor)))

(define-values (q r) (divide 10 3))
; q = 3, r = 1
```

**Special features:**
- `values` for multiple return values
- `define-values` for destructuring
- Also `call-with-values` for functional processing

**Further reading:**
- [Racket Documentation - Multiple Values](https://docs.racket-lang.org/reference/values.html)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
def divide(dividend, divisor)
    return dividend / divisor, dividend % divisor
end

quotient, remainder = divide(10, 3)
```

**Special features:**
- Supports arrays for multiple return values
- Destructuring assignment for array assignment
- Native syntax without explicit arrays

**Further reading:**
- [Ruby Documentation - Methods](https://ruby-doc.org/core-3.1.0/Method.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
fn divide(dividend: i32, divisor: i32) -> (i32, i32) {
    (dividend / divisor, dividend % divisor)
}

let (quotient, remainder) = divide(10, 3);
```

**Special features:**
- Supports tuples for multiple return values
- Destructuring assignment for tuple assignment
- Tuple syntax: `(value1, value2)`

**Further reading:**
- [Rust Book - Tuples](https://doc.rust-lang.org/book/ch03-02-data-types.html#the-tuple-type)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
def divide(dividend: Int, divisor: Int): (Int, Int) = {
    (dividend / divisor, dividend % divisor)
}

val (quotient, remainder) = divide(10, 3)
```

**Special features:**
- Supports tuples for multiple return values
- Destructuring assignment for tuple assignment
- Tuple syntax: `(value1, value2)`

**Further reading:**
- [Scala Documentation - Tuples](https://docs.scala-lang.org/tour/tuples.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
(define (divide dividend divisor)
  (list (quotient dividend divisor) (remainder dividend divisor)))

(define result (divide 10 3))
(define quotient (car result))
(define remainder (cadr result))
```

**Special features:**
- Supports lists for multiple return values
- List access via functions
- List syntax: `(list value1 value2)`

**Further reading:**
- [Scheme Documentation - Lists](https://www.scheme.com/tspl4/start.html#./start:h0)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
func divide(_ dividend: Int, _ divisor: Int) -> (Int, Int) {
    return (dividend / divisor, dividend % divisor)
}

let (quotient, remainder) = divide(10, 3)
```

**Special features:**
- Supports tuples for multiple return values
- Destructuring assignment for tuple assignment
- Tuple syntax: `(value1, value2)`

**Further reading:**
- [Swift Documentation - Tuples](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/the-basics/#tuples)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
function divide(dividend: number, divisor: number): [number, number] {
    return [Math.floor(dividend / divisor), dividend % divisor];
}

const [quotient, remainder] = divide(10, 3);
```

**Special features:**
- Supports tuples for multiple return values
- Destructuring assignment for tuple assignment
- Tuple syntax: `[value1, value2]`

**Further reading:**
- [TypeScript Handbook - Tuples](https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
Function Divide(dividend As Integer, divisor As Integer) As (Integer, Integer)
    Return (dividend \ divisor, dividend Mod divisor)
End Function

Dim (quotient, remainder) = Divide(10, 3)
```

**Special features:**
- Supports tuples for multiple return values (since VB.NET 15.0)
- Destructuring assignment for tuple assignment
- Tuple syntax: `(value1, value2)`

**Further reading:**
- [Microsoft VB.NET Documentation - Tuples](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/data-types/tuples)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
fn divide(dividend: i32, divisor: i32) struct { i32, i32 } {
    return .{ dividend / divisor, dividend % divisor };
}

const result = divide(10, 3);
const quotient = result[0];
const remainder = result[1];
```

**Special features:**
- Supports structs for multiple return values
- Struct access via index
- Struct syntax: `struct { type1, type2 }`

**Further reading:**
- [Zig Documentation - Structs](https://ziglang.org/documentation/0.11.0/#structs)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// Multiple Return Values via Tuples
pub fn min_max(items: List(Int)) -> #(Int, Int) {
  let min = list.fold(items, 999_999, int.min)
  let max = list.fold(items, 0, int.max)
  #(min, max)
}

let #(min, max) = min_max([3, 1, 4, 1, 5])
```

**Special features:**
- Tuples are used for multiple return values
- Destructuring with `let #(a, b) = ...`
- Type-safe with type inference

**Further reading:**
- [Gleam Documentation - Tuples](https://tour.gleam.run/data-types/tuples/)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% Multiple Return Values
function [quotient, remainder] = divmod(a, b)
    quotient = floor(a / b);
    remainder = mod(a, b);
end

[q, r] = divmod(17, 5);  % q = 3, r = 2
q = divmod(17, 5);        % Only first value
```

**Special features:**
- Multiple return values with `[a, b, c] = func()` syntax
- Caller can receive fewer values than defined
- `nargout` indicates the number of requested return values

**Further reading:**
- [MATLAB Documentation - Functions](https://www.mathworks.com/help/matlab/ref/function.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Multiple return values via multiple output arguments
:- module multi_return.
:- interface.
:- import_module io.
:- pred main(io::di, io::uo) is det.
:- implementation.
:- import_module int, string.

% Multiple return values via output arguments
:- pred divmod(int::in, int::in, int::out, int::out) is det.
divmod(A, B, Quotient, Remainder) :-
    Quotient = A / B,
    Remainder = A mod B.

% Alternative: tuple as return type with func
:- func divmod_tuple(int, int) = {int, int}.
divmod_tuple(A, B) = {A / B, A mod B}.

:- pred main(io::di, io::uo) is det.
main(!IO) :-
    % Via output arguments
    divmod(17, 5, Q, R),
    io.format("17 / 5 = %d remainder %d\n", [i(Q), i(R)], !IO),

    % Via tuple
    {Q2, R2} = divmod_tuple(17, 5),
    io.format("17 / 5 = %d remainder %d\n", [i(Q2), i(R2)], !IO).
```

**Special features:**
- Mercury supports multiple return values via multiple `out` arguments in predicates.
- Alternatively, tuples `{A, B, C}` can be used as return type of a `func`.
- The `out` arguments variant is more idiomatic in Mercury.
- The mode system (`in`, `out`) makes explicit which arguments are input and which are output.

**Further reading:**
- [Mercury Language Reference - Modes](https://www.mercurylang.org/information/doc-release/mercury_ref/Modes.html)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
function [quotient, remainder] = divide(a, b)
    quotient = floor(a / b);
    remainder = mod(a, b);
end

[q, r] = divide(17, 5);  % q = 3, r = 2
```

**Special features:**
- Multiple return values are declared in square brackets
- Caller can receive fewer values than available
- `nargout` indicates the number of requested return values

**Further reading:**
- [GNU Octave Documentation - Multiple Return Values](https://octave.org/doc/v8.1.0/Multiple-Return-Values.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Multiple return values via tuples
divMod : I64, I64 -> (I64, I64)
divMod = \a, b -> (Num.divTrunc a b, Num.rem a b)

(quotient, remainder) = divMod 17 5

-- Or via records
minMax : List I64 -> { min : I64, max : I64 }
minMax = \list -> { min: List.min list, max: List.max list }
```

**Special features:**
- Tuples `(a, b)` for anonymous return values
- Records `{ field1, field2 }` for named return values
- Destructuring on assignment

**Further reading:**
- [Roc Documentation](https://www.roc-lang.org/tutorial)

</TabItem>
<TabItem value="v" label="V">

```v
// Multiple Return Values
fn divide(a f64, b f64) (f64, bool) {
    if b == 0 {
        return 0.0, false
    }
    return a / b, true
}

result, ok := divide(10.0, 3.0)
if ok {
    println(result)
}
```

**Special features:**
- Multiple return values with `(Type1, Type2)` syntax
- Destructuring on call with `,`

**Further reading:**
- [V Documentation - Functions](https://github.com/vlang/v/blob/master/doc/docs.md#functions)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Multiple return values via lists *)
divmod[a_, b_] := {Quotient[a, b], Mod[a, b]}

{q, r} = divmod[17, 5];
Print[q]  (* 3 *)
Print[r]  (* 2 *)
```

**Special features:**
- Lists are used for multiple return values
- Destructuring assignment extracts the values

**Further reading:**
- [Wolfram Language Documentation - Lists](https://reference.wolfram.com/language/guide/Lists.html)

</TabItem>
</Tabs>


## 7.2.9. Inline Functions

Functions that are inline expanded by the compiler to avoid function call overhead. The function code is inserted directly at the call site, which can improve performance but may also increase code size.

### Languages {#sprachen}

<Tabs availableTabs={['c', 'cpp', 'csharp', 'd', 'kotlin', 'lean4', 'mercury', 'nim', 'object-pascal', 'rust', 'scala', 'swift', 'v', 'zig']}>
<TabItem value="c" label="C">

```c
inline int add(int a, int b) {
    return a + b;
}

int result = add(5, 3);
```

**Special features:**
- Supports `inline` keyword (since C99)
- Compiler can ignore inline hint
- Inline functions must be defined in header files

**Further reading:**
- [C Documentation - Inline Functions](https://en.cppreference.com/w/c/language/inline)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
using System.Runtime.CompilerServices;

[MethodImpl(MethodImplOptions.AggressiveInlining)]
int Add(int a, int b) {
    return a + b;
}

int result = Add(5, 3);
```

**Special features:**
- Supports inline functions with `MethodImpl` attribute (since C# 1.0)
- `AggressiveInlining` for aggressive inline optimization
- Compiler can ignore inline hint

**Further reading:**
- [Microsoft C# Documentation - MethodImpl](https://learn.microsoft.com/en-us/dotnet/api/system.runtime.compilerservices.methodimploptions)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
inline int add(int a, int b) {
    return a + b;
}

int result = add(5, 3);
```

**Special features:**
- Supports `inline` keyword (since C++98)
- Compiler can ignore inline hint
- Inline functions must be defined in header files
- `constexpr` functions are implicitly inline (since C++11)

**Further reading:**
- [cppreference.com - Inline Functions](https://en.cppreference.com/w/cpp/language/inline)

</TabItem>
<TabItem value="d" label="D">

```d
// Inline Functions
pragma(inline, true)
int add(int a, int b) {
    return a + b;
}

// Compiler can also automatically inline
pragma(inline, false)
int noInline(int x) {
    return x * 2;
}

int result = add(5, 3);  // Compiler can inline add here
```

**Special features:**
- `pragma(inline, true)` as hint for the compiler to inline
- `pragma(inline, false)` prevents inlining
- Without pragma, compiler decides based on heuristics
- No `inline` keyword like in C/C++

**Further reading:**
- [D Language Specification - Inline Functions](https://dlang.org/spec/pragma.html#inline)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
inline fun add(a: Int, b: Int): Int {
    return a + b
}

val result = add(5, 3)
```

**Special features:**
- Supports `inline` keyword (since Kotlin 1.0)
- Inline functions are expanded at compile time
- Also supports `noinline` for parameters that should not be inline

**Further reading:**
- [Kotlin Documentation - Inline Functions](https://kotlinlang.org/docs/inline-functions.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Inline Functions
@[inline] def add (a b : Int) : Int := a + b

def result : Int := add 5 3

-- Aggressives Inlining
@[always_inline] def multiply (a b : Int) : Int := a * b
```

**Special features:**
- `@[inline]` marks a function as an inline candidate for the compiler
- `@[always_inline]` forces inlining in all cases
- `@[noinline]` explicitly prevents inlining
- Without attribute, compiler decides based on heuristics

**Further reading:**
- [Lean 4 Documentation - Attributes](https://lean-lang.org/lean4/doc/attributes.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Inline functions via pragma inline
:- module inline_example.
:- interface.
:- import_module io.
:- pred main(io::di, io::uo) is det.
:- implementation.
:- import_module int, string.

:- func add(int, int) = int.
:- pragma inline(add/2).
add(A, B) = A + B.

:- func square(int) = int.
:- pragma inline(square/1).
square(X) = X * X.

:- pred main(io::di, io::uo) is det.
main(!IO) :-
    Result = add(5, 3),
    io.format("add(5, 3) = %d\n", [i(Result)], !IO),
    io.format("square(4) = %d\n", [i(square(4))], !IO).
```

**Special features:**
- `:- pragma inline(name/arity)` marks a function or predicate for inlining.
- The compiler replaces the call with the function body at the call site.
- `:- pragma no_inline(name/arity)` explicitly prevents inlining.
- Inlining is particularly useful for small, frequently called functions.

**Further reading:**
- [Mercury Language Reference - Inlining pragmas](https://www.mercurylang.org/information/doc-release/mercury_ref/Inlining.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
proc add(a: int, b: int): int {.inline.} =
    return a + b

var result = add(5, 3)
```

**Special features:**
- Supports `inline` pragmas
- Compiler can ignore inline hint
- Inline functions are expanded at compile time

**Further reading:**
- [Nim Documentation - Pragmas](https://nim-lang.org/docs/manual.html#pragmas)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
#[inline]
fn add(a: i32, b: i32) -> i32 {
    a + b
}

let result = add(5, 3);
```

**Special features:**
- Supports `#[inline]` attribute (since Rust 1.0)
- Also supports `#[inline(always)]` for aggressive inline optimization
- Compiler can ignore inline hint

**Further reading:**
- [Rust Book - Inline Attributes](https://doc.rust-lang.org/reference/attributes/codegen.html#the-inline-attribute)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
@inline(__always)
func add(_ a: Int, _ b: Int) -> Int {
    return a + b
}

let result = add(5, 3)
```

**Special features:**
- Supports `@inline(__always)` attribute (since Swift 1.0)
- Also supports `@inline(never)` to prevent inlining
- Compiler can ignore inline hint

**Further reading:**
- [Swift Documentation - Attributes](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/attributes/)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
inline fn add(a: i32, b: i32) i32 {
    return a + b;
}

const result = add(5, 3);
```

**Special features:**
- Supports `inline` keyword
- Inline functions are expanded at compile time
- Compiler can ignore inline hint

**Further reading:**
- [Zig Documentation - Functions](https://ziglang.org/documentation/0.11.0/#Functions)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Inline functions (since Delphi 2005, Free Pascal 2.6.0)
function Max(a, b: Integer): Integer; inline;
begin
  if a > b then
    Result := a
  else
    Result := b;
end;

var
  result: Integer;
begin
  result := Max(10, 20);  // Will be inline expanded by the compiler
end;
```

**Special features:**
- `inline` directive as hint to the compiler
- Compiler decides whether inlining actually occurs
- Since Delphi 2005 and Free Pascal 2.6.0

**Further reading:**
- [Delphi Documentation - Inline](https://docwiki.embarcadero.com/RADStudio/en/Inline_keyword)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Inline functions (since Scala 3)
inline def add(a: Int, b: Int): Int =
{
    a + b
}

val result = add(5, 3) // Will be inlined at compile time
```

**Special features:**
- `inline def` guarantees inlining (not a hint like in C/C++)
- Compile-time evaluation possible with constant arguments
- Also used for metaprogramming (inline matches, inline if)
- Available since Scala 3.0

**Further reading:**
- [Scala 3 Documentation - Inline](https://docs.scala-lang.org/scala3/reference/metaprogramming/inline.html)

</TabItem>
<TabItem value="v" label="V">

```v
// Inline Functions
@[inline]
fn max(a int, b int) int {
    return if a > b { a } else { b }
}

result := max(10, 20)
```

**Special features:**
- `@[inline]` attribute for inline hint
- Compiler hint, no guarantee
- Useful for small, frequently called functions

**Further reading:**
- [V Documentation - Attributes](https://github.com/vlang/v/blob/master/doc/docs.md#attributes)

</TabItem>
</Tabs>


## 7.2.10. Scope Functions (let, run, with, apply, also)

Special functions that create a temporary scope for an object and perform operations on that object. They enable code to be more readable and concise by providing a context for operations.

### Languages {#sprachen}

<Tabs availableTabs={['kotlin']} orangeTabs={['rust', 'scala', 'swift']}>
<TabItem value="kotlin" label="Kotlin">

```kotlin
data class Person(var name: String, var age: Int)

val person = Person("Alice", 25)

// let: Performs operations and returns the result
val result1 = person.let { it.name.uppercase() }

// run: Performs operations and returns the result (with this)
val result2 = person.run { name.uppercase() }

// with: Performs operations and returns the result (with this, not as extension)
val result3 = with(person) { name.uppercase() }

// apply: Modifies the object and returns it (with this)
val result4 = person.apply { age = 30 }

// also: Performs operations and returns the original object (with it)
val result5 = person.also { println(it.name) }
```

**Special features:**
- Supports five scope functions: `let`, `run`, `with`, `apply`, `also` (since Kotlin 1.0)
- `let` and `also` use `it` as parameter
- `run`, `with`, and `apply` use `this` as receiver
- Different return values: `let`, `run`, `with` return the result, `apply` and `also` return the object

**Further reading:**
- [Kotlin Documentation - Scope Functions](https://kotlinlang.org/docs/scope-functions.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
struct Person {
    name: String,
    age: i32,
}

let mut person = Person { name: "Alice".to_string(), age: 25 };

// Similar concept with closures
let result1 = {
    let name = person.name.clone();
    name.to_uppercase()
};

// Or with methods
let result2 = person.name.to_uppercase();

// Modification with closure
let result3 = {
    person.age = 30;
    &person
};
```

**Special features:**
- Supports similar concepts with closures and blocks
- No native scope functions like in Kotlin
- Closures can provide similar functionality

**Further reading:**
- [Rust Book - Closures](https://doc.rust-lang.org/book/ch13-01-closures.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
case class Person(var name: String, var age: Int)

val person = Person("Alice", 25)

// Similar concept with methods
val result1 = person.name.toUpperCase

// Or with blocks
val result2 = {
    val name = person.name
    name.toUpperCase
}

// Modification
val result3 = {
    person.age = 30
    person
}
```

**Special features:**
- Supports similar concepts with blocks and methods
- No native scope functions like in Kotlin
- Blocks can provide similar functionality

**Further reading:**
- [Scala Documentation - Blocks](https://docs.scala-lang.org/tour/basics.html#blocks)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
struct Person {
    var name: String
    var age: Int
}

var person = Person(name: "Alice", age: 25)

// Similar concept with closures
let result1 = { person.name.uppercased() }()

// Or with methods
let result2 = person.name.uppercased()

// Modification with closure
let result3 = {
    person.age = 30
    return person
}()
```

**Special features:**
- Supports similar concepts with closures
- No native scope functions like in Kotlin
- Closures can provide similar functionality

**Further reading:**
- [Swift Documentation - Closures](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/closures/)

</TabItem>
</Tabs>

