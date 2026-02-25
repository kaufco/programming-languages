---
slug: /objektorientierung/polymorphismus
title: 8.4. Polymorphismus
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import FilteredTabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 8.4. Polymorphismus

Generische Typen und polymorphe Konzepte.

## 8.4.1. Method Overriding

Überschreiben von Methoden aus einer Basisklasse in einer abgeleiteten Klasse.

### Sprachen {#sprachen}

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

**Besonderheiten:**
- Verwendung von `overriding`-Pragma für explizite Überschreibung
- Tagged Types ermöglichen Polymorphismus
- Compiler prüft auf korrekte Methodensignatur

**Weiterführende Links:**
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

**Besonderheiten:**
- Basisklasse-Methode muss `virtual` oder `abstract` sein
- Überschreibende Methode muss `override` verwenden
- `new`-Keyword für Method Hiding (nicht Overriding)

**Weiterführende Links:**
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

**Besonderheiten:**
- Basisklasse-Methode muss `virtual` sein
- `override`-Keyword (seit C++11) für explizite Überschreibung
- Ohne `virtual` in Basisklasse: Method Hiding statt Overriding

**Weiterführende Links:**
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

**Besonderheiten:**
- Automatisches Overriding ohne spezielle Keywords
- Polymorphismus durch Vererbung

**Weiterführende Links:**
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

**Besonderheiten:**
- `override`-Keyword für explizite Überschreibung
- Compiler prüft auf korrekte Methodensignatur
- Basisklasse-Methode muss nicht `virtual` sein (automatisch virtual)

**Weiterführende Links:**
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

**Besonderheiten:**
- `@override`-Annotation für explizite Überschreibung (optional, aber empfohlen)
- Compiler prüft auf korrekte Methodensignatur bei Verwendung von `@override`

**Weiterführende Links:**
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

**Besonderheiten:**
- `redefine`-Klausel in der `inherit`-Klausel erforderlich
- Explizite Redefinition für bessere Lesbarkeit

**Weiterführende Links:**
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

**Besonderheiten:**
- Basisklasse-Methode muss `abstract` sein oder `default`-Implementierung haben
- `override`-Keyword für explizite Überschreibung

**Weiterführende Links:**
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

**Besonderheiten:**
- `@Override`-Annotation optional, aber empfohlen
- Automatisches Overriding ohne Annotation möglich

**Weiterführende Links:**
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

**Besonderheiten:**
- `override`-Keyword für explizite Überschreibung
- Compiler prüft auf korrekte Methodensignatur

**Weiterführende Links:**
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

**Besonderheiten:**
- `@Override`-Annotation optional, aber empfohlen
- Compiler prüft auf korrekte Methodensignatur bei Verwendung von `@Override`
- Basisklasse-Methode muss nicht `virtual` sein (alle Methoden sind virtual)

**Weiterführende Links:**
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

**Besonderheiten:**
- Basisklasse muss `open` sein
- Basisklasse-Methode muss `open` sein
- `override`-Keyword für explizite Überschreibung

**Weiterführende Links:**
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

**Besonderheiten:**
- `method`-Keyword für polymorphe Methoden
- `{.base.}`-Pragma für Basisklasse-Methode
- Prozeduren (`proc`) sind nicht polymorph, nur Methoden (`method`)

**Weiterführende Links:**
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

**Besonderheiten:**
- Basisklasse-Methode muss `virtual` sein
- Überschreibende Methode muss `override` verwenden
- `reintroduce` für Method Hiding (nicht Overriding)

**Weiterführende Links:**
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

**Besonderheiten:**
- Automatisches Overriding ohne spezielle Keywords
- Alle Methoden sind virtual (dynamic dispatch)

**Weiterführende Links:**
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

**Besonderheiten:**
- Automatisches Overriding ohne spezielle Keywords
- Alle Methoden sind virtual (dynamic dispatch)

**Weiterführende Links:**
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

