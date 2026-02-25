---
slug: /objektorientierung/polymorphismus
title: 8.4. Polymorphism
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import FilteredTabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 8.4. Polymorphism

Generic types and polymorphic concepts.

## 8.4.1. Method Overriding

Overriding methods from a base class in a derived class.

### Languages {#sprachen}

<FilteredTabs availableTabs={['ada', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'eiffel', 'fsharp', 'groovy', 'haxe', 'java', 'javascript', 'kotlin', 'matlab', 'nim', 'object-pascal', 'objective-c', 'php', 'python', 'ruby', 'scala', 'swift', 'typescript', 'vbnet']}>
<TabItem value="ada" label="Ada">

```ada
-- Method Overriding: Tagged Types
package Animals is
    type Animal is tagged record
        Name : String(1..10);
    end record;
    
    procedure Make_Sound (A : Animal);
    
    type Dog is new Animal with null record;
    overriding procedure Make_Sound (D : Dog);
end Animals;

package body Animals is
    procedure Make_Sound (A : Animal) is
    begin
        Put_Line("Some sound");
    end Make_Sound;
    
    overriding procedure Make_Sound (D : Dog) is
    begin
        Put_Line("Woof!");
    end Make_Sound;
end Animals;
```

**Special features:**
- Use of `overriding` pragma for explicit overriding
- Tagged Types enable polymorphism
- Compiler checks for correct method signature

