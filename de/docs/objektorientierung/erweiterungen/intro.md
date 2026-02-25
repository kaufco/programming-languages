---
slug: /objektorientierung/erweiterungen
title: 8.6. Erweiterungen
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import FilteredTabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 8.6. Erweiterungen

Erweiterungen bestehender Typen.

## 8.6.1. Extension Methods

Methoden, die zu bestehenden Typen hinzugefügt werden können, ohne den ursprünglichen Typ zu modifizieren.

### Sprachen {#sprachen}

<FilteredTabs availableTabs={['csharp', 'dart', 'fsharp', 'groovy', 'kotlin', 'nim', 'objective-c', 'rust', 'scala', 'swift', 'typescript']} yellowTabs={['lean4']} orangeTabs={['php']}>
<TabItem value="csharp" label="C#">

```csharp
// Extension Methods: static class with this parameter
public static class StringExtensions {
    public static string Reverse(this string str) {
        char[] chars = str.ToCharArray();
        Array.Reverse(chars);
        return new string(chars);
    }
}

string text = "Hello";
string reversed = text.Reverse(); // "olleH"
```

**Besonderheiten:**
- Static Klasse mit `this`-Parameter
- Erste Parameter mit `this`-Modifier
- Muss in Namespace definiert werden
- Compile-time Feature

