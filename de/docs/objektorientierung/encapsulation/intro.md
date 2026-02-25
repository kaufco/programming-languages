---
slug: /objektorientierung/encapsulation
title: 8.2. Encapsulation
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 8.2. Encapsulation

Kapselung von Daten und Methoden.

## 8.2.1. Access Modifiers (public, private, protected)

Zugriffsmodifikatoren, die die Sichtbarkeit von Klassenmitgliedern steuern.

### Sprachen {#sprachen}

<Tabs availableTabs={['carbon', 'cpp', 'crystal', 'csharp', 'd', 'eiffel', 'fsharp', 'groovy', 'java', 'kotlin', 'lean4', 'matlab', 'mojo', 'nim', 'object-pascal', 'objective-c', 'ocaml', 'php', 'ruby', 'scala', 'swift', 'typescript', 'vbnet']} yellowTabs={['dart', 'haxe', 'javascript', 'v']} orangeTabs={['python']}>
<TabItem value="java" label="Java">

```java
class Person
{
    public String name;        // Öffentlich
    private int age;          // Privat
    protected String id;      // Geschützt
}
```

**Besonderheiten:**
- `public`: Zugriff von überall
- `private`: Nur innerhalb der Klasse
- `protected`: Innerhalb der Klasse und abgeleiteten Klassen