**Further reading:**
- [Ada Reference Manual - Tagged Types](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-3-9.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Method Overriding: virtual/override
class Animal {
    public virtual void MakeSound() {
        Console.WriteLine("Some sound");
    }
}

class Dog : Animal {
    public override void MakeSound() {
        Console.WriteLine("Woof!");
    }
}

Animal animal = new Dog();
animal.MakeSound(); // "Woof!"
```

**Special features:**
- Base class method must be `virtual` or `abstract`
- Overriding method must use `override`
- `new` keyword for Method Hiding (not Overriding)

**Further reading:**
- [Microsoft C# Documentation - Override](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/override)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Method Overriding: virtual functions
class Animal {
public:
    virtual void makeSound() {
        std::cout << "Some sound" << std::endl;
    }
};

class Dog : public Animal {
public:
    void makeSound() override {
        std::cout << "Woof!" << std::endl;
    }
};

Animal* animal = new Dog();
animal->makeSound(); // "Woof!"
```

**Special features:**
- Base class method must be `virtual`
- `override` keyword (since C++11) for explicit overriding
- Without `virtual` in base class: Method Hiding instead of Overriding

**Further reading:**
- [cppreference - Virtual Functions](https://en.cppreference.com/w/cpp/language/virtual)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Method Overriding
class Animal
  def make_sound
    puts "Some sound"
  end
end

class Dog < Animal
  def make_sound
    puts "Woof!"
  end
end

animal = Dog.new
animal.make_sound # "Woof!"
```

**Special features:**
- Automatic overriding without special keywords
- Polymorphism through inheritance

**Further reading:**
- [Crystal Documentation - Inheritance](https://crystal-lang.org/reference/1.11/syntax_and_semantics/inheritance.html)

</TabItem>
<TabItem value="d" label="D">

```d
// Method Overriding: override keyword
class Animal {
    void makeSound() {
        writeln("Some sound");
    }
}

class Dog : Animal {
    override void makeSound() {
        writeln("Woof!");
    }
}

Animal animal = new Dog();
animal.makeSound(); // "Woof!"
```

**Special features:**
- `override` keyword for explicit overriding
- Compiler checks for correct method signature
- Base class method does not need to be `virtual` (automatically virtual)

**Further reading:**
- [D Language Specification - Classes](https://dlang.org/spec/class.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Method Overriding: @override annotation
class Animal {
  void makeSound() {
    print('Some sound');
  }
}

class Dog extends Animal {
  @override
  void makeSound() {
    print('Woof!');
  }
}

Animal animal = Dog();
animal.makeSound(); // "Woof!"
```

**Special features:**
- `@override` annotation for explicit overriding (optional, but recommended)
- Compiler checks for correct method signature when using `@override`

**Further reading:**
- [Dart Language Tour - Classes](https://dart.dev/guides/language/language-tour#classes)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
-- Method Overriding: Redefinition
class ANIMAL
feature
    make_sound is
        do
            print("Some sound%N")
        end
end

class DOG
inherit
    ANIMAL
        redefine make_sound end
feature
    make_sound is
        do
            print("Woof!%N")
        end
end
```

**Special features:**
- `redefine` clause in the `inherit` clause required
- Explicit redefinition for better readability

**Further reading:**
- [Eiffel Documentation - Inheritance](https://www.eiffel.org/doc/eiffel/ET-_Inheritance)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Method Overriding: override keyword
type Animal() =
    abstract member MakeSound: unit -> unit
    default this.MakeSound() = printfn "Some sound"

type Dog() =
    inherit Animal()
    override this.MakeSound() = printfn "Woof!"

let animal: Animal = Dog()
animal.MakeSound() // "Woof!"
```

**Special features:**
- Base class method must be `abstract` or have `default` implementation
- `override` keyword for explicit overriding

**Further reading:**
- [F# Documentation - Inheritance](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/inheritance)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Method Overriding
class Animal {
    void makeSound() {
        println("Some sound")
    }
}

class Dog extends Animal {
    @Override
    void makeSound() {
        println("Woof!")
    }
}

Animal animal = new Dog()
animal.makeSound() // "Woof!"
```

**Special features:**
- `@Override` annotation optional, but recommended
- Automatic overriding without annotation possible

**Further reading:**
- [Groovy Documentation - Object Orientation](https://groovy-lang.org/objectorientation.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Method Overriding: override keyword
class Animal {
    public function makeSound():Void {
        trace("Some sound");
    }
}

class Dog extends Animal {
    override public function makeSound():Void {
        trace("Woof!");
    }
}

var animal:Animal = new Dog();
animal.makeSound(); // "Woof!"
```

**Special features:**
- `override` keyword for explicit overriding
- Compiler checks for correct method signature

**Further reading:**
- [Haxe Manual - Class Fields](https://haxe.org/manual/class-field-override.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Method Overriding: @Override annotation
class Animal {
    public void makeSound() {
        System.out.println("Some sound");
    }
}

class Dog extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Woof!");
    }
}

Animal animal = new Dog();
animal.makeSound(); // "Woof!"
```

**Special features:**
- `@Override` annotation optional, but recommended
- Compiler checks for correct method signature when using `@Override`
- Base class method does not need to be `virtual` (all methods are virtual)

**Further reading:**
- [Oracle Java Documentation - Overriding Methods](https://docs.oracle.com/javase/tutorial/java/IandI/override.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Method Overriding: override keyword
open class Animal {
    open fun makeSound() {
        println("Some sound")
    }
}

class Dog : Animal() {
    override fun makeSound() {
        println("Woof!")
    }
}

val animal: Animal = Dog()
animal.makeSound() // "Woof!"
```

**Special features:**
- Base class must be `open`
- Base class method must be `open`
- `override` keyword for explicit overriding

**Further reading:**
- [Kotlin Documentation - Inheritance](https://kotlinlang.org/docs/inheritance.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Method Overriding: method keyword
type Animal = ref object of RootObj
method makeSound(self: Animal) {.base.} =
  echo "Some sound"

type Dog = ref object of Animal
method makeSound(self: Dog) =
  echo "Woof!"

var animal: Animal = Dog()
animal.makeSound() # "Woof!"
```

**Special features:**
- `method` keyword for polymorphic methods
- `{.base.}` pragma for base class method
- Procedures (`proc`) are not polymorphic, only methods (`method`)

**Further reading:**
- [Nim Manual - Methods](https://nim-lang.org/docs/manual.html#methods)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Method Overriding: virtual/override
type
  Animal = class
    procedure MakeSound; virtual;
  end;
  
  Dog = class(Animal)
    procedure MakeSound; override;
  end;

procedure Animal.MakeSound;
begin
  WriteLn('Some sound');
end;

procedure Dog.MakeSound;
begin
  WriteLn('Woof!');
end;
```

**Special features:**
- Base class method must be `virtual`
- Overriding method must use `override`
- `reintroduce` for Method Hiding (not Overriding)

**Further reading:**
- [Delphi Documentation - Virtual Methods](https://docwiki.embarcadero.com/RADStudio/en/Methods#Virtual_Methods)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Method Overriding
@interface Animal : NSObject
- (void)makeSound;
@end

@implementation Animal
- (void)makeSound {
    NSLog(@"Some sound");
}
@end

@interface Dog : Animal
@end

@implementation Dog
- (void)makeSound {
    NSLog(@"Woof!");
}
@end
```

**Special features:**
- Automatic overriding without special keywords
- All methods are virtual (dynamic dispatch)

**Further reading:**
- [Apple Objective-C Documentation - Inheritance](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Inheritance/Inheritance.html)

</TabItem>
<TabItem value="php" label="PHP">

```php
// Method Overriding
class Animal {
    public function makeSound() {
        echo "Some sound\n";
    }
}

class Dog extends Animal {
    public function makeSound() {
        echo "Woof!\n";
    }
}

$animal = new Dog();
$animal->makeSound(); // "Woof!"
```

**Special features:**
- Automatic overriding without special keywords
- All methods are virtual (dynamic dispatch)

**Further reading:**
- [PHP Documentation - Object Inheritance](https://www.php.net/manual/en/language.oop5.inheritance.php)

</TabItem>
<TabItem value="python" label="Python">

```python
# Method Overriding
class Animal:
    def make_sound(self):
        print("Some sound")

class Dog(Animal):
    def make_sound(self):
        print("Woof!")

animal = Dog()
animal.make_sound()  # "Woof!"
```

**Special features:**
- Automatic overriding without special keywords
- All methods are virtual (dynamic dispatch)
- `super()` for accessing base class method

**Further reading:**
- [Python Documentation - Inheritance](https://docs.python.org/3/tutorial/classes.html#inheritance)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Method Overriding
class Animal
  def make_sound
    puts "Some sound"
  end
end

class Dog < Animal
  def make_sound
    puts "Woof!"
  end
end

animal = Dog.new
animal.make_sound  # "Woof!"
```

**Special features:**
- Automatic overriding without special keywords
- All methods are virtual (dynamic dispatch)
- `super` for accessing base class method

**Further reading:**
- [Ruby Documentation - Inheritance](https://ruby-doc.org/docs/ruby-doc-bundle/UsersGuide/rg/inheritance.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Method Overriding: override keyword
class Animal {
  def makeSound(): Unit = {
    println("Some sound")
  }
}

class Dog extends Animal {
  override def makeSound(): Unit = {
    println("Woof!")
  }
}

val animal: Animal = new Dog()
animal.makeSound() // "Woof!"
```

**Special features:**
- `override` keyword for explicit overriding
- Compiler checks for correct method signature
- Base class method does not need to be `virtual` (all methods are virtual)

**Further reading:**
- [Scala Documentation - Classes](https://docs.scala-lang.org/tour/classes.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Method Overriding: override keyword
class Animal {
    func makeSound() {
        print("Some sound")
    }
}

class Dog: Animal {
    override func makeSound() {
        print("Woof!")
    }
}

let animal: Animal = Dog()
animal.makeSound() // "Woof!"
```

**Special features:**
- `override` keyword for explicit overriding
- Compiler checks for correct method signature
- Base class method does not need to be `virtual` (all methods are virtual)

**Further reading:**
- [Swift Documentation - Inheritance](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/inheritance/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Method Overriding
class Animal {
    makeSound(): void {
        console.log("Some sound");
    }
}

class Dog extends Animal {
    makeSound(): void {
        console.log("Woof!");
    }
}

const animal: Animal = new Dog();
animal.makeSound(); // "Woof!"
```

**Special features:**
- Automatic overriding without special keywords
- All methods are virtual (dynamic dispatch)
- TypeScript compiler checks for correct method signature

**Further reading:**
- [TypeScript Handbook - Classes](https://www.typescriptlang.org/docs/handbook/2/classes.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Method Overriding: Overrides keyword
Class Animal
    Public Overridable Sub MakeSound()
        Console.WriteLine("Some sound")
    End Sub
End Class

Class Dog
    Inherits Animal
    Public Overrides Sub MakeSound()
        Console.WriteLine("Woof!")
    End Sub
End Class
```

**Special features:**
- Base class method must be `Overridable`
- Overriding method must use `Overrides`
- `Shadows` for Method Hiding (not Overriding)

**Further reading:**
- [Microsoft VB.NET Documentation - Overrides](https://learn.microsoft.com/en-us/dotnet/visual-basic/language-reference/modifiers/overrides)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Method Overriding (since ES6)
class Animal {
    speak() {
        return "...";
    }
}

class Dog extends Animal {
    speak() {
        return "Woof!";
    }
}

class Cat extends Animal {
    speak() {
        return "Meow!";
    }
}

const dog = new Dog();
const cat = new Cat();
console.log(dog.speak()); // "Woof!"
console.log(cat.speak()); // "Meow!"
```

**Special features:**
- All methods are implicitly overridable (no `virtual` keyword needed)
- `super.method()` calls the parent class method
- Also possible before ES6 via prototype chain

**Further reading:**
- [MDN Web Docs - Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
classdef Animal
    methods
        function speak(obj)
            disp('...');
        end
    end
end

classdef Dog < Animal
    methods
        function speak(obj)
            disp('Wuff!');
        end
    end
end

d = Dog();
d.speak();  % "Wuff!"
```

**Special features:**
- Methods are overridden by methods with the same name in subclasses
- No `override` keyword required
- `Sealed` methods cannot be overridden

**Further reading:**
- [MATLAB Documentation - Method Overriding](https://www.mathworks.com/help/matlab/matlab_oop/modifying-superclass-methods.html)

</TabItem>
</FilteredTabs>


## 8.4.2. Virtual Methods

Methods that are called at runtime based on the actual object type.

### Languages {#sprachen}

<FilteredTabs availableTabs={['cpp', 'csharp', 'd', 'dart', 'fsharp', 'object-pascal', 'vbnet']}>
<TabItem value="csharp" label="C#">

```csharp
// Virtual Methods: virtual keyword
class Animal {
    public virtual void MakeSound() {
        Console.WriteLine("Some sound");
    }
}

class Dog : Animal {
    public override void MakeSound() {
        Console.WriteLine("Woof!");
    }
}

Animal animal = new Dog();
animal.MakeSound(); // "Woof!" (virtual dispatch)
```

**Special features:**
- `virtual` keyword for polymorphic methods
- Without `virtual`: Method Hiding instead of Overriding
- `sealed override` prevents further overriding

**Further reading:**
- [Microsoft C# Documentation - Virtual](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/virtual)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Virtual Methods: virtual keyword
class Animal {
public:
    virtual void makeSound() {
        std::cout << "Some sound" << std::endl;
    }
};

class Dog : public Animal {
public:
    void makeSound() override {
        std::cout << "Woof!" << std::endl;
    }
};

Animal* animal = new Dog();
animal->makeSound(); // "Woof!" (virtual dispatch)
```

**Special features:**
- `virtual` keyword for polymorphic methods
- Without `virtual`: Static Binding instead of Dynamic Dispatch
- `final` prevents further overriding

**Further reading:**
- [cppreference - Virtual Functions](https://en.cppreference.com/w/cpp/language/virtual)

</TabItem>
<TabItem value="d" label="D">

```d
// Virtual Methods: automatically virtual
class Animal {
    void makeSound() {
        writeln("Some sound");
    }
}

class Dog : Animal {
    override void makeSound() {
        writeln("Woof!");
    }
}

Animal animal = new Dog();
animal.makeSound(); // "Woof!" (virtual dispatch)
```

**Special features:**
- All methods are automatically virtual
- `final` prevents further overriding
- `override` keyword for explicit overriding

**Further reading:**
- [D Language Specification - Classes](https://dlang.org/spec/class.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Virtual Methods: abstract/default
type Animal() =
    abstract member MakeSound: unit -> unit
    default this.MakeSound() = printfn "Some sound"

type Dog() =
    inherit Animal()
    override this.MakeSound() = printfn "Woof!"

let animal: Animal = Dog()
animal.MakeSound() // "Woof!" (virtual dispatch)
```

**Special features:**
- `abstract` for virtual methods without implementation
- `default` for virtual methods with default implementation
- `override` for overriding

**Further reading:**
- [F# Documentation - Inheritance](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/inheritance)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Virtual Methods: virtual keyword
type
  Animal = class
    procedure MakeSound; virtual;
  end;
  
  Dog = class(Animal)
    procedure MakeSound; override;
  end;

procedure Animal.MakeSound;
begin
  WriteLn('Some sound');
end;

procedure Dog.MakeSound;
begin
  WriteLn('Woof!');
end;
```

**Special features:**
- `virtual` keyword for polymorphic methods
- Without `virtual`: Static Binding instead of Dynamic Dispatch
- `final` prevents further overriding

**Further reading:**
- [Delphi Documentation - Virtual Methods](https://docwiki.embarcadero.com/RADStudio/en/Methods#Virtual_Methods)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Virtual Methods: Overridable keyword
Class Animal
    Public Overridable Sub MakeSound()
        Console.WriteLine("Some sound")
    End Sub
End Class

Class Dog
    Inherits Animal
    Public Overrides Sub MakeSound()
        Console.WriteLine("Woof!")
    End Sub
End Class
```

**Special features:**
- `Overridable` keyword for polymorphic methods
- Without `Overridable`: Method Hiding instead of Overriding
- `NotOverridable` prevents further overriding

**Further reading:**
- [Microsoft VB.NET Documentation - Overridable](https://learn.microsoft.com/en-us/dotnet/visual-basic/language-reference/modifiers/overridable)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Virtual Methods: All methods are virtual by default
class Animal {
  String speak() => 'Animal sound';
}

class Dog extends Animal {
  @override
  String speak() => 'Woof!';
}

class Cat extends Animal {
  @override
  String speak() => 'Meow!';
}

// Dynamic dispatch
Animal animal = Dog();
print(animal.speak());  // Woof! (not "Animal sound")
```

**Special features:**
- All instance methods are virtual by default (no `virtual` keyword needed)
- `@override` annotation recommended, but not enforced
- No mechanism to mark methods as non-virtual
- Dynamic dispatch for all instance methods

**Further reading:**
- [Dart Documentation - Extending a Class](https://dart.dev/language/extend)

</TabItem>
</FilteredTabs>


## 8.4.3. Dynamic Dispatch

Runtime mechanism where the method to be called is determined based on the actual object type.

### Languages {#sprachen}

<FilteredTabs availableTabs={['ada', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'eiffel', 'fsharp', 'groovy', 'haxe', 'java', 'javascript', 'julia', 'kotlin', 'nim', 'object-pascal', 'objective-c', 'php', 'python', 'ruby', 'scala', 'swift', 'typescript', 'vbnet']}>
<TabItem value="ada" label="Ada">

```ada
-- Dynamic Dispatch: Tagged Types
package Animals is
    type Animal is tagged record
        Name : String(1..10);
    end record;
    
    procedure Make_Sound (A : Animal'Class);
    
    type Dog is new Animal with null record;
    overriding procedure Make_Sound (D : Dog);
end Animals;

procedure Process_Animal (A : Animal'Class) is
begin
    Make_Sound(A); -- Dynamic dispatch
end Process_Animal;
```

**Special features:**
- Tagged Types enable Dynamic Dispatch
- `'Class` attribute for Class-Wide Types
- Dispatch occurs at runtime based on tag

**Further reading:**
- [Ada Reference Manual - Tagged Types](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-3-9.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Dynamic Dispatch: virtual methods
class Animal {
    public virtual void MakeSound() {
        Console.WriteLine("Some sound");
    }
}

class Dog : Animal {
    public override void MakeSound() {
        Console.WriteLine("Woof!");
    }
}

void ProcessAnimal(Animal animal) {
    animal.MakeSound(); // Dynamic dispatch
}

ProcessAnimal(new Dog()); // "Woof!"
```

**Special features:**
- Virtual Methods enable Dynamic Dispatch
- Dispatch occurs at runtime via vtable
- `sealed` prevents further dispatch levels

**Further reading:**
- [Microsoft C# Documentation - Virtual](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/virtual)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Dynamic Dispatch: virtual functions
class Animal {
public:
    virtual void makeSound() {
        std::cout << "Some sound" << std::endl;
    }
};

class Dog : public Animal {
public:
    void makeSound() override {
        std::cout << "Woof!" << std::endl;
    }
};

void processAnimal(Animal* animal) {
    animal->makeSound(); // Dynamic dispatch
}

processAnimal(new Dog()); // "Woof!"
```

**Special features:**
- Virtual Functions enable Dynamic Dispatch
- Dispatch occurs at runtime via vtable
- Without `virtual`: Static Binding at compile time

**Further reading:**
- [cppreference - Virtual Functions](https://en.cppreference.com/w/cpp/language/virtual)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Dynamic Dispatch: automatic
class Animal
  def make_sound
    puts "Some sound"
  end
end

class Dog < Animal
  def make_sound
    puts "Woof!"
  end
end

def process_animal(animal : Animal)
  animal.make_sound # Dynamic dispatch
end

process_animal(Dog.new) # "Woof!"
```

**Special features:**
- All method calls are automatically dynamic dispatch
- Dispatch occurs at runtime based on object type

**Further reading:**
- [Crystal Documentation - Inheritance](https://crystal-lang.org/reference/1.11/syntax_and_semantics/inheritance.html)

</TabItem>
<TabItem value="d" label="D">

```d
// Dynamic Dispatch: automatic virtual
class Animal {
    void makeSound() {
        writeln("Some sound");
    }
}

class Dog : Animal {
    override void makeSound() {
        writeln("Woof!");
    }
}

void processAnimal(Animal animal) {
    animal.makeSound(); // Dynamic dispatch
}

processAnimal(new Dog()); // "Woof!"
```

**Special features:**
- All methods are automatically virtual
- Dispatch occurs at runtime via vtable
- `final` prevents further dispatch levels

**Further reading:**
- [D Language Specification - Classes](https://dlang.org/spec/class.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Dynamic Dispatch: automatic
class Animal {
  void makeSound() {
    print('Some sound');
  }
}

class Dog extends Animal {
  @override
  void makeSound() {
    print('Woof!');
  }
}

void processAnimal(Animal animal) {
  animal.makeSound(); // Dynamic dispatch
}

processAnimal(Dog()); // "Woof!"
```

**Special features:**
- All method calls are automatically dynamic dispatch
- Dispatch occurs at runtime based on object type

**Further reading:**
- [Dart Language Tour - Classes](https://dart.dev/guides/language/language-tour#classes)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
-- Dynamic Dispatch: automatic
class ANIMAL
feature
    make_sound is
        do
            print("Some sound%N")
        end
end

class DOG
inherit
    ANIMAL
        redefine make_sound end
feature
    make_sound is
        do
            print("Woof!%N")
        end
end
```

**Special features:**
- All method calls are automatically dynamic dispatch
- Dispatch occurs at runtime based on object type

**Further reading:**
- [Eiffel Documentation - Inheritance](https://www.eiffel.org/doc/eiffel/ET-_Inheritance)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Dynamic Dispatch: abstract/default
type Animal() =
    abstract member MakeSound: unit -> unit
    default this.MakeSound() = printfn "Some sound"

type Dog() =
    inherit Animal()
    override this.MakeSound() = printfn "Woof!"

let processAnimal (animal: Animal) =
    animal.MakeSound() // Dynamic dispatch

processAnimal (Dog()) // "Woof!"
```

**Special features:**
- Abstract/Default Methods enable Dynamic Dispatch
- Dispatch occurs at runtime based on object type

**Further reading:**
- [F# Documentation - Inheritance](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/inheritance)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Dynamic Dispatch: automatic
class Animal {
    void makeSound() {
        println("Some sound")
    }
}

class Dog extends Animal {
    @Override
    void makeSound() {
        println("Woof!")
    }
}

def processAnimal(Animal animal) {
    animal.makeSound() // Dynamic dispatch
}

processAnimal(new Dog()) // "Woof!"
```

**Special features:**
- All method calls are automatically dynamic dispatch
- Dispatch occurs at runtime based on object type

**Further reading:**
- [Groovy Documentation - Object Orientation](https://groovy-lang.org/objectorientation.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Dynamic Dispatch: automatic
class Animal {
    public function makeSound():Void {
        trace("Some sound");
    }
}

class Dog extends Animal {
    override public function makeSound():Void {
        trace("Woof!");
    }
}

function processAnimal(animal:Animal):Void {
    animal.makeSound(); // Dynamic dispatch
}

processAnimal(new Dog()); // "Woof!"
```

**Special features:**
- All method calls are automatically dynamic dispatch
- Dispatch occurs at runtime based on object type

**Further reading:**
- [Haxe Manual - Class Fields](https://haxe.org/manual/class-field-override.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Dynamic Dispatch: automatic
class Animal {
    public void makeSound() {
        System.out.println("Some sound");
    }
}

class Dog extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Woof!");
    }
}

void processAnimal(Animal animal) {
    animal.makeSound(); // Dynamic dispatch
}

processAnimal(new Dog()); // "Woof!"
```

**Special features:**
- All method calls are automatically dynamic dispatch
- Dispatch occurs at runtime via vtable
- `final` prevents further dispatch levels

**Further reading:**
- [Oracle Java Documentation - Overriding Methods](https://docs.oracle.com/javase/tutorial/java/IandI/override.html)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Dynamic Dispatch: Multiple Dispatch
abstract type Animal end

struct Dog <: Animal end

make_sound(::Animal) = println("Some sound")
make_sound(::Dog) = println("Woof!")

function process_animal(animal::Animal)
    make_sound(animal) # Dynamic dispatch
end

process_animal(Dog()) # "Woof!"
```

**Special features:**
- Multiple Dispatch instead of Single Dispatch
- Dispatch occurs at runtime based on all argument types
- Very flexible dispatch system

**Further reading:**
- [Julia Documentation - Methods](https://docs.julialang.org/en/v1/manual/methods/)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Dynamic Dispatch: automatic
open class Animal {
    open fun makeSound() {
        println("Some sound")
    }
}

class Dog : Animal() {
    override fun makeSound() {
        println("Woof!")
    }
}

fun processAnimal(animal: Animal) {
    animal.makeSound() // Dynamic dispatch
}

processAnimal(Dog()) // "Woof!"
```

**Special features:**
- All method calls are automatically dynamic dispatch
- Dispatch occurs at runtime based on object type
- `final` prevents further dispatch levels

**Further reading:**
- [Kotlin Documentation - Inheritance](https://kotlinlang.org/docs/inheritance.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Dynamic Dispatch: method keyword
type Animal = ref object of RootObj
method makeSound(self: Animal) {.base.} =
  echo "Some sound"

type Dog = ref object of Animal
method makeSound(self: Dog) =
  echo "Woof!"

proc processAnimal(animal: Animal) =
  animal.makeSound() # Dynamic dispatch

processAnimal(Dog()) # "Woof!"
```

**Special features:**
- `method` keyword for Dynamic Dispatch
- `proc` uses Static Binding
- Dispatch occurs at runtime based on object type

**Further reading:**
- [Nim Manual - Methods](https://nim-lang.org/docs/manual.html#methods)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Dynamic Dispatch: virtual methods
type
  Animal = class
    procedure MakeSound; virtual;
  end;
  
  Dog = class(Animal)
    procedure MakeSound; override;
  end;

procedure ProcessAnimal(animal: Animal);
begin
  animal.MakeSound; // Dynamic dispatch
end;
```

**Special features:**
- Virtual Methods enable Dynamic Dispatch
- Dispatch occurs at runtime via vtable
- Without `virtual`: Static Binding at compile time

**Further reading:**
- [Delphi Documentation - Virtual Methods](https://docwiki.embarcadero.com/RADStudio/en/Methods#Virtual_Methods)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Dynamic Dispatch: automatic
@interface Animal : NSObject
- (void)makeSound;
@end

@implementation Animal
- (void)makeSound {
    NSLog(@"Some sound");
}
@end

@interface Dog : Animal
@end

@implementation Dog
- (void)makeSound {
    NSLog(@"Woof!");
}
@end
```

**Special features:**
- All method calls are automatically dynamic dispatch
- Dispatch occurs at runtime via Message Passing
- Very dynamic dispatch system

**Further reading:**
- [Apple Objective-C Documentation - Inheritance](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Inheritance/Inheritance.html)

</TabItem>
<TabItem value="php" label="PHP">

```php
// Dynamic Dispatch: automatic
class Animal {
    public function makeSound() {
        echo "Some sound\n";
    }
}

class Dog extends Animal {
    public function makeSound() {
        echo "Woof!\n";
    }
}

function processAnimal(Animal $animal) {
    $animal->makeSound(); // Dynamic dispatch
}

processAnimal(new Dog()); // "Woof!"
```

**Special features:**
- All method calls are automatically dynamic dispatch
- Dispatch occurs at runtime based on object type

**Further reading:**
- [PHP Documentation - Object Inheritance](https://www.php.net/manual/en/language.oop5.inheritance.php)

</TabItem>
<TabItem value="python" label="Python">

```python
# Dynamic Dispatch: automatic
class Animal:
    def make_sound(self):
        print("Some sound")

class Dog(Animal):
    def make_sound(self):
        print("Woof!")

def process_animal(animal: Animal):
    animal.make_sound()  # Dynamic dispatch

process_animal(Dog())  # "Woof!"
```

**Special features:**
- All method calls are automatically dynamic dispatch
- Dispatch occurs at runtime based on object type
- Method Resolution Order (MRO) for complex inheritance

**Further reading:**
- [Python Documentation - Inheritance](https://docs.python.org/3/tutorial/classes.html#inheritance)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Dynamic Dispatch: automatic
class Animal
  def make_sound
    puts "Some sound"
  end
end

class Dog < Animal
  def make_sound
    puts "Woof!"
  end
end

def process_animal(animal)
  animal.make_sound  # Dynamic dispatch
end

process_animal(Dog.new)  # "Woof!"
```

**Special features:**
- All method calls are automatically dynamic dispatch
- Dispatch occurs at runtime based on object type
- Very dynamic dispatch system

**Further reading:**
- [Ruby Documentation - Inheritance](https://ruby-doc.org/docs/ruby-doc-bundle/UsersGuide/rg/inheritance.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Dynamic Dispatch: automatic
class Animal {
  def makeSound(): Unit = {
    println("Some sound")
  }
}

class Dog extends Animal {
  override def makeSound(): Unit = {
    println("Woof!")
  }
}

def processAnimal(animal: Animal): Unit = {
  animal.makeSound() // Dynamic dispatch
}

processAnimal(new Dog()) // "Woof!"
```

**Special features:**
- All method calls are automatically dynamic dispatch
- Dispatch occurs at runtime based on object type
- `final` prevents further dispatch levels

**Further reading:**
- [Scala Documentation - Classes](https://docs.scala-lang.org/tour/classes.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Dynamic Dispatch: automatic
class Animal {
    func makeSound() {
        print("Some sound")
    }
}

class Dog: Animal {
    override func makeSound() {
        print("Woof!")
    }
}

func processAnimal(_ animal: Animal) {
    animal.makeSound() // Dynamic dispatch
}

processAnimal(Dog()) // "Woof!"
```

**Special features:**
- All method calls are automatically dynamic dispatch
- Dispatch occurs at runtime based on object type
- `final` prevents further dispatch levels

**Further reading:**
- [Swift Documentation - Inheritance](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/inheritance/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Dynamic Dispatch: automatic
class Animal {
    makeSound(): void {
        console.log("Some sound");
    }
}

class Dog extends Animal {
    makeSound(): void {
        console.log("Woof!");
    }
}

function processAnimal(animal: Animal): void {
    animal.makeSound(); // Dynamic dispatch
}

processAnimal(new Dog()); // "Woof!"
```

**Special features:**
- All method calls are automatically dynamic dispatch
- Dispatch occurs at runtime based on object type
- TypeScript compiler checks types at compile time

**Further reading:**
- [TypeScript Handbook - Classes](https://www.typescriptlang.org/docs/handbook/2/classes.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Dynamic Dispatch: Overridable methods
Class Animal
    Public Overridable Sub MakeSound()
        Console.WriteLine("Some sound")
    End Sub
End Class

Class Dog
    Inherits Animal
    Public Overrides Sub MakeSound()
        Console.WriteLine("Woof!")
    End Sub
End Class

Sub ProcessAnimal(animal As Animal)
    animal.MakeSound() ' Dynamic dispatch
End Sub
```

**Special features:**
- Overridable Methods enable Dynamic Dispatch
- Dispatch occurs at runtime via vtable
- Without `Overridable`: Static Binding at compile time

**Further reading:**
- [Microsoft VB.NET Documentation - Overridable](https://learn.microsoft.com/en-us/dotnet/visual-basic/language-reference/modifiers/overridable)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Dynamic Dispatch: All method calls are resolved at runtime
class Shape {
    area() {
        return 0;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius ** 2;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
}

const shapes = [new Circle(5), new Rectangle(3, 4)];
for (const shape of shapes) {
    console.log(shape.area()); // Dynamic Dispatch: correct method is called
}
```

**Special features:**
- All method calls use Dynamic Dispatch
- No static binding possible
- Method resolution occurs via prototype chain at runtime

**Further reading:**
- [MDN Web Docs - Inheritance and the prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

</TabItem>
</FilteredTabs>


## 8.4.4. Multiple Dispatch

Mechanism where the method to be called is determined based on the types of all arguments.

### Languages {#sprachen}

<FilteredTabs availableTabs={['clojure', 'common-lisp', 'julia', 'nim', 'racket', 'wolfram-language']}>
<TabItem value="clojure" label="Clojure">

```clojure
;; Multiple Dispatch: multimethods
(defmulti area :shape)

(defmethod area :circle [shape]
  (* Math/PI (:radius shape) (:radius shape)))

(defmethod area :rectangle [shape]
  (* (:width shape) (:height shape)))

(defmethod area :default [shape]
  (throw (Exception. (str "Unknown shape: " (:shape shape)))))

(area {:shape :circle :radius 5})
(area {:shape :rectangle :width 3 :height 4})
```

**Special features:**
- Multimethods enable Multiple Dispatch
- Dispatch based on dispatch function (here `:shape`)
- Flexible dispatch strategies possible

**Further reading:**
- [Clojure Documentation - Multimethods](https://clojure.org/reference/multimethods)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Multiple Dispatch: CLOS generic functions
(defgeneric area (shape))

(defmethod area ((shape circle))
  (* pi (radius shape) (radius shape)))

(defmethod area ((shape rectangle))
  (* (width shape) (height shape)))

(defmethod area ((shape triangle))
  (* 0.5 (base shape) (height shape)))

(area (make-circle :radius 5))
(area (make-rectangle :width 3 :height 4))
```

**Special features:**
- CLOS (Common Lisp Object System) supports Multiple Dispatch
- Dispatch based on all argument types
- Very flexible dispatch system

**Further reading:**
- [Common Lisp HyperSpec - Generic Functions](http://www.lispworks.com/documentation/HyperSpec/Body/f_gener.htm)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Multiple Dispatch: native support
abstract type Shape end

struct Circle <: Shape
    radius::Float64
end

struct Rectangle <: Shape
    width::Float64
    height::Float64
end

area(shape::Circle) = π * shape.radius^2
area(shape::Rectangle) = shape.width * shape.height

area(Circle(5.0))
area(Rectangle(3.0, 4.0))

# Multiple Dispatch with multiple arguments
collide(a::Circle, b::Circle) = "Circle-Circle collision"
collide(a::Circle, b::Rectangle) = "Circle-Rectangle collision"
collide(a::Rectangle, b::Circle) = "Rectangle-Circle collision"
collide(a::Rectangle, b::Rectangle) = "Rectangle-Rectangle collision"
```

**Special features:**
- Native support for Multiple Dispatch
- Dispatch based on all argument types
- Very efficient dispatch system
- Core feature of the language

**Further reading:**
- [Julia Documentation - Methods](https://docs.julialang.org/en/v1/manual/methods/)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
;; Multiple Dispatch: generic functions
(require racket/generic)

(define-generics shape
  (area shape))

(struct circle (radius)
  #:methods gen:shape
  [(define (area s)
     (* pi (circle-radius s) (circle-radius s)))])

(struct rectangle (width height)
  #:methods gen:shape
  [(define (area s)
     (* (rectangle-width s) (rectangle-height s)))])

(area (circle 5))
(area (rectangle 3 4))
```

**Special features:**
- Generic Functions enable Multiple Dispatch
- Dispatch based on all argument types
- Flexible dispatch system

**Further reading:**
- [Racket Documentation - Generics](https://docs.racket-lang.org/reference/generics.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Multiple Dispatch: method-basiert
type
  Shape = ref object of RootObj
  Circle = ref object of Shape
    radius: float
  Rect = ref object of Shape
    width, height: float

method collide(a, b: Shape) {.base.} =
  echo "Shape-Shape collision"

method collide(a: Circle, b: Circle) =
  echo "Circle-Circle collision"

method collide(a: Circle, b: Rect) =
  echo "Circle-Rect collision"

var c = Circle(radius: 1.0)
var r = Rect(width: 2.0, height: 3.0)
collide(c, r)  # Circle-Rect collision
```

**Special features:**
- `method` supports Dynamic Dispatch on all parameters
- Runtime resolution based on actual types of all parameters
- `{.base.}` pragma for base methods

**Further reading:**
- [Nim Documentation - Methods](https://nim-lang.org/docs/manual.html#methods)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Multiple Dispatch via Pattern Matching *)
collide[_Integer, _Integer] := "Integer + Integer"
collide[_String, _Integer] := "String + Integer"
collide[_Integer, _String] := "Integer + String"

collide[1, 2]      (* "Integer + Integer" *)
collide["a", 1]    (* "String + Integer" *)
collide[1, "b"]    (* "Integer + String" *)
```

**Special features:**
- Pattern Matching on all arguments corresponds to Multiple Dispatch
- More specific patterns automatically take precedence

**Further reading:**
- [Wolfram Language Documentation - Patterns](https://reference.wolfram.com/language/guide/Patterns.html)

</TabItem>
</FilteredTabs>

