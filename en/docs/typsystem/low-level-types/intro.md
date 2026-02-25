---
slug: /typsystem/low-level-types
title: 3.10. Low-Level Types
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 3.10. Low-Level Types

Low-level types for systems programming.

## 3.10.1. Subtypes

A subtype is a type defined as a restricted variant of a base type, typically with range constraints or other restrictions.

### Languages {#sprachen}

<Tabs availableTabs={['ada', 'nim', 'object-pascal']}>
<TabItem value="ada" label="Ada">

```ada
-- Subtypes with range constraints
type Temperature is range -273 .. 1000;
subtype Valid_Temperature is Temperature range 0 .. 100;

type Index is range 1 .. 100;
subtype Small_Index is Index range 1 .. 10;

var temp : Valid_Temperature := 25;
var idx : Small_Index := 5;
```

**Special features:**
- Subtypes are declared with `subtype`
- Range constraints define valid values
- Compile-time and runtime checking of constraints
- Subtypes are compatible with their base type

**Further reading:**
- [Ada Reference Manual - Subtypes](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-3-2.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Subrange Types
type
  Temperature = -273..1000;
  ValidTemperature = 0..100;
  
  Index = 1..100;
  SmallIndex = 1..10;

var
  temp: ValidTemperature;
  idx: SmallIndex;
begin
  temp := 25;
  idx := 5;
end;
```

**Special features:**
- Subrange types with `..` syntax
- Range constraints define valid values
- Compile-time and runtime checking of constraints
- Compatible with base type

**Further reading:**
- [Free Pascal Documentation - Subrange Types](https://www.freepascal.org/docs-html/ref/refse6.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Subtypes: Range Types
type
  Percentage = range[0..100]
  Byte = range[0..255]
  SmallInt = range[-128..127]

var p: Percentage = 50
# p = 101  # Error: out of range

var b: Byte = 200
echo b  # 200
```

**Special features:**
- Range types with `range[min..max]` syntax
- Compile-time and runtime checking of bounds
- Can be applied to all ordinal types

**Further reading:**
- [Nim Documentation - Subrange Types](https://nim-lang.org/docs/manual.html#types-subrange-types)

</TabItem>
</Tabs>


## 3.10.2. Discriminants

A discriminant is a parameter of a data type that determines the structure of the type at compile time or runtime, typically in variant records.

### Languages {#sprachen}

<Tabs availableTabs={['ada', 'nim', 'object-pascal']}>
<TabItem value="ada" label="Ada">

```ada
-- Discriminants for variant records
type Shape_Kind is (Circle, Rectangle);
type Shape (Kind : Shape_Kind := Circle) is record
    case Kind is
        when Circle =>
            Radius : Float;
        when Rectangle =>
            Width, Height : Float;
    end case;
end record;

var circle : Shape := (Kind => Circle, Radius => 5.0);
var rect : Shape := (Kind => Rectangle, Width => 10.0, Height => 20.0);
```

**Special features:**
- Discriminants are declared in the type definition
- Determine the record variant at compile time
- Default values can be specified
- Discriminants can be constrained or unconstrained

**Further reading:**
- [Ada Reference Manual - Discriminants](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-3-7.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Discriminants for variant records
type
  ShapeKind = (skCircle, skRectangle);
  Shape = record
    case Kind: ShapeKind of
      skCircle: (Radius: Real);
      skRectangle: (Width, Height: Real);
  end;

var
  circle: Shape;
  rect: Shape;
begin
  circle.Kind := skCircle;
  circle.Radius := 5.0;
  rect.Kind := skRectangle;
  rect.Width := 10.0;
  rect.Height := 20.0;
end;
```

**Special features:**
- Discriminants are declared in the `case` statement of the record
- Determine the record variant at compile time
- Discriminant must be set when accessing variant fields
- Type-safe access to variant fields

**Further reading:**
- [Free Pascal Documentation - Variant Records](https://www.freepascal.org/docs-html/ref/refse20.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Discriminants: Object Variant Discriminant
type
  NodeKind = enum
    nkInt, nkFloat, nkString

  Node = object
    case kind: NodeKind  # Discriminant
    of nkInt: intVal: int
    of nkFloat: floatVal: float
    of nkString: strVal: string

var n = Node(kind: nkInt, intVal: 42)
echo n.kind  # nkInt
```

**Special features:**
- Discriminant with `case` field in object
- Enum type as discriminant
- Compile-time safety for field access

**Further reading:**
- [Nim Documentation - Object Variants](https://nim-lang.org/docs/manual.html#types-object-variants)

</TabItem>
</Tabs>


## 3.10.3. Variant Records

Variant records are records whose structure is determined by a discriminant at compile time or runtime, allowing different variants to have different fields.

### Languages {#sprachen}

<Tabs availableTabs={['ada', 'c', 'nim', 'object-pascal']}>
<TabItem value="ada" label="Ada">

```ada
-- Variant records with discriminants
type Shape_Kind is (Circle, Rectangle);
type Shape (Kind : Shape_Kind := Circle) is record
    X, Y : Float;
    case Kind is
        when Circle =>
            Radius : Float;
        when Rectangle =>
            Width, Height : Float;
    end case;
end record;

var circle : Shape := (Kind => Circle, X => 0.0, Y => 0.0, Radius => 5.0);
var rect : Shape := (Kind => Rectangle, X => 1.0, Y => 2.0, Width => 10.0, Height => 20.0);
```

**Special features:**
- Variant records are defined with `case` within the record
- Discriminant determines the active variant
- Type-safe access to variant fields
- Compile-time checking of discriminant values

**Further reading:**
- [Ada Reference Manual - Variant Records](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-3-8.html)

</TabItem>
<TabItem value="c" label="C">

```c
// Variant records with unions
typedef enum {
    SHAPE_CIRCLE,
    SHAPE_RECTANGLE
} ShapeKind;

typedef struct {
    float x, y;
    ShapeKind kind;
    union {
        struct {
            float radius;
        } circle;
        struct {
            float width, height;
        } rectangle;
    } data;
} Shape;

Shape circle = {0.0, 0.0, SHAPE_CIRCLE, {.circle = {5.0}}};
Shape rect = {1.0, 2.0, SHAPE_RECTANGLE, {.rectangle = {10.0, 20.0}}};
```

**Special features:**
- Variant records are implemented with `union` within `struct`
- Discriminant (tag) must be managed manually
- No compile-time checking of tag values
- All variants share the same memory

**Further reading:**
- [C Standard - Structures and Unions](https://en.cppreference.com/w/c/language/struct)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Variant Records
type
  ShapeKind = (skCircle, skRectangle);
  Shape = record
    X, Y: Real;
    case Kind: ShapeKind of
      skCircle: (Radius: Real);
      skRectangle: (Width, Height: Real);
  end;

var
  circle: Shape;
  rect: Shape;
begin
  circle.Kind := skCircle;
  circle.X := 0.0;
  circle.Y := 0.0;
  circle.Radius := 5.0;
  rect.Kind := skRectangle;
  rect.X := 1.0;
  rect.Y := 2.0;
  rect.Width := 10.0;
  rect.Height := 20.0;
end;
```

**Special features:**
- Variant records are defined with `case` within the record
- Discriminant determines the active variant
- Type-safe access to variant fields
- Compile-time checking of discriminant values

**Further reading:**
- [Free Pascal Documentation - Variant Records](https://www.freepascal.org/docs-html/ref/refse20.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Variant Records: Object Variants
type
  ValueKind = enum
    vkInt, vkFloat, vkString

  Value = object
    case kind: ValueKind
    of vkInt: intVal: int
    of vkFloat: floatVal: float
    of vkString: strVal: string

var v1 = Value(kind: vkInt, intVal: 42)
var v2 = Value(kind: vkString, strVal: "hello")

case v1.kind
of vkInt: echo v1.intVal
of vkFloat: echo v1.floatVal
of vkString: echo v1.strVal
```

**Special features:**
- Object variants are Nim's variant records
- Type-safe field access based on the discriminant
- Exhaustive `case` checking

**Further reading:**
- [Nim Documentation - Object Variants](https://nim-lang.org/docs/manual.html#types-object-variants)

</TabItem>
</Tabs>


## 3.10.4. Structs

Structs are composite data types that combine multiple fields of different types in a fixed memory structure.

### Languages {#sprachen}

<Tabs availableTabs={['ada', 'c', 'carbon', 'cpp', 'crystal', 'd', 'go', 'koka', 'lean4', 'mercury', 'nim', 'object-pascal', 'objective-c', 'odin', 'rust', 'swift', 'v', 'zig']}>
<TabItem value="ada" label="Ada">

```ada
-- Structs: Records
type Point is record
    X : Float;
    Y : Float;
end record;

type Person is record
    Name : String(1..50);
    Age : Integer;
end record;

var p : Point := (X => 1.0, Y => 2.0);
var person : Person := (Name => "Alice", Age => 30);
```

**Special features:**
- Records are structured types
- Fields have fixed types and positions
- Value types, passed by copy
- Access via dot notation

**Further reading:**
- [Ada Reference Manual - Records](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-3-8.html)

</TabItem>
<TabItem value="c" label="C">

```c
// Structs
struct Point {
    float x;
    float y;
};

struct Person {
    char name[50];
    int age;
};

struct Point p = {1.0, 2.0};
struct Person person = {"Alice", 30};
```

**Special features:**
- Structs are composite data types
- Fields have fixed types and positions
- Value types, passed by copy
- Access via dot notation

**Further reading:**
- [C Standard - Structures](https://en.cppreference.com/w/c/language/struct)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Structs
struct Point {
    float x;
    float y;
};

struct Person {
    char name[50];
    int age;
};

Point p = {1.0, 2.0};
Person person = {"Alice", 30};
```

**Special features:**
- Structs are composite data types
- Structs are public by default (unlike class)
- Can have methods and constructors
- Value types, passed by copy

**Further reading:**
- [cppreference.com - Classes](https://en.cppreference.com/w/cpp/language/class)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Structs
struct Point {
    var x: f32;
    var y: f32;
}

struct Person {
    var name: String;
    var age: i32;
}

var p: Point = {.x = 1.0, .y = 2.0};
var person: Person = {.name = "Alice", .age = 30};
```

**Special features:**
- Structs are composite data types
- Experimental language, syntax may still change
- Value types
- Access via dot notation

**Further reading:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Structs
struct Point
  property x : Float32
  property y : Float32
end

struct Person
  property name : String
  property age : Int32
end

p = Point.new(x: 1.0, y: 2.0)
person = Person.new(name: "Alice", age: 30)
```

**Special features:**
- Structs are value types
- Fields have fixed types
- Access via dot notation
- Passed by copy

**Further reading:**
- [Crystal Documentation - Structs](https://crystal-lang.org/reference/1.9/syntax_and_semantics/structs.html)

</TabItem>
<TabItem value="d" label="D">

```d
// Structs
struct Point {
    float x;
    float y;
}

struct Person {
    string name;
    int age;
}

Point p = Point(1.0, 2.0);
Person person = Person("Alice", 30);
```

**Special features:**
- Structs are value types
- Fields have fixed types
- Can have methods
- Access via dot notation

**Further reading:**
- [D Language - Structs](https://dlang.org/spec/struct.html)

</TabItem>
<TabItem value="go" label="Go">

```go
// Structs
type Point struct {
    X float32
    Y float32
}

type Person struct {
    Name string
    Age  int
}

p := Point{X: 1.0, Y: 2.0}
person := Person{Name: "Alice", Age: 30}
```

**Besonderheiten:**
- Structs sind zusammengesetzte Datentypen
- Felder haben feste Typen
- Value Types, werden per Kopie übergeben
- Zugriff über Punkt-Notation

**Weiterführende Links:**
- [Go Documentation - Structs](https://go.dev/ref/spec#Struct_types)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Structs: struct-Typen (Value Types)
struct point
  x: float64
  y: float64

struct person
  name: string
  age: int

val p = Point(1.0, 2.0)
val alice = Person("Alice", 30)

// Access via dot notation
val px = p.x
val pname = alice.name
```

**Special features:**
- `struct` defines a value type with named fields
- Structs are product types (single constructor)
- Fields are accessed via dot notation (automatically generated accessor functions)
- Structs are always value types and passed by copy
- Koka automatically generates constructor and accessor functions

**Further reading:**
- [Koka Language Guide - Structs](https://koka-lang.github.io/koka/doc/book.html#sec-structs)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Structs: structure-Typen
structure Point where
  x : Float
  y : Float

structure Person where
  name : String
  age : Nat

def p : Point := { x := 1.0, y := 2.0 }
def alice : Person := { name := "Alice", age := 30 }

-- Access via dot notation
def px : Float := p.x
def pname : String := alice.name

-- Functional updates (copy-with-update)
def p2 : Point := { p with x := 3.0 }
```

**Special features:**
- `structure` defines a record type with named fields
- Fields are accessed via dot notation (automatically generated projections)
- Functional updates with `{ record with field := value }` syntax
- Structures can use `extends` for inheritance
- Structures are always value types

**Further reading:**
- [Lean 4 Documentation - Structures](https://lean-lang.org/theorem_proving_in_lean4/structures_and_records.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```mercury
% Structs: Typen mit einzelnem Konstruktor und benannten Feldern
:- type point
    --->    point(
                x :: float,
                y :: float
            ).

:- type person
    --->    person(
                name :: string,
                age  :: int
            ).

% Create
:- pred main(io::di, io::uo) is det.
main(!IO) :-
    P = point(1.0, 2.0),
    Alice = person("Alice", 30),

    % Access via automatically generated field accessor functions
    io.write_float(P ^ x, !IO), io.nl(!IO),
    io.write_string(Alice ^ name, !IO), io.nl(!IO),

    % Functional updates
    P2 = P ^ x := 3.0,
    io.write_float(P2 ^ x, !IO), io.nl(!IO).
```

**Special features:**
- Structs are defined in Mercury as types with a single constructor and named fields.
- The compiler automatically generates field accessor functions (`^ fieldname`).
- Functional updates with `Record ^ field := Value` syntax.
- All types are value types (immutable), changes create new values.

**Further reading:**
- [The Mercury Language Reference Manual - Data Types](https://www.mercurylang.org/documentation/reference.html#Data_types)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Structs: object types
type
  Point = object
    x: float32
    y: float32
  
  Person = object
    name: string
    age: int

var p = Point(x: 1.0, y: 2.0)
var person = Person(name: "Alice", age: 30)
```

**Special features:**
- Object types are structured types
- Fields have fixed types
- Value types
- Access via dot notation

**Further reading:**
- [Nim Documentation - Object Types](https://nim-lang.org/docs/manual.html#types-object-types)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Structs: Records
type
  Point = record
    X: Real;
    Y: Real;
  end;
  
  Person = record
    Name: String;
    Age: Integer;
  end;

var
  p: Point;
  person: Person;
begin
  p.X := 1.0;
  p.Y := 2.0;
  person.Name := 'Alice';
  person.Age := 30;
end;
```

**Special features:**
- Records are structured types
- Fields have fixed types
- Value types
- Access via dot notation

**Further reading:**
- [Free Pascal Documentation - Records](https://www.freepascal.org/docs-html/ref/refse19.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Structs
Point :: struct {
    x: f32,
    y: f32,
}

Person :: struct {
    name: string,
    age: i32,
}

p := Point{x = 1.0, y = 2.0}
person := Person{name = "Alice", age = 30}
```

**Besonderheiten:**
- Structs sind zusammengesetzte Datentypen
- Felder haben feste Typen
- Value Types
- Zugriff über Punkt-Notation

**Weiterführende Links:**
- [Odin Documentation - Structs](https://odin-lang.org/docs/overview/#structs)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Structs
struct Point {
    x: f32,
    y: f32,
}

struct Person {
    name: String,
    age: i32,
}

let p = Point { x: 1.0, y: 2.0 };
let person = Person { name: "Alice".to_string(), age: 30 };
```

**Special features:**
- Structs are composite data types
- Fields have fixed types
- Can have methods (impl blocks)
- Value types, passed by copy

**Further reading:**
- [The Rust Book - Structs](https://doc.rust-lang.org/book/ch05-01-defining-structs.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Structs
struct Point {
    var x: Float
    var y: Float
}

struct Person {
    var name: String
    var age: Int
}

let p = Point(x: 1.0, y: 2.0)
let person = Person(name: "Alice", age: 30)
```

**Special features:**
- Structs are value types
- Fields have fixed types
- Can have methods
- Passed by copy

**Further reading:**
- [Swift Documentation - Structures](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/structuresandclasses/)

</TabItem>
<TabItem value="v" label="V">

```v
// Structs
struct Point {
    x f32
    y f32
}

struct Person {
    name string
    age int
}

p := Point{x: 1.0, y: 2.0}
person := Person{name: "Alice", age: 30}
```

**Besonderheiten:**
- Structs sind zusammengesetzte Datentypen
- Felder haben feste Typen
- Value Types
- Zugriff über Punkt-Notation

**Weiterführende Links:**
- [V Language Documentation - Structs](https://github.com/vlang/v/blob/master/doc/docs.md#structs)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Structs
const Point = struct {
    x: f32,
    y: f32,
};

const Person = struct {
    name: []const u8,
    age: i32,
};

const p = Point{ .x = 1.0, .y = 2.0 };
const person = Person{ .name = "Alice", .age = 30 };
```

**Special features:**
- Structs are composite data types
- Fields have fixed types
- Can have methods
- Value types

**Further reading:**
- [Zig Documentation - Structs](https://ziglang.org/documentation/0.11.0/#structs)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Struct-Definition
typedef struct {
    int x;
    int y;
} Point;

typedef struct {
    Point origin;
    int width;
    int height;
} Rectangle;

// Usage
Point p = {10, 20};
Rectangle rect = {{0, 0}, 100, 50};

p.x = 30;
rect.width = 200;
```

**Special features:**
- Full C struct support as C superset
- Structs are value types (copy on assignment)
- Commonly used for lightweight data structures (e.g., CGPoint, CGRect, NSRange)
- No method definition in structs (unlike C++)

**Further reading:**
- [Apple Documentation - Programming with Objective-C](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html)

</TabItem>
</Tabs>



---

### No Classes (Structs + Methods only)


Languages that have no classes, only structures with associated methods.


<Tabs availableTabs={['c', 'go', 'julia', 'koka', 'lean4', 'roc', 'rust', 'v', 'zig']}>
<TabItem value="go" label="Go">

```go
type Person struct {
    Name string
    Age  int
}

func (p Person) Greet() {
    fmt.Printf("Hello, I am %s\n", p.Name)
}

func (p *Person) SetAge(age int) {
    p.Age = age
}
```

**Special features:**
- Structs for data structures
- Methods are defined with receiver syntax
- Value receiver (`Person`) or pointer receiver (`*Person`)

**Further reading:**
- [Go Documentation - Methods](https://go.dev/tour/methods/1)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
struct Person {
    name: String,
    age: u32,
}

impl Person {
    fn new(name: String, age: u32) -> Person {
        Person { name, age }
    }
    
    fn greet(&self) {
        println!("Hello, I am {}", self.name);
    }
    
    fn set_age(&mut self, age: u32) {
        self.age = age;
    }
}
```

**Special features:**
- Structs for data structures
- `impl` block for methods
- `&self` for immutable, `&mut self` for mutable access

**Further reading:**
- [Rust Documentation - Structs](https://doc.rust-lang.org/book/ch05-00-structs.html)

</TabItem>
<TabItem value="c" label="C">

```c
typedef struct {
    char* name;
    int age;
} Person;

void person_greet(Person* p) {
    printf("Hello, I am %s\n", p->name);
}

void person_set_age(Person* p, int age) {
    p->age = age;
}
```

**Special features:**
- Structs for data structures
- Methods as regular functions with struct pointer as first parameter
- No true object orientation

**Further reading:**
- [C Documentation - Structures](https://en.cppreference.com/w/c/language/struct)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
const Person = struct {
    name: []const u8,
    age: u32,
    
    pub fn greet(self: Person) void {
        std.debug.print("Hello, I am {s}\n", .{self.name});
    }
    
    pub fn setAge(self: *Person, age: u32) void {
        self.age = age;
    }
};
```

**Special features:**
- Structs for data structures
- Methods are defined within the struct
- `self` for value, `*self` for pointer

**Further reading:**
- [Zig Documentation - Structs](https://ziglang.org/documentation/0.11.0/#structs)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Structs instead of classes
struct Point
    x::Float64
    y::Float64
end

mutable struct MutablePoint
    x::Float64
    y::Float64
end

# Methods are defined externally (Multiple Dispatch)
distance(p1::Point, p2::Point) = sqrt((p1.x - p2.x)^2 + (p1.y - p2.y)^2)

p1 = Point(0.0, 0.0)
p2 = Point(3.0, 4.0)
println(distance(p1, p2))  # 5.0
```

**Special features:**
- No classes – only `struct` and `mutable struct`
- Methods belong to functions, not types (Multiple Dispatch)
- Inheritance only for abstract types, not concrete structs
- Separation of data and behavior

**Further reading:**
- [Julia Documentation - Composite Types](https://docs.julialang.org/en/v1/manual/types/#Composite-Types)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// No classes: Structs + functions
struct point
  x: float64
  y: float64

// Functions operate on structs
fun distance(p1: point, p2: point): float64
  val dx = p1.x - p2.x
  val dy = p1.y - p2.y
  sqrt(dx * dx + dy * dy)

val p1 = Point(0.0, 0.0)
val p2 = Point(3.0, 4.0)
```

**Special features:**
- No classes — only `struct` and `type` (ADTs)
- Methods are defined as regular functions that take the struct as a parameter
- Dot notation (`p1.x`) uses automatically generated accessor functions
- Separation of data and behavior (functional style)

**Further reading:**
- [Koka Language Guide - Structs](https://koka-lang.github.io/koka/doc/book.html#sec-structs)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- No classes: Structures + functions + type classes
structure Point where
  x : Float
  y : Float

-- Functions operate on structures
def distance (p1 p2 : Point) : Float :=
  let dx := p1.x - p2.x
  let dy := p1.y - p2.y
  Float.sqrt (dx * dx + dy * dy)

-- Type classes instead of inheritance
class Describable (α : Type) where
  describe : α → String

instance : Describable Point where
  describe p := s!"Point({p.x}, {p.y})"
```

**Special features:**
- No classes — only `structure` and `inductive` types
- Methods as regular functions or via namespaces (`Point.distance`)
- Polymorphism via type classes instead of inheritance
- Separation of data and behavior (functional style)

**Further reading:**
- [Lean 4 Documentation - Structures](https://lean-lang.org/theorem_proving_in_lean4/structures_and_records.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- No classes: Records + functions
Point : { x : F64, y : F64 }

distance : Point, Point -> F64
distance = \p1, p2 ->
    dx = p1.x - p2.x
    dy = p1.y - p2.y
    Num.sqrt (dx * dx + dy * dy)
```

**Special features:**
- No classes or objects
- Records for data structures
- Standalone functions instead of methods

**Further reading:**
- [Roc Documentation - Records](https://www.roc-lang.org/tutorial#records)

</TabItem>
<TabItem value="v" label="V">

```v
// No Classes: Structs + Methods
struct Person {
    name string
    age  int
}

fn (p Person) greet() string {
    return 'Hello, I am ${p.name}'
}

fn (mut p Person) birthday() {
    p.age++
}

mut person := Person{name: 'Alice', age: 30}
println(person.greet())
person.birthday()
```

**Special features:**
- No classes, only structs
- Methods are defined externally with receiver
- `mut` receiver for mutating methods
- Struct embedding instead of inheritance

**Further reading:**
- [V Documentation - Structs](https://github.com/vlang/v/blob/master/doc/docs.md#structs)

</TabItem>
</Tabs>

## 3.10.5. Unions (C-style)

Unions are data types where all fields share the same memory space, so only one field is valid at a time.

### Languages {#sprachen}

<Tabs availableTabs={['c', 'carbon', 'cpp', 'd', 'nim', 'object-pascal', 'objective-c', 'odin', 'rust', 'v', 'zig']}>
<TabItem value="c" label="C">

```c
// Unions
union Value {
    int i;
    float f;
    char c;
};

union Value v;
v.i = 42;
// v.f and v.c share the same memory
```

**Special features:**
- All fields share the same memory
- Size is the size of the largest field
- No type safety - programmer must manage tag manually
- Useful for memory mapping and type punning

**Further reading:**
- [C Standard - Unions](https://en.cppreference.com/w/c/language/union)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Unions
union Value {
    int i;
    float f;
    char c;
};

Value v;
v.i = 42;
// v.f and v.c share the same memory
```

**Special features:**
- All fields share the same memory
- Size is the size of the largest field
- Since C++11, unions can have members with non-trivial constructors
- No type safety - programmer must manage tag manually

**Further reading:**
- [cppreference.com - Unions](https://en.cppreference.com/w/cpp/language/union)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Unions
union Value {
    var i: i32;
    var f: f32;
    var c: i8;
}

var v: Value = {.i = 42};
// v.f and v.c share the same memory
```

**Special features:**
- All fields share the same memory
- Experimental language, syntax may still change
- Size is the size of the largest field
- No type safety

**Further reading:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="d" label="D">

```d
// Unions
union Value {
    int i;
    float f;
    char c;
}

Value v;
v.i = 42;
// v.f and v.c share the same memory
```

**Special features:**
- All fields share the same memory
- Size is the size of the largest field
- No type safety
- Useful for memory mapping

**Further reading:**
- [D Language - Unions](https://dlang.org/spec/struct.html#union)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Unions: object variants
type
  ValueKind = enum
    vkInt, vkFloat, vkChar
  
  Value = object
    case kind: ValueKind
    of vkInt: i: int
    of vkFloat: f: float
    of vkChar: c: char

var v = Value(kind: vkInt, i: 42)
```

**Special features:**
- Object variants with discriminant
- Type-safe access to variant fields
- Compile-time checking of discriminant
- All variants share the same memory

**Further reading:**
- [Nim Documentation - Object Variants](https://nim-lang.org/docs/manual.html#types-object-variants)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Unions: Variant Records
type
  Value = record
    case Integer of
      0: (i: Integer);
      1: (f: Real);
      2: (c: Char);
  end;

var
  v: Value;
begin
  v.i := 42;
  // v.f and v.c share the same memory
end;
```

**Special features:**
- Variant records with unions
- All variants share the same memory
- No type safety - programmer must manage tag manually
- Size is the size of the largest field

**Further reading:**
- [Free Pascal Documentation - Variant Records](https://www.freepascal.org/docs-html/ref/refse20.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Unions
Value :: union {
    i: i32,
    f: f32,
    c: i8,
}

v := Value{i = 42}
// v.f and v.c share the same memory
```

**Special features:**
- All fields share the same memory
- Size is the size of the largest field
- No type safety
- Useful for memory mapping

**Further reading:**
- [Odin Documentation - Unions](https://odin-lang.org/docs/overview/#unions)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Unions: unsafe unions
union Value {
    i: i32,
    f: f32,
    c: u8,
}

unsafe {
    let mut v = Value { i: 42 };
    // v.f and v.c share the same memory
    // Access is unsafe
}
```

**Special features:**
- All fields share the same memory
- Access is `unsafe` (since Rust 1.19.0)
- Size is the size of the largest field
- No type safety

**Further reading:**
- [The Rust Reference - Unions](https://doc.rust-lang.org/reference/items/unions.html)

</TabItem>
<TabItem value="v" label="V">

```v
// Unions
union Value {
    i int
    f f32
    c byte
}

v := Value{i: 42}
// v.f and v.c share the same memory
```

**Special features:**
- All fields share the same memory
- Size is the size of the largest field
- No type safety
- Useful for memory mapping

**Further reading:**
- [V Language Documentation - Unions](https://github.com/vlang/v/blob/master/doc/docs.md#unions)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Unions
const Value = union {
    i: i32,
    f: f32,
    c: u8,
};

const v = Value{ .i = 42 };
// v.f and v.c share the same memory
```

**Special features:**
- All fields share the same memory
- Size is the size of the largest field
- Tagged unions with `union(enum)` for type safety
- Untagged unions for memory mapping

**Further reading:**
- [Zig Documentation - Unions](https://ziglang.org/documentation/0.11.0/#unions)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Union-Definition
typedef union {
    int intValue;
    float floatValue;
    char charValue;
} Value;

// Usage
Value v;
v.intValue = 42;
v.floatValue = 3.14f; // Overwrites intValue
```

**Special features:**
- Full C union support as C superset
- All members share the same memory area
- Only one member can have a valid value at a time
- Size equals the largest member

**Further reading:**
- [Apple Documentation - Programming with Objective-C](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html)

</TabItem>
</Tabs>


## 3.10.6. Void Pointers

Void pointers are generic pointers that can point to data of any type and are typically used for low-level programming and interoperability.

### Languages {#sprachen}

<Tabs availableTabs={['c', 'carbon', 'cpp', 'd', 'nim', 'object-pascal', 'objective-c', 'odin', 'rust', 'v', 'zig']}>
<TabItem value="c" label="C">

```c
// Void Pointers
void* ptr;
int x = 42;
float f = 3.14;

ptr = &x;
int* int_ptr = (int*)ptr;
*int_ptr = 100;

ptr = &f;
float* float_ptr = (float*)ptr;
*float_ptr = 2.71;
```

**Special features:**
- `void*` is a generic pointer
- Can point to data of any type
- Must be explicitly cast to a concrete type
- Useful for generic functions and memory management

**Further reading:**
- [C Standard - Pointers](https://en.cppreference.com/w/c/language/pointer)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Void Pointers
void* ptr;
int x = 42;
float f = 3.14;

ptr = &x;
int* int_ptr = static_cast<int*>(ptr);
*int_ptr = 100;

ptr = &f;
float* float_ptr = static_cast<float*>(ptr);
*float_ptr = 2.71;
```

**Special features:**
- `void*` is a generic pointer
- Can point to data of any type
- Should use `static_cast` instead of C-style cast
- Less frequently used than in C (templates preferred)

**Further reading:**
- [cppreference.com - Pointers](https://en.cppreference.com/w/cpp/language/pointer)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Void Pointers: Raw pointers
var ptr: i8*;
var x: i32 = 42;
var f: f32 = 3.14;

ptr = &x as i8*;
var int_ptr: i32* = ptr as i32*;
*int_ptr = 100;

ptr = &f as i8*;
var float_ptr: f32* = ptr as f32*;
*float_ptr = 2.71;
```

**Special features:**
- Raw pointers (`i8*`) as generic pointers
- Experimental language, syntax may still change
- Must be explicitly cast
- Useful for low-level programming

**Further reading:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="d" label="D">

```d
// Void Pointers
void* ptr;
int x = 42;
float f = 3.14;

ptr = &x;
int* int_ptr = cast(int*)ptr;
*int_ptr = 100;

ptr = &f;
float* float_ptr = cast(float*)ptr;
*float_ptr = 2.71;
```

**Special features:**
- `void*` is a generic pointer
- Can point to data of any type
- Must be cast to a concrete type with `cast()`
- Useful for interoperability with C

**Further reading:**
- [D Language - Pointers](https://dlang.org/spec/type.html#pointers)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Void Pointers: pointer type
var ptr: pointer
var x: int = 42
var f: float = 3.14

ptr = addr(x)
var int_ptr = cast[ptr int](ptr)
int_ptr[] = 100

ptr = addr(f)
var float_ptr = cast[ptr float](ptr)
float_ptr[] = 2.71
```

**Special features:**
- `pointer` is a generic pointer
- Can point to data of any type
- Must be cast to a concrete type with `cast`
- Useful for interoperability with C

**Further reading:**
- [Nim Documentation - Pointers](https://nim-lang.org/docs/manual.html#types-pointer-and-reference-types)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Void Pointers: Pointer type
var
  ptr: Pointer;
  x: Integer = 42;
  f: Real = 3.14;
  int_ptr: ^Integer;
  float_ptr: ^Real;
begin
  ptr := @x;
  int_ptr := ptr;
  int_ptr^ := 100;
  
  ptr := @f;
  float_ptr := ptr;
  float_ptr^ := 2.71;
end;
```

**Special features:**
- `Pointer` is a generic pointer
- Can point to data of any type
- Must be cast to a typed pointer
- Useful for interoperability with C

**Further reading:**
- [Free Pascal Documentation - Pointers](https://www.freepascal.org/docs-html/ref/refse16.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Void Pointers: rawptr
ptr: rawptr
x: i32 = 42
f: f32 = 3.14

ptr = &x
int_ptr := cast(^i32)ptr
int_ptr^ = 100

ptr = &f
float_ptr := cast(^f32)ptr
float_ptr^ = 2.71
```

**Special features:**
- `rawptr` is a generic pointer
- Can point to data of any type
- Must be cast to a concrete type with `cast`
- Useful for low-level programming

**Further reading:**
- [Odin Documentation - Pointers](https://odin-lang.org/docs/overview/#pointers)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Void Pointers: *const () or *mut ()
let x = 42i32;
let f = 3.14f32;

let ptr: *const () = &x as *const i32 as *const ();
let int_ptr = ptr as *const i32;
unsafe {
    let value = *int_ptr;
}

let ptr: *const () = &f as *const f32 as *const ();
let float_ptr = ptr as *const f32;
unsafe {
    let value = *float_ptr;
}
```

**Special features:**
- `*const ()` or `*mut ()` as generic pointers
- Access is `unsafe`
- Must be explicitly cast to a concrete type
- Rarely used (generics preferred)

**Further reading:**
- [The Rust Book - Raw Pointers](https://doc.rust-lang.org/book/ch19-01-unsafe-rust.html#dereferencing-a-raw-pointer)

</TabItem>
<TabItem value="v" label="V">

```v
// Void Pointers: voidptr
x := 42
f := 3.14

mut ptr := voidptr(&x)

unsafe {
    int_ptr := &int(ptr)
    println(*int_ptr)

    ptr = voidptr(&f)
    float_ptr := &f64(ptr)
    println(*float_ptr)
}
```

**Special features:**
- `voidptr` is a generic pointer
- Can point to data of any type
- Must be cast to a typed pointer
- Dereferencing requires `unsafe` block
- Useful for interoperability with C

**Further reading:**
- [V Documentation - Pointers](https://github.com/vlang/v/blob/master/doc/docs.md#pointers)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Void Pointers: *anyopaque
var x: i32 = 42;
var f: f32 = 3.14;

// Cast to *anyopaque (generic pointer)
var ptr: *anyopaque = @ptrCast(&x);

// Cast back to *i32
const int_ptr: *i32 = @ptrCast(@alignCast(ptr));
int_ptr.* = 100;

// Cast to different type
ptr = @ptrCast(&f);
const float_ptr: *f32 = @ptrCast(@alignCast(ptr));
float_ptr.* = 2.71;
```

**Special features:**
- `*anyopaque` is Zig's equivalent to `void*`
- `@ptrCast` converts between pointer types (target type is inferred from context)
- `@alignCast` is required for different alignment
- Type safety is checked at compile time

**Further reading:**
- [Zig Documentation - Pointers](https://ziglang.org/documentation/master/#Pointers)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Void Pointer
int intValue = 42;
void *ptr = &intValue;

// Cast back to concrete type
int *intPtr = (int *)ptr;
int result = *intPtr; // 42
```

**Special features:**
- Full C void pointer support as C superset
- `void *` can point to any data type
- Explicit cast necessary for dereferencing
- `id` type is Objective-C equivalent for object pointers

**Further reading:**
- [Apple Documentation - Programming with Objective-C](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html)

</TabItem>
</Tabs>


## 3.10.7. Bit Fields

Bit fields allow addressing individual bits or bit groups within a struct to save memory space and map hardware registers.

### Languages {#sprachen}

<Tabs availableTabs={['c', 'carbon', 'cpp', 'd', 'nim', 'object-pascal', 'objective-c', 'odin', 'zig']} orangeTabs={['rust', 'v']}>
<TabItem value="c" label="C">

```c
// Bit Fields
struct Flags {
    unsigned int flag1 : 1;
    unsigned int flag2 : 1;
    unsigned int flag3 : 1;
    unsigned int reserved : 5;
    unsigned int value : 8;
};

struct Flags f = {0};
f.flag1 = 1;
f.flag2 = 0;
f.value = 42;
```

**Special features:**
- Bit fields are defined with `: n` syntax
- `n` specifies the number of bits
- Memory efficient
- Implementation-dependent byte order

**Further reading:**
- [C Standard - Bit Fields](https://en.cppreference.com/w/c/language/bit_field)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Bit Fields
struct Flags {
    unsigned int flag1 : 1;
    unsigned int flag2 : 1;
    unsigned int flag3 : 1;
    unsigned int reserved : 5;
    unsigned int value : 8;
};

Flags f{};
f.flag1 = 1;
f.flag2 = 0;
f.value = 42;
```

**Special features:**
- Bit fields are defined with `: n` syntax
- `n` specifies the number of bits
- Memory efficient
- Implementation-dependent byte order

**Further reading:**
- [cppreference.com - Bit Fields](https://en.cppreference.com/w/cpp/language/bit_field)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Bit Fields
struct Flags {
    var flag1: u1 : 1;
    var flag2: u1 : 1;
    var flag3: u1 : 1;
    var reserved: u5 : 5;
    var value: u8 : 8;
}

var f: Flags = {};
f.flag1 = 1;
f.flag2 = 0;
f.value = 42;
```

**Special features:**
- Bit fields are defined with `: n` syntax
- Experimental language, syntax may still change
- `n` specifies the number of bits
- Memory efficient

**Further reading:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="d" label="D">

```d
// Bit Fields
struct Flags {
    uint flag1 : 1;
    uint flag2 : 1;
    uint flag3 : 1;
    uint reserved : 5;
    uint value : 8;
}

Flags f;
f.flag1 = 1;
f.flag2 = 0;
f.value = 42;
```

**Special features:**
- Bit fields are defined with `: n` syntax
- `n` specifies the number of bits
- Memory efficient
- Implementation-dependent byte order

**Further reading:**
- [D Language - Bit Fields](https://dlang.org/spec/struct.html#bit-fields)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Bit Fields: bitfields pragma
type
  Flags = object
    flag1 {.bitsize: 1.}: uint8
    flag2 {.bitsize: 1.}: uint8
    flag3 {.bitsize: 1.}: uint8
    reserved {.bitsize: 5.}: uint8
    value {.bitsize: 8.}: uint8

var f: Flags
f.flag1 = 1
f.flag2 = 0
f.value = 42
```

**Special features:**
- Bit fields are defined with `{.bitsize: n.}` pragma
- `n` specifies the number of bits
- Memory efficient
- Useful for C interoperability

**Further reading:**
- [Nim Documentation - Bit Fields](https://nim-lang.org/docs/manual.html#pragmas-bitsize-pragma)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Bit Fields: packed records
type
  Flags = packed record
    flag1: 0..1;
    flag2: 0..1;
    flag3: 0..1;
    reserved: 0..31;
    value: 0..255;
  end;

var
  f: Flags;
begin
  f.flag1 := 1;
  f.flag2 := 0;
  f.value := 42;
end;
```

**Special features:**
- Bit fields are defined with `packed record` and subrange types
- Subrange types determine the bit width
- Memory efficient
- Implementation-dependent byte order

**Further reading:**
- [Free Pascal Documentation - Packed Records](https://www.freepascal.org/docs-html/ref/refse19.html#x56-580003.8.1)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Bit Fields: #packed struct
Flags :: struct #packed {
    flag1: u1,
    flag2: u1,
    flag3: u1,
    reserved: u5,
    value: u8,
}

f: Flags
f.flag1 = 1
f.flag2 = 0
f.value = 42
```

**Special features:**
- Bit fields are defined with `#packed` and bit types
- Bit types (`u1`, `u5`, etc.) determine the bit width
- Memory efficient
- Explicit bit types for precise control

**Further reading:**
- [Odin Documentation - Structs](https://odin-lang.org/docs/overview/#structs)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Bit fields: bitfield crate or manual bit manipulation
// No native bit field syntax, but bitfield crate available
use bitfield::bitfield;

bitfield! {
    struct Flags(u16);
    impl Debug;
    u8, flag1, set_flag1: 0, 0;
    u8, flag2, set_flag2: 1, 1;
    u8, flag3, set_flag3: 2, 2;
    u8, reserved, set_reserved: 3, 7;
    u8, value, set_value: 8, 15;
}

let mut f = Flags(0);
f.set_flag1(1);
f.set_flag2(0);
f.set_value(42);
```

**Special features:**
- No native bit field syntax
- Bit manipulation with bitfield crate or manually
- Memory efficient with manual bit manipulation
- Type-safe with bitfield crate

**Further reading:**
- [Rust bitfield crate](https://docs.rs/bitfield/latest/bitfield/)

</TabItem>
<TabItem value="v" label="V">

```v
// Bit Fields: Packed Structs mit bitweiser Manipulation
@[packed]
struct Flags {
    data u16
}

fn (f Flags) get_flag1() bool {
    return (f.data & 0x01) != 0
}

fn (f Flags) get_flag2() bool {
    return (f.data & 0x02) != 0
}

fn (f Flags) get_value() u8 {
    return u8((f.data >> 8) & 0xFF)
}

mut f := Flags{data: 0}
f = Flags{data: f.data | 0x01}  // set flag1
f = Flags{data: f.data | (42 << 8)}  // set value
```

**Special features:**
- V has no native C-style bit fields
- Uses `@[packed]` structs with manual bit manipulation
- Bitwise operators (`&`, `|`, `<<`, `>>`) for access
- Less convenient than true bit fields, but functionally equivalent

**Further reading:**
- [V Documentation - Structs](https://github.com/vlang/v/blob/master/doc/docs.md#structs)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Bit Fields: packed struct
const Flags = packed struct {
    flag1: u1,
    flag2: u1,
    flag3: u1,
    reserved: u5 = 0,
    value: u8,
};

var f = Flags{ .flag1 = 1, .flag2 = 0, .flag3 = 0, .value = 42 };

// Access to individual bits
const is_flag1_set = f.flag1 == 1;  // true
f.flag2 = 1;
```

**Special features:**
- `packed struct` enables bit-precise fields
- Field width is determined by the integer type (u1, u3, u5, etc.)
- All fields must be set at initialization (or have default values)
- Useful for hardware registers and protocol headers

**Further reading:**
- [Zig Documentation - Packed Structs](https://ziglang.org/documentation/master/#packed-struct)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Bit Fields
typedef struct {
    unsigned int isVisible : 1;
    unsigned int isEnabled : 1;
    unsigned int alignment : 3;
    unsigned int padding : 3;
} Flags;

Flags flags = {1, 1, 2, 0};
flags.isVisible = 0;
```

**Special features:**
- Full C bit field support as C superset
- Compact storage of flags and small values
- Width is specified in bits

**Further reading:**
- [Apple Documentation - Programming with Objective-C](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html)

</TabItem>
</Tabs>

