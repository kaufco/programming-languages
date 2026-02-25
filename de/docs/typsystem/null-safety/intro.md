---
slug: /typsystem/null-safety
title: 3.6. Null Safety
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 3.6. Null Safety

Mechanismen zur Behandlung von Null-Werten und Optionals.

## 3.6.1. Optionals / Maybe Types

Typen, die einen Wert oder "nichts" (None/Nothing) repräsentieren können. Implementiert als Sum Types mit expliziten Konstruktoren wie `Some(value)` und `None`.

### Sprachen {#sprachen}

<Tabs availableTabs={['d', 'elm', 'fsharp', 'gleam', 'haskell', 'idris', 'java', 'koka', 'lean4', 'mercury', 'nim', 'ocaml', 'purescript', 'rust', 'scala', 'swift', 'v', 'zig']} orangeTabs={['racket', 'roc']}>
<TabItem value="d" label="D">

```d
// Optional (seit D 2.0)
// Benötigt: import std.typecons;
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

**Besonderheiten:**
- Verwendet `Nullable!T` aus `std.typecons`
- `Nullable!T.init` repräsentiert den None-Zustand
- Prüfung mit `isNull` Property

**Weiterführende Links:**
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

**Besonderheiten:**
- `Maybe a` ist ein eingebauter Sum Type
- Pattern Matching mit `Just` und `Nothing`
- Type-safe, keine null-Werte

**Weiterführende Links:**
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

**Besonderheiten:**
- `'a option` ist ein eingebauter Sum Type
- Pattern Matching mit `Some` und `None`
- `List.tryFind` gibt `Option` zurück

