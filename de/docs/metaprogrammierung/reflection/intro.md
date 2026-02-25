---
slug: /metaprogrammierung/reflection
title: 16.1. Reflection
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 16.1. Reflection

Reflection zur Laufzeit.

## 16.1.1. Runtime Reflection

Ermöglicht es, zur Laufzeit Informationen über Typen, Klassen, Methoden und Felder zu untersuchen und zu manipulieren, ohne dass diese zur Compile-Zeit bekannt sein müssen.

### Sprachen {#sprachen}

<Tabs availableTabs={['clojure', 'common-lisp', 'csharp', 'd', 'elixir', 'erlang', 'fsharp', 'go', 'groovy', 'haskell', 'java', 'javascript', 'julia', 'kotlin', 'lua', 'matlab', 'objective-c', 'object-pascal', 'ocaml', 'perl', 'php', 'prolog', 'python', 'r', 'racket', 'ruby', 'scala', 'scheme', 'swift', 'typescript', 'vbnet', 'wolfram-language']} yellowTabs={['crystal', 'dart', 'mercury', 'nim', 'rust']}>
<TabItem value="csharp" label="C#">

```csharp
// Benötigt: using System; using System.Reflection;

class Person {
    public string Name { get; set; }
    private int Age { get; set; }
    
    public Person(string name, int age) {
        Name = name;
        Age = age;
    }
    
    public void Greet() {
        Console.WriteLine($"Hello, I'm {Name}");
    }
}

Type type = typeof(Person);
Console.WriteLine($"Type: {type.Name}");

PropertyInfo[] properties = type.GetProperties(BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.Instance);
foreach (PropertyInfo prop in properties) {
    Console.WriteLine($"Property: {prop.Name} ({prop.PropertyType.Name})");
}

MethodInfo method = type.GetMethod("Greet");
Person person = new Person("Alice", 30);
method.Invoke(person, null);
```

**Besonderheiten:**
- Umfassende Reflection-API über `System.Reflection`
- Unterstützt Untersuchung von privaten und geschützten Membern
- Ermöglicht dynamische Instanziierung und Methodenaufrufe

**Weiterführende Links:**
- [Microsoft C# Documentation - Reflection](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/reflection)

</TabItem>
<TabItem value="java" label="Java">

```java
import java.lang.reflect.*;

class Person {
    public String name;
    private int age;
    
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public void greet() {
        System.out.println("Hello, I'm " + name);
    }
}

Class<?> clazz = Person.class;
System.out.println("Type: " + clazz.getName());

Field[] fields = clazz.getDeclaredFields();
for (Field field : fields) {
    System.out.println("Field: " + field.getName() + " (" + field.getType().getName() + ")");
}

Method method = clazz.getMethod("greet");
Person person = new Person("Alice", 30);
method.invoke(person);
```

**Besonderheiten:**
- Reflection-API über `java.lang.reflect`
- Unterstützt Untersuchung von privaten Feldern mit `setAccessible(true)`
- Ermöglicht dynamische Instanziierung über `Constructor.newInstance()`

**Weiterführende Links:**
- [Oracle Java Documentation - Reflection](https://docs.oracle.com/javase/tutorial/reflect/)

</TabItem>
<TabItem value="python" label="Python">

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self._age = age
    
    def greet(self):
        print(f"Hello, I'm {self.name}")

person = Person("Alice", 30)

# Typ-Informationen
print(f"Type: {type(person).__name__}")

# Attribute auflisten
attrs = dir(person)
for attr in attrs:
    if not attr.startswith('__'):
        value = getattr(person, attr, None)
        if not callable(value):
            print(f"Attribute: {attr} = {value}")

# Methode dynamisch aufrufen
method = getattr(person, 'greet')
method()
```

**Besonderheiten:**
- Sehr dynamische Reflection über `dir()`, `getattr()`, `setattr()`, `hasattr()`
- `inspect`-Modul für erweiterte Reflection-Funktionen
- Alle Attribute sind zur Laufzeit zugänglich

**Weiterführende Links:**
- [Python Documentation - inspect](https://docs.python.org/3/library/inspect.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }
    
    greet() {
        console.log(`Hello, I'm ${this.name}`);
    }
}

const person = new Person("Alice", 30);

// Typ-Informationen
console.log(`Type: ${person.constructor.name}`);

// Eigenschaften auflisten
const props = Object.getOwnPropertyNames(person);
for (const prop of props) {
    const value = person[prop];
    if (typeof value !== 'function') {
        console.log(`Property: ${prop} = ${value}`);
    }
}

// Methode dynamisch aufrufen
const method = person['greet'];
method.call(person);
```

**Besonderheiten:**
- Reflection über `Object.getOwnPropertyNames()`, `Object.keys()`, `Reflect`-API
- `Reflect`-API bietet strukturierte Reflection-Operationen
- Alle Eigenschaften sind zur Laufzeit zugänglich

**Weiterführende Links:**
- [MDN Web Docs - Reflect](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
class Person {
    public name: string;
    private _age: number;
    
    constructor(name: string, age: number) {
        this.name = name;
        this._age = age;
    }
    
    greet(): void {
        console.log(`Hello, I'm ${this.name}`);
    }
}

const person = new Person("Alice", 30);

// Typ-Informationen
console.log(`Type: ${person.constructor.name}`);

// Eigenschaften auflisten
const props = Object.getOwnPropertyNames(person);
for (const prop of props) {
    const value = (person as any)[prop];
    if (typeof value !== 'function') {
        console.log(`Property: ${prop} = ${value}`);
    }
}

// Methode dynamisch aufrufen
const method = (person as any)['greet'];
method.call(person);
```

**Besonderheiten:**
- Reflection zur Laufzeit identisch mit JavaScript
- Type-Informationen gehen zur Laufzeit verloren (Type Erasure)
- `as any` notwendig für dynamische Zugriffe

**Weiterführende Links:**
- [TypeScript Handbook - Type Erasure](https://www.typescriptlang.org/docs/handbook/2/basic-types.html#type-erasure)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
class Person
  attr_accessor :name
  attr_reader :age
  
  def initialize(name, age)
    @name = name
    @age = age
  end
  
  def greet
    puts "Hello, I'm #{@name}"
  end
end

person = Person.new("Alice", 30)

# Typ-Informationen
puts "Type: #{person.class.name}"

# Methoden auflisten
methods = person.class.instance_methods(false)
methods.each do |method|
  puts "Method: #{method}"
end

# Instanzvariablen auflisten
vars = person.instance_variables
vars.each do |var|
  puts "Variable: #{var} = #{person.instance_variable_get(var)}"
end

# Methode dynamisch aufrufen
person.send(:greet)
```

**Besonderheiten:**
- Sehr mächtige Reflection über `send()`, `method()`, `instance_variables`
- `metaclass` ermöglicht Metaprogrammierung auf Klassenebene
- Alle Methoden und Variablen sind zur Laufzeit zugänglich

