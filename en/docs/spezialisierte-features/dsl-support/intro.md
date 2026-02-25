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

The Builder pattern enables the step-by-step construction of complex objects through separate builder classes.

### Languages {#languages}

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

**Special features:**
- Builder class with fluent interface methods
- `Build()` method creates the final object

**Further reading:**
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

**Special features:**
- Builder class with method chaining through reference return
- `build()` method creates the final object

**Further reading:**
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

**Special features:**
- Builder class with fluent interface methods
- `build()` method creates the final object with named parameters

**Further reading:**
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

**Special features:**
- Builder structure with pointer receiver methods
- `Build()` method creates the final object

**Further reading:**
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

**Special features:**
- Builder class with fluent interface methods
- `build()` method creates the final object

**Further reading:**
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

**Special features:**
- Builder class with fluent interface methods
- `build()` method creates the final object

**Further reading:**
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

**Special features:**
- Builder class with fluent interface methods
- `build()` method creates the final object
- Kotlin also offers typesafe builders as a language feature

**Further reading:**
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

**Special features:**
- Builder class with fluent interface methods
- `build()` method creates the final object

**Further reading:**
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

**Special features:**
- Builder class with fluent interface methods
- `build()` method creates the final object
- Method chaining with backslash for line breaks

**Further reading:**
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

**Special features:**
- Builder class with fluent interface methods
- `build()` method creates the final object
- Method chaining through explicit `self` return

**Further reading:**
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

**Special features:**
- Builder structure with `Option` types for optional fields
- `build()` method creates the final object
- Ownership semantics through `self` parameter

**Further reading:**
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

**Special features:**
- Builder class with fluent interface methods
- `build()` method creates the final object
- Case classes for immutable objects

**Further reading:**
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

**Special features:**
- Builder class with fluent interface methods
- `build()` method creates the final object

**Further reading:**
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

**Special features:**
- Builder class with fluent interface methods
- `build()` method creates the final object

**Further reading:**
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// MarkupBuilder for XML/HTML
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

**Special features:**
- Built-in builders: `MarkupBuilder` (XML/HTML), `JsonBuilder` (JSON), `StreamingJsonBuilder`
- `@Builder` AST transformation automatically generates builder pattern
- Closures enable natural builder syntax without explicit builder class

