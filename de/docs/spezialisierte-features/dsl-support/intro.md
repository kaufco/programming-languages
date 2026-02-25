---
slug: /spezialisierte-features/dsl-support
title: 19.3. DSL Support
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 19.3. DSL Support

Builder-Pattern, Fluent APIs, Typesafe Builders, Embedded DSLs.

## 19.3.1. Builder-Pattern

Das Builder-Pattern ermöglicht die schrittweise Konstruktion komplexer Objekte durch separate Builder-Klassen.

### Sprachen {#sprachen}

<Tabs availableTabs={['cpp', 'csharp', 'dart', 'go', 'groovy', 'java', 'javascript', 'kotlin', 'php', 'python', 'ruby', 'rust', 'scala', 'swift', 'typescript']}>
<TabItem value="csharp" label="C#">

```csharp
class Person {
    public string Name { get; set; }
    public int Age { get; set; }
    public string City { get; set; }
}

class PersonBuilder {
    private Person person = new Person();
    
    public PersonBuilder WithName(string name) {
        person.Name = name;
        return this;
    }
    
    public PersonBuilder WithAge(int age) {
        person.Age = age;
        return this;
    }
    
    public PersonBuilder WithCity(string city) {
        person.City = city;
        return this;
    }
    
    public Person Build() {
        return person;
    }
}

var person = new PersonBuilder()
    .WithName("Alice")
    .WithAge(30)
    .WithCity("Berlin")
    .Build();
```

**Besonderheiten:**
- Builder-Klasse mit Fluent-Interface-Methoden
- `Build()`-Methode erstellt das finale Objekt

