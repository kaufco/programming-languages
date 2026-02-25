---
slug: /ausfuehrungsmodell/evaluation-strategy
title: 17.1. Evaluation Strategy
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 17.1. Evaluation Strategy

How arguments and expressions are evaluated.

## 17.1.1. Call-by-Value

Parameters are passed as values. The argument's value is evaluated and copied before the function call. Changes to the parameter within the function do not affect the original variable.

### Languages {#languages}

<Tabs availableTabs={['ada', 'c', 'carbon', 'clojure', 'common-lisp', 'crystal', 'csharp', 'cpp', 'd', 'dart', 'eiffel', 'elixir', 'elm', 'erlang', 'fsharp', 'fortran', 'gleam', 'go', 'groovy', 'haskell', 'haxe', 'idris', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'lua', 'matlab', 'mercury', 'mojo', 'nim', 'objective-c', 'object-pascal', 'ocaml', 'octave', 'odin', 'perl', 'php', 'purescript', 'python', 'r', 'racket', 'roc', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'vbnet', 'v', 'wolfram-language', 'zig']}>
<TabItem value="ada" label="Ada">

```ada
procedure Modify_Value(x : in Integer) is
begin
    -- x cannot be changed, as it is an 'in' parameter
    null;
end Modify_Value;

-- Call
value : Integer := 5;
Modify_Value(value);
-- value is still 5, as Call-by-Value is used
```

**Special features:**
- Default parameter passing is Call-by-Value for `in` parameters
- `in out` parameters use Call-by-Reference (see Call-by-Reference chapter)

**Further reading:**
- [Ada Reference Manual - Parameter Modes](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-6-2.html)

</TabItem>
<TabItem value="c" label="C">

```c
void modifyValue(int x) {
    x = x * 2;
}

// Call
int value = 5;
modifyValue(value);
// value is still 5, as Call-by-Value is used
```

**Special features:**
- Default parameter passing is Call-by-Value
- Pointers must be used for Call-by-Reference

