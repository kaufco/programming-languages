---
slug: /typsystem/low-level-types
title: 3.10. Low-Level Types
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 3.10. Low-Level Types

Low-Level-Typen für Systemprogrammierung.

## 3.10.1. Subtypes

Ein Subtyp ist ein Typ, der als eingeschränkte Variante eines Basistyps definiert wird, typischerweise mit Range-Constraints oder anderen Einschränkungen.

### Sprachen {#sprachen}

<Tabs availableTabs={['ada', 'nim', 'object-pascal']}>
<TabItem value="ada" label="Ada">

```ada
-- Subtypes mit Range-Constraints
type Temperature is range -273 .. 1000;
subtype Valid_Temperature is Temperature range 0 .. 100;

type Index is range 1 .. 100;
subtype Small_Index is Index range 1 .. 10;

var temp : Valid_Temperature := 25;
var idx : Small_Index := 5;
```

**Besonderheiten:**
- Subtypes werden mit `subtype` deklariert
- Range-Constraints definieren die gültigen Werte
- Compile-time und Runtime-Prüfung der Constraints
- Subtypes sind kompatibel mit ihrem Basistyp

**Weiterführende Links:**
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

**Besonderheiten:**
- Subrange Types mit `..` Syntax
- Range-Constraints definieren die gültigen Werte
- Compile-time und Runtime-Prüfung der Constraints
- Kompatibel mit dem Basistyp

**Weiterführende Links:**
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
# p = 101  # Fehler: out of range

var b: Byte = 200
echo b  # 200
```

**Besonderheiten:**
- Range Types mit `range[min..max]` Syntax
- Compile-time und Runtime-Prüfung der Grenzen
- Kann auf alle ordinalen Typen angewendet werden

**Weiterführende Links:**
- [Nim Documentation - Subrange Types](https://nim-lang.org/docs/manual.html#types-subrange-types)

</TabItem>
</Tabs>


## 3.10.2. Discriminants

Ein Discriminant ist ein Parameter eines Datentyps, der zur Compile-Zeit oder Runtime die Struktur des Typs bestimmt, typischerweise bei Variant Records.

### Sprachen {#sprachen}

<Tabs availableTabs={['ada', 'nim', 'object-pascal']}>
<TabItem value="ada" label="Ada">

```ada
-- Discriminants für Variant Records
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

**Besonderheiten:**
- Discriminants werden in der Typdefinition deklariert
- Bestimmen die Variante des Records zur Compile-Zeit
- Default-Werte können angegeben werden
- Discriminants können constrained oder unconstrained sein

