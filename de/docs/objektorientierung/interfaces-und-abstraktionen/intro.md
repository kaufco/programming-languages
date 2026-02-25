---
slug: /objektorientierung/interfaces-und-abstraktionen
title: 8.5. Interfaces und Abstraktionen
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import FilteredTabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 8.5. Interfaces und Abstraktionen

Interfaces und abstrakte Konzepte.

## 8.5.1. Interfaces / Protocols

Verträge, die Klassen implementieren müssen, um bestimmte Methoden bereitzustellen.

### Sprachen {#sprachen}

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

**Besonderheiten:**
- Tagged Interfaces für abstrakte Typen
- `is interface` für Interface-Definition
- `is abstract` für abstrakte Methoden

**Weiterführende Links:**
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

**Besonderheiten:**
- `interface`-Keyword für Interface-Definition
- Klassen können mehrere Interfaces implementieren
- Default Interface Methods (seit C# 8.0)

**Weiterführende Links:**
- [Microsoft C# Documentation - Interfaces](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/interface)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Interfaces: abstract classes oder concepts (C++20)
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

**Besonderheiten:**
- Abstract Classes mit rein virtuellen Funktionen (`= 0`)
- Concepts (seit C++20) für compile-time Interface-Prüfung
- Multiple Inheritance möglich

**Weiterführende Links:**
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

**Besonderheiten:**
- Module als Interfaces (duck typing)
- `abstract def` für abstrakte Methoden
- Compile-time Prüfung der Implementierung

**Weiterführende Links:**
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

**Besonderheiten:**
- `interface`-Keyword für Interface-Definition
- Klassen können mehrere Interfaces implementieren
- Interfaces können keine Implementierungen enthalten

**Weiterführende Links:**
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

**Besonderheiten:**
- Jede Klasse definiert implizit ein Interface
- `implements`-Keyword für Interface-Implementierung
- Mehrere Interfaces implementierbar

**Weiterführende Links:**
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

**Besonderheiten:**
- `interface`-Keyword für Interface-Definition
- `interface ... with` für Interface-Implementierung
- Explizite Upcast mit `:>` erforderlich

**Weiterführende Links:**
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

**Besonderheiten:**
- Structural Typing: Interfaces werden implizit implementiert
- Kein explizites `implements`-Keyword
- Interfaces können nachträglich definiert werden

**Weiterführende Links:**
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

**Besonderheiten:**
- `interface`-Keyword für Interface-Definition
- `implements`-Keyword für Interface-Implementierung
- Mehrere Interfaces implementierbar

**Weiterführende Links:**
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

**Besonderheiten:**
- `interface`-Keyword für Interface-Definition
- `implements`-Keyword für Interface-Implementierung
- Mehrere Interfaces implementierbar

**Weiterführende Links:**
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

**Besonderheiten:**
- `interface`-Keyword für Interface-Definition
- `implements`-Keyword für Interface-Implementierung
- Default Methods (seit Java 8)
- Static Methods (seit Java 8)

**Weiterführende Links:**
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

**Besonderheiten:**
- `interface`-Keyword für Interface-Definition
- Default Method Implementations möglich
- Mehrere Interfaces implementierbar

**Weiterführende Links:**
- [Kotlin Documentation - Interfaces](https://kotlinlang.org/docs/interfaces.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Type Classes als Interfaces
class Drawable (α : Type) where
  draw : α → String

structure Circle where
  radius : Float

instance : Drawable Circle where
  draw c := s!"Drawing circle with radius {c.radius}"

-- Verwendung mit Type Class Constraint
def render [Drawable α] (shape : α) : String :=
  draw shape

let shape : Circle := { radius := 5.0 }
render shape  -- "Drawing circle with radius 5.0"
```

**Besonderheiten:**
- `class` definiert Type Classes (Interfaces)
- `instance` implementiert eine Type Class für einen Typ
- Type Class Constraints mit `[ClassName α]` in Funktionssignaturen
- Mehrere Type Classes können gleichzeitig implementiert werden
- Default-Implementierungen möglich

**Weiterführende Links:**
- [Functional Programming in Lean - Type Classes](https://lean-lang.org/functional_programming_in_lean/type-classes.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Type Classes als Interface-Äquivalent
:- typeclass drawable(T) where [
    func draw(T) = string
].

:- type circle ---> circle(radius :: float).

:- instance drawable(circle) where [
    (draw(circle(Radius)) =
        "Drawing circle with radius " ++ float_to_string(Radius))
].

% Verwendung mit Type Class Constraint
:- func render(T) = string <= drawable(T).
render(Shape) = draw(Shape).
```

**Besonderheiten:**
- `typeclass` definiert Type Classes (Interface-Äquivalent)
- `instance` implementiert eine Type Class für einen konkreten Typ
- Type Class Constraints mit `<= classname(T)` in Funktionssignaturen
- Compile-Time-Auflösung (kein Runtime-Dispatch)

**Weiterführende Links:**
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

**Besonderheiten:**
- Concepts für Interface-ähnliche Typen
- Duck Typing zur Compile-Zeit
- Structural Typing

**Weiterführende Links:**
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

**Besonderheiten:**
- `interface`-Keyword für Interface-Definition
- Klassen müssen `TInterfacedObject` erben
- Reference Counting für Interfaces

**Weiterführende Links:**
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

**Besonderheiten:**
- `interface`-Keyword für Interface-Definition
- `implements`-Keyword für Interface-Implementierung
- Mehrere Interfaces implementierbar

**Weiterführende Links:**
- [PHP Documentation - Interfaces](https://www.php.net/manual/en/language.oop5.interfaces.php)

</TabItem>
<TabItem value="python" label="Python">

```python
# Interfaces: Protocol (seit Python 3.8) oder ABC
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

**Besonderheiten:**
- `Protocol` (seit Python 3.8) für strukturelles Subtyping
- `ABC` (Abstract Base Classes) für nominales Subtyping
- Duck Typing zur Laufzeit

**Weiterführende Links:**
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

**Besonderheiten:**
- `trait`-Keyword für Interface-Definition
- `impl Trait for Type` für Trait-Implementierung
- Default Method Implementations möglich

**Weiterführende Links:**
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

**Besonderheiten:**
- `trait`-Keyword für Interface-Definition
- Traits können Implementierungen enthalten
- Mehrere Traits implementierbar

**Weiterführende Links:**
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

**Besonderheiten:**
- `protocol`-Keyword für Interface-Definition
- Default Method Implementations möglich (Extensions)
- Mehrere Protocols implementierbar

**Weiterführende Links:**
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

**Besonderheiten:**
- `interface`-Keyword für Interface-Definition
- Structural Typing zur Compile-Zeit
- Mehrere Interfaces implementierbar

**Weiterführende Links:**
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

**Besonderheiten:**
- `Interface`-Keyword für Interface-Definition
- `Implements`-Keyword für Interface-Implementierung
- `Implements InterfaceName.MethodName` für explizite Implementierung

**Weiterführende Links:**
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

**Besonderheiten:**
- Keine native Interface-Unterstützung
- Structs mit Funktionszeigern als Interface-Ersatz
- Manuelles Interface-Pattern

**Weiterführende Links:**
- [Zig Documentation - Structs](https://ziglang.org/documentation/0.11.0/#structs)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Interface Definition
interface Printable a where
    display : a -> String

-- Implementierung
data Shape = Circle Double | Rectangle Double Double

Printable Shape where
    display (Circle r) = "Kreis mit Radius " ++ show r
    display (Rectangle w h) = "Rechteck " ++ show w ++ "x" ++ show h

-- Verwendung mit Constraint
printItem : Printable a => a -> IO ()
printItem item = putStrLn (display item)
```

**Besonderheiten:**
- Interfaces sind das Äquivalent zu Type Classes in Haskell
- Unterstützen Default-Implementierungen
- Interface-Constraints mit `=>` Syntax

**Weiterführende Links:**
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
    NSLog(@"Zeichne Kreis mit Radius %f", self.radius);
}

- (CGFloat)area {
    return M_PI * self.radius * self.radius;
}
@end
```

**Besonderheiten:**
- `@protocol` definiert Interfaces (Protocols)
- `@required` und `@optional` Methoden
- Klassen können mehrere Protocols implementieren
- Protocols können von anderen Protocols erben

**Weiterführende Links:**
- [Apple Documentation - Protocols](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/WorkingwithProtocols/WorkingwithProtocols.html)

</TabItem>
<TabItem value="v" label="V">

```v
// Interfaces (implizit erfüllt)
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

**Besonderheiten:**
- Structural Typing: kein `implements` nötig
- Jeder Typ mit den richtigen Methoden erfüllt ein Interface
- Interfaces können auch Felder definieren

**Weiterführende Links:**
- [V Documentation - Interfaces](https://github.com/vlang/v/blob/master/doc/docs.md#interfaces)

</TabItem>
</FilteredTabs>


## 8.5.2. Abstract Methods

Methoden, die in einer Basisklasse oder einem Interface deklariert, aber nicht implementiert werden.

### Sprachen {#sprachen}

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

**Besonderheiten:**
- `is abstract` für abstrakte Methoden
- Abstrakte Typen mit `abstract tagged`
- Muss in abgeleiteten Typen überschrieben werden

**Weiterführende Links:**
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

**Besonderheiten:**
- `abstract`-Keyword für abstrakte Methoden
- Abstrakte Methoden nur in abstrakten Klassen
- Muss in abgeleiteten Klassen überschrieben werden

**Weiterführende Links:**
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

**Besonderheiten:**
- Pure Virtual Functions (`= 0`) für abstrakte Methoden
- Abstrakte Methoden nur in abstrakten Klassen
- Muss in abgeleiteten Klassen überschrieben werden

**Weiterführende Links:**
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

**Besonderheiten:**
- `abstract def` für abstrakte Methoden
- Abstrakte Methoden nur in abstrakten Klassen
- Muss in abgeleiteten Klassen überschrieben werden

**Weiterführende Links:**
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

**Besonderheiten:**
- `abstract`-Keyword für abstrakte Methoden
- Abstrakte Methoden nur in abstrakten Klassen
- Muss in abgeleiteten Klassen überschrieben werden

**Weiterführende Links:**
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

**Besonderheiten:**
- `abstract`-Keyword für abstrakte Methoden
- Abstrakte Methoden nur in abstrakten Klassen
- Muss in abgeleiteten Klassen überschrieben werden

**Weiterführende Links:**
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

**Besonderheiten:**
- `deferred`-Keyword für abstrakte Methoden
- Abstrakte Methoden nur in `deferred` Klassen
- Muss in abgeleiteten Klassen implementiert werden

**Weiterführende Links:**
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

**Besonderheiten:**
- `abstract member` für abstrakte Methoden
- `[<AbstractClass>]`-Attribut für abstrakte Klassen
- Muss in abgeleiteten Klassen überschrieben werden

**Weiterführende Links:**
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

**Besonderheiten:**
- `abstract`-Keyword für abstrakte Methoden
- Abstrakte Methoden nur in abstrakten Klassen
- Muss in abgeleiteten Klassen überschrieben werden

**Weiterführende Links:**
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

**Besonderheiten:**
- `abstract`-Keyword für abstrakte Methoden
- Abstrakte Methoden nur in abstrakten Klassen
- Muss in abgeleiteten Klassen überschrieben werden

**Weiterführende Links:**
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

**Besonderheiten:**
- `abstract`-Keyword für abstrakte Methoden
- Abstrakte Methoden nur in abstrakten Klassen
- Muss in abgeleiteten Klassen überschrieben werden

**Weiterführende Links:**
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

**Besonderheiten:**
- `abstract`-Keyword für abstrakte Methoden
- Abstrakte Methoden nur in abstrakten Klassen
- Muss in abgeleiteten Klassen überschrieben werden

**Weiterführende Links:**
- [Kotlin Documentation - Abstract Classes](https://kotlinlang.org/docs/inheritance.html#abstract-classes)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Type Class-Methoden sind implizit abstrakt
class Shape (α : Type) where
  area : α → Float
  draw : α → String

structure Circle where
  radius : Float

-- Implementierung aller abstrakten Methoden erforderlich
instance : Shape Circle where
  area c := 3.14159 * c.radius * c.radius
  draw c := s!"Drawing circle with radius {c.radius}"

-- Nicht implementierte Type Classes führen zu Compile-Fehlern
-- structure Square where
--   side : Float
-- instance : Shape Square where
--   area s := s.side * s.side
--   -- Fehler: draw fehlt
```

**Besonderheiten:**
- Type Class-Methoden sind abstrakt bis eine `instance` sie implementiert
- Alle Methoden müssen in der Instanz implementiert werden (oder Default haben)
- Fehlende Implementierungen werden zur Compile-Zeit erkannt

**Weiterführende Links:**
- [Functional Programming in Lean - Type Classes](https://lean-lang.org/functional_programming_in_lean/type-classes.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Type Class-Methoden sind abstrakt bis zur Instanziierung
:- typeclass shape(T) where [
    func area(T) = float,
    func draw(T) = string
].

:- type circle ---> circle(radius :: float).

% Implementierung aller abstrakten Methoden erforderlich
:- instance shape(circle) where [
    (area(circle(R)) = math.pi * R * R),
    (draw(circle(R)) = "Drawing circle with radius " ++ float_to_string(R))
].

% Fehlende Implementierungen führen zu Compile-Fehler
```

**Besonderheiten:**
- Type Class-Methoden sind abstrakt bis eine `instance` sie implementiert
- Alle Methoden müssen in der Instanz implementiert werden
- Keine Default-Implementierungen in Mercury Type Classes
- Fehlende Implementierungen werden zur Compile-Zeit erkannt

**Weiterführende Links:**
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

**Besonderheiten:**
- `{.base.}`-Pragma für abstrakte Methoden
- Abstrakte Methoden werfen Exception wenn nicht überschrieben
- Muss in abgeleiteten Typen überschrieben werden

**Weiterführende Links:**
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

**Besonderheiten:**
- `virtual; abstract;` für abstrakte Methoden
- Abstrakte Methoden nur in abstrakten Klassen
- Muss in abgeleiteten Klassen überschrieben werden

**Weiterführende Links:**
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

**Besonderheiten:**
- `abstract`-Keyword für abstrakte Methoden
- Abstrakte Methoden nur in abstrakten Klassen
- Muss in abgeleiteten Klassen überschrieben werden

**Weiterführende Links:**
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

**Besonderheiten:**
- `@abstractmethod`-Decorator für abstrakte Methoden
- `ABC` (Abstract Base Class) als Basisklasse
- Muss in abgeleiteten Klassen überschrieben werden

**Weiterführende Links:**
- [Python Documentation - Abstract Base Classes](https://docs.python.org/3/library/abc.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Abstract Methods: ohne Implementierung
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

**Besonderheiten:**
- Abstrakte Methoden ohne Implementierung
- Abstrakte Methoden nur in abstrakten Klassen
- Muss in abgeleiteten Klassen überschrieben werden

**Weiterführende Links:**
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

**Besonderheiten:**
- Protocol Requirements als abstrakte Methoden
- Abstrakte Methoden in Protocols
- Muss in implementierenden Klassen überschrieben werden

**Weiterführende Links:**
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

**Besonderheiten:**
- `abstract`-Keyword für abstrakte Methoden (seit TypeScript 4.2)
- Abstrakte Methoden nur in abstrakten Klassen
- Muss in abgeleiteten Klassen überschrieben werden

**Weiterführende Links:**
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

**Besonderheiten:**
- `MustOverride`-Keyword für abstrakte Methoden
- Abstrakte Methoden nur in `MustInherit` Klassen
- Muss in abgeleiteten Klassen überschrieben werden

**Weiterführende Links:**
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
            fprintf('Kreis mit Radius %g\n', obj.radius);
        end
    end
end
```

**Besonderheiten:**
- `methods (Abstract)` definiert abstrakte Methoden
- Alle abstrakten Methoden müssen in konkreten Subklassen implementiert werden
- Abstrakte Klassen können nicht instanziiert werden

**Weiterführende Links:**
- [MATLAB Documentation - Abstract Methods](https://www.mathworks.com/help/matlab/matlab_oop/abstract-classes-and-interfaces.html)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Abstract Methods über Protocol @required
@protocol Shape <NSObject>
@required
- (CGFloat)area;       // Muss implementiert werden
- (CGFloat)perimeter;  // Muss implementiert werden
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

**Besonderheiten:**
- Kein `abstract` Keyword wie in Java/C#
- `@required` Protocol-Methoden erzwingen Implementierung
- Alternative: Basisklasse-Methode wirft NSException bei fehlendem Override
- `@optional` Methoden sind nicht verpflichtend

**Weiterführende Links:**
- [Apple Documentation - Protocols](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/WorkingwithProtocols/WorkingwithProtocols.html)

</TabItem>
</FilteredTabs>


