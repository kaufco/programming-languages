---
slug: /operatoren/spezielle-operatoren
title: 5.3. Special Operators
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 5.3. Special Operators

Special operators for specific use cases.

## 5.3.1. Null-Safe Operators

Operators that safely handle null/nil values without throwing exceptions. Allow accessing members of potentially null objects without explicit null checks.

### Languages {#sprachen}

<Tabs availableTabs={['csharp', 'dart', 'groovy', 'javascript', 'kotlin', 'php', 'swift', 'typescript', 'zig']}>
<TabItem value="csharp" label="C#">

```csharp
// Null-Safe Operators (since C# 6.0)
string text = null;
int? length = text?.Length;  // Null-Safe member access: null if text is null

string[] items = null;
string first = items?[0];    // Null-Safe index access: null if items is null

// Null-Safe method call
string result = text?.ToUpper();  // null if text is null
```

**Special features:**
- `?.` for Null-Safe member access (since C# 6.0)
- `?[]` for Null-Safe index access
- Returns `null` if the left operand is `null`

**Further reading:**
- [Microsoft C# Documentation - Null-conditional operators](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/member-access-operators#null-conditional-operators--and-)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Null-Safe Operators
String? text = null;
int? length = text?.length;  // Null-Safe member access: null if text is null

List<String>? items = null;
String? first = items?[0];  // Null-Safe index access: null if items is null

// Null-Safe method call
String? result = text?.toUpperCase();  // null if text is null
```

**Special features:**
- `?.` for Null-Safe member access
- `?[]` for Null-Safe index access
- Returns `null` if the left operand is `null`

**Further reading:**
- [Dart Language Tour - Null safety](https://dart.dev/guides/language/language-tour#null-safety)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Null-Safe Operators
String text = null
Integer length = text?.length()  // Null-Safe method call: null if text is null

List items = null
def first = items?[0]  // Null-Safe index access: null if items is null
```

**Special features:**
- `?.` for Null-Safe method call
- `?[]` for Null-Safe index access
- Returns `null` if the left operand is `null`

**Further reading:**
- [Groovy Documentation - Safe navigation operator](https://groovy-lang.org/operators.html#_safe_navigation_operator)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Null-Safe Operators
val text: String? = null
val length: Int? = text?.length  // Null-Safe member access: null if text is null

val items: List<String>? = null
val first: String? = items?.get(0)  // Null-Safe method call: null if items is null

// Null-Safe index access
val firstItem: String? = items?[0]  // null if items is null
```

**Special features:**
- `?.` for Null-Safe member access
- `?[]` for Null-Safe index access
- Returns `null` if the left operand is `null`

**Further reading:**
- [Kotlin Documentation - Safe calls](https://kotlinlang.org/docs/null-safety.html#safe-calls)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Null-Safe Operators (Optional Chaining)
var text: String? = nil
var length: Int? = text?.count  // Null-Safe member access: nil if text is nil

var items: [String]? = nil
var first: String? = items?[0]  // Null-Safe index access: nil if items is nil

// Null-Safe method call
var result: String? = text?.uppercased()  // nil if text is nil
```

**Special features:**
- `?.` for Optional Chaining (Null-Safe access)
- `?[]` for Null-Safe index access
- Returns `nil` if the left operand is `nil`

**Further reading:**
- [Swift Documentation - Optional Chaining](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/optionalchaining/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Null-Safe Operators (Optional Chaining, since TypeScript 3.7)
let text: string | null = null;
let length: number | undefined = text?.length;  // Null-Safe member access: undefined if text is null

let items: string[] | null = null;
let first: string | undefined = items?.[0];  // Null-Safe index access: undefined if items is null

// Null-Safe method call
let result: string | undefined = text?.toUpperCase();  // undefined if text is null
```

**Special features:**
- `?.` for Optional Chaining (since TypeScript 3.7)
- `?.[]` for Null-Safe index access
- Returns `undefined` if the left operand is `null` or `undefined`

**Further reading:**
- [TypeScript Handbook - Optional Chaining](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#optional-chaining)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Optional Chaining (since ES2020)
const user = {
    address: {
        street: "Hauptstraße 1"
    }
};

// Safe access to nested properties
const street = user?.address?.street;
console.log(street); // "Hauptstraße 1"

const zip = user?.address?.zip;
console.log(zip); // undefined (no error)

// Safe method call
const result = user?.getName?.();

// Safe access to array elements
const first = user?.items?.[0];
```

**Special features:**
- Optional Chaining (`?.`) since ES2020
- Returns `undefined` if an intermediate value is `null` or `undefined`
- Works with property access, method calls, and array indices

**Further reading:**
- [MDN Web Docs - Optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
// Nullsafe Operator (since PHP 8.0)
$city = $user?->getAddress()?->getCity();

// Equivalent to:
$city = null;
if ($user !== null) {
    $address = $user->getAddress();
    if ($address !== null) {
        $city = $address->getCity();
    }
}
?>
```

**Special features:**
- `?->` Nullsafe operator since PHP 8.0
- Returns `null` if a link in the chain is `null`
- Can be used with methods and properties

**Further reading:**
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

// Safe unwrapping with if
if (result) |value| {
    std.debug.print("Gefunden: {}\n", .{value});
}

// Default value with orelse
const value = result orelse 0;

// Unsafe unwrapping with .? (Panic on null)
// const forced = result.?;
```

**Special features:**
- `if (optional) |value|` for safe unwrapping
- `orelse` for default values (equivalent to `??` in other languages)
- `.?` for unsafe unwrapping (causes panic on null)
- Compiler enforces handling of optionals

**Further reading:**
- [Zig Documentation - Optionals](https://ziglang.org/documentation/master/#Optionals)

</TabItem>
</Tabs>


## 5.3.2. Nullish Coalescing (`??`)

Operator that returns the left operand if it is not `null` or `undefined`, otherwise the right operand. Differs from logical OR (`||`), as only `null` and `undefined` are treated as "falsy", not other falsy values like `0` or `""`.

### Languages {#sprachen}

<Tabs availableTabs={['csharp', 'dart', 'groovy', 'javascript', 'kotlin', 'php', 'swift', 'typescript', 'zig']}>
<TabItem value="csharp" label="C#">

```csharp
// Null-Coalescing Operator (since C# 2.0)
string text = null;
string result = text ?? "default";  // Result: "default"

int? value = null;
int num = value ?? 0;  // Result: 0

// Null-Coalescing Assignment (since C# 8.0)
string name = null;
name ??= "Unknown";  // name becomes "Unknown" if null
```

**Special features:**
- `??` returns left operand if not null, otherwise right (since C# 2.0)
- `??=` for Null-Coalescing Assignment (since C# 8.0)
- Differs from `||`, as only `null` is treated as falsy

**Further reading:**
- [Microsoft C# Documentation - Null-coalescing operator](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/null-coalescing-operator)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Nullish Coalescing
String? text = null;
String result = text ?? "default";  // Result: "default"

int? value = null;
int num = value ?? 0;  // Result: 0

// Nullish Coalescing Assignment
String? name = null;
name ??= "Unknown";  // name becomes "Unknown" if null
```

**Special features:**
- `??` returns left operand if not null, otherwise right
- `??=` for Nullish Coalescing Assignment
- Differs from `||`, as only `null` is treated as falsy

**Further reading:**
- [Dart Language Tour - Null-aware operators](https://dart.dev/guides/language/language-tour#null-aware-operators)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Nullish Coalescing (since ES2020)
let text = null;
let result = text ?? "default";  // Result: "default"

let value = null;
let num = value ?? 0;  // Result: 0

// Distinction from ||
let empty = "";
let orResult = empty || "default";  // "default" (empty string is falsy)
let nullishResult = empty ?? "default";  // "" (only null/undefined are falsy)
```

**Special features:**
- `??` returns left operand if not null/undefined, otherwise right (since ES2020)
- Differs from `||`, as only `null` and `undefined` are treated as falsy
- `??=` for Nullish Coalescing Assignment (since ES2021)

**Further reading:**
- [MDN Web Docs - Nullish coalescing operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Nullish Coalescing (Elvis Operator)
val text: String? = null
val result = text ?: "default"  // Result: "default"

val value: Int? = null
val num = value ?: 0  // Result: 0

// Elvis Operator with Throw
val name: String? = null
val result2 = name ?: throw IllegalArgumentException("Name required")
```

**Special features:**
- `?:` (Elvis Operator) returns left operand if not null, otherwise right
- Can also be used with `throw` or `return`
- Differs from `||`, as only `null` is treated as falsy

**Further reading:**
- [Kotlin Documentation - Elvis operator](https://kotlinlang.org/docs/null-safety.html#elvis-operator)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Nullish Coalescing
var text: String? = nil
var result = text ?? "default"  // Result: "default"

var value: Int? = nil
var num = value ?? 0  // Result: 0

// Nil-Coalescing Assignment
var name: String? = nil
name = name ?? "Unknown"  // name becomes "Unknown" if nil
```

**Special features:**
- `??` returns left operand if not nil, otherwise right
- Differs from `||`, as only `nil` is treated as falsy

**Further reading:**
- [Swift Documentation - Nil-Coalescing Operator](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/basicoperators/#Nil-Coalescing-Operator)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Nullish Coalescing (since TypeScript 3.7)
let text: string | null = null;
let result = text ?? "default";  // Result: "default"

let value: number | null = null;
let num = value ?? 0;  // Result: 0

// Distinction from ||
let empty = "";
let orResult = empty || "default";  // "default" (empty string is falsy)
let nullishResult = empty ?? "default";  // "" (only null/undefined are falsy)
```

**Special features:**
- `??` returns left operand if not null/undefined, otherwise right (since TypeScript 3.7)
- Differs from `||`, as only `null` and `undefined` are treated as falsy
- `??=` for Nullish Coalescing Assignment (since TypeScript 4.0)

**Further reading:**
- [TypeScript Handbook - Nullish Coalescing](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#nullish-coalescing)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Elvis Operator (?:) as Nullish Coalescing
String name = null
String displayName = name ?: "Unbekannt" // "Unbekannt"

// Nesting
String a = null
String b = null
String c = "Wert"
String result = a ?: b ?: c // "Wert"

// Elvis Assignment (since Groovy 3.0)
def config = null
config ?= "default" // config becomes "default"
```

**Special features:**
- `?:` (Elvis Operator) returns the left operand if it is truthy, otherwise the right
- Checks for `null` and Groovy falsy values (empty string, 0, empty collection)
- `?=` Elvis assignment operator since Groovy 3.0

**Further reading:**
- [Groovy Documentation - Elvis Operator](https://groovy-lang.org/operators.html#_elvis_operator)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
// Null Coalescing Operator (since PHP 7.0)
$name = $user['name'] ?? 'default';

// Null Coalescing Assignment (since PHP 7.4)
$data['key'] ??= 'default_value';
?>
```

**Special features:**
- `??` returns left operand if it is not `null`, otherwise right
- `??=` Null Coalescing Assignment since PHP 7.4
- Difference from `?:`: `??` only checks for `null`, `?:` checks for falsy

**Further reading:**
- [PHP Documentation - Null Coalescing Operator](https://www.php.net/manual/en/language.operators.comparison.php#language.operators.comparison.coalesce)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Nullish Coalescing: orelse
const optional_value: ?i32 = null;
const result = optional_value orelse 42;  // 42

const present_value: ?i32 = 10;
const result2 = present_value orelse 42;  // 10

// Chaining
const a: ?i32 = null;
const b: ?i32 = null;
const c: ?i32 = 30;
const final_value = a orelse b orelse c orelse 0;  // 30
```

**Special features:**
- `orelse` is Zig's equivalent to `??` in other languages
- Returns the value if present, otherwise the default value
- Can be chained

**Further reading:**
- [Zig Documentation - Optionals](https://ziglang.org/documentation/master/#Optionals)

</TabItem>
</Tabs>


## 5.3.3. Not-null Assertion (`!!`)

Operator that explicitly indicates that a value is not `null` or `undefined`. Throws an exception if the value is `null` or `undefined`. Used when the programmer is certain that a value is not null.

### Languages {#sprachen}

<Tabs availableTabs={['dart', 'kotlin', 'typescript']}>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Not-null Assertion
val text: String? = "Hello"
val length: Int = text!!.length  // Explicit Not-null Assertion

val nullable: String? = null
// val result = nullable!!.length  // Throws NullPointerException
```

**Special features:**
- `!!` converts a nullable type to a non-nullable type
- Throws `NullPointerException` if the value is `null`
- Should only be used when it is certain that the value is not null

**Further reading:**
- [Kotlin Documentation - Not-null assertion operator](https://kotlinlang.org/docs/null-safety.html#the-operator)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Not-null Assertion (Non-null assertion operator)
let text: string | null = "Hello";
let length: number = text!.length;  // Explicit Not-null Assertion

let nullable: string | null = null;
// let result = nullable!.length;  // Compiles, but can cause runtime error
```

**Special features:**
- `!` (Non-null assertion operator) removes `null` and `undefined` from the type
- Compiles without error, but can cause runtime error if the value is null/undefined
- Should only be used when it is certain that the value is not null/undefined

**Further reading:**
- [TypeScript Handbook - Non-null assertion operator](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#non-null-assertion-operator-postfix-)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Not-null Assertion: ! Operator (since Dart 2.12)
String? nullableName = getName();

// ! Operator: Assertion that the value is not null
String name = nullableName!;  // Throws TypeError if null

// In method chains
int length = nullableName!.length;

// Example with Map access
Map<String, int> scores = {'Alice': 95, 'Bob': 87};
int aliceScore = scores['Alice']!;  // Assertion: key exists
```

**Special features:**
- Dart uses `!` (single exclamation mark) instead of `!!` (Kotlin)
- Throws `TypeError` at runtime if the value is `null`
- Part of Dart's Sound Null Safety (since Dart 2.12)
- Should be used sparingly - prefer null checks or `??`

**Further reading:**
- [Dart Documentation - Null Safety](https://dart.dev/null-safety/understanding-null-safety)

</TabItem>
</Tabs>


## 5.3.4. Cascade Operators

Operators that allow performing multiple operations on the same object without referencing the object multiple times. Enable method chaining in a special syntax.

### Languages {#sprachen}

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
  ..name = 'Bob';  // All operations on the same object

// Equivalent to:
// var person = Person();
// person.setName('Alice');
// person.setAge(30);
// person.name = 'Bob';
```

**Special features:**
- `..` (Cascade Operator) enables method chaining on the same object
- Returns the original object, not the return value of the method
- Useful for fluent interfaces and builder patterns

**Further reading:**
- [Dart Language Tour - Cascade notation](https://dart.dev/guides/language/language-tour#cascade-notation)

</TabItem>
</Tabs>


## 5.3.5. Spread Operators

Operators that allow "expanding" arrays, objects, or other iterable structures and using their elements individually. Useful for copying, combining, or passing elements.

### Languages {#sprachen}

<Tabs availableTabs={['dart', 'groovy', 'javascript', 'julia', 'php', 'python', 'typescript']}>
<TabItem value="javascript" label="JavaScript">

```javascript
// Spread Operators (since ES2015)
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = [...arr1, ...arr2];  // [1, 2, 3, 4, 5, 6]

let obj1 = {a: 1, b: 2};
let obj2 = {c: 3, ...obj1};  // {c: 3, a: 1, b: 2}

// Function call
function sum(a, b, c) { return a + b + c; }
let numbers = [1, 2, 3];
let result = sum(...numbers);  // 6
```

**Special features:**
- `...` (Spread Operator) expands arrays/objects (since ES2015)
- Can be used for arrays, objects, and function calls
- Useful for copying, combining, and passing elements

**Further reading:**
- [MDN Web Docs - Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

</TabItem>
<TabItem value="python" label="Python">

```python
# Spread Operators (Unpacking)
arr1 = [1, 2, 3]
arr2 = [4, 5, 6]
combined = [*arr1, *arr2]  # [1, 2, 3, 4, 5, 6]

# Dictionary Unpacking (since Python 3.5)
obj1 = {'a': 1, 'b': 2}
obj2 = {'c': 3, **obj1}  # {'c': 3, 'a': 1, 'b': 2}

# Function call
def sum(a, b, c):
    return a + b + c

numbers = [1, 2, 3]
result = sum(*numbers)  # 6
```

**Special features:**
- `*` for sequence unpacking, `**` for dictionary unpacking
- Can be used for lists, tuples, dictionaries, and function calls
- Useful for copying, combining, and passing elements

**Further reading:**
- [Python Documentation - Unpacking argument lists](https://docs.python.org/3/tutorial/controlflow.html#unpacking-argument-lists)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Spread Operators (since TypeScript 1.6)
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = [...arr1, ...arr2];  // [1, 2, 3, 4, 5, 6]

let obj1 = {a: 1, b: 2};
let obj2 = {c: 3, ...obj1};  // {c: 3, a: 1, b: 2}

// Function call
function sum(a: number, b: number, c: number): number {
    return a + b + c;
}
let numbers = [1, 2, 3];
let result = sum(...numbers);  // 6
```

**Special features:**
- `...` (Spread Operator) expands arrays/objects (since TypeScript 1.6)
- Can be used for arrays, objects, and function calls
- Type-safe spread operations

**Further reading:**
- [TypeScript Handbook - Spread operator](https://www.typescriptlang.org/docs/handbook/variable-declarations.html#spread)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Spread Operators (since Dart 2.3)
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

**Special features:**
- `...` for spread, `...?` for null-aware spread
- Works with Lists, Sets, and Maps
- Can be combined with collection-if and collection-for
- Since Dart 2.3

**Further reading:**
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

// Spread operator calls property on all elements
def names = people*.name // ["Alice", "Bob", "Charlie"]

// Spread operator for methods
def upperNames = people*.name*.toUpperCase() // ["ALICE", "BOB", "CHARLIE"]

// Spread for method arguments
def args = [1, 2, 3]
def sum(a, b, c) { a + b + c }
println sum(*args) // 6
```

**Special features:**
- `*.` spread operator calls property/method on all collection elements
- `*` spread operator for method arguments (unpacking)
- Null-safe: returns `null` for `null` elements

**Further reading:**
- [Groovy Documentation - Spread Operator](https://groovy-lang.org/operators.html#_spread_operator)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Splatting: Array to individual arguments
args = [1, 2, 3]
println(args...)  # println(1, 2, 3)

# In function definition (Variadic)
function sum_all(args...)
    sum(args)
end

sum_all(1, 2, 3, 4)  # 10

# Splatting in collections
a = [1, 2]
b = [3, 4]
combined = [a..., b...]  # [1, 2, 3, 4]
```

**Special features:**
- `...` (Splatting) for unpacking collections into arguments
- Also in function definitions for variadic parameters
- Can be used in array literals

**Further reading:**
- [Julia Documentation - Varargs Functions](https://docs.julialang.org/en/v1/manual/functions/#Varargs-Functions)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
// Spread Operator for function arguments (since PHP 5.6)
function sum(int ...$numbers): int {
    return array_sum($numbers);
}
echo sum(1, 2, 3); // 6

// Spread Operator for arrays (since PHP 7.4)
$arr1 = [1, 2, 3];
$arr2 = [...$arr1, 4, 5]; // [1, 2, 3, 4, 5]
?>
```

**Special features:**
- `...` for variadic function parameters (since PHP 5.6)
- `...` for array unpacking (since PHP 7.4)
- Since PHP 8.1 also with string keys in arrays

**Further reading:**
- [PHP Documentation - Variable-length argument lists](https://www.php.net/manual/en/functions.arguments.php#functions.variable-arg-list)

</TabItem>
</Tabs>


## 5.3.6. Range Operators

Operators that generate a sequence of values between a start and end value. Useful for loops, array generation, and range checks.

### Languages {#sprachen}

<Tabs availableTabs={['csharp', 'groovy', 'julia', 'kotlin', 'matlab', 'nim', 'octave', 'python', 'ruby', 'rust', 'swift']}>
<TabItem value="python" label="Python">

```python
# Range Operators
numbers = list(range(1, 5))  # [1, 2, 3, 4]
for i in range(0, 10, 2):    # 0, 2, 4, 6, 8
    print(i)

# Slicing with range-like syntax
arr = [1, 2, 3, 4, 5]
subset = arr[1:4]  # [2, 3, 4]
```

**Special features:**
- `range()` function generates sequences
- Supports start, stop, and step parameters
- Slicing uses similar syntax

**Further reading:**
- [Python Documentation - range](https://docs.python.org/3/library/stdtypes.html#range)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Range Operators
range = 1..5      # Inclusive range: 1, 2, 3, 4, 5
range2 = 1...5    # Exclusive range: 1, 2, 3, 4

range.each { |i| puts i }  # Iteration over range

# Range check
value = 3
in_range = (1..10).include?(value)  # true
```

**Special features:**
- `..` for inclusive range, `...` for exclusive range
- Range objects can be iterated
- Supports range checks

**Further reading:**
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

// Range check
let value = 3
let inRange = range.contains(value)  // true
```

**Special features:**
- `...` for closed range, `..<` for half-open range
- Range objects can be iterated
- Supports range checks with `contains()`

**Further reading:**
- [Swift Documentation - Range Operators](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/basicoperators/#Range-Operators)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Range Operators (since C# 8.0)
int[] numbers = { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };

// Range with .. operator
int[] slice1 = numbers[2..5];    // { 2, 3, 4 }
int[] slice2 = numbers[..3];     // { 0, 1, 2 }
int[] slice3 = numbers[7..];     // { 7, 8, 9 }

// Index from end with ^ operator
int last = numbers[^1];          // 9
int[] slice4 = numbers[^3..];    // { 7, 8, 9 }
int[] slice5 = numbers[1..^1];   // { 1, 2, 3, 4, 5, 6, 7, 8 }

// Range as variable
Range range = 2..5;
int[] slice6 = numbers[range];   // { 2, 3, 4 }
```

**Special features:**
- `..` creates a `System.Range` (since C# 8.0)
- `^` for index-from-end (`^1` = last element)
- Exclusive end (like Python)
- Ranges can be stored as variables

**Further reading:**
- [Microsoft C# Documentation - Indices and Ranges](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/proposals/csharp-8.0/ranges)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Range operators
def inclusive = 1..5        // [1, 2, 3, 4, 5] (inclusive)
def exclusive = 1..<5       // [1, 2, 3, 4] (exclusive)

// Ranges with letters
def letters = 'a'..'f'     // [a, b, c, d, e, f]

// Descending
def descending = 5..1      // [5, 4, 3, 2, 1]

// Usage in loops
for (i in 1..5) {
    println i
}
```

**Special features:**
- `..` for inclusive ranges
- `..<` for exclusive ranges (end value excluded)
- Ranges are objects of type `groovy.lang.Range`
- Supports numbers, characters, and other `Comparable` types

**Further reading:**
- [Groovy Documentation - Range Operator](https://groovy-lang.org/operators.html#_range_operator)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Range with colon
r1 = 1:5          # 1, 2, 3, 4, 5
r2 = 1:2:10       # 1, 3, 5, 7, 9 (with step size)
r3 = 10:-1:1       # 10, 9, 8, ..., 1 (backwards)

# Float range
r4 = 0.0:0.1:1.0  # 0.0, 0.1, 0.2, ..., 1.0

# In loops
for i in 1:5
    println(i)
end

# In array slicing
arr = [10, 20, 30, 40, 50]
arr[2:4]  # [20, 30, 40]
```

**Special features:**
- `:` creates range objects (lazy, no memory usage)
- `start:step:stop` for custom step size
- Ranges are first-class objects and collection-compatible

**Further reading:**
- [Julia Documentation - Ranges](https://docs.julialang.org/en/v1/base/math/#Base.range)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Range Operators
val inclusive = 1..5       // Inclusive range: 1, 2, 3, 4, 5
val exclusive = 1..<5      // Exclusive range: 1, 2, 3, 4 (since Kotlin 1.7.20)

for (i in inclusive) {
    println(i)
}

// Descending range
for (i in 5 downTo 1) {
    println(i)  // 5, 4, 3, 2, 1
}

// Range with step size
for (i in 0..10 step 2) {
    println(i)  // 0, 2, 4, 6, 8, 10
}

// Range check
val value = 3
val inRange = value in 1..10  // true
```

**Special features:**
- `..` for inclusive range, `..<` for exclusive range (since Kotlin 1.7.20)
- `downTo` for descending ranges
- `step` for custom step size
- `in` operator for range checks

**Further reading:**
- [Kotlin Documentation - Ranges and progressions](https://kotlinlang.org/docs/ranges.html)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% Range Operator: Colon (:)
range1 = 1:5;       % [1, 2, 3, 4, 5]
range2 = 1:2:10;    % [1, 3, 5, 7, 9] (with step size)
range3 = 10:-1:1;   % [10, 9, 8, ..., 1] (descending)
```

**Special features:**
- Syntax: `start:end` or `start:step:end`
- Generates row vectors
- Frequently used in for loops and array indexing

**Further reading:**
- [MATLAB Documentation - Colon Operator](https://www.mathworks.com/help/matlab/ref/colon.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Range Operators
for i in 0..5:     # inclusive: 0, 1, 2, 3, 4, 5
  echo i

for i in 0..<5:    # exclusive: 0, 1, 2, 3, 4
  echo i

for i in countdown(5, 0):  # backwards: 5, 4, 3, 2, 1, 0
  echo i
```

**Special features:**
- `..` for inclusive ranges
- `..<` for exclusive ranges (upper bound excluded)
- `countdown()` for backwards-running ranges
- Ranges can be used in `case` statements

**Further reading:**
- [Nim Documentation - Ranges](https://nim-lang.org/docs/system.html#.._2)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
% Range operator
range1 = 1:5;         % [1, 2, 3, 4, 5]
range2 = 0:2:10;      % [0, 2, 4, 6, 8, 10] (with step size)
range3 = 10:-1:1;     % [10, 9, 8, ..., 1] (backwards)
```

**Special features:**
- Syntax: `start:end` or `start:step:end`
- Generates a row vector
- Widely used in loops and array indexing

**Further reading:**
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

// Range check
let value = 3;
let in_range = (1..=10).contains(&value);  // true

// Ranges in pattern matching
match value {
    1..=5 => println!("1 bis 5"),
    6..=10 => println!("6 bis 10"),
    _ => println!("Anderer Wert"),
}
```

**Special features:**
- `..` for exclusive range (Half-open), `..=` for inclusive range (Closed)
- Range types: `Range`, `RangeInclusive`, `RangeFrom`, `RangeTo`, `RangeFull`
- Ranges can be used in `for` loops, pattern matching, and slicing
- `contains()` for range checks

**Further reading:**
- [Rust Reference - Range Expressions](https://doc.rust-lang.org/reference/expressions/range-expr.html)

</TabItem>
</Tabs>


## 5.3.7. Pipeline Operators

Operators that allow chaining function calls in a pipeline, where the result of one function is passed as an argument to the next. Improves readability of function compositions.

### Languages {#sprachen}

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

**Special features:**
- `|>` (Forward Pipe) passes left operand as first argument to right function
- Enables fluent-API-like function composition
- Very common in functional programming

**Further reading:**
- [F# Documentation - Pipe forward operator](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/functions/#function-composition-and-pipelining)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Pipeline Operators
result = 5
  |> Kernel.+(3)      # 5 + 3 = 8
  |> Kernel.*(2)      # 8 * 2 = 16

# With functions
result2 = [1, 2, 3]
  |> Enum.map(fn x -> x * 2 end)
  |> Enum.filter(fn x -> x > 2 end)
```

**Special features:**
- `|>` (Pipe Operator) passes left operand as first argument to right function
- Enables fluent-API-like function composition
- Very common in Elixir

**Further reading:**
- [Elixir Documentation - Pipe operator](https://hexdocs.pm/elixir/Kernel.html#%7C%3E/2)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Threading macros as pipeline operators
(def result
  (->> (range 1 11)
       (filter even?)
       (map #(* % %))
       (reduce +)))  ; 220

;; Thread-First (->): Value as first argument
(-> "hello world"
    (.toUpperCase)
    (.substring 0 5))  ; "HELLO"

;; Thread-Last (->>): Value as last argument
(->> [1 2 3 4 5]
     (map inc)
     (filter even?))  ; (2 4 6)

;; Null-safe threading
(some-> {:a {:b 42}}
        :a
        :b
        inc)  ; 43
```

**Special features:**
- `->` (Thread-First): Insert value as first argument
- `->>` (Thread-Last): Insert value as last argument
- `some->` / `some->>`: Null-safe variants (stop at nil)
- `as->`: Arbitrary position of value
- Threading macros are macros, not operators

**Further reading:**
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

-- Function composition
double = (*) 2
increment = (+) 1

doubleThenIncrement = double >> increment
incrementThenDouble = double << increment
```

**Special features:**
- `|>` (Forward Pipe): Passes the result on the left as the last argument to the function on the right
- `<|` (Backward Pipe): Passes the result on the right as an argument to the function on the left
- `>>` and `<<` for function composition
- Pipeline operator is idiomatic and widely used in Elm

**Further reading:**
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

**Special features:**
- `|>` passes the result as the first argument to the next function
- Central feature for functional programming in Gleam
- Enables readable, declarative code

**Further reading:**
- [Gleam Documentation - Pipelines](https://tour.gleam.run/functions/pipelines/)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Pipeline operator |>
result = "hello world" |> uppercase |> split |> length  # 2

# Equivalent to
result = length(split(uppercase("hello world")))

# With anonymous functions
[1, 2, 3, 4, 5] |> x -> filter(isodd, x) |> sum  # 9
```

**Special features:**
- `|>` passes the left value as the first argument to the right function
- Useful for function chains
- Only works with single-argument functions (or with anonymous functions for multi-argument)

**Further reading:**
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

-- Pipeline with list operations
#eval [1, 2, 3, 4, 5]
  |> List.map (· * 2)
  |> List.filter (· > 4)
  -- [6, 8, 10]
```

**Special features:**
- `|>` (Forward Pipe): Passes left value as argument to the right function
- `<|` (Backward Pipe): Passes right value as argument to the left function
- `·` syntax (anonymous function shorthand) can be combined in pipelines
- Pipelines are idiomatic in Lean 4

**Further reading:**
- [Lean 4 – Functional Programming in Lean 4](https://lean-lang.org/functional_programming_in_lean/)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Pipeline Operator (#)
result = "hello"
    # toUpper
    # (_ <> " WORLD")

-- Function composition (>>>)
process = toUpper >>> (_ <> " WORLD")
result2 = process "hello"
```

**Special features:**
- `#` is the apply-flipped operator (Pipe)
- `>>>` for function composition (left-to-right)
- `<<<` for function composition (right-to-left, like `.` in Haskell)

**Further reading:**
- [PureScript Documentation - Operators](https://github.com/purescript/documentation/blob/master/language/Syntax.md#binary-operators)

</TabItem>
<TabItem value="r" label="R">

```r
# Pipeline Operator (since R 4.1.0)
result <- c(1, 2, 3, 4, 5) |> sum() |> sqrt()

# Pipeline with function calls
mtcars |> subset(cyl == 4) |> nrow()
```

**Special features:**
- Native pipeline operator `|>` since R 4.1.0
- Passes left expression as first argument to the right function
- Alternative: `magrittr` package provides `%>%` with extended functionality

**Further reading:**
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

**Special features:**
- `|>` passes the value as the last argument to the next function
- Enables readable function chains
- Idiomatic Roc style

**Further reading:**
- [Roc Documentation](https://www.roc-lang.org/tutorial)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Pipeline with // (Postfix) and RightComposition *)
result = {3, 1, 2, 1, 3} // DeleteDuplicates // Sort // Length
(* Same as Length[Sort[DeleteDuplicates[{3, 1, 2, 1, 3}]]] = 3 *)
```

**Special features:**
- `//` (Postfix) enables pipeline style: `x // f // g`
- `/*` (RightComposition, since version 13.1) for function composition

**Further reading:**
- [Wolfram Language Documentation - Postfix](https://reference.wolfram.com/language/ref/Postfix.html)

</TabItem>
</Tabs>


## 5.3.8. Walrus Operator (`:=`)

Operator that enables both assignment and evaluation. Allows assigning a value to a variable and using that value in the same expression.

### Languages {#sprachen}

<Tabs availableTabs={['python']}>
<TabItem value="python" label="Python">

```python
# Walrus Operator (since Python 3.8)
# Assignment and usage in the same expression
if (n := len([1, 2, 3])) > 2:
    print(f"List has {n} items")  # List has 3 items

# In while loops
while (line := input()) != "quit":
    print(f"You entered: {line}")

# In List Comprehensions
numbers = [1, 2, 3, 4, 5]
squares = [y for x in numbers if (y := x**2) > 10]  # [16, 25]
```

**Special features:**
- `:=` (Walrus Operator) enables assignment in expressions (since Python 3.8)
- Useful for while loops, if conditions, and list comprehensions
- Reduces code duplication by allowing variables to be used directly in expressions

**Further reading:**
- [Python Documentation - Assignment expressions](https://docs.python.org/3/whatsnew/3.8.html#assignment-expressions)

</TabItem>
</Tabs>

