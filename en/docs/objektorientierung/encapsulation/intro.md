---
slug: /objektorientierung/encapsulation
title: 8.2. Encapsulation
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 8.2. Encapsulation

Encapsulation of data and methods.

## 8.2.1. Access Modifiers (public, private, protected)

Access modifiers that control the visibility of class members.

### Languages {#sprachen}

<Tabs availableTabs={['carbon', 'cpp', 'crystal', 'csharp', 'd', 'eiffel', 'fsharp', 'groovy', 'java', 'kotlin', 'lean4', 'matlab', 'mojo', 'nim', 'object-pascal', 'objective-c', 'ocaml', 'php', 'ruby', 'scala', 'swift', 'typescript', 'vbnet']} yellowTabs={['dart', 'haxe', 'javascript', 'v']} orangeTabs={['python']}>
<TabItem value="java" label="Java">

```java
class Person
{
    public String name;        // Public
    private int age;          // Private
    protected String id;      // Protected
}
```

**Special features:**
- `public`: Access from anywhere
- `private`: Only within the class
- `protected`: Within the class and derived classes

**Further reading:**
- [Oracle Java Documentation - Access Control](https://docs.oracle.com/javase/tutorial/java/javaOO/accesscontrol.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
class Person
{
    public string Name;        // Public
    private int age;          // Private
    protected string Id;       // Protected
    internal string Code;     // Internal (only within the assembly)
}
```

**Special features:**
- `public`: Access from anywhere
- `private`: Only within the class
- `protected`: Within the class and derived classes
- `internal`: Only within the assembly

**Further reading:**
- [Microsoft C# Documentation - Access Modifiers](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/access-modifiers)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
class Person
{
public:
    std::string name;          // Public
private:
    int age;                   // Private
protected:
    std::string id;            // Protected
};
```

**Special features:**
- `public`: Access from anywhere
- `private`: Only within the class
- `protected`: Within the class and derived classes
- Sections instead of individual modifiers

**Further reading:**
- [cppreference.com - Access Specifiers](https://en.cppreference.com/w/cpp/language/access)

</TabItem>
<TabItem value="python" label="Python">

```python
class Person:
    def __init__(self, name):
        self.name = name      # Public (convention)
        self._age = 0         # Protected (convention, starts with _)
        self.__id = 0         # Private (name mangling, starts with __)
```

**Special features:**
- No real access modifiers
- `_` for protected (convention)
- `__` for private (name mangling)

**Further reading:**
- [Python Documentation - Private Variables](https://docs.python.org/3/tutorial/classes.html#private-variables)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
class Person
{
    constructor(name)
    {
        this.name = name;     // Public
        this._age = 0;        // Protected (convention)
    }
    
    // Private Fields (since ES2022)
    #id = 0;
    
    getPrivateId()
    {
        return this.#id;
    }
}
```

**Special features:**
- No real access modifiers (except Private Fields)
- `_` for protected (convention)
- `#` for private fields (since ES2022)

**Further reading:**
- [MDN Web Docs - Private Class Fields](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
class Person
{
    public name: string;      // Public
    private age: number;      // Private
    protected id: string;    // Protected
}
```

**Special features:**
- `public`: Access from anywhere (default)
- `private`: Only within the class
- `protected`: Within the class and derived classes

**Further reading:**
- [TypeScript Documentation - Access Modifiers](https://www.typescriptlang.org/docs/handbook/2/classes.html#member-visibility)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
class Person
{
    public val name: String   // Public (default)
    private var age: Int      // Private
    protected var id: String // Protected
    internal var code: String // Internal (only within the module)
}
```

**Special features:**
- `public`: Access from anywhere (default)
- `private`: Only within the class
- `protected`: Within the class and derived classes
- `internal`: Only within the module

**Further reading:**
- [Kotlin Documentation - Visibility Modifiers](https://kotlinlang.org/docs/visibility-modifiers.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
namespace Person
  def name := "Alice"              -- Public (default)
  private def age := 30            -- Private (only in this file)
  protected def id := "P-001"     -- Protected (only in namespace Person.*)
end Person
```

**Special features:**
- Public is default (no explicit `public` keyword)
- `private`: Only visible within the current file/section
- `protected`: Only visible in the current namespace and its extensions
- Access modifiers apply at declaration level, not on individual structure fields

**Further reading:**
- [Lean 4 Documentation](https://lean-lang.org/lean4/doc/)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
class Person
{
    public var name: String    // Public
    private var age: Int       // Private
    fileprivate var id: String // File-private
    internal var code: String  // Internal (default)
}
```

**Special features:**
- `public`: Access from anywhere
- `private`: Only within the class
- `fileprivate`: Only within the same file
- `internal`: Only within the module (default)

**Further reading:**
- [Swift Documentation - Access Control](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/accesscontrol/)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
class Person
{
    val name: String           // Public (default)
    private var age: Int      // Private
    protected var id: String  // Protected
    private[this] var code: String // Private for this instance
}
```

**Special features:**
- Public is default
- `private`: Only within the class
- `protected`: Within the class and derived classes
- `private[this]`: Only for this instance

**Further reading:**
- [Scala Documentation - Visibility](https://docs.scala-lang.org/tour/visibility-and-access-modifiers.html)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
class Person
    public
    attr_accessor :name        # Public
    
    private
    attr_accessor :age         # Private
    
    protected
    attr_accessor :id          # Protected
end
```

**Special features:**
- `public`: Access from anywhere (default)
- `private`: Only within the class
- `protected`: Within the class and derived classes
- Sections instead of individual modifiers

**Further reading:**
- [Ruby Documentation - Visibility](https://ruby-doc.org/core-3.1.2/doc/syntax/visibility_rdoc.html)

</TabItem>
<TabItem value="php" label="PHP">

```php
class Person
{
    public $name;      // Public
    private $age;      // Private
    protected $id;     // Protected
}
```

**Special features:**
- `public`: Access from anywhere
- `private`: Only within the class
- `protected`: Within the class and derived classes

**Further reading:**
- [PHP Documentation - Visibility](https://www.php.net/manual/en/language.oop5.visibility.php)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
class Person
{
    String name;       // Public (default)
    int _age;          // Private (starts with _)
}
```

**Special features:**
- Public is default
- `_` for private (convention)
- No `protected`

**Further reading:**
- [Dart Documentation - Libraries and Visibility](https://dart.dev/guides/language/language-tour#libraries-and-visibility)

</TabItem>
<TabItem value="d" label="D">

```d
class Person
{
    public string name;    // Public
    private int age;       // Private
    protected string id;   // Protected
    package string code;    // Package-private
}
```

**Special features:**
- `public`: Access from anywhere
- `private`: Only within the class
- `protected`: Within the class and derived classes
- `package`: Only within the same package

**Further reading:**
- [D Language Specification - Access Control](https://dlang.org/spec/attribute.html#ProtectionAttribute)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
class Person
    property name : String    # Public
    private property age : Int32  # Private
    protected property id : String # Protected
end
```

**Special features:**
- `public`: Access from anywhere (default)
- `private`: Only within the class
- `protected`: Within the class and derived classes

**Further reading:**
- [Crystal Documentation - Visibility](https://crystal-lang.org/reference/1.11/syntax_and_semantics/visibility.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
type Person = object
    name*: string    # Public (exported with *)
    age: int         # Private (no *)
```

**Special features:**
- `*` for public members (exported)
- Without `*` members are private

**Further reading:**
- [Nim Documentation - Export Marker](https://nim-lang.org/docs/manual.html#modules)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
class Person
{
    public String name        // Public
    private int age          // Private
    protected String id      // Protected
}
```

**Special features:**
- `public`: Access from anywhere (default)
- `private`: Only within the class
- `protected`: Within the class and derived classes

**Further reading:**
- [Groovy Documentation - Visibility](https://groovy-lang.org/objectorientation.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
type Person() =
    member val Name = "" with get, set      // Public
    member private val Age = 0 with get, set // Private
    member protected val Id = "" with get, set // Protected
    member internal val Code = "" with get, set // Internal
```

**Special features:**
- `public`: Access from anywhere (default)
- `private`: Only within the class
- `protected`: Within the class and derived classes
- `internal`: Only within the assembly

**Further reading:**
- [F# Documentation - Access Control](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/access-control)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
Class Person
    Public Name As String     ' Public
    Private Age As Integer    ' Private
    Protected Id As String    ' Protected
    Friend Code As String     ' Internal (only within the assembly)
End Class
```

**Special features:**
- `Public`: Access from anywhere
- `Private`: Only within the class
- `Protected`: Within the class and derived classes
- `Friend`: Only within the assembly

**Further reading:**
- [Microsoft VB.NET Documentation - Access Levels](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/declared-elements/access-levels)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
@interface Person : NSObject
{
@public
    NSString* name;   // Public
@private
    int age;          // Private
@protected
    NSString* id;     // Protected (default)
}
@end
```

**Special features:**
- `@public`: Access from anywhere
- `@private`: Only within the class
- `@protected`: Within the class and derived classes (default)
- Sections instead of individual modifiers

**Further reading:**
- [Apple Objective-C Documentation - Encapsulation](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/EncapsulatingData/EncapsulatingData.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
type
  Person = class
  public
    name: string;     // Public
  private
    age: integer;     // Private
  protected
    id: string;       // Protected
  end;
```

**Special features:**
- `public`: Access from anywhere
- `private`: Only within the class
- `protected`: Within the class and derived classes
- Sections instead of individual modifiers

**Further reading:**
- [Delphi Documentation - Visibility](https://docwiki.embarcadero.com/RADStudio/Alexandria/en/Classes_and_Objects)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
class person name =
object
    val name = name           # Public
    val mutable private age = 0  # Private
    method get_name = name
    method private get_age = age
end
```

**Special features:**
- `val` for public fields
- `private` for private members
- Methods can be `private`

**Further reading:**
- [OCaml Documentation - Classes](https://v2.ocaml.org/manual/objectexamples.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
class Person {
    public var name:String;     // Public
    private var age:Int;         // Private (explicit)
    var id:String;               // Private (default)
}
```

**Special features:**
- `public`: Access from anywhere
- `private`: Only within the class (default, if no modifier specified)
- Haxe has NO `protected` keyword
- `@:access(package.Class)` metadata for special access control

**Further reading:**
- [Haxe Documentation - Access Modifiers](https://haxe.org/manual/class-field-access-modifier.html)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
class PERSON
feature {ANY}  -- Public
    name: STRING
    
feature {NONE}  -- Private
    age: INTEGER
    
feature {PERSON, PERSON_CHILD}  -- Protected
    id: STRING
end
```

**Special features:**
- Export clauses for visibility
- `{ANY}` for public
- `{NONE}` for private
- `{CLASS1, CLASS2}` for protected

**Further reading:**
- [Eiffel Documentation - Features](https://www.eiffel.org/doc/eiffel/Language)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
classdef Person
    properties (Access = public)
        name
    end
    
    properties (Access = private)
        age
    end
    
    properties (Access = protected)
        id
    end
end
```

**Special features:**
- `Access = public`: Access from anywhere
- `Access = private`: Only within the class
- `Access = protected`: Within the class and derived classes

**Further reading:**
- [MATLAB Documentation - Property Attributes](https://www.mathworks.com/help/matlab/matlab_oop/property-attributes.html)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Access Modifiers (experimental)
class Person
{
    public var name: String;      // Public
    private var age: i32;         // Private
    protected var id: String;     // Protected
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
    var name: String    # Public (default)
    var _age: Int      # Private (convention, starts with _)
```

**Special features:**
- Public is default
- `_` for private (convention)
- Python-like syntax

**Further reading:**
- [Mojo Documentation - Structs](https://docs.modular.com/mojo/manual/structs-and-classes/)

</TabItem>
<TabItem value="v" label="V">

```v
// Access Modifiers: pub / private (default)
struct Person {
    name string      // private (default)
pub:
    age  int         // public
pub mut:
    score int        // public and mutable
mut:
    internal int     // private and mutable
}
```

**Special features:**
- Fields and functions are private by default (module-internal)
- `pub` makes fields/functions public
- `pub mut` for public and mutable
- `mut` for private and mutable
- No `protected` - only `pub` and private

**Further reading:**
- [V Documentation - Access Modifiers](https://github.com/vlang/v/blob/master/doc/docs.md#access-modifiers)

</TabItem>
</Tabs>


## 8.2.2. Package-private / Internal Visibility

Access modifiers that restrict visibility to package or module level.

### Languages {#sprachen}

<Tabs availableTabs={['csharp', 'd', 'groovy', 'java', 'kotlin', 'nim', 'scala', 'swift', 'vbnet']}>
<TabItem value="java" label="Java">

```java
package com.example;

class Person
{
    String name;  // Package-private (no modifier)
    public String publicName;
    private int age;
}
```

**Special features:**
- No modifier = Package-private
- Access only within the same package
- Default for classes without modifier

**Further reading:**
- [Oracle Java Documentation - Package Access](https://docs.oracle.com/javase/tutorial/java/javaOO/accesscontrol.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
class Person
{
    internal string name;  // Internal (only within the assembly)
    public string publicName;
    private int age;
}
```

**Special features:**
- `internal`: Access only within the same assembly
- Default for classes without modifier

**Further reading:**
- [Microsoft C# Documentation - internal](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/internal)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
class Person
{
    internal var name: String  // Internal (only within the module)
    public var publicName: String
    private var age: Int
}
```

**Special features:**
- `internal`: Access only within the same module
- Default for classes without modifier

**Further reading:**
- [Kotlin Documentation - Visibility Modifiers](https://kotlinlang.org/docs/visibility-modifiers.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
class Person
{
    internal var name: String  // Internal (only within the module, default)
    public var publicName: String
    private var age: Int
    fileprivate var id: String  // File-private (only within the same file)
}
```

**Special features:**
- `internal`: Access only within the same module (default)
- `fileprivate`: Access only within the same file

**Further reading:**
- [Swift Documentation - Access Control](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/accesscontrol/)

</TabItem>
<TabItem value="d" label="D">

```d
class Person
{
    package string name;  // Package-private (only within the same package)
    public string publicName;
    private int age;
}
```

**Special features:**
- `package`: Access only within the same package
- Default for classes without modifier

**Further reading:**
- [D Language Specification - Package](https://dlang.org/spec/attribute.html#ProtectionAttribute)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
Class Person
    Friend name As String  ' Internal (only within the assembly)
    Public publicName As String
    Private age As Integer
End Class
```

**Special features:**
- `Friend`: Access only within the same assembly
- Default for classes without modifier

**Further reading:**
- [Microsoft VB.NET Documentation - Friend](https://learn.microsoft.com/en-us/dotnet/visual-basic/language-reference/modifiers/friend)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Modul: person.nim
type Person = object
    name*: string    # Exported (public in module)
    age: int         # Not exported (private in module)
```

**Special features:**
- `*` exports members from the module
- Without `*` members are private in the module
- Module-based visibility

**Further reading:**
- [Nim Documentation - Export Marker](https://nim-lang.org/docs/manual.html#modules)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Package-private (default visibility for methods)
class MyClass {
    // Package-private method (no modifier)
    void packageMethod() {
        println "Package-private"
    }

    // Properties are public by default (with generated getters/setters)
    String name

    // Explicitly private
    private void privateMethod() {
        println "Private"
    }
}
```

**Special features:**
- Methods without modifier are package-private (like in Java)
- Properties (fields without modifier) automatically generate public getter/setter
- `@PackageScope` annotation for explicit package-private visibility on properties

**Further reading:**
- [Groovy Documentation - Visibility](https://groovy-lang.org/objectorientation.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
package com.example.data

// Package-private: only visible within the 'data' package
private[data] class InternalData
{
    val value = 10
}

class PublicData
{
    // Access within the same package allowed
    val internal = new InternalData()

    // Field only visible within the 'example' package
    private[example] val sharedField: String = "shared"
}
```

**Special features:**
- `private[packageName]` restricts visibility to a specific package
- More flexible than Java: any package level can be chosen (e.g. `private[data]`, `private[example]`)
- `private[this]` restricts to the current instance
- Default visibility is `public` (no keyword needed)

**Further reading:**
- [Scala Documentation - Access Modifiers](https://docs.scala-lang.org/tour/access-modifier.html)

</TabItem>
</Tabs>


## 8.2.3. Getters and Setters

Methods for reading (getter) and writing (setter) private fields.

### Languages {#sprachen}

<Tabs availableTabs={['carbon', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'eiffel', 'fsharp', 'groovy', 'haxe', 'java', 'javascript', 'julia', 'kotlin', 'matlab', 'mojo', 'nim', 'objective-c', 'object-pascal', 'ocaml', 'perl', 'php', 'python', 'racket', 'ruby', 'scala', 'swift', 'typescript', 'vbnet', 'wolfram-language']}>
<TabItem value="java" label="Java">

```java
class Person
{
    private String name;
    private int age;
    
    public String getName()
    {
        return name;
    }
    
    public void setName(String name)
    {
        this.name = name;
    }
    
    public int getAge()
    {
        return age;
    }
    
    public void setAge(int age)
    {
        if (age >= 0) {
            this.age = age;
        }
    }
}
```

**Special features:**
- Conventional naming: `getX()` and `setX()`
- Manual implementation required
- Setters can contain validation

**Further reading:**
- [Oracle Java Documentation - Methods](https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
class Person
{
    private string name;
    private int age;
    
    public string GetName()
    {
        return name;
    }
    
    public void SetName(string name)
    {
        this.name = name;
    }
    
    public int GetAge()
    {
        return age;
    }
    
    public void SetAge(int age)
    {
        if (age >= 0) {
            this.age = age;
        }
    }
}
```

**Special features:**
- Conventional naming: `GetX()` and `SetX()`
- Manual implementation required
- Properties are preferred (see 8.2.4)

**Further reading:**
- [Microsoft C# Documentation - Methods](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/methods)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
class Person
{
private:
    std::string name;
    int age;
    
public:
    std::string getName() const
    {
        return name;
    }
    
    void setName(const std::string& name)
    {
        this->name = name;
    }
    
    int getAge() const
    {
        return age;
    }
    
    void setAge(int age)
    {
        if (age >= 0) {
            this->age = age;
        }
    }
};
```

**Special features:**
- Conventional naming: `getX()` and `setX()`
- `const` for getters that don't modify the object
- Manual implementation required

**Further reading:**
- [cppreference.com - Member Functions](https://en.cppreference.com/w/cpp/language/member_functions)

</TabItem>
<TabItem value="python" label="Python">

```python
class Person:
    def __init__(self, name):
        self._name = name
        self._age = 0
    
    def get_name(self):
        return self._name
    
    def set_name(self, name):
        self._name = name
    
    def get_age(self):
        return self._age
    
    def set_age(self, age):
        if age >= 0:
            self._age = age
```

**Special features:**
- Conventional naming: `get_x()` and `set_x()`
- Manual implementation required
- `@property` is preferred (see 8.2.4)

**Further reading:**
- [Python Documentation - Methods](https://docs.python.org/3/tutorial/classes.html#method-objects)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
class Person
{
    constructor(name)
    {
        this._name = name;
        this._age = 0;
    }
    
    getName()
    {
        return this._name;
    }
    
    setName(name)
    {
        this._name = name;
    }
    
    getAge()
    {
        return this._age;
    }
    
    setAge(age)
    {
        if (age >= 0) {
            this._age = age;
        }
    }
}
```

**Special features:**
- Conventional naming: `getX()` and `setX()`
- Manual implementation required
- Getters/setters are preferred (see 8.2.4)

**Further reading:**
- [MDN Web Docs - Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
class Person
{
    private _name: string;
    private _age: number;
    
    constructor(name: string)
    {
        this._name = name;
        this._age = 0;
    }
    
    getName(): string
    {
        return this._name;
    }
    
    setName(name: string): void
    {
        this._name = name;
    }
    
    getAge(): number
    {
        return this._age;
    }
    
    setAge(age: number): void
    {
        if (age >= 0) {
            this._age = age;
        }
    }
}
```

**Special features:**
- Conventional naming: `getX()` and `setX()`
- Type annotations for parameters and return types
- Manual implementation required

**Further reading:**
- [TypeScript Documentation - Methods](https://www.typescriptlang.org/docs/handbook/2/classes.html#methods)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
class Person
{
    private var name: String = ""
    private var age: Int = 0
    
    fun getName(): String
    {
        return name
    }
    
    fun setName(name: String)
    {
        this.name = name
    }
    
    fun getAge(): Int
    {
        return age
    }
    
    fun setAge(age: Int)
    {
        if (age >= 0) {
            this.age = age
        }
    }
}
```

**Special features:**
- Conventional naming: `getX()` and `setX()`
- Manual implementation required
- Properties are preferred (see 8.2.4)

**Further reading:**
- [Kotlin Documentation - Functions](https://kotlinlang.org/docs/functions.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
class Person
{
    private var _name: String = ""
    private var _age: Int = 0
    
    func getName() -> String
    {
        return _name
    }
    
    func setName(_ name: String)
    {
        self._name = name
    }
    
    func getAge() -> Int
    {
        return _age
    }
    
    func setAge(_ age: Int)
    {
        if age >= 0 {
            self._age = age
        }
    }
}
```

**Special features:**
- Conventional naming: `getX()` and `setX()`
- Manual implementation required
- Computed properties are preferred (see 8.2.6)

**Further reading:**
- [Swift Documentation - Methods](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/methods/)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
class Person
{
    private var name: String = ""
    private var age: Int = 0
    
    def getName(): String =
    {
        name
    }
    
    def setName(name: String): Unit =
    {
        this.name = name
    }
    
    def getAge(): Int =
    {
        age
    }
    
    def setAge(age: Int): Unit =
    {
        if (age >= 0) {
            this.age = age
        }
    }
}
```

**Special features:**
- Conventional naming: `getX()` and `setX()`
- Manual implementation required
- Properties are preferred (see 8.2.4)

**Further reading:**
- [Scala Documentation - Methods](https://docs.scala-lang.org/tour/classes.html)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
class Person
    def initialize(name)
        @name = name
        @age = 0
    end
    
    def get_name
        @name
    end
    
    def set_name(name)
        @name = name
    end
    
    def get_age
        @age
    end
    
    def set_age(age)
        @age = age if age >= 0
    end
end
```

**Special features:**
- Conventional naming: `get_x` and `set_x`
- Manual implementation required
- `attr_accessor` is preferred (see 8.2.4)

**Further reading:**
- [Ruby Documentation - Methods](https://ruby-doc.org/core-3.1.2/Method.html)

</TabItem>
<TabItem value="php" label="PHP">

```php
class Person
{
    private $name;
    private $age;
    
    public function getName()
    {
        return $this->name;
    }
    
    public function setName($name)
    {
        $this->name = $name;
    }
    
    public function getAge()
    {
        return $this->age;
    }
    
    public function setAge($age)
    {
        if ($age >= 0) {
            $this->age = $age;
        }
    }
}
```

**Special features:**
- Conventional naming: `getX()` and `setX()`
- Manual implementation required
- Magic methods `__get` and `__set` are preferred (see 8.2.4)

**Further reading:**
- [PHP Documentation - Methods](https://www.php.net/manual/en/language.oop5.basic.php)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
class Person
{
    String _name = "";
    int _age = 0;
    
    String getName()
    {
        return _name;
    }
    
    void setName(String name)
    {
        this._name = name;
    }
    
    int getAge()
    {
        return _age;
    }
    
    void setAge(int age)
    {
        if (age >= 0) {
            this._age = age;
        }
    }
}
```

**Special features:**
- Conventional naming: `getX()` and `setX()`
- Manual implementation required
- Getters/setters are preferred (see 8.2.4)

**Further reading:**
- [Dart Documentation - Methods](https://dart.dev/language/classes#instance-methods)

</TabItem>
<TabItem value="d" label="D">

```d
class Person
{
    private string name;
    private int age;
    
    string getName()
    {
        return name;
    }
    
    void setName(string name)
    {
        this.name = name;
    }
    
    int getAge()
    {
        return age;
    }
    
    void setAge(int age)
    {
        if (age >= 0) {
            this.age = age;
        }
    }
}
```

**Special features:**
- Conventional naming: `getX()` and `setX()`
- Manual implementation required
- Similar to C++

**Further reading:**
- [D Language Specification - Methods](https://dlang.org/spec/class.html#methods)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
class Person
    @name : String = ""
    @age : Int32 = 0
    
    def get_name : String
        @name
    end
    
    def set_name(name : String)
        @name = name
    end
    
    def get_age : Int32
        @age
    end
    
    def set_age(age : Int32)
        @age = age if age >= 0
    end
end
```

**Special features:**
- Conventional naming: `get_x` and `set_x`
- Manual implementation required
- Properties are preferred (see 8.2.4)

**Further reading:**
- [Crystal Documentation - Methods](https://crystal-lang.org/reference/1.11/syntax_and_semantics/classes_and_methods.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
type Person = object
    name: string
    age: int

proc getName(p: Person): string =
    p.name

proc setName(p: var Person, name: string) =
    p.name = name

proc getAge(p: Person): int =
    p.age

proc setAge(p: var Person, age: int) =
    if age >= 0:
        p.age = age
```

**Special features:**
- Conventional naming: `getX` and `setX`
- Procedures with `var` parameter for setters
- Manual implementation required

**Further reading:**
- [Nim Documentation - Procedures](https://nim-lang.org/docs/manual.html#procedures)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
class Person
{
    private String name
    private int age
    
    String getName()
    {
        return name
    }
    
    void setName(String name)
    {
        this.name = name
    }
    
    int getAge()
    {
        return age
    }
    
    void setAge(int age)
    {
        if (age >= 0) {
            this.age = age
        }
    }
}
```

**Special features:**
- Conventional naming: `getX()` and `setX()`
- Manual implementation required
- Properties are automatically generated (see 8.2.5)

**Further reading:**
- [Groovy Documentation - Methods](https://groovy-lang.org/objectorientation.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
type Person() =
    let mutable name = ""
    let mutable age = 0
    
    member this.GetName() =
        name
    
    member this.SetName(value: string) =
        name <- value
    
    member this.GetAge() =
        age
    
    member this.SetAge(value: int) =
        if value >= 0 then
            age <- value
```

**Special features:**
- Conventional naming: `GetX()` and `SetX()`
- Manual implementation required
- Properties are preferred (see 8.2.4)

**Further reading:**
- [F# Documentation - Members](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/members/)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
Class Person
    Private name As String
    Private age As Integer
    
    Public Function GetName() As String
        Return name
    End Function
    
    Public Sub SetName(value As String)
        name = value
    End Sub
    
    Public Function GetAge() As Integer
        Return age
    End Function
    
    Public Sub SetAge(value As Integer)
        If value >= 0 Then
            age = value
        End If
    End Sub
End Class
```

**Special features:**
- Conventional naming: `GetX()` and `SetX()`
- `Function` for getters, `Sub` for setters
- Properties are preferred (see 8.2.4)

**Further reading:**
- [Microsoft VB.NET Documentation - Methods](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/procedures/)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
@interface Person : NSObject
{
    NSString* name;
    int age;
}
- (NSString*)getName;
- (void)setName:(NSString*)name;
- (int)getAge;
- (void)setAge:(int)age;
@end

@implementation Person
- (NSString*)getName
{
    return name;
}

- (void)setName:(NSString*)aName
{
    name = aName;
}

- (int)getAge
{
    return age;
}

- (void)setAge:(int)anAge
{
    if (anAge >= 0) {
        age = anAge;
    }
}
@end
```

**Special features:**
- Conventional naming: `getX` and `setX:`
- Manual implementation required
- Properties are preferred (see 8.2.4)

**Further reading:**
- [Apple Objective-C Documentation - Methods](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/DefiningClasses/DefiningClasses.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
type
  Person = class
  private
    name: string;
    age: integer;
  public
    function GetName: string;
    procedure SetName(value: string);
    function GetAge: integer;
    procedure SetAge(value: integer);
  end;

function Person.GetName: string;
begin
  Result := name;
end;

procedure Person.SetName(value: string);
begin
  name := value;
end;

function Person.GetAge: integer;
begin
  Result := age;
end;

procedure Person.SetAge(value: integer);
begin
  if value >= 0 then
    age := value;
end;
```

**Special features:**
- Conventional naming: `GetX` and `SetX`
- `function` for getters, `procedure` for setters
- Properties are preferred (see 8.2.4)

**Further reading:**
- [Delphi Documentation - Methods](https://docwiki.embarcadero.com/RADStudio/Alexandria/en/Methods)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
class person name =
object
    val mutable name = name
    val mutable age = 0
    
    method get_name = name
    method set_name n = name <- n
    method get_age = age
    method set_age a = if a >= 0 then age <- a
end
```

**Special features:**
- Conventional naming: `get_x` and `set_x`
- `method` for methods
- Manual implementation required

**Further reading:**
- [OCaml Documentation - Methods](https://v2.ocaml.org/manual/objectexamples.html)

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

sub get_name {
    my ($self) = @_;
    return $self->{name};
}

sub set_name {
    my ($self, $name) = @_;
    $self->{name} = $name;
}

sub get_age {
    my ($self) = @_;
    return $self->{age};
}

sub set_age {
    my ($self, $age) = @_;
    $self->{age} = $age if $age >= 0;
}
```

**Special features:**
- Conventional naming: `get_x` and `set_x`
- Subroutines for methods
- Manual implementation required

**Further reading:**
- [Perl Documentation - Methods](https://perldoc.perl.org/perlobj)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
class Person
{
    private var name: String = "";
    private var age: Int = 0;
    
    public function getName(): String
    {
        return name;
    }
    
    public function setName(name: String): Void
    {
        this.name = name;
    }
    
    public function getAge(): Int
    {
        return age;
    }
    
    public function setAge(age: Int): Void
    {
        if (age >= 0) {
            this.age = age;
        }
    }
}
```

**Special features:**
- Conventional naming: `getX()` and `setX()`
- Manual implementation required
- Cross-platform compatible

**Further reading:**
- [Haxe Documentation - Methods](https://haxe.org/manual/class-field-method.html)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
class PERSON
feature
    name: STRING
    age: INTEGER
    
    set_name (a_name: STRING)
        do
            name := a_name
        end
    
    set_age (an_age: INTEGER)
        require
            an_age >= 0
        do
            age := an_age
        end
end
```

**Special features:**
- Getters are features (attributes)
- Setters are routines
- Design-by-contract with preconditions

**Further reading:**
- [Eiffel Documentation - Features](https://www.eiffel.org/doc/eiffel/Language)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
mutable struct Person
    _name::String
    _age::Int
end

function get_name(p::Person)
    return p._name
end

function set_name(p::Person, name::String)
    p._name = name
end

function get_age(p::Person)
    return p._age
end

function set_age(p::Person, age::Int)
    if age >= 0
        p._age = age
    end
end
```

**Special features:**
- Conventional naming: `get_x` and `set_x`
- Functions outside the structure
- Manual implementation required

**Further reading:**
- [Julia Documentation - Methods](https://docs.julialang.org/en/v1/manual/methods/)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
classdef Person < handle
    properties (Access = private)
        Name
        Age
    end
    
    methods
        function obj = Person(name, age)
            obj.Name = name;
            obj.Age = age;
        end
        
        function name = getName(obj)
            name = obj.Name;
        end
        
        function setAge(obj, age)
            if age >= 0
                obj.Age = age;
            end
        end
    end
end
```

**Special features:**
- Conventional getters/setters: `getX()` and `setX()` methods
- MATLAB also has built-in property accessors: `get.PropertyName` and `set.PropertyName`
- Setters only work with handle classes (`< handle`) without returning `obj`

**Further reading:**
- [MATLAB Documentation - Property Access Methods](https://www.mathworks.com/help/matlab/matlab_oop/property-access-methods.html)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
(define person%
  (class object%
    (super-new)
    (init-field name)
    (field [age 0])

    (define/public (get-name) name)
    (define/public (set-name n) (set! name n))
    (define/public (get-age) age)
    (define/public (set-age a) (when (>= a 0) (set! age a)))))
```

**Special features:**
- Conventional naming: `get-x` and `set-x`
- `define/public` for public methods
- Manual implementation required

**Further reading:**
- [Racket Documentation - Methods](https://docs.racket-lang.org/guide/classes.html)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Getters and Setters (experimental)
class Person
{
    private var name: String;
    private var age: i32;
    
    fn GetName(self: Self) -> String
    {
        return self.name;
    }
    
    fn SetName(self: Self, name: String)
    {
        self.name = name;
    }
    
    fn GetAge(self: Self) -> i32
    {
        return self.age;
    }
    
    fn SetAge(self: Self, age: i32)
    {
        if age >= 0 {
            self.age = age;
        }
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
    var _name: String
    var _age: Int
    
    fn get_name(self) -> String:
        return self._name
    
    fn set_name(inout self, name: String):
        self._name = name
    
    fn get_age(self) -> Int:
        return self._age
    
    fn set_age(inout self, age: Int):
        if age >= 0:
            self._age = age
```

**Special features:**
- Conventional naming: `get_x` and `set_x`
- `inout` for setter parameters
- Python-like syntax

**Further reading:**
- [Mojo Documentation - Methods](https://docs.modular.com/mojo/manual/structs-and-classes/)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
Person[name_] := Module[{age = 0},
    <|
        "name" -> name,
        "age" -> age,
        "get_name" -> Function[name],
        "set_name" -> Function[newName, name = newName],
        "get_age" -> Function[age],
        "set_age" -> Function[newAge, If[newAge >= 0, age = newAge]]
    |>
]
```

**Special features:**
- Getters/setters as functions in the association
- Functional programming
- Manual implementation required

**Further reading:**
- [Wolfram Language Documentation - Methods](https://reference.wolfram.com/language/guide/ObjectOrientedProgramming.html)

</TabItem>
</Tabs>


## 8.2.4. Properties with Accessors

Properties with custom getter and setter methods for controlled access.

### Languages {#sprachen}

<Tabs availableTabs={['carbon', 'crystal', 'csharp', 'd', 'dart', 'fsharp', 'groovy', 'kotlin', 'object-pascal', 'objective-c', 'python', 'ruby', 'scala', 'swift', 'typescript', 'vbnet']} orangeTabs={['php']}>
<TabItem value="csharp" label="C#">

```csharp
class Person
{
    private string name;
    private int age;
    
    public string Name
    {
        get { return name; }
        set { name = value; }
    }
    
    public int Age
    {
        get { return age; }
        set { if (value >= 0) age = value; }
    }
}
```

**Special features:**
- `get` and `set` accessors
- `value` is the implicit parameter in the setter
- Can have different access modifiers

**Further reading:**
- [Microsoft C# Documentation - Properties](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/properties)

</TabItem>
<TabItem value="python" label="Python">

```python
class Person:
    def __init__(self, name):
        self._name = name
        self._age = 0
    
    @property
    def name(self):
        return self._name
    
    @name.setter
    def name(self, value):
        self._name = value
    
    @property
    def age(self):
        return self._age
    
    @age.setter
    def age(self, value):
        if value >= 0:
            self._age = value
```

**Special features:**
- `@property` decorator for getters
- `@property_name.setter` for setters
- Syntax like normal attributes

**Further reading:**
- [Python Documentation - property](https://docs.python.org/3/library/functions.html#property)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
class Person
{
    private var _name: String = ""
    private var _age: Int = 0
    
    var name: String
        get() = _name
        set(value) { _name = value }
    
    var age: Int
        get() = _age
        set(value) {
            if (value >= 0) {
                _age = value
            }
        }
}
```

**Special features:**
- `get()` and `set(value)` accessors
- Backing field with `_` prefix
- Syntax like normal properties

**Further reading:**
- [Kotlin Documentation - Properties](https://kotlinlang.org/docs/properties.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
class Person
{
    private var _name: String = ""
    private var _age: Int = 0
    
    var name: String
    {
        get { return _name }
        set { _name = newValue }
    }
    
    var age: Int
    {
        get { return _age }
        set {
            if newValue >= 0 {
                _age = newValue
            }
        }
    }
}
```

**Special features:**
- `get` and `set` accessors
- `newValue` is the implicit parameter in the setter
- Can have different access modifiers

**Further reading:**
- [Swift Documentation - Properties](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/properties/)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
class Person
{
    private var _name: String = ""
    private var _age: Int = 0
    
    def name: String = _name
    def name_=(value: String): Unit = _name = value
    
    def age: Int = _age
    def age_=(value: Int): Unit = {
        if (value >= 0) {
            _age = value
        }
    }
}
```

**Special features:**
- Getter as `def name: Type`
- Setter as `def name_=(value: Type)`
- Syntax like normal properties

**Further reading:**
- [Scala Documentation - Properties](https://docs.scala-lang.org/tour/classes.html)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
class Person
    def initialize(name)
        @name = name
        @age = 0
    end
    
    def name
        @name
    end
    
    def name=(value)
        @name = value
    end
    
    def age
        @age
    end
    
    def age=(value)
        @age = value if value >= 0
    end
end
```

**Special features:**
- Getter as `def name`
- Setter as `def name=(value)`
- Syntax like normal attributes

**Further reading:**
- [Ruby Documentation - Attributes](https://ruby-doc.org/core-3.1.2/doc/syntax/assignment_rdoc.html)

</TabItem>
<TabItem value="php" label="PHP">

```php
class Person
{
    private $name;
    private $age;
    
    public function __get($property)
    {
        if ($property === 'name') {
            return $this->name;
        }
        if ($property === 'age') {
            return $this->age;
        }
    }
    
    public function __set($property, $value)
    {
        if ($property === 'name') {
            $this->name = $value;
        }
        if ($property === 'age' && $value >= 0) {
            $this->age = $value;
        }
    }
}
```

**Special features:**
- Magic methods `__get` and `__set`
- Dynamic property access
- No explicit property declaration

**Further reading:**
- [PHP Documentation - Magic Methods](https://www.php.net/manual/en/language.oop5.magic.php)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
class Person
{
    String _name = "";
    int _age = 0;
    
    String get name => _name;
    set name(String value) => _name = value;
    
    int get age => _age;
    set age(int value) {
        if (value >= 0) {
            _age = value;
        }
    }
}
```

**Special features:**
- `get` and `set` keywords
- Arrow syntax for simple accessors
- Syntax like normal properties

**Further reading:**
- [Dart Documentation - Getters and Setters](https://dart.dev/language/classes#getters-and-setters)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
class Person
    @name : String = ""
    @age : Int32 = 0
    
    def name : String
        @name
    end
    
    def name=(value : String)
        @name = value
    end
    
    def age : Int32
        @age
    end
    
    def age=(value : Int32)
        @age = value if value >= 0
    end
end
```

**Special features:**
- Getter as `def name : Type`
- Setter as `def name=(value : Type)`
- Syntax like normal properties

**Further reading:**
- [Crystal Documentation - Properties](https://crystal-lang.org/reference/1.11/syntax_and_semantics/classes_and_methods.html)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
class Person
{
    private String name
    private int age
    
    String getName()
    {
        return name
    }
    
    void setName(String value)
    {
        this.name = value
    }
    
    int getAge()
    {
        return age
    }
    
    void setAge(int value)
    {
        if (value >= 0) {
            this.age = value
        }
    }
}
```

**Special features:**
- Getters/setters are automatically generated
- Manual implementation for custom logic
- Syntax like normal properties

**Further reading:**
- [Groovy Documentation - Properties](https://groovy-lang.org/objectorientation.html#_properties)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
type Person() =
    let mutable name = ""
    let mutable age = 0
    
    member this.Name
        with get() = name
        and set(value) = name <- value
    
    member this.Age
        with get() = age
        and set(value) =
            if value >= 0 then
                age <- value
```

**Special features:**
- `with get()` and `and set(value)`
- `member` for Properties
- Syntax like normal Properties

**Further reading:**
- [F# Documentation - Properties](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/members/properties)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
Class Person
    Private name As String
    Private age As Integer
    
    Public Property Name As String
        Get
            Return name
        End Get
        Set(value As String)
            name = value
        End Set
    End Property
    
    Public Property Age As Integer
        Get
            Return age
        End Get
        Set(value As Integer)
            If value >= 0 Then
                age = value
            End If
        End Set
    End Property
End Class
```

**Special features:**
- `Property` with `Get` and `Set` blocks
- `value` parameter in setter
- Syntax like normal Properties

**Further reading:**
- [Microsoft VB.NET Documentation - Properties](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/procedures/property-procedures)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
@interface Person : NSObject
{
    NSString* _name;
    int _age;
}
@property (nonatomic, strong) NSString* name;
@property (nonatomic, assign) int age;
@end

@implementation Person
@synthesize name = _name;
@synthesize age = _age;

- (void)setAge:(int)age
{
    if (age >= 0) {
        _age = age;
    }
}
@end
```

**Special features:**
- `@property` declares Property
- `@synthesize` generates Getter/Setter
- Custom Setter for validation

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
    property Age: integer read age write SetAge;
    
    procedure SetAge(value: integer);
  end;

procedure Person.SetAge(value: integer);
begin
  if value >= 0 then
    age := value;
end;
```

**Special features:**
- `property` with `read` and `write`
- Can directly reference Field or Method
- Syntax like normal Properties

**Further reading:**
- [Delphi Documentation - Properties](https://docwiki.embarcadero.com/RADStudio/Alexandria/en/Properties)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
class Person
{
    private _name: string = "";
    private _age: number = 0;
    
    get name(): string
    {
        return this._name;
    }
    
    set name(value: string)
    {
        this._name = value;
    }
    
    get age(): number
    {
        return this._age;
    }
    
    set age(value: number)
    {
        if (value >= 0) {
            this._age = value;
        }
    }
}
```

**Special features:**
- `get` and `set` Accessors
- Type annotations for parameters and return types
- Syntax like normal Properties

**Further reading:**
- [TypeScript Documentation - Accessors](https://www.typescriptlang.org/docs/handbook/2/classes.html#getters--setters)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Properties with Accessors (experimental)
class Person
{
    private var _name: String;
    private var _age: i32;
    
    fn Name(self: Self) -> String
    {
        return self._name;
    }
    
    fn SetName(self: Self, value: String)
    {
        self._name = value;
    }
    
    fn Age(self: Self) -> i32
    {
        return self._age;
    }
    
    fn SetAge(self: Self, value: i32)
    {
        if value >= 0 {
            self._age = value;
        }
    }
}
```

**Special features:**
- Experimental language, syntax may still change
- C++-like syntax

**Further reading:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="d" label="D">

```d
// Properties with @property
class Circle {
    private double _radius;

    this(double radius) {
        _radius = radius;
    }

    @property double radius() const {
        return _radius;
    }

    @property void radius(double value) {
        assert(value >= 0);
        _radius = value;
    }

    @property double area() const {
        return 3.14159 * _radius * _radius;
    }
}

auto c = new Circle(5.0);
writeln(c.radius);  // 5.0 (like field access, calls Getter)
c.radius = 10.0;    // Calls Setter
writeln(c.area);     // 314.159 (computed Property)
```

**Special features:**
- `@property` allows methods to be called like fields (without parentheses)
- Getter: `@property T name()` – call without parentheses
- Setter: `@property void name(T value)` – assignment like fields
- Read-only Properties: only define Getter

**Further reading:**
- [D Language Specification - Property Functions](https://dlang.org/spec/function.html#property-functions)

</TabItem>
</Tabs>


## 8.2.5. Auto-Properties

Properties where getters and setters are automatically generated without explicit backing fields.

### Languages {#sprachen}

<Tabs availableTabs={['csharp', 'dart', 'fsharp', 'groovy', 'kotlin', 'php', 'scala', 'swift', 'typescript', 'vbnet']}>
<TabItem value="csharp" label="C#">

```csharp
class Person
{
    public string Name { get; set; }
    public int Age { get; set; }
    
    // Read-only Auto-Property
    public string Id { get; private set; }
    
    // Auto-Property with Initializer
    public string Email { get; set; } = "";
}
```

**Special features:**
- Automatic generation of Backing Field
- `{ get; set; }` syntax
- Supports initializers and different access modifiers

**Further reading:**
- [Microsoft C# Documentation - Auto-Implemented Properties](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/auto-implemented-properties)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
class Person
{
    var name: String = ""  // Auto-Property with Getter/Setter
    var age: Int = 0
    
    val id: String = ""   // Read-only Auto-Property
}
```

**Special features:**
- `var` automatically generates Getter/Setter
- `val` only generates Getter
- Initializer required

**Further reading:**
- [Kotlin Documentation - Properties](https://kotlinlang.org/docs/properties.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
class Person
{
    var name: String = ""  // Auto-Property with Getter/Setter
    var age: Int = 0
    
    let id: String = ""    // Read-only Auto-Property
}
```

**Special features:**
- `var` automatically generates Getter/Setter
- `let` only generates Getter
- Initializer required

**Further reading:**
- [Swift Documentation - Stored Properties](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/properties/#stored-properties)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
class Person
{
    var name: String = ""  // Auto-Property with Getter/Setter
    var age: Int = 0
    
    val id: String = ""     // Read-only Auto-Property
}
```

**Special features:**
- `var` automatically generates Getter/Setter
- `val` only generates Getter
- Initializer required

**Further reading:**
- [Scala Documentation - Fields](https://docs.scala-lang.org/tour/classes.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
class Person
{
    String name = "";  // Auto-Property with Getter/Setter
    int age = 0;
    
    final String id = "";  // Read-only Auto-Property
}
```

**Special features:**
- Standard fields automatically have Getter/Setter
- `final` only generates Getter
- Initializer required

**Further reading:**
- [Dart Documentation - Instance Variables](https://dart.dev/language/classes#instance-variables)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
class Person
{
    String name = ""  // Auto-Property with Getter/Setter
    int age = 0
}
```

**Special features:**
- All fields automatically generate Getter/Setter
- No explicit declaration required
- Access like Properties

**Further reading:**
- [Groovy Documentation - Properties](https://groovy-lang.org/objectorientation.html#_properties)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
type Person() =
    member val Name = "" with get, set
    member val Age = 0 with get, set
    member val Id = "" with get  // Read-only
```

**Special features:**
- `member val` with `with get, set` for Auto-Properties
- Automatic Backing Field generation
- Initializer required

**Further reading:**
- [F# Documentation - Auto-Properties](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/members/properties#auto-implemented-properties)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
Class Person
    Public Property Name As String = ""
    Public Property Age As Integer = 0
    Public ReadOnly Property Id As String = ""
End Class
```

**Special features:**
- `Property` without Get/Set blocks generates Auto-Property
- `ReadOnly Property` only generates Getter
- Initializer supported

**Further reading:**
- [Microsoft VB.NET Documentation - Auto-Implemented Properties](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/procedures/auto-implemented-properties)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
class Person
{
    name: string = "";  // Auto-Property (public field)
    age: number = 0;
    
    readonly id: string = "";  // Read-only Auto-Property
}
```

**Special features:**
- Public fields behave like Auto-Properties
- `readonly` for read-only Properties
- Initializer required

**Further reading:**
- [TypeScript Documentation - Classes](https://www.typescriptlang.org/docs/handbook/2/classes.html)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
// Constructor Promotion (since PHP 8.0)
class Person
{
    public function __construct(
        public string $name,
        private int $age,
        protected string $email = ""
    ) {}
}

$person = new Person("Max", 30, "max@example.com");
echo $person->name; // "Max"
?>
```

**Special features:**
- Constructor Promotion since PHP 8.0
- Access modifier in constructor automatically declares Property
- Supports `public`, `private`, `protected` and `readonly`

**Further reading:**
- [PHP Documentation - Constructor Promotion](https://www.php.net/manual/en/language.oop5.decon.php#language.oop5.decon.constructor.promotion)

</TabItem>
</Tabs>


## 8.2.6. Computed Properties

Properties whose values are computed at runtime instead of being stored.

### Languages {#sprachen}

<Tabs availableTabs={['carbon', 'crystal', 'csharp', 'dart', 'fsharp', 'groovy', 'kotlin', 'object-pascal', 'php', 'python', 'ruby', 'scala', 'swift', 'typescript', 'vbnet']} yellowTabs={['objective-c']}>
<TabItem value="csharp" label="C#">

```csharp
class Rectangle
{
    private double width;
    private double height;
    
    public double Area
    {
        get { return width * height; }
    }
    
    public double Perimeter
    {
        get { return 2 * (width + height); }
    }
}
```

**Special features:**
- Computed Properties with `get` (and optional `set`) Accessors
- Value is computed on each access
- No Backing Field required

**Further reading:**
- [Microsoft C# Documentation - Properties](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/properties)

</TabItem>
<TabItem value="python" label="Python">

```python
class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height
    
    @property
    def area(self):
        return self.width * self.height
    
    @property
    def perimeter(self):
        return 2 * (self.width + self.height)
```

**Special features:**
- `@property` Decorator for Computed Properties
- Setter optional via `@name.setter` Decorator
- Syntax like normal attributes

**Further reading:**
- [Python Documentation - property](https://docs.python.org/3/library/functions.html#property)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
class Rectangle(val width: Double, val height: Double)
{
    val area: Double
        get() = width * height
    
    val perimeter: Double
        get() = 2 * (width + height)
}
```

**Special features:**
- `get()` and optional `set()` for Computed Properties
- Possible without Backing Field
- Value is computed on each access

**Further reading:**
- [Kotlin Documentation - Properties](https://kotlinlang.org/docs/properties.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
class Rectangle
{
    var width: Double
    var height: Double
    
    var area: Double
    {
        get { return width * height }
    }
    
    var perimeter: Double
    {
        get { return 2 * (width + height) }
    }
}
```

**Special features:**
- `get` without `set` for read-only Computed Properties
- Value is computed on each access
- No Backing Field

**Further reading:**
- [Swift Documentation - Computed Properties](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/properties/#computed-properties)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
class Rectangle(val width: Double, val height: Double)
{
    def area: Double = width * height
    
    def perimeter: Double = 2 * (width + height)
}
```

**Special features:**
- `def` without parameters for Computed Properties
- Value is computed on each access
- Syntax like normal Properties

**Further reading:**
- [Scala Documentation - Methods](https://docs.scala-lang.org/tour/classes.html)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
class Rectangle
    def initialize(width, height)
        @width = width
        @height = height
    end
    
    def area
        @width * @height
    end
    
    def perimeter
        2 * (@width + @height)
    end
end
```

**Special features:**
- Methods without parameters behave like Computed Properties
- Syntax like normal attributes
- Value is computed on each access

**Further reading:**
- [Ruby Documentation - Methods](https://ruby-doc.org/core-3.1.2/Method.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
class Rectangle
{
    double width;
    double height;
    
    double get area => width * height;
    
    double get perimeter => 2 * (width + height);
}
```

**Special features:**
- `get` and `set` with arrow syntax for Computed Properties
- Value is computed on each access

**Further reading:**
- [Dart Documentation - Getters](https://dart.dev/language/classes#getters-and-setters)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
class Rectangle
    property width : Float64
    property height : Float64
    
    def area : Float64
        width * height
    end
    
    def perimeter : Float64
        2 * (width + height)
    end
end
```

**Special features:**
- Methods without parameters for Computed Properties
- Syntax like normal Properties
- Value is computed on each access

**Further reading:**
- [Crystal Documentation - Methods](https://crystal-lang.org/reference/1.11/syntax_and_semantics/classes_and_methods.html)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
class Rectangle
{
    double width
    double height
    
    double getArea()
    {
        return width * height
    }
    
    double getPerimeter()
    {
        return 2 * (width + height)
    }
}
```

**Special features:**
- Methods for Computed Properties
- Access like Properties possible
- Value is computed on each access

**Further reading:**
- [Groovy Documentation - Properties](https://groovy-lang.org/objectorientation.html#_properties)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
type Rectangle(width: float, height: float) =
    member this.Width = width
    member this.Height = height
    
    member this.Area = width * height
    
    member this.Perimeter = 2.0 * (width + height)
```

**Special features:**
- `member` without `with get, set` for Computed Properties
- Value is computed on each access
- No Backing Field

**Further reading:**
- [F# Documentation - Properties](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/members/properties)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
Class Rectangle
    Public Property Width As Double
    Public Property Height As Double
    
    Public ReadOnly Property Area As Double
        Get
            Return Width * Height
        End Get
    End Property
    
    Public ReadOnly Property Perimeter As Double
        Get
            Return 2 * (Width + Height)
        End Get
    End Property
End Class
```

**Special features:**
- `ReadOnly Property` with only `Get` block
- Value is computed on each access
- No Backing Field

**Further reading:**
- [Microsoft VB.NET Documentation - Properties](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/procedures/property-procedures)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
@interface Rectangle : NSObject
@property (nonatomic, assign) double width;
@property (nonatomic, assign) double height;
- (double)area;
- (double)perimeter;
@end

@implementation Rectangle
- (double)area
{
    return self.width * self.height;
}

- (double)perimeter
{
    return 2 * (self.width + self.height);
}
@end
```

**Special features:**
- Methods for Computed Properties
- No `@property` declaration for Computed Properties
- Value is computed on each access

**Further reading:**
- [Apple Objective-C Documentation - Properties](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/EncapsulatingData/EncapsulatingData.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
type
  Rectangle = class
  private
    width, height: double;
  public
    property Width: double read width write width;
    property Height: double read height write height;
    property Area: double read GetArea;
    property Perimeter: double read GetPerimeter;
    
    function GetArea: double;
    function GetPerimeter: double;
  end;

function Rectangle.GetArea: double;
begin
  Result := width * height;
end;

function Rectangle.GetPerimeter: double;
begin
  Result := 2 * (width + height);
end;
```

**Special features:**
- `property` with `read` (and optional `write`) referencing method
- Value is computed on each access

**Further reading:**
- [Delphi Documentation - Properties](https://docwiki.embarcadero.com/RADStudio/Alexandria/en/Properties)

</TabItem>
<TabItem value="php" label="PHP">

```php
class Rectangle
{
    private $width;
    private $height;
    
    public function __get($property)
    {
        if ($property === 'area') {
            return $this->width * $this->height;
        }
        if ($property === 'perimeter') {
            return 2 * ($this->width + $this->height);
        }
    }
}
```

**Special features:**
- Magic Method `__get` for Computed Properties
- Dynamic Property access
- Value is computed on each access

**Further reading:**
- [PHP Documentation - Magic Methods](https://www.php.net/manual/en/language.oop5.magic.php)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
class Rectangle
{
    width: number;
    height: number;
    
    get area(): number
    {
        return this.width * this.height;
    }
    
    get perimeter(): number
    {
        return 2 * (this.width + this.height);
    }
}
```

**Special features:**
- `get` Accessor without `set`
- Type annotations for return types
- Value is computed on each access

**Further reading:**
- [TypeScript Documentation - Accessors](https://www.typescriptlang.org/docs/handbook/2/classes.html#getters--setters)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Computed Properties (experimental)
class Rectangle
{
    var width: f64;
    var height: f64;
    
    fn Area(self: Self) -> f64
    {
        return self.width * self.height;
    }
    
    fn Perimeter(self: Self) -> f64
    {
        return 2 * (self.width + self.height);
    }
}
```

**Special features:**
- Experimental language, syntax may still change
- Methods for Computed Properties
- C++-like syntax

**Further reading:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
</Tabs>


## 8.2.7. Property Initializers

Direct initialization of Properties at declaration.

### Languages {#sprachen}

<Tabs availableTabs={['carbon', 'csharp', 'dart', 'fsharp', 'groovy', 'java', 'javascript', 'kotlin', 'lean4', 'scala', 'swift', 'typescript', 'vbnet']}>
<TabItem value="csharp" label="C#">

```csharp
class Person
{
    public string Name { get; set; } = "Unknown";
    public int Age { get; set; } = 0;
    public List<string> Tags { get; set; } = new List<string>();
}
```

**Special features:**
- Initializer directly after Property declaration
- Supported since C# 6.0
- Can contain complex expressions

**Further reading:**
- [Microsoft C# Documentation - Auto-Implemented Properties](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/auto-implemented-properties)

</TabItem>
<TabItem value="java" label="Java">

```java
class Person
{
    private String name = "Unknown";
    private int age = 0;
    private List<String> tags = new ArrayList<>();
}
```

**Special features:**
- Initializer directly at field declaration
- Supported since Java 1.0
- Can contain complex expressions

**Further reading:**
- [Oracle Java Documentation - Initializing Fields](https://docs.oracle.com/javase/tutorial/java/javaOO/initial.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
class Person
{
    var name: String = "Unknown"
    var age: Int = 0
    val tags: MutableList<String> = mutableListOf()
}
```

**Special features:**
- Initializer directly at Property declaration
- Required for non-nullable Properties
- Can contain complex expressions

**Further reading:**
- [Kotlin Documentation - Properties](https://kotlinlang.org/docs/properties.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
structure Person where
  name : String := "Unknown"
  age : Nat := 0
  tags : List String := []
```

**Special features:**
- Default values directly at field declaration in `structure`
- Fields with default values can be omitted at instantiation
- Can contain arbitrary expressions as default values

**Further reading:**
- [Functional Programming in Lean - Structures](https://lean-lang.org/functional_programming_in_lean/getting-to-know/structures.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
class Person
{
    var name: String = "Unknown"
    var age: Int = 0
    var tags: [String] = []
}
```

**Special features:**
- Initializer directly at Property declaration
- Required for non-optional Properties
- Can contain complex expressions

**Further reading:**
- [Swift Documentation - Property Initialization](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/initialization/)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
class Person
{
    var name: String = "Unknown"
    var age: Int = 0
    val tags: List[String] = List.empty
}
```

**Special features:**
- Initializer directly at Field declaration
- Required for non-optional Fields
- Can contain complex expressions

**Further reading:**
- [Scala Documentation - Classes](https://docs.scala-lang.org/tour/classes.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
class Person
{
    String name = "Unknown";
    int age = 0;
    List<String> tags = [];
}
```

**Special features:**
- Initializer directly at Field declaration
- Required for non-nullable Fields
- Can contain complex expressions

**Further reading:**
- [Dart Documentation - Instance Variables](https://dart.dev/language/classes#instance-variables)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
class Person
{
    name = "Unknown";
    age = 0;
    tags = [];
}
```

**Special features:**
- Class Fields with initializers (since ES2022)
- Initializer directly at Field declaration
- Can contain complex expressions

**Further reading:**
- [MDN Web Docs - Class Fields](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
class Person
{
    name: string = "Unknown";
    age: number = 0;
    tags: string[] = [];
}
```

**Special features:**
- Initializer directly at Field declaration
- Type annotations required
- Can contain complex expressions

**Further reading:**
- [TypeScript Documentation - Classes](https://www.typescriptlang.org/docs/handbook/2/classes.html)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
class Person
{
    String name = "Unknown"
    int age = 0
    List<String> tags = []
}
```

**Special features:**
- Initializer directly at Field declaration
- Automatic Getter/Setter generation
- Can contain complex expressions

**Further reading:**
- [Groovy Documentation - Properties](https://groovy-lang.org/objectorientation.html#_properties)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
type Person() =
    member val Name = "Unknown" with get, set
    member val Age = 0 with get, set
    member val Tags = [] : string list with get, set
```

**Special features:**
- Initializer directly at Property declaration
- `member val` with Initializer
- Can contain complex expressions

**Further reading:**
- [F# Documentation - Properties](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/members/properties)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
Class Person
    Public Property Name As String = "Unknown"
    Public Property Age As Integer = 0
    Public Property Tags As List(Of String) = New List(Of String)
End Class
```

**Special features:**
- Initializer directly at Property declaration
- Supported since VB.NET 2010
- Can contain complex expressions

**Further reading:**
- [Microsoft VB.NET Documentation - Auto-Implemented Properties](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/procedures/auto-implemented-properties)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Property Initializers (experimental)
class Person
{
    var name: String = "Unknown";
    var age: i32 = 0;
    var tags: [String] = [];
}
```

**Special features:**
- Experimental language, syntax may still change
- Initializer directly at Field declaration
- C++-like syntax

**Further reading:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
</Tabs>


## 8.2.8. Property Delegates

Delegation of Getter/Setter logic to external objects for reusable Property behavior.

### Languages {#sprachen}

<Tabs availableTabs={['kotlin']}>
<TabItem value="kotlin" label="Kotlin">

```kotlin
import kotlin.properties.Delegates

class Person
{
    var name: String by Delegates.observable("") { prop, old, new ->
        println("$old -> $new")
    }
    
    var age: Int by Delegates.vetoable(0) { prop, old, new ->
        new >= 0
    }
    
    // Custom Delegate
    var email: String by EmailDelegate()
}

class EmailDelegate
{
    private var value: String = ""
    
    operator fun getValue(thisRef: Any?, property: kotlin.reflect.KProperty<*>): String
    {
        return value
    }
    
    operator fun setValue(thisRef: Any?, property: kotlin.reflect.KProperty<*>, value: String)
    {
        if (value.contains("@")) {
            this.value = value
        }
    }
}
```

**Special features:**
- `by` keyword for Property Delegation
- Standard Delegates: `lazy`, `observable`, `vetoable`
- Custom Delegates via `getValue`/`setValue` operators

**Further reading:**
- [Kotlin Documentation - Delegated Properties](https://kotlinlang.org/docs/delegated-properties.html)

</TabItem>
</Tabs>


## 8.2.9. Backing Fields

Private fields that store the actual value of a Property.

### Languages {#sprachen}

<Tabs availableTabs={['kotlin']} yellowTabs={['csharp']} orangeTabs={['swift', 'typescript']}>
<TabItem value="csharp" label="C#">

```csharp
class Person
{
    private string _name;  // Backing Field
    
    public string Name
    {
        get { return _name; }
        set { _name = value; }
    }
}
```

**Special features:**
- Explicit Backing Fields with `_` prefix (convention)
- Auto-Properties automatically generate Backing Fields
- Access with `field` in Custom Accessors not possible

**Further reading:**
- [Microsoft C# Documentation - Properties](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/properties)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
class Person
{
    private var _name: String = ""  // Backing Field
    
    var name: String
        get() = _name
        set(value) { _name = value }
    
    // Automatic Backing Field with field
    var age: Int = 0
        set(value) {
            field = if (value >= 0) value else field
        }
}
```

**Special features:**
- Explicit Backing Fields with `_` prefix
- Automatic `field` keyword in Custom Accessors
- Access to Backing Field via `field`

**Further reading:**
- [Kotlin Documentation - Backing Fields](https://kotlinlang.org/docs/properties.html#backing-fields)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
class Person
{
    private var _name: String = ""  // Backing Field
    
    var name: String
    {
        get { return _name }
        set { _name = newValue }
    }
}
```

**Special features:**
- Explicit Backing Fields with `_` prefix (convention)
- Stored Properties automatically have Backing Fields
- Computed Properties have no Backing Fields

**Further reading:**
- [Swift Documentation - Properties](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/properties/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
class Person
{
    private _name: string = "";  // Backing Field
    
    get name(): string
    {
        return this._name;
    }
    
    set name(value: string)
    {
        this._name = value;
    }
}
```

**Special features:**
- Explicit Backing Fields with `_` prefix (convention)
- Manual implementation required
- No automatic Backing Field

**Further reading:**
- [TypeScript Documentation - Accessors](https://www.typescriptlang.org/docs/handbook/2/classes.html#getters--setters)

</TabItem>
</Tabs>


## 8.2.10. Lateinit Variables

Variables that do not need to be initialized immediately, but must be initialized before first access.

### Languages {#sprachen}

<Tabs availableTabs={['dart', 'kotlin', 'swift']}>
<TabItem value="kotlin" label="Kotlin">

```kotlin
class Person
{
    lateinit var name: String
    lateinit var email: String
    
    fun initialize(name: String, email: String)
    {
        this.name = name
        this.email = email
    }
    
    fun checkInitialized()
    {
        if (::name.isInitialized) {
            println(name)
        }
    }
}
```

**Special features:**
- `lateinit` for non-nullable Properties
- Must be initialized before first access
- `::property.isInitialized` for checking

**Further reading:**
- [Kotlin Documentation - lateinit](https://kotlinlang.org/docs/properties.html#late-initialized-properties-and-variables)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
class Person
{
    var name: String!  // Implicitly Unwrapped Optional
    var email: String!
    
    func initialize(name: String, email: String)
    {
        self.name = name
        self.email = email
    }
}
```

**Special features:**
- Implicitly Unwrapped Optionals (`!`) for Lateinit behavior
- Automatic unwrapping on access
- Must be initialized before first access

**Further reading:**
- [Swift Documentation - Optionals](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/thebasics/#optionals)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Late Variables (since Dart 2.12)
class UserService {
  // Lateinit: Will be initialized later
  late String username;
  
  // Lazy Initialization: Only computed on first access
  late final String greeting = 'Hello, $username!';
  
  void init(String name) {
    username = name;
  }
}

// Late for expensive calculations
late final config = loadExpensiveConfig();
```

**Special features:**
- `late` allows deferred initialization of non-nullable variables
- `late final` for Lazy Initialization (computed on first access)
- Throws `LateInitializationError` if accessed before initialization
- Since Dart 2.12 (Sound Null Safety)

**Further reading:**
- [Dart Documentation - Late Variables](https://dart.dev/language/variables#late-variables)

</TabItem>
</Tabs>


## 8.2.11. Init-only Setters

Properties that can only be set during object initialization.

### Languages {#sprachen}

<Tabs availableTabs={['csharp', 'php']} yellowTabs={['kotlin']}>
<TabItem value="csharp" label="C#">

```csharp
class Person
{
    public string Name { get; init; }  // Init-only (since C# 9.0)
    public int Age { get; init; }
    
    public Person(string name, int age)
    {
        Name = name;  // OK: In constructor
        Age = age;
    }
}

// Usage
var person = new Person("Max", 30);
// person.Name = "New";  // Error: Cannot be set after initialization
```

**Special features:**
- `init` Accessor instead of `set` (since C# 9.0)
- Can only be set during object creation
- Creates immutable Properties after initialization

**Further reading:**
- [Microsoft C# Documentation - init](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/init)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
class Person(val name: String, val age: Int)  // Read-only Properties

// Or with Custom Init-only
class Person
{
    private var _name: String? = null
    val name: String
        get() = _name ?: throw IllegalStateException("Name not initialized")
    
    fun init(name: String)
    {
        if (_name == null) {
            _name = name
        } else {
            throw IllegalStateException("Name already initialized")
        }
    }
}
```

**Special features:**
- `val` Properties are read-only after initialization
- Custom Init-only via private Setter with initialization check
- No native `init` keyword

**Further reading:**
- [Kotlin Documentation - Properties](https://kotlinlang.org/docs/properties.html)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
// Readonly Properties (since PHP 8.1)
class Person
{
    public function __construct(
        public readonly string $name,
        public readonly int $age
    ) {}
}

$person = new Person("Max", 30);
echo $person->name; // "Max"
// $person->name = "Anna"; // Error: Cannot modify readonly property
?>
```

**Special features:**
- `readonly` Properties since PHP 8.1
- Can only be initialized once (in constructor)
- Since PHP 8.2: `readonly` classes (all Properties readonly)

**Further reading:**
- [PHP Documentation - Readonly Properties](https://www.php.net/manual/en/language.oop5.properties.php#language.oop5.properties.readonly-properties)

</TabItem>
</Tabs>


## 8.2.12. Indexers

Properties that enable array-like access to objects.

### Languages {#sprachen}

<Tabs availableTabs={['carbon', 'cpp', 'csharp', 'dart', 'fsharp', 'groovy', 'kotlin', 'objective-c', 'object-pascal', 'php', 'python', 'ruby', 'scala', 'swift', 'vbnet']} yellowTabs={['lean4']}>
<TabItem value="csharp" label="C#">

```csharp
class MyList
{
    private int[] items = new int[10];
    
    public int this[int index]
    {
        get { return items[index]; }
        set { items[index] = value; }
    }
    
    public string this[string key]
    {
        get { return key.ToUpper(); }
    }
}

// Usage
var list = new MyList();
list[0] = 42;
int value = list[0];
```

**Special features:**
- `this[index]` syntax for Indexers
- Supports overloading with different parameter types
- Can be Get-only or Get/Set

**Further reading:**
- [Microsoft C# Documentation - Indexers](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/indexers/)

</TabItem>
<TabItem value="python" label="Python">

```python
class MyList:
    def __init__(self):
        self.items = [0] * 10
    
    def __getitem__(self, index):
        return self.items[index]
    
    def __setitem__(self, index, value):
        self.items[index] = value
    
    def __delitem__(self, index):
        del self.items[index]
```

**Special features:**
- `__getitem__`, `__setitem__`, `__delitem__` Magic Methods
- Supports slicing and complex indices
- Array-like syntax

**Further reading:**
- [Python Documentation - Emulating Container Types](https://docs.python.org/3/reference/datamodel.html#object.__getitem__)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
class MyList
{
    private val items = IntArray(10)
    
    operator fun get(index: Int): Int
    {
        return items[index]
    }
    
    operator fun set(index: Int, value: Int)
    {
        items[index] = value
    }
}

// Usage
val list = MyList()
list[0] = 42
val value = list[0]
```

**Special features:**
- `operator fun get` and `operator fun set`
- `operator` keyword required
- Supports overloading

**Further reading:**
- [Kotlin Documentation - Operator Overloading](https://kotlinlang.org/docs/operator-overloading.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
structure MyList where
  items : Array Int := Array.mkArray 10 0

-- GetElem instance for index access
instance : GetElem MyList Nat Int (fun l i => i < l.items.size) where
  getElem l i h := l.items.get ⟨i, h⟩

-- Usage
def example : Int :=
  let list : MyList := { items := #[10, 20, 30] }
  list[1]  -- 20
```

**Special features:**
- `GetElem` Type Class for `a[i]` syntax
- Requires proof that index is valid (dependent type)
- Read-only access — writing via functional updates (`Array.set`)

**Further reading:**
- [Lean 4 Documentation - Type Classes](https://lean-lang.org/functional_programming_in_lean/type-classes.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
class MyList
{
    private var items = Array(repeating: 0, count: 10)
    
    subscript(index: Int) -> Int
    {
        get { return items[index] }
        set { items[index] = newValue }
    }
    
    subscript(key: String) -> String
    {
        return key.uppercased()
    }
}

// Usage
let list = MyList()
list[0] = 42
let value = list[0]
```

**Special features:**
- `subscript` keyword for Indexers
- Supports overloading with different parameter types
- Can be Get-only or Get/Set

**Further reading:**
- [Swift Documentation - Subscripts](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/subscripts/)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
class MyList
{
    private val items = Array.fill(10)(0)
    
    def apply(index: Int): Int = items(index)
    def update(index: Int, value: Int): Unit = items(index) = value
}

// Usage
val list = new MyList
list(0) = 42
val value = list(0)
```

**Special features:**
- `apply` for Getter, `update` for Setter
- Parenthesis syntax `list(index)` instead of `list[index]`
- Supports overloading

**Further reading:**
- [Scala Documentation - Apply Methods](https://docs.scala-lang.org/tour/extractor-objects.html)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
class MyList
    def initialize
        @items = Array.new(10, 0)
    end
    
    def [](index)
        @items[index]
    end
    
    def []=(index, value)
        @items[index] = value
    end
end

# Usage
list = MyList.new
list[0] = 42
value = list[0]
```

**Special features:**
- `[]` and `[]=` methods for Indexers
- Array-like syntax
- Supports overloading

**Further reading:**
- [Ruby Documentation - Methods](https://ruby-doc.org/core-3.1.2/Method.html)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
class MyList
{
private:
    int items[10];
    
public:
    int& operator[](int index)
    {
        return items[index];
    }
    
    const int& operator[](int index) const
    {
        return items[index];
    }
};

// Usage
MyList list;
list[0] = 42;
int value = list[0];
```

**Special features:**
- `operator[]` for Indexers
- Overloading for const/non-const objects
- Return reference for Assignment

**Further reading:**
- [cppreference.com - Operator Overloading](https://en.cppreference.com/w/cpp/language/operators)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
class MyList
{
    List<int> items = List.filled(10, 0);
    
    int operator [](int index) => items[index];
    
    void operator []=(int index, int value) => items[index] = value;
}

// Usage
var list = MyList();
list[0] = 42;
int value = list[0];
```

**Special features:**
- `operator []` and `operator []=`
- `operator` keyword required
- Supports overloading

**Further reading:**
- [Dart Documentation - Operators](https://dart.dev/language/operators)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
type MyList() =
    let items = Array.zeroCreate<int> 10
    
    member this.Item
        with get(index: int) = items.[index]
        and set(index: int) value = items.[index] <- value
```

**Special features:**
- `Item` Property with index parameter
- `with get` and `and set`
- Array-like syntax

**Further reading:**
- [F# Documentation - Indexed Properties](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/members/indexed-properties)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
Class MyList
    Private items(9) As Integer
    
    Default Public Property Item(index As Integer) As Integer
        Get
            Return items(index)
        End Get
        Set(value As Integer)
            items(index) = value
        End Set
    End Property
End Class

' Usage
Dim list As New MyList
list(0) = 42
Dim value As Integer = list(0)
```

**Special features:**
- `Default Property` for Indexers
- Parenthesis syntax `list(index)` instead of `list[index]`
- Supports overloading

**Further reading:**
- [Microsoft VB.NET Documentation - Default Properties](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/procedures/default-properties)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
@interface MyList : NSObject
- (int)objectAtIndexedSubscript:(int)index;
- (void)setObject:(int)value atIndexedSubscript:(int)index;
@end

@implementation MyList
{
    int items[10];
}

- (int)objectAtIndexedSubscript:(int)index
{
    return items[index];
}

- (void)setObject:(int)value atIndexedSubscript:(int)index
{
    items[index] = value;
}
@end

// Usage
MyList* list = [[MyList alloc] init];
list[0] = 42;
int value = list[0];
```

**Special features:**
- `objectAtIndexedSubscript:` and `setObject:atIndexedSubscript:`
- Supported since Objective-C 2.0
- Array-like syntax

**Further reading:**
- [Apple Objective-C Documentation - Subscripting](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/FoundationClasses/FoundationClasses.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
type
  MyList = class
  private
    items: array[0..9] of integer;
  public
    property Items[index: integer]: integer read GetItem write SetItem; default;
    
    function GetItem(index: integer): integer;
    procedure SetItem(index: integer; value: integer);
  end;

function MyList.GetItem(index: integer): integer;
begin
  Result := items[index];
end;

procedure MyList.SetItem(index: integer; value: integer);
begin
  items[index] := value;
end;

// Usage
var list: MyList;
begin
  list := MyList.Create;
  list[0] := 42;
  value := list[0];
end;
```

**Special features:**
- `default` Property for Indexers
- `property` with index parameter
- Array-like syntax

**Further reading:**
- [Delphi Documentation - Default Properties](https://docwiki.embarcadero.com/RADStudio/Alexandria/en/Properties)

</TabItem>
<TabItem value="php" label="PHP">

```php
class MyList implements ArrayAccess
{
    private array $items;

    public function __construct()
    {
        $this->items = array_fill(0, 10, 0);
    }

    public function offsetGet(mixed $offset): mixed
    {
        return $this->items[$offset];
    }

    public function offsetSet(mixed $offset, mixed $value): void
    {
        $this->items[$offset] = $value;
    }

    public function offsetExists(mixed $offset): bool
    {
        return isset($this->items[$offset]);
    }

    public function offsetUnset(mixed $offset): void
    {
        unset($this->items[$offset]);
    }
}

$list = new MyList();
$list[0] = 42;
```

**Special features:**
- `ArrayAccess` interface for index access with `[]`
- Methods: `offsetGet`, `offsetSet`, `offsetExists`, `offsetUnset`
- Property declarations do not allow function calls as default values

**Further reading:**
- [PHP Documentation - ArrayAccess](https://www.php.net/manual/en/class.arrayaccess.php)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
class MyList
{
    private int[] items = new int[10]
    
    int getAt(int index)
    {
        return items[index]
    }
    
    void putAt(int index, int value)
    {
        items[index] = value
    }
}

// Usage
def list = new MyList()
list[0] = 42
def value = list[0]
```

**Special features:**
- `getAt` and `putAt` methods
- Array-like syntax
- Supports overloading

**Further reading:**
- [Groovy Documentation - Operators](https://groovy-lang.org/operators.html)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Indexers (experimental)
class MyList
{
    private var items: [i32; 10] = [0; 10];
    
    fn Get(self: Self, index: i32) -> i32
    {
        return self.items[index];
    }
    
    fn Set(self: Self, index: i32, value: i32)
    {
        self.items[index] = value;
    }
}
```

**Special features:**
- Experimental language, syntax may still change
- Methods for Indexers
- C++-like syntax

**Further reading:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
</Tabs>

