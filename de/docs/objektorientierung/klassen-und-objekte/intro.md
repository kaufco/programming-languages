---
slug: /objektorientierung/klassen-und-objekte
title: 8.1. Klassen und Objekte
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 8.1. Klassen und Objekte

Definition und Instanziierung von Klassen und Objekten.

## 8.1.1. Klassen-Definition

Definition von Klassen als Blaupause für Objekte mit Eigenschaften und Methoden.

### Sprachen {#sprachen}

<Tabs availableTabs={['carbon', 'common-lisp', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'eiffel', 'fsharp', 'groovy', 'haxe', 'java', 'javascript', 'julia', 'kotlin', 'matlab', 'mojo', 'nim', 'objective-c', 'object-pascal', 'ocaml', 'perl', 'php', 'python', 'racket', 'ruby', 'scala', 'swift', 'typescript', 'vbnet', 'wolfram-language']} yellowTabs={['lean4']}>
<TabItem value="csharp" label="C#">

```csharp
class Person
{
    public string Name { get; set; }
    
    public Person(string name)
    {
        Name = name;
    }
    
    public void Greet()
    {
        Console.WriteLine($"Hallo, ich bin {Name}");
    }
}
```

**Besonderheiten:**
- Klassen können partiell mit `partial` deklariert werden
- Unterstützt abstrakte Klassen und Interfaces

