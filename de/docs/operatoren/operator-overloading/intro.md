---
slug: /operatoren/operator-overloading
title: 5.2. Operator Overloading
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 5.2. Operator Overloading

Überladen von Operatoren für benutzerdefinierte Typen.

## 5.2.1. Custom Operators

Definieren von benutzerdefinierten Operatoren mit eigenen Symbolen und Namen. Ermöglicht es, neue Operatoren zu erstellen, die nicht in der Standard-Sprachsyntax enthalten sind.

### Sprachen {#sprachen}

<Tabs availableTabs={['fortran', 'fsharp', 'haskell', 'idris', 'lean4', 'mercury', 'nim', 'prolog', 'purescript', 'scala', 'swift']}>
<TabItem value="fsharp" label="F#">

```fsharp
// Custom Operator Definition
let (++) x y = x + y * 2

let a = 5
let b = 3
let result = a ++ b  // Ergebnis: 11 (5 + 3*2)

// Infix Custom Operator
let (|>) x f = f x  // Pipe-Operator (bereits in Standardbibliothek)
let result2 = 10 |> fun x -> x * 2  // Ergebnis: 20
```

**Besonderheiten:**
- Custom Operatoren können mit Symbolen wie `++`, `--`, `**`, etc. definiert werden
- Unterstützt Infix- und Prefix-Operatoren
- Operatoren können überladen werden

