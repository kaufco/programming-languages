---
slug: /typsystem/null-safety
title: 3.6. Null Safety
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 3.6. Null Safety

Mechanisms for handling null values and optionals.

## 3.6.1. Optionals / Maybe Types

Types that can represent a value or "nothing" (None/Nothing). Implemented as sum types with explicit constructors like `Some(value)` and `None`.

### Languages {#sprachen}

<Tabs availableTabs={['d', 'elm', 'fsharp', 'gleam', 'haskell', 'idris', 'java', 'koka', 'lean4', 'mercury', 'nim', 'ocaml', 'purescript', 'rust', 'scala', 'swift', 'v', 'zig']} orangeTabs={['racket', 'roc']}>
<TabItem value="d" label="D">

```d
// Optional (since D 2.0)
// Requires: import std.typecons;
Nullable!int findValue(int[] items, int target) {
    foreach (item; items) {
        if (item == target) {
            return Nullable!int(item);
        }
    }
    return Nullable!int.init; // None
}

auto result = findValue([1, 2, 3], 2);
if (!result.isNull) {
    int value = result;
}
```

**Special features:**
- Uses `Nullable!T` from `std.typecons`
- `Nullable!T.init` represents the None state
- Check with `isNull` property

**Further reading:**
- [D Language Specification - Nullable](https://dlang.org/phobos/std_typecons.html#.Nullable)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Maybe Type
findValue : List Int -> Int -> Maybe Int
findValue items target =
    List.head (List.filter (\item -> item == target) items)

result = findValue [1, 2, 3] 2
case result of
    Just value -> value
    Nothing -> 0
```

**Special features:**
- `Maybe a` is a built-in sum type
- Pattern matching with `Just` and `Nothing`
- Type-safe, no null values

**Further reading:**
- [Elm Guide - Maybe](https://guide.elm-lang.org/error_handling/maybe.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Option Type
let findValue (items: int list) target =
    List.tryFind (fun item -> item = target) items

let result = findValue [1; 2; 3] 2
match result with
| Some value -> value
| None -> 0
```

**Special features:**
- `'a option` is a built-in sum type
- Pattern matching with `Some` and `None`
- `List.tryFind` returns `Option`

**Further reading:**
- [F# Documentation - Options](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/options)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// Option Type (from gleam/option)
// Requires: import gleam/option.{type Option, Some, None}
pub fn find_value(items: List(Int), target: Int) -> Option(Int) {
  case items {
    [] -> None
    [x, ..rest] -> case x == target {
      True -> Some(x)
      False -> find_value(rest, target)
    }
  }
}

let result = find_value([1, 2, 3], 2)
case result {
  Some(value) -> value
  None -> 0
}
```

**Special features:**
- `Option(a)` is a type from `gleam/option` with variants `Some(a)` and `None`
- Pattern matching with `Some` and `None`
- Type-safe, no null values

**Further reading:**
- [Gleam Documentation - Option](https://hexdocs.pm/gleam_stdlib/gleam/option.html)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Maybe Type
findValue :: [Int] -> Int -> Maybe Int
findValue items target = find (== target) items

result = findValue [1, 2, 3] 2
case result of
    Just value -> value
    Nothing -> 0
```

**Special features:**
- `Maybe a` is a built-in sum type
- Pattern matching with `Just` and `Nothing`
- `find` from `Data.List` returns `Maybe`

**Further reading:**
- [Haskell Documentation - Maybe](https://hackage.haskell.org/package/base-4.19.0.0/docs/Data-Maybe.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Maybe Type
findValue : List Int -> Int -> Maybe Int
findValue items target = find (== target) items

result = findValue [1, 2, 3] 2
case result of
    Just value => value
    Nothing => 0
```

**Special features:**
- `Maybe a` is a built-in sum type
- Pattern matching with `Just` and `Nothing`
- Type-safe with dependent types

**Further reading:**
- [Idris 2 Documentation - Types and Functions](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Optional (since Java 8)
// Requires: import java.util.Optional;
Optional<String> findValue(String[] items, String target) {
    for (String item : items) {
        if (item.equals(target)) {
            return Optional.of(item);
        }
    }
    return Optional.empty();
}

Optional<String> result = findValue(new String[]{"a", "b", "c"}, "b");
if (result.isPresent()) {
    String value = result.get();
}

// Functional usage
String value = result.orElse("default");
result.ifPresent(v -> System.out.println(v));
```

**Special features:**
- `Optional<T>` was introduced in Java 8
- Check with `isPresent()`, access with `get()`
- Functional API: `orElse()`, `ifPresent()`, `map()`, `flatMap()`
- `Optional` is a wrapper type, not part of the type system

**Further reading:**
- [Oracle Java Documentation - Optional](https://docs.oracle.com/javase/8/docs/api/java/util/Optional.html)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Maybe Type (built-in)
fun find-value(items: list<int>, target: int): maybe<int>
  match items
    Nil -> Nothing
    Cons(x, xs) -> if x == target then Just(x) else find-value(xs, target)

// Usage
val result = find-value([1, 2, 3], 2)

val value = match result
  Just(v) -> v
  Nothing -> 0  // Fallback
```

**Special features:**
- `maybe<a>` is a built-in algebraic data type with `Just(a)` and `Nothing`
- Null does not exist in Koka — `maybe` is the only way to represent optional values
- Pattern matching with `match` for safe access
- Functional combinators like `map`, `default` available

**Further reading:**
- [Koka Standard Library - maybe](https://koka-lang.github.io/koka/doc/std_core_types.html#type-maybe)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Option Type (built-in)
def findValue (items : List Int) (target : Int) : Option Int :=
  items.find? (· == target)

-- Usage
def result := findValue [1, 2, 3] 2

-- Pattern Matching
def value := match result with
  | some v => v
  | none   => 0

-- Functional combinators
def mapped := result.map (· * 2)        -- some 4
def fallback := result.getD 0           -- 2 (Default value)
def chained := result.bind (fun v => if v > 0 then some v else none)
```

**Special features:**
- `Option α` is a built-in inductive type with `some` and `none`
- Null does not exist in Lean 4 — `Option` is the only way to represent optional values
- Functional combinators: `map`, `bind`, `getD`, `orElse`
- Pattern matching enforces handling of all cases

**Further reading:**
- [Lean 4 Documentation - Option](https://leanprover-community.github.io/mathlib4_docs/Init/Prelude.html#Option)

</TabItem>
<TabItem value="mercury" label="Mercury">

```mercury
% Optionals: maybe(T) type from the standard library
:- import_module maybe.

:- func find_value(list(int), int) = maybe(int).
find_value([], _) = no.
find_value([H | T], Target) =
    ( if H = Target then yes(H) else find_value(T, Target) ).

:- pred main(io::di, io::uo) is det.
main(!IO) :-
    Result = find_value([1, 2, 3], 2),

    % Pattern Matching
    (
        Result = yes(Value),
        io.write_string("Found: ", !IO),
        io.write_int(Value, !IO), io.nl(!IO)
    ;
        Result = no,
        io.write_string("Not found", !IO), io.nl(!IO)
    ),

    % Usage with helper predicates
    MappedResult = maybe.map((func(V) = V * 2), Result),
    Default = maybe.from_maybe(0, Result).
```

**Special features:**
- `maybe(T)` is the built-in option type with constructors `yes(T)` and `no`.
- Mercury has no null concept — `maybe(T)` is the only way to represent optional values.
- Pattern matching enforces handling of both cases (`yes` and `no`).
- The `maybe` module provides helper functions like `map`, `from_maybe`, `fold_maybe`.

**Further reading:**
- [The Mercury Standard Library - maybe](https://www.mercurylang.org/information/doc-release/mercury_library/maybe.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Option Type
# Requires: import options
proc findValue(items: seq[int], target: int): Option[int] =
  for item in items:
    if item == target:
      return some(item)
  return none(int)

let result = findValue(@[1, 2, 3], 2)
if result.isSome:
  let value = result.get()
```

**Special features:**
- `Option[T]` from `options` module
- `some()` and `none()` constructors
- Check with `isSome`, access with `get()`

**Further reading:**
- [Nim Documentation - Options](https://nim-lang.org/docs/options.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Option Type *)
let find_value items target =
  List.find_opt (fun item -> item = target) items

let result = find_value [1; 2; 3] 2
match result with
| Some value -> value
| None -> 0
```

**Special features:**
- `'a option` is a built-in sum type
- Pattern matching with `Some` and `None`
- `List.find_opt` returns `option`

**Further reading:**
- [OCaml Documentation - Option](https://v2.ocaml.org/api/Option.html)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Maybe Type
findValue :: Array Int -> Int -> Maybe Int
findValue items target = find (_ == target) items

result = findValue [1, 2, 3] 2
case result of
    Just value -> value
    Nothing -> 0
```

**Special features:**
- `Maybe a` is a built-in sum type
- Pattern matching with `Just` and `Nothing`
- Type-safe, no null values

**Further reading:**
- [PureScript Documentation - Maybe](https://pursuit.purescript.org/packages/purescript-maybe/4.0.1/docs/Data.Maybe)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
; Optional-like behavior with #f as None
(define (find-value items target)
  (for/or ([item items])
    (and (= item target) item)))

; Usage
(define result (find-value '(1 2 3) 2))
(if result
    (printf "Gefunden: ~a\n" result)
    (printf "Nicht gefunden\n"))
```

**Special features:**
- No built-in Option/Maybe type
- Convention: `#f` is used as "not present"
- `for/or` returns the first truthy value or `#f`

**Further reading:**
- [Racket Documentation - Booleans](https://docs.racket-lang.org/reference/booleans.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Optional Type as Tag Union
findValue : List I64, I64 -> [Found I64, NotFound]
findValue = \items, target ->
    when List.findFirst items (\item -> item == target) is
        Ok value -> Found value
        Err _ -> NotFound

result = findValue [1, 2, 3] 2
when result is
    Found value -> value
    NotFound -> 0
```

**Special features:**
- No built-in Optional/Maybe types
- Tag unions are used as optional replacement
- Compiler enforces handling of all cases

**Further reading:**
- [Roc Documentation - Tags](https://www.roc-lang.org/tutorial#tags)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Option Type
fn find_value(items: &[i32], target: i32) -> Option<i32> {
    items.iter().find(|&&item| item == target).copied()
}

let result = find_value(&[1, 2, 3], 2);
match result {
    Some(value) => value,
    None => 0,
}
```

**Special features:**
- `Option&lt;T&gt;` is a built-in sum type
- Pattern matching with `Some` and `None`
- Zero-cost abstraction, no runtime overhead

**Further reading:**
- [Rust Documentation - Option](https://doc.rust-lang.org/std/option/enum.Option.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Option Type
def findValue(items: List[Int], target: Int): Option[Int] =
  items.find(_ == target)

val result = findValue(List(1, 2, 3), 2)
result match {
  case Some(value) => value
  case None => 0
}
```

**Special features:**
- `Option[T]` is a built-in sum type
- Pattern matching with `Some` and `None`
- `List.find` returns `Option`

**Further reading:**
- [Scala Documentation - Option](https://www.scala-lang.org/api/current/scala/Option.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Optional Type
func findValue(items: [Int], target: Int) -> Int? {
    return items.first(where: { $0 == target })
}

let result = findValue(items: [1, 2, 3], target: 2)
if let value = result {
    // value is unwrapped here
}
```

**Special features:**
- `Optional&lt;T&gt;` (or `T?`) is a built-in sum type
- Optional binding with `if let`
- Optional chaining with `?` operator

**Further reading:**
- [Swift Documentation - Optionals](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/thebasics/#Optionals)

</TabItem>
<TabItem value="v" label="V">

```v
// Optionals: ?Type
fn find_user(id int) ?string {
    if id == 1 {
        return 'Alice'
    }
    return none
}

name := find_user(1) or { 'Unknown' }
println(name)

if result := find_user(2) {
    println(result)
} else {
    println('Not found')
}
```

**Special features:**
- `?Type` marks optional return values
- `none` represents the absence of a value
- `or { }` block for fallback values
- `if`-unwrapping for safe usage

**Further reading:**
- [V Documentation - Optionals](https://github.com/vlang/v/blob/master/doc/docs.md#optionsresult)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Optional Types: ?T
const std = @import("std");

fn findIndex(items: []const []const u8, target: []const u8) ?usize {
    for (items, 0..) |item, i| {
        if (std.mem.eql(u8, item, target)) {
            return i;
        }
    }
    return null;  // No result found
}

// Usage
const items = [_][]const u8{ "Apfel", "Banane", "Kirsche" };
const result = findIndex(&items, "Banane");

// Safe unwrapping with if
if (result) |index| {
    std.debug.print("Gefunden bei Index: {}\n", .{index});
} else {
    std.debug.print("Nicht gefunden\n", .{});
}

// Default value with orelse
const index = result orelse 0;
```

**Special features:**
- `?T` is the optional type (e.g., `?i32`, `?usize`)
- `null` is the absence value
- Safe unwrapping with `if (optional) |value|`
- Default value with `orelse`
- Unsafe unwrapping with `.?` (panic on null)

**Further reading:**
- [Zig Documentation - Optionals](https://ziglang.org/documentation/master/#Optionals)

</TabItem>
</Tabs>


## 3.6.2. Nullable Types

Types that explicitly allow `null` or `undefined` as a value. Unlike optionals/maybe types, nullable types are direct extensions of the base type that allow null/undefined as an additional value.

### Languages {#sprachen}

<Tabs availableTabs={['c', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'groovy', 'java', 'javascript', 'kotlin', 'lua', 'nim', 'objective-c', 'perl', 'php', 'python', 'ruby', 'typescript', 'vbnet', 'zig']}>
<TabItem value="c" label="C">

```c
// Nullable (pointers can be NULL)
int* findValue(int items[], int length, int target) {
    for (int i = 0; i < length; i++) {
        if (items[i] == target) {
            return &items[i];
        }
    }
    return NULL; // null
}

int* result = findValue(items, 3, 2);
if (result != NULL) {
    int value = *result;
}
```

**Special features:**
- Pointers can be `NULL`
- No explicit nullable type syntax, only pointer semantics
- Check with `!= NULL` or `== NULL`

**Further reading:**
- [C Standard - Pointers](https://en.cppreference.com/w/c/language/pointer)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Nullable Reference Types (since C# 8.0)
string? findValue(string[] items, string target) {
    foreach (var item in items) {
        if (item == target) {
            return item;
        }
    }
    return null;
}

string? result = findValue(new[] { "a", "b", "c" }, "b");
if (result != null) {
    string value = result;
}
```

**Special features:**
- Nullable reference types were introduced in C# 8.0
- `T?` syntax for nullable reference types
- Nullable value types (`int?`) have existed since C# 2.0

**Further reading:**
- [Microsoft C# Documentation - Nullable Reference Types](https://learn.microsoft.com/en-us/dotnet/csharp/nullable-references)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Nullable (pointers can be nullptr)
// Requires: #include <vector>
int* findValue(std::vector<int>& items, int target) {
    for (auto& item : items) {
        if (item == target) {
            return &item;
        }
    }
    return nullptr; // null
}

int* result = findValue(items, 2);
if (result != nullptr) {
    int value = *result;
}
```

**Special features:**
- Pointers can be `nullptr` (since C++11)
- `NULL` macro is deprecated, `nullptr` is preferred
- No explicit nullable type syntax, only pointer semantics

**Further reading:**
- [cppreference.com - nullptr](https://en.cppreference.com/w/cpp/language/nullptr)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Nullable (reference types can be nil)
def find_value(items : Array(String), target : String) : String?
  items.find { |item| item == target }
end

result = find_value(["a", "b", "c"], "b")
if result
  value = result
end
```

**Special features:**
- `T?` syntax for nullable types
- All reference types can be `nil`
- Check with `if` or `if !result.nil?`

**Further reading:**
- [Crystal Documentation - Nil](https://crystal-lang.org/reference/1.11/syntax_and_semantics/nil.html)

</TabItem>
<TabItem value="d" label="D">

```d
// Nullable (reference types can be null)
string findValue(string[] items, string target) {
    foreach (item; items) {
        if (item == target) {
            return item;
        }
    }
    return null;
}

string result = findValue(["a", "b", "c"], "b");
if (result !is null) {
    string value = result;
}
```

**Special features:**
- Reference types can be `null`
- Check with `!is null` or `is null`
- No explicit nullable type syntax

**Further reading:**
- [D Language Specification - Null](https://dlang.org/spec/expression.html#null)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Nullable Types (since Dart 2.12)
String? findValue(List<String> items, String target) {
  for (var item in items) {
    if (item == target) {
      return item;
    }
  }
  return null;
}

String? result = findValue(["a", "b", "c"], "b");
if (result != null) {
  String value = result;
}
```

**Special features:**
- Nullable types were introduced in Dart 2.12
- `T?` syntax for nullable types
- Null safety is enabled by default

**Further reading:**
- [Dart Documentation - Null Safety](https://dart.dev/null-safety)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Nullable (all reference types can be null)
String findValue(String[] items, String target) {
    for (String item : items) {
        if (item == target) {
            return item
        }
    }
    return null
}

String result = findValue(["a", "b", "c"] as String[], "b")
if (result != null) {
    String value = result
}
```

**Special features:**
- All reference types can be `null`
- No explicit nullable type syntax
- Check with `!= null` or `== null`

**Further reading:**
- [Groovy Documentation - Null](https://groovy-lang.org/semantics.html#_null)

</TabItem>
<TabItem value="java" label="Java">

```java
// Nullable (all reference types can be null)
String findValue(String[] items, String target) {
    for (String item : items) {
        if (item.equals(target)) {
            return item;
        }
    }
    return null;
}

String result = findValue(new String[]{"a", "b", "c"}, "b");
if (result != null) {
    String value = result;
}
```

**Special features:**
- All reference types can be `null`
- No explicit nullable type syntax in the type system
- Check with `!= null` or `== null`

**Further reading:**
- [Oracle Java Documentation - Null](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Nullable (all types can be null or undefined)
function findValue(items, target) {
    for (const item of items) {
        if (item === target) {
            return item;
        }
    }
    return null;
}

const result = findValue(["a", "b", "c"], "b");
if (result !== null && result !== undefined) {
    const value = result;
}
```

**Special features:**
- All types can be `null` or `undefined`
- No explicit nullable type syntax
- Check with `!== null` and `!== undefined`

**Further reading:**
- [MDN Web Docs - null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/null)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Nullable Types
fun findValue(items: Array<String>, target: String): String? {
    for (item in items) {
        if (item == target) {
            return item
        }
    }
    return null
}

val result = findValue(arrayOf("a", "b", "c"), "b")
if (result != null) {
    val value = result
}
```

**Special features:**
- `T?` syntax for nullable types
- Non-nullable by default
- Smart casts after null checks

**Further reading:**
- [Kotlin Documentation - Null Safety](https://kotlinlang.org/docs/null-safety.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Nullable (all types can be nil)
function findValue(items, target)
    for _, item in ipairs(items) do
        if item == target then
            return item
        end
    end
    return nil
end

local result = findValue({"a", "b", "c"}, "b")
if result ~= nil then
    local value = result
end
```

**Special features:**
- All types can be `nil`
- No explicit nullable type syntax
- Check with `~= nil` or `== nil`

**Further reading:**
- [Lua Documentation - nil](https://www.lua.org/manual/5.4/manual.html#2.1)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Nullable Types: only ref types can be nil
type
  Node = ref object
    value: int
    next: Node  # can be nil

proc findNode(head: Node, target: int): Node =
  var current = head
  while current != nil:
    if current.value == target:
      return current
    current = current.next
  return nil

var head = Node(value: 1, next: Node(value: 2, next: nil))
let found = findNode(head, 2)
if found != nil:
  echo found.value
```

**Special features:**
- Only `ref` types and `ptr` types can be `nil`
- Value types (`object`, `string`, `int`, etc.) cannot be `nil`
- Check with `!= nil` or `== nil`
- `isNil()` procedure available for nil checking

**Further reading:**
- [Nim Documentation - Reference and Pointer Types](https://nim-lang.org/docs/manual.html#types-reference-and-pointer-types)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Nullable (all reference types can be nil)
NSString* findValue(NSArray<NSString*>* items, NSString* target) {
    for (NSString* item in items) {
        if ([item isEqualToString:target]) {
            return item;
        }
    }
    return nil;
}

NSString* result = findValue(@[@"a", @"b", @"c"], @"b");
if (result != nil) {
    NSString* value = result;
}
```

**Special features:**
- All reference types can be `nil`
- Nullable annotations (`_Nullable`, `_Nonnull`) since Objective-C 2.0
- Check with `!= nil` or `== nil`

**Further reading:**
- [Apple Documentation - Nullability](https://developer.apple.com/documentation/swift/objective-c-and-c-code-customization/nullability)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Nullable (all types can be undef)
sub find_value {
    my ($items, $target) = @_;
    for my $item (@$items) {
        if ($item eq $target) {
            return $item;
        }
    }
    return undef;
}

my $result = find_value(["a", "b", "c"], "b");
if (defined $result) {
    my $value = $result;
}
```

**Special features:**
- All types can be `undef`
- No explicit nullable type syntax
- Check with `defined` or `!defined`

**Further reading:**
- [Perl Documentation - undef](https://perldoc.perl.org/perldata#undef)

</TabItem>
<TabItem value="php" label="PHP">

```php
// Nullable Types (since PHP 7.1)
function findValue(array $items, string $target): ?string {
    foreach ($items as $item) {
        if ($item === $target) {
            return $item;
        }
    }
    return null;
}

$result = findValue(["a", "b", "c"], "b");
if ($result !== null) {
    $value = $result;
}
```

**Special features:**
- Nullable types were introduced in PHP 7.1
- `?T` syntax for nullable types
- Check with `!== null` or `=== null`

**Further reading:**
- [PHP Documentation - Nullable Types](https://www.php.net/manual/en/migration71.new-features.php#migration71.new-features.nullable-types)

</TabItem>
<TabItem value="python" label="Python">

```python
# Nullable (all types can be None)
def find_value(items: list[str], target: str) -> str | None:
    for item in items:
        if item == target:
            return item
    return None

result = find_value(["a", "b", "c"], "b")
if result is not None:
    value = result
```

**Special features:**
- All types can be `None`
- `T | None` or `Optional[T]` syntax (since Python 3.10)
- Check with `is not None` or `is None`

**Further reading:**
- [Python Documentation - None](https://docs.python.org/3/library/constants.html#None)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Nullable (all types can be nil)
def find_value(items, target)
  items.each do |item|
    if item == target
      return item
    end
  end
  nil
end

result = find_value(["a", "b", "c"], "b")
if result != nil
  value = result
end
```

**Special features:**
- All types can be `nil`
- No explicit nullable type syntax
- Check with `!= nil` or `== nil`

**Further reading:**
- [Ruby Documentation - nil](https://ruby-doc.org/core-3.1.2/NilClass.html)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Nullable Types
function findValue(items: string[], target: string): string | null {
    for (const item of items) {
        if (item === target) {
            return item;
        }
    }
    return null;
}

const result = findValue(["a", "b", "c"], "b");
if (result !== null) {
    const value = result;
}
```

**Special features:**
- `T | null | undefined` or `T?` syntax
- Union types for nullable types
- Strict null checks can be enabled

**Further reading:**
- [TypeScript Documentation - Null and Undefined](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#null-and-undefined)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Nullable Reference Types (since VB.NET 16.0)
Function findValue(items As String(), target As String) As String?
    For Each item In items
        If item = target Then
            Return item
        End If
    Next
    Return Nothing
End Function

Dim result As String? = findValue({"a", "b", "c"}, "b")
If result IsNot Nothing Then
    Dim value As String = result
End If
```

**Special features:**
- Nullable reference types were introduced in VB.NET 16.0
- `T?` syntax for nullable reference types
- Nullable value types (`Integer?`) have existed since VB.NET 2.0

**Further reading:**
- [Microsoft VB.NET Documentation - Nullable Reference Types](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/nullable-reference-types)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Nullable Types: ?T allows null
var name: ?[]const u8 = "Hallo";
name = null;  // Allowed, since ?[]const u8

var count: ?i32 = 42;
count = null;  // Allowed, since ?i32

// Non-nullable types do not allow null
// var value: i32 = null;  // Compile error!
```

**Special features:**
- `?T` makes any type nullable
- Regular types (without `?`) are non-nullable
- `null` is only allowed for optional types

**Further reading:**
- [Zig Documentation - Optionals](https://ziglang.org/documentation/master/#Optionals)

</TabItem>
</Tabs>


## 3.6.3. Non-nullable by Default

Types are not nullable by default. Null values must be explicitly allowed through nullable types or optionals. This prevents unintended null pointer exceptions at compile time.

### Languages {#sprachen}

<Tabs availableTabs={['csharp', 'dart', 'elm', 'fsharp', 'gleam', 'haskell', 'idris', 'koka', 'kotlin', 'lean4', 'mercury', 'nim', 'ocaml', 'purescript', 'roc', 'rust', 'swift', 'typescript', 'v', 'vbnet', 'zig']}>
<TabItem value="csharp" label="C#">

```csharp
// Non-nullable by Default (since C# 8.0 with nullable reference types)
string findValue(string[] items, string target) {
    foreach (var item in items) {
        if (item == target) {
            return item; // Non-nullable, cannot be null
        }
    }
    throw new ArgumentException("Not found");
}

string result = findValue(new[] { "a", "b", "c" }, "b");
// result is non-nullable, compiler guarantees this
```

**Special features:**
- Non-nullable by default was introduced in C# 8.0 with nullable reference types
- Reference types are non-nullable by default
- `T?` syntax for explicitly nullable types

**Further reading:**
- [Microsoft C# Documentation - Nullable Reference Types](https://learn.microsoft.com/en-us/dotnet/csharp/nullable-references)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Non-nullable by Default (since Dart 2.12)
String findValue(List<String> items, String target) {
  for (var item in items) {
    if (item == target) {
      return item; // Non-nullable, cannot be null
    }
  }
  throw ArgumentError("Not found");
}

String result = findValue(["a", "b", "c"], "b");
// result is non-nullable, compiler guarantees this
```

**Special features:**
- Non-nullable by default was introduced in Dart 2.12 with null safety
- All types are non-nullable by default
- `T?` syntax for explicitly nullable types

**Further reading:**
- [Dart Documentation - Null Safety](https://dart.dev/null-safety)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Non-nullable by Default (keine null-Werte)
findValue : List String -> String -> String
findValue items target =
    case List.head (List.filter (\item -> item == target) items) of
        Just value -> value
        Nothing -> "" -- Must be explicitly handled

result = findValue ["a", "b", "c"] "b"
-- result is non-nullable, cannot be null
```

**Special features:**
- No null values in the language
- Optionals (Maybe) must be explicitly used
- Compiler enforces handling of None cases

**Further reading:**
- [Elm Guide - Maybe](https://guide.elm-lang.org/error_handling/maybe.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Non-nullable by Default
let findValue (items: string list) target =
    match List.tryFind (fun item -> item = target) items with
    | Some value -> value
    | None -> failwith "Not found"

let result = findValue ["a"; "b"; "c"] "b"
// result is non-nullable, cannot be null
```

**Special features:**
- All types are non-nullable by default
- Option types must be explicitly used for nullable values
- Compiler enforces handling of None cases

**Further reading:**
- [F# Documentation - Options](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/options)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// Non-nullable by Default (keine null-Werte)
pub fn find_value(items: List(String), target: String) -> String {
  case items {
    [] -> ""
    [x, ..rest] -> case x == target {
      True -> x
      False -> find_value(rest, target)
    }
  }
}

let result = find_value(["a", "b", "c"], "b")
// result is non-nullable, cannot be null
```

**Special features:**
- No null values in the language
- Option types must be explicitly used
- Compiler enforces handling of None cases

**Further reading:**
- [Gleam Documentation - Option](https://hexdocs.pm/gleam_stdlib/gleam/option.html)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Non-nullable by Default (keine null-Werte)
findValue :: [String] -> String -> String
findValue items target =
    case find (== target) items of
        Just value -> value
        Nothing -> "" -- Must be explicitly handled

result = findValue ["a", "b", "c"] "b"
-- result is non-nullable, cannot be null
```

**Special features:**
- No null values in the language
- Maybe types must be explicitly used
- Compiler enforces handling of Nothing cases

**Further reading:**
- [Haskell Documentation - Maybe](https://hackage.haskell.org/package/base-4.19.0.0/docs/Data-Maybe.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Non-nullable by Default (keine null-Werte)
findValue : List String -> String -> String
findValue items target =
    case find (== target) items of
        Just value => value
        Nothing => "" -- Must be explicitly handled

result = findValue ["a", "b", "c"] "b"
-- result is non-nullable, cannot be null
```

**Special features:**
- No null values in the language
- Maybe types must be explicitly used
- Compiler enforces handling of Nothing cases with dependent types

**Further reading:**
- [Idris 2 Documentation - Types and Functions](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Non-nullable by Default
// Koka has no null — all types are always non-nullable
val name: string = "Alice"
val age: int = 30

// Optional values are explicitly modeled with maybe<a>
fun find-value(items: list<string>, target: string): maybe<string>
  match items
    Nil -> Nothing
    Cons(x, xs) -> if x == target then Just(x) else find-value(xs, target)

// Compiler enforces handling of all cases
val result = match find-value(["a", "b", "c"], "b")
  Just(v) -> v
  Nothing -> "default"
```

**Special features:**
- Null does not exist in Koka — all types are always non-nullable
- Optional values are explicitly represented by `maybe<a>`
- Pattern matching enforces complete handling of all cases
- No null pointer risk at runtime

**Further reading:**
- [Koka Standard Library - maybe](https://koka-lang.github.io/koka/doc/std_core_types.html#type-maybe)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Non-nullable by Default
fun findValue(items: Array<String>, target: String): String {
    for (item in items) {
        if (item == target) {
            return item // Non-nullable, cannot be null
        }
    }
    throw IllegalArgumentException("Not found")
}

val result = findValue(arrayOf("a", "b", "c"), "b")
// result is non-nullable, compiler guarantees this
```

**Special features:**
- All types are non-nullable by default
- `T?` syntax for explicitly nullable types
- Smart casts after null checks

**Further reading:**
- [Kotlin Documentation - Null Safety](https://kotlinlang.org/docs/null-safety.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Non-nullable by Default (no null values)
-- Lean 4 has no null — all types are always non-nullable
def name : String := "Alice"
def age : Nat := 30

-- Optional values are explicitly modeled with Option α
def findValue (items : List String) (target : String) : Option String :=
  items.find? (· == target)

-- Compiler enforces handling of all cases
def result : String := match findValue ["a", "b", "c"] "b" with
  | some v => v
  | none   => "default"
```

**Special features:**
- Null does not exist in Lean 4 — all types are always non-nullable
- Optional values are explicitly represented by `Option α`
- Pattern matching enforces complete handling of all cases
- No null pointer risk at runtime

**Further reading:**
- [Lean 4 Documentation - Option](https://leanprover-community.github.io/mathlib4_docs/Init/Prelude.html#Option)

</TabItem>
<TabItem value="mercury" label="Mercury">

```mercury
% Non-nullable by Default: All types are always non-nullable
% Mercury has no null — every value must be initialized.
:- pred main(io::di, io::uo) is det.
main(!IO) :-
    Name = "Alice",        % Always non-nullable
    Age = 30,              % Always non-nullable

    % Optional values are explicitly modeled with maybe(T)
    MaybeValue = find_value([1, 2, 3], 2),
    (
        MaybeValue = yes(V),
        io.write_string("Found: ", !IO),
        io.write_int(V, !IO), io.nl(!IO)
    ;
        MaybeValue = no,
        io.write_string("Not found", !IO), io.nl(!IO)
    ),

    io.write_string(Name, !IO), io.nl(!IO),
    io.write_int(Age, !IO), io.nl(!IO).

:- func find_value(list(int), int) = maybe(int).
find_value([], _) = no.
find_value([H | T], Target) =
    ( if H = Target then yes(H) else find_value(T, Target) ).
```

**Special features:**
- Null does not exist in Mercury — all types are always non-nullable.
- Optional values are explicitly represented by `maybe(T)`.
- Pattern matching enforces complete handling of all cases (exhaustiveness checking).
- No null pointer risk at runtime, since there are no pointers.

**Further reading:**
- [The Mercury Language Reference Manual - Data Types](https://www.mercurylang.org/documentation/reference.html#Data_types)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Non-nullable by Default *)
let find_value items target =
  match List.find_opt (fun item -> item = target) items with
  | Some value -> value
  | None -> failwith "Not found"

let result = find_value ["a"; "b"; "c"] "b"
(* result is non-nullable, cannot be null *)
```

**Special features:**
- All types are non-nullable by default
- Option types must be explicitly used for nullable values
- Compiler enforces handling of None cases

**Further reading:**
- [OCaml Documentation - Option](https://v2.ocaml.org/api/Option.html)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Non-nullable by Default (keine null-Werte)
findValue :: Array String -> String -> String
findValue items target =
    case find (_ == target) items of
        Just value -> value
        Nothing -> "" -- Must be explicitly handled

result = findValue ["a", "b", "c"] "b"
-- result is non-nullable, cannot be null
```

**Special features:**
- No null values in the language
- Maybe types must be explicitly used
- Compiler enforces handling of Nothing cases

**Further reading:**
- [PureScript Documentation - Maybe](https://pursuit.purescript.org/packages/purescript-maybe/4.0.1/docs/Data.Maybe)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Non-nullable by Default (no null values)
name : Str
name = "Hallo"

-- Missing values are explicitly modeled through tag unions
findUser : Str -> [Found { name : Str }, NotFound]
findUser = \query ->
    if query == "admin" then
        Found { name: "Admin" }
    else
        NotFound
```

**Special features:**
- No null values in the language
- Missing values are explicitly modeled through tag unions
- Compiler enforces handling of all cases

**Further reading:**
- [Roc Documentation - Tags](https://www.roc-lang.org/tutorial#tags)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Non-nullable by Default (keine null-Werte)
fn find_value(items: &[String], target: &str) -> String {
    items.iter()
        .find(|item| item == target)
        .map(|s| s.clone())
        .unwrap_or_else(|| String::from(""))
}

let result = find_value(&[String::from("a"), String::from("b"), String::from("c")], "b");
// result is non-nullable, cannot be null
```

**Special features:**
- No null values in the language
- `Option&lt;T&gt;` must be explicitly used
- Zero-cost abstraction, no runtime overhead

**Further reading:**
- [Rust Documentation - Option](https://doc.rust-lang.org/std/option/enum.Option.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Non-nullable by Default
func findValue(items: [String], target: String) -> String {
    for item in items {
        if item == target {
            return item // Non-nullable, cannot be null
        }
    }
    fatalError("Not found")
}

let result = findValue(items: ["a", "b", "c"], target: "b")
// result is non-nullable, compiler guarantees this
```

**Special features:**
- All types are non-nullable by default
- `T?` syntax for explicitly optional/nullable types
- Optional binding and optional chaining for nullable values

**Further reading:**
- [Swift Documentation - Optionals](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/thebasics/#Optionals)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Non-nullable by Default (mit strict null checks)
function findValue(items: string[], target: string): string {
    for (const item of items) {
        if (item === target) {
            return item; // Non-nullable, cannot be null
        }
    }
    throw new Error("Not found");
}

const result = findValue(["a", "b", "c"], "b");
// result is non-nullable, compiler guarantees this (mit strict null checks)
```

**Special features:**
- Non-nullable by default with `strictNullChecks` compiler option
- Types are non-nullable by default
- `T | null | undefined` or `T?` for explicitly nullable types

**Further reading:**
- [TypeScript Documentation - Strict Null Checks](https://www.typescriptlang.org/tsconfig#strictNullChecks)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Non-nullable by Default (since VB.NET 16.0)
Function findValue(items As String(), target As String) As String
    For Each item In items
        If item = target Then
            Return item ' Non-nullable, cannot be null
        End If
    Next
    Throw New ArgumentException("Not found")
End Function

Dim result As String = findValue({"a", "b", "c"}, "b")
' result is non-nullable, compiler guarantees this
```

**Special features:**
- Non-nullable by default was introduced in VB.NET 16.0 with nullable reference types
- Reference types are non-nullable by default
- `T?` syntax for explicitly nullable types

**Further reading:**
- [Microsoft VB.NET Documentation - Nullable Reference Types](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/nullable-reference-types)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Non-nullable by Default (keine null-Werte)
fn findValue(items: []const []const u8, target: []const u8) []const u8 {
    for (items) |item| {
        if (std.mem.eql(u8, item, target)) {
            return item; // Non-nullable, cannot be null
        }
    }
    return ""; // Must be explicitly handled
}

const result = findValue(&[_][]const u8{"a", "b", "c"}, "b");
// result is non-nullable, cannot be null
```

**Special features:**
- No null values in the language
- Optionals must be explicitly used
- Pointers can be null, but not by default

**Further reading:**
- [Zig Documentation - Optionals](https://ziglang.org/documentation/0.11.0/#Optionals)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Non-nullable by Default: Value types cannot be nil
var x: int = 42        # cannot be nil
var s: string = "hello" # cannot be nil
var arr: seq[int] = @[] # cannot be nil

# Only ref types can be nil
type Node = ref object
  value: int

var node: Node = nil  # allowed: ref type
# var y: int = nil     # Error: int cannot be nil
```

**Special features:**
- Value types (`int`, `string`, `object`, etc.) are non-nullable by default
- Only `ref` types and `ptr` types can be `nil`
- Since Nim 2.0: `--experimental:strictNotNil` for strict nil checking

**Further reading:**
- [Nim Documentation - Nil](https://nim-lang.org/docs/manual.html#types-reference-and-pointer-types)

</TabItem>
<TabItem value="v" label="V">

```v
// Non-nullable by Default
name := 'Alice'       // Cannot be null
age := 42             // Cannot be null

// Optional values must be explicitly marked
fn find(id int) ?string {
    if id == 1 {
        return 'Alice'
    }
    return none
}
```

**Special features:**
- All variables are non-nullable by default
- Optional types must be explicitly marked with `?`
- No `null`/`nil` in normal code

**Further reading:**
- [V Documentation - Optionals](https://github.com/vlang/v/blob/master/doc/docs.md#optionsresult)

</TabItem>
</Tabs>

