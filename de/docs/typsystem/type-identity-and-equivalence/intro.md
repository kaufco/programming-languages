---
slug: /typsystem/type-identity-and-equivalence
title: 3.1. Type Identity and Equivalence
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 3.1. Type Identity and Equivalence

Definiert, wie Typen identifiziert und verglichen werden.

## 3.1.1. Nominal Typing

Typen werden durch ihren Namen identifiziert. Zwei Typen sind nur dann kompatibel, wenn sie denselben Namen haben, auch wenn sie strukturell identisch sind.

### Sprachen {#sprachen}

<Tabs availableTabs={['ada', 'c', 'carbon', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'eiffel', 'elm', 'fortran', 'fsharp', 'gleam', 'go', 'groovy', 'haskell', 'haxe', 'idris', 'java', 'julia', 'koka', 'kotlin', 'lean4', 'matlab', 'mercury', 'mojo', 'nim', 'object-pascal', 'objective-c', 'odin', 'php', 'purescript', 'rust', 'scala', 'swift', 'v', 'vbnet', 'zig']}>
<TabItem value="ada" label="Ada">

```ada
-- Nominal Typing: Typen sind durch Namen identifiziert
type Point_A is record
    X : Integer;
    Y : Integer;
end record;

type Point_B is record
    X : Integer;
    Y : Integer;
end record;

P1 : Point_A := (X => 1, Y => 2);
P2 : Point_B := (X => 1, Y => 2);

-- Kompiliert nicht: Point_A und Point_B sind unterschiedliche Typen
-- P3 : Point_A := P2; -- Fehler: Incompatible types
```

**Besonderheiten:**
- Record types verwenden nominales Typing
- Zwei Record types mit identischer Struktur sind nicht kompatibel, wenn sie unterschiedliche Namen haben

**Weiterführende Links:**
- [Ada Reference Manual - Record Types](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-3-8.html)

</TabItem>
<TabItem value="c" label="C">

```c
// Nominal Typing: Typen sind durch Namen identifiziert
struct PointA {
    int x;
    int y;
};

struct PointB {
    int x;
    int y;
};

struct PointA p1 = {1, 2};
struct PointB p2 = {1, 2};

// Kompiliert nicht: PointA und PointB sind unterschiedliche Typen
// struct PointA p3 = p2; // Fehler: Incompatible types
```

**Besonderheiten:**
- Structs verwenden nominales Typing
- Zwei Structs mit identischer Struktur sind nicht kompatibel, wenn sie unterschiedliche Namen haben

**Weiterführende Links:**
- [C Standard - Structures](https://en.cppreference.com/w/c/language/struct)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Nominal Typing: Typen sind durch Namen identifiziert
struct PointA {
    var x: i32;
    var y: i32;
}

struct PointB {
    var x: i32;
    var y: i32;
}

var p1: PointA = {.x = 1, .y = 2};
var p2: PointB = {.x = 1, .y = 2};

// Kompiliert nicht: PointA und PointB sind unterschiedliche Typen
// var p3: PointA = p2; // Fehler: Type mismatch
```

**Besonderheiten:**
- Structs verwenden nominales Typing
- Zwei Structs mit identischer Struktur sind nicht kompatibel, wenn sie unterschiedliche Namen haben
- Experimentelle Sprache, Syntax kann sich noch ändern

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Nominal Typing: Typen sind durch Namen identifiziert
public class PointA
{
    public int X { get; set; }
    public int Y { get; set; }
}

public class PointB
{
    public int X { get; set; }
    public int Y { get; set; }
}

PointA p1 = new PointA { X = 1, Y = 2 };
PointB p2 = new PointB { X = 1, Y = 2 };

// Kompiliert nicht: PointA und PointB sind unterschiedliche Typen
// PointA p3 = p2; // Fehler: Keine implizite Konvertierung
```

**Besonderheiten:**
- Klassen und Structs verwenden nominales Typing
- Zwei Typen mit identischer Struktur sind nicht kompatibel, wenn sie unterschiedliche Namen haben

**Weiterführende Links:**
- [Microsoft C# Documentation - Types](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/types/)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Nominal Typing: Typen sind durch Namen identifiziert
struct PointA {
    int x;
    int y;
};

struct PointB {
    int x;
    int y;
};

PointA p1 = {1, 2};
PointB p2 = {1, 2};

// Kompiliert nicht: PointA und PointB sind unterschiedliche Typen
// PointA p3 = p2; // Fehler: Keine implizite Konvertierung
```

**Besonderheiten:**
- Structs und Klassen verwenden nominales Typing
- Zwei Structs mit identischer Struktur sind nicht kompatibel, wenn sie unterschiedliche Namen haben

**Weiterführende Links:**
- [cppreference.com - Classes](https://en.cppreference.com/w/cpp/language/class)

</TabItem>
<TabItem value="d" label="D">

```d
// Nominal Typing: Typen sind durch Namen identifiziert
struct PointA {
    int x;
    int y;
}

struct PointB {
    int x;
    int y;
}

PointA p1 = PointA(1, 2);
PointB p2 = PointB(1, 2);

// Kompiliert nicht: PointA und PointB sind unterschiedliche Typen
// PointA p3 = p2; // Fehler: Cannot implicitly convert
```

**Besonderheiten:**
- Structs verwenden nominales Typing
- Zwei Structs mit identischer Struktur sind nicht kompatibel, wenn sie unterschiedliche Namen haben

**Weiterführende Links:**
- [D Language Specification - Structs](https://dlang.org/spec/struct.html)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Nominal Typing: Typen sind durch Namen identifiziert
struct PointA
  property x : Int32
  property y : Int32

  def initialize(@x, @y)
  end
end

struct PointB
  property x : Int32
  property y : Int32

  def initialize(@x, @y)
  end
end

p1 = PointA.new(1, 2)
p2 = PointB.new(1, 2)

# Kompiliert nicht: PointA und PointB sind unterschiedliche Typen
# p3 : PointA = p2 # Fehler: Type mismatch
```

**Besonderheiten:**
- Structs und Klassen verwenden nominales Typing
- Zwei Typen mit identischer Struktur sind nicht kompatibel, wenn sie unterschiedliche Namen haben

**Weiterführende Links:**
- [Crystal Documentation - Structs](https://crystal-lang.org/reference/1.11/syntax_and_semantics/structs.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Nominal Typing: Typen sind durch Namen identifiziert
class PointA {
  int x;
  int y;
  PointA(this.x, this.y);
}

class PointB {
  int x;
  int y;
  PointB(this.x, this.y);
}

var p1 = PointA(1, 2);
var p2 = PointB(1, 2);

// Kompiliert nicht: PointA und PointB sind unterschiedliche Typen
// PointA p3 = p2; // Fehler: A value of type 'PointB' can't be assigned
```

**Besonderheiten:**
- Klassen verwenden nominales Typing
- Zwei Klassen mit identischer Struktur sind nicht kompatibel, wenn sie unterschiedliche Namen haben
- Record typedefs verwenden strukturelles Typing (seit Dart 3.0, siehe Structural Typing)

**Weiterführende Links:**
- [Dart Documentation - Classes](https://dart.dev/language/classes)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
-- Nominal Typing: Typen sind durch Namen identifiziert
class POINT_A
feature
    x: INTEGER
    y: INTEGER
end

class POINT_B
feature
    x: INTEGER
    y: INTEGER
end

local
    p1: POINT_A
    p2: POINT_B
do
    create p1
    p1.set_x(1)
    p1.set_y(2)
    
    create p2
    p2.set_x(1)
    p2.set_y(2)
    
    -- Kompiliert nicht: POINT_A und POINT_B sind unterschiedliche Typen
    -- p1 := p2 -- Fehler: Type mismatch
end
```

**Besonderheiten:**
- Klassen verwenden nominales Typing
- Zwei Klassen mit identischer Struktur sind nicht kompatibel, wenn sie unterschiedliche Namen haben

**Weiterführende Links:**
- [Eiffel Documentation - Classes](https://www.eiffel.org/doc/eiffel/Eiffel_Standard)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Nominal Typing: Typen sind durch Namen identifiziert
type PointA = {
    X: int
    Y: int
}

type PointB = {
    X: int
    Y: int
}

let p1: PointA = { X = 1; Y = 2 }
let p2: PointB = { X = 1; Y = 2 }

// Kompiliert nicht: PointA und PointB sind unterschiedliche Typen
// let p3: PointA = p2 // Fehler: Type mismatch
```

**Besonderheiten:**
- Record types verwenden nominales Typing
- Zwei Record types mit identischer Struktur sind nicht kompatibel, wenn sie unterschiedliche Namen haben
- Structural Typing ist für andere Konstrukte verfügbar (siehe Structural Typing)

**Weiterführende Links:**
- [F# Documentation - Records](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/records)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Nominal Typing: Typen sind durch Namen identifiziert
type :: PointA
    integer :: x
    integer :: y
end type PointA

type :: PointB
    integer :: x
    integer :: y
end type PointB

type(PointA) :: p1
type(PointB) :: p2

p1 = PointA(1, 2)
p2 = PointB(1, 2)

! Kompiliert nicht: PointA und PointB sind unterschiedliche Typen
! p1 = p2 ! Fehler: Type mismatch
```

**Besonderheiten:**
- Derived types verwenden nominales Typing
- Zwei Derived types mit identischer Struktur sind nicht kompatibel, wenn sie unterschiedliche Namen haben

**Weiterführende Links:**
- [Fortran Standard - Derived Types](https://gcc.gnu.org/onlinedocs/gfortran/DERIVED-TYPES.html)

</TabItem>
<TabItem value="go" label="Go">

```go
// Nominal Typing: Named types sind durch Namen identifiziert
type PointA struct {
    X int
    Y int
}

type PointB struct {
    X int
    Y int
}

p1 := PointA{X: 1, Y: 2}
p2 := PointB{X: 1, Y: 2}

// Kompiliert nicht: PointA und PointB sind unterschiedliche Typen
// p1 = p2 // Fehler: Cannot use p2 (type PointB) as type PointA
```

**Besonderheiten:**
- Named types verwenden nominales Typing
- Zwei Named types mit identischer Struktur sind nicht kompatibel, wenn sie unterschiedliche Namen haben
- Interfaces verwenden strukturelles Typing (siehe Structural Typing)

**Weiterführende Links:**
- [Go Language Specification - Types](https://go.dev/ref/spec#Types)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Nominal Typing: Typen sind durch Namen identifiziert
class PointA {
    int x
    int y
}

class PointB {
    int x
    int y
}

PointA p1 = new PointA(x: 1, y: 2)
PointB p2 = new PointB(x: 1, y: 2)

// Kompiliert nicht: PointA und PointB sind unterschiedliche Typen
// PointA p3 = p2 // Fehler: Cannot assign
```

**Besonderheiten:**
- Klassen verwenden nominales Typing
- Zwei Klassen mit identischer Struktur sind nicht kompatibel, wenn sie unterschiedliche Namen haben

**Weiterführende Links:**
- [Groovy Documentation - Classes](https://groovy-lang.org/objectorientation.html)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Nominal Typing: Data types sind durch Namen identifiziert
data PointA = PointA Int Int
data PointB = PointB Int Int

p1 :: PointA
p1 = PointA 1 2

p2 :: PointB
p2 = PointB 1 2

-- Kompiliert nicht: PointA und PointB sind unterschiedliche Typen
-- p3 :: PointA
-- p3 = p2  -- Fehler: Couldn't match type 'PointB' with 'PointA'
```

**Besonderheiten:**
- `data` types verwenden nominales Typing
- Zwei Data types mit identischer Struktur sind nicht kompatibel, wenn sie unterschiedliche Namen haben
- Typgleichheit basiert auf dem Typnamen, nicht auf der Struktur

**Weiterführende Links:**
- [Haskell Documentation - Data Types](https://www.haskell.org/tutorial/moretypes.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Nominal Typing: Typen sind durch Namen identifiziert
data PointA : Type where
    MkPointA : Int -> Int -> PointA

data PointB : Type where
    MkPointB : Int -> Int -> PointB

p1 : PointA
p1 = MkPointA 1 2

p2 : PointB
p2 = MkPointB 1 2

-- Kompiliert nicht: PointA und PointB sind unterschiedliche Typen
-- p3 : PointA = p2 -- Fehler: Type mismatch
```

**Besonderheiten:**
- Data types verwenden nominales Typing
- Zwei Data types mit identischer Struktur sind nicht kompatibel, wenn sie unterschiedliche Namen haben

**Weiterführende Links:**
- [Idris Documentation - Data Types](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html#data-types)

</TabItem>
<TabItem value="java" label="Java">

```java
// Nominal Typing: Typen sind durch Namen identifiziert
class PointA {
    int x;
    int y;
}

class PointB {
    int x;
    int y;
}

PointA p1 = new PointA();
p1.x = 1;
p1.y = 2;

PointB p2 = new PointB();
p2.x = 1;
p2.y = 2;

// Kompiliert nicht: PointA und PointB sind unterschiedliche Typen
// PointA p3 = p2; // Fehler: Incompatible types
```

**Besonderheiten:**
- Klassen verwenden nominales Typing
- Zwei Klassen mit identischer Struktur sind nicht kompatibel, wenn sie unterschiedliche Namen haben

**Weiterführende Links:**
- [Oracle Java Documentation - Classes](https://docs.oracle.com/javase/tutorial/java/concepts/class.html)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Nominal Typing: Typen sind durch Namen identifiziert
struct PointA
    x::Int
    y::Int
end

struct PointB
    x::Int
    y::Int
end

p1 = PointA(1, 2)
p2 = PointB(1, 2)

# Kompiliert nicht: PointA und PointB sind unterschiedliche Typen
# p3::PointA = p2 # Fehler: MethodError
```

**Besonderheiten:**
- Composite types verwenden nominales Typing
- Zwei Composite types mit identischer Struktur sind nicht kompatibel, wenn sie unterschiedliche Namen haben

**Weiterführende Links:**
- [Julia Documentation - Composite Types](https://docs.julialang.org/en/v1/manual/types/#Composite-Types)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Nominal Typing: Typen sind durch Namen identifiziert
struct point-a
  x: int
  y: int

struct point-b
  x: int
  y: int

val p1 = Point-a(1, 2)
val p2 = Point-b(1, 2)

// point-a und point-b sind verschiedene Typen trotz identischer Struktur
// fun test(p: point-a) = p  // p2 kann hier nicht übergeben werden
```

**Besonderheiten:**
- Koka verwendet nominales Typing für alle benutzerdefinierten Typen
- Zwei `struct` oder `type` mit identischer Struktur sind inkompatibel, wenn sie unterschiedliche Namen haben
- Effekt-Rows sind jedoch strukturell typisiert (nicht nominal)

**Weiterführende Links:**
- [Koka Language Guide - Types](https://koka-lang.github.io/koka/doc/book.html#sec-type-inference)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Nominal Typing: Typen sind durch Namen identifiziert
class PointA(var x: Int, var y: Int)

class PointB(var x: Int, var y: Int)

val p1 = PointA(1, 2)
val p2 = PointB(1, 2)

// Kompiliert nicht: PointA und PointB sind unterschiedliche Typen
// val p3: PointA = p2 // Fehler: Type mismatch
```

**Besonderheiten:**
- Klassen verwenden nominales Typing
- Zwei Klassen mit identischer Struktur sind nicht kompatibel, wenn sie unterschiedliche Namen haben

**Weiterführende Links:**
- [Kotlin Documentation - Classes](https://kotlinlang.org/docs/classes.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Nominal Typing: Structures und Inductive Types sind durch Namen identifiziert
structure PointA where
  x : Int
  y : Int

structure PointB where
  x : Int
  y : Int

def p1 : PointA := { x := 1, y := 2 }
def p2 : PointB := { x := 1, y := 2 }

-- Kompiliert nicht: PointA und PointB sind unterschiedliche Typen
-- def p3 : PointA := p2 -- Fehler: Type mismatch
```

**Besonderheiten:**
- `structure` und `inductive` Typen verwenden nominales Typing
- Zwei Structures mit identischer Struktur sind nicht kompatibel, wenn sie unterschiedliche Namen haben
- Typgleichheit basiert auf dem Typnamen, nicht auf der Struktur

**Weiterführende Links:**
- [Lean 4 Documentation - Structures](https://lean-lang.org/theorem_proving_in_lean4/structures_and_records.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```mercury
% Nominal Typing: Typen werden durch ihren Namen identifiziert
:- type point_a
    --->    point_a(x :: int, y :: int).

:- type point_b
    --->    point_b(x :: int, y :: int).

% point_a und point_b sind unterschiedliche Typen,
% obwohl sie dieselbe Struktur haben.

:- pred main(io::di, io::uo) is det.
main(!IO) :-
    P1 = point_a(1, 2),
    % P2 : point_b = P1,  % Compile-Fehler: type mismatch
    io.write(P1, !IO), io.nl(!IO).
```

**Besonderheiten:**
- Typen werden durch ihren Namen identifiziert, nicht durch ihre Struktur.
- Zwei Typen mit identischer Struktur aber unterschiedlichem Namen sind nicht kompatibel.
- Typgleichheit basiert ausschließlich auf dem Typnamen.
- Das Modulsystem verstärkt die nominale Typisierung durch Namespace-Qualifizierung.

**Weiterführende Links:**
- [The Mercury Language Reference Manual - Type System](https://www.mercurylang.org/documentation/reference.html#Type_system)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Nominal Typing: Typen sind durch Namen identifiziert
type PointA = object
    x: int
    y: int

type PointB = object
    x: int
    y: int

var p1 = PointA(x: 1, y: 2)
var p2 = PointB(x: 1, y: 2)

# Kompiliert nicht: PointA und PointB sind unterschiedliche Typen
# var p3: PointA = p2 # Fehler: Type mismatch
```

**Besonderheiten:**
- Object types verwenden nominales Typing
- Zwei Object types mit identischer Struktur sind nicht kompatibel, wenn sie unterschiedliche Namen haben

**Weiterführende Links:**
- [Nim Documentation - Object Types](https://nim-lang.org/docs/manual.html#types-object-types)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# Nominal Typing: Typen sind durch Namen identifiziert
struct PointA:
    var x: Int
    var y: Int

struct PointB:
    var x: Int
    var y: Int

var p1 = PointA(1, 2)
var p2 = PointB(1, 2)

# Kompiliert nicht: PointA und PointB sind unterschiedliche Typen
# var p3: PointA = p2 # Fehler: Type mismatch
```

**Besonderheiten:**
- Structs verwenden nominales Typing
- Zwei Structs mit identischer Struktur sind nicht kompatibel, wenn sie unterschiedliche Namen haben

**Weiterführende Links:**
- [Mojo Documentation - Structs](https://docs.modular.com/mojo/manual/structs-and-classes/structs.html)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Nominal Typing: Typen sind durch Namen identifiziert
@interface PointA : NSObject
@property int x;
@property int y;
@end

@interface PointB : NSObject
@property int x;
@property int y;
@end

PointA *p1 = [[PointA alloc] init];
p1.x = 1;
p1.y = 2;

PointB *p2 = [[PointB alloc] init];
p2.x = 1;
p2.y = 2;

// Kompiliert nicht: PointA und PointB sind unterschiedliche Typen
// PointA *p3 = p2; // Fehler: Incompatible pointer types
```

**Besonderheiten:**
- Klassen verwenden nominales Typing
- Zwei Klassen mit identischer Struktur sind nicht kompatibel, wenn sie unterschiedliche Namen haben

**Weiterführende Links:**
- [Objective-C Documentation - Classes](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/DefiningClasses/DefiningClasses.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Nominal Typing: Typen sind durch Namen identifiziert
type
  PointA = record
    x: Integer;
    y: Integer;
  end;

  PointB = record
    x: Integer;
    y: Integer;
  end;

var
  p1: PointA;
  p2: PointB;

begin
  p1.x := 1;
  p1.y := 2;
  p2.x := 1;
  p2.y := 2;
  
  // Kompiliert nicht: PointA und PointB sind unterschiedliche Typen
  // p1 := p2; // Fehler: Incompatible types
end.
```

**Besonderheiten:**
- Record types verwenden nominales Typing
- Zwei Record types mit identischer Struktur sind nicht kompatibel, wenn sie unterschiedliche Namen haben

**Weiterführende Links:**
- [Free Pascal Documentation - Records](https://www.freepascal.org/docs-html/ref/refse19.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Nominal Typing: Typen sind durch Namen identifiziert
PointA :: struct {
    x: i32,
    y: i32,
}

PointB :: struct {
    x: i32,
    y: i32,
}

p1 := PointA{x = 1, y = 2}
p2 := PointB{x = 1, y = 2}

// Kompiliert nicht: PointA und PointB sind unterschiedliche Typen
// p3: PointA = p2 // Fehler: Type mismatch
```

**Besonderheiten:**
- Structs verwenden nominales Typing
- Zwei Structs mit identischer Struktur sind nicht kompatibel, wenn sie unterschiedliche Namen haben

**Weiterführende Links:**
- [Odin Documentation - Structs](https://odin-lang.org/docs/overview/#structs)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Nominal Typing: Typen sind durch Namen identifiziert
struct PointA {
    x: i32,
    y: i32,
}

struct PointB {
    x: i32,
    y: i32,
}

let p1 = PointA { x: 1, y: 2 };
let p2 = PointB { x: 1, y: 2 };

// Kompiliert nicht: PointA und PointB sind unterschiedliche Typen
// let p3: PointA = p2; // Fehler: Mismatched types
```

**Besonderheiten:**
- Structs verwenden nominales Typing
- Zwei Structs mit identischer Struktur sind nicht kompatibel, wenn sie unterschiedliche Namen haben

**Weiterführende Links:**
- [The Rust Book - Structs](https://doc.rust-lang.org/book/ch05-01-defining-structs.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Nominal Typing: Klassen sind durch Namen identifiziert
class PointA(val x: Int, val y: Int)
class PointB(val x: Int, val y: Int)

val p1 = new PointA(1, 2)
val p2 = new PointB(1, 2)

// Kompiliert nicht: PointA und PointB sind unterschiedliche Typen
// val p3: PointA = p2 // Fehler: Type mismatch
```

**Besonderheiten:**
- Klassen verwenden nominales Typing
- Zwei Klassen mit identischer Struktur sind nicht kompatibel, wenn sie unterschiedliche Namen haben
- Structural types verwenden strukturelles Typing (siehe Structural Typing)

**Weiterführende Links:**
- [Scala Documentation - Classes](https://docs.scala-lang.org/tour/classes.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Nominal Typing: Typen sind durch Namen identifiziert
struct PointA {
    var x: Int
    var y: Int
}

struct PointB {
    var x: Int
    var y: Int
}

let p1 = PointA(x: 1, y: 2)
let p2 = PointB(x: 1, y: 2)

// Kompiliert nicht: PointA und PointB sind unterschiedliche Typen
// let p3: PointA = p2 // Fehler: Cannot convert value
```

**Besonderheiten:**
- Structs, Klassen und Enums verwenden nominales Typing
- Zwei Typen mit identischer Struktur sind nicht kompatibel, wenn sie unterschiedliche Namen haben

**Weiterführende Links:**
- [Swift Documentation - Structures and Classes](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/classesandstructures/)

</TabItem>
<TabItem value="v" label="V">

```v
// Nominal Typing: Typen sind durch Namen identifiziert
struct PointA {
    x int
    y int
}

struct PointB {
    x int
    y int
}

p1 := PointA{x: 1, y: 2}
p2 := PointB{x: 1, y: 2}

// Kompiliert nicht: PointA und PointB sind unterschiedliche Typen
// p3 := PointA(p2) // Fehler: Cannot convert
```

**Besonderheiten:**
- Structs verwenden nominales Typing
- Zwei Structs mit identischer Struktur sind nicht kompatibel, wenn sie unterschiedliche Namen haben

**Weiterführende Links:**
- [V Documentation - Structs](https://github.com/vlang/v/blob/master/doc/docs.md#structs)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Nominal Typing: Typen sind durch Namen identifiziert
Public Class PointA
    Public Property X As Integer
    Public Property Y As Integer
End Class

Public Class PointB
    Public Property X As Integer
    Public Property Y As Integer
End Class

Dim p1 As PointA = New PointA With {.X = 1, .Y = 2}
Dim p2 As PointB = New PointB With {.X = 1, .Y = 2}

' Kompiliert nicht: PointA und PointB sind unterschiedliche Typen
' Dim p3 As PointA = p2 ' Fehler: Cannot convert
```

**Besonderheiten:**
- Klassen verwenden nominales Typing
- Zwei Klassen mit identischer Struktur sind nicht kompatibel, wenn sie unterschiedliche Namen haben

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Types](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/data-types/)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Nominal Typing: Typen sind durch Namen identifiziert
const PointA = struct {
    x: i32,
    y: i32,
};

const PointB = struct {
    x: i32,
    y: i32,
};

const p1 = PointA{ .x = 1, .y = 2 };
const p2 = PointB{ .x = 1, .y = 2 };

// Kompiliert nicht: PointA und PointB sind unterschiedliche Typen
// const p3: PointA = p2; // Fehler: Type mismatch
```

**Besonderheiten:**
- Structs verwenden nominales Typing
- Zwei Structs mit identischer Struktur sind nicht kompatibel, wenn sie unterschiedliche Namen haben

**Weiterführende Links:**
- [Zig Documentation - Structs](https://ziglang.org/documentation/0.11.0/#structs)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Nominal Typing: Custom Types sind durch ihren Namen identifiziert
type Celsius = Celsius Float
type Fahrenheit = Fahrenheit Float

temp1 : Celsius
temp1 = Celsius 100.0

temp2 : Fahrenheit
temp2 = Fahrenheit 212.0

-- temp1 und temp2 sind NICHT kompatibel, obwohl sie strukturell identisch sind
-- Celsius und Fahrenheit sind verschiedene Typen
```

**Besonderheiten:**
- Custom Types (Union Types) verwenden nominales Typing
- Zwei Custom Types mit identischer Struktur sind nicht austauschbar
- Type Aliases verwenden dagegen strukturelles Typing (siehe 3.1.2)

**Weiterführende Links:**
- [Elm Documentation - Custom Types](https://guide.elm-lang.org/types/custom_types.html)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// Nominal Typing: Custom Types sind nominal typisiert
pub type PointA {
  PointA(x: Int, y: Int)
}

pub type PointB {
  PointB(x: Int, y: Int)
}

pub fn use_point_a(p: PointA) -> Int {
  p.x + p.y
}

// use_point_a(PointB(1, 2)) // Kompilierungsfehler: Erwartet PointA, nicht PointB
```

**Besonderheiten:**
- Custom Types sind nominal typisiert
- Zwei Typen mit identischer Struktur aber unterschiedlichem Namen sind nicht kompatibel
- Compiler überprüft Typnamen, nicht nur Struktur

**Weiterführende Links:**
- [Gleam Documentation - Custom Types](https://tour.gleam.run/data-types/custom-types/)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Nominal Typing: Klassen werden durch ihren Namen identifiziert
class PointA {
    public var x:Int;
    public var y:Int;
    public function new(x:Int, y:Int) {
        this.x = x;
        this.y = y;
    }
}

class PointB {
    public var x:Int;
    public var y:Int;
    public function new(x:Int, y:Int) {
        this.x = x;
        this.y = y;
    }
}

var p1:PointA = new PointA(1, 2);
// var p2:PointA = new PointB(1, 2); // Fehler: PointB ist nicht PointA
```

**Besonderheiten:**
- Klassen verwenden nominales Typing
- Typedefs verwenden strukturelles Typing (siehe Structural Typing)
- Zwei Klassen mit identischer Struktur sind nicht kompatibel, wenn sie unterschiedliche Namen haben

**Weiterführende Links:**
- [Haxe Documentation - Type System](https://haxe.org/manual/type-system.html)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% Nominal Typing: Typen sind durch Namen identifiziert
classdef PointA
    properties
        X
        Y
    end
end

classdef PointB
    properties
        X
        Y
    end
end

% PointA und PointB sind unterschiedliche Typen,
% obwohl sie dieselbe Struktur haben
p1 = PointA();
p2 = PointB();
% isa(p1, 'PointB') ergibt false
```

**Besonderheiten:**
- `classdef`-Klassen verwenden Nominal Typing
- Zwei Klassen mit identischer Struktur aber unterschiedlichem Namen sind inkompatibel
- Structures (`struct`) verwenden hingegen Structural Typing

**Weiterführende Links:**
- [MATLAB Documentation - Classes](https://www.mathworks.com/help/matlab/matlab_oop/classes-in-the-matlab-language.html)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
// Nominal Typing: Klassen werden anhand ihres Namens identifiziert
class Point {
    public function __construct(
        public float $x,
        public float $y
    ) {}
}

class Vector {
    public function __construct(
        public float $x,
        public float $y
    ) {}
}

function usePoint(Point $p): void {
    echo "Point: {$p->x}, {$p->y}\n";
}

$point = new Point(1.0, 2.0);
$vector = new Vector(1.0, 2.0);

usePoint($point);   // Funktioniert
// usePoint($vector); // TypeError: gleiche Struktur, aber anderer Typname
?>
```

**Besonderheiten:**
- Klassen und Interfaces verwenden Nominal Typing
- `instanceof` prüft den Typnamen, nicht die Struktur
- Type Hints in Funktionssignaturen verwenden Nominal Typing

**Weiterführende Links:**
- [PHP Documentation - Type Declarations](https://www.php.net/manual/en/language.types.declarations.php)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Nominal Typing: Data types sind durch Namen identifiziert
data PointA = PointA { x :: Int, y :: Int }
data PointB = PointB { x :: Int, y :: Int }

p1 :: PointA
p1 = PointA { x: 1, y: 2 }

p2 :: PointB
p2 = PointB { x: 1, y: 2 }

-- Kompiliert nicht: PointA und PointB sind unterschiedliche Typen
-- p3 :: PointA = p2 -- Fehler: Could not match type
```

**Besonderheiten:**
- Data types und newtypes verwenden nominales Typing
- Zwei Data types mit identischer Struktur sind nicht kompatibel, wenn sie unterschiedliche Namen haben
- Records verwenden strukturelles Typing (siehe Structural Typing)

**Weiterführende Links:**
- [PureScript Documentation - Data Types](https://github.com/purescript/documentation/blob/master/language/Types.md)

</TabItem>
</Tabs>

## 3.1.2. Structural Typing

Typen werden durch ihre Struktur identifiziert. Zwei Typen sind kompatibel, wenn sie dieselbe Struktur haben, unabhängig vom Namen.

### Sprachen {#sprachen}

<Tabs availableTabs={['clojure', 'common-lisp', 'dart', 'elixir', 'elm', 'erlang', 'fsharp', 'gleam', 'go', 'haxe', 'javascript', 'lua', 'matlab', 'ocaml', 'octave', 'perl', 'php', 'prolog', 'purescript', 'python', 'r', 'racket', 'ruby', 'scala', 'scheme', 'typescript', 'v', 'wolfram-language']} orangeTabs={['haskell', 'roc']}>
<TabItem value="clojure" label="Clojure">

```clojure
;; Structural Typing über Maps: Kompatibilität durch Struktur
(defn distance-from-origin [point]
  (Math/sqrt (+ (* (:x point) (:x point))
                (* (:y point) (:y point)))))

;; Verschiedene "Typen" mit gleicher Struktur
(def point-a {:x 3 :y 4})
(def point-b {:x 3 :y 4 :label "B"})

;; Beide funktionieren, solange :x und :y vorhanden sind
(distance-from-origin point-a)  ; 5.0
(distance-from-origin point-b)  ; 5.0 (zusätzliche Keys werden ignoriert)
```

**Besonderheiten:**
- Maps sind strukturell typisiert: Kompatibilität basiert auf vorhandenen Keys
- Funktionen prüfen die Struktur zur Laufzeit, nicht den Typnamen
- Protocols hingegen erfordern explizite Implementierung (nominaler Dispatch)

**Weiterführende Links:**
- [Clojure Documentation - Data Structures](https://clojure.org/reference/data_structures)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Structural Typing: Duck Typing zur Laufzeit
(defun use-point (p)
  ;; Prüft zur Laufzeit, ob p die erforderlichen Slots hat
  (format t "Point: ~a, ~a~%" (slot-value p 'x) (slot-value p 'y)))

(defclass point-a ()
  ((x :initarg :x :accessor x)
   (y :initarg :y :accessor y)))

(defclass point-b ()
  ((x :initarg :x :accessor x)
   (y :initarg :y :accessor y)))

(defvar p1 (make-instance 'point-a :x 1 :y 2))
(defvar p2 (make-instance 'point-b :x 1 :y 2))

;; Beide funktionieren, wenn sie die erforderliche Struktur haben
(use-point p1) ; Funktioniert
(use-point p2) ; Funktioniert auch
```

**Besonderheiten:**
- Duck Typing zur Laufzeit - Objekte werden strukturell geprüft
- Ein Objekt ist kompatibel, wenn es die erforderlichen Slots/Methoden hat, unabhängig vom Typnamen

**Weiterführende Links:**
- [Common Lisp HyperSpec - Classes](http://www.lispworks.com/documentation/HyperSpec/Body/t_class.htm)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Structural Typing: Record typedefs sind durch Struktur identifiziert
typedef PointA = ({int x, int y});
typedef PointB = ({int x, int y});

PointA p1 = (x: 1, y: 2);
PointB p2 = (x: 1, y: 2);

// Kompatibel: PointA und PointB haben dieselbe Struktur
PointA p3 = p2; // Funktioniert, da strukturell identisch
```

**Besonderheiten:**
- Record typedefs verwenden strukturelles Typing (seit Dart 3.0)
- Zwei Record typedefs mit identischer Struktur sind kompatibel, auch wenn sie unterschiedliche Namen haben
- Klassen verwenden nominales Typing (siehe Nominal Typing)

**Weiterführende Links:**
- [Dart Documentation - Records](https://dart.dev/language/records)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Structural Typing: Protocols sind durch Struktur identifiziert
defprotocol PointLike do
  def get_x(point)
  def get_y(point)
end

defmodule PointA do
  defstruct [:x, :y]
end

defmodule PointB do
  defstruct [:x, :y]
end

defimpl PointLike, for: PointA do
  def get_x(%PointA{x: x}), do: x
  def get_y(%PointA{y: y}), do: y
end

defimpl PointLike, for: PointB do
  def get_x(%PointB{x: x}), do: x
  def get_y(%PointB{y: y}), do: y
end

p1 = %PointA{x: 1, y: 2}
p2 = %PointB{x: 1, y: 2}

# Beide erfüllen das Protocol strukturell
PointLike.get_x(p1) # Funktioniert
PointLike.get_x(p2) # Funktioniert auch
```

**Besonderheiten:**
- Protocols verwenden strukturelles Typing zur Laufzeit
- Ein Typ erfüllt ein Protocol, wenn er alle erforderlichen Funktionen implementiert, unabhängig vom Typnamen

**Weiterführende Links:**
- [Elixir Documentation - Protocols](https://elixir-lang.org/getting-started/protocols.html)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Structural Typing: Typen sind durch Struktur identifiziert
type alias PointA = { x : Int, y : Int }
type alias PointB = { x : Int, y : Int }

p1 : PointA
p1 = { x = 1, y = 2 }

p2 : PointB
p2 = { x = 1, y = 2 }

-- Kompatibel: PointA und PointB haben dieselbe Struktur
p3 : PointA
p3 = p2 -- Funktioniert, da strukturell identisch
```

**Besonderheiten:**
- Type aliases verwenden strukturelles Typing
- Zwei Type aliases mit identischer Struktur sind kompatibel, auch wenn sie unterschiedliche Namen haben

**Weiterführende Links:**
- [Elm Documentation - Types](https://guide.elm-lang.org/types/)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% Structural Typing: Duck Typing zur Laufzeit
use_point(P) ->
    % Prüft zur Laufzeit, ob P die erforderlichen Keys hat
    X = maps:get(x, P),
    Y = maps:get(y, P),
    io:format("Point: ~p, ~p~n", [X, Y]).

P1 = #{x => 1, y => 2},
P2 = #{x => 1, y => 2}.

% Beide funktionieren, wenn sie die erforderliche Struktur haben
use_point(P1). % Funktioniert
use_point(P2). % Funktioniert auch
```

**Besonderheiten:**
- Maps verwenden strukturelles Typing zur Laufzeit
- Ein Map ist kompatibel, wenn er die erforderlichen Keys hat, unabhängig vom Typnamen

**Weiterführende Links:**
- [Erlang Documentation - Maps](https://www.erlang.org/doc/reference_manual/data_types.html#maps)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Structural Typing: Anonyme Records sind durch Struktur identifiziert
let usePoint (p: {| X: int; Y: int |}) =
    printfn "Point: %d, %d" p.X p.Y

let p1 = {| X = 1; Y = 2 |}
let p2 = {| X = 3; Y = 4 |}

// Beide haben denselben strukturellen Typ {| X: int; Y: int |}
usePoint p1 // Funktioniert
usePoint p2 // Funktioniert auch
```

**Besonderheiten:**
- Anonyme Records (`{| ... |}`) verwenden strukturelles Typing
- Zwei anonyme Records mit identischen Feldern und Typen sind kompatibel
- Benannte Records verwenden nominales Typing

**Weiterführende Links:**
- [F# Documentation - Anonymous Records](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/anonymous-records)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// Structural Typing: Tuples sind strukturell typisiert
pub fn use_point(p: #(Int, Int)) -> Int {
  let #(x, y) = p
  x + y
}

// Alle Tuples mit gleicher Struktur sind kompatibel
let p1 = #(1, 2)
let p2 = #(3, 4)

use_point(p1)  // Funktioniert
use_point(p2)  // Funktioniert auch
```

**Besonderheiten:**
- Tuples verwenden Structural Typing - zwei Tuples mit gleicher Struktur sind typkompatibel
- Custom Types (Records) verwenden Nominal Typing und sind NICHT strukturell austauschbar
- Gleam kombiniert nominale und strukturelle Typisierung je nach Datenstruktur

**Weiterführende Links:**
- [Gleam Documentation - Tuples](https://tour.gleam.run/data-types/tuples/)

</TabItem>
<TabItem value="go" label="Go">

```go
// Structural Typing: Interfaces sind durch Struktur identifiziert
type PointA struct {
    X int
    Y int
}

type PointB struct {
    X int
    Y int
}

type Point interface {
    GetX() int
    GetY() int
}

func (p PointA) GetX() int { return p.X }
func (p PointA) GetY() int { return p.Y }

func (p PointB) GetX() int { return p.X }
func (p PointB) GetY() int { return p.Y }

// Beide Typen erfüllen das Interface strukturell
var p1 Point = PointA{X: 1, Y: 2}
var p2 Point = PointB{X: 1, Y: 2}
```

**Besonderheiten:**
- Interfaces verwenden strukturelles Typing
- Ein Typ erfüllt ein Interface, wenn er alle Methoden des Interfaces implementiert, unabhängig vom Typnamen
- Named types selbst verwenden nominales Typing (siehe Nominal Typing)

**Weiterführende Links:**
- [Go Language Specification - Interface types](https://go.dev/ref/spec#Interface_types)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Type Classes ermöglichen polymorphe Funktionen (ähnlich Structural Typing)
class PointLike a where
    getX :: a -> Int
    getY :: a -> Int

data PointA = PointA Int Int
data PointB = PointB Int Int

instance PointLike PointA where
    getX (PointA x _) = x
    getY (PointA _ y) = y

instance PointLike PointB where
    getX (PointB x _) = x
    getY (PointB _ y) = y

usePoint :: PointLike a => a -> String
usePoint p = "Point: " ++ show (getX p) ++ ", " ++ show (getY p)
```

**Besonderheiten:**
- Type Classes ermöglichen polymorphe Funktionen über verschiedene Typen (ähnlich wie Structural Typing)
- Instanzen müssen jedoch explizit deklariert werden (kein automatisches Structural Typing wie bei Go-Interfaces)
- Jeder Typ, der die erforderlichen Funktionen implementiert, kann eine Instanz einer Type Class werden

**Weiterführende Links:**
- [Haskell Documentation - Type Classes](https://www.haskell.org/tutorial/classes.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Structural Typing: Typen sind durch Struktur identifiziert
typedef PointA = { x: Int, y: Int };
typedef PointB = { x: Int, y: Int };

var p1: PointA = { x: 1, y: 2 };
var p2: PointB = { x: 1, y: 2 };

// Kompatibel: PointA und PointB haben dieselbe Struktur
var p3: PointA = p2; // Funktioniert, da strukturell identisch
```

**Besonderheiten:**
- Typedefs verwenden strukturelles Typing
- Zwei Typedefs mit identischer Struktur sind kompatibel, auch wenn sie unterschiedliche Namen haben

**Weiterführende Links:**
- [Haxe Documentation - Type System](https://haxe.org/manual/type-system.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Structural Typing: Duck Typing zur Laufzeit
function usePoint(p) {
    // Prüft zur Laufzeit, ob p die erforderlichen Properties hat
    console.log(`Point: ${p.x}, ${p.y}`);
}

const p1 = { x: 1, y: 2 };
const p2 = { x: 1, y: 2 };

// Beide funktionieren, wenn sie die erforderliche Struktur haben
usePoint(p1); // Funktioniert
usePoint(p2); // Funktioniert auch
```

**Besonderheiten:**
- Duck Typing zur Laufzeit - Objekte werden strukturell geprüft
- Ein Objekt ist kompatibel, wenn es die erforderlichen Properties hat, unabhängig vom Typnamen

**Weiterführende Links:**
- [MDN Web Docs - Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Structural Typing: Duck Typing zur Laufzeit
function use_point(p)
    -- Prüft zur Laufzeit, ob p die erforderlichen Felder hat
    print("Point: " .. p.x .. ", " .. p.y)
end

local p1 = {x = 1, y = 2}
local p2 = {x = 1, y = 2}

-- Beide funktionieren, wenn sie die erforderliche Struktur haben
use_point(p1) -- Funktioniert
use_point(p2) -- Funktioniert auch
```

**Besonderheiten:**
- Tables verwenden strukturelles Typing zur Laufzeit
- Ein Table ist kompatibel, wenn er die erforderlichen Keys hat, unabhängig vom Typnamen

**Weiterführende Links:**
- [Lua Documentation - Tables](https://www.lua.org/manual/5.4/manual.html#2.1)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% Structural Typing: Duck Typing zur Laufzeit
function use_point(p)
    % Prüft zur Laufzeit, ob p die erforderlichen Felder hat
    fprintf('Point: %d, %d\n', p.x, p.y);
end

p1 = struct('x', 1, 'y', 2);
p2 = struct('x', 1, 'y', 2);

% Beide funktionieren, wenn sie die erforderliche Struktur haben
use_point(p1) % Funktioniert
use_point(p2) % Funktioniert auch
```

**Besonderheiten:**
- Structures verwenden strukturelles Typing zur Laufzeit
- Eine Structure ist kompatibel, wenn sie die erforderlichen Felder hat, unabhängig vom Typnamen

**Weiterführende Links:**
- [MATLAB Documentation - Structures](https://www.mathworks.com/help/matlab/structures.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Structural Typing: Typen sind durch Struktur identifiziert *)
type point_a = { x : int; y : int }
type point_b = { x : int; y : int }

let p1 : point_a = { x = 1; y = 2 }
let p2 : point_b = { x = 1; y = 2 }

(* Kompatibel: point_a und point_b haben dieselbe Struktur *)
let p3 : point_a = p2 (* Funktioniert, da strukturell identisch *)
```

**Besonderheiten:**
- Record types verwenden strukturelles Typing
- Zwei Record types mit identischer Struktur sind kompatibel, auch wenn sie unterschiedliche Namen haben

**Weiterführende Links:**
- [OCaml Documentation - Records](https://ocaml.org/manual/records.html)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
% Structural Typing: Duck Typing zur Laufzeit
function use_point(p)
    % Prüft zur Laufzeit, ob p die erforderlichen Felder hat
    printf('Point: %d, %d\n', p.x, p.y);
end

p1 = struct('x', 1, 'y', 2);
p2 = struct('x', 1, 'y', 2);

% Beide funktionieren, wenn sie die erforderliche Struktur haben
use_point(p1) % Funktioniert
use_point(p2) % Funktioniert auch
```

**Besonderheiten:**
- Structures verwenden strukturelles Typing zur Laufzeit
- Eine Structure ist kompatibel, wenn sie die erforderlichen Felder hat, unabhängig vom Typnamen

**Weiterführende Links:**
- [GNU Octave Documentation - Structures](https://octave.org/doc/v8.1.0/Structures.html)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Structural Typing: Duck Typing zur Laufzeit
sub use_point {
    my ($p) = @_;
    # Prüft zur Laufzeit, ob $p die erforderlichen Keys hat
    print "Point: $p->{x}, $p->{y}\n";
}

my $p1 = { x => 1, y => 2 };
my $p2 = { x => 1, y => 2 };

# Beide funktionieren, wenn sie die erforderliche Struktur haben
use_point($p1); # Funktioniert
use_point($p2); # Funktioniert auch
```

**Besonderheiten:**
- Hashes verwenden strukturelles Typing zur Laufzeit
- Ein Hash ist kompatibel, wenn er die erforderlichen Keys hat, unabhängig vom Typnamen

**Weiterführende Links:**
- [Perl Documentation - Hashes](https://perldoc.perl.org/perldata#Hashes)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
// Structural Typing: Duck Typing zur Laufzeit
function usePoint($p) {
    // Prüft zur Laufzeit, ob $p die erforderlichen Properties hat
    echo "Point: {$p->x}, {$p->y}\n";
}

$p1 = (object)['x' => 1, 'y' => 2];
$p2 = (object)['x' => 1, 'y' => 2];

// Beide funktionieren, wenn sie die erforderliche Struktur haben
usePoint($p1); // Funktioniert
usePoint($p2); // Funktioniert auch
?>
```

**Besonderheiten:**
- Objects verwenden strukturelles Typing zur Laufzeit
- Ein Object ist kompatibel, wenn es die erforderlichen Properties hat, unabhängig vom Typnamen

**Weiterführende Links:**
- [PHP Documentation - Objects](https://www.php.net/manual/en/language.types.object.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Structural Typing: Terme werden durch Struktur identifiziert
% Prädikate arbeiten mit beliebigen Termen gleicher Struktur (Funktor + Arität)
use_point(point(X, Y)) :-
    format("Point: ~w, ~w~n", [X, Y]).

% Alle Terme mit Funktor point/2 sind kompatibel
use_point(point(1, 2)).   % Funktioniert
use_point(point(3, 4)).   % Funktioniert auch

% Polymorphe Prädikate über beliebige Strukturen
first(F) :- arg(1, F, F1), write(F1).
first(point(1, 2)).       % Gibt 1 aus
first(person(max, 30)).   % Gibt max aus
```

**Besonderheiten:**
- Unifikation basiert vollständig auf der Struktur von Termen (Funktor und Arität)
- Kein nominales Typsystem — es gibt keine Typnamen, nur Termstrukturen
- Ein Term passt, wenn Funktor und Arität übereinstimmen und die Argumente unifizierbar sind
- Prolog ist inhärent strukturell typisiert durch Unifikation

**Weiterführende Links:**
- [SWI-Prolog Documentation - Unification](https://www.swi-prolog.org/pldoc/man?section=unify)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Structural Typing: Typen sind durch Struktur identifiziert
type PointA = { x :: Int, y :: Int }
type PointB = { x :: Int, y :: Int }

p1 :: PointA
p1 = { x: 1, y: 2 }

p2 :: PointB
p2 = { x: 1, y: 2 }

-- Kompatibel: PointA und PointB haben dieselbe Struktur
p3 :: PointA
p3 = p2 -- Funktioniert, da strukturell identisch
```

**Besonderheiten:**
- Record types verwenden strukturelles Typing
- Zwei Record types mit identischer Struktur sind kompatibel, auch wenn sie unterschiedliche Namen haben

**Weiterführende Links:**
- [PureScript Documentation - Records](https://github.com/purescript/documentation/blob/master/language/Types.md#records)

</TabItem>
<TabItem value="python" label="Python">

```python
# Structural Typing: Duck Typing zur Laufzeit
def use_point(p):
    # Prüft zur Laufzeit, ob p die erforderlichen Attribute hat
    print(f"Point: {p.x}, {p.y}")

class PointA:
    def __init__(self, x, y):
        self.x = x
        self.y = y

class PointB:
    def __init__(self, x, y):
        self.x = x
        self.y = y

p1 = PointA(1, 2)
p2 = PointB(1, 2)

# Beide funktionieren, wenn sie die erforderliche Struktur haben
use_point(p1)  # Funktioniert
use_point(p2)  # Funktioniert auch
```

**Besonderheiten:**
- Duck Typing zur Laufzeit - Objekte werden strukturell geprüft
- Ein Objekt ist kompatibel, wenn es die erforderlichen Attribute/Methoden hat, unabhängig vom Typnamen

**Weiterführende Links:**
- [Python Documentation - Classes](https://docs.python.org/3/tutorial/classes.html)

</TabItem>
<TabItem value="r" label="R">

```r
# Structural Typing: Duck Typing zur Laufzeit
use_point <- function(p) {
    # Prüft zur Laufzeit, ob p die erforderlichen Komponenten hat
    cat("Point:", p$x, ",", p$y, "\n")
}

p1 <- list(x = 1, y = 2)
p2 <- list(x = 1, y = 2)

# Beide funktionieren, wenn sie die erforderliche Struktur haben
use_point(p1) # Funktioniert
use_point(p2) # Funktioniert auch
```

**Besonderheiten:**
- Lists verwenden strukturelles Typing zur Laufzeit
- Eine List ist kompatibel, wenn sie die erforderlichen Komponenten hat, unabhängig vom Typnamen

**Weiterführende Links:**
- [R Documentation - Lists](https://cran.r-project.org/doc/manuals/r-release/R-intro.html#Lists)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
; Structural Typing: Contracts sind durch Struktur identifiziert
(define (use-point p)
  ; Prüft zur Laufzeit, ob p die erforderlichen Felder hat
  (printf "Point: ~a, ~a\n" (hash-ref p 'x) (hash-ref p 'y)))

(define p1 (hash 'x 1 'y 2))
(define p2 (hash 'x 1 'y 2))

; Beide funktionieren, wenn sie die erforderliche Struktur haben
(use-point p1) ; Funktioniert
(use-point p2) ; Funktioniert auch
```

**Besonderheiten:**
- Contracts verwenden strukturelles Typing zur Laufzeit
- Ein Hash ist kompatibel, wenn er die erforderlichen Keys hat, unabhängig vom Typnamen

**Weiterführende Links:**
- [Racket Documentation - Contracts](https://docs.racket-lang.org/guide/contracts.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Structural Typing: Typen werden durch Struktur identifiziert
move : { x : F64, y : F64 } -> { x : F64, y : F64 }
move = \point -> { x: point.x + 1.0, y: point.y + 1.0 }

p1 = { x: 1.0, y: 2.0 }
p2 = { x: 3.0, y: 4.0, z: 5.0 }

-- Beide kompatibel: p2 hat die benötigten Felder x und y
result1 = move p1
result2 = move p2
```

**Besonderheiten:**
- Record Types verwenden strukturelles Typing
- Ein Record mit zusätzlichen Feldern ist kompatibel, solange die benötigten Felder vorhanden sind
- Keine nominale Typisierung bei Records

**Weiterführende Links:**
- [Roc Documentation - Records](https://www.roc-lang.org/tutorial#records)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Structural Typing: Duck Typing zur Laufzeit
def use_point(p)
  # Prüft zur Laufzeit, ob p die erforderlichen Methoden hat
  puts "Point: #{p.x}, #{p.y}"
end

class PointA
  attr_accessor :x, :y
  def initialize(x, y)
    @x = x
    @y = y
  end
end

class PointB
  attr_accessor :x, :y
  def initialize(x, y)
    @x = x
    @y = y
  end
end

p1 = PointA.new(1, 2)
p2 = PointB.new(1, 2)

# Beide funktionieren, wenn sie die erforderliche Struktur haben
use_point(p1) # Funktioniert
use_point(p2) # Funktioniert auch
```

**Besonderheiten:**
- Duck Typing zur Laufzeit - Objekte werden strukturell geprüft
- Ein Objekt ist kompatibel, wenn es die erforderlichen Methoden hat, unabhängig vom Typnamen

**Weiterführende Links:**
- [Ruby Documentation - Classes](https://ruby-doc.org/core-3.1.0/Class.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Structural Typing: Structural types sind durch Struktur identifiziert
type Point = {
  def getX(): Int
  def getY(): Int
}

class PointA(val x: Int, val y: Int) {
  def getX(): Int = x
  def getY(): Int = y
}

class PointB(val x: Int, val y: Int) {
  def getX(): Int = x
  def getY(): Int = y
}

// Beide Klassen erfüllen den strukturellen Typ
def usePoint(p: Point): Unit = {
  println(s"Point: ${p.getX()}, ${p.getY()}")
}

val p1 = new PointA(1, 2)
val p2 = new PointB(1, 2)

usePoint(p1) // Funktioniert
usePoint(p2) // Funktioniert auch
```

**Besonderheiten:**
- Structural types verwenden strukturelles Typing
- Ein Typ erfüllt einen strukturellen Typ, wenn er alle erforderlichen Methoden/Member hat, unabhängig vom Typnamen
- Klassen selbst verwenden nominales Typing (siehe Nominal Typing)

**Weiterführende Links:**
- [Scala Documentation - Structural Types](https://docs.scala-lang.org/scala3/book/types-structural.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; Structural Typing: Duck Typing zur Laufzeit
(define (use-point p)
  ;; Prüft zur Laufzeit, ob p die erforderlichen Keys hat
  (display (string-append "Point: "
                          (number->string (cdr (assoc 'x p)))
                          ", "
                          (number->string (cdr (assoc 'y p)))
                          "\n")))

(define p1 '((x . 1) (y . 2)))
(define p2 '((x . 1) (y . 2)))

;; Beide funktionieren, wenn sie die erforderliche Struktur haben
(use-point p1) ; Funktioniert
(use-point p2) ; Funktioniert auch
```

**Besonderheiten:**
- Association lists verwenden strukturelles Typing zur Laufzeit
- Eine Association list ist kompatibel, wenn sie die erforderlichen Keys hat, unabhängig vom Typnamen

**Weiterführende Links:**
- [Scheme Documentation - Association Lists](https://www.scheme.com/tspl4/objects.html)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Structural Typing: Interfaces und Klassen sind durch Struktur identifiziert
interface PointA {
    x: number;
    y: number;
}

interface PointB {
    x: number;
    y: number;
}

const p1: PointA = { x: 1, y: 2 };
const p2: PointB = { x: 1, y: 2 };

// Kompatibel: PointA und PointB haben dieselbe Struktur
const p3: PointA = p2; // Funktioniert, da strukturell identisch

// Auch Klassen sind strukturell typisiert
class ClassA { x: number = 0; y: number = 0; }
class ClassB { x: number = 0; y: number = 0; }

const a: ClassA = new ClassB(); // Funktioniert, da strukturell identisch
```

**Besonderheiten:**
- Interfaces und Klassen verwenden strukturelles Typing
- Zwei Typen mit identischer Struktur sind kompatibel, auch wenn sie unterschiedliche Namen haben
- Klassen mit `private`-Feldern verhalten sich effektiv nominal (private Felder verschiedener Klassen sind inkompatibel)

**Weiterführende Links:**
- [TypeScript Handbook - Structural Typing](https://www.typescriptlang.org/docs/handbook/type-compatibility.html)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Structural Typing: Duck Typing zur Laufzeit *)
usePoint[p_] := Print["Point: ", p["x"], ", ", p["y"]]

p1 = <|"x" -> 1, "y" -> 2|>
p2 = <|"x" -> 1, "y" -> 2|>

(* Beide funktionieren, wenn sie die erforderliche Struktur haben *)
usePoint[p1] (* Funktioniert *)
usePoint[p2] (* Funktioniert auch *)
```

**Besonderheiten:**
- Associations verwenden strukturelles Typing zur Laufzeit
- Eine Association ist kompatibel, wenn sie die erforderlichen Keys hat, unabhängig vom Typnamen

**Weiterführende Links:**
- [Wolfram Language Documentation - Associations](https://reference.wolfram.com/language/guide/Associations.html)

</TabItem>
<TabItem value="v" label="V">

```v
// Structural Typing: Interfaces werden implizit erfüllt
interface Printable {
    str() string
}

struct Dog {
    name string
}

fn (d Dog) str() string {
    return d.name
}

struct Cat {
    name string
}

fn (c Cat) str() string {
    return c.name
}

// Beide erfüllen Printable, ohne explizites "implements"
fn print_item(p Printable) {
    println(p.str())
}
```

**Besonderheiten:**
- Interfaces werden implizit erfüllt (kein `implements` nötig)
- Jeder Typ mit den richtigen Methoden erfüllt ein Interface automatisch
- Ähnlich wie Go-Interfaces

**Weiterführende Links:**
- [V Documentation - Interfaces](https://github.com/vlang/v/blob/master/doc/docs.md#interfaces)

</TabItem>
</Tabs>

