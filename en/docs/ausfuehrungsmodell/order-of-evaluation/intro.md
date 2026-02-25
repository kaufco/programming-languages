---
slug: /ausfuehrungsmodell/order-of-evaluation
title: 17.2. Order of Evaluation
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 17.2. Order of Evaluation

Order of evaluation and side effects.

## 17.2.1. Evaluation Order

The order in which expressions and function arguments are evaluated. Most languages define a specific evaluation order (e.g., left-to-right), while some leave the order undefined.

### Languages {#languages}

<Tabs availableTabs={['ada', 'c', 'carbon', 'clojure', 'common-lisp', 'crystal', 'csharp', 'cpp', 'd', 'dart', 'eiffel', 'elixir', 'elm', 'erlang', 'fsharp', 'fortran', 'gleam', 'go', 'groovy', 'haskell', 'haxe', 'idris', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'lua', 'matlab', 'mercury', 'mojo', 'nim', 'objective-c', 'object-pascal', 'ocaml', 'octave', 'odin', 'perl', 'php', 'prolog', 'purescript', 'python', 'r', 'racket', 'roc', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'vbnet', 'v', 'wolfram-language', 'zig']}>
<TabItem value="ada" label="Ada">

```ada
function Add(x, y: Integer) return Integer is
begin
    return x + y;
end Add;

-- Call
result := Add(Compute(1), Compute(2));
-- Arguments are evaluated left-to-right
```

**Special features:**
- Arguments are evaluated left-to-right
- The order is guaranteed

**Further reading:**
- [Ada Reference Manual - Expression Evaluation](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-4-5.html)

</TabItem>
<TabItem value="c" label="C">

```c
int add(int x, int y) {
    return x + y;
}

// Call
int result = add(compute(1), compute(2));
// The order of argument evaluation is undefined
```

**Special features:**
- The order of argument evaluation is undefined
- Compilers can optimize the order

