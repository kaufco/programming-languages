---
slug: /metaprogrammierung/reflection
title: 16.1. Reflection
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 16.1. Reflection

Reflection at runtime.

## 16.1.1. Runtime Reflection

Allows examining and manipulating information about types, classes, methods, and fields at runtime without needing to know them at compile time.

### Languages {#sprachen}

<Tabs availableTabs={['clojure', 'common-lisp', 'csharp', 'd', 'elixir', 'erlang', 'fsharp', 'go', 'groovy', 'haskell', 'java', 'javascript', 'julia', 'kotlin', 'lua', 'matlab', 'objective-c', 'object-pascal', 'ocaml', 'perl', 'php', 'prolog', 'python', 'r', 'racket', 'ruby', 'scala', 'scheme', 'swift', 'typescript', 'vbnet', 'wolfram-language']} yellowTabs={['crystal', 'dart', 'mercury', 'nim', 'rust']}>
<TabItem value="csharp" label="C#">

```csharp
// Required: using System; using System.Reflection;

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

**Special features:**
- Comprehensive reflection API via `System.Reflection`
- Supports examining private and protected members
- Enables dynamic instantiation and method calls

**Further reading:**
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

**Special features:**
- Reflection API via `java.lang.reflect`
- Supports examining private fields with `setAccessible(true)`
- Enables dynamic instantiation via `Constructor.newInstance()`

**Further reading:**
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

# Type information
print(f"Type: {type(person).__name__}")

# List attributes
attrs = dir(person)
for attr in attrs:
    if not attr.startswith('__'):
        value = getattr(person, attr, None)
        if not callable(value):
            print(f"Attribute: {attr} = {value}")

# Call method dynamically
method = getattr(person, 'greet')
method()
```

**Special features:**
- Very dynamic reflection via `dir()`, `getattr()`, `setattr()`, `hasattr()`
- `inspect` module for advanced reflection functions
- All attributes are accessible at runtime

**Further reading:**
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

// Type information
console.log(`Type: ${person.constructor.name}`);

// List properties
const props = Object.getOwnPropertyNames(person);
for (const prop of props) {
    const value = person[prop];
    if (typeof value !== 'function') {
        console.log(`Property: ${prop} = ${value}`);
    }
}

// Call method dynamically
const method = person['greet'];
method.call(person);
```

**Special features:**
- Reflection via `Object.getOwnPropertyNames()`, `Object.keys()`, `Reflect` API
- `Reflect` API provides structured reflection operations
- All properties are accessible at runtime

**Further reading:**
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

// Type information
console.log(`Type: ${person.constructor.name}`);

// List properties
const props = Object.getOwnPropertyNames(person);
for (const prop of props) {
    const value = (person as any)[prop];
    if (typeof value !== 'function') {
        console.log(`Property: ${prop} = ${value}`);
    }
}

// Call method dynamically
const method = (person as any)['greet'];
method.call(person);
```

**Special features:**
- Runtime reflection identical to JavaScript
- Type information is lost at runtime (Type Erasure)
- `as any` necessary for dynamic access

**Further reading:**
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

# Type information
puts "Type: #{person.class.name}"

# List methods
methods = person.class.instance_methods(false)
methods.each do |method|
  puts "Method: #{method}"
end

# List instance variables
vars = person.instance_variables
vars.each do |var|
  puts "Variable: #{var} = #{person.instance_variable_get(var)}"
end

# Call method dynamically
person.send(:greet)
```

**Special features:**
- Very powerful reflection via `send()`, `method()`, `instance_variables`
- `metaclass` enables metaprogramming at the class level
- All methods and variables are accessible at runtime

**Further reading:**
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

// Type information
echo "Type: " . get_class($person) . "\n";

// List properties
$reflection = new ReflectionClass($person);
$properties = $reflection->getProperties();
foreach ($properties as $property) {
    $property->setAccessible(true);
    echo "Property: {$property->getName()} = {$property->getValue($person)}\n";
}

// Call method dynamically
$method = $reflection->getMethod('greet');
$method->invoke($person);
```

**Special features:**
- Reflection API via `ReflectionClass`, `ReflectionMethod`, `ReflectionProperty`
- Supports examining private members with `setAccessible(true)`
- Enables dynamic instantiation and method calls

**Further reading:**
- [PHP Documentation - Reflection](https://www.php.net/manual/en/book.reflection.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
:- dynamic person/3.

person(alice, 30, developer).
person(bob, 25, designer).

% Inspect clauses
?- clause(person(Name, Age, _Role), true).
% Name = alice, Age = 30 ;
% Name = bob, Age = 25

% Predicate properties
?- predicate_property(person(_,_,_), number_of_clauses(N)).
% N = 2

% Term information
?- functor(person(alice, 30, developer), Name, Arity).
% Name = person, Arity = 3

% List all predicates of a module
?- predicate_property(Head, defined_in(user)),
   functor(Head, Name, Arity),
   format("~w/~w~n", [Name, Arity]).
```

**Special features:**
- `clause/2` inspects clauses of a predicate
- `predicate_property/2` provides predicate metadata
- `functor/3` and `=../2` for term inspection
- Prolog programs are data themselves — introspective by nature

**Further reading:**
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

// Type information
t := reflect.TypeOf(person)
fmt.Printf("Type: %s\n", t.Name())

// List fields
v := reflect.ValueOf(person)
for i := 0; i < v.NumField(); i++ {
    field := t.Field(i)
    fieldValue := v.Field(i)
    if fieldValue.CanInterface() {
        fmt.Printf("Field: %s = %v\n", field.Name, fieldValue.Interface())
    }
}

// Call method dynamically
method := v.MethodByName("Greet")
method.Call(nil)
```

**Special features:**
- Reflection via `reflect` package
- Only exported fields are accessible via `Interface()`
- Reflection is type-safe, but less flexible than in dynamic languages

**Further reading:**
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

// Type information
println!("Type: {}", person.type_name());
println!("TypeId: {:?}", person.as_any().type_id());

// Call method
person.greet();
```

**Special features:**
- Very limited reflection via `std::any::Any` and `TypeId`
- No direct inspection of fields or methods at runtime
- Type information is largely lost at runtime
- Advanced reflection requires macros or external crates like `bevy_reflect`

**Further reading:**
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

// Type information
let mirror = Mirror(reflecting: person)
print("Type: \(mirror.subjectType)")

// List properties
for child in mirror.children {
    if let label = child.label {
        print("Property: \(label) = \(child.value)")
    }
}

// Call method dynamically
let method = person.greet
method()
```

**Special features:**
- Reflection via `Mirror` API
- Supports examining structures and classes
- Dynamic method calls via closures possible
- Less powerful than reflection in other languages

**Further reading:**
- [Swift Documentation - Mirror](https://developer.apple.com/documentation/swift/mirror)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Required: import kotlin.reflect.full.*

class Person(val name: String, private val age: Int) {
    fun greet() {
        println("Hello, I'm $name")
    }
}

fun main() {
    val person = Person("Alice", 30)
    
    // Type information
    val kClass = person::class
    println("Type: ${kClass.simpleName}")
    
    // List properties
    kClass.memberProperties.forEach { prop ->
        prop.isAccessible = true
        println("Property: ${prop.name} = ${prop.get(person)}")
    }
    
    // Call method dynamically
    val method = kClass.functions.find { it.name == "greet" }
    method?.call(person)
}
```

**Special features:**
- Reflection via `kotlin.reflect` package
- Supports examining private members with `isAccessible = true`
- `KClass`, `KFunction`, `KProperty` for type information
- Enables dynamic instantiation and method calls

**Further reading:**
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

// Type information
val tpe = typeOf[Person]
println(s"Type: ${tpe.typeSymbol.name}")

// List methods
val methods = tpe.members.filter(_.isMethod)
methods.foreach { method =>
  println(s"Method: ${method.name}")
}

// Call method dynamically
val mirror = runtimeMirror(getClass.getClassLoader)
val instanceMirror = mirror.reflect(person)
val greetMethod = tpe.member(TermName("greet")).asMethod
instanceMirror.reflectMethod(greetMethod)()
```

**Special features:**
- Powerful reflection via `scala.reflect.runtime.universe`
- Supports both runtime and compile-time reflection
- `TypeTag` and `ClassTag` for type information
- Enables complex metaprogramming

**Further reading:**
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

// Type information
println "Type: ${person.class.name}"

// List properties
person.properties.each { key, value ->
    if (key != 'class') {
        println "Property: ${key} = ${value}"
    }
}

// Call method dynamically
person."greet"()
```

**Special features:**
- Very dynamic reflection via `properties`, `methods`, `metaClass`
- Supports dynamic method calls via string names
- `metaClass` enables metaprogramming at runtime
- All properties are accessible via `properties`

**Further reading:**
- [Groovy Documentation - Reflection](https://groovy-lang.org/metaprogramming.html#_reflection)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
(defrecord Person [name age])

(defn greet [person]
  (println (str "Hello, I'm " (:name person))))

(def person (->Person "Alice" 30))

;; Type information
(println "Type:" (type person))

;; List fields
(println "Fields:" (keys person))

;; Call function dynamically
((resolve 'greet) person)
```

**Special features:**
- Very dynamic reflection via `type`, `class`, `resolve`
- Supports metaprogramming via macros
- Functions are first-class objects
- `resolve` enables dynamic function resolution

**Further reading:**
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
  ;; Type information
  (format t "Type: ~a~%" (class-name (class-of person)))
  
  ;; List slots
  (format t "Slots: ~a~%" (mapcar #'slot-definition-name 
                                   (class-slots (class-of person))))
  
  ;; Call method dynamically
  (funcall #'greet person))
```

**Special features:**
- Powerful reflection via CLOS (Common Lisp Object System)
- `class-of`, `class-slots`, `class-direct-slots` for class information
- `find-method`, `compute-applicable-methods` for method examination
- Supports metaprogramming at the class level

**Further reading:**
- [Common Lisp HyperSpec - Classes](http://www.lispworks.com/documentation/HyperSpec/Body/t_class.htm)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
(struct person (name age) #:transparent)

(define alice (person "Alice" 30))

;; Type information
(person? alice)         ; #t
(struct? alice)         ; #t
(person-name alice)     ; "Alice"

;; Get struct info
(define-values (type skipped?) (struct-info alice))
```

**Special features:**
- Reflection via type predicates (`person?`, `struct?`)
- `struct-info` for struct type information
- `#:transparent` makes structs inspectable
- Functions are first-class objects

**Further reading:**
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

# Type information
print "Type: " . ref($person) . "\n";

# List methods
my @methods = grep { defined &{"Person::$_"} } keys %Person::;
print "Methods: @methods\n";

# Call method dynamically
$person->greet();
```

**Special features:**
- Very dynamic reflection via symbol tables (`%Package::`)
- Supports dynamic method calls via string names
- `bless` for object creation
- All methods are accessible via symbol tables

**Further reading:**
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

# Type information
println("Type: $(typeof(person))")

# List fields
field_names = fieldnames(Person)
for field in field_names
    value = getfield(person, field)
    println("Field: $field = $value")
end

# Call function dynamically
greet(person)
```

**Special features:**
- Reflection via `typeof()`, `fieldnames()`, `getfield()`
- Supports examining types at runtime
- `methods()` for function overloads
- Very powerful metaprogramming via macros

**Further reading:**
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

// Type information
print("Type: ${person.runtimeType}");

// Reflection via dart:mirrors (deprecated, but available)
// Note: dart:mirrors is not available in Flutter
// For production code, code generation should be used
```

**Special features:**
- `dart:mirrors` for reflection (deprecated, not available in Flutter)
- Code generation is preferred for production code
- `runtimeType` for basic type information
- Reflection is not supported in Flutter apps

**Further reading:**
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

-- Type information
print("Type: " .. tostring(getmetatable(person)))

-- List properties
for key, value in pairs(person) do
    if type(value) ~= "function" then
        print("Property: " .. key .. " = " .. tostring(value))
    end
end

-- Call method dynamically
person:greet()
```

**Special features:**
- Reflection via `getmetatable()`, `pairs()`, `ipairs()`
- Supports examining tables and metatables
- Dynamic method calls via string names possible
- All properties are accessible via `pairs()`

**Further reading:**
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
        
        // Type information
        Class cls = [person class];
        NSLog(@"Type: %s", class_getName(cls));
        
        // List properties
        unsigned int count;
        objc_property_t *properties = class_copyPropertyList(cls, &count);
        for (unsigned int i = 0; i < count; i++) {
            NSLog(@"Property: %s", property_getName(properties[i]));
        }
        free(properties);
        
        // Call method dynamically
        [person greet];
    }
    return 0;
}
```

**Special features:**
- Powerful reflection via Objective-C Runtime API (`objc/runtime.h`)
- Supports examining classes, methods, properties at runtime
- `class_getInstanceMethod`, `method_invoke` for dynamic method calls
- Enables complex metaprogramming

**Further reading:**
- [Apple Documentation - Objective-C Runtime](https://developer.apple.com/documentation/objectivec/objective-c_runtime)

</TabItem>
<TabItem value="d" label="D">

```d
// Required: import std.stdio; import std.traits;

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
    
    // Type information
    writeln("Type: ", person.classinfo.name);
    
    // List methods
    foreach (member; __traits(allMembers, Person)) {
        writeln("Member: ", member);
    }
    
    // Call method dynamically
    person.greet();
}
```

**Special features:**
- Reflection via `__traits`, `classinfo`
- Supports compile-time reflection via templates
- `__traits(allMembers)` for member listing
- Runtime reflection less powerful than compile-time reflection

**Further reading:**
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

# Type information
puts "Type: #{person.class.name}"

# List methods (at compile time)
# Crystal does not support full runtime reflection
# Type information is available at runtime, but method listing is not

person.greet()
```

