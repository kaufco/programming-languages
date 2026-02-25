---
slug: /objektorientierung/vererbung
title: 8.3. Vererbung
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 8.3. Vererbung

Vererbungshierarchien und Polymorphismus.

## 8.3.1. Single Inheritance

Eine Klasse kann nur von einer einzigen Basisklasse erben.

### Sprachen {#sprachen}

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

**Besonderheiten:**
- Tagged Types ermöglichen Vererbung
- Nur eine Basisklasse erlaubt
- Type-safe Vererbungshierarchien

**Weiterführende Links:**
- [Ada Reference Manual - Tagged Types](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-3-9.html)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Single Inheritance: geplant
// class Dog : Animal {
//     // ...
// };
```

**Besonderheiten:**
- Single Inheritance ist geplant
- Experimentelle Sprache, Syntax kann sich noch ändern

**Weiterführende Links:**
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

**Besonderheiten:**
- Standard-Vererbung mit `: public BaseClass`
- Private und protected Vererbung möglich
- Virtual inheritance für Diamond Problem bei Multiple Inheritance

**Weiterführende Links:**
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

**Besonderheiten:**
- Vererbung mit `<` Operator
- `super` für Basisklassen-Konstruktor
- Nur eine Basisklasse erlaubt

**Weiterführende Links:**
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

**Besonderheiten:**
- Nur eine Basisklasse erlaubt
- `sealed` Klassen können nicht vererbt werden
- `abstract` Klassen können als Basisklassen dienen

**Weiterführende Links:**
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

**Besonderheiten:**
- Nur eine Basisklasse erlaubt
- Interfaces können zusätzlich implementiert werden
- `final` Klassen können nicht vererbt werden

**Weiterführende Links:**
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

**Besonderheiten:**
- `extends` für Vererbung
- Nur eine Basisklasse erlaubt
- Mixins können zusätzlich verwendet werden

**Weiterführende Links:**
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

**Besonderheiten:**
- `inherit` Schlüsselwort für Vererbung
- Nur eine Basisklasse erlaubt
- Design by Contract unterstützt

**Weiterführende Links:**
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

**Besonderheiten:**
- `extends` für Vererbung
- Nur eine Basisklasse erlaubt
- Traits können zusätzlich verwendet werden

**Weiterführende Links:**
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

**Besonderheiten:**
- `extends` für Vererbung
- Nur eine Basisklasse erlaubt
- Interfaces können zusätzlich implementiert werden

**Weiterführende Links:**
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

**Besonderheiten:**
- `extends` für Vererbung
- Nur eine Basisklasse erlaubt
- Interfaces können zusätzlich implementiert werden
- `final` Klassen können nicht vererbt werden

**Weiterführende Links:**
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

**Besonderheiten:**
- ES6 Classes unterstützen Single Inheritance
- `extends` für Vererbung
- `super()` für Basisklassen-Konstruktor
- Nur eine Basisklasse erlaubt

**Weiterführende Links:**
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

**Besonderheiten:**
- `open` Klassen können vererbt werden
- `:` für Vererbung
- Nur eine Basisklasse erlaubt
- Interfaces können zusätzlich implementiert werden

**Weiterführende Links:**
- [Kotlin Documentation - Inheritance](https://kotlinlang.org/docs/inheritance.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Structure Extension (ähnlich Single Inheritance)
structure Animal where
  name : String
  age : Nat

structure Dog extends Animal where
  breed : String

let animal : Animal := { name := "Generic", age := 5 }
let dog : Dog := { name := "Buddy", age := 3, breed := "Golden Retriever" }
-- dog.toAnimal  -- automatisch generierte Konvertierung
```

**Besonderheiten:**
- `extends` erlaubt Feld-Übernahme aus einer anderen Struktur
- Automatische Konvertierungsfunktion `toBaseType` wird generiert
- Keine Methoden-Vererbung — nur Felder werden übernommen
- Strukturen sind Werttypen (kein Polymorphismus über Subtyping)

**Weiterführende Links:**
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

**Besonderheiten:**
- Struct-basierte Vererbung
- Nur eine Basisklasse erlaubt
- Experimentelle Sprache, Syntax kann sich ändern

**Weiterführende Links:**
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

**Besonderheiten:**
- `of` für Vererbung
- Nur eine Basisklasse erlaubt
- `RootObj` als Basis für alle Objekte

**Weiterführende Links:**
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

**Besonderheiten:**
- `:` für Vererbung in Interface-Deklaration
- Nur eine Basisklasse erlaubt
- Protocols können zusätzlich implementiert werden

**Weiterführende Links:**
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

**Besonderheiten:**
- `class(BaseClass)` für Vererbung
- Nur eine Basisklasse erlaubt
- Interfaces können zusätzlich implementiert werden

**Weiterführende Links:**
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

**Besonderheiten:**
- `extends` für Vererbung
- Nur eine Basisklasse erlaubt
- Traits können zusätzlich verwendet werden

**Weiterführende Links:**
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

**Besonderheiten:**
- `(BaseClass)` für Vererbung
- Nur eine Basisklasse erlaubt
- `super()` für Basisklassen-Zugriff
- Multiple Inheritance mit mehreren Basisklassen möglich (siehe Multiple Inheritance)

**Weiterführende Links:**
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

**Besonderheiten:**
- `<` für Vererbung
- Nur eine Basisklasse erlaubt
- `super` für Basisklassen-Methoden
- Modules können zusätzlich eingebunden werden

**Weiterführende Links:**
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

**Besonderheiten:**
- `extends` für Vererbung
- Nur eine Basisklasse erlaubt
- Traits können zusätzlich verwendet werden

**Weiterführende Links:**
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

**Besonderheiten:**
- `:` für Vererbung
- Nur eine Basisklasse erlaubt
- Protocols können zusätzlich implementiert werden
- `final` Klassen können nicht vererbt werden

**Weiterführende Links:**
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

**Besonderheiten:**
- `extends` für Vererbung
- Nur eine Basisklasse erlaubt
- Interfaces können zusätzlich implementiert werden
- Identisch zu JavaScript ES6 Classes

**Weiterführende Links:**
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

**Besonderheiten:**
- `Inherits` Schlüsselwort für Vererbung
- Nur eine Basisklasse erlaubt
- Interfaces können zusätzlich implementiert werden

**Weiterführende Links:**
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

