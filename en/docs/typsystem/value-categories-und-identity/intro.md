---
slug: /typsystem/value-categories-und-identity
title: 3.3. Value Categories and Identity
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 3.3. Value Categories and Identity

Value vs. reference types, pointers, equality and identity.

## 3.3.1. Primitive vs. Composite Types

Distinction between atomic types that are not composed of other types, and composite types that consist of other types.

### Languages {#sprachen}

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

**Special features:**
- Primitive Types: Integer, Float, Boolean, Character
- Composite Types: Arrays, Records, Strings
- All types are type-safe

**Further reading:**
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

**Special features:**
- Primitive Types: int, float, double, char, _Bool
- Composite Types: Arrays, Structs, Unions
- Arrays decay to pointers in function calls

**Further reading:**
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

**Special features:**
- Primitive Types: i8, i16, i32, i64, f32, f64, bool, char
- Composite Types: Arrays, Structs, Tuples
- Experimental language, syntax may still change

**Further reading:**
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

**Special features:**
- Primitive Types: int, float, double, bool, char, byte, etc.
- Composite Types: Arrays, Classes, Structs, Tuples
- All primitive types are aliases for .NET types

**Further reading:**
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

**Special features:**
- Primitive Types: int, float, double, bool, char, etc.
- Composite Types: Arrays, Structs, Classes, Tuples (since C++11)
- Arrays decay to pointers in function calls

**Further reading:**
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

**Special features:**
- Primitive Types: long, double, boolean, char (optimized for performance)
- Composite Types: Vectors, Maps, Lists, Sets
- All values are objects, but primitive types are optimized for performance

**Further reading:**
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

**Special features:**
- Primitive Types: number (integer, float, ratio, complex), character, boolean (t/nil)
- Composite Types: Lists, Arrays, Structures, Hash Tables
- All values are objects

**Further reading:**
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

**Special features:**
- Primitive Types: Int8, Int16, Int32, Int64, Float32, Float64, Bool, Char
- Composite Types: Arrays, Structs, Classes, Tuples
- All types are objects, but primitive types are optimized for performance

**Further reading:**
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

**Special features:**
- Primitive Types: bool, byte, int, uint, float, double, char, etc.
- Composite Types: Arrays, Structs, Classes, Associative Arrays
- Arrays are dynamic and have a length property

**Further reading:**
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

**Special features:**
- Primitive Types: int, double, bool, String, null
- Composite Types: Lists, Maps, Sets, Classes, Records (since Dart 3.0)
- All types are objects, including primitive types

**Further reading:**
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

**Special features:**
- Primitive Types: INTEGER, REAL, BOOLEAN, CHARACTER
- Composite Types: ARRAY, Classes, Tuples
- All types are classes, including primitive types

**Further reading:**
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
# or as Tuple
p = {1, 2}
```

**Special features:**
- Primitive Types: integer, float, atom, boolean
- Composite Types: Lists, Maps, Tuples, Structs
- All values are immutable

**Further reading:**
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

**Special features:**
- Primitive Types: Int, Float, Bool, Char, String
- Composite Types: Lists, Records, Tuples, Custom Types
- All values are immutable

**Further reading:**
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
% or as Map
P2 = #{x => 1, y => 2}.
```

**Special features:**
- Primitive Types: integer, float, atom, boolean
- Composite Types: Lists, Tuples, Maps, Records
- All values are immutable

**Further reading:**
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

**Special features:**
- Primitive Types: int, float, double, bool, char, string
- Composite Types: Lists, Arrays, Records, Tuples, Discriminated Unions
- All types are immutable by default

**Further reading:**
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

**Special features:**
- Primitive Types: INTEGER, REAL, DOUBLE PRECISION, LOGICAL, CHARACTER
- Composite Types: Arrays, Derived Types
- Arrays are Fortran's strength

**Further reading:**
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

**Special features:**
- Primitive Types: Int, Float, Bool, String
- Composite Types: Lists, Tuples, Custom Types, Records
- All values are immutable

**Further reading:**
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

**Special features:**
- Primitive Types: int, int8, int16, int32, int64, uint, float32, float64, bool, string
- Composite Types: Arrays, Slices, Structs, Maps, Channels
- No classes, only structs

**Further reading:**
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

**Special features:**
- Primitive Types: byte, short, int, long, float, double, boolean, char
- Composite Types: Lists, Maps, Arrays, Classes
- Automatic boxing/unboxing between primitive and object types

**Further reading:**
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

**Special features:**
- Primitive Types: Int, Integer, Float, Double, Bool, Char
- Composite Types: Lists, Tuples, Algebraic Data Types
- All values are immutable

**Further reading:**
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

**Special features:**
- Primitive Types: Int, Float, Bool, String
- Composite Types: Arrays, Classes, Anonymous Structures, Enums
- Cross-platform language with uniform syntax

**Further reading:**
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

**Special features:**
- Primitive Types: Int, Integer, Double, Bool, Char, String
- Composite Types: Lists, Tuples, Dependent Types, Algebraic Data Types
- Supports dependent types

**Further reading:**
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

**Special features:**
- Primitive Types: byte, short, int, long, float, double, boolean, char
- Composite Types: Arrays, Classes, Records (since Java 14)
- Automatic boxing/unboxing between primitive and object types

**Further reading:**
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

**Special features:**
- Primitive Types: number, boolean, string, null, undefined, symbol, bigint
- Composite Types: Arrays, Objects, Maps, Sets
- All types except primitives are objects

**Further reading:**
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

**Special features:**
- Primitive Types: Int, Float64, Bool, Char, String
- Composite Types: Arrays, Structs, Tuples, Dictionaries
- Types are first-class objects

**Further reading:**
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

**Special features:**
- Primitive Types: `int`, `float64`, `bool`, `char`, `string`, `()` (unit)
- Composite Types: `struct` (Records), `type` (ADTs), `list`, Tuples
- All values are immutable (immutable by default)
- No distinction between primitives and objects (everything is a value)

**Further reading:**
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

**Special features:**
- Primitive Types: Byte, Short, Int, Long, Float, Double, Boolean, Char
- Composite Types: Arrays, Lists, Classes, Data Classes, Sealed Classes
- Primitives are compiled to JVM primitives when possible

**Further reading:**
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

**Special features:**
- Primitive Types: Nat, Int, UInt8-64, Float, Bool, Char, String
- Composite Types: Structures, Lists, Arrays, Tuples, Inductive Types
- All types are first-class values in the type system
- No autoboxing, all types are uniform