**Weiterführende Links:**
- [F# Documentation - Options](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/options)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// Option Type (aus gleam/option)
// Benötigt: import gleam/option.{type Option, Some, None}
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

**Besonderheiten:**
- `Option(a)` ist ein Typ aus `gleam/option` mit den Varianten `Some(a)` und `None`
- Pattern Matching mit `Some` und `None`
- Typ-sicher, keine null-Werte

**Weiterführende Links:**
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

**Besonderheiten:**
- `Maybe a` ist ein eingebauter Sum Type
- Pattern Matching mit `Just` und `Nothing`
- `find` aus `Data.List` gibt `Maybe` zurück

**Weiterführende Links:**
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

**Besonderheiten:**
- `Maybe a` ist ein eingebauter Sum Type
- Pattern Matching mit `Just` und `Nothing`
- Type-safe mit abhängigen Typen

**Weiterführende Links:**
- [Idris 2 Documentation - Types and Functions](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Optional (seit Java 8)
// Benötigt: import java.util.Optional;
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

// Funktionale Verwendung
String value = result.orElse("default");
result.ifPresent(v -> System.out.println(v));
```

**Besonderheiten:**
- `Optional<T>` wurde in Java 8 eingeführt
- Prüfung mit `isPresent()`, Zugriff mit `get()`
- Funktionale API: `orElse()`, `ifPresent()`, `map()`, `flatMap()`
- `Optional` ist ein Wrapper-Typ, nicht Teil des Typsystems

**Weiterführende Links:**
- [Oracle Java Documentation - Optional](https://docs.oracle.com/javase/8/docs/api/java/util/Optional.html)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Maybe Type (eingebaut)
fun find-value(items: list<int>, target: int): maybe<int>
  match items
    Nil -> Nothing
    Cons(x, xs) -> if x == target then Just(x) else find-value(xs, target)

// Verwendung
val result = find-value([1, 2, 3], 2)

val value = match result
  Just(v) -> v
  Nothing -> 0  // Fallback
```

**Besonderheiten:**
- `maybe<a>` ist ein eingebauter algebraischer Datentyp mit `Just(a)` und `Nothing`
- Null existiert nicht in Koka — `maybe` ist der einzige Weg, optionale Werte darzustellen
- Pattern Matching mit `match` für sicheren Zugriff
- Funktionale Kombinatoren wie `map`, `default` verfügbar

**Weiterführende Links:**
- [Koka Standard Library - maybe](https://koka-lang.github.io/koka/doc/std_core_types.html#type-maybe)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Option Type (eingebaut)
def findValue (items : List Int) (target : Int) : Option Int :=
  items.find? (· == target)

-- Verwendung
def result := findValue [1, 2, 3] 2

-- Pattern Matching
def value := match result with
  | some v => v
  | none   => 0

-- Funktionale Kombinatoren
def mapped := result.map (· * 2)        -- some 4
def fallback := result.getD 0           -- 2 (Default-Wert)
def chained := result.bind (fun v => if v > 0 then some v else none)
```

**Besonderheiten:**
- `Option α` ist ein eingebauter induktiver Typ mit `some` und `none`
- Null existiert nicht in Lean 4 — `Option` ist der einzige Weg, optionale Werte darzustellen
- Funktionale Kombinatoren: `map`, `bind`, `getD`, `orElse`
- Pattern Matching erzwingt Behandlung aller Fälle

**Weiterführende Links:**
- [Lean 4 Documentation - Option](https://leanprover-community.github.io/mathlib4_docs/Init/Prelude.html#Option)

</TabItem>
<TabItem value="mercury" label="Mercury">

```mercury
% Optionals: maybe(T) Typ aus der Standardbibliothek
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

    % Verwendung mit Hilfsprädikaten
    MappedResult = maybe.map((func(V) = V * 2), Result),
    Default = maybe.from_maybe(0, Result).
```

**Besonderheiten:**
- `maybe(T)` ist der eingebaute Option-Typ mit den Konstruktoren `yes(T)` und `no`.
- Mercury hat kein null-Konzept — `maybe(T)` ist der einzige Weg, optionale Werte darzustellen.
- Pattern Matching erzwingt die Behandlung beider Fälle (`yes` und `no`).
- Das `maybe`-Modul bietet Hilfsfunktionen wie `map`, `from_maybe`, `fold_maybe`.

**Weiterführende Links:**
- [The Mercury Standard Library - maybe](https://www.mercurylang.org/information/doc-release/mercury_library/maybe.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Option Type
# Benötigt: import options
proc findValue(items: seq[int], target: int): Option[int] =
  for item in items:
    if item == target:
      return some(item)
  return none(int)

let result = findValue(@[1, 2, 3], 2)
if result.isSome:
  let value = result.get()
```

**Besonderheiten:**
- `Option[T]` aus `options` Modul
- `some()` und `none()` Konstruktoren
- Prüfung mit `isSome`, Zugriff mit `get()`

**Weiterführende Links:**
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

**Besonderheiten:**
- `'a option` ist ein eingebauter Sum Type
- Pattern Matching mit `Some` und `None`
- `List.find_opt` gibt `option` zurück

**Weiterführende Links:**
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

**Besonderheiten:**
- `Maybe a` ist ein eingebauter Sum Type
- Pattern Matching mit `Just` und `Nothing`
- Type-safe, keine null-Werte

**Weiterführende Links:**
- [PureScript Documentation - Maybe](https://pursuit.purescript.org/packages/purescript-maybe/4.0.1/docs/Data.Maybe)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
; Optional-ähnliches Verhalten mit #f als None
(define (find-value items target)
  (for/or ([item items])
    (and (= item target) item)))

; Verwendung
(define result (find-value '(1 2 3) 2))
(if result
    (printf "Gefunden: ~a\n" result)
    (printf "Nicht gefunden\n"))
```

**Besonderheiten:**
- Kein eingebauter Option/Maybe-Typ
- Konvention: `#f` wird als "nicht vorhanden" verwendet
- `for/or` gibt den ersten truthy Wert oder `#f` zurück

**Weiterführende Links:**
- [Racket Documentation - Booleans](https://docs.racket-lang.org/reference/booleans.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Optional Type als Tag Union
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

**Besonderheiten:**
- Keine eingebauten Optional/Maybe Types
- Tag Unions werden als Optional-Ersatz verwendet
- Compiler erzwingt Behandlung aller Fälle

**Weiterführende Links:**
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

**Besonderheiten:**
- `Option&lt;T&gt;` ist ein eingebauter Sum Type
- Pattern Matching mit `Some` und `None`
- Zero-cost Abstraktion, keine Runtime-Overhead

**Weiterführende Links:**
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

**Besonderheiten:**
- `Option[T]` ist ein eingebauter Sum Type
- Pattern Matching mit `Some` und `None`
- `List.find` gibt `Option` zurück

**Weiterführende Links:**
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
    // value ist hier unwrapped
}
```

**Besonderheiten:**
- `Optional&lt;T&gt;` (oder `T?`) ist ein eingebauter Sum Type
- Optional Binding mit `if let`
- Optional Chaining mit `?` Operator

**Weiterführende Links:**
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
    println('Nicht gefunden')
}
```

**Besonderheiten:**
- `?Type` kennzeichnet optionale Rückgabewerte
- `none` repräsentiert das Fehlen eines Wertes
- `or { }` Block für Fallback-Werte
- `if`-Unwrapping für sichere Verwendung

**Weiterführende Links:**
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
    return null;  // Kein Ergebnis gefunden
}

// Verwendung
const items = [_][]const u8{ "Apfel", "Banane", "Kirsche" };
const result = findIndex(&items, "Banane");

// Sicheres Unwrapping mit if
if (result) |index| {
    std.debug.print("Gefunden bei Index: {}\n", .{index});
} else {
    std.debug.print("Nicht gefunden\n", .{});
}

// Default-Wert mit orelse
const index = result orelse 0;
```

**Besonderheiten:**
- `?T` ist der Optional-Typ (z.B. `?i32`, `?usize`)
- `null` ist der Abwesenheitswert
- Sicheres Unwrapping mit `if (optional) |value|`
- Default-Wert mit `orelse`
- Unsicheres Unwrapping mit `.?` (Panic bei null)

**Weiterführende Links:**
- [Zig Documentation - Optionals](https://ziglang.org/documentation/master/#Optionals)

</TabItem>
</Tabs>


## 3.6.2. Nullable Types

Typen, die explizit `null` oder `undefined` als Wert erlauben. Im Gegensatz zu Optionals/Maybe Types sind Nullable Types direkte Erweiterungen des Basistyps, die null/undefined als zusätzlichen Wert zulassen.

### Sprachen {#sprachen}

<Tabs availableTabs={['c', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'groovy', 'java', 'javascript', 'kotlin', 'lua', 'nim', 'objective-c', 'perl', 'php', 'python', 'ruby', 'typescript', 'vbnet', 'zig']}>
<TabItem value="c" label="C">

```c
// Nullable (Pointer können NULL sein)
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

**Besonderheiten:**
- Pointer können `NULL` sein
- Keine explizite Nullable-Type-Syntax, nur Pointer-Semantik
- Prüfung mit `!= NULL` oder `== NULL`

**Weiterführende Links:**
- [C Standard - Pointers](https://en.cppreference.com/w/c/language/pointer)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Nullable Reference Types (seit C# 8.0)
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

**Besonderheiten:**
- Nullable Reference Types wurden in C# 8.0 eingeführt
- `T?` Syntax für nullable reference types
- Nullable Value Types (`int?`) existieren seit C# 2.0

**Weiterführende Links:**
- [Microsoft C# Documentation - Nullable Reference Types](https://learn.microsoft.com/en-us/dotnet/csharp/nullable-references)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Nullable (Pointer können nullptr sein)
// Benötigt: #include <vector>
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

**Besonderheiten:**
- Pointer können `nullptr` sein (seit C++11)
- `NULL` Makro ist veraltet, `nullptr` wird bevorzugt
- Keine explizite Nullable-Type-Syntax, nur Pointer-Semantik

**Weiterführende Links:**
- [cppreference.com - nullptr](https://en.cppreference.com/w/cpp/language/nullptr)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Nullable (Referenztypen können nil sein)
def find_value(items : Array(String), target : String) : String?
  items.find { |item| item == target }
end

result = find_value(["a", "b", "c"], "b")
if result
  value = result
end
```

**Besonderheiten:**
- `T?` Syntax für nullable types
- Alle Referenztypen können `nil` sein
- Prüfung mit `if` oder `if !result.nil?`

**Weiterführende Links:**
- [Crystal Documentation - Nil](https://crystal-lang.org/reference/1.11/syntax_and_semantics/nil.html)

</TabItem>
<TabItem value="d" label="D">

```d
// Nullable (Referenztypen können null sein)
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

**Besonderheiten:**
- Referenztypen können `null` sein
- Prüfung mit `!is null` oder `is null`
- Keine explizite Nullable-Type-Syntax

**Weiterführende Links:**
- [D Language Specification - Null](https://dlang.org/spec/expression.html#null)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Nullable Types (seit Dart 2.12)
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

**Besonderheiten:**
- Nullable Types wurden in Dart 2.12 eingeführt
- `T?` Syntax für nullable types
- Null Safety ist standardmäßig aktiviert

**Weiterführende Links:**
- [Dart Documentation - Null Safety](https://dart.dev/null-safety)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Nullable (alle Referenztypen können null sein)
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

**Besonderheiten:**
- Alle Referenztypen können `null` sein
- Keine explizite Nullable-Type-Syntax
- Prüfung mit `!= null` oder `== null`

**Weiterführende Links:**
- [Groovy Documentation - Null](https://groovy-lang.org/semantics.html#_null)

</TabItem>
<TabItem value="java" label="Java">

```java
// Nullable (alle Referenztypen können null sein)
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

**Besonderheiten:**
- Alle Referenztypen können `null` sein
- Keine explizite Nullable-Type-Syntax im Typsystem
- Prüfung mit `!= null` oder `== null`

**Weiterführende Links:**
- [Oracle Java Documentation - Null](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Nullable (alle Typen können null oder undefined sein)
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

**Besonderheiten:**
- Alle Typen können `null` oder `undefined` sein
- Keine explizite Nullable-Type-Syntax
- Prüfung mit `!== null` und `!== undefined`

**Weiterführende Links:**
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

**Besonderheiten:**
- `T?` Syntax für nullable types
- Non-nullable by default
- Smart Casts nach null-Checks

**Weiterführende Links:**
- [Kotlin Documentation - Null Safety](https://kotlinlang.org/docs/null-safety.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Nullable (alle Typen können nil sein)
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

**Besonderheiten:**
- Alle Typen können `nil` sein
- Keine explizite Nullable-Type-Syntax
- Prüfung mit `~= nil` oder `== nil`

**Weiterführende Links:**
- [Lua Documentation - nil](https://www.lua.org/manual/5.4/manual.html#2.1)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Nullable Types: nur ref-Typen können nil sein
type
  Node = ref object
    value: int
    next: Node  # kann nil sein

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

**Besonderheiten:**
- Nur `ref`-Typen und `ptr`-Typen können `nil` sein
- Value-Typen (`object`, `string`, `int`, etc.) können nicht `nil` sein
- Prüfung mit `!= nil` oder `== nil`
- `isNil()` Prozedur für nil-Prüfung verfügbar

**Weiterführende Links:**
- [Nim Documentation - Reference and Pointer Types](https://nim-lang.org/docs/manual.html#types-reference-and-pointer-types)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Nullable (alle Referenztypen können nil sein)
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

**Besonderheiten:**
- Alle Referenztypen können `nil` sein
- Nullable Annotations (`_Nullable`, `_Nonnull`) seit Objective-C 2.0
- Prüfung mit `!= nil` oder `== nil`

**Weiterführende Links:**
- [Apple Documentation - Nullability](https://developer.apple.com/documentation/swift/objective-c-and-c-code-customization/nullability)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Nullable (alle Typen können undef sein)
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

**Besonderheiten:**
- Alle Typen können `undef` sein
- Keine explizite Nullable-Type-Syntax
- Prüfung mit `defined` oder `!defined`

**Weiterführende Links:**
- [Perl Documentation - undef](https://perldoc.perl.org/perldata#undef)

</TabItem>
<TabItem value="php" label="PHP">

```php
// Nullable Types (seit PHP 7.1)
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

**Besonderheiten:**
- Nullable Types wurden in PHP 7.1 eingeführt
- `?T` Syntax für nullable types
- Prüfung mit `!== null` oder `=== null`

**Weiterführende Links:**
- [PHP Documentation - Nullable Types](https://www.php.net/manual/en/migration71.new-features.php#migration71.new-features.nullable-types)

</TabItem>
<TabItem value="python" label="Python">

```python
# Nullable (alle Typen können None sein)
def find_value(items: list[str], target: str) -> str | None:
    for item in items:
        if item == target:
            return item
    return None

result = find_value(["a", "b", "c"], "b")
if result is not None:
    value = result
```

**Besonderheiten:**
- Alle Typen können `None` sein
- `T | None` oder `Optional[T]` Syntax (seit Python 3.10)
- Prüfung mit `is not None` oder `is None`

**Weiterführende Links:**
- [Python Documentation - None](https://docs.python.org/3/library/constants.html#None)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Nullable (alle Typen können nil sein)
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

**Besonderheiten:**
- Alle Typen können `nil` sein
- Keine explizite Nullable-Type-Syntax
- Prüfung mit `!= nil` oder `== nil`

**Weiterführende Links:**
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

**Besonderheiten:**
- `T | null | undefined` oder `T?` Syntax
- Union Types für nullable types
- Strict Null Checks können aktiviert werden

**Weiterführende Links:**
- [TypeScript Documentation - Null and Undefined](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#null-and-undefined)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Nullable Reference Types (seit VB.NET 16.0)
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

**Besonderheiten:**
- Nullable Reference Types wurden in VB.NET 16.0 eingeführt
- `T?` Syntax für nullable reference types
- Nullable Value Types (`Integer?`) existieren seit VB.NET 2.0

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Nullable Reference Types](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/nullable-reference-types)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Nullable Types: ?T erlaubt null
var name: ?[]const u8 = "Hallo";
name = null;  // Erlaubt, da ?[]const u8

var count: ?i32 = 42;
count = null;  // Erlaubt, da ?i32

// Nicht-nullable Typen erlauben kein null
// var value: i32 = null;  // Kompilierfehler!
```

**Besonderheiten:**
- `?T` macht jeden Typ nullable
- Reguläre Typen (ohne `?`) sind non-nullable
- `null` ist nur für Optional-Typen erlaubt

**Weiterführende Links:**
- [Zig Documentation - Optionals](https://ziglang.org/documentation/master/#Optionals)

</TabItem>
</Tabs>


## 3.6.3. Non-nullable by Default

Typen sind standardmäßig nicht null-fähig. Null-Werte müssen explizit durch nullable Types oder Optionals erlaubt werden. Dies verhindert unbeabsichtigte Null-Pointer-Exceptions zur Compile-Zeit.

### Sprachen {#sprachen}

<Tabs availableTabs={['csharp', 'dart', 'elm', 'fsharp', 'gleam', 'haskell', 'idris', 'koka', 'kotlin', 'lean4', 'mercury', 'nim', 'ocaml', 'purescript', 'roc', 'rust', 'swift', 'typescript', 'v', 'vbnet', 'zig']}>
<TabItem value="csharp" label="C#">

```csharp
// Non-nullable by Default (seit C# 8.0 mit nullable reference types)
string findValue(string[] items, string target) {
    foreach (var item in items) {
        if (item == target) {
            return item; // Non-nullable, kann nicht null sein
        }
    }
    throw new ArgumentException("Not found");
}

string result = findValue(new[] { "a", "b", "c" }, "b");
// result ist non-nullable, Compiler garantiert dies
```

**Besonderheiten:**
- Non-nullable by Default wurde in C# 8.0 mit nullable reference types eingeführt
- Standardmäßig sind Referenztypen non-nullable
- `T?` Syntax für explizit nullable Types

**Weiterführende Links:**
- [Microsoft C# Documentation - Nullable Reference Types](https://learn.microsoft.com/en-us/dotnet/csharp/nullable-references)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Non-nullable by Default (seit Dart 2.12)
String findValue(List<String> items, String target) {
  for (var item in items) {
    if (item == target) {
      return item; // Non-nullable, kann nicht null sein
    }
  }
  throw ArgumentError("Not found");
}

String result = findValue(["a", "b", "c"], "b");
// result ist non-nullable, Compiler garantiert dies
```

**Besonderheiten:**
- Non-nullable by Default wurde in Dart 2.12 mit Null Safety eingeführt
- Standardmäßig sind alle Typen non-nullable
- `T?` Syntax für explizit nullable Types

**Weiterführende Links:**
- [Dart Documentation - Null Safety](https://dart.dev/null-safety)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Non-nullable by Default (keine null-Werte)
findValue : List String -> String -> String
findValue items target =
    case List.head (List.filter (\item -> item == target) items) of
        Just value -> value
        Nothing -> "" -- Muss explizit behandelt werden

result = findValue ["a", "b", "c"] "b"
-- result ist non-nullable, kann nicht null sein
```

**Besonderheiten:**
- Keine null-Werte in der Sprache
- Optionals (Maybe) müssen explizit verwendet werden
- Compiler erzwingt Behandlung von None-Fällen

**Weiterführende Links:**
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
// result ist non-nullable, kann nicht null sein
```

**Besonderheiten:**
- Standardmäßig sind alle Typen non-nullable
- Option Types müssen explizit verwendet werden für nullable Werte
- Compiler erzwingt Behandlung von None-Fällen

**Weiterführende Links:**
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
// result ist non-nullable, kann nicht null sein
```

**Besonderheiten:**
- Keine null-Werte in der Sprache
- Option Types müssen explizit verwendet werden
- Compiler erzwingt Behandlung von None-Fällen

**Weiterführende Links:**
- [Gleam Documentation - Option](https://hexdocs.pm/gleam_stdlib/gleam/option.html)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Non-nullable by Default (keine null-Werte)
findValue :: [String] -> String -> String
findValue items target =
    case find (== target) items of
        Just value -> value
        Nothing -> "" -- Muss explizit behandelt werden

result = findValue ["a", "b", "c"] "b"
-- result ist non-nullable, kann nicht null sein
```

**Besonderheiten:**
- Keine null-Werte in der Sprache
- Maybe Types müssen explizit verwendet werden
- Compiler erzwingt Behandlung von Nothing-Fällen

**Weiterführende Links:**
- [Haskell Documentation - Maybe](https://hackage.haskell.org/package/base-4.19.0.0/docs/Data-Maybe.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Non-nullable by Default (keine null-Werte)
findValue : List String -> String -> String
findValue items target =
    case find (== target) items of
        Just value => value
        Nothing => "" -- Muss explizit behandelt werden

result = findValue ["a", "b", "c"] "b"
-- result ist non-nullable, kann nicht null sein
```

**Besonderheiten:**
- Keine null-Werte in der Sprache
- Maybe Types müssen explizit verwendet werden
- Compiler erzwingt Behandlung von Nothing-Fällen mit abhängigen Typen

**Weiterführende Links:**
- [Idris 2 Documentation - Types and Functions](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Non-nullable by Default
// Koka hat kein null — alle Typen sind immer non-nullable
val name: string = "Alice"
val age: int = 30

// Optionale Werte werden explizit mit maybe<a> modelliert
fun find-value(items: list<string>, target: string): maybe<string>
  match items
    Nil -> Nothing
    Cons(x, xs) -> if x == target then Just(x) else find-value(xs, target)

// Compiler erzwingt Behandlung aller Fälle
val result = match find-value(["a", "b", "c"], "b")
  Just(v) -> v
  Nothing -> "default"
```

**Besonderheiten:**
- Null existiert nicht in Koka — alle Typen sind immer non-nullable
- Optionale Werte werden explizit durch `maybe<a>` dargestellt
- Pattern Matching erzwingt vollständige Behandlung aller Fälle
- Kein Null-Pointer-Risiko zur Laufzeit

**Weiterführende Links:**
- [Koka Standard Library - maybe](https://koka-lang.github.io/koka/doc/std_core_types.html#type-maybe)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Non-nullable by Default
fun findValue(items: Array<String>, target: String): String {
    for (item in items) {
        if (item == target) {
            return item // Non-nullable, kann nicht null sein
        }
    }
    throw IllegalArgumentException("Not found")
}

val result = findValue(arrayOf("a", "b", "c"), "b")
// result ist non-nullable, Compiler garantiert dies
```

**Besonderheiten:**
- Standardmäßig sind alle Typen non-nullable
- `T?` Syntax für explizit nullable Types
- Smart Casts nach null-Checks

**Weiterführende Links:**
- [Kotlin Documentation - Null Safety](https://kotlinlang.org/docs/null-safety.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Non-nullable by Default (keine null-Werte)
-- Lean 4 hat kein null — alle Typen sind immer non-nullable
def name : String := "Alice"
def age : Nat := 30

-- Optionale Werte werden explizit mit Option α modelliert
def findValue (items : List String) (target : String) : Option String :=
  items.find? (· == target)

-- Compiler erzwingt Behandlung aller Fälle
def result : String := match findValue ["a", "b", "c"] "b" with
  | some v => v
  | none   => "default"
```

**Besonderheiten:**
- Null existiert nicht in Lean 4 — alle Typen sind immer non-nullable
- Optionale Werte werden explizit durch `Option α` dargestellt
- Pattern Matching erzwingt vollständige Behandlung aller Fälle
- Kein Null-Pointer-Risiko zur Laufzeit

**Weiterführende Links:**
- [Lean 4 Documentation - Option](https://leanprover-community.github.io/mathlib4_docs/Init/Prelude.html#Option)

</TabItem>
<TabItem value="mercury" label="Mercury">

```mercury
% Non-nullable by Default: Alle Typen sind immer non-nullable
% Mercury hat kein null — jeder Wert muss initialisiert sein.
:- pred main(io::di, io::uo) is det.
main(!IO) :-
    Name = "Alice",        % Immer non-nullable
    Age = 30,              % Immer non-nullable

    % Optionale Werte werden explizit mit maybe(T) modelliert
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

**Besonderheiten:**
- Null existiert nicht in Mercury — alle Typen sind immer non-nullable.
- Optionale Werte werden explizit durch `maybe(T)` dargestellt.
- Pattern Matching erzwingt vollständige Behandlung aller Fälle (Exhaustiveness Checking).
- Kein Null-Pointer-Risiko zur Laufzeit, da es keine Pointer gibt.

**Weiterführende Links:**
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
(* result ist non-nullable, kann nicht null sein *)
```

**Besonderheiten:**
- Standardmäßig sind alle Typen non-nullable
- Option Types müssen explizit verwendet werden für nullable Werte
- Compiler erzwingt Behandlung von None-Fällen

**Weiterführende Links:**
- [OCaml Documentation - Option](https://v2.ocaml.org/api/Option.html)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Non-nullable by Default (keine null-Werte)
findValue :: Array String -> String -> String
findValue items target =
    case find (_ == target) items of
        Just value -> value
        Nothing -> "" -- Muss explizit behandelt werden

result = findValue ["a", "b", "c"] "b"
-- result ist non-nullable, kann nicht null sein
```

**Besonderheiten:**
- Keine null-Werte in der Sprache
- Maybe Types müssen explizit verwendet werden
- Compiler erzwingt Behandlung von Nothing-Fällen

**Weiterführende Links:**
- [PureScript Documentation - Maybe](https://pursuit.purescript.org/packages/purescript-maybe/4.0.1/docs/Data.Maybe)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Non-nullable by Default (keine null-Werte)
name : Str
name = "Hallo"

-- Fehlende Werte werden explizit durch Tag Unions modelliert
findUser : Str -> [Found { name : Str }, NotFound]
findUser = \query ->
    if query == "admin" then
        Found { name: "Admin" }
    else
        NotFound
```

**Besonderheiten:**
- Keine null-Werte in der Sprache
- Fehlende Werte werden durch Tag Unions explizit modelliert
- Compiler erzwingt Behandlung aller Fälle

**Weiterführende Links:**
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
// result ist non-nullable, kann nicht null sein
```

**Besonderheiten:**
- Keine null-Werte in der Sprache
- `Option&lt;T&gt;` muss explizit verwendet werden
- Zero-cost Abstraktion, keine Runtime-Overhead

**Weiterführende Links:**
- [Rust Documentation - Option](https://doc.rust-lang.org/std/option/enum.Option.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Non-nullable by Default
func findValue(items: [String], target: String) -> String {
    for item in items {
        if item == target {
            return item // Non-nullable, kann nicht null sein
        }
    }
    fatalError("Not found")
}

let result = findValue(items: ["a", "b", "c"], target: "b")
// result ist non-nullable, Compiler garantiert dies
```

**Besonderheiten:**
- Standardmäßig sind alle Typen non-nullable
- `T?` Syntax für explizit optional/nullable Types
- Optional Binding und Optional Chaining für nullable Werte

**Weiterführende Links:**
- [Swift Documentation - Optionals](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/thebasics/#Optionals)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Non-nullable by Default (mit strict null checks)
function findValue(items: string[], target: string): string {
    for (const item of items) {
        if (item === target) {
            return item; // Non-nullable, kann nicht null sein
        }
    }
    throw new Error("Not found");
}

const result = findValue(["a", "b", "c"], "b");
// result ist non-nullable, Compiler garantiert dies (mit strict null checks)
```

**Besonderheiten:**
- Non-nullable by Default mit `strictNullChecks` Compiler-Option
- Standardmäßig sind Typen non-nullable
- `T | null | undefined` oder `T?` für explizit nullable Types

**Weiterführende Links:**
- [TypeScript Documentation - Strict Null Checks](https://www.typescriptlang.org/tsconfig#strictNullChecks)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Non-nullable by Default (seit VB.NET 16.0)
Function findValue(items As String(), target As String) As String
    For Each item In items
        If item = target Then
            Return item ' Non-nullable, kann nicht null sein
        End If
    Next
    Throw New ArgumentException("Not found")
End Function

Dim result As String = findValue({"a", "b", "c"}, "b")
' result ist non-nullable, Compiler garantiert dies
```

**Besonderheiten:**
- Non-nullable by Default wurde in VB.NET 16.0 mit nullable reference types eingeführt
- Standardmäßig sind Referenztypen non-nullable
- `T?` Syntax für explizit nullable Types

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Nullable Reference Types](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/nullable-reference-types)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Non-nullable by Default (keine null-Werte)
fn findValue(items: []const []const u8, target: []const u8) []const u8 {
    for (items) |item| {
        if (std.mem.eql(u8, item, target)) {
            return item; // Non-nullable, kann nicht null sein
        }
    }
    return ""; // Muss explizit behandelt werden
}

const result = findValue(&[_][]const u8{"a", "b", "c"}, "b");
// result ist non-nullable, kann nicht null sein
```

**Besonderheiten:**
- Keine null-Werte in der Sprache
- Optionals müssen explizit verwendet werden
- Pointer können null sein, aber nicht standardmäßig

**Weiterführende Links:**
- [Zig Documentation - Optionals](https://ziglang.org/documentation/0.11.0/#Optionals)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Non-nullable by Default: Value-Typen können nicht nil sein
var x: int = 42        # kann nicht nil sein
var s: string = "hello" # kann nicht nil sein
var arr: seq[int] = @[] # kann nicht nil sein

# Nur ref-Typen können nil sein
type Node = ref object
  value: int

var node: Node = nil  # erlaubt: ref-Typ
# var y: int = nil     # Fehler: int kann nicht nil sein
```

**Besonderheiten:**
- Value-Typen (`int`, `string`, `object`, etc.) sind non-nullable by default
- Nur `ref`-Typen und `ptr`-Typen können `nil` sein
- Seit Nim 2.0: `--experimental:strictNotNil` für strikte nil-Prüfung

**Weiterführende Links:**
- [Nim Documentation - Nil](https://nim-lang.org/docs/manual.html#types-reference-and-pointer-types)

</TabItem>
<TabItem value="v" label="V">

```v
// Non-nullable by Default
name := 'Alice'       // Kann nicht null sein
age := 42             // Kann nicht null sein

// Optionale Werte müssen explizit markiert werden
fn find(id int) ?string {
    if id == 1 {
        return 'Alice'
    }
    return none
}
```

**Besonderheiten:**
- Alle Variablen sind standardmäßig non-nullable
- Optionale Typen müssen explizit mit `?` markiert werden
- Kein `null`/`nil` im normalen Code

**Weiterführende Links:**
- [V Documentation - Optionals](https://github.com/vlang/v/blob/master/doc/docs.md#optionsresult)

</TabItem>
</Tabs>