**Weiterführende Links:**
- [C# Design Patterns - Builder](https://learn.microsoft.com/en-us/dotnet/standard/design-guidelines/)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
class Person {
public:
    std::string name;
    int age;
    std::string city;
};

class PersonBuilder {
private:
    Person person;
    
public:
    PersonBuilder& withName(const std::string& name) {
        person.name = name;
        return *this;
    }
    
    PersonBuilder& withAge(int age) {
        person.age = age;
        return *this;
    }
    
    PersonBuilder& withCity(const std::string& city) {
        person.city = city;
        return *this;
    }
    
    Person build() {
        return person;
    }
};

Person person = PersonBuilder()
    .withName("Alice")
    .withAge(30)
    .withCity("Berlin")
    .build();
```

**Besonderheiten:**
- Builder-Klasse mit Method-Chaining durch Referenz-Rückgabe
- `build()`-Methode erstellt das finale Objekt

**Weiterführende Links:**
- [C++ Core Guidelines](https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
class Person {
  String name;
  int age;
  String city;
  
  Person({this.name, this.age, this.city});
}

class PersonBuilder {
  String _name;
  int _age;
  String _city;
  
  PersonBuilder withName(String name) {
    _name = name;
    return this;
  }
  
  PersonBuilder withAge(int age) {
    _age = age;
    return this;
  }
  
  PersonBuilder withCity(String city) {
    _city = city;
    return this;
  }
  
  Person build() {
    return Person(name: _name, age: _age, city: _city);
  }
}

var person = PersonBuilder()
    .withName("Alice")
    .withAge(30)
    .withCity("Berlin")
    .build();
```

**Besonderheiten:**
- Builder-Klasse mit Fluent-Interface-Methoden
- `build()`-Methode erstellt das finale Objekt mit Named Parameters

**Weiterführende Links:**
- [Dart Language Tour](https://dart.dev/guides/language/language-tour)

</TabItem>
<TabItem value="go" label="Go">

```go
type Person struct {
    Name string
    Age  int
    City string
}

type PersonBuilder struct {
    person Person
}

func NewPersonBuilder() *PersonBuilder {
    return &PersonBuilder{}
}

func (b *PersonBuilder) WithName(name string) *PersonBuilder {
    b.person.Name = name
    return b
}

func (b *PersonBuilder) WithAge(age int) *PersonBuilder {
    b.person.Age = age
    return b
}

func (b *PersonBuilder) WithCity(city string) *PersonBuilder {
    b.person.City = city
    return b
}

func (b *PersonBuilder) Build() Person {
    return b.person
}

person := NewPersonBuilder().
    WithName("Alice").
    WithAge(30).
    WithCity("Berlin").
    Build()
```

**Besonderheiten:**
- Builder-Struktur mit Pointer-Receiver-Methoden
- `Build()`-Methode erstellt das finale Objekt

**Weiterführende Links:**
- [Effective Go](https://go.dev/doc/effective_go)

</TabItem>
<TabItem value="java" label="Java">

```java
class Person {
    private String name;
    private int age;
    private String city;
    
    public Person(String name, int age, String city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
}

class PersonBuilder {
    private String name;
    private int age;
    private String city;
    
    public PersonBuilder withName(String name) {
        this.name = name;
        return this;
    }
    
    public PersonBuilder withAge(int age) {
        this.age = age;
        return this;
    }
    
    public PersonBuilder withCity(String city) {
        this.city = city;
        return this;
    }
    
    public Person build() {
        return new Person(name, age, city);
    }
}

Person person = new PersonBuilder()
    .withName("Alice")
    .withAge(30)
    .withCity("Berlin")
    .build();
```

**Besonderheiten:**
- Builder-Klasse mit Fluent-Interface-Methoden
- `build()`-Methode erstellt das finale Objekt

**Weiterführende Links:**
- [Java Design Patterns - Builder](https://docs.oracle.com/javase/tutorial/java/concepts/)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
class Person {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
}

class PersonBuilder {
    constructor() {
        this.name = null;
        this.age = null;
        this.city = null;
    }
    
    withName(name) {
        this.name = name;
        return this;
    }
    
    withAge(age) {
        this.age = age;
        return this;
    }
    
    withCity(city) {
        this.city = city;
        return this;
    }
    
    build() {
        return new Person(this.name, this.age, this.city);
    }
}

const person = new PersonBuilder()
    .withName("Alice")
    .withAge(30)
    .withCity("Berlin")
    .build();
```

**Besonderheiten:**
- Builder-Klasse mit Fluent-Interface-Methoden
- `build()`-Methode erstellt das finale Objekt

**Weiterführende Links:**
- [MDN Web Docs - Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
class Person(val name: String, val age: Int, val city: String)

class PersonBuilder {
    private var name: String = ""
    private var age: Int = 0
    private var city: String = ""
    
    fun withName(name: String): PersonBuilder {
        this.name = name
        return this
    }
    
    fun withAge(age: Int): PersonBuilder {
        this.age = age
        return this
    }
    
    fun withCity(city: String): PersonBuilder {
        this.city = city
        return this
    }
    
    fun build(): Person {
        return Person(name, age, city)
    }
}

val person = PersonBuilder()
    .withName("Alice")
    .withAge(30)
    .withCity("Berlin")
    .build()
```

**Besonderheiten:**
- Builder-Klasse mit Fluent-Interface-Methoden
- `build()`-Methode erstellt das finale Objekt
- Kotlin bietet auch typesafe Builders als Sprachfeature

**Weiterführende Links:**
- [Kotlin Documentation](https://kotlinlang.org/docs/home.html)

</TabItem>
<TabItem value="php" label="PHP">

```php
class Person {
    public $name;
    public $age;
    public $city;
    
    public function __construct($name, $age, $city) {
        $this->name = $name;
        $this->age = $age;
        $this->city = $city;
    }
}

class PersonBuilder {
    private $name;
    private $age;
    private $city;
    
    public function withName($name) {
        $this->name = $name;
        return $this;
    }
    
    public function withAge($age) {
        $this->age = $age;
        return $this;
    }
    
    public function withCity($city) {
        $this->city = $city;
        return $this;
    }
    
    public function build() {
        return new Person($this->name, $this->age, $this->city);
    }
}

$person = (new PersonBuilder())
    ->withName("Alice")
    ->withAge(30)
    ->withCity("Berlin")
    ->build();
```

**Besonderheiten:**
- Builder-Klasse mit Fluent-Interface-Methoden
- `build()`-Methode erstellt das finale Objekt

**Weiterführende Links:**
- [PHP Manual](https://www.php.net/manual/en/)

</TabItem>
<TabItem value="python" label="Python">

```python
class Person:
    def __init__(self, name, age, city):
        self.name = name
        self.age = age
        self.city = city

class PersonBuilder:
    def __init__(self):
        self.name = None
        self.age = None
        self.city = None
    
    def with_name(self, name):
        self.name = name
        return self
    
    def with_age(self, age):
        self.age = age
        return self
    
    def with_city(self, city):
        self.city = city
        return self
    
    def build(self):
        return Person(self.name, self.age, self.city)

person = PersonBuilder()\
    .with_name("Alice")\
    .with_age(30)\
    .with_city("Berlin")\
    .build()
```

**Besonderheiten:**
- Builder-Klasse mit Fluent-Interface-Methoden
- `build()`-Methode erstellt das finale Objekt
- Method-Chaining mit Backslash für Zeilenumbrüche

**Weiterführende Links:**
- [Python Documentation](https://docs.python.org/3/)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
class Person
  attr_accessor :name, :age, :city
  
  def initialize(name, age, city)
    @name = name
    @age = age
    @city = city
  end
end

class PersonBuilder
  def initialize
    @name = nil
    @age = nil
    @city = nil
  end
  
  def with_name(name)
    @name = name
    self
  end
  
  def with_age(age)
    @age = age
    self
  end
  
  def with_city(city)
    @city = city
    self
  end
  
  def build
    Person.new(@name, @age, @city)
  end
end

person = PersonBuilder.new
  .with_name("Alice")
  .with_age(30)
  .with_city("Berlin")
  .build
```

**Besonderheiten:**
- Builder-Klasse mit Fluent-Interface-Methoden
- `build()`-Methode erstellt das finale Objekt
- Method-Chaining durch explizites `self`-Return

**Weiterführende Links:**
- [Ruby Documentation](https://docs.ruby-lang.org/en/)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
struct Person {
    name: String,
    age: u32,
    city: String,
}

struct PersonBuilder {
    name: Option<String>,
    age: Option<u32>,
    city: Option<String>,
}

impl PersonBuilder {
    fn new() -> Self {
        PersonBuilder {
            name: None,
            age: None,
            city: None,
        }
    }
    
    fn with_name(mut self, name: String) -> Self {
        self.name = Some(name);
        self
    }
    
    fn with_age(mut self, age: u32) -> Self {
        self.age = Some(age);
        self
    }
    
    fn with_city(mut self, city: String) -> Self {
        self.city = Some(city);
        self
    }
    
    fn build(self) -> Person {
        Person {
            name: self.name.unwrap(),
            age: self.age.unwrap(),
            city: self.city.unwrap(),
        }
    }
}

let person = PersonBuilder::new()
    .with_name("Alice".to_string())
    .with_age(30)
    .with_city("Berlin".to_string())
    .build();
```

**Besonderheiten:**
- Builder-Struktur mit `Option`-Typen für optionale Felder
- `build()`-Methode erstellt das finale Objekt
- Ownership-Semantik durch `self`-Parameter

**Weiterführende Links:**
- [The Rust Programming Language](https://doc.rust-lang.org/book/)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
case class Person(name: String, age: Int, city: String)

class PersonBuilder {
  private var name: String = ""
  private var age: Int = 0
  private var city: String = ""
  
  def withName(name: String): PersonBuilder = {
    this.name = name
    this
  }
  
  def withAge(age: Int): PersonBuilder = {
    this.age = age
    this
  }
  
  def withCity(city: String): PersonBuilder = {
    this.city = city
    this
  }
  
  def build(): Person = {
    Person(name, age, city)
  }
}

val person = new PersonBuilder()
  .withName("Alice")
  .withAge(30)
  .withCity("Berlin")
  .build()
```

**Besonderheiten:**
- Builder-Klasse mit Fluent-Interface-Methoden
- `build()`-Methode erstellt das finale Objekt
- Case Classes für immutable Objekte

**Weiterführende Links:**
- [Scala Documentation](https://docs.scala-lang.org/)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
struct Person {
    let name: String
    let age: Int
    let city: String
}

class PersonBuilder {
    private var name: String = ""
    private var age: Int = 0
    private var city: String = ""
    
    func withName(_ name: String) -> PersonBuilder {
        self.name = name
        return self
    }
    
    func withAge(_ age: Int) -> PersonBuilder {
        self.age = age
        return self
    }
    
    func withCity(_ city: String) -> PersonBuilder {
        self.city = city
        return self
    }
    
    func build() -> Person {
        return Person(name: name, age: age, city: city)
    }
}

let person = PersonBuilder()
    .withName("Alice")
    .withAge(30)
    .withCity("Berlin")
    .build()
```

**Besonderheiten:**
- Builder-Klasse mit Fluent-Interface-Methoden
- `build()`-Methode erstellt das finale Objekt

**Weiterführende Links:**
- [The Swift Programming Language](https://docs.swift.org/swift-book/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
class Person {
    constructor(
        public name: string,
        public age: number,
        public city: string
    ) {}
}

class PersonBuilder {
    private name: string = "";
    private age: number = 0;
    private city: string = "";
    
    withName(name: string): PersonBuilder {
        this.name = name;
        return this;
    }
    
    withAge(age: number): PersonBuilder {
        this.age = age;
        return this;
    }
    
    withCity(city: string): PersonBuilder {
        this.city = city;
        return this;
    }
    
    build(): Person {
        return new Person(this.name, this.age, this.city);
    }
}

const person = new PersonBuilder()
    .withName("Alice")
    .withAge(30)
    .withCity("Berlin")
    .build();
```

**Besonderheiten:**
- Builder-Klasse mit Fluent-Interface-Methoden
- `build()`-Methode erstellt das finale Objekt

**Weiterführende Links:**
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// MarkupBuilder für XML/HTML
import groovy.xml.MarkupBuilder

def writer = new StringWriter()
def xml = new MarkupBuilder(writer)
xml.html {
    head {
        title("Meine Seite")
    }
    body {
        h1("Hallo Welt")
        p("Inhalt")
    }
}

// @Builder AST-Transformation
import groovy.transform.builder.Builder

@Builder
class Person {
    String name
    int age
    String email
}

def person = Person.builder()
    .name("Max")
    .age(30)
    .email("max@example.com")
    .build()
```

**Besonderheiten:**
- Eingebaute Builder: `MarkupBuilder` (XML/HTML), `JsonBuilder` (JSON), `StreamingJsonBuilder`
- `@Builder` AST-Transformation generiert Builder-Pattern automatisch
- Closures ermöglichen natürliche Builder-Syntax ohne explizite Builder-Klasse

**Weiterführende Links:**
- [Groovy Documentation - Builders](https://groovy-lang.org/dsls.html#_builders)

</TabItem>
</Tabs>


## 19.3.2. Fluent API / Method Chaining

Fluent APIs ermöglichen die Verkettung von Methodenaufrufen durch Rückgabe des Objekts selbst.

### Sprachen {#sprachen}

<Tabs availableTabs={['cpp', 'csharp', 'dart', 'go', 'groovy', 'java', 'javascript', 'kotlin', 'php', 'python', 'ruby', 'rust', 'scala', 'swift', 'typescript']}>
<TabItem value="csharp" label="C#">

```csharp
class StringBuilder {
    private string text = "";
    
    public StringBuilder Append(string value) {
        text += value;
        return this;
    }
    
    public StringBuilder AppendLine(string value) {
        text += value + "\n";
        return this;
    }
    
    public override string ToString() {
        return text;
    }
}

var result = new StringBuilder()
    .Append("Hello")
    .Append(" ")
    .AppendLine("World")
    .ToString();
```

**Besonderheiten:**
- Methoden geben `this` zurück für Method Chaining
- Ermöglicht flüssige, lesbare API-Aufrufe

**Weiterführende Links:**
- [C# Design Guidelines - Fluent Interfaces](https://learn.microsoft.com/en-us/dotnet/standard/design-guidelines/)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
class StringBuilder {
private:
    std::string text;
    
public:
    StringBuilder& append(const std::string& value) {
        text += value;
        return *this;
    }
    
    StringBuilder& appendLine(const std::string& value) {
        text += value + "\n";
        return *this;
    }
    
    std::string toString() const {
        return text;
    }
};

std::string result = StringBuilder()
    .append("Hello")
    .append(" ")
    .appendLine("World")
    .toString();
```

**Besonderheiten:**
- Methoden geben Referenz auf `*this` zurück für Method Chaining
- Ermöglicht flüssige, lesbare API-Aufrufe

**Weiterführende Links:**
- [C++ Core Guidelines](https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
class StringBuilder {
  String _text = "";
  
  StringBuilder append(String value) {
    _text += value;
    return this;
  }
  
  StringBuilder appendLine(String value) {
    _text += value + "\n";
    return this;
  }
  
  String toString() {
    return _text;
  }
}

String result = StringBuilder()
    .append("Hello")
    .append(" ")
    .appendLine("World")
    .toString();
```

**Besonderheiten:**
- Methoden geben `this` zurück für Method Chaining
- Ermöglicht flüssige, lesbare API-Aufrufe

**Weiterführende Links:**
- [Dart Language Tour](https://dart.dev/guides/language/language-tour)

</TabItem>
<TabItem value="go" label="Go">

```go
type StringBuilder struct {
    text string
}

func (sb *StringBuilder) Append(value string) *StringBuilder {
    sb.text += value
    return sb
}

func (sb *StringBuilder) AppendLine(value string) *StringBuilder {
    sb.text += value + "\n"
    return sb
}

func (sb *StringBuilder) String() string {
    return sb.text
}

result := (&StringBuilder{}).
    Append("Hello").
    Append(" ").
    AppendLine("World").
    String()
```

**Besonderheiten:**
- Methoden mit Pointer-Receiver geben Pointer zurück für Method Chaining
- Ermöglicht flüssige, lesbare API-Aufrufe

**Weiterführende Links:**
- [Effective Go](https://go.dev/doc/effective_go)

</TabItem>
<TabItem value="java" label="Java">

```java
class QueryBuilder {
    private String table = "";
    private String condition = "";
    private int limit = -1;

    public QueryBuilder from(String table) {
        this.table = table;
        return this;
    }

    public QueryBuilder where(String condition) {
        this.condition = condition;
        return this;
    }

    public QueryBuilder limit(int limit) {
        this.limit = limit;
        return this;
    }

    public String build() {
        return "SELECT * FROM " + table +
               (condition.isEmpty() ? "" : " WHERE " + condition) +
               (limit > 0 ? " LIMIT " + limit : "");
    }
}

String query = new QueryBuilder()
    .from("users")
    .where("age > 18")
    .limit(10)
    .build();
```

**Besonderheiten:**
- Methoden geben `this` zurück für Method Chaining
- Ermöglicht flüssige, lesbare API-Aufrufe
- Java's `StringBuilder` und Stream API verwenden dieses Pattern

**Weiterführende Links:**
- [Java Documentation - StringBuilder](https://docs.oracle.com/javase/8/docs/api/java/lang/StringBuilder.html)

</TabItem>

<TabItem value="javascript" label="JavaScript">

```javascript
class StringBuilder {
    constructor() {
        this.text = "";
    }
    
    append(value) {
        this.text += value;
        return this;
    }
    
    appendLine(value) {
        this.text += value + "\n";
        return this;
    }
    
    toString() {
        return this.text;
    }
}

const result = new StringBuilder()
    .append("Hello")
    .append(" ")
    .appendLine("World")
    .toString();
```

**Besonderheiten:**
- Methoden geben `this` zurück für Method Chaining
- Ermöglicht flüssige, lesbare API-Aufrufe

**Weiterführende Links:**
- [MDN Web Docs - Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
class StringBuilder {
    private var text = ""
    
    fun append(value: String): StringBuilder {
        text += value
        return this
    }
    
    fun appendLine(value: String): StringBuilder {
        text += value + "\n"
        return this
    }
    
    override fun toString(): String {
        return text
    }
}

val result = StringBuilder()
    .append("Hello")
    .append(" ")
    .appendLine("World")
    .toString()
```

**Besonderheiten:**
- Methoden geben `this` zurück für Method Chaining
- Ermöglicht flüssige, lesbare API-Aufrufe
- Kotlin's `StringBuilder` verwendet dieses Pattern

**Weiterführende Links:**
- [Kotlin Documentation](https://kotlinlang.org/docs/home.html)

</TabItem>
<TabItem value="php" label="PHP">

```php
class StringBuilder {
    private $text = "";
    
    public function append($value) {
        $this->text .= $value;
        return $this;
    }
    
    public function appendLine($value) {
        $this->text .= $value . "\n";
        return $this;
    }
    
    public function __toString() {
        return $this->text;
    }
}

$result = (new StringBuilder())
    ->append("Hello")
    ->append(" ")
    ->appendLine("World")
    ->__toString();
```

**Besonderheiten:**
- Methoden geben `$this` zurück für Method Chaining
- Ermöglicht flüssige, lesbare API-Aufrufe

**Weiterführende Links:**
- [PHP Manual](https://www.php.net/manual/en/)

</TabItem>
<TabItem value="python" label="Python">

```python
class StringBuilder:
    def __init__(self):
        self.text = ""
    
    def append(self, value):
        self.text += value
        return self
    
    def append_line(self, value):
        self.text += value + "\n"
        return self
    
    def __str__(self):
        return self.text

result = StringBuilder()\
    .append("Hello")\
    .append(" ")\
    .append_line("World")\
    .__str__()
```

**Besonderheiten:**
- Methoden geben `self` zurück für Method Chaining
- Ermöglicht flüssige, lesbare API-Aufrufe
- Method-Chaining mit Backslash für Zeilenumbrüche

**Weiterführende Links:**
- [Python Documentation](https://docs.python.org/3/)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
class StringBuilder
  def initialize
    @text = ""
  end
  
  def append(value)
    @text += value
    self
  end
  
  def append_line(value)
    @text += value + "\n"
    self
  end
  
  def to_s
    @text
  end
end

result = StringBuilder.new
  .append("Hello")
  .append(" ")
  .append_line("World")
  .to_s
```

**Besonderheiten:**
- Methoden geben explizit `self` zurück für Method Chaining
- Ermöglicht flüssige, lesbare API-Aufrufe

**Weiterführende Links:**
- [Ruby Documentation](https://docs.ruby-lang.org/en/)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
struct StringBuilder {
    text: String,
}

impl StringBuilder {
    fn new() -> Self {
        StringBuilder {
            text: String::new(),
        }
    }
    
    fn append(mut self, value: &str) -> Self {
        self.text.push_str(value);
        self
    }
    
    fn append_line(mut self, value: &str) -> Self {
        self.text.push_str(value);
        self.text.push('\n');
        self
    }
    
    fn to_string(self) -> String {
        self.text
    }
}

let result = StringBuilder::new()
    .append("Hello")
    .append(" ")
    .append_line("World")
    .to_string();
```

**Besonderheiten:**
- Methoden nehmen `self` by value und geben es zurück für Method Chaining
- Ermöglicht flüssige, lesbare API-Aufrufe
- Ownership-Semantik durch `self`-Parameter

**Weiterführende Links:**
- [The Rust Programming Language](https://doc.rust-lang.org/book/)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
class StringBuilder {
  private var text: String = ""
  
  def append(value: String): StringBuilder = {
    text += value
    this
  }
  
  def appendLine(value: String): StringBuilder = {
    text += value + "\n"
    this
  }
  
  override def toString: String = {
    text
  }
}

val result = new StringBuilder()
  .append("Hello")
  .append(" ")
  .appendLine("World")
  .toString
```

**Besonderheiten:**
- Methoden geben `this` zurück für Method Chaining
- Ermöglicht flüssige, lesbare API-Aufrufe
- Scala's `StringBuilder` verwendet dieses Pattern

**Weiterführende Links:**
- [Scala Documentation](https://docs.scala-lang.org/)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
class StringBuilder {
    private var text: String = ""
    
    func append(_ value: String) -> StringBuilder {
        text += value
        return self
    }
    
    func appendLine(_ value: String) -> StringBuilder {
        text += value + "\n"
        return self
    }
    
    func toString() -> String {
        return text
    }
}

let result = StringBuilder()
    .append("Hello")
    .append(" ")
    .appendLine("World")
    .toString()
```

**Besonderheiten:**
- Methoden geben `self` zurück für Method Chaining
- Ermöglicht flüssige, lesbare API-Aufrufe

**Weiterführende Links:**
- [The Swift Programming Language](https://docs.swift.org/swift-book/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
class StringBuilder {
    private text: string = "";
    
    append(value: string): StringBuilder {
        this.text += value;
        return this;
    }
    
    appendLine(value: string): StringBuilder {
        this.text += value + "\n";
        return this;
    }
    
    toString(): string {
        return this.text;
    }
}

const result = new StringBuilder()
    .append("Hello")
    .append(" ")
    .appendLine("World")
    .toString();
```

**Besonderheiten:**
- Methoden geben `this` zurück für Method Chaining
- Ermöglicht flüssige, lesbare API-Aufrufe

**Weiterführende Links:**
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Method Chaining mit Collection-Methoden
def result = [5, 3, 8, 1, 9, 2]
    .findAll { it > 3 }
    .collect { it * 2 }
    .sort()
    .join(", ")

println result // "10, 16, 18"

// Eigene Fluent API mit tap/with
class QueryBuilder {
    String table
    String condition

    QueryBuilder from(String t) { table = t; this }
    QueryBuilder where(String c) { condition = c; this }
    String build() { "SELECT * FROM $table WHERE $condition" }
}

def query = new QueryBuilder()
    .from("users")
    .where("age > 18")
    .build()
```

**Besonderheiten:**
- Collection-Methoden unterstützen natürliches Method Chaining
- `with` und `tap` Methoden für Fluent-Style-Konfiguration
- `this` Rückgabe für eigene Fluent APIs

**Weiterführende Links:**
- [Groovy Documentation - Working with Collections](https://groovy-lang.org/groovy-dev-kit.html#_working_with_collections)

</TabItem>
</Tabs>


## 19.3.3. Typesafe Builders (Kotlin)

Typesafe Builders ermöglichen die Erstellung typsicherer DSLs durch spezielle Lambda-Syntax und Extension Functions.

### Sprachen {#sprachen}

<Tabs availableTabs={['kotlin', 'scala', 'typescript']}>
<TabItem value="kotlin" label="Kotlin">

```kotlin
class HTML {
    fun body(init: Body.() -> Unit) {
        Body().init()
    }
}

class Body {
    fun div(init: Div.() -> Unit) {
        Div().init()
    }
}

class Div {
    fun p(text: String) {
        println("<p>$text</p>")
    }
}

fun html(init: HTML.() -> Unit): HTML {
    val html = HTML()
    html.init()
    return html
}

html {
    body {
        div {
            p("Hello, World!")
        }
    }
}
```

**Besonderheiten:**
- Lambda-Syntax mit Receiver (`init: HTML.() -> Unit`) ermöglicht DSL-ähnliche Syntax
- Extension Functions erlauben typsichere Builder-Patterns
- Compile-time Type-Safety für DSL-Strukturen
- Eingebautes Feature seit Kotlin 1.0

**Weiterführende Links:**
- [Kotlin Documentation - Type-Safe Builders](https://kotlinlang.org/docs/type-safe-builders.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
class HTML {
    def body(init: Body => Unit): Unit = {
        init(new Body)
    }
}

class Body {
    def div(init: Div => Unit): Unit = {
        init(new Div)
    }
}

class Div {
    def p(text: String): Unit = {
        println(s"<p>$text</p>")
    }
}

def html(init: HTML => Unit): HTML = {
    val h = new HTML
    init(h)
    h
}

html { h =>
    h.body { b =>
        b.div { d =>
            d.p("Hello, World!")
        }
    }
}
```

**Besonderheiten:**
- Lambda-Syntax ermöglicht DSL-ähnliche Syntax
- Implicit Conversions können typsichere Builder-Patterns unterstützen
- Compile-time Type-Safety für DSL-Strukturen
- Ähnliches Konzept wie Kotlin's Typesafe Builders, aber mit anderer Syntax

**Weiterführende Links:**
- [Scala Documentation](https://docs.scala-lang.org/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
class HTML {
    body(init: (body: Body) => void): void {
        init(new Body());
    }
}

class Body {
    div(init: (div: Div) => void): void {
        init(new Div());
    }
}

class Div {
    p(text: string): void {
        console.log(`<p>${text}</p>`);
    }
}

function html(init: (html: HTML) => void): HTML {
    const h = new HTML();
    init(h);
    return h;
}

html(h => {
    h.body(b => {
        b.div(d => {
            d.p("Hello, World!");
        });
    });
});
```

**Besonderheiten:**
- Lambda-Syntax ermöglicht DSL-ähnliche Syntax
- TypeScript's Type System ermöglicht typsichere Builder-Patterns
- Compile-time Type-Safety für DSL-Strukturen
- Ähnliches Konzept wie Kotlin's Typesafe Builders, aber mit anderer Syntax

**Weiterführende Links:**
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

</TabItem>
</Tabs>


## 19.3.4. Embedded DSLs

Embedded DSLs sind domänenspezifische Sprachen, die innerhalb einer Host-Sprache eingebettet sind und spezielle Syntax oder Konstrukte nutzen.

### Sprachen {#sprachen}

<Tabs availableTabs={['clojure', 'common-lisp', 'elixir', 'groovy', 'haskell', 'kotlin', 'lean4', 'lua', 'prolog', 'python', 'racket', 'ruby', 'rust', 'scala', 'scheme', 'wolfram-language']} yellowTabs={['koka']} orangeTabs={['mercury']}>
<TabItem value="clojure" label="Clojure">

```clojure
(defmacro defquery [name & body]
  `(defn ~name []
     (list ~@body)))

(defquery select-users
  :select [:id :name :email]
  :from :users
  :where [:> :age 18])

(select-users)
; => (:select [:id :name :email] :from :users :where [:> :age 18])
```

**Besonderheiten:**
- Makros ermöglichen die Erstellung von Embedded DSLs
- Homoikonizität (Code als Daten) erleichtert DSL-Erstellung
- Compile-time Metaprogrammierung

**Weiterführende Links:**
- [Clojure Documentation](https://clojure.org/reference/documentation)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```common-lisp
(defmacro defquery (name &rest body)
  `(defun ,name ()
     (list ,@body)))

(defquery select-users
  :select (:id :name :email)
  :from :users
  :where (:> :age 18))

(select-users)
; => (:SELECT (:ID :NAME :EMAIL) :FROM :USERS :WHERE (:> :AGE 18))
```

**Besonderheiten:**
- Makros ermöglichen die Erstellung von Embedded DSLs
- Homoikonizität (Code als Daten) erleichtert DSL-Erstellung
- Compile-time Metaprogrammierung

**Weiterführende Links:**
- [Common Lisp HyperSpec](http://www.lispworks.com/documentation/HyperSpec/Front/)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
defmodule Query do
  defmacro select(query, fields) do
    quote do
      %{unquote(query) | select: unquote(fields)}
    end
  end
  
  defmacro from(query, table) do
    quote do
      %{unquote(query) | from: unquote(table)}
    end
  end
end

import Query

query = %{}
  |> select([:id, :name, :email])
  |> from(:users)
```

**Besonderheiten:**
- Makros ermöglichen die Erstellung von Embedded DSLs
- Quote/Unquote-Mechanismus für Metaprogrammierung
- Compile-time Code-Generierung

**Weiterführende Links:**
- [Elixir Documentation](https://elixir-lang.org/docs.html)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Embedded DSL mit Monad-basierter Syntax
data QueryBuilder = QueryBuilder
    { qSelect :: [String]
    , qFrom   :: String
    , qWhere  :: Maybe String
    }

emptyQuery :: QueryBuilder
emptyQuery = QueryBuilder [] "" Nothing

select_ :: [String] -> QueryBuilder -> QueryBuilder
select_ fields q = q { qSelect = fields }

from_ :: String -> QueryBuilder -> QueryBuilder
from_ table q = q { qFrom = table }

where_ :: String -> QueryBuilder -> QueryBuilder
where_ cond q = q { qWhere = Just cond }

-- Verwendung mit ($) für DSL-ähnliche Syntax
query :: QueryBuilder
query = where_ "age > 18"
      . from_ "users"
      . select_ ["id", "name", "email"]
      $ emptyQuery
```

**Besonderheiten:**
- Funktionskomposition (`.`) und `$` ermöglichen DSL-ähnliche Syntax
- Type-System garantiert Typsicherheit zur Compile-Zeit
- Monaden und `do`-Notation für komplexere DSLs (z.B. Parsec, Servant)

**Weiterführende Links:**
- [Haskell Wiki - Embedded DSL](https://wiki.haskell.org/Embedded_domain_specific_language)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
// Embedded DSL über algebraische Effekte
// Beispiel: Parser-DSL mit Effekt-Handlern

effect fun emit(msg : string) : ()
effect fun fail(msg : string) : a

// DSL für einen einfachen Parser
fun parse-number() : <emit, fail> int
  emit("Parsing number...")
  42

fun parse-pair() : <emit, fail> (int, int)
  val a = parse-number()
  val b = parse-number()
  (a, b)

// Handler definiert die Semantik der DSL
fun run-parser(action : () -> <emit, fail|e> a) : e string
  with handler
    return(x)  -> x.show
    fun emit(msg) -> resume(())  // Log ignorieren
    fun fail(msg) -> "Error: " ++ msg
  action()
```

**Besonderheiten:**
- Algebraische Effekte als Basis für Embedded DSLs
- Effekte definieren die Operationen der DSL
- Handler definieren die Semantik (verschiedene Interpretationen möglich)
- Ermöglicht domänenspezifische Kontrollstrukturen

**Weiterführende Links:**
- [Koka Documentation - Effect Handlers](https://koka-lang.github.io/koka/doc/book.html#sec-handlers)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
class Query {
    var select: List<String> = emptyList()
    var from: String = ""
    var where: String? = null
}

fun query(init: Query.() -> Unit): Query {
    val q = Query()
    q.init()
    return q
}

fun Query.select(vararg fields: String) {
    this.select = fields.toList()
}

fun Query.from(table: String) {
    this.from = table
}

fun Query.where(condition: String) {
    this.where = condition
}

val q = query {
    select("id", "name", "email")
    from("users")
    where("age > 18")
}
```

**Besonderheiten:**
- Typesafe Builders ermöglichen typsichere Embedded DSLs
- Lambda-Syntax mit Receiver für DSL-ähnliche Syntax
- Compile-time Type-Safety

**Weiterführende Links:**
- [Kotlin Documentation - Type-Safe Builders](https://kotlinlang.org/docs/type-safe-builders.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Embedded DSL über benutzerdefinierte Syntax und Makros
import Lean

-- Neue Syntax-Kategorie für Query-DSL
declare_syntax_cat query
syntax "SELECT " str,+ : query
syntax "FROM " str : query
syntax "WHERE " str : query
syntax query ";" query : query

-- Macro zur Übersetzung der DSL
syntax "sql! {" query "}" : term

macro_rules
  | `(sql! { SELECT $[$cols],* }) =>
    `(List.toString [$[$cols],*])

-- Notation für mathematische DSL
notation:65 a " ⊕ " b => a + b
notation:70 a " ⊗ " b => a * b

#eval 3 ⊕ 4 ⊗ 2  -- 11 (⊗ bindet stärker)
```

**Besonderheiten:**
- Lean 4 unterstützt Embedded DSLs durch `declare_syntax_cat`, `syntax` und `macro_rules`.
- Benutzerdefinierte Syntax-Kategorien erlauben vollständig neue Syntaxen innerhalb von Lean.
- `notation` und `infix` ermöglichen domänenspezifische Operatoren mit konfigurierbarer Priorität.
- Das Makro-System ist Turing-vollständig und kann beliebige Transformationen durchführen.

**Weiterführende Links:**
- [Lean 4 Documentation - Metaprogramming](https://lean-lang.org/lean4/doc/metaprogramming.html)
- [Lean 4 Metaprogramming Book](https://leanprover-community.github.io/lean4-metaprogramming-book/)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
local Query = {}
Query.__index = Query

function Query:new()
    local self = setmetatable({}, Query)
    self.select = {}
    self.from = ""
    self.where = nil
    return self
end

function Query:select_fields(...)
    self.select = {...}
    return self
end

function Query:from_table(table)
    self.from = table
    return self
end

function Query:where_condition(condition)
    self.where = condition
    return self
end

local q = Query:new()
    :select_fields("id", "name", "email")
    :from_table("users")
    :where_condition("age > 18")
```

**Besonderheiten:**
- Metatables ermöglichen flexible DSL-Erstellung
- Method Chaining für DSL-ähnliche Syntax
- Runtime Metaprogrammierung

**Weiterführende Links:**
- [Lua Documentation](https://www.lua.org/manual/5.4/)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Embedded DSL mit DCG (Definite Clause Grammars)
:- pred query(query_result::out, list(token)::in, list(token)::out)
    is semidet.
query(select(Cols, Tab, Cond)) -->
    [select], columns(Cols), [from], [Tab], [where], condition(Cond).

:- pred columns(list(string)::out, list(token)::in, list(token)::out)
    is semidet.
columns([C]) --> [C].
columns([C | Cs]) --> [C], columns(Cs).

:- pred condition(condition::out, list(token)::in, list(token)::out)
    is semidet.
condition(gt(Col, Val)) --> [Col], [>], [Val].

% Benutzerdefinierte Operatoren für DSL-Syntax
:- op(700, xfx, is_in).
:- pred is_in(T::in, list(T)::in) is semidet.
X is_in List :- list.member(X, List).
% 3 is_in [1, 2, 3]  => succeeds (semidet)
```

**Besonderheiten:**
- DCG (Definite Clause Grammars) als eingebauter DSL-Mechanismus (`-->` Notation, wie Prolog)
- Benutzerdefinierte Operatoren mit `op/3` für eigene Syntax
- Mode- und Determinismus-Deklarationen bieten zusätzliche statische Garantien für DSLs
- Stärkere Einschränkungen als Prolog: keine dynamischen Fakten, kein Meta-Interpreter — daher eingeschränktere DSL-Fähigkeiten

**Weiterführende Links:**
- [Mercury Language Reference - DCG](https://www.mercurylang.org/information/doc-release/mercury_ref/DCG-rules.html)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Embedded DSL mit DCG (Definite Clause Grammars)
query(select(Cols, Tab, Cond)) -->
    [select], columns(Cols), [from], [Tab], [where], condition(Cond).

columns([C]) --> [C].
columns([C|Cs]) --> [C], columns(Cs).

condition(Col > Val) --> [Col, >, Val].

% ?- phrase(query(Q),
%           [select, id, name, from, users, where, age, >, 18], []).
% Q = select([id, name], users, age>18).

% Benutzerdefinierte Operatoren für DSL-Syntax
:- op(700, xfx, is_in).
X is_in List :- member(X, List).
% ?- 3 is_in [1, 2, 3].
% true.
```

**Besonderheiten:**
- DCG (Definite Clause Grammars) als eingebauter DSL-Mechanismus (`-->` Notation)
- Benutzerdefinierte Operatoren mit `op/3` für eigene Syntax
- Meta-Interpreter ermöglichen alternative Auswertungssemantiken
- Term-Struktur von Prolog eignet sich natürlich für DSL-Darstellung

**Weiterführende Links:**
- [SWI-Prolog Documentation - DCG](https://www.swi-prolog.org/pldoc/man?section=DCG)

</TabItem>
<TabItem value="python" label="Python">

```python
class Query:
    def __init__(self):
        self.select = []
        self.from_ = ""
        self.where = None
    
    def select_fields(self, *fields):
        self.select = list(fields)
        return self
    
    def from_table(self, table):
        self.from_ = table
        return self
    
    def where_condition(self, condition):
        self.where = condition
        return self

q = Query()\
    .select_fields("id", "name", "email")\
    .from_table("users")\
    .where_condition("age > 18")
```

**Besonderheiten:**
- Method Chaining für DSL-ähnliche Syntax
- Decorators können DSL-Features erweitern
- Metaclasses ermöglichen erweiterte Metaprogrammierung

**Weiterführende Links:**
- [Python Documentation](https://docs.python.org/3/)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
class Query
  def initialize
    @select = []
    @from = ""
    @where = nil
  end
  
  def select_fields(*fields)
    @select = fields
    self
  end
  
  def from_table(table)
    @from = table
    self
  end
  
  def where_condition(condition)
    @where = condition
    self
  end
end

q = Query.new
  .select_fields("id", "name", "email")
  .from_table("users")
  .where_condition("age > 18")
```

**Besonderheiten:**
- Method Chaining für DSL-ähnliche Syntax
- Blocks ermöglichen DSL-ähnliche Syntax
- Metaprogrammierung durch `method_missing` und `define_method`

**Weiterführende Links:**
- [Ruby Documentation](https://docs.ruby-lang.org/en/)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
struct Query {
    select: Vec<String>,
    from: String,
    where_: Option<String>,
}

impl Query {
    fn new() -> Self {
        Query {
            select: Vec::new(),
            from: String::new(),
            where_: None,
        }
    }
    
    fn select_fields(mut self, fields: &[&str]) -> Self {
        self.select = fields.iter().map(|s| s.to_string()).collect();
        self
    }
    
    fn from_table(mut self, table: &str) -> Self {
        self.from = table.to_string();
        self
    }
    
    fn where_condition(mut self, condition: &str) -> Self {
        self.where_ = Some(condition.to_string());
        self
    }
}

let q = Query::new()
    .select_fields(&["id", "name", "email"])
    .from_table("users")
    .where_condition("age > 18");
```

**Besonderheiten:**
- Method Chaining für DSL-ähnliche Syntax
- Macros ermöglichen erweiterte DSL-Erstellung
- Compile-time Type-Safety

**Weiterführende Links:**
- [The Rust Programming Language](https://doc.rust-lang.org/book/)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
case class Query(
    select: List[String] = Nil,
    from: String = "",
    where: Option[String] = None
) {
    def selectFields(fields: String*): Query = {
        copy(select = fields.toList)
    }
    
    def fromTable(table: String): Query = {
        copy(from = table)
    }
    
    def whereCondition(condition: String): Query = {
        copy(where = Some(condition))
    }
}

val q = Query()
    .selectFields("id", "name", "email")
    .fromTable("users")
    .whereCondition("age > 18")
```

**Besonderheiten:**
- Method Chaining für DSL-ähnliche Syntax
- Implicit Conversions können DSL-Features erweitern
- Macros ermöglichen erweiterte DSL-Erstellung
- Compile-time Type-Safety

**Weiterführende Links:**
- [Scala Documentation](https://docs.scala-lang.org/)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
(define-syntax defquery
  (syntax-rules ()
    ((_ name (select fields ...) (from table) (where condition))
     (define name
       (list 'select '(fields ...) 'from 'table 'where 'condition)))))

(defquery select-users
  (select id name email)
  (from users)
  (where (> age 18)))

(select-users)
; => (select (id name email) from users where (> age 18))
```

**Besonderheiten:**
- Syntax-Rules ermöglichen die Erstellung von Embedded DSLs
- Homoikonizität (Code als Daten) erleichtert DSL-Erstellung
- Compile-time Metaprogrammierung

**Weiterführende Links:**
- [Scheme Documentation](https://www.scheme.com/tspl4/)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Embedded DSL mit Closure-Delegation
class EmailDsl {
    String from, to, subject, body

    static void send(@DelegatesTo(EmailDsl) Closure config) {
        def email = new EmailDsl()
        config.delegate = email
        config.resolveStrategy = Closure.DELEGATE_FIRST
        config()
        println "Sending email from ${email.from} to ${email.to}"
    }
}

// DSL-Nutzung
EmailDsl.send {
    from "sender@example.com"
    to "receiver@example.com"
    subject "Hallo"
    body "Inhalt der Email"
}

// Gradle-Build-Script ist ein bekanntes Groovy-DSL-Beispiel
```

**Besonderheiten:**
- Closures mit `delegate` ermöglichen natürliche DSL-Syntax
- `@DelegatesTo` für IDE-Unterstützung und statische Analyse
- Optionale Klammern und Semikolons machen DSLs lesbarer
- Gradle, Spock, Ratpack sind prominente Groovy-DSLs

**Weiterführende Links:**
- [Groovy Documentation - DSLs](https://groovy-lang.org/dsls.html)

</TabItem>

<TabItem value="racket" label="Racket">

```racket
;; Embedded DSL mit Makros
(define-syntax-rule (html body ...)
  (list 'html body ...))

(define-syntax-rule (tag name body ...)
  (list 'name body ...))

;; Verwendung der DSL
(html
  (tag div
    (tag h1 "Hello")
    (tag p "World")))
```

**Besonderheiten:**
- Racket ist speziell für Language-Oriented Programming konzipiert
- `#lang`-Mechanismus ermöglicht vollständige DSLs als eigene Sprachen
- Hygienic Macros für sichere DSL-Erstellung
- Bekannte DSLs: Scribble (Dokumentation), Slideshow (Präsentationen), Datalog

**Weiterführende Links:**
- [Racket Documentation - Creating Languages](https://docs.racket-lang.org/guide/languages.html)

</TabItem>

<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Embedded DSLs durch symbolische Ausdrücke *)
query = Select[data, #Age > 30 && #City == "Berlin" &]

(* Eigene Domain-Sprache *)
workflow = Pipeline[
    LoadData["file.csv"],
    FilterRows[#Age > 30 &],
    SelectColumns[{"Name", "Age"}]
]
```

**Besonderheiten:**
- Wolfram Language eignet sich hervorragend für Embedded DSLs
- Symbolische Ausdrücke ermöglichen natürliche DSL-Syntax
- `Notation` Package für benutzerdefinierte Syntax

**Weiterführende Links:**
- [Wolfram Language Documentation - Notation](https://reference.wolfram.com/language/Notation/guide/NotationPackage.html)

</TabItem>

</Tabs>

