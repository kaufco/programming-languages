---
slug: /string-verarbeitung/string-features
title: 11.1. String Features
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 11.1. String Features

Features for string processing.

## 11.1.1. String Interpolation

Inserting variables and expressions directly into string literals.

### Languages {#sprachen}

<Tabs availableTabs={['crystal', 'csharp', 'dart', 'elixir', 'fsharp', 'groovy', 'haxe', 'julia', 'kotlin', 'lean4', 'nim', 'perl', 'php', 'python', 'roc', 'ruby', 'rust', 'scala', 'swift', 'typescript', 'v', 'vbnet', 'wolfram-language']}>
<TabItem value="csharp" label="C#">

```csharp
// String Interpolation (since C# 6.0)
string name = "Anna";
int age = 25;
string message = $"Name: {name}, Alter: {age}";

// With expressions
string greeting = $"Hallo {name.ToUpper()}, du bist {age + 1} Jahre alt";
```

**Special features:**
- Uses `$` prefix before the string literal
- Expressions in curly braces `{...}`
- Supports arbitrary expressions, not just variables

**Further reading:**
- [Microsoft C# Documentation - String Interpolation](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/tokens/interpolated)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# String Interpolation
name = "Anna"
age = 25
message = "Name: #{name}, Alter: #{age}"

# With expressions
greeting = "Hallo #{name.upcase}, du bist #{age + 1} Jahre alt"
```

**Special features:**
- Uses `#{...}` syntax
- Supports arbitrary expressions

**Further reading:**
- [Crystal Documentation - String Interpolation](https://crystal-lang.org/reference/1.7/syntax_and_semantics/literals/string.html#interpolation)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// String Interpolation
String name = "Anna";
int age = 25;
String message = "Name: $name, Alter: $age";

// With expressions
String greeting = "Hallo ${name.toUpperCase()}, du bist ${age + 1} Jahre alt";
```

**Special features:**
- Simple variables with `$variable`
- Expressions with `${expression}`
- Supports arbitrary expressions

**Further reading:**
- [Dart Documentation - String Interpolation](https://dart.dev/guides/language/language-tour#strings)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# String Interpolation
name = "Anna"
age = 25
message = "Name: #{name}, Alter: #{age}"

# With expressions
greeting = "Hallo #{String.upcase(name)}, du bist #{age + 1} Jahre alt"
```

**Special features:**
- Uses `#{...}` syntax
- Supports arbitrary expressions

**Further reading:**
- [Elixir Documentation - String Interpolation](https://elixir-lang.org/getting-started/basic-types.html#strings)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// String Interpolation (since F# 5.0)
let name = "Anna"
let age = 25
let message = $"Name: {name}, Alter: {age}"

// With expressions
let greeting = $"Hallo {name.ToUpper()}, du bist {age + 1} Jahre alt"
```

**Special features:**
- Uses `$` prefix before the string literal (since F# 5.0)
- Expressions in curly braces `{...}`
- Supports arbitrary expressions

**Further reading:**
- [F# Documentation - String Interpolation](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/interpolated-strings)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// String Interpolation
def name = "Anna"
def age = 25
def message = "Name: ${name}, Alter: ${age}"

// With expressions
def greeting = "Hallo ${name.toUpperCase()}, du bist ${age + 1} Jahre alt"
```

**Special features:**
- Uses `${...}` syntax
- Supports arbitrary expressions

**Further reading:**
- [Groovy Documentation - String Interpolation](https://groovy-lang.org/syntax.html#_string_interpolation)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# String Interpolation
name = "Anna"
age = 25
message = "Name: $name, Alter: $age"

# With expressions
greeting = "Hallo $(uppercase(name)), du bist $(age + 1) Jahre alt"
```

**Special features:**
- Simple variables with `$variable`
- Expressions with `$(expression)`
- Supports arbitrary expressions

**Further reading:**
- [Julia Documentation - String Interpolation](https://docs.julialang.org/en/v1/manual/strings/#string-interpolation)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// String Interpolation
val name = "Anna"
val age = 25
val message = "Name: $name, Alter: $age"

// With expressions
val greeting = "Hallo ${name.uppercase()}, du bist ${age + 1} Jahre alt"
```

**Special features:**
- Simple variables with `$variable`
- Expressions with `${expression}`
- Supports arbitrary expressions

**Further reading:**
- [Kotlin Documentation - String Templates](https://kotlinlang.org/docs/strings.html#string-templates)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- String Interpolation with s!"..."
def name := "Anna"
def age := 25
def message := s!"Name: {name}, Alter: {age}"

-- With expressions
def greeting := s!"Hallo {name.toUpper}, du bist {age + 1} Jahre alt"

-- Arbitrary expressions
def result := s!"Ergebnis: {2 * 3 + 4}"
```

**Special features:**
- `s!"..."` as string interpolation syntax
- Expressions in `{...}` are evaluated
- Expressions must have a `ToString` instance
- Also `m!"..."` for message interpolation in tactics

**Further reading:**
- [Lean 4 Documentation - String Interpolation](https://lean-lang.org/lean4/doc/stringinterp.html)
- [Functional Programming in Lean](https://lean-lang.org/functional_programming_in_lean/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# String Interpolation
var name = "Anna"
var age = 25
var message = "Name: $name, Alter: $age"

# With expressions
var greeting = "Hallo $name.toUpper(), du bist $(age + 1) Jahre alt"
```

**Special features:**
- Simple variables with `$variable`
- Expressions with `$(expression)`
- Supports arbitrary expressions

**Further reading:**
- [Nim Documentation - String Interpolation](https://nim-lang.org/docs/strformat.html)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# String Interpolation
my $name = "Anna";
my $age = 25;
my $message = "Name: $name, Alter: $age";

# With expressions
my $greeting = "Hallo $name, du bist " . ($age + 1) . " Jahre alt";
```

**Special features:**
- Variables are automatically interpolated in double quotes
- Scalar variables with `$variable`
- Expressions must be combined with string concatenation

**Further reading:**
- [Perl Documentation - String Interpolation](https://perldoc.perl.org/perlop#Quote-and-Quote-like-Operators)

</TabItem>
<TabItem value="php" label="PHP">

```php
// String Interpolation
$name = "Anna";
$age = 25;
$message = "Name: {$name}, Alter: {$age}";

// With expressions
$greeting = "Hallo {$name}, du bist " . ($age + 1) . " Jahre alt";
```

**Special features:**
- Variables in double quotes are interpolated
- Complex expressions with curly braces `{$variable}`
- Expressions must be combined with string concatenation

**Further reading:**
- [PHP Documentation - String Interpolation](https://www.php.net/manual/en/language.types.string.php#language.types.string.parsing)

</TabItem>
<TabItem value="python" label="Python">

```python
# String Interpolation (f-strings, since Python 3.6)
name = "Anna"
age = 25
message = f"Name: {name}, Alter: {age}"

# With expressions
greeting = f"Hallo {name.upper()}, du bist {age + 1} Jahre alt"
```

**Special features:**
- Uses `f` prefix before the string literal (f-strings, since Python 3.6)
- Expressions in curly braces `{...}`
- Supports arbitrary expressions

**Further reading:**
- [Python Documentation - f-strings](https://docs.python.org/3/reference/lexical_analysis.html#f-strings)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# String Interpolation
name = "Anna"
age = 25
message = "Name: #{name}, Alter: #{age}"

# With expressions
greeting = "Hallo #{name.upcase}, du bist #{age + 1} Jahre alt"
```

**Special features:**
- Uses `#{...}` syntax
- Supports arbitrary expressions

**Further reading:**
- [Ruby Documentation - String Interpolation](https://ruby-doc.org/core-3.1.0/doc/syntax/literals_rdoc.html#label-String+Interpolation)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// String Interpolation with format! macro
let name = "Anna";
let age = 25;
let message = format!("Name: {}, Alter: {}", name, age);

// With expressions
let greeting = format!("Hallo {}, du bist {} Jahre alt", name.to_uppercase(), age + 1);
```

**Special features:**
- Uses `format!` macro
- Placeholders `{}` are replaced by arguments
- Supports formatting specifications

**Further reading:**
- [The Rust Book - format! Macro](https://doc.rust-lang.org/std/macro.format.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// String Interpolation (s-strings)
val name = "Anna"
val age = 25
val message = s"Name: $name, Alter: $age"

// With expressions
val greeting = s"Hallo ${name.toUpperCase}, du bist ${age + 1} Jahre alt"
```

**Special features:**
- Uses `s` prefix before the string literal
- Simple variables with `$variable`
- Expressions with `${expression}`
- Supports arbitrary expressions

**Further reading:**
- [Scala Documentation - String Interpolation](https://docs.scala-lang.org/overviews/core/string-interpolation.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// String Interpolation
let name = "Anna"
let age = 25
let message = "Name: \(name), Alter: \(age)"

// With expressions
let greeting = "Hallo \(name.uppercased()), du bist \(age + 1) Jahre alt"
```

**Special features:**
- Uses `\(...)` syntax
- Supports arbitrary expressions

**Further reading:**
- [Swift Documentation - String Interpolation](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/stringsandcharacters/#String-Interpolation)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// String Interpolation (Template Literals)
const name = "Anna";
const age = 25;
const message = `Name: ${name}, Alter: ${age}`;

// With expressions
const greeting = `Hallo ${name.toUpperCase()}, du bist ${age + 1} Jahre alt`;
```

**Special features:**
- Uses backticks `` ` `` for template literals
- Expressions with `${expression}`
- Supports arbitrary expressions

**Further reading:**
- [TypeScript Handbook - Template Literals](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#template-literal-types)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' String Interpolation (since VB.NET 14.0)
Dim name As String = "Anna"
Dim age As Integer = 25
Dim message As String = $"Name: {name}, Alter: {age}"

' With expressions
Dim greeting As String = $"Hallo {name.ToUpper()}, du bist {age + 1} Jahre alt"
```

**Special features:**
- Uses `$` prefix before the string literal (since VB.NET 14.0)
- Expressions in curly braces `{...}`
- Supports arbitrary expressions

**Further reading:**
- [Microsoft VB.NET Documentation - String Interpolation](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/strings/interpolated-strings)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// String Interpolation with Single Quotes
var name = "Welt";
var greeting = 'Hallo, $name!';
var expression = 'Ergebnis: ${2 + 3}';
```

**Special features:**
- Single-quoted strings (`'...'`) support string interpolation
- Double-quoted strings (`"..."`) are regular strings without interpolation
- `$variable` for simple variables, `${expression}` for expressions

**Further reading:**
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

**Special features:**
- `$(expression)` for string interpolation
- Only `Str` expressions can be interpolated
- Other types must be converted first (e.g., `Num.toStr`)

**Further reading:**
- [Roc Documentation - Strings](https://www.roc-lang.org/tutorial#strings)

</TabItem>
<TabItem value="v" label="V">

```v
// String Interpolation
name := 'Alice'
age := 30

greeting := 'Hallo, ${name}! Du bist ${age} Jahre alt.'
println(greeting)

// Expressions in interpolation
println('${age + 10} in 10 Jahren')
```

**Special features:**
- `${}` for interpolation in strings
- Arbitrary expressions within `${}`
- Simple variables also with `$name` (without brackets)

**Further reading:**
- [V Documentation - Strings](https://github.com/vlang/v/blob/master/doc/docs.md#strings)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* String Interpolation with StringTemplate (since Version 10.0) *)
name = "Max";
age = 30;
template = StringTemplate["Hallo, `name`! Du bist `age` Jahre alt."];
result = template[<|"name" -> name, "age" -> age|>]

(* StringForm *)
result2 = StringForm["Hallo, ``! Du bist `` Jahre alt.", name, age]
```

**Special features:**
- `StringTemplate` (since Version 10.0) for template-based interpolation
- `StringForm` for printf-like formatting
- String concatenation with `<>`: `"Hello" <> " " <> "World"`

**Further reading:**
- [Wolfram Language Documentation - StringTemplate](https://reference.wolfram.com/language/ref/StringTemplate.html)

</TabItem>
</Tabs>


## 11.1.2. Template Strings

String literals with extended features such as multiline support and tagged templates.

### Languages {#sprachen}

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

**Special features:**
- Uses backticks `` ` `` for template literals
- Supports multiline strings without escape characters
- Tagged templates enable custom string processing
- Expressions with `${expression}`

**Further reading:**
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

**Special features:**
- Uses backticks `` ` `` for template literals
- Supports multiline strings without escape characters
- Tagged templates enable custom string processing
- Expressions with `${expression}`
- TypeScript-specific types for tagged templates

**Further reading:**
- [TypeScript Handbook - Template Literal Types](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html)

</TabItem>
</Tabs>


## 11.1.3. String Templates (Java-style)

String literals with template processors for safe string interpolation.

### Languages {#sprachen}

<Tabs availableTabs={[]} orangeTabs={['java']}>
<TabItem value="java" label="Java">

```java
// String Templates (Preview in Java 21/22, withdrawn)
// Currently: use String.format or concatenation
String name = "Anna";
int age = 25;

// String.format
String message = String.format("Name: %s, Alter: %d", name, age);

// Concatenation
String message2 = "Name: " + name + ", Alter: " + age;
```

**Special features:**
- String Templates (`STR."..."`) were preview in Java 21/22, but were withdrawn
- Currently `String.format()` or concatenation is used
- No native string interpolation mechanism available in Java

**Further reading:**
- [Oracle Java Documentation - String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)

</TabItem>
</Tabs>


## 11.1.4. Raw Strings

String literals that do not interpret escape sequences.

### Languages {#sprachen}

<Tabs availableTabs={['csharp', 'd', 'dart', 'groovy', 'java', 'julia', 'kotlin', 'lua', 'nim', 'python', 'rust', 'scala', 'swift', 'v']}>
<TabItem value="csharp" label="C#">

```csharp
// Raw String Literals (since C# 11)
string path = """C:\Users\Name\Documents""";
string regex = """\d+""";
string json = """
    {
        "name": "Anna",
        "age": 25
    }
    """;
```

**Special features:**
- Uses `"""..."""` syntax (since C# 11)
- No escape sequences required
- Supports multiline strings

**Further reading:**
- [Microsoft C# Documentation - Raw String Literals](https://learn.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-11#raw-string-literals)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Raw Strings
String path = r"C:\Users\Name\Documents";
String regex = r"\d+";
String text = r"Zeile 1\nZeile 2"; // \n is not interpreted
```

**Special features:**
- Uses `r` prefix before the string literal
- No escape sequences are interpreted

**Further reading:**
- [Dart Documentation - Raw Strings](https://dart.dev/guides/language/language-tour#strings)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Raw Strings (Slashy Strings)
def path = /C:\Users\Name\Documents/
def regex = /\d+/
def text = /Zeile 1\nZeile 2/ // \n is not interpreted
```

**Special features:**
- Uses `/.../` syntax (Slashy Strings)
- No escape sequences are interpreted

**Further reading:**
- [Groovy Documentation - Strings](https://groovy-lang.org/syntax.html#_slashy_string)

</TabItem>
<TabItem value="java" label="Java">

```java
// Text Blocks (since Java 13, final since Java 15)
String path = """
    C:\\Users\\Name\\Documents
    """;
String regex = """
    \\d+
    """;
```

**Special features:**
- Uses `"""..."""` syntax (Text Blocks, since Java 13)
- Escape sequences are interpreted, but backslashes must be escaped
- Supports multiline strings

**Further reading:**
- [Oracle Java Documentation - Text Blocks](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html#text-blocks)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Raw Strings
val path = """C:\Users\Name\Documents"""
val regex = """\d+"""
val text = """Zeile 1\nZeile 2""" // \n is not interpreted
```

**Special features:**
- Uses `"""..."""` syntax
- No escape sequences are interpreted
- Supports multiline strings

**Further reading:**
- [Kotlin Documentation - Raw Strings](https://kotlinlang.org/docs/strings.html#raw-strings)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Raw Strings
var path = r"C:\Users\Name\Documents"
var regex = r"\d+"
var text = r"Zeile 1\nZeile 2" # \n is not interpreted
```

**Special features:**
- Uses `r` prefix before the string literal
- No escape sequences are interpreted

**Further reading:**
- [Nim Documentation - Raw Strings](https://nim-lang.org/docs/strformat.html)

</TabItem>
<TabItem value="python" label="Python">

```python
# Raw Strings
path = r"C:\Users\Name\Documents"
regex = r"\d+"
text = r"Zeile 1\nZeile 2"  # \n is not interpreted
```

**Special features:**
- Uses `r` prefix before the string literal
- No escape sequences are interpreted

**Further reading:**
- [Python Documentation - Raw Strings](https://docs.python.org/3/reference/lexical_analysis.html#string-and-bytes-literals)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Raw String Literals
let path = r"C:\Users\Name\Documents";
let regex = r"\d+";
let text = r"Zeile 1\nZeile 2"; // \n is not interpreted

// Raw String with delimiters
let json = r#"{"name": "Anna"}"#;
```

**Special features:**
- Uses `r"..."` syntax
- Supports delimiters for strings with quotes: `r#"..."#`
- No escape sequences are interpreted

**Further reading:**
- [The Rust Book - Raw String Literals](https://doc.rust-lang.org/reference/tokens.html#raw-string-literals)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Raw Strings
val path = raw"C:\Users\Name\Documents"
val regex = raw"\d+"
val text = raw"Zeile 1\nZeile 2" // \n is not interpreted
```

**Special features:**
- Uses `raw"..."` syntax
- No escape sequences are interpreted

**Further reading:**
- [Scala Documentation - Raw Strings](https://docs.scala-lang.org/overviews/core/string-interpolation.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Raw Strings (since Swift 5.0)
let path = #"C:\Users\Name\Documents"#
let regex = #"\d+"#
let text = #"Zeile 1\nZeile 2"# // \n is not interpreted

// Raw String with multiple # for strings with #
let textWithHash = ##"Text mit # Zeichen"##
```

**Special features:**
- Uses `#"..."#` syntax (since Swift 5.0)
- Supports multiple `#` as delimiters
- No escape sequences are interpreted

**Further reading:**
- [Swift Documentation - Extended String Delimiters](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/stringsandcharacters/#Extended-String-Delimiters)

</TabItem>
<TabItem value="d" label="D">

```d
// Raw Strings
string path = r"C:\Users\name\Documents";   // r"..." Raw String
string regex = r"\d+\.\d+";                  // No escape sequences

// Backtick Strings (also Raw Strings)
string path2 = `C:\Users\name\Documents`;
string html = `<div class="test">Hello</div>`;
```

**Special features:**
- `r"..."` for raw strings (no escape sequences)
- Backtick strings (`` `...` ``) are also raw strings
- Both variants do not interpret escape sequences like `\n`, `\t`

**Further reading:**
- [D Language Specification - String Literals](https://dlang.org/spec/lex.html#string_literals)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Raw Strings: no escape sequences
path = raw"C:\Users\name\Documents"
regex_pattern = raw"\d+\.\d+"

# Comparison: normal strings
normal = "Tab:\tNeue Zeile:\n"
raw_str = raw"Tab:\tNeue Zeile:\n"
println(raw_str)  # Tab:\tNeue Zeile:\n (literal)
```

**Special features:**
- `raw"..."` strings do not interpret escape sequences
- Useful for file paths and regular expressions
- Interpolation with `$` does not work in raw strings

**Further reading:**
- [Julia Documentation - Raw String Literals](https://docs.julialang.org/en/v1/manual/strings/#man-raw-string-literals)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Raw Strings: Long Strings with [[ ... ]]
local raw = [[Dies ist ein Raw String
mit Zeilenumbrüchen und \n wird nicht interpretiert.
Auch \t und \\ bleiben unverändert.]]

print(raw)

-- Long Strings with Level: [=[ ... ]=]
local nested = [=[
Hier kann sogar ]] vorkommen,
da Level 1 ([=[ ... ]=]) verwendet wird.
]=]

-- Level 2 for further nesting
local deep = [==[
[=[ verschachtelt ]=] ist möglich
]==]
```

**Special features:**
- `[[...]]` creates long strings without escape sequence interpretation
- Different levels possible: `[=[...]=]`, `[==[...]==]`, etc.
- First line break after `[[` is ignored
- Useful for embedded code, regex patterns, or multiline strings

**Further reading:**
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

**Special features:**
- `r'...'` for raw strings
- No escape sequences are processed
- Useful for paths and regular expressions

**Further reading:**
- [V Documentation - Strings](https://github.com/vlang/v/blob/master/doc/docs.md#strings)

</TabItem>
</Tabs>


## 11.1.5. Multiline Strings

String literals that can span multiple lines.

### Languages {#sprachen}

<Tabs availableTabs={['c', 'crystal', 'csharp', 'd', 'dart', 'go', 'groovy', 'haskell', 'java', 'javascript', 'julia', 'kotlin', 'lua', 'mercury', 'nim', 'ocaml', 'perl', 'php', 'prolog', 'python', 'roc', 'ruby', 'rust', 'scala', 'swift', 'typescript', 'v', 'vbnet']}>
<TabItem value="c" label="C">

```c
// Multiline Strings (String concatenation)
const char* text = "Zeile 1\n"
                   "Zeile 2\n"
                   "Zeile 3";
```

**Special features:**
- Automatic string concatenation for adjacent string literals
- Explicit `\n` required for line breaks

**Further reading:**
- [C Standard - String Literals](https://en.cppreference.com/w/c/language/string_literal)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Multiline Strings (since C# 11)
string text = """
    Zeile 1
    Zeile 2
    Zeile 3
    """;

// With String Interpolation
string name = "Anna";
string greeting = $"""
    Hallo {name},
    wie geht es dir?
    """;
```

**Special features:**
- Uses `"""..."""` syntax (since C# 11)
- Leading/trailing line breaks are ignored
- Supports string interpolation

**Further reading:**
- [Microsoft C# Documentation - Raw String Literals](https://learn.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-11#raw-string-literals)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Multiline Strings
text = "Zeile 1
Zeile 2
Zeile 3"

# With String Interpolation
name = "Anna"
greeting = "Hallo #{name},
wie geht es dir?"
```

**Special features:**
- Strings can directly span multiple lines
- Supports string interpolation

**Further reading:**
- [Crystal Documentation - Strings](https://crystal-lang.org/reference/1.7/syntax_and_semantics/literals/string.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Multiline Strings
String text = """Zeile 1
Zeile 2
Zeile 3""";

// With String Interpolation
String name = "Anna";
String greeting = """Hallo $name,
wie geht es dir?""";
```

**Special features:**
- Uses `"""..."""` syntax
- Supports string interpolation

**Further reading:**
- [Dart Documentation - Multiline Strings](https://dart.dev/guides/language/language-tour#strings)

</TabItem>
<TabItem value="go" label="Go">

```go
// Multiline Strings (Raw String Literals)
text := `Zeile 1
Zeile 2
Zeile 3`

// With String Formatting
name := "Anna"
greeting := fmt.Sprintf(`Hallo %s,
wie geht es dir?`, name)
```

**Special features:**
- Uses backticks `` ` `` for raw string literals
- No escape sequences are interpreted

**Further reading:**
- [Go Documentation - String Literals](https://go.dev/ref/spec#String_literals)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Multiline Strings
def text = """Zeile 1
Zeile 2
Zeile 3"""

// With String Interpolation
def name = "Anna"
def greeting = """Hallo ${name},
wie geht es dir?"""
```

**Special features:**
- Uses `"""..."""` syntax
- Supports string interpolation

**Further reading:**
- [Groovy Documentation - Multiline Strings](https://groovy-lang.org/syntax.html#_triple_double_quoted_string)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Multiline Strings
text = "Zeile 1\n\
       \Zeile 2\n\
       \Zeile 3"

-- Or with string concatenation
text2 = "Zeile 1\n" ++
        "Zeile 2\n" ++
        "Zeile 3"
```

**Special features:**
- Explicit `\n` required for line breaks
- Backslash at end of line for continuation
- Or use string concatenation

**Further reading:**
- [Haskell Documentation - String Literals](https://www.haskell.org/onlinereport/haskell2010/haskellch2.html#x7-200002.6)

</TabItem>
<TabItem value="java" label="Java">

```java
// Text Blocks (since Java 13, final since Java 15)
String text = """
    Zeile 1
    Zeile 2
    Zeile 3
    """;

// With String Templates (since Java 21)
String name = "Anna";
String greeting = STR."""
    Hallo \{name},
    wie geht es dir?
    """;
```

**Special features:**
- Uses `"""..."""` syntax (Text Blocks, since Java 13)
- Leading/trailing line breaks are ignored
- Supports String Templates (since Java 21)

**Further reading:**
- [Oracle Java Documentation - Text Blocks](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html#text-blocks)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Multiline Strings (Template Literals)
const text = `Zeile 1
Zeile 2
Zeile 3`;

// With String Interpolation
const name = "Anna";
const greeting = `Hallo ${name},
wie geht es dir?`;
```

**Special features:**
- Uses backticks `` ` `` for template literals
- Supports string interpolation

**Further reading:**
- [MDN Web Docs - Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Multiline Strings
text = """Zeile 1
Zeile 2
Zeile 3"""

# With String Interpolation
name = "Anna"
greeting = """Hallo $name,
wie geht es dir?"""
```

**Special features:**
- Uses `"""..."""` syntax
- Supports string interpolation

**Further reading:**
- [Julia Documentation - Strings](https://docs.julialang.org/en/v1/manual/strings/)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Multiline Strings
val text = """Zeile 1
Zeile 2
Zeile 3"""

// With String Interpolation
val name = "Anna"
val greeting = """Hallo $name,
wie geht es dir?"""
```

**Special features:**
- Uses `"""..."""` syntax
- Supports string interpolation

**Further reading:**
- [Kotlin Documentation - Multiline Strings](https://kotlinlang.org/docs/strings.html#string-templates)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Multiline Strings (Long Strings)
local text = [[Zeile 1
Zeile 2
Zeile 3]]

-- With String Formatting
local name = "Anna"
local greeting = string.format([[Hallo %s,
wie geht es dir?]], name)
```

**Special features:**
- Uses `[[...]]` syntax for long strings
- No escape sequences are interpreted

**Further reading:**
- [Lua Documentation - Strings](https://www.lua.org/manual/5.4/manual.html#3.1)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Multiline Strings (String concatenation)
Text = "Zeile 1\n" ++
       "Zeile 2\n" ++
       "Zeile 3",

% With string.format
Name = "Anna",
Greeting = string.format("Hallo %s,\nwie geht es dir?",
    [s(Name)])
```

**Special features:**
- Explicit `\n` required for line breaks
- String concatenation with `++` operator
- `string.format` as alternative for formatted multiline strings

**Further reading:**
- [Mercury Library Reference - string](https://mercurylang.org/information/doc-release/mercury_library/string.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Multiline Strings
var text = """Zeile 1
Zeile 2
Zeile 3"""

# With String Interpolation
var name = "Anna"
var greeting = """Hallo $name,
wie geht es dir?"""
```

**Special features:**
- Uses `"""..."""` syntax
- Supports string interpolation

**Further reading:**
- [Nim Documentation - Strings](https://nim-lang.org/docs/strformat.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Multiline Strings *)
let text = "Zeile 1\n\
            Zeile 2\n\
            Zeile 3"

(* Or with string concatenation *)
let text2 = "Zeile 1\n" ^
            "Zeile 2\n" ^
            "Zeile 3"
```

**Special features:**
- Explicit `\n` required for line breaks
- Backslash at end of line for continuation
- Or use string concatenation with `^`

**Further reading:**
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

**Special features:**
- Explicit `\n` required for line breaks
- Supports heredoc syntax

**Further reading:**
- [Perl Documentation - String Literals](https://perldoc.perl.org/perlop#Quote-and-Quote-like-Operators)

</TabItem>
<TabItem value="php" label="PHP">

```php
// Multiline Strings
$text = "Zeile 1\nZeile 2\nZeile 3";

// Heredoc syntax
$heredoc = <<<END
Zeile 1
Zeile 2
Zeile 3
END;
```

**Special features:**
- Explicit `\n` required for line breaks
- Supports heredoc syntax

**Further reading:**
- [PHP Documentation - Heredoc](https://www.php.net/manual/en/language.types.string.php#language.types.string.syntax.heredoc)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Multiline Strings
Text = "Zeile 1
Zeile 2
Zeile 3".

% With string concatenation
string_concat("Hallo Anna,\n", "wie geht es dir?", Greeting).
```

**Special features:**
- Double-quoted strings can directly span multiple lines (SWI-Prolog)
- Behavior depends on `double_quotes` flag (default: `string` in SWI-Prolog)
- String concatenation with `string_concat/3`

**Further reading:**
- [SWI-Prolog Documentation - Strings](https://www.swi-prolog.org/pldoc/man?section=string)

</TabItem>
<TabItem value="python" label="Python">

```python
# Multiline Strings (Triple Quotes)
text = """Zeile 1
Zeile 2
Zeile 3"""

# With String Interpolation
name = "Anna"
greeting = f"""Hallo {name},
wie geht es dir?"""
```

**Special features:**
- Uses `"""..."""` or `'''...'''` syntax
- Supports string interpolation (f-strings)

**Further reading:**
- [Python Documentation - String Literals](https://docs.python.org/3/reference/lexical_analysis.html#string-and-bytes-literals)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Multiline Strings
text = "Zeile 1
Zeile 2
Zeile 3"

# With String Interpolation
name = "Anna"
greeting = "Hallo #{name},
wie geht es dir?"
```

**Special features:**
- Strings can directly span multiple lines
- Supports string interpolation

**Further reading:**
- [Ruby Documentation - Strings](https://ruby-doc.org/core-3.1.0/doc/syntax/literals_rdoc.html#label-Strings)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Multiline Strings (Raw String Literals)
let text = r"Zeile 1
Zeile 2
Zeile 3";

// With String Formatting
let name = "Anna";
let greeting = format!(r"Hallo {},
wie geht es dir?", name);
```

**Special features:**
- Uses raw string literals `r"..."` for multiline
- No escape sequences are interpreted

**Further reading:**
- [The Rust Book - Raw String Literals](https://doc.rust-lang.org/reference/tokens.html#raw-string-literals)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Multiline Strings
val text = """Zeile 1
Zeile 2
Zeile 3"""

// With String Interpolation
val name = "Anna"
val greeting = s"""Hallo $name,
wie geht es dir?"""
```

**Special features:**
- Uses `"""..."""` syntax
- Supports string interpolation

**Further reading:**
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

// With String Interpolation
let name = "Anna"
let greeting = """
    Hallo \(name),
    wie geht es dir?
    """
```

**Special features:**
- Uses `"""..."""` syntax
- Leading/trailing line breaks are ignored
- Supports string interpolation

**Further reading:**
- [Swift Documentation - Multiline String Literals](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/stringsandcharacters/#Multiline-String-Literals)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Multiline Strings (Template Literals)
const text = `Zeile 1
Zeile 2
Zeile 3`;

// With String Interpolation
const name = "Anna";
const greeting = `Hallo ${name},
wie geht es dir?`;
```

**Special features:**
- Uses backticks `` ` `` for template literals
- Supports string interpolation

**Further reading:**
- [TypeScript Handbook - Template Literals](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Multiline Strings
Dim text As String = "Zeile 1" & vbCrLf &
                     "Zeile 2" & vbCrLf &
                     "Zeile 3"

' With String Interpolation (since VB.NET 14.0)
Dim name As String = "Anna"
Dim greeting As String = $"Hallo {name}," & vbCrLf &
                         $"wie geht es dir?"
```

**Special features:**
- String concatenation with `&` and `vbCrLf` for line breaks
- Supports string interpolation (since VB.NET 14.0)

**Further reading:**
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

// Concatenation across multiple lines
string s = "Zeile 1\n"
         ~ "Zeile 2\n"
         ~ "Zeile 3";
```

**Special features:**
- Backtick strings (`` `...` ``) are automatically multiline
- `r"..."` raw strings also support line breaks
- `q{...}` token strings for code fragments
- Automatic concatenation of adjacent string literals

**Further reading:**
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

**Special features:**
- Triple-quotes `"""` for multiline strings
- Leading whitespace is normalized

**Further reading:**
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

**Special features:**
- Normal strings can be multiline
- Line breaks are preserved
- String interpolation also works in multiline strings

**Further reading:**
- [V Documentation - Strings](https://github.com/vlang/v/blob/master/doc/docs.md#strings)

</TabItem>
</Tabs>


## 11.1.6. Here-documents / Heredoc

Multiline string literals with a delimiter at the beginning and end.

### Languages {#sprachen}

<Tabs availableTabs={['perl', 'php', 'ruby']} yellowTabs={['rust']}>
<TabItem value="perl" label="Perl">

```perl
# Heredoc
my $text = <<END;
Zeile 1
Zeile 2
Zeile 3
END

# Heredoc with variable interpolation
my $name = "Anna";
my $greeting = <<END;
Hallo $name,
wie geht es dir?
END

# Heredoc without variable interpolation
my $literal = <<'END';
Hallo $name,
wie geht es dir?
END
```

**Special features:**
- Syntax: `<<DELIMITER` ... `DELIMITER`
- Variables are interpolated, except when delimiter is in quotes
- Supports various delimiters

**Further reading:**
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

// Heredoc with variable interpolation
$name = "Anna";
$greeting = <<<END
Hallo $name,
wie geht es dir?
END;

// Nowdoc (without variable interpolation)
$literal = <<<'END'
Hallo $name,
wie geht es dir?
END;
```

**Special features:**
- Syntax: `<<<DELIMITER` ... `DELIMITER;`
- Variables are interpolated
- Nowdoc (with single quotes) without variable interpolation

**Further reading:**
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

# Heredoc with variable interpolation
name = "Anna"
greeting = <<END
Hallo #{name},
wie geht es dir?
END

# Heredoc without variable interpolation
literal = <<'END'
Hallo #{name},
wie geht es dir?
END
```

**Special features:**
- Syntax: `<<DELIMITER` ... `DELIMITER`
- Variables are interpolated, except when delimiter is in quotes
- Supports various delimiters

**Further reading:**
- [Ruby Documentation - Here Documents](https://ruby-doc.org/core-3.1.0/doc/syntax/literals_rdoc.html#label-Here+Documents)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Heredoc-like syntax with raw string literals
let text = r#"Zeile 1
Zeile 2
Zeile 3"#;

// With multiple # for strings with #
let json = r##"{"name": "Anna"}"##;
```

**Special features:**
- Uses raw string literals `r#"..."#` as heredoc replacement
- Supports multiple `#` as delimiters
- No variable interpolation

**Further reading:**
- [The Rust Book - Raw String Literals](https://doc.rust-lang.org/reference/tokens.html#raw-string-literals)

</TabItem>
</Tabs>


## 11.1.7. String Formatting

Formatting strings with placeholders and formatting specifications.

### Languages {#sprachen}

<Tabs availableTabs={['c', 'common-lisp', 'cpp', 'csharp', 'd', 'dart', 'go', 'java', 'javascript', 'julia', 'lua', 'matlab', 'mercury', 'nim', 'objective-c', 'object-pascal', 'ocaml', 'octave', 'perl', 'php', 'prolog', 'python', 'r', 'ruby', 'rust', 'scala', 'swift', 'typescript', 'vbnet', 'wolfram-language']}>
<TabItem value="c" label="C">

```c
// String Formatting (printf-style)
char name[] = "Anna";
int age = 25;
char message[100];
sprintf(message, "Name: %s, Alter: %d", name, age);

// With snprintf for safety
snprintf(message, sizeof(message), "Name: %s, Alter: %d", name, age);
```

**Special features:**
- Uses `printf`-style formatting
- Placeholders: `%s` (String), `%d` (Integer), `%f` (Float), etc.
- `sprintf` for string formatting, `snprintf` for safe variant

**Further reading:**
- [C Standard - printf Formatting](https://en.cppreference.com/w/c/io/fprintf)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// String Formatting
string name = "Anna";
int age = 25;
string message = string.Format("Name: {0}, Alter: {1}", name, age);

// With String Interpolation (since C# 6.0)
string message2 = $"Name: {name}, Alter: {age}";

// With formatting specifications
string formatted = string.Format("Alter: {0:D2}", age);
```

**Special features:**
- `string.Format` with placeholders `{0}`, `{1}`, etc.
- Supports formatting specifications like `{0:D2}`
- String interpolation (since C# 6.0) as modern alternative

**Further reading:**
- [Microsoft C# Documentation - String Formatting](https://learn.microsoft.com/en-us/dotnet/api/system.string.format)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// String Formatting (C++20 std::format)
#include <format>
std::string name = "Anna";
int age = 25;
std::string message = std::format("Name: {}, Alter: {}", name, age);

// With formatting specifications
std::string formatted = std::format("Alter: {:02d}", age);
```

**Special features:**
- Uses `std::format` (since C++20)
- Placeholders `{}` with automatic type detection
- Supports formatting specifications

**Further reading:**
- [C++ Reference - std::format](https://en.cppreference.com/w/cpp/utility/format/format)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// String Formatting
String name = "Anna";
int age = 25;
String message = "Name: $name, Alter: $age";

// With formatting specifications
String formatted = "Alter: ${age.toString().padLeft(2, '0')}";
```

**Special features:**
- String interpolation as primary method
- Formatting specifications via methods like `padLeft`, `toStringAsFixed`, etc.

**Further reading:**
- [Dart Documentation - String Formatting](https://dart.dev/guides/language/language-tour#strings)

</TabItem>
<TabItem value="go" label="Go">

```go
// String Formatting
name := "Anna"
age := 25
message := fmt.Sprintf("Name: %s, Alter: %d", name, age)

// With formatting specifications
formatted := fmt.Sprintf("Alter: %02d", age)
```

**Special features:**
- Uses `fmt.Sprintf` with `printf`-style formatting
- Placeholders: `%s` (String), `%d` (Integer), `%f` (Float), etc.
- Supports formatting specifications

**Further reading:**
- [Go Documentation - fmt Package](https://pkg.go.dev/fmt)

</TabItem>
<TabItem value="java" label="Java">

```java
// String Formatting
String name = "Anna";
int age = 25;
String message = String.format("Name: %s, Alter: %d", name, age);

// With formatting specifications
String formatted = String.format("Alter: %02d", age);
```

**Special features:**
- Uses `String.format` with `printf`-style formatting
- Placeholders: `%s` (String), `%d` (Integer), `%f` (Float), etc.
- Supports formatting specifications

**Further reading:**
- [Oracle Java Documentation - String Formatting](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html#format(java.lang.String,java.lang.Object...))

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// String Formatting (Template Literals)
const name = "Anna";
const age = 25;
const message = `Name: ${name}, Alter: ${age}`;

// With formatting specifications
const formatted = `Alter: ${age.toString().padStart(2, '0')}`;
```

**Special features:**
- Template literals as primary method
- Formatting specifications via methods like `padStart`, `toFixed`, etc.

**Further reading:**
- [MDN Web Docs - Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- String Formatting
local name = "Anna"
local age = 25
local message = string.format("Name: %s, Alter: %d", name, age)

-- With formatting specifications
local formatted = string.format("Alter: %02d", age)
```

**Special features:**
- Uses `string.format` with `printf`-style formatting
- Placeholders: `%s` (String), `%d` (Integer), `%f` (Float), etc.
- Supports formatting specifications

**Further reading:**
- [Lua Documentation - string.format](https://www.lua.org/manual/5.4/manual.html#pdf-string.format)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% String Formatting
name = "Anna";
age = 25;
message = sprintf("Name: %s, Alter: %d", name, age);

% With formatting specifications
formatted = sprintf("Alter: %02d", age);
```

**Special features:**
- Uses `sprintf` with `printf`-style formatting
- Placeholders: `%s` (String), `%d` (Integer), `%f` (Float), etc.
- Supports formatting specifications

**Further reading:**
- [MATLAB Documentation - sprintf](https://www.mathworks.com/help/matlab/ref/sprintf.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% String Formatting (string.format)
Name = "Anna",
Age = 25,
Message = string.format("Name: %s, Alter: %d", [s(Name), i(Age)]),

% With formatting specifications
Formatted = string.format("Alter: %02d", [i(Age)])
```

**Special features:**
- Uses `string.format` with printf-style formatting
- Placeholders: `%s` (String), `%d` (Integer), `%f` (Float), `%c` (Char)
- Arguments must be wrapped with type wrappers: `s(...)`, `i(...)`, `f(...)`, `c(...)`
- Type-safe formatting at runtime

**Further reading:**
- [Mercury Library Reference - string](https://mercurylang.org/information/doc-release/mercury_library/string.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* String Formatting *)
let name = "Anna" in
let age = 25 in
let message = Printf.sprintf "Name: %s, Alter: %d" name age

(* With formatting specifications *)
let formatted = Printf.sprintf "Alter: %02d" age
```

**Special features:**
- Uses `Printf.sprintf` with `printf`-style formatting
- Placeholders: `%s` (String), `%d` (Integer), `%f` (Float), etc.
- Supports formatting specifications

**Further reading:**
- [OCaml Documentation - Printf](https://v2.ocaml.org/api/Printf.html)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
% String Formatting
name = "Anna";
age = 25;
message = sprintf("Name: %s, Alter: %d", name, age);

% With formatting specifications
formatted = sprintf("Alter: %02d", age);
```

**Special features:**
- Uses `sprintf` with `printf`-style formatting
- Placeholders: `%s` (String), `%d` (Integer), `%f` (Float), etc.
- Supports formatting specifications

**Further reading:**
- [Octave Documentation - sprintf](https://octave.org/doc/v8.1.0/String-Conversion.html)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# String Formatting
my $name = "Anna";
my $age = 25;
my $message = sprintf("Name: %s, Alter: %d", $name, $age);

# With formatting specifications
my $formatted = sprintf("Alter: %02d", $age);
```

**Special features:**
- Uses `sprintf` with `printf`-style formatting
- Placeholders: `%s` (String), `%d` (Integer), `%f` (Float), etc.
- Supports formatting specifications

**Further reading:**
- [Perl Documentation - sprintf](https://perldoc.perl.org/functions/sprintf)

</TabItem>
<TabItem value="php" label="PHP">

```php
// String Formatting
$name = "Anna";
$age = 25;
$message = sprintf("Name: %s, Alter: %d", $name, $age);

// With formatting specifications
$formatted = sprintf("Alter: %02d", $age);
```

**Special features:**
- Uses `sprintf` with `printf`-style formatting
- Placeholders: `%s` (String), `%d` (Integer), `%f` (Float), etc.
- Supports formatting specifications

**Further reading:**
- [PHP Documentation - sprintf](https://www.php.net/manual/en/function.sprintf.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% String Formatting with format/2 (output) and format/3 (in variable)
format("Name: ~w, Alter: ~d~n", ["Anna", 25]).

% Store result in variable
format(atom(Message), "Name: ~w, Alter: ~d", ["Anna", 25]).

% Various format directives
format(atom(F1), "Float: ~4f", [3.14159]).   % "Float: 3.1416"
format(atom(F2), "Hex: ~16r", [255]).         % "Hex: ff"
```

**Special features:**
- `format/2` writes to the current output stream
- `format(atom(X), Format, Args)` stores the result in an atom
- Format directives: `~w` (write), `~a` (atom), `~d` (decimal), `~f` (Float), `~e` (exponential), `~r` (Radix)
- `~n` for line break

**Further reading:**
- [SWI-Prolog Documentation - format/2](https://www.swi-prolog.org/pldoc/doc_for?object=format/2)

</TabItem>
<TabItem value="python" label="Python">

```python
# String Formatting
name = "Anna"
age = 25
message = "Name: {}, Alter: {}".format(name, age)

# With format specifications
formatted = "Alter: {:02d}".format(age)

# With f-strings (since Python 3.6)
message2 = f"Name: {name}, Alter: {age}"
formatted2 = f"Alter: {age:02d}"
```

**Special features:**
- `str.format` with placeholders `{}`
- Supports format specifications like `{:02d}`
- f-strings (since Python 3.6) as a modern alternative

**Further reading:**
- [Python Documentation - String Formatting](https://docs.python.org/3/library/stdtypes.html#str.format)

</TabItem>
<TabItem value="r" label="R">

```r
# String Formatting
name <- "Anna"
age <- 25
message <- sprintf("Name: %s, Alter: %d", name, age)

# With format specifications
formatted <- sprintf("Alter: %02d", age)
```

**Special features:**
- Uses `sprintf` with `printf`-style formatting
- Placeholders: `%s` (String), `%d` (Integer), `%f` (Float), etc.
- Supports format specifications

**Further reading:**
- [R Documentation - sprintf](https://www.rdocumentation.org/packages/base/versions/3.6.2/topics/sprintf)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# String Formatting
name = "Anna"
age = 25
message = "Name: %s, Alter: %d" % [name, age]

# With format specifications
formatted = "Alter: %02d" % age

# With String Interpolation
message2 = "Name: #{name}, Alter: #{age}"
```

**Special features:**
- Uses `%` operator with `printf`-style formatting
- Placeholders: `%s` (String), `%d` (Integer), `%f` (Float), etc.
- String Interpolation as an alternative method

**Further reading:**
- [Ruby Documentation - String Formatting](https://ruby-doc.org/core-3.1.0/String.html#method-i-25)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// String Formatting
let name = "Anna";
let age = 25;
let message = format!("Name: {}, Alter: {}", name, age);

// With format specifications
let formatted = format!("Alter: {:02}", age);
```

**Special features:**
- Uses `format!` macro with placeholders `{}`
- Supports format specifications like `{:02}`
- Type-safe formatting

**Further reading:**
- [The Rust Book - format! Macro](https://doc.rust-lang.org/std/macro.format.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// String Formatting
val name = "Anna"
val age = 25
val message = "Name: %s, Alter: %d".format(name, age)

// With format specifications
val formatted = "Alter: %02d".format(age)

// With String Interpolation
val message2 = s"Name: $name, Alter: $age"
```

**Special features:**
- `String.format` with `printf`-style formatting
- Placeholders: `%s` (String), `%d` (Integer), `%f` (Float), etc.
- String Interpolation as an alternative method

**Further reading:**
- [Scala Documentation - String Formatting](https://www.scala-lang.org/api/2.13.10/scala/collection/StringOps.html#format(args:Any*):String)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// String Formatting
let name = "Anna"
let age = 25
let message = String(format: "Name: %@, Alter: %d", name, age)

// With format specifications
let formatted = String(format: "Alter: %02d", age)

// With String Interpolation
let message2 = "Name: \(name), Alter: \(age)"
```

**Special features:**
- `String(format:)` with `printf`-style formatting
- Placeholders: `%@` (Object), `%d` (Integer), `%f` (Float), etc.
- String Interpolation as an alternative method

**Further reading:**
- [Swift Documentation - String Formatting](https://developer.apple.com/documentation/foundation/nsstring/1407309-init)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// String Formatting (Template Literals)
const name = "Anna";
const age = 25;
const message = `Name: ${name}, Alter: ${age}`;

// With format specifications
const formatted = `Alter: ${age.toString().padStart(2, '0')}`;
```

**Special features:**
- Template Literals as the primary method
- Format specifications via methods like `padStart`, `toFixed`, etc.

**Further reading:**
- [TypeScript Handbook - Template Literals](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' String Formatting
Dim name As String = "Anna"
Dim age As Integer = 25
Dim message As String = String.Format("Name: {0}, Alter: {1}", name, age)

' With format specifications
Dim formatted As String = String.Format("Alter: {0:D2}", age)

' With String Interpolation (since VB.NET 14.0)
Dim message2 As String = $"Name: {name}, Alter: {age}"
```

**Special features:**
- `String.Format` with placeholders `{0}`, `{1}`, etc.
- Supports format specifications like `{0:D2}`
- String Interpolation (since VB.NET 14.0) as a modern alternative

**Further reading:**
- [Microsoft VB.NET Documentation - String Formatting](https://learn.microsoft.com/en-us/dotnet/api/system.string.format)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; format basics
(format nil "Name: ~a, Alter: ~a" "Alice" 30)
;; "Name: Alice, Alter: 30"

;; Number formatting
(format nil "Dezimal: ~d, Hex: ~x, Binär: ~b" 255 255 255)
;; "Dezimal: 255, Hex: FF, Binär: 11111111"

;; Floating point
(format nil "Float: ~f, Wissenschaftlich: ~e" 3.14159 3.14159)
;; "Float: 3.14159, Wissenschaftlich: 3.14159E+0"

;; Padding and alignment
(format nil "|~10a|~10d|" "Name" 42)
;; "|Name      |        42|"
```

**Special features:**
- `format` is extremely powerful with its own mini-language
- `~a` for aesthetic output, `~s` for read-bare output
- Supports iteration (`~{...~}`), conditions (`~[...~]`), pluralization (`~p`)
- `nil` as first argument returns string, `t` outputs to stdout

**Further reading:**
- [Common Lisp HyperSpec - format](http://www.lispworks.com/documentation/HyperSpec/Body/f_format.htm)

</TabItem>
<TabItem value="d" label="D">

```d
// String Formatting
// Required: import std.format;
// Required: import std.stdio;
string name = "Alice";
int age = 30;

// format (printf-like)
string s = format("Name: %s, Alter: %d", name, age);
writeln(s);  // "Name: Alice, Alter: 30"

// writefln (direct formatted output)
writefln("Pi ist %.2f", 3.14159);  // "Pi ist 3.14"

// Padding and alignment
writefln("|%10s|", "test");    // |      test|
writefln("|%-10s|", "test");   // |test      |
```

**Special features:**
- `std.format.format` for printf-like formatting
- `writef`/`writefln` for formatted output
- Supports `%s` (String), `%d` (Integer), `%f` (Float), `%x` (Hex) etc.
- Positional arguments and custom formatting via `toString`

**Further reading:**
- [D Phobos - std.format](https://dlang.org/phobos/std_format.html)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Required: using Printf
# String Interpolation (primary method)
name = "Welt"
println("Hallo, $name!")

# Printf-style Formatting
@printf("Pi ist ungefähr %.2f\n", 3.14159)
formatted = @sprintf("Wert: %05d", 42)  # "Wert: 00042"

# Number formatting
@printf("Hex: %x, Oct: %o, Sci: %e\n", 255, 255, 12345.6789)
```

**Special features:**
- String interpolation with `$` is the primary formatting method
- `@printf` and `@sprintf` from the `Printf` module for C-style formatting
- `@sprintf` returns a formatted string, `@printf` outputs directly

**Further reading:**
- [Julia Documentation - Printf](https://docs.julialang.org/en/v1/stdlib/Printf/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Required: import strformat
let name = "Alice"
let age = 30
let pi = 3.14159

# String Interpolation with fmt
echo fmt"{name} ist {age} Jahre alt"
echo fmt"Pi = {pi:.2f}"
echo fmt"Hex: {255:X}"

# strutils formatting
# Required: import strutils
echo align("hello", 10)      # "     hello"
echo alignLeft("hello", 10)  # "hello     "
```

**Special features:**
- `fmt` and `&` macros from `strformat` module
- Supports Python-like format specifiers
- `strutils` module for additional formatting functions

**Further reading:**
- [Nim Documentation - strformat](https://nim-lang.org/docs/strformat.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Required: uses SysUtils;
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

**Special features:**
- `Format` function with printf-like formatters
- `%s` for Strings, `%d` for Integer, `%f` for Float, `%x` for Hex
- Array of const for parameters
- No native string interpolation

**Further reading:**
- [Free Pascal Documentation - Format](https://www.freepascal.org/docs-html/rtl/sysutils/format.html)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
NSString *name = @"Alice";
int age = 30;
double score = 95.5;

// printf-Style Formatting
NSString *formatted = [NSString stringWithFormat:@"Name: %@, Alter: %d, Score: %.1f", name, age, score];

// Padding and alignment
NSString *padded = [NSString stringWithFormat:@"|%-10s|%10d|", "links", 42];
```

**Special features:**
- `stringWithFormat:` with printf-style format specifiers
- `%@` for Objective-C objects (calls `description`)
- `%d`, `%f`, `%s` for primitive types (C-style)
- `NSLog()` uses the same format

**Further reading:**
- [Apple Documentation - String Format Specifiers](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Strings/Articles/formatSpecifiers.html)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* String Formatting *)
result = StringForm["`1` + `2` = `3`", 1, 2, 3]
(* "1 + 2 = 3" *)

(* ToString with various formats *)
num = ToString[3.14159, NumberForm]
padded = IntegerString[42, 10, 5]  (* "00042" *)
```

**Special features:**
- `StringForm` for position-based formatting
- `ToString[expr, form]` for various display forms
- `NumberForm`, `ScientificForm`, `PaddedForm` for number formatting

**Further reading:**
- [Wolfram Language Documentation - StringForm](https://reference.wolfram.com/language/ref/StringForm.html)

</TabItem>
</Tabs>


## 11.1.8. Regular Expressions

Pattern matching and string manipulation with regular expressions.

### Languages {#sprachen}

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
        // Match found
    }
}
regfree(&regex);
```

**Special features:**
- Uses POSIX regex API
- Manual memory management required
- No built-in regex support in the standard library

**Further reading:**
- [C Standard - regex.h](https://en.cppreference.com/w/c/regex)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Regular Expressions
using System.Text.RegularExpressions;

string pattern = @"^[a-z]+$";
string input = "hello";
bool isMatch = Regex.IsMatch(input, pattern);

// With Match objects
Match match = Regex.Match(input, pattern);
if (match.Success) {
    string matched = match.Value;
}

// With Replace
string replaced = Regex.Replace(input, pattern, "replaced");
```

**Special features:**
- Uses `System.Text.RegularExpressions.Regex` class
- Raw String Literals (since C# 11) for better readability
- Supports Match, Replace, Split operations

**Further reading:**
- [Microsoft C# Documentation - Regular Expressions](https://learn.microsoft.com/en-us/dotnet/api/system.text.regularexpressions.regex)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Regular Expressions (since C++11)
#include <regex>
std::regex pattern("^[a-z]+$");
std::string input = "hello";
bool isMatch = std::regex_match(input, pattern);

// With Match objects
std::smatch match;
if (std::regex_search(input, match, pattern)) {
    std::string matched = match.str();
}

// With Replace
std::string replaced = std::regex_replace(input, pattern, "replaced");
```

**Special features:**
- Uses `<regex>` header (since C++11)
- Supports `regex_match`, `regex_search`, `regex_replace`
- ECMAScript syntax as standard

**Further reading:**
- [C++ Reference - std::regex](https://en.cppreference.com/w/cpp/regex)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Regular Expressions
import 'dart:core';

RegExp pattern = RegExp(r'^[a-z]+$');
String input = "hello";
bool isMatch = pattern.hasMatch(input);

// With Match objects
Match? match = pattern.firstMatch(input);
if (match != null) {
    String matched = match.group(0)!;
}

// With Replace
String replaced = input.replaceAll(pattern, "replaced");
```

**Special features:**
- Uses `RegExp` class
- Raw Strings for better readability
- Supports `hasMatch`, `firstMatch`, `allMatches`

**Further reading:**
- [Dart Documentation - Regular Expressions](https://dart.dev/guides/libraries/library-tour#regular-expressions)

</TabItem>
<TabItem value="go" label="Go">

```go
// Regular Expressions
import "regexp"

pattern := regexp.MustCompile(`^[a-z]+$`)
input := "hello"
isMatch := pattern.MatchString(input)

// With Match objects
match := pattern.FindString(input)
if match != "" {
    // Match found
}

// With Replace
replaced := pattern.ReplaceAllString(input, "replaced")
```

**Special features:**
- Uses `regexp` package
- Raw String Literals for better readability
- Supports `MatchString`, `FindString`, `ReplaceAllString`

**Further reading:**
- [Go Documentation - regexp Package](https://pkg.go.dev/regexp)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Regular Expressions
def pattern = ~/^[a-z]+$/
def input = "hello"
boolean isMatch = input ==~ pattern

// With Match objects
def matcher = input =~ pattern
if (matcher) {
    String matched = matcher[0]
}

// With Replace
String replaced = input.replaceAll(pattern, "replaced")
```

**Special features:**
- Uses `~` operator for pattern creation
- `==~` for exact match, `=~` for search
- Supports pattern matching operators

**Further reading:**
- [Groovy Documentation - Regular Expressions](https://groovy-lang.org/operators.html#_regex_operator)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Regular Expressions (Text.Regex)
import Text.Regex

pattern = mkRegex "^[a-z]+$"
input = "hello"
isMatch = matchTest pattern input

-- With Match objects
case matchRegex pattern input of
    Just matches -> head matches
    Nothing -> ""
```

**Special features:**
- Uses `Text.Regex` module
- Functional API
- Supports `matchTest`, `matchRegex`

**Further reading:**
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

// With Match objects
Matcher matcher = pattern.matcher(input);
if (matcher.find()) {
    String matched = matcher.group();
}

// With Replace
String replaced = input.replaceAll("^[a-z]+$", "replaced");
```

**Special features:**
- Uses `java.util.regex.Pattern` and `Matcher` classes
- Supports `matches()`, `find()`, `replaceAll()`
- Thread-safe Pattern objects

**Further reading:**
- [Oracle Java Documentation - Regular Expressions](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/regex/Pattern.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Regular Expressions
const pattern = /^[a-z]+$/;
const input = "hello";
const isMatch = pattern.test(input);

// With Match objects
const match = input.match(pattern);
if (match) {
    const matched = match[0];
}

// With Replace
const replaced = input.replace(pattern, "replaced");
```

**Special features:**
- Uses regex literals `/pattern/` or `RegExp` constructor
- Supports `test()`, `match()`, `replace()`
- ECMAScript syntax

**Further reading:**
- [MDN Web Docs - Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Regular Expressions
using Regex

pattern = r"^[a-z]+$"
input = "hello"
isMatch = occursin(pattern, input)

# With Match objects
match = match(pattern, input)
if match !== nothing
    matched = match.match
end

# With Replace
replaced = replace(input, pattern => "replaced")
```

**Special features:**
- Uses `Regex` type with `r"..."` syntax
- Supports `occursin()`, `match()`, `replace()`
- Supports Named Captures

**Further reading:**
- [Julia Documentation - Regular Expressions](https://docs.julialang.org/en/v1/manual/strings/#Regular-Expressions)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Regular Expressions
val pattern = Regex("^[a-z]+$")
val input = "hello"
val isMatch = pattern.matches(input)

// With Match objects
val match = pattern.find(input)
if (match != null) {
    val matched = match.value
}

// With Replace
val replaced = input.replace(pattern, "replaced")
```

**Special features:**
- Uses `Regex` class
- Supports `matches()`, `find()`, `replace()`
- Supports Raw Strings for better readability

**Further reading:**
- [Kotlin Documentation - Regular Expressions](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.text/-regex/)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Regular Expressions (Lua Patterns)
local pattern = "^[a-z]+$"
local input = "hello"
local isMatch = string.match(input, pattern) ~= nil

-- With Match objects
local matched = string.match(input, pattern)
if matched then
    -- Match found
end

-- With Replace
local replaced = string.gsub(input, pattern, "replaced")
```

**Special features:**
- Uses Lua Patterns (simplified regex syntax)
- Supports `string.match()`, `string.gsub()`
- Not fully compatible with standard regex

**Further reading:**
- [Lua Documentation - Patterns](https://www.lua.org/manual/5.4/manual.html#6.4.1)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Regular Expressions *)
open Str

let pattern = regexp "^[a-z]+$"
let input = "hello"
let isMatch = string_match pattern input 0

(* With Match objects *)
let matched = matched_string input

(* With Replace *)
let replaced = global_replace (regexp "^[a-z]+$") "replaced" input
```

**Special features:**
- Uses `Str` module
- Supports `string_match()`, `matched_string()`, `global_replace()`
- Functional API

**Further reading:**
- [OCaml Documentation - Str Module](https://v2.ocaml.org/api/Str.html)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Regular Expressions
my $pattern = qr/^[a-z]+$/;
my $input = "hello";
my $isMatch = $input =~ $pattern;

# With Match objects
if ($input =~ /^[a-z]+$/) {
    my $matched = $&;
}

# With Replace
my $replaced = $input =~ s/^[a-z]+$/replaced/r;
```

**Special features:**
- Regex is an integral part of the language
- Uses `=~` operator for matching
- Supports many advanced features

**Further reading:**
- [Perl Documentation - Regular Expressions](https://perldoc.perl.org/perlre)

</TabItem>
<TabItem value="php" label="PHP">

```php
// Regular Expressions
$pattern = "/^[a-z]+$/";
$input = "hello";
$isMatch = preg_match($pattern, $input);

// With Match objects
if (preg_match($pattern, $input, $matches)) {
    $matched = $matches[0];
}

// With Replace
$replaced = preg_replace($pattern, "replaced", $input);
```

**Special features:**
- Uses `preg_*` functions (PCRE)
- Supports `preg_match()`, `preg_replace()`, `preg_split()`
- PCRE syntax (Perl Compatible Regular Expressions)

**Further reading:**
- [PHP Documentation - Regular Expressions](https://www.php.net/manual/en/book.pcre.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Regular Expressions
% Required: use_module(library(pcre))

% Pattern Matching
re_match("^[a-z]+$", "hello").

% With match groups
re_matchsub("^([a-z]+)$", "hello", Sub, []).
% Sub = re_match{0:"hello", 1:"hello"}

% Replacing
re_replace("^[a-z]+$", "replaced", "hello", Result).
% Result = "replaced"
```

**Special features:**
- Uses `library(pcre)` for PCRE-based regular expressions
- `re_match/2` for simple pattern matching
- `re_matchsub/4` for capture groups as dict
- `re_replace/4` for replacements
- `re_split/3` for string splitting

**Further reading:**
- [SWI-Prolog Documentation - library(pcre)](https://www.swi-prolog.org/pldoc/man?section=pcre)

</TabItem>
<TabItem value="python" label="Python">

```python
# Regular Expressions
import re

pattern = re.compile(r"^[a-z]+$")
input = "hello"
isMatch = pattern.match(input) is not None

# With Match objects
match = pattern.match(input)
if match:
    matched = match.group()

# With Replace
replaced = re.sub(pattern, "replaced", input)
```

**Special features:**
- Uses `re` module
- Supports `match()`, `search()`, `sub()`, `findall()`
- Raw Strings for better readability

**Further reading:**
- [Python Documentation - Regular Expressions](https://docs.python.org/3/library/re.html)

</TabItem>
<TabItem value="r" label="R">

```r
# Regular Expressions
pattern <- "^[a-z]+$"
input <- "hello"
isMatch <- grepl(pattern, input)

# With Match objects
match <- regexpr(pattern, input)
if (match != -1) {
    matched <- regmatches(input, match)
}

# With Replace
replaced <- sub(pattern, "replaced", input)
```

**Special features:**
- Uses `grepl()`, `regexpr()`, `sub()`, `gsub()` functions
- Supports various regex engines (POSIX, PCRE)

**Further reading:**
- [R Documentation - Regular Expressions](https://www.rdocumentation.org/packages/base/versions/3.6.2/topics/regex)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Regular Expressions
pattern = /^[a-z]+$/
input = "hello"
isMatch = pattern.match?(input)

# With Match objects
match = pattern.match(input)
if match
    matched = match[0]
end

# With Replace
replaced = input.gsub(pattern, "replaced")
```

**Special features:**
- Uses regex literals `/pattern/` or `Regexp` class
- Supports `match()`, `match?()`, `gsub()`
- Supports Named Captures

**Further reading:**
- [Ruby Documentation - Regular Expressions](https://ruby-doc.org/core-3.1.0/Regexp.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Regular Expressions
use regex::Regex;

let pattern = Regex::new(r"^[a-z]+$").unwrap();
let input = "hello";
let isMatch = pattern.is_match(input);

// With Match objects
if let Some(matched) = pattern.find(input) {
    let matched_str = matched.as_str();
}

// With Replace
let replaced = pattern.replace(input, "replaced");
```

**Special features:**
- Uses `regex` crate (external)
- Supports `is_match()`, `find()`, `replace()`
- Type-safe API

**Further reading:**
- [Rust regex Crate Documentation](https://docs.rs/regex/latest/regex/)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Regular Expressions
import scala.util.matching.Regex

val pattern = new Regex("^[a-z]+$")
val input = "hello"
val isMatch = pattern.matches(input)

// With Match objects
val matchOption = pattern.findFirstIn(input)
matchOption.foreach { matched =>
    // Match found
}

// With Replace
val replaced = pattern.replaceAllIn(input, "replaced")
```

**Special features:**
- Uses `scala.util.matching.Regex` class
- Supports `matches()`, `findFirstIn()`, `replaceAllIn()`
- Functional API with Option types

**Further reading:**
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

// With Match objects
if let match = pattern.firstMatch(in: input, range: range) {
    let matched = String(input[Range(match.range, in: input)!])
}

// With Replace
let replaced = pattern.stringByReplacingMatches(in: input, range: range, withTemplate: "replaced")
```

**Special features:**
- Uses `NSRegularExpression` class (Foundation)
- Supports `firstMatch()`, `stringByReplacingMatches()`
- Objective-C-like API

**Further reading:**
- [Swift Documentation - NSRegularExpression](https://developer.apple.com/documentation/foundation/nsregularexpression)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Regular Expressions
const pattern = /^[a-z]+$/;
const input = "hello";
const isMatch = pattern.test(input);

// With Match objects
const match = input.match(pattern);
if (match) {
    const matched = match[0];
}

// With Replace
const replaced = input.replace(pattern, "replaced");
```

**Special features:**
- Uses regex literals `/pattern/` or `RegExp` constructor
- Supports `test()`, `match()`, `replace()`
- ECMAScript syntax

**Further reading:**
- [MDN Web Docs - Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Regular Expressions
Imports System.Text.RegularExpressions

Dim pattern As New Regex("^[a-z]+$")
Dim input As String = "hello"
Dim isMatch As Boolean = pattern.IsMatch(input)

' With Match objects
Dim match As Match = pattern.Match(input)
If match.Success Then
    Dim matched As String = match.Value
End If

' With Replace
Dim replaced As String = pattern.Replace(input, "replaced")
```

**Special features:**
- Uses `System.Text.RegularExpressions.Regex` class
- Supports `IsMatch()`, `Match()`, `Replace()`
- .NET regex engine

**Further reading:**
- [Microsoft VB.NET Documentation - Regular Expressions](https://learn.microsoft.com/en-us/dotnet/api/system.text.regularexpressions.regex)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Regex literal
(def pattern #"\d+")

;; Search
(re-find #"\d+" "abc123def")   ; "123"
(re-matches #"\d+" "123")       ; "123"
(re-matches #"\d+" "abc123")    ; nil

;; All matches
(re-seq #"\d+" "a1b2c3")        ; ("1" "2" "3")

;; Groups
(re-find #"(\w+)@(\w+)" "user@host")
;; ["user@host" "user" "host"]

;; Replacing
(clojure.string/replace "Hello World" #"\w+" "X")  ; "X X"
```

**Special features:**
- `#""` literal syntax for compiled regex patterns
- Based on `java.util.regex.Pattern`
- `re-find`, `re-matches`, `re-seq` for search
- `clojure.string/replace` for replacements

**Further reading:**
- [Clojure Documentation - Regex](https://clojure.org/reference/other_functions#regex)

</TabItem>
<TabItem value="d" label="D">

```d
// Regular Expressions
// Required: import std.regex;
// Required: import std.stdio;
string text = "Kontakt: alice@example.com oder bob@test.de";

// Pattern Matching
auto emailPattern = regex(r"[\w.]+@[\w.]+\.\w+");
auto matches = matchAll(text, emailPattern);
foreach (m; matches) {
    writeln("Gefunden: ", m.hit);
}

// Replacing
string result = replaceAll(text, emailPattern, "[EMAIL]");
writeln(result);

// Compile-Time Regex
auto ctPattern = ctRegex!r"\d+";
auto numMatch = matchFirst("Alter: 30", ctPattern);
if (numMatch) {
    writeln("Zahl: ", numMatch.hit);  // "30"
}
```

**Special features:**
- `std.regex` for runtime regex
- `ctRegex` for compile-time optimized regex
- Supports `matchFirst`, `matchAll`, `replaceAll`, `replaceFirst`
- Compile-time regex offers better performance

**Further reading:**
- [D Phobos - std.regex](https://dlang.org/phobos/std_regex.html)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% Regular Expressions
str = 'Die Temperatur ist 23.5 Grad';
tokens = regexp(str, '(\d+\.?\d*)', 'tokens');
% tokens = {{'23.5'}}

% Replacing
result = regexprep('Hello World', 'World', 'MATLAB');
% result = 'Hello MATLAB'

% Case-insensitive
match = regexpi('Hello', '^hello$', 'match');
```

**Special features:**
- `regexp` for pattern matching
- `regexpi` for case-insensitive search
- `regexprep` for search and replace
- PCRE-compatible regex syntax

**Further reading:**
- [MATLAB Documentation - Regular Expressions](https://www.mathworks.com/help/matlab/matlab_prog/regular-expressions.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Required: import re
let text = "Hello, World! 42"

# Pattern Matching
if text =~ re"(\w+), (\w+)":
  echo matches[0]  # "Hello"
  echo matches[1]  # "World"

# Search and replace
echo text.replace(re"\d+", "NUM")  # "Hello, World! NUM"

# Find all matches
for match in text.findAll(re"\w+"):
  echo match
```

**Special features:**
- `re` module for PCRE-based regex
- `=~` operator for pattern matching
- `nre` module as alternative implementation
- Compile-time regex with `re"pattern"` syntax

**Further reading:**
- [Nim Documentation - re Module](https://nim-lang.org/docs/re.html)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// NSRegularExpression (since iOS 4.0 / OS X 10.7)
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

**Special features:**
- `NSRegularExpression` since iOS 4.0 / OS X 10.7
- ICU Regular Expression Syntax
- Supports Named Capture Groups, Lookahead, Lookbehind
- `NSPredicate` as alternative for simple pattern matches

**Further reading:**
- [Apple Documentation - NSRegularExpression](https://developer.apple.com/documentation/foundation/nsregularexpression)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
% Regular Expressions
str = "Heute ist der 15.02.2026";
[tok] = regexp(str, '(\d{2})\.(\d{2})\.(\d{4})', 'tokens');

% Search and replace
result = regexprep("Hallo Welt", 'Welt', 'Octave');
```

**Special features:**
- `regexp` for search with regular expressions
- `regexpi` for case-insensitive search
- `regexprep` for search and replace
- PCRE-compatible syntax

**Further reading:**
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

**Special features:**
- `RegularExpression["pattern"]` for regex patterns
- `StringMatchQ`, `StringCases`, `StringReplace` support regex
- Wolfram Language also has its own string patterns as an alternative

**Further reading:**
- [Wolfram Language Documentation - RegularExpression](https://reference.wolfram.com/language/ref/RegularExpression.html)

</TabItem>
</Tabs>


## 11.1.9. Pattern Matching on Strings

Structural pattern matching for string processing and analysis.

### Languages {#sprachen}

<Tabs availableTabs={['elixir', 'erlang', 'fsharp', 'gleam', 'haskell', 'lean4', 'mercury', 'ocaml', 'prolog', 'rust', 'scala', 'swift', 'wolfram-language']}>
<TabItem value="elixir" label="Elixir">

```elixir
# Pattern Matching on Strings
case "hello" do
  "hello" -> "matched hello"
  "world" -> "matched world"
  _ -> "no match"
end

# With String Patterns
name = "Anna"
greeting = case name do
  "Anna" -> "Hallo Anna"
  "Bob" -> "Hallo Bob"
  other -> "Hallo #{other}"
end
```

**Special features:**
- Uses `case` for pattern matching
- Supports direct string matches
- Supports wildcards with `_`

**Further reading:**
- [Elixir Documentation - Pattern Matching](https://elixir-lang.org/getting-started/pattern-matching.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% Pattern Matching on Strings
case "hello" of
    "hello" -> "matched hello";
    "world" -> "matched world";
    _ -> "no match"
end.

% With function clauses
greet("Anna") -> "Hallo Anna";
greet("Bob") -> "Hallo Bob";
greet(Other) -> "Hallo " ++ Other.
```

**Special features:**
- Uses `case` for pattern matching
- Supports direct string matches
- Supports pattern matching in function clauses

**Further reading:**
- [Erlang Documentation - Pattern Matching](https://www.erlang.org/doc/reference_manual/patterns.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Pattern Matching on Strings
let greeting = 
    match "Anna" with
    | "Anna" -> "Hallo Anna"
    | "Bob" -> "Hallo Bob"
    | name -> $"Hallo {name}"

// With when clauses
let result = 
    match "hello" with
    | s when s.Length > 5 -> "long string"
    | s when s.StartsWith("h") -> "starts with h"
    | _ -> "other"
```

**Special features:**
- Uses `match` for pattern matching
- Supports direct string matches
- Supports `when` clauses for additional conditions

**Further reading:**
- [F# Documentation - Pattern Matching](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/pattern-matching)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// Pattern Matching on Strings
let greeting = case "Anna" {
  "Anna" -> "Hallo Anna"
  "Bob" -> "Hallo Bob"
  name -> "Hallo " <> name
}

// With Guards
let result = case "hello" {
  s if string.length(s) > 5 -> "long string"
  s if string.starts_with(s, "h") -> "starts with h"
  _ -> "other"
}
```

**Special features:**
- Uses `case` for pattern matching
- Supports direct string matches
- Supports guards with `if` for additional conditions

**Further reading:**
- [Gleam Documentation - Pattern Matching](https://gleam.run/documentation/tour/pattern-matching/)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Pattern Matching on Strings
greeting :: String -> String
greeting "Anna" = "Hallo Anna"
greeting "Bob" = "Hallo Bob"
greeting name = "Hallo " ++ name

-- With case
result = case "hello" of
    "hello" -> "matched hello"
    "world" -> "matched world"
    _ -> "no match"
```

**Special features:**
- Uses pattern matching in function definitions
- Supports direct string matches
- Supports `case` for pattern matching

**Further reading:**
- [Haskell Documentation - Pattern Matching](https://www.haskell.org/tutorial/patterns.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Pattern Matching on Strings
def greeting (name : String) : String :=
  match name with
  | "Anna" => "Hallo Anna"
  | "Bob" => "Hallo Bob"
  | other => s!"Hallo {other}"

-- With guards via if
def classify (s : String) : String :=
  if s.length > 5 then "langer String"
  else if s.startsWith "h" then "starts with h"
  else "sonstiges"
```

**Special features:**
- `match` expression for pattern matching on string literals
- Direct string literal matches are supported
- Wildcard `_` or variable binding for catch-all
- Guards via `if` conditions (no `when` clause in match)

**Further reading:**
- [Lean 4 Documentation - Pattern Matching](https://lean-lang.org/lean4/doc/patternmatching.html)
- [Functional Programming in Lean](https://lean-lang.org/functional_programming_in_lean/)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Pattern Matching on Strings (function clauses)
:- func greeting(string) = string.
greeting("Anna") = "Hallo Anna".
greeting("Bob") = "Hallo Bob".
greeting(Name) = "Hallo " ++ Name.

% With if-then-else
:- func classify(string) = string.
classify(S) =
    ( if S = "hello" then "matched hello"
    else if S = "world" then "matched world"
    else "no match"
    ).
```

**Special features:**
- Pattern matching on string literals in function clauses
- Multiple clauses are checked in order
- Catch-all via an unbound variable (e.g. `Name`)
- Alternatively `if-then-else` chains for string comparisons
- Determinism is checked by the compiler

**Further reading:**
- [Mercury Language Reference - Clauses](https://mercurylang.org/information/doc-release/mercury_ref/Clauses-and-goals.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Pattern Matching on Strings *)
let greeting = function
  | "Anna" -> "Hallo Anna"
  | "Bob" -> "Hallo Bob"
  | name -> "Hallo " ^ name

(* With match *)
let result = match "hello" with
  | "hello" -> "matched hello"
  | "world" -> "matched world"
  | _ -> "no match"
```

**Special features:**
- Uses `match` or `function` for pattern matching
- Supports direct string matches
- Supports wildcards with `_`

**Further reading:**
- [OCaml Documentation - Pattern Matching](https://v2.ocaml.org/manual/patterns.html)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Pattern Matching on Strings (unification in clause heads)
greeting("Anna", "Hallo Anna").
greeting("Bob", "Hallo Bob").
greeting(Name, Greeting) :-
    format(atom(Greeting), "Hallo ~w", [Name]).

% Query
?- greeting("Anna", G).
% G = "Hallo Anna"

?- greeting("Charlie", G).
% G = "Hallo Charlie"
```

**Special features:**
- Pattern matching via unification is the basic principle of Prolog
- String literals can be matched directly in clause heads
- Multiple clauses are tried in order (first-match semantics)
- Variables are automatically bound to the matching value

**Further reading:**
- [SWI-Prolog Documentation - Strings](https://www.swi-prolog.org/pldoc/man?section=string)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Pattern Matching on Strings
let greeting = match "Anna" {
    "Anna" => "Hallo Anna",
    "Bob" => "Hallo Bob",
    name => &format!("Hallo {}", name),
};

// With if let
if let "hello" = "hello" {
    // Match found
}

// With match and guards
let result = match "hello" {
    s if s.len() > 5 => "long string",
    s if s.starts_with("h") => "starts with h",
    _ => "other",
};
```

**Special features:**
- Uses `match` for pattern matching
- Supports direct string matches
- Supports guards with `if` for additional conditions
- Supports `if let` for simple matches

**Further reading:**
- [The Rust Book - Pattern Matching](https://doc.rust-lang.org/book/ch18-00-patterns.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Pattern Matching on Strings
val greeting = "Anna" match {
  case "Anna" => "Hallo Anna"
  case "Bob" => "Hallo Bob"
  case name => s"Hallo $name"
}

// With Guards
val result = "hello" match {
  case s if s.length > 5 => "long string"
  case s if s.startsWith("h") => "starts with h"
  case _ => "other"
}
```

**Special features:**
- Uses `match` for pattern matching
- Supports direct string matches
- Supports guards with `if` for additional conditions

**Further reading:**
- [Scala Documentation - Pattern Matching](https://docs.scala-lang.org/tour/pattern-matching.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Pattern Matching on Strings
let greeting = switch "Anna" {
case "Anna":
    "Hallo Anna"
case "Bob":
    "Hallo Bob"
default:
    "Hallo \("Anna")"
}

// With where clauses
let result = switch "hello" {
case let s where s.count > 5:
    "long string"
case let s where s.hasPrefix("h"):
    "starts with h"
default:
    "other"
}
```

**Special features:**
- Uses `switch` for pattern matching (since Swift 5.9)
- Supports direct string matches
- Supports `where` clauses for additional conditions

**Further reading:**
- [Swift Documentation - Pattern Matching](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/controlflow/#Switch)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Pattern Matching on Strings *)
str = "Hello World";
StringMatchQ[str, "Hello" ~~ __]     (* True *)
StringCases[str, WordCharacter ..]   (* {"Hello", "World"} *)
StringReplace["abc123", DigitCharacter -> "X"]  (* "abcXXX" *)
```

**Special features:**
- Own string pattern syntax: `~~` for concatenation, `__` for one or more characters
- `WordCharacter`, `DigitCharacter`, `LetterCharacter` as predefined patterns
- Combinable with `RegularExpression` for more complex patterns

**Further reading:**
- [Wolfram Language Documentation - String Patterns](https://reference.wolfram.com/language/guide/StringPatterns.html)

</TabItem>
</Tabs>

