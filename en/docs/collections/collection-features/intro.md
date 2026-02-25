---
slug: /collections/collection-features
title: 10.3. Collection Features
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 10.3. Collection Features

Additional features of collections.

## 10.3.1. Immutable Collections

Collections that cannot be changed after their creation. Operations such as adding or removing elements create new collections instead of modifying the existing one.

### Languages {#sprachen}

<Tabs availableTabs={['clojure', 'csharp', 'elixir', 'elm', 'erlang', 'fsharp', 'gleam', 'groovy', 'haskell', 'idris', 'java', 'koka', 'kotlin', 'lean4', 'mercury', 'objective-c', 'purescript', 'racket', 'roc', 'rust', 'scala', 'scheme', 'swift']}>
<TabItem value="clojure" label="Clojure">

```clojure
;; Collections are immutable by default
(def items [10 20 30])
(def items2 (conj items 40))

;; Access
(def first-item (first items))
```

**Special features:**
- All collections are immutable by default
- Operations create new collections (structural sharing)
- Persistent data structures for efficient copies

**Further reading:**
- [Clojure Documentation - Collections](https://clojure.org/reference/data_structures)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// ImmutableList (since .NET Framework 4.5)
// Requires: using System.Collections.Immutable;
var items = ImmutableList<int>.Empty.Add(10).Add(20).Add(30);
var items2 = items.Add(40);

// ImmutableArray
var array = ImmutableArray.Create(10, 20, 30);
var array2 = array.Add(40);
```

**Special features:**
- `ImmutableList` and `ImmutableArray` since .NET Framework 4.5
- Operations create new collections
- Thread-safe by design

**Further reading:**
- [Microsoft .NET Documentation - Immutable Collections](https://learn.microsoft.com/en-us/dotnet/api/system.collections.immutable)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Lists are immutable
items = [10, 20, 30]
items2 = [40 | items]

# Access
first_item = List.first(items)
```

**Special features:**
- All collections are immutable
- Pattern matching for access
- Functional programming

**Further reading:**
- [Elixir Documentation - Lists](https://hexdocs.pm/elixir/List.html)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Lists are immutable
items = [10, 20, 30]
items2 = 40 :: items

-- Access
firstItem = List.head items
```

**Special features:**
- All collections are immutable
- `::` for prepend
- Functional programming

**Further reading:**
- [Elm Documentation - List](https://package.elm-lang.org/packages/elm/core/latest/List)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% Lists are immutable
Items = [10, 20, 30],
Items2 = [40 | Items],

% Access
FirstItem = hd(Items).
```

**Special features:**
- All collections are immutable
- Pattern matching for access
- Functional programming

**Further reading:**
- [Erlang Documentation - Lists](https://www.erlang.org/doc/man/erlang.html#hd-1)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Lists are immutable
let items = [10; 20; 30]
let items2 = 40 :: items

// Access
let firstItem = List.head items
```

**Special features:**
- Lists are immutable by default
- `::` for prepend
- Functional programming

**Further reading:**
- [F# Documentation - Lists](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/lists)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// Lists are immutable
let items = [10, 20, 30]
let items2 = [40, ..items]

// Access
let first_item = list.first(items)
```

**Special features:**
- All collections are immutable
- Spread syntax for concatenation
- Functional programming

**Further reading:**
- [Gleam Documentation - Lists](https://gleam.run/documentation/gleam/list/)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Lists are immutable
items = [10, 20, 30]
items2 = 40 : items

-- Access
firstItem = head items
```

**Special features:**
- All collections are immutable
- `:` for prepend
- Functional programming

**Further reading:**
- [Haskell Documentation - Lists](https://www.haskell.org/onlinereport/haskell2010/haskellch3.html#x8-420003.7)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Lists are immutable
items : List Int
items = [10, 20, 30]
items2 = 40 :: items

-- Access
firstItem : Maybe Int
firstItem = head' items
```

**Special features:**
- All collections are immutable
- `::` for prepend
- Dependent types

**Further reading:**
- [Idris 2 Documentation - Types and Functions](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
// Lists are immutable by default
val items = [10, 20, 30]
val items2 = Cons(40, items)

// Access
val first-item = items.head
```

**Special features:**
- All collections are immutable by default
- `Cons` for prepend, `++` for concatenation
- Koka uses Perceus Reference Counting for efficient functional updates (FBIP)

**Further reading:**
- [Koka Standard Library - list](https://koka-lang.github.io/koka/doc/std_core_list.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// ImmutableList (since Java 9)
List<Integer> items = List.of(10, 20, 30);
// items.add(40); // UnsupportedOperationException

// Guava ImmutableList
// Requires: com.google.common.collect.ImmutableList
// ImmutableList<Integer> items = ImmutableList.of(10, 20, 30);
```

**Special features:**
- `List.of()` creates immutable lists (since Java 9)
- Guava provides `ImmutableList` for older versions
- Operations throw `UnsupportedOperationException`

**Further reading:**
- [Oracle Java Documentation - List.of()](https://docs.oracle.com/javase/9/docs/api/java/util/List.html#of--)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// List is immutable
val items = listOf(10, 20, 30)
val items2 = items + 40

// Access
val firstItem = items.first()
```

**Special features:**
- `List` is immutable by default
- `+` operator creates new list
- `MutableList` for mutable collections

**Further reading:**
- [Kotlin Documentation - Collections](https://kotlinlang.org/docs/collections-overview.html)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Lists are immutable
let items = [10, 20, 30]
let items2 = items <> [40]

-- Access
let firstItem = head items
```

**Special features:**
- All collections are immutable
- `<>` for concatenation
- Functional programming

**Further reading:**
- [PureScript Documentation - Lists](https://pursuit.purescript.org/packages/purescript-lists)

</TabItem>
<TabItem value="roc" label="Roc">

```roc
# Lists are immutable
items = [10, 20, 30]
items2 = List.append items 40

# Access
firstItem = List.first items
```

**Special features:**
- All collections are immutable
- `List.append`, `List.concat` for new lists
- Functional programming

**Further reading:**
- [Roc Documentation - Lists](https://www.roc-lang.org/builtins/List)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Arc for immutable shared ownership
use std::sync::Arc;
let items = Arc::new(vec![10, 20, 30]);
let items2 = items.clone();

// Rc for single-threaded immutable sharing
use std::rc::Rc;
let items_rc = Rc::new(vec![10, 20, 30]);
let items2_rc = items_rc.clone();
```

**Special features:**
- `Arc` for thread-safe immutable sharing
- `Rc` for single-threaded immutable sharing
- Collections themselves are usually mutable, but ownership can be shared

**Further reading:**
- [Rust Documentation - Arc](https://doc.rust-lang.org/std/sync/struct.Arc.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// List is immutable
val items = List(10, 20, 30)
val items2 = items :+ 40

// Access
val firstItem = items.head
```

**Special features:**
- `List` is immutable by default
- `:+` for append (creates new list)
- `mutable.ListBuffer` for mutable lists

**Further reading:**
- [Scala Documentation - Lists](https://docs.scala-lang.org/overviews/collections-2.13/lists.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; Lists are immutable
(define items (list 10 20 30))
(define items2 (cons 40 items))

;; Access
(define first-item (car items))
```

**Special features:**
- Lists are immutable linked lists
- `cons` for construction
- Functional programming

**Further reading:**
- [R7RS Scheme - Lists](https://small.r7rs.org/attachment/r7rs.pdf)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
;; Lists are immutable
(define items (list 10 20 30))
(define items2 (cons 40 items))

;; Access
(define first-item (first items))
```

**Special features:**
- Lists are immutable linked lists
- `cons` for construction
- Functional programming

**Further reading:**
- [Racket Documentation - Lists](https://docs.racket-lang.org/reference/pairs.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Arrays with let are immutable
let items = [10, 20, 30]
// items.append(40) // Compiler error

// Create new collection
let items2 = items + [40]
```

**Special features:**
- Arrays with `let` are immutable
- `var` allows mutation
- Value semantics

**Further reading:**
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

**Special features:**
- `.asImmutable()` creates unchangeable copy
- Modification attempts throw `UnsupportedOperationException`
- Also `Collections.unmodifiableList()` etc. available (Java interop)

**Further reading:**
- [Groovy Documentation - Collections](https://groovy-lang.org/groovy-dev-kit.html#_working_with_collections)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Lists are immutable by default
def items : List Nat := [10, 20, 30]
def items2 : List Nat := 40 :: items
-- items = [10, 20, 30] (unchanged)
-- items2 = [40, 10, 20, 30]

-- Array (immutable, copied on modification)
def arr : Array Nat := #[10, 20, 30]
def arr2 : Array Nat := arr.push 40
-- arr = #[10, 20, 30] (unchanged)

-- Access
def firstItem : Option Nat := items.head?
```

**Special features:**
- All collections (`List`, `Array`) are immutable by default
- Operations like `push`, `::` create new collections
- The compiler optimizes to in-place updates when reference is unique
- No separate immutable/mutable variants needed

**Further reading:**
- [Lean 4 Documentation - List](https://lean-lang.org/lean4/doc/data_types.html)
- [Lean 4 Documentation - Array](https://lean-lang.org/lean4/doc/array.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Lists are immutable by default
Items = [10, 20, 30],
Items2 = [40 | Items],
% Items  = [10, 20, 30]      (unchanged)
% Items2 = [40, 10, 20, 30]  (new version)

% Access
FirstItem = list.det_head(Items)
```

**Special features:**
- All data structures (lists, maps, sets) are immutable by default
- Purely declarative language – mutation is conceptually excluded
- `[H | T]` syntax for cons operation (prepend)
- Operations create new collections with structural sharing

**Further reading:**
- [Mercury Standard Library - list](https://www.mercurylang.org/information/doc-release/mercury_library/list.html)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Immutable Collections
NSArray *array = @[@1, @2, @3];
NSDictionary *dict = @{@"key": @"value"};
NSSet *set = [NSSet setWithObjects:@"A", @"B", nil];

// No modification possible
// [array addObject:@4]; // Compile-Error: NSArray has no addObject:
```

**Special features:**
- `NSArray`, `NSDictionary`, `NSSet` are immutable by default
- Immutability is enforced at compile time
- Mutable variants: `NSMutableArray`, `NSMutableDictionary`, `NSMutableSet`
- `copy` creates an immutable copy

**Further reading:**
- [Apple Documentation - Collections](https://developer.apple.com/documentation/foundation/collections)

</TabItem>
</Tabs>


## 10.3.2. Mutable Collections

Collections that can be changed after their creation. Elements can be added, removed, or modified without creating a new collection.

### Languages {#sprachen}

<Tabs availableTabs={['ada', 'c', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'go', 'groovy', 'haxe', 'java', 'javascript', 'julia', 'kotlin', 'lua', 'matlab', 'nim', 'object-pascal', 'objective-c', 'ocaml', 'octave', 'odin', 'perl', 'php', 'python', 'r', 'ruby', 'rust', 'scala', 'swift', 'typescript', 'v', 'vbnet', 'wolfram-language']} yellowTabs={['mercury']}>
<TabItem value="ada" label="Ada">

```ada
-- Arrays are mutable
Numbers : array (1 .. 5) of Integer := (10, 20, 30, 40, 50);
Numbers(1) := 15;
```

**Special features:**
- Arrays are mutable
- Index-based
- Type-safe

**Further reading:**
- [Ada Documentation - Arrays](https://learn.adacore.com/courses/intro-to-ada/chapters/arrays.html)

</TabItem>
<TabItem value="c" label="C">

```c
// Arrays are mutable
int numbers[] = {10, 20, 30, 40, 50};
numbers[0] = 15;
```

**Special features:**
- Arrays are mutable
- Index-based
- No bounds checking

**Further reading:**
- [C Standard Documentation](https://www.open-std.org/jtc1/sc22/wg14/www/docs/n1570.pdf)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// List is mutable
List<int> items = new List<int> { 10, 20, 30 };
items.Add(40);
items[0] = 15;
```

**Special features:**
- `List<T>` is mutable
- Dynamic size
- Generics for type safety

**Further reading:**
- [Microsoft C# Documentation - List](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// std::vector is mutable
std::vector<int> items = {10, 20, 30};
items.push_back(40);
items[0] = 15;
```

**Special features:**
- `std::vector` is mutable
- Dynamic size
- Template-based

**Further reading:**
- [cppreference.com - std::vector](https://en.cppreference.com/w/cpp/container/vector)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Arrays are mutable
items = [10, 20, 30]
items << 40
items[0] = 15
```

**Special features:**
- Arrays are mutable
- Dynamic size
- `<<` for append

**Further reading:**
- [Crystal Documentation - Arrays](https://crystal-lang.org/reference/1.9/syntax_and_semantics/literals/array.html)

</TabItem>
<TabItem value="d" label="D">

```d
// Arrays are mutable
int[] items = [10, 20, 30];
items ~= 40;
items[0] = 15;
```

**Special features:**
- Arrays are mutable
- `~=` for append
- Dynamic size

**Further reading:**
- [D Documentation - Arrays](https://dlang.org/spec/arrays.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// List is mutable
List<int> items = [10, 20, 30];
items.add(40);
items[0] = 15;
```

**Special features:**
- `List` is mutable
- Dynamic size
- `add` for adding

**Further reading:**
- [Dart Documentation - Lists](https://dart.dev/guides/libraries/library-tour#lists)

</TabItem>
<TabItem value="go" label="Go">

```go
// Slices are mutable
items := []int{10, 20, 30}
items = append(items, 40)
items[0] = 15
```

**Special features:**
- Slices are mutable
- `append` creates new slice if needed
- Dynamic size

**Further reading:**
- [Go Documentation - Slices](https://go.dev/blog/slices-intro)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Lists are mutable
def items = [10, 20, 30]
items << 40
items[0] = 15
```

**Special features:**
- Lists are mutable
- Dynamic size
- `<<` for append

**Further reading:**
- [Groovy Documentation - Lists](https://groovy-lang.org/groovy-dev-kit.html#_working_with_collections)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Arrays are mutable
var items = [10, 20, 30];
items.push(40);
items[0] = 15;
```

**Special features:**
- Arrays are mutable
- Dynamic size
- `push` for adding

**Further reading:**
- [Haxe Documentation - Arrays](https://haxe.org/manual/std-Array.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// ArrayList is mutable
List<Integer> items = new ArrayList<>();
items.add(10);
items.add(20);
items.add(30);
items.add(40);
items.set(0, 15);
```

**Special features:**
- `ArrayList` is mutable
- Dynamic size
- Generics for type safety

**Further reading:**
- [Oracle Java Documentation - ArrayList](https://docs.oracle.com/javase/8/docs/api/java/util/ArrayList.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Arrays are mutable
const items = [10, 20, 30];
items.push(40);
items[0] = 15;
```

**Special features:**
- Arrays are mutable
- Dynamic size
- `push` for adding

**Further reading:**
- [MDN Web Docs - Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Arrays are mutable
items = [10, 20, 30]
push!(items, 40)
items[1] = 15
```

**Special features:**
- Arrays are mutable
- Dynamic size
- `push!` for adding (mutating)

**Further reading:**
- [Julia Documentation - Arrays](https://docs.julialang.org/en/v1/manual/arrays/)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// MutableList is mutable
val items = mutableListOf(10, 20, 30)
items.add(40)
items[0] = 15
```

**Special features:**
- `MutableList` is mutable
- `List` is immutable
- Dynamic size

**Further reading:**
- [Kotlin Documentation - Collections](https://kotlinlang.org/docs/collections-overview.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Tables are mutable
items = {10, 20, 30}
table.insert(items, 40)
items[1] = 15
```

**Special features:**
- Tables are mutable
- Dynamic size
- `table.insert` for adding

**Further reading:**
- [Lua Documentation - Tables](https://www.lua.org/manual/5.4/manual.html#2.1)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% Arrays are mutable
items = [10, 20, 30];
items(end+1) = 40;
items(1) = 15;
```

**Special features:**
- Arrays are mutable
- 1-based indexing
- Dynamic size

**Further reading:**
- [MATLAB Documentation - Arrays](https://www.mathworks.com/help/matlab/learn_matlab/arrays.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Requires: :- import_module array.
% Arrays support destructive update (unique modes)
Array0 = array.from_list([10, 20, 30]),
array.set(0, 15, Array0, Array1),
Value = array.lookup(Array1, 0)   % Value = 15
```

**Special features:**
- Only `array` supports mutation (via unique modes `di`/`uo`)
- Lists, maps, and sets are exclusively immutable
- Destructive update is guaranteed by the compiler's mode system
- Mutation only within predicates with correct unique mode declarations

**Further reading:**
- [Mercury Standard Library - array](https://www.mercurylang.org/information/doc-release/mercury_library/array.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Sequences are mutable
var items = @[10, 20, 30]
items.add(40)
items[0] = 15
```

**Special features:**
- Sequences are mutable
- Dynamic size
- `add` for adding

**Further reading:**
- [Nim Documentation - Sequences](https://nim-lang.org/docs/seqs.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Arrays are mutable
var
  items: array[0..2] of Integer = (10, 20, 30);
begin
  items[0] := 15;
end;
```

**Special features:**
- Arrays are mutable
- Fixed or dynamic size
- Type-safe

**Further reading:**
- [Object Pascal Documentation](https://www.freepascal.org/docs-html/ref/refsu14.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Arrays are mutable *)
let items = [|10; 20; 30|] in
items.(0) <- 15;
```

**Special features:**
- Arrays are mutable
- Lists are immutable
- `.(index)` for access

**Further reading:**
- [OCaml Documentation - Arrays](https://v2.ocaml.org/api/Array.html)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
% Arrays are mutable
items = [10, 20, 30];
items(end+1) = 40;
items(1) = 15;
```

**Special features:**
- Arrays are mutable
- 1-based indexing
- Dynamic size

**Further reading:**
- [Octave Documentation - Arrays](https://octave.org/doc/v8.1.0/Array-Objects.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Dynamic Arrays are mutable
items := [dynamic]int{10, 20, 30}
append(&items, 40)
items[0] = 15
```

**Special features:**
- Dynamic Arrays are mutable
- `append` for adding
- Memory management

**Further reading:**
- [Odin Documentation - Arrays](https://odin-lang.org/docs/overview/#arrays)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Arrays are mutable
my @items = (10, 20, 30);
push @items, 40;
$items[0] = 15;
```

**Special features:**
- Arrays are mutable
- Dynamic size
- `push` for adding

**Further reading:**
- [Perl Documentation - Arrays](https://perldoc.perl.org/perldata#Arrays)

</TabItem>
<TabItem value="php" label="PHP">

```php
// Arrays are mutable
$items = [10, 20, 30];
$items[] = 40;
$items[0] = 15;
```

**Special features:**
- Arrays are mutable
- Dynamic size
- `[]` for adding

**Further reading:**
- [PHP Documentation - Arrays](https://www.php.net/manual/en/language.types.array.php)

</TabItem>
<TabItem value="python" label="Python">

```python
# Lists are mutable
items = [10, 20, 30]
items.append(40)
items[0] = 15
```

**Special features:**
- Lists are mutable
- Dynamic size
- `append` for adding

**Further reading:**
- [Python Documentation - Lists](https://docs.python.org/3/tutorial/datastructures.html#more-on-lists)

</TabItem>
<TabItem value="r" label="R">

```r
# Vectors are mutable
items <- c(10, 20, 30)
items <- c(items, 40)
items[1] <- 15
```

**Special features:**
- Vectors are mutable
- 1-based indexing
- `c()` for concatenation

**Further reading:**
- [R Documentation - Vectors](https://cran.r-project.org/doc/manuals/r-release/R-intro.html#Vectors-and-assignment)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Arrays are mutable
items = [10, 20, 30]
items << 40
items[0] = 15
```

**Special features:**
- Arrays are mutable
- Dynamic size
- `<<` for append

**Further reading:**
- [Ruby Documentation - Arrays](https://ruby-doc.org/core-3.1.0/Array.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Vec is mutable
let mut items = vec![10, 20, 30];
items.push(40);
items[0] = 15;
```

**Special features:**
- `Vec` is mutable with `mut`
- Dynamic size
- Ownership-based

**Further reading:**
- [Rust Documentation - Vec](https://doc.rust-lang.org/std/vec/struct.Vec.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// mutable.ListBuffer is mutable
import scala.collection.mutable.ListBuffer
val items = ListBuffer(10, 20, 30)
items += 40
items(0) = 15
```

**Special features:**
- `mutable.ListBuffer` is mutable
- `List` is immutable
- `+=` for adding

**Further reading:**
- [Scala Documentation - Collections](https://docs.scala-lang.org/overviews/collections-2.13/introduction.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Arrays with var are mutable
var items = [10, 20, 30]
items.append(40)
items[0] = 15
```

**Special features:**
- Arrays with `var` are mutable
- `let` creates immutable arrays
- Value semantics

**Further reading:**
- [Swift Documentation - Arrays](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/collectiontypes/#Arrays)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Arrays are mutable
const items: number[] = [10, 20, 30];
items.push(40);
items[0] = 15;
```

**Special features:**
- Arrays are mutable
- Dynamic size
- Type annotations optional

**Further reading:**
- [TypeScript Handbook - Arrays](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' List is mutable
Dim items As New List(Of Integer) From {10, 20, 30}
items.Add(40)
items(0) = 15
```

**Special features:**
- `List(Of T)` is mutable
- Dynamic size
- Generics for type safety

**Further reading:**
- [Microsoft VB.NET Documentation - List](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1)

</TabItem>
<TabItem value="v" label="V">

```v
// Arrays are mutable
mut items := [10, 20, 30]
items << 40
items[0] = 15
```

**Special features:**
- Arrays are mutable with `mut`
- Dynamic size
- `<<` for append

**Further reading:**
- [V Documentation - Arrays](https://github.com/vlang/v/blob/master/doc/docs.md#arrays)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```wolfram
(* Lists are mutable *)
items = {10, 20, 30};
AppendTo[items, 40];
items[[1]] = 15;
```

**Special features:**
- Lists are mutable
- 1-based indexing
- `AppendTo` for mutation

**Further reading:**
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

**Special features:**
- `NSMutableArray`, `NSMutableDictionary`, `NSMutableSet` for mutable collections
- Inherit from immutable base classes
- `mutableCopy` creates a mutable copy of an immutable collection

**Further reading:**
- [Apple Documentation - NSMutableArray](https://developer.apple.com/documentation/foundation/nsmutablearray)

</TabItem>
</Tabs>


## 10.3.3. Sequenced Collections

Collections that guarantee a defined order of elements. Unlike unordered collections (such as sets), sequenced collections maintain insertion order or another defined order.

### Languages {#sprachen}

<Tabs availableTabs={['csharp', 'clojure', 'dart', 'go', 'groovy', 'java', 'javascript', 'kotlin', 'lua', 'python', 'ruby', 'rust', 'scala', 'swift', 'typescript']}>
<TabItem value="csharp" label="C#">

```csharp
// LinkedHashSet maintains insertion order (since .NET 6)
// Requires: using System.Collections.Generic;
var items = new LinkedHashSet<int> { 10, 20, 30 };
items.Add(40);

// LinkedDictionary maintains insertion order
var dict = new Dictionary<int, string>();
dict.Add(1, "Erstes");
dict.Add(2, "Zweites");
// Order is maintained
```

**Special features:**
- `LinkedHashSet` maintains insertion order (since .NET 6)
- `Dictionary` maintains insertion order since .NET Core 2.0
- Order is maintained during iteration

**Further reading:**
- [Microsoft .NET Documentation - LinkedHashSet](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.linkedhashset-1)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Vectors maintain insertion order
(def items [10 20 30])
(def first-item (nth items 0))

;; Lists maintain insertion order
(def list-items '(10 20 30))

;; Sorted Sets maintain sorted order
(def sorted (sorted-set 30 10 20))  ; #{10 20 30}
```

**Special features:**
- Vectors and lists are sequenced collections (insertion order)
- `sorted-set` for sorted order
- Persistent data structures

**Further reading:**
- [Clojure Documentation - Collections](https://clojure.org/reference/data_structures)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// LinkedHashSet maintains insertion order
var items = LinkedHashSet<int>();
items.add(10);
items.add(20);
items.add(30);

// LinkedHashMap maintains insertion order
var map = LinkedHashMap<int, String>();
map[1] = "Erstes";
map[2] = "Zweites";
```

**Special features:**
- `LinkedHashSet` maintains insertion order
- `LinkedHashMap` maintains insertion order
- Order is maintained during iteration

**Further reading:**
- [Dart Documentation - LinkedHashSet](https://api.dart.dev/stable/dart-collection/LinkedHashSet-class.html)

</TabItem>
<TabItem value="go" label="Go">

```go
// Maps maintain insertion order since Go 1.12
items := make(map[int]string)
items[1] = "Erstes"
items[2] = "Zweites"
// Order is maintained during iteration
```

**Special features:**
- Maps maintain insertion order since Go 1.12
- Order is maintained during iteration
- Slices are always sequenced

**Further reading:**
- [Go Documentation - Maps](https://go.dev/blog/maps)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// LinkedHashSet maintains insertion order
def items = new LinkedHashSet([10, 20, 30])
items.add(40)

// LinkedHashMap maintains insertion order
def map = new LinkedHashMap()
map[1] = "Erstes"
map[2] = "Zweites"
```

**Special features:**
- `LinkedHashSet` maintains insertion order
- `LinkedHashMap` maintains insertion order
- Order is maintained during iteration

**Further reading:**
- [Groovy Documentation - Collections](https://groovy-lang.org/groovy-dev-kit.html#_working_with_collections)

</TabItem>
<TabItem value="java" label="Java">

```java
// LinkedHashSet maintains insertion order
Set<Integer> items = new LinkedHashSet<>();
items.add(10);
items.add(20);
items.add(30);

// LinkedHashMap maintains insertion order
Map<Integer, String> map = new LinkedHashMap<>();
map.put(1, "Erstes");
map.put(2, "Zweites");
```

**Special features:**
- `LinkedHashSet` maintains insertion order
- `LinkedHashMap` maintains insertion order
- Order is maintained during iteration

**Further reading:**
- [Oracle Java Documentation - LinkedHashSet](https://docs.oracle.com/javase/8/docs/api/java/util/LinkedHashSet.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Map maintains insertion order
const map = new Map();
map.set(1, "Erstes");
map.set(2, "Zweites");
// Order is maintained during iteration

// Set maintains insertion order
const set = new Set([10, 20, 30]);
set.add(40);
```

**Special features:**
- `Map` maintains insertion order (since ES6)
- `Set` maintains insertion order (since ES6)
- Arrays are always sequenced

**Further reading:**
- [MDN Web Docs - Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// LinkedHashSet maintains insertion order
val items = linkedSetOf(10, 20, 30)
items.add(40)

// LinkedHashMap maintains insertion order
val map = linkedMapOf(1 to "Erstes", 2 to "Zweites")
```

**Special features:**
- `linkedSetOf` maintains insertion order
- `linkedMapOf` maintains insertion order
- Order is maintained during iteration

**Further reading:**
- [Kotlin Documentation - Collections](https://kotlinlang.org/docs/collections-overview.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Tables maintain insertion order (since Lua 5.4)
local items = {}
items[1] = "Erstes"
items[2] = "Zweites"
-- Order is maintained during iteration
```

**Special features:**
- Tables maintain insertion order since Lua 5.4
- Order is maintained during iteration
- Arrays are always sequenced

**Further reading:**
- [Lua Documentation - Tables](https://www.lua.org/manual/5.4/manual.html#2.1)

</TabItem>
<TabItem value="python" label="Python">

```python
# OrderedDict maintains insertion order
from collections import OrderedDict
items = OrderedDict()
items[1] = "Erstes"
items[2] = "Zweites"

# dict maintains insertion order since Python 3.7
items2 = {1: "Erstes", 2: "Zweites"}
```

**Special features:**
- `OrderedDict` maintains insertion order (since Python 2.7)
- `dict` maintains insertion order since Python 3.7
- Lists are always sequenced

**Further reading:**
- [Python Documentation - OrderedDict](https://docs.python.org/3/library/collections.html#collections.OrderedDict)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Hash maintains insertion order since Ruby 1.9
items = {}
items[1] = "Erstes"
items[2] = "Zweites"
# Order is maintained during iteration
```

**Special features:**
- `Hash` maintains insertion order since Ruby 1.9
- Order is maintained during iteration
- Arrays are always sequenced

**Further reading:**
- [Ruby Documentation - Hash](https://ruby-doc.org/core-3.1.0/Hash.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// IndexMap maintains insertion order
// Requires: indexmap crate
use indexmap::IndexMap;
let mut map = IndexMap::new();
map.insert(1, "Erstes");
map.insert(2, "Zweites");
```

**Special features:**
- `IndexMap` from `indexmap` crate maintains insertion order
- Standard `HashMap` is unordered
- Vectors are always sequenced

**Further reading:**
- [IndexMap Documentation](https://docs.rs/indexmap/latest/indexmap/)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// LinkedHashMap maintains insertion order
import scala.collection.mutable.LinkedHashMap
val map = LinkedHashMap(1 -> "Erstes", 2 -> "Zweites")

// LinkedHashSet maintains insertion order
import scala.collection.mutable.LinkedHashSet
val set = LinkedHashSet(10, 20, 30)
```

**Special features:**
- `LinkedHashMap` maintains insertion order
- `LinkedHashSet` maintains insertion order
- Order is maintained during iteration

**Further reading:**
- [Scala Documentation - Collections](https://docs.scala-lang.org/overviews/collections-2.13/introduction.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Dictionary maintains insertion order since Swift 4.0
var items: [Int: String] = [:]
items[1] = "Erstes"
items[2] = "Zweites"
// Order is maintained during iteration
```

**Special features:**
- `Dictionary` maintains insertion order since Swift 4.0
- Order is maintained during iteration
- Arrays are always sequenced

**Further reading:**
- [Swift Documentation - Dictionary](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/collectiontypes/#Dictionaries)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Map maintains insertion order
const map = new Map<number, string>();
map.set(1, "Erstes");
map.set(2, "Zweites");
// Order is maintained during iteration

// Set maintains insertion order
const set = new Set<number>([10, 20, 30]);
set.add(40);
```

**Special features:**
- `Map` maintains insertion order
- `Set` maintains insertion order
- Arrays are always sequenced

**Further reading:**
- [TypeScript Handbook - Map](https://www.typescriptlang.org/docs/handbook/2/maps.html)

</TabItem>
</Tabs>


## 10.3.4. Streams / Pipelines

Lazy-evaluated sequences of operations on collections. Enable chaining multiple operations (such as filter, map, reduce) into a pipeline that is only executed at the terminal operation.

### Languages {#sprachen}

<Tabs availableTabs={['clojure', 'csharp', 'dart', 'elixir', 'fsharp', 'gleam', 'go', 'groovy', 'haskell', 'java', 'javascript', 'julia', 'kotlin', 'ocaml', 'python', 'rust', 'scala', 'swift', 'typescript']} yellowTabs={['koka', 'lean4']}>
<TabItem value="csharp" label="C#">

```csharp
// LINQ for Stream Processing
// Requires: using System.Linq;
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

**Special features:**
- LINQ for Stream Processing
- Lazy Evaluation through `IEnumerable`
- Supports unbounded streams

**Further reading:**
- [Microsoft C# Documentation - LINQ](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/linq/)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Lazy Sequences for Stream Processing
(def numbers (range 1 1001))
(def result (->> numbers
                 (filter even?)
                 (map #(* % 2))
                 (take 10)))

(doseq [item result]
  (println (str "Wert: " item)))
```

**Special features:**
- Lazy Sequences for Stream Processing
- Threading macros (`->>`) for pipeline syntax
- Lazy Evaluation

**Further reading:**
- [Clojure Documentation - Lazy Sequences](https://clojure.org/reference/sequences)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Iterable for Stream Processing
var numbers = Iterable.generate(1000, (i) => i + 1);
var result = numbers
    .where((x) => x % 2 == 0)
    .map((x) => x * 2)
    .take(10);

result.forEach((item) => print('Wert: $item'));
```

**Special features:**
- `Iterable` for Stream Processing
- Lazy Evaluation
- Supports unbounded streams

**Further reading:**
- [Dart Documentation - Iterable](https://api.dart.dev/stable/dart-core/Iterable-class.html)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Streams for Stream Processing
numbers = Stream.iterate(1, &(&1 + 1))
result = numbers
  |> Stream.filter(&rem(&1, 2) == 0)
  |> Stream.map(&(&1 * 2))
  |> Enum.take(10)

Enum.each(result, fn item -> IO.puts("Wert: #{item}") end)
```

**Special features:**
- `Stream` module for Stream Processing
- Pipe operator (`|>`) for pipeline syntax
- Lazy Evaluation

**Further reading:**
- [Elixir Documentation - Streams](https://hexdocs.pm/elixir/Stream.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Sequences for Stream Processing
let numbers = Seq.initInfinite (fun i -> i + 1)
let result = numbers
    |> Seq.filter (fun x -> x % 2 = 0)
    |> Seq.map (fun x -> x * 2)
    |> Seq.take 10

result |> Seq.iter (fun item -> printfn "Wert: %d" item)
```

**Special features:**
- `Seq` for Stream Processing
- Pipe operator (`|>`) for pipeline syntax
- Lazy Evaluation

**Further reading:**
- [F# Documentation - Sequences](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/sequences)

</TabItem>
<TabItem value="go" label="Go">

```go
// Channels for Stream Processing
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

**Special features:**
- Channels for stream communication
- Goroutines for parallel stream processing
- Pipeline pattern through channel composition

**Further reading:**
- [Go Channels Documentation](https://go.dev/tour/concurrency/2)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Lazy Collections for Stream Processing
def numbers = (1..1000)
def result = numbers
    .findAll { it % 2 == 0 }
    .collect { it * 2 }
    .take(10)

result.each { println("Wert: $it") }
```

**Special features:**
- Lazy Collections for Stream Processing
- Method Chaining for pipeline syntax
- Supports unbounded streams

**Further reading:**
- [Groovy Documentation - Collections](https://groovy-lang.org/groovy-dev-kit.html#_working_with_collections)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Lazy Lists for Stream Processing
numbers = [1..1000]
result = take 10 $ map (*2) $ filter even numbers

mapM_ (putStrLn . ("Wert: " ++) . show) result
```

**Special features:**
- Lazy Lists for Stream Processing
- Function Composition for pipeline syntax
- Lazy Evaluation by default

**Further reading:**
- [Haskell Documentation - Lists](https://www.haskell.org/onlinereport/haskell2010/haskellch3.html#x8-420003.7)

</TabItem>
<TabItem value="java" label="Java">

```java
// Streams API (since Java 8)
import java.util.stream.*;

IntStream.range(1, 1001)
    .filter(x -> x % 2 == 0)
    .map(x -> x * 2)
    .limit(10)
    .forEach(x -> System.out.println("Wert: " + x));
```

**Special features:**
- Streams API since Java 8
- Lazy Evaluation
- Supports parallel processing with `.parallel()`

**Further reading:**
- [Oracle Java Documentation - Streams](https://docs.oracle.com/javase/8/docs/api/java/util/stream/Stream.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Generators for Stream Processing
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

**Special features:**
- Generators for Stream Processing
- Lazy Evaluation through generators
- Supports unbounded streams

**Further reading:**
- [MDN Web Docs - Generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Generators for Stream Processing
numbers = (i for i in 1:1000)
result = (x * 2 for x in numbers if x % 2 == 0)

for (i, item) in enumerate(result)
    if i > 10
        break
    end
    println("Wert: $item")
end
```

**Special features:**
- Generators for Stream Processing
- Lazy Evaluation
- Supports unbounded streams

**Further reading:**
- [Julia Documentation - Generators](https://docs.julialang.org/en/v1/manual/arrays/#Generator-Expressions)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
// Function chains on lists (eager, not lazy)
val result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  .filter(fn(x) x % 2 == 0)
  .map(fn(x) x * 2)
  .take(3)
// [4, 8, 12]

// Foldl for aggregation
val sum = [1, 2, 3, 4, 5].foldl(0, fn(acc, x) acc + x)
// 15
```

**Special features:**
- List operations can be chained with dot notation
- Operations are eager (not lazy) – no dedicated stream type
- `map`, `filter`, `foldl`, `zip` as standard pipeline operations
- Effects enable lazy processing when needed

**Further reading:**
- [Koka Standard Library - list](https://koka-lang.github.io/koka/doc/std_core_list.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- List operations with pipe operator (eager, not lazy)
def result : List Nat :=
  (List.range 1000)
  |>.filter (· % 2 == 0)
  |>.map (· * 2)
  |>.take 10

-- Alternatively with method syntax
def result2 : List Nat :=
  (List.range 1000).filter (· % 2 == 0)
    |>.map (· * 2)
    |>.take 10

-- ForIn for iteration
def printResult : IO Unit := do
  for item in result do
    IO.println s!"Wert: {item}"
```

**Special features:**
- Pipe operator `|>` available for function chaining
- List operations (`filter`, `map`, `take`) are eager (not lazy)
- Dot notation for method chaining on collections
- No dedicated streams – pipeline processing via list functions

**Further reading:**
- [Lean 4 Documentation - List](https://lean-lang.org/lean4/doc/data_types.html)
- [Lean 4 Documentation - Functional Programming](https://lean-lang.org/functional_programming_in_lean/)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Sequences for Stream Processing
val numbers = generateSequence(1) { it + 1 }
val result = numbers
    .filter { it % 2 == 0 }
    .map { it * 2 }
    .take(10)

result.forEach { println("Wert: $it") }
```

**Special features:**
- Sequences for Stream Processing
- Lazy Evaluation
- Supports unbounded streams

**Further reading:**
- [Kotlin Documentation - Sequences](https://kotlinlang.org/docs/sequences.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Sequences for Stream Processing *)
let numbers = Seq.init_infinite (fun i -> i + 1)
let result = numbers
  |> Seq.filter (fun x -> x mod 2 = 0)
  |> Seq.map (fun x -> x * 2)
  |> Seq.take 10

Seq.iter (fun item -> Printf.printf "Wert: %d\n" item) result
```

**Special features:**
- `Seq` for Stream Processing (since OCaml 4.07)
- Pipe operator (`|>`) for pipeline syntax
- Lazy Evaluation

**Further reading:**
- [OCaml Documentation - Sequences](https://v2.ocaml.org/api/Seq.html)

</TabItem>
<TabItem value="python" label="Python">

```python
# Generators for Stream Processing
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

**Special features:**
- Generators for Stream Processing
- Lazy Evaluation through generators
- `itertools` for advanced stream operations

**Further reading:**
- [Python Generators Documentation](https://docs.python.org/3/tutorial/classes.html#generators)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Iterator trait for Stream Processing
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

**Special features:**
- Iterator trait as basis for Stream Processing
- Lazy Evaluation through iterators
- Zero-cost Abstractions

**Further reading:**
- [Rust Iterator Documentation](https://doc.rust-lang.org/std/iter/trait.Iterator.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// LazyList for Stream Processing (since Scala 2.13)
val numbers = LazyList.from(1)
val result = numbers
    .filter(_ % 2 == 0)
    .map(_ * 2)
    .take(10)

result.foreach(x => println(s"Wert: $x"))
```

**Special features:**
- `LazyList` for Stream Processing (since Scala 2.13)
- Lazy Evaluation
- Supports unbounded streams

**Further reading:**
- [Scala LazyList Documentation](https://www.scala-lang.org/api/current/scala/collection/immutable/LazyList.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Lazy Collections for Stream Processing
let numbers = (1...1000).lazy
let result = numbers
    .filter { $0 % 2 == 0 }
    .map { $0 * 2 }
    .prefix(10)

result.forEach { print("Wert: \($0)") }
```

**Special features:**
- Lazy Collections for Stream Processing
- Lazy Evaluation through `.lazy`
- Supports unbounded streams

**Further reading:**
- [Swift Documentation - Lazy Collections](https://developer.apple.com/documentation/swift/lazysequenceprotocol)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Generators for Stream Processing
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

**Special features:**
- Generators for Stream Processing
- Lazy Evaluation through generators
- Supports unbounded streams

**Further reading:**
- [TypeScript Handbook - Generators](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// Pipelines with |> and Iterator module
// Requires: import gleam/iterator
let result =
  iterator.from_list([1, 2, 3, 4, 5])
  |> iterator.filter(fn(x) { x > 2 })
  |> iterator.map(fn(x) { x * 2 })
  |> iterator.to_list()
// result = [6, 8, 10]
```

**Special features:**
- Pipe operator `|>` for function chaining
- `gleam/iterator` for lazy evaluation
- Elements are only evaluated when needed

**Further reading:**
- [Gleam Documentation - iterator](https://hexdocs.pm/gleam_stdlib/gleam/iterator.html)

</TabItem>
</Tabs>


## 10.3.5. Metatables / Metamethods

Mechanism for customizing collection behavior by defining metamethods. Enables operator overloading, custom indexing, and other behavior customizations for collections.

### Languages {#sprachen}

<Tabs availableTabs={['lua', 'python', 'ruby', 'javascript', 'typescript', 'perl', 'rust', 'csharp', 'cpp', 'lean4', 'scala', 'kotlin']}>
<TabItem value="lua" label="Lua">

```lua
-- Metatable for custom collection
Vector = {}
Vector.__index = Vector

function Vector:new(x, y)
    local obj = {x = x, y = y}
    setmetatable(obj, Vector)
    return obj
end

-- Metamethods for operator overloading
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

**Special features:**
- Metatables for custom collections
- `__add`, `__sub`, etc. for operator overloading
- `__index` for custom indexing
- `__len` for length, `__tostring` for string representation

**Further reading:**
- [Lua Documentation - Metatables](https://www.lua.org/manual/5.4/manual.html#2.4)

</TabItem>
<TabItem value="python" label="Python">

```python
# Magic Methods for custom collections
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

**Special features:**
- Magic Methods for custom collections
- `__add__`, `__sub__`, etc. for operator overloading
- `__getitem__`, `__setitem__` for indexing
- `__len__` for length, `__str__` for string representation

**Further reading:**
- [Python Documentation - Magic Methods](https://docs.python.org/3/reference/datamodel.html#special-method-names)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Method overloading for custom collections
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

**Special features:**
- Method overloading for custom collections
- `+`, `-`, etc. for operator overloading
- `[]` for indexing
- `to_s` for string representation

**Further reading:**
- [Ruby Documentation - Operator Overloading](https://ruby-doc.org/core-3.1.0/doc/syntax/operators_rdoc.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Symbol methods for custom collections
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

**Special features:**
- `toString()`, `valueOf()` for type conversion
- `Symbol.toPrimitive` for extended type conversion
- No operator overloading
- `Symbol.iterator` for iteration

**Further reading:**
- [MDN Web Docs - Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Symbol methods for custom collections
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

**Special features:**
- Magic Methods identical to JavaScript
- `toString()`, `valueOf()` for type conversion
- `Symbol.toPrimitive` for extended type conversion
- No operator overloading

**Further reading:**
- [TypeScript Handbook - Symbols](https://www.typescriptlang.org/docs/handbook/symbols.html)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Overload for custom collections
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

**Special features:**
- `overload` pragma for operator overloading
- Supports various operators
- `""` for string representation
- Very flexible and dynamic

**Further reading:**
- [Perl Documentation - overload](https://perldoc.perl.org/overload)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Traits for custom collections
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

**Special features:**
- Traits for operator overloading
- `Add`, `Sub`, etc. traits for operators
- `Display` trait for string representation
- `Index`, `IndexMut` traits for indexing

**Further reading:**
- [Rust Documentation - Operator Overloading](https://doc.rust-lang.org/book/ch19-03-advanced-traits.html#operator-overloading)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Operator overloading for custom collections
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

**Special features:**
- Operator overloading with `operator` keyword
- Supports various operators
- `ToString()` for string representation
- `this[int]` for indexing

**Further reading:**
- [Microsoft C# Documentation - Operator Overloading](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/operator-overloading)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Operator overloading for custom collections
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

**Special features:**
- Operator overloading as member or friend functions
- Supports various operators
- `operator<<` for stream output
- `operator[]` for indexing

**Further reading:**
- [cppreference.com - Operator Overloading](https://en.cppreference.com/w/cpp/language/operators)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Type classes for operator overloading
structure Vector where
  x : Int
  y : Int

-- Add instance for + operator
instance : Add Vector where
  add a b := ⟨a.x + b.x, a.y + b.y⟩

-- ToString instance for string representation
instance : ToString Vector where
  toString v := s!"Vector({v.x}, {v.y})"

-- GetElem instance for indexing
instance : GetElem Vector Nat Int (fun _ i => i < 2) where
  getElem v i _ := if i == 0 then v.x else v.y

def v1 : Vector := ⟨1, 2⟩
def v2 : Vector := ⟨3, 4⟩
#eval v1 + v2     -- Vector(4, 6)
#eval toString v1  -- "Vector(1, 2)"
```

**Special features:**
- Type classes for operator overloading (`Add`, `Sub`, `Mul`, `HAdd` etc.)
- `ToString` for string representation
- `GetElem` for type-safe indexing with proof argument
- `BEq`, `Ord`, `Hashable` for comparison and hashing

**Further reading:**
- [Lean 4 Documentation - Type Classes](https://lean-lang.org/lean4/doc/typeclass.html)
- [Lean 4 Documentation - Notation](https://lean-lang.org/lean4/doc/notation.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Implicit Classes for custom collections
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

**Special features:**
- Operator overloading through methods
- `+`, `-`, etc. as methods
- `toString` for string representation
- Implicit Classes for extensions

**Further reading:**
- [Scala Documentation - Operator Overloading](https://docs.scala-lang.org/tour/operators.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Operator overloading for custom collections
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

**Special features:**
- Operator overloading with `operator` keyword
- `plus`, `minus`, etc. for operators
- `toString()` for string representation
- `get`, `set` for indexing

**Further reading:**
- [Kotlin Documentation - Operator Overloading](https://kotlinlang.org/docs/operator-overloading.html)

</TabItem>
</Tabs>

## 10.3.6. Lazy Collections / Sequences

Collections whose elements are only computed when needed (Lazy Evaluation). Enable working with potentially infinite data structures and reduce memory consumption, as only the actually needed elements are materialized.

### Languages

<Tabs availableTabs={['clojure', 'common-lisp', 'crystal', 'csharp', 'cpp', 'd', 'dart', 'elixir', 'fsharp', 'groovy', 'haskell', 'idris', 'java', 'javascript', 'julia', 'kotlin', 'nim', 'ocaml', 'purescript', 'python', 'racket', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript']} yellowTabs={['elm']}>
<TabItem value="clojure" label="Clojure">

```clojure
;; Lazy Sequence (infinite)
(def naturals (iterate inc 0))

;; Materialize first 5 elements
(take 5 naturals)  ; (0 1 2 3 4)

;; Lazy Sequence with lazy-seq
(defn fibs
  ([] (fibs 0 1))
  ([a b] (lazy-seq (cons a (fibs b (+ a b))))))

(take 8 (fibs))  ; (0 1 1 2 3 5 8 13)
```

**Special features:**
- Most sequence operations (`map`, `filter`, `take`) are lazy by default
- `lazy-seq` for explicit lazy sequence creation
- Once computed elements are cached (Memoization)

**Further reading:**
- [Clojure Documentation - Lazy Sequences](https://clojure.org/reference/sequences)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Lazy Evaluation with delay/force (SRFI-like)
(defmacro delay (expr)
  (let ((forced (gensym)) (value (gensym)))
    `(let ((,forced nil) (,value nil))
       (lambda ()
         (unless ,forced
           (setf ,value ,expr ,forced t))
         ,value))))

(defun force (promise) (funcall promise))

;; Lazy Range as generator
(defun lazy-range (start)
  (cons start (delay (lazy-range (1+ start)))))
```

**Special features:**
- No native lazy collection system
- `delay`/`force` pattern for delayed evaluation
- Series library for lazy stream processing
- Generators can be simulated via closures

**Further reading:**
- [Common Lisp HyperSpec](http://www.lispworks.com/documentation/lw50/CLHS/Front/Contents.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Lazy Iterator
iter = (1..Float64::INFINITY).each.select(&.even?).map { |x| x * 2 }

# Materialize first 5 elements
result = iter.first(5)  # [4, 8, 12, 16, 20]

# Custom lazy iterator
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

**Special features:**
- `Iterator` module for lazy evaluation
- Iterator methods (`select`, `map`, `take`) are lazy
- `each` converts a collection into a lazy iterator
- `.to_a` or `.first(n)` materializes elements

**Further reading:**
- [Crystal Documentation - Iterator](https://crystal-lang.org/api/latest/Iterator.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Lazy Sequence with yield return
IEnumerable<int> Naturals()
{
    int n = 0;
    while (true)
        yield return n++;
}

// Lazy LINQ operations
// Requires: using System.Linq;
var result = Naturals()
    .Where(x => x % 2 == 0)
    .Select(x => x * 2)
    .Take(5);
// Elements are only computed here
foreach (var item in result) { }
```

**Special features:**
- `yield return` creates lazy sequences (`IEnumerable<T>`)
- LINQ operations (`Where`, `Select`, `Skip`, `Take`) are lazy
- Materialization only on iteration or `.ToList()` / `.ToArray()`

**Further reading:**
- [Microsoft C# Documentation - Iterators](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/iterators)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Ranges (since C++20)
// Requires: #include <ranges>
auto evens = std::views::iota(0)
    | std::views::filter([](int x) { return x % 2 == 0; })
    | std::views::transform([](int x) { return x * 2; })
    | std::views::take(5);

// Elements only computed on iteration
for (int x : evens) { }
```

**Special features:**
- `std::ranges` and `std::views` since C++20 for lazy evaluation
- Pipe operator `|` for chaining views
- `std::views::iota` for infinite sequences
- Views are lightweight, non-owning ranges

**Further reading:**
- [cppreference.com - Ranges](https://en.cppreference.com/w/cpp/ranges)

</TabItem>
<TabItem value="d" label="D">

```d
// Lazy Ranges
// Requires: import std.range;
// Requires: import std.algorithm;
auto naturals = iota(0, int.max);
auto result = naturals
    .filter!(x => x % 2 == 0)
    .map!(x => x * 2)
    .take(5);

// Lazy generator with generate
auto fibs = recurrence!((a, n) => a[n-1] + a[n-2])(0, 1);
```

**Special features:**
- Ranges as lazy abstraction layer
- `iota`, `recurrence`, `generate` for lazy sequence creation
- Range algorithms (`filter`, `map`, `take`) are lazy
- Materialization with `.array` or iteration

**Further reading:**
- [D Documentation - Ranges](https://dlang.org/phobos/std_range.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Lazy Iterable with sync* generator
Iterable<int> naturals() sync* {
  int n = 0;
  while (true) {
    yield n++;
  }
}

// Lazy operations
var result = naturals()
    .where((x) => x % 2 == 0)
    .map((x) => x * 2)
    .take(5);
```

**Special features:**
- `sync*` generators with `yield` for lazy sequences
- `Iterable` methods (`where`, `map`, `take`) are lazy
- Materialization with `.toList()` or iteration

**Further reading:**
- [Dart Documentation - Generators](https://dart.dev/language/functions#generators)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Lazy Stream (infinite)
naturals = Stream.iterate(0, &(&1 + 1))

# Lazy operations
result = naturals
  |> Stream.filter(&(rem(&1, 2) == 0))
  |> Stream.map(&(&1 * 2))
  |> Enum.take(5)
# [0, 4, 8, 12, 16]
```

**Special features:**
- `Stream` module for lazy sequences
- Stream operations are only evaluated on `Enum` call
- `Stream.iterate/2`, `Stream.unfold/2` for infinite streams
- Pipe operator `|>` for readable chaining

**Further reading:**
- [Elixir Documentation - Streams](https://hexdocs.pm/elixir/Stream.html)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Elm has no built-in lazy collections
-- Lazy behavior can be simulated via functions

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

**Special features:**
- No built-in lazy collections (Elm is strictly evaluated)
- Lazy behavior can be simulated via thunks `(() -> a)`
- `elm-community/lazy-list` package available
- Elm focuses on simplicity instead of lazy evaluation

**Further reading:**
- [Elm Guide - Custom Types](https://guide.elm-lang.org/types/custom_types)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Lazy Sequence with seq computation expression
let naturals = Seq.initInfinite id

// Lazy operations
let result =
    naturals
    |> Seq.filter (fun x -> x % 2 = 0)
    |> Seq.map (fun x -> x * 2)
    |> Seq.take 5

// Custom lazy sequence
let fibs = seq {
    let mutable a, b = 0, 1
    while true do
        yield a
        let temp = a + b
        a <- b
        b <- temp
}
```

**Special features:**
- `seq { ... }` computation expression for lazy sequences
- `Seq` module functions are lazy (unlike `List` and `Array`)
- `Seq.initInfinite` for infinite sequences
- Pipe operator `|>` for readable chaining

**Further reading:**
- [F# Documentation - Sequences](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/sequences)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Lazy Collection with Iterator
def naturals = (0..Integer.MAX_VALUE).iterator()

// Stream-like processing (since Groovy 2.2)
def result = Stream.iterate(0, n -> n + 1)
    .filter(x -> x % 2 == 0)
    .map(x -> x * 2)
    .limit(5)
    .collect(Collectors.toList())
```

**Special features:**
- Java Streams API usable via interop
- `Stream.iterate` for infinite sequences
- Groovy collections themselves are not lazy
- `.collect(Collectors.toList())` for materialization

**Further reading:**
- [Groovy Documentation - Collections](https://groovy-lang.org/groovy-dev-kit.html#_working_with_collections)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Lists are lazy by default
naturals = [0..]

-- Lazy operations
result = take 5 $ map (*2) $ filter even naturals
-- [0, 4, 8, 12, 16]

-- Infinite Fibonacci sequence
fibs = 0 : 1 : zipWith (+) fibs (tail fibs)
-- take 8 fibs = [0, 1, 1, 2, 3, 5, 8, 13]
```

**Special features:**
- All lists are lazy by default (Non-Strict Evaluation)
- Infinite data structures are a natural part of the language
- No explicit lazy marking needed
- `Data.Sequence` for strict sequences if desired

**Further reading:**
- [Haskell Wiki - Lazy Evaluation](https://wiki.haskell.org/Lazy_evaluation)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Lazy type for delayed evaluation
naturals : Stream Nat
naturals = iterate S Z

-- Lazy operations
result : List Nat
result = take 5 $ map (*2) $ filter isEven naturals

-- Codata for infinite structures
codata CoList : Type -> Type where
  Nil : CoList a
  (::) : a -> CoList a -> CoList a
```

**Special features:**
- `Stream` as built-in infinite lazy data type
- `Lazy` type wrapper for delayed evaluation
- Codata declarations for potentially infinite structures
- Totality Checker distinguishes between data and codata

**Further reading:**
- [Idris 2 Documentation - Lazy](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Stream as lazy sequence (since Java 8)
Stream<Integer> naturals = Stream.iterate(0, n -> n + 1);

var result = naturals
    .filter(x -> x % 2 == 0)
    .map(x -> x * 2)
    .limit(5)
    .toList();
// [0, 4, 8, 12, 16]
```

**Special features:**
- `Stream<T>` since Java 8 as lazy abstraction
- Intermediate operations (`filter`, `map`) are lazy
- Terminal operations (`toList`, `forEach`) trigger computation
- `Stream.iterate()`, `Stream.generate()` for infinite streams

**Further reading:**
- [Oracle Java Documentation - Streams](https://docs.oracle.com/javase/8/docs/api/java/util/stream/Stream.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Generator for lazy sequence
function* naturals() {
    let n = 0;
    while (true) yield n++;
}

// Lazy processing
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

**Special features:**
- Generators (`function*`) as foundation for lazy sequences
- `yield` for delayed element creation
- No built-in lazy collection methods (chaining requires manual generators)
- Iterator Helpers Proposal (Stage 3) for `.map()`, `.filter()` on iterators

**Further reading:**
- [MDN Web Docs - Generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Generator Expression (lazy)
naturals = (n for n in Iterators.countfrom(0))

# Lazy operations
result = Iterators.take(
    (x * 2 for x in naturals if x % 2 == 0),
    5
) |> collect
# [0, 4, 8, 12, 16]

# Channel as lazy producer
function fib_channel(ch::Channel)
    a, b = 0, 1
    while true
        put!(ch, a)
        a, b = b, a + b
    end
end
```

**Special features:**
- Generator expressions `(expr for x in iter)` are lazy
- `Iterators` module for lazy operations
- `Channel` for lazy producer/consumer
- `collect()` for materialization

**Further reading:**
- [Julia Documentation - Iteration](https://docs.julialang.org/en/v1/manual/interfaces/#man-interface-iteration)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Lazy Sequence
val naturals = generateSequence(0) { it + 1 }

// Lazy operations
val result = naturals
    .filter { it % 2 == 0 }
    .map { it * 2 }
    .take(5)
    .toList()
// [0, 4, 8, 12, 16]

// Sequence builder
val fibs = sequence {
    var a = 0; var b = 1
    while (true) {
        yield(a)
        val temp = a + b; a = b; b = temp
    }
}
```

**Special features:**
- `Sequence<T>` as lazy collection type
- `generateSequence` and `sequence { }` builder for lazy sequences
- Sequence operations (`filter`, `map`) are lazy (unlike collection operations)
- `.toList()` for materialization

**Further reading:**
- [Kotlin Documentation - Sequences](https://kotlinlang.org/docs/sequences.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Iterator as lazy sequence
iterator naturals(): int {.closure.} =
  var n = 0
  while true:
    yield n
    inc n

# First 5 elements
import std/sequtils
var result: seq[int] = @[]
var count = 0
for x in naturals():
  if x mod 2 == 0:
    result.add(x * 2)
    inc count
    if count >= 5: break
```

**Special features:**
- Closure iterators with `{.closure.}` pragma for lazy sequences
- `yield` for delayed element creation
- Inline iterators are not lazy (resolved at compile time)
- No built-in lazy collection framework

**Further reading:**
- [Nim Documentation - Iterators](https://nim-lang.org/docs/manual.html#iterators-and-the-for-statement)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Lazy Sequence with Seq (since OCaml 4.07) *)
let naturals = Seq.ints 0

(* Lazy operations *)
let result =
  naturals
  |> Seq.filter (fun x -> x mod 2 = 0)
  |> Seq.map (fun x -> x * 2)
  |> Seq.take 5

(* Lazy type for delayed evaluation *)
let lazy_value = lazy (expensive_computation ())
let value = Lazy.force lazy_value
```

**Special features:**
- `Seq` module since OCaml 4.07 for lazy sequences
- `Seq.ints`, `Seq.unfold` for infinite sequences
- `lazy` keyword and `Lazy.force` for explicit lazy evaluation
- Pipe operator `|>` for readable chaining

**Further reading:**
- [OCaml Documentation - Seq](https://v2.ocaml.org/api/Seq.html)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Lazy List
-- Requires: import Data.Lazy
-- Requires: import Data.List.Lazy

naturals :: LazyList Int
naturals = iterate (_ + 1) 0

result :: LazyList Int
result = take 5 $ map (_ * 2) $ filter (\x -> x `mod` 2 == 0) naturals
```

**Special features:**
- `Data.List.Lazy` for lazy lists
- `Data.Lazy` for explicit lazy values (`defer`, `force`)
- PureScript is strictly evaluated by default
- Lazy collections via separate packages

**Further reading:**
- [PureScript Documentation - Lazy Lists](https://pursuit.purescript.org/packages/purescript-lazy)

</TabItem>
<TabItem value="python" label="Python">

```python
# Generator for Lazy Sequence
def naturals():
    n = 0
    while True:
        yield n
        n += 1

# Generator Expression (lazy)
evens = (x * 2 for x in naturals() if x % 2 == 0)

# First 5 elements
from itertools import islice
result = list(islice(evens, 5))
# [0, 4, 8, 12, 16]
```

**Special features:**
- Generators (`yield`) as foundation for lazy sequences
- Generator expressions `(expr for x in iter)` are lazy
- `itertools` module for lazy operations (`islice`, `count`, `chain`)
- `range()` is also lazy (no memory for all elements)

**Further reading:**
- [Python Documentation - Generators](https://docs.python.org/3/howto/functional.html#generators)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
;; Lazy Stream
(require racket/stream)

(define naturals (stream-cons 0 (stream-map add1 naturals)))

;; Lazy operations
(define evens (stream-filter even? naturals))
(define result (stream->list (stream-take (stream-map (λ (x) (* x 2)) evens) 5)))
;; '(0 4 8 12 16)
```

**Special features:**
- `racket/stream` for lazy streams
- `stream-cons` for lazy pair construction
- `stream-map`, `stream-filter` for lazy operations
- `stream->list` for materialization

**Further reading:**
- [Racket Documentation - Streams](https://docs.racket-lang.org/reference/streams.html)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Lazy Enumerator (since Ruby 2.0)
naturals = (0..Float::INFINITY).lazy

# Lazy operations
result = naturals
  .select(&:even?)
  .map { |x| x * 2 }
  .first(5)
# [0, 4, 8, 12, 16]

# Custom enumerator
fibs = Enumerator.new do |y|
  a, b = 0, 1
  loop { y.yield(a); a, b = b, a + b }
end
```

**Special features:**
- `.lazy` converts any enumerator into a lazy enumerator
- Lazy methods (`select`, `map`, `reject`) return lazy enumerator
- `Enumerator.new` for custom lazy sequences
- `.force` or `.first(n)` for materialization

**Further reading:**
- [Ruby Documentation - Enumerator::Lazy](https://ruby-doc.org/core-3.1.0/Enumerator/Lazy.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Iterators are lazy by default
let result: Vec<i32> = (0..)
    .filter(|x| x % 2 == 0)
    .map(|x| x * 2)
    .take(5)
    .collect();
// [0, 4, 8, 12, 16]

// Custom iterator
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

**Special features:**
- All iterator adapters (`filter`, `map`, `take`) are lazy
- `collect()` as terminal operation for materialization
- Zero-cost abstractions (no runtime overhead)
- Ranges `0..` for infinite sequences

**Further reading:**
- [Rust Documentation - Iterator](https://doc.rust-lang.org/std/iter/trait.Iterator.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// LazyList (since Scala 2.13)
val naturals = LazyList.from(0)

// Lazy operations
val result = naturals
    .filter(_ % 2 == 0)
    .map(_ * 2)
    .take(5)
    .toList
// List(0, 4, 8, 12, 16)

// View for lazy transformation of existing collections
val view = (1 to 1000000).view.filter(_ % 2 == 0).map(_ * 2)
```

**Special features:**
- `LazyList` since Scala 2.13 (replaces `Stream`)
- Elements are computed and cached on access
- `.view` for lazy transformations on existing collections
- `#::` for lazy cons operator

**Further reading:**
- [Scala Documentation - LazyList](https://www.scala-lang.org/api/current/scala/collection/immutable/LazyList.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; Lazy Streams with delay/force (SRFI-41)
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

**Special features:**
- `delay`/`force` for explicit lazy evaluation (R5RS/R7RS)
- SRFI-41 defines standardized stream protocol
- Promises as delayed computations
- Manual stream construction via macros

**Further reading:**
- [SRFI-41 - Streams](https://srfi.schemers.org/srfi-41/srfi-41.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Lazy Collection (since Swift 2.0)
let naturals = (0...).lazy

let result = naturals
    .filter { $0 % 2 == 0 }
    .map { $0 * 2 }
    .prefix(5)
// Array(result) = [0, 4, 8, 12, 16]

// Lazy on existing collections
let items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let lazyResult = items.lazy.filter { $0 > 5 }.map { $0 * 2 }
```

**Special features:**
- `.lazy` property converts any collection into a lazy sequence
- Lazy operations (`filter`, `map`, `prefix`) return `LazySequence`
- Infinite ranges `(0...)` are natively lazy
- `Array()` for materialization

**Further reading:**
- [Apple Documentation - LazySequenceProtocol](https://developer.apple.com/documentation/swift/lazysequenceprotocol)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Generator for Lazy Sequence
function* naturals(): Generator<number> {
    let n = 0;
    while (true) yield n++;
}

// Lazy processing
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

**Special features:**
- Identical to JavaScript, extended with type annotations
- Generators (`function*`) as foundation for lazy sequences
- `Generator<T>` and `Iterable<T>` types
- No built-in lazy collection methods

**Further reading:**
- [TypeScript Handbook - Iterators and Generators](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html)

</TabItem>
</Tabs>

## 10.3.7. Persistent / Immutable Data Structures

Data structures that preserve the previous version when modified. Instead of in-place mutation, operations create new versions that efficiently share memory and parts of the original structure through structural sharing.

### Languages

<Tabs availableTabs={['clojure', 'elm', 'elixir', 'erlang', 'fsharp', 'gleam', 'haskell', 'idris', 'koka', 'lean4', 'mercury', 'ocaml', 'purescript', 'racket', 'roc', 'scala', 'scheme']} yellowTabs={['csharp', 'java', 'javascript', 'kotlin', 'python', 'rust', 'typescript']}>
<TabItem value="clojure" label="Clojure">

```clojure
;; Persistent Vector
(def items [10 20 30])
(def items2 (conj items 40))
;; items  = [10 20 30]     (unchanged)
;; items2 = [10 20 30 40]  (new version)

;; Persistent Map
(def scores {"Alice" 95 "Bob" 87})
(def scores2 (assoc scores "Carol" 92))
;; scores  = {"Alice" 95, "Bob" 87}             (unchanged)
;; scores2 = {"Alice" 95, "Bob" 87, "Carol" 92}

;; Persistent Set
(def unique #{10 20 30})
(def unique2 (conj unique 40))
```

**Special features:**
- All standard collections (Vector, Map, Set) are persistent by default
- Hash Array Mapped Tries (HAMTs) for efficient structural sharing
- O(log₃₂ n) for most operations (practically O(1))
- Transients for temporary mutation in performance-critical code

**Further reading:**
- [Clojure Documentation - Data Structures](https://clojure.org/reference/data_structures)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Persistent collections via System.Collections.Immutable
// Requires: using System.Collections.Immutable;
var items = ImmutableList.Create(10, 20, 30);
var items2 = items.Add(40);
// items  = [10, 20, 30]     (unchanged)
// items2 = [10, 20, 30, 40] (new version)

var scores = ImmutableDictionary<string, int>.Empty
    .Add("Alice", 95)
    .Add("Bob", 87);
var scores2 = scores.Add("Carol", 92);
```

**Special features:**
- `System.Collections.Immutable` package (since .NET 4.5)
- `ImmutableList<T>`, `ImmutableDictionary<K,V>`, `ImmutableSortedSet<T>`
- Structural sharing for efficient copies
- Builder pattern for batch operations: `items.ToBuilder()`

**Further reading:**
- [Microsoft .NET Documentation - Immutable Collections](https://learn.microsoft.com/en-us/dotnet/api/system.collections.immutable)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# All data structures are persistent
items = [10, 20, 30]
items2 = [40 | items]
# items  = [10, 20, 30]      (unchanged)
# items2 = [40, 10, 20, 30]  (new version, shared tail)

# Maps
scores = %{"Alice" => 95, "Bob" => 87}
scores2 = Map.put(scores, "Carol", 92)
# scores unchanged
```

**Special features:**
- All data structures are persistent by default (functional language)
- Lists share the tail (structural sharing)
- Maps use HAMTs for efficient sharing
- BEAM VM optimizes garbage collection for short-lived versions

**Further reading:**
- [Elixir Documentation - Collections](https://elixir-lang.org/getting-started/basic-types.html)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- All data structures are persistent
items = [10, 20, 30]
items2 = 40 :: items
-- items  = [10, 20, 30]      (unchanged)
-- items2 = [40, 10, 20, 30]  (new version)

-- Dict
scores = Dict.fromList [("Alice", 95), ("Bob", 87)]
scores2 = Dict.insert "Carol" 92 scores
-- scores unchanged
```

**Special features:**
- All data structures are persistent by default (purely functional language)
- `Dict` and `Set` are based on balanced trees
- No way to mutate (no escape hatch)
- Elm runtime optimizes updates through virtual DOM diffing

**Further reading:**
- [Elm Documentation - Dict](https://package.elm-lang.org/packages/elm/core/latest/Dict)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% All data structures are persistent
Items = [10, 20, 30],
Items2 = [40 | Items],
% Items  = [10, 20, 30]      (unchanged)
% Items2 = [40, 10, 20, 30]  (new version)

% Maps
Scores = #{"Alice" => 95, "Bob" => 87},
Scores2 = Scores#{"Carol" => 92}.
% Scores unchanged
```

**Special features:**
- All data structures are persistent by default (functional language)
- Lists share the tail (structural sharing)
- Variables are single-assignment (no rebinding)
- BEAM VM garbage collector optimized for short-lived data

**Further reading:**
- [Erlang Documentation - Data Types](https://www.erlang.org/doc/reference_manual/data_types.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Lists are persistent
let items = [10; 20; 30]
let items2 = 40 :: items
// items  = [10; 20; 30]      (unchanged)
// items2 = [40; 10; 20; 30]  (new version)

// Map
let scores = Map [("Alice", 95); ("Bob", 87)]
let scores2 = scores |> Map.add "Carol" 92
// scores unchanged
```

**Special features:**
- Lists, Maps and Sets are persistent by default
- `::` (Cons) for O(1) prepend with structural sharing
- `Map` and `Set` are based on balanced AVL trees
- `Array` and `ResizeArray` available as mutable alternatives

**Further reading:**
- [F# Documentation - Collections](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/fsharp-collection-types)

</TabItem>
<TabItem value="gleam" label="Gleam">

```erlang
// All data structures are persistent
let items = [10, 20, 30]
let items2 = [40, ..items]
// items  = [10, 20, 30]      (unchanged)
// items2 = [40, 10, 20, 30]  (new version)

// Dict
let scores = dict.from_list([#("Alice", 95), #("Bob", 87)])
let scores2 = dict.insert(scores, "Carol", 92)
```

**Special features:**
- All data structures are persistent by default (functional language on BEAM)
- Lists share the tail
- Spread syntax `[head, ..tail]` for construction
- Benefits from BEAM VM optimizations for persistent data

**Further reading:**
- [Gleam Documentation - Data Types](https://gleam.run/book/tour/lists.html)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- All data structures are persistent
items = [10, 20, 30]
items2 = 40 : items
-- items  = [10, 20, 30]      (unchanged)
-- items2 = [40, 10, 20, 30]  (new version)

-- Data.Map
import qualified Data.Map as Map
scores = Map.fromList [("Alice", 95), ("Bob", 87)]
scores2 = Map.insert "Carol" 92 scores
-- scores unchanged
```

**Special features:**
- All data structures are persistent by default (purely functional language)
- `Data.Map` and `Data.Set` are based on balanced trees (Size Balanced Trees)
- `Data.HashMap` for hash-based persistent maps
- Lazy evaluation enables efficient sharing strategies

**Further reading:**
- [Haskell Documentation - Data.Map](https://hackage.haskell.org/package/containers/docs/Data-Map-Strict.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Lists are persistent
items : List Int
items = [10, 20, 30]
items2 = 40 :: items
-- items  = [10, 20, 30]      (unchanged)
-- items2 = [40, 10, 20, 30]  (new version)

-- SortedMap
import Data.SortedMap
scores = fromList [("Alice", 95), ("Bob", 87)]
scores2 = insert "Carol" 92 scores
```

**Special features:**
- All data structures are persistent by default (purely functional language)
- Dependent types enable length-encoded collections
- `SortedMap` and `SortedSet` for persistent maps/sets
- Linearity types (Quantitative Type Theory) can enable mutation

**Further reading:**
- [Idris 2 Documentation - Data Types](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Persistent collections via libraries
// Vavr (formerly Javaslang)
// Requires: io.vavr.collection
io.vavr.collection.List<Integer> items = io.vavr.collection.List.of(10, 20, 30);
io.vavr.collection.List<Integer> items2 = items.append(40);
// items  = List(10, 20, 30)      (unchanged)
// items2 = List(10, 20, 30, 40)  (new version)

// Immutable collections (since Java 9, but not persistent)
var list = List.of(10, 20, 30);
// list.add(40); // UnsupportedOperationException
```

**Special features:**
- No persistent collections in the standard library
- `List.of()` (since Java 9) creates immutable, but not persistent collections
- Vavr library provides persistent collections with structural sharing
- PCollections as another alternative

**Further reading:**
- [Vavr Documentation - Collections](https://docs.vavr.io/#_collections)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Immutable.js library
// Requires: import { List, Map } from 'immutable';
const items = List([10, 20, 30]);
const items2 = items.push(40);
// items  = List [10, 20, 30]      (unchanged)
// items2 = List [10, 20, 30, 40]  (new version)

const scores = Map({ Alice: 95, Bob: 87 });
const scores2 = scores.set("Carol", 92);
```

**Special features:**
- No native persistent data structures
- Immutable.js provides persistent collections with structural sharing (HAMTs)
- `Object.freeze()` creates immutable, but not persistent objects
- Records & Tuples proposal for native immutable types

**Further reading:**
- [Immutable.js Documentation](https://immutable-js.com/)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
// Lists are persistent by default
val items = [10, 20, 30]
val items2 = Cons(40, items)
// items  = [10, 20, 30]      (unchanged)
// items2 = [40, 10, 20, 30]  (new version)

// Efficient functional updates through FBIP
fun increment-all(xs : list<int>) : list<int>
  match xs
    Nil        -> Nil
    Cons(x,xx) -> Cons(x + 1, increment-all(xx))
// Compiler optimizes to in-place update with unique reference
```

**Special features:**
- All data structures are persistent by default (purely functional language)
- FBIP (Functional But In-Place): Compiler recognizes unique references and optimizes to in-place updates
- Perceus reference counting enables deterministic memory management
- Structural sharing through algebraic data types

**Further reading:**
- [Koka FBIP Paper](https://koka-lang.github.io/koka/doc/book.html#sec-fbip)
- [Koka Language Guide](https://koka-lang.github.io/koka/doc/book.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Persistent collections via kotlinx.collections.immutable
// Requires: import kotlinx.collections.immutable.*
val items = persistentListOf(10, 20, 30)
val items2 = items.add(40)
// items  = [10, 20, 30]      (unchanged)
// items2 = [10, 20, 30, 40]  (new version)

val scores = persistentMapOf("Alice" to 95, "Bob" to 87)
val scores2 = scores.put("Carol", 92)
```

**Special features:**
- No native persistent data structures
- `kotlinx.collections.immutable` provides persistent collections
- `listOf()` creates read-only views, not persistent structures
- `PersistentList`, `PersistentMap`, `PersistentSet` with structural sharing

**Further reading:**
- [kotlinx.collections.immutable](https://github.com/Kotlin/kotlinx.collections.immutable)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Lists are persistent
def items : List Nat := [10, 20, 30]
def items2 : List Nat := 40 :: items
-- items  = [10, 20, 30]      (unchanged)
-- items2 = [40, 10, 20, 30]  (new version)

-- Array (persistent, optimized with unique reference)
def arr : Array Nat := #[10, 20, 30]
def arr2 : Array Nat := arr.push 40
-- arr  = #[10, 20, 30]      (unchanged)
-- arr2 = #[10, 20, 30, 40]  (new version)

-- HashMap
def scores : Std.HashMap String Nat :=
  Std.HashMap.ofList [("Alice", 95), ("Bob", 87)]
def scores2 := scores.insert "Carol" 92
-- scores unchanged
```

**Special features:**
- All standard collections (`List`, `Array`, `HashMap`) are persistent by default
- `::` (Cons) for O(1) prepend on lists with structural sharing
- Compiler optimizes `Array` operations to in-place updates with unique reference
- Similar to Roc: uniqueness-based optimization for functional updates

**Further reading:**
- [Lean 4 Documentation - Data Structures](https://lean-lang.org/lean4/doc/data_types.html)
- [Lean 4 Documentation - Array](https://lean-lang.org/lean4/doc/array.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Lists are persistent
Items = [10, 20, 30],
Items2 = [40 | Items],
% Items  = [10, 20, 30]      (unchanged)
% Items2 = [40, 10, 20, 30]  (new version, shared tail)

% Map (balanced binary tree)
map.init(Map0),
map.set("Alice", 95, Map0, Map1),
map.set("Bob", 87, Map1, Scores),
map.set("Carol", 92, Scores, Scores2)
% Scores unchanged
```

**Special features:**
- All standard collections (`list`, `map`, `set`) are persistent by default
- Lists share the tail (structural sharing via cons cells)
- `map` is based on 234-trees (balanced) – efficient sharing on updates
- Purely declarative language without in-place mutation (except `array` with unique modes)

**Further reading:**
- [Mercury Standard Library - list](https://www.mercurylang.org/information/doc-release/mercury_library/list.html)
- [Mercury Standard Library - map](https://www.mercurylang.org/information/doc-release/mercury_library/map.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Lists are persistent *)
let items = [10; 20; 30]
let items2 = 40 :: items
(* items  = [10; 20; 30]      (unchanged) *)
(* items2 = [40; 10; 20; 30]  (new version) *)

(* Map *)
module StringMap = Map.Make(String)
let scores = StringMap.empty
  |> StringMap.add "Alice" 95
  |> StringMap.add "Bob" 87
let scores2 = StringMap.add "Carol" 92 scores
```

**Special features:**
- Lists, Maps and Sets are persistent by default
- `Map.Make` functor for typed persistent maps
- Based on balanced trees (AVL trees)
- `Array` and `Hashtbl` available as mutable alternatives

**Further reading:**
- [OCaml Documentation - Map](https://v2.ocaml.org/api/Map.html)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Lists are persistent
items :: List Int
items = 10 : 20 : 30 : Nil
items2 = 40 : items
-- items  = (10 : 20 : 30 : Nil)      (unchanged)
-- items2 = (40 : 10 : 20 : 30 : Nil)  (new version)

-- Map
scores = Map.fromFoldable [Tuple "Alice" 95, Tuple "Bob" 87]
scores2 = Map.insert "Carol" 92 scores
```

**Special features:**
- All data structures are persistent by default (purely functional language)
- `Data.Map` and `Data.Set` for persistent maps/sets
- Structural sharing through functional data structures
- Immutability is enforced by the type system

**Further reading:**
- [PureScript Documentation - Data.Map](https://pursuit.purescript.org/packages/purescript-ordered-collections)

</TabItem>
<TabItem value="python" label="Python">

```python
# Persistent data structures via pyrsistent
# Requires: from pyrsistent import pvector, pmap, pset
items = pvector([10, 20, 30])
items2 = items.append(40)
# items  = pvector([10, 20, 30])      (unchanged)
# items2 = pvector([10, 20, 30, 40])  (new version)

scores = pmap({"Alice": 95, "Bob": 87})
scores2 = scores.set("Carol", 92)
```

**Special features:**
- No native persistent data structures
- `pyrsistent` library provides `pvector`, `pmap`, `pset` with structural sharing
- Tuples and frozensets are immutable, but not persistent (no efficient update)
- `pyrsistent` uses HAMTs for O(log₃₂ n) operations

**Further reading:**
- [pyrsistent Documentation](https://pyrsistent.readthedocs.io/)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
;; Lists are persistent
(define items (list 10 20 30))
(define items2 (cons 40 items))
;; items  = '(10 20 30)       (unchanged)
;; items2 = '(40 10 20 30)    (new version)

;; Immutable Hash
(define scores (hash "Alice" 95 "Bob" 87))
(define scores2 (hash-set scores "Carol" 92))
```

**Special features:**
- Lists are persistent by default (cons cells with structural sharing)
- Immutable hash tables with `hash` / `hash-set`
- Functional update pattern as standard
- Mutable variants with `!` suffix (`hash-set!`)

**Further reading:**
- [Racket Documentation - Hash Tables](https://docs.racket-lang.org/reference/hashtables.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
# All data structures are persistent
items = [10, 20, 30]
items2 = List.append items 40
# items  = [10, 20, 30]      (unchanged)
# items2 = [10, 20, 30, 40]  (new version)

# Dict
scores = Dict.fromList [("Alice", 95), ("Bob", 87)]
scores2 = Dict.insert scores "Carol" 92
```

**Special features:**
- All data structures are persistent by default (purely functional language)
- Compiler can optimize in-place mutation in many cases (uniqueness typing)
- When a reference is unique, in-place mutation is performed instead of copying

**Further reading:**
- [Roc Documentation - Collections](https://www.roc-lang.org/builtins/List)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Persistent data structures via im-rs
// Requires: use im::Vector;
let items = Vector::from(vec![10, 20, 30]);
let items2 = {
    let mut v = items.clone();
    v.push_back(40);
    v
};
// items  = [10, 20, 30]      (unchanged, shared)
// items2 = [10, 20, 30, 40]  (new version)

// Requires: use im::HashMap;
let scores = HashMap::from(vec![("Alice", 95), ("Bob", 87)]);
let scores2 = scores.update("Carol", 92);
```

**Special features:**
- No persistent collections in the standard library
- `im` crate provides persistent `Vector`, `HashMap`, `HashSet`, `OrdMap`
- Based on RRB trees and HAMTs for efficient structural sharing
- `rpds` crate as alternative

**Further reading:**
- [im-rs Documentation](https://docs.rs/im/latest/im/)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Lists are persistent by default
val items = List(10, 20, 30)
val items2 = 40 :: items
// items  = List(10, 20, 30)       (unchanged)
// items2 = List(40, 10, 20, 30)   (new version)

// Map
val scores = Map("Alice" -> 95, "Bob" -> 87)
val scores2 = scores + ("Carol" -> 92)
// scores unchanged

// Vector (wide tree, good indexing)
val vec = Vector(10, 20, 30)
val vec2 = vec :+ 40
```

**Special features:**
- Standard collections (`List`, `Map`, `Set`, `Vector`) are persistent by default
- `Vector` is based on wide trees (efficient indexing and updates)
- `List` as classic cons list (O(1) prepend)
- `HashMap` is based on HAMTs

**Further reading:**
- [Scala Documentation - Immutable Collections](https://docs.scala-lang.org/overviews/collections-2.13/concrete-immutable-collection-classes.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; Lists are persistent
(define items (list 10 20 30))
(define items2 (cons 40 items))
;; items  = (10 20 30)       (unchanged)
;; items2 = (40 10 20 30)    (new version)

;; Association List (persistent Map)
(define scores '(("Alice" . 95) ("Bob" . 87)))
(define scores2 (cons '("Carol" . 92) scores))
```

**Special features:**
- Lists are persistent by default (cons cells with structural sharing)
- Association lists as simple persistent maps
- SRFI-146 for efficient persistent maps (hash tries)
- No native persistent sets

**Further reading:**
- [R7RS Scheme Specification](https://small.r7rs.org/attachment/r7rs.pdf)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Immutable.js library with TypeScript types
// Requires: import { List, Map } from 'immutable';
const items = List([10, 20, 30]);
const items2 = items.push(40);
// items  = List [10, 20, 30]      (unchanged)
// items2 = List [10, 20, 30, 40]  (new version)

const scores = Map({ Alice: 95, Bob: 87 });
const scores2 = scores.set("Carol", 92);
```

**Special features:**
- Identical to JavaScript, extended with type annotations
- Immutable.js provides TypeScript type definitions
- `Readonly<T>` and `ReadonlyArray<T>` enforce immutability, but no structural sharing

**Further reading:**
- [Immutable.js Documentation](https://immutable-js.com/)

</TabItem>
</Tabs>

