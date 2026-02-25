---
slug: /objektorientierung/interfaces-und-abstraktionen
title: 8.5. Interfaces and Abstractions
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import FilteredTabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 8.5. Interfaces and Abstractions

Interfaces and abstract concepts.

## 8.5.1. Interfaces / Protocols

Contracts that classes must implement to provide certain methods.

### Languages {#sprachen}

<FilteredTabs availableTabs={['ada', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'fsharp', 'go', 'groovy', 'haxe', 'idris', 'java', 'kotlin', 'nim', 'object-pascal', 'objective-c', 'php', 'python', 'rust', 'scala', 'swift', 'typescript', 'v', 'vbnet']} yellowTabs={['lean4', 'mercury']} orangeTabs={['zig']}>
<TabItem value="ada" label="Ada">

```ada
-- Interfaces: Tagged Interfaces
package Drawable is
    type Drawable_Interface is interface;
    
    procedure Draw (Item : Drawable_Interface) is abstract;
end Drawable;

package Shapes is
    type Circle is new Drawable.Drawable_Interface with record
        Radius : Float;
    end record;
    
    overriding procedure Draw (Item : Circle);
end Shapes;
```

**Special features:**
- Tagged Interfaces for abstract types
- `is interface` for interface definition
- `is abstract` for abstract methods

