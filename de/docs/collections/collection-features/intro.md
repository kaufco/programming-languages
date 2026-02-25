---
slug: /collections/collection-features
title: 10.3. Collection Features
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 10.3. Collection Features

Zusätzliche Features von Collections.

## 10.3.1. Immutable Collections

Collections, die nach ihrer Erstellung nicht mehr verändert werden können. Operationen wie Hinzufügen oder Entfernen von Elementen erstellen neue Collections statt die bestehende zu modifizieren.

### Sprachen {#sprachen}

<Tabs availableTabs={['clojure', 'csharp', 'elixir', 'elm', 'erlang', 'fsharp', 'gleam', 'groovy', 'haskell', 'idris', 'java', 'koka', 'kotlin', 'lean4', 'mercury', 'objective-c', 'purescript', 'racket', 'roc', 'rust', 'scala', 'scheme', 'swift']}>
<TabItem value="clojure" label="Clojure">

```clojure
;; Collections sind immutable by default
(def items [10 20 30])
(def items2 (conj items 40))

;; Zugriff
(def first-item (first items))
```

**Besonderheiten:**
- Alle Collections sind immutable by default
- Operationen erstellen neue Collections (strukturelles Teilen)
- Persistent data structures für effiziente Kopien

**Weiterführende Links:**
- [Clojure Documentation - Collections](https://clojure.org/reference/data_structures)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// ImmutableList (seit .NET Framework 4.5)
// Benötigt: using System.Collections.Immutable;
var items = ImmutableList<int>.Empty.Add(10).Add(20).Add(30);
var items2 = items.Add(40);

// ImmutableArray
var array = ImmutableArray.Create(10, 20, 30);
var array2 = array.Add(40);
```

**Besonderheiten:**
- `ImmutableList` und `ImmutableArray` seit .NET Framework 4.5
- Operationen erstellen neue Collections
- Thread-safe durch Design

**Weiterführende Links:**
- [Microsoft .NET Documentation - Immutable Collections](https://learn.microsoft.com/en-us/dotnet/api/system.collections.immutable)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Listen sind immutable
items = [10, 20, 30]
items2 = [40 | items]

# Zugriff
first_item = List.first(items)
```

**Besonderheiten:**
- Alle Collections sind immutable
- Pattern matching für Zugriff
- Funktionale Programmierung

**Weiterführende Links:**
- [Elixir Documentation - Lists](https://hexdocs.pm/elixir/List.html)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Listen sind immutable
items = [10, 20, 30]
items2 = 40 :: items

-- Zugriff
firstItem = List.head items
```

**Besonderheiten:**
- Alle Collections sind immutable
- `::` für Prepend
- Funktionale Programmierung

**Weiterführende Links:**
- [Elm Documentation - List](https://package.elm-lang.org/packages/elm/core/latest/List)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% Listen sind immutable
Items = [10, 20, 30],
Items2 = [40 | Items],

% Zugriff
FirstItem = hd(Items).
```

**Besonderheiten:**
- Alle Collections sind immutable
- Pattern matching für Zugriff
- Funktionale Programmierung

**Weiterführende Links:**
- [Erlang Documentation - Lists](https://www.erlang.org/doc/man/erlang.html#hd-1)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Listen sind immutable
let items = [10; 20; 30]
let items2 = 40 :: items

// Zugriff
let firstItem = List.head items
```

**Besonderheiten:**
- Listen sind immutable by default
- `::` für Prepend
- Funktionale Programmierung

**Weiterführende Links:**
- [F# Documentation - Lists](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/lists)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// Listen sind immutable
let items = [10, 20, 30]
let items2 = [40, ..items]

// Zugriff
let first_item = list.first(items)
```

**Besonderheiten:**
- Alle Collections sind immutable
- Spread-Syntax für Konkatenation
- Funktionale Programmierung

**Weiterführende Links:**
- [Gleam Documentation - Lists](https://gleam.run/documentation/gleam/list/)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Listen sind immutable
items = [10, 20, 30]
items2 = 40 : items

-- Zugriff
firstItem = head items
```

**Besonderheiten:**
- Alle Collections sind immutable
- `:` für Prepend
- Funktionale Programmierung

**Weiterführende Links:**
- [Haskell Documentation - Lists](https://www.haskell.org/onlinereport/haskell2010/haskellch3.html#x8-420003.7)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Listen sind immutable
items : List Int
items = [10, 20, 30]
items2 = 40 :: items

-- Zugriff
firstItem : Maybe Int
firstItem = head' items
```

**Besonderheiten:**
- Alle Collections sind immutable
- `::` für Prepend
- Dependent types

**Weiterführende Links:**
- [Idris 2 Documentation - Types and Functions](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
// Listen sind immutable by default
val items = [10, 20, 30]
val items2 = Cons(40, items)

// Zugriff
val first-item = items.head
```

**Besonderheiten:**
- Alle Collections sind immutable by default
- `Cons` für Prepend, `++` für Konkatenation
- Koka nutzt Perceus Reference Counting für effiziente funktionale Updates (FBIP)

**Weiterführende Links:**
- [Koka Standard Library - list](https://koka-lang.github.io/koka/doc/std_core_list.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// ImmutableList (seit Java 9)
List<Integer> items = List.of(10, 20, 30);
// items.add(40); // UnsupportedOperationException

// Guava ImmutableList
// Benötigt: com.google.common.collect.ImmutableList
// ImmutableList<Integer> items = ImmutableList.of(10, 20, 30);
```

**Besonderheiten:**
- `List.of()` erstellt immutable Listen (seit Java 9)
- Guava bietet `ImmutableList` für ältere Versionen
- Operationen werfen `UnsupportedOperationException`

**Weiterführende Links:**
- [Oracle Java Documentation - List.of()](https://docs.oracle.com/javase/9/docs/api/java/util/List.html#of--)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// List ist immutable
val items = listOf(10, 20, 30)
val items2 = items + 40

// Zugriff
val firstItem = items.first()
```

**Besonderheiten:**
- `List` ist immutable by default
- `+` Operator erstellt neue Liste
- `MutableList` für mutable Collections

**Weiterführende Links:**
- [Kotlin Documentation - Collections](https://kotlinlang.org/docs/collections-overview.html)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Listen sind immutable
let items = [10, 20, 30]
let items2 = items <> [40]

-- Zugriff
let firstItem = head items
```

**Besonderheiten:**
- Alle Collections sind immutable
- `<>` für Konkatenation
- Funktionale Programmierung

**Weiterführende Links:**
- [PureScript Documentation - Lists](https://pursuit.purescript.org/packages/purescript-lists)

</TabItem>
<TabItem value="roc" label="Roc">

```roc
# Listen sind immutable
items = [10, 20, 30]
items2 = List.append items 40

# Zugriff
firstItem = List.first items
```

**Besonderheiten:**
- Alle Collections sind immutable
- `List.append`, `List.concat` für neue Listen
- Funktionale Programmierung

**Weiterführende Links:**
- [Roc Documentation - Lists](https://www.roc-lang.org/builtins/List)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Arc für immutable shared ownership
use std::sync::Arc;
let items = Arc::new(vec![10, 20, 30]);
let items2 = items.clone();

// Rc für single-threaded immutable sharing
use std::rc::Rc;
let items_rc = Rc::new(vec![10, 20, 30]);
let items2_rc = items_rc.clone();
```

**Besonderheiten:**
- `Arc` für thread-safe immutable sharing
- `Rc` für single-threaded immutable sharing
- Collections selbst sind normalerweise mutable, aber Ownership kann geteilt werden

**Weiterführende Links:**
- [Rust Documentation - Arc](https://doc.rust-lang.org/std/sync/struct.Arc.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// List ist immutable
val items = List(10, 20, 30)
val items2 = items :+ 40

// Zugriff
val firstItem = items.head
```

**Besonderheiten:**
- `List` ist immutable by default
- `:+` für Append (erstellt neue Liste)
- `mutable.ListBuffer` für mutable Listen

**Weiterführende Links:**
- [Scala Documentation - Lists](https://docs.scala-lang.org/overviews/collections-2.13/lists.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; Listen sind immutable
(define items (list 10 20 30))
(define items2 (cons 40 items))

;; Zugriff
(define first-item (car items))
```

**Besonderheiten:**
- Listen sind immutable Linked Lists
- `cons` für Konstruktion
- Funktionale Programmierung

**Weiterführende Links:**
- [R7RS Scheme - Lists](https://small.r7rs.org/attachment/r7rs.pdf)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
;; Listen sind immutable
(define items (list 10 20 30))
(define items2 (cons 40 items))

;; Zugriff
(define first-item (first items))
```

**Besonderheiten:**
- Listen sind immutable Linked Lists
- `cons` für Konstruktion
- Funktionale Programmierung

**Weiterführende Links:**
- [Racket Documentation - Lists](https://docs.racket-lang.org/reference/pairs.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Arrays mit let sind immutable
let items = [10, 20, 30]
// items.append(40) // Compiler-Fehler

// Neue Collection erstellen
let items2 = items + [40]
```

**Besonderheiten:**
- Arrays mit `let` sind immutable
- `var` erlaubt Mutation
- Value semantics

**Weiterführende Links:**
- [Swift Documentation - Arrays](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/collectiontypes/#Arrays)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Immutable Collections
def mutableList = [10, 20, 30]
def immutableList = mutableList.asImmutable()

// immutableList << 40 // UnsupportedOperationException
// immutableList[0] = 15 // UnsupportedOperationException

// Immutable Map
def immutableMap = [a: 1, b: 2].asImmutable()

// Immutable Set
def immutableSet = ([1, 2, 3] as Set).asImmutable()
```

**Besonderheiten:**
- `.asImmutable()` erstellt unveränderbare Kopie
- Änderungsversuche werfen `UnsupportedOperationException`
- Auch `Collections.unmodifiableList()` etc. verfügbar (Java-Interop)

**Weiterführende Links:**
- [Groovy Documentation - Collections](https://groovy-lang.org/groovy-dev-kit.html#_working_with_collections)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Listen sind immutable by default
def items : List Nat := [10, 20, 30]
def items2 : List Nat := 40 :: items
-- items = [10, 20, 30] (unverändert)
-- items2 = [40, 10, 20, 30]

-- Array (immutable, kopiert bei Modifikation)
def arr : Array Nat := #[10, 20, 30]
def arr2 : Array Nat := arr.push 40
-- arr = #[10, 20, 30] (unverändert)

-- Zugriff
def firstItem : Option Nat := items.head?
```

**Besonderheiten:**
- Alle Collections (`List`, `Array`) sind standardmäßig immutable
- Operationen wie `push`, `::` erstellen neue Collections
- Der Compiler optimiert bei eindeutiger Referenz zu In-Place-Updates
- Keine separaten immutable/mutable Varianten nötig

**Weiterführende Links:**
- [Lean 4 Documentation - List](https://lean-lang.org/lean4/doc/data_types.html)
- [Lean 4 Documentation - Array](https://lean-lang.org/lean4/doc/array.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Listen sind immutable by default
Items = [10, 20, 30],
Items2 = [40 | Items],
% Items  = [10, 20, 30]      (unverändert)
% Items2 = [40, 10, 20, 30]  (neue Version)

% Zugriff
FirstItem = list.det_head(Items)
```

**Besonderheiten:**
- Alle Datenstrukturen (Listen, Maps, Sets) sind immutable by default
- Rein deklarative Sprache – Mutation ist konzeptionell ausgeschlossen
- `[H | T]`-Syntax für Cons-Operation (Prepend)
- Operationen erstellen neue Collections mit Structural Sharing

**Weiterführende Links:**
- [Mercury Standard Library - list](https://www.mercurylang.org/information/doc-release/mercury_library/list.html)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Immutable Collections
NSArray *array = @[@1, @2, @3];
NSDictionary *dict = @{@"key": @"value"};
NSSet *set = [NSSet setWithObjects:@"A", @"B", nil];

// Keine Modifikation möglich
// [array addObject:@4]; // Compile-Error: NSArray hat kein addObject:
```

**Besonderheiten:**
- `NSArray`, `NSDictionary`, `NSSet` sind standardmäßig immutable
- Immutability wird zur Compile-Zeit erzwungen
- Mutable Varianten: `NSMutableArray`, `NSMutableDictionary`, `NSMutableSet`
- `copy` erstellt eine immutable Kopie

**Weiterführende Links:**
- [Apple Documentation - Collections](https://developer.apple.com/documentation/foundation/collections)

</TabItem>
</Tabs>


## 10.3.2. Mutable Collections

Collections, die nach ihrer Erstellung verändert werden können. Elemente können hinzugefügt, entfernt oder modifiziert werden, ohne dass eine neue Collection erstellt werden muss.

### Sprachen {#sprachen}

<Tabs availableTabs={['ada', 'c', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'go', 'groovy', 'haxe', 'java', 'javascript', 'julia', 'kotlin', 'lua', 'matlab', 'nim', 'object-pascal', 'objective-c', 'ocaml', 'octave', 'odin', 'perl', 'php', 'python', 'r', 'ruby', 'rust', 'scala', 'swift', 'typescript', 'v', 'vbnet', 'wolfram-language']} yellowTabs={['mercury']}>
<TabItem value="ada" label="Ada">

```ada
-- Arrays sind mutable
Numbers : array (1 .. 5) of Integer := (10, 20, 30, 40, 50);
Numbers(1) := 15;
```

**Besonderheiten:**
- Arrays sind mutable
- Index-basiert
- Typsicher

**Weiterführende Links:**
- [Ada Documentation - Arrays](https://learn.adacore.com/courses/intro-to-ada/chapters/arrays.html)

</TabItem>
<TabItem value="c" label="C">

```c
// Arrays sind mutable
int numbers[] = {10, 20, 30, 40, 50};
numbers[0] = 15;
```

**Besonderheiten:**
- Arrays sind mutable
- Index-basiert
- Keine Bounds-Checking

**Weiterführende Links:**
- [C Standard Documentation](https://www.open-std.org/jtc1/sc22/wg14/www/docs/n1570.pdf)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// List ist mutable
List<int> items = new List<int> { 10, 20, 30 };
items.Add(40);
items[0] = 15;
```

**Besonderheiten:**
- `List<T>` ist mutable
- Dynamische Größe
- Generics für Typsicherheit

**Weiterführende Links:**
- [Microsoft C# Documentation - List](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// std::vector ist mutable
std::vector<int> items = {10, 20, 30};
items.push_back(40);
items[0] = 15;
```

**Besonderheiten:**
- `std::vector` ist mutable
- Dynamische Größe
- Template-basiert

**Weiterführende Links:**
- [cppreference.com - std::vector](https://en.cppreference.com/w/cpp/container/vector)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Arrays sind mutable
items = [10, 20, 30]
items << 40
items[0] = 15
```

**Besonderheiten:**
- Arrays sind mutable
- Dynamische Größe
- `<<` für Append

**Weiterführende Links:**
- [Crystal Documentation - Arrays](https://crystal-lang.org/reference/1.9/syntax_and_semantics/literals/array.html)

</TabItem>
<TabItem value="d" label="D">

```d
// Arrays sind mutable
int[] items = [10, 20, 30];
items ~= 40;
items[0] = 15;
```

**Besonderheiten:**
- Arrays sind mutable
- `~=` für Append
- Dynamische Größe

**Weiterführende Links:**
- [D Documentation - Arrays](https://dlang.org/spec/arrays.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// List ist mutable
List<int> items = [10, 20, 30];
items.add(40);
items[0] = 15;
```

**Besonderheiten:**
- `List` ist mutable
- Dynamische Größe
- `add` für Hinzufügen

**Weiterführende Links:**
- [Dart Documentation - Lists](https://dart.dev/guides/libraries/library-tour#lists)

</TabItem>
<TabItem value="go" label="Go">

```go
// Slices sind mutable
items := []int{10, 20, 30}
items = append(items, 40)
items[0] = 15
```

**Besonderheiten:**
- Slices sind mutable
- `append` erstellt neuen Slice wenn nötig
- Dynamische Größe

**Weiterführende Links:**
- [Go Documentation - Slices](https://go.dev/blog/slices-intro)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Lists sind mutable
def items = [10, 20, 30]
items << 40
items[0] = 15
```

**Besonderheiten:**
- Lists sind mutable
- Dynamische Größe
- `<<` für Append

**Weiterführende Links:**
- [Groovy Documentation - Lists](https://groovy-lang.org/groovy-dev-kit.html#_working_with_collections)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Arrays sind mutable
var items = [10, 20, 30];
items.push(40);
items[0] = 15;
```

**Besonderheiten:**
- Arrays sind mutable
- Dynamische Größe
- `push` für Hinzufügen

**Weiterführende Links:**
- [Haxe Documentation - Arrays](https://haxe.org/manual/std-Array.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// ArrayList ist mutable
List<Integer> items = new ArrayList<>();
items.add(10);
items.add(20);
items.add(30);
items.add(40);
items.set(0, 15);
```

**Besonderheiten:**
- `ArrayList` ist mutable
- Dynamische Größe
- Generics für Typsicherheit

**Weiterführende Links:**
- [Oracle Java Documentation - ArrayList](https://docs.oracle.com/javase/8/docs/api/java/util/ArrayList.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Arrays sind mutable
const items = [10, 20, 30];
items.push(40);
items[0] = 15;
```

**Besonderheiten:**
- Arrays sind mutable
- Dynamische Größe
- `push` für Hinzufügen

**Weiterführende Links:**
- [MDN Web Docs - Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Arrays sind mutable
items = [10, 20, 30]
push!(items, 40)
items[1] = 15
```

**Besonderheiten:**
- Arrays sind mutable
- Dynamische Größe
- `push!` für Hinzufügen (mutating)

**Weiterführende Links:**
- [Julia Documentation - Arrays](https://docs.julialang.org/en/v1/manual/arrays/)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// MutableList ist mutable
val items = mutableListOf(10, 20, 30)
items.add(40)
items[0] = 15
```

**Besonderheiten:**
- `MutableList` ist mutable
- `List` ist immutable
- Dynamische Größe

**Weiterführende Links:**
- [Kotlin Documentation - Collections](https://kotlinlang.org/docs/collections-overview.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Tabellen sind mutable
items = {10, 20, 30}
table.insert(items, 40)
items[1] = 15
```

**Besonderheiten:**
- Tabellen sind mutable
- Dynamische Größe
- `table.insert` für Hinzufügen

**Weiterführende Links:**
- [Lua Documentation - Tables](https://www.lua.org/manual/5.4/manual.html#2.1)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% Arrays sind mutable
items = [10, 20, 30];
items(end+1) = 40;
items(1) = 15;
```

**Besonderheiten:**
- Arrays sind mutable
- 1-basierte Indizierung
- Dynamische Größe

**Weiterführende Links:**
- [MATLAB Documentation - Arrays](https://www.mathworks.com/help/matlab/learn_matlab/arrays.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Benötigt: :- import_module array.
% Arrays unterstützen destructive Update (unique modes)
Array0 = array.from_list([10, 20, 30]),
array.set(0, 15, Array0, Array1),
Value = array.lookup(Array1, 0)   % Value = 15
```

**Besonderheiten:**
- Nur `array` unterstützt Mutation (über unique modes `di`/`uo`)
- Listen, Maps und Sets sind ausschließlich immutable
- Destructive Update wird durch das Mode-System des Compilers garantiert
- Mutation nur innerhalb von Prädikaten mit korrekten Unique-Mode-Deklarationen

**Weiterführende Links:**
- [Mercury Standard Library - array](https://www.mercurylang.org/information/doc-release/mercury_library/array.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Sequences sind mutable
var items = @[10, 20, 30]
items.add(40)
items[0] = 15
```

**Besonderheiten:**
- Sequences sind mutable
- Dynamische Größe
- `add` für Hinzufügen

**Weiterführende Links:**
- [Nim Documentation - Sequences](https://nim-lang.org/docs/seqs.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Arrays sind mutable
var
  items: array[0..2] of Integer = (10, 20, 30);
begin
  items[0] := 15;
end;
```

**Besonderheiten:**
- Arrays sind mutable
- Feste oder dynamische Größe
- Typsicher

**Weiterführende Links:**
- [Object Pascal Documentation](https://www.freepascal.org/docs-html/ref/refsu14.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Arrays sind mutable *)
let items = [|10; 20; 30|] in
items.(0) <- 15;
```

**Besonderheiten:**
- Arrays sind mutable
- Listen sind immutable
- `.(index)` für Zugriff

**Weiterführende Links:**
- [OCaml Documentation - Arrays](https://v2.ocaml.org/api/Array.html)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
% Arrays sind mutable
items = [10, 20, 30];
items(end+1) = 40;
items(1) = 15;
```

**Besonderheiten:**
- Arrays sind mutable
- 1-basierte Indizierung
- Dynamische Größe

**Weiterführende Links:**
- [Octave Documentation - Arrays](https://octave.org/doc/v8.1.0/Array-Objects.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Dynamic Arrays sind mutable
items := [dynamic]int{10, 20, 30}
append(&items, 40)
items[0] = 15
```

**Besonderheiten:**
- Dynamic Arrays sind mutable
- `append` für Hinzufügen
- Memory-Management

**Weiterführende Links:**
- [Odin Documentation - Arrays](https://odin-lang.org/docs/overview/#arrays)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Arrays sind mutable
my @items = (10, 20, 30);
push @items, 40;
$items[0] = 15;
```

**Besonderheiten:**
- Arrays sind mutable
- Dynamische Größe
- `push` für Hinzufügen

**Weiterführende Links:**
- [Perl Documentation - Arrays](https://perldoc.perl.org/perldata#Arrays)

</TabItem>
<TabItem value="php" label="PHP">

```php
// Arrays sind mutable
$items = [10, 20, 30];
$items[] = 40;
$items[0] = 15;
```

**Besonderheiten:**
- Arrays sind mutable
- Dynamische Größe
- `[]` für Hinzufügen

**Weiterführende Links:**
- [PHP Documentation - Arrays](https://www.php.net/manual/en/language.types.array.php)

</TabItem>
<TabItem value="python" label="Python">

```python
# Listen sind mutable
items = [10, 20, 30]
items.append(40)
items[0] = 15
```

**Besonderheiten:**
- Listen sind mutable
- Dynamische Größe
- `append` für Hinzufügen

**Weiterführende Links:**
- [Python Documentation - Lists](https://docs.python.org/3/tutorial/datastructures.html#more-on-lists)

</TabItem>
<TabItem value="r" label="R">

```r
# Vektoren sind mutable
items <- c(10, 20, 30)
items <- c(items, 40)
items[1] <- 15
```

**Besonderheiten:**
- Vektoren sind mutable
- 1-basierte Indizierung
- `c()` für Konkatenation

**Weiterführende Links:**
- [R Documentation - Vectors](https://cran.r-project.org/doc/manuals/r-release/R-intro.html#Vectors-and-assignment)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Arrays sind mutable
items = [10, 20, 30]
items << 40
items[0] = 15
```

**Besonderheiten:**
- Arrays sind mutable
- Dynamische Größe
- `<<` für Append

**Weiterführende Links:**
- [Ruby Documentation - Arrays](https://ruby-doc.org/core-3.1.0/Array.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Vec ist mutable
let mut items = vec![10, 20, 30];
items.push(40);
items[0] = 15;
```

**Besonderheiten:**
- `Vec` ist mutable mit `mut`
- Dynamische Größe
- Ownership-basiert

**Weiterführende Links:**
- [Rust Documentation - Vec](https://doc.rust-lang.org/std/vec/struct.Vec.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// mutable.ListBuffer ist mutable
import scala.collection.mutable.ListBuffer
val items = ListBuffer(10, 20, 30)
items += 40
items(0) = 15
```

**Besonderheiten:**
- `mutable.ListBuffer` ist mutable
- `List` ist immutable
- `+=` für Hinzufügen

**Weiterführende Links:**
- [Scala Documentation - Collections](https://docs.scala-lang.org/overviews/collections-2.13/introduction.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Arrays mit var sind mutable
var items = [10, 20, 30]
items.append(40)
items[0] = 15
```

**Besonderheiten:**
- Arrays mit `var` sind mutable
- `let` erstellt immutable Arrays
- Value semantics

**Weiterführende Links:**
- [Swift Documentation - Arrays](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/collectiontypes/#Arrays)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Arrays sind mutable
const items: number[] = [10, 20, 30];
items.push(40);
items[0] = 15;
```

**Besonderheiten:**
- Arrays sind mutable
- Dynamische Größe
- Type annotations optional

**Weiterführende Links:**
- [TypeScript Handbook - Arrays](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' List ist mutable
Dim items As New List(Of Integer) From {10, 20, 30}
items.Add(40)
items(0) = 15
```

**Besonderheiten:**
- `List(Of T)` ist mutable
- Dynamische Größe
- Generics für Typsicherheit

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - List](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1)

</TabItem>
<TabItem value="v" label="V">

```v
// Arrays sind mutable
mut items := [10, 20, 30]
items << 40
items[0] = 15
```

**Besonderheiten:**
- Arrays sind mutable mit `mut`
- Dynamische Größe
- `<<` für Append

**Weiterführende Links:**
- [V Documentation - Arrays](https://github.com/vlang/v/blob/master/doc/docs.md#arrays)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```wolfram
(* Lists sind mutable *)
items = {10, 20, 30};
AppendTo[items, 40];
items[[1]] = 15;
```

**Besonderheiten:**
- Lists sind mutable
- 1-basierte Indizierung
- `AppendTo` für Mutation

**Weiterführende Links:**
- [Wolfram Language Documentation - Lists](https://reference.wolfram.com/language/guide/Lists.html)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Mutable Collections
NSMutableArray *array = [NSMutableArray arrayWithObjects:@1, @2, @3, nil];
[array addObject:@4];
[array removeObjectAtIndex:0];

NSMutableDictionary *dict = [NSMutableDictionary dictionary];
dict[@"key"] = @"value";

NSMutableSet *set = [NSMutableSet set];
[set addObject:@"A"];
```

**Besonderheiten:**
- `NSMutableArray`, `NSMutableDictionary`, `NSMutableSet` für mutable Collections
- Erben von den immutable Basisklassen
- `mutableCopy` erstellt eine mutable Kopie einer immutable Collection

**Weiterführende Links:**
- [Apple Documentation - NSMutableArray](https://developer.apple.com/documentation/foundation/nsmutablearray)

</TabItem>
</Tabs>


## 10.3.3. Sequenced Collections

Collections, die eine definierte Reihenfolge der Elemente garantieren. Im Gegensatz zu ungeordneten Collections (wie Sets) behalten sequenced Collections die Einfügungsreihenfolge oder eine andere definierte Ordnung bei.

### Sprachen {#sprachen}

<Tabs availableTabs={['csharp', 'clojure', 'dart', 'go', 'groovy', 'java', 'javascript', 'kotlin', 'lua', 'python', 'ruby', 'rust', 'scala', 'swift', 'typescript']}>
<TabItem value="csharp" label="C#">

```csharp
// LinkedHashSet behält Einfügungsreihenfolge (seit .NET 6)
// Benötigt: using System.Collections.Generic;
var items = new LinkedHashSet<int> { 10, 20, 30 };
items.Add(40);

// LinkedDictionary behält Einfügungsreihenfolge
var dict = new Dictionary<int, string>();
dict.Add(1, "Erstes");
dict.Add(2, "Zweites");
// Reihenfolge wird beibehalten
```

**Besonderheiten:**
- `LinkedHashSet` behält Einfügungsreihenfolge (seit .NET 6)
- `Dictionary` behält Einfügungsreihenfolge seit .NET Core 2.0
- Reihenfolge wird bei Iteration beibehalten

**Weiterführende Links:**
- [Microsoft .NET Documentation - LinkedHashSet](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.linkedhashset-1)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Vektoren behalten Einfügungsreihenfolge
(def items [10 20 30])
(def first-item (nth items 0))

;; Listen behalten Einfügungsreihenfolge
(def list-items '(10 20 30))

;; Sorted Sets behalten sortierte Reihenfolge
(def sorted (sorted-set 30 10 20))  ; #{10 20 30}
```

**Besonderheiten:**
- Vektoren und Listen sind sequenced Collections (Einfügungsreihenfolge)
- `sorted-set` für sortierte Reihenfolge
- Persistent data structures

**Weiterführende Links:**
- [Clojure Documentation - Collections](https://clojure.org/reference/data_structures)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// LinkedHashSet behält Einfügungsreihenfolge
var items = LinkedHashSet<int>();
items.add(10);
items.add(20);
items.add(30);

// LinkedHashMap behält Einfügungsreihenfolge
var map = LinkedHashMap<int, String>();
map[1] = "Erstes";
map[2] = "Zweites";
```

**Besonderheiten:**
- `LinkedHashSet` behält Einfügungsreihenfolge
- `LinkedHashMap` behält Einfügungsreihenfolge
- Reihenfolge wird bei Iteration beibehalten

**Weiterführende Links:**
- [Dart Documentation - LinkedHashSet](https://api.dart.dev/stable/dart-collection/LinkedHashSet-class.html)

</TabItem>
<TabItem value="go" label="Go">

```go
// Maps behalten Einfügungsreihenfolge seit Go 1.12
items := make(map[int]string)
items[1] = "Erstes"
items[2] = "Zweites"
// Reihenfolge wird bei Iteration beibehalten
```

**Besonderheiten:**
- Maps behalten Einfügungsreihenfolge seit Go 1.12
- Reihenfolge wird bei Iteration beibehalten
- Slices sind immer sequenced

**Weiterführende Links:**
- [Go Documentation - Maps](https://go.dev/blog/maps)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// LinkedHashSet behält Einfügungsreihenfolge
def items = new LinkedHashSet([10, 20, 30])
items.add(40)

// LinkedHashMap behält Einfügungsreihenfolge
def map = new LinkedHashMap()
map[1] = "Erstes"
map[2] = "Zweites"
```

**Besonderheiten:**
- `LinkedHashSet` behält Einfügungsreihenfolge
- `LinkedHashMap` behält Einfügungsreihenfolge
- Reihenfolge wird bei Iteration beibehalten

**Weiterführende Links:**
- [Groovy Documentation - Collections](https://groovy-lang.org/groovy-dev-kit.html#_working_with_collections)

</TabItem>
<TabItem value="java" label="Java">

```java
// LinkedHashSet behält Einfügungsreihenfolge
Set<Integer> items = new LinkedHashSet<>();
items.add(10);
items.add(20);
items.add(30);

// LinkedHashMap behält Einfügungsreihenfolge
Map<Integer, String> map = new LinkedHashMap<>();
map.put(1, "Erstes");
map.put(2, "Zweites");
```

**Besonderheiten:**
- `LinkedHashSet` behält Einfügungsreihenfolge
- `LinkedHashMap` behält Einfügungsreihenfolge
- Reihenfolge wird bei Iteration beibehalten

**Weiterführende Links:**
- [Oracle Java Documentation - LinkedHashSet](https://docs.oracle.com/javase/8/docs/api/java/util/LinkedHashSet.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Map behält Einfügungsreihenfolge
const map = new Map();
map.set(1, "Erstes");
map.set(2, "Zweites");
// Reihenfolge wird bei Iteration beibehalten

// Set behält Einfügungsreihenfolge
const set = new Set([10, 20, 30]);
set.add(40);
```

**Besonderheiten:**
- `Map` behält Einfügungsreihenfolge (seit ES6)
- `Set` behält Einfügungsreihenfolge (seit ES6)
- Arrays sind immer sequenced

**Weiterführende Links:**
- [MDN Web Docs - Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// LinkedHashSet behält Einfügungsreihenfolge
val items = linkedSetOf(10, 20, 30)
items.add(40)

// LinkedHashMap behält Einfügungsreihenfolge
val map = linkedMapOf(1 to "Erstes", 2 to "Zweites")
```

**Besonderheiten:**
- `linkedSetOf` behält Einfügungsreihenfolge
- `linkedMapOf` behält Einfügungsreihenfolge
- Reihenfolge wird bei Iteration beibehalten

**Weiterführende Links:**
- [Kotlin Documentation - Collections](https://kotlinlang.org/docs/collections-overview.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Tabellen behalten Einfügungsreihenfolge (seit Lua 5.4)
local items = {}
items[1] = "Erstes"
items[2] = "Zweites"
-- Reihenfolge wird bei Iteration beibehalten
```

**Besonderheiten:**
- Tabellen behalten Einfügungsreihenfolge seit Lua 5.4
- Reihenfolge wird bei Iteration beibehalten
- Arrays sind immer sequenced

**Weiterführende Links:**
- [Lua Documentation - Tables](https://www.lua.org/manual/5.4/manual.html#2.1)

</TabItem>
<TabItem value="python" label="Python">

```python
# OrderedDict behält Einfügungsreihenfolge
from collections import OrderedDict
items = OrderedDict()
items[1] = "Erstes"
items[2] = "Zweites"

# dict behält Einfügungsreihenfolge seit Python 3.7
items2 = {1: "Erstes", 2: "Zweites"}
```

**Besonderheiten:**
- `OrderedDict` behält Einfügungsreihenfolge (seit Python 2.7)
- `dict` behält Einfügungsreihenfolge seit Python 3.7
- Listen sind immer sequenced

**Weiterführende Links:**
- [Python Documentation - OrderedDict](https://docs.python.org/3/library/collections.html#collections.OrderedDict)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Hash behält Einfügungsreihenfolge seit Ruby 1.9
items = {}
items[1] = "Erstes"
items[2] = "Zweites"
# Reihenfolge wird bei Iteration beibehalten
```

**Besonderheiten:**
- `Hash` behält Einfügungsreihenfolge seit Ruby 1.9
- Reihenfolge wird bei Iteration beibehalten
- Arrays sind immer sequenced

**Weiterführende Links:**
- [Ruby Documentation - Hash](https://ruby-doc.org/core-3.1.0/Hash.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// IndexMap behält Einfügungsreihenfolge
// Benötigt: indexmap crate
use indexmap::IndexMap;
let mut map = IndexMap::new();
map.insert(1, "Erstes");
map.insert(2, "Zweites");
```

**Besonderheiten:**
- `IndexMap` aus `indexmap` crate behält Einfügungsreihenfolge
- Standard `HashMap` ist ungeordnet
- Vektoren sind immer sequenced

**Weiterführende Links:**
- [IndexMap Documentation](https://docs.rs/indexmap/latest/indexmap/)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// LinkedHashMap behält Einfügungsreihenfolge
import scala.collection.mutable.LinkedHashMap
val map = LinkedHashMap(1 -> "Erstes", 2 -> "Zweites")

// LinkedHashSet behält Einfügungsreihenfolge
import scala.collection.mutable.LinkedHashSet
val set = LinkedHashSet(10, 20, 30)
```

**Besonderheiten:**
- `LinkedHashMap` behält Einfügungsreihenfolge
- `LinkedHashSet` behält Einfügungsreihenfolge
- Reihenfolge wird bei Iteration beibehalten

**Weiterführende Links:**
- [Scala Documentation - Collections](https://docs.scala-lang.org/overviews/collections-2.13/introduction.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Dictionary behält Einfügungsreihenfolge seit Swift 4.0
var items: [Int: String] = [:]
items[1] = "Erstes"
items[2] = "Zweites"
// Reihenfolge wird bei Iteration beibehalten
```

**Besonderheiten:**
- `Dictionary` behält Einfügungsreihenfolge seit Swift 4.0
- Reihenfolge wird bei Iteration beibehalten
- Arrays sind immer sequenced

**Weiterführende Links:**
- [Swift Documentation - Dictionary](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/collectiontypes/#Dictionaries)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Map behält Einfügungsreihenfolge
const map = new Map<number, string>();
map.set(1, "Erstes");
map.set(2, "Zweites");
// Reihenfolge wird bei Iteration beibehalten

// Set behält Einfügungsreihenfolge
const set = new Set<number>([10, 20, 30]);
set.add(40);
```

**Besonderheiten:**
- `Map` behält Einfügungsreihenfolge
- `Set` behält Einfügungsreihenfolge
- Arrays sind immer sequenced

**Weiterführende Links:**
- [TypeScript Handbook - Map](https://www.typescriptlang.org/docs/handbook/2/maps.html)

</TabItem>
</Tabs>


## 10.3.4. Streams / Pipelines

Lazy-evaluierte Sequenzen von Operationen auf Collections. Ermöglichen die Verkettung mehrerer Operationen (wie Filter, Map, Reduce) zu einer Pipeline, die erst bei der Terminal-Operation ausgeführt wird.

### Sprachen {#sprachen}

<Tabs availableTabs={['clojure', 'csharp', 'dart', 'elixir', 'fsharp', 'gleam', 'go', 'groovy', 'haskell', 'java', 'javascript', 'julia', 'kotlin', 'ocaml', 'python', 'rust', 'scala', 'swift', 'typescript']} yellowTabs={['koka', 'lean4']}>
<TabItem value="csharp" label="C#">

```csharp
// LINQ für Stream Processing
// Benötigt: using System.Linq;
var numbers = Enumerable.Range(1, 1000);
var result = numbers
    .Where(x => x % 2 == 0)
    .Select(x => x * 2)
    .Take(10);

foreach (var item in result)
{
    Console.WriteLine($"Wert: {item}");
}
```

**Besonderheiten:**
- LINQ für Stream Processing
- Lazy Evaluation durch `IEnumerable`
- Unterstützt unbegrenzte Streams

**Weiterführende Links:**
- [Microsoft C# Documentation - LINQ](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/linq/)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Lazy Sequences für Stream Processing
(def numbers (range 1 1001))
(def result (->> numbers
                 (filter even?)
                 (map #(* % 2))
                 (take 10)))

(doseq [item result]
  (println (str "Wert: " item)))
```

**Besonderheiten:**
- Lazy Sequences für Stream Processing
- Threading-Makros (`->>`) für Pipeline-Syntax
- Lazy Evaluation

**Weiterführende Links:**
- [Clojure Documentation - Lazy Sequences](https://clojure.org/reference/sequences)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Iterable für Stream Processing
var numbers = Iterable.generate(1000, (i) => i + 1);
var result = numbers
    .where((x) => x % 2 == 0)
    .map((x) => x * 2)
    .take(10);

result.forEach((item) => print('Wert: $item'));
```

**Besonderheiten:**
- `Iterable` für Stream Processing
- Lazy Evaluation
- Unterstützt unbegrenzte Streams

**Weiterführende Links:**
- [Dart Documentation - Iterable](https://api.dart.dev/stable/dart-core/Iterable-class.html)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Streams für Stream Processing
numbers = Stream.iterate(1, &(&1 + 1))
result = numbers
  |> Stream.filter(&rem(&1, 2) == 0)
  |> Stream.map(&(&1 * 2))
  |> Enum.take(10)

Enum.each(result, fn item -> IO.puts("Wert: #{item}") end)
```

**Besonderheiten:**
- `Stream` Modul für Stream Processing
- Pipe-Operator (`|>`) für Pipeline-Syntax
- Lazy Evaluation

**Weiterführende Links:**
- [Elixir Documentation - Streams](https://hexdocs.pm/elixir/Stream.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Sequences für Stream Processing
let numbers = Seq.initInfinite (fun i -> i + 1)
let result = numbers
    |> Seq.filter (fun x -> x % 2 = 0)
    |> Seq.map (fun x -> x * 2)
    |> Seq.take 10

result |> Seq.iter (fun item -> printfn "Wert: %d" item)
```

**Besonderheiten:**
- `Seq` für Stream Processing
- Pipe-Operator (`|>`) für Pipeline-Syntax
- Lazy Evaluation

**Weiterführende Links:**
- [F# Documentation - Sequences](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/sequences)

</TabItem>
<TabItem value="go" label="Go">

```go
// Channels für Stream Processing
func generateNumbers(count int) <-chan int {
    ch := make(chan int)
    go func() {
        defer close(ch)
        for i := 1; i <= count; i++ {
            ch <- i
        }
    }()
    return ch
}

func filterEven(in <-chan int) <-chan int {
    out := make(chan int)
    go func() {
        defer close(out)
        for n := range in {
            if n%2 == 0 {
                out <- n * 2
            }
        }
    }()
    return out
}

numbers := generateNumbers(1000)
filtered := filterEven(numbers)
count := 0
for item := range filtered {
    if count >= 10 {
        break
    }
    fmt.Printf("Wert: %d\n", item)
    count++
}
```

**Besonderheiten:**
- Channels für Stream-Kommunikation
- Goroutines für parallele Stream-Verarbeitung
- Pipeline-Pattern durch Channel-Komposition

**Weiterführende Links:**
- [Go Channels Documentation](https://go.dev/tour/concurrency/2)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Lazy Collections für Stream Processing
def numbers = (1..1000)
def result = numbers
    .findAll { it % 2 == 0 }
    .collect { it * 2 }
    .take(10)

result.each { println("Wert: $it") }
```

**Besonderheiten:**
- Lazy Collections für Stream Processing
- Method Chaining für Pipeline-Syntax
- Unterstützt unbegrenzte Streams

**Weiterführende Links:**
- [Groovy Documentation - Collections](https://groovy-lang.org/groovy-dev-kit.html#_working_with_collections)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Lazy Lists für Stream Processing
numbers = [1..1000]
result = take 10 $ map (*2) $ filter even numbers

mapM_ (putStrLn . ("Wert: " ++) . show) result
```

**Besonderheiten:**
- Lazy Lists für Stream Processing
- Function Composition für Pipeline-Syntax
- Lazy Evaluation by default

**Weiterführende Links:**
- [Haskell Documentation - Lists](https://www.haskell.org/onlinereport/haskell2010/haskellch3.html#x8-420003.7)

</TabItem>
<TabItem value="java" label="Java">

```java
// Streams API (seit Java 8)
import java.util.stream.*;

IntStream.range(1, 1001)
    .filter(x -> x % 2 == 0)
    .map(x -> x * 2)
    .limit(10)
    .forEach(x -> System.out.println("Wert: " + x));
```

**Besonderheiten:**
- Streams API seit Java 8
- Lazy Evaluation
- Unterstützt parallele Verarbeitung mit `.parallel()`

**Weiterführende Links:**
- [Oracle Java Documentation - Streams](https://docs.oracle.com/javase/8/docs/api/java/util/stream/Stream.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Generators für Stream Processing
function* generateNumbers(count) {
    for (let i = 1; i <= count; i++) {
        yield i;
    }
}

function* filterEven(stream) {
    for (const n of stream) {
        if (n % 2 === 0) {
            yield n * 2;
        }
    }
}

const numbers = generateNumbers(1000);
const filtered = filterEven(numbers);
let count = 0;
for (const item of filtered) {
    if (count++ >= 10) break;
    console.log(`Wert: ${item}`);
}
```

**Besonderheiten:**
- Generators für Stream Processing
- Lazy Evaluation durch Generators
- Unterstützt unbegrenzte Streams

**Weiterführende Links:**
- [MDN Web Docs - Generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Generators für Stream Processing
numbers = (i for i in 1:1000)
result = (x * 2 for x in numbers if x % 2 == 0)

for (i, item) in enumerate(result)
    if i > 10
        break
    end
    println("Wert: $item")
end
```

**Besonderheiten:**
- Generators für Stream Processing
- Lazy Evaluation
- Unterstützt unbegrenzte Streams

**Weiterführende Links:**
- [Julia Documentation - Generators](https://docs.julialang.org/en/v1/manual/arrays/#Generator-Expressions)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
// Funktionsketten auf Listen (eager, nicht lazy)
val result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  .filter(fn(x) x % 2 == 0)
  .map(fn(x) x * 2)
  .take(3)
// [4, 8, 12]

// Foldl für Aggregation
val sum = [1, 2, 3, 4, 5].foldl(0, fn(acc, x) acc + x)
// 15
```

**Besonderheiten:**
- Listenoperationen können mit Punktnotation verkettet werden
- Operationen sind eager (nicht lazy) – kein dedizierter Stream-Typ
- `map`, `filter`, `foldl`, `zip` als Standard-Pipeline-Operationen
- Effekte ermöglichen lazy Verarbeitung bei Bedarf

**Weiterführende Links:**
- [Koka Standard Library - list](https://koka-lang.github.io/koka/doc/std_core_list.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Listenoperationen mit Pipe-Operator (eager, nicht lazy)
def result : List Nat :=
  (List.range 1000)
  |>.filter (· % 2 == 0)
  |>.map (· * 2)
  |>.take 10

-- Alternativ mit Methodensyntax
def result2 : List Nat :=
  (List.range 1000).filter (· % 2 == 0)
    |>.map (· * 2)
    |>.take 10

-- ForIn für Iteration
def printResult : IO Unit := do
  for item in result do
    IO.println s!"Wert: {item}"
```

**Besonderheiten:**
- Pipe-Operator `|>` für Funktionsverkettung verfügbar
- Listenoperationen (`filter`, `map`, `take`) sind eager (nicht lazy)
- Dot-Notation für Methodenverkettung auf Collections
- Keine dedizierten Streams – Pipeline-Verarbeitung über Listenfunktionen

**Weiterführende Links:**
- [Lean 4 Documentation - List](https://lean-lang.org/lean4/doc/data_types.html)
- [Lean 4 Documentation - Functional Programming](https://lean-lang.org/functional_programming_in_lean/)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Sequences für Stream Processing
val numbers = generateSequence(1) { it + 1 }
val result = numbers
    .filter { it % 2 == 0 }
    .map { it * 2 }
    .take(10)

result.forEach { println("Wert: $it") }
```

**Besonderheiten:**
- Sequences für Stream Processing
- Lazy Evaluation
- Unterstützt unbegrenzte Streams

**Weiterführende Links:**
- [Kotlin Documentation - Sequences](https://kotlinlang.org/docs/sequences.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Sequences für Stream Processing *)
let numbers = Seq.init_infinite (fun i -> i + 1)
let result = numbers
  |> Seq.filter (fun x -> x mod 2 = 0)
  |> Seq.map (fun x -> x * 2)
  |> Seq.take 10

Seq.iter (fun item -> Printf.printf "Wert: %d\n" item) result
```

**Besonderheiten:**
- `Seq` für Stream Processing (seit OCaml 4.07)
- Pipe-Operator (`|>`) für Pipeline-Syntax
- Lazy Evaluation

**Weiterführende Links:**
- [OCaml Documentation - Sequences](https://v2.ocaml.org/api/Seq.html)

</TabItem>
<TabItem value="python" label="Python">

```python
# Generators für Stream Processing
def generate_numbers(count):
    for i in range(1, count + 1):
        yield i

def filter_even(stream):
    for n in stream:
        if n % 2 == 0:
            yield n * 2

numbers = generate_numbers(1000)
filtered = filter_even(numbers)
for i, item in enumerate(filtered):
    if i >= 10:
        break
    print(f"Wert: {item}")
```

**Besonderheiten:**
- Generators für Stream Processing
- Lazy Evaluation durch Generators
- `itertools` für erweiterte Stream-Operationen

**Weiterführende Links:**
- [Python Generators Documentation](https://docs.python.org/3/tutorial/classes.html#generators)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Iterator trait für Stream Processing
let numbers = 1..=1000;
let result: Vec<i32> = numbers
    .filter(|x| x % 2 == 0)
    .map(|x| x * 2)
    .take(10)
    .collect();

for item in result {
    println!("Wert: {}", item);
}
```

**Besonderheiten:**
- Iterator trait als Basis für Stream Processing
- Lazy Evaluation durch Iterators
- Zero-cost Abstraktionen

**Weiterführende Links:**
- [Rust Iterator Documentation](https://doc.rust-lang.org/std/iter/trait.Iterator.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// LazyList für Stream Processing (seit Scala 2.13)
val numbers = LazyList.from(1)
val result = numbers
    .filter(_ % 2 == 0)
    .map(_ * 2)
    .take(10)

result.foreach(x => println(s"Wert: $x"))
```

**Besonderheiten:**
- `LazyList` für Stream Processing (seit Scala 2.13)
- Lazy Evaluation
- Unterstützt unbegrenzte Streams

**Weiterführende Links:**
- [Scala LazyList Documentation](https://www.scala-lang.org/api/current/scala/collection/immutable/LazyList.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Lazy Collections für Stream Processing
let numbers = (1...1000).lazy
let result = numbers
    .filter { $0 % 2 == 0 }
    .map { $0 * 2 }
    .prefix(10)

result.forEach { print("Wert: \($0)") }
```

**Besonderheiten:**
- Lazy Collections für Stream Processing
- Lazy Evaluation durch `.lazy`
- Unterstützt unbegrenzte Streams

**Weiterführende Links:**
- [Swift Documentation - Lazy Collections](https://developer.apple.com/documentation/swift/lazysequenceprotocol)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Generators für Stream Processing
function* generateNumbers(count: number): Generator<number> {
    for (let i = 1; i <= count; i++) {
        yield i;
    }
}

function* filterEven(stream: Generator<number>): Generator<number> {
    for (const n of stream) {
        if (n % 2 === 0) {
            yield n * 2;
        }
    }
}

const numbers = generateNumbers(1000);
const filtered = filterEven(numbers);
let count = 0;
for (const item of filtered) {
    if (count++ >= 10) break;
    console.log(`Wert: ${item}`);
}
```

**Besonderheiten:**
- Generators für Stream Processing
- Lazy Evaluation durch Generators
- Unterstützt unbegrenzte Streams

**Weiterführende Links:**
- [TypeScript Handbook - Generators](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// Pipelines mit |> und Iterator-Modul
// Benötigt: import gleam/iterator
let result =
  iterator.from_list([1, 2, 3, 4, 5])
  |> iterator.filter(fn(x) { x > 2 })
  |> iterator.map(fn(x) { x * 2 })
  |> iterator.to_list()
// result = [6, 8, 10]
```

**Besonderheiten:**
- Pipe-Operator `|>` für Funktionsverkettung
- `gleam/iterator` für lazy Evaluation
- Elemente werden erst bei Bedarf ausgewertet

**Weiterführende Links:**
- [Gleam Documentation - iterator](https://hexdocs.pm/gleam_stdlib/gleam/iterator.html)

</TabItem>
</Tabs>


## 10.3.5. Metatables / Metamethods

Mechanismus zur Anpassung des Verhaltens von Collections durch Definition von Metamethoden. Ermöglicht Operator-Überladung, benutzerdefinierte Indexierung und andere Verhaltensanpassungen für Collections.

### Sprachen {#sprachen}

<Tabs availableTabs={['lua', 'python', 'ruby', 'javascript', 'typescript', 'perl', 'rust', 'csharp', 'cpp', 'lean4', 'scala', 'kotlin']}>
<TabItem value="lua" label="Lua">

```lua
-- Metatable für benutzerdefinierte Collection
Vector = {}
Vector.__index = Vector

function Vector:new(x, y)
    local obj = {x = x, y = y}
    setmetatable(obj, Vector)
    return obj
end

-- Metamethoden für Operator-Überladung
function Vector:__add(other)
    return Vector:new(self.x + other.x, self.y + other.y)
end

function Vector:__tostring()
    return string.format("Vector(%d, %d)", self.x, self.y)
end

function Vector:__len()
    return 2
end

local v1 = Vector:new(1, 2)
local v2 = Vector:new(3, 4)
print(v1 + v2)  -- Vector(4, 6)
print(#v1)      -- 2
```

**Besonderheiten:**
- Metatables für benutzerdefinierte Collections
- `__add`, `__sub`, etc. für Operator-Überladung
- `__index` für benutzerdefinierte Indexierung
- `__len` für Länge, `__tostring` für String-Darstellung

**Weiterführende Links:**
- [Lua Documentation - Metatables](https://www.lua.org/manual/5.4/manual.html#2.4)

</TabItem>
<TabItem value="python" label="Python">

```python
# Magic Methods für benutzerdefinierte Collections
class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)
    
    def __str__(self):
        return f"Vector({self.x}, {self.y})"
    
    def __len__(self):
        return 2
    
    def __getitem__(self, index):
        if index == 0:
            return self.x
        elif index == 1:
            return self.y
        raise IndexError("Index out of range")

v1 = Vector(1, 2)
v2 = Vector(3, 4)
print(v1 + v2)  # Vector(4, 6)
print(len(v1))  # 2
print(v1[0])    # 1
```

**Besonderheiten:**
- Magic Methods für benutzerdefinierte Collections
- `__add__`, `__sub__`, etc. für Operator-Überladung
- `__getitem__`, `__setitem__` für Indexierung
- `__len__` für Länge, `__str__` für String-Darstellung

**Weiterführende Links:**
- [Python Documentation - Magic Methods](https://docs.python.org/3/reference/datamodel.html#special-method-names)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Methoden-Überladung für benutzerdefinierte Collections
class Vector
  def initialize(x, y)
    @x = x
    @y = y
  end
  
  def +(other)
    Vector.new(@x + other.x, @y + other.y)
  end
  
  def to_s
    "Vector(#{@x}, #{@y})"
  end
  
  def length
    2
  end
  
  def [](index)
    case index
    when 0 then @x
    when 1 then @y
    else raise IndexError, "Index out of range"
    end
  end
end

v1 = Vector.new(1, 2)
v2 = Vector.new(3, 4)
puts v1 + v2  # Vector(4, 6)
puts v1.length  # 2
puts v1[0]  # 1
```

**Besonderheiten:**
- Methoden-Überladung für benutzerdefinierte Collections
- `+`, `-`, etc. für Operator-Überladung
- `[]` für Indexierung
- `to_s` für String-Darstellung

**Weiterführende Links:**
- [Ruby Documentation - Operator Overloading](https://ruby-doc.org/core-3.1.0/doc/syntax/operators_rdoc.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Symbol-Methoden für benutzerdefinierte Collections
class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    
    toString() {
        return `Vector(${this.x}, ${this.y})`;
    }
    
    valueOf() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    
    [Symbol.toPrimitive](hint) {
        if (hint === 'string') {
            return this.toString();
        }
        return this.valueOf();
    }
}

const v = new Vector(1, 2);
console.log(String(v));  // Vector(1, 2)
console.log(+v);  // 2.236...
```

**Besonderheiten:**
- `toString()`, `valueOf()` für Typkonvertierung
- `Symbol.toPrimitive` für erweiterte Typkonvertierung
- Keine Operator-Überladung
- `Symbol.iterator` für Iteration

**Weiterführende Links:**
- [MDN Web Docs - Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Symbol-Methoden für benutzerdefinierte Collections
class Vector {
    constructor(public x: number, public y: number) {}
    
    toString(): string {
        return `Vector(${this.x}, ${this.y})`;
    }
    
    valueOf(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    
    [Symbol.toPrimitive](hint: string): string | number {
        if (hint === 'string') {
            return this.toString();
        }
        return this.valueOf();
    }
}

const v = new Vector(1, 2);
console.log(String(v));  // Vector(1, 2)
console.log(+v);  // 2.236...
```

**Besonderheiten:**
- Magic Methods identisch mit JavaScript
- `toString()`, `valueOf()` für Typkonvertierung
- `Symbol.toPrimitive` für erweiterte Typkonvertierung
- Keine Operator-Überladung

**Weiterführende Links:**
- [TypeScript Handbook - Symbols](https://www.typescriptlang.org/docs/handbook/symbols.html)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Overload für benutzerdefinierte Collections
package Vector;

sub new {
    my ($class, $x, $y) = @_;
    bless { x => $x, y => $y }, $class;
}

sub stringify {
    my ($self) = @_;
    return "Vector($self->{x}, $self->{y})";
}

use overload
    '""' => \&stringify,
    '+' => sub {
        my ($a, $b) = @_;
        Vector->new($a->{x} + $b->{x}, $a->{y} + $b->{y});
    };

my $v1 = Vector->new(1, 2);
my $v2 = Vector->new(3, 4);
print $v1 + $v2;  # Vector(4, 6)
```

**Besonderheiten:**
- `overload` pragma für Operator-Überladung
- Unterstützt verschiedene Operatoren
- `""` für String-Darstellung
- Sehr flexibel und dynamisch

**Weiterführende Links:**
- [Perl Documentation - overload](https://perldoc.perl.org/overload)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Traits für benutzerdefinierte Collections
use std::ops::Add;
use std::fmt;

#[derive(Debug, Clone, Copy)]
struct Vector {
    x: i32,
    y: i32,
}

impl Add for Vector {
    type Output = Vector;
    
    fn add(self, other: Vector) -> Vector {
        Vector {
            x: self.x + other.x,
            y: self.y + other.y,
        }
    }
}

impl fmt::Display for Vector {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "Vector({}, {})", self.x, self.y)
    }
}

let v1 = Vector { x: 1, y: 2 };
let v2 = Vector { x: 3, y: 4 };
println!("{}", v1 + v2);  // Vector(4, 6)
```

**Besonderheiten:**
- Traits für Operator-Überladung
- `Add`, `Sub`, etc. Traits für Operatoren
- `Display` Trait für String-Darstellung
- `Index`, `IndexMut` Traits für Indexierung

**Weiterführende Links:**
- [Rust Documentation - Operator Overloading](https://doc.rust-lang.org/book/ch19-03-advanced-traits.html#operator-overloading)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Operator-Überladung für benutzerdefinierte Collections
public class Vector
{
    public int X { get; set; }
    public int Y { get; set; }
    
    public Vector(int x, int y)
    {
        X = x;
        Y = y;
    }
    
    public static Vector operator +(Vector a, Vector b)
    {
        return new Vector(a.X + b.X, a.Y + b.Y);
    }
    
    public override string ToString()
    {
        return $"Vector({X}, {Y})";
    }
}

var v1 = new Vector(1, 2);
var v2 = new Vector(3, 4);
Console.WriteLine(v1 + v2);  // Vector(4, 6)
```

**Besonderheiten:**
- Operator-Überladung mit `operator` Schlüsselwort
- Unterstützt verschiedene Operatoren
- `ToString()` für String-Darstellung
- `this[int]` für Indexierung

**Weiterführende Links:**
- [Microsoft C# Documentation - Operator Overloading](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/operator-overloading)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Operator-Überladung für benutzerdefinierte Collections
#include <iostream>
#include <string>

class Vector {
public:
    int x, y;
    
    Vector(int x, int y) : x(x), y(y) {}
    
    Vector operator+(const Vector& other) const {
        return Vector(x + other.x, y + other.y);
    }
    
    friend std::ostream& operator<<(std::ostream& os, const Vector& v) {
        os << "Vector(" << v.x << ", " << v.y << ")";
        return os;
    }
};

Vector v1(1, 2);
Vector v2(3, 4);
std::cout << (v1 + v2) << std::endl;  // Vector(4, 6)
```

**Besonderheiten:**
- Operator-Überladung als Member- oder Friend-Funktionen
- Unterstützt verschiedene Operatoren
- `operator<<` für Stream-Ausgabe
- `operator[]` für Indexierung

**Weiterführende Links:**
- [cppreference.com - Operator Overloading](https://en.cppreference.com/w/cpp/language/operators)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Typklassen für Operator-Überladung
structure Vector where
  x : Int
  y : Int

-- Add-Instanz für + Operator
instance : Add Vector where
  add a b := ⟨a.x + b.x, a.y + b.y⟩

-- ToString-Instanz für String-Darstellung
instance : ToString Vector where
  toString v := s!"Vector({v.x}, {v.y})"

-- GetElem-Instanz für Indexierung
instance : GetElem Vector Nat Int (fun _ i => i < 2) where
  getElem v i _ := if i == 0 then v.x else v.y

def v1 : Vector := ⟨1, 2⟩
def v2 : Vector := ⟨3, 4⟩
#eval v1 + v2     -- Vector(4, 6)
#eval toString v1  -- "Vector(1, 2)"
```

**Besonderheiten:**
- Typklassen für Operator-Überladung (`Add`, `Sub`, `Mul`, `HAdd` etc.)
- `ToString` für String-Darstellung
- `GetElem` für typsichere Indexierung mit Beweis-Argument
- `BEq`, `Ord`, `Hashable` für Vergleich und Hashing

**Weiterführende Links:**
- [Lean 4 Documentation - Type Classes](https://lean-lang.org/lean4/doc/typeclass.html)
- [Lean 4 Documentation - Notation](https://lean-lang.org/lean4/doc/notation.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Implicit Classes für benutzerdefinierte Collections
case class Vector(x: Int, y: Int) {
    def +(other: Vector): Vector = {
        Vector(x + other.x, y + other.y)
    }
    
    override def toString: String = {
        s"Vector($x, $y)"
    }
}

val v1 = Vector(1, 2)
val v2 = Vector(3, 4)
println(v1 + v2)  // Vector(4, 6)
```

**Besonderheiten:**
- Operator-Überladung durch Methoden
- `+`, `-`, etc. als Methoden
- `toString` für String-Darstellung
- Implicit Classes für Erweiterungen

**Weiterführende Links:**
- [Scala Documentation - Operator Overloading](https://docs.scala-lang.org/tour/operators.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Operator-Überladung für benutzerdefinierte Collections
data class Vector(val x: Int, val y: Int) {
    operator fun plus(other: Vector): Vector {
        return Vector(x + other.x, y + other.y)
    }
    
    override fun toString(): String {
        return "Vector($x, $y)"
    }
}

val v1 = Vector(1, 2)
val v2 = Vector(3, 4)
println(v1 + v2)  // Vector(4, 6)
```

**Besonderheiten:**
- Operator-Überladung mit `operator` Schlüsselwort
- `plus`, `minus`, etc. für Operatoren
- `toString()` für String-Darstellung
- `get`, `set` für Indexierung

**Weiterführende Links:**
- [Kotlin Documentation - Operator Overloading](https://kotlinlang.org/docs/operator-overloading.html)

</TabItem>
</Tabs>

## 10.3.6. Lazy Collections / Sequences

Collections, deren Elemente erst bei Bedarf berechnet werden (Lazy Evaluation). Ermöglichen die Arbeit mit potenziell unendlichen Datenstrukturen und reduzieren den Speicherverbrauch, da nur die tatsächlich benötigten Elemente materialisiert werden.

### Sprachen

<Tabs availableTabs={['clojure', 'common-lisp', 'crystal', 'csharp', 'cpp', 'd', 'dart', 'elixir', 'fsharp', 'groovy', 'haskell', 'idris', 'java', 'javascript', 'julia', 'kotlin', 'nim', 'ocaml', 'purescript', 'python', 'racket', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript']} yellowTabs={['elm']}>
<TabItem value="clojure" label="Clojure">

```clojure
;; Lazy Sequence (unendlich)
(def naturals (iterate inc 0))

;; Erste 5 Elemente materialisieren
(take 5 naturals)  ; (0 1 2 3 4)

;; Lazy Sequence mit lazy-seq
(defn fibs
  ([] (fibs 0 1))
  ([a b] (lazy-seq (cons a (fibs b (+ a b))))))

(take 8 (fibs))  ; (0 1 1 2 3 5 8 13)
```

**Besonderheiten:**
- Die meisten Sequence-Operationen (`map`, `filter`, `take`) sind lazy by default
- `lazy-seq` für explizite Lazy-Sequenz-Erstellung
- Einmal berechnete Elemente werden gecacht (Memoization)

**Weiterführende Links:**
- [Clojure Documentation - Lazy Sequences](https://clojure.org/reference/sequences)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Lazy Evaluation mit delay/force (SRFI-ähnlich)
(defmacro delay (expr)
  (let ((forced (gensym)) (value (gensym)))
    `(let ((,forced nil) (,value nil))
       (lambda ()
         (unless ,forced
           (setf ,value ,expr ,forced t))
         ,value))))

(defun force (promise) (funcall promise))

;; Lazy Range als Generator
(defun lazy-range (start)
  (cons start (delay (lazy-range (1+ start)))))
```

**Besonderheiten:**
- Kein natives Lazy-Collection-System
- `delay`/`force` Pattern für verzögerte Auswertung
- Series-Library für Lazy-Stream-Verarbeitung
- Generatoren über Closures simulierbar

**Weiterführende Links:**
- [Common Lisp HyperSpec](http://www.lispworks.com/documentation/lw50/CLHS/Front/Contents.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Lazy Iterator
iter = (1..Float64::INFINITY).each.select(&.even?).map { |x| x * 2 }

# Erste 5 Elemente materialisieren
result = iter.first(5)  # [4, 8, 12, 16, 20]

# Eigener Lazy Iterator
class FibIterator
  include Iterator(Int32)

  def initialize
    @a = 0
    @b = 1
  end

  def next
    value = @a
    @a, @b = @b, @a + @b
    value
  end
end
```

**Besonderheiten:**
- `Iterator`-Modul für lazy Evaluation
- Iterator-Methoden (`select`, `map`, `take`) sind lazy
- `each` konvertiert eine Collection in einen Lazy Iterator
- `.to_a` oder `.first(n)` materialisiert Elemente

**Weiterführende Links:**
- [Crystal Documentation - Iterator](https://crystal-lang.org/api/latest/Iterator.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Lazy Sequence mit yield return
IEnumerable<int> Naturals()
{
    int n = 0;
    while (true)
        yield return n++;
}

// Lazy LINQ-Operationen
// Benötigt: using System.Linq;
var result = Naturals()
    .Where(x => x % 2 == 0)
    .Select(x => x * 2)
    .Take(5);
// Erst hier werden Elemente berechnet
foreach (var item in result) { }
```

**Besonderheiten:**
- `yield return` erzeugt Lazy Sequences (`IEnumerable<T>`)
- LINQ-Operationen (`Where`, `Select`, `Skip`, `Take`) sind lazy
- Materialisierung erst bei Iteration oder `.ToList()` / `.ToArray()`

**Weiterführende Links:**
- [Microsoft C# Documentation - Iterators](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/iterators)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Ranges (seit C++20)
// Benötigt: #include <ranges>
auto evens = std::views::iota(0)
    | std::views::filter([](int x) { return x % 2 == 0; })
    | std::views::transform([](int x) { return x * 2; })
    | std::views::take(5);

// Elemente erst bei Iteration berechnet
for (int x : evens) { }
```

**Besonderheiten:**
- `std::ranges` und `std::views` seit C++20 für Lazy Evaluation
- Pipe-Operator `|` für Verkettung von Views
- `std::views::iota` für unendliche Sequenzen
- Views sind leichtgewichtige, nicht-besitzende Ranges

**Weiterführende Links:**
- [cppreference.com - Ranges](https://en.cppreference.com/w/cpp/ranges)

</TabItem>
<TabItem value="d" label="D">

```d
// Lazy Ranges
// Benötigt: import std.range;
// Benötigt: import std.algorithm;
auto naturals = iota(0, int.max);
auto result = naturals
    .filter!(x => x % 2 == 0)
    .map!(x => x * 2)
    .take(5);

// Lazy Generator mit generate
auto fibs = recurrence!((a, n) => a[n-1] + a[n-2])(0, 1);
```

**Besonderheiten:**
- Ranges als Lazy-Abstraktionsschicht
- `iota`, `recurrence`, `generate` für Lazy-Sequenz-Erzeugung
- Range-Algorithmen (`filter`, `map`, `take`) sind lazy
- Materialisierung mit `.array` oder Iteration

**Weiterführende Links:**
- [D Documentation - Ranges](https://dlang.org/phobos/std_range.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Lazy Iterable mit sync* Generator
Iterable<int> naturals() sync* {
  int n = 0;
  while (true) {
    yield n++;
  }
}

// Lazy Operationen
var result = naturals()
    .where((x) => x % 2 == 0)
    .map((x) => x * 2)
    .take(5);
```

**Besonderheiten:**
- `sync*` Generatoren mit `yield` für Lazy Sequences
- `Iterable`-Methoden (`where`, `map`, `take`) sind lazy
- Materialisierung mit `.toList()` oder Iteration

**Weiterführende Links:**
- [Dart Documentation - Generators](https://dart.dev/language/functions#generators)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Lazy Stream (unendlich)
naturals = Stream.iterate(0, &(&1 + 1))

# Lazy Operationen
result = naturals
  |> Stream.filter(&(rem(&1, 2) == 0))
  |> Stream.map(&(&1 * 2))
  |> Enum.take(5)
# [0, 4, 8, 12, 16]
```

**Besonderheiten:**
- `Stream`-Modul für Lazy Sequences
- Stream-Operationen werden erst bei `Enum`-Aufruf ausgewertet
- `Stream.iterate/2`, `Stream.unfold/2` für unendliche Streams
- Pipe-Operator `|>` für lesbare Verkettung

**Weiterführende Links:**
- [Elixir Documentation - Streams](https://hexdocs.pm/elixir/Stream.html)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Elm hat keine eingebauten Lazy Collections
-- Lazy-Verhalten kann über Funktionen simuliert werden

type LazyList a
    = Nil
    | Cons a (() -> LazyList a)

naturals : Int -> LazyList Int
naturals n =
    Cons n (\() -> naturals (n + 1))

take : Int -> LazyList Int -> List Int
take n list =
    case (n, list) of
        (0, _) -> []
        (_, Nil) -> []
        (_, Cons x rest) -> x :: take (n - 1) (rest ())
```

**Besonderheiten:**
- Keine eingebauten Lazy Collections (Elm ist strikt evaluiert)
- Lazy-Verhalten über Thunks `(() -> a)` simulierbar
- `elm-community/lazy-list` Package verfügbar
- Elm setzt auf Einfachheit statt Lazy Evaluation

**Weiterführende Links:**
- [Elm Guide - Custom Types](https://guide.elm-lang.org/types/custom_types)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Lazy Sequence mit seq Computation Expression
let naturals = Seq.initInfinite id

// Lazy Operationen
let result =
    naturals
    |> Seq.filter (fun x -> x % 2 = 0)
    |> Seq.map (fun x -> x * 2)
    |> Seq.take 5

// Eigene Lazy Sequence
let fibs = seq {
    let mutable a, b = 0, 1
    while true do
        yield a
        let temp = a + b
        a <- b
        b <- temp
}
```

**Besonderheiten:**
- `seq { ... }` Computation Expression für Lazy Sequences
- `Seq`-Modul-Funktionen sind lazy (im Gegensatz zu `List` und `Array`)
- `Seq.initInfinite` für unendliche Sequenzen
- Pipe-Operator `|>` für lesbare Verkettung

**Weiterführende Links:**
- [F# Documentation - Sequences](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/sequences)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Lazy Collection mit Iterator
def naturals = (0..Integer.MAX_VALUE).iterator()

// Stream-ähnliche Verarbeitung (seit Groovy 2.2)
def result = Stream.iterate(0, n -> n + 1)
    .filter(x -> x % 2 == 0)
    .map(x -> x * 2)
    .limit(5)
    .collect(Collectors.toList())
```

**Besonderheiten:**
- Java Streams API über Interop nutzbar
- `Stream.iterate` für unendliche Sequenzen
- Groovy Collections selbst sind nicht lazy
- `.collect(Collectors.toList())` zur Materialisierung

**Weiterführende Links:**
- [Groovy Documentation - Collections](https://groovy-lang.org/groovy-dev-kit.html#_working_with_collections)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Listen sind lazy by default
naturals = [0..]

-- Lazy Operationen
result = take 5 $ map (*2) $ filter even naturals
-- [0, 4, 8, 12, 16]

-- Unendliche Fibonacci-Sequenz
fibs = 0 : 1 : zipWith (+) fibs (tail fibs)
-- take 8 fibs = [0, 1, 1, 2, 3, 5, 8, 13]
```

**Besonderheiten:**
- Alle Listen sind lazy by default (Non-Strict Evaluation)
- Unendliche Datenstrukturen sind natürlicher Bestandteil der Sprache
- Keine explizite Lazy-Markierung nötig
- `Data.Sequence` für strikte Sequenzen wenn gewünscht

**Weiterführende Links:**
- [Haskell Wiki - Lazy Evaluation](https://wiki.haskell.org/Lazy_evaluation)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Lazy-Typ für verzögerte Auswertung
naturals : Stream Nat
naturals = iterate S Z

-- Lazy Operationen
result : List Nat
result = take 5 $ map (*2) $ filter isEven naturals

-- Codata für unendliche Strukturen
codata CoList : Type -> Type where
  Nil : CoList a
  (::) : a -> CoList a -> CoList a
```

**Besonderheiten:**
- `Stream` als eingebauter unendlicher Lazy-Datentyp
- `Lazy` Typ-Wrapper für verzögerte Auswertung
- Codata-Deklarationen für potenziell unendliche Strukturen
- Totality Checker unterscheidet zwischen Daten und Codaten

**Weiterführende Links:**
- [Idris 2 Documentation - Lazy](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Stream als Lazy Sequence (seit Java 8)
Stream<Integer> naturals = Stream.iterate(0, n -> n + 1);

var result = naturals
    .filter(x -> x % 2 == 0)
    .map(x -> x * 2)
    .limit(5)
    .toList();
// [0, 4, 8, 12, 16]
```

**Besonderheiten:**
- `Stream<T>` seit Java 8 als Lazy-Abstraction
- Intermediäre Operationen (`filter`, `map`) sind lazy
- Terminal-Operationen (`toList`, `forEach`) lösen Berechnung aus
- `Stream.iterate()`, `Stream.generate()` für unendliche Streams

**Weiterführende Links:**
- [Oracle Java Documentation - Streams](https://docs.oracle.com/javase/8/docs/api/java/util/stream/Stream.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Generator für Lazy Sequence
function* naturals() {
    let n = 0;
    while (true) yield n++;
}

// Lazy Verarbeitung
function* take(n, gen) {
    let i = 0;
    for (const val of gen) {
        if (i++ >= n) break;
        yield val;
    }
}

const result = [...take(5, naturals())];
// [0, 1, 2, 3, 4]
```

**Besonderheiten:**
- Generatoren (`function*`) als Grundlage für Lazy Sequences
- `yield` für verzögerte Element-Erzeugung
- Keine eingebauten Lazy-Collection-Methoden (Verkettung erfordert manuelle Generatoren)
- Iterator-Helpers-Proposal (Stage 3) für `.map()`, `.filter()` auf Iteratoren

**Weiterführende Links:**
- [MDN Web Docs - Generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Generator Expression (lazy)
naturals = (n for n in Iterators.countfrom(0))

# Lazy Operationen
result = Iterators.take(
    (x * 2 for x in naturals if x % 2 == 0),
    5
) |> collect
# [0, 4, 8, 12, 16]

# Channel als Lazy Producer
function fib_channel(ch::Channel)
    a, b = 0, 1
    while true
        put!(ch, a)
        a, b = b, a + b
    end
end
```

**Besonderheiten:**
- Generator Expressions `(expr for x in iter)` sind lazy
- `Iterators`-Modul für Lazy-Operationen
- `Channel` für lazy Producer/Consumer
- `collect()` zur Materialisierung

**Weiterführende Links:**
- [Julia Documentation - Iteration](https://docs.julialang.org/en/v1/manual/interfaces/#man-interface-iteration)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Lazy Sequence
val naturals = generateSequence(0) { it + 1 }

// Lazy Operationen
val result = naturals
    .filter { it % 2 == 0 }
    .map { it * 2 }
    .take(5)
    .toList()
// [0, 4, 8, 12, 16]

// Sequence Builder
val fibs = sequence {
    var a = 0; var b = 1
    while (true) {
        yield(a)
        val temp = a + b; a = b; b = temp
    }
}
```

**Besonderheiten:**
- `Sequence<T>` als Lazy-Collection-Typ
- `generateSequence` und `sequence { }` Builder für Lazy Sequences
- Sequence-Operationen (`filter`, `map`) sind lazy (im Gegensatz zu Collection-Operationen)
- `.toList()` zur Materialisierung

**Weiterführende Links:**
- [Kotlin Documentation - Sequences](https://kotlinlang.org/docs/sequences.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Iterator als Lazy Sequence
iterator naturals(): int {.closure.} =
  var n = 0
  while true:
    yield n
    inc n

# Erste 5 Elemente
import std/sequtils
var result: seq[int] = @[]
var count = 0
for x in naturals():
  if x mod 2 == 0:
    result.add(x * 2)
    inc count
    if count >= 5: break
```

**Besonderheiten:**
- Closure-Iteratoren mit `{.closure.}` Pragma für Lazy Sequences
- `yield` für verzögerte Element-Erzeugung
- Inline-Iteratoren sind nicht lazy (werden zur Compile-Zeit aufgelöst)
- Kein eingebautes Lazy-Collection-Framework

**Weiterführende Links:**
- [Nim Documentation - Iterators](https://nim-lang.org/docs/manual.html#iterators-and-the-for-statement)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Lazy Sequence mit Seq (seit OCaml 4.07) *)
let naturals = Seq.ints 0

(* Lazy Operationen *)
let result =
  naturals
  |> Seq.filter (fun x -> x mod 2 = 0)
  |> Seq.map (fun x -> x * 2)
  |> Seq.take 5

(* Lazy-Typ für verzögerte Auswertung *)
let lazy_value = lazy (expensive_computation ())
let value = Lazy.force lazy_value
```

**Besonderheiten:**
- `Seq` Modul seit OCaml 4.07 für Lazy Sequences
- `Seq.ints`, `Seq.unfold` für unendliche Sequenzen
- `lazy` Keyword und `Lazy.force` für explizite Lazy Evaluation
- Pipe-Operator `|>` für lesbare Verkettung

**Weiterführende Links:**
- [OCaml Documentation - Seq](https://v2.ocaml.org/api/Seq.html)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Lazy List
-- Benötigt: import Data.Lazy
-- Benötigt: import Data.List.Lazy

naturals :: LazyList Int
naturals = iterate (_ + 1) 0

result :: LazyList Int
result = take 5 $ map (_ * 2) $ filter (\x -> x `mod` 2 == 0) naturals
```

**Besonderheiten:**
- `Data.List.Lazy` für Lazy Listen
- `Data.Lazy` für explizite Lazy-Werte (`defer`, `force`)
- PureScript ist standardmäßig strikt evaluiert
- Lazy Collections über separate Packages

**Weiterführende Links:**
- [PureScript Documentation - Lazy Lists](https://pursuit.purescript.org/packages/purescript-lazy)

</TabItem>
<TabItem value="python" label="Python">

```python
# Generator für Lazy Sequence
def naturals():
    n = 0
    while True:
        yield n
        n += 1

# Generator Expression (lazy)
evens = (x * 2 for x in naturals() if x % 2 == 0)

# Erste 5 Elemente
from itertools import islice
result = list(islice(evens, 5))
# [0, 4, 8, 12, 16]
```

**Besonderheiten:**
- Generatoren (`yield`) als Grundlage für Lazy Sequences
- Generator Expressions `(expr for x in iter)` sind lazy
- `itertools`-Modul für Lazy-Operationen (`islice`, `count`, `chain`)
- `range()` ist ebenfalls lazy (kein Speicher für alle Elemente)

**Weiterführende Links:**
- [Python Documentation - Generators](https://docs.python.org/3/howto/functional.html#generators)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
;; Lazy Stream
(require racket/stream)

(define naturals (stream-cons 0 (stream-map add1 naturals)))

;; Lazy Operationen
(define evens (stream-filter even? naturals))
(define result (stream->list (stream-take (stream-map (λ (x) (* x 2)) evens) 5)))
;; '(0 4 8 12 16)
```

**Besonderheiten:**
- `racket/stream` für Lazy Streams
- `stream-cons` für Lazy-Paar-Konstruktion
- `stream-map`, `stream-filter` für Lazy-Operationen
- `stream->list` zur Materialisierung

**Weiterführende Links:**
- [Racket Documentation - Streams](https://docs.racket-lang.org/reference/streams.html)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Lazy Enumerator (seit Ruby 2.0)
naturals = (0..Float::INFINITY).lazy

# Lazy Operationen
result = naturals
  .select(&:even?)
  .map { |x| x * 2 }
  .first(5)
# [0, 4, 8, 12, 16]

# Eigener Enumerator
fibs = Enumerator.new do |y|
  a, b = 0, 1
  loop { y.yield(a); a, b = b, a + b }
end
```

**Besonderheiten:**
- `.lazy` konvertiert jeden Enumerator in einen Lazy Enumerator
- Lazy-Methoden (`select`, `map`, `reject`) geben Lazy Enumerator zurück
- `Enumerator.new` für eigene Lazy Sequences
- `.force` oder `.first(n)` zur Materialisierung

**Weiterführende Links:**
- [Ruby Documentation - Enumerator::Lazy](https://ruby-doc.org/core-3.1.0/Enumerator/Lazy.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Iteratoren sind lazy by default
let result: Vec<i32> = (0..)
    .filter(|x| x % 2 == 0)
    .map(|x| x * 2)
    .take(5)
    .collect();
// [0, 4, 8, 12, 16]

// Eigener Iterator
struct Fibs { a: u64, b: u64 }
impl Iterator for Fibs {
    type Item = u64;
    fn next(&mut self) -> Option<u64> {
        let val = self.a;
        self.a = self.b;
        self.b = val + self.b;
        Some(val)
    }
}
```

**Besonderheiten:**
- Alle Iterator-Adapter (`filter`, `map`, `take`) sind lazy
- `collect()` als Terminal-Operation zur Materialisierung
- Zero-Cost Abstractions (kein Laufzeit-Overhead)
- Ranges `0..` für unendliche Sequenzen

**Weiterführende Links:**
- [Rust Documentation - Iterator](https://doc.rust-lang.org/std/iter/trait.Iterator.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// LazyList (seit Scala 2.13)
val naturals = LazyList.from(0)

// Lazy Operationen
val result = naturals
    .filter(_ % 2 == 0)
    .map(_ * 2)
    .take(5)
    .toList
// List(0, 4, 8, 12, 16)

// View für Lazy-Transformation bestehender Collections
val view = (1 to 1000000).view.filter(_ % 2 == 0).map(_ * 2)
```

**Besonderheiten:**
- `LazyList` seit Scala 2.13 (ersetzt `Stream`)
- Elemente werden bei Zugriff berechnet und gecacht
- `.view` für Lazy-Transformationen auf bestehenden Collections
- `#::` für Lazy-Cons-Operator

**Weiterführende Links:**
- [Scala Documentation - LazyList](https://www.scala-lang.org/api/current/scala/collection/immutable/LazyList.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; Lazy Streams mit delay/force (SRFI-41)
(define-syntax stream-cons
  (syntax-rules ()
    ((stream-cons head tail)
     (cons head (delay tail)))))

(define (stream-take n s)
  (if (= n 0) '()
      (cons (car s) (stream-take (- n 1) (force (cdr s))))))

(define (naturals n) (stream-cons n (naturals (+ n 1))))
(stream-take 5 (naturals 0))  ; (0 1 2 3 4)
```

**Besonderheiten:**
- `delay`/`force` für explizite Lazy Evaluation (R5RS/R7RS)
- SRFI-41 definiert standardisiertes Stream-Protokoll
- Promises als verzögerte Berechnungen
- Manuelle Stream-Konstruktion über Makros

**Weiterführende Links:**
- [SRFI-41 - Streams](https://srfi.schemers.org/srfi-41/srfi-41.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Lazy Collection (seit Swift 2.0)
let naturals = (0...).lazy

let result = naturals
    .filter { $0 % 2 == 0 }
    .map { $0 * 2 }
    .prefix(5)
// Array(result) = [0, 4, 8, 12, 16]

// Lazy auf bestehenden Collections
let items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let lazyResult = items.lazy.filter { $0 > 5 }.map { $0 * 2 }
```

**Besonderheiten:**
- `.lazy` Property konvertiert jede Collection in eine Lazy Sequence
- Lazy-Operationen (`filter`, `map`, `prefix`) geben `LazySequence` zurück
- Unendliche Ranges `(0...)` sind nativ lazy
- `Array()` zur Materialisierung

**Weiterführende Links:**
- [Apple Documentation - LazySequenceProtocol](https://developer.apple.com/documentation/swift/lazysequenceprotocol)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Generator für Lazy Sequence
function* naturals(): Generator<number> {
    let n = 0;
    while (true) yield n++;
}

// Lazy Verarbeitung
function* take<T>(n: number, gen: Iterable<T>): Generator<T> {
    let i = 0;
    for (const val of gen) {
        if (i++ >= n) break;
        yield val;
    }
}

const result = [...take(5, naturals())];
// [0, 1, 2, 3, 4]
```

**Besonderheiten:**
- Identisch mit JavaScript, ergänzt um Typannotationen
- Generatoren (`function*`) als Grundlage für Lazy Sequences
- `Generator<T>` und `Iterable<T>` Typen
- Keine eingebauten Lazy-Collection-Methoden

**Weiterführende Links:**
- [TypeScript Handbook - Iterators and Generators](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html)

</TabItem>
</Tabs>

## 10.3.7. Persistent / Immutable Datenstrukturen

Datenstrukturen, die bei Modifikation die vorherige Version erhalten. Statt In-Place-Mutation erstellen Operationen neue Versionen, die durch Structural Sharing effizient Speicher und Teile der Originalstruktur teilen.

### Sprachen

<Tabs availableTabs={['clojure', 'elm', 'elixir', 'erlang', 'fsharp', 'gleam', 'haskell', 'idris', 'koka', 'lean4', 'mercury', 'ocaml', 'purescript', 'racket', 'roc', 'scala', 'scheme']} yellowTabs={['csharp', 'java', 'javascript', 'kotlin', 'python', 'rust', 'typescript']}>
<TabItem value="clojure" label="Clojure">

```clojure
;; Persistenter Vector
(def items [10 20 30])
(def items2 (conj items 40))
;; items  = [10 20 30]     (unverändert)
;; items2 = [10 20 30 40]  (neue Version)

;; Persistente Map
(def scores {"Alice" 95 "Bob" 87})
(def scores2 (assoc scores "Carol" 92))
;; scores  = {"Alice" 95, "Bob" 87}             (unverändert)
;; scores2 = {"Alice" 95, "Bob" 87, "Carol" 92}

;; Persistentes Set
(def unique #{10 20 30})
(def unique2 (conj unique 40))
```

**Besonderheiten:**
- Alle Standard-Collections (Vector, Map, Set) sind persistent by default
- Hash Array Mapped Tries (HAMTs) für effizientes Structural Sharing
- O(log₃₂ n) für die meisten Operationen (praktisch O(1))
- Transients für temporäre Mutation bei Performance-kritischem Code

**Weiterführende Links:**
- [Clojure Documentation - Data Structures](https://clojure.org/reference/data_structures)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Persistente Collections via System.Collections.Immutable
// Benötigt: using System.Collections.Immutable;
var items = ImmutableList.Create(10, 20, 30);
var items2 = items.Add(40);
// items  = [10, 20, 30]     (unverändert)
// items2 = [10, 20, 30, 40] (neue Version)

var scores = ImmutableDictionary<string, int>.Empty
    .Add("Alice", 95)
    .Add("Bob", 87);
var scores2 = scores.Add("Carol", 92);
```

**Besonderheiten:**
- `System.Collections.Immutable` Package (seit .NET 4.5)
- `ImmutableList<T>`, `ImmutableDictionary<K,V>`, `ImmutableSortedSet<T>`
- Structural Sharing für effiziente Kopien
- Builder-Pattern für Batch-Operationen: `items.ToBuilder()`

**Weiterführende Links:**
- [Microsoft .NET Documentation - Immutable Collections](https://learn.microsoft.com/en-us/dotnet/api/system.collections.immutable)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Alle Datenstrukturen sind persistent
items = [10, 20, 30]
items2 = [40 | items]
# items  = [10, 20, 30]      (unverändert)
# items2 = [40, 10, 20, 30]  (neue Version, shared tail)

# Maps
scores = %{"Alice" => 95, "Bob" => 87}
scores2 = Map.put(scores, "Carol", 92)
# scores unverändert
```

**Besonderheiten:**
- Alle Datenstrukturen sind persistent by default (funktionale Sprache)
- Listen teilen den Tail (Structural Sharing)
- Maps verwenden HAMTs für effizientes Sharing
- BEAM VM optimiert Garbage Collection für kurzlebige Versionen

**Weiterführende Links:**
- [Elixir Documentation - Collections](https://elixir-lang.org/getting-started/basic-types.html)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Alle Datenstrukturen sind persistent
items = [10, 20, 30]
items2 = 40 :: items
-- items  = [10, 20, 30]      (unverändert)
-- items2 = [40, 10, 20, 30]  (neue Version)

-- Dict
scores = Dict.fromList [("Alice", 95), ("Bob", 87)]
scores2 = Dict.insert "Carol" 92 scores
-- scores unverändert
```

**Besonderheiten:**
- Alle Datenstrukturen sind persistent by default (rein funktionale Sprache)
- `Dict` und `Set` basieren auf balancierten Bäumen
- Kein Weg zur Mutation (kein Escape Hatch)
- Elm Runtime optimiert Updates durch Virtual DOM Diffing

**Weiterführende Links:**
- [Elm Documentation - Dict](https://package.elm-lang.org/packages/elm/core/latest/Dict)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% Alle Datenstrukturen sind persistent
Items = [10, 20, 30],
Items2 = [40 | Items],
% Items  = [10, 20, 30]      (unverändert)
% Items2 = [40, 10, 20, 30]  (neue Version)

% Maps
Scores = #{"Alice" => 95, "Bob" => 87},
Scores2 = Scores#{"Carol" => 92}.
% Scores unverändert
```

**Besonderheiten:**
- Alle Datenstrukturen sind persistent by default (funktionale Sprache)
- Listen teilen den Tail (Structural Sharing)
- Variablen sind Single-Assignment (kein Rebinding)
- BEAM VM Garbage Collector optimiert für kurzlebige Daten

**Weiterführende Links:**
- [Erlang Documentation - Data Types](https://www.erlang.org/doc/reference_manual/data_types.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Listen sind persistent
let items = [10; 20; 30]
let items2 = 40 :: items
// items  = [10; 20; 30]      (unverändert)
// items2 = [40; 10; 20; 30]  (neue Version)

// Map
let scores = Map [("Alice", 95); ("Bob", 87)]
let scores2 = scores |> Map.add "Carol" 92
// scores unverändert
```

**Besonderheiten:**
- Listen, Maps und Sets sind persistent by default
- `::` (Cons) für O(1) Prepend mit Structural Sharing
- `Map` und `Set` basieren auf balancierten AVL-Bäumen
- `Array` und `ResizeArray` als mutable Alternativen verfügbar

**Weiterführende Links:**
- [F# Documentation - Collections](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/fsharp-collection-types)

</TabItem>
<TabItem value="gleam" label="Gleam">

```erlang
// Alle Datenstrukturen sind persistent
let items = [10, 20, 30]
let items2 = [40, ..items]
// items  = [10, 20, 30]      (unverändert)
// items2 = [40, 10, 20, 30]  (neue Version)

// Dict
let scores = dict.from_list([#("Alice", 95), #("Bob", 87)])
let scores2 = dict.insert(scores, "Carol", 92)
```

**Besonderheiten:**
- Alle Datenstrukturen sind persistent by default (funktionale Sprache auf BEAM)
- Listen teilen den Tail
- Spread-Syntax `[head, ..tail]` für Konstruktion
- Profitiert von BEAM VMs Optimierungen für persistente Daten

**Weiterführende Links:**
- [Gleam Documentation - Data Types](https://gleam.run/book/tour/lists.html)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Alle Datenstrukturen sind persistent
items = [10, 20, 30]
items2 = 40 : items
-- items  = [10, 20, 30]      (unverändert)
-- items2 = [40, 10, 20, 30]  (neue Version)

-- Data.Map
import qualified Data.Map as Map
scores = Map.fromList [("Alice", 95), ("Bob", 87)]
scores2 = Map.insert "Carol" 92 scores
-- scores unverändert
```

**Besonderheiten:**
- Alle Datenstrukturen sind persistent by default (rein funktionale Sprache)
- `Data.Map` und `Data.Set` basieren auf balancierten Bäumen (Size Balanced Trees)
- `Data.HashMap` für Hash-basierte persistente Maps
- Lazy Evaluation ermöglicht effiziente Sharing-Strategien

**Weiterführende Links:**
- [Haskell Documentation - Data.Map](https://hackage.haskell.org/package/containers/docs/Data-Map-Strict.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Listen sind persistent
items : List Int
items = [10, 20, 30]
items2 = 40 :: items
-- items  = [10, 20, 30]      (unverändert)
-- items2 = [40, 10, 20, 30]  (neue Version)

-- SortedMap
import Data.SortedMap
scores = fromList [("Alice", 95), ("Bob", 87)]
scores2 = insert "Carol" 92 scores
```

**Besonderheiten:**
- Alle Datenstrukturen sind persistent by default (rein funktionale Sprache)
- Dependent Types ermöglichen längenkodierte Collections
- `SortedMap` und `SortedSet` für persistente Maps/Sets
- Linearitätstypen (Quantitative Type Theory) können Mutation ermöglichen

**Weiterführende Links:**
- [Idris 2 Documentation - Data Types](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Persistente Collections via Bibliotheken
// Vavr (ehemals Javaslang)
// Benötigt: io.vavr.collection
io.vavr.collection.List<Integer> items = io.vavr.collection.List.of(10, 20, 30);
io.vavr.collection.List<Integer> items2 = items.append(40);
// items  = List(10, 20, 30)      (unverändert)
// items2 = List(10, 20, 30, 40)  (neue Version)

// Immutable Collections (seit Java 9, aber nicht persistent)
var list = List.of(10, 20, 30);
// list.add(40); // UnsupportedOperationException
```

**Besonderheiten:**
- Keine persistenten Collections in der Standardbibliothek
- `List.of()` (seit Java 9) erzeugt immutable, aber nicht persistente Collections
- Vavr-Library bietet persistente Collections mit Structural Sharing
- PCollections als weitere Alternative

**Weiterführende Links:**
- [Vavr Documentation - Collections](https://docs.vavr.io/#_collections)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Immutable.js Library
// Benötigt: import { List, Map } from 'immutable';
const items = List([10, 20, 30]);
const items2 = items.push(40);
// items  = List [10, 20, 30]      (unverändert)
// items2 = List [10, 20, 30, 40]  (neue Version)

const scores = Map({ Alice: 95, Bob: 87 });
const scores2 = scores.set("Carol", 92);
```

**Besonderheiten:**
- Keine nativen persistenten Datenstrukturen
- Immutable.js bietet persistente Collections mit Structural Sharing (HAMTs)
- `Object.freeze()` erzeugt immutable, aber nicht persistente Objekte
- Records & Tuples Proposal für native immutable Typen

**Weiterführende Links:**
- [Immutable.js Documentation](https://immutable-js.com/)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
// Listen sind persistent by default
val items = [10, 20, 30]
val items2 = Cons(40, items)
// items  = [10, 20, 30]      (unverändert)
// items2 = [40, 10, 20, 30]  (neue Version)

// Effiziente funktionale Updates durch FBIP
fun increment-all(xs : list<int>) : list<int>
  match xs
    Nil        -> Nil
    Cons(x,xx) -> Cons(x + 1, increment-all(xx))
// Compiler optimiert zu In-Place-Update bei eindeutiger Referenz
```

**Besonderheiten:**
- Alle Datenstrukturen sind persistent by default (rein funktionale Sprache)
- FBIP (Functional But In-Place): Compiler erkennt eindeutige Referenzen und optimiert zu In-Place-Updates
- Perceus Reference Counting ermöglicht deterministische Speicherverwaltung
- Structural Sharing durch algebraische Datentypen

**Weiterführende Links:**
- [Koka FBIP Paper](https://koka-lang.github.io/koka/doc/book.html#sec-fbip)
- [Koka Language Guide](https://koka-lang.github.io/koka/doc/book.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Persistente Collections via kotlinx.collections.immutable
// Benötigt: import kotlinx.collections.immutable.*
val items = persistentListOf(10, 20, 30)
val items2 = items.add(40)
// items  = [10, 20, 30]      (unverändert)
// items2 = [10, 20, 30, 40]  (neue Version)

val scores = persistentMapOf("Alice" to 95, "Bob" to 87)
val scores2 = scores.put("Carol", 92)
```

**Besonderheiten:**
- Keine nativen persistenten Datenstrukturen
- `kotlinx.collections.immutable` bietet persistente Collections
- `listOf()` erzeugt read-only Views, keine persistenten Strukturen
- `PersistentList`, `PersistentMap`, `PersistentSet` mit Structural Sharing

**Weiterführende Links:**
- [kotlinx.collections.immutable](https://github.com/Kotlin/kotlinx.collections.immutable)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Listen sind persistent
def items : List Nat := [10, 20, 30]
def items2 : List Nat := 40 :: items
-- items  = [10, 20, 30]      (unverändert)
-- items2 = [40, 10, 20, 30]  (neue Version)

-- Array (persistent, optimiert bei eindeutiger Referenz)
def arr : Array Nat := #[10, 20, 30]
def arr2 : Array Nat := arr.push 40
-- arr  = #[10, 20, 30]      (unverändert)
-- arr2 = #[10, 20, 30, 40]  (neue Version)

-- HashMap
def scores : Std.HashMap String Nat :=
  Std.HashMap.ofList [("Alice", 95), ("Bob", 87)]
def scores2 := scores.insert "Carol" 92
-- scores unverändert
```

**Besonderheiten:**
- Alle Standard-Collections (`List`, `Array`, `HashMap`) sind persistent by default
- `::` (Cons) für O(1) Prepend auf Listen mit Structural Sharing
- Der Compiler optimiert `Array`-Operationen zu In-Place-Updates bei eindeutiger Referenz
- Ähnlich wie Roc: Uniqueness-basierte Optimierung für funktionale Updates

**Weiterführende Links:**
- [Lean 4 Documentation - Data Structures](https://lean-lang.org/lean4/doc/data_types.html)
- [Lean 4 Documentation - Array](https://lean-lang.org/lean4/doc/array.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Listen sind persistent
Items = [10, 20, 30],
Items2 = [40 | Items],
% Items  = [10, 20, 30]      (unverändert)
% Items2 = [40, 10, 20, 30]  (neue Version, shared tail)

% Map (balanced binary tree)
map.init(Map0),
map.set("Alice", 95, Map0, Map1),
map.set("Bob", 87, Map1, Scores),
map.set("Carol", 92, Scores, Scores2)
% Scores unverändert
```

**Besonderheiten:**
- Alle Standard-Collections (`list`, `map`, `set`) sind persistent by default
- Listen teilen den Tail (Structural Sharing via Cons-Zellen)
- `map` basiert auf 234-Bäumen (balanced) – effizientes Sharing bei Updates
- Rein deklarative Sprache ohne In-Place-Mutation (außer `array` mit unique modes)

**Weiterführende Links:**
- [Mercury Standard Library - list](https://www.mercurylang.org/information/doc-release/mercury_library/list.html)
- [Mercury Standard Library - map](https://www.mercurylang.org/information/doc-release/mercury_library/map.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Listen sind persistent *)
let items = [10; 20; 30]
let items2 = 40 :: items
(* items  = [10; 20; 30]      (unverändert) *)
(* items2 = [40; 10; 20; 30]  (neue Version) *)

(* Map *)
module StringMap = Map.Make(String)
let scores = StringMap.empty
  |> StringMap.add "Alice" 95
  |> StringMap.add "Bob" 87
let scores2 = StringMap.add "Carol" 92 scores
```

**Besonderheiten:**
- Listen, Maps und Sets sind persistent by default
- `Map.Make` Funktor für typisierte persistente Maps
- Basiert auf balancierten Bäumen (AVL-Bäume)
- `Array` und `Hashtbl` als mutable Alternativen verfügbar

**Weiterführende Links:**
- [OCaml Documentation - Map](https://v2.ocaml.org/api/Map.html)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Listen sind persistent
items :: List Int
items = 10 : 20 : 30 : Nil
items2 = 40 : items
-- items  = (10 : 20 : 30 : Nil)      (unverändert)
-- items2 = (40 : 10 : 20 : 30 : Nil)  (neue Version)

-- Map
scores = Map.fromFoldable [Tuple "Alice" 95, Tuple "Bob" 87]
scores2 = Map.insert "Carol" 92 scores
```

**Besonderheiten:**
- Alle Datenstrukturen sind persistent by default (rein funktionale Sprache)
- `Data.Map` und `Data.Set` für persistente Maps/Sets
- Structural Sharing durch funktionale Datenstrukturen
- Immutability wird durch das Typsystem erzwungen

**Weiterführende Links:**
- [PureScript Documentation - Data.Map](https://pursuit.purescript.org/packages/purescript-ordered-collections)

</TabItem>
<TabItem value="python" label="Python">

```python
# Persistente Datenstrukturen via pyrsistent
# Benötigt: from pyrsistent import pvector, pmap, pset
items = pvector([10, 20, 30])
items2 = items.append(40)
# items  = pvector([10, 20, 30])      (unverändert)
# items2 = pvector([10, 20, 30, 40])  (neue Version)

scores = pmap({"Alice": 95, "Bob": 87})
scores2 = scores.set("Carol", 92)
```

**Besonderheiten:**
- Keine nativen persistenten Datenstrukturen
- `pyrsistent` Library bietet `pvector`, `pmap`, `pset` mit Structural Sharing
- Tuples und Frozensets sind immutable, aber nicht persistent (kein effizientes Update)
- `pyrsistent` nutzt HAMTs für O(log₃₂ n) Operationen

**Weiterführende Links:**
- [pyrsistent Documentation](https://pyrsistent.readthedocs.io/)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
;; Listen sind persistent
(define items (list 10 20 30))
(define items2 (cons 40 items))
;; items  = '(10 20 30)       (unverändert)
;; items2 = '(40 10 20 30)    (neue Version)

;; Immutable Hash
(define scores (hash "Alice" 95 "Bob" 87))
(define scores2 (hash-set scores "Carol" 92))
```

**Besonderheiten:**
- Listen sind persistent by default (Cons-Zellen mit Structural Sharing)
- Immutable Hash-Tables mit `hash` / `hash-set`
- Functional Update Pattern als Standard
- Mutable Varianten mit `!`-Suffix (`hash-set!`)

**Weiterführende Links:**
- [Racket Documentation - Hash Tables](https://docs.racket-lang.org/reference/hashtables.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
# Alle Datenstrukturen sind persistent
items = [10, 20, 30]
items2 = List.append items 40
# items  = [10, 20, 30]      (unverändert)
# items2 = [10, 20, 30, 40]  (neue Version)

# Dict
scores = Dict.fromList [("Alice", 95), ("Bob", 87)]
scores2 = Dict.insert scores "Carol" 92
```

**Besonderheiten:**
- Alle Datenstrukturen sind persistent by default (rein funktionale Sprache)
- Compiler kann in vielen Fällen In-Place-Mutation optimieren (Uniqueness Typing)
- Wenn eine Referenz einzigartig ist, wird In-Place mutiert statt kopiert

**Weiterführende Links:**
- [Roc Documentation - Collections](https://www.roc-lang.org/builtins/List)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Persistente Datenstrukturen via im-rs
// Benötigt: use im::Vector;
let items = Vector::from(vec![10, 20, 30]);
let items2 = {
    let mut v = items.clone();
    v.push_back(40);
    v
};
// items  = [10, 20, 30]      (unverändert, geshared)
// items2 = [10, 20, 30, 40]  (neue Version)

// Benötigt: use im::HashMap;
let scores = HashMap::from(vec![("Alice", 95), ("Bob", 87)]);
let scores2 = scores.update("Carol", 92);
```

**Besonderheiten:**
- Keine persistenten Collections in der Standardbibliothek
- `im`-Crate bietet persistente `Vector`, `HashMap`, `HashSet`, `OrdMap`
- Basiert auf RRB-Bäumen und HAMTs für effizientes Structural Sharing
- `rpds`-Crate als Alternative

**Weiterführende Links:**
- [im-rs Documentation](https://docs.rs/im/latest/im/)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Listen sind persistent by default
val items = List(10, 20, 30)
val items2 = 40 :: items
// items  = List(10, 20, 30)       (unverändert)
// items2 = List(40, 10, 20, 30)   (neue Version)

// Map
val scores = Map("Alice" -> 95, "Bob" -> 87)
val scores2 = scores + ("Carol" -> 92)
// scores unverändert

// Vector (breiter Baum, gute Indexierung)
val vec = Vector(10, 20, 30)
val vec2 = vec :+ 40
```

**Besonderheiten:**
- Standard-Collections (`List`, `Map`, `Set`, `Vector`) sind persistent by default
- `Vector` basiert auf breiten Bäumen (effiziente Indexierung und Updates)
- `List` als klassische Cons-Liste (O(1) Prepend)
- `HashMap` basiert auf HAMTs

**Weiterführende Links:**
- [Scala Documentation - Immutable Collections](https://docs.scala-lang.org/overviews/collections-2.13/concrete-immutable-collection-classes.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; Listen sind persistent
(define items (list 10 20 30))
(define items2 (cons 40 items))
;; items  = (10 20 30)       (unverändert)
;; items2 = (40 10 20 30)    (neue Version)

;; Association List (persistent Map)
(define scores '(("Alice" . 95) ("Bob" . 87)))
(define scores2 (cons '("Carol" . 92) scores))
```

**Besonderheiten:**
- Listen sind persistent by default (Cons-Zellen mit Structural Sharing)
- Association Lists als einfache persistente Maps
- SRFI-146 für effiziente persistente Maps (Hash-Tries)
- Keine nativen persistenten Sets

**Weiterführende Links:**
- [R7RS Scheme Specification](https://small.r7rs.org/attachment/r7rs.pdf)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Immutable.js Library mit TypeScript-Typen
// Benötigt: import { List, Map } from 'immutable';
const items = List([10, 20, 30]);
const items2 = items.push(40);
// items  = List [10, 20, 30]      (unverändert)
// items2 = List [10, 20, 30, 40]  (neue Version)

const scores = Map({ Alice: 95, Bob: 87 });
const scores2 = scores.set("Carol", 92);
```

**Besonderheiten:**
- Identisch mit JavaScript, ergänzt um Typannotationen
- Immutable.js bietet TypeScript-Typdefinitionen
- `Readonly<T>` und `ReadonlyArray<T>` erzwingen Immutability, aber kein Structural Sharing

**Weiterführende Links:**
- [Immutable.js Documentation](https://immutable-js.com/)

</TabItem>
</Tabs>

