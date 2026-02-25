---
slug: /operatoren/standard-operatoren
title: 5.1. Standard Operators
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 5.1. Standard Operators

Standard operators for arithmetic, comparison, and logical operations.

## 5.1.1. Arithmetic Operators (Infix, Prefix Notation)

Basic arithmetic operations such as addition, subtraction, multiplication, division, and modulo. Supports both infix notation (e.g., `a + b`) and prefix notation (e.g., unary minus `-a`).

### Languages {#sprachen}

<Tabs availableTabs={['ada', 'c', 'csharp', 'cpp', 'carbon', 'clojure', 'common-lisp', 'crystal', 'd', 'dart', 'eiffel', 'elixir', 'elm', 'erlang', 'fsharp', 'fortran', 'gleam', 'go', 'groovy', 'haskell', 'haxe', 'idris', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'lua', 'matlab', 'mercury', 'mojo', 'nim', 'objective-c', 'object-pascal', 'ocaml', 'octave', 'odin', 'perl', 'php', 'prolog', 'purescript', 'python', 'r', 'racket', 'roc', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'vbnet', 'v', 'wolfram-language', 'zig']}>
<TabItem value="ada" label="Ada">

```ada
-- Arithmetic operators
a : Integer := 10;
b : Integer := 3;
sum : Integer := a + b;      -- Addition: 13
diff : Integer := a - b;     -- Subtraction: 7
prod : Integer := a * b;     -- Multiplication: 30
quot : Integer := a / b;     -- Division: 3
rem : Integer := a rem b;    -- Remainder: 1
mod_val : Integer := a mod b; -- Modulo: 1
neg : Integer := -a;         -- Prefix unary minus: -10
```

**Special features:**
- Supports `rem` (remainder) and `mod` (modulo) with different semantics for negative numbers
- Division of integer values results in integer (truncated)

**Further reading:**
- [Ada Reference Manual - Operators](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-4-5.html)

</TabItem>
<TabItem value="c" label="C">

```c
// Arithmetic operators
int a = 10;
int b = 3;
int sum = a + b;      // Addition: 13
int diff = a - b;     // Subtraction: 7
int prod = a * b;     // Multiplication: 30
int quot = a / b;     // Division: 3 (Integer division)
int rem = a % b;      // Modulo: 1
int neg = -a;         // Prefix unary minus: -10
```

**Special features:**
- Integer division truncates (no rounding)
- Modulo operator `%` for remainder in division
- Unary minus as prefix operator