**Special features:**
- Very limited runtime reflection
- Type information available at runtime via `.class`
- Method listing not possible at runtime
- Metaprogramming mainly at compile time via macros

**Further reading:**
- [Crystal Documentation - Metaprogramming](https://crystal-lang.org/reference/1.9/guides/metaprogramming.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Limited runtime reflection
type
  Animal = ref object of RootObj
  Dog = ref object of Animal
  Cat = ref object of Animal

var pet: Animal = Dog()

# Runtime type check with `of`
echo pet of Dog     # true
echo pet of Cat     # false
echo pet of Animal  # true

# Compile-time reflection via fieldPairs
type Person = object
  name: string
  age: int

var p = Person(name: "Alice", age: 30)
for name, value in p.fieldPairs:
  echo name, ": ", value
```

**Special features:**
- Very limited runtime reflection
- `of` operator for runtime type checks in `ref object` hierarchies
- `fieldPairs` and `fields` iterators for compile-time reflection
- No dynamic method resolution via strings

**Further reading:**
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

(* Type information *)
let () = Printf.printf "Type: person\n"

(* List fields *)
let () = 
  let fields = [("name", Obj.field (Obj.repr person) 0);
                ("age", Obj.field (Obj.repr person) 1)] in
  List.iter (fun (name, _) -> Printf.printf "Field: %s\n" name) fields

(* Call function *)
let () = greet person
```

**Special features:**
- Very limited reflection via `Obj` module
- Type information is largely lost at runtime
- Pattern matching for structured data access
- Reflection not recommended for production code

**Further reading:**
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
    
    -- Type information
    putStrLn $ "Type: " ++ show (typeOf person)
    
    -- Constructor information
    putStrLn $ "Constructor: " ++ show (toConstr person)
    
    -- Call function
    greet person
```

**Special features:**
- Very limited reflection via `Data.Data` and `Data.Typeable`
- `Typeable` for type information at runtime
- `Data` for generic programming
- Reflection not as powerful as in dynamic languages

**Further reading:**
- [Haskell Documentation - Data.Data](https://hackage.haskell.org/package/base/docs/Data-Data.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Required: open System, open System.Reflection

type Person(name: string, age: int) =
    member val Name = name with get, set
    member val Age = age with get, set
    
    member this.Greet() =
        printfn "Hello, I'm %s" this.Name

let person = Person("Alice", 30)

// Type information
let t = typeof<Person>
printfn "Type: %s" t.Name

// List properties
let properties = t.GetProperties()
for prop in properties do
    printfn "Property: %s" prop.Name

// Call method dynamically
let method = t.GetMethod("Greet")
method.Invoke(person, null) |> ignore
```

**Special features:**
- Reflection via .NET `System.Reflection` (identical to C#)
- Supports examining types, methods, properties
- `typeof<'T>` for type information
- Enables dynamic instantiation and method calls

**Further reading:**
- [F# Documentation - Reflection](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/reflection)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Required: Imports System, Imports System.Reflection

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
        
        ' Type information
        Dim t As Type = GetType(Person)
        Console.WriteLine($"Type: {t.Name}")
        
        ' List properties
        Dim properties As PropertyInfo() = t.GetProperties(BindingFlags.Public Or BindingFlags.NonPublic Or BindingFlags.Instance)
        For Each prop In properties
            Console.WriteLine($"Property: {prop.Name}")
        Next
        
        ' Call method dynamically
        Dim method As MethodInfo = t.GetMethod("Greet")
        method.Invoke(person, Nothing)
    End Sub
End Module
```

**Special features:**
- Reflection via .NET `System.Reflection` (identical to C#)
- Supports examining private and protected members
- `GetType()` for type information
- Enables dynamic instantiation and method calls

**Further reading:**
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

% Usage
% Person = person:new("Alice", 30),
% person:get_info(Person),
% person:greet(Person).
```

**Special features:**
- Very limited reflection via `erlang:get_module_info/1`
- `record_info/2` for record information
- Type information is largely lost at runtime
- Pattern matching for structured data access

**Further reading:**
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

# Usage
# person = Person.new("Alice", 30)
# Person.get_info(person)
# Person.greet(person)
```

**Special features:**
- Very limited reflection via `__MODULE__`, `__struct__`
- `Map.keys/1` for struct fields
- Type information is largely lost at runtime
- Pattern matching for structured data access

**Further reading:**
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

% Type information
fprintf('Type: %s\n', class(person));

% List properties
props = properties(person);
for i = 1:length(props)
    fprintf('Property: %s\n', props{i});
end

% Call method
person.greet();
```

**Special features:**
- Reflection via `class()`, `properties()`, `methods()`
- Supports examining classes at runtime
- `meta.class` for advanced metadata
- Less powerful than in dynamic languages

**Further reading:**
- [MATLAB Documentation - Reflection](https://www.mathworks.com/help/matlab/ref/metaclass.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Required: :- import_module deconstruct, type_desc, construct, univ.

:- type person
    --->    person(name :: string, age :: int).

main(!IO) :-
    Person = person("Alice", 30),

    % Type information
    TypeDesc = type_of(Person),
    io.format("Type: %s\n", [s(type_name(TypeDesc))], !IO),

    % Term decomposition (functor, arity, arguments)
    deconstruct(Person, do_not_allow, Functor, Arity, Args),
    io.format("Functor: %s/%d\n", [s(Functor), i(Arity)], !IO),
    io.print_line(Args, !IO),

    % Access named field
    ( if named_arg(Person, do_not_allow, "name", NameUniv) then
        io.format("Name: ", [], !IO),
        io.print_line(NameUniv, !IO)
    else
        true
    ),

    % Construct term dynamically
    NewArgs = [univ("Bob"), univ(25)],
    ( if construct(TypeDesc, 0, NewArgs) = NewPerson then
        io.print_line(NewPerson, !IO)
    else
        true
    ).
```

**Special features:**
- Runtime reflection via `deconstruct`, `construct` and `type_desc` modules
- `deconstruct/5` decomposes arbitrary terms into functor, arity and arguments (`list(univ)`)
- `named_arg/4` allows access to named fields
- `construct/3` constructs terms dynamically from type descriptor and arguments
- Type-safe reflection — all arguments as `univ` (universal type)

**Further reading:**
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

# Type information
cat("Type:", class(person), "\n")

# List fields
cat("Fields:", paste(names(person$getRefClass()$fields()), collapse = ", "), "\n")

# Call method
person$greet()
```

**Special features:**
- Reflection via `class()`, `getRefClass()`, `getClass()`
- Supports examining reference classes
- `methods()`, `fields()` for class information
- Less powerful than in dynamic languages

**Further reading:**
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

;; Type information
(display "Type: ")
(display (car person))
(newline)

;; List fields
(display "Fields: name, age")
(newline)

;; Call function
(greet person)
```

**Special features:**
- Very limited reflection
- Type information represented by data structures
- Functions are first-class objects
- Less structured reflection than in other languages

**Further reading:**
- [Scheme Documentation](https://www.scheme.com/tspl4/)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```wolfram
person = <|"name" -> "Alice", "age" -> 30|>;

(* Type information *)
Print["Type: ", Head[person]];

(* List properties *)
Print["Properties: ", Keys[person]];

(* Define function *)
greet[person_] := Print["Hello, I'm ", person["name"]];

(* Call function *)
greet[person]
```

**Special features:**
- Reflection via `Head[]`, `Keys[]`, `Attributes[]`
- Supports examining symbols and expressions
- `DownValues[]`, `UpValues[]` for function definitions
- Very powerful metaprogramming

**Further reading:**
- [Wolfram Language Documentation - Reflection](https://reference.wolfram.com/language/guide/ReflectionAndMetaProgramming.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Required: uses RTTI, TypInfo;
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

**Special features:**
- Extended RTTI since Delphi 2010 (`RTTI` Unit)
- Classic RTTI via `TypInfo` Unit (for `published` members)
- Access to types, properties, methods, fields at runtime

**Further reading:**
- [Delphi Documentation - RTTI](https://docwiki.embarcadero.com/RADStudio/en/Run-Time_Type_Information)

</TabItem>
</Tabs>


## 16.1.2. Type Information

Allows obtaining information about types at runtime, such as type name, base classes, implemented interfaces, and type characteristics.

### Languages {#sprachen}

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

**Special features:**
- Comprehensive type information via `System.Type`
- Supports examining inheritance hierarchies
- `IsClass`, `IsInterface`, `IsValueType` for type categories
- `GetInterfaces()` for implemented interfaces

**Further reading:**
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

**Special features:**
- Type information via `Class<?>` object
- Supports examining inheritance hierarchies
- `isInterface()`, `isPrimitive()`, `isArray()` for type categories
- `getInterfaces()` for implemented interfaces

**Further reading:**
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

**Special features:**
- Type information via `type()`, `__name__`, `__bases__`
- `__mro__` for Method Resolution Order
- `isinstance()` and `issubclass()` for type checks
- `__module__` for module information

**Further reading:**
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

// Prototype chain
let proto = Object.getPrototypeOf(dogInstance);
while (proto) {
    console.log(`Prototype: ${proto.constructor.name}`);
    proto = Object.getPrototypeOf(proto);
}
```

**Special features:**
- Type information via `constructor.name`, `instanceof`
- `Object.getPrototypeOf()` for prototype chain
- `typeof` for primitive types
- No direct support for interfaces

**Further reading:**
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

// Prototype chain
let proto = Object.getPrototypeOf(dogInstance);
while (proto) {
    console.log(`Prototype: ${proto.constructor.name}`);
    proto = Object.getPrototypeOf(proto);
}
```

**Special features:**
- Runtime type information identical to JavaScript
- Type information is lost at runtime (Type Erasure)
- `instanceof` for runtime type checks
- Compile-time types not available at runtime

**Further reading:**
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

**Special features:**
- Type information via `class`, `superclass`, `ancestors`
- `ancestors` for complete inheritance chain
- `included_modules` for included modules
- `is_a?`, `kind_of?` for type checks

**Further reading:**
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

**Special features:**
- Type information via `ReflectionClass`
- Supports examining inheritance hierarchies
- `getParentClass()` for base class
- `getInterfaceNames()` for implemented interfaces

**Further reading:**
- [PHP Documentation - ReflectionClass](https://www.php.net/manual/en/class.reflectionclass.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Type checks
?- atom(hello).           % true
?- number(42).            % true
?- integer(42).           % true
?- float(3.14).           % true
?- is_list([1, 2, 3]).    % true
?- compound(f(x, y)).     % true
?- var(X).                % true (X is unbound)
?- nonvar(hello).         % true

% Examine term structure
?- functor(person(alice, 30), Name, Arity).
% Name = person, Arity = 2

?- person(alice, 30) =.. List.
% List = [person, alice, 30]

% Type classification
type_of(X, variable)  :- var(X), !.
type_of(X, integer)   :- integer(X), !.
type_of(X, float)     :- float(X), !.
type_of(X, atom)      :- atom(X), !.
type_of(X, list)      :- is_list(X), !.
type_of(X, compound)  :- compound(X), !.

?- type_of(42, T).     % T = integer
?- type_of(hello, T).  % T = atom
```

**Special features:**
- Built-in type checking predicates: `atom/1`, `number/1`, `integer/1`, `float/1`, `compound/1`
- `var/1` and `nonvar/1` check variable binding status
- `functor/3` and `=../2` for term structure analysis
- No classes or inheritance — type system based on terms

**Further reading:**
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
    
    // Base types
    for i := 0; i < t.NumField(); i++ {
        field := t.Field(i)
        fmt.Printf("Field: %s (Type: %s)\n", field.Name, field.Type.Name())
    }
}
```

**Special features:**
- Type information via `reflect.Type`
- `Kind()` for basic type category
- Supports examining struct fields
- No direct support for interfaces at runtime

**Further reading:**
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
    
    // Type information
    println!("Type Name: {}", std::any::type_name::<Dog>());
    println!("TypeId: {:?}", dog.type_id());
    
    // Type comparison
    let dog2 = Dog;
    println!("Same Type: {}", dog.type_id() == dog2.type_id());
}
```

**Special features:**
- Very limited type information via `std::any::type_name` and `TypeId`
- `TypeId` for type comparisons
- No direct support for inheritance hierarchies
- Type information is largely lost at runtime

**Further reading:**
- [Rust Documentation - std::any::type_name](https://doc.rust-lang.org/std/any/fn.type_name.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
import Foundation

class Animal {}
class Dog: Animal {}

let dog = Dog()

// Type information
print("Type Name: \(type(of: dog))")
print("Type Name String: \(String(describing: type(of: dog)))")
print("Is Type of Dog: \(dog is Dog)")
print("Is Type of Animal: \(dog is Animal)")

// Metadata
let mirror = Mirror(reflecting: dog)
print("Subject Type: \(mirror.subjectType)")
```

**Special features:**
- Type information via `type(of:)`, `is`
- `Mirror` for advanced metadata
- Supports type checks at runtime
- Less detailed information than in other languages

**Further reading:**
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
    
    // Base classes
    val superclass = kClass.superclasses
    superclass.forEach { println("Superclass: ${it.simpleName}") }
    
    // Interfaces
    val interfaces = kClass.supertypes.filter { it.classifier is kotlin.reflect.KClass<*> && (it.classifier as kotlin.reflect.KClass<*>).isInterface }
    interfaces.forEach { println("Interface: ${it}") }
}
```

**Special features:**
- Type information via `KClass`
- Supports examining inheritance hierarchies
- `isData`, `isSealed`, `isAbstract` for special type characteristics
- `supertypes` for base classes and interfaces

**Further reading:**
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
  
  // Type information
  val tpe = typeOf[Dog]
  println(s"Type Name: ${tpe.typeSymbol.name}")
  println(s"Full Name: ${tpe.typeSymbol.fullName}")
  
  // Base classes
  val baseClasses = tpe.baseClasses
  baseClasses.foreach { base =>
    println(s"Base: ${base.name}")
  }
  
  // Type Tags
  println(s"Is Class: ${tpe.typeSymbol.isClass}")
  println(s"Is Trait: ${tpe.typeSymbol.isTrait}")
}
```

**Special features:**
- Type information via `TypeTag`, `typeOf`
- Supports examining inheritance hierarchies
- `baseClasses` for base classes and traits
- `typeSymbol` for symbol information

**Further reading:**
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

**Special features:**
- Type information via `.class`
- Supports examining inheritance hierarchies
- `superclass` for base class
- `interfaces` for implemented interfaces

**Further reading:**
- [Groovy Documentation - Reflection](https://groovy-lang.org/metaprogramming.html#_reflection)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
(defrecord Animal [])
(defrecord Dog [name])

(def dog (->Dog "Rex"))

;; Type Information
(println "Type:" (type dog))
(println "Class:" (class dog))

;; Fields
(println "Fields:" (keys dog))
```

**Special features:**
- Type information via `type`, `class`
- Supports inspection of Records
- Less structured type information than in OOP languages
- Functions are First-Class objects

**Further reading:**
- [Clojure Documentation - Reflection](https://clojure.org/reference/reflection)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
(defclass animal () ())
(defclass dog (animal) ())

(let ((dog-instance (make-instance 'dog)))
  ;; Type Information
  (format t "Type: ~a~%" (class-name (class-of dog-instance)))
  (format t "Superclasses: ~a~%" (mapcar #'class-name 
                                          (class-direct-superclasses (class-of dog-instance)))))
```

**Special features:**
- Type information via `class-of`, `class-name`
- Supports inspection of inheritance hierarchies
- `class-direct-superclasses` for base classes
- CLOS provides comprehensive metadata

**Further reading:**
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

# Type Information
print "Type: " . ref($dog) . "\n";
print "ISA: @Dog::ISA\n";
print "Is Animal: " . ($dog->isa('Animal') ? 'yes' : 'no') . "\n";
```

**Special features:**
- Type information via `ref()`, `isa()`
- `@ISA` for inheritance hierarchy
- Supports dynamic type checks
- Less structured type information

**Further reading:**
- [Perl Documentation - ref](https://perldoc.perl.org/functions/ref)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
abstract type Animal end
struct Dog <: Animal
    name::String
end

dog = Dog("Rex")

# Type Information
println("Type: $(typeof(dog))")
println("Supertype: $(supertype(Dog))")
println("Subtypes: $(subtypes(Animal))")
println("Is Subtype: $(Dog <: Animal)")
```

**Special features:**
- Type information via `typeof()`, `supertype()`, `subtypes()`
- `<:` for subtype checks
- Supports inspection of type hierarchies
- Very powerful type information

**Further reading:**
- [Julia Documentation - Types](https://docs.julialang.org/en/v1/manual/types/)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
class Animal {}
class Dog extends Animal {}

void main() {
  var dog = Dog();
  
  // Type Information
  print("Type: ${dog.runtimeType}");
  print("Is Type of Dog: ${dog is Dog}");
  print("Is Type of Animal: ${dog is Animal}");
}
```

**Special features:**
- Type information via `runtimeType`, `is`
- Supports runtime type checks
- `dart:mirrors` for advanced reflection (deprecated)
- Less detailed information

**Further reading:**
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

-- Type Information
print("Type: " .. tostring(getmetatable(dog)))
```

**Special features:**
- Very limited type information
- Type information via metatables
- `type()` for basic type categories
- Less structured type information

**Further reading:**
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

**Special features:**
- Type information via Objective-C Runtime API
- `class_getName()`, `class_getSuperclass()` for class information
- Supports inspection of inheritance hierarchies
- `class_isMetaClass()` for metaclasses

**Further reading:**
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

**Special features:**
- Type information via `classinfo`
- Supports inspection of inheritance hierarchies
- `__traits` for Compile-Time Reflection
- Less detailed runtime information

**Further reading:**
- [D Language Documentation - ClassInfo](https://dlang.org/spec/abi.html#class_info)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
class Animal
end

class Dog < Animal
end

dog = Dog.new

# Type Information
puts "Type: #{dog.class.name}"
puts "Is Type of Dog: #{dog.is_a?(Dog)}"
puts "Is Type of Animal: #{dog.is_a?(Animal)}"
```

**Special features:**
- Type information via `.class.name`, `is_a?`
- Supports runtime type checks
- Less detailed information
- Type information mainly available at compile time

**Further reading:**
- [Crystal Documentation - Types](https://crystal-lang.org/reference/1.9/syntax_and_semantics/types_and_methods.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
type
  Animal = ref object of RootObj
  Dog = ref object of Animal

var dog: Animal = Dog()

# Type Information
echo typeof(dog)        # Animal (static type)
echo dog of Dog         # true (Runtime-Check)
echo dog of Animal      # true
echo dog[] is Dog       # true (with dereferencing)
```

**Special features:**
- `typeof()` returns the static type (Compile-time)
- `of` for runtime type checks with `ref` hierarchies
- `is` for compile-time type comparisons
- Less detailed type information than in dynamic languages

**Further reading:**
- [Nim Documentation - Type Relations](https://nim-lang.org/docs/manual.html#type-relations)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
class animal = object end
class dog = object inherit animal end

let dog = new dog

(* Type Information *)
let () = Printf.printf "Type: %s\n" (Obj.obj (Obj.repr dog) |> string_of_int)
```

**Special features:**
- Very limited type information
- Type information is largely lost at runtime
- Pattern Matching for structured data access
- Less structured type information

**Further reading:**
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

**Special features:**
- Type information via `Data.Typeable`
- `typeOf` for type information
- Very limited runtime information
- Type information mainly available at compile time

**Further reading:**
- [Haskell Documentation - Data.Typeable](https://hackage.haskell.org/package/base/docs/Data-Typeable.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
open System

type Animal() = class end
type Dog() = inherit Animal()

let dog = Dog()

// Type Information
let t = typeof<Dog>
printfn "Type Name: %s" t.Name
printfn "Base Type: %s" (match t.BaseType with null -> "none" | bt -> bt.Name)
printfn "Is Class: %b" t.IsClass
```

**Special features:**
- Type information via .NET `System.Type` (identical to C#)
- Supports inspection of inheritance hierarchies
- `typeof<'T>` for type information
- `IsClass`, `IsInterface` for type categories

**Further reading:**
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

**Special features:**
- Type information via .NET `System.Type` (identical to C#)
- Supports inspection of inheritance hierarchies
- `GetType()` for type information
- `IsClass`, `IsInterface` for type categories

**Further reading:**
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

**Special features:**
- No general `typeof` operator available
- Type checking only via guard functions: `is_integer/1`, `is_float/1`, `is_atom/1`, `is_list/1`, `is_tuple/1`, `is_map/1`, etc.
- Type information is largely lost at runtime

**Further reading:**
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

**Special features:**
- Limited type information at runtime
- `__struct__` only available for structs
- Guard functions (`is_integer/1`, `is_map/1`, etc.) for type checking
- Pattern Matching for structured data access

**Further reading:**
- [Elixir Documentation - Basic Types](https://elixir-lang.org/getting-started/basic-types.html)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
classdef Animal
end

classdef Dog < Animal
end

dog = Dog();

% Type Information
fprintf('Type: %s\n', class(dog));
fprintf('Superclass: %s\n', class(superclasses(dog)));
fprintf('Is Type of Dog: %d\n', isa(dog, 'Dog'));
fprintf('Is Type of Animal: %d\n', isa(dog, 'Animal'));
```

**Special features:**
- Type information via `class()`, `isa()`, `superclasses()`
- Supports runtime type checks
- `meta.class` for advanced metadata
- Supports inspection of inheritance hierarchies

**Further reading:**
- [MATLAB Documentation - Classes](https://www.mathworks.com/help/matlab/matlab_oop/classes-in-matlab.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Required: :- import_module type_desc, construct.

:- type animal
    --->    cat
    ;       dog(name :: string).

main(!IO) :-
    X = dog("Rex"),

    % Determine type descriptor
    TypeDesc = type_of(X),
    io.format("Type Name: %s\n", [s(type_name(TypeDesc))], !IO),

    % Type constructor and arguments
    type_ctor_and_args(TypeDesc, TypeCtor, _TypeArgs),
    io.format("Type Ctor: %s\n", [s(type_ctor_name(TypeCtor))], !IO),
    io.format("Module: %s\n", [s(type_ctor_module_name(TypeCtor))], !IO),
    io.format("Arity: %d\n", [i(type_ctor_arity(TypeCtor))], !IO),

    % Number of functors of the type
    ( if num_functors(TypeDesc) = NumFunctors then
        io.format("Functors: %d\n", [i(NumFunctors)], !IO)
        % Output: Functors: 2 (cat and dog)
    else
        true
    ),

    % Query functor details
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

**Special features:**
- Type information via `type_desc` and `construct` modules
- `type_of/1` returns the type descriptor of any value
- `type_ctor_and_args/3` decomposes a type into constructor and arguments
- `num_functors/1` and `get_functor/5` for enumeration of type functors
- No classes/inheritance — type system based on algebraic data types

**Further reading:**
- [Mercury Library Reference - type_desc](https://www.mercurylang.org/information/doc-release/mercury_library/type_desc.html)

</TabItem>
<TabItem value="r" label="R">

```r
Animal <- setRefClass("Animal")
Dog <- setRefClass("Dog", contains = "Animal")

dog <- Dog$new()

# Type Information
cat("Type:", class(dog), "\n")
cat("Superclass:", dog$getRefClass()$superClasses(), "\n")
cat("Is Type of Dog:", is(dog, "Dog"), "\n")
```

**Special features:**
- Type information via `class()`, `is()`
- Supports runtime type checks
- `getRefClass()` for class information
- Less detailed information

**Further reading:**
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

**Special features:**
- Type information via predicates (`pair?`, `list?`, `vector?`, etc.)
- Order matters: check `list?` before `pair?` (lists are also pairs)
- Many specific predicates available

**Further reading:**
- [Scheme Documentation](https://www.scheme.com/tspl4/)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```wolfram
(* Type Information *)
dog = <|"type" -> "Dog", "name" -> "Rex"|>;

Print["Type: ", Head[dog]];
Print["Is Association: ", AssociationQ[dog]];
Print["Keys: ", Keys[dog]];

(* Type Checks *)
Print["Is String: ", StringQ["test"]];
Print["Is Number: ", NumberQ[42]];
```

**Special features:**
- Type information via `Head[]`, type predicates
- Supports many type predicates (`StringQ`, `NumberQ`, etc.)
- Very powerful metaprogramming
- Supports inspection of symbols and expressions

**Further reading:**
- [Wolfram Language Documentation - Type Checking](https://reference.wolfram.com/language/guide/TypeChecking.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Required: uses TypInfo;
var
  obj: TObject;
begin
  obj := TStringList.Create;

  // Query class name
  WriteLn(obj.ClassName);         // 'TStringList'
  WriteLn(obj.ClassType.ClassName); // 'TStringList'

  // Type hierarchy
  WriteLn(obj is TStrings);       // True
  WriteLn(obj.InheritsFrom(TStrings)); // True

  obj.Free;
end;
```

**Special features:**
- `ClassName` for the class name at runtime
- `ClassType` for the type at runtime
- `InheritsFrom` for inheritance checking
- `is` and `as` for type checking and casting

**Further reading:**
- [Delphi Documentation - TObject](https://docwiki.embarcadero.com/Libraries/en/System.TObject)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
const std = @import("std");

const Point = struct {
    x: f64,
    y: f64,
};

// Compile-Time Type Information
fn printFields(comptime T: type) void {
    const info = @typeInfo(T);
    switch (info) {
        .@"struct" => |s| {
            inline for (s.fields) |field| {
                std.debug.print("Field: {s}, Type: {s}\n", .{ field.name, @typeName(field.type) });
            }
        },
        else => {},
    }
}

// Usage
comptime {
    printFields(Point);
    // Output: Field: x, Type: f64
    //          Field: y, Type: f64
}
```

**Special features:**
- `@typeInfo(T)` provides detailed type information at compile time
- `@typeName(T)` returns the type name as a string
- `@TypeOf(expr)` returns the type of an expression
- Supports struct fields, enum fields, union fields, etc.
- Only available at compile time (no runtime reflection)

**Further reading:**
- [Zig Documentation - @typeInfo](https://ziglang.org/documentation/master/#@typeInfo)

</TabItem>
</Tabs>


## 16.1.3. Dynamic Method Invocation

Allows methods to be called dynamically at runtime without the method name needing to be known at compile time.

### Languages {#sprachen}

<Tabs availableTabs={['clojure', 'common-lisp', 'csharp', 'd', 'fsharp', 'go', 'groovy', 'java', 'javascript', 'julia', 'kotlin', 'lua', 'objective-c', 'perl', 'php', 'prolog', 'python', 'ruby', 'scala', 'swift', 'typescript', 'vbnet', 'wolfram-language']}>
<TabItem value="csharp" label="C#">

```csharp
// Required: using System.Reflection;

class Calculator {
    public int Add(int a, int b) => a + b;
    public int Multiply(int a, int b) => a * b;
}

Calculator calc = new Calculator();
Type type = typeof(Calculator);

// Call method dynamically
MethodInfo method = type.GetMethod("Add");
int result = (int)method.Invoke(calc, new object[] { 5, 3 });
Console.WriteLine($"Result: {result}");

// With method name as string
string methodName = "Multiply";
MethodInfo method2 = type.GetMethod(methodName);
int result2 = (int)method2.Invoke(calc, new object[] { 4, 7 });
Console.WriteLine($"Result: {result2}");
```

**Special features:**
- Dynamic method calls via `MethodInfo.Invoke()`
- Supports method calls with parameters
- `GetMethod()` for method search
- Type safety not guaranteed at runtime

**Further reading:**
- [Microsoft C# Documentation - MethodInfo.Invoke](https://learn.microsoft.com/en-us/dotnet/api/system.reflection.methodinfo.invoke)

</TabItem>
<TabItem value="java" label="Java">

```java
// Required: import java.lang.reflect.Method;

class Calculator {
    public int add(int a, int b) { return a + b; }
    public int multiply(int a, int b) { return a * b; }
}

Calculator calc = new Calculator();
Class<?> clazz = Calculator.class;

// Call method dynamically
Method method = clazz.getMethod("add", int.class, int.class);
int result = (int) method.invoke(calc, 5, 3);
System.out.println("Result: " + result);

// With method name as string
String methodName = "multiply";
Method method2 = clazz.getMethod(methodName, int.class, int.class);
int result2 = (int) method2.invoke(calc, 4, 7);
System.out.println("Result: " + result2);
```

**Special features:**
- Dynamic method calls via `Method.invoke()`
- Supports method calls with parameters
- `getMethod()` for method search with parameter types
- Type safety not guaranteed at runtime

**Further reading:**
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

# Call method dynamically
method = getattr(calc, 'add')
result = method(5, 3)
print(f"Result: {result}")

# With method name as string
method_name = 'multiply'
method2 = getattr(calc, method_name)
result2 = method2(4, 7)
print(f"Result: {result2}")

# Directly via string
result3 = getattr(calc, 'add')(5, 3)
```

**Special features:**
- Dynamic method calls via `getattr()`
- Supports direct calls via string names
- `hasattr()` for existence check
- Very flexible and dynamic

**Further reading:**
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

// Call method dynamically
const method = calc['add'];
const result = method.call(calc, 5, 3);
console.log(`Result: ${result}`);

// With method name as string
const methodName = 'multiply';
const method2 = calc[methodName];
const result2 = method2.call(calc, 4, 7);
console.log(`Result: ${result2}`);

// Directly via string
const result3 = calc['add'](5, 3);
```

**Special features:**
- Dynamic method calls via bracket notation
- Supports `call()`, `apply()` for explicit context binding
- Direct calls via string names possible
- Very flexible and dynamic

**Further reading:**
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

// Call method dynamically
const method = (calc as any)['add'];
const result = method.call(calc, 5, 3);
console.log(`Result: ${result}`);

// With method name as string
const methodName = 'multiply';
const method2 = (calc as any)[methodName];
const result2 = method2.call(calc, 4, 7);
console.log(`Result: ${result2}`);

// Directly via string
const result3 = (calc as any)['add'](5, 3);
```

**Special features:**
- Dynamic method calls identical to JavaScript
- `as any` necessary for dynamic access
- Type information is lost at runtime
- Type safety not guaranteed at compile time

**Further reading:**
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

# Call method dynamically
method = calc.method(:add)
result = method.call(5, 3)
puts "Result: #{result}"

# With method name as string
method_name = 'multiply'
method2 = calc.method(method_name.to_sym)
result2 = method2.call(4, 7)
puts "Result: #{result2}"

# Directly via send
result3 = calc.send(:add, 5, 3)
```

**Special features:**
- Dynamic method calls via `send()`, `method()`, `public_send()`
- Supports direct calls via symbol names
- `respond_to?()` for existence check
- Very flexible and dynamic

**Further reading:**
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

// Call method dynamically
$method = $reflection->getMethod('add');
$result = $method->invoke($calc, 5, 3);
echo "Result: $result\n";

// With method name as string
$methodName = 'multiply';
$method2 = $reflection->getMethod($methodName);
$result2 = $method2->invoke($calc, 4, 7);
echo "Result: $result2\n";

// Directly via call_user_func
$result3 = call_user_func([$calc, 'add'], 5, 3);
```

**Special features:**
- Dynamic method calls via `ReflectionMethod.invoke()`
- Supports `call_user_func()`, `call_user_func_array()`
- `getMethod()` for method search
- Type safety not guaranteed at runtime

**Further reading:**
- [PHP Documentation - ReflectionMethod.invoke](https://www.php.net/manual/en/reflectionmethod.invoke.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Dynamic predicate call
add(A, B, Result) :- Result is A + B.
multiply(A, B, Result) :- Result is A * B.

% Dynamic call via call/N
?- call(add, 5, 3, Result).
% Result = 8

% Dynamic call with atom as predicate name
invoke(MethodName, A, B, Result) :-
    Goal =.. [MethodName, A, B, Result],
    call(Goal).

?- invoke(multiply, 4, 7, Result).
% Result = 28

% Dynamic call via =.. (univ)
?- Goal =.. [add, 5, 3, R], call(Goal).
% R = 8
```

**Special features:**
- `call/N` for dynamic predicate calls with any number of arguments
- `=..` (univ) for dynamic goal construction from atom and argument list
- No difference between static and dynamic calls
- Very natural in Prolog — higher-order calls are a core feature

**Further reading:**
- [SWI-Prolog Documentation - call](https://www.swi-prolog.org/pldoc/man?predicate=call/1)

</TabItem>
<TabItem value="go" label="Go">

```go
// Required: import "reflect"

type Calculator struct{}

func (c Calculator) Add(a, b int) int {
    return a + b
}

func (c Calculator) Multiply(a, b int) int {
    return a * b
}

calc := Calculator{}
v := reflect.ValueOf(calc)

// Call method dynamically
method := v.MethodByName("Add")
result := method.Call([]reflect.Value{reflect.ValueOf(5), reflect.ValueOf(3)})
// result[0].Int() contains the result

// With method name as string
methodName := "Multiply"
method2 := v.MethodByName(methodName)
result2 := method2.Call([]reflect.Value{reflect.ValueOf(4), reflect.ValueOf(7)})
// result2[0].Int() contains the result
```

**Special features:**
- Dynamic method calls via `reflect.Value.MethodByName().Call()`
- Supports method calls with parameters via `reflect.Value`
- Type safety not guaranteed at runtime
- Less flexible than in dynamic languages

**Further reading:**
- [Go Documentation - reflect.Value.Call](https://pkg.go.dev/reflect#Value.Call)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Required: import Foundation

class Calculator {
    func add(_ a: Int, _ b: Int) -> Int {
        return a + b
    }
    
    func multiply(_ a: Int, _ b: Int) -> Int {
        return a * b
    }
}

let calc = Calculator()

// Call method dynamically via Selector
let selector = Selector("add::")
if calc.responds(to: selector) {
    let result = calc.perform(selector, with: 5, with: 3)
    if let resultValue = result?.takeUnretainedValue() as? Int {
        // resultValue contains the result
    }
}

// With method name as string (Objective-C Runtime)
let methodName = "multiply::"
let selector2 = Selector(methodName)
if calc.responds(to: selector2) {
    let result2 = calc.perform(selector2, with: 4, with: 7)
    if let resultValue2 = result2?.takeUnretainedValue() as? Int {
        // resultValue2 contains the result
    }
}
```

**Special features:**
- Dynamic method calls via Objective-C Runtime (`Selector`, `perform`)
- Supports method calls with parameters
- `responds(to:)` for existence check
- Less flexible than in purely dynamic languages

**Further reading:**
- [Apple Documentation - NSObject.perform](https://developer.apple.com/documentation/objectivec/nsobject/1418797-perform)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Required: import kotlin.reflect.full.*

class Calculator {
    fun add(a: Int, b: Int): Int = a + b
    fun multiply(a: Int, b: Int): Int = a * b
}

val calc = Calculator()
val kClass = calc::class

// Call method dynamically
val method = kClass.functions.find { it.name == "add" }
val result = method?.call(calc, 5, 3) as? Int

// With method name as string
val methodName = "multiply"
val method2 = kClass.functions.find { it.name == methodName }
val result2 = method2?.call(calc, 4, 7) as? Int
```

**Special features:**
- Dynamic method calls via `KFunction.call()`
- Supports method calls with parameters
- `functions` for method search
- Type safety not guaranteed at runtime

**Further reading:**
- [Kotlin Documentation - KFunction](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.reflect/-k-function/)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Required: import scala.reflect.runtime.universe._, import scala.reflect.runtime

class Calculator {
  def add(a: Int, b: Int): Int = a + b
  def multiply(a: Int, b: Int): Int = a * b
}

val calc = new Calculator
val mirror = runtimeMirror(getClass.getClassLoader)
val instanceMirror = mirror.reflect(calc)

// Call method dynamically
val addMethod = typeOf[Calculator].member(TermName("add")).asMethod
val result = instanceMirror.reflectMethod(addMethod)(5, 3)

// With method name as string
val methodName = "multiply"
val multiplyMethod = typeOf[Calculator].member(TermName(methodName)).asMethod
val result2 = instanceMirror.reflectMethod(multiplyMethod)(4, 7)
```

**Special features:**
- Dynamic method calls via `InstanceMirror.reflectMethod()`
- Supports method calls with parameters
- `member()` for method search
- Type safety not guaranteed at runtime

**Further reading:**
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

// Call method dynamically
def method = calc.&add
def result = method(5, 3)
println "Result: $result"

// With method name as string
def methodName = 'multiply'
def method2 = calc."$methodName"
def result2 = method2(4, 7)
println "Result: $result2"

// Directly via string
def result3 = calc."add"(5, 3)
```

**Special features:**
- Dynamic method calls via method reference (`&`), string interpolation
- Supports direct calls via string names
- Very flexible and dynamic
- `hasProperty()` for existence check

**Further reading:**
- [Groovy Documentation - Method Pointers](https://groovy-lang.org/operators.html#_method_pointer_operator)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
(defn add [a b]
  (+ a b))

(defn multiply [a b]
  (* a b))

;; Call function dynamically
(def method (resolve 'add))
(def result (method 5 3))
(println "Result:" result)

;; With function name as string
(def method-name "multiply")
(def method2 (resolve (symbol method-name)))
(def result2 (method2 4 7))
(println "Result:" result2)

;; Directly via resolve
(def result3 ((resolve 'add) 5 3))
```

**Special features:**
- Dynamic function calls via `resolve`
- Functions are First-Class objects
- Supports direct calls via symbol names
- Very flexible and dynamic

**Further reading:**
- [Clojure Documentation - resolve](https://clojure.org/reference/special_forms#resolve)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
(defun add (a b)
  (+ a b))

(defun multiply (a b)
  (* a b))

;; Call function dynamically
(let ((method (symbol-function 'add)))
  (let ((result (funcall method 5 3)))
    (format t "Result: ~a~%" result)))

;; With function name as string
(let ((method-name "multiply"))
  (let ((method (symbol-function (intern method-name))))
    (let ((result (funcall method 4 7)))
      (format t "Result: ~a~%" result))))

;; Directly via funcall
(funcall #'add 5 3)
```

**Special features:**
- Dynamic function calls via `funcall`, `symbol-function`
- Supports direct calls via symbol names
- `intern` for string-to-symbol conversion
- Very flexible and dynamic

**Further reading:**
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

# Call method dynamically
my $method = $calc->can('add');
my $result = $method->($calc, 5, 3);
print "Result: $result\n";

# With method name as string
my $methodName = 'multiply';
my $method2 = $calc->can($methodName);
my $result2 = $method2->($calc, 4, 7);
print "Result: $result2\n";

# Directly via string
my $result3 = $calc->$methodName(4, 7);
```

**Special features:**
- Dynamic method calls via `can()`, string dereferencing
- Supports direct calls via string names
- `can()` for existence check
- Very flexible and dynamic

**Further reading:**
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

# Call function dynamically
method = getfield(Main, :add)
result = method(calc, 5, 3)
println("Result: $result")

# With function name as string
method_name = "multiply"
method2 = getfield(Main, Symbol(method_name))
result2 = method2(calc, 4, 7)
println("Result: $result2")
```

**Special features:**
- Dynamic function calls via `getfield()`, `Symbol()`
- Supports direct calls via symbol names
- Functions are First-Class objects
- Very flexible and dynamic

**Further reading:**
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

-- Call method dynamically
local method = calc.add
local result = method(calc, 5, 3)
print("Result: " .. result)

-- With method name as string
local methodName = "multiply"
local method2 = calc[methodName]
local result2 = method2(calc, 4, 7)
print("Result: " .. result2)

-- Directly via string
local result3 = calc["add"](calc, 5, 3)
```

**Special features:**
- Dynamic method calls via bracket notation
- Supports direct calls via string names
- Metatables for method resolution
- Very flexible and dynamic

**Further reading:**
- [Lua Documentation - Metatables](https://www.lua.org/manual/5.4/manual.html#2.4)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Required: #import <Foundation/Foundation.h>, #import <objc/runtime.h>, #import <objc/message.h>

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

// Call method dynamically
SEL selector = @selector(add:with:);
int result = ((int (*)(id, SEL, int, int))objc_msgSend)(calc, selector, 5, 3);

// With method name as string
NSString *methodName = @"multiply:with:";
SEL selector2 = NSSelectorFromString(methodName);
int result2 = ((int (*)(id, SEL, int, int))objc_msgSend)(calc, selector2, 4, 7);
```

**Special features:**
- Dynamic method calls via `objc_msgSend`, `NSSelectorFromString`
- Supports method calls with parameters
- `performSelector:` for simpler calls
- Very powerful runtime API

**Further reading:**
- [Apple Documentation - objc_msgSend](https://developer.apple.com/documentation/objectivec/1456712-objc_msgsend)

</TabItem>
<TabItem value="d" label="D">

```d
// Required: import std.stdio;

class Calculator {
    int add(int a, int b) {
        return a + b;
    }
    
    int multiply(int a, int b) {
        return a * b;
    }
}

auto calc = new Calculator();

// Call method dynamically via Mixin
string methodName = "add";
mixin(`auto result = calc.` ~ methodName ~ `(5, 3);`);
// result contains the result
```

**Special features:**
- Dynamic method calls mainly via mixins at compile time
- Runtime reflection less powerful
- `__traits` for Compile-Time Reflection
- Less flexible than in purely dynamic languages

**Further reading:**
- [D Language Documentation - Mixins](https://dlang.org/spec/template-mixin.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Required: open System.Reflection

type Calculator() =
    member this.Add(a: int, b: int) = a + b
    member this.Multiply(a: int, b: int) = a * b

let calc = Calculator()
let t = typeof<Calculator>

// Call method dynamically
let method = t.GetMethod("Add")
let result = method.Invoke(calc, [| box 5; box 3 |]) :?> int

// With method name as string
let methodName = "Multiply"
let method2 = t.GetMethod(methodName)
let result2 = method2.Invoke(calc, [| box 4; box 7 |]) :?> int
```

**Special features:**
- Dynamic method calls via .NET `System.Reflection` (identical to C#)
- Supports method calls with parameters
- `GetMethod()` for method search
- Type safety not guaranteed at runtime

**Further reading:**
- [F# Documentation - Reflection](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/reflection)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Required: Imports System.Reflection

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

' Call method dynamically
Dim method As MethodInfo = t.GetMethod("Add")
Dim result As Integer = CInt(method.Invoke(calc, {5, 3}))

' With method name as string
Dim methodName As String = "Multiply"
Dim method2 As MethodInfo = t.GetMethod(methodName)
Dim result2 As Integer = CInt(method2.Invoke(calc, {4, 7}))
```

**Special features:**
- Dynamic method calls via .NET `System.Reflection` (identical to C#)
- Supports method calls with parameters
- `GetMethod()` for method search
- Type safety not guaranteed at runtime

**Further reading:**
- [Microsoft VB.NET Documentation - Reflection](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/concepts/reflection)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Dynamic function call *)
funcName = "Plus";
result = ToExpression[funcName][3, 4]  (* 7 *)

(* Symbol-based *)
func = Symbol["Times"];
result2 = func[3, 4]  (* 12 *)
```

**Special features:**
- `ToExpression` converts strings to expressions
- `Symbol["name"]` creates a symbol dynamically
- All functions can be called dynamically

**Further reading:**
- [Wolfram Language Documentation - ToExpression](https://reference.wolfram.com/language/ref/ToExpression.html)

</TabItem>
</Tabs>


## 16.1.4. Annotations / Attributes

Allows metadata in the form of annotations or attributes to be added to code elements, which can be read at runtime or compile time.

### Languages {#sprachen}

<Tabs availableTabs={['clojure', 'common-lisp', 'csharp', 'd', 'dart', 'fsharp', 'groovy', 'java', 'julia', 'kotlin', 'lean4', 'nim', 'objective-c', 'object-pascal', 'php', 'scala', 'swift', 'typescript', 'v', 'vbnet']} yellowTabs={['rust']} orangeTabs={['go', 'python', 'ruby']}>
<TabItem value="java" label="Java">

```java
// Required: import java.lang.annotation.*;

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

// Read annotation at runtime
Method method = Book.class.getMethod("publish");
Author author = method.getAnnotation(Author.class);
if (author != null) {
    System.out.println("Author: " + author.name() + ", Year: " + author.year());
}
```

**Special features:**
- Annotations defined via `@interface`
- `@Retention` determines when annotations are available
- `@Target` determines where annotations can be used
- Readable at runtime via reflection

**Further reading:**
- [Oracle Java Documentation - Annotations](https://docs.oracle.com/javase/tutorial/java/annotations/)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Required: using System;

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

// Read attribute at runtime
MethodInfo method = typeof(Book).GetMethod("Publish");
AuthorAttribute author = method.GetCustomAttribute<AuthorAttribute>();
if (author != null) {
    Console.WriteLine($"Author: {author.Name}, Year: {author.Year}");
}
```

**Special features:**
- Attributes via classes extending `Attribute`
- `AttributeUsage` determines where attributes can be used
- Readable at runtime via reflection
- Supports named and positional parameters

**Further reading:**
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

# Read metadata at runtime
method = Book.publish
if hasattr(method, '_author_name'):
    print(f"Author: {method._author_name}, Year: {method._author_year}")
```

**Special features:**
- Annotations implemented via decorators
- Metadata stored as function attributes
- Very flexible and dynamic
- No native annotation syntax

**Further reading:**
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

// Read annotation at runtime
val method = Book::class.members.find { it.name == "publish" }
val author = method?.annotations?.find { it is Author } as? Author
author?.let {
    println("Author: ${it.name}, Year: ${it.year}")
}
```

**Special features:**
- Annotations defined via `annotation class`
- Readable at runtime via reflection
- Supports named parameters
- `@Retention` for retention policy

**Further reading:**
- [Kotlin Documentation - Annotations](https://kotlinlang.org/docs/annotations.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Attribute (Annotations) in Lean 4
@[simp] theorem add_zero (n : Nat) : n + 0 = n := rfl

@[inline] def fastAdd (a b : Nat) : Nat := a + b

@[extern "lean_uint64_add"]
opaque UInt64.add : UInt64 → UInt64 → UInt64

-- User-defined attribute
initialize myAttr : TagAttribute ← registerTagAttribute `myTag "A user-defined tag"

@[myTag] def myFunction : Nat := 42
```

**Special features:**
- Lean 4 uses `@[...]` syntax for attributes (annotations).
- Built-in attributes: `@[simp]`, `@[inline]`, `@[extern]`, `@[reducible]`, `@[instance]`.
- User-defined attributes can be created via `registerTagAttribute`.
- Attributes are processed at compile time and influence elaboration.

**Further reading:**
- [Lean 4 Documentation - Attributes](https://lean-lang.org/lean4/doc/attributes.html)
- [Lean 4 Metaprogramming Book - Attributes](https://leanprover-community.github.io/lean4-metaprogramming-book/)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Required: import scala.annotation.StaticAnnotation, import scala.reflect.runtime.universe._

class Author(name: String, year: Int) extends StaticAnnotation

class Book {
  @Author(name = "John Doe", year = 2023)
  def publish(): Unit = {
    println("Book published")
  }
}

// Read annotation at runtime
val bookType = typeOf[Book]
val publishMethod = bookType.member(TermName("publish")).asMethod
val annotations = publishMethod.annotations
annotations.foreach { ann =>
  println(s"Annotation: $ann")
}
```

**Special features:**
- Annotations via classes extending `StaticAnnotation`
- Readable at runtime via reflection
- Supports both compile-time and runtime reflection
- `@tailrec`, `@deprecated` as built-in annotations

**Further reading:**
- [Scala Documentation - Annotations](https://docs.scala-lang.org/tour/annotations.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Rust does not support annotations at runtime
// Attributes are processed at compile time

#[derive(Debug)]
struct Book;

impl Book {
    #[allow(dead_code)]
    fn publish(&self) {
        println!("Book published");
    }
}

// Attributes are not available at runtime
// They are processed by the compiler
```

**Special features:**
- Attributes via `#[...]` syntax
- Processed at compile time
- Not available at runtime
- `#[derive(...)]` for automatic trait implementations

**Further reading:**
- [Rust Documentation - Attributes](https://doc.rust-lang.org/reference/attributes.html)

</TabItem>
<TabItem value="go" label="Go">

```go
// Required: import "reflect"

// Struct Tags as annotation replacement
type Book struct {
    Title string `json:"title" author:"John Doe" year:"2023"`
}

func (b Book) Publish() {
    // Book published
}

// Read tags at runtime
t := reflect.TypeOf(Book{})
field, _ := t.FieldByName("Title")
authorTag := field.Tag.Get("author")
yearTag := field.Tag.Get("year")
// authorTag and yearTag contain the values
```

**Special features:**
- Struct tags as annotation replacement
- Readable at runtime via reflection
- No native annotation syntax
- Often used for JSON/XML serialization

**Further reading:**
- [Go Documentation - Struct Tags](https://pkg.go.dev/reflect#StructTag)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Required: import Foundation

// Property Wrapper as annotation replacement
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

// Read metadata via Mirror
let book = Book()
let mirror = Mirror(reflecting: book)
for child in mirror.children {
    print("Property: \(child.label ?? ""), Value: \(child.value)")
}
```

**Special features:**
- Property wrappers as annotation replacement
- `@available` for availability annotations
- Less powerful than annotations in other languages
- Metadata readable via Mirror

**Further reading:**
- [Swift Documentation - Property Wrappers](https://docs.swift.org/swift-book/LanguageGuide/Properties.html#ID617)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Required: open System

[<AttributeUsage(AttributeTargets.Method)>]
type AuthorAttribute(name: string, year: int) =
    inherit Attribute()
    member this.Name = name
    member this.Year = year

type Book() =
    [<Author("John Doe", 2023)>]
    member this.Publish() =
        printfn "Book published"

// Read attribute at runtime
let method = typeof<Book>.GetMethod("Publish")
let author = method.GetCustomAttribute<AuthorAttribute>()
match author with
| null -> ()
| attr -> printfn "Author: %s, Year: %d" attr.Name attr.Year
```

**Special features:**
- Attributes via .NET `System.Attribute` (identical to C#)
- Readable at runtime via reflection
- Supports named and positional parameters
- `[<...>]` syntax for attributes

**Further reading:**
- [F# Documentation - Attributes](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/attributes)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Required: Imports System

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

' Read attribute at runtime
Dim method As Reflection.MethodInfo = GetType(Book).GetMethod("Publish")
Dim author As AuthorAttribute = method.GetCustomAttribute(Of AuthorAttribute)()
If author IsNot Nothing Then
    Console.WriteLine($"Author: {author.Name}, Year: {author.Year}")
End If
```

**Special features:**
- Attributes via .NET `System.Attribute` (identical to C#)
- Readable at runtime via reflection
- Supports named and positional parameters
- `<...>` syntax for attributes

**Further reading:**
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

// Read annotation at runtime (with dart:mirrors, deprecated)
// For production code, code generation should be used
```

**Special features:**
- Annotations via classes with `const` constructor
- `dart:mirrors` for runtime reflection (deprecated, not in Flutter)
- Code generation preferred for production code
- Annotations mainly used for code generation

**Further reading:**
- [Dart Documentation - Metadata](https://dart.dev/guides/language/language-tour#metadata)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Decorators (since TypeScript 5.0)
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

// Read metadata at runtime
const book = new Book();
const author = (book as any).__author;
if (author) {
    console.log(`Author: ${author.name}, Year: ${author.year}`);
}
```

**Special features:**
- Decorators for annotations (experimental, more stable since TS 5.0)
- Readable at runtime via metadata
- `experimentalDecorators` flag required (older versions)
- Supports Class, Method, Property Decorators

**Further reading:**
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

# Read metadata at runtime
author_info = Book.get_author
puts "Author: #{author_info[:name]}, Year: #{author_info[:year]}"
```

**Special features:**
- Annotations via modules and metaprogramming
- Very flexible and dynamic
- No native annotation syntax
- Metadata stored as class instance variables

**Further reading:**
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

// Read attribute at runtime
$reflection = new ReflectionMethod('Book', 'publish');
$attributes = $reflection->getAttributes(Author::class);
foreach ($attributes as $attribute) {
    $author = $attribute->newInstance();
    echo "Author: {$author->name}, Year: {$author->year}\n";
}
```

**Special features:**
- Attributes via `#[...]` syntax (since PHP 8.0)
- Readable at runtime via Reflection
- Supports named parameters
- `Attribute::TARGET_*` for target specification

**Further reading:**
- [PHP Documentation - Attributes](https://www.php.net/manual/en/language.attributes.php)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Metadata as annotation replacement
(defn publish
  "Publishes a book"
  {:author "John Doe"
   :year 2023}
  []
  (println "Book published"))

;; Read metadata at runtime
(let [meta-data (meta #'publish)]
  (println "Author:" (:author meta-data))
  (println "Year:" (:year meta-data)))
```

**Special features:**
- Metadata as annotation replacement
- Readable at runtime via `meta`
- Very flexible and dynamic
- Supports arbitrary key-value pairs

**Further reading:**
- [Clojure Documentation - Metadata](https://clojure.org/reference/metadata)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Metadata via properties
(defclass book ()
  ())

(defmethod publish ((b book))
  (format t "Book published~%"))

;; Set metadata
(setf (get 'publish 'author) "John Doe")
(setf (get 'publish 'year) 2023)

;; Read metadata at runtime
(format t "Author: ~a~%" (get 'publish 'author))
(format t "Year: ~a~%" (get 'publish 'year))
```

**Special features:**
- Metadata via properties
- Readable at runtime via `get`
- Very flexible and dynamic
- Supports arbitrary key-value pairs

**Further reading:**
- [Common Lisp HyperSpec - get](http://www.lispworks.com/documentation/HyperSpec/Body/f_get.htm)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Metadata via docstrings and macros
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

# Metadata via macros
macro author(name, year)
    quote
        # Metadata is processed at compile time
    end
end
```

**Special features:**
- Metadata mainly via docstrings
- Macros for compile-time metadata
- Less structured annotations
- Very powerful metaprogramming

**Further reading:**
- [Julia Documentation - Documentation](https://docs.julialang.org/en/v1/manual/documentation/)

</TabItem>
<TabItem value="d" label="D">

```d
// User-Defined Attributes (UDAs)
// Required: import std.traits;

// Define UDA
enum serializable;
struct MaxLength { int value; }

// Use UDA
@serializable
struct Person {
    @MaxLength(50)
    string name;

    @MaxLength(3)
    int age;
}

// Read UDA at compile time
static if (hasUDA!(Person, serializable)) {
    pragma(msg, "Person is serializable");
}

// Read field UDAs
alias nameUDAs = getUDAs!(Person.name, MaxLength);
static assert(nameUDAs[0].value == 50);
```

**Special features:**
- User-Defined Attributes (UDAs) for custom metadata
- UDAs are evaluated at compile time (no runtime reflection needed)
- Can be attached to types, functions, variables, and parameters
- Read via `__traits(getAttributes, ...)` or `std.traits`

**Further reading:**
- [D Language Specification - User-Defined Attributes](https://dlang.org/spec/attribute.html#uda)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
import groovy.transform.ToString
import groovy.transform.EqualsAndHashCode

// Groovy AST transformation annotations
@ToString
@EqualsAndHashCode
class Person {
    String name
    int age
}

// Define custom annotation
@interface MyAnnotation {
    String value() default ""
}

@MyAnnotation(value = "test")
class MyClass {}
```

**Special features:**
- Full compatibility with Java annotations
- Groovy provides many own AST transformation annotations (`@ToString`, `@EqualsAndHashCode`, `@Immutable`, etc.)
- Annotations can be used at compile-time and runtime

**Further reading:**
- [Groovy Documentation - Annotations](https://groovy-lang.org/objectorientation.html#_annotations)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Pragmas as annotations
proc myProc() {.noSideEffect, inline.} =
  discard

proc deprecated_proc() {.deprecated: "Use newProc instead".} =
  discard

type
  MyObj {.packed.} = object
    x: int32
    y: int32

# Custom pragmas
template myPragma() {.pragma.} = discard

proc annotatedProc() {.myPragma.} =
  echo "annotated"
```

**Special features:**
- Pragmas with `{.name.}` syntax
- Built-in pragmas: `inline`, `noSideEffect`, `deprecated`, `packed`, etc.
- Custom pragmas via `{.pragma.}` template
- Pragmas influence compiler behavior

**Further reading:**
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

  [Description('A person')]
  TPerson = class
  private
    [Description('The name')]
    FName: string;
  public
    property Name: string read FName write FName;
  end;
```

**Special features:**
- Custom Attributes inherit from `TCustomAttribute`
- Attribute syntax: `[AttributeName(params)]`
- Access via RTTI at runtime
- Since Delphi 2010

**Further reading:**
- [Delphi Documentation - Attributes](https://docwiki.embarcadero.com/RADStudio/en/Attributes)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// __attribute__ Annotations
__attribute__((deprecated("Use newMethod instead")))
- (void)oldMethod;

// Availability Annotations
- (void)newFeature NS_AVAILABLE_IOS(14_0);

// Nullability Annotations
- (nullable NSString *)findItem:(nonnull NSString *)key;

// Designated Initializer
- (instancetype)initWithName:(NSString *)name NS_DESIGNATED_INITIALIZER;
```

**Special features:**
- `__attribute__` for compiler annotations (deprecated, unavailable, etc.)
- `NS_AVAILABLE`, `NS_DEPRECATED` for availability annotations
- `nullable`, `nonnull`, `null_unspecified` for nullability
- `NS_DESIGNATED_INITIALIZER` for initializer chains

**Further reading:**
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

@[deprecated: 'Use new_function() instead']
fn old_function() {}
```

**Special features:**
- `@[name]` syntax for attributes
- `@[inline]` for inline functions
- `@[packed]` for packed structs
- `@[deprecated]` with optional message
- `@[params]` for struct-based default parameters

**Further reading:**
- [V Documentation - Attributes](https://github.com/vlang/v/blob/master/doc/docs.md#attributes)

</TabItem>
</Tabs>


## 16.1.5. Annotation Processing

Allows processing annotations at compile time and generating or transforming code before the program is executed.

### Languages {#sprachen}

<Tabs availableTabs={['java', 'kotlin', 'csharp', 'rust', 'scala', 'dart', 'go']} orangeTabs={['fsharp', 'python', 'swift', 'typescript']}>
<TabItem value="java" label="Java">

```java
// Required: import javax.annotation.processing.*, import javax.lang.model.element.*;

@SupportedAnnotationTypes("GenerateGetter")
@SupportedSourceVersion(SourceVersion.RELEASE_17)
public class GetterProcessor extends AbstractProcessor {
    @Override
    public boolean process(Set<? extends TypeElement> annotations, 
                          RoundEnvironment roundEnv) {
        for (Element element : roundEnv.getElementsAnnotatedWith(GenerateGetter.class)) {
            // Code generation based on annotation
            generateGetterMethod(element);
        }
        return true;
    }
    
    private void generateGetterMethod(Element element) {
        // Implement code generation
    }
}
```

**Special features:**
- Annotation Processing via `javax.annotation.processing`
- Runs at compile time
- Can generate and transform code
- `AbstractProcessor` as base class

**Further reading:**
- [Oracle Java Documentation - Annotation Processing](https://docs.oracle.com/javase/8/docs/api/javax/annotation/processing/package-summary.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Required: import com.google.devtools.ksp.processing.*, import com.google.devtools.ksp.symbol.*

class GetterProcessor : SymbolProcessor {
    override fun process(resolver: Resolver): List<KSAnnotated> {
        val symbols = resolver.getSymbolsWithAnnotation("GenerateGetter")
        symbols.forEach { symbol ->
            if (symbol is KSClassDeclaration) {
                // Code generation based on annotation
                generateGetterMethod(symbol)
            }
        }
        return emptyList()
    }
    
    private fun generateGetterMethod(symbol: KSClassDeclaration) {
        // Implement code generation
    }
}
```

**Special features:**
- KSP (Kotlin Symbol Processing) for annotation processing
- Runs at compile time
- Can generate and transform code
- Modern replacement for kapt (Kotlin Annotation Processing Tool)

**Further reading:**
- [Kotlin Documentation - KSP](https://kotlinlang.org/docs/ksp-overview.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Required: using Microsoft.CodeAnalysis, using Microsoft.CodeAnalysis.CSharp

[Generator]
public class GetterGenerator : ISourceGenerator {
    public void Initialize(GeneratorInitializationContext context) {
        context.RegisterForSyntaxNotifications(() => new SyntaxReceiver());
    }
    
    public void Execute(GeneratorExecutionContext context) {
        // Code generation based on annotations
        var source = GenerateGetterCode(context);
        context.AddSource("GeneratedGetter.g.cs", source);
    }
    
    private string GenerateGetterCode(GeneratorExecutionContext context) {
        // Implement code generation
        return "// Generated code";
    }
}
```

**Special features:**
- Source Generators for annotation processing
- Runs at compile time
- Can generate code and add to compilation
- `ISourceGenerator` interface

**Further reading:**
- [Microsoft C# Documentation - Source Generators](https://learn.microsoft.com/en-us/dotnet/csharp/roslyn-sdk/source-generators-overview)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Required: use proc_macro::TokenStream, use quote::quote, use syn::{parse_macro_input, DeriveInput}

#[proc_macro_derive(GenerateGetter)]
pub fn getter_derive(input: TokenStream) -> TokenStream {
    let input = parse_macro_input!(input as DeriveInput);
    
    let name = &input.ident;
    let expanded = quote! {
        impl #name {
            // Generated getter methods
        }
    };
    
    TokenStream::from(expanded)
}
```

**Special features:**
- Procedural Macros for annotation processing
- Runs at compile time
- Can generate and transform code
- `proc_macro` crate for macro development

**Further reading:**
- [Rust Documentation - Procedural Macros](https://doc.rust-lang.org/reference/procedural-macros.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Required: import scala.annotation.StaticAnnotation, import scala.meta._

class GenerateGetter extends StaticAnnotation {
  inline def apply(defn: Any): Any = meta {
    // Code generation based on annotation
    defn match {
      case cls: Defn.Class =>
        // Generate getter methods
        cls
      case _ =>
        abort("@GenerateGetter must annotate a class")
    }
  }
}
```

**Special features:**
- Macro Annotations for annotation processing
- Runs at compile time
- Can generate and transform code
- `scala.meta` for AST manipulation

**Further reading:**
- [Scala Documentation - Macros](https://docs.scala-lang.org/overviews/macros/overview.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Required: import 'package:json_annotation/json_annotation.dart';

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

**Special features:**
- Build system for annotation processing
- Runs at compile time
- Can generate and transform code
- `build_runner` for code generation

**Further reading:**
- [Dart Documentation - Code Generation](https://dart.dev/guides/libraries/create-library-packages#code-generation)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// TypeScript does not support annotation processing at compile time
// Decorators are processed at runtime
// Code generation via external tools like tsc or Babel

// Example with decorator (at runtime)
function GenerateGetter(target: any) {
    // Set metadata, but no code generation
    return target;
}

@GenerateGetter
class Book {
    title: string;
    author: string;
}
```

**Special features:**
- No native annotation processing at compile time
- Decorators are processed at runtime
- Code generation via external tools
- TypeScript Compiler API for advanced transformations

**Further reading:**
- [TypeScript Documentation - Compiler API](https://github.com/Microsoft/TypeScript/wiki/Using-the-Compiler-API)

</TabItem>
<TabItem value="python" label="Python">

```python
# Python does not support annotation processing at compile time
# Decorators are processed at runtime
# Code generation via external tools or metaprogramming

def generate_getter(cls):
    # Runtime code generation via metaprogramming
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

**Special features:**
- No native annotation processing at compile time
- Decorators are processed at runtime
- Code generation via metaprogramming at runtime
- External tools for code generation

**Further reading:**
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

// Code is generated by 'go generate'
// Generates String() method based on comment
// Execution: go generate
```

**Special features:**
- `go generate` for code generation
- Runs at compile time
- Comment-based directives
- External tools for code generation

**Further reading:**
- [Go Documentation - Generate](https://pkg.go.dev/cmd/go#hdr-Generate_Go_files_by_processing_source)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Swift does not support annotation processing at compile time
// Property Wrappers are processed at compile time, but no code generation

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

**Special features:**
- No native annotation processing at compile time
- Property Wrappers are processed at compile time
- Code generation via external tools
- Sourcery for code generation

**Further reading:**
- [Swift Documentation - Property Wrappers](https://docs.swift.org/swift-book/LanguageGuide/Properties.html#ID617)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// F# does not support annotation processing at compile time
// Type Providers for code generation at compile time

type BookProvider = JsonProvider<"""
{
    "title": "Example",
    "author": "Author"
}
""">

let book = BookProvider.GetSample()
```

**Special features:**
- Type Providers for code generation at compile time
- Runs at compile time
- Can generate code based on external data
- Less flexible than annotation processing

**Further reading:**
- [F# Documentation - Type Providers](https://learn.microsoft.com/en-us/dotnet/fsharp/tutorials/type-providers/)

</TabItem>
</Tabs>


## 16.1.6. Decorators (TypeScript)

Allows annotating classes, methods, properties, and parameters with decorators that can be processed at runtime or compile time.

### Languages {#sprachen}

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
        // Set metadata
    };
}

class User {
    @format("Hello, %s")
    name: string;
}
```

**Special features:**
- Decorators stable since TypeScript 5.0
- Supports Class, Method, Property, Parameter Decorators
- `experimentalDecorators` flag in older versions
- Processed at runtime

**Further reading:**
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

**Special features:**
- Decorators implemented via functions
- Supports Function, Class Decorators
- Very flexible and dynamic
- Processed at runtime

**Further reading:**
- [Python Documentation - Decorators](https://docs.python.org/3/glossary.html#term-decorator)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Decorators are not yet part of the ECMAScript standard
// Supported via Babel plugin or TypeScript

// Function Decorator (manual)
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

**Special features:**
- Decorators not yet part of ECMAScript standard
- Supported via Babel plugin or TypeScript
- Function Decorators can be implemented manually
- Stage 3 Proposal for Decorators

**Further reading:**
- [MDN Web Docs - Decorators Proposal](https://github.com/tc39/proposal-decorators)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Required: using System;

// C# does not support decorators like TypeScript
// Attributes are used instead

[Serializable]
[Obsolete("Use NewClass instead")]
class OldClass {
    [Obsolete("Use NewMethod instead")]
    public void OldMethod() {
        Console.WriteLine("Old method");
    }
}
```

**Special features:**
- No decorators like in TypeScript
- Attributes are used instead
- Readable at runtime via Reflection
- Less flexible than decorators

**Further reading:**
- [Microsoft C# Documentation - Attributes](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/attributes/)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Kotlin does not support decorators like TypeScript
// Annotations are used instead

@Deprecated("Use NewClass instead")
class OldClass {
    @Deprecated("Use newMethod instead")
    fun oldMethod() {
        println("Old method")
    }
}
```

**Special features:**
- No decorators like in TypeScript
- Annotations are used instead
- Readable at runtime via Reflection
- Less flexible than decorators

**Further reading:**
- [Kotlin Documentation - Annotations](https://kotlinlang.org/docs/annotations.html)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Ruby does not support decorators like TypeScript
# Modules and metaprogramming are used instead

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

**Special features:**
- No decorators like in TypeScript
- Modules and metaprogramming are used instead
- Very flexible and dynamic
- Processed at runtime

**Further reading:**
- [Ruby Documentation - Modules](https://ruby-doc.org/core-3.1.0/Module.html)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Clojure does not support decorators like TypeScript
;; Metadata is used instead

(defn ^:deprecated old-function
  "This function is deprecated"
  []
  (println "Old function"))

;; Read metadata at runtime
(if (:deprecated (meta #'old-function))
  (println "Function is deprecated"))
```

**Special features:**
- No decorators like in TypeScript
- Metadata is used instead
- Readable at runtime via `meta`
- Very flexible and dynamic

**Further reading:**
- [Clojure Documentation - Metadata](https://clojure.org/reference/metadata)

</TabItem>
</Tabs>


## 16.1.7. Magic Methods

Special methods that are automatically called when certain operations are performed on objects, such as operator overloading or string representation.

### Languages {#sprachen}

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

**Special features:**
- Extensive magic methods for various operations
- `__init__`, `__str__`, `__repr__` for object creation and representation
- `__add__`, `__sub__`, etc. for operator overloading
- `__getitem__`, `__setitem__` for indexing

**Further reading:**
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

**Special features:**
- Magic Methods via special method names
- `to_s`, `inspect` for string representation
- `+`, `-`, etc. for operator overloading
- `[]`, `[]=` for indexing

**Further reading:**
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

**Special features:**
- Magic Methods via `__` prefix
- `__construct`, `__toString` for object creation and representation
- `__get`, `__set` for property access
- `__call`, `__callStatic` for dynamic method calls

**Further reading:**
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

**Special features:**
- Limited magic methods
- `toString()`, `valueOf()` for type conversion
- `Symbol.toPrimitive` for advanced type conversion
- No operator overloading

**Further reading:**
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

**Special features:**
- Magic Methods identical to JavaScript
- `toString()`, `valueOf()` for type conversion
- `Symbol.toPrimitive` for advanced type conversion
- No operator overloading

**Further reading:**
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

**Special features:**
- Magic Methods via metamethods
- `__tostring` for string representation
- `__add`, `__sub`, etc. for operator overloading
- `__len` for length, `__index` for indexing

**Further reading:**
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

**Special features:**
- Magic Methods via `overload` pragma
- Supports operator overloading
- `stringify` for string representation
- Very flexible and dynamic

**Further reading:**
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

**Special features:**
- Magic Methods via special method names
- `toString()` for string representation
- `plus()`, `minus()`, etc. for operator overloading
- `getAt()`, `putAt()` for indexing

**Further reading:**
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

**Special features:**
- Magic Methods via multimethods
- `print-method` for string representation
- No direct operator overloading
- Functions are first-class objects

**Further reading:**
- [Clojure Documentation - Multimethods](https://clojure.org/reference/multimethods)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* UpValues und DownValues als "Magic Methods" *)
myType /: Plus[myType[a_], myType[b_]] := myType[a + b]
myType /: Format[myType[x_]] := "MyType(" <> ToString[x] <> ")"

result = myType[3] + myType[4]  (* myType[7] *)
```

**Special features:**
- `UpValues` (via `/:`) define behavior for parent functions
- `DownValues` define normal function behavior
- `FormatValues` control representation

**Further reading:**
- [Wolfram Language Documentation - UpValues](https://reference.wolfram.com/language/ref/UpValues.html)

</TabItem>
</Tabs>


## 16.1.8. Monkey Patching

Allows modifying existing classes or objects at runtime by adding new methods or overriding existing ones without changing the original code.

### Languages {#sprachen}

<Tabs availableTabs={['clojure', 'common-lisp', 'groovy', 'javascript', 'lua', 'objective-c', 'perl', 'prolog', 'python', 'ruby', 'typescript']} orangeTabs={['php']}>
<TabItem value="ruby" label="Ruby">

```ruby
# Original class
class String
  def original_method
    "Original"
  end
end

# Monkey Patching: Add method at runtime
class String
  def reverse_words
    split.reverse.join(' ')
  end
end

# Monkey Patching: Override existing method
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

**Special features:**
- Very powerful monkey patching via class opening
- Supports adding and overriding methods
- `alias_method` for method aliasing
- Can affect all instances at runtime

**Further reading:**
- [Ruby Documentation - Open Classes](https://ruby-doc.org/core-3.1.0/doc/syntax/classes_rdoc.html)

</TabItem>
<TabItem value="python" label="Python">

```python
# Original class
class MyClass:
    def original_method(self):
        return "Original"

# Monkey Patching: Add method at runtime
def new_method(self):
    return "New method"

MyClass.new_method = new_method

# Monkey Patching: Override existing method
original = MyClass.original_method

def patched_method(self):
    return f"PATCHED: {original(self)}"

MyClass.original_method = patched_method

obj = MyClass()
print(obj.new_method())      # New method
print(obj.original_method())  # PATCHED: Original
```

**Special features:**
- Monkey patching via direct method assignment
- Supports adding and overriding methods
- Can affect all instances at runtime
- Very flexible, but potentially dangerous

**Further reading:**
- [Python Documentation - Classes](https://docs.python.org/3/tutorial/classes.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Original class
class MyClass {
    originalMethod() {
        return "Original";
    }
}

// Monkey Patching: Add method at runtime
MyClass.prototype.newMethod = function() {
    return "New method";
};

// Monkey Patching: Override existing method
const original = MyClass.prototype.originalMethod;
MyClass.prototype.originalMethod = function() {
    return `PATCHED: ${original.call(this)}`;
};

const obj = new MyClass();
console.log(obj.newMethod());      // New method
console.log(obj.originalMethod()); // PATCHED: Original
```

**Special features:**
- Monkey patching via prototype manipulation
- Supports adding and overriding methods
- Can affect all instances at runtime
- Very flexible, but potentially dangerous

**Further reading:**
- [MDN Web Docs - Prototype](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Original class
class MyClass {
    originalMethod(): string {
        return "Original";
    }
}

// Monkey Patching: Add method at runtime
(MyClass.prototype as any).newMethod = function() {
    return "New method";
};

// Monkey Patching: Override existing method
const original = MyClass.prototype.originalMethod;
(MyClass.prototype as any).originalMethod = function() {
    return `PATCHED: ${original.call(this)}`;
};

const obj = new MyClass();
console.log((obj as any).newMethod());      // New method
console.log(obj.originalMethod());          // PATCHED: Original
```

**Special features:**
- Monkey patching identical to JavaScript
- `as any` necessary for dynamic access
- Type information is lost at runtime
- Type safety at compile time not guaranteed

**Further reading:**
- [TypeScript Handbook - Type Assertions](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Original class
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

-- Monkey Patching: Add method at runtime
function MyClass:newMethod()
    return "New method"
end

-- Monkey Patching: Override existing method
local original = MyClass.originalMethod
function MyClass:originalMethod()
    return "PATCHED: " .. original(self)
end

local obj = MyClass:new()
print(obj:newMethod())      -- New method
print(obj:originalMethod()) -- PATCHED: Original
```

**Special features:**
- Monkey patching via metatables
- Supports adding and overriding methods
- Can affect all instances at runtime
- Very flexible and dynamic

**Further reading:**
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

# Monkey Patching: Add method at runtime
*MyClass::newMethod = sub {
    return "New method";
};

# Monkey Patching: Override existing method
my $original = \&MyClass::originalMethod;
*MyClass::originalMethod = sub {
    my $self = shift;
    return "PATCHED: " . $original->($self);
};

my $obj = MyClass->new();
print $obj->newMethod(), "\n";      # New method
print $obj->originalMethod(), "\n"; # PATCHED: Original
```

**Special features:**
- Monkey patching via symbol tables
- Supports adding and overriding methods
- `*Package::Method` for method manipulation
- Very flexible and dynamic

**Further reading:**
- [Perl Documentation - Typeglobs](https://perldoc.perl.org/perldata#Typeglobs-and-Filehandles)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Original predicate
:- dynamic greet/1.

greet(Name) :-
    format("Hello, ~w~n", [Name]).

% Monkey Patching: Override existing clause
:- retract((greet(Name) :- _)),
   assertz((greet(Name) :-
       format("PATCHED: Hello, ~w!~n", [Name]))).

?- greet(alice).  % PATCHED: Hello, alice!

% Monkey Patching: Add new predicate
:- assertz((farewell(Name) :-
       format("Goodbye, ~w~n", [Name]))).

?- farewell(bob).  % Goodbye, bob
```

**Special features:**
- Monkey patching via `assert/1` and `retract/1`
- Clauses can be added, removed, and replaced at runtime
- Predicates must be declared as `:- dynamic`
- Takes effect immediately on all subsequent calls

**Further reading:**
- [SWI-Prolog Documentation - Dynamic Predicates](https://www.swi-prolog.org/pldoc/man?section=dynamic)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Original class
class MyClass {
    def originalMethod() {
        return "Original"
    }
}

// Monkey Patching: Add method at runtime
MyClass.metaClass.newMethod = { ->
    return "New method"
}

// Monkey Patching: Override existing method
MyClass.metaClass.originalMethod = { ->
    return "PATCHED: Original"
}

def obj = new MyClass()
println obj.newMethod()      // New method
println obj.originalMethod() // PATCHED: Original
```

**Special features:**
- Monkey patching via `metaClass`
- Supports adding and overriding methods
- Can affect all instances at runtime
- Very flexible and dynamic

**Further reading:**
- [Groovy Documentation - Metaprogramming](https://groovy-lang.org/metaprogramming.html)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Original function
(defn original-function []
  "Original")

;; Monkey Patching: Override function at runtime
(def original-function-backup original-function)

(defn original-function []
  (str "PATCHED: " (original-function-backup)))

(println (original-function))  ; PATCHED: Original
```

**Special features:**
- Monkey patching via var redefinition with `defn`/`def`
- Functions are first-class objects
- Supports backup and restoration
- `with-redefs` for temporary monkey patching (e.g., in tests)

**Further reading:**
- [Clojure Documentation - Vars](https://clojure.org/reference/vars)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Original function
(defun original-function ()
  "Original")

;; Monkey Patching: Override function at runtime
(let ((original (symbol-function 'original-function)))
  (setf (symbol-function 'original-function)
        (lambda ()
          (format nil "PATCHED: ~a" (funcall original)))))

(format t "~a~%" (original-function))  ; PATCHED: Original
```

**Special features:**
- Monkey patching via `symbol-function`
- Supports function redefinition
- Backup via local variables possible
- Very flexible and dynamic

**Further reading:**
- [Common Lisp HyperSpec - symbol-function](http://www.lispworks.com/documentation/HyperSpec/Body/f_symb_1.htm)

</TabItem>
<TabItem value="php" label="PHP">

```php
class MyClass {
    public function originalMethod() {
        return "Original";
    }
}

// Monkey patching via uopz extension
// uopz_set_return(MyClass::class, 'originalMethod', 'Patched');

// Workaround: __call for dynamic methods
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

**Special features:**
- Monkey patching not directly in standard PHP
- Requires extensions like `runkit7` or `uopz`
- `__call` magic method as workaround for dynamic methods
- Not recommended for production code

**Further reading:**
- [PHP Documentation - Magic Methods](https://www.php.net/manual/en/language.oop5.magic.php)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Required: #import <objc/runtime.h>

// Method Swizzling
+ (void)load {
    Method original = class_getInstanceMethod([NSString class], @selector(lowercaseString));
    Method swizzled = class_getInstanceMethod([self class], @selector(custom_lowercaseString));
    method_exchangeImplementations(original, swizzled);
}

- (NSString *)custom_lowercaseString {
    NSLog(@"lowercaseString was called");
    return [self custom_lowercaseString]; // Calls original (after swizzling)
}
```

**Special features:**
- Method Swizzling exchanges method implementations at runtime
- Categories can add methods to existing classes
- `class_addMethod`, `method_exchangeImplementations` from Runtime API
- Frequently used in debugging and frameworks

**Further reading:**
- [Apple Documentation - Objective-C Runtime](https://developer.apple.com/documentation/objectivec/objective-c_runtime)

</TabItem>
</Tabs>