**Weiterführende Links:**
- [Oracle Java Documentation - Access Control](https://docs.oracle.com/javase/tutorial/java/javaOO/accesscontrol.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
class Person
{
    public string Name;        // Öffentlich
    private int age;          // Privat
    protected string Id;       // Geschützt
    internal string Code;     // Intern (nur innerhalb der Assembly)
}
```

**Besonderheiten:**
- `public`: Zugriff von überall
- `private`: Nur innerhalb der Klasse
- `protected`: Innerhalb der Klasse und abgeleiteten Klassen
- `internal`: Nur innerhalb der Assembly

**Weiterführende Links:**
- [Microsoft C# Documentation - Access Modifiers](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/access-modifiers)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
class Person
{
public:
    std::string name;          // Öffentlich
private:
    int age;                   // Privat
protected:
    std::string id;            // Geschützt
};
```

**Besonderheiten:**
- `public`: Zugriff von überall
- `private`: Nur innerhalb der Klasse
- `protected`: Innerhalb der Klasse und abgeleiteten Klassen
- Sektionen statt einzelne Modifikatoren

**Weiterführende Links:**
- [cppreference.com - Access Specifiers](https://en.cppreference.com/w/cpp/language/access)

</TabItem>
<TabItem value="python" label="Python">

```python
class Person:
    def __init__(self, name):
        self.name = name      # Öffentlich (Konvention)
        self._age = 0         # Geschützt (Konvention, beginnt mit _)
        self.__id = 0         # Privat (Name Mangling, beginnt mit __)
```

**Besonderheiten:**
- Keine echten Zugriffsmodifikatoren
- `_` für protected (Konvention)
- `__` für private (Name Mangling)

**Weiterführende Links:**
- [Python Documentation - Private Variables](https://docs.python.org/3/tutorial/classes.html#private-variables)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
class Person
{
    constructor(name)
    {
        this.name = name;     // Öffentlich
        this._age = 0;        // Geschützt (Konvention)
    }
    
    // Private Fields (seit ES2022)
    #id = 0;
    
    getPrivateId()
    {
        return this.#id;
    }
}
```

**Besonderheiten:**
- Keine echten Zugriffsmodifikatoren (außer Private Fields)
- `_` für protected (Konvention)
- `#` für private Fields (seit ES2022)

**Weiterführende Links:**
- [MDN Web Docs - Private Class Fields](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
class Person
{
    public name: string;      // Öffentlich
    private age: number;      // Privat
    protected id: string;    // Geschützt
}
```

**Besonderheiten:**
- `public`: Zugriff von überall (Standard)
- `private`: Nur innerhalb der Klasse
- `protected`: Innerhalb der Klasse und abgeleiteten Klassen

**Weiterführende Links:**
- [TypeScript Documentation - Access Modifiers](https://www.typescriptlang.org/docs/handbook/2/classes.html#member-visibility)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
class Person
{
    public val name: String   // Öffentlich (Standard)
    private var age: Int      // Privat
    protected var id: String // Geschützt
    internal var code: String // Intern (nur innerhalb des Moduls)
}
```

**Besonderheiten:**
- `public`: Zugriff von überall (Standard)
- `private`: Nur innerhalb der Klasse
- `protected`: Innerhalb der Klasse und abgeleiteten Klassen
- `internal`: Nur innerhalb des Moduls

**Weiterführende Links:**
- [Kotlin Documentation - Visibility Modifiers](https://kotlinlang.org/docs/visibility-modifiers.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
namespace Person
  def name := "Alice"              -- Öffentlich (Standard)
  private def age := 30            -- Privat (nur in dieser Datei)
  protected def id := "P-001"     -- Geschützt (nur in Namespace Person.*)
end Person
```

**Besonderheiten:**
- Öffentlich ist Standard (kein explizites `public` Keyword)
- `private`: Nur innerhalb der aktuellen Datei/Sektion sichtbar
- `protected`: Nur im aktuellen Namespace und dessen Erweiterungen sichtbar
- Zugriffsmodifikatoren wirken auf Deklarationsebene, nicht auf einzelne Struktur-Felder

**Weiterführende Links:**
- [Lean 4 Documentation](https://lean-lang.org/lean4/doc/)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
class Person
{
    public var name: String    // Öffentlich
    private var age: Int       // Privat
    fileprivate var id: String // File-private
    internal var code: String  // Intern (Standard)
}
```

**Besonderheiten:**
- `public`: Zugriff von überall
- `private`: Nur innerhalb der Klasse
- `fileprivate`: Nur innerhalb derselben Datei
- `internal`: Nur innerhalb des Moduls (Standard)

**Weiterführende Links:**
- [Swift Documentation - Access Control](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/accesscontrol/)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
class Person
{
    val name: String           // Öffentlich (Standard)
    private var age: Int      // Privat
    protected var id: String  // Geschützt
    private[this] var code: String // Privat für diese Instanz
}
```

**Besonderheiten:**
- Öffentlich ist Standard
- `private`: Nur innerhalb der Klasse
- `protected`: Innerhalb der Klasse und abgeleiteten Klassen
- `private[this]`: Nur für diese Instanz

**Weiterführende Links:**
- [Scala Documentation - Visibility](https://docs.scala-lang.org/tour/visibility-and-access-modifiers.html)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
class Person
    public
    attr_accessor :name        # Öffentlich
    
    private
    attr_accessor :age         # Privat
    
    protected
    attr_accessor :id          # Geschützt
end
```

**Besonderheiten:**
- `public`: Zugriff von überall (Standard)
- `private`: Nur innerhalb der Klasse
- `protected`: Innerhalb der Klasse und abgeleiteten Klassen
- Sektionen statt einzelne Modifikatoren

**Weiterführende Links:**
- [Ruby Documentation - Visibility](https://ruby-doc.org/core-3.1.2/doc/syntax/visibility_rdoc.html)

</TabItem>
<TabItem value="php" label="PHP">

```php
class Person
{
    public $name;      // Öffentlich
    private $age;      // Privat
    protected $id;     // Geschützt
}
```

**Besonderheiten:**
- `public`: Zugriff von überall
- `private`: Nur innerhalb der Klasse
- `protected`: Innerhalb der Klasse und abgeleiteten Klassen

**Weiterführende Links:**
- [PHP Documentation - Visibility](https://www.php.net/manual/en/language.oop5.visibility.php)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
class Person
{
    String name;       // Öffentlich (Standard)
    int _age;          // Privat (beginnt mit _)
}
```

**Besonderheiten:**
- Öffentlich ist Standard
- `_` für private (Konvention)
- Kein `protected`

**Weiterführende Links:**
- [Dart Documentation - Libraries and Visibility](https://dart.dev/guides/language/language-tour#libraries-and-visibility)

</TabItem>
<TabItem value="d" label="D">

```d
class Person
{
    public string name;    // Öffentlich
    private int age;       // Privat
    protected string id;   // Geschützt
    package string code;    // Package-private
}
```

**Besonderheiten:**
- `public`: Zugriff von überall
- `private`: Nur innerhalb der Klasse
- `protected`: Innerhalb der Klasse und abgeleiteten Klassen
- `package`: Nur innerhalb desselben Packages

**Weiterführende Links:**
- [D Language Specification - Access Control](https://dlang.org/spec/attribute.html#ProtectionAttribute)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
class Person
    property name : String    # Öffentlich
    private property age : Int32  # Privat
    protected property id : String # Geschützt
end
```

**Besonderheiten:**
- `public`: Zugriff von überall (Standard)
- `private`: Nur innerhalb der Klasse
- `protected`: Innerhalb der Klasse und abgeleiteten Klassen

**Weiterführende Links:**
- [Crystal Documentation - Visibility](https://crystal-lang.org/reference/1.11/syntax_and_semantics/visibility.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
type Person = object
    name*: string    # Öffentlich (exportiert mit *)
    age: int         # Privat (kein *)
```

**Besonderheiten:**
- `*` für öffentliche Members (exportiert)
- Ohne `*` sind Members privat

**Weiterführende Links:**
- [Nim Documentation - Export Marker](https://nim-lang.org/docs/manual.html#modules)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
class Person
{
    public String name        // Öffentlich
    private int age          // Privat
    protected String id      // Geschützt
}
```

**Besonderheiten:**
- `public`: Zugriff von überall (Standard)
- `private`: Nur innerhalb der Klasse
- `protected`: Innerhalb der Klasse und abgeleiteten Klassen

**Weiterführende Links:**
- [Groovy Documentation - Visibility](https://groovy-lang.org/objectorientation.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
type Person() =
    member val Name = "" with get, set      // Öffentlich
    member private val Age = 0 with get, set // Privat
    member protected val Id = "" with get, set // Geschützt
    member internal val Code = "" with get, set // Intern
```

**Besonderheiten:**
- `public`: Zugriff von überall (Standard)
- `private`: Nur innerhalb der Klasse
- `protected`: Innerhalb der Klasse und abgeleiteten Klassen
- `internal`: Nur innerhalb der Assembly

**Weiterführende Links:**
- [F# Documentation - Access Control](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/access-control)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
Class Person
    Public Name As String     ' Öffentlich
    Private Age As Integer    ' Privat
    Protected Id As String    ' Geschützt
    Friend Code As String     ' Intern (nur innerhalb der Assembly)
End Class
```

**Besonderheiten:**
- `Public`: Zugriff von überall
- `Private`: Nur innerhalb der Klasse
- `Protected`: Innerhalb der Klasse und abgeleiteten Klassen
- `Friend`: Nur innerhalb der Assembly

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Access Levels](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/declared-elements/access-levels)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
@interface Person : NSObject
{
@public
    NSString* name;   // Öffentlich
@private
    int age;          // Privat
@protected
    NSString* id;     // Geschützt (Standard)
}
@end
```

**Besonderheiten:**
- `@public`: Zugriff von überall
- `@private`: Nur innerhalb der Klasse
- `@protected`: Innerhalb der Klasse und abgeleiteten Klassen (Standard)
- Sektionen statt einzelne Modifikatoren

**Weiterführende Links:**
- [Apple Objective-C Documentation - Encapsulation](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/EncapsulatingData/EncapsulatingData.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
type
  Person = class
  public
    name: string;     // Öffentlich
  private
    age: integer;     // Privat
  protected
    id: string;       // Geschützt
  end;
```

**Besonderheiten:**
- `public`: Zugriff von überall
- `private`: Nur innerhalb der Klasse
- `protected`: Innerhalb der Klasse und abgeleiteten Klassen
- Sektionen statt einzelne Modifikatoren

**Weiterführende Links:**
- [Delphi Documentation - Visibility](https://docwiki.embarcadero.com/RADStudio/Alexandria/en/Classes_and_Objects)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
class person name =
object
    val name = name           # Öffentlich
    val mutable private age = 0  # Privat
    method get_name = name
    method private get_age = age
end
```

**Besonderheiten:**
- `val` für öffentliche Felder
- `private` für private Members
- Methoden können `private` sein

**Weiterführende Links:**
- [OCaml Documentation - Classes](https://v2.ocaml.org/manual/objectexamples.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
class Person {
    public var name:String;     // Öffentlich
    private var age:Int;         // Privat (explizit)
    var id:String;               // Privat (Standard)
}
```

**Besonderheiten:**
- `public`: Zugriff von überall
- `private`: Nur innerhalb der Klasse (Standard, wenn kein Modifier angegeben)
- Haxe hat KEIN `protected` Keyword
- `@:access(package.Class)` Metadata für spezielle Zugriffskontrolle

**Weiterführende Links:**
- [Haxe Documentation - Access Modifiers](https://haxe.org/manual/class-field-access-modifier.html)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
class PERSON
feature {ANY}  -- Öffentlich
    name: STRING
    
feature {NONE}  -- Privat
    age: INTEGER
    
feature {PERSON, PERSON_CHILD}  -- Geschützt
    id: STRING
end
```

**Besonderheiten:**
- Export-Klauseln für Sichtbarkeit
- `{ANY}` für öffentlich
- `{NONE}` für privat
- `{CLASS1, CLASS2}` für geschützt

**Weiterführende Links:**
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

**Besonderheiten:**
- `Access = public`: Zugriff von überall
- `Access = private`: Nur innerhalb der Klasse
- `Access = protected`: Innerhalb der Klasse und abgeleiteten Klassen

**Weiterführende Links:**
- [MATLAB Documentation - Property Attributes](https://www.mathworks.com/help/matlab/matlab_oop/property-attributes.html)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Access Modifiers (experimentell)
class Person
{
    public var name: String;      // Öffentlich
    private var age: i32;         // Privat
    protected var id: String;     // Geschützt
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
    var name: String    # Öffentlich (Standard)
    var _age: Int      # Privat (Konvention, beginnt mit _)
```

**Besonderheiten:**
- Öffentlich ist Standard
- `_` für private (Konvention)
- Python-ähnliche Syntax

**Weiterführende Links:**
- [Mojo Documentation - Structs](https://docs.modular.com/mojo/manual/structs-and-classes/)

</TabItem>
<TabItem value="v" label="V">

```v
// Access Modifiers: pub / private (default)
struct Person {
    name string      // privat (default)
pub:
    age  int         // öffentlich
pub mut:
    score int        // öffentlich und mutable
mut:
    internal int     // privat und mutable
}
```

**Besonderheiten:**
- Felder und Funktionen sind standardmäßig privat (modulintern)
- `pub` macht Felder/Funktionen öffentlich
- `pub mut` für öffentlich und mutable
- `mut` für privat und mutable
- Kein `protected` - nur `pub` und privat

**Weiterführende Links:**
- [V Documentation - Access Modifiers](https://github.com/vlang/v/blob/master/doc/docs.md#access-modifiers)

</TabItem>
</Tabs>


## 8.2.2. Package-private / Internal Visibility

Zugriffsmodifikatoren, die Sichtbarkeit auf Package- oder Modul-Ebene beschränken.

### Sprachen {#sprachen}

<Tabs availableTabs={['csharp', 'd', 'groovy', 'java', 'kotlin', 'nim', 'scala', 'swift', 'vbnet']}>
<TabItem value="java" label="Java">

```java
package com.example;

class Person
{
    String name;  // Package-private (kein Modifikator)
    public String publicName;
    private int age;
}
```

**Besonderheiten:**
- Kein Modifikator = Package-private
- Zugriff nur innerhalb desselben Packages
- Standard für Klassen ohne Modifikator

**Weiterführende Links:**
- [Oracle Java Documentation - Package Access](https://docs.oracle.com/javase/tutorial/java/javaOO/accesscontrol.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
class Person
{
    internal string name;  // Intern (nur innerhalb der Assembly)
    public string publicName;
    private int age;
}
```

**Besonderheiten:**
- `internal`: Zugriff nur innerhalb derselben Assembly
- Standard für Klassen ohne Modifikator

**Weiterführende Links:**
- [Microsoft C# Documentation - internal](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/internal)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
class Person
{
    internal var name: String  // Intern (nur innerhalb des Moduls)
    public var publicName: String
    private var age: Int
}
```

**Besonderheiten:**
- `internal`: Zugriff nur innerhalb desselben Moduls
- Standard für Klassen ohne Modifikator

**Weiterführende Links:**
- [Kotlin Documentation - Visibility Modifiers](https://kotlinlang.org/docs/visibility-modifiers.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
class Person
{
    internal var name: String  // Intern (nur innerhalb des Moduls, Standard)
    public var publicName: String
    private var age: Int
    fileprivate var id: String  // File-private (nur innerhalb derselben Datei)
}
```

**Besonderheiten:**
- `internal`: Zugriff nur innerhalb desselben Moduls (Standard)
- `fileprivate`: Zugriff nur innerhalb derselben Datei

**Weiterführende Links:**
- [Swift Documentation - Access Control](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/accesscontrol/)

</TabItem>
<TabItem value="d" label="D">

```d
class Person
{
    package string name;  // Package-private (nur innerhalb desselben Packages)
    public string publicName;
    private int age;
}
```

**Besonderheiten:**
- `package`: Zugriff nur innerhalb desselben Packages
- Standard für Klassen ohne Modifikator

**Weiterführende Links:**
- [D Language Specification - Package](https://dlang.org/spec/attribute.html#ProtectionAttribute)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
Class Person
    Friend name As String  ' Intern (nur innerhalb der Assembly)
    Public publicName As String
    Private age As Integer
End Class
```

**Besonderheiten:**
- `Friend`: Zugriff nur innerhalb derselben Assembly
- Standard für Klassen ohne Modifikator

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Friend](https://learn.microsoft.com/en-us/dotnet/visual-basic/language-reference/modifiers/friend)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Modul: person.nim
type Person = object
    name*: string    # Exportiert (öffentlich im Modul)
    age: int         # Nicht exportiert (privat im Modul)
```

**Besonderheiten:**
- `*` exportiert Members aus dem Modul
- Ohne `*` sind Members privat im Modul
- Modul-basierte Sichtbarkeit

**Weiterführende Links:**
- [Nim Documentation - Export Marker](https://nim-lang.org/docs/manual.html#modules)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Package-private (Default-Sichtbarkeit für Methoden)
class MyClass {
    // Package-private Methode (kein Modifier)
    void packageMethod() {
        println "Package-private"
    }

    // Properties sind standardmäßig public (mit generierten Gettern/Settern)
    String name

    // Explizit private
    private void privateMethod() {
        println "Privat"
    }
}
```

**Besonderheiten:**
- Methoden ohne Modifier sind package-private (wie in Java)
- Properties (Felder ohne Modifier) generieren automatisch public Getter/Setter
- `@PackageScope` Annotation für explizite Package-private-Sichtbarkeit bei Properties

**Weiterführende Links:**
- [Groovy Documentation - Visibility](https://groovy-lang.org/objectorientation.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
package com.example.data

// Package-private: nur innerhalb des 'data' Pakets sichtbar
private[data] class InternalData
{
    val value = 10
}

class PublicData
{
    // Zugriff innerhalb des gleichen Pakets erlaubt
    val internal = new InternalData()

    // Feld nur innerhalb des 'example' Pakets sichtbar
    private[example] val sharedField: String = "shared"
}
```

**Besonderheiten:**
- `private[packageName]` beschränkt Sichtbarkeit auf ein bestimmtes Paket
- Flexibler als Java: beliebige Paketebene wählbar (z.B. `private[data]`, `private[example]`)
- `private[this]` beschränkt auf die aktuelle Instanz
- Standard-Sichtbarkeit ist `public` (kein Keyword nötig)

**Weiterführende Links:**
- [Scala Documentation - Access Modifiers](https://docs.scala-lang.org/tour/access-modifier.html)

</TabItem>
</Tabs>


## 8.2.3. Getters und Setters

Methoden zum Lesen (Getter) und Schreiben (Setter) von privaten Feldern.

### Sprachen {#sprachen}

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

**Besonderheiten:**
- Konventionelle Namensgebung: `getX()` und `setX()`
- Manuelle Implementierung erforderlich
- Setter können Validierung enthalten

**Weiterführende Links:**
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

**Besonderheiten:**
- Konventionelle Namensgebung: `GetX()` und `SetX()`
- Manuelle Implementierung erforderlich
- Properties werden bevorzugt (siehe 8.2.4)

**Weiterführende Links:**
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

**Besonderheiten:**
- Konventionelle Namensgebung: `getX()` und `setX()`
- `const` für Getter, die Objekt nicht modifizieren
- Manuelle Implementierung erforderlich

**Weiterführende Links:**
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

**Besonderheiten:**
- Konventionelle Namensgebung: `get_x()` und `set_x()`
- Manuelle Implementierung erforderlich
- `@property` wird bevorzugt (siehe 8.2.4)

**Weiterführende Links:**
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

**Besonderheiten:**
- Konventionelle Namensgebung: `getX()` und `setX()`
- Manuelle Implementierung erforderlich
- Getters/Setters werden bevorzugt (siehe 8.2.4)

**Weiterführende Links:**
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

**Besonderheiten:**
- Konventionelle Namensgebung: `getX()` und `setX()`
- Typannotationen für Parameter und Rückgabetypen
- Manuelle Implementierung erforderlich

**Weiterführende Links:**
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

**Besonderheiten:**
- Konventionelle Namensgebung: `getX()` und `setX()`
- Manuelle Implementierung erforderlich
- Properties werden bevorzugt (siehe 8.2.4)

**Weiterführende Links:**
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

**Besonderheiten:**
- Konventionelle Namensgebung: `getX()` und `setX()`
- Manuelle Implementierung erforderlich
- Computed Properties werden bevorzugt (siehe 8.2.6)

**Weiterführende Links:**
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

**Besonderheiten:**
- Konventionelle Namensgebung: `getX()` und `setX()`
- Manuelle Implementierung erforderlich
- Properties werden bevorzugt (siehe 8.2.4)

**Weiterführende Links:**
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

**Besonderheiten:**
- Konventionelle Namensgebung: `get_x` und `set_x`
- Manuelle Implementierung erforderlich
- `attr_accessor` wird bevorzugt (siehe 8.2.4)

**Weiterführende Links:**
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

**Besonderheiten:**
- Konventionelle Namensgebung: `getX()` und `setX()`
- Manuelle Implementierung erforderlich
- Magic Methods `__get` und `__set` werden bevorzugt (siehe 8.2.4)

**Weiterführende Links:**
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

**Besonderheiten:**
- Konventionelle Namensgebung: `getX()` und `setX()`
- Manuelle Implementierung erforderlich
- Getters/Setters werden bevorzugt (siehe 8.2.4)

**Weiterführende Links:**
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

**Besonderheiten:**
- Konventionelle Namensgebung: `getX()` und `setX()`
- Manuelle Implementierung erforderlich
- Ähnlich zu C++

**Weiterführende Links:**
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

**Besonderheiten:**
- Konventionelle Namensgebung: `get_x` und `set_x`
- Manuelle Implementierung erforderlich
- Properties werden bevorzugt (siehe 8.2.4)

**Weiterführende Links:**
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

**Besonderheiten:**
- Konventionelle Namensgebung: `getX` und `setX`
- Prozeduren mit `var` Parameter für Setter
- Manuelle Implementierung erforderlich

**Weiterführende Links:**
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

**Besonderheiten:**
- Konventionelle Namensgebung: `getX()` und `setX()`
- Manuelle Implementierung erforderlich
- Properties werden automatisch generiert (siehe 8.2.5)

**Weiterführende Links:**
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

**Besonderheiten:**
- Konventionelle Namensgebung: `GetX()` und `SetX()`
- Manuelle Implementierung erforderlich
- Properties werden bevorzugt (siehe 8.2.4)

**Weiterführende Links:**
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

**Besonderheiten:**
- Konventionelle Namensgebung: `GetX()` und `SetX()`
- `Function` für Getter, `Sub` für Setter
- Properties werden bevorzugt (siehe 8.2.4)

**Weiterführende Links:**
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

**Besonderheiten:**
- Konventionelle Namensgebung: `getX` und `setX:`
- Manuelle Implementierung erforderlich
- Properties werden bevorzugt (siehe 8.2.4)

**Weiterführende Links:**
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

**Besonderheiten:**
- Konventionelle Namensgebung: `GetX` und `SetX`
- `function` für Getter, `procedure` für Setter
- Properties werden bevorzugt (siehe 8.2.4)

**Weiterführende Links:**
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

**Besonderheiten:**
- Konventionelle Namensgebung: `get_x` und `set_x`
- `method` für Methoden
- Manuelle Implementierung erforderlich

**Weiterführende Links:**
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

**Besonderheiten:**
- Konventionelle Namensgebung: `get_x` und `set_x`
- Subroutinen für Methoden
- Manuelle Implementierung erforderlich

**Weiterführende Links:**
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

**Besonderheiten:**
- Konventionelle Namensgebung: `getX()` und `setX()`
- Manuelle Implementierung erforderlich
- Cross-Platform-kompatibel

**Weiterführende Links:**
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

**Besonderheiten:**
- Getter sind Features (Attribute)
- Setter sind Routinen
- Design-by-Contract mit Preconditions

**Weiterführende Links:**
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

**Besonderheiten:**
- Konventionelle Namensgebung: `get_x` und `set_x`
- Funktionen außerhalb der Struktur
- Manuelle Implementierung erforderlich

**Weiterführende Links:**
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

**Besonderheiten:**
- Konventionelle Getter/Setter: `getX()` und `setX()` Methoden
- MATLAB hat auch eingebaute Property-Accessors: `get.PropertyName` und `set.PropertyName`
- Setter funktionieren nur bei Handle-Klassen (`< handle`) ohne Rückgabe von `obj`

**Weiterführende Links:**
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

**Besonderheiten:**
- Konventionelle Namensgebung: `get-x` und `set-x`
- `define/public` für öffentliche Methoden
- Manuelle Implementierung erforderlich

**Weiterführende Links:**
- [Racket Documentation - Methods](https://docs.racket-lang.org/guide/classes.html)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Getters und Setters (experimentell)
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

**Besonderheiten:**
- Experimentelle Sprache, Syntax kann sich noch ändern
- C++-ähnliche Syntax

**Weiterführende Links:**
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

**Besonderheiten:**
- Konventionelle Namensgebung: `get_x` und `set_x`
- `inout` für Setter-Parameter
- Python-ähnliche Syntax

**Weiterführende Links:**
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

**Besonderheiten:**
- Getter/Setter als Funktionen in der Association
- Funktionale Programmierung
- Manuelle Implementierung erforderlich

**Weiterführende Links:**
- [Wolfram Language Documentation - Methods](https://reference.wolfram.com/language/guide/ObjectOrientedProgramming.html)

</TabItem>
</Tabs>


## 8.2.4. Properties mit Accessors

Properties mit benutzerdefinierten Getter- und Setter-Methoden für kontrollierten Zugriff.

### Sprachen {#sprachen}

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

**Besonderheiten:**
- `get` und `set` Accessors
- `value` ist der implizite Parameter im Setter
- Können unterschiedliche Zugriffsmodifikatoren haben

**Weiterführende Links:**
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

**Besonderheiten:**
- `@property` Decorator für Getter
- `@property_name.setter` für Setter
- Syntax wie normale Attribute

**Weiterführende Links:**
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

**Besonderheiten:**
- `get()` und `set(value)` Accessors
- Backing Field mit `_` Präfix
- Syntax wie normale Properties

**Weiterführende Links:**
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

**Besonderheiten:**
- `get` und `set` Accessors
- `newValue` ist der implizite Parameter im Setter
- Können unterschiedliche Zugriffsmodifikatoren haben

**Weiterführende Links:**
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

**Besonderheiten:**
- Getter als `def name: Type`
- Setter als `def name_=(value: Type)`
- Syntax wie normale Properties

**Weiterführende Links:**
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

**Besonderheiten:**
- Getter als `def name`
- Setter als `def name=(value)`
- Syntax wie normale Attribute

**Weiterführende Links:**
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

**Besonderheiten:**
- Magic Methods `__get` und `__set`
- Dynamische Property-Zugriffe
- Keine explizite Property-Deklaration

**Weiterführende Links:**
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

**Besonderheiten:**
- `get` und `set` Keywords
- Arrow-Syntax für einfache Accessors
- Syntax wie normale Properties

**Weiterführende Links:**
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

**Besonderheiten:**
- Getter als `def name : Type`
- Setter als `def name=(value : Type)`
- Syntax wie normale Properties

**Weiterführende Links:**
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

**Besonderheiten:**
- Getter/Setter werden automatisch generiert
- Manuelle Implementierung für Custom Logic
- Syntax wie normale Properties

**Weiterführende Links:**
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

**Besonderheiten:**
- `with get()` und `and set(value)`
- `member` für Properties
- Syntax wie normale Properties

**Weiterführende Links:**
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

**Besonderheiten:**
- `Property` mit `Get` und `Set` Blöcken
- `value` Parameter im Setter
- Syntax wie normale Properties

**Weiterführende Links:**
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

**Besonderheiten:**
- `@property` deklariert Property
- `@synthesize` generiert Getter/Setter
- Custom Setter für Validierung

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
    property Age: integer read age write SetAge;
    
    procedure SetAge(value: integer);
  end;

procedure Person.SetAge(value: integer);
begin
  if value >= 0 then
    age := value;
end;
```

**Besonderheiten:**
- `property` mit `read` und `write`
- Kann direkt auf Field oder Method verweisen
- Syntax wie normale Properties

**Weiterführende Links:**
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

**Besonderheiten:**
- `get` und `set` Accessors
- Typannotationen für Parameter und Rückgabetypen
- Syntax wie normale Properties

**Weiterführende Links:**
- [TypeScript Documentation - Accessors](https://www.typescriptlang.org/docs/handbook/2/classes.html#getters--setters)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Properties mit Accessors (experimentell)
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

**Besonderheiten:**
- Experimentelle Sprache, Syntax kann sich noch ändern
- C++-ähnliche Syntax

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="d" label="D">

```d
// Properties mit @property
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
writeln(c.radius);  // 5.0 (wie Feldzugriff, ruft Getter auf)
c.radius = 10.0;    // Ruft Setter auf
writeln(c.area);     // 314.159 (berechnete Property)
```

**Besonderheiten:**
- `@property` ermöglicht Methoden wie Felder aufzurufen (ohne Klammern)
- Getter: `@property T name()` – Aufruf ohne Klammern
- Setter: `@property void name(T value)` – Zuweisung wie bei Feldern
- Read-only Properties: nur Getter definieren

**Weiterführende Links:**
- [D Language Specification - Property Functions](https://dlang.org/spec/function.html#property-functions)

</TabItem>
</Tabs>


## 8.2.5. Auto-Properties

Properties, bei denen Getter und Setter automatisch generiert werden, ohne explizite Backing Fields.

### Sprachen {#sprachen}

<Tabs availableTabs={['csharp', 'dart', 'fsharp', 'groovy', 'kotlin', 'php', 'scala', 'swift', 'typescript', 'vbnet']}>
<TabItem value="csharp" label="C#">

```csharp
class Person
{
    public string Name { get; set; }
    public int Age { get; set; }
    
    // Read-only Auto-Property
    public string Id { get; private set; }
    
    // Auto-Property mit Initializer
    public string Email { get; set; } = "";
}
```

**Besonderheiten:**
- Automatische Generierung von Backing Field
- `{ get; set; }` Syntax
- Unterstützt Initializer und unterschiedliche Zugriffsmodifikatoren

**Weiterführende Links:**
- [Microsoft C# Documentation - Auto-Implemented Properties](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/auto-implemented-properties)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
class Person
{
    var name: String = ""  // Auto-Property mit Getter/Setter
    var age: Int = 0
    
    val id: String = ""   // Read-only Auto-Property
}
```

**Besonderheiten:**
- `var` generiert automatisch Getter/Setter
- `val` generiert nur Getter
- Initializer erforderlich

**Weiterführende Links:**
- [Kotlin Documentation - Properties](https://kotlinlang.org/docs/properties.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
class Person
{
    var name: String = ""  // Auto-Property mit Getter/Setter
    var age: Int = 0
    
    let id: String = ""    // Read-only Auto-Property
}
```

**Besonderheiten:**
- `var` generiert automatisch Getter/Setter
- `let` generiert nur Getter
- Initializer erforderlich

**Weiterführende Links:**
- [Swift Documentation - Stored Properties](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/properties/#stored-properties)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
class Person
{
    var name: String = ""  // Auto-Property mit Getter/Setter
    var age: Int = 0
    
    val id: String = ""     // Read-only Auto-Property
}
```

**Besonderheiten:**
- `var` generiert automatisch Getter/Setter
- `val` generiert nur Getter
- Initializer erforderlich

**Weiterführende Links:**
- [Scala Documentation - Fields](https://docs.scala-lang.org/tour/classes.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
class Person
{
    String name = "";  // Auto-Property mit Getter/Setter
    int age = 0;
    
    final String id = "";  // Read-only Auto-Property
}
```

**Besonderheiten:**
- Standard-Felder haben automatisch Getter/Setter
- `final` generiert nur Getter
- Initializer erforderlich

**Weiterführende Links:**
- [Dart Documentation - Instance Variables](https://dart.dev/language/classes#instance-variables)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
class Person
{
    String name = ""  // Auto-Property mit Getter/Setter
    int age = 0
}
```

**Besonderheiten:**
- Alle Felder generieren automatisch Getter/Setter
- Keine explizite Deklaration erforderlich
- Zugriff wie Properties

**Weiterführende Links:**
- [Groovy Documentation - Properties](https://groovy-lang.org/objectorientation.html#_properties)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
type Person() =
    member val Name = "" with get, set
    member val Age = 0 with get, set
    member val Id = "" with get  // Read-only
```

**Besonderheiten:**
- `member val` mit `with get, set` für Auto-Properties
- Automatische Backing Field-Generierung
- Initializer erforderlich

**Weiterführende Links:**
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

**Besonderheiten:**
- `Property` ohne Get/Set Blöcke generiert Auto-Property
- `ReadOnly Property` generiert nur Getter
- Initializer unterstützt

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Auto-Implemented Properties](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/procedures/auto-implemented-properties)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
class Person
{
    name: string = "";  // Auto-Property (öffentliches Feld)
    age: number = 0;
    
    readonly id: string = "";  // Read-only Auto-Property
}
```

**Besonderheiten:**
- Öffentliche Felder verhalten sich wie Auto-Properties
- `readonly` für read-only Properties
- Initializer erforderlich

**Weiterführende Links:**
- [TypeScript Documentation - Classes](https://www.typescriptlang.org/docs/handbook/2/classes.html)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
// Constructor Promotion (seit PHP 8.0)
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

**Besonderheiten:**
- Constructor Promotion seit PHP 8.0
- Zugriffsmodifikator im Konstruktor deklariert Property automatisch
- Unterstützt `public`, `private`, `protected` und `readonly`

**Weiterführende Links:**
- [PHP Documentation - Constructor Promotion](https://www.php.net/manual/en/language.oop5.decon.php#language.oop5.decon.constructor.promotion)

</TabItem>
</Tabs>


## 8.2.6. Computed Properties

Properties, deren Werte zur Laufzeit berechnet werden, anstatt gespeichert zu werden.

### Sprachen {#sprachen}

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

**Besonderheiten:**
- Computed Properties mit `get` (und optional `set`) Accessors
- Wert wird bei jedem Zugriff berechnet
- Kein Backing Field erforderlich

**Weiterführende Links:**
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

**Besonderheiten:**
- `@property` Decorator für Computed Properties
- Setter optional über `@name.setter` Decorator
- Syntax wie normale Attribute

**Weiterführende Links:**
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

**Besonderheiten:**
- `get()` und optional `set()` für Computed Properties
- Ohne Backing Field möglich
- Wert wird bei jedem Zugriff berechnet

**Weiterführende Links:**
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

**Besonderheiten:**
- `get` ohne `set` für read-only Computed Properties
- Wert wird bei jedem Zugriff berechnet
- Kein Backing Field

**Weiterführende Links:**
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

**Besonderheiten:**
- `def` ohne Parameter für Computed Properties
- Wert wird bei jedem Zugriff berechnet
- Syntax wie normale Properties

**Weiterführende Links:**
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

**Besonderheiten:**
- Methoden ohne Parameter verhalten sich wie Computed Properties
- Syntax wie normale Attribute
- Wert wird bei jedem Zugriff berechnet

**Weiterführende Links:**
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

**Besonderheiten:**
- `get` und `set` mit Arrow-Syntax für Computed Properties
- Wert wird bei jedem Zugriff berechnet

**Weiterführende Links:**
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

**Besonderheiten:**
- Methoden ohne Parameter für Computed Properties
- Syntax wie normale Properties
- Wert wird bei jedem Zugriff berechnet

**Weiterführende Links:**
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

**Besonderheiten:**
- Methoden für Computed Properties
- Zugriff wie Properties möglich
- Wert wird bei jedem Zugriff berechnet

**Weiterführende Links:**
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

**Besonderheiten:**
- `member` ohne `with get, set` für Computed Properties
- Wert wird bei jedem Zugriff berechnet
- Kein Backing Field

**Weiterführende Links:**
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

**Besonderheiten:**
- `ReadOnly Property` mit nur `Get` Block
- Wert wird bei jedem Zugriff berechnet
- Kein Backing Field

**Weiterführende Links:**
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

**Besonderheiten:**
- Methoden für Computed Properties
- Keine `@property` Deklaration für Computed Properties
- Wert wird bei jedem Zugriff berechnet

**Weiterführende Links:**
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

**Besonderheiten:**
- `property` mit `read` (und optional `write`) auf Methode verweisend
- Wert wird bei jedem Zugriff berechnet

**Weiterführende Links:**
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

**Besonderheiten:**
- Magic Method `__get` für Computed Properties
- Dynamische Property-Zugriffe
- Wert wird bei jedem Zugriff berechnet

**Weiterführende Links:**
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

**Besonderheiten:**
- `get` Accessor ohne `set`
- Typannotationen für Rückgabetypen
- Wert wird bei jedem Zugriff berechnet

**Weiterführende Links:**
- [TypeScript Documentation - Accessors](https://www.typescriptlang.org/docs/handbook/2/classes.html#getters--setters)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Computed Properties (experimentell)
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

**Besonderheiten:**
- Experimentelle Sprache, Syntax kann sich noch ändern
- Methoden für Computed Properties
- C++-ähnliche Syntax

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
</Tabs>


## 8.2.7. Property Initializers

Direkte Initialisierung von Properties bei der Deklaration.

### Sprachen {#sprachen}

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

**Besonderheiten:**
- Initializer direkt nach Property-Deklaration
- Seit C# 6.0 unterstützt
- Kann komplexe Ausdrücke enthalten

**Weiterführende Links:**
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

**Besonderheiten:**
- Initializer direkt bei Feld-Deklaration
- Seit Java 1.0 unterstützt
- Kann komplexe Ausdrücke enthalten

**Weiterführende Links:**
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

**Besonderheiten:**
- Initializer direkt bei Property-Deklaration
- Erforderlich für nicht-nullable Properties
- Kann komplexe Ausdrücke enthalten

**Weiterführende Links:**
- [Kotlin Documentation - Properties](https://kotlinlang.org/docs/properties.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
structure Person where
  name : String := "Unknown"
  age : Nat := 0
  tags : List String := []
```

**Besonderheiten:**
- Standardwerte direkt bei Feld-Deklaration in `structure`
- Felder mit Standardwerten können bei Instanziierung weggelassen werden
- Kann beliebige Ausdrücke als Standardwerte enthalten

**Weiterführende Links:**
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

**Besonderheiten:**
- Initializer direkt bei Property-Deklaration
- Erforderlich für nicht-optionale Properties
- Kann komplexe Ausdrücke enthalten

**Weiterführende Links:**
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

**Besonderheiten:**
- Initializer direkt bei Field-Deklaration
- Erforderlich für nicht-optionale Fields
- Kann komplexe Ausdrücke enthalten

**Weiterführende Links:**
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

**Besonderheiten:**
- Initializer direkt bei Field-Deklaration
- Erforderlich für nicht-nullable Fields
- Kann komplexe Ausdrücke enthalten

**Weiterführende Links:**
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

**Besonderheiten:**
- Class Fields mit Initializern (seit ES2022)
- Initializer direkt bei Field-Deklaration
- Kann komplexe Ausdrücke enthalten

**Weiterführende Links:**
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

**Besonderheiten:**
- Initializer direkt bei Field-Deklaration
- Typannotationen erforderlich
- Kann komplexe Ausdrücke enthalten

**Weiterführende Links:**
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

**Besonderheiten:**
- Initializer direkt bei Field-Deklaration
- Automatische Getter/Setter-Generierung
- Kann komplexe Ausdrücke enthalten

**Weiterführende Links:**
- [Groovy Documentation - Properties](https://groovy-lang.org/objectorientation.html#_properties)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
type Person() =
    member val Name = "Unknown" with get, set
    member val Age = 0 with get, set
    member val Tags = [] : string list with get, set
```

**Besonderheiten:**
- Initializer direkt bei Property-Deklaration
- `member val` mit Initializer
- Kann komplexe Ausdrücke enthalten

**Weiterführende Links:**
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

**Besonderheiten:**
- Initializer direkt bei Property-Deklaration
- Seit VB.NET 2010 unterstützt
- Kann komplexe Ausdrücke enthalten

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Auto-Implemented Properties](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/procedures/auto-implemented-properties)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Property Initializers (experimentell)
class Person
{
    var name: String = "Unknown";
    var age: i32 = 0;
    var tags: [String] = [];
}
```

**Besonderheiten:**
- Experimentelle Sprache, Syntax kann sich noch ändern
- Initializer direkt bei Field-Deklaration
- C++-ähnliche Syntax

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
</Tabs>


## 8.2.8. Property Delegates

Delegation der Getter/Setter-Logik an externe Objekte für wiederverwendbare Property-Verhalten.

### Sprachen {#sprachen}

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

**Besonderheiten:**
- `by` Keyword für Property Delegation
- Standard-Delegates: `lazy`, `observable`, `vetoable`
- Custom Delegates durch `getValue`/`setValue` Operatoren

**Weiterführende Links:**
- [Kotlin Documentation - Delegated Properties](https://kotlinlang.org/docs/delegated-properties.html)

</TabItem>
</Tabs>


## 8.2.9. Backing Fields

Private Felder, die den tatsächlichen Wert einer Property speichern.

### Sprachen {#sprachen}

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

**Besonderheiten:**
- Explizite Backing Fields mit `_` Präfix (Konvention)
- Auto-Properties generieren automatisch Backing Fields
- Zugriff mit `field` in Custom Accessors nicht möglich

**Weiterführende Links:**
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
    
    // Automatisches Backing Field mit field
    var age: Int = 0
        set(value) {
            field = if (value >= 0) value else field
        }
}
```

**Besonderheiten:**
- Explizite Backing Fields mit `_` Präfix
- Automatisches `field` Keyword in Custom Accessors
- Zugriff auf Backing Field über `field`

**Weiterführende Links:**
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

**Besonderheiten:**
- Explizite Backing Fields mit `_` Präfix (Konvention)
- Stored Properties haben automatisch Backing Fields
- Computed Properties haben keine Backing Fields

**Weiterführende Links:**
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

**Besonderheiten:**
- Explizite Backing Fields mit `_` Präfix (Konvention)
- Manuelle Implementierung erforderlich
- Kein automatisches Backing Field

**Weiterführende Links:**
- [TypeScript Documentation - Accessors](https://www.typescriptlang.org/docs/handbook/2/classes.html#getters--setters)

</TabItem>
</Tabs>


## 8.2.10. Lateinit Variables

Variablen, die nicht sofort initialisiert werden müssen, aber vor dem ersten Zugriff initialisiert werden müssen.

### Sprachen {#sprachen}

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

**Besonderheiten:**
- `lateinit` für nicht-nullable Properties
- Muss vor dem ersten Zugriff initialisiert werden
- `::property.isInitialized` zur Prüfung

**Weiterführende Links:**
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

**Besonderheiten:**
- Implicitly Unwrapped Optionals (`!`) für Lateinit-Verhalten
- Automatisches Unwrapping bei Zugriff
- Muss vor dem ersten Zugriff initialisiert werden

**Weiterführende Links:**
- [Swift Documentation - Optionals](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/thebasics/#optionals)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Late Variables (seit Dart 2.12)
class UserService {
  // Lateinit: Wird später initialisiert
  late String username;
  
  // Lazy Initialization: Wird erst beim ersten Zugriff berechnet
  late final String greeting = 'Hallo, $username!';
  
  void init(String name) {
    username = name;
  }
}

// Late für teure Berechnungen
late final config = loadExpensiveConfig();
```

**Besonderheiten:**
- `late` erlaubt verzögerte Initialisierung von non-nullable Variablen
- `late final` für Lazy Initialization (wird beim ersten Zugriff berechnet)
- Wirft `LateInitializationError` wenn vor Initialisierung zugegriffen wird
- Seit Dart 2.12 (Sound Null Safety)

**Weiterführende Links:**
- [Dart Documentation - Late Variables](https://dart.dev/language/variables#late-variables)

</TabItem>
</Tabs>


## 8.2.11. Init-only Setters

Properties, die nur während der Objektinitialisierung gesetzt werden können.

### Sprachen {#sprachen}

<Tabs availableTabs={['csharp', 'php']} yellowTabs={['kotlin']}>
<TabItem value="csharp" label="C#">

```csharp
class Person
{
    public string Name { get; init; }  // Init-only (seit C# 9.0)
    public int Age { get; init; }
    
    public Person(string name, int age)
    {
        Name = name;  // OK: Im Konstruktor
        Age = age;
    }
}

// Verwendung
var person = new Person("Max", 30);
// person.Name = "New";  // Fehler: Kann nicht nach Initialisierung gesetzt werden
```

**Besonderheiten:**
- `init` Accessor statt `set` (seit C# 9.0)
- Kann nur während Objekterstellung gesetzt werden
- Erzeugt immutable Properties nach Initialisierung

**Weiterführende Links:**
- [Microsoft C# Documentation - init](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/init)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
class Person(val name: String, val age: Int)  // Read-only Properties

// Oder mit Custom Init-only
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

**Besonderheiten:**
- `val` Properties sind read-only nach Initialisierung
- Custom Init-only durch private Setter mit Initialisierungsprüfung
- Kein natives `init` Keyword

**Weiterführende Links:**
- [Kotlin Documentation - Properties](https://kotlinlang.org/docs/properties.html)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
// Readonly Properties (seit PHP 8.1)
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

**Besonderheiten:**
- `readonly` Properties seit PHP 8.1
- Können nur einmal initialisiert werden (im Konstruktor)
- Seit PHP 8.2: `readonly` Klassen (alle Properties readonly)

**Weiterführende Links:**
- [PHP Documentation - Readonly Properties](https://www.php.net/manual/en/language.oop5.properties.php#language.oop5.properties.readonly-properties)

</TabItem>
</Tabs>


## 8.2.12. Indexers

Properties, die Array-ähnlichen Zugriff auf Objekte ermöglichen.

### Sprachen {#sprachen}

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

// Verwendung
var list = new MyList();
list[0] = 42;
int value = list[0];
```

**Besonderheiten:**
- `this[index]` Syntax für Indexer
- Unterstützt Überladung mit verschiedenen Parametertypen
- Kann Get-only oder Get/Set sein

**Weiterführende Links:**
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

**Besonderheiten:**
- `__getitem__`, `__setitem__`, `__delitem__` Magic Methods
- Unterstützt Slicing und komplexe Indizes
- Array-ähnliche Syntax

**Weiterführende Links:**
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

// Verwendung
val list = MyList()
list[0] = 42
val value = list[0]
```

**Besonderheiten:**
- `operator fun get` und `operator fun set`
- `operator` Keyword erforderlich
- Unterstützt Überladung

**Weiterführende Links:**
- [Kotlin Documentation - Operator Overloading](https://kotlinlang.org/docs/operator-overloading.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
structure MyList where
  items : Array Int := Array.mkArray 10 0

-- GetElem-Instanz für Index-Zugriff
instance : GetElem MyList Nat Int (fun l i => i < l.items.size) where
  getElem l i h := l.items.get ⟨i, h⟩

-- Verwendung
def example : Int :=
  let list : MyList := { items := #[10, 20, 30] }
  list[1]  -- 20
```

**Besonderheiten:**
- `GetElem` Type Class für `a[i]`-Syntax
- Erfordert Beweis, dass der Index gültig ist (abhängiger Typ)
- Nur Lesezugriff — Schreiben über funktionale Updates (`Array.set`)

**Weiterführende Links:**
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

// Verwendung
let list = MyList()
list[0] = 42
let value = list[0]
```

**Besonderheiten:**
- `subscript` Keyword für Indexer
- Unterstützt Überladung mit verschiedenen Parametertypen
- Kann Get-only oder Get/Set sein

**Weiterführende Links:**
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

// Verwendung
val list = new MyList
list(0) = 42
val value = list(0)
```

**Besonderheiten:**
- `apply` für Getter, `update` für Setter
- Klammer-Syntax `list(index)` statt `list[index]`
- Unterstützt Überladung

**Weiterführende Links:**
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

# Verwendung
list = MyList.new
list[0] = 42
value = list[0]
```

**Besonderheiten:**
- `[]` und `[]=` Methoden für Indexer
- Array-ähnliche Syntax
- Unterstützt Überladung

**Weiterführende Links:**
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

// Verwendung
MyList list;
list[0] = 42;
int value = list[0];
```

**Besonderheiten:**
- `operator[]` für Indexer
- Überladung für const/non-const Objekte
- Rückgabe-Referenz für Assignment

**Weiterführende Links:**
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

// Verwendung
var list = MyList();
list[0] = 42;
int value = list[0];
```

**Besonderheiten:**
- `operator []` und `operator []=`
- `operator` Keyword erforderlich
- Unterstützt Überladung

**Weiterführende Links:**
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

**Besonderheiten:**
- `Item` Property mit Index-Parameter
- `with get` und `and set`
- Array-ähnliche Syntax

**Weiterführende Links:**
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

' Verwendung
Dim list As New MyList
list(0) = 42
Dim value As Integer = list(0)
```

**Besonderheiten:**
- `Default Property` für Indexer
- Klammer-Syntax `list(index)` statt `list[index]`
- Unterstützt Überladung

**Weiterführende Links:**
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

// Verwendung
MyList* list = [[MyList alloc] init];
list[0] = 42;
int value = list[0];
```

**Besonderheiten:**
- `objectAtIndexedSubscript:` und `setObject:atIndexedSubscript:`
- Seit Objective-C 2.0 unterstützt
- Array-ähnliche Syntax

**Weiterführende Links:**
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

// Verwendung
var list: MyList;
begin
  list := MyList.Create;
  list[0] := 42;
  value := list[0];
end;
```

**Besonderheiten:**
- `default` Property für Indexer
- `property` mit Index-Parameter
- Array-ähnliche Syntax

**Weiterführende Links:**
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

**Besonderheiten:**
- `ArrayAccess`-Interface für Index-Zugriff mit `[]`
- Methoden: `offsetGet`, `offsetSet`, `offsetExists`, `offsetUnset`
- Property-Deklarationen erlauben keine Funktionsaufrufe als Standardwerte

**Weiterführende Links:**
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

// Verwendung
def list = new MyList()
list[0] = 42
def value = list[0]
```

**Besonderheiten:**
- `getAt` und `putAt` Methoden
- Array-ähnliche Syntax
- Unterstützt Überladung

**Weiterführende Links:**
- [Groovy Documentation - Operators](https://groovy-lang.org/operators.html)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Indexers (experimentell)
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

**Besonderheiten:**
- Experimentelle Sprache, Syntax kann sich noch ändern
- Methoden für Indexer
- C++-ähnliche Syntax

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
</Tabs>