**Weiterführende Links:**
- [Microsoft C# Documentation - Classes](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/types/classes)

</TabItem>
<TabItem value="java" label="Java">

```java
class Person
{
    private String name;
    
    public Person(String name)
    {
        this.name = name;
    }
    
    public void greet()
    {
        System.out.println("Hallo, ich bin " + name);
    }
}
```

**Besonderheiten:**
- Klassen können `public`, `package-private` (default) oder `private` (nur für nested classes) sein
- Unterstützt abstrakte Klassen und Interfaces

**Weiterführende Links:**
- [Oracle Java Documentation - Classes](https://docs.oracle.com/javase/tutorial/java/javaOO/classes.html)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
class Person
{
private:
    std::string name;
    
public:
    Person(const std::string& name) : name(name) {}
    
    void greet()
    {
        std::cout << "Hallo, ich bin " << name << std::endl;
    }
};
```

**Besonderheiten:**
- Unterstützt `public`, `private` und `protected` Zugriffsmodifikatoren
- Klassen können `struct` (standardmäßig public) oder `class` (standardmäßig private) sein

**Weiterführende Links:**
- [cppreference.com - Classes](https://en.cppreference.com/w/cpp/language/class)

</TabItem>
<TabItem value="python" label="Python">

```python
class Person:
    def __init__(self, name):
        self.name = name
    
    def greet(self):
        print(f"Hallo, ich bin {self.name}")
```

**Besonderheiten:**
- Alle Methoden benötigen `self` als ersten Parameter
- Klassen können dynamisch zur Laufzeit modifiziert werden

**Weiterführende Links:**
- [Python Documentation - Classes](https://docs.python.org/3/tutorial/classes.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Klassen (seit ES6)
class Person
{
    constructor(name)
    {
        this.name = name;
    }
    
    greet()
    {
        console.log(`Hallo, ich bin ${this.name}`);
    }
}
```

**Besonderheiten:**
- Wurden in ES6 eingeführt
- Syntaktischer Zucker über Prototypen

**Weiterführende Links:**
- [MDN Web Docs - Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
class Person
{
    name: string;
    
    constructor(name: string)
    {
        this.name = name;
    }
    
    greet(): void
    {
        console.log(`Hallo, ich bin ${this.name}`);
    }
}
```

**Besonderheiten:**
- Unterstützt Typannotationen für Eigenschaften und Methoden
- Kompiliert zu JavaScript-Klassen

**Weiterführende Links:**
- [TypeScript Documentation - Classes](https://www.typescriptlang.org/docs/handbook/2/classes.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
class Person(val name: String)
{
    fun greet()
    {
        println("Hallo, ich bin $name")
    }
}
```

**Besonderheiten:**
- Primärer Konstruktor kann direkt in der Klassendeklaration stehen
- Unterstützt Data Classes für einfache Datencontainer

**Weiterführende Links:**
- [Kotlin Documentation - Classes](https://kotlinlang.org/docs/classes.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
structure Person where
  name : String

def Person.greet (p : Person) : IO Unit :=
  IO.println s!"Hallo, ich bin {p.name}"
```

**Besonderheiten:**
- `structure` definiert einen Typ mit benannten Feldern
- Methoden werden als Funktionen im Namespace des Typs definiert
- Dot-Notation erlaubt methodenähnlichen Aufruf: `p.greet`

**Weiterführende Links:**
- [Functional Programming in Lean - Structures](https://lean-lang.org/functional_programming_in_lean/getting-to-know/structures.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
class Person
{
    var name: String
    
    init(name: String)
    {
        self.name = name
    }
    
    func greet()
    {
        print("Hallo, ich bin \(name)")
    }
}
```

**Besonderheiten:**
- Klassen sind Referenztypen
- Unterstützt Computed Properties und Property Observers

**Weiterführende Links:**
- [Swift Documentation - Classes and Structures](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/classesandstructures/)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
class Person(val name: String)
{
    def greet(): Unit =
    {
        println(s"Hallo, ich bin $name")
    }
}
```

**Besonderheiten:**
- Primärer Konstruktor kann direkt in der Klassendeklaration stehen
- Unterstützt Case Classes für unveränderliche Datenstrukturen

**Weiterführende Links:**
- [Scala Documentation - Classes](https://docs.scala-lang.org/tour/classes.html)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
class Person
    def initialize(name)
        @name = name
    end
    
    def greet
        puts "Hallo, ich bin #{@name}"
    end
end
```

**Besonderheiten:**
- Instanzvariablen beginnen mit `@`
- Klassen können zur Laufzeit modifiziert werden

**Weiterführende Links:**
- [Ruby Documentation - Classes](https://ruby-doc.org/core-3.1.2/Class.html)

</TabItem>
<TabItem value="php" label="PHP">

```php
class Person
{
    private $name;
    
    public function __construct($name)
    {
        $this->name = $name;
    }
    
    public function greet()
    {
        echo "Hallo, ich bin " . $this->name;
    }
}
```

**Besonderheiten:**
- Eigenschaften müssen explizit mit Zugriffsmodifikatoren deklariert werden
- Unterstützt Traits für Code-Wiederverwendung

**Weiterführende Links:**
- [PHP Documentation - Classes and Objects](https://www.php.net/manual/en/language.oop5.php)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
class Person
{
    String name;
    
    Person(this.name);
    
    void greet()
    {
        print("Hallo, ich bin $name");
    }
}
```

**Besonderheiten:**
- Konstruktor kann Parameter direkt an Eigenschaften zuweisen
- Unterstützt Mixins für Code-Wiederverwendung

**Weiterführende Links:**
- [Dart Documentation - Classes](https://dart.dev/language/classes)

</TabItem>
<TabItem value="d" label="D">

```d
class Person
{
    private string name;
    
    this(string name)
    {
        this.name = name;
    }
    
    void greet()
    {
        writeln("Hallo, ich bin ", name);
    }
}
```

**Besonderheiten:**
- Unterstützt `public`, `private` und `protected` Zugriffsmodifikatoren
- Klassen sind Referenztypen

**Weiterführende Links:**
- [D Language Specification - Classes](https://dlang.org/spec/class.html)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
class Person
    property name : String
    
    def initialize(@name : String)
    end
    
    def greet
        puts "Hallo, ich bin #{@name}"
    end
end
```

**Besonderheiten:**
- Eigenschaften können direkt im Konstruktor initialisiert werden
- Unterstützt Typannotationen

**Weiterführende Links:**
- [Crystal Documentation - Classes](https://crystal-lang.org/reference/1.11/syntax_and_semantics/classes_and_methods.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
type Person = object
    name: string

proc greet(self: Person) =
    echo "Hallo, ich bin ", self.name

proc newPerson(name: string): Person =
    Person(name: name)
```

**Besonderheiten:**
- Verwendet `object` für Klassen-ähnliche Strukturen
- Methoden werden als Prozeduren mit `self`-Parameter definiert

**Weiterführende Links:**
- [Nim Documentation - Objects](https://nim-lang.org/docs/manual.html#types-object-types)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
class Person
{
    String name
    
    Person(String name)
    {
        this.name = name
    }
    
    void greet()
    {
        println "Hallo, ich bin ${name}"
    }
}
```

**Besonderheiten:**
- Ähnlich zu Java, aber mit optionalen Typen und vereinfachter Syntax
- Unterstützt Traits für Code-Wiederverwendung

**Weiterführende Links:**
- [Groovy Documentation - Classes](https://groovy-lang.org/objectorientation.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
type Person(name: string) =
    member this.Name = name
    
    member this.Greet() =
        printfn "Hallo, ich bin %s" this.Name
```

**Besonderheiten:**
- Primärer Konstruktor kann direkt in der Typdeklaration stehen
- Unterstützt Records für unveränderliche Datenstrukturen

**Weiterführende Links:**
- [F# Documentation - Classes](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/classes)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
Class Person
    Private name As String
    
    Public Sub New(name As String)
        Me.name = name
    End Sub
    
    Public Sub Greet()
        Console.WriteLine($"Hallo, ich bin {name}")
    End Sub
End Class
```

**Besonderheiten:**
- Ähnlich zu C#, aber mit VB.NET-Syntax
- Unterstützt abstrakte Klassen und Interfaces

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Classes](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/objects-and-classes/)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
@interface Person : NSObject
{
    NSString* name;
}
- (instancetype)initWithName:(NSString*)name;
- (void)greet;
@end

@implementation Person
- (instancetype)initWithName:(NSString*)aName
{
    self = [super init];
    if (self) {
        name = aName;
    }
    return self;
}

- (void)greet
{
    NSLog(@"Hallo, ich bin %@", name);
}
@end
```

**Besonderheiten:**
- Trennung zwischen Interface (`@interface`) und Implementation (`@implementation`)
- Verwendet Message-Passing-Syntax mit eckigen Klammern

**Weiterführende Links:**
- [Apple Objective-C Documentation - Classes](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
type
  Person = class
  private
    name: string;
  public
    constructor Create(aName: string);
    procedure Greet;
  end;

constructor Person.Create(aName: string);
begin
  name := aName;
end;

procedure Person.Greet;
begin
  WriteLn('Hallo, ich bin ', name);
end;
```

**Besonderheiten:**
- Trennung zwischen Typdeklaration und Implementation
- Unterstützt `public`, `private`, `protected` und `published` Sektionen

**Weiterführende Links:**
- [Delphi Documentation - Classes](https://docwiki.embarcadero.com/RADStudio/Alexandria/en/Classes_and_Objects)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
class person name =
object
    val name = name
    
    method greet =
        Printf.printf "Hallo, ich bin %s\n" name
end
```

**Besonderheiten:**
- Objekte sind First-Class-Werte
- Unterstützt funktionale und objektorientierte Programmierung

**Weiterführende Links:**
- [OCaml Documentation - Classes](https://v2.ocaml.org/manual/objectexamples.html)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
(defclass person ()
  ((name :initarg :name :accessor person-name)))

(defmethod greet ((p person))
  (format t "Hallo, ich bin ~a~%" (person-name p)))
```

**Besonderheiten:**
- Verwendet CLOS (Common Lisp Object System)
- Klassen werden mit `defclass` definiert, Methoden mit `defmethod`

**Weiterführende Links:**
- [Common Lisp HyperSpec - Classes](http://www.lispworks.com/documentation/HyperSpec/Body/07_.htm)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
(define person%
  (class object%
    (super-new)
    (init-field name)

    (define/public (greet)
      (printf "Hallo, ich bin ~a\n" name))))
```

**Besonderheiten:**
- Verwendet Klassen-System mit `class` und `object%` als Basisklasse
- `(super-new)` ist obligatorisch
- Unterstützt Mixins für Code-Wiederverwendung

**Weiterführende Links:**
- [Racket Documentation - Classes](https://docs.racket-lang.org/guide/classes.html)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
mutable struct Person
    name::String
    
    function Person(name::String)
        new(name)
    end
end

function greet(p::Person)
    println("Hallo, ich bin $(p.name)")
end
```

**Besonderheiten:**
- Verwendet `struct` für Klassen-ähnliche Strukturen
- Methoden werden außerhalb der Struktur definiert

**Weiterführende Links:**
- [Julia Documentation - Types](https://docs.julialang.org/en/v1/manual/types/)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
classdef Person
    properties
        name
    end
    
    methods
        function obj = Person(name)
            obj.name = name;
        end
        
        function greet(obj)
            fprintf('Hallo, ich bin %s\n', obj.name);
        end
    end
end
```

**Besonderheiten:**
- Verwendet `classdef` für Klassendefinitionen
- Eigenschaften und Methoden werden in separaten Blöcken definiert

**Weiterführende Links:**
- [MATLAB Documentation - Classes](https://www.mathworks.com/help/matlab/matlab_oop/classes-in-the-matlab-language.html)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
package Person;

sub new {
    my ($class, $name) = @_;
    my $self = {
        name => $name
    };
    bless $self, $class;
    return $self;
}

sub greet {
    my ($self) = @_;
    print "Hallo, ich bin " . $self->{name} . "\n";
}

1;
```

**Besonderheiten:**
- Verwendet Packages und `bless` für Objektorientierung
- Eigenschaften werden als Hash-Referenzen gespeichert

**Weiterführende Links:**
- [Perl Documentation - Objects](https://perldoc.perl.org/perlobj)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
class Person
{
    var name: String;
    
    public function new(name: String)
    {
        this.name = name;
    }
    
    public function greet(): Void
    {
        trace("Hallo, ich bin " + name);
    }
}
```

**Besonderheiten:**
- Unterstützt Cross-Platform-Entwicklung
- Kompiliert zu verschiedenen Zielsprachen

**Weiterführende Links:**
- [Haxe Documentation - Classes](https://haxe.org/manual/types-class-instance.html)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
class PERSON
feature
    name: STRING
    
    make (a_name: STRING)
        do
            name := a_name
        end
    
    greet
        do
            print ("Hallo, ich bin ")
            print (name)
            print ("%N")
        end
end
```

**Besonderheiten:**
- Verwendet Design-by-Contract mit Pre- und Postconditions
- Unterstützt Multiple Inheritance

**Weiterführende Links:**
- [Eiffel Documentation - Classes](https://www.eiffel.org/doc/eiffel/Language)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Klassen (experimentell)
class Person
{
    private var name: String;
    
    fn New(name: String) -> Person
    {
        return {.name = name};
    }
    
    fn Greet(self: Self)
    {
        Print("Hallo, ich bin {0}", self.name);
    }
}
```

**Besonderheiten:**
- Experimentelle Sprache, Syntax kann sich noch ändern
- C++-ähnliche Syntax mit modernen Features

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
struct Person:
    var name: String
    
    fn __init__(inout self, name: String):
        self.name = name
    
    fn greet(self):
        print("Hallo, ich bin", self.name)
```

**Besonderheiten:**
- Verwendet `struct` für Klassen-ähnliche Strukturen
- Python-ähnliche Syntax mit Typannotationen

**Weiterführende Links:**
- [Mojo Documentation - Structs](https://docs.modular.com/mojo/manual/structs-and-classes/)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
Person[name_] := Module[{},
    <|
        "name" -> name,
        "greet" -> Function[
            Print["Hallo, ich bin ", name]
        ]
    |>
]
```

**Besonderheiten:**
- Verwendet Associations (Assoziative Arrays) für Objekte
- Funktionale Programmierung mit objektorientierten Elementen

**Weiterführende Links:**
- [Wolfram Language Documentation - Objects](https://reference.wolfram.com/language/guide/ObjectOrientedProgramming.html)

</TabItem>
</Tabs>


## 8.1.2. Objekt-Instanziierung

Erstellung von Objektinstanzen aus einer Klassendefinition.

### Sprachen {#sprachen}

<Tabs availableTabs={['carbon', 'common-lisp', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'eiffel', 'fsharp', 'groovy', 'haxe', 'java', 'javascript', 'julia', 'kotlin', 'matlab', 'mojo', 'nim', 'objective-c', 'object-pascal', 'ocaml', 'perl', 'php', 'python', 'racket', 'ruby', 'scala', 'swift', 'typescript', 'vbnet', 'wolfram-language']} yellowTabs={['lean4']}>
<TabItem value="csharp" label="C#">

```csharp
Person person = new Person("Max");
person.Greet();
```

**Besonderheiten:**
- `new`-Operator erstellt eine Instanz
- Unterstützt Object Initializers: `new Person("Max") { Age = 30 }`

**Weiterführende Links:**
- [Microsoft C# Documentation - Objects](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/object-oriented/)

</TabItem>
<TabItem value="java" label="Java">

```java
Person person = new Person("Max");
person.greet();
```

**Besonderheiten:**
- `new`-Operator erstellt eine Instanz
- Konstruktor wird automatisch aufgerufen

**Weiterführende Links:**
- [Oracle Java Documentation - Creating Objects](https://docs.oracle.com/javase/tutorial/java/javaOO/objectcreation.html)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
Person person("Max");
person.greet();

// Oder mit new (Heap-Allokation)
Person* personPtr = new Person("Max");
personPtr->greet();
delete personPtr;
```

**Besonderheiten:**
- Stack-Allokation: `Person person("Max")`
- Heap-Allokation mit `new` erfordert `delete` für Speicherfreigabe

**Weiterführende Links:**
- [cppreference.com - Object Creation](https://en.cppreference.com/w/cpp/language/new)

</TabItem>
<TabItem value="python" label="Python">

```python
person = Person("Max")
person.greet()
```

**Besonderheiten:**
- Kein `new`-Operator erforderlich
- Konstruktor wird automatisch aufgerufen

**Weiterführende Links:**
- [Python Documentation - Class Instances](https://docs.python.org/3/tutorial/classes.html#class-objects)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
const person = new Person("Max");
person.greet();
```

**Besonderheiten:**
- `new`-Operator erstellt eine Instanz
- Ohne `new` wird `this` auf das globale Objekt gesetzt

**Weiterführende Links:**
- [MDN Web Docs - new operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
const person: Person = new Person("Max");
person.greet();
```

**Besonderheiten:**
- `new`-Operator erstellt eine Instanz
- Unterstützt Typannotationen

**Weiterführende Links:**
- [TypeScript Documentation - Classes](https://www.typescriptlang.org/docs/handbook/2/classes.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
val person = Person("Max")
person.greet()
```

**Besonderheiten:**
- Kein `new`-Operator erforderlich
- Konstruktor wird automatisch aufgerufen

**Weiterführende Links:**
- [Kotlin Documentation - Instances](https://kotlinlang.org/docs/classes.html#creating-instances-of-classes)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Benannte Feld-Syntax
let person : Person := { name := "Max" }

-- Konstruktor-Syntax
let person2 := Person.mk "Max"

-- Anonymer Konstruktor
let person3 : Person := ⟨"Max"⟩
```

**Besonderheiten:**
- Kein `new`-Operator erforderlich
- Drei Syntaxvarianten: benannte Felder `{ }`, `Type.mk`, anonymer Konstruktor `⟨⟩`
- Typ wird häufig inferiert

**Weiterführende Links:**
- [Functional Programming in Lean - Structures](https://lean-lang.org/functional_programming_in_lean/getting-to-know/structures.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
let person = Person(name: "Max")
person.greet()
```

**Besonderheiten:**
- Kein `new`-Operator erforderlich
- Parameter müssen benannt werden (außer bei einfachen Konstruktoren)

**Weiterführende Links:**
- [Swift Documentation - Initialization](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/initialization/)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
val person = new Person("Max")
person.greet()
```

**Besonderheiten:**
- `new`-Operator erstellt eine Instanz
- Case Classes können ohne `new` instanziiert werden

**Weiterführende Links:**
- [Scala Documentation - Classes](https://docs.scala-lang.org/tour/classes.html)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
person = Person.new("Max")
person.greet
```

**Besonderheiten:**
- `.new`-Methode erstellt eine Instanz
- Konstruktor wird automatisch aufgerufen

**Weiterführende Links:**
- [Ruby Documentation - Objects](https://ruby-doc.org/core-3.1.2/Object.html)

</TabItem>
<TabItem value="php" label="PHP">

```php
$person = new Person("Max");
$person->greet();
```

**Besonderheiten:**
- `new`-Operator erstellt eine Instanz
- `->` wird für Methodenaufrufe verwendet

**Weiterführende Links:**
- [PHP Documentation - Objects](https://www.php.net/manual/en/language.oop5.basic.php)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
var person = Person("Max");
person.greet();
```

**Besonderheiten:**
- Kein `new`-Operator erforderlich (seit Dart 2.0 optional)
- Konstruktor wird automatisch aufgerufen

**Weiterführende Links:**
- [Dart Documentation - Constructors](https://dart.dev/language/constructors)

</TabItem>
<TabItem value="d" label="D">

```d
auto person = new Person("Max");
person.greet();
```

**Besonderheiten:**
- `new`-Operator erstellt eine Instanz auf dem Heap
- Stack-Allokation mit `Person("Max")` möglich

**Weiterführende Links:**
- [D Language Specification - Classes](https://dlang.org/spec/class.html)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
person = Person.new("Max")
person.greet
```

**Besonderheiten:**
- `.new`-Methode erstellt eine Instanz
- Konstruktor wird automatisch aufgerufen

**Weiterführende Links:**
- [Crystal Documentation - Classes](https://crystal-lang.org/reference/1.11/syntax_and_semantics/classes_and_methods.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
var person = newPerson("Max")
person.greet()
```

**Besonderheiten:**
- Konstruktor-Funktion erstellt eine Instanz
- Kein `new`-Operator, sondern normale Funktion

**Weiterführende Links:**
- [Nim Documentation - Objects](https://nim-lang.org/docs/manual.html#types-object-types)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
def person = new Person("Max")
person.greet()
```

**Besonderheiten:**
- `new`-Operator erstellt eine Instanz
- Unterstützt Named Parameters

**Weiterführende Links:**
- [Groovy Documentation - Objects](https://groovy-lang.org/objectorientation.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
let person = Person("Max")
person.Greet()
```

**Besonderheiten:**
- Kein `new`-Operator erforderlich
- Konstruktor wird automatisch aufgerufen

**Weiterführende Links:**
- [F# Documentation - Classes](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/classes)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
Dim person As Person = New Person("Max")
person.Greet()
```

**Besonderheiten:**
- `New`-Operator erstellt eine Instanz
- Unterstützt Object Initializers

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Objects](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/objects-and-classes/)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
Person* person = [[Person alloc] initWithName:@"Max"];
[person greet];
```

**Besonderheiten:**
- `alloc` und `init`-Methoden erstellen eine Instanz
- Message-Passing-Syntax mit eckigen Klammern

**Weiterführende Links:**
- [Apple Objective-C Documentation - Objects](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
var person: Person;
begin
  person := Person.Create('Max');
  person.Greet;
end;
```

**Besonderheiten:**
- `.Create`-Konstruktor erstellt eine Instanz
- Explizite Speicherverwaltung erforderlich

**Weiterführende Links:**
- [Delphi Documentation - Objects](https://docwiki.embarcadero.com/RADStudio/Alexandria/en/Classes_and_Objects)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
let person = new person "Max" in
person#greet
```

**Besonderheiten:**
- `new`-Operator erstellt eine Instanz
- Methodenaufrufe mit `#`-Operator

**Weiterführende Links:**
- [OCaml Documentation - Objects](https://v2.ocaml.org/manual/objectexamples.html)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
(let ((person (make-instance 'person :name "Max")))
  (greet person))
```

**Besonderheiten:**
- `make-instance` erstellt eine Instanz
- Schlüsselwort-Argumente für Initialisierung

**Weiterführende Links:**
- [Common Lisp HyperSpec - make-instance](http://www.lispworks.com/documentation/HyperSpec/Body/f_mk_ins.htm)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
(define person (new person% [name "Max"]))
(send person greet)
```

**Besonderheiten:**
- `new` erstellt eine Instanz
- `send` ruft Methoden auf

**Weiterführende Links:**
- [Racket Documentation - Objects](https://docs.racket-lang.org/guide/classes.html)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
person = Person("Max")
greet(person)
```

**Besonderheiten:**
- Konstruktor wird als normale Funktion aufgerufen
- Kein `new`-Operator erforderlich

**Weiterführende Links:**
- [Julia Documentation - Constructors](https://docs.julialang.org/en/v1/manual/constructors/)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
person = Person('Max');
person.greet();
```

**Besonderheiten:**
- Konstruktor wird als normale Funktion aufgerufen
- Kein `new`-Operator erforderlich

**Weiterführende Links:**
- [MATLAB Documentation - Objects](https://www.mathworks.com/help/matlab/matlab_oop/creating-objects.html)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
my $person = Person->new("Max");
$person->greet();
```

**Besonderheiten:**
- `->new`-Methode erstellt eine Instanz
- `->` wird für Methodenaufrufe verwendet

**Weiterführende Links:**
- [Perl Documentation - Objects](https://perldoc.perl.org/perlobj)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
var person = new Person("Max");
person.greet();
```

**Besonderheiten:**
- `new`-Operator erstellt eine Instanz
- Cross-Platform-kompatibel

**Weiterführende Links:**
- [Haxe Documentation - Classes](https://haxe.org/manual/types-class-instance.html)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
local
    person: PERSON
do
    create person.make ("Max")
    person.greet
end
```

**Besonderheiten:**
- `create` erstellt eine Instanz
- Konstruktor wird explizit aufgerufen

**Weiterführende Links:**
- [Eiffel Documentation - Creation](https://www.eiffel.org/doc/eiffel/Language)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Objekt-Instanziierung (experimentell)
var person: Person = Person.New("Max");
person.Greet();
```

**Besonderheiten:**
- Experimentelle Sprache, Syntax kann sich noch ändern
- C++-ähnliche Syntax mit modernen Features

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
var person = Person("Max")
person.greet()
```

**Besonderheiten:**
- Konstruktor wird als normale Funktion aufgerufen
- Python-ähnliche Syntax

**Weiterführende Links:**
- [Mojo Documentation - Structs](https://docs.modular.com/mojo/manual/structs-and-classes/)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
person = Person["Max"];
person["greet"][]
```

**Besonderheiten:**
- Funktion erstellt eine Association (Objekt)
- Methoden werden als Funktionen in der Association gespeichert

**Weiterführende Links:**
- [Wolfram Language Documentation - Objects](https://reference.wolfram.com/language/guide/ObjectOrientedProgramming.html)

</TabItem>
</Tabs>


## 8.1.3. Konstruktoren

Spezielle Methoden zur Initialisierung von Objektinstanzen bei der Erstellung.

### Sprachen {#sprachen}

<Tabs availableTabs={['carbon', 'common-lisp', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'eiffel', 'fsharp', 'groovy', 'haxe', 'java', 'javascript', 'julia', 'kotlin', 'matlab', 'mojo', 'nim', 'objective-c', 'object-pascal', 'ocaml', 'perl', 'python', 'racket', 'ruby', 'scala', 'swift', 'typescript', 'vbnet', 'wolfram-language']} yellowTabs={['lean4', 'php']}>
<TabItem value="csharp" label="C#">

```csharp
class Person
{
    public string Name { get; set; }
    public int Age { get; set; }
    
    public Person(string name)
    {
        Name = name;
    }
    
    public Person(string name, int age) : this(name)
    {
        Age = age;
    }
}
```

**Besonderheiten:**
- Konstruktoren haben denselben Namen wie die Klasse
- Unterstützt Konstruktor-Chaining mit `: this(...)`

**Weiterführende Links:**
- [Microsoft C# Documentation - Constructors](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/constructors)

</TabItem>
<TabItem value="java" label="Java">

```java
class Person
{
    private String name;
    private int age;
    
    public Person(String name)
    {
        this.name = name;
    }
    
    public Person(String name, int age)
    {
        this(name);
        this.age = age;
    }
}
```

**Besonderheiten:**
- Konstruktoren haben denselben Namen wie die Klasse
- Unterstützt Konstruktor-Chaining mit `this(...)`

**Weiterführende Links:**
- [Oracle Java Documentation - Constructors](https://docs.oracle.com/javase/tutorial/java/javaOO/constructors.html)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
class Person
{
private:
    std::string name;
    int age;
    
public:
    Person(const std::string& name) : name(name) {}
    
    Person(const std::string& name, int age) : name(name), age(age) {}
};
```

**Besonderheiten:**
- Initialisierungsliste für effiziente Initialisierung
- Unterstützt Delegating Constructors (seit C++11)

**Weiterführende Links:**
- [cppreference.com - Constructors](https://en.cppreference.com/w/cpp/language/constructor)

</TabItem>
<TabItem value="python" label="Python">

```python
class Person:
    def __init__(self, name, age=0):
        self.name = name
        self.age = age

person1 = Person("Alice")
person2 = Person("Bob", 30)
```

**Besonderheiten:**
- `__init__` ist der Konstruktor
- Keine Konstruktor-Überladung – stattdessen Default-Parameter verwenden
- `__new__` für spezielle Instanziierung (z.B. Singletons)

**Weiterführende Links:**
- [Python Documentation - __init__](https://docs.python.org/3/reference/datamodel.html#object.__init__)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
class Person
{
    constructor(name)
    {
        this.name = name;
    }
    
    constructor(name, age)
    {
        this.name = name;
        this.age = age;
    }
}
```

**Besonderheiten:**
- `constructor` ist der Konstruktor
- JavaScript unterstützt keine echte Überladung, letzter `constructor` überschreibt vorherige

**Weiterführende Links:**
- [MDN Web Docs - constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
class Person
{
    name: string;
    age?: number;
    
    // Konstruktor-Überladung: mehrere Signaturen, eine Implementierung
    constructor(name: string);
    constructor(name: string, age: number);
    constructor(name: string, age?: number)
    {
        this.name = name;
        this.age = age;
    }
}
```

**Besonderheiten:**
- `constructor` ist der Konstruktor mit Typannotationen
- Nur eine Konstruktor-Implementierung erlaubt
- Mehrere Konstruktor-Signaturen möglich (Overloading)
- Unterstützt optionale Parameter und Parameter-Properties

**Weiterführende Links:**
- [TypeScript Documentation - Constructors](https://www.typescriptlang.org/docs/handbook/2/classes.html#constructors)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
class Person(val name: String)
{
    var age: Int = 0
    
    constructor(name: String, age: Int) : this(name)
    {
        this.age = age
    }
}
```

**Besonderheiten:**
- Primärer Konstruktor kann direkt in der Klassendeklaration stehen
- Sekundäre Konstruktoren müssen primären Konstruktor aufrufen

**Weiterführende Links:**
- [Kotlin Documentation - Constructors](https://kotlinlang.org/docs/classes.html#constructors)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Standardkonstruktor wird automatisch generiert
structure Person where
  name : String
  age : Nat := 0

-- Verschiedene Instanziierungsmöglichkeiten
let p1 := Person.mk "Max" 30
let p2 : Person := { name := "Max" }          -- age nutzt Standardwert
let p3 : Person := { name := "Max", age := 25 }

-- Benutzerdefinierter Konstruktor als Funktion
def Person.create (name : String) : Person :=
  { name := name, age := 0 }
```

**Besonderheiten:**
- `mk`-Konstruktor wird automatisch generiert
- Felder mit Standardwerten können bei Instanziierung weggelassen werden
- Benutzerdefinierte Konstruktoren als Namespace-Funktionen

**Weiterführende Links:**
- [Functional Programming in Lean - Structures](https://lean-lang.org/functional_programming_in_lean/getting-to-know/structures.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
class Person
{
    var name: String
    var age: Int
    
    init(name: String)
    {
        self.name = name
        self.age = 0
    }
    
    init(name: String, age: Int)
    {
        self.name = name
        self.age = age
    }
}
```

**Besonderheiten:**
- `init` ist der Konstruktor
- Unterstützt Convenience Initializers

**Weiterführende Links:**
- [Swift Documentation - Initialization](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/initialization/)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
class Person(val name: String)
{
    var age: Int = 0
    
    def this(name: String, age: Int) =
    {
        this(name)
        this.age = age
    }
}
```

**Besonderheiten:**
- Primärer Konstruktor kann direkt in der Klassendeklaration stehen
- Sekundäre Konstruktoren mit `this(...)`

**Weiterführende Links:**
- [Scala Documentation - Constructors](https://docs.scala-lang.org/tour/classes.html)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
class Person
    def initialize(name)
        @name = name
    end
    
    def initialize(name, age)
        @name = name
        @age = age
    end
end
```

**Besonderheiten:**
- `initialize` ist der Konstruktor
- Ruby unterstützt keine echte Überladung, letzter `initialize` überschreibt vorherige

**Weiterführende Links:**
- [Ruby Documentation - initialize](https://ruby-doc.org/core-3.1.2/Object.html#method-i-initialize)

</TabItem>
<TabItem value="php" label="PHP">

```php
class Person
{
    private string $name;
    private int $age;

    public function __construct(string $name, int $age = 0)
    {
        $this->name = $name;
        $this->age = $age;
    }
}

// Constructor Promotion (seit PHP 8.0)
class Point
{
    public function __construct(
        public float $x,
        public float $y
    ) {}
}
```

**Besonderheiten:**
- `__construct` ist der Konstruktor
- PHP unterstützt KEINE Konstruktor-Überladung (nur Default-Parameter)
- Constructor Promotion seit PHP 8.0 (Parameter werden automatisch zu Properties)

**Weiterführende Links:**
- [PHP Documentation - Constructors](https://www.php.net/manual/en/language.oop5.decon.php)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
class Person
{
    String name;
    int age;
    
    Person(this.name);
    
    Person.withAge(this.name, this.age);
}
```

**Besonderheiten:**
- Konstruktoren können Parameter direkt an Eigenschaften zuweisen
- Named Constructors für alternative Initialisierung

**Weiterführende Links:**
- [Dart Documentation - Constructors](https://dart.dev/language/constructors)

</TabItem>
<TabItem value="d" label="D">

```d
class Person
{
    private string name;
    private int age;
    
    this(string name)
    {
        this.name = name;
    }
    
    this(string name, int age)
    {
        this.name = name;
        this.age = age;
    }
}
```

**Besonderheiten:**
- `this` ist der Konstruktor
- Unterstützt Konstruktor-Überladung

**Weiterführende Links:**
- [D Language Specification - Constructors](https://dlang.org/spec/class.html#constructor)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
class Person
    property name : String
    property age : Int32
    
    def initialize(@name : String)
    end
    
    def initialize(@name : String, @age : Int32)
    end
end
```

**Besonderheiten:**
- Eigenschaften können direkt im Konstruktor initialisiert werden
- Unterstützt Konstruktor-Überladung

**Weiterführende Links:**
- [Crystal Documentation - Classes](https://crystal-lang.org/reference/1.11/syntax_and_semantics/classes_and_methods.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
type Person = object
    name: string
    age: int

proc newPerson(name: string): Person =
    Person(name: name, age: 0)

proc newPerson(name: string, age: int): Person =
    Person(name: name, age: age)
```

**Besonderheiten:**
- Konstruktor-Funktionen erstellen Instanzen
- Unterstützt Prozedur-Überladung

**Weiterführende Links:**
- [Nim Documentation - Objects](https://nim-lang.org/docs/manual.html#types-object-types)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
class Person
{
    String name
    int age
    
    Person(String name)
    {
        this.name = name
    }
    
    Person(String name, int age)
    {
        this.name = name
        this.age = age
    }
}
```

**Besonderheiten:**
- Konstruktoren haben denselben Namen wie die Klasse
- Unterstützt Konstruktor-Überladung

**Weiterführende Links:**
- [Groovy Documentation - Constructors](https://groovy-lang.org/objectorientation.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
type Person(name: string) =
    let mutable age = 0
    
    new(name: string, age: int) = Person(name)
    then
        age <- age
```

**Besonderheiten:**
- Primärer Konstruktor kann direkt in der Typdeklaration stehen
- Sekundäre Konstruktoren mit `new`

**Weiterführende Links:**
- [F# Documentation - Constructors](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/classes#constructors)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
Class Person
    Private name As String
    Private age As Integer
    
    Public Sub New(name As String)
        Me.name = name
    End Sub
    
    Public Sub New(name As String, age As Integer)
        Me.name = name
        Me.age = age
    End Sub
End Class
```

**Besonderheiten:**
- `New` ist der Konstruktor
- Unterstützt Konstruktor-Überladung

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Constructors](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/objects-and-classes/)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
@interface Person : NSObject
{
    NSString* name;
    int age;
}
- (instancetype)initWithName:(NSString*)name;
- (instancetype)initWithName:(NSString*)name age:(int)age;
@end

@implementation Person
- (instancetype)initWithName:(NSString*)aName
{
    self = [super init];
    if (self) {
        name = aName;
        age = 0;
    }
    return self;
}

- (instancetype)initWithName:(NSString*)aName age:(int)anAge
{
    self = [super init];
    if (self) {
        name = aName;
        age = anAge;
    }
    return self;
}
@end
```

**Besonderheiten:**
- Konstruktoren sind `init`-Methoden
- Named Parameters für bessere Lesbarkeit

**Weiterführende Links:**
- [Apple Objective-C Documentation - Initialization](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Initialization/Initialization.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
type
  Person = class
  private
    name: string;
    age: integer;
  public
    constructor Create(aName: string);
    constructor Create(aName: string; anAge: integer);
  end;

constructor Person.Create(aName: string);
begin
  name := aName;
  age := 0;
end;

constructor Person.Create(aName: string; anAge: integer);
begin
  name := aName;
  age := anAge;
end;
```

**Besonderheiten:**
- Konstruktoren sind `Create`-Methoden
- Unterstützt Konstruktor-Überladung

**Weiterführende Links:**
- [Delphi Documentation - Constructors](https://docwiki.embarcadero.com/RADStudio/Alexandria/en/Classes_and_Objects)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
class person name =
object
    val name = name
    val mutable age = 0
    
    method get_name = name
    method get_age = age
    method set_age a = age <- a
end

class person_with_age name age =
object
    inherit person name
    val mutable age = age
    
    method get_age = age
end
```

**Besonderheiten:**
- Konstruktor-Parameter werden direkt in der Klassendeklaration übergeben
- Unterstützt Vererbung für alternative Initialisierung

**Weiterführende Links:**
- [OCaml Documentation - Classes](https://v2.ocaml.org/manual/objectexamples.html)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
(defclass person ()
  ((name :initarg :name :accessor person-name)
   (age :initarg :age :accessor person-age :initform 0)))

(defmethod initialize-instance :after ((p person) &key name age)
  (when age
    (setf (person-age p) age)))
```

**Besonderheiten:**
- `initialize-instance` ist der Konstruktor
- `:initarg` und `:initform` für Initialisierung

**Weiterführende Links:**
- [Common Lisp HyperSpec - initialize-instance](http://www.lispworks.com/documentation/HyperSpec/Body/f_init_i.htm)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
(define person%
  (class object%
    (super-new)
    (init-field name)
    (init-field [age 0])

    (define/public (get-name) name)
    (define/public (get-age) age)))

(define p (new person% [name "Max"] [age 25]))
```

**Besonderheiten:**
- `init-field` für Konstruktor-Parameter mit automatischem Feld
- `super-new` für Basisklassen-Initialisierung
- Default-Werte für `init-field` möglich

**Weiterführende Links:**
- [Racket Documentation - Classes](https://docs.racket-lang.org/guide/classes.html)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
mutable struct Person
    name::String
    age::Int
    
    function Person(name::String)
        new(name, 0)
    end
    
    function Person(name::String, age::Int)
        new(name, age)
    end
end
```

**Besonderheiten:**
- Konstruktoren sind Funktionen innerhalb der Struktur
- Unterstützt Konstruktor-Überladung

**Weiterführende Links:**
- [Julia Documentation - Constructors](https://docs.julialang.org/en/v1/manual/constructors/)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
classdef Person
    properties
        name
        age
    end
    
    methods
        function obj = Person(name, age)
            if nargin >= 1
                obj.name = name;
            end
            if nargin >= 2
                obj.age = age;
            else
                obj.age = 0;
            end
        end
    end
end
```

**Besonderheiten:**
- Konstruktor ist eine Methode mit demselben Namen wie die Klasse
- Keine echte Überladung: ein Konstruktor mit `nargin`-Prüfung für verschiedene Argumentzahlen
- Seit R2019b auch mit `arguments`-Block möglich

**Weiterführende Links:**
- [MATLAB Documentation - Constructors](https://www.mathworks.com/help/matlab/matlab_oop/class-constructor-methods.html)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
package Person;

sub new {
    my ($class, $name) = @_;
    my $self = {
        name => $name,
        age => 0
    };
    bless $self, $class;
    return $self;
}

sub new_with_age {
    my ($class, $name, $age) = @_;
    my $self = $class->new($name);
    $self->{age} = $age;
    return $self;
}
```

**Besonderheiten:**
- `new` ist der Konstruktor
- Named Constructors für alternative Initialisierung

**Weiterführende Links:**
- [Perl Documentation - Constructors](https://perldoc.perl.org/perlobj)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
class Person {
    var name:String;
    var age:Int;

    public function new(name:String, ?age:Int = 0) {
        this.name = name;
        this.age = age;
    }
}

var p1 = new Person("Max");
var p2 = new Person("Max", 30);
```

**Besonderheiten:**
- `new` ist der einzige Konstruktor (keine Überladung)
- Optionale Parameter mit `?` und Standardwerte ermöglichen Flexibilität

**Weiterführende Links:**
- [Haxe Documentation - Constructors](https://haxe.org/manual/types-class-instance.html)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
class PERSON
feature
    name: STRING
    age: INTEGER
    
    make (a_name: STRING)
        do
            name := a_name
            age := 0
        end
    
    make_with_age (a_name: STRING; an_age: INTEGER)
        do
            name := a_name
            age := an_age
        end
end
```

**Besonderheiten:**
- Konstruktoren sind `make`-Methoden
- Named Constructors für alternative Initialisierung

**Weiterführende Links:**
- [Eiffel Documentation - Creation](https://www.eiffel.org/doc/eiffel/Language)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Konstruktoren (experimentell)
class Person
{
    private var name: String;
    private var age: i32;
    
    fn New(name: String) -> Person
    {
        return {.name = name, .age = 0};
    }
    
    fn New(name: String, age: i32) -> Person
    {
        return {.name = name, .age = age};
    }
}
```

**Besonderheiten:**
- Experimentelle Sprache, Syntax kann sich noch ändern
- C++-ähnliche Syntax mit modernen Features

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
struct Person:
    var name: String
    var age: Int
    
    fn __init__(inout self, name: String):
        self.name = name
        self.age = 0
    
    fn __init__(inout self, name: String, age: Int):
        self.name = name
        self.age = age
```

**Besonderheiten:**
- `__init__` ist der Konstruktor
- Python-ähnliche Syntax mit Typannotationen

**Weiterführende Links:**
- [Mojo Documentation - Structs](https://docs.modular.com/mojo/manual/structs-and-classes/)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
Person[name_] := Module[{},
    <|
        "name" -> name,
        "age" -> 0
    |>
]

Person[name_, age_] := Module[{},
    <|
        "name" -> name,
        "age" -> age
    |>
]
```

**Besonderheiten:**
- Konstruktoren sind Funktionen mit Pattern Matching
- Unterstützt Funktions-Überladung

**Weiterführende Links:**
- [Wolfram Language Documentation - Objects](https://reference.wolfram.com/language/guide/ObjectOrientedProgramming.html)

</TabItem>
</Tabs>


## 8.1.4. Statements before super()

Möglichkeit, Anweisungen vor dem Aufruf des Basisklassen-Konstruktors im abgeleiteten Konstruktor auszuführen.

### Sprachen {#sprachen}

<Tabs availableTabs={['cpp', 'csharp', 'dart', 'java', 'kotlin', 'scala', 'swift', 'typescript']}>
<TabItem value="java" label="Java">

```java
class Base
{
    Base(String value)
    {
        System.out.println("Base: " + value);
    }
}

class Derived extends Base
{
    Derived(String value)
    {
        // Statements vor super() sind nicht erlaubt
        super(value);
        System.out.println("Derived");
    }
}
```

**Besonderheiten:**
- Statements vor `super()` sind nicht erlaubt
- `super()` muss die erste Anweisung im Konstruktor sein

**Weiterführende Links:**
- [Oracle Java Documentation - Using super](https://docs.oracle.com/javase/tutorial/java/IandI/super.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
class Base
{
    public Base(string value)
    {
        Console.WriteLine("Base: " + value);
    }
}

class Derived : Base
{
    public Derived(string value) : base(value)
    {
        // Statements vor base() sind nicht erlaubt
        Console.WriteLine("Derived");
    }
}
```

**Besonderheiten:**
- Statements vor `base()` sind nicht erlaubt
- `base()` muss in der Initialisierungsliste stehen

**Weiterführende Links:**
- [Microsoft C# Documentation - base](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/base)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
open class Base(val value: String)
{
    init
    {
        println("Base: $value")
    }
}

class Derived(value: String) : Base(value)
{
    init
    {
        // Init-Blöcke werden nach dem Basisklassen-Konstruktor ausgeführt
        println("Derived")
    }
}
```

**Besonderheiten:**
- Statements vor dem Basisklassen-Konstruktor sind nicht direkt möglich
- Init-Blöcke werden nach dem Basisklassen-Konstruktor ausgeführt

**Weiterführende Links:**
- [Kotlin Documentation - Inheritance](https://kotlinlang.org/docs/inheritance.html)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
class Base
{
public:
    Base(const std::string& value)
    {
        std::cout << "Base: " << value << std::endl;
    }
};

class Derived : public Base
{
public:
    Derived(const std::string& value) : Base(value)
    {
        // Statements vor Base() sind nicht erlaubt
        std::cout << "Derived" << std::endl;
    }
};
```

**Besonderheiten:**
- Statements vor dem Basisklassen-Konstruktor sind nicht erlaubt
- Basisklassen-Konstruktor muss in der Initialisierungsliste stehen

**Weiterführende Links:**
- [cppreference.com - Initialization list](https://en.cppreference.com/w/cpp/language/initializer_list)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
class Base
{
    Base(String value)
    {
        print("Base: $value");
    }
}

class Derived extends Base
{
    Derived(String value) : super(value)
    {
        // Statements vor super() sind nicht erlaubt
        print("Derived");
    }
}
```

**Besonderheiten:**
- Statements vor `super()` sind nicht erlaubt
- `super()` muss in der Initialisierungsliste stehen

**Weiterführende Links:**
- [Dart Documentation - Constructors](https://dart.dev/language/constructors)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
class Base(val value: String)
{
    println(s"Base: $value")
}

class Derived(value: String) extends Base(value)
{
    // Statements im Klassenkörper werden nach dem Basisklassen-Konstruktor ausgeführt
    println("Derived")
}
```

**Besonderheiten:**
- Statements vor dem Basisklassen-Konstruktor sind nicht direkt möglich
- Statements im Klassenkörper werden nach dem Basisklassen-Konstruktor ausgeführt

**Weiterführende Links:**
- [Scala Documentation - Classes](https://docs.scala-lang.org/tour/classes.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
class Base
{
    init(value: String)
    {
        print("Base: \(value)")
    }
}

class Derived : Base
{
    init(value: String)
    {
        // Statements vor super.init() sind erlaubt
        let processed = value.uppercased()
        super.init(value: processed)
        print("Derived")
    }
}
```

**Besonderheiten:**
- Statements vor `super.init()` sind erlaubt
- Alle Eigenschaften müssen vor `super.init()` initialisiert sein

**Weiterführende Links:**
- [Swift Documentation - Initialization](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/initialization/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
class Base
{
    constructor(value: string)
    {
        console.log("Base: " + value);
    }
}

class Derived extends Base
{
    constructor(value: string)
    {
        // Statements vor super() erlaubt, solange kein this-Zugriff (seit TypeScript 4.6)
        const upperValue = value.toUpperCase();
        console.log("Vorbereitung: " + upperValue);
        super(upperValue);
        console.log("Derived");
    }
}
```

**Besonderheiten:**
- Seit TypeScript 4.6: Statements vor `super()` erlaubt, solange kein `this`-Zugriff
- Vor TypeScript 4.6: `super()` musste die erste Anweisung sein
- Ermöglicht Validierung und Transformation von Argumenten vor dem `super()`-Aufruf

**Weiterführende Links:**
- [TypeScript Documentation - Classes](https://www.typescriptlang.org/docs/handbook/2/classes.html)

</TabItem>

</Tabs>


## 8.1.5. Destruktoren

Spezielle Methoden zur Bereinigung von Ressourcen beim Zerstören von Objektinstanzen.

### Sprachen {#sprachen}

<Tabs availableTabs={['cpp', 'csharp', 'd', 'eiffel', 'nim', 'object-pascal', 'objective-c', 'perl', 'php', 'python', 'swift']} yellowTabs={['matlab']}>
<TabItem value="cpp" label="C++">

```cpp
class Person
{
private:
    std::string* name;
    
public:
    Person(const std::string& n)
    {
        name = new std::string(n);
    }
    
    ~Person()
    {
        delete name;
    }
};
```

**Besonderheiten:**
- Destruktor wird automatisch aufgerufen, wenn Objekt den Scope verlässt
- Wichtig für manuelle Speicherverwaltung

**Weiterführende Links:**
- [cppreference.com - Destructors](https://en.cppreference.com/w/cpp/language/destructor)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
class Person : IDisposable
{
    private string name;
    
    ~Person()
    {
        // Finalizer (wird vom Garbage Collector aufgerufen)
        Cleanup();
    }
    
    public void Dispose()
    {
        // Explizite Bereinigung
        Cleanup();
        GC.SuppressFinalize(this);
    }
    
    private void Cleanup()
    {
        // Bereinigungscode
    }
}
```

**Besonderheiten:**
- Finalizer (`~Person()`) wird vom Garbage Collector aufgerufen
- `IDisposable` für explizite Bereinigung empfohlen

**Weiterführende Links:**
- [Microsoft C# Documentation - Finalizers](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/finalizers)

</TabItem>
<TabItem value="python" label="Python">

```python
class Person:
    def __init__(self, name):
        self.name = name
    
    def __del__(self):
        # Destruktor (wird vom Garbage Collector aufgerufen)
        print(f"Person {self.name} wird zerstört")
```

**Besonderheiten:**
- `__del__` wird vom Garbage Collector aufgerufen
- Zeitpunkt der Ausführung ist nicht garantiert

**Weiterführende Links:**
- [Python Documentation - __del__](https://docs.python.org/3/reference/datamodel.html#object.__del__)

</TabItem>
<TabItem value="d" label="D">

```d
class Person
{
    private string name;
    
    this(string n)
    {
        name = n;
    }
    
    ~this()
    {
        // Destruktor
        writeln("Person wird zerstört");
    }
}
```

**Besonderheiten:**
- Destruktor wird automatisch aufgerufen
- Wichtig für manuelle Ressourcenverwaltung

**Weiterführende Links:**
- [D Language Specification - Destructors](https://dlang.org/spec/class.html#destructor)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
class Person
{
    var name: String
    
    init(name: String)
    {
        self.name = name
    }
    
    deinit
    {
        // Destruktor (wird automatisch aufgerufen)
        print("Person wird zerstört")
    }
}
```

**Besonderheiten:**
- `deinit` wird automatisch aufgerufen, wenn keine Referenzen mehr existieren
- Wird nur bei Referenztypen (classes) verwendet

**Weiterführende Links:**
- [Swift Documentation - Deinitialization](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/deinitialization/)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
@interface Person : NSObject
{
    NSString* name;
}
- (instancetype)initWithName:(NSString*)name;
- (void)dealloc;
@end

@implementation Person
- (instancetype)initWithName:(NSString*)aName
{
    self = [super init];
    if (self) {
        name = [aName retain];
    }
    return self;
}

- (void)dealloc
{
    [name release];
    [super dealloc];
}
@end
```

**Besonderheiten:**
- `dealloc` wird automatisch aufgerufen
- Wichtig für manuelle Speicherverwaltung (MRC)

**Weiterführende Links:**
- [Apple Objective-C Documentation - Memory Management](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/MemoryMgmt/Articles/MemoryMgmt.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
type
  Person = class
  private
    name: string;
  public
    constructor Create(aName: string);
    destructor Destroy; override;
  end;

destructor Person.Destroy;
begin
  // Bereinigungscode
  inherited Destroy;
end;
```

**Besonderheiten:**
- `Destroy` ist der Destruktor
- Muss `inherited Destroy` aufrufen

**Weiterführende Links:**
- [Delphi Documentation - Destructors](https://docwiki.embarcadero.com/RADStudio/Alexandria/en/Classes_and_Objects)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
class PERSON
feature
    name: STRING
    
    make (a_name: STRING)
        do
            name := a_name
        end
    
    dispose
        do
            -- Bereinigungscode
        end
end
```

**Besonderheiten:**
- `dispose` für explizite Bereinigung
- Garbage Collection übernimmt automatische Bereinigung

**Weiterführende Links:**
- [Eiffel Documentation - Memory Management](https://www.eiffel.org/doc/eiffel/Language)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
classdef Resource < handle
    properties
        name
    end
    
    methods
        function obj = Resource(name)
            obj.name = name;
            fprintf('Ressource "%s" erstellt\n', name);
        end
        
        function delete(obj)
            fprintf('Ressource "%s" freigegeben\n', obj.name);
        end
    end
end
```

**Besonderheiten:**
- Destruktoren nur für Handle-Klassen (`< handle`)
- `delete`-Methode wird automatisch beim Entfernen aufgerufen
- Value-Klassen haben keine Destruktoren

**Weiterführende Links:**
- [MATLAB Documentation - Handle Class Destructor](https://www.mathworks.com/help/matlab/matlab_oop/handle-class-destructors.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Destruktoren (seit Nim 1.0 mit ARC/ORC)
type
  Resource = object
    data: ptr int

proc `=destroy`(r: Resource) =
  if r.data != nil:
    dealloc(r.data)
    echo "Resource freed"

proc newResource(value: int): Resource =
  result.data = cast[ptr int](alloc(sizeof(int)))
  result.data[] = value

block:
  var r = newResource(42)
  # Destruktor wird automatisch am Ende des Scopes aufgerufen
```

**Besonderheiten:**
- `=destroy` Hook für Destruktoren (seit Nim 1.0 mit ARC/ORC)
- Wird automatisch am Ende des Scopes aufgerufen
- Unterstützt auch `=copy`, `=sink`, `=wasMoved` Hooks

**Weiterführende Links:**
- [Nim Documentation - Destructors](https://nim-lang.org/docs/destructors.html)

</TabItem>
<TabItem value="php" label="PHP">

```php
class FileHandler
{
    private $handle;

    public function __construct(string $filename)
    {
        $this->handle = fopen($filename, 'r');
    }

    public function __destruct()
    {
        if ($this->handle) {
            fclose($this->handle);
        }
    }
}
```

**Besonderheiten:**
- `__destruct()` wird aufgerufen, wenn keine Referenzen mehr existieren
- Wird auch am Ende des Skripts aufgerufen
- Reihenfolge der Destruktor-Aufrufe ist nicht garantiert

**Weiterführende Links:**
- [PHP Documentation - Destructors](https://www.php.net/manual/en/language.oop5.decon.php#language.oop5.decon.destructor)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
package FileHandler;

sub new {
    my ($class, $filename) = @_;
    open(my $fh, '<', $filename) or die "Cannot open: $!";
    my $self = { fh => $fh, filename => $filename };
    bless $self, $class;
    return $self;
}

sub DESTROY {
    my ($self) = @_;
    close($self->{fh}) if $self->{fh};
    print "FileHandler für $self->{filename} freigegeben\n";
}
```

**Besonderheiten:**
- `DESTROY` wird aufgerufen, wenn der Referenzzähler eines Objekts auf 0 fällt
- Wird automatisch vom Garbage Collector aufgerufen
- Reihenfolge der Destruktor-Aufrufe ist nicht garantiert

**Weiterführende Links:**
- [Perl Documentation - Destructors](https://perldoc.perl.org/perlobj#Destructors)

</TabItem>
</Tabs>


## 8.1.6. Properties / Fields

Datenfelder oder Eigenschaften, die den Zustand einer Klasse speichern.

### Sprachen {#sprachen}

<Tabs availableTabs={['carbon', 'common-lisp', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'eiffel', 'fsharp', 'groovy', 'haxe', 'java', 'javascript', 'julia', 'kotlin', 'matlab', 'mojo', 'nim', 'objective-c', 'object-pascal', 'ocaml', 'perl', 'php', 'python', 'racket', 'ruby', 'scala', 'swift', 'typescript', 'vbnet', 'wolfram-language']} yellowTabs={['lean4']}>
<TabItem value="csharp" label="C#">

```csharp
class Person
{
    public string Name;  // Public Field
    private int age;     // Private Field
    
    public int Age       // Property
    {
        get { return age; }
        set { age = value; }
    }
}
```

**Besonderheiten:**
- Unterstützt sowohl Fields als auch Properties
- Properties können Getter/Setter haben

**Weiterführende Links:**
- [Microsoft C# Documentation - Properties](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/properties)

</TabItem>
<TabItem value="java" label="Java">

```java
class Person
{
    public String name;  // Public Field
    private int age;     // Private Field
    
    public int getAge()
    {
        return age;
    }
    
    public void setAge(int age)
    {
        this.age = age;
    }
}
```

**Besonderheiten:**
- Unterstützt nur Fields
- Getter/Setter werden konventionell als Methoden implementiert

**Weiterführende Links:**
- [Oracle Java Documentation - Fields](https://docs.oracle.com/javase/tutorial/java/javaOO/classvars.html)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
class Person
{
public:
    std::string name;   // Public Field
private:
    int age;            // Private Field
};
```

**Besonderheiten:**
- Unterstützt nur Fields
- Zugriffsmodifikatoren: `public`, `private`, `protected`

**Weiterführende Links:**
- [cppreference.com - Data Members](https://en.cppreference.com/w/cpp/language/data_members)

</TabItem>
<TabItem value="python" label="Python">

```python
class Person:
    def __init__(self, name):
        self.name = name  # Public Field
        self._age = 0      # Protected Field (Konvention)
        self.__id = 0      # Private Field (Name Mangling)
```

**Besonderheiten:**
- Alle Felder sind öffentlich
- `_` für protected, `__` für private (Name Mangling)

**Weiterführende Links:**
- [Python Documentation - Class and Instance Variables](https://docs.python.org/3/tutorial/classes.html#class-and-instance-variables)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
class Person
{
    constructor(name)
    {
        this.name = name;  // Public Field
        this._age = 0;     // Protected Field (Konvention)
    }
}
```

**Besonderheiten:**
- Felder werden im Konstruktor initialisiert
- Private Fields mit `#` (seit ES2022)

**Weiterführende Links:**
- [MDN Web Docs - Class Fields](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
class Person
{
    name: string;        // Public Field
    private age: number; // Private Field
    protected id: number; // Protected Field
    
    constructor(name: string)
    {
        this.name = name;
    }
}
```

**Besonderheiten:**
- Unterstützt Typannotationen
- Zugriffsmodifikatoren: `public`, `private`, `protected`

**Weiterführende Links:**
- [TypeScript Documentation - Classes](https://www.typescriptlang.org/docs/handbook/2/classes.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
class Person(val name: String)  // Read-only Property
{
    var age: Int = 0             // Mutable Property
    private var id: Int = 0      // Private Property
}
```

**Besonderheiten:**
- `val` für read-only, `var` für mutable Properties
- Properties können direkt im primären Konstruktor deklariert werden

**Weiterführende Links:**
- [Kotlin Documentation - Properties](https://kotlinlang.org/docs/properties.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
structure Person where
  name : String          -- Feld (standardmäßig immutable)
  age : Nat := 0         -- Feld mit Standardwert
  id : String := ""      -- Weiteres Feld mit Standardwert
```

**Besonderheiten:**
- Felder werden in der `structure`-Deklaration definiert
- Alle Felder sind standardmäßig immutable (Werttypen)
- Standardwerte über `:=` direkt bei der Deklaration
- Automatisch generierte Accessor-Funktionen (z.B. `Person.name`)

**Weiterführende Links:**
- [Functional Programming in Lean - Structures](https://lean-lang.org/functional_programming_in_lean/getting-to-know/structures.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
class Person
{
    var name: String     // Mutable Property
    let id: Int          // Immutable Property
    private var age: Int // Private Property
}
```

**Besonderheiten:**
- `var` für mutable, `let` für immutable Properties
- Unterstützt Computed Properties

**Weiterführende Links:**
- [Swift Documentation - Properties](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/properties/)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
class Person(val name: String)  // Immutable Field
{
    var age: Int = 0            // Mutable Field
    private var id: Int = 0     // Private Field
}
```

**Besonderheiten:**
- `val` für immutable, `var` für mutable Fields
- Fields können direkt im primären Konstruktor deklariert werden

**Weiterführende Links:**
- [Scala Documentation - Classes](https://docs.scala-lang.org/tour/classes.html)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
class Person
    def initialize(name)
        @name = name  # Instance Variable
        @age = 0      # Instance Variable
    end
    
    attr_accessor :age  # Getter/Setter für age
    attr_reader :name  # Getter für name
end
```

**Besonderheiten:**
- Instance Variables beginnen mit `@`
- `attr_accessor`, `attr_reader`, `attr_writer` für Getter/Setter

**Weiterführende Links:**
- [Ruby Documentation - Instance Variables](https://ruby-doc.org/core-3.1.2/doc/syntax/assignment_rdoc.html)

</TabItem>
<TabItem value="php" label="PHP">

```php
class Person
{
    public $name;      // Public Property
    private $age;      // Private Property
    protected $id;    // Protected Property
}
```

**Besonderheiten:**
- Zugriffsmodifikatoren: `public`, `private`, `protected`
- Properties müssen explizit deklariert werden

**Weiterführende Links:**
- [PHP Documentation - Properties](https://www.php.net/manual/en/language.oop5.properties.php)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
class Person
{
    String name;      // Public Field
    int _age;         // Private Field (beginnt mit _)
    
    Person(this.name);
}
```

**Besonderheiten:**
- Private Fields beginnen mit `_`
- Fields können direkt im Konstruktor initialisiert werden

**Weiterführende Links:**
- [Dart Documentation - Instance Variables](https://dart.dev/language/classes#instance-variables)

</TabItem>
<TabItem value="d" label="D">

```d
class Person
{
    string name;      // Public Field
    private int age;   // Private Field
    protected int id; // Protected Field
}
```

**Besonderheiten:**
- Zugriffsmodifikatoren: `public`, `private`, `protected`
- Ähnlich zu C++

**Weiterführende Links:**
- [D Language Specification - Fields](https://dlang.org/spec/class.html#fields)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
class Person
    property name : String  # Property mit Getter/Setter
    @age : Int32            # Instance Variable
end
```

**Besonderheiten:**
- `property` für Getter/Setter
- `@` für Instance Variables

**Weiterführende Links:**
- [Crystal Documentation - Instance Variables](https://crystal-lang.org/reference/1.11/syntax_and_semantics/instance_variables.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
type Person = object
    name: string    # Public Field
    age: int        # Public Field
```

**Besonderheiten:**
- Fields werden in `object`-Typen deklariert
- Alle Fields sind standardmäßig öffentlich

**Weiterführende Links:**
- [Nim Documentation - Objects](https://nim-lang.org/docs/manual.html#types-object-types)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
class Person
{
    String name     // Public Property
    private int age // Private Property
}
```

**Besonderheiten:**
- Properties haben automatisch Getter/Setter
- Zugriffsmodifikatoren: `public`, `private`, `protected`

**Weiterführende Links:**
- [Groovy Documentation - Properties](https://groovy-lang.org/objectorientation.html#_properties)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
type Person(name: string) =
    member val Name = name with get, set
    member val Age = 0 with get, set
    member val Id = 0 with get
```

**Besonderheiten:**
- Auto-Properties mit `member val`
- `with get, set` für mutable, `with get` für immutable

**Weiterführende Links:**
- [F# Documentation - Properties](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/members/properties)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
Class Person
    Public Name As String
    Private Age As Integer
    Protected Id As Integer
End Class
```

**Besonderheiten:**
- Zugriffsmodifikatoren: `Public`, `Private`, `Protected`
- Ähnlich zu C#

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Properties](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/procedures/property-procedures)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
@interface Person : NSObject
{
    NSString* name;  // Instance Variable
    int age;         // Instance Variable
}
@property (nonatomic, strong) NSString* name;
@property (nonatomic, assign) int age;
@end
```

**Besonderheiten:**
- `@property` generiert automatisch Getter/Setter
- Instance Variables in `{}` Block

**Weiterführende Links:**
- [Apple Objective-C Documentation - Properties](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/EncapsulatingData/EncapsulatingData.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
type
  Person = class
  private
    name: string;
    age: integer;
  public
    property Name: string read name write name;
    property Age: integer read age write age;
  end;
```

**Besonderheiten:**
- Properties mit `property` deklariert
- `read` und `write` für Getter/Setter

**Weiterführende Links:**
- [Delphi Documentation - Properties](https://docwiki.embarcadero.com/RADStudio/Alexandria/en/Properties)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
class person name =
object
    val name = name
    val mutable age = 0
    
    method get_name = name
    method get_age = age
    method set_age a = age <- a
end
```

**Besonderheiten:**
- `val` für immutable, `val mutable` für mutable Fields
- Methods für Zugriff

**Weiterführende Links:**
- [OCaml Documentation - Classes](https://v2.ocaml.org/manual/objectexamples.html)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
(defclass person ()
  ((name :initarg :name :accessor person-name)
   (age :initarg :age :accessor person-age :initform 0)))
```

**Besonderheiten:**
- Slots mit `:initarg`, `:accessor`, `:initform`
- Accessors generieren Getter/Setter

**Weiterführende Links:**
- [Common Lisp HyperSpec - Slots](http://www.lispworks.com/documentation/HyperSpec/Body/m_defcla.htm)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
(define person%
  (class object%
    (super-new)
    (init-field name)
    (field [age 0])

    (define/public (get-name) name)
    (define/public (get-age) age)
    (define/public (set-age a) (set! age a))))
```

**Besonderheiten:**
- `init-field` für Konstruktor-Parameter
- `field` für Instance Variables mit Default-Wert

**Weiterführende Links:**
- [Racket Documentation - Classes](https://docs.racket-lang.org/guide/classes.html)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
mutable struct Person
    name::String
    age::Int
end
```

**Besonderheiten:**
- Fields werden in `struct` deklariert
- `mutable struct` für veränderliche Felder

**Weiterführende Links:**
- [Julia Documentation - Composite Types](https://docs.julialang.org/en/v1/manual/types/#Composite-Types)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
classdef Person
    properties
        name
        age
    end
    
    properties (Access = private)
        id
    end
end
```

**Besonderheiten:**
- Properties in `properties` Block
- Zugriffsmodifikatoren: `public`, `private`, `protected`

**Weiterführende Links:**
- [MATLAB Documentation - Properties](https://www.mathworks.com/help/matlab/matlab_oop/properties.html)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
package Person;

sub new {
    my ($class, $name) = @_;
    my $self = {
        name => $name,  # Hash-Key als Field
        age => 0
    };
    bless $self, $class;
    return $self;
}
```

**Besonderheiten:**
- Fields werden als Hash-Keys gespeichert
- Keine explizite Deklaration

**Weiterführende Links:**
- [Perl Documentation - Objects](https://perldoc.perl.org/perlobj)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
class Person {
    public var name:String;
    private var age:Int;
    var id:Int; // Standard: private
}
```

**Besonderheiten:**
- Zugriffsmodifikatoren: `public`, `private`
- Standard-Zugriff ist `private` (ohne Modifier)
- Haxe hat kein `protected` Keyword

**Weiterführende Links:**
- [Haxe Documentation - Class Fields](https://haxe.org/manual/class-field.html)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
class PERSON
feature
    name: STRING
    age: INTEGER
    
feature {NONE}
    id: INTEGER
end
```

**Besonderheiten:**
- Features in `feature` Block
- Zugriffsmodifikatoren durch Export-Klauseln

**Weiterführende Links:**
- [Eiffel Documentation - Features](https://www.eiffel.org/doc/eiffel/Language)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Properties / Fields (experimentell)
class Person
{
    private var name: String;
    private var age: i32;
}
```

**Besonderheiten:**
- Experimentelle Sprache, Syntax kann sich noch ändern
- C++-ähnliche Syntax

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
struct Person:
    var name: String
    var age: Int
```

**Besonderheiten:**
- Fields werden in `struct` deklariert
- Python-ähnliche Syntax mit Typannotationen

**Weiterführende Links:**
- [Mojo Documentation - Structs](https://docs.modular.com/mojo/manual/structs-and-classes/)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
Person[name_] := Module[{age = 0},
    <|
        "name" -> name,
        "age" -> age
    |>
]
```

**Besonderheiten:**
- Fields werden als Association-Keys gespeichert
- Funktionale Programmierung mit objektorientierten Elementen

**Weiterführende Links:**
- [Wolfram Language Documentation - Objects](https://reference.wolfram.com/language/guide/ObjectOrientedProgramming.html)

</TabItem>
</Tabs>


## 8.1.7. Methods

Funktionen, die zu einer Klasse gehören und auf Objektinstanzen operieren.

### Sprachen {#sprachen}

<Tabs availableTabs={['carbon', 'common-lisp', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'eiffel', 'fsharp', 'groovy', 'haxe', 'java', 'javascript', 'julia', 'kotlin', 'matlab', 'mojo', 'nim', 'objective-c', 'object-pascal', 'ocaml', 'perl', 'php', 'python', 'racket', 'ruby', 'scala', 'swift', 'typescript', 'vbnet', 'wolfram-language']} yellowTabs={['lean4']}>
<TabItem value="csharp" label="C#">

```csharp
class Person
{
    private string name;
    
    public void Greet()
    {
        Console.WriteLine($"Hallo, ich bin {name}");
    }
    
    public string GetName()
    {
        return name;
    }
}
```

**Besonderheiten:**
- Methoden können `void` oder einen Rückgabetyp haben
- Unterstützt Methoden-Überladung

**Weiterführende Links:**
- [Microsoft C# Documentation - Methods](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/methods)

</TabItem>
<TabItem value="java" label="Java">

```java
class Person
{
    private String name;
    
    public void greet()
    {
        System.out.println("Hallo, ich bin " + name);
    }
    
    public String getName()
    {
        return name;
    }
}
```

**Besonderheiten:**
- Methoden können `void` oder einen Rückgabetyp haben
- Unterstützt Methoden-Überladung

**Weiterführende Links:**
- [Oracle Java Documentation - Methods](https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
class Person
{
private:
    std::string name;
    
public:
    void greet()
    {
        std::cout << "Hallo, ich bin " << name << std::endl;
    }
    
    std::string getName()
    {
        return name;
    }
};
```

**Besonderheiten:**
- Methoden können `void` oder einen Rückgabetyp haben
- Unterstützt Methoden-Überladung und `const`-Methoden

**Weiterführende Links:**
- [cppreference.com - Member Functions](https://en.cppreference.com/w/cpp/language/member_functions)

</TabItem>
<TabItem value="python" label="Python">

```python
class Person:
    def __init__(self, name):
        self.name = name
    
    def greet(self):
        print(f"Hallo, ich bin {self.name}")
    
    def get_name(self):
        return self.name
```

**Besonderheiten:**
- Alle Methoden benötigen `self` als ersten Parameter
- Keine explizite Rückgabetyp-Deklaration

**Weiterführende Links:**
- [Python Documentation - Method Objects](https://docs.python.org/3/tutorial/classes.html#method-objects)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
class Person
{
    constructor(name)
    {
        this.name = name;
    }
    
    greet()
    {
        console.log(`Hallo, ich bin ${this.name}`);
    }
    
    getName()
    {
        return this.name;
    }
}
```

**Besonderheiten:**
- Methoden werden ohne `function`-Keyword deklariert
- `this` verweist auf die Instanz

**Weiterführende Links:**
- [MDN Web Docs - Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
class Person
{
    private name: string;
    
    constructor(name: string)
    {
        this.name = name;
    }
    
    greet(): void
    {
        console.log(`Hallo, ich bin ${this.name}`);
    }
    
    getName(): string
    {
        return this.name;
    }
}
```

**Besonderheiten:**
- Methoden haben Typannotationen für Parameter und Rückgabetypen
- `void` für Methoden ohne Rückgabewert

**Weiterführende Links:**
- [TypeScript Documentation - Methods](https://www.typescriptlang.org/docs/handbook/2/classes.html#methods)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
class Person(val name: String)
{
    fun greet()
    {
        println("Hallo, ich bin $name")
    }
    
    fun getName(): String
    {
        return name
    }
}
```

**Besonderheiten:**
- `fun` für Methodendeklaration
- Unterstützt Default-Parameter

**Weiterführende Links:**
- [Kotlin Documentation - Functions](https://kotlinlang.org/docs/functions.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
structure Person where
  name : String

-- Methoden als Funktionen im Namespace
def Person.greet (p : Person) : IO Unit :=
  IO.println s!"Hallo, ich bin {p.name}"

def Person.getName (p : Person) : String :=
  p.name

-- Aufruf über Dot-Notation
-- let p : Person := { name := "Max" }
-- p.greet       -- IO-Aktion
-- p.getName     -- "Max"
```

**Besonderheiten:**
- Methoden sind Funktionen im Namespace des Typs
- Erster Parameter bestimmt den Empfängertyp für Dot-Notation
- Aufruf über `p.greet` statt `Person.greet p`

**Weiterführende Links:**
- [Functional Programming in Lean - Structures](https://lean-lang.org/functional_programming_in_lean/getting-to-know/structures.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
class Person
{
    var name: String
    
    init(name: String)
    {
        self.name = name
    }
    
    func greet()
    {
        print("Hallo, ich bin \(name)")
    }
    
    func getName() -> String
    {
        return name
    }
}
```

**Besonderheiten:**
- `func` für Methodendeklaration
- Rückgabetyp mit `->` Syntax

**Weiterführende Links:**
- [Swift Documentation - Methods](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/methods/)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
class Person(val name: String)
{
    def greet(): Unit =
    {
        println(s"Hallo, ich bin $name")
    }
    
    def getName(): String =
    {
        name
    }
}
```

**Besonderheiten:**
- `def` für Methodendeklaration
- `Unit` für Methoden ohne Rückgabewert

**Weiterführende Links:**
- [Scala Documentation - Methods](https://docs.scala-lang.org/tour/classes.html)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
class Person
    def initialize(name)
        @name = name
    end
    
    def greet
        puts "Hallo, ich bin #{@name}"
    end
    
    def get_name
        @name
    end
end
```

**Besonderheiten:**
- Methoden werden mit `def` deklariert
- `return` ist optional, letzter Ausdruck wird zurückgegeben

**Weiterführende Links:**
- [Ruby Documentation - Methods](https://ruby-doc.org/core-3.1.2/Method.html)

</TabItem>
<TabItem value="php" label="PHP">

```php
class Person
{
    private $name;
    
    public function __construct($name)
    {
        $this->name = $name;
    }
    
    public function greet()
    {
        echo "Hallo, ich bin " . $this->name;
    }
    
    public function getName()
    {
        return $this->name;
    }
}
```

**Besonderheiten:**
- Methoden werden mit `function` deklariert
- Zugriffsmodifikatoren: `public`, `private`, `protected`

**Weiterführende Links:**
- [PHP Documentation - Methods](https://www.php.net/manual/en/language.oop5.basic.php)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
class Person
{
    String name;
    
    Person(this.name);
    
    void greet()
    {
        print("Hallo, ich bin $name");
    }
    
    String getName()
    {
        return name;
    }
}
```

**Besonderheiten:**
- Methoden können `void` oder einen Rückgabetyp haben
- Unterstützt Named Parameters

**Weiterführende Links:**
- [Dart Documentation - Methods](https://dart.dev/language/classes#instance-methods)

</TabItem>
<TabItem value="d" label="D">

```d
class Person
{
    private string name;
    
    this(string name)
    {
        this.name = name;
    }
    
    void greet()
    {
        writeln("Hallo, ich bin ", name);
    }
    
    string getName()
    {
        return name;
    }
}
```

**Besonderheiten:**
- Methoden können `void` oder einen Rückgabetyp haben
- Ähnlich zu C++

**Weiterführende Links:**
- [D Language Specification - Methods](https://dlang.org/spec/class.html#methods)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
class Person
    property name : String
    
    def initialize(@name : String)
    end
    
    def greet
        puts "Hallo, ich bin #{@name}"
    end
    
    def get_name : String
        @name
    end
end
```

**Besonderheiten:**
- Methoden können Rückgabetyp-Annotationen haben
- Ruby-ähnliche Syntax

**Weiterführende Links:**
- [Crystal Documentation - Methods](https://crystal-lang.org/reference/1.11/syntax_and_semantics/classes_and_methods.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
type Person = object
    name: string

proc greet(self: Person) =
    echo "Hallo, ich bin ", self.name

proc getName(self: Person): string =
    self.name
```

**Besonderheiten:**
- Methoden werden als Prozeduren mit `self`-Parameter definiert
- `proc` für Prozeduren

**Weiterführende Links:**
- [Nim Documentation - Procedures](https://nim-lang.org/docs/manual.html#procedures)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
class Person
{
    String name
    
    Person(String name)
    {
        this.name = name
    }
    
    void greet()
    {
        println "Hallo, ich bin ${name}"
    }
    
    String getName()
    {
        return name
    }
}
```

**Besonderheiten:**
- Ähnlich zu Java, aber mit vereinfachter Syntax
- Unterstützt Closures

**Weiterführende Links:**
- [Groovy Documentation - Methods](https://groovy-lang.org/objectorientation.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
type Person(name: string) =
    member this.Name = name
    
    member this.Greet() =
        printfn "Hallo, ich bin %s" this.Name
    
    member this.GetName() =
        this.Name
```

**Besonderheiten:**
- `member` für Methodendeklaration
- `this` für Instanz-Referenz

**Weiterführende Links:**
- [F# Documentation - Members](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/members/)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
Class Person
    Private name As String
    
    Public Sub New(name As String)
        Me.name = name
    End Sub
    
    Public Sub Greet()
        Console.WriteLine($"Hallo, ich bin {name}")
    End Sub
    
    Public Function GetName() As String
        Return name
    End Function
End Class
```

**Besonderheiten:**
- `Sub` für Methoden ohne Rückgabewert
- `Function` für Methoden mit Rückgabewert

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Methods](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/procedures/)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
@interface Person : NSObject
{
    NSString* name;
}
- (instancetype)initWithName:(NSString*)name;
- (void)greet;
- (NSString*)getName;
@end

@implementation Person
- (instancetype)initWithName:(NSString*)aName
{
    self = [super init];
    if (self) {
        name = aName;
    }
    return self;
}

- (void)greet
{
    NSLog(@"Hallo, ich bin %@", name);
}

- (NSString*)getName
{
    return name;
}
@end
```

**Besonderheiten:**
- Methoden werden mit `-` (Instanz) oder `+` (Klasse) deklariert
- Message-Passing-Syntax

**Weiterführende Links:**
- [Apple Objective-C Documentation - Methods](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/DefiningClasses/DefiningClasses.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
type
  Person = class
  private
    name: string;
  public
    constructor Create(aName: string);
    procedure Greet;
    function GetName: string;
  end;

procedure Person.Greet;
begin
  WriteLn('Hallo, ich bin ', name);
end;

function Person.GetName: string;
begin
  Result := name;
end;
```

**Besonderheiten:**
- `procedure` für Methoden ohne Rückgabewert
- `function` für Methoden mit Rückgabewert

**Weiterführende Links:**
- [Delphi Documentation - Methods](https://docwiki.embarcadero.com/RADStudio/Alexandria/en/Methods)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
class person name =
object
    val name = name
    
    method greet =
        Printf.printf "Hallo, ich bin %s\n" name
    
    method get_name =
        name
end
```

**Besonderheiten:**
- `method` für Methodendeklaration
- Funktionale und objektorientierte Programmierung

**Weiterführende Links:**
- [OCaml Documentation - Methods](https://v2.ocaml.org/manual/objectexamples.html)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
(defclass person ()
  ((name :initarg :name :accessor person-name)))

(defmethod greet ((p person))
  (format t "Hallo, ich bin ~a~%" (person-name p)))

(defmethod get-name ((p person))
  (person-name p))
```

**Besonderheiten:**
- Methoden werden mit `defmethod` definiert
- Multiple Dispatch unterstützt

**Weiterführende Links:**
- [Common Lisp HyperSpec - Methods](http://www.lispworks.com/documentation/HyperSpec/Body/07_.htm)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
(define person%
  (class object%
    (super-new)
    (init-field name)

    (define/public (greet)
      (printf "Hallo, ich bin ~a\n" name))

    (define/public (get-name)
      name)))
```

**Besonderheiten:**
- `define/public` für öffentliche Methoden
- `define/private` für private Methoden

**Weiterführende Links:**
- [Racket Documentation - Methods](https://docs.racket-lang.org/guide/classes.html)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
mutable struct Person
    name::String
end

function greet(p::Person)
    println("Hallo, ich bin $(p.name)")
end

function get_name(p::Person)
    return p.name
end
```

**Besonderheiten:**
- Methoden werden außerhalb der Struktur definiert
- Multiple Dispatch unterstützt

**Weiterführende Links:**
- [Julia Documentation - Methods](https://docs.julialang.org/en/v1/manual/methods/)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
classdef Person
    properties
        name
    end
    
    methods
        function obj = Person(name)
            obj.name = name;
        end
        
        function greet(obj)
            fprintf('Hallo, ich bin %s\n', obj.name);
        end
        
        function name = getName(obj)
            name = obj.name;
        end
    end
end
```

**Besonderheiten:**
- Methoden in `methods` Block
- Erster Parameter ist immer die Instanz (`obj`)

**Weiterführende Links:**
- [MATLAB Documentation - Methods](https://www.mathworks.com/help/matlab/matlab_oop/methods.html)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
package Person;

sub new {
    my ($class, $name) = @_;
    my $self = { name => $name };
    bless $self, $class;
    return $self;
}

sub greet {
    my ($self) = @_;
    print "Hallo, ich bin " . $self->{name} . "\n";
}

sub get_name {
    my ($self) = @_;
    return $self->{name};
}
```

**Besonderheiten:**
- Methoden sind Subroutinen
- Erste Parameter ist immer die Instanz

**Weiterführende Links:**
- [Perl Documentation - Methods](https://perldoc.perl.org/perlobj)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
class Person
{
    var name: String;
    
    public function new(name: String)
    {
        this.name = name;
    }
    
    public function greet(): Void
    {
        trace("Hallo, ich bin " + name);
    }
    
    public function getName(): String
    {
        return name;
    }
}
```

**Besonderheiten:**
- Methoden werden mit `function` deklariert
- Cross-Platform-kompatibel

**Weiterführende Links:**
- [Haxe Documentation - Methods](https://haxe.org/manual/class-field-method.html)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
class PERSON
feature
    name: STRING
    
    make (a_name: STRING)
        do
            name := a_name
        end
    
    greet
        do
            print ("Hallo, ich bin ")
            print (name)
            print ("%N")
        end
    
    get_name: STRING
        do
            Result := name
        end
end
```

**Besonderheiten:**
- Features können Routinen (Methoden) oder Attribute sein
- `Result` für Rückgabewert

**Weiterführende Links:**
- [Eiffel Documentation - Features](https://www.eiffel.org/doc/eiffel/Language)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Methods (experimentell)
class Person
{
    private var name: String;
    
    fn New(name: String) -> Person
    {
        return {.name = name};
    }
    
    fn Greet(self: Self)
    {
        Print("Hallo, ich bin {0}", self.name);
    }
    
    fn GetName(self: Self) -> String
    {
        return self.name;
    }
}
```

**Besonderheiten:**
- Experimentelle Sprache, Syntax kann sich noch ändern
- C++-ähnliche Syntax

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
struct Person:
    var name: String
    
    fn __init__(inout self, name: String):
        self.name = name
    
    fn greet(self):
        print("Hallo, ich bin", self.name)
    
    fn get_name(self) -> String:
        return self.name
```

**Besonderheiten:**
- Methoden werden mit `fn` deklariert
- Python-ähnliche Syntax

**Weiterführende Links:**
- [Mojo Documentation - Methods](https://docs.modular.com/mojo/manual/structs-and-classes/)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
Person[name_] := Module[{},
    <|
        "name" -> name,
        "greet" -> Function[
            Print["Hallo, ich bin ", name]
        ],
        "get_name" -> Function[name]
    |>
]
```

**Besonderheiten:**
- Methoden werden als Funktionen in der Association gespeichert
- Funktionale Programmierung

**Weiterführende Links:**
- [Wolfram Language Documentation - Methods](https://reference.wolfram.com/language/guide/ObjectOrientedProgramming.html)

</TabItem>
</Tabs>


## 8.1.8. Static Members

Klassenmitglieder, die zur Klasse selbst gehören, nicht zu Instanzen.

### Sprachen {#sprachen}

<Tabs availableTabs={['carbon', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'fsharp', 'groovy', 'haxe', 'java', 'javascript', 'julia', 'kotlin', 'matlab', 'mojo', 'nim', 'objective-c', 'object-pascal', 'perl', 'php', 'python', 'ruby', 'scala', 'swift', 'typescript', 'vbnet']} yellowTabs={['lean4']} orangeTabs={['eiffel', 'ocaml']}>
<TabItem value="csharp" label="C#">

```csharp
class Counter
{
    private static int count = 0;
    
    public static int GetCount()
    {
        return count;
    }
    
    public static void Increment()
    {
        count++;
    }
}
```

**Besonderheiten:**
- `static` für statische Members
- Zugriff über Klassenname: `Counter.GetCount()`

**Weiterführende Links:**
- [Microsoft C# Documentation - Static](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/static)

</TabItem>
<TabItem value="java" label="Java">

```java
class Counter
{
    private static int count = 0;
    
    public static int getCount()
    {
        return count;
    }
    
    public static void increment()
    {
        count++;
    }
}
```

**Besonderheiten:**
- `static` für statische Members
- Zugriff über Klassenname: `Counter.getCount()`

**Weiterführende Links:**
- [Oracle Java Documentation - Static](https://docs.oracle.com/javase/tutorial/java/javaOO/classvars.html)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
class Counter
{
private:
    static int count;
    
public:
    static int getCount()
    {
        return count;
    }
    
    static void increment()
    {
        count++;
    }
};

int Counter::count = 0;  // Definition außerhalb der Klasse
```

**Besonderheiten:**
- `static` für statische Members
- Statische Variablen müssen außerhalb der Klasse definiert werden

**Weiterführende Links:**
- [cppreference.com - Static Members](https://en.cppreference.com/w/cpp/language/static)

</TabItem>
<TabItem value="python" label="Python">

```python
class Counter:
    count = 0  # Klassen-Variable (statisch)
    
    @staticmethod
    def get_count():
        return Counter.count
    
    @staticmethod
    def increment():
        Counter.count += 1
```

**Besonderheiten:**
- Klassen-Variablen sind statisch
- `@staticmethod` für statische Methoden

**Weiterführende Links:**
- [Python Documentation - Static Methods](https://docs.python.org/3/library/functions.html#staticmethod)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
class Counter
{
    static count = 0;  // Static Field (seit ES2022)
    
    static getCount()
    {
        return Counter.count;
    }
    
    static increment()
    {
        Counter.count++;
    }
}
```

**Besonderheiten:**
- `static` für statische Members
- Static Fields seit ES2022

**Weiterführende Links:**
- [MDN Web Docs - Static](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
class Counter
{
    private static count: number = 0;
    
    static getCount(): number
    {
        return Counter.count;
    }
    
    static increment(): void
    {
        Counter.count++;
    }
}
```

**Besonderheiten:**
- `static` für statische Members
- Unterstützt Typannotationen

**Weiterführende Links:**
- [TypeScript Documentation - Static Members](https://www.typescriptlang.org/docs/handbook/2/classes.html#static-members)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
class Counter
{
    companion object
    {
        private var count = 0
        
        fun getCount(): Int = count
        
        fun increment()
        {
            count++
        }
    }
}
```

**Besonderheiten:**
- `companion object` für statische Members
- Zugriff über Klassenname: `Counter.getCount()`

**Weiterführende Links:**
- [Kotlin Documentation - Companion Objects](https://kotlinlang.org/docs/object-declarations.html#companion-objects)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
structure Counter where
  value : Nat := 0

namespace Counter
  -- Namespace-Level-Definitionen (äquivalent zu statischen Members)
  def initialValue : Nat := 0

  def create : Counter := {}

  def increment (c : Counter) : Counter :=
    { c with value := c.value + 1 }

  def getCount (c : Counter) : Nat := c.value
end Counter

-- Verwendung
-- let c := Counter.create
-- let c := c.increment
-- Counter.getCount c  -- 1
```

**Besonderheiten:**
- Namespace-Level-Definitionen fungieren als statische Members
- Zugriff über `Namespace.funktion` (z.B. `Counter.create`)
- Kein `static` Keyword — alle Top-Level-Definitionen im Namespace sind statisch

**Weiterführende Links:**
- [Lean 4 Documentation](https://lean-lang.org/lean4/doc/)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
class Counter
{
    static var count = 0
    
    static func getCount() -> Int
    {
        return count
    }
    
    static func increment()
    {
        count += 1
    }
}
```

**Besonderheiten:**
- `static` für statische Members
- Zugriff über Klassenname: `Counter.getCount()`

**Weiterführende Links:**
- [Swift Documentation - Type Properties](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/properties/#type-properties)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
object Counter
{
    private var count = 0
    
    def getCount(): Int = count
    
    def increment(): Unit =
    {
        count += 1
    }
}
```

**Besonderheiten:**
- `object` für Singleton-Objekte (statische Members)
- Zugriff über Objektname: `Counter.getCount()`

**Weiterführende Links:**
- [Scala Documentation - Objects](https://docs.scala-lang.org/tour/singleton-objects.html)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
class Counter
    @@count = 0  # Klassen-Variable (statisch)
    
    def self.get_count
        @@count
    end
    
    def self.increment
        @@count += 1
    end
end
```

**Besonderheiten:**
- `@@` für Klassen-Variablen
- `self.` für Klassen-Methoden

**Weiterführende Links:**
- [Ruby Documentation - Class Variables](https://ruby-doc.org/core-3.1.2/doc/syntax/assignment_rdoc.html)

</TabItem>
<TabItem value="php" label="PHP">

```php
class Counter
{
    private static $count = 0;
    
    public static function getCount()
    {
        return self::$count;
    }
    
    public static function increment()
    {
        self::$count++;
    }
}
```

**Besonderheiten:**
- `static` für statische Members
- Zugriff mit `self::`

**Weiterführende Links:**
- [PHP Documentation - Static](https://www.php.net/manual/en/language.oop5.static.php)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
class Counter
{
    static int count = 0;
    
    static int getCount()
    {
        return count;
    }
    
    static void increment()
    {
        count++;
    }
}
```

**Besonderheiten:**
- `static` für statische Members
- Zugriff über Klassenname: `Counter.getCount()`

**Weiterführende Links:**
- [Dart Documentation - Static](https://dart.dev/language/classes#static-methods-and-variables)

</TabItem>
<TabItem value="d" label="D">

```d
class Counter
{
    private static int count = 0;
    
    static int getCount()
    {
        return count;
    }
    
    static void increment()
    {
        count++;
    }
}
```

**Besonderheiten:**
- `static` für statische Members
- Ähnlich zu C++

**Weiterführende Links:**
- [D Language Specification - Static Members](https://dlang.org/spec/class.html#static-members)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
class Counter
    @@count = 0  # Klassen-Variable (statisch)
    
    def self.get_count
        @@count
    end
    
    def self.increment
        @@count += 1
    end
end
```

**Besonderheiten:**
- `@@` für Klassen-Variablen
- `self.` für Klassen-Methoden

**Weiterführende Links:**
- [Crystal Documentation - Class Variables](https://crystal-lang.org/reference/1.11/syntax_and_semantics/class_variables.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
type Counter = object
    discard

var count = 0  # Modul-Variable (statisch)

proc getCount(): int =
    count

proc increment() =
    count += 1
```

**Besonderheiten:**
- Modul-Variablen sind statisch
- Prozeduren auf Modul-Ebene

**Weiterführende Links:**
- [Nim Documentation - Modules](https://nim-lang.org/docs/manual.html#modules)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
class Counter
{
    private static int count = 0
    
    static int getCount()
    {
        return count
    }
    
    static void increment()
    {
        count++
    }
}
```

**Besonderheiten:**
- `static` für statische Members
- Ähnlich zu Java

**Weiterführende Links:**
- [Groovy Documentation - Static](https://groovy-lang.org/objectorientation.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
type Counter() =
    static member val count = 0 with get, set
    
    static member GetCount() =
        Counter.count
    
    static member Increment() =
        Counter.count <- Counter.count + 1
```

**Besonderheiten:**
- `static member` für statische Members
- Zugriff über Typname: `Counter.GetCount()`

**Weiterführende Links:**
- [F# Documentation - Static Members](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/members/)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
Class Counter
    Private Shared count As Integer = 0
    
    Public Shared Function GetCount() As Integer
        Return count
    End Function
    
    Public Shared Sub Increment()
        count += 1
    End Sub
End Class
```

**Besonderheiten:**
- `Shared` für statische Members
- Zugriff über Klassenname: `Counter.GetCount()`

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Shared](https://learn.microsoft.com/en-us/dotnet/visual-basic/language-reference/modifiers/shared)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
@interface Counter : NSObject
@end

@implementation Counter
+ (int)getCount
{
    static int count = 0;
    return count;
}

+ (void)increment
{
    static int count = 0;
    count++;
}
@end
```

**Besonderheiten:**
- `+` für Klassen-Methoden (statisch)
- Statische Variablen in Methoden

**Weiterführende Links:**
- [Apple Objective-C Documentation - Class Methods](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/DefiningClasses/DefiningClasses.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
type
  Counter = class
  private
    class var count: integer;
  public
    class function GetCount: integer;
    class procedure Increment;
  end;

class function Counter.GetCount: integer;
begin
  Result := count;
end;

class procedure Counter.Increment;
begin
  count := count + 1;
end;
```

**Besonderheiten:**
- `class var` für statische Variablen
- `class function`/`class procedure` für statische Methoden

**Weiterführende Links:**
- [Delphi Documentation - Class Methods](https://docwiki.embarcadero.com/RADStudio/Alexandria/en/Class_Methods)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
class counter =
object
    method get_count =
        let count = ref 0 in
        !count
    
    method increment =
        let count = ref 0 in
        count := !count + 1
end
```

**Besonderheiten:**
- Statische Members werden über Module implementiert
- Klassen haben keine echten statischen Members

**Weiterführende Links:**
- [OCaml Documentation - Classes](https://v2.ocaml.org/manual/objectexamples.html)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
package Counter;

my $count = 0;  # Package-Variable (statisch)

sub get_count {
    return $count;
}

sub increment {
    $count++;
}
```

**Besonderheiten:**
- Package-Variablen sind statisch
- Subroutinen auf Package-Ebene

**Weiterführende Links:**
- [Perl Documentation - Packages](https://perldoc.perl.org/perlmod)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
class Counter
{
    private static var count: Int = 0;
    
    public static function getCount(): Int
    {
        return count;
    }
    
    public static function increment(): Void
    {
        count++;
    }
}
```

**Besonderheiten:**
- `static` für statische Members
- Ähnlich zu Java/C#

**Weiterführende Links:**
- [Haxe Documentation - Static](https://haxe.org/manual/class-field-static.html)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
class COUNTER
feature
    -- Once-Funktion: wird nur einmal ausgeführt, Ergebnis wird gecacht
    shared_count: INTEGER_REF
        once
            create Result
            Result.set_item (0)
        end
    
    increment
        do
            shared_count.set_item (shared_count.item + 1)
        end
    
    get_count: INTEGER
        do
            Result := shared_count.item
        end
end
```

**Besonderheiten:**
- Eiffel hat keine echten statischen Members
- `once`-Funktionen werden nur beim ersten Aufruf ausgeführt und das Ergebnis wird gecacht
- Alle Instanzen teilen sich das Ergebnis einer `once`-Funktion (prozessweit)
- `once`-Routinen sind das Eiffel-Äquivalent zu Singletons und statischen Variablen

**Weiterführende Links:**
- [Eiffel ECMA-367 Standard](https://www.ecma-international.org/publications-and-standards/standards/ecma-367/)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
module Counter
    count = 0
    
    function get_count()
        return count
    end
    
    function increment()
        global count
        count += 1
    end
end
```

**Besonderheiten:**
- Module-Variablen sind statisch
- `global` für Modifikation

**Weiterführende Links:**
- [Julia Documentation - Modules](https://docs.julialang.org/en/v1/manual/modules/)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
classdef MathUtils
    properties (Constant)
        PI = 3.14159265358979
        E  = 2.71828182845905
    end
    
    methods (Static)
        function result = circleArea(radius)
            result = MathUtils.PI * radius^2;
        end
        
        function result = factorial(n)
            if n <= 1
                result = 1;
            else
                result = n * MathUtils.factorial(n - 1);
            end
        end
    end
end

area = MathUtils.circleArea(5);
```

**Besonderheiten:**
- `Constant` für unveränderliche Klassen-Properties (Zugriff: `ClassName.prop`)
- `Static` für statische Methoden (kein `obj`-Parameter)
- `Constant` Properties können zur Laufzeit nicht geändert werden

**Weiterführende Links:**
- [MATLAB Documentation - Static Methods](https://www.mathworks.com/help/matlab/matlab_oop/static-methods.html)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Static Members (experimentell)
class Counter
{
    private static var count: i32 = 0;
    
    static fn GetCount() -> i32
    {
        return count;
    }
    
    static fn Increment()
    {
        count += 1;
    }
}
```

**Besonderheiten:**
- Experimentelle Sprache, Syntax kann sich noch ändern
- C++-ähnliche Syntax

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
struct Counter:
    var count: Int = 0
    
    fn get_count() -> Int:
        return Counter.count
    
    fn increment():
        Counter.count += 1
```

**Besonderheiten:**
- Klassen-Variablen sind statisch
- Python-ähnliche Syntax

**Weiterführende Links:**
- [Mojo Documentation - Structs](https://docs.modular.com/mojo/manual/structs-and-classes/)

</TabItem>
</Tabs>


## 8.1.9. Companion Objects

Singleton-Objekte, die einer Klasse zugeordnet sind und statische Funktionalität bereitstellen.

### Sprachen {#sprachen}

<Tabs availableTabs={['kotlin', 'scala']}>
<TabItem value="kotlin" label="Kotlin">

```kotlin
class Person(val name: String)
{
    companion object
    {
        private var count = 0
        
        fun create(name: String): Person
        {
            count++
            return Person(name)
        }
        
        fun getCount(): Int = count
    }
}

// Verwendung
val person = Person.create("Max")
val count = Person.getCount()
```

**Besonderheiten:**
- `companion object` für statische Funktionalität
- Kann einen Namen haben: `companion object Factory`
- Kann Interfaces implementieren

**Weiterführende Links:**
- [Kotlin Documentation - Companion Objects](https://kotlinlang.org/docs/object-declarations.html#companion-objects)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
class Person(val name: String)

object Person
{
    private var count = 0
    
    def apply(name: String): Person =
    {
        count += 1
        new Person(name)
    }
    
    def getCount(): Int = count
}

// Verwendung
val person = Person("Max")  // Ruft Person.apply auf
val count = Person.getCount()
```

**Besonderheiten:**
- `object` mit demselben Namen wie die Klasse ist ein Companion Object
- `apply`-Methode ermöglicht Konstruktor-ähnliche Syntax
- Kann Traits implementieren

**Weiterführende Links:**
- [Scala Documentation - Companion Objects](https://docs.scala-lang.org/tour/singleton-objects.html)

</TabItem>
</Tabs>


## 8.1.10. Nested Classes / Inner Classes

Klassen, die innerhalb einer anderen Klasse definiert sind und Zugriff auf die äußere Klasse haben.

### Sprachen {#sprachen}

<Tabs availableTabs={['cpp', 'csharp', 'd', 'dart', 'groovy', 'java', 'kotlin', 'object-pascal', 'scala', 'swift', 'typescript']}>
<TabItem value="java" label="Java">

```java
class Outer
{
    private String outerField = "Outer";
    
    class Inner
    {
        void accessOuter()
        {
            System.out.println(outerField);  // Zugriff auf äußere Klasse
        }
    }
    
    static class StaticNested
    {
        // Kein Zugriff auf äußere Klasse
    }
}
```

**Besonderheiten:**
- Innere Klassen haben Zugriff auf Instanz-Members der äußeren Klasse
- Statische verschachtelte Klassen haben keinen Zugriff

**Weiterführende Links:**
- [Oracle Java Documentation - Nested Classes](https://docs.oracle.com/javase/tutorial/java/javaOO/nested.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
class Outer
{
    private string outerField = "Outer";
    
    class Inner
    {
        void AccessOuter(Outer outer)
        {
            Console.WriteLine(outer.outerField);  // Zugriff über Instanz
        }
    }
    
    static class StaticNested
    {
        // Kein Zugriff auf äußere Klasse
    }
}
```

**Besonderheiten:**
- Innere Klassen haben keinen direkten Zugriff auf Instanz-Members
- Zugriff über Instanz der äußeren Klasse

**Weiterführende Links:**
- [Microsoft C# Documentation - Nested Types](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/nested-types)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
class Outer
{
private:
    std::string outerField = "Outer";
    
public:
    class Inner
    {
    public:
        void accessOuter(Outer& outer)
        {
            std::cout << outer.outerField;  // Zugriff über Instanz
        }
    };
    
    class StaticNested
    {
        // Kein Zugriff auf äußere Klasse
    };
};
```

**Besonderheiten:**
- Verschachtelte Klassen haben keinen direkten Zugriff
- Zugriff über Instanz oder Pointer der äußeren Klasse

**Weiterführende Links:**
- [cppreference.com - Nested Classes](https://en.cppreference.com/w/cpp/language/nested_types)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
class Outer
{
    private val outerField = "Outer"
    
    inner class Inner
    {
        fun accessOuter()
        {
            println(outerField)  // Zugriff auf äußere Klasse
            println(this@Outer.outerField)  // Expliziter Zugriff
        }
    }
    
    class Nested
    {
        // Kein Zugriff auf äußere Klasse (nicht inner)
    }
}
```

**Besonderheiten:**
- `inner` für innere Klassen mit Zugriff auf äußere Klasse
- Ohne `inner` sind es verschachtelte Klassen ohne Zugriff

**Weiterführende Links:**
- [Kotlin Documentation - Nested Classes](https://kotlinlang.org/docs/nested-classes.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
class Outer
{
    private val outerField = "Outer"
    
    class Inner
    {
        def accessOuter(outer: Outer): Unit =
        {
            println(outer.outerField)  // Zugriff über Instanz
        }
    }
    
    object Nested
    {
        // Kein Zugriff auf äußere Klasse
    }
}
```

**Besonderheiten:**
- Verschachtelte Klassen haben keinen direkten Zugriff
- Zugriff über Instanz der äußeren Klasse

**Weiterführende Links:**
- [Scala Documentation - Inner Classes](https://docs.scala-lang.org/tour/inner-classes.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
class Outer
{
    private var outerField = "Outer"
    
    class Nested
    {
        func accessOuter(outer: Outer)
        {
            print(outer.outerField)  // Zugriff über Instanz
        }
    }
}
```

**Besonderheiten:**
- Verschachtelte Klassen haben keinen direkten Zugriff
- Zugriff über Instanz der äußeren Klasse

**Weiterführende Links:**
- [Swift Documentation - Nested Types](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/nestedtypes/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
class Outer
{
    private outerField: string = "Outer";
    
    class Inner
    {
        accessOuter(outer: Outer): void
        {
            console.log(outer.outerField);  // Zugriff über Instanz
        }
    }
    
    static class StaticNested
    {
        // Kein Zugriff auf äußere Klasse
    }
}
```

**Besonderheiten:**
- Verschachtelte Klassen haben keinen direkten Zugriff
- Zugriff über Instanz der äußeren Klasse

**Weiterführende Links:**
- [TypeScript Documentation - Classes](https://www.typescriptlang.org/docs/handbook/2/classes.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
class Outer
{
    String _outerField = "Outer";
    
    class Inner
    {
        void accessOuter(Outer outer)
        {
            print(outer._outerField);  // Zugriff über Instanz
        }
    }
}
```

**Besonderheiten:**
- Verschachtelte Klassen haben keinen direkten Zugriff
- Zugriff über Instanz der äußeren Klasse

**Weiterführende Links:**
- [Dart Documentation - Classes](https://dart.dev/language/classes)

</TabItem>
<TabItem value="d" label="D">

```d
// Nested Classes
class Outer {
    private int x = 10;

    class Inner {
        int getOuterX() {
            return x;  // Zugriff auf äußere Klasse
        }
    }

    static class StaticInner {
        // Kein Zugriff auf Instanzvariablen der äußeren Klasse
        int getValue() { return 42; }
    }
}

auto outer = new Outer();
auto inner = outer.new Inner();
auto staticInner = new Outer.StaticInner();
```

**Besonderheiten:**
- Nicht-statische innere Klassen haben Zugriff auf die äußere Instanz
- `static` innere Klassen haben keinen Zugriff auf die äußere Instanz
- Verschachtelte Structs werden ebenfalls unterstützt
- Innere Klassen können auf `private` Members der äußeren Klasse zugreifen

**Weiterführende Links:**
- [D Language Specification - Nested Classes](https://dlang.org/spec/class.html#nested)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Nested Classes (static)
class Outer {
    static class StaticNested {
        String value = "Nested"
    }

    // Inner Class (non-static)
    class Inner {
        String getValue() {
            return "Inner von ${Outer.this}"
        }
    }
}

def nested = new Outer.StaticNested()
def inner = new Outer().new Inner()
```

**Besonderheiten:**
- Statische Nested Classes mit `static`
- Inner Classes haben Referenz auf Outer-Instanz
- Syntax wie in Java

**Weiterführende Links:**
- [Groovy Documentation - Inner Classes](https://groovy-lang.org/objectorientation.html#_inner_classes)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Nested Classes (seit Delphi 2005)
type
  TOuter = class
  public
    type
      TInner = class
      public
        Value: Integer;
        procedure Show;
      end;
  private
    FInner: TInner;
  public
    constructor Create;
  end;

procedure TOuter.TInner.Show;
begin
  WriteLn('Inner Value: ', Value);
end;

constructor TOuter.Create;
begin
  FInner := TInner.Create;
  FInner.Value := 42;
end;
```

**Besonderheiten:**
- Nested Types innerhalb von `type`-Sektion einer Klasse
- Kein impliziter Zugriff auf äußere Klasse
- Seit Delphi 2005

**Weiterführende Links:**
- [Delphi Documentation - Nested Type Declarations](https://docwiki.embarcadero.com/RADStudio/en/Nested_Type_Declarations)

</TabItem>
</Tabs>


## 8.1.11. Object Literals

Syntaktische Konstrukte zur direkten Erstellung von Objekten ohne Klassendefinition.

### Sprachen {#sprachen}

<Tabs availableTabs={['javascript', 'kotlin', 'python', 'ruby', 'scala', 'swift', 'typescript']}>
<TabItem value="javascript" label="JavaScript">

```javascript
// Object Literal
const person = {
    name: "Max",
    age: 30,
    greet: function() {
        console.log(`Hallo, ich bin ${this.name}`);
    }
};

// Shorthand (seit ES6)
const name = "Max";
const age = 30;
const person2 = { name, age };

// Method Shorthand (seit ES6)
const person3 = {
    name: "Max",
    greet() {
        console.log(`Hallo, ich bin ${this.name}`);
    }
};
```

**Besonderheiten:**
- Direkte Objekterstellung ohne Klasse
- Unterstützt Methoden und Eigenschaften
- Shorthand-Syntax seit ES6

**Weiterführende Links:**
- [MDN Web Docs - Object Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Object Literal mit Typannotation
const person: { name: string; age: number; greet: () => void } = {
    name: "Max",
    age: 30,
    greet: function() {
        console.log(`Hallo, ich bin ${this.name}`);
    }
};

// Method Shorthand
const person2 = {
    name: "Max",
    age: 30,
    greet(): void {
        console.log(`Hallo, ich bin ${this.name}`);
    }
};
```

**Besonderheiten:**
- Unterstützt Typannotationen
- Ähnlich zu JavaScript mit Typen

**Weiterführende Links:**
- [TypeScript Documentation - Object Types](https://www.typescriptlang.org/docs/handbook/2/objects.html)

</TabItem>
<TabItem value="python" label="Python">

```python
# Dictionary als Object Literal
person = {
    "name": "Max",
    "age": 30,
    "greet": lambda self: print(f"Hallo, ich bin {self['name']}")
}

# Oder mit TypedDict (seit Python 3.8)
from typing import TypedDict

class PersonDict(TypedDict):
    name: str
    age: int

person2: PersonDict = {
    "name": "Max",
    "age": 30
}
```

**Besonderheiten:**
- Dictionaries werden als Object Literals verwendet
- `TypedDict` für Typannotationen

**Weiterführende Links:**
- [Python Documentation - Dictionaries](https://docs.python.org/3/tutorial/datastructures.html#dictionaries)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Hash als Object Literal
person = {
    name: "Max",
    age: 30,
    greet: -> { puts "Hallo, ich bin #{self[:name]}" }
}

# Oder mit Struct
Person = Struct.new(:name, :age)
person2 = Person.new("Max", 30)
```

**Besonderheiten:**
- Hashes werden als Object Literals verwendet
- `Struct` für strukturierte Objekte

**Weiterführende Links:**
- [Ruby Documentation - Hashes](https://ruby-doc.org/core-3.1.2/Hash.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Data Class als Object Literal-Ersatz
data class Person(val name: String, val age: Int)

val person = Person("Max", 30)

// Oder mit Map
val person2 = mapOf(
    "name" to "Max",
    "age" to 30
)
```

**Besonderheiten:**
- Data Classes für strukturierte Objekte
- Maps für dynamische Objekte

**Weiterführende Links:**
- [Kotlin Documentation - Data Classes](https://kotlinlang.org/docs/data-classes.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Case Class als Object Literal-Ersatz
case class Person(name: String, age: Int)

val person = Person("Max", 30)

// Oder mit Map
val person2 = Map(
    "name" -> "Max",
    "age" -> 30
)
```

**Besonderheiten:**
- Case Classes für strukturierte Objekte
- Maps für dynamische Objekte

**Weiterführende Links:**
- [Scala Documentation - Case Classes](https://docs.scala-lang.org/tour/case-classes.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Dictionary als Object Literal
let person: [String: Any] = [
    "name": "Max",
    "age": 30
]

// Oder mit Struct
struct Person {
    let name: String
    let age: Int
}

let person2 = Person(name: "Max", age: 30)
```

**Besonderheiten:**
- Dictionaries für dynamische Objekte
- Structs für strukturierte Objekte

**Weiterführende Links:**
- [Swift Documentation - Dictionaries](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/collectiontypes/)

</TabItem>
</Tabs>


## 8.1.12. Object Expressions (Anonymous Objects)

Anonyme Objekte, die direkt inline erstellt werden, ohne explizite Klassendefinition.

### Sprachen {#sprachen}

<Tabs availableTabs={['csharp', 'java', 'javascript', 'kotlin', 'scala', 'swift', 'typescript']}>
<TabItem value="kotlin" label="Kotlin">

```kotlin
interface Greeter {
    fun greet()
}

val greeter = object : Greeter {
    override fun greet() {
        println("Hallo")
    }
}

// Mit Zugriff auf lokale Variablen
fun createGreeter(name: String): Greeter {
    return object : Greeter {
        override fun greet() {
            println("Hallo, ich bin $name")
        }
    }
}
```

**Besonderheiten:**
- `object` für anonyme Objekte
- Kann Interfaces oder Klassen erweitern
- Unterstützt Closures

**Weiterführende Links:**
- [Kotlin Documentation - Object Expressions](https://kotlinlang.org/docs/object-declarations.html#object-expressions)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
trait Greeter {
    def greet(): Unit
}

val greeter = new Greeter {
    override def greet(): Unit = {
        println("Hallo")
    }
}

// Mit Zugriff auf lokale Variablen
def createGreeter(name: String): Greeter = {
    new Greeter {
        override def greet(): Unit = {
            println(s"Hallo, ich bin $name")
        }
    }
}
```

**Besonderheiten:**
- `new Trait {}` für anonyme Objekte
- Kann Traits implementieren
- Unterstützt Closures

**Weiterführende Links:**
- [Scala Documentation - Anonymous Classes](https://docs.scala-lang.org/tour/anonymous-function-syntax.html)

</TabItem>
<TabItem value="java" label="Java">

```java
interface Greeter {
    void greet();
}

Greeter greeter = new Greeter() {
    @Override
    public void greet() {
        System.out.println("Hallo");
    }
};

// Mit Zugriff auf lokale Variablen (final oder effectively final)
Greeter createGreeter(String name) {
    return new Greeter() {
        @Override
        public void greet() {
            System.out.println("Hallo, ich bin " + name);
        }
    };
}
```

**Besonderheiten:**
- Anonyme Klassen mit `new Interface {}`
- Kann Interfaces oder abstrakte Klassen implementieren
- Zugriff nur auf final oder effectively final Variablen

**Weiterführende Links:**
- [Oracle Java Documentation - Anonymous Classes](https://docs.oracle.com/javase/tutorial/java/javaOO/anonymousclasses.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
interface IGreeter
{
    void Greet();
}

IGreeter greeter = new IGreeter()
{
    public void Greet()
    {
        Console.WriteLine("Hallo");
    }
};

// Mit Zugriff auf lokale Variablen
IGreeter CreateGreeter(string name)
{
    return new IGreeter()
    {
        public void Greet()
        {
            Console.WriteLine($"Hallo, ich bin {name}");
        }
    };
}
```

**Besonderheiten:**
- Anonyme Objekte mit `new Interface {}`
- Kann Interfaces implementieren
- Unterstützt Closures

**Weiterführende Links:**
- [Microsoft C# Documentation - Anonymous Types](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/types/anonymous-types)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Object Literal als anonymes Objekt
const greeter = {
    greet: function() {
        console.log("Hallo");
    }
};

// Mit Closure
function createGreeter(name) {
    return {
        greet: function() {
            console.log(`Hallo, ich bin ${name}`);
        }
    };
}
```

**Besonderheiten:**
- Object Literals als anonyme Objekte
- Unterstützt Closures
- Keine explizite Interface-Implementierung

**Weiterführende Links:**
- [MDN Web Docs - Object Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
interface Greeter {
    greet(): void;
}

const greeter: Greeter = {
    greet: function() {
        console.log("Hallo");
    }
};

// Mit Closure
function createGreeter(name: string): Greeter {
    return {
        greet: function() {
            console.log(`Hallo, ich bin ${name}`);
        }
    };
}
```

**Besonderheiten:**
- Object Literals mit Typannotationen
- Unterstützt Closures
- Typannotationen für Interface-Implementierung

**Weiterführende Links:**
- [TypeScript Documentation - Object Types](https://www.typescriptlang.org/docs/handbook/2/objects.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
protocol Greeter {
    func greet()
}

let greeter: Greeter = {
    class AnonymousGreeter: Greeter {
        func greet() {
            print("Hallo")
        }
    }
    return AnonymousGreeter()
}()

// Mit Closure
func createGreeter(name: String) -> Greeter {
    class AnonymousGreeter: Greeter {
        let name: String
        init(name: String) {
            self.name = name
        }
        func greet() {
            print("Hallo, ich bin \(name)")
        }
    }
    return AnonymousGreeter(name: name)
}
```

**Besonderheiten:**
- Anonyme Klassen mit Closure-Syntax
- Kann Protocols implementieren
- Unterstützt Closures

**Weiterführende Links:**
- [Swift Documentation - Closures](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/closures/)

</TabItem>
</Tabs>