**Weiterführende Links:**
- [Microsoft C# Documentation - Extension Methods](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/extension-methods)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Extension Methods: extension keyword
extension StringExtensions on String {
  String reverse() {
    return split('').reversed.join('');
  }
}

String text = 'Hello';
String reversed = text.reverse(); // 'olleH'
```

**Besonderheiten:**
- `extension`-Keyword für Extension Methods
- `on Type` für Zieltyp
- Kann auf beliebige Typen angewendet werden
- Compile-time Feature

**Weiterführende Links:**
- [Dart Documentation - Extension Methods](https://dart.dev/guides/language/extension-methods)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Extension Methods: type extensions
type System.String with
    member this.Reverse() =
        this.ToCharArray()
        |> Array.rev
        |> System.String

let text = "Hello"
let reversed = text.Reverse() // "olleH"
```

**Besonderheiten:**
- `type Type with` für Type Extensions
- `member` für Extension Methods
- Kann auf beliebige Typen angewendet werden

**Weiterführende Links:**
- [F# Documentation - Type Extensions](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/type-extensions)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Extension Methods: extension methods via categories
class StringExtensions {
    static String reverse(String self) {
        return self.reverse()
    }
}

use(StringExtensions) {
    String text = "Hello"
    String reversed = text.reverse() // "olleH"
}
```

**Besonderheiten:**
- Categories für Extension Methods
- `use`-Block für temporäre Extensions
- Runtime Feature

**Weiterführende Links:**
- [Groovy Documentation - Extension Methods](https://groovy-lang.org/metaprogramming.html#_extension_modules)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Extension Methods: extension functions
fun String.reverse(): String {
    return this.reversed()
}

val text = "Hello"
val reversed = text.reverse() // "olleH"
```

**Besonderheiten:**
- Extension Functions mit Receiver-Type
- `Type.functionName()` Syntax
- Kann auf beliebige Typen angewendet werden
- Compile-time Feature

**Weiterführende Links:**
- [Kotlin Documentation - Extension Functions](https://kotlinlang.org/docs/extensions.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Extension Methods via Namespace-Funktionen mit Dot-Notation
def String.reverse (s : String) : String :=
  s.data.reverse.asString

def String.wordCount (s : String) : Nat :=
  (s.splitOn " ").filter (· ≠ "") |>.length

-- Verwendung über Dot-Notation
let text := "Hello"
let reversed := text.reverse    -- "olleH"
let count := "Hello world".wordCount  -- 2
```

**Besonderheiten:**
- Funktionen im Namespace eines Typs werden zu Extension Methods
- `Type.functionName` Syntax in der Definition
- Aufruf über Dot-Notation auf Werten des Typs
- Compile-time Feature (Namespace-Auflösung)

**Weiterführende Links:**
- [Functional Programming in Lean - Structures](https://lean-lang.org/functional_programming_in_lean/getting-to-know/structures.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Extension Methods: method extensions
type String = distinct string

method reverse(s: String): string {.base.} =
  result = ""
  for i in countdown(s.string.len - 1, 0):
    result.add(s.string[i])

var text = String("Hello")
var reversed = text.reverse() # "olleH"
```

**Besonderheiten:**
- Methods können auf beliebige Typen erweitert werden
- `distinct` Types für Type Extensions
- Runtime Feature

**Weiterführende Links:**
- [Nim Manual - Methods](https://nim-lang.org/docs/manual.html#methods)

</TabItem>
<TabItem value="php" label="PHP">

```php
// Extension Methods: Traits als Workaround
trait StringExtensions {
    public function reverse(): string {
        return strrev($this->value);
    }
}

class ExtendedString {
    use StringExtensions;

    public function __construct(private string $value) {}

    public function __toString(): string {
        return $this->value;
    }
}

$text = new ExtendedString("Hello");
$reversed = $text->reverse(); // "olleH"
```

**Besonderheiten:**
- Keine native Extension Methods
- Traits als Workaround
- Wrapper-Klassen erforderlich

**Weiterführende Links:**
- [PHP Documentation - Traits](https://www.php.net/manual/en/language.oop5.traits.php)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Extension Methods: trait implementations
trait StringExt {
    fn reverse(&self) -> String;
}

impl StringExt for String {
    fn reverse(&self) -> String {
        self.chars().rev().collect()
    }
}

let text = String::from("Hello");
let reversed = text.reverse(); // "olleH"
```

**Besonderheiten:**
- Trait Implementations für Extension Methods
- Kann auf beliebige Typen angewendet werden
- Compile-time Feature

**Weiterführende Links:**
- [Rust Book - Traits](https://doc.rust-lang.org/book/ch10-02-traits.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Extension Methods: implicit classes
implicit class StringExtensions(val s: String) extends AnyVal {
  def reverse: String = s.reverse
}

val text = "Hello"
val reversed = text.reverse // "olleH"
```

**Besonderheiten:**
- Implicit Classes für Extension Methods
- `extends AnyVal` für Value Classes
- Compile-time Feature

**Weiterführende Links:**
- [Scala Documentation - Implicit Classes](https://docs.scala-lang.org/overviews/core/implicit-classes.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Extension Methods: extensions
extension String {
    func reverse() -> String {
        return String(self.reversed())
    }
}

let text = "Hello"
let reversed = text.reverse() // "olleH"
```

**Besonderheiten:**
- `extension`-Keyword für Extension Methods
- Kann auf beliebige Typen angewendet werden
- Kann auch Properties, Subscripts, etc. hinzufügen

**Weiterführende Links:**
- [Swift Documentation - Extensions](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/extensions/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Extension Methods: interface augmentation
interface String {
    reverse(): string;
}

String.prototype.reverse = function(): string {
    return this.split('').reverse().join('');
};

const text = "Hello";
const reversed = text.reverse(); // "olleH"
```

**Besonderheiten:**
- Interface Augmentation für Extension Methods
- Prototype Manipulation
- Runtime Feature
- Type-safe durch TypeScript

**Weiterführende Links:**
- [TypeScript Handbook - Declaration Merging](https://www.typescriptlang.org/docs/handbook/declaration-merging.html)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Category: Extension Methods für bestehende Klassen
@interface NSString (Utilities)
- (NSString *)reverse;
- (BOOL)isPalindrome;
@end

@implementation NSString (Utilities)
- (NSString *)reverse {
    NSMutableString *reversed = [NSMutableString string];
    for (NSInteger i = self.length - 1; i >= 0; i--) {
        [reversed appendFormat:@"%C", [self characterAtIndex:i]];
    }
    return reversed;
}

- (BOOL)isPalindrome {
    return [self isEqualToString:[self reverse]];
}
@end

// Verwendung
NSString *text = @"racecar";
BOOL result = [text isPalindrome]; // YES
```

**Besonderheiten:**
- Categories fügen Methoden zu bestehenden Klassen hinzu
- Funktioniert auch für Framework-Klassen (NSString, NSArray, etc.)
- Keine neuen Instance Variables möglich (nur Methoden)
- Categories können Methoden überschreiben (nicht empfohlen)

**Weiterführende Links:**
- [Apple Documentation - Categories](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/CustomizingExistingClasses/CustomizingExistingClasses.html)

</TabItem>
</FilteredTabs>


## 8.6.2. Extension Properties

Properties, die zu bestehenden Typen hinzugefügt werden können, ohne den ursprünglichen Typ zu modifizieren.

### Sprachen {#sprachen}

<FilteredTabs availableTabs={['dart', 'fsharp', 'kotlin', 'swift', 'typescript']} orangeTabs={['csharp']}>
<TabItem value="csharp" label="C#">

```csharp
// Extension Properties: nicht direkt unterstützt
// Workaround: Extension Methods als Properties
public static class StringExtensions {
    public static int WordCount(this string str) {
        return str.Split(new char[] { ' ', '.', '?' }, 
                        StringSplitOptions.RemoveEmptyEntries).Length;
    }
}

string text = "Hello world";
int count = text.WordCount(); // 2
```

**Besonderheiten:**
- Keine direkte Unterstützung für Extension Properties
- Extension Methods können als Properties verwendet werden
- Compile-time Feature

**Weiterführende Links:**
- [Microsoft C# Documentation - Extension Methods](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/extension-methods)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Extension Properties: extension keyword
extension StringExtensions on String {
  int get wordCount {
    return split(RegExp(r'\s+')).where((s) => s.isNotEmpty).length;
  }
  
  String get reversed {
    return split('').reversed.join('');
  }
}

String text = 'Hello world';
int count = text.wordCount; // 2
String reversed = text.reversed; // 'dlrow olleH'
```

**Besonderheiten:**
- `extension`-Keyword für Extension Properties
- `get` für getter-only Properties
- Kann auf beliebige Typen angewendet werden
- Compile-time Feature

**Weiterführende Links:**
- [Dart Documentation - Extension Methods](https://dart.dev/guides/language/extension-methods)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Extension Properties: type extensions
type System.String with
    member this.WordCount =
        this.Split([|' '; '.'; '?'|], 
                  System.StringSplitOptions.RemoveEmptyEntries).Length
    
    member this.Reversed =
        this.ToCharArray()
        |> Array.rev
        |> System.String

let text = "Hello world"
let count = text.WordCount // 2
let reversed = text.Reversed // "dlrow olleH"
```

**Besonderheiten:**
- `type Type with` für Type Extensions
- `member` für Extension Properties
- Kann auf beliebige Typen angewendet werden

**Weiterführende Links:**
- [F# Documentation - Type Extensions](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/type-extensions)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Extension Properties: extension properties
val String.wordCount: Int
    get() = this.split(Regex("\\s+")).count { it.isNotEmpty() }

val String.reversed: String
    get() = this.reversed()

val text = "Hello world"
val count = text.wordCount // 2
val reversed = text.reversed // "dlrow olleH"
```

**Besonderheiten:**
- Extension Properties mit Receiver-Type
- `Type.propertyName` Syntax
- `get()` für getter-only Properties
- Compile-time Feature

**Weiterführende Links:**
- [Kotlin Documentation - Extension Properties](https://kotlinlang.org/docs/extensions.html#extension-properties)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Extension Properties: extensions
extension String {
    var wordCount: Int {
        return self.split(separator: " ").count
    }
    
    var reversed: String {
        return String(self.reversed())
    }
}

let text = "Hello world"
let count = text.wordCount // 2
let reversed = text.reversed // "dlrow olleH"
```

**Besonderheiten:**
- `extension`-Keyword für Extension Properties
- `var` für computed Properties
- Kann auf beliebige Typen angewendet werden
- Getter und Setter möglich

**Weiterführende Links:**
- [Swift Documentation - Extensions](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/extensions/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Extension Properties: interface augmentation
interface String {
    wordCount: number;
    reversed: string;
}

Object.defineProperty(String.prototype, 'wordCount', {
    get: function(): number {
        return this.split(/\s+/).filter((s: string) => s.length > 0).length;
    }
});

Object.defineProperty(String.prototype, 'reversed', {
    get: function(): string {
        return this.split('').reverse().join('');
    }
});

const text = "Hello world";
const count = text.wordCount; // 2
const reversed = text.reversed; // "dlrow olleH"
```

**Besonderheiten:**
- Interface Augmentation für Extension Properties
- `Object.defineProperty` für Property-Definition
- Runtime Feature
- Type-safe durch TypeScript

**Weiterführende Links:**
- [TypeScript Handbook - Declaration Merging](https://www.typescriptlang.org/docs/handbook/declaration-merging.html)

</TabItem>
</FilteredTabs>

