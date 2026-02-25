---
slug: /typsystem/value-categories-und-identity
title: 3.3. Value Categories und Identity
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 3.3. Value Categories und Identity

Wert- vs. Referenztypen, Pointer, Equality und Identity.

## 3.3.1. Primitive vs. Composite Types

Unterscheidung zwischen atomaren Typen, die nicht aus anderen Typen zusammengesetzt sind, und zusammengesetzten Typen, die aus anderen Typen bestehen.

### Sprachen {#sprachen}

<Tabs availableTabs={['ada', 'c', 'carbon', 'csharp', 'cpp', 'clojure', 'common-lisp', 'crystal', 'd', 'dart', 'eiffel', 'elixir', 'elm', 'erlang', 'fsharp', 'fortran', 'gleam', 'go', 'groovy', 'haskell', 'haxe', 'idris', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'lua', 'matlab', 'mercury', 'mojo', 'nim', 'objective-c', 'object-pascal', 'ocaml', 'octave', 'odin', 'perl', 'php', 'prolog', 'purescript', 'python', 'r', 'racket', 'roc', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'vbnet', 'v', 'wolfram-language', 'zig']}>
<TabItem value="ada" label="Ada">

```ada
-- Primitive Types: Integer, Boolean
x : Integer := 42;
flag : Boolean := True;

-- Composite Types: Array, Record
type Integer_Array is array (1 .. 3) of Integer;
numbers : Integer_Array := (10, 20, 30);

type Point is record
    x : Integer;
    y : Integer;
end record;
p : Point := (x => 1, y => 2);
```

**Besonderheiten:**
- Primitive Typen: Integer, Float, Boolean, Character
- Composite Typen: Arrays, Records, Strings
- Alle Typen sind typsicher

**Weiterführende Links:**
- [Ada Reference Manual - Types](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-3.html)

</TabItem>
<TabItem value="c" label="C">

```c
// Primitive Types: int, bool
int x = 42;
_Bool flag = 1;

// Composite Types: Array, Struct
int numbers[3] = {10, 20, 30};

struct Point {
    int x;
    int y;
};
struct Point p = {1, 2};
```

**Besonderheiten:**
- Primitive Typen: int, float, double, char, _Bool
- Composite Typen: Arrays, Structs, Unions
- Arrays zerfallen zu Pointern bei Funktionsaufrufen

