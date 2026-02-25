---
slug: /operatoren/standard-operatoren
title: 5.1. Standard-Operatoren
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 5.1. Standard-Operatoren

Standard-Operatoren für arithmetische, Vergleichs- und logische Operationen.

## 5.1.1. Arithmetic Operators (Infix, Prefix Notation)

Grundlegende arithmetische Operationen wie Addition, Subtraktion, Multiplikation, Division und Modulo. Unterstützt sowohl Infix-Notation (z.B. `a + b`) als auch Prefix-Notation (z.B. unary minus `-a`).

### Sprachen {#sprachen}

<Tabs availableTabs={['ada', 'c', 'csharp', 'cpp', 'carbon', 'clojure', 'common-lisp', 'crystal', 'd', 'dart', 'eiffel', 'elixir', 'elm', 'erlang', 'fsharp', 'fortran', 'gleam', 'go', 'groovy', 'haskell', 'haxe', 'idris', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'lua', 'matlab', 'mercury', 'mojo', 'nim', 'objective-c', 'object-pascal', 'ocaml', 'octave', 'odin', 'perl', 'php', 'prolog', 'purescript', 'python', 'r', 'racket', 'roc', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'vbnet', 'v', 'wolfram-language', 'zig']}>
<TabItem value="ada" label="Ada">

```ada
-- Arithmetische Operatoren
a : Integer := 10;
b : Integer := 3;
sum : Integer := a + b;      -- Addition: 13
diff : Integer := a - b;     -- Subtraktion: 7
prod : Integer := a * b;     -- Multiplikation: 30
quot : Integer := a / b;     -- Division: 3
rem : Integer := a rem b;    -- Rest: 1
mod_val : Integer := a mod b; -- Modulo: 1
neg : Integer := -a;         -- Prefix unary minus: -10
```

**Besonderheiten:**
- Unterstützt `rem` (Rest) und `mod` (Modulo) mit unterschiedlicher Semantik für negative Zahlen
- Division von Integer-Werten ergibt Integer (abgeschnitten)

**Weiterführende Links:**
- [Ada Reference Manual - Operators](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-4-5.html)

</TabItem>
<TabItem value="c" label="C">

```c
// Arithmetische Operatoren
int a = 10;
int b = 3;
int sum = a + b;      // Addition: 13
int diff = a - b;     // Subtraktion: 7
int prod = a * b;     // Multiplikation: 30
int quot = a / b;     // Division: 3 (Integer-Division)
int rem = a % b;      // Modulo: 1
int neg = -a;         // Prefix unary minus: -10
```

**Besonderheiten:**
- Integer-Division schneidet ab (keine Rundung)
- Modulo-Operator `%` für Rest bei Division
- Unary minus als Prefix-Operator

