---
slug: /operatoren/operator-overloading
title: 5.2. Operator Overloading
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 5.2. Operator Overloading

Overloading operators for custom types.

## 5.2.1. Custom Operators

Defining custom operators with custom symbols and names. Enables creating new operators that are not included in the standard language syntax.

### Languages {#sprachen}

<Tabs availableTabs={['fortran', 'fsharp', 'haskell', 'idris', 'lean4', 'mercury', 'nim', 'prolog', 'purescript', 'scala', 'swift']}>
<TabItem value="fsharp" label="F#">

```fsharp
// Custom Operator Definition
let (++) x y = x + y * 2

let a = 5
let b = 3
let result = a ++ b  // Result: 11 (5 + 3*2)

// Infix Custom Operator
let (|>) x f = f x  // Pipe operator (already in standard library)
let result2 = 10 |> fun x -> x * 2  // Result: 20
```

**Special features:**
- Custom operators can be defined with symbols like `++`, `--`, `**`, etc.
- Supports infix and prefix operators
- Operators can be overloaded

**Further reading:**
- [F# Documentation - Operator Overloading](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/operator-overloading)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Custom Operator Definition
(+++) :: Int -> Int -> Int
x +++ y = x + y * 2

-- Usage
a = 5
b = 3
result = a +++ b  -- Result: 11 (5 + 3*2)

-- Infix Operator with Precedence
infixl 6 +++
```

**Special features:**
- Custom operators can be defined with symbols
- Precedence and associativity can be specified with `infixl`, `infixr`, `infix`
- Operators are functions with special syntax

**Further reading:**
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
val result = a +++ b  // Result: Number(11)

// Infix Operator
val result2 = a +++ b +++ new Number(2)
```

**Special features:**
- Any method can be used as an infix operator
- Custom operators are methods with symbol names
- Supports operator overloading

**Further reading:**
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
let result = a +++ b  // Result: 11 (5 + 3*2)

// Prefix Custom Operator
prefix operator **
prefix func **(value: Int) -> Int {
    return value * value
}
let squared = **5  // Result: 25
```

**Special features:**
- Custom operators must be declared first (`operator`)
- Precedence can be specified with precedence groups
- Supports prefix, infix, and postfix operators

**Further reading:**
- [Swift Documentation - Advanced Operators](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/advancedoperators/)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Custom Operator
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

**Special features:**
- Custom operators with `.name.` syntax
- Defined via `INTERFACE OPERATOR(.name.)`
- Can be unary or binary

**Further reading:**
- [Fortran Wiki - Operator Overloading](https://fortranwiki.org/fortran/show/Operator+overloading)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Custom Operator
infixl 6 |+|
(|+|) : (Int, Int) -> (Int, Int) -> (Int, Int)
(|+|) (a, b) (c, d) = (a + c, b + d)

result : (Int, Int)
result = (1, 2) |+| (3, 4) -- (4, 6)
```

**Special features:**
- Operators can be defined with `infixl`, `infixr`, `infix` and precedence
- Any symbols allowed as operator names
- Operators are regular functions

**Further reading:**
- [Idris 2 Documentation - Interfaces](https://idris2.readthedocs.io/en/latest/tutorial/interfaces.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Custom Operator Definition
def addDouble (x y : Nat) : Nat := x + y * 2

infixl:65 " +++ " => addDouble

def a := 5
def b := 3
#eval a +++ b  -- Result: 11 (5 + 3*2)

-- Infix Custom Operator with precedence and associativity
def pairAdd (a b : Nat × Nat) : Nat × Nat := (a.1 + b.1, a.2 + b.2)

infixl:65 " |+| " => pairAdd

#eval (1, 2) |+| (3, 4)  -- Result: (4, 6)
```

**Special features:**
- Custom operators are declared via `infixl`, `infixr`, `prefix`, `postfix`
- The number after the keyword defines the precedence (binding strength)
- Operators are sugar for regular function calls
- Any Unicode symbols allowed as operator names

**Further reading:**
- [Lean 4 Documentation - Notation](https://lean-lang.org/lean4/doc/notation.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Custom Operator Definition
:- op(700, xfx, (<>)).

:- pred (T::in) <> (T::in) is semidet.
X <> Y :- X \= Y.

% Usage
( if hello <> world then ... )  % succeeds (true)
( if hello <> hello then ... )  % fails (false)

% Custom Text Operator
:- op(700, xfx, (gleich)).

:- pred (T::in) gleich (T::in) is semidet.
X gleich Y :- X = Y.
```

**Special features:**
- Custom operators are declared with `:- op(Precedence, Type, Name).` (like in Prolog)
- Precedence from 1–1200, type determines associativity: `xfx`, `xfy`, `yfx` (Infix), `fx`, `fy` (Prefix), `xf`, `yf` (Postfix)
- Mercury additionally requires type and mode declarations for the operator

**Further reading:**
- [Mercury Language Reference Manual - Operators](https://www.mercurylang.org/information/doc-latest/mercury_ref/Operators.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Custom Operators
proc `~=`(a, b: float): bool =
  abs(a - b) < 0.001

echo 3.14 ~= 3.141  # true
echo 3.14 ~= 4.0    # false

# Custom operator with special characters
proc `|>`(x: int, f: proc(x: int): int): int =
  f(x)

echo 5 |> (proc(x: int): int = x * 2)  # 10
```

**Special features:**
- Operators are defined with backticks
- Operators must start with one of the following characters: `= + - * / < > @ $ ~ & % | ! ? ^ . \`
- Operator precedence is derived from the first character

**Further reading:**
- [Nim Documentation - Operators](https://nim-lang.org/docs/manual.html#procedures-operators)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Custom Operator Definition
:- op(700, xfx, <>).

X <> Y :- X \== Y.

% Usage
?- hello <> world.  % true
?- hello <> hello.  % false

% Custom Operator with Text Name
:- op(700, xfx, gleich).

X gleich Y :- X == Y.

?- 5 gleich 5.  % true
?- 5 gleich 3.  % false
```

**Special features:**
- Custom operators are defined with `op/3` directive: `:- op(Precedence, Type, Name)`
- Precedence from 1–1200 determines binding strength
- Type determines associativity and position: `xfx`, `xfy`, `yfx` (Infix), `fx`, `fy` (Prefix), `xf`, `yf` (Postfix)
- Any atoms can be used as operator names

**Further reading:**
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

**Special features:**
- Custom operators are declared with `infixl`, `infixr`, `infix`
- Operators can consist of symbols
- Precedence and associativity are definable

**Further reading:**
- [PureScript Documentation - Operators](https://github.com/purescript/documentation/blob/master/language/Syntax.md#binary-operators)

</TabItem>
</Tabs>


## 5.2.2. Operator Overloading

Overloading standard operators (like `+`, `-`, `*`, etc.) for custom types. Enables defining operators with specific behavior for your own classes or structures.

### Languages {#sprachen}

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
var result = v1 + v2;  // Result: Vector(4, 6)
```

**Special features:**
- Operators must be declared as `static`
- Supports many operators: `+`, `-`, `*`, `/`, `==`, `!=`, etc.
- Some operators must be overloaded pairwise (e.g., `==` and `!=`)

**Further reading:**
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
Vector result = v1 + v2;  // Result: Vector(4, 6)
```

**Special features:**
- Operators can be overloaded as member functions or as free functions
- Supports many operators: `+`, `-`, `*`, `/`, `==`, `!=`, `[]`, `()`, etc.
- Some operators can only be overloaded as member functions

**Further reading:**
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
auto result = v1 + v2;  // Result: Vector(4, 6)
```

**Special features:**
- Uses template-based operator overloading with `opBinary`, `opUnary`, etc.
- Supports many operators via template parameters
- Very flexible system for operator overloading

**Further reading:**
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
val result = v1 + v2  // Result: Vector(4, 6)
```

**Special features:**
- Operators are overloaded through special functions with fixed names (`plus`, `minus`, `times`, etc.)
- Supports many operators: `+`, `-`, `*`, `/`, `==`, `!=`, `[]`, etc.
- `operator` keyword is required

**Further reading:**
- [Kotlin Documentation - Operator overloading](https://kotlinlang.org/docs/operator-overloading.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Operator Overloading via Type Classes
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

**Special features:**
- Operators are overloaded through type class instances (`Add`, `Sub`, `Mul`, `Div`, etc.)
- Heterogeneous variants: `HAdd`, `HSub`, `HMul` for operations with different types
- `deriving` mechanism can automatically derive instances
- Type class-based system also enables overloaded comparison and equality operators

**Further reading:**
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
result = v1 + v2  # Result: Vector(4, 6)
```

**Special features:**
- Operators are overloaded through special methods with double underscores (`__add__`, `__sub__`, etc.)
- Supports many operators: `+`, `-`, `*`, `/`, `==`, `!=`, `[]`, `()`, etc.
- Very comprehensive system for magic methods

**Further reading:**
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
let result = v1 + v2;  // Result: Vector { x: 4, y: 6 }
```

**Special features:**
- Operators are overloaded through traits (`Add`, `Sub`, `Mul`, etc.)
- Supports many operators via various traits
- Type-safe and explicit through trait implementation

**Further reading:**
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
val result = v1 + v2  // Result: Vector(4, 6)
```

**Special features:**
- Any method can be used as an operator
- Operators are methods with symbol names
- Supports many operators: `+`, `-`, `*`, `/`, `==`, `!=`, etc.

**Further reading:**
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
let result = v1 + v2  // Result: Vector(x: 4, y: 6)
```

**Special features:**
- Operators must be defined as `static` functions
- Supports many operators: `+`, `-`, `*`, `/`, `==`, `!=`, etc.
- Some operators must be overloaded pairwise (e.g., `==` and `!=`)

**Further reading:**
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
  Vector operator -() => Vector(-x, -y);  // Unary minus operator
  
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

**Special features:**
- Defined set of overloadable operators: `+`, `-`, `*`, `/`, `~/`, `%`, `==`, `<`, `>`, `<=`, `>=`, `[]`, `[]=`, `~`, `<<`, `>>`, `>>>`, `^`, `|`, `&`
- `operator` keyword before the operator symbol
- `==` must be overridden together with `hashCode`
- No custom operators possible (only predefined)

**Further reading:**
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

**Special features:**
- Operator overloading via `INTERFACE OPERATOR(op)`
- Supports all arithmetic and comparison operators
- Can also be overloaded for assignment operator (`=`) with `INTERFACE ASSIGNMENT(=)`

**Further reading:**
- [Fortran Wiki - Operator Overloading](https://fortranwiki.org/fortran/show/Operator+overloading)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Operator Overloading via Method Conventions
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
println v1 + v2   // (4, 6) - calls plus()
println v1 - v2   // (-2, -2) - calls minus()
println v1 * 3    // (3, 6) - calls multiply()
```

**Special features:**
- Operator overloading through named methods (`plus`, `minus`, `multiply`, `div`, etc.)
- No new operators definable, only existing ones can be overloaded
- Also `getAt`/`putAt` for `[]` operator, `leftShift` for `<<`

**Further reading:**
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

**Special features:**
- Operators are overloaded by extending `Base` functions
- Multiple dispatch enables different overloads based on all argument types
- Almost all operators can be overloaded

**Further reading:**
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

-- Overload addition
function Vector.__add(a, b)
    return Vector.new(a.x + b.x, a.y + b.y)
end

-- Overload equality
function Vector.__eq(a, b)
    return a.x == b.x and a.y == b.y
end

-- Overload string representation
function Vector.__tostring(v)
    return "(" .. v.x .. ", " .. v.y .. ")"
end

local v1 = Vector.new(1, 2)
local v2 = Vector.new(3, 4)
local v3 = v1 + v2    -- Uses __add
print(v1 == v2)        -- false (uses __eq)
```

**Special features:**
- Operator overloading via metamethods: `__add`, `__sub`, `__mul`, `__div`, `__mod`, `__pow`, `__unm` (Negation), `__concat`, `__len`, `__eq`, `__lt`, `__le`
- Lua 5.3+: `__idiv` (Integer division), `__band`, `__bor`, `__bxor`, `__bnot`, `__shl`, `__shr`
- `__index` and `__newindex` for field access and assignment
- `__call` enables calling tables like functions

**Further reading:**
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
v3 = v1 + v2; % Calls plus()
```

**Special features:**
- Operator overloading through methods with special names (`plus`, `minus`, `mtimes`, `eq`, etc.)
- Only works with `classdef` classes
- Complete list: `plus`, `minus`, `mtimes`, `mrdivide`, `mpower`, `lt`, `gt`, `le`, `ge`, `eq`, `ne`, etc.

**Further reading:**
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
Result = V1 + V2   % Result: vector(4, 6)
```

**Special features:**
- Operators like `+`, `-`, `*` can be defined as functions for custom types
- Mercury resolves overloading based on types (ad-hoc polymorphism)
- Type and mode declarations are required (`:- func`, `:- pred`)

**Further reading:**
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

**Special features:**
- Operators are defined as procedures with backtick notation
- All standard operators can be overloaded
- `$` operator for string conversion
- `==` operator for equality comparison

**Further reading:**
- [Nim Documentation - Operators](https://nim-lang.org/docs/manual.html#procedures-operators)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Operator Overloading for Records (since Delphi 2005)
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

**Special features:**
- Operator overloading only for records, not for classes
- `class operator` syntax since Delphi 2005
- Supports: Add, Subtract, Multiply, Divide, Equal, NotEqual, etc.

**Further reading:**
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
v3 = v1 + v2;  % Calls plus()
```

**Special features:**
- Operator overloading via class methods (`plus`, `minus`, `mtimes`, `eq`, etc.)
- Follows MATLAB conventions for operator methods

**Further reading:**
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

**Special features:**
- `use overload` pragma for operator overloading
- Supports arithmetic, comparison, string, and other operators
- Overloaded operators are defined as subroutine references

**Further reading:**
- [Perl Documentation - overload](https://perldoc.perl.org/overload)

</TabItem>
</Tabs>


## 5.2.3. Infix Operators

Operators that stand between two operands (e.g., `a + b`, `x == y`). The most common operator notation in most programming languages.

### Languages {#sprachen}

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

**Special features:**
- Most operators are infix operators
- Supports arithmetic, comparison, and logical operators

**Further reading:**
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

**Special features:**
- Most operators are infix operators
- Supports arithmetic, comparison, and logical operators

**Further reading:**
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

**Special features:**
- Most operators are infix operators
- Supports arithmetic, comparison, and logical operators

**Further reading:**
- [MDN Web Docs - Expressions and operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Infix Operators
def a := 10
def b := 3
#eval a + b            -- Addition: Infix (13)
#eval a == b           -- Equality: Infix (false)
#eval a > 5 && b < 5   -- Logisches AND: Infix (true)
```

**Special features:**
- Most operators are infix operators
- Supports arithmetic, comparison, and logical operators
- Custom infix operators via `infixl`/`infixr` declaration

**Further reading:**
- [Lean 4 – Functional Programming in Lean 4](https://lean-lang.org/functional_programming_in_lean/)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Infix Operators
Sum = 10 + 3,              % Addition: Infix (13)
Diff = 10 - 3,             % Subtraction: Infix (7)

% Comparison Operators as Infix
( if 10 > 5, 3 < 5 then   % Conjunction (,): Infix
    ...
),

% Custom Infix Operator
:- op(700, xfx, (between)).
:- pred (int::in) between ({int, int}::in) is semidet.
X between {Low, High} :- X >= Low, X =< High.
```

**Special features:**
- Most binary operators are infix: `+`, `-`, `*`, `//`, `<`, `>`, `=<`, `>=`
- `,` (conjunction) and `;` (disjunction) are also infix operators
- Custom infix operators via `:- op(Precedence, xfx|xfy|yfx, Name).`

**Further reading:**
- [Mercury Language Reference Manual - Operators](https://www.mercurylang.org/information/doc-latest/mercury_ref/Operators.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Infix Operators
proc `mod`(a, b: int): int = a - (a div b) * b

# Procedure as Infix with Backticks
proc between(x, a, b: int): bool =
  x >= a and x <= b

echo 5.between(1, 10)  # true (UFCS)
```

**Special features:**
- Binary operators are automatically infix
- Regular procedures can be used as infix via UFCS
- Operators with two parameters are infix

**Further reading:**
- [Nim Documentation - Operators](https://nim-lang.org/docs/manual.html#procedures-operators)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Infix Operatoren
?- X is 10 + 3.       % Addition: Infix (X = 13)
?- 10 =:= 3.          % Numeric equality: Infix (false)
?- 10 > 5, 3 < 5.     % Logisches AND (,): Infix (true)

% Custom Infix Operator
:- op(700, xfx, between_and).
between_and(X, Low-High) :- X >= Low, X =< High.
```

**Special features:**
- Most operators are infix operators (`xfx`, `xfy`, `yfx`)
- Arithmetic evaluation occurs via `is/2`
- Custom infix operators via `op/3`

**Further reading:**
- [SWI-Prolog Documentation - op/3](https://www.swi-prolog.org/pldoc/man?predicate=op/3)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Infix Notation with ~ *)
result = 10 ~Plus~ 20    (* Gleich wie Plus[10, 20] = 30 *)
result2 = {1, 2, 3} ~Join~ {4, 5}  (* {1, 2, 3, 4, 5} *)
```

**Special features:**
- Any two-argument function can be used as an infix operator with `~`
- Syntax: `a ~f~ b` corresponds to `f[a, b]`

**Further reading:**
- [Wolfram Language Documentation - Infix Notation](https://reference.wolfram.com/language/tutorial/OperatorInputForms.html)

</TabItem>
</Tabs>


## 5.2.4. Prefix Operators

Operators that stand before an operand (e.g., `-a`, `!b`, `++x`). Applied before evaluation of the operand.

### Languages {#sprachen}

<Tabs availableTabs={['csharp', 'javascript', 'lean4', 'mercury', 'nim', 'prolog', 'python', 'wolfram-language']}>
<TabItem value="csharp" label="C#">

```csharp
// Prefix Operatoren
int a = 10;
int neg = -a;         // Unary minus: Prefix
bool b = true;
bool not = !b;        // Logisches NOT: Prefix
int x = 5;
int preInc = ++x;     // Pre-Increment: Prefix (x becomes 6, preInc is 6)
```

**Special features:**
- Unary minus (`-`), logical NOT (`!`), pre-increment/decrement (`++`, `--`)
- Applied before evaluation of the operand

**Further reading:**
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

**Special features:**
- Unary minus (`-`), logical NOT (`not`)
- No pre-increment/decrement operators

**Further reading:**
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
let preInc = ++x;     // Pre-Increment: Prefix (x becomes 6, preInc is 6)
```

**Special features:**
- Unary minus (`-`), logical NOT (`!`), pre-increment/decrement (`++`, `--`)
- `typeof`, `void`, `delete` are also prefix operators

**Further reading:**
- [MDN Web Docs - Unary operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#unary_operators)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Prefix Operators
def a := 10
#eval -a         -- Unary minus: Prefix (-10)

def b := true
#eval !b         -- Logical NOT: Prefix (false)
```

**Special features:**
- Unary minus (`-`), logical NOT (`!`)
- No pre-increment/decrement operators (functional language)
- Custom prefix operators possible via `prefix` declaration

**Further reading:**
- [Lean 4 – Functional Programming in Lean 4](https://lean-lang.org/functional_programming_in_lean/)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Prefix Operators
A = 10,
Neg = -A,              % Unary minus: Prefix (-10)

% Logical NOT: Prefix
( if not (3 > 5) then
    ...                % succeeds (since 3 > 5 is false)
),

% Negation as Failure
( if \+ (3 > 5) then
    ...                % equivalent to not
)
```

**Special features:**
- Unary minus (`-`), logical NOT (`not` or `\+`)
- No pre-increment/decrement operators (declarative language)
- Custom prefix operators via `:- op(Precedence, fx|fy, Name).`

**Further reading:**
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

**Special features:**
- Unary operators with one parameter are automatically prefix
- Standard prefix operators: `-`, `+`, `not`, `@`

**Further reading:**
- [Nim Documentation - Operators](https://nim-lang.org/docs/manual.html#procedures-operators)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Prefix Operatoren
?- X is -(10).     % Unary minus: Prefix (X = -10)
?- \+ (3 =:= 4).  % Logisches NOT (\+): Prefix (true)

% Custom Prefix Operator
:- op(900, fy, nicht).

nicht(X) :- \+ X.

?- nicht(fail).  % true
```

**Special features:**
- Prefix operators are defined with `fx` or `fy` as type in `op/3`
- `fy` allows repeated application (e.g., `nicht nicht true`), `fx` does not
- Standard prefix operators: `-` (unary minus), `\+` (negation), `not`

**Further reading:**
- [SWI-Prolog Documentation - op/3](https://www.swi-prolog.org/pldoc/man?predicate=op/3)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Prefix Notation with @ *)
result = Print @ "Hello"      (* Gleich wie Print["Hello"] *)
result2 = Length @ {1, 2, 3}  (* 3 *)
```

**Special features:**
- `@` is the prefix operator: `f @ x` corresponds to `f[x]`
- Useful for functional chaining

**Further reading:**
- [Wolfram Language Documentation - Prefix](https://reference.wolfram.com/language/ref/Prefix.html)

</TabItem>
</Tabs>


## 5.2.5. Postfix Operators

Operators that stand after an operand (e.g., `x++`, `arr[i]`, `obj.method()`). Applied after evaluation of the operand.

### Languages {#sprachen}

<Tabs availableTabs={['csharp', 'javascript', 'lean4', 'mercury', 'prolog', 'python', 'wolfram-language']}>
<TabItem value="csharp" label="C#">

```csharp
// Postfix Operatoren
int x = 5;
int postInc = x++;    // Post-Increment: Postfix (postInc is 5, x becomes 6)
int[] arr = {1, 2, 3};
int elem = arr[0];    // Index access: Postfix
string str = "Hello";
int len = str.Length;  // Member access: Postfix
```

**Special features:**
- Post-increment/decrement (`++`, `--`), index access (`[]`), member access (`.`)
- Post-increment returns the original value, then increments

**Further reading:**
- [Microsoft C# Documentation - Postfix increment and decrement operators](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/arithmetic-operators#increment-operator-)

</TabItem>
<TabItem value="python" label="Python">

```python
# Postfix Operators
arr = [1, 2, 3]
elem = arr[0]    # Index access: Postfix
obj = {"key": "value"}
val = obj["key"]  # Dictionary access: Postfix
```

**Special features:**
- Index access (`[]`), member access (`.`)
- No post-increment/decrement operators

**Further reading:**
- [Python Documentation - Subscriptions](https://docs.python.org/3/reference/expressions.html#subscriptions)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Postfix Operatoren
let x = 5;
let postInc = x++;    // Post-Increment: Postfix (postInc is 5, x becomes 6)
let arr = [1, 2, 3];
let elem = arr[0];    // Index access: Postfix
let obj = {prop: "value"};
let val = obj.prop;   // Member access: Postfix
```

**Special features:**
- Post-increment/decrement (`++`, `--`), index access (`[]`), member access (`.`)
- Post-increment returns the original value, then increments

**Further reading:**
- [MDN Web Docs - Increment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Custom Postfix Operator
def factorial : Nat → Nat
  | 0 => 1
  | n + 1 => (n + 1) * factorial n

postfix:max "!" => factorial

#eval 5!  -- Result: 120

-- Standard: Member Access (Postfix)
structure Point where
  x : Float
  y : Float

def p : Point := ⟨1.0, 2.0⟩
#eval p.x  -- Result: 1.0
```

**Special features:**
- Custom postfix operators via `postfix` declaration
- Standard postfix: dot notation for member access (`.`)
- No post-increment/decrement operators (functional language)

**Further reading:**
- [Lean 4 Documentation - Notation](https://lean-lang.org/lean4/doc/notation.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Custom Postfix Operator
:- op(100, xf, (is_even)).

:- pred (int::in) is_even is semidet.
X is_even :- X mod 2 = 0.

% Usage
( if 4 is_even then ... ),   % succeeds (true)
( if 5 is_even then ... ),   % fails (false)

% Postfix with yf
:- op(100, yf, (is_positive)).

:- pred (int::in) is_positive is semidet.
X is_positive :- X > 0.
```

**Special features:**
- Postfix operators are defined with `xf` or `yf` as type in `:- op/3`
- `X operator` is syntactically equivalent to `operator(X)`
- Postfix operators are rare in Mercury but fully supported
- Require type and mode declarations

**Further reading:**
- [Mercury Language Reference Manual - Operators](https://www.mercurylang.org/information/doc-latest/mercury_ref/Operators.html)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Custom Postfix Operator
:- op(100, xf, is_even).

X is_even :- 0 is X mod 2.

?- 4 is_even.   % true
?- 5 is_even.   % false

% Postfix Operator with yf
:- op(100, yf, is_positive).

X is_positive :- X > 0.

?- 5 is_positive.  % true
```

**Special features:**
- Postfix operators are defined with `xf` or `yf` as type in `op/3`
- `X operator` is syntactically equivalent to `operator(X)`
- Postfix operators are rare in Prolog but fully supported

**Further reading:**
- [SWI-Prolog Documentation - op/3](https://www.swi-prolog.org/pldoc/man?predicate=op/3)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Postfix Notation with // *)
result = "Hello" // Print       (* Gleich wie Print["Hello"] *)
result2 = {3, 1, 2} // Sort    (* {1, 2, 3} *)
```

**Special features:**
- `//` is the postfix operator: `x // f` corresponds to `f[x]`
- Enables pipeline-like chaining

**Further reading:**
- [Wolfram Language Documentation - Postfix](https://reference.wolfram.com/language/ref/Postfix.html)

</TabItem>
</Tabs>

