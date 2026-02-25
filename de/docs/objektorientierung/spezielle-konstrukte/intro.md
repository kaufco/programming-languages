---
slug: /objektorientierung/spezielle-konstrukte
title: 8.7. Spezielle Konstrukte
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 8.7. Spezielle Konstrukte

Spezielle Operatoren für spezifische Anwendungsfälle.

## 8.7.1. Records / Data Classes / Case Classes

### Records / Data Classes


Unveränderliche Datenstrukturen mit automatisch generierten Methoden für Gleichheitsprüfung, String-Repräsentation und andere Standardoperationen.


<Tabs availableTabs={['csharp', 'dart', 'fsharp', 'groovy', 'idris', 'java', 'koka', 'kotlin', 'lean4', 'python', 'roc', 'rust', 'scala', 'swift']} orangeTabs={['typescript']}>
<TabItem value="csharp" label="C#">

```csharp
// Records (seit C# 9.0)
public record Person(string Name, int Age);

var person1 = new Person("Max", 30);
var person2 = new Person("Max", 30);

// Automatische Gleichheitsprüfung
bool equal = person1 == person2; // true

// Automatische ToString-Methode
string str = person1.ToString(); // "Person { Name = Max, Age = 30 }"
```

**Besonderheiten:**
- Records seit C# 9.0
- Automatische Gleichheitsprüfung basierend auf Werten
- Automatische ToString-Methode
- Unterstützt `with`-Ausdrücke für unveränderliche Updates

