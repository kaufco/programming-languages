---
slug: /fp-konzepte/kernkonzepte
title: 9.1. Core Concepts
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 9.1. Core Concepts

Immutability, Monads, Functors and Applicatives.

## 9.1.1. Immutability by Default

In some programming languages, variables and bindings are immutable by default. To modify values, an explicit mutable declaration must be used. This principle promotes predictable code and reduces side effects.

### Languages {#sprachen}

<Tabs availableTabs={['carbon', 'clojure', 'elixir', 'elm', 'erlang', 'fsharp', 'gleam', 'haskell', 'idris', 'koka', 'kotlin', 'lean4', 'mercury', 'nim', 'ocaml', 'prolog', 'purescript', 'roc', 'rust', 'scala', 'swift', 'v', 'zig']} yellowTabs={['carbon', 'kotlin', 'nim', 'scala', 'swift', 'zig']}>
<TabItem value="carbon" label="Carbon">

```cpp
// let declares immutable bindings
let name: String = "Welt";
// name = "Mars";  // Error: cannot assign to let binding

// var declares mutable bindings
var counter: i32 = 0;
counter = counter + 1;
```

**Special features:**
- `let` for immutable and `var` for mutable bindings
- Both are equivalent declaration forms
- Experimental language, syntax may still change

**Further reading:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Bindings with def/let are immutable
(def name "Welt")
;; name cannot be reassigned

;; Data structures are persistent and immutable
(def items [1 2 3])
(def new-items (conj items 4))
;; items => [1 2 3]
;; new-items => [1 2 3 4]

;; Explicitly mutable state only via reference types
(def counter (atom 0))
(swap! counter inc)   ;; @counter => 1
```

**Special features:**
- All data structures (vectors, maps, sets, lists) are persistent and immutable
- Mutable state only via explicit reference types: `atom`, `ref`, `agent`
- Persistent data structures efficiently share structures (Structural Sharing)

**Further reading:**
- [Clojure - Values and Change](https://clojure.org/about/state)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# All data structures are immutable
items = [1, 2, 3]
new_items = [0 | items]
# items is still [1, 2, 3]

# Rebinding is allowed, but does not change the data
name = "Welt"
name = "Mars"   # New binding, no mutation of old data

# Maps are also immutable
map = %{a: 1, b: 2}
new_map = Map.put(map, :c, 3)
# map is still %{a: 1, b: 2}
```

**Special features:**
- All data structures (lists, maps, tuples) are immutable
- Variable rebinding is allowed, but creates a new binding instead of mutation
- Pin operator `^` prevents rebinding in pattern matching