**Further reading:**
- [Ada Reference Manual - Interfaces](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-3-9-4.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Interfaces: interface keyword
interface IDrawable {
    void Draw();
}

class Circle : IDrawable {
    public double Radius { get; set; }
    
    public void Draw() {
        Console.WriteLine($"Drawing circle with radius {Radius}");
    }
}

IDrawable shape = new Circle { Radius = 5.0 };
shape.Draw();
```

**Special features:**
- `interface` keyword for interface definition
- Classes can implement multiple interfaces
- Default Interface Methods (since C# 8.0)

**Further reading:**
- [Microsoft C# Documentation - Interfaces](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/interface)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Interfaces: abstract classes or concepts (C++20)
class IDrawable {
public:
    virtual void draw() = 0;
    virtual ~IDrawable() = default;
};

class Circle : public IDrawable {
public:
    double radius;
    
    void draw() override {
        std::cout << "Drawing circle with radius " << radius << std::endl;
    }
};

// C++20 Concepts
template<typename T>
concept Drawable = requires(T t) {
    { t.draw() } -> std::same_as<void>;
};
```

**Special features:**
- Abstract Classes with pure virtual functions (`= 0`)
- Concepts (since C++20) for compile-time interface checking
- Multiple inheritance possible

**Further reading:**
- [cppreference - Abstract Classes](https://en.cppreference.com/w/cpp/language/abstract_class)
- [cppreference - Concepts](https://en.cppreference.com/w/cpp/language/constraints)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Interfaces: module (duck typing)
module Drawable
  abstract def draw
end

class Circle
  include Drawable
  
  def initialize(@radius : Float64)
  end
  
  def draw
    puts "Drawing circle with radius #{@radius}"
  end
end
```

**Special features:**
- Modules as interfaces (duck typing)
- `abstract def` for abstract methods
- Compile-time checking of implementation

**Further reading:**
- [Crystal Documentation - Modules](https://crystal-lang.org/reference/1.11/guides/concepts/modules.html)

</TabItem>
<TabItem value="d" label="D">

```d
// Interfaces: interface keyword
interface IDrawable {
    void draw();
}

class Circle : IDrawable {
    double radius;
    
    void draw() {
        writeln("Drawing circle with radius ", radius);
    }
}

IDrawable shape = new Circle();
shape.draw();
```

**Special features:**
- `interface` keyword for interface definition
- Classes can implement multiple interfaces
- Interfaces cannot contain implementations

**Further reading:**
- [D Language Specification - Interfaces](https://dlang.org/spec/interface.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Interfaces: implicit interfaces
abstract class Drawable {
  void draw();
}

class Circle implements Drawable {
  double radius;
  
  Circle(this.radius);
  
  @override
  void draw() {
    print('Drawing circle with radius $radius');
  }
}

Drawable shape = Circle(5.0);
shape.draw();
```

**Special features:**
- Every class implicitly defines an interface
- `implements` keyword for interface implementation
- Multiple interfaces can be implemented

**Further reading:**
- [Dart Language Tour - Interfaces](https://dart.dev/guides/language/language-tour#implicit-interfaces)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Interfaces: interface keyword
type IDrawable =
    abstract member Draw: unit -> unit

type Circle(radius: float) =
    interface IDrawable with
        member this.Draw() = 
            printfn "Drawing circle with radius %f" radius

let shape: IDrawable = Circle(5.0) :> IDrawable
shape.Draw()
```

**Special features:**
- `interface` keyword for interface definition
- `interface ... with` for interface implementation
- Explicit upcast with `:>` required

**Further reading:**
- [F# Documentation - Interfaces](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/interfaces)

</TabItem>
<TabItem value="go" label="Go">

```go
// Interfaces: structural typing
type Drawable interface {
    Draw()
}

type Circle struct {
    Radius float64
}

func (c Circle) Draw() {
    fmt.Printf("Drawing circle with radius %f\n", c.Radius)
}

var shape Drawable = Circle{Radius: 5.0}
shape.Draw()
```

**Special features:**
- Structural Typing: Interfaces are implicitly implemented
- No explicit `implements` keyword
- Interfaces can be defined retroactively

**Further reading:**
- [Go Documentation - Interfaces](https://go.dev/ref/spec#Interface_types)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Interfaces: interface keyword
interface Drawable {
    void draw()
}

class Circle implements Drawable {
    double radius
    
    Circle(double radius) {
        this.radius = radius
    }
    
    @Override
    void draw() {
        println("Drawing circle with radius ${radius}")
    }
}

Drawable shape = new Circle(5.0)
shape.draw()
```

**Special features:**
- `interface` keyword for interface definition
- `implements` keyword for interface implementation
- Multiple interfaces can be implemented

**Further reading:**
- [Groovy Documentation - Object Orientation](https://groovy-lang.org/objectorientation.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Interfaces: interface keyword
interface Drawable {
    function draw():Void;
}

class Circle implements Drawable {
    public var radius:Float;
    
    public function new(radius:Float) {
        this.radius = radius;
    }
    
    public function draw():Void {
        trace('Drawing circle with radius ${radius}');
    }
}

var shape:Drawable = new Circle(5.0);
shape.draw();
```

**Special features:**
- `interface` keyword for interface definition
- `implements` keyword for interface implementation
- Multiple interfaces can be implemented

**Further reading:**
- [Haxe Manual - Interfaces](https://haxe.org/manual/types-interfaces.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Interfaces: interface keyword
interface Drawable {
    void draw();
}

class Circle implements Drawable {
    private double radius;
    
    public Circle(double radius) {
        this.radius = radius;
    }
    
    @Override
    public void draw() {
        System.out.println("Drawing circle with radius " + radius);
    }
}

Drawable shape = new Circle(5.0);
shape.draw();
```

**Special features:**
- `interface` keyword for interface definition
- `implements` keyword for interface implementation
- Default Methods (since Java 8)
- Static Methods (since Java 8)

**Further reading:**
- [Oracle Java Documentation - Interfaces](https://docs.oracle.com/javase/tutorial/java/IandI/createinterface.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Interfaces: interface keyword
interface Drawable {
    fun draw()
}

class Circle(val radius: Double) : Drawable {
    override fun draw() {
        println("Drawing circle with radius $radius")
    }
}

val shape: Drawable = Circle(5.0)
shape.draw()
```

**Special features:**
- `interface` keyword for interface definition
- Default method implementations possible
- Multiple interfaces can be implemented

**Further reading:**
- [Kotlin Documentation - Interfaces](https://kotlinlang.org/docs/interfaces.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Type Classes as Interfaces
class Drawable (α : Type) where
  draw : α → String

structure Circle where
  radius : Float

instance : Drawable Circle where
  draw c := s!"Drawing circle with radius {c.radius}"

-- Usage with Type Class Constraint
def render [Drawable α] (shape : α) : String :=
  draw shape

let shape : Circle := { radius := 5.0 }
render shape  -- "Drawing circle with radius 5.0"
```

**Special features:**
- `class` defines Type Classes (Interfaces)
- `instance` implements a Type Class for a type
- Type Class Constraints with `[ClassName α]` in function signatures
- Multiple Type Classes can be implemented simultaneously
- Default implementations possible

**Further reading:**
- [Functional Programming in Lean - Type Classes](https://lean-lang.org/functional_programming_in_lean/type-classes.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Type Classes as Interface Equivalent
:- typeclass drawable(T) where [
    func draw(T) = string
].

:- type circle ---> circle(radius :: float).

:- instance drawable(circle) where [
    (draw(circle(Radius)) =
        "Drawing circle with radius " ++ float_to_string(Radius))
].

% Usage with Type Class Constraint
:- func render(T) = string <= drawable(T).
render(Shape) = draw(Shape).
```

**Special features:**
- `typeclass` defines Type Classes (Interface equivalent)
- `instance` implements a Type Class for a concrete type
- Type Class Constraints with `<= classname(T)` in function signatures
- Compile-time resolution (no runtime dispatch)

**Further reading:**
- [Mercury Language Reference - Type Classes](https://mercurylang.org/information/doc-release/mercury_ref/Type-classes.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Interfaces: concept (duck typing)
type Drawable = concept x
  x.draw()

type Circle = ref object
  radius: float

method draw(c: Circle) =
  echo "Drawing circle with radius ", c.radius

var shape: Drawable = Circle(radius: 5.0)
shape.draw()
```

**Special features:**
- Concepts for interface-like types
- Duck typing at compile time
- Structural typing

**Further reading:**
- [Nim Manual - Concepts](https://nim-lang.org/docs/manual.html#concepts)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Interfaces: interface keyword
type
  IDrawable = interface
    procedure Draw;
  end;
  
  TCircle = class(TInterfacedObject, IDrawable)
  private
    FRadius: Double;
  public
    constructor Create(ARadius: Double);
    procedure Draw;
  end;

constructor TCircle.Create(ARadius: Double);
begin
  inherited Create;
  FRadius := ARadius;
end;

procedure TCircle.Draw;
begin
  WriteLn('Drawing circle with radius ', FRadius);
end;
```

**Special features:**
- `interface` keyword for interface definition
- Classes must inherit from `TInterfacedObject`
- Reference counting for interfaces

**Further reading:**
- [Delphi Documentation - Interfaces](https://docwiki.embarcadero.com/RADStudio/en/Interfaces)

</TabItem>
<TabItem value="php" label="PHP">

```php
// Interfaces: interface keyword
interface Drawable {
    public function draw();
}

class Circle implements Drawable {
    private float $radius;
    
    public function __construct(float $radius) {
        $this->radius = $radius;
    }
    
    public function draw(): void {
        echo "Drawing circle with radius {$this->radius}\n";
    }
}

$shape = new Circle(5.0);
$shape->draw();
```

**Special features:**
- `interface` keyword for interface definition
- `implements` keyword for interface implementation
- Multiple interfaces can be implemented

**Further reading:**
- [PHP Documentation - Interfaces](https://www.php.net/manual/en/language.oop5.interfaces.php)

</TabItem>
<TabItem value="python" label="Python">

```python
# Interfaces: Protocol (since Python 3.8) or ABC
from typing import Protocol

class Drawable(Protocol):
    def draw(self) -> None: ...

class Circle:
    def __init__(self, radius: float):
        self.radius = radius
    
    def draw(self) -> None:
        print(f"Drawing circle with radius {self.radius}")

shape: Drawable = Circle(5.0)
shape.draw()
```

**Special features:**
- `Protocol` (since Python 3.8) for structural subtyping
- `ABC` (Abstract Base Classes) for nominal subtyping
- Duck typing at runtime

**Further reading:**
- [Python Documentation - Protocols](https://docs.python.org/3/library/typing.html#typing.Protocol)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Interfaces: traits
trait Drawable {
    fn draw(&self);
}

struct Circle {
    radius: f64,
}

impl Drawable for Circle {
    fn draw(&self) {
        println!("Drawing circle with radius {}", self.radius);
    }
}

let shape: Box<dyn Drawable> = Box::new(Circle { radius: 5.0 });
shape.draw();
```

**Special features:**
- `trait` keyword for interface definition
- `impl Trait for Type` for trait implementation
- Default method implementations possible

**Further reading:**
- [Rust Book - Traits](https://doc.rust-lang.org/book/ch10-02-traits.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Interfaces: traits
trait Drawable {
  def draw(): Unit
}

class Circle(val radius: Double) extends Drawable {
  override def draw(): Unit = {
    println(s"Drawing circle with radius $radius")
  }
}

val shape: Drawable = new Circle(5.0)
shape.draw()
```

**Special features:**
- `trait` keyword for interface definition
- Traits can contain implementations
- Multiple traits can be implemented

**Further reading:**
- [Scala Documentation - Traits](https://docs.scala-lang.org/tour/traits.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Interfaces: protocols
protocol Drawable {
    func draw()
}

class Circle: Drawable {
    let radius: Double
    
    init(radius: Double) {
        self.radius = radius
    }
    
    func draw() {
        print("Drawing circle with radius \(radius)")
    }
}

let shape: Drawable = Circle(radius: 5.0)
shape.draw()
```

**Special features:**
- `protocol` keyword for interface definition
- Default method implementations possible (Extensions)
- Multiple protocols can be implemented

**Further reading:**
- [Swift Documentation - Protocols](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/protocols/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Interfaces: interface keyword
interface Drawable {
    draw(): void;
}

class Circle implements Drawable {
    private radius: number;
    
    constructor(radius: number) {
        this.radius = radius;
    }
    
    draw(): void {
        console.log(`Drawing circle with radius ${this.radius}`);
    }
}

const shape: Drawable = new Circle(5.0);
shape.draw();
```

**Special features:**
- `interface` keyword for interface definition
- Structural typing at compile time
- Multiple interfaces can be implemented

**Further reading:**
- [TypeScript Handbook - Interfaces](https://www.typescriptlang.org/docs/handbook/2/objects.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Interfaces: Interface keyword
Interface IDrawable
    Sub Draw()
End Interface

Class Circle
    Implements IDrawable
    Private radius As Double
    
    Public Sub New(radius As Double)
        Me.radius = radius
    End Sub
    
    Public Sub Draw() Implements IDrawable.Draw
        Console.WriteLine($"Drawing circle with radius {radius}")
    End Sub
End Class
```

**Special features:**
- `Interface` keyword for interface definition
- `Implements` keyword for interface implementation
- `Implements InterfaceName.MethodName` for explicit implementation

**Further reading:**
- [Microsoft VB.NET Documentation - Interfaces](https://learn.microsoft.com/en-us/dotnet/visual-basic/language-reference/statements/interface-statement)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Interfaces: struct with function pointers
const Drawable = struct {
    draw: *const fn (self: *anyopaque) void,
};

const Circle = struct {
    radius: f64,
    
    pub fn draw(self: *Circle) void {
        std.debug.print("Drawing circle with radius {d}\n", .{self.radius});
    }
    
    pub fn asDrawable(self: *Circle) Drawable {
        return Drawable{
            .draw = struct {
                fn drawImpl(ptr: *anyopaque) void {
                    const self_ptr: *Circle = @ptrCast(@alignCast(ptr));
                    self_ptr.draw();
                }
            }.drawImpl,
        };
    }
};
```

**Special features:**
- No native interface support
- Structs with function pointers as interface replacement
- Manual interface pattern

**Further reading:**
- [Zig Documentation - Structs](https://ziglang.org/documentation/0.11.0/#structs)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Interface Definition
interface Printable a where
    display : a -> String

-- Implementation
data Shape = Circle Double | Rectangle Double Double

Printable Shape where
    display (Circle r) = "Circle with radius " ++ show r
    display (Rectangle w h) = "Rectangle " ++ show w ++ "x" ++ show h

-- Usage with Constraint
printItem : Printable a => a -> IO ()
printItem item = putStrLn (display item)
```

**Special features:**
- Interfaces are the equivalent of Type Classes in Haskell
- Support default implementations
- Interface constraints with `=>` syntax

**Further reading:**
- [Idris 2 Documentation - Interfaces](https://idris2.readthedocs.io/en/latest/tutorial/interfaces.html)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
@protocol Drawable <NSObject>
@required
- (void)draw;
- (CGFloat)area;

@optional
- (NSString *)description;
@end

@interface Circle : NSObject <Drawable>
@property CGFloat radius;
@end

@implementation Circle
- (void)draw {
    NSLog(@"Drawing circle with radius %f", self.radius);
}

- (CGFloat)area {
    return M_PI * self.radius * self.radius;
}
@end
```

**Special features:**
- `@protocol` defines interfaces (Protocols)
- `@required` and `@optional` methods
- Classes can implement multiple protocols
- Protocols can inherit from other protocols

**Further reading:**
- [Apple Documentation - Protocols](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/WorkingwithProtocols/WorkingwithProtocols.html)

</TabItem>
<TabItem value="v" label="V">

```v
// Interfaces (implicitly satisfied)
interface Drawable {
    draw() string
}

struct Circle {
    radius f64
}

fn (c Circle) draw() string {
    return 'Drawing circle with radius ${c.radius}'
}

struct Square {
    side f64
}

fn (s Square) draw() string {
    return 'Drawing square with side ${s.side}'
}

fn render(d Drawable) {
    println(d.draw())
}
```

**Special features:**
- Structural typing: no `implements` needed
- Every type with the right methods satisfies an interface
- Interfaces can also define fields

**Further reading:**
- [V Documentation - Interfaces](https://github.com/vlang/v/blob/master/doc/docs.md#interfaces)

</TabItem>
</FilteredTabs>


## 8.5.2. Abstract Methods

Methods that are declared in a base class or interface but not implemented.

### Languages {#sprachen}

<FilteredTabs availableTabs={['ada', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'eiffel', 'fsharp', 'groovy', 'haxe', 'java', 'kotlin', 'matlab', 'nim', 'object-pascal', 'php', 'python', 'scala', 'swift', 'typescript', 'vbnet']} yellowTabs={['lean4', 'mercury']} orangeTabs={['objective-c']}>
<TabItem value="ada" label="Ada">

```ada
-- Abstract Methods: abstract procedures
package Shapes is
    type Shape is abstract tagged null record;
    
    function Area (S : Shape) return Float is abstract;
    procedure Draw (S : Shape) is abstract;
end Shapes;

package Circles is
    type Circle is new Shapes.Shape with record
        Radius : Float;
    end record;
    
    overriding function Area (C : Circle) return Float;
    overriding procedure Draw (C : Circle);
end Circles;
```

**Special features:**
- `is abstract` for abstract methods
- Abstract types with `abstract tagged`
- Must be overridden in derived types

**Further reading:**
- [Ada Reference Manual - Abstract Types](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-3-9-3.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Abstract Methods: abstract keyword
abstract class Shape {
    public abstract double Area();
    public abstract void Draw();
}

class Circle : Shape {
    public double Radius { get; set; }
    
    public override double Area() {
        return Math.PI * Radius * Radius;
    }
    
    public override void Draw() {
        Console.WriteLine($"Drawing circle with radius {Radius}");
    }
}
```

**Special features:**
- `abstract` keyword for abstract methods
- Abstract methods only in abstract classes
- Must be overridden in derived classes

**Further reading:**
- [Microsoft C# Documentation - Abstract](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/abstract)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Abstract Methods: pure virtual functions
class Shape {
public:
    virtual double area() = 0;
    virtual void draw() = 0;
    virtual ~Shape() = default;
};

class Circle : public Shape {
public:
    double radius;
    
    double area() override {
        return 3.14159 * radius * radius;
    }
    
    void draw() override {
        std::cout << "Drawing circle with radius " << radius << std::endl;
    }
};
```

**Special features:**
- Pure Virtual Functions (`= 0`) for abstract methods
- Abstract methods only in abstract classes
- Must be overridden in derived classes

**Further reading:**
- [cppreference - Abstract Classes](https://en.cppreference.com/w/cpp/language/abstract_class)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Abstract Methods: abstract def
abstract class Shape
  abstract def area : Float64
  abstract def draw : Nil
end

class Circle < Shape
  def initialize(@radius : Float64)
  end
  
  def area : Float64
    Math::PI * @radius * @radius
  end
  
  def draw : Nil
    puts "Drawing circle with radius #{@radius}"
  end
end
```

**Special features:**
- `abstract def` for abstract methods
- Abstract methods only in abstract classes
- Must be overridden in derived classes

**Further reading:**
- [Crystal Documentation - Abstract Classes](https://crystal-lang.org/reference/1.11/syntax_and_semantics/virtual_and_abstract_types.html)

</TabItem>
<TabItem value="d" label="D">

```d
// Abstract Methods: abstract keyword
abstract class Shape {
    abstract double area();
    abstract void draw();
}

class Circle : Shape {
    double radius;
    
    override double area() {
        return 3.14159 * radius * radius;
    }
    
    override void draw() {
        writeln("Drawing circle with radius ", radius);
    }
}
```

**Special features:**
- `abstract` keyword for abstract methods
- Abstract methods only in abstract classes
- Must be overridden in derived classes

**Further reading:**
- [D Language Specification - Abstract Classes](https://dlang.org/spec/class.html#abstract-class)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Abstract Methods: abstract keyword
abstract class Shape {
  double area();
  void draw();
}

class Circle extends Shape {
  double radius;
  
  Circle(this.radius);
  
  @override
  double area() {
    return 3.14159 * radius * radius;
  }
  
  @override
  void draw() {
    print('Drawing circle with radius $radius');
  }
}
```

**Special features:**
- `abstract` keyword for abstract methods
- Abstract methods only in abstract classes
- Must be overridden in derived classes

**Further reading:**
- [Dart Language Tour - Abstract Classes](https://dart.dev/guides/language/language-tour#abstract-classes)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
-- Abstract Methods: deferred features
deferred class SHAPE
feature
    area: REAL
        deferred
        end
    
    draw
        deferred
        end
end

class CIRCLE
inherit
    SHAPE
feature
    radius: REAL
    
    area: REAL
        do
            Result := 3.14159 * radius * radius
        end
    
    draw
        do
            print("Drawing circle with radius ")
            print(radius)
            print("%N")
        end
end
```

**Special features:**
- `deferred` keyword for abstract methods
- Abstract methods only in `deferred` classes
- Must be implemented in derived classes

**Further reading:**
- [Eiffel Documentation - Deferred Features](https://www.eiffel.org/doc/eiffel/ET-_Deferred_Features)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Abstract Methods: abstract members
[<AbstractClass>]
type Shape() =
    abstract member Area: unit -> float
    abstract member Draw: unit -> unit

type Circle(radius: float) =
    inherit Shape()
    
    override this.Area() = 
        System.Math.PI * radius * radius
    
    override this.Draw() = 
        printfn "Drawing circle with radius %f" radius
```

**Special features:**
- `abstract member` for abstract methods
- `[<AbstractClass>]` attribute for abstract classes
- Must be overridden in derived classes

**Further reading:**
- [F# Documentation - Abstract Classes](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/abstract-classes)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Abstract Methods: abstract keyword
abstract class Shape {
    abstract double area()
    abstract void draw()
}

class Circle extends Shape {
    double radius
    
    Circle(double radius) {
        this.radius = radius
    }
    
    @Override
    double area() {
        return Math.PI * radius * radius
    }
    
    @Override
    void draw() {
        println("Drawing circle with radius ${radius}")
    }
}
```

**Special features:**
- `abstract` keyword for abstract methods
- Abstract methods only in abstract classes
- Must be overridden in derived classes

**Further reading:**
- [Groovy Documentation - Object Orientation](https://groovy-lang.org/objectorientation.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Abstract Methods: abstract keyword
abstract class Shape {
    abstract function area():Float;
    abstract function draw():Void;
}

class Circle extends Shape {
    public var radius:Float;
    
    public function new(radius:Float) {
        this.radius = radius;
    }
    
    override function area():Float {
        return Math.PI * radius * radius;
    }
    
    override function draw():Void {
        trace('Drawing circle with radius ${radius}');
    }
}
```

**Special features:**
- `abstract` keyword for abstract methods
- Abstract methods only in abstract classes
- Must be overridden in derived classes

**Further reading:**
- [Haxe Manual - Abstract Classes](https://haxe.org/manual/types-abstract-class.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Abstract Methods: abstract keyword
abstract class Shape {
    public abstract double area();
    public abstract void draw();
}

class Circle extends Shape {
    private double radius;
    
    public Circle(double radius) {
        this.radius = radius;
    }
    
    @Override
    public double area() {
        return Math.PI * radius * radius;
    }
    
    @Override
    public void draw() {
        System.out.println("Drawing circle with radius " + radius);
    }
}
```

**Special features:**
- `abstract` keyword for abstract methods
- Abstract methods only in abstract classes
- Must be overridden in derived classes

**Further reading:**
- [Oracle Java Documentation - Abstract Methods](https://docs.oracle.com/javase/tutorial/java/IandI/abstract.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Abstract Methods: abstract keyword
abstract class Shape {
    abstract fun area(): Double
    abstract fun draw()
}

class Circle(val radius: Double) : Shape() {
    override fun area(): Double {
        return Math.PI * radius * radius
    }
    
    override fun draw() {
        println("Drawing circle with radius $radius")
    }
}
```

**Special features:**
- `abstract` keyword for abstract methods
- Abstract methods only in abstract classes
- Must be overridden in derived classes

**Further reading:**
- [Kotlin Documentation - Abstract Classes](https://kotlinlang.org/docs/inheritance.html#abstract-classes)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Type Class methods are implicitly abstract
class Shape (α : Type) where
  area : α → Float
  draw : α → String

structure Circle where
  radius : Float

-- Implementation of all abstract methods required
instance : Shape Circle where
  area c := 3.14159 * c.radius * c.radius
  draw c := s!"Drawing circle with radius {c.radius}"

-- Unimplemented Type Classes lead to compile errors
-- structure Square where
--   side : Float
-- instance : Shape Square where
--   area s := s.side * s.side
--   -- Error: draw missing
```

**Special features:**
- Type Class methods are abstract until an `instance` implements them
- All methods must be implemented in the instance (or have defaults)
- Missing implementations are detected at compile time

**Further reading:**
- [Functional Programming in Lean - Type Classes](https://lean-lang.org/functional_programming_in_lean/type-classes.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Type Class methods are abstract until instantiation
:- typeclass shape(T) where [
    func area(T) = float,
    func draw(T) = string
].

:- type circle ---> circle(radius :: float).

% Implementation of all abstract methods required
:- instance shape(circle) where [
    (area(circle(R)) = math.pi * R * R),
    (draw(circle(R)) = "Drawing circle with radius " ++ float_to_string(R))
].

% Missing implementations lead to compile errors
```

**Special features:**
- Type Class methods are abstract until an `instance` implements them
- All methods must be implemented in the instance
- No default implementations in Mercury Type Classes
- Missing implementations are detected at compile time

**Further reading:**
- [Mercury Language Reference - Type Classes](https://mercurylang.org/information/doc-release/mercury_ref/Type-classes.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Abstract Methods: method {.base.}
type Shape = ref object of RootObj
method area(self: Shape): float {.base.} =
  raise newException(ValueError, "Method not implemented")

method draw(self: Shape) {.base.} =
  raise newException(ValueError, "Method not implemented")

type Circle = ref object of Shape
  radius: float

method area(self: Circle): float =
  PI * self.radius * self.radius

method draw(self: Circle) =
  echo "Drawing circle with radius ", self.radius
```

**Special features:**
- `{.base.}` pragma for abstract methods
- Abstract methods throw exception if not overridden
- Must be overridden in derived types

**Further reading:**
- [Nim Manual - Methods](https://nim-lang.org/docs/manual.html#methods)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Abstract Methods: virtual; abstract;
type
  Shape = class
    function Area: Double; virtual; abstract;
    procedure Draw; virtual; abstract;
  end;
  
  Circle = class(Shape)
  private
    FRadius: Double;
  public
    constructor Create(ARadius: Double);
    function Area: Double; override;
    procedure Draw; override;
  end;
```

**Special features:**
- `virtual; abstract;` for abstract methods
- Abstract methods only in abstract classes
- Must be overridden in derived classes

**Further reading:**
- [Delphi Documentation - Abstract Methods](https://docwiki.embarcadero.com/RADStudio/en/Methods#Abstract_Methods)

</TabItem>
<TabItem value="php" label="PHP">

```php
// Abstract Methods: abstract keyword
abstract class Shape {
    abstract public function area(): float;
    abstract public function draw(): void;
}

class Circle extends Shape {
    private float $radius;
    
    public function __construct(float $radius) {
        $this->radius = $radius;
    }
    
    public function area(): float {
        return M_PI * $this->radius * $this->radius;
    }
    
    public function draw(): void {
        echo "Drawing circle with radius {$this->radius}\n";
    }
}
```

**Special features:**
- `abstract` keyword for abstract methods
- Abstract methods only in abstract classes
- Must be overridden in derived classes

**Further reading:**
- [PHP Documentation - Abstract Classes](https://www.php.net/manual/en/language.oop5.abstract.php)

</TabItem>
<TabItem value="python" label="Python">

```python
# Abstract Methods: @abstractmethod
from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self) -> float:
        pass
    
    @abstractmethod
    def draw(self) -> None:
        pass

class Circle(Shape):
    def __init__(self, radius: float):
        self.radius = radius
    
    def area(self) -> float:
        return 3.14159 * self.radius * self.radius
    
    def draw(self) -> None:
        print(f"Drawing circle with radius {self.radius}")
```

**Special features:**
- `@abstractmethod` decorator for abstract methods
- `ABC` (Abstract Base Class) as base class
- Must be overridden in derived classes

**Further reading:**
- [Python Documentation - Abstract Base Classes](https://docs.python.org/3/library/abc.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Abstract Methods: without implementation
abstract class Shape {
  def area(): Double
  def draw(): Unit
}

class Circle(val radius: Double) extends Shape {
  override def area(): Double = {
    Math.PI * radius * radius
  }
  
  override def draw(): Unit = {
    println(s"Drawing circle with radius $radius")
  }
}
```

**Special features:**
- Abstract methods without implementation
- Abstract methods only in abstract classes
- Must be overridden in derived classes

**Further reading:**
- [Scala Documentation - Abstract Classes](https://docs.scala-lang.org/tour/traits.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Abstract Methods: protocol requirements
protocol Shape {
    func area() -> Double
    func draw()
}

class Circle: Shape {
    let radius: Double
    
    init(radius: Double) {
        self.radius = radius
    }
    
    func area() -> Double {
        return Double.pi * radius * radius
    }
    
    func draw() {
        print("Drawing circle with radius \(radius)")
    }
}
```

**Special features:**
- Protocol requirements as abstract methods
- Abstract methods in protocols
- Must be overridden in implementing classes

**Further reading:**
- [Swift Documentation - Protocols](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/protocols/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Abstract Methods: abstract keyword
abstract class Shape {
    abstract area(): number;
    abstract draw(): void;
}

class Circle extends Shape {
    private radius: number;
    
    constructor(radius: number) {
        super();
        this.radius = radius;
    }
    
    area(): number {
        return Math.PI * this.radius * this.radius;
    }
    
    draw(): void {
        console.log(`Drawing circle with radius ${this.radius}`);
    }
}
```

**Special features:**
- `abstract` keyword for abstract methods (since TypeScript 4.2)
- Abstract methods only in abstract classes
- Must be overridden in derived classes

**Further reading:**
- [TypeScript Handbook - Abstract Classes](https://www.typescriptlang.org/docs/handbook/2/classes.html#abstract-classes-and-members)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Abstract Methods: MustOverride keyword
MustInherit Class Shape
    MustOverride Function Area() As Double
    MustOverride Sub Draw()
End Class

Class Circle
    Inherits Shape
    Private radius As Double
    
    Public Sub New(radius As Double)
        Me.radius = radius
    End Sub
    
    Public Overrides Function Area() As Double
        Return Math.PI * radius * radius
    End Function
    
    Public Overrides Sub Draw()
        Console.WriteLine($"Drawing circle with radius {radius}")
    End Sub
End Class
```

**Special features:**
- `MustOverride` keyword for abstract methods
- Abstract methods only in `MustInherit` classes
- Must be overridden in derived classes

**Further reading:**
- [Microsoft VB.NET Documentation - MustOverride](https://learn.microsoft.com/en-us/dotnet/visual-basic/language-reference/modifiers/mustoverride)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
classdef (Abstract) Shape
    methods (Abstract)
        area = getArea(obj)
        draw(obj)
    end
end

classdef Circle < Shape
    properties
        radius
    end
    
    methods
        function obj = Circle(r)
            obj.radius = r;
        end
        
        function a = getArea(obj)
            a = pi * obj.radius^2;
        end
        
        function draw(obj)
            fprintf('Circle with radius %g\n', obj.radius);
        end
    end
end
```

**Special features:**
- `methods (Abstract)` defines abstract methods
- All abstract methods must be implemented in concrete subclasses
- Abstract classes cannot be instantiated

**Further reading:**
- [MATLAB Documentation - Abstract Methods](https://www.mathworks.com/help/matlab/matlab_oop/abstract-classes-and-interfaces.html)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Abstract Methods via Protocol @required
@protocol Shape <NSObject>
@required
- (CGFloat)area;       // Must be implemented
- (CGFloat)perimeter;  // Must be implemented
@end

@interface Circle : NSObject <Shape>
@property CGFloat radius;
@end

@implementation Circle
- (CGFloat)area {
    return M_PI * self.radius * self.radius;
}

- (CGFloat)perimeter {
    return 2 * M_PI * self.radius;
}
@end
```

**Special features:**
- No `abstract` keyword like in Java/C#
- `@required` protocol methods enforce implementation
- Alternative: base class method throws NSException on missing override
- `@optional` methods are not mandatory

**Further reading:**
- [Apple Documentation - Protocols](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/WorkingwithProtocols/WorkingwithProtocols.html)

</TabItem>
</FilteredTabs>