**Weiterführende Links:**
- [Ada Reference Manual - Discriminants](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-3-7.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Discriminants für Variant Records
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

**Besonderheiten:**
- Discriminants werden im `case`-Statement des Records deklariert
- Bestimmen die Variante des Records zur Compile-Zeit
- Discriminant muss beim Zugriff auf Variant-Felder gesetzt sein
- Type-safe Zugriff auf Variant-Felder

**Weiterführende Links:**
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

**Besonderheiten:**
- Discriminant mit `case`-Feld im Object
- Enum-Typ als Discriminant
- Compile-time Sicherheit bei Feldzugriff

**Weiterführende Links:**
- [Nim Documentation - Object Variants](https://nim-lang.org/docs/manual.html#types-object-variants)

</TabItem>
</Tabs>


## 3.10.3. Variant Records

Variant Records sind Records, deren Struktur zur Compile-Zeit oder Runtime durch einen Discriminant bestimmt wird, sodass verschiedene Varianten unterschiedliche Felder haben können.

### Sprachen {#sprachen}

<Tabs availableTabs={['ada', 'c', 'nim', 'object-pascal']}>
<TabItem value="ada" label="Ada">

```ada
-- Variant Records mit Discriminants
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

**Besonderheiten:**
- Variant Records werden mit `case` innerhalb des Records definiert
- Discriminant bestimmt die aktive Variante
- Type-safe Zugriff auf Variant-Felder
- Compile-time Prüfung der Discriminant-Werte

**Weiterführende Links:**
- [Ada Reference Manual - Variant Records](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-3-8.html)

</TabItem>
<TabItem value="c" label="C">

```c
// Variant Records mit Unions
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

**Besonderheiten:**
- Variant Records werden mit `union` innerhalb von `struct` implementiert
- Discriminant (Tag) muss manuell verwaltet werden
- Keine Compile-time Prüfung der Tag-Werte
- Alle Varianten teilen sich denselben Speicher

**Weiterführende Links:**
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

**Besonderheiten:**
- Variant Records werden mit `case` innerhalb des Records definiert
- Discriminant bestimmt die aktive Variante
- Type-safe Zugriff auf Variant-Felder
- Compile-time Prüfung der Discriminant-Werte

**Weiterführende Links:**
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

**Besonderheiten:**
- Object Variants sind Nims Variant Records
- Typ-sicherer Zugriff auf Felder basierend auf dem Discriminant
- Exhaustive `case`-Prüfung

**Weiterführende Links:**
- [Nim Documentation - Object Variants](https://nim-lang.org/docs/manual.html#types-object-variants)

</TabItem>
</Tabs>


## 3.10.4. Structs

Structs sind zusammengesetzte Datentypen, die mehrere Felder unterschiedlicher Typen in einer festen Speicherstruktur zusammenfassen.

### Sprachen {#sprachen}

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

**Besonderheiten:**
- Records sind strukturierte Typen
- Felder haben feste Typen und Positionen
- Value Types, werden per Kopie übergeben
- Zugriff über Punkt-Notation

**Weiterführende Links:**
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

**Besonderheiten:**
- Structs sind zusammengesetzte Datentypen
- Felder haben feste Typen und Positionen
- Value Types, werden per Kopie übergeben
- Zugriff über Punkt-Notation

**Weiterführende Links:**
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

**Besonderheiten:**
- Structs sind zusammengesetzte Datentypen
- Structs sind standardmäßig public (im Gegensatz zu class)
- Können Methoden und Konstruktoren haben
- Value Types, werden per Kopie übergeben

**Weiterführende Links:**
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

**Besonderheiten:**
- Structs sind zusammengesetzte Datentypen
- Experimentelle Sprache, Syntax kann sich noch ändern
- Value Types
- Zugriff über Punkt-Notation

**Weiterführende Links:**
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

**Besonderheiten:**
- Structs sind Value Types
- Felder haben feste Typen
- Zugriff über Punkt-Notation
- Werden per Kopie übergeben

**Weiterführende Links:**
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

**Besonderheiten:**
- Structs sind Value Types
- Felder haben feste Typen
- Können Methoden haben
- Zugriff über Punkt-Notation

**Weiterführende Links:**
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

// Zugriff über Punkt-Notation
val px = p.x
val pname = alice.name
```

**Besonderheiten:**
- `struct` definiert einen Value Type mit benannten Feldern
- Structs sind Product Types (ein einzelner Konstruktor)
- Felder werden über Punkt-Notation (automatisch generierte Accessor-Funktionen) zugegriffen
- Structs sind immer Value Types und werden per Kopie übergeben
- Koka generiert automatisch Konstruktor- und Accessor-Funktionen

**Weiterführende Links:**
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

-- Zugriff über Punkt-Notation
def px : Float := p.x
def pname : String := alice.name

-- Funktionale Updates (copy-with-update)
def p2 : Point := { p with x := 3.0 }
```

**Besonderheiten:**
- `structure` definiert einen Record-Typ mit benannten Feldern
- Felder werden über Punkt-Notation zugegriffen (automatisch generierte Projektionen)
- Funktionale Updates mit `{ record with field := value }` Syntax
- Structures können `extends` für Vererbung verwenden
- Structures sind immer Value Types

**Weiterführende Links:**
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

% Erstellen
:- pred main(io::di, io::uo) is det.
main(!IO) :-
    P = point(1.0, 2.0),
    Alice = person("Alice", 30),

    % Zugriff über automatisch generierte Feld-Accessor-Funktionen
    io.write_float(P ^ x, !IO), io.nl(!IO),
    io.write_string(Alice ^ name, !IO), io.nl(!IO),

    % Funktionale Updates
    P2 = P ^ x := 3.0,
    io.write_float(P2 ^ x, !IO), io.nl(!IO).
```

**Besonderheiten:**
- Structs werden in Mercury als Typen mit einem einzelnen Konstruktor und benannten Feldern definiert.
- Der Compiler generiert automatisch Feld-Accessor-Funktionen (`^ feldname`).
- Funktionale Updates mit `Record ^ field := Value` Syntax.
- Alle Typen sind Value Types (unveränderlich), Änderungen erzeugen neue Werte.

**Weiterführende Links:**
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

**Besonderheiten:**
- Object types sind strukturierte Typen
- Felder haben feste Typen
- Value Types
- Zugriff über Punkt-Notation

**Weiterführende Links:**
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

**Besonderheiten:**
- Records sind strukturierte Typen
- Felder haben feste Typen
- Value Types
- Zugriff über Punkt-Notation

**Weiterführende Links:**
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

**Besonderheiten:**
- Structs sind zusammengesetzte Datentypen
- Felder haben feste Typen
- Können Methoden haben (impl blocks)
- Value Types, werden per Kopie übergeben

**Weiterführende Links:**
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

**Besonderheiten:**
- Structs sind Value Types
- Felder haben feste Typen
- Können Methoden haben
- Werden per Kopie übergeben

**Weiterführende Links:**
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

**Besonderheiten:**
- Structs sind zusammengesetzte Datentypen
- Felder haben feste Typen
- Können Methoden haben
- Value Types

**Weiterführende Links:**
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

// Verwendung
Point p = {10, 20};
Rectangle rect = {{0, 0}, 100, 50};

p.x = 30;
rect.width = 200;
```

**Besonderheiten:**
- Vollständige C-Struct-Unterstützung als C-Superset
- Structs sind Value Types (Kopie bei Zuweisung)
- Häufig verwendet für leichtgewichtige Datenstrukturen (z.B. CGPoint, CGRect, NSRange)
- Kein Methodendefinition in Structs (im Gegensatz zu C++)

**Weiterführende Links:**
- [Apple Documentation - Programming with Objective-C](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html)

</TabItem>
</Tabs>



---

### No Classes (Structs + Methods only)


Sprachen, die keine Klassen haben, sondern nur Strukturen mit zugeordneten Methoden.


<Tabs availableTabs={['c', 'go', 'julia', 'koka', 'lean4', 'roc', 'rust', 'v', 'zig']}>
<TabItem value="go" label="Go">

```go
type Person struct {
    Name string
    Age  int
}

func (p Person) Greet() {
    fmt.Printf("Hallo, ich bin %s\n", p.Name)
}

func (p *Person) SetAge(age int) {
    p.Age = age
}
```

**Besonderheiten:**
- Structs für Datenstrukturen
- Methoden werden mit Receiver-Syntax definiert
- Value Receiver (`Person`) oder Pointer Receiver (`*Person`)

**Weiterführende Links:**
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
        println!("Hallo, ich bin {}", self.name);
    }
    
    fn set_age(&mut self, age: u32) {
        self.age = age;
    }
}
```

**Besonderheiten:**
- Structs für Datenstrukturen
- `impl`-Block für Methoden
- `&self` für immutable, `&mut self` für mutable Zugriffe

**Weiterführende Links:**
- [Rust Documentation - Structs](https://doc.rust-lang.org/book/ch05-00-structs.html)

</TabItem>
<TabItem value="c" label="C">

```c
typedef struct {
    char* name;
    int age;
} Person;

void person_greet(Person* p) {
    printf("Hallo, ich bin %s\n", p->name);
}

void person_set_age(Person* p, int age) {
    p->age = age;
}
```

**Besonderheiten:**
- Structs für Datenstrukturen
- Methoden als normale Funktionen mit Struct-Pointer als erstem Parameter
- Keine echte Objektorientierung

**Weiterführende Links:**
- [C Documentation - Structures](https://en.cppreference.com/w/c/language/struct)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
const Person = struct {
    name: []const u8,
    age: u32,
    
    pub fn greet(self: Person) void {
        std.debug.print("Hallo, ich bin {s}\n", .{self.name});
    }
    
    pub fn setAge(self: *Person, age: u32) void {
        self.age = age;
    }
};
```

**Besonderheiten:**
- Structs für Datenstrukturen
- Methoden werden innerhalb des Structs definiert
- `self` für Value, `*self` für Pointer

**Weiterführende Links:**
- [Zig Documentation - Structs](https://ziglang.org/documentation/0.11.0/#structs)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Structs statt Klassen
struct Point
    x::Float64
    y::Float64
end

mutable struct MutablePoint
    x::Float64
    y::Float64
end

# Methoden werden extern definiert (Multiple Dispatch)
distance(p1::Point, p2::Point) = sqrt((p1.x - p2.x)^2 + (p1.y - p2.y)^2)

p1 = Point(0.0, 0.0)
p2 = Point(3.0, 4.0)
println(distance(p1, p2))  # 5.0
```

**Besonderheiten:**
- Keine Klassen – nur `struct` und `mutable struct`
- Methoden gehören nicht zu Typen, sondern zu Funktionen (Multiple Dispatch)
- Vererbung nur für abstrakte Typen, nicht für konkrete Structs
- Trennung von Daten und Verhalten

**Weiterführende Links:**
- [Julia Documentation - Composite Types](https://docs.julialang.org/en/v1/manual/types/#Composite-Types)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Keine Klassen: Structs + Funktionen
struct point
  x: float64
  y: float64

// Funktionen operieren auf Structs
fun distance(p1: point, p2: point): float64
  val dx = p1.x - p2.x
  val dy = p1.y - p2.y
  sqrt(dx * dx + dy * dy)

val p1 = Point(0.0, 0.0)
val p2 = Point(3.0, 4.0)
```

**Besonderheiten:**
- Keine Klassen — nur `struct` und `type` (ADTs)
- Methoden werden als reguläre Funktionen definiert, die den Struct als Parameter nehmen
- Dot-Notation (`p1.x`) nutzt automatisch generierte Accessor-Funktionen
- Trennung von Daten und Verhalten (funktionaler Stil)

**Weiterführende Links:**
- [Koka Language Guide - Structs](https://koka-lang.github.io/koka/doc/book.html#sec-structs)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Keine Klassen: Structures + Funktionen + Type Classes
structure Point where
  x : Float
  y : Float

-- Funktionen operieren auf Structures
def distance (p1 p2 : Point) : Float :=
  let dx := p1.x - p2.x
  let dy := p1.y - p2.y
  Float.sqrt (dx * dx + dy * dy)

-- Type Classes statt Vererbung
class Describable (α : Type) where
  describe : α → String

instance : Describable Point where
  describe p := s!"Point({p.x}, {p.y})"
```

**Besonderheiten:**
- Keine Klassen — nur `structure` und `inductive` Typen
- Methoden als reguläre Funktionen oder über Namespaces (`Point.distance`)
- Polymorphismus über Type Classes statt Vererbung
- Trennung von Daten und Verhalten (funktionaler Stil)

**Weiterführende Links:**
- [Lean 4 Documentation - Structures](https://lean-lang.org/theorem_proving_in_lean4/structures_and_records.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Keine Klassen: Records + Funktionen
Point : { x : F64, y : F64 }

distance : Point, Point -> F64
distance = \p1, p2 ->
    dx = p1.x - p2.x
    dy = p1.y - p2.y
    Num.sqrt (dx * dx + dy * dy)
```

**Besonderheiten:**
- Keine Klassen oder Objekte
- Records für Datenstrukturen
- Freistehende Funktionen statt Methoden

**Weiterführende Links:**
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
    return 'Hallo, ich bin ${p.name}'
}

fn (mut p Person) birthday() {
    p.age++
}

mut person := Person{name: 'Alice', age: 30}
println(person.greet())
person.birthday()
```

**Besonderheiten:**
- Keine Klassen, nur Structs
- Methoden werden extern mit Receiver definiert
- `mut` Receiver für mutierende Methoden
- Struct-Embedding statt Vererbung

**Weiterführende Links:**
- [V Documentation - Structs](https://github.com/vlang/v/blob/master/doc/docs.md#structs)

</TabItem>
</Tabs>

## 3.10.5. Unions (C-style)

Unions sind Datentypen, bei denen alle Felder denselben Speicherplatz teilen, sodass nur ein Feld zur Zeit gültig ist.

### Sprachen {#sprachen}

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
// v.f und v.c teilen sich denselben Speicher
```

**Besonderheiten:**
- Alle Felder teilen sich denselben Speicher
- Größe ist die Größe des größten Feldes
- Keine Type-Safety - Programmierer muss Tag manuell verwalten
- Nützlich für Memory-Mapping und Type-Punning

**Weiterführende Links:**
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
// v.f und v.c teilen sich denselben Speicher
```

**Besonderheiten:**
- Alle Felder teilen sich denselben Speicher
- Größe ist die Größe des größten Feldes
- Seit C++11 können Unions Member mit nicht-trivialen Konstruktoren haben
- Keine Type-Safety - Programmierer muss Tag manuell verwalten

**Weiterführende Links:**
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
// v.f und v.c teilen sich denselben Speicher
```

**Besonderheiten:**
- Alle Felder teilen sich denselben Speicher
- Experimentelle Sprache, Syntax kann sich noch ändern
- Größe ist die Größe des größten Feldes
- Keine Type-Safety

**Weiterführende Links:**
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
// v.f und v.c teilen sich denselben Speicher
```

**Besonderheiten:**
- Alle Felder teilen sich denselben Speicher
- Größe ist die Größe des größten Feldes
- Keine Type-Safety
- Nützlich für Memory-Mapping

**Weiterführende Links:**
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

**Besonderheiten:**
- Object variants mit Discriminant
- Type-safe Zugriff auf Variant-Felder
- Compile-time Prüfung des Discriminants
- Alle Varianten teilen sich denselben Speicher

**Weiterführende Links:**
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
  // v.f und v.c teilen sich denselben Speicher
end;
```

**Besonderheiten:**
- Variant Records mit Unions
- Alle Varianten teilen sich denselben Speicher
- Keine Type-Safety - Programmierer muss Tag manuell verwalten
- Größe ist die Größe des größten Feldes

**Weiterführende Links:**
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
// v.f und v.c teilen sich denselben Speicher
```

**Besonderheiten:**
- Alle Felder teilen sich denselben Speicher
- Größe ist die Größe des größten Feldes
- Keine Type-Safety
- Nützlich für Memory-Mapping

**Weiterführende Links:**
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
    // v.f und v.c teilen sich denselben Speicher
    // Zugriff ist unsafe
}
```

**Besonderheiten:**
- Alle Felder teilen sich denselben Speicher
- Zugriff ist `unsafe` (seit Rust 1.19.0)
- Größe ist die Größe des größten Feldes
- Keine Type-Safety

**Weiterführende Links:**
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
// v.f und v.c teilen sich denselben Speicher
```

**Besonderheiten:**
- Alle Felder teilen sich denselben Speicher
- Größe ist die Größe des größten Feldes
- Keine Type-Safety
- Nützlich für Memory-Mapping

**Weiterführende Links:**
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
// v.f und v.c teilen sich denselben Speicher
```

**Besonderheiten:**
- Alle Felder teilen sich denselben Speicher
- Größe ist die Größe des größten Feldes
- Tagged unions mit `union(enum)` für Type-Safety
- Untagged unions für Memory-Mapping

**Weiterführende Links:**
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

// Verwendung
Value v;
v.intValue = 42;
v.floatValue = 3.14f; // Überschreibt intValue
```

**Besonderheiten:**
- Vollständige C-Union-Unterstützung als C-Superset
- Alle Mitglieder teilen denselben Speicherbereich
- Nur ein Mitglied kann gleichzeitig einen gültigen Wert haben
- Größe entspricht dem größten Mitglied

**Weiterführende Links:**
- [Apple Documentation - Programming with Objective-C](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html)

</TabItem>
</Tabs>


## 3.10.6. Void Pointers

Void Pointers sind generische Zeiger, die auf Daten beliebigen Typs zeigen können und typischerweise für Low-Level-Programmierung und Interoperabilität verwendet werden.

### Sprachen {#sprachen}

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

**Besonderheiten:**
- `void*` ist ein generischer Zeiger
- Kann auf Daten beliebigen Typs zeigen
- Muss explizit zu einem konkreten Typ gecastet werden
- Nützlich für generische Funktionen und Memory-Management

**Weiterführende Links:**
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

**Besonderheiten:**
- `void*` ist ein generischer Zeiger
- Kann auf Daten beliebigen Typs zeigen
- Sollte `static_cast` statt C-Style-Cast verwenden
- Weniger häufig verwendet als in C (Templates bevorzugt)

**Weiterführende Links:**
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

**Besonderheiten:**
- Raw pointers (`i8*`) als generische Zeiger
- Experimentelle Sprache, Syntax kann sich noch ändern
- Muss explizit gecastet werden
- Nützlich für Low-Level-Programmierung

**Weiterführende Links:**
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

**Besonderheiten:**
- `void*` ist ein generischer Zeiger
- Kann auf Daten beliebigen Typs zeigen
- Muss mit `cast()` zu einem konkreten Typ gecastet werden
- Nützlich für Interoperabilität mit C

**Weiterführende Links:**
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

**Besonderheiten:**
- `pointer` ist ein generischer Zeiger
- Kann auf Daten beliebigen Typs zeigen
- Muss mit `cast` zu einem konkreten Typ gecastet werden
- Nützlich für Interoperabilität mit C

**Weiterführende Links:**
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

**Besonderheiten:**
- `Pointer` ist ein generischer Zeiger
- Kann auf Daten beliebigen Typs zeigen
- Muss zu einem typisierten Zeiger gecastet werden
- Nützlich für Interoperabilität mit C

**Weiterführende Links:**
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

**Besonderheiten:**
- `rawptr` ist ein generischer Zeiger
- Kann auf Daten beliebigen Typs zeigen
- Muss mit `cast` zu einem konkreten Typ gecastet werden
- Nützlich für Low-Level-Programmierung

**Weiterführende Links:**
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

**Besonderheiten:**
- `*const ()` oder `*mut ()` als generische Zeiger
- Zugriff ist `unsafe`
- Muss explizit zu einem konkreten Typ gecastet werden
- Selten verwendet (Generics bevorzugt)

**Weiterführende Links:**
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

**Besonderheiten:**
- `voidptr` ist ein generischer Zeiger
- Kann auf Daten beliebigen Typs zeigen
- Muss zu einem typisierten Zeiger gecastet werden
- Dereferenzierung erfordert `unsafe`-Block
- Nützlich für Interoperabilität mit C

**Weiterführende Links:**
- [V Documentation - Pointers](https://github.com/vlang/v/blob/master/doc/docs.md#pointers)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Void Pointers: *anyopaque
var x: i32 = 42;
var f: f32 = 3.14;

// Cast zu *anyopaque (generischer Pointer)
var ptr: *anyopaque = @ptrCast(&x);

// Zurück zu *i32 casten
const int_ptr: *i32 = @ptrCast(@alignCast(ptr));
int_ptr.* = 100;

// Zu anderem Typ casten
ptr = @ptrCast(&f);
const float_ptr: *f32 = @ptrCast(@alignCast(ptr));
float_ptr.* = 2.71;
```

**Besonderheiten:**
- `*anyopaque` ist der Zig-Equivalent zu `void*`
- `@ptrCast` konvertiert zwischen Pointer-Typen (Zieltyp wird aus Kontext abgeleitet)
- `@alignCast` ist erforderlich bei unterschiedlichem Alignment
- Typ-Sicherheit wird zur Compile-Zeit geprüft

**Weiterführende Links:**
- [Zig Documentation - Pointers](https://ziglang.org/documentation/master/#Pointers)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Void Pointer
int intValue = 42;
void *ptr = &intValue;

// Cast zurück zum konkreten Typ
int *intPtr = (int *)ptr;
int result = *intPtr; // 42
```

**Besonderheiten:**
- Vollständige C-Void-Pointer-Unterstützung als C-Superset
- `void *` kann auf beliebige Datentypen zeigen
- Expliziter Cast notwendig für Dereferenzierung
- `id`-Typ ist der Objective-C-Äquivalent für Objekt-Pointer

**Weiterführende Links:**
- [Apple Documentation - Programming with Objective-C](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html)

</TabItem>
</Tabs>


## 3.10.7. Bit Fields

Bit Fields ermöglichen es, einzelne Bits oder Bit-Gruppen innerhalb eines Structs zu adressieren, um Speicherplatz zu sparen und Hardware-Register zu mappen.

### Sprachen {#sprachen}

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

**Besonderheiten:**
- Bit Fields werden mit `: n` Syntax definiert
- `n` gibt die Anzahl der Bits an
- Speicherplatz-effizient
- Implementierungsabhängige Byte-Reihenfolge

**Weiterführende Links:**
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

**Besonderheiten:**
- Bit Fields werden mit `: n` Syntax definiert
- `n` gibt die Anzahl der Bits an
- Speicherplatz-effizient
- Implementierungsabhängige Byte-Reihenfolge

**Weiterführende Links:**
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

**Besonderheiten:**
- Bit Fields werden mit `: n` Syntax definiert
- Experimentelle Sprache, Syntax kann sich noch ändern
- `n` gibt die Anzahl der Bits an
- Speicherplatz-effizient

**Weiterführende Links:**
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

**Besonderheiten:**
- Bit Fields werden mit `: n` Syntax definiert
- `n` gibt die Anzahl der Bits an
- Speicherplatz-effizient
- Implementierungsabhängige Byte-Reihenfolge

**Weiterführende Links:**
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

**Besonderheiten:**
- Bit Fields werden mit `{.bitsize: n.}` pragma definiert
- `n` gibt die Anzahl der Bits an
- Speicherplatz-effizient
- Nützlich für C-Interoperabilität

**Weiterführende Links:**
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

**Besonderheiten:**
- Bit Fields werden mit `packed record` und Subrange-Types definiert
- Subrange-Types bestimmen die Bit-Breite
- Speicherplatz-effizient
- Implementierungsabhängige Byte-Reihenfolge

**Weiterführende Links:**
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

**Besonderheiten:**
- Bit Fields werden mit `#packed` und Bit-Types definiert
- Bit-Types (`u1`, `u5`, etc.) bestimmen die Bit-Breite
- Speicherplatz-effizient
- Explizite Bit-Types für präzise Kontrolle

**Weiterführende Links:**
- [Odin Documentation - Structs](https://odin-lang.org/docs/overview/#structs)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Bit Fields: bitfield crate oder manuelle Bit-Manipulation
// Keine native Bit Field Syntax, aber bitfield crate verfügbar
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

**Besonderheiten:**
- Keine native Bit Field Syntax
- Bit-Manipulation mit bitfield crate oder manuell
- Speicherplatz-effizient mit manueller Bit-Manipulation
- Type-safe mit bitfield crate

**Weiterführende Links:**
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
f = Flags{data: f.data | 0x01}  // flag1 setzen
f = Flags{data: f.data | (42 << 8)}  // value setzen
```

**Besonderheiten:**
- V hat keine nativen C-style Bit Fields
- Verwendet `@[packed]` Structs mit manueller Bit-Manipulation
- Bitweise Operatoren (`&`, `|`, `<<`, `>>`) für Zugriff
- Weniger komfortabel als echte Bit Fields, aber funktional äquivalent

**Weiterführende Links:**
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

// Zugriff auf einzelne Bits
const is_flag1_set = f.flag1 == 1;  // true
f.flag2 = 1;
```

**Besonderheiten:**
- `packed struct` ermöglicht Bit-genaue Felder
- Feldbreite wird durch den Integer-Typ bestimmt (u1, u3, u5, etc.)
- Alle Felder müssen bei Initialisierung gesetzt werden (oder Default-Werte haben)
- Nützlich für Hardware-Register und Protokoll-Header

**Weiterführende Links:**
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

**Besonderheiten:**
- Vollständige C-Bit-Field-Unterstützung als C-Superset
- Kompakte Speicherung von Flags und kleinen Werten
- Breite wird in Bits angegeben

**Weiterführende Links:**
- [Apple Documentation - Programming with Objective-C](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html)

</TabItem>
</Tabs>

