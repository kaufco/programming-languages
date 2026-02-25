---
slug: /objektorientierung/vererbung
title: 8.3. Inheritance
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 8.3. Inheritance

Inheritance hierarchies and polymorphism.

## 8.3.1. Single Inheritance

A class can only inherit from a single base class.

### Languages {#sprachen}

<Tabs availableTabs={['ada', 'carbon', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'eiffel', 'fortran', 'groovy', 'haxe', 'java', 'javascript', 'kotlin', 'matlab', 'mojo', 'nim', 'object-pascal', 'objective-c', 'php', 'python', 'ruby', 'scala', 'swift', 'typescript', 'v', 'vbnet']} yellowTabs={['lean4']}>
<TabItem value="ada" label="Ada">

```ada
-- Single Inheritance: Tagged Types
type Animal is tagged record
    Name : String(1..20);
    Age : Integer;
end record;

type Dog is new Animal with record
    Breed : String(1..30);
end record;

animal : Animal := (Name => "Generic", Age => 5);
dog : Dog := (Name => "Buddy", Age => 3, Breed => "Golden Retriever");
```

**Special features:**
- Tagged Types enable inheritance
- Only one base class allowed
- Type-safe inheritance hierarchies

**Further reading:**
- [Ada Reference Manual - Tagged Types](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-3-9.html)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Single Inheritance: planned
// class Dog : Animal {
//     // ...
// };
```

**Special features:**
- Single Inheritance is planned
- Experimental language, syntax may still change

**Further reading:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Single Inheritance
class Animal {
public:
    std::string name;
    int age;
};

class Dog : public Animal {
public:
    std::string breed;
};

Animal animal;
animal.name = "Generic";
animal.age = 5;

Dog dog;
dog.name = "Buddy";
dog.age = 3;
dog.breed = "Golden Retriever";
```

**Special features:**
- Standard inheritance with `: public BaseClass`
- Private and protected inheritance possible
- Virtual inheritance for Diamond Problem with Multiple Inheritance