**Further reading:**
- [C Standard - Function Calls](https://www.open-std.org/jtc1/sc22/wg14/www/docs/n1570.pdf)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
fn ModifyValue(x: i32) {
    x = x * 2;
}

// Call
var value: i32 = 5;
ModifyValue(value);
// value is still 5, as Call-by-Value is used
```

**Special features:**
- Default parameter passing is Call-by-Value
- References must be used for Call-by-Reference

**Further reading:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
(defn modify-value [x]
  (let [x (* x 2)]
    x))

;; Call
(def value 5)
(modify-value value)
;; value is still 5, as Call-by-Value is used
```

**Special features:**
- All parameters are passed Call-by-Value
- Clojure is immutable, so values are copied

**Further reading:**
- [Clojure Documentation - Functions](https://clojure.org/reference/reader)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
(defun modify-value (x)
  (setf x (* x 2))
  x)

;; Call
(setf value 5)
(modify-value value)
;; value is still 5, as Call-by-Value is used
```

**Special features:**
- Default parameter passing is Call-by-Value
- Special parameter modes can be used for Call-by-Reference

**Further reading:**
- [Common Lisp HyperSpec - Function Calls](http://www.lispworks.com/documentation/HyperSpec/Body/03_ababc.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
def modify_value(x : Int32)
  x = x * 2
end

# Call
value = 5
modify_value(value)
# value is still 5, as Call-by-Value is used
```

**Special features:**
- Default parameter passing is Call-by-Value
- References must be used for Call-by-Reference

**Further reading:**
- [Crystal Documentation - Methods](https://crystal-lang.org/reference/1.11/syntax_and_semantics/methods_and_procs.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
void ModifyValue(int x) {
    x = x * 2;
}

// Call
int value = 5;
ModifyValue(value);
// value is still 5, as Call-by-Value is used
```

**Special features:**
- Default parameter passing is Call-by-Value
- `ref` or `out` must be used for Call-by-Reference

**Further reading:**
- [Microsoft C# Documentation - Passing Parameters](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/method-parameters)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
void modifyValue(int x) {
    x = x * 2;
}

// Call
int value = 5;
modifyValue(value);
// value is still 5, as Call-by-Value is used
```

**Special features:**
- Default parameter passing is Call-by-Value
- References (`&`) or pointers must be used for Call-by-Reference

**Further reading:**
- [cppreference.com - Function Parameters](https://en.cppreference.com/w/cpp/language/function)

</TabItem>
<TabItem value="d" label="D">

```d
void modifyValue(int x) {
    x = x * 2;
}

// Call
int value = 5;
modifyValue(value);
// value is still 5, as Call-by-Value is used
```

**Special features:**
- Default parameter passing is Call-by-Value
- References (`ref`) must be used for Call-by-Reference

**Further reading:**
- [D Language Documentation - Function Parameters](https://dlang.org/spec/function.html#parameters)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
void modifyValue(int x) {
  x = x * 2;
}

// Call
int value = 5;
modifyValue(value);
// value is still 5, as Call-by-Value is used
```

**Special features:**
- Default parameter passing is Call-by-Value
- Object references must be used for Call-by-Reference (objects are passed by reference, but primitive types by value)

**Further reading:**
- [Dart Documentation - Functions](https://dart.dev/language/functions)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
try_modify (x: INTEGER)
    local
        local_x: INTEGER
    do
        -- x := x * 2  -- ERROR: Formal arguments are read-only
        local_x := x * 2  -- Use local variable instead
        io.put_integer (local_x)
    end

-- Call
local
    value: INTEGER
do
    value := 5
    try_modify (value)
    -- value is still 5
end
```

**Special features:**
- Expanded types (INTEGER, REAL, BOOLEAN, CHARACTER) are passed by value (copy)
- Formal arguments in Eiffel are ALWAYS read-only – assignment to parameters is forbidden
- Changes must be made via local variables

**Further reading:**
- [Eiffel ECMA-367 Standard](https://www.ecma-international.org/publications-and-standards/standards/ecma-367/)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
def modify_value(x) do
  x = x * 2
end

# Call
value = 5
modify_value(value)
# value is still 5, as Call-by-Value is used
```

**Special features:**
- All parameters are passed Call-by-Value
- Elixir is immutable, so values are copied

**Further reading:**
- [Elixir Documentation - Functions](https://elixir-lang.org/getting-started/modules-and-functions.html)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
modifyValue : Int -> Int
modifyValue x =
    x * 2

-- Call
value = 5
modifyValue value
-- value is still 5, as Call-by-Value is used
```

**Special features:**
- All parameters are passed Call-by-Value
- Elm is immutable, so values are copied

**Further reading:**
- [Elm Documentation - Functions](https://guide.elm-lang.org/core_language.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
modify_value(X) ->
    X * 2.

%% Call
Value = 5,
modify_value(Value).
%% Value is still 5, as Call-by-Value is used
```

**Special features:**
- All parameters are passed Call-by-Value
- Erlang is immutable, so values are copied

**Further reading:**
- [Erlang Documentation - Functions](https://www.erlang.org/doc/reference_manual/functions.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
let modifyValue x =
    let x = x * 2
    x

// Call
let value = 5
modifyValue value
// value is still 5, as Call-by-Value is used
```

**Special features:**
- Default parameter passing is Call-by-Value
- F# also supports Call-by-Name with `'a -> 'b` functions

**Further reading:**
- [F# Documentation - Functions](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/functions/)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Call-by-Value with VALUE attribute (since Fortran 2003)
subroutine modify_value(x)
    integer, value :: x
    x = x + 1  ! Only changes the local copy
end subroutine modify_value

integer :: val = 5
call modify_value(val)
! val is still 5 (true Call-by-Value)
```

**Special features:**
- `VALUE` attribute for true Call-by-Value (since Fortran 2003)
- The parameter is treated as a local copy
- `INTENT(IN)` is not Call-by-Value, it only prevents modification of the parameter

**Further reading:**
- [Fortran Standard - VALUE Attribute](https://gcc.gnu.org/onlinedocs/gfortran/VALUE.html)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
fn modify_value(x: Int) -> Int {
  x * 2
}

// Call
let value = 5
modify_value(value)
// value is still 5, as Call-by-Value is used
```

**Special features:**
- All parameters are passed Call-by-Value
- Gleam is immutable, so values are copied

**Further reading:**
- [Gleam Documentation - Functions](https://gleam.run/documentation/)

</TabItem>
<TabItem value="go" label="Go">

```go
func modifyValue(x int) {
    x = x * 2
}

// Call
value := 5
modifyValue(value)
// value is still 5, as Call-by-Value is used
```

**Special features:**
- Default parameter passing is Call-by-Value
- For Call-by-Reference, pointers must be used

**Further reading:**
- [Go Documentation - Functions](https://go.dev/ref/spec#Function_types)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
def modifyValue(x) {
    x = x * 2
}

// Call
def value = 5
modifyValue(value)
// value is still 5, as Call-by-Value is used
```

**Special features:**
- Default parameter passing is Call-by-Value
- For Call-by-Reference, object references must be used

**Further reading:**
- [Groovy Documentation - Methods](https://groovy-lang.org/documentation.html)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Requires: {-# LANGUAGE BangPatterns #-}
-- Force strict evaluation (Call-by-Value)
strictAdd :: Int -> Int -> Int
strictAdd !x !y = x + y

-- With seq for strict evaluation
forceEval :: Int -> Int
forceEval x = x `seq` x * 2

-- With $! (strict application)
result = strictAdd $! (2 + 3) $! (4 + 5)
```

**Special features:**
- Haskell uses Call-by-Need (Lazy Evaluation) by default, **not** Call-by-Value
- Strict evaluation can be forced with `BangPatterns` (`!`), `seq` or `$!`
- All values are immutable, so there is no mutation as in imperative languages

**Further reading:**
- [GHC User's Guide - Bang Patterns](https://ghc.gitlab.haskell.org/ghc/doc/users_guide/exts/strict.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
function modifyValue(x: Int): Void {
    x = x * 2;
}

// Call
var value = 5;
modifyValue(value);
// value is still 5, as Call-by-Value is used
```

**Special features:**
- Default parameter passing is Call-by-Value
- For Call-by-Reference, special techniques must be used

**Further reading:**
- [Haxe Documentation - Functions](https://haxe.org/manual/expression-function.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
modifyValue : Int -> Int
modifyValue x = x * 2

-- Call
value : Int
value = 5
modifyValue value
-- value is still 5, as Call-by-Value is used
```

**Special features:**
- Default parameter passing is Call-by-Value
- Idris also supports Call-by-Name in some contexts

**Further reading:**
- [Idris Documentation - Functions](https://idris2.readthedocs.io/en/latest/tutorial/types_functions.html)

</TabItem>
<TabItem value="java" label="Java">

```java
void modifyValue(int x) {
    x = x * 2;
}

// Call
int value = 5;
modifyValue(value);
// value is still 5, as Call-by-Value is used
```

**Special features:**
- Default parameter passing is Call-by-Value
- Object references are passed as values (the reference is copied, not the object)

**Further reading:**
- [Oracle Java Documentation - Method Parameters](https://docs.oracle.com/javase/tutorial/java/javaOO/arguments.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
function modifyValue(x) {
    x = x * 2;
}

// Call
let value = 5;
modifyValue(value);
// value is still 5, as Call-by-Value is used
```

**Special features:**
- Default parameter passing is Call-by-Value
- Object references are passed as values (the reference is copied, not the object)

**Further reading:**
- [MDN Web Docs - Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
function modify_value(x)
    x = x * 2
end

# Call
value = 5
modify_value(value)
# value is still 5, as Call-by-Value is used
```

**Special features:**
- Default parameter passing is Call-by-Sharing (similar to Call-by-Value for primitive types)
- For primitive types it behaves like Call-by-Value

**Further reading:**
- [Julia Documentation - Functions](https://docs.julialang.org/en/v1/manual/functions/)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
// Call-by-Value: Default parameter passing
fun modify-value(x : int) : int
  x * 2  // New value is returned, original remains unchanged

fun main()
  val value = 5
  val result = modify-value(value)
  // value is still 5 (immutable, Call-by-Value)
  println("Original: " ++ value.show ++ ", Ergebnis: " ++ result.show)
```

**Special features:**
- Strict Call-by-Value semantics for all parameters
- All values are immutable by default
- Effect system tracks side effects in the type system
- No implicit references or pointers

**Further reading:**
- [Koka Documentation - Functions](https://koka-lang.github.io/koka/doc/book.html#sec-basics)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
fun modifyValue(x: Int) {
    var x = x * 2
}

// Call
val value = 5
modifyValue(value)
// value is still 5, as Call-by-Value is used
```

**Special features:**
- Default parameter passing is Call-by-Value
- Parameters are immutable (`val`), must be redeclared locally to be changed

**Further reading:**
- [Kotlin Documentation - Functions](https://kotlinlang.org/docs/functions.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Lean 4 uses Call-by-Value
def modifyValue (x : Nat) : Nat :=
  x * 2

-- Call
def value := 5
#eval modifyValue value  -- 10
-- value itself remains unchanged (immutable)
```

**Special features:**
- Lean 4 is strict (eager) and uses Call-by-Value as the default evaluation strategy.
- All arguments are fully evaluated before the function call.
- Parameters are immutable – functions return new values.

**Further reading:**
- [Lean 4 Documentation - Functions](https://lean-lang.org/lean4/doc/functions.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
function modifyValue(x)
    x = x * 2
end

-- Call
local value = 5
modifyValue(value)
-- value is still 5, as Call-by-Value is used
```

**Special features:**
- Default parameter passing is Call-by-Value
- Tables are passed as references

**Further reading:**
- [Lua Documentation - Functions](https://www.lua.org/manual/5.4/manual.html#3.4.11)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
function modifyValue(x)
    x = x * 2;
end

% Call
value = 5;
modifyValue(value);
% value is still 5, as Call-by-Value is used
```

**Special features:**
- Default parameter passing is Call-by-Value
- Large arrays can be optimized for performance

**Further reading:**
- [MATLAB Documentation - Functions](https://www.mathworks.com/help/matlab/ref/function.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
fn modify_value(x: Int) -> None:
    x = x * 2

# Call
var value = 5
modify_value(value)
# value is still 5, as Call-by-Value is used
```

**Special features:**
- Default parameter passing is Call-by-Value
- For Call-by-Reference, `inout` parameters must be used

**Further reading:**
- [Mojo Documentation - Functions](https://docs.modular.com/mojo/manual/functions/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
proc modifyValue(x: int) =
    var x = x * 2

# Call
var value = 5
modifyValue(value)
# value is still 5, as Call-by-Value is used
```

**Special features:**
- Default parameter passing is Call-by-Value
- For Call-by-Reference, `var` parameters must be used

**Further reading:**
- [Nim Documentation - Procedures](https://nim-lang.org/docs/manual.html#procedures)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
- (void)modifyValue:(int)x {
    x = x * 2;
}

// Call
int value = 5;
[self modifyValue:value];
// value is still 5, as Call-by-Value is used
```

**Special features:**
- Default parameter passing is Call-by-Value
- Objects are passed as references

**Further reading:**
- [Objective-C Documentation - Methods](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/DefiningClasses/DefiningClasses.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
procedure ModifyValue(x: Integer);
begin
    x := x * 2;
end;

// Call
var
    value: Integer;
begin
    value := 5;
    ModifyValue(value);
    // value is still 5, as Call-by-Value is used
end;
```

**Special features:**
- Default parameter passing is Call-by-Value
- For Call-by-Reference, `var` parameters must be used

**Further reading:**
- [Object Pascal Documentation - Procedures](https://www.freepascal.org/docs-html/ref/refsu68.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
let modify_value x =
    let x = x * 2 in
    x

(* Call *)
let value = 5 in
modify_value value
(* value is still 5, as Call-by-Value is used *)
```

**Special features:**
- Default parameter passing is Call-by-Value
- OCaml is immutable, so values are copied

**Further reading:**
- [OCaml Documentation - Functions](https://ocaml.org/docs/first-hour)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
function modifyValue(x)
    x = x * 2;
end

% Call
value = 5;
modifyValue(value);
% value is still 5, as Call-by-Value is used
```

**Special features:**
- Default parameter passing is Call-by-Value
- Similar to MATLAB

**Further reading:**
- [Octave Documentation - Functions](https://octave.org/doc/v8.1.0/Functions-and-Scripts.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
modify_value :: proc(x: int) {
    x = x * 2
}

// Call
value := 5
modify_value(value)
// value is still 5, as Call-by-Value is used
```

**Special features:**
- Default parameter passing is Call-by-Value
- For Call-by-Reference, pointers must be used

**Further reading:**
- [Odin Documentation - Procedures](https://odin-lang.org/docs/overview/#procedures)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
sub modify_value {
    my $x = shift;
    $x = $x * 2;
}

# Call
my $value = 5;
modify_value($value);
# $value is still 5, as Call-by-Value is used
```

**Special features:**
- Default parameter passing is Call-by-Value
- Arrays and hashes are passed as references

**Further reading:**
- [Perl Documentation - Functions](https://perldoc.perl.org/perlsub)

</TabItem>
<TabItem value="php" label="PHP">

```php
function modifyValue($x) {
    $x = $x * 2;
}

// Call
$value = 5;
modifyValue($value);
// $value is still 5, as Call-by-Value is used
```

**Special features:**
- Default parameter passing is Call-by-Value
- For Call-by-Reference, `&` must be used

**Further reading:**
- [PHP Documentation - Functions](https://www.php.net/manual/en/functions.user-defined.php)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
modifyValue :: Int -> Int
modifyValue x = x * 2

-- Call
value = 5
modifyValue value
-- value is still 5, as Call-by-Value is used
```

**Special features:**
- All parameters are passed Call-by-Value
- PureScript is immutable, so values are copied

**Further reading:**
- [PureScript Documentation - Functions](https://www.purescript.org/documentation/)

</TabItem>
<TabItem value="python" label="Python">

```python
def modify_value(x):
    x = x * 2

# Call
value = 5
modify_value(value)
# value is still 5, as Call-by-Value is used
```

**Special features:**
- Default parameter passing is Call-by-Value
- Object references are passed as values (the reference is copied, not the object)

**Further reading:**
- [Python Documentation - Functions](https://docs.python.org/3/tutorial/controlflow.html#defining-functions)

</TabItem>
<TabItem value="r" label="R">

```r
modify_value <- function(x) {
    x <- x * 2
}

# Call
value <- 5
modify_value(value)
# value is still 5, as Call-by-Value is used
```

**Special features:**
- Default parameter passing is Call-by-Value
- R uses Lazy Evaluation for some contexts

**Further reading:**
- [R Documentation - Functions](https://cran.r-project.org/doc/manuals/r-release/R-lang.html#Function-objects)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
(define (modify-value x)
  (let ([x (* x 2)])
    x))

;; Call
(define value 5)
(modify-value value)
;; value is still 5, as Call-by-Value is used
```

**Special features:**
- All parameters are passed Call-by-Value
- Racket is immutable, so values are copied

**Further reading:**
- [Racket Documentation - Functions](https://docs.racket-lang.org/guide/define.html)

</TabItem>
<TabItem value="roc" label="Roc">

```roc
modifyValue : Int -> Int
modifyValue = \x -> x * 2

# Call
value = 5
modifyValue value
# value is still 5, as Call-by-Value is used
```

**Special features:**
- All parameters are passed Call-by-Value
- Roc is immutable, so values are copied

**Further reading:**
- [Roc Documentation - Functions](https://www.roc-lang.org/tutorial)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
def modify_value(x)
    x = x * 2
end

# Call
value = 5
modify_value(value)
# value is still 5, as Call-by-Value is used
```

**Special features:**
- Default parameter passing is Call-by-Value
- Object references are passed as values (the reference is copied, not the object)

**Further reading:**
- [Ruby Documentation - Methods](https://docs.ruby-lang.org/en/master/syntax/methods_rdoc.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
fn modify_value(x: i32) {
    let mut x = x * 2;
}

// Call
let value = 5;
modify_value(value);
// value is still 5, as Call-by-Value is used
```

**Special features:**
- Default parameter passing is Call-by-Value
- For Call-by-Reference, references (`&`) must be used

**Further reading:**
- [Rust Documentation - Functions](https://doc.rust-lang.org/book/ch03-03-functions.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
def modifyValue(x: Int): Unit = {
    var x = x * 2
}

// Call
val value = 5
modifyValue(value)
// value is still 5, as Call-by-Value is used
```

**Special features:**
- Default parameter passing is Call-by-Value
- Scala also supports Call-by-Name with `=>` parameters

**Further reading:**
- [Scala Documentation - Functions](https://docs.scala-lang.org/tour/functions.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
(define (modify-value x)
  (let ((x (* x 2)))
    x))

;; Call
(define value 5)
(modify-value value)
;; value is still 5, as Call-by-Value is used
```

**Special features:**
- All parameters are passed Call-by-Value
- For composite objects (lists, vectors) the reference is copied, not the object
- Mutation of the passed object is possible within the function

**Further reading:**
- [Scheme Documentation - Functions](https://www.scheme.com/tspl4/start.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
func modifyValue(_ x: Int) {
    var x = x * 2
}

// Call
let value = 5
modifyValue(value)
// value is still 5, as Call-by-Value is used
```

**Special features:**
- Default parameter passing is Call-by-Value
- For Call-by-Reference, `inout` must be used

**Further reading:**
- [Swift Documentation - Functions](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/functions/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
function modifyValue(x: number): void {
    x = x * 2;
}

// Call
let value = 5;
modifyValue(value);
// value is still 5, as Call-by-Value is used
```

**Special features:**
- Default parameter passing is Call-by-Value
- Object references are passed as values (the reference is copied, not the object)

**Further reading:**
- [TypeScript Documentation - Functions](https://www.typescriptlang.org/docs/handbook/functions.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
Sub ModifyValue(x As Integer)
    x = x * 2
End Sub

' Call
Dim value As Integer = 5
ModifyValue(value)
' value is still 5, as Call-by-Value is used
```

**Special features:**
- Default parameter passing is Call-by-Value
- For Call-by-Reference, `ByRef` must be used

**Further reading:**
- [Microsoft VB.NET Documentation - Procedures](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/procedures/)

</TabItem>
<TabItem value="v" label="V">

```v
fn modify_value(x int) {
    mut x := x * 2
}

// Call
mut value := 5
modify_value(value)
// value is still 5, as Call-by-Value is used
```

**Special features:**
- Default parameter passing is Call-by-Value
- For Call-by-Reference, pointers must be used

**Further reading:**
- [V Documentation - Functions](https://github.com/vlang/v/blob/master/doc/docs.md#functions)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
modifyValue[x_] := Module[{local = x * 2}, local]

(* Call *)
value = 5;
modifyValue[value]
(* value is still 5, as the value is copied *)
```

**Special features:**
- Arguments are bound through pattern matching (value is copied)
- The original value is not modified
- Wolfram Language uses a rewriting-based evaluation model

**Further reading:**
- [Wolfram Language Documentation - Functions](https://reference.wolfram.com/language/guide/Functions.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
fn modifyValue(x: i32) void {
    var x = x * 2;
}

// Call
var value: i32 = 5;
modifyValue(value);
// value is still 5, as Call-by-Value is used
```

**Special features:**
- Default parameter passing is Call-by-Value
- For Call-by-Reference, pointers must be used

**Further reading:**
- [Zig Documentation - Functions](https://ziglang.org/documentation/0.11.0/#Functions)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
:- func modify_value(int) = int.
modify_value(X) = X * 2.

% Call
main(!IO) :-
    Value = 5,
    _Result = modify_value(Value),
    % Value is still 5, as Call-by-Value is used
    io.print_line(Value, !IO).
```

**Special features:**
- Default parameter passing is Call-by-Value for `in`-mode parameters
- All values are immutable – no overwriting possible
- Mercury is strict (eager): arguments are fully evaluated before the call

**Further reading:**
- [Mercury Language Reference - Modes](https://www.mercurylang.org/information/doc-release/mercury_ref/Modes.html)

</TabItem>
</Tabs>


## 17.1.2. Call-by-Reference

Parameters are passed as references. The function receives a reference to the original variable, so changes to the parameter within the function affect the original variable.

### Languages {#languages}

<Tabs availableTabs={['ada', 'c', 'carbon', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'eiffel', 'fortran', 'go', 'groovy', 'javascript', 'julia', 'kotlin', 'lua', 'mojo', 'nim', 'object-pascal', 'objective-c', 'odin', 'perl', 'php', 'python', 'ruby', 'rust', 'swift', 'typescript', 'v', 'vbnet', 'zig']} yellowTabs={['haxe']}>
<TabItem value="ada" label="Ada">

```ada
procedure Modify_Value(x : in out Integer) is
begin
    x := x * 2;
end Modify_Value;

-- Call
value : Integer := 5;
Modify_Value(value);
-- value is now 10, as Call-by-Reference is used
```

**Special features:**
- `in out` parameters use Call-by-Reference
- `out` parameters also use Call-by-Reference

**Further reading:**
- [Ada Reference Manual - Parameter Modes](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-6-2.html)

</TabItem>
<TabItem value="c" label="C">

```c
void modifyValue(int *x) {
    *x = *x * 2;
}

// Call
int value = 5;
modifyValue(&value);
// value is now 10, as Call-by-Reference is used
```

**Special features:**
- Call-by-Reference is implemented through pointers (`*`) and address operator (`&`)
- Pointers must be explicitly dereferenced

**Further reading:**
- [C Standard - Function Calls](https://www.open-std.org/jtc1/sc22/wg14/www/docs/n1570.pdf)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
fn ModifyValue(x: i32*) {
    *x = *x * 2;
}

// Call
var value: i32 = 5;
ModifyValue(&value);
// value is now 10, as Call-by-Reference is used
```

**Special features:**
- Call-by-Reference is implemented through pointers (`*`) and address operator (`&`)
- Pointers must be explicitly dereferenced

**Further reading:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
def modify_value(x : Int32*)
  x.value = x.value * 2
end

# Call
value = 5
modify_value(pointerof(value))
# value is now 10, as Call-by-Reference is used
```

**Special features:**
- Call-by-Reference is implemented through pointers
- `pointerof` creates a pointer to a variable

**Further reading:**
- [Crystal Documentation - Methods](https://crystal-lang.org/reference/1.11/syntax_and_semantics/methods_and_procs.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
void ModifyValue(ref int x) {
    x = x * 2;
}

// Call
int value = 5;
ModifyValue(ref value);
// value is now 10, as Call-by-Reference is used
```

**Special features:**
- `ref` parameters use Call-by-Reference
- `out` parameters also use Call-by-Reference, but must be initialized

**Further reading:**
- [Microsoft C# Documentation - Passing Parameters](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/method-parameters)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
void modifyValue(int& x) {
    x = x * 2;
}

// Call
int value = 5;
modifyValue(value);
// value is now 10, as Call-by-Reference is used
```

**Special features:**
- References (`&`) use Call-by-Reference
- Pointers (`*`) can also be used, but are not true references

**Further reading:**
- [cppreference.com - Function Parameters](https://en.cppreference.com/w/cpp/language/function)

</TabItem>
<TabItem value="d" label="D">

```d
void modifyValue(ref int x) {
    x = x * 2;
}

// Call
int value = 5;
modifyValue(value);
// value is now 10, as Call-by-Reference is used
```

**Special features:**
- `ref` parameters use Call-by-Reference
- `out` parameters also use Call-by-Reference

**Further reading:**
- [D Language Documentation - Function Parameters](https://dlang.org/spec/function.html#parameters)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
void modifyValue(List<int> list) {
  list[0] = list[0] * 2;
}

// Call
var value = [5];
modifyValue(value);
// value[0] is now 10, as objects are passed as references
```

**Special features:**
- Primitive types are passed Call-by-Value
- Objects are passed as references (Call-by-Sharing)

**Further reading:**
- [Dart Documentation - Functions](https://dart.dev/language/functions)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
-- Reference Types: reference is copied, but object is shared
modify_point (p: POINT)
    do
        -- p := ...  -- ERROR: Formal arguments are read-only
        p.set_x (p.x * 2)  -- Mutation of the referenced object is possible
    end

-- Call
local
    my_point: POINT
do
    create my_point.make (5, 10)
    modify_point (my_point)
    -- my_point.x is now 10, as the object was modified through the shared reference
end
```

**Special features:**
- Reference types are passed as reference copies (Call-by-Sharing)
- Formal arguments are ALWAYS read-only – the reference itself cannot be changed
- The referenced object can be modified through its methods
- Expanded types (INTEGER, REAL, etc.) are copied by value

**Further reading:**
- [Eiffel ECMA-367 Standard](https://www.ecma-international.org/publications-and-standards/standards/ecma-367/)

</TabItem>

<TabItem value="go" label="Go">

```go
func modifyValue(x *int) {
    *x = *x * 2
}

// Call
value := 5
modifyValue(&value)
// value is now 10, as Call-by-Reference is used
```

**Special features:**
- Call-by-Reference is implemented through pointers (`*`) and address operator (`&`)
- Pointers must be explicitly dereferenced

**Further reading:**
- [Go Documentation - Functions](https://go.dev/ref/spec#Function_types)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
def modifyValue(list) {
    list[0] = list[0] * 2
}

// Call
def value = [5]
modifyValue(value)
// value[0] is now 10, as objects are passed as references
```

**Special features:**
- Primitive types are passed Call-by-Value
- Objects are passed as references (Call-by-Sharing)

**Further reading:**
- [Groovy Documentation - Methods](https://groovy-lang.org/documentation.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Call-by-Reference: objects are passed as references
class Box {
    public var value:Int;
    public function new(v:Int) { this.value = v; }
}

function modifyBox(box:Box):Void {
    box.value = box.value * 2;
}

var box = new Box(5);
modifyBox(box);
// box.value is now 10
```

**Special features:**
- Objects (class instances) are passed as references (Call-by-Sharing)
- Primitive types (Int, Float, Bool) are passed by value
- No explicit `ref` semantics as in C# or Rust

**Further reading:**
- [Haxe Documentation - Functions](https://haxe.org/manual/expression-function.html)

</TabItem>

<TabItem value="javascript" label="JavaScript">

```javascript
function modifyValue(obj) {
    obj.value = obj.value * 2;
}

// Call
let value = { value: 5 };
modifyValue(value);
// value.value is now 10, as objects are passed as references
```

**Special features:**
- Primitive types are passed Call-by-Value
- Objects are passed as references (the reference is copied, but points to the same object)

**Further reading:**
- [MDN Web Docs - Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
function modify_value!(x)
    x[1] = x[1] * 2
end

# Call
value = [5]
modify_value!(value)
# value[1] is now 10, as arrays are passed as references
```

**Special features:**
- Functions with `!` in the name indicate that they modify their arguments
- Mutable objects are passed as references (Call-by-Sharing)

**Further reading:**
- [Julia Documentation - Functions](https://docs.julialang.org/en/v1/manual/functions/)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
fun modifyValue(arr: IntArray) {
    arr[0] = arr[0] * 2
}

// Call
val value = intArrayOf(5)
modifyValue(value)
// value[0] is now 10, as arrays are passed as references
```

**Special features:**
- Primitive types are passed Call-by-Value
- Objects and arrays are passed as references (the reference is copied, but points to the same object)

**Further reading:**
- [Kotlin Documentation - Functions](https://kotlinlang.org/docs/functions.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
function modifyValue(t)
    t.value = t.value * 2
end

-- Call
local value = { value = 5 }
modifyValue(value)
-- value.value is now 10, as tables are passed as references
```

**Special features:**
- Primitive types are passed Call-by-Value
- Tabellen werden als Referenzen übergeben

**Further reading:**
- [Lua Documentation - Functions](https://www.lua.org/manual/5.4/manual.html#3.4.11)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
fn modify_value(inout x: Int) -> None:
    x = x * 2

# Call
var value = 5
modify_value(value)
# value is now 10, as Call-by-Reference is used
```

**Special features:**
- `inout` parameters use Call-by-Reference
- Default parameter passing is Call-by-Value

**Further reading:**
- [Mojo Documentation - Functions](https://docs.modular.com/mojo/manual/functions/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
proc modifyValue(x: var int) =
    x = x * 2

# Call
var value = 5
modifyValue(value)
# value is now 10, as Call-by-Reference is used
```

**Special features:**
- `var` parameters use Call-by-Reference
- Default parameter passing is Call-by-Value

**Further reading:**
- [Nim Documentation - Procedures](https://nim-lang.org/docs/manual.html#procedures)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
- (void)modifyValue:(int *)x {
    *x = *x * 2;
}

// Call
int value = 5;
[self modifyValue:&value];
// value is now 10, as Call-by-Reference is used
```

**Special features:**
- Call-by-Reference is implemented through pointers (`*`) and address operator (`&`)
- Objects are passed as references by default

**Further reading:**
- [Objective-C Documentation - Methods](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/DefiningClasses/DefiningClasses.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
procedure ModifyValue(var x: Integer);
begin
    x := x * 2;
end;

// Call
var
    value: Integer;
begin
    value := 5;
    ModifyValue(value);
    // value is now 10, as Call-by-Reference is used
end;
```

**Special features:**
- `var` parameters use Call-by-Reference
- Default parameter passing is Call-by-Value

**Further reading:**
- [Object Pascal Documentation - Procedures](https://www.freepascal.org/docs-html/ref/refsu68.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
modify_value :: proc(x: ^int) {
    x^ = x^ * 2
}

// Call
value := 5
modify_value(&value)
// value is now 10, as Call-by-Reference is used
```

**Special features:**
- Call-by-Reference is implemented through pointers (`^`) and address operator (`&`)
- Pointers must be explicitly dereferenced (`^`)

**Further reading:**
- [Odin Documentation - Procedures](https://odin-lang.org/docs/overview/#procedures)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
sub modify_value {
    my $ref = shift;
    $$ref = $$ref * 2;
}

# Call
my $value = 5;
modify_value(\$value);
# $value is now 10, as Call-by-Reference is used
```

**Special features:**
- Call-by-Reference is implemented through references (`\`)
- References must be explicitly dereferenced (`$$`)

**Further reading:**
- [Perl Documentation - Functions](https://perldoc.perl.org/perlsub)

</TabItem>
<TabItem value="php" label="PHP">

```php
function modifyValue(&$x) {
    $x = $x * 2;
}

// Call
$value = 5;
modifyValue($value);
// $value is now 10, as Call-by-Reference is used
```

**Special features:**
- `&` parameters use Call-by-Reference
- Default parameter passing is Call-by-Value

**Further reading:**
- [PHP Documentation - Functions](https://www.php.net/manual/en/functions.user-defined.php)

</TabItem>
<TabItem value="python" label="Python">

```python
def modify_value(obj):
    obj.value = obj.value * 2

# Call
class Value:
    def __init__(self, v):
        self.value = v

value = Value(5)
modify_value(value)
# value.value is now 10, as objects are passed as references
```

**Special features:**
- Python uses "Call-by-Object-Reference" (also "Call-by-Sharing")
- All values are passed the same way: the reference to the object is copied
- For mutable objects, the content can be changed within the function
- For immutable objects (int, str, tuple) it appears like Call-by-Value

**Further reading:**
- [Python Documentation - Functions](https://docs.python.org/3/tutorial/controlflow.html#defining-functions)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
def modify_value(obj)
    obj.value = obj.value * 2
end

# Call
class Value
    attr_accessor :value
    def initialize(v)
        @value = v
    end
end

value = Value.new(5)
modify_value(value)
# value.value is now 10, as objects are passed as references
```

**Special features:**
- Primitive types are passed Call-by-Value
- Objects are passed as references (the reference is copied, but points to the same object)

**Further reading:**
- [Ruby Documentation - Methods](https://docs.ruby-lang.org/en/master/syntax/methods_rdoc.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
fn modify_value(x: &mut i32) {
    *x = *x * 2;
}

// Call
let mut value = 5;
modify_value(&mut value);
// value is now 10, as Call-by-Reference is used
```

**Special features:**
- `&mut` references use Call-by-Reference
- References must be explicitly dereferenced (`*`)

**Further reading:**
- [Rust Documentation - Functions](https://doc.rust-lang.org/book/ch03-03-functions.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
func modifyValue(_ x: inout Int) {
    x = x * 2
}

// Call
var value = 5
modifyValue(&value)
// value is now 10, as Call-by-Reference is used
```

**Special features:**
- `inout` parameters use Call-by-Reference
- Default parameter passing is Call-by-Value

**Further reading:**
- [Swift Documentation - Functions](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/functions/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
function modifyValue(obj: { value: number }): void {
    obj.value = obj.value * 2;
}

// Call
let value = { value: 5 };
modifyValue(value);
// value.value is now 10, as objects are passed as references
```

**Special features:**
- Primitive types are passed Call-by-Value
- Objects are passed as references (the reference is copied, but points to the same object)

**Further reading:**
- [TypeScript Documentation - Functions](https://www.typescriptlang.org/docs/handbook/functions.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
Sub ModifyValue(ByRef x As Integer)
    x = x * 2
End Sub

' Call
Dim value As Integer = 5
ModifyValue(value)
' value is now 10, as Call-by-Reference is used
```

**Special features:**
- `ByRef` parameters use Call-by-Reference
- Default parameter passing is `ByVal` (Call-by-Value)

**Further reading:**
- [Microsoft VB.NET Documentation - Procedures](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/procedures/)

</TabItem>
<TabItem value="v" label="V">

```v
fn modify_value(x &int) {
    *x = *x * 2
}

// Call
mut value := 5
modify_value(&value)
// value is now 10, as Call-by-Reference is used
```

**Special features:**
- Call-by-Reference is implemented through pointers (`&`) and address operator (`&`)
- Pointers must be explicitly dereferenced (`*`)

**Further reading:**
- [V Documentation - Functions](https://github.com/vlang/v/blob/master/doc/docs.md#functions)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
fn modifyValue(x: *i32) void {
    x.* = x.* * 2;
}

// Call
var value: i32 = 5;
modifyValue(&value);
// value is now 10, as Call-by-Reference is used
```

**Special features:**
- Call-by-Reference is implemented through pointers (`*`) and address operator (`&`)
- Pointers must be explicitly dereferenced (`.*`)

**Further reading:**
- [Zig Documentation - Functions](https://ziglang.org/documentation/0.11.0/#Functions)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Call-by-Reference (Standard in Fortran)
subroutine double_value(x)
    integer, intent(inout) :: x
    x = x * 2  ! Changes the original value
end subroutine double_value

integer :: val = 5
call double_value(val)
! val is now 10
```

**Special features:**
- Default parameter passing is Call-by-Reference (implementation-defined, but typically by-reference)
- `INTENT(INOUT)` allows reading and writing the parameter
- `INTENT(OUT)` for pure output parameters

**Further reading:**
- [Fortran Standard - Argument Passing](https://gcc.gnu.org/onlinedocs/gfortran/Argument-passing.html)

</TabItem>

</Tabs>


## 17.1.3. Call-by-Name

Parameters are passed as expressions that are only evaluated on each use. The expression is not evaluated before the function call, but is recalculated on each reference in the function body.

### Languages {#languages}

<Tabs availableTabs={['haskell', 'scala', 'wolfram-language']} orangeTabs={['fsharp', 'idris']}>
<TabItem value="fsharp" label="F#">

```fsharp
let compute x = x + x

let callByName (f: unit -> int) = 
    f() + f()

// Call
let result = callByName (fun () -> compute 5)
// The expression is evaluated twice (10 + 10 = 20)
```

**Special features:**
- Call-by-Name is simulated through functions `unit -> 'a`
- The expression is re-evaluated on each use

**Further reading:**
- [F# Documentation - Functions](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/functions/)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
compute :: Int -> Int
compute x = x + x

callByName :: (() -> Int) -> Int
callByName f = f () + f ()

-- Call
result = callByName (\() -> compute 5)
-- The expression is evaluated twice (10 + 10 = 20)
```

**Special features:**
- Call-by-Name is simulated through functions `() -> a`
- Haskell uses Lazy Evaluation by default, but Call-by-Name can be explicitly implemented through thunks

**Further reading:**
- [Haskell Documentation - Functions](https://www.haskell.org/documentation/)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
compute : Int -> Int
compute x = x + x

callByName : (() -> Int) -> Int
callByName f = f () + f ()

-- Call
result : Int
result = callByName (\() => compute 5)
-- The expression is evaluated twice (10 + 10 = 20)
```

**Special features:**
- Call-by-Name is simulated through functions `() -> a`
- Idris also supports Lazy Evaluation in some contexts

**Further reading:**
- [Idris Documentation - Functions](https://idris2.readthedocs.io/en/latest/tutorial/types_functions.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
def compute(x: Int): Int = x + x

def callByName(f: => Int): Int = f + f

// Call
val result = callByName(compute(5))
// The expression is evaluated twice (10 + 10 = 20)
```

**Special features:**
- `=>` parameters use Call-by-Name
- The expression is re-evaluated on each use
- Default parameter passing is Call-by-Value

**Further reading:**
- [Scala Documentation - Functions](https://docs.scala-lang.org/tour/functions.html)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Call-by-Name via HoldAll *)
SetAttributes[callByName, HoldAll]
callByName[expr_] := (Print["Evaluating..."]; expr)

(* Call - expression is only evaluated when needed *)
callByName[1 + 2]  (* First Print, then 3 *)

(* SetDelayed (:=) delays evaluation *)
lazyValue := (Print["Computing"]; 42)
```

**Special features:**
- `HoldAll`, `HoldFirst` etc. prevent evaluation of arguments
- `:=` (SetDelayed) evaluates the right side only on access
- Symbolic evaluation is a core feature of Wolfram Language

**Further reading:**
- [Wolfram Language Documentation - HoldAll](https://reference.wolfram.com/language/ref/HoldAll.html)

</TabItem>
</Tabs>


## 17.1.4. Lazy Evaluation

Expressions are only evaluated when their value is actually needed. This enables infinite data structures and can improve efficiency when not all values are needed.

### Languages {#languages}

<Tabs availableTabs={['clojure', 'elixir', 'fsharp', 'gleam', 'haskell', 'idris', 'ocaml', 'purescript', 'r', 'racket', 'scala', 'scheme', 'wolfram-language']} yellowTabs={['koka']} orangeTabs={['erlang', 'prolog']}>
<TabItem value="clojure" label="Clojure">

```clojure
(defn lazy-sequence []
  (lazy-seq (cons 1 (lazy-sequence))))

;; Call
(def numbers (take 5 (lazy-sequence)))
;; Only the first 5 elements are evaluated
```

**Special features:**
- `lazy-seq` creates lazy sequences
- Elements are only evaluated on access

**Further reading:**
- [Clojure Documentation - Lazy Sequences](https://clojure.org/reference/sequences)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
defmodule Lazy do
  def lazy_stream do
    Stream.iterate(1, &(&1 + 1))
  end
end

# Call
numbers = Lazy.lazy_stream() |> Enum.take(5)
# Only the first 5 elements are evaluated
```

**Special features:**
- `Stream` module provides lazy evaluation
- Elements are only evaluated during enumeration

**Further reading:**
- [Elixir Documentation - Streams](https://elixir-lang.org/getting-started/enumerables-and-streams.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% Lazy Evaluation via Thunks (nullary functions)
lazy_value() ->
    fun() -> expensive_computation() end.

%% Call: Value is computed here
Result = (lazy_value())().

% Lazy Stream with manual evaluation
lazy_ones() -> fun() -> {1, lazy_ones()} end.

take(0, _LazyList) -> [];
take(N, LazyList) ->
    {Value, Next} = LazyList(),
    [Value | take(N - 1, Next)].

FirstFive = take(5, lazy_ones()).
%% Result: [1, 1, 1, 1, 1]
```

**Special features:**
- Erlang is primarily eager (strict evaluation)
- Lazy evaluation can be simulated via Thunks (nullary functions)
- No built-in lazy evaluation framework

**Further reading:**
- [Erlang Documentation - Functions](https://www.erlang.org/doc/reference_manual/functions.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
let lazyValue = lazy (expensiveComputation())

// Call
let result = lazyValue.Value
// The value is only evaluated here
```

**Special features:**
- `lazy` keyword creates lazy values
- `Value` property triggers evaluation

**Further reading:**
- [F# Documentation - Lazy Values](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/lazy-computations)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// Lazy Evaluation via gleam/iterator
// Requires: import gleam/iterator
pub fn lazy_list() {
  iterator.from_list([1, 2, 3, 4, 5])
}

let numbers = lazy_list()
let first_two = iterator.take(numbers, 2) |> iterator.to_list()
// Only the first 2 elements are evaluated
```

**Special features:**
- `gleam/iterator` provides lazy evaluation
- Elements are only evaluated when needed
- `iterator.from_list`, `iterator.take`, `iterator.map` etc.

**Further reading:**
- [Gleam Documentation - iterator](https://hexdocs.pm/gleam_stdlib/gleam/iterator.html)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
lazyList :: [Int]
lazyList = [1..]

-- Call
firstFive = take 5 lazyList
-- Only the first 5 elements are evaluated
```

**Special features:**
- Haskell uses lazy evaluation by default
- Infinite lists are possible
- Expressions are only evaluated when needed

**Further reading:**
- [Haskell Documentation - Lazy Evaluation](https://www.haskell.org/documentation/)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Lazy Evaluation with Lazy type
lazyValue : Lazy Int
lazyValue = 42 + 58  -- Only evaluated when needed

-- Stream for infinite sequences
nats : Stream Nat
nats = iterate S Z

-- Usage
firstFive : List Nat
firstFive = take 5 nats  -- [0, 1, 2, 3, 4]
```

**Special features:**
- `Stream` type provides lazy evaluation for infinite sequences
- `Lazy` type for explicit delayed evaluation
- Idris 2 is strict (eager) by default, lazy evaluation is explicit

**Further reading:**
- [Idris 2 Documentation - Lazy](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
// Lazy Evaluation via delayed/lazy functions
// Koka is strict by default, but supports delayed evaluation

// Lazy Value via Closures
fun lazy-value() : int
  42 + 58  // Only evaluated when called

// Lazy List via recursive functions
fun take(n : int, gen : () -> list<int>) : list<int>
  if n <= 0 then [] else gen().take(n - 1, gen)

fun main()
  val result = lazy-value()  // Only now is 42 + 58 computed
  println(result.show)
```

**Special features:**
- Koka is strict (eager evaluation) by default
- Lazy evaluation can be simulated via closures and thunks
- Effect system enables controlled delayed evaluation
- No built-in `lazy` support like in Haskell

**Further reading:**
- [Koka Documentation - Functions](https://koka-lang.github.io/koka/doc/book.html#sec-basics)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
let lazy_value = lazy (expensive_computation ())

(* Call *)
let result = Lazy.force lazy_value
(* The value is only evaluated here *)
```

**Special features:**
- `lazy` keyword creates lazy values
- `Lazy.force` triggers evaluation
- OCaml is eager by default, but supports lazy evaluation

**Further reading:**
- [OCaml Documentation - Lazy Values](https://ocaml.org/docs/first-hour)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Requires: import Data.Lazy (Lazy, defer, force)
lazyValue :: Lazy Int
lazyValue = defer \_ -> expensiveComputation 42

-- Only evaluated at force
result = force lazyValue
```

**Special features:**
- PureScript is STRICT by default (not lazy like Haskell)
- Explicit lazy evaluation via `Data.Lazy`
- `defer` creates lazy values, `force` forces evaluation

**Further reading:**
- [PureScript Documentation - Lazy](https://pursuit.purescript.org/packages/purescript-lazy)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Lazy Evaluation via freeze/2 (Coroutining)
% Goal is delayed until variable is bound

% freeze/2: Delayed Goal
:- freeze(X, (Y is X * 2, write(Y))).
% No output yet - X is unbound
X = 5.
% Now output: 10

% Lazy List with freeze/2
lazy_nats(N, [N|Rest]) :-
    N1 is N + 1,
    freeze(Rest, lazy_nats(N1, Rest)).

% Only required elements are generated
?- lazy_nats(1, [A, B, C | _]).
% A = 1, B = 2, C = 3
```

**Special features:**
- Prolog is eager by default (depth-first search with left-to-right evaluation)
- `freeze/2` delays a goal until a variable is bound (coroutining)
- `when/2` provides more flexible conditions for delayed evaluation
- Lazy evaluation only possible via coroutining extensions (SWI-Prolog, SICStus)

**Further reading:**
- [SWI-Prolog Documentation - Coroutining](https://www.swi-prolog.org/pldoc/man?section=coroutining)

</TabItem>

<TabItem value="r" label="R">

```r
lazy_eval <- function(expr) {
  substitute(expr)
}

# Call
result <- lazy_eval(expensive_computation())
# The expression is only evaluated when used
```

**Special features:**
- R uses lazy evaluation for function arguments
- `substitute` enables delayed evaluation

**Further reading:**
- [R Documentation - Lazy Evaluation](https://cran.r-project.org/doc/manuals/r-release/R-lang.html#Argument-evaluation)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
(define lazy-list
  (stream-cons 1 (stream-map add1 lazy-list)))

;; Call
(define first-five (stream-take lazy-list 5))
;; Only the first 5 elements are evaluated
```

**Special features:**
- `stream` module provides lazy evaluation
- Infinite streams are possible

**Further reading:**
- [Racket Documentation - Streams](https://docs.racket-lang.org/reference/streams.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
lazy val lazyValue = expensiveComputation()

// Call
val result = lazyValue
// The value is only evaluated here
```

**Special features:**
- `lazy val` creates lazy values
- The value is only evaluated on first use
- Subsequent accesses use the cached value

**Further reading:**
- [Scala Documentation - Lazy Values](https://docs.scala-lang.org/tour/automatic-closures.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
(define lazy-list
  (stream-cons 1 (stream-map (lambda (x) (+ x 1)) lazy-list)))

;; Call
(define first-five (stream-take lazy-list 5))
;; Only the first 5 elements are evaluated
```

**Special features:**
- `stream` module provides lazy evaluation (if available)
- Scheme is eager by default, but some implementations support lazy evaluation

**Further reading:**
- [Scheme Documentation - Streams](https://www.scheme.com/tspl4/objects.html#./objects:s246)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Lazy Evaluation via SetDelayed *)
lazyValue := (Print["Computing..."]; 42)
(* Only evaluated on access *)

(* Lazy-like constructs *)
stream = NestList[# + 1 &, 1, 9]
Take[stream, 5]  (* {1, 2, 3, 4, 5} *)
```

**Special features:**
- Wolfram Language is not lazy by default (eager evaluation)
- `:=` (SetDelayed) delays evaluation
- `Hold`, `HoldForm` for explicit delay
- Since version 13.1: `LazyList` and `LazyArray` for true lazy data structures

**Further reading:**
- [Wolfram Language Documentation - Delayed Evaluation](https://reference.wolfram.com/language/guide/DelayedEvaluation.html)

</TabItem>
</Tabs>