**Further reading:**
- [Groovy Documentation - Builders](https://groovy-lang.org/dsls.html#_builders)

</TabItem>
</Tabs>


## 19.3.2. Fluent API / Method Chaining

Fluent APIs enable the chaining of method calls by returning the object itself.

### Languages {#languages}

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

**Special features:**
- Methods return `this` for method chaining
- Enables fluent, readable API calls

**Further reading:**
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

**Special features:**
- Methods return reference to `*this` for method chaining
- Enables fluent, readable API calls

**Further reading:**
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

**Special features:**
- Methods return `this` for method chaining
- Enables fluent, readable API calls

**Further reading:**
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

**Special features:**
- Methods with pointer receiver return pointer for method chaining
- Enables fluent, readable API calls

**Further reading:**
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

**Special features:**
- Methods return `this` for method chaining
- Enables fluent, readable API calls
- Java's `StringBuilder` and Stream API use this pattern

**Further reading:**
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

**Special features:**
- Methods return `this` for method chaining
- Enables fluent, readable API calls

**Further reading:**
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

**Special features:**
- Methods return `this` for method chaining
- Enables fluent, readable API calls
- Kotlin's `StringBuilder` uses this pattern

**Further reading:**
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

**Special features:**
- Methods return `$this` for method chaining
- Enables fluent, readable API calls

**Further reading:**
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

**Special features:**
- Methods return `self` for method chaining
- Enables fluent, readable API calls
- Method chaining with backslash for line breaks

**Further reading:**
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

**Special features:**
- Methods explicitly return `self` for method chaining
- Enables fluent, readable API calls

**Further reading:**
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

**Special features:**
- Methods take `self` by value and return it for method chaining
- Enables fluent, readable API calls
- Ownership semantics through `self` parameter

**Further reading:**
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

**Special features:**
- Methods return `this` for method chaining
- Enables fluent, readable API calls
- Scala's `StringBuilder` uses this pattern

**Further reading:**
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

**Special features:**
- Methods return `self` for method chaining
- Enables fluent, readable API calls

**Further reading:**
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

**Special features:**
- Methods return `this` for method chaining
- Enables fluent, readable API calls

**Further reading:**
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Method chaining with collection methods
def result = [5, 3, 8, 1, 9, 2]
    .findAll { it > 3 }
    .collect { it * 2 }
    .sort()
    .join(", ")

println result // "10, 16, 18"

// Custom fluent API with tap/with
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

**Special features:**
- Collection methods support natural method chaining
- `with` and `tap` methods for fluent-style configuration
- `this` return for custom fluent APIs

**Further reading:**
- [Groovy Documentation - Working with Collections](https://groovy-lang.org/groovy-dev-kit.html#_working_with_collections)

</TabItem>
</Tabs>


## 19.3.3. Typesafe Builders (Kotlin)

Typesafe builders enable the creation of type-safe DSLs through special lambda syntax and extension functions.

### Languages {#languages}

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

**Special features:**
- Lambda syntax with receiver (`init: HTML.() -> Unit`) enables DSL-like syntax
- Extension functions allow type-safe builder patterns
- Compile-time type safety for DSL structures
- Built-in feature since Kotlin 1.0

**Further reading:**
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

**Special features:**
- Lambda syntax enables DSL-like syntax
- Implicit conversions can support type-safe builder patterns
- Compile-time type safety for DSL structures
- Similar concept to Kotlin's typesafe builders, but with different syntax

**Further reading:**
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

**Special features:**
- Lambda syntax enables DSL-like syntax
- TypeScript's type system enables type-safe builder patterns
- Compile-time type safety for DSL structures
- Similar concept to Kotlin's typesafe builders, but with different syntax

**Further reading:**
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

</TabItem>
</Tabs>


## 19.3.4. Embedded DSLs

Embedded DSLs are domain-specific languages that are embedded within a host language and use special syntax or constructs.

### Languages {#languages}

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

**Special features:**
- Macros enable the creation of embedded DSLs
- Homoiconicity (code as data) facilitates DSL creation
- Compile-time metaprogramming

**Further reading:**
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

**Special features:**
- Macros enable the creation of embedded DSLs
- Homoiconicity (code as data) facilitates DSL creation
- Compile-time metaprogramming

**Further reading:**
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

**Special features:**
- Macros enable the creation of embedded DSLs
- Quote/unquote mechanism for metaprogramming
- Compile-time code generation

**Further reading:**
- [Elixir Documentation](https://elixir-lang.org/docs.html)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Embedded DSL with monad-based syntax
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

-- Usage with ($) for DSL-like syntax
query :: QueryBuilder
query = where_ "age > 18"
      . from_ "users"
      . select_ ["id", "name", "email"]
      $ emptyQuery
```

**Special features:**
- Function composition (`.`) and `$` enable DSL-like syntax
- Type system guarantees type safety at compile time
- Monads and `do` notation for more complex DSLs (e.g., Parsec, Servant)

**Further reading:**
- [Haskell Wiki - Embedded DSL](https://wiki.haskell.org/Embedded_domain_specific_language)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
// Embedded DSL via algebraic effects
// Example: Parser DSL with effect handlers

effect fun emit(msg : string) : ()
effect fun fail(msg : string) : a

// DSL for a simple parser
fun parse-number() : <emit, fail> int
  emit("Parsing number...")
  42

fun parse-pair() : <emit, fail> (int, int)
  val a = parse-number()
  val b = parse-number()
  (a, b)

// Handler defines the semantics of the DSL
fun run-parser(action : () -> <emit, fail|e> a) : e string
  with handler
    return(x)  -> x.show
    fun emit(msg) -> resume(())  // Ignore log
    fun fail(msg) -> "Error: " ++ msg
  action()
```

**Special features:**
- Algebraic effects as basis for embedded DSLs
- Effects define the operations of the DSL
- Handlers define the semantics (various interpretations possible)
- Enables domain-specific control structures

**Further reading:**
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

**Special features:**
- Typesafe builders enable type-safe embedded DSLs
- Lambda syntax with receiver for DSL-like syntax
- Compile-time type safety

**Further reading:**
- [Kotlin Documentation - Type-Safe Builders](https://kotlinlang.org/docs/type-safe-builders.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Embedded DSL via custom syntax and macros
import Lean

-- New syntax category for Query DSL
declare_syntax_cat query
syntax "SELECT " str,+ : query
syntax "FROM " str : query
syntax "WHERE " str : query
syntax query ";" query : query

-- Macro for translating the DSL
syntax "sql! {" query "}" : term

macro_rules
  | `(sql! { SELECT $[$cols],* }) =>
    `(List.toString [$[$cols],*])

-- Notation for mathematical DSL
notation:65 a " ⊕ " b => a + b
notation:70 a " ⊗ " b => a * b

#eval 3 ⊕ 4 ⊗ 2  -- 11 (⊗ binds stronger)
```

**Special features:**
- Lean 4 supports embedded DSLs through `declare_syntax_cat`, `syntax`, and `macro_rules`.
- Custom syntax categories allow completely new syntaxes within Lean.
- `notation` and `infix` enable domain-specific operators with configurable precedence.
- The macro system is Turing-complete and can perform arbitrary transformations.

**Further reading:**
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

**Special features:**
- Metatables enable flexible DSL creation
- Method chaining for DSL-like syntax
- Runtime metaprogramming

**Further reading:**
- [Lua Documentation](https://www.lua.org/manual/5.4/)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Embedded DSL with DCG (Definite Clause Grammars)
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

% Custom operators for DSL syntax
:- op(700, xfx, is_in).
:- pred is_in(T::in, list(T)::in) is semidet.
X is_in List :- list.member(X, List).
% 3 is_in [1, 2, 3]  => succeeds (semidet)
```

**Special features:**
- DCG (Definite Clause Grammars) as built-in DSL mechanism (`-->` notation, like Prolog)
- Custom operators with `op/3` for custom syntax
- Mode and determinism declarations provide additional static guarantees for DSLs
- Stronger restrictions than Prolog: no dynamic facts, no meta-interpreter — therefore more limited DSL capabilities

**Further reading:**
- [Mercury Language Reference - DCG](https://www.mercurylang.org/information/doc-release/mercury_ref/DCG-rules.html)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Embedded DSL with DCG (Definite Clause Grammars)
query(select(Cols, Tab, Cond)) -->
    [select], columns(Cols), [from], [Tab], [where], condition(Cond).

columns([C]) --> [C].
columns([C|Cs]) --> [C], columns(Cs).

condition(Col > Val) --> [Col, >, Val].

% ?- phrase(query(Q),
%           [select, id, name, from, users, where, age, >, 18], []).
% Q = select([id, name], users, age>18).

% Custom operators for DSL syntax
:- op(700, xfx, is_in).
X is_in List :- member(X, List).
% ?- 3 is_in [1, 2, 3].
% true.
```

**Special features:**
- DCG (Definite Clause Grammars) as built-in DSL mechanism (`-->` notation)
- Custom operators with `op/3` for custom syntax
- Meta-interpreters enable alternative evaluation semantics
- Prolog's term structure naturally suits DSL representation

**Further reading:**
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

**Special features:**
- Method chaining for DSL-like syntax
- Decorators can extend DSL features
- Metaclasses enable advanced metaprogramming

**Further reading:**
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

**Special features:**
- Method chaining for DSL-like syntax
- Blocks enable DSL-like syntax
- Metaprogramming through `method_missing` and `define_method`

**Further reading:**
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

**Special features:**
- Method chaining for DSL-like syntax
- Macros enable advanced DSL creation
- Compile-time type safety

**Further reading:**
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

**Special features:**
- Method chaining for DSL-like syntax
- Implicit conversions can extend DSL features
- Macros enable advanced DSL creation
- Compile-time type safety

**Further reading:**
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

**Special features:**
- Syntax rules enable the creation of embedded DSLs
- Homoiconicity (code as data) facilitates DSL creation
- Compile-time metaprogramming

**Further reading:**
- [Scheme Documentation](https://www.scheme.com/tspl4/)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Embedded DSL with closure delegation
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

// DSL usage
EmailDsl.send {
    from "sender@example.com"
    to "receiver@example.com"
    subject "Hallo"
    body "Inhalt der Email"
}

// Gradle build script is a well-known Groovy DSL example
```

**Special features:**
- Closures with `delegate` enable natural DSL syntax
- `@DelegatesTo` for IDE support and static analysis
- Optional parentheses and semicolons make DSLs more readable
- Gradle, Spock, Ratpack are prominent Groovy DSLs

**Further reading:**
- [Groovy Documentation - DSLs](https://groovy-lang.org/dsls.html)

</TabItem>

<TabItem value="racket" label="Racket">

```racket
;; Embedded DSL with macros
(define-syntax-rule (html body ...)
  (list 'html body ...))

(define-syntax-rule (tag name body ...)
  (list 'name body ...))

;; DSL usage
(html
  (tag div
    (tag h1 "Hello")
    (tag p "World")))
```

**Special features:**
- Racket is specifically designed for language-oriented programming
- `#lang` mechanism enables complete DSLs as separate languages
- Hygienic macros for safe DSL creation
- Well-known DSLs: Scribble (documentation), Slideshow (presentations), Datalog

**Further reading:**
- [Racket Documentation - Creating Languages](https://docs.racket-lang.org/guide/languages.html)

</TabItem>

<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Embedded DSLs through symbolic expressions *)
query = Select[data, #Age > 30 && #City == "Berlin" &]

(* Custom domain language *)
workflow = Pipeline[
    LoadData["file.csv"],
    FilterRows[#Age > 30 &],
    SelectColumns[{"Name", "Age"}]
]
```

**Special features:**
- Wolfram Language is excellently suited for embedded DSLs
- Symbolic expressions enable natural DSL syntax
- `Notation` package for custom syntax

**Further reading:**
- [Wolfram Language Documentation - Notation](https://reference.wolfram.com/language/Notation/guide/NotationPackage.html)

</TabItem>

</Tabs>