**Further reading:**
- [C++ Reference - Inheritance](https://en.cppreference.com/w/cpp/language/derived_class)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Single Inheritance
class Animal
  property name : String
  property age : Int32

  def initialize(@name, @age)
  end
end

class Dog < Animal
  property breed : String

  def initialize(name, age, @breed)
    super(name, age)
  end
end

animal = Animal.new("Generic", 5)
dog = Dog.new("Buddy", 3, "Golden Retriever")
```

**Special features:**
- Inheritance with `<` operator
- `super` for base class constructor
- Only one base class allowed

**Further reading:**
- [Crystal Language - Classes and Inheritance](https://crystal-lang.org/reference/1.11/syntax_and_semantics/inheritance.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Single Inheritance
class Animal
{
    public string Name { get; set; }
    public int Age { get; set; }
}

class Dog : Animal
{
    public string Breed { get; set; }
}

var animal = new Animal { Name = "Generic", Age = 5 };
var dog = new Dog { Name = "Buddy", Age = 3, Breed = "Golden Retriever" };
```

**Special features:**
- Only one base class allowed
- `sealed` classes cannot be inherited
- `abstract` classes can serve as base classes

**Further reading:**
- [C# Documentation - Inheritance](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/object-oriented/inheritance)

</TabItem>
<TabItem value="d" label="D">

```d
// Single Inheritance
class Animal
{
    string name;
    int age;
}

class Dog : Animal
{
    string breed;
}

auto animal = new Animal();
animal.name = "Generic";
animal.age = 5;

auto dog = new Dog();
dog.name = "Buddy";
dog.age = 3;
dog.breed = "Golden Retriever";
```

**Special features:**
- Only one base class allowed
- Interfaces can be implemented additionally
- `final` classes cannot be inherited

**Further reading:**
- [D Language - Classes](https://dlang.org/spec/class.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Single Inheritance
class Animal {
  String name;
  int age;
  
  Animal(this.name, this.age);
}

class Dog extends Animal {
  String breed;
  
  Dog(String name, int age, this.breed) : super(name, age);
}

var animal = Animal("Generic", 5);
var dog = Dog("Buddy", 3, "Golden Retriever");
```

**Special features:**
- `extends` for inheritance
- Only one base class allowed
- Mixins can be used additionally

**Further reading:**
- [Dart Language - Inheritance](https://dart.dev/language/classes#inheritance)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
-- Single Inheritance
class ANIMAL
feature
    name: STRING
    age: INTEGER
end

class DOG
inherit
    ANIMAL
feature
    breed: STRING
end

animal: ANIMAL
    create animal.make("Generic", 5) end

dog: DOG
    create dog.make("Buddy", 3, "Golden Retriever") end
```

**Special features:**
- `inherit` keyword for inheritance
- Only one base class allowed
- Design by Contract supported

**Further reading:**
- [Eiffel Language - Inheritance](https://www.eiffel.org/doc/eiffel/Language%20Specification)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Single Inheritance
class Animal {
    String name
    int age
}

class Dog extends Animal {
    String breed
}

def animal = new Animal(name: "Generic", age: 5)
def dog = new Dog(name: "Buddy", age: 3, breed: "Golden Retriever")
```

**Special features:**
- `extends` for inheritance
- Only one base class allowed
- Traits can be used additionally

**Further reading:**
- [Groovy Language - Object Orientation](https://groovy-lang.org/objectorientation.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Single Inheritance
class Animal {
    public var name: String;
    public var age: Int;
    
    public function new(name: String, age: Int) {
        this.name = name;
        this.age = age;
    }
}

class Dog extends Animal {
    public var breed: String;
    
    public function new(name: String, age: Int, breed: String) {
        super(name, age);
        this.breed = breed;
    }
}

var animal = new Animal("Generic", 5);
var dog = new Dog("Buddy", 3, "Golden Retriever");
```

**Special features:**
- `extends` for inheritance
- Only one base class allowed
- Interfaces can be implemented additionally

**Further reading:**
- [Haxe Manual - Class Inheritance](https://haxe.org/manual/types-class-inheritance.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Single Inheritance
class Animal {
    String name;
    int age;
}

class Dog extends Animal {
    String breed;
}

Animal animal = new Animal();
animal.name = "Generic";
animal.age = 5;

Dog dog = new Dog();
dog.name = "Buddy";
dog.age = 3;
dog.breed = "Golden Retriever";
```

**Special features:**
- `extends` for inheritance
- Only one base class allowed
- Interfaces can be implemented additionally
- `final` classes cannot be inherited

**Further reading:**
- [Java Documentation - Inheritance](https://docs.oracle.com/javase/tutorial/java/IandI/subclasses.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Single Inheritance: ES6 Classes
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Dog extends Animal {
    constructor(name, age, breed) {
        super(name, age);
        this.breed = breed;
    }
}

const animal = new Animal("Generic", 5);
const dog = new Dog("Buddy", 3, "Golden Retriever");
```

**Special features:**
- ES6 Classes support Single Inheritance
- `extends` for inheritance
- `super()` for base class constructor
- Only one base class allowed

**Further reading:**
- [MDN Web Docs - Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Single Inheritance
open class Animal(val name: String, val age: Int)

class Dog(name: String, age: Int, val breed: String) : Animal(name, age)

val animal = Animal("Generic", 5)
val dog = Dog("Buddy", 3, "Golden Retriever")
```

**Special features:**
- `open` classes can be inherited
- `:` for inheritance
- Only one base class allowed
- Interfaces can be implemented additionally

**Further reading:**
- [Kotlin Documentation - Inheritance](https://kotlinlang.org/docs/inheritance.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Structure Extension (similar to Single Inheritance)
structure Animal where
  name : String
  age : Nat

structure Dog extends Animal where
  breed : String

let animal : Animal := { name := "Generic", age := 5 }
let dog : Dog := { name := "Buddy", age := 3, breed := "Golden Retriever" }
-- dog.toAnimal  -- automatically generated conversion
```

**Special features:**
- `extends` allows field inheritance from another structure
- Automatic conversion function `toBaseType` is generated
- No method inheritance — only fields are inherited
- Structures are value types (no polymorphism via subtyping)

**Further reading:**
- [Functional Programming in Lean - Structures](https://lean-lang.org/functional_programming_in_lean/getting-to-know/structures.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# Single Inheritance
struct Animal:
    var name: String
    var age: Int
    
    fn __init__(inout self, name: String, age: Int):
        self.name = name
        self.age = age

struct Dog(Animal):
    var breed: String
    
    fn __init__(inout self, name: String, age: Int, breed: String):
        self.name = name
        self.age = age
        self.breed = breed

var animal = Animal("Generic", 5)
var dog = Dog("Buddy", 3, "Golden Retriever")
```

**Special features:**
- Struct-based inheritance
- Only one base class allowed
- Experimental language, syntax may change

**Further reading:**
- [Mojo Language Documentation](https://docs.modular.com/mojo/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Single Inheritance
type Animal = ref object of RootObj
    name: string
    age: int

type Dog = ref object of Animal
    breed: string

var animal = Animal(name: "Generic", age: 5)
var dog = Dog(name: "Buddy", age: 3, breed: "Golden Retriever")
```

**Special features:**
- `of` for inheritance
- Only one base class allowed
- `RootObj` as base for all objects

**Further reading:**
- [Nim Manual - Object-Oriented Programming](https://nim-lang.org/docs/manual.html#object-oriented-programming)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objectivec
// Single Inheritance
@interface Animal : NSObject
@property NSString *name;
@property int age;
@end

@implementation Animal
@end

@interface Dog : Animal
@property NSString *breed;
@end

@implementation Dog
@end

Animal *animal = [[Animal alloc] init];
animal.name = @"Generic";
animal.age = 5;

Dog *dog = [[Dog alloc] init];
dog.name = @"Buddy";
dog.age = 3;
dog.breed = @"Golden Retriever";
```

**Special features:**
- `:` for inheritance in interface declaration
- Only one base class allowed
- Protocols can be implemented additionally

**Further reading:**
- [Apple Developer - Inheritance](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Inheritance.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Single Inheritance
type
  Animal = class
  public
    name: string;
    age: Integer;
  end;

  Dog = class(Animal)
  public
    breed: string;
  end;

var
  animal: Animal;
  dog: Dog;
begin
  animal := Animal.Create;
  animal.name := 'Generic';
  animal.age := 5;
  
  dog := Dog.Create;
  dog.name := 'Buddy';
  dog.age := 3;
  dog.breed := 'Golden Retriever';
end.
```

**Special features:**
- `class(BaseClass)` for inheritance
- Only one base class allowed
- Interfaces can be implemented additionally

**Further reading:**
- [Delphi Documentation - Inheritance](https://docwiki.embarcadero.com/RADStudio/en/Inheritance)

</TabItem>
<TabItem value="php" label="PHP">

```php
// Single Inheritance
class Animal {
    public $name;
    public $age;
}

class Dog extends Animal {
    public $breed;
}

$animal = new Animal();
$animal->name = "Generic";
$animal->age = 5;

$dog = new Dog();
$dog->name = "Buddy";
$dog->age = 3;
$dog->breed = "Golden Retriever";
```

**Special features:**
- `extends` for inheritance
- Only one base class allowed
- Traits can be used additionally

**Further reading:**
- [PHP Manual - Classes and Objects](https://www.php.net/manual/en/language.oop5.inheritance.php)

</TabItem>
<TabItem value="python" label="Python">

```python
# Single Inheritance
class Animal:
    def __init__(self, name, age):
        self.name = name
        self.age = age

class Dog(Animal):
    def __init__(self, name, age, breed):
        super().__init__(name, age)
        self.breed = breed

animal = Animal("Generic", 5)
dog = Dog("Buddy", 3, "Golden Retriever")
```

**Special features:**
- `(BaseClass)` for inheritance
- Only one base class allowed
- `super()` for base class access
- Multiple Inheritance with multiple base classes possible (see Multiple Inheritance)

**Further reading:**
- [Python Documentation - Inheritance](https://docs.python.org/3/tutorial/classes.html#inheritance)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Single Inheritance
class Animal
  attr_accessor :name, :age
  
  def initialize(name, age)
    @name = name
    @age = age
  end
end

class Dog < Animal
  attr_accessor :breed
  
  def initialize(name, age, breed)
    super(name, age)
    @breed = breed
  end
end

animal = Animal.new("Generic", 5)
dog = Dog.new("Buddy", 3, "Golden Retriever")
```

**Special features:**
- `<` for inheritance
- Only one base class allowed
- `super` for base class methods
- Modules can be included additionally

**Further reading:**
- [Ruby Documentation - Classes and Objects](https://ruby-doc.org/core-3.1.0/doc/syntax/classes_rdoc.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Single Inheritance
class Animal(val name: String, val age: Int)

class Dog(name: String, age: Int, val breed: String) extends Animal(name, age)

val animal = new Animal("Generic", 5)
val dog = new Dog("Buddy", 3, "Golden Retriever")
```

**Special features:**
- `extends` for inheritance
- Only one base class allowed
- Traits can be used additionally

**Further reading:**
- [Scala Documentation - Classes](https://docs.scala-lang.org/tour/classes.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Single Inheritance
class Animal {
    var name: String
    var age: Int
    
    init(name: String, age: Int) {
        self.name = name
        self.age = age
    }
}

class Dog : Animal {
    var breed: String
    
    init(name: String, age: Int, breed: String) {
        self.breed = breed
        super.init(name: name, age: age)
    }
}

let animal = Animal(name: "Generic", age: 5)
let dog = Dog(name: "Buddy", age: 3, breed: "Golden Retriever")
```

**Special features:**
- `:` for inheritance
- Only one base class allowed
- Protocols can be implemented additionally
- `final` classes cannot be inherited

**Further reading:**
- [Swift Documentation - Inheritance](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/inheritance/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Single Inheritance
class Animal {
    name: string;
    age: number;
    
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Dog extends Animal {
    breed: string;
    
    constructor(name: string, age: number, breed: string) {
        super(name, age);
        this.breed = breed;
    }
}

const animal = new Animal("Generic", 5);
const dog = new Dog("Buddy", 3, "Golden Retriever");
```

**Special features:**
- `extends` for inheritance
- Only one base class allowed
- Interfaces can be implemented additionally
- Identical to JavaScript ES6 Classes

**Further reading:**
- [TypeScript Handbook - Classes](https://www.typescriptlang.org/docs/handbook/2/classes.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Single Inheritance
Class Animal
    Public Property Name As String
    Public Property Age As Integer
End Class

Class Dog
    Inherits Animal
    Public Property Breed As String
End Class

Dim animal As New Animal With {.Name = "Generic", .Age = 5}
Dim dog As New Dog With {.Name = "Buddy", .Age = 3, .Breed = "Golden Retriever"}
```

**Special features:**
- `Inherits` keyword for inheritance
- Only one base class allowed
- Interfaces can be implemented additionally

**Further reading:**
- [VB.NET Documentation - Inheritance](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/objects-and-classes/inheritance-basics)

</TabItem>
<TabItem value="v" label="V">

```v
// Single Inheritance
struct Animal {
    name string
    age int
}

struct Dog {
    Animal
    breed string
}

animal := Animal{
    name: "Generic"
    age: 5
}

dog := Dog{
    Animal: Animal{
        name: "Buddy"
        age: 3
    }
    breed: "Golden Retriever"
}
```

**Special features:**
- Struct embedding for inheritance
- Only one base class allowed
- Interfaces can be implemented additionally

**Further reading:**
- [V Language Documentation](https://github.com/vlang/v/blob/master/doc/docs.md)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Single Inheritance with EXTENDS (since Fortran 2003)
type :: Animal
    character(len=20) :: name
    integer :: age
end type Animal

type, extends(Animal) :: Dog
    character(len=30) :: breed
end type Dog

type(Dog) :: dog
dog%name = "Buddy"
dog%age = 3
dog%breed = "Golden Retriever"
```

**Special features:**
- `EXTENDS(base_type)` for Type Extension (since Fortran 2003)
- Only Single Inheritance (no Multiple Inheritance)
- Access to inherited components via percent notation

**Further reading:**
- [Fortran Wiki - Type Extension](https://fortranwiki.org/fortran/show/Type+extension)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
classdef Animal
    properties
        name
    end
    
    methods
        function obj = Animal(name)
            obj.name = name;
        end
        
        function speak(obj)
            fprintf('%s makes a sound\n', obj.name);
        end
    end
end

classdef Dog < Animal
    properties
        breed
    end
    
    methods
        function obj = Dog(name, breed)
            obj@Animal(name);
            obj.breed = breed;
        end
        
        function speak(obj)
            fprintf('%s barks\n', obj.name);
        end
    end
end
```

**Special features:**
- Inheritance with `<` syntax: `classdef SubClass < SuperClass`
- Superclass constructor is called with `obj@SuperClass(args)`
- Methods can be overridden

**Further reading:**
- [MATLAB Documentation - Subclass Syntax](https://www.mathworks.com/help/matlab/matlab_oop/creating-subclasses--syntax-and-techniques.html)

</TabItem>
</Tabs>


## 8.3.2. Multiple Inheritance

A class can inherit from multiple base classes simultaneously.

### Languages {#sprachen}

<Tabs availableTabs={['common-lisp', 'cpp', 'eiffel', 'matlab', 'perl', 'python']} orangeTabs={['clojure']}>
<TabItem value="clojure" label="Clojure">

```clojure
;; Multiple Inheritance: Protocols und Multimethods
(defprotocol Flyable
  (fly [this]))

(defprotocol Swimmable
  (swim [this]))

(defrecord Duck [name]
  Flyable
  (fly [this] (str (:name this) " flies"))
  Swimmable
  (swim [this] (str (:name this) " swims")))

(def duck (->Duck "Donald"))
(fly duck)  ; "Donald flies"
(swim duck) ; "Donald swims"
```

**Special features:**
- Protocols enable Multiple Inheritance-like behavior
- Multimethods for flexible dispatch mechanisms
- No traditional class inheritance

**Further reading:**
- [Clojure Documentation - Protocols](https://clojure.org/reference/protocols)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Multiple Inheritance: CLOS
(defclass animal ()
  ((name :initarg :name :accessor name)
   (age :initarg :age :accessor age)))

(defclass flyable ()
  ())

(defclass swimmable ()
  ())

(defclass duck (animal flyable swimmable)
  ())

(defvar duck (make-instance 'duck :name "Donald" :age 5))
```

**Special features:**
- CLOS (Common Lisp Object System) supports Multiple Inheritance
- Method Resolution Order (MRO) determines method resolution
- Diamond Problem is solved by MRO

**Further reading:**
- [Common Lisp HyperSpec - Classes](http://www.lispworks.com/documentation/HyperSpec/Body/07_.htm)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Multiple Inheritance
class Flyable {
public:
    void fly() { /* ... */ }
};

class Swimmable {
public:
    void swim() { /* ... */ }
};

class Duck : public Flyable, public Swimmable {
public:
    std::string name;
};

Duck duck;
duck.fly();
duck.swim();
```

**Special features:**
- Multiple base classes separated by comma
- Virtual inheritance for Diamond Problem
- Method resolution via explicit qualification possible

**Further reading:**
- [C++ Reference - Multiple Inheritance](https://en.cppreference.com/w/cpp/language/derived_class)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
-- Multiple Inheritance
class FLYABLE
feature
    fly is
        do
            -- ...
        end
end

class SWIMMABLE
feature
    swim is
        do
            -- ...
        end
end

class DUCK
inherit
    FLYABLE
    SWIMMABLE
feature
    name: STRING
end

duck: DUCK
    create duck.make("Donald") end
```

**Special features:**
- `inherit` with multiple base classes
- Renaming and redefinition for conflicts
- Design by Contract supported

**Further reading:**
- [Eiffel Language - Multiple Inheritance](https://www.eiffel.org/doc/eiffel/Language%20Specification)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Multiple Inheritance: with use base or use parent
package Flyable;
sub fly { print "Flies\n"; }

package Swimmable;
sub swim { print "Swims\n"; }

package Duck;
use parent qw(Flyable Swimmable);

sub new {
    my $class = shift;
    my $self = { name => shift };
    bless $self, $class;
    return $self;
}

my $duck = Duck->new("Donald");
$duck->fly();
$duck->swim();
```

**Special features:**
- `use parent` or `use base` for Multiple Inheritance
- Method Resolution Order (MRO) with C3 algorithm
- Diamond Problem is solved by MRO

**Further reading:**
- [Perl Documentation - Object-Oriented Programming](https://perldoc.perl.org/perlobj)

</TabItem>
<TabItem value="python" label="Python">

```python
# Multiple Inheritance
class Flyable:
    def fly(self):
        pass

class Swimmable:
    def swim(self):
        pass

class Duck(Flyable, Swimmable):
    def __init__(self, name):
        self.name = name

duck = Duck("Donald")
duck.fly()
duck.swim()
```

**Special features:**
- Multiple base classes in parentheses
- Method Resolution Order (MRO) with C3 algorithm
- Diamond Problem is solved by MRO
- `super()` works with MRO

**Further reading:**
- [Python Documentation - Multiple Inheritance](https://docs.python.org/3/tutorial/classes.html#multiple-inheritance)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
classdef Printable
    methods
        function printInfo(obj)
            fprintf('Info: %s\n', class(obj));
        end
    end
end

classdef Serializable
    methods
        function data = serialize(obj)
            data = struct(obj);
        end
    end
end

classdef Document < Printable & Serializable
    properties
        title
    end
end
```

**Special features:**
- Multiple Inheritance with `&` syntax: `classdef MyClass < ClassA & ClassB`
- In case of method conflicts, the subclass must override the method
- Rarely used in practice

**Further reading:**
- [MATLAB Documentation - Multiple Inheritance](https://www.mathworks.com/help/matlab/matlab_oop/subclassing-multiple-classes.html)

</TabItem>
</Tabs>


## 8.3.3. Interface Inheritance

A class can implement multiple interfaces to fulfill contracts.

### Languages {#sprachen}

<Tabs availableTabs={['csharp', 'd', 'dart', 'go', 'groovy', 'haxe', 'java', 'kotlin', 'nim', 'object-pascal', 'objective-c', 'php', 'scala', 'swift', 'typescript', 'vbnet']} yellowTabs={['lean4', 'mercury']}>
<TabItem value="csharp" label="C#">

```csharp
// Interface Inheritance
interface IFlyable
{
    void Fly();
}

interface ISwimmable
{
    void Swim();
}

class Duck : IFlyable, ISwimmable
{
    public string Name { get; set; }
    
    public void Fly() { /* ... */ }
    public void Swim() { /* ... */ }
}

var duck = new Duck { Name = "Donald" };
duck.Fly();
duck.Swim();
```

**Special features:**
- Multiple interfaces separated by comma
- Explicit interface implementation possible
- Default Interface Methods since C# 8.0

**Further reading:**
- [C# Documentation - Interfaces](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/types/interfaces)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Interface Inheritance: Implicit through classes
abstract class Flyable {
  void fly();
}

abstract class Swimmable {
  void swim();
}

class Duck implements Flyable, Swimmable {
  String name;
  
  Duck(this.name);
  
  @override
  void fly() { /* ... */ }
  
  @override
  void swim() { /* ... */ }
}

var duck = Duck("Donald");
duck.fly();
duck.swim();
```

**Special features:**
- `implements` for interface implementation
- Multiple interfaces separated by comma
- All methods must be implemented

**Further reading:**
- [Dart Language - Interfaces](https://dart.dev/language/classes#implicit-interfaces)

</TabItem>
<TabItem value="go" label="Go">

```go
// Interface Inheritance: Implicit through methods
type Flyable interface {
    Fly()
}

type Swimmable interface {
    Swim()
}

type Duck struct {
    Name string
}

func (d Duck) Fly() { /* ... */ }
func (d Duck) Swim() { /* ... */ }

duck := Duck{Name: "Donald"}
duck.Fly()
duck.Swim()
```

**Special features:**
- Interfaces are implemented implicitly
- Duck typing: If a type has all methods of an interface, it implements it
- Multiple interfaces can be combined

**Further reading:**
- [Go Documentation - Interfaces](https://go.dev/tour/methods/9)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Interface Inheritance
interface Flyable {
    void fly()
}

interface Swimmable {
    void swim()
}

class Duck implements Flyable, Swimmable {
    String name
    
    @Override
    void fly() { /* ... */ }
    
    @Override
    void swim() { /* ... */ }
}

def duck = new Duck(name: "Donald")
duck.fly()
duck.swim()
```

**Special features:**
- `implements` for interface implementation
- Multiple interfaces separated by comma
- All methods must be implemented

**Further reading:**
- [Groovy Language - Interfaces](https://groovy-lang.org/objectorientation.html#_interfaces)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Interface Inheritance
interface IFlyable {
    function fly(): Void;
}

interface ISwimmable {
    function swim(): Void;
}

class Duck implements IFlyable implements ISwimmable {
    public var name: String;
    
    public function new(name: String) {
        this.name = name;
    }
    
    public function fly(): Void { /* ... */ }
    public function swim(): Void { /* ... */ }
}

var duck = new Duck("Donald");
duck.fly();
duck.swim();
```

**Special features:**
- Multiple `implements` clauses
- All methods must be implemented
- Interfaces can define properties

**Further reading:**
- [Haxe Manual - Interfaces](https://haxe.org/manual/types-interfaces.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Interface Inheritance
interface Flyable {
    void fly();
}

interface Swimmable {
    void swim();
}

class Duck implements Flyable, Swimmable {
    String name;
    
    @Override
    public void fly() { /* ... */ }
    
    @Override
    public void swim() { /* ... */ }
}

Duck duck = new Duck();
duck.name = "Donald";
duck.fly();
duck.swim();
```

**Special features:**
- `implements` for interface implementation
- Multiple interfaces separated by comma
- Default Methods since Java 8
- Static Methods since Java 8

**Further reading:**
- [Java Documentation - Interfaces](https://docs.oracle.com/javase/tutorial/java/IandI/createinterface.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Interface Inheritance
interface Flyable {
    fun fly()
}

interface Swimmable {
    fun swim()
}

class Duck : Flyable, Swimmable {
    var name: String = ""
    
    override fun fly() { /* ... */ }
    override fun swim() { /* ... */ }
}

val duck = Duck().apply { name = "Donald" }
duck.fly()
duck.swim()
```

**Special features:**
- `:` for interface implementation
- Multiple interfaces separated by comma
- Default implementations in interfaces possible

**Further reading:**
- [Kotlin Documentation - Interfaces](https://kotlinlang.org/docs/interfaces.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Type Class Inheritance (similar to Interface Inheritance)
class Flyable (α : Type) where
  fly : α → String

class Swimmable (α : Type) where
  swim : α → String

structure Duck where
  name : String

instance : Flyable Duck where
  fly d := s!"{d.name} flies"

instance : Swimmable Duck where
  swim d := s!"{d.name} swims"

-- Multiple Type Classes can be instantiated simultaneously
let duck : Duck := { name := "Donald" }
fly duck     -- "Donald flies"
swim duck    -- "Donald swims"
```

**Special features:**
- Type Classes function as interfaces
- A type can implement arbitrarily many Type Classes (via `instance`)
- Type Classes can inherit from each other (e.g., `class Ord (α : Type) extends BEq α`)
- Compile-time resolution via Type Class Resolution

**Further reading:**
- [Functional Programming in Lean - Type Classes](https://lean-lang.org/functional_programming_in_lean/type-classes.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Type Class Constraints (similar to Interface Inheritance)
:- typeclass flyable(T) where [
    func fly(T) = string
].

:- typeclass swimmable(T) where [
    func swim(T) = string
].

:- type duck ---> duck(name :: string).

:- instance flyable(duck) where [
    (fly(duck(Name)) = Name ++ " flies")
].

:- instance swimmable(duck) where [
    (swim(duck(Name)) = Name ++ " swims")
].

% Multiple Type Classes can be instantiated simultaneously
```

**Special features:**
- Type Classes function as interfaces
- A type can implement arbitrarily many Type Classes (via `instance`)
- Type Classes can have superclass constraints (e.g., `:- typeclass ord(T) <= comparable(T)`)
- Compile-time resolution via Type Class Resolution

**Further reading:**
- [Mercury Language Reference - Type Classes](https://mercurylang.org/information/doc-release/mercury_ref/Type-classes.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Interface Inheritance: through methods
type Flyable = concept
  fly(x: Self)

type Swimmable = concept
  swim(x: Self)

type Duck = ref object
  name: string

proc fly(d: Duck) = discard
proc swim(d: Duck) = discard

var duck = Duck(name: "Donald")
duck.fly()
duck.swim()
```

**Special features:**
- Concepts as interface-like constructs
- Duck typing through concepts
- Multiple concepts can be combined

**Further reading:**
- [Nim Manual - Concepts](https://nim-lang.org/docs/manual.html#generics-concepts)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objectivec
// Interface Inheritance: Protocols
@protocol Flyable
- (void)fly;
@end

@protocol Swimmable
- (void)swim;
@end

@interface Duck : NSObject <Flyable, Swimmable>
@property NSString *name;
@end

@implementation Duck
- (void)fly { /* ... */ }
- (void)swim { /* ... */ }
@end

Duck *duck = [[Duck alloc] init];
duck.name = @"Donald";
[duck fly];
[duck swim];
```

**Special features:**
- Protocols as interfaces
- Multiple protocols in `<>` brackets
- Optional methods in protocols possible

**Further reading:**
- [Apple Developer - Protocols](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/WorkingwithProtocols/WorkingwithProtocols.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Interface Inheritance
type
  IFlyable = interface
    procedure Fly;
  end;

  ISwimmable = interface
    procedure Swim;
  end;

  TDuck = class(TInterfacedObject, IFlyable, ISwimmable)
  public
    Name: string;
    procedure Fly;
    procedure Swim;
  end;

var
  duck: TDuck;
begin
  duck := TDuck.Create;
  duck.Name := 'Donald';
  duck.Fly;
  duck.Swim;
end.
```

**Special features:**
- Interfaces with `interface` keyword
- Multiple interfaces separated by comma
- `TInterfacedObject` as base for interface implementation

**Further reading:**
- [Delphi Documentation - Interfaces](https://docwiki.embarcadero.com/RADStudio/en/Interfaces)

</TabItem>
<TabItem value="php" label="PHP">

```php
// Interface Inheritance
interface Flyable {
    public function fly();
}

interface Swimmable {
    public function swim();
}

class Duck implements Flyable, Swimmable {
    public $name;
    
    public function fly() { /* ... */ }
    public function swim() { /* ... */ }
}

$duck = new Duck();
$duck->name = "Donald";
$duck->fly();
$duck->swim();
```

**Special features:**
- `implements` for interface implementation
- Multiple interfaces separated by comma
- All methods must be implemented

**Further reading:**
- [PHP Manual - Object Interfaces](https://www.php.net/manual/en/language.oop5.interfaces.php)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Interface Inheritance: Traits
trait Flyable {
  def fly(): Unit
}

trait Swimmable {
  def swim(): Unit
}

class Duck extends Flyable with Swimmable {
  var name: String = ""
  
  def fly(): Unit = { /* ... */ }
  def swim(): Unit = { /* ... */ }
}

val duck = new Duck
duck.name = "Donald"
duck.fly()
duck.swim()
```

**Special features:**
- Traits as interfaces
- `extends` for first trait, `with` for additional ones
- Traits can have default implementations

**Further reading:**
- [Scala Documentation - Traits](https://docs.scala-lang.org/tour/traits.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Interface Inheritance: Protocols
protocol Flyable {
    func fly()
}

protocol Swimmable {
    func swim()
}

class Duck : Flyable, Swimmable {
    var name: String = ""
    
    func fly() { /* ... */ }
    func swim() { /* ... */ }
}

let duck = Duck()
duck.name = "Donald"
duck.fly()
duck.swim()
```

**Special features:**
- Protocols as interfaces
- Multiple protocols separated by comma
- Default implementations in protocol extensions possible

**Further reading:**
- [Swift Documentation - Protocols](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/protocols/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Interface Inheritance
interface Flyable {
    fly(): void;
}

interface Swimmable {
    swim(): void;
}

class Duck implements Flyable, Swimmable {
    name: string = "";
    
    fly(): void { /* ... */ }
    swim(): void { /* ... */ }
}

const duck = new Duck();
duck.name = "Donald";
duck.fly();
duck.swim();
```

**Special features:**
- `implements` for interface implementation
- Multiple interfaces separated by comma
- Interfaces can define properties
- Identical to Java/C# syntax

**Further reading:**
- [TypeScript Handbook - Interfaces](https://www.typescriptlang.org/docs/handbook/2/objects.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Interface Inheritance
Interface IFlyable
    Sub Fly()
End Interface

Interface ISwimmable
    Sub Swim()
End Interface

Class Duck
    Implements IFlyable, ISwimmable
    Public Property Name As String
    
    Public Sub Fly() Implements IFlyable.Fly
        ' ...
    End Sub
    
    Public Sub Swim() Implements ISwimmable.Swim
        ' ...
    End Sub
End Class

Dim duck As New Duck With {.Name = "Donald"}
duck.Fly()
duck.Swim()
```

**Special features:**
- `Implements` keyword for interface implementation
- Multiple interfaces separated by comma
- Explicit interface implementation with `Implements InterfaceName.MethodName`

**Further reading:**
- [VB.NET Documentation - Interfaces](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/interfaces/)

</TabItem>
<TabItem value="d" label="D">

```d
// Interface Inheritance
interface Drawable {
    void draw();
}

interface Resizable {
    void resize(double factor);
}

// Class implements multiple interfaces
class Shape : Drawable, Resizable {
    override void draw() {
        writeln("Drawing shape");
    }

    override void resize(double factor) {
        writeln("Resizing by ", factor);
    }
}

// Interface inheritance
interface Widget : Drawable, Resizable {
    void click();
}
```

**Special features:**
- Classes can implement multiple interfaces
- Interfaces can inherit from other interfaces
- Interfaces can have default implementations (since D 2.0)
- No direct multiple inheritance of classes

**Further reading:**
- [D Language Specification - Interfaces](https://dlang.org/spec/interface.html)

</TabItem>
</Tabs>


## 8.3.4. Abstract Classes

Classes that cannot be directly instantiated and serve as base classes for derived classes.

### Languages {#sprachen}

<Tabs availableTabs={['ada', 'cpp', 'csharp', 'd', 'dart', 'eiffel', 'groovy', 'haxe', 'java', 'kotlin', 'matlab', 'nim', 'object-pascal', 'php', 'python', 'ruby', 'scala', 'typescript', 'vbnet']} orangeTabs={['objective-c', 'swift']}>
<TabItem value="ada" label="Ada">

```ada
-- Abstract Classes: Abstract Tagged Types
package Abstract_Animal is
    type Animal is abstract tagged record
        Name : String(1..20);
        Age : Integer;
    end record;
    
    procedure Make_Sound (A : Animal) is abstract;
end Abstract_Animal;

package Concrete_Dog is
    type Dog is new Animal with record
        Breed : String(1..30);
    end record;
    
    overriding procedure Make_Sound (D : Dog);
end Concrete_Dog;
```

**Special features:**
- Abstract Tagged Types with `abstract` keyword
- Abstract procedures must be overridden
- Cannot be directly instantiated

**Further reading:**
- [Ada Reference Manual - Abstract Types](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-3-9-3.html)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Abstract Classes: through pure virtual functions
class Animal {
public:
    std::string name;
    int age;
    
    virtual void makeSound() = 0;  // Pure virtual
    virtual ~Animal() = default;
};

class Dog : public Animal {
public:
    std::string breed;
    
    void makeSound() override {
        // ...
    }
};

// Animal animal;  // Error: cannot be instantiated
Dog dog;  // OK
```

**Special features:**
- Pure virtual functions (`= 0`) make class abstract
- Cannot be directly instantiated
- Virtual destructor recommended

**Further reading:**
- [C++ Reference - Abstract Classes](https://en.cppreference.com/w/cpp/language/abstract_class)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Abstract Classes
abstract class Animal
{
    public string Name { get; set; }
    public int Age { get; set; }
    
    public abstract void MakeSound();
    
    public virtual void Sleep()
    {
        // Default implementation
    }
}

class Dog : Animal
{
    public string Breed { get; set; }
    
    public override void MakeSound()
    {
        // ...
    }
}

// Animal animal = new Animal();  // Error: cannot be instantiated
var dog = new Dog();  // OK
```

**Special features:**
- `abstract` keyword for class and methods
- Cannot be directly instantiated
- Can mix concrete and abstract methods

**Further reading:**
- [C# Documentation - Abstract Classes](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/abstract)

</TabItem>
<TabItem value="d" label="D">

```d
// Abstract Classes
abstract class Animal
{
    string name;
    int age;
    
    abstract void makeSound();
    
    void sleep()
    {
        // Default implementation
    }
}

class Dog : Animal
{
    string breed;
    
    override void makeSound()
    {
        // ...
    }
}

// Animal animal = new Animal();  // Error: cannot be instantiated
auto dog = new Dog();  // OK
```

**Special features:**
- `abstract` keyword for class and methods
- Cannot be directly instantiated
- Can mix concrete and abstract methods

**Further reading:**
- [D Language - Abstract Classes](https://dlang.org/spec/class.html#abstract)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Abstract Classes
abstract class Animal {
  String name;
  int age;
  
  Animal(this.name, this.age);
  
  void makeSound();  // Abstract method
  
  void sleep() {
    // Default implementation
  }
}

class Dog extends Animal {
  String breed;
  
  Dog(String name, int age, this.breed) : super(name, age);
  
  @override
  void makeSound() {
    // ...
  }
}

// Animal animal = Animal("Generic", 5);  // Error: cannot be instantiated
var dog = Dog("Buddy", 3, "Golden Retriever");  // OK
```

**Special features:**
- `abstract` keyword for class
- Abstract methods without body
- Cannot be directly instantiated

**Further reading:**
- [Dart Language - Abstract Classes](https://dart.dev/language/classes#abstract-classes)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
-- Abstract Classes: Deferred Classes
deferred class ANIMAL
feature
    name: STRING
    age: INTEGER
    
    make_sound is
        deferred
        end
    
    sleep is
        do
            -- Default implementation
        end
end

class DOG
inherit
    ANIMAL
feature
    breed: STRING
    
    make_sound is
        do
            -- Implementation
        end
end
```

**Special features:**
- `deferred` keyword for abstract classes
- `deferred` for abstract methods
- Cannot be directly instantiated

**Further reading:**
- [Eiffel Language - Deferred Classes](https://www.eiffel.org/doc/eiffel/Language%20Specification)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Abstract Classes
abstract class Animal {
    String name
    int age
    
    abstract void makeSound()
    
    void sleep() {
        // Default implementation
    }
}

class Dog extends Animal {
    String breed
    
    @Override
    void makeSound() {
        // ...
    }
}

// Animal animal = new Animal()  // Error: cannot be instantiated
def dog = new Dog(name: "Buddy", age: 3, breed: "Golden Retriever")  // OK
```

**Special features:**
- `abstract` keyword for class and methods
- Cannot be directly instantiated
- Can mix concrete and abstract methods

**Further reading:**
- [Groovy Language - Abstract Classes](https://groovy-lang.org/objectorientation.html#_abstract_classes)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Abstract Classes
abstract class Animal {
    public var name: String;
    public var age: Int;
    
    public function new(name: String, age: Int) {
        this.name = name;
        this.age = age;
    }
    
    public abstract function makeSound(): Void;
    
    public function sleep(): Void {
        // Default implementation
    }
}

class Dog extends Animal {
    public var breed: String;
    
    public function new(name: String, age: Int, breed: String) {
        super(name, age);
        this.breed = breed;
    }
    
    override public function makeSound(): Void {
        // ...
    }
}

// var animal = new Animal("Generic", 5);  // Error: cannot be instantiated
var dog = new Dog("Buddy", 3, "Golden Retriever");  // OK
```

**Special features:**
- `abstract` keyword for class and methods
- Cannot be directly instantiated
- Can mix concrete and abstract methods

**Further reading:**
- [Haxe Manual - Abstract Classes](https://haxe.org/manual/types-abstract-class.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Abstract Classes
abstract class Animal {
    String name;
    int age;
    
    abstract void makeSound();
    
    void sleep() {
        // Default implementation
    }
}

class Dog extends Animal {
    String breed;
    
    @Override
    void makeSound() {
        // ...
    }
}

// Animal animal = new Animal();  // Error: cannot be instantiated
Dog dog = new Dog();  // OK
```

**Special features:**
- `abstract` keyword for class and methods
- Cannot be directly instantiated
- Can mix concrete and abstract methods

**Further reading:**
- [Java Documentation - Abstract Classes](https://docs.oracle.com/javase/tutorial/java/IandI/abstract.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Abstract Classes
abstract class Animal(val name: String, val age: Int) {
    abstract fun makeSound()
    
    fun sleep() {
        // Default implementation
    }
}

class Dog(name: String, age: Int, val breed: String) : Animal(name, age) {
    override fun makeSound() {
        // ...
    }
}

// val animal = Animal("Generic", 5)  // Error: cannot be instantiated
val dog = Dog("Buddy", 3, "Golden Retriever")  // OK
```

**Special features:**
- `abstract` keyword for class and methods
- Cannot be directly instantiated
- Can mix concrete and abstract methods

**Further reading:**
- [Kotlin Documentation - Abstract Classes](https://kotlinlang.org/docs/inheritance.html#abstract-classes)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Abstract Classes: through methods without implementation
type Animal = ref object of RootObj
    name: string
    age: int

method makeSound(a: Animal) {.base.} =
    raise newException(ValueError, "Abstract method")

type Dog = ref object of Animal
    breed: string

method makeSound(d: Dog) =
    echo "Woof!"

var dog = Dog(name: "Buddy", age: 3, breed: "Golden Retriever")
dog.makeSound()
```

**Special features:**
- Abstract through methods without implementation
- `{.base.}` pragma for base methods
- Runtime error when abstract method is called

**Further reading:**
- [Nim Manual - Methods](https://nim-lang.org/docs/manual.html#methods)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objectivec
// Abstract Classes: through unimplemented methods
@interface Animal : NSObject
@property NSString *name;
@property int age;
- (void)makeSound;  // Must be implemented in subclasses
- (void)sleep;  // Default implementation
@end

@implementation Animal
- (void)sleep {
    // Default implementation
}
@end

@interface Dog : Animal
@property NSString *breed;
@end

@implementation Dog
- (void)makeSound {
    // Implementation
}
@end
```

**Special features:**
- No explicit `abstract` keyword
- Abstract through unimplemented methods
- Convention: Abstract classes document that they should not be instantiated

**Further reading:**
- [Apple Developer - Abstract Classes](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Inheritance.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Abstract Classes
type
  Animal = class
  public
    name: string;
    age: Integer;
    procedure MakeSound; virtual; abstract;
    procedure Sleep; virtual;
  end;

  AnimalSleep = class(Animal)
  public
    procedure Sleep; override;
  end;

  Dog = class(Animal)
  public
    breed: string;
    procedure MakeSound; override;
  end;

implementation

procedure Animal.Sleep;
begin
  // Default implementation
end;

procedure Dog.MakeSound;
begin
  // Implementation
end;
```

**Special features:**
- `virtual; abstract` for abstract methods
- Cannot be directly instantiated
- Can mix concrete and abstract methods

**Further reading:**
- [Delphi Documentation - Abstract Methods](https://docwiki.embarcadero.com/RADStudio/en/Methods#Abstract_Methods)

</TabItem>
<TabItem value="php" label="PHP">

```php
// Abstract Classes
abstract class Animal {
    public $name;
    public $age;
    
    abstract public function makeSound();
    
    public function sleep() {
        // Default implementation
    }
}

class Dog extends Animal {
    public $breed;
    
    public function makeSound() {
        // ...
    }
}

// $animal = new Animal();  // Error: cannot be instantiated
$dog = new Dog();  // OK
```

**Special features:**
- `abstract` keyword for class and methods
- Cannot be directly instantiated
- Can mix concrete and abstract methods

**Further reading:**
- [PHP Manual - Abstract Classes](https://www.php.net/manual/en/language.oop5.abstract.php)

</TabItem>
<TabItem value="python" label="Python">

```python
# Abstract Classes: with abc module
from abc import ABC, abstractmethod

class Animal(ABC):
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    @abstractmethod
    def make_sound(self):
        pass
    
    def sleep(self):
        # Default implementation
        pass

class Dog(Animal):
    def __init__(self, name, age, breed):
        super().__init__(name, age)
        self.breed = breed
    
    def make_sound(self):
        # ...
        pass

# animal = Animal("Generic", 5)  # Error: cannot be instantiated
dog = Dog("Buddy", 3, "Golden Retriever")  # OK
```

**Special features:**
- `ABC` (Abstract Base Class) from `abc` module
- `@abstractmethod` decorator for abstract methods
- Cannot be directly instantiated

**Further reading:**
- [Python Documentation - Abstract Base Classes](https://docs.python.org/3/library/abc.html)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Abstract Classes: by convention
class Animal
  attr_accessor :name, :age
  
  def initialize(name, age)
    @name = name
    @age = age
  end
  
  def make_sound
    raise NotImplementedError, "Subclass must implement make_sound"
  end
  
  def sleep
    # Default implementation
  end
end

class Dog < Animal
  attr_accessor :breed
  
  def initialize(name, age, breed)
    super(name, age)
    @breed = breed
  end
  
  def make_sound
    # ...
  end
end

# animal = Animal.new("Generic", 5)  # Technically possible, but not recommended
dog = Dog.new("Buddy", 3, "Golden Retriever")  # OK
```

**Special features:**
- No explicit `abstract` keyword
- Abstract through `raise NotImplementedError` in methods
- Convention: Abstract classes document that they should not be instantiated

**Further reading:**
- [Ruby Documentation - Classes](https://ruby-doc.org/core-3.1.0/doc/syntax/classes_rdoc.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Abstract Classes
abstract class Animal(val name: String, val age: Int) {
  def makeSound(): Unit  // Abstract method
  
  def sleep(): Unit = {
    // Default implementation
  }
}

class Dog(name: String, age: Int, val breed: String) extends Animal(name, age) {
  override def makeSound(): Unit = {
    // ...
  }
}

// val animal = new Animal("Generic", 5)  // Error: cannot be instantiated
val dog = new Dog("Buddy", 3, "Golden Retriever")  // OK
```

**Special features:**
- `abstract` keyword for class
- Abstract methods without body
- Cannot be directly instantiated

**Further reading:**
- [Scala Documentation - Abstract Classes](https://docs.scala-lang.org/tour/abstract-type-members.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Abstract Classes: through Protocol Extensions (no real Abstract Classes)
protocol Animal {
    var name: String { get set }
    var age: Int { get set }
    func makeSound()
    func sleep()
}

extension Animal {
    func sleep() {
        // Default implementation
    }
}

class Dog : Animal {
    var name: String
    var age: Int
    var breed: String
    
    init(name: String, age: Int, breed: String) {
        self.name = name
        self.age = age
        self.breed = breed
    }
    
    func makeSound() {
        // ...
    }
}

let dog = Dog(name: "Buddy", age: 3, breed: "Golden Retriever")
dog.makeSound()
dog.sleep()
```

**Special features:**
- No real Abstract Classes
- Protocol Extensions enable default implementations
- Protocols can be used as Abstract Classes

**Further reading:**
- [Swift Documentation - Protocols](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/protocols/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Abstract Classes
abstract class Animal {
    name: string;
    age: number;
    
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    
    abstract makeSound(): void;
    
    sleep(): void {
        // Default implementation
    }
}

class Dog extends Animal {
    breed: string;
    
    constructor(name: string, age: number, breed: string) {
        super(name, age);
        this.breed = breed;
    }
    
    makeSound(): void {
        // ...
    }
}

// const animal = new Animal("Generic", 5);  // Error: cannot be instantiated
const dog = new Dog("Buddy", 3, "Golden Retriever");  // OK
```

**Special features:**
- `abstract` keyword for class and methods
- Cannot be directly instantiated
- Can mix concrete and abstract methods

**Further reading:**
- [TypeScript Handbook - Abstract Classes](https://www.typescriptlang.org/docs/handbook/2/classes.html#abstract-classes-and-members)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Abstract Classes
MustInherit Class Animal
    Public Property Name As String
    Public Property Age As Integer
    
    MustOverride Sub MakeSound()
    
    Public Overridable Sub Sleep()
        ' Default implementation
    End Sub
End Class

Class Dog
    Inherits Animal
    Public Property Breed As String
    
    Public Overrides Sub MakeSound()
        ' ...
    End Sub
End Class

' Dim animal As New Animal()  ' Error: cannot be instantiated
Dim dog As New Dog With {.Name = "Buddy", .Age = 3, .Breed = "Golden Retriever"}  ' OK
```

**Special features:**
- `MustInherit` for abstract classes
- `MustOverride` for abstract methods
- Cannot be directly instantiated

**Further reading:**
- [VB.NET Documentation - Abstract Classes](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/objects-and-classes/inheritance-basics)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
classdef (Abstract) Shape
    properties (Abstract)
        area
    end
    
    methods (Abstract)
        draw(obj)
    end
end

classdef Circle < Shape
    properties
        radius
        area
    end
    
    methods
        function obj = Circle(r)
            obj.radius = r;
            obj.area = pi * r^2;
        end
        
        function draw(obj)
            fprintf('Drawing circle with radius %g\n', obj.radius);
        end
    end
end
```

**Special features:**
- `classdef (Abstract)` marks a class as abstract
- `methods (Abstract)` and `properties (Abstract)` for abstract members
- Abstract classes cannot be directly instantiated

**Further reading:**
- [MATLAB Documentation - Abstract Classes](https://www.mathworks.com/help/matlab/matlab_oop/abstract-classes-and-interfaces.html)

</TabItem>
</Tabs>


## 8.3.5. Sealed Classes

Classes that cannot be inherited and define a closed inheritance hierarchy.

### Languages {#sprachen}

<Tabs availableTabs={['csharp', 'd', 'dart', 'groovy', 'java', 'kotlin', 'matlab', 'object-pascal', 'scala', 'swift']}>
<TabItem value="csharp" label="C#">

```csharp
// Sealed Classes
sealed class Animal
{
    public string Name { get; set; }
    public int Age { get; set; }
}

// class Dog : Animal { }  // Error: sealed class cannot be inherited

var animal = new Animal { Name = "Generic", Age = 5 };
```

**Special features:**
- `sealed` keyword prevents inheritance
- Cannot be used as base class
- Sealed methods can be overridden in non-sealed classes

**Further reading:**
- [C# Documentation - Sealed Classes](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/sealed)

</TabItem>
<TabItem value="d" label="D">

```d
// Sealed Classes
final class Animal
{
    string name;
    int age;
}

// class Dog : Animal { }  // Error: final class cannot be inherited

auto animal = new Animal();
animal.name = "Generic";
animal.age = 5;
```

**Special features:**
- `final` keyword prevents inheritance
- Cannot be used as base class
- Final methods can be overridden in non-final classes

**Further reading:**
- [D Language - Final Classes](https://dlang.org/spec/class.html#final)

</TabItem>
<TabItem value="java" label="Java">

```java
// Sealed Classes (since Java 17)
sealed class Animal permits Dog, Cat {
    String name;
    int age;
}

final class Dog extends Animal {
    String breed;
}

final class Cat extends Animal {
    String color;
}

// class Bird extends Animal { }  // Error: not in permits list

Animal animal = new Dog();
animal.name = "Buddy";
```

**Special features:**
- `sealed` keyword with `permits` clause (since Java 17)
- Only explicitly permitted classes can inherit
- Permitted classes must be `final`, `sealed`, or `non-sealed`

**Further reading:**
- [Java Documentation - Sealed Classes](https://docs.oracle.com/javase/specs/jls/se17/html/jls-8.html#jls-8.1.1.2)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Sealed Classes
sealed class Animal(val name: String, val age: Int)

class Dog(name: String, age: Int, val breed: String) : Animal(name, age)
class Cat(name: String, age: Int, val color: String) : Animal(name, age)

// class Bird : Animal("Bird", 1)  // Error: must be in the same module

val animal: Animal = Dog("Buddy", 3, "Golden Retriever")
```

**Special features:**
- `sealed` keyword for closed hierarchies
- All subclasses must be defined in the same module
- Useful for exhaustive when-expressions

**Further reading:**
- [Kotlin Documentation - Sealed Classes](https://kotlinlang.org/docs/sealed-classes.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Sealed Classes
sealed abstract class Animal(val name: String, val age: Int)

case class Dog(name: String, age: Int, breed: String) extends Animal(name, age)
case class Cat(name: String, age: Int, color: String) extends Animal(name, age)

// class Bird extends Animal("Bird", 1)  // Error: must be in the same module

val animal: Animal = Dog("Buddy", 3, "Golden Retriever")
```

**Special features:**
- `sealed` keyword for closed hierarchies
- All subclasses must be defined in the same module
- Useful for exhaustive pattern matching

**Further reading:**
- [Scala Documentation - Sealed Classes](https://docs.scala-lang.org/tour/pattern-matching.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Sealed Classes: final
final class Animal {
    var name: String
    var age: Int
    
    init(name: String, age: Int) {
        self.name = name
        self.age = age
    }
}

// class Dog : Animal { }  // Error: final class cannot be inherited

let animal = Animal(name: "Generic", age: 5)
```

**Special features:**
- `final` keyword prevents inheritance
- Cannot be used as base class
- Final methods can be overridden in non-final classes

**Further reading:**
- [Swift Documentation - Final Classes](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/inheritance/)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Sealed Classes (since Dart 3.0)
sealed class Shape {}

class Circle extends Shape {
  final double radius;
  Circle(this.radius);
}

class Rectangle extends Shape {
  final double width, height;
  Rectangle(this.width, this.height);
}

class Triangle extends Shape {
  final double base, height;
  Triangle(this.base, this.height);
}

// Exhaustive Pattern Matching
double area(Shape shape) => switch (shape) {
  Circle(:var radius) => 3.14159 * radius * radius,
  Rectangle(:var width, :var height) => width * height,
  Triangle(:var base, :var height) => 0.5 * base * height,
};
```

**Special features:**
- `sealed` modifier prevents direct instantiation and external inheritance
- Subtypes must be defined in the same library
- Enables exhaustiveness checking in switch expressions
- Since Dart 3.0

**Further reading:**
- [Dart Documentation - Class Modifiers](https://dart.dev/language/class-modifiers#sealed)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Sealed Classes (since Groovy 4.0)
sealed class Shape permits Circle, Rectangle {}

final class Circle extends Shape {
    double radius
    Circle(double radius) { this.radius = radius }
}

final class Rectangle extends Shape {
    double width, height
    Rectangle(double w, double h) { this.width = w; this.height = h }
}

// class Triangle extends Shape {} // Error: not in permits list
```

**Special features:**
- `sealed` keyword since Groovy 4.0
- `permits` defines permitted subclasses
- Subclasses must be `final`, `sealed`, or `non-sealed`

**Further reading:**
- [Groovy Documentation - Sealed Classes](https://groovy-lang.org/objectorientation.html#_sealed_classes)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
classdef (Sealed) FinalClass
    properties
        value
    end
    
    methods
        function obj = FinalClass(val)
            obj.value = val;
        end
    end
end

% classdef SubClass < FinalClass  % Error: FinalClass is Sealed
% end
```

**Special features:**
- `classdef (Sealed)` prevents inheritance
- Attempting to inherit from a Sealed class causes an error

**Further reading:**
- [MATLAB Documentation - Sealed Classes](https://www.mathworks.com/help/matlab/matlab_oop/sealed-classes.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Sealed Classes (since Delphi 2005)
type
  TFinalClass = class sealed
  public
    Value: Integer;
    procedure Show;
  end;

  // TChild = class(TFinalClass)  // Error: Cannot inherit from sealed class
  // end;

procedure TFinalClass.Show;
begin
  WriteLn('Value: ', Value);
end;
```

**Special features:**
- `sealed` keyword prevents inheritance
- `final` keyword prevents overriding individual methods
- Since Delphi 2005

**Further reading:**
- [Delphi Documentation - Sealed Classes](https://docwiki.embarcadero.com/RADStudio/en/Class_and_Record_Helpers_(Delphi))

</TabItem>
</Tabs>



---

### Sealed Classes (from Interfaces)


Classes that cannot be further derived.


<Tabs availableTabs={['cpp', 'csharp', 'dart', 'groovy', 'kotlin', 'scala', 'swift']}>
<TabItem value="csharp" label="C#">

```csharp
// Sealed Classes: sealed keyword
sealed class Circle {
    public double Radius { get; set; }
    
    public double Area() {
        return Math.PI * Radius * Radius;
    }
}

// Compiler error: Cannot derive from sealed type 'Circle'
// class ColoredCircle : Circle { }
```

**Special features:**
- `sealed` keyword prevents inheritance
- Cannot be derived
- `sealed override` prevents further overriding

**Further reading:**
- [Microsoft C# Documentation - Sealed](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/sealed)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Sealed Classes: final keyword
class Circle final {
public:
    double radius;
    
    double area() {
        return 3.14159 * radius * radius;
    }
};

// Compiler error: cannot derive from 'final' base
// class ColoredCircle : public Circle { };
```

**Special features:**
- `final` keyword prevents inheritance
- Cannot be derived
- `final` can also be used for methods

**Further reading:**
- [cppreference - final specifier](https://en.cppreference.com/w/cpp/language/final)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Sealed Classes: base/sealed/final (since Dart 3.0)
sealed class Shape {
  double area();
}

class Circle extends Shape {
  final double radius;
  
  Circle(this.radius);
  
  @override
  double area() => 3.14159 * radius * radius;
}

// Compiler error: Cannot extend sealed class 'Shape'
// class Rectangle extends Shape { }
```

**Special features:**
- `sealed` keyword (since Dart 3.0) for sealed classes
- Enables exhaustive pattern matching
- Only certain subclasses allowed

**Further reading:**
- [Dart Documentation - Sealed Classes](https://dart.dev/language/class-modifiers#sealed)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Sealed Classes: sealed keyword
sealed class Shape {
    abstract fun area(): Double
}

class Circle(val radius: Double) : Shape() {
    override fun area(): Double {
        return Math.PI * radius * radius
    }
}

// Compiler error: Sealed types cannot be instantiated
// val shape = Shape()
```

**Special features:**
- `sealed` keyword for sealed classes
- Enables exhaustive when-expressions
- Only certain subclasses allowed
- Cannot be directly instantiated

**Further reading:**
- [Kotlin Documentation - Sealed Classes](https://kotlinlang.org/docs/sealed-classes.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Sealed Classes: sealed keyword
sealed abstract class Shape {
  def area(): Double
}

case class Circle(radius: Double) extends Shape {
  override def area(): Double = {
    Math.PI * radius * radius
  }
}

// Compiler error: illegal inheritance from sealed class
// case class Rectangle(width: Double, height: Double) extends Shape
```

**Special features:**
- `sealed` keyword for sealed classes
- Enables exhaustive pattern matching
- Only certain subclasses allowed
- Often combined with `case class`

**Further reading:**
- [Scala Documentation - Sealed Classes](https://docs.scala-lang.org/tour/pattern-matching.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Sealed Classes: final keyword
final class Circle {
    let radius: Double
    
    init(radius: Double) {
        self.radius = radius
    }
    
    func area() -> Double {
        return Double.pi * radius * radius
    }
}

// Compiler error: Inheritance from a final class is not allowed
// class ColoredCircle: Circle { }
```

**Special features:**
- `final` keyword prevents inheritance
- Cannot be derived
- `final` can also be used for methods

**Further reading:**
- [Swift Documentation - Final](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/inheritance/#Preventing-Overrides)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Sealed Interfaces (since Groovy 4.0)
sealed interface Shape permits Circle, Rectangle {}

final class Circle implements Shape {
    double radius
}

final class Rectangle implements Shape {
    double width, height
}
```

**Special features:**
- `sealed` keyword since Groovy 4.0
- Also usable for interfaces
- Subclasses must be `final`, `sealed`, or `non-sealed`

**Further reading:**
- [Groovy Documentation - Sealed Classes](https://groovy-lang.org/objectorientation.html#_sealed_classes)

</TabItem>
</Tabs>

## 8.3.6. Mixins / Traits

Reusable code units that can be included in classes to extend functionality.

### Languages {#sprachen}

<Tabs availableTabs={['d', 'dart', 'groovy', 'php', 'python', 'ruby', 'scala']}>
<TabItem value="dart" label="Dart">

```dart
// Mixins
mixin Flyable {
  void fly() {
    print("Flying");
  }
}

mixin Swimmable {
  void swim() {
    print("Swimming");
  }
}

class Duck with Flyable, Swimmable {
  String name;
  
  Duck(this.name);
}

var duck = Duck("Donald");
duck.fly();
duck.swim();
```

**Special features:**
- `mixin` keyword for mixins
- `with` for mixin inclusion
- Multiple mixins separated by comma
- Linear method resolution order

**Further reading:**
- [Dart Language - Mixins](https://dart.dev/language/mixins)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Traits
trait Flyable {
    void fly() {
        println "Flying"
    }
}

trait Swimmable {
    void swim() {
        println "Swimming"
    }
}

class Duck implements Flyable, Swimmable {
    String name
}

def duck = new Duck(name: "Donald")
duck.fly()
duck.swim()
```

**Special features:**
- `trait` keyword for traits
- `implements` for trait inclusion
- Multiple traits separated by comma
- Traits can have default implementations

**Further reading:**
- [Groovy Language - Traits](https://groovy-lang.org/objectorientation.html#_traits)

</TabItem>
<TabItem value="php" label="PHP">

```php
// Traits
trait Flyable {
    public function fly() {
        echo "Flying\n";
    }
}

trait Swimmable {
    public function swim() {
        echo "Swimming\n";
    }
}

class Duck {
    use Flyable, Swimmable;
    
    public $name;
}

$duck = new Duck();
$duck->name = "Donald";
$duck->fly();
$duck->swim();
```

**Special features:**
- `trait` keyword for traits
- `use` for trait inclusion
- Multiple traits separated by comma
- Traits can define properties and methods

**Further reading:**
- [PHP Manual - Traits](https://www.php.net/manual/en/language.oop5.traits.php)

</TabItem>
<TabItem value="python" label="Python">

```python
# Mixins: through Multiple Inheritance
class Flyable:
    def fly(self):
        print("Flying")

class Swimmable:
    def swim(self):
        print("Swimming")

class Duck(Flyable, Swimmable):
    def __init__(self, name):
        self.name = name

duck = Duck("Donald")
duck.fly()
duck.swim()
```

**Special features:**
- Mixins through multiple inheritance
- Mixin classes contain only methods, no data
- Method Resolution Order (MRO) determines method resolution
- Convention: Mixin classes often end with "Mixin"

**Further reading:**
- [Python Documentation - Multiple Inheritance](https://docs.python.org/3/tutorial/classes.html#multiple-inheritance)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Mixins: Modules
module Flyable
  def fly
    puts "Flying"
  end
end

module Swimmable
  def swim
    puts "Swimming"
  end
end

class Duck
  include Flyable
  include Swimmable
  
  attr_accessor :name
  
  def initialize(name)
    @name = name
  end
end

duck = Duck.new("Donald")
duck.fly()
duck.swim()
```

**Special features:**
- `module` for mixins
- `include` for mixin inclusion
- Multiple mixins can be included
- Method resolution through ancestor chain

**Further reading:**
- [Ruby Documentation - Modules](https://ruby-doc.org/core-3.1.0/doc/syntax/modules_and_classes_rdoc.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Traits
trait Flyable {
  def fly(): Unit = {
    println("Flying")
  }
}

trait Swimmable {
  def swim(): Unit = {
    println("Swimming")
  }
}

class Duck extends Flyable with Swimmable {
  var name: String = ""
}

val duck = new Duck
duck.name = "Donald"
duck.fly()
duck.swim()
```

**Special features:**
- `trait` keyword for traits
- `extends` for first trait, `with` for additional ones
- Multiple traits can be combined
- Traits can have default implementations

**Further reading:**
- [Scala Documentation - Traits](https://docs.scala-lang.org/tour/traits.html)

</TabItem>
<TabItem value="d" label="D">

```d
// Mixin Templates
mixin template Printable() {
    void print() {
        writeln(this.toString());
    }
}

mixin template Serializable() {
    string serialize() {
        return "serialized";
    }
}

class Person {
    string name;
    mixin Printable;       // Adds print()
    mixin Serializable;    // Adds serialize()

    override string toString() {
        return "Person: " ~ name;
    }
}

auto p = new Person();
p.name = "Alice";
p.print();           // "Person: Alice"
p.serialize();       // "serialized"
```

**Special features:**
- `mixin template` for reusable code blocks
- String mixins (`mixin("code")`) for compile-time code generation
- Mixin templates can contain methods, fields, and aliases
- No diamond problem conflicts like with multiple inheritance

**Further reading:**
- [D Language Specification - Template Mixins](https://dlang.org/spec/template-mixin.html)

</TabItem>
</Tabs>


## 8.3.7. Traits (Rust-style)

Interface-like constructs with default implementations and associated types that define behavior.

### Languages {#sprachen}

<Tabs availableTabs={['roc', 'rust']} orangeTabs={['gleam', 'lean4', 'mercury']}>
<TabItem value="gleam" label="Gleam">

```gleam
// Behaviours (Trait-ähnlich)
// Gleam has no traits like Rust, but Behaviours for Erlang interop
// Workaround: Functions as parameters (Ad-hoc polymorphism)
pub type Printable(a) {
  Printable(value: a, to_string: fn(a) -> String)
}

pub fn print(item: Printable(a)) -> String {
  item.to_string(item.value)
}
```

**Special features:**
- Gleam has no traits in the Rust sense
- Behaviours exist primarily for Erlang/OTP interop (e.g., GenServer)
- Ad-hoc polymorphism is achieved through function parameters
- Gleam relies on composition instead of inheritance/traits

**Further reading:**
- [Gleam Documentation - Behaviours](https://hexdocs.pm/gleam_otp/)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Abilities (Roc's concept for Traits/Type Classes)
-- Built-in abilities are automatically derived
-- e.g. Eq, Hash, Inspect

isEqual : a, a -> Bool where a implements Eq
isEqual = \x, y -> x == y

-- Custom Abilities
MyAbility implements
    myMethod : a -> Str where a implements MyAbility
```

**Special features:**
- Roc uses "Abilities" instead of traits
- Abilities are similar to Haskell type classes
- Built-in abilities: Eq, Hash, Inspect, Encoding, Decoding

**Further reading:**
- [Roc Documentation - Abilities](https://www.roc-lang.org/tutorial#abilities)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Traits (Rust-style)
trait Flyable {
    fn fly(&self) {
        println!("Flying");
    }
}

trait Swimmable {
    fn swim(&self) {
        println!("Swimming");
    }
}

struct Duck {
    name: String,
    age: u8,
}

impl Flyable for Duck {}
impl Swimmable for Duck {}

let duck = Duck {
    name: String::from("Donald"),
    age: 3,
};
duck.fly();
duck.swim();
```

**Special features:**
- `trait` keyword for traits
- Default implementations possible
- Associated types and constants
- Trait bounds for generics
- Multiple traits can be implemented

**Further reading:**
- [Rust Book - Traits](https://doc.rust-lang.org/book/ch10-02-traits.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Type Classes (similar to Rust Traits)
class Printable (α : Type) where
  format : α → String

class Describable (α : Type) extends Printable α where
  describe : α → String

structure Person where
  name : String
  age : Nat

instance : Printable Person where
  format p := s!"{p.name}"

instance : Describable Person where
  describe p := s!"{p.name}, {p.age} years"

-- With default implementation
class HasDefault (α : Type) where
  value : α
  show : α → String := fun _ => "default"
```

**Special features:**
- Type classes are Lean 4's equivalent to traits/interfaces
- Support default implementations
- Type class hierarchies via `extends`
- Associated functions and values possible
- Compile-time resolution (no dynamic dispatch)

**Further reading:**
- [Functional Programming in Lean - Type Classes](https://lean-lang.org/functional_programming_in_lean/type-classes.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Type Classes (similar to Rust Traits)
:- typeclass printable(T) where [
    func format(T) = string
].

% Superclass-Constraint (ähnlich extends)
:- typeclass describable(T) <= printable(T) where [
    func describe(T) = string
].

:- type person ---> person(name :: string, age :: int).

:- instance printable(person) where [
    (format(person(Name, _)) = Name)
].

:- instance describable(person) where [
    (describe(person(Name, Age)) =
        Name ++ ", " ++ int_to_string(Age) ++ " years")
].
```

**Special features:**
- Type classes are Mercury's equivalent to traits/interfaces
- Superclass constraints via `<=` (e.g., `describable(T) <= printable(T)`)
- No default implementations in type classes
- Compile-time resolution (no dynamic dispatch)

**Further reading:**
- [Mercury Language Reference - Type Classes](https://mercurylang.org/information/doc-release/mercury_ref/Type-classes.html)

</TabItem>
</Tabs>


## 8.3.8. No Inheritance (Composition only)

Languages that do not support class inheritance and instead use composition.

### Languages {#sprachen}

<Tabs availableTabs={['c', 'clojure', 'common-lisp', 'elixir', 'elm', 'erlang', 'gleam', 'go', 'haskell', 'idris', 'julia', 'koka', 'lean4', 'lua', 'mercury', 'perl', 'prolog', 'purescript', 'r', 'racket', 'roc', 'scheme', 'wolfram-language', 'zig']} orangeTabs={['javascript', 'ocaml']}>
<TabItem value="c" label="C">

```c
// No Inheritance: Composition only
struct Animal {
    char name[20];
    int age;
};

struct Dog {
    struct Animal animal;  // Composition
    char breed[30];
};

struct Dog dog;
strcpy(dog.animal.name, "Buddy");
dog.animal.age = 3;
strcpy(dog.breed, "Golden Retriever");
```

**Special features:**
- No class inheritance
- Composition through struct embedding
- Manual delegation required

**Further reading:**
- [C Standard - Structures](https://en.cppreference.com/w/c/language/struct)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; No Inheritance: Composition only
(defrecord Animal [name age])

(defrecord Dog [animal breed])

(def dog (->Dog (->Animal "Buddy" 3) "Golden Retriever"))
(:name (:animal dog))  ; "Buddy"
(:breed dog)  ; "Golden Retriever"
```

**Special features:**
- No class inheritance
- Composition through records
- Functional programming

**Further reading:**
- [Clojure Documentation - Records](https://clojure.org/reference/datatypes)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Composition only (Alternative to inheritance)
(defstruct animal
  name
  age)

(defstruct dog
  (animal (make-animal))
  breed)

(defvar dog (make-dog :animal (make-animal :name "Buddy" :age 3) :breed "Golden Retriever"))
(animal-name (dog-animal dog))  ; "Buddy"
```

**Special features:**
- Composition through struct embedding as an alternative to inheritance
- `defstruct` also supports single inheritance via `:include`, but composition is also possible
- CLOS offers multiple inheritance (see Multiple Inheritance)

**Further reading:**
- [Common Lisp HyperSpec - Structures](http://www.lispworks.com/documentation/HyperSpec/Body/08_.htm)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# No Inheritance: Composition only
defmodule Animal do
  defstruct name: "", age: 0
end

defmodule Dog do
  defstruct animal: %Animal{}, breed: ""
end

dog = %Dog{animal: %Animal{name: "Buddy", age: 3}, breed: "Golden Retriever"}
```

**Special features:**
- No class inheritance
- Composition through structs
- Functional programming

**Further reading:**
- [Elixir Documentation - Structs](https://elixir-lang.org/getting-started/structs.html)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- No Inheritance: Composition only
type alias Animal =
    { name : String
    , age : Int
    }

type alias Dog =
    { animal : Animal
    , breed : String
    }

dog : Dog
dog =
    { animal = { name = "Buddy", age = 3 }
    , breed = "Golden Retriever"
    }
```

**Special features:**
- No class inheritance
- Composition through type aliases
- Functional programming

**Further reading:**
- [Elm Documentation - Records](https://guide.elm-lang.org/core_language.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% No Inheritance: Composition only
-record(animal, {name = "", age = 0}).
-record(dog, {animal = #animal{}, breed = ""}).

Dog = #dog{animal = #animal{name = "Buddy", age = 3}, breed = "Golden Retriever"}.
```

**Special features:**
- No class inheritance
- Composition through records
- Functional programming

**Further reading:**
- [Erlang Documentation - Records](https://www.erlang.org/doc/reference_manual/data_types.html#records)

</TabItem>
<TabItem value="go" label="Go">

```go
// No Inheritance: Composition only
type Animal struct {
    Name string
    Age  int
}

type Dog struct {
    Animal  // Embedding (Composition)
    Breed   string
}

dog := Dog{
    Animal: Animal{Name: "Buddy", Age: 3},
    Breed:  "Golden Retriever",
}
```

**Special features:**
- No class inheritance
- Composition through struct embedding
- Interfaces enable polymorphism

**Further reading:**
- [Go Documentation - Struct Embedding](https://go.dev/doc/effective_go#embedding)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- No Inheritance: Composition only
data Animal = Animal
    { name :: String
    , age :: Int
    }

data Dog = Dog
    { animal :: Animal
    , breed :: String
    }

dog :: Dog
dog = Dog
    { animal = Animal { name = "Buddy", age = 3 }
    , breed = "Golden Retriever"
    }
```

**Special features:**
- No class inheritance
- Composition through algebraic data types
- Type classes for polymorphism

**Further reading:**
- [Haskell Documentation - Data Types](https://www.haskell.org/tutorial/data.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- No Inheritance: Composition only
record Animal where
    constructor MkAnimal
    name : String
    age : Nat

record Dog where
    constructor MkDog
    animal : Animal
    breed : String

dog : Dog
dog = MkDog (MkAnimal "Buddy" 3) "Golden Retriever"
```

**Special features:**
- No class inheritance
- Composition through records
- Functional programming with dependent types

**Further reading:**
- [Idris Documentation - Records](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html#records)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// No Inheritance: Composition only (before ES6)
function Animal(name, age) {
    this.name = name;
    this.age = age;
}

function Dog(name, age, breed) {
    Animal.call(this, name, age);  // Composition through delegation
    this.breed = breed;
}

var dog = new Dog("Buddy", 3, "Golden Retriever");
```

**Special features:**
- Before ES6: No class inheritance
- Composition through function delegation
- ES6 classes support inheritance (see Single Inheritance)

**Further reading:**
- [MDN Web Docs - Object-oriented JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_programming)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- No Inheritance: Composition only
local Animal = {}
Animal.__index = Animal

function Animal:new(name, age)
    local obj = {name = name, age = age}
    setmetatable(obj, Animal)
    return obj
end

local Dog = {}
Dog.__index = Dog

function Dog:new(name, age, breed)
    local obj = {animal = Animal:new(name, age), breed = breed}  -- Composition
    setmetatable(obj, Dog)
    return obj
end

local dog = Dog:new("Buddy", 3, "Golden Retriever")
```

**Special features:**
- No class inheritance
- Composition through metatables
- Prototype-based programming

**Further reading:**
- [Lua Documentation - Object-Oriented Programming](https://www.lua.org/pil/16.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% No Inheritance: Composition with declared types
:- type animal ---> animal(name :: string, age :: int).

:- type dog ---> dog(animal :: animal, breed :: string).

Dog = dog(animal("Buddy", 3), "Golden Retriever"),
Dog ^ animal ^ name    % "Buddy"
Dog ^ breed            % "Golden Retriever"
```

**Special features:**
- No classes and no inheritance
- Composition through algebraic data types with named fields
- Type classes for polymorphism (instead of inheritance)
- Access to nested fields via `^` operator

**Further reading:**
- [Mercury Language Reference - Types](https://mercurylang.org/information/doc-release/mercury_ref/Types.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* No Inheritance: Composition only *)
type animal = {
  name : string;
  age : int;
}

type dog = {
  animal : animal;  (* Composition *)
  breed : string;
}

let dog = {
  animal = { name = "Buddy"; age = 3 };
  breed = "Golden Retriever"
}
```

**Special features:**
- No class inheritance in the traditional sense
- Composition through records
- Functional programming

**Further reading:**
- [OCaml Documentation - Records](https://ocaml.org/docs/data-types)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# No Inheritance: Composition only (without use base)
package Animal;
sub new {
    my $class = shift;
    my $self = { name => shift, age => shift };
    bless $self, $class;
    return $self;
}

package Dog;
sub new {
    my $class = shift;
    my $self = {
        animal => Animal->new(@_),  # Composition
        breed => shift
    };
    bless $self, $class;
    return $self;
}

my $dog = Dog->new("Buddy", 3, "Golden Retriever");
```

**Special features:**
- Without `use base`: no inheritance
- Composition through hash references
- `use base` enables inheritance (see Multiple Inheritance)

**Further reading:**
- [Perl Documentation - Objects](https://perldoc.perl.org/perlobj)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% No Inheritance: Composition with Compound Terms
% Data structures require no declaration
Dog = dog(animal('Buddy', 3), 'Golden Retriever'),

% Zugriff über Unifikation / Pattern Matching
Dog = dog(animal(Name, _Age), Breed)
% Name = 'Buddy', Breed = 'Golden Retriever'
```

**Special features:**
- No classes and no inheritance
- Composition through nested compound terms (functors)
- Data structures are implicit — no declaration needed
- Access to components via unification and pattern matching

**Further reading:**
- [SWI-Prolog Documentation - Terms](https://www.swi-prolog.org/pldoc/man?section=manipterm)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- No Inheritance: Composition only
type Animal = { name :: String, age :: Int }

type Dog = { animal :: Animal, breed :: String }

dog :: Dog
dog = { animal: { name: "Buddy", age: 3 }, breed: "Golden Retriever" }
```

**Special features:**
- No class inheritance
- Composition through type aliases
- Functional programming

**Further reading:**
- [PureScript Documentation - Records](https://pursuit.purescript.org/packages/purescript-prelude/docs/Data.Record)

</TabItem>
<TabItem value="r" label="R">

```r
# Composition without formal inheritance (Base R)
Animal <- function(name, age) {
  structure(list(name = name, age = age), class = "Animal")
}

Dog <- function(name, age, breed) {
  structure(list(animal = Animal(name, age), breed = breed), class = "Dog")
}

dog <- Dog("Buddy", 3, "Golden Retriever")
```

**Special features:**
- Base R (without S4/R6) uses composition over lists
- S3 classes offer simple inheritance via `class` attribute
- S4/R6 classes support formal single inheritance

**Further reading:**
- [R Documentation - Classes](https://cran.r-project.org/doc/manuals/r-release/R-lang.html#Object_002doriented-programming)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
; Composition with Structs (Alternative to class inheritance)
(struct animal (name age))
(struct dog (animal breed))

(define my-dog (dog (animal "Buddy" 3) "Golden Retriever"))
(animal-name (dog-animal my-dog))  ; "Buddy"
```

**Special features:**
- Structs use composition instead of inheritance
- Racket also has a class system with inheritance
- Structs are lighter-weight than classes

**Further reading:**
- [Racket Documentation - Structures](https://docs.racket-lang.org/guide/define-struct.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; No Inheritance: Composition only
(define (make-animal name age)
  (list 'animal name age))

(define (make-dog name age breed)
  (list 'dog (make-animal name age) breed))  ; Composition

(define dog (make-dog "Buddy" 3 "Golden Retriever"))
```

**Special features:**
- No class inheritance in the traditional sense
- Composition through lists
- Functional programming

**Further reading:**
- [Scheme Documentation - Data Structures](https://www.scheme.com/tspl4/objects.html)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* No Inheritance: Composition only *)
Animal[name_, age_] := <|"name" -> name, "age" -> age|>

Dog[name_, age_, breed_] := <|
    "animal" -> Animal[name, age],  (* Composition *)
    "breed" -> breed
|>

dog = Dog["Buddy", 3, "Golden Retriever"]
```

**Special features:**
- No class inheritance in the traditional sense
- Composition through associations
- Symbolic programming

**Further reading:**
- [Wolfram Language Documentation - Associations](https://reference.wolfram.com/language/guide/Associations.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// No Inheritance: Composition only
const Animal = struct {
    name: []const u8,
    age: u8,
};

const Dog = struct {
    animal: Animal,  // Composition
    breed: []const u8,
};

const dog = Dog{
    .animal = Animal{ .name = "Buddy", .age = 3 },
    .breed = "Golden Retriever",
};
```

**Special features:**
- No class inheritance
- Composition through struct embedding
- Manual delegation required

**Further reading:**
- [Zig Documentation - Structs](https://ziglang.org/documentation/0.11.0/#structs)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// No inheritance, only composition
pub type Animal {
  Animal(name: String, sound: String)
}

pub fn speak(animal: Animal) -> String {
  animal.name <> " says " <> animal.sound
}

let dog = Animal(name: "Dog", sound: "Woof")
let cat = Animal(name: "Cat", sound: "Meow")
```

**Special features:**
- Gleam has no inheritance
- Composition through custom types and functions
- Functional programming without OOP hierarchies

**Further reading:**
- [Gleam Documentation - Custom Types](https://tour.gleam.run/data-types/custom-types/)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# No inheritance for concrete types
abstract type Shape end

struct Circle <: Shape  # Only subtyping from abstract types
    radius::Float64
end

struct Rectangle <: Shape
    width::Float64
    height::Float64
end

# Composition instead of inheritance
struct ColoredShape
    shape::Shape
    color::String
end

# Behavior through multiple dispatch
area(c::Circle) = π * c.radius^2
area(r::Rectangle) = r.width * r.height
```

**Special features:**
- Concrete types (structs) cannot inherit from each other
- Only abstract types form a type hierarchy
- Behavior is shared through multiple dispatch instead of inheritance
- Composition is used as the primary design pattern

**Further reading:**
- [Julia Documentation - Types](https://docs.julialang.org/en/v1/manual/types/)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// No inheritance: composition with structs and functions
struct circle
  radius: float64

struct rectangle
  width: float64
  height: float64

// Behavior through ADTs and functions
type shape
  CircleShape(c: circle)
  RectShape(r: rectangle)

fun area(s: shape): float64
  match s
    CircleShape(c) -> 3.14159 * c.radius * c.radius
    RectShape(r)   -> r.width * r.height

// Composition instead of inheritance
struct colored-shape
  shape: shape
  color: string
```

**Special features:**
- Koka has no classes and no inheritance
- Data modeling through `struct` (records) and `type` (ADTs)
- Behavior is defined through functions and pattern matching
- Composition is the primary design pattern
- Effects replace many patterns that are solved through inheritance in OOP

**Further reading:**
- [Koka Language Guide - Data Types](https://koka-lang.github.io/koka/doc/book.html#sec-data-types)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- No Inheritance: Composition only
structure Animal where
  name : String
  age : Nat

structure Dog where
  animal : Animal      -- Composition
  breed : String

let dog : Dog :=
  { animal := { name := "Buddy", age := 3 }
  , breed := "Golden Retriever" }
dog.animal.name  -- "Buddy"
dog.breed        -- "Golden Retriever"
```

**Special features:**
- No class inheritance
- Composition through structure embedding
- Type classes for polymorphism (instead of inheritance)
- `extends` exists, but only transfers fields (no method inheritance)

**Further reading:**
- [Functional Programming in Lean - Structures](https://lean-lang.org/functional_programming_in_lean/getting-to-know/structures.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- No inheritance: composition with records and functions
Animal : { name : Str, sound : Str }

makeSound : Animal -> Str
makeSound = \animal -> "$(animal.name) says $(animal.sound)"

dog = { name: "Dog", sound: "Woof" }
cat = { name: "Cat", sound: "Meow" }
```

**Special features:**
- No inheritance
- Composition through records and functions
- Functional programming without OOP hierarchies

**Further reading:**
- [Roc Documentation](https://www.roc-lang.org/tutorial)

</TabItem>
</Tabs>

