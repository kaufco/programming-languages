---
slug: /operatoren/spezielle-operatoren
title: 5.3. Spezielle Operatoren
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 5.3. Spezielle Operatoren

Spezielle Operatoren für spezifische Anwendungsfälle.

## 5.3.1. Null-Safe Operators

Operatoren, die sicher mit null/nil-Werten umgehen, ohne Exceptions zu werfen. Ermöglichen es, auf Member von potenziell null-Objekten zuzugreifen, ohne explizite Null-Checks.

### Sprachen {#sprachen}

<Tabs availableTabs={['csharp', 'dart', 'groovy', 'javascript', 'kotlin', 'php', 'swift', 'typescript', 'zig']}>
<TabItem value="csharp" label="C#">

```csharp
// Null-Safe Operators (seit C# 6.0)
string text = null;
int? length = text?.Length;  // Null-Safe Member-Zugriff: null wenn text null ist

string[] items = null;
string first = items?[0];    // Null-Safe Index-Zugriff: null wenn items null ist

// Null-Safe Methoden-Aufruf
string result = text?.ToUpper();  // null wenn text null ist
```

**Besonderheiten:**
- `?.` für Null-Safe Member-Zugriff (seit C# 6.0)
- `?[]` für Null-Safe Index-Zugriff
- Gibt `null` zurück, wenn der linke Operand `null` ist

**Weiterführende Links:**
- [Microsoft C# Documentation - Null-conditional operators](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/member-access-operators#null-conditional-operators--and-)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Null-Safe Operators
String? text = null;
int? length = text?.length;  // Null-Safe Member-Zugriff: null wenn text null ist

List<String>? items = null;
String? first = items?[0];  // Null-Safe Index-Zugriff: null wenn items null ist

// Null-Safe Methoden-Aufruf
String? result = text?.toUpperCase();  // null wenn text null ist
```

**Besonderheiten:**
- `?.` für Null-Safe Member-Zugriff
- `?[]` für Null-Safe Index-Zugriff
- Gibt `null` zurück, wenn der linke Operand `null` ist

**Weiterführende Links:**
- [Dart Language Tour - Null safety](https://dart.dev/guides/language/language-tour#null-safety)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Null-Safe Operators
String text = null
Integer length = text?.length()  // Null-Safe Methoden-Aufruf: null wenn text null ist

List items = null
def first = items?[0]  // Null-Safe Index-Zugriff: null wenn items null ist
```

**Besonderheiten:**
- `?.` für Null-Safe Methoden-Aufruf
- `?[]` für Null-Safe Index-Zugriff
- Gibt `null` zurück, wenn der linke Operand `null` ist

**Weiterführende Links:**
- [Groovy Documentation - Safe navigation operator](https://groovy-lang.org/operators.html#_safe_navigation_operator)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Null-Safe Operators
val text: String? = null
val length: Int? = text?.length  // Null-Safe Member-Zugriff: null wenn text null ist

val items: List<String>? = null
val first: String? = items?.get(0)  // Null-Safe Methoden-Aufruf: null wenn items null ist

// Null-Safe Index-Zugriff
val firstItem: String? = items?[0]  // null wenn items null ist
```

**Besonderheiten:**
- `?.` für Null-Safe Member-Zugriff
- `?[]` für Null-Safe Index-Zugriff
- Gibt `null` zurück, wenn der linke Operand `null` ist

**Weiterführende Links:**
- [Kotlin Documentation - Safe calls](https://kotlinlang.org/docs/null-safety.html#safe-calls)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Null-Safe Operators (Optional Chaining)
var text: String? = nil
var length: Int? = text?.count  // Null-Safe Member-Zugriff: nil wenn text nil ist

var items: [String]? = nil
var first: String? = items?[0]  // Null-Safe Index-Zugriff: nil wenn items nil ist

// Null-Safe Methoden-Aufruf
var result: String? = text?.uppercased()  // nil wenn text nil ist
```

**Besonderheiten:**
- `?.` für Optional Chaining (Null-Safe Zugriff)
- `?[]` für Null-Safe Index-Zugriff
- Gibt `nil` zurück, wenn der linke Operand `nil` ist

**Weiterführende Links:**
- [Swift Documentation - Optional Chaining](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/optionalchaining/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Null-Safe Operators (Optional Chaining, seit TypeScript 3.7)
let text: string | null = null;
let length: number | undefined = text?.length;  // Null-Safe Member-Zugriff: undefined wenn text null ist

let items: string[] | null = null;
let first: string | undefined = items?.[0];  // Null-Safe Index-Zugriff: undefined wenn items null ist

// Null-Safe Methoden-Aufruf
let result: string | undefined = text?.toUpperCase();  // undefined wenn text null ist
```

**Besonderheiten:**
- `?.` für Optional Chaining (seit TypeScript 3.7)
- `?.[]` für Null-Safe Index-Zugriff
- Gibt `undefined` zurück, wenn der linke Operand `null` oder `undefined` ist

**Weiterführende Links:**
- [TypeScript Handbook - Optional Chaining](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#optional-chaining)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Optional Chaining (seit ES2020)
const user = {
    address: {
        street: "Hauptstraße 1"
    }
};

// Sicherer Zugriff auf verschachtelte Properties
const street = user?.address?.street;
console.log(street); // "Hauptstraße 1"

const zip = user?.address?.zip;
console.log(zip); // undefined (kein Fehler)

// Sicherer Methodenaufruf
const result = user?.getName?.();

// Sicherer Zugriff auf Array-Elemente
const first = user?.items?.[0];
```

**Besonderheiten:**
- Optional Chaining (`?.`) seit ES2020
- Gibt `undefined` zurück, wenn ein Zwischenwert `null` oder `undefined` ist
- Funktioniert mit Property-Zugriff, Methodenaufrufen und Array-Indizes

**Weiterführende Links:**
- [MDN Web Docs - Optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
// Nullsafe Operator (seit PHP 8.0)
$city = $user?->getAddress()?->getCity();

// Äquivalent zu:
$city = null;
if ($user !== null) {
    $address = $user->getAddress();
    if ($address !== null) {
        $city = $address->getCity();
    }
}
?>
```

**Besonderheiten:**
- `?->` Nullsafe-Operator seit PHP 8.0
- Gibt `null` zurück, wenn ein Glied der Kette `null` ist
- Kann mit Methoden und Properties verwendet werden

**Weiterführende Links:**
- [PHP Documentation - Nullsafe Operator](https://www.php.net/manual/en/language.oop5.basic.php#language.oop5.basic.nullsafe)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Null-Safe Operators
const std = @import("std");

fn findValue(items: []const i32, target: i32) ?i32 {
    for (items) |item| {
        if (item == target) return item;
    }
    return null;
}

const items = [_]i32{ 10, 20, 30 };
const result = findValue(&items, 20);

// Sicheres Unwrapping mit if
if (result) |value| {
    std.debug.print("Gefunden: {}\n", .{value});
}

// Default-Wert mit orelse
const value = result orelse 0;

// Unsicheres Unwrapping mit .? (Panic bei null)
// const forced = result.?;
```

**Besonderheiten:**
- `if (optional) |value|` für sicheres Unwrapping
- `orelse` für Default-Werte (äquivalent zu `??` in anderen Sprachen)
- `.?` für unsicheres Unwrapping (löst Panic bei null aus)
- Compiler erzwingt Behandlung von Optionals

**Weiterführende Links:**
- [Zig Documentation - Optionals](https://ziglang.org/documentation/master/#Optionals)

</TabItem>
</Tabs>


## 5.3.2. Nullish Coalescing (`??`)

Operator, der den linken Operanden zurückgibt, wenn er nicht `null` oder `undefined` ist, andernfalls den rechten Operanden. Unterscheidet sich von logischem OR (`||`), da nur `null` und `undefined` als "falsy" behandelt werden, nicht andere falsy-Werte wie `0` oder `""`.

### Sprachen {#sprachen}

<Tabs availableTabs={['csharp', 'dart', 'groovy', 'javascript', 'kotlin', 'php', 'swift', 'typescript', 'zig']}>
<TabItem value="csharp" label="C#">

```csharp
// Null-Coalescing Operator (seit C# 2.0)
string text = null;
string result = text ?? "default";  // Ergebnis: "default"

int? value = null;
int num = value ?? 0;  // Ergebnis: 0

// Null-Coalescing Assignment (seit C# 8.0)
string name = null;
name ??= "Unknown";  // name wird zu "Unknown" wenn null
```

**Besonderheiten:**
- `??` gibt linken Operanden zurück, wenn nicht null, sonst rechten (seit C# 2.0)
- `??=` für Null-Coalescing Assignment (seit C# 8.0)
- Unterscheidet sich von `||`, da nur `null` als falsy behandelt wird

**Weiterführende Links:**
- [Microsoft C# Documentation - Null-coalescing operator](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/null-coalescing-operator)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Nullish Coalescing
String? text = null;
String result = text ?? "default";  // Ergebnis: "default"

int? value = null;
int num = value ?? 0;  // Ergebnis: 0

// Nullish Coalescing Assignment
String? name = null;
name ??= "Unknown";  // name wird zu "Unknown" wenn null
```

**Besonderheiten:**
- `??` gibt linken Operanden zurück, wenn nicht null, sonst rechten
- `??=` für Nullish Coalescing Assignment
- Unterscheidet sich von `||`, da nur `null` als falsy behandelt wird

**Weiterführende Links:**
- [Dart Language Tour - Null-aware operators](https://dart.dev/guides/language/language-tour#null-aware-operators)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Nullish Coalescing (seit ES2020)
let text = null;
let result = text ?? "default";  // Ergebnis: "default"

let value = null;
let num = value ?? 0;  // Ergebnis: 0

// Unterscheidung zu ||
let empty = "";
let orResult = empty || "default";  // "default" (leerer String ist falsy)
let nullishResult = empty ?? "default";  // "" (nur null/undefined sind falsy)
```

**Besonderheiten:**
- `??` gibt linken Operanden zurück, wenn nicht null/undefined, sonst rechten (seit ES2020)
- Unterscheidet sich von `||`, da nur `null` und `undefined` als falsy behandelt werden
- `??=` für Nullish Coalescing Assignment (seit ES2021)

**Weiterführende Links:**
- [MDN Web Docs - Nullish coalescing operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Nullish Coalescing (Elvis Operator)
val text: String? = null
val result = text ?: "default"  // Ergebnis: "default"

val value: Int? = null
val num = value ?: 0  // Ergebnis: 0

// Elvis Operator mit Throw
val name: String? = null
val result2 = name ?: throw IllegalArgumentException("Name required")
```

**Besonderheiten:**
- `?:` (Elvis Operator) gibt linken Operanden zurück, wenn nicht null, sonst rechten
- Kann auch mit `throw` oder `return` verwendet werden
- Unterscheidet sich von `||`, da nur `null` als falsy behandelt wird

**Weiterführende Links:**
- [Kotlin Documentation - Elvis operator](https://kotlinlang.org/docs/null-safety.html#elvis-operator)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Nullish Coalescing
var text: String? = nil
var result = text ?? "default"  // Ergebnis: "default"

var value: Int? = nil
var num = value ?? 0  // Ergebnis: 0

// Nil-Coalescing Assignment
var name: String? = nil
name = name ?? "Unknown"  // name wird zu "Unknown" wenn nil
```

**Besonderheiten:**
- `??` gibt linken Operanden zurück, wenn nicht nil, sonst rechten
- Unterscheidet sich von `||`, da nur `nil` als falsy behandelt wird

**Weiterführende Links:**
- [Swift Documentation - Nil-Coalescing Operator](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/basicoperators/#Nil-Coalescing-Operator)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Nullish Coalescing (seit TypeScript 3.7)
let text: string | null = null;
let result = text ?? "default";  // Ergebnis: "default"

let value: number | null = null;
let num = value ?? 0;  // Ergebnis: 0

// Unterscheidung zu ||
let empty = "";
let orResult = empty || "default";  // "default" (leerer String ist falsy)
let nullishResult = empty ?? "default";  // "" (nur null/undefined sind falsy)
```

**Besonderheiten:**
- `??` gibt linken Operanden zurück, wenn nicht null/undefined, sonst rechten (seit TypeScript 3.7)
- Unterscheidet sich von `||`, da nur `null` und `undefined` als falsy behandelt werden
- `??=` für Nullish Coalescing Assignment (seit TypeScript 4.0)

**Weiterführende Links:**
- [TypeScript Handbook - Nullish Coalescing](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#nullish-coalescing)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Elvis Operator (?:) als Nullish Coalescing
String name = null
String displayName = name ?: "Unbekannt" // "Unbekannt"

// Verschachtelung
String a = null
String b = null
String c = "Wert"
String result = a ?: b ?: c // "Wert"

// Elvis Assignment (seit Groovy 3.0)
def config = null
config ?= "default" // config wird "default"
```

**Besonderheiten:**
- `?:` (Elvis Operator) gibt den linken Operanden zurück, wenn er truthy ist, sonst den rechten
- Prüft auf `null` und Groovy-Falsy-Werte (leerer String, 0, leere Collection)
- `?=` Elvis-Assignment-Operator seit Groovy 3.0

**Weiterführende Links:**
- [Groovy Documentation - Elvis Operator](https://groovy-lang.org/operators.html#_elvis_operator)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
// Null Coalescing Operator (seit PHP 7.0)
$name = $user['name'] ?? 'default';

// Null Coalescing Assignment (seit PHP 7.4)
$data['key'] ??= 'default_value';
?>
```

**Besonderheiten:**
- `??` gibt linken Operanden zurück, wenn er nicht `null` ist, sonst rechten
- `??=` Null Coalescing Assignment seit PHP 7.4
- Unterschied zu `?:`: `??` prüft nur auf `null`, `?:` prüft auf falsy

**Weiterführende Links:**
- [PHP Documentation - Null Coalescing Operator](https://www.php.net/manual/en/language.operators.comparison.php#language.operators.comparison.coalesce)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Nullish Coalescing: orelse
const optional_value: ?i32 = null;
const result = optional_value orelse 42;  // 42

const present_value: ?i32 = 10;
const result2 = present_value orelse 42;  // 10

// Verkettung
const a: ?i32 = null;
const b: ?i32 = null;
const c: ?i32 = 30;
const final_value = a orelse b orelse c orelse 0;  // 30
```

**Besonderheiten:**
- `orelse` ist Zigs Äquivalent zu `??` in anderen Sprachen
- Gibt den Wert zurück, wenn vorhanden, sonst den Default-Wert
- Kann verkettet werden

**Weiterführende Links:**
- [Zig Documentation - Optionals](https://ziglang.org/documentation/master/#Optionals)

</TabItem>
</Tabs>


## 5.3.3. Not-null Assertion (`!!`)

Operator, der explizit angibt, dass ein Wert nicht `null` oder `undefined` ist. Wirft eine Exception, wenn der Wert doch `null` oder `undefined` ist. Wird verwendet, wenn der Programmierer sicher ist, dass ein Wert nicht null ist.

### Sprachen {#sprachen}

<Tabs availableTabs={['dart', 'kotlin', 'typescript']}>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Not-null Assertion
val text: String? = "Hello"
val length: Int = text!!.length  // Explizite Not-null Assertion

val nullable: String? = null
// val result = nullable!!.length  // Wirft NullPointerException
```

**Besonderheiten:**
- `!!` konvertiert einen nullable Typ zu einem non-nullable Typ
- Wirft `NullPointerException`, wenn der Wert `null` ist
- Sollte nur verwendet werden, wenn sichergestellt ist, dass der Wert nicht null ist

**Weiterführende Links:**
- [Kotlin Documentation - Not-null assertion operator](https://kotlinlang.org/docs/null-safety.html#the-operator)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Not-null Assertion (Non-null assertion operator)
let text: string | null = "Hello";
let length: number = text!.length;  // Explizite Not-null Assertion

let nullable: string | null = null;
// let result = nullable!.length;  // Kompiliert, aber kann Runtime-Fehler verursachen
```

**Besonderheiten:**
- `!` (Non-null assertion operator) entfernt `null` und `undefined` vom Typ
- Kompiliert ohne Fehler, aber kann Runtime-Fehler verursachen, wenn der Wert doch null/undefined ist
- Sollte nur verwendet werden, wenn sichergestellt ist, dass der Wert nicht null/undefined ist

**Weiterführende Links:**
- [TypeScript Handbook - Non-null assertion operator](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#non-null-assertion-operator-postfix-)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Not-null Assertion: ! Operator (seit Dart 2.12)
String? nullableName = getName();

// ! Operator: Assertion, dass der Wert nicht null ist
String name = nullableName!;  // Wirft TypeError wenn null

// In Methodenketten
int length = nullableName!.length;

// Beispiel mit Map-Zugriff
Map<String, int> scores = {'Alice': 95, 'Bob': 87};
int aliceScore = scores['Alice']!;  // Assertion: Schlüssel existiert
```

**Besonderheiten:**
- Dart verwendet `!` (einzelnes Ausrufezeichen) statt `!!` (Kotlin)
- Wirft `TypeError` zur Laufzeit wenn der Wert `null` ist
- Teil von Darts Sound Null Safety (seit Dart 2.12)
- Sollte sparsam verwendet werden - bevorzugt Null-Checks oder `??`

**Weiterführende Links:**
- [Dart Documentation - Null Safety](https://dart.dev/null-safety/understanding-null-safety)

</TabItem>
</Tabs>


## 5.3.4. Cascade Operators

Operatoren, die es ermöglichen, mehrere Operationen auf demselben Objekt auszuführen, ohne das Objekt mehrfach zu referenzieren. Ermöglichen Method-Chaining in einer speziellen Syntax.

### Sprachen {#sprachen}

<Tabs availableTabs={['dart']}>
<TabItem value="dart" label="Dart">

```dart
// Cascade Operators
class Person {
  String name = '';
  int age = 0;
  
  void setName(String n) { name = n; }
  void setAge(int a) { age = a; }
}

var person = Person()
  ..setName('Alice')
  ..setAge(30)
  ..name = 'Bob';  // Alle Operationen auf demselben Objekt

// Equivalent zu:
// var person = Person();
// person.setName('Alice');
// person.setAge(30);
// person.name = 'Bob';
```

**Besonderheiten:**
- `..` (Cascade Operator) ermöglicht Method-Chaining auf demselben Objekt
- Gibt das ursprüngliche Objekt zurück, nicht den Rückgabewert der Methode
- Nützlich für Fluent-Interfaces und Builder-Patterns

**Weiterführende Links:**
- [Dart Language Tour - Cascade notation](https://dart.dev/guides/language/language-tour#cascade-notation)

</TabItem>
</Tabs>


## 5.3.5. Spread Operators

Operatoren, die es ermöglichen, Arrays, Objekte oder andere iterierbare Strukturen zu "expandieren" und ihre Elemente einzeln zu verwenden. Nützlich für das Kopieren, Kombinieren oder Übergabe von Elementen.

### Sprachen {#sprachen}

<Tabs availableTabs={['dart', 'groovy', 'javascript', 'julia', 'php', 'python', 'typescript']}>
<TabItem value="javascript" label="JavaScript">

```javascript
// Spread Operators (seit ES2015)
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = [...arr1, ...arr2];  // [1, 2, 3, 4, 5, 6]

let obj1 = {a: 1, b: 2};
let obj2 = {c: 3, ...obj1};  // {c: 3, a: 1, b: 2}

// Funktionsaufruf
function sum(a, b, c) { return a + b + c; }
let numbers = [1, 2, 3];
let result = sum(...numbers);  // 6
```

**Besonderheiten:**
- `...` (Spread Operator) expandiert Arrays/Objekte (seit ES2015)
- Kann für Arrays, Objekte und Funktionsaufrufe verwendet werden
- Nützlich für Kopieren, Kombinieren und Übergabe von Elementen

**Weiterführende Links:**
- [MDN Web Docs - Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

</TabItem>
<TabItem value="python" label="Python">

```python
# Spread Operators (Unpacking)
arr1 = [1, 2, 3]
arr2 = [4, 5, 6]
combined = [*arr1, *arr2]  # [1, 2, 3, 4, 5, 6]

# Dictionary Unpacking (seit Python 3.5)
obj1 = {'a': 1, 'b': 2}
obj2 = {'c': 3, **obj1}  # {'c': 3, 'a': 1, 'b': 2}

# Funktionsaufruf
def sum(a, b, c):
    return a + b + c

numbers = [1, 2, 3]
result = sum(*numbers)  # 6
```

**Besonderheiten:**
- `*` für Sequenz-Unpacking, `**` für Dictionary-Unpacking
- Kann für Listen, Tupel, Dictionaries und Funktionsaufrufe verwendet werden
- Nützlich für Kopieren, Kombinieren und Übergabe von Elementen

**Weiterführende Links:**
- [Python Documentation - Unpacking argument lists](https://docs.python.org/3/tutorial/controlflow.html#unpacking-argument-lists)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Spread Operators (seit TypeScript 1.6)
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = [...arr1, ...arr2];  // [1, 2, 3, 4, 5, 6]

let obj1 = {a: 1, b: 2};
let obj2 = {c: 3, ...obj1};  // {c: 3, a: 1, b: 2}

// Funktionsaufruf
function sum(a: number, b: number, c: number): number {
    return a + b + c;
}
let numbers = [1, 2, 3];
let result = sum(...numbers);  // 6
```

**Besonderheiten:**
- `...` (Spread Operator) expandiert Arrays/Objekte (seit TypeScript 1.6)
- Kann für Arrays, Objekte und Funktionsaufrufe verwendet werden
- Type-safe Spread-Operationen

**Weiterführende Links:**
- [TypeScript Handbook - Spread operator](https://www.typescriptlang.org/docs/handbook/variable-declarations.html#spread)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Spread Operators (seit Dart 2.3)
var list1 = [1, 2, 3];
var list2 = [0, ...list1, 4];        // [0, 1, 2, 3, 4]

// Null-aware Spread
List<int>? nullableList = null;
var list3 = [0, ...?nullableList, 4]; // [0, 4]

// In Sets
var set1 = {1, 2, 3};
var set2 = {0, ...set1};             // {0, 1, 2, 3}

// In Maps
var map1 = {'a': 1, 'b': 2};
var map2 = {'c': 3, ...map1};        // {'c': 3, 'a': 1, 'b': 2}
```

**Besonderheiten:**
- `...` für Spread, `...?` für null-aware Spread
- Funktioniert mit Lists, Sets und Maps
- Kann mit Collection-if und Collection-for kombiniert werden
- Seit Dart 2.3

**Weiterführende Links:**
- [Dart Documentation - Spread Operator](https://dart.dev/language/collections#spread-operators)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Spread Operator (*.)
class Person {
    String name
    Person(String name) { this.name = name }
}

def people = [new Person("Alice"), new Person("Bob"), new Person("Charlie")]

// Spread-Operator ruft Property auf allen Elementen auf
def names = people*.name // ["Alice", "Bob", "Charlie"]

// Spread-Operator für Methoden
def upperNames = people*.name*.toUpperCase() // ["ALICE", "BOB", "CHARLIE"]

// Spread für Methodenargumente
def args = [1, 2, 3]
def sum(a, b, c) { a + b + c }
println sum(*args) // 6
```

**Besonderheiten:**
- `*.` Spread-Operator ruft Property/Methode auf allen Collection-Elementen auf
- `*` Spread-Operator für Methodenargumente (unpacking)
- Null-safe: gibt `null` für `null`-Elemente zurück

**Weiterführende Links:**
- [Groovy Documentation - Spread Operator](https://groovy-lang.org/operators.html#_spread_operator)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Splatting: Array zu einzelnen Argumenten
args = [1, 2, 3]
println(args...)  # println(1, 2, 3)

# In Funktionsdefinition (Variadic)
function sum_all(args...)
    sum(args)
end

sum_all(1, 2, 3, 4)  # 10

# Splatting in Collections
a = [1, 2]
b = [3, 4]
combined = [a..., b...]  # [1, 2, 3, 4]
```

**Besonderheiten:**
- `...` (Splatting) zum Entpacken von Collections in Argumente
- Auch in Funktionsdefinitionen für variadic parameter
- Kann in Array-Literalen verwendet werden

**Weiterführende Links:**
- [Julia Documentation - Varargs Functions](https://docs.julialang.org/en/v1/manual/functions/#Varargs-Functions)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
// Spread Operator für Funktionsargumente (seit PHP 5.6)
function sum(int ...$numbers): int {
    return array_sum($numbers);
}
echo sum(1, 2, 3); // 6

// Spread Operator für Arrays (seit PHP 7.4)
$arr1 = [1, 2, 3];
$arr2 = [...$arr1, 4, 5]; // [1, 2, 3, 4, 5]
?>
```

**Besonderheiten:**
- `...` für variadic Funktionsparameter (seit PHP 5.6)
- `...` für Array-Unpacking (seit PHP 7.4)
- Seit PHP 8.1 auch mit String-Keys in Arrays

**Weiterführende Links:**
- [PHP Documentation - Variable-length argument lists](https://www.php.net/manual/en/functions.arguments.php#functions.variable-arg-list)

</TabItem>
</Tabs>


## 5.3.6. Range Operators

Operatoren, die eine Sequenz von Werten zwischen einem Start- und Endwert erzeugen. Nützlich für Schleifen, Array-Generierung und Bereichsprüfungen.

### Sprachen {#sprachen}

<Tabs availableTabs={['csharp', 'groovy', 'julia', 'kotlin', 'matlab', 'nim', 'octave', 'python', 'ruby', 'rust', 'swift']}>
<TabItem value="python" label="Python">

```python
# Range Operators
numbers = list(range(1, 5))  # [1, 2, 3, 4]
for i in range(0, 10, 2):    # 0, 2, 4, 6, 8
    print(i)

# Slicing mit Range-ähnlicher Syntax
arr = [1, 2, 3, 4, 5]
subset = arr[1:4]  # [2, 3, 4]
```

**Besonderheiten:**
- `range()` Funktion erzeugt Sequenzen
- Unterstützt Start, Stop und Step-Parameter
- Slicing verwendet ähnliche Syntax

**Weiterführende Links:**
- [Python Documentation - range](https://docs.python.org/3/library/stdtypes.html#range)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Range Operators
range = 1..5      # Inclusive range: 1, 2, 3, 4, 5
range2 = 1...5    # Exclusive range: 1, 2, 3, 4

range.each { |i| puts i }  # Iteration über Range

# Range-Prüfung
value = 3
in_range = (1..10).include?(value)  # true
```

**Besonderheiten:**
- `..` für inclusive Range, `...` für exclusive Range
- Range-Objekte können iteriert werden
- Unterstützt Range-Prüfungen

**Weiterführende Links:**
- [Ruby Documentation - Range](https://docs.ruby-lang.org/en/3.2/Range.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Range Operators
let range = 1...5      // Closed range: 1, 2, 3, 4, 5
let halfOpen = 1..<5   // Half-open range: 1, 2, 3, 4

for i in range {
    print(i)
}

// Range-Prüfung
let value = 3
let inRange = range.contains(value)  // true
```

**Besonderheiten:**
- `...` für closed range, `..<` für half-open range
- Range-Objekte können iteriert werden
- Unterstützt Range-Prüfungen mit `contains()`

**Weiterführende Links:**
- [Swift Documentation - Range Operators](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/basicoperators/#Range-Operators)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Range Operators (seit C# 8.0)
int[] numbers = { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };

// Range mit .. Operator
int[] slice1 = numbers[2..5];    // { 2, 3, 4 }
int[] slice2 = numbers[..3];     // { 0, 1, 2 }
int[] slice3 = numbers[7..];     // { 7, 8, 9 }

// Index from end mit ^ Operator
int last = numbers[^1];          // 9
int[] slice4 = numbers[^3..];    // { 7, 8, 9 }
int[] slice5 = numbers[1..^1];   // { 1, 2, 3, 4, 5, 6, 7, 8 }

// Range als Variable
Range range = 2..5;
int[] slice6 = numbers[range];   // { 2, 3, 4 }
```

**Besonderheiten:**
- `..` erstellt einen `System.Range` (seit C# 8.0)
- `^` für Index-from-end (`^1` = letztes Element)
- Exklusives Ende (wie Python)
- Ranges können als Variablen gespeichert werden

**Weiterführende Links:**
- [Microsoft C# Documentation - Indices and Ranges](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/proposals/csharp-8.0/ranges)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Range-Operatoren
def inclusive = 1..5        // [1, 2, 3, 4, 5] (inklusiv)
def exclusive = 1..<5       // [1, 2, 3, 4] (exklusiv)

// Ranges mit Buchstaben
def letters = 'a'..'f'     // [a, b, c, d, e, f]

// Absteigend
def descending = 5..1      // [5, 4, 3, 2, 1]

// Verwendung in Schleifen
for (i in 1..5) {
    println i
}
```

**Besonderheiten:**
- `..` für inklusive Ranges
- `..<` für exklusive Ranges (Endwert ausgeschlossen)
- Ranges sind Objekte vom Typ `groovy.lang.Range`
- Unterstützt Zahlen, Zeichen und andere `Comparable`-Typen

**Weiterführende Links:**
- [Groovy Documentation - Range Operator](https://groovy-lang.org/operators.html#_range_operator)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Range mit Doppelpunkt
r1 = 1:5          # 1, 2, 3, 4, 5
r2 = 1:2:10       # 1, 3, 5, 7, 9 (mit Schrittweite)
r3 = 10:-1:1       # 10, 9, 8, ..., 1 (rückwärts)

# Float-Range
r4 = 0.0:0.1:1.0  # 0.0, 0.1, 0.2, ..., 1.0

# In Schleifen
for i in 1:5
    println(i)
end

# In Array-Slicing
arr = [10, 20, 30, 40, 50]
arr[2:4]  # [20, 30, 40]
```

**Besonderheiten:**
- `:` erstellt Range-Objekte (lazy, kein Speicherverbrauch)
- `start:step:stop` für benutzerdefinierte Schrittweite
- Ranges sind erste Klasse-Objekte und Collection-kompatibel

**Weiterführende Links:**
- [Julia Documentation - Ranges](https://docs.julialang.org/en/v1/base/math/#Base.range)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Range Operators
val inclusive = 1..5       // Inklusiver Range: 1, 2, 3, 4, 5
val exclusive = 1..<5      // Exklusiver Range: 1, 2, 3, 4 (seit Kotlin 1.7.20)

for (i in inclusive) {
    println(i)
}

// Absteigender Range
for (i in 5 downTo 1) {
    println(i)  // 5, 4, 3, 2, 1
}

// Range mit Schrittweite
for (i in 0..10 step 2) {
    println(i)  // 0, 2, 4, 6, 8, 10
}

// Range-Prüfung
val value = 3
val inRange = value in 1..10  // true
```

**Besonderheiten:**
- `..` für inklusiven Range, `..<` für exklusiven Range (seit Kotlin 1.7.20)
- `downTo` für absteigende Ranges
- `step` für benutzerdefinierte Schrittweite
- `in`-Operator für Range-Prüfungen

**Weiterführende Links:**
- [Kotlin Documentation - Ranges and progressions](https://kotlinlang.org/docs/ranges.html)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% Range Operator: Colon (:)
range1 = 1:5;       % [1, 2, 3, 4, 5]
range2 = 1:2:10;    % [1, 3, 5, 7, 9] (mit Schrittweite)
range3 = 10:-1:1;   % [10, 9, 8, ..., 1] (absteigend)
```

**Besonderheiten:**
- Syntax: `start:end` oder `start:step:end`
- Erzeugt Zeilenvektoren
- Wird häufig in for-Schleifen und Array-Indizierung verwendet

**Weiterführende Links:**
- [MATLAB Documentation - Colon Operator](https://www.mathworks.com/help/matlab/ref/colon.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Range Operators
for i in 0..5:     # inklusive: 0, 1, 2, 3, 4, 5
  echo i

for i in 0..<5:    # exklusive: 0, 1, 2, 3, 4
  echo i

for i in countdown(5, 0):  # rückwärts: 5, 4, 3, 2, 1, 0
  echo i
```

**Besonderheiten:**
- `..` für inklusive Ranges
- `..<` für exklusive Ranges (obere Grenze ausgeschlossen)
- `countdown()` für rückwärts laufende Ranges
- Ranges können in `case`-Statements verwendet werden

**Weiterführende Links:**
- [Nim Documentation - Ranges](https://nim-lang.org/docs/system.html#.._2)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
% Range-Operator
range1 = 1:5;         % [1, 2, 3, 4, 5]
range2 = 0:2:10;      % [0, 2, 4, 6, 8, 10] (mit Schrittweite)
range3 = 10:-1:1;     % [10, 9, 8, ..., 1] (rückwärts)
```

**Besonderheiten:**
- Syntax: `start:end` oder `start:step:end`
- Erzeugt einen Zeilenvektor
- Weit verbreitet in Schleifen und Array-Indizierung

**Weiterführende Links:**
- [GNU Octave Documentation - Ranges](https://octave.org/doc/v8.1.0/Ranges.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Range Operators
let exclusive = 1..5;     // Exclusive range: 1, 2, 3, 4
let inclusive = 1..=5;    // Inclusive range: 1, 2, 3, 4, 5

for i in 1..5 {
    println!("{}", i);    // 1, 2, 3, 4
}

for i in 1..=5 {
    println!("{}", i);    // 1, 2, 3, 4, 5
}

// Range-Prüfung
let value = 3;
let in_range = (1..=10).contains(&value);  // true

// Ranges in Pattern Matching
match value {
    1..=5 => println!("1 bis 5"),
    6..=10 => println!("6 bis 10"),
    _ => println!("Anderer Wert"),
}
```

**Besonderheiten:**
- `..` für exclusive Range (Half-open), `..=` für inclusive Range (Closed)
- Range-Typen: `Range`, `RangeInclusive`, `RangeFrom`, `RangeTo`, `RangeFull`
- Ranges können in `for`-Schleifen, Pattern Matching und Slicing verwendet werden
- `contains()` für Range-Prüfungen

**Weiterführende Links:**
- [Rust Reference - Range Expressions](https://doc.rust-lang.org/reference/expressions/range-expr.html)

</TabItem>
</Tabs>


## 5.3.7. Pipeline Operators

Operatoren, die es ermöglichen, Funktionsaufrufe in einer Pipeline zu verketten, wobei das Ergebnis einer Funktion als Argument an die nächste übergeben wird. Verbessert die Lesbarkeit von Funktionskompositionen.

### Sprachen {#sprachen}

<Tabs availableTabs={['clojure', 'elixir', 'elm', 'fsharp', 'gleam', 'julia', 'lean4', 'purescript', 'r', 'roc', 'wolfram-language']}>
<TabItem value="fsharp" label="F#">

```fsharp
// Pipeline Operators
let add x y = x + y
let multiply x y = x * y

let result = 5
  |> add 3      // 5 + 3 = 8
  |> multiply 2  // 8 * 2 = 16

// Forward Pipe
let result2 = [1; 2; 3]
  |> List.map (fun x -> x * 2)
  |> List.filter (fun x -> x > 2)
```

**Besonderheiten:**
- `|>` (Forward Pipe) übergibt linken Operanden als erstes Argument an rechte Funktion
- Ermöglicht Fluent-API-ähnliche Funktionskomposition
- Sehr häufig in funktionaler Programmierung verwendet

**Weiterführende Links:**
- [F# Documentation - Pipe forward operator](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/functions/#function-composition-and-pipelining)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Pipeline Operators
result = 5
  |> Kernel.+(3)      # 5 + 3 = 8
  |> Kernel.*(2)      # 8 * 2 = 16

# Mit Funktionen
result2 = [1, 2, 3]
  |> Enum.map(fn x -> x * 2 end)
  |> Enum.filter(fn x -> x > 2 end)
```

**Besonderheiten:**
- `|>` (Pipe Operator) übergibt linken Operanden als erstes Argument an rechte Funktion
- Ermöglicht Fluent-API-ähnliche Funktionskomposition
- Sehr häufig in Elixir verwendet

**Weiterführende Links:**
- [Elixir Documentation - Pipe operator](https://hexdocs.pm/elixir/Kernel.html#%7C%3E/2)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Threading-Makros als Pipeline-Operatoren
(def result
  (->> (range 1 11)
       (filter even?)
       (map #(* % %))
       (reduce +)))  ; 220

;; Thread-First (->): Wert als erstes Argument
(-> "hello world"
    (.toUpperCase)
    (.substring 0 5))  ; "HELLO"

;; Thread-Last (->>): Wert als letztes Argument
(->> [1 2 3 4 5]
     (map inc)
     (filter even?))  ; (2 4 6)

;; Null-safe Threading
(some-> {:a {:b 42}}
        :a
        :b
        inc)  ; 43
```

**Besonderheiten:**
- `->` (Thread-First): Wert als erstes Argument einfügen
- `->>` (Thread-Last): Wert als letztes Argument einfügen
- `some->` / `some->>`: Null-safe Varianten (stoppen bei nil)
- `as->`: Beliebige Position des Werts
- Threading-Makros sind Makros, keine Operatoren

**Weiterführende Links:**
- [Clojure Documentation - Threading Macros](https://clojure.org/guides/threading_macros)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Pipeline Operator |> (forward pipe)
result =
    "hello world"
        |> String.toUpper
        |> String.split " "
        |> List.length

-- Backward Pipe <|
result2 = String.length <| String.toUpper <| "hello"

-- Funktionskomposition
double = (*) 2
increment = (+) 1

doubleThenIncrement = double >> increment
incrementThenDouble = double << increment
```

**Besonderheiten:**
- `|>` (Forward Pipe): Übergibt das Ergebnis links als letztes Argument der Funktion rechts
- `<|` (Backward Pipe): Übergibt das Ergebnis rechts als Argument der Funktion links
- `>>` und `<<` für Funktionskomposition
- Pipeline-Operator ist idiomatisch und weit verbreitet in Elm

**Weiterführende Links:**
- [Elm Documentation - Operators](https://package.elm-lang.org/packages/elm/core/latest/Basics#|%3E)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// Pipeline Operator |>
let result =
  [1, 2, 3, 4, 5]
  |> list.filter(fn(x) { x > 2 })
  |> list.map(fn(x) { x * 2 })
  |> list.fold(0, fn(acc, x) { acc + x })
// result = 24
```

**Besonderheiten:**
- `|>` leitet das Ergebnis als erstes Argument an die nächste Funktion weiter
- Zentrales Feature für funktionale Programmierung in Gleam
- Ermöglicht lesbaren, deklarativen Code

**Weiterführende Links:**
- [Gleam Documentation - Pipelines](https://tour.gleam.run/functions/pipelines/)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Pipeline-Operator |>
result = "hello world" |> uppercase |> split |> length  # 2

# Äquivalent zu
result = length(split(uppercase("hello world")))

# Mit anonymen Funktionen
[1, 2, 3, 4, 5] |> x -> filter(isodd, x) |> sum  # 9
```

**Besonderheiten:**
- `|>` leitet den linken Wert als erstes Argument an die rechte Funktion weiter
- Nützlich für Funktionsketten
- Funktioniert nur mit einstelligen Funktionen (oder mit anonymen Funktionen für mehrstellige)

**Weiterführende Links:**
- [Julia Documentation - Function Composition and Piping](https://docs.julialang.org/en/v1/manual/functions/#Function-composition-and-piping)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Pipeline Operators
def double (x : Nat) : Nat := x * 2
def increment (x : Nat) : Nat := x + 1

-- Forward Pipe |>
#eval 5 |> double |> increment  -- 11

-- Backward Pipe <|
#eval increment <| double <| 5  -- 11

-- Pipeline mit List-Operationen
#eval [1, 2, 3, 4, 5]
  |> List.map (· * 2)
  |> List.filter (· > 4)
  -- [6, 8, 10]
```

**Besonderheiten:**
- `|>` (Forward Pipe): Übergibt linken Wert als Argument an die rechte Funktion
- `<|` (Backward Pipe): Übergibt rechten Wert als Argument an die linke Funktion
- `·`-Syntax (anonymous function shorthand) kann in Pipelines kombiniert werden
- Pipelines sind idiomatisch in Lean 4

**Weiterführende Links:**
- [Lean 4 – Functional Programming in Lean 4](https://lean-lang.org/functional_programming_in_lean/)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Pipeline Operator (#)
result = "hello"
    # toUpper
    # (_ <> " WORLD")

-- Funktionskomposition (>>>)
process = toUpper >>> (_ <> " WORLD")
result2 = process "hello"
```

**Besonderheiten:**
- `#` ist der apply-flipped Operator (Pipe)
- `>>>` für Funktionskomposition (links-nach-rechts)
- `<<<` für Funktionskomposition (rechts-nach-links, wie `.` in Haskell)

**Weiterführende Links:**
- [PureScript Documentation - Operators](https://github.com/purescript/documentation/blob/master/language/Syntax.md#binary-operators)

</TabItem>
<TabItem value="r" label="R">

```r
# Pipeline Operator (seit R 4.1.0)
result <- c(1, 2, 3, 4, 5) |> sum() |> sqrt()

# Pipeline mit Funktionsaufrufen
mtcars |> subset(cyl == 4) |> nrow()
```

**Besonderheiten:**
- Nativer Pipeline-Operator `|>` seit R 4.1.0
- Übergibt linken Ausdruck als erstes Argument der rechten Funktion
- Alternativ: `magrittr`-Paket bietet `%>%` mit erweiterter Funktionalität

**Weiterführende Links:**
- [R Documentation - Pipe](https://stat.ethz.ch/R-manual/R-devel/library/base/html/pipeOp.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Pipeline Operator
result =
    [1, 2, 3, 4, 5]
    |> List.map (\x -> x * 2)
    |> List.keepIf (\x -> x > 4)
    |> List.len
```

**Besonderheiten:**
- `|>` leitet den Wert als letztes Argument an die nächste Funktion
- Ermöglicht lesbare Funktionsketten
- Idiomatischer Roc-Stil

**Weiterführende Links:**
- [Roc Documentation](https://www.roc-lang.org/tutorial)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Pipeline mit // (Postfix) und RightComposition *)
result = {3, 1, 2, 1, 3} // DeleteDuplicates // Sort // Length
(* Gleich wie Length[Sort[DeleteDuplicates[{3, 1, 2, 1, 3}]]] = 3 *)
```

**Besonderheiten:**
- `//` (Postfix) ermöglicht Pipeline-Stil: `x // f // g`
- `/*` (RightComposition, seit Version 13.1) für Funktionskomposition

**Weiterführende Links:**
- [Wolfram Language Documentation - Postfix](https://reference.wolfram.com/language/ref/Postfix.html)

</TabItem>
</Tabs>


## 5.3.8. Walrus Operator (`:=`)

Operator, der eine Zuweisung und gleichzeitig eine Auswertung ermöglicht. Ermöglicht es, einer Variable einen Wert zuzuweisen und diesen Wert in derselben Expression zu verwenden.

### Sprachen {#sprachen}

<Tabs availableTabs={['python']}>
<TabItem value="python" label="Python">

```python
# Walrus Operator (seit Python 3.8)
# Zuweisung und Verwendung in derselben Expression
if (n := len([1, 2, 3])) > 2:
    print(f"List has {n} items")  # List has 3 items

# In while-Schleifen
while (line := input()) != "quit":
    print(f"You entered: {line}")

# In List Comprehensions
numbers = [1, 2, 3, 4, 5]
squares = [y for x in numbers if (y := x**2) > 10]  # [16, 25]
```

**Besonderheiten:**
- `:=` (Walrus Operator) ermöglicht Zuweisung in Expressions (seit Python 3.8)
- Nützlich für while-Schleifen, if-Bedingungen und List Comprehensions
- Reduziert Code-Duplikation, indem Variablen direkt in Expressions verwendet werden können

**Weiterführende Links:**
- [Python Documentation - Assignment expressions](https://docs.python.org/3/whatsnew/3.8.html#assignment-expressions)

</TabItem>
</Tabs>

