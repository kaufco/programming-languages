---
slug: /string-verarbeitung/string-features
title: 11.1. String-Features
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 11.1. String-Features

Features zur String-Verarbeitung.

## 11.1.1. String Interpolation

Einfügen von Variablen und Ausdrücken direkt in String-Literale.

### Sprachen {#sprachen}

<Tabs availableTabs={['crystal', 'csharp', 'dart', 'elixir', 'fsharp', 'groovy', 'haxe', 'julia', 'kotlin', 'lean4', 'nim', 'perl', 'php', 'python', 'roc', 'ruby', 'rust', 'scala', 'swift', 'typescript', 'v', 'vbnet', 'wolfram-language']}>
<TabItem value="csharp" label="C#">

```csharp
// String Interpolation (seit C# 6.0)
string name = "Anna";
int age = 25;
string message = $"Name: {name}, Alter: {age}";

// Mit Ausdrücken
string greeting = $"Hallo {name.ToUpper()}, du bist {age + 1} Jahre alt";
```

**Besonderheiten:**
- Verwendet `$`-Präfix vor dem String-Literal
- Ausdrücke in geschweiften Klammern `{...}`
- Unterstützt beliebige Ausdrücke, nicht nur Variablen

**Weiterführende Links:**
- [Microsoft C# Documentation - String Interpolation](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/tokens/interpolated)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# String Interpolation
name = "Anna"
age = 25
message = "Name: #{name}, Alter: #{age}"

# Mit Ausdrücken
greeting = "Hallo #{name.upcase}, du bist #{age + 1} Jahre alt"
```

**Besonderheiten:**
- Verwendet `#{...}` Syntax
- Unterstützt beliebige Ausdrücke

**Weiterführende Links:**
- [Crystal Documentation - String Interpolation](https://crystal-lang.org/reference/1.7/syntax_and_semantics/literals/string.html#interpolation)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// String Interpolation
String name = "Anna";
int age = 25;
String message = "Name: $name, Alter: $age";

// Mit Ausdrücken
String greeting = "Hallo ${name.toUpperCase()}, du bist ${age + 1} Jahre alt";
```

**Besonderheiten:**
- Einfache Variablen mit `$variable`
- Ausdrücke mit `${expression}`
- Unterstützt beliebige Ausdrücke

**Weiterführende Links:**
- [Dart Documentation - String Interpolation](https://dart.dev/guides/language/language-tour#strings)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# String Interpolation
name = "Anna"
age = 25
message = "Name: #{name}, Alter: #{age}"

# Mit Ausdrücken
greeting = "Hallo #{String.upcase(name)}, du bist #{age + 1} Jahre alt"
```

**Besonderheiten:**
- Verwendet `#{...}` Syntax
- Unterstützt beliebige Ausdrücke

**Weiterführende Links:**
- [Elixir Documentation - String Interpolation](https://elixir-lang.org/getting-started/basic-types.html#strings)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// String Interpolation (seit F# 5.0)
let name = "Anna"
let age = 25
let message = $"Name: {name}, Alter: {age}"

// Mit Ausdrücken
let greeting = $"Hallo {name.ToUpper()}, du bist {age + 1} Jahre alt"
```

**Besonderheiten:**
- Verwendet `$`-Präfix vor dem String-Literal (seit F# 5.0)
- Ausdrücke in geschweiften Klammern `{...}`
- Unterstützt beliebige Ausdrücke

**Weiterführende Links:**
- [F# Documentation - String Interpolation](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/interpolated-strings)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// String Interpolation
def name = "Anna"
def age = 25
def message = "Name: ${name}, Alter: ${age}"

// Mit Ausdrücken
def greeting = "Hallo ${name.toUpperCase()}, du bist ${age + 1} Jahre alt"
```

**Besonderheiten:**
- Verwendet `${...}` Syntax
- Unterstützt beliebige Ausdrücke

**Weiterführende Links:**
- [Groovy Documentation - String Interpolation](https://groovy-lang.org/syntax.html#_string_interpolation)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# String Interpolation
name = "Anna"
age = 25
message = "Name: $name, Alter: $age"

# Mit Ausdrücken
greeting = "Hallo $(uppercase(name)), du bist $(age + 1) Jahre alt"
```

**Besonderheiten:**
- Einfache Variablen mit `$variable`
- Ausdrücke mit `$(expression)`
- Unterstützt beliebige Ausdrücke

**Weiterführende Links:**
- [Julia Documentation - String Interpolation](https://docs.julialang.org/en/v1/manual/strings/#string-interpolation)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// String Interpolation
val name = "Anna"
val age = 25
val message = "Name: $name, Alter: $age"

// Mit Ausdrücken
val greeting = "Hallo ${name.uppercase()}, du bist ${age + 1} Jahre alt"
```

**Besonderheiten:**
- Einfache Variablen mit `$variable`
- Ausdrücke mit `${expression}`
- Unterstützt beliebige Ausdrücke

**Weiterführende Links:**
- [Kotlin Documentation - String Templates](https://kotlinlang.org/docs/strings.html#string-templates)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- String Interpolation mit s!"..."
def name := "Anna"
def age := 25
def message := s!"Name: {name}, Alter: {age}"

-- Mit Ausdrücken
def greeting := s!"Hallo {name.toUpper}, du bist {age + 1} Jahre alt"

-- Beliebige Ausdrücke
def result := s!"Ergebnis: {2 * 3 + 4}"
```

**Besonderheiten:**
- `s!"..."` als String-Interpolation-Syntax
- Ausdrücke in `{...}` werden ausgewertet
- Ausdrücke müssen `ToString`-Instanz haben
- Auch `m!"..."` für Message-Interpolation in Taktiken

**Weiterführende Links:**
- [Lean 4 Documentation - String Interpolation](https://lean-lang.org/lean4/doc/stringinterp.html)
- [Functional Programming in Lean](https://lean-lang.org/functional_programming_in_lean/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# String Interpolation
var name = "Anna"
var age = 25
var message = "Name: $name, Alter: $age"

# Mit Ausdrücken
var greeting = "Hallo $name.toUpper(), du bist $(age + 1) Jahre alt"
```

**Besonderheiten:**
- Einfache Variablen mit `$variable`
- Ausdrücke mit `$(expression)`
- Unterstützt beliebige Ausdrücke

**Weiterführende Links:**
- [Nim Documentation - String Interpolation](https://nim-lang.org/docs/strformat.html)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# String Interpolation
my $name = "Anna";
my $age = 25;
my $message = "Name: $name, Alter: $age";

# Mit Ausdrücken
my $greeting = "Hallo $name, du bist " . ($age + 1) . " Jahre alt";
```

**Besonderheiten:**
- Variablen werden automatisch in doppelten Anführungszeichen interpoliert
- Skalare Variablen mit `$variable`
- Ausdrücke müssen mit String-Konkatenation kombiniert werden

**Weiterführende Links:**
- [Perl Documentation - String Interpolation](https://perldoc.perl.org/perlop#Quote-and-Quote-like-Operators)

</TabItem>
<TabItem value="php" label="PHP">

```php
// String Interpolation
$name = "Anna";
$age = 25;
$message = "Name: {$name}, Alter: {$age}";

// Mit Ausdrücken
$greeting = "Hallo {$name}, du bist " . ($age + 1) . " Jahre alt";
```

**Besonderheiten:**
- Variablen in doppelten Anführungszeichen werden interpoliert
- Komplexe Ausdrücke mit geschweiften Klammern `{$variable}`
- Ausdrücke müssen mit String-Konkatenation kombiniert werden

**Weiterführende Links:**
- [PHP Documentation - String Interpolation](https://www.php.net/manual/en/language.types.string.php#language.types.string.parsing)

</TabItem>
<TabItem value="python" label="Python">

```python
# String Interpolation (f-strings, seit Python 3.6)
name = "Anna"
age = 25
message = f"Name: {name}, Alter: {age}"

# Mit Ausdrücken
greeting = f"Hallo {name.upper()}, du bist {age + 1} Jahre alt"
```

**Besonderheiten:**
- Verwendet `f`-Präfix vor dem String-Literal (f-strings, seit Python 3.6)
- Ausdrücke in geschweiften Klammern `{...}`
- Unterstützt beliebige Ausdrücke

**Weiterführende Links:**
- [Python Documentation - f-strings](https://docs.python.org/3/reference/lexical_analysis.html#f-strings)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# String Interpolation
name = "Anna"
age = 25
message = "Name: #{name}, Alter: #{age}"

# Mit Ausdrücken
greeting = "Hallo #{name.upcase}, du bist #{age + 1} Jahre alt"
```

**Besonderheiten:**
- Verwendet `#{...}` Syntax
- Unterstützt beliebige Ausdrücke

**Weiterführende Links:**
- [Ruby Documentation - String Interpolation](https://ruby-doc.org/core-3.1.0/doc/syntax/literals_rdoc.html#label-String+Interpolation)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// String Interpolation mit format! Makro
let name = "Anna";
let age = 25;
let message = format!("Name: {}, Alter: {}", name, age);

// Mit Ausdrücken
let greeting = format!("Hallo {}, du bist {} Jahre alt", name.to_uppercase(), age + 1);
```

**Besonderheiten:**
- Verwendet `format!` Makro
- Platzhalter `{}` werden durch Argumente ersetzt
- Unterstützt Formatierungsspezifikationen

**Weiterführende Links:**
- [The Rust Book - format! Macro](https://doc.rust-lang.org/std/macro.format.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// String Interpolation (s-Strings)
val name = "Anna"
val age = 25
val message = s"Name: $name, Alter: $age"

// Mit Ausdrücken
val greeting = s"Hallo ${name.toUpperCase}, du bist ${age + 1} Jahre alt"
```

**Besonderheiten:**
- Verwendet `s`-Präfix vor dem String-Literal
- Einfache Variablen mit `$variable`
- Ausdrücke mit `${expression}`
- Unterstützt beliebige Ausdrücke

**Weiterführende Links:**
- [Scala Documentation - String Interpolation](https://docs.scala-lang.org/overviews/core/string-interpolation.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// String Interpolation
let name = "Anna"
let age = 25
let message = "Name: \(name), Alter: \(age)"

// Mit Ausdrücken
let greeting = "Hallo \(name.uppercased()), du bist \(age + 1) Jahre alt"
```

**Besonderheiten:**
- Verwendet `\(...)` Syntax
- Unterstützt beliebige Ausdrücke

**Weiterführende Links:**
- [Swift Documentation - String Interpolation](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/stringsandcharacters/#String-Interpolation)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// String Interpolation (Template Literals)
const name = "Anna";
const age = 25;
const message = `Name: ${name}, Alter: ${age}`;

// Mit Ausdrücken
const greeting = `Hallo ${name.toUpperCase()}, du bist ${age + 1} Jahre alt`;
```

**Besonderheiten:**
- Verwendet Backticks `` ` `` für Template Literals
- Ausdrücke mit `${expression}`
- Unterstützt beliebige Ausdrücke

**Weiterführende Links:**
- [TypeScript Handbook - Template Literals](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#template-literal-types)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' String Interpolation (seit VB.NET 14.0)
Dim name As String = "Anna"
Dim age As Integer = 25
Dim message As String = $"Name: {name}, Alter: {age}"

' Mit Ausdrücken
Dim greeting As String = $"Hallo {name.ToUpper()}, du bist {age + 1} Jahre alt"
```

**Besonderheiten:**
- Verwendet `$`-Präfix vor dem String-Literal (seit VB.NET 14.0)
- Ausdrücke in geschweiften Klammern `{...}`
- Unterstützt beliebige Ausdrücke

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - String Interpolation](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/strings/interpolated-strings)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// String Interpolation mit Single Quotes
var name = "Welt";
var greeting = 'Hallo, $name!';
var expression = 'Ergebnis: ${2 + 3}';
```

**Besonderheiten:**
- Single-Quoted Strings (`'...'`) unterstützen String Interpolation
- Double-Quoted Strings (`"..."`) sind reguläre Strings ohne Interpolation
- `$variable` für einfache Variablen, `${expression}` für Ausdrücke

**Weiterführende Links:**
- [Haxe Documentation - String Interpolation](https://haxe.org/manual/lf-string-interpolation.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- String Interpolation
name = "Welt"
greeting = "Hallo, $(name)!"

age = 30
info = "Alter: $(Num.toStr age)"
```

**Besonderheiten:**
- `$(expression)` für String Interpolation
- Nur `Str`-Ausdrücke können interpoliert werden
- Andere Typen müssen erst konvertiert werden (z.B. `Num.toStr`)

**Weiterführende Links:**
- [Roc Documentation - Strings](https://www.roc-lang.org/tutorial#strings)

</TabItem>
<TabItem value="v" label="V">

```v
// String Interpolation
name := 'Alice'
age := 30

greeting := 'Hallo, ${name}! Du bist ${age} Jahre alt.'
println(greeting)

// Ausdrücke in Interpolation
println('${age + 10} in 10 Jahren')
```

**Besonderheiten:**
- `${}` für Interpolation in Strings
- Beliebige Ausdrücke innerhalb `${}`
- Einfache Variablen auch mit `$name` (ohne Klammern)

**Weiterführende Links:**
- [V Documentation - Strings](https://github.com/vlang/v/blob/master/doc/docs.md#strings)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* String Interpolation mit StringTemplate (seit Version 10.0) *)
name = "Max";
age = 30;
template = StringTemplate["Hallo, `name`! Du bist `age` Jahre alt."];
result = template[<|"name" -> name, "age" -> age|>]

(* StringForm *)
result2 = StringForm["Hallo, ``! Du bist `` Jahre alt.", name, age]
```

**Besonderheiten:**
- `StringTemplate` (seit Version 10.0) für Template-basierte Interpolation
- `StringForm` für printf-ähnliche Formatierung
- String-Konkatenation mit `<>`: `"Hello" <> " " <> "World"`

**Weiterführende Links:**
- [Wolfram Language Documentation - StringTemplate](https://reference.wolfram.com/language/ref/StringTemplate.html)

</TabItem>
</Tabs>


## 11.1.2. Template Strings

String-Literale mit erweiterten Features wie Multiline-Support und Tagged Templates.

### Sprachen {#sprachen}

<Tabs availableTabs={['javascript', 'typescript']}>
<TabItem value="javascript" label="JavaScript">

```javascript
// Template Literals (Template Strings)
const name = "Anna";
const age = 25;
const message = `Name: ${name}, Alter: ${age}`;

// Multiline Template Strings
const multiline = `Zeile 1
Zeile 2
Zeile 3`;

// Tagged Templates
function tag(strings, ...values) {
  return strings.reduce((result, str, i) => {
    return result + str + (values[i] || '');
  }, '');
}
const tagged = tag`Hallo ${name}, du bist ${age} Jahre alt`;
```

**Besonderheiten:**
- Verwendet Backticks `` ` `` für Template Literals
- Unterstützt Multiline-Strings ohne Escape-Zeichen
- Tagged Templates ermöglichen benutzerdefinierte String-Verarbeitung
- Ausdrücke mit `${expression}`

**Weiterführende Links:**
- [MDN Web Docs - Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Template Literals (Template Strings)
const name = "Anna";
const age = 25;
const message = `Name: ${name}, Alter: ${age}`;

// Multiline Template Strings
const multiline = `Zeile 1
Zeile 2
Zeile 3`;

// Tagged Templates
function tag(strings: TemplateStringsArray, ...values: any[]): string {
  return strings.reduce((result, str, i) => {
    return result + str + (values[i] || '');
  }, '');
}
const tagged = tag`Hallo ${name}, du bist ${age} Jahre alt`;
```

**Besonderheiten:**
- Verwendet Backticks `` ` `` für Template Literals
- Unterstützt Multiline-Strings ohne Escape-Zeichen
- Tagged Templates ermöglichen benutzerdefinierte String-Verarbeitung
- Ausdrücke mit `${expression}`
- TypeScript-spezifische Typen für Tagged Templates

**Weiterführende Links:**
- [TypeScript Handbook - Template Literal Types](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html)

</TabItem>
</Tabs>


## 11.1.3. String Templates (Java-style)

String-Literale mit Template-Prozessoren für sichere String-Interpolation.

### Sprachen {#sprachen}

<Tabs availableTabs={[]} orangeTabs={['java']}>
<TabItem value="java" label="Java">

```java
// String Templates (Preview in Java 21/22, zurückgezogen)
// Aktuell: String.format oder Konkatenation verwenden
String name = "Anna";
int age = 25;

// String.format
String message = String.format("Name: %s, Alter: %d", name, age);

// Konkatenation
String message2 = "Name: " + name + ", Alter: " + age;
```

**Besonderheiten:**
- String Templates (`STR."..."`) waren Preview in Java 21/22, aber wurden zurückgezogen
- Aktuell wird `String.format()` oder Konkatenation verwendet
- Kein nativer String-Interpolations-Mechanismus in Java verfügbar

**Weiterführende Links:**
- [Oracle Java Documentation - String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)

</TabItem>
</Tabs>


## 11.1.4. Raw Strings

String-Literale, die Escape-Sequenzen nicht interpretieren.

### Sprachen {#sprachen}

<Tabs availableTabs={['csharp', 'd', 'dart', 'groovy', 'java', 'julia', 'kotlin', 'lua', 'nim', 'python', 'rust', 'scala', 'swift', 'v']}>
<TabItem value="csharp" label="C#">

```csharp
// Raw String Literals (seit C# 11)
string path = """C:\Users\Name\Documents""";
string regex = """\d+""";
string json = """
    {
        "name": "Anna",
        "age": 25
    }
    """;
```

**Besonderheiten:**
- Verwendet `"""..."""` Syntax (seit C# 11)
- Keine Escape-Sequenzen erforderlich
- Unterstützt Multiline-Strings

**Weiterführende Links:**
- [Microsoft C# Documentation - Raw String Literals](https://learn.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-11#raw-string-literals)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Raw Strings
String path = r"C:\Users\Name\Documents";
String regex = r"\d+";
String text = r"Zeile 1\nZeile 2"; // \n wird nicht interpretiert
```

**Besonderheiten:**
- Verwendet `r`-Präfix vor dem String-Literal
- Keine Escape-Sequenzen werden interpretiert

**Weiterführende Links:**
- [Dart Documentation - Raw Strings](https://dart.dev/guides/language/language-tour#strings)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Raw Strings (Slashy Strings)
def path = /C:\Users\Name\Documents/
def regex = /\d+/
def text = /Zeile 1\nZeile 2/ // \n wird nicht interpretiert
```

**Besonderheiten:**
- Verwendet `/.../` Syntax (Slashy Strings)
- Keine Escape-Sequenzen werden interpretiert

**Weiterführende Links:**
- [Groovy Documentation - Strings](https://groovy-lang.org/syntax.html#_slashy_string)

</TabItem>
<TabItem value="java" label="Java">

```java
// Text Blocks (seit Java 13, final seit Java 15)
String path = """
    C:\\Users\\Name\\Documents
    """;
String regex = """
    \\d+
    """;
```

**Besonderheiten:**
- Verwendet `"""..."""` Syntax (Text Blocks, seit Java 13)
- Escape-Sequenzen werden interpretiert, aber Backslashes müssen escaped werden
- Unterstützt Multiline-Strings

**Weiterführende Links:**
- [Oracle Java Documentation - Text Blocks](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html#text-blocks)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Raw Strings
val path = """C:\Users\Name\Documents"""
val regex = """\d+"""
val text = """Zeile 1\nZeile 2""" // \n wird nicht interpretiert
```

**Besonderheiten:**
- Verwendet `"""..."""` Syntax
- Keine Escape-Sequenzen werden interpretiert
- Unterstützt Multiline-Strings

**Weiterführende Links:**
- [Kotlin Documentation - Raw Strings](https://kotlinlang.org/docs/strings.html#raw-strings)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Raw Strings
var path = r"C:\Users\Name\Documents"
var regex = r"\d+"
var text = r"Zeile 1\nZeile 2" # \n wird nicht interpretiert
```

**Besonderheiten:**
- Verwendet `r`-Präfix vor dem String-Literal
- Keine Escape-Sequenzen werden interpretiert

**Weiterführende Links:**
- [Nim Documentation - Raw Strings](https://nim-lang.org/docs/strformat.html)

</TabItem>
<TabItem value="python" label="Python">

```python
# Raw Strings
path = r"C:\Users\Name\Documents"
regex = r"\d+"
text = r"Zeile 1\nZeile 2"  # \n wird nicht interpretiert
```

**Besonderheiten:**
- Verwendet `r`-Präfix vor dem String-Literal
- Keine Escape-Sequenzen werden interpretiert

**Weiterführende Links:**
- [Python Documentation - Raw Strings](https://docs.python.org/3/reference/lexical_analysis.html#string-and-bytes-literals)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Raw String Literals
let path = r"C:\Users\Name\Documents";
let regex = r"\d+";
let text = r"Zeile 1\nZeile 2"; // \n wird nicht interpretiert

// Raw String mit Trennzeichen
let json = r#"{"name": "Anna"}"#;
```

**Besonderheiten:**
- Verwendet `r"..."` Syntax
- Unterstützt Trennzeichen für Strings mit Anführungszeichen: `r#"..."#`
- Keine Escape-Sequenzen werden interpretiert

**Weiterführende Links:**
- [The Rust Book - Raw String Literals](https://doc.rust-lang.org/reference/tokens.html#raw-string-literals)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Raw Strings
val path = raw"C:\Users\Name\Documents"
val regex = raw"\d+"
val text = raw"Zeile 1\nZeile 2" // \n wird nicht interpretiert
```

**Besonderheiten:**
- Verwendet `raw"..."` Syntax
- Keine Escape-Sequenzen werden interpretiert

**Weiterführende Links:**
- [Scala Documentation - Raw Strings](https://docs.scala-lang.org/overviews/core/string-interpolation.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Raw Strings (seit Swift 5.0)
let path = #"C:\Users\Name\Documents"#
let regex = #"\d+"#
let text = #"Zeile 1\nZeile 2"# // \n wird nicht interpretiert

// Raw String mit mehreren # für Strings mit #
let textWithHash = ##"Text mit # Zeichen"##
```

**Besonderheiten:**
- Verwendet `#"..."#` Syntax (seit Swift 5.0)
- Unterstützt mehrere `#` als Trennzeichen
- Keine Escape-Sequenzen werden interpretiert

**Weiterführende Links:**
- [Swift Documentation - Extended String Delimiters](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/stringsandcharacters/#Extended-String-Delimiters)

</TabItem>
<TabItem value="d" label="D">

```d
// Raw Strings
string path = r"C:\Users\name\Documents";   // r"..." Raw String
string regex = r"\d+\.\d+";                  // Keine Escape-Sequenzen

// Backtick Strings (auch Raw Strings)
string path2 = `C:\Users\name\Documents`;
string html = `<div class="test">Hello</div>`;
```

**Besonderheiten:**
- `r"..."` für Raw Strings (keine Escape-Sequenzen)
- Backtick-Strings (`` `...` ``) sind ebenfalls Raw Strings
- Beide Varianten interpretieren keine Escape-Sequenzen wie `\n`, `\t`

**Weiterführende Links:**
- [D Language Specification - String Literals](https://dlang.org/spec/lex.html#string_literals)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Raw Strings: keine Escape-Sequenzen
path = raw"C:\Users\name\Documents"
regex_pattern = raw"\d+\.\d+"

# Vergleich: normale Strings
normal = "Tab:\tNeue Zeile:\n"
raw_str = raw"Tab:\tNeue Zeile:\n"
println(raw_str)  # Tab:\tNeue Zeile:\n (literal)
```

**Besonderheiten:**
- `raw"..."` Strings interpretieren keine Escape-Sequenzen
- Nützlich für Dateipfade und reguläre Ausdrücke
- Interpolation mit `$` funktioniert in Raw Strings nicht

**Weiterführende Links:**
- [Julia Documentation - Raw String Literals](https://docs.julialang.org/en/v1/manual/strings/#man-raw-string-literals)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Raw Strings: Long Strings mit [[ ... ]]
local raw = [[Dies ist ein Raw String
mit Zeilenumbrüchen und \n wird nicht interpretiert.
Auch \t und \\ bleiben unverändert.]]

print(raw)

-- Long Strings mit Level: [=[ ... ]=]
local nested = [=[
Hier kann sogar ]] vorkommen,
da Level 1 ([=[ ... ]=]) verwendet wird.
]=]

-- Level 2 für weitere Verschachtelung
local deep = [==[
[=[ verschachtelt ]=] ist möglich
]==]
```

**Besonderheiten:**
- `[[...]]` erzeugt Long Strings ohne Escape-Sequenz-Interpretation
- Verschiedene Level möglich: `[=[...]=]`, `[==[...]==]` usw.
- Erster Zeilenumbruch nach `[[` wird ignoriert
- Nützlich für eingebetteten Code, Regex-Patterns oder mehrzeilige Strings

**Weiterführende Links:**
- [Lua Reference Manual - Literal Strings](https://www.lua.org/manual/5.4/manual.html#3.1)

</TabItem>
<TabItem value="v" label="V">

```v
// Raw Strings
path := r'C:\Users\Alice\Documents'
regex := r'\d+\.\d+'

println(path)   // C:\Users\Alice\Documents
println(regex)  // \d+\.\d+
```

**Besonderheiten:**
- `r'...'` für Raw Strings
- Keine Escape-Sequenzen werden verarbeitet
- Nützlich für Pfade und reguläre Ausdrücke

**Weiterführende Links:**
- [V Documentation - Strings](https://github.com/vlang/v/blob/master/doc/docs.md#strings)

</TabItem>
</Tabs>


## 11.1.5. Multiline Strings

String-Literale, die über mehrere Zeilen erstrecken können.

### Sprachen {#sprachen}

<Tabs availableTabs={['c', 'crystal', 'csharp', 'd', 'dart', 'go', 'groovy', 'haskell', 'java', 'javascript', 'julia', 'kotlin', 'lua', 'mercury', 'nim', 'ocaml', 'perl', 'php', 'prolog', 'python', 'roc', 'ruby', 'rust', 'scala', 'swift', 'typescript', 'v', 'vbnet']}>
<TabItem value="c" label="C">

```c
// Multiline Strings (String-Konkatenation)
const char* text = "Zeile 1\n"
                   "Zeile 2\n"
                   "Zeile 3";
```

**Besonderheiten:**
- Automatische String-Konkatenation bei benachbarten String-Literalen
- Explizite `\n` für Zeilenumbrüche erforderlich

**Weiterführende Links:**
- [C Standard - String Literals](https://en.cppreference.com/w/c/language/string_literal)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Multiline Strings (seit C# 11)
string text = """
    Zeile 1
    Zeile 2
    Zeile 3
    """;

// Mit String Interpolation
string name = "Anna";
string greeting = $"""
    Hallo {name},
    wie geht es dir?
    """;
```

**Besonderheiten:**
- Verwendet `"""..."""` Syntax (seit C# 11)
- Führende/abschließende Zeilenumbrüche werden ignoriert
- Unterstützt String Interpolation

**Weiterführende Links:**
- [Microsoft C# Documentation - Raw String Literals](https://learn.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-11#raw-string-literals)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Multiline Strings
text = "Zeile 1
Zeile 2
Zeile 3"

# Mit String Interpolation
name = "Anna"
greeting = "Hallo #{name},
wie geht es dir?"
```

**Besonderheiten:**
- Strings können direkt über mehrere Zeilen gehen
- Unterstützt String Interpolation

**Weiterführende Links:**
- [Crystal Documentation - Strings](https://crystal-lang.org/reference/1.7/syntax_and_semantics/literals/string.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Multiline Strings
String text = """Zeile 1
Zeile 2
Zeile 3""";

// Mit String Interpolation
String name = "Anna";
String greeting = """Hallo $name,
wie geht es dir?""";
```

**Besonderheiten:**
- Verwendet `"""..."""` Syntax
- Unterstützt String Interpolation

**Weiterführende Links:**
- [Dart Documentation - Multiline Strings](https://dart.dev/guides/language/language-tour#strings)

</TabItem>
<TabItem value="go" label="Go">

```go
// Multiline Strings (Raw String Literals)
text := `Zeile 1
Zeile 2
Zeile 3`

// Mit String Formatting
name := "Anna"
greeting := fmt.Sprintf(`Hallo %s,
wie geht es dir?`, name)
```

**Besonderheiten:**
- Verwendet Backticks `` ` `` für Raw String Literals
- Keine Escape-Sequenzen werden interpretiert

**Weiterführende Links:**
- [Go Documentation - String Literals](https://go.dev/ref/spec#String_literals)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Multiline Strings
def text = """Zeile 1
Zeile 2
Zeile 3"""

// Mit String Interpolation
def name = "Anna"
def greeting = """Hallo ${name},
wie geht es dir?"""
```

**Besonderheiten:**
- Verwendet `"""..."""` Syntax
- Unterstützt String Interpolation

**Weiterführende Links:**
- [Groovy Documentation - Multiline Strings](https://groovy-lang.org/syntax.html#_triple_double_quoted_string)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Multiline Strings
text = "Zeile 1\n\
       \Zeile 2\n\
       \Zeile 3"

-- Oder mit String-Konkatenation
text2 = "Zeile 1\n" ++
        "Zeile 2\n" ++
        "Zeile 3"
```

**Besonderheiten:**
- Explizite `\n` für Zeilenumbrüche erforderlich
- Backslash am Zeilenende für Fortsetzung
- Oder String-Konkatenation verwenden

**Weiterführende Links:**
- [Haskell Documentation - String Literals](https://www.haskell.org/onlinereport/haskell2010/haskellch2.html#x7-200002.6)

</TabItem>
<TabItem value="java" label="Java">

```java
// Text Blocks (seit Java 13, final seit Java 15)
String text = """
    Zeile 1
    Zeile 2
    Zeile 3
    """;

// Mit String Templates (seit Java 21)
String name = "Anna";
String greeting = STR."""
    Hallo \{name},
    wie geht es dir?
    """;
```

**Besonderheiten:**
- Verwendet `"""..."""` Syntax (Text Blocks, seit Java 13)
- Führende/abschließende Zeilenumbrüche werden ignoriert
- Unterstützt String Templates (seit Java 21)

**Weiterführende Links:**
- [Oracle Java Documentation - Text Blocks](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html#text-blocks)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Multiline Strings (Template Literals)
const text = `Zeile 1
Zeile 2
Zeile 3`;

// Mit String Interpolation
const name = "Anna";
const greeting = `Hallo ${name},
wie geht es dir?`;
```

**Besonderheiten:**
- Verwendet Backticks `` ` `` für Template Literals
- Unterstützt String Interpolation

**Weiterführende Links:**
- [MDN Web Docs - Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Multiline Strings
text = """Zeile 1
Zeile 2
Zeile 3"""

# Mit String Interpolation
name = "Anna"
greeting = """Hallo $name,
wie geht es dir?"""
```

**Besonderheiten:**
- Verwendet `"""..."""` Syntax
- Unterstützt String Interpolation

**Weiterführende Links:**
- [Julia Documentation - Strings](https://docs.julialang.org/en/v1/manual/strings/)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Multiline Strings
val text = """Zeile 1
Zeile 2
Zeile 3"""

// Mit String Interpolation
val name = "Anna"
val greeting = """Hallo $name,
wie geht es dir?"""
```

**Besonderheiten:**
- Verwendet `"""..."""` Syntax
- Unterstützt String Interpolation

**Weiterführende Links:**
- [Kotlin Documentation - Multiline Strings](https://kotlinlang.org/docs/strings.html#string-templates)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Multiline Strings (Long Strings)
local text = [[Zeile 1
Zeile 2
Zeile 3]]

-- Mit String Formatting
local name = "Anna"
local greeting = string.format([[Hallo %s,
wie geht es dir?]], name)
```

**Besonderheiten:**
- Verwendet `[[...]]` Syntax für Long Strings
- Keine Escape-Sequenzen werden interpretiert

**Weiterführende Links:**
- [Lua Documentation - Strings](https://www.lua.org/manual/5.4/manual.html#3.1)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Multiline Strings (String-Konkatenation)
Text = "Zeile 1\n" ++
       "Zeile 2\n" ++
       "Zeile 3",

% Mit string.format
Name = "Anna",
Greeting = string.format("Hallo %s,\nwie geht es dir?",
    [s(Name)])
```

**Besonderheiten:**
- Explizite `\n` für Zeilenumbrüche erforderlich
- String-Konkatenation mit `++` Operator
- `string.format` als Alternative für formatierte Multiline-Strings

**Weiterführende Links:**
- [Mercury Library Reference - string](https://mercurylang.org/information/doc-release/mercury_library/string.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Multiline Strings
var text = """Zeile 1
Zeile 2
Zeile 3"""

# Mit String Interpolation
var name = "Anna"
var greeting = """Hallo $name,
wie geht es dir?"""
```

**Besonderheiten:**
- Verwendet `"""..."""` Syntax
- Unterstützt String Interpolation

**Weiterführende Links:**
- [Nim Documentation - Strings](https://nim-lang.org/docs/strformat.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Multiline Strings *)
let text = "Zeile 1\n\
            Zeile 2\n\
            Zeile 3"

(* Oder mit String-Konkatenation *)
let text2 = "Zeile 1\n" ^
            "Zeile 2\n" ^
            "Zeile 3"
```

**Besonderheiten:**
- Explizite `\n` für Zeilenumbrüche erforderlich
- Backslash am Zeilenende für Fortsetzung
- Oder String-Konkatenation mit `^` verwenden

**Weiterführende Links:**
- [OCaml Documentation - String Literals](https://v2.ocaml.org/manual/lex.html#sss:string-literals)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Multiline Strings
my $text = "Zeile 1\nZeile 2\nZeile 3";

# Heredoc-Syntax
my $heredoc = <<END;
Zeile 1
Zeile 2
Zeile 3
END
```

**Besonderheiten:**
- Explizite `\n` für Zeilenumbrüche erforderlich
- Unterstützt Heredoc-Syntax

**Weiterführende Links:**
- [Perl Documentation - String Literals](https://perldoc.perl.org/perlop#Quote-and-Quote-like-Operators)

</TabItem>
<TabItem value="php" label="PHP">

```php
// Multiline Strings
$text = "Zeile 1\nZeile 2\nZeile 3";

// Heredoc-Syntax
$heredoc = <<<END
Zeile 1
Zeile 2
Zeile 3
END;
```

**Besonderheiten:**
- Explizite `\n` für Zeilenumbrüche erforderlich
- Unterstützt Heredoc-Syntax

**Weiterführende Links:**
- [PHP Documentation - Heredoc](https://www.php.net/manual/en/language.types.string.php#language.types.string.syntax.heredoc)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Multiline Strings
Text = "Zeile 1
Zeile 2
Zeile 3".

% Mit String-Konkatenation
string_concat("Hallo Anna,\n", "wie geht es dir?", Greeting).
```

**Besonderheiten:**
- Doppelt-quotierte Strings können direkt über mehrere Zeilen gehen (SWI-Prolog)
- Verhalten hängt vom `double_quotes`-Flag ab (Standard: `string` in SWI-Prolog)
- String-Konkatenation mit `string_concat/3`

**Weiterführende Links:**
- [SWI-Prolog Documentation - Strings](https://www.swi-prolog.org/pldoc/man?section=string)

</TabItem>
<TabItem value="python" label="Python">

```python
# Multiline Strings (Triple Quotes)
text = """Zeile 1
Zeile 2
Zeile 3"""

# Mit String Interpolation
name = "Anna"
greeting = f"""Hallo {name},
wie geht es dir?"""
```

**Besonderheiten:**
- Verwendet `"""..."""` oder `'''...'''` Syntax
- Unterstützt String Interpolation (f-strings)

**Weiterführende Links:**
- [Python Documentation - String Literals](https://docs.python.org/3/reference/lexical_analysis.html#string-and-bytes-literals)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Multiline Strings
text = "Zeile 1
Zeile 2
Zeile 3"

# Mit String Interpolation
name = "Anna"
greeting = "Hallo #{name},
wie geht es dir?"
```

**Besonderheiten:**
- Strings können direkt über mehrere Zeilen gehen
- Unterstützt String Interpolation

**Weiterführende Links:**
- [Ruby Documentation - Strings](https://ruby-doc.org/core-3.1.0/doc/syntax/literals_rdoc.html#label-Strings)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Multiline Strings (Raw String Literals)
let text = r"Zeile 1
Zeile 2
Zeile 3";

// Mit String Formatting
let name = "Anna";
let greeting = format!(r"Hallo {},
wie geht es dir?", name);
```

**Besonderheiten:**
- Verwendet Raw String Literals `r"..."` für Multiline
- Keine Escape-Sequenzen werden interpretiert

**Weiterführende Links:**
- [The Rust Book - Raw String Literals](https://doc.rust-lang.org/reference/tokens.html#raw-string-literals)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Multiline Strings
val text = """Zeile 1
Zeile 2
Zeile 3"""

// Mit String Interpolation
val name = "Anna"
val greeting = s"""Hallo $name,
wie geht es dir?"""
```

**Besonderheiten:**
- Verwendet `"""..."""` Syntax
- Unterstützt String Interpolation

**Weiterführende Links:**
- [Scala Documentation - Multiline Strings](https://docs.scala-lang.org/overviews/core/string-interpolation.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Multiline Strings
let text = """
    Zeile 1
    Zeile 2
    Zeile 3
    """

// Mit String Interpolation
let name = "Anna"
let greeting = """
    Hallo \(name),
    wie geht es dir?
    """
```

**Besonderheiten:**
- Verwendet `"""..."""` Syntax
- Führende/abschließende Zeilenumbrüche werden ignoriert
- Unterstützt String Interpolation

**Weiterführende Links:**
- [Swift Documentation - Multiline String Literals](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/stringsandcharacters/#Multiline-String-Literals)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Multiline Strings (Template Literals)
const text = `Zeile 1
Zeile 2
Zeile 3`;

// Mit String Interpolation
const name = "Anna";
const greeting = `Hallo ${name},
wie geht es dir?`;
```

**Besonderheiten:**
- Verwendet Backticks `` ` `` für Template Literals
- Unterstützt String Interpolation

**Weiterführende Links:**
- [TypeScript Handbook - Template Literals](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Multiline Strings
Dim text As String = "Zeile 1" & vbCrLf &
                     "Zeile 2" & vbCrLf &
                     "Zeile 3"

' Mit String Interpolation (seit VB.NET 14.0)
Dim name As String = "Anna"
Dim greeting As String = $"Hallo {name}," & vbCrLf &
                         $"wie geht es dir?"
```

**Besonderheiten:**
- String-Konkatenation mit `&` und `vbCrLf` für Zeilenumbrüche
- Unterstützt String Interpolation (seit VB.NET 14.0)

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Strings](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/strings/)

</TabItem>
<TabItem value="d" label="D">

```d
// Multiline Strings mit Backtick
string text = `Dies ist ein
mehrzeiliger
String.`;

// Multiline Raw Strings
string sql = r"SELECT *
FROM users
WHERE active = 1";

// Delimited Strings
string code = q{
    int x = 42;
    writeln(x);
};

// Concatenation über mehrere Zeilen
string s = "Zeile 1\n"
         ~ "Zeile 2\n"
         ~ "Zeile 3";
```

**Besonderheiten:**
- Backtick-Strings (`` `...` ``) sind automatisch mehrzeilig
- `r"..."` Raw Strings unterstützen ebenfalls Zeilenumbrüche
- `q{...}` Token Strings für Code-Fragmente
- Automatische Konkatenation benachbarter String-Literale

**Weiterführende Links:**
- [D Language Specification - String Literals](https://dlang.org/spec/lex.html#string_literals)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Multiline Strings
text =
    """
    Erste Zeile
    Zweite Zeile
    Dritte Zeile
    """
```

**Besonderheiten:**
- Triple-Quotes `"""` für Multiline Strings
- Führende Whitespace wird normalisiert

**Weiterführende Links:**
- [Roc Documentation - Strings](https://www.roc-lang.org/tutorial#strings)

</TabItem>
<TabItem value="v" label="V">

```v
// Multiline Strings
text := 'Erste Zeile
Zweite Zeile
Dritte Zeile'

println(text)
```

**Besonderheiten:**
- Normale Strings können mehrzeilig sein
- Zeilenumbrüche werden beibehalten
- String-Interpolation funktioniert auch in Multiline Strings

**Weiterführende Links:**
- [V Documentation - Strings](https://github.com/vlang/v/blob/master/doc/docs.md#strings)

</TabItem>
</Tabs>


## 11.1.6. Here-documents / Heredoc

Mehrzeilige String-Literale mit einem Trennzeichen am Anfang und Ende.

### Sprachen {#sprachen}

<Tabs availableTabs={['perl', 'php', 'ruby']} yellowTabs={['rust']}>
<TabItem value="perl" label="Perl">

```perl
# Heredoc
my $text = <<END;
Zeile 1
Zeile 2
Zeile 3
END

# Heredoc mit Variablen-Interpolation
my $name = "Anna";
my $greeting = <<END;
Hallo $name,
wie geht es dir?
END

# Heredoc ohne Variablen-Interpolation
my $literal = <<'END';
Hallo $name,
wie geht es dir?
END
```

**Besonderheiten:**
- Syntax: `<<DELIMITER` ... `DELIMITER`
- Variablen werden interpoliert, außer wenn Delimiter in Anführungszeichen steht
- Unterstützt verschiedene Delimiter

**Weiterführende Links:**
- [Perl Documentation - Here Documents](https://perldoc.perl.org/perlop#Quote-and-Quote-like-Operators)

</TabItem>
<TabItem value="php" label="PHP">

```php
// Heredoc
$text = <<<END
Zeile 1
Zeile 2
Zeile 3
END;

// Heredoc mit Variablen-Interpolation
$name = "Anna";
$greeting = <<<END
Hallo $name,
wie geht es dir?
END;

// Nowdoc (ohne Variablen-Interpolation)
$literal = <<<'END'
Hallo $name,
wie geht es dir?
END;
```

**Besonderheiten:**
- Syntax: `<<<DELIMITER` ... `DELIMITER;`
- Variablen werden interpoliert
- Nowdoc (mit einfachen Anführungszeichen) ohne Variablen-Interpolation

**Weiterführende Links:**
- [PHP Documentation - Heredoc](https://www.php.net/manual/en/language.types.string.php#language.types.string.syntax.heredoc)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Heredoc
text = <<END
Zeile 1
Zeile 2
Zeile 3
END

# Heredoc mit Variablen-Interpolation
name = "Anna"
greeting = <<END
Hallo #{name},
wie geht es dir?
END

# Heredoc ohne Variablen-Interpolation
literal = <<'END'
Hallo #{name},
wie geht es dir?
END
```

**Besonderheiten:**
- Syntax: `<<DELIMITER` ... `DELIMITER`
- Variablen werden interpoliert, außer wenn Delimiter in Anführungszeichen steht
- Unterstützt verschiedene Delimiter

**Weiterführende Links:**
- [Ruby Documentation - Here Documents](https://ruby-doc.org/core-3.1.0/doc/syntax/literals_rdoc.html#label-Here+Documents)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Heredoc-ähnliche Syntax mit Raw String Literals
let text = r#"Zeile 1
Zeile 2
Zeile 3"#;

// Mit mehreren # für Strings mit #
let json = r##"{"name": "Anna"}"##;
```

**Besonderheiten:**
- Verwendet Raw String Literals `r#"..."#` als Heredoc-Ersatz
- Unterstützt mehrere `#` als Trennzeichen
- Keine Variablen-Interpolation

**Weiterführende Links:**
- [The Rust Book - Raw String Literals](https://doc.rust-lang.org/reference/tokens.html#raw-string-literals)

</TabItem>
</Tabs>


## 11.1.7. String Formatting

Formatierung von Strings mit Platzhaltern und Formatierungsspezifikationen.

### Sprachen {#sprachen}

<Tabs availableTabs={['c', 'common-lisp', 'cpp', 'csharp', 'd', 'dart', 'go', 'java', 'javascript', 'julia', 'lua', 'matlab', 'mercury', 'nim', 'objective-c', 'object-pascal', 'ocaml', 'octave', 'perl', 'php', 'prolog', 'python', 'r', 'ruby', 'rust', 'scala', 'swift', 'typescript', 'vbnet', 'wolfram-language']}>
<TabItem value="c" label="C">

```c
// String Formatting (printf-style)
char name[] = "Anna";
int age = 25;
char message[100];
sprintf(message, "Name: %s, Alter: %d", name, age);

// Mit snprintf für Sicherheit
snprintf(message, sizeof(message), "Name: %s, Alter: %d", name, age);
```

**Besonderheiten:**
- Verwendet `printf`-Style Formatierung
- Platzhalter: `%s` (String), `%d` (Integer), `%f` (Float), etc.
- `sprintf` für String-Formatierung, `snprintf` für sichere Variante

**Weiterführende Links:**
- [C Standard - printf Formatting](https://en.cppreference.com/w/c/io/fprintf)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// String Formatting
string name = "Anna";
int age = 25;
string message = string.Format("Name: {0}, Alter: {1}", name, age);

// Mit String Interpolation (seit C# 6.0)
string message2 = $"Name: {name}, Alter: {age}";

// Mit Formatierungsspezifikationen
string formatted = string.Format("Alter: {0:D2}", age);
```

**Besonderheiten:**
- `string.Format` mit Platzhaltern `{0}`, `{1}`, etc.
- Unterstützt Formatierungsspezifikationen wie `{0:D2}`
- String Interpolation (seit C# 6.0) als moderne Alternative

**Weiterführende Links:**
- [Microsoft C# Documentation - String Formatting](https://learn.microsoft.com/en-us/dotnet/api/system.string.format)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// String Formatting (C++20 std::format)
#include <format>
std::string name = "Anna";
int age = 25;
std::string message = std::format("Name: {}, Alter: {}", name, age);

// Mit Formatierungsspezifikationen
std::string formatted = std::format("Alter: {:02d}", age);
```

**Besonderheiten:**
- Verwendet `std::format` (seit C++20)
- Platzhalter `{}` mit automatischer Typ-Erkennung
- Unterstützt Formatierungsspezifikationen

**Weiterführende Links:**
- [C++ Reference - std::format](https://en.cppreference.com/w/cpp/utility/format/format)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// String Formatting
String name = "Anna";
int age = 25;
String message = "Name: $name, Alter: $age";

// Mit Formatierungsspezifikationen
String formatted = "Alter: ${age.toString().padLeft(2, '0')}";
```

**Besonderheiten:**
- String Interpolation als primäre Methode
- Formatierungsspezifikationen über Methoden wie `padLeft`, `toStringAsFixed`, etc.

**Weiterführende Links:**
- [Dart Documentation - String Formatting](https://dart.dev/guides/language/language-tour#strings)

</TabItem>
<TabItem value="go" label="Go">

```go
// String Formatting
name := "Anna"
age := 25
message := fmt.Sprintf("Name: %s, Alter: %d", name, age)

// Mit Formatierungsspezifikationen
formatted := fmt.Sprintf("Alter: %02d", age)
```

**Besonderheiten:**
- Verwendet `fmt.Sprintf` mit `printf`-Style Formatierung
- Platzhalter: `%s` (String), `%d` (Integer), `%f` (Float), etc.
- Unterstützt Formatierungsspezifikationen

**Weiterführende Links:**
- [Go Documentation - fmt Package](https://pkg.go.dev/fmt)

</TabItem>
<TabItem value="java" label="Java">

```java
// String Formatting
String name = "Anna";
int age = 25;
String message = String.format("Name: %s, Alter: %d", name, age);

// Mit Formatierungsspezifikationen
String formatted = String.format("Alter: %02d", age);
```

**Besonderheiten:**
- Verwendet `String.format` mit `printf`-Style Formatierung
- Platzhalter: `%s` (String), `%d` (Integer), `%f` (Float), etc.
- Unterstützt Formatierungsspezifikationen

**Weiterführende Links:**
- [Oracle Java Documentation - String Formatting](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html#format(java.lang.String,java.lang.Object...))

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// String Formatting (Template Literals)
const name = "Anna";
const age = 25;
const message = `Name: ${name}, Alter: ${age}`;

// Mit Formatierungsspezifikationen
const formatted = `Alter: ${age.toString().padStart(2, '0')}`;
```

**Besonderheiten:**
- Template Literals als primäre Methode
- Formatierungsspezifikationen über Methoden wie `padStart`, `toFixed`, etc.

**Weiterführende Links:**
- [MDN Web Docs - Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- String Formatting
local name = "Anna"
local age = 25
local message = string.format("Name: %s, Alter: %d", name, age)

-- Mit Formatierungsspezifikationen
local formatted = string.format("Alter: %02d", age)
```

**Besonderheiten:**
- Verwendet `string.format` mit `printf`-Style Formatierung
- Platzhalter: `%s` (String), `%d` (Integer), `%f` (Float), etc.
- Unterstützt Formatierungsspezifikationen

**Weiterführende Links:**
- [Lua Documentation - string.format](https://www.lua.org/manual/5.4/manual.html#pdf-string.format)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% String Formatting
name = "Anna";
age = 25;
message = sprintf("Name: %s, Alter: %d", name, age);

% Mit Formatierungsspezifikationen
formatted = sprintf("Alter: %02d", age);
```

**Besonderheiten:**
- Verwendet `sprintf` mit `printf`-Style Formatierung
- Platzhalter: `%s` (String), `%d` (Integer), `%f` (Float), etc.
- Unterstützt Formatierungsspezifikationen

**Weiterführende Links:**
- [MATLAB Documentation - sprintf](https://www.mathworks.com/help/matlab/ref/sprintf.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% String Formatting (string.format)
Name = "Anna",
Age = 25,
Message = string.format("Name: %s, Alter: %d", [s(Name), i(Age)]),

% Mit Formatierungsspezifikationen
Formatted = string.format("Alter: %02d", [i(Age)])
```

**Besonderheiten:**
- Verwendet `string.format` mit printf-Style Formatierung
- Platzhalter: `%s` (String), `%d` (Integer), `%f` (Float), `%c` (Char)
- Argumente müssen mit Typ-Wrappern versehen werden: `s(...)`, `i(...)`, `f(...)`, `c(...)`
- Typ-sichere Formatierung zur Laufzeit

**Weiterführende Links:**
- [Mercury Library Reference - string](https://mercurylang.org/information/doc-release/mercury_library/string.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* String Formatting *)
let name = "Anna" in
let age = 25 in
let message = Printf.sprintf "Name: %s, Alter: %d" name age

(* Mit Formatierungsspezifikationen *)
let formatted = Printf.sprintf "Alter: %02d" age
```

**Besonderheiten:**
- Verwendet `Printf.sprintf` mit `printf`-Style Formatierung
- Platzhalter: `%s` (String), `%d` (Integer), `%f` (Float), etc.
- Unterstützt Formatierungsspezifikationen

**Weiterführende Links:**
- [OCaml Documentation - Printf](https://v2.ocaml.org/api/Printf.html)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
% String Formatting
name = "Anna";
age = 25;
message = sprintf("Name: %s, Alter: %d", name, age);

% Mit Formatierungsspezifikationen
formatted = sprintf("Alter: %02d", age);
```

**Besonderheiten:**
- Verwendet `sprintf` mit `printf`-Style Formatierung
- Platzhalter: `%s` (String), `%d` (Integer), `%f` (Float), etc.
- Unterstützt Formatierungsspezifikationen

**Weiterführende Links:**
- [Octave Documentation - sprintf](https://octave.org/doc/v8.1.0/String-Conversion.html)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# String Formatting
my $name = "Anna";
my $age = 25;
my $message = sprintf("Name: %s, Alter: %d", $name, $age);

# Mit Formatierungsspezifikationen
my $formatted = sprintf("Alter: %02d", $age);
```

**Besonderheiten:**
- Verwendet `sprintf` mit `printf`-Style Formatierung
- Platzhalter: `%s` (String), `%d` (Integer), `%f` (Float), etc.
- Unterstützt Formatierungsspezifikationen

**Weiterführende Links:**
- [Perl Documentation - sprintf](https://perldoc.perl.org/functions/sprintf)

</TabItem>
<TabItem value="php" label="PHP">

```php
// String Formatting
$name = "Anna";
$age = 25;
$message = sprintf("Name: %s, Alter: %d", $name, $age);

// Mit Formatierungsspezifikationen
$formatted = sprintf("Alter: %02d", $age);
```

**Besonderheiten:**
- Verwendet `sprintf` mit `printf`-Style Formatierung
- Platzhalter: `%s` (String), `%d` (Integer), `%f` (Float), etc.
- Unterstützt Formatierungsspezifikationen

**Weiterführende Links:**
- [PHP Documentation - sprintf](https://www.php.net/manual/en/function.sprintf.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% String Formatting mit format/2 (Ausgabe) und format/3 (in Variable)
format("Name: ~w, Alter: ~d~n", ["Anna", 25]).

% Ergebnis in Variable speichern
format(atom(Message), "Name: ~w, Alter: ~d", ["Anna", 25]).

% Verschiedene Format-Direktiven
format(atom(F1), "Float: ~4f", [3.14159]).   % "Float: 3.1416"
format(atom(F2), "Hex: ~16r", [255]).         % "Hex: ff"
```

**Besonderheiten:**
- `format/2` schreibt auf den aktuellen Ausgabestream
- `format(atom(X), Format, Args)` speichert das Ergebnis in einem Atom
- Format-Direktiven: `~w` (write), `~a` (atom), `~d` (dezimal), `~f` (Float), `~e` (exponential), `~r` (Radix)
- `~n` für Zeilenumbruch

**Weiterführende Links:**
- [SWI-Prolog Documentation - format/2](https://www.swi-prolog.org/pldoc/doc_for?object=format/2)

</TabItem>
<TabItem value="python" label="Python">

```python
# String Formatting
name = "Anna"
age = 25
message = "Name: {}, Alter: {}".format(name, age)

# Mit Formatierungsspezifikationen
formatted = "Alter: {:02d}".format(age)

# Mit f-strings (seit Python 3.6)
message2 = f"Name: {name}, Alter: {age}"
formatted2 = f"Alter: {age:02d}"
```

**Besonderheiten:**
- `str.format` mit Platzhaltern `{}`
- Unterstützt Formatierungsspezifikationen wie `{:02d}`
- f-strings (seit Python 3.6) als moderne Alternative

**Weiterführende Links:**
- [Python Documentation - String Formatting](https://docs.python.org/3/library/stdtypes.html#str.format)

</TabItem>
<TabItem value="r" label="R">

```r
# String Formatting
name <- "Anna"
age <- 25
message <- sprintf("Name: %s, Alter: %d", name, age)

# Mit Formatierungsspezifikationen
formatted <- sprintf("Alter: %02d", age)
```

**Besonderheiten:**
- Verwendet `sprintf` mit `printf`-Style Formatierung
- Platzhalter: `%s` (String), `%d` (Integer), `%f` (Float), etc.
- Unterstützt Formatierungsspezifikationen

**Weiterführende Links:**
- [R Documentation - sprintf](https://www.rdocumentation.org/packages/base/versions/3.6.2/topics/sprintf)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# String Formatting
name = "Anna"
age = 25
message = "Name: %s, Alter: %d" % [name, age]

# Mit Formatierungsspezifikationen
formatted = "Alter: %02d" % age

# Mit String Interpolation
message2 = "Name: #{name}, Alter: #{age}"
```

**Besonderheiten:**
- Verwendet `%` Operator mit `printf`-Style Formatierung
- Platzhalter: `%s` (String), `%d` (Integer), `%f` (Float), etc.
- String Interpolation als alternative Methode

**Weiterführende Links:**
- [Ruby Documentation - String Formatting](https://ruby-doc.org/core-3.1.0/String.html#method-i-25)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// String Formatting
let name = "Anna";
let age = 25;
let message = format!("Name: {}, Alter: {}", name, age);

// Mit Formatierungsspezifikationen
let formatted = format!("Alter: {:02}", age);
```

**Besonderheiten:**
- Verwendet `format!` Makro mit Platzhaltern `{}`
- Unterstützt Formatierungsspezifikationen wie `{:02}`
- Typ-sichere Formatierung

**Weiterführende Links:**
- [The Rust Book - format! Macro](https://doc.rust-lang.org/std/macro.format.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// String Formatting
val name = "Anna"
val age = 25
val message = "Name: %s, Alter: %d".format(name, age)

// Mit Formatierungsspezifikationen
val formatted = "Alter: %02d".format(age)

// Mit String Interpolation
val message2 = s"Name: $name, Alter: $age"
```

**Besonderheiten:**
- `String.format` mit `printf`-Style Formatierung
- Platzhalter: `%s` (String), `%d` (Integer), `%f` (Float), etc.
- String Interpolation als alternative Methode

**Weiterführende Links:**
- [Scala Documentation - String Formatting](https://www.scala-lang.org/api/2.13.10/scala/collection/StringOps.html#format(args:Any*):String)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// String Formatting
let name = "Anna"
let age = 25
let message = String(format: "Name: %@, Alter: %d", name, age)

// Mit Formatierungsspezifikationen
let formatted = String(format: "Alter: %02d", age)

// Mit String Interpolation
let message2 = "Name: \(name), Alter: \(age)"
```

**Besonderheiten:**
- `String(format:)` mit `printf`-Style Formatierung
- Platzhalter: `%@` (Object), `%d` (Integer), `%f` (Float), etc.
- String Interpolation als alternative Methode

**Weiterführende Links:**
- [Swift Documentation - String Formatting](https://developer.apple.com/documentation/foundation/nsstring/1407309-init)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// String Formatting (Template Literals)
const name = "Anna";
const age = 25;
const message = `Name: ${name}, Alter: ${age}`;

// Mit Formatierungsspezifikationen
const formatted = `Alter: ${age.toString().padStart(2, '0')}`;
```

**Besonderheiten:**
- Template Literals als primäre Methode
- Formatierungsspezifikationen über Methoden wie `padStart`, `toFixed`, etc.

**Weiterführende Links:**
- [TypeScript Handbook - Template Literals](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' String Formatting
Dim name As String = "Anna"
Dim age As Integer = 25
Dim message As String = String.Format("Name: {0}, Alter: {1}", name, age)

' Mit Formatierungsspezifikationen
Dim formatted As String = String.Format("Alter: {0:D2}", age)

' Mit String Interpolation (seit VB.NET 14.0)
Dim message2 As String = $"Name: {name}, Alter: {age}"
```

**Besonderheiten:**
- `String.Format` mit Platzhaltern `{0}`, `{1}`, etc.
- Unterstützt Formatierungsspezifikationen wie `{0:D2}`
- String Interpolation (seit VB.NET 14.0) als moderne Alternative

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - String Formatting](https://learn.microsoft.com/en-us/dotnet/api/system.string.format)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; format Grundlagen
(format nil "Name: ~a, Alter: ~a" "Alice" 30)
;; "Name: Alice, Alter: 30"

;; Zahlenformatierung
(format nil "Dezimal: ~d, Hex: ~x, Binär: ~b" 255 255 255)
;; "Dezimal: 255, Hex: FF, Binär: 11111111"

;; Fließkomma
(format nil "Float: ~f, Wissenschaftlich: ~e" 3.14159 3.14159)
;; "Float: 3.14159, Wissenschaftlich: 3.14159E+0"

;; Padding und Ausrichtung
(format nil "|~10a|~10d|" "Name" 42)
;; "|Name      |        42|"
```

**Besonderheiten:**
- `format` ist extrem mächtig mit eigener Minisprache
- `~a` für ästhetische Ausgabe, `~s` für read-bare Ausgabe
- Unterstützt Iteration (`~{...~}`), Bedingungen (`~[...~]`), Pluralbildung (`~p`)
- `nil` als erstes Argument gibt String zurück, `t` gibt auf stdout aus

**Weiterführende Links:**
- [Common Lisp HyperSpec - format](http://www.lispworks.com/documentation/HyperSpec/Body/f_format.htm)

</TabItem>
<TabItem value="d" label="D">

```d
// String Formatting
// Benötigt: import std.format;
// Benötigt: import std.stdio;
string name = "Alice";
int age = 30;

// format (printf-ähnlich)
string s = format("Name: %s, Alter: %d", name, age);
writeln(s);  // "Name: Alice, Alter: 30"

// writefln (direkte formatierte Ausgabe)
writefln("Pi ist %.2f", 3.14159);  // "Pi ist 3.14"

// Padding und Ausrichtung
writefln("|%10s|", "test");    // |      test|
writefln("|%-10s|", "test");   // |test      |
```

**Besonderheiten:**
- `std.format.format` für printf-ähnliche Formatierung
- `writef`/`writefln` für formatierte Ausgabe
- Unterstützt `%s` (String), `%d` (Integer), `%f` (Float), `%x` (Hex) etc.
- Positionelle Argumente und benutzerdefinierte Formatierung via `toString`

**Weiterführende Links:**
- [D Phobos - std.format](https://dlang.org/phobos/std_format.html)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Benötigt: using Printf
# String Interpolation (primäre Methode)
name = "Welt"
println("Hallo, $name!")

# Printf-style Formatierung
@printf("Pi ist ungefähr %.2f\n", 3.14159)
formatted = @sprintf("Wert: %05d", 42)  # "Wert: 00042"

# Zahlenformatierung
@printf("Hex: %x, Oct: %o, Sci: %e\n", 255, 255, 12345.6789)
```

**Besonderheiten:**
- String-Interpolation mit `$` ist die primäre Formatierungsmethode
- `@printf` und `@sprintf` aus dem `Printf`-Modul für C-style Formatierung
- `@sprintf` gibt einen formatierten String zurück, `@printf` gibt direkt aus

**Weiterführende Links:**
- [Julia Documentation - Printf](https://docs.julialang.org/en/v1/stdlib/Printf/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Benötigt: import strformat
let name = "Alice"
let age = 30
let pi = 3.14159

# String Interpolation mit fmt
echo fmt"{name} ist {age} Jahre alt"
echo fmt"Pi = {pi:.2f}"
echo fmt"Hex: {255:X}"

# strutils Formatierung
# Benötigt: import strutils
echo align("hello", 10)      # "     hello"
echo alignLeft("hello", 10)  # "hello     "
```

**Besonderheiten:**
- `fmt` und `&` Makros aus `strformat`-Modul
- Unterstützt Python-ähnliche Format-Spezifizierer
- `strutils`-Modul für weitere Formatierungsfunktionen

**Weiterführende Links:**
- [Nim Documentation - strformat](https://nim-lang.org/docs/strformat.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Benötigt: uses SysUtils;
var
  name: string;
  age: Integer;
  result: string;
begin
  name := 'Alice';
  age := 30;
  result := Format('Name: %s, Alter: %d', [name, age]);
  result := Format('Pi: %.2f', [3.14159]);
  result := Format('Hex: %x', [255]);
  WriteLn(result);
end;
```

**Besonderheiten:**
- `Format`-Funktion mit Printf-ähnlichen Formatierern
- `%s` für Strings, `%d` für Integer, `%f` für Float, `%x` für Hex
- Array of const für Parameter
- Keine native String-Interpolation

**Weiterführende Links:**
- [Free Pascal Documentation - Format](https://www.freepascal.org/docs-html/rtl/sysutils/format.html)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
NSString *name = @"Alice";
int age = 30;
double score = 95.5;

// printf-Style Formatting
NSString *formatted = [NSString stringWithFormat:@"Name: %@, Alter: %d, Score: %.1f", name, age, score];

// Padding und Ausrichtung
NSString *padded = [NSString stringWithFormat:@"|%-10s|%10d|", "links", 42];
```

**Besonderheiten:**
- `stringWithFormat:` mit printf-Style Format-Spezifizierer
- `%@` für Objective-C Objekte (ruft `description` auf)
- `%d`, `%f`, `%s` für primitive Typen (C-Style)
- `NSLog()` verwendet dasselbe Format

**Weiterführende Links:**
- [Apple Documentation - String Format Specifiers](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Strings/Articles/formatSpecifiers.html)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* String Formatting *)
result = StringForm["`1` + `2` = `3`", 1, 2, 3]
(* "1 + 2 = 3" *)

(* ToString mit verschiedenen Formaten *)
num = ToString[3.14159, NumberForm]
padded = IntegerString[42, 10, 5]  (* "00042" *)
```

**Besonderheiten:**
- `StringForm` für positionsbasierte Formatierung
- `ToString[expr, form]` für verschiedene Darstellungsformen
- `NumberForm`, `ScientificForm`, `PaddedForm` für Zahlenformatierung

**Weiterführende Links:**
- [Wolfram Language Documentation - StringForm](https://reference.wolfram.com/language/ref/StringForm.html)

</TabItem>
</Tabs>


## 11.1.8. Regular Expressions

Pattern-Matching und String-Manipulation mit regulären Ausdrücken.

### Sprachen {#sprachen}

<Tabs availableTabs={['clojure', 'cpp', 'csharp', 'd', 'dart', 'go', 'groovy', 'haskell', 'java', 'javascript', 'julia', 'kotlin', 'lua', 'matlab', 'nim', 'objective-c', 'ocaml', 'octave', 'perl', 'php', 'prolog', 'python', 'r', 'ruby', 'rust', 'scala', 'swift', 'typescript', 'vbnet', 'wolfram-language']} orangeTabs={['c']}>
<TabItem value="c" label="C">

```c
// Regular Expressions (POSIX regex)
#include <regex.h>
regex_t regex;
int reti = regcomp(&regex, "^[a-z]+$", 0);
if (reti == 0) {
    reti = regexec(&regex, "hello", 0, NULL, 0);
    if (reti == 0) {
        // Match gefunden
    }
}
regfree(&regex);
```

**Besonderheiten:**
- Verwendet POSIX regex API
- Manuelle Speicherverwaltung erforderlich
- Keine eingebaute Regex-Unterstützung in der Standardbibliothek

**Weiterführende Links:**
- [C Standard - regex.h](https://en.cppreference.com/w/c/regex)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Regular Expressions
using System.Text.RegularExpressions;

string pattern = @"^[a-z]+$";
string input = "hello";
bool isMatch = Regex.IsMatch(input, pattern);

// Mit Match-Objekten
Match match = Regex.Match(input, pattern);
if (match.Success) {
    string matched = match.Value;
}

// Mit Replace
string replaced = Regex.Replace(input, pattern, "replaced");
```

**Besonderheiten:**
- Verwendet `System.Text.RegularExpressions.Regex` Klasse
- Raw String Literals (seit C# 11) für bessere Lesbarkeit
- Unterstützt Match, Replace, Split Operationen

**Weiterführende Links:**
- [Microsoft C# Documentation - Regular Expressions](https://learn.microsoft.com/en-us/dotnet/api/system.text.regularexpressions.regex)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Regular Expressions (seit C++11)
#include <regex>
std::regex pattern("^[a-z]+$");
std::string input = "hello";
bool isMatch = std::regex_match(input, pattern);

// Mit Match-Objekten
std::smatch match;
if (std::regex_search(input, match, pattern)) {
    std::string matched = match.str();
}

// Mit Replace
std::string replaced = std::regex_replace(input, pattern, "replaced");
```

**Besonderheiten:**
- Verwendet `<regex>` Header (seit C++11)
- Unterstützt `regex_match`, `regex_search`, `regex_replace`
- ECMAScript-Syntax als Standard

**Weiterführende Links:**
- [C++ Reference - std::regex](https://en.cppreference.com/w/cpp/regex)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Regular Expressions
import 'dart:core';

RegExp pattern = RegExp(r'^[a-z]+$');
String input = "hello";
bool isMatch = pattern.hasMatch(input);

// Mit Match-Objekten
Match? match = pattern.firstMatch(input);
if (match != null) {
    String matched = match.group(0)!;
}

// Mit Replace
String replaced = input.replaceAll(pattern, "replaced");
```

**Besonderheiten:**
- Verwendet `RegExp` Klasse
- Raw Strings für bessere Lesbarkeit
- Unterstützt `hasMatch`, `firstMatch`, `allMatches`

**Weiterführende Links:**
- [Dart Documentation - Regular Expressions](https://dart.dev/guides/libraries/library-tour#regular-expressions)

</TabItem>
<TabItem value="go" label="Go">

```go
// Regular Expressions
import "regexp"

pattern := regexp.MustCompile(`^[a-z]+$`)
input := "hello"
isMatch := pattern.MatchString(input)

// Mit Match-Objekten
match := pattern.FindString(input)
if match != "" {
    // Match gefunden
}

// Mit Replace
replaced := pattern.ReplaceAllString(input, "replaced")
```

**Besonderheiten:**
- Verwendet `regexp` Package
- Raw String Literals für bessere Lesbarkeit
- Unterstützt `MatchString`, `FindString`, `ReplaceAllString`

**Weiterführende Links:**
- [Go Documentation - regexp Package](https://pkg.go.dev/regexp)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Regular Expressions
def pattern = ~/^[a-z]+$/
def input = "hello"
boolean isMatch = input ==~ pattern

// Mit Match-Objekten
def matcher = input =~ pattern
if (matcher) {
    String matched = matcher[0]
}

// Mit Replace
String replaced = input.replaceAll(pattern, "replaced")
```

**Besonderheiten:**
- Verwendet `~` Operator für Pattern-Erstellung
- `==~` für exakte Übereinstimmung, `=~` für Suche
- Unterstützt Pattern-Matching-Operatoren

**Weiterführende Links:**
- [Groovy Documentation - Regular Expressions](https://groovy-lang.org/operators.html#_regex_operator)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Regular Expressions (Text.Regex)
import Text.Regex

pattern = mkRegex "^[a-z]+$"
input = "hello"
isMatch = matchTest pattern input

-- Mit Match-Objekten
case matchRegex pattern input of
    Just matches -> head matches
    Nothing -> ""
```

**Besonderheiten:**
- Verwendet `Text.Regex` Modul
- Funktionale API
- Unterstützt `matchTest`, `matchRegex`

**Weiterführende Links:**
- [Haskell Documentation - Text.Regex](https://hackage.haskell.org/package/regex-compat)

</TabItem>
<TabItem value="java" label="Java">

```java
// Regular Expressions
import java.util.regex.Pattern;
import java.util.regex.Matcher;

Pattern pattern = Pattern.compile("^[a-z]+$");
String input = "hello";
boolean isMatch = pattern.matcher(input).matches();

// Mit Match-Objekten
Matcher matcher = pattern.matcher(input);
if (matcher.find()) {
    String matched = matcher.group();
}

// Mit Replace
String replaced = input.replaceAll("^[a-z]+$", "replaced");
```

**Besonderheiten:**
- Verwendet `java.util.regex.Pattern` und `Matcher` Klassen
- Unterstützt `matches()`, `find()`, `replaceAll()`
- Thread-safe Pattern-Objekte

**Weiterführende Links:**
- [Oracle Java Documentation - Regular Expressions](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/regex/Pattern.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Regular Expressions
const pattern = /^[a-z]+$/;
const input = "hello";
const isMatch = pattern.test(input);

// Mit Match-Objekten
const match = input.match(pattern);
if (match) {
    const matched = match[0];
}

// Mit Replace
const replaced = input.replace(pattern, "replaced");
```

**Besonderheiten:**
- Verwendet Regex-Literale `/pattern/` oder `RegExp` Konstruktor
- Unterstützt `test()`, `match()`, `replace()`
- ECMAScript-Syntax

**Weiterführende Links:**
- [MDN Web Docs - Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Regular Expressions
using Regex

pattern = r"^[a-z]+$"
input = "hello"
isMatch = occursin(pattern, input)

# Mit Match-Objekten
match = match(pattern, input)
if match !== nothing
    matched = match.match
end

# Mit Replace
replaced = replace(input, pattern => "replaced")
```

**Besonderheiten:**
- Verwendet `Regex` Typ mit `r"..."` Syntax
- Unterstützt `occursin()`, `match()`, `replace()`
- Unterstützt Named Captures

**Weiterführende Links:**
- [Julia Documentation - Regular Expressions](https://docs.julialang.org/en/v1/manual/strings/#Regular-Expressions)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Regular Expressions
val pattern = Regex("^[a-z]+$")
val input = "hello"
val isMatch = pattern.matches(input)

// Mit Match-Objekten
val match = pattern.find(input)
if (match != null) {
    val matched = match.value
}

// Mit Replace
val replaced = input.replace(pattern, "replaced")
```

**Besonderheiten:**
- Verwendet `Regex` Klasse
- Unterstützt `matches()`, `find()`, `replace()`
- Unterstützt Raw Strings für bessere Lesbarkeit

**Weiterführende Links:**
- [Kotlin Documentation - Regular Expressions](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.text/-regex/)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Regular Expressions (Lua Patterns)
local pattern = "^[a-z]+$"
local input = "hello"
local isMatch = string.match(input, pattern) ~= nil

-- Mit Match-Objekten
local matched = string.match(input, pattern)
if matched then
    -- Match gefunden
end

-- Mit Replace
local replaced = string.gsub(input, pattern, "replaced")
```

**Besonderheiten:**
- Verwendet Lua Patterns (vereinfachte Regex-Syntax)
- Unterstützt `string.match()`, `string.gsub()`
- Nicht vollständig kompatibel mit Standard-Regex

**Weiterführende Links:**
- [Lua Documentation - Patterns](https://www.lua.org/manual/5.4/manual.html#6.4.1)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Regular Expressions *)
open Str

let pattern = regexp "^[a-z]+$"
let input = "hello"
let isMatch = string_match pattern input 0

(* Mit Match-Objekten *)
let matched = matched_string input

(* Mit Replace *)
let replaced = global_replace (regexp "^[a-z]+$") "replaced" input
```

**Besonderheiten:**
- Verwendet `Str` Modul
- Unterstützt `string_match()`, `matched_string()`, `global_replace()`
- Funktionale API

**Weiterführende Links:**
- [OCaml Documentation - Str Module](https://v2.ocaml.org/api/Str.html)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Regular Expressions
my $pattern = qr/^[a-z]+$/;
my $input = "hello";
my $isMatch = $input =~ $pattern;

# Mit Match-Objekten
if ($input =~ /^[a-z]+$/) {
    my $matched = $&;
}

# Mit Replace
my $replaced = $input =~ s/^[a-z]+$/replaced/r;
```

**Besonderheiten:**
- Regex ist integraler Bestandteil der Sprache
- Verwendet `=~` Operator für Matching
- Unterstützt viele erweiterte Features

**Weiterführende Links:**
- [Perl Documentation - Regular Expressions](https://perldoc.perl.org/perlre)

</TabItem>
<TabItem value="php" label="PHP">

```php
// Regular Expressions
$pattern = "/^[a-z]+$/";
$input = "hello";
$isMatch = preg_match($pattern, $input);

// Mit Match-Objekten
if (preg_match($pattern, $input, $matches)) {
    $matched = $matches[0];
}

// Mit Replace
$replaced = preg_replace($pattern, "replaced", $input);
```

**Besonderheiten:**
- Verwendet `preg_*` Funktionen (PCRE)
- Unterstützt `preg_match()`, `preg_replace()`, `preg_split()`
- PCRE-Syntax (Perl Compatible Regular Expressions)

**Weiterführende Links:**
- [PHP Documentation - Regular Expressions](https://www.php.net/manual/en/book.pcre.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Regular Expressions
% Benötigt: use_module(library(pcre))

% Pattern Matching
re_match("^[a-z]+$", "hello").

% Mit Match-Gruppen
re_matchsub("^([a-z]+)$", "hello", Sub, []).
% Sub = re_match{0:"hello", 1:"hello"}

% Ersetzen
re_replace("^[a-z]+$", "replaced", "hello", Result).
% Result = "replaced"
```

**Besonderheiten:**
- Verwendet `library(pcre)` für PCRE-basierte reguläre Ausdrücke
- `re_match/2` für einfaches Pattern Matching
- `re_matchsub/4` für Capture Groups als Dict
- `re_replace/4` für Ersetzungen
- `re_split/3` für String-Splitting

**Weiterführende Links:**
- [SWI-Prolog Documentation - library(pcre)](https://www.swi-prolog.org/pldoc/man?section=pcre)

</TabItem>
<TabItem value="python" label="Python">

```python
# Regular Expressions
import re

pattern = re.compile(r"^[a-z]+$")
input = "hello"
isMatch = pattern.match(input) is not None

# Mit Match-Objekten
match = pattern.match(input)
if match:
    matched = match.group()

# Mit Replace
replaced = re.sub(pattern, "replaced", input)
```

**Besonderheiten:**
- Verwendet `re` Modul
- Unterstützt `match()`, `search()`, `sub()`, `findall()`
- Raw Strings für bessere Lesbarkeit

**Weiterführende Links:**
- [Python Documentation - Regular Expressions](https://docs.python.org/3/library/re.html)

</TabItem>
<TabItem value="r" label="R">

```r
# Regular Expressions
pattern <- "^[a-z]+$"
input <- "hello"
isMatch <- grepl(pattern, input)

# Mit Match-Objekten
match <- regexpr(pattern, input)
if (match != -1) {
    matched <- regmatches(input, match)
}

# Mit Replace
replaced <- sub(pattern, "replaced", input)
```

**Besonderheiten:**
- Verwendet `grepl()`, `regexpr()`, `sub()`, `gsub()` Funktionen
- Unterstützt verschiedene Regex-Engines (POSIX, PCRE)

**Weiterführende Links:**
- [R Documentation - Regular Expressions](https://www.rdocumentation.org/packages/base/versions/3.6.2/topics/regex)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Regular Expressions
pattern = /^[a-z]+$/
input = "hello"
isMatch = pattern.match?(input)

# Mit Match-Objekten
match = pattern.match(input)
if match
    matched = match[0]
end

# Mit Replace
replaced = input.gsub(pattern, "replaced")
```

**Besonderheiten:**
- Verwendet Regex-Literale `/pattern/` oder `Regexp` Klasse
- Unterstützt `match()`, `match?()`, `gsub()`
- Unterstützt Named Captures

**Weiterführende Links:**
- [Ruby Documentation - Regular Expressions](https://ruby-doc.org/core-3.1.0/Regexp.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Regular Expressions
use regex::Regex;

let pattern = Regex::new(r"^[a-z]+$").unwrap();
let input = "hello";
let isMatch = pattern.is_match(input);

// Mit Match-Objekten
if let Some(matched) = pattern.find(input) {
    let matched_str = matched.as_str();
}

// Mit Replace
let replaced = pattern.replace(input, "replaced");
```

**Besonderheiten:**
- Verwendet `regex` Crate (extern)
- Unterstützt `is_match()`, `find()`, `replace()`
- Type-safe API

**Weiterführende Links:**
- [Rust regex Crate Documentation](https://docs.rs/regex/latest/regex/)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Regular Expressions
import scala.util.matching.Regex

val pattern = new Regex("^[a-z]+$")
val input = "hello"
val isMatch = pattern.matches(input)

// Mit Match-Objekten
val matchOption = pattern.findFirstIn(input)
matchOption.foreach { matched =>
    // Match gefunden
}

// Mit Replace
val replaced = pattern.replaceAllIn(input, "replaced")
```

**Besonderheiten:**
- Verwendet `scala.util.matching.Regex` Klasse
- Unterstützt `matches()`, `findFirstIn()`, `replaceAllIn()`
- Funktionale API mit Option-Typen

**Weiterführende Links:**
- [Scala Documentation - Regular Expressions](https://www.scala-lang.org/api/2.13.10/scala/util/matching/Regex.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Regular Expressions
import Foundation

let pattern = try! NSRegularExpression(pattern: "^[a-z]+$")
let input = "hello"
let range = NSRange(location: 0, length: input.utf16.count)
let isMatch = pattern.firstMatch(in: input, range: range) != nil

// Mit Match-Objekten
if let match = pattern.firstMatch(in: input, range: range) {
    let matched = String(input[Range(match.range, in: input)!])
}

// Mit Replace
let replaced = pattern.stringByReplacingMatches(in: input, range: range, withTemplate: "replaced")
```

**Besonderheiten:**
- Verwendet `NSRegularExpression` Klasse (Foundation)
- Unterstützt `firstMatch()`, `stringByReplacingMatches()`
- Objective-C-ähnliche API

**Weiterführende Links:**
- [Swift Documentation - NSRegularExpression](https://developer.apple.com/documentation/foundation/nsregularexpression)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Regular Expressions
const pattern = /^[a-z]+$/;
const input = "hello";
const isMatch = pattern.test(input);

// Mit Match-Objekten
const match = input.match(pattern);
if (match) {
    const matched = match[0];
}

// Mit Replace
const replaced = input.replace(pattern, "replaced");
```

**Besonderheiten:**
- Verwendet Regex-Literale `/pattern/` oder `RegExp` Konstruktor
- Unterstützt `test()`, `match()`, `replace()`
- ECMAScript-Syntax

**Weiterführende Links:**
- [MDN Web Docs - Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Regular Expressions
Imports System.Text.RegularExpressions

Dim pattern As New Regex("^[a-z]+$")
Dim input As String = "hello"
Dim isMatch As Boolean = pattern.IsMatch(input)

' Mit Match-Objekten
Dim match As Match = pattern.Match(input)
If match.Success Then
    Dim matched As String = match.Value
End If

' Mit Replace
Dim replaced As String = pattern.Replace(input, "replaced")
```

**Besonderheiten:**
- Verwendet `System.Text.RegularExpressions.Regex` Klasse
- Unterstützt `IsMatch()`, `Match()`, `Replace()`
- .NET Regex-Engine

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Regular Expressions](https://learn.microsoft.com/en-us/dotnet/api/system.text.regularexpressions.regex)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Regex-Literal
(def pattern #"\d+")

;; Suche
(re-find #"\d+" "abc123def")   ; "123"
(re-matches #"\d+" "123")       ; "123"
(re-matches #"\d+" "abc123")    ; nil

;; Alle Treffer
(re-seq #"\d+" "a1b2c3")        ; ("1" "2" "3")

;; Gruppen
(re-find #"(\w+)@(\w+)" "user@host")
;; ["user@host" "user" "host"]

;; Ersetzen
(clojure.string/replace "Hello World" #"\w+" "X")  ; "X X"
```

**Besonderheiten:**
- `#""` Literal-Syntax für kompilierte Regex-Pattern
- Basiert auf `java.util.regex.Pattern`
- `re-find`, `re-matches`, `re-seq` für Suche
- `clojure.string/replace` für Ersetzungen

**Weiterführende Links:**
- [Clojure Documentation - Regex](https://clojure.org/reference/other_functions#regex)

</TabItem>
<TabItem value="d" label="D">

```d
// Regular Expressions
// Benötigt: import std.regex;
// Benötigt: import std.stdio;
string text = "Kontakt: alice@example.com oder bob@test.de";

// Pattern Matching
auto emailPattern = regex(r"[\w.]+@[\w.]+\.\w+");
auto matches = matchAll(text, emailPattern);
foreach (m; matches) {
    writeln("Gefunden: ", m.hit);
}

// Ersetzen
string result = replaceAll(text, emailPattern, "[EMAIL]");
writeln(result);

// Compile-Time Regex
auto ctPattern = ctRegex!r"\d+";
auto numMatch = matchFirst("Alter: 30", ctPattern);
if (numMatch) {
    writeln("Zahl: ", numMatch.hit);  // "30"
}
```

**Besonderheiten:**
- `std.regex` für Runtime-Regex
- `ctRegex` für Compile-Time optimierte Regex
- Unterstützt `matchFirst`, `matchAll`, `replaceAll`, `replaceFirst`
- Compile-Time Regex bietet bessere Performance

**Weiterführende Links:**
- [D Phobos - std.regex](https://dlang.org/phobos/std_regex.html)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% Regular Expressions
str = 'Die Temperatur ist 23.5 Grad';
tokens = regexp(str, '(\d+\.?\d*)', 'tokens');
% tokens = {{'23.5'}}

% Ersetzen
result = regexprep('Hello World', 'World', 'MATLAB');
% result = 'Hello MATLAB'

% Case-insensitive
match = regexpi('Hello', '^hello$', 'match');
```

**Besonderheiten:**
- `regexp` für Pattern Matching
- `regexpi` für case-insensitive Suche
- `regexprep` für Suchen und Ersetzen
- PCRE-kompatible Regex-Syntax

**Weiterführende Links:**
- [MATLAB Documentation - Regular Expressions](https://www.mathworks.com/help/matlab/matlab_prog/regular-expressions.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Benötigt: import re
let text = "Hello, World! 42"

# Pattern Matching
if text =~ re"(\w+), (\w+)":
  echo matches[0]  # "Hello"
  echo matches[1]  # "World"

# Suche und Ersetzung
echo text.replace(re"\d+", "NUM")  # "Hello, World! NUM"

# Alle Treffer finden
for match in text.findAll(re"\w+"):
  echo match
```

**Besonderheiten:**
- `re`-Modul für PCRE-basierte Regex
- `=~`-Operator für Pattern Matching
- `nre`-Modul als alternative Implementierung
- Compile-time Regex mit `re"pattern"` Syntax

**Weiterführende Links:**
- [Nim Documentation - re Module](https://nim-lang.org/docs/re.html)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// NSRegularExpression (seit iOS 4.0 / OS X 10.7)
NSString *text = @"Kontakt: alice@example.com oder bob@test.de";
NSError *error = nil;
NSRegularExpression *regex = [NSRegularExpression
    regularExpressionWithPattern:@"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}"
    options:0
    error:&error];

NSArray *matches = [regex matchesInString:text options:0 range:NSMakeRange(0, text.length)];
for (NSTextCheckingResult *match in matches) {
    NSLog(@"%@", [text substringWithRange:match.range]);
}
```

**Besonderheiten:**
- `NSRegularExpression` seit iOS 4.0 / OS X 10.7
- ICU Regular Expression Syntax
- Unterstützt Named Capture Groups, Lookahead, Lookbehind
- `NSPredicate` als Alternative für einfache Pattern-Matches

**Weiterführende Links:**
- [Apple Documentation - NSRegularExpression](https://developer.apple.com/documentation/foundation/nsregularexpression)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
% Regular Expressions
str = "Heute ist der 15.02.2026";
[tok] = regexp(str, '(\d{2})\.(\d{2})\.(\d{4})', 'tokens');

% Suche und Ersetzung
result = regexprep("Hallo Welt", 'Welt', 'Octave');
```

**Besonderheiten:**
- `regexp` für Suche mit regulären Ausdrücken
- `regexpi` für case-insensitive Suche
- `regexprep` für Suchen und Ersetzen
- PCRE-kompatible Syntax

**Weiterführende Links:**
- [GNU Octave Documentation - Regular Expressions](https://octave.org/doc/v8.1.0/Regular-Expressions.html)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Regular Expressions *)
str = "Hello World 123";
matched = StringMatchQ[str, RegularExpression[".*\\d+.*"]]  (* True *)
found = StringCases[str, RegularExpression["\\d+"]]         (* {"123"} *)
replaced = StringReplace[str, RegularExpression["\\d+"] -> "XXX"]
(* "Hello World XXX" *)
```

**Besonderheiten:**
- `RegularExpression["pattern"]` für Regex-Patterns
- `StringMatchQ`, `StringCases`, `StringReplace` unterstützen Regex
- Wolfram Language hat auch eigene String-Patterns als Alternative

**Weiterführende Links:**
- [Wolfram Language Documentation - RegularExpression](https://reference.wolfram.com/language/ref/RegularExpression.html)

</TabItem>
</Tabs>


## 11.1.9. Pattern Matching auf Strings

Strukturelles Pattern Matching für String-Verarbeitung und -Analyse.

### Sprachen {#sprachen}

<Tabs availableTabs={['elixir', 'erlang', 'fsharp', 'gleam', 'haskell', 'lean4', 'mercury', 'ocaml', 'prolog', 'rust', 'scala', 'swift', 'wolfram-language']}>
<TabItem value="elixir" label="Elixir">

```elixir
# Pattern Matching auf Strings
case "hello" do
  "hello" -> "matched hello"
  "world" -> "matched world"
  _ -> "no match"
end

# Mit String-Patterns
name = "Anna"
greeting = case name do
  "Anna" -> "Hallo Anna"
  "Bob" -> "Hallo Bob"
  other -> "Hallo #{other}"
end
```

**Besonderheiten:**
- Verwendet `case` für Pattern Matching
- Unterstützt direkte String-Matches
- Unterstützt Wildcards mit `_`

**Weiterführende Links:**
- [Elixir Documentation - Pattern Matching](https://elixir-lang.org/getting-started/pattern-matching.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% Pattern Matching auf Strings
case "hello" of
    "hello" -> "matched hello";
    "world" -> "matched world";
    _ -> "no match"
end.

% Mit Funktions-Clauses
greet("Anna") -> "Hallo Anna";
greet("Bob") -> "Hallo Bob";
greet(Other) -> "Hallo " ++ Other.
```

**Besonderheiten:**
- Verwendet `case` für Pattern Matching
- Unterstützt direkte String-Matches
- Unterstützt Pattern Matching in Funktions-Clauses

**Weiterführende Links:**
- [Erlang Documentation - Pattern Matching](https://www.erlang.org/doc/reference_manual/patterns.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Pattern Matching auf Strings
let greeting = 
    match "Anna" with
    | "Anna" -> "Hallo Anna"
    | "Bob" -> "Hallo Bob"
    | name -> $"Hallo {name}"

// Mit when-Klauseln
let result = 
    match "hello" with
    | s when s.Length > 5 -> "long string"
    | s when s.StartsWith("h") -> "starts with h"
    | _ -> "other"
```

**Besonderheiten:**
- Verwendet `match` für Pattern Matching
- Unterstützt direkte String-Matches
- Unterstützt `when`-Klauseln für zusätzliche Bedingungen

**Weiterführende Links:**
- [F# Documentation - Pattern Matching](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/pattern-matching)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// Pattern Matching auf Strings
let greeting = case "Anna" {
  "Anna" -> "Hallo Anna"
  "Bob" -> "Hallo Bob"
  name -> "Hallo " <> name
}

// Mit Guards
let result = case "hello" {
  s if string.length(s) > 5 -> "long string"
  s if string.starts_with(s, "h") -> "starts with h"
  _ -> "other"
}
```

**Besonderheiten:**
- Verwendet `case` für Pattern Matching
- Unterstützt direkte String-Matches
- Unterstützt Guards mit `if` für zusätzliche Bedingungen

**Weiterführende Links:**
- [Gleam Documentation - Pattern Matching](https://gleam.run/documentation/tour/pattern-matching/)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Pattern Matching auf Strings
greeting :: String -> String
greeting "Anna" = "Hallo Anna"
greeting "Bob" = "Hallo Bob"
greeting name = "Hallo " ++ name

-- Mit case
result = case "hello" of
    "hello" -> "matched hello"
    "world" -> "matched world"
    _ -> "no match"
```

**Besonderheiten:**
- Verwendet Pattern Matching in Funktions-Definitionen
- Unterstützt direkte String-Matches
- Unterstützt `case` für Pattern Matching

**Weiterführende Links:**
- [Haskell Documentation - Pattern Matching](https://www.haskell.org/tutorial/patterns.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Pattern Matching auf Strings
def greeting (name : String) : String :=
  match name with
  | "Anna" => "Hallo Anna"
  | "Bob" => "Hallo Bob"
  | other => s!"Hallo {other}"

-- Mit Guards über if
def classify (s : String) : String :=
  if s.length > 5 then "langer String"
  else if s.startsWith "h" then "beginnt mit h"
  else "sonstiges"
```

**Besonderheiten:**
- `match`-Ausdruck für Pattern Matching auf String-Literale
- Direkte String-Literal-Matches werden unterstützt
- Wildcard `_` oder Variablenbindung für Catch-All
- Guards über `if`-Bedingungen (keine `when`-Klausel im Match)

**Weiterführende Links:**
- [Lean 4 Documentation - Pattern Matching](https://lean-lang.org/lean4/doc/patternmatching.html)
- [Functional Programming in Lean](https://lean-lang.org/functional_programming_in_lean/)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Pattern Matching auf Strings (Funktions-Clauses)
:- func greeting(string) = string.
greeting("Anna") = "Hallo Anna".
greeting("Bob") = "Hallo Bob".
greeting(Name) = "Hallo " ++ Name.

% Mit if-then-else
:- func classify(string) = string.
classify(S) =
    ( if S = "hello" then "matched hello"
    else if S = "world" then "matched world"
    else "no match"
    ).
```

**Besonderheiten:**
- Pattern Matching auf String-Literale in Funktions-Clauses
- Mehrere Clauses werden der Reihe nach geprüft
- Catch-All über eine ungebundene Variable (z.B. `Name`)
- Alternativ `if-then-else`-Ketten für String-Vergleiche
- Determinismus wird vom Compiler überprüft

**Weiterführende Links:**
- [Mercury Language Reference - Clauses](https://mercurylang.org/information/doc-release/mercury_ref/Clauses-and-goals.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Pattern Matching auf Strings *)
let greeting = function
  | "Anna" -> "Hallo Anna"
  | "Bob" -> "Hallo Bob"
  | name -> "Hallo " ^ name

(* Mit match *)
let result = match "hello" with
  | "hello" -> "matched hello"
  | "world" -> "matched world"
  | _ -> "no match"
```

**Besonderheiten:**
- Verwendet `match` oder `function` für Pattern Matching
- Unterstützt direkte String-Matches
- Unterstützt Wildcards mit `_`

**Weiterführende Links:**
- [OCaml Documentation - Pattern Matching](https://v2.ocaml.org/manual/patterns.html)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Pattern Matching auf Strings (Unifikation in Klausel-Köpfen)
greeting("Anna", "Hallo Anna").
greeting("Bob", "Hallo Bob").
greeting(Name, Greeting) :-
    format(atom(Greeting), "Hallo ~w", [Name]).

% Abfrage
?- greeting("Anna", G).
% G = "Hallo Anna"

?- greeting("Charlie", G).
% G = "Hallo Charlie"
```

**Besonderheiten:**
- Pattern Matching über Unifikation ist das Grundprinzip von Prolog
- String-Literale können direkt in Klausel-Köpfen gematcht werden
- Mehrere Klauseln werden der Reihe nach versucht (First-Match-Semantik)
- Variablen werden automatisch an den passenden Wert gebunden

**Weiterführende Links:**
- [SWI-Prolog Documentation - Strings](https://www.swi-prolog.org/pldoc/man?section=string)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Pattern Matching auf Strings
let greeting = match "Anna" {
    "Anna" => "Hallo Anna",
    "Bob" => "Hallo Bob",
    name => &format!("Hallo {}", name),
};

// Mit if let
if let "hello" = "hello" {
    // Match gefunden
}

// Mit match und Guards
let result = match "hello" {
    s if s.len() > 5 => "long string",
    s if s.starts_with("h") => "starts with h",
    _ => "other",
};
```

**Besonderheiten:**
- Verwendet `match` für Pattern Matching
- Unterstützt direkte String-Matches
- Unterstützt Guards mit `if` für zusätzliche Bedingungen
- Unterstützt `if let` für einfache Matches

**Weiterführende Links:**
- [The Rust Book - Pattern Matching](https://doc.rust-lang.org/book/ch18-00-patterns.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Pattern Matching auf Strings
val greeting = "Anna" match {
  case "Anna" => "Hallo Anna"
  case "Bob" => "Hallo Bob"
  case name => s"Hallo $name"
}

// Mit Guards
val result = "hello" match {
  case s if s.length > 5 => "long string"
  case s if s.startsWith("h") => "starts with h"
  case _ => "other"
}
```

**Besonderheiten:**
- Verwendet `match` für Pattern Matching
- Unterstützt direkte String-Matches
- Unterstützt Guards mit `if` für zusätzliche Bedingungen

**Weiterführende Links:**
- [Scala Documentation - Pattern Matching](https://docs.scala-lang.org/tour/pattern-matching.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Pattern Matching auf Strings
let greeting = switch "Anna" {
case "Anna":
    "Hallo Anna"
case "Bob":
    "Hallo Bob"
default:
    "Hallo \("Anna")"
}

// Mit where-Klauseln
let result = switch "hello" {
case let s where s.count > 5:
    "long string"
case let s where s.hasPrefix("h"):
    "starts with h"
default:
    "other"
}
```

**Besonderheiten:**
- Verwendet `switch` für Pattern Matching (seit Swift 5.9)
- Unterstützt direkte String-Matches
- Unterstützt `where`-Klauseln für zusätzliche Bedingungen

**Weiterführende Links:**
- [Swift Documentation - Pattern Matching](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/controlflow/#Switch)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Pattern Matching auf Strings *)
str = "Hello World";
StringMatchQ[str, "Hello" ~~ __]     (* True *)
StringCases[str, WordCharacter ..]   (* {"Hello", "World"} *)
StringReplace["abc123", DigitCharacter -> "X"]  (* "abcXXX" *)
```

**Besonderheiten:**
- Eigene String-Pattern-Syntax: `~~` für Konkatenation, `__` für ein oder mehr Zeichen
- `WordCharacter`, `DigitCharacter`, `LetterCharacter` als vordefinierte Patterns
- Kombinierbar mit `RegularExpression` für komplexere Muster

**Weiterführende Links:**
- [Wolfram Language Documentation - String Patterns](https://reference.wolfram.com/language/guide/StringPatterns.html)

</TabItem>
</Tabs>