**Further reading:**
- [Lean 4 Documentation - Dependent Type Theory](https://lean-lang.org/theorem_proving_in_lean4/dependent_type_theory.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Primitive Types: number, boolean
local x = 42
local flag = true

-- Composite Types: Table (as Array and as Map)
local numbers = {10, 20, 30}

local p = {x = 1, y = 2}
```

**Special features:**
- Primitive Types: number, boolean, string, nil
- Composite Types: Tables (function as Arrays, Maps, Objects)
- Tables are the only data structure

**Further reading:**
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

**Special features:**
- Primitive Types: double, single, int8, int16, int32, int64, logical, char
- Composite Types: Arrays, Structs, Cell Arrays, Tables
- Arrays are the fundamental data structure

**Further reading:**
- [MATLAB Documentation - Data Types](https://www.mathworks.com/help/matlab/data-types.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```mercury
% Primitive Types: int, float, char, string
:- pred main(io::di, io::uo) is det.
main(!IO) :-
    X = 42,            % int (primitive)
    Y = 3.14,          % float (primitive)
    C = 'A',           % char (primitive)
    S = "Hello",       % string (primitive)

    % Composite Types: ADTs, Lists, Tuples
    P = point(1, 2),
    Items = [1, 2, 3],
    Pair = {S, X},
    io.write(P, !IO), io.nl(!IO),
    io.write(Items, !IO), io.nl(!IO).

:- type point
    --->    point(x :: int, y :: int).
```

**Special features:**
- Primitive Types: `int`, `float`, `char`, `string`
- Composite Types: Algebraic Data Types (ADTs), Lists (`list(T)`), Tuples
- All types are Value Types (immutable)
- No distinction between stack and heap for the programmer

**Further reading:**
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

**Special features:**
- Primitive Types: Int, Float64, Bool, String
- Composite Types: Lists, Tuples, Structs, Classes
- Python-like syntax with static typing

**Further reading:**
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

**Special features:**
- Primitive Types: int, int8, int16, int32, int64, float, bool, char, string
- Composite Types: Arrays, Sequences, Objects, Tuples, Sets, Tables
- Objects are Value Types

**Further reading:**
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

**Special features:**
- Primitive Types: int, float, double, BOOL, char
- Composite Types: NSArray, NSDictionary, Classes, Structs
- Foundation Framework provides many composite types

**Further reading:**
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

**Special features:**
- Primitive Types: Integer, Real, Boolean, Char, String
- Composite Types: Arrays, Records, Classes, Objects
- Records are Value Types

**Further reading:**
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

**Special features:**
- Primitive Types: int, float, bool, char, string
- Composite Types: Lists, Tuples, Records, Variants, Arrays
- All values are immutable by default

**Further reading:**
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

**Special features:**
- Primitive Types: double, single, int8, int16, int32, int64, logical, char
- Composite Types: Arrays, Structs, Cell Arrays
- MATLAB-compatible

**Further reading:**
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

**Special features:**
- Primitive Types: int, i8, i16, i32, i64, u8, u16, u32, u64, f32, f64, bool, rune
- Composite Types: Arrays, Slices, Structs, Unions, Enums
- C-like syntax with modern features

**Further reading:**
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

**Special features:**
- Primitive Types: Scalar (number, string), no explicit bool type
- Composite Types: Arrays (@), Hashes (%), References
- Dynamic typing, no explicit type declarations

**Further reading:**
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
// or as Array
$p = ['x' => 1, 'y' => 2];
?>
```

**Special features:**
- Primitive Types: int, float, bool, string, null
- Composite Types: Arrays, Objects, Resources
- Arrays can function as Maps or Lists

**Further reading:**
- [PHP Documentation - Types](https://www.php.net/manual/en/language.types.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Primitive Types: Atoms, Integer, Float
hello.
42.
3.14.

% Composite Types: Complex Terms (Functors), Lists
point(1, 2).
person(name('John', 'Doe'), age(30)).
[1, 2, 3].
[head | tail].

% Nested structures
tree(node(leaf(1), node(leaf(2), leaf(3)))).
```

**Special features:**
- Primitive Types: Atoms (symbolic constants), Integer, Floats
- Composite Types: Complex Terms (functors with arguments) and Lists
- Lists are a special form of complex terms (`.(Head, Tail)`)
- All data in Prolog are terms – there are no separate objects or reference types

**Further reading:**
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

**Special features:**
- Primitive Types: Int, Number, Boolean, Char, String
- Composite Types: Arrays, Records, Tuples, Algebraic Data Types
- Haskell-like, compiles to JavaScript

**Further reading:**
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
# or as Dict
p = {'x': 1, 'y': 2}
```

**Special features:**
- Primitive Types: int, float, bool, str, None
- Composite Types: Lists, Dicts, Tuples, Sets, Classes
- All types are objects, including primitive types

**Further reading:**
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
# or as named vector
p <- c(x = 1, y = 2)
```

**Special features:**
- Primitive Types: numeric, integer, logical, character, complex
- Composite Types: Vectors, Lists, Data Frames, Matrices, Arrays
- Vectors are the fundamental data structure

**Further reading:**
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

**Special features:**
- Primitive Types: number, boolean, char, string, symbol
- Composite Types: Lists, Vectors, Structs, Hash Tables
- All values are first-class objects

**Further reading:**
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

**Special features:**
- Primitive Types: I32, I64, F64, Bool, Str
- Composite Types: Lists, Records, Tags (Sum Types)
- Functional language with structural typing

**Further reading:**
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
# or as Class
class Point
  attr_accessor :x, :y
  def initialize(x, y)
    @x = x
    @y = y
  end
end
p = Point.new(1, 2)
```

**Special features:**
- Primitive Types: Integer, Float, TrueClass, FalseClass, NilClass, Symbol, String
- Composite Types: Arrays, Hashes, Classes, Structs
- All types are classes, including primitive types

**Further reading:**
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

**Special features:**
- Primitive Types: i8, i16, i32, i64, u8, u16, u32, u64, f32, f64, bool, char
- Composite Types: Arrays, Vectors, Structs, Tuples, Enums
- Ownership system for memory management

**Further reading:**
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

**Special features:**
- Primitive Types: Byte, Short, Int, Long, Float, Double, Boolean, Char
- Composite Types: Arrays, Lists, Classes, Case Classes, Tuples
- Primitives are compiled to JVM primitives when possible

**Further reading:**
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
;; or as alist
(define p '((x . 1) (y . 2)))
```

**Special features:**
- Primitive Types: number, boolean (#t/#f), char, string
- Composite Types: Lists, Vectors, Pairs
- All values are first-class objects

**Further reading:**
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

**Special features:**
- Primitive Types: Int, Int8, Int16, Int32, Int64, Float, Double, Bool, Character, String
- Composite Types: Arrays, Dictionaries, Structs, Classes, Tuples, Enums
- Structs are Value Types, Classes are Reference Types

**Further reading:**
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

**Special features:**
- Primitive Types: number, boolean, string, null, undefined, symbol, bigint
- Composite Types: Arrays, Objects, Classes, Tuples, Interfaces
- All types correspond to JavaScript primitives at runtime

**Further reading:**
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

**Special features:**
- Primitive Types: Integer, Double, Boolean, Char, Byte, etc.
- Composite Types: Arrays, Classes, Structures, Tuples
- All primitive types are aliases for .NET types

**Further reading:**
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

**Special features:**
- Primitive Types: int, i8, i16, i32, i64, u8, u16, u32, u64, f32, f64, bool, rune, string
- Composite Types: Arrays, Structs, Maps, Channels
- All values are immutable by default (mut required)

**Further reading:**
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
(* or as List *)
p = {1, 2};
```

**Special features:**
- Primitive Types: Integer, Real, Boolean, String, Symbol
- Composite Types: Lists, Associations, Expressions
- Everything is an Expression, including primitive types

**Further reading:**
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

**Special features:**
- Primitive Types: i8, i16, i32, i64, u8, u16, u32, u64, f16, f32, f64, bool, comptime_int, comptime_float
- Composite Types: Arrays, Structs, Unions, Enums, Error Sets
- Compile-time types (comptime)

**Further reading:**
- [Zig Documentation - Types](https://ziglang.org/documentation/0.11.0/#Primitive-Types)

</TabItem>
</Tabs>


## 3.3.2. Object vs. Value Types (Reference Types vs. Value Types)

Distinction between Value Types, which are copied on assignment, and Reference Types, where multiple variables can refer to the same object.

### Languages {#sprachen}

<Tabs availableTabs={['ada', 'c', 'carbon', 'cpp', 'csharp', 'd', 'dart', 'eiffel', 'fsharp', 'go', 'groovy', 'java', 'julia', 'kotlin', 'matlab', 'mercury', 'nim', 'object-pascal', 'objective-c', 'ocaml', 'odin', 'rust', 'scala', 'swift', 'v', 'vbnet', 'zig']}>
<TabItem value="ada" label="Ada">

```ada
-- Value Types: Records are copied
type Point is record
    x : Integer;
    y : Integer;
end record;

p1 : Point := (x => 1, y => 2);
p2 : Point := p1;  -- Copy
p2.x := 10;  -- p1.x remains 1

-- Access Types (similar to references)
type Point_Access is access Point;
p3 : Point_Access := new Point'(x => 1, y => 2);
p4 : Point_Access := p3;  -- Reference, not copy
p4.x := 10;  -- p3.x also becomes 10
```

**Special features:**
- Records are Value Types (copied)
- Access Types are Reference Types (similar to pointers)
- Explicit distinction between Value and Reference semantics

**Further reading:**
- [Ada Reference Manual - Access Types](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-3-10.html)

</TabItem>
<TabItem value="c" label="C">

```c
// Value Types: Structs are copied
struct Point {
    int x;
    int y;
};

struct Point p1 = {1, 2};
struct Point p2 = p1;  // Copy
p2.x = 10;  // p1.x remains 1

// Pointer (similar to references)
struct Point* p3 = &p1;
struct Point* p4 = p3;  // Both point to p1
p4->x = 10;  // p1.x becomes 10
```

**Special features:**
- Structs are Value Types (copied)
- Pointers are Reference Types (point to objects)
- Explicit pointer management required

**Further reading:**
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
var p2: Point = p1;  // Copy
p2.x = 10;  // p1.x remains 1

// Pointer (similar to references)
var p3: Point* = &p1;
var p4: Point* = p3;  // Both point to p1
p4->x = 10;  // p1.x becomes 10
```

**Special features:**
- Structs are Value Types (copied)
- Pointers are Reference Types
- Experimental language, syntax may still change

**Further reading:**
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
Point p2 = p1;  // Copy
p2.x = 10;  // p1.x remains 1

// Reference Types: Classes are referenced
class PointRef {
    public int x;
    public int y;
}

PointRef p3 = new PointRef { x = 1, y = 2 };
PointRef p4 = p3;  // Reference, not copy
p4.x = 10;  // p3.x also becomes 10
```

**Special features:**
- Structs are Value Types (copied)
- Classes are Reference Types (referenced)
- Primitive Types (int, bool, etc.) are Value Types
- Explicit distinction between struct and class

**Further reading:**
- [Microsoft C# Documentation - Value Types](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/value-types)
- [Microsoft C# Documentation - Reference Types](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/reference-types)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Value Types: Structs/Classes are copied (default)
struct Point {
    int x;
    int y;
};

Point p1 = {1, 2};
Point p2 = p1;  // Copy
p2.x = 10;  // p1.x remains 1

// Reference Types: Pointer/References
Point* p3 = &p1;
Point* p4 = p3;  // Both point to p1
p4->x = 10;  // p1.x becomes 10

// Or with References
Point& p5 = p1;  // Alias for p1
p5.x = 20;  // p1.x becomes 20
```

**Special features:**
- Structs/Classes are Value Types by default (copied)
- Pointers and References are Reference Types
- Move semantics (since C++11) for efficient transfer

**Further reading:**
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
Point p2 = p1;  // Copy
p2.x = 10;  // p1.x remains 1

// Reference Types: Classes are referenced
class PointRef {
    int x;
    int y;
    this(int x, int y) {
        this.x = x;
        this.y = y;
    }
}

PointRef p3 = new PointRef(1, 2);
PointRef p4 = p3;  // Reference, not copy
p4.x = 10;  // p3.x also becomes 10
```

**Special features:**
- Structs are Value Types (copied)
- Classes are Reference Types (referenced)
- Explicit distinction between struct and class

**Further reading:**
- [D Language Specification - Types](https://dlang.org/spec/type.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Value Types: Primitive Types are copied
int x = 42;
int y = x;  // Copy
y = 10;  // x remains 42

// Reference Types: Objects are referenced
class Point {
  int x;
  int y;
  Point(this.x, this.y);
}

Point p1 = Point(1, 2);
Point p2 = p1;  // Reference, not copy
p2.x = 10;  // p1.x also becomes 10
```

**Special features:**
- Primitive Types (int, double, bool, String) are Value Types
- Objects (Classes) are Reference Types
- Records (since Dart 3.0) are Value Types

**Further reading:**
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
    p2 := p1       -- Reference copy (both point to the same object)
    
    v1.x := 1.0
    v2 := v1       -- Value copy (independent copy)
end
```

**Special features:**
- Eiffel explicitly distinguishes between Reference Types and Expanded Types (Value Types)
- `expanded class` declares a value type (copy on assignment)
- Standard classes are Reference Types (reference on assignment)
- Primitive Types (INTEGER, REAL, BOOLEAN, CHARACTER) are expanded classes

**Further reading:**
- [Eiffel ECMA-367 Standard](https://www.ecma-international.org/publications-and-standards/standards/ecma-367/)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Value Types: Records are copied
type Point = { x: int; y: int }

let p1 = { x = 1; y = 2 }
let p2 = p1  // Copy
let p3 = { p2 with x = 10 }  // p1.x remains 1

// Reference Types: Classes are referenced
type PointRef(x: int, y: int) =
    member val X = x with get, set
    member val Y = y with get, set

let p4 = PointRef(1, 2)
let p5 = p4  // Reference, not copy
p5.X <- 10  // p4.X also becomes 10
```

**Special features:**
- Records are Value Types (copied)
- Classes are Reference Types (referenced)
- Primitive Types are Value Types

**Further reading:**
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
p2 := p1  // Copy
p2.x = 10  // p1.x remains 1

// Reference Types: Slices, Maps, Channels, Pointers
p3 := &p1  // Pointer to p1
p4 := p3  // Both point to p1
p4.x = 10  // p1.x becomes 10
```

**Special features:**
- Structs are Value Types (copied)
- Slices, Maps, Channels are Reference Types
- Pointers can be used explicitly

**Further reading:**
- [Go Documentation - Types](https://go.dev/ref/spec#Types)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Value Types: Primitive Types are copied
int x = 42
int y = x  // Copy
y = 10  // x remains 42

// Reference Types: Objects are referenced
class Point {
    int x
    int y
}

def p1 = new Point(x: 1, y: 2)
def p2 = p1  // Reference, not copy
p2.x = 10  // p1.x also becomes 10
```

**Special features:**
- Primitive Types are Value Types (with autoboxing)
- Objects are Reference Types
- Automatic boxing/unboxing between primitive and object types

**Further reading:**
- [Groovy Documentation - Types](https://groovy-lang.org/semantics.html#_primitive_types)

</TabItem>
<TabItem value="java" label="Java">

```java
// Value Types: Primitive Types are copied
int x = 42;
int y = x;  // Copy
y = 10;  // x remains 42

// Reference Types: Objects are referenced
class Point {
    int x;
    int y;
    Point(int x, int y) {
        this.x = x;
        this.y = y;
    }
}

Point p1 = new Point(1, 2);
Point p2 = p1;  // Reference, not copy
p2.x = 10;  // p1.x also becomes 10
```

**Special features:**
- Primitive Types (int, double, boolean, etc.) are Value Types
- Objects (Classes) are Reference Types
- Automatic boxing/unboxing between primitive and object types

**Further reading:**
- [Oracle Java Documentation - Primitive Data Types](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Value Types: Immutable Structs are copied
struct Point
    x::Int
    y::Int
end

p1 = Point(1, 2)
p2 = p1  # Copy (since immutable)
# p2.x = 10  # Error: immutable

# Reference Types: Mutable Structs are referenced
mutable struct PointRef
    x::Int
    y::Int
end

p3 = PointRef(1, 2)
p4 = p3  # Reference, not copy
p4.x = 10  # p3.x also becomes 10
```

**Special features:**
- Immutable Structs are Value Types (copied)
- Mutable Structs are Reference Types (referenced)
- Explicit distinction between immutable and mutable

**Further reading:**
- [Julia Documentation - Types](https://docs.julialang.org/en/v1/manual/types/)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Value Types: Primitive Types are copied
val x: Int = 42
val y: Int = x  // Copy
// y = 10  // Error: val is immutable

// Reference Types: Objects are referenced
class Point(var x: Int, var y: Int)

val p1 = Point(1, 2)
val p2 = p1  // Reference, not copy
p2.x = 10  // p1.x also becomes 10
```

**Special features:**
- Primitive Types are Value Types (copied)
- Objects (Classes) are Reference Types
- Data Classes are Reference Types, but with structural equality

**Further reading:**
- [Kotlin Documentation - Types](https://kotlinlang.org/docs/basic-types.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Value Types: Objects are copied
type Point = object
    x: int
    y: int

var p1 = Point(x: 1, y: 2)
var p2 = p1  # Copy
p2.x = 10  # p1.x remains 1

# Reference Types: ref Objects are referenced
type PointRef = ref object
    x: int
    y: int

var p3 = PointRef(x: 1, y: 2)
var p4 = p3  # Reference, not copy
p4.x = 10  # p3.x also becomes 10
```

**Special features:**
- Objects are Value Types (copied)
- ref Objects are Reference Types (referenced)
- Explicit distinction between object and ref object

**Further reading:**
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
Point p2 = p1;  // Copy
p2.x = 10;  // p1.x remains 1

// Reference Types: Objects are referenced
@interface PointRef : NSObject
@property int x;
@property int y;
@end

PointRef *p3 = [[PointRef alloc] init];
p3.x = 1;
p3.y = 2;
PointRef *p4 = p3;  // Reference, not copy
p4.x = 10;  // p3.x also becomes 10
```

**Special features:**
- Structs are Value Types (copied)
- Objects (Classes) are Reference Types
- Explicit distinction between struct and class

**Further reading:**
- [Apple Objective-C Documentation](https://developer.apple.com/documentation/objectivec)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Value Types: Records are copied
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
  p2 := p1;  // Copy
  p2.x := 10;  // p1.x remains 1
end;

// Reference Types: Objects are referenced
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
  p4 := p3;  // Reference, not copy
  p4.x := 10;  // p3.x also becomes 10
end;
```

**Special features:**
- Records are Value Types (copied)
- Objects (Classes) are Reference Types
- Explicit distinction between record and class

**Further reading:**
- [Delphi Documentation - Types](https://docwiki.embarcadero.com/RADStudio/en/Fundamental_Syntactic_Elements)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Value Types: Records are copied *)
type point = { x : int; y : int }

let p1 = { x = 1; y = 2 }
let p2 = { p1 with x = 10 }  (* New copy with changed x *)
(* p1.x remains 1 *)

(* Reference Types: ref Cells *)
let p3 = ref { x = 1; y = 2 }
let p4 = p3  (* Reference, not copy *)
p4 := { x = 10; y = 2 }  (* p3 is also changed *)
```

**Special features:**
- Records are Value Types (copied, immutable)
- ref Cells are Reference Types (mutable references)
- All values are immutable by default

**Further reading:**
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
p2 := p1  // Copy
p2.x = 10  // p1.x remains 1

// Reference Types: ^Point (Pointer)
p3 := &p1  // Pointer to p1
p4 := p3  // Both point to p1
p4.x = 10  // p1.x becomes 10
```

**Special features:**
- Structs are Value Types (copied)
- Pointers (^) are Reference Types
- C-like syntax with modern features

**Further reading:**
- [Odin Documentation - Types](https://odin-lang.org/docs/overview/)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Value Types: Structs are copied (when Copy trait)
#[derive(Copy, Clone)]
struct Point {
    x: i32,
    y: i32,
}

let p1 = Point { x: 1, y: 2 };
let p2 = p1;  // Copy (since Copy)
// p1 is still usable

// Reference Types: References (&) and Boxes
let p3 = Point { x: 1, y: 2 };
let p4 = &p3;  // Reference
let p5 = p4;  // Reference is copied, not the object
// p3.x remains 1, since immutable reference
```

**Special features:**
- Structs with Copy trait are Value Types (copied)
- References (&) and Boxes are Reference Types
- Ownership system controls memory management

**Further reading:**
- [The Rust Book - Ownership](https://doc.rust-lang.org/book/ch04-00-understanding-ownership.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Value Types: Primitive Types are copied
val x: Int = 42
val y: Int = x  // Copy
// y = 10  // Error: val is immutable

// Reference Types: Objects are referenced
class Point(var x: Int, var y: Int)

val p1 = new Point(1, 2)
val p2 = p1  // Reference, not copy
p2.x = 10  // p1.x also becomes 10
```

**Special features:**
- Primitive Types are Value Types (copied)
- Objects (Classes) are Reference Types
- Case Classes are Reference Types, but with structural equality

**Further reading:**
- [Scala Documentation - Types](https://docs.scala-lang.org/tour/unified-types.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Value Types: Structs are copied
struct Point {
    var x: Int
    var y: Int
}

var p1 = Point(x: 1, y: 2)
var p2 = p1  // Copy
p2.x = 10  // p1.x remains 1

// Reference Types: Classes are referenced
class PointRef {
    var x: Int
    var y: Int
    init(x: Int, y: Int) {
        self.x = x
        self.y = y
    }
}

let p3 = PointRef(x: 1, y: 2)
let p4 = p3  // Reference, not copy
p4.x = 10  // p3.x also becomes 10
```

**Special features:**
- Structs are Value Types (are copied)
- Classes are Reference Types (are referenced)
- Enums are Value Types
- Explicit distinction between struct and class

**Further reading:**
- [Swift Documentation - Structures and Classes](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/classesandstructures/)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Value Types: Structures are copied
Structure Point
    Dim x As Integer
    Dim y As Integer
End Structure

Dim p1 As Point
p1.x = 1
p1.y = 2
Dim p2 As Point = p1  ' Copy
p2.x = 10  ' p1.x remains 1

' Reference Types: Classes are referenced
Class PointRef
    Public x As Integer
    Public y As Integer
End Class

Dim p3 As New PointRef()
p3.x = 1
p3.y = 2
Dim p4 As PointRef = p3  ' Reference, not copy
p4.x = 10  ' p3.x also becomes 10
```

**Special features:**
- Structures are Value Types (are copied)
- Classes are Reference Types (are referenced)
- Primitive types are Value Types
- Explicit distinction between Structure and Class

**Further reading:**
- [Microsoft VB.NET Documentation - Value Types and Reference Types](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/data-types/value-types-and-reference-types)

</TabItem>
<TabItem value="v" label="V">

```v
// Value Types: Structs are copied
struct Point {
    x int
    y int
}

mut p1 := Point{x: 1, y: 2}
mut p2 := p1  // Copy
p2.x = 10  // p1.x remains 1

// Reference Types: &Point (Reference)
mut p3 := Point{x: 1, y: 2}
mut p4 := &p3  // Reference to p3
p4.x = 10  // p3.x becomes 10
```

**Special features:**
- Structs are Value Types (are copied)
- References (&) are Reference Types
- All values are immutable by default (mut required)

**Further reading:**
- [V Documentation - Types](https://github.com/vlang/v/blob/master/doc/docs.md#types)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Value Types: Structs are copied
const Point = struct {
    x: i32,
    y: i32,
};

const p1 = Point{ .x = 1, .y = 2 };
const p2 = p1;  // Copy
// p2.x = 10;  // Error: const is immutable

// Reference Types: *Point (Pointer)
var p3 = Point{ .x = 1, .y = 2 };
const p4 = &p3;  // Pointer to p3
p4.x = 10;  // p3.x becomes 10
```

**Special features:**
- Structs are Value Types (are copied)
- Pointers (*) are Reference Types
- Explicit pointer management required

**Further reading:**
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
p2 = p1;       % Copy
p2.x = 2;      % p1.x is still 1

% Reference Semantics
n1 = Node(); n1.value = 1;
n2 = n1;       % Reference to the same object
n2.value = 2;  % n1.value is now also 2
```

**Special features:**
- Standard classes are Value Types (copy on assignment)
- `< handle` makes a class a Reference Type
- Handle classes support events, listeners, and destructors

**Further reading:**
- [MATLAB Documentation - Handle vs. Value Classes](https://www.mathworks.com/help/matlab/matlab_oop/comparing-handle-and-value-classes.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```mercury
% Value Types Only: All types in Mercury are Value Types
:- type point
    --->    point(x :: int, y :: int).

:- pred main(io::di, io::uo) is det.
main(!IO) :-
    P1 = point(1, 2),
    P2 = P1,               % Copy (Value Semantics)
    % P2 is an independent copy of P1
    % There are no Reference Types in Mercury

    io.write(P1, !IO), io.nl(!IO),
    io.write(P2, !IO), io.nl(!IO).

% Lists are also Value Types
:- func append_item(list(int), int) = list(int).
append_item(List, Item) = List ++ [Item].
```

**Special features:**
- All types in Mercury are Value Types — there are no Reference Types.
- Assignment always creates a logical copy (no aliasing problems).
- As a declarative language, there is no mutation — values are immutable.
- No difference between stack and heap allocation for the programmer.

**Further reading:**
- [The Mercury Language Reference Manual - Type System](https://www.mercurylang.org/documentation/reference.html#Type_system)

</TabItem>
</Tabs>


## 3.3.3. Pointers vs. References

Distinction between pointers, which must be explicitly dereferenced, and references, which are automatically dereferenced and act as an alias for an object.

### Languages {#sprachen}

<Tabs availableTabs={['ada', 'cpp', 'nim', 'objective-c', 'object-pascal', 'rust']} yellowTabs={['c', 'd', 'go', 'odin', 'swift', 'v', 'zig']} orangeTabs={['carbon']}>
<TabItem value="ada" label="Ada">

```ada
-- Access Types (similar to pointers)
type Point_Access is access Point;
p1 : Point_Access := new Point'(x => 1, y => 2);
p2 : Point_Access := p1;  -- Both point to the same object

-- Dereferencing explicitly with .all
p1.all.x := 10;  -- Explicit dereferencing
-- or automatically with .
p1.x := 10;  -- Automatic dereferencing
```

**Special features:**
- Access Types are similar to pointers
- Automatic dereferencing on field access
- Explicit dereferencing with .all possible

**Further reading:**
- [Ada Reference Manual - Access Types](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-3-10.html)

</TabItem>
<TabItem value="c" label="C">

```c
// Pointers: Explicit dereferencing required
struct Point {
    int x;
    int y;
};

struct Point p = {1, 2};
struct Point* ptr = &p;  // Pointer

// Explicit dereferencing with *
(*ptr).x = 10;  // Explicit dereferencing
// or with ->
ptr->x = 10;  // Short form for (*ptr).x
```

**Special features:**
- Only pointers, no references
- Explicit dereferencing with * or ->
- Pointer arithmetic possible

**Further reading:**
- [C Standard - Pointers](https://en.cppreference.com/w/c/language/pointer)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Pointers: Explicit dereferencing required
struct Point {
    var x: i32;
    var y: i32;
}

var p: Point = {.x = 1, .y = 2};
var ptr: Point* = &p;  // Pointer

// Explicit dereferencing with *
(*ptr).x = 10;  // Explicit dereferencing
// or with ->
ptr->x = 10;  // Short form for (*ptr).x
```

**Special features:**
- Only pointers, no references
- Explicit dereferencing with * or ->
- Experimental language, syntax may still change

**Further reading:**
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
// or with ->
ptr->x = 10;  // Short form for (*ptr).x

// References: Automatic dereferencing
Point& ref = p;  // Reference (Alias)
ref.x = 20;  // Automatic dereferencing, p.x becomes 20
// No explicit dereferencing needed
```

**Special features:**
- Pointers: Explicit dereferencing with * or ->
- References: Automatic dereferencing, act as alias
- References cannot be reassigned (always alias for the same object)

**Further reading:**
- [C++ Reference - Pointers](https://en.cppreference.com/w/cpp/language/pointer)
- [C++ Reference - References](https://en.cppreference.com/w/cpp/language/reference)

</TabItem>
<TabItem value="d" label="D">

```d
// Pointers: Explicit dereferencing required
struct Point {
    int x;
    int y;
}

Point p = Point(1, 2);
Point* ptr = &p;  // Pointer

// Explicit dereferencing with *
(*ptr).x = 10;
// Automatic dereferencing on struct member access
ptr.x = 10;  // Syntactic sugar for (*ptr).x

// References: only as function parameters (ref)
void modify(ref Point p) {
    p.x = 20;  // Modifies the original
}

modify(p);  // p.x is now 20
```

**Special features:**
- Pointers: Explicit dereferencing with `*`, automatic on struct member access
- References: Only possible as function parameters via `ref` keyword
- No standalone reference variables like in C++
- `ref` parameters are automatically references

**Further reading:**
- [D Language Specification - Pointers](https://dlang.org/spec/type.html#pointers)

</TabItem>
<TabItem value="go" label="Go">

```go
// Pointers: Explicit dereferencing required
type Point struct {
    x int
    y int
}

p := Point{x: 1, y: 2}
ptr := &p  // Pointer

// Explicit dereferencing with *
(*ptr).x = 10;  // Explicit dereferencing
// or automatically for structs
ptr.x = 10;  // Automatic dereferencing for structs
```

**Special features:**
- Only pointers, no references
- Explicit dereferencing with *, automatic for struct fields
- No pointer arithmetic

**Further reading:**
- [Go Documentation - Pointers](https://go.dev/ref/spec#Pointer_types)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Pointers: Explicit dereferencing required
type Point = object
    x: int
    y: int

var p = Point(x: 1, y: 2)
var ptr: ptr Point = addr(p)  # Pointer

# Explicit dereferencing with []
ptr[].x = 10  # Explicit dereferencing

# References: Automatic dereferencing
var ref: ref Point = new(Point)
ref.x = 20  # Automatic dereferencing
```

**Special features:**
- Pointers (ptr): Explicit dereferencing with []
- References (ref): Automatic dereferencing, Garbage Collected
- ref is similar to boxed types

**Further reading:**
- [Nim Documentation - Pointers](https://nim-lang.org/docs/manual.html#types-reference-and-pointer-types)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Pointers: Explicit dereferencing for C structs
typedef struct {
    int x;
    int y;
} Point;

Point p = {1, 2};
Point* ptr = &p;  // Pointer

// Explicit dereferencing with *
(*ptr).x = 10;  // Explicit dereferencing
// or with ->
ptr->x = 10;  // Short form for (*ptr).x

// Objects: Automatic dereferencing
PointRef* obj = [[PointRef alloc] init];
obj.x = 20;  // Automatic dereferencing for objects
```

**Special features:**
- Pointers: Explicit dereferencing with * or -> for C structs
- Objects: Automatic dereferencing for Objective-C objects
- All objects are pointers

**Further reading:**
- [Apple Objective-C Documentation](https://developer.apple.com/documentation/objectivec)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Pointers: Explicit dereferencing required
Point :: struct {
    x: int,
    y: int,
}

p := Point{x = 1, y = 2}
ptr: ^Point = &p  // Pointer

// Explicit dereferencing with ^
ptr^.x = 10  // Explicit dereferencing
// or automatically for structs
ptr.x = 10  // Automatic dereferencing for structs
```

**Special features:**
- Only pointers, no references
- Explicit dereferencing with ^, automatic for struct fields
- C-like syntax

**Further reading:**
- [Odin Documentation - Pointers](https://odin-lang.org/docs/overview/)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// References: Automatic dereferencing
struct Point {
    x: i32,
    y: i32,
}

let mut p = Point { x: 1, y: 2 };
let ref_p = &mut p;  // Mutable Reference

// Automatic dereferencing
ref_p.x = 10;  // Automatic dereferencing
// or explicitly with *
(*ref_p).x = 10;  // Explicit dereferencing also possible

// Raw Pointers: Explicit dereferencing (unsafe)
let raw_ptr: *mut Point = &mut p;
unsafe {
    (*raw_ptr).x = 20;  // Explicit dereferencing in unsafe block
}
```

**Special features:**
- References (&): Automatic dereferencing, ownership-based
- Raw Pointers (*): Explicit dereferencing, only in unsafe blocks
- References are safer than raw pointers

**Further reading:**
- [The Rust Book - References and Borrowing](https://doc.rust-lang.org/book/ch04-02-references-and-borrowing.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// References: Automatic dereferencing
class Point {
    var x: Int
    var y: Int
    init(x: Int, y: Int) {
        self.x = x
        self.y = y
    }
}

let p = Point(x: 1, y: 2)
let ref = p  // Reference (all classes are reference types)

// Automatic dereferencing
ref.x = 10  // Automatic dereferencing, p.x becomes 10
// No explicit dereferencing needed
```

**Special features:**
- Only references, no explicit pointers
- Classes are automatically reference types
- Automatic dereferencing on all accesses

**Further reading:**
- [Swift Documentation - Classes](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/classesandstructures/)

</TabItem>
<TabItem value="v" label="V">

```v
// References: Automatic dereferencing
struct Point {
    x int
    y int
}

mut p := Point{x: 1, y: 2}
mut ref := &p  // Reference

// Automatic dereferencing
ref.x = 10  // Automatic dereferencing, p.x becomes 10
// No explicit dereferencing needed
```

**Special features:**
- Only references, no explicit pointers
- Automatic dereferencing on all accesses
- All values are immutable by default (mut required)

**Further reading:**
- [V Documentation - References](https://github.com/vlang/v/blob/master/doc/docs.md#references)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Pointers: Explicit dereferencing required
const Point = struct {
    x: i32,
    y: i32,
};

var p = Point{ .x = 1, .y = 2 };
const ptr: *Point = &p;  // Pointer

// Explicit dereferencing with .*
ptr.*.x = 10;  // Explicit dereferencing
// or automatically for structs
ptr.x = 10;  // Automatic dereferencing for structs
```

**Special features:**
- Only pointers, no references
- Explicit dereferencing with .*, automatic for struct fields
- Explicit pointer management required

**Further reading:**
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
  ptr := @x;        // Take address
  ptr^ := 100;      // Dereference

  // References (Objects are always references)
  obj1 := TObject.Create;
  obj2 := obj1;     // Reference copy, not object copy
end;
```

**Special features:**
- `^TypeName` for typed pointers
- `@` to take address, `^` to dereference
- Class variables are implicit references (no explicit `^`)
- Records are value types, classes are reference types

**Further reading:**
- [Free Pascal Documentation - Pointers](https://www.freepascal.org/docs-html/ref/refse16.html)

</TabItem>
</Tabs>


## 3.3.4. Equality and Identity

### Referential Equality


Checks whether two variables refer to the same object in memory (identity), regardless of the object's content.


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

// Pointer comparison (==)
if (ptr1 == ptr2) {
    // true: Both point to p1
}
if (ptr1 == ptr3) {
    // false: Point to different objects
}
```

**Special features:**
- Pointer comparison with == checks whether both point to the same object
- Structural equality must be implemented manually

**Further reading:**
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
    // true: Both point to p1
}
if (ptr1 == ptr3) {
    // false: Point to different objects
}
```

**Special features:**
- Pointer comparison with == checks whether both point to the same object
- Experimental language, syntax may still change

**Further reading:**
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

// Pointer comparison (==)
if (ptr1 == ptr2) {
    // true: Both point to p1
}
if (ptr1 == ptr3) {
    // false: Point to different objects
}

// Reference comparison
Point& ref1 = p1;
Point& ref2 = p1;
if (&ref1 == &ref2) {
    // true: Both are aliases for p1
}
```

**Special features:**
- Pointer comparison with == checks whether both point to the same object
- Reference address comparison with & checks identity
- std::addressof() for safe address retrieval

**Further reading:**
- [C++ Reference - Equality Operators](https://en.cppreference.com/w/cpp/language/operator_comparison)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Referential Equality: ReferenceEquals or == for reference types
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

// ReferenceEquals checks referential equality
if (ReferenceEquals(p1, p3)) {
    // true: Both point to the same object
}
if (ReferenceEquals(p1, p2)) {
    // false: Different objects
}

// == for reference types (can be overloaded)
if (p1 == p3) {
    // true: Both point to the same object
}
```

**Special features:**
- ReferenceEquals() always checks referential equality
- == for reference types checks referential equality (can be overloaded)
- == for value types checks structural equality

**Further reading:**
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

// is Operator checks referential equality
if (p1 is p3) {
    // true: Both point to the same object
}
if (p1 is p2) {
    // false: Different objects
}
```

**Special features:**
- is operator checks referential equality for reference types
- == can be overloaded for structural equality

**Further reading:**
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

// identical() checks referential equality
if (identical(p1, p3)) {
    // true: Both point to the same object
}
if (identical(p1, p2)) {
  // false: Different objects
}

// == checks structural equality (can be overloaded)
if (p1 == p2) {
  // false: Different objects (if == not overloaded)
}
```

**Special features:**
- identical() always checks referential equality
- == can be overloaded for structural equality
- Records (since Dart 3.0) have structural equality by default

**Further reading:**
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
    // true: Both point to p1
}
if ptr1 == ptr3 {
    // false: Point to different objects
}
```

**Special features:**
- Pointer comparison with == checks whether both point to the same object
- Structural equality must be implemented manually

**Further reading:**
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

// is Operator checks referential equality
if (p1.is(p3)) {
    // true: Both point to the same object
}
if (p1.is(p2)) {
    // false: Different objects
}

// == checks structural equality (equals())
if (p1 == p2) {
    // true: Structurally equal (if equals() overridden)
}
```

**Special features:**
- is() checks referential equality
- == checks structural equality (equals())
- .is() is identical to Java's == for objects

**Further reading:**
- [Groovy Documentation - Operators](https://groovy-lang.org/operators.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Referential Equality: == operator for objects
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

// == checks referential equality for objects
if (p1 == p3) {
    // true: Both point to the same object
}
if (p1 == p2) {
    // false: Different objects
}

// equals() checks structural equality
if (p1.equals(p2)) {
    // true: Structurally equal (if equals() overridden)
}
```

**Special features:**
- == checks referential equality for objects
- equals() checks structural equality
- == for primitive types checks value equality

**Further reading:**
- [Oracle Java Documentation - Equality](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/op2.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Referential Equality: === Operator
const p1 = { x: 1, y: 2 };
const p2 = { x: 1, y: 2 };
const p3 = p1;

// === checks referential equality for objects
if (p1 === p3) {
    // true: Both point to the same object
}
if (p1 === p2) {
    // false: Different objects
}

// == checks value equality with type coercion
if (p1 == p2) {
    // false: Different objects (no type coercion for objects)
}
```

**Special features:**
- === checks referential equality for objects
- == checks value equality with type coercion
- === for primitive types checks value equality without coercion

**Further reading:**
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

# === checks referential equality
if p1 === p3
    # true: Both point to the same object
end
if p1 === p2
    # false: Different objects
end

# == checks structural equality
if p1 == p2
    # true: Structurally equal (if == overridden)
end
```

**Special features:**
- === checks referential equality (identity)
- == checks structural equality (can be overloaded)
- === for immutable types checks structural equality

**Further reading:**
- [Julia Documentation - Equality](https://docs.julialang.org/en/v1/base/base/#Base.:==)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Referential Equality: === Operator
class Point(var x: Int, var y: Int)

val p1 = Point(1, 2)
val p2 = Point(1, 2)
val p3 = p1

// === checks referential equality
if (p1 === p3) {
    // true: Both point to the same object
}
if (p1 === p2) {
    // false: Different objects
}

// == checks structural equality (equals())
if (p1 == p2) {
    // true: Structurally equal (if equals() overridden)
}
```

**Special features:**
- === checks referential equality
- == checks structural equality (equals())
- Data classes have structural equality by default

**Further reading:**
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

# is Operator checks referential equality
if p1 is p3:
    # true: Both point to the same object
if p1 is p2:
    # false: Different objects

# == checks structural equality
if p1 == p2:
    # true: Structurally equal (if == overridden)
```

**Special features:**
- is operator checks referential equality for ref types
- == checks structural equality (can be overloaded)
- is for value types checks structural equality

**Further reading:**
- [Nim Documentation - Equality](https://nim-lang.org/docs/manual.html#procedures-equality-operators)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Referential Equality: == operator for pointers
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

// == checks referential equality (Pointer-Vergleich)
if (p1 == p3) {
    // true: Both point to the same object
}
if (p1 == p2) {
    // false: Different objects
}

// isEqual: checks structural equality
if ([p1 isEqual:p2]) {
    // true: Structurally equal (if isEqual: overridden)
}
```

**Special features:**
- == checks referential equality (Pointer-Vergleich)
- isEqual: checks structural equality
- All objects are pointers

**Further reading:**
- [Apple Objective-C Documentation - NSObject](https://developer.apple.com/documentation/objectivec/nsobject)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Referential Equality: == Operator *)
type point = { x : int; y : int }

let p1 = { x = 1; y = 2 }
let p2 = { x = 1; y = 2 }
let p3 = p1

(* == checks referential equality *)
if p1 == p3 then
    (* true: Beide zeigen auf dasselbe Objekt *)
    ()
if p1 == p2 then
    (* false: Verschiedene Objekte *)
    ()

(* = checks structural equality *)
if p1 = p2 then
    (* true: Strukturell gleich *)
    ()
```

**Special features:**
- == checks referential equality (physikalische Gleichheit)
- = checks structural equality
- == for immutable types checks structural equality (since identical values can be shared)

**Further reading:**
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
    // true: Both point to p1
}
if ptr1 == ptr3 {
    // false: Point to different objects
}
```

**Special features:**
- Pointer comparison with == checks whether both point to the same object
- Structural equality must be implemented manually

**Further reading:**
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

# is Operator checks referential equality
if p1 is p3:
    # True: Beide zeigen auf dasselbe Objekt
    pass
if p1 is p2:
    # False: Verschiedene Objekte
    pass

# == checks structural equality (__eq__)
if p1 == p2:
    # True: Structurally equal (if __eq__ overridden)
    pass
```

**Special features:**
- is Operator checks referential equality (Identität)
- == checks structural equality (__eq__)
- is for primitive types can yield unexpected results due to interning

**Further reading:**
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

# equal? checks referential equality
if p1.equal?(p3)
  # true: Beide zeigen auf dasselbe Objekt
end
if p1.equal?(p2)
  # false: Verschiedene Objekte
end

# == checks structural equality
if p1 == p2
    # true: Structurally equal (if == overridden)
end
```

**Special features:**
- equal? checks referential equality (Identität)
- == checks structural equality (can be overridden)
- equal? corresponds to Object#equal? and should not be overridden

**Further reading:**
- [Ruby Documentation - Object](https://ruby-doc.org/core-3.1.0/Object.html#method-i-equal-3F)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Referential Equality: std::ptr::eq() for raw pointers
struct Point {
    x: i32,
    y: i32,
}

let p1 = Point { x: 1, y: 2 };
let p2 = Point { x: 1, y: 2 };
let ref1 = &p1;
let ref2 = &p1;
let ref3 = &p2;

// std::ptr::eq() checks referential equality for raw pointers
use std::ptr;
if ptr::eq(ref1, ref2) {
    // true: Both point to p1
}
if ptr::eq(ref1, ref3) {
    // false: Point to different objects
}

// == for references checks structural equality
if *ref1 == *ref3 {
    // true: Structurally equal (if PartialEq implemented)
}
```

**Special features:**
- std::ptr::eq() checks referential equality for raw pointers
- == for references checks structural equality (PartialEq)
- References cannot be directly compared for identity (only via raw pointers)

**Further reading:**
- [Rust Documentation - std::ptr::eq](https://doc.rust-lang.org/std/ptr/fn.eq.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Referential Equality: eq Methode
class Point(var x: Int, var y: Int)

val p1 = new Point(1, 2)
val p2 = new Point(1, 2)
val p3 = p1

// eq checks referential equality
if (p1.eq(p3)) {
    // true: Both point to the same object
}
if (p1.eq(p2)) {
    // false: Different objects
}

// == checks structural equality (equals())
if (p1 == p2) {
    // true: Structurally equal (if equals() overridden)
}
```

**Special features:**
- eq checks referential equality
- == checks structural equality (equals())
- Case classes have structural equality by default

**Further reading:**
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

// === checks referential equality
if p1 === p3 {
    // true: Both point to the same object
}
if p1 === p2 {
    // false: Different objects
}

// == checks structural equality (Equatable)
if p1 == p2 {
    // true: Structurally equal (if Equatable implemented)
}
```

**Special features:**
- === checks referential equality (Identität)
- == checks structural equality (Equatable)
- === only works for reference types (classes)

**Further reading:**
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

// === checks referential equality for objects
if (p1 === p3) {
    // true: Both point to the same object
}
if (p1 === p2) {
    // false: Different objects
}

// == checks value equality with type coercion
if (p1 == p2) {
    // false: Different objects (no type coercion for objects)
}
```

**Special features:**
- === checks referential equality for objects (corresponds to JavaScript)
- == checks value equality with type coercion
- === for primitive types checks value equality without coercion

**Further reading:**
- [TypeScript Handbook - Basic Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Referential Equality: ReferenceEquals or Is operator
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

' ReferenceEquals checks referential equality
If ReferenceEquals(p1, p3) Then
    ' True: Beide zeigen auf dasselbe Objekt
End If
If ReferenceEquals(p1, p2) Then
    ' False: Verschiedene Objekte
End If

' Is operator also checks referential equality
If p1 Is p3 Then
    ' True: Beide zeigen auf dasselbe Objekt
End If
```

**Special features:**
- ReferenceEquals() checks referential equality
- Is Operator checks referential equality
- = operator checks structural equality (can be overloaded)

**Further reading:**
- [Microsoft VB.NET Documentation - Is Operator](https://learn.microsoft.com/en-us/dotnet/visual-basic/language-reference/operators/is-operator)

</TabItem>
<TabItem value="v" label="V">

```v
// Referential Equality: == operator for references
struct Point {
    x int
    y int
}

mut p1 := Point{x: 1, y: 2}
mut p2 := Point{x: 1, y: 2}
mut ref1 := &p1
mut ref2 := &p1
mut ref3 := &p2

// == checks referential equality for references
if ref1 == ref2 {
    // true: Both point to p1
}
if ref1 == ref3 {
    // false: Point to different objects
}
```

**Special features:**
- == checks referential equality for references
- Structural equality must be implemented manually

**Further reading:**
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

// Pointer comparison (==)
if (ptr1 == ptr2) {
    // true: Both point to p1
}
if (ptr1 == ptr3) {
    // false: Point to different objects
}
```

**Special features:**
- Pointer comparison with == checks whether both point to the same object
- Structural equality must be implemented manually

**Further reading:**
- [Zig Documentation - Operators](https://ziglang.org/documentation/0.11.0/#Operators)

</TabItem>
</Tabs>



---

### Structural Equality


Checks whether two objects have the same content (are structurally equal), regardless of whether they are the same object in memory.


<Tabs availableTabs={['ada', 'carbon', 'cpp', 'csharp', 'd', 'dart', 'eiffel', 'elm', 'fsharp', 'go', 'groovy', 'haskell', 'java', 'julia', 'koka', 'kotlin', 'lean4', 'mercury', 'nim', 'objective-c', 'ocaml', 'prolog', 'python', 'roc', 'ruby', 'rust', 'scala', 'swift', 'v', 'vbnet']} orangeTabs={['c', 'javascript', 'odin', 'typescript', 'zig']}>
<TabItem value="ada" label="Ada">

```ada
-- Structural Equality: = operator for records
type Point is record
    x : Integer;
    y : Integer;
end record;

p1 : Point := (x => 1, y => 2);
p2 : Point := (x => 1, y => 2);
p3 : Point := (x => 3, y => 4);

-- = checks structural equality
if p1 = p2 then
    -- true: Structurally equal
    null;
end if;
if p1 = p3 then
    -- false: Structurally different
    null;
end if;
```

**Special features:**
- = operator checks structural equality for records
- Automatic for all record components
- /= checks structural inequality

**Further reading:**
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

// Manual function for structural equality
int point_equal(struct Point a, struct Point b) {
    return a.x == b.x && a.y == b.y;
}

if (point_equal(p1, p2)) {
    // true: Structurally equal
}
if (point_equal(p1, p3)) {
    // false: Structurally different
}
```

**Special features:**
- No built-in structural equality for structs
- Must be implemented manually
- == for structs is not defined

**Further reading:**
- [C Standard - Comparison Operators](https://en.cppreference.com/w/c/language/operator_comparison)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Structural Equality: == operator (if implemented)
struct Point {
    var x: i32;
    var y: i32;
}

var p1: Point = {.x = 1, .y = 2};
var p2: Point = {.x = 1, .y = 2};
var p3: Point = {.x = 3, .y = 4};

// == checks structural equality (if implemented)
if (p1 == p2) {
    // true: Structurally equal
}
if (p1 == p3) {
    // false: Structurally different
}
```

**Special features:**
- == operator checks structural equality (if implemented)
- Experimental language, syntax may still change

**Further reading:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Structural Equality: == operator (if overloaded)
struct Point {
    int x;
    int y;
    
    // Overloading of == for structural equality
    bool operator==(const Point& other) const {
        return x == other.x && y == other.y;
    }
};

Point p1 = {1, 2};
Point p2 = {1, 2};
Point p3 = {3, 4};

// == checks structural equality
if (p1 == p2) {
    // true: Structurally equal
}
if (p1 == p3) {
    // false: Structurally different
}
```

**Special features:**
- == operator can be overloaded for structural equality
- Since C++20: Default comparison with operator==() = default
- != can be automatically generated from == (since C++20)

**Further reading:**
- [C++ Reference - Comparison Operators](https://en.cppreference.com/w/cpp/language/operator_comparison)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Structural Equality: Equals() method
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

// Equals() checks structural equality
if (p1.Equals(p2)) {
    // true: Structurally equal
}

// Records have automatic structural equality (since C# 9.0)
record PointRecord(int X, int Y);
var r1 = new PointRecord(1, 2);
var r2 = new PointRecord(1, 2);
if (r1 == r2) {
    // true: Records use structural equality for ==
}
```

**Special features:**
- Equals() checks structural equality (must be manually overridden for structs)
- `==` operator is not automatically defined for custom structs (must be explicitly overloaded)
- Records (since C# 9.0) have automatic structural equality for `==`
- GetHashCode() should always be overridden together with Equals()

**Further reading:**
- [Microsoft C# Documentation - Equality Operators](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/equality-operators)

</TabItem>
<TabItem value="d" label="D">

```d
// Structural Equality: == operator (if overloaded)
struct Point {
    int x;
    int y;
    
    // Overloading of == for structural equality
    bool opEquals(const Point other) const {
        return x == other.x && y == other.y;
    }
}

Point p1 = Point(1, 2);
Point p2 = Point(1, 2);
Point p3 = Point(3, 4);

// == checks structural equality
if (p1 == p2) {
    // true: Structurally equal
}
if (p1 == p3) {
    // false: Structurally different
}
```

**Special features:**
- == operator can be overloaded for structural equality
- opEquals() must be implemented
- != is automatically generated from ==

**Further reading:**
- [D Language Specification - Operator Overloading](https://dlang.org/spec/operatoroverloading.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Structural Equality: == operator (if overloaded)
class Point {
  int x;
  int y;
  Point(this.x, this.y);
  
  // == for structural equality
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

// == checks structural equality
if (p1 == p2) {
  // true: Strukturell gleich
}
if (p1 == p3) {
  // false: Strukturell unterschiedlich
}
```

**Special features:**
- == operator can be overloaded for structural equality
- hashCode must also be overridden
- Records (since Dart 3.0) have structural equality by default

**Further reading:**
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
    
    -- is_equal() for structural equality
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

-- is_equal() checks structural equality
if p1.is_equal(p2) then
    -- true: Structurally equal
end
```

**Special features:**
- is_equal() checks structural equality
- Must be overridden for custom types
- = Operator verwendet is_equal()

**Further reading:**
- [Eiffel Documentation - Equality](https://www.eiffel.org/doc/eiffel/Language)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Structural Equality: = operator (automatic for records)
type Point = { x: int; y: int }

let p1 = { x = 1; y = 2 }
let p2 = { x = 1; y = 2 }
let p3 = { x = 3; y = 4 }

// = checks structural equality
if p1 = p2 then
    // true: Structurally equal
    ()
if p1 = p3 then
    // false: Structurally different
    ()
```

**Special features:**
- `=` operator checks structural equality (automatic for records)
- `<>` checks structural inequality
- Automatic for all record components

**Further reading:**
- [F# Documentation - Equality](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/symbol-and-operator-reference/)

</TabItem>
<TabItem value="go" label="Go">

```go
// Structural Equality: == operator (for comparable types)
type Point struct {
    x int
    y int
}

p1 := Point{x: 1, y: 2}
p2 := Point{x: 1, y: 2}
p3 := Point{x: 3, y: 4}

// == checks structural equality (for comparable fields)
if p1 == p2 {
    // true: Structurally equal
}
if p1 == p3 {
    // false: Structurally different
}
```

**Special features:**
- == operator checks structural equality for structs with comparable fields
- Only works if all fields are comparable
- != checks structural inequality

**Further reading:**
- [Go Documentation - Comparison Operators](https://go.dev/ref/spec#Comparison_operators)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Structural Equality: equals() method or == operator
class Point {
    int x
    int y
    
    // equals() for structural equality
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

// == checks structural equality (verwendet equals())
if (p1 == p2) {
    // true: Structurally equal
}
if (p1 == p3) {
    // false: Structurally different
}
```

**Special features:**
- == Operator checks structural equality (verwendet equals())
- equals() must be overridden
- hashCode() must also be overridden

**Further reading:**
- [Groovy Documentation - Operators](https://groovy-lang.org/operators.html)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Structural Equality: == operator (automatic with Eq typeclass)
data Point = Point { x :: Int, y :: Int }
    deriving (Eq)

p1 :: Point
p1 = Point { x = 1, y = 2 }
p2 :: Point
p2 = Point { x = 1, y = 2 }
p3 :: Point
p3 = Point { x = 3, y = 4 }

-- == checks structural equality
if p1 == p2 then
    -- True: Strukturell gleich
    True
else
    False
```

**Special features:**
- == Operator checks structural equality (Eq Typeclass)
- Automatisch mit deriving (Eq)
- /= checks structural inequality

**Further reading:**
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
    
    // equals() for structural equality
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

// equals() checks structural equality
if (p1.equals(p2)) {
    // true: Structurally equal
}
if (p1.equals(p3)) {
    // false: Structurally different
}
```

**Special features:**
- equals() checks structural equality
- hashCode() must also be overridden
- Records (since Java 14) have structural equality by default

**Further reading:**
- [Oracle Java Documentation - equals](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#equals-java.lang.Object-)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Structural Equality: Manual implementation or libraries
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    
    // equals() for structural equality
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

// equals() checks structural equality
if (p1.equals(p2)) {
    // true: Structurally equal
}
if (p1.equals(p3)) {
    // false: Structurally different
}

// === checks referential equality, nicht strukturelle Gleichheit
if (p1 === p2) {
    // false: Different objects
}
```

**Special features:**
- Keine eingebaute strukturelle Gleichheit für Objects
- Muss manuell implementiert werden
- === checks referential equality, nicht strukturelle Gleichheit

**Further reading:**
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

# == checks structural equality
if p1 == p2
    # true: Strukturell gleich
end
if p1 == p3
    # false: Strukturell unterschiedlich
end
```

**Special features:**
- == Operator checks structural equality (kann überladen werden)
- Automatisch für Structs mit vergleichbaren Feldern
- === checks referential equality (Identität)

**Further reading:**
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

// == checks structural equality
val eq1 = p1 == p2  // True: strukturell gleich
val eq2 = p1 == p3  // False: strukturell unterschiedlich
```

**Special features:**
- `==` checks structural equality
- Automatisch für alle Typen mit vergleichbaren Feldern generiert
- Keine Referenzgleichheit (Koka hat keine Objekt-Identität)
- Alle Werte sind immutable, daher ist strukturelle Gleichheit die einzige relevante Gleichheit

**Further reading:**
- [Koka Standard Library - Equality](https://koka-lang.github.io/koka/doc/std_core_types.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Structural Equality: equals() method or == operator
class Point(var x: Int, var y: Int) {
    // equals() for structural equality
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

// == checks structural equality (uses equals())
if (p1 == p2) {
    // true: Structurally equal
}
if (p1 == p3) {
    // false: Structurally different
}
```

**Special features:**
- == operator checks structural equality (uses equals())
- equals() must be overridden
- Data Classes have structural equality by default

**Further reading:**
- [Kotlin Documentation - Equality](https://kotlinlang.org/docs/equality.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Structural Equality: BEq Type Class and == operator
structure Point where
  x : Int
  y : Int
  deriving BEq

def p1 : Point := { x := 1, y := 2 }
def p2 : Point := { x := 1, y := 2 }
def p3 : Point := { x := 3, y := 4 }

-- == checks structural equality
#eval p1 == p2  -- true
#eval p1 == p3  -- false

-- Propositional equality in the type system
example : 2 + 3 = 5 := rfl
```

**Special features:**
- `BEq` Type Class for `==` operator (boolean equality)
- `deriving BEq` for automatic equality implementation
- Propositional equality `=` in the type system (provable with `rfl`)
- `DecidableEq` for decidable equality
- No reference equality (no `===`)

**Further reading:**
- [Lean 4 Documentation - Type Classes](https://lean-lang.org/theorem_proving_in_lean4/type_classes.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```mercury
% Structural Equality: Unification (=) checks structural equality
:- type point
    --->    point(x :: int, y :: int).

:- pred main(io::di, io::uo) is det.
main(!IO) :-
    P1 = point(1, 2),
    P2 = point(1, 2),
    P3 = point(3, 4),

    % Unification (=) checks structural equality
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

**Special features:**
- Unification (`=`) checks structural equality (not reference equality).
- There is no reference equality, as all types are Value Types.
- For custom types, equality is automatically determined based on structure.
- The `comparison` type class enables comparison operations (`<`, `>`, `=<`, `>=`).

**Further reading:**
- [The Mercury Language Reference Manual - Comparison](https://www.mercurylang.org/documentation/reference.html#Comparison)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Structural Equality: == operator (can be overloaded)
type Point = object
    x: int
    y: int

# == for structural equality
proc `==`(a, b: Point): bool =
    return a.x == b.x and a.y == b.y

var p1 = Point(x: 1, y: 2)
var p2 = Point(x: 1, y: 2)
var p3 = Point(x: 3, y: 4)

# == checks structural equality
if p1 == p2:
    # true: Structurally equal
    discard
if p1 == p3:
    # false: Structurally different
    discard
```

**Special features:**
- == operator checks structural equality (can be overloaded)
- Automatic for Value Types with comparable fields
- != is automatically generated from ==

**Further reading:**
- [Nim Documentation - Equality Operators](https://nim-lang.org/docs/manual.html#procedures-equality-operators)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Structural Equality: isEqual: method
@interface Point : NSObject
@property int x;
@property int y;
@end

@implementation Point
// isEqual: for structural equality
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

// isEqual: checks structural equality
if ([p1 isEqual:p2]) {
    // true: Structurally equal
}
```

**Special features:**
- isEqual: checks structural equality
- hash must also be overridden
- == checks reference equality (pointer comparison)

**Further reading:**
- [Apple Objective-C Documentation - NSObject](https://developer.apple.com/documentation/objectivec/nsobject)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Structural Equality: = operator (automatic for Records) *)
type point = { x : int; y : int }

let p1 = { x = 1; y = 2 }
let p2 = { x = 1; y = 2 }
let p3 = { x = 3; y = 4 }

(* = checks structural equality *)
if p1 = p2 then
    (* true: Structurally equal *)
    ()
if p1 = p3 then
    (* false: Structurally different *)
    ()
```

**Special features:**
- `=` operator checks structural equality (automatic for Records)
- `<>` checks structural inequality
- `==` checks reference equality (physical equality)

**Further reading:**
- [OCaml Documentation - Equality](https://ocaml.org/manual/coreexamples.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Structural Equality: Manual implementation
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

// Manual function for structural equality
if point_equal(p1, p2) {
    // true: Structurally equal
}
if point_equal(p1, p3) {
    // false: Structurally different
}
```

**Special features:**
- No built-in structural equality for Structs
- Must be implemented manually
- == for Structs is not defined

**Further reading:**
- [Odin Documentation - Operators](https://odin-lang.org/docs/overview/)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Structural Equality: ==/2 operator
% Checks whether two terms are structurally identical (without unification).

% Simple terms
% ?- 42 == 42.
% true.
% ?- hello == hello.
% true.
% ?- hello == world.
% false.

% Complex terms (structures)
% ?- point(1, 2) == point(1, 2).
% true.
% ?- point(1, 2) == point(3, 4).
% false.

% Difference from unification (=)
% ?- X == Y.
% false.   (X and Y are different unbound variables)
% ?- X = Y.
% true.    (Unification binds X to Y)

% Lists
% ?- [1, 2, 3] == [1, 2, 3].
% true.
% ?- [1, 2, 3] == [1, 2, 4].
% false.
```

**Special features:**
- `==/2` checks structural equality without unification (variables are not bound)
- `=/2` (unification) attempts to make terms equal through variable binding
- `\==/2` checks structural inequality
- Structural equality requires exact match of functor, arity, and all arguments

**Further reading:**
- [SWI-Prolog - Comparison and Unification of Terms](https://www.swi-prolog.org/pldoc/man?section=compare)

</TabItem>
<TabItem value="python" label="Python">

```python
# Structural Equality: __eq__() method or == operator
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    # __eq__() for structural equality
    def __eq__(self, other):
        if isinstance(other, Point):
            return self.x == other.x and self.y == other.y
        return False
    
    def __hash__(self):
        return hash((self.x, self.y))

p1 = Point(1, 2)
p2 = Point(1, 2)
p3 = Point(3, 4)

# == checks structural equality (uses __eq__())
if p1 == p2:
    # True: Structurally equal
    pass
if p1 == p3:
    # False: Structurally different
    pass
```

**Special features:**
- == operator checks structural equality (uses __eq__())
- __eq__() must be overridden
- __hash__() must also be overridden if objects are used in Sets/Dicts

**Further reading:**
- [Python Documentation - Comparisons](https://docs.python.org/3/reference/expressions.html#comparisons)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Structural Equality: == method
class Point
  attr_accessor :x, :y
  def initialize(x, y)
    @x = x
    @y = y
  end
  
  # == for structural equality
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

# == checks structural equality
if p1 == p2
  # true: Structurally equal
end
if p1 == p3
  # false: Structurally different
end
```

**Special features:**
- == method checks structural equality
- Must be overridden for custom types
- equal? checks reference equality (identity)

**Further reading:**
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

// == checks structural equality
if p1 == p2 {
    // true: Structurally equal
}
if p1 == p3 {
    // false: Structurally different
}
```

**Special features:**
- PartialEq Trait enables structural equality
- Automatic with #[derive(PartialEq)]
- != is automatically generated from ==

**Further reading:**
- [The Rust Book - Derived Traits](https://doc.rust-lang.org/book/appendix-03-derivable-traits.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Structural Equality: equals() method or == operator
class Point(var x: Int, var y: Int) {
    // equals() for structural equality
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

// == checks structural equality (uses equals())
if (p1 == p2) {
    // true: Structurally equal
}
if (p1 == p3) {
    // false: Structurally different
}
```

**Special features:**
- == operator checks structural equality (uses equals())
- equals() must be overridden
- Case Classes have structural equality by default

**Further reading:**
- [Scala Documentation - Equality](https://docs.scala-lang.org/tour/unified-types.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Structural Equality: Equatable Protocol
struct Point: Equatable {
    var x: Int
    var y: Int
    
    // Automatic with Equatable (if all fields are Equatable)
    // or manual:
    static func == (lhs: Point, rhs: Point) -> Bool {
        return lhs.x == rhs.x && lhs.y == rhs.y
    }
}

let p1 = Point(x: 1, y: 2)
let p2 = Point(x: 1, y: 2)
let p3 = Point(x: 3, y: 4)

// == checks structural equality
if p1 == p2 {
    // true: Structurally equal
}
if p1 == p3 {
    // false: Structurally different
}
```

**Special features:**
- Equatable Protocol enables structural equality
- Automatic if all fields are Equatable
- != is automatically generated from ==

**Further reading:**
- [Swift Documentation - Equatable](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/protocols/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Structural Equality: Manual implementation
class Point {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    
    // equals() for structural equality
    equals(other: Point): boolean {
        return this.x === other.x && this.y === other.y;
    }
}

const p1 = new Point(1, 2);
const p2 = new Point(1, 2);
const p3 = new Point(3, 4);

// equals() checks structural equality
if (p1.equals(p2)) {
    // true: Structurally equal
}
if (p1.equals(p3)) {
    // false: Structurally different
}

// === checks reference equality, not structural equality
if (p1 === p2) {
    // false: Different objects
}
```

**Special features:**
- No built-in structural equality for Objects
- Must be implemented manually
- === checks reference equality, not structural equality

**Further reading:**
- [TypeScript Handbook - Basic Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Structural Equality: Equals() method or = operator
Class Point
    Public x As Integer
    Public y As Integer
    Sub New(x As Integer, y As Integer)
        Me.x = x
        Me.y = y
    End Sub
    
    ' Equals() for structural equality
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

' Equals() checks structural equality
If p1.Equals(p2) Then
    ' True: Structurally equal
End If
```

**Special features:**
- Equals() checks structural equality
- GetHashCode() must also be overridden
- = operator uses Equals() for Objects

**Further reading:**
- [Microsoft VB.NET Documentation - Equals](https://learn.microsoft.com/en-us/dotnet/api/system.object.equals)

</TabItem>
<TabItem value="v" label="V">

```v
// Structural Equality: == operator (for comparable types)
struct Point {
    x int
    y int
}

p1 := Point{x: 1, y: 2}
p2 := Point{x: 1, y: 2}
p3 := Point{x: 3, y: 4}

// == checks structural equality (for comparable fields)
if p1 == p2 {
    // true: Structurally equal
}
if p1 == p3 {
    // false: Structurally different
}
```

**Special features:**
- == operator checks structural equality for Structs with comparable fields
- Only works if all fields are comparable
- != checks structural inequality

**Further reading:**
- [V Documentation - Operators](https://github.com/vlang/v/blob/master/doc/docs.md#operators)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Structural Equality: Manual implementation
const Point = struct {
    x: i32,
    y: i32,
    
    // equals() for structural equality
    pub fn equals(self: Point, other: Point) bool {
        return self.x == other.x and self.y == other.y;
    }
};

const p1 = Point{ .x = 1, .y = 2 };
const p2 = Point{ .x = 1, .y = 2 };
const p3 = Point{ .x = 3, .y = 4 };

// Manual function for structural equality
if (p1.equals(p2)) {
    // true: Structurally equal
}
if (p1.equals(p3)) {
    // false: Structurally different
}
```

**Special features:**
- No built-in structural equality for Structs
- Must be implemented manually
- == for Structs is not defined

**Further reading:**
- [Zig Documentation - Operators](https://ziglang.org/documentation/0.11.0/#Operators)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Structural Equality
list1 = [1, 2, 3]
list2 = [1, 2, 3]

result = list1 == list2  -- True (structural equality)

-- Records
p1 = { x = 1, y = 2 }
p2 = { x = 1, y = 2 }

equal = p1 == p2  -- True
```

**Special features:**
- `==` always compares structurally (value comparison)
- No reference equality available
- Works with all types except functions
- All values are immutable, so structural equality is the only meaningful comparison

**Further reading:**
- [Elm Documentation - Operators](https://package.elm-lang.org/packages/elm/core/latest/Basics)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Structural Equality
p1 = { x: 1, y: 2 }
p2 = { x: 1, y: 2 }

result = p1 == p2
```

**Special features:**
- `==` compares structurally (value equality)
- No reference equality
- Works automatically for all types that implement `Eq`

**Further reading:**
- [Roc Documentation](https://www.roc-lang.org/tutorial)

</TabItem>
</Tabs>



---

### Identity and Equality Operators


Various operators and methods for checking identity (reference equality) and equality (structural equality) between objects.


<Tabs availableTabs={['c', 'carbon', 'common-lisp', 'cpp', 'csharp', 'd', 'dart', 'go', 'groovy', 'java', 'javascript', 'julia', 'kotlin', 'mercury', 'nim', 'objective-c', 'ocaml', 'odin', 'prolog', 'python', 'ruby', 'rust', 'scala', 'swift', 'typescript', 'v', 'vbnet', 'zig']}>
<TabItem value="c" label="C">

```c
// Equality Operators: ==, !=
int x = 42;
int y = 42;
int z = 10;

if (x == y) {
    // true: Value equality
}
if (x != z) {
    // true: Value inequality
}

// Pointer comparison (identity)
struct Point { int x; int y; };
struct Point p1 = {1, 2};
struct Point* ptr1 = &p1;
struct Point* ptr2 = &p1;

if (ptr1 == ptr2) {
    // true: Both point to the same object (identity)
}
```

**Special features:**
- == checks value equality for primitive types
- == checks identity for pointers (point to the same object)
- != checks inequality

**Further reading:**
- [C Standard - Equality Operators](https://en.cppreference.com/w/c/language/operator_comparison)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Equality Operators: ==, !=
var x: i32 = 42;
var y: i32 = 42;
var z: i32 = 10;

if (x == y) {
    // true: Value equality
}
if (x != z) {
    // true: Value inequality
}

// Pointer comparison (identity)
var p1: Point = {.x = 1, .y = 2};
var ptr1: Point* = &p1;
var ptr2: Point* = &p1;

if (ptr1 == ptr2) {
    // true: Both point to the same object (identity)
}
```

**Special features:**
- == checks value equality for primitive types
- == checks identity for pointers
- Experimental language, syntax may still change

**Further reading:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Equality Operators: ==, !=
int x = 42;
int y = 42;
int z = 10;

if (x == y) {
    // true: Value equality
}
if (x != z) {
    // true: Value inequality
}

// Pointer comparison (identity)
Point p1 = {1, 2};
Point* ptr1 = &p1;
Point* ptr2 = &p1;

if (ptr1 == ptr2) {
    // true: Both point to the same object (identity)
}

// Reference address comparison
Point& ref1 = p1;
Point& ref2 = p1;
if (&ref1 == &ref2) {
    // true: Both are aliases for p1 (identity)
}
```

**Special features:**
- == checks value equality for primitive types
- == can be overloaded for custom types
- == checks identity for pointers
- &ref checks identity for references

**Further reading:**
- [C++ Reference - Equality Operators](https://en.cppreference.com/w/cpp/language/operator_comparison)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Equality Operators: ==, !=, ReferenceEquals, Equals
int x = 42;
int y = 42;
int z = 10;

if (x == y) {
    // true: Value equality
}
if (x != z) {
    // true: Value inequality
}

// Reference Types
Point p1 = new Point(1, 2);
Point p2 = new Point(1, 2);
Point p3 = p1;

// == for Reference Types checks reference equality (can be overloaded)
if (p1 == p3) {
    // true: Reference equality
}

// ReferenceEquals() always checks reference equality
if (ReferenceEquals(p1, p3)) {
    // true: Reference equality
}

// Equals() checks structural equality
if (p1.Equals(p2)) {
    // true: Structural equality
}
```

**Special features:**
- == checks value equality for Value Types
- == checks reference equality for Reference Types (can be overloaded)
- ReferenceEquals() always checks reference equality
- Equals() checks structural equality

**Further reading:**
- [Microsoft C# Documentation - Equality Operators](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/equality-operators)

</TabItem>
<TabItem value="d" label="D">

```d
// Equality Operators: ==, !=, is
int x = 42;
int y = 42;
int z = 10;

if (x == y) {
    // true: Value equality
}
if (x != z) {
    // true: Value inequality
}

// Reference Types
Point p1 = new Point(1, 2);
Point p2 = new Point(1, 2);
Point p3 = p1;

// is operator checks reference equality for Reference Types
if (p1 is p3) {
    // true: Reference equality
}

// == checks structural equality (can be overloaded)
if (p1 == p2) {
    // true: Structural equality (if overloaded)
}
```

**Special features:**
- == checks value equality for primitive types
- is checks reference equality for Reference Types
- == checks structural equality (can be overloaded)

**Further reading:**
- [D Language Specification - Equality Operators](https://dlang.org/spec/expression.html#identity_expressions)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Equality Operators: ==, !=, identical()
int x = 42;
int y = 42;
int z = 10;

if (x == y) {
  // true: Value equality
}
if (x != z) {
  // true: Value inequality
}

// Reference Types
Point p1 = Point(1, 2);
Point p2 = Point(1, 2);
Point p3 = p1;

// identical() checks reference equality
if (identical(p1, p3)) {
  // true: Reference equality
}

// == checks structural equality (can be overloaded)
if (p1 == p2) {
  // true: Structural equality (if == overloaded)
}
```

**Special features:**
- == checks value equality for primitive types
- identical() checks reference equality
- == checks structural equality (can be overloaded)

**Further reading:**
- [Dart Documentation - Equality](https://dart.dev/guides/language/effective-dart/equality)

</TabItem>
<TabItem value="go" label="Go">

```go
// Equality Operators: ==, !=
x := 42
y := 42
z := 10

if x == y {
    // true: Value equality
}
if x != z {
    // true: Value inequality
}

// Pointer comparison (identity)
p1 := Point{x: 1, y: 2}
ptr1 := &p1
ptr2 := &p1

if ptr1 == ptr2 {
    // true: Both point to the same object (identity)
}

// Struct comparison (structural equality)
p2 := Point{x: 1, y: 2}
if p1 == p2 {
    // true: Structural equality (if all fields are comparable)
}
```

**Special features:**
- == checks value equality for primitive types
- == checks identity for pointers
- == checks structural equality for Structs (if all fields are comparable)

**Further reading:**
- [Go Documentation - Comparison Operators](https://go.dev/ref/spec#Comparison_operators)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Equality Operators: ==, !=, is()
int x = 42
int y = 42
int z = 10

if (x == y) {
    // true: Value equality
}
if (x != z) {
    // true: Value inequality
}

// Reference Types
def p1 = new Point(x: 1, y: 2)
def p2 = new Point(x: 1, y: 2)
def p3 = p1

// is() checks reference equality
if (p1.is(p3)) {
    // true: Reference equality
}

// == checks structural equality (uses equals())
if (p1 == p2) {
    // true: Structural equality (if equals() overridden)
}
```

**Special features:**
- == checks value equality for primitive types
- is() checks reference equality
- == checks structural equality (uses equals())

**Further reading:**
- [Groovy Documentation - Operators](https://groovy-lang.org/operators.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Equality Operators: ==, !=, equals()
int x = 42;
int y = 42;
int z = 10;

if (x == y) {
    // true: Value equality
}
if (x != z) {
    // true: Value inequality
}

// Reference Types
Point p1 = new Point(1, 2);
Point p2 = new Point(1, 2);
Point p3 = p1;

// == checks reference equality for Objects
if (p1 == p3) {
    // true: Reference equality
}

// equals() checks structural equality
if (p1.equals(p2)) {
    // true: Structural equality (if equals() overridden)
}
```

**Special features:**
- == checks value equality for primitive types
- == checks reference equality for Objects
- equals() checks structural equality

**Further reading:**
- [Oracle Java Documentation - Equality](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/op2.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Equality Operators: ==, ===, !=, !==
const x = 42;
const y = 42;
const z = 10;

// == checks value equality with Type Coercion
if (x == y) {
    // true: Value equality
}
if (x == "42") {
    // true: Type Coercion (42 == "42")
}

// === checks value equality without Type Coercion
if (x === y) {
    // true: Value equality without coercion
}
if (x === "42") {
    // false: No Type Coercion
}

// Reference Types
const p1 = { x: 1, y: 2 };
const p2 = { x: 1, y: 2 };
const p3 = p1;

// === checks reference equality for Objects
if (p1 === p3) {
    // true: Reference equality
}
if (p1 === p2) {
    // false: Different objects
}
```

**Special features:**
- == checks value equality with Type Coercion
- === checks value equality without Type Coercion
- === checks reference equality for Objects

**Further reading:**
- [MDN Web Docs - Equality Comparisons](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Equality Operators: ==, ===, !=, !==
x = 42
y = 42
z = 10

# == checks structural equality
if x == y
    # true: Structural equality
end

# === checks reference equality (identity)
p1 = Point(1, 2)
p2 = Point(1, 2)
p3 = p1

if p1 === p3
    # true: Reference equality
end
if p1 === p2
    # false: Different objects
end

# == checks structural equality (can be overloaded)
if p1 == p2
    # true: Structural equality (if == overloaded)
end
```

**Special features:**
- == checks structural equality (can be overloaded)
- === checks reference equality (identity)
- != and !== check inequality

**Further reading:**
- [Julia Documentation - Equality](https://docs.julialang.org/en/v1/base/base/#Base.:==)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Equality Operators: ==, ===, !=, !==
val x = 42
val y = 42
val z = 10

// == checks structural equality
if (x == y) {
    // true: Structural equality
}

// Reference Types
val p1 = Point(1, 2)
val p2 = Point(1, 2)
val p3 = p1

// === checks reference equality
if (p1 === p3) {
    // true: Reference equality
}
if (p1 === p2) {
    // false: Different objects
}

// == checks structural equality (uses equals())
if (p1 == p2) {
    // true: Structural equality (if equals() overridden)
}
```

**Special features:**
- == checks structural equality (uses equals())
- === checks reference equality
- != and !== check inequality

**Further reading:**
- [Kotlin Documentation - Equality](https://kotlinlang.org/docs/equality.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```mercury
% Equality Operators: Unification (=) and comparison (\=)
:- type point
    --->    point(x :: int, y :: int).

:- pred main(io::di, io::uo) is det.
main(!IO) :-
    X = 42,
    Y = 42,
    P1 = point(1, 2),
    P2 = point(1, 2),
    P3 = point(3, 4),

    % = checks equality (unification)
    ( if X = Y then
        io.write_string("X = Y: true\n", !IO)
    else
        io.write_string("X = Y: false\n", !IO)
    ),

    % \= checks inequality
    ( if P1 \= P3 then
        io.write_string("P1 \\= P3: true\n", !IO)
    else
        io.write_string("P1 \\= P3: false\n", !IO)
    ),

    % Comparison with compare/3
    compare(Result, P1, P2),
    io.write_string("compare(P1, P2) = ", !IO),
    io.write(Result, !IO), io.nl(!IO).
```

**Special features:**
- `=` checks structural equality (unification), no reference equality.
- `\=` checks inequality.
- `compare/3` returns `(<)`, `(=)` or `(>)` for ordering comparisons.
- There is no reference equality, as all values are Value Types.
- Equality is automatically defined for all types based on their structure.

**Further reading:**
- [The Mercury Language Reference Manual - Comparison](https://www.mercurylang.org/documentation/reference.html#Comparison)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Equality Operators: ==, !=, is
var x = 42
var y = 42
var z = 10

# == checks structural equality
if x == y:
    # true: Structural equality
    discard

# Reference Types
var p1 = PointRef(x: 1, y: 2)
var p2 = PointRef(x: 1, y: 2)
var p3 = p1

# is operator checks reference equality for ref Types
if p1 is p3:
    # true: Reference equality
    discard
if p1 is p2:
    # false: Different objects
    discard

# == checks structural equality (can be overloaded)
if p1 == p2:
    # true: Structural equality (if == overloaded)
    discard
```

**Special features:**
- == checks structural equality (can be overloaded)
- is checks reference equality for ref Types
- != checks structural inequality

**Further reading:**
- [Nim Documentation - Equality Operators](https://nim-lang.org/docs/manual.html#procedures-equality-operators)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Equality Operators: ==, !=, isEqual:
int x = 42;
int y = 42;
int z = 10;

if (x == y) {
    // true: Value equality
}
if (x != z) {
    // true: Value inequality
}

// Reference Types
Point* p1 = [[Point alloc] init];
p1.x = 1;
p1.y = 2;
Point* p2 = [[Point alloc] init];
p2.x = 1;
p2.y = 2;
Point* p3 = p1;

// == checks reference equality (pointer comparison)
if (p1 == p3) {
    // true: Reference equality
}

// isEqual: checks structural equality
if ([p1 isEqual:p2]) {
    // true: Structural equality (if isEqual: overridden)
}
```

**Special features:**
- == checks value equality for primitive types
- == checks reference equality for Objects (pointer comparison)
- isEqual: checks structural equality

**Further reading:**
- [Apple Objective-C Documentation - NSObject](https://developer.apple.com/documentation/objectivec/nsobject)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Equality Operators: =, ==, !=, <> *)
let x = 42
let y = 42
let z = 10

(* = checks structural equality *)
if x = y then
    (* true: Structural equality *)
    ()

(* == checks reference equality (physical equality) *)
let p1 = { x = 1; y = 2 }
let p2 = { x = 1; y = 2 }
let p3 = p1

if p1 == p3 then
    (* true: Reference equality *)
    ()
if p1 == p2 then
    (* false: Different objects *)
    ()

(* = checks structural equality *)
if p1 = p2 then
    (* true: Structural equality *)
    ()
```

**Special features:**
- `=` checks structural equality
- `==` checks reference equality (physical equality)
- `!=` and `<>` check inequality

**Further reading:**
- [OCaml Documentation - Equality](https://ocaml.org/manual/coreexamples.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Equality Operators: ==, !=
x := 42
y := 42
z := 10

if x == y {
    // true: Value equality
}
if x != z {
    // true: Value inequality
}

// Pointer comparison (identity)
p1 := Point{x = 1, y = 2}
ptr1 := &p1
ptr2 := &p1

if ptr1 == ptr2 {
    // true: Both point to the same object (identity)
}
```

**Special features:**
- == checks value equality for primitive types
- == checks identity for pointers
- != checks inequality

**Further reading:**
- [Odin Documentation - Operators](https://odin-lang.org/docs/overview/)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Equality and Identity Operators
% Prolog distinguishes between unification, structural equality
% and arithmetic equality.

% Unification: =/2
% ?- X = 42.        % X is bound to 42
% ?- f(X) = f(42).  % X is bound to 42
% ?- f(1) = f(2).   % false (not unifiable)

% Non-unification: \=/2
% ?- f(1) \= f(2).  % true

% Structural equality: ==/2 (without variable binding)
% ?- 42 == 42.      % true
% ?- X == Y.        % false (different variables)
% ?- X = Y, X == Y. % true (equal after unification)

% Structural inequality: \==/2
% ?- 42 \== 43.     % true

% Arithmetic equality: =:=/2
% ?- 2 + 3 =:= 5.  % true (evaluates both sides)
% ?- 2 + 3 == 5.    % false (structurally different)

% Arithmetic inequality: =\=/2
% ?- 2 + 3 =\= 6.  % true

% Term ordering: @</2, @>/2, @=</2, @>=/2
% ?- a @< b.        % true (alphabetical order)
```

**Special features:**
- `=/2` (unification) attempts to make terms equal through variable binding
- `==/2` checks structural equality without variable binding
- `=:=/2` evaluates both sides arithmetically and compares the results
- `\=/2`, `\==/2`, `=\=/2` are the respective negations
- `@</2` etc. compare terms according to the standard term order

**Further reading:**
- [SWI-Prolog - Comparison and Unification of Terms](https://www.swi-prolog.org/pldoc/man?section=compare)

</TabItem>
<TabItem value="python" label="Python">

```python
# Equality Operators: ==, !=, is, is not
x = 42
y = 42
z = 10

# == checks structural equality
if x == y:
    # True: Structural equality
    pass

# Reference Types
p1 = Point(1, 2)
p2 = Point(1, 2)
p3 = p1

# is operator checks reference equality (identity)
if p1 is p3:
    # True: Reference equality
    pass
if p1 is p2:
    # False: Different objects
    pass

# == checks structural equality (uses __eq__())
if p1 == p2:
    # True: Structural equality (if __eq__() overridden)
    pass
```

**Special features:**
- == checks structural equality (uses __eq__())
- is checks reference equality (identity)
- != and is not check inequality

**Further reading:**
- [Python Documentation - Comparisons](https://docs.python.org/3/reference/expressions.html#comparisons)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Equality Operators: ==, !=, equal?, eql?
x = 42
y = 42
z = 10

# == checks structural equality
if x == y
  # true: Structural equality
end

# Reference Types
p1 = Point.new(1, 2)
p2 = Point.new(1, 2)
p3 = p1

# equal? checks reference equality (identity)
if p1.equal?(p3)
  # true: Reference equality
end
if p1.equal?(p2)
  # false: Different objects
end

# == checks structural equality (can be overridden)
if p1 == p2
  # true: Structural equality (if == overridden)
end
```

**Special features:**
- == checks structural equality (can be overridden)
- equal? checks reference equality (identity)
- eql? checks structural equality with hash consideration

**Further reading:**
- [Ruby Documentation - Object](https://ruby-doc.org/core-3.1.0/Object.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Equality Operators: ==, !=, std::ptr::eq()
let x = 42;
let y = 42;
let z = 10;

// == checks structural equality (PartialEq)
if x == y {
    // true: Structural equality
}

// Reference Types
let p1 = Point { x: 1, y: 2 };
let p2 = Point { x: 1, y: 2 };
let ref1 = &p1;
let ref2 = &p1;
let ref3 = &p2;

// std::ptr::eq() checks reference equality for Raw Pointers
use std::ptr;
if ptr::eq(ref1, ref2) {
    // true: Reference equality
}

// == checks structural equality (PartialEq)
if *ref1 == *ref3 {
    // true: Structural equality (if PartialEq implemented)
}
```

**Special features:**
- == checks structural equality (PartialEq)
- std::ptr::eq() checks reference equality for Raw Pointers
- != is automatically generated from ==

**Further reading:**
- [The Rust Book - Derived Traits](https://doc.rust-lang.org/book/appendix-03-derivable-traits.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Equality Operators: ==, !=, eq, ne
val x = 42
val y = 42
val z = 10

// == checks structural equality
if (x == y) {
    // true: Structural equality
}

// Reference Types
val p1 = new Point(1, 2)
val p2 = new Point(1, 2)
val p3 = p1

// eq checks reference equality
if (p1.eq(p3)) {
    // true: Reference equality
}
if (p1.eq(p2)) {
    // false: Different objects
}

// == checks structural equality (uses equals())
if (p1 == p2) {
    // true: Structural equality (if equals() overridden)
}
```

**Special features:**
- == checks structural equality (uses equals())
- eq checks reference equality
- ne checks reference inequality

**Further reading:**
- [Scala Documentation - Equality](https://docs.scala-lang.org/tour/unified-types.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Equality Operators: ==, !=, ===, !==
let x = 42
let y = 42
let z = 10

// == checks structural equality (Equatable)
if x == y {
    // true: Structural equality
}

// Reference Types
let p1 = Point(x: 1, y: 2)
let p2 = Point(x: 1, y: 2)
let p3 = p1

// === checks reference equality (identity)
if p1 === p3 {
    // true: Reference equality
}
if p1 === p2 {
    // false: Different objects
}

// == checks structural equality (Equatable)
if p1 == p2 {
    // true: Structural equality (if Equatable implemented)
}
```

**Special features:**
- == checks structural equality (Equatable)
- === checks reference equality (identity)
- != and !== check inequality

**Further reading:**
- [Swift Documentation - Identity Operators](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/advancedoperators/#Identity-Operators)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Equality Operators: ==, ===, !=, !==
const x = 42;
const y = 42;
const z = 10;

// == checks value equality with Type Coercion
if (x == y) {
    // true: Value equality
}
if (x == "42") {
    // true: Type Coercion
}

// === checks value equality without Type Coercion
if (x === y) {
    // true: Value equality without coercion
}
if (x === "42") {
    // false: No Type Coercion
}

// Reference Types
const p1 = new Point(1, 2);
const p2 = new Point(1, 2);
const p3 = p1;

// === checks reference equality for Objects
if (p1 === p3) {
    // true: Reference equality
}
if (p1 === p2) {
    // false: Different objects
}
```

**Special features:**
- == checks value equality with Type Coercion
- === checks value equality without Type Coercion
- === checks reference equality for Objects

**Further reading:**
- [TypeScript Handbook - Basic Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Equality Operators: =, <>, Is, IsNot, Equals()
Dim x As Integer = 42
Dim y As Integer = 42
Dim z As Integer = 10

' = checks value equality
If x = y Then
    ' True: Value equality
End If

' Reference Types
Dim p1 As New Point(1, 2)
Dim p2 As New Point(1, 2)
Dim p3 As Point = p1

' Is operator checks reference equality
If p1 Is p3 Then
    ' True: Reference equality
End If
If p1 Is p2 Then
    ' False: Different objects
End If

' Equals() checks structural equality
If p1.Equals(p2) Then
    ' True: Structural equality (if Equals() overridden)
End If
```

**Special features:**
- = checks value equality for primitive types
- Is checks reference equality
- Equals() checks structural equality

**Further reading:**
- [Microsoft VB.NET Documentation - Is Operator](https://learn.microsoft.com/en-us/dotnet/visual-basic/language-reference/operators/is-operator)

</TabItem>
<TabItem value="v" label="V">

```v
// Equality Operators: ==, !=
x := 42
y := 42
z := 10

if x == y {
    // true: Value equality
}
if x != z {
    // true: Value inequality
}

// Reference Types
mut p1 := Point{x: 1, y: 2}
mut p2 := Point{x: 1, y: 2}
mut ref1 := &p1
mut ref2 := &p1

// == checks reference equality for References
if ref1 == ref2 {
    // true: Reference equality
}

// == checks structural equality for Structs (if comparable)
if p1 == p2 {
    // true: Structural equality (if all fields are comparable)
}
```

**Special features:**
- == checks value equality for primitive types
- == checks reference equality for References
- == checks structural equality for Structs (if all fields are comparable)

**Further reading:**
- [V Documentation - Operators](https://github.com/vlang/v/blob/master/doc/docs.md#operators)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Equality Operators: ==, !=
const x: i32 = 42;
const y: i32 = 42;
const z: i32 = 10;

if (x == y) {
    // true: Value equality
}
if (x != z) {
    // true: Value inequality
}

// Pointer comparison (identity)
var p1 = Point{ .x = 1, .y = 2 };
const ptr1: *Point = &p1;
const ptr2: *Point = &p1;

if (ptr1 == ptr2) {
    // true: Both point to the same object (identity)
}
```

**Special features:**
- == checks value equality for primitive types
- == checks identity for pointers
- != checks inequality

**Further reading:**
- [Zig Documentation - Operators](https://ziglang.org/documentation/0.11.0/#Operators)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Identity (object identity)
(eq 'a 'a)              ; T
(eq (list 1) (list 1))  ; NIL (different objects)

;; Equality (various levels)
(eql 42 42)             ; T (same type and value)
(equal (list 1 2) (list 1 2))    ; T (structural equality)
(equalp "Hello" "hello")          ; T (case-insensitive)

;; Numeric equality
(= 1 1.0)              ; T (numerically equal)
(eql 1 1.0)            ; NIL (different types)
```

**Special features:**
- `eq` checks object identity (pointer equality)
- `eql` checks type and value (standard equality)
- `equal` checks structural equality (recursively)
- `equalp` is like `equal`, but case-insensitive and numerically tolerant
- `=` checks numeric equality across type boundaries

**Further reading:**
- [Common Lisp HyperSpec - eq](http://www.lispworks.com/documentation/HyperSpec/Body/f_eq.htm)

</TabItem>
</Tabs>