**Besonderheiten:**
- Automatisches Overriding ohne spezielle Keywords
- Alle Methoden sind virtual (dynamic dispatch)
- `super()` für Zugriff auf Basisklasse-Methode

**Weiterführende Links:**
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

**Besonderheiten:**
- Automatisches Overriding ohne spezielle Keywords
- Alle Methoden sind virtual (dynamic dispatch)
- `super` für Zugriff auf Basisklasse-Methode

**Weiterführende Links:**
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

**Besonderheiten:**
- `override`-Keyword für explizite Überschreibung
- Compiler prüft auf korrekte Methodensignatur
- Basisklasse-Methode muss nicht `virtual` sein (alle Methoden sind virtual)

**Weiterführende Links:**
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

**Besonderheiten:**
- `override`-Keyword für explizite Überschreibung
- Compiler prüft auf korrekte Methodensignatur
- Basisklasse-Methode muss nicht `virtual` sein (alle Methoden sind virtual)

**Weiterführende Links:**
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

**Besonderheiten:**
- Automatisches Overriding ohne spezielle Keywords
- Alle Methoden sind virtual (dynamic dispatch)
- TypeScript-Compiler prüft auf korrekte Methodensignatur

**Weiterführende Links:**
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

**Besonderheiten:**
- Basisklasse-Methode muss `Overridable` sein
- Überschreibende Methode muss `Overrides` verwenden
- `Shadows` für Method Hiding (nicht Overriding)

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Overrides](https://learn.microsoft.com/en-us/dotnet/visual-basic/language-reference/modifiers/overrides)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Method Overriding (seit ES6)
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

**Besonderheiten:**
- Alle Methoden sind implizit überschreibbar (kein `virtual`-Schlüsselwort nötig)
- `super.method()` ruft die Methode der Elternklasse auf
- Auch vor ES6 über Prototyp-Kette möglich

**Weiterführende Links:**
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

**Besonderheiten:**
- Methoden werden durch gleichnamige Methoden in Subklassen überschrieben
- Kein `override`-Keyword erforderlich
- `Sealed`-Methoden können nicht überschrieben werden

**Weiterführende Links:**
- [MATLAB Documentation - Method Overriding](https://www.mathworks.com/help/matlab/matlab_oop/modifying-superclass-methods.html)

</TabItem>
</FilteredTabs>


## 8.4.2. Virtual Methods

Methoden, die zur Laufzeit basierend auf dem tatsächlichen Objekttyp aufgerufen werden.

### Sprachen {#sprachen}

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

**Besonderheiten:**
- `virtual`-Keyword für polymorphe Methoden
- Ohne `virtual`: Method Hiding statt Overriding
- `sealed override` verhindert weitere Überschreibung

**Weiterführende Links:**
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

**Besonderheiten:**
- `virtual`-Keyword für polymorphe Methoden
- Ohne `virtual`: Static Binding statt Dynamic Dispatch
- `final` verhindert weitere Überschreibung

**Weiterführende Links:**
- [cppreference - Virtual Functions](https://en.cppreference.com/w/cpp/language/virtual)

</TabItem>
<TabItem value="d" label="D">

```d
// Virtual Methods: automatisch virtual
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

**Besonderheiten:**
- Alle Methoden sind automatisch virtual
- `final` verhindert weitere Überschreibung
- `override`-Keyword für explizite Überschreibung

**Weiterführende Links:**
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

**Besonderheiten:**
- `abstract` für virtuelle Methoden ohne Implementierung
- `default` für virtuelle Methoden mit Standardimplementierung
- `override` für Überschreibung

**Weiterführende Links:**
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

**Besonderheiten:**
- `virtual`-Keyword für polymorphe Methoden
- Ohne `virtual`: Static Binding statt Dynamic Dispatch
- `final` verhindert weitere Überschreibung

**Weiterführende Links:**
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

**Besonderheiten:**
- `Overridable`-Keyword für polymorphe Methoden
- Ohne `Overridable`: Method Hiding statt Overriding
- `NotOverridable` verhindert weitere Überschreibung

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Overridable](https://learn.microsoft.com/en-us/dotnet/visual-basic/language-reference/modifiers/overridable)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Virtual Methods: Alle Methoden sind standardmäßig virtuell
class Animal {
  String speak() => 'Tier-Geräusch';
}

class Dog extends Animal {
  @override
  String speak() => 'Wuff!';
}

class Cat extends Animal {
  @override
  String speak() => 'Miau!';
}

// Dynamischer Dispatch
Animal animal = Dog();
print(animal.speak());  // Wuff! (nicht "Tier-Geräusch")
```

**Besonderheiten:**
- Alle Instanzmethoden sind standardmäßig virtuell (kein `virtual`-Keyword nötig)
- `@override`-Annotation empfohlen, aber nicht erzwungen
- Kein Mechanismus um Methoden als nicht-virtuell zu markieren
- Dynamischer Dispatch für alle Instanzmethoden

**Weiterführende Links:**
- [Dart Documentation - Extending a Class](https://dart.dev/language/extend)

</TabItem>
</FilteredTabs>


## 8.4.3. Dynamic Dispatch

Mechanismus zur Laufzeit, bei dem die aufzurufende Methode basierend auf dem tatsächlichen Objekttyp bestimmt wird.

### Sprachen {#sprachen}

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

**Besonderheiten:**
- Tagged Types ermöglichen Dynamic Dispatch
- `'Class`-Attribut für Class-Wide Types
- Dispatch erfolgt zur Laufzeit basierend auf Tag

**Weiterführende Links:**
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

**Besonderheiten:**
- Virtual Methods ermöglichen Dynamic Dispatch
- Dispatch erfolgt zur Laufzeit über vtable
- `sealed` verhindert weitere Dispatch-Ebenen

**Weiterführende Links:**
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

**Besonderheiten:**
- Virtual Functions ermöglichen Dynamic Dispatch
- Dispatch erfolgt zur Laufzeit über vtable
- Ohne `virtual`: Static Binding zur Compile-Zeit

**Weiterführende Links:**
- [cppreference - Virtual Functions](https://en.cppreference.com/w/cpp/language/virtual)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Dynamic Dispatch: automatisch
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

**Besonderheiten:**
- Alle Methodenaufrufe sind automatisch dynamic dispatch
- Dispatch erfolgt zur Laufzeit basierend auf Objekttyp

**Weiterführende Links:**
- [Crystal Documentation - Inheritance](https://crystal-lang.org/reference/1.11/syntax_and_semantics/inheritance.html)

</TabItem>
<TabItem value="d" label="D">

```d
// Dynamic Dispatch: automatisch virtual
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

**Besonderheiten:**
- Alle Methoden sind automatisch virtual
- Dispatch erfolgt zur Laufzeit über vtable
- `final` verhindert weitere Dispatch-Ebenen

**Weiterführende Links:**
- [D Language Specification - Classes](https://dlang.org/spec/class.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Dynamic Dispatch: automatisch
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

**Besonderheiten:**
- Alle Methodenaufrufe sind automatisch dynamic dispatch
- Dispatch erfolgt zur Laufzeit basierend auf Objekttyp

**Weiterführende Links:**
- [Dart Language Tour - Classes](https://dart.dev/guides/language/language-tour#classes)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
-- Dynamic Dispatch: automatisch
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

**Besonderheiten:**
- Alle Methodenaufrufe sind automatisch dynamic dispatch
- Dispatch erfolgt zur Laufzeit basierend auf Objekttyp

**Weiterführende Links:**
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

**Besonderheiten:**
- Abstract/Default Methods ermöglichen Dynamic Dispatch
- Dispatch erfolgt zur Laufzeit basierend auf Objekttyp

**Weiterführende Links:**
- [F# Documentation - Inheritance](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/inheritance)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Dynamic Dispatch: automatisch
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

**Besonderheiten:**
- Alle Methodenaufrufe sind automatisch dynamic dispatch
- Dispatch erfolgt zur Laufzeit basierend auf Objekttyp

**Weiterführende Links:**
- [Groovy Documentation - Object Orientation](https://groovy-lang.org/objectorientation.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Dynamic Dispatch: automatisch
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

**Besonderheiten:**
- Alle Methodenaufrufe sind automatisch dynamic dispatch
- Dispatch erfolgt zur Laufzeit basierend auf Objekttyp

**Weiterführende Links:**
- [Haxe Manual - Class Fields](https://haxe.org/manual/class-field-override.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Dynamic Dispatch: automatisch
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

**Besonderheiten:**
- Alle Methodenaufrufe sind automatisch dynamic dispatch
- Dispatch erfolgt zur Laufzeit über vtable
- `final` verhindert weitere Dispatch-Ebenen

**Weiterführende Links:**
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

**Besonderheiten:**
- Multiple Dispatch statt Single Dispatch
- Dispatch erfolgt zur Laufzeit basierend auf allen Argumenttypen
- Sehr flexibles Dispatch-System

**Weiterführende Links:**
- [Julia Documentation - Methods](https://docs.julialang.org/en/v1/manual/methods/)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Dynamic Dispatch: automatisch
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

**Besonderheiten:**
- Alle Methodenaufrufe sind automatisch dynamic dispatch
- Dispatch erfolgt zur Laufzeit basierend auf Objekttyp
- `final` verhindert weitere Dispatch-Ebenen

**Weiterführende Links:**
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

**Besonderheiten:**
- `method`-Keyword für Dynamic Dispatch
- `proc` verwendet Static Binding
- Dispatch erfolgt zur Laufzeit basierend auf Objekttyp

**Weiterführende Links:**
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

**Besonderheiten:**
- Virtual Methods ermöglichen Dynamic Dispatch
- Dispatch erfolgt zur Laufzeit über vtable
- Ohne `virtual`: Static Binding zur Compile-Zeit

**Weiterführende Links:**
- [Delphi Documentation - Virtual Methods](https://docwiki.embarcadero.com/RADStudio/en/Methods#Virtual_Methods)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Dynamic Dispatch: automatisch
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

**Besonderheiten:**
- Alle Methodenaufrufe sind automatisch dynamic dispatch
- Dispatch erfolgt zur Laufzeit über Message Passing
- Sehr dynamisches Dispatch-System

**Weiterführende Links:**
- [Apple Objective-C Documentation - Inheritance](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Inheritance/Inheritance.html)

</TabItem>
<TabItem value="php" label="PHP">

```php
// Dynamic Dispatch: automatisch
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

**Besonderheiten:**
- Alle Methodenaufrufe sind automatisch dynamic dispatch
- Dispatch erfolgt zur Laufzeit basierend auf Objekttyp

**Weiterführende Links:**
- [PHP Documentation - Object Inheritance](https://www.php.net/manual/en/language.oop5.inheritance.php)

</TabItem>
<TabItem value="python" label="Python">

```python
# Dynamic Dispatch: automatisch
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

**Besonderheiten:**
- Alle Methodenaufrufe sind automatisch dynamic dispatch
- Dispatch erfolgt zur Laufzeit basierend auf Objekttyp
- Method Resolution Order (MRO) für komplexe Vererbung

**Weiterführende Links:**
- [Python Documentation - Inheritance](https://docs.python.org/3/tutorial/classes.html#inheritance)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Dynamic Dispatch: automatisch
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

**Besonderheiten:**
- Alle Methodenaufrufe sind automatisch dynamic dispatch
- Dispatch erfolgt zur Laufzeit basierend auf Objekttyp
- Sehr dynamisches Dispatch-System

**Weiterführende Links:**
- [Ruby Documentation - Inheritance](https://ruby-doc.org/docs/ruby-doc-bundle/UsersGuide/rg/inheritance.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Dynamic Dispatch: automatisch
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

**Besonderheiten:**
- Alle Methodenaufrufe sind automatisch dynamic dispatch
- Dispatch erfolgt zur Laufzeit basierend auf Objekttyp
- `final` verhindert weitere Dispatch-Ebenen

**Weiterführende Links:**
- [Scala Documentation - Classes](https://docs.scala-lang.org/tour/classes.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Dynamic Dispatch: automatisch
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

**Besonderheiten:**
- Alle Methodenaufrufe sind automatisch dynamic dispatch
- Dispatch erfolgt zur Laufzeit basierend auf Objekttyp
- `final` verhindert weitere Dispatch-Ebenen

**Weiterführende Links:**
- [Swift Documentation - Inheritance](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/inheritance/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Dynamic Dispatch: automatisch
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

**Besonderheiten:**
- Alle Methodenaufrufe sind automatisch dynamic dispatch
- Dispatch erfolgt zur Laufzeit basierend auf Objekttyp
- TypeScript-Compiler prüft Typen zur Compile-Zeit

**Weiterführende Links:**
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

**Besonderheiten:**
- Overridable Methods ermöglichen Dynamic Dispatch
- Dispatch erfolgt zur Laufzeit über vtable
- Ohne `Overridable`: Static Binding zur Compile-Zeit

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Overridable](https://learn.microsoft.com/en-us/dotnet/visual-basic/language-reference/modifiers/overridable)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Dynamic Dispatch: Alle Methodenaufrufe werden zur Laufzeit aufgelöst
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
    console.log(shape.area()); // Dynamic Dispatch: richtige Methode wird aufgerufen
}
```

**Besonderheiten:**
- Alle Methodenaufrufe verwenden Dynamic Dispatch
- Kein statisches Binding möglich
- Methodenauflösung erfolgt über die Prototyp-Kette zur Laufzeit

**Weiterführende Links:**
- [MDN Web Docs - Inheritance and the prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

</TabItem>
</FilteredTabs>


## 8.4.4. Multiple Dispatch

Mechanismus, bei dem die aufzurufende Methode basierend auf den Typen aller Argumente bestimmt wird.

### Sprachen {#sprachen}

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

**Besonderheiten:**
- Multimethods ermöglichen Multiple Dispatch
- Dispatch basiert auf Dispatch-Funktion (hier `:shape`)
- Flexible Dispatch-Strategien möglich

**Weiterführende Links:**
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

**Besonderheiten:**
- CLOS (Common Lisp Object System) unterstützt Multiple Dispatch
- Dispatch basiert auf allen Argumenttypen
- Sehr flexibles Dispatch-System

**Weiterführende Links:**
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

# Multiple Dispatch mit mehreren Argumenten
collide(a::Circle, b::Circle) = "Circle-Circle collision"
collide(a::Circle, b::Rectangle) = "Circle-Rectangle collision"
collide(a::Rectangle, b::Circle) = "Rectangle-Circle collision"
collide(a::Rectangle, b::Rectangle) = "Rectangle-Rectangle collision"
```

**Besonderheiten:**
- Native Unterstützung für Multiple Dispatch
- Dispatch basiert auf allen Argumenttypen
- Sehr effizientes Dispatch-System
- Kern-Feature der Sprache

**Weiterführende Links:**
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

**Besonderheiten:**
- Generic Functions ermöglichen Multiple Dispatch
- Dispatch basiert auf allen Argumenttypen
- Flexibles Dispatch-System

**Weiterführende Links:**
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

**Besonderheiten:**
- `method` unterstützt Dynamic Dispatch auf allen Parametern
- Runtime-Auflösung basierend auf den tatsächlichen Typen aller Parameter
- `{.base.}` Pragma für Basismethoden

**Weiterführende Links:**
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

**Besonderheiten:**
- Pattern Matching auf allen Argumenten entspricht Multiple Dispatch
- Spezifischere Patterns haben automatisch Vorrang

**Weiterführende Links:**
- [Wolfram Language Documentation - Patterns](https://reference.wolfram.com/language/guide/Patterns.html)

</TabItem>
</FilteredTabs>

