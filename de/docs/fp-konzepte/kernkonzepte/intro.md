---
slug: /fp-konzepte/kernkonzepte
title: 9.1. Kernkonzepte
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 9.1. Kernkonzepte

Immutability, Monaden, Funktoren und Applicatives.

## 9.1.1. Immutability by Default

In einigen Programmiersprachen sind Variablen und Bindungen standardmäßig unveränderlich. Um Werte verändern zu können, muss explizit eine mutable-Deklaration verwendet werden. Dieses Prinzip fördert vorhersagbaren Code und reduziert Seiteneffekte.

### Sprachen {#sprachen}

<Tabs availableTabs={['carbon', 'clojure', 'elixir', 'elm', 'erlang', 'fsharp', 'gleam', 'haskell', 'idris', 'koka', 'kotlin', 'lean4', 'mercury', 'nim', 'ocaml', 'prolog', 'purescript', 'roc', 'rust', 'scala', 'swift', 'v', 'zig']} yellowTabs={['carbon', 'kotlin', 'nim', 'scala', 'swift', 'zig']}>
<TabItem value="carbon" label="Carbon">

```cpp
// let deklariert unveränderliche Bindungen
let name: String = "Welt";
// name = "Mars";  // Fehler: cannot assign to let binding

// var deklariert veränderliche Bindungen
var counter: i32 = 0;
counter = counter + 1;
```

**Besonderheiten:**
- `let` für unveränderliche und `var` für veränderliche Bindungen
- Beide sind gleichberechtigte Deklarationsformen
- Experimentelle Sprache, Syntax kann sich noch ändern

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Bindungen mit def/let sind unveränderlich
(def name "Welt")
;; name kann nicht neu zugewiesen werden

;; Datenstrukturen sind persistent und unveränderlich
(def items [1 2 3])
(def new-items (conj items 4))
;; items => [1 2 3]
;; new-items => [1 2 3 4]

;; Explizit veränderlicher Zustand nur über Referenztypen
(def counter (atom 0))
(swap! counter inc)   ;; @counter => 1
```

**Besonderheiten:**
- Alle Datenstrukturen (Vektoren, Maps, Sets, Listen) sind persistent und unveränderlich
- Veränderlicher Zustand nur über explizite Referenztypen: `atom`, `ref`, `agent`
- Persistente Datenstrukturen teilen Strukturen effizient (Structural Sharing)

**Weiterführende Links:**
- [Clojure - Values and Change](https://clojure.org/about/state)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Alle Datenstrukturen sind unveränderlich
items = [1, 2, 3]
new_items = [0 | items]
# items ist weiterhin [1, 2, 3]

# Rebinding ist erlaubt, ändert aber nicht die Daten
name = "Welt"
name = "Mars"   # Neues Binding, keine Mutation der alten Daten

# Maps sind ebenfalls unveränderlich
map = %{a: 1, b: 2}
new_map = Map.put(map, :c, 3)
# map ist weiterhin %{a: 1, b: 2}
```

**Besonderheiten:**
- Alle Datenstrukturen (Listen, Maps, Tuples) sind unveränderlich
- Variable Rebinding ist erlaubt, erzeugt aber eine neue Bindung statt Mutation
- Pin-Operator `^` verhindert Rebinding in Pattern Matching