**Further reading:**
- [C Standard - Expression Evaluation](https://www.open-std.org/jtc1/sc22/wg14/www/docs/n1570.pdf)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
fn Add(x: i32, y: i32) -> i32 {
    return x + y;
}

// Call
var result: i32 = Add(Compute(1), Compute(2));
// The order of argument evaluation is defined (left-to-right)
```

**Special features:**
- Carbon aims to have no undefined behavior
- The order of argument evaluation is defined (left-to-right)
- Unlike C++, Carbon deliberately avoids unspecified evaluation order
- Experimental language, syntax may still change

**Further reading:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>

<TabItem value="clojure" label="Clojure">

```clojure
(defn compute [x]
  (println (str "Computing: " x))
  (* x 10))

(defn add [x y]
  (+ x y))

;; Arguments are evaluated left-to-right
(def result (add (compute 1) (compute 2)))
;; Output: Computing: 1, then Computing: 2
;; result = 30
```

**Special features:**
- Arguments are evaluated left-to-right
- The order is guaranteed

**Further reading:**
- [Clojure Documentation - Evaluation](https://clojure.org/reference/evaluation)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
(defun add (x y)
  (+ x y))

;; Call
(setf result (add (compute 1) (compute 2)))
;; Arguments are evaluated left-to-right
```

**Special features:**
- Arguments are evaluated left-to-right
- The order is guaranteed

**Further reading:**
- [Common Lisp HyperSpec - Function Calls](http://www.lispworks.com/documentation/HyperSpec/Body/03_ababc.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
def add(x : Int32, y : Int32) : Int32
  x + y
end

# Call
result = add(compute(1), compute(2))
# Arguments are evaluated left-to-right
```

**Special features:**
- Arguments are evaluated left-to-right
- The order is guaranteed

**Further reading:**
- [Crystal Documentation - Methods](https://crystal-lang.org/reference/1.11/syntax_and_semantics/methods_and_procs.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
int Add(int x, int y) {
    return x + y;
}

// Call
int result = Add(Compute(1), Compute(2));
// Arguments are evaluated left-to-right
```

**Special features:**
- Arguments are evaluated left-to-right
- The order is guaranteed

**Further reading:**
- [Microsoft C# Documentation - Expression Evaluation](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/expressions)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
int add(int x, int y) {
    return x + y;
}

// Call
int result = add(compute(1), compute(2));
// The order of argument evaluation is undefined
```

**Special features:**
- The order of argument evaluation is undefined
- Compilers can optimize the order

**Further reading:**
- [cppreference.com - Expression Evaluation](https://en.cppreference.com/w/cpp/language/eval_order)

</TabItem>
<TabItem value="d" label="D">

```d
int add(int x, int y) {
    return x + y;
}

// Call
int result = add(compute(1), compute(2));
// The order of argument evaluation is undefined
```

**Special features:**
- The order of argument evaluation is undefined
- Similar to C++

**Further reading:**
- [D Language Documentation - Expression Evaluation](https://dlang.org/spec/expression.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
int add(int x, int y) {
  return x + y;
}

// Call
int result = add(compute(1), compute(2));
// Arguments are evaluated left-to-right
```

**Special features:**
- Arguments are evaluated left-to-right
- The order is guaranteed

**Further reading:**
- [Dart Documentation - Functions](https://dart.dev/language/functions)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
add (x, y: INTEGER): INTEGER
    do
        Result := x + y
    end

-- Call
result := add(compute(1), compute(2))
-- Arguments are evaluated left-to-right
```

**Special features:**
- Arguments are evaluated left-to-right
- The order is guaranteed

**Further reading:**
- [Eiffel Documentation - Expression Evaluation](https://www.eiffel.org/doc/eiffel/Expressions)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
def add(x, y) do
  x + y
end

# Call
result = add(compute(1), compute(2))
# Arguments are evaluated left-to-right
```

**Special features:**
- Arguments are evaluated left-to-right
- The order is guaranteed

**Further reading:**
- [Elixir Documentation - Functions](https://elixir-lang.org/getting-started/modules-and-functions.html)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
add : Int -> Int -> Int
add x y = x + y

-- Call
result = add (compute 1) (compute 2)
-- Arguments are evaluated left-to-right
```

**Special features:**
- Arguments are evaluated left-to-right
- The order is guaranteed

**Further reading:**
- [Elm Documentation - Functions](https://guide.elm-lang.org/core_language.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
add(X, Y) ->
    X + Y.

%% Call
Result = add(compute(1), compute(2)).
%% Arguments are evaluated left-to-right
```

**Special features:**
- Arguments are evaluated left-to-right
- The order is guaranteed

**Further reading:**
- [Erlang Documentation - Functions](https://www.erlang.org/doc/reference_manual/functions.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
let add x y = x + y

// Call
let result = add (compute 1) (compute 2)
// Arguments are evaluated left-to-right
```

**Special features:**
- Arguments are evaluated left-to-right
- The order is guaranteed

**Further reading:**
- [F# Documentation - Functions](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/functions/)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
function add(x, y) result(res)
    integer, intent(in) :: x, y
    integer :: res
    res = x + y
end function add

! Call
result = add(compute(1), compute(2))
! The order of argument evaluation is undefined
```

**Special features:**
- The order of argument evaluation is undefined
- Compilers can optimize the order

**Further reading:**
- [Fortran Standard - Expression Evaluation](https://gcc.gnu.org/onlinedocs/gfortran/Argument-passing.html)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
pub fn add(x: Int, y: Int) -> Int {
  x + y
}

// Call
let result = add(compute(1), compute(2))
// Arguments are evaluated left-to-right
```

**Special features:**
- Arguments are evaluated left-to-right
- The order is guaranteed

**Further reading:**
- [Gleam Documentation - Functions](https://gleam.run/documentation/)

</TabItem>
<TabItem value="go" label="Go">

```go
func add(x, y int) int {
    return x + y
}

// Call
result := add(compute(1), compute(2))
// The order of argument evaluation is undefined
```

**Special features:**
- The order of argument evaluation is undefined
- Compilers can optimize the order

**Further reading:**
- [Go Documentation - Expression Evaluation](https://go.dev/ref/spec#Order_of_evaluation)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
def add(x, y) {
    x + y
}

// Call
def result = add(compute(1), compute(2))
// Arguments are evaluated left-to-right
```

**Special features:**
- Arguments are evaluated left-to-right
- The order is guaranteed

**Further reading:**
- [Groovy Documentation - Methods](https://groovy-lang.org/documentation.html)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
add :: Int -> Int -> Int
add x y = x + y

compute :: Int -> Int
compute n = n * 2

-- Call
result = add (compute 1) (compute 2)
-- Evaluation order depends on demand (Lazy Evaluation)
```

**Special features:**
- Haskell uses Lazy Evaluation: arguments are only evaluated when needed
- The evaluation order is **not** guaranteed for pure expressions
- In the IO monad, the order is defined by monadic sequencing
- GHC can change the evaluation order through optimizations

**Further reading:**
- [Haskell Wiki - Lazy Evaluation](https://wiki.haskell.org/Lazy_evaluation)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
function add(x: Int, y: Int): Int {
    return x + y;
}

// Call
var result = add(compute(1), compute(2));
// The order of argument evaluation is undefined
```

**Special features:**
- The order of argument evaluation is undefined
- Depends on the target compiler

**Further reading:**
- [Haxe Documentation - Functions](https://haxe.org/manual/expression-function.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
add : Int -> Int -> Int
add x y = x + y

compute : Int -> Int
compute x = x * 2

-- Call
result : Int
result = add (compute 1) (compute 2)
-- Arguments are evaluated left-to-right
```

**Special features:**
- Arguments are evaluated left-to-right
- The order is guaranteed

**Further reading:**
- [Idris 2 Documentation - Types and Functions](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html)

</TabItem>
<TabItem value="java" label="Java">

```java
int add(int x, int y) {
    return x + y;
}

// Call
int result = add(compute(1), compute(2));
// Arguments are evaluated left-to-right
```

**Special features:**
- Arguments are evaluated left-to-right
- The order is guaranteed

**Further reading:**
- [Oracle Java Documentation - Expression Evaluation](https://docs.oracle.com/javase/specs/jls/se17/html/jls-15.html#jls-15.7)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
function add(x, y) {
    return x + y;
}

// Call
let result = add(compute(1), compute(2));
// Arguments are evaluated left-to-right
```

**Special features:**
- Arguments are evaluated left-to-right
- The order is guaranteed

**Further reading:**
- [MDN Web Docs - Expression Evaluation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
function add(x, y)
    x + y
end

# Call
result = add(compute(1), compute(2))
# Arguments are evaluated left-to-right
```

**Special features:**
- Arguments are evaluated left-to-right
- The order is guaranteed

**Further reading:**
- [Julia Documentation - Functions](https://docs.julialang.org/en/v1/manual/functions/)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
// Strict left-to-right evaluation
fun add(x : int, y : int) : int
  x + y

fun compute(n : int) : int
  println("Computing " ++ n.show)
  n * 10

fun main()
  val result = add(compute(1), compute(2))
  // Outputs: "Computing 1", then "Computing 2"
  println(result.show)
```

**Special features:**
- Strict left-to-right evaluation of all arguments
- Evaluation order is guaranteed and deterministic
- Effect system tracks side effects, making the order type-safe

**Further reading:**
- [Koka Documentation - Functions](https://koka-lang.github.io/koka/doc/book.html#sec-basics)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
fun add(x: Int, y: Int): Int {
    return x + y
}

// Call
val result = add(compute(1), compute(2))
// Arguments are evaluated left-to-right
```

**Special features:**
- Arguments are evaluated left-to-right
- The order is guaranteed

**Further reading:**
- [Kotlin Documentation - Functions](https://kotlinlang.org/docs/functions.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
def add (x y : Nat) : Nat := x + y

-- Arguments are evaluated left-to-right (eager)
#eval add (1 + 2) (3 + 4)  -- 10
-- First (1+2)=3, then (3+4)=7, then add 3 7 = 10
```

**Special features:**
- Lean 4 is strict: arguments are evaluated left-to-right, fully evaluated.
- The evaluation order is determined and guaranteed.
- In `do` notation, expressions are evaluated sequentially.

**Further reading:**
- [Lean 4 Documentation - Functions](https://lean-lang.org/lean4/doc/functions.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
function add(x, y)
    return x + y
end

-- Call
local result = add(compute(1), compute(2))
-- Arguments are evaluated left-to-right
```

**Special features:**
- Arguments are evaluated left-to-right
- The order is guaranteed

**Further reading:**
- [Lua Documentation - Functions](https://www.lua.org/manual/5.4/manual.html#3.4.11)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
function res = add(x, y)
    res = x + y;
end

% Call
result = add(compute(1), compute(2));
% The order of argument evaluation is undefined
```

**Special features:**
- The order of argument evaluation is undefined
- Compilers can optimize the order

**Further reading:**
- [MATLAB Documentation - Functions](https://www.mathworks.com/help/matlab/ref/function.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
:- module eval_order.
:- interface.
:- import_module io.
:- pred main(io::di, io::uo) is det.
:- implementation.
:- import_module int, string.

:- func compute(int) = int.
compute(X) = X * 10.

:- func add(int, int) = int.
add(X, Y) = X + Y.

main(!IO) :-
    % Goals in a conjunction are evaluated left-to-right
    Result = add(compute(1), compute(2)),
    io.format("Result: %d\n", [i(Result)], !IO).
```

**Special features:**
- Goals in a conjunction are strictly evaluated from left to right
- Function arguments are evaluated before the call (strict evaluation)
- The compiler can optimize the order for pure predicates without observable differences
- The mode system determines data flow and influences the allowed evaluation order

**Further reading:**
- [Mercury Language Reference - Semantics](https://www.mercurylang.org/information/doc-release/mercury_ref/Semantics.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
fn add(x: Int, y: Int) -> Int:
    return x + y

# Call
var result = add(compute(1), compute(2))
# Die Reihenfolge der Argumentauswertung ist undefiniert
```

**Special features:**
- The order of argument evaluation is undefined
- Similar to Python

**Further reading:**
- [Mojo Documentation - Functions](https://docs.modular.com/mojo/manual/functions/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
proc add(x, y: int): int =
    x + y

# Call
var result = add(compute(1), compute(2))
# Die Reihenfolge der Argumentauswertung ist undefiniert
```

**Special features:**
- The order of argument evaluation is undefined
- Compilers can optimize the order

**Further reading:**
- [Nim Documentation - Procedures](https://nim-lang.org/docs/manual.html#procedures)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
- (int)add:(int)x withY:(int)y {
    return x + y;
}

// Call
int result = [self add:compute(1) withY:compute(2)];
// The order of argument evaluation is undefined
```

**Special features:**
- The order of argument evaluation is undefined
- Compilers can optimize the order

**Further reading:**
- [Objective-C Documentation - Methods](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/DefiningClasses/DefiningClasses.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
function Add(x, y: Integer): Integer;
begin
    Result := x + y;
end;

// Call
var
    result: Integer;
begin
    result := Add(Compute(1), Compute(2));
    // Arguments are evaluated left-to-right
end;
```

**Special features:**
- Arguments are evaluated left-to-right
- The order is guaranteed

**Further reading:**
- [Object Pascal Documentation - Procedures](https://www.freepascal.org/docs-html/ref/refsu68.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
let add x y = x + y

(* Call *)
let result = add (compute 1) (compute 2)
(* Arguments are evaluated left-to-right *)
```

**Special features:**
- Arguments are evaluated left-to-right
- The order is guaranteed

**Further reading:**
- [OCaml Documentation - Functions](https://ocaml.org/docs/first-hour)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
function res = add(x, y)
    res = x + y;
end

% Call
result = add(compute(1), compute(2));
% The order of argument evaluation is undefined
```

**Special features:**
- The order of argument evaluation is undefined
- Similar to MATLAB

**Further reading:**
- [Octave Documentation - Functions](https://octave.org/doc/v8.1.0/Functions-and-Scripts.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
add :: proc(x, y: int) -> int {
    return x + y
}

// Call
result := add(compute(1), compute(2))
// The order of argument evaluation is undefined
```

**Special features:**
- The order of argument evaluation is undefined
- Similar to C

**Further reading:**
- [Odin Documentation - Procedures](https://odin-lang.org/docs/overview/#procedures)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
sub add {
    my ($x, $y) = @_;
    return $x + $y;
}

# Call
my $result = add(compute(1), compute(2));
# Arguments are evaluated left-to-right
```

**Special features:**
- Arguments are evaluated left-to-right
- The order is guaranteed

**Further reading:**
- [Perl Documentation - Functions](https://perldoc.perl.org/perlsub)

</TabItem>
<TabItem value="php" label="PHP">

```php
function add($x, $y) {
    return $x + $y;
}

// Call
$result = add(compute(1), compute(2));
// Arguments are evaluated left-to-right
```

**Special features:**
- Arguments are evaluated left-to-right
- The order is guaranteed

**Further reading:**
- [PHP Documentation - Functions](https://www.php.net/manual/en/functions.user-defined.php)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
add :: Int -> Int -> Int
add x y = x + y

-- Call
result = add (compute 1) (compute 2)
-- Arguments are evaluated left-to-right
```

**Special features:**
- Arguments are evaluated left-to-right
- The order is guaranteed

**Further reading:**
- [PureScript Documentation - Functions](https://www.purescript.org/documentation/)

</TabItem>
<TabItem value="python" label="Python">

```python
def add(x, y):
    return x + y

# Call
result = add(compute(1), compute(2))
# Arguments are evaluated left-to-right
```

**Special features:**
- Arguments are evaluated left-to-right
- The order is guaranteed

**Further reading:**
- [Python Documentation - Expression Evaluation](https://docs.python.org/3/reference/expressions.html#evaluation-order)

</TabItem>
<TabItem value="r" label="R">

```r
add <- function(x, y) {
    x + y
}

# Call
result <- add(compute(1), compute(2))
# Arguments are evaluated left-to-right
```

**Special features:**
- Arguments are evaluated left-to-right
- The order is guaranteed
- R uses lazy evaluation for function arguments

**Further reading:**
- [R Documentation - Functions](https://cran.r-project.org/doc/manuals/r-release/R-lang.html#Function-objects)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
(define (add x y)
  (+ x y))

;; Call
(define result (add (compute 1) (compute 2)))
;; Arguments are evaluated left-to-right
```

**Special features:**
- Arguments are evaluated left-to-right
- The order is guaranteed

**Further reading:**
- [Racket Documentation - Functions](https://docs.racket-lang.org/guide/define.html)

</TabItem>
<TabItem value="roc" label="Roc">

```roc
add : I64, I64 -> I64
add = \x, y -> x + y

# Arguments are evaluated left-to-right
result = add (compute 1) (compute 2)
```

**Special features:**
- Arguments are evaluated left-to-right
- Strikte Evaluation (eager)
- The order is guaranteed

**Further reading:**
- [Roc Documentation](https://www.roc-lang.org/tutorial)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
def add(x, y)
    x + y
end

# Call
result = add(compute(1), compute(2))
# Arguments are evaluated left-to-right
```

**Special features:**
- Arguments are evaluated left-to-right
- The order is guaranteed

**Further reading:**
- [Ruby Documentation - Methods](https://docs.ruby-lang.org/en/master/syntax/methods_rdoc.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
fn add(x: i32, y: i32) -> i32 {
    x + y
}

// Call
let result = add(compute(1), compute(2));
// The order of argument evaluation is undefined
```

**Special features:**
- The order of argument evaluation is undefined
- Compilers can optimize the order

**Further reading:**
- [Rust Documentation - Expression Evaluation](https://doc.rust-lang.org/reference/expressions.html#evaluation-order-of-operands)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
def add(x: Int, y: Int): Int = x + y

// Call
val result = add(compute(1), compute(2))
// Arguments are evaluated left-to-right
```

**Special features:**
- Arguments are evaluated left-to-right
- The order is guaranteed

**Further reading:**
- [Scala Documentation - Functions](https://docs.scala-lang.org/tour/functions.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
(define (add x y)
  (+ x y))

;; Call
(define result (add (compute 1) (compute 2)))
;; Evaluation order of arguments is UNSPECIFIED (R7RS §4.1.3)
```

**Special features:**
- Evaluation order of operands is unspecified according to R7RS
- Implementation-dependent (some implementations use left-to-right)
- For guaranteed order: use `let*` or separate `define` expressions

**Further reading:**
- [R7RS Scheme Specification](https://small.r7rs.org/attachment/r7rs.pdf)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
func add(_ x: Int, _ y: Int) -> Int {
    return x + y
}

// Call
let result = add(compute(1), compute(2))
// Arguments are evaluated left-to-right
```

**Special features:**
- Arguments are evaluated left-to-right
- The order is guaranteed

**Further reading:**
- [Swift Documentation - Functions](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/functions/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
function add(x: number, y: number): number {
    return x + y;
}

// Call
let result = add(compute(1), compute(2));
// Arguments are evaluated left-to-right
```

**Special features:**
- Arguments are evaluated left-to-right
- The order is guaranteed

**Further reading:**
- [TypeScript Documentation - Functions](https://www.typescriptlang.org/docs/handbook/functions.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
Function Add(x As Integer, y As Integer) As Integer
    Return x + y
End Function

' Call
Dim result As Integer = Add(Compute(1), Compute(2))
' Argumente werden links-nach-rechts ausgewertet
```

**Special features:**
- Arguments are evaluated left-to-right
- The order is guaranteed

**Further reading:**
- [Microsoft VB.NET Documentation - Procedures](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/procedures/)

</TabItem>
<TabItem value="v" label="V">

```v
fn add(x int, y int) int {
    return x + y
}

// Call
result := add(compute(1), compute(2))
// The order of argument evaluation is undefined
```

**Special features:**
- The order of argument evaluation is undefined
- Similar to C

**Further reading:**
- [V Documentation - Functions](https://github.com/vlang/v/blob/master/doc/docs.md#functions)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```wolfram
add[x_, y_] := x + y

(* Call *)
result = add[compute[1], compute[2]]
(* Arguments are evaluated left-to-right *)
```

**Special features:**
- Arguments are evaluated left-to-right
- The order is guaranteed
- Wolfram Language uses symbolic evaluation

**Further reading:**
- [Wolfram Language Documentation - Functions](https://reference.wolfram.com/language/guide/Functions.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
const std = @import("std");

fn add(x: i32, y: i32) i32 {
    return x + y;
}

fn compute(x: i32) i32 {
    std.debug.print("compute({})\n", .{x});
    return x * 2;
}

const result = add(compute(1), compute(2));
// Evaluation order: compute(1), then compute(2) (left-to-right)
```

**Special features:**
- Function arguments are evaluated from left to right
- Zig has a defined evaluation order (unlike C)
- Side effects in arguments have a predictable order

**Further reading:**
- [Zig Documentation - Operators](https://ziglang.org/documentation/master/#Operators)

</TabItem>

<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Standard evaluation order *)
(* 1. Head is evaluated *)
(* 2. Arguments from left to right *)
(* 3. Function rules are applied *)

f[x_] := x + 1
g[x_] := x * 2

result = f[g[3]]  (* g[3] -> 6, dann f[6] -> 7 *)
```

**Special features:**
- Wolfram Language has a defined evaluation order (Standard Evaluation Procedure)
- `HoldAll`, `HoldFirst`, `HoldRest` change the evaluation order
- Expressions are evaluated recursively from inside to outside

**Further reading:**
- [Wolfram Language Documentation - Standard Evaluation](https://reference.wolfram.com/language/tutorial/EvaluationOfExpressions.html)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Prolog wertet Goals von links nach rechts aus
add(X, Y, Result) :-
    Result is X + Y.

compute(X, Result) :-
    write('Computing: '), write(X), nl,
    Result is X * 10.

% Call
?- compute(1, A), compute(2, B), add(A, B, Result).
% Ausgabe: Computing: 1, dann Computing: 2
% A = 10, B = 20, Result = 30
```

**Special features:**
- Goals in einer Klausel werden strikt von links nach rechts ausgewertet
- Argumente von Prädikaten werden durch Unifikation gebunden (nicht „ausgewertet")
- Arithmetische Ausdrücke werden nur durch `is/2` explizit ausgewertet
- Backtracking follows depth-first search order

**Further reading:**
- [SWI-Prolog Documentation - Control Flow](https://www.swi-prolog.org/pldoc/man?section=control)

</TabItem>
</Tabs>


## 17.2.2. Side Effects

Side effects are changes to the program state outside the local scope of a function, such as modifying global variables, writing to files, or outputting data.

### Languages {#languages}

<Tabs availableTabs={['ada', 'c', 'carbon', 'clojure', 'common-lisp', 'crystal', 'csharp', 'cpp', 'd', 'dart', 'eiffel', 'elixir', 'elm', 'erlang', 'fsharp', 'fortran', 'gleam', 'go', 'groovy', 'haskell', 'haxe', 'idris', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'lua', 'matlab', 'mercury', 'mojo', 'nim', 'objective-c', 'object-pascal', 'ocaml', 'octave', 'odin', 'perl', 'php', 'prolog', 'purescript', 'python', 'r', 'racket', 'roc', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'vbnet', 'v', 'wolfram-language', 'zig']}>
<TabItem value="ada" label="Ada">

```ada
Global_Var : Integer := 0;

procedure Modify_Global is
begin
    Global_Var := Global_Var + 1;
end Modify_Global;
```

**Special features:**
- Side effects are allowed and common
- Global variables can be modified

**Further reading:**
- [Ada Reference Manual - Variables](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-3-3.html)

</TabItem>
<TabItem value="c" label="C">

```c
int global_var = 0;

void modify_global() {
    global_var++;
}
```

**Special features:**
- Side effects are allowed and common
- Global variables can be modified

**Further reading:**
- [C Standard - Variables](https://www.open-std.org/jtc1/sc22/wg14/www/docs/n1570.pdf)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
var global_var: i32 = 0;

fn ModifyGlobal() {
    global_var++;
}
```

**Special features:**
- Side effects are allowed and common
- Global variables can be modified

**Further reading:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
(def global-var (atom 0))

(defn modify-global []
  (swap! global-var inc))
```

**Special features:**
- Side effects are controlled through `atom`, `ref`, `agent`
- Functional programming is preferred, but side effects are possible

**Further reading:**
- [Clojure Documentation - State](https://clojure.org/reference/atoms)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
(defvar *global-var* 0)

(defun modify-global ()
  (incf *global-var*))
```

**Special features:**
- Side effects are allowed and common
- Global variables are marked with `*`

**Further reading:**
- [Common Lisp HyperSpec - Variables](http://www.lispworks.com/documentation/HyperSpec/Body/03_aa.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
$global_var = 0

def modify_global
  $global_var += 1
end
```

**Special features:**
- Side effects are allowed and common
- Globale Variablen werden mit `$` markiert

**Further reading:**
- [Crystal Documentation - Variables](https://crystal-lang.org/reference/1.11/syntax_and_semantics/assignment.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
static int globalVar = 0;

static void ModifyGlobal() {
    globalVar++;
}
```

**Special features:**
- Side effects are allowed and common
- Static variables can be used as global variables

**Further reading:**
- [Microsoft C# Documentation - Variables](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/variables)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
int global_var = 0;

void modify_global() {
    global_var++;
}
```

**Special features:**
- Side effects are allowed and common
- Global variables can be modified

**Further reading:**
- [cppreference.com - Variables](https://en.cppreference.com/w/cpp/language/variable)

</TabItem>
<TabItem value="d" label="D">

```d
int globalVar = 0;

void modifyGlobal() {
    globalVar++;
}
```

**Special features:**
- Side effects are allowed and common
- Global variables can be modified

**Further reading:**
- [D Language Documentation - Variables](https://dlang.org/spec/variable.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
int globalVar = 0;

void modifyGlobal() {
  globalVar++;
}
```

**Special features:**
- Side effects are allowed and common
- Global variables can be modified

**Further reading:**
- [Dart Documentation - Variables](https://dart.dev/language/variables)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
global_var: INTEGER
    once
        Result := 0
    end

modify_global
    do
        global_var := global_var + 1
    end
```

**Special features:**
- Side effects are allowed and common
- Global variables can be modified

**Further reading:**
- [Eiffel Documentation - Variables](https://www.eiffel.org/doc/eiffel/Variables)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
defmodule Global do
  def modify_global do
    Agent.update(:global_var, &(&1 + 1))
  end
end
```

**Special features:**
- Side effects are controlled through `Agent`, `GenServer`
- Functional programming is preferred, but side effects are possible

**Further reading:**
- [Elixir Documentation - Agents](https://elixir-lang.org/getting-started/mix-otp/agent.html)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Elm does not allow side effects in pure functions
-- Side effects are handled through Commands and Subscriptions
```

**Special features:**
- Pure functions have no side effects
- Side effects are handled through `Cmd` and `Sub`
- Functional programming without direct side effects

**Further reading:**
- [Elm Documentation - Effects](https://guide.elm-lang.org/effects/)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
-module(global).
-export([modify_global/0]).

modify_global() ->
    put(global_var, get(global_var) + 1).
```

**Special features:**
- Side effects are controlled through `put`/`get` or `ets`
- Functional programming is preferred, but side effects are possible

**Further reading:**
- [Erlang Documentation - Process Dictionary](https://www.erlang.org/doc/reference_manual/processes.html#process-dictionary)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
let mutable globalVar = 0

let modifyGlobal() =
    globalVar <- globalVar + 1
```

**Special features:**
- Side effects are allowed, but `mutable` is required
- Functional programming is preferred, but side effects are possible

**Further reading:**
- [F# Documentation - Mutable Variables](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/values/)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
module global_module
    integer :: global_var = 0
end module global_module

subroutine modify_global()
    use global_module
    global_var = global_var + 1
end subroutine modify_global
```

**Special features:**
- Side effects are allowed and common
- Module variables can be used as global variables

**Further reading:**
- [Fortran Standard - Variables](https://gcc.gnu.org/onlinedocs/gfortran/Variables.html)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// Gleam does not allow side effects in pure functions
// Side effects are handled through types like `Result`, `Task`
```

**Special features:**
- Pure functions have no side effects
- Side effects are controlled through types
- Functional programming without direct side effects

**Further reading:**
- [Gleam Documentation - Effects](https://gleam.run/documentation/)

</TabItem>
<TabItem value="go" label="Go">

```go
var globalVar int = 0

func modifyGlobal() {
    globalVar++
}
```

**Special features:**
- Side effects are allowed and common
- Global variables can be modified

**Further reading:**
- [Go Documentation - Variables](https://go.dev/ref/spec#Variables)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
@Field static int globalVar = 0

def modifyGlobal() {
    globalVar++
}
```

**Special features:**
- Side effects are allowed and common
- Static variables can be used as global variables

**Further reading:**
- [Groovy Documentation - Variables](https://groovy-lang.org/documentation.html)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
import Data.IORef

modifyGlobal :: IO ()
modifyGlobal = do
    ref <- newIORef 0
    modifyIORef ref (+1)
```

**Special features:**
- Pure functions have no side effects
- Side effects are handled through `IO`, `ST`, `IORef`
- Functional programming without direct side effects

**Further reading:**
- [Haskell Documentation - IO](https://www.haskell.org/tutorial/io.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
static var globalVar: Int = 0;

static function modifyGlobal(): Void {
    globalVar++;
}
```

**Special features:**
- Side effects are allowed and common
- Static variables can be used as global variables

**Further reading:**
- [Haxe Documentation - Variables](https://haxe.org/manual/expression-var.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Idris does not allow side effects in pure functions
-- Side effects are handled through an effects system
```

**Special features:**
- Pure functions have no side effects
- Side effects are controlled through an effects system
- Functional programming without direct side effects

**Further reading:**
- [Idris Documentation - Effects](https://idris2.readthedocs.io/en/latest/tutorial/effects.html)

</TabItem>
<TabItem value="java" label="Java">

```java
static int globalVar = 0;

static void modifyGlobal() {
    globalVar++;
}
```

**Special features:**
- Side effects are allowed and common
- Static variables can be used as global variables

**Further reading:**
- [Oracle Java Documentation - Variables](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/variables.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
let globalVar = 0;

function modifyGlobal() {
    globalVar++;
}
```

**Special features:**
- Side effects are allowed and common
- Global variables can be modified

**Further reading:**
- [MDN Web Docs - Variables](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#declarations)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
global global_var = 0

function modify_global()
    global global_var
    global_var += 1
end
```

**Special features:**
- Side effects are allowed and common
- `global` keyword is required to modify global variables

**Further reading:**
- [Julia Documentation - Variables](https://docs.julialang.org/en/v1/manual/variables-and-scoping/)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
// Side effects are tracked in the type system
// Pure function (no effects)
fun add(x : int, y : int) : int
  x + y

// Function with console effect
fun greet(name : string) : console ()
  println("Hello, " ++ name)

// Function with state effect
fun counter() : st<global> int
  var count := 0
  count := count + 1
  count

// Effects are visible in the type:
// add    : (int, int) -> int           (pure)
// greet  : (string) -> console ()      (console effect)
// counter: () -> st<global> int        (state effect)
```

**Special features:**
- **Unique feature**: All side effects are tracked in the type system
- Pure functions have no effect annotation
- Effects like `console`, `exn`, `div`, `st` are explicitly specified in the function type
- Compiler enforces correct effect declaration

**Further reading:**
- [Koka Documentation - Effect Types](https://koka-lang.github.io/koka/doc/book.html#sec-effect-types)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
var globalVar = 0

fun modifyGlobal() {
    globalVar++
}
```

**Special features:**
- Side effects are allowed and common
- Top-level variables can be used as global variables

**Further reading:**
- [Kotlin Documentation - Variables](https://kotlinlang.org/docs/basic-syntax.html#variables)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Pure function: no side effects
def add (x y : Nat) : Nat := x + y

-- Side effects only in IO monad
def greet (name : String) : IO Unit :=
  IO.println s!"Hello, {name}!"

-- Side effects visible in the type:
-- add   : Nat → Nat → Nat         (pure)
-- greet : String → IO Unit        (IO effect)
```

**Special features:**
- Side effects are tracked through the `IO` monad in the type system.
- Pure functions have no monadic return type.
- The compiler enforces that side effects only occur in the `IO` monad.
- `StateM`, `ReaderM`, `ExceptT` track additional effects.

**Further reading:**
- [Lean 4 Documentation - IO Monad](https://lean-lang.org/lean4/doc/io.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
global_var = 0

function modify_global()
    global_var = global_var + 1
end
```

**Special features:**
- Side effects are allowed and common
- Global variables can be modified

**Further reading:**
- [Lua Documentation - Variables](https://www.lua.org/manual/5.4/manual.html#2.3)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
global global_var
global_var = 0;

function modify_global()
    global global_var
    global_var = global_var + 1;
end
```

**Special features:**
- Side effects are allowed and common
- `global` keyword is required to use global variables

**Further reading:**
- [MATLAB Documentation - Variables](https://www.mathworks.com/help/matlab/matlab_prog/share-data-between-workspaces.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
:- module side_effects.
:- interface.
:- import_module io.
:- pred main(io::di, io::uo) is det.
:- implementation.
:- import_module int, string.

% Pure function: no side effects possible
:- func add(int, int) = int.
add(X, Y) = X + Y.

% Side effects only through I/O state threading
:- pred greet(string::in, io::di, io::uo) is det.
greet(Name, !IO) :-
    io.format("Hello, %s!\n", [s(Name)], !IO).

main(!IO) :-
    % I/O side effects are sequenced through !IO
    greet("World", !IO),
    io.write_string("Result: ", !IO),
    io.write_int(add(1, 2), !IO),
    io.nl(!IO).
```

**Special features:**
- Mercury is declaratively pure: side effects are only possible through I/O state threading (`!IO`)
- `io` modes (`di`/`uo`) enforce unambiguous sequencing of side effects
- Pure functions/predicates cannot have side effects – the compiler checks this
- Global mutable state is not present in pure Mercury

**Further reading:**
- [Mercury Language Reference - Purity](https://www.mercurylang.org/information/doc-release/mercury_ref/Purity.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
var global_var: Int = 0

fn modify_global():
    global_var += 1
```

**Special features:**
- Side effects are allowed and common
- Global variables can be modified

**Further reading:**
- [Mojo Documentation - Variables](https://docs.modular.com/mojo/manual/variables/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
var globalVar = 0

proc modifyGlobal() =
    globalVar += 1
```

**Special features:**
- Side effects are allowed and common
- Global variables can be modified

**Further reading:**
- [Nim Documentation - Variables](https://nim-lang.org/docs/manual.html#variables)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
static int globalVar = 0;

- (void)modifyGlobal {
    globalVar++;
}
```

**Special features:**
- Side effects are allowed and common
- Static variables can be used as global variables

**Further reading:**
- [Objective-C Documentation - Variables](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/DefiningClasses/DefiningClasses.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
var
    GlobalVar: Integer = 0;

procedure ModifyGlobal;
begin
    GlobalVar := GlobalVar + 1;
end;
```

**Special features:**
- Side effects are allowed and common
- Global variables can be modified

**Further reading:**
- [Object Pascal Documentation - Variables](https://www.freepascal.org/docs-html/ref/refsu4.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
let global_var = ref 0

let modify_global () =
    global_var := !global_var + 1
```

**Special features:**
- Side Effects werden durch `ref` kontrolliert
- Funktionale Programmierung bevorzugt, aber Side Effects sind möglich

**Further reading:**
- [OCaml Documentation - References](https://ocaml.org/docs/first-hour)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
global global_var;
global_var = 0;

function modify_global()
    global global_var;
    global_var = global_var + 1;
end
```

**Special features:**
- Side effects are allowed and common
- `global` keyword is required to use global variables

**Further reading:**
- [Octave Documentation - Variables](https://octave.org/doc/v8.1.0/Variables.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
global_var : int : 0

modify_global :: proc() {
    global_var += 1
}
```

**Special features:**
- Side effects are allowed and common
- Global variables can be modified

**Further reading:**
- [Odin Documentation - Variables](https://odin-lang.org/docs/overview/#variables)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
our $global_var = 0;

sub modify_global {
    $global_var++;
}
```

**Special features:**
- Side effects are allowed and common
- `our` keyword declares global variables

**Further reading:**
- [Perl Documentation - Variables](https://perldoc.perl.org/perlvar)

</TabItem>
<TabItem value="php" label="PHP">

```php
$globalVar = 0;

function modifyGlobal() {
    global $globalVar;
    $globalVar++;
}
```

**Special features:**
- Side effects are allowed and common
- `global` keyword is required to use global variables

**Further reading:**
- [PHP Documentation - Variables](https://www.php.net/manual/en/language.variables.scope.php)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- PureScript does not allow side effects in pure functions
-- Side effects are handled through an effects system
```

**Special features:**
- Pure functions have no side effects
- Side effects are controlled through an effects system
- Functional programming without direct side effects

**Further reading:**
- [PureScript Documentation - Effects](https://www.purescript.org/documentation/)

</TabItem>
<TabItem value="python" label="Python">

```python
global_var = 0

def modify_global():
    global global_var
    global_var += 1
```

**Special features:**
- Side effects are allowed and common
- `global` keyword is required to modify global variables

**Further reading:**
- [Python Documentation - Variables](https://docs.python.org/3/tutorial/classes.html#python-scopes-and-namespaces)

</TabItem>
<TabItem value="r" label="R">

```r
global_var <<- 0

modify_global <- function() {
    global_var <<- global_var + 1
}
```

**Special features:**
- Side effects are allowed and common
- `<<-` operator assigns to global variables

**Further reading:**
- [R Documentation - Variables](https://cran.r-project.org/doc/manuals/r-release/R-lang.html#Scope)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
(define global-var 0)

(define (modify-global)
  (set! global-var (+ global-var 1)))
```

**Special features:**
- Side effects are controlled through `set!`
- Functional programming is preferred, but side effects are possible

**Further reading:**
- [Racket Documentation - Variables](https://docs.racket-lang.org/guide/assignment.html)

</TabItem>
<TabItem value="roc" label="Roc">

```roc
-- Roc does not allow side effects in pure functions
-- Side effects are handled through an effects system
```

**Special features:**
- Pure functions have no side effects
- Side effects are controlled through an effects system
- Functional programming without direct side effects

**Further reading:**
- [Roc Documentation - Effects](https://www.roc-lang.org/tutorial)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
$global_var = 0

def modify_global
    $global_var += 1
end
```

**Special features:**
- Side effects are allowed and common
- Globale Variablen werden mit `$` markiert

**Further reading:**
- [Ruby Documentation - Variables](https://docs.ruby-lang.org/en/master/syntax/variables_rdoc.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
static mut GLOBAL_VAR: i32 = 0;

unsafe fn modify_global() {
    GLOBAL_VAR += 1;
}
```

**Special features:**
- Side effects are allowed, but `unsafe` is required for global mutable variables
- Rust prefers ownership system over global variables

**Further reading:**
- [Rust Documentation - Static Variables](https://doc.rust-lang.org/book/ch19-01-unsafe-rust.html#accessing-or-modifying-a-mutable-static-variable)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
var globalVar = 0

def modifyGlobal(): Unit = {
    globalVar += 1
}
```

**Special features:**
- Side effects are allowed and common
- Top-level variables can be used as global variables

**Further reading:**
- [Scala Documentation - Variables](https://docs.scala-lang.org/tour/basics.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
(define global-var 0)

(define (modify-global)
  (set! global-var (+ global-var 1)))
```

**Special features:**
- Side effects are controlled by `set!`
- Functional programming preferred, but side effects are possible

**Further reading:**
- [Scheme Documentation - Variables](https://www.scheme.com/tspl4/objects.html#./objects:s246)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
var globalVar = 0

func modifyGlobal() {
    globalVar += 1
}
```

**Special features:**
- Side effects are allowed and common
- Top-level variables can be used as global variables

**Further reading:**
- [Swift Documentation - Variables](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/thebasics/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
let globalVar = 0;

function modifyGlobal(): void {
    globalVar++;
}
```

**Special features:**
- Side effects are allowed and common
- Global variables can be modified

**Further reading:**
- [TypeScript Documentation - Variables](https://www.typescriptlang.org/docs/handbook/variable-declarations.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
Module GlobalModule
    Public globalVar As Integer = 0
End Module

Sub ModifyGlobal()
    GlobalModule.globalVar += 1
End Sub
```

**Special features:**
- Side effects are allowed and common
- Module variables can be used as global variables

**Further reading:**
- [Microsoft VB.NET Documentation - Variables](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/variables/)

</TabItem>
<TabItem value="v" label="V">

```v
__global (
    global_var int
)

fn modify_global() {
    global_var++
}
```

**Special features:**
- Side effects are allowed and common
- `__global` block declares global variables

**Further reading:**
- [V Documentation - Variables](https://github.com/vlang/v/blob/master/doc/docs.md#variables)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```wolfram
globalVar = 0;

modifyGlobal[] := (globalVar = globalVar + 1)
```

**Special features:**
- Side effects are allowed and common
- Global variables can be modified

**Further reading:**
- [Wolfram Language Documentation - Variables](https://reference.wolfram.com/language/guide/VariablesAndFunctions.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
var global_var: i32 = 0;

fn modify_global() void {
    global_var += 1;
}
```

**Special features:**
- Side effects are allowed and common
- Global variables can be modified

**Further reading:**
- [Zig Documentation - Variables](https://ziglang.org/documentation/0.11.0/#Variables)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Side effects are allowed *)
counter = 0;
increment[] := (counter++; counter)

increment[]  (* 1 *)
increment[]  (* 2 *)
Print["Counter: ", counter]  (* Print is a side effect *)
```

**Special features:**
- Wolfram Language allows side effects (Print, Set, etc.)
- Global variables can be modified
- `CompoundExpression` (`;`) for sequences with side effects

**Further reading:**
- [Wolfram Language Documentation - CompoundExpression](https://reference.wolfram.com/language/ref/CompoundExpression.html)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Side effects via assert/retract and I/O
:- dynamic counter/1.
counter(0).

increment :-
    retract(counter(Old)),
    New is Old + 1,
    assert(counter(New)).

% Call
?- increment, increment, counter(X).
% X = 2
% write/1 and nl/0 are I/O side effects
?- write('Hello'), nl.
% Output: Hello
```

**Special features:**
- `assert/1` and `retract/1` modify the dynamic database (global state)
- `write/1`, `read/1`, `nl/0` are I/O side effects
- `set_prolog_flag/2` changes global interpreter settings
- Prolog is not referentially transparent due to side effects

**Further reading:**
- [SWI-Prolog Documentation - Database](https://www.swi-prolog.org/pldoc/man?section=dynpreds)

</TabItem>
</Tabs>

## 17.2.3. No Undefined Behavior

The language guarantees that all programs have defined behavior. There are no situations where program behavior is undefined.

### Languages {#sprachen}

<Tabs availableTabs={['ada', 'crystal', 'csharp', 'dart', 'elixir', 'elm', 'erlang', 'fsharp', 'gleam', 'go', 'groovy', 'haskell', 'idris', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'lua', 'mercury', 'mojo', 'nim', 'ocaml', 'prolog', 'purescript', 'python', 'r', 'racket', 'roc', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'v', 'vbnet', 'wolfram-language']}>
<TabItem value="ada" label="Ada">

```ada
function Safe_Divide(x, y: Integer) return Integer is
begin
    if y = 0 then
        raise Constraint_Error;
    end if;
    return x / y;
end Safe_Divide;
```

**Special features:**
- Ada guarantees defined behavior
- Exceptions are handled explicitly

**Further reading:**
- [Ada Reference Manual - Exceptions](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-11.html)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
def safe_divide(x : Int32, y : Int32) : Int32
  raise DivisionByZero.new if y == 0
  x / y
end
```

**Special features:**
- Crystal guarantees defined behavior
- Exceptions are handled explicitly

**Further reading:**
- [Crystal Documentation - Exceptions](https://crystal-lang.org/reference/1.11/syntax_and_semantics/exception_handling.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
int safeDivide(int x, int y) {
  if (y == 0) {
    throw Exception('Division by zero');
  }
  return x ~/ y;
}
```

**Special features:**
- Dart guarantees defined behavior
- Exceptions are handled explicitly

**Further reading:**
- [Dart Documentation - Exceptions](https://dart.dev/language/error-handling)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
def safe_divide(x, y) do
  case y do
    0 -> {:error, "Division by zero"}
    _ -> {:ok, div(x, y)}
  end
end
```

**Special features:**
- Elixir guarantees defined behavior
- Errors are handled via pattern matching

**Further reading:**
- [Elixir Documentation - Error Handling](https://elixir-lang.org/getting-started/try-catch-and-rescue.html)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
safeDivide : Int -> Int -> Result String Int
safeDivide x y =
  if y == 0 then
    Err "Division by zero"
  else
    Ok (x // y)
```

**Special features:**
- Elm guarantees defined behavior
- Errors are handled via `Result` type

**Further reading:**
- [Elm Documentation - Error Handling](https://guide.elm-lang.org/error_handling/)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
safe_divide(X, Y) ->
    case Y of
        0 -> {error, "Division by zero"};
        _ -> {ok, X div Y}
    end.
```

**Special features:**
- Erlang guarantees defined behavior
- Errors are handled via pattern matching

**Further reading:**
- [Erlang Documentation - Error Handling](https://www.erlang.org/doc/reference_manual/errors.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
let safeDivide x y =
    if y = 0 then
        Error "Division by zero"
    else
        Ok (x / y)
```

**Special features:**
- F# guarantees defined behavior
- Errors are handled via `Result` type

**Further reading:**
- [F# Documentation - Error Handling](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/results/)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
pub fn safe_divide(x: Int, y: Int) -> Result(Int, String) {
  case y {
    0 -> Error("Division by zero")
    _ -> Ok(x / y)
  }
}
```

**Special features:**
- Gleam guarantees defined behavior
- Errors are handled via `Result` type

**Further reading:**
- [Gleam Documentation - Error Handling](https://gleam.run/documentation/)

</TabItem>
<TabItem value="go" label="Go">

```go
func safeDivide(x, y int) (int, error) {
    if y == 0 {
        return 0, fmt.Errorf("division by zero")
    }
    return x / y, nil
}
```

**Special features:**
- Go guarantees defined behavior
- Errors are handled via return values

**Further reading:**
- [Go Documentation - Error Handling](https://go.dev/doc/effective_go#errors)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
def safeDivide(x, y) {
    if (y == 0) {
        throw new ArithmeticException("Division by zero")
    }
    return x / y
}
```

**Special features:**
- Groovy guarantees defined behavior
- Exceptions are handled explicitly

**Further reading:**
- [Groovy Documentation - Exceptions](https://groovy-lang.org/documentation.html)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
safeDivide :: Int -> Int -> Either String Int
safeDivide x y
    | y == 0 = Left "Division by zero"
    | otherwise = Right (x `div` y)
```

**Special features:**
- Haskell guarantees defined behavior
- Errors are handled via `Either` type

**Further reading:**
- [Haskell Documentation - Error Handling](https://www.haskell.org/documentation/)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
safeDivide : Int -> Int -> Either String Int
safeDivide x y = if y == 0
    then Left "Division by zero"
    else Right (x `div` y)
```

**Special features:**
- Idris guarantees defined behavior
- Errors are handled via `Either` type

**Further reading:**
- [Idris Documentation - Error Handling](https://idris2.readthedocs.io/en/latest/tutorial/types_functions.html)

</TabItem>
<TabItem value="java" label="Java">

```java
static int safeDivide(int x, int y) throws ArithmeticException {
    if (y == 0) {
        throw new ArithmeticException("Division by zero");
    }
    return x / y;
}
```

**Special features:**
- Java guarantees defined behavior
- Exceptions are handled explicitly

**Further reading:**
- [Oracle Java Documentation - Exceptions](https://docs.oracle.com/javase/tutorial/essential/exceptions/)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
function safeDivide(x, y) {
    if (y === 0) {
        throw new Error('Division by zero');
    }
    return x / y;
}
```

**Special features:**
- JavaScript guarantees defined behavior
- Exceptions are handled explicitly

**Further reading:**
- [MDN Web Docs - Error Handling](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
function safe_divide(x, y)
    if y == 0
        throw(DivideError())
    end
    return x / y
end
```

**Special features:**
- Julia guarantees defined behavior
- Exceptions are handled explicitly

**Further reading:**
- [Julia Documentation - Error Handling](https://docs.julialang.org/en/v1/manual/control-flow/#Exception-Handling)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
// No undefined behavior – all operations are safe
fun safe-divide(x : int, y : int) : exn int
  if y == 0 then throw("Division by zero")
  x / y

fun main()
  // Effect system enforces exception handling
  val result = try({ safe-divide(10, 0) }) fn(exn)
    println("Error: " ++ exn.message)
    0
  println(result.show)
```

**Special features:**
- No undefined behavior – all operations are well-defined
- Effect system tracks potential errors in type (`exn`)
- Memory safety via Perceus reference counting
- No null pointers, no buffer overflows, no data races

**Further reading:**
- [Koka Documentation - Effect Types](https://koka-lang.github.io/koka/doc/book.html#sec-effect-types)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
fun safeDivide(x: Int, y: Int): Int {
    if (y == 0) {
        throw ArithmeticException("Division by zero")
    }
    return x / y
}
```

**Special features:**
- Kotlin guarantees defined behavior
- Exceptions are handled explicitly

**Further reading:**
- [Kotlin Documentation - Exceptions](https://kotlinlang.org/docs/exceptions.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Lean 4 guarantees no undefined behavior
-- All operations are type-safe
def safeDivide (x y : Nat) : Option Nat :=
  if y == 0 then none else some (x / y)

-- Array access is bounds-checked
def safeGet (arr : Array Nat) (i : Nat) : Option Nat :=
  if h : i < arr.size then some arr[i] else none
```

**Special features:**
- Lean 4 has no undefined behavior in the safe core
- Array accesses are bounds-checked or require proofs
- Division by 0 returns 0 (defined behavior)
- Only `unsafe` blocks can potentially produce unsafe behavior

**Further reading:**
- [Lean 4 Documentation](https://lean-lang.org/lean4/doc/)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
function safe_divide(x, y)
    if y == 0 then
        error("Division by zero")
    end
    return x / y
end
```

**Special features:**
- Lua guarantees defined behavior
- Exceptions are handled explicitly

**Further reading:**
- [Lua Documentation - Error Handling](https://www.lua.org/manual/5.4/manual.html#2.3)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
:- module no_ub.
:- interface.
:- import_module io.
:- pred main(io::di, io::uo) is det.
:- implementation.
:- import_module int, string, list, exception.

:- func safe_divide(int, int) = int.
safe_divide(X, Y) = Result :-
    ( if Y = 0 then
        throw("Division by zero")
    else
        Result = X / Y
    ).

main(!IO) :-
    io.write_int(safe_divide(10, 2), !IO),
    io.nl(!IO).
```

**Special features:**
- Mercury has no undefined behavior – all operations are well-defined
- Strong type system with static type checking at compile time
- Mode system prevents access to uninitialized variables
- Determinism declarations (`det`, `semidet`, `multi`) prevent unhandled cases
- No null pointers, no buffer overflows, no data races

**Further reading:**
- [Mercury Language Reference - Type System](https://www.mercurylang.org/information/doc-release/mercury_ref/Type-system.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
fn safe_divide(x: Int, y: Int) -> Int:
    if y == 0:
        raise Error("Division by zero")
    return x // y
```

**Special features:**
- Mojo guarantees defined behavior
- Exceptions are handled explicitly

**Further reading:**
- [Mojo Documentation - Error Handling](https://docs.modular.com/mojo/manual/error-handling/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
proc safeDivide(x, y: int): int =
    if y == 0:
        raise newException(ValueError, "Division by zero")
    x div y
```

**Special features:**
- Nim guarantees defined behavior
- Exceptions are handled explicitly

**Further reading:**
- [Nim Documentation - Exceptions](https://nim-lang.org/docs/manual.html#exception-handling)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
let safe_divide x y =
    if y = 0 then
        Error "Division by zero"
    else
        Ok (x / y)
```

**Special features:**
- OCaml guarantees defined behavior
- Errors are handled via `Result` type

**Further reading:**
- [OCaml Documentation - Error Handling](https://ocaml.org/docs/first-hour)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
safeDivide :: Int -> Int -> Either String Int
safeDivide x y
    | y == 0 = Left "Division by zero"
    | otherwise = Right (x / y)
```

**Special features:**
- PureScript guarantees defined behavior
- Errors are handled via `Either` type

**Further reading:**
- [PureScript Documentation - Error Handling](https://www.purescript.org/documentation/)

</TabItem>
<TabItem value="python" label="Python">

```python
def safe_divide(x, y):
    if y == 0:
        raise ZeroDivisionError("Division by zero")
    return x / y
```

**Special features:**
- Python guarantees defined behavior
- Exceptions are handled explicitly

**Further reading:**
- [Python Documentation - Exceptions](https://docs.python.org/3/tutorial/errors.html)

</TabItem>
<TabItem value="r" label="R">

```r
safe_divide <- function(x, y) {
    if (y == 0) {
        stop("Division by zero")
    }
    x / y
}
```

**Special features:**
- R guarantees defined behavior
- Exceptions are handled explicitly

**Further reading:**
- [R Documentation - Error Handling](https://cran.r-project.org/doc/manuals/r-release/R-lang.html#Error-handling)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
(define (safe-divide x y)
  (if (zero? y)
      (error "Division by zero")
      (/ x y)))
```

**Special features:**
- Racket guarantees defined behavior
- Exceptions are handled explicitly

**Further reading:**
- [Racket Documentation - Error Handling](https://docs.racket-lang.org/guide/exns.html)

</TabItem>
<TabItem value="roc" label="Roc">

```roc
safeDivide : I64, I64 -> [Ok I64, DivByZero]
safeDivide = \x, y ->
    if y == 0 then
        DivByZero
    else
        Ok (Num.divTrunc x y)
```

**Special features:**
- Roc guarantees defined behavior
- Errors are handled via tag unions
- No undefined behavior

**Further reading:**
- [Roc Documentation](https://www.roc-lang.org/tutorial)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
def safe_divide(x, y)
    raise ZeroDivisionError, "Division by zero" if y == 0
    x / y
end
```

**Special features:**
- Ruby guarantees defined behavior
- Exceptions are handled explicitly

**Further reading:**
- [Ruby Documentation - Exceptions](https://docs.ruby-lang.org/en/master/syntax/exceptions_rdoc.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
fn safe_divide(x: i32, y: i32) -> Result<i32, String> {
    if y == 0 {
        Err("Division by zero".to_string())
    } else {
        Ok(x / y)
    }
}
```

**Special features:**
- Rust guarantees defined behavior
- Errors are handled via `Result` type
- No undefined behavior due to memory safety

**Further reading:**
- [Rust Documentation - Error Handling](https://doc.rust-lang.org/book/ch09-00-error-handling.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
def safeDivide(x: Int, y: Int): Either[String, Int] = {
    if (y == 0) {
        Left("Division by zero")
    } else {
        Right(x / y)
    }
}
```

**Special features:**
- Scala guarantees defined behavior
- Errors are handled via `Either` type

**Further reading:**
- [Scala Documentation - Error Handling](https://docs.scala-lang.org/tour/traits.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
(define (safe-divide x y)
  (if (zero? y)
      (error "Division by zero")
      (/ x y)))
```

**Special features:**
- Scheme guarantees defined behavior
- Exceptions are handled explicitly

**Further reading:**
- [Scheme Documentation - Error Handling](https://www.scheme.com/tspl4/exceptions.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
func safeDivide(_ x: Int, _ y: Int) throws -> Int {
    guard y != 0 else {
        throw NSError(domain: "MathError", code: 1, userInfo: nil)
    }
    return x / y
}
```

**Special features:**
- Swift guarantees defined behavior
- Exceptions are handled explicitly

**Further reading:**
- [Swift Documentation - Error Handling](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/errorhandling/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
function safeDivide(x: number, y: number): number {
    if (y === 0) {
        throw new Error('Division by zero');
    }
    return x / y;
}
```

**Special features:**
- TypeScript guarantees defined behavior
- Exceptions are handled explicitly

**Further reading:**
- [TypeScript Documentation - Error Handling](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
Function SafeDivide(x As Integer, y As Integer) As Integer
    If y = 0 Then
        Throw New DivideByZeroException("Division by zero")
    End If
    Return x \ y
End Function
```

**Special features:**
- VB.NET guarantees defined behavior
- Exceptions are handled explicitly

**Further reading:**
- [Microsoft VB.NET Documentation - Exceptions](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/error-handling/)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```wolfram
safeDivide[x_, y_] := If[y == 0,
    Throw["Division by zero"],
    x / y
]
```

**Special features:**
- Wolfram Language guarantees defined behavior
- Exceptions are handled explicitly

**Further reading:**
- [Wolfram Language Documentation - Error Handling](https://reference.wolfram.com/language/guide/ErrorHandling.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// C# (safe code) has no undefined behavior
int[] arr = { 1, 2, 3 };

// Array access out of bounds → Exception, no UB
try {
    int val = arr[10];  // IndexOutOfRangeException
} catch (IndexOutOfRangeException) {
    Console.WriteLine("Index out of bounds");
}

// Integer overflow → defined behavior (wrapping or Exception)
checked {
    int max = int.MaxValue;
    // int overflow = max + 1;  // OverflowException in checked context
}
unchecked {
    int max = int.MaxValue;
    int overflow = max + 1;  // Defined wrapping: int.MinValue
}
```

**Special features:**
- Safe code has no undefined behavior
- Array accesses are checked at runtime
- Integer overflow: `checked` throws exception, `unchecked` has defined wrapping
- `unsafe` code can introduce undefined behavior (pointer arithmetic etc.)
- Null references throw NullReferenceException instead of UB

**Further reading:**
- [Microsoft C# Documentation - Checked and Unchecked](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/statements/checked-and-unchecked)

</TabItem>
<TabItem value="v" label="V">

```v
// No Undefined Behavior
arr := [1, 2, 3]

// Bounds checking (runtime error instead of UB)
// arr[5]  // Panic instead of undefined behavior

// Variables are initialized
x := int(0)  // Always initialized

// Null safety
// ptr := voidptr(0)
// unsafe { *ptr }  // Only possible in unsafe
```

**Special features:**
- Bounds checking for arrays (runtime panic instead of UB)
- All variables are initialized
- Null dereferencing is prevented
- `unsafe` is explicitly required for potentially unsafe operations
- No undefined behavior in safe code

**Further reading:**
- [V Documentation - Safety](https://github.com/vlang/v/blob/master/doc/docs.md)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Prolog has no undefined behavior
% Invalid operations throw defined errors

safe_divide(_, 0, _) :-
    throw(error(division_by_zero, context(safe_divide/3, ''))).
safe_divide(X, Y, Result) :-
    Y =\= 0,
    Result is X / Y.

% ?- safe_divide(10, 0, R).
% ERROR: Unhandled exception: error(division_by_zero, ...)

% Type errors are detected at runtime
% ?- X is hello + 1.
% ERROR: is/2: Arithmetic: `hello/0' is not a function
```

**Special features:**
- All operations have defined behavior (ISO Prolog standard)
- Type errors, instantiation errors, and existence errors are thrown as exceptions
- No memory access out of bounds (no pointer arithmetic)
- Memory management via automatic garbage collection

**Further reading:**
- [SWI-Prolog Documentation - Exception Handling](https://www.swi-prolog.org/pldoc/man?section=exception)

</TabItem>
</Tabs>