**Further reading:**
- [Elixir - Basic Types](https://elixir-lang.org/getting-started/basic-types.html)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- All values are immutable
name = "Welt"
-- name cannot be changed

items = [1, 2, 3]
newItems = 0 :: items
-- items remains [1, 2, 3]

-- Records are also immutable
person = { name = "Alice", age = 30 }
olderPerson = { person | age = person.age + 1 }
-- person remains { name = "Alice", age = 30 }
```

**Special features:**
- Mutation does not exist in Elm – there is no language construct for it
- State changes only via The Elm Architecture (Model-Update-View)
- Purely functional with guaranteed absence of side effects

**Further reading:**
- [Elm Guide - Core Language](https://guide.elm-lang.org/core_language)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% Single Assignment: Variables can only be bound once
Name = "Welt",
% Name = "Mars"  % Error: Variable 'Name' is already bound

Items = [1, 2, 3],
NewItems = [0 | Items],
% Items remains [1, 2, 3]

% Maps are also immutable
Map = #{a => 1, b => 2},
NewMap = Map#{c => 3}.
% Map remains #{a => 1, b => 2}
```

**Special features:**
- Single Assignment: Each variable can only be bound once
- No way to reassign variables
- All data structures (lists, tuples, maps) are immutable

**Further reading:**
- [Erlang Documentation - Data Types](https://www.erlang.org/doc/system/data_types)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// let bindings are immutable by default
let name = "Welt"
// name <- "Mars"  // Error: 'name' is not mutable

// Explicitly mutable with 'mutable'
let mutable counter = 0
counter <- counter + 1

// Immutable data structures
let items = [1; 2; 3]
let newItems = 0 :: items
// items remains [1; 2; 3]
```

**Special features:**
- `let` bindings are immutable by default
- Explicit marking with `let mutable` for mutable bindings
- Record types are immutable by default

**Further reading:**
- [Microsoft F# Documentation - Values](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/values/)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// All values are immutable
let name = "Welt"
// name cannot be reassigned

let items = [1, 2, 3]
let new_items = [0, ..items]
// items remains [1, 2, 3]
```

**Special features:**
- All values and data structures are immutable
- There is no `mut` keyword or similar construct
- Immutability is a language guarantee

**Further reading:**
- [Gleam Language Tour - Variables](https://gleam.run/book/tour/variables)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- All values are immutable
name = "Welt"
-- name cannot be changed

items = [1, 2, 3]
newItems = 0 : items
-- items remains [1, 2, 3]

-- Mutable references only within the IO monad
-- ref <- newIORef 0
-- modifyIORef ref (+ 1)
```

**Special features:**
- All values are immutable – mutation does not exist at the language level
- Purely functional language with referential transparency
- Mutable state only via `IORef`, `STRef` or `MVar` (controlled by the type system)

**Further reading:**
- [Haskell Wiki - Functional Programming](https://wiki.haskell.org/Functional_programming)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- All values are immutable
name : String
name = "Welt"
-- name cannot be changed

items : List Int
items = [1, 2, 3]
newItems : List Int
newItems = 0 :: items
-- items remains [1, 2, 3]
```

**Special features:**
- All values are immutable
- Purely functional language with dependent types
- Mutable state only via linear types or the IO monad

**Further reading:**
- [Idris 2 Documentation](https://idris2.readthedocs.io/en/latest/)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
// All values are immutable by default
val name = "Welt"
// name = "Mars"  // Error: cannot be assigned

// var for mutable local variables
// (syntactic sugar for a local state effect)
fun count-up() : int
  var counter := 0
  counter := counter + 1
  counter := counter + 1
  counter  // 2

// Data structures are immutable
val items = [1, 2, 3]
val new-items = Cons(0, items)
// items remains [1, 2, 3]
```

**Special features:**
- All `val` bindings are immutable
- `var` creates mutable local variables (only within functions)
- `var` is syntactic sugar for an implicit local state effect
- All data structures (lists, trees, etc.) are immutable by default
- Koka uses Perceus Reference Counting for efficient functional updates (FBIP)

**Further reading:**
- [Koka Language Guide - Basics](https://koka-lang.github.io/koka/doc/book.html#sec-basics)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// val declares immutable bindings
val name = "Welt"
// name = "Mars"  // Error: Val cannot be reassigned

// var declares mutable bindings
var counter = 0
counter += 1

// Immutable vs. mutable collections
val items = listOf(1, 2, 3)
val mutableItems = mutableListOf(1, 2, 3)
mutableItems.add(4)
```

**Special features:**
- `val` for immutable and `var` for mutable bindings
- Both are equivalent declaration forms, `val` is idiomatically preferred
- Collection API explicitly distinguishes between `List` (immutable) and `MutableList`

**Further reading:**
- [Kotlin Documentation - Properties](https://kotlinlang.org/docs/properties.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- All values are immutable
def name : String := "Welt"
-- name cannot be changed

def items : List Nat := [1, 2, 3]
def newItems : List Nat := 0 :: items
-- items remains [1, 2, 3]

-- let bindings in do blocks are also immutable
def example : IO Unit := do
  let x := 42
  -- x := 99  -- Error: let bindings are immutable
  IO.println s!"{x}"
```

**Special features:**
- Lean 4 is purely functional: all `def` and `let` bindings are immutable
- Mutable state only via `IO.Ref`, `StateM` or `ST` monad
- Data structures (`List`, `Array`) are immutable by default
- Compiler optimizes internally via reference counting and destructive updates

**Further reading:**
- [Functional Programming in Lean – Getting Started](https://lean-lang.org/functional_programming_in_lean/)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Single Assignment: Variables can only be bound once
Name = "Welt",
% Name = "Mars"  % Error: Mode check fails

% Lists are immutable
Items = [1, 2, 3],
NewItems = [0 | Items],
% Items remains [1, 2, 3]

% All data structures are immutable
:- type person ---> person(string, int).
Person = person("Alice", 30).
% Person cannot be changed
```

**Special features:**
- Single Assignment: Variables can only be bound once (via unification)
- All data structures (lists, trees, custom types) are immutable
- Mutable state only via explicit state threading (e.g. `io.state` with `!IO`)
- The mode system statically checks that variables are not bound multiple times

**Further reading:**
- [Mercury Language Reference – Variables](https://www.mercurylang.org/information/doc-release/mercury_ref/Variables.html)
- [Mercury Language Reference – Modes](https://www.mercurylang.org/information/doc-release/mercury_ref/Modes.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# let declares immutable bindings
let name = "Welt"
# name = "Mars"  # Error: cannot assign to let variable

# var declares mutable bindings
var counter = 0
counter += 1

# const for compile-time constants
const maxSize = 100
```

**Special features:**
- Three declaration forms: `let` (runtime-immutable), `var` (mutable), `const` (compile-time constant)
- `let` and `var` are equivalent declaration forms
- Objects and sequences can be mutable or immutable depending on binding

**Further reading:**
- [Nim Manual - let Statement](https://nim-lang.org/docs/manual.html#statements-and-expressions-let-statement)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* let bindings are immutable by default *)
let name = "Welt"
(* name cannot be reassigned *)

(* Explicitly mutable with ref *)
let counter = ref 0
let () = counter := !counter + 1

(* Immutable data structures *)
let items = [1; 2; 3]
let new_items = 0 :: items
(* items remains [1; 2; 3] *)
```

**Special features:**
- `let` bindings are immutable by default
- Mutable references via `ref`, access with `!`, assignment with `:=`
- Record fields are immutable by default, but can be individually marked with `mutable`

**Further reading:**
- [OCaml Manual - Values and Functions](https://ocaml.org/docs/values-and-functions)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Single Assignment: Variables can only be bound once
Name = welt,
% Name = mars  % Error: Unification fails (Name is already bound)

% Lists are immutable
Items = [1, 2, 3],
NewItems = [0 | Items],
% Items remains [1, 2, 3]

% Terms (structures) are also immutable
Person = person(alice, 30).
% Person cannot be changed
```

**Special features:**
- Single Assignment: Logical variables can only be bound once (via unification)
- `=` is unification, not assignment – there is no assignment operator
- All data structures (lists, terms, atoms) are immutable
- Mutable global state only via the Prolog database (`assert`/`retract`)

**Further reading:**
- [SWI-Prolog Manual – Overview](https://www.swi-prolog.org/pldoc/man?section=overview)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- All values are immutable
name = "Welt"
-- name cannot be changed

items = [1, 2, 3]
newItems = [0] <> items
-- items remains [1, 2, 3]
```

**Special features:**
- All values are immutable – mutation does not exist at the language level
- Purely functional language (inspired by Haskell)
- Mutable state only via `Ref` in the `Effect` context

**Further reading:**
- [PureScript Documentation](https://pursuit.purescript.org/)

</TabItem>
<TabItem value="roc" label="Roc">

```roc
# All values are immutable
name = "Welt"
# name cannot be changed

items = [1, 2, 3]
newItems = List.prepend items 0
# items remains [1, 2, 3]
```

**Special features:**
- All values are immutable
- Purely functional language without escape hatch for mutation
- Compiler can perform mutations internally as optimization (Uniqueness Types)

**Further reading:**
- [Roc Language Tutorial](https://www.roc-lang.org/tutorial)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// let bindings are immutable by default
let name = "Welt";
// name = "Mars";  // Error: cannot assign twice to immutable variable

// Explicitly mutable with 'mut'
let mut counter = 0;
counter += 1;

// Data structures also require 'mut' for modification
let items = vec![1, 2, 3];
// items.push(4);  // Error: cannot borrow as mutable

let mut mutable_items = vec![1, 2, 3];
mutable_items.push(4);  // OK
```

**Special features:**
- `let` bindings are immutable by default
- Explicit marking with `let mut` for mutable bindings
- The borrow system distinguishes between `&T` (immutable reference) and `&mut T` (mutable reference)

**Further reading:**
- [Rust Book - Variables and Mutability](https://doc.rust-lang.org/book/ch03-01-variables-and-mutability.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// val declares immutable bindings
val name = "Welt"
// name = "Mars"  // Error: reassignment to val

// var declares mutable bindings
var counter = 0
counter += 1

// Standard collections are immutable
val items = List(1, 2, 3)
val newItems = 0 :: items
// items remains List(1, 2, 3)
```

**Special features:**
- `val` for immutable and `var` for mutable bindings
- `val` is strongly idiomatically preferred
- Standard collections (`List`, `Map`, `Set`) are immutable, mutable variants in the `scala.collection.mutable` package

**Further reading:**
- [Scala Documentation - Basics](https://docs.scala-lang.org/tour/basics.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// let declares immutable bindings
let name = "Welt"
// name = "Mars"  // Error: cannot assign to value: 'name' is a 'let' constant

// var declares mutable bindings
var counter = 0
counter += 1

// Value types are completely immutable with let binding
let items = [1, 2, 3]
// items.append(4)  // Error: cannot use mutating member on immutable value

var mutableItems = [1, 2, 3]
mutableItems.append(4)  // OK
```

**Special features:**
- `let` for immutable and `var` for mutable bindings
- Both are equivalent declaration forms
- Value types (structs, enums, arrays) are completely immutable with `let` binding
- Copy-on-write semantics optimize immutable value types

**Further reading:**
- [Swift Documentation - Constants and Variables](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/thebasics/#Constants-and-Variables)

</TabItem>
<TabItem value="v" label="V">

```v
// Variables are immutable by default
name := "Welt"
// name = "Mars"  // Error: cannot assign to immutable variable

// Explicitly mutable with 'mut'
mut counter := 0
counter += 1

// Arrays are immutable by default
items := [1, 2, 3]
// items << 4  // Error: cannot modify immutable array

mut mutable_items := [1, 2, 3]
mutable_items << 4  // OK
```

**Special features:**
- Variables are immutable by default
- Explicit marking with `mut` for mutable variables
- Structs and arrays are also immutable by default

**Further reading:**
- [V Documentation - Variables](https://docs.vlang.io/#variables)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// const declares immutable bindings
const name = "Welt";
// name = "Mars";  // Error: cannot assign to constant

// var declares mutable bindings
var counter: i32 = 0;
counter += 1;
```

**Special features:**
- `const` for immutable and `var` for mutable bindings
- Both are equivalent declaration forms, `const` is idiomatically preferred
- `const` also enforces immutability for pointers and slices

**Further reading:**
- [Zig Documentation - Variables](https://ziglang.org/documentation/master/#Variables)

</TabItem>
</Tabs>

## 9.1.2. Monads

Monads are a design pattern from category theory used in functional programming to chain computations with context (errors, optionality, side effects). The central operation `bind` (`>>=`, `flatMap`, `andThen`) allows passing the result of a context-bearing computation to the next one.

### Languages {#sprachen}

<Tabs availableTabs={['clojure', 'csharp', 'elm', 'fsharp', 'gleam', 'haskell', 'idris', 'java', 'javascript', 'kotlin', 'lean4', 'ocaml', 'purescript', 'roc', 'rust', 'scala', 'swift', 'typescript']} yellowTabs={['clojure', 'elm', 'fsharp', 'gleam', 'koka', 'kotlin', 'ocaml', 'roc', 'rust', 'scala']} orangeTabs={['csharp', 'java', 'javascript', 'swift', 'typescript']}>
<TabItem value="clojure" label="Clojure">

```clojure
(defn safe-divide [x y]
  (if (zero? y) nil (quot x y)))

;; Monadic chaining with some-> (nil-safe threading)
(def result
  (some-> 100
    (safe-divide 5)
    (safe-divide 2)))
;; => 10

(def failed
  (some-> 100
    (safe-divide 0)
    (safe-divide 2)))
;; => nil (chain breaks at nil)
```

**Special features:**
- No formal monad type class system (dynamically typed)
- `some->` and `some->>` provide nil-safe threading (analogous to Maybe monad)
- Monadic patterns via higher-order functions and threading macros

**Further reading:**
- [Clojure Documentation - Threading Macros](https://clojure.org/guides/threading_macros)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
int? SafeDivide(int x, int y) =>
    y == 0 ? null : x / y;

// Monadic chaining via LINQ SelectMany (= flatMap/bind)
var result = from x in (int?)100
             from y in SafeDivide(x, 5)
             from z in SafeDivide(y, 2)
             select z;
// result = 10

// Nullable chaining with ?.
int? failed = SafeDivide(100, 0)?.Let(x => SafeDivide(x, 2));
// failed = null
```

**Special features:**
- LINQ's `SelectMany` corresponds to monadic `bind`
- Nullable types (`int?`) with `?.` operator provide Maybe-monad-like behavior
- `Task<T>` behaves monadically with `async`/`await`

**Further reading:**
- [Microsoft C# Documentation - LINQ](https://learn.microsoft.com/en-us/dotnet/csharp/linq/)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
safeDivide : Int -> Int -> Maybe Int
safeDivide x y =
    if y == 0 then Nothing else Just (x // y)

-- Monadic chaining with andThen
result =
    Just 100
        |> Maybe.andThen (\x -> safeDivide x 5)
        |> Maybe.andThen (\y -> safeDivide y 2)
-- Just 10

failed =
    Just 100
        |> Maybe.andThen (\x -> safeDivide x 0)
        |> Maybe.andThen (\y -> safeDivide y 2)
-- Nothing
```

**Special features:**
- `Maybe.andThen` and `Result.andThen` are the monadic bind operations
- Deliberately no general `Monad` type class system (design decision)
- Monads are used via specific types instead of abstract type classes

**Further reading:**
- [Elm Package - Maybe](https://package.elm-lang.org/packages/elm/core/latest/Maybe)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
let safeDivide x y =
    if y = 0 then None else Some (x / y)

// Monadic chaining with Option.bind
let result =
    Some 100
    |> Option.bind (fun x -> safeDivide x 5)
    |> Option.bind (fun y -> safeDivide y 2)
// result = Some 10

let failed =
    Some 100
    |> Option.bind (fun x -> safeDivide x 0)
    |> Option.bind (fun y -> safeDivide y 2)
// failed = None
```

**Special features:**
- `Option.bind` and `Result.bind` are the monadic bind operations
- Pipe operator `|>` enables elegant chaining
- No general monad type class system, but computation expressions provide monadic syntax

**Further reading:**
- [Microsoft F# Documentation - Options](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/options)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
fn safe_divide(x, y) {
  case y {
    0 -> Error(Nil)
    _ -> Ok(x / y)
  }
}

// Monadic chaining with result.try
let result =
  result.try(Ok(100), fn(x) {
    result.try(safe_divide(x, 5), fn(y) {
      safe_divide(y, 2)
    })
  })
// Ok(10)
```

**Special features:**
- `result.try` is the monadic bind operation for `Result`
- No general monad type class system
- `use` expression provides syntactic sugar for monadic chaining

**Further reading:**
- [Gleam Standard Library - result](https://hexdocs.pm/gleam_stdlib/gleam/result.html)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
safeDivide :: Int -> Int -> Maybe Int
safeDivide _ 0 = Nothing
safeDivide x y = Just (x `div` y)

-- Monadic chaining with >>= (bind)
result = Just 100 >>= (\x -> safeDivide x 5) >>= (\y -> safeDivide y 2)
-- Just 10

failed = Just 100 >>= (\x -> safeDivide x 0) >>= (\y -> safeDivide y 2)
-- Nothing

-- Monad type class defined: >>= (bind), return, >>
-- class Monad m where
--     (>>=)  :: m a -> (a -> m b) -> m b
--     return :: a -> m a
```

**Special features:**
- Formal `Monad` type class with `>>=` (bind) and `return`
- Numerous monad instances: `Maybe`, `Either`, `IO`, `List`, `State`, `Reader`, `Writer`
- `do` notation provides imperative syntactic sugar for monadic code

**Further reading:**
- [Haskell Wiki - Monad](https://wiki.haskell.org/Monad)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
safeDivide : Int -> Int -> Maybe Int
safeDivide _ 0 = Nothing
safeDivide x y = Just (y `div` x)

-- Monadic chaining with >>= (bind)
result : Maybe Int
result = Just 100 >>= (\x => safeDivide x 5) >>= (\y => safeDivide y 2)
-- Just 10

failed : Maybe Int
failed = Just 100 >>= (\x => safeDivide x 0) >>= (\y => safeDivide y 2)
-- Nothing
```

**Special features:**
- Formal `Monad` interface with `>>=` (bind) and `pure`
- Dependent types allow proofs about monadic computations
- `do` notation analogous to Haskell

**Further reading:**
- [Idris 2 Documentation - Interfaces](https://idris2.readthedocs.io/en/latest/tutorial/interfaces.html)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
// Koka prefers algebraic effects over monads.
// Monadic patterns exist via map/flatmap on container types.

fun safe-divide(x : int, y : int) : maybe<int>
  if y == 0 then Nothing else Just(x / y)

// Monadic chaining via pattern matching
fun compute() : maybe<int>
  match safe-divide(100, 5)
    Just(y) -> safe-divide(y, 2)
    Nothing -> Nothing
// Just(10)

// Koka's preferred approach: Direct chaining with effects
effect ctl raise(msg : string) : a

fun safe-div(x : int, y : int) : raise int
  if y == 0 then raise("Division durch Null") else x / y

fun compute-eff() : raise int
  val x = safe-div(100, 5)
  safe-div(x, 2)
// 10 – no monadic wrapping needed
```

**Special features:**
- No formal `Monad` type class system
- `map` and pattern matching on `maybe` and `list` for monadic chaining
- Koka prefers algebraic effects over monads for side effects
- Effects enable direct chaining without monadic wrapping

**Further reading:**
- [Koka Language Guide - Effects](https://koka-lang.github.io/koka/doc/book.html#sec-effect-types)
- [Koka Standard Library](https://koka-lang.github.io/koka/doc/std_core.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Optional.flatMap (since Java 8)
OptionalInt safeDivide(int x, int y) {
    return y == 0 ? OptionalInt.empty() : OptionalInt.of(x / y);
}

Optional<Integer> result = Optional.of(100)
    .flatMap(x -> safeDivide(x, 5).stream().boxed().findFirst())
    .flatMap(y -> safeDivide(y, 2).stream().boxed().findFirst());
// Optional[10]

// Stream.flatMap as list monad
List<Integer> items = List.of(1, 2, 3);
List<Integer> result2 = items.stream()
    .flatMap(x -> x > 1 ? Stream.of(x, x * 10) : Stream.empty())
    .toList();
// [2, 20, 3, 30]
```

**Special features:**
- `Optional.flatMap()` and `Stream.flatMap()` are monadic bind operations (since Java 8)
- No general monad interface in the standard library
- Libraries like Vavr provide more comprehensive monadic types

**Further reading:**
- [Oracle Java Documentation - Optional](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Optional.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
function safeDivide(x, y) {
    return y === 0 ? Promise.reject("Division by zero") : Promise.resolve(x / y);
}

// Promise.then as monadic bind
const result = Promise.resolve(100)
    .then(x => safeDivide(x, 5))
    .then(y => safeDivide(y, 2));
// Promise { 10 }

// Array.flatMap as list monad (since ES2019)
const items = [1, 2, 3];
const mapped = items.flatMap(x => x > 1 ? [x, x * 10] : []);
// [2, 20, 3, 30]
```

**Special features:**
- `Promise.then()` corresponds to monadic bind for asynchronous computations
- `Array.flatMap()` corresponds to monadic bind for lists (since ES2019)
- No general monad concept in the language

**Further reading:**
- [MDN - Promise.prototype.then()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
fun safeDivide(x: Int, y: Int): Int? =
    if (y == 0) null else x / y

// Monadic chaining with ?.let (Nullable monad)
val result = safeDivide(100, 5)?.let { safeDivide(it, 2) }
// 10

val failed = safeDivide(100, 0)?.let { safeDivide(it, 2) }
// null

// With Arrow library: Either monad
// val result = either {
//     val x = safeDivide(100, 5).bind()
//     val y = safeDivide(x, 2).bind()
//     y
// }
```

**Special features:**
- `?.let` provides monadic bind for nullable types
- Arrow library provides comprehensive monadic types (`Either`, `Option`, `Validated`)
- `Result` type with `fold`, `map`, `flatMap` in the standard library

**Further reading:**
- [Kotlin Documentation - Null Safety](https://kotlinlang.org/docs/null-safety.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
def safeDivide (x y : Int) : Option Int :=
  if y == 0 then none else some (x / y)

-- Monadic chaining with >>= (bind)
def result : Option Int :=
  some 100 >>= (fun x => safeDivide x 5) >>= (fun y => safeDivide y 2)
-- some 10

def failed : Option Int :=
  some 100 >>= (fun x => safeDivide x 0) >>= (fun y => safeDivide y 2)
-- none
```

**Special features:**
- Formal `Monad` type class with `bind` (`>>=`) and `pure`
- Numerous monad instances: `Option`, `Except`, `IO`, `List`, `StateM`, `ReaderM`
- `do` notation provides imperative syntactic sugar for monadic code
- Dependent types enable proofs about monadic computations

**Further reading:**
- [Functional Programming in Lean – Monads](https://lean-lang.org/functional_programming_in_lean/monads.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
let safe_divide x y =
  if y = 0 then None else Some (x / y)

(* Monadic chaining with Option.bind *)
let result =
  Option.bind (Some 100) (fun x ->
    Option.bind (safe_divide x 5) (fun y ->
      safe_divide y 2))
(* result = Some 10 *)

(* With let* syntax (since OCaml 4.08) *)
let ( let* ) = Option.bind
let result =
  let* x = Some 100 in
  let* y = safe_divide x 5 in
  safe_divide y 2
(* result = Some 10 *)
```

**Special features:**
- `Option.bind` and `Result.bind` are the monadic bind operations
- Binding operators (`let*`, `and*`) since OCaml 4.08 as syntactic sugar
- No general monad type class system, but modules and functors enable generic abstractions

**Further reading:**
- [OCaml Manual - Binding Operators](https://v2.ocaml.org/manual/bindingops.html)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
safeDivide :: Int -> Int -> Maybe Int
safeDivide _ 0 = Nothing
safeDivide x y = Just (x / y)

-- Monadic chaining with >>= (bind)
result = Just 100 >>= (\x -> safeDivide x 5) >>= (\y -> safeDivide y 2)
-- Just 10

failed = Just 100 >>= (\x -> safeDivide x 0) >>= (\y -> safeDivide y 2)
-- Nothing
```

**Special features:**
- Formal `Monad` type class with `bind` (`>>=`) and `pure`
- Numerous monad instances: `Maybe`, `Either`, `Effect`, `Aff`, `Array`
- `do` notation provides imperative syntactic sugar for monadic code

**Further reading:**
- [PureScript - Monad](https://pursuit.purescript.org/packages/purescript-prelude/docs/Control.Monad)

</TabItem>
<TabItem value="roc" label="Roc">

```roc
safeDivide = \x, y ->
    if y == 0 then Err DivByZero else Ok (x // y)

# Monadic chaining with Result.try
result =
    Ok 100
    |> Result.try \x -> safeDivide x 5
    |> Result.try \y -> safeDivide y 2
# Ok 10

failed =
    Ok 100
    |> Result.try \x -> safeDivide x 0
    |> Result.try \y -> safeDivide y 2
# Err DivByZero
```

**Special features:**
- `Result.try` and `Task.await` are the monadic bind operations
- `!` suffix as syntactic sugar for `Task.await`
- No general monad type class system

**Further reading:**
- [Roc Language Tutorial](https://www.roc-lang.org/tutorial)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
fn safe_divide(x: i32, y: i32) -> Option<i32> {
    if y == 0 { None } else { Some(x / y) }
}

// Monadic chaining with and_then (= bind/flatMap)
let result = Some(100)
    .and_then(|x| safe_divide(x, 5))
    .and_then(|y| safe_divide(y, 2));
// Some(10)

let failed = Some(100)
    .and_then(|x| safe_divide(x, 0))
    .and_then(|y| safe_divide(y, 2));
// None
```

**Special features:**
- `and_then` is the monadic bind operation for `Option` and `Result`
- `?` operator provides syntactic sugar for `Result`/`Option` chaining in functions
- No general `Monad` trait in the standard library

**Further reading:**
- [Rust Documentation - Option::and_then](https://doc.rust-lang.org/std/option/enum.Option.html#method.and_then)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
def safeDivide(x: Int, y: Int): Option[Int] =
  if y == 0 then None else Some(x / y)

// Monadic chaining with flatMap
val result = Some(100)
  .flatMap(x => safeDivide(x, 5))
  .flatMap(y => safeDivide(y, 2))
// Some(10)

val failed = Some(100)
  .flatMap(x => safeDivide(x, 0))
  .flatMap(y => safeDivide(y, 2))
// None
```

**Special features:**
- `flatMap` is the monadic bind operation for `Option`, `Either`, `List`, `Future`
- `for` comprehensions provide syntactic sugar for monadic chaining
- Cats library provides formal `Monad` type class

**Further reading:**
- [Scala Documentation - Option](https://www.scala-lang.org/api/current/scala/Option.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
func safeDivide(_ x: Int, _ y: Int) -> Int? {
    y == 0 ? nil : x / y
}

// Monadic chaining with flatMap
let result = Optional(100)
    .flatMap { safeDivide($0, 5) }
    .flatMap { safeDivide($0, 2) }
// Optional(10)

let failed = Optional(100)
    .flatMap { safeDivide($0, 0) }
    .flatMap { safeDivide($0, 2) }
// nil
```

**Special features:**
- `flatMap` on `Optional`, `Array` and `Result` (since Swift 5.0)
- Optional chaining (`?.`) as implicit monadic chaining
- No general monad protocol in the standard library

**Further reading:**
- [Swift Documentation - Optional](https://developer.apple.com/documentation/swift/optional)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
function safeDivide(x: number, y: number): Promise<number> {
    return y === 0 ? Promise.reject("Division by zero") : Promise.resolve(x / y);
}

// Promise.then as monadic bind
const result = Promise.resolve(100)
    .then(x => safeDivide(x, 5))
    .then(y => safeDivide(y, 2));
// Promise { 10 }

// Array.flatMap as list monad
const items = [1, 2, 3];
const mapped = items.flatMap(x => x > 1 ? [x, x * 10] : []);
// [2, 20, 3, 30]
```

**Special features:**
- `Promise.then()` corresponds to monadic bind for asynchronous computations
- `Array.flatMap()` corresponds to monadic bind for lists
- Libraries like fp-ts provide complete monadic types with type support

**Further reading:**
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/)

</TabItem>
</Tabs>

## 9.1.3. Functors / Applicatives

Functors are types on whose wrapped values a function can be applied without unwrapping them (`map`/`fmap`). Applicatives extend functors with the ability to combine multiple wrapped values with a function (`apply`/`<*>`/`liftA2`).

### Languages {#sprachen}

<Tabs availableTabs={['clojure', 'csharp', 'elm', 'fsharp', 'gleam', 'haskell', 'idris', 'java', 'javascript', 'kotlin', 'lean4', 'ocaml', 'purescript', 'roc', 'rust', 'scala', 'swift', 'typescript']} yellowTabs={['clojure', 'elm', 'fsharp', 'gleam', 'koka', 'kotlin', 'ocaml', 'roc', 'rust', 'scala']} orangeTabs={['csharp', 'java', 'javascript', 'swift', 'typescript']}>
<TabItem value="clojure" label="Clojure">

```clojure
;; Functor: fmap-like with map
(def items [1 2 3])
(def doubled (mapv #(* 2 %) items))
;; => [2 4 6]

;; Functor on nil-safe values
(defn fmap [f x]
  (when (some? x) (f x)))

(fmap #(* 2 %) 5)    ;; => 10
(fmap #(* 2 %) nil)   ;; => nil

;; Applicative-like: Combine multiple optional values
(defn lift-a2 [f a b]
  (when (and (some? a) (some? b))
    (f a b)))

(lift-a2 + 3 5)      ;; => 8
(lift-a2 + 3 nil)     ;; => nil
```

**Special features:**
- No formal functor/applicative type class system (dynamically typed)
- Functor patterns via `map`, `mapv` and higher-order functions
- Applicative patterns manually via helper functions or libraries

**Further reading:**
- [Clojure Documentation - Sequences](https://clojure.org/reference/sequences)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Functor: Select (= map) via LINQ
var items = new List<int> { 1, 2, 3 };
var doubled = items.Select(x => x * 2).ToList();
// [2, 4, 6]

// Functor on Nullable
int? value = 5;
int? result = value.HasValue ? value.Value * 2 : null;
// 10

// Applicative-like: Combine multiple nullable values
int? a = 3;
int? b = 5;
int? sum = (a.HasValue && b.HasValue) ? a.Value + b.Value : null;
// 8
```

**Special features:**
- LINQ `Select` corresponds to functor `map`
- No general functor or applicative interface
- Nullable types and LINQ provide limited functor semantics

**Further reading:**
- [Microsoft C# Documentation - LINQ Select](https://learn.microsoft.com/en-us/dotnet/api/system.linq.enumerable.select)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Functor: map on Maybe
Maybe.map (\x -> x * 2) (Just 5)     -- Just 10
Maybe.map (\x -> x * 2) Nothing      -- Nothing

-- Functor: map on List
List.map (\x -> x * 2) [1, 2, 3]     -- [2, 4, 6]

-- Applicative: map2 combines two Maybe values
Maybe.map2 (+) (Just 3) (Just 5)     -- Just 8
Maybe.map2 (+) (Just 3) Nothing      -- Nothing

-- Applicative: map3 for three values
Maybe.map3 (\a b c -> a + b + c) (Just 1) (Just 2) (Just 3)
-- Just 6
```

**Special features:**
- `Maybe.map`, `Result.map`, `List.map` as functor operations
- `Maybe.map2` through `Maybe.map5` as applicative operations
- No general functor/applicative type class system (design decision)

**Further reading:**
- [Elm Package - Maybe](https://package.elm-lang.org/packages/elm/core/latest/Maybe)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Functor: Option.map
Option.map (fun x -> x * 2) (Some 5)     // Some 10
Option.map (fun x -> x * 2) None          // None

// Functor: List.map
List.map (fun x -> x * 2) [1; 2; 3]      // [2; 4; 6]

// Applicative-like: Combine multiple options
let liftA2 f a b =
    match a, b with
    | Some x, Some y -> Some (f x y)
    | _ -> None

liftA2 (+) (Some 3) (Some 5)     // Some 8
liftA2 (+) (Some 3) None          // None
```

**Special features:**
- `Option.map`, `Result.map`, `List.map` as functor operations
- No built-in applicative pattern, but realizable via helper functions or `and!` in computation expressions
- Pipe operator `|>` enables elegant functor chaining

**Further reading:**
- [Microsoft F# Documentation - Option Module](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/options)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// Functor: result.map
result.map(Ok(5), fn(x) { x * 2 })        // Ok(10)
result.map(Error(Nil), fn(x) { x * 2 })   // Error(Nil)

// Functor: list.map
list.map([1, 2, 3], fn(x) { x * 2 })      // [2, 4, 6]

// Applicative-like: Combine multiple results
let a = Ok(3)
let b = Ok(5)
case a, b {
  Ok(x), Ok(y) -> Ok(x + y)
  _, _ -> Error(Nil)
}
// Ok(8)
```

**Special features:**
- `result.map`, `option.map`, `list.map` as functor operations
- No general functor/applicative type class system
- Pattern matching as alternative for applicative combinations

**Further reading:**
- [Gleam Standard Library - result](https://hexdocs.pm/gleam_stdlib/gleam/result.html)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Functor: fmap (= <$>) applies function to value in context
fmap (* 2) (Just 5)           -- Just 10
fmap (* 2) Nothing            -- Nothing
fmap (* 2) [1, 2, 3]          -- [2, 4, 6]

-- Applicative: <*> applies wrapped function to wrapped value
Just (+ 3) <*> Just 5         -- Just 8
Just (+ 3) <*> Nothing        -- Nothing

-- Applicative: liftA2 combines two values in context
liftA2 (+) (Just 3) (Just 5)  -- Just 8
liftA2 (+) (Just 3) Nothing   -- Nothing

-- Functor type class: fmap :: (a -> b) -> f a -> f b
-- Applicative type class: pure :: a -> f a
--                        (<*>) :: f (a -> b) -> f a -> f b
```

**Special features:**
- Formal `Functor` type class with `fmap` and `<$>`
- Formal `Applicative` type class with `pure` and `<*>`
- Hierarchy: `Functor` → `Applicative` → `Monad`
- Numerous instances: `Maybe`, `Either`, `List`, `IO`, `Parser`, etc.

**Further reading:**
- [Haskell Wiki - Functor](https://wiki.haskell.org/Functor)
- [Haskell Wiki - Applicative Functor](https://wiki.haskell.org/Applicative_functor)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Functor: map applies function to value in context
map (* 2) (Just 5)            -- Just 10
map (* 2) Nothing             -- Nothing
map (* 2) [1, 2, 3]           -- [2, 4, 6]

-- Applicative: <*> applies wrapped function to wrapped value
Just (+ 3) <*> Just 5         -- Just 8
Just (+ 3) <*> Nothing        -- Nothing

-- Applicative: liftA2 combines two values in context
liftA2 (+) (Just 3) (Just 5)  -- Just 8
liftA2 (+) (Just 3) Nothing   -- Nothing
```

**Special features:**
- Formal `Functor` interface with `map`
- Formal `Applicative` interface with `pure` and `<*>`
- Dependent types allow additional proofs about functor/applicative laws

**Further reading:**
- [Idris 2 Documentation - Interfaces](https://idris2.readthedocs.io/en/latest/tutorial/interfaces.html)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
// Functor: map on Maybe
Just(5).map(fn(x) x * 2)           // Just(10)
Nothing.map(fn(x : int) x * 2)     // Nothing

// Functor: map on List
[1, 2, 3].map(fn(x) x * 2)        // [2, 4, 6]

// Applicative-like: Combine multiple Maybe values
fun lift-a2(f : (a, b) -> c, ma : maybe<a>, mb : maybe<b>) : maybe<c>
  match (ma, mb)
    (Just(a), Just(b)) -> Just(f(a, b))
    _                  -> Nothing

lift-a2(fn(a, b) a + b, Just(3), Just(5))  // Just(8)
lift-a2(fn(a, b) a + b, Just(3), Nothing)  // Nothing
```

**Special features:**
- `map` on `maybe`, `list` and `either` as functor operations
- No general functor/applicative type class system
- Applicative patterns realizable via helper functions
- Koka prefers effects over abstract type class hierarchies

**Further reading:**
- [Koka Standard Library - maybe](https://koka-lang.github.io/koka/doc/std_core_maybe.html)
- [Koka Standard Library - list](https://koka-lang.github.io/koka/doc/std_core_list.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Functor: Optional.map (since Java 8)
Optional.of(5).map(x -> x * 2);           // Optional[10]
Optional.<Integer>empty().map(x -> x * 2); // Optional.empty()

// Functor: Stream.map
List.of(1, 2, 3).stream()
    .map(x -> x * 2)
    .toList();                             // [2, 4, 6]

// Applicative-like: Manual combination
Optional<Integer> a = Optional.of(3);
Optional<Integer> b = Optional.of(5);
Optional<Integer> sum = a.flatMap(x -> b.map(y -> x + y));
// Optional[8]
```

**Special features:**
- `Optional.map()` and `Stream.map()` as functor operations (since Java 8)
- No general functor or applicative interface
- Applicative patterns only via workarounds with `flatMap` + `map`

**Further reading:**
- [Oracle Java Documentation - Optional](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Optional.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Functor: Array.map
const doubled = [1, 2, 3].map(x => x * 2);
// [2, 4, 6]

// Functor: Promise.then (map semantics for non-Promise return)
const result = Promise.resolve(5).then(x => x * 2);
// Promise { 10 }

// Applicative-like: Combine multiple promises
const a = Promise.resolve(3);
const b = Promise.resolve(5);
const sum = Promise.all([a, b]).then(([x, y]) => x + y);
// Promise { 8 }
```

**Special features:**
- `Array.map()` and `Promise.then()` as functor operations
- `Promise.all()` provides limited applicative semantics
- No general functor/applicative concept in the language

**Further reading:**
- [MDN - Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Functor: map on collections
val doubled = listOf(1, 2, 3).map { it * 2 }
// [2, 4, 6]

// Functor: map on nullable (with ?.let)
val value: Int? = 5
val result = value?.let { it * 2 }
// 10

// Applicative-like: Combine multiple nullable values
val a: Int? = 3
val b: Int? = 5
val sum = if (a != null && b != null) a + b else null
// 8

// With Arrow: Formal functor/applicative abstractions
// val result = Option(3).zip(Option(5)).map { (a, b) -> a + b }
```

**Special features:**
- `map` on collections, sequences and result as functor operation
- `?.let` as functor `map` for nullable types
- Arrow library provides formal `Functor` and `Applicative` type classes

**Further reading:**
- [Kotlin Documentation - Collection Transformations](https://kotlinlang.org/docs/collection-transformations.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Functor: Functor.map (= <$>) applies function to value in context
Functor.map (· * 2) (some 5)          -- some 10
Functor.map (· * 2) (none : Option Nat) -- none
Functor.map (· * 2) [1, 2, 3]         -- [2, 4, 6]

-- Applicative: Seq.seq (= <*>) applies wrapped function
some (· + 3) <*> some 5               -- some 8
some (· + 3) <*> (none : Option Nat)  -- none

-- Applicative: liftA2 combines two values in context
-- (manual, since no built-in liftA2)
def liftA2 (f : α → β → γ) (a : Option α) (b : Option β) : Option γ :=
  f <$> a <*> b

liftA2 (· + ·) (some 3) (some 5)     -- some 8
liftA2 (· + ·) (some 3) none         -- none
```

**Special features:**
- Formal `Functor` type class with `map` and `<$>`
- Formal `Applicative` type class with `pure` and `<*>` (via `Seq`)
- Hierarchy: `Functor` → `Applicative` → `Monad`
- Numerous instances: `Option`, `Except`, `List`, `IO`, etc.

**Further reading:**
- [Lean 4 – Typeclasses](https://lean-lang.org/functional_programming_in_lean/type-classes.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Functor: Option.map *)
Option.map (fun x -> x * 2) (Some 5)      (* Some 10 *)
Option.map (fun x -> x * 2) None           (* None *)

(* Functor: List.map *)
List.map (fun x -> x * 2) [1; 2; 3]       (* [2; 4; 6] *)

(* Applicative with let+/and+ operators (since OCaml 4.08) *)
let ( let+ ) x f = Option.map f x
let ( and+ ) a b =
  match a, b with
  | Some x, Some y -> Some (x, y)
  | _ -> None

let result =
  let+ a = Some 3
  and+ b = Some 5 in
  a + b
(* result = Some 8 *)
```

**Special features:**
- `Option.map`, `Result.map`, `List.map` as functor operations
- `let+` and `and+` operators as applicative syntax (since OCaml 4.08)
- Modules and functors enable generic functor abstractions

**Further reading:**
- [OCaml Manual - Binding Operators](https://v2.ocaml.org/manual/bindingops.html)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Functor: map (= <$>) applies function to value in context
map (_ * 2) (Just 5)           -- Just 10
map (_ * 2) Nothing            -- Nothing
map (_ * 2) [1, 2, 3]          -- [2, 4, 6]

-- Applicative: apply (= <*>)
Just (_ + 3) <*> Just 5        -- Just 8
Just (_ + 3) <*> Nothing       -- Nothing

-- Applicative: lift2 combines two values in context
lift2 (+) (Just 3) (Just 5)    -- Just 8
lift2 (+) (Just 3) Nothing     -- Nothing
```

**Special features:**
- Formal `Functor` type class with `map` and `<$>`
- Formal `Applicative` type class with `pure` and `<*>`
- Hierarchy as in Haskell: `Functor` → `Apply` → `Applicative` → `Bind` → `Monad`

**Further reading:**
- [PureScript - Functor](https://pursuit.purescript.org/packages/purescript-prelude/docs/Data.Functor)

</TabItem>
<TabItem value="roc" label="Roc">

```roc
# Functor: Result.map
Result.map (Ok 5) \x -> x * 2       # Ok 10
Result.map (Err NotFound) \x -> x * 2  # Err NotFound

# Functor: List.map
List.map [1, 2, 3] \x -> x * 2      # [2, 4, 6]

# Applicative-like: Combine multiple results
a = Ok 3
b = Ok 5
result =
    Result.try a \x ->
    Result.map b \y -> x + y
# Ok 8
```

**Special features:**
- `Result.map`, `List.map` as functor operations
- No general functor/applicative type class system
- Applicative patterns via `Result.try` + `Result.map` combination

**Further reading:**
- [Roc Language Tutorial](https://www.roc-lang.org/tutorial)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Functor: Option::map
Some(5).map(|x| x * 2);           // Some(10)
None::<i32>.map(|x| x * 2);       // None

// Functor: Iterator::map
let doubled: Vec<i32> = vec![1, 2, 3].iter().map(|x| x * 2).collect();
// [2, 4, 6]

// Applicative-like: Option::zip + map
let a = Some(3);
let b = Some(5);
let sum = a.zip(b).map(|(x, y)| x + y);
// Some(8)

let failed = a.zip(None::<i32>).map(|(x, y)| x + y);
// None
```

**Special features:**
- `Option::map`, `Result::map`, `Iterator::map` as functor operations
- `Option::zip` combines two options (since Rust 1.46)
- No general `Functor` or `Applicative` trait in the standard library

**Further reading:**
- [Rust Documentation - Option::map](https://doc.rust-lang.org/std/option/enum.Option.html#method.map)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Functor: map on Option
Some(5).map(_ * 2)             // Some(10)
None.map((x: Int) => x * 2)   // None

// Functor: map on List
List(1, 2, 3).map(_ * 2)      // List(2, 4, 6)

// Applicative: for-comprehension for multiple values
val result = for {
  a <- Some(3)
  b <- Some(5)
} yield a + b
// Some(8)

// With Cats: Formal applicative
// import cats.syntax.all._
// (Option(3), Option(5)).mapN(_ + _)  // Some(8)
```

**Special features:**
- `map` on `Option`, `Either`, `List`, `Future` as functor operations
- `for` comprehensions provide applicative-/monad-like syntax
- Cats library provides formal `Functor` and `Applicative` type classes with `mapN`

**Further reading:**
- [Scala Documentation - Option](https://www.scala-lang.org/api/current/scala/Option.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Functor: map on Optional
let value: Int? = 5
let doubled = value.map { $0 * 2 }        // Optional(10)
let nothing: Int? = nil
let result = nothing.map { $0 * 2 }       // nil

// Functor: map on Array
let items = [1, 2, 3].map { $0 * 2 }      // [2, 4, 6]

// Applicative-like: Combine multiple optionals
let a: Int? = 3
let b: Int? = 5
let sum: Int? = a.flatMap { x in b.map { y in x + y } }
// Optional(8)
```

**Special features:**
- `map` on `Optional`, `Array`, `Result` as functor operations
- No general functor or applicative protocol in the standard library
- Applicative patterns via `flatMap` + `map` combination

**Further reading:**
- [Swift Documentation - Optional](https://developer.apple.com/documentation/swift/optional)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Functor: Array.map
const doubled = [1, 2, 3].map(x => x * 2);
// [2, 4, 6]

// Functor: Promise.then (map semantics for non-Promise return values)
const result = Promise.resolve(5).then(x => x * 2);
// Promise { 10 }

// Applicative-like: Combining multiple Promises
const a = Promise.resolve(3);
const b = Promise.resolve(5);
const sum = Promise.all([a, b]).then(([x, y]) => x + y);
// Promise { 8 }
```

**Special features:**
- `Array.map()` and `Promise.then()` as functor operations
- `Promise.all()` provides limited applicative semantics
- Libraries like fp-ts provide formal functor/applicative abstractions with full type support

**Further reading:**
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/)

</TabItem>
</Tabs>

## 9.1.4. Computation Expressions

Syntactic constructs that simplify the sequential chaining of monadic operations and make monadic code as readable as imperative code. Known as Computation Expressions in F#, `do` notation in Haskell, and `for` comprehensions in Scala.

### Languages {#sprachen}

<Tabs availableTabs={['csharp', 'fsharp', 'gleam', 'haskell', 'idris', 'kotlin', 'lean4', 'ocaml', 'purescript', 'roc', 'rust', 'scala']} yellowTabs={['csharp', 'koka', 'kotlin', 'rust']}>
<TabItem value="csharp" label="C#">

```csharp
// LINQ Query Syntax as Computation Expression
int? SafeDivide(int x, int y) =>
    y == 0 ? null : x / y;

// LINQ query expressions (monadic syntax)
var result = from x in (int?)100
             from y in SafeDivide(x, 5)
             from z in SafeDivide(y, 2)
             select z;
// result = 10

// Equivalent to explicit SelectMany (= bind):
// ((int?)100)
//   .SelectMany(x => SafeDivide(x, 5),
//     (x, y) => SafeDivide(y, 2))
```

**Special features:**
- LINQ Query Syntax provides monadic syntactic sugar via `from`/`select`
- `SelectMany` corresponds to monadic bind
- Works with any type that implements `SelectMany` (not just collections)

**Further reading:**
- [Microsoft C# Documentation - Query Expressions](https://learn.microsoft.com/en-us/dotnet/csharp/linq/get-started/query-expression-basics)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
let safeDivide x y =
    if y = 0 then None else Some (x / y)

// Define Computation Expression Builder
type OptionBuilder() =
    member _.Bind(x, f) = Option.bind f x
    member _.Return(x) = Some x
    member _.ReturnFrom(x) = x

let option = OptionBuilder()

// Use Computation Expression
let result = option {
    let! x = Some 100
    let! y = safeDivide x 5
    return! safeDivide y 2
}
// result = Some 10

let failed = option {
    let! x = Some 100
    let! y = safeDivide x 0
    return! safeDivide y 2
}
// failed = None
```

**Special features:**
- Computation Expressions are custom control flow constructs
- `let!` binds monadically, `return` wraps values, `return!` returns directly
- Numerous built-in builders: `async { }`, `task { }`, `seq { }`, `query { }`
- Custom builders can be created for any monad
- `and!` enables applicative semantics (since F# 6.0)

**Further reading:**
- [Microsoft F# Documentation - Computation Expressions](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/computation-expressions)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
fn safe_divide(x, y) {
  case y {
    0 -> Error(Nil)
    _ -> Ok(x / y)
  }
}

// use expression as Computation Expression
let result = {
  use x <- result.try(Ok(100))
  use y <- result.try(safe_divide(x, 5))
  safe_divide(y, 2)
}
// Ok(10)

// Equivalent to explicit bind:
// result.try(Ok(100), fn(x) {
//   result.try(safe_divide(x, 5), fn(y) {
//     safe_divide(y, 2)
//   })
// })
```

**Special features:**
- `use` expression provides syntactic sugar for callback-based functions
- Works with any function that expects a callback as the last argument
- Not limited to monads – also usable for resource management and other patterns

**Further reading:**
- [Gleam Language Tour - Use](https://gleam.run/book/tour/use)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
safeDivide :: Int -> Int -> Maybe Int
safeDivide _ 0 = Nothing
safeDivide x y = Just (x `div` y)

-- do notation as Computation Expression
result :: Maybe Int
result = do
    x <- Just 100
    y <- safeDivide x 5
    safeDivide y 2
-- Just 10

failed :: Maybe Int
failed = do
    x <- Just 100
    y <- safeDivide x 0
    safeDivide y 2
-- Nothing

-- Equivalent to explicit >>= (bind):
-- Just 100 >>= (\x -> safeDivide x 5 >>= (\y -> safeDivide y 2))
```

**Special features:**
- `do` notation is syntactic sugar for `>>=` (bind) chaining
- `<-` binds the result of a monadic computation
- Works with any `Monad` instance: `Maybe`, `Either`, `IO`, `List`, `State`, etc.
- `do` notation can also be used for applicatives (with `ApplicativeDo` extension)

**Further reading:**
- [Haskell Wiki - Do notation](https://wiki.haskell.org/Do_notation_considered_harmful)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
safeDivide : Int -> Int -> Maybe Int
safeDivide _ 0 = Nothing
safeDivide x y = Just (x `div` y)

-- do notation as Computation Expression
result : Maybe Int
result = do
    x <- Just 100
    y <- safeDivide x 5
    safeDivide y 2
-- Just 10

-- Equivalent to explicit >>= (bind):
-- Just 100 >>= (\x => safeDivide x 5 >>= (\y => safeDivide y 2))
```

**Special features:**
- `do` notation analogous to Haskell
- `<-` binds the result of a monadic computation
- Works with any type that implements the `Monad` interface
- Dependent types enable static verification of monadic computations

**Further reading:**
- [Idris 2 Documentation](https://idris2.readthedocs.io/en/latest/)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
// with syntax for callback-based chaining (similar to Gleam's use)
fun main()
  with x <- [1, 2, 3].foreach
  println(x.show)
// 1, 2, 3

// Effect Handler as Computation Expression
effect ctl raise(msg : string) : a

fun safe-divide(x : int, y : int) : raise int
  if y == 0 then raise("Division by zero") else x / y

fun compute() : maybe<int>
  with handler
    ctl raise(_) -> Nothing
    return(x)   -> Just(x)
  val x = safe-divide(100, 5)
  val z = safe-divide(x, 2)
  z
// Just(10)
```

**Special features:**
- `with` syntax provides callback chaining (similar to Gleam's `use`)
- Effect handlers with `with handler` enable monadic sequencing
- `return(x)` in the handler defines how the return value is transformed
- No separate computation expression builder needed – effects replace this pattern

**Further reading:**
- [Koka Language Guide - With Statement](https://koka-lang.github.io/koka/doc/book.html#sec-with)
- [Koka Language Guide - Effect Handlers](https://koka-lang.github.io/koka/doc/book.html#sec-handlers)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Arrow Library: either { } as Computation Expression
// Requires: Arrow Library
fun safeDivide(x: Int, y: Int): Either<String, Int> =
    if (y == 0) "Division by zero".left() else (x / y).right()

val result = either {
    val x = 100
    val y = safeDivide(x, 5).bind()
    safeDivide(y, 2).bind()
}
// Right(10)

val failed = either {
    val x = 100
    val y = safeDivide(x, 0).bind()
    safeDivide(y, 2).bind()
}
// Left("Division by zero")
```

**Special features:**
- Arrow Library provides `either { }`, `option { }`, `nullable { }` builders
- `.bind()` corresponds to monadic bind within the builder context
- Uses Kotlin coroutines under the hood for implementation
- Not in the standard library – requires Arrow dependency

**Further reading:**
- [Arrow Documentation - Typed Errors](https://arrow-kt.io/learn/typed-errors/working-with-typed-errors/)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
def safeDivide (x y : Int) : Option Int :=
  if y == 0 then none else some (x / y)

-- do notation as Computation Expression
def result : Option Int := do
  let x ← some 100
  let y ← safeDivide x 5
  safeDivide y 2
-- some 10

def failed : Option Int := do
  let x ← some 100
  let y ← safeDivide x 0
  safeDivide y 2
-- none

-- Equivalent to explicit >>= (bind):
-- some 100 >>= (fun x => safeDivide x 5 >>= (fun y => safeDivide y 2))
```

**Special features:**
- `do` notation is syntactic sugar for `>>=` (bind) chaining
- `←` binds the result of a monadic computation
- Works with any `Monad` instance: `Option`, `Except`, `IO`, `List`, `StateM`, etc.
- `let` without `←` for pure bindings within `do` blocks

**Further reading:**
- [Functional Programming in Lean – Do Notation](https://lean-lang.org/functional_programming_in_lean/monads/do.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
let safe_divide x y =
  if y = 0 then None else Some (x / y)

(* Binding operators as Computation Expression (since OCaml 4.08) *)
let ( let* ) = Option.bind
let ( let+ ) x f = Option.map f x

let result =
  let* x = Some 100 in
  let* y = safe_divide x 5 in
  safe_divide y 2
(* result = Some 10 *)

(* Equivalent to explicit bind:
   Option.bind (Some 100) (fun x ->
     Option.bind (safe_divide x 5) (fun y ->
       safe_divide y 2)) *)
```

**Special features:**
- `let*` for monadic bind, `let+` for functor map (since OCaml 4.08)
- `and*` and `and+` for applicative combinations
- Binding operators are defined per module and can be opened locally
- Works with any type for which the operators are defined

**Further reading:**
- [OCaml Manual - Binding Operators](https://v2.ocaml.org/manual/bindingops.html)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
safeDivide :: Int -> Int -> Maybe Int
safeDivide _ 0 = Nothing
safeDivide x y = Just (x / y)

-- do notation as Computation Expression
result :: Maybe Int
result = do
    x <- Just 100
    y <- safeDivide x 5
    safeDivide y 2
-- Just 10

-- ado notation for Applicatives
result2 :: Maybe Int
result2 = ado
    x <- Just 3
    y <- Just 5
    in x + y
-- Just 8
```

**Special features:**
- `do` notation for monadic computations (like Haskell)
- `ado` notation specifically for applicative computations
- `<-` binds the result of a monadic computation
- Works with any `Monad` or `Applicative` instance

**Further reading:**
- [PureScript - Do Notation](https://github.com/purescript/documentation/blob/master/language/Syntax.md#do-notation)

</TabItem>
<TabItem value="roc" label="Roc">

```roc
safeDivide = \x, y ->
    if y == 0 then Err DivByZero else Ok (x // y)

# Backpassing as Computation Expression
result =
    x <- Result.try (Ok 100)
    y <- Result.try (safeDivide x 5)
    safeDivide y 2
# Ok 10

# ! suffix for Task chaining
# main =
#     response = Http.get! "https://example.com"
#     Stdout.line! response
```

**Special features:**
- Backpassing syntax (`<-`) as syntactic sugar for callback-based functions
- `!` suffix as shorthand for `Task.await` in task chaining
- Works with any function that expects a callback as the last argument

**Further reading:**
- [Roc Language Tutorial](https://www.roc-lang.org/tutorial)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
fn safe_divide(x: i32, y: i32) -> Result<i32, String> {
    if y == 0 { Err("Division by zero".into()) } else { Ok(x / y) }
}

// ? operator as limited Computation Expression
fn compute() -> Result<i32, String> {
    let x = 100;
    let y = safe_divide(x, 5)?;
    let z = safe_divide(y, 2)?;
    Ok(z)
}
// Ok(10)

// Equivalent to explicit match:
// match safe_divide(x, 5) {
//     Ok(y) => match safe_divide(y, 2) {
//         Ok(z) => Ok(z),
//         Err(e) => Err(e),
//     },
//     Err(e) => Err(e),
// }
```

**Special features:**
- `?` operator provides syntactic sugar for `Result` and `Option` chaining
- Automatic early return on `Err`/`None`
- Limited to `Result` and `Option` – no general computation expression mechanism
- `From` trait enables automatic error type conversion with `?`

**Further reading:**
- [Rust Book - Recoverable Errors](https://doc.rust-lang.org/book/ch09-02-recoverable-errors-with-result.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
def safeDivide(x: Int, y: Int): Option[Int] =
  if y == 0 then None else Some(x / y)

// for comprehension as Computation Expression
val result = for {
  x <- Some(100)
  y <- safeDivide(x, 5)
  z <- safeDivide(y, 2)
} yield z
// Some(10)

val failed = for {
  x <- Some(100)
  y <- safeDivide(x, 0)
  z <- safeDivide(y, 2)
} yield z
// None

// Equivalent to explicit flatMap:
// Some(100).flatMap(x => safeDivide(x, 5).flatMap(y => safeDivide(y, 2)))
```

**Special features:**
- `for` comprehensions are syntactic sugar for `flatMap`/`map`/`withFilter`
- `<-` binds the result, `yield` produces the final result
- Works with any type that implements `flatMap` and `map`: `Option`, `Either`, `List`, `Future`, etc.
- Guards with `if` in `for` comprehensions for filtering

**Further reading:**
- [Scala Documentation - For Comprehensions](https://docs.scala-lang.org/tour/for-comprehensions.html)

</TabItem>
</Tabs>