**Weiterführende Links:**
- [Elixir - Basic Types](https://elixir-lang.org/getting-started/basic-types.html)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Alle Werte sind unveränderlich
name = "Welt"
-- name kann nicht verändert werden

items = [1, 2, 3]
newItems = 0 :: items
-- items bleibt [1, 2, 3]

-- Records sind ebenfalls unveränderlich
person = { name = "Alice", age = 30 }
olderPerson = { person | age = person.age + 1 }
-- person bleibt { name = "Alice", age = 30 }
```

**Besonderheiten:**
- Mutation existiert in Elm nicht – es gibt kein Sprachkonstrukt dafür
- Zustandsänderungen nur über The Elm Architecture (Model-Update-View)
- Rein funktional mit garantierter Seiteneffektfreiheit

**Weiterführende Links:**
- [Elm Guide - Core Language](https://guide.elm-lang.org/core_language)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% Single Assignment: Variablen können nur einmal gebunden werden
Name = "Welt",
% Name = "Mars"  % Fehler: Variable 'Name' ist bereits gebunden

Items = [1, 2, 3],
NewItems = [0 | Items],
% Items bleibt [1, 2, 3]

% Maps sind ebenfalls unveränderlich
Map = #{a => 1, b => 2},
NewMap = Map#{c => 3}.
% Map bleibt #{a => 1, b => 2}
```

**Besonderheiten:**
- Single Assignment: Jede Variable kann nur einmal gebunden werden
- Keine Möglichkeit, Variablen neu zuzuweisen
- Alle Datenstrukturen (Listen, Tuples, Maps) sind unveränderlich

**Weiterführende Links:**
- [Erlang Documentation - Data Types](https://www.erlang.org/doc/system/data_types)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// let-Bindungen sind standardmäßig unveränderlich
let name = "Welt"
// name <- "Mars"  // Fehler: 'name' ist nicht mutable

// Explizit veränderlich mit 'mutable'
let mutable counter = 0
counter <- counter + 1

// Unveränderliche Datenstrukturen
let items = [1; 2; 3]
let newItems = 0 :: items
// items bleibt [1; 2; 3]
```

**Besonderheiten:**
- `let`-Bindungen sind standardmäßig unveränderlich
- Explizite Kennzeichnung mit `let mutable` für veränderliche Bindungen
- Record-Typen sind standardmäßig unveränderlich

**Weiterführende Links:**
- [Microsoft F# Documentation - Values](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/values/)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// Alle Werte sind unveränderlich
let name = "Welt"
// name kann nicht neu zugewiesen werden

let items = [1, 2, 3]
let new_items = [0, ..items]
// items bleibt [1, 2, 3]
```

**Besonderheiten:**
- Alle Werte und Datenstrukturen sind unveränderlich
- Es gibt kein `mut`-Keyword oder ähnliches Konstrukt
- Unveränderlichkeit ist eine Garantie der Sprache

**Weiterführende Links:**
- [Gleam Language Tour - Variables](https://gleam.run/book/tour/variables)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Alle Werte sind unveränderlich
name = "Welt"
-- name kann nicht verändert werden

items = [1, 2, 3]
newItems = 0 : items
-- items bleibt [1, 2, 3]

-- Veränderliche Referenzen nur innerhalb der IO-Monade
-- ref <- newIORef 0
-- modifyIORef ref (+ 1)
```

**Besonderheiten:**
- Alle Werte sind unveränderlich – Mutation existiert nicht auf Sprachebene
- Rein funktionale Sprache mit referentieller Transparenz
- Veränderlicher Zustand nur über `IORef`, `STRef` oder `MVar` (kontrolliert durch das Typsystem)

**Weiterführende Links:**
- [Haskell Wiki - Functional Programming](https://wiki.haskell.org/Functional_programming)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Alle Werte sind unveränderlich
name : String
name = "Welt"
-- name kann nicht verändert werden

items : List Int
items = [1, 2, 3]
newItems : List Int
newItems = 0 :: items
-- items bleibt [1, 2, 3]
```

**Besonderheiten:**
- Alle Werte sind unveränderlich
- Rein funktionale Sprache mit abhängigen Typen
- Veränderlicher Zustand nur über lineare Typen oder die IO-Monade

**Weiterführende Links:**
- [Idris 2 Documentation](https://idris2.readthedocs.io/en/latest/)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
// Alle Werte sind standardmäßig unveränderlich
val name = "Welt"
// name = "Mars"  // Fehler: kann nicht zugewiesen werden

// var für veränderliche lokale Variablen
// (syntaktischer Zucker für einen lokalen State-Effekt)
fun count-up() : int
  var counter := 0
  counter := counter + 1
  counter := counter + 1
  counter  // 2

// Datenstrukturen sind unveränderlich
val items = [1, 2, 3]
val new-items = Cons(0, items)
// items bleibt [1, 2, 3]
```

**Besonderheiten:**
- Alle `val`-Bindungen sind unveränderlich
- `var` erzeugt veränderliche lokale Variablen (nur innerhalb von Funktionen)
- `var` ist syntaktischer Zucker für einen impliziten lokalen State-Effekt
- Alle Datenstrukturen (Listen, Bäume etc.) sind standardmäßig unveränderlich
- Koka nutzt Perceus Reference Counting für effiziente funktionale Updates (FBIP)

**Weiterführende Links:**
- [Koka Language Guide - Basics](https://koka-lang.github.io/koka/doc/book.html#sec-basics)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// val deklariert unveränderliche Bindungen
val name = "Welt"
// name = "Mars"  // Fehler: Val cannot be reassigned

// var deklariert veränderliche Bindungen
var counter = 0
counter += 1

// Unveränderliche vs. veränderliche Collections
val items = listOf(1, 2, 3)
val mutableItems = mutableListOf(1, 2, 3)
mutableItems.add(4)
```

**Besonderheiten:**
- `val` für unveränderliche und `var` für veränderliche Bindungen
- Beide sind gleichberechtigte Deklarationsformen, `val` wird idiomatisch bevorzugt
- Collection-API unterscheidet explizit zwischen `List` (unveränderlich) und `MutableList`

**Weiterführende Links:**
- [Kotlin Documentation - Properties](https://kotlinlang.org/docs/properties.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Alle Werte sind unveränderlich
def name : String := "Welt"
-- name kann nicht verändert werden

def items : List Nat := [1, 2, 3]
def newItems : List Nat := 0 :: items
-- items bleibt [1, 2, 3]

-- let-Bindungen in do-Blöcken sind ebenfalls unveränderlich
def example : IO Unit := do
  let x := 42
  -- x := 99  -- Fehler: let-Bindungen sind unveränderlich
  IO.println s!"{x}"
```

**Besonderheiten:**
- Lean 4 ist rein funktional: alle `def`- und `let`-Bindungen sind unveränderlich
- Veränderlicher Zustand nur über `IO.Ref`, `StateM` oder `ST`-Monade
- Datenstrukturen (`List`, `Array`) sind standardmäßig unveränderlich
- Compiler optimiert intern über Reference Counting und destruktive Updates

**Weiterführende Links:**
- [Functional Programming in Lean – Getting Started](https://lean-lang.org/functional_programming_in_lean/)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Single Assignment: Variablen können nur einmal gebunden werden
Name = "Welt",
% Name = "Mars"  % Fehler: Modus-Prüfung schlägt fehl

% Listen sind unveränderlich
Items = [1, 2, 3],
NewItems = [0 | Items],
% Items bleibt [1, 2, 3]

% Alle Datenstrukturen sind unveränderlich
:- type person ---> person(string, int).
Person = person("Alice", 30).
% Person kann nicht verändert werden
```

**Besonderheiten:**
- Single Assignment: Variablen können nur einmal gebunden werden (via Unifikation)
- Alle Datenstrukturen (Listen, Bäume, benutzerdefinierte Typen) sind unveränderlich
- Veränderlicher Zustand nur durch explizites State-Threading (z.B. `io.state` mit `!IO`)
- Das Modus-System prüft statisch, dass Variablen nicht mehrfach gebunden werden

**Weiterführende Links:**
- [Mercury Language Reference – Variables](https://www.mercurylang.org/information/doc-release/mercury_ref/Variables.html)
- [Mercury Language Reference – Modes](https://www.mercurylang.org/information/doc-release/mercury_ref/Modes.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# let deklariert unveränderliche Bindungen
let name = "Welt"
# name = "Mars"  # Fehler: cannot assign to let variable

# var deklariert veränderliche Bindungen
var counter = 0
counter += 1

# const für Compile-Time-Konstanten
const maxSize = 100
```

**Besonderheiten:**
- Drei Deklarationsformen: `let` (Laufzeit-unveränderlich), `var` (veränderlich), `const` (Compile-Time-Konstante)
- `let` und `var` sind gleichberechtigte Deklarationsformen
- Objekte und Sequenzen können je nach Bindung veränderlich oder unveränderlich sein

**Weiterführende Links:**
- [Nim Manual - let Statement](https://nim-lang.org/docs/manual.html#statements-and-expressions-let-statement)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* let-Bindungen sind standardmäßig unveränderlich *)
let name = "Welt"
(* name kann nicht neu zugewiesen werden *)

(* Explizit veränderlich mit ref *)
let counter = ref 0
let () = counter := !counter + 1

(* Unveränderliche Datenstrukturen *)
let items = [1; 2; 3]
let new_items = 0 :: items
(* items bleibt [1; 2; 3] *)
```

**Besonderheiten:**
- `let`-Bindungen sind standardmäßig unveränderlich
- Veränderliche Referenzen über `ref`, Zugriff mit `!`, Zuweisung mit `:=`
- Record-Felder sind standardmäßig unveränderlich, aber einzeln mit `mutable` kennzeichenbar

**Weiterführende Links:**
- [OCaml Manual - Values and Functions](https://ocaml.org/docs/values-and-functions)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Single Assignment: Variablen können nur einmal gebunden werden
Name = welt,
% Name = mars  % Fehler: Unifikation schlägt fehl (Name ist bereits gebunden)

% Listen sind unveränderlich
Items = [1, 2, 3],
NewItems = [0 | Items],
% Items bleibt [1, 2, 3]

% Terme (Strukturen) sind ebenfalls unveränderlich
Person = person(alice, 30).
% Person kann nicht verändert werden
```

**Besonderheiten:**
- Single Assignment: Logische Variablen können nur einmal gebunden werden (via Unifikation)
- `=` ist Unifikation, nicht Zuweisung – es gibt keinen Zuweisungsoperator
- Alle Datenstrukturen (Listen, Terme, Atome) sind unveränderlich
- Veränderlicher globaler Zustand nur über die Prolog-Datenbank (`assert`/`retract`)

**Weiterführende Links:**
- [SWI-Prolog Manual – Overview](https://www.swi-prolog.org/pldoc/man?section=overview)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Alle Werte sind unveränderlich
name = "Welt"
-- name kann nicht verändert werden

items = [1, 2, 3]
newItems = [0] <> items
-- items bleibt [1, 2, 3]
```

**Besonderheiten:**
- Alle Werte sind unveränderlich – Mutation existiert nicht auf Sprachebene
- Rein funktionale Sprache (inspiriert von Haskell)
- Veränderlicher Zustand nur über `Ref` im `Effect`-Kontext

**Weiterführende Links:**
- [PureScript Documentation](https://pursuit.purescript.org/)

</TabItem>
<TabItem value="roc" label="Roc">

```roc
# Alle Werte sind unveränderlich
name = "Welt"
# name kann nicht verändert werden

items = [1, 2, 3]
newItems = List.prepend items 0
# items bleibt [1, 2, 3]
```

**Besonderheiten:**
- Alle Werte sind unveränderlich
- Rein funktionale Sprache ohne Escape-Hatch für Mutation
- Compiler kann intern Mutationen als Optimierung durchführen (Uniqueness Types)

**Weiterführende Links:**
- [Roc Language Tutorial](https://www.roc-lang.org/tutorial)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// let-Bindungen sind standardmäßig unveränderlich
let name = "Welt";
// name = "Mars";  // Fehler: cannot assign twice to immutable variable

// Explizit veränderlich mit 'mut'
let mut counter = 0;
counter += 1;

// Auch Datenstrukturen benötigen 'mut' für Veränderung
let items = vec![1, 2, 3];
// items.push(4);  // Fehler: cannot borrow as mutable

let mut mutable_items = vec![1, 2, 3];
mutable_items.push(4);  // OK
```

**Besonderheiten:**
- `let`-Bindungen sind standardmäßig unveränderlich
- Explizite Kennzeichnung mit `let mut` für veränderliche Bindungen
- Das Borrow-System unterscheidet zwischen `&T` (unveränderliche Referenz) und `&mut T` (veränderliche Referenz)

**Weiterführende Links:**
- [Rust Book - Variables and Mutability](https://doc.rust-lang.org/book/ch03-01-variables-and-mutability.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// val deklariert unveränderliche Bindungen
val name = "Welt"
// name = "Mars"  // Fehler: reassignment to val

// var deklariert veränderliche Bindungen
var counter = 0
counter += 1

// Standard-Collections sind unveränderlich
val items = List(1, 2, 3)
val newItems = 0 :: items
// items bleibt List(1, 2, 3)
```

**Besonderheiten:**
- `val` für unveränderliche und `var` für veränderliche Bindungen
- `val` wird idiomatisch stark bevorzugt
- Standard-Collections (`List`, `Map`, `Set`) sind unveränderlich, veränderliche Varianten im `scala.collection.mutable`-Package

**Weiterführende Links:**
- [Scala Documentation - Basics](https://docs.scala-lang.org/tour/basics.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// let deklariert unveränderliche Bindungen
let name = "Welt"
// name = "Mars"  // Fehler: cannot assign to value: 'name' is a 'let' constant

// var deklariert veränderliche Bindungen
var counter = 0
counter += 1

// Value Types sind bei let-Bindung komplett unveränderlich
let items = [1, 2, 3]
// items.append(4)  // Fehler: cannot use mutating member on immutable value

var mutableItems = [1, 2, 3]
mutableItems.append(4)  // OK
```

**Besonderheiten:**
- `let` für unveränderliche und `var` für veränderliche Bindungen
- Beide sind gleichberechtigte Deklarationsformen
- Value Types (Structs, Enums, Arrays) sind bei `let`-Bindung komplett unveränderlich
- Copy-on-Write-Semantik optimiert unveränderliche Werttypen

**Weiterführende Links:**
- [Swift Documentation - Constants and Variables](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/thebasics/#Constants-and-Variables)

</TabItem>
<TabItem value="v" label="V">

```v
// Variablen sind standardmäßig unveränderlich
name := "Welt"
// name = "Mars"  // Fehler: cannot assign to immutable variable

// Explizit veränderlich mit 'mut'
mut counter := 0
counter += 1

// Arrays sind standardmäßig unveränderlich
items := [1, 2, 3]
// items << 4  // Fehler: cannot modify immutable array

mut mutable_items := [1, 2, 3]
mutable_items << 4  // OK
```

**Besonderheiten:**
- Variablen sind standardmäßig unveränderlich
- Explizite Kennzeichnung mit `mut` für veränderliche Variablen
- Structs und Arrays sind ebenfalls standardmäßig unveränderlich

**Weiterführende Links:**
- [V Documentation - Variables](https://docs.vlang.io/#variables)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// const deklariert unveränderliche Bindungen
const name = "Welt";
// name = "Mars";  // Fehler: cannot assign to constant

// var deklariert veränderliche Bindungen
var counter: i32 = 0;
counter += 1;
```

**Besonderheiten:**
- `const` für unveränderliche und `var` für veränderliche Bindungen
- Beide sind gleichberechtigte Deklarationsformen, `const` wird idiomatisch bevorzugt
- `const` erzwingt auch Unveränderlichkeit bei Pointern und Slices

**Weiterführende Links:**
- [Zig Documentation - Variables](https://ziglang.org/documentation/master/#Variables)

</TabItem>
</Tabs>

## 9.1.2. Monaden

Monaden sind ein Entwurfsmuster aus der Kategorientheorie, das in der funktionalen Programmierung zur Verkettung von Berechnungen mit Kontext (Fehler, Optionalität, Seiteneffekte) verwendet wird. Die zentrale Operation `bind` (`>>=`, `flatMap`, `andThen`) erlaubt es, das Ergebnis einer kontextbehafteten Berechnung an die nächste weiterzureichen.

### Sprachen {#sprachen}

<Tabs availableTabs={['clojure', 'csharp', 'elm', 'fsharp', 'gleam', 'haskell', 'idris', 'java', 'javascript', 'kotlin', 'lean4', 'ocaml', 'purescript', 'roc', 'rust', 'scala', 'swift', 'typescript']} yellowTabs={['clojure', 'elm', 'fsharp', 'gleam', 'koka', 'kotlin', 'ocaml', 'roc', 'rust', 'scala']} orangeTabs={['csharp', 'java', 'javascript', 'swift', 'typescript']}>
<TabItem value="clojure" label="Clojure">

```clojure
(defn safe-divide [x y]
  (if (zero? y) nil (quot x y)))

;; Monadische Verkettung mit some-> (nil-safe Threading)
(def result
  (some-> 100
    (safe-divide 5)
    (safe-divide 2)))
;; => 10

(def failed
  (some-> 100
    (safe-divide 0)
    (safe-divide 2)))
;; => nil (Kette bricht bei nil ab)
```

**Besonderheiten:**
- Kein formales Monad-Typklassen-System (dynamisch typisiert)
- `some->` und `some->>` bieten nil-safe Threading (analog zu Maybe-Monade)
- Monadische Muster über Higher-Order-Funktionen und Threading-Makros

**Weiterführende Links:**
- [Clojure Documentation - Threading Macros](https://clojure.org/guides/threading_macros)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
int? SafeDivide(int x, int y) =>
    y == 0 ? null : x / y;

// Monadische Verkettung über LINQ SelectMany (= flatMap/bind)
var result = from x in (int?)100
             from y in SafeDivide(x, 5)
             from z in SafeDivide(y, 2)
             select z;
// result = 10

// Nullable-Verkettung mit ?.
int? failed = SafeDivide(100, 0)?.Let(x => SafeDivide(x, 2));
// failed = null
```

**Besonderheiten:**
- LINQ's `SelectMany` entspricht dem monadischen `bind`
- Nullable-Typen (`int?`) mit `?.`-Operator bieten Maybe-Monade-ähnliches Verhalten
- `Task<T>` verhält sich monadisch mit `async`/`await`

**Weiterführende Links:**
- [Microsoft C# Documentation - LINQ](https://learn.microsoft.com/en-us/dotnet/csharp/linq/)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
safeDivide : Int -> Int -> Maybe Int
safeDivide x y =
    if y == 0 then Nothing else Just (x // y)

-- Monadische Verkettung mit andThen
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

**Besonderheiten:**
- `Maybe.andThen` und `Result.andThen` sind die monadischen Bind-Operationen
- Bewusst kein allgemeines `Monad`-Typklassen-System (Designentscheidung)
- Monaden werden über spezifische Typen statt abstrakte Typklassen verwendet

**Weiterführende Links:**
- [Elm Package - Maybe](https://package.elm-lang.org/packages/elm/core/latest/Maybe)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
let safeDivide x y =
    if y = 0 then None else Some (x / y)

// Monadische Verkettung mit Option.bind
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

**Besonderheiten:**
- `Option.bind` und `Result.bind` sind die monadischen Bind-Operationen
- Pipe-Operator `|>` ermöglicht elegante Verkettung
- Kein allgemeines Monad-Typklassen-System, aber Computation Expressions bieten monadische Syntax

**Weiterführende Links:**
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

// Monadische Verkettung mit result.try
let result =
  result.try(Ok(100), fn(x) {
    result.try(safe_divide(x, 5), fn(y) {
      safe_divide(y, 2)
    })
  })
// Ok(10)
```

**Besonderheiten:**
- `result.try` ist die monadische Bind-Operation für `Result`
- Kein allgemeines Monad-Typklassen-System
- `use`-Ausdruck bietet syntaktischen Zucker für monadische Verkettung

**Weiterführende Links:**
- [Gleam Standard Library - result](https://hexdocs.pm/gleam_stdlib/gleam/result.html)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
safeDivide :: Int -> Int -> Maybe Int
safeDivide _ 0 = Nothing
safeDivide x y = Just (x `div` y)

-- Monadische Verkettung mit >>= (bind)
result = Just 100 >>= (\x -> safeDivide x 5) >>= (\y -> safeDivide y 2)
-- Just 10

failed = Just 100 >>= (\x -> safeDivide x 0) >>= (\y -> safeDivide y 2)
-- Nothing

-- Monad-Typklasse definiert: >>= (bind), return, >>
-- class Monad m where
--     (>>=)  :: m a -> (a -> m b) -> m b
--     return :: a -> m a
```

**Besonderheiten:**
- Formale `Monad`-Typklasse mit `>>=` (bind) und `return`
- Zahlreiche Monad-Instanzen: `Maybe`, `Either`, `IO`, `List`, `State`, `Reader`, `Writer`
- `do`-Notation bietet imperativen Syntaxzucker für monadischen Code

**Weiterführende Links:**
- [Haskell Wiki - Monad](https://wiki.haskell.org/Monad)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
safeDivide : Int -> Int -> Maybe Int
safeDivide _ 0 = Nothing
safeDivide x y = Just (y `div` x)

-- Monadische Verkettung mit >>= (bind)
result : Maybe Int
result = Just 100 >>= (\x => safeDivide x 5) >>= (\y => safeDivide y 2)
-- Just 10

failed : Maybe Int
failed = Just 100 >>= (\x => safeDivide x 0) >>= (\y => safeDivide y 2)
-- Nothing
```

**Besonderheiten:**
- Formales `Monad`-Interface mit `>>=` (bind) und `pure`
- Abhängige Typen erlauben Beweise über monadische Berechnungen
- `do`-Notation analog zu Haskell

**Weiterführende Links:**
- [Idris 2 Documentation - Interfaces](https://idris2.readthedocs.io/en/latest/tutorial/interfaces.html)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
// Koka bevorzugt algebraische Effekte statt Monaden.
// Monadische Muster existieren über map/flatmap auf Containertypen.

fun safe-divide(x : int, y : int) : maybe<int>
  if y == 0 then Nothing else Just(x / y)

// Monadische Verkettung über Pattern Matching
fun compute() : maybe<int>
  match safe-divide(100, 5)
    Just(y) -> safe-divide(y, 2)
    Nothing -> Nothing
// Just(10)

// Kokas bevorzugter Ansatz: Direkte Verkettung mit Effekten
effect ctl raise(msg : string) : a

fun safe-div(x : int, y : int) : raise int
  if y == 0 then raise("Division durch Null") else x / y

fun compute-eff() : raise int
  val x = safe-div(100, 5)
  safe-div(x, 2)
// 10 – kein monadisches Wrapping nötig
```

**Besonderheiten:**
- Kein formales `Monad`-Typklassen-System
- `map` und Pattern Matching auf `maybe` und `list` für monadische Verkettung
- Koka bevorzugt algebraische Effekte statt Monaden für Seiteneffekte
- Effekte ermöglichen direkte Verkettung ohne monadisches Wrapping

**Weiterführende Links:**
- [Koka Language Guide - Effects](https://koka-lang.github.io/koka/doc/book.html#sec-effect-types)
- [Koka Standard Library](https://koka-lang.github.io/koka/doc/std_core.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Optional.flatMap (seit Java 8)
OptionalInt safeDivide(int x, int y) {
    return y == 0 ? OptionalInt.empty() : OptionalInt.of(x / y);
}

Optional<Integer> result = Optional.of(100)
    .flatMap(x -> safeDivide(x, 5).stream().boxed().findFirst())
    .flatMap(y -> safeDivide(y, 2).stream().boxed().findFirst());
// Optional[10]

// Stream.flatMap als Listenmonade
List<Integer> items = List.of(1, 2, 3);
List<Integer> result2 = items.stream()
    .flatMap(x -> x > 1 ? Stream.of(x, x * 10) : Stream.empty())
    .toList();
// [2, 20, 3, 30]
```

**Besonderheiten:**
- `Optional.flatMap()` und `Stream.flatMap()` sind monadische Bind-Operationen (seit Java 8)
- Kein allgemeines Monad-Interface in der Standardbibliothek
- Libraries wie Vavr bieten umfassendere monadische Typen

**Weiterführende Links:**
- [Oracle Java Documentation - Optional](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Optional.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
function safeDivide(x, y) {
    return y === 0 ? Promise.reject("Division by zero") : Promise.resolve(x / y);
}

// Promise.then als monadisches Bind
const result = Promise.resolve(100)
    .then(x => safeDivide(x, 5))
    .then(y => safeDivide(y, 2));
// Promise { 10 }

// Array.flatMap als Listenmonade (seit ES2019)
const items = [1, 2, 3];
const mapped = items.flatMap(x => x > 1 ? [x, x * 10] : []);
// [2, 20, 3, 30]
```

**Besonderheiten:**
- `Promise.then()` entspricht dem monadischen Bind für asynchrone Berechnungen
- `Array.flatMap()` entspricht dem monadischen Bind für Listen (seit ES2019)
- Kein allgemeines Monad-Konzept in der Sprache

**Weiterführende Links:**
- [MDN - Promise.prototype.then()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
fun safeDivide(x: Int, y: Int): Int? =
    if (y == 0) null else x / y

// Monadische Verkettung mit ?.let (Nullable-Monade)
val result = safeDivide(100, 5)?.let { safeDivide(it, 2) }
// 10

val failed = safeDivide(100, 0)?.let { safeDivide(it, 2) }
// null

// Mit Arrow-Library: Either-Monade
// val result = either {
//     val x = safeDivide(100, 5).bind()
//     val y = safeDivide(x, 2).bind()
//     y
// }
```

**Besonderheiten:**
- `?.let` bietet monadisches Bind für Nullable-Typen
- Arrow-Library bietet umfassende monadische Typen (`Either`, `Option`, `Validated`)
- `Result`-Typ mit `fold`, `map`, `flatMap` in der Standardbibliothek

**Weiterführende Links:**
- [Kotlin Documentation - Null Safety](https://kotlinlang.org/docs/null-safety.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
def safeDivide (x y : Int) : Option Int :=
  if y == 0 then none else some (x / y)

-- Monadische Verkettung mit >>= (bind)
def result : Option Int :=
  some 100 >>= (fun x => safeDivide x 5) >>= (fun y => safeDivide y 2)
-- some 10

def failed : Option Int :=
  some 100 >>= (fun x => safeDivide x 0) >>= (fun y => safeDivide y 2)
-- none
```

**Besonderheiten:**
- Formale `Monad`-Typklasse mit `bind` (`>>=`) und `pure`
- Zahlreiche Monad-Instanzen: `Option`, `Except`, `IO`, `List`, `StateM`, `ReaderM`
- `do`-Notation bietet imperativen Syntaxzucker für monadischen Code
- Abhängige Typen ermöglichen Beweise über monadische Berechnungen

**Weiterführende Links:**
- [Functional Programming in Lean – Monads](https://lean-lang.org/functional_programming_in_lean/monads.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
let safe_divide x y =
  if y = 0 then None else Some (x / y)

(* Monadische Verkettung mit Option.bind *)
let result =
  Option.bind (Some 100) (fun x ->
    Option.bind (safe_divide x 5) (fun y ->
      safe_divide y 2))
(* result = Some 10 *)

(* Mit let*-Syntax (seit OCaml 4.08) *)
let ( let* ) = Option.bind
let result =
  let* x = Some 100 in
  let* y = safe_divide x 5 in
  safe_divide y 2
(* result = Some 10 *)
```

**Besonderheiten:**
- `Option.bind` und `Result.bind` sind die monadischen Bind-Operationen
- Binding-Operatoren (`let*`, `and*`) seit OCaml 4.08 als syntaktischer Zucker
- Kein allgemeines Monad-Typklassen-System, aber Module und Funktoren ermöglichen generische Abstraktionen

**Weiterführende Links:**
- [OCaml Manual - Binding Operators](https://v2.ocaml.org/manual/bindingops.html)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
safeDivide :: Int -> Int -> Maybe Int
safeDivide _ 0 = Nothing
safeDivide x y = Just (x / y)

-- Monadische Verkettung mit >>= (bind)
result = Just 100 >>= (\x -> safeDivide x 5) >>= (\y -> safeDivide y 2)
-- Just 10

failed = Just 100 >>= (\x -> safeDivide x 0) >>= (\y -> safeDivide y 2)
-- Nothing
```

**Besonderheiten:**
- Formale `Monad`-Typklasse mit `bind` (`>>=`) und `pure`
- Zahlreiche Monad-Instanzen: `Maybe`, `Either`, `Effect`, `Aff`, `Array`
- `do`-Notation bietet imperativen Syntaxzucker für monadischen Code

**Weiterführende Links:**
- [PureScript - Monad](https://pursuit.purescript.org/packages/purescript-prelude/docs/Control.Monad)

</TabItem>
<TabItem value="roc" label="Roc">

```roc
safeDivide = \x, y ->
    if y == 0 then Err DivByZero else Ok (x // y)

# Monadische Verkettung mit Result.try
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

**Besonderheiten:**
- `Result.try` und `Task.await` sind die monadischen Bind-Operationen
- `!`-Suffix als syntaktischer Zucker für `Task.await`
- Kein allgemeines Monad-Typklassen-System

**Weiterführende Links:**
- [Roc Language Tutorial](https://www.roc-lang.org/tutorial)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
fn safe_divide(x: i32, y: i32) -> Option<i32> {
    if y == 0 { None } else { Some(x / y) }
}

// Monadische Verkettung mit and_then (= bind/flatMap)
let result = Some(100)
    .and_then(|x| safe_divide(x, 5))
    .and_then(|y| safe_divide(y, 2));
// Some(10)

let failed = Some(100)
    .and_then(|x| safe_divide(x, 0))
    .and_then(|y| safe_divide(y, 2));
// None
```

**Besonderheiten:**
- `and_then` ist die monadische Bind-Operation für `Option` und `Result`
- `?`-Operator bietet syntaktischen Zucker für `Result`/`Option`-Verkettung in Funktionen
- Kein allgemeines `Monad`-Trait in der Standardbibliothek

**Weiterführende Links:**
- [Rust Documentation - Option::and_then](https://doc.rust-lang.org/std/option/enum.Option.html#method.and_then)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
def safeDivide(x: Int, y: Int): Option[Int] =
  if y == 0 then None else Some(x / y)

// Monadische Verkettung mit flatMap
val result = Some(100)
  .flatMap(x => safeDivide(x, 5))
  .flatMap(y => safeDivide(y, 2))
// Some(10)

val failed = Some(100)
  .flatMap(x => safeDivide(x, 0))
  .flatMap(y => safeDivide(y, 2))
// None
```

**Besonderheiten:**
- `flatMap` ist die monadische Bind-Operation für `Option`, `Either`, `List`, `Future`
- `for`-Comprehensions bieten syntaktischen Zucker für monadische Verkettung
- Cats-Library bietet formale `Monad`-Typklasse

**Weiterführende Links:**
- [Scala Documentation - Option](https://www.scala-lang.org/api/current/scala/Option.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
func safeDivide(_ x: Int, _ y: Int) -> Int? {
    y == 0 ? nil : x / y
}

// Monadische Verkettung mit flatMap
let result = Optional(100)
    .flatMap { safeDivide($0, 5) }
    .flatMap { safeDivide($0, 2) }
// Optional(10)

let failed = Optional(100)
    .flatMap { safeDivide($0, 0) }
    .flatMap { safeDivide($0, 2) }
// nil
```

**Besonderheiten:**
- `flatMap` auf `Optional`, `Array` und `Result` (seit Swift 5.0)
- Optional Chaining (`?.`) als implizite monadische Verkettung
- Kein allgemeines Monad-Protokoll in der Standardbibliothek

**Weiterführende Links:**
- [Swift Documentation - Optional](https://developer.apple.com/documentation/swift/optional)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
function safeDivide(x: number, y: number): Promise<number> {
    return y === 0 ? Promise.reject("Division by zero") : Promise.resolve(x / y);
}

// Promise.then als monadisches Bind
const result = Promise.resolve(100)
    .then(x => safeDivide(x, 5))
    .then(y => safeDivide(y, 2));
// Promise { 10 }

// Array.flatMap als Listenmonade
const items = [1, 2, 3];
const mapped = items.flatMap(x => x > 1 ? [x, x * 10] : []);
// [2, 20, 3, 30]
```

**Besonderheiten:**
- `Promise.then()` entspricht dem monadischen Bind für asynchrone Berechnungen
- `Array.flatMap()` entspricht dem monadischen Bind für Listen
- Libraries wie fp-ts bieten vollständige monadische Typen mit Typunterstützung

**Weiterführende Links:**
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/)

</TabItem>
</Tabs>

## 9.1.3. Funktoren / Applicatives

Funktoren sind Typen, auf deren eingepackte Werte eine Funktion angewendet werden kann, ohne sie auszupacken (`map`/`fmap`). Applicatives erweitern Funktoren um die Fähigkeit, mehrere eingepackte Werte mit einer Funktion zu kombinieren (`apply`/`<*>`/`liftA2`).

### Sprachen {#sprachen}

<Tabs availableTabs={['clojure', 'csharp', 'elm', 'fsharp', 'gleam', 'haskell', 'idris', 'java', 'javascript', 'kotlin', 'lean4', 'ocaml', 'purescript', 'roc', 'rust', 'scala', 'swift', 'typescript']} yellowTabs={['clojure', 'elm', 'fsharp', 'gleam', 'koka', 'kotlin', 'ocaml', 'roc', 'rust', 'scala']} orangeTabs={['csharp', 'java', 'javascript', 'swift', 'typescript']}>
<TabItem value="clojure" label="Clojure">

```clojure
;; Funktor: fmap-ähnlich mit map
(def items [1 2 3])
(def doubled (mapv #(* 2 %) items))
;; => [2 4 6]

;; Funktor auf nil-safe Werte
(defn fmap [f x]
  (when (some? x) (f x)))

(fmap #(* 2 %) 5)    ;; => 10
(fmap #(* 2 %) nil)   ;; => nil

;; Applicative-ähnlich: Mehrere optionale Werte kombinieren
(defn lift-a2 [f a b]
  (when (and (some? a) (some? b))
    (f a b)))

(lift-a2 + 3 5)      ;; => 8
(lift-a2 + 3 nil)     ;; => nil
```

**Besonderheiten:**
- Kein formales Funktor/Applicative-Typklassen-System (dynamisch typisiert)
- Funktor-Muster über `map`, `mapv` und Higher-Order-Funktionen
- Applicative-Muster manuell über Hilfsfunktionen oder Libraries

**Weiterführende Links:**
- [Clojure Documentation - Sequences](https://clojure.org/reference/sequences)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Funktor: Select (= map) über LINQ
var items = new List<int> { 1, 2, 3 };
var doubled = items.Select(x => x * 2).ToList();
// [2, 4, 6]

// Funktor auf Nullable
int? value = 5;
int? result = value.HasValue ? value.Value * 2 : null;
// 10

// Applicative-ähnlich: Mehrere Nullable-Werte kombinieren
int? a = 3;
int? b = 5;
int? sum = (a.HasValue && b.HasValue) ? a.Value + b.Value : null;
// 8
```

**Besonderheiten:**
- LINQ `Select` entspricht dem Funktor-`map`
- Kein allgemeines Funktor- oder Applicative-Interface
- Nullable-Typen und LINQ bieten eingeschränkte Funktor-Semantik

**Weiterführende Links:**
- [Microsoft C# Documentation - LINQ Select](https://learn.microsoft.com/en-us/dotnet/api/system.linq.enumerable.select)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Funktor: map auf Maybe
Maybe.map (\x -> x * 2) (Just 5)     -- Just 10
Maybe.map (\x -> x * 2) Nothing      -- Nothing

-- Funktor: map auf List
List.map (\x -> x * 2) [1, 2, 3]     -- [2, 4, 6]

-- Applicative: map2 kombiniert zwei Maybe-Werte
Maybe.map2 (+) (Just 3) (Just 5)     -- Just 8
Maybe.map2 (+) (Just 3) Nothing      -- Nothing

-- Applicative: map3 für drei Werte
Maybe.map3 (\a b c -> a + b + c) (Just 1) (Just 2) (Just 3)
-- Just 6
```

**Besonderheiten:**
- `Maybe.map`, `Result.map`, `List.map` als Funktor-Operationen
- `Maybe.map2` bis `Maybe.map5` als Applicative-Operationen
- Kein allgemeines Funktor/Applicative-Typklassen-System (Designentscheidung)

**Weiterführende Links:**
- [Elm Package - Maybe](https://package.elm-lang.org/packages/elm/core/latest/Maybe)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Funktor: Option.map
Option.map (fun x -> x * 2) (Some 5)     // Some 10
Option.map (fun x -> x * 2) None          // None

// Funktor: List.map
List.map (fun x -> x * 2) [1; 2; 3]      // [2; 4; 6]

// Applicative-ähnlich: Mehrere Options kombinieren
let liftA2 f a b =
    match a, b with
    | Some x, Some y -> Some (f x y)
    | _ -> None

liftA2 (+) (Some 3) (Some 5)     // Some 8
liftA2 (+) (Some 3) None          // None
```

**Besonderheiten:**
- `Option.map`, `Result.map`, `List.map` als Funktor-Operationen
- Kein eingebautes Applicative-Pattern, aber über Hilfsfunktionen oder `and!` in Computation Expressions realisierbar
- Pipe-Operator `|>` ermöglicht elegante Funktor-Verkettung

**Weiterführende Links:**
- [Microsoft F# Documentation - Option Module](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/options)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// Funktor: result.map
result.map(Ok(5), fn(x) { x * 2 })        // Ok(10)
result.map(Error(Nil), fn(x) { x * 2 })   // Error(Nil)

// Funktor: list.map
list.map([1, 2, 3], fn(x) { x * 2 })      // [2, 4, 6]

// Applicative-ähnlich: Mehrere Results kombinieren
let a = Ok(3)
let b = Ok(5)
case a, b {
  Ok(x), Ok(y) -> Ok(x + y)
  _, _ -> Error(Nil)
}
// Ok(8)
```

**Besonderheiten:**
- `result.map`, `option.map`, `list.map` als Funktor-Operationen
- Kein allgemeines Funktor/Applicative-Typklassen-System
- Pattern Matching als Alternative für Applicative-Kombinationen

**Weiterführende Links:**
- [Gleam Standard Library - result](https://hexdocs.pm/gleam_stdlib/gleam/result.html)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Funktor: fmap (= <$>) wendet Funktion auf Wert im Kontext an
fmap (* 2) (Just 5)           -- Just 10
fmap (* 2) Nothing            -- Nothing
fmap (* 2) [1, 2, 3]          -- [2, 4, 6]

-- Applicative: <*> wendet eingepackte Funktion auf eingepackten Wert an
Just (+ 3) <*> Just 5         -- Just 8
Just (+ 3) <*> Nothing        -- Nothing

-- Applicative: liftA2 kombiniert zwei Werte im Kontext
liftA2 (+) (Just 3) (Just 5)  -- Just 8
liftA2 (+) (Just 3) Nothing   -- Nothing

-- Functor-Typklasse: fmap :: (a -> b) -> f a -> f b
-- Applicative-Typklasse: pure :: a -> f a
--                        (<*>) :: f (a -> b) -> f a -> f b
```

**Besonderheiten:**
- Formale `Functor`-Typklasse mit `fmap` und `<$>`
- Formale `Applicative`-Typklasse mit `pure` und `<*>`
- Hierarchie: `Functor` → `Applicative` → `Monad`
- Zahlreiche Instanzen: `Maybe`, `Either`, `List`, `IO`, `Parser`, etc.

**Weiterführende Links:**
- [Haskell Wiki - Functor](https://wiki.haskell.org/Functor)
- [Haskell Wiki - Applicative Functor](https://wiki.haskell.org/Applicative_functor)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Funktor: map wendet Funktion auf Wert im Kontext an
map (* 2) (Just 5)            -- Just 10
map (* 2) Nothing             -- Nothing
map (* 2) [1, 2, 3]           -- [2, 4, 6]

-- Applicative: <*> wendet eingepackte Funktion auf eingepackten Wert an
Just (+ 3) <*> Just 5         -- Just 8
Just (+ 3) <*> Nothing        -- Nothing

-- Applicative: liftA2 kombiniert zwei Werte im Kontext
liftA2 (+) (Just 3) (Just 5)  -- Just 8
liftA2 (+) (Just 3) Nothing   -- Nothing
```

**Besonderheiten:**
- Formales `Functor`-Interface mit `map`
- Formales `Applicative`-Interface mit `pure` und `<*>`
- Abhängige Typen erlauben zusätzliche Beweise über Funktor-/Applicative-Gesetze

**Weiterführende Links:**
- [Idris 2 Documentation - Interfaces](https://idris2.readthedocs.io/en/latest/tutorial/interfaces.html)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
// Funktor: map auf Maybe
Just(5).map(fn(x) x * 2)           // Just(10)
Nothing.map(fn(x : int) x * 2)     // Nothing

// Funktor: map auf List
[1, 2, 3].map(fn(x) x * 2)        // [2, 4, 6]

// Applicative-ähnlich: Mehrere Maybe-Werte kombinieren
fun lift-a2(f : (a, b) -> c, ma : maybe<a>, mb : maybe<b>) : maybe<c>
  match (ma, mb)
    (Just(a), Just(b)) -> Just(f(a, b))
    _                  -> Nothing

lift-a2(fn(a, b) a + b, Just(3), Just(5))  // Just(8)
lift-a2(fn(a, b) a + b, Just(3), Nothing)  // Nothing
```

**Besonderheiten:**
- `map` auf `maybe`, `list` und `either` als Funktor-Operationen
- Kein allgemeines Funktor/Applicative-Typklassen-System
- Applicative-Muster über Hilfsfunktionen realisierbar
- Koka bevorzugt Effekte statt abstrakter Typklassen-Hierarchien

**Weiterführende Links:**
- [Koka Standard Library - maybe](https://koka-lang.github.io/koka/doc/std_core_maybe.html)
- [Koka Standard Library - list](https://koka-lang.github.io/koka/doc/std_core_list.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Funktor: Optional.map (seit Java 8)
Optional.of(5).map(x -> x * 2);           // Optional[10]
Optional.<Integer>empty().map(x -> x * 2); // Optional.empty()

// Funktor: Stream.map
List.of(1, 2, 3).stream()
    .map(x -> x * 2)
    .toList();                             // [2, 4, 6]

// Applicative-ähnlich: Manuelles Kombinieren
Optional<Integer> a = Optional.of(3);
Optional<Integer> b = Optional.of(5);
Optional<Integer> sum = a.flatMap(x -> b.map(y -> x + y));
// Optional[8]
```

**Besonderheiten:**
- `Optional.map()` und `Stream.map()` als Funktor-Operationen (seit Java 8)
- Kein allgemeines Funktor- oder Applicative-Interface
- Applicative-Muster nur über Umwege mit `flatMap` + `map`

**Weiterführende Links:**
- [Oracle Java Documentation - Optional](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Optional.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Funktor: Array.map
const doubled = [1, 2, 3].map(x => x * 2);
// [2, 4, 6]

// Funktor: Promise.then (map-Semantik bei nicht-Promise-Rückgabe)
const result = Promise.resolve(5).then(x => x * 2);
// Promise { 10 }

// Applicative-ähnlich: Mehrere Promises kombinieren
const a = Promise.resolve(3);
const b = Promise.resolve(5);
const sum = Promise.all([a, b]).then(([x, y]) => x + y);
// Promise { 8 }
```

**Besonderheiten:**
- `Array.map()` und `Promise.then()` als Funktor-Operationen
- `Promise.all()` bietet eingeschränkte Applicative-Semantik
- Kein allgemeines Funktor/Applicative-Konzept in der Sprache

**Weiterführende Links:**
- [MDN - Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Funktor: map auf Collections
val doubled = listOf(1, 2, 3).map { it * 2 }
// [2, 4, 6]

// Funktor: map auf Nullable (mit ?.let)
val value: Int? = 5
val result = value?.let { it * 2 }
// 10

// Applicative-ähnlich: Mehrere Nullable-Werte kombinieren
val a: Int? = 3
val b: Int? = 5
val sum = if (a != null && b != null) a + b else null
// 8

// Mit Arrow: Formale Funktor/Applicative-Abstraktionen
// val result = Option(3).zip(Option(5)).map { (a, b) -> a + b }
```

**Besonderheiten:**
- `map` auf Collections, Sequences und Result als Funktor-Operation
- `?.let` als Funktor-`map` für Nullable-Typen
- Arrow-Library bietet formale `Functor`- und `Applicative`-Typklassen

**Weiterführende Links:**
- [Kotlin Documentation - Collection Transformations](https://kotlinlang.org/docs/collection-transformations.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Funktor: Functor.map (= <$>) wendet Funktion auf Wert im Kontext an
Functor.map (· * 2) (some 5)          -- some 10
Functor.map (· * 2) (none : Option Nat) -- none
Functor.map (· * 2) [1, 2, 3]         -- [2, 4, 6]

-- Applicative: Seq.seq (= <*>) wendet eingepackte Funktion an
some (· + 3) <*> some 5               -- some 8
some (· + 3) <*> (none : Option Nat)  -- none

-- Applicative: liftA2 kombiniert zwei Werte im Kontext
-- (manuell, da kein eingebautes liftA2)
def liftA2 (f : α → β → γ) (a : Option α) (b : Option β) : Option γ :=
  f <$> a <*> b

liftA2 (· + ·) (some 3) (some 5)     -- some 8
liftA2 (· + ·) (some 3) none         -- none
```

**Besonderheiten:**
- Formale `Functor`-Typklasse mit `map` und `<$>`
- Formale `Applicative`-Typklasse mit `pure` und `<*>` (über `Seq`)
- Hierarchie: `Functor` → `Applicative` → `Monad`
- Zahlreiche Instanzen: `Option`, `Except`, `List`, `IO`, etc.

**Weiterführende Links:**
- [Lean 4 – Typeclasses](https://lean-lang.org/functional_programming_in_lean/type-classes.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Funktor: Option.map *)
Option.map (fun x -> x * 2) (Some 5)      (* Some 10 *)
Option.map (fun x -> x * 2) None           (* None *)

(* Funktor: List.map *)
List.map (fun x -> x * 2) [1; 2; 3]       (* [2; 4; 6] *)

(* Applicative mit let+/and+ Operatoren (seit OCaml 4.08) *)
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

**Besonderheiten:**
- `Option.map`, `Result.map`, `List.map` als Funktor-Operationen
- `let+` und `and+` Operatoren als Applicative-Syntax (seit OCaml 4.08)
- Module und Funktoren ermöglichen generische Funktor-Abstraktionen

**Weiterführende Links:**
- [OCaml Manual - Binding Operators](https://v2.ocaml.org/manual/bindingops.html)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Funktor: map (= <$>) wendet Funktion auf Wert im Kontext an
map (_ * 2) (Just 5)           -- Just 10
map (_ * 2) Nothing            -- Nothing
map (_ * 2) [1, 2, 3]          -- [2, 4, 6]

-- Applicative: apply (= <*>)
Just (_ + 3) <*> Just 5        -- Just 8
Just (_ + 3) <*> Nothing       -- Nothing

-- Applicative: lift2 kombiniert zwei Werte im Kontext
lift2 (+) (Just 3) (Just 5)    -- Just 8
lift2 (+) (Just 3) Nothing     -- Nothing
```

**Besonderheiten:**
- Formale `Functor`-Typklasse mit `map` und `<$>`
- Formale `Applicative`-Typklasse mit `pure` und `<*>`
- Hierarchie wie in Haskell: `Functor` → `Apply` → `Applicative` → `Bind` → `Monad`

**Weiterführende Links:**
- [PureScript - Functor](https://pursuit.purescript.org/packages/purescript-prelude/docs/Data.Functor)

</TabItem>
<TabItem value="roc" label="Roc">

```roc
# Funktor: Result.map
Result.map (Ok 5) \x -> x * 2       # Ok 10
Result.map (Err NotFound) \x -> x * 2  # Err NotFound

# Funktor: List.map
List.map [1, 2, 3] \x -> x * 2      # [2, 4, 6]

# Applicative-ähnlich: Mehrere Results kombinieren
a = Ok 3
b = Ok 5
result =
    Result.try a \x ->
    Result.map b \y -> x + y
# Ok 8
```

**Besonderheiten:**
- `Result.map`, `List.map` als Funktor-Operationen
- Kein allgemeines Funktor/Applicative-Typklassen-System
- Applicative-Muster über `Result.try` + `Result.map` Kombination

**Weiterführende Links:**
- [Roc Language Tutorial](https://www.roc-lang.org/tutorial)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Funktor: Option::map
Some(5).map(|x| x * 2);           // Some(10)
None::<i32>.map(|x| x * 2);       // None

// Funktor: Iterator::map
let doubled: Vec<i32> = vec![1, 2, 3].iter().map(|x| x * 2).collect();
// [2, 4, 6]

// Applicative-ähnlich: Option::zip + map
let a = Some(3);
let b = Some(5);
let sum = a.zip(b).map(|(x, y)| x + y);
// Some(8)

let failed = a.zip(None::<i32>).map(|(x, y)| x + y);
// None
```

**Besonderheiten:**
- `Option::map`, `Result::map`, `Iterator::map` als Funktor-Operationen
- `Option::zip` kombiniert zwei Options (seit Rust 1.46)
- Kein allgemeines `Functor`- oder `Applicative`-Trait in der Standardbibliothek

**Weiterführende Links:**
- [Rust Documentation - Option::map](https://doc.rust-lang.org/std/option/enum.Option.html#method.map)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Funktor: map auf Option
Some(5).map(_ * 2)             // Some(10)
None.map((x: Int) => x * 2)   // None

// Funktor: map auf List
List(1, 2, 3).map(_ * 2)      // List(2, 4, 6)

// Applicative: for-Comprehension für mehrere Werte
val result = for {
  a <- Some(3)
  b <- Some(5)
} yield a + b
// Some(8)

// Mit Cats: Formale Applicative
// import cats.syntax.all._
// (Option(3), Option(5)).mapN(_ + _)  // Some(8)
```

**Besonderheiten:**
- `map` auf `Option`, `Either`, `List`, `Future` als Funktor-Operationen
- `for`-Comprehensions bieten Applicative-/Monad-ähnliche Syntax
- Cats-Library bietet formale `Functor`- und `Applicative`-Typklassen mit `mapN`

**Weiterführende Links:**
- [Scala Documentation - Option](https://www.scala-lang.org/api/current/scala/Option.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Funktor: map auf Optional
let value: Int? = 5
let doubled = value.map { $0 * 2 }        // Optional(10)
let nothing: Int? = nil
let result = nothing.map { $0 * 2 }       // nil

// Funktor: map auf Array
let items = [1, 2, 3].map { $0 * 2 }      // [2, 4, 6]

// Applicative-ähnlich: Mehrere Optionals kombinieren
let a: Int? = 3
let b: Int? = 5
let sum: Int? = a.flatMap { x in b.map { y in x + y } }
// Optional(8)
```

**Besonderheiten:**
- `map` auf `Optional`, `Array`, `Result` als Funktor-Operationen
- Kein allgemeines Funktor- oder Applicative-Protokoll in der Standardbibliothek
- Applicative-Muster über `flatMap` + `map` Kombination

**Weiterführende Links:**
- [Swift Documentation - Optional](https://developer.apple.com/documentation/swift/optional)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Funktor: Array.map
const doubled = [1, 2, 3].map(x => x * 2);
// [2, 4, 6]

// Funktor: Promise.then (map-Semantik bei nicht-Promise-Rückgabe)
const result = Promise.resolve(5).then(x => x * 2);
// Promise { 10 }

// Applicative-ähnlich: Mehrere Promises kombinieren
const a = Promise.resolve(3);
const b = Promise.resolve(5);
const sum = Promise.all([a, b]).then(([x, y]) => x + y);
// Promise { 8 }
```

**Besonderheiten:**
- `Array.map()` und `Promise.then()` als Funktor-Operationen
- `Promise.all()` bietet eingeschränkte Applicative-Semantik
- Libraries wie fp-ts bieten formale Funktor/Applicative-Abstraktionen mit voller Typunterstützung

**Weiterführende Links:**
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/)

</TabItem>
</Tabs>

## 9.1.4. Computation Expressions

Syntaktische Konstrukte, die das sequentielle Verketten monadischer Operationen vereinfachen und monadischen Code wie imperativen Code lesbar machen. In F# als Computation Expressions, in Haskell als `do`-Notation und in Scala als `for`-Comprehensions bekannt.

### Sprachen {#sprachen}

<Tabs availableTabs={['csharp', 'fsharp', 'gleam', 'haskell', 'idris', 'kotlin', 'lean4', 'ocaml', 'purescript', 'roc', 'rust', 'scala']} yellowTabs={['csharp', 'koka', 'kotlin', 'rust']}>
<TabItem value="csharp" label="C#">

```csharp
// LINQ Query Syntax als Computation Expression
int? SafeDivide(int x, int y) =>
    y == 0 ? null : x / y;

// LINQ query expressions (monadische Syntax)
var result = from x in (int?)100
             from y in SafeDivide(x, 5)
             from z in SafeDivide(y, 2)
             select z;
// result = 10

// Entspricht explizitem SelectMany (= bind):
// ((int?)100)
//   .SelectMany(x => SafeDivide(x, 5),
//     (x, y) => SafeDivide(y, 2))
```

**Besonderheiten:**
- LINQ Query Syntax bietet monadischen Syntaxzucker über `from`/`select`
- `SelectMany` entspricht dem monadischen Bind
- Funktioniert mit jedem Typ, der `SelectMany` implementiert (nicht nur Collections)

**Weiterführende Links:**
- [Microsoft C# Documentation - Query Expressions](https://learn.microsoft.com/en-us/dotnet/csharp/linq/get-started/query-expression-basics)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
let safeDivide x y =
    if y = 0 then None else Some (x / y)

// Computation Expression Builder definieren
type OptionBuilder() =
    member _.Bind(x, f) = Option.bind f x
    member _.Return(x) = Some x
    member _.ReturnFrom(x) = x

let option = OptionBuilder()

// Computation Expression verwenden
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

**Besonderheiten:**
- Computation Expressions sind benutzerdefinierte Kontrollfluss-Konstrukte
- `let!` bindet monadisch, `return` packt Werte ein, `return!` gibt direkt zurück
- Zahlreiche eingebaute Builder: `async { }`, `task { }`, `seq { }`, `query { }`
- Eigene Builder können für beliebige Monaden erstellt werden
- `and!` ermöglicht Applicative-Semantik (seit F# 6.0)

**Weiterführende Links:**
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

// use-Ausdruck als Computation Expression
let result = {
  use x <- result.try(Ok(100))
  use y <- result.try(safe_divide(x, 5))
  safe_divide(y, 2)
}
// Ok(10)

// Entspricht explizitem Bind:
// result.try(Ok(100), fn(x) {
//   result.try(safe_divide(x, 5), fn(y) {
//     safe_divide(y, 2)
//   })
// })
```

**Besonderheiten:**
- `use`-Ausdruck bietet syntaktischen Zucker für Callback-basierte Funktionen
- Funktioniert mit jeder Funktion, die einen Callback als letztes Argument erwartet
- Nicht auf Monaden beschränkt – auch für Resource-Management und andere Muster nutzbar

**Weiterführende Links:**
- [Gleam Language Tour - Use](https://gleam.run/book/tour/use)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
safeDivide :: Int -> Int -> Maybe Int
safeDivide _ 0 = Nothing
safeDivide x y = Just (x `div` y)

-- do-Notation als Computation Expression
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

-- Entspricht explizitem >>= (bind):
-- Just 100 >>= (\x -> safeDivide x 5 >>= (\y -> safeDivide y 2))
```

**Besonderheiten:**
- `do`-Notation ist syntaktischer Zucker für `>>=` (bind)-Verkettungen
- `<-` bindet das Ergebnis einer monadischen Berechnung
- Funktioniert mit jeder `Monad`-Instanz: `Maybe`, `Either`, `IO`, `List`, `State`, etc.
- `do`-Notation kann auch für Applicatives verwendet werden (mit `ApplicativeDo`-Erweiterung)

**Weiterführende Links:**
- [Haskell Wiki - Do notation](https://wiki.haskell.org/Do_notation_considered_harmful)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
safeDivide : Int -> Int -> Maybe Int
safeDivide _ 0 = Nothing
safeDivide x y = Just (x `div` y)

-- do-Notation als Computation Expression
result : Maybe Int
result = do
    x <- Just 100
    y <- safeDivide x 5
    safeDivide y 2
-- Just 10

-- Entspricht explizitem >>= (bind):
-- Just 100 >>= (\x => safeDivide x 5 >>= (\y => safeDivide y 2))
```

**Besonderheiten:**
- `do`-Notation analog zu Haskell
- `<-` bindet das Ergebnis einer monadischen Berechnung
- Funktioniert mit jedem Typ, der das `Monad`-Interface implementiert
- Abhängige Typen ermöglichen statische Verifikation monadischer Berechnungen

**Weiterführende Links:**
- [Idris 2 Documentation](https://idris2.readthedocs.io/en/latest/)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
// with-Syntax für Callback-basierte Verkettung (ähnlich Gleams use)
fun main()
  with x <- [1, 2, 3].foreach
  println(x.show)
// 1, 2, 3

// Effect Handler als Computation Expression
effect ctl raise(msg : string) : a

fun safe-divide(x : int, y : int) : raise int
  if y == 0 then raise("Division durch Null") else x / y

fun compute() : maybe<int>
  with handler
    ctl raise(_) -> Nothing
    return(x)   -> Just(x)
  val x = safe-divide(100, 5)
  val z = safe-divide(x, 2)
  z
// Just(10)
```

**Besonderheiten:**
- `with`-Syntax bietet Callback-Verkettung (ähnlich Gleams `use`)
- Effect Handler mit `with handler` ermöglichen monadische Sequenzierung
- `return(x)` im Handler definiert, wie der Rückgabewert transformiert wird
- Kein separater Computation-Expression-Builder nötig – Effekte ersetzen dieses Muster

**Weiterführende Links:**
- [Koka Language Guide - With Statement](https://koka-lang.github.io/koka/doc/book.html#sec-with)
- [Koka Language Guide - Effect Handlers](https://koka-lang.github.io/koka/doc/book.html#sec-handlers)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Arrow-Library: either { } als Computation Expression
// Benötigt: Arrow-Library
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

**Besonderheiten:**
- Arrow-Library bietet `either { }`, `option { }`, `nullable { }` Builder
- `.bind()` entspricht dem monadischen Bind innerhalb des Builder-Kontexts
- Nutzt Kotlin-Coroutinen unter der Haube für die Implementierung
- Nicht in der Standardbibliothek – erfordert Arrow-Dependency

**Weiterführende Links:**
- [Arrow Documentation - Typed Errors](https://arrow-kt.io/learn/typed-errors/working-with-typed-errors/)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
def safeDivide (x y : Int) : Option Int :=
  if y == 0 then none else some (x / y)

-- do-Notation als Computation Expression
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

-- Entspricht explizitem >>= (bind):
-- some 100 >>= (fun x => safeDivide x 5 >>= (fun y => safeDivide y 2))
```

**Besonderheiten:**
- `do`-Notation ist syntaktischer Zucker für `>>=` (bind)-Verkettungen
- `←` bindet das Ergebnis einer monadischen Berechnung
- Funktioniert mit jeder `Monad`-Instanz: `Option`, `Except`, `IO`, `List`, `StateM`, etc.
- `let` ohne `←` für reine Bindungen innerhalb von `do`-Blöcken

**Weiterführende Links:**
- [Functional Programming in Lean – Do Notation](https://lean-lang.org/functional_programming_in_lean/monads/do.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
let safe_divide x y =
  if y = 0 then None else Some (x / y)

(* Binding-Operatoren als Computation Expression (seit OCaml 4.08) *)
let ( let* ) = Option.bind
let ( let+ ) x f = Option.map f x

let result =
  let* x = Some 100 in
  let* y = safe_divide x 5 in
  safe_divide y 2
(* result = Some 10 *)

(* Entspricht explizitem bind:
   Option.bind (Some 100) (fun x ->
     Option.bind (safe_divide x 5) (fun y ->
       safe_divide y 2)) *)
```

**Besonderheiten:**
- `let*` für monadisches Bind, `let+` für Funktor-Map (seit OCaml 4.08)
- `and*` und `and+` für Applicative-Kombinationen
- Binding-Operatoren werden per Modul definiert und können lokal geöffnet werden
- Funktioniert mit jedem Typ, für den die Operatoren definiert sind

**Weiterführende Links:**
- [OCaml Manual - Binding Operators](https://v2.ocaml.org/manual/bindingops.html)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
safeDivide :: Int -> Int -> Maybe Int
safeDivide _ 0 = Nothing
safeDivide x y = Just (x / y)

-- do-Notation als Computation Expression
result :: Maybe Int
result = do
    x <- Just 100
    y <- safeDivide x 5
    safeDivide y 2
-- Just 10

-- ado-Notation für Applicatives
result2 :: Maybe Int
result2 = ado
    x <- Just 3
    y <- Just 5
    in x + y
-- Just 8
```

**Besonderheiten:**
- `do`-Notation für monadische Berechnungen (wie Haskell)
- `ado`-Notation speziell für Applicative-Berechnungen
- `<-` bindet das Ergebnis einer monadischen Berechnung
- Funktioniert mit jeder `Monad`- bzw. `Applicative`-Instanz

**Weiterführende Links:**
- [PureScript - Do Notation](https://github.com/purescript/documentation/blob/master/language/Syntax.md#do-notation)

</TabItem>
<TabItem value="roc" label="Roc">

```roc
safeDivide = \x, y ->
    if y == 0 then Err DivByZero else Ok (x // y)

# Backpassing als Computation Expression
result =
    x <- Result.try (Ok 100)
    y <- Result.try (safeDivide x 5)
    safeDivide y 2
# Ok 10

# !-Suffix für Task-Verkettung
# main =
#     response = Http.get! "https://example.com"
#     Stdout.line! response
```

**Besonderheiten:**
- Backpassing-Syntax (`<-`) als syntaktischer Zucker für Callback-basierte Funktionen
- `!`-Suffix als Kurzform für `Task.await` bei Task-Verkettungen
- Funktioniert mit jeder Funktion, die einen Callback als letztes Argument erwartet

**Weiterführende Links:**
- [Roc Language Tutorial](https://www.roc-lang.org/tutorial)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
fn safe_divide(x: i32, y: i32) -> Result<i32, String> {
    if y == 0 { Err("Division by zero".into()) } else { Ok(x / y) }
}

// ?-Operator als eingeschränkte Computation Expression
fn compute() -> Result<i32, String> {
    let x = 100;
    let y = safe_divide(x, 5)?;
    let z = safe_divide(y, 2)?;
    Ok(z)
}
// Ok(10)

// Entspricht explizitem match:
// match safe_divide(x, 5) {
//     Ok(y) => match safe_divide(y, 2) {
//         Ok(z) => Ok(z),
//         Err(e) => Err(e),
//     },
//     Err(e) => Err(e),
// }
```

**Besonderheiten:**
- `?`-Operator bietet syntaktischen Zucker für `Result`- und `Option`-Verkettung
- Automatisches Early-Return bei `Err`/`None`
- Beschränkt auf `Result` und `Option` – kein allgemeiner Computation-Expression-Mechanismus
- `From`-Trait ermöglicht automatische Fehlertyp-Konvertierung mit `?`

**Weiterführende Links:**
- [Rust Book - Recoverable Errors](https://doc.rust-lang.org/book/ch09-02-recoverable-errors-with-result.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
def safeDivide(x: Int, y: Int): Option[Int] =
  if y == 0 then None else Some(x / y)

// for-Comprehension als Computation Expression
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

// Entspricht explizitem flatMap:
// Some(100).flatMap(x => safeDivide(x, 5).flatMap(y => safeDivide(y, 2)))
```

**Besonderheiten:**
- `for`-Comprehensions sind syntaktischer Zucker für `flatMap`/`map`/`withFilter`
- `<-` bindet das Ergebnis, `yield` erzeugt das Endergebnis
- Funktioniert mit jedem Typ, der `flatMap` und `map` implementiert: `Option`, `Either`, `List`, `Future`, etc.
- Guards mit `if` in `for`-Comprehensions für Filterung

**Weiterführende Links:**
- [Scala Documentation - For Comprehensions](https://docs.scala-lang.org/tour/for-comprehensions.html)

</TabItem>
</Tabs>