---
slug: /objektorientierung/spezielle-konstrukte
title: 8.7. Special Constructs
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 8.7. Special Constructs

Special operators for specific use cases.

## 8.7.1. Records / Data Classes / Case Classes

### Records / Data Classes


Immutable data structures with automatically generated methods for equality checking, string representation, and other standard operations.


<Tabs availableTabs={['csharp', 'dart', 'fsharp', 'groovy', 'idris', 'java', 'koka', 'kotlin', 'lean4', 'python', 'roc', 'rust', 'scala', 'swift']} orangeTabs={['typescript']}>
<TabItem value="csharp" label="C#">

```csharp
// Records (since C# 9.0)
public record Person(string Name, int Age);

var person1 = new Person("Max", 30);
var person2 = new Person("Max", 30);

// Automatic equality checking
bool equal = person1 == person2; // true

// Automatic ToString method
string str = person1.ToString(); // "Person { Name = Max, Age = 30 }"
```

**Special features:**
- Records since C# 9.0
- Automatic equality checking based on values
- Automatic ToString method
- Supports `with` expressions for immutable updates

**Further reading:**
- [Microsoft C# Documentation - Records](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/record)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Records (since Dart 3.0)
var person = (name: 'Max', age: 30);

// Access fields
String name = person.name;
int age = person.age;

// Equality checking
var person2 = (name: 'Max', age: 30);
bool equal = person == person2; // true
```

**Special features:**
- Records since Dart 3.0
- Automatic equality checking based on values
- Immutable and type-safe
- Supports Named and Positional Records

**Further reading:**
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

// Automatic equality checking
let equal = person1 = person2 // true

// Automatic ToString method
let str = person1.ToString() // "Person { Name = Max; Age = 30 }"
```

**Special features:**
- Records are a fundamental language feature
- Automatic equality checking based on values
- Automatic ToString method
- Supports `with` expressions for immutable updates

**Further reading:**
- [F# Documentation - Records](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/records)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Records (since Groovy 4.0)
record Person(String name, int age) {}

def person1 = new Person("Max", 30)
def person2 = new Person("Max", 30)

// Automatic equality checking
boolean equal = person1 == person2 // true

// Automatic ToString method
String str = person1.toString() // "Person[name=Max, age=30]"
```

**Special features:**
- Records since Groovy 4.0 with `record` keyword
- Automatic `equals()`, `hashCode()`, and `toString()` methods
- Immutable by default (properties are final)
- Compact, declarative syntax

**Further reading:**
- [Groovy Documentation - Record Classes](https://groovy-lang.org/objectorientation.html#_record_classes)

</TabItem>
<TabItem value="java" label="Java">

```java
// Records (since Java 14)
public record Person(String name, int age) {}

Person person1 = new Person("Max", 30);
Person person2 = new Person("Max", 30);

// Automatic equality checking
boolean equal = person1.equals(person2); // true

// Automatic ToString method
String str = person1.toString(); // "Person[name=Max, age=30]"
```

**Special features:**
- Records since Java 14
- Automatic equality checking based on values
- Automatic ToString method
- Automatic getter methods
- Immutable (final fields)

**Further reading:**
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

// Automatic equality checking
val equal = person1 == person2 // True

// Automatic field accessors
val n = person1.name // "Max"
val a = person1.age  // 30

// Functional update (copy with modification)
val older = person1(age = 31) // Person("Max", 31)
```

**Special features:**
- `struct` defines records with named fields
- Automatic constructor generation
- Automatic field accessors (getter functions)
- Structural equality with `==`
- Functional update via constructor call with named parameters
- Records are immutable by default

**Further reading:**
- [Koka Language Guide - Structs](https://koka-lang.github.io/koka/doc/book.html#sec-structs)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Data Classes
data class Person(val name: String, val age: Int)

val person1 = Person("Max", 30)
val person2 = Person("Max", 30)

// Automatic equality checking
val equal = person1 == person2 // true

// Automatic ToString method
val str = person1.toString() // "Person(name=Max, age=30)"

// Automatic copy method
val person3 = person1.copy(age = 31)
```

**Special features:**
- Data Classes are a fundamental language feature
- Automatic equality checking based on values
- Automatic ToString method
- Automatic copy method for immutable updates
- Automatic component functions for destructuring

**Further reading:**
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

-- Automatic equality checking (via deriving BEq)
person1 == person2  -- true

-- String representation (via deriving Repr)
repr person1  -- { name := "Max", age := 30 }

-- Functional update (copy with modifications)
let person3 := { person1 with age := 31 }
```

**Special features:**
- `structure` is Lean 4's native record concept
- `deriving` for automatic type class instances (Repr, BEq, Hashable, etc.)
- Functional update with `{ ... with field := value }` syntax
- All fields are immutable by default

**Further reading:**
- [Functional Programming in Lean - Structures](https://lean-lang.org/functional_programming_in_lean/getting-to-know/structures.html)

</TabItem>
<TabItem value="python" label="Python">

```python
# Data Classes (since Python 3.7)
from dataclasses import dataclass

@dataclass
class Person:
    name: str
    age: int

person1 = Person("Max", 30)
person2 = Person("Max", 30)

# Automatic equality checking
equal = person1 == person2  # True

# Automatic __repr__ method
str_repr = repr(person1)  # "Person(name='Max', age=30)"
```

**Special features:**
- Data Classes since Python 3.7
- Automatic equality checking based on values
- Automatic __repr__ method
- Supports `frozen=True` for immutability
- Supports `field()` for advanced configuration

**Further reading:**
- [Python Documentation - dataclasses](https://docs.python.org/3/library/dataclasses.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Structs with derive macros
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

// Automatic equality checking (via derive)
let equal = person1 == person2; // true

// Automatic debug formatting
let str = format!("{:?}", person1); // "Person { name: \"Max\", age: 30 }"
```

**Special features:**
- Structs with `derive` macros for automatic implementations
- `PartialEq` and `Eq` for equality checking
- `Debug` for string representation
- Supports additional derive macros like `Clone`, `Copy`, `Hash`

**Further reading:**
- [The Rust Book - Derive](https://doc.rust-lang.org/book/appendix-03-derivable-traits.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Case Classes
case class Person(name: String, age: Int)

val person1 = Person("Max", 30)
val person2 = Person("Max", 30)

// Automatic equality checking
val equal = person1 == person2 // true

// Automatic toString method
val str = person1.toString // "Person(Max,30)"

// Automatic copy method
val person3 = person1.copy(age = 31)
```

**Special features:**
- Case Classes are a fundamental language feature
- Automatic equality checking based on values
- Automatic toString method
- Automatic copy method for immutable updates
- Automatic companion objects with apply/unapply methods

**Further reading:**
- [Scala Documentation - Case Classes](https://docs.scala-lang.org/tour/case-classes.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Structs (behave like Records)
struct Person {
    let name: String
    let age: Int
}

let person1 = Person(name: "Max", age: 30)
let person2 = Person(name: "Max", age: 30)

// Automatic equality checking (for Equatable)
extension Person: Equatable {}

let equal = person1 == person2 // true

// Automatic string representation (for CustomStringConvertible)
extension Person: CustomStringConvertible {
    var description: String {
        return "Person(name: \(name), age: \(age))"
    }
}
```

**Special features:**
- Structs behave like Records
- Automatic equality checking via Equatable protocol
- Supports CustomStringConvertible for string representation
- Value types (are copied, not referenced)

**Further reading:**
- [Swift Documentation - Structures](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/structuresandclasses/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Type Aliases for Records (no automatic methods)
type Person = {
    readonly name: string;
    readonly age: number;
};

const person1: Person = { name: "Max", age: 30 };
const person2: Person = { name: "Max", age: 30 };

// Manual equality checking
const equal = person1.name === person2.name && person1.age === person2.age;

// Manual string representation
const str = `Person(name: ${person1.name}, age: ${person1.age})`;
```

**Special features:**
- Type Aliases for record structures
- No automatic methods (TypeScript is structurally typed)
- Supports `readonly` for immutability
- Manual implementation of equality checking and string representation required

**Further reading:**
- [TypeScript Handbook - Object Types](https://www.typescriptlang.org/docs/handbook/2/objects.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Record Definition
record Person where
    constructor MkPerson
    name : String
    age : Int

-- Instantiation
alice : Person
alice = MkPerson "Alice" 30

-- Access via generated accessor functions
personName : String
personName = name alice

-- Record update syntax
olderAlice : Person
olderAlice = { age := 31 } alice
```

**Special features:**
- Records automatically generate accessor functions
- Record update syntax with `{ field := value }`
- Records are immutable

**Further reading:**
- [Idris 2 Documentation - Records](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html#records)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Records
User : { name : Str, age : U32, email : Str }

user : User
user = { name: "Alice", age: 30, email: "alice@example.com" }

-- Record update syntax
updatedUser = { user & age: 31 }
```

**Special features:**
- Records are the primary structured data structure
- Record update syntax with `{ record & field: newValue }`
- Immutable by default

**Further reading:**
- [Roc Documentation - Records](https://www.roc-lang.org/tutorial#records)

</TabItem>
</Tabs>



---

### Case Classes


Special classes that automatically generate companion objects with apply/unapply methods for pattern matching and construction.


<Tabs availableTabs={['scala', 'kotlin']}>
<TabItem value="scala" label="Scala">

```scala
// Case Classes
case class Person(name: String, age: Int)

// Automatic apply method (factory method)
val person = Person("Max", 30)

// Automatic unapply method (for pattern matching)
person match {
  case Person(name, age) => println(s"$name is $age years old")
  case _ => println("Unknown")
}

// Automatic copy method
val person2 = person.copy(age = 31)

// Automatic toString method
val str = person.toString // "Person(Max,30)"

// Automatic equality checking
val person3 = Person("Max", 30)
val equal = person == person3 // true
```

**Special features:**
- Case Classes are a fundamental language feature
- Automatic companion objects with apply/unapply methods
- Optimized for pattern matching
- Automatic copy method for immutable updates
- Automatic toString method and equality checking

**Further reading:**
- [Scala Documentation - Case Classes](https://docs.scala-lang.org/tour/case-classes.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Data Classes (similar to Case Classes)
data class Person(val name: String, val age: Int)

// Automatic apply method (constructor)
val person = Person("Max", 30)

// Automatic component functions (for destructuring)
val (name, age) = person

// Automatic copy method
val person2 = person.copy(age = 31)

// Automatic toString method
val str = person.toString() // "Person(name=Max, age=30)"

// Automatic equality checking
val person3 = Person("Max", 30)
val equal = person == person3 // true
```

**Special features:**
- Data Classes are similar to Case Classes
- Automatic component functions for destructuring
- Automatic copy method for immutable updates
- Automatic toString method and equality checking
- Supports pattern matching in when expressions

**Further reading:**
- [Kotlin Documentation - Data Classes](https://kotlinlang.org/docs/data-classes.html)

</TabItem>
</Tabs>


## 8.7.2. toString / equals / hashCode

Standard methods for string representation, equality checking, and hash code calculation. Most OOP languages provide these through a common base class, allowing them to be overridden for custom types.

### Languages

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

**Special features:**
- `ToString()`, `Equals()`, and `GetHashCode()` inherited from `System.Object`
- `HashCode.Combine()` for convenient hash calculation (since .NET Core 2.1)
- `==` must be overloaded separately
- Can implement `IEquatable<T>` for type-safe equality checking

**Further reading:**
- [Microsoft C# Documentation - Object Methods](https://learn.microsoft.com/en-us/dotnet/api/system.object)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Requires: #include <iostream>, <functional>
struct Point {
    int x, y;

    // Equality (since C++20 also = default possible)
    bool operator==(const Point& other) const {
        return x == other.x && y == other.y;
    }

    // String representation (convention: operator<<)
    friend std::ostream& operator<<(std::ostream& os, const Point& p) {
        return os << "Point(" << p.x << ", " << p.y << ")";
    }
};

// Hash specialization
template<> struct std::hash<Point> {
    size_t operator()(const Point& p) const {
        return std::hash<int>()(p.x) ^ (std::hash<int>()(p.y) << 1);
    }
};

Point p1{3, 4}, p2{3, 4};
std::cout << p1;       // "Point(3, 4)"
p1 == p2;              // true
```

**Special features:**
- No common base class — `operator==`, `operator<<`, and `std::hash` are defined individually
- `operator==` since C++20 can be automatically generated as `= default`
- `std::hash<T>` must be defined as a template specialization

**Further reading:**
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

**Special features:**
- `toString()`, `operator==`, and `hashCode` inherited from `Object`
- `Object.hash()` for convenient hash calculation (since Dart 2.14)
- `@override` annotation recommended for overrides

**Further reading:**
- [Dart Documentation - Object](https://api.dart.dev/stable/dart-core/Object-class.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Records have automatic structural equality
type Point = { X: int; Y: int }

let p1 = { X = 3; Y = 4 }
let p2 = { X = 3; Y = 4 }
p1.ToString()                        // "{ X = 3\n  Y = 4 }"
p1 = p2                              // true (structural equality)
p1.GetHashCode() = p2.GetHashCode()  // true

// Manual override
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

**Special features:**
- Records and Discriminated Unions have automatic structural equality and hash code
- `=` uses structural equality, not reference equality
- Manual override possible with `[<CustomEquality; NoComparison>]` attribute
- `ToString()`, `Equals()`, `GetHashCode()` inherited from `System.Object`

**Further reading:**
- [F# Documentation - Equality](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/equality-comparisons)

</TabItem>
<TabItem value="go" label="Go">

```go
type Point struct {
    X, Y int
}

// Stringer interface (toString equivalent)
func (p Point) String() string {
    return fmt.Sprintf("Point(%d, %d)", p.X, p.Y)
}

p1 := Point{3, 4}
p2 := Point{3, 4}
fmt.Println(p1)        // "Point(3, 4)"
fmt.Println(p1 == p2)  // true
```

**Special features:**
- `fmt.Stringer` interface (`String() string`) for string representation
- `==` works automatically for structs with comparable fields
- No built-in hash code mechanism for custom types
- No common base object — interfaces instead of inheritance

**Further reading:**
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
p1 == p2                         // true (calls equals)
p1.hashCode() == p2.hashCode()  // true
```

**Special features:**
- Inherited from `java.lang.Object`, as in Java
- `==` calls `equals()` (unlike Java, where `==` is reference comparison)
- `@EqualsAndHashCode` and `@ToString` transformations generate methods automatically

**Further reading:**
- [Groovy Documentation - Object Orientation](https://groovy-lang.org/objectorientation.html)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
data Point = Point Int Int

-- Automatic: data Point = Point Int Int deriving (Show, Eq)

-- Manual implementation
instance Show Point where
    show (Point x y) = "Point(" ++ show x ++ ", " ++ show y ++ ")"

instance Eq Point where
    (Point x1 y1) == (Point x2 y2) = x1 == x2 && y1 == y2

-- show (Point 3 4)         => "Point(3, 4)"
-- Point 3 4 == Point 3 4   => True
```

**Special features:**
- `Show` (toString) and `Eq` (equals) are type classes from the Prelude
- `deriving (Show, Eq)` automatically generates instances
- No `Hash` type class in Prelude — `Hashable` from the `hashable` package

**Further reading:**
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

**Special features:**
- `toString()`, `equals()`, and `hashCode()` inherited from `java.lang.Object`
- Contract: equal objects must have equal hash codes
- `Objects.hash()` for convenient hash calculation (since Java 7)
- Pattern matching in `instanceof` (since Java 16)

**Further reading:**
- [Oracle Java Documentation - Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
struct Point
    x::Int
    y::Int
end

# toString equivalent
Base.show(io::IO, p::Point) = print(io, "Point($(p.x), $(p.y))")

p1 = Point(3, 4)
p2 = Point(3, 4)
println(p1)                # Point(3, 4)
p1 == p2                   # true (structural for immutable structs)
hash(p1) == hash(p2)       # true (automatically generated)
```

**Special features:**
- `Base.show()` for string representation (generic function)
- `==` is structural by default for immutable structs
- `hash()` is automatically generated for structs
- All three are generic functions, not methods on objects

**Further reading:**
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
p1 == p2                         // true (calls equals)
p1.hashCode() == p2.hashCode()  // true
```

**Special features:**
- `toString()`, `equals()`, and `hashCode()` inherited from `Any`
- `data class` generates all three automatically (see 8.7.1)
- `==` calls `equals()`, `===` checks reference equality

**Further reading:**
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

-- Alternative: automatically via deriving
-- structure Point where
--   x : Int
--   y : Int
--   deriving Repr, BEq, Hashable
```

**Special features:**
- `ToString` / `Repr` for string representation
- `BEq` for equality checking (`==`)
- `Hashable` for hash calculation
- All three can be automatically generated with `deriving`
- `==` uses the `BEq` instance

**Further reading:**
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

**Special features:**
- `description`, `isEqual:`, and `hash` inherited from `NSObject`
- `isEqual:` and `hash` must be consistent
- `description` is used by `NSLog()` and string interpolation

**Further reading:**
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
$p1 == $p2;               // true (compares properties)
```

**Special features:**
- `__toString()` magic method for string conversion
- No built-in `equals()` interface — `==` compares properties, `===` checks identity
- No standardized hash code mechanism (`spl_object_hash()` is identity-based)
- Constructor property promotion (since PHP 8.0)

**Further reading:**
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

**Special features:**
- `__str__` for `str()`/`print()`, `__repr__` for official debug representation
- If `__eq__` is defined, `__hash__` is set to `None` — must be explicitly defined
- Return `NotImplemented` for unknown types

**Further reading:**
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

**Special features:**
- `to_s` for string representation, `inspect` for debug output
- `==` for value comparison, `equal?` for reference comparison
- `eql?` and `hash` must be consistent (for hash tables)

**Further reading:**
- [Ruby Documentation - Object](https://ruby-doc.org/core-3.1.0/Object.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
use std::fmt;

#[derive(PartialEq, Eq, Hash)]
struct Point { x: i32, y: i32 }

// Display must be manually implemented
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

**Special features:**
- `Display` (toString), `PartialEq`/`Eq` (equals), and `Hash` are traits
- `derive` macro automatically generates `PartialEq`, `Eq`, and `Hash`
- `Display` must always be manually implemented — `Debug` can be derived

**Further reading:**
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
p1 == p2                       // true (calls equals)
p1.hashCode == p2.hashCode     // true
```

**Special features:**
- `toString`, `equals`, and `hashCode` inherited from `Any`
- `case class` generates all three automatically (see 8.7.1)
- `==` calls `equals`, `eq` checks reference equality
- Pattern matching in `equals` is idiomatic

**Further reading:**
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

    // Equatable and Hashable are automatically synthesized for structs
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

**Special features:**
- `CustomStringConvertible`, `Equatable`, and `Hashable` are protocols
- Compiler automatically synthesizes `==` and `hash(into:)` for structs
- `Hasher`-based API since Swift 4.2

**Further reading:**
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

**Special features:**
- `ToString()`, `Equals()`, and `GetHashCode()` inherited from `System.Object`
- `Is` for reference comparison, `Equals()` for value comparison
- `HashCode.Combine()` for convenient hash calculation (since .NET Core 2.1)

**Further reading:**
- [Microsoft VB.NET Documentation - Object Methods](https://learn.microsoft.com/en-us/dotnet/api/system.object)

</TabItem>
</Tabs>

## 8.7.3. Object Cloning / Copying

Mechanisms for creating copies of existing objects — either as a shallow copy that shares references, or as a deep copy that independently duplicates all nested objects.

### Languages

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
// original.Tags now also contains "draft" (Shallow Copy shares reference)
deep.Tags.Add("final");
// original.Tags does NOT contain "final" (Deep Copy is independent)
```

**Special features:**
- `MemberwiseClone()` from `System.Object` for Shallow Copy (protected)
- `ICloneable` interface as convention (returns `object`)
- Deep Copy must be manually implemented or realized via serialization

**Further reading:**
- [Microsoft C# Documentation - Object.MemberwiseClone](https://learn.microsoft.com/en-us/dotnet/api/system.object.memberwiseclone)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
class Document {
public:
    std::string title;
    std::vector<std::string> tags;

    // Copy constructor (Deep Copy by default for std containers)
    Document(const Document& other) = default;

    // Copy assignment
    Document& operator=(const Document& other) = default;
};

Document original{"Report", {"urgent"}};

// Copy constructor (Deep Copy)
Document copy1(original);

// Copy assignment (Deep Copy)
Document copy2 = original;

copy1.tags.push_back("draft");
// original.tags is unchanged (std::vector copies elements)
```

**Special features:**
- Copy constructor and copy assignment operator for copy logic
- `= default` generates member-wise copy (Deep Copy for std containers)
- For raw pointers, Deep Copy must be manually implemented in the copy constructor
- Move semantics (since C++11) as an alternative to copying

**Further reading:**
- [cppreference - Copy Constructor](https://en.cppreference.com/w/cpp/language/copy_constructor)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
class Document {
  String title;
  List<String> tags;

  Document(this.title, this.tags);

  // No built-in clone — manual copyWith pattern
  Document copyWith({String? title, List<String>? tags}) {
    return Document(
      title ?? this.title,
      tags ?? List.from(this.tags), // Deep copy of list
    );
  }
}

var original = Document("Report", ["urgent"]);
var copy = original.copyWith();
copy.tags.add("draft");
// original.tags is unchanged
```

**Special features:**
- No built-in clone mechanism
- `copyWith()` pattern is the convention (like `ThemeData.copyWith()`)
- `List.from()` or `[...list]` for shallow copy of lists

**Further reading:**
- [Dart Documentation - Classes](https://dart.dev/language/classes)

</TabItem>
<TabItem value="go" label="Go">

```go
type Document struct {
    Title string
    Tags  []string
}

// Shallow copy via struct assignment
original := Document{Title: "Report", Tags: []string{"urgent"}}
shallow := original
shallow.Tags = append(shallow.Tags, "draft")
// original.Tags is also affected (slice shares reference)

// Deep copy: manual
func (d Document) DeepCopy() Document {
    tags := make([]string, len(d.Tags))
    copy(tags, d.Tags)
    return Document{Title: d.Title, Tags: tags}
}

deep := original.DeepCopy()
```

**Special features:**
- Struct assignment creates shallow copy (value types are copied, slices/maps share reference)
- No built-in deep copy mechanism
- `copy()` builtin only for slices, not for nested structures

**Further reading:**
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

**Special features:**
- `clone()` inherited from `java.lang.Object` (protected) — requires `Cloneable` interface
- `super.clone()` creates shallow copy
- Deep copy must be manually implemented
- `Cloneable` interface is a marker interface (no methods)

**Further reading:**
- [Oracle Java Documentation - Object.clone](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#clone--)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
const original = {
    title: "Report",
    tags: ["urgent"]
};

// Shallow copy
const shallow1 = { ...original };
const shallow2 = Object.assign({}, original);
shallow1.tags.push("draft");
// original.tags now also contains "draft"

// Deep copy (since ES2022)
const deep = structuredClone(original);
deep.tags.push("final");
// original.tags does NOT contain "final"
```

**Special features:**
- Spread operator `{...obj}` and `Object.assign()` for shallow copy
- `structuredClone()` for deep copy (since ES2022)
- `JSON.parse(JSON.stringify(obj))` as older deep copy alternative (loses functions/dates)

**Further reading:**
- [MDN - structuredClone](https://developer.mozilla.org/en-US/docs/Web/API/structuredClone)
- [MDN - Object.assign](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
data class Document(val title: String, val tags: MutableList<String>)

val original = Document("Report", mutableListOf("urgent"))

// Shallow copy (data class copy)
val shallow = original.copy()
shallow.tags.add("draft")
// original.tags now also contains "draft" (reference shared)

// Deep copy (manual)
val deep = original.copy(tags = original.tags.toMutableList())
deep.tags.add("final")
// original.tags does NOT contain "final"
```

**Special features:**
- `data class` automatically generates `copy()` method
- `copy()` creates shallow copy (copies references)
- Deep copy must be manually realized via `copy()` with copied fields

**Further reading:**
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

  -- Shallow copy (functional update)
  let shallow := { original with }
  let shallowTags := "draft" :: shallow.tags
  let shallowUpdated := { shallow with tags := shallowTags }
  IO.println s!"Original tags: {original.tags}"
  IO.println s!"Shallow updated tags: {shallowUpdated.tags}"

  -- Deep copy (manual, since List is immutable, but needed for nested structures)
  let deepTags := "final" :: original.tags
  let deep := { original with tags := deepTags }
  IO.println s!"Original tags: {original.tags}"
  IO.println s!"Deep updated tags: {deep.tags}"
```

**Special features:**
- Lean 4 structures are **immutable** — every "copy" is a functional update with `{ ... with }` syntax
- Shallow and deep copy differ only for nested mutable references — in Lean 4 all values are immutable
- Functional updates create new structures; the original remains unchanged
- For nested structures, inner fields must be explicitly copied/transformed

**Further reading:**
- [Lean 4 Documentation - Structures](https://lean-lang.org/lean4/doc/struct.html)

</TabItem>
<TabItem value="php" label="PHP">

```php
class Document {
    public function __construct(
        public string $title,
        public array $tags
    ) {}

    // Adjust copy with __clone
    public function __clone() {
        // Arrays are automatically copied in PHP (Deep Copy)
    }
}

$original = new Document("Report", ["urgent"]);

// Shallow copy (clone keyword)
$copy = clone $original;
$copy->tags[] = "draft";
// $original->tags does NOT contain "draft" (arrays are value types in PHP)
```

**Special features:**
- `clone` keyword for object copy
- `__clone()` magic method to adjust the copy process
- Arrays are value types — are automatically copied (Deep Copy)
- Object properties are references — must be manually copied in `__clone()`

**Further reading:**
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

# Shallow copy
shallow = copy.copy(original)
shallow.tags.append("draft")
# original.tags now also contains "draft"

# Deep copy
deep = copy.deepcopy(original)
deep.tags.append("final")
# original.tags does NOT contain "final"
```

**Special features:**
- `copy.copy()` for shallow copy, `copy.deepcopy()` for deep copy
- `__copy__()` and `__deepcopy__()` for custom copy behavior
- Shallow copy copies references, deep copy recursively copies all objects

**Further reading:**
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

# Shallow copy
shallow = original.dup
shallow.tags << "draft"
# original.tags now also contains "draft"

# Deep copy (via Marshal)
deep = Marshal.load(Marshal.dump(original))
deep.tags << "final"
# original.tags does NOT contain "final"
```

**Special features:**
- `dup` for shallow copy (calls `initialize_copy`)
- `clone` like `dup`, but also copies frozen status and singleton methods
- Deep copy via `Marshal.dump`/`Marshal.load` (serialization)

**Further reading:**
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

// Deep clone (Clone trait clones all fields recursively)
let mut deep = original.clone();
deep.tags.push(String::from("draft"));
// original.tags is unchanged
```

**Special features:**
- `Clone` trait for explicit cloning (`clone()`)
- `derive(Clone)` generates deep clone (clones all fields recursively)
- `Copy` trait for implicit copying (only for simple stack types)
- Ownership system makes shallow copy impossible — `Clone` is always deep

**Further reading:**
- [Rust Documentation - Clone](https://doc.rust-lang.org/std/clone/trait.Clone.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
case class Document(title: String, tags: List[String])

val original = Document("Report", List("urgent"))

// Shallow copy (case class copy)
val shallow = original.copy()

// Copy with modified fields
val modified = original.copy(title = "Updated Report")

// Since Scala collections are immutable, there is no shallow vs deep copy problem
val extended = original.copy(tags = original.tags :+ "draft")
// original.tags is unchanged
```

**Special features:**
- `case class` automatically generates `copy()` method
- Immutable collections avoid the shallow vs deep copy problem
- `copy()` with named parameters for targeted field modifications

**Further reading:**
- [Scala Documentation - Case Classes](https://docs.scala-lang.org/tour/case-classes.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Structs are value types (automatic copy)
struct Document {
    var title: String
    var tags: [String]
}

var original = Document(title: "Report", tags: ["urgent"])

// Automatic deep copy (structs are value types)
var copy = original
copy.tags.append("draft")
// original.tags does NOT contain "draft"

// For classes: NSCopying protocol
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

**Special features:**
- Structs are value types — assignment automatically creates deep copy (copy-on-write)
- For classes (reference types): implement `NSCopying` protocol
- Swift prefers structs over classes for value-based data

**Further reading:**
- [Swift Documentation - Structures and Classes](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/structuresandclasses/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
interface Document {
    title: string;
    tags: string[];
}

const original: Document = { title: "Report", tags: ["urgent"] };

// Shallow copy
const shallow = { ...original };
shallow.tags.push("draft");
// original.tags now also contains "draft"

// Deep copy (since ES2022)
const deep = structuredClone(original);
deep.tags.push("final");
// original.tags does NOT contain "final"
```

**Special features:**
- Spread operator `{...obj}` and `Object.assign()` for shallow copy
- `structuredClone()` for deep copy (since ES2022)
- TypeScript adds type safety, copy behavior is identical to JavaScript

**Further reading:**
- [MDN - structuredClone](https://developer.mozilla.org/en-US/docs/Web/API/structuredClone)

</TabItem>
</Tabs>

## 8.7.4. Delegation

Automatic forwarding of method calls to another object to enable code reuse without inheritance.

### Languages {#sprachen}

<Tabs availableTabs={['groovy', 'kotlin']} orangeTabs={['scala']}>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Interface
interface Printer {
    fun print(message: String)
}

// Implementation
class ConsolePrinter : Printer {
    override fun print(message: String) {
        println(message)
    }
}

// Delegation with "by"
class MessageService(printer: Printer) : Printer by printer {
    fun sendMessage(msg: String) {
        print("Message: $msg")
    }
}

// Usage
val printer = ConsolePrinter()
val service = MessageService(printer)
service.print("Hello") // Delegates to ConsolePrinter
service.sendMessage("World")
```

**Special features:**
- Delegation with `by` keyword
- Automatic implementation of all interface methods
- Enables code reuse without inheritance
- Also supports property delegation

**Further reading:**
- [Kotlin Documentation - Delegation](https://kotlinlang.org/docs/delegation.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Trait
trait Printer {
  def print(message: String): Unit
}

// Implementation
class ConsolePrinter extends Printer {
  override def print(message: String): Unit = {
    println(message)
  }
}

// Delegation (manual)
class MessageService(printer: Printer) extends Printer {
  def sendMessage(msg: String): Unit = {
    print(s"Message: $msg")
  }
  
  // Manual delegation
  override def print(message: String): Unit = {
    printer.print(message)
  }
}

// Usage
val printer = new ConsolePrinter()
val service = new MessageService(printer)
service.print("Hello") // Delegates to ConsolePrinter
service.sendMessage("World")
```

**Special features:**
- Delegation must be manually implemented
- No native language feature for automatic delegation
- Pattern is frequently used for code reuse
- Also supports mixins for similar functionality

**Further reading:**
- [Scala Documentation - Traits](https://docs.scala-lang.org/tour/traits.html)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
import groovy.transform.Delegate

// Delegation via @Delegate
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
car.start() // Delegates to Engine.start()
car.stop()  // Delegates to Engine.stop()
```

**Special features:**
- `@Delegate` AST transformation automatically generates delegation methods
- All public methods of the delegate become available
- Supports `includes` and `excludes` for selective delegation

**Further reading:**
- [Groovy Documentation - Delegate](https://docs.groovy-lang.org/latest/html/gapi/groovy/lang/Delegate.html)

</TabItem>
</Tabs>


## 8.7.5. Events

Mechanism for notifying subscribers about changes or actions, implemented as Observer Pattern.

### Languages {#sprachen}

<Tabs availableTabs={['csharp', 'java', 'javascript', 'kotlin', 'matlab', 'object-pascal', 'python', 'swift', 'typescript', 'vbnet']}>
<TabItem value="csharp" label="C#">

```csharp
// Event declaration
public class Button
{
    public event EventHandler Click;
    
    protected virtual void OnClick()
    {
        Click?.Invoke(this, EventArgs.Empty);
    }
}

// Event handler
void Button_Click(object sender, EventArgs e)
{
    Console.WriteLine("Button wurde geklickt");
}

// Usage
var button = new Button();
button.Click += Button_Click;
button.OnClick(); // Triggers event
```

**Special features:**
- Events since C# 1.0
- Supports `+=` and `-=` for handler registration
- Thread-safe with `?.Invoke()` (null-conditional operator)
- Also supports custom event accessors

**Further reading:**
- [Microsoft C# Documentation - Events](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/events/)

</TabItem>
<TabItem value="java" label="Java">

```java
// Event listener interface
interface ClickListener {
    void onClick(Event e);
}

// Event source
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

// Usage
Button button = new Button();
button.addClickListener(e -> System.out.println("Button wurde geklickt"));
button.fireClick();
```

**Special features:**
- Events via listener pattern
- Manual implementation required
- Supports lambda expressions for event handlers (since Java 8)
- Often implemented with observer pattern

**Further reading:**
- [Oracle Java Documentation - Event Handling](https://docs.oracle.com/javase/tutorial/uiswing/events/index.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Event system (DOM Events)
const button = document.createElement('button');
button.textContent = 'Click me';

// Register event handler
button.addEventListener('click', (event) => {
    console.log('Button wurde geklickt');
});

// Trigger event
button.click();

// Custom events
const customEvent = new CustomEvent('custom', {
    detail: { message: 'Hello' }
});
button.dispatchEvent(customEvent);
```

**Special features:**
- DOM Events for browser environment
- `addEventListener` and `removeEventListener` for handler registration
- Supports custom events with `CustomEvent`
- Event bubbling and event capturing supported

**Further reading:**
- [MDN: Events](https://developer.mozilla.org/en-US/docs/Web/API/Event)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Event system with delegates
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

// Usage
val button = Button()
button.addClickListener { event -> 
    println("Button wurde geklickt")
}
button.fireClick()
```

**Special features:**
- Events via function references
- Supports lambda expressions for event handlers
- Can be combined with property delegates
- Manual implementation required

**Further reading:**
- [Kotlin Documentation - Higher-Order Functions](https://kotlinlang.org/docs/lambdas.html)

</TabItem>
<TabItem value="python" label="Python">

```python
# Event system (manual or with libraries)
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

# Usage
button = Button()
button.add_click_listener(lambda e: print("Button wurde geklickt"))
button._fire_click()
```

**Special features:**
- Events via callback lists
- Manual implementation required
- Supports lambda expressions for event handlers
- Libraries like `pydispatcher` for extended functionality

**Further reading:**
- [Python Documentation - Functions](https://docs.python.org/3/tutorial/controlflow.html#defining-functions)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Event system with closures
class Button {
    private var clickHandlers: [() -> Void] = []
    
    func addClickHandler(_ handler: @escaping () -> Void) {
        clickHandlers.append(handler)
    }
    
    func fireClick() {
        clickHandlers.forEach { $0() }
    }
}

// Usage
let button = Button()
button.addClickHandler {
    print("Button wurde geklickt")
}
button.fireClick()
```

**Special features:**
- Events implemented via closures
- Supports `@escaping` for asynchronous handlers
- Manual implementation required
- Combine framework for reactive programming (since Swift 5.0)

**Further reading:**
- [Swift Documentation - Closures](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/closures/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Event system (similar to JavaScript)
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

// Usage
const button = new Button();
button.addClickListener((event) => {
    console.log('Button wurde geklickt');
});
button.fireClick();
```

**Special features:**
- Events via function references with types
- Supports lambda expressions for event handlers
- Type-safe through TypeScript types
- Can also use DOM Events (like JavaScript)

**Further reading:**
- [TypeScript Handbook - Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Event declaration
Public Class Button
    Public Event Click As EventHandler
    
    Protected Overridable Sub OnClick()
        RaiseEvent Click(Me, EventArgs.Empty)
    End Sub
End Class

' Event handler
Sub Button_Click(sender As Object, e As EventArgs)
    Console.WriteLine("Button wurde geklickt")
End Sub

' Usage
Dim button As New Button()
AddHandler button.Click, AddressOf Button_Click
button.OnClick() ' Triggers event
```

**Special features:**
- Events since VB.NET 1.0
- `AddHandler` and `RemoveHandler` for handler registration
- `RaiseEvent` to trigger events
- Also supports custom event accessors

**Further reading:**
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

**Special features:**
- Events only for handle classes (`< handle`)
- `events` block defines events
- `notify()` triggers events, `addlistener()` registers listeners

**Further reading:**
- [MATLAB Documentation - Events](https://www.mathworks.com/help/matlab/matlab_oop/events-and-listeners.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Events: Method pointer properties
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

**Special features:**
- Events are properties with method pointer type
- `procedure of object` for method pointers
- `published` properties for event handling in designer
- Core concept of VCL/LCL frameworks

**Further reading:**
- [Delphi Documentation - Events](https://docwiki.embarcadero.com/RADStudio/en/Events_(Delphi))

</TabItem>
</Tabs>


## 8.7.6. Delegates

Type-safe function pointers that encapsulate method calls and provide multicast support for multiple handlers.

### Languages {#sprachen}

<Tabs availableTabs={['csharp', 'd', 'object-pascal', 'vbnet']}>
<TabItem value="csharp" label="C#">

```csharp
// Delegate declaration
public delegate void ActionHandler(string message);

// Methods
void PrintMessage(string msg)
{
    Console.WriteLine($"Message: {msg}");
}

void LogMessage(string msg)
{
    Console.WriteLine($"Log: {msg}");
}

// Delegate instance
ActionHandler handler = PrintMessage;

// Multicast delegates (multiple handlers)
handler += LogMessage;

// Call
handler("Hello"); // Calls both methods

// Remove a handler
handler -= LogMessage;
```

**Special features:**
- Delegates since C# 1.0
- Supports multicast delegates (multiple handlers)
- Type-safe and null-safe
- Also supports generic delegates (`Action<T>`, `Func<T, TResult>`)
- Events are based on delegates

**Further reading:**
- [Microsoft C# Documentation - Delegates](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/delegates/)

</TabItem>
<TabItem value="d" label="D">

```d
// Delegate declaration
alias ActionHandler = void delegate(string message);

// Methods
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

// Delegate instance
ActionHandler handler = &printMessage;

// Multicast delegates (since D 2.0)
handler = &printMessage;
handler = handler ~ &logMessage;

// Call
handler("Hello"); // Calls both methods
```

**Special features:**
- Delegates since D 1.0
- Multicast delegates since D 2.0
- Supports both delegates and function pointers
- Type-safe and null-safe

**Further reading:**
- [D Language Specification - Delegates](https://dlang.org/spec/function.html#delegates)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Delegate declaration
Public Delegate Sub ActionHandler(message As String)

' Methods
Sub PrintMessage(msg As String)
    Console.WriteLine($"Message: {msg}")
End Sub

Sub LogMessage(msg As String)
    Console.WriteLine($"Log: {msg}")
End Sub

' Delegate instance
Dim handler As ActionHandler = AddressOf PrintMessage

' Multicast delegates (multiple handlers)
handler = [Delegate].Combine(handler, AddressOf LogMessage)

' Call
handler("Hello") ' Calls both methods

' Remove a handler
handler = [Delegate].Remove(handler, AddressOf LogMessage)
```

**Special features:**
- Delegates since VB.NET 1.0
- Supports multicast delegates (multiple handlers)
- Type-safe and null-safe
- Also supports generic delegates (`Action(Of T)`, `Func(Of T, TResult)`)
- Events are based on delegates

**Further reading:**
- [Microsoft VB.NET Documentation - Delegates](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/delegates/)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Delegates: Method pointers and reference types
type
  // Method pointer (procedure/function of object)
  TCalculateMethod = function(a, b: Integer): Integer of object;

  // Anonymous method reference (since Delphi 2009)
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
  method := calc.Add;          // Method pointer
  func := calc.Add;            // Reference
  WriteLn(method(5, 3));       // 8
  WriteLn(func(5, 3));         // 8
end;
```

**Special features:**
- `procedure/function of object` for method pointers
- `reference to procedure/function` for anonymous method references (since Delphi 2009)
- Method pointers are bound to an object instance
- Reference types can also store anonymous methods

**Further reading:**
- [Delphi Documentation - Procedural Types](https://docwiki.embarcadero.com/RADStudio/en/Procedural_Types)

</TabItem>
</Tabs>

## 8.7.7. Partial Classes

Classes that can be defined across multiple files to improve code organization.

### Languages {#sprachen}

<Tabs availableTabs={['csharp', 'vbnet']}>
<TabItem value="csharp" label="C#">

```csharp
// Partial class - Part 1 (File: Person.cs)
public partial class Person
{
    public string Name { get; set; }
    
    public void Greet()
    {
        Console.WriteLine($"Hallo, ich bin {Name}");
    }
}

// Partial class - Part 2 (File: Person.Extensions.cs)
public partial class Person
{
    public int Age { get; set; }
    
    public void CelebrateBirthday()
    {
        Age++;
    }
}

// Usage
var person = new Person { Name = "Max", Age = 30 };
person.Greet();
person.CelebrateBirthday();
```

**Special features:**
- Partial classes since C# 2.0
- Enables splitting a class across multiple files
- Useful for code generation (e.g., Windows Forms Designer)
- All parts must be in the same namespace
- Also supports partial methods

**Further reading:**
- [Microsoft C# Documentation - Partial Classes](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/partial-classes-and-methods)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Partial class - Part 1 (File: Person.vb)
Partial Public Class Person
    Public Property Name As String
    
    Public Sub Greet()
        Console.WriteLine($"Hallo, ich bin {Name}")
    End Sub
End Class

' Partial class - Part 2 (File: Person.Extensions.vb)
Partial Public Class Person
    Public Property Age As Integer
    
    Public Sub CelebrateBirthday()
        Age += 1
    End Sub
End Class

' Usage
Dim person As New Person With {.Name = "Max", .Age = 30}
person.Greet()
person.CelebrateBirthday()
```

**Special features:**
- Partial classes since VB.NET 2005
- Enables splitting a class across multiple files
- Useful for code generation (e.g., Windows Forms Designer)
- All parts must be in the same namespace
- Also supports partial methods

**Further reading:**
- [Microsoft VB.NET Documentation - Partial Classes](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/objects-and-classes/partial-classes-and-methods)

</TabItem>
</Tabs>


## 8.7.8. CLOS (Multiple Dispatch OO)

Object-oriented paradigm where the method to be called is determined at runtime based on the types of **all** arguments (Multiple Dispatch), not just the receiver (Single Dispatch). The Common Lisp Object System (CLOS) is the best-known implementation of this concept.

### Languages

<Tabs availableTabs={['common-lisp', 'julia']} yellowTabs={['clojure', 'r']} orangeTabs={['groovy']}>
<TabItem value="clojure" label="Clojure">

```clojure
;; Multimethods: Dispatch on arbitrary criteria
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

**Special features:**
- `defmulti` defines the dispatch function, `defmethod` the implementations
- Dispatch function can use arbitrary criteria (not just types)
- Supports hierarchies via `derive` and `isa?`
- No implicit receiver — all arguments are equal

**Further reading:**
- [Clojure Documentation - Multimethods](https://clojure.org/reference/multimethods)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Define classes
(defclass circle ()
  ((radius :initarg :radius :accessor circle-radius)))

(defclass rectangle ()
  ((width :initarg :width :accessor rect-width)
   (height :initarg :height :accessor rect-height)))

;; Generic function with multiple dispatch
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

**Special features:**
- CLOS (Common Lisp Object System) is the original implementation of multiple dispatch
- `defgeneric` declares generic functions, `defmethod` specializes them
- Dispatch on all arguments simultaneously — no preferred receiver
- Supports method combinations (`:before`, `:after`, `:around`)
- Classes and methods are separate concepts (methods do not belong to classes)

**Further reading:**
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

// Groovy dispatches at runtime based on the actual type of all arguments
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

**Special features:**
- Groovy dispatches overloaded methods at runtime based on actual argument types
- Unlike Java (static dispatch for overloading), Groovy dynamically selects the most appropriate method
- No explicit multiple dispatch system — emerges from the dynamic method resolution mechanism

**Further reading:**
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

# Multiple dispatch: Method is selected based on ALL argument types
collide(a::Circle, b::Circle) =
    "Kreis-Kreis: r1=$(a.radius), r2=$(b.radius)"

collide(a::Circle, b::Rectangle) =
    "Kreis-Rechteck: r=$(a.radius), w=$(b.width)"

collide(a::Rectangle, b::Rectangle) =
    "Rechteck-Rechteck: w1=$(a.width), w2=$(b.width)"

collide(Circle(5.0), Rectangle(3.0, 4.0))
# => "Kreis-Rechteck: r=5.0, w=3.0"
```

**Special features:**
- Multiple dispatch is the **central** paradigm of Julia
- Functions are specialized via type signatures of all arguments
- No preferred receiver — all arguments are equal
- High performance through JIT compilation of specialized methods

**Further reading:**
- [Julia Documentation - Methods](https://docs.julialang.org/en/v1/manual/methods/)

</TabItem>
<TabItem value="r" label="R">

```r
# S4 classes and generic functions
setClass("Circle", representation(radius = "numeric"))
setClass("Rectangle", representation(width = "numeric", height = "numeric"))

# Generic function
setGeneric("collide", function(a, b) standardGeneric("collide"))

# Multiple dispatch: Methods for type combinations
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

**Special features:**
- S4 class system supports multiple dispatch via `setMethod()` with `signature()`
- `setGeneric()` declares generic functions
- Dispatch on any number of argument types possible
- S3 system (simpler) only supports single dispatch

**Further reading:**
- [R Documentation - S4 Classes](https://adv-r.hadley.nz/s4.html)

</TabItem>
</Tabs>

## 8.7.9. Smalltalk-Messaging

Object-oriented paradigm where objects communicate by **sending messages**. The receiver dynamically decides how to process a message — including the ability to intercept and handle unknown messages.

### Languages

<Tabs availableTabs={['objective-c', 'ruby']} yellowTabs={['groovy', 'python']} orangeTabs={['lua']}>
<TabItem value="groovy" label="Groovy">

```groovy
class DynamicHandler {
    String name = "Handler"

    // Known method
    String greet(String who) { "Hallo, $who!" }

    // Intercept unknown methods
    def methodMissing(String name, args) {
        "Unbekannte Nachricht: $name(${args.join(', ')})"
    }

    // Intercept unknown properties
    def propertyMissing(String name) {
        "Unbekanntes Property: $name"
    }
}

def obj = new DynamicHandler()
println obj.greet("Welt")        // "Hallo, Welt!"
println obj.dance("schnell")     // "Unbekannte Nachricht: dance(schnell)"
println obj.color                // "Unbekanntes Property: color"
```

**Special features:**
- `methodMissing()` intercepts unknown method calls
- `propertyMissing()` intercepts unknown property accesses
- Meta-Object Protocol (MOP) for dynamic method manipulation
- `invokeMethod()` can intercept all method calls (including known ones)

**Further reading:**
- [Groovy Documentation - MOP](https://groovy-lang.org/metaprogramming.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Messaging via metatables
local DynamicHandler = {}
DynamicHandler.__index = function(table, key)
    -- Intercept unknown messages
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

**Special features:**
- `__index` metamethod intercepts accesses to unknown keys
- Metatables enable dynamic method resolution
- No native OOP — messaging is simulated via metatables
- `__newindex` intercepts write accesses to unknown keys

**Further reading:**
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

// Intercept unknown messages
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

**Special features:**
- Direct Smalltalk heritage: `[receiver message:argument]` syntax
- `forwardInvocation:` intercepts unknown messages (like Smalltalk's `doesNotUnderstand:`)
- `respondsToSelector:` checks whether an object understands a message
- Messages to `nil` are allowed and return `nil`/0

**Further reading:**
- [Apple Documentation - Message Forwarding](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ObjCRuntimeGuide/Articles/ocrtForwarding.html)

</TabItem>
<TabItem value="python" label="Python">

```python
class DynamicHandler:
    def __init__(self, name):
        self.name = name

    def greet(self, who):
        return f"Hallo, {who}!"

    # Intercept unknown attributes/messages
    def __getattr__(self, name):
        def method(*args):
            return f"Unbekannte Nachricht: {name}({', '.join(str(a) for a in args)})"
        return method

obj = DynamicHandler("Handler")
print(obj.greet("Welt"))         # "Hallo, Welt!"
print(obj.dance("schnell"))      # "Unbekannte Nachricht: dance(schnell)"
```

**Special features:**
- `__getattr__` is only called when the attribute is not found normally
- `__getattribute__` intercepts all attribute accesses (including known ones)
- `hasattr()` checks whether an object has an attribute/method
- No explicit messaging paradigm, but dynamic resolution enables similar behavior

**Further reading:**
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

  # Intercept unknown messages
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
puts obj.send(:greet, "Welt")  # "Hallo, Welt!" (explicit message sending)
```

**Special features:**
- Every method call is a message to an object (Smalltalk heritage)
- `method_missing` intercepts unknown messages (like `doesNotUnderstand:`)
- `send(:method, args)` sends messages explicitly (including private methods)
- `respond_to?` / `respond_to_missing?` checks whether a message is understood

**Further reading:**
- [Ruby Documentation - method_missing](https://ruby-doc.org/core-3.1.0/BasicObject.html#method-i-method_missing)

</TabItem>
</Tabs>