**Weiterführende Links:**
- [C Standard - Arithmetic operators](https://en.cppreference.com/w/c/language/operator_arithmetic)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Arithmetische Operatoren
int a = 10;
int b = 3;
int sum = a + b;      // Addition: 13
int diff = a - b;     // Subtraktion: 7
int prod = a * b;     // Multiplikation: 30
int quot = a / b;     // Division: 3 (Integer-Division)
int rem = a % b;      // Modulo: 1
int neg = -a;         // Prefix unary minus: -10
```

**Besonderheiten:**
- Integer-Division schneidet ab (keine Rundung)
- Modulo-Operator `%` für Rest bei Division
- Unary minus als Prefix-Operator

**Weiterführende Links:**
- [Microsoft C# Documentation - Arithmetic operators](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/arithmetic-operators)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Arithmetische Operatoren
int a = 10;
int b = 3;
int sum = a + b;      // Addition: 13
int diff = a - b;     // Subtraktion: 7
int prod = a * b;     // Multiplikation: 30
int quot = a / b;     // Division: 3 (Integer-Division)
int rem = a % b;      // Modulo: 1
int neg = -a;         // Prefix unary minus: -10
```

**Besonderheiten:**
- Integer-Division schneidet ab (keine Rundung)
- Modulo-Operator `%` für Rest bei Division
- Unary minus als Prefix-Operator

**Weiterführende Links:**
- [cppreference.com - Arithmetic operators](https://en.cppreference.com/w/cpp/language/operator_arithmetic)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Arithmetische Operatoren
var a: i32 = 10;
var b: i32 = 3;
var sum: i32 = a + b;      // Addition: 13
var diff: i32 = a - b;     // Subtraktion: 7
var prod: i32 = a * b;     // Multiplikation: 30
var quot: i32 = a / b;     // Division: 3 (Integer-Division)
var rem: i32 = a % b;      // Modulo: 1
var neg: i32 = -a;         // Prefix unary minus: -10
```

**Besonderheiten:**
- Experimentelle Sprache, Syntax kann sich noch ändern
- C++-ähnliche Syntax mit modernen Features

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Arithmetische Operatoren
(def a 10)
(def b 3)
(def sum (+ a b))      ; Addition: 13
(def diff (- a b))     ; Subtraktion: 7
(def prod (* a b))     ; Multiplikation: 30
(def quot (/ a b))     ; Division: 10/3 (Ratio)
(def rem (rem a b))    ; Rest: 1
(def mod-val (mod a b)) ; Modulo: 1
(def neg (- a))        ; Prefix unary minus: -10
```

**Besonderheiten:**
- Arithmetische Operatoren sind Funktionen in Prefix-Notation
- Division von Integer-Werten ergibt Ratio-Typ (z.B. `10/3`), nicht Float
- `rem` und `mod` haben unterschiedliche Semantik für negative Zahlen

**Weiterführende Links:**
- [Clojure Documentation - Arithmetic](https://clojure.org/reference/reader#_literals)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Arithmetische Operatoren
(let ((a 10)
      (b 3))
  (let ((sum (+ a b))      ; Addition: 13
        (diff (- a b))     ; Subtraktion: 7
        (prod (* a b))     ; Multiplikation: 30
        (quot (/ a b))     ; Division: 10/3 (Ratio)
        (rem (rem a b))    ; Rest: 1
        (mod-val (mod a b)) ; Modulo: 1
        (neg (- a)))       ; Prefix unary minus: -10
    (list sum diff prod quot rem mod-val neg)))
```

**Besonderheiten:**
- Arithmetische Operatoren sind Funktionen in Prefix-Notation
- Division von Integer-Werten ergibt Ratio-Typ, nicht Float
- `rem` und `mod` haben unterschiedliche Semantik für negative Zahlen

**Weiterführende Links:**
- [Common Lisp HyperSpec - Arithmetic Operations](http://www.lispworks.com/documentation/HyperSpec/Body/f_arithmetic_operators.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Arithmetische Operatoren
a = 10
b = 3
sum = a + b      # Addition: 13
diff = a - b     # Subtraktion: 7
prod = a * b     # Multiplikation: 30
quot = a / b     # Division: 3 (Integer-Division)
rem = a % b      # Modulo: 1
neg = -a         # Prefix unary minus: -10
```

**Besonderheiten:**
- Integer-Division schneidet ab (keine Rundung)
- Modulo-Operator `%` für Rest bei Division
- Unary minus als Prefix-Operator

**Weiterführende Links:**
- [Crystal Documentation - Operators](https://crystal-lang.org/reference/1.11/syntax_and_semantics/operators.html)

</TabItem>
<TabItem value="d" label="D">

```d
// Arithmetische Operatoren
int a = 10;
int b = 3;
int sum = a + b;      // Addition: 13
int diff = a - b;     // Subtraktion: 7
int prod = a * b;     // Multiplikation: 30
int quot = a / b;     // Division: 3 (Integer-Division)
int rem = a % b;      // Modulo: 1
int neg = -a;         // Prefix unary minus: -10
```

**Besonderheiten:**
- Integer-Division schneidet ab (keine Rundung)
- Modulo-Operator `%` für Rest bei Division
- Unary minus als Prefix-Operator

**Weiterführende Links:**
- [D Language Specification - Arithmetic Operators](https://dlang.org/spec/expression.html#arithmetic)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Arithmetische Operatoren
int a = 10;
int b = 3;
int sum = a + b;      // Addition: 13
int diff = a - b;     // Subtraktion: 7
int prod = a * b;     // Multiplikation: 30
int quot = a ~/ b;    // Integer-Division: 3
int rem = a % b;      // Modulo: 1
int neg = -a;         // Prefix unary minus: -10
```

**Besonderheiten:**
- `~/` für Integer-Division (truncating division)
- Normale Division `/` ergibt immer Double
- Modulo-Operator `%` für Rest bei Division

**Weiterführende Links:**
- [Dart Language Tour - Arithmetic operators](https://dart.dev/guides/language/language-tour#arithmetic-operators)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
-- Arithmetische Operatoren
a: INTEGER := 10
b: INTEGER := 3
sum: INTEGER := a + b      -- Addition: 13
diff: INTEGER := a - b      -- Subtraktion: 7
prod: INTEGER := a * b      -- Multiplikation: 30
quot: INTEGER := a // b     -- Integer-Division: 3
rem: INTEGER := a \\ b      -- Modulo: 1
neg: INTEGER := -a          -- Prefix unary minus: -10
```

**Besonderheiten:**
- `//` für Integer-Division
- `\\` für Modulo-Operator
- Unary minus als Prefix-Operator

**Weiterführende Links:**
- [Eiffel Documentation - Operators](https://www.eiffel.org/doc/eiffel/Language_Reference_Manual)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Arithmetische Operatoren
a = 10
b = 3
sum = a + b      # Addition: 13
diff = a - b     # Subtraktion: 7
prod = a * b     # Multiplikation: 30
quot = div(a, b) # Integer-Division: 3
rem = rem(a, b)  # Rest: 1
neg = -a         # Prefix unary minus: -10
```

**Besonderheiten:**
- `div/2` Funktion für Integer-Division
- `rem/2` Funktion für Rest bei Division
- Unary minus als Prefix-Operator

**Weiterführende Links:**
- [Elixir Documentation - Basic operators](https://hexdocs.pm/elixir/operators.html)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Arithmetische Operatoren
a = 10
b = 3
sum = a + b      -- Addition: 13
diff = a - b     -- Subtraktion: 7
prod = a * b     -- Multiplikation: 30
quot = a // b    -- Integer-Division: 3
rem = modBy b a  -- Modulo: 1
neg = -a         -- Prefix unary minus: -10
```

**Besonderheiten:**
- `//` für Integer-Division
- `modBy` Funktion für Modulo (modBy divisor dividend)
- Unary minus als Prefix-Operator

**Weiterführende Links:**
- [Elm Documentation - Basics](https://guide.elm-lang.org/core_language.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% Arithmetische Operatoren
A = 10,
B = 3,
Sum = A + B,      % Addition: 13
Diff = A - B,     % Subtraktion: 7
Prod = A * B,     % Multiplikation: 30
Quot = A div B,   % Integer-Division: 3
Rem = A rem B,    % Rest: 1
Neg = -A.         % Prefix unary minus: -10
```

**Besonderheiten:**
- `div` für Integer-Division
- `rem` für Rest bei Division
- Unary minus als Prefix-Operator

**Weiterführende Links:**
- [Erlang Documentation - Arithmetic Expressions](https://www.erlang.org/doc/reference_manual/expressions.html#arithmetic-expressions)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Arithmetische Operatoren
let a = 10
let b = 3
let sum = a + b      // Addition: 13
let diff = a - b     // Subtraktion: 7
let prod = a * b     // Multiplikation: 30
let quot = a / b     // Division: 3 (Integer-Division)
let rem = a % b      // Modulo: 1
let neg = -a         // Prefix unary minus: -10
```

**Besonderheiten:**
- Integer-Division schneidet ab (keine Rundung)
- Modulo-Operator `%` für Rest bei Division
- Unary minus als Prefix-Operator

**Weiterführende Links:**
- [F# Documentation - Arithmetic Operators](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/symbol-and-operator-reference/arithmetic-operators)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Arithmetische Operatoren
integer :: a = 10
integer :: b = 3
integer :: sum, diff, prod, quot, rem, neg
sum = a + b      ! Addition: 13
diff = a - b     ! Subtraktion: 7
prod = a * b     ! Multiplikation: 30
quot = a / b     ! Division: 3 (Integer-Division)
rem = mod(a, b)  ! Modulo: 1
neg = -a         ! Prefix unary minus: -10
```

**Besonderheiten:**
- Integer-Division schneidet ab (keine Rundung)
- `mod` Funktion für Modulo
- Unary minus als Prefix-Operator

**Weiterführende Links:**
- [Fortran Standard - Arithmetic operations](https://gcc.gnu.org/onlinedocs/gfortran/Arithmetic-operators.html)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// Arithmetische Operatoren (getrennt für Int und Float)
let a = 10
let b = 3
let sum = a + b      // Int-Addition: 13
let diff = a - b     // Int-Subtraktion: 7
let prod = a * b     // Int-Multiplikation: 30
let quot = a / b     // Int-Division: 3 (abgerundet)
let rem = a % b      // Int-Modulo: 1

// Float-Operatoren enden mit .
let x = 10.0
let y = 3.0
let fsum = x +. y    // Float-Addition: 13.0
let fdiv = x /. y    // Float-Division: 3.333...
```

**Besonderheiten:**
- Getrennte Operatoren für Int (`+`, `-`, `*`, `/`, `%`) und Float (`+.`, `-.`, `*.`, `/.`)
- Keine automatische Konvertierung zwischen Int und Float
- Integer-Division wird abgerundet

**Weiterführende Links:**
- [Gleam Documentation - Ints](https://tour.gleam.run/data-types/ints/)

</TabItem>
<TabItem value="go" label="Go">

```go
// Arithmetische Operatoren
a := 10
b := 3
sum := a + b      // Addition: 13
diff := a - b     // Subtraktion: 7
prod := a * b     // Multiplikation: 30
quot := a / b     // Division: 3 (Integer-Division)
rem := a % b      // Modulo: 1
neg := -a         // Prefix unary minus: -10
```

**Besonderheiten:**
- Integer-Division schneidet ab (keine Rundung)
- Modulo-Operator `%` für Rest bei Division
- Unary minus als Prefix-Operator

**Weiterführende Links:**
- [Go Documentation - Arithmetic operators](https://go.dev/ref/spec#Arithmetic_operators)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Arithmetische Operatoren
def a = 10
def b = 3
def sum = a + b          // Addition: 13
def diff = a - b         // Subtraktion: 7
def prod = a * b         // Multiplikation: 30
def quot = a / b         // Division: 3.3333333333 (BigDecimal)
def intQuot = a.intdiv(b) // Integer-Division: 3
def rem = a % b          // Modulo: 1
def neg = -a             // Prefix unary minus: -10
```

**Besonderheiten:**
- Division `/` ergibt BigDecimal (nicht Integer-Division wie in Java)
- `intdiv()` für Integer-Division
- Modulo-Operator `%` für Rest
- Power-Operator `**` verfügbar (`2**10` = 1024)

**Weiterführende Links:**
- [Groovy Documentation - Arithmetic Operators](https://groovy-lang.org/operators.html#_arithmetic_operators)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Arithmetische Operatoren
a = 10
b = 3
sum = a + b      -- Addition: 13
diff = a - b     -- Subtraktion: 7
prod = a * b     -- Multiplikation: 30
quot = a `div` b -- Integer-Division: 3
rem = a `mod` b  -- Modulo: 1
neg = -a         -- Prefix unary minus: -10
```

**Besonderheiten:**
- `div` für Integer-Division (rundet gegen negativ unendlich)
- `mod` für Modulo
- `quot` und `rem` für truncating division (rundet gegen null)
- Unary minus als Prefix-Operator

**Weiterführende Links:**
- [Haskell Documentation - Arithmetic operators](https://www.haskell.org/onlinereport/haskell2010/haskellch6.html#x13-1210006.4)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Arithmetische Operatoren
var a = 10;
var b = 3;
var sum = a + b;      // Addition: 13
var diff = a - b;     // Subtraktion: 7
var prod = a * b;     // Multiplikation: 30
var quot = Std.int(a / b); // Integer-Division: 3
var rem = a % b;      // Modulo: 1
var neg = -a;         // Prefix unary minus: -10
```

**Besonderheiten:**
- Normale Division `/` ergibt Float
- `Std.int()` für Integer-Division
- Modulo-Operator `%` für Rest bei Division

**Weiterführende Links:**
- [Haxe Documentation - Operators](https://haxe.org/manual/expression-operators.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Arithmetische Operatoren
a : Int
a = 10
b : Int
b = 3
sum : Int
sum = a + b      -- Addition: 13
diff : Int
diff = a - b     -- Subtraktion: 7
prod : Int
prod = a * b     -- Multiplikation: 30
quot : Int
quot = a `div` b -- Integer-Division: 3
rem : Int
rem = a `mod` b  -- Modulo: 1
neg : Int
neg = -a         -- Prefix unary minus: -10
```

**Besonderheiten:**
- `div` für Integer-Division
- `mod` für Modulo
- Unary minus als Prefix-Operator

**Weiterführende Links:**
- [Idris 2 Documentation - Interfaces](https://idris2.readthedocs.io/en/latest/tutorial/interfaces.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Arithmetische Operatoren
int a = 10;
int b = 3;
int sum = a + b;      // Addition: 13
int diff = a - b;     // Subtraktion: 7
int prod = a * b;     // Multiplikation: 30
int quot = a / b;     // Division: 3 (Integer-Division)
int rem = a % b;      // Modulo: 1
int neg = -a;         // Prefix unary minus: -10
```

**Besonderheiten:**
- Integer-Division schneidet ab (keine Rundung)
- Modulo-Operator `%` für Rest bei Division
- Unary minus als Prefix-Operator

**Weiterführende Links:**
- [Oracle Java Documentation - Arithmetic Operators](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/op1.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Arithmetische Operatoren
let a = 10;
let b = 3;
let sum = a + b;      // Addition: 13
let diff = a - b;     // Subtraktion: 7
let prod = a * b;     // Multiplikation: 30
let quot = Math.floor(a / b); // Integer-Division: 3
let rem = a % b;      // Modulo: 1
let neg = -a;         // Prefix unary minus: -10
```

**Besonderheiten:**
- Normale Division `/` ergibt immer Number (Float)
- `Math.floor()` für Integer-Division
- Modulo-Operator `%` für Rest bei Division

**Weiterführende Links:**
- [MDN Web Docs - Arithmetic operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#arithmetic_operators)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Arithmetische Operatoren
a = 10
b = 3
sum = a + b      # Addition: 13
diff = a - b     # Subtraktion: 7
prod = a * b     # Multiplikation: 30
quot = a ÷ b     # Integer-Division: 3
rem = a % b      # Modulo: 1
neg = -a         # Prefix unary minus: -10
```

**Besonderheiten:**
- `÷` für Integer-Division (Unicode-Operator)
- Modulo-Operator `%` für Rest bei Division
- Unary minus als Prefix-Operator

**Weiterführende Links:**
- [Julia Documentation - Arithmetic Operators](https://docs.julialang.org/en/v1/manual/mathematical-operations/#Arithmetic-Operators)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Arithmetische Operatoren
val a = 10
val b = 3
val sum = a + b      // Addition: 13
val diff = a - b     // Subtraktion: 7
val prod = a * b     // Multiplikation: 30
val quot = a / b     // Integer-Division: 3
val rem = a % b      // Modulo: 1
val neg = -a         // Prefix unary minus: -10
```

**Besonderheiten:**
- Standardmäßige Infix-Operatoren `+`, `-`, `*`, `/`, `%`
- `/` für Integer-Division bei Integer-Operanden
- Unary minus als Prefix-Operator

**Weiterführende Links:**
- [Koka Language Guide - Expressions](https://koka-lang.github.io/koka/doc/book.html#sec-expressions)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Arithmetische Operatoren
def a : Int := 10
def b : Int := 3
#eval a + b      -- Addition: 13
#eval a - b      -- Subtraktion: 7
#eval a * b      -- Multiplikation: 30
#eval a / b      -- Division: 3 (Integer-Division)
#eval a % b      -- Modulo: 1
#eval -a         -- Prefix unary minus: -10
```

**Besonderheiten:**
- Arithmetische Operatoren über Typklassen (`Add`, `Sub`, `Mul`, `Div`, `Mod`)
- Integer-Division schneidet ab (Truncation)
- `Nat`-Typ hat natürliche Subtraktion (Minimum ist 0)

**Weiterführende Links:**
- [Lean 4 – Functional Programming in Lean 4](https://lean-lang.org/functional_programming_in_lean/)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Arithmetische Operatoren
val a = 10
val b = 3
val sum = a + b      // Addition: 13
val diff = a - b     // Subtraktion: 7
val prod = a * b     // Multiplikation: 30
val quot = a / b     // Division: 3 (Integer-Division)
val rem = a % b      // Modulo: 1
val neg = -a         // Prefix unary minus: -10
```

**Besonderheiten:**
- Integer-Division schneidet ab (keine Rundung)
- Modulo-Operator `%` für Rest bei Division (seit Kotlin 1.1)
- Unary minus als Prefix-Operator

**Weiterführende Links:**
- [Kotlin Documentation - Arithmetic operations](https://kotlinlang.org/docs/numbers.html#arithmetic-operations)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Arithmetische Operatoren
local a = 10
local b = 3
local sum = a + b      -- Addition: 13
local diff = a - b     -- Subtraktion: 7
local prod = a * b     -- Multiplikation: 30
local quot = a // b    -- Integer-Division: 3 (seit Lua 5.3)
local rem = a % b      -- Modulo: 1
local neg = -a         -- Prefix unary minus: -10
```

**Besonderheiten:**
- `//` für Integer-Division (seit Lua 5.3)
- Modulo-Operator `%` für Rest bei Division
- Unary minus als Prefix-Operator

**Weiterführende Links:**
- [Lua Documentation - Arithmetic Operators](https://www.lua.org/manual/5.4/manual.html#3.4.1)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% Arithmetische Operatoren
a = 10;
b = 3;
sum_val = a + b;       % Addition: 13
diff = a - b;          % Subtraktion: 7
prod = a * b;          % Multiplikation: 30
quot = floor(a / b);   % Integer-Division: 3
rem_val = mod(a, b);   % Modulo: 1
neg = -a;              % Prefix unary minus: -10
```

**Besonderheiten:**
- Normale Division `/` ergibt Float
- `floor(a / b)` für Integer-Division bei double-Werten
- `idivide()` für Integer-Division bei Integer-Typen
- `mod()` Funktion für Modulo

**Weiterführende Links:**
- [MATLAB Documentation - Arithmetic Operations](https://www.mathworks.com/help/matlab/arithmetic.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Arithmetische Operatoren
A = 10,
B = 3,
Sum = A + B,       % Addition: 13
Diff = A - B,      % Subtraktion: 7
Prod = A * B,      % Multiplikation: 30
Quot = A // B,     % Integer-Division: 3
Mod = A mod B,     % Modulo: 1
Neg = -A           % Prefix unary minus: -10
```

**Besonderheiten:**
- Arithmetische Operatoren sind Funktionen — Ausdrücke werden direkt ausgewertet (kein `is/2` wie in Prolog)
- `//` für Integer-Division (Truncation gegen Null), `div` für Floor-Division
- `mod` für Modulo (bezogen auf `div`), `rem` für Rest (bezogen auf `//`)
- `**` für Potenzierung (z.B. `X = 2 ** 10` ergibt 1024)

**Weiterführende Links:**
- [Mercury Library Reference - int](https://www.mercurylang.org/information/doc-latest/mercury_library/int.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# Arithmetische Operatoren
var a: Int = 10
var b: Int = 3
var sum = a + b      # Addition: 13
var diff = a - b     # Subtraktion: 7
var prod = a * b     # Multiplikation: 30
var quot = a // b    # Integer-Division: 3
var rem = a % b      # Modulo: 1
var neg = -a         # Prefix unary minus: -10
```

**Besonderheiten:**
- `//` für Integer-Division
- Modulo-Operator `%` für Rest bei Division
- Unary minus als Prefix-Operator

**Weiterführende Links:**
- [Mojo Documentation](https://docs.modular.com/mojo/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Arithmetische Operatoren
var a = 10
var b = 3
var sum = a + b      # Addition: 13
var diff = a - b     # Subtraktion: 7
var prod = a * b     # Multiplikation: 30
var quot = a div b   # Integer-Division: 3
var rem = a mod b    # Modulo: 1
var neg = -a         # Prefix unary minus: -10
```

**Besonderheiten:**
- `div` für Integer-Division
- `mod` für Modulo
- Unary minus als Prefix-Operator

**Weiterführende Links:**
- [Nim Documentation - Operators](https://nim-lang.org/docs/manual.html#expressions-and-statements)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Arithmetische Operatoren
int a = 10;
int b = 3;
int sum = a + b;      // Addition: 13
int diff = a - b;     // Subtraktion: 7
int prod = a * b;     // Multiplikation: 30
int quot = a / b;     // Division: 3 (Integer-Division)
int rem = a % b;      // Modulo: 1
int neg = -a;         // Prefix unary minus: -10
```

**Besonderheiten:**
- Integer-Division schneidet ab (keine Rundung)
- Modulo-Operator `%` für Rest bei Division
- Unary minus als Prefix-Operator

**Weiterführende Links:**
- [Apple Developer Documentation - Operators](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/FoundationTypesandCollections/FoundationTypesandCollections.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Arithmetische Operatoren
var
  a, b: Integer;
  sum, diff, prod, quot, rem, neg: Integer;
begin
  a := 10;
  b := 3;
  sum := a + b;      // Addition: 13
  diff := a - b;     // Subtraktion: 7
  prod := a * b;     // Multiplikation: 30
  quot := a div b;   // Integer-Division: 3
  rem := a mod b;    // Modulo: 1
  neg := -a;         // Prefix unary minus: -10
end;
```

**Besonderheiten:**
- `div` für Integer-Division
- `mod` für Modulo
- Unary minus als Prefix-Operator

**Weiterführende Links:**
- [Delphi Documentation - Arithmetic operators](https://docwiki.embarcadero.com/RADStudio/Alexandria/en/Arithmetic_Operators)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Arithmetische Operatoren *)
let a = 10
let b = 3
let sum = a + b      (* Addition: 13 *)
let diff = a - b     (* Subtraktion: 7 *)
let prod = a * b     (* Multiplikation: 30 *)
let quot = a / b     (* Integer-Division: 3 *)
let rem = a mod b    (* Modulo: 1 *)
let neg = -a         (* Prefix unary minus: -10 *)
```

**Besonderheiten:**
- Integer-Division schneidet ab (keine Rundung)
- `mod` für Modulo
- Unary minus als Prefix-Operator

**Weiterführende Links:**
- [OCaml Documentation - Arithmetic operations](https://v2.ocaml.org/manual/expr.html#ss:arithmetic)

</TabItem>
<TabItem value="octave" label="Octave">

```matlab
% Arithmetische Operatoren
a = 10;
b = 3;
sum = a + b;      % Addition: 13
diff = a - b;     % Subtraktion: 7
prod = a * b;     % Multiplikation: 30
quot = idivide(a, b); % Integer-Division: 3
rem = mod(a, b);  % Modulo: 1
neg = -a;         % Prefix unary minus: -10
```

**Besonderheiten:**
- Normale Division `/` ergibt Float
- `idivide()` für Integer-Division
- `mod()` Funktion für Modulo

**Weiterführende Links:**
- [GNU Octave Documentation - Arithmetic Operators](https://octave.org/doc/v8.1.0/Arithmetic-Ops.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Arithmetische Operatoren
a :: 10
b :: 3
sum :: a + b      // Addition: 13
diff :: a - b     // Subtraktion: 7
prod :: a * b     // Multiplikation: 30
quot :: a / b     // Division: 3 (Integer-Division)
rem :: a % b      // Modulo: 1
neg :: -a         // Prefix unary minus: -10
```

**Besonderheiten:**
- Integer-Division schneidet ab (keine Rundung)
- Modulo-Operator `%` für Rest bei Division
- Unary minus als Prefix-Operator

**Weiterführende Links:**
- [Odin Documentation - Operators](https://odin-lang.org/docs/overview/#operators)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Arithmetische Operatoren
my $a = 10;
my $b = 3;
my $sum = $a + $b;      # Addition: 13
my $diff = $a - $b;     # Subtraktion: 7
my $prod = $a * $b;     # Multiplikation: 30
my $quot = int($a / $b); # Integer-Division: 3
my $rem = $a % $b;      # Modulo: 1
my $neg = -$a;          # Prefix unary minus: -10
```

**Besonderheiten:**
- Normale Division `/` ergibt Float
- `int()` für Integer-Division
- Modulo-Operator `%` für Rest bei Division

**Weiterführende Links:**
- [Perl Documentation - Arithmetic Operators](https://perldoc.perl.org/perlop#Arithmetic-Operators)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
// Arithmetische Operatoren
$a = 10;
$b = 3;
$sum = $a + $b;         // Addition: 13
$diff = $a - $b;        // Subtraktion: 7
$prod = $a * $b;        // Multiplikation: 30
$quot = intdiv($a, $b); // Integer-Division: 3 (seit PHP 7.0)
$rem = $a % $b;         // Modulo: 1
$neg = -$a;             // Prefix unary minus: -10
$exp = $a ** $b;        // Exponentiation: 1000 (seit PHP 5.6)
?>
```

**Besonderheiten:**
- Normale Division `/` ergibt Float bei nicht-ganzzahligem Ergebnis
- `intdiv()` für Integer-Division (seit PHP 7.0)
- `**` Exponentiation-Operator (seit PHP 5.6)
- Modulo-Operator `%` für Rest bei Division

**Weiterführende Links:**
- [PHP Documentation - Arithmetic Operators](https://www.php.net/manual/en/language.operators.arithmetic.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Arithmetische Operatoren (Auswertung mit is/2)
A = 10,
B = 3,
Sum is A + B,      % Addition: 13
Diff is A - B,     % Subtraktion: 7
Prod is A * B,     % Multiplikation: 30
Quot is A / B,     % Division: 3.3333...
IDiv is A // B,    % Integer-Division: 3
Mod is A mod B,    % Modulo: 1
Neg is -A.         % Prefix unary minus: -10
```

**Besonderheiten:**
- Arithmetische Auswertung erfolgt ausschließlich über `is/2` — ohne `is` bleiben Ausdrücke unausgewertet
- `//` für Integer-Division, `/` für Gleitkomma-Division
- `mod` für Modulo, `rem` für Rest (unterschiedliches Verhalten bei negativen Zahlen)
- `**` für Potenzierung (z.B. `X is 2 ** 10` ergibt 1024)

**Weiterführende Links:**
- [SWI-Prolog Documentation - Arithmetic](https://www.swi-prolog.org/pldoc/man?section=arith)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Arithmetische Operatoren
a = 10
b = 3
sum = a + b      -- Addition: 13
diff = a - b     -- Subtraktion: 7
prod = a * b     -- Multiplikation: 30
quot = a `div` b -- Integer-Division: 3
rem = a `mod` b  -- Modulo: 1
neg = -a         -- Prefix unary minus: -10
```

**Besonderheiten:**
- `div` für Integer-Division
- `mod` für Modulo
- Unary minus als Prefix-Operator

**Weiterführende Links:**
- [PureScript Documentation - Operators](https://github.com/purescript/documentation/blob/master/language/Operators.md)

</TabItem>
<TabItem value="python" label="Python">

```python
# Arithmetische Operatoren
a = 10
b = 3
sum = a + b      # Addition: 13
diff = a - b     # Subtraktion: 7
prod = a * b     # Multiplikation: 30
quot = a // b    # Integer-Division: 3
rem = a % b      # Modulo: 1
neg = -a         # Prefix unary minus: -10
```

**Besonderheiten:**
- `//` für Integer-Division (floor division)
- Modulo-Operator `%` für Rest bei Division
- Unary minus als Prefix-Operator

**Weiterführende Links:**
- [Python Documentation - Numeric Types](https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex)

</TabItem>
<TabItem value="r" label="R">

```r
# Arithmetische Operatoren
a <- 10
b <- 3
sum <- a + b      # Addition: 13
diff <- a - b     # Subtraktion: 7
prod <- a * b     # Multiplikation: 30
quot <- a %/% b   # Integer-Division: 3
rem <- a %% b     # Modulo: 1
neg <- -a         # Prefix unary minus: -10
```

**Besonderheiten:**
- `%/%` für Integer-Division
- `%%` für Modulo
- Unary minus als Prefix-Operator

**Weiterführende Links:**
- [R Documentation - Arithmetic operators](https://stat.ethz.ch/R-manual/R-devel/library/base/html/Arithmetic.html)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
;; Arithmetische Operatoren
(define a 10)
(define b 3)
(define sum (+ a b))      ; Addition: 13
(define diff (- a b))     ; Subtraktion: 7
(define prod (* a b))     ; Multiplikation: 30
(define quot (quotient a b)) ; Integer-Division: 3
(define rem (remainder a b)) ; Rest: 1
(define neg (- a))        ; Prefix unary minus: -10
```

**Besonderheiten:**
- Arithmetische Operatoren sind Funktionen in Prefix-Notation
- `quotient` für Integer-Division
- `remainder` für Rest bei Division

**Weiterführende Links:**
- [Racket Documentation - Arithmetic](https://docs.racket-lang.org/reference/generic-numbers.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Arithmetische Operatoren
a = 10
b = 3
sum = a + b        -- Addition: 13
diff = a - b       -- Subtraktion: 7
prod = a * b       -- Multiplikation: 30
division = Num.divTrunc a b  -- Integer-Division: 3
remainder = Num.rem a b      -- Rest: 1
neg = Num.neg a    -- Negation: -10
```

**Besonderheiten:**
- `Num.divTrunc` für Integer-Division
- `Num.rem` für Rest bei Division
- `Num.neg` oder `-` als Prefix für Negation

**Weiterführende Links:**
- [Roc Documentation - Num](https://www.roc-lang.org/builtins/Num)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Arithmetische Operatoren
a = 10
b = 3
sum = a + b      # Addition: 13
diff = a - b     # Subtraktion: 7
prod = a * b     # Multiplikation: 30
quot = a / b     # Division: 3 (Integer-Division bei Integer-Typen)
rem = a % b      # Modulo: 1
neg = -a         # Prefix unary minus: -10
```

**Besonderheiten:**
- Integer-Division schneidet ab (keine Rundung)
- Modulo-Operator `%` für Rest bei Division
- Unary minus als Prefix-Operator

**Weiterführende Links:**
- [Ruby Documentation - Operators](https://docs.ruby-lang.org/en/3.2/syntax/operators_rdoc.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Arithmetische Operatoren
let a = 10;
let b = 3;
let sum = a + b;      // Addition: 13
let diff = a - b;     // Subtraktion: 7
let prod = a * b;     // Multiplikation: 30
let quot = a / b;     // Division: 3 (Integer-Division)
let rem = a % b;      // Modulo: 1
let neg = -a;         // Prefix unary minus: -10
```

**Besonderheiten:**
- Integer-Division schneidet ab (keine Rundung)
- Modulo-Operator `%` für Rest bei Division
- Unary minus als Prefix-Operator

**Weiterführende Links:**
- [Rust Documentation - Arithmetic operators](https://doc.rust-lang.org/book/ch03-02-data-types.html#integer-types)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Arithmetische Operatoren
val a = 10
val b = 3
val sum = a + b      // Addition: 13
val diff = a - b     // Subtraktion: 7
val prod = a * b     // Multiplikation: 30
val quot = a / b     // Division: 3 (Integer-Division)
val rem = a % b      // Modulo: 1
val neg = -a         // Prefix unary minus: -10
```

**Besonderheiten:**
- Integer-Division schneidet ab (keine Rundung)
- Modulo-Operator `%` für Rest bei Division
- Unary minus als Prefix-Operator

**Weiterführende Links:**
- [Scala Documentation - Arithmetic operations](https://docs.scala-lang.org/tour/operators.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; Arithmetische Operatoren
(define a 10)
(define b 3)
(define sum (+ a b))      ; Addition: 13
(define diff (- a b))     ; Subtraktion: 7
(define prod (* a b))     ; Multiplikation: 30
(define quot (quotient a b)) ; Integer-Division: 3
(define rem (remainder a b)) ; Rest: 1
(define neg (- a))        ; Prefix unary minus: -10
```

**Besonderheiten:**
- Arithmetische Operatoren sind Funktionen in Prefix-Notation
- `quotient` für Integer-Division
- `remainder` für Rest bei Division

**Weiterführende Links:**
- [R7RS Scheme Specification - Arithmetic operations](https://small.r7rs.org/attachment/r7rs.pdf)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Arithmetische Operatoren
let a = 10
let b = 3
let sum = a + b      // Addition: 13
let diff = a - b     // Subtraktion: 7
let prod = a * b     // Multiplikation: 30
let quot = a / b     // Division: 3 (Integer-Division)
let rem = a % b      // Modulo: 1
let neg = -a         // Prefix unary minus: -10
```

**Besonderheiten:**
- Integer-Division schneidet ab (keine Rundung)
- Modulo-Operator `%` für Rest bei Division
- Unary minus als Prefix-Operator

**Weiterführende Links:**
- [Swift Documentation - Basic Operators](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/basicoperators/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Arithmetische Operatoren
let a = 10;
let b = 3;
let sum = a + b;      // Addition: 13
let diff = a - b;     // Subtraktion: 7
let prod = a * b;     // Multiplikation: 30
let quot = Math.floor(a / b); // Integer-Division: 3
let rem = a % b;      // Modulo: 1
let neg = -a;         // Prefix unary minus: -10
```

**Besonderheiten:**
- Normale Division `/` ergibt immer Number (Float)
- `Math.floor()` für Integer-Division
- Modulo-Operator `%` für Rest bei Division

**Weiterführende Links:**
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Arithmetische Operatoren
Dim a As Integer = 10
Dim b As Integer = 3
Dim sum As Integer = a + b      ' Addition: 13
Dim diff As Integer = a - b      ' Subtraktion: 7
Dim prod As Integer = a * b      ' Multiplikation: 30
Dim quot As Integer = a \ b      ' Integer-Division: 3
Dim rem As Integer = a Mod b    ' Modulo: 1
Dim neg As Integer = -a          ' Prefix unary minus: -10
```

**Besonderheiten:**
- `\` für Integer-Division
- `Mod` für Modulo
- Unary minus als Prefix-Operator

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Arithmetic Operators](https://learn.microsoft.com/en-us/dotnet/visual-basic/language-reference/operators/arithmetic-operators)

</TabItem>
<TabItem value="v" label="V">

```v
// Arithmetische Operatoren
a := 10
b := 3
sum := a + b      // Addition: 13
diff := a - b     // Subtraktion: 7
prod := a * b     // Multiplikation: 30
quot := a / b     // Division: 3 (Integer-Division)
rem := a % b      // Modulo: 1
neg := -a         // Prefix unary minus: -10
```

**Besonderheiten:**
- Integer-Division schneidet ab (keine Rundung)
- Modulo-Operator `%` für Rest bei Division
- Unary minus als Prefix-Operator

**Weiterführende Links:**
- [V Documentation - Operators](https://github.com/vlang/v/blob/master/doc/docs.md)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Arithmetische Operatoren *)
a = 10;
b = 3;
sum = a + b      (* Addition: 13 *)
diff = a - b     (* Subtraktion: 7 *)
prod = a * b     (* Multiplikation: 30 *)
quot = Quotient[a, b] (* Integer-Division: 3 *)
rem = Mod[a, b]  (* Modulo: 1 *)
neg = -a         (* Prefix unary minus: -10 *)
```

**Besonderheiten:**
- Normale Division `/` ergibt Rational oder Float
- `Quotient[]` für Integer-Division
- `Mod[]` für Modulo

**Weiterführende Links:**
- [Wolfram Language Documentation - Arithmetic](https://reference.wolfram.com/language/guide/Arithmetic.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Arithmetische Operatoren
const a: i32 = 10;
const b: i32 = 3;
const sum = a + b;      // Addition: 13
const diff = a - b;     // Subtraktion: 7
const prod = a * b;     // Multiplikation: 30
const quot = @divTrunc(a, b); // Integer-Division: 3
const rem = @rem(a, b); // Modulo: 1
const neg = -a;         // Prefix unary minus: -10
```

**Besonderheiten:**
- `@divTrunc()` für Integer-Division (truncating)
- `@rem()` für Modulo
- Unary minus als Prefix-Operator

**Weiterführende Links:**
- [Zig Documentation - Operators](https://ziglang.org/documentation/0.11.0/#Operators)

</TabItem>
</Tabs>


## 5.1.2. Comparison Operators (Equality, Relational)

Vergleichsoperatoren für Gleichheit (`==`, `!=`) und relationale Vergleiche (`<`, `>`, `<=`, `>=`). Vergleichen Werte und geben boolesche Ergebnisse zurück.

### Sprachen {#sprachen}

<Tabs availableTabs={['ada', 'c', 'csharp', 'cpp', 'carbon', 'clojure', 'common-lisp', 'crystal', 'd', 'dart', 'eiffel', 'elixir', 'elm', 'erlang', 'fsharp', 'fortran', 'gleam', 'go', 'groovy', 'haskell', 'haxe', 'idris', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'lua', 'matlab', 'mercury', 'mojo', 'nim', 'objective-c', 'object-pascal', 'ocaml', 'octave', 'odin', 'perl', 'php', 'prolog', 'purescript', 'python', 'r', 'racket', 'roc', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'vbnet', 'v', 'wolfram-language', 'zig']}>
<TabItem value="ada" label="Ada">

```ada
-- Vergleichsoperatoren
a : Integer := 10;
b : Integer := 3;
eq : Boolean := a = b;      -- Gleichheit: False
ne : Boolean := a /= b;     -- Ungleichheit: True
lt : Boolean := a < b;      -- Kleiner als: False
gt : Boolean := a > b;      -- Größer als: True
le : Boolean := a <= b;     -- Kleiner oder gleich: False
ge : Boolean := a >= b;     -- Größer oder gleich: True
```

**Besonderheiten:**
- `=` für Gleichheit, `/=` für Ungleichheit
- Alle Operatoren geben Boolean zurück

**Weiterführende Links:**
- [Ada Reference Manual - Relational Operators](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-4-5-2.html)

</TabItem>
<TabItem value="c" label="C">

```c
// Vergleichsoperatoren
int a = 10;
int b = 3;
int eq = (a == b);      // Gleichheit: 0 (false)
int ne = (a != b);      // Ungleichheit: 1 (true)
int lt = (a < b);       // Kleiner als: 0 (false)
int gt = (a > b);       // Größer als: 1 (true)
int le = (a <= b);      // Kleiner oder gleich: 0 (false)
int ge = (a >= b);      // Größer oder gleich: 1 (true)
```

**Besonderheiten:**
- Vergleichsoperatoren geben `int` zurück (0 für false, 1 für true)
- `==` für Gleichheit, `!=` für Ungleichheit

**Weiterführende Links:**
- [C Standard - Relational operators](https://en.cppreference.com/w/c/language/operator_comparison)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Vergleichsoperatoren
int a = 10;
int b = 3;
bool eq = a == b;      // Gleichheit: false
bool ne = a != b;      // Ungleichheit: true
bool lt = a < b;       // Kleiner als: false
bool gt = a > b;       // Größer als: true
bool le = a <= b;      // Kleiner oder gleich: false
bool ge = a >= b;      // Größer oder gleich: true
```

**Besonderheiten:**
- Alle Operatoren geben `bool` zurück
- `==` für Gleichheit, `!=` für Ungleichheit

**Weiterführende Links:**
- [Microsoft C# Documentation - Comparison operators](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/comparison-operators)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Vergleichsoperatoren
int a = 10;
int b = 3;
bool eq = a == b;      // Gleichheit: false
bool ne = a != b;      // Ungleichheit: true
bool lt = a < b;       // Kleiner als: false
bool gt = a > b;       // Größer als: true
bool le = a <= b;      // Kleiner oder gleich: false
bool ge = a >= b;      // Größer oder gleich: true
```

**Besonderheiten:**
- Alle Operatoren geben `bool` zurück
- `==` für Gleichheit, `!=` für Ungleichheit

**Weiterführende Links:**
- [cppreference.com - Comparison operators](https://en.cppreference.com/w/cpp/language/operator_comparison)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Vergleichsoperatoren
var a: i32 = 10;
var b: i32 = 3;
var eq: bool = a == b;      // Gleichheit: false
var ne: bool = a != b;      // Ungleichheit: true
var lt: bool = a < b;       // Kleiner als: false
var gt: bool = a > b;       // Größer als: true
var le: bool = a <= b;      // Kleiner oder gleich: false
var ge: bool = a >= b;      // Größer oder gleich: true
```

**Besonderheiten:**
- Experimentelle Sprache, Syntax kann sich noch ändern
- Alle Operatoren geben `bool` zurück

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Vergleichsoperatoren
(def a 10)
(def b 3)
(def eq (= a b))      ; Gleichheit: false
(def ne (not= a b))   ; Ungleichheit: true
(def lt (< a b))      ; Kleiner als: false
(def gt (> a b))      ; Größer als: true
(def le (<= a b))     ; Kleiner oder gleich: false
(def ge (>= a b))     ; Größer oder gleich: true
```

**Besonderheiten:**
- Vergleichsoperatoren sind Funktionen in Prefix-Notation
- Alle geben Boolean zurück
- `=` für Gleichheit, `not=` für Ungleichheit

**Weiterführende Links:**
- [Clojure Documentation - Equality](https://clojure.org/guides/equality)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Vergleichsoperatoren
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

**Besonderheiten:**
- Vergleichsoperatoren sind Funktionen in Prefix-Notation
- `t` für true, `nil` für false
- `=` für Gleichheit, `/=` für Ungleichheit

**Weiterführende Links:**
- [Common Lisp HyperSpec - Comparison Operators](http://www.lispworks.com/documentation/HyperSpec/Body/f_eq_sle.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Vergleichsoperatoren
a = 10
b = 3
eq = a == b      # Gleichheit: false
ne = a != b      # Ungleichheit: true
lt = a < b       # Kleiner als: false
gt = a > b       # Größer als: true
le = a <= b      # Kleiner oder gleich: false
ge = a >= b      # Größer oder gleich: true
```

**Besonderheiten:**
- Alle Operatoren geben Bool zurück
- `==` für Gleichheit, `!=` für Ungleichheit

**Weiterführende Links:**
- [Crystal Documentation - Operators](https://crystal-lang.org/reference/1.11/syntax_and_semantics/operators.html)

</TabItem>
<TabItem value="d" label="D">

```d
// Vergleichsoperatoren
int a = 10;
int b = 3;
bool eq = a == b;      // Gleichheit: false
bool ne = a != b;      // Ungleichheit: true
bool lt = a < b;       // Kleiner als: false
bool gt = a > b;       // Größer als: true
bool le = a <= b;      // Kleiner oder gleich: false
bool ge = a >= b;      // Größer oder gleich: true
```

**Besonderheiten:**
- Alle Operatoren geben `bool` zurück
- `==` für Gleichheit, `!=` für Ungleichheit

**Weiterführende Links:**
- [D Language Specification - Comparison Operators](https://dlang.org/spec/expression.html#comparison)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Vergleichsoperatoren
int a = 10;
int b = 3;
bool eq = a == b;      // Gleichheit: false
bool ne = a != b;      // Ungleichheit: true
bool lt = a < b;       // Kleiner als: false
bool gt = a > b;       // Größer als: true
bool le = a <= b;      // Kleiner oder gleich: false
bool ge = a >= b;      // Größer oder gleich: true
```

**Besonderheiten:**
- Alle Operatoren geben `bool` zurück
- `==` für Gleichheit, `!=` für Ungleichheit

**Weiterführende Links:**
- [Dart Language Tour - Equality and relational operators](https://dart.dev/guides/language/language-tour#equality-and-relational-operators)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
-- Vergleichsoperatoren
a: INTEGER := 10
b: INTEGER := 3
eq: BOOLEAN := a = b      -- Gleichheit: False
ne: BOOLEAN := a /= b     -- Ungleichheit: True
lt: BOOLEAN := a < b      -- Kleiner als: False
gt: BOOLEAN := a > b      -- Größer als: True
le: BOOLEAN := a <= b     -- Kleiner oder gleich: False
ge: BOOLEAN := a >= b     -- Größer oder gleich: True
```

**Besonderheiten:**
- Alle Operatoren geben BOOLEAN zurück
- `=` für Gleichheit, `/=` für Ungleichheit

**Weiterführende Links:**
- [Eiffel Documentation - Operators](https://www.eiffel.org/doc/eiffel/Language_Reference_Manual)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Vergleichsoperatoren
a = 10
b = 3
eq = a == b      # Gleichheit: false
ne = a != b      # Ungleichheit: true
lt = a < b       # Kleiner als: false
gt = a > b       # Größer als: true
le = a <= b      # Kleiner oder gleich: false
ge = a >= b      # Größer oder gleich: true
```

**Besonderheiten:**
- Alle Operatoren geben Boolean zurück
- `==` für Gleichheit, `!=` für Ungleichheit

**Weiterführende Links:**
- [Elixir Documentation - Basic operators](https://hexdocs.pm/elixir/operators.html)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Vergleichsoperatoren
a = 10
b = 3
eq = a == b      -- Gleichheit: False
ne = a /= b      -- Ungleichheit: True
lt = a < b       -- Kleiner als: False
gt = a > b       -- Größer als: True
le = a <= b      -- Kleiner oder gleich: False
ge = a >= b      -- Größer oder gleich: True
```

**Besonderheiten:**
- Alle Operatoren geben Bool zurück
- `==` für Gleichheit, `/=` für Ungleichheit

**Weiterführende Links:**
- [Elm Documentation - Basics](https://guide.elm-lang.org/core_language.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% Vergleichsoperatoren
A = 10,
B = 3,
Eq = (A == B),      % Gleichheit: false
Ne = (A =/= B),     % Ungleichheit: true
Lt = (A < B),       % Kleiner als: false
Gt = (A > B),       % Größer als: true
Le = (A =< B),      % Kleiner oder gleich: false
Ge = (A >= B).      % Größer oder gleich: true
```

**Besonderheiten:**
- Alle Operatoren geben Boolean zurück
- `==` für Gleichheit, `=/=` für Ungleichheit
- `=<` für kleiner oder gleich (nicht `<=`)

**Weiterführende Links:**
- [Erlang Documentation - Comparison Operators](https://www.erlang.org/doc/reference_manual/expressions.html#comparison-operators)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Vergleichsoperatoren
let a = 10
let b = 3
let eq = a = b      // Gleichheit: false
let ne = a <> b     // Ungleichheit: true
let lt = a < b      // Kleiner als: false
let gt = a > b      // Größer als: true
let le = a <= b     // Kleiner oder gleich: false
let ge = a >= b     // Größer oder gleich: true
```

**Besonderheiten:**
- Alle Operatoren geben `bool` zurück
- `=` für Gleichheit, `<>` für Ungleichheit

**Weiterführende Links:**
- [F# Documentation - Comparison Operators](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/symbol-and-operator-reference/arithmetic-operators)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Vergleichsoperatoren
integer :: a = 10
integer :: b = 3
logical :: eq, ne, lt, gt, le, ge
eq = a == b      ! Gleichheit: .false.
ne = a /= b      ! Ungleichheit: .true.
lt = a < b       ! Kleiner als: .false.
gt = a > b       ! Größer als: .true.
le = a <= b      ! Kleiner oder gleich: .false.
ge = a >= b      ! Größer oder gleich: .true.
```

**Besonderheiten:**
- Alle Operatoren geben LOGICAL zurück
- `==` für Gleichheit, `/=` für Ungleichheit

**Weiterführende Links:**
- [Fortran Standard - Relational operators](https://gcc.gnu.org/onlinedocs/gfortran/Relational-operators.html)

</TabItem>
<TabItem value="gleam" label="Gleam">

```erlang
// Vergleichsoperatoren
let a = 10
let b = 3
let eq = a == b      // Gleichheit: False
let ne = a != b      // Ungleichheit: True
let lt = a < b       // Kleiner als: False
let gt = a > b       // Größer als: True
let le = a <= b      // Kleiner oder gleich: False
let ge = a >= b      // Größer oder gleich: True
```

**Besonderheiten:**
- Alle Operatoren geben Bool zurück
- `==` für Gleichheit, `!=` für Ungleichheit

**Weiterführende Links:**
- [Gleam Documentation - Operators](https://gleam.run/documentation/tour/operators/)

</TabItem>
<TabItem value="go" label="Go">

```go
// Vergleichsoperatoren
a := 10
b := 3
eq := a == b      // Gleichheit: false
ne := a != b      // Ungleichheit: true
lt := a < b       // Kleiner als: false
gt := a > b       // Größer als: true
le := a <= b      // Kleiner oder gleich: false
ge := a >= b      // Größer oder gleich: true
```

**Besonderheiten:**
- Alle Operatoren geben `bool` zurück
- `==` für Gleichheit, `!=` für Ungleichheit

**Weiterführende Links:**
- [Go Documentation - Comparison operators](https://go.dev/ref/spec#Comparison_operators)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Vergleichsoperatoren
def a = 10
def b = 3
def eq = a == b      // Gleichheit: false
def ne = a != b      // Ungleichheit: true
def lt = a < b       // Kleiner als: false
def gt = a > b       // Größer als: true
def le = a <= b      // Kleiner oder gleich: false
def ge = a >= b      // Größer oder gleich: true
```

**Besonderheiten:**
- Alle Operatoren geben Boolean zurück
- `==` für Gleichheit, `!=` für Ungleichheit

**Weiterführende Links:**
- [Groovy Documentation - Operators](https://groovy-lang.org/operators.html)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Vergleichsoperatoren
a = 10
b = 3
eq = a == b      -- Gleichheit: False
ne = a /= b      -- Ungleichheit: True
lt = a < b       -- Kleiner als: False
gt = a > b       -- Größer als: True
le = a <= b      -- Kleiner oder gleich: False
ge = a >= b      -- Größer oder gleich: True
```

**Besonderheiten:**
- Alle Operatoren geben Bool zurück
- `==` für Gleichheit, `/=` für Ungleichheit

**Weiterführende Links:**
- [Haskell Documentation - Comparison operators](https://www.haskell.org/onlinereport/haskell2010/haskellch6.html#x13-1210006.4)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Vergleichsoperatoren
var a = 10;
var b = 3;
var eq = a == b;      // Gleichheit: false
var ne = a != b;      // Ungleichheit: true
var lt = a < b;       // Kleiner als: false
var gt = a > b;       // Größer als: true
var le = a <= b;      // Kleiner oder gleich: false
var ge = a >= b;      // Größer oder gleich: true
```

**Besonderheiten:**
- Alle Operatoren geben Bool zurück
- `==` für Gleichheit, `!=` für Ungleichheit

**Weiterführende Links:**
- [Haxe Documentation - Operators](https://haxe.org/manual/expression-operators.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Vergleichsoperatoren
a : Int
a = 10
b : Int
b = 3
eq : Bool
eq = a == b      -- Gleichheit: False
ne : Bool
ne = a /= b      -- Ungleichheit: True
lt : Bool
lt = a < b       -- Kleiner als: False
gt : Bool
gt = a > b       -- Größer als: True
le : Bool
le = a <= b      -- Kleiner oder gleich: False
ge : Bool
ge = a >= b      -- Größer oder gleich: True
```

**Besonderheiten:**
- Alle Operatoren geben Bool zurück
- `==` für Gleichheit, `/=` für Ungleichheit

**Weiterführende Links:**
- [Idris 2 Documentation - Interfaces](https://idris2.readthedocs.io/en/latest/tutorial/interfaces.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Vergleichsoperatoren
int a = 10;
int b = 3;
boolean eq = a == b;      // Gleichheit: false
boolean ne = a != b;      // Ungleichheit: true
boolean lt = a < b;       // Kleiner als: false
boolean gt = a > b;       // Größer als: true
boolean le = a <= b;      // Kleiner oder gleich: false
boolean ge = a >= b;      // Größer oder gleich: true
```

**Besonderheiten:**
- Alle Operatoren geben `boolean` zurück
- `==` für Gleichheit, `!=` für Ungleichheit

**Weiterführende Links:**
- [Oracle Java Documentation - Comparison Operators](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/op2.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Vergleichsoperatoren
let a = 10;
let b = 3;
let eq = a == b;      // Gleichheit: false (loose equality)
let strictEq = a === b; // Strict equality: false
let ne = a != b;      // Ungleichheit: true (loose inequality)
let strictNe = a !== b; // Strict inequality: true
let lt = a < b;       // Kleiner als: false
let gt = a > b;       // Größer als: true
let le = a <= b;      // Kleiner oder gleich: false
let ge = a >= b;      // Größer oder gleich: true
```

**Besonderheiten:**
- `==` und `!=` führen Typkonvertierung durch (loose equality)
- `===` und `!==` prüfen Typ und Wert (strict equality)
- Alle Operatoren geben Boolean zurück

**Weiterführende Links:**
- [MDN Web Docs - Comparison operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#comparison_operators)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Vergleichsoperatoren
a = 10
b = 3
eq = a == b      # Gleichheit: false
ne = a != b      # Ungleichheit: true
lt = a < b       # Kleiner als: false
gt = a > b       # Größer als: true
le = a <= b      # Kleiner oder gleich: false
ge = a >= b      # Größer oder gleich: true
```

**Besonderheiten:**
- Alle Operatoren geben Bool zurück
- `==` für Gleichheit, `!=` für Ungleichheit

**Weiterführende Links:**
- [Julia Documentation - Comparison Operators](https://docs.julialang.org/en/v1/manual/mathematical-operations/#Comparison-Operators)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Vergleichsoperatoren
val a = 10
val b = 3
val eq = a == b      // Gleichheit: False
val ne = a != b      // Ungleichheit: True
val lt = a < b       // Kleiner als: False
val gt = a > b       // Größer als: True
val le = a <= b      // Kleiner oder gleich: False
val ge = a >= b      // Größer oder gleich: True
```

**Besonderheiten:**
- Standardmäßige Vergleichsoperatoren `==`, `!=`, `<`, `>`, `<=`, `>=`
- Alle Operatoren geben `bool` zurück
- Strukturelle Gleichheit ist Standard

**Weiterführende Links:**
- [Koka Language Guide - Expressions](https://koka-lang.github.io/koka/doc/book.html#sec-expressions)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Vergleichsoperatoren
def a := 10
def b := 3
#eval a == b      -- Gleichheit: false
#eval a != b      -- Ungleichheit: true (auch ≠)
#eval a < b       -- Kleiner als: false
#eval a > b       -- Größer als: true
#eval a <= b      -- Kleiner oder gleich: false (auch ≤)
#eval a >= b      -- Größer oder gleich: true (auch ≥)
```

**Besonderheiten:**
- Vergleichsoperatoren über Typklassen (`BEq`, `Ord`)
- Unicode-Alternativen: `≠` für `!=`, `≤` für `<=`, `≥` für `>=`
- `BEq` (boolean equality) für `==`/`!=`, `Ord` für `<`, `>`, `<=`, `>=`

**Weiterführende Links:**
- [Lean 4 – Functional Programming in Lean 4](https://lean-lang.org/functional_programming_in_lean/)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Vergleichsoperatoren
val a = 10
val b = 3
val eq = a == b      // Gleichheit: false
val ne = a != b      // Ungleichheit: true
val lt = a < b       // Kleiner als: false
val gt = a > b       // Größer als: true
val le = a <= b      // Kleiner oder gleich: false
val ge = a >= b      // Größer oder gleich: true
```

**Besonderheiten:**
- Alle Operatoren geben `Boolean` zurück
- `==` für Gleichheit, `!=` für Ungleichheit

**Weiterführende Links:**
- [Kotlin Documentation - Comparison operators](https://kotlinlang.org/docs/equality.html#structural-equality)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Vergleichsoperatoren
local a = 10
local b = 3
local eq = a == b      -- Gleichheit: false
local ne = a ~= b      -- Ungleichheit: true
local lt = a < b       -- Kleiner als: false
local gt = a > b      -- Größer als: true
local le = a <= b     -- Kleiner oder gleich: false
local ge = a >= b     -- Größer oder gleich: true
```

**Besonderheiten:**
- Alle Operatoren geben Boolean zurück
- `==` für Gleichheit, `~=` für Ungleichheit

**Weiterführende Links:**
- [Lua Documentation - Relational Operators](https://www.lua.org/manual/5.4/manual.html#3.4.4)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% Vergleichsoperatoren
a = 10;
b = 3;
eq = a == b;      % Gleichheit: 0 (false)
ne = a ~= b;      % Ungleichheit: 1 (true)
lt = a < b;       % Kleiner als: 0
gt = a > b;       % Größer als: 1
le = a <= b;      % Kleiner oder gleich: 0
ge = a >= b;      % Größer oder gleich: 1
```

**Besonderheiten:**
- Vergleichsoperatoren geben logical array zurück (0 für false, 1 für true)
- `==` für Gleichheit, `~=` für Ungleichheit

**Weiterführende Links:**
- [MATLAB Documentation - Relational Operations](https://www.mathworks.com/help/matlab/relational-operations.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Vergleichsoperatoren
A = 10,
B = 3,
( if A < B then ... ),      % Kleiner als: scheitert
( if A > B then ... ),      % Größer als: gelingt
( if A =< B then ... ),     % Kleiner oder gleich: scheitert
( if A >= B then ... ),     % Größer oder gleich: gelingt

% Unifikation (Gleichheit)
( if A = B then ... ),      % Gleichheit: scheitert
( if A \= B then ... ),     % Ungleichheit: gelingt

% Generischer Drei-Wege-Vergleich
compare(Result, A, B)       % Result = (>)
```

**Besonderheiten:**
- Relationale Operatoren: `<`, `>`, `=<`, `>=`
- `=<` statt `<=` für kleiner-oder-gleich (Prolog-Syntax)
- Gleichheit durch Unifikation (`=`) statt dediziertem `==`-Operator
- `\=` für Nicht-Unifikation (Ungleichheit)
- `compare/3` für generischen Drei-Wege-Vergleich: ergibt `(<)`, `(=)` oder `(>)`

**Weiterführende Links:**
- [Mercury Library Reference - int](https://www.mercurylang.org/information/doc-latest/mercury_library/int.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# Vergleichsoperatoren
var a: Int = 10
var b: Int = 3
var eq = a == b      # Gleichheit: False
var ne = a != b      # Ungleichheit: True
var lt = a < b       # Kleiner als: False
var gt = a > b       # Größer als: True
var le = a <= b      # Kleiner oder gleich: False
var ge = a >= b      # Größer oder gleich: True
```

**Besonderheiten:**
- Alle Operatoren geben Bool zurück
- `==` für Gleichheit, `!=` für Ungleichheit

**Weiterführende Links:**
- [Mojo Documentation](https://docs.modular.com/mojo/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Vergleichsoperatoren
var a = 10
var b = 3
var eq = a == b      # Gleichheit: false
var ne = a != b      # Ungleichheit: true
var lt = a < b       # Kleiner als: false
var gt = a > b       # Größer als: true
var le = a <= b      # Kleiner oder gleich: false
var ge = a >= b      # Größer oder gleich: true
```

**Besonderheiten:**
- Alle Operatoren geben bool zurück
- `==` für Gleichheit, `!=` für Ungleichheit

**Weiterführende Links:**
- [Nim Documentation - Operators](https://nim-lang.org/docs/manual.html#expressions-and-statements)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Vergleichsoperatoren
int a = 10;
int b = 3;
BOOL eq = a == b;      // Gleichheit: NO
BOOL ne = a != b;      // Ungleichheit: YES
BOOL lt = a < b;       // Kleiner als: NO
BOOL gt = a > b;       // Größer als: YES
BOOL le = a <= b;      // Kleiner oder gleich: NO
BOOL ge = a >= b;      // Größer oder gleich: YES
```

**Besonderheiten:**
- Alle Operatoren geben `BOOL` zurück (YES/NO)
- `==` für Gleichheit, `!=` für Ungleichheit

**Weiterführende Links:**
- [Apple Developer Documentation - Operators](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/FoundationTypesandCollections/FoundationTypesandCollections.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Vergleichsoperatoren
var
  a, b: Integer;
  eq, ne, lt, gt, le, ge: Boolean;
begin
  a := 10;
  b := 3;
  eq := a = b;      // Gleichheit: False
  ne := a <> b;     // Ungleichheit: True
  lt := a < b;      // Kleiner als: False
  gt := a > b;      // Größer als: True
  le := a <= b;     // Kleiner oder gleich: False
  ge := a >= b;     // Größer oder gleich: True
end;
```

**Besonderheiten:**
- Alle Operatoren geben Boolean zurück
- `=` für Gleichheit, `<>` für Ungleichheit

**Weiterführende Links:**
- [Delphi Documentation - Comparison operators](https://docwiki.embarcadero.com/RADStudio/Alexandria/en/Comparison_Operators)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Vergleichsoperatoren *)
let a = 10
let b = 3
let eq = a = b      (* Gleichheit: false *)
let ne = a <> b     (* Ungleichheit: true *)
let lt = a < b      (* Kleiner als: false *)
let gt = a > b      (* Größer als: true *)
let le = a <= b     (* Kleiner oder gleich: false *)
let ge = a >= b     (* Größer oder gleich: true *)
```

**Besonderheiten:**
- Alle Operatoren geben bool zurück
- `=` für Gleichheit, `<>` für Ungleichheit

**Weiterführende Links:**
- [OCaml Documentation - Comparison operations](https://v2.ocaml.org/manual/expr.html#comparison)

</TabItem>
<TabItem value="octave" label="Octave">

```matlab
% Vergleichsoperatoren
a = 10;
b = 3;
eq = a == b;      % Gleichheit: 0 (false)
ne = a ~= b;      % Ungleichheit: 1 (true)
lt = a < b;       % Kleiner als: 0
gt = a > b;       % Größer als: 1
le = a <= b;      % Kleiner oder gleich: 0
ge = a >= b;      % Größer oder gleich: 1
```

**Besonderheiten:**
- Vergleichsoperatoren geben logical array zurück (0 für false, 1 für true)
- `==` für Gleichheit, `~=` für Ungleichheit

**Weiterführende Links:**
- [GNU Octave Documentation - Relational Operators](https://octave.org/doc/v8.1.0/Relational-Operators.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Vergleichsoperatoren
a :: 10
b :: 3
eq :: a == b      // Gleichheit: false
ne :: a != b      // Ungleichheit: true
lt :: a < b       // Kleiner als: false
gt :: a > b       // Größer als: true
le :: a <= b      // Kleiner oder gleich: false
ge :: a >= b      // Größer oder gleich: true
```

**Besonderheiten:**
- Alle Operatoren geben bool zurück
- `==` für Gleichheit, `!=` für Ungleichheit

**Weiterführende Links:**
- [Odin Documentation - Operators](https://odin-lang.org/docs/overview/#operators)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Vergleichsoperatoren
my $a = 10;
my $b = 3;
my $eq = $a == $b;      # Gleichheit: 0 (false)
my $ne = $a != $b;      # Ungleichheit: 1 (true)
my $lt = $a < $b;       # Kleiner als: 0
my $gt = $a > $b;       # Größer als: 1
my $le = $a <= $b;      # Kleiner oder gleich: 0
my $ge = $a >= $b;      # Größer oder gleich: 1
```

**Besonderheiten:**
- Vergleichsoperatoren geben Zahlen zurück (0 für false, 1 für true)
- `==` für Gleichheit, `!=` für Ungleichheit

**Weiterführende Links:**
- [Perl Documentation - Relational Operators](https://perldoc.perl.org/perlop#Relational-Operators)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
// Vergleichsoperatoren
$a = 10;
$b = 3;
$eq = $a == $b;      // Gleichheit: false (loose equality)
$strictEq = $a === $b; // Strict equality: false
$ne = $a != $b;      // Ungleichheit: true (loose inequality)
$strictNe = $a !== $b; // Strict inequality: true
$lt = $a < $b;       // Kleiner als: false
$gt = $a > $b;       // Größer als: true
$le = $a <= $b;      // Kleiner oder gleich: false
$ge = $a >= $b;      // Größer oder gleich: true
?>
```

**Besonderheiten:**
- `==` und `!=` führen Typkonvertierung durch (loose equality)
- `===` und `!==` prüfen Typ und Wert (strict equality)
- Alle Operatoren geben Boolean zurück

**Weiterführende Links:**
- [PHP Documentation - Comparison Operators](https://www.php.net/manual/en/language.operators.comparison.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Vergleichsoperatoren
% Arithmetische Vergleiche (werten Ausdrücke aus)
?- 10 =:= 10.    % Numerische Gleichheit: true
?- 10 =\= 3.     % Numerische Ungleichheit: true
?- 10 > 3.       % Größer als: true
?- 3 < 10.       % Kleiner als: true
?- 10 >= 3.      % Größer oder gleich: true
?- 3 =< 10.      % Kleiner oder gleich: true

% Termvergleiche (vergleichen Struktur, nicht Wert)
?- hello == hello.   % Strukturelle Gleichheit: true
?- hello \== world.  % Strukturelle Ungleichheit: true
?- a @< b.          % Termordnung: true
```

**Besonderheiten:**
- Zwei getrennte Vergleichssysteme: arithmetisch (`=:=`, `=\=`, `<`, `>`, `>=`, `=<`) und term-basiert (`==`, `\==`, `@<`, `@>`, `@=<`, `@>=`)
- Arithmetische Vergleiche werten beide Seiten numerisch aus
- Termvergleiche prüfen strukturelle Gleichheit ohne Auswertung
- `=<` statt `<=` für kleiner-oder-gleich (historische Prolog-Syntax)
- Unifikation (`=`) ist kein Vergleichsoperator, sondern bindet Variablen

**Weiterführende Links:**
- [SWI-Prolog Documentation - Comparison and Unification](https://www.swi-prolog.org/pldoc/man?section=compare)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Vergleichsoperatoren
a = 10
b = 3
eq = a == b      -- Gleichheit: false
ne = a /= b      -- Ungleichheit: true
lt = a < b       -- Kleiner als: false
gt = a > b       -- Größer als: true
le = a <= b      -- Kleiner oder gleich: false
ge = a >= b      -- Größer oder gleich: true
```

**Besonderheiten:**
- Alle Operatoren geben Boolean zurück
- `==` für Gleichheit, `/=` für Ungleichheit

**Weiterführende Links:**
- [PureScript Documentation - Operators](https://github.com/purescript/documentation/blob/master/language/Operators.md)

</TabItem>
<TabItem value="python" label="Python">

```python
# Vergleichsoperatoren
a = 10
b = 3
eq = a == b      # Gleichheit: False
ne = a != b      # Ungleichheit: True
lt = a < b       # Kleiner als: False
gt = a > b       # Größer als: True
le = a <= b      # Kleiner oder gleich: False
ge = a >= b      # Größer oder gleich: True
```

**Besonderheiten:**
- Alle Operatoren geben `bool` zurück
- `==` für Gleichheit, `!=` für Ungleichheit

**Weiterführende Links:**
- [Python Documentation - Comparisons](https://docs.python.org/3/reference/expressions.html#comparisons)

</TabItem>
<TabItem value="r" label="R">

```r
# Vergleichsoperatoren
a <- 10
b <- 3
eq <- a == b      # Gleichheit: FALSE
ne <- a != b      # Ungleichheit: TRUE
lt <- a < b       # Kleiner als: FALSE
gt <- a > b       # Größer als: TRUE
le <- a <= b     # Kleiner oder gleich: FALSE
ge <- a >= b     # Größer oder gleich: TRUE
```

**Besonderheiten:**
- Alle Operatoren geben logical zurück (TRUE/FALSE)
- `==` für Gleichheit, `!=` für Ungleichheit

**Weiterführende Links:**
- [R Documentation - Comparison operators](https://stat.ethz.ch/R-manual/R-devel/library/base/html/Comparison.html)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
;; Vergleichsoperatoren
(define a 10)
(define b 3)
(define eq (= a b))      ; Gleichheit: #f
(define ne (not (= a b))) ; Ungleichheit: #t
(define lt (< a b))      ; Kleiner als: #f
(define gt (> a b))      ; Größer als: #t
(define le (<= a b))     ; Kleiner oder gleich: #f
(define ge (>= a b))     ; Größer oder gleich: #t
```

**Besonderheiten:**
- Vergleichsoperatoren sind Funktionen in Prefix-Notation
- Alle geben Boolean zurück (#t für true, #f für false)
- `=` für Gleichheit

**Weiterführende Links:**
- [Racket Documentation - Comparison](https://docs.racket-lang.org/reference/generic-numbers.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Vergleichsoperatoren
a = 10
b = 3
eq = a == b      -- Gleichheit: False
ne = a != b      -- Ungleichheit: True
lt = a < b       -- Kleiner als: False
gt = a > b       -- Größer als: True
le = a <= b      -- Kleiner oder gleich: False
ge = a >= b      -- Größer oder gleich: True
```

**Besonderheiten:**
- Alle Operatoren geben Bool zurück
- `==` für Gleichheit, `!=` für Ungleichheit

**Weiterführende Links:**
- [Roc Documentation](https://www.roc-lang.org/)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Vergleichsoperatoren
a = 10
b = 3
eq = a == b      # Gleichheit: false
ne = a != b      # Ungleichheit: true
lt = a < b       # Kleiner als: false
gt = a > b       # Größer als: true
le = a <= b      # Kleiner oder gleich: false
ge = a >= b      # Größer oder gleich: true
```

**Besonderheiten:**
- Alle Operatoren geben Boolean zurück
- `==` für Gleichheit, `!=` für Ungleichheit

**Weiterführende Links:**
- [Ruby Documentation - Operators](https://docs.ruby-lang.org/en/3.2/syntax/operators_rdoc.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Vergleichsoperatoren
let a = 10;
let b = 3;
let eq = a == b;      // Gleichheit: false
let ne = a != b;      // Ungleichheit: true
let lt = a < b;       // Kleiner als: false
let gt = a > b;       // Größer als: true
let le = a <= b;      // Kleiner oder gleich: false
let ge = a >= b;      // Größer oder gleich: true
```

**Besonderheiten:**
- Alle Operatoren geben `bool` zurück
- `==` für Gleichheit, `!=` für Ungleichheit

**Weiterführende Links:**
- [Rust Documentation - Comparison operators](https://doc.rust-lang.org/book/ch03-02-data-types.html#comparison-operators)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Vergleichsoperatoren
val a = 10
val b = 3
val eq = a == b      // Gleichheit: false
val ne = a != b      // Ungleichheit: true
val lt = a < b       // Kleiner als: false
val gt = a > b       // Größer als: true
val le = a <= b      // Kleiner oder gleich: false
val ge = a >= b      // Größer oder gleich: true
```

**Besonderheiten:**
- Alle Operatoren geben `Boolean` zurück
- `==` für Gleichheit, `!=` für Ungleichheit

**Weiterführende Links:**
- [Scala Documentation - Comparison operations](https://docs.scala-lang.org/tour/operators.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; Vergleichsoperatoren
(define a 10)
(define b 3)
(define eq (= a b))      ; Gleichheit: #f
(define ne (not (= a b))) ; Ungleichheit: #t
(define lt (< a b))      ; Kleiner als: #f
(define gt (> a b))      ; Größer als: #t
(define le (<= a b))     ; Kleiner oder gleich: #f
(define ge (>= a b))     ; Größer oder gleich: #t
```

**Besonderheiten:**
- Vergleichsoperatoren sind Funktionen in Prefix-Notation
- Alle geben Boolean zurück (#t für true, #f für false)
- `=` für Gleichheit

**Weiterführende Links:**
- [R7RS Scheme Specification - Comparison operations](https://small.r7rs.org/attachment/r7rs.pdf)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Vergleichsoperatoren
let a = 10
let b = 3
let eq = a == b      // Gleichheit: false
let ne = a != b      // Ungleichheit: true
let lt = a < b       // Kleiner als: false
let gt = a > b       // Größer als: true
let le = a <= b      // Kleiner oder gleich: false
let ge = a >= b      // Größer oder gleich: true
```

**Besonderheiten:**
- Alle Operatoren geben `Bool` zurück
- `==` für Gleichheit, `!=` für Ungleichheit

**Weiterführende Links:**
- [Swift Documentation - Basic Operators](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/basicoperators/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Vergleichsoperatoren
let a = 10;
let b = 3;
let eq = a == b;      // Gleichheit: false (loose equality)
let strictEq = a === b; // Strict equality: false
let ne = a != b;      // Ungleichheit: true (loose inequality)
let strictNe = a !== b; // Strict inequality: true
let lt = a < b;       // Kleiner als: false
let gt = a > b;       // Größer als: true
let le = a <= b;      // Kleiner oder gleich: false
let ge = a >= b;      // Größer oder gleich: true
```

**Besonderheiten:**
- `==` und `!=` führen Typkonvertierung durch (loose equality)
- `===` und `!==` prüfen Typ und Wert (strict equality)
- Alle Operatoren geben Boolean zurück

**Weiterführende Links:**
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Vergleichsoperatoren
Dim a As Integer = 10
Dim b As Integer = 3
Dim eq As Boolean = a = b      ' Gleichheit: False
Dim ne As Boolean = a <> b     ' Ungleichheit: True
Dim lt As Boolean = a < b      ' Kleiner als: False
Dim gt As Boolean = a > b      ' Größer als: True
Dim le As Boolean = a <= b     ' Kleiner oder gleich: False
Dim ge As Boolean = a >= b     ' Größer oder gleich: True
```

**Besonderheiten:**
- Alle Operatoren geben Boolean zurück
- `=` für Gleichheit, `<>` für Ungleichheit

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Comparison Operators](https://learn.microsoft.com/en-us/dotnet/visual-basic/language-reference/operators/comparison-operators)

</TabItem>
<TabItem value="v" label="V">

```v
// Vergleichsoperatoren
a := 10
b := 3
eq := a == b      // Gleichheit: false
ne := a != b      // Ungleichheit: true
lt := a < b       // Kleiner als: false
gt := a > b       // Größer als: true
le := a <= b      // Kleiner oder gleich: false
ge := a >= b      // Größer oder gleich: true
```

**Besonderheiten:**
- Alle Operatoren geben bool zurück
- `==` für Gleichheit, `!=` für Ungleichheit

**Weiterführende Links:**
- [V Documentation - Operators](https://github.com/vlang/v/blob/master/doc/docs.md)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Vergleichsoperatoren *)
a = 10;
b = 3;
eq = a == b      (* Gleichheit: False *)
ne = a != b      (* Ungleichheit: True *)
lt = a < b       (* Kleiner als: False *)
gt = a > b       (* Größer als: True *)
le = a <= b      (* Kleiner oder gleich: False *)
ge = a >= b      (* Größer oder gleich: True *)
```

**Besonderheiten:**
- Alle Operatoren geben Boolean zurück (True/False)
- `==` für Gleichheit, `!=` für Ungleichheit

**Weiterführende Links:**
- [Wolfram Language Documentation - Comparison](https://reference.wolfram.com/language/guide/Comparison.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Vergleichsoperatoren
const a: i32 = 10;
const b: i32 = 3;
const eq = a == b;      // Gleichheit: false
const ne = a != b;      // Ungleichheit: true
const lt = a < b;       // Kleiner als: false
const gt = a > b;       // Größer als: true
const le = a <= b;      // Kleiner oder gleich: false
const ge = a >= b;      // Größer oder gleich: true
```

**Besonderheiten:**
- Alle Operatoren geben `bool` zurück
- `==` für Gleichheit, `!=` für Ungleichheit

**Weiterführende Links:**
- [Zig Documentation - Operators](https://ziglang.org/documentation/0.11.0/#Operators)

</TabItem>
</Tabs>


## 5.1.3. Logical Operators (Boolean, Short-Circuit Evaluation)

Logische Operatoren für boolesche Operationen wie AND (`&&`, `and`), OR (`||`, `or`) und NOT (`!`, `not`). Unterstützen oft Short-Circuit-Evaluation, bei der der zweite Operand nur ausgewertet wird, wenn nötig.

### Sprachen {#sprachen}

<Tabs availableTabs={['ada', 'c', 'csharp', 'cpp', 'carbon', 'clojure', 'common-lisp', 'crystal', 'd', 'dart', 'eiffel', 'elixir', 'elm', 'erlang', 'fsharp', 'fortran', 'gleam', 'go', 'groovy', 'haskell', 'haxe', 'idris', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'lua', 'matlab', 'mercury', 'mojo', 'nim', 'objective-c', 'object-pascal', 'ocaml', 'octave', 'odin', 'perl', 'php', 'prolog', 'purescript', 'python', 'r', 'racket', 'roc', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'vbnet', 'v', 'wolfram-language', 'zig']}>
<TabItem value="ada" label="Ada">

```ada
-- Logische Operatoren
a : Boolean := True;
b : Boolean := False;
and_result : Boolean := a and b;      -- AND: False
or_result : Boolean := a or b;        -- OR: True
not_result : Boolean := not a;        -- NOT: False
and_then : Boolean := a and then b;   -- Short-circuit AND: False
or_else : Boolean := a or else b;    -- Short-circuit OR: True
```

**Besonderheiten:**
- `and` und `or` evaluieren beide Operanden
- `and then` und `or else` unterstützen Short-Circuit-Evaluation

**Weiterführende Links:**
- [Ada Reference Manual - Logical Operators](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-4-5-1.html)

</TabItem>
<TabItem value="c" label="C">

```c
// Logische Operatoren
int a = 1;  // true
int b = 0;  // false
int and_result = a && b;      // AND: 0 (false)
int or_result = a || b;       // OR: 1 (true)
int not_result = !a;          // NOT: 0 (false)
// Short-circuit: && und || evaluieren nur zweiten Operanden wenn nötig
int result = a && (b = 1);     // b wird nicht evaluiert wenn a false ist
```

**Besonderheiten:**
- `&&` und `||` unterstützen Short-Circuit-Evaluation
- Operatoren geben `int` zurück (0 für false, 1 für true)
- `!` für NOT

**Weiterführende Links:**
- [C Standard - Logical operators](https://en.cppreference.com/w/c/language/operator_logical)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Logische Operatoren
bool a = true;
bool b = false;
bool and_result = a && b;      // AND: false (short-circuit)
bool or_result = a || b;       // OR: true (short-circuit)
bool not_result = !a;          // NOT: false
bool and_eval = a & b;         // AND: false (beide evaluiert)
bool or_eval = a | b;          // OR: true (beide evaluiert)
```

**Besonderheiten:**
- `&&` und `||` unterstützen Short-Circuit-Evaluation
- `&` und `|` evaluieren beide Operanden
- Alle Operatoren geben `bool` zurück

**Weiterführende Links:**
- [Microsoft C# Documentation - Boolean logical operators](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/boolean-logical-operators)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Logische Operatoren
bool a = true;
bool b = false;
bool and_result = a && b;      // AND: false (short-circuit)
bool or_result = a || b;       // OR: true (short-circuit)
bool not_result = !a;          // NOT: false
bool and_eval = a & b;         // AND: false (beide evaluiert)
bool or_eval = a | b;          // OR: true (beide evaluiert)
```

**Besonderheiten:**
- `&&` und `||` unterstützen Short-Circuit-Evaluation
- `&` und `|` evaluieren beide Operanden
- Alle Operatoren geben `bool` zurück

**Weiterführende Links:**
- [cppreference.com - Logical operators](https://en.cppreference.com/w/cpp/language/operator_logical)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Logische Operatoren
var a: bool = true;
var b: bool = false;
var and_result: bool = a && b;      // AND: false (short-circuit)
var or_result: bool = a || b;       // OR: true (short-circuit)
var not_result: bool = !a;          // NOT: false
```

**Besonderheiten:**
- Experimentelle Sprache, Syntax kann sich noch ändern
- `&&` und `||` unterstützen Short-Circuit-Evaluation

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Logische Operatoren
(def a true)
(def b false)
(def and-result (and a b))      ; AND: false (short-circuit)
(def or-result (or a b))         ; OR: true (short-circuit)
(def not-result (not a))         ; NOT: false
```

**Besonderheiten:**
- `and` und `or` sind Makros mit Short-Circuit-Evaluation
- `not` ist eine Funktion
- Alle geben Boolean zurück

**Weiterführende Links:**
- [Clojure Documentation - Logical Operators](https://clojure.org/reference/special_forms#and)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Logische Operatoren
(let ((a t)
      (b nil))
  (let ((and-result (and a b))      ; AND: nil (short-circuit)
        (or-result (or a b))         ; OR: t (short-circuit)
        (not-result (not a)))        ; NOT: nil
    (list and-result or-result not-result)))
```

**Besonderheiten:**
- `and` und `or` sind Makros mit Short-Circuit-Evaluation
- `not` ist eine Funktion
- `t` für true, `nil` für false

**Weiterführende Links:**
- [Common Lisp HyperSpec - Logical Operators](http://www.lispworks.com/documentation/HyperSpec/Body/m_and.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Logische Operatoren
a = true
b = false
and_result = a && b      # AND: false (short-circuit)
or_result = a || b       # OR: true (short-circuit)
not_result = !a         # NOT: false
```

**Besonderheiten:**
- `&&` und `||` unterstützen Short-Circuit-Evaluation
- Alle Operatoren geben Bool zurück

**Weiterführende Links:**
- [Crystal Documentation - Operators](https://crystal-lang.org/reference/1.11/syntax_and_semantics/operators.html)

</TabItem>
<TabItem value="d" label="D">

```d
// Logische Operatoren
bool a = true;
bool b = false;
bool and_result = a && b;      // AND: false (short-circuit)
bool or_result = a || b;       // OR: true (short-circuit)
bool not_result = !a;          // NOT: false
```

**Besonderheiten:**
- `&&` und `||` unterstützen Short-Circuit-Evaluation
- Alle Operatoren geben `bool` zurück

**Weiterführende Links:**
- [D Language Specification - Logical Operators](https://dlang.org/spec/expression.html#logical)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Logische Operatoren
bool a = true;
bool b = false;
bool and_result = a && b;      // AND: false (short-circuit)
bool or_result = a || b;       // OR: true (short-circuit)
bool not_result = !a;          // NOT: false
```

**Besonderheiten:**
- `&&` und `||` unterstützen Short-Circuit-Evaluation
- Alle Operatoren geben `bool` zurück

**Weiterführende Links:**
- [Dart Language Tour - Logical operators](https://dart.dev/guides/language/language-tour#logical-operators)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
-- Logische Operatoren
a: BOOLEAN := True
b: BOOLEAN := False
and_result: BOOLEAN := a and b      -- AND: False
or_result: BOOLEAN := a or b        -- OR: True
not_result: BOOLEAN := not a        -- NOT: False
and_then: BOOLEAN := a and then b   -- Short-circuit AND: False
or_else: BOOLEAN := a or else b     -- Short-circuit OR: True
```

**Besonderheiten:**
- `and` und `or` evaluieren beide Operanden
- `and then` und `or else` unterstützen Short-Circuit-Evaluation

**Weiterführende Links:**
- [Eiffel Documentation - Operators](https://www.eiffel.org/doc/eiffel/Language_Reference_Manual)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Logische Operatoren
a = true
b = false
and_result = a and b      # AND: false (short-circuit)
or_result = a or b       # OR: true (short-circuit)
not_result = not a        # NOT: false
```

**Besonderheiten:**
- `and` und `or` unterstützen Short-Circuit-Evaluation
- Alle Operatoren geben Boolean zurück

**Weiterführende Links:**
- [Elixir Documentation - Basic operators](https://hexdocs.pm/elixir/operators.html)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Logische Operatoren
a = True
b = False
and_result = a && b      -- AND: False (short-circuit)
or_result = a || b       -- OR: True (short-circuit)
not_result = not a       -- NOT: False
```

**Besonderheiten:**
- `&&` und `||` unterstützen Short-Circuit-Evaluation
- Alle Operatoren geben Bool zurück

**Weiterführende Links:**
- [Elm Documentation - Basics](https://guide.elm-lang.org/core_language.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% Logische Operatoren
A = true,
B = false,
AndResult = A andalso B,     % AND: false (short-circuit)
OrResult = A orelse B,       % OR: true (short-circuit)
NotResult = not A.            % NOT: false
```

**Besonderheiten:**
- `andalso` und `orelse` unterstützen Short-Circuit-Evaluation
- `not` für NOT
- Alle Operatoren geben Boolean zurück

**Weiterführende Links:**
- [Erlang Documentation - Boolean Expressions](https://www.erlang.org/doc/reference_manual/expressions.html#boolean-expressions)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Logische Operatoren
let a = true
let b = false
let and_result = a && b      // AND: false (short-circuit)
let or_result = a || b       // OR: true (short-circuit)
let not_result = not a       // NOT: false
```

**Besonderheiten:**
- `&&` und `||` unterstützen Short-Circuit-Evaluation
- `not` für NOT
- Alle Operatoren geben `bool` zurück

**Weiterführende Links:**
- [F# Documentation - Boolean Operators](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/symbol-and-operator-reference/boolean-operators)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Logische Operatoren
logical :: a = .true.
logical :: b = .false.
logical :: and_result, or_result, not_result
and_result = a .and. b      ! AND: .false.
or_result = a .or. b         ! OR: .true.
not_result = .not. a        ! NOT: .false.
```

**Besonderheiten:**
- `.and.`, `.or.` und `.not.` für logische Operationen
- Alle Operatoren geben LOGICAL zurück
- Beide Operanden werden evaluiert

**Weiterführende Links:**
- [Fortran Standard - Logical operators](https://gcc.gnu.org/onlinedocs/gfortran/Logical-operators.html)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// Logische Operatoren
let a = True
let b = False
let and_result = a && b      // AND: False
let or_result = a || b       // OR: True
let not_result = !a          // NOT: False
```

**Besonderheiten:**
- `&&` für AND, `||` für OR, `!` für NOT (seit Gleam v1.4)
- Alle Operatoren arbeiten mit Bool-Werten
- `&&` und `||` unterstützen Short-Circuit-Evaluation

**Weiterführende Links:**
- [Gleam Documentation - Bool](https://tour.gleam.run/data-types/bools/)

</TabItem>
<TabItem value="go" label="Go">

```go
// Logische Operatoren
a := true
b := false
andResult := a && b      // AND: false (short-circuit)
orResult := a || b       // OR: true (short-circuit)
notResult := !a          // NOT: false
```

**Besonderheiten:**
- `&&` und `||` unterstützen Short-Circuit-Evaluation
- `!` für NOT
- Alle Operatoren geben `bool` zurück

**Weiterführende Links:**
- [Go Documentation - Logical operators](https://go.dev/ref/spec#Logical_operators)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Logische Operatoren
def a = true
def b = false
def andResult = a && b      // AND: false (short-circuit)
def orResult = a || b       // OR: true (short-circuit)
def notResult = !a          // NOT: false
```

**Besonderheiten:**
- `&&` und `||` unterstützen Short-Circuit-Evaluation
- `!` für NOT
- Alle Operatoren geben Boolean zurück

**Weiterführende Links:**
- [Groovy Documentation - Operators](https://groovy-lang.org/operators.html)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Logische Operatoren
a = True
b = False
andResult = a && b      -- AND: False (short-circuit)
orResult = a || b       -- OR: True (short-circuit)
notResult = not a       -- NOT: False
```

**Besonderheiten:**
- `&&` und `||` unterstützen Short-Circuit-Evaluation
- `not` für NOT
- Alle Operatoren geben Bool zurück

**Weiterführende Links:**
- [Haskell Documentation - Boolean operations](https://www.haskell.org/onlinereport/haskell2010/haskellch6.html#x13-1210006.4)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Logische Operatoren
var a = true;
var b = false;
var andResult = a && b;      // AND: false (short-circuit)
var orResult = a || b;       // OR: true (short-circuit)
var notResult = !a;          // NOT: false
```

**Besonderheiten:**
- `&&` und `||` unterstützen Short-Circuit-Evaluation
- `!` für NOT
- Alle Operatoren geben Bool zurück

**Weiterführende Links:**
- [Haxe Documentation - Operators](https://haxe.org/manual/expression-operators.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Logische Operatoren
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

**Besonderheiten:**
- `&&` und `||` unterstützen Short-Circuit-Evaluation
- `not` für NOT
- Alle Operatoren geben Bool zurück

**Weiterführende Links:**
- [Idris 2 Documentation - Interfaces](https://idris2.readthedocs.io/en/latest/tutorial/interfaces.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Logische Operatoren
boolean a = true;
boolean b = false;
boolean andResult = a && b;      // AND: false (short-circuit)
boolean orResult = a || b;       // OR: true (short-circuit)
boolean notResult = !a;          // NOT: false
boolean andEval = a & b;         // AND: false (beide evaluiert)
boolean orEval = a | b;          // OR: true (beide evaluiert)
```

**Besonderheiten:**
- `&&` und `||` unterstützen Short-Circuit-Evaluation
- `&` und `|` evaluieren beide Operanden
- Alle Operatoren geben `boolean` zurück

**Weiterführende Links:**
- [Oracle Java Documentation - Logical Operators](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/op3.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Logische Operatoren
let a = true;
let b = false;
let andResult = a && b;      // AND: false (short-circuit)
let orResult = a || b;       // OR: true (short-circuit)
let notResult = !a;          // NOT: false
```

**Besonderheiten:**
- `&&` und `||` unterstützen Short-Circuit-Evaluation
- `!` für NOT
- Alle Operatoren geben Boolean zurück

**Weiterführende Links:**
- [MDN Web Docs - Logical operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#logical_operators)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Logische Operatoren
a = true
b = false
and_result = a && b      # AND: false (short-circuit)
or_result = a || b       # OR: true (short-circuit)
not_result = !a          # NOT: false
```

**Besonderheiten:**
- `&&` und `||` unterstützen Short-Circuit-Evaluation
- `!` für NOT
- Alle Operatoren geben Bool zurück

**Weiterführende Links:**
- [Julia Documentation - Boolean Operators](https://docs.julialang.org/en/v1/manual/mathematical-operations/#Boolean-Operators)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Logische Operatoren
val a = True
val b = False
val and_result = a && b      // AND: False (short-circuit)
val or_result = a || b       // OR: True (short-circuit)
val not_result = !a          // NOT: False
```

**Besonderheiten:**
- `&&` und `||` unterstützen Short-Circuit-Evaluation
- `!` für NOT
- Alle Operatoren geben `bool` zurück

**Weiterführende Links:**
- [Koka Language Guide - Expressions](https://koka-lang.github.io/koka/doc/book.html#sec-expressions)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Logische Operatoren
def a := true
def b := false
#eval a && b      -- AND: false (short-circuit)
#eval a || b      -- OR: true (short-circuit)
#eval !a          -- NOT: false
```

**Besonderheiten:**
- `&&` und `||` unterstützen Short-Circuit-Evaluation
- `!` für NOT
- Logische Operatoren arbeiten auf dem `Bool`-Typ
- Propositions (`Prop`) verwenden `∧`, `∨`, `¬` für logische Beweise

**Weiterführende Links:**
- [Lean 4 – Functional Programming in Lean 4](https://lean-lang.org/functional_programming_in_lean/)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Logische Operatoren
val a = true
val b = false
val andResult = a && b      // AND: false (short-circuit)
val orResult = a || b       // OR: true (short-circuit)
val notResult = !a          // NOT: false
```

**Besonderheiten:**
- `&&` und `||` unterstützen Short-Circuit-Evaluation
- `!` für NOT
- Alle Operatoren geben `Boolean` zurück

**Weiterführende Links:**
- [Kotlin Documentation - Boolean operations](https://kotlinlang.org/docs/booleans.html#logical-operators)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Logische Operatoren
local a = true
local b = false
local and_result = a and b      -- AND: false (short-circuit)
local or_result = a or b        -- OR: true (short-circuit)
local not_result = not a        -- NOT: false
```

**Besonderheiten:**
- `and` und `or` unterstützen Short-Circuit-Evaluation
- `not` für NOT
- Alle Operatoren geben Boolean zurück

**Weiterführende Links:**
- [Lua Documentation - Logical Operators](https://www.lua.org/manual/5.4/manual.html#3.4.5)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% Logische Operatoren
a = true;
b = false;
and_result = a && b;      % AND: false (short-circuit)
or_result = a || b;       % OR: true (short-circuit)
not_result = ~a;          % NOT: false
and_eval = a & b;         % AND: false (beide evaluiert)
or_eval = a | b;          % OR: true (beide evaluiert)
```

**Besonderheiten:**
- `&&` und `||` unterstützen Short-Circuit-Evaluation
- `&` und `|` evaluieren beide Operanden (element-wise)
- `~` für NOT

**Weiterführende Links:**
- [MATLAB Documentation - Logical Operations](https://www.mathworks.com/help/matlab/logical-operations.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Logische Operatoren (als Goal-Konnektoren)
( if true, true then ... ),      % Konjunktion (AND): gelingt
( if true ; false then ... ),    % Disjunktion (OR): gelingt
( if not false then ... ),       % Negation (NOT): gelingt

% Short-Circuit-Evaluation
( if fail, write("X", !IO) then  % write wird nie ausgeführt (AND bricht ab)
    ...
),
( if true ; write("X", !IO) then % write wird nie ausgeführt (OR bricht ab)
    ...
),

% If-Then-Else
( if A > 5 ->
    io.write_string("ja\n", !IO)
;
    io.write_string("nein\n", !IO)
)
```

**Besonderheiten:**
- `,` (Komma) für Konjunktion (AND) mit Short-Circuit-Evaluation
- `;` (Semikolon) für Disjunktion (OR) mit Short-Circuit-Evaluation
- `not` für Negation (bevorzugt gegenüber `\+`)
- `->` für If-Then, `( Condition -> Then ; Else )` für If-Then-Else
- Logische Operatoren sind fundamentaler Bestandteil von Mercurys Ausführungsmodell

**Weiterführende Links:**
- [Mercury Language Reference Manual - Goals](https://www.mercurylang.org/information/doc-latest/mercury_ref/Goals.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# Logische Operatoren
var a: Bool = True
var b: Bool = False
var and_result = a and b      # AND: False (short-circuit)
var or_result = a or b        # OR: True (short-circuit)
var not_result = not a        # NOT: False
```

**Besonderheiten:**
- `and` und `or` unterstützen Short-Circuit-Evaluation
- `not` für NOT
- Alle Operatoren geben Bool zurück

**Weiterführende Links:**
- [Mojo Documentation](https://docs.modular.com/mojo/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Logische Operatoren
var a = true
var b = false
var and_result = a and b      # AND: false
var or_result = a or b        # OR: true
var not_result = not a        # NOT: false
```

**Besonderheiten:**
- `and` und `or` evaluieren beide Operanden
- `not` für NOT
- Alle Operatoren geben bool zurück

**Weiterführende Links:**
- [Nim Documentation - Operators](https://nim-lang.org/docs/manual.html#expressions-and-statements)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Logische Operatoren
BOOL a = YES;
BOOL b = NO;
BOOL andResult = a && b;      // AND: NO (short-circuit)
BOOL orResult = a || b;       // OR: YES (short-circuit)
BOOL notResult = !a;          // NOT: NO
```

**Besonderheiten:**
- `&&` und `||` unterstützen Short-Circuit-Evaluation
- `!` für NOT
- Alle Operatoren geben `BOOL` zurück (YES/NO)

**Weiterführende Links:**
- [Apple Developer Documentation - Operators](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/FoundationTypesandCollections/FoundationTypesandCollections.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Logische Operatoren
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

**Besonderheiten:**
- `and` und `or` evaluieren beide Operanden
- `not` für NOT
- Alle Operatoren geben Boolean zurück

**Weiterführende Links:**
- [Delphi Documentation - Boolean operators](https://docwiki.embarcadero.com/RADStudio/Alexandria/en/Boolean_Operators)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Logische Operatoren *)
let a = true
let b = false
let and_result = a && b      (* AND: false (short-circuit) *)
let or_result = a || b       (* OR: true (short-circuit) *)
let not_result = not a       (* NOT: false *)
```

**Besonderheiten:**
- `&&` und `||` unterstützen Short-Circuit-Evaluation
- `not` für NOT
- Alle Operatoren geben bool zurück

**Weiterführende Links:**
- [OCaml Documentation - Boolean operations](https://v2.ocaml.org/manual/expr.html#boolean)

</TabItem>
<TabItem value="octave" label="Octave">

```matlab
% Logische Operatoren
a = true;
b = false;
and_result = a && b;      % AND: false (short-circuit)
or_result = a || b;       % OR: true (short-circuit)
not_result = ~a;          % NOT: false
and_eval = a & b;         % AND: false (beide evaluiert)
or_eval = a | b;          % OR: true (beide evaluiert)
```

**Besonderheiten:**
- `&&` und `||` unterstützen Short-Circuit-Evaluation
- `&` und `|` evaluieren beide Operanden (element-wise)
- `~` für NOT

**Weiterführende Links:**
- [GNU Octave Documentation - Logical Operators](https://octave.org/doc/v8.1.0/Logical-Operators.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Logische Operatoren
a :: true
b :: false
and_result :: a && b      // AND: false (short-circuit)
or_result :: a || b       // OR: true (short-circuit)
not_result :: !a          // NOT: false
```

**Besonderheiten:**
- `&&` und `||` unterstützen Short-Circuit-Evaluation
- `!` für NOT
- Alle Operatoren geben bool zurück

**Weiterführende Links:**
- [Odin Documentation - Operators](https://odin-lang.org/docs/overview/#operators)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Logische Operatoren
my $a = 1;  # true
my $b = 0;  # false
my $and_result = $a && $b;      # AND: 0 (false, short-circuit)
my $or_result = $a || $b;       # OR: 1 (true, short-circuit)
my $not_result = !$a;           # NOT: 0 (false)
```

**Besonderheiten:**
- `&&` und `||` unterstützen Short-Circuit-Evaluation
- `!` für NOT
- Operatoren geben Zahlen zurück (0 für false, 1 für true)

**Weiterführende Links:**
- [Perl Documentation - Logical Operators](https://perldoc.perl.org/perlop#Logical-Operators)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
// Logische Operatoren
$a = true;
$b = false;
$and_result = $a && $b;     // AND: false (short-circuit)
$or_result = $a || $b;      // OR: true (short-circuit)
$not_result = !$a;           // NOT: false

// Alternative Syntax (niedrigere Priorität)
$and_alt = $a and $b;       // AND: false (short-circuit)
$or_alt = $a or $b;         // OR: true (short-circuit)
$xor_result = $a xor $b;    // XOR: true
?>
```

**Besonderheiten:**
- `&&` und `||` unterstützen Short-Circuit-Evaluation
- `and`, `or`, `xor` sind alternative Operatoren mit niedrigerer Priorität
- `&` und `|` sind Bitwise-Operatoren, nicht logische Operatoren

**Weiterführende Links:**
- [PHP Documentation - Logical Operators](https://www.php.net/manual/en/language.operators.logical.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Logische Operatoren
?- true, true.        % Konjunktion (AND): true
?- true ; false.      % Disjunktion (OR): true
?- \+ false.          % Negation (NOT): true

% Short-Circuit-Evaluation
?- false, write(erreicht).   % write wird nie ausgeführt (AND bricht ab)
?- true ; write(erreicht).   % write wird nie ausgeführt (OR bricht ab)

% Implikation (if-then-else)
?- (true -> write(ja) ; write(nein)).  % Ausgabe: ja
```

**Besonderheiten:**
- `,` (Komma) für Konjunktion (AND) mit Short-Circuit-Evaluation
- `;` (Semikolon) für Disjunktion (OR) mit Short-Circuit-Evaluation
- `\+` für Negation als Failure (NOT) — gelingt, wenn das Ziel fehlschlägt
- `->` für If-Then (oft kombiniert mit `;` für If-Then-Else)
- Logische Operatoren sind fundamentaler Bestandteil von Prologs Ausführungsmodell

**Weiterführende Links:**
- [SWI-Prolog Documentation - Control Predicates](https://www.swi-prolog.org/pldoc/man?section=control)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Logische Operatoren
a = true
b = false
and_result = a && b      -- AND: false (short-circuit)
or_result = a || b       -- OR: true (short-circuit)
not_result = not a       -- NOT: false
```

**Besonderheiten:**
- `&&` und `||` unterstützen Short-Circuit-Evaluation
- `not` für NOT
- Alle Operatoren geben Boolean zurück

**Weiterführende Links:**
- [PureScript Documentation - Operators](https://github.com/purescript/documentation/blob/master/language/Operators.md)

</TabItem>
<TabItem value="python" label="Python">

```python
# Logische Operatoren
a = True
b = False
and_result = a and b      # AND: False (short-circuit)
or_result = a or b        # OR: True (short-circuit)
not_result = not a        # NOT: False
```

**Besonderheiten:**
- `and` und `or` unterstützen Short-Circuit-Evaluation
- `not` für NOT
- Alle Operatoren geben `bool` zurück

**Weiterführende Links:**
- [Python Documentation - Boolean operations](https://docs.python.org/3/library/stdtypes.html#boolean-operations-and-or-not)

</TabItem>
<TabItem value="r" label="R">

```r
# Logische Operatoren
a <- TRUE
b <- FALSE
and_result <- a && b      # AND: FALSE (short-circuit)
or_result <- a || b       # OR: TRUE (short-circuit)
not_result <- !a          # NOT: FALSE
and_eval <- a & b          # AND: FALSE (beide evaluiert)
or_eval <- a | b           # OR: TRUE (beide evaluiert)
```

**Besonderheiten:**
- `&&` und `||` unterstützen Short-Circuit-Evaluation (skalar)
- `&` und `|` evaluieren beide Operanden (element-wise)
- `!` für NOT

**Weiterführende Links:**
- [R Documentation - Logical operators](https://stat.ethz.ch/R-manual/R-devel/library/base/html/Logic.html)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
;; Logische Operatoren
(define a #t)
(define b #f)
(define and-result (and a b))   ; AND: #f (short-circuit)
(define or-result (or a b))     ; OR: #t (short-circuit)
(define not-result (not a))     ; NOT: #f
```

**Besonderheiten:**
- `and` und `or` sind Makros mit Short-Circuit-Evaluation
- `and` gibt den letzten truthy Wert oder `#f` zurück
- `or` gibt den ersten truthy Wert oder `#f` zurück
- `not` ist eine Funktion und gibt immer Boolean zurück

**Weiterführende Links:**
- [Racket Documentation - Boolean Operations](https://docs.racket-lang.org/reference/booleans.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Logische Operatoren
a = Bool.true
b = Bool.false
andResult = a && b        -- AND: Bool.false (short-circuit)
orResult = a || b         -- OR: Bool.true (short-circuit)
notResult = !(a)          -- NOT: Bool.false
```

**Besonderheiten:**
- `&&` und `||` unterstützen Short-Circuit-Evaluation
- `!` oder `Bool.not` für NOT
- Alle Operatoren geben Bool zurück

**Weiterführende Links:**
- [Roc Documentation - Bool](https://www.roc-lang.org/builtins/Bool)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Logische Operatoren
a = true
b = false
and_result = a && b      # AND: false (short-circuit)
or_result = a || b       # OR: true (short-circuit)
not_result = !a          # NOT: false
```

**Besonderheiten:**
- `&&` und `||` unterstützen Short-Circuit-Evaluation
- `!` für NOT
- Alle Operatoren geben Boolean zurück

**Weiterführende Links:**
- [Ruby Documentation - Operators](https://docs.ruby-lang.org/en/3.2/syntax/operators_rdoc.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Logische Operatoren
let a = true;
let b = false;
let and_result = a && b;      // AND: false (short-circuit)
let or_result = a || b;       // OR: true (short-circuit)
let not_result = !a;          // NOT: false
```

**Besonderheiten:**
- `&&` und `||` unterstützen Short-Circuit-Evaluation
- `!` für NOT
- Alle Operatoren geben `bool` zurück

**Weiterführende Links:**
- [Rust Documentation - Boolean operations](https://doc.rust-lang.org/book/ch03-02-data-types.html#the-boolean-type)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Logische Operatoren
val a = true
val b = false
val andResult = a && b      // AND: false (short-circuit)
val orResult = a || b       // OR: true (short-circuit)
val notResult = !a          // NOT: false
```

**Besonderheiten:**
- `&&` und `||` unterstützen Short-Circuit-Evaluation
- `!` für NOT
- Alle Operatoren geben `Boolean` zurück

**Weiterführende Links:**
- [Scala Documentation - Boolean operations](https://docs.scala-lang.org/tour/operators.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; Logische Operatoren
(define a #t)
(define b #f)
(define and-result (and a b))      ; AND: #f (short-circuit)
(define or-result (or a b))       ; OR: #t (short-circuit)
(define not-result (not a))       ; NOT: #f
```

**Besonderheiten:**
- `and` und `or` sind Makros mit Short-Circuit-Evaluation
- `not` ist eine Funktion
- Alle geben Boolean zurück (#t für true, #f für false)

**Weiterführende Links:**
- [R7RS Scheme Specification - Boolean operations](https://small.r7rs.org/attachment/r7rs.pdf)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Logische Operatoren
let a = true
let b = false
let andResult = a && b      // AND: false (short-circuit)
let orResult = a || b       // OR: true (short-circuit)
let notResult = !a          // NOT: false
```

**Besonderheiten:**
- `&&` und `||` unterstützen Short-Circuit-Evaluation
- `!` für NOT
- Alle Operatoren geben `Bool` zurück

**Weiterführende Links:**
- [Swift Documentation - Basic Operators](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/basicoperators/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Logische Operatoren
let a = true;
let b = false;
let andResult = a && b;      // AND: false (short-circuit)
let orResult = a || b;       // OR: true (short-circuit)
let notResult = !a;          // NOT: false
```

**Besonderheiten:**
- `&&` und `||` unterstützen Short-Circuit-Evaluation
- `!` für NOT
- Alle Operatoren geben Boolean zurück

**Weiterführende Links:**
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Logische Operatoren
Dim a As Boolean = True
Dim b As Boolean = False
Dim andResult As Boolean = a AndAlso b      ' AND: False (short-circuit)
Dim orResult As Boolean = a OrElse b        ' OR: True (short-circuit)
Dim notResult As Boolean = Not a            ' NOT: False
Dim andEval As Boolean = a And b             ' AND: False (beide evaluiert)
Dim orEval As Boolean = a Or b              ' OR: True (beide evaluiert)
```

**Besonderheiten:**
- `AndAlso` und `OrElse` unterstützen Short-Circuit-Evaluation
- `And` und `Or` evaluieren beide Operanden
- `Not` für NOT

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Logical Operators](https://learn.microsoft.com/en-us/dotnet/visual-basic/language-reference/operators/logical-operators)

</TabItem>
<TabItem value="v" label="V">

```v
// Logische Operatoren
a := true
b := false
and_result := a && b      // AND: false (short-circuit)
or_result := a || b       // OR: true (short-circuit)
not_result := !a          // NOT: false
```

**Besonderheiten:**
- `&&` und `||` unterstützen Short-Circuit-Evaluation
- `!` für NOT
- Alle Operatoren geben bool zurück

**Weiterführende Links:**
- [V Documentation - Operators](https://github.com/vlang/v/blob/master/doc/docs.md)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Logische Operatoren *)
a = True;
b = False;
andResult = a && b      (* AND: False (short-circuit) *)
orResult = a || b       (* OR: True (short-circuit) *)
notResult = !a          (* NOT: False *)
```

**Besonderheiten:**
- `&&` und `||` unterstützen Short-Circuit-Evaluation
- `!` für NOT
- Alle Operatoren geben Boolean zurück (True/False)

**Weiterführende Links:**
- [Wolfram Language Documentation - Logical Operations](https://reference.wolfram.com/language/guide/LogicalOperations.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Logische Operatoren
const a: bool = true;
const b: bool = false;
const and_result = a and b;      // AND: false (short-circuit)
const or_result = a or b;        // OR: true (short-circuit)
const not_result = !a;           // NOT: false
```

**Besonderheiten:**
- `and` und `or` unterstützen Short-Circuit-Evaluation
- `!` für NOT
- Alle Operatoren geben `bool` zurück

**Weiterführende Links:**
- [Zig Documentation - Operators](https://ziglang.org/documentation/0.11.0/#Operators)

</TabItem>
</Tabs>