**Weiterführende Links:**
- [Microsoft C# Documentation - Records](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/record)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Records (seit Dart 3.0)
var person = (name: 'Max', age: 30);

// Zugriff auf Felder
String name = person.name;
int age = person.age;

// Gleichheitsprüfung
var person2 = (name: 'Max', age: 30);
bool equal = person == person2; // true
```

**Besonderheiten:**
- Records seit Dart 3.0
- Automatische Gleichheitsprüfung basierend auf Werten
- Unveränderlich und typsicher
- Unterstützt Named und Positional Records

**Weiterführende Links:**
- [Dart Language - Records](https://dart.dev/language/records)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Records
type Person = {
    Name: string
    Age: int
}

let person1 = { Name = "Max"; Age = 30 }
let person2 = { Name = "Max"; Age = 30 }

// Automatische Gleichheitsprüfung
let equal = person1 = person2 // true

// Automatische ToString-Methode
let str = person1.ToString() // "Person { Name = Max; Age = 30 }"
```

**Besonderheiten:**
- Records sind ein fundamentales Sprachfeature
- Automatische Gleichheitsprüfung basierend auf Werten
- Automatische ToString-Methode
- Unterstützt `with`-Ausdrücke für unveränderliche Updates

**Weiterführende Links:**
- [F# Documentation - Records](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/records)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Records (seit Groovy 4.0)
record Person(String name, int age) {}

def person1 = new Person("Max", 30)
def person2 = new Person("Max", 30)

// Automatische Gleichheitsprüfung
boolean equal = person1 == person2 // true

// Automatische ToString-Methode
String str = person1.toString() // "Person[name=Max, age=30]"
```

**Besonderheiten:**
- Records seit Groovy 4.0 mit `record`-Schlüsselwort
- Automatische `equals()`, `hashCode()` und `toString()` Methoden
- Immutable by default (Properties sind final)
- Kompakte, deklarative Syntax

**Weiterführende Links:**
- [Groovy Documentation - Record Classes](https://groovy-lang.org/objectorientation.html#_record_classes)

</TabItem>
<TabItem value="java" label="Java">

```java
// Records (seit Java 14)
public record Person(String name, int age) {}

Person person1 = new Person("Max", 30);
Person person2 = new Person("Max", 30);

// Automatische Gleichheitsprüfung
boolean equal = person1.equals(person2); // true

// Automatische ToString-Methode
String str = person1.toString(); // "Person[name=Max, age=30]"
```

**Besonderheiten:**
- Records seit Java 14
- Automatische Gleichheitsprüfung basierend auf Werten
- Automatische ToString-Methode
- Automatische Getter-Methoden
- Unveränderlich (final fields)

**Weiterführende Links:**
- [Oracle Java Documentation - Records](https://docs.oracle.com/javase/specs/jls/se17/html/jls-8.html#jls-8.10)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Records / Structs
struct person
  name: string
  age: int

val person1 = Person("Max", 30)
val person2 = Person("Max", 30)

// Automatische Gleichheitsprüfung
val equal = person1 == person2 // True

// Automatische Feld-Accessoren
val n = person1.name // "Max"
val a = person1.age  // 30

// Funktionales Update (Copy with modification)
val older = person1(age = 31) // Person("Max", 31)
```

**Besonderheiten:**
- `struct` definiert Records mit benannten Feldern
- Automatische Konstruktor-Generierung
- Automatische Feld-Accessoren (getter-Funktionen)
- Strukturelle Gleichheit mit `==`
- Funktionales Update durch Konstruktor-Aufruf mit Named Parameters
- Records sind standardmäßig unveränderlich

**Weiterführende Links:**
- [Koka Language Guide - Structs](https://koka-lang.github.io/koka/doc/book.html#sec-structs)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Data Classes
data class Person(val name: String, val age: Int)

val person1 = Person("Max", 30)
val person2 = Person("Max", 30)

// Automatische Gleichheitsprüfung
val equal = person1 == person2 // true

// Automatische ToString-Methode
val str = person1.toString() // "Person(name=Max, age=30)"

// Automatische Copy-Methode
val person3 = person1.copy(age = 31)
```

**Besonderheiten:**
- Data Classes sind ein fundamentales Sprachfeature
- Automatische Gleichheitsprüfung basierend auf Werten
- Automatische ToString-Methode
- Automatische Copy-Methode für unveränderliche Updates
- Automatische Component-Funktionen für Destructuring

**Weiterführende Links:**
- [Kotlin Documentation - Data Classes](https://kotlinlang.org/docs/data-classes.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Structures (Records)
structure Person where
  name : String
  age : Nat
  deriving Repr, BEq

let person1 : Person := { name := "Max", age := 30 }
let person2 : Person := { name := "Max", age := 30 }

-- Automatische Gleichheitsprüfung (via deriving BEq)
person1 == person2  -- true

-- String-Repräsentation (via deriving Repr)
repr person1  -- { name := "Max", age := 30 }

-- Functional Update (Kopie mit Änderungen)
let person3 := { person1 with age := 31 }
```

**Besonderheiten:**
- `structure` ist Lean 4's natives Record-Konzept
- `deriving` für automatische Type Class-Instanzen (Repr, BEq, Hashable, etc.)
- Functional Update mit `{ ... with field := value }` Syntax
- Alle Felder sind standardmäßig immutable

**Weiterführende Links:**
- [Functional Programming in Lean - Structures](https://lean-lang.org/functional_programming_in_lean/getting-to-know/structures.html)

</TabItem>
<TabItem value="python" label="Python">

```python
# Data Classes (seit Python 3.7)
from dataclasses import dataclass

@dataclass
class Person:
    name: str
    age: int

person1 = Person("Max", 30)
person2 = Person("Max", 30)

# Automatische Gleichheitsprüfung
equal = person1 == person2  # True

# Automatische __repr__-Methode
str_repr = repr(person1)  # "Person(name='Max', age=30)"
```

**Besonderheiten:**
- Data Classes seit Python 3.7
- Automatische Gleichheitsprüfung basierend auf Werten
- Automatische __repr__-Methode
- Unterstützt `frozen=True` für Unveränderlichkeit
- Unterstützt `field()` für erweiterte Konfiguration

**Weiterführende Links:**
- [Python Documentation - dataclasses](https://docs.python.org/3/library/dataclasses.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Structs mit derive-Makros
#[derive(Debug, PartialEq, Eq)]
struct Person {
    name: String,
    age: u32,
}

let person1 = Person {
    name: String::from("Max"),
    age: 30,
};

let person2 = Person {
    name: String::from("Max"),
    age: 30,
};

// Automatische Gleichheitsprüfung (durch derive)
let equal = person1 == person2; // true

// Automatische Debug-Formatierung
let str = format!("{:?}", person1); // "Person { name: \"Max\", age: 30 }"
```

**Besonderheiten:**
- Structs mit `derive`-Makros für automatische Implementierungen
- `PartialEq` und `Eq` für Gleichheitsprüfung
- `Debug` für String-Repräsentation
- Unterstützt weitere derive-Makros wie `Clone`, `Copy`, `Hash`

**Weiterführende Links:**
- [The Rust Book - Derive](https://doc.rust-lang.org/book/appendix-03-derivable-traits.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Case Classes
case class Person(name: String, age: Int)

val person1 = Person("Max", 30)
val person2 = Person("Max", 30)

// Automatische Gleichheitsprüfung
val equal = person1 == person2 // true

// Automatische toString-Methode
val str = person1.toString // "Person(Max,30)"

// Automatische Copy-Methode
val person3 = person1.copy(age = 31)
```

**Besonderheiten:**
- Case Classes sind ein fundamentales Sprachfeature
- Automatische Gleichheitsprüfung basierend auf Werten
- Automatische toString-Methode
- Automatische Copy-Methode für unveränderliche Updates
- Automatische Companion-Objekte mit apply/unapply-Methoden

**Weiterführende Links:**
- [Scala Documentation - Case Classes](https://docs.scala-lang.org/tour/case-classes.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Structs (verhalten sich wie Records)
struct Person {
    let name: String
    let age: Int
}

let person1 = Person(name: "Max", age: 30)
let person2 = Person(name: "Max", age: 30)

// Automatische Gleichheitsprüfung (für Equatable)
extension Person: Equatable {}

let equal = person1 == person2 // true

// Automatische String-Repräsentation (für CustomStringConvertible)
extension Person: CustomStringConvertible {
    var description: String {
        return "Person(name: \(name), age: \(age))"
    }
}
```

**Besonderheiten:**
- Structs verhalten sich wie Records
- Automatische Gleichheitsprüfung durch Equatable-Protokoll
- Unterstützt CustomStringConvertible für String-Repräsentation
- Value Types (werden kopiert, nicht referenziert)

**Weiterführende Links:**
- [Swift Documentation - Structures](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/structuresandclasses/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Type Aliases für Records (keine automatischen Methoden)
type Person = {
    readonly name: string;
    readonly age: number;
};

const person1: Person = { name: "Max", age: 30 };
const person2: Person = { name: "Max", age: 30 };

// Manuelle Gleichheitsprüfung
const equal = person1.name === person2.name && person1.age === person2.age;

// Manuelle String-Repräsentation
const str = `Person(name: ${person1.name}, age: ${person1.age})`;
```

**Besonderheiten:**
- Type Aliases für Record-Strukturen
- Keine automatischen Methoden (TypeScript ist strukturell typisiert)
- Unterstützt `readonly` für Unveränderlichkeit
- Manuelle Implementierung von Gleichheitsprüfung und String-Repräsentation erforderlich

**Weiterführende Links:**
- [TypeScript Handbook - Object Types](https://www.typescriptlang.org/docs/handbook/2/objects.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Record Definition
record Person where
    constructor MkPerson
    name : String
    age : Int

-- Instanziierung
alice : Person
alice = MkPerson "Alice" 30

-- Zugriff über generierte Accessor-Funktionen
personName : String
personName = name alice

-- Record Update Syntax
olderAlice : Person
olderAlice = { age := 31 } alice
```

**Besonderheiten:**
- Records generieren automatisch Accessor-Funktionen
- Record Update Syntax mit `{ field := value }`
- Records sind immutable

**Weiterführende Links:**
- [Idris 2 Documentation - Records](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html#records)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Records
User : { name : Str, age : U32, email : Str }

user : User
user = { name: "Alice", age: 30, email: "alice@example.com" }

-- Record Update Syntax
updatedUser = { user & age: 31 }
```

**Besonderheiten:**
- Records sind die primäre strukturierte Datenstruktur
- Record Update Syntax mit `{ record & field: newValue }`
- Immutable by default

**Weiterführende Links:**
- [Roc Documentation - Records](https://www.roc-lang.org/tutorial#records)

</TabItem>
</Tabs>



---

### Case Classes


Spezielle Klassen, die automatisch Companion-Objekte mit apply/unapply-Methoden für Pattern Matching und Konstruktion generieren.


<Tabs availableTabs={['scala', 'kotlin']}>
<TabItem value="scala" label="Scala">

```scala
// Case Classes
case class Person(name: String, age: Int)

// Automatische apply-Methode (Factory-Methode)
val person = Person("Max", 30)

// Automatische unapply-Methode (für Pattern Matching)
person match {
  case Person(name, age) => println(s"$name ist $age Jahre alt")
  case _ => println("Unbekannt")
}

// Automatische Copy-Methode
val person2 = person.copy(age = 31)

// Automatische toString-Methode
val str = person.toString // "Person(Max,30)"

// Automatische Gleichheitsprüfung
val person3 = Person("Max", 30)
val equal = person == person3 // true
```

**Besonderheiten:**
- Case Classes sind ein fundamentales Sprachfeature
- Automatische Companion-Objekte mit apply/unapply-Methoden
- Optimiert für Pattern Matching
- Automatische Copy-Methode für unveränderliche Updates
- Automatische toString-Methode und Gleichheitsprüfung

**Weiterführende Links:**
- [Scala Documentation - Case Classes](https://docs.scala-lang.org/tour/case-classes.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Data Classes (ähnlich wie Case Classes)
data class Person(val name: String, val age: Int)

// Automatische apply-Methode (Konstruktor)
val person = Person("Max", 30)

// Automatische Component-Funktionen (für Destructuring)
val (name, age) = person

// Automatische Copy-Methode
val person2 = person.copy(age = 31)

// Automatische toString-Methode
val str = person.toString() // "Person(name=Max, age=30)"

// Automatische Gleichheitsprüfung
val person3 = Person("Max", 30)
val equal = person == person3 // true
```

**Besonderheiten:**
- Data Classes sind ähnlich wie Case Classes
- Automatische Component-Funktionen für Destructuring
- Automatische Copy-Methode für unveränderliche Updates
- Automatische toString-Methode und Gleichheitsprüfung
- Unterstützt Pattern Matching in when-Ausdrücken

**Weiterführende Links:**
- [Kotlin Documentation - Data Classes](https://kotlinlang.org/docs/data-classes.html)

</TabItem>
</Tabs>


## 8.7.2. toString / equals / hashCode

Standardmethoden zur String-Repräsentation, Gleichheitsprüfung und Hash-Code-Berechnung. Die meisten OOP-Sprachen stellen diese über eine gemeinsame Basisklasse bereit, sodass sie für eigene Typen überschrieben werden können.

### Sprachen

<Tabs availableTabs={['csharp', 'cpp', 'dart', 'fsharp', 'groovy', 'java', 'julia', 'kotlin', 'lean4', 'objective-c', 'python', 'ruby', 'rust', 'scala', 'swift', 'vbnet']} yellowTabs={['go', 'haskell', 'php']}>
<TabItem value="csharp" label="C#">

```csharp
class Point
{
    public int X { get; }
    public int Y { get; }

    public Point(int x, int y) { X = x; Y = y; }

    public override string ToString() => $"Point({X}, {Y})";

    public override bool Equals(object obj) =>
        obj is Point other && X == other.X && Y == other.Y;

    public override int GetHashCode() => HashCode.Combine(X, Y);
}

var p1 = new Point(3, 4);
var p2 = new Point(3, 4);
p1.ToString();                        // "Point(3, 4)"
p1.Equals(p2);                        // true
p1.GetHashCode() == p2.GetHashCode(); // true
```

**Besonderheiten:**
- `ToString()`, `Equals()` und `GetHashCode()` von `System.Object` geerbt
- `HashCode.Combine()` für komfortable Hash-Berechnung (seit .NET Core 2.1)
- `==` muss separat überladen werden
- Kann `IEquatable<T>` implementieren für typsichere Gleichheitsprüfung

**Weiterführende Links:**
- [Microsoft C# Documentation - Object Methods](https://learn.microsoft.com/en-us/dotnet/api/system.object)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Benötigt: #include <iostream>, <functional>
struct Point {
    int x, y;

    // Gleichheit (seit C++20 auch = default möglich)
    bool operator==(const Point& other) const {
        return x == other.x && y == other.y;
    }

    // String-Repräsentation (Konvention: operator<<)
    friend std::ostream& operator<<(std::ostream& os, const Point& p) {
        return os << "Point(" << p.x << ", " << p.y << ")";
    }
};

// Hash-Spezialisierung
template<> struct std::hash<Point> {
    size_t operator()(const Point& p) const {
        return std::hash<int>()(p.x) ^ (std::hash<int>()(p.y) << 1);
    }
};

Point p1{3, 4}, p2{3, 4};
std::cout << p1;       // "Point(3, 4)"
p1 == p2;              // true
```

**Besonderheiten:**
- Keine gemeinsame Basisklasse — `operator==`, `operator<<` und `std::hash` werden einzeln definiert
- `operator==` seit C++20 als `= default` automatisch generierbar
- `std::hash<T>` muss als Template-Spezialisierung definiert werden

**Weiterführende Links:**
- [cppreference - Comparison Operators](https://en.cppreference.com/w/cpp/language/operator_comparison)
- [cppreference - std::hash](https://en.cppreference.com/w/cpp/utility/hash)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
class Point {
  final int x, y;

  Point(this.x, this.y);

  @override
  String toString() => 'Point($x, $y)';

  @override
  bool operator ==(Object other) =>
      other is Point && x == other.x && y == other.y;

  @override
  int get hashCode => Object.hash(x, y);
}

var p1 = Point(3, 4);
var p2 = Point(3, 4);
p1.toString();                // "Point(3, 4)"
p1 == p2;                     // true
p1.hashCode == p2.hashCode;   // true
```

**Besonderheiten:**
- `toString()`, `operator==` und `hashCode` von `Object` geerbt
- `Object.hash()` für komfortable Hash-Berechnung (seit Dart 2.14)
- `@override`-Annotation für Überschreibungen empfohlen

**Weiterführende Links:**
- [Dart Documentation - Object](https://api.dart.dev/stable/dart-core/Object-class.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Records haben automatisch strukturelle Gleichheit
type Point = { X: int; Y: int }

let p1 = { X = 3; Y = 4 }
let p2 = { X = 3; Y = 4 }
p1.ToString()                        // "{ X = 3\n  Y = 4 }"
p1 = p2                              // true (strukturelle Gleichheit)
p1.GetHashCode() = p2.GetHashCode()  // true

// Manuelle Überschreibung
[<CustomEquality; NoComparison>]
type CustomPoint =
    { X: int; Y: int }
    override this.ToString() = sprintf "Point(%d, %d)" this.X this.Y
    override this.Equals(obj) =
        match obj with
        | :? CustomPoint as other -> this.X = other.X && this.Y = other.Y
        | _ -> false
    override this.GetHashCode() = hash (this.X, this.Y)
```

**Besonderheiten:**
- Records und Discriminated Unions haben automatisch strukturelle Gleichheit und Hash-Code
- `=` nutzt strukturelle Gleichheit, nicht Referenzgleichheit
- Manuelle Überschreibung mit `[<CustomEquality; NoComparison>]`-Attribut möglich
- `ToString()`, `Equals()`, `GetHashCode()` von `System.Object` geerbt

**Weiterführende Links:**
- [F# Documentation - Equality](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/equality-comparisons)

</TabItem>
<TabItem value="go" label="Go">

```go
type Point struct {
    X, Y int
}

// Stringer-Interface (toString-Äquivalent)
func (p Point) String() string {
    return fmt.Sprintf("Point(%d, %d)", p.X, p.Y)
}

p1 := Point{3, 4}
p2 := Point{3, 4}
fmt.Println(p1)        // "Point(3, 4)"
fmt.Println(p1 == p2)  // true
```

**Besonderheiten:**
- `fmt.Stringer`-Interface (`String() string`) für String-Repräsentation
- `==` funktioniert automatisch für Structs mit vergleichbaren Feldern
- Kein eingebauter Hash-Code-Mechanismus für benutzerdefinierte Typen
- Kein gemeinsames Basisobjekt — Interfaces statt Vererbung

**Weiterführende Links:**
- [Go Documentation - fmt.Stringer](https://pkg.go.dev/fmt#Stringer)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
class Point {
    int x, y

    Point(int x, int y) { this.x = x; this.y = y }

    @Override
    String toString() { "Point($x, $y)" }

    @Override
    boolean equals(Object other) {
        if (!(other instanceof Point)) return false
        return x == other.x && y == other.y
    }

    @Override
    int hashCode() { Objects.hash(x, y) }
}

def p1 = new Point(3, 4)
def p2 = new Point(3, 4)
p1.toString()                    // "Point(3, 4)"
p1 == p2                         // true (ruft equals auf)
p1.hashCode() == p2.hashCode()  // true
```

**Besonderheiten:**
- Von `java.lang.Object` geerbt, wie in Java
- `==` ruft `equals()` auf (anders als Java, wo `==` Referenzvergleich ist)
- `@EqualsAndHashCode`- und `@ToString`-Transformationen generieren Methoden automatisch

**Weiterführende Links:**
- [Groovy Documentation - Object Orientation](https://groovy-lang.org/objectorientation.html)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
data Point = Point Int Int

-- Automatisch: data Point = Point Int Int deriving (Show, Eq)

-- Manuelle Implementierung
instance Show Point where
    show (Point x y) = "Point(" ++ show x ++ ", " ++ show y ++ ")"

instance Eq Point where
    (Point x1 y1) == (Point x2 y2) = x1 == x2 && y1 == y2

-- show (Point 3 4)         => "Point(3, 4)"
-- Point 3 4 == Point 3 4   => True
```

**Besonderheiten:**
- `Show` (toString) und `Eq` (equals) sind Type Classes aus dem Prelude
- `deriving (Show, Eq)` generiert Instanzen automatisch
- Kein `Hash`-Type-Class im Prelude — `Hashable` aus dem Paket `hashable`

**Weiterführende Links:**
- [Haskell Documentation - Deriving](https://wiki.haskell.org/Deriving)

</TabItem>
<TabItem value="java" label="Java">

```java
class Point {
    int x, y;

    Point(int x, int y) { this.x = x; this.y = y; }

    @Override
    public String toString() {
        return "Point(" + x + ", " + y + ")";
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (!(obj instanceof Point other)) return false;
        return x == other.x && y == other.y;
    }

    @Override
    public int hashCode() {
        return Objects.hash(x, y);
    }
}

Point p1 = new Point(3, 4);
Point p2 = new Point(3, 4);
p1.toString();                        // "Point(3, 4)"
p1.equals(p2);                        // true
p1.hashCode() == p2.hashCode();       // true
```

**Besonderheiten:**
- `toString()`, `equals()` und `hashCode()` von `java.lang.Object` geerbt
- Vertrag: gleiche Objekte müssen gleiche Hash-Codes haben
- `Objects.hash()` für komfortable Hash-Berechnung (seit Java 7)
- Pattern Matching in `instanceof` (seit Java 16)

**Weiterführende Links:**
- [Oracle Java Documentation - Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
struct Point
    x::Int
    y::Int
end

# toString-Äquivalent
Base.show(io::IO, p::Point) = print(io, "Point($(p.x), $(p.y))")

p1 = Point(3, 4)
p2 = Point(3, 4)
println(p1)                # Point(3, 4)
p1 == p2                   # true (strukturell für immutable Structs)
hash(p1) == hash(p2)       # true (automatisch generiert)
```

**Besonderheiten:**
- `Base.show()` für String-Repräsentation (generische Funktion)
- `==` ist standardmäßig strukturell für immutable Structs
- `hash()` wird automatisch für Structs generiert
- Alle drei sind generische Funktionen, keine Methoden auf Objekten

**Weiterführende Links:**
- [Julia Documentation - Base.show](https://docs.julialang.org/en/v1/base/io-network/#Base.show)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
class Point(val x: Int, val y: Int) {
    override fun toString() = "Point($x, $y)"

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other !is Point) return false
        return x == other.x && y == other.y
    }

    override fun hashCode() = 31 * x + y
}

val p1 = Point(3, 4)
val p2 = Point(3, 4)
p1.toString()                    // "Point(3, 4)"
p1 == p2                         // true (ruft equals auf)
p1.hashCode() == p2.hashCode()  // true
```

**Besonderheiten:**
- `toString()`, `equals()` und `hashCode()` von `Any` geerbt
- `data class` generiert alle drei automatisch (siehe 8.7.1)
- `==` ruft `equals()` auf, `===` prüft Referenzgleichheit

**Weiterführende Links:**
- [Kotlin Documentation - Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
structure Point where
  x : Int
  y : Int

-- toString via ToString Type Class
instance : ToString Point where
  toString p := s!"Point({p.x}, {p.y})"

-- equals via BEq Type Class
instance : BEq Point where
  beq p1 p2 := p1.x == p2.x && p1.y == p2.y

-- hashCode via Hashable Type Class
instance : Hashable Point where
  hash p := mixHash (hash p.x) (hash p.y)

let p1 : Point := { x := 3, y := 4 }
let p2 : Point := { x := 3, y := 4 }
toString p1              -- "Point(3, 4)"
p1 == p2                 -- true
hash p1 == hash p2       -- true

-- Alternativ: automatisch via deriving
-- structure Point where
--   x : Int
--   y : Int
--   deriving Repr, BEq, Hashable
```

**Besonderheiten:**
- `ToString` / `Repr` für String-Repräsentation
- `BEq` für Gleichheitsprüfung (`==`)
- `Hashable` für Hash-Berechnung
- Alle drei können automatisch mit `deriving` generiert werden
- `==` nutzt die `BEq`-Instanz

**Weiterführende Links:**
- [Functional Programming in Lean - Type Classes](https://lean-lang.org/functional_programming_in_lean/type-classes.html)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objectivec
@interface Point : NSObject
@property int x, y;
- (instancetype)initWithX:(int)x y:(int)y;
@end

@implementation Point
- (instancetype)initWithX:(int)x y:(int)y {
    self = [super init]; _x = x; _y = y; return self;
}

- (NSString *)description {
    return [NSString stringWithFormat:@"Point(%d, %d)", self.x, self.y];
}

- (BOOL)isEqual:(id)other {
    if (![other isKindOfClass:[Point class]]) return NO;
    Point *p = (Point *)other;
    return self.x == p.x && self.y == p.y;
}

- (NSUInteger)hash { return self.x * 31 + self.y; }
@end

Point *p1 = [[Point alloc] initWithX:3 y:4];
Point *p2 = [[Point alloc] initWithX:3 y:4];
[p1 description];            // "Point(3, 4)"
[p1 isEqual:p2];             // YES
```

**Besonderheiten:**
- `description`, `isEqual:` und `hash` von `NSObject` geerbt
- `isEqual:` und `hash` müssen konsistent sein
- `description` wird von `NSLog()` und String-Interpolation verwendet

**Weiterführende Links:**
- [Apple Documentation - NSObject Protocol](https://developer.apple.com/documentation/objectivec/1418956-nsobject)

</TabItem>
<TabItem value="php" label="PHP">

```php
class Point {
    public function __construct(
        public readonly int $x,
        public readonly int $y
    ) {}

    public function __toString(): string {
        return "Point({$this->x}, {$this->y})";
    }

    public function equals(Point $other): bool {
        return $this->x === $other->x && $this->y === $other->y;
    }
}

$p1 = new Point(3, 4);
$p2 = new Point(3, 4);
echo $p1;                 // "Point(3, 4)"
$p1->equals($p2);         // true
$p1 == $p2;               // true (vergleicht Properties)
```

**Besonderheiten:**
- `__toString()` Magic Method für String-Konvertierung
- Kein eingebautes `equals()`-Interface — `==` vergleicht Properties, `===` prüft Identität
- Kein standardisierter Hash-Code-Mechanismus (`spl_object_hash()` ist identitätsbasiert)
- Constructor Property Promotion (seit PHP 8.0)

**Weiterführende Links:**
- [PHP Documentation - Magic Methods](https://www.php.net/manual/en/language.oop5.magic.php)

</TabItem>
<TabItem value="python" label="Python">

```python
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __str__(self):
        return f"Point({self.x}, {self.y})"

    def __repr__(self):
        return f"Point({self.x!r}, {self.y!r})"

    def __eq__(self, other):
        if not isinstance(other, Point):
            return NotImplemented
        return self.x == other.x and self.y == other.y

    def __hash__(self):
        return hash((self.x, self.y))

p1 = Point(3, 4)
p2 = Point(3, 4)
str(p1)                 # "Point(3, 4)"
p1 == p2                # True
hash(p1) == hash(p2)    # True
```

**Besonderheiten:**
- `__str__` für `str()`/`print()`, `__repr__` für offizielle Debug-Repräsentation
- Definiert man `__eq__`, wird `__hash__` auf `None` gesetzt — muss explizit definiert werden
- `NotImplemented` für unbekannte Typen zurückgeben

**Weiterführende Links:**
- [Python Documentation - Data Model](https://docs.python.org/3/reference/datamodel.html#object.__repr__)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
class Point
  attr_reader :x, :y

  def initialize(x, y)
    @x = x
    @y = y
  end

  def to_s
    "Point(#{x}, #{y})"
  end

  def ==(other)
    other.is_a?(Point) && x == other.x && y == other.y
  end

  alias eql? ==

  def hash
    [x, y].hash
  end
end

p1 = Point.new(3, 4)
p2 = Point.new(3, 4)
p1.to_s              # "Point(3, 4)"
p1 == p2             # true
p1.hash == p2.hash   # true
```

**Besonderheiten:**
- `to_s` für String-Repräsentation, `inspect` für Debug-Ausgabe
- `==` für Wertevergleich, `equal?` für Referenzvergleich
- `eql?` und `hash` müssen konsistent sein (für Hash-Tabellen)

**Weiterführende Links:**
- [Ruby Documentation - Object](https://ruby-doc.org/core-3.1.0/Object.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
use std::fmt;

#[derive(PartialEq, Eq, Hash)]
struct Point { x: i32, y: i32 }

// Display muss manuell implementiert werden
impl fmt::Display for Point {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "Point({}, {})", self.x, self.y)
    }
}

let p1 = Point { x: 3, y: 4 };
let p2 = Point { x: 3, y: 4 };
println!("{}", p1);       // "Point(3, 4)"
p1 == p2;                 // true
```

**Besonderheiten:**
- `Display` (toString), `PartialEq`/`Eq` (equals) und `Hash` sind Traits
- `derive`-Makro generiert `PartialEq`, `Eq` und `Hash` automatisch
- `Display` muss immer manuell implementiert werden — `Debug` kann abgeleitet werden

**Weiterführende Links:**
- [Rust Documentation - Derivable Traits](https://doc.rust-lang.org/book/appendix-03-derivable-traits.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
class Point(val x: Int, val y: Int) {
  override def toString: String = s"Point($x, $y)"

  override def equals(obj: Any): Boolean = obj match {
    case other: Point => x == other.x && y == other.y
    case _ => false
  }

  override def hashCode: Int = 31 * x + y
}

val p1 = new Point(3, 4)
val p2 = new Point(3, 4)
p1.toString                    // "Point(3, 4)"
p1 == p2                       // true (ruft equals auf)
p1.hashCode == p2.hashCode     // true
```

**Besonderheiten:**
- `toString`, `equals` und `hashCode` von `Any` geerbt
- `case class` generiert alle drei automatisch (siehe 8.7.1)
- `==` ruft `equals` auf, `eq` prüft Referenzgleichheit
- Pattern Matching in `equals` ist idiomatisch

**Weiterführende Links:**
- [Scala Documentation - Any](https://www.scala-lang.org/api/current/scala/Any.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
struct Point: CustomStringConvertible, Equatable, Hashable {
    let x: Int
    let y: Int

    var description: String {
        "Point(\(x), \(y))"
    }

    // Equatable und Hashable werden für Structs automatisch synthetisiert
    static func == (lhs: Point, rhs: Point) -> Bool {
        lhs.x == rhs.x && lhs.y == rhs.y
    }

    func hash(into hasher: inout Hasher) {
        hasher.combine(x)
        hasher.combine(y)
    }
}

let p1 = Point(x: 3, y: 4)
let p2 = Point(x: 3, y: 4)
print(p1)                      // "Point(3, 4)"
p1 == p2                       // true
p1.hashValue == p2.hashValue   // true
```

**Besonderheiten:**
- `CustomStringConvertible`, `Equatable` und `Hashable` sind Protokolle
- Compiler synthetisiert `==` und `hash(into:)` automatisch für Structs
- `Hasher`-basiertes API seit Swift 4.2

**Weiterführende Links:**
- [Swift Documentation - Equatable](https://developer.apple.com/documentation/swift/equatable)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
Class Point
    Public ReadOnly Property X As Integer
    Public ReadOnly Property Y As Integer

    Public Sub New(x As Integer, y As Integer)
        Me.X = x
        Me.Y = y
    End Sub

    Public Overrides Function ToString() As String
        Return $"Point({X}, {Y})"
    End Function

    Public Overrides Function Equals(obj As Object) As Boolean
        Dim other = TryCast(obj, Point)
        If other Is Nothing Then Return False
        Return X = other.X AndAlso Y = other.Y
    End Function

    Public Overrides Function GetHashCode() As Integer
        Return HashCode.Combine(X, Y)
    End Function
End Class

Dim p1 As New Point(3, 4)
Dim p2 As New Point(3, 4)
p1.ToString()                        ' "Point(3, 4)"
p1.Equals(p2)                        ' True
p1.GetHashCode() = p2.GetHashCode()  ' True
```

**Besonderheiten:**
- `ToString()`, `Equals()` und `GetHashCode()` von `System.Object` geerbt
- `Is` für Referenzvergleich, `Equals()` für Wertevergleich
- `HashCode.Combine()` für komfortable Hash-Berechnung (seit .NET Core 2.1)

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Object Methods](https://learn.microsoft.com/en-us/dotnet/api/system.object)

</TabItem>
</Tabs>

## 8.7.3. Object Cloning / Copying

Mechanismen zum Erstellen von Kopien bestehender Objekte — entweder als flache Kopie (Shallow Copy), die Referenzen teilt, oder als tiefe Kopie (Deep Copy), die alle verschachtelten Objekte unabhängig dupliziert.

### Sprachen

<Tabs availableTabs={['csharp', 'cpp', 'java', 'javascript', 'kotlin', 'php', 'python', 'ruby', 'rust', 'scala', 'swift', 'typescript']} yellowTabs={['go', 'lean4']} orangeTabs={['dart']}>
<TabItem value="csharp" label="C#">

```csharp
class Document : ICloneable
{
    public string Title { get; set; }
    public List<string> Tags { get; set; }

    // Shallow Copy
    public object Clone() => MemberwiseClone();

    // Deep Copy
    public Document DeepClone()
    {
        var copy = (Document)MemberwiseClone();
        copy.Tags = new List<string>(Tags);
        return copy;
    }
}

var original = new Document { Title = "Report", Tags = new List<string> { "urgent" } };
var shallow = (Document)original.Clone();
var deep = original.DeepClone();
shallow.Tags.Add("draft");
// original.Tags enthält jetzt auch "draft" (Shallow Copy teilt Referenz)
deep.Tags.Add("final");
// original.Tags enthält NICHT "final" (Deep Copy ist unabhängig)
```

**Besonderheiten:**
- `MemberwiseClone()` von `System.Object` für Shallow Copy (protected)
- `ICloneable`-Interface als Konvention (gibt `object` zurück)
- Deep Copy muss manuell implementiert oder per Serialisierung realisiert werden

**Weiterführende Links:**
- [Microsoft C# Documentation - Object.MemberwiseClone](https://learn.microsoft.com/en-us/dotnet/api/system.object.memberwiseclone)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
class Document {
public:
    std::string title;
    std::vector<std::string> tags;

    // Copy Constructor (Deep Copy per Default für std-Container)
    Document(const Document& other) = default;

    // Copy Assignment
    Document& operator=(const Document& other) = default;
};

Document original{"Report", {"urgent"}};

// Copy Constructor (Deep Copy)
Document copy1(original);

// Copy Assignment (Deep Copy)
Document copy2 = original;

copy1.tags.push_back("draft");
// original.tags ist unverändert (std::vector kopiert Elemente)
```

**Besonderheiten:**
- Copy Constructor und Copy Assignment Operator für Kopierlogik
- `= default` generiert Member-weise Kopie (Deep Copy für std-Container)
- Für Raw-Pointer muss Deep Copy manuell im Copy Constructor implementiert werden
- Move-Semantik (seit C++11) als Alternative zum Kopieren

**Weiterführende Links:**
- [cppreference - Copy Constructor](https://en.cppreference.com/w/cpp/language/copy_constructor)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
class Document {
  String title;
  List<String> tags;

  Document(this.title, this.tags);

  // Kein eingebautes clone — manuelles copyWith-Pattern
  Document copyWith({String? title, List<String>? tags}) {
    return Document(
      title ?? this.title,
      tags ?? List.from(this.tags), // Deep Copy der Liste
    );
  }
}

var original = Document("Report", ["urgent"]);
var copy = original.copyWith();
copy.tags.add("draft");
// original.tags ist unverändert
```

**Besonderheiten:**
- Kein eingebauter Clone-Mechanismus
- `copyWith()`-Pattern ist die Konvention (wie bei `ThemeData.copyWith()`)
- `List.from()` bzw. `[...list]` für flache Kopie von Listen

**Weiterführende Links:**
- [Dart Documentation - Classes](https://dart.dev/language/classes)

</TabItem>
<TabItem value="go" label="Go">

```go
type Document struct {
    Title string
    Tags  []string
}

// Shallow Copy via Struct-Zuweisung
original := Document{Title: "Report", Tags: []string{"urgent"}}
shallow := original
shallow.Tags = append(shallow.Tags, "draft")
// original.Tags ist ebenfalls betroffen (Slice teilt Referenz)

// Deep Copy: manuell
func (d Document) DeepCopy() Document {
    tags := make([]string, len(d.Tags))
    copy(tags, d.Tags)
    return Document{Title: d.Title, Tags: tags}
}

deep := original.DeepCopy()
```

**Besonderheiten:**
- Struct-Zuweisung erzeugt Shallow Copy (Werttypen werden kopiert, Slices/Maps teilen Referenz)
- Kein eingebauter Deep-Copy-Mechanismus
- `copy()`-Builtin nur für Slices, nicht für verschachtelte Strukturen

**Weiterführende Links:**
- [Go Documentation - Assignment](https://go.dev/ref/spec#Assignment_statements)

</TabItem>
<TabItem value="java" label="Java">

```java
class Document implements Cloneable {
    String title;
    List<String> tags;

    Document(String title, List<String> tags) {
        this.title = title;
        this.tags = new ArrayList<>(tags);
    }

    // Shallow Clone
    @Override
    public Document clone() {
        try {
            return (Document) super.clone();
        } catch (CloneNotSupportedException e) {
            throw new RuntimeException(e);
        }
    }

    // Deep Clone
    public Document deepClone() {
        Document copy = clone();
        copy.tags = new ArrayList<>(this.tags);
        return copy;
    }
}

Document original = new Document("Report", List.of("urgent"));
Document shallow = original.clone();
Document deep = original.deepClone();
```

**Besonderheiten:**
- `clone()` von `java.lang.Object` geerbt (protected) — erfordert `Cloneable`-Interface
- `super.clone()` erzeugt Shallow Copy
- Deep Copy muss manuell implementiert werden
- `Cloneable`-Interface ist ein Marker-Interface (keine Methoden)

**Weiterführende Links:**
- [Oracle Java Documentation - Object.clone](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#clone--)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
const original = {
    title: "Report",
    tags: ["urgent"]
};

// Shallow Copy
const shallow1 = { ...original };
const shallow2 = Object.assign({}, original);
shallow1.tags.push("draft");
// original.tags enthält jetzt auch "draft"

// Deep Copy (seit ES2022)
const deep = structuredClone(original);
deep.tags.push("final");
// original.tags enthält NICHT "final"
```

**Besonderheiten:**
- Spread-Operator `{...obj}` und `Object.assign()` für Shallow Copy
- `structuredClone()` für Deep Copy (seit ES2022)
- `JSON.parse(JSON.stringify(obj))` als ältere Deep-Copy-Alternative (verliert Funktionen/Dates)

**Weiterführende Links:**
- [MDN - structuredClone](https://developer.mozilla.org/en-US/docs/Web/API/structuredClone)
- [MDN - Object.assign](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
data class Document(val title: String, val tags: MutableList<String>)

val original = Document("Report", mutableListOf("urgent"))

// Shallow Copy (data class copy)
val shallow = original.copy()
shallow.tags.add("draft")
// original.tags enthält jetzt auch "draft" (Referenz geteilt)

// Deep Copy (manuell)
val deep = original.copy(tags = original.tags.toMutableList())
deep.tags.add("final")
// original.tags enthält NICHT "final"
```

**Besonderheiten:**
- `data class` generiert automatisch `copy()`-Methode
- `copy()` erzeugt Shallow Copy (kopiert Referenzen)
- Deep Copy muss manuell über `copy()` mit kopierten Feldern realisiert werden

**Weiterführende Links:**
- [Kotlin Documentation - Data Classes](https://kotlinlang.org/docs/data-classes.html#copying)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
structure Document where
  title : String
  tags : List String
  deriving Repr

def main : IO Unit := do
  let original := { title := "Report", tags := ["urgent"] : Document }

  -- Shallow Copy (functional update)
  let shallow := { original with }
  let shallowTags := "draft" :: shallow.tags
  let shallowUpdated := { shallow with tags := shallowTags }
  IO.println s!"Original tags: {original.tags}"
  IO.println s!"Shallow updated tags: {shallowUpdated.tags}"

  -- Deep Copy (manuell, da List immutable ist, aber für verschachtelte Strukturen nötig)
  let deepTags := "final" :: original.tags
  let deep := { original with tags := deepTags }
  IO.println s!"Original tags: {original.tags}"
  IO.println s!"Deep updated tags: {deep.tags}"
```

**Besonderheiten:**
- Lean 4 Structures sind **immutable** — jede "Kopie" ist ein funktionales Update mit `{ ... with }` Syntax
- Shallow und Deep Copy unterscheiden sich nur bei verschachtelten mutablen Referenzen — in Lean 4 sind alle Werte immutable
- Funktionale Updates erzeugen neue Strukturen; das Original bleibt unverändert
- Für verschachtelte Strukturen müssen innere Felder explizit kopiert/transformiert werden

**Weiterführende Links:**
- [Lean 4 Documentation - Structures](https://lean-lang.org/lean4/doc/struct.html)

</TabItem>
<TabItem value="php" label="PHP">

```php
class Document {
    public function __construct(
        public string $title,
        public array $tags
    ) {}

    // Anpassung der Kopie mit __clone
    public function __clone() {
        // Arrays werden in PHP automatisch kopiert (Deep Copy)
    }
}

$original = new Document("Report", ["urgent"]);

// Shallow Copy (clone-Keyword)
$copy = clone $original;
$copy->tags[] = "draft";
// $original->tags enthält NICHT "draft" (Arrays sind Value Types in PHP)
```

**Besonderheiten:**
- `clone`-Keyword für Objektkopie
- `__clone()` Magic Method zur Anpassung des Kopiervorgangs
- Arrays sind Value Types — werden automatisch kopiert (Deep Copy)
- Objekt-Properties sind Referenzen — müssen in `__clone()` manuell kopiert werden

**Weiterführende Links:**
- [PHP Documentation - Object Cloning](https://www.php.net/manual/en/language.oop5.cloning.php)

</TabItem>
<TabItem value="python" label="Python">

```python
import copy

class Document:
    def __init__(self, title, tags):
        self.title = title
        self.tags = tags

original = Document("Report", ["urgent"])

# Shallow Copy
shallow = copy.copy(original)
shallow.tags.append("draft")
# original.tags enthält jetzt auch "draft"

# Deep Copy
deep = copy.deepcopy(original)
deep.tags.append("final")
# original.tags enthält NICHT "final"
```

**Besonderheiten:**
- `copy.copy()` für Shallow Copy, `copy.deepcopy()` für Deep Copy
- `__copy__()` und `__deepcopy__()` für benutzerdefiniertes Kopierverhalten
- Shallow Copy kopiert Referenzen, Deep Copy kopiert rekursiv alle Objekte

**Weiterführende Links:**
- [Python Documentation - copy](https://docs.python.org/3/library/copy.html)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
class Document
  attr_accessor :title, :tags

  def initialize(title, tags)
    @title = title
    @tags = tags
  end
end

original = Document.new("Report", ["urgent"])

# Shallow Copy
shallow = original.dup
shallow.tags << "draft"
# original.tags enthält jetzt auch "draft"

# Deep Copy (via Marshal)
deep = Marshal.load(Marshal.dump(original))
deep.tags << "final"
# original.tags enthält NICHT "final"
```

**Besonderheiten:**
- `dup` für Shallow Copy (ruft `initialize_copy` auf)
- `clone` wie `dup`, kopiert aber auch Frozen-Status und Singleton-Methoden
- Deep Copy per `Marshal.dump`/`Marshal.load` (Serialisierung)

**Weiterführende Links:**
- [Ruby Documentation - Object#dup](https://ruby-doc.org/core-3.1.0/Object.html#method-i-dup)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
#[derive(Clone)]
struct Document {
    title: String,
    tags: Vec<String>,
}

let original = Document {
    title: String::from("Report"),
    tags: vec![String::from("urgent")],
};

// Deep Clone (Clone-Trait klont alle Felder rekursiv)
let mut deep = original.clone();
deep.tags.push(String::from("draft"));
// original.tags ist unverändert
```

**Besonderheiten:**
- `Clone`-Trait für explizites Klonen (`clone()`)
- `derive(Clone)` generiert Deep Clone (klont alle Felder rekursiv)
- `Copy`-Trait für implizites Kopieren (nur für einfache Stack-Typen)
- Ownership-System macht Shallow Copy unmöglich — `Clone` ist immer Deep

**Weiterführende Links:**
- [Rust Documentation - Clone](https://doc.rust-lang.org/std/clone/trait.Clone.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
case class Document(title: String, tags: List[String])

val original = Document("Report", List("urgent"))

// Shallow Copy (case class copy)
val shallow = original.copy()

// Copy mit geänderten Feldern
val modified = original.copy(title = "Updated Report")

// Da Scala-Collections immutable sind, gibt es kein Shallow-vs-Deep-Problem
val extended = original.copy(tags = original.tags :+ "draft")
// original.tags ist unverändert
```

**Besonderheiten:**
- `case class` generiert automatisch `copy()`-Methode
- Immutable Collections vermeiden das Shallow-vs-Deep-Copy-Problem
- `copy()` mit Named Parameters für gezielte Feldänderungen

**Weiterführende Links:**
- [Scala Documentation - Case Classes](https://docs.scala-lang.org/tour/case-classes.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Structs sind Value Types (automatische Kopie)
struct Document {
    var title: String
    var tags: [String]
}

var original = Document(title: "Report", tags: ["urgent"])

// Automatische Deep Copy (Structs sind Value Types)
var copy = original
copy.tags.append("draft")
// original.tags enthält NICHT "draft"

// Für Klassen: NSCopying-Protokoll
class RefDocument: NSObject, NSCopying {
    var title: String
    var tags: [String]

    init(title: String, tags: [String]) {
        self.title = title; self.tags = tags
    }

    func copy(with zone: NSZone? = nil) -> Any {
        return RefDocument(title: title, tags: Array(tags))
    }
}
```

**Besonderheiten:**
- Structs sind Value Types — Zuweisung erzeugt automatisch Deep Copy (Copy-on-Write)
- Für Klassen (Reference Types): `NSCopying`-Protokoll implementieren
- Swift bevorzugt Structs über Klassen für wertbasierte Daten

**Weiterführende Links:**
- [Swift Documentation - Structures and Classes](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/structuresandclasses/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
interface Document {
    title: string;
    tags: string[];
}

const original: Document = { title: "Report", tags: ["urgent"] };

// Shallow Copy
const shallow = { ...original };
shallow.tags.push("draft");
// original.tags enthält jetzt auch "draft"

// Deep Copy (seit ES2022)
const deep = structuredClone(original);
deep.tags.push("final");
// original.tags enthält NICHT "final"
```

**Besonderheiten:**
- Spread-Operator `{...obj}` und `Object.assign()` für Shallow Copy
- `structuredClone()` für Deep Copy (seit ES2022)
- TypeScript fügt Typsicherheit hinzu, Kopierverhalten ist identisch mit JavaScript

**Weiterführende Links:**
- [MDN - structuredClone](https://developer.mozilla.org/en-US/docs/Web/API/structuredClone)

</TabItem>
</Tabs>

## 8.7.4. Delegation

Automatische Weiterleitung von Methodenaufrufen an ein anderes Objekt, um Code-Wiederverwendung ohne Vererbung zu ermöglichen.

### Sprachen {#sprachen}

<Tabs availableTabs={['groovy', 'kotlin']} orangeTabs={['scala']}>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Interface
interface Printer {
    fun print(message: String)
}

// Implementierung
class ConsolePrinter : Printer {
    override fun print(message: String) {
        println(message)
    }
}

// Delegation mit "by"
class MessageService(printer: Printer) : Printer by printer {
    fun sendMessage(msg: String) {
        print("Message: $msg")
    }
}

// Verwendung
val printer = ConsolePrinter()
val service = MessageService(printer)
service.print("Hello") // Delegiert an ConsolePrinter
service.sendMessage("World")
```

**Besonderheiten:**
- Delegation mit `by`-Schlüsselwort
- Automatische Implementierung aller Interface-Methoden
- Ermöglicht Code-Wiederverwendung ohne Vererbung
- Unterstützt auch Property-Delegation

**Weiterführende Links:**
- [Kotlin Documentation - Delegation](https://kotlinlang.org/docs/delegation.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Trait
trait Printer {
  def print(message: String): Unit
}

// Implementierung
class ConsolePrinter extends Printer {
  override def print(message: String): Unit = {
    println(message)
  }
}

// Delegation (manuell)
class MessageService(printer: Printer) extends Printer {
  def sendMessage(msg: String): Unit = {
    print(s"Message: $msg")
  }
  
  // Manuelle Delegation
  override def print(message: String): Unit = {
    printer.print(message)
  }
}

// Verwendung
val printer = new ConsolePrinter()
val service = new MessageService(printer)
service.print("Hello") // Delegiert an ConsolePrinter
service.sendMessage("World")
```

**Besonderheiten:**
- Delegation muss manuell implementiert werden
- Kein natives Sprachfeature für automatische Delegation
- Pattern wird häufig verwendet für Code-Wiederverwendung
- Unterstützt auch Mixins für ähnliche Funktionalität

**Weiterführende Links:**
- [Scala Documentation - Traits](https://docs.scala-lang.org/tour/traits.html)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
import groovy.transform.Delegate

// Delegation über @Delegate
class Engine {
    void start() { println "Engine started" }
    void stop() { println "Engine stopped" }
}

class Car {
    @Delegate Engine engine = new Engine()
    String model

    Car(String model) { this.model = model }
}

def car = new Car("Tesla")
car.start() // Delegiert an Engine.start()
car.stop()  // Delegiert an Engine.stop()
```

**Besonderheiten:**
- `@Delegate` AST-Transformation generiert automatisch Delegations-Methoden
- Alle public Methoden des Delegaten werden verfügbar
- Unterstützt `includes` und `excludes` für selektive Delegation

**Weiterführende Links:**
- [Groovy Documentation - Delegate](https://docs.groovy-lang.org/latest/html/gapi/groovy/lang/Delegate.html)

</TabItem>
</Tabs>


## 8.7.5. Events

Mechanismus zur Benachrichtigung von Abonnenten über Änderungen oder Aktionen, implementiert als Observer-Pattern.

### Sprachen {#sprachen}

<Tabs availableTabs={['csharp', 'java', 'javascript', 'kotlin', 'matlab', 'object-pascal', 'python', 'swift', 'typescript', 'vbnet']}>
<TabItem value="csharp" label="C#">

```csharp
// Event-Deklaration
public class Button
{
    public event EventHandler Click;
    
    protected virtual void OnClick()
    {
        Click?.Invoke(this, EventArgs.Empty);
    }
}

// Event-Handler
void Button_Click(object sender, EventArgs e)
{
    Console.WriteLine("Button wurde geklickt");
}

// Verwendung
var button = new Button();
button.Click += Button_Click;
button.OnClick(); // Löst Event aus
```

**Besonderheiten:**
- Events seit C# 1.0
- Unterstützt `+=` und `-=` für Handler-Registrierung
- Thread-sicher mit `?.Invoke()` (null-conditional operator)
- Unterstützt auch Custom Event-Accessors

**Weiterführende Links:**
- [Microsoft C# Documentation - Events](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/events/)

</TabItem>
<TabItem value="java" label="Java">

```java
// Event-Listener-Interface
interface ClickListener {
    void onClick(Event e);
}

// Event-Quelle
class Button {
    private List<ClickListener> listeners = new ArrayList<>();
    
    public void addClickListener(ClickListener listener) {
        listeners.add(listener);
    }
    
    public void removeClickListener(ClickListener listener) {
        listeners.remove(listener);
    }
    
    protected void fireClick() {
        Event e = new Event();
        for (ClickListener listener : listeners) {
            listener.onClick(e);
        }
    }
}

// Verwendung
Button button = new Button();
button.addClickListener(e -> System.out.println("Button wurde geklickt"));
button.fireClick();
```

**Besonderheiten:**
- Events über Listener-Pattern
- Manuelle Implementierung erforderlich
- Unterstützt Lambda-Ausdrücke für Event-Handler (seit Java 8)
- Häufig mit Observer-Pattern implementiert

**Weiterführende Links:**
- [Oracle Java Documentation - Event Handling](https://docs.oracle.com/javase/tutorial/uiswing/events/index.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Event-System (DOM Events)
const button = document.createElement('button');
button.textContent = 'Click me';

// Event-Handler registrieren
button.addEventListener('click', (event) => {
    console.log('Button wurde geklickt');
});

// Event auslösen
button.click();

// Custom Events
const customEvent = new CustomEvent('custom', {
    detail: { message: 'Hello' }
});
button.dispatchEvent(customEvent);
```

**Besonderheiten:**
- DOM Events für Browser-Umgebung
- `addEventListener` und `removeEventListener` für Handler-Registrierung
- Unterstützt Custom Events mit `CustomEvent`
- Event-Bubbling und Event-Capturing unterstützt

**Weiterführende Links:**
- [MDN: Events](https://developer.mozilla.org/en-US/docs/Web/API/Event)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Event-System mit Delegates
import kotlin.properties.Delegates

class Button {
    private var listeners: MutableList<(Event) -> Unit> = mutableListOf()
    
    fun addClickListener(listener: (Event) -> Unit) {
        listeners.add(listener)
    }
    
    fun removeClickListener(listener: (Event) -> Unit) {
        listeners.remove(listener)
    }
    
    protected fun fireClick() {
        val event = Event()
        listeners.forEach { it(event) }
    }
}

// Verwendung
val button = Button()
button.addClickListener { event -> 
    println("Button wurde geklickt")
}
button.fireClick()
```

**Besonderheiten:**
- Events über Funktionsreferenzen
- Unterstützt Lambda-Ausdrücke für Event-Handler
- Kann mit Property Delegates kombiniert werden
- Manuelle Implementierung erforderlich

**Weiterführende Links:**
- [Kotlin Documentation - Higher-Order Functions](https://kotlinlang.org/docs/lambdas.html)

</TabItem>
<TabItem value="python" label="Python">

```python
# Event-System (manuell oder mit Bibliotheken)
class Button:
    def __init__(self):
        self._listeners = []
    
    def add_click_listener(self, listener):
        self._listeners.append(listener)
    
    def remove_click_listener(self, listener):
        self._listeners.remove(listener)
    
    def _fire_click(self):
        event = Event()
        for listener in self._listeners:
            listener(event)

# Verwendung
button = Button()
button.add_click_listener(lambda e: print("Button wurde geklickt"))
button._fire_click()
```

**Besonderheiten:**
- Events über Callback-Listen
- Manuelle Implementierung erforderlich
- Unterstützt Lambda-Ausdrücke für Event-Handler
- Bibliotheken wie `pydispatcher` für erweiterte Funktionalität

**Weiterführende Links:**
- [Python Documentation - Functions](https://docs.python.org/3/tutorial/controlflow.html#defining-functions)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Event-System mit Closures
class Button {
    private var clickHandlers: [() -> Void] = []
    
    func addClickHandler(_ handler: @escaping () -> Void) {
        clickHandlers.append(handler)
    }
    
    func fireClick() {
        clickHandlers.forEach { $0() }
    }
}

// Verwendung
let button = Button()
button.addClickHandler {
    print("Button wurde geklickt")
}
button.fireClick()
```

**Besonderheiten:**
- Events über Closures implementiert
- Unterstützt `@escaping` für asynchrone Handler
- Manuelle Implementierung erforderlich
- Combine Framework für reaktive Programmierung (seit Swift 5.0)

**Weiterführende Links:**
- [Swift Documentation - Closures](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/closures/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Event-System (ähnlich wie JavaScript)
class Button {
    private listeners: Array<(event: Event) => void> = [];
    
    addClickListener(listener: (event: Event) => void): void {
        this.listeners.push(listener);
    }
    
    removeClickListener(listener: (event: Event) => void): void {
        const index = this.listeners.indexOf(listener);
        if (index > -1) {
            this.listeners.splice(index, 1);
        }
    }
    
    fireClick(): void {
        const event = new Event('click');
        this.listeners.forEach(listener => listener(event));
    }
}

// Verwendung
const button = new Button();
button.addClickListener((event) => {
    console.log('Button wurde geklickt');
});
button.fireClick();
```

**Besonderheiten:**
- Events über Funktionsreferenzen mit Typen
- Unterstützt Lambda-Ausdrücke für Event-Handler
- Type-sicher durch TypeScript-Typen
- Kann auch DOM Events verwenden (wie JavaScript)

**Weiterführende Links:**
- [TypeScript Handbook - Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Event-Deklaration
Public Class Button
    Public Event Click As EventHandler
    
    Protected Overridable Sub OnClick()
        RaiseEvent Click(Me, EventArgs.Empty)
    End Sub
End Class

' Event-Handler
Sub Button_Click(sender As Object, e As EventArgs)
    Console.WriteLine("Button wurde geklickt")
End Sub

' Verwendung
Dim button As New Button()
AddHandler button.Click, AddressOf Button_Click
button.OnClick() ' Löst Event aus
```

**Besonderheiten:**
- Events seit VB.NET 1.0
- `AddHandler` und `RemoveHandler` für Handler-Registrierung
- `RaiseEvent` zum Auslösen von Events
- Unterstützt auch Custom Event-Accessors

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Events](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/events/)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
classdef Button < handle
    events
        Clicked
    end
    
    methods
        function click(obj)
            notify(obj, 'Clicked');
        end
    end
end

btn = Button();
addlistener(btn, 'Clicked', @(src, evt) disp('Button geklickt!'));
btn.click();  % "Button geklickt!"
```

**Besonderheiten:**
- Events nur für Handle-Klassen (`< handle`)
- `events`-Block definiert Events
- `notify()` löst Events aus, `addlistener()` registriert Listener

**Weiterführende Links:**
- [MATLAB Documentation - Events](https://www.mathworks.com/help/matlab/matlab_oop/events-and-listeners.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Events: Method Pointer Properties
type
  TNotifyEvent = procedure(Sender: TObject) of object;

  TButton = class
  private
    FOnClick: TNotifyEvent;
  published
    property OnClick: TNotifyEvent read FOnClick write FOnClick;
  end;

  TForm = class
  public
    procedure ButtonClicked(Sender: TObject);
  end;

procedure TForm.ButtonClicked(Sender: TObject);
begin
  WriteLn('Button wurde geklickt!');
end;

var
  form: TForm;
  button: TButton;
begin
  form := TForm.Create;
  button := TButton.Create;
  button.OnClick := form.ButtonClicked;
end;
```

**Besonderheiten:**
- Events sind Properties mit Method-Pointer-Typ
- `procedure of object` für Method Pointers
- `published`-Properties für Event-Handling im Designer
- Kernkonzept der VCL/LCL Frameworks

**Weiterführende Links:**
- [Delphi Documentation - Events](https://docwiki.embarcadero.com/RADStudio/en/Events_(Delphi))

</TabItem>
</Tabs>


## 8.7.6. Delegates

Typ-sichere Funktionszeiger, die Methodenaufrufe kapseln und Multicast-Unterstützung für mehrere Handler bieten.

### Sprachen {#sprachen}

<Tabs availableTabs={['csharp', 'd', 'object-pascal', 'vbnet']}>
<TabItem value="csharp" label="C#">

```csharp
// Delegate-Deklaration
public delegate void ActionHandler(string message);

// Methoden
void PrintMessage(string msg)
{
    Console.WriteLine($"Message: {msg}");
}

void LogMessage(string msg)
{
    Console.WriteLine($"Log: {msg}");
}

// Delegate-Instanz
ActionHandler handler = PrintMessage;

// Multicast-Delegates (mehrere Handler)
handler += LogMessage;

// Aufruf
handler("Hello"); // Ruft beide Methoden auf

// Entfernen eines Handlers
handler -= LogMessage;
```

**Besonderheiten:**
- Delegates seit C# 1.0
- Unterstützt Multicast-Delegates (mehrere Handler)
- Typ-sicher und null-sicher
- Unterstützt auch Generic Delegates (`Action<T>`, `Func<T, TResult>`)
- Events basieren auf Delegates

**Weiterführende Links:**
- [Microsoft C# Documentation - Delegates](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/delegates/)

</TabItem>
<TabItem value="d" label="D">

```d
// Delegate-Deklaration
alias ActionHandler = void delegate(string message);

// Methoden
void printMessage(string msg)
{
    import std.stdio;
    writeln("Message: ", msg);
}

void logMessage(string msg)
{
    import std.stdio;
    writeln("Log: ", msg);
}

// Delegate-Instanz
ActionHandler handler = &printMessage;

// Multicast-Delegates (seit D 2.0)
handler = &printMessage;
handler = handler ~ &logMessage;

// Aufruf
handler("Hello"); // Ruft beide Methoden auf
```

**Besonderheiten:**
- Delegates seit D 1.0
- Multicast-Delegates seit D 2.0
- Unterstützt sowohl Delegates als auch Funktionszeiger
- Typ-sicher und null-sicher

**Weiterführende Links:**
- [D Language Specification - Delegates](https://dlang.org/spec/function.html#delegates)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Delegate-Deklaration
Public Delegate Sub ActionHandler(message As String)

' Methoden
Sub PrintMessage(msg As String)
    Console.WriteLine($"Message: {msg}")
End Sub

Sub LogMessage(msg As String)
    Console.WriteLine($"Log: {msg}")
End Sub

' Delegate-Instanz
Dim handler As ActionHandler = AddressOf PrintMessage

' Multicast-Delegates (mehrere Handler)
handler = [Delegate].Combine(handler, AddressOf LogMessage)

' Aufruf
handler("Hello") ' Ruft beide Methoden auf

' Entfernen eines Handlers
handler = [Delegate].Remove(handler, AddressOf LogMessage)
```

**Besonderheiten:**
- Delegates seit VB.NET 1.0
- Unterstützt Multicast-Delegates (mehrere Handler)
- Typ-sicher und null-sicher
- Unterstützt auch Generic Delegates (`Action(Of T)`, `Func(Of T, TResult)`)
- Events basieren auf Delegates

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Delegates](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/delegates/)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Delegates: Method Pointers und Reference Types
type
  // Method Pointer (procedure/function of object)
  TCalculateMethod = function(a, b: Integer): Integer of object;

  // Anonymous Method Reference (seit Delphi 2009)
  TCalculateFunc = reference to function(a, b: Integer): Integer;

  TCalculator = class
  public
    function Add(a, b: Integer): Integer;
  end;

function TCalculator.Add(a, b: Integer): Integer;
begin
  Result := a + b;
end;

var
  calc: TCalculator;
  method: TCalculateMethod;
  func: TCalculateFunc;
begin
  calc := TCalculator.Create;
  method := calc.Add;          // Method Pointer
  func := calc.Add;            // Reference
  WriteLn(method(5, 3));       // 8
  WriteLn(func(5, 3));         // 8
end;
```

**Besonderheiten:**
- `procedure/function of object` für Method Pointers
- `reference to procedure/function` für Anonymous Method References (seit Delphi 2009)
- Method Pointers sind an eine Objektinstanz gebunden
- Reference Types können auch Anonymous Methods speichern

**Weiterführende Links:**
- [Delphi Documentation - Procedural Types](https://docwiki.embarcadero.com/RADStudio/en/Procedural_Types)

</TabItem>
</Tabs>

## 8.7.7. Partial Classes

Klassen, die über mehrere Dateien verteilt definiert werden können, um die Code-Organisation zu verbessern.

### Sprachen {#sprachen}

<Tabs availableTabs={['csharp', 'vbnet']}>
<TabItem value="csharp" label="C#">

```csharp
// Partial Class - Teil 1 (Datei: Person.cs)
public partial class Person
{
    public string Name { get; set; }
    
    public void Greet()
    {
        Console.WriteLine($"Hallo, ich bin {Name}");
    }
}

// Partial Class - Teil 2 (Datei: Person.Extensions.cs)
public partial class Person
{
    public int Age { get; set; }
    
    public void CelebrateBirthday()
    {
        Age++;
    }
}

// Verwendung
var person = new Person { Name = "Max", Age = 30 };
person.Greet();
person.CelebrateBirthday();
```

**Besonderheiten:**
- Partial Classes seit C# 2.0
- Ermöglicht Aufteilung einer Klasse über mehrere Dateien
- Nützlich für Code-Generierung (z.B. Windows Forms Designer)
- Alle Teile müssen im selben Namespace sein
- Unterstützt auch Partial Methods

**Weiterführende Links:**
- [Microsoft C# Documentation - Partial Classes](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/partial-classes-and-methods)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Partial Class - Teil 1 (Datei: Person.vb)
Partial Public Class Person
    Public Property Name As String
    
    Public Sub Greet()
        Console.WriteLine($"Hallo, ich bin {Name}")
    End Sub
End Class

' Partial Class - Teil 2 (Datei: Person.Extensions.vb)
Partial Public Class Person
    Public Property Age As Integer
    
    Public Sub CelebrateBirthday()
        Age += 1
    End Sub
End Class

' Verwendung
Dim person As New Person With {.Name = "Max", .Age = 30}
person.Greet()
person.CelebrateBirthday()
```

**Besonderheiten:**
- Partial Classes seit VB.NET 2005
- Ermöglicht Aufteilung einer Klasse über mehrere Dateien
- Nützlich für Code-Generierung (z.B. Windows Forms Designer)
- Alle Teile müssen im selben Namespace sein
- Unterstützt auch Partial Methods

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Partial Classes](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/objects-and-classes/partial-classes-and-methods)

</TabItem>
</Tabs>


## 8.7.8. CLOS (Multiple Dispatch OO)

Objektorientiertes Paradigma, bei dem die aufgerufene Methode zur Laufzeit anhand der Typen **aller** Argumente bestimmt wird (Multiple Dispatch), nicht nur des Empfängers (Single Dispatch). Das Common Lisp Object System (CLOS) ist die bekannteste Umsetzung dieses Konzepts.

### Sprachen

<Tabs availableTabs={['common-lisp', 'julia']} yellowTabs={['clojure', 'r']} orangeTabs={['groovy']}>
<TabItem value="clojure" label="Clojure">

```clojure
;; Multimethoden: Dispatch auf beliebige Kriterien
(defmulti collide (fn [a b] [(type a) (type b)]))

(defrecord Circle [radius])
(defrecord Rectangle [width height])

(defmethod collide [Circle Circle] [a b]
  (str "Kreis-Kreis: r1=" (:radius a) ", r2=" (:radius b)))

(defmethod collide [Circle Rectangle] [a b]
  (str "Kreis-Rechteck: r=" (:radius a) ", w=" (:width b)))

(defmethod collide [Rectangle Rectangle] [a b]
  (str "Rechteck-Rechteck: w1=" (:width a) ", w2=" (:width b)))

(collide (->Circle 5) (->Rectangle 3 4))
;; => "Kreis-Rechteck: r=5, w=3"
```

**Besonderheiten:**
- `defmulti` definiert die Dispatch-Funktion, `defmethod` die Implementierungen
- Dispatch-Funktion kann beliebige Kriterien verwenden (nicht nur Typen)
- Unterstützt Hierarchien über `derive` und `isa?`
- Kein impliziter Empfänger — alle Argumente sind gleichberechtigt

**Weiterführende Links:**
- [Clojure Documentation - Multimethods](https://clojure.org/reference/multimethods)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Klassen definieren
(defclass circle ()
  ((radius :initarg :radius :accessor circle-radius)))

(defclass rectangle ()
  ((width :initarg :width :accessor rect-width)
   (height :initarg :height :accessor rect-height)))

;; Generische Funktion mit Multiple Dispatch
(defgeneric collide (a b))

(defmethod collide ((a circle) (b circle))
  (format nil "Kreis-Kreis: r1=~A, r2=~A"
          (circle-radius a) (circle-radius b)))

(defmethod collide ((a circle) (b rectangle))
  (format nil "Kreis-Rechteck: r=~A, w=~A"
          (circle-radius a) (rect-width b)))

(defmethod collide ((a rectangle) (b rectangle))
  (format nil "Rechteck-Rechteck: w1=~A, w2=~A"
          (rect-width a) (rect-width b)))

(collide (make-instance 'circle :radius 5)
         (make-instance 'rectangle :width 3 :height 4))
;; => "Kreis-Rechteck: r=5, w=3"
```

**Besonderheiten:**
- CLOS (Common Lisp Object System) ist die ursprüngliche Implementierung von Multiple Dispatch
- `defgeneric` deklariert generische Funktionen, `defmethod` spezialisiert sie
- Dispatch auf alle Argumente gleichzeitig — kein bevorzugter Empfänger
- Unterstützt Method Combinations (`:before`, `:after`, `:around`)
- Klassen und Methoden sind separate Konzepte (Methoden gehören nicht zu Klassen)

**Weiterführende Links:**
- [Common Lisp HyperSpec - CLOS](http://www.lispworks.com/documentation/HyperSpec/Body/07_.htm)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
class Circle {
    double radius
    Circle(double r) { this.radius = r }
}

class Rectangle {
    double width, height
    Rectangle(double w, double h) { this.width = w; this.height = h }
}

// Groovy dispatcht zur Laufzeit auf den tatsächlichen Typ aller Argumente
String collide(Circle a, Circle b) {
    "Kreis-Kreis: r1=${a.radius}, r2=${b.radius}"
}

String collide(Circle a, Rectangle b) {
    "Kreis-Rechteck: r=${a.radius}, w=${b.width}"
}

String collide(Rectangle a, Rectangle b) {
    "Rechteck-Rechteck: w1=${a.width}, w2=${b.width}"
}

Object shape1 = new Circle(5)
Object shape2 = new Rectangle(3, 4)
println collide(shape1, shape2) // "Kreis-Rechteck: r=5.0, w=3.0"
```

**Besonderheiten:**
- Groovy dispatcht überladene Methoden zur Laufzeit auf Basis der tatsächlichen Argumenttypen
- Im Gegensatz zu Java (statischer Dispatch bei Überladung) wählt Groovy die passendste Methode dynamisch
- Kein explizites Multiple-Dispatch-System — ergibt sich aus dem dynamischen Method-Resolution-Mechanismus

**Weiterführende Links:**
- [Groovy Documentation - Runtime Dispatch](https://groovy-lang.org/objectorientation.html)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
struct Circle
    radius::Float64
end

struct Rectangle
    width::Float64
    height::Float64
end

# Multiple Dispatch: Methode wird anhand ALLER Argumenttypen gewählt
collide(a::Circle, b::Circle) =
    "Kreis-Kreis: r1=$(a.radius), r2=$(b.radius)"

collide(a::Circle, b::Rectangle) =
    "Kreis-Rechteck: r=$(a.radius), w=$(b.width)"

collide(a::Rectangle, b::Rectangle) =
    "Rechteck-Rechteck: w1=$(a.width), w2=$(b.width)"

collide(Circle(5.0), Rectangle(3.0, 4.0))
# => "Kreis-Rechteck: r=5.0, w=3.0"
```

**Besonderheiten:**
- Multiple Dispatch ist das **zentrale** Paradigma von Julia
- Funktionen werden über Typ-Signaturen aller Argumente spezialisiert
- Kein bevorzugter Empfänger — alle Argumente sind gleichberechtigt
- Hochperformant durch JIT-Kompilierung spezialisierter Methoden

**Weiterführende Links:**
- [Julia Documentation - Methods](https://docs.julialang.org/en/v1/manual/methods/)

</TabItem>
<TabItem value="r" label="R">

```r
# S4-Klassen und Generische Funktionen
setClass("Circle", representation(radius = "numeric"))
setClass("Rectangle", representation(width = "numeric", height = "numeric"))

# Generische Funktion
setGeneric("collide", function(a, b) standardGeneric("collide"))

# Multiple Dispatch: Methoden für Typkombinationen
setMethod("collide", signature("Circle", "Circle"), function(a, b) {
  paste0("Kreis-Kreis: r1=", a@radius, ", r2=", b@radius)
})

setMethod("collide", signature("Circle", "Rectangle"), function(a, b) {
  paste0("Kreis-Rechteck: r=", a@radius, ", w=", b@width)
})

setMethod("collide", signature("Rectangle", "Rectangle"), function(a, b) {
  paste0("Rechteck-Rechteck: w1=", a@width, ", w2=", b@width)
})

collide(new("Circle", radius = 5), new("Rectangle", width = 3, height = 4))
# => "Kreis-Rechteck: r=5, w=3"
```

**Besonderheiten:**
- S4-Klassensystem unterstützt Multiple Dispatch über `setMethod()` mit `signature()`
- `setGeneric()` deklariert generische Funktionen
- Dispatch auf beliebig viele Argumenttypen möglich
- S3-System (einfacher) unterstützt nur Single Dispatch

**Weiterführende Links:**
- [R Documentation - S4 Classes](https://adv-r.hadley.nz/s4.html)

</TabItem>
</Tabs>

## 8.7.9. Smalltalk-Messaging

Objektorientiertes Paradigma, bei dem Objekte durch das **Senden von Nachrichten** (Messages) kommunizieren. Der Empfänger entscheidet dynamisch, wie er eine Nachricht verarbeitet — einschließlich der Möglichkeit, unbekannte Nachrichten abzufangen und zu behandeln.

### Sprachen

<Tabs availableTabs={['objective-c', 'ruby']} yellowTabs={['groovy', 'python']} orangeTabs={['lua']}>
<TabItem value="groovy" label="Groovy">

```groovy
class DynamicHandler {
    String name = "Handler"

    // Bekannte Methode
    String greet(String who) { "Hallo, $who!" }

    // Unbekannte Methoden abfangen
    def methodMissing(String name, args) {
        "Unbekannte Nachricht: $name(${args.join(', ')})"
    }

    // Unbekannte Properties abfangen
    def propertyMissing(String name) {
        "Unbekanntes Property: $name"
    }
}

def obj = new DynamicHandler()
println obj.greet("Welt")        // "Hallo, Welt!"
println obj.dance("schnell")     // "Unbekannte Nachricht: dance(schnell)"
println obj.color                // "Unbekanntes Property: color"
```

**Besonderheiten:**
- `methodMissing()` fängt unbekannte Methodenaufrufe ab
- `propertyMissing()` fängt unbekannte Property-Zugriffe ab
- Meta-Object Protocol (MOP) für dynamische Methoden-Manipulation
- `invokeMethod()` kann alle Methodenaufrufe abfangen (auch bekannte)

**Weiterführende Links:**
- [Groovy Documentation - MOP](https://groovy-lang.org/metaprogramming.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Messaging via Metatables
local DynamicHandler = {}
DynamicHandler.__index = function(table, key)
    -- Unbekannte Nachrichten abfangen
    return function(self, ...)
        return string.format("Unbekannte Nachricht: %s(%s)",
            key, table.concat({...}, ", "))
    end
end

function DynamicHandler.new(name)
    local obj = { name = name }
    obj.greet = function(self, who)
        return "Hallo, " .. who .. "!"
    end
    return setmetatable(obj, DynamicHandler)
end

local obj = DynamicHandler.new("Handler")
print(obj:greet("Welt"))         -- "Hallo, Welt!"
print(obj:dance("schnell"))      -- "Unbekannte Nachricht: dance(schnell)"
```

**Besonderheiten:**
- `__index`-Metamethode fängt Zugriffe auf unbekannte Schlüssel ab
- Metatables ermöglichen dynamische Methoden-Auflösung
- Kein natives OOP — Messaging wird über Metatables simuliert
- `__newindex` fängt Schreibzugriffe auf unbekannte Schlüssel ab

**Weiterführende Links:**
- [Lua Documentation - Metatables](https://www.lua.org/manual/5.4/manual.html#2.4)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objectivec
@interface DynamicHandler : NSObject
@property NSString *name;
- (NSString *)greet:(NSString *)who;
@end

@implementation DynamicHandler
- (NSString *)greet:(NSString *)who {
    return [NSString stringWithFormat:@"Hallo, %@!", who];
}

// Unbekannte Nachrichten abfangen
- (void)forwardInvocation:(NSInvocation *)invocation {
    NSLog(@"Unbekannte Nachricht: %@",
        NSStringFromSelector([invocation selector]));
}

- (NSMethodSignature *)methodSignatureForSelector:(SEL)sel {
    return [NSMethodSignature signatureWithObjCTypes:"v@:"];
}
@end

DynamicHandler *obj = [[DynamicHandler alloc] init];
[obj greet:@"Welt"];     // "Hallo, Welt!"
[obj dance];             // "Unbekannte Nachricht: dance"
```

**Besonderheiten:**
- Direkte Smalltalk-Abstammung: `[empfänger nachricht:argument]`-Syntax
- `forwardInvocation:` fängt unbekannte Nachrichten ab (wie Smalltalks `doesNotUnderstand:`)
- `respondsToSelector:` prüft, ob ein Objekt eine Nachricht versteht
- Nachrichten an `nil` sind erlaubt und geben `nil`/0 zurück

**Weiterführende Links:**
- [Apple Documentation - Message Forwarding](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ObjCRuntimeGuide/Articles/ocrtForwarding.html)

</TabItem>
<TabItem value="python" label="Python">

```python
class DynamicHandler:
    def __init__(self, name):
        self.name = name

    def greet(self, who):
        return f"Hallo, {who}!"

    # Unbekannte Attribute/Nachrichten abfangen
    def __getattr__(self, name):
        def method(*args):
            return f"Unbekannte Nachricht: {name}({', '.join(str(a) for a in args)})"
        return method

obj = DynamicHandler("Handler")
print(obj.greet("Welt"))         # "Hallo, Welt!"
print(obj.dance("schnell"))      # "Unbekannte Nachricht: dance(schnell)"
```

**Besonderheiten:**
- `__getattr__` wird nur aufgerufen, wenn das Attribut nicht normal gefunden wird
- `__getattribute__` fängt alle Attributzugriffe ab (auch bekannte)
- `hasattr()` prüft, ob ein Objekt ein Attribut/eine Methode hat
- Kein explizites Messaging-Paradigma, aber dynamische Auflösung ermöglicht ähnliches Verhalten

**Weiterführende Links:**
- [Python Documentation - __getattr__](https://docs.python.org/3/reference/datamodel.html#object.__getattr__)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
class DynamicHandler
  attr_reader :name

  def initialize(name)
    @name = name
  end

  def greet(who)
    "Hallo, #{who}!"
  end

  # Unbekannte Nachrichten abfangen
  def method_missing(name, *args)
    "Unbekannte Nachricht: #{name}(#{args.join(', ')})"
  end

  def respond_to_missing?(name, include_private = false)
    true
  end
end

obj = DynamicHandler.new("Handler")
puts obj.greet("Welt")         # "Hallo, Welt!"
puts obj.dance("schnell")      # "Unbekannte Nachricht: dance(schnell)"
puts obj.send(:greet, "Welt")  # "Hallo, Welt!" (explizites Message Sending)
```

**Besonderheiten:**
- Jeder Methodenaufruf ist eine Nachricht an ein Objekt (Smalltalk-Erbe)
- `method_missing` fängt unbekannte Nachrichten ab (wie `doesNotUnderstand:`)
- `send(:methode, args)` sendet Nachrichten explizit (auch private Methoden)
- `respond_to?` / `respond_to_missing?` prüft, ob eine Nachricht verstanden wird

**Weiterführende Links:**
- [Ruby Documentation - method_missing](https://ruby-doc.org/core-3.1.0/BasicObject.html#method-i-method_missing)

</TabItem>
</Tabs>

