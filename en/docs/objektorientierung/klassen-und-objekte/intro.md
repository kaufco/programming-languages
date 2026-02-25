---
slug: /objektorientierung/klassen-und-objekte
title: 8.1. Classes and Objects
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 8.1. Classes and Objects

Definition and instantiation of classes and objects.

## 8.1.1. Class Definition

Definition of classes as blueprints for objects with properties and methods.

### Languages {#sprachen}

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

**Special features:**
- Classes can be declared partially with `partial`
- Supports abstract classes and interfaces

**Further reading:**
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

**Special features:**
- Classes can be `public`, `package-private` (default) or `private` (only for nested classes)
- Supports abstract classes and interfaces

**Further reading:**
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

**Special features:**
- Supports `public`, `private` and `protected` access modifiers
- Classes can be `struct` (public by default) or `class` (private by default)

**Further reading:**
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

**Special features:**
- All methods require `self` as the first parameter
- Classes can be dynamically modified at runtime

**Further reading:**
- [Python Documentation - Classes](https://docs.python.org/3/tutorial/classes.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Classes (since ES6)
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

**Special features:**
- Introduced in ES6
- Syntactic sugar over prototypes

**Further reading:**
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

**Special features:**
- Supports type annotations for properties and methods
- Compiles to JavaScript classes

**Further reading:**
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

**Special features:**
- Primary constructor can be placed directly in the class declaration
- Supports Data Classes for simple data containers

**Further reading:**
- [Kotlin Documentation - Classes](https://kotlinlang.org/docs/classes.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
structure Person where
  name : String

def Person.greet (p : Person) : IO Unit :=
  IO.println s!"Hallo, ich bin {p.name}"
```

**Special features:**
- `structure` defines a type with named fields
- Methods are defined as functions in the type's namespace
- Dot notation allows method-like calls: `p.greet`

**Further reading:**
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

**Special features:**
- Classes are reference types
- Supports Computed Properties and Property Observers

**Further reading:**
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

**Special features:**
- Primary constructor can be placed directly in the class declaration
- Supports Case Classes for immutable data structures

**Further reading:**
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

**Special features:**
- Instance variables start with `@`
- Classes can be modified at runtime

**Further reading:**
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

**Special features:**
- Properties must be explicitly declared with access modifiers
- Supports Traits for code reuse

**Further reading:**
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

**Special features:**
- Constructor can assign parameters directly to properties
- Supports Mixins for code reuse

**Further reading:**
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

**Special features:**
- Supports `public`, `private` and `protected` access modifiers
- Classes are reference types

**Further reading:**
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

**Special features:**
- Properties can be initialized directly in the constructor
- Supports type annotations

**Further reading:**
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

**Special features:**
- Uses `object` for class-like structures
- Methods are defined as procedures with `self` parameter

**Further reading:**
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

**Special features:**
- Similar to Java, but with optional types and simplified syntax
- Supports Traits for code reuse

**Further reading:**
- [Groovy Documentation - Classes](https://groovy-lang.org/objectorientation.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
type Person(name: string) =
    member this.Name = name
    
    member this.Greet() =
        printfn "Hallo, ich bin %s" this.Name
```

**Special features:**
- Primary constructor can be placed directly in the type declaration
- Supports Records for immutable data structures

**Further reading:**
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

**Special features:**
- Similar to C#, but with VB.NET syntax
- Supports abstract classes and interfaces

**Further reading:**
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

**Special features:**
- Separation between Interface (`@interface`) and Implementation (`@implementation`)
- Uses message-passing syntax with square brackets

**Further reading:**
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

**Special features:**
- Separation between type declaration and implementation
- Supports `public`, `private`, `protected` and `published` sections

**Further reading:**
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

**Special features:**
- Objects are first-class values
- Supports functional and object-oriented programming

**Further reading:**
- [OCaml Documentation - Classes](https://v2.ocaml.org/manual/objectexamples.html)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
(defclass person ()
  ((name :initarg :name :accessor person-name)))

(defmethod greet ((p person))
  (format t "Hallo, ich bin ~a~%" (person-name p)))
```

**Special features:**
- Uses CLOS (Common Lisp Object System)
- Classes are defined with `defclass`, methods with `defmethod`

**Further reading:**
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

**Special features:**
- Uses class system with `class` and `object%` as base class
- `(super-new)` is mandatory
- Supports Mixins for code reuse

**Further reading:**
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

**Special features:**
- Uses `struct` for class-like structures
- Methods are defined outside the structure

**Further reading:**
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

**Special features:**
- Uses `classdef` for class definitions
- Properties and methods are defined in separate blocks

**Further reading:**
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

**Special features:**
- Uses Packages and `bless` for object orientation
- Properties are stored as hash references

**Further reading:**
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

**Special features:**
- Supports cross-platform development
- Compiles to various target languages

**Further reading:**
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

**Special features:**
- Uses Design-by-Contract with pre- and postconditions
- Supports Multiple Inheritance

**Further reading:**
- [Eiffel Documentation - Classes](https://www.eiffel.org/doc/eiffel/Language)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Classes (experimental)
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

**Special features:**
- Experimental language, syntax may still change
- C++-like syntax with modern features

**Further reading:**
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

**Special features:**
- Uses `struct` for class-like structures
- Python-like syntax with type annotations

**Further reading:**
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

**Special features:**
- Uses Associations (Associative Arrays) for objects
- Functional programming with object-oriented elements

**Further reading:**
- [Wolfram Language Documentation - Objects](https://reference.wolfram.com/language/guide/ObjectOrientedProgramming.html)

</TabItem>
</Tabs>


## 8.1.2. Object Instantiation

Creation of object instances from a class definition.

### Languages {#sprachen}

<Tabs availableTabs={['carbon', 'common-lisp', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'eiffel', 'fsharp', 'groovy', 'haxe', 'java', 'javascript', 'julia', 'kotlin', 'matlab', 'mojo', 'nim', 'objective-c', 'object-pascal', 'ocaml', 'perl', 'php', 'python', 'racket', 'ruby', 'scala', 'swift', 'typescript', 'vbnet', 'wolfram-language']} yellowTabs={['lean4']}>
<TabItem value="csharp" label="C#">

```csharp
Person person = new Person("Max");
person.Greet();
```

**Special features:**
- `new` operator creates an instance
- Supports Object Initializers: `new Person("Max") { Age = 30 }`

**Further reading:**
- [Microsoft C# Documentation - Objects](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/object-oriented/)

</TabItem>
<TabItem value="java" label="Java">

```java
Person person = new Person("Max");
person.greet();
```

**Special features:**
- `new` operator creates an instance
- Constructor is automatically called

**Further reading:**
- [Oracle Java Documentation - Creating Objects](https://docs.oracle.com/javase/tutorial/java/javaOO/objectcreation.html)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
Person person("Max");
person.greet();

// Or with new (heap allocation)
Person* personPtr = new Person("Max");
personPtr->greet();
delete personPtr;
```

**Special features:**
- Stack allocation: `Person person("Max")`
- Heap allocation with `new` requires `delete` for memory deallocation

**Further reading:**
- [cppreference.com - Object Creation](https://en.cppreference.com/w/cpp/language/new)

</TabItem>
<TabItem value="python" label="Python">

```python
person = Person("Max")
person.greet()
```

**Special features:**
- No `new` operator required
- Constructor is automatically called

**Further reading:**
- [Python Documentation - Class Instances](https://docs.python.org/3/tutorial/classes.html#class-objects)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
const person = new Person("Max");
person.greet();
```

**Special features:**
- `new` operator creates an instance
- Without `new`, `this` is set to the global object

**Further reading:**
- [MDN Web Docs - new operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
const person: Person = new Person("Max");
person.greet();
```

**Special features:**
- `new` operator creates an instance
- Supports type annotations

**Further reading:**
- [TypeScript Documentation - Classes](https://www.typescriptlang.org/docs/handbook/2/classes.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
val person = Person("Max")
person.greet()
```

**Special features:**
- No `new` operator required
- Constructor is automatically called

**Further reading:**
- [Kotlin Documentation - Instances](https://kotlinlang.org/docs/classes.html#creating-instances-of-classes)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Named field syntax
let person : Person := { name := "Max" }

-- Constructor syntax
let person2 := Person.mk "Max"

-- Anonymous constructor
let person3 : Person := ⟨"Max"⟩
```

**Special features:**
- No `new` operator required
- Three syntax variants: named fields `{ }`, `Type.mk`, anonymous constructor `⟨⟩`
- Type is often inferred

**Further reading:**
- [Functional Programming in Lean - Structures](https://lean-lang.org/functional_programming_in_lean/getting-to-know/structures.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
let person = Person(name: "Max")
person.greet()
```

**Special features:**
- No `new` operator required
- Parameters must be named (except for simple constructors)

**Further reading:**
- [Swift Documentation - Initialization](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/initialization/)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
val person = new Person("Max")
person.greet()
```

**Special features:**
- `new` operator creates an instance
- Case Classes can be instantiated without `new`

**Further reading:**
- [Scala Documentation - Classes](https://docs.scala-lang.org/tour/classes.html)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
person = Person.new("Max")
person.greet
```

**Special features:**
- `.new` method creates an instance
- Constructor is automatically called

**Further reading:**
- [Ruby Documentation - Objects](https://ruby-doc.org/core-3.1.2/Object.html)

</TabItem>
<TabItem value="php" label="PHP">

```php
$person = new Person("Max");
$person->greet();
```

**Special features:**
- `new` operator creates an instance
- `->` is used for method calls

**Further reading:**
- [PHP Documentation - Objects](https://www.php.net/manual/en/language.oop5.basic.php)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
var person = Person("Max");
person.greet();
```

**Special features:**
- No `new` operator required (optional since Dart 2.0)
- Constructor is automatically called

**Further reading:**
- [Dart Documentation - Constructors](https://dart.dev/language/constructors)

</TabItem>
<TabItem value="d" label="D">

```d
auto person = new Person("Max");
person.greet();
```

**Special features:**
- `new` operator creates an instance on the heap
- Stack allocation with `Person("Max")` possible

**Further reading:**
- [D Language Specification - Classes](https://dlang.org/spec/class.html)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
person = Person.new("Max")
person.greet
```

**Special features:**
- `.new` method creates an instance
- Constructor is automatically called

**Further reading:**
- [Crystal Documentation - Classes](https://crystal-lang.org/reference/1.11/syntax_and_semantics/classes_and_methods.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
var person = newPerson("Max")
person.greet()
```

**Special features:**
- Constructor function creates an instance
- No `new` operator, but a normal function

**Further reading:**
- [Nim Documentation - Objects](https://nim-lang.org/docs/manual.html#types-object-types)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
def person = new Person("Max")
person.greet()
```

**Special features:**
- `new` operator creates an instance
- Supports Named Parameters

**Further reading:**
- [Groovy Documentation - Objects](https://groovy-lang.org/objectorientation.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
let person = Person("Max")
person.Greet()
```

**Special features:**
- No `new` operator required
- Constructor is automatically called

**Further reading:**
- [F# Documentation - Classes](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/classes)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
Dim person As Person = New Person("Max")
person.Greet()
```

**Special features:**
- `New` operator creates an instance
- Supports Object Initializers

**Further reading:**
- [Microsoft VB.NET Documentation - Objects](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/objects-and-classes/)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
Person* person = [[Person alloc] initWithName:@"Max"];
[person greet];
```

**Special features:**
- `alloc` and `init` methods create an instance
- Message-passing syntax with square brackets

**Further reading:**
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

**Special features:**
- `.Create` constructor creates an instance
- Explicit memory management required

**Further reading:**
- [Delphi Documentation - Objects](https://docwiki.embarcadero.com/RADStudio/Alexandria/en/Classes_and_Objects)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
let person = new person "Max" in
person#greet
```

**Special features:**
- `new` operator creates an instance
- Method calls with `#` operator

**Further reading:**
- [OCaml Documentation - Objects](https://v2.ocaml.org/manual/objectexamples.html)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
(let ((person (make-instance 'person :name "Max")))
  (greet person))
```

**Special features:**
- `make-instance` creates an instance
- Keyword arguments for initialization

**Further reading:**
- [Common Lisp HyperSpec - make-instance](http://www.lispworks.com/documentation/HyperSpec/Body/f_mk_ins.htm)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
(define person (new person% [name "Max"]))
(send person greet)
```

**Special features:**
- `new` creates an instance
- `send` calls methods

**Further reading:**
- [Racket Documentation - Objects](https://docs.racket-lang.org/guide/classes.html)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
person = Person("Max")
greet(person)
```

**Special features:**
- Constructor is called as a normal function
- No `new` operator required

**Further reading:**
- [Julia Documentation - Constructors](https://docs.julialang.org/en/v1/manual/constructors/)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
person = Person('Max');
person.greet();
```

**Special features:**
- Konstruktor wird als normale Funktion aufgerufen
- Kein `new`-Operator erforderlich

**Further reading:**
- [MATLAB Documentation - Objects](https://www.mathworks.com/help/matlab/matlab_oop/creating-objects.html)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
my $person = Person->new("Max");
$person->greet();
```

**Special features:**
- `->new` method creates an instance
- `->` is used for method calls

**Further reading:**
- [Perl Documentation - Objects](https://perldoc.perl.org/perlobj)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
var person = new Person("Max");
person.greet();
```

**Special features:**
- `new` operator creates an instance
- Cross-platform compatible

**Further reading:**
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

**Special features:**
- `create` creates an instance
- Constructor is explicitly called

**Further reading:**
- [Eiffel Documentation - Creation](https://www.eiffel.org/doc/eiffel/Language)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Objekt-Instanziierung (experimentell)
var person: Person = Person.New("Max");
person.Greet();
```

**Special features:**
- Experimental language, syntax may still change
- C++-like syntax with modern features

**Further reading:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
var person = Person("Max")
person.greet()
```

**Special features:**
- Constructor is called as a normal function
- Python-like syntax

**Further reading:**
- [Mojo Documentation - Structs](https://docs.modular.com/mojo/manual/structs-and-classes/)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
person = Person["Max"];
person["greet"][]
```

**Special features:**
- Function creates an Association (object)
- Methods are stored as functions in the Association

**Further reading:**
- [Wolfram Language Documentation - Objects](https://reference.wolfram.com/language/guide/ObjectOrientedProgramming.html)

</TabItem>
</Tabs>


## 8.1.3. Constructors

Special methods for initializing object instances upon creation.

### Languages {#sprachen}

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

**Special features:**
- Constructors have the same name as the class
- Supports constructor chaining with `: this(...)`

**Further reading:**
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

**Special features:**
- Constructors have the same name as the class
- Supports constructor chaining with `this(...)`

**Further reading:**
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

**Special features:**
- Initialization list for efficient initialization
- Supports Delegating Constructors (since C++11)

**Further reading:**
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

**Special features:**
- `__init__` is the constructor
- No constructor overloading – use default parameters instead
- `__new__` for special instantiation (e.g., singletons)

**Further reading:**
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

**Special features:**
- `constructor` is the constructor
- JavaScript does not support true overloading, last `constructor` overrides previous ones

**Further reading:**
- [MDN Web Docs - constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
class Person
{
    name: string;
    age?: number;
    
    // Constructor overloading: multiple signatures, one implementation
    constructor(name: string);
    constructor(name: string, age: number);
    constructor(name: string, age?: number)
    {
        this.name = name;
        this.age = age;
    }
}
```

**Special features:**
- `constructor` is the constructor with type annotations
- Only one constructor implementation allowed
- Multiple constructor signatures possible (Overloading)
- Supports optional parameters and parameter properties

**Further reading:**
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

**Special features:**
- Primary constructor can be placed directly in the class declaration
- Secondary constructors must call the primary constructor

**Further reading:**
- [Kotlin Documentation - Constructors](https://kotlinlang.org/docs/classes.html#constructors)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Default constructor is automatically generated
structure Person where
  name : String
  age : Nat := 0

-- Various instantiation options
let p1 := Person.mk "Max" 30
let p2 : Person := { name := "Max" }          -- age uses default value
let p3 : Person := { name := "Max", age := 25 }

-- Custom constructor as function
def Person.create (name : String) : Person :=
  { name := name, age := 0 }
```

**Special features:**
- `mk` constructor is automatically generated
- Fields with default values can be omitted during instantiation
- Custom constructors as namespace functions

**Further reading:**
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

**Special features:**
- `init` is the constructor
- Supports Convenience Initializers

**Further reading:**
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

**Special features:**
- Primary constructor can be placed directly in the class declaration
- Secondary constructors with `this(...)`

**Further reading:**
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

**Special features:**
- `initialize` is the constructor
- Ruby does not support true overloading, last `initialize` overrides previous ones

**Further reading:**
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

**Special features:**
- `__construct` is the constructor
- PHP does NOT support constructor overloading (only default parameters)
- Constructor Promotion since PHP 8.0 (parameters are automatically converted to properties)

**Further reading:**
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

**Special features:**
- Constructors can assign parameters directly to properties
- Named Constructors for alternative initialization

**Further reading:**
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

**Special features:**
- `this` is the constructor
- Supports constructor overloading

**Further reading:**
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

**Special features:**
- Properties can be initialized directly in the constructor
- Supports constructor overloading

**Further reading:**
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

**Special features:**
- Constructor functions create instances
- Supports procedure overloading

**Further reading:**
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

**Special features:**
- Constructors have the same name as the class
- Supports constructor overloading

**Further reading:**
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

**Special features:**
- Primary constructor can be placed directly in the type declaration
- Secondary constructors with `new`

**Further reading:**
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

**Special features:**
- `New` is the constructor
- Supports constructor overloading

**Further reading:**
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

**Special features:**
- Constructors are `init` methods
- Named Parameters for better readability

**Further reading:**
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

**Special features:**
- Constructors are `Create` methods
- Supports constructor overloading

**Further reading:**
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

**Special features:**
- Constructor parameters are passed directly in the class declaration
- Supports inheritance for alternative initialization

**Further reading:**
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

**Special features:**
- `initialize-instance` is the constructor
- `:initarg` and `:initform` for initialization

**Further reading:**
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

**Special features:**
- `init-field` for constructor parameters with automatic field
- `super-new` for base class initialization
- Default values for `init-field` possible

**Further reading:**
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

**Special features:**
- Constructors are functions within the structure
- Supports constructor overloading

**Further reading:**
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

**Special features:**
- Constructor is a method with the same name as the class
- No true overloading: one constructor with `nargin` check for different argument counts
- Since R2019b also possible with `arguments` block

**Further reading:**
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

**Special features:**
- `new` is the constructor
- Named Constructors for alternative initialization

**Further reading:**
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

**Special features:**
- `new` is the only constructor (no overloading)
- Optional parameters with `?` and default values enable flexibility

**Further reading:**
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

**Special features:**
- Constructors are `make` methods
- Named Constructors for alternative initialization

**Further reading:**
- [Eiffel Documentation - Creation](https://www.eiffel.org/doc/eiffel/Language)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Constructors (experimental)
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

**Special features:**
- Experimental language, syntax may still change
- C++-like syntax with modern features

**Further reading:**
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

**Special features:**
- `__init__` is the constructor
- Python-like syntax with type annotations

**Further reading:**
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

**Special features:**
- Constructors are functions with Pattern Matching
- Supports function overloading

**Further reading:**
- [Wolfram Language Documentation - Objects](https://reference.wolfram.com/language/guide/ObjectOrientedProgramming.html)

</TabItem>
</Tabs>


## 8.1.4. Statements before super()

Ability to execute statements before calling the base class constructor in a derived constructor.

### Languages {#sprachen}

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
        // Statements before super() are not allowed
        super(value);
        System.out.println("Derived");
    }
}
```

**Special features:**
- Statements before `super()` are not allowed
- `super()` must be the first statement in the constructor

**Further reading:**
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
        // Statements before base() are not allowed
        Console.WriteLine("Derived");
    }
}
```

**Special features:**
- Statements before `base()` are not allowed
- `base()` must be in the initialization list

**Further reading:**
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
        // Init blocks are executed after the base class constructor
        println("Derived")
    }
}
```

**Special features:**
- Statements before the base class constructor are not directly possible
- Init blocks are executed after the base class constructor

**Further reading:**
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
        // Statements before Base() are not allowed
        std::cout << "Derived" << std::endl;
    }
};
```

**Special features:**
- Statements before the base class constructor are not allowed
- Base class constructor must be in the initialization list

**Further reading:**
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
        // Statements before super() are not allowed
        print("Derived");
    }
}
```

**Special features:**
- Statements before `super()` are not allowed
- `super()` must be in the initialization list

**Further reading:**
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
    // Statements in the class body are executed after the base class constructor
    println("Derived")
}
```

**Special features:**
- Statements before the base class constructor are not directly possible
- Statements in the class body are executed after the base class constructor

**Further reading:**
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
        // Statements before super.init() are allowed
        let processed = value.uppercased()
        super.init(value: processed)
        print("Derived")
    }
}
```

**Special features:**
- Statements before `super.init()` are allowed
- All properties must be initialized before `super.init()`

**Further reading:**
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
        // Statements before super() allowed, as long as no this access (since TypeScript 4.6)
        const upperValue = value.toUpperCase();
        console.log("Preparation: " + upperValue);
        super(upperValue);
        console.log("Derived");
    }
}
```

**Special features:**
- Since TypeScript 4.6: Statements before `super()` allowed, as long as no `this` access
- Before TypeScript 4.6: `super()` had to be the first statement
- Enables validation and transformation of arguments before the `super()` call

**Further reading:**
- [TypeScript Documentation - Classes](https://www.typescriptlang.org/docs/handbook/2/classes.html)

</TabItem>

</Tabs>


## 8.1.5. Destructors

Special methods for cleaning up resources when destroying object instances.

### Languages {#sprachen}

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

**Special features:**
- Destructor is called automatically when object leaves scope
- Important for manual memory management

**Further reading:**
- [cppreference.com - Destructors](https://en.cppreference.com/w/cpp/language/destructor)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
class Person : IDisposable
{
    private string name;
    
    ~Person()
    {
        // Finalizer (called by the Garbage Collector)
        Cleanup();
    }
    
    public void Dispose()
    {
        // Explicit cleanup
        Cleanup();
        GC.SuppressFinalize(this);
    }
    
    private void Cleanup()
    {
        // Cleanup code
    }
}
```

**Special features:**
- Finalizer (`~Person()`) is called by the Garbage Collector
- `IDisposable` recommended for explicit cleanup

**Further reading:**
- [Microsoft C# Documentation - Finalizers](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/finalizers)

</TabItem>
<TabItem value="python" label="Python">

```python
class Person:
    def __init__(self, name):
        self.name = name
    
    def __del__(self):
        # Destructor (called by the Garbage Collector)
        print(f"Person {self.name} is being destroyed")
```

**Special features:**
- `__del__` is called by the Garbage Collector
- Execution time is not guaranteed

**Further reading:**
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
        // Destructor
        writeln("Person is being destroyed");
    }
}
```

**Special features:**
- Destructor is called automatically
- Important for manual resource management

**Further reading:**
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
        // Destructor (called automatically)
        print("Person is being destroyed")
    }
}
```

**Special features:**
- `deinit` is called automatically when no references exist anymore
- Only used with reference types (classes)

**Further reading:**
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

**Special features:**
- `dealloc` is called automatically
- Important for manual memory management (MRC)

**Further reading:**
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
  // Cleanup code
  inherited Destroy;
end;
```

**Special features:**
- `Destroy` is the destructor
- Must call `inherited Destroy`

**Further reading:**
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
            -- Cleanup code
        end
end
```

**Special features:**
- `dispose` for explicit cleanup
- Garbage Collection handles automatic cleanup

**Further reading:**
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
            fprintf('Resource "%s" created\n', name);
        end
        
        function delete(obj)
            fprintf('Resource "%s" released\n', obj.name);
        end
    end
end
```

**Special features:**
- Destructors only for handle classes (`< handle`)
- `delete` method is called automatically when removed
- Value classes have no destructors

**Further reading:**
- [MATLAB Documentation - Handle Class Destructor](https://www.mathworks.com/help/matlab/matlab_oop/handle-class-destructors.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Destructors (since Nim 1.0 with ARC/ORC)
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
  # Destructor is called automatically at the end of the scope
```

**Special features:**
- `=destroy` hook for destructors (since Nim 1.0 with ARC/ORC)
- Called automatically at the end of the scope
- Also supports `=copy`, `=sink`, `=wasMoved` hooks

**Further reading:**
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

**Special features:**
- `__destruct()` is called when no references exist anymore
- Also called at the end of the script
- Order of destructor calls is not guaranteed

**Further reading:**
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
    print "FileHandler for $self->{filename} released\n";
}
```

**Special features:**
- `DESTROY` is called when an object's reference count drops to 0
- Called automatically by the Garbage Collector
- Order of destructor calls is not guaranteed

**Further reading:**
- [Perl Documentation - Destructors](https://perldoc.perl.org/perlobj#Destructors)

</TabItem>
</Tabs>


## 8.1.6. Properties / Fields

Data fields or properties that store the state of a class.

### Languages {#sprachen}

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

**Special features:**
- Supports both Fields and Properties
- Properties can have Getter/Setter

**Further reading:**
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

**Special features:**
- Only supports Fields
- Getter/Setter are conventionally implemented as methods

**Further reading:**
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

**Special features:**
- Only supports Fields
- Access modifiers: `public`, `private`, `protected`

**Further reading:**
- [cppreference.com - Data Members](https://en.cppreference.com/w/cpp/language/data_members)

</TabItem>
<TabItem value="python" label="Python">

```python
class Person:
    def __init__(self, name):
        self.name = name  # Public Field
        self._age = 0      # Protected Field (convention)
        self.__id = 0      # Private Field (name mangling)
```

**Special features:**
- All fields are public
- `_` for protected, `__` for private (name mangling)

**Further reading:**
- [Python Documentation - Class and Instance Variables](https://docs.python.org/3/tutorial/classes.html#class-and-instance-variables)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
class Person
{
    constructor(name)
    {
        this.name = name;  // Public Field
        this._age = 0;     // Protected Field (convention)
    }
}
```

**Special features:**
- Fields are initialized in the constructor
- Private Fields with `#` (since ES2022)

**Further reading:**
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

**Special features:**
- Supports type annotations
- Access modifiers: `public`, `private`, `protected`

**Further reading:**
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

**Special features:**
- `val` for read-only, `var` for mutable Properties
- Properties can be declared directly in the primary constructor

**Further reading:**
- [Kotlin Documentation - Properties](https://kotlinlang.org/docs/properties.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
structure Person where
  name : String          -- Field (immutable by default)
  age : Nat := 0         -- Field with default value
  id : String := ""      -- Another field with default value
```

**Special features:**
- Fields are defined in the `structure` declaration
- All fields are immutable by default (value types)
- Default values via `:=` directly in the declaration
- Automatically generated accessor functions (e.g. `Person.name`)

**Further reading:**
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

**Special features:**
- `var` for mutable, `let` for immutable Properties
- Supports Computed Properties

**Further reading:**
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

**Special features:**
- `val` for immutable, `var` for mutable Fields
- Fields can be declared directly in the primary constructor

**Further reading:**
- [Scala Documentation - Classes](https://docs.scala-lang.org/tour/classes.html)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
class Person
    def initialize(name)
        @name = name  # Instance Variable
        @age = 0      # Instance Variable
    end
    
    attr_accessor :age  # Getter/Setter for age
    attr_reader :name  # Getter for name
end
```

**Special features:**
- Instance Variables start with `@`
- `attr_accessor`, `attr_reader`, `attr_writer` for Getter/Setter

**Further reading:**
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

**Special features:**
- Access modifiers: `public`, `private`, `protected`
- Properties must be explicitly declared

**Further reading:**
- [PHP Documentation - Properties](https://www.php.net/manual/en/language.oop5.properties.php)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
class Person
{
    String name;      // Public Field
    int _age;         // Private Field (starts with _)
    
    Person(this.name);
}
```

**Special features:**
- Private Fields start with `_`
- Fields can be initialized directly in the constructor

**Further reading:**
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

**Special features:**
- Access modifiers: `public`, `private`, `protected`
- Similar to C++

**Further reading:**
- [D Language Specification - Fields](https://dlang.org/spec/class.html#fields)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
class Person
    property name : String  # Property with Getter/Setter
    @age : Int32            # Instance Variable
end
```

**Special features:**
- `property` for Getter/Setter
- `@` for Instance Variables

**Further reading:**
- [Crystal Documentation - Instance Variables](https://crystal-lang.org/reference/1.11/syntax_and_semantics/instance_variables.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
type Person = object
    name: string    # Public Field
    age: int        # Public Field
```

**Special features:**
- Fields are declared in `object` types
- All Fields are public by default

**Further reading:**
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

**Special features:**
- Properties automatically have Getter/Setter
- Access modifiers: `public`, `private`, `protected`

**Further reading:**
- [Groovy Documentation - Properties](https://groovy-lang.org/objectorientation.html#_properties)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
type Person(name: string) =
    member val Name = name with get, set
    member val Age = 0 with get, set
    member val Id = 0 with get
```

**Special features:**
- Auto-Properties with `member val`
- `with get, set` for mutable, `with get` for immutable

**Further reading:**
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

**Special features:**
- Access modifiers: `Public`, `Private`, `Protected`
- Similar to C#

**Further reading:**
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

**Special features:**
- `@property` automatically generates Getter/Setter
- Instance Variables in `{}` block

**Further reading:**
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

**Special features:**
- Properties declared with `property`
- `read` and `write` for Getter/Setter

**Further reading:**
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

**Special features:**
- `val` for immutable, `val mutable` for mutable Fields
- Methods for access

**Further reading:**
- [OCaml Documentation - Classes](https://v2.ocaml.org/manual/objectexamples.html)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
(defclass person ()
  ((name :initarg :name :accessor person-name)
   (age :initarg :age :accessor person-age :initform 0)))
```

**Special features:**
- Slots with `:initarg`, `:accessor`, `:initform`
- Accessors generate Getter/Setter

**Further reading:**
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

**Special features:**
- `init-field` for constructor parameters
- `field` for Instance Variables with default value

**Further reading:**
- [Racket Documentation - Classes](https://docs.racket-lang.org/guide/classes.html)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
mutable struct Person
    name::String
    age::Int
end
```

**Special features:**
- Fields are declared in `struct`
- `mutable struct` for mutable fields

**Further reading:**
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

**Special features:**
- Properties in `properties` block
- Access modifiers: `public`, `private`, `protected`

**Further reading:**
- [MATLAB Documentation - Properties](https://www.mathworks.com/help/matlab/matlab_oop/properties.html)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
package Person;

sub new {
    my ($class, $name) = @_;
    my $self = {
        name => $name,  # Hash-Key as Field
        age => 0
    };
    bless $self, $class;
    return $self;
}
```

**Special features:**
- Fields are stored as Hash-Keys
- No explicit declaration

**Further reading:**
- [Perl Documentation - Objects](https://perldoc.perl.org/perlobj)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
class Person {
    public var name:String;
    private var age:Int;
    var id:Int; // Default: private
}
```

**Special features:**
- Access modifiers: `public`, `private`
- Default access is `private` (without modifier)
- Haxe has no `protected` keyword

**Further reading:**
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

**Special features:**
- Features in `feature` block
- Access modifiers via export clauses

**Further reading:**
- [Eiffel Documentation - Features](https://www.eiffel.org/doc/eiffel/Language)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Properties / Fields (experimental)
class Person
{
    private var name: String;
    private var age: i32;
}
```

**Special features:**
- Experimental language, syntax may still change
- C++-like syntax

**Further reading:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
struct Person:
    var name: String
    var age: Int
```

**Special features:**
- Fields are declared in `struct`
- Python-like syntax with type annotations

**Further reading:**
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

**Special features:**
- Fields are stored as Association-Keys
- Functional programming with object-oriented elements

**Further reading:**
- [Wolfram Language Documentation - Objects](https://reference.wolfram.com/language/guide/ObjectOrientedProgramming.html)

</TabItem>
</Tabs>


## 8.1.7. Methods

Functions that belong to a class and operate on object instances.

### Languages {#sprachen}

<Tabs availableTabs={['carbon', 'common-lisp', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'eiffel', 'fsharp', 'groovy', 'haxe', 'java', 'javascript', 'julia', 'kotlin', 'matlab', 'mojo', 'nim', 'objective-c', 'object-pascal', 'ocaml', 'perl', 'php', 'python', 'racket', 'ruby', 'scala', 'swift', 'typescript', 'vbnet', 'wolfram-language']} yellowTabs={['lean4']}>
<TabItem value="csharp" label="C#">

```csharp
class Person
{
    private string name;
    
    public void Greet()
    {
        Console.WriteLine($"Hello, I am {name}");
    }
    
    public string GetName()
    {
        return name;
    }
}
```

**Special features:**
- Methods can have `void` or a return type
- Supports method overloading

**Further reading:**
- [Microsoft C# Documentation - Methods](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/methods)

</TabItem>
<TabItem value="java" label="Java">

```java
class Person
{
    private String name;
    
    public void greet()
    {
        System.out.println("Hello, I am " + name);
    }
    
    public String getName()
    {
        return name;
    }
}
```

**Special features:**
- Methods can have `void` or a return type
- Supports method overloading

**Further reading:**
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
        std::cout << "Hello, I am " << name << std::endl;
    }
    
    std::string getName()
    {
        return name;
    }
};
```

**Special features:**
- Methods can have `void` or a return type
- Supports method overloading and `const` methods

**Further reading:**
- [cppreference.com - Member Functions](https://en.cppreference.com/w/cpp/language/member_functions)

</TabItem>
<TabItem value="python" label="Python">

```python
class Person:
    def __init__(self, name):
        self.name = name
    
    def greet(self):
        print(f"Hello, I am {self.name}")
    
    def get_name(self):
        return self.name
```

**Special features:**
- All methods require `self` as the first parameter
- No explicit return type declaration

**Further reading:**
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

**Special features:**
- Methods are declared without `function` keyword
- `this` refers to the instance

**Further reading:**
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

**Special features:**
- Methods have type annotations for parameters and return types
- `void` for methods without return value

**Further reading:**
- [TypeScript Documentation - Methods](https://www.typescriptlang.org/docs/handbook/2/classes.html#methods)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
class Person(val name: String)
{
    fun greet()
    {
        println("Hello, I am $name")
    }
    
    fun getName(): String
    {
        return name
    }
}
```

**Special features:**
- `fun` for method declaration
- Supports default parameters

**Further reading:**
- [Kotlin Documentation - Functions](https://kotlinlang.org/docs/functions.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
structure Person where
  name : String

-- Methods as functions in the namespace
def Person.greet (p : Person) : IO Unit :=
  IO.println s!"Hello, I am {p.name}"

def Person.getName (p : Person) : String :=
  p.name

-- Call via dot notation
-- let p : Person := { name := "Max" }
-- p.greet       -- IO action
-- p.getName     -- "Max"
```

**Special features:**
- Methods are functions in the type's namespace
- First parameter determines the receiver type for dot notation
- Call via `p.greet` instead of `Person.greet p`

**Further reading:**
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
        print("Hello, I am \(name)")
    }
    
    func getName() -> String
    {
        return name
    }
}
```

**Special features:**
- `func` for method declaration
- Return type with `->` syntax

**Further reading:**
- [Swift Documentation - Methods](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/methods/)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
class Person(val name: String)
{
    def greet(): Unit =
    {
        println(s"Hello, I am $name")
    }
    
    def getName(): String =
    {
        name
    }
}
```

**Special features:**
- `def` for method declaration
- `Unit` for methods without return value

**Further reading:**
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

**Special features:**
- Methods are declared with `def`
- `return` is optional, last expression is returned

**Further reading:**
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
        echo "Hello, I am " . $this->name;
    }
    
    public function getName()
    {
        return $this->name;
    }
}
```

**Special features:**
- Methods are declared with `function`
- Access modifiers: `public`, `private`, `protected`

**Further reading:**
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
        print("Hello, I am $name");
    }
    
    String getName()
    {
        return name;
    }
}
```

**Special features:**
- Methods can have `void` or a return type
- Supports named parameters

**Further reading:**
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
        writeln("Hello, I am ", name);
    }
    
    string getName()
    {
        return name;
    }
}
```

**Special features:**
- Methods can have `void` or a return type
- Similar to C++

**Further reading:**
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

**Special features:**
- Methods can have return type annotations
- Ruby-like syntax

**Further reading:**
- [Crystal Documentation - Methods](https://crystal-lang.org/reference/1.11/syntax_and_semantics/classes_and_methods.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
type Person = object
    name: string

proc greet(self: Person) =
    echo "Hello, I am ", self.name

proc getName(self: Person): string =
    self.name
```

**Special features:**
- Methods are defined as procedures with `self` parameter
- `proc` for procedures

**Further reading:**
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
        println "Hello, I am ${name}"
    }
    
    String getName()
    {
        return name
    }
}
```

**Special features:**
- Similar to Java, but with simplified syntax
- Supports closures

**Further reading:**
- [Groovy Documentation - Methods](https://groovy-lang.org/objectorientation.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
type Person(name: string) =
    member this.Name = name
    
    member this.Greet() =
        printfn "Hello, I am %s" this.Name
    
    member this.GetName() =
        this.Name
```

**Special features:**
- `member` for method declaration
- `this` for instance reference

**Further reading:**
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
        Console.WriteLine($"Hello, I am {name}")
    End Sub
    
    Public Function GetName() As String
        Return name
    End Function
End Class
```

**Special features:**
- `Sub` for methods without return value
- `Function` for methods with return value

**Further reading:**
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
    NSLog(@"Hello, I am %@", name);
}

- (NSString*)getName
{
    return name;
}
@end
```

**Special features:**
- Methods are declared with `-` (instance) or `+` (class)
- Message-passing syntax

**Further reading:**
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
  WriteLn('Hello, I am ', name);
end;

function Person.GetName: string;
begin
  Result := name;
end;
```

**Special features:**
- `procedure` for methods without return value
- `function` for methods with return value

**Further reading:**
- [Delphi Documentation - Methods](https://docwiki.embarcadero.com/RADStudio/Alexandria/en/Methods)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
class person name =
object
    val name = name
    
    method greet =
        Printf.printf "Hello, I am %s\n" name
    
    method get_name =
        name
end
```

**Special features:**
- `method` for method declaration
- Functional and object-oriented programming

**Further reading:**
- [OCaml Documentation - Methods](https://v2.ocaml.org/manual/objectexamples.html)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
(defclass person ()
  ((name :initarg :name :accessor person-name)))

(defmethod greet ((p person))
  (format t "Hello, I am ~a~%" (person-name p)))

(defmethod get-name ((p person))
  (person-name p))
```

**Special features:**
- Methods are defined with `defmethod`
- Multiple dispatch supported

**Further reading:**
- [Common Lisp HyperSpec - Methods](http://www.lispworks.com/documentation/HyperSpec/Body/07_.htm)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
(define person%
  (class object%
    (super-new)
    (init-field name)

    (define/public (greet)
      (printf "Hello, I am ~a\n" name))

    (define/public (get-name)
      name)))
```

**Special features:**
- `define/public` for public methods
- `define/private` for private methods

**Further reading:**
- [Racket Documentation - Methods](https://docs.racket-lang.org/guide/classes.html)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
mutable struct Person
    name::String
end

function greet(p::Person)
    println("Hello, I am $(p.name)")
end

function get_name(p::Person)
    return p.name
end
```

**Special features:**
- Methods are defined outside the structure
- Multiple dispatch supported

**Further reading:**
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
            fprintf('Hello, I am %s\n', obj.name);
        end
        
        function name = getName(obj)
            name = obj.name;
        end
    end
end
```

**Special features:**
- Methods in `methods` block
- First parameter is always the instance (`obj`)

**Further reading:**
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
    print "Hello, I am " . $self->{name} . "\n";
}

sub get_name {
    my ($self) = @_;
    return $self->{name};
}
```

**Special features:**
- Methods are subroutines
- First parameter is always the instance

**Further reading:**
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
        trace("Hello, I am " + name);
    }
    
    public function getName(): String
    {
        return name;
    }
}
```

**Special features:**
- Methods are declared with `function`
- Cross-platform compatible

**Further reading:**
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
            print ("Hello, I am ")
            print (name)
            print ("%N")
        end
    
    get_name: STRING
        do
            Result := name
        end
end
```

**Special features:**
- Features can be routines (methods) or attributes
- `Result` for return value

**Further reading:**
- [Eiffel Documentation - Features](https://www.eiffel.org/doc/eiffel/Language)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Methods (experimental)
class Person
{
    private var name: String;
    
    fn New(name: String) -> Person
    {
        return {.name = name};
    }
    
    fn Greet(self: Self)
    {
        Print("Hello, I am {0}", self.name);
    }
    
    fn GetName(self: Self) -> String
    {
        return self.name;
    }
}
```

**Special features:**
- Experimental language, syntax may still change
- C++-like syntax

**Further reading:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
struct Person:
    var name: String
    
    fn __init__(inout self, name: String):
        self.name = name
    
    fn greet(self):
        print("Hello, I am", self.name)
    
    fn get_name(self) -> String:
        return self.name
```

**Special features:**
- Methods are declared with `fn`
- Python-like syntax

**Further reading:**
- [Mojo Documentation - Methods](https://docs.modular.com/mojo/manual/structs-and-classes/)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
Person[name_] := Module[{},
    <|
        "name" -> name,
        "greet" -> Function[
            Print["Hello, I am ", name]
        ],
        "get_name" -> Function[name]
    |>
]
```

**Special features:**
- Methods are stored as functions in the Association
- Functional programming

**Further reading:**
- [Wolfram Language Documentation - Methods](https://reference.wolfram.com/language/guide/ObjectOrientedProgramming.html)

</TabItem>
</Tabs>


## 8.1.8. Static Members

Class members that belong to the class itself, not to instances.

### Languages {#sprachen}

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

**Special features:**
- `static` for static members
- Access via class name: `Counter.GetCount()`

**Further reading:**
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

**Special features:**
- `static` for static members
- Access via class name: `Counter.getCount()`

**Further reading:**
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

int Counter::count = 0;  // Definition outside the class
```

**Special features:**
- `static` for static members
- Static variables must be defined outside the class

**Further reading:**
- [cppreference.com - Static Members](https://en.cppreference.com/w/cpp/language/static)

</TabItem>
<TabItem value="python" label="Python">

```python
class Counter:
    count = 0  # Class variable (static)
    
    @staticmethod
    def get_count():
        return Counter.count
    
    @staticmethod
    def increment():
        Counter.count += 1
```

**Special features:**
- Class variables are static
- `@staticmethod` for static methods

**Further reading:**
- [Python Documentation - Static Methods](https://docs.python.org/3/library/functions.html#staticmethod)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
class Counter
{
    static count = 0;  // Static Field (since ES2022)
    
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

**Special features:**
- `static` for static members
- Static Fields since ES2022

**Further reading:**
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

**Special features:**
- `static` for static members
- Supports type annotations

**Further reading:**
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

**Special features:**
- `companion object` for static members
- Access via class name: `Counter.getCount()`

**Further reading:**
- [Kotlin Documentation - Companion Objects](https://kotlinlang.org/docs/object-declarations.html#companion-objects)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
structure Counter where
  value : Nat := 0

namespace Counter
  -- Namespace-level definitions (equivalent to static members)
  def initialValue : Nat := 0

  def create : Counter := {}

  def increment (c : Counter) : Counter :=
    { c with value := c.value + 1 }

  def getCount (c : Counter) : Nat := c.value
end Counter

-- Usage
-- let c := Counter.create
-- let c := c.increment
-- Counter.getCount c  -- 1
```

**Special features:**
- Namespace-level definitions act as static members
- Access via `Namespace.function` (e.g. `Counter.create`)
- No `static` keyword — all top-level definitions in the namespace are static

**Further reading:**
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

**Special features:**
- `static` for static members
- Access via class name: `Counter.getCount()`

**Further reading:**
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

**Special features:**
- `object` for singleton objects (static members)
- Access via object name: `Counter.getCount()`

**Further reading:**
- [Scala Documentation - Objects](https://docs.scala-lang.org/tour/singleton-objects.html)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
class Counter
    @@count = 0  # Class variable (static)
    
    def self.get_count
        @@count
    end
    
    def self.increment
        @@count += 1
    end
end
```

**Special features:**
- `@@` for class variables
- `self.` for class methods

**Further reading:**
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

**Special features:**
- `static` for static members
- Access with `self::`

**Further reading:**
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

**Special features:**
- `static` for static members
- Access via class name: `Counter.getCount()`

**Further reading:**
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

**Special features:**
- `static` for static members
- Similar to C++

**Further reading:**
- [D Language Specification - Static Members](https://dlang.org/spec/class.html#static-members)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
class Counter
    @@count = 0  # Class variable (static)
    
    def self.get_count
        @@count
    end
    
    def self.increment
        @@count += 1
    end
end
```

**Special features:**
- `@@` for class variables
- `self.` for class methods

**Further reading:**
- [Crystal Documentation - Class Variables](https://crystal-lang.org/reference/1.11/syntax_and_semantics/class_variables.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
type Counter = object
    discard

var count = 0  # Module variable (static)

proc getCount(): int =
    count

proc increment() =
    count += 1
```

**Special features:**
- Module variables are static
- Procedures at module level

**Further reading:**
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

**Special features:**
- `static` for static members
- Similar to Java

**Further reading:**
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

**Special features:**
- `static member` for static members
- Access via type name: `Counter.GetCount()`

**Further reading:**
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

**Special features:**
- `Shared` for static members
- Access via class name: `Counter.GetCount()`

**Further reading:**
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

**Special features:**
- `+` for class methods (static)
- Static variables in methods

**Further reading:**
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

**Special features:**
- `class var` for static variables
- `class function`/`class procedure` for static methods

**Further reading:**
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

**Special features:**
- Static members are implemented via modules
- Classes have no true static members

**Further reading:**
- [OCaml Documentation - Classes](https://v2.ocaml.org/manual/objectexamples.html)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
package Counter;

my $count = 0;  # Package variable (static)

sub get_count {
    return $count;
}

sub increment {
    $count++;
}
```

**Special features:**
- Package variables are static
- Subroutines at package level

**Further reading:**
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

**Special features:**
- `static` for static members
- Similar to Java/C#

**Further reading:**
- [Haxe Documentation - Static](https://haxe.org/manual/class-field-static.html)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
class COUNTER
feature
    -- Once function: executed only once, result is cached
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

**Special features:**
- Eiffel has no true static members
- `once` functions are executed only on first call and the result is cached
- All instances share the result of a `once` function (process-wide)
- `once` routines are the Eiffel equivalent of singletons and static variables

**Further reading:**
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

**Special features:**
- Module variables are static
- `global` for modification

**Further reading:**
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

**Special features:**
- `Constant` for immutable class properties (access: `ClassName.prop`)
- `Static` for static methods (no `obj` parameter)
- `Constant` properties cannot be changed at runtime

**Further reading:**
- [MATLAB Documentation - Static Methods](https://www.mathworks.com/help/matlab/matlab_oop/static-methods.html)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Static Members (experimental)
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

**Special features:**
- Experimental language, syntax may still change
- C++-like syntax

**Further reading:**
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

**Special features:**
- Class variables are static
- Python-like syntax

**Further reading:**
- [Mojo Documentation - Structs](https://docs.modular.com/mojo/manual/structs-and-classes/)

</TabItem>
</Tabs>


## 8.1.9. Companion Objects

Singleton objects associated with a class that provide static functionality.

### Languages {#sprachen}

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

// Usage
val person = Person.create("Max")
val count = Person.getCount()
```

**Special features:**
- `companion object` for static functionality
- Can have a name: `companion object Factory`
- Can implement interfaces

**Further reading:**
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

// Usage
val person = Person("Max")  // Calls Person.apply
val count = Person.getCount()
```

**Special features:**
- `object` with the same name as the class is a companion object
- `apply` method enables constructor-like syntax
- Can implement traits

**Further reading:**
- [Scala Documentation - Companion Objects](https://docs.scala-lang.org/tour/singleton-objects.html)

</TabItem>
</Tabs>


## 8.1.10. Nested Classes / Inner Classes

Classes defined within another class that have access to the outer class.

### Languages {#sprachen}

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
            System.out.println(outerField);  // Access to outer class
        }
    }
    
    static class StaticNested
    {
        // No access to outer class
    }
}
```

**Special features:**
- Inner classes have access to instance members of the outer class
- Static nested classes have no access

**Further reading:**
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
            Console.WriteLine(outer.outerField);  // Access via instance
        }
    }
    
    static class StaticNested
    {
        // No access to outer class
    }
}
```

**Special features:**
- Inner classes have no direct access to instance members
- Access via instance of the outer class

**Further reading:**
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
            std::cout << outer.outerField;  // Access via instance
        }
    };
    
    class StaticNested
    {
        // No access to outer class
    };
};
```

**Special features:**
- Nested classes have no direct access
- Access via instance or pointer of the outer class

**Further reading:**
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
            println(outerField)  // Access to outer class
            println(this@Outer.outerField)  // Explicit access
        }
    }
    
    class Nested
    {
        // No access to outer class (not inner)
    }
}
```

**Special features:**
- `inner` for inner classes with access to outer class
- Without `inner` they are nested classes without access

**Further reading:**
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
            println(outer.outerField)  // Access via instance
        }
    }
    
    object Nested
    {
        // No access to outer class
    }
}
```

**Special features:**
- Nested classes have no direct access
- Access via instance of the outer class

**Further reading:**
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
            print(outer.outerField)  // Access via instance
        }
    }
}
```

**Special features:**
- Nested classes have no direct access
- Access via instance of the outer class

**Further reading:**
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
            console.log(outer.outerField);  // Access via instance
        }
    }
    
    static class StaticNested
    {
        // No access to outer class
    }
}
```

**Special features:**
- Nested classes have no direct access
- Access via instance of the outer class

**Further reading:**
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
            print(outer._outerField);  // Access via instance
        }
    }
}
```

**Special features:**
- Nested classes have no direct access
- Access via instance of the outer class

**Further reading:**
- [Dart Documentation - Classes](https://dart.dev/language/classes)

</TabItem>
<TabItem value="d" label="D">

```d
// Nested Classes
class Outer {
    private int x = 10;

    class Inner {
        int getOuterX() {
            return x;  // Access to outer class
        }
    }

    static class StaticInner {
        // No access to instance variables of the outer class
        int getValue() { return 42; }
    }
}

auto outer = new Outer();
auto inner = outer.new Inner();
auto staticInner = new Outer.StaticInner();
```

**Special features:**
- Non-static inner classes have access to the outer instance
- `static` inner classes have no access to the outer instance
- Nested structs are also supported
- Inner classes can access `private` members of the outer class

**Further reading:**
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
            return "Inner of ${Outer.this}"
        }
    }
}

def nested = new Outer.StaticNested()
def inner = new Outer().new Inner()
```

**Special features:**
- Static nested classes with `static`
- Inner classes have reference to outer instance
- Syntax like in Java

**Further reading:**
- [Groovy Documentation - Inner Classes](https://groovy-lang.org/objectorientation.html#_inner_classes)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Nested Classes (since Delphi 2005)
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

**Special features:**
- Nested types within `type` section of a class
- No implicit access to outer class
- Since Delphi 2005

**Further reading:**
- [Delphi Documentation - Nested Type Declarations](https://docwiki.embarcadero.com/RADStudio/en/Nested_Type_Declarations)

</TabItem>
</Tabs>


## 8.1.11. Object Literals

Syntactic constructs for directly creating objects without class definition.

### Languages {#sprachen}

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

// Shorthand (since ES6)
const name = "Max";
const age = 30;
const person2 = { name, age };

// Method Shorthand (since ES6)
const person3 = {
    name: "Max",
    greet() {
        console.log(`Hallo, ich bin ${this.name}`);
    }
};
```

**Special features:**
- Direct object creation without class
- Supports methods and properties
- Shorthand syntax since ES6

**Further reading:**
- [MDN Web Docs - Object Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Object Literal with type annotation
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

**Special features:**
- Supports type annotations
- Similar to JavaScript with types

**Further reading:**
- [TypeScript Documentation - Object Types](https://www.typescriptlang.org/docs/handbook/2/objects.html)

</TabItem>
<TabItem value="python" label="Python">

```python
# Dictionary as Object Literal
person = {
    "name": "Max",
    "age": 30,
    "greet": lambda self: print(f"Hallo, ich bin {self['name']}")
}

# Or with TypedDict (since Python 3.8)
from typing import TypedDict

class PersonDict(TypedDict):
    name: str
    age: int

person2: PersonDict = {
    "name": "Max",
    "age": 30
}
```

**Special features:**
- Dictionaries are used as object literals
- `TypedDict` for type annotations

**Further reading:**
- [Python Documentation - Dictionaries](https://docs.python.org/3/tutorial/datastructures.html#dictionaries)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Hash as Object Literal
person = {
    name: "Max",
    age: 30,
    greet: -> { puts "Hallo, ich bin #{self[:name]}" }
}

# Or with Struct
Person = Struct.new(:name, :age)
person2 = Person.new("Max", 30)
```

**Special features:**
- Hashes are used as object literals
- `Struct` for structured objects

**Further reading:**
- [Ruby Documentation - Hashes](https://ruby-doc.org/core-3.1.2/Hash.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Data Class as Object Literal replacement
data class Person(val name: String, val age: Int)

val person = Person("Max", 30)

// Oder mit Map
val person2 = mapOf(
    "name" to "Max",
    "age" to 30
)
```

**Special features:**
- Data classes for structured objects
- Maps for dynamic objects

**Further reading:**
- [Kotlin Documentation - Data Classes](https://kotlinlang.org/docs/data-classes.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Case Class as Object Literal replacement
case class Person(name: String, age: Int)

val person = Person("Max", 30)

// Oder mit Map
val person2 = Map(
    "name" -> "Max",
    "age" -> 30
)
```

**Special features:**
- Case classes for structured objects
- Maps for dynamic objects

**Further reading:**
- [Scala Documentation - Case Classes](https://docs.scala-lang.org/tour/case-classes.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Dictionary as Object Literal
let person: [String: Any] = [
    "name": "Max",
    "age": 30
]

// Or with Struct
struct Person {
    let name: String
    let age: Int
}

let person2 = Person(name: "Max", age: 30)
```

**Special features:**
- Dictionaries for dynamic objects
- Structs for structured objects

**Further reading:**
- [Swift Documentation - Dictionaries](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/collectiontypes/)

</TabItem>
</Tabs>


## 8.1.12. Object Expressions (Anonymous Objects)

Anonymous objects created directly inline without explicit class definition.

### Languages {#sprachen}

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

// With access to local variables
fun createGreeter(name: String): Greeter {
    return object : Greeter {
        override fun greet() {
            println("Hallo, ich bin $name")
        }
    }
}
```

**Special features:**
- `object` for anonymous objects
- Can extend interfaces or classes
- Supports closures

**Further reading:**
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

// With access to local variables
def createGreeter(name: String): Greeter = {
    new Greeter {
        override def greet(): Unit = {
            println(s"Hallo, ich bin $name")
        }
    }
}
```

**Special features:**
- `new Trait {}` for anonymous objects
- Can implement traits
- Supports closures

**Further reading:**
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

// With access to local variables (final oder effectively final)
Greeter createGreeter(String name) {
    return new Greeter() {
        @Override
        public void greet() {
            System.out.println("Hallo, ich bin " + name);
        }
    };
}
```

**Special features:**
- Anonymous classes with `new Interface {}`
- Can implement interfaces or abstract classes
- Access only to final or effectively final variables

**Further reading:**
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

// With access to local variables
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

**Special features:**
- Anonymous objects with `new Interface {}`
- Can implement interfaces
- Supports closures

**Further reading:**
- [Microsoft C# Documentation - Anonymous Types](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/types/anonymous-types)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Object Literal as anonymous object
const greeter = {
    greet: function() {
        console.log("Hallo");
    }
};

// With Closure
function createGreeter(name) {
    return {
        greet: function() {
            console.log(`Hallo, ich bin ${name}`);
        }
    };
}
```

**Special features:**
- Object literals as anonymous objects
- Supports closures
- No explicit interface implementation

**Further reading:**
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

// With Closure
function createGreeter(name: string): Greeter {
    return {
        greet: function() {
            console.log(`Hallo, ich bin ${name}`);
        }
    };
}
```

**Special features:**
- Object literals with type annotations
- Supports closures
- Type annotations for interface implementation

**Further reading:**
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

// With Closure
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

**Special features:**
- Anonymous classes with closure syntax
- Can implement protocols
- Supports closures

**Further reading:**
- [Swift Documentation - Closures](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/closures/)

</TabItem>
</Tabs>


