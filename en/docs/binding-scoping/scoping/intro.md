---
slug: /binding-scoping/scoping
title: 4.2. Scoping
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 4.2. Scoping

Visibility and scope of variables.

## 4.2.1. Block Scope

Variables are only visible within the block in which they were declared.

### Languages {#sprachen}

<Tabs availableTabs={['c', 'common-lisp', 'cpp', 'csharp', 'd', 'dart', 'elm', 'fortran', 'go', 'groovy', 'java', 'javascript', 'koka', 'kotlin', 'lean4', 'lua', 'nim', 'objective-c', 'perl', 'rust', 'scala', 'swift', 'typescript', 'v', 'wolfram-language', 'zig']} yellowTabs={['julia', 'object-pascal']} orangeTabs={['python']}>
<TabItem value="javascript" label="JavaScript">

```javascript
// Block Scope with let and const
{
  let count = 42;
  const name = "Hallo";
  console.log(count);  // 42
}
// console.log(count);  // ReferenceError

// var does not have Block Scope
{
  var count = 42;
}
console.log(count);  // 42 (var has Function Scope)
```

**Special features:**
- `let` and `const` have Block Scope
- `var` has Function Scope, not Block Scope

**Further reading:**
- [MDN Web Docs - let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Block Scope with let and const
{
  let count = 42;
  const name = "Hallo";
  console.log(count);  // 42
}
// console.log(count);  // ReferenceError

// var does not have Block Scope
{
  var count = 42;
}
console.log(count);  // 42 (var has Function Scope)
```

**Special features:**
- `let` and `const` have Block Scope
- `var` has Function Scope, not Block Scope

**Further reading:**
- [TypeScript Documentation - Variable Declarations](https://www.typescriptlang.org/docs/handbook/variable-declarations.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Block Scope
{
  int count = 42;
  System.out.println(count);  // 42
}
// System.out.println(count);  // Compiler error
```

**Special features:**
- All local variables have Block Scope
- Variables are only visible within the block

**Further reading:**
- [Java Language Specification - Scope](https://docs.oracle.com/javase/specs/jls/se21/html/jls-6.html#jls-6.3)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Block Scope
{
  int count = 42;
  Console.WriteLine(count);  // 42
}
// Console.WriteLine(count);  // Compiler error
```

**Special features:**
- All local variables have Block Scope
- Variables are only visible within the block

**Further reading:**
- [Microsoft C# Documentation - Scope](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/basic-concepts#scopes)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Block Scope
{
  int count = 42;
  std::cout << count << std::endl;  // 42
}
// std::cout << count << std::endl;  // Compiler error
```

**Special features:**
- All local variables have Block Scope
- Variables are only visible within the block

**Further reading:**
- [cppreference.com - Scope](https://en.cppreference.com/w/cpp/language/scope)

</TabItem>
<TabItem value="c" label="C">

```c
// Block Scope
{
  int count = 42;
  printf("%d\n", count);  // 42
}
// printf("%d\n", count);  // Compiler error
```

**Special features:**
- All local variables have Block Scope
- Variables are only visible within the block

**Further reading:**
- [C Standard - Scope](https://en.cppreference.com/w/c/language/scope)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Block Scope
{
  let count = 42;
  println!("{}", count);  // 42
}
// println!("{}", count);  // Compiler error
```

**Special features:**
- All variables have Block Scope
- Variables are only visible within the block

**Further reading:**
- [Rust Documentation - Variables](https://doc.rust-lang.org/book/ch03-01-variables-and-mutability.html)

</TabItem>
<TabItem value="go" label="Go">

```go
// Block Scope
{
  count := 42
  fmt.Println(count)  // 42
}
// fmt.Println(count)  // Compiler error
```

**Special features:**
- All local variables have Block Scope
- Variables are only visible within the block

**Further reading:**
- [Go Documentation - Scope](https://go.dev/ref/spec#Declarations_and_scope)

</TabItem>
<TabItem value="python" label="Python">

```python
# Block Scope (limited)
count = 10
if True:
    count = 42  # Modifies the outer variable
    inner = 5   # Also visible in outer scope
print(count)  # 42
print(inner)  # 5 (no own Block Scope)
```

**Special features:**
- Python does not have true Block Scope
- Variables in blocks are visible in the outer scope
- Only functions and classes create new scopes

**Further reading:**
- [Python Documentation - Scopes](https://docs.python.org/3/tutorial/classes.html#scopes-and-namespaces)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Block Scope
fun example(): console ()
  val count = 42
  println(count.show)  // 42
  // count is only visible within this block

// Nested Scopes
fun nested(): console ()
  val x = 10
  val result =
    val y = 20   // y is only visible in this block
    x + y
  println(result.show)  // 30
```

**Special features:**
- Indentation-based blocks define scopes
- `val` and `var` bindings are only visible in the surrounding block
- Nested blocks can access outer bindings

**Further reading:**
- [Koka Language Guide - Lexical Scoping](https://koka-lang.github.io/koka/doc/book.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Block Scope via let...in and do blocks
def blockExample : Nat :=
  let x := 10
  let result :=
    let y := 20  -- y is only visible in this block
    x + y
  result  -- 30
  -- y is no longer accessible here

-- Block Scope in do blocks
def doExample : IO Unit := do
  let count := 42
  IO.println s!"{count}"  -- 42
-- count is no longer accessible here
```

**Special features:**
- `let ... in` expressions create local scopes
- `do` blocks use indentation-based scopes
- `let` bindings are only visible in the surrounding block
- Nested scopes can access outer bindings

**Further reading:**
- [Lean 4 Documentation - Variables](https://lean-lang.org/lean4/doc/lean-by-example/variables.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Block Scope
run {
  val count = 42
  println(count)  // 42
}
// println(count)  // Compiler error
```

**Special features:**
- All local variables have Block Scope
- Variables are only visible within the block

**Further reading:**
- [Kotlin Documentation - Scope](https://kotlinlang.org/docs/scope-functions.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Block Scope
{
  val count = 42
  println(count)  // 42
}
// println(count)  // Compiler error
```

**Special features:**
- All local variables have Block Scope
- Variables are only visible within the block

**Further reading:**
- [Scala Documentation - Scope](https://docs.scala-lang.org/tour/basics.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Block Scope
{
  let count = 42
  print(count)  // 42
}
// print(count)  // Compiler error
```

**Special features:**
- All local variables have Block Scope
- Variables are only visible within the block

**Further reading:**
- [Swift Documentation - Scope](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/thebasics/)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Block Scope
{
  int count = 42;
  print(count);  // 42
}
// print(count);  // Compiler error
```

**Special features:**
- All local variables have Block Scope
- Variables are only visible within the block

**Further reading:**
- [Dart Language Tour - Scope](https://dart.dev/guides/language/language-tour#scope)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Block Scope with let
(let ((x 10)
      (y 20))
  (+ x y))  ; x and y only visible within the let

;; Block Scope with block
(block my-block
  (format t "Inside block~%")
  (return-from my-block 42))
```

**Special features:**
- `let` creates a new lexical scope for variables
- `block` creates named blocks with `return-from`
- Variables are only visible within their `let` block

**Further reading:**
- [Common Lisp HyperSpec - let](http://www.lispworks.com/documentation/HyperSpec/Body/s_let_l.htm)

</TabItem>
<TabItem value="d" label="D">

```d
// Block Scope
{
    int x = 42;
    writeln(x);  // 42
}
// writeln(x);  // Error: x is not visible

if (true) {
    int y = 10;
}
// writeln(y);  // Error: y is not visible
```

**Special features:**
- Variables are only visible within the block
- Curly braces `{}` define a block
- Applies to `if`, `for`, `while`, `foreach` and standalone blocks

**Further reading:**
- [D Language Specification - Scope](https://dlang.org/spec/declaration.html#scope)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Block Scope via let expressions
example : Int
example =
    let
        x = 10
        y = 20
    in
    x + y  -- x and y are only visible within the let block

-- x and y are no longer accessible here
```

**Special features:**
- `let ... in` creates a new scope
- Variables are only visible within the `let` block
- Nested `let` expressions possible

**Further reading:**
- [Elm Documentation - Let Expressions](https://guide.elm-lang.org/core_language.html)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Block Scope with BLOCK construct (since Fortran 2008)
integer :: x = 10

block
    integer :: y = 20  ! Only visible in this block
    x = x + y
end block

! y is no longer accessible here
```

**Special features:**
- `BLOCK...END BLOCK` for local scope (since Fortran 2008)
- Variables in the block are only visible within the block
- Can declare local variables

**Further reading:**
- [Fortran Wiki - BLOCK construct](https://fortranwiki.org/fortran/show/BLOCK)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Block Scope
def x = 10

if (true) {
    def y = 20 // only visible within the if block
    println x   // 10 - outer variable visible
    println y   // 20
}

// println y // Error: Variable y not defined
```

**Special features:**
- Variables with `def` or explicit type have Block Scope
- Inner blocks can access outer variables
- Outer blocks cannot access inner variables

**Further reading:**
- [Groovy Documentation - Semantics](https://groovy-lang.org/semantics.html)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# for loops have their own scope
for i in 1:5
    temp = i * 2
end
# temp is not available here

# let block creates explicit scope
let
    local_var = 42
    println(local_var)
end
# local_var is not available here

# if blocks do NOT create a new scope
x = 10
if x > 5
    y = 20
end
println(y)  # 20 (y is available here)
```

**Special features:**
- `for`, `while`, `try`, `let` create new scopes
- `if` blocks do **not** create a new scope
- Difference between Hard Scope (functions) and Soft Scope (loops in REPL)

**Further reading:**
- [Julia Documentation - Scope of Variables](https://docs.julialang.org/en/v1/manual/variables-and-scoping/)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Block Scope with do...end
do
    local x = 10
    print(x)    -- 10
end
-- print(x)     -- Error: x is not visible here

-- Block Scope in if blocks
if true then
    local y = 20
    print(y)    -- 20
end
-- print(y)     -- nil (y is not visible here)

-- Block Scope in for loops
for i = 1, 3 do
    local temp = i * 2
end
-- print(temp)  -- nil (temp is not visible here)
-- print(i)     -- nil (loop variable also block-scoped)
```

**Special features:**
- `local` variables are block-scoped (not function-scoped)
- Blocks are created by `do...end`, `if...then...end`, `for...do...end`, `while...do...end`, function bodies
- Loop variables in `for` loops are automatically local to the loop block
- `do...end` can be used explicitly as a scope block

**Further reading:**
- [Lua Reference Manual - Blocks](https://www.lua.org/manual/5.4/manual.html#3.3.1)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Block Scope
block:
  var x = 10
  echo x  # 10

# echo x  # Error: x is not defined

if true:
  var y = 20
  echo y  # 20

# echo y  # Error: y is not defined
```

**Special features:**
- Variables are visible in the block of their declaration
- `block:` statement for explicit scopes
- Control structures (`if`, `for`, `while`) create their own scopes

**Further reading:**
- [Nim Documentation - Scoping Rules](https://nim-lang.org/docs/manual.html#scoping-rules)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
procedure Example;
var
  x: Integer;
begin
  x := 10;
  // Variables must be declared in var block BEFORE begin
  // No Block Scope within begin/end
end;

// Inline Variable Declaration (since Delphi 10.3)
procedure ModernExample;
begin
  var x: Integer := 10;  // Block Scope within begin/end
  if x > 5 then
  begin
    var y: Integer := 20;  // Scope only in this block
  end;
  // y is no longer visible here
end;
```

**Special features:**
- Traditionally: All variables declared in `var` block before `begin`
- Since Delphi 10.3: Inline Variable Declarations with Block Scope
- Free Pascal does not yet fully support inline variables

**Further reading:**
- [Delphi Documentation - Inline Variable Declarations](https://docwiki.embarcadero.com/RADStudio/en/Inline_Variable_Declaration)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
{
    int x = 10;
    NSLog(@"%d", x); // 10
}
// x is no longer visible here
```

**Special features:**
- C-style Block Scope with curly braces
- Variables are only visible within their block
- Nested blocks can access outer variables

**Further reading:**
- [Apple Documentation - Programming with Objective-C](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Block Scope with my
{
    my $x = 10;
    print "$x\n";  # 10
}
# $x is no longer visible here
```

**Special features:**
- `my` declares variables with Block Scope
- Variables are only visible within the enclosing block
- Applies to `{}`, `if`, `while`, `for` and other block constructs

**Further reading:**
- [Perl Documentation - Scoping](https://perldoc.perl.org/perlsub#Private-Variables-via-my())

</TabItem>
<TabItem value="v" label="V">

```v
// Block Scope
{
    x := 42
    println(x)  // OK
}
// println(x)  // Error: x is not visible here

if true {
    y := 10
    println(y)  // OK
}
// println(y)  // Error: y is not visible here
```

**Special features:**
- Variables are limited to their block
- Blocks are defined by `{ }`
- Applies to all control structures (if, for, match)

**Further reading:**
- [V Documentation - Variables](https://github.com/vlang/v/blob/master/doc/docs.md#variables)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Block Scope with Module *)
Module[{x = 10, y = 20},
    Print[x + y]  (* 30 *)
]
(* x and y are no longer visible here *)
```

**Special features:**
- `Module[]` creates local variables with lexical scope
- `Block[]` creates temporary bindings with dynamic scope
- `With[]` creates local constants

**Further reading:**
- [Wolfram Language Documentation - Scoping](https://reference.wolfram.com/language/guide/ScopingConstructs.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Block Scope: Variables are limited to their block
const std = @import("std");

pub fn main() void {
    const x: i32 = 10;
    {
        const y: i32 = 20;
        std.debug.print("{}\n", .{x + y});  // OK: x is visible
    }
    // std.debug.print("{}\n", .{y});  // Compile error: y not visible

    // Labeled Blocks with return value
    const result = blk: {
        const temp: i32 = 42;
        break :blk temp * 2;
    };
    // temp is not visible here
}
```

**Special features:**
- Variables are limited to the surrounding `{}` block
- Labeled Blocks can return values (`break :label value`)
- No Variable Shadowing allowed

**Further reading:**
- [Zig Documentation - Blocks](https://ziglang.org/documentation/master/#Blocks)

</TabItem>
</Tabs>


## 4.2.2. Function Scope

Variables are only visible within the function in which they were declared.

### Languages {#sprachen}

<Tabs availableTabs={['c', 'common-lisp', 'cpp', 'csharp', 'd', 'dart', 'fortran', 'go', 'groovy', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'matlab', 'mercury', 'nim', 'objective-c', 'object-pascal', 'octave', 'perl', 'php', 'prolog', 'python', 'ruby', 'rust', 'scala', 'swift', 'typescript', 'v', 'wolfram-language']}>
<TabItem value="javascript" label="JavaScript">

```javascript
// Function Scope with var
function example() {
  var count = 42;
  if (true) {
    var name = "Hallo";  // Has Function Scope
  }
  console.log(count);  // 42
  console.log(name);   // "Hallo"
}
// console.log(count);  // ReferenceError
```

**Special features:**
- `var` has Function Scope
- `let` and `const` have Block Scope

**Further reading:**
- [MDN Web Docs - var](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Function Scope with var
function example(): void {
  var count = 42;
  if (true) {
    var name = "Hallo";  // Has Function Scope
  }
  console.log(count);  // 42
  console.log(name);   // "Hallo"
}
// console.log(count);  // ReferenceError
```

**Special features:**
- `var` has Function Scope
- `let` and `const` have Block Scope

**Further reading:**
- [TypeScript Documentation - Variable Declarations](https://www.typescriptlang.org/docs/handbook/variable-declarations.html)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Clause Scope (Function Scope)
example(X) :-
    Y is X + 1,
    format("~w~n", [Y]).
% Y is only visible within this clause

another_clause :-
    % Y is not visible here
    Z = 42,
    format("~w~n", [Z]).
```

**Special features:**
- Variables are limited to the clause (rule/fact) in which they appear
- Each clause of a predicate has its own variable scope
- Variables begin with uppercase letters or underscore
- `_` is the anonymous variable (each occurrence is independent)

**Further reading:**
- [SWI-Prolog Manual - Syntax](https://www.swi-prolog.org/pldoc/man?section=syntax)

</TabItem>
<TabItem value="python" label="Python">

```python
# Function Scope
def example():
    count = 42
    if True:
        name = "Hallo"  # Has Function Scope
    print(count)  # 42
    print(name)   # "Hallo"

# print(count)  # NameError
```

**Special features:**
- All variables in functions have Function Scope
- Variables are only visible within the function

**Further reading:**
- [Python Documentation - Scopes](https://docs.python.org/3/tutorial/classes.html#scopes-and-namespaces)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Function Scope
def example
  count = 42
  if true
    name = "Hallo"  # Has Function Scope
  end
  puts count  # 42
  puts name   # "Hallo"
end
# puts count  # NameError
```

**Special features:**
- All variables in functions have Function Scope
- Variables are only visible within the function

**Further reading:**
- [Ruby Documentation - Variables](https://ruby-doc.org/core-3.1.2/doc/syntax/assignment_rdoc.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Function Scope (Method Scope)
void example() {
  int count = 42;
  if (true) {
    int name = 10;  // Has Block Scope, not Function Scope
  }
  System.out.println(count);  // 42
  // System.out.println(name);  // Compiler error
}
```

**Special features:**
- Java has Block Scope, not Function Scope
- Variables in blocks are not visible in the entire Function Scope

**Further reading:**
- [Java Language Specification - Scope](https://docs.oracle.com/javase/specs/jls/se21/html/jls-6.html#jls-6.3)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Function Scope (Method Scope)
void Example() {
  int count = 42;
  if (true) {
    int name = 10;  // Has Block Scope, not Function Scope
  }
  Console.WriteLine(count);  // 42
  // Console.WriteLine(name);  // Compiler error
}
```

**Special features:**
- C# has Block Scope, not Function Scope
- Variables in blocks are not visible in the entire Function Scope

**Further reading:**
- [Microsoft C# Documentation - Scope](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/basic-concepts#scopes)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Function Scope
void example() {
  int count = 42;
  if (true) {
    int name = 10;  // Has Block Scope, not Function Scope
  }
  std::cout << count << std::endl;  // 42
  // std::cout << name << std::endl;  // Compiler error
}
```

**Special features:**
- C++ has Block Scope, not Function Scope
- Variables in blocks are not visible in the entire Function Scope

**Further reading:**
- [cppreference.com - Scope](https://en.cppreference.com/w/cpp/language/scope)

</TabItem>
<TabItem value="c" label="C">

```c
// Function Scope
void example() {
  int count = 42;
  if (true) {
    int name = 10;  // Has Block Scope, not Function Scope
  }
  printf("%d\n", count);  // 42
  // printf("%d\n", name);  // Compiler error
}
```

**Special features:**
- C has Block Scope, not Function Scope
- Variables in blocks are not visible in the entire Function Scope

**Further reading:**
- [C Standard - Scope](https://en.cppreference.com/w/c/language/scope)

</TabItem>
<TabItem value="go" label="Go">

```go
// Function Scope
func example() {
  count := 42
  if true {
    name := "Hallo"  // Has Block Scope, not Function Scope
  }
  fmt.Println(count)  // 42
  // fmt.Println(name)  // Compiler error
}
```

**Special features:**
- Go has Block Scope, not Function Scope
- Variables in blocks are not visible in the entire Function Scope

**Further reading:**
- [Go Documentation - Scope](https://go.dev/ref/spec#Declarations_and_scope)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Function Scope
fn example() {
  let count = 42;
  if true {
    let name = "Hallo";  // Has Block Scope, not Function Scope
  }
  println!("{}", count);  // 42
  // println!("{}", name);  // Compiler error
}
```

**Special features:**
- Rust has Block Scope, not Function Scope
- Variables in blocks are not visible in the entire Function Scope

**Further reading:**
- [Rust Documentation - Variables](https://doc.rust-lang.org/book/ch03-01-variables-and-mutability.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Function Scope
fun example() {
  val count = 42
  if (true) {
    val name = "Hallo"  // Has Block Scope, not Function Scope
  }
  println(count)  // 42
  // println(name)  // Compiler error
}
```

**Special features:**
- Kotlin has Block Scope, not Function Scope
- Variables in blocks are not visible in the entire Function Scope

**Further reading:**
- [Kotlin Documentation - Scope](https://kotlinlang.org/docs/scope-functions.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Function Scope
def example(): Unit = {
  val count = 42
  if (true) {
    val name = "Hallo"  // Has Block Scope, not Function Scope
  }
  println(count)  // 42
  // println(name)  // Compiler error
}
```

**Special features:**
- Scala has Block Scope, not Function Scope
- Variables in blocks are not visible in the entire Function Scope

**Further reading:**
- [Scala Documentation - Scope](https://docs.scala-lang.org/tour/basics.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Function Scope
func example() {
  let count = 42
  if true {
    let name = "Hallo"  // Has Block Scope, not Function Scope
  }
  print(count)  // 42
  // print(name)  // Compiler error
}
```

**Special features:**
- Swift has Block Scope, not Function Scope
- Variables in blocks are not visible in the entire Function Scope

**Further reading:**
- [Swift Documentation - Scope](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/thebasics/)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Function Scope
void example() {
  int count = 42;
  if (true) {
    String name = "Hallo";  // Has Block Scope, not Function Scope
  }
  print(count);  // 42
  // print(name);  // Compiler error
}
```

**Special features:**
- Dart has Block Scope, not Function Scope
- Variables in blocks are not visible in the entire Function Scope

**Further reading:**
- [Dart Language Tour - Scope](https://dart.dev/guides/language/language-tour#scope)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Function Scope
(defun calculate (x y)
  (let ((result (+ x y)))
    result))
;; x, y and result are not visible outside
```

**Special features:**
- Function parameters are limited to the function body
- `defun` implicitly creates a `block` with the function name
- Local variables with `let` are limited to the `let` block

**Further reading:**
- [Common Lisp HyperSpec - defun](http://www.lispworks.com/documentation/HyperSpec/Body/m_defun.htm)

</TabItem>
<TabItem value="d" label="D">

```d
// Function Scope
void myFunction() {
    int localVar = 42;
    writeln(localVar);  // 42
}

// writeln(localVar);  // Error: localVar is not visible

void anotherFunction() {
    // localVar is not visible here
    int localVar = 100;  // Independent variable
}
```

**Special features:**
- Variables are only visible within the function
- Each function has its own scope
- Nested functions have access to the surrounding scope

**Further reading:**
- [D Language Specification - Scope](https://dlang.org/spec/declaration.html#scope)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Function Scope
function calculate(x) result(res)
    integer, intent(in) :: x
    integer :: res
    integer :: temp  ! Only visible in this function

    temp = x * 2
    res = temp + 1
end function calculate

! temp is not accessible outside the function
```

**Special features:**
- Variables in functions/subroutines have local scope
- Local variables are not accessible outside the function
- `SAVE` attribute preserves the value between calls

**Further reading:**
- [Fortran Wiki - Functions](https://fortranwiki.org/fortran/show/Functions)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Function Scope
def myFunction() {
    def localVar = 42 // only visible within the function
    return localVar
}

def result = myFunction() // 42
// println localVar // Error: Variable localVar not defined
```

**Special features:**
- Variables within a method are only visible there
- Parameters also have Function Scope
- Closures can access surrounding variables (Closure Scope)

**Further reading:**
- [Groovy Documentation - Semantics](https://groovy-lang.org/semantics.html)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
function outer()
    x = 10  # Local variable in outer
    
    function inner()
        y = 20  # Local variable in inner
        println(x)  # Can access x (Closure)
    end
    
    inner()
    # y is not available here
end
```

**Special features:**
- Functions create a Hard Scope
- Inner functions can access variables of the outer function (Closures)
- Local variables are not visible outside the function

**Further reading:**
- [Julia Documentation - Scope of Variables](https://docs.julialang.org/en/v1/manual/variables-and-scoping/)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Function Scope
fun outer(): console ()
  val x = 10  // Local variable in outer
  fun inner()
    val y = 20  // Local variable in inner
    println(x.show)  // Can access x (Closure)
  inner()
  // y is not available here
```

**Special features:**
- Functions create their own scope
- Inner functions can access variables of the outer function (Closures)
- Parameters and `val`/`var` bindings are only visible in the function

**Further reading:**
- [Koka Language Guide - Functions](https://koka-lang.github.io/koka/doc/book.html#sec-functions)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Function Scope
def outer : IO Unit := do
  let count := 42
  let inner : IO Unit := do
    let name := "Hallo"  -- Only visible in inner
    IO.println s!"{count}"  -- 42 (from outer Scope)
  inner
  -- name is not visible here

-- Function parameters have Function Scope
def calculate (x y : Nat) : Nat :=
  x + y
-- x and y are not visible outside
```

**Special features:**
- Function parameters and local `let` bindings are limited to the function
- Inner functions can access variables of the outer function (Closures)
- `where` definitions have access to the surrounding scope

**Further reading:**
- [Lean 4 Documentation - Functions](https://lean-lang.org/lean4/doc/lean-by-example/functions.html)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
function example()
    x = 10;  % Only visible in this function
    helper();
    disp(x); % x is still 10
end

function helper()
    % x is NOT visible here
    y = 20;  % Only visible in helper
end
```

**Special features:**
- Each function has its own workspace
- Variables from if/for/while blocks are visible in the entire function (no Block Scope)
- Nested functions can access the workspace of the outer function

**Further reading:**
- [MATLAB Documentation - Base and Function Workspaces](https://www.mathworks.com/help/matlab/matlab_prog/base-and-function-workspaces.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```mercury
% Clause Scope (Function Scope)
:- pred example(int::in, io::di, io::uo) is det.
example(X, !IO) :-
    Y = X + 1,
    io.format("%d\n", [i(Y)], !IO).
% Y is only visible within this clause

:- pred another_clause(io::di, io::uo) is det.
another_clause(!IO) :-
    % Y is not visible here
    Z = 42,
    io.format("%d\n", [i(Z)], !IO).
```

**Special features:**
- Variables are limited to the clause (rule) in which they appear
- Each clause of a predicate has its own variable scope
- Variables begin with uppercase letters or underscore
- `_` is the anonymous variable (each occurrence is independent)

**Further reading:**
- [Mercury Language Reference - Clauses](https://www.mercurylang.org/information/doc-release/mercury_ref/Clauses.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Function Scope
proc myProc() =
  var localVar = 42
  echo localVar  # 42

myProc()
# echo localVar  # Error: localVar is not defined
```

**Special features:**
- Variables in procedures are local
- Not accessible outside the procedure
- Nested procedures can access outer variables (Closures)

**Further reading:**
- [Nim Documentation - Procedures](https://nim-lang.org/docs/manual.html#procedures)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
procedure Example;
var
  x: Integer;  // Function Scope
begin
  x := 10;
end;
// x is not visible here
```

**Special features:**
- Variables in the `var` block are limited to the function/procedure
- Nested functions can access variables of the outer function

**Further reading:**
- [Free Pascal Documentation - Procedures](https://www.freepascal.org/docs-html/ref/refch14.html)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
- (void)example {
    int x = 10; // x is visible in the entire method
    if (x > 5) {
        int y = 20; // y only visible in if block
    }
    // y is no longer visible here
}
```

**Special features:**
- C-style Function/Method Scope
- Local variables are only visible within the method
- Nested blocks create sub-scopes

**Further reading:**
- [Apple Documentation - Programming with Objective-C](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
function demo()
    x = 10;  % Only visible within the function
    if true
        y = 20;  % Also visible in entire function
    end
    disp(y);  % Works: y is in Function Scope
end
```

**Special features:**
- Variables are visible in the entire function body
- No Block Scope (if/for blocks do not create a new scope)

**Further reading:**
- [GNU Octave Documentation - Variables](https://octave.org/doc/v8.1.0/Variables.html)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
// Function Scope: Variables are only visible within the function
$globalVar = "global";

function example() {
    $localVar = "local";
    // echo $globalVar;  // Error: Undefined variable
    echo $localVar;      // OK
}

// echo $localVar;  // Error: Undefined variable
?>
```

**Special features:**
- Variables have Function Scope (no Block Scope)
- Global variables are not automatically visible in functions
- `global` keyword for accessing global variables

**Further reading:**
- [PHP Documentation - Variable Scope](https://www.php.net/manual/en/language.variables.scope.php)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Function Scope with local
our $x = 10;

sub example {
    local $x = 20;  # Dynamically bound, visible in called functions
    inner();
}

sub inner {
    print "$x\n";  # 20 (sees the local value from example)
}

example();
print "$x\n";  # 10 (original restored)
```

**Special features:**
- `local` creates temporary values for package variables
- Visible in the function and all called functions
- Value is restored after function ends

**Further reading:**
- [Perl Documentation - local](https://perldoc.perl.org/functions/local)

</TabItem>
<TabItem value="v" label="V">

```v
// Function Scope
fn calculate() int {
    result := 42
    return result
}

// println(result)  // Error: result is only visible in calculate()
```

**Special features:**
- Variables are limited to the function in which they are declared
- No access to local variables from outside

**Further reading:**
- [V Documentation - Functions](https://github.com/vlang/v/blob/master/doc/docs.md#functions)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
f[x_] := Module[{local = x * 2},
    local + 1
]

f[5]  (* 11 *)
(* local is not visible here *)
```

**Special features:**
- `Module[]` creates function-local variables
- Pattern parameters (`x_`) are only visible within the function definition

**Further reading:**
- [Wolfram Language Documentation - Module](https://reference.wolfram.com/language/ref/Module.html)

</TabItem>
</Tabs>


## 4.2.3. Global Scope

Variables declared in the global scope are visible everywhere in the program.

### Languages {#sprachen}

<Tabs availableTabs={['c', 'common-lisp', 'cpp', 'd', 'dart', 'fortran', 'go', 'javascript', 'julia', 'kotlin', 'lua', 'matlab', 'nim', 'objective-c', 'object-pascal', 'octave', 'perl', 'php', 'python', 'ruby', 'rust', 'scala', 'swift', 'typescript', 'wolfram-language']} orangeTabs={['csharp', 'java', 'prolog']}>
<TabItem value="javascript" label="JavaScript">

```javascript
// Global Scope
var globalCount = 42;  // Global with var
let globalName = "Hallo";  // Global with let
const globalPrice = 19.99;  // Global with const

function example() {
  console.log(globalCount);  // 42
  console.log(globalName);   // "Hallo"
}
```

**Special features:**
- Variables outside functions are global
- `var`, `let` and `const` can be global

**Further reading:**
- [MDN Web Docs - Global Scope](https://developer.mozilla.org/en-US/docs/Glossary/Global_scope)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Global Scope
var globalCount = 42;  // Global with var
let globalName = "Hallo";  // Global with let
const globalPrice = 19.99;  // Global with const

function example(): void {
  console.log(globalCount);  // 42
  console.log(globalName);   // "Hallo"
}
```

**Special features:**
- Variables outside functions are global
- `var`, `let` and `const` can be global

**Further reading:**
- [TypeScript Documentation - Variable Declarations](https://www.typescriptlang.org/docs/handbook/variable-declarations.html)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Global Scope via dynamic predicates
:- dynamic global_count/1.

set_global :-
    retractall(global_count(_)),
    assert(global_count(42)).

read_global :-
    global_count(Count),
    format("~w~n", [Count]).  % 42

% Global Flags
:- set_prolog_flag(my_flag, default_value).

read_flag :-
    current_prolog_flag(my_flag, Value),
    format("~w~n", [Value]).
```

**Special features:**
- Prolog does not have global variables in the traditional sense
- Global state is simulated via dynamic predicates (`assert`/`retract`)
- `nb_setval`/`nb_getval` (SWI-Prolog) provide global variables as an extension
- Prolog flags (`set_prolog_flag`/`current_prolog_flag`) for global configuration

**Further reading:**
- [SWI-Prolog Manual - Dynamic Predicates](https://www.swi-prolog.org/pldoc/man?predicate=assert/1)

</TabItem>
<TabItem value="python" label="Python">

```python
# Global Scope
global_count = 42
global_name = "Hallo"

def example():
    print(global_count)  # 42
    print(global_name)   # "Hallo"
```

**Special features:**
- Variables at module level are global
- `global` keyword to modify global variables in functions

**Further reading:**
- [Python Documentation - Global Scope](https://docs.python.org/3/tutorial/classes.html#scopes-and-namespaces)

</TabItem>
<TabItem value="java" label="Java">

```java
// Global Scope (Class fields)
public class Example {
  static int globalCount = 42;  // Static field
  String globalName = "Hallo";  // Instance field
  
  void method() {
    System.out.println(globalCount);  // 42
    System.out.println(globalName);   // "Hallo"
  }
}
```

**Special features:**
- No true global variables
- Static fields are visible class-wide

**Further reading:**
- [Java Language Specification - Scope](https://docs.oracle.com/javase/specs/jls/se21/html/jls-6.html#jls-6.3)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Global Scope (Class fields)
public class Example {
  static int globalCount = 42;  // Static field
  string globalName = "Hallo";  // Instance field
  
  void Method() {
    Console.WriteLine(globalCount);  // 42
    Console.WriteLine(globalName);   // "Hallo"
  }
}
```

**Special features:**
- No true global variables
- Static fields are visible class-wide

**Further reading:**
- [Microsoft C# Documentation - Scope](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/basic-concepts#scopes)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Global Scope
int globalCount = 42;
std::string globalName = "Hallo";

void example() {
  std::cout << globalCount << std::endl;  // 42
  std::cout << globalName << std::endl;   // "Hallo"
}
```

**Special features:**
- Variables outside functions are global
- `static` for internal linkage

**Further reading:**
- [cppreference.com - Scope](https://en.cppreference.com/w/cpp/language/scope)

</TabItem>
<TabItem value="c" label="C">

```c
// Global Scope
int globalCount = 42;
char* globalName = "Hallo";

void example() {
  printf("%d\n", globalCount);  // 42
  printf("%s\n", globalName);   // "Hallo"
}
```

**Special features:**
- Variables outside functions are global
- `static` for internal linkage

**Further reading:**
- [C Standard - Scope](https://en.cppreference.com/w/c/language/scope)

</TabItem>
<TabItem value="go" label="Go">

```go
// Global Scope (Package Level)
var globalCount = 42
var globalName = "Hallo"

func example() {
  fmt.Println(globalCount)  // 42
  fmt.Println(globalName)    // "Hallo"
}
```

**Special features:**
- Variables at package level are global
- Uppercase for exported variables

**Further reading:**
- [Go Documentation - Scope](https://go.dev/ref/spec#Declarations_and_scope)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Global Scope (Module Level)
static GLOBAL_COUNT: i32 = 42;
static mut GLOBAL_NAME: &str = "Hallo";

fn example() {
  println!("{}", GLOBAL_COUNT);  // 42
  unsafe {
    println!("{}", GLOBAL_NAME);  // "Hallo"
  }
}
```

**Special features:**
- `static` for global variables
- `static mut` requires `unsafe` block

**Further reading:**
- [Rust Documentation - Static Items](https://doc.rust-lang.org/reference/items/static-items.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Global Scope (Top-Level)
val globalCount = 42
var globalName = "Hallo"

fun example() {
  println(globalCount)  // 42
  println(globalName)   // "Hallo"
}
```

**Special features:**
- Top-level variables are global
- Variables are visible throughout the package

**Further reading:**
- [Kotlin Documentation - Scope](https://kotlinlang.org/docs/scope-functions.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Global Scope (Object Level)
object Example {
  val globalCount = 42
  var globalName = "Hallo"
  
  def example(): Unit = {
    println(globalCount)  // 42
    println(globalName)    // "Hallo"
  }
}
```

**Special features:**
- Variables in Objects are global
- `val` for immutable, `var` for mutable

**Further reading:**
- [Scala Documentation - Objects](https://docs.scala-lang.org/tour/singleton-objects.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Global Scope
let globalCount = 42
var globalName = "Hallo"

func example() {
  print(globalCount)  // 42
  print(globalName)   // "Hallo"
}
```

**Special features:**
- Top-level variables are global
- Variables are visible throughout the module

**Further reading:**
- [Swift Documentation - Scope](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/thebasics/)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Global Scope (Top-Level)
int globalCount = 42;
String globalName = "Hallo";

void example() {
  print(globalCount);  // 42
  print(globalName);   // "Hallo"
}
```

**Special features:**
- Top-level variables are global
- Variables are visible throughout the library

**Further reading:**
- [Dart Language Tour - Scope](https://dart.dev/guides/language/language-tour#scope)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Global Scope
globalCount = 42
globalName = "Hallo"

function example()
  print(globalCount)  -- 42
  print(globalName)   -- "Hallo"
end
```

**Special features:**
- Variables without `local` are global
- Global variables are visible everywhere

**Further reading:**
- [Lua Documentation - Variables](https://www.lua.org/manual/5.4/manual.html#3.3.7)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Global Scope
$globalCount = 42  # $ for global variables
globalName = "Hallo"  # Top-level variable

def example
  puts $globalCount  # 42
  puts globalName    # "Hallo"
end
```

**Special features:**
- `$` for true global variables
- Top-level variables are visible throughout the file

**Further reading:**
- [Ruby Documentation - Variables](https://ruby-doc.org/core-3.1.2/doc/syntax/assignment_rdoc.html)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Global special variables
(defvar *counter* 0)
(defparameter *max-retries* 3)

;; Global functions
(defun greet (name)
  (format t "Hello, ~a~%" name))
```

**Special features:**
- `defvar` declares global special variables (initialized only once)
- `defparameter` declares global special variables (re-initialized on each load)
- Convention: Global variables surrounded with `*earmuffs*`
- Global variables are dynamically bound (special variables)

**Further reading:**
- [Common Lisp HyperSpec - defvar](http://www.lispworks.com/documentation/HyperSpec/Body/m_defpar.htm)

</TabItem>
<TabItem value="d" label="D">

```d
// Global Scope (Module Level)
module mymodule;

int globalVar = 42;  // Module-level variable

void func1() {
    writeln(globalVar);  // 42
}

void func2() {
    globalVar = 100;  // Can be changed from anywhere in the module
}
```

**Special features:**
- Module-level variables are visible throughout the module
- Default visibility is `public` (also importable from other modules)
- `private` limits visibility to the current module
- Thread-Local Storage (TLS) is standard for module-level variables

**Further reading:**
- [D Language Specification - Module](https://dlang.org/spec/module.html)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Global Scope via Modules
module globals
    implicit none
    integer :: counter = 0
end module globals

subroutine increment()
    use globals
    counter = counter + 1
end subroutine
```

**Special features:**
- Module variables are global for all `USE` statements
- COMMON blocks (deprecated) for global variables
- Modules are the recommended way for global state

**Further reading:**
- [Fortran Wiki - Modules](https://fortranwiki.org/fortran/show/Modules)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Global variables
global_var = 42

function modify_global()
    global global_var  # Explicitly declare global
    global_var = 100
end

modify_global()
println(global_var)  # 100
```

**Special features:**
- Global variables require `global` keyword in functions for writing
- Reading global variables is possible without `global`
- Global variables can impact performance (type instability)
- `const` is recommended for global constants

**Further reading:**
- [Julia Documentation - Global Scope](https://docs.julialang.org/en/v1/manual/variables-and-scoping/#Global-Scope)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
function setGlobal()
    global sharedVar
    sharedVar = 42;
end

function readGlobal()
    global sharedVar
    disp(sharedVar); % 42
end
```

**Special features:**
- `global` keyword makes a variable globally accessible
- Must be declared in every function that wants to access it
- Global variables are rarely recommended in practice

**Further reading:**
- [MATLAB Documentation - Global Variables](https://www.mathworks.com/help/matlab/ref/global.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Global Scope
var globalVar = 100

proc useGlobal() =
  echo globalVar  # 100
  globalVar += 1

useGlobal()
echo globalVar  # 101
```

**Special features:**
- Top-level variables are global in the module
- Access from procedures possible
- Export with `*` for cross-module access

**Further reading:**
- [Nim Documentation - Modules](https://nim-lang.org/docs/manual.html#modules)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
var
  GlobalCounter: Integer = 0;  // Global variable

procedure Increment;
begin
  GlobalCounter := GlobalCounter + 1;
end;

begin
  Increment;
  WriteLn(GlobalCounter);  // 1
end.
```

**Special features:**
- Global variables in `var` block outside functions/procedures
- Visible in the entire unit and all units that import it
- Unit-private global variables in `implementation` section

**Further reading:**
- [Free Pascal Documentation - Variables](https://www.freepascal.org/docs-html/ref/refse14.html)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Global variable
int globalCounter = 0;

// Global constant
NSString *const AppName = @"MyApp";

// Static global variable (only visible in this file)
static int fileCounter = 0;
```

**Special features:**
- C-style global variables and constants
- `static` limits visibility to the file (File Scope)
- Global ObjC objects require `const` or `static`

**Further reading:**
- [Apple Documentation - Programming with Objective-C](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
global counter;
counter = 0;

function increment()
    global counter;
    counter = counter + 1;
end

increment();
disp(counter);  % 1
```

**Special features:**
- `global` keyword declares global variables
- Must be redeclared with `global` in every function
- `persistent` variables retain their value between function calls

**Further reading:**
- [GNU Octave Documentation - Global Variables](https://octave.org/doc/v8.1.0/Global-Variables.html)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
// Global Scope: global keyword for access
$counter = 0;

function increment() {
    global $counter;
    $counter++;
}

increment();
echo $counter; // 1
?>
```

**Special features:**
- Global variables require `global` keyword in functions
- `$GLOBALS` superglobal array as alternative
- Global scope is isolated from Function Scope

**Further reading:**
- [PHP Documentation - Variable Scope](https://www.php.net/manual/en/language.variables.scope.php)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Global Scope with our
our $global_var = 42;

sub example {
    print "$global_var\n";  # 42
}

example();
```

**Special features:**
- `our` declares variables in package scope (global)
- Without `use strict`, variables are automatically global
- `our` makes package variables lexically visible

**Further reading:**
- [Perl Documentation - our](https://perldoc.perl.org/functions/our)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Global Variables *)
globalVar = 42

f[] := Print[globalVar]
f[]  (* 42 *)
```

**Special features:**
- By default, all top-level assignments are global
- Global symbols belong to a context (e.g., `Global``)

**Further reading:**
- [Wolfram Language Documentation - Variables and Functions](https://reference.wolfram.com/language/guide/VariablesAndFunctions.html)

</TabItem>
</Tabs>


## 4.2.4. No Global Variables

Languages that do not allow global variables or restrict their use.

### Languages {#sprachen}

<Tabs availableTabs={['haskell', 'elm', 'erlang', 'elixir', 'clojure', 'gleam', 'koka', 'lean4', 'mercury', 'purescript', 'roc', 'idris']}>
<TabItem value="haskell" label="Haskell">

```haskell
-- No global variables
-- All values are organized in modules
module Example where

count :: Int
count = 42

name :: String
name = "Hallo"
```

**Special features:**
- No global variables in the traditional sense
- All values are organized in modules
- Immutable by default

**Further reading:**
- [Haskell Documentation - Modules](https://www.haskell.org/tutorial/modules.html)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- No global variables
-- All values are organized in modules
module Example exposing (count, name)

count : Int
count = 42

name : String
name = "Hallo"
```

**Special features:**
- No global variables
- All values are organized in modules
- Immutable by default

**Further reading:**
- [Elm Documentation - Modules](https://guide.elm-lang.org/core_language/modules.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% No global variables
% All values are organized in modules
-module(example).
-export([count/0, name/0]).

count() -> 42.
name() -> "Hallo".
```

**Special features:**
- No global variables
- All values are organized in modules
- Immutable by default

**Further reading:**
- [Erlang Documentation - Modules](https://www.erlang.org/doc/reference_manual/modules.html)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# No global variables
# All values are organized in modules
defmodule Example do
  def count, do: 42
  def name, do: "Hallo"
end
```

**Special features:**
- No global variables
- All values are organized in modules
- Immutable by default

**Further reading:**
- [Elixir Documentation - Modules](https://elixir-lang.org/getting-started/modules-and-functions.html)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; No global variables in the traditional sense
;; All values are organized in namespaces
(ns example)

(def count 42)
(def name "Hallo")
```

**Special features:**
- No global variables in the traditional sense
- All values are organized in namespaces
- Immutable by default

**Further reading:**
- [Clojure Documentation - Namespaces](https://clojure.org/reference/namespaces)

</TabItem>
<TabItem value="gleam" label="Gleam">

```erlang
// No global variables
// All values are organized in modules
pub fn count() -> Int {
  42
}

pub fn name() -> String {
  "Hallo"
}
```

**Special features:**
- No global variables
- All values are organized in modules
- Immutable by default

**Further reading:**
- [Gleam Documentation - Modules](https://gleam.run/documentation/)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// No global variables
// All values are organized in modules
module example

val count: int = 42
val name: string = "Hallo"

// Module-level definitions are immutable
// No global mutable state possible
```

**Special features:**
- No global mutable variables
- All module-level definitions are immutable
- Mutable state is explicitly modeled through effects (e.g., `ref`)
- Effect system enforces explicit management of side effects

**Further reading:**
- [Koka Language Guide - Modules](https://koka-lang.github.io/koka/doc/book.html#sec-modules)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- No global variables
-- All values are organized in namespaces
namespace Example

def count : Nat := 42
def name : String := "Hallo"

-- Namespace definitions are immutable
-- No global mutable state possible
```

**Special features:**
- No global mutable variables
- All top-level definitions (`def`) are immutable
- Values are organized in namespaces
- Mutable state is explicitly modeled through monads (e.g., `IO`, `StateM`)

**Further reading:**
- [Lean 4 Documentation - Namespaces](https://lean-lang.org/lean4/doc/organization.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```mercury
% No global variables
% All values are organized in modules
:- module example.
:- interface.

:- func count = int.
:- func name = string.

:- implementation.

count = 42.
name = "Hallo".
```

**Special features:**
- No global mutable variables
- All definitions are organized in modules
- Module-level functions and predicates are immutable
- Mutable state is explicitly managed through I/O state (`io.state`)

**Further reading:**
- [Mercury Language Reference - Modules](https://www.mercurylang.org/information/doc-release/mercury_ref/Modules.html)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- No global variables
-- All values are organized in modules
module Example where

count :: Int
count = 42

name :: String
name = "Hallo"
```

**Special features:**
- No global variables
- All values are organized in modules
- Immutable by default

**Further reading:**
- [PureScript Documentation - Modules](https://www.purescript.org/learn/getting-started/)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- No global variables
-- All values are organized in modules
count : I64
count = 42

name : Str
name = "Hallo"
```

**Special features:**
- No global variables
- All values are organized in modules
- Immutable by default

**Further reading:**
- [Roc Documentation - Modules](https://www.roc-lang.org/)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- No global variables
-- All values are organized in modules
module Example

count : Int
count = 42

name : String
name = "Hallo"
```

**Special features:**
- No global variables
- All values are organized in modules
- Immutable by default

**Further reading:**
- [Idris 2 Documentation - Modules](https://idris2.readthedocs.io/en/latest/tutorial/modules.html)

</TabItem>
</Tabs>


## 4.2.5. Lexical Scoping

Variables are resolved based on their position in the source code, not based on the call chain.

### Languages {#sprachen}

<Tabs availableTabs={['clojure', 'common-lisp', 'cpp', 'csharp', 'd', 'dart', 'elm', 'fortran', 'go', 'groovy', 'idris', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'lua', 'matlab', 'mercury', 'nim', 'objective-c', 'object-pascal', 'perl', 'python', 'racket', 'roc', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'wolfram-language', 'zig']} orangeTabs={['c', 'octave', 'v']}>
<TabItem value="javascript" label="JavaScript">

```javascript
// Lexical Scoping
function outer() {
  let count = 42;
  
  function inner() {
    console.log(count);  // 42 (from outer scope)
  }
  
  inner();
}
```

**Special features:**
- `let` and `const` have lexical scoping
- `var` also has lexical scoping (function scope)

**Further reading:**
- [MDN Web Docs - Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Lexical Scoping
function outer(): void {
  let count = 42;
  
  function inner(): void {
    console.log(count);  // 42 (from outer scope)
  }
  
  inner();
}
```

**Special features:**
- `let` and `const` have lexical scoping
- `var` also has lexical scoping (function scope)

**Further reading:**
- [TypeScript Documentation - Closures](https://www.typescriptlang.org/docs/handbook/variable-declarations.html)

</TabItem>
<TabItem value="python" label="Python">

```python
# Lexical Scoping
def outer():
    count = 42
    
    def inner():
        print(count)  # 42 (from outer scope)
    
    inner()
```

**Special features:**
- Python has lexical scoping
- Closures can access variables from outer scopes

**Further reading:**
- [Python Documentation - Closures](https://docs.python.org/3/tutorial/classes.html#scopes-and-namespaces)

</TabItem>
<TabItem value="java" label="Java">

```java
// Lexical Scoping
void outer() {
  int count = 42;
  
  class Inner {
    void inner() {
      System.out.println(count);  // 42 (from outer scope)
    }
  }
  
  new Inner().inner();
}
```

**Special features:**
- Java has lexical scoping
- Inner classes can access variables from outer scopes

**Further reading:**
- [Java Language Specification - Scope](https://docs.oracle.com/javase/specs/jls/se21/html/jls-6.html#jls-6.3)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Lexical Scoping
void Outer() {
  int count = 42;
  
  Action inner = () => {
    Console.WriteLine(count);  // 42 (from outer scope)
  };
  
  inner();
}
```

**Special features:**
- C# has lexical scoping
- Lambda expressions can access variables from outer scopes

**Further reading:**
- [Microsoft C# Documentation - Closures](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/lambda-expressions)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Lexical Scoping
void outer() {
  int count = 42;
  
  auto inner = [count]() {
    std::cout << count << std::endl;  // 42 (from outer scope)
  };
  
  inner();
}
```

**Special features:**
- C++ has lexical scoping
- Lambda expressions can capture variables from outer scopes

**Further reading:**
- [cppreference.com - Lambda Expressions](https://en.cppreference.com/w/cpp/language/lambda)

</TabItem>
<TabItem value="c" label="C">

```c
// Lexical Scoping (limited)
void outer() {
  int count = 42;
  
  // C has no closures
  // Inner functions cannot access outer variables
}
```

**Special features:**
- C does not have full lexical scoping
- No closures or inner functions

**Further reading:**
- [C Standard - Scope](https://en.cppreference.com/w/c/language/scope)

</TabItem>
<TabItem value="go" label="Go">

```go
// Lexical Scoping
func outer() {
  count := 42
  
  inner := func() {
    fmt.Println(count)  // 42 (from outer scope)
  }
  
  inner()
}
```

**Special features:**
- Go has lexical scoping
- Closures can access variables from outer scopes

**Further reading:**
- [Go Documentation - Closures](https://go.dev/tour/moretypes/25)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Lexical Scoping
fn outer() {
  let count = 42;
  
  let inner = || {
    println!("{}", count);  // 42 (from outer scope)
  };
  
  inner();
}
```

**Special features:**
- Rust has lexical scoping
- Closures can access variables from outer scopes

**Further reading:**
- [Rust Documentation - Closures](https://doc.rust-lang.org/book/ch13-01-closures.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Lexical Scoping
fun outer() {
  val count = 42
  
  val inner = {
    println(count)  // 42 (from outer scope)
  }
  
  inner()
}
```

**Special features:**
- Kotlin has lexical scoping
- Closures can access variables from outer scopes

**Further reading:**
- [Kotlin Documentation - Closures](https://kotlinlang.org/docs/lambdas.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Lexical Scoping
def outer(): Unit = {
  val count = 42
  
  val inner = () => {
    println(count)  // 42 (from outer scope)
  }
  
  inner()
}
```

**Special features:**
- Scala has lexical scoping
- Closures can access variables from outer scopes

**Further reading:**
- [Scala Documentation - Closures](https://docs.scala-lang.org/tour/higher-order-functions.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Lexical Scoping
func outer() {
  let count = 42
  
  let inner = {
    print(count)  // 42 (from outer scope)
  }
  
  inner()
}
```

**Special features:**
- Swift has lexical scoping
- Closures can access variables from outer scopes

**Further reading:**
- [Swift Documentation - Closures](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/closures/)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Lexical Scoping
void outer() {
  int count = 42;
  
  void inner() {
    print(count);  // 42 (from outer scope)
  }
  
  inner();
}
```

**Special features:**
- Dart has lexical scoping
- Closures can access variables from outer scopes

**Further reading:**
- [Dart Language Tour - Closures](https://dart.dev/guides/language/language-tour#functions)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Lexical Scoping: Variables are resolved in the defining context
(defn make-adder [x]
  (fn [y] (+ x y)))  ; x is lexically bound

(def add5 (make-adder 5))
(add5 3)  ; 8 — x is 5 from the lexical context
```

**Special features:**
- Lexical scoping is standard in Clojure
- Closures capture their lexical context
- `let`, `fn`, `defn` create lexical bindings

**Further reading:**
- [Clojure Documentation - Vars and the Global Environment](https://clojure.org/reference/vars)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Lexical Scoping (Standard in Common Lisp)
(let ((x 10))
  (let ((f (lambda () x)))
    (let ((x 20))
      (funcall f))))  ; Returns 10 (lexical x)
```

**Special features:**
- Lexical scoping is the standard for `let` bindings
- Closures capture lexical environment
- Only variables declared with `defvar`/`defparameter` use dynamic scoping
- Since ANSI Common Lisp, lexical scoping is the default

**Further reading:**
- [Common Lisp HyperSpec - Lexical Variables](http://www.lispworks.com/documentation/HyperSpec/Body/03_aaba.htm)

</TabItem>
<TabItem value="d" label="D">

```d
// Lexical Scoping
int x = 10;

void outer() {
    int y = 20;

    void inner() {
        writeln(x);  // 10 (access to module level)
        writeln(y);  // 20 (access to enclosing function)
    }

    inner();
}
```

**Special features:**
- Variables are resolved based on their position in the source code
- Inner functions have access to variables from outer functions
- Closures capture variables lexically
- No dynamic scoping

**Further reading:**
- [D Language Specification - Scope](https://dlang.org/spec/declaration.html#scope)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Lexical Scoping
outerFunction : Int -> Int -> Int
outerFunction x =
    let
        innerFunction y = x + y  -- x from outer scope
    in
    innerFunction
```

**Special features:**
- Inner functions have access to variables from the outer scope
- Scope is determined at compile time (lexically)
- No dynamic scoping

**Further reading:**
- [Elm Documentation - Functions](https://guide.elm-lang.org/core_language.html)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Lexical Scoping with internal procedures
subroutine outer()
    implicit none
    integer :: x = 10

contains
    subroutine inner()
        ! x is visible through lexical scoping
        print *, x  ! Access to x from outer()
    end subroutine inner
end subroutine outer
```

**Special features:**
- Internal procedures (after `CONTAINS`) have access to variables from the enclosing procedure
- Host Association: Variables are inherited from the enclosing scope
- Module variables accessible through `USE` association

**Further reading:**
- [Fortran Wiki - Internal procedures](https://fortranwiki.org/fortran/show/Internal+procedures)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Lexical Scoping
def outer = "außen"

def myFunction() {
    def inner = "innen"
    println outer // Access to outer variable (in scripts)
}

// Closures use Lexical Scoping
def createClosure() {
    def x = 10
    return { -> x + 1 } // x is lexically bound
}

def closure = createClosure()
println closure() // 11
```

**Special features:**
- Groovy uses lexical scoping (static scoping)
- Closures capture variables from the surrounding lexical scope
- Closure delegate can influence scoping behavior

**Further reading:**
- [Groovy Documentation - Closures](https://groovy-lang.org/closures.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Lexical Scoping
outer : Int
outer =
    let x = 10
        inner = let y = 20
                in x + y  -- x from outer scope visible
    in inner
```

**Special features:**
- Variables are resolved lexically
- `let` and `where` create new scopes
- Inner scopes have access to outer bindings

**Further reading:**
- [Idris 2 Documentation - Types and Functions](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
function make_counter()
    count = 0
    return function()
        count += 1  # Access to variable from outer scope
        return count
    end
end

counter = make_counter()
println(counter())  # 1
println(counter())  # 2
println(counter())  # 3
```

**Special features:**
- Julia uses lexical (static) scoping
- Closures capture variables from the enclosing scope
- Scope is determined at compile time

**Further reading:**
- [Julia Documentation - Scope of Variables](https://docs.julialang.org/en/v1/manual/variables-and-scoping/)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Lexical Scoping
fun make-counter(): () -> console int
  var count := 0
  fn()
    count := count + 1  // Access to variable from outer scope
    println(count.show)
    count

val counter = make-counter()
counter()  // 1
counter()  // 2
counter()  // 3
```

**Special features:**
- Koka uses lexical scoping
- Closures capture variables from the surrounding lexical scope
- Inner functions have access to `val` and `var` bindings from the outer function
- Scope is determined at compile time

**Further reading:**
- [Koka Language Guide - Functions](https://koka-lang.github.io/koka/doc/book.html#sec-functions)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Lexical Scoping
def makeAdder (x : Nat) : Nat → Nat :=
  fun y => x + y  -- x is lexically bound

def add5 := makeAdder 5
#eval add5 3  -- 8 — x is 5 from the lexical context

-- Closures in do blocks
def outer : IO Unit := do
  let count := 42
  let inner := fun () => IO.println s!"{count}"  -- count from outer scope
  inner ()
```

**Special features:**
- Lean 4 uses lexical scoping
- Closures capture variables from the surrounding lexical scope
- Scope is determined at compile time
- No dynamic scoping

**Further reading:**
- [Lean 4 Documentation - Functions](https://lean-lang.org/lean4/doc/lean-by-example/functions.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Lexical Scoping: Closures capture outer variables
function makeCounter()
    local count = 0
    return function()
        count = count + 1    -- Captures "count" from outer scope
        return count
    end
end

local counter = makeCounter()
print(counter())  -- 1
print(counter())  -- 2
print(counter())  -- 3

-- Nested scopes
local x = "global"
do
    local x = "outer"
    local function inner()
        print(x)    -- "outer" (lexically bound)
    end
    inner()
end
```

**Special features:**
- Lua uses full lexical scoping (since Lua 5.0)
- Closures capture upvalues (references to outer `local` variables)
- Upvalues are captured as references, not copies
- Lua had limited scoping before version 5.0 (only one upvalue level)

**Further reading:**
- [Lua Reference Manual - Visibility Rules](https://www.lua.org/manual/5.4/manual.html#3.5)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
function result = outer()
    x = 10;
    result = inner();
    
    function y = inner()
        y = x + 5; % Access to x from outer
    end
end
```

**Special features:**
- Nested functions have access to variables from the outer function
- Anonymous functions capture variables from the surrounding scope (closures)

**Further reading:**
- [MATLAB Documentation - Nested Functions](https://www.mathworks.com/help/matlab/matlab_prog/nested-functions.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```mercury
% Lexical Scoping: Variables are resolved in the source code
:- pred outer(io::di, io::uo) is det.
outer(!IO) :-
    Count = 42,
    % Lambda expression captures Count from surrounding scope
    Inner = (pred(IO0::di, IO1::uo) is det :-
        io.format("%d\n", [i(Count)], IO0, IO1)
    ),
    Inner(!IO).

% Variables in clauses are resolved lexically
:- func add(int, int) = int.
add(X, Y) = X + Y.
```

**Special features:**
- Mercury uses lexical scoping
- Variables are resolved based on their position in the source code
- Lambda expressions can capture variables from the surrounding scope (closures)
- No dynamic scoping

**Further reading:**
- [Mercury Language Reference - Clauses](https://www.mercurylang.org/information/doc-release/mercury_ref/Clauses.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Lexical Scoping
var x = "global"

proc outer() =
  var x = "outer"
  proc inner() =
    echo x  # "outer" (lexically bound)
  inner()

outer()
echo x  # "global"
```

**Special features:**
- Nim uses lexical scoping
- Inner functions can access outer variables
- Closures capture variables lexically

**Further reading:**
- [Nim Documentation - Scoping Rules](https://nim-lang.org/docs/manual.html#scoping-rules)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
procedure Outer;
var
  x: Integer;

  procedure Inner;
  begin
    x := 42;  // Access to variable from outer function
  end;

begin
  x := 0;
  Inner;
  WriteLn(x);  // 42
end;
```

**Special features:**
- Lexical Scoping: Nested functions see variables from the outer function
- Static binding at compile time

**Further reading:**
- [Free Pascal Documentation - Procedures](https://www.freepascal.org/docs-html/ref/refch14.html)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
int outer = 10;

void (^block)(void) = ^{
    // Block sees outer through Lexical Scoping
    NSLog(@"%d", outer); // 10
};

block();
```

**Special features:**
- C-style lexical scoping
- Blocks (closures) capture variables from the surrounding scope
- Captured variables are captured as copies by default
- `__block` qualifier enables modification of captured variables

**Further reading:**
- [Apple Documentation - Blocks](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/WorkingwithBlocks/WorkingwithBlocks.html)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
x = 10;
func = @() disp(x);  % Anonymous function captures x from outer scope
func();  % Outputs 10
```

**Special features:**
- Anonymous functions use lexical scoping (values are captured at creation)
- Regular functions have their own scope (no access to outer local variables)

**Further reading:**
- [GNU Octave Documentation - Anonymous Functions](https://octave.org/doc/v8.1.0/Anonymous-Functions.html)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Lexical Scoping with my
my $x = 10;

sub outer {
    my $y = 20;
    sub inner {
        print "$x\n";  # 10 (lexically visible)
        print "$y\n";  # 20 (lexically visible)
    }
    inner();
}

outer();
```

**Special features:**
- `my` creates lexically bound variables
- Variables are visible in enclosing blocks (closures)
- Standard scoping mechanism in modern Perl

**Further reading:**
- [Perl Documentation - Scoping](https://perldoc.perl.org/perlsub#Private-Variables-via-my())

</TabItem>
<TabItem value="racket" label="Racket">

```racket
;; Lexical Scoping
(define x 10)

(define (outer)
  (define x 20)
  (define (inner)
    x)  ; References x from outer (20), not global (10)
  (inner))

(outer)  ; 20
```

**Special features:**
- Lexical scoping is the standard scoping model
- Variables are resolved in the lexical context
- Closures capture lexical environment

**Further reading:**
- [Racket Documentation - Scope](https://docs.racket-lang.org/guide/let.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Lexical Scoping
outer = 10
inner =
    x = outer + 5
    x
```

**Special features:**
- Lexical scoping
- Inner scopes have access to outer bindings
- Closures capture variables lexically

**Further reading:**
- [Roc Documentation](https://www.roc-lang.org/tutorial)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
(define (outer)
  (define x 10)
  (define (inner)
    (display x))  ; Access to x from surrounding scope
  (inner))

(let ((x 1))
  (let ((f (lambda () x)))
    (let ((x 2))
      (f))))  ; Returns 1 (lexical scoping)
```

**Special features:**
- Scheme introduced lexical scoping as a fundamental feature
- Closures capture variables from the lexical scope
- `let`, `let*`, `letrec` create lexical scopes

**Further reading:**
- [Scheme Documentation - Lexical Scoping](https://www.scheme.com/tspl4/binding.html)

</TabItem>
<TabItem value="v" label="V">

```v
// Lexical Scoping
x := 10

fn outer() {
    // x is not visible here (no access to outer variables)
    y := 20

    inner_fn := fn [y] () {
        println(y)  // Access via capture
    }
    inner_fn()
}
```

**Special features:**
- Lexical Scoping: Scope is determined at compile time
- Closures must explicitly capture variables with `[var]`
- Functions have no implicit access to outer variables

**Further reading:**
- [V Documentation - Closures](https://github.com/vlang/v/blob/master/doc/docs.md#closures)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Lexical Scoping with Module *)
x = 10;
f[] := Module[{x = 20},
    g[] := x;  (* Refers to local x *)
    g[]
]
f[]  (* 20 *)
```

**Special features:**
- `Module[]` uses lexical scoping
- Local variables are replaced by unique symbols

**Further reading:**
- [Wolfram Language Documentation - Module](https://reference.wolfram.com/language/ref/Module.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Lexical Scoping: Scope is determined at compile time
const std = @import("std");

const global_value: i32 = 100;

fn outerFunction() void {
    const outer_value: i32 = 50;

    // Inner block can access outer_value
    {
        const inner_value: i32 = outer_value + global_value;
        std.debug.print("{}\n", .{inner_value});  // 150
    }
}
```

**Special features:**
- Zig uses lexical scoping
- Scope is determined at compile time, not at runtime
- Inner blocks can access variables from outer blocks
- No dynamic scoping

**Further reading:**
- [Zig Documentation - Variables](https://ziglang.org/documentation/master/#Variables)

</TabItem>
</Tabs>


## 4.2.6. Dynamic Scoping

Variables are resolved based on the call chain, not based on their position in the source code.

### Languages {#sprachen}

<Tabs availableTabs={['clojure', 'common-lisp', 'perl', 'wolfram-language']}>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Dynamic Scoping with special variables
(defvar *count* 42)  ; Special variable (dynamic)

(defun outer ()
  (let ((*count* 100))  ; Dynamically bound
    (inner)))

(defun inner ()
  (format t "~a~%" *count*))  ; Uses dynamically bound variable

(outer)  ; Outputs 100, not 42
```

**Special features:**
- `defvar` and `defparameter` create special variables
- `*` convention for special variables
- Dynamic binding with `let`

**Further reading:**
- [Common Lisp HyperSpec - Dynamic Variables](http://www.lispworks.com/documentation/HyperSpec/Body/03_abab.htm)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Dynamic Scoping with local
our $count = 42;  # Package variable

sub outer {
  local $count = 100;  # Dynamically bound
  inner();
}

sub inner {
  print "$count\n";  # Uses dynamically bound variable
}

outer();  # Outputs 100, not 42
```

**Special features:**
- `local` for dynamic binding
- `our` for package variables
- Dynamic scoping is available, but not by default

**Further reading:**
- [Perl Documentation - local](https://perldoc.perl.org/functions/local)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Dynamic Scoping with ^:dynamic and binding
(def ^:dynamic *greeting* "Hello")

(defn greet [name]
  (println (str *greeting* ", " name "!")))

(greet "Alice")  ; Hello, Alice!

(binding [*greeting* "Hallo"]
  (greet "Alice"))  ; Hallo, Alice! (dynamically overridden)

(greet "Alice")  ; Hello, Alice! (original value)
```

**Special features:**
- Dynamic vars are declared with `^:dynamic` metadata
- Convention: Earmuffs (`*name*`) for dynamic vars
- `binding` sets thread-local values
- Dynamic scoping is explicitly opt-in (default is lexical)

**Further reading:**
- [Clojure Documentation - Vars](https://clojure.org/reference/vars)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Dynamic Scoping with Block *)
x = 10;
f[] := x;
Block[{x = 20},
    f[]  (* 20 - dynamic scoping, uses the block value *)
]
f[]  (* 10 - outside the block, original again *)
```

**Special features:**
- `Block[]` uses dynamic scoping
- Temporary bindings apply to all called functions within the block

**Further reading:**
- [Wolfram Language Documentation - Block](https://reference.wolfram.com/language/ref/Block.html)

</TabItem>
</Tabs>