**Further reading:**
- [C Standard - Arithmetic operators](https://en.cppreference.com/w/c/language/operator_arithmetic)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Arithmetic operators
int a = 10;
int b = 3;
int sum = a + b;      // Addition: 13
int diff = a - b;     // Subtraction: 7
int prod = a * b;     // Multiplication: 30
int quot = a / b;     // Division: 3 (Integer division)
int rem = a % b;      // Modulo: 1
int neg = -a;         // Prefix unary minus: -10
```

**Special features:**
- Integer division truncates (no rounding)
- Modulo operator `%` for remainder in division
- Unary minus as prefix operator

**Further reading:**
- [Microsoft C# Documentation - Arithmetic operators](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/arithmetic-operators)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Arithmetic operators
int a = 10;
int b = 3;
int sum = a + b;      // Addition: 13
int diff = a - b;     // Subtraction: 7
int prod = a * b;     // Multiplication: 30
int quot = a / b;     // Division: 3 (Integer division)
int rem = a % b;      // Modulo: 1
int neg = -a;         // Prefix unary minus: -10
```

**Special features:**
- Integer division truncates (no rounding)
- Modulo operator `%` for remainder in division
- Unary minus as prefix operator

**Further reading:**
- [cppreference.com - Arithmetic operators](https://en.cppreference.com/w/cpp/language/operator_arithmetic)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Arithmetic operators
var a: i32 = 10;
var b: i32 = 3;
var sum: i32 = a + b;      // Addition: 13
var diff: i32 = a - b;     // Subtraction: 7
var prod: i32 = a * b;     // Multiplication: 30
var quot: i32 = a / b;     // Division: 3 (Integer division)
var rem: i32 = a % b;      // Modulo: 1
var neg: i32 = -a;         // Prefix unary minus: -10
```

**Special features:**
- Experimental language, syntax may still change
- C++-like syntax with modern features

**Further reading:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Arithmetic operators
(def a 10)
(def b 3)
(def sum (+ a b))      ; Addition: 13
(def diff (- a b))     ; Subtraction: 7
(def prod (* a b))     ; Multiplication: 30
(def quot (/ a b))     ; Division: 10/3 (Ratio)
(def rem (rem a b))    ; Remainder: 1
(def mod-val (mod a b)) ; Modulo: 1
(def neg (- a))        ; Prefix unary minus: -10
```

**Special features:**
- Arithmetic operators are functions in prefix notation
- Division of integer values results in Ratio type (e.g., `10/3`), not Float
- `rem` and `mod` have different semantics for negative numbers

**Further reading:**
- [Clojure Documentation - Arithmetic](https://clojure.org/reference/reader#_literals)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Arithmetic operators
(let ((a 10)
      (b 3))
  (let ((sum (+ a b))      ; Addition: 13
        (diff (- a b))     ; Subtraction: 7
        (prod (* a b))     ; Multiplication: 30
        (quot (/ a b))     ; Division: 10/3 (Ratio)
        (rem (rem a b))    ; Remainder: 1
        (mod-val (mod a b)) ; Modulo: 1
        (neg (- a)))       ; Prefix unary minus: -10
    (list sum diff prod quot rem mod-val neg)))
```

**Special features:**
- Arithmetic operators are functions in prefix notation
- Division of integer values results in Ratio type, not Float
- `rem` and `mod` have different semantics for negative numbers

**Further reading:**
- [Common Lisp HyperSpec - Arithmetic Operations](http://www.lispworks.com/documentation/HyperSpec/Body/f_arithmetic_operators.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Arithmetic operators
a = 10
b = 3
sum = a + b      # Addition: 13
diff = a - b     # Subtraction: 7
prod = a * b     # Multiplication: 30
quot = a / b     # Division: 3 (Integer division)
rem = a % b      # Modulo: 1
neg = -a         # Prefix unary minus: -10
```

**Special features:**
- Integer division truncates (no rounding)
- Modulo operator `%` for remainder in division
- Unary minus as prefix operator

**Further reading:**
- [Crystal Documentation - Operators](https://crystal-lang.org/reference/1.11/syntax_and_semantics/operators.html)

</TabItem>
<TabItem value="d" label="D">

```d
// Arithmetic operators
int a = 10;
int b = 3;
int sum = a + b;      // Addition: 13
int diff = a - b;     // Subtraction: 7
int prod = a * b;     // Multiplication: 30
int quot = a / b;     // Division: 3 (Integer division)
int rem = a % b;      // Modulo: 1
int neg = -a;         // Prefix unary minus: -10
```

**Special features:**
- Integer division truncates (no rounding)
- Modulo operator `%` for remainder in division
- Unary minus as prefix operator

**Further reading:**
- [D Language Specification - Arithmetic Operators](https://dlang.org/spec/expression.html#arithmetic)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Arithmetic operators
int a = 10;
int b = 3;
int sum = a + b;      // Addition: 13
int diff = a - b;     // Subtraction: 7
int prod = a * b;     // Multiplication: 30
int quot = a ~/ b;    // Integer division: 3
int rem = a % b;      // Modulo: 1
int neg = -a;         // Prefix unary minus: -10
```

**Special features:**
- `~/` for integer division (truncating division)
- Normal division `/` always results in Double
- Modulo operator `%` for remainder in division

**Further reading:**
- [Dart Language Tour - Arithmetic operators](https://dart.dev/guides/language/language-tour#arithmetic-operators)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
-- Arithmetic operators
a: INTEGER := 10
b: INTEGER := 3
sum: INTEGER := a + b      -- Addition: 13
diff: INTEGER := a - b      -- Subtraction: 7
prod: INTEGER := a * b      -- Multiplication: 30
quot: INTEGER := a // b     -- Integer division: 3
rem: INTEGER := a \\ b      -- Modulo: 1
neg: INTEGER := -a          -- Prefix unary minus: -10
```

**Special features:**
- `//` for integer division
- `\\` for modulo operator
- Unary minus as prefix operator

**Further reading:**
- [Eiffel Documentation - Operators](https://www.eiffel.org/doc/eiffel/Language_Reference_Manual)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Arithmetic operators
a = 10
b = 3
sum = a + b      # Addition: 13
diff = a - b     # Subtraction: 7
prod = a * b     # Multiplication: 30
quot = div(a, b) # Integer division: 3
rem = rem(a, b)  # Remainder: 1
neg = -a         # Prefix unary minus: -10
```

**Special features:**
- `div/2` function for integer division
- `rem/2` function for remainder in division
- Unary minus as prefix operator

**Further reading:**
- [Elixir Documentation - Basic operators](https://hexdocs.pm/elixir/operators.html)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Arithmetic operators
a = 10
b = 3
sum = a + b      -- Addition: 13
diff = a - b     -- Subtraction: 7
prod = a * b     -- Multiplication: 30
quot = a // b    -- Integer division: 3
rem = modBy b a  -- Modulo: 1
neg = -a         -- Prefix unary minus: -10
```

**Special features:**
- `//` for integer division
- `modBy` function for modulo (modBy divisor dividend)
- Unary minus as prefix operator

**Further reading:**
- [Elm Documentation - Basics](https://guide.elm-lang.org/core_language.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% Arithmetic operators
A = 10,
B = 3,
Sum = A + B,      % Addition: 13
Diff = A - B,     % Subtraction: 7
Prod = A * B,     % Multiplication: 30
Quot = A div B,   % Integer division: 3
Rem = A rem B,    % Remainder: 1
Neg = -A.         % Prefix unary minus: -10
```

**Special features:**
- `div` for integer division
- `rem` for remainder in division
- Unary minus as prefix operator

**Further reading:**
- [Erlang Documentation - Arithmetic Expressions](https://www.erlang.org/doc/reference_manual/expressions.html#arithmetic-expressions)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Arithmetic operators
let a = 10
let b = 3
let sum = a + b      // Addition: 13
let diff = a - b     // Subtraktion: 7
let prod = a * b     // Multiplication: 30
let quot = a / b     // Division: 3 (Integer-Division)
let rem = a % b      // Modulo: 1
let neg = -a         // Prefix unary minus: -10
```

**Special features:**
- Integer division truncates (no rounding)
- Modulo operator `%` for remainder in division
- Unary minus as prefix operator

**Further reading:**
- [F# Documentation - Arithmetic Operators](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/symbol-and-operator-reference/arithmetic-operators)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Arithmetic operators
integer :: a = 10
integer :: b = 3
integer :: sum, diff, prod, quot, rem, neg
sum = a + b      ! Addition: 13
diff = a - b     ! Subtraction: 7
prod = a * b     ! Multiplication: 30
quot = a / b     ! Division: 3 (Integer division)
rem = mod(a, b)  ! Modulo: 1
neg = -a         ! Prefix unary minus: -10
```

**Special features:**
- Integer division truncates (no rounding)
- `mod` function for modulo
- Unary minus as prefix operator

**Further reading:**
- [Fortran Standard - Arithmetic operations](https://gcc.gnu.org/onlinedocs/gfortran/Arithmetic-operators.html)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// Arithmetic operators (separate for Int and Float)
let a = 10
let b = 3
let sum = a + b      // Int addition: 13
let diff = a - b     // Int subtraction: 7
let prod = a * b     // Int multiplication: 30
let quot = a / b     // Int division: 3 (rounded down)
let rem = a % b      // Int modulo: 1

// Float operators end with .
let x = 10.0
let y = 3.0
let fsum = x +. y    // Float addition: 13.0
let fdiv = x /. y    // Float division: 3.333...
```

**Special features:**
- Separate operators for Int (`+`, `-`, `*`, `/`, `%`) and Float (`+.`, `-.`, `*.`, `/.`)
- No automatic conversion between Int and Float
- Integer division is rounded down

**Further reading:**
- [Gleam Documentation - Ints](https://tour.gleam.run/data-types/ints/)

</TabItem>
<TabItem value="go" label="Go">

```go
// Arithmetic operators
a := 10
b := 3
sum := a + b      // Addition: 13
diff := a - b     // Subtraktion: 7
prod := a * b     // Multiplication: 30
quot := a / b     // Division: 3 (Integer-Division)
rem := a % b      // Modulo: 1
neg := -a         // Prefix unary minus: -10
```

**Special features:**
- Integer division truncates (no rounding)
- Modulo operator `%` for remainder in division
- Unary minus as prefix operator

**Further reading:**
- [Go Documentation - Arithmetic operators](https://go.dev/ref/spec#Arithmetic_operators)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Arithmetic operators
def a = 10
def b = 3
def sum = a + b          // Addition: 13
def diff = a - b         // Subtraction: 7
def prod = a * b         // Multiplication: 30
def quot = a / b         // Division: 3.3333333333 (BigDecimal)
def intQuot = a.intdiv(b) // Integer division: 3
def rem = a % b          // Modulo: 1
def neg = -a             // Prefix unary minus: -10
```

**Special features:**
- Division `/` results in BigDecimal (not integer division like in Java)
- `intdiv()` for integer division
- Modulo operator `%` for remainder
- Power-Operator `**` verfügbar (`2**10` = 1024)

**Further reading:**
- [Groovy Documentation - Arithmetic Operators](https://groovy-lang.org/operators.html#_arithmetic_operators)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Arithmetic operators
a = 10
b = 3
sum = a + b      -- Addition: 13
diff = a - b     -- Subtraction: 7
prod = a * b     -- Multiplication: 30
quot = a `div` b -- Integer-Division: 3
rem = a `mod` b  -- Modulo: 1
neg = -a         -- Prefix unary minus: -10
```

**Special features:**
- `div` for integer division (rounds toward negative infinity)
- `mod` for modulo
- `quot` and `rem` for truncating division (rounds toward zero)
- Unary minus as prefix operator

**Further reading:**
- [Haskell Documentation - Arithmetic operators](https://www.haskell.org/onlinereport/haskell2010/haskellch6.html#x13-1210006.4)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Arithmetic operators
var a = 10;
var b = 3;
var sum = a + b;      // Addition: 13
var diff = a - b;     // Subtraktion: 7
var prod = a * b;     // Multiplication: 30
var quot = Std.int(a / b); // Integer division: 3
var rem = a % b;      // Modulo: 1
var neg = -a;         // Prefix unary minus: -10
```

**Special features:**
- Normal division `/` results in Float
- `Std.int()` for integer division
- Modulo operator `%` for remainder in division

**Further reading:**
- [Haxe Documentation - Operators](https://haxe.org/manual/expression-operators.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Arithmetic operators
a : Int
a = 10
b : Int
b = 3
sum : Int
sum = a + b      -- Addition: 13
diff : Int
diff = a - b     -- Subtraction: 7
prod : Int
prod = a * b     -- Multiplication: 30
quot : Int
quot = a `div` b -- Integer-Division: 3
rem : Int
rem = a `mod` b  -- Modulo: 1
neg : Int
neg = -a         -- Prefix unary minus: -10
```

**Special features:**
- `div` for integer division
- `mod` for modulo
- Unary minus as prefix operator

**Further reading:**
- [Idris 2 Documentation - Interfaces](https://idris2.readthedocs.io/en/latest/tutorial/interfaces.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Arithmetic operators
int a = 10;
int b = 3;
int sum = a + b;      // Addition: 13
int diff = a - b;     // Subtraction: 7
int prod = a * b;     // Multiplication: 30
int quot = a / b;     // Division: 3 (Integer division)
int rem = a % b;      // Modulo: 1
int neg = -a;         // Prefix unary minus: -10
```

**Special features:**
- Integer division truncates (no rounding)
- Modulo operator `%` for remainder in division
- Unary minus as prefix operator

**Further reading:**
- [Oracle Java Documentation - Arithmetic Operators](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/op1.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Arithmetic operators
let a = 10;
let b = 3;
let sum = a + b;      // Addition: 13
let diff = a - b;     // Subtraktion: 7
let prod = a * b;     // Multiplication: 30
let quot = Math.floor(a / b); // Integer-Division: 3
let rem = a % b;      // Modulo: 1
let neg = -a;         // Prefix unary minus: -10
```

**Special features:**
- Normal division `/` always results in Number (Float)
- `Math.floor()` für Integer-Division
- Modulo operator `%` for remainder in division

**Further reading:**
- [MDN Web Docs - Arithmetic operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#arithmetic_operators)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Arithmetic operators
a = 10
b = 3
sum = a + b      # Addition: 13
diff = a - b     # Subtraction: 7
prod = a * b     # Multiplication: 30
quot = a ÷ b     # Integer division: 3
rem = a % b      # Modulo: 1
neg = -a         # Prefix unary minus: -10
```

**Special features:**
- `÷` for integer division (Unicode operator)
- Modulo operator `%` for remainder in division
- Unary minus as prefix operator

**Further reading:**
- [Julia Documentation - Arithmetic Operators](https://docs.julialang.org/en/v1/manual/mathematical-operations/#Arithmetic-Operators)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Arithmetic operators
val a = 10
val b = 3
val sum = a + b      // Addition: 13
val diff = a - b     // Subtraktion: 7
val prod = a * b     // Multiplication: 30
val quot = a / b     // Integer division: 3
val rem = a % b      // Modulo: 1
val neg = -a         // Prefix unary minus: -10
```

**Special features:**
- Standard infix operators `+`, `-`, `*`, `/`, `%`
- `/` for integer division with integer operands
- Unary minus as prefix operator

**Further reading:**
- [Koka Language Guide - Expressions](https://koka-lang.github.io/koka/doc/book.html#sec-expressions)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Arithmetic operators
def a : Int := 10
def b : Int := 3
#eval a + b      -- Addition: 13
#eval a - b      -- Subtraction: 7
#eval a * b      -- Multiplication: 30
#eval a / b      -- Division: 3 (Integer division)
#eval a % b      -- Modulo: 1
#eval -a         -- Prefix unary minus: -10
```

**Special features:**
- Arithmetische Operatoren über Typklassen (`Add`, `Sub`, `Mul`, `Div`, `Mod`)
- Integer division truncates (Truncation)
- `Nat` type has natural subtraction (minimum is 0)

**Further reading:**
- [Lean 4 – Functional Programming in Lean 4](https://lean-lang.org/functional_programming_in_lean/)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Arithmetic operators
val a = 10
val b = 3
val sum = a + b      // Addition: 13
val diff = a - b     // Subtraktion: 7
val prod = a * b     // Multiplication: 30
val quot = a / b     // Division: 3 (Integer-Division)
val rem = a % b      // Modulo: 1
val neg = -a         // Prefix unary minus: -10
```

**Special features:**
- Integer division truncates (no rounding)
- Modulo operator `%` for remainder in division (since Kotlin 1.1)
- Unary minus as prefix operator

**Further reading:**
- [Kotlin Documentation - Arithmetic operations](https://kotlinlang.org/docs/numbers.html#arithmetic-operations)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Arithmetic operators
local a = 10
local b = 3
local sum = a + b      -- Addition: 13
local diff = a - b     -- Subtraction: 7
local prod = a * b     -- Multiplication: 30
local quot = a // b    -- Integer division: 3 (since Lua 5.3)
local rem = a % b      -- Modulo: 1
local neg = -a         -- Prefix unary minus: -10
```

**Special features:**
- `//` for integer division (since Lua 5.3)
- Modulo operator `%` for remainder in division
- Unary minus as prefix operator

**Further reading:**
- [Lua Documentation - Arithmetic Operators](https://www.lua.org/manual/5.4/manual.html#3.4.1)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% Arithmetic operators
a = 10;
b = 3;
sum_val = a + b;       % Addition: 13
diff = a - b;          % Subtraction: 7
prod = a * b;          % Multiplication: 30
quot = floor(a / b);   % Integer division: 3
rem_val = mod(a, b);   % Modulo: 1
neg = -a;              % Prefix unary minus: -10
```

**Special features:**
- Normal division `/` results in Float
- `floor(a / b)` for integer division with double values
- `idivide()` for integer division with integer types
- `mod()` function for modulo

**Further reading:**
- [MATLAB Documentation - Arithmetic Operations](https://www.mathworks.com/help/matlab/arithmetic.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Arithmetic operators
A = 10,
B = 3,
Sum = A + B,       % Addition: 13
Diff = A - B,      % Subtraction: 7
Prod = A * B,      % Multiplication: 30
Quot = A // B,     % Integer division: 3
Mod = A mod B,     % Modulo: 1
Neg = -A           % Prefix unary minus: -10
```

**Special features:**
- Arithmetic operators are functions — expressions are evaluated directly (no `is/2` as in Prolog)
- `//` for integer division (truncation toward zero), `div` for floor division
- `mod` for modulo (related to `div`), `rem` for remainder (related to `//`)
- `**` for exponentiation (e.g., `X = 2 ** 10` results in 1024)

**Further reading:**
- [Mercury Library Reference - int](https://www.mercurylang.org/information/doc-latest/mercury_library/int.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# Arithmetic operators
var a: Int = 10
var b: Int = 3
var sum = a + b      # Addition: 13
var diff = a - b     # Subtraction: 7
var prod = a * b     # Multiplication: 30
var quot = a // b    # Integer division: 3
var rem = a % b      # Modulo: 1
var neg = -a         # Prefix unary minus: -10
```

**Special features:**
- `//` for integer division
- Modulo operator `%` for remainder in division
- Unary minus as prefix operator

**Further reading:**
- [Mojo Documentation](https://docs.modular.com/mojo/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Arithmetic operators
var a = 10
var b = 3
var sum = a + b      # Addition: 13
var diff = a - b     # Subtraction: 7
var prod = a * b     # Multiplication: 30
var quot = a div b   # Integer division: 3
var rem = a mod b    # Modulo: 1
var neg = -a         # Prefix unary minus: -10
```

**Special features:**
- `div` for integer division
- `mod` for modulo
- Unary minus as prefix operator

**Further reading:**
- [Nim Documentation - Operators](https://nim-lang.org/docs/manual.html#expressions-and-statements)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Arithmetic operators
int a = 10;
int b = 3;
int sum = a + b;      // Addition: 13
int diff = a - b;     // Subtraction: 7
int prod = a * b;     // Multiplication: 30
int quot = a / b;     // Division: 3 (Integer division)
int rem = a % b;      // Modulo: 1
int neg = -a;         // Prefix unary minus: -10
```

**Special features:**
- Integer division truncates (no rounding)
- Modulo operator `%` for remainder in division
- Unary minus as prefix operator

**Further reading:**
- [Apple Developer Documentation - Operators](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/FoundationTypesandCollections/FoundationTypesandCollections.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Arithmetic operators
var
  a, b: Integer;
  sum, diff, prod, quot, rem, neg: Integer;
begin
  a := 10;
  b := 3;
  sum := a + b;      // Addition: 13
  diff := a - b;     // Subtraction: 7
  prod := a * b;     // Multiplication: 30
  quot := a div b;   // Integer division: 3
  rem := a mod b;    // Modulo: 1
  neg := -a;         // Prefix unary minus: -10
end;
```

**Special features:**
- `div` for integer division
- `mod` for modulo
- Unary minus as prefix operator

**Further reading:**
- [Delphi Documentation - Arithmetic operators](https://docwiki.embarcadero.com/RADStudio/Alexandria/en/Arithmetic_Operators)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Arithmetic operators *)
let a = 10
let b = 3
let sum = a + b      (* Addition: 13 *)
let diff = a - b     (* Subtraction: 7 *)
let prod = a * b     (* Multiplication: 30 *)
let quot = a / b     (* Integer division: 3 *)
let rem = a mod b    (* Modulo: 1 *)
let neg = -a         (* Prefix unary minus: -10 *)
```

**Special features:**
- Integer division truncates (no rounding)
- `mod` for modulo
- Unary minus as prefix operator

**Further reading:**
- [OCaml Documentation - Arithmetic operations](https://v2.ocaml.org/manual/expr.html#ss:arithmetic)

</TabItem>
<TabItem value="octave" label="Octave">

```matlab
% Arithmetic operators
a = 10;
b = 3;
sum = a + b;      % Addition: 13
diff = a - b;     % Subtraction: 7
prod = a * b;     % Multiplication: 30
quot = idivide(a, b); % Integer division: 3
rem = mod(a, b);  % Modulo: 1
neg = -a;         % Prefix unary minus: -10
```

**Special features:**
- Normal division `/` results in Float
- `idivide()` for integer division
- `mod()` function for modulo

**Further reading:**
- [GNU Octave Documentation - Arithmetic Operators](https://octave.org/doc/v8.1.0/Arithmetic-Ops.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Arithmetic operators
a :: 10
b :: 3
sum :: a + b      // Addition: 13
diff :: a - b     // Subtraction: 7
prod :: a * b     // Multiplication: 30
quot :: a / b     // Division: 3 (Integer division)
rem :: a % b      // Modulo: 1
neg :: -a         // Prefix unary minus: -10
```

**Special features:**
- Integer division truncates (no rounding)
- Modulo operator `%` for remainder in division
- Unary minus as prefix operator

**Further reading:**
- [Odin Documentation - Operators](https://odin-lang.org/docs/overview/#operators)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Arithmetic operators
my $a = 10;
my $b = 3;
my $sum = $a + $b;      # Addition: 13
my $diff = $a - $b;     # Subtraction: 7
my $prod = $a * $b;     # Multiplication: 30
my $quot = int($a / $b); # Integer division: 3
my $rem = $a % $b;      # Modulo: 1
my $neg = -$a;          # Prefix unary minus: -10
```

**Special features:**
- Normal division `/` results in Float
- `int()` for integer division
- Modulo operator `%` for remainder in division

**Further reading:**
- [Perl Documentation - Arithmetic Operators](https://perldoc.perl.org/perlop#Arithmetic-Operators)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
// Arithmetic operators
$a = 10;
$b = 3;
$sum = $a + $b;         // Addition: 13
$diff = $a - $b;        // Subtraction: 7
$prod = $a * $b;        // Multiplication: 30
$quot = intdiv($a, $b); // Integer division: 3 (since PHP 7.0)
$rem = $a % $b;         // Modulo: 1
$neg = -$a;             // Prefix unary minus: -10
$exp = $a ** $b;        // Exponentiation: 1000 (since PHP 5.6)
?>
```

**Special features:**
- Normal division `/` results in Float for non-integer results
- `intdiv()` for integer division (since PHP 7.0)
- `**` exponentiation operator (since PHP 5.6)
- Modulo operator `%` for remainder in division

**Further reading:**
- [PHP Documentation - Arithmetic Operators](https://www.php.net/manual/en/language.operators.arithmetic.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Arithmetic operators (evaluation with is/2)
A = 10,
B = 3,
Sum is A + B,      % Addition: 13
Diff is A - B,     % Subtraction: 7
Prod is A * B,     % Multiplication: 30
Quot is A / B,     % Division: 3.3333...
IDiv is A // B,    % Integer division: 3
Mod is A mod B,    % Modulo: 1
Neg is -A.         % Prefix unary minus: -10
```

**Special features:**
- Arithmetic evaluation occurs exclusively via `is/2` — without `is`, expressions remain unevaluated
- `//` for integer division, `/` for floating-point division
- `mod` for modulo, `rem` for remainder (different behavior with negative numbers)
- `**` for exponentiation (e.g., `X is 2 ** 10` results in 1024)

**Further reading:**
- [SWI-Prolog Documentation - Arithmetic](https://www.swi-prolog.org/pldoc/man?section=arith)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Arithmetic operators
a = 10
b = 3
sum = a + b      -- Addition: 13
diff = a - b     -- Subtraction: 7
prod = a * b     -- Multiplication: 30
quot = a `div` b -- Integer-Division: 3
rem = a `mod` b  -- Modulo: 1
neg = -a         -- Prefix unary minus: -10
```

**Special features:**
- `div` for integer division
- `mod` for modulo
- Unary minus as prefix operator

**Further reading:**
- [PureScript Documentation - Operators](https://github.com/purescript/documentation/blob/master/language/Operators.md)

</TabItem>
<TabItem value="python" label="Python">

```python
# Arithmetic operators
a = 10
b = 3
sum = a + b      # Addition: 13
diff = a - b     # Subtraction: 7
prod = a * b     # Multiplication: 30
quot = a // b    # Integer division: 3
rem = a % b      # Modulo: 1
neg = -a         # Prefix unary minus: -10
```

**Special features:**
- `//` for integer division (floor division)
- Modulo operator `%` for remainder in division
- Unary minus as prefix operator

**Further reading:**
- [Python Documentation - Numeric Types](https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex)

</TabItem>
<TabItem value="r" label="R">

```r
# Arithmetic operators
a <- 10
b <- 3
sum <- a + b      # Addition: 13
diff <- a - b     # Subtraction: 7
prod <- a * b     # Multiplication: 30
quot <- a %/% b   # Integer division: 3
rem <- a %% b     # Modulo: 1
neg <- -a         # Prefix unary minus: -10
```

**Special features:**
- `%/%` for integer division
- `%%` for modulo
- Unary minus as prefix operator

**Further reading:**
- [R Documentation - Arithmetic operators](https://stat.ethz.ch/R-manual/R-devel/library/base/html/Arithmetic.html)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
;; Arithmetic operators
(define a 10)
(define b 3)
(define sum (+ a b))      ; Addition: 13
(define diff (- a b))     ; Subtraktion: 7
(define prod (* a b))     ; Multiplication: 30
(define quot (quotient a b)) ; Integer-Division: 3
(define rem (remainder a b)) ; Rest: 1
(define neg (- a))        ; Prefix unary minus: -10
```

**Special features:**
- Arithmetic operators are functions in prefix notation
- `quotient` für Integer-Division
- `remainder` für Rest bei Division

**Further reading:**
- [Racket Documentation - Arithmetic](https://docs.racket-lang.org/reference/generic-numbers.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Arithmetic operators
a = 10
b = 3
sum = a + b        -- Addition: 13
diff = a - b       -- Subtraction: 7
prod = a * b       -- Multiplication: 30
division = Num.divTrunc a b  -- Integer division: 3
remainder = Num.rem a b      -- Remainder: 1
neg = Num.neg a    -- Negation: -10
```

**Special features:**
- `Num.divTrunc` for integer division
- `Num.rem` for remainder in division
- `Num.neg` or `-` as prefix for negation

**Further reading:**
- [Roc Documentation - Num](https://www.roc-lang.org/builtins/Num)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Arithmetic operators
a = 10
b = 3
sum = a + b      # Addition: 13
diff = a - b     # Subtraction: 7
prod = a * b     # Multiplication: 30
quot = a / b     # Division: 3 (Integer division with integer types)
rem = a % b      # Modulo: 1
neg = -a         # Prefix unary minus: -10
```

**Special features:**
- Integer division truncates (no rounding)
- Modulo operator `%` for remainder in division
- Unary minus as prefix operator

**Further reading:**
- [Ruby Documentation - Operators](https://docs.ruby-lang.org/en/3.2/syntax/operators_rdoc.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Arithmetic operators
let a = 10;
let b = 3;
let sum = a + b;      // Addition: 13
let diff = a - b;     // Subtraction: 7
let prod = a * b;     // Multiplication: 30
let quot = a / b;     // Division: 3 (Integer division)
let rem = a % b;      // Modulo: 1
let neg = -a;         // Prefix unary minus: -10
```

**Special features:**
- Integer division truncates (no rounding)
- Modulo operator `%` for remainder in division
- Unary minus as prefix operator

**Further reading:**
- [Rust Documentation - Arithmetic operators](https://doc.rust-lang.org/book/ch03-02-data-types.html#integer-types)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Arithmetic operators
val a = 10
val b = 3
val sum = a + b      // Addition: 13
val diff = a - b     // Subtraktion: 7
val prod = a * b     // Multiplication: 30
val quot = a / b     // Division: 3 (Integer-Division)
val rem = a % b      // Modulo: 1
val neg = -a         // Prefix unary minus: -10
```

**Special features:**
- Integer division truncates (no rounding)
- Modulo operator `%` for remainder in division
- Unary minus as prefix operator

**Further reading:**
- [Scala Documentation - Arithmetic operations](https://docs.scala-lang.org/tour/operators.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; Arithmetic operators
(define a 10)
(define b 3)
(define sum (+ a b))      ; Addition: 13
(define diff (- a b))     ; Subtraktion: 7
(define prod (* a b))     ; Multiplication: 30
(define quot (quotient a b)) ; Integer-Division: 3
(define rem (remainder a b)) ; Rest: 1
(define neg (- a))        ; Prefix unary minus: -10
```

**Special features:**
- Arithmetic operators are functions in prefix notation
- `quotient` für Integer-Division
- `remainder` für Rest bei Division

**Further reading:**
- [R7RS Scheme Specification - Arithmetic operations](https://small.r7rs.org/attachment/r7rs.pdf)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Arithmetic operators
let a = 10
let b = 3
let sum = a + b      // Addition: 13
let diff = a - b     // Subtraktion: 7
let prod = a * b     // Multiplication: 30
let quot = a / b     // Division: 3 (Integer-Division)
let rem = a % b      // Modulo: 1
let neg = -a         // Prefix unary minus: -10
```

**Special features:**
- Integer division truncates (no rounding)
- Modulo operator `%` for remainder in division
- Unary minus as prefix operator

**Further reading:**
- [Swift Documentation - Basic Operators](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/basicoperators/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Arithmetic operators
let a = 10;
let b = 3;
let sum = a + b;      // Addition: 13
let diff = a - b;     // Subtraktion: 7
let prod = a * b;     // Multiplication: 30
let quot = Math.floor(a / b); // Integer-Division: 3
let rem = a % b;      // Modulo: 1
let neg = -a;         // Prefix unary minus: -10
```

**Special features:**
- Normal division `/` always results in Number (Float)
- `Math.floor()` für Integer-Division
- Modulo operator `%` for remainder in division

**Further reading:**
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Arithmetic operators
Dim a As Integer = 10
Dim b As Integer = 3
Dim sum As Integer = a + b      ' Addition: 13
Dim diff As Integer = a - b      ' Subtraction: 7
Dim prod As Integer = a * b      ' Multiplication: 30
Dim quot As Integer = a \ b      ' Integer-Division: 3
Dim rem As Integer = a Mod b    ' Modulo: 1
Dim neg As Integer = -a          ' Prefix unary minus: -10
```

**Special features:**
- `\` für Integer-Division
- `Mod` für Modulo
- Unary minus as prefix operator

**Further reading:**
- [Microsoft VB.NET Documentation - Arithmetic Operators](https://learn.microsoft.com/en-us/dotnet/visual-basic/language-reference/operators/arithmetic-operators)

</TabItem>
<TabItem value="v" label="V">

```v
// Arithmetic operators
a := 10
b := 3
sum := a + b      // Addition: 13
diff := a - b     // Subtraktion: 7
prod := a * b     // Multiplication: 30
quot := a / b     // Division: 3 (Integer-Division)
rem := a % b      // Modulo: 1
neg := -a         // Prefix unary minus: -10
```

**Special features:**
- Integer division truncates (no rounding)
- Modulo operator `%` for remainder in division
- Unary minus as prefix operator

**Further reading:**
- [V Documentation - Operators](https://github.com/vlang/v/blob/master/doc/docs.md)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Arithmetic operators *)
a = 10;
b = 3;
sum = a + b      (* Addition: 13 *)
diff = a - b     (* Subtraktion: 7 *)
prod = a * b     (* Multiplikation: 30 *)
quot = Quotient[a, b] (* Integer-Division: 3 *)
rem = Mod[a, b]  (* Modulo: 1 *)
neg = -a         (* Prefix unary minus: -10 *)
```

**Special features:**
- Normal division `/` results in Rational or Float
- `Quotient[]` für Integer-Division
- `Mod[]` für Modulo

**Further reading:**
- [Wolfram Language Documentation - Arithmetic](https://reference.wolfram.com/language/guide/Arithmetic.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Arithmetic operators
const a: i32 = 10;
const b: i32 = 3;
const sum = a + b;      // Addition: 13
const diff = a - b;     // Subtraktion: 7
const prod = a * b;     // Multiplication: 30
const quot = @divTrunc(a, b); // Integer-Division: 3
const rem = @rem(a, b); // Modulo: 1
const neg = -a;         // Prefix unary minus: -10
```

**Special features:**
- `@divTrunc()` für Integer-Division (truncating)
- `@rem()` für Modulo
- Unary minus as prefix operator

**Further reading:**
- [Zig Documentation - Operators](https://ziglang.org/documentation/0.11.0/#Operators)

</TabItem>
</Tabs>


## 5.1.2. Comparison Operators (Equality, Relational)

Comparison operators for equality (`==`, `!=`) and relational comparisons (`<`, `>`, `<=`, `>=`). Compare values and return boolean results.

### Languages {#sprachen}

<Tabs availableTabs={['ada', 'c', 'csharp', 'cpp', 'carbon', 'clojure', 'common-lisp', 'crystal', 'd', 'dart', 'eiffel', 'elixir', 'elm', 'erlang', 'fsharp', 'fortran', 'gleam', 'go', 'groovy', 'haskell', 'haxe', 'idris', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'lua', 'matlab', 'mercury', 'mojo', 'nim', 'objective-c', 'object-pascal', 'ocaml', 'octave', 'odin', 'perl', 'php', 'prolog', 'purescript', 'python', 'r', 'racket', 'roc', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'vbnet', 'v', 'wolfram-language', 'zig']}>
<TabItem value="ada" label="Ada">

```ada
-- Comparison operators
a : Integer := 10;
b : Integer := 3;
eq : Boolean := a = b;      -- Equality: False
ne : Boolean := a /= b;     -- Ungleichheit: True
lt : Boolean := a < b;      -- Less than: False
gt : Boolean := a > b;      -- Greater than: True
le : Boolean := a <= b;     -- Kleiner oder gleich: False
ge : Boolean := a >= b;     -- Größer oder gleich: True
```

**Special features:**
- `=` for equality, `/=` for inequality
- All operators return Boolean

**Further reading:**
- [Ada Reference Manual - Relational Operators](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-4-5-2.html)

</TabItem>
<TabItem value="c" label="C">

```c
// Comparison operators
int a = 10;
int b = 3;
int eq = (a == b);      // Gleichheit: 0 (false)
int ne = (a != b);      // Ungleichheit: 1 (true)
int lt = (a < b);       // Kleiner als: 0 (false)
int gt = (a > b);       // Größer als: 1 (true)
int le = (a <= b);      // Kleiner oder gleich: 0 (false)
int ge = (a >= b);      // Größer oder gleich: 1 (true)
```

**Special features:**
- Comparison operators return `int` (0 for false, 1 for true)
- `==` for equality, `!=` for inequality

**Further reading:**
- [C Standard - Relational operators](https://en.cppreference.com/w/c/language/operator_comparison)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Comparison operators
int a = 10;
int b = 3;
bool eq = a == b;      // Equality: false
bool ne = a != b;      // Inequality: true
bool lt = a < b;       // Less than: false
bool gt = a > b;       // Greater than: true
bool le = a <= b;      // Less than or equal: false
bool ge = a >= b;      // Greater than or equal: true
```

**Special features:**
- All operators return `bool`
- `==` for equality, `!=` for inequality

**Further reading:**
- [Microsoft C# Documentation - Comparison operators](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/comparison-operators)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Comparison operators
int a = 10;
int b = 3;
bool eq = a == b;      // Equality: false
bool ne = a != b;      // Inequality: true
bool lt = a < b;       // Less than: false
bool gt = a > b;       // Greater than: true
bool le = a <= b;      // Less than or equal: false
bool ge = a >= b;      // Greater than or equal: true
```

**Special features:**
- All operators return `bool`
- `==` for equality, `!=` for inequality

**Further reading:**
- [cppreference.com - Comparison operators](https://en.cppreference.com/w/cpp/language/operator_comparison)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Comparison operators
var a: i32 = 10;
var b: i32 = 3;
var eq: bool = a == b;      // Equality: false
var ne: bool = a != b;      // Inequality: true
var lt: bool = a < b;       // Less than: false
var gt: bool = a > b;       // Greater than: true
var le: bool = a <= b;      // Less than or equal: false
var ge: bool = a >= b;      // Greater than or equal: true
```

**Special features:**
- Experimental language, syntax may still change
- Alle Operatoren geben `bool` zurück

**Further reading:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Comparison operators
(def a 10)
(def b 3)
(def eq (= a b))      ; Equality: false
(def ne (not= a b))   ; Ungleichheit: true
(def lt (< a b))      ; Less than: false
(def gt (> a b))      ; Greater than: true
(def le (<= a b))     ; Kleiner oder gleich: false
(def ge (>= a b))     ; Größer oder gleich: true
```

**Special features:**
- Comparison operators are functions in prefix notation
- All return Boolean
- `=` for equality, `not=` for inequality

**Further reading:**
- [Clojure Documentation - Equality](https://clojure.org/guides/equality)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Comparison operators
(let ((a 10)
      (b 3))
  (let ((eq (= a b))      ; Gleichheit: nil (false)
        (ne (/= a b))     ; Ungleichheit: t (true)
        (lt (< a b))      ; Kleiner als: nil
        (gt (> a b))      ; Größer als: t
        (le (<= a b))     ; Kleiner oder gleich: nil
        (ge (>= a b)))    ; Größer oder gleich: t
    (list eq ne lt gt le ge)))
```

**Special features:**
- Vergleichsoperatoren sind Funktionen in Prefix-Notation
- `t` for true, `nil` for false
- `=` for equality, `/=` for inequality

**Further reading:**
- [Common Lisp HyperSpec - Comparison Operators](http://www.lispworks.com/documentation/HyperSpec/Body/f_eq_sle.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Comparison operators
a = 10
b = 3
eq = a == b      # Equality: false
ne = a != b      # Inequality: true
lt = a < b       # Less than: false
gt = a > b       # Greater than: true
le = a <= b      # Less than or equal: false
ge = a >= b      # Greater than or equal: true
```

**Special features:**
- All operators return Bool
- `==` for equality, `!=` for inequality

**Further reading:**
- [Crystal Documentation - Operators](https://crystal-lang.org/reference/1.11/syntax_and_semantics/operators.html)

</TabItem>
<TabItem value="d" label="D">

```d
// Comparison operators
int a = 10;
int b = 3;
bool eq = a == b;      // Equality: false
bool ne = a != b;      // Inequality: true
bool lt = a < b;       // Less than: false
bool gt = a > b;       // Greater than: true
bool le = a <= b;      // Less than or equal: false
bool ge = a >= b;      // Greater than or equal: true
```

**Special features:**
- All operators return `bool`
- `==` for equality, `!=` for inequality

**Further reading:**
- [D Language Specification - Comparison Operators](https://dlang.org/spec/expression.html#comparison)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Comparison operators
int a = 10;
int b = 3;
bool eq = a == b;      // Equality: false
bool ne = a != b;      // Inequality: true
bool lt = a < b;       // Less than: false
bool gt = a > b;       // Greater than: true
bool le = a <= b;      // Less than or equal: false
bool ge = a >= b;      // Greater than or equal: true
```

**Special features:**
- All operators return `bool`
- `==` for equality, `!=` for inequality

**Further reading:**
- [Dart Language Tour - Equality and relational operators](https://dart.dev/guides/language/language-tour#equality-and-relational-operators)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
-- Comparison operators
a: INTEGER := 10
b: INTEGER := 3
eq: BOOLEAN := a = b      -- Equality: False
ne: BOOLEAN := a /= b     -- Ungleichheit: True
lt: BOOLEAN := a < b      -- Less than: False
gt: BOOLEAN := a > b      -- Greater than: True
le: BOOLEAN := a <= b     -- Kleiner oder gleich: False
ge: BOOLEAN := a >= b     -- Größer oder gleich: True
```

**Special features:**
- All operators return BOOLEAN
- `=` for equality, `/=` for inequality

**Further reading:**
- [Eiffel Documentation - Operators](https://www.eiffel.org/doc/eiffel/Language_Reference_Manual)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Comparison operators
a = 10
b = 3
eq = a == b      # Equality: false
ne = a != b      # Inequality: true
lt = a < b       # Less than: false
gt = a > b       # Greater than: true
le = a <= b      # Less than or equal: false
ge = a >= b      # Greater than or equal: true
```

**Special features:**
- All operators return Boolean
- `==` für Gleichheit, `!=` für Ungleichheit

**Further reading:**
- [Elixir Documentation - Basic operators](https://hexdocs.pm/elixir/operators.html)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Comparison operators
a = 10
b = 3
eq = a == b      -- Equality: False
ne = a /= b      -- Inequality: True
lt = a < b       -- Less than: False
gt = a > b       -- Greater than: True
le = a <= b      -- Less than or equal: False
ge = a >= b      -- Greater than or equal: True
```

**Special features:**
- Alle Operatoren geben Bool zurück
- `==` for equality, `/=` for inequality

**Further reading:**
- [Elm Documentation - Basics](https://guide.elm-lang.org/core_language.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% Comparison operators
A = 10,
B = 3,
Eq = (A == B),      % Equality: false
Ne = (A =/= B),     % Ungleichheit: true
Lt = (A < B),       % Less than: false
Gt = (A > B),       % Greater than: true
Le = (A =< B),      % Less than or equal: false
Ge = (A >= B).      % Greater than or equal: true
```

**Special features:**
- All operators return Boolean
- `==` for equality, `=/=` for inequality
- `=<` for less than or equal (not `<=`)

**Further reading:**
- [Erlang Documentation - Comparison Operators](https://www.erlang.org/doc/reference_manual/expressions.html#comparison-operators)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Comparison operators
let a = 10
let b = 3
let eq = a = b      // Equality: false
let ne = a <> b     // Ungleichheit: true
let lt = a < b      // Less than: false
let gt = a > b      // Greater than: true
let le = a <= b     // Kleiner oder gleich: false
let ge = a >= b     // Größer oder gleich: true
```

**Special features:**
- Alle Operatoren geben `bool` zurück
- `=` for equality, `<>` for inequality

**Further reading:**
- [F# Documentation - Comparison Operators](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/symbol-and-operator-reference/arithmetic-operators)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Comparison operators
integer :: a = 10
integer :: b = 3
logical :: eq, ne, lt, gt, le, ge
eq = a == b      ! Equality: .false.
ne = a /= b      ! Inequality: .true.
lt = a < b       ! Less than: .false.
gt = a > b       ! Greater than: .true.
le = a <= b      ! Less than or equal: .false.
ge = a >= b      ! Greater than or equal: .true.
```

**Special features:**
- All operators return LOGICAL
- `==` for equality, `/=` for inequality

**Further reading:**
- [Fortran Standard - Relational operators](https://gcc.gnu.org/onlinedocs/gfortran/Relational-operators.html)

</TabItem>
<TabItem value="gleam" label="Gleam">

```erlang
// Comparison operators
let a = 10
let b = 3
let eq = a == b      // Gleichheit: False
let ne = a != b      // Ungleichheit: True
let lt = a < b       // Kleiner als: False
let gt = a > b       // Größer als: True
let le = a <= b      // Kleiner oder gleich: False
let ge = a >= b      // Größer oder gleich: True
```

**Special features:**
- All operators return Bool
- `==` for equality, `!=` for inequality

**Further reading:**
- [Gleam Documentation - Operators](https://gleam.run/documentation/tour/operators/)

</TabItem>
<TabItem value="go" label="Go">

```go
// Comparison operators
a := 10
b := 3
eq := a == b      // Equality: false
ne := a != b      // Inequality: true
lt := a < b       // Less than: false
gt := a > b       // Greater than: true
le := a <= b      // Less than or equal: false
ge := a >= b      // Greater than or equal: true
```

**Special features:**
- All operators return `bool`
- `==` for equality, `!=` for inequality

**Further reading:**
- [Go Documentation - Comparison operators](https://go.dev/ref/spec#Comparison_operators)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Comparison operators
def a = 10
def b = 3
def eq = a == b      // Equality: false
def ne = a != b      // Inequality: true
def lt = a < b       // Less than: false
def gt = a > b       // Greater than: true
def le = a <= b      // Less than or equal: false
def ge = a >= b      // Greater than or equal: true
```

**Special features:**
- All operators return Boolean
- `==` for equality, `!=` for inequality

**Further reading:**
- [Groovy Documentation - Operators](https://groovy-lang.org/operators.html)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Comparison operators
a = 10
b = 3
eq = a == b      -- Equality: False
ne = a /= b      -- Inequality: True
lt = a < b       -- Less than: False
gt = a > b       -- Greater than: True
le = a <= b      -- Less than or equal: False
ge = a >= b      -- Greater than or equal: True
```

**Special features:**
- All operators return Bool
- `==` for equality, `/=` for inequality

**Further reading:**
- [Haskell Documentation - Comparison operators](https://www.haskell.org/onlinereport/haskell2010/haskellch6.html#x13-1210006.4)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Comparison operators
var a = 10;
var b = 3;
var eq = a == b;      // Equality: false
var ne = a != b;      // Inequality: true
var lt = a < b;       // Less than: false
var gt = a > b;       // Greater than: true
var le = a <= b;      // Less than or equal: false
var ge = a >= b;      // Greater than or equal: true
```

**Special features:**
- All operators return Bool
- `==` for equality, `!=` for inequality

**Further reading:**
- [Haxe Documentation - Operators](https://haxe.org/manual/expression-operators.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Comparison operators
a : Int
a = 10
b : Int
b = 3
eq : Bool
eq = a == b      -- Equality: False
ne : Bool
ne = a /= b      -- Inequality: True
lt : Bool
lt = a < b       -- Less than: False
gt : Bool
gt = a > b       -- Greater than: True
le : Bool
le = a <= b      -- Less than or equal: False
ge : Bool
ge = a >= b      -- Greater than or equal: True
```

**Special features:**
- All operators return Bool
- `==` for equality, `/=` for inequality

**Further reading:**
- [Idris 2 Documentation - Interfaces](https://idris2.readthedocs.io/en/latest/tutorial/interfaces.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Comparison operators
int a = 10;
int b = 3;
boolean eq = a == b;      // Equality: false
boolean ne = a != b;      // Inequality: true
boolean lt = a < b;       // Less than: false
boolean gt = a > b;       // Greater than: true
boolean le = a <= b;      // Less than or equal: false
boolean ge = a >= b;      // Greater than or equal: true
```

**Special features:**
- All operators return `boolean`
- `==` for equality, `!=` for inequality

**Further reading:**
- [Oracle Java Documentation - Comparison Operators](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/op2.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Comparison operators
let a = 10;
let b = 3;
let eq = a == b;      // Equality: false (loose equality)
let strictEq = a === b; // Strict equality: false
let ne = a != b;      // Inequality: true (loose inequality)
let strictNe = a !== b; // Strict inequality: true
let lt = a < b;       // Less than: false
let gt = a > b;       // Greater than: true
let le = a <= b;      // Less than or equal: false
let ge = a >= b;      // Greater than or equal: true
```

**Special features:**
- `==` and `!=` perform type conversion (loose equality)
- `===` and `!==` check type and value (strict equality)
- All operators return Boolean

**Further reading:**
- [MDN Web Docs - Comparison operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#comparison_operators)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Comparison operators
a = 10
b = 3
eq = a == b      # Equality: false
ne = a != b      # Inequality: true
lt = a < b       # Less than: false
gt = a > b       # Greater than: true
le = a <= b      # Less than or equal: false
ge = a >= b      # Greater than or equal: true
```

**Special features:**
- All operators return Bool
- `==` for equality, `!=` for inequality

**Further reading:**
- [Julia Documentation - Comparison Operators](https://docs.julialang.org/en/v1/manual/mathematical-operations/#Comparison-Operators)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Comparison operators
val a = 10
val b = 3
val eq = a == b      // Equality: False
val ne = a != b      // Inequality: True
val lt = a < b       // Less than: False
val gt = a > b       // Greater than: True
val le = a <= b      // Less than or equal: False
val ge = a >= b      // Greater than or equal: True
```

**Special features:**
- Standard comparison operators `==`, `!=`, `<`, `>`, `<=`, `>=`
- All operators return `bool`
- Structural equality is standard

**Further reading:**
- [Koka Language Guide - Expressions](https://koka-lang.github.io/koka/doc/book.html#sec-expressions)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Comparison operators
def a := 10
def b := 3
#eval a == b      -- Equality: false
#eval a != b      -- Inequality: true (also ≠)
#eval a < b       -- Less than: false
#eval a > b       -- Greater than: true
#eval a <= b      -- Less than or equal: false (also ≤)
#eval a >= b      -- Greater than or equal: true (also ≥)
```

**Special features:**
- Comparison operators via type classes (`BEq`, `Ord`)
- Unicode alternatives: `≠` for `!=`, `≤` for `<=`, `≥` for `>=`
- `BEq` (boolean equality) for `==`/`!=`, `Ord` for `<`, `>`, `<=`, `>=`

**Further reading:**
- [Lean 4 – Functional Programming in Lean 4](https://lean-lang.org/functional_programming_in_lean/)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Comparison operators
val a = 10
val b = 3
val eq = a == b      // Equality: false
val ne = a != b      // Inequality: true
val lt = a < b       // Less than: false
val gt = a > b       // Greater than: true
val le = a <= b      // Less than or equal: false
val ge = a >= b      // Greater than or equal: true
```

**Special features:**
- All operators return `Boolean`
- `==` for equality, `!=` for inequality

**Further reading:**
- [Kotlin Documentation - Comparison operators](https://kotlinlang.org/docs/equality.html#structural-equality)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Comparison operators
local a = 10
local b = 3
local eq = a == b      -- Equality: false
local ne = a ~= b      -- Inequality: true
local lt = a < b       -- Less than: false
local gt = a > b      -- Greater than: true
local le = a <= b     -- Less than or equal: false
local ge = a >= b     -- Greater than or equal: true
```

**Special features:**
- All operators return Boolean
- `==` for equality, `~=` for inequality

**Further reading:**
- [Lua Documentation - Relational Operators](https://www.lua.org/manual/5.4/manual.html#3.4.4)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% Comparison operators
a = 10;
b = 3;
eq = a == b;      % Equality: 0 (false)
ne = a ~= b;      % Inequality: 1 (true)
lt = a < b;       % Less than: 0
gt = a > b;       % Greater than: 1
le = a <= b;      % Less than or equal: 0
ge = a >= b;      % Greater than or equal: 1
```

**Special features:**
- Comparison operators return logical array (0 for false, 1 for true)
- `==` for equality, `~=` for inequality

**Further reading:**
- [MATLAB Documentation - Relational Operations](https://www.mathworks.com/help/matlab/relational-operations.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Comparison operators
A = 10,
B = 3,
( if A < B then ... ),      % Less than: fails
( if A > B then ... ),      % Greater than: succeeds
( if A =< B then ... ),     % Less than or equal: fails
( if A >= B then ... ),     % Greater than or equal: succeeds

% Unification (equality)
( if A = B then ... ),      % Equality: fails
( if A \= B then ... ),     % Inequality: succeeds

% Generic three-way comparison
compare(Result, A, B)       % Result = (>)
```

**Special features:**
- Relational operators: `<`, `>`, `=<`, `>=`
- `=<` instead of `<=` for less-than-or-equal (Prolog syntax)
- Equality via unification (`=`) instead of dedicated `==` operator
- `\=` for non-unification (inequality)
- `compare/3` for generic three-way comparison: yields `(<)`, `(=)`, or `(>)`

**Further reading:**
- [Mercury Library Reference - int](https://www.mercurylang.org/information/doc-latest/mercury_library/int.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# Comparison operators
var a: Int = 10
var b: Int = 3
var eq = a == b      # Equality: False
var ne = a != b      # Inequality: True
var lt = a < b       # Less than: False
var gt = a > b       # Greater than: True
var le = a <= b      # Less than or equal: False
var ge = a >= b      # Greater than or equal: True
```

**Special features:**
- All operators return Bool
- `==` for equality, `!=` for inequality

**Further reading:**
- [Mojo Documentation](https://docs.modular.com/mojo/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Comparison operators
var a = 10
var b = 3
var eq = a == b      # Equality: false
var ne = a != b      # Inequality: true
var lt = a < b       # Less than: false
var gt = a > b       # Greater than: true
var le = a <= b      # Less than or equal: false
var ge = a >= b      # Greater than or equal: true
```

**Special features:**
- All operators return bool
- `==` for equality, `!=` for inequality

**Further reading:**
- [Nim Documentation - Operators](https://nim-lang.org/docs/manual.html#expressions-and-statements)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Comparison operators
int a = 10;
int b = 3;
BOOL eq = a == b;      // Equality: NO
BOOL ne = a != b;      // Inequality: YES
BOOL lt = a < b;       // Less than: NO
BOOL gt = a > b;       // Greater than: YES
BOOL le = a <= b;      // Less than or equal: NO
BOOL ge = a >= b;      // Greater than or equal: YES
```

**Special features:**
- All operators return `BOOL` (YES/NO)
- `==` for equality, `!=` for inequality

**Further reading:**
- [Apple Developer Documentation - Operators](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/FoundationTypesandCollections/FoundationTypesandCollections.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Comparison operators
var
  a, b: Integer;
  eq, ne, lt, gt, le, ge: Boolean;
begin
  a := 10;
  b := 3;
  eq := a = b;      // Equality: False
  ne := a <> b;     // Inequality: True
  lt := a < b;      // Less than: False
  gt := a > b;      // Greater than: True
  le := a <= b;     // Less than or equal: False
  ge := a >= b;     // Greater than or equal: True
end;
```

**Special features:**
- All operators return Boolean
- `=` for equality, `<>` for inequality

**Further reading:**
- [Delphi Documentation - Comparison operators](https://docwiki.embarcadero.com/RADStudio/Alexandria/en/Comparison_Operators)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Comparison operators *)
let a = 10
let b = 3
let eq = a = b      (* Equality: false *)
let ne = a <> b     (* Inequality: true *)
let lt = a < b      (* Less than: false *)
let gt = a > b      (* Greater than: true *)
let le = a <= b     (* Less than or equal: false *)
let ge = a >= b     (* Greater than or equal: true *)
```

**Special features:**
- All operators return bool
- `=` for equality, `<>` for inequality

**Further reading:**
- [OCaml Documentation - Comparison operations](https://v2.ocaml.org/manual/expr.html#comparison)

</TabItem>
<TabItem value="octave" label="Octave">

```matlab
% Comparison operators
a = 10;
b = 3;
eq = a == b;      % Equality: 0 (false)
ne = a ~= b;      % Inequality: 1 (true)
lt = a < b;       % Less than: 0
gt = a > b;       % Greater than: 1
le = a <= b;      % Less than or equal: 0
ge = a >= b;      % Greater than or equal: 1
```

**Special features:**
- Comparison operators return logical array (0 for false, 1 for true)
- `==` for equality, `~=` for inequality

**Further reading:**
- [GNU Octave Documentation - Relational Operators](https://octave.org/doc/v8.1.0/Relational-Operators.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Comparison operators
a :: 10
b :: 3
eq :: a == b      // Equality: false
ne :: a != b      // Inequality: true
lt :: a < b       // Less than: false
gt :: a > b       // Greater than: true
le :: a <= b      // Less than or equal: false
ge :: a >= b      // Greater than or equal: true
```

**Special features:**
- All operators return bool
- `==` for equality, `!=` for inequality

**Further reading:**
- [Odin Documentation - Operators](https://odin-lang.org/docs/overview/#operators)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Comparison operators
my $a = 10;
my $b = 3;
my $eq = $a == $b;      # Equality: 0 (false)
my $ne = $a != $b;      # Inequality: 1 (true)
my $lt = $a < $b;       # Less than: 0
my $gt = $a > $b;       # Greater than: 1
my $le = $a <= $b;      # Less than or equal: 0
my $ge = $a >= $b;      # Greater than or equal: 1
```

**Special features:**
- Comparison operators return numbers (0 for false, 1 for true)
- `==` for equality, `!=` for inequality

**Further reading:**
- [Perl Documentation - Relational Operators](https://perldoc.perl.org/perlop#Relational-Operators)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
// Comparison operators
$a = 10;
$b = 3;
$eq = $a == $b;      // Equality: false (loose equality)
$strictEq = $a === $b; // Strict equality: false
$ne = $a != $b;      // Inequality: true (loose inequality)
$strictNe = $a !== $b; // Strict inequality: true
$lt = $a < $b;       // Less than: false
$gt = $a > $b;       // Greater than: true
$le = $a <= $b;      // Less than or equal: false
$ge = $a >= $b;      // Greater than or equal: true
?>
```

**Special features:**
- `==` and `!=` perform type conversion (loose equality)
- `===` and `!==` check type and value (strict equality)
- All operators return Boolean

**Further reading:**
- [PHP Documentation - Comparison Operators](https://www.php.net/manual/en/language.operators.comparison.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Comparison operators
% Arithmetic comparisons (evaluate expressions)
?- 10 =:= 10.    % Numeric equality: true
?- 10 =\= 3.     % Numeric inequality: true
?- 10 > 3.       % Greater than: true
?- 3 < 10.       % Less than: true
?- 10 >= 3.      % Greater than or equal: true
?- 3 =< 10.      % Less than or equal: true

% Term comparisons (compare structure, not value)
?- hello == hello.   % Structural equality: true
?- hello \== world.  % Structural inequality: true
?- a @< b.          % Term ordering: true
```

**Special features:**
- Two separate comparison systems: arithmetic (`=:=`, `=\=`, `<`, `>`, `>=`, `=<`) and term-based (`==`, `\==`, `@<`, `@>`, `@=<`, `@>=`)
- Arithmetic comparisons evaluate both sides numerically
- Term comparisons check structural equality without evaluation
- `=<` instead of `<=` for less-than-or-equal (historical Prolog syntax)
- Unification (`=`) is not a comparison operator, but binds variables

**Further reading:**
- [SWI-Prolog Documentation - Comparison and Unification](https://www.swi-prolog.org/pldoc/man?section=compare)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Comparison operators
a = 10
b = 3
eq = a == b      -- Equality: false
ne = a /= b      -- Inequality: true
lt = a < b       -- Less than: false
gt = a > b       -- Greater than: true
le = a <= b      -- Less than or equal: false
ge = a >= b      -- Greater than or equal: true
```

**Special features:**
- All operators return Boolean
- `==` for equality, `/=` for inequality

**Further reading:**
- [PureScript Documentation - Operators](https://github.com/purescript/documentation/blob/master/language/Operators.md)

</TabItem>
<TabItem value="python" label="Python">

```python
# Comparison operators
a = 10
b = 3
eq = a == b      # Equality: False
ne = a != b      # Inequality: True
lt = a < b       # Less than: False
gt = a > b       # Greater than: True
le = a <= b      # Less than or equal: False
ge = a >= b      # Greater than or equal: True
```

**Special features:**
- All operators return `bool`
- `==` for equality, `!=` for inequality

**Further reading:**
- [Python Documentation - Comparisons](https://docs.python.org/3/reference/expressions.html#comparisons)

</TabItem>
<TabItem value="r" label="R">

```r
# Comparison operators
a <- 10
b <- 3
eq <- a == b      # Equality: FALSE
ne <- a != b      # Inequality: TRUE
lt <- a < b       # Less than: FALSE
gt <- a > b       # Greater than: TRUE
le <- a <= b     # Less than or equal: FALSE
ge <- a >= b     # Greater than or equal: TRUE
```

**Special features:**
- All operators return logical (TRUE/FALSE)
- `==` for equality, `!=` for inequality

**Further reading:**
- [R Documentation - Comparison operators](https://stat.ethz.ch/R-manual/R-devel/library/base/html/Comparison.html)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
;; Comparison operators
(define a 10)
(define b 3)
(define eq (= a b))      ; Equality: #f
(define ne (not (= a b))) ; Inequality: #t
(define lt (< a b))      ; Less than: #f
(define gt (> a b))      ; Greater than: #t
(define le (<= a b))     ; Less than or equal: #f
(define ge (>= a b))     ; Greater than or equal: #t
```

**Special features:**
- Comparison operators are functions in prefix notation
- All return Boolean (#t for true, #f for false)
- `=` for equality

**Further reading:**
- [Racket Documentation - Comparison](https://docs.racket-lang.org/reference/generic-numbers.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Comparison operators
a = 10
b = 3
eq = a == b      -- Equality: False
ne = a != b      -- Inequality: True
lt = a < b       -- Less than: False
gt = a > b       -- Greater than: True
le = a <= b      -- Less than or equal: False
ge = a >= b      -- Greater than or equal: True
```

**Special features:**
- All operators return Bool
- `==` for equality, `!=` for inequality

**Further reading:**
- [Roc Documentation](https://www.roc-lang.org/)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Comparison operators
a = 10
b = 3
eq = a == b      # Equality: false
ne = a != b      # Inequality: true
lt = a < b       # Less than: false
gt = a > b       # Greater than: true
le = a <= b      # Less than or equal: false
ge = a >= b      # Greater than or equal: true
```

**Special features:**
- All operators return Boolean
- `==` for equality, `!=` for inequality

**Further reading:**
- [Ruby Documentation - Operators](https://docs.ruby-lang.org/en/3.2/syntax/operators_rdoc.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Comparison operators
let a = 10;
let b = 3;
let eq = a == b;      // Equality: false
let ne = a != b;      // Inequality: true
let lt = a < b;       // Less than: false
let gt = a > b;       // Greater than: true
let le = a <= b;      // Less than or equal: false
let ge = a >= b;      // Greater than or equal: true
```

**Special features:**
- All operators return `bool`
- `==` for equality, `!=` for inequality

**Further reading:**
- [Rust Documentation - Comparison operators](https://doc.rust-lang.org/book/ch03-02-data-types.html#comparison-operators)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Comparison operators
val a = 10
val b = 3
val eq = a == b      // Equality: false
val ne = a != b      // Inequality: true
val lt = a < b       // Less than: false
val gt = a > b       // Greater than: true
val le = a <= b      // Less than or equal: false
val ge = a >= b      // Greater than or equal: true
```

**Special features:**
- All operators return `Boolean`
- `==` for equality, `!=` for inequality

**Further reading:**
- [Scala Documentation - Comparison operations](https://docs.scala-lang.org/tour/operators.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; Comparison operators
(define a 10)
(define b 3)
(define eq (= a b))      ; Equality: #f
(define ne (not (= a b))) ; Inequality: #t
(define lt (< a b))      ; Less than: #f
(define gt (> a b))      ; Greater than: #t
(define le (<= a b))     ; Less than or equal: #f
(define ge (>= a b))     ; Greater than or equal: #t
```

**Special features:**
- Comparison operators are functions in prefix notation
- All return Boolean (#t for true, #f for false)
- `=` for equality

**Further reading:**
- [R7RS Scheme Specification - Comparison operations](https://small.r7rs.org/attachment/r7rs.pdf)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Comparison operators
let a = 10
let b = 3
let eq = a == b      // Equality: false
let ne = a != b      // Inequality: true
let lt = a < b       // Less than: false
let gt = a > b       // Greater than: true
let le = a <= b      // Less than or equal: false
let ge = a >= b      // Greater than or equal: true
```

**Special features:**
- All operators return `Bool`
- `==` for equality, `!=` for inequality

**Further reading:**
- [Swift Documentation - Basic Operators](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/basicoperators/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Comparison operators
let a = 10;
let b = 3;
let eq = a == b;      // Equality: false (loose equality)
let strictEq = a === b; // Strict equality: false
let ne = a != b;      // Inequality: true (loose inequality)
let strictNe = a !== b; // Strict inequality: true
let lt = a < b;       // Less than: false
let gt = a > b;       // Greater than: true
let le = a <= b;      // Less than or equal: false
let ge = a >= b;      // Greater than or equal: true
```

**Special features:**
- `==` and `!=` perform type conversion (loose equality)
- `===` and `!==` check type and value (strict equality)
- All operators return Boolean

**Further reading:**
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Comparison operators
Dim a As Integer = 10
Dim b As Integer = 3
Dim eq As Boolean = a = b      ' Equality: False
Dim ne As Boolean = a <> b     ' Inequality: True
Dim lt As Boolean = a < b      ' Less than: False
Dim gt As Boolean = a > b      ' Greater than: True
Dim le As Boolean = a <= b     ' Less than or equal: False
Dim ge As Boolean = a >= b     ' Greater than or equal: True
```

**Special features:**
- All operators return Boolean
- `=` for equality, `<>` for inequality

**Further reading:**
- [Microsoft VB.NET Documentation - Comparison Operators](https://learn.microsoft.com/en-us/dotnet/visual-basic/language-reference/operators/comparison-operators)

</TabItem>
<TabItem value="v" label="V">

```v
// Comparison operators
a := 10
b := 3
eq := a == b      // Equality: false
ne := a != b      // Inequality: true
lt := a < b       // Less than: false
gt := a > b       // Greater than: true
le := a <= b      // Less than or equal: false
ge := a >= b      // Greater than or equal: true
```

**Special features:**
- All operators return bool
- `==` for equality, `!=` for inequality

**Further reading:**
- [V Documentation - Operators](https://github.com/vlang/v/blob/master/doc/docs.md)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Comparison operators *)
a = 10;
b = 3;
eq = a == b      (* Equality: False *)
ne = a != b      (* Inequality: True *)
lt = a < b       (* Less than: False *)
gt = a > b       (* Greater than: True *)
le = a <= b      (* Less than or equal: False *)
ge = a >= b      (* Greater than or equal: True *)
```

**Special features:**
- All operators return Boolean (True/False)
- `==` for equality, `!=` for inequality

**Further reading:**
- [Wolfram Language Documentation - Comparison](https://reference.wolfram.com/language/guide/Comparison.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Comparison operators
const a: i32 = 10;
const b: i32 = 3;
const eq = a == b;      // Equality: false
const ne = a != b;      // Inequality: true
const lt = a < b;       // Less than: false
const gt = a > b;       // Greater than: true
const le = a <= b;      // Less than or equal: false
const ge = a >= b;      // Greater than or equal: true
```

**Special features:**
- All operators return `bool`
- `==` for equality, `!=` for inequality

**Further reading:**
- [Zig Documentation - Operators](https://ziglang.org/documentation/0.11.0/#Operators)

</TabItem>
</Tabs>


## 5.1.3. Logical Operators (Boolean, Short-Circuit Evaluation)

Logical operators for boolean operations such as AND (`&&`, `and`), OR (`||`, `or`), and NOT (`!`, `not`). Often support short-circuit evaluation, where the second operand is only evaluated when necessary.

### Languages {#sprachen}

<Tabs availableTabs={['ada', 'c', 'csharp', 'cpp', 'carbon', 'clojure', 'common-lisp', 'crystal', 'd', 'dart', 'eiffel', 'elixir', 'elm', 'erlang', 'fsharp', 'fortran', 'gleam', 'go', 'groovy', 'haskell', 'haxe', 'idris', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'lua', 'matlab', 'mercury', 'mojo', 'nim', 'objective-c', 'object-pascal', 'ocaml', 'octave', 'odin', 'perl', 'php', 'prolog', 'purescript', 'python', 'r', 'racket', 'roc', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'vbnet', 'v', 'wolfram-language', 'zig']}>
<TabItem value="ada" label="Ada">

```ada
-- Logical operators
a : Boolean := True;
b : Boolean := False;
and_result : Boolean := a and b;      -- AND: False
or_result : Boolean := a or b;        -- OR: True
not_result : Boolean := not a;        -- NOT: False
and_then : Boolean := a and then b;   -- Short-circuit AND: False
or_else : Boolean := a or else b;    -- Short-circuit OR: True
```

**Special features:**
- `and` and `or` evaluate both operands
- `and then` and `or else` support short-circuit evaluation

**Further reading:**
- [Ada Reference Manual - Logical Operators](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-4-5-1.html)

</TabItem>
<TabItem value="c" label="C">

```c
// Logical operators
int a = 1;  // true
int b = 0;  // false
int and_result = a && b;      // AND: 0 (false)
int or_result = a || b;       // OR: 1 (true)
int not_result = !a;          // NOT: 0 (false)
// Short-circuit: && and || evaluate second operand only when necessary
int result = a && (b = 1);     // b is not evaluated if a is false
```

**Special features:**
- `&&` and `||` support short-circuit evaluation
- Operators return `int` (0 for false, 1 for true)
- `!` for NOT

**Further reading:**
- [C Standard - Logical operators](https://en.cppreference.com/w/c/language/operator_logical)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Logical operators
bool a = true;
bool b = false;
bool and_result = a && b;      // AND: false (short-circuit)
bool or_result = a || b;       // OR: true (short-circuit)
bool not_result = !a;          // NOT: false
bool and_eval = a & b;         // AND: false (both evaluated)
bool or_eval = a | b;          // OR: true (both evaluated)
```

**Special features:**
- `&&` and `||` support short-circuit evaluation
- `&` and `|` evaluate both operands
- All operators return `bool`

**Further reading:**
- [Microsoft C# Documentation - Boolean logical operators](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/boolean-logical-operators)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Logical operators
bool a = true;
bool b = false;
bool and_result = a && b;      // AND: false (short-circuit)
bool or_result = a || b;       // OR: true (short-circuit)
bool not_result = !a;          // NOT: false
bool and_eval = a & b;         // AND: false (both evaluated)
bool or_eval = a | b;          // OR: true (both evaluated)
```

**Special features:**
- `&&` and `||` support short-circuit evaluation
- `&` and `|` evaluate both operands
- All operators return `bool`

**Further reading:**
- [cppreference.com - Logical operators](https://en.cppreference.com/w/cpp/language/operator_logical)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Logical operators
var a: bool = true;
var b: bool = false;
var and_result: bool = a && b;      // AND: false (short-circuit)
var or_result: bool = a || b;       // OR: true (short-circuit)
var not_result: bool = !a;          // NOT: false
```

**Special features:**
- Experimental language, syntax may still change
- `&&` and `||` support short-circuit evaluation

**Further reading:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Logical operators
(def a true)
(def b false)
(def and-result (and a b))      ; AND: false (short-circuit)
(def or-result (or a b))         ; OR: true (short-circuit)
(def not-result (not a))         ; NOT: false
```

**Special features:**
- `and` and `or` are macros with short-circuit evaluation
- `not` is a function
- All return Boolean

**Further reading:**
- [Clojure Documentation - Logical Operators](https://clojure.org/reference/special_forms#and)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Logical operators
(let ((a t)
      (b nil))
  (let ((and-result (and a b))      ; AND: nil (short-circuit)
        (or-result (or a b))         ; OR: t (short-circuit)
        (not-result (not a)))        ; NOT: nil
    (list and-result or-result not-result)))
```

**Special features:**
- `and` and `or` are macros with short-circuit evaluation
- `not` is a function
- `t` for true, `nil` for false

**Further reading:**
- [Common Lisp HyperSpec - Logical Operators](http://www.lispworks.com/documentation/HyperSpec/Body/m_and.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Logical operators
a = true
b = false
and_result = a && b      # AND: false (short-circuit)
or_result = a || b       # OR: true (short-circuit)
not_result = !a         # NOT: false
```

**Special features:**
- `&&` and `||` support short-circuit evaluation
- All operators return Bool

**Further reading:**
- [Crystal Documentation - Operators](https://crystal-lang.org/reference/1.11/syntax_and_semantics/operators.html)

</TabItem>
<TabItem value="d" label="D">

```d
// Logical operators
bool a = true;
bool b = false;
bool and_result = a && b;      // AND: false (short-circuit)
bool or_result = a || b;       // OR: true (short-circuit)
bool not_result = !a;          // NOT: false
```

**Special features:**
- `&&` and `||` support short-circuit evaluation
- All operators return `bool`

**Further reading:**
- [D Language Specification - Logical Operators](https://dlang.org/spec/expression.html#logical)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Logical operators
bool a = true;
bool b = false;
bool and_result = a && b;      // AND: false (short-circuit)
bool or_result = a || b;       // OR: true (short-circuit)
bool not_result = !a;          // NOT: false
```

**Special features:**
- `&&` and `||` support short-circuit evaluation
- All operators return `bool`

**Further reading:**
- [Dart Language Tour - Logical operators](https://dart.dev/guides/language/language-tour#logical-operators)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
-- Logical operators
a: BOOLEAN := True
b: BOOLEAN := False
and_result: BOOLEAN := a and b      -- AND: False
or_result: BOOLEAN := a or b        -- OR: True
not_result: BOOLEAN := not a        -- NOT: False
and_then: BOOLEAN := a and then b   -- Short-circuit AND: False
or_else: BOOLEAN := a or else b     -- Short-circuit OR: True
```

**Special features:**
- `and` and `or` evaluate both operands
- `and then` and `or else` support short-circuit evaluation

**Further reading:**
- [Eiffel Documentation - Operators](https://www.eiffel.org/doc/eiffel/Language_Reference_Manual)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Logical operators
a = true
b = false
and_result = a and b      # AND: false (short-circuit)
or_result = a or b       # OR: true (short-circuit)
not_result = not a        # NOT: false
```

**Special features:**
- `and` and `or` support short-circuit evaluation
- All operators return Boolean

**Further reading:**
- [Elixir Documentation - Basic operators](https://hexdocs.pm/elixir/operators.html)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Logical operators
a = True
b = False
and_result = a && b      -- AND: False (short-circuit)
or_result = a || b       -- OR: True (short-circuit)
not_result = not a       -- NOT: False
```

**Special features:**
- `&&` and `||` support short-circuit evaluation
- All operators return Bool

**Further reading:**
- [Elm Documentation - Basics](https://guide.elm-lang.org/core_language.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% Logical operators
A = true,
B = false,
AndResult = A andalso B,     % AND: false (short-circuit)
OrResult = A orelse B,       % OR: true (short-circuit)
NotResult = not A.            % NOT: false
```

**Special features:**
- `andalso` and `orelse` support short-circuit evaluation
- `not` for NOT
- All operators return Boolean

**Further reading:**
- [Erlang Documentation - Boolean Expressions](https://www.erlang.org/doc/reference_manual/expressions.html#boolean-expressions)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Logical operators
let a = true
let b = false
let and_result = a && b      // AND: false (short-circuit)
let or_result = a || b       // OR: true (short-circuit)
let not_result = not a       // NOT: false
```

**Special features:**
- `&&` and `||` support short-circuit evaluation
- `not` for NOT
- All operators return `bool`

**Further reading:**
- [F# Documentation - Boolean Operators](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/symbol-and-operator-reference/boolean-operators)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Logical operators
logical :: a = .true.
logical :: b = .false.
logical :: and_result, or_result, not_result
and_result = a .and. b      ! AND: .false.
or_result = a .or. b         ! OR: .true.
not_result = .not. a        ! NOT: .false.
```

**Special features:**
- `.and.`, `.or.`, and `.not.` for logical operations
- All operators return LOGICAL
- Both operands are evaluated

**Further reading:**
- [Fortran Standard - Logical operators](https://gcc.gnu.org/onlinedocs/gfortran/Logical-operators.html)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// Logical operators
let a = True
let b = False
let and_result = a && b      // AND: False
let or_result = a || b       // OR: True
let not_result = !a          // NOT: False
```

**Special features:**
- `&&` for AND, `||` for OR, `!` for NOT (since Gleam v1.4)
- All operators work with Bool values
- `&&` and `||` support short-circuit evaluation

**Further reading:**
- [Gleam Documentation - Bool](https://tour.gleam.run/data-types/bools/)

</TabItem>
<TabItem value="go" label="Go">

```go
// Logical operators
a := true
b := false
andResult := a && b      // AND: false (short-circuit)
orResult := a || b       // OR: true (short-circuit)
notResult := !a          // NOT: false
```

**Special features:**
- `&&` and `||` support short-circuit evaluation
- `!` for NOT
- All operators return `bool`

**Further reading:**
- [Go Documentation - Logical operators](https://go.dev/ref/spec#Logical_operators)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Logical operators
def a = true
def b = false
def andResult = a && b      // AND: false (short-circuit)
def orResult = a || b       // OR: true (short-circuit)
def notResult = !a          // NOT: false
```

**Special features:**
- `&&` and `||` support short-circuit evaluation
- `!` for NOT
- All operators return Boolean

**Further reading:**
- [Groovy Documentation - Operators](https://groovy-lang.org/operators.html)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Logical operators
a = True
b = False
andResult = a && b      -- AND: False (short-circuit)
orResult = a || b       -- OR: True (short-circuit)
notResult = not a       -- NOT: False
```

**Special features:**
- `&&` and `||` support short-circuit evaluation
- `not` for NOT
- All operators return Bool

**Further reading:**
- [Haskell Documentation - Boolean operations](https://www.haskell.org/onlinereport/haskell2010/haskellch6.html#x13-1210006.4)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Logical operators
var a = true;
var b = false;
var andResult = a && b;      // AND: false (short-circuit)
var orResult = a || b;       // OR: true (short-circuit)
var notResult = !a;          // NOT: false
```

**Special features:**
- `&&` and `||` support short-circuit evaluation
- `!` for NOT
- All operators return Bool

**Further reading:**
- [Haxe Documentation - Operators](https://haxe.org/manual/expression-operators.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Logical operators
a : Bool
a = True
b : Bool
b = False
andResult : Bool
andResult = a && b      -- AND: False (short-circuit)
orResult : Bool
orResult = a || b       -- OR: True (short-circuit)
notResult : Bool
notResult = not a       -- NOT: False
```

**Special features:**
- `&&` and `||` support short-circuit evaluation
- `not` for NOT
- All operators return Bool

**Further reading:**
- [Idris 2 Documentation - Interfaces](https://idris2.readthedocs.io/en/latest/tutorial/interfaces.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Logical operators
boolean a = true;
boolean b = false;
boolean andResult = a && b;      // AND: false (short-circuit)
boolean orResult = a || b;       // OR: true (short-circuit)
boolean notResult = !a;          // NOT: false
boolean andEval = a & b;         // AND: false (both evaluated)
boolean orEval = a | b;          // OR: true (both evaluated)
```

**Special features:**
- `&&` and `||` support short-circuit evaluation
- `&` and `|` evaluate both operands
- All operators return `boolean`

**Further reading:**
- [Oracle Java Documentation - Logical Operators](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/op3.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Logical operators
let a = true;
let b = false;
let andResult = a && b;      // AND: false (short-circuit)
let orResult = a || b;       // OR: true (short-circuit)
let notResult = !a;          // NOT: false
```

**Special features:**
- `&&` and `||` support short-circuit evaluation
- `!` for NOT
- All operators return Boolean

**Further reading:**
- [MDN Web Docs - Logical operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#logical_operators)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Logical operators
a = true
b = false
and_result = a && b      # AND: false (short-circuit)
or_result = a || b       # OR: true (short-circuit)
not_result = !a          # NOT: false
```

**Special features:**
- `&&` and `||` support short-circuit evaluation
- `!` for NOT
- All operators return Bool

**Further reading:**
- [Julia Documentation - Boolean Operators](https://docs.julialang.org/en/v1/manual/mathematical-operations/#Boolean-Operators)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Logical operators
val a = True
val b = False
val and_result = a && b      // AND: False (short-circuit)
val or_result = a || b       // OR: True (short-circuit)
val not_result = !a          // NOT: False
```

**Special features:**
- `&&` and `||` support short-circuit evaluation
- `!` for NOT
- All operators return `bool`

**Further reading:**
- [Koka Language Guide - Expressions](https://koka-lang.github.io/koka/doc/book.html#sec-expressions)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Logical operators
def a := true
def b := false
#eval a && b      -- AND: false (short-circuit)
#eval a || b      -- OR: true (short-circuit)
#eval !a          -- NOT: false
```

**Special features:**
- `&&` and `||` support short-circuit evaluation
- `!` for NOT
- Logical operators work on the `Bool` type
- Propositions (`Prop`) use `∧`, `∨`, `¬` for logical proofs

**Further reading:**
- [Lean 4 – Functional Programming in Lean 4](https://lean-lang.org/functional_programming_in_lean/)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Logical operators
val a = true
val b = false
val andResult = a && b      // AND: false (short-circuit)
val orResult = a || b       // OR: true (short-circuit)
val notResult = !a          // NOT: false
```

**Special features:**
- `&&` and `||` support short-circuit evaluation
- `!` for NOT
- All operators return `Boolean`

**Further reading:**
- [Kotlin Documentation - Boolean operations](https://kotlinlang.org/docs/booleans.html#logical-operators)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Logical operators
local a = true
local b = false
local and_result = a and b      -- AND: false (short-circuit)
local or_result = a or b        -- OR: true (short-circuit)
local not_result = not a        -- NOT: false
```

**Special features:**
- `and` and `or` support short-circuit evaluation
- `not` for NOT
- All operators return Boolean

**Further reading:**
- [Lua Documentation - Logical Operators](https://www.lua.org/manual/5.4/manual.html#3.4.5)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% Logical operators
a = true;
b = false;
and_result = a && b;      % AND: false (short-circuit)
or_result = a || b;       % OR: true (short-circuit)
not_result = ~a;          % NOT: false
and_eval = a & b;         % AND: false (beide evaluiert)
or_eval = a | b;          % OR: true (beide evaluiert)
```

**Special features:**
- `&&` and `||` support short-circuit evaluation
- `&` and `|` evaluate both operands (element-wise)
- `~` for NOT

**Further reading:**
- [MATLAB Documentation - Logical Operations](https://www.mathworks.com/help/matlab/logical-operations.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Logical operators (as goal connectors)
( if true, true then ... ),      % Conjunction (AND): succeeds
( if true ; false then ... ),    % Disjunction (OR): succeeds
( if not false then ... ),       % Negation (NOT): succeeds

% Short-Circuit-Evaluation
( if fail, write("X", !IO) then  % write is never executed (AND breaks)
    ...
),
( if true ; write("X", !IO) then % write is never executed (OR breaks)
    ...
),

% If-Then-Else
( if A > 5 ->
    io.write_string("yes\n", !IO)
;
    io.write_string("no\n", !IO)
)
```

**Special features:**
- `,` (comma) for conjunction (AND) with short-circuit evaluation
- `;` (semicolon) for disjunction (OR) with short-circuit evaluation
- `not` for negation (preferred over `\+`)
- `->` for If-Then, `( Condition -> Then ; Else )` for If-Then-Else
- Logical operators are a fundamental part of Mercury's execution model

**Further reading:**
- [Mercury Language Reference Manual - Goals](https://www.mercurylang.org/information/doc-latest/mercury_ref/Goals.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# Logical operators
var a: Bool = True
var b: Bool = False
var and_result = a and b      # AND: False (short-circuit)
var or_result = a or b        # OR: True (short-circuit)
var not_result = not a        # NOT: False
```

**Special features:**
- `and` and `or` support short-circuit evaluation
- `not` for NOT
- All operators return Bool

**Further reading:**
- [Mojo Documentation](https://docs.modular.com/mojo/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Logical operators
var a = true
var b = false
var and_result = a and b      # AND: false
var or_result = a or b        # OR: true
var not_result = not a        # NOT: false
```

**Special features:**
- `and` and `or` evaluate both operands
- `not` for NOT
- All operators return bool

**Further reading:**
- [Nim Documentation - Operators](https://nim-lang.org/docs/manual.html#expressions-and-statements)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Logical operators
BOOL a = YES;
BOOL b = NO;
BOOL andResult = a && b;      // AND: NO (short-circuit)
BOOL orResult = a || b;       // OR: YES (short-circuit)
BOOL notResult = !a;          // NOT: NO
```

**Special features:**
- `&&` and `||` support short-circuit evaluation
- `!` for NOT
- All operators return `BOOL` (YES/NO)

**Further reading:**
- [Apple Developer Documentation - Operators](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/FoundationTypesandCollections/FoundationTypesandCollections.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Logical operators
var
  a, b: Boolean;
  and_result, or_result, not_result: Boolean;
begin
  a := True;
  b := False;
  and_result := a and b;      // AND: False
  or_result := a or b;         // OR: True
  not_result := not a;         // NOT: False
end;
```

**Special features:**
- `and` and `or` evaluate both operands
- `not` for NOT
- All operators return Boolean

**Further reading:**
- [Delphi Documentation - Boolean operators](https://docwiki.embarcadero.com/RADStudio/Alexandria/en/Boolean_Operators)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Logical operators *)
let a = true
let b = false
let and_result = a && b      (* AND: false (short-circuit) *)
let or_result = a || b       (* OR: true (short-circuit) *)
let not_result = not a       (* NOT: false *)
```

**Special features:**
- `&&` and `||` support short-circuit evaluation
- `not` for NOT
- All operators return bool

**Further reading:**
- [OCaml Documentation - Boolean operations](https://v2.ocaml.org/manual/expr.html#boolean)

</TabItem>
<TabItem value="octave" label="Octave">

```matlab
% Logical operators
a = true;
b = false;
and_result = a && b;      % AND: false (short-circuit)
or_result = a || b;       % OR: true (short-circuit)
not_result = ~a;          % NOT: false
and_eval = a & b;         % AND: false (beide evaluiert)
or_eval = a | b;          % OR: true (beide evaluiert)
```

**Special features:**
- `&&` and `||` support short-circuit evaluation
- `&` and `|` evaluate both operands (element-wise)
- `~` for NOT

**Further reading:**
- [GNU Octave Documentation - Logical Operators](https://octave.org/doc/v8.1.0/Logical-Operators.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Logical operators
a :: true
b :: false
and_result :: a && b      // AND: false (short-circuit)
or_result :: a || b       // OR: true (short-circuit)
not_result :: !a          // NOT: false
```

**Special features:**
- `&&` and `||` support short-circuit evaluation
- `!` for NOT
- All operators return bool

**Further reading:**
- [Odin Documentation - Operators](https://odin-lang.org/docs/overview/#operators)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Logical operators
my $a = 1;  # true
my $b = 0;  # false
my $and_result = $a && $b;      # AND: 0 (false, short-circuit)
my $or_result = $a || $b;       # OR: 1 (true, short-circuit)
my $not_result = !$a;           # NOT: 0 (false)
```

**Special features:**
- `&&` and `||` support short-circuit evaluation
- `!` for NOT
- Operators return numbers (0 for false, 1 for true)

**Further reading:**
- [Perl Documentation - Logical Operators](https://perldoc.perl.org/perlop#Logical-Operators)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
// Logical operators
$a = true;
$b = false;
$and_result = $a && $b;     // AND: false (short-circuit)
$or_result = $a || $b;      // OR: true (short-circuit)
$not_result = !$a;           // NOT: false

// Alternative syntax (lower precedence)
$and_alt = $a and $b;       // AND: false (short-circuit)
$or_alt = $a or $b;         // OR: true (short-circuit)
$xor_result = $a xor $b;    // XOR: true
?>
```

**Special features:**
- `&&` and `||` support short-circuit evaluation
- `and`, `or`, `xor` are alternative operators with lower precedence
- `&` and `|` are bitwise operators, not logical operators

**Further reading:**
- [PHP Documentation - Logical Operators](https://www.php.net/manual/en/language.operators.logical.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Logical operators
?- true, true.        % Conjunction (AND): true
?- true ; false.      % Disjunction (OR): true
?- \+ false.          % Negation (NOT): true

% Short-Circuit-Evaluation
?- false, write(reached).   % write is never executed (AND breaks)
?- true ; write(reached).   % write is never executed (OR breaks)

% Implication (if-then-else)
?- (true -> write(yes) ; write(no)).  % Output: yes
```

**Special features:**
- `,` (comma) for conjunction (AND) with short-circuit evaluation
- `;` (semicolon) for disjunction (OR) with short-circuit evaluation
- `\+` for negation as failure (NOT) — succeeds when the goal fails
- `->` for If-Then (often combined with `;` for If-Then-Else)
- Logical operators are a fundamental part of Prolog's execution model

**Further reading:**
- [SWI-Prolog Documentation - Control Predicates](https://www.swi-prolog.org/pldoc/man?section=control)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Logical operators
a = true
b = false
and_result = a && b      -- AND: false (short-circuit)
or_result = a || b       -- OR: true (short-circuit)
not_result = not a       -- NOT: false
```

**Special features:**
- `&&` and `||` support short-circuit evaluation
- `not` for NOT
- All operators return Boolean

**Further reading:**
- [PureScript Documentation - Operators](https://github.com/purescript/documentation/blob/master/language/Operators.md)

</TabItem>
<TabItem value="python" label="Python">

```python
# Logical operators
a = True
b = False
and_result = a and b      # AND: False (short-circuit)
or_result = a or b        # OR: True (short-circuit)
not_result = not a        # NOT: False
```

**Special features:**
- `and` and `or` support short-circuit evaluation
- `not` for NOT
- All operators return `bool`

**Further reading:**
- [Python Documentation - Boolean operations](https://docs.python.org/3/library/stdtypes.html#boolean-operations-and-or-not)

</TabItem>
<TabItem value="r" label="R">

```r
# Logical operators
a <- TRUE
b <- FALSE
and_result <- a && b      # AND: FALSE (short-circuit)
or_result <- a || b       # OR: TRUE (short-circuit)
not_result <- !a          # NOT: FALSE
and_eval <- a & b          # AND: FALSE (both evaluated)
or_eval <- a | b           # OR: TRUE (both evaluated)
```

**Special features:**
- `&&` and `||` support short-circuit evaluation (scalar)
- `&` and `|` evaluate both operands (element-wise)
- `!` for NOT

**Further reading:**
- [R Documentation - Logical operators](https://stat.ethz.ch/R-manual/R-devel/library/base/html/Logic.html)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
;; Logical operators
(define a #t)
(define b #f)
(define and-result (and a b))   ; AND: #f (short-circuit)
(define or-result (or a b))     ; OR: #t (short-circuit)
(define not-result (not a))     ; NOT: #f
```

**Special features:**
- `and` and `or` are macros with short-circuit evaluation
- `and` returns the last truthy value or `#f`
- `or` returns the first truthy value or `#f`
- `not` is a function and always returns Boolean

**Further reading:**
- [Racket Documentation - Boolean Operations](https://docs.racket-lang.org/reference/booleans.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Logical operators
a = Bool.true
b = Bool.false
andResult = a && b        -- AND: Bool.false (short-circuit)
orResult = a || b         -- OR: Bool.true (short-circuit)
notResult = !(a)          -- NOT: Bool.false
```

**Special features:**
- `&&` and `||` support short-circuit evaluation
- `!` or `Bool.not` for NOT
- All operators return Bool

**Further reading:**
- [Roc Documentation - Bool](https://www.roc-lang.org/builtins/Bool)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Logical operators
a = true
b = false
and_result = a && b      # AND: false (short-circuit)
or_result = a || b       # OR: true (short-circuit)
not_result = !a          # NOT: false
```

**Special features:**
- `&&` and `||` support short-circuit evaluation
- `!` for NOT
- All operators return Boolean

**Further reading:**
- [Ruby Documentation - Operators](https://docs.ruby-lang.org/en/3.2/syntax/operators_rdoc.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Logical operators
let a = true;
let b = false;
let and_result = a && b;      // AND: false (short-circuit)
let or_result = a || b;       // OR: true (short-circuit)
let not_result = !a;          // NOT: false
```

**Special features:**
- `&&` and `||` support short-circuit evaluation
- `!` for NOT
- All operators return `bool`

**Further reading:**
- [Rust Documentation - Boolean operations](https://doc.rust-lang.org/book/ch03-02-data-types.html#the-boolean-type)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Logical operators
val a = true
val b = false
val andResult = a && b      // AND: false (short-circuit)
val orResult = a || b       // OR: true (short-circuit)
val notResult = !a          // NOT: false
```

**Special features:**
- `&&` and `||` support short-circuit evaluation
- `!` for NOT
- All operators return `Boolean`

**Further reading:**
- [Scala Documentation - Boolean operations](https://docs.scala-lang.org/tour/operators.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; Logical operators
(define a #t)
(define b #f)
(define and-result (and a b))      ; AND: #f (short-circuit)
(define or-result (or a b))       ; OR: #t (short-circuit)
(define not-result (not a))       ; NOT: #f
```

**Special features:**
- `and` and `or` are macros with short-circuit evaluation
- `not` is a function
- All return Boolean (#t for true, #f for false)

**Further reading:**
- [R7RS Scheme Specification - Boolean operations](https://small.r7rs.org/attachment/r7rs.pdf)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Logical operators
let a = true
let b = false
let andResult = a && b      // AND: false (short-circuit)
let orResult = a || b       // OR: true (short-circuit)
let notResult = !a          // NOT: false
```

**Special features:**
- `&&` and `||` support short-circuit evaluation
- `!` for NOT
- All operators return `Bool`

**Further reading:**
- [Swift Documentation - Basic Operators](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/basicoperators/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Logical operators
let a = true;
let b = false;
let andResult = a && b;      // AND: false (short-circuit)
let orResult = a || b;       // OR: true (short-circuit)
let notResult = !a;          // NOT: false
```

**Special features:**
- `&&` and `||` support short-circuit evaluation
- `!` for NOT
- All operators return Boolean

**Further reading:**
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Logical operators
Dim a As Boolean = True
Dim b As Boolean = False
Dim andResult As Boolean = a AndAlso b      ' AND: False (short-circuit)
Dim orResult As Boolean = a OrElse b        ' OR: True (short-circuit)
Dim notResult As Boolean = Not a            ' NOT: False
Dim andEval As Boolean = a And b             ' AND: False (both evaluated)
Dim orEval As Boolean = a Or b              ' OR: True (both evaluated)
```

**Special features:**
- `AndAlso` and `OrElse` support short-circuit evaluation
- `And` and `Or` evaluate both operands
- `Not` for NOT

**Further reading:**
- [Microsoft VB.NET Documentation - Logical Operators](https://learn.microsoft.com/en-us/dotnet/visual-basic/language-reference/operators/logical-operators)

</TabItem>
<TabItem value="v" label="V">

```v
// Logical operators
a := true
b := false
and_result := a && b      // AND: false (short-circuit)
or_result := a || b       // OR: true (short-circuit)
not_result := !a          // NOT: false
```

**Special features:**
- `&&` and `||` support short-circuit evaluation
- `!` for NOT
- All operators return bool

**Further reading:**
- [V Documentation - Operators](https://github.com/vlang/v/blob/master/doc/docs.md)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Logical operators *)
a = True;
b = False;
andResult = a && b      (* AND: False (short-circuit) *)
orResult = a || b       (* OR: True (short-circuit) *)
notResult = !a          (* NOT: False *)
```

**Special features:**
- `&&` and `||` support short-circuit evaluation
- `!` for NOT
- All operators return Boolean (True/False)

**Further reading:**
- [Wolfram Language Documentation - Logical Operations](https://reference.wolfram.com/language/guide/LogicalOperations.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Logical operators
const a: bool = true;
const b: bool = false;
const and_result = a and b;      // AND: false (short-circuit)
const or_result = a or b;        // OR: true (short-circuit)
const not_result = !a;           // NOT: false
```

**Special features:**
- `and` and `or` support short-circuit evaluation
- `!` for NOT
- All operators return `bool`

**Further reading:**
- [Zig Documentation - Operators](https://ziglang.org/documentation/0.11.0/#Operators)

</TabItem>
</Tabs>