**Weiterführende Links:**
- [F# Documentation - Operator Overloading](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/operator-overloading)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Custom Operator Definition
(+++) :: Int -> Int -> Int
x +++ y = x + y * 2

-- Verwendung
a = 5
b = 3
result = a +++ b  -- Ergebnis: 11 (5 + 3*2)

-- Infix Operator mit Priorität
infixl 6 +++
```

**Besonderheiten:**
- Custom Operatoren können mit Symbolen definiert werden
- Priorität und Assoziativität können mit `infixl`, `infixr`, `infix` festgelegt werden
- Operatoren sind Funktionen mit spezieller Syntax

**Weiterführende Links:**
- [Haskell Documentation - Operators](https://www.haskell.org/onlinereport/haskell2010/haskellch3.html#x8-260003.2)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Custom Operator Definition
class Number(val value: Int) {
  def +++(other: Number): Number = new Number(value + other.value * 2)
}

val a = new Number(5)
val b = new Number(3)
val result = a +++ b  // Ergebnis: Number(11)

// Infix Operator
val result2 = a +++ b +++ new Number(2)
```

**Besonderheiten:**
- Jede Methode kann als Infix-Operator verwendet werden
- Custom Operatoren sind Methoden mit Symbolnamen
- Unterstützt Operator-Overloading

**Weiterführende Links:**
- [Scala Documentation - Operators](https://docs.scala-lang.org/tour/operators.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Custom Operator Definition
infix operator +++: AdditionPrecedence

func +++(lhs: Int, rhs: Int) -> Int {
    return lhs + rhs * 2
}

let a = 5
let b = 3
let result = a +++ b  // Ergebnis: 11 (5 + 3*2)

// Prefix Custom Operator
prefix operator **
prefix func **(value: Int) -> Int {
    return value * value
}
let squared = **5  // Ergebnis: 25
```

**Besonderheiten:**
- Custom Operatoren müssen zuerst deklariert werden (`operator`)
- Priorität kann mit Precedence-Gruppen festgelegt werden
- Unterstützt Prefix, Infix und Postfix Operatoren

**Weiterführende Links:**
- [Swift Documentation - Advanced Operators](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/advancedoperators/)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Benutzerdefinierter Operator
interface operator(.cross.)
    module procedure cross_product
end interface

function cross_product(a, b) result(c)
    real, dimension(3), intent(in) :: a, b
    real, dimension(3) :: c
    c(1) = a(2)*b(3) - a(3)*b(2)
    c(2) = a(3)*b(1) - a(1)*b(3)
    c(3) = a(1)*b(2) - a(2)*b(1)
end function

real, dimension(3) :: result
result = vec1 .cross. vec2
```

**Besonderheiten:**
- Benutzerdefinierte Operatoren mit `.name.`-Syntax
- Definiert über `INTERFACE OPERATOR(.name.)`
- Können unär oder binär sein

**Weiterführende Links:**
- [Fortran Wiki - Operator Overloading](https://fortranwiki.org/fortran/show/Operator+overloading)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Benutzerdefinierter Operator
infixl 6 |+|
(|+|) : (Int, Int) -> (Int, Int) -> (Int, Int)
(|+|) (a, b) (c, d) = (a + c, b + d)

result : (Int, Int)
result = (1, 2) |+| (3, 4) -- (4, 6)
```

**Besonderheiten:**
- Operatoren können mit `infixl`, `infixr`, `infix` und Priorität definiert werden
- Beliebige Symbole als Operatornamen erlaubt
- Operatoren sind reguläre Funktionen

**Weiterführende Links:**
- [Idris 2 Documentation - Interfaces](https://idris2.readthedocs.io/en/latest/tutorial/interfaces.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Custom Operator Definition
def addDouble (x y : Nat) : Nat := x + y * 2

infixl:65 " +++ " => addDouble

def a := 5
def b := 3
#eval a +++ b  -- Ergebnis: 11 (5 + 3*2)

-- Infix Custom Operator mit Priorität und Assoziativität
def pairAdd (a b : Nat × Nat) : Nat × Nat := (a.1 + b.1, a.2 + b.2)

infixl:65 " |+| " => pairAdd

#eval (1, 2) |+| (3, 4)  -- Ergebnis: (4, 6)
```

**Besonderheiten:**
- Custom Operatoren werden über `infixl`, `infixr`, `prefix`, `postfix` deklariert
- Die Zahl nach dem Schlüsselwort definiert die Priorität (Bindungsstärke)
- Operatoren sind Zucker für reguläre Funktionsaufrufe
- Beliebige Unicode-Symbole als Operatornamen erlaubt

**Weiterführende Links:**
- [Lean 4 Documentation - Notation](https://lean-lang.org/lean4/doc/notation.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Custom Operator Definition
:- op(700, xfx, (<>)).

:- pred (T::in) <> (T::in) is semidet.
X <> Y :- X \= Y.

% Verwendung
( if hello <> world then ... )  % gelingt (true)
( if hello <> hello then ... )  % scheitert (false)

% Custom Text-Operator
:- op(700, xfx, (gleich)).

:- pred (T::in) gleich (T::in) is semidet.
X gleich Y :- X = Y.
```

**Besonderheiten:**
- Custom Operatoren werden mit `:- op(Priorität, Typ, Name).` deklariert (wie in Prolog)
- Priorität von 1–1200, Typ bestimmt Assoziativität: `xfx`, `xfy`, `yfx` (Infix), `fx`, `fy` (Prefix), `xf`, `yf` (Postfix)
- Mercury erfordert zusätzlich Typ- und Modus-Deklarationen für den Operator

**Weiterführende Links:**
- [Mercury Language Reference Manual - Operators](https://www.mercurylang.org/information/doc-latest/mercury_ref/Operators.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Custom Operators
proc `~=`(a, b: float): bool =
  abs(a - b) < 0.001

echo 3.14 ~= 3.141  # true
echo 3.14 ~= 4.0    # false

# Custom operator mit Sonderzeichen
proc `|>`(x: int, f: proc(x: int): int): int =
  f(x)

echo 5 |> (proc(x: int): int = x * 2)  # 10
```

**Besonderheiten:**
- Operatoren werden mit Backticks definiert
- Operatoren müssen mit einem der folgenden Zeichen beginnen: `= + - * / < > @ $ ~ & % | ! ? ^ . \`
- Operatorpräzedenz wird vom ersten Zeichen abgeleitet

**Weiterführende Links:**
- [Nim Documentation - Operators](https://nim-lang.org/docs/manual.html#procedures-operators)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Custom Operator Definition
:- op(700, xfx, <>).

X <> Y :- X \== Y.

% Verwendung
?- hello <> world.  % true
?- hello <> hello.  % false

% Custom Operator mit Text-Name
:- op(700, xfx, gleich).

X gleich Y :- X == Y.

?- 5 gleich 5.  % true
?- 5 gleich 3.  % false
```

**Besonderheiten:**
- Custom Operatoren werden mit `op/3`-Direktive definiert: `:- op(Priorität, Typ, Name)`
- Priorität von 1–1200 bestimmt die Bindungsstärke
- Typ bestimmt Assoziativität und Position: `xfx`, `xfy`, `yfx` (Infix), `fx`, `fy` (Prefix), `xf`, `yf` (Postfix)
- Beliebige Atome können als Operatornamen verwendet werden

**Weiterführende Links:**
- [SWI-Prolog Documentation - op/3](https://www.swi-prolog.org/pldoc/man?predicate=op/3)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Custom Operators
add :: Int -> Int -> Int
add a b = a + b

infixl 6 add as |+|

result = 5 |+| 3  -- 8
```

**Besonderheiten:**
- Custom Operators werden mit `infixl`, `infixr`, `infix` deklariert
- Operatoren können aus Symbolen bestehen
- Priorität und Assoziativität sind definierbar

**Weiterführende Links:**
- [PureScript Documentation - Operators](https://github.com/purescript/documentation/blob/master/language/Syntax.md#binary-operators)

</TabItem>
</Tabs>


## 5.2.2. Operator Overloading

Überladen von Standard-Operatoren (wie `+`, `-`, `*`, etc.) für benutzerdefinierte Typen. Ermöglicht es, Operatoren mit spezifischem Verhalten für eigene Klassen oder Strukturen zu definieren.

### Sprachen {#sprachen}

<Tabs availableTabs={['cpp', 'csharp', 'd', 'fortran', 'julia', 'kotlin', 'lean4', 'lua', 'matlab', 'mercury', 'nim', 'object-pascal', 'octave', 'perl', 'python', 'rust', 'scala', 'swift']} yellowTabs={['dart', 'groovy']}>
<TabItem value="csharp" label="C#">

```csharp
// Operator Overloading
public class Vector {
    public int X { get; set; }
    public int Y { get; set; }
    
    public Vector(int x, int y) {
        X = x;
        Y = y;
    }
    
    public static Vector operator +(Vector a, Vector b) {
        return new Vector(a.X + b.X, a.Y + b.Y);
    }
}

var v1 = new Vector(1, 2);
var v2 = new Vector(3, 4);
var result = v1 + v2;  // Ergebnis: Vector(4, 6)
```

**Besonderheiten:**
- Operatoren müssen als `static` deklariert werden
- Unterstützt viele Operatoren: `+`, `-`, `*`, `/`, `==`, `!=`, etc.
- Einige Operatoren müssen paarweise überladen werden (z.B. `==` und `!=`)

**Weiterführende Links:**
- [Microsoft C# Documentation - Operator overloading](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/operator-overloading)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Operator Overloading
class Vector {
public:
    int x, y;
    Vector(int x, int y) : x(x), y(y) {}
    
    Vector operator+(const Vector& other) const {
        return Vector(x + other.x, y + other.y);
    }
};

Vector v1(1, 2);
Vector v2(3, 4);
Vector result = v1 + v2;  // Ergebnis: Vector(4, 6)
```

**Besonderheiten:**
- Operatoren können als Member-Funktionen oder als freie Funktionen überladen werden
- Unterstützt viele Operatoren: `+`, `-`, `*`, `/`, `==`, `!=`, `[]`, `()`, etc.
- Einige Operatoren können nur als Member-Funktionen überladen werden

**Weiterführende Links:**
- [cppreference.com - Operator overloading](https://en.cppreference.com/w/cpp/language/operators)

</TabItem>
<TabItem value="d" label="D">

```d
// Operator Overloading
class Vector {
    int x, y;
    
    this(int x, int y) {
        this.x = x;
        this.y = y;
    }
    
    Vector opBinary(string op)(Vector other) if (op == "+") {
        return new Vector(x + other.x, y + other.y);
    }
}

auto v1 = new Vector(1, 2);
auto v2 = new Vector(3, 4);
auto result = v1 + v2;  // Ergebnis: Vector(4, 6)
```

**Besonderheiten:**
- Verwendet Template-basierte Operator-Overloading mit `opBinary`, `opUnary`, etc.
- Unterstützt viele Operatoren über Template-Parameter
- Sehr flexibles System für Operator-Overloading

**Weiterführende Links:**
- [D Language Specification - Operator Overloading](https://dlang.org/spec/operatoroverloading.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Operator Overloading
data class Vector(val x: Int, val y: Int) {
    operator fun plus(other: Vector): Vector {
        return Vector(x + other.x, y + other.y)
    }
}

val v1 = Vector(1, 2)
val v2 = Vector(3, 4)
val result = v1 + v2  // Ergebnis: Vector(4, 6)
```

**Besonderheiten:**
- Operatoren werden durch spezielle Funktionen mit festen Namen überladen (`plus`, `minus`, `times`, etc.)
- Unterstützt viele Operatoren: `+`, `-`, `*`, `/`, `==`, `!=`, `[]`, etc.
- `operator`-Schlüsselwort ist erforderlich

**Weiterführende Links:**
- [Kotlin Documentation - Operator overloading](https://kotlinlang.org/docs/operator-overloading.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Operator Overloading über Typklassen
structure Vector where
  x : Int
  y : Int
  deriving Repr

instance : Add Vector where
  add a b := ⟨a.x + b.x, a.y + b.y⟩

instance : ToString Vector where
  toString v := s!"Vector({v.x}, {v.y})"

def v1 : Vector := ⟨1, 2⟩
def v2 : Vector := ⟨3, 4⟩
#eval v1 + v2  -- Vector(4, 6)
```

**Besonderheiten:**
- Operatoren werden durch Typklassen-Instanzen überladen (`Add`, `Sub`, `Mul`, `Div`, etc.)
- Heterogene Varianten: `HAdd`, `HSub`, `HMul` für Operationen mit verschiedenen Typen
- `deriving`-Mechanismus kann Instanzen automatisch ableiten
- Typklassen-basiertes System ermöglicht auch überladene Vergleichs- und Gleichheitsoperatoren

**Weiterführende Links:**
- [Lean 4 – Functional Programming in Lean 4 - Type Classes](https://lean-lang.org/functional_programming_in_lean/type-classes.html)

</TabItem>
<TabItem value="python" label="Python">

```python
# Operator Overloading
class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)
    
    def __str__(self):
        return f"Vector({self.x}, {self.y})"

v1 = Vector(1, 2)
v2 = Vector(3, 4)
result = v1 + v2  # Ergebnis: Vector(4, 6)
```

**Besonderheiten:**
- Operatoren werden durch spezielle Methoden mit doppelten Unterstrichen überladen (`__add__`, `__sub__`, etc.)
- Unterstützt viele Operatoren: `+`, `-`, `*`, `/`, `==`, `!=`, `[]`, `()`, etc.
- Sehr umfangreiches System für Magic Methods

**Weiterführende Links:**
- [Python Documentation - Special method names](https://docs.python.org/3/reference/datamodel.html#special-method-names)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Operator Overloading
use std::ops::Add;

#[derive(Debug)]
struct Vector {
    x: i32,
    y: i32,
}

impl Add for Vector {
    type Output = Vector;
    
    fn add(self, other: Vector) -> Vector {
        Vector {
            x: self.x + other.x,
            y: self.y + other.y,
        }
    }
}

let v1 = Vector { x: 1, y: 2 };
let v2 = Vector { x: 3, y: 4 };
let result = v1 + v2;  // Ergebnis: Vector { x: 4, y: 6 }
```

**Besonderheiten:**
- Operatoren werden durch Traits überladen (`Add`, `Sub`, `Mul`, etc.)
- Unterstützt viele Operatoren über verschiedene Traits
- Type-safe und explizit durch Trait-Implementierung

**Weiterführende Links:**
- [Rust Documentation - Operator Overloading](https://doc.rust-lang.org/book/ch19-03-advanced-traits.html#default-generic-type-parameters-and-operator-overloading)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Operator Overloading
case class Vector(x: Int, y: Int) {
  def +(other: Vector): Vector = Vector(x + other.x, y + other.y)
}

val v1 = Vector(1, 2)
val v2 = Vector(3, 4)
val result = v1 + v2  // Ergebnis: Vector(4, 6)
```

**Besonderheiten:**
- Jede Methode kann als Operator verwendet werden
- Operatoren sind Methoden mit Symbolnamen
- Unterstützt viele Operatoren: `+`, `-`, `*`, `/`, `==`, `!=`, etc.

**Weiterführende Links:**
- [Scala Documentation - Operators](https://docs.scala-lang.org/tour/operators.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Operator Overloading
struct Vector {
    var x: Int
    var y: Int
    
    static func +(lhs: Vector, rhs: Vector) -> Vector {
        return Vector(x: lhs.x + rhs.x, y: lhs.y + rhs.y)
    }
}

let v1 = Vector(x: 1, y: 2)
let v2 = Vector(x: 3, y: 4)
let result = v1 + v2  // Ergebnis: Vector(x: 4, y: 6)
```

**Besonderheiten:**
- Operatoren müssen als `static` Funktionen definiert werden
- Unterstützt viele Operatoren: `+`, `-`, `*`, `/`, `==`, `!=`, etc.
- Einige Operatoren müssen paarweise überladen werden (z.B. `==` und `!=`)

**Weiterführende Links:**
- [Swift Documentation - Advanced Operators](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/advancedoperators/)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Operator Overloading
class Vector {
  final double x, y;
  
  Vector(this.x, this.y);
  
  // Arithmetische Operatoren
  Vector operator +(Vector other) => Vector(x + other.x, y + other.y);
  Vector operator -(Vector other) => Vector(x - other.x, y - other.y);
  Vector operator *(double scalar) => Vector(x * scalar, y * scalar);
  Vector operator -() => Vector(-x, -y);  // Unärer Minus-Operator
  
  // Vergleichsoperator
  @override
  bool operator ==(Object other) =>
      other is Vector && x == other.x && y == other.y;
  
  // Index-Operator
  double operator [](int index) => index == 0 ? x : y;
  
  @override
  int get hashCode => Object.hash(x, y);
}

var v1 = Vector(1, 2);
var v2 = Vector(3, 4);
var v3 = v1 + v2;      // Vector(4, 6)
var v4 = v1 * 2.0;     // Vector(2, 4)
var neg = -v1;          // Vector(-1, -2)
```

**Besonderheiten:**
- Definierte Menge von überladbaren Operatoren: `+`, `-`, `*`, `/`, `~/`, `%`, `==`, `<`, `>`, `<=`, `>=`, `[]`, `[]=`, `~`, `<<`, `>>`, `>>>`, `^`, `|`, `&`
- `operator`-Keyword vor dem Operator-Symbol
- `==` muss zusammen mit `hashCode` überschrieben werden
- Keine benutzerdefinierten Operatoren möglich (nur vordefinierte)

**Weiterführende Links:**
- [Dart Documentation - Operators](https://dart.dev/language/methods#operators)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Operator Overloading
type :: Vector
    real :: x, y
end type Vector

interface operator(+)
    module procedure add_vectors
end interface

function add_vectors(a, b) result(c)
    type(Vector), intent(in) :: a, b
    type(Vector) :: c
    c%x = a%x + b%x
    c%y = a%y + b%y
end function

type(Vector) :: v1, v2, v3
v3 = v1 + v2
```

**Besonderheiten:**
- Operator Overloading über `INTERFACE OPERATOR(op)`
- Unterstützt alle arithmetischen und Vergleichsoperatoren
- Kann auch für Zuweisungsoperator (`=`) mit `INTERFACE ASSIGNMENT(=)` überladen werden

**Weiterführende Links:**
- [Fortran Wiki - Operator Overloading](https://fortranwiki.org/fortran/show/Operator+overloading)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Operator Overloading über Methoden-Konventionen
class Vector {
    int x, y

    Vector(int x, int y) {
        this.x = x
        this.y = y
    }

    Vector plus(Vector other) {
        new Vector(x + other.x, y + other.y)
    }

    Vector minus(Vector other) {
        new Vector(x - other.x, y - other.y)
    }

    Vector multiply(int scalar) {
        new Vector(x * scalar, y * scalar)
    }

    String toString() { "($x, $y)" }
}

def v1 = new Vector(1, 2)
def v2 = new Vector(3, 4)
println v1 + v2   // (4, 6) - ruft plus() auf
println v1 - v2   // (-2, -2) - ruft minus() auf
println v1 * 3    // (3, 6) - ruft multiply() auf
```

**Besonderheiten:**
- Operator Overloading durch benannte Methoden (`plus`, `minus`, `multiply`, `div`, etc.)
- Keine neuen Operatoren definierbar, nur bestehende überladen
- Auch `getAt`/`putAt` für `[]`-Operator, `leftShift` für `<<`

**Weiterführende Links:**
- [Groovy Documentation - Operator Overloading](https://groovy-lang.org/operators.html#_operator_overloading)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
struct Vector2D
    x::Float64
    y::Float64
end

# Operator Overloading
Base.:+(a::Vector2D, b::Vector2D) = Vector2D(a.x + b.x, a.y + b.y)
Base.:-(a::Vector2D, b::Vector2D) = Vector2D(a.x - b.x, a.y - b.y)
Base.:*(scalar::Number, v::Vector2D) = Vector2D(scalar * v.x, scalar * v.y)
Base.:(==)(a::Vector2D, b::Vector2D) = a.x == b.x && a.y == b.y

v1 = Vector2D(1.0, 2.0)
v2 = Vector2D(3.0, 4.0)
v3 = v1 + v2       # Vector2D(4.0, 6.0)
v4 = 2.0 * v1      # Vector2D(2.0, 4.0)
```

**Besonderheiten:**
- Operatoren werden durch Erweitern von `Base`-Funktionen überladen
- Multiple Dispatch ermöglicht verschiedene Overloads basierend auf allen Argumenttypen
- Nahezu alle Operatoren können überladen werden

**Weiterführende Links:**
- [Julia Documentation - Methods](https://docs.julialang.org/en/v1/manual/methods/)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Operator Overloading via Metamethoden
local Vector = {}
Vector.__index = Vector

function Vector.new(x, y)
    return setmetatable({x = x, y = y}, Vector)
end

-- Addition überladen
function Vector.__add(a, b)
    return Vector.new(a.x + b.x, a.y + b.y)
end

-- Gleichheit überladen
function Vector.__eq(a, b)
    return a.x == b.x and a.y == b.y
end

-- Stringdarstellung überladen
function Vector.__tostring(v)
    return "(" .. v.x .. ", " .. v.y .. ")"
end

local v1 = Vector.new(1, 2)
local v2 = Vector.new(3, 4)
local v3 = v1 + v2    -- Verwendet __add
print(v1 == v2)        -- false (verwendet __eq)
```

**Besonderheiten:**
- Operator Overloading über Metamethoden: `__add`, `__sub`, `__mul`, `__div`, `__mod`, `__pow`, `__unm` (Negation), `__concat`, `__len`, `__eq`, `__lt`, `__le`
- Lua 5.3+: `__idiv` (Integer-Division), `__band`, `__bor`, `__bxor`, `__bnot`, `__shl`, `__shr`
- `__index` und `__newindex` für Feld-Zugriff und -Zuweisung
- `__call` ermöglicht es, Tables wie Funktionen aufzurufen

**Weiterführende Links:**
- [Lua Reference Manual - Metatables and Metamethods](https://www.lua.org/manual/5.4/manual.html#2.4)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
classdef Vector2D
    properties
        x
        y
    end
    
    methods
        function obj = Vector2D(x, y)
            obj.x = x;
            obj.y = y;
        end
        
        function result = plus(a, b)
            result = Vector2D(a.x + b.x, a.y + b.y);
        end
        
        function result = eq(a, b)
            result = (a.x == b.x) && (a.y == b.y);
        end
    end
end

v1 = Vector2D(1, 2);
v2 = Vector2D(3, 4);
v3 = v1 + v2; % Ruft plus() auf
```

**Besonderheiten:**
- Operator Overloading durch Methoden mit speziellen Namen (`plus`, `minus`, `mtimes`, `eq`, etc.)
- Funktioniert nur mit `classdef`-Klassen
- Vollständige Liste: `plus`, `minus`, `mtimes`, `mrdivide`, `mpower`, `lt`, `gt`, `le`, `ge`, `eq`, `ne`, etc.

**Weiterführende Links:**
- [MATLAB Documentation - Operator Overloading](https://www.mathworks.com/help/matlab/matlab_oop/implementing-operators-for-your-class.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Operator Overloading
:- type vector ---> vector(int, int).

:- func vector + vector = vector.
vector(X1, Y1) + vector(X2, Y2) = vector(X1 + X2, Y1 + Y2).

V1 = vector(1, 2),
V2 = vector(3, 4),
Result = V1 + V2   % Ergebnis: vector(4, 6)
```

**Besonderheiten:**
- Operatoren wie `+`, `-`, `*` können für benutzerdefinierte Typen als Funktionen definiert werden
- Mercury löst Überladung anhand der Typen auf (ad-hoc Polymorphismus)
- Typ- und Modus-Deklarationen sind erforderlich (`:- func`, `:- pred`)

**Weiterführende Links:**
- [Mercury Language Reference Manual - User-defined Equality and Comparison](https://www.mercurylang.org/information/doc-latest/mercury_ref/User-defined-equality-and-comparison.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Operator Overloading
type Vector2 = object
  x, y: float

proc `+`(a, b: Vector2): Vector2 =
  Vector2(x: a.x + b.x, y: a.y + b.y)

proc `*`(a: Vector2, scalar: float): Vector2 =
  Vector2(x: a.x * scalar, y: a.y * scalar)

proc `$`(v: Vector2): string =
  "(" & $v.x & ", " & $v.y & ")"

var v1 = Vector2(x: 1.0, y: 2.0)
var v2 = Vector2(x: 3.0, y: 4.0)
echo v1 + v2     # (4.0, 6.0)
echo v1 * 2.0    # (2.0, 4.0)
```

**Besonderheiten:**
- Operatoren werden als Prozeduren mit Backtick-Notation definiert
- Alle Standard-Operatoren können überladen werden
- `$`-Operator für String-Konvertierung
- `==`-Operator für Gleichheitsvergleich

**Weiterführende Links:**
- [Nim Documentation - Operators](https://nim-lang.org/docs/manual.html#procedures-operators)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Operator Overloading für Records (seit Delphi 2005)
type
  TVector = record
    X, Y: Double;
    class operator Add(A, B: TVector): TVector;
    class operator Equal(A, B: TVector): Boolean;
  end;

class operator TVector.Add(A, B: TVector): TVector;
begin
  Result.X := A.X + B.X;
  Result.Y := A.Y + B.Y;
end;

class operator TVector.Equal(A, B: TVector): Boolean;
begin
  Result := (A.X = B.X) and (A.Y = B.Y);
end;

var
  v1, v2, v3: TVector;
begin
  v1.X := 1; v1.Y := 2;
  v2.X := 3; v2.Y := 4;
  v3 := v1 + v2;  // Operator Overloading
end;
```

**Besonderheiten:**
- Operator Overloading nur für Records, nicht für Klassen
- `class operator` Syntax seit Delphi 2005
- Unterstützt: Add, Subtract, Multiply, Divide, Equal, NotEqual, etc.

**Weiterführende Links:**
- [Delphi Documentation - Operator Overloading](https://docwiki.embarcadero.com/RADStudio/en/Operator_Overloading_(Delphi))

</TabItem>
<TabItem value="octave" label="Octave">

```octave
classdef Vector
    properties
        x
        y
    end

    methods
        function obj = Vector(x, y)
            obj.x = x;
            obj.y = y;
        end

        function result = plus(a, b)
            result = Vector(a.x + b.x, a.y + b.y);
        end
    end
end

v1 = Vector(1, 2);
v2 = Vector(3, 4);
v3 = v1 + v2;  % Ruft plus() auf
```

**Besonderheiten:**
- Operator Overloading über Klassen-Methoden (`plus`, `minus`, `mtimes`, `eq`, etc.)
- Folgt MATLAB-Konventionen für Operator-Methoden

**Weiterführende Links:**
- [GNU Octave Documentation - Operator Overloading](https://octave.org/doc/v8.1.0/Operator-Overloading.html)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
package Vector;

sub new {
    my ($class, $x, $y) = @_;
    bless { x => $x, y => $y }, $class;
}

use overload
    '+' => sub {
        my ($a, $b) = @_;
        Vector->new($a->{x} + $b->{x}, $a->{y} + $b->{y});
    },
    '""' => sub {
        my ($self) = @_;
        "Vector($self->{x}, $self->{y})";
    };

my $v1 = Vector->new(1, 2);
my $v2 = Vector->new(3, 4);
print $v1 + $v2;  # Vector(4, 6)
```

**Besonderheiten:**
- `use overload` Pragma für Operator-Überladung
- Unterstützt arithmetische, Vergleichs-, String- und andere Operatoren
- Überladene Operatoren werden als Subroutine-Referenzen definiert

**Weiterführende Links:**
- [Perl Documentation - overload](https://perldoc.perl.org/overload)

</TabItem>
</Tabs>


## 5.2.3. Infix Operators

Operatoren, die zwischen zwei Operanden stehen (z.B. `a + b`, `x == y`). Die häufigste Operator-Notation in den meisten Programmiersprachen.

### Sprachen {#sprachen}

<Tabs availableTabs={['csharp', 'javascript', 'lean4', 'mercury', 'nim', 'prolog', 'python', 'wolfram-language']}>
<TabItem value="csharp" label="C#">

```csharp
// Infix Operatoren
int a = 10;
int b = 3;
int sum = a + b;      // Addition: Infix
bool eq = a == b;     // Gleichheit: Infix
bool and = a > 5 && b < 5;  // Logisches AND: Infix
```

**Besonderheiten:**
- Die meisten Operatoren sind Infix-Operatoren
- Unterstützt arithmetische, Vergleichs- und logische Operatoren

**Weiterführende Links:**
- [Microsoft C# Documentation - Operators](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/)

</TabItem>
<TabItem value="python" label="Python">

```python
# Infix Operatoren
a = 10
b = 3
sum = a + b      # Addition: Infix
eq = a == b      # Gleichheit: Infix
and_result = a > 5 and b < 5  # Logisches AND: Infix
```

**Besonderheiten:**
- Die meisten Operatoren sind Infix-Operatoren
- Unterstützt arithmetische, Vergleichs- und logische Operatoren

**Weiterführende Links:**
- [Python Documentation - Expressions](https://docs.python.org/3/reference/expressions.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Infix Operatoren
let a = 10;
let b = 3;
let sum = a + b;      // Addition: Infix
let eq = a == b;      // Gleichheit: Infix
let and = a > 5 && b < 5;  // Logisches AND: Infix
```

**Besonderheiten:**
- Die meisten Operatoren sind Infix-Operatoren
- Unterstützt arithmetische, Vergleichs- und logische Operatoren

**Weiterführende Links:**
- [MDN Web Docs - Expressions and operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Infix-Operatoren
def a := 10
def b := 3
#eval a + b            -- Addition: Infix (13)
#eval a == b           -- Gleichheit: Infix (false)
#eval a > 5 && b < 5   -- Logisches AND: Infix (true)
```

**Besonderheiten:**
- Die meisten Operatoren sind Infix-Operatoren
- Unterstützt arithmetische, Vergleichs- und logische Operatoren
- Benutzerdefinierte Infix-Operatoren über `infixl`/`infixr`-Deklaration

**Weiterführende Links:**
- [Lean 4 – Functional Programming in Lean 4](https://lean-lang.org/functional_programming_in_lean/)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Infix-Operatoren
Sum = 10 + 3,              % Addition: Infix (13)
Diff = 10 - 3,             % Subtraktion: Infix (7)

% Vergleichs-Operatoren als Infix
( if 10 > 5, 3 < 5 then   % Konjunktion (,): Infix
    ...
),

% Benutzerdefinierter Infix-Operator
:- op(700, xfx, (between)).
:- pred (int::in) between ({int, int}::in) is semidet.
X between {Low, High} :- X >= Low, X =< High.
```

**Besonderheiten:**
- Die meisten binären Operatoren sind Infix: `+`, `-`, `*`, `//`, `<`, `>`, `=<`, `>=`
- `,` (Konjunktion) und `;` (Disjunktion) sind ebenfalls Infix-Operatoren
- Benutzerdefinierte Infix-Operatoren über `:- op(Priorität, xfx|xfy|yfx, Name).`

**Weiterführende Links:**
- [Mercury Language Reference Manual - Operators](https://www.mercurylang.org/information/doc-latest/mercury_ref/Operators.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Infix Operators
proc `mod`(a, b: int): int = a - (a div b) * b

# Prozedur als Infix mit Backticks
proc between(x, a, b: int): bool =
  x >= a and x <= b

echo 5.between(1, 10)  # true (UFCS)
```

**Besonderheiten:**
- Binäre Operatoren sind automatisch Infix
- Reguläre Prozeduren können über UFCS als Infix verwendet werden
- Operatoren mit zwei Parametern sind Infix

**Weiterführende Links:**
- [Nim Documentation - Operators](https://nim-lang.org/docs/manual.html#procedures-operators)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Infix Operatoren
?- X is 10 + 3.       % Addition: Infix (X = 13)
?- 10 =:= 3.          % Numerische Gleichheit: Infix (false)
?- 10 > 5, 3 < 5.     % Logisches AND (,): Infix (true)

% Benutzerdefinierter Infix-Operator
:- op(700, xfx, between_and).
between_and(X, Low-High) :- X >= Low, X =< High.
```

**Besonderheiten:**
- Die meisten Operatoren sind Infix-Operatoren (`xfx`, `xfy`, `yfx`)
- Arithmetische Auswertung erfolgt über `is/2`
- Benutzerdefinierte Infix-Operatoren über `op/3`

**Weiterführende Links:**
- [SWI-Prolog Documentation - op/3](https://www.swi-prolog.org/pldoc/man?predicate=op/3)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Infix-Notation mit ~ *)
result = 10 ~Plus~ 20    (* Gleich wie Plus[10, 20] = 30 *)
result2 = {1, 2, 3} ~Join~ {4, 5}  (* {1, 2, 3, 4, 5} *)
```

**Besonderheiten:**
- Jede zweistellige Funktion kann mit `~` als Infix-Operator verwendet werden
- Syntax: `a ~f~ b` entspricht `f[a, b]`

**Weiterführende Links:**
- [Wolfram Language Documentation - Infix Notation](https://reference.wolfram.com/language/tutorial/OperatorInputForms.html)

</TabItem>
</Tabs>


## 5.2.4. Prefix Operators

Operatoren, die vor einem Operanden stehen (z.B. `-a`, `!b`, `++x`). Werden vor der Auswertung des Operanden angewendet.

### Sprachen {#sprachen}

<Tabs availableTabs={['csharp', 'javascript', 'lean4', 'mercury', 'nim', 'prolog', 'python', 'wolfram-language']}>
<TabItem value="csharp" label="C#">

```csharp
// Prefix Operatoren
int a = 10;
int neg = -a;         // Unary minus: Prefix
bool b = true;
bool not = !b;        // Logisches NOT: Prefix
int x = 5;
int preInc = ++x;     // Pre-Increment: Prefix (x wird zu 6, preInc ist 6)
```

**Besonderheiten:**
- Unary minus (`-`), logisches NOT (`!`), Pre-Increment/Decrement (`++`, `--`)
- Werden vor der Auswertung des Operanden angewendet

**Weiterführende Links:**
- [Microsoft C# Documentation - Unary operators](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/arithmetic-operators#unary-plus-and-minus-operators)

</TabItem>
<TabItem value="python" label="Python">

```python
# Prefix Operatoren
a = 10
neg = -a         # Unary minus: Prefix
b = True
not_result = not b  # Logisches NOT: Prefix
```

**Besonderheiten:**
- Unary minus (`-`), logisches NOT (`not`)
- Keine Pre-Increment/Decrement Operatoren

**Weiterführende Links:**
- [Python Documentation - Unary arithmetic and bitwise operations](https://docs.python.org/3/reference/expressions.html#unary-arithmetic-and-bitwise-operations)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Prefix Operatoren
let a = 10;
let neg = -a;         // Unary minus: Prefix
let b = true;
let not = !b;        // Logisches NOT: Prefix
let x = 5;
let preInc = ++x;     // Pre-Increment: Prefix (x wird zu 6, preInc ist 6)
```

**Besonderheiten:**
- Unary minus (`-`), logisches NOT (`!`), Pre-Increment/Decrement (`++`, `--`)
- `typeof`, `void`, `delete` sind ebenfalls Prefix-Operatoren

**Weiterführende Links:**
- [MDN Web Docs - Unary operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#unary_operators)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Prefix-Operatoren
def a := 10
#eval -a         -- Unary minus: Prefix (-10)

def b := true
#eval !b         -- Logisches NOT: Prefix (false)
```

**Besonderheiten:**
- Unary minus (`-`), logisches NOT (`!`)
- Keine Pre-Increment/Decrement Operatoren (funktionale Sprache)
- Benutzerdefinierte Prefix-Operatoren über `prefix`-Deklaration möglich

**Weiterführende Links:**
- [Lean 4 – Functional Programming in Lean 4](https://lean-lang.org/functional_programming_in_lean/)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Prefix-Operatoren
A = 10,
Neg = -A,              % Unary minus: Prefix (-10)

% Logisches NOT: Prefix
( if not (3 > 5) then
    ...                % gelingt (da 3 > 5 false ist)
),

% Negation als Failure
( if \+ (3 > 5) then
    ...                % äquivalent zu not
)
```

**Besonderheiten:**
- Unary minus (`-`), logisches NOT (`not` oder `\+`)
- Keine Pre-Increment/Decrement Operatoren (deklarative Sprache)
- Benutzerdefinierte Prefix-Operatoren über `:- op(Priorität, fx|fy, Name).`

**Weiterführende Links:**
- [Mercury Language Reference Manual - Operators](https://www.mercurylang.org/information/doc-latest/mercury_ref/Operators.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Prefix Operators
type Matrix = object
  data: array[4, float]

proc `-`(m: Matrix): Matrix =
  Matrix(data: [-m.data[0], -m.data[1], -m.data[2], -m.data[3]])

var m = Matrix(data: [1.0, 2.0, 3.0, 4.0])
var neg = -m  # Prefix-Negation
```

**Besonderheiten:**
- Unäre Operatoren mit einem Parameter sind automatisch Prefix
- Standard-Prefix-Operatoren: `-`, `+`, `not`, `@`

**Weiterführende Links:**
- [Nim Documentation - Operators](https://nim-lang.org/docs/manual.html#procedures-operators)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Prefix Operatoren
?- X is -(10).     % Unary minus: Prefix (X = -10)
?- \+ (3 =:= 4).  % Logisches NOT (\+): Prefix (true)

% Benutzerdefinierter Prefix-Operator
:- op(900, fy, nicht).

nicht(X) :- \+ X.

?- nicht(fail).  % true
```

**Besonderheiten:**
- Prefix-Operatoren werden mit `fx` oder `fy` als Typ in `op/3` definiert
- `fy` erlaubt wiederholte Anwendung (z.B. `nicht nicht true`), `fx` nicht
- Standard-Prefix-Operatoren: `-` (unäres Minus), `\+` (Negation), `not`

**Weiterführende Links:**
- [SWI-Prolog Documentation - op/3](https://www.swi-prolog.org/pldoc/man?predicate=op/3)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Prefix-Notation mit @ *)
result = Print @ "Hello"      (* Gleich wie Print["Hello"] *)
result2 = Length @ {1, 2, 3}  (* 3 *)
```

**Besonderheiten:**
- `@` ist der Prefix-Operator: `f @ x` entspricht `f[x]`
- Nützlich für funktionale Verkettung

**Weiterführende Links:**
- [Wolfram Language Documentation - Prefix](https://reference.wolfram.com/language/ref/Prefix.html)

</TabItem>
</Tabs>


## 5.2.5. Postfix Operators

Operatoren, die nach einem Operanden stehen (z.B. `x++`, `arr[i]`, `obj.method()`). Werden nach der Auswertung des Operanden angewendet.

### Sprachen {#sprachen}

<Tabs availableTabs={['csharp', 'javascript', 'lean4', 'mercury', 'prolog', 'python', 'wolfram-language']}>
<TabItem value="csharp" label="C#">

```csharp
// Postfix Operatoren
int x = 5;
int postInc = x++;    // Post-Increment: Postfix (postInc ist 5, x wird zu 6)
int[] arr = {1, 2, 3};
int elem = arr[0];    // Index-Zugriff: Postfix
string str = "Hello";
int len = str.Length;  // Member-Zugriff: Postfix
```

**Besonderheiten:**
- Post-Increment/Decrement (`++`, `--`), Index-Zugriff (`[]`), Member-Zugriff (`.`)
- Post-Increment gibt den ursprünglichen Wert zurück, dann wird inkrementiert

**Weiterführende Links:**
- [Microsoft C# Documentation - Postfix increment and decrement operators](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/arithmetic-operators#increment-operator-)

</TabItem>
<TabItem value="python" label="Python">

```python
# Postfix Operatoren
arr = [1, 2, 3]
elem = arr[0]    # Index-Zugriff: Postfix
obj = {"key": "value"}
val = obj["key"]  # Dictionary-Zugriff: Postfix
```

**Besonderheiten:**
- Index-Zugriff (`[]`), Member-Zugriff (`.`)
- Keine Post-Increment/Decrement Operatoren

**Weiterführende Links:**
- [Python Documentation - Subscriptions](https://docs.python.org/3/reference/expressions.html#subscriptions)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Postfix Operatoren
let x = 5;
let postInc = x++;    // Post-Increment: Postfix (postInc ist 5, x wird zu 6)
let arr = [1, 2, 3];
let elem = arr[0];    // Index-Zugriff: Postfix
let obj = {prop: "value"};
let val = obj.prop;   // Member-Zugriff: Postfix
```

**Besonderheiten:**
- Post-Increment/Decrement (`++`, `--`), Index-Zugriff (`[]`), Member-Zugriff (`.`)
- Post-Increment gibt den ursprünglichen Wert zurück, dann wird inkrementiert

**Weiterführende Links:**
- [MDN Web Docs - Increment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Benutzerdefinierter Postfix-Operator
def factorial : Nat → Nat
  | 0 => 1
  | n + 1 => (n + 1) * factorial n

postfix:max "!" => factorial

#eval 5!  -- Ergebnis: 120

-- Standard: Member-Zugriff (Postfix)
structure Point where
  x : Float
  y : Float

def p : Point := ⟨1.0, 2.0⟩
#eval p.x  -- Ergebnis: 1.0
```

**Besonderheiten:**
- Benutzerdefinierte Postfix-Operatoren über `postfix`-Deklaration
- Standard-Postfix: Dot-Notation für Member-Zugriff (`.`)
- Keine Post-Increment/Decrement Operatoren (funktionale Sprache)

**Weiterführende Links:**
- [Lean 4 Documentation - Notation](https://lean-lang.org/lean4/doc/notation.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Benutzerdefinierter Postfix-Operator
:- op(100, xf, (is_even)).

:- pred (int::in) is_even is semidet.
X is_even :- X mod 2 = 0.

% Verwendung
( if 4 is_even then ... ),   % gelingt (true)
( if 5 is_even then ... ),   % scheitert (false)

% Postfix mit yf
:- op(100, yf, (is_positive)).

:- pred (int::in) is_positive is semidet.
X is_positive :- X > 0.
```

**Besonderheiten:**
- Postfix-Operatoren werden mit `xf` oder `yf` als Typ in `:- op/3` definiert
- `X operator` ist syntaktisch äquivalent zu `operator(X)`
- Postfix-Operatoren sind in Mercury selten, aber vollständig unterstützt
- Erfordern Typ- und Modus-Deklarationen

**Weiterführende Links:**
- [Mercury Language Reference Manual - Operators](https://www.mercurylang.org/information/doc-latest/mercury_ref/Operators.html)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Benutzerdefinierter Postfix-Operator
:- op(100, xf, is_even).

X is_even :- 0 is X mod 2.

?- 4 is_even.   % true
?- 5 is_even.   % false

% Postfix-Operator mit yf
:- op(100, yf, is_positive).

X is_positive :- X > 0.

?- 5 is_positive.  % true
```

**Besonderheiten:**
- Postfix-Operatoren werden mit `xf` oder `yf` als Typ in `op/3` definiert
- `X operator` ist syntaktisch äquivalent zu `operator(X)`
- Postfix-Operatoren sind in Prolog selten, aber vollständig unterstützt

**Weiterführende Links:**
- [SWI-Prolog Documentation - op/3](https://www.swi-prolog.org/pldoc/man?predicate=op/3)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Postfix-Notation mit // *)
result = "Hello" // Print       (* Gleich wie Print["Hello"] *)
result2 = {3, 1, 2} // Sort    (* {1, 2, 3} *)
```

**Besonderheiten:**
- `//` ist der Postfix-Operator: `x // f` entspricht `f[x]`
- Ermöglicht Pipeline-ähnliche Verkettung

**Weiterführende Links:**
- [Wolfram Language Documentation - Postfix](https://reference.wolfram.com/language/ref/Postfix.html)

</TabItem>
</Tabs>