**Weiterführende Links:**
- [Ruby Documentation - Reflection](https://ruby-doc.org/core-3.1.0/Object.html#method-i-send)

</TabItem>
<TabItem value="php" label="PHP">

```php
class Person {
    public $name;
    private $age;
    
    public function __construct($name, $age) {
        $this->name = $name;
        $this->age = $age;
    }
    
    public function greet() {
        echo "Hello, I'm {$this->name}\n";
    }
}

$person = new Person("Alice", 30);

// Typ-Informationen
echo "Type: " . get_class($person) . "\n";

// Eigenschaften auflisten
$reflection = new ReflectionClass($person);
$properties = $reflection->getProperties();
foreach ($properties as $property) {
    $property->setAccessible(true);
    echo "Property: {$property->getName()} = {$property->getValue($person)}\n";
}

// Methode dynamisch aufrufen
$method = $reflection->getMethod('greet');
$method->invoke($person);
```

**Besonderheiten:**
- Reflection-API über `ReflectionClass`, `ReflectionMethod`, `ReflectionProperty`
- Unterstützt Untersuchung von privaten Membern mit `setAccessible(true)`
- Ermöglicht dynamische Instanziierung und Methodenaufrufe

**Weiterführende Links:**
- [PHP Documentation - Reflection](https://www.php.net/manual/en/book.reflection.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
:- dynamic person/3.

person(alice, 30, developer).
person(bob, 25, designer).

% Klauseln inspizieren
?- clause(person(Name, Age, _Role), true).
% Name = alice, Age = 30 ;
% Name = bob, Age = 25

% Prädikat-Eigenschaften
?- predicate_property(person(_,_,_), number_of_clauses(N)).
% N = 2

% Term-Informationen
?- functor(person(alice, 30, developer), Name, Arity).
% Name = person, Arity = 3

% Alle Prädikate eines Moduls auflisten
?- predicate_property(Head, defined_in(user)),
   functor(Head, Name, Arity),
   format("~w/~w~n", [Name, Arity]).
```

**Besonderheiten:**
- `clause/2` inspiziert Klauseln eines Prädikats
- `predicate_property/2` liefert Prädikat-Metadaten
- `functor/3` und `=../2` für Term-Inspektion
- Prolog-Programme sind selbst Daten — introspektiv von Natur aus

**Weiterführende Links:**
- [SWI-Prolog Documentation - clause](https://www.swi-prolog.org/pldoc/man?predicate=clause/2)

</TabItem>
<TabItem value="go" label="Go">

```go
package main

import (
    "fmt"
    "reflect"
)

type Person struct {
    Name string
    age  int
}

func (p Person) Greet() {
    fmt.Printf("Hello, I'm %s\n", p.Name)
}

person := Person{Name: "Alice", age: 30}

// Typ-Informationen
t := reflect.TypeOf(person)
fmt.Printf("Type: %s\n", t.Name())

// Felder auflisten
v := reflect.ValueOf(person)
for i := 0; i < v.NumField(); i++ {
    field := t.Field(i)
    fieldValue := v.Field(i)
    if fieldValue.CanInterface() {
        fmt.Printf("Field: %s = %v\n", field.Name, fieldValue.Interface())
    }
}

// Methode dynamisch aufrufen
method := v.MethodByName("Greet")
method.Call(nil)
```

**Besonderheiten:**
- Reflection über `reflect`-Package
- Nur exportierte Felder sind über `Interface()` zugänglich
- Reflection ist typsicher, aber weniger flexibel als in dynamischen Sprachen

**Weiterführende Links:**
- [Go Documentation - reflect](https://pkg.go.dev/reflect)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
use std::any::{Any, TypeId};

trait Reflect {
    fn type_name(&self) -> &'static str;
    fn as_any(&self) -> &dyn Any;
}

struct Person {
    name: String,
    age: u32,
}

impl Person {
    fn new(name: String, age: u32) -> Self {
        Person { name, age }
    }
    
    fn greet(&self) {
        println!("Hello, I'm {}", self.name);
    }
}

impl Reflect for Person {
    fn type_name(&self) -> &'static str {
        std::any::type_name::<Person>()
    }
    
    fn as_any(&self) -> &dyn Any {
        self
    }
}

let person = Person::new("Alice".to_string(), 30);

// Typ-Informationen
println!("Type: {}", person.type_name());
println!("TypeId: {:?}", person.as_any().type_id());

// Methode aufrufen
person.greet();
```

**Besonderheiten:**
- Sehr eingeschränkte Reflection über `std::any::Any` und `TypeId`
- Keine direkte Untersuchung von Feldern oder Methoden zur Laufzeit
- Typinformationen gehen zur Laufzeit größtenteils verloren
- Erweiterte Reflection erfordert Makros oder externe Crates wie `bevy_reflect`

**Weiterführende Links:**
- [Rust Documentation - std::any](https://doc.rust-lang.org/std/any/index.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
import Foundation

class Person {
    var name: String
    private var age: Int
    
    init(name: String, age: Int) {
        self.name = name
        self.age = age
    }
    
    func greet() {
        print("Hello, I'm \(name)")
    }
}

let person = Person(name: "Alice", age: 30)

// Typ-Informationen
let mirror = Mirror(reflecting: person)
print("Type: \(mirror.subjectType)")

// Eigenschaften auflisten
for child in mirror.children {
    if let label = child.label {
        print("Property: \(label) = \(child.value)")
    }
}

// Methode dynamisch aufrufen
let method = person.greet
method()
```

**Besonderheiten:**
- Reflection über `Mirror`-API
- Unterstützt Untersuchung von Strukturen und Klassen
- Dynamische Methodenaufrufe über Closures möglich
- Weniger mächtig als Reflection in anderen Sprachen

**Weiterführende Links:**
- [Swift Documentation - Mirror](https://developer.apple.com/documentation/swift/mirror)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Benötigt: import kotlin.reflect.full.*

class Person(val name: String, private val age: Int) {
    fun greet() {
        println("Hello, I'm $name")
    }
}

fun main() {
    val person = Person("Alice", 30)
    
    // Typ-Informationen
    val kClass = person::class
    println("Type: ${kClass.simpleName}")
    
    // Eigenschaften auflisten
    kClass.memberProperties.forEach { prop ->
        prop.isAccessible = true
        println("Property: ${prop.name} = ${prop.get(person)}")
    }
    
    // Methode dynamisch aufrufen
    val method = kClass.functions.find { it.name == "greet" }
    method?.call(person)
}
```

**Besonderheiten:**
- Reflection über `kotlin.reflect`-Package
- Unterstützt Untersuchung von privaten Membern mit `isAccessible = true`
- `KClass`, `KFunction`, `KProperty` für Typinformationen
- Ermöglicht dynamische Instanziierung und Methodenaufrufe

**Weiterführende Links:**
- [Kotlin Documentation - Reflection](https://kotlinlang.org/docs/reflection.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
import scala.reflect.runtime.universe._

class Person(val name: String, private val age: Int) {
  def greet(): Unit = {
    println(s"Hello, I'm $name")
  }
}

val person = new Person("Alice", 30)

// Typ-Informationen
val tpe = typeOf[Person]
println(s"Type: ${tpe.typeSymbol.name}")

// Methoden auflisten
val methods = tpe.members.filter(_.isMethod)
methods.foreach { method =>
  println(s"Method: ${method.name}")
}

// Methode dynamisch aufrufen
val mirror = runtimeMirror(getClass.getClassLoader)
val instanceMirror = mirror.reflect(person)
val greetMethod = tpe.member(TermName("greet")).asMethod
instanceMirror.reflectMethod(greetMethod)()
```

**Besonderheiten:**
- Mächtige Reflection über `scala.reflect.runtime.universe`
- Unterstützt sowohl Runtime- als auch Compile-Time-Reflection
- `TypeTag` und `ClassTag` für Typinformationen
- Ermöglicht komplexe Metaprogrammierung

**Weiterführende Links:**
- [Scala Documentation - Reflection](https://docs.scala-lang.org/overviews/reflection/overview.html)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
class Person {
    String name
    private int age
    
    Person(String name, int age) {
        this.name = name
        this.age = age
    }
    
    void greet() {
        println "Hello, I'm ${name}"
    }
}

def person = new Person("Alice", 30)

// Typ-Informationen
println "Type: ${person.class.name}"

// Eigenschaften auflisten
person.properties.each { key, value ->
    if (key != 'class') {
        println "Property: ${key} = ${value}"
    }
}

// Methode dynamisch aufrufen
person."greet"()
```

**Besonderheiten:**
- Sehr dynamische Reflection über `properties`, `methods`, `metaClass`
- Unterstützt dynamische Methodenaufrufe über String-Namen
- `metaClass` ermöglicht Metaprogrammierung zur Laufzeit
- Alle Eigenschaften sind über `properties` zugänglich

**Weiterführende Links:**
- [Groovy Documentation - Reflection](https://groovy-lang.org/metaprogramming.html#_reflection)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
(defrecord Person [name age])

(defn greet [person]
  (println (str "Hello, I'm " (:name person))))

(def person (->Person "Alice" 30))

;; Typ-Informationen
(println "Type:" (type person))

;; Felder auflisten
(println "Fields:" (keys person))

;; Funktion dynamisch aufrufen
((resolve 'greet) person)
```

**Besonderheiten:**
- Sehr dynamische Reflection über `type`, `class`, `resolve`
- Unterstützt Metaprogrammierung über Makros
- Funktionen sind First-Class-Objekte
- `resolve` ermöglicht dynamische Funktionsauflösung

**Weiterführende Links:**
- [Clojure Documentation - Reflection](https://clojure.org/reference/reflection)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
(defclass person ()
  ((name :initarg :name :accessor person-name)
   (age :initarg :age :accessor person-age :initform 0)))

(defmethod greet ((p person))
  (format t "Hello, I'm ~a~%" (person-name p)))

(let ((person (make-instance 'person :name "Alice" :age 30)))
  ;; Typ-Informationen
  (format t "Type: ~a~%" (class-name (class-of person)))
  
  ;; Slots auflisten
  (format t "Slots: ~a~%" (mapcar #'slot-definition-name 
                                   (class-slots (class-of person))))
  
  ;; Methode dynamisch aufrufen
  (funcall #'greet person))
```

**Besonderheiten:**
- Mächtige Reflection über CLOS (Common Lisp Object System)
- `class-of`, `class-slots`, `class-direct-slots` für Klasseninformationen
- `find-method`, `compute-applicable-methods` für Methodenuntersuchung
- Unterstützt Metaprogrammierung auf Klassenebene

**Weiterführende Links:**
- [Common Lisp HyperSpec - Classes](http://www.lispworks.com/documentation/HyperSpec/Body/t_class.htm)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
(struct person (name age) #:transparent)

(define alice (person "Alice" 30))

;; Typ-Informationen
(person? alice)         ; #t
(struct? alice)         ; #t
(person-name alice)     ; "Alice"

;; Struct-Info abrufen
(define-values (type skipped?) (struct-info alice))
```

**Besonderheiten:**
- Reflection über Typ-Prädikate (`person?`, `struct?`)
- `struct-info` für Struct-Typ-Informationen
- `#:transparent` macht Structs inspizierbar
- Funktionen sind First-Class-Objekte

**Weiterführende Links:**
- [Racket Documentation - Structures](https://docs.racket-lang.org/reference/structures.html)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
package Person;

sub new {
    my ($class, $name, $age) = @_;
    bless { name => $name, age => $age }, $class;
}

sub greet {
    my ($self) = @_;
    print "Hello, I'm $self->{name}\n";
}

package main;

my $person = Person->new("Alice", 30);

# Typ-Informationen
print "Type: " . ref($person) . "\n";

# Methoden auflisten
my @methods = grep { defined &{"Person::$_"} } keys %Person::;
print "Methods: @methods\n";

# Methode dynamisch aufrufen
$person->greet();
```

**Besonderheiten:**
- Sehr dynamische Reflection über Symbol-Tabellen (`%Package::`)
- Unterstützt dynamische Methodenaufrufe über String-Namen
- `bless` für Objekt-Erstellung
- Alle Methoden sind über Symbol-Tabellen zugänglich

**Weiterführende Links:**
- [Perl Documentation - Reflection](https://perldoc.perl.org/perlref)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
struct Person
    name::String
    age::Int
end

function greet(person::Person)
    println("Hello, I'm $(person.name)")
end

person = Person("Alice", 30)

# Typ-Informationen
println("Type: $(typeof(person))")

# Felder auflisten
field_names = fieldnames(Person)
for field in field_names
    value = getfield(person, field)
    println("Field: $field = $value")
end

# Funktion dynamisch aufrufen
greet(person)
```

**Besonderheiten:**
- Reflection über `typeof()`, `fieldnames()`, `getfield()`
- Unterstützt Untersuchung von Typen zur Laufzeit
- `methods()` für Funktionsüberladungen
- Sehr mächtige Metaprogrammierung über Makros

**Weiterführende Links:**
- [Julia Documentation - Reflection](https://docs.julialang.org/en/v1/manual/metaprogramming/#Reflection)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
class Person {
  String name;
  int _age;
  
  Person(this.name, this._age);
  
  void greet() {
    print("Hello, I'm $name");
  }
}

var person = Person("Alice", 30);

// Typ-Informationen
print("Type: ${person.runtimeType}");

// Reflection über dart:mirrors (deprecated, aber verfügbar)
// Hinweis: dart:mirrors ist in Flutter nicht verfügbar
// Für Produktionscode sollte code_generation verwendet werden
```

**Besonderheiten:**
- `dart:mirrors` für Reflection (deprecated, nicht in Flutter verfügbar)
- Für Produktionscode wird Code-Generierung bevorzugt
- `runtimeType` für grundlegende Typinformationen
- Reflection wird in Flutter-Apps nicht unterstützt

**Weiterführende Links:**
- [Dart Documentation - Reflection](https://api.dart.dev/stable/dart-mirrors/dart-mirrors-library.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
Person = {}
Person.__index = Person

function Person:new(name, age)
    local obj = {name = name, age = age}
    setmetatable(obj, Person)
    return obj
end

function Person:greet()
    print("Hello, I'm " .. self.name)
end

local person = Person:new("Alice", 30)

-- Typ-Informationen
print("Type: " .. tostring(getmetatable(person)))

-- Eigenschaften auflisten
for key, value in pairs(person) do
    if type(value) ~= "function" then
        print("Property: " .. key .. " = " .. tostring(value))
    end
end

-- Methode dynamisch aufrufen
person:greet()
```

**Besonderheiten:**
- Reflection über `getmetatable()`, `pairs()`, `ipairs()`
- Unterstützt Untersuchung von Tabellen und Metatabellen
- Dynamische Methodenaufrufe über String-Namen möglich
- Alle Eigenschaften sind über `pairs()` zugänglich

**Weiterführende Links:**
- [Lua Documentation - Reflection](https://www.lua.org/manual/5.4/manual.html#2.4)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
#import <Foundation/Foundation.h>
#import <objc/runtime.h>

@interface Person : NSObject
@property (nonatomic, strong) NSString *name;
@property (nonatomic, assign) int age;
- (void)greet;
@end

@implementation Person
- (void)greet {
    NSLog(@"Hello, I'm %@", self.name);
}
@end

int main(int argc, const char * argv[]) {
    @autoreleasepool {
        Person *person = [[Person alloc] init];
        person.name = @"Alice";
        person.age = 30;
        
        // Typ-Informationen
        Class cls = [person class];
        NSLog(@"Type: %s", class_getName(cls));
        
        // Eigenschaften auflisten
        unsigned int count;
        objc_property_t *properties = class_copyPropertyList(cls, &count);
        for (unsigned int i = 0; i < count; i++) {
            NSLog(@"Property: %s", property_getName(properties[i]));
        }
        free(properties);
        
        // Methode dynamisch aufrufen
        [person greet];
    }
    return 0;
}
```

**Besonderheiten:**
- Mächtige Reflection über Objective-C Runtime API (`objc/runtime.h`)
- Unterstützt Untersuchung von Klassen, Methoden, Eigenschaften zur Laufzeit
- `class_getInstanceMethod`, `method_invoke` für dynamische Methodenaufrufe
- Ermöglicht komplexe Metaprogrammierung

**Weiterführende Links:**
- [Apple Documentation - Objective-C Runtime](https://developer.apple.com/documentation/objectivec/objective-c_runtime)

</TabItem>
<TabItem value="d" label="D">

```d
// Benötigt: import std.stdio; import std.traits;

class Person {
    string name;
    private int age;
    
    this(string name, int age) {
        this.name = name;
        this.age = age;
    }
    
    void greet() {
        writeln("Hello, I'm ", name);
    }
}

void main() {
    auto person = new Person("Alice", 30);
    
    // Typ-Informationen
    writeln("Type: ", person.classinfo.name);
    
    // Methoden auflisten
    foreach (member; __traits(allMembers, Person)) {
        writeln("Member: ", member);
    }
    
    // Methode dynamisch aufrufen
    person.greet();
}
```

**Besonderheiten:**
- Reflection über `__traits`, `classinfo`
- Unterstützt Compile-Time-Reflection über Templates
- `__traits(allMembers)` für Member-Auflistung
- Runtime-Reflection weniger mächtig als Compile-Time-Reflection

**Weiterführende Links:**
- [D Language Documentation - Traits](https://dlang.org/spec/traits.html)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
class Person
  property name : String
  private property age : Int32
  
  def initialize(@name : String, @age : Int32)
  end
  
  def greet
    puts "Hello, I'm #{@name}"
  end
end

person = Person.new("Alice", 30)

# Typ-Informationen
puts "Type: #{person.class.name}"

# Methoden auflisten (zur Compile-Zeit)
# Crystal unterstützt keine vollständige Runtime-Reflection
# Typinformationen sind zur Laufzeit verfügbar, aber Methodenauflistung nicht

person.greet()
```

**Besonderheiten:**
- Sehr eingeschränkte Runtime-Reflection
- Typinformationen zur Laufzeit verfügbar über `.class`
- Methodenauflistung zur Laufzeit nicht möglich
- Metaprogrammierung hauptsächlich zur Compile-Zeit über Makros

**Weiterführende Links:**
- [Crystal Documentation - Metaprogramming](https://crystal-lang.org/reference/1.9/guides/metaprogramming.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Eingeschränkte Runtime-Reflection
type
  Animal = ref object of RootObj
  Dog = ref object of Animal
  Cat = ref object of Animal

var pet: Animal = Dog()

# Runtime Type Check mit `of`
echo pet of Dog     # true
echo pet of Cat     # false
echo pet of Animal  # true

# Compile-time Reflection über fieldPairs
type Person = object
  name: string
  age: int

var p = Person(name: "Alice", age: 30)
for name, value in p.fieldPairs:
  echo name, ": ", value
```

**Besonderheiten:**
- Sehr eingeschränkte Runtime-Reflection
- `of`-Operator für Runtime-Type-Checks bei `ref object`-Hierarchien
- `fieldPairs` und `fields` Iteratoren für Compile-time Reflection
- Keine dynamische Methodenauflösung über Strings

**Weiterführende Links:**
- [Nim Documentation - Object Types](https://nim-lang.org/docs/manual.html#types-object-types)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
type person = {
  name : string;
  age : int;
}

let greet p =
  Printf.printf "Hello, I'm %s\n" p.name

let person = { name = "Alice"; age = 30 }

(* Typ-Informationen *)
let () = Printf.printf "Type: person\n"

(* Felder auflisten *)
let () = 
  let fields = [("name", Obj.field (Obj.repr person) 0);
                ("age", Obj.field (Obj.repr person) 1)] in
  List.iter (fun (name, _) -> Printf.printf "Field: %s\n" name) fields

(* Funktion aufrufen *)
let () = greet person
```

**Besonderheiten:**
- Sehr eingeschränkte Reflection über `Obj`-Modul
- Typinformationen gehen zur Laufzeit größtenteils verloren
- Pattern Matching für strukturierte Datenzugriffe
- Reflection nicht empfohlen für Produktionscode

**Weiterführende Links:**
- [OCaml Documentation](https://ocaml.org/api/Obj.html)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
{-# LANGUAGE DeriveDataTypeable #-}
import Data.Data
import Data.Typeable

data Person = Person {
    name :: String,
    age :: Int
} deriving (Data, Typeable)

greet :: Person -> IO ()
greet p = putStrLn $ "Hello, I'm " ++ name p

main :: IO ()
main = do
    let person = Person "Alice" 30
    
    -- Typ-Informationen
    putStrLn $ "Type: " ++ show (typeOf person)
    
    -- Konstruktor-Informationen
    putStrLn $ "Constructor: " ++ show (toConstr person)
    
    -- Funktion aufrufen
    greet person
```

**Besonderheiten:**
- Sehr eingeschränkte Reflection über `Data.Data` und `Data.Typeable`
- `Typeable` für Typinformationen zur Laufzeit
- `Data` für generische Programmierung
- Reflection nicht so mächtig wie in dynamischen Sprachen

**Weiterführende Links:**
- [Haskell Documentation - Data.Data](https://hackage.haskell.org/package/base/docs/Data-Data.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Benötigt: open System, open System.Reflection

type Person(name: string, age: int) =
    member val Name = name with get, set
    member val Age = age with get, set
    
    member this.Greet() =
        printfn "Hello, I'm %s" this.Name

let person = Person("Alice", 30)

// Typ-Informationen
let t = typeof<Person>
printfn "Type: %s" t.Name

// Eigenschaften auflisten
let properties = t.GetProperties()
for prop in properties do
    printfn "Property: %s" prop.Name

// Methode dynamisch aufrufen
let method = t.GetMethod("Greet")
method.Invoke(person, null) |> ignore
```

**Besonderheiten:**
- Reflection über .NET `System.Reflection` (identisch mit C#)
- Unterstützt Untersuchung von Typen, Methoden, Eigenschaften
- `typeof<'T>` für Typinformationen
- Ermöglicht dynamische Instanziierung und Methodenaufrufe

**Weiterführende Links:**
- [F# Documentation - Reflection](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/reflection)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Benötigt: Imports System, Imports System.Reflection

Public Class Person
    Public Property Name As String
    Private Property Age As Integer
    
    Public Sub New(name As String, age As Integer)
        Me.Name = name
        Me.Age = age
    End Sub
    
    Public Sub Greet()
        Console.WriteLine($"Hello, I'm {Name}")
    End Sub
End Class

Module Main
    Sub Main()
        Dim person As New Person("Alice", 30)
        
        ' Typ-Informationen
        Dim t As Type = GetType(Person)
        Console.WriteLine($"Type: {t.Name}")
        
        ' Eigenschaften auflisten
        Dim properties As PropertyInfo() = t.GetProperties(BindingFlags.Public Or BindingFlags.NonPublic Or BindingFlags.Instance)
        For Each prop In properties
            Console.WriteLine($"Property: {prop.Name}")
        Next
        
        ' Methode dynamisch aufrufen
        Dim method As MethodInfo = t.GetMethod("Greet")
        method.Invoke(person, Nothing)
    End Sub
End Module
```

**Besonderheiten:**
- Reflection über .NET `System.Reflection` (identisch mit C#)
- Unterstützt Untersuchung von privaten und geschützten Membern
- `GetType()` für Typinformationen
- Ermöglicht dynamische Instanziierung und Methodenaufrufe

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Reflection](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/concepts/reflection)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
-module(person).
-export([new/2, greet/1, get_info/1]).

-record(person, {name, age}).

new(Name, Age) ->
    #person{name = Name, age = Age}.

greet(Person) ->
    io:format("Hello, I'm ~s~n", [Person#person.name]).

get_info(Person) ->
    io:format("Type: person~n"),
    io:format("Fields: ~p~n", [record_info(fields, person)]).

% Verwendung
% Person = person:new("Alice", 30),
% person:get_info(Person),
% person:greet(Person).
```

**Besonderheiten:**
- Sehr eingeschränkte Reflection über `erlang:get_module_info/1`
- `record_info/2` für Record-Informationen
- Typinformationen gehen zur Laufzeit größtenteils verloren
- Pattern Matching für strukturierte Datenzugriffe

**Weiterführende Links:**
- [Erlang Documentation - Records](https://www.erlang.org/doc/reference_manual/records.html)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
defmodule Person do
  defstruct name: nil, age: nil
  
  def new(name, age) do
    %Person{name: name, age: age}
  end
  
  def greet(%Person{name: name}) do
    IO.puts("Hello, I'm #{name}")
  end
  
  def get_info(person) do
    IO.puts("Type: Person")
    IO.puts("Fields: #{inspect(Map.keys(person))}")
  end
end

# Verwendung
# person = Person.new("Alice", 30)
# Person.get_info(person)
# Person.greet(person)
```

**Besonderheiten:**
- Sehr eingeschränkte Reflection über `__MODULE__`, `__struct__`
- `Map.keys/1` für Struct-Felder
- Typinformationen gehen zur Laufzeit größtenteils verloren
- Pattern Matching für strukturierte Datenzugriffe

**Weiterführende Links:**
- [Elixir Documentation - Module](https://hexdocs.pm/elixir/Module.html)
- [Elixir Documentation - Structs](https://elixir-lang.org/getting-started/structs.html)

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
            obj.name = name;
            obj.age = age;
        end
        
        function greet(obj)
            fprintf('Hello, I''m %s\n', obj.name);
        end
    end
end

person = Person('Alice', 30);

% Typ-Informationen
fprintf('Type: %s\n', class(person));

% Eigenschaften auflisten
props = properties(person);
for i = 1:length(props)
    fprintf('Property: %s\n', props{i});
end

% Methode aufrufen
person.greet();
```

**Besonderheiten:**
- Reflection über `class()`, `properties()`, `methods()`
- Unterstützt Untersuchung von Klassen zur Laufzeit
- `meta.class` für erweiterte Metadaten
- Weniger mächtig als in dynamischen Sprachen

**Weiterführende Links:**
- [MATLAB Documentation - Reflection](https://www.mathworks.com/help/matlab/ref/metaclass.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Benötigt: :- import_module deconstruct, type_desc, construct, univ.

:- type person
    --->    person(name :: string, age :: int).

main(!IO) :-
    Person = person("Alice", 30),

    % Typ-Informationen
    TypeDesc = type_of(Person),
    io.format("Type: %s\n", [s(type_name(TypeDesc))], !IO),

    % Term-Zerlegung (Funktor, Arität, Argumente)
    deconstruct(Person, do_not_allow, Functor, Arity, Args),
    io.format("Functor: %s/%d\n", [s(Functor), i(Arity)], !IO),
    io.print_line(Args, !IO),

    % Benanntes Feld zugreifen
    ( if named_arg(Person, do_not_allow, "name", NameUniv) then
        io.format("Name: ", [], !IO),
        io.print_line(NameUniv, !IO)
    else
        true
    ),

    % Term dynamisch konstruieren
    NewArgs = [univ("Bob"), univ(25)],
    ( if construct(TypeDesc, 0, NewArgs) = NewPerson then
        io.print_line(NewPerson, !IO)
    else
        true
    ).
```

**Besonderheiten:**
- Runtime Reflection über `deconstruct`, `construct` und `type_desc` Module
- `deconstruct/5` zerlegt beliebige Terme in Funktor, Arität und Argumente (`list(univ)`)
- `named_arg/4` erlaubt Zugriff auf benannte Felder
- `construct/3` konstruiert Terme dynamisch aus Typ-Deskriptor und Argumenten
- Typsichere Reflection — alle Argumente als `univ` (universeller Typ)

**Weiterführende Links:**
- [Mercury Library Reference - deconstruct](https://www.mercurylang.org/information/doc-release/mercury_library/deconstruct.html)

</TabItem>
<TabItem value="r" label="R">

```r
Person <- setRefClass("Person",
  fields = list(name = "character", age = "numeric"),
  methods = list(
    initialize = function(name, age) {
      .self$name <<- name
      .self$age <<- age
    },
    greet = function() {
      cat("Hello, I'm", .self$name, "\n")
    }
  )
)

person <- Person$new("Alice", 30)

# Typ-Informationen
cat("Type:", class(person), "\n")

# Felder auflisten
cat("Fields:", paste(names(person$getRefClass()$fields()), collapse = ", "), "\n")

# Methode aufrufen
person$greet()
```

**Besonderheiten:**
- Reflection über `class()`, `getRefClass()`, `getClass()`
- Unterstützt Untersuchung von Reference Classes
- `methods()`, `fields()` für Klasseninformationen
- Weniger mächtig als in dynamischen Sprachen

**Weiterführende Links:**
- [R Documentation - Reference Classes](https://stat.ethz.ch/R-manual/R-devel/library/methods/html/refClass.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
(define (make-person name age)
  (list 'person name age))

(define (person-name person)
  (cadr person))

(define (person-age person)
  (caddr person))

(define (greet person)
  (display "Hello, I'm ")
  (display (person-name person))
  (newline))

(define person (make-person "Alice" 30))

;; Typ-Informationen
(display "Type: ")
(display (car person))
(newline)

;; Felder auflisten
(display "Fields: name, age")
(newline)

;; Funktion aufrufen
(greet person)
```

**Besonderheiten:**
- Sehr eingeschränkte Reflection
- Typinformationen durch Datenstrukturen repräsentiert
- Funktionen sind First-Class-Objekte
- Weniger strukturierte Reflection als in anderen Sprachen

**Weiterführende Links:**
- [Scheme Documentation](https://www.scheme.com/tspl4/)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```wolfram
person = <|"name" -> "Alice", "age" -> 30|>;

(* Typ-Informationen *)
Print["Type: ", Head[person]];

(* Eigenschaften auflisten *)
Print["Properties: ", Keys[person]];

(* Funktion definieren *)
greet[person_] := Print["Hello, I'm ", person["name"]];

(* Funktion aufrufen *)
greet[person]
```

**Besonderheiten:**
- Reflection über `Head[]`, `Keys[]`, `Attributes[]`
- Unterstützt Untersuchung von Symbolen und Ausdrücken
- `DownValues[]`, `UpValues[]` für Funktionsdefinitionen
- Sehr mächtige Metaprogrammierung

**Weiterführende Links:**
- [Wolfram Language Documentation - Reflection](https://reference.wolfram.com/language/guide/ReflectionAndMetaProgramming.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Benötigt: uses RTTI, TypInfo;
var
  Ctx: TRttiContext;
  RttiType: TRttiType;
  Prop: TRttiProperty;
begin
  Ctx := TRttiContext.Create;
  try
    RttiType := Ctx.GetType(TPerson);
    for Prop in RttiType.GetProperties do
      WriteLn(Prop.Name, ': ', Prop.PropertyType.Name);
  finally
    Ctx.Free;
  end;
end;
```

**Besonderheiten:**
- Extended RTTI seit Delphi 2010 (`RTTI` Unit)
- Klassisches RTTI über `TypInfo` Unit (für `published` Members)
- Zugriff auf Typen, Properties, Methoden, Felder zur Laufzeit

**Weiterführende Links:**
- [Delphi Documentation - RTTI](https://docwiki.embarcadero.com/RADStudio/en/Run-Time_Type_Information)

</TabItem>
</Tabs>


## 16.1.2. Type Information

Ermöglicht es, zur Laufzeit Informationen über Typen zu erhalten, wie Typname, Basisklassen, implementierte Interfaces und Typmerkmale.

### Sprachen {#sprachen}

<Tabs availableTabs={['clojure', 'common-lisp', 'crystal', 'csharp', 'd', 'dart', 'elixir', 'fsharp', 'go', 'groovy', 'haskell', 'java', 'javascript', 'julia', 'kotlin', 'lua', 'matlab', 'nim', 'objective-c', 'object-pascal', 'ocaml', 'perl', 'php', 'prolog', 'python', 'r', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'vbnet', 'wolfram-language']} yellowTabs={['erlang', 'mercury', 'zig']}>
<TabItem value="csharp" label="C#">

```csharp
using System;

class Animal { }
class Dog : Animal { }
interface IFlyable { }

Type dogType = typeof(Dog);

Console.WriteLine($"Type Name: {dogType.Name}");
Console.WriteLine($"Full Name: {dogType.FullName}");
Console.WriteLine($"Base Type: {dogType.BaseType?.Name}");
Console.WriteLine($"Is Class: {dogType.IsClass}");
Console.WriteLine($"Is Interface: {dogType.IsInterface}");

Type[] interfaces = dogType.GetInterfaces();
foreach (Type iface in interfaces) {
    Console.WriteLine($"Implements: {iface.Name}");
}
```

**Besonderheiten:**
- Umfassende Typinformationen über `System.Type`
- Unterstützt Untersuchung von Vererbungshierarchien
- `IsClass`, `IsInterface`, `IsValueType` für Typkategorien
- `GetInterfaces()` für implementierte Interfaces

**Weiterführende Links:**
- [Microsoft C# Documentation - Type](https://learn.microsoft.com/en-us/dotnet/api/system.type)

</TabItem>
<TabItem value="java" label="Java">

```java
import java.lang.reflect.*;

class Animal {}
class Dog extends Animal {}
interface IFlyable {}

Class<?> dogClass = Dog.class;

System.out.println("Type Name: " + dogClass.getName());
System.out.println("Simple Name: " + dogClass.getSimpleName());
System.out.println("Base Type: " + dogClass.getSuperclass().getName());
System.out.println("Is Interface: " + dogClass.isInterface());
System.out.println("Is Primitive: " + dogClass.isPrimitive());

Class<?>[] interfaces = dogClass.getInterfaces();
for (Class<?> iface : interfaces) {
    System.out.println("Implements: " + iface.getName());
}
```

**Besonderheiten:**
- Typinformationen über `Class<?>`-Objekt
- Unterstützt Untersuchung von Vererbungshierarchien
- `isInterface()`, `isPrimitive()`, `isArray()` für Typkategorien
- `getInterfaces()` für implementierte Interfaces

**Weiterführende Links:**
- [Oracle Java Documentation - Class](https://docs.oracle.com/javase/8/docs/api/java/lang/Class.html)

</TabItem>
<TabItem value="python" label="Python">

```python
class Animal:
    pass

class Dog(Animal):
    pass

class IFlyable:
    pass

dog_type = type(Dog)

print(f"Type Name: {dog_type.__name__}")
print(f"Module: {dog_type.__module__}")
print(f"Base Classes: {[base.__name__ for base in dog_type.__bases__]}")
print(f"Is Class: {isinstance(dog_type, type)}")

# MRO (Method Resolution Order)
print(f"MRO: {[cls.__name__ for cls in Dog.__mro__]}")
```

**Besonderheiten:**
- Typinformationen über `type()`, `__name__`, `__bases__`
- `__mro__` für Method Resolution Order
- `isinstance()` und `issubclass()` für Typprüfungen
- `__module__` für Modulinformationen

**Weiterführende Links:**
- [Python Documentation - Built-in Functions](https://docs.python.org/3/library/functions.html#type)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
class Animal {}
class Dog extends Animal {}

const dogInstance = new Dog();

console.log(`Type Name: ${dogInstance.constructor.name}`);
console.log(`Is Instance of Dog: ${dogInstance instanceof Dog}`);
console.log(`Is Instance of Animal: ${dogInstance instanceof Animal}`);

// Prototyp-Kette
let proto = Object.getPrototypeOf(dogInstance);
while (proto) {
    console.log(`Prototype: ${proto.constructor.name}`);
    proto = Object.getPrototypeOf(proto);
}
```

**Besonderheiten:**
- Typinformationen über `constructor.name`, `instanceof`
- `Object.getPrototypeOf()` für Prototyp-Kette
- `typeof` für primitive Typen
- Keine direkte Unterstützung für Interfaces

**Weiterführende Links:**
- [MDN Web Docs - instanceof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
class Animal {}
class Dog extends Animal {}

const dogInstance = new Dog();

console.log(`Type Name: ${dogInstance.constructor.name}`);
console.log(`Is Instance of Dog: ${dogInstance instanceof Dog}`);
console.log(`Is Instance of Animal: ${dogInstance instanceof Animal}`);

// Prototyp-Kette
let proto = Object.getPrototypeOf(dogInstance);
while (proto) {
    console.log(`Prototype: ${proto.constructor.name}`);
    proto = Object.getPrototypeOf(proto);
}
```

**Besonderheiten:**
- Typinformationen zur Laufzeit identisch mit JavaScript
- Type-Informationen gehen zur Laufzeit verloren (Type Erasure)
- `instanceof` für Laufzeit-Typprüfungen
- Compile-Time-Typen nicht zur Laufzeit verfügbar

**Weiterführende Links:**
- [TypeScript Handbook - Type Guards](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#typeof-type-guards)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
class Animal
end

class Dog < Animal
end

module IFlyable
end

dog_class = Dog

puts "Type Name: #{dog_class.name}"
puts "Base Class: #{dog_class.superclass.name}"
puts "Is Class: #{dog_class.is_a?(Class)}"
puts "Ancestors: #{dog_class.ancestors.map(&:name).join(', ')}"

# Included Modules
puts "Included Modules: #{dog_class.included_modules.map(&:name).join(', ')}"
```

**Besonderheiten:**
- Typinformationen über `class`, `superclass`, `ancestors`
- `ancestors` für vollständige Vererbungskette
- `included_modules` für eingebundene Module
- `is_a?`, `kind_of?` für Typprüfungen

**Weiterführende Links:**
- [Ruby Documentation - Class](https://ruby-doc.org/core-3.1.0/Class.html)

</TabItem>
<TabItem value="php" label="PHP">

```php
class Animal {}
class Dog extends Animal {}
interface IFlyable {}

$dogClass = new ReflectionClass('Dog');

echo "Type Name: " . $dogClass->getName() . "\n";
echo "Base Class: " . ($dogClass->getParentClass() ? $dogClass->getParentClass()->getName() : 'none') . "\n";
echo "Is Class: " . ($dogClass->isClass() ? 'true' : 'false') . "\n";
echo "Is Interface: " . ($dogClass->isInterface() ? 'true' : 'false') . "\n";

$interfaces = $dogClass->getInterfaceNames();
foreach ($interfaces as $interface) {
    echo "Implements: $interface\n";
}
```

**Besonderheiten:**
- Typinformationen über `ReflectionClass`
- Unterstützt Untersuchung von Vererbungshierarchien
- `getParentClass()` für Basisklasse
- `getInterfaceNames()` für implementierte Interfaces

**Weiterführende Links:**
- [PHP Documentation - ReflectionClass](https://www.php.net/manual/en/class.reflectionclass.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Typ-Prüfungen
?- atom(hello).           % true
?- number(42).            % true
?- integer(42).           % true
?- float(3.14).           % true
?- is_list([1, 2, 3]).    % true
?- compound(f(x, y)).     % true
?- var(X).                % true (X ist ungebunden)
?- nonvar(hello).         % true

% Term-Struktur untersuchen
?- functor(person(alice, 30), Name, Arity).
% Name = person, Arity = 2

?- person(alice, 30) =.. List.
% List = [person, alice, 30]

% Typ-Klassifizierung
type_of(X, variable)  :- var(X), !.
type_of(X, integer)   :- integer(X), !.
type_of(X, float)     :- float(X), !.
type_of(X, atom)      :- atom(X), !.
type_of(X, list)      :- is_list(X), !.
type_of(X, compound)  :- compound(X), !.

?- type_of(42, T).     % T = integer
?- type_of(hello, T).  % T = atom
```

**Besonderheiten:**
- Eingebaute Typ-Prüfungsprädikate: `atom/1`, `number/1`, `integer/1`, `float/1`, `compound/1`
- `var/1` und `nonvar/1` prüfen Bindungsstatus von Variablen
- `functor/3` und `=../2` für Term-Struktur-Analyse
- Keine Klassen oder Vererbung — Typsystem basiert auf Termen

**Weiterführende Links:**
- [SWI-Prolog Documentation - Type Checking](https://www.swi-prolog.org/pldoc/man?section=typetest)

</TabItem>
<TabItem value="go" label="Go">

```go
package main

import (
    "fmt"
    "reflect"
)

type Animal struct{}
type Dog struct {
    Animal
}

func main() {
    dog := Dog{}
    t := reflect.TypeOf(dog)
    
    fmt.Printf("Type Name: %s\n", t.Name())
    fmt.Printf("Kind: %s\n", t.Kind())
    fmt.Printf("Num Field: %d\n", t.NumField())
    
    // Basis-Typen
    for i := 0; i < t.NumField(); i++ {
        field := t.Field(i)
        fmt.Printf("Field: %s (Type: %s)\n", field.Name, field.Type.Name())
    }
}
```

**Besonderheiten:**
- Typinformationen über `reflect.Type`
- `Kind()` für grundlegende Typkategorie
- Unterstützt Untersuchung von Struct-Feldern
- Keine direkte Unterstützung für Interfaces zur Laufzeit

**Weiterführende Links:**
- [Go Documentation - reflect.Type](https://pkg.go.dev/reflect#Type)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
use std::any::{Any, TypeId};

trait Animal {}
struct Dog;

impl Animal for Dog {}

fn main() {
    let dog = Dog;
    
    // Typ-Informationen
    println!("Type Name: {}", std::any::type_name::<Dog>());
    println!("TypeId: {:?}", dog.type_id());
    
    // Typ-Vergleich
    let dog2 = Dog;
    println!("Same Type: {}", dog.type_id() == dog2.type_id());
}
```

**Besonderheiten:**
- Sehr eingeschränkte Typinformationen über `std::any::type_name` und `TypeId`
- `TypeId` für Typ-Vergleiche
- Keine direkte Unterstützung für Vererbungshierarchien
- Typinformationen gehen zur Laufzeit größtenteils verloren

**Weiterführende Links:**
- [Rust Documentation - std::any::type_name](https://doc.rust-lang.org/std/any/fn.type_name.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
import Foundation

class Animal {}
class Dog: Animal {}

let dog = Dog()

// Typ-Informationen
print("Type Name: \(type(of: dog))")
print("Type Name String: \(String(describing: type(of: dog)))")
print("Is Type of Dog: \(dog is Dog)")
print("Is Type of Animal: \(dog is Animal)")

// Metadaten
let mirror = Mirror(reflecting: dog)
print("Subject Type: \(mirror.subjectType)")
```

**Besonderheiten:**
- Typinformationen über `type(of:)`, `is`
- `Mirror` für erweiterte Metadaten
- Unterstützt Typprüfungen zur Laufzeit
- Weniger detaillierte Informationen als in anderen Sprachen

**Weiterführende Links:**
- [Swift Documentation - type(of:)](https://developer.apple.com/documentation/swift/type(of:))

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
open class Animal
class Dog : Animal()
interface IFlyable

fun main() {
    val dog = Dog()
    val kClass = dog::class
    
    println("Type Name: ${kClass.simpleName}")
    println("Qualified Name: ${kClass.qualifiedName}")
    println("Is Data Class: ${kClass.isData}")
    println("Is Sealed: ${kClass.isSealed}")
    
    // Basisklassen
    val superclass = kClass.superclasses
    superclass.forEach { println("Superclass: ${it.simpleName}") }
    
    // Interfaces
    val interfaces = kClass.supertypes.filter { it.classifier is kotlin.reflect.KClass<*> && (it.classifier as kotlin.reflect.KClass<*>).isInterface }
    interfaces.forEach { println("Interface: ${it}") }
}
```

**Besonderheiten:**
- Typinformationen über `KClass`
- Unterstützt Untersuchung von Vererbungshierarchien
- `isData`, `isSealed`, `isAbstract` für spezielle Typmerkmale
- `supertypes` für Basisklassen und Interfaces

**Weiterführende Links:**
- [Kotlin Documentation - KClass](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.reflect/-k-class/)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
import scala.reflect.runtime.universe._

class Animal
class Dog extends Animal
trait IFlyable

object Main extends App {
  val dog = new Dog
  
  // Typ-Informationen
  val tpe = typeOf[Dog]
  println(s"Type Name: ${tpe.typeSymbol.name}")
  println(s"Full Name: ${tpe.typeSymbol.fullName}")
  
  // Basisklassen
  val baseClasses = tpe.baseClasses
  baseClasses.foreach { base =>
    println(s"Base: ${base.name}")
  }
  
  // Type Tags
  println(s"Is Class: ${tpe.typeSymbol.isClass}")
  println(s"Is Trait: ${tpe.typeSymbol.isTrait}")
}
```

**Besonderheiten:**
- Typinformationen über `TypeTag`, `typeOf`
- Unterstützt Untersuchung von Vererbungshierarchien
- `baseClasses` für Basisklassen und Traits
- `typeSymbol` für Symbol-Informationen

**Weiterführende Links:**
- [Scala Documentation - TypeTags](https://docs.scala-lang.org/overviews/reflection/typetags-manifests.html)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
class Animal {}
class Dog extends Animal {}
interface IFlyable {}

def dog = new Dog()

println "Type Name: ${dog.class.name}"
println "Simple Name: ${dog.class.simpleName}"
println "Superclass: ${dog.class.superclass.name}"
println "Is Interface: ${dog.class.isInterface()}"

// Interfaces
def interfaces = dog.class.interfaces
interfaces.each { println "Interface: ${it.name}" }
```

**Besonderheiten:**
- Typinformationen über `.class`
- Unterstützt Untersuchung von Vererbungshierarchien
- `superclass` für Basisklasse
- `interfaces` für implementierte Interfaces

**Weiterführende Links:**
- [Groovy Documentation - Reflection](https://groovy-lang.org/metaprogramming.html#_reflection)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
(defrecord Animal [])
(defrecord Dog [name])

(def dog (->Dog "Rex"))

;; Typ-Informationen
(println "Type:" (type dog))
(println "Class:" (class dog))

;; Felder
(println "Fields:" (keys dog))
```

**Besonderheiten:**
- Typinformationen über `type`, `class`
- Unterstützt Untersuchung von Records
- Weniger strukturierte Typinformationen als in OOP-Sprachen
- Funktionen sind First-Class-Objekte

**Weiterführende Links:**
- [Clojure Documentation - Reflection](https://clojure.org/reference/reflection)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
(defclass animal () ())
(defclass dog (animal) ())

(let ((dog-instance (make-instance 'dog)))
  ;; Typ-Informationen
  (format t "Type: ~a~%" (class-name (class-of dog-instance)))
  (format t "Superclasses: ~a~%" (mapcar #'class-name 
                                          (class-direct-superclasses (class-of dog-instance)))))
```

**Besonderheiten:**
- Typinformationen über `class-of`, `class-name`
- Unterstützt Untersuchung von Vererbungshierarchien
- `class-direct-superclasses` für Basisklassen
- CLOS bietet umfassende Metadaten

**Weiterführende Links:**
- [Common Lisp HyperSpec - Classes](http://www.lispworks.com/documentation/HyperSpec/Body/t_class.htm)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
package Animal;
sub new { bless {}, shift; }

package Dog;
our @ISA = qw(Animal);
sub new { bless {}, shift; }

my $dog = Dog->new();

# Typ-Informationen
print "Type: " . ref($dog) . "\n";
print "ISA: @Dog::ISA\n";
print "Is Animal: " . ($dog->isa('Animal') ? 'yes' : 'no') . "\n";
```

**Besonderheiten:**
- Typinformationen über `ref()`, `isa()`
- `@ISA` für Vererbungshierarchie
- Unterstützt dynamische Typprüfungen
- Weniger strukturierte Typinformationen

**Weiterführende Links:**
- [Perl Documentation - ref](https://perldoc.perl.org/functions/ref)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
abstract type Animal end
struct Dog <: Animal
    name::String
end

dog = Dog("Rex")

# Typ-Informationen
println("Type: $(typeof(dog))")
println("Supertype: $(supertype(Dog))")
println("Subtypes: $(subtypes(Animal))")
println("Is Subtype: $(Dog <: Animal)")
```

**Besonderheiten:**
- Typinformationen über `typeof()`, `supertype()`, `subtypes()`
- `<:` für Subtyp-Prüfungen
- Unterstützt Untersuchung von Typ-Hierarchien
- Sehr mächtige Typinformationen

**Weiterführende Links:**
- [Julia Documentation - Types](https://docs.julialang.org/en/v1/manual/types/)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
class Animal {}
class Dog extends Animal {}

void main() {
  var dog = Dog();
  
  // Typ-Informationen
  print("Type: ${dog.runtimeType}");
  print("Is Type of Dog: ${dog is Dog}");
  print("Is Type of Animal: ${dog is Animal}");
}
```

**Besonderheiten:**
- Typinformationen über `runtimeType`, `is`
- Unterstützt Typprüfungen zur Laufzeit
- `dart:mirrors` für erweiterte Reflection (deprecated)
- Weniger detaillierte Informationen

**Weiterführende Links:**
- [Dart Documentation - Runtime Types](https://dart.dev/guides/language/type-system)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
Animal = {}
Dog = {}
setmetatable(Dog, {__index = Animal})

function Dog:new()
    local obj = {}
    setmetatable(obj, Dog)
    return obj
end

local dog = Dog:new()

-- Typ-Informationen
print("Type: " .. tostring(getmetatable(dog)))
```

**Besonderheiten:**
- Sehr eingeschränkte Typinformationen
- Typinformationen über Metatabellen
- `type()` für grundlegende Typkategorien
- Weniger strukturierte Typinformationen

**Weiterführende Links:**
- [Lua Documentation - Metatables](https://www.lua.org/manual/5.4/manual.html#2.4)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
#import <Foundation/Foundation.h>
#import <objc/runtime.h>

@interface Animal : NSObject
@end

@implementation Animal
@end

@interface Dog : Animal
@end

@implementation Dog
@end

int main(int argc, const char * argv[]) {
    @autoreleasepool {
        Dog *dog = [[Dog alloc] init];
        Class cls = [dog class];
        
        NSLog(@"Type Name: %s", class_getName(cls));
        NSLog(@"Superclass: %s", class_getName(class_getSuperclass(cls)));
        NSLog(@"Is Meta Class: %s", class_isMetaClass(cls) ? "yes" : "no");
    }
    return 0;
}
```

**Besonderheiten:**
- Typinformationen über Objective-C Runtime API
- `class_getName()`, `class_getSuperclass()` für Klasseninformationen
- Unterstützt Untersuchung von Vererbungshierarchien
- `class_isMetaClass()` für Metaklassen

**Weiterführende Links:**
- [Apple Documentation - Objective-C Runtime](https://developer.apple.com/documentation/objectivec/objective-c_runtime)

</TabItem>
<TabItem value="d" label="D">

```d
import std.stdio;

class Animal {}
class Dog : Animal {}

void main() {
    auto dog = new Dog();
    
    writeln("Type: ", dog.classinfo.name);
    writeln("Base: ", dog.classinfo.base.name);
    writeln("Is Class: ", dog.classinfo.flags & 1);
}
```

**Besonderheiten:**
- Typinformationen über `classinfo`
- Unterstützt Untersuchung von Vererbungshierarchien
- `__traits` für Compile-Time-Reflection
- Weniger detaillierte Runtime-Informationen

**Weiterführende Links:**
- [D Language Documentation - ClassInfo](https://dlang.org/spec/abi.html#class_info)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
class Animal
end

class Dog < Animal
end

dog = Dog.new

# Typ-Informationen
puts "Type: #{dog.class.name}"
puts "Is Type of Dog: #{dog.is_a?(Dog)}"
puts "Is Type of Animal: #{dog.is_a?(Animal)}"
```

**Besonderheiten:**
- Typinformationen über `.class.name`, `is_a?`
- Unterstützt Typprüfungen zur Laufzeit
- Weniger detaillierte Informationen
- Typinformationen hauptsächlich zur Compile-Zeit verfügbar

**Weiterführende Links:**
- [Crystal Documentation - Types](https://crystal-lang.org/reference/1.9/syntax_and_semantics/types_and_methods.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
type
  Animal = ref object of RootObj
  Dog = ref object of Animal

var dog: Animal = Dog()

# Type Information
echo typeof(dog)        # Animal (statischer Typ)
echo dog of Dog         # true (Runtime-Check)
echo dog of Animal      # true
echo dog[] is Dog       # true (mit Dereferenzierung)
```

**Besonderheiten:**
- `typeof()` gibt den statischen Typ zurück (Compile-time)
- `of` für Runtime-Typprüfungen bei `ref`-Hierarchien
- `is` für Compile-time Typvergleiche
- Weniger detaillierte Typinformationen als in dynamischen Sprachen

**Weiterführende Links:**
- [Nim Documentation - Type Relations](https://nim-lang.org/docs/manual.html#type-relations)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
class animal = object end
class dog = object inherit animal end

let dog = new dog

(* Typ-Informationen *)
let () = Printf.printf "Type: %s\n" (Obj.obj (Obj.repr dog) |> string_of_int)
```

**Besonderheiten:**
- Sehr eingeschränkte Typinformationen
- Typinformationen gehen zur Laufzeit größtenteils verloren
- Pattern Matching für strukturierte Datenzugriffe
- Weniger strukturierte Typinformationen

**Weiterführende Links:**
- [OCaml Documentation](https://ocaml.org/api/Obj.html)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
{-# LANGUAGE DeriveDataTypeable #-}
import Data.Data
import Data.Typeable

data Animal = Animal deriving (Data, Typeable)
data Dog = Dog deriving (Data, Typeable)

main :: IO ()
main = do
    let dog = Dog
    putStrLn $ "Type: " ++ show (typeOf dog)
    putStrLn $ "Type Rep: " ++ show (toConstr dog)
```

**Besonderheiten:**
- Typinformationen über `Data.Typeable`
- `typeOf` für Typinformationen
- Sehr eingeschränkte Runtime-Informationen
- Typinformationen hauptsächlich zur Compile-Zeit verfügbar

**Weiterführende Links:**
- [Haskell Documentation - Data.Typeable](https://hackage.haskell.org/package/base/docs/Data-Typeable.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
open System

type Animal() = class end
type Dog() = inherit Animal()

let dog = Dog()

// Typ-Informationen
let t = typeof<Dog>
printfn "Type Name: %s" t.Name
printfn "Base Type: %s" (match t.BaseType with null -> "none" | bt -> bt.Name)
printfn "Is Class: %b" t.IsClass
```

**Besonderheiten:**
- Typinformationen über .NET `System.Type` (identisch mit C#)
- Unterstützt Untersuchung von Vererbungshierarchien
- `typeof<'T>` für Typinformationen
- `IsClass`, `IsInterface` für Typkategorien

**Weiterführende Links:**
- [F# Documentation - Types](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/type-definitions)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
Imports System

Public Class Animal
End Class

Public Class Dog
    Inherits Animal
End Class

Module Main
    Sub Main()
        Dim dog As New Dog()
        Dim t As Type = GetType(Dog)
        
        Console.WriteLine($"Type Name: {t.Name}")
        Console.WriteLine($"Base Type: {If(t.BaseType IsNot Nothing, t.BaseType.Name, "none")}")
        Console.WriteLine($"Is Class: {t.IsClass}")
    End Sub
End Module
```

**Besonderheiten:**
- Typinformationen über .NET `System.Type` (identisch mit C#)
- Unterstützt Untersuchung von Vererbungshierarchien
- `GetType()` für Typinformationen
- `IsClass`, `IsInterface` für Typkategorien

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Types](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/data-types/)

</TabItem>
<TabItem value="erlang" label="Erlang">
```erlang
-module(type_info).
-export([get_info/1]).

get_info(Value) ->
    io:format("Is Integer: ~p~n", [is_integer(Value)]),
    io:format("Is List: ~p~n", [is_list(Value)]),
    io:format("Is Tuple: ~p~n", [is_tuple(Value)]),
    io:format("Is Atom: ~p~n", [is_atom(Value)]).
```

**Besonderheiten:**
- Kein allgemeiner `typeof`-Operator vorhanden
- Typ-Prüfung nur über Guard-Funktionen: `is_integer/1`, `is_float/1`, `is_atom/1`, `is_list/1`, `is_tuple/1`, `is_map/1`, etc.
- Typinformationen gehen zur Laufzeit größtenteils verloren

**Weiterführende Links:**
- [Erlang Documentation - Type Tests](https://www.erlang.org/doc/reference_manual/expressions.html#type-tests)
</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
defmodule TypeInfo do
  def get_info(value) when is_map(value) and is_map_key(value, :__struct__) do
    IO.puts("Struct Type: #{inspect(value.__struct__)}")
    IO.puts("Fields: #{inspect(Map.keys(value) -- [:__struct__])}")
  end

  def get_info(value) do
    IO.puts("Is Integer: #{is_integer(value)}")
    IO.puts("Is Float: #{is_float(value)}")
    IO.puts("Is Binary: #{is_binary(value)}")
    IO.puts("Is Map: #{is_map(value)}")
    IO.puts("Is List: #{is_list(value)}")
  end
end
```

**Besonderheiten:**
- Eingeschränkte Typinformationen zur Laufzeit
- `__struct__` nur für Structs verfügbar
- Guard-Funktionen (`is_integer/1`, `is_map/1`, etc.) für Typprüfung
- Pattern Matching für strukturierte Datenzugriffe

**Weiterführende Links:**
- [Elixir Documentation - Basic Types](https://elixir-lang.org/getting-started/basic-types.html)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
classdef Animal
end

classdef Dog < Animal
end

dog = Dog();

% Typ-Informationen
fprintf('Type: %s\n', class(dog));
fprintf('Superclass: %s\n', class(superclasses(dog)));
fprintf('Is Type of Dog: %d\n', isa(dog, 'Dog'));
fprintf('Is Type of Animal: %d\n', isa(dog, 'Animal'));
```

**Besonderheiten:**
- Typinformationen über `class()`, `isa()`, `superclasses()`
- Unterstützt Typprüfungen zur Laufzeit
- `meta.class` für erweiterte Metadaten
- Unterstützt Untersuchung von Vererbungshierarchien

**Weiterführende Links:**
- [MATLAB Documentation - Classes](https://www.mathworks.com/help/matlab/matlab_oop/classes-in-matlab.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Benötigt: :- import_module type_desc, construct.

:- type animal
    --->    cat
    ;       dog(name :: string).

main(!IO) :-
    X = dog("Rex"),

    % Typ-Deskriptor ermitteln
    TypeDesc = type_of(X),
    io.format("Type Name: %s\n", [s(type_name(TypeDesc))], !IO),

    % Typ-Konstruktor und -Argumente
    type_ctor_and_args(TypeDesc, TypeCtor, _TypeArgs),
    io.format("Type Ctor: %s\n", [s(type_ctor_name(TypeCtor))], !IO),
    io.format("Module: %s\n", [s(type_ctor_module_name(TypeCtor))], !IO),
    io.format("Arity: %d\n", [i(type_ctor_arity(TypeCtor))], !IO),

    % Anzahl Funktoren des Typs
    ( if num_functors(TypeDesc) = NumFunctors then
        io.format("Functors: %d\n", [i(NumFunctors)], !IO)
        % Ausgabe: Functors: 2 (cat und dog)
    else
        true
    ),

    % Funktor-Details abfragen
    ( if get_functor(TypeDesc, 0, Name0, Arity0, _) then
        io.format("Functor 0: %s/%d\n", [s(Name0), i(Arity0)], !IO)
    else
        true
    ),
    ( if get_functor(TypeDesc, 1, Name1, Arity1, _) then
        io.format("Functor 1: %s/%d\n", [s(Name1), i(Arity1)], !IO)
    else
        true
    ).
```

**Besonderheiten:**
- Typ-Informationen über `type_desc` und `construct` Module
- `type_of/1` liefert den Typ-Deskriptor eines beliebigen Wertes
- `type_ctor_and_args/3` zerlegt einen Typ in Konstruktor und Argumente
- `num_functors/1` und `get_functor/5` zur Enumeration der Typ-Funktoren
- Keine Klassen/Vererbung — Typsystem basiert auf algebraischen Datentypen

**Weiterführende Links:**
- [Mercury Library Reference - type_desc](https://www.mercurylang.org/information/doc-release/mercury_library/type_desc.html)

</TabItem>
<TabItem value="r" label="R">

```r
Animal <- setRefClass("Animal")
Dog <- setRefClass("Dog", contains = "Animal")

dog <- Dog$new()

# Typ-Informationen
cat("Type:", class(dog), "\n")
cat("Superclass:", dog$getRefClass()$superClasses(), "\n")
cat("Is Type of Dog:", is(dog, "Dog"), "\n")
```

**Besonderheiten:**
- Typinformationen über `class()`, `is()`
- Unterstützt Typprüfungen zur Laufzeit
- `getRefClass()` für Klasseninformationen
- Weniger detaillierte Informationen

**Weiterführende Links:**
- [R Documentation - Classes](https://stat.ethz.ch/R-manual/R-devel/library/methods/html/Classes.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
(define (get-type-info value)
  (display "Type: ")
  (display (cond
             ((vector? value) "vector")
             ((list? value) "list")
             ((pair? value) "pair")
             ((number? value) "number")
             ((string? value) "string")
             (else "other")))
  (newline))
```

**Besonderheiten:**
- Typinformationen über Prädikate (`pair?`, `list?`, `vector?`, etc.)
- Reihenfolge wichtig: `list?` vor `pair?` prüfen (Listen sind auch Paare)
- Viele spezifische Prädikate verfügbar

**Weiterführende Links:**
- [Scheme Documentation](https://www.scheme.com/tspl4/)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```wolfram
(* Typ-Informationen *)
dog = <|"type" -> "Dog", "name" -> "Rex"|>;

Print["Type: ", Head[dog]];
Print["Is Association: ", AssociationQ[dog]];
Print["Keys: ", Keys[dog]];

(* Typ-Prüfungen *)
Print["Is String: ", StringQ["test"]];
Print["Is Number: ", NumberQ[42]];
```

**Besonderheiten:**
- Typinformationen über `Head[]`, Typ-Prädikate
- Unterstützt viele Typ-Prädikate (`StringQ`, `NumberQ`, etc.)
- Sehr mächtige Metaprogrammierung
- Unterstützt Untersuchung von Symbolen und Ausdrücken

**Weiterführende Links:**
- [Wolfram Language Documentation - Type Checking](https://reference.wolfram.com/language/guide/TypeChecking.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Benötigt: uses TypInfo;
var
  obj: TObject;
begin
  obj := TStringList.Create;

  // Klassenname abfragen
  WriteLn(obj.ClassName);         // 'TStringList'
  WriteLn(obj.ClassType.ClassName); // 'TStringList'

  // Typ-Hierarchie
  WriteLn(obj is TStrings);       // True
  WriteLn(obj.InheritsFrom(TStrings)); // True

  obj.Free;
end;
```

**Besonderheiten:**
- `ClassName` für den Klassennamen zur Laufzeit
- `ClassType` für den Typ zur Laufzeit
- `InheritsFrom` für Vererbungsprüfung
- `is` und `as` für Type Checking und Casting

**Weiterführende Links:**
- [Delphi Documentation - TObject](https://docwiki.embarcadero.com/Libraries/en/System.TObject)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
const std = @import("std");

const Point = struct {
    x: f64,
    y: f64,
};

// Compile-Time-Typinformation
fn printFields(comptime T: type) void {
    const info = @typeInfo(T);
    switch (info) {
        .@"struct" => |s| {
            inline for (s.fields) |field| {
                std.debug.print("Feld: {s}, Typ: {s}\n", .{ field.name, @typeName(field.type) });
            }
        },
        else => {},
    }
}

// Verwendung
comptime {
    printFields(Point);
    // Ausgabe: Feld: x, Typ: f64
    //          Feld: y, Typ: f64
}
```

**Besonderheiten:**
- `@typeInfo(T)` gibt detaillierte Typinformationen zur Compile-Zeit
- `@typeName(T)` gibt den Typnamen als String
- `@TypeOf(expr)` gibt den Typ eines Ausdrucks
- Unterstützt Struct-Fields, Enum-Fields, Union-Fields, etc.
- Nur zur Compile-Zeit verfügbar (kein Runtime-Reflection)

**Weiterführende Links:**
- [Zig Documentation - @typeInfo](https://ziglang.org/documentation/master/#@typeInfo)

</TabItem>
</Tabs>


## 16.1.3. Dynamic Method Invocation

Ermöglicht es, Methoden zur Laufzeit dynamisch aufzurufen, ohne dass der Methodenname zur Compile-Zeit bekannt sein muss.

### Sprachen {#sprachen}

<Tabs availableTabs={['clojure', 'common-lisp', 'csharp', 'd', 'fsharp', 'go', 'groovy', 'java', 'javascript', 'julia', 'kotlin', 'lua', 'objective-c', 'perl', 'php', 'prolog', 'python', 'ruby', 'scala', 'swift', 'typescript', 'vbnet', 'wolfram-language']}>
<TabItem value="csharp" label="C#">

```csharp
// Benötigt: using System.Reflection;

class Calculator {
    public int Add(int a, int b) => a + b;
    public int Multiply(int a, int b) => a * b;
}

Calculator calc = new Calculator();
Type type = typeof(Calculator);

// Methode dynamisch aufrufen
MethodInfo method = type.GetMethod("Add");
int result = (int)method.Invoke(calc, new object[] { 5, 3 });
Console.WriteLine($"Result: {result}");

// Mit Methodenname als String
string methodName = "Multiply";
MethodInfo method2 = type.GetMethod(methodName);
int result2 = (int)method2.Invoke(calc, new object[] { 4, 7 });
Console.WriteLine($"Result: {result2}");
```

**Besonderheiten:**
- Dynamische Methodenaufrufe über `MethodInfo.Invoke()`
- Unterstützt Methodenaufrufe mit Parametern
- `GetMethod()` für Methodensuche
- Typsicherheit zur Laufzeit nicht garantiert

**Weiterführende Links:**
- [Microsoft C# Documentation - MethodInfo.Invoke](https://learn.microsoft.com/en-us/dotnet/api/system.reflection.methodinfo.invoke)

</TabItem>
<TabItem value="java" label="Java">

```java
// Benötigt: import java.lang.reflect.Method;

class Calculator {
    public int add(int a, int b) { return a + b; }
    public int multiply(int a, int b) { return a * b; }
}

Calculator calc = new Calculator();
Class<?> clazz = Calculator.class;

// Methode dynamisch aufrufen
Method method = clazz.getMethod("add", int.class, int.class);
int result = (int) method.invoke(calc, 5, 3);
System.out.println("Result: " + result);

// Mit Methodenname als String
String methodName = "multiply";
Method method2 = clazz.getMethod(methodName, int.class, int.class);
int result2 = (int) method2.invoke(calc, 4, 7);
System.out.println("Result: " + result2);
```

**Besonderheiten:**
- Dynamische Methodenaufrufe über `Method.invoke()`
- Unterstützt Methodenaufrufe mit Parametern
- `getMethod()` für Methodensuche mit Parametertypen
- Typsicherheit zur Laufzeit nicht garantiert

**Weiterführende Links:**
- [Oracle Java Documentation - Method.invoke](https://docs.oracle.com/javase/8/docs/api/java/lang/reflect/Method.html#invoke-java.lang.Object-java.lang.Object...-)

</TabItem>
<TabItem value="python" label="Python">

```python
class Calculator:
    def add(self, a, b):
        return a + b
    
    def multiply(self, a, b):
        return a * b

calc = Calculator()

# Methode dynamisch aufrufen
method = getattr(calc, 'add')
result = method(5, 3)
print(f"Result: {result}")

# Mit Methodenname als String
method_name = 'multiply'
method2 = getattr(calc, method_name)
result2 = method2(4, 7)
print(f"Result: {result2}")

# Direkt über String
result3 = getattr(calc, 'add')(5, 3)
```

**Besonderheiten:**
- Dynamische Methodenaufrufe über `getattr()`
- Unterstützt direkte Aufrufe über String-Namen
- `hasattr()` für Existenzprüfung
- Sehr flexibel und dynamisch

**Weiterführende Links:**
- [Python Documentation - getattr](https://docs.python.org/3/library/functions.html#getattr)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
class Calculator {
    add(a, b) {
        return a + b;
    }
    
    multiply(a, b) {
        return a * b;
    }
}

const calc = new Calculator();

// Methode dynamisch aufrufen
const method = calc['add'];
const result = method.call(calc, 5, 3);
console.log(`Result: ${result}`);

// Mit Methodenname als String
const methodName = 'multiply';
const method2 = calc[methodName];
const result2 = method2.call(calc, 4, 7);
console.log(`Result: ${result2}`);

// Direkt über String
const result3 = calc['add'](5, 3);
```

**Besonderheiten:**
- Dynamische Methodenaufrufe über Bracket-Notation
- Unterstützt `call()`, `apply()` für explizite Kontextbindung
- Direkte Aufrufe über String-Namen möglich
- Sehr flexibel und dynamisch

**Weiterführende Links:**
- [MDN Web Docs - Function.prototype.call](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
class Calculator {
    add(a: number, b: number): number {
        return a + b;
    }
    
    multiply(a: number, b: number): number {
        return a * b;
    }
}

const calc = new Calculator();

// Methode dynamisch aufrufen
const method = (calc as any)['add'];
const result = method.call(calc, 5, 3);
console.log(`Result: ${result}`);

// Mit Methodenname als String
const methodName = 'multiply';
const method2 = (calc as any)[methodName];
const result2 = method2.call(calc, 4, 7);
console.log(`Result: ${result2}`);

// Direkt über String
const result3 = (calc as any)['add'](5, 3);
```

**Besonderheiten:**
- Dynamische Methodenaufrufe identisch mit JavaScript
- `as any` notwendig für dynamische Zugriffe
- Type-Informationen gehen zur Laufzeit verloren
- Typsicherheit zur Compile-Zeit nicht garantiert

**Weiterführende Links:**
- [TypeScript Handbook - Type Assertions](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
class Calculator
  def add(a, b)
    a + b
  end
  
  def multiply(a, b)
    a * b
  end
end

calc = Calculator.new

# Methode dynamisch aufrufen
method = calc.method(:add)
result = method.call(5, 3)
puts "Result: #{result}"

# Mit Methodenname als String
method_name = 'multiply'
method2 = calc.method(method_name.to_sym)
result2 = method2.call(4, 7)
puts "Result: #{result2}"

# Direkt über send
result3 = calc.send(:add, 5, 3)
```

**Besonderheiten:**
- Dynamische Methodenaufrufe über `send()`, `method()`, `public_send()`
- Unterstützt direkte Aufrufe über Symbol-Namen
- `respond_to?()` für Existenzprüfung
- Sehr flexibel und dynamisch

**Weiterführende Links:**
- [Ruby Documentation - Object#send](https://ruby-doc.org/core-3.1.0/Object.html#method-i-send)

</TabItem>
<TabItem value="php" label="PHP">

```php
class Calculator {
    public function add($a, $b) {
        return $a + $b;
    }
    
    public function multiply($a, $b) {
        return $a * $b;
    }
}

$calc = new Calculator();
$reflection = new ReflectionClass($calc);

// Methode dynamisch aufrufen
$method = $reflection->getMethod('add');
$result = $method->invoke($calc, 5, 3);
echo "Result: $result\n";

// Mit Methodenname als String
$methodName = 'multiply';
$method2 = $reflection->getMethod($methodName);
$result2 = $method2->invoke($calc, 4, 7);
echo "Result: $result2\n";

// Direkt über call_user_func
$result3 = call_user_func([$calc, 'add'], 5, 3);
```

**Besonderheiten:**
- Dynamische Methodenaufrufe über `ReflectionMethod.invoke()`
- Unterstützt `call_user_func()`, `call_user_func_array()`
- `getMethod()` für Methodensuche
- Typsicherheit zur Laufzeit nicht garantiert

**Weiterführende Links:**
- [PHP Documentation - ReflectionMethod.invoke](https://www.php.net/manual/en/reflectionmethod.invoke.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Dynamischer Prädikat-Aufruf
add(A, B, Result) :- Result is A + B.
multiply(A, B, Result) :- Result is A * B.

% Dynamischer Aufruf über call/N
?- call(add, 5, 3, Result).
% Result = 8

% Dynamischer Aufruf mit Atom als Prädikatname
invoke(MethodName, A, B, Result) :-
    Goal =.. [MethodName, A, B, Result],
    call(Goal).

?- invoke(multiply, 4, 7, Result).
% Result = 28

% Dynamischer Aufruf über =.. (univ)
?- Goal =.. [add, 5, 3, R], call(Goal).
% R = 8
```

**Besonderheiten:**
- `call/N` für dynamischen Prädikat-Aufruf mit beliebig vielen Argumenten
- `=..` (univ) für dynamische Goal-Konstruktion aus Atom und Argumentliste
- Kein Unterschied zwischen statischem und dynamischem Aufruf
- Sehr natürlich in Prolog — Higher-Order-Aufrufe sind Kernfeature

**Weiterführende Links:**
- [SWI-Prolog Documentation - call](https://www.swi-prolog.org/pldoc/man?predicate=call/1)

</TabItem>
<TabItem value="go" label="Go">

```go
// Benötigt: import "reflect"

type Calculator struct{}

func (c Calculator) Add(a, b int) int {
    return a + b
}

func (c Calculator) Multiply(a, b int) int {
    return a * b
}

calc := Calculator{}
v := reflect.ValueOf(calc)

// Methode dynamisch aufrufen
method := v.MethodByName("Add")
result := method.Call([]reflect.Value{reflect.ValueOf(5), reflect.ValueOf(3)})
// result[0].Int() enthält das Ergebnis

// Mit Methodenname als String
methodName := "Multiply"
method2 := v.MethodByName(methodName)
result2 := method2.Call([]reflect.Value{reflect.ValueOf(4), reflect.ValueOf(7)})
// result2[0].Int() enthält das Ergebnis
```

**Besonderheiten:**
- Dynamische Methodenaufrufe über `reflect.Value.MethodByName().Call()`
- Unterstützt Methodenaufrufe mit Parametern über `reflect.Value`
- Typsicherheit zur Laufzeit nicht garantiert
- Weniger flexibel als in dynamischen Sprachen

**Weiterführende Links:**
- [Go Documentation - reflect.Value.Call](https://pkg.go.dev/reflect#Value.Call)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Benötigt: import Foundation

class Calculator {
    func add(_ a: Int, _ b: Int) -> Int {
        return a + b
    }
    
    func multiply(_ a: Int, _ b: Int) -> Int {
        return a * b
    }
}

let calc = Calculator()

// Methode dynamisch aufrufen über Selector
let selector = Selector("add::")
if calc.responds(to: selector) {
    let result = calc.perform(selector, with: 5, with: 3)
    if let resultValue = result?.takeUnretainedValue() as? Int {
        // resultValue enthält das Ergebnis
    }
}

// Mit Methodenname als String (Objective-C Runtime)
let methodName = "multiply::"
let selector2 = Selector(methodName)
if calc.responds(to: selector2) {
    let result2 = calc.perform(selector2, with: 4, with: 7)
    if let resultValue2 = result2?.takeUnretainedValue() as? Int {
        // resultValue2 enthält das Ergebnis
    }
}
```

**Besonderheiten:**
- Dynamische Methodenaufrufe über Objective-C Runtime (`Selector`, `perform`)
- Unterstützt Methodenaufrufe mit Parametern
- `responds(to:)` für Existenzprüfung
- Weniger flexibel als in rein dynamischen Sprachen

**Weiterführende Links:**
- [Apple Documentation - NSObject.perform](https://developer.apple.com/documentation/objectivec/nsobject/1418797-perform)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Benötigt: import kotlin.reflect.full.*

class Calculator {
    fun add(a: Int, b: Int): Int = a + b
    fun multiply(a: Int, b: Int): Int = a * b
}

val calc = Calculator()
val kClass = calc::class

// Methode dynamisch aufrufen
val method = kClass.functions.find { it.name == "add" }
val result = method?.call(calc, 5, 3) as? Int

// Mit Methodenname als String
val methodName = "multiply"
val method2 = kClass.functions.find { it.name == methodName }
val result2 = method2?.call(calc, 4, 7) as? Int
```

**Besonderheiten:**
- Dynamische Methodenaufrufe über `KFunction.call()`
- Unterstützt Methodenaufrufe mit Parametern
- `functions` für Methodensuche
- Typsicherheit zur Laufzeit nicht garantiert

**Weiterführende Links:**
- [Kotlin Documentation - KFunction](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.reflect/-k-function/)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Benötigt: import scala.reflect.runtime.universe._, import scala.reflect.runtime

class Calculator {
  def add(a: Int, b: Int): Int = a + b
  def multiply(a: Int, b: Int): Int = a * b
}

val calc = new Calculator
val mirror = runtimeMirror(getClass.getClassLoader)
val instanceMirror = mirror.reflect(calc)

// Methode dynamisch aufrufen
val addMethod = typeOf[Calculator].member(TermName("add")).asMethod
val result = instanceMirror.reflectMethod(addMethod)(5, 3)

// Mit Methodenname als String
val methodName = "multiply"
val multiplyMethod = typeOf[Calculator].member(TermName(methodName)).asMethod
val result2 = instanceMirror.reflectMethod(multiplyMethod)(4, 7)
```

**Besonderheiten:**
- Dynamische Methodenaufrufe über `InstanceMirror.reflectMethod()`
- Unterstützt Methodenaufrufe mit Parametern
- `member()` für Methodensuche
- Typsicherheit zur Laufzeit nicht garantiert

**Weiterführende Links:**
- [Scala Documentation - InstanceMirror](https://docs.scala-lang.org/overviews/reflection/overview.html)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
class Calculator {
    def add(a, b) {
        a + b
    }
    
    def multiply(a, b) {
        a * b
    }
}

def calc = new Calculator()

// Methode dynamisch aufrufen
def method = calc.&add
def result = method(5, 3)
println "Result: $result"

// Mit Methodenname als String
def methodName = 'multiply'
def method2 = calc."$methodName"
def result2 = method2(4, 7)
println "Result: $result2"

// Direkt über String
def result3 = calc."add"(5, 3)
```

**Besonderheiten:**
- Dynamische Methodenaufrufe über Method Reference (`&`), String-Interpolation
- Unterstützt direkte Aufrufe über String-Namen
- Sehr flexibel und dynamisch
- `hasProperty()` für Existenzprüfung

**Weiterführende Links:**
- [Groovy Documentation - Method Pointers](https://groovy-lang.org/operators.html#_method_pointer_operator)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
(defn add [a b]
  (+ a b))

(defn multiply [a b]
  (* a b))

;; Funktion dynamisch aufrufen
(def method (resolve 'add))
(def result (method 5 3))
(println "Result:" result)

;; Mit Funktionsname als String
(def method-name "multiply")
(def method2 (resolve (symbol method-name)))
(def result2 (method2 4 7))
(println "Result:" result2)

;; Direkt über resolve
(def result3 ((resolve 'add) 5 3))
```

**Besonderheiten:**
- Dynamische Funktionsaufrufe über `resolve`
- Funktionen sind First-Class-Objekte
- Unterstützt direkte Aufrufe über Symbol-Namen
- Sehr flexibel und dynamisch

**Weiterführende Links:**
- [Clojure Documentation - resolve](https://clojure.org/reference/special_forms#resolve)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
(defun add (a b)
  (+ a b))

(defun multiply (a b)
  (* a b))

;; Funktion dynamisch aufrufen
(let ((method (symbol-function 'add)))
  (let ((result (funcall method 5 3)))
    (format t "Result: ~a~%" result)))

;; Mit Funktionsname als String
(let ((method-name "multiply"))
  (let ((method (symbol-function (intern method-name))))
    (let ((result (funcall method 4 7)))
      (format t "Result: ~a~%" result))))

;; Direkt über funcall
(funcall #'add 5 3)
```

**Besonderheiten:**
- Dynamische Funktionsaufrufe über `funcall`, `symbol-function`
- Unterstützt direkte Aufrufe über Symbol-Namen
- `intern` für String-zu-Symbol-Konvertierung
- Sehr flexibel und dynamisch

**Weiterführende Links:**
- [Common Lisp HyperSpec - funcall](http://www.lispworks.com/documentation/HyperSpec/Body/f_funcal.htm)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
package Calculator;

sub add {
    my ($self, $a, $b) = @_;
    return $a + $b;
}

sub multiply {
    my ($self, $a, $b) = @_;
    return $a * $b;
}

package main;

my $calc = bless {}, 'Calculator';

# Methode dynamisch aufrufen
my $method = $calc->can('add');
my $result = $method->($calc, 5, 3);
print "Result: $result\n";

# Mit Methodenname als String
my $methodName = 'multiply';
my $method2 = $calc->can($methodName);
my $result2 = $method2->($calc, 4, 7);
print "Result: $result2\n";

# Direkt über String
my $result3 = $calc->$methodName(4, 7);
```

**Besonderheiten:**
- Dynamische Methodenaufrufe über `can()`, String-Dereferenzierung
- Unterstützt direkte Aufrufe über String-Namen
- `can()` für Existenzprüfung
- Sehr flexibel und dynamisch

**Weiterführende Links:**
- [Perl Documentation - can](https://perldoc.perl.org/functions/can)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
struct Calculator end

function add(c::Calculator, a::Int, b::Int)
    a + b
end

function multiply(c::Calculator, a::Int, b::Int)
    a * b
end

calc = Calculator()

# Funktion dynamisch aufrufen
method = getfield(Main, :add)
result = method(calc, 5, 3)
println("Result: $result")

# Mit Funktionsname als String
method_name = "multiply"
method2 = getfield(Main, Symbol(method_name))
result2 = method2(calc, 4, 7)
println("Result: $result2")
```

**Besonderheiten:**
- Dynamische Funktionsaufrufe über `getfield()`, `Symbol()`
- Unterstützt direkte Aufrufe über Symbol-Namen
- Funktionen sind First-Class-Objekte
- Sehr flexibel und dynamisch

**Weiterführende Links:**
- [Julia Documentation - getfield](https://docs.julialang.org/en/v1/base/base/#Base.getfield)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
Calculator = {}
Calculator.__index = Calculator

function Calculator:add(a, b)
    return a + b
end

function Calculator:multiply(a, b)
    return a * b
end

local calc = setmetatable({}, Calculator)

-- Methode dynamisch aufrufen
local method = calc.add
local result = method(calc, 5, 3)
print("Result: " .. result)

-- Mit Methodenname als String
local methodName = "multiply"
local method2 = calc[methodName]
local result2 = method2(calc, 4, 7)
print("Result: " .. result2)

-- Direkt über String
local result3 = calc["add"](calc, 5, 3)
```

**Besonderheiten:**
- Dynamische Methodenaufrufe über Bracket-Notation
- Unterstützt direkte Aufrufe über String-Namen
- Metatabellen für Methodenauflösung
- Sehr flexibel und dynamisch

**Weiterführende Links:**
- [Lua Documentation - Metatables](https://www.lua.org/manual/5.4/manual.html#2.4)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Benötigt: #import <Foundation/Foundation.h>, #import <objc/runtime.h>, #import <objc/message.h>

@interface Calculator : NSObject
- (int)add:(int)a with:(int)b;
- (int)multiply:(int)a with:(int)b;
@end

@implementation Calculator
- (int)add:(int)a with:(int)b {
    return a + b;
}
- (int)multiply:(int)a with:(int)b {
    return a * b;
}
@end

Calculator *calc = [[Calculator alloc] init];

// Methode dynamisch aufrufen
SEL selector = @selector(add:with:);
int result = ((int (*)(id, SEL, int, int))objc_msgSend)(calc, selector, 5, 3);

// Mit Methodenname als String
NSString *methodName = @"multiply:with:";
SEL selector2 = NSSelectorFromString(methodName);
int result2 = ((int (*)(id, SEL, int, int))objc_msgSend)(calc, selector2, 4, 7);
```

**Besonderheiten:**
- Dynamische Methodenaufrufe über `objc_msgSend`, `NSSelectorFromString`
- Unterstützt Methodenaufrufe mit Parametern
- `performSelector:` für einfachere Aufrufe
- Sehr mächtige Runtime-API

**Weiterführende Links:**
- [Apple Documentation - objc_msgSend](https://developer.apple.com/documentation/objectivec/1456712-objc_msgsend)

</TabItem>
<TabItem value="d" label="D">

```d
// Benötigt: import std.stdio;

class Calculator {
    int add(int a, int b) {
        return a + b;
    }
    
    int multiply(int a, int b) {
        return a * b;
    }
}

auto calc = new Calculator();

// Methode dynamisch aufrufen über Mixin
string methodName = "add";
mixin(`auto result = calc.` ~ methodName ~ `(5, 3);`);
// result enthält das Ergebnis
```

**Besonderheiten:**
- Dynamische Methodenaufrufe hauptsächlich über Mixins zur Compile-Zeit
- Runtime-Reflection weniger mächtig
- `__traits` für Compile-Time-Reflection
- Weniger flexibel als in rein dynamischen Sprachen

**Weiterführende Links:**
- [D Language Documentation - Mixins](https://dlang.org/spec/template-mixin.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Benötigt: open System.Reflection

type Calculator() =
    member this.Add(a: int, b: int) = a + b
    member this.Multiply(a: int, b: int) = a * b

let calc = Calculator()
let t = typeof<Calculator>

// Methode dynamisch aufrufen
let method = t.GetMethod("Add")
let result = method.Invoke(calc, [| box 5; box 3 |]) :?> int

// Mit Methodenname als String
let methodName = "Multiply"
let method2 = t.GetMethod(methodName)
let result2 = method2.Invoke(calc, [| box 4; box 7 |]) :?> int
```

**Besonderheiten:**
- Dynamische Methodenaufrufe über .NET `System.Reflection` (identisch mit C#)
- Unterstützt Methodenaufrufe mit Parametern
- `GetMethod()` für Methodensuche
- Typsicherheit zur Laufzeit nicht garantiert

**Weiterführende Links:**
- [F# Documentation - Reflection](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/reflection)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Benötigt: Imports System.Reflection

Public Class Calculator
    Public Function Add(a As Integer, b As Integer) As Integer
        Return a + b
    End Function
    
    Public Function Multiply(a As Integer, b As Integer) As Integer
        Return a * b
    End Function
End Class

Dim calc As New Calculator()
Dim t As Type = GetType(Calculator)

' Methode dynamisch aufrufen
Dim method As MethodInfo = t.GetMethod("Add")
Dim result As Integer = CInt(method.Invoke(calc, {5, 3}))

' Mit Methodenname als String
Dim methodName As String = "Multiply"
Dim method2 As MethodInfo = t.GetMethod(methodName)
Dim result2 As Integer = CInt(method2.Invoke(calc, {4, 7}))
```

**Besonderheiten:**
- Dynamische Methodenaufrufe über .NET `System.Reflection` (identisch mit C#)
- Unterstützt Methodenaufrufe mit Parametern
- `GetMethod()` für Methodensuche
- Typsicherheit zur Laufzeit nicht garantiert

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Reflection](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/concepts/reflection)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Dynamischer Funktionsaufruf *)
funcName = "Plus";
result = ToExpression[funcName][3, 4]  (* 7 *)

(* Symbol-basiert *)
func = Symbol["Times"];
result2 = func[3, 4]  (* 12 *)
```

**Besonderheiten:**
- `ToExpression` konvertiert Strings zu Ausdrücken
- `Symbol["name"]` erstellt ein Symbol dynamisch
- Alle Funktionen können dynamisch aufgerufen werden

**Weiterführende Links:**
- [Wolfram Language Documentation - ToExpression](https://reference.wolfram.com/language/ref/ToExpression.html)

</TabItem>
</Tabs>


## 16.1.4. Annotations / Attributes

Ermöglicht es, Metadaten in Form von Annotationen oder Attributen zu Code-Elementen hinzuzufügen, die zur Laufzeit oder Compile-Zeit ausgelesen werden können.

### Sprachen {#sprachen}

<Tabs availableTabs={['clojure', 'common-lisp', 'csharp', 'd', 'dart', 'fsharp', 'groovy', 'java', 'julia', 'kotlin', 'lean4', 'nim', 'objective-c', 'object-pascal', 'php', 'scala', 'swift', 'typescript', 'v', 'vbnet']} yellowTabs={['rust']} orangeTabs={['go', 'python', 'ruby']}>
<TabItem value="java" label="Java">

```java
// Benötigt: import java.lang.annotation.*;

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
@interface Author {
    String name();
    int year();
}

class Book {
    @Author(name = "John Doe", year = 2023)
    public void publish() {
        System.out.println("Book published");
    }
}

// Annotation zur Laufzeit auslesen
Method method = Book.class.getMethod("publish");
Author author = method.getAnnotation(Author.class);
if (author != null) {
    System.out.println("Author: " + author.name() + ", Year: " + author.year());
}
```

**Besonderheiten:**
- Annotationen über `@interface` definiert
- `@Retention` bestimmt, wann Annotationen verfügbar sind
- `@Target` bestimmt, wo Annotationen verwendet werden können
- Zur Laufzeit über Reflection auslesbar

**Weiterführende Links:**
- [Oracle Java Documentation - Annotations](https://docs.oracle.com/javase/tutorial/java/annotations/)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Benötigt: using System;

[AttributeUsage(AttributeTargets.Method)]
class AuthorAttribute : Attribute {
    public string Name { get; set; }
    public int Year { get; set; }
    
    public AuthorAttribute(string name, int year) {
        Name = name;
        Year = year;
    }
}

class Book {
    [Author("John Doe", 2023)]
    public void Publish() {
        Console.WriteLine("Book published");
    }
}

// Attribut zur Laufzeit auslesen
MethodInfo method = typeof(Book).GetMethod("Publish");
AuthorAttribute author = method.GetCustomAttribute<AuthorAttribute>();
if (author != null) {
    Console.WriteLine($"Author: {author.Name}, Year: {author.Year}");
}
```

**Besonderheiten:**
- Attribute über Klassen erweitern `Attribute`
- `AttributeUsage` bestimmt, wo Attribute verwendet werden können
- Zur Laufzeit über Reflection auslesbar
- Unterstützt benannte und positionsbasierte Parameter

**Weiterführende Links:**
- [Microsoft C# Documentation - Attributes](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/attributes/)

</TabItem>
<TabItem value="python" label="Python">

```python
def author(name, year):
    def decorator(func):
        func._author_name = name
        func._author_year = year
        return func
    return decorator

class Book:
    @author("John Doe", 2023)
    def publish(self):
        print("Book published")

# Metadaten zur Laufzeit auslesen
method = Book.publish
if hasattr(method, '_author_name'):
    print(f"Author: {method._author_name}, Year: {method._author_year}")
```

**Besonderheiten:**
- Annotationen über Decorators implementiert
- Metadaten als Funktionsattribute gespeichert
- Sehr flexibel und dynamisch
- Keine native Annotation-Syntax

**Weiterführende Links:**
- [Python Documentation - Decorators](https://docs.python.org/3/glossary.html#term-decorator)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
annotation class Author(val name: String, val year: Int)

class Book {
    @Author(name = "John Doe", year = 2023)
    fun publish() {
        println("Book published")
    }
}

// Annotation zur Laufzeit auslesen
val method = Book::class.members.find { it.name == "publish" }
val author = method?.annotations?.find { it is Author } as? Author
author?.let {
    println("Author: ${it.name}, Year: ${it.year}")
}
```

**Besonderheiten:**
- Annotationen über `annotation class` definiert
- Zur Laufzeit über Reflection auslesbar
- Unterstützt benannte Parameter
- `@Retention` für Retention-Policy

**Weiterführende Links:**
- [Kotlin Documentation - Annotations](https://kotlinlang.org/docs/annotations.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Attribute (Annotations) in Lean 4
@[simp] theorem add_zero (n : Nat) : n + 0 = n := rfl

@[inline] def fastAdd (a b : Nat) : Nat := a + b

@[extern "lean_uint64_add"]
opaque UInt64.add : UInt64 → UInt64 → UInt64

-- Benutzerdefiniertes Attribut
initialize myAttr : TagAttribute ← registerTagAttribute `myTag "Ein benutzerdefiniertes Tag"

@[myTag] def myFunction : Nat := 42
```

**Besonderheiten:**
- Lean 4 verwendet `@[...]` Syntax für Attribute (Annotations).
- Eingebaute Attribute: `@[simp]`, `@[inline]`, `@[extern]`, `@[reducible]`, `@[instance]`.
- Benutzerdefinierte Attribute können über `registerTagAttribute` erstellt werden.
- Attribute werden zur Compile-Zeit verarbeitet und beeinflussen die Elaboration.

**Weiterführende Links:**
- [Lean 4 Documentation - Attributes](https://lean-lang.org/lean4/doc/attributes.html)
- [Lean 4 Metaprogramming Book - Attributes](https://leanprover-community.github.io/lean4-metaprogramming-book/)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Benötigt: import scala.annotation.StaticAnnotation, import scala.reflect.runtime.universe._

class Author(name: String, year: Int) extends StaticAnnotation

class Book {
  @Author(name = "John Doe", year = 2023)
  def publish(): Unit = {
    println("Book published")
  }
}

// Annotation zur Laufzeit auslesen
val bookType = typeOf[Book]
val publishMethod = bookType.member(TermName("publish")).asMethod
val annotations = publishMethod.annotations
annotations.foreach { ann =>
  println(s"Annotation: $ann")
}
```

**Besonderheiten:**
- Annotationen über Klassen erweitern `StaticAnnotation`
- Zur Laufzeit über Reflection auslesbar
- Unterstützt sowohl Compile-Time- als auch Runtime-Reflection
- `@tailrec`, `@deprecated` als eingebaute Annotationen

**Weiterführende Links:**
- [Scala Documentation - Annotations](https://docs.scala-lang.org/tour/annotations.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Rust unterstützt keine Annotationen zur Laufzeit
// Attribute werden zur Compile-Zeit verarbeitet

#[derive(Debug)]
struct Book;

impl Book {
    #[allow(dead_code)]
    fn publish(&self) {
        println!("Book published");
    }
}

// Attribute sind zur Laufzeit nicht verfügbar
// Sie werden vom Compiler verarbeitet
```

**Besonderheiten:**
- Attribute über `#[...]` Syntax
- Werden zur Compile-Zeit verarbeitet
- Nicht zur Laufzeit verfügbar
- `#[derive(...)]` für automatische Trait-Implementierungen

**Weiterführende Links:**
- [Rust Documentation - Attributes](https://doc.rust-lang.org/reference/attributes.html)

</TabItem>
<TabItem value="go" label="Go">

```go
// Benötigt: import "reflect"

// Struct Tags als Annotation-Ersatz
type Book struct {
    Title string `json:"title" author:"John Doe" year:"2023"`
}

func (b Book) Publish() {
    // Book published
}

// Tags zur Laufzeit auslesen
t := reflect.TypeOf(Book{})
field, _ := t.FieldByName("Title")
authorTag := field.Tag.Get("author")
yearTag := field.Tag.Get("year")
// authorTag und yearTag enthalten die Werte
```

**Besonderheiten:**
- Struct Tags als Annotation-Ersatz
- Zur Laufzeit über Reflection auslesbar
- Keine native Annotation-Syntax
- Häufig für JSON/XML-Serialisierung verwendet

**Weiterführende Links:**
- [Go Documentation - Struct Tags](https://pkg.go.dev/reflect#StructTag)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Benötigt: import Foundation

// Property Wrapper als Annotation-Ersatz
@propertyWrapper
struct Author {
    var wrappedValue: String
    let year: Int
    
    init(wrappedValue: String, year: Int) {
        self.wrappedValue = wrappedValue
        self.year = year
    }
}

struct Book {
    @Author(wrappedValue: "John Doe", year: 2023)
    var author: String
    
    func publish() {
        print("Book published")
    }
}

// Metadaten über Mirror auslesen
let book = Book()
let mirror = Mirror(reflecting: book)
for child in mirror.children {
    print("Property: \(child.label ?? ""), Value: \(child.value)")
}
```

**Besonderheiten:**
- Property Wrappers als Annotation-Ersatz
- `@available` für Verfügbarkeits-Annotationen
- Weniger mächtig als Annotationen in anderen Sprachen
- Metadaten über Mirror auslesbar

**Weiterführende Links:**
- [Swift Documentation - Property Wrappers](https://docs.swift.org/swift-book/LanguageGuide/Properties.html#ID617)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Benötigt: open System

[<AttributeUsage(AttributeTargets.Method)>]
type AuthorAttribute(name: string, year: int) =
    inherit Attribute()
    member this.Name = name
    member this.Year = year

type Book() =
    [<Author("John Doe", 2023)>]
    member this.Publish() =
        printfn "Book published"

// Attribut zur Laufzeit auslesen
let method = typeof<Book>.GetMethod("Publish")
let author = method.GetCustomAttribute<AuthorAttribute>()
match author with
| null -> ()
| attr -> printfn "Author: %s, Year: %d" attr.Name attr.Year
```

**Besonderheiten:**
- Attribute über .NET `System.Attribute` (identisch mit C#)
- Zur Laufzeit über Reflection auslesbar
- Unterstützt benannte und positionsbasierte Parameter
- `[<...>]` Syntax für Attribute

**Weiterführende Links:**
- [F# Documentation - Attributes](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/attributes)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Benötigt: Imports System

<AttributeUsage(AttributeTargets.Method)>
Public Class AuthorAttribute
    Inherits Attribute
    
    Public Property Name As String
    Public Property Year As Integer
    
    Public Sub New(name As String, year As Integer)
        Me.Name = name
        Me.Year = year
    End Sub
End Class

Public Class Book
    <Author("John Doe", 2023)>
    Public Sub Publish()
        Console.WriteLine("Book published")
    End Sub
End Class

' Attribut zur Laufzeit auslesen
Dim method As Reflection.MethodInfo = GetType(Book).GetMethod("Publish")
Dim author As AuthorAttribute = method.GetCustomAttribute(Of AuthorAttribute)()
If author IsNot Nothing Then
    Console.WriteLine($"Author: {author.Name}, Year: {author.Year}")
End If
```

**Besonderheiten:**
- Attribute über .NET `System.Attribute` (identisch mit C#)
- Zur Laufzeit über Reflection auslesbar
- Unterstützt benannte und positionsbasierte Parameter
- `<...>` Syntax für Attribute

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Attributes](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/concepts/attributes/)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
class Author {
  final String name;
  final int year;
  
  const Author(this.name, this.year);
}

class Book {
  @Author('John Doe', 2023)
  void publish() {
    print('Book published');
  }
}

// Annotation zur Laufzeit auslesen (mit dart:mirrors, deprecated)
// Für Produktionscode sollte code_generation verwendet werden
```

**Besonderheiten:**
- Annotationen über Klassen mit `const` Constructor
- `dart:mirrors` für Runtime-Reflection (deprecated, nicht in Flutter)
- Für Produktionscode wird Code-Generierung bevorzugt
- Annotationen hauptsächlich für Code-Generierung verwendet

**Weiterführende Links:**
- [Dart Documentation - Metadata](https://dart.dev/guides/language/language-tour#metadata)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Decorators (seit TypeScript 5.0)
function Author(name: string, year: number) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        (target as any).__author = { name, year };
    };
}

class Book {
    @Author("John Doe", 2023)
    publish() {
        console.log("Book published");
    }
}

// Metadaten zur Laufzeit auslesen
const book = new Book();
const author = (book as any).__author;
if (author) {
    console.log(`Author: ${author.name}, Year: ${author.year}`);
}
```

**Besonderheiten:**
- Decorators für Annotationen (experimentell, seit TS 5.0 stabiler)
- Zur Laufzeit über Metadaten auslesbar
- `experimentalDecorators` Flag notwendig (ältere Versionen)
- Unterstützt Class, Method, Property Decorators

**Weiterführende Links:**
- [TypeScript Documentation - Decorators](https://www.typescriptlang.org/docs/handbook/decorators.html)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
module Author
  def self.included(base)
    base.extend(ClassMethods)
  end
  
  module ClassMethods
    def author(name, year)
      @author_name = name
      @author_year = year
    end
    
    def get_author
      { name: @author_name, year: @author_year }
    end
  end
end

class Book
  include Author
  author "John Doe", 2023
  
  def publish
    puts "Book published"
  end
end

# Metadaten zur Laufzeit auslesen
author_info = Book.get_author
puts "Author: #{author_info[:name]}, Year: #{author_info[:year]}"
```

**Besonderheiten:**
- Annotationen über Module und Metaprogrammierung
- Sehr flexibel und dynamisch
- Keine native Annotation-Syntax
- Metadaten als Klasseninstanzvariablen gespeichert

**Weiterführende Links:**
- [Ruby Documentation - Modules](https://ruby-doc.org/core-3.1.0/Module.html)

</TabItem>
<TabItem value="php" label="PHP">

```php
#[Attribute(Attribute::TARGET_METHOD)]
class Author {
    public function __construct(
        public string $name,
        public int $year
    ) {}
}

class Book {
    #[Author("John Doe", 2023)]
    public function publish() {
        echo "Book published\n";
    }
}

// Attribut zur Laufzeit auslesen
$reflection = new ReflectionMethod('Book', 'publish');
$attributes = $reflection->getAttributes(Author::class);
foreach ($attributes as $attribute) {
    $author = $attribute->newInstance();
    echo "Author: {$author->name}, Year: {$author->year}\n";
}
```

**Besonderheiten:**
- Attribute über `#[...]` Syntax (seit PHP 8.0)
- Zur Laufzeit über Reflection auslesbar
- Unterstützt benannte Parameter
- `Attribute::TARGET_*` für Ziel-Spezifikation

**Weiterführende Links:**
- [PHP Documentation - Attributes](https://www.php.net/manual/en/language.attributes.php)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Metadaten als Annotation-Ersatz
(defn publish
  "Publishes a book"
  {:author "John Doe"
   :year 2023}
  []
  (println "Book published"))

;; Metadaten zur Laufzeit auslesen
(let [meta-data (meta #'publish)]
  (println "Author:" (:author meta-data))
  (println "Year:" (:year meta-data)))
```

**Besonderheiten:**
- Metadaten als Annotation-Ersatz
- Zur Laufzeit über `meta` auslesbar
- Sehr flexibel und dynamisch
- Unterstützt beliebige Schlüssel-Wert-Paare

**Weiterführende Links:**
- [Clojure Documentation - Metadata](https://clojure.org/reference/metadata)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Metadaten über Properties
(defclass book ()
  ())

(defmethod publish ((b book))
  (format t "Book published~%"))

;; Metadaten setzen
(setf (get 'publish 'author) "John Doe")
(setf (get 'publish 'year) 2023)

;; Metadaten zur Laufzeit auslesen
(format t "Author: ~a~%" (get 'publish 'author))
(format t "Year: ~a~%" (get 'publish 'year))
```

**Besonderheiten:**
- Metadaten über Properties
- Zur Laufzeit über `get` auslesbar
- Sehr flexibel und dynamisch
- Unterstützt beliebige Schlüssel-Wert-Paare

**Weiterführende Links:**
- [Common Lisp HyperSpec - get](http://www.lispworks.com/documentation/HyperSpec/Body/f_get.htm)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Metadaten über Docstrings und Makros
"""
    publish()

Publishes a book.

# Metadata
- Author: John Doe
- Year: 2023
"""
function publish()
    println("Book published")
end

# Metadaten über Makros
macro author(name, year)
    quote
        # Metadaten werden zur Compile-Zeit verarbeitet
    end
end
```

**Besonderheiten:**
- Metadaten hauptsächlich über Docstrings
- Makros für Compile-Time-Metadaten
- Weniger strukturierte Annotationen
- Sehr mächtige Metaprogrammierung

**Weiterführende Links:**
- [Julia Documentation - Documentation](https://docs.julialang.org/en/v1/manual/documentation/)

</TabItem>
<TabItem value="d" label="D">

```d
// User-Defined Attributes (UDAs)
// Benötigt: import std.traits;

// UDA definieren
enum serializable;
struct MaxLength { int value; }

// UDA verwenden
@serializable
struct Person {
    @MaxLength(50)
    string name;

    @MaxLength(3)
    int age;
}

// UDA zur Compile-Zeit auslesen
static if (hasUDA!(Person, serializable)) {
    pragma(msg, "Person ist serializable");
}

// Feld-UDAs auslesen
alias nameUDAs = getUDAs!(Person.name, MaxLength);
static assert(nameUDAs[0].value == 50);
```

**Besonderheiten:**
- User-Defined Attributes (UDAs) für benutzerdefinierte Metadaten
- UDAs werden zur Compile-Zeit ausgewertet (keine Laufzeit-Reflection nötig)
- Können an Typen, Funktionen, Variablen und Parameter angehängt werden
- Auslesen via `__traits(getAttributes, ...)` oder `std.traits`

**Weiterführende Links:**
- [D Language Specification - User-Defined Attributes](https://dlang.org/spec/attribute.html#uda)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
import groovy.transform.ToString
import groovy.transform.EqualsAndHashCode

// Groovy AST-Transformation-Annotations
@ToString
@EqualsAndHashCode
class Person {
    String name
    int age
}

// Eigene Annotation definieren
@interface MyAnnotation {
    String value() default ""
}

@MyAnnotation(value = "test")
class MyClass {}
```

**Besonderheiten:**
- Vollständige Kompatibilität mit Java-Annotations
- Groovy bietet zahlreiche eigene AST-Transformation-Annotations (`@ToString`, `@EqualsAndHashCode`, `@Immutable`, etc.)
- Annotations können zur Compile-Time und Runtime verwendet werden

**Weiterführende Links:**
- [Groovy Documentation - Annotations](https://groovy-lang.org/objectorientation.html#_annotations)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Pragmas als Annotations
proc myProc() {.noSideEffect, inline.} =
  discard

proc deprecated_proc() {.deprecated: "Verwende newProc stattdessen".} =
  discard

type
  MyObj {.packed.} = object
    x: int32
    y: int32

# Benutzerdefinierte Pragmas
template myPragma() {.pragma.} = discard

proc annotatedProc() {.myPragma.} =
  echo "annotiert"
```

**Besonderheiten:**
- Pragmas mit `{.name.}` Syntax
- Eingebaute Pragmas: `inline`, `noSideEffect`, `deprecated`, `packed`, etc.
- Benutzerdefinierte Pragmas über `{.pragma.}` Template
- Pragmas beeinflussen Compiler-Verhalten

**Weiterführende Links:**
- [Nim Documentation - Pragmas](https://nim-lang.org/docs/manual.html#pragmas)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Attributes (seit Delphi 2010)
type
  DescriptionAttribute = class(TCustomAttribute)
  private
    FText: string;
  public
    constructor Create(const AText: string);
    property Text: string read FText;
  end;

  [Description('Eine Person')]
  TPerson = class
  private
    [Description('Der Name')]
    FName: string;
  public
    property Name: string read FName write FName;
  end;
```

**Besonderheiten:**
- Custom Attributes erben von `TCustomAttribute`
- Attribut-Syntax: `[AttributeName(params)]`
- Zugriff über RTTI zur Laufzeit
- Seit Delphi 2010

**Weiterführende Links:**
- [Delphi Documentation - Attributes](https://docwiki.embarcadero.com/RADStudio/en/Attributes)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// __attribute__ Annotations
__attribute__((deprecated("Verwende newMethod stattdessen")))
- (void)oldMethod;

// Availability Annotations
- (void)newFeature NS_AVAILABLE_IOS(14_0);

// Nullability Annotations
- (nullable NSString *)findItem:(nonnull NSString *)key;

// Designated Initializer
- (instancetype)initWithName:(NSString *)name NS_DESIGNATED_INITIALIZER;
```

**Besonderheiten:**
- `__attribute__` für Compiler-Annotationen (deprecated, unavailable, etc.)
- `NS_AVAILABLE`, `NS_DEPRECATED` für Verfügbarkeits-Annotations
- `nullable`, `nonnull`, `null_unspecified` für Nullability
- `NS_DESIGNATED_INITIALIZER` für Initializer-Ketten

**Weiterführende Links:**
- [Apple Documentation - Adopting Modern Objective-C](https://developer.apple.com/library/archive/releasenotes/ObjectiveC/ModernizationObjC/AdoptingModernObjective-C/AdoptingModernObjective-C.html)

</TabItem>
<TabItem value="v" label="V">

```v
// Attributes
@[inline]
fn fast_add(a int, b int) int {
    return a + b
}

@[packed]
struct NetworkPacket {
    header u16
    data   u32
}

@[deprecated: 'Verwende new_function() statt']
fn old_function() {}
```

**Besonderheiten:**
- `@[name]` Syntax für Attribute
- `@[inline]` für Inline-Funktionen
- `@[packed]` für gepackte Structs
- `@[deprecated]` mit optionaler Nachricht
- `@[params]` für Struct-basierte Default-Parameter

**Weiterführende Links:**
- [V Documentation - Attributes](https://github.com/vlang/v/blob/master/doc/docs.md#attributes)

</TabItem>
</Tabs>


## 16.1.5. Annotation Processing

Ermöglicht es, Annotationen zur Compile-Zeit zu verarbeiten und Code zu generieren oder zu transformieren, bevor das Programm ausgeführt wird.

### Sprachen {#sprachen}

<Tabs availableTabs={['java', 'kotlin', 'csharp', 'rust', 'scala', 'dart', 'go']} orangeTabs={['fsharp', 'python', 'swift', 'typescript']}>
<TabItem value="java" label="Java">

```java
// Benötigt: import javax.annotation.processing.*, import javax.lang.model.element.*;

@SupportedAnnotationTypes("GenerateGetter")
@SupportedSourceVersion(SourceVersion.RELEASE_17)
public class GetterProcessor extends AbstractProcessor {
    @Override
    public boolean process(Set<? extends TypeElement> annotations, 
                          RoundEnvironment roundEnv) {
        for (Element element : roundEnv.getElementsAnnotatedWith(GenerateGetter.class)) {
            // Code-Generierung basierend auf Annotation
            generateGetterMethod(element);
        }
        return true;
    }
    
    private void generateGetterMethod(Element element) {
        // Code-Generierung implementieren
    }
}
```

**Besonderheiten:**
- Annotation Processing über `javax.annotation.processing`
- Läuft zur Compile-Zeit
- Kann Code generieren und transformieren
- `AbstractProcessor` als Basisklasse

**Weiterführende Links:**
- [Oracle Java Documentation - Annotation Processing](https://docs.oracle.com/javase/8/docs/api/javax/annotation/processing/package-summary.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Benötigt: import com.google.devtools.ksp.processing.*, import com.google.devtools.ksp.symbol.*

class GetterProcessor : SymbolProcessor {
    override fun process(resolver: Resolver): List<KSAnnotated> {
        val symbols = resolver.getSymbolsWithAnnotation("GenerateGetter")
        symbols.forEach { symbol ->
            if (symbol is KSClassDeclaration) {
                // Code-Generierung basierend auf Annotation
                generateGetterMethod(symbol)
            }
        }
        return emptyList()
    }
    
    private fun generateGetterMethod(symbol: KSClassDeclaration) {
        // Code-Generierung implementieren
    }
}
```

**Besonderheiten:**
- KSP (Kotlin Symbol Processing) für Annotation Processing
- Läuft zur Compile-Zeit
- Kann Code generieren und transformieren
- Moderner Ersatz für kapt (Kotlin Annotation Processing Tool)

**Weiterführende Links:**
- [Kotlin Documentation - KSP](https://kotlinlang.org/docs/ksp-overview.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Benötigt: using Microsoft.CodeAnalysis, using Microsoft.CodeAnalysis.CSharp

[Generator]
public class GetterGenerator : ISourceGenerator {
    public void Initialize(GeneratorInitializationContext context) {
        context.RegisterForSyntaxNotifications(() => new SyntaxReceiver());
    }
    
    public void Execute(GeneratorExecutionContext context) {
        // Code-Generierung basierend auf Annotationen
        var source = GenerateGetterCode(context);
        context.AddSource("GeneratedGetter.g.cs", source);
    }
    
    private string GenerateGetterCode(GeneratorExecutionContext context) {
        // Code-Generierung implementieren
        return "// Generated code";
    }
}
```

**Besonderheiten:**
- Source Generators für Annotation Processing
- Läuft zur Compile-Zeit
- Kann Code generieren und zu Compilation hinzufügen
- `ISourceGenerator` Interface

**Weiterführende Links:**
- [Microsoft C# Documentation - Source Generators](https://learn.microsoft.com/en-us/dotnet/csharp/roslyn-sdk/source-generators-overview)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Benötigt: use proc_macro::TokenStream, use quote::quote, use syn::{parse_macro_input, DeriveInput}

#[proc_macro_derive(GenerateGetter)]
pub fn getter_derive(input: TokenStream) -> TokenStream {
    let input = parse_macro_input!(input as DeriveInput);
    
    let name = &input.ident;
    let expanded = quote! {
        impl #name {
            // Generierte Getter-Methoden
        }
    };
    
    TokenStream::from(expanded)
}
```

**Besonderheiten:**
- Procedural Macros für Annotation Processing
- Läuft zur Compile-Zeit
- Kann Code generieren und transformieren
- `proc_macro` Crate für Macro-Entwicklung

**Weiterführende Links:**
- [Rust Documentation - Procedural Macros](https://doc.rust-lang.org/reference/procedural-macros.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Benötigt: import scala.annotation.StaticAnnotation, import scala.meta._

class GenerateGetter extends StaticAnnotation {
  inline def apply(defn: Any): Any = meta {
    // Code-Generierung basierend auf Annotation
    defn match {
      case cls: Defn.Class =>
        // Generiere Getter-Methoden
        cls
      case _ =>
        abort("@GenerateGetter must annotate a class")
    }
  }
}
```

**Besonderheiten:**
- Macro Annotations für Annotation Processing
- Läuft zur Compile-Zeit
- Kann Code generieren und transformieren
- `scala.meta` für AST-Manipulation

**Weiterführende Links:**
- [Scala Documentation - Macros](https://docs.scala-lang.org/overviews/macros/overview.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Benötigt: import 'package:json_annotation/json_annotation.dart';

part 'book.g.dart';

@JsonSerializable()
class Book {
  final String title;
  final String author;
  
  Book(this.title, this.author);
  
  factory Book.fromJson(Map<String, dynamic> json) => _$BookFromJson(json);
  Map<String, dynamic> toJson() => _$BookToJson(this);
}
```

**Besonderheiten:**
- Build System für Annotation Processing
- Läuft zur Compile-Zeit
- Kann Code generieren und transformieren
- `build_runner` für Code-Generierung

**Weiterführende Links:**
- [Dart Documentation - Code Generation](https://dart.dev/guides/libraries/create-library-packages#code-generation)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// TypeScript unterstützt keine Annotation Processing zur Compile-Zeit
// Decorators werden zur Laufzeit verarbeitet
// Code-Generierung über externe Tools wie tsc oder Babel

// Beispiel mit Decorator (zur Laufzeit)
function GenerateGetter(target: any) {
    // Metadaten setzen, aber keine Code-Generierung
    return target;
}

@GenerateGetter
class Book {
    title: string;
    author: string;
}
```

**Besonderheiten:**
- Keine native Annotation Processing zur Compile-Zeit
- Decorators werden zur Laufzeit verarbeitet
- Code-Generierung über externe Tools
- TypeScript Compiler API für erweiterte Transformationen

**Weiterführende Links:**
- [TypeScript Documentation - Compiler API](https://github.com/Microsoft/TypeScript/wiki/Using-the-Compiler-API)

</TabItem>
<TabItem value="python" label="Python">

```python
# Python unterstützt keine Annotation Processing zur Compile-Zeit
# Decorators werden zur Laufzeit verarbeitet
# Code-Generierung über externe Tools oder Metaprogrammierung

def generate_getter(cls):
    # Laufzeit-Code-Generierung über Metaprogrammierung
    for name, value in cls.__dict__.items():
        if not name.startswith('_'):
            def getter(n=name):
                return lambda self: getattr(self, n)
            setattr(cls, f'get_{name}', getter(name))
    return cls

@generate_getter
class Book:
    def __init__(self, title, author):
        self.title = title
        self.author = author
```

**Besonderheiten:**
- Keine native Annotation Processing zur Compile-Zeit
- Decorators werden zur Laufzeit verarbeitet
- Code-Generierung über Metaprogrammierung zur Laufzeit
- Externe Tools für Code-Generierung

**Weiterführende Links:**
- [Python Documentation - Decorators](https://docs.python.org/3/glossary.html#term-decorator)

</TabItem>
<TabItem value="go" label="Go">

```go
//go:generate stringer -type=Status

type Status int

const (
    Pending Status = iota
    Approved
    Rejected
)

// Code wird durch 'go generate' generiert
// Generiert String() Methode basierend auf Kommentar
// Ausführung: go generate
```

**Besonderheiten:**
- `go generate` für Code-Generierung
- Läuft zur Compile-Zeit
- Kommentar-basierte Direktiven
- Externe Tools für Code-Generierung

**Weiterführende Links:**
- [Go Documentation - Generate](https://pkg.go.dev/cmd/go#hdr-Generate_Go_files_by_processing_source)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Swift unterstützt keine Annotation Processing zur Compile-Zeit
// Property Wrappers werden zur Compile-Zeit verarbeitet, aber keine Code-Generierung

@propertyWrapper
struct GenerateGetter {
    var wrappedValue: String
    
    var projectedValue: String {
        wrappedValue
    }
}

struct Book {
    @GenerateGetter var title: String
    @GenerateGetter var author: String
}
```

**Besonderheiten:**
- Keine native Annotation Processing zur Compile-Zeit
- Property Wrappers werden zur Compile-Zeit verarbeitet
- Code-Generierung über externe Tools
- Sourcery für Code-Generierung

**Weiterführende Links:**
- [Swift Documentation - Property Wrappers](https://docs.swift.org/swift-book/LanguageGuide/Properties.html#ID617)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// F# unterstützt keine Annotation Processing zur Compile-Zeit
// Type Providers für Code-Generierung zur Compile-Zeit

type BookProvider = JsonProvider<"""
{
    "title": "Example",
    "author": "Author"
}
""">

let book = BookProvider.GetSample()
```

**Besonderheiten:**
- Type Providers für Code-Generierung zur Compile-Zeit
- Läuft zur Compile-Zeit
- Kann Code generieren basierend auf externen Daten
- Weniger flexibel als Annotation Processing

**Weiterführende Links:**
- [F# Documentation - Type Providers](https://learn.microsoft.com/en-us/dotnet/fsharp/tutorials/type-providers/)

</TabItem>
</Tabs>


## 16.1.6. Decorators (TypeScript)

Ermöglicht es, Klassen, Methoden, Eigenschaften und Parameter mit Decorators zu annotieren, die zur Laufzeit oder Compile-Zeit verarbeitet werden können.

### Sprachen {#sprachen}

<Tabs availableTabs={['typescript', 'python', 'javascript']} orangeTabs={['clojure', 'csharp', 'kotlin', 'ruby']}>
<TabItem value="typescript" label="TypeScript">

```typescript
// Class Decorator
function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

@sealed
class BugReport {
    type = "report";
    title: string;
    
    constructor(t: string) {
        this.title = t;
    }
}

// Method Decorator
function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = value;
    };
}

class Greeter {
    greeting: string;
    
    constructor(message: string) {
        this.greeting = message;
    }
    
    @enumerable(false)
    greet() {
        return "Hello, " + this.greeting;
    }
}

// Property Decorator
function format(formatString: string) {
    return function (target: any, propertyKey: string) {
        // Metadaten setzen
    };
}

class User {
    @format("Hello, %s")
    name: string;
}
```

**Besonderheiten:**
- Decorators seit TypeScript 5.0 stabil
- Unterstützt Class, Method, Property, Parameter Decorators
- `experimentalDecorators` Flag in älteren Versionen
- Zur Laufzeit verarbeitet

**Weiterführende Links:**
- [TypeScript Documentation - Decorators](https://www.typescriptlang.org/docs/handbook/decorators.html)

</TabItem>
<TabItem value="python" label="Python">

```python
def decorator(func):
    def wrapper(*args, **kwargs):
        print("Before function call")
        result = func(*args, **kwargs)
        print("After function call")
        return result
    return wrapper

@decorator
def greet(name):
    print(f"Hello, {name}")

# Class Decorator
def add_method(cls):
    def new_method(self):
        return "New method"
    cls.new_method = new_method
    return cls

@add_method
class MyClass:
    pass
```

**Besonderheiten:**
- Decorators über Funktionen implementiert
- Unterstützt Function, Class Decorators
- Sehr flexibel und dynamisch
- Zur Laufzeit verarbeitet

**Weiterführende Links:**
- [Python Documentation - Decorators](https://docs.python.org/3/glossary.html#term-decorator)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Decorators sind noch nicht Teil des ECMAScript-Standards
// Unterstützt über Babel-Plugin oder TypeScript

// Function Decorator (manuell)
function decorator(func) {
    return function(...args) {
        console.log("Before function call");
        const result = func.apply(this, args);
        console.log("After function call");
        return result;
    };
}

const greet = decorator(function(name) {
    console.log(`Hello, ${name}`);
});
```

**Besonderheiten:**
- Decorators noch nicht Teil des ECMAScript-Standards
- Unterstützt über Babel-Plugin oder TypeScript
- Function Decorators manuell implementierbar
- Stage 3 Proposal für Decorators

**Weiterführende Links:**
- [MDN Web Docs - Decorators Proposal](https://github.com/tc39/proposal-decorators)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Benötigt: using System;

// C# unterstützt keine Decorators wie TypeScript
// Attribute werden stattdessen verwendet

[Serializable]
[Obsolete("Use NewClass instead")]
class OldClass {
    [Obsolete("Use NewMethod instead")]
    public void OldMethod() {
        Console.WriteLine("Old method");
    }
}
```

**Besonderheiten:**
- Keine Decorators wie in TypeScript
- Attribute werden stattdessen verwendet
- Zur Laufzeit über Reflection auslesbar
- Weniger flexibel als Decorators

**Weiterführende Links:**
- [Microsoft C# Documentation - Attributes](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/attributes/)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Kotlin unterstützt keine Decorators wie TypeScript
// Annotationen werden stattdessen verwendet

@Deprecated("Use NewClass instead")
class OldClass {
    @Deprecated("Use newMethod instead")
    fun oldMethod() {
        println("Old method")
    }
}
```

**Besonderheiten:**
- Keine Decorators wie in TypeScript
- Annotationen werden stattdessen verwendet
- Zur Laufzeit über Reflection auslesbar
- Weniger flexibel als Decorators

**Weiterführende Links:**
- [Kotlin Documentation - Annotations](https://kotlinlang.org/docs/annotations.html)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Ruby unterstützt keine Decorators wie TypeScript
# Module und Metaprogrammierung werden stattdessen verwendet

module Deprecated
  def self.included(base)
    base.extend(ClassMethods)
  end
  
  module ClassMethods
    def deprecated(method_name)
      alias_method "#{method_name}_old", method_name
      define_method(method_name) do |*args|
        warn "Method #{method_name} is deprecated"
        send("#{method_name}_old", *args)
      end
    end
  end
end

class MyClass
  include Deprecated
  
  deprecated def old_method
    puts "Old method"
  end
end
```

**Besonderheiten:**
- Keine Decorators wie in TypeScript
- Module und Metaprogrammierung werden stattdessen verwendet
- Sehr flexibel und dynamisch
- Zur Laufzeit verarbeitet

**Weiterführende Links:**
- [Ruby Documentation - Modules](https://ruby-doc.org/core-3.1.0/Module.html)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Clojure unterstützt keine Decorators wie TypeScript
;; Metadaten werden stattdessen verwendet

(defn ^:deprecated old-function
  "This function is deprecated"
  []
  (println "Old function"))

;; Metadaten zur Laufzeit auslesen
(if (:deprecated (meta #'old-function))
  (println "Function is deprecated"))
```

**Besonderheiten:**
- Keine Decorators wie in TypeScript
- Metadaten werden stattdessen verwendet
- Zur Laufzeit über `meta` auslesbar
- Sehr flexibel und dynamisch

**Weiterführende Links:**
- [Clojure Documentation - Metadata](https://clojure.org/reference/metadata)

</TabItem>
</Tabs>


## 16.1.7. Magic Methods

Spezielle Methoden, die automatisch aufgerufen werden, wenn bestimmte Operationen auf Objekten durchgeführt werden, wie z.B. Operator-Überladung oder String-Darstellung.

### Sprachen {#sprachen}

<Tabs availableTabs={['groovy', 'javascript', 'lua', 'perl', 'php', 'python', 'ruby', 'typescript', 'wolfram-language']} orangeTabs={['clojure']}>
<TabItem value="python" label="Python">

```python
class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    def __str__(self):
        return f"Vector({self.x}, {self.y})"
    
    def __repr__(self):
        return f"Vector({self.x}, {self.y})"
    
    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)
    
    def __len__(self):
        return 2
    
    def __getitem__(self, index):
        if index == 0:
            return self.x
        elif index == 1:
            return self.y
        raise IndexError("Index out of range")

v1 = Vector(1, 2)
v2 = Vector(3, 4)
print(v1 + v2)  # Vector(4, 6)
print(len(v1))  # 2
print(v1[0])    # 1
```

**Besonderheiten:**
- Umfangreiche Magic Methods für verschiedene Operationen
- `__init__`, `__str__`, `__repr__` für Objekt-Erstellung und Darstellung
- `__add__`, `__sub__`, etc. für Operator-Überladung
- `__getitem__`, `__setitem__` für Indexierung

**Weiterführende Links:**
- [Python Documentation - Special Methods](https://docs.python.org/3/reference/datamodel.html#special-method-names)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
class Vector
  def initialize(x, y)
    @x = x
    @y = y
  end
  
  def to_s
    "Vector(#{@x}, #{@y})"
  end
  
  def inspect
    "Vector(#{@x}, #{@y})"
  end
  
  def +(other)
    Vector.new(@x + other.x, @y + other.y)
  end
  
  def [](index)
    case index
    when 0 then @x
    when 1 then @y
    else raise IndexError, "Index out of range"
    end
  end
  
  attr_reader :x, :y
end

v1 = Vector.new(1, 2)
v2 = Vector.new(3, 4)
puts v1 + v2  # Vector(4, 6)
puts v1[0]    # 1
```

**Besonderheiten:**
- Magic Methods über spezielle Methodennamen
- `to_s`, `inspect` für String-Darstellung
- `+`, `-`, etc. für Operator-Überladung
- `[]`, `[]=` für Indexierung

**Weiterführende Links:**
- [Ruby Documentation - Special Methods](https://ruby-doc.org/core-3.1.0/doc/syntax/methods_rdoc.html)

</TabItem>
<TabItem value="php" label="PHP">

```php
class Vector {
    private $x;
    private $y;
    
    public function __construct($x, $y) {
        $this->x = $x;
        $this->y = $y;
    }
    
    public function __toString() {
        return "Vector({$this->x}, {$this->y})";
    }
    
    public function __get($name) {
        if ($name === 'x') return $this->x;
        if ($name === 'y') return $this->y;
        return null;
    }
    
    public function __call($name, $arguments) {
        if ($name === 'add') {
            return new Vector($this->x + $arguments[0], $this->y + $arguments[1]);
        }
    }
}

$v = new Vector(1, 2);
echo $v;  // Vector(1, 2)
echo $v->x;  // 1
```

**Besonderheiten:**
- Magic Methods über `__`-Präfix
- `__construct`, `__toString` für Objekt-Erstellung und Darstellung
- `__get`, `__set` für Property-Zugriff
- `__call`, `__callStatic` für dynamische Methodenaufrufe

**Weiterführende Links:**
- [PHP Documentation - Magic Methods](https://www.php.net/manual/en/language.oop5.magic.php)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    
    toString() {
        return `Vector(${this.x}, ${this.y})`;
    }
    
    valueOf() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    
    [Symbol.toPrimitive](hint) {
        if (hint === 'string') {
            return this.toString();
        }
        return this.valueOf();
    }
}

const v = new Vector(1, 2);
console.log(String(v));  // Vector(1, 2)
console.log(+v);  // 2.236...
```

**Besonderheiten:**
- Begrenzte Magic Methods
- `toString()`, `valueOf()` für Typkonvertierung
- `Symbol.toPrimitive` für erweiterte Typkonvertierung
- Keine Operator-Überladung

**Weiterführende Links:**
- [MDN Web Docs - Symbol.toPrimitive](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
class Vector {
    constructor(public x: number, public y: number) {}
    
    toString(): string {
        return `Vector(${this.x}, ${this.y})`;
    }
    
    valueOf(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    
    [Symbol.toPrimitive](hint: string): string | number {
        if (hint === 'string') {
            return this.toString();
        }
        return this.valueOf();
    }
}

const v = new Vector(1, 2);
console.log(String(v));  // Vector(1, 2)
console.log(+v);  // 2.236...
```

**Besonderheiten:**
- Magic Methods identisch mit JavaScript
- `toString()`, `valueOf()` für Typkonvertierung
- `Symbol.toPrimitive` für erweiterte Typkonvertierung
- Keine Operator-Überladung

**Weiterführende Links:**
- [TypeScript Handbook - Symbols](https://www.typescriptlang.org/docs/handbook/symbols.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
Vector = {}
Vector.__index = Vector

function Vector:new(x, y)
    local obj = {x = x, y = y}
    setmetatable(obj, Vector)
    return obj
end

function Vector:__tostring()
    return string.format("Vector(%d, %d)", self.x, self.y)
end

function Vector:__add(other)
    return Vector:new(self.x + other.x, self.y + other.y)
end

function Vector:__len()
    return 2
end

local v1 = Vector:new(1, 2)
local v2 = Vector:new(3, 4)
print(v1 + v2)  -- Vector(4, 6)
print(#v1)      -- 2
```

**Besonderheiten:**
- Magic Methods über Metamethoden
- `__tostring` für String-Darstellung
- `__add`, `__sub`, etc. für Operator-Überladung
- `__len` für Länge, `__index` für Indexierung

**Weiterführende Links:**
- [Lua Documentation - Metamethods](https://www.lua.org/manual/5.4/manual.html#2.4)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
package Vector;

sub new {
    my ($class, $x, $y) = @_;
    bless { x => $x, y => $y }, $class;
}

sub stringify {
    my ($self) = @_;
    return "Vector($self->{x}, $self->{y})";
}

use overload
    '""' => \&stringify,
    '+' => sub {
        my ($a, $b) = @_;
        return Vector->new($a->{x} + $b->{x}, $a->{y} + $b->{y});
    };

my $v1 = Vector->new(1, 2);
my $v2 = Vector->new(3, 4);
print $v1 + $v2;  # Vector(4, 6)
```

**Besonderheiten:**
- Magic Methods über `overload`-Pragma
- Unterstützt Operator-Überladung
- `stringify` für String-Darstellung
- Sehr flexibel und dynamisch

**Weiterführende Links:**
- [Perl Documentation - overload](https://perldoc.perl.org/overload)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
class Vector {
    int x
    int y
    
    Vector(int x, int y) {
        this.x = x
        this.y = y
    }
    
    String toString() {
        "Vector($x, $y)"
    }
    
    Vector plus(Vector other) {
        new Vector(x + other.x, y + other.y)
    }
    
    def getAt(int index) {
        switch(index) {
            case 0: return x
            case 1: return y
            default: throw new IndexOutOfBoundsException()
        }
    }
}

def v1 = new Vector(1, 2)
def v2 = new Vector(3, 4)
println v1 + v2  // Vector(4, 6)
println v1[0]     // 1
```

**Besonderheiten:**
- Magic Methods über spezielle Methodennamen
- `toString()` für String-Darstellung
- `plus()`, `minus()`, etc. für Operator-Überladung
- `getAt()`, `putAt()` für Indexierung

**Weiterführende Links:**
- [Groovy Documentation - Operator Overloading](https://groovy-lang.org/operators.html#Operator-Overloading)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
(defrecord Vector [x y])

(defmethod print-method Vector [v writer]
  (.write writer (str "Vector(" (:x v) ", " (:y v) ")")))

(defn vector-add [v1 v2]
  (Vector. (+ (:x v1) (:x v2)) (+ (:y v1) (:y v2))))

(def v1 (Vector. 1 2))
(def v2 (Vector. 3 4))
(println (vector-add v1 v2))  ; Vector(4, 6)
```

**Besonderheiten:**
- Magic Methods über Multimethoden
- `print-method` für String-Darstellung
- Keine direkte Operator-Überladung
- Funktionen sind First-Class-Objekte

**Weiterführende Links:**
- [Clojure Documentation - Multimethods](https://clojure.org/reference/multimethods)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* UpValues und DownValues als "Magic Methods" *)
myType /: Plus[myType[a_], myType[b_]] := myType[a + b]
myType /: Format[myType[x_]] := "MyType(" <> ToString[x] <> ")"

result = myType[3] + myType[4]  (* myType[7] *)
```

**Besonderheiten:**
- `UpValues` (via `/:`) definieren Verhalten bei übergeordneten Funktionen
- `DownValues` definieren normales Funktionsverhalten
- `FormatValues` steuern die Darstellung

**Weiterführende Links:**
- [Wolfram Language Documentation - UpValues](https://reference.wolfram.com/language/ref/UpValues.html)

</TabItem>
</Tabs>


## 16.1.8. Monkey Patching

Ermöglicht es, bestehende Klassen oder Objekte zur Laufzeit zu modifizieren, indem neue Methoden hinzugefügt oder bestehende überschrieben werden, ohne den ursprünglichen Code zu ändern.

### Sprachen {#sprachen}

<Tabs availableTabs={['clojure', 'common-lisp', 'groovy', 'javascript', 'lua', 'objective-c', 'perl', 'prolog', 'python', 'ruby', 'typescript']} orangeTabs={['php']}>
<TabItem value="ruby" label="Ruby">

```ruby
# Ursprüngliche Klasse
class String
  def original_method
    "Original"
  end
end

# Monkey Patching: Methode zur Laufzeit hinzufügen
class String
  def reverse_words
    split.reverse.join(' ')
  end
end

# Monkey Patching: Bestehende Methode überschreiben
class String
  alias_method :original_upcase, :upcase
  
  def upcase
    "PATCHED: #{original_upcase}"
  end
end

str = "hello world"
puts str.reverse_words  # world hello
puts str.upcase         # PATCHED: HELLO WORLD
```

**Besonderheiten:**
- Sehr mächtiges Monkey Patching über Klassen-Öffnung
- Unterstützt Hinzufügen und Überschreiben von Methoden
- `alias_method` für Methoden-Aliasing
- Kann zur Laufzeit auf alle Instanzen wirken

**Weiterführende Links:**
- [Ruby Documentation - Open Classes](https://ruby-doc.org/core-3.1.0/doc/syntax/classes_rdoc.html)

</TabItem>
<TabItem value="python" label="Python">

```python
# Ursprüngliche Klasse
class MyClass:
    def original_method(self):
        return "Original"

# Monkey Patching: Methode zur Laufzeit hinzufügen
def new_method(self):
    return "New method"

MyClass.new_method = new_method

# Monkey Patching: Bestehende Methode überschreiben
original = MyClass.original_method

def patched_method(self):
    return f"PATCHED: {original(self)}"

MyClass.original_method = patched_method

obj = MyClass()
print(obj.new_method())      # New method
print(obj.original_method())  # PATCHED: Original
```

**Besonderheiten:**
- Monkey Patching über direkte Methodenzuweisung
- Unterstützt Hinzufügen und Überschreiben von Methoden
- Kann zur Laufzeit auf alle Instanzen wirken
- Sehr flexibel, aber potenziell gefährlich

**Weiterführende Links:**
- [Python Documentation - Classes](https://docs.python.org/3/tutorial/classes.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Ursprüngliche Klasse
class MyClass {
    originalMethod() {
        return "Original";
    }
}

// Monkey Patching: Methode zur Laufzeit hinzufügen
MyClass.prototype.newMethod = function() {
    return "New method";
};

// Monkey Patching: Bestehende Methode überschreiben
const original = MyClass.prototype.originalMethod;
MyClass.prototype.originalMethod = function() {
    return `PATCHED: ${original.call(this)}`;
};

const obj = new MyClass();
console.log(obj.newMethod());      // New method
console.log(obj.originalMethod()); // PATCHED: Original
```

**Besonderheiten:**
- Monkey Patching über Prototype-Manipulation
- Unterstützt Hinzufügen und Überschreiben von Methoden
- Kann zur Laufzeit auf alle Instanzen wirken
- Sehr flexibel, aber potenziell gefährlich

**Weiterführende Links:**
- [MDN Web Docs - Prototype](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Ursprüngliche Klasse
class MyClass {
    originalMethod(): string {
        return "Original";
    }
}

// Monkey Patching: Methode zur Laufzeit hinzufügen
(MyClass.prototype as any).newMethod = function() {
    return "New method";
};

// Monkey Patching: Bestehende Methode überschreiben
const original = MyClass.prototype.originalMethod;
(MyClass.prototype as any).originalMethod = function() {
    return `PATCHED: ${original.call(this)}`;
};

const obj = new MyClass();
console.log((obj as any).newMethod());      // New method
console.log(obj.originalMethod());          // PATCHED: Original
```

**Besonderheiten:**
- Monkey Patching identisch mit JavaScript
- `as any` notwendig für dynamische Zugriffe
- Type-Informationen gehen zur Laufzeit verloren
- Typsicherheit zur Compile-Zeit nicht garantiert

**Weiterführende Links:**
- [TypeScript Handbook - Type Assertions](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Ursprüngliche Klasse
MyClass = {}
MyClass.__index = MyClass

function MyClass:new()
    local obj = {}
    setmetatable(obj, MyClass)
    return obj
end

function MyClass:originalMethod()
    return "Original"
end

-- Monkey Patching: Methode zur Laufzeit hinzufügen
function MyClass:newMethod()
    return "New method"
end

-- Monkey Patching: Bestehende Methode überschreiben
local original = MyClass.originalMethod
function MyClass:originalMethod()
    return "PATCHED: " .. original(self)
end

local obj = MyClass:new()
print(obj:newMethod())      -- New method
print(obj:originalMethod()) -- PATCHED: Original
```

**Besonderheiten:**
- Monkey Patching über Metatabellen
- Unterstützt Hinzufügen und Überschreiben von Methoden
- Kann zur Laufzeit auf alle Instanzen wirken
- Sehr flexibel und dynamisch

**Weiterführende Links:**
- [Lua Documentation - Metatables](https://www.lua.org/manual/5.4/manual.html#2.4)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
package MyClass;

sub new {
    bless {}, shift;
}

sub originalMethod {
    return "Original";
}

package main;

# Monkey Patching: Methode zur Laufzeit hinzufügen
*MyClass::newMethod = sub {
    return "New method";
};

# Monkey Patching: Bestehende Methode überschreiben
my $original = \&MyClass::originalMethod;
*MyClass::originalMethod = sub {
    my $self = shift;
    return "PATCHED: " . $original->($self);
};

my $obj = MyClass->new();
print $obj->newMethod(), "\n";      # New method
print $obj->originalMethod(), "\n"; # PATCHED: Original
```

**Besonderheiten:**
- Monkey Patching über Symbol-Tabellen
- Unterstützt Hinzufügen und Überschreiben von Methoden
- `*Package::Method` für Methoden-Manipulation
- Sehr flexibel und dynamisch

**Weiterführende Links:**
- [Perl Documentation - Typeglobs](https://perldoc.perl.org/perldata#Typeglobs-and-Filehandles)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Ursprüngliches Prädikat
:- dynamic greet/1.

greet(Name) :-
    format("Hello, ~w~n", [Name]).

% Monkey Patching: Bestehende Klausel überschreiben
:- retract((greet(Name) :- _)),
   assertz((greet(Name) :-
       format("PATCHED: Hello, ~w!~n", [Name]))).

?- greet(alice).  % PATCHED: Hello, alice!

% Monkey Patching: Neues Prädikat hinzufügen
:- assertz((farewell(Name) :-
       format("Goodbye, ~w~n", [Name]))).

?- farewell(bob).  % Goodbye, bob
```

**Besonderheiten:**
- Monkey Patching über `assert/1` und `retract/1`
- Klauseln können zur Laufzeit hinzugefügt, entfernt und ersetzt werden
- Prädikate müssen als `:- dynamic` deklariert sein
- Wirkt sofort auf alle nachfolgenden Aufrufe

**Weiterführende Links:**
- [SWI-Prolog Documentation - Dynamic Predicates](https://www.swi-prolog.org/pldoc/man?section=dynamic)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Ursprüngliche Klasse
class MyClass {
    def originalMethod() {
        return "Original"
    }
}

// Monkey Patching: Methode zur Laufzeit hinzufügen
MyClass.metaClass.newMethod = { ->
    return "New method"
}

// Monkey Patching: Bestehende Methode überschreiben
MyClass.metaClass.originalMethod = { ->
    return "PATCHED: Original"
}

def obj = new MyClass()
println obj.newMethod()      // New method
println obj.originalMethod() // PATCHED: Original
```

**Besonderheiten:**
- Monkey Patching über `metaClass`
- Unterstützt Hinzufügen und Überschreiben von Methoden
- Kann zur Laufzeit auf alle Instanzen wirken
- Sehr flexibel und dynamisch

**Weiterführende Links:**
- [Groovy Documentation - Metaprogramming](https://groovy-lang.org/metaprogramming.html)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Ursprüngliche Funktion
(defn original-function []
  "Original")

;; Monkey Patching: Funktion zur Laufzeit überschreiben
(def original-function-backup original-function)

(defn original-function []
  (str "PATCHED: " (original-function-backup)))

(println (original-function))  ; PATCHED: Original
```

**Besonderheiten:**
- Monkey Patching über Var-Redefinition mit `defn`/`def`
- Funktionen sind First-Class-Objekte
- Unterstützt Backup und Wiederherstellung
- `with-redefs` für temporäres Monkey Patching (z.B. in Tests)

**Weiterführende Links:**
- [Clojure Documentation - Vars](https://clojure.org/reference/vars)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Ursprüngliche Funktion
(defun original-function ()
  "Original")

;; Monkey Patching: Funktion zur Laufzeit überschreiben
(let ((original (symbol-function 'original-function)))
  (setf (symbol-function 'original-function)
        (lambda ()
          (format nil "PATCHED: ~a" (funcall original)))))

(format t "~a~%" (original-function))  ; PATCHED: Original
```

**Besonderheiten:**
- Monkey Patching über `symbol-function`
- Unterstützt Funktions-Redefinition
- Backup über lokale Variablen möglich
- Sehr flexibel und dynamisch

**Weiterführende Links:**
- [Common Lisp HyperSpec - symbol-function](http://www.lispworks.com/documentation/HyperSpec/Body/f_symb_1.htm)

</TabItem>
<TabItem value="php" label="PHP">

```php
class MyClass {
    public function originalMethod() {
        return "Original";
    }
}

// Monkey Patching über uopz Extension
// uopz_set_return(MyClass::class, 'originalMethod', 'Patched');

// Workaround: __call für dynamische Methoden
class Flexible {
    private array $methods = [];

    public function addMethod(string $name, callable $fn): void {
        $this->methods[$name] = $fn;
    }

    public function __call(string $name, array $args): mixed {
        return ($this->methods[$name])(...$args);
    }
}
```

**Besonderheiten:**
- Monkey Patching nicht direkt in Standard-PHP
- Erfordert Extensions wie `runkit7` oder `uopz`
- `__call` Magic Method als Workaround für dynamische Methoden
- Nicht empfohlen für Produktionscode

**Weiterführende Links:**
- [PHP Documentation - Magic Methods](https://www.php.net/manual/en/language.oop5.magic.php)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Benötigt: #import <objc/runtime.h>

// Method Swizzling
+ (void)load {
    Method original = class_getInstanceMethod([NSString class], @selector(lowercaseString));
    Method swizzled = class_getInstanceMethod([self class], @selector(custom_lowercaseString));
    method_exchangeImplementations(original, swizzled);
}

- (NSString *)custom_lowercaseString {
    NSLog(@"lowercaseString wurde aufgerufen");
    return [self custom_lowercaseString]; // Ruft original auf (nach Swizzling)
}
```

**Besonderheiten:**
- Method Swizzling tauscht Methodenimplementierungen zur Laufzeit
- Categories können Methoden zu bestehenden Klassen hinzufügen
- `class_addMethod`, `method_exchangeImplementations` aus der Runtime-API
- Wird häufig in Debugging und Frameworks verwendet

**Weiterführende Links:**
- [Apple Documentation - Objective-C Runtime](https://developer.apple.com/documentation/objectivec/objective-c_runtime)

</TabItem>
</Tabs>