**Besonderheiten:**
- Struct-Embedding für Vererbung
- Nur eine Basisklasse erlaubt
- Interfaces können zusätzlich implementiert werden

**Weiterführende Links:**
- [V Language Documentation](https://github.com/vlang/v/blob/master/doc/docs.md)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Single Inheritance mit EXTENDS (seit Fortran 2003)
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

**Besonderheiten:**
- `EXTENDS(base_type)` für Type Extension (seit Fortran 2003)
- Nur Single Inheritance (keine Multiple Inheritance)
- Zugriff auf geerbte Komponenten über Prozent-Notation

**Weiterführende Links:**
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
            fprintf('%s macht ein Geräusch\n', obj.name);
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
            fprintf('%s bellt\n', obj.name);
        end
    end
end
```

**Besonderheiten:**
- Vererbung mit `<`-Syntax: `classdef SubClass < SuperClass`
- Konstruktor der Superklasse wird mit `obj@SuperClass(args)` aufgerufen
- Methoden können überschrieben werden

**Weiterführende Links:**
- [MATLAB Documentation - Subclass Syntax](https://www.mathworks.com/help/matlab/matlab_oop/creating-subclasses--syntax-and-techniques.html)

</TabItem>
</Tabs>


## 8.3.2. Multiple Inheritance

Eine Klasse kann von mehreren Basisklassen gleichzeitig erben.

### Sprachen {#sprachen}

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

**Besonderheiten:**
- Protocols ermöglichen Multiple Inheritance-ähnliches Verhalten
- Multimethods für flexible Dispatch-Mechanismen
- Keine traditionelle Klassen-Vererbung

**Weiterführende Links:**
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

**Besonderheiten:**
- CLOS (Common Lisp Object System) unterstützt Multiple Inheritance
- Method Resolution Order (MRO) bestimmt Methodenauflösung
- Diamond Problem wird durch MRO gelöst

**Weiterführende Links:**
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

**Besonderheiten:**
- Mehrere Basisklassen mit Komma getrennt
- Virtual inheritance für Diamond Problem
- Method Resolution durch explizite Qualifizierung möglich

**Weiterführende Links:**
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

**Besonderheiten:**
- `inherit` mit mehreren Basisklassen
- Renaming und Redefinition für Konflikte
- Design by Contract unterstützt

**Weiterführende Links:**
- [Eiffel Language - Multiple Inheritance](https://www.eiffel.org/doc/eiffel/Language%20Specification)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Multiple Inheritance: mit use base oder use parent
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

**Besonderheiten:**
- `use parent` oder `use base` für Multiple Inheritance
- Method Resolution Order (MRO) mit C3-Algorithmus
- Diamond Problem wird durch MRO gelöst

**Weiterführende Links:**
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

**Besonderheiten:**
- Mehrere Basisklassen in Klammern
- Method Resolution Order (MRO) mit C3-Algorithmus
- Diamond Problem wird durch MRO gelöst
- `super()` funktioniert mit MRO

**Weiterführende Links:**
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

**Besonderheiten:**
- Multiple Inheritance mit `&`-Syntax: `classdef MyClass < ClassA & ClassB`
- Bei Methodenkonflikten muss die Subklasse die Methode überschreiben
- Wird in der Praxis selten verwendet

**Weiterführende Links:**
- [MATLAB Documentation - Multiple Inheritance](https://www.mathworks.com/help/matlab/matlab_oop/subclassing-multiple-classes.html)

</TabItem>
</Tabs>


## 8.3.3. Interface Inheritance

Eine Klasse kann mehrere Interfaces implementieren, um Verträge zu erfüllen.

### Sprachen {#sprachen}

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

**Besonderheiten:**
- Mehrere Interfaces mit Komma getrennt
- Explizite Interface-Implementierung möglich
- Default Interface Methods seit C# 8.0

**Weiterführende Links:**
- [C# Documentation - Interfaces](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/types/interfaces)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Interface Inheritance: Implicit durch Klassen
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

**Besonderheiten:**
- `implements` für Interface-Implementierung
- Mehrere Interfaces mit Komma getrennt
- Alle Methoden müssen implementiert werden

**Weiterführende Links:**
- [Dart Language - Interfaces](https://dart.dev/language/classes#implicit-interfaces)

</TabItem>
<TabItem value="go" label="Go">

```go
// Interface Inheritance: Implicit durch Methoden
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

**Besonderheiten:**
- Interfaces werden implizit implementiert
- Duck Typing: Wenn ein Typ alle Methoden eines Interfaces hat, implementiert er es
- Mehrere Interfaces können kombiniert werden

**Weiterführende Links:**
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

**Besonderheiten:**
- `implements` für Interface-Implementierung
- Mehrere Interfaces mit Komma getrennt
- Alle Methoden müssen implementiert werden

**Weiterführende Links:**
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

**Besonderheiten:**
- Mehrere `implements`-Klauseln
- Alle Methoden müssen implementiert werden
- Interfaces können Properties definieren

**Weiterführende Links:**
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

**Besonderheiten:**
- `implements` für Interface-Implementierung
- Mehrere Interfaces mit Komma getrennt
- Default Methods seit Java 8
- Static Methods seit Java 8

**Weiterführende Links:**
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

**Besonderheiten:**
- `:` für Interface-Implementierung
- Mehrere Interfaces mit Komma getrennt
- Default Implementierungen in Interfaces möglich

**Weiterführende Links:**
- [Kotlin Documentation - Interfaces](https://kotlinlang.org/docs/interfaces.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Type Class Inheritance (ähnlich Interface Inheritance)
class Flyable (α : Type) where
  fly : α → String

class Swimmable (α : Type) where
  swim : α → String

structure Duck where
  name : String

instance : Flyable Duck where
  fly d := s!"{d.name} fliegt"

instance : Swimmable Duck where
  swim d := s!"{d.name} schwimmt"

-- Mehrere Type Classes können gleichzeitig instanziiert werden
let duck : Duck := { name := "Donald" }
fly duck     -- "Donald fliegt"
swim duck    -- "Donald schwimmt"
```

**Besonderheiten:**
- Type Classes fungieren als Interfaces
- Ein Typ kann beliebig viele Type Classes implementieren (via `instance`)
- Type Classes können voneinander erben (z.B. `class Ord (α : Type) extends BEq α`)
- Compile-Time-Auflösung über Type Class Resolution

**Weiterführende Links:**
- [Functional Programming in Lean - Type Classes](https://lean-lang.org/functional_programming_in_lean/type-classes.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Type Class Constraints (ähnlich Interface Inheritance)
:- typeclass flyable(T) where [
    func fly(T) = string
].

:- typeclass swimmable(T) where [
    func swim(T) = string
].

:- type duck ---> duck(name :: string).

:- instance flyable(duck) where [
    (fly(duck(Name)) = Name ++ " fliegt")
].

:- instance swimmable(duck) where [
    (swim(duck(Name)) = Name ++ " schwimmt")
].

% Mehrere Type Classes können gleichzeitig instanziiert werden
```

**Besonderheiten:**
- Type Classes fungieren als Interfaces
- Ein Typ kann beliebig viele Type Classes implementieren (via `instance`)
- Type Classes können Superclass-Constraints haben (z.B. `:- typeclass ord(T) <= comparable(T)`)
- Compile-Time-Auflösung über Type Class Resolution

**Weiterführende Links:**
- [Mercury Language Reference - Type Classes](https://mercurylang.org/information/doc-release/mercury_ref/Type-classes.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Interface Inheritance: durch Methoden
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

**Besonderheiten:**
- Concepts als Interface-ähnliche Konstrukte
- Duck Typing durch Concepts
- Mehrere Concepts können kombiniert werden

**Weiterführende Links:**
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

**Besonderheiten:**
- Protocols als Interfaces
- Mehrere Protocols in `<>` Klammern
- Optional Methods in Protocols möglich

**Weiterführende Links:**
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

**Besonderheiten:**
- Interfaces mit `interface` Schlüsselwort
- Mehrere Interfaces mit Komma getrennt
- `TInterfacedObject` als Basis für Interface-Implementierung

**Weiterführende Links:**
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

**Besonderheiten:**
- `implements` für Interface-Implementierung
- Mehrere Interfaces mit Komma getrennt
- Alle Methoden müssen implementiert werden

**Weiterführende Links:**
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

**Besonderheiten:**
- Traits als Interfaces
- `extends` für erste Trait, `with` für weitere
- Traits können Default-Implementierungen haben

**Weiterführende Links:**
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

**Besonderheiten:**
- Protocols als Interfaces
- Mehrere Protocols mit Komma getrennt
- Default Implementierungen in Protocol Extensions möglich

**Weiterführende Links:**
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

**Besonderheiten:**
- `implements` für Interface-Implementierung
- Mehrere Interfaces mit Komma getrennt
- Interfaces können Properties definieren
- Identisch zu Java/C# Syntax

**Weiterführende Links:**
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

**Besonderheiten:**
- `Implements` Schlüsselwort für Interface-Implementierung
- Mehrere Interfaces mit Komma getrennt
- Explizite Interface-Implementierung mit `Implements InterfaceName.MethodName`

**Weiterführende Links:**
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

// Klasse implementiert mehrere Interfaces
class Shape : Drawable, Resizable {
    override void draw() {
        writeln("Drawing shape");
    }

    override void resize(double factor) {
        writeln("Resizing by ", factor);
    }
}

// Interface Vererbung
interface Widget : Drawable, Resizable {
    void click();
}
```

**Besonderheiten:**
- Klassen können mehrere Interfaces implementieren
- Interfaces können von anderen Interfaces erben
- Interfaces können Default-Implementierungen haben (seit D 2.0)
- Keine direkte Mehrfachvererbung von Klassen

**Weiterführende Links:**
- [D Language Specification - Interfaces](https://dlang.org/spec/interface.html)

</TabItem>
</Tabs>


## 8.3.4. Abstract Classes

Klassen, die nicht direkt instanziiert werden können und als Basisklassen für abgeleitete Klassen dienen.

### Sprachen {#sprachen}

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

**Besonderheiten:**
- Abstract Tagged Types mit `abstract` Schlüsselwort
- Abstract Procedures müssen überschrieben werden
- Kann nicht direkt instanziiert werden

**Weiterführende Links:**
- [Ada Reference Manual - Abstract Types](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-3-9-3.html)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Abstract Classes: durch pure virtual functions
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

// Animal animal;  // Fehler: kann nicht instanziiert werden
Dog dog;  // OK
```

**Besonderheiten:**
- Pure virtual functions (`= 0`) machen Klasse abstract
- Kann nicht direkt instanziiert werden
- Virtual Destructor empfohlen

**Weiterführende Links:**
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

// Animal animal = new Animal();  // Fehler: kann nicht instanziiert werden
var dog = new Dog();  // OK
```

**Besonderheiten:**
- `abstract` Schlüsselwort für Klasse und Methoden
- Kann nicht direkt instanziiert werden
- Kann konkrete und abstract Methoden mischen

**Weiterführende Links:**
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

// Animal animal = new Animal();  // Fehler: kann nicht instanziiert werden
auto dog = new Dog();  // OK
```

**Besonderheiten:**
- `abstract` Schlüsselwort für Klasse und Methoden
- Kann nicht direkt instanziiert werden
- Kann konkrete und abstract Methoden mischen

**Weiterführende Links:**
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

// Animal animal = Animal("Generic", 5);  // Fehler: kann nicht instanziiert werden
var dog = Dog("Buddy", 3, "Golden Retriever");  // OK
```

**Besonderheiten:**
- `abstract` Schlüsselwort für Klasse
- Abstract Methods ohne Body
- Kann nicht direkt instanziiert werden

**Weiterführende Links:**
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

**Besonderheiten:**
- `deferred` Schlüsselwort für abstract Klassen
- `deferred` für abstract Methoden
- Kann nicht direkt instanziiert werden

**Weiterführende Links:**
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

// Animal animal = new Animal()  // Fehler: kann nicht instanziiert werden
def dog = new Dog(name: "Buddy", age: 3, breed: "Golden Retriever")  // OK
```

**Besonderheiten:**
- `abstract` Schlüsselwort für Klasse und Methoden
- Kann nicht direkt instanziiert werden
- Kann konkrete und abstract Methoden mischen

**Weiterführende Links:**
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

// var animal = new Animal("Generic", 5);  // Fehler: kann nicht instanziiert werden
var dog = new Dog("Buddy", 3, "Golden Retriever");  // OK
```

**Besonderheiten:**
- `abstract` Schlüsselwort für Klasse und Methoden
- Kann nicht direkt instanziiert werden
- Kann konkrete und abstract Methoden mischen

**Weiterführende Links:**
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

// Animal animal = new Animal();  // Fehler: kann nicht instanziiert werden
Dog dog = new Dog();  // OK
```

**Besonderheiten:**
- `abstract` Schlüsselwort für Klasse und Methoden
- Kann nicht direkt instanziiert werden
- Kann konkrete und abstract Methoden mischen

**Weiterführende Links:**
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

// val animal = Animal("Generic", 5)  // Fehler: kann nicht instanziiert werden
val dog = Dog("Buddy", 3, "Golden Retriever")  // OK
```

**Besonderheiten:**
- `abstract` Schlüsselwort für Klasse und Methoden
- Kann nicht direkt instanziiert werden
- Kann konkrete und abstract Methoden mischen

**Weiterführende Links:**
- [Kotlin Documentation - Abstract Classes](https://kotlinlang.org/docs/inheritance.html#abstract-classes)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Abstract Classes: durch Methoden ohne Implementierung
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

**Besonderheiten:**
- Abstract durch Methoden ohne Implementierung
- `{.base.}` pragma für Basis-Methoden
- Runtime-Fehler wenn abstract Methode aufgerufen wird

**Weiterführende Links:**
- [Nim Manual - Methods](https://nim-lang.org/docs/manual.html#methods)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objectivec
// Abstract Classes: durch nicht implementierte Methoden
@interface Animal : NSObject
@property NSString *name;
@property int age;
- (void)makeSound;  // Muss in Subklassen implementiert werden
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

**Besonderheiten:**
- Kein explizites `abstract` Schlüsselwort
- Abstract durch nicht implementierte Methoden
- Konvention: Abstract Klassen dokumentieren, dass sie nicht instanziiert werden sollen

**Weiterführende Links:**
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

**Besonderheiten:**
- `virtual; abstract` für abstract Methoden
- Kann nicht direkt instanziiert werden
- Kann konkrete und abstract Methoden mischen

**Weiterführende Links:**
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

// $animal = new Animal();  // Fehler: kann nicht instanziiert werden
$dog = new Dog();  // OK
```

**Besonderheiten:**
- `abstract` Schlüsselwort für Klasse und Methoden
- Kann nicht direkt instanziiert werden
- Kann konkrete und abstract Methoden mischen

**Weiterführende Links:**
- [PHP Manual - Abstract Classes](https://www.php.net/manual/en/language.oop5.abstract.php)

</TabItem>
<TabItem value="python" label="Python">

```python
# Abstract Classes: mit abc module
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

# animal = Animal("Generic", 5)  # Fehler: kann nicht instanziiert werden
dog = Dog("Buddy", 3, "Golden Retriever")  # OK
```

**Besonderheiten:**
- `ABC` (Abstract Base Class) aus `abc` Modul
- `@abstractmethod` Decorator für abstract Methoden
- Kann nicht direkt instanziiert werden

**Weiterführende Links:**
- [Python Documentation - Abstract Base Classes](https://docs.python.org/3/library/abc.html)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Abstract Classes: durch Konvention
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

# animal = Animal.new("Generic", 5)  # Technisch möglich, aber nicht empfohlen
dog = Dog.new("Buddy", 3, "Golden Retriever")  # OK
```

**Besonderheiten:**
- Kein explizites `abstract` Schlüsselwort
- Abstract durch `raise NotImplementedError` in Methoden
- Konvention: Abstract Klassen dokumentieren, dass sie nicht instanziiert werden sollen

**Weiterführende Links:**
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

// val animal = new Animal("Generic", 5)  // Fehler: kann nicht instanziiert werden
val dog = new Dog("Buddy", 3, "Golden Retriever")  // OK
```

**Besonderheiten:**
- `abstract` Schlüsselwort für Klasse
- Abstract Methoden ohne Body
- Kann nicht direkt instanziiert werden

**Weiterführende Links:**
- [Scala Documentation - Abstract Classes](https://docs.scala-lang.org/tour/abstract-type-members.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Abstract Classes: durch Protocol Extensions (keine echten Abstract Classes)
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

**Besonderheiten:**
- Keine echten Abstract Classes
- Protocol Extensions ermöglichen Default-Implementierungen
- Protocols können als Abstract Classes verwendet werden

**Weiterführende Links:**
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

// const animal = new Animal("Generic", 5);  // Fehler: kann nicht instanziiert werden
const dog = new Dog("Buddy", 3, "Golden Retriever");  // OK
```

**Besonderheiten:**
- `abstract` Schlüsselwort für Klasse und Methoden
- Kann nicht direkt instanziiert werden
- Kann konkrete und abstract Methoden mischen

**Weiterführende Links:**
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

' Dim animal As New Animal()  ' Fehler: kann nicht instanziiert werden
Dim dog As New Dog With {.Name = "Buddy", .Age = 3, .Breed = "Golden Retriever"}  ' OK
```

**Besonderheiten:**
- `MustInherit` für abstract Klassen
- `MustOverride` für abstract Methoden
- Kann nicht direkt instanziiert werden

**Weiterführende Links:**
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
            fprintf('Zeichne Kreis mit Radius %g\n', obj.radius);
        end
    end
end
```

**Besonderheiten:**
- `classdef (Abstract)` markiert eine Klasse als abstrakt
- `methods (Abstract)` und `properties (Abstract)` für abstrakte Mitglieder
- Abstrakte Klassen können nicht direkt instanziiert werden

**Weiterführende Links:**
- [MATLAB Documentation - Abstract Classes](https://www.mathworks.com/help/matlab/matlab_oop/abstract-classes-and-interfaces.html)

</TabItem>
</Tabs>


## 8.3.5. Sealed Classes

Klassen, die nicht vererbt werden können und eine geschlossene Vererbungshierarchie definieren.

### Sprachen {#sprachen}

<Tabs availableTabs={['csharp', 'd', 'dart', 'groovy', 'java', 'kotlin', 'matlab', 'object-pascal', 'scala', 'swift']}>
<TabItem value="csharp" label="C#">

```csharp
// Sealed Classes
sealed class Animal
{
    public string Name { get; set; }
    public int Age { get; set; }
}

// class Dog : Animal { }  // Fehler: sealed Klasse kann nicht vererbt werden

var animal = new Animal { Name = "Generic", Age = 5 };
```

**Besonderheiten:**
- `sealed` Schlüsselwort verhindert Vererbung
- Kann nicht als Basisklasse verwendet werden
- Sealed Methods können in nicht-sealed Klassen überschrieben werden

**Weiterführende Links:**
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

// class Dog : Animal { }  // Fehler: final Klasse kann nicht vererbt werden

auto animal = new Animal();
animal.name = "Generic";
animal.age = 5;
```

**Besonderheiten:**
- `final` Schlüsselwort verhindert Vererbung
- Kann nicht als Basisklasse verwendet werden
- Final Methods können in nicht-final Klassen überschrieben werden

**Weiterführende Links:**
- [D Language - Final Classes](https://dlang.org/spec/class.html#final)

</TabItem>
<TabItem value="java" label="Java">

```java
// Sealed Classes (seit Java 17)
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

// class Bird extends Animal { }  // Fehler: nicht in permits-Liste

Animal animal = new Dog();
animal.name = "Buddy";
```

**Besonderheiten:**
- `sealed` Schlüsselwort mit `permits`-Klausel (seit Java 17)
- Nur explizit erlaubte Klassen können erben
- Erlaubte Klassen müssen `final`, `sealed` oder `non-sealed` sein

**Weiterführende Links:**
- [Java Documentation - Sealed Classes](https://docs.oracle.com/javase/specs/jls/se17/html/jls-8.html#jls-8.1.1.2)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Sealed Classes
sealed class Animal(val name: String, val age: Int)

class Dog(name: String, age: Int, val breed: String) : Animal(name, age)
class Cat(name: String, age: Int, val color: String) : Animal(name, age)

// class Bird : Animal("Bird", 1)  // Fehler: muss im selben Modul sein

val animal: Animal = Dog("Buddy", 3, "Golden Retriever")
```

**Besonderheiten:**
- `sealed` Schlüsselwort für geschlossene Hierarchien
- Alle Subklassen müssen im selben Modul definiert sein
- Nützlich für exhaustive when-expressions

**Weiterführende Links:**
- [Kotlin Documentation - Sealed Classes](https://kotlinlang.org/docs/sealed-classes.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Sealed Classes
sealed abstract class Animal(val name: String, val age: Int)

case class Dog(name: String, age: Int, breed: String) extends Animal(name, age)
case class Cat(name: String, age: Int, color: String) extends Animal(name, age)

// class Bird extends Animal("Bird", 1)  // Fehler: muss im selben Modul sein

val animal: Animal = Dog("Buddy", 3, "Golden Retriever")
```

**Besonderheiten:**
- `sealed` Schlüsselwort für geschlossene Hierarchien
- Alle Subklassen müssen im selben Modul definiert sein
- Nützlich für exhaustive Pattern Matching

**Weiterführende Links:**
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

// class Dog : Animal { }  // Fehler: final Klasse kann nicht vererbt werden

let animal = Animal(name: "Generic", age: 5)
```

**Besonderheiten:**
- `final` Schlüsselwort verhindert Vererbung
- Kann nicht als Basisklasse verwendet werden
- Final Methods können in nicht-final Klassen überschrieben werden

**Weiterführende Links:**
- [Swift Documentation - Final Classes](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/inheritance/)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Sealed Classes (seit Dart 3.0)
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

**Besonderheiten:**
- `sealed`-Modifier verhindert direkte Instanziierung und externe Vererbung
- Subtypen müssen in derselben Bibliothek definiert werden
- Ermöglicht Exhaustiveness Checking in Switch-Expressions
- Seit Dart 3.0

**Weiterführende Links:**
- [Dart Documentation - Class Modifiers](https://dart.dev/language/class-modifiers#sealed)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Sealed Classes (seit Groovy 4.0)
sealed class Shape permits Circle, Rectangle {}

final class Circle extends Shape {
    double radius
    Circle(double radius) { this.radius = radius }
}

final class Rectangle extends Shape {
    double width, height
    Rectangle(double w, double h) { this.width = w; this.height = h }
}

// class Triangle extends Shape {} // Fehler: nicht in permits-Liste
```

**Besonderheiten:**
- `sealed` Schlüsselwort seit Groovy 4.0
- `permits` definiert erlaubte Unterklassen
- Unterklassen müssen `final`, `sealed` oder `non-sealed` sein

**Weiterführende Links:**
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

% classdef SubClass < FinalClass  % Fehler: FinalClass ist Sealed
% end
```

**Besonderheiten:**
- `classdef (Sealed)` verhindert Vererbung
- Versuch, von einer Sealed-Klasse zu erben, verursacht einen Fehler

**Weiterführende Links:**
- [MATLAB Documentation - Sealed Classes](https://www.mathworks.com/help/matlab/matlab_oop/sealed-classes.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Sealed Classes (seit Delphi 2005)
type
  TFinalClass = class sealed
  public
    Value: Integer;
    procedure Show;
  end;

  // TChild = class(TFinalClass)  // Fehler: Kann nicht von sealed class erben
  // end;

procedure TFinalClass.Show;
begin
  WriteLn('Value: ', Value);
end;
```

**Besonderheiten:**
- `sealed`-Keyword verhindert Vererbung
- `final`-Keyword verhindert Überschreibung einzelner Methoden
- Seit Delphi 2005

**Weiterführende Links:**
- [Delphi Documentation - Sealed Classes](https://docwiki.embarcadero.com/RADStudio/en/Class_and_Record_Helpers_(Delphi))

</TabItem>
</Tabs>



---

### Sealed Classes (aus Interfaces)


Klassen, die nicht weiter abgeleitet werden können.


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

// Compiler-Fehler: Cannot derive from sealed type 'Circle'
// class ColoredCircle : Circle { }
```

**Besonderheiten:**
- `sealed`-Keyword verhindert Vererbung
- Kann nicht abgeleitet werden
- `sealed override` verhindert weitere Überschreibung

**Weiterführende Links:**
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

// Compiler-Fehler: cannot derive from 'final' base
// class ColoredCircle : public Circle { };
```

**Besonderheiten:**
- `final`-Keyword verhindert Vererbung
- Kann nicht abgeleitet werden
- `final` kann auch für Methoden verwendet werden

**Weiterführende Links:**
- [cppreference - final specifier](https://en.cppreference.com/w/cpp/language/final)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Sealed Classes: base/sealed/final (seit Dart 3.0)
sealed class Shape {
  double area();
}

class Circle extends Shape {
  final double radius;
  
  Circle(this.radius);
  
  @override
  double area() => 3.14159 * radius * radius;
}

// Compiler-Fehler: Cannot extend sealed class 'Shape'
// class Rectangle extends Shape { }
```

**Besonderheiten:**
- `sealed`-Keyword (seit Dart 3.0) für versiegelte Klassen
- Erlaubt exhaustive pattern matching
- Nur bestimmte Subklassen erlaubt

**Weiterführende Links:**
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

// Compiler-Fehler: Sealed types cannot be instantiated
// val shape = Shape()
```

**Besonderheiten:**
- `sealed`-Keyword für versiegelte Klassen
- Erlaubt exhaustive when-expressions
- Nur bestimmte Subklassen erlaubt
- Kann nicht direkt instanziiert werden

**Weiterführende Links:**
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

// Compiler-Fehler: illegal inheritance from sealed class
// case class Rectangle(width: Double, height: Double) extends Shape
```

**Besonderheiten:**
- `sealed`-Keyword für versiegelte Klassen
- Erlaubt exhaustive pattern matching
- Nur bestimmte Subklassen erlaubt
- Oft mit `case class` kombiniert

**Weiterführende Links:**
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

// Compiler-Fehler: Inheritance from a final class is not allowed
// class ColoredCircle: Circle { }
```

**Besonderheiten:**
- `final`-Keyword verhindert Vererbung
- Kann nicht abgeleitet werden
- `final` kann auch für Methoden verwendet werden

**Weiterführende Links:**
- [Swift Documentation - Final](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/inheritance/#Preventing-Overrides)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Sealed Interfaces (seit Groovy 4.0)
sealed interface Shape permits Circle, Rectangle {}

final class Circle implements Shape {
    double radius
}

final class Rectangle implements Shape {
    double width, height
}
```

**Besonderheiten:**
- `sealed` Schlüsselwort seit Groovy 4.0
- Auch für Interfaces verwendbar
- Unterklassen müssen `final`, `sealed` oder `non-sealed` sein

**Weiterführende Links:**
- [Groovy Documentation - Sealed Classes](https://groovy-lang.org/objectorientation.html#_sealed_classes)

</TabItem>
</Tabs>

## 8.3.6. Mixins / Traits

Wiederverwendbare Code-Einheiten, die in Klassen eingebunden werden können, um Funktionalität zu erweitern.

### Sprachen {#sprachen}

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

**Besonderheiten:**
- `mixin` Schlüsselwort für Mixins
- `with` für Mixin-Einbindung
- Mehrere Mixins mit Komma getrennt
- Lineare Method Resolution Order

**Weiterführende Links:**
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

**Besonderheiten:**
- `trait` Schlüsselwort für Traits
- `implements` für Trait-Einbindung
- Mehrere Traits mit Komma getrennt
- Traits können Default-Implementierungen haben

**Weiterführende Links:**
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

**Besonderheiten:**
- `trait` Schlüsselwort für Traits
- `use` für Trait-Einbindung
- Mehrere Traits mit Komma getrennt
- Traits können Properties und Methoden definieren

**Weiterführende Links:**
- [PHP Manual - Traits](https://www.php.net/manual/en/language.oop5.traits.php)

</TabItem>
<TabItem value="python" label="Python">

```python
# Mixins: durch Multiple Inheritance
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

**Besonderheiten:**
- Mixins durch Multiple Inheritance
- Mixin-Klassen enthalten nur Methoden, keine Daten
- Method Resolution Order (MRO) bestimmt Methodenauflösung
- Konvention: Mixin-Klassen enden oft mit "Mixin"

**Weiterführende Links:**
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

**Besonderheiten:**
- `module` für Mixins
- `include` für Mixin-Einbindung
- Mehrere Mixins können eingebunden werden
- Method Resolution durch Ancestor Chain

**Weiterführende Links:**
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

**Besonderheiten:**
- `trait` Schlüsselwort für Traits
- `extends` für erste Trait, `with` für weitere
- Mehrere Traits können kombiniert werden
- Traits können Default-Implementierungen haben

**Weiterführende Links:**
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
    mixin Printable;       // Fügt print() hinzu
    mixin Serializable;    // Fügt serialize() hinzu

    override string toString() {
        return "Person: " ~ name;
    }
}

auto p = new Person();
p.name = "Alice";
p.print();           // "Person: Alice"
p.serialize();       // "serialized"
```

**Besonderheiten:**
- `mixin template` für wiederverwendbare Code-Bausteine
- String Mixins (`mixin("code")`) für Code-Generierung zur Compile-Zeit
- Mixin Templates können Methoden, Felder und Aliase enthalten
- Keine Diamond-Problem-Konflikte wie bei Mehrfachvererbung

**Weiterführende Links:**
- [D Language Specification - Template Mixins](https://dlang.org/spec/template-mixin.html)

</TabItem>
</Tabs>


## 8.3.7. Traits (Rust-style)

Interface-ähnliche Konstrukte mit Default-Implementierungen und assoziierten Typen, die Verhalten definieren.

### Sprachen {#sprachen}

<Tabs availableTabs={['roc', 'rust']} orangeTabs={['gleam', 'lean4', 'mercury']}>
<TabItem value="gleam" label="Gleam">

```gleam
// Behaviours (Trait-ähnlich)
// Gleam hat keine Traits wie Rust, aber Behaviours für Erlang-Interop
// Workaround: Funktionen als Parameter (Ad-hoc Polymorphismus)
pub type Printable(a) {
  Printable(value: a, to_string: fn(a) -> String)
}

pub fn print(item: Printable(a)) -> String {
  item.to_string(item.value)
}
```

**Besonderheiten:**
- Gleam hat keine Traits im Rust-Sinne
- Behaviours existieren primär für Erlang/OTP-Interop (z.B. GenServer)
- Ad-hoc Polymorphismus wird über Funktionsparameter erreicht
- Gleam setzt auf Composition statt Vererbung/Traits

**Weiterführende Links:**
- [Gleam Documentation - Behaviours](https://hexdocs.pm/gleam_otp/)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Abilities (Rocs Konzept für Traits/Type Classes)
-- Eingebaute Abilities werden automatisch abgeleitet
-- z.B. Eq, Hash, Inspect

isEqual : a, a -> Bool where a implements Eq
isEqual = \x, y -> x == y

-- Custom Abilities
MyAbility implements
    myMethod : a -> Str where a implements MyAbility
```

**Besonderheiten:**
- Roc verwendet "Abilities" statt Traits
- Abilities sind ähnlich wie Haskell Type Classes
- Eingebaute Abilities: Eq, Hash, Inspect, Encoding, Decoding

**Weiterführende Links:**
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

**Besonderheiten:**
- `trait` Schlüsselwort für Traits
- Default-Implementierungen möglich
- Assoziierte Typen und Konstanten
- Trait Bounds für Generics
- Multiple Traits können implementiert werden

**Weiterführende Links:**
- [Rust Book - Traits](https://doc.rust-lang.org/book/ch10-02-traits.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Type Classes (ähnlich Rust Traits)
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
  describe p := s!"{p.name}, {p.age} Jahre"

-- Mit Default-Implementierung
class HasDefault (α : Type) where
  value : α
  show : α → String := fun _ => "default"
```

**Besonderheiten:**
- Type Classes sind Lean 4's Äquivalent zu Traits/Interfaces
- Unterstützen Default-Implementierungen
- Type Class-Hierarchien über `extends`
- Assoziierte Funktionen und Werte möglich
- Compile-Time-Auflösung (kein dynamischer Dispatch)

**Weiterführende Links:**
- [Functional Programming in Lean - Type Classes](https://lean-lang.org/functional_programming_in_lean/type-classes.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Type Classes (ähnlich Rust Traits)
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
        Name ++ ", " ++ int_to_string(Age) ++ " Jahre")
].
```

**Besonderheiten:**
- Type Classes sind Mercury's Äquivalent zu Traits/Interfaces
- Superclass-Constraints über `<=` (z.B. `describable(T) <= printable(T)`)
- Keine Default-Implementierungen in Type Classes
- Compile-Time-Auflösung (kein dynamischer Dispatch)

**Weiterführende Links:**
- [Mercury Language Reference - Type Classes](https://mercurylang.org/information/doc-release/mercury_ref/Type-classes.html)

</TabItem>
</Tabs>


## 8.3.8. No Inheritance (Composition only)

Sprachen, die keine Klassen-Vererbung unterstützen und stattdessen Composition verwenden.

### Sprachen {#sprachen}

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

**Besonderheiten:**
- Keine Klassen-Vererbung
- Composition durch Struct-Embedding
- Manuelle Delegation erforderlich

**Weiterführende Links:**
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

**Besonderheiten:**
- Keine Klassen-Vererbung
- Composition durch Records
- Funktionale Programmierung

**Weiterführende Links:**
- [Clojure Documentation - Records](https://clojure.org/reference/datatypes)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Composition only (Alternative zu Vererbung)
(defstruct animal
  name
  age)

(defstruct dog
  (animal (make-animal))
  breed)

(defvar dog (make-dog :animal (make-animal :name "Buddy" :age 3) :breed "Golden Retriever"))
(animal-name (dog-animal dog))  ; "Buddy"
```

**Besonderheiten:**
- Composition durch Struct-Embedding als Alternative zu Vererbung
- `defstruct` unterstützt auch Single Inheritance über `:include`, aber Composition ist ebenfalls möglich
- CLOS bietet Multiple Inheritance (siehe Multiple Inheritance)

**Weiterführende Links:**
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

**Besonderheiten:**
- Keine Klassen-Vererbung
- Composition durch Structs
- Funktionale Programmierung

**Weiterführende Links:**
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

**Besonderheiten:**
- Keine Klassen-Vererbung
- Composition durch Type Aliases
- Funktionale Programmierung

**Weiterführende Links:**
- [Elm Documentation - Records](https://guide.elm-lang.org/core_language.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% No Inheritance: Composition only
-record(animal, {name = "", age = 0}).
-record(dog, {animal = #animal{}, breed = ""}).

Dog = #dog{animal = #animal{name = "Buddy", age = 3}, breed = "Golden Retriever"}.
```

**Besonderheiten:**
- Keine Klassen-Vererbung
- Composition durch Records
- Funktionale Programmierung

**Weiterführende Links:**
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

**Besonderheiten:**
- Keine Klassen-Vererbung
- Composition durch Struct Embedding
- Interfaces ermöglichen Polymorphismus

**Weiterführende Links:**
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

**Besonderheiten:**
- Keine Klassen-Vererbung
- Composition durch Algebraic Data Types
- Type Classes für Polymorphismus

**Weiterführende Links:**
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

**Besonderheiten:**
- Keine Klassen-Vererbung
- Composition durch Records
- Funktionale Programmierung mit Dependent Types

**Weiterführende Links:**
- [Idris Documentation - Records](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html#records)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// No Inheritance: Composition only (vor ES6)
function Animal(name, age) {
    this.name = name;
    this.age = age;
}

function Dog(name, age, breed) {
    Animal.call(this, name, age);  // Composition durch Delegation
    this.breed = breed;
}

var dog = new Dog("Buddy", 3, "Golden Retriever");
```

**Besonderheiten:**
- Vor ES6: Keine Klassen-Vererbung
- Composition durch Funktions-Delegation
- ES6 Classes unterstützen Vererbung (siehe Single Inheritance)

**Weiterführende Links:**
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

**Besonderheiten:**
- Keine Klassen-Vererbung
- Composition durch Metatables
- Prototyp-basierte Programmierung

**Weiterführende Links:**
- [Lua Documentation - Object-Oriented Programming](https://www.lua.org/pil/16.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% No Inheritance: Composition mit deklarierten Typen
:- type animal ---> animal(name :: string, age :: int).

:- type dog ---> dog(animal :: animal, breed :: string).

Dog = dog(animal("Buddy", 3), "Golden Retriever"),
Dog ^ animal ^ name    % "Buddy"
Dog ^ breed            % "Golden Retriever"
```

**Besonderheiten:**
- Keine Klassen und keine Vererbung
- Composition durch algebraische Datentypen mit benannten Feldern
- Type Classes für Polymorphismus (statt Vererbung)
- Zugriff auf verschachtelte Felder über `^`-Operator

**Weiterführende Links:**
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

**Besonderheiten:**
- Keine Klassen-Vererbung im traditionellen Sinne
- Composition durch Records
- Funktionale Programmierung

**Weiterführende Links:**
- [OCaml Documentation - Records](https://ocaml.org/docs/data-types)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# No Inheritance: Composition only (ohne use base)
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

**Besonderheiten:**
- Ohne `use base`: keine Vererbung
- Composition durch Hash-Referenzen
- `use base` ermöglicht Vererbung (siehe Multiple Inheritance)

**Weiterführende Links:**
- [Perl Documentation - Objects](https://perldoc.perl.org/perlobj)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% No Inheritance: Composition mit Compound Terms
% Datenstrukturen benötigen keine Deklaration
Dog = dog(animal('Buddy', 3), 'Golden Retriever'),

% Zugriff über Unifikation / Pattern Matching
Dog = dog(animal(Name, _Age), Breed)
% Name = 'Buddy', Breed = 'Golden Retriever'
```

**Besonderheiten:**
- Keine Klassen und keine Vererbung
- Composition durch verschachtelte Compound Terms (Funktoren)
- Datenstrukturen sind implizit — keine Deklaration nötig
- Zugriff auf Bestandteile über Unifikation und Pattern Matching

**Weiterführende Links:**
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

**Besonderheiten:**
- Keine Klassen-Vererbung
- Composition durch Type Aliases
- Funktionale Programmierung

**Weiterführende Links:**
- [PureScript Documentation - Records](https://pursuit.purescript.org/packages/purescript-prelude/docs/Data.Record)

</TabItem>
<TabItem value="r" label="R">

```r
# Komposition ohne formale Vererbung (Basis-R)
Animal <- function(name, age) {
  structure(list(name = name, age = age), class = "Animal")
}

Dog <- function(name, age, breed) {
  structure(list(animal = Animal(name, age), breed = breed), class = "Dog")
}

dog <- Dog("Buddy", 3, "Golden Retriever")
```

**Besonderheiten:**
- Basis-R (ohne S4/R6) nutzt Komposition über Listen
- S3-Klassen bieten einfache Vererbung über `class`-Attribut
- S4/R6-Klassen unterstützen formale Single Inheritance

**Weiterführende Links:**
- [R Documentation - Classes](https://cran.r-project.org/doc/manuals/r-release/R-lang.html#Object_002doriented-programming)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
; Composition mit Structs (Alternative zu Klassen-Vererbung)
(struct animal (name age))
(struct dog (animal breed))

(define my-dog (dog (animal "Buddy" 3) "Golden Retriever"))
(animal-name (dog-animal my-dog))  ; "Buddy"
```

**Besonderheiten:**
- Structs verwenden Composition statt Vererbung
- Racket hat zusätzlich ein Klassen-System mit Vererbung
- Structs sind leichtgewichtiger als Klassen

**Weiterführende Links:**
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

**Besonderheiten:**
- Keine Klassen-Vererbung im traditionellen Sinne
- Composition durch Listen
- Funktionale Programmierung

**Weiterführende Links:**
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

**Besonderheiten:**
- Keine Klassen-Vererbung im traditionellen Sinne
- Composition durch Associations
- Symbolische Programmierung

**Weiterführende Links:**
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

**Besonderheiten:**
- Keine Klassen-Vererbung
- Composition durch Struct-Embedding
- Manuelle Delegation erforderlich

**Weiterführende Links:**
- [Zig Documentation - Structs](https://ziglang.org/documentation/0.11.0/#structs)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// Keine Vererbung, nur Composition
pub type Animal {
  Animal(name: String, sound: String)
}

pub fn speak(animal: Animal) -> String {
  animal.name <> " sagt " <> animal.sound
}

let dog = Animal(name: "Hund", sound: "Wuff")
let cat = Animal(name: "Katze", sound: "Miau")
```

**Besonderheiten:**
- Gleam hat keine Vererbung
- Composition über Custom Types und Funktionen
- Funktionale Programmierung ohne OOP-Hierarchien

**Weiterführende Links:**
- [Gleam Documentation - Custom Types](https://tour.gleam.run/data-types/custom-types/)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Keine Vererbung für konkrete Typen
abstract type Shape end

struct Circle <: Shape  # Nur Subtyping von abstrakten Typen
    radius::Float64
end

struct Rectangle <: Shape
    width::Float64
    height::Float64
end

# Komposition statt Vererbung
struct ColoredShape
    shape::Shape
    color::String
end

# Verhalten über Multiple Dispatch
area(c::Circle) = π * c.radius^2
area(r::Rectangle) = r.width * r.height
```

**Besonderheiten:**
- Konkrete Typen (structs) können nicht voneinander erben
- Nur abstrakte Typen bilden eine Typhierarchie
- Verhalten wird über Multiple Dispatch statt Vererbung geteilt
- Komposition wird als primäres Design-Pattern verwendet

**Weiterführende Links:**
- [Julia Documentation - Types](https://docs.julialang.org/en/v1/manual/types/)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Keine Vererbung: Komposition mit Structs und Funktionen
struct circle
  radius: float64

struct rectangle
  width: float64
  height: float64

// Verhalten über ADTs und Funktionen
type shape
  CircleShape(c: circle)
  RectShape(r: rectangle)

fun area(s: shape): float64
  match s
    CircleShape(c) -> 3.14159 * c.radius * c.radius
    RectShape(r)   -> r.width * r.height

// Komposition statt Vererbung
struct colored-shape
  shape: shape
  color: string
```

**Besonderheiten:**
- Koka hat keine Klassen und keine Vererbung
- Datenmodellierung über `struct` (Records) und `type` (ADTs)
- Verhalten wird über Funktionen und Pattern Matching definiert
- Komposition ist das primäre Design-Pattern
- Effekte ersetzen viele Muster, die in OOP über Vererbung gelöst werden

**Weiterführende Links:**
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

**Besonderheiten:**
- Keine Klassen-Vererbung
- Composition durch Struktur-Einbettung
- Type Classes für Polymorphismus (statt Vererbung)
- `extends` existiert, überträgt aber nur Felder (keine Methoden-Vererbung)

**Weiterführende Links:**
- [Functional Programming in Lean - Structures](https://lean-lang.org/functional_programming_in_lean/getting-to-know/structures.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Keine Vererbung: Komposition mit Records und Funktionen
Animal : { name : Str, sound : Str }

makeSound : Animal -> Str
makeSound = \animal -> "$(animal.name) sagt $(animal.sound)"

dog = { name: "Hund", sound: "Wuff" }
cat = { name: "Katze", sound: "Miau" }
```

**Besonderheiten:**
- Keine Vererbung
- Komposition durch Records und Funktionen
- Funktionale Programmierung ohne OOP-Hierarchien

**Weiterführende Links:**
- [Roc Documentation](https://www.roc-lang.org/tutorial)

</TabItem>
</Tabs>