**Weiterführende Links:**
- [C Standard - Types](https://en.cppreference.com/w/c/language/types)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Primitive Types: i32, bool
var x: i32 = 42;
var flag: bool = true;

// Composite Types: Array, Struct
var numbers: [i32; 3] = (10, 20, 30);

struct Point {
    var x: i32;
    var y: i32;
}
var p: Point = {.x = 1, .y = 2};
```

**Besonderheiten:**
- Primitive Typen: i8, i16, i32, i64, f32, f64, bool, char
- Composite Typen: Arrays, Structs, Tuples
- Experimentelle Sprache, Syntax kann sich noch ändern

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Primitive Types: int, bool
int x = 42;
bool flag = true;

// Composite Types: Array, Class/Struct
int[] numbers = {10, 20, 30};

struct Point {
    public int x;
    public int y;
}
Point p = new Point { x = 1, y = 2 };
```

**Besonderheiten:**
- Primitive Typen: int, float, double, bool, char, byte, etc.
- Composite Typen: Arrays, Classes, Structs, Tuples
- Alle primitiven Typen sind Aliase für .NET-Typen

**Weiterführende Links:**
- [Microsoft C# Documentation - Built-in Types](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Primitive Types: int, bool
int x = 42;
bool flag = true;

// Composite Types: Array, Struct/Class
int numbers[3] = {10, 20, 30};

struct Point {
    int x;
    int y;
};
Point p = {1, 2};
```

**Besonderheiten:**
- Primitive Typen: int, float, double, bool, char, etc.
- Composite Typen: Arrays, Structs, Classes, Tuples (seit C++11)
- Arrays zerfallen zu Pointern bei Funktionsaufrufen

**Weiterführende Links:**
- [C++ Reference - Types](https://en.cppreference.com/w/cpp/language/types)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Primitive Types: long, boolean
(def x 42)
(def flag true)

;; Composite Types: Vector, Map
(def numbers [10 20 30])

(def p {:x 1 :y 2})
```

**Besonderheiten:**
- Primitive Typen: long, double, boolean, char (für Performance optimiert)
- Composite Typen: Vectors, Maps, Lists, Sets
- Alle Werte sind Objekte, aber primitive Typen werden für Performance optimiert

**Weiterführende Links:**
- [Clojure Documentation - Primitives](https://clojure.org/reference/java-interop#primitives)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Primitive Types: integer, boolean
(defvar x 42)
(defvar flag t)

;; Composite Types: List, Array, Structure
(defvar numbers #(10 20 30))

(defstruct point
  (x 0)
  (y 0))
(defvar p (make-point :x 1 :y 2))
```

**Besonderheiten:**
- Primitive Typen: number (integer, float, ratio, complex), character, boolean (t/nil)
- Composite Typen: Lists, Arrays, Structures, Hash Tables
- Alle Werte sind Objekte

**Weiterführende Links:**
- [Common Lisp HyperSpec - Types](http://www.lispworks.com/documentation/HyperSpec/Body/t.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Primitive Types: Int32, Bool
x : Int32 = 42
flag : Bool = true

# Composite Types: Array, Struct
numbers = [10, 20, 30]

struct Point
  property x : Int32
  property y : Int32
end
p = Point.new(x: 1, y: 2)
```

**Besonderheiten:**
- Primitive Typen: Int8, Int16, Int32, Int64, Float32, Float64, Bool, Char
- Composite Typen: Arrays, Structs, Classes, Tuples
- Alle Typen sind Objekte, aber primitive Typen werden für Performance optimiert

**Weiterführende Links:**
- [Crystal Documentation - Types](https://crystal-lang.org/reference/1.11/syntax_and_semantics/literals.html)

</TabItem>
<TabItem value="d" label="D">

```d
// Primitive Types: int, bool
int x = 42;
bool flag = true;

// Composite Types: Array, Struct
int[] numbers = [10, 20, 30];

struct Point {
    int x;
    int y;
}
Point p = Point(1, 2);
```

**Besonderheiten:**
- Primitive Typen: bool, byte, int, uint, float, double, char, etc.
- Composite Typen: Arrays, Structs, Classes, Associative Arrays
- Arrays sind dynamisch und haben Length-Eigenschaft

**Weiterführende Links:**
- [D Language Specification - Types](https://dlang.org/spec/type.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Primitive Types: int, bool
int x = 42;
bool flag = true;

// Composite Types: List, Map, Class
List<int> numbers = [10, 20, 30];

class Point {
  int x;
  int y;
  Point(this.x, this.y);
}
Point p = Point(1, 2);
```

**Besonderheiten:**
- Primitive Typen: int, double, bool, String, null
- Composite Typen: Lists, Maps, Sets, Classes, Records (seit Dart 3.0)
- Alle Typen sind Objekte, auch primitive Typen

**Weiterführende Links:**
- [Dart Documentation - Types](https://dart.dev/language/types)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
-- Primitive Types: INTEGER, BOOLEAN
x: INTEGER
x := 42
flag: BOOLEAN
flag := True

-- Composite Types: ARRAY, Class
numbers: ARRAY [INTEGER]
numbers := <<10, 20, 30>>

class POINT
feature
    x: INTEGER
    y: INTEGER
end
```

**Besonderheiten:**
- Primitive Typen: INTEGER, REAL, BOOLEAN, CHARACTER
- Composite Typen: ARRAY, Classes, Tuples
- Alle Typen sind Klassen, auch primitive Typen

**Weiterführende Links:**
- [Eiffel Documentation - Types](https://www.eiffel.org/doc/eiffel/Language)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Primitive Types: integer, boolean
x = 42
flag = true

# Composite Types: List, Map, Tuple
numbers = [10, 20, 30]

p = %{x: 1, y: 2}
# oder als Tuple
p = {1, 2}
```

**Besonderheiten:**
- Primitive Typen: integer, float, atom, boolean
- Composite Typen: Lists, Maps, Tuples, Structs
- Alle Werte sind unveränderlich

**Weiterführende Links:**
- [Elixir Documentation - Types](https://elixir-lang.org/getting-started/basic-types.html)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Primitive Types: Int, Bool
x : Int
x = 42
flag : Bool
flag = True

-- Composite Types: List, Record, Tuple
numbers : List Int
numbers = [10, 20, 30]

p : { x : Int, y : Int }
p = { x = 1, y = 2 }
```

**Besonderheiten:**
- Primitive Typen: Int, Float, Bool, Char, String
- Composite Typen: Lists, Records, Tuples, Custom Types
- Alle Werte sind unveränderlich

**Weiterführende Links:**
- [Elm Documentation - Types](https://guide.elm-lang.org/core_language.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% Primitive Types: integer, boolean
X = 42,
Flag = true,

% Composite Types: List, Tuple, Map
Numbers = [10, 20, 30],

P = {1, 2},
% oder als Map
P2 = #{x => 1, y => 2}.
```

**Besonderheiten:**
- Primitive Typen: integer, float, atom, boolean
- Composite Typen: Lists, Tuples, Maps, Records
- Alle Werte sind unveränderlich

**Weiterführende Links:**
- [Erlang Documentation - Data Types](https://www.erlang.org/doc/reference_manual/data_types.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Primitive Types: int, bool
let x = 42
let flag = true

// Composite Types: List, Array, Record, Tuple
let numbers = [10; 20; 30]

type Point = { x: int; y: int }
let p = { x = 1; y = 2 }
```

**Besonderheiten:**
- Primitive Typen: int, float, double, bool, char, string
- Composite Typen: Lists, Arrays, Records, Tuples, Discriminated Unions
- Alle Typen sind unveränderlich per Default

**Weiterführende Links:**
- [F# Documentation - Types](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/fsharp-types)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Primitive Types: INTEGER, LOGICAL
INTEGER :: x
x = 42
LOGICAL :: flag
flag = .TRUE.

! Composite Types: Array, Derived Type
INTEGER :: numbers(3)
numbers = [10, 20, 30]

TYPE :: Point
    INTEGER :: x
    INTEGER :: y
END TYPE Point
TYPE(Point) :: p
p = Point(1, 2)
```

**Besonderheiten:**
- Primitive Typen: INTEGER, REAL, DOUBLE PRECISION, LOGICAL, CHARACTER
- Composite Typen: Arrays, Derived Types
- Arrays sind Fortran-Stärke

**Weiterführende Links:**
- [Fortran Standard - Types](https://gcc.gnu.org/onlinedocs/gfortran/Intrinsic-Types.html)

</TabItem>
<TabItem value="gleam" label="Gleam">

```erlang
// Primitive Types: Int, Bool
let x = 42
let flag = True

// Composite Types: List, Tuple, Custom Type
let numbers = [10, 20, 30]

// Tuple
let p = #(1, 2)
// Custom Type
type Point {
  Point(x: Int, y: Int)
}
```

**Besonderheiten:**
- Primitive Typen: Int, Float, Bool, String
- Composite Typen: Lists, Tuples, Custom Types, Records
- Alle Werte sind unveränderlich

**Weiterführende Links:**
- [Gleam Documentation - Types](https://gleam.run/documentation/)

</TabItem>
<TabItem value="go" label="Go">

```go
// Primitive Types: int, bool
var x int = 42
var flag bool = true

// Composite Types: Array/Slice, Struct
numbers := []int{10, 20, 30}

type Point struct {
    x int
    y int
}
p := Point{x: 1, y: 2}
```

**Besonderheiten:**
- Primitive Typen: int, int8, int16, int32, int64, uint, float32, float64, bool, string
- Composite Typen: Arrays, Slices, Structs, Maps, Channels
- Keine Klassen, nur Structs

**Weiterführende Links:**
- [Go Documentation - Types](https://go.dev/ref/spec#Types)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Primitive Types: int, boolean
int x = 42
boolean flag = true

// Composite Types: List, Map, Class
def numbers = [10, 20, 30]

class Point {
    int x
    int y
}
def p = new Point(x: 1, y: 2)
```

**Besonderheiten:**
- Primitive Typen: byte, short, int, long, float, double, boolean, char
- Composite Typen: Lists, Maps, Arrays, Classes
- Automatische Boxing/Unboxing zwischen primitiven und Objekttypen

**Weiterführende Links:**
- [Groovy Documentation - Types](https://groovy-lang.org/semantics.html#_primitive_types)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Primitive Types: Int, Bool
x :: Int
x = 42
flag :: Bool
flag = True

-- Composite Types: List, Tuple, Custom Type
numbers :: [Int]
numbers = [10, 20, 30]

data Point = Point { x :: Int, y :: Int }
p :: Point
p = Point { x = 1, y = 2 }
```

**Besonderheiten:**
- Primitive Typen: Int, Integer, Float, Double, Bool, Char
- Composite Typen: Lists, Tuples, Algebraic Data Types
- Alle Werte sind unveränderlich

**Weiterführende Links:**
- [Haskell Documentation - Types](https://www.haskell.org/tutorial/types.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Primitive Types: Int, Bool
var x: Int = 42;
var flag: Bool = true;

// Composite Types: Array, Class, Anonymous Structure
var numbers: Array<Int> = [10, 20, 30];

class Point {
    public var x: Int;
    public var y: Int;
    public function new(x: Int, y: Int) {
        this.x = x;
        this.y = y;
    }
}
var p = new Point(1, 2);
```

**Besonderheiten:**
- Primitive Typen: Int, Float, Bool, String
- Composite Typen: Arrays, Classes, Anonymous Structures, Enums
- Cross-platform Sprache mit einheitlicher Syntax

**Weiterführende Links:**
- [Haxe Documentation - Types](https://haxe.org/manual/types.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Primitive Types: Int, Bool
x : Int
x = 42
flag : Bool
flag = True

-- Composite Types: List, Tuple, Custom Type
numbers : List Int
numbers = [10, 20, 30]

data Point : Type where
    MkPoint : Int -> Int -> Point
p : Point
p = MkPoint 1 2
```

**Besonderheiten:**
- Primitive Typen: Int, Integer, Double, Bool, Char, String
- Composite Typen: Lists, Tuples, Dependent Types, Algebraic Data Types
- Unterstützt Dependent Types

**Weiterführende Links:**
- [Idris Documentation - Types](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Primitive Types: int, boolean
int x = 42;
boolean flag = true;

// Composite Types: Array, Class
int[] numbers = {10, 20, 30};

class Point {
    int x;
    int y;
    Point(int x, int y) {
        this.x = x;
        this.y = y;
    }
}
Point p = new Point(1, 2);
```

**Besonderheiten:**
- Primitive Typen: byte, short, int, long, float, double, boolean, char
- Composite Typen: Arrays, Classes, Records (seit Java 14)
- Automatisches Boxing/Unboxing zwischen primitiven und Objekttypen

**Weiterführende Links:**
- [Oracle Java Documentation - Types](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Primitive Types: number, boolean
let x = 42;
let flag = true;

// Composite Types: Array, Object
let numbers = [10, 20, 30];

let p = { x: 1, y: 2 };
```

**Besonderheiten:**
- Primitive Typen: number, boolean, string, null, undefined, symbol, bigint
- Composite Typen: Arrays, Objects, Maps, Sets
- Alle Typen außer primitiven sind Objekte

**Weiterführende Links:**
- [MDN Web Docs - Data Types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Primitive Types: Int, Bool
x::Int = 42
flag::Bool = true

# Composite Types: Array, Struct
numbers = [10, 20, 30]

struct Point
    x::Int
    y::Int
end
p = Point(1, 2)
```

**Besonderheiten:**
- Primitive Typen: Int, Float64, Bool, Char, String
- Composite Typen: Arrays, Structs, Tuples, Dictionaries
- Typen sind First-Class-Objekte

**Weiterführende Links:**
- [Julia Documentation - Types](https://docs.julialang.org/en/v1/manual/types/)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Primitive Types: int, bool
val x: int = 42
val flag: bool = True

// Composite Types: struct, type (ADTs), list
struct point
  x: int
  y: int

val p = Point(1, 2)
val numbers = [10, 20, 30]
```

**Besonderheiten:**
- Primitive Typen: `int`, `float64`, `bool`, `char`, `string`, `()` (unit)
- Composite Typen: `struct` (Records), `type` (ADTs), `list`, Tuples
- Alle Werte sind unveränderlich (immutable by default)
- Keine Unterscheidung zwischen Primitiven und Objekten (alles sind Werte)

**Weiterführende Links:**
- [Koka Standard Library - Types](https://koka-lang.github.io/koka/doc/std_core_types.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Primitive Types: Int, Boolean
val x: Int = 42
val flag: Boolean = true

// Composite Types: Array, List, Class, Data Class
val numbers = arrayOf(10, 20, 30)

data class Point(val x: Int, val y: Int)
val p = Point(1, 2)
```

**Besonderheiten:**
- Primitive Typen: Byte, Short, Int, Long, Float, Double, Boolean, Char
- Composite Typen: Arrays, Lists, Classes, Data Classes, Sealed Classes
- Primitives werden zu JVM-Primitiven kompiliert, wenn möglich

**Weiterführende Links:**
- [Kotlin Documentation - Types](https://kotlinlang.org/docs/basic-types.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Primitive Types: Nat, Int, Float, Bool, Char, String
def x : Int := 42
def flag : Bool := true

-- Composite Types: Structure, List, Array, Tuple
structure Point where
  x : Int
  y : Int

def p : Point := { x := 1, y := 2 }
def numbers : List Int := [10, 20, 30]
def pair : Int × String := (42, "Hallo")
```

**Besonderheiten:**
- Primitive Typen: Nat, Int, UInt8-64, Float, Bool, Char, String
- Composite Typen: Structures, Lists, Arrays, Tuples, Inductive Types
- Alle Typen sind erstklassige Werte im Typsystem
- Kein Autoboxing, alle Typen sind einheitlich

**Weiterführende Links:**
- [Lean 4 Documentation - Dependent Type Theory](https://lean-lang.org/theorem_proving_in_lean4/dependent_type_theory.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Primitive Types: number, boolean
local x = 42
local flag = true

-- Composite Types: Table (als Array und als Map)
local numbers = {10, 20, 30}

local p = {x = 1, y = 2}
```

**Besonderheiten:**
- Primitive Typen: number, boolean, string, nil
- Composite Typen: Tables (fungieren als Arrays, Maps, Objekte)
- Tables sind die einzige Datenstruktur

**Weiterführende Links:**
- [Lua Documentation - Types](https://www.lua.org/manual/5.4/manual.html#2.1)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% Primitive Types: double, logical
x = 42;
flag = true;

% Composite Types: Array, Struct, Cell Array
numbers = [10, 20, 30];

p = struct('x', 1, 'y', 2);
```

**Besonderheiten:**
- Primitive Typen: double, single, int8, int16, int32, int64, logical, char
- Composite Typen: Arrays, Structs, Cell Arrays, Tables
- Arrays sind die grundlegende Datenstruktur

**Weiterführende Links:**
- [MATLAB Documentation - Data Types](https://www.mathworks.com/help/matlab/data-types.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```mercury
% Primitive Types: int, float, char, string
:- pred main(io::di, io::uo) is det.
main(!IO) :-
    X = 42,            % int (primitiv)
    Y = 3.14,          % float (primitiv)
    C = 'A',           % char (primitiv)
    S = "Hello",       % string (primitiv)

    % Composite Types: ADTs, Listen, Tupel
    P = point(1, 2),
    Items = [1, 2, 3],
    Pair = {S, X},
    io.write(P, !IO), io.nl(!IO),
    io.write(Items, !IO), io.nl(!IO).

:- type point
    --->    point(x :: int, y :: int).
```

**Besonderheiten:**
- Primitive Typen: `int`, `float`, `char`, `string`
- Composite Typen: Algebraische Datentypen (ADTs), Listen (`list(T)`), Tupel
- Alle Typen sind Value Types (unveränderlich)
- Keine Unterscheidung zwischen Stack und Heap für den Programmierer

**Weiterführende Links:**
- [The Mercury Language Reference Manual - Builtin Types](https://www.mercurylang.org/documentation/reference.html#Builtin_types)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# Primitive Types: Int, Bool
var x: Int = 42
var flag: Bool = True

# Composite Types: List, Tuple, Struct
var numbers = List[Int](10, 20, 30)

struct Point:
    var x: Int
    var y: Int
var p = Point(1, 2)
```

**Besonderheiten:**
- Primitive Typen: Int, Float64, Bool, String
- Composite Typen: Lists, Tuples, Structs, Classes
- Python-ähnliche Syntax mit statischer Typisierung

**Weiterführende Links:**
- [Mojo Documentation](https://docs.modular.com/mojo/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Primitive Types: int, bool
var x: int = 42
var flag: bool = true

# Composite Types: Array, Sequence, Object, Tuple
var numbers = [10, 20, 30]

type Point = object
    x: int
    y: int
var p = Point(x: 1, y: 2)
```

**Besonderheiten:**
- Primitive Typen: int, int8, int16, int32, int64, float, bool, char, string
- Composite Typen: Arrays, Sequences, Objects, Tuples, Sets, Tables
- Objects sind Value Types

**Weiterführende Links:**
- [Nim Documentation - Types](https://nim-lang.org/docs/manual.html#types)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Primitive Types: int, BOOL
int x = 42;
BOOL flag = YES;

// Composite Types: NSArray, NSDictionary, Class
NSArray *numbers = @[@10, @20, @30];

@interface Point : NSObject
@property int x;
@property int y;
@end
Point *p = [[Point alloc] init];
p.x = 1;
p.y = 2;
```

**Besonderheiten:**
- Primitive Typen: int, float, double, BOOL, char
- Composite Typen: NSArray, NSDictionary, Classes, Structs
- Foundation Framework bietet viele Composite Types

**Weiterführende Links:**
- [Apple Objective-C Documentation](https://developer.apple.com/documentation/objectivec)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Primitive Types: Integer, Boolean
var
  x: Integer;
  flag: Boolean;
begin
  x := 42;
  flag := True;
end;

// Composite Types: Array, Record, Class
type
  TIntegerArray = array[0..2] of Integer;
  TPoint = record
    x: Integer;
    y: Integer;
  end;
var
  numbers: TIntegerArray = (10, 20, 30);
  p: TPoint;
begin
  p.x := 1;
  p.y := 2;
end;
```

**Besonderheiten:**
- Primitive Typen: Integer, Real, Boolean, Char, String
- Composite Typen: Arrays, Records, Classes, Objects
- Records sind Value Types

**Weiterführende Links:**
- [Delphi Documentation - Types](https://docwiki.embarcadero.com/RADStudio/en/Fundamental_Syntactic_Elements)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Primitive Types: int, bool *)
let x : int = 42
let flag : bool = true

(* Composite Types: List, Tuple, Record *)
let numbers = [10; 20; 30]

type point = { x : int; y : int }
let p = { x = 1; y = 2 }
```

**Besonderheiten:**
- Primitive Typen: int, float, bool, char, string
- Composite Typen: Lists, Tuples, Records, Variants, Arrays
- Alle Werte sind unveränderlich per Default

**Weiterführende Links:**
- [OCaml Documentation - Types](https://ocaml.org/manual/coreexamples.html)

</TabItem>
<TabItem value="octave" label="Octave">

```matlab
% Primitive Types: double, logical
x = 42;
flag = true;

% Composite Types: Array, Struct, Cell Array
numbers = [10, 20, 30];

p = struct('x', 1, 'y', 2);
```

**Besonderheiten:**
- Primitive Typen: double, single, int8, int16, int32, int64, logical, char
- Composite Typen: Arrays, Structs, Cell Arrays
- MATLAB-kompatibel

**Weiterführende Links:**
- [GNU Octave Documentation - Data Types](https://octave.org/doc/v8.1.0/Data-Types.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Primitive Types: int, bool
x: int = 42
flag: bool = true

// Composite Types: Array, Struct
numbers: [3]int = {10, 20, 30}

Point :: struct {
    x: int,
    y: int,
}
p := Point{x = 1, y = 2}
```

**Besonderheiten:**
- Primitive Typen: int, i8, i16, i32, i64, u8, u16, u32, u64, f32, f64, bool, rune
- Composite Typen: Arrays, Slices, Structs, Unions, Enums
- C-ähnliche Syntax mit modernen Features

**Weiterführende Links:**
- [Odin Documentation - Types](https://odin-lang.org/docs/overview/)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Primitive Types: scalar (number, string)
my $x = 42;
my $flag = 1;  # 1 = true, 0 = false

# Composite Types: Array, Hash
my @numbers = (10, 20, 30);

my %p = (x => 1, y => 2);
```

**Besonderheiten:**
- Primitive Typen: Scalar (number, string), keine explizite bool Typ
- Composite Typen: Arrays (@), Hashes (%), References
- Dynamische Typisierung, keine expliziten Typdeklarationen

**Weiterführende Links:**
- [Perl Documentation - Data Types](https://perldoc.perl.org/perldata)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
// Primitive Types: int, bool
$x = 42;
$flag = true;

// Composite Types: Array, Object
$numbers = [10, 20, 30];

$p = new stdClass();
$p->x = 1;
$p->y = 2;
// oder als Array
$p = ['x' => 1, 'y' => 2];
?>
```

**Besonderheiten:**
- Primitive Typen: int, float, bool, string, null
- Composite Typen: Arrays, Objects, Resources
- Arrays können als Maps oder Listen fungieren

**Weiterführende Links:**
- [PHP Documentation - Types](https://www.php.net/manual/en/language.types.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Primitive Types: Atome, Integer, Float
hello.
42.
3.14.

% Composite Types: Komplexe Terme (Funktoren), Listen
point(1, 2).
person(name('John', 'Doe'), age(30)).
[1, 2, 3].
[head | tail].

% Verschachtelte Strukturen
tree(node(leaf(1), node(leaf(2), leaf(3)))).
```

**Besonderheiten:**
- Primitive Typen: Atome (symbolische Konstanten), Integer, Floats
- Composite Typen: Komplexe Terme (Funktoren mit Argumenten) und Listen
- Listen sind eine spezielle Form von komplexen Termen (`.(Head, Tail)`)
- Alle Daten in Prolog sind Terme – es gibt keine separaten Objekte oder Referenztypen

**Weiterführende Links:**
- [SWI-Prolog - Terms](https://www.swi-prolog.org/pldoc/man?section=term)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Primitive Types: Int, Boolean
x :: Int
x = 42
flag :: Boolean
flag = true

-- Composite Types: Array, Record, Tuple
numbers :: Array Int
numbers = [10, 20, 30]

type Point = { x :: Int, y :: Int }
p :: Point
p = { x: 1, y: 2 }
```

**Besonderheiten:**
- Primitive Typen: Int, Number, Boolean, Char, String
- Composite Typen: Arrays, Records, Tuples, Algebraic Data Types
- Haskell-ähnlich, kompiliert zu JavaScript

**Weiterführende Links:**
- [PureScript Documentation - Types](https://github.com/purescript/documentation/blob/master/language/Types.md)

</TabItem>
<TabItem value="python" label="Python">

```python
# Primitive Types: int, bool
x = 42
flag = True

# Composite Types: List, Dict, Tuple, Class
numbers = [10, 20, 30]

class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y
p = Point(1, 2)
# oder als Dict
p = {'x': 1, 'y': 2}
```

**Besonderheiten:**
- Primitive Typen: int, float, bool, str, None
- Composite Typen: Lists, Dicts, Tuples, Sets, Classes
- Alle Typen sind Objekte, auch primitive Typen

**Weiterführende Links:**
- [Python Documentation - Data Types](https://docs.python.org/3/library/stdtypes.html)

</TabItem>
<TabItem value="r" label="R">

```r
# Primitive Types: numeric, logical
x <- 42
flag <- TRUE

# Composite Types: Vector, List, Data Frame
numbers <- c(10, 20, 30)

p <- list(x = 1, y = 2)
# oder als named vector
p <- c(x = 1, y = 2)
```

**Besonderheiten:**
- Primitive Typen: numeric, integer, logical, character, complex
- Composite Typen: Vectors, Lists, Data Frames, Matrices, Arrays
- Vectors sind die grundlegende Datenstruktur

**Weiterführende Links:**
- [R Documentation - Data Types](https://cran.r-project.org/doc/manuals/r-release/R-intro.html#Objects)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
; Primitive Types: number, boolean
(define x 42)
(define flag #t)

; Composite Types: List, Vector, Struct
(define numbers (list 10 20 30))

(struct point (x y))
(define p (point 1 2))
```

**Besonderheiten:**
- Primitive Typen: number, boolean, char, string, symbol
- Composite Typen: Lists, Vectors, Structs, Hash Tables
- Alle Werte sind First-Class-Objekte

**Weiterführende Links:**
- [Racket Documentation - Types](https://docs.racket-lang.org/guide/datatypes.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Primitive Types: I32, Bool
x : I32
x = 42
flag : Bool
flag = True

-- Composite Types: List, Record
numbers : List I32
numbers = [10, 20, 30]

p : { x : I32, y : I32 }
p = { x : 1, y : 2 }
```

**Besonderheiten:**
- Primitive Typen: I32, I64, F64, Bool, Str
- Composite Typen: Lists, Records, Tags (Sum Types)
- Funktionale Sprache mit struktureller Typisierung

**Weiterführende Links:**
- [Roc Documentation - Types](https://www.roc-lang.org/tutorial#records)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Primitive Types: Integer, TrueClass/FalseClass
x = 42
flag = true

# Composite Types: Array, Hash, Class
numbers = [10, 20, 30]

p = {x: 1, y: 2}
# oder als Class
class Point
  attr_accessor :x, :y
  def initialize(x, y)
    @x = x
    @y = y
  end
end
p = Point.new(1, 2)
```

**Besonderheiten:**
- Primitive Typen: Integer, Float, TrueClass, FalseClass, NilClass, Symbol, String
- Composite Typen: Arrays, Hashes, Classes, Structs
- Alle Typen sind Klassen, auch primitive Typen

**Weiterführende Links:**
- [Ruby Documentation - Data Types](https://ruby-doc.org/core-3.1.0/doc/syntax_rdoc.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Primitive Types: i32, bool
let x: i32 = 42;
let flag: bool = true;

// Composite Types: Array, Vec, Struct, Tuple
let numbers = [10, 20, 30];

struct Point {
    x: i32,
    y: i32,
}
let p = Point { x: 1, y: 2 };
```

**Besonderheiten:**
- Primitive Typen: i8, i16, i32, i64, u8, u16, u32, u64, f32, f64, bool, char
- Composite Typen: Arrays, Vectors, Structs, Tuples, Enums
- Ownership-System für Speicherverwaltung

**Weiterführende Links:**
- [The Rust Book - Types](https://doc.rust-lang.org/book/ch03-02-data-types.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Primitive Types: Int, Boolean
val x: Int = 42
val flag: Boolean = true

// Composite Types: Array, List, Class, Case Class
val numbers = Array(10, 20, 30)

case class Point(x: Int, y: Int)
val p = Point(1, 2)
```

**Besonderheiten:**
- Primitive Typen: Byte, Short, Int, Long, Float, Double, Boolean, Char
- Composite Typen: Arrays, Lists, Classes, Case Classes, Tuples
- Primitives werden zu JVM-Primitiven kompiliert, wenn möglich

**Weiterführende Links:**
- [Scala Documentation - Types](https://docs.scala-lang.org/tour/unified-types.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; Primitive Types: number, boolean
(define x 42)
(define flag #t)

;; Composite Types: List, Vector
(define numbers (list 10 20 30))

(define p (cons 1 (cons 2 '())))
;; oder als alist
(define p '((x . 1) (y . 2)))
```

**Besonderheiten:**
- Primitive Typen: number, boolean (#t/#f), char, string
- Composite Typen: Lists, Vectors, Pairs
- Alle Werte sind First-Class-Objekte

**Weiterführende Links:**
- [Scheme Documentation - Data Types](https://www.scheme.com/tspl4/objects.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Primitive Types: Int, Bool
let x: Int = 42
let flag: Bool = true

// Composite Types: Array, Dictionary, Struct, Class
let numbers = [10, 20, 30]

struct Point {
    var x: Int
    var y: Int
}
let p = Point(x: 1, y: 2)
```

**Besonderheiten:**
- Primitive Typen: Int, Int8, Int16, Int32, Int64, Float, Double, Bool, Character, String
- Composite Typen: Arrays, Dictionaries, Structs, Classes, Tuples, Enums
- Structs sind Value Types, Classes sind Reference Types

**Weiterführende Links:**
- [Swift Documentation - Types](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/thebasics/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Primitive Types: number, boolean
let x: number = 42;
let flag: boolean = true;

// Composite Types: Array, Object, Class, Tuple
let numbers: number[] = [10, 20, 30];

class Point {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}
let p = new Point(1, 2);
```

**Besonderheiten:**
- Primitive Typen: number, boolean, string, null, undefined, symbol, bigint
- Composite Typen: Arrays, Objects, Classes, Tuples, Interfaces
- Alle Typen entsprechen JavaScript-Primitiven zur Laufzeit

**Weiterführende Links:**
- [TypeScript Handbook - Basic Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Primitive Types: Integer, Boolean
Dim x As Integer = 42
Dim flag As Boolean = True

' Composite Types: Array, Class, Structure
Dim numbers() As Integer = {10, 20, 30}

Structure Point
    Dim x As Integer
    Dim y As Integer
End Structure
Dim p As Point
p.x = 1
p.y = 2
```

**Besonderheiten:**
- Primitive Typen: Integer, Double, Boolean, Char, Byte, etc.
- Composite Typen: Arrays, Classes, Structures, Tuples
- Alle primitiven Typen sind Aliase für .NET-Typen

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Types](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/data-types/)

</TabItem>
<TabItem value="v" label="V">

```v
// Primitive Types: int, bool
mut x := 42
mut flag := true

// Composite Types: Array, Struct
mut numbers := [10, 20, 30]

struct Point {
    x int
    y int
}
mut p := Point{
    x: 1
    y: 2
}
```

**Besonderheiten:**
- Primitive Typen: int, i8, i16, i32, i64, u8, u16, u32, u64, f32, f64, bool, rune, string
- Composite Typen: Arrays, Structs, Maps, Channels
- Alle Werte sind unveränderlich per Default (mut erforderlich)

**Weiterführende Links:**
- [V Documentation - Types](https://github.com/vlang/v/blob/master/doc/docs.md)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Primitive Types: Integer, Boolean *)
x = 42;
flag = True;

(* Composite Types: List, Association *)
numbers = {10, 20, 30};

p = <|"x" -> 1, "y" -> 2|>;
(* oder als List *)
p = {1, 2};
```

**Besonderheiten:**
- Primitive Typen: Integer, Real, Boolean, String, Symbol
- Composite Typen: Lists, Associations, Expressions
- Alles ist ein Expression, auch primitive Typen

**Weiterführende Links:**
- [Wolfram Language Documentation - Types](https://reference.wolfram.com/language/guide/TypesOfExpressions.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Primitive Types: i32, bool
const x: i32 = 42;
const flag: bool = true;

// Composite Types: Array, Struct
const numbers = [_]i32{ 10, 20, 30 };

const Point = struct {
    x: i32,
    y: i32,
};
const p = Point{ .x = 1, .y = 2 };
```

**Besonderheiten:**
- Primitive Typen: i8, i16, i32, i64, u8, u16, u32, u64, f16, f32, f64, bool, comptime_int, comptime_float
- Composite Typen: Arrays, Structs, Unions, Enums, Error Sets
- Compile-Time-Typen (comptime)

**Weiterführende Links:**
- [Zig Documentation - Types](https://ziglang.org/documentation/0.11.0/#Primitive-Types)

</TabItem>
</Tabs>


## 3.3.2. Object vs. Value Types (Reference Types vs. Value Types)

Unterscheidung zwischen Value Types, die bei Zuweisungen kopiert werden, und Reference Types, bei denen mehrere Variablen auf dasselbe Objekt verweisen können.

### Sprachen {#sprachen}

<Tabs availableTabs={['ada', 'c', 'carbon', 'cpp', 'csharp', 'd', 'dart', 'eiffel', 'fsharp', 'go', 'groovy', 'java', 'julia', 'kotlin', 'matlab', 'mercury', 'nim', 'object-pascal', 'objective-c', 'ocaml', 'odin', 'rust', 'scala', 'swift', 'v', 'vbnet', 'zig']}>
<TabItem value="ada" label="Ada">

```ada
-- Value Types: Records werden kopiert
type Point is record
    x : Integer;
    y : Integer;
end record;

p1 : Point := (x => 1, y => 2);
p2 : Point := p1;  -- Kopie
p2.x := 10;  -- p1.x bleibt 1

-- Access Types (ähnlich Referenzen)
type Point_Access is access Point;
p3 : Point_Access := new Point'(x => 1, y => 2);
p4 : Point_Access := p3;  -- Referenz, nicht Kopie
p4.x := 10;  -- p3.x wird auch zu 10
```

**Besonderheiten:**
- Records sind Value Types (werden kopiert)
- Access Types sind Reference Types (ähnlich Pointern)
- Explizite Unterscheidung zwischen Value und Reference Semantik

**Weiterführende Links:**
- [Ada Reference Manual - Access Types](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-3-10.html)

</TabItem>
<TabItem value="c" label="C">

```c
// Value Types: Structs werden kopiert
struct Point {
    int x;
    int y;
};

struct Point p1 = {1, 2};
struct Point p2 = p1;  // Kopie
p2.x = 10;  // p1.x bleibt 1

// Pointer (ähnlich Referenzen)
struct Point* p3 = &p1;
struct Point* p4 = p3;  // Beide zeigen auf p1
p4->x = 10;  // p1.x wird zu 10
```

**Besonderheiten:**
- Structs sind Value Types (werden kopiert)
- Pointer sind Reference Types (zeigen auf Objekte)
- Explizite Pointer-Verwaltung erforderlich

**Weiterführende Links:**
- [C Standard - Types](https://en.cppreference.com/w/c/language/types)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Value Types: Structs werden kopiert
struct Point {
    var x: i32;
    var y: i32;
}

var p1: Point = {.x = 1, .y = 2};
var p2: Point = p1;  // Kopie
p2.x = 10;  // p1.x bleibt 1

// Pointer (ähnlich Referenzen)
var p3: Point* = &p1;
var p4: Point* = p3;  // Beide zeigen auf p1
p4->x = 10;  // p1.x wird zu 10
```

**Besonderheiten:**
- Structs sind Value Types (werden kopiert)
- Pointer sind Reference Types
- Experimentelle Sprache, Syntax kann sich noch ändern

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Value Types: Structs werden kopiert
struct Point {
    public int x;
    public int y;
}

Point p1 = new Point { x = 1, y = 2 };
Point p2 = p1;  // Kopie
p2.x = 10;  // p1.x bleibt 1

// Reference Types: Classes werden referenziert
class PointRef {
    public int x;
    public int y;
}

PointRef p3 = new PointRef { x = 1, y = 2 };
PointRef p4 = p3;  // Referenz, nicht Kopie
p4.x = 10;  // p3.x wird auch zu 10
```

**Besonderheiten:**
- Structs sind Value Types (werden kopiert)
- Classes sind Reference Types (werden referenziert)
- Primitive Typen (int, bool, etc.) sind Value Types
- Explizite Unterscheidung zwischen struct und class

**Weiterführende Links:**
- [Microsoft C# Documentation - Value Types](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/value-types)
- [Microsoft C# Documentation - Reference Types](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/reference-types)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Value Types: Structs/Classes werden kopiert (Standard)
struct Point {
    int x;
    int y;
};

Point p1 = {1, 2};
Point p2 = p1;  // Kopie
p2.x = 10;  // p1.x bleibt 1

// Reference Types: Pointer/References
Point* p3 = &p1;
Point* p4 = p3;  // Beide zeigen auf p1
p4->x = 10;  // p1.x wird zu 10

// Oder mit References
Point& p5 = p1;  // Alias für p1
p5.x = 20;  // p1.x wird zu 20
```

**Besonderheiten:**
- Structs/Classes sind Value Types per Default (werden kopiert)
- Pointer und References sind Reference Types
- Move Semantik (seit C++11) für effiziente Übergabe

**Weiterführende Links:**
- [C++ Reference - Value Categories](https://en.cppreference.com/w/cpp/language/value_category)

</TabItem>
<TabItem value="d" label="D">

```d
// Value Types: Structs werden kopiert
struct Point {
    int x;
    int y;
}

Point p1 = Point(1, 2);
Point p2 = p1;  // Kopie
p2.x = 10;  // p1.x bleibt 1

// Reference Types: Classes werden referenziert
class PointRef {
    int x;
    int y;
    this(int x, int y) {
        this.x = x;
        this.y = y;
    }
}

PointRef p3 = new PointRef(1, 2);
PointRef p4 = p3;  // Referenz, nicht Kopie
p4.x = 10;  // p3.x wird auch zu 10
```

**Besonderheiten:**
- Structs sind Value Types (werden kopiert)
- Classes sind Reference Types (werden referenziert)
- Explizite Unterscheidung zwischen struct und class

**Weiterführende Links:**
- [D Language Specification - Types](https://dlang.org/spec/type.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Value Types: Primitive Types werden kopiert
int x = 42;
int y = x;  // Kopie
y = 10;  // x bleibt 42

// Reference Types: Objects werden referenziert
class Point {
  int x;
  int y;
  Point(this.x, this.y);
}

Point p1 = Point(1, 2);
Point p2 = p1;  // Referenz, nicht Kopie
p2.x = 10;  // p1.x wird auch zu 10
```

**Besonderheiten:**
- Primitive Typen (int, double, bool, String) sind Value Types
- Objects (Classes) sind Reference Types
- Records (seit Dart 3.0) sind Value Types

**Weiterführende Links:**
- [Dart Documentation - Types](https://dart.dev/language/types)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
-- Reference Types vs. Expanded Types (Value Types)
class POINT  -- Reference Type (Standard)
feature
    x: INTEGER
    y: INTEGER
    make (a_x, a_y: INTEGER)
        do
            x := a_x
            y := a_y
        end
end

expanded class VECTOR  -- Value Type (expanded)
feature
    x: REAL_64
    y: REAL_64
end

local
    p1, p2: POINT
    v1, v2: VECTOR
do
    create p1.make (1, 2)
    p2 := p1       -- Referenz-Kopie (beide zeigen auf dasselbe Objekt)
    
    v1.x := 1.0
    v2 := v1       -- Wert-Kopie (unabhängige Kopie)
end
```

**Besonderheiten:**
- Eiffel unterscheidet explizit zwischen Reference Types und Expanded Types (Value Types)
- `expanded class` deklariert einen Werttyp (Kopie bei Zuweisung)
- Standard-Klassen sind Reference Types (Referenz bei Zuweisung)
- Primitive Typen (INTEGER, REAL, BOOLEAN, CHARACTER) sind expanded classes

**Weiterführende Links:**
- [Eiffel ECMA-367 Standard](https://www.ecma-international.org/publications-and-standards/standards/ecma-367/)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Value Types: Records werden kopiert
type Point = { x: int; y: int }

let p1 = { x = 1; y = 2 }
let p2 = p1  // Kopie
let p3 = { p2 with x = 10 }  // p1.x bleibt 1

// Reference Types: Classes werden referenziert
type PointRef(x: int, y: int) =
    member val X = x with get, set
    member val Y = y with get, set

let p4 = PointRef(1, 2)
let p5 = p4  // Referenz, nicht Kopie
p5.X <- 10  // p4.X wird auch zu 10
```

**Besonderheiten:**
- Records sind Value Types (werden kopiert)
- Classes sind Reference Types (werden referenziert)
- Primitive Typen sind Value Types

**Weiterführende Links:**
- [F# Documentation - Types](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/fsharp-types)

</TabItem>
<TabItem value="go" label="Go">

```go
// Value Types: Structs werden kopiert
type Point struct {
    x int
    y int
}

p1 := Point{x: 1, y: 2}
p2 := p1  // Kopie
p2.x = 10  // p1.x bleibt 1

// Reference Types: Slices, Maps, Channels, Pointers
p3 := &p1  // Pointer zu p1
p4 := p3  // Beide zeigen auf p1
p4.x = 10  // p1.x wird zu 10
```

**Besonderheiten:**
- Structs sind Value Types (werden kopiert)
- Slices, Maps, Channels sind Reference Types
- Pointer können explizit verwendet werden

**Weiterführende Links:**
- [Go Documentation - Types](https://go.dev/ref/spec#Types)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Value Types: Primitive Types werden kopiert
int x = 42
int y = x  // Kopie
y = 10  // x bleibt 42

// Reference Types: Objects werden referenziert
class Point {
    int x
    int y
}

def p1 = new Point(x: 1, y: 2)
def p2 = p1  // Referenz, nicht Kopie
p2.x = 10  // p1.x wird auch zu 10
```

**Besonderheiten:**
- Primitive Typen sind Value Types (mit Autoboxing)
- Objects sind Reference Types
- Automatisches Boxing/Unboxing zwischen primitiven und Objekttypen

**Weiterführende Links:**
- [Groovy Documentation - Types](https://groovy-lang.org/semantics.html#_primitive_types)

</TabItem>
<TabItem value="java" label="Java">

```java
// Value Types: Primitive Types werden kopiert
int x = 42;
int y = x;  // Kopie
y = 10;  // x bleibt 42

// Reference Types: Objects werden referenziert
class Point {
    int x;
    int y;
    Point(int x, int y) {
        this.x = x;
        this.y = y;
    }
}

Point p1 = new Point(1, 2);
Point p2 = p1;  // Referenz, nicht Kopie
p2.x = 10;  // p1.x wird auch zu 10
```

**Besonderheiten:**
- Primitive Typen (int, double, boolean, etc.) sind Value Types
- Objects (Classes) sind Reference Types
- Automatisches Boxing/Unboxing zwischen primitiven und Objekttypen

**Weiterführende Links:**
- [Oracle Java Documentation - Primitive Data Types](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Value Types: Immutable Structs werden kopiert
struct Point
    x::Int
    y::Int
end

p1 = Point(1, 2)
p2 = p1  # Kopie (da immutable)
# p2.x = 10  # Fehler: immutable

# Reference Types: Mutable Structs werden referenziert
mutable struct PointRef
    x::Int
    y::Int
end

p3 = PointRef(1, 2)
p4 = p3  # Referenz, nicht Kopie
p4.x = 10  # p3.x wird auch zu 10
```

**Besonderheiten:**
- Immutable Structs sind Value Types (werden kopiert)
- Mutable Structs sind Reference Types (werden referenziert)
- Explizite Unterscheidung zwischen immutable und mutable

**Weiterführende Links:**
- [Julia Documentation - Types](https://docs.julialang.org/en/v1/manual/types/)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Value Types: Primitive Types werden kopiert
val x: Int = 42
val y: Int = x  // Kopie
// y = 10  // Fehler: val ist immutable

// Reference Types: Objects werden referenziert
class Point(var x: Int, var y: Int)

val p1 = Point(1, 2)
val p2 = p1  // Referenz, nicht Kopie
p2.x = 10  // p1.x wird auch zu 10
```

**Besonderheiten:**
- Primitive Typen sind Value Types (werden kopiert)
- Objects (Classes) sind Reference Types
- Data Classes sind Reference Types, aber mit struktureller Gleichheit

**Weiterführende Links:**
- [Kotlin Documentation - Types](https://kotlinlang.org/docs/basic-types.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Value Types: Objects werden kopiert
type Point = object
    x: int
    y: int

var p1 = Point(x: 1, y: 2)
var p2 = p1  # Kopie
p2.x = 10  # p1.x bleibt 1

# Reference Types: ref Objects werden referenziert
type PointRef = ref object
    x: int
    y: int

var p3 = PointRef(x: 1, y: 2)
var p4 = p3  # Referenz, nicht Kopie
p4.x = 10  # p3.x wird auch zu 10
```

**Besonderheiten:**
- Objects sind Value Types (werden kopiert)
- ref Objects sind Reference Types (werden referenziert)
- Explizite Unterscheidung zwischen object und ref object

**Weiterführende Links:**
- [Nim Documentation - Types](https://nim-lang.org/docs/manual.html#types)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Value Types: Structs werden kopiert
typedef struct {
    int x;
    int y;
} Point;

Point p1 = {1, 2};
Point p2 = p1;  // Kopie
p2.x = 10;  // p1.x bleibt 1

// Reference Types: Objects werden referenziert
@interface PointRef : NSObject
@property int x;
@property int y;
@end

PointRef *p3 = [[PointRef alloc] init];
p3.x = 1;
p3.y = 2;
PointRef *p4 = p3;  // Referenz, nicht Kopie
p4.x = 10;  // p3.x wird auch zu 10
```

**Besonderheiten:**
- Structs sind Value Types (werden kopiert)
- Objects (Classes) sind Reference Types
- Explizite Unterscheidung zwischen struct und class

**Weiterführende Links:**
- [Apple Objective-C Documentation](https://developer.apple.com/documentation/objectivec)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Value Types: Records werden kopiert
type
  TPoint = record
    x: Integer;
    y: Integer;
  end;

var
  p1, p2: TPoint;
begin
  p1.x := 1;
  p1.y := 2;
  p2 := p1;  // Kopie
  p2.x := 10;  // p1.x bleibt 1
end;

// Reference Types: Objects werden referenziert
type
  TPointRef = class
    x: Integer;
    y: Integer;
  end;

var
  p3, p4: TPointRef;
begin
  p3 := TPointRef.Create;
  p3.x := 1;
  p3.y := 2;
  p4 := p3;  // Referenz, nicht Kopie
  p4.x := 10;  // p3.x wird auch zu 10
end;
```

**Besonderheiten:**
- Records sind Value Types (werden kopiert)
- Objects (Classes) sind Reference Types
- Explizite Unterscheidung zwischen record und class

**Weiterführende Links:**
- [Delphi Documentation - Types](https://docwiki.embarcadero.com/RADStudio/en/Fundamental_Syntactic_Elements)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Value Types: Records werden kopiert *)
type point = { x : int; y : int }

let p1 = { x = 1; y = 2 }
let p2 = { p1 with x = 10 }  (* Neue Kopie mit geändertem x *)
(* p1.x bleibt 1 *)

(* Reference Types: ref Cells *)
let p3 = ref { x = 1; y = 2 }
let p4 = p3  (* Referenz, nicht Kopie *)
p4 := { x = 10; y = 2 }  (* p3 wird auch geändert *)
```

**Besonderheiten:**
- Records sind Value Types (werden kopiert, immutable)
- ref Cells sind Reference Types (mutable Referenzen)
- Alle Werte sind unveränderlich per Default

**Weiterführende Links:**
- [OCaml Documentation - Types](https://ocaml.org/manual/coreexamples.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Value Types: Structs werden kopiert
Point :: struct {
    x: int,
    y: int,
}

p1 := Point{x = 1, y = 2}
p2 := p1  // Kopie
p2.x = 10  // p1.x bleibt 1

// Reference Types: ^Point (Pointer)
p3 := &p1  // Pointer zu p1
p4 := p3  // Beide zeigen auf p1
p4.x = 10  // p1.x wird zu 10
```

**Besonderheiten:**
- Structs sind Value Types (werden kopiert)
- Pointer (^) sind Reference Types
- C-ähnliche Syntax mit modernen Features

**Weiterführende Links:**
- [Odin Documentation - Types](https://odin-lang.org/docs/overview/)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Value Types: Structs werden kopiert (wenn Copy trait)
#[derive(Copy, Clone)]
struct Point {
    x: i32,
    y: i32,
}

let p1 = Point { x: 1, y: 2 };
let p2 = p1;  // Kopie (da Copy)
// p1 ist noch verwendbar

// Reference Types: References (&) und Boxes
let p3 = Point { x: 1, y: 2 };
let p4 = &p3;  // Referenz
let p5 = p4;  // Referenz wird kopiert, nicht das Objekt
// p3.x bleibt 1, da immutable reference
```

**Besonderheiten:**
- Structs mit Copy trait sind Value Types (werden kopiert)
- References (&) und Boxes sind Reference Types
- Ownership-System kontrolliert Speicherverwaltung

**Weiterführende Links:**
- [The Rust Book - Ownership](https://doc.rust-lang.org/book/ch04-00-understanding-ownership.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Value Types: Primitive Types werden kopiert
val x: Int = 42
val y: Int = x  // Kopie
// y = 10  // Fehler: val ist immutable

// Reference Types: Objects werden referenziert
class Point(var x: Int, var y: Int)

val p1 = new Point(1, 2)
val p2 = p1  // Referenz, nicht Kopie
p2.x = 10  // p1.x wird auch zu 10
```

**Besonderheiten:**
- Primitive Typen sind Value Types (werden kopiert)
- Objects (Classes) sind Reference Types
- Case Classes sind Reference Types, aber mit struktureller Gleichheit

**Weiterführende Links:**
- [Scala Documentation - Types](https://docs.scala-lang.org/tour/unified-types.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Value Types: Structs werden kopiert
struct Point {
    var x: Int
    var y: Int
}

var p1 = Point(x: 1, y: 2)
var p2 = p1  // Kopie
p2.x = 10  // p1.x bleibt 1

// Reference Types: Classes werden referenziert
class PointRef {
    var x: Int
    var y: Int
    init(x: Int, y: Int) {
        self.x = x
        self.y = y
    }
}

let p3 = PointRef(x: 1, y: 2)
let p4 = p3  // Referenz, nicht Kopie
p4.x = 10  // p3.x wird auch zu 10
```

**Besonderheiten:**
- Structs sind Value Types (werden kopiert)
- Classes sind Reference Types (werden referenziert)
- Enums sind Value Types
- Explizite Unterscheidung zwischen struct und class

**Weiterführende Links:**
- [Swift Documentation - Structures and Classes](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/classesandstructures/)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Value Types: Structures werden kopiert
Structure Point
    Dim x As Integer
    Dim y As Integer
End Structure

Dim p1 As Point
p1.x = 1
p1.y = 2
Dim p2 As Point = p1  ' Kopie
p2.x = 10  ' p1.x bleibt 1

' Reference Types: Classes werden referenziert
Class PointRef
    Public x As Integer
    Public y As Integer
End Class

Dim p3 As New PointRef()
p3.x = 1
p3.y = 2
Dim p4 As PointRef = p3  ' Referenz, nicht Kopie
p4.x = 10  ' p3.x wird auch zu 10
```

**Besonderheiten:**
- Structures sind Value Types (werden kopiert)
- Classes sind Reference Types (werden referenziert)
- Primitive Typen sind Value Types
- Explizite Unterscheidung zwischen Structure und Class

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Value Types and Reference Types](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/data-types/value-types-and-reference-types)

</TabItem>
<TabItem value="v" label="V">

```v
// Value Types: Structs werden kopiert
struct Point {
    x int
    y int
}

mut p1 := Point{x: 1, y: 2}
mut p2 := p1  // Kopie
p2.x = 10  // p1.x bleibt 1

// Reference Types: &Point (Reference)
mut p3 := Point{x: 1, y: 2}
mut p4 := &p3  // Reference zu p3
p4.x = 10  // p3.x wird zu 10
```

**Besonderheiten:**
- Structs sind Value Types (werden kopiert)
- References (&) sind Reference Types
- Alle Werte sind unveränderlich per Default (mut erforderlich)

**Weiterführende Links:**
- [V Documentation - Types](https://github.com/vlang/v/blob/master/doc/docs.md#types)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Value Types: Structs werden kopiert
const Point = struct {
    x: i32,
    y: i32,
};

const p1 = Point{ .x = 1, .y = 2 };
const p2 = p1;  // Kopie
// p2.x = 10;  // Fehler: const ist immutable

// Reference Types: *Point (Pointer)
var p3 = Point{ .x = 1, .y = 2 };
const p4 = &p3;  // Pointer zu p3
p4.x = 10;  // p3.x wird zu 10
```

**Besonderheiten:**
- Structs sind Value Types (werden kopiert)
- Pointers (*) sind Reference Types
- Explizite Pointer-Verwaltung erforderlich

**Weiterführende Links:**
- [Zig Documentation - Types](https://ziglang.org/documentation/0.11.0/#Primitive-Types)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% Value Class (Standard)
classdef Point
    properties
        x
        y
    end
end

% Handle Class (Reference Type)
classdef Node < handle
    properties
        value
        next
    end
end

% Value Semantics
p1 = Point(); p1.x = 1;
p2 = p1;       % Kopie
p2.x = 2;      % p1.x ist immer noch 1

% Reference Semantics
n1 = Node(); n1.value = 1;
n2 = n1;       % Referenz auf dasselbe Objekt
n2.value = 2;  % n1.value ist jetzt auch 2
```

**Besonderheiten:**
- Standard-Klassen sind Value Types (Kopie bei Zuweisung)
- `< handle` macht eine Klasse zum Reference Type
- Handle-Klassen unterstützen Events, Listener und Destruktoren

**Weiterführende Links:**
- [MATLAB Documentation - Handle vs. Value Classes](https://www.mathworks.com/help/matlab/matlab_oop/comparing-handle-and-value-classes.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```mercury
% Value Types Only: Alle Typen in Mercury sind Value Types
:- type point
    --->    point(x :: int, y :: int).

:- pred main(io::di, io::uo) is det.
main(!IO) :-
    P1 = point(1, 2),
    P2 = P1,               % Kopie (Value Semantics)
    % P2 ist eine unabhängige Kopie von P1
    % Es gibt keine Reference Types in Mercury

    io.write(P1, !IO), io.nl(!IO),
    io.write(P2, !IO), io.nl(!IO).

% Listen sind ebenfalls Value Types
:- func append_item(list(int), int) = list(int).
append_item(List, Item) = List ++ [Item].
```

**Besonderheiten:**
- Alle Typen in Mercury sind Value Types — es gibt keine Reference Types.
- Zuweisung erzeugt immer eine logische Kopie (keine Aliasing-Probleme).
- Als deklarative Sprache gibt es keine Mutation — Werte sind unveränderlich.
- Kein Unterschied zwischen Stack- und Heap-Allokation für den Programmierer.

**Weiterführende Links:**
- [The Mercury Language Reference Manual - Type System](https://www.mercurylang.org/documentation/reference.html#Type_system)

</TabItem>
</Tabs>


## 3.3.3. Pointers vs. References

Unterscheidung zwischen Pointern, die explizit dereferenziert werden müssen, und Referenzen, die automatisch dereferenziert werden und als Alias für ein Objekt fungieren.

### Sprachen {#sprachen}

<Tabs availableTabs={['ada', 'cpp', 'nim', 'objective-c', 'object-pascal', 'rust']} yellowTabs={['c', 'd', 'go', 'odin', 'swift', 'v', 'zig']} orangeTabs={['carbon']}>
<TabItem value="ada" label="Ada">

```ada
-- Access Types (ähnlich Pointern)
type Point_Access is access Point;
p1 : Point_Access := new Point'(x => 1, y => 2);
p2 : Point_Access := p1;  -- Beide zeigen auf dasselbe Objekt

-- Dereferenzierung explizit mit .all
p1.all.x := 10;  -- Explizite Dereferenzierung
-- oder automatisch mit .
p1.x := 10;  -- Automatische Dereferenzierung
```

**Besonderheiten:**
- Access Types sind ähnlich Pointern
- Automatische Dereferenzierung bei Feldzugriff
- Explizite Dereferenzierung mit .all möglich

**Weiterführende Links:**
- [Ada Reference Manual - Access Types](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-3-10.html)

</TabItem>
<TabItem value="c" label="C">

```c
// Pointers: Explizite Dereferenzierung erforderlich
struct Point {
    int x;
    int y;
};

struct Point p = {1, 2};
struct Point* ptr = &p;  // Pointer

// Explizite Dereferenzierung mit *
(*ptr).x = 10;  // Explizite Dereferenzierung
// oder mit ->
ptr->x = 10;  // Kurzform für (*ptr).x
```

**Besonderheiten:**
- Nur Pointers, keine Referenzen
- Explizite Dereferenzierung mit * oder ->
- Pointer-Arithmetik möglich

**Weiterführende Links:**
- [C Standard - Pointers](https://en.cppreference.com/w/c/language/pointer)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Pointers: Explizite Dereferenzierung erforderlich
struct Point {
    var x: i32;
    var y: i32;
}

var p: Point = {.x = 1, .y = 2};
var ptr: Point* = &p;  // Pointer

// Explizite Dereferenzierung mit *
(*ptr).x = 10;  // Explizite Dereferenzierung
// oder mit ->
ptr->x = 10;  // Kurzform für (*ptr).x
```

**Besonderheiten:**
- Nur Pointers, keine Referenzen
- Explizite Dereferenzierung mit * oder ->
- Experimentelle Sprache, Syntax kann sich noch ändern

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Pointers: Explizite Dereferenzierung erforderlich
struct Point {
    int x;
    int y;
};

Point p = {1, 2};
Point* ptr = &p;  // Pointer

// Explizite Dereferenzierung mit *
(*ptr).x = 10;  // Explizite Dereferenzierung
// oder mit ->
ptr->x = 10;  // Kurzform für (*ptr).x

// References: Automatische Dereferenzierung
Point& ref = p;  // Reference (Alias)
ref.x = 20;  // Automatische Dereferenzierung, p.x wird zu 20
// Keine explizite Dereferenzierung nötig
```

**Besonderheiten:**
- Pointers: Explizite Dereferenzierung mit * oder ->
- References: Automatische Dereferenzierung, fungieren als Alias
- References können nicht neu zugewiesen werden (immer Alias für dasselbe Objekt)

**Weiterführende Links:**
- [C++ Reference - Pointers](https://en.cppreference.com/w/cpp/language/pointer)
- [C++ Reference - References](https://en.cppreference.com/w/cpp/language/reference)

</TabItem>
<TabItem value="d" label="D">

```d
// Pointers: Explizite Dereferenzierung erforderlich
struct Point {
    int x;
    int y;
}

Point p = Point(1, 2);
Point* ptr = &p;  // Pointer

// Explizite Dereferenzierung mit *
(*ptr).x = 10;
// Automatische Dereferenzierung bei Struct-Member-Zugriff
ptr.x = 10;  // Syntaktischer Zucker für (*ptr).x

// References: nur als Funktionsparameter (ref)
void modify(ref Point p) {
    p.x = 20;  // Ändert das Original
}

modify(p);  // p.x ist jetzt 20
```

**Besonderheiten:**
- Pointers: Explizite Dereferenzierung mit `*`, automatisch bei Struct-Member-Zugriff
- References: Nur als Funktionsparameter über `ref` Keyword möglich
- Keine eigenständigen Referenz-Variablen wie in C++
- `ref` Parameter sind automatisch Referenzen

**Weiterführende Links:**
- [D Language Specification - Pointers](https://dlang.org/spec/type.html#pointers)

</TabItem>
<TabItem value="go" label="Go">

```go
// Pointers: Explizite Dereferenzierung erforderlich
type Point struct {
    x int
    y int
}

p := Point{x: 1, y: 2}
ptr := &p  // Pointer

// Explizite Dereferenzierung mit *
(*ptr).x = 10;  // Explizite Dereferenzierung
// oder automatisch bei Structs
ptr.x = 10;  // Automatische Dereferenzierung bei Structs
```

**Besonderheiten:**
- Nur Pointers, keine Referenzen
- Explizite Dereferenzierung mit *, automatisch bei Struct-Feldern
- Keine Pointer-Arithmetik

**Weiterführende Links:**
- [Go Documentation - Pointers](https://go.dev/ref/spec#Pointer_types)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Pointers: Explizite Dereferenzierung erforderlich
type Point = object
    x: int
    y: int

var p = Point(x: 1, y: 2)
var ptr: ptr Point = addr(p)  # Pointer

# Explizite Dereferenzierung mit []
ptr[].x = 10  # Explizite Dereferenzierung

# References: Automatische Dereferenzierung
var ref: ref Point = new(Point)
ref.x = 20  # Automatische Dereferenzierung
```

**Besonderheiten:**
- Pointers (ptr): Explizite Dereferenzierung mit []
- References (ref): Automatische Dereferenzierung, Garbage Collected
- ref ist ähnlich wie Boxed Types

**Weiterführende Links:**
- [Nim Documentation - Pointers](https://nim-lang.org/docs/manual.html#types-reference-and-pointer-types)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Pointers: Explizite Dereferenzierung bei C-Structs
typedef struct {
    int x;
    int y;
} Point;

Point p = {1, 2};
Point* ptr = &p;  // Pointer

// Explizite Dereferenzierung mit *
(*ptr).x = 10;  // Explizite Dereferenzierung
// oder mit ->
ptr->x = 10;  // Kurzform für (*ptr).x

// Objects: Automatische Dereferenzierung
PointRef* obj = [[PointRef alloc] init];
obj.x = 20;  // Automatische Dereferenzierung bei Objects
```

**Besonderheiten:**
- Pointers: Explizite Dereferenzierung mit * oder -> bei C-Structs
- Objects: Automatische Dereferenzierung bei Objective-C Objects
- Alle Objects sind Pointer

**Weiterführende Links:**
- [Apple Objective-C Documentation](https://developer.apple.com/documentation/objectivec)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Pointers: Explizite Dereferenzierung erforderlich
Point :: struct {
    x: int,
    y: int,
}

p := Point{x = 1, y = 2}
ptr: ^Point = &p  // Pointer

// Explizite Dereferenzierung mit ^
ptr^.x = 10  // Explizite Dereferenzierung
// oder automatisch bei Structs
ptr.x = 10  // Automatische Dereferenzierung bei Structs
```

**Besonderheiten:**
- Nur Pointers, keine Referenzen
- Explizite Dereferenzierung mit ^, automatisch bei Struct-Feldern
- C-ähnliche Syntax

**Weiterführende Links:**
- [Odin Documentation - Pointers](https://odin-lang.org/docs/overview/)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// References: Automatische Dereferenzierung
struct Point {
    x: i32,
    y: i32,
}

let mut p = Point { x: 1, y: 2 };
let ref_p = &mut p;  // Mutable Reference

// Automatische Dereferenzierung
ref_p.x = 10;  // Automatische Dereferenzierung
// oder explizit mit *
(*ref_p).x = 10;  // Explizite Dereferenzierung auch möglich

// Raw Pointers: Explizite Dereferenzierung (unsafe)
let raw_ptr: *mut Point = &mut p;
unsafe {
    (*raw_ptr).x = 20;  // Explizite Dereferenzierung in unsafe Block
}
```

**Besonderheiten:**
- References (&): Automatische Dereferenzierung, Ownership-basiert
- Raw Pointers (*): Explizite Dereferenzierung, nur in unsafe Blocks
- References sind sicherer als Raw Pointers

**Weiterführende Links:**
- [The Rust Book - References and Borrowing](https://doc.rust-lang.org/book/ch04-02-references-and-borrowing.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// References: Automatische Dereferenzierung
class Point {
    var x: Int
    var y: Int
    init(x: Int, y: Int) {
        self.x = x
        self.y = y
    }
}

let p = Point(x: 1, y: 2)
let ref = p  // Reference (alle Classes sind Reference Types)

// Automatische Dereferenzierung
ref.x = 10  // Automatische Dereferenzierung, p.x wird zu 10
// Keine explizite Dereferenzierung nötig
```

**Besonderheiten:**
- Nur References, keine expliziten Pointers
- Classes sind automatisch Reference Types
- Automatische Dereferenzierung bei allen Zugriffen

**Weiterführende Links:**
- [Swift Documentation - Classes](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/classesandstructures/)

</TabItem>
<TabItem value="v" label="V">

```v
// References: Automatische Dereferenzierung
struct Point {
    x int
    y int
}

mut p := Point{x: 1, y: 2}
mut ref := &p  // Reference

// Automatische Dereferenzierung
ref.x = 10  // Automatische Dereferenzierung, p.x wird zu 10
// Keine explizite Dereferenzierung nötig
```

**Besonderheiten:**
- Nur References, keine expliziten Pointers
- Automatische Dereferenzierung bei allen Zugriffen
- Alle Werte sind unveränderlich per Default (mut erforderlich)

**Weiterführende Links:**
- [V Documentation - References](https://github.com/vlang/v/blob/master/doc/docs.md#references)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Pointers: Explizite Dereferenzierung erforderlich
const Point = struct {
    x: i32,
    y: i32,
};

var p = Point{ .x = 1, .y = 2 };
const ptr: *Point = &p;  // Pointer

// Explizite Dereferenzierung mit .*
ptr.*.x = 10;  // Explizite Dereferenzierung
// oder automatisch bei Structs
ptr.x = 10;  // Automatische Dereferenzierung bei Structs
```

**Besonderheiten:**
- Nur Pointers, keine Referenzen
- Explizite Dereferenzierung mit .*, automatisch bei Struct-Feldern
- Explizite Pointer-Verwaltung erforderlich

**Weiterführende Links:**
- [Zig Documentation - Pointers](https://ziglang.org/documentation/0.11.0/#Pointers)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Pointers vs. References
var
  x: Integer = 42;
  ptr: ^Integer;    // Typed Pointer
  obj1, obj2: TObject;  // Implizite References
begin
  // Pointer
  ptr := @x;        // Adresse nehmen
  ptr^ := 100;      // Dereferenzieren

  // References (Objects sind immer References)
  obj1 := TObject.Create;
  obj2 := obj1;     // Reference-Kopie, nicht Objekt-Kopie
end;
```

**Besonderheiten:**
- `^TypeName` für typisierte Pointer
- `@` zum Nehmen der Adresse, `^` zum Dereferenzieren
- Klassen-Variablen sind implizite References (kein expliziter `^`)
- Records sind Value Types, Klassen sind Reference Types

**Weiterführende Links:**
- [Free Pascal Documentation - Pointers](https://www.freepascal.org/docs-html/ref/refse16.html)

</TabItem>
</Tabs>


## 3.3.4. Equality and Identity

### Referential Equality


Prüft, ob zwei Variablen auf dasselbe Objekt im Speicher verweisen (Identität), unabhängig vom Inhalt des Objekts.


<Tabs availableTabs={['c', 'carbon', 'cpp', 'csharp', 'd', 'dart', 'go', 'groovy', 'java', 'javascript', 'julia', 'kotlin', 'nim', 'objective-c', 'ocaml', 'odin', 'python', 'ruby', 'rust', 'scala', 'swift', 'typescript', 'vbnet', 'v', 'zig']}>
<TabItem value="c" label="C">

```c
// Referential Equality: Pointer-Vergleich
struct Point {
    int x;
    int y;
};

struct Point p1 = {1, 2};
struct Point p2 = {1, 2};
struct Point* ptr1 = &p1;
struct Point* ptr2 = &p1;
struct Point* ptr3 = &p2;

// Pointer-Vergleich (==)
if (ptr1 == ptr2) {
    // true: Beide zeigen auf p1
}
if (ptr1 == ptr3) {
    // false: Zeigen auf verschiedene Objekte
}
```

**Besonderheiten:**
- Pointer-Vergleich mit == prüft, ob beide auf dasselbe Objekt zeigen
- Strukturelle Gleichheit muss manuell implementiert werden

**Weiterführende Links:**
- [C Standard - Equality Operators](https://en.cppreference.com/w/c/language/operator_comparison)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Referential Equality: Pointer-Vergleich
struct Point {
    var x: i32;
    var y: i32;
}

var p1: Point = {.x = 1, .y = 2};
var p2: Point = {.x = 1, .y = 2};
var ptr1: Point* = &p1;
var ptr2: Point* = &p1;
var ptr3: Point* = &p2;

// Pointer-Vergleich (==)
if (ptr1 == ptr2) {
    // true: Beide zeigen auf p1
}
if (ptr1 == ptr3) {
    // false: Zeigen auf verschiedene Objekte
}
```

**Besonderheiten:**
- Pointer-Vergleich mit == prüft, ob beide auf dasselbe Objekt zeigen
- Experimentelle Sprache, Syntax kann sich noch ändern

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Referential Equality: Pointer/Reference-Vergleich
struct Point {
    int x;
    int y;
};

Point p1 = {1, 2};
Point p2 = {1, 2};
Point* ptr1 = &p1;
Point* ptr2 = &p1;
Point* ptr3 = &p2;

// Pointer-Vergleich (==)
if (ptr1 == ptr2) {
    // true: Beide zeigen auf p1
}
if (ptr1 == ptr3) {
    // false: Zeigen auf verschiedene Objekte
}

// Reference-Vergleich
Point& ref1 = p1;
Point& ref2 = p1;
if (&ref1 == &ref2) {
    // true: Beide sind Alias für p1
}
```

**Besonderheiten:**
- Pointer-Vergleich mit == prüft, ob beide auf dasselbe Objekt zeigen
- Reference-Adressen-Vergleich mit & prüft Identität
- std::addressof() für sichere Adressen-Ermittlung

**Weiterführende Links:**
- [C++ Reference - Equality Operators](https://en.cppreference.com/w/cpp/language/operator_comparison)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Referential Equality: ReferenceEquals oder == für Reference Types
class Point {
    public int x;
    public int y;
    public Point(int x, int y) {
        this.x = x;
        this.y = y;
    }
}

Point p1 = new Point(1, 2);
Point p2 = new Point(1, 2);
Point p3 = p1;

// ReferenceEquals prüft Referenzgleichheit
if (ReferenceEquals(p1, p3)) {
    // true: Beide zeigen auf dasselbe Objekt
}
if (ReferenceEquals(p1, p2)) {
    // false: Verschiedene Objekte
}

// == für Reference Types (kann überladen werden)
if (p1 == p3) {
    // true: Beide zeigen auf dasselbe Objekt
}
```

**Besonderheiten:**
- ReferenceEquals() prüft immer Referenzgleichheit
- == für Reference Types prüft Referenzgleichheit (kann überladen werden)
- == für Value Types prüft strukturelle Gleichheit

**Weiterführende Links:**
- [Microsoft C# Documentation - ReferenceEquals](https://learn.microsoft.com/en-us/dotnet/api/system.object.referenceequals)

</TabItem>
<TabItem value="d" label="D">

```d
// Referential Equality: is Operator
class Point {
    int x;
    int y;
    this(int x, int y) {
        this.x = x;
        this.y = y;
    }
}

Point p1 = new Point(1, 2);
Point p2 = new Point(1, 2);
Point p3 = p1;

// is Operator prüft Referenzgleichheit
if (p1 is p3) {
    // true: Beide zeigen auf dasselbe Objekt
}
if (p1 is p2) {
    // false: Verschiedene Objekte
}
```

**Besonderheiten:**
- is Operator prüft Referenzgleichheit für Reference Types
- == kann überladen werden für strukturelle Gleichheit

**Weiterführende Links:**
- [D Language Specification - Identity](https://dlang.org/spec/expression.html#identity_expressions)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Referential Equality: identical() Funktion
class Point {
  int x;
  int y;
  Point(this.x, this.y);
}

Point p1 = Point(1, 2);
Point p2 = Point(1, 2);
Point p3 = p1;

// identical() prüft Referenzgleichheit
if (identical(p1, p3)) {
  // true: Beide zeigen auf dasselbe Objekt
}
if (identical(p1, p2)) {
  // false: Verschiedene Objekte
}

// == prüft strukturelle Gleichheit (kann überladen werden)
if (p1 == p2) {
  // false: Verschiedene Objekte (wenn == nicht überladen)
}
```

**Besonderheiten:**
- identical() prüft immer Referenzgleichheit
- == kann überladen werden für strukturelle Gleichheit
- Records (seit Dart 3.0) haben strukturelle Gleichheit per Default

**Weiterführende Links:**
- [Dart Documentation - Equality](https://dart.dev/guides/language/effective-dart/equality)

</TabItem>
<TabItem value="go" label="Go">

```go
// Referential Equality: Pointer-Vergleich
type Point struct {
    x int
    y int
}

p1 := Point{x: 1, y: 2}
p2 := Point{x: 1, y: 2}
ptr1 := &p1
ptr2 := &p1
ptr3 := &p2

// Pointer-Vergleich (==)
if ptr1 == ptr2 {
    // true: Beide zeigen auf p1
}
if ptr1 == ptr3 {
    // false: Zeigen auf verschiedene Objekte
}
```

**Besonderheiten:**
- Pointer-Vergleich mit == prüft, ob beide auf dasselbe Objekt zeigen
- Strukturelle Gleichheit muss manuell implementiert werden

**Weiterführende Links:**
- [Go Documentation - Comparison Operators](https://go.dev/ref/spec#Comparison_operators)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Referential Equality: is Operator
class Point {
    int x
    int y
}

def p1 = new Point(x: 1, y: 2)
def p2 = new Point(x: 1, y: 2)
def p3 = p1

// is Operator prüft Referenzgleichheit
if (p1.is(p3)) {
    // true: Beide zeigen auf dasselbe Objekt
}
if (p1.is(p2)) {
    // false: Verschiedene Objekte
}

// == prüft strukturelle Gleichheit (equals())
if (p1 == p2) {
    // true: Strukturell gleich (wenn equals() überschrieben)
}
```

**Besonderheiten:**
- is() prüft Referenzgleichheit
- == prüft strukturelle Gleichheit (equals())
- .is() ist identisch mit Java's == für Objects

**Weiterführende Links:**
- [Groovy Documentation - Operators](https://groovy-lang.org/operators.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Referential Equality: == Operator für Objects
class Point {
    int x;
    int y;
    Point(int x, int y) {
        this.x = x;
        this.y = y;
    }
}

Point p1 = new Point(1, 2);
Point p2 = new Point(1, 2);
Point p3 = p1;

// == prüft Referenzgleichheit für Objects
if (p1 == p3) {
    // true: Beide zeigen auf dasselbe Objekt
}
if (p1 == p2) {
    // false: Verschiedene Objekte
}

// equals() prüft strukturelle Gleichheit
if (p1.equals(p2)) {
    // true: Strukturell gleich (wenn equals() überschrieben)
}
```

**Besonderheiten:**
- == prüft Referenzgleichheit für Objects
- equals() prüft strukturelle Gleichheit
- == für primitive Typen prüft Wertegleichheit

**Weiterführende Links:**
- [Oracle Java Documentation - Equality](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/op2.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Referential Equality: === Operator
const p1 = { x: 1, y: 2 };
const p2 = { x: 1, y: 2 };
const p3 = p1;

// === prüft Referenzgleichheit für Objects
if (p1 === p3) {
    // true: Beide zeigen auf dasselbe Objekt
}
if (p1 === p2) {
    // false: Verschiedene Objekte
}

// == prüft Wertegleichheit mit Type Coercion
if (p1 == p2) {
    // false: Verschiedene Objekte (keine Type Coercion für Objects)
}
```

**Besonderheiten:**
- === prüft Referenzgleichheit für Objects
- == prüft Wertegleichheit mit Type Coercion
- === für primitive Typen prüft Wertegleichheit ohne Coercion

**Weiterführende Links:**
- [MDN Web Docs - Equality Comparisons](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Referential Equality: === Operator
mutable struct Point
    x::Int
    y::Int
end

p1 = Point(1, 2)
p2 = Point(1, 2)
p3 = p1

# === prüft Referenzgleichheit
if p1 === p3
    # true: Beide zeigen auf dasselbe Objekt
end
if p1 === p2
    # false: Verschiedene Objekte
end

# == prüft strukturelle Gleichheit
if p1 == p2
    # true: Strukturell gleich (wenn == überschrieben)
end
```

**Besonderheiten:**
- === prüft Referenzgleichheit (Identität)
- == prüft strukturelle Gleichheit (kann überladen werden)
- === für immutable Types prüft strukturelle Gleichheit

**Weiterführende Links:**
- [Julia Documentation - Equality](https://docs.julialang.org/en/v1/base/base/#Base.:==)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Referential Equality: === Operator
class Point(var x: Int, var y: Int)

val p1 = Point(1, 2)
val p2 = Point(1, 2)
val p3 = p1

// === prüft Referenzgleichheit
if (p1 === p3) {
    // true: Beide zeigen auf dasselbe Objekt
}
if (p1 === p2) {
    // false: Verschiedene Objekte
}

// == prüft strukturelle Gleichheit (equals())
if (p1 == p2) {
    // true: Strukturell gleich (wenn equals() überschrieben)
}
```

**Besonderheiten:**
- === prüft Referenzgleichheit
- == prüft strukturelle Gleichheit (equals())
- Data Classes haben strukturelle Gleichheit per Default

**Weiterführende Links:**
- [Kotlin Documentation - Equality](https://kotlinlang.org/docs/equality.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Referential Equality: is Operator
type Point = ref object
    x: int
    y: int

var p1 = Point(x: 1, y: 2)
var p2 = Point(x: 1, y: 2)
var p3 = p1

# is Operator prüft Referenzgleichheit
if p1 is p3:
    # true: Beide zeigen auf dasselbe Objekt
if p1 is p2:
    # false: Verschiedene Objekte

# == prüft strukturelle Gleichheit
if p1 == p2:
    # true: Strukturell gleich (wenn == überschrieben)
```

**Besonderheiten:**
- is Operator prüft Referenzgleichheit für ref Types
- == prüft strukturelle Gleichheit (kann überladen werden)
- is für Value Types prüft strukturelle Gleichheit

**Weiterführende Links:**
- [Nim Documentation - Equality](https://nim-lang.org/docs/manual.html#procedures-equality-operators)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Referential Equality: == Operator für Pointer
@interface Point : NSObject
@property int x;
@property int y;
@end

Point* p1 = [[Point alloc] init];
p1.x = 1;
p1.y = 2;
Point* p2 = [[Point alloc] init];
p2.x = 1;
p2.y = 2;
Point* p3 = p1;

// == prüft Referenzgleichheit (Pointer-Vergleich)
if (p1 == p3) {
    // true: Beide zeigen auf dasselbe Objekt
}
if (p1 == p2) {
    // false: Verschiedene Objekte
}

// isEqual: prüft strukturelle Gleichheit
if ([p1 isEqual:p2]) {
    // true: Strukturell gleich (wenn isEqual: überschrieben)
}
```

**Besonderheiten:**
- == prüft Referenzgleichheit (Pointer-Vergleich)
- isEqual: prüft strukturelle Gleichheit
- Alle Objects sind Pointer

**Weiterführende Links:**
- [Apple Objective-C Documentation - NSObject](https://developer.apple.com/documentation/objectivec/nsobject)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Referential Equality: == Operator *)
type point = { x : int; y : int }

let p1 = { x = 1; y = 2 }
let p2 = { x = 1; y = 2 }
let p3 = p1

(* == prüft Referenzgleichheit *)
if p1 == p3 then
    (* true: Beide zeigen auf dasselbe Objekt *)
    ()
if p1 == p2 then
    (* false: Verschiedene Objekte *)
    ()

(* = prüft strukturelle Gleichheit *)
if p1 = p2 then
    (* true: Strukturell gleich *)
    ()
```

**Besonderheiten:**
- == prüft Referenzgleichheit (physikalische Gleichheit)
- = prüft strukturelle Gleichheit
- == für immutable Types prüft strukturelle Gleichheit (da identische Werte geteilt werden können)

**Weiterführende Links:**
- [OCaml Documentation - Equality](https://ocaml.org/manual/coreexamples.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Referential Equality: Pointer-Vergleich
Point :: struct {
    x: int,
    y: int,
}

p1 := Point{x = 1, y = 2}
p2 := Point{x = 1, y = 2}
ptr1 := &p1
ptr2 := &p1
ptr3 := &p2

// Pointer-Vergleich (==)
if ptr1 == ptr2 {
    // true: Beide zeigen auf p1
}
if ptr1 == ptr3 {
    // false: Zeigen auf verschiedene Objekte
}
```

**Besonderheiten:**
- Pointer-Vergleich mit == prüft, ob beide auf dasselbe Objekt zeigen
- Strukturelle Gleichheit muss manuell implementiert werden

**Weiterführende Links:**
- [Odin Documentation - Operators](https://odin-lang.org/docs/overview/)

</TabItem>
<TabItem value="python" label="Python">

```python
# Referential Equality: is Operator
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

p1 = Point(1, 2)
p2 = Point(1, 2)
p3 = p1

# is Operator prüft Referenzgleichheit
if p1 is p3:
    # True: Beide zeigen auf dasselbe Objekt
    pass
if p1 is p2:
    # False: Verschiedene Objekte
    pass

# == prüft strukturelle Gleichheit (__eq__)
if p1 == p2:
    # True: Strukturell gleich (wenn __eq__ überschrieben)
    pass
```

**Besonderheiten:**
- is Operator prüft Referenzgleichheit (Identität)
- == prüft strukturelle Gleichheit (__eq__)
- is für primitive Typen kann aufgrund von Interning unerwartete Ergebnisse liefern

**Weiterführende Links:**
- [Python Documentation - Comparisons](https://docs.python.org/3/reference/expressions.html#comparisons)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Referential Equality: equal? Methode
class Point
  attr_accessor :x, :y
  def initialize(x, y)
    @x = x
    @y = y
  end
end

p1 = Point.new(1, 2)
p2 = Point.new(1, 2)
p3 = p1

# equal? prüft Referenzgleichheit
if p1.equal?(p3)
  # true: Beide zeigen auf dasselbe Objekt
end
if p1.equal?(p2)
  # false: Verschiedene Objekte
end

# == prüft strukturelle Gleichheit
if p1 == p2
  # true: Strukturell gleich (wenn == überschrieben)
end
```

**Besonderheiten:**
- equal? prüft Referenzgleichheit (Identität)
- == prüft strukturelle Gleichheit (kann überschrieben werden)
- equal? entspricht Object#equal? und sollte nicht überschrieben werden

**Weiterführende Links:**
- [Ruby Documentation - Object](https://ruby-doc.org/core-3.1.0/Object.html#method-i-equal-3F)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Referential Equality: std::ptr::eq() für Raw Pointers
struct Point {
    x: i32,
    y: i32,
}

let p1 = Point { x: 1, y: 2 };
let p2 = Point { x: 1, y: 2 };
let ref1 = &p1;
let ref2 = &p1;
let ref3 = &p2;

// std::ptr::eq() prüft Referenzgleichheit für Raw Pointers
use std::ptr;
if ptr::eq(ref1, ref2) {
    // true: Beide zeigen auf p1
}
if ptr::eq(ref1, ref3) {
    // false: Zeigen auf verschiedene Objekte
}

// == für References prüft strukturelle Gleichheit
if *ref1 == *ref3 {
    // true: Strukturell gleich (wenn PartialEq implementiert)
}
```

**Besonderheiten:**
- std::ptr::eq() prüft Referenzgleichheit für Raw Pointers
- == für References prüft strukturelle Gleichheit (PartialEq)
- Referenzen können nicht direkt auf Identität verglichen werden (nur über Raw Pointers)

**Weiterführende Links:**
- [Rust Documentation - std::ptr::eq](https://doc.rust-lang.org/std/ptr/fn.eq.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Referential Equality: eq Methode
class Point(var x: Int, var y: Int)

val p1 = new Point(1, 2)
val p2 = new Point(1, 2)
val p3 = p1

// eq prüft Referenzgleichheit
if (p1.eq(p3)) {
    // true: Beide zeigen auf dasselbe Objekt
}
if (p1.eq(p2)) {
    // false: Verschiedene Objekte
}

// == prüft strukturelle Gleichheit (equals())
if (p1 == p2) {
    // true: Strukturell gleich (wenn equals() überschrieben)
}
```

**Besonderheiten:**
- eq prüft Referenzgleichheit
- == prüft strukturelle Gleichheit (equals())
- Case Classes haben strukturelle Gleichheit per Default

**Weiterführende Links:**
- [Scala Documentation - Equality](https://docs.scala-lang.org/tour/unified-types.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Referential Equality: === Operator
class Point {
    var x: Int
    var y: Int
    init(x: Int, y: Int) {
        self.x = x
        self.y = y
    }
}

let p1 = Point(x: 1, y: 2)
let p2 = Point(x: 1, y: 2)
let p3 = p1

// === prüft Referenzgleichheit
if p1 === p3 {
    // true: Beide zeigen auf dasselbe Objekt
}
if p1 === p2 {
    // false: Verschiedene Objekte
}

// == prüft strukturelle Gleichheit (Equatable)
if p1 == p2 {
    // true: Strukturell gleich (wenn Equatable implementiert)
}
```

**Besonderheiten:**
- === prüft Referenzgleichheit (Identität)
- == prüft strukturelle Gleichheit (Equatable)
- === funktioniert nur für Reference Types (Classes)

**Weiterführende Links:**
- [Swift Documentation - Identity Operators](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/advancedoperators/#Identity-Operators)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Referential Equality: === Operator
class Point {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

const p1 = new Point(1, 2);
const p2 = new Point(1, 2);
const p3 = p1;

// === prüft Referenzgleichheit für Objects
if (p1 === p3) {
    // true: Beide zeigen auf dasselbe Objekt
}
if (p1 === p2) {
    // false: Verschiedene Objekte
}

// == prüft Wertegleichheit mit Type Coercion
if (p1 == p2) {
    // false: Verschiedene Objekte (keine Type Coercion für Objects)
}
```

**Besonderheiten:**
- === prüft Referenzgleichheit für Objects (entspricht JavaScript)
- == prüft Wertegleichheit mit Type Coercion
- === für primitive Typen prüft Wertegleichheit ohne Coercion

**Weiterführende Links:**
- [TypeScript Handbook - Basic Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Referential Equality: ReferenceEquals oder Is Operator
Class Point
    Public x As Integer
    Public y As Integer
    Sub New(x As Integer, y As Integer)
        Me.x = x
        Me.y = y
    End Sub
End Class

Dim p1 As New Point(1, 2)
Dim p2 As New Point(1, 2)
Dim p3 As Point = p1

' ReferenceEquals prüft Referenzgleichheit
If ReferenceEquals(p1, p3) Then
    ' True: Beide zeigen auf dasselbe Objekt
End If
If ReferenceEquals(p1, p2) Then
    ' False: Verschiedene Objekte
End If

' Is Operator prüft auch Referenzgleichheit
If p1 Is p3 Then
    ' True: Beide zeigen auf dasselbe Objekt
End If
```

**Besonderheiten:**
- ReferenceEquals() prüft Referenzgleichheit
- Is Operator prüft Referenzgleichheit
- = Operator prüft strukturelle Gleichheit (kann überladen werden)

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Is Operator](https://learn.microsoft.com/en-us/dotnet/visual-basic/language-reference/operators/is-operator)

</TabItem>
<TabItem value="v" label="V">

```v
// Referential Equality: == Operator für References
struct Point {
    x int
    y int
}

mut p1 := Point{x: 1, y: 2}
mut p2 := Point{x: 1, y: 2}
mut ref1 := &p1
mut ref2 := &p1
mut ref3 := &p2

// == prüft Referenzgleichheit für References
if ref1 == ref2 {
    // true: Beide zeigen auf p1
}
if ref1 == ref3 {
    // false: Zeigen auf verschiedene Objekte
}
```

**Besonderheiten:**
- == prüft Referenzgleichheit für References
- Strukturelle Gleichheit muss manuell implementiert werden

**Weiterführende Links:**
- [V Documentation - Operators](https://github.com/vlang/v/blob/master/doc/docs.md#operators)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Referential Equality: Pointer-Vergleich
const Point = struct {
    x: i32,
    y: i32,
};

var p1 = Point{ .x = 1, .y = 2 };
var p2 = Point{ .x = 1, .y = 2 };
const ptr1: *Point = &p1;
const ptr2: *Point = &p1;
const ptr3: *Point = &p2;

// Pointer-Vergleich (==)
if (ptr1 == ptr2) {
    // true: Beide zeigen auf p1
}
if (ptr1 == ptr3) {
    // false: Zeigen auf verschiedene Objekte
}
```

**Besonderheiten:**
- Pointer-Vergleich mit == prüft, ob beide auf dasselbe Objekt zeigen
- Strukturelle Gleichheit muss manuell implementiert werden

**Weiterführende Links:**
- [Zig Documentation - Operators](https://ziglang.org/documentation/0.11.0/#Operators)

</TabItem>
</Tabs>



---

### Structural Equality


Prüft, ob zwei Objekte denselben Inhalt haben (strukturell gleich sind), unabhängig davon, ob sie dasselbe Objekt im Speicher sind.


<Tabs availableTabs={['ada', 'carbon', 'cpp', 'csharp', 'd', 'dart', 'eiffel', 'elm', 'fsharp', 'go', 'groovy', 'haskell', 'java', 'julia', 'koka', 'kotlin', 'lean4', 'mercury', 'nim', 'objective-c', 'ocaml', 'prolog', 'python', 'roc', 'ruby', 'rust', 'scala', 'swift', 'v', 'vbnet']} orangeTabs={['c', 'javascript', 'odin', 'typescript', 'zig']}>
<TabItem value="ada" label="Ada">

```ada
-- Structural Equality: = Operator für Records
type Point is record
    x : Integer;
    y : Integer;
end record;

p1 : Point := (x => 1, y => 2);
p2 : Point := (x => 1, y => 2);
p3 : Point := (x => 3, y => 4);

-- = prüft strukturelle Gleichheit
if p1 = p2 then
    -- true: Strukturell gleich
    null;
end if;
if p1 = p3 then
    -- false: Strukturell unterschiedlich
    null;
end if;
```

**Besonderheiten:**
- = Operator prüft strukturelle Gleichheit für Records
- Automatisch für alle Record-Komponenten
- /= prüft strukturelle Ungleichheit

**Weiterführende Links:**
- [Ada Reference Manual - Equality Operators](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-4-5-2.html)

</TabItem>
<TabItem value="c" label="C">

```c
// Structural Equality: Manuelle Implementierung
struct Point {
    int x;
    int y;
};

struct Point p1 = {1, 2};
struct Point p2 = {1, 2};
struct Point p3 = {3, 4};

// Manuelle Funktion für strukturelle Gleichheit
int point_equal(struct Point a, struct Point b) {
    return a.x == b.x && a.y == b.y;
}

if (point_equal(p1, p2)) {
    // true: Strukturell gleich
}
if (point_equal(p1, p3)) {
    // false: Strukturell unterschiedlich
}
```

**Besonderheiten:**
- Keine eingebaute strukturelle Gleichheit für Structs
- Muss manuell implementiert werden
- == für Structs ist nicht definiert

**Weiterführende Links:**
- [C Standard - Comparison Operators](https://en.cppreference.com/w/c/language/operator_comparison)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Structural Equality: == Operator (wenn implementiert)
struct Point {
    var x: i32;
    var y: i32;
}

var p1: Point = {.x = 1, .y = 2};
var p2: Point = {.x = 1, .y = 2};
var p3: Point = {.x = 3, .y = 4};

// == prüft strukturelle Gleichheit (wenn implementiert)
if (p1 == p2) {
    // true: Strukturell gleich
}
if (p1 == p3) {
    // false: Strukturell unterschiedlich
}
```

**Besonderheiten:**
- == Operator prüft strukturelle Gleichheit (wenn implementiert)
- Experimentelle Sprache, Syntax kann sich noch ändern

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Structural Equality: == Operator (wenn überladen)
struct Point {
    int x;
    int y;
    
    // Überladung von == für strukturelle Gleichheit
    bool operator==(const Point& other) const {
        return x == other.x && y == other.y;
    }
};

Point p1 = {1, 2};
Point p2 = {1, 2};
Point p3 = {3, 4};

// == prüft strukturelle Gleichheit
if (p1 == p2) {
    // true: Strukturell gleich
}
if (p1 == p3) {
    // false: Strukturell unterschiedlich
}
```

**Besonderheiten:**
- == Operator kann überladen werden für strukturelle Gleichheit
- Seit C++20: Default-Vergleich mit operator==() = default
- != kann automatisch aus == generiert werden (seit C++20)

**Weiterführende Links:**
- [C++ Reference - Comparison Operators](https://en.cppreference.com/w/cpp/language/operator_comparison)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Structural Equality: Equals() Methode
struct Point {
    public int x;
    public int y;
    
    public override bool Equals(object obj) {
        if (obj is Point p) {
            return x == p.x && y == p.y;
        }
        return false;
    }
    
    public override int GetHashCode() => HashCode.Combine(x, y);
}

Point p1 = new Point { x = 1, y = 2 };
Point p2 = new Point { x = 1, y = 2 };

// Equals() prüft strukturelle Gleichheit
if (p1.Equals(p2)) {
    // true: Strukturell gleich
}

// Records haben automatische strukturelle Gleichheit (seit C# 9.0)
record PointRecord(int X, int Y);
var r1 = new PointRecord(1, 2);
var r2 = new PointRecord(1, 2);
if (r1 == r2) {
    // true: Records verwenden strukturelle Gleichheit für ==
}
```

**Besonderheiten:**
- Equals() prüft strukturelle Gleichheit (muss für Structs manuell überschrieben werden)
- `==` Operator ist für benutzerdefinierte Structs nicht automatisch definiert (muss explizit überladen werden)
- Records (seit C# 9.0) haben automatische strukturelle Gleichheit für `==`
- GetHashCode() sollte immer zusammen mit Equals() überschrieben werden

**Weiterführende Links:**
- [Microsoft C# Documentation - Equality Operators](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/equality-operators)

</TabItem>
<TabItem value="d" label="D">

```d
// Structural Equality: == Operator (wenn überladen)
struct Point {
    int x;
    int y;
    
    // Überladung von == für strukturelle Gleichheit
    bool opEquals(const Point other) const {
        return x == other.x && y == other.y;
    }
}

Point p1 = Point(1, 2);
Point p2 = Point(1, 2);
Point p3 = Point(3, 4);

// == prüft strukturelle Gleichheit
if (p1 == p2) {
    // true: Strukturell gleich
}
if (p1 == p3) {
    // false: Strukturell unterschiedlich
}
```

**Besonderheiten:**
- == Operator kann überladen werden für strukturelle Gleichheit
- opEquals() muss implementiert werden
- != wird automatisch aus == generiert

**Weiterführende Links:**
- [D Language Specification - Operator Overloading](https://dlang.org/spec/operatoroverloading.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Structural Equality: == Operator (wenn überladen)
class Point {
  int x;
  int y;
  Point(this.x, this.y);
  
  // == für strukturelle Gleichheit
  @override
  bool operator ==(Object other) {
    if (other is! Point) return false;
    return x == other.x && y == other.y;
  }
  
  @override
  int get hashCode => x.hashCode ^ y.hashCode;
}

var p1 = Point(1, 2);
var p2 = Point(1, 2);
var p3 = Point(3, 4);

// == prüft strukturelle Gleichheit
if (p1 == p2) {
  // true: Strukturell gleich
}
if (p1 == p3) {
  // false: Strukturell unterschiedlich
}
```

**Besonderheiten:**
- == Operator kann überladen werden für strukturelle Gleichheit
- hashCode muss auch überschrieben werden
- Records (seit Dart 3.0) haben strukturelle Gleichheit per Default

**Weiterführende Links:**
- [Dart Documentation - Equality](https://dart.dev/guides/language/effective-dart/equality)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
-- Structural Equality: is_equal() Methode
class POINT
feature
    x: INTEGER
    y: INTEGER
    make (a_x, a_y: INTEGER)
        do
            x := a_x
            y := a_y
        end
    
    -- is_equal() für strukturelle Gleichheit
    is_equal (other: like Current): BOOLEAN
        do
            Result := x = other.x and then y = other.y
        end
end

p1: POINT
p2: POINT
p3: POINT
create p1.make(1, 2)
create p2.make(1, 2)
create p3.make(3, 4)

-- is_equal() prüft strukturelle Gleichheit
if p1.is_equal(p2) then
    -- true: Strukturell gleich
end
```

**Besonderheiten:**
- is_equal() prüft strukturelle Gleichheit
- Muss überschrieben werden für benutzerdefinierte Typen
- = Operator verwendet is_equal()

**Weiterführende Links:**
- [Eiffel Documentation - Equality](https://www.eiffel.org/doc/eiffel/Language)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Structural Equality: = Operator (automatisch für Records)
type Point = { x: int; y: int }

let p1 = { x = 1; y = 2 }
let p2 = { x = 1; y = 2 }
let p3 = { x = 3; y = 4 }

// = prüft strukturelle Gleichheit
if p1 = p2 then
    // true: Strukturell gleich
    ()
if p1 = p3 then
    // false: Strukturell unterschiedlich
    ()
```

**Besonderheiten:**
- `=` Operator prüft strukturelle Gleichheit (automatisch für Records)
- `<>` prüft strukturelle Ungleichheit
- Automatisch für alle Record-Komponenten

**Weiterführende Links:**
- [F# Documentation - Equality](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/symbol-and-operator-reference/)

</TabItem>
<TabItem value="go" label="Go">

```go
// Structural Equality: == Operator (für vergleichbare Typen)
type Point struct {
    x int
    y int
}

p1 := Point{x: 1, y: 2}
p2 := Point{x: 1, y: 2}
p3 := Point{x: 3, y: 4}

// == prüft strukturelle Gleichheit (für vergleichbare Felder)
if p1 == p2 {
    // true: Strukturell gleich
}
if p1 == p3 {
    // false: Strukturell unterschiedlich
}
```

**Besonderheiten:**
- == Operator prüft strukturelle Gleichheit für Structs mit vergleichbaren Feldern
- Funktioniert nur wenn alle Felder vergleichbar sind
- != prüft strukturelle Ungleichheit

**Weiterführende Links:**
- [Go Documentation - Comparison Operators](https://go.dev/ref/spec#Comparison_operators)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Structural Equality: equals() Methode oder == Operator
class Point {
    int x
    int y
    
    // equals() für strukturelle Gleichheit
    @Override
    boolean equals(Object other) {
        if (other instanceof Point) {
            return x == other.x && y == other.y
        }
        return false
    }
    
    @Override
    int hashCode() {
        return x.hashCode() ^ y.hashCode()
    }
}

def p1 = new Point(x: 1, y: 2)
def p2 = new Point(x: 1, y: 2)
def p3 = new Point(x: 3, y: 4)

// == prüft strukturelle Gleichheit (verwendet equals())
if (p1 == p2) {
    // true: Strukturell gleich
}
if (p1 == p3) {
    // false: Strukturell unterschiedlich
}
```

**Besonderheiten:**
- == Operator prüft strukturelle Gleichheit (verwendet equals())
- equals() muss überschrieben werden
- hashCode() muss auch überschrieben werden

**Weiterführende Links:**
- [Groovy Documentation - Operators](https://groovy-lang.org/operators.html)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Structural Equality: == Operator (automatisch mit Eq Typeclass)
data Point = Point { x :: Int, y :: Int }
    deriving (Eq)

p1 :: Point
p1 = Point { x = 1, y = 2 }
p2 :: Point
p2 = Point { x = 1, y = 2 }
p3 :: Point
p3 = Point { x = 3, y = 4 }

-- == prüft strukturelle Gleichheit
if p1 == p2 then
    -- True: Strukturell gleich
    True
else
    False
```

**Besonderheiten:**
- == Operator prüft strukturelle Gleichheit (Eq Typeclass)
- Automatisch mit deriving (Eq)
- /= prüft strukturelle Ungleichheit

**Weiterführende Links:**
- [Haskell Documentation - Eq Typeclass](https://hackage.haskell.org/package/base/docs/Prelude.html#t:Eq)

</TabItem>
<TabItem value="java" label="Java">

```java
// Structural Equality: equals() Methode
class Point {
    int x;
    int y;
    Point(int x, int y) {
        this.x = x;
        this.y = y;
    }
    
    // equals() für strukturelle Gleichheit
    @Override
    public boolean equals(Object obj) {
        if (obj instanceof Point) {
            Point other = (Point) obj;
            return x == other.x && y == other.y;
        }
        return false;
    }
    
    @Override
    public int hashCode() {
        return Objects.hash(x, y);
    }
}

Point p1 = new Point(1, 2);
Point p2 = new Point(1, 2);
Point p3 = new Point(3, 4);

// equals() prüft strukturelle Gleichheit
if (p1.equals(p2)) {
    // true: Strukturell gleich
}
if (p1.equals(p3)) {
    // false: Strukturell unterschiedlich
}
```

**Besonderheiten:**
- equals() prüft strukturelle Gleichheit
- hashCode() muss auch überschrieben werden
- Records (seit Java 14) haben strukturelle Gleichheit per Default

**Weiterführende Links:**
- [Oracle Java Documentation - equals](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#equals-java.lang.Object-)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Structural Equality: Manuelle Implementierung oder Bibliotheken
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    
    // equals() für strukturelle Gleichheit
    equals(other) {
        if (other instanceof Point) {
            return this.x === other.x && this.y === other.y;
        }
        return false;
    }
}

const p1 = new Point(1, 2);
const p2 = new Point(1, 2);
const p3 = new Point(3, 4);

// equals() prüft strukturelle Gleichheit
if (p1.equals(p2)) {
    // true: Strukturell gleich
}
if (p1.equals(p3)) {
    // false: Strukturell unterschiedlich
}

// === prüft Referenzgleichheit, nicht strukturelle Gleichheit
if (p1 === p2) {
    // false: Verschiedene Objekte
}
```

**Besonderheiten:**
- Keine eingebaute strukturelle Gleichheit für Objects
- Muss manuell implementiert werden
- === prüft Referenzgleichheit, nicht strukturelle Gleichheit

**Weiterführende Links:**
- [MDN Web Docs - Equality Comparisons](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Structural Equality: == Operator (kann überladen werden)
struct Point
    x::Int
    y::Int
end

# == für strukturelle Gleichheit (automatisch für Structs)
function Base.:(==)(a::Point, b::Point)
    return a.x == b.x && a.y == b.y
end

p1 = Point(1, 2)
p2 = Point(1, 2)
p3 = Point(3, 4)

# == prüft strukturelle Gleichheit
if p1 == p2
    # true: Strukturell gleich
end
if p1 == p3
    # false: Strukturell unterschiedlich
end
```

**Besonderheiten:**
- == Operator prüft strukturelle Gleichheit (kann überladen werden)
- Automatisch für Structs mit vergleichbaren Feldern
- === prüft Referenzgleichheit (Identität)

**Weiterführende Links:**
- [Julia Documentation - Equality](https://docs.julialang.org/en/v1/base/base/#Base.:==)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Structural Equality: == Operator
struct point
  x: int
  y: int

val p1 = Point(1, 2)
val p2 = Point(1, 2)
val p3 = Point(3, 4)

// == prüft strukturelle Gleichheit
val eq1 = p1 == p2  // True: strukturell gleich
val eq2 = p1 == p3  // False: strukturell unterschiedlich
```

**Besonderheiten:**
- `==` prüft strukturelle Gleichheit
- Automatisch für alle Typen mit vergleichbaren Feldern generiert
- Keine Referenzgleichheit (Koka hat keine Objekt-Identität)
- Alle Werte sind immutable, daher ist strukturelle Gleichheit die einzige relevante Gleichheit

**Weiterführende Links:**
- [Koka Standard Library - Equality](https://koka-lang.github.io/koka/doc/std_core_types.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Structural Equality: equals() Methode oder == Operator
class Point(var x: Int, var y: Int) {
    // equals() für strukturelle Gleichheit
    override fun equals(other: Any?): Boolean {
        if (other !is Point) return false
        return x == other.x && y == other.y
    }
    
    override fun hashCode(): Int {
        return x.hashCode() xor y.hashCode()
    }
}

val p1 = Point(1, 2)
val p2 = Point(1, 2)
val p3 = Point(3, 4)

// == prüft strukturelle Gleichheit (verwendet equals())
if (p1 == p2) {
    // true: Strukturell gleich
}
if (p1 == p3) {
    // false: Strukturell unterschiedlich
}
```

**Besonderheiten:**
- == Operator prüft strukturelle Gleichheit (verwendet equals())
- equals() muss überschrieben werden
- Data Classes haben strukturelle Gleichheit per Default

**Weiterführende Links:**
- [Kotlin Documentation - Equality](https://kotlinlang.org/docs/equality.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Structural Equality: BEq Type Class und == Operator
structure Point where
  x : Int
  y : Int
  deriving BEq

def p1 : Point := { x := 1, y := 2 }
def p2 : Point := { x := 1, y := 2 }
def p3 : Point := { x := 3, y := 4 }

-- == prüft strukturelle Gleichheit
#eval p1 == p2  -- true
#eval p1 == p3  -- false

-- Propositionale Gleichheit im Typsystem
example : 2 + 3 = 5 := rfl
```

**Besonderheiten:**
- `BEq` Type Class für `==` Operator (boolesche Gleichheit)
- `deriving BEq` für automatische Gleichheitsimplementierung
- Propositionale Gleichheit `=` im Typsystem (beweisbar mit `rfl`)
- `DecidableEq` für entscheidbare Gleichheit
- Keine Referenzgleichheit (kein `===`)

**Weiterführende Links:**
- [Lean 4 Documentation - Type Classes](https://lean-lang.org/theorem_proving_in_lean4/type_classes.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```mercury
% Structural Equality: Unifikation (=) prüft strukturelle Gleichheit
:- type point
    --->    point(x :: int, y :: int).

:- pred main(io::di, io::uo) is det.
main(!IO) :-
    P1 = point(1, 2),
    P2 = point(1, 2),
    P3 = point(3, 4),

    % Unifikation (=) prüft strukturelle Gleichheit
    ( if P1 = P2 then
        io.write_string("P1 == P2: true\n", !IO)
    else
        io.write_string("P1 == P2: false\n", !IO)
    ),
    ( if P1 = P3 then
        io.write_string("P1 == P3: true\n", !IO)
    else
        io.write_string("P1 == P3: false\n", !IO)
    ).
```

**Besonderheiten:**
- Unifikation (`=`) prüft strukturelle Gleichheit (nicht Referenzgleichheit).
- Es gibt keine Referenzgleichheit, da alle Typen Value Types sind.
- Für benutzerdefinierte Typen wird Gleichheit automatisch basierend auf der Struktur bestimmt.
- Die `comparison`-Type-Class ermöglicht Vergleichsoperationen (`<`, `>`, `=<`, `>=`).

**Weiterführende Links:**
- [The Mercury Language Reference Manual - Comparison](https://www.mercurylang.org/documentation/reference.html#Comparison)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Structural Equality: == Operator (kann überladen werden)
type Point = object
    x: int
    y: int

# == für strukturelle Gleichheit
proc `==`(a, b: Point): bool =
    return a.x == b.x and a.y == b.y

var p1 = Point(x: 1, y: 2)
var p2 = Point(x: 1, y: 2)
var p3 = Point(x: 3, y: 4)

# == prüft strukturelle Gleichheit
if p1 == p2:
    # true: Strukturell gleich
    discard
if p1 == p3:
    # false: Strukturell unterschiedlich
    discard
```

**Besonderheiten:**
- == Operator prüft strukturelle Gleichheit (kann überladen werden)
- Automatisch für Value Types mit vergleichbaren Feldern
- != wird automatisch aus == generiert

**Weiterführende Links:**
- [Nim Documentation - Equality Operators](https://nim-lang.org/docs/manual.html#procedures-equality-operators)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Structural Equality: isEqual: Methode
@interface Point : NSObject
@property int x;
@property int y;
@end

@implementation Point
// isEqual: für strukturelle Gleichheit
- (BOOL)isEqual:(id)object {
    if (self == object) return YES;
    if (![object isKindOfClass:[Point class]]) return NO;
    Point *other = (Point *)object;
    return self.x == other.x && self.y == other.y;
}

- (NSUInteger)hash {
    return self.x ^ self.y;
}
@end

Point* p1 = [[Point alloc] init];
p1.x = 1;
p1.y = 2;
Point* p2 = [[Point alloc] init];
p2.x = 1;
p2.y = 2;

// isEqual: prüft strukturelle Gleichheit
if ([p1 isEqual:p2]) {
    // true: Strukturell gleich
}
```

**Besonderheiten:**
- isEqual: prüft strukturelle Gleichheit
- hash muss auch überschrieben werden
- == prüft Referenzgleichheit (Pointer-Vergleich)

**Weiterführende Links:**
- [Apple Objective-C Documentation - NSObject](https://developer.apple.com/documentation/objectivec/nsobject)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Structural Equality: = Operator (automatisch für Records) *)
type point = { x : int; y : int }

let p1 = { x = 1; y = 2 }
let p2 = { x = 1; y = 2 }
let p3 = { x = 3; y = 4 }

(* = prüft strukturelle Gleichheit *)
if p1 = p2 then
    (* true: Strukturell gleich *)
    ()
if p1 = p3 then
    (* false: Strukturell unterschiedlich *)
    ()
```

**Besonderheiten:**
- `=` Operator prüft strukturelle Gleichheit (automatisch für Records)
- `<>` prüft strukturelle Ungleichheit
- `==` prüft Referenzgleichheit (physikalische Gleichheit)

**Weiterführende Links:**
- [OCaml Documentation - Equality](https://ocaml.org/manual/coreexamples.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Structural Equality: Manuelle Implementierung
Point :: struct {
    x: int,
    y: int,
}

point_equal :: proc(a, b: Point) -> bool {
    return a.x == b.x && a.y == b.y
}

p1 := Point{x = 1, y = 2}
p2 := Point{x = 1, y = 2}
p3 := Point{x = 3, y = 4}

// Manuelle Funktion für strukturelle Gleichheit
if point_equal(p1, p2) {
    // true: Strukturell gleich
}
if point_equal(p1, p3) {
    // false: Strukturell unterschiedlich
}
```

**Besonderheiten:**
- Keine eingebaute strukturelle Gleichheit für Structs
- Muss manuell implementiert werden
- == für Structs ist nicht definiert

**Weiterführende Links:**
- [Odin Documentation - Operators](https://odin-lang.org/docs/overview/)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Structural Equality: ==/2 Operator
% Prüft, ob zwei Terme strukturell identisch sind (ohne Unifikation).

% Einfache Terme
% ?- 42 == 42.
% true.
% ?- hello == hello.
% true.
% ?- hello == world.
% false.

% Komplexe Terme (Strukturen)
% ?- point(1, 2) == point(1, 2).
% true.
% ?- point(1, 2) == point(3, 4).
% false.

% Unterschied zu Unifikation (=)
% ?- X == Y.
% false.   (X und Y sind verschiedene ungebundene Variablen)
% ?- X = Y.
% true.    (Unifikation bindet X an Y)

% Listen
% ?- [1, 2, 3] == [1, 2, 3].
% true.
% ?- [1, 2, 3] == [1, 2, 4].
% false.
```

**Besonderheiten:**
- `==/2` prüft strukturelle Gleichheit ohne Unifikation (Variablen werden nicht gebunden)
- `=/2` (Unifikation) versucht, Terme durch Variablenbindung gleich zu machen
- `\==/2` prüft strukturelle Ungleichheit
- Strukturelle Gleichheit erfordert exakte Übereinstimmung von Funktor, Stelligkeit und allen Argumenten

**Weiterführende Links:**
- [SWI-Prolog - Comparison and Unification of Terms](https://www.swi-prolog.org/pldoc/man?section=compare)

</TabItem>
<TabItem value="python" label="Python">

```python
# Structural Equality: __eq__() Methode oder == Operator
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    # __eq__() für strukturelle Gleichheit
    def __eq__(self, other):
        if isinstance(other, Point):
            return self.x == other.x and self.y == other.y
        return False
    
    def __hash__(self):
        return hash((self.x, self.y))

p1 = Point(1, 2)
p2 = Point(1, 2)
p3 = Point(3, 4)

# == prüft strukturelle Gleichheit (verwendet __eq__())
if p1 == p2:
    # True: Strukturell gleich
    pass
if p1 == p3:
    # False: Strukturell unterschiedlich
    pass
```

**Besonderheiten:**
- == Operator prüft strukturelle Gleichheit (verwendet __eq__())
- __eq__() muss überschrieben werden
- __hash__() muss auch überschrieben werden, wenn Objekte in Sets/Dicts verwendet werden

**Weiterführende Links:**
- [Python Documentation - Comparisons](https://docs.python.org/3/reference/expressions.html#comparisons)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Structural Equality: == Methode
class Point
  attr_accessor :x, :y
  def initialize(x, y)
    @x = x
    @y = y
  end
  
  # == für strukturelle Gleichheit
  def ==(other)
    if other.is_a?(Point)
      return @x == other.x && @y == other.y
    end
    false
  end
end

p1 = Point.new(1, 2)
p2 = Point.new(1, 2)
p3 = Point.new(3, 4)

# == prüft strukturelle Gleichheit
if p1 == p2
  # true: Strukturell gleich
end
if p1 == p3
  # false: Strukturell unterschiedlich
end
```

**Besonderheiten:**
- == Methode prüft strukturelle Gleichheit
- Muss überschrieben werden für benutzerdefinierte Typen
- equal? prüft Referenzgleichheit (Identität)

**Weiterführende Links:**
- [Ruby Documentation - Object](https://ruby-doc.org/core-3.1.0/Object.html#method-i-3D-3D)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Structural Equality: PartialEq Trait
#[derive(PartialEq)]
struct Point {
    x: i32,
    y: i32,
}

let p1 = Point { x: 1, y: 2 };
let p2 = Point { x: 1, y: 2 };
let p3 = Point { x: 3, y: 4 };

// == prüft strukturelle Gleichheit
if p1 == p2 {
    // true: Strukturell gleich
}
if p1 == p3 {
    // false: Strukturell unterschiedlich
}
```

**Besonderheiten:**
- PartialEq Trait ermöglicht strukturelle Gleichheit
- Automatisch mit #[derive(PartialEq)]
- != wird automatisch aus == generiert

**Weiterführende Links:**
- [The Rust Book - Derived Traits](https://doc.rust-lang.org/book/appendix-03-derivable-traits.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Structural Equality: equals() Methode oder == Operator
class Point(var x: Int, var y: Int) {
    // equals() für strukturelle Gleichheit
    override def equals(obj: Any): Boolean = {
        obj match {
            case p: Point => x == p.x && y == p.y
            case _ => false
        }
    }
    
    override def hashCode(): Int = {
        x.hashCode() ^ y.hashCode()
    }
}

val p1 = new Point(1, 2)
val p2 = new Point(1, 2)
val p3 = new Point(3, 4)

// == prüft strukturelle Gleichheit (verwendet equals())
if (p1 == p2) {
    // true: Strukturell gleich
}
if (p1 == p3) {
    // false: Strukturell unterschiedlich
}
```

**Besonderheiten:**
- == Operator prüft strukturelle Gleichheit (verwendet equals())
- equals() muss überschrieben werden
- Case Classes haben strukturelle Gleichheit per Default

**Weiterführende Links:**
- [Scala Documentation - Equality](https://docs.scala-lang.org/tour/unified-types.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Structural Equality: Equatable Protocol
struct Point: Equatable {
    var x: Int
    var y: Int
    
    // Automatisch mit Equatable (wenn alle Felder Equatable sind)
    // oder manuell:
    static func == (lhs: Point, rhs: Point) -> Bool {
        return lhs.x == rhs.x && lhs.y == rhs.y
    }
}

let p1 = Point(x: 1, y: 2)
let p2 = Point(x: 1, y: 2)
let p3 = Point(x: 3, y: 4)

// == prüft strukturelle Gleichheit
if p1 == p2 {
    // true: Strukturell gleich
}
if p1 == p3 {
    // false: Strukturell unterschiedlich
}
```

**Besonderheiten:**
- Equatable Protocol ermöglicht strukturelle Gleichheit
- Automatisch wenn alle Felder Equatable sind
- != wird automatisch aus == generiert

**Weiterführende Links:**
- [Swift Documentation - Equatable](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/protocols/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Structural Equality: Manuelle Implementierung
class Point {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    
    // equals() für strukturelle Gleichheit
    equals(other: Point): boolean {
        return this.x === other.x && this.y === other.y;
    }
}

const p1 = new Point(1, 2);
const p2 = new Point(1, 2);
const p3 = new Point(3, 4);

// equals() prüft strukturelle Gleichheit
if (p1.equals(p2)) {
    // true: Strukturell gleich
}
if (p1.equals(p3)) {
    // false: Strukturell unterschiedlich
}

// === prüft Referenzgleichheit, nicht strukturelle Gleichheit
if (p1 === p2) {
    // false: Verschiedene Objekte
}
```

**Besonderheiten:**
- Keine eingebaute strukturelle Gleichheit für Objects
- Muss manuell implementiert werden
- === prüft Referenzgleichheit, nicht strukturelle Gleichheit

**Weiterführende Links:**
- [TypeScript Handbook - Basic Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Structural Equality: Equals() Methode oder = Operator
Class Point
    Public x As Integer
    Public y As Integer
    Sub New(x As Integer, y As Integer)
        Me.x = x
        Me.y = y
    End Sub
    
    ' Equals() für strukturelle Gleichheit
    Public Overrides Function Equals(obj As Object) As Boolean
        If TypeOf obj Is Point Then
            Dim other As Point = DirectCast(obj, Point)
            Return x = other.x AndAlso y = other.y
        End If
        Return False
    End Function
    
    Public Overrides Function GetHashCode() As Integer
        Return x.GetHashCode() Xor y.GetHashCode()
    End Function
End Class

Dim p1 As New Point(1, 2)
Dim p2 As New Point(1, 2)
Dim p3 As New Point(3, 4)

' Equals() prüft strukturelle Gleichheit
If p1.Equals(p2) Then
    ' True: Strukturell gleich
End If
```

**Besonderheiten:**
- Equals() prüft strukturelle Gleichheit
- GetHashCode() muss auch überschrieben werden
- = Operator verwendet Equals() für Objects

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Equals](https://learn.microsoft.com/en-us/dotnet/api/system.object.equals)

</TabItem>
<TabItem value="v" label="V">

```v
// Structural Equality: == Operator (für vergleichbare Typen)
struct Point {
    x int
    y int
}

p1 := Point{x: 1, y: 2}
p2 := Point{x: 1, y: 2}
p3 := Point{x: 3, y: 4}

// == prüft strukturelle Gleichheit (für vergleichbare Felder)
if p1 == p2 {
    // true: Strukturell gleich
}
if p1 == p3 {
    // false: Strukturell unterschiedlich
}
```

**Besonderheiten:**
- == Operator prüft strukturelle Gleichheit für Structs mit vergleichbaren Feldern
- Funktioniert nur wenn alle Felder vergleichbar sind
- != prüft strukturelle Ungleichheit

**Weiterführende Links:**
- [V Documentation - Operators](https://github.com/vlang/v/blob/master/doc/docs.md#operators)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Structural Equality: Manuelle Implementierung
const Point = struct {
    x: i32,
    y: i32,
    
    // equals() für strukturelle Gleichheit
    pub fn equals(self: Point, other: Point) bool {
        return self.x == other.x and self.y == other.y;
    }
};

const p1 = Point{ .x = 1, .y = 2 };
const p2 = Point{ .x = 1, .y = 2 };
const p3 = Point{ .x = 3, .y = 4 };

// Manuelle Funktion für strukturelle Gleichheit
if (p1.equals(p2)) {
    // true: Strukturell gleich
}
if (p1.equals(p3)) {
    // false: Strukturell unterschiedlich
}
```

**Besonderheiten:**
- Keine eingebaute strukturelle Gleichheit für Structs
- Muss manuell implementiert werden
- == für Structs ist nicht definiert

**Weiterführende Links:**
- [Zig Documentation - Operators](https://ziglang.org/documentation/0.11.0/#Operators)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Strukturelle Gleichheit
list1 = [1, 2, 3]
list2 = [1, 2, 3]

result = list1 == list2  -- True (strukturelle Gleichheit)

-- Records
p1 = { x = 1, y = 2 }
p2 = { x = 1, y = 2 }

equal = p1 == p2  -- True
```

**Besonderheiten:**
- `==` vergleicht immer strukturell (Wertvergleich)
- Keine referenzielle Gleichheit verfügbar
- Funktioniert mit allen Typen außer Funktionen
- Alle Werte sind immutable, daher ist strukturelle Gleichheit die einzig sinnvolle Vergleichsart

**Weiterführende Links:**
- [Elm Documentation - Operators](https://package.elm-lang.org/packages/elm/core/latest/Basics)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Structural Equality
p1 = { x: 1, y: 2 }
p2 = { x: 1, y: 2 }

result = p1 == p2
```

**Besonderheiten:**
- `==` vergleicht strukturell (Wertgleichheit)
- Keine referenzielle Gleichheit
- Funktioniert automatisch für alle Typen, die `Eq` implementieren

**Weiterführende Links:**
- [Roc Documentation](https://www.roc-lang.org/tutorial)

</TabItem>
</Tabs>



---

### Identity and Equality Operators


Verschiedene Operatoren und Methoden zur Prüfung von Identität (Referenzgleichheit) und Gleichheit (strukturelle Gleichheit) zwischen Objekten.


<Tabs availableTabs={['c', 'carbon', 'common-lisp', 'cpp', 'csharp', 'd', 'dart', 'go', 'groovy', 'java', 'javascript', 'julia', 'kotlin', 'mercury', 'nim', 'objective-c', 'ocaml', 'odin', 'prolog', 'python', 'ruby', 'rust', 'scala', 'swift', 'typescript', 'v', 'vbnet', 'zig']}>
<TabItem value="c" label="C">

```c
// Equality Operators: ==, !=
int x = 42;
int y = 42;
int z = 10;

if (x == y) {
    // true: Wertegleichheit
}
if (x != z) {
    // true: Werteungleichheit
}

// Pointer-Vergleich (Identität)
struct Point { int x; int y; };
struct Point p1 = {1, 2};
struct Point* ptr1 = &p1;
struct Point* ptr2 = &p1;

if (ptr1 == ptr2) {
    // true: Beide zeigen auf dasselbe Objekt (Identität)
}
```

**Besonderheiten:**
- == prüft Wertegleichheit für primitive Typen
- == prüft Identität für Pointer (zeigen auf dasselbe Objekt)
- != prüft Ungleichheit

**Weiterführende Links:**
- [C Standard - Equality Operators](https://en.cppreference.com/w/c/language/operator_comparison)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Equality Operators: ==, !=
var x: i32 = 42;
var y: i32 = 42;
var z: i32 = 10;

if (x == y) {
    // true: Wertegleichheit
}
if (x != z) {
    // true: Werteungleichheit
}

// Pointer-Vergleich (Identität)
var p1: Point = {.x = 1, .y = 2};
var ptr1: Point* = &p1;
var ptr2: Point* = &p1;

if (ptr1 == ptr2) {
    // true: Beide zeigen auf dasselbe Objekt (Identität)
}
```

**Besonderheiten:**
- == prüft Wertegleichheit für primitive Typen
- == prüft Identität für Pointer
- Experimentelle Sprache, Syntax kann sich noch ändern

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Equality Operators: ==, !=
int x = 42;
int y = 42;
int z = 10;

if (x == y) {
    // true: Wertegleichheit
}
if (x != z) {
    // true: Werteungleichheit
}

// Pointer-Vergleich (Identität)
Point p1 = {1, 2};
Point* ptr1 = &p1;
Point* ptr2 = &p1;

if (ptr1 == ptr2) {
    // true: Beide zeigen auf dasselbe Objekt (Identität)
}

// Reference-Adressen-Vergleich
Point& ref1 = p1;
Point& ref2 = p1;
if (&ref1 == &ref2) {
    // true: Beide sind Alias für p1 (Identität)
}
```

**Besonderheiten:**
- == prüft Wertegleichheit für primitive Typen
- == kann überladen werden für benutzerdefinierte Typen
- == prüft Identität für Pointer
- &ref prüft Identität für References

**Weiterführende Links:**
- [C++ Reference - Equality Operators](https://en.cppreference.com/w/cpp/language/operator_comparison)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Equality Operators: ==, !=, ReferenceEquals, Equals
int x = 42;
int y = 42;
int z = 10;

if (x == y) {
    // true: Wertegleichheit
}
if (x != z) {
    // true: Werteungleichheit
}

// Reference Types
Point p1 = new Point(1, 2);
Point p2 = new Point(1, 2);
Point p3 = p1;

// == für Reference Types prüft Referenzgleichheit (kann überladen werden)
if (p1 == p3) {
    // true: Referenzgleichheit
}

// ReferenceEquals() prüft immer Referenzgleichheit
if (ReferenceEquals(p1, p3)) {
    // true: Referenzgleichheit
}

// Equals() prüft strukturelle Gleichheit
if (p1.Equals(p2)) {
    // true: Strukturelle Gleichheit
}
```

**Besonderheiten:**
- == prüft Wertegleichheit für Value Types
- == prüft Referenzgleichheit für Reference Types (kann überladen werden)
- ReferenceEquals() prüft immer Referenzgleichheit
- Equals() prüft strukturelle Gleichheit

**Weiterführende Links:**
- [Microsoft C# Documentation - Equality Operators](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/equality-operators)

</TabItem>
<TabItem value="d" label="D">

```d
// Equality Operators: ==, !=, is
int x = 42;
int y = 42;
int z = 10;

if (x == y) {
    // true: Wertegleichheit
}
if (x != z) {
    // true: Werteungleichheit
}

// Reference Types
Point p1 = new Point(1, 2);
Point p2 = new Point(1, 2);
Point p3 = p1;

// is Operator prüft Referenzgleichheit für Reference Types
if (p1 is p3) {
    // true: Referenzgleichheit
}

// == prüft strukturelle Gleichheit (kann überladen werden)
if (p1 == p2) {
    // true: Strukturelle Gleichheit (wenn überladen)
}
```

**Besonderheiten:**
- == prüft Wertegleichheit für primitive Typen
- is prüft Referenzgleichheit für Reference Types
- == prüft strukturelle Gleichheit (kann überladen werden)

**Weiterführende Links:**
- [D Language Specification - Equality Operators](https://dlang.org/spec/expression.html#identity_expressions)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Equality Operators: ==, !=, identical()
int x = 42;
int y = 42;
int z = 10;

if (x == y) {
  // true: Wertegleichheit
}
if (x != z) {
  // true: Werteungleichheit
}

// Reference Types
Point p1 = Point(1, 2);
Point p2 = Point(1, 2);
Point p3 = p1;

// identical() prüft Referenzgleichheit
if (identical(p1, p3)) {
  // true: Referenzgleichheit
}

// == prüft strukturelle Gleichheit (kann überladen werden)
if (p1 == p2) {
  // true: Strukturelle Gleichheit (wenn == überladen)
}
```

**Besonderheiten:**
- == prüft Wertegleichheit für primitive Typen
- identical() prüft Referenzgleichheit
- == prüft strukturelle Gleichheit (kann überladen werden)

**Weiterführende Links:**
- [Dart Documentation - Equality](https://dart.dev/guides/language/effective-dart/equality)

</TabItem>
<TabItem value="go" label="Go">

```go
// Equality Operators: ==, !=
x := 42
y := 42
z := 10

if x == y {
    // true: Wertegleichheit
}
if x != z {
    // true: Werteungleichheit
}

// Pointer-Vergleich (Identität)
p1 := Point{x: 1, y: 2}
ptr1 := &p1
ptr2 := &p1

if ptr1 == ptr2 {
    // true: Beide zeigen auf dasselbe Objekt (Identität)
}

// Struct-Vergleich (strukturelle Gleichheit)
p2 := Point{x: 1, y: 2}
if p1 == p2 {
    // true: Strukturelle Gleichheit (wenn alle Felder vergleichbar)
}
```

**Besonderheiten:**
- == prüft Wertegleichheit für primitive Typen
- == prüft Identität für Pointer
- == prüft strukturelle Gleichheit für Structs (wenn alle Felder vergleichbar)

**Weiterführende Links:**
- [Go Documentation - Comparison Operators](https://go.dev/ref/spec#Comparison_operators)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Equality Operators: ==, !=, is()
int x = 42
int y = 42
int z = 10

if (x == y) {
    // true: Wertegleichheit
}
if (x != z) {
    // true: Werteungleichheit
}

// Reference Types
def p1 = new Point(x: 1, y: 2)
def p2 = new Point(x: 1, y: 2)
def p3 = p1

// is() prüft Referenzgleichheit
if (p1.is(p3)) {
    // true: Referenzgleichheit
}

// == prüft strukturelle Gleichheit (verwendet equals())
if (p1 == p2) {
    // true: Strukturelle Gleichheit (wenn equals() überschrieben)
}
```

**Besonderheiten:**
- == prüft Wertegleichheit für primitive Typen
- is() prüft Referenzgleichheit
- == prüft strukturelle Gleichheit (verwendet equals())

**Weiterführende Links:**
- [Groovy Documentation - Operators](https://groovy-lang.org/operators.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Equality Operators: ==, !=, equals()
int x = 42;
int y = 42;
int z = 10;

if (x == y) {
    // true: Wertegleichheit
}
if (x != z) {
    // true: Werteungleichheit
}

// Reference Types
Point p1 = new Point(1, 2);
Point p2 = new Point(1, 2);
Point p3 = p1;

// == prüft Referenzgleichheit für Objects
if (p1 == p3) {
    // true: Referenzgleichheit
}

// equals() prüft strukturelle Gleichheit
if (p1.equals(p2)) {
    // true: Strukturelle Gleichheit (wenn equals() überschrieben)
}
```

**Besonderheiten:**
- == prüft Wertegleichheit für primitive Typen
- == prüft Referenzgleichheit für Objects
- equals() prüft strukturelle Gleichheit

**Weiterführende Links:**
- [Oracle Java Documentation - Equality](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/op2.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Equality Operators: ==, ===, !=, !==
const x = 42;
const y = 42;
const z = 10;

// == prüft Wertegleichheit mit Type Coercion
if (x == y) {
    // true: Wertegleichheit
}
if (x == "42") {
    // true: Type Coercion (42 == "42")
}

// === prüft Wertegleichheit ohne Type Coercion
if (x === y) {
    // true: Wertegleichheit ohne Coercion
}
if (x === "42") {
    // false: Keine Type Coercion
}

// Reference Types
const p1 = { x: 1, y: 2 };
const p2 = { x: 1, y: 2 };
const p3 = p1;

// === prüft Referenzgleichheit für Objects
if (p1 === p3) {
    // true: Referenzgleichheit
}
if (p1 === p2) {
    // false: Verschiedene Objekte
}
```

**Besonderheiten:**
- == prüft Wertegleichheit mit Type Coercion
- === prüft Wertegleichheit ohne Type Coercion
- === prüft Referenzgleichheit für Objects

**Weiterführende Links:**
- [MDN Web Docs - Equality Comparisons](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Equality Operators: ==, ===, !=, !==
x = 42
y = 42
z = 10

# == prüft strukturelle Gleichheit
if x == y
    # true: Strukturelle Gleichheit
end

# === prüft Referenzgleichheit (Identität)
p1 = Point(1, 2)
p2 = Point(1, 2)
p3 = p1

if p1 === p3
    # true: Referenzgleichheit
end
if p1 === p2
    # false: Verschiedene Objekte
end

# == prüft strukturelle Gleichheit (kann überladen werden)
if p1 == p2
    # true: Strukturelle Gleichheit (wenn == überladen)
end
```

**Besonderheiten:**
- == prüft strukturelle Gleichheit (kann überladen werden)
- === prüft Referenzgleichheit (Identität)
- != und !== prüft Ungleichheit

**Weiterführende Links:**
- [Julia Documentation - Equality](https://docs.julialang.org/en/v1/base/base/#Base.:==)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Equality Operators: ==, ===, !=, !==
val x = 42
val y = 42
val z = 10

// == prüft strukturelle Gleichheit
if (x == y) {
    // true: Strukturelle Gleichheit
}

// Reference Types
val p1 = Point(1, 2)
val p2 = Point(1, 2)
val p3 = p1

// === prüft Referenzgleichheit
if (p1 === p3) {
    // true: Referenzgleichheit
}
if (p1 === p2) {
    // false: Verschiedene Objekte
}

// == prüft strukturelle Gleichheit (verwendet equals())
if (p1 == p2) {
    // true: Strukturelle Gleichheit (wenn equals() überschrieben)
}
```

**Besonderheiten:**
- == prüft strukturelle Gleichheit (verwendet equals())
- === prüft Referenzgleichheit
- != und !== prüft Ungleichheit

**Weiterführende Links:**
- [Kotlin Documentation - Equality](https://kotlinlang.org/docs/equality.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```mercury
% Equality Operators: Unifikation (=) und Vergleich (\=)
:- type point
    --->    point(x :: int, y :: int).

:- pred main(io::di, io::uo) is det.
main(!IO) :-
    X = 42,
    Y = 42,
    P1 = point(1, 2),
    P2 = point(1, 2),
    P3 = point(3, 4),

    % = prüft Gleichheit (Unifikation)
    ( if X = Y then
        io.write_string("X = Y: true\n", !IO)
    else
        io.write_string("X = Y: false\n", !IO)
    ),

    % \= prüft Ungleichheit
    ( if P1 \= P3 then
        io.write_string("P1 \\= P3: true\n", !IO)
    else
        io.write_string("P1 \\= P3: false\n", !IO)
    ),

    % Vergleich mit compare/3
    compare(Result, P1, P2),
    io.write_string("compare(P1, P2) = ", !IO),
    io.write(Result, !IO), io.nl(!IO).
```

**Besonderheiten:**
- `=` prüft strukturelle Gleichheit (Unifikation), keine Referenzgleichheit.
- `\=` prüft Ungleichheit.
- `compare/3` liefert `(<)`, `(=)` oder `(>)` für Ordnungsvergleiche.
- Es gibt keine Referenzgleichheit, da alle Werte Value Types sind.
- Gleichheit wird automatisch für alle Typen basierend auf ihrer Struktur definiert.

**Weiterführende Links:**
- [The Mercury Language Reference Manual - Comparison](https://www.mercurylang.org/documentation/reference.html#Comparison)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Equality Operators: ==, !=, is
var x = 42
var y = 42
var z = 10

# == prüft strukturelle Gleichheit
if x == y:
    # true: Strukturelle Gleichheit
    discard

# Reference Types
var p1 = PointRef(x: 1, y: 2)
var p2 = PointRef(x: 1, y: 2)
var p3 = p1

# is Operator prüft Referenzgleichheit für ref Types
if p1 is p3:
    # true: Referenzgleichheit
    discard
if p1 is p2:
    # false: Verschiedene Objekte
    discard

# == prüft strukturelle Gleichheit (kann überladen werden)
if p1 == p2:
    # true: Strukturelle Gleichheit (wenn == überladen)
    discard
```

**Besonderheiten:**
- == prüft strukturelle Gleichheit (kann überladen werden)
- is prüft Referenzgleichheit für ref Types
- != prüft strukturelle Ungleichheit

**Weiterführende Links:**
- [Nim Documentation - Equality Operators](https://nim-lang.org/docs/manual.html#procedures-equality-operators)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Equality Operators: ==, !=, isEqual:
int x = 42;
int y = 42;
int z = 10;

if (x == y) {
    // true: Wertegleichheit
}
if (x != z) {
    // true: Werteungleichheit
}

// Reference Types
Point* p1 = [[Point alloc] init];
p1.x = 1;
p1.y = 2;
Point* p2 = [[Point alloc] init];
p2.x = 1;
p2.y = 2;
Point* p3 = p1;

// == prüft Referenzgleichheit (Pointer-Vergleich)
if (p1 == p3) {
    // true: Referenzgleichheit
}

// isEqual: prüft strukturelle Gleichheit
if ([p1 isEqual:p2]) {
    // true: Strukturelle Gleichheit (wenn isEqual: überschrieben)
}
```

**Besonderheiten:**
- == prüft Wertegleichheit für primitive Typen
- == prüft Referenzgleichheit für Objects (Pointer-Vergleich)
- isEqual: prüft strukturelle Gleichheit

**Weiterführende Links:**
- [Apple Objective-C Documentation - NSObject](https://developer.apple.com/documentation/objectivec/nsobject)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Equality Operators: =, ==, !=, <> *)
let x = 42
let y = 42
let z = 10

(* = prüft strukturelle Gleichheit *)
if x = y then
    (* true: Strukturelle Gleichheit *)
    ()

(* == prüft Referenzgleichheit (physikalische Gleichheit) *)
let p1 = { x = 1; y = 2 }
let p2 = { x = 1; y = 2 }
let p3 = p1

if p1 == p3 then
    (* true: Referenzgleichheit *)
    ()
if p1 == p2 then
    (* false: Verschiedene Objekte *)
    ()

(* = prüft strukturelle Gleichheit *)
if p1 = p2 then
    (* true: Strukturelle Gleichheit *)
    ()
```

**Besonderheiten:**
- `=` prüft strukturelle Gleichheit
- `==` prüft Referenzgleichheit (physikalische Gleichheit)
- `!=` und `<>` prüft Ungleichheit

**Weiterführende Links:**
- [OCaml Documentation - Equality](https://ocaml.org/manual/coreexamples.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Equality Operators: ==, !=
x := 42
y := 42
z := 10

if x == y {
    // true: Wertegleichheit
}
if x != z {
    // true: Werteungleichheit
}

// Pointer-Vergleich (Identität)
p1 := Point{x = 1, y = 2}
ptr1 := &p1
ptr2 := &p1

if ptr1 == ptr2 {
    // true: Beide zeigen auf dasselbe Objekt (Identität)
}
```

**Besonderheiten:**
- == prüft Wertegleichheit für primitive Typen
- == prüft Identität für Pointer
- != prüft Ungleichheit

**Weiterführende Links:**
- [Odin Documentation - Operators](https://odin-lang.org/docs/overview/)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Equality and Identity Operators
% Prolog unterscheidet zwischen Unifikation, struktureller Gleichheit
% und arithmetischer Gleichheit.

% Unifikation: =/2
% ?- X = 42.        % X wird an 42 gebunden
% ?- f(X) = f(42).  % X wird an 42 gebunden
% ?- f(1) = f(2).   % false (nicht unifizierbar)

% Nicht-Unifikation: \=/2
% ?- f(1) \= f(2).  % true

% Strukturelle Gleichheit: ==/2 (ohne Variablenbindung)
% ?- 42 == 42.      % true
% ?- X == Y.        % false (verschiedene Variablen)
% ?- X = Y, X == Y. % true (nach Unifikation gleich)

% Strukturelle Ungleichheit: \==/2
% ?- 42 \== 43.     % true

% Arithmetische Gleichheit: =:=/2
% ?- 2 + 3 =:= 5.  % true (wertet beide Seiten aus)
% ?- 2 + 3 == 5.    % false (strukturell verschieden)

% Arithmetische Ungleichheit: =\=/2
% ?- 2 + 3 =\= 6.  % true

% Term-Ordnung: @</2, @>/2, @=</2, @>=/2
% ?- a @< b.        % true (alphabetische Ordnung)
```

**Besonderheiten:**
- `=/2` (Unifikation) versucht, Terme durch Variablenbindung gleich zu machen
- `==/2` prüft strukturelle Gleichheit ohne Variablenbindung
- `=:=/2` wertet beide Seiten arithmetisch aus und vergleicht die Ergebnisse
- `\=/2`, `\==/2`, `=\=/2` sind die jeweiligen Negationen
- `@</2` etc. vergleichen Terme nach der Standard-Termordnung

**Weiterführende Links:**
- [SWI-Prolog - Comparison and Unification of Terms](https://www.swi-prolog.org/pldoc/man?section=compare)

</TabItem>
<TabItem value="python" label="Python">

```python
# Equality Operators: ==, !=, is, is not
x = 42
y = 42
z = 10

# == prüft strukturelle Gleichheit
if x == y:
    # True: Strukturelle Gleichheit
    pass

# Reference Types
p1 = Point(1, 2)
p2 = Point(1, 2)
p3 = p1

# is Operator prüft Referenzgleichheit (Identität)
if p1 is p3:
    # True: Referenzgleichheit
    pass
if p1 is p2:
    # False: Verschiedene Objekte
    pass

# == prüft strukturelle Gleichheit (verwendet __eq__())
if p1 == p2:
    # True: Strukturelle Gleichheit (wenn __eq__() überschrieben)
    pass
```

**Besonderheiten:**
- == prüft strukturelle Gleichheit (verwendet __eq__())
- is prüft Referenzgleichheit (Identität)
- != und is not prüft Ungleichheit

**Weiterführende Links:**
- [Python Documentation - Comparisons](https://docs.python.org/3/reference/expressions.html#comparisons)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Equality Operators: ==, !=, equal?, eql?
x = 42
y = 42
z = 10

# == prüft strukturelle Gleichheit
if x == y
  # true: Strukturelle Gleichheit
end

# Reference Types
p1 = Point.new(1, 2)
p2 = Point.new(1, 2)
p3 = p1

# equal? prüft Referenzgleichheit (Identität)
if p1.equal?(p3)
  # true: Referenzgleichheit
end
if p1.equal?(p2)
  # false: Verschiedene Objekte
end

# == prüft strukturelle Gleichheit (kann überschrieben werden)
if p1 == p2
  # true: Strukturelle Gleichheit (wenn == überschrieben)
end
```

**Besonderheiten:**
- == prüft strukturelle Gleichheit (kann überschrieben werden)
- equal? prüft Referenzgleichheit (Identität)
- eql? prüft strukturelle Gleichheit mit Hash-Berücksichtigung

**Weiterführende Links:**
- [Ruby Documentation - Object](https://ruby-doc.org/core-3.1.0/Object.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Equality Operators: ==, !=, std::ptr::eq()
let x = 42;
let y = 42;
let z = 10;

// == prüft strukturelle Gleichheit (PartialEq)
if x == y {
    // true: Strukturelle Gleichheit
}

// Reference Types
let p1 = Point { x: 1, y: 2 };
let p2 = Point { x: 1, y: 2 };
let ref1 = &p1;
let ref2 = &p1;
let ref3 = &p2;

// std::ptr::eq() prüft Referenzgleichheit für Raw Pointers
use std::ptr;
if ptr::eq(ref1, ref2) {
    // true: Referenzgleichheit
}

// == prüft strukturelle Gleichheit (PartialEq)
if *ref1 == *ref3 {
    // true: Strukturelle Gleichheit (wenn PartialEq implementiert)
}
```

**Besonderheiten:**
- == prüft strukturelle Gleichheit (PartialEq)
- std::ptr::eq() prüft Referenzgleichheit für Raw Pointers
- != wird automatisch aus == generiert

**Weiterführende Links:**
- [The Rust Book - Derived Traits](https://doc.rust-lang.org/book/appendix-03-derivable-traits.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Equality Operators: ==, !=, eq, ne
val x = 42
val y = 42
val z = 10

// == prüft strukturelle Gleichheit
if (x == y) {
    // true: Strukturelle Gleichheit
}

// Reference Types
val p1 = new Point(1, 2)
val p2 = new Point(1, 2)
val p3 = p1

// eq prüft Referenzgleichheit
if (p1.eq(p3)) {
    // true: Referenzgleichheit
}
if (p1.eq(p2)) {
    // false: Verschiedene Objekte
}

// == prüft strukturelle Gleichheit (verwendet equals())
if (p1 == p2) {
    // true: Strukturelle Gleichheit (wenn equals() überschrieben)
}
```

**Besonderheiten:**
- == prüft strukturelle Gleichheit (verwendet equals())
- eq prüft Referenzgleichheit
- ne prüft Referenzungleichheit

**Weiterführende Links:**
- [Scala Documentation - Equality](https://docs.scala-lang.org/tour/unified-types.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Equality Operators: ==, !=, ===, !==
let x = 42
let y = 42
let z = 10

// == prüft strukturelle Gleichheit (Equatable)
if x == y {
    // true: Strukturelle Gleichheit
}

// Reference Types
let p1 = Point(x: 1, y: 2)
let p2 = Point(x: 1, y: 2)
let p3 = p1

// === prüft Referenzgleichheit (Identität)
if p1 === p3 {
    // true: Referenzgleichheit
}
if p1 === p2 {
    // false: Verschiedene Objekte
}

// == prüft strukturelle Gleichheit (Equatable)
if p1 == p2 {
    // true: Strukturelle Gleichheit (wenn Equatable implementiert)
}
```

**Besonderheiten:**
- == prüft strukturelle Gleichheit (Equatable)
- === prüft Referenzgleichheit (Identität)
- != und !== prüft Ungleichheit

**Weiterführende Links:**
- [Swift Documentation - Identity Operators](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/advancedoperators/#Identity-Operators)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Equality Operators: ==, ===, !=, !==
const x = 42;
const y = 42;
const z = 10;

// == prüft Wertegleichheit mit Type Coercion
if (x == y) {
    // true: Wertegleichheit
}
if (x == "42") {
    // true: Type Coercion
}

// === prüft Wertegleichheit ohne Type Coercion
if (x === y) {
    // true: Wertegleichheit ohne Coercion
}
if (x === "42") {
    // false: Keine Type Coercion
}

// Reference Types
const p1 = new Point(1, 2);
const p2 = new Point(1, 2);
const p3 = p1;

// === prüft Referenzgleichheit für Objects
if (p1 === p3) {
    // true: Referenzgleichheit
}
if (p1 === p2) {
    // false: Verschiedene Objekte
}
```

**Besonderheiten:**
- == prüft Wertegleichheit mit Type Coercion
- === prüft Wertegleichheit ohne Type Coercion
- === prüft Referenzgleichheit für Objects

**Weiterführende Links:**
- [TypeScript Handbook - Basic Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Equality Operators: =, <>, Is, IsNot, Equals()
Dim x As Integer = 42
Dim y As Integer = 42
Dim z As Integer = 10

' = prüft Wertegleichheit
If x = y Then
    ' True: Wertegleichheit
End If

' Reference Types
Dim p1 As New Point(1, 2)
Dim p2 As New Point(1, 2)
Dim p3 As Point = p1

' Is Operator prüft Referenzgleichheit
If p1 Is p3 Then
    ' True: Referenzgleichheit
End If
If p1 Is p2 Then
    ' False: Verschiedene Objekte
End If

' Equals() prüft strukturelle Gleichheit
If p1.Equals(p2) Then
    ' True: Strukturelle Gleichheit (wenn Equals() überschrieben)
End If
```

**Besonderheiten:**
- = prüft Wertegleichheit für primitive Typen
- Is prüft Referenzgleichheit
- Equals() prüft strukturelle Gleichheit

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Is Operator](https://learn.microsoft.com/en-us/dotnet/visual-basic/language-reference/operators/is-operator)

</TabItem>
<TabItem value="v" label="V">

```v
// Equality Operators: ==, !=
x := 42
y := 42
z := 10

if x == y {
    // true: Wertegleichheit
}
if x != z {
    // true: Werteungleichheit
}

// Reference Types
mut p1 := Point{x: 1, y: 2}
mut p2 := Point{x: 1, y: 2}
mut ref1 := &p1
mut ref2 := &p1

// == prüft Referenzgleichheit für References
if ref1 == ref2 {
    // true: Referenzgleichheit
}

// == prüft strukturelle Gleichheit für Structs (wenn vergleichbar)
if p1 == p2 {
    // true: Strukturelle Gleichheit (wenn alle Felder vergleichbar)
}
```

**Besonderheiten:**
- == prüft Wertegleichheit für primitive Typen
- == prüft Referenzgleichheit für References
- == prüft strukturelle Gleichheit für Structs (wenn alle Felder vergleichbar)

**Weiterführende Links:**
- [V Documentation - Operators](https://github.com/vlang/v/blob/master/doc/docs.md#operators)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Equality Operators: ==, !=
const x: i32 = 42;
const y: i32 = 42;
const z: i32 = 10;

if (x == y) {
    // true: Wertegleichheit
}
if (x != z) {
    // true: Werteungleichheit
}

// Pointer-Vergleich (Identität)
var p1 = Point{ .x = 1, .y = 2 };
const ptr1: *Point = &p1;
const ptr2: *Point = &p1;

if (ptr1 == ptr2) {
    // true: Beide zeigen auf dasselbe Objekt (Identität)
}
```

**Besonderheiten:**
- == prüft Wertegleichheit für primitive Typen
- == prüft Identität für Pointer
- != prüft Ungleichheit

**Weiterführende Links:**
- [Zig Documentation - Operators](https://ziglang.org/documentation/0.11.0/#Operators)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Identity (Objektidentität)
(eq 'a 'a)              ; T
(eq (list 1) (list 1))  ; NIL (verschiedene Objekte)

;; Equality (verschiedene Stufen)
(eql 42 42)             ; T (gleicher Typ und Wert)
(equal (list 1 2) (list 1 2))    ; T (strukturelle Gleichheit)
(equalp "Hello" "hello")          ; T (case-insensitiv)

;; Numerische Gleichheit
(= 1 1.0)              ; T (numerisch gleich)
(eql 1 1.0)            ; NIL (verschiedene Typen)
```

**Besonderheiten:**
- `eq` prüft Objektidentität (Pointer-Gleichheit)
- `eql` prüft Typ und Wert (Standard-Gleichheit)
- `equal` prüft strukturelle Gleichheit (rekursiv)
- `equalp` ist wie `equal`, aber case-insensitiv und numerisch tolerant
- `=` prüft numerische Gleichheit über Typgrenzen hinweg

**Weiterführende Links:**
- [Common Lisp HyperSpec - eq](http://www.lispworks.com/documentation/HyperSpec/Body/f_eq.htm)

</TabItem>
</Tabs>

