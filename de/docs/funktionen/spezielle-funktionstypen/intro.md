---
slug: /funktionen/spezielle-funktionstypen
title: 7.3. Spezielle Funktionstypen
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 7.3. Spezielle Funktionstypen

Spezielle Arten von Funktionen wie Generatoren und Coroutines.

## 7.3.1. Pure Functions

Funktionen, die keine Seiteneffekte haben und für gleiche Eingaben immer die gleiche Ausgabe liefern. Sie hängen nur von ihren Parametern ab und modifizieren keine globalen Variablen oder Zustände. Ermöglichen es, Code vorhersehbarer und testbarer zu gestalten.

### Sprachen {#sprachen}

<Tabs availableTabs={['clojure', 'd', 'elixir', 'elm', 'erlang', 'fortran', 'fsharp', 'gleam', 'haskell', 'idris', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'mercury', 'nim', 'ocaml', 'prolog', 'purescript', 'python', 'racket', 'roc', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'wolfram-language']}>
<TabItem value="clojure" label="Clojure">

```clojure
(defn add [a b]
  (+ a b))

(def result (add 5 3))
```

**Besonderheiten:**
- Funktionale Sprache, die Pure Functions fördert
- Immutability ist Standard
- Funktionen sind standardmäßig pure, es sei denn, sie verwenden `atom`, `ref`, etc.

**Weiterführende Links:**
- [Clojure Documentation - Functions](https://clojure.org/reference/functions)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
def add(a, b) do
    a + b
end

result = add(5, 3)
```

**Besonderheiten:**
- Funktionale Sprache, die Pure Functions fördert
- Immutability ist Standard
- Funktionen sind standardmäßig pure, es sei denn, sie verwenden Prozesse oder ETS

**Weiterführende Links:**
- [Elixir Documentation - Functions](https://elixir-lang.org/getting-started/basic-types.html#functions)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
add : Int -> Int -> Int
add a b = a + b

result = add 5 3
```

**Besonderheiten:**
- Funktionale Sprache, die Pure Functions erzwingt
- Alle Funktionen sind pure
- Keine Seiteneffekte möglich

**Weiterführende Links:**
- [Elm Documentation - Functions](https://guide.elm-lang.org/core_language.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
add(A, B) ->
    A + B.

Result = add(5, 3).
```

**Besonderheiten:**
- Funktionale Sprache, die Pure Functions fördert
- Immutability ist Standard
- Funktionen sind standardmäßig pure, es sei denn, sie verwenden Prozesse oder ETS

**Weiterführende Links:**
- [Erlang Documentation - Functions](https://www.erlang.org/doc/reference_manual/functions.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
let add a b = a + b

let result = add 5 3
```

**Besonderheiten:**
- Funktionale Sprache, die Pure Functions fördert
- Immutability ist Standard
- Funktionen sind standardmäßig pure, es sei denn, sie verwenden `mutable` oder `ref`

**Weiterführende Links:**
- [F# Documentation - Functions](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/functions/)

</TabItem>
<TabItem value="gleam" label="Gleam">

```erlang
fn add(a: Int, b: Int) -> Int {
  a + b
}

let result = add(5, 3)
```

**Besonderheiten:**
- Funktionale Sprache, die Pure Functions fördert
- Immutability ist Standard
- Funktionen sind standardmäßig pure

**Weiterführende Links:**
- [Gleam Documentation - Functions](https://gleam.run/documentation/tour/functions/)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
add :: Int -> Int -> Int
add a b = a + b

result = add 5 3
```

**Besonderheiten:**
- Funktionale Sprache, die Pure Functions erzwingt
- Alle Funktionen sind pure
- Seiteneffekte werden über Monads behandelt

**Weiterführende Links:**
- [Haskell Documentation - Functions](https://www.haskell.org/tutorial/functions.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
add : Int -> Int -> Int
add a b = a + b

result : Int
result = add 5 3
```

**Besonderheiten:**
- Funktionale Sprache, die Pure Functions erzwingt
- Alle Funktionen sind pure
- Seiteneffekte werden über Effekte behandelt

**Weiterführende Links:**
- [Idris Documentation - Functions](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
function add(a, b) {
    return a + b;
}

const result = add(5, 3);
```

**Besonderheiten:**
- Unterstützt Pure Functions, erzwingt sie aber nicht
- Funktionen können pure sein, müssen es aber nicht
- Seiteneffekte sind möglich

**Weiterführende Links:**
- [MDN Web Docs - Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
function add(a::Int, b::Int)::Int
    return a + b
end

result = add(5, 3)
```

**Besonderheiten:**
- Unterstützt Pure Functions, erzwingt sie aber nicht
- Funktionen können pure sein, müssen es aber nicht
- Seiteneffekte sind möglich

**Weiterführende Links:**
- [Julia Documentation - Functions](https://docs.julialang.org/en/v1/manual/functions/)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Pure Functions (keine Effekte im Typ)
fun add(a: int, b: int): int
  a + b  // Keine Seiteneffekte

fun factorial(n: int): int
  if n <= 1 then 1
  else n * factorial(n - 1)

val result = add(5, 3) // 8

// Der Typ `(int, int) -> int` hat KEINEN Effekt
// Das garantiert Reinheit zur Compile-Zeit
```

**Besonderheiten:**
- Koka's Effektsystem trackt Reinheit explizit im Typsystem
- Eine Funktion ohne Effekt-Annotation (z.B. `(int) -> int`) ist garantiert pure
- Der Compiler erzwingt, dass pure Funktionen keine Seiteneffekte haben
- Dies geht über Haskell hinaus: Koka unterscheidet verschiedene Effektarten (IO, Exceptions, State etc.)

**Weiterführende Links:**
- [Koka Language Guide - Effects](https://koka-lang.github.io/koka/doc/book.html#sec-effects)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
fun add(a: Int, b: Int): Int {
    return a + b
}

val result = add(5, 3)
```

**Besonderheiten:**
- Unterstützt Pure Functions, erzwingt sie aber nicht
- Funktionen können pure sein, müssen es aber nicht
- Seiteneffekte sind möglich

**Weiterführende Links:**
- [Kotlin Documentation - Functions](https://kotlinlang.org/docs/functions.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```haskell
-- Pure Function (standardmäßig in Lean 4)
def add (a : Nat) (b : Nat) : Nat :=
  a + b

def factorial : Nat → Nat
  | 0 => 1
  | n + 1 => (n + 1) * factorial n

#eval add 5 3       -- 8
#eval factorial 5    -- 120
```

**Besonderheiten:**
- Lean 4 ist standardmäßig pure – alle Funktionen ohne `IO`-Monad sind garantiert seiteneffektfrei
- Seiteneffekte werden ausschließlich über die `IO`-Monad behandelt
- Der Compiler erzwingt Reinheit: Funktionen ohne `IO`-Typ können keine Seiteneffekte haben
- Termination Checker stellt sicher, dass rekursive Funktionen terminieren

**Weiterführende Links:**
- [Lean 4 Documentation - Defining Functions](https://lean-lang.org/lean4/doc/functions.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Pure Functions (Standard in Mercury)
% Mercury ist eine rein deklarative Sprache – alle Funktionen sind standardmäßig pure.

:- func add(int, int) = int.
add(A, B) = A + B.

:- func factorial(int) = int.
factorial(N) =
    ( if N =< 1 then 1
      else N * factorial(N - 1)
    ).

% Pure Prädikate (keine Seiteneffekte)
:- pred append(list(T)::in, list(T)::in, list(T)::out) is det.
append([], L, L).
append([H|T], L, [H|R]) :-
    append(T, L, R).

% I/O wird über State-Threading gehandhabt, nicht über Seiteneffekte
:- pred main(io::di, io::uo) is det.
main(!IO) :-
    Result = add(5, 3),
    io.format("add(5, 3) = %d\n", [i(Result)], !IO).
```

**Besonderheiten:**
- Mercury ist eine rein deklarative Sprache – alle Funktionen und Prädikate sind standardmäßig pure.
- Seiteneffekte (z.B. I/O) werden nicht über impure Funktionen, sondern über State-Threading mit dem `io`-Typ gehandhabt (`io::di, io::uo`).
- Der Compiler garantiert Reinheit zur Compile-Zeit.
- Pure Funktionen können vom Compiler aggressiv optimiert werden (Inlining, Reordering, etc.).
- Mercury geht über Haskell hinaus, da es Reinheit mit dem Modus- und Determinismus-System kombiniert.

**Weiterführende Links:**
- [Mercury Language Reference - Purity](https://www.mercurylang.org/information/doc-release/mercury_ref/Purity.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
let add a b = a + b

let result = add 5 3
```

**Besonderheiten:**
- Funktionale Sprache, die Pure Functions fördert
- Immutability ist Standard
- Funktionen sind standardmäßig pure, es sei denn, sie verwenden `ref` oder `mutable`

**Weiterführende Links:**
- [OCaml Documentation - Functions](https://ocaml.org/docs/first-hour)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Pure Prädikate: keine Seiteneffekte, determiniert durch Eingabe
add(A, B, Result) :-
    Result is A + B.

?- add(5, 3, Result).
%  Result = 8

% Reines Listen-Append
my_append([], L, L).
my_append([H|T], L, [H|R]) :-
    my_append(T, L, R).

?- my_append([1, 2], [3, 4], Result).
%  Result = [1, 2, 3, 4]
```

**Besonderheiten:**
- Prolog fördert "pure" logische Programmierung, bei der Prädikate nur durch Unifikation und logische Operationen definiert werden
- Reine Prädikate sind referenziell transparent — sie liefern für gleiche Eingaben immer die gleichen Ergebnisse
- SWI-Prolog bietet `library(clpfd)` und `library(reif)` für rein deklarative Programmierung
- Keine explizite Annotation nötig — Reinheit ergibt sich durch das Vermeiden von Seiteneffekten (`write`, `assert`, `retract`, etc.)

**Weiterführende Links:**
- [SWI-Prolog Documentation - Pure I/O](https://www.swi-prolog.org/pldoc/man?section=pio)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
add :: Int -> Int -> Int
add a b = a + b

result = add 5 3
```

**Besonderheiten:**
- Funktionale Sprache, die Pure Functions erzwingt
- Alle Funktionen sind pure
- Seiteneffekte werden über Monads behandelt

**Weiterführende Links:**
- [PureScript Documentation - Functions](https://book.purescript.org/chapter3.html)

</TabItem>
<TabItem value="python" label="Python">

```python
def add(a, b):
    return a + b

result = add(5, 3)
```

**Besonderheiten:**
- Unterstützt Pure Functions, erzwingt sie aber nicht
- Funktionen können pure sein, müssen es aber nicht
- Seiteneffekte sind möglich

**Weiterführende Links:**
- [Python Documentation - Functions](https://docs.python.org/3/tutorial/controlflow.html#defining-functions)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
(define (add a b)
  (+ a b))

(define result (add 5 3))
```

**Besonderheiten:**
- Funktionale Sprache, die Pure Functions fördert
- Immutability ist Standard
- Funktionen sind standardmäßig pure, es sei denn, sie verwenden `set!` oder Mutation

**Weiterführende Links:**
- [Racket Documentation - Functions](https://docs.racket-lang.org/guide/define.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
fn add(a: i32, b: i32) -> i32 {
    a + b
}

let result = add(5, 3);
```

**Besonderheiten:**
- Unterstützt Pure Functions, erzwingt sie aber nicht
- Funktionen können pure sein, müssen es aber nicht
- Seiteneffekte sind möglich, aber Ownership-System fördert Immutability

**Weiterführende Links:**
- [Rust Book - Functions](https://doc.rust-lang.org/book/ch03-03-how-functions-work.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
def add(a: Int, b: Int): Int = {
    a + b
}

val result = add(5, 3)
```

**Besonderheiten:**
- Unterstützt Pure Functions, erzwingt sie aber nicht
- Funktionen können pure sein, müssen es aber nicht
- Seiteneffekte sind möglich, aber Immutability wird gefördert

**Weiterführende Links:**
- [Scala Documentation - Functions](https://docs.scala-lang.org/tour/basics.html#functions)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
(define (add a b)
  (+ a b))

(define result (add 5 3))
```

**Besonderheiten:**
- Funktionale Sprache, die Pure Functions fördert
- Immutability ist Standard
- Funktionen sind standardmäßig pure, es sei denn, sie verwenden `set!` oder Mutation

**Weiterführende Links:**
- [Scheme Documentation - Functions](https://www.scheme.com/tspl4/start.html#./start:h0)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
func add(_ a: Int, _ b: Int) -> Int {
    return a + b
}

let result = add(5, 3)
```

**Besonderheiten:**
- Unterstützt Pure Functions, erzwingt sie aber nicht
- Funktionen können pure sein, müssen es aber nicht
- Seiteneffekte sind möglich

**Weiterführende Links:**
- [Swift Documentation - Functions](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/functions/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
function add(a: number, b: number): number {
    return a + b;
}

const result = add(5, 3);
```

**Besonderheiten:**
- Unterstützt Pure Functions, erzwingt sie aber nicht
- Funktionen können pure sein, müssen es aber nicht
- Seiteneffekte sind möglich

**Weiterführende Links:**
- [TypeScript Handbook - Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html)

</TabItem>
<TabItem value="d" label="D">

```d
// Pure Functions
pure int add(int a, int b) {
    return a + b;
}

pure int factorial(int n) {
    return n <= 1 ? 1 : n * factorial(n - 1);
}

// Pure Funktionen können keine globalen veränderlichen Zustände lesen/schreiben
int globalVar = 10;
// pure int bad() { return globalVar; }  // Fehler: kann nicht auf mutable global zugreifen
```

**Besonderheiten:**
- `pure` Attribut garantiert: keine Seiteneffekte, kein Zugriff auf mutable globalen Zustand
- Pure Funktionen können zur Compile-Zeit ausgewertet werden (CTFE)
- Ergebnis hängt nur von den Parametern ab
- `immutable`-Parameter sind implizit in pure Funktionen erlaubt

**Weiterführende Links:**
- [D Language Specification - Function Attributes](https://dlang.org/spec/function.html#pure-functions)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Pure Functions mit PURE-Keyword
pure function add(a, b) result(res)
    integer, intent(in) :: a, b
    integer :: res
    res = a + b
end function add
```

**Besonderheiten:**
- `PURE`-Keyword garantiert keine Seiteneffekte
- Pure Functions dürfen keine globalen Variablen ändern
- Können in `FORALL` und `DO CONCURRENT` verwendet werden
- Compiler kann Pure Functions besser optimieren

**Weiterführende Links:**
- [Fortran Wiki - Pure procedures](https://fortranwiki.org/fortran/show/Pure+procedures)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Pure Functions mit func (seit Nim 1.0)
func add(a, b: int): int =
  a + b

func factorial(n: int): int =
  if n <= 1: 1
  else: n * factorial(n - 1)

# Äquivalent zu:
# proc add(a, b: int): int {.noSideEffect.} = a + b

echo add(3, 4)       # 7
echo factorial(5)     # 120
```

**Besonderheiten:**
- `func` ist Kurzform für `proc` mit `{.noSideEffect.}` Pragma
- Compiler prüft, dass keine Side Effects vorhanden sind
- Kann keine globalen Variablen modifizieren oder I/O durchführen

**Weiterführende Links:**
- [Nim Documentation - Func](https://nim-lang.org/docs/manual.html#procedures-func)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Pure Functions: Standardmäßig sind alle Funktionen rein
add : I64, I64 -> I64
add = \a, b -> a + b

-- Keine Side Effects erlaubt in reinen Funktionen
-- I/O wird durch das Platform-Konzept gehandhabt
```

**Besonderheiten:**
- Alle Funktionen sind standardmäßig rein (pure)
- Keine Side Effects in reinen Funktionen
- I/O wird durch das Platform/Task-System gehandhabt

**Weiterführende Links:**
- [Roc Documentation](https://www.roc-lang.org/tutorial)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Pure Function (keine Seiteneffekte) *)
square = Function[x, x^2];
square[5]  (* 25 *)

(* Kurzform *)
cube = #^3 &;
cube[3]  (* 27 *)

(* Composing pure functions *)
squareThenDouble = Composition[# * 2 &, #^2 &];
squareThenDouble[3]  (* 18 *)
```

**Besonderheiten:**
- `Function[vars, body]` definiert eine reine Funktion
- `#` und `&` als Kurzschreibweise
- `Composition` und `RightComposition` für Funktionsverkettung

**Weiterführende Links:**
- [Wolfram Language Documentation - Pure Functions](https://reference.wolfram.com/language/ref/Function.html)

</TabItem>
</Tabs>


## 7.3.2. Impure Functions

Funktionen, die Seiteneffekte haben oder von globalen Variablen oder Zuständen abhängen. Sie können für gleiche Eingaben unterschiedliche Ausgaben liefern und modifizieren möglicherweise globale Variablen oder Zustände. Ermöglichen es, mit der Außenwelt zu interagieren (z.B. I/O, Mutation, Netzwerk).

### Sprachen {#sprachen}

<Tabs availableTabs={['c', 'cpp', 'csharp', 'd', 'dart', 'fortran', 'go', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'lua', 'mercury', 'perl', 'php', 'prolog', 'python', 'ruby', 'rust', 'scala', 'swift', 'typescript', 'vbnet']}>
<TabItem value="c" label="C">

```c
int counter = 0;

int increment() {
    counter++;
    return counter;
}

int result = increment();
```

**Besonderheiten:**
- Unterstützt Impure Functions nativ
- Funktionen können globale Variablen modifizieren
- Seiteneffekte sind Standard

**Weiterführende Links:**
- [C Documentation - Functions](https://en.cppreference.com/w/c/language/functions)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
int counter = 0;

int Increment() {
    counter++;
    return counter;
}

int result = Increment();
```

**Besonderheiten:**
- Unterstützt Impure Functions nativ
- Funktionen können globale Variablen modifizieren
- Seiteneffekte sind Standard

**Weiterführende Links:**
- [Microsoft C# Documentation - Methods](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/methods)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
int counter = 0;

int increment() {
    counter++;
    return counter;
}

int result = increment();
```

**Besonderheiten:**
- Unterstützt Impure Functions nativ
- Funktionen können globale Variablen modifizieren
- Seiteneffekte sind Standard

**Weiterführende Links:**
- [cppreference.com - Functions](https://en.cppreference.com/w/cpp/language/functions)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
int counter = 0;

int increment() {
    counter++;
    return counter;
}

int result = increment();
```

**Besonderheiten:**
- Unterstützt Impure Functions nativ
- Funktionen können globale Variablen modifizieren
- Seiteneffekte sind Standard

**Weiterführende Links:**
- [Dart Language Tour - Functions](https://dart.dev/guides/language/language-tour#functions)

</TabItem>
<TabItem value="go" label="Go">

```go
var counter int = 0

func increment() int {
    counter++
    return counter
}

result := increment()
```

**Besonderheiten:**
- Unterstützt Impure Functions nativ
- Funktionen können globale Variablen modifizieren
- Seiteneffekte sind Standard

**Weiterführende Links:**
- [Go Documentation - Functions](https://go.dev/tour/basics/11)

</TabItem>
<TabItem value="java" label="Java">

```java
static int counter = 0;

static int increment() {
    counter++;
    return counter;
}

int result = increment();
```

**Besonderheiten:**
- Unterstützt Impure Functions nativ
- Funktionen können statische Variablen modifizieren
- Seiteneffekte sind Standard

**Weiterführende Links:**
- [Oracle Java Documentation - Methods](https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
let counter = 0;

function increment() {
    counter++;
    return counter;
}

const result = increment();
```

**Besonderheiten:**
- Unterstützt Impure Functions nativ
- Funktionen können globale Variablen modifizieren
- Seiteneffekte sind Standard

**Weiterführende Links:**
- [MDN Web Docs - Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
counter = 0

function increment()
    global counter
    counter += 1
    return counter
end

result = increment()
```

**Besonderheiten:**
- Unterstützt Impure Functions nativ
- Funktionen können globale Variablen modifizieren (mit `global` Keyword)
- Seiteneffekte sind Standard

**Weiterführende Links:**
- [Julia Documentation - Functions](https://docs.julialang.org/en/v1/manual/functions/)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Impure Functions (mit Effekt-Annotationen)
fun greet(name: string): console ()
  println("Hallo, " ++ name) // console-Effekt

fun divide(x: int, y: int): exn int
  if y == 0 then throw("Division durch Null")
  x / y

// Mehrere Effekte
fun readAndPrint(): <console, fsys> ()
  val content = read-text-file("data.txt".path) // fsys-Effekt
  println(content)                                // console-Effekt

// Der Effekt ist im Typ sichtbar:
// greet : (string) -> console ()
// divide : (int, int) -> exn int
```

**Besonderheiten:**
- Effekte werden explizit im Funktionstyp annotiert (`console`, `exn`, `io`, etc.)
- Der Compiler inferiert und überprüft Effekte automatisch
- Unterscheidet verschiedene Effektarten: `console`, `exn`, `div`, `ndet`, `io`
- Impure Functions können nur von Funktionen mit kompatiblen Effekten aufgerufen werden

**Weiterführende Links:**
- [Koka Language Guide - Effects](https://koka-lang.github.io/koka/doc/book.html#sec-effects)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
var counter = 0

fun increment(): Int {
    counter++
    return counter
}

val result = increment()
```

**Besonderheiten:**
- Unterstützt Impure Functions nativ
- Funktionen können globale Variablen modifizieren
- Seiteneffekte sind Standard

**Weiterführende Links:**
- [Kotlin Documentation - Functions](https://kotlinlang.org/docs/functions.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```haskell
-- Impure Functions (mit IO Monad)
def increment (counter : IO.Ref Nat) : IO Nat := do
  counter.modify (· + 1)
  counter.get

-- Verwendung in main
def main : IO Unit := do
  let counter ← IO.mkRef (0 : Nat)
  let result ← increment counter
  IO.println s!"{result}"  -- 1
```

**Besonderheiten:**
- Seiteneffekte werden über die `IO`-Monad gekennzeichnet
- Mutable State über `IO.Ref` (Referenzzellen)
- Der Compiler unterscheidet pure und impure Funktionen über das Typsystem
- Impure Funktionen können nur aus anderen `IO`-Kontexten aufgerufen werden
- `do`-Notation für sequenzielles Ausführen von Seiteneffekten

**Weiterführende Links:**
- [Lean 4 Documentation - Monads](https://lean-lang.org/functional_programming_in_lean/monads.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
counter = 0

function increment()
    counter = counter + 1
    return counter
end

local result = increment()
```

**Besonderheiten:**
- Unterstützt Impure Functions nativ
- Funktionen können globale Variablen modifizieren
- Seiteneffekte sind Standard

**Weiterführende Links:**
- [Lua Documentation - Functions](https://www.lua.org/manual/5.4/manual.html#2.5.9)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Impure Functions / Seiteneffekte in Mercury
% Mercury verwaltet Seiteneffekte über State-Threading mit dem io-Typ.
% Zusätzlich gibt es die Deklarationen `impure` und `semipure`.

:- module impure_example.
:- interface.
:- import_module io.
:- pred main(io::di, io::uo) is det.
:- implementation.
:- import_module int, string.

% I/O über State-Threading (idiomatischer Weg)
:- pred greet(string::in, io::di, io::uo) is det.
greet(Name, !IO) :-
    io.format("Hallo, %s!\n", [s(Name)], !IO).

% Impure Prädikate (für C-Interop oder Performance)
:- impure pred write_to_stderr(string::in) is det.
:- pragma foreign_proc("C",
    write_to_stderr(Msg::in),
    [will_not_call_mercury],
    "fprintf(stderr, \"%s\", Msg);").

:- pred main(io::di, io::uo) is det.
main(!IO) :-
    greet("Welt", !IO),
    % Impure Code muss explizit gekennzeichnet werden:
    % impure_call(write_to_stderr("Fehler"))
    io.write_string("Fertig.\n", !IO).
```

**Besonderheiten:**
- Mercury verwaltet Seiteneffekte primär über State-Threading mit `io::di, io::uo` (destructive input / unique output).
- `!IO` ist syntaktischer Zucker für State-Threading und bewahrt die referenzielle Transparenz.
- `impure` und `semipure` Deklarationen ermöglichen direkten Zugriff auf Seiteneffekte (z.B. für FFI mit C).
- Der Compiler erzwingt, dass `impure` Prädikate nur aus explizit markierten Kontexten aufgerufen werden.
- `:- pragma promise_pure` erlaubt es, ein `impure` Prädikat als pure zu deklarieren (unsichere Escape-Hatch).

**Weiterführende Links:**
- [Mercury Language Reference - Purity](https://www.mercurylang.org/information/doc-release/mercury_ref/Purity.html)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
my $counter = 0;

sub increment {
    $counter++;
    return $counter;
}

my $result = increment();
```

**Besonderheiten:**
- Unterstützt Impure Functions nativ
- Funktionen können globale Variablen modifizieren
- Seiteneffekte sind Standard

**Weiterführende Links:**
- [Perl Documentation - Functions](https://perldoc.perl.org/perlsub)

</TabItem>
<TabItem value="php" label="PHP">

```php
$counter = 0;

function increment() {
    global $counter;
    $counter++;
    return $counter;
}

$result = increment();
```

**Besonderheiten:**
- Unterstützt Impure Functions nativ
- Funktionen können globale Variablen modifizieren (mit `global` Keyword)
- Seiteneffekte sind Standard

**Weiterführende Links:**
- [PHP Documentation - Functions](https://www.php.net/manual/en/functions.user-defined.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Impure Prädikate: Seiteneffekte durch I/O und dynamische Datenbank
:- dynamic counter/1.
counter(0).

increment(Result) :-
    retract(counter(Old)),
    Result is Old + 1,
    assert(counter(Result)).

?- increment(Result1).
%  Result1 = 1

?- increment(Result2).
%  Result2 = 2

% I/O-Seiteneffekt
greet(Name) :-
    write('Hallo, '), write(Name), nl.
```

**Besonderheiten:**
- Prolog unterstützt Impure Functions über I/O-Prädikate (`write/1`, `read/1`, `nl/0`)
- `assert/1` und `retract/1` modifizieren die dynamische Datenbank zur Laufzeit
- `:- dynamic` deklariert Prädikate als dynamisch modifizierbar
- Seiteneffekte sind explizit erkennbar durch die verwendeten Built-in-Prädikate

**Weiterführende Links:**
- [SWI-Prolog Documentation - Dynamic Predicates](https://www.swi-prolog.org/pldoc/man?section=dynamic)

</TabItem>
<TabItem value="python" label="Python">

```python
counter = 0

def increment():
    global counter
    counter += 1
    return counter

result = increment()
```

**Besonderheiten:**
- Unterstützt Impure Functions nativ
- Funktionen können globale Variablen modifizieren (mit `global` Keyword)
- Seiteneffekte sind Standard

**Weiterführende Links:**
- [Python Documentation - Functions](https://docs.python.org/3/tutorial/controlflow.html#defining-functions)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
$counter = 0

def increment
    $counter += 1
    return $counter
end

result = increment
```

**Besonderheiten:**
- Unterstützt Impure Functions nativ
- Funktionen können globale Variablen modifizieren (mit `$` Prefix)
- Seiteneffekte sind Standard

**Weiterführende Links:**
- [Ruby Documentation - Methods](https://ruby-doc.org/core-3.1.0/Method.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
use std::sync::Mutex;

static COUNTER: Mutex<i32> = Mutex::new(0);

fn increment() -> i32 {
    let mut counter = COUNTER.lock().unwrap();
    *counter += 1;
    *counter
}

let result = increment();
```

**Besonderheiten:**
- Unterstützt Impure Functions, aber mit Ownership-System
- Globale Variablen erfordern Thread-Safety (z.B. `Mutex`, `Atomic`)
- Seiteneffekte sind möglich, aber explizit

**Weiterführende Links:**
- [Rust Book - Functions](https://doc.rust-lang.org/book/ch03-03-how-functions-work.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
var counter = 0

def increment(): Int = {
    counter += 1
    counter
}

val result = increment()
```

**Besonderheiten:**
- Unterstützt Impure Functions nativ
- Funktionen können globale Variablen modifizieren
- Seiteneffekte sind Standard

**Weiterführende Links:**
- [Scala Documentation - Functions](https://docs.scala-lang.org/tour/basics.html#functions)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
var counter = 0

func increment() -> Int {
    counter += 1
    return counter
}

let result = increment()
```

**Besonderheiten:**
- Unterstützt Impure Functions nativ
- Funktionen können globale Variablen modifizieren
- Seiteneffekte sind Standard

**Weiterführende Links:**
- [Swift Documentation - Functions](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/functions/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
let counter = 0;

function increment(): number {
    counter++;
    return counter;
}

const result = increment();
```

**Besonderheiten:**
- Unterstützt Impure Functions nativ
- Funktionen können globale Variablen modifizieren
- Seiteneffekte sind Standard

**Weiterführende Links:**
- [TypeScript Handbook - Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
Dim counter As Integer = 0

Function Increment() As Integer
    counter += 1
    Return counter
End Function

Dim result As Integer = Increment()
```

**Besonderheiten:**
- Unterstützt Impure Functions nativ
- Funktionen können globale Variablen modifizieren
- Seiteneffekte sind Standard

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Functions](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/procedures/function-procedures)

</TabItem>
<TabItem value="d" label="D">

```d
// Impure Functions (Standard in D)
// Benötigt: import std.stdio;
int counter = 0;

void increment() {
    counter++;  // Seiteneffekt: ändert globalen Zustand
}

void printMessage(string msg) {
    writeln(msg);  // Seiteneffekt: I/O
}

int readAndModify() {
    counter++;
    return counter;  // Liest und ändert globalen Zustand
}
```

**Besonderheiten:**
- Funktionen ohne `pure`-Attribut sind impure (Standard)
- Können globalen Zustand lesen und ändern
- Können I/O durchführen
- D unterscheidet explizit zwischen `pure` und impure Funktionen

**Weiterführende Links:**
- [D Language Specification - Function Attributes](https://dlang.org/spec/function.html#pure-functions)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Impure Elemental Functions (seit Fortran 2008)
impure elemental subroutine log_value(x)
    real, intent(in) :: x
    print *, "Wert: ", x  ! I/O ist ein Seiteneffekt
end subroutine
```

**Besonderheiten:**
- `IMPURE` erlaubt Seiteneffekte in elementalen Prozeduren (seit Fortran 2008)
- Standard-Funktionen ohne `PURE` sind implizit impure
- `IMPURE ELEMENTAL` kombiniert elementale Anwendung mit Seiteneffekten

**Weiterführende Links:**
- [Fortran Wiki - Impure elemental procedures](https://fortranwiki.org/fortran/show/Impure+elemental+procedures)

</TabItem>
</Tabs>


## 7.3.3. Generators und Iterators

### Generator Functions


Funktionen, die eine Sequenz von Werten generieren können, ohne alle Werte auf einmal zu berechnen. Sie können ihre Ausführung pausieren und später fortsetzen, was es ermöglicht, große oder unendliche Sequenzen effizient zu verarbeiten.


<Tabs availableTabs={['csharp', 'dart', 'javascript', 'kotlin', 'lua', 'php', 'python', 'ruby', 'rust', 'swift', 'typescript']} yellowTabs={['prolog']}>
<TabItem value="csharp" label="C#">

```csharp
IEnumerable<int> GenerateNumbers(int n) {
    for (int i = 0; i < n; i++) {
        yield return i;
    }
}

foreach (var number in GenerateNumbers(5)) {
    Console.WriteLine(number);
}
```

**Besonderheiten:**
- Unterstützt Generator Functions mit `yield return` (seit C# 2.0)
- Gibt `IEnumerable<T>` zurück
- Lazy Evaluation

**Weiterführende Links:**
- [Microsoft C# Documentation - yield](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/statements/yield)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
Iterable<int> generateNumbers(int n) sync* {
    for (int i = 0; i < n; i++) {
        yield i;
    }
}

for (var number in generateNumbers(5)) {
    print(number);
}
```

**Besonderheiten:**
- Unterstützt Generator Functions mit `sync*` und `yield` (seit Dart 2.0)
- Gibt `Iterable<T>` zurück
- Lazy Evaluation

**Weiterführende Links:**
- [Dart Language Tour - Generators](https://dart.dev/guides/language/language-tour#generators)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
function* generateNumbers(n) {
    for (let i = 0; i < n; i++) {
        yield i;
    }
}

for (const number of generateNumbers(5)) {
    console.log(number);
}
```

**Besonderheiten:**
- Unterstützt Generator Functions mit `function*` und `yield` (seit ES6)
- Gibt Generator-Objekt zurück
- Lazy Evaluation

**Weiterführende Links:**
- [MDN Web Docs - Generator Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
fun generateNumbers(n: Int): Sequence<Int> = sequence {
    for (i in 0 until n) {
        yield(i)
    }
}

for (number in generateNumbers(5)) {
    println(number)
}
```

**Besonderheiten:**
- Unterstützt Generator Functions mit `sequence` und `yield` (seit Kotlin 1.3)
- Gibt `Sequence<T>` zurück
- Lazy Evaluation

**Weiterführende Links:**
- [Kotlin Documentation - Sequences](https://kotlinlang.org/docs/sequences.html)

</TabItem>
<TabItem value="php" label="PHP">

```php
function generateNumbers($n) {
    for ($i = 0; $i < $n; $i++) {
        yield $i;
    }
}

foreach (generateNumbers(5) as $number) {
    echo $number . "\n";
}
```

**Besonderheiten:**
- Unterstützt Generator Functions mit `yield` (seit PHP 5.5)
- Gibt Generator-Objekt zurück
- Lazy Evaluation

**Weiterführende Links:**
- [PHP Documentation - Generators](https://www.php.net/manual/en/language.generators.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Generator-ähnliches Verhalten über Backtracking
generate_number(N, X) :-
    between(0, N, X).

% Einzelne Werte werden bei Backtracking nacheinander generiert
?- generate_number(4, X).
%  X = 0 ;
%  X = 1 ;
%  X = 2 ;
%  X = 3 ;
%  X = 4

% Alle Werte sammeln mit findall/3
?- findall(X, generate_number(4, X), Numbers).
%  Numbers = [0, 1, 2, 3, 4]
```

**Besonderheiten:**
- Prolog hat keine `yield`-basierte Generator-Syntax, aber Backtracking bietet eine ähnliche Funktionalität
- Bei einer Anfrage mit mehreren Lösungen generiert Prolog Werte lazy über Backtracking (`;` für nächste Lösung)
- `between/3` ist ein eingebautes Prädikat zur Erzeugung von Zahlensequenzen
- `findall/3`, `bagof/3` und `setof/3` sammeln alle generierten Lösungen in einer Liste

**Weiterführende Links:**
- [SWI-Prolog Documentation - findall/3](https://www.swi-prolog.org/pldoc/man?predicate=findall/3)

</TabItem>
<TabItem value="python" label="Python">

```python
def generate_numbers(n):
    for i in range(n):
        yield i

for number in generate_numbers(5):
    print(number)
```

**Besonderheiten:**
- Unterstützt Generator Functions mit `yield` (seit Python 2.2)
- Gibt Generator-Objekt zurück
- Lazy Evaluation

**Weiterführende Links:**
- [Python Documentation - Generators](https://docs.python.org/3/tutorial/classes.html#generators)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
def generate_numbers(n)
    return enum_for(:generate_numbers, n) unless block_given?
    (0...n).each do |i|
        yield i
    end
end

generate_numbers(5).each do |number|
    puts number
end
```

**Besonderheiten:**
- Unterstützt Generator Functions mit `yield` und Blocks
- Gibt Enumerator zurück
- Lazy Evaluation

**Weiterführende Links:**
- [Ruby Documentation - Enumerators](https://ruby-doc.org/core-3.1.0/Enumerator.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
fn generate_numbers(n: i32) -> impl Iterator<Item = i32> {
    (0..n).into_iter()
}

for number in generate_numbers(5) {
    println!("{}", number);
}
```

**Besonderheiten:**
- Unterstützt Generator Functions mit Iterators
- Gibt `Iterator<T>` zurück
- Lazy Evaluation

**Weiterführende Links:**
- [Rust Book - Iterators](https://doc.rust-lang.org/book/ch13-02-iterators.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
func generateNumbers(_ n: Int) -> AnySequence<Int> {
    return AnySequence { () -> AnyIterator<Int> in
        var i = 0
        return AnyIterator {
            guard i < n else { return nil }
            defer { i += 1 }
            return i
        }
    }
}

for number in generateNumbers(5) {
    print(number)
}
```

**Besonderheiten:**
- Unterstützt Generator Functions mit Iterators
- Gibt `AnySequence<T>` zurück
- Lazy Evaluation

**Weiterführende Links:**
- [Swift Documentation - Sequences](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/collectiontypes/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
function* generateNumbers(n: number): Generator<number> {
    for (let i = 0; i < n; i++) {
        yield i;
    }
}

for (const number of generateNumbers(5)) {
    console.log(number);
}
```

**Besonderheiten:**
- Unterstützt Generator Functions mit `function*` und `yield` (seit ES6)
- Gibt Generator-Objekt zurück
- Lazy Evaluation

**Weiterführende Links:**
- [TypeScript Handbook - Generators](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Generator-Funktion mit Coroutines
function range(start, stop, step)
    step = step or 1
    return coroutine.wrap(function()
        for i = start, stop, step do
            coroutine.yield(i)
        end
    end)
end

-- Verwendung des Generators
for val in range(1, 5) do
    print(val)    -- 1, 2, 3, 4, 5
end

-- Unendlicher Generator
function naturals()
    return coroutine.wrap(function()
        local n = 1
        while true do
            coroutine.yield(n)
            n = n + 1
        end
    end)
end

local gen = naturals()
print(gen())  -- 1
print(gen())  -- 2
print(gen())  -- 3
```

**Besonderheiten:**
- Generatoren werden über `coroutine.wrap()` oder `coroutine.create()` erstellt
- `coroutine.yield()` pausiert die Ausführung und gibt einen Wert zurück
- `coroutine.wrap()` gibt eine Funktion zurück, die kompatibel mit `for`-Schleifen ist
- Generatoren können lazy und unendlich sein

**Weiterführende Links:**
- [Lua Reference Manual - Coroutines](https://www.lua.org/manual/5.4/manual.html#2.6)

</TabItem>
</Tabs>



---

### Yield / Resume (Generator Control Flow)


Kontrollfluss-Mechanismus, der es Generator-Funktionen ermöglicht, ihre Ausführung zu pausieren (`yield`) und später an derselben Stelle fortzusetzen (`resume`). Ermöglicht es, Werte schrittweise zu generieren und die Kontrolle zwischen Generator und Aufrufer zu wechseln.


<Tabs availableTabs={['csharp', 'dart', 'javascript', 'kotlin', 'lua', 'php', 'python', 'ruby', 'typescript']}>
<TabItem value="csharp" label="C#">

```csharp
IEnumerable<int> GenerateNumbers(int n) {
    for (int i = 0; i < n; i++) {
        yield return i;  // Pausiert hier, gibt Wert zurück
        // Wird beim nächsten Aufruf hier fortgesetzt
    }
}

var generator = GenerateNumbers(5);
var enumerator = generator.GetEnumerator();
while (enumerator.MoveNext()) {  // Resume
    Console.WriteLine(enumerator.Current);
}
```

**Besonderheiten:**
- Unterstützt `yield return` für Pause (seit C# 2.0)
- `MoveNext()` führt Resume aus
- State wird zwischen Aufrufen gespeichert

**Weiterführende Links:**
- [Microsoft C# Documentation - yield](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/statements/yield)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
Iterable<int> generateNumbers(int n) sync* {
    for (int i = 0; i < n; i++) {
        yield i;  // Pausiert hier, gibt Wert zurück
        // Wird beim nächsten Aufruf hier fortgesetzt
    }
}

var generator = generateNumbers(5);
var iterator = generator.iterator;
while (iterator.moveNext()) {  // Resume
    print(iterator.current);
}
```

**Besonderheiten:**
- Unterstützt `yield` für Pause (seit Dart 2.0)
- `moveNext()` führt Resume aus
- State wird zwischen Aufrufen gespeichert

**Weiterführende Links:**
- [Dart Language Tour - Generators](https://dart.dev/guides/language/language-tour#generators)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
function* generateNumbers(n) {
    for (let i = 0; i < n; i++) {
        yield i;  // Pausiert hier, gibt Wert zurück
        // Wird beim nächsten Aufruf hier fortgesetzt
    }
}

const generator = generateNumbers(5);
let result = generator.next();  // Resume
while (!result.done) {
    console.log(result.value);
    result = generator.next();  // Resume
}
```

**Besonderheiten:**
- Unterstützt `yield` für Pause (seit ES6)
- `next()` führt Resume aus
- State wird zwischen Aufrufen gespeichert

**Weiterführende Links:**
- [MDN Web Docs - Generator Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
fun generateNumbers(n: Int): Sequence<Int> = sequence {
    for (i in 0 until n) {
        yield(i)  // Pausiert hier, gibt Wert zurück
        // Wird beim nächsten Aufruf hier fortgesetzt
    }
}

val generator = generateNumbers(5)
val iterator = generator.iterator()
while (iterator.hasNext()) {  // Resume
    println(iterator.next())
}
```

**Besonderheiten:**
- Unterstützt `yield` für Pause (seit Kotlin 1.3)
- `next()` führt Resume aus
- State wird zwischen Aufrufen gespeichert

**Weiterführende Links:**
- [Kotlin Documentation - Sequences](https://kotlinlang.org/docs/sequences.html)

</TabItem>
<TabItem value="php" label="PHP">

```php
function generateNumbers($n) {
    for ($i = 0; $i < $n; $i++) {
        yield $i;  // Pausiert hier, gibt Wert zurück
        // Wird beim nächsten Aufruf hier fortgesetzt
    }
}

$generator = generateNumbers(5);
while ($generator->valid()) {  // Resume
    echo $generator->current() . "\n";
    $generator->next();  // Resume
}
```

**Besonderheiten:**
- Unterstützt `yield` für Pause (seit PHP 5.5)
- `next()` führt Resume aus
- State wird zwischen Aufrufen gespeichert

**Weiterführende Links:**
- [PHP Documentation - Generators](https://www.php.net/manual/en/language.generators.php)

</TabItem>
<TabItem value="python" label="Python">

```python
def generate_numbers(n):
    for i in range(n):
        yield i  # Pausiert hier, gibt Wert zurück
        # Wird beim nächsten Aufruf hier fortgesetzt

generator = generate_numbers(5)
while True:
    try:
        value = next(generator)  # Resume
        print(value)
    except StopIteration:
        break
```

**Besonderheiten:**
- Unterstützt `yield` für Pause (seit Python 2.2)
- `next()` führt Resume aus
- State wird zwischen Aufrufen gespeichert

**Weiterführende Links:**
- [Python Documentation - Generators](https://docs.python.org/3/tutorial/classes.html#generators)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
def generate_numbers(n)
    return enum_for(:generate_numbers, n) unless block_given?
    (0...n).each do |i|
        yield i  # Pausiert hier, gibt Wert zurück
        # Wird beim nächsten Aufruf hier fortgesetzt
    end
end

generator = generate_numbers(5)
generator.each do |value|  # Resume
    puts value
end
```

**Besonderheiten:**
- Unterstützt `yield` für Pause
- `each` führt Resume aus
- State wird zwischen Aufrufen gespeichert

**Weiterführende Links:**
- [Ruby Documentation - Enumerators](https://ruby-doc.org/core-3.1.0/Enumerator.html)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
function* generateNumbers(n: number): Generator<number> {
    for (let i = 0; i < n; i++) {
        yield i;  // Pausiert hier, gibt Wert zurück
        // Wird beim nächsten Aufruf hier fortgesetzt
    }
}

const generator = generateNumbers(5);
let result = generator.next();  // Resume
while (!result.done) {
    console.log(result.value);
    result = generator.next();  // Resume
}
```

**Besonderheiten:**
- Unterstützt `yield` für Pause (seit ES6)
- `next()` führt Resume aus
- State wird zwischen Aufrufen gespeichert

**Weiterführende Links:**
- [TypeScript Handbook - Generators](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Yield / Resume mit Coroutines
local co = coroutine.create(function(x)
    print("Erster Resume:", x)
    local y = coroutine.yield(x * 2)    -- Yield mit Rückgabewert
    print("Zweiter Resume:", y)
    local z = coroutine.yield(y + 1)    -- Yield mit Rückgabewert
    print("Dritter Resume:", z)
    return z * 3                         -- Finaler Rückgabewert
end)

local ok, val = coroutine.resume(co, 10)   -- Erster Resume: 10
print(val)                                   -- 20 (yielded Wert)

ok, val = coroutine.resume(co, 20)          -- Zweiter Resume: 20
print(val)                                   -- 21 (yielded Wert)

ok, val = coroutine.resume(co, 30)          -- Dritter Resume: 30
print(val)                                   -- 90 (Rückgabewert)

-- Status prüfen
print(coroutine.status(co))                  -- "dead"
```

**Besonderheiten:**
- `coroutine.yield(...)` pausiert die Coroutine und gibt Werte an `resume` zurück
- `coroutine.resume(co, ...)` setzt die Coroutine fort und übergibt Werte an `yield`
- Bidirektionale Kommunikation zwischen `resume` und `yield`
- Coroutine-Status: `"running"`, `"suspended"`, `"normal"`, `"dead"`
- `coroutine.wrap()` als vereinfachte Alternative zu `create`/`resume`

**Weiterführende Links:**
- [Lua Reference Manual - Coroutine Manipulation](https://www.lua.org/manual/5.4/manual.html#6.2)

</TabItem>
</Tabs>



---

### Generator Expressions


Lazy-evaluierte Ausdrücke, die Werte on-the-fly generieren, ohne alle Werte im Speicher zu speichern. Ähnlich wie Comprehensions, aber mit verzögerter Auswertung für bessere Speichereffizienz.


<Tabs availableTabs={['clojure', 'elixir', 'fsharp', 'haskell', 'julia', 'python', 'scala']}>
<TabItem value="clojure" label="Clojure">

```clojure
;; Generator Expression (lazy-seq)
(def numbers (range 1 6))
(def squared (map #(* % %) numbers))

;; Lazy Evaluation
(take 3 squared)
```

**Besonderheiten:**
- Verwendet `lazy-seq` für lazy sequences
- `map` erstellt lazy sequences
- Werte werden erst bei Bedarf berechnet

**Weiterführende Links:**
- [Clojure Documentation - Lazy Sequences](https://clojure.org/reference/sequences#_lazy_sequences)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Generator Expression (Stream)
numbers = 1..5
squared = Stream.map(numbers, fn n -> n * n end)

# Lazy Evaluation
squared |> Enum.take(3)
```

**Besonderheiten:**
- Verwendet `Stream` für lazy evaluation
- `Stream.map` erstellt lazy streams
- Werte werden erst bei Enumeration berechnet

**Weiterführende Links:**
- [Elixir Documentation - Streams](https://hexdocs.pm/elixir/Stream.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Generator Expression (seq)
let numbers = seq { 1..5 }
let squared = seq { for n in numbers -> n * n }

// Lazy Evaluation
squared |> Seq.take 3 |> Seq.toList
```

**Besonderheiten:**
- Verwendet `seq { }` für lazy sequences
- Syntax: `seq { for variable in collection -> expression }`
- Werte werden erst bei Enumeration berechnet

**Weiterführende Links:**
- [F# Documentation - Sequences](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/sequences)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Generator Expression (lazy lists)
numbers = [1..5]
squared = [n * n | n <- numbers]

-- Lazy Evaluation
take 3 squared
```

**Besonderheiten:**
- Haskell-Listen sind standardmäßig lazy
- List Comprehensions sind lazy
- Werte werden erst bei Bedarf berechnet

**Weiterführende Links:**
- [Haskell Documentation - Lazy Evaluation](https://www.haskell.org/haskellwiki/Lazy_evaluation)

</TabItem>
<TabItem value="python" label="Python">

```python
# Generator Expression
numbers = range(1, 6)
squared = (n * n for n in numbers)

# Lazy Evaluation
result = list(squared)[:3]
```

**Besonderheiten:**
- Syntax: `(expression for variable in collection)`
- Werte werden erst bei Iteration berechnet
- Speichereffizienter als List Comprehensions

**Weiterführende Links:**
- [Python Documentation - Generator Expressions](https://docs.python.org/3/reference/expressions.html#generator-expressions)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Generator Expression (LazyList, seit Scala 2.13)
val numbers = LazyList.from(1).take(5)
val squared = numbers.map(n => n * n)

// Lazy Evaluation
squared.take(3).toList
```

**Besonderheiten:**
- Verwendet `LazyList` für lazy sequences (seit Scala 2.13)
- `Stream` ist veraltet, `LazyList` ist die moderne Alternative
- Werte werden erst bei Enumeration berechnet

**Weiterführende Links:**
- [Scala Documentation - LazyList](https://www.scala-lang.org/api/current/scala/collection/immutable/LazyList.html)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Generator Expression (lazy)
gen = (x^2 for x in 1:10)

# Verwendung in Funktionen
total = sum(x^2 for x in 1:10)  # 385

# Mit Filter
even_squares = sum(x^2 for x in 1:10 if iseven(x))  # 220

# collect() materialisiert den Generator
squares = collect(x^2 for x in 1:5)  # [1, 4, 9, 16, 25]
```

**Besonderheiten:**
- Generator Expressions sind lazy (kein Speicher für Zwischenergebnisse)
- Können direkt in Funktionsaufrufen verwendet werden
- Unterstützen Filter mit `if`

**Weiterführende Links:**
- [Julia Documentation - Generators](https://docs.julialang.org/en/v1/manual/arrays/#Generator-Expressions)

</TabItem>
</Tabs>



---

### Iteratoren und Generatoren


Mechanismen zur sequenziellen Iteration über Sammlungen oder zur Generierung von Werten on-the-fly. Iteratoren ermöglichen es, über Datenstrukturen zu iterieren, während Generatoren Werte lazy generieren können.


<Tabs availableTabs={['cpp', 'csharp', 'dart', 'java', 'javascript', 'julia', 'kotlin', 'lean4', 'lua', 'nim', 'php', 'python', 'rust', 'scala', 'swift', 'typescript']} yellowTabs={['prolog']} orangeTabs={['go']}>
<TabItem value="cpp" label="C++">

```cpp
// Iterator
std::vector<int> numbers = {1, 2, 3, 4, 5};
for (auto it = numbers.begin(); it != numbers.end(); ++it) {
    std::cout << *it << std::endl;
}

// Range-based for (seit C++11)
for (const auto& n : numbers) {
    std::cout << n << std::endl;
}
```

**Besonderheiten:**
- Verwendet Iterator-Pattern
- `begin()` und `end()` für Iterator-Bereiche
- Range-based for verwendet Iteratoren intern

**Weiterführende Links:**
- [cppreference.com - Iterator](https://en.cppreference.com/w/cpp/iterator)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Iterator (IEnumerable)
IEnumerable<int> GetNumbers() {
    yield return 1;
    yield return 2;
    yield return 3;
    yield return 4;
    yield return 5;
}

foreach (var n in GetNumbers()) {
    Console.WriteLine(n);
}
```

**Besonderheiten:**
- Verwendet `yield return` für Generatoren
- `IEnumerable<T>` für Iteratoren
- Lazy evaluation mit `yield`

**Weiterführende Links:**
- [Microsoft C# Documentation - Iterators](https://learn.microsoft.com/en-us/dotnet/csharp/iterators)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Iterator (Iterable)
Iterable<int> getNumbers() sync* {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

for (var n in getNumbers()) {
  print(n);
}
```

**Besonderheiten:**
- Verwendet `sync*` für synchrone Generatoren
- Verwendet `async*` für asynchrone Generatoren
- `yield` für Wertegenerierung

**Weiterführende Links:**
- [Dart Language Tour - Generators](https://dart.dev/guides/language/language-tour#generators)

</TabItem>
<TabItem value="go" label="Go">

```go
// Iterator (Channel)
func numbers() <-chan int {
    ch := make(chan int)
    go func() {
        defer close(ch)
        for i := 1; i <= 5; i++ {
            ch <- i
        }
    }()
    return ch
}

for n := range numbers() {
    fmt.Println(n)
}
```

**Besonderheiten:**
- Go hat keine expliziten Iteratoren
- Verwendet Channels für Generator-Pattern
- `range` über Channels für Iteration

**Weiterführende Links:**
- [Go Documentation - Channels](https://go.dev/ref/spec#Channel_types)

</TabItem>
<TabItem value="java" label="Java">

```java
// Iterator
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
Iterator<Integer> it = numbers.iterator();
while (it.hasNext()) {
    System.out.println(it.next());
}

// Enhanced for (seit Java 5.0)
for (Integer n : numbers) {
    System.out.println(n);
}
```

**Besonderheiten:**
- Verwendet `Iterator<T>` Interface
- `hasNext()` und `next()` Methoden
- Enhanced for verwendet Iteratoren intern

**Weiterführende Links:**
- [Oracle Java Documentation - Iterator](https://docs.oracle.com/javase/8/docs/api/java/util/Iterator.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Generator (seit ES6)
function* numbers() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

for (const n of numbers()) {
    console.log(n);
}
```

**Besonderheiten:**
- Verwendet `function*` für Generatoren (seit ES6)
- `yield` für Wertegenerierung
- `for...of` für Iteration über Iterables

**Weiterführende Links:**
- [MDN Web Docs - Generator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Iterator (Sequence)
val numbers = sequence {
    yield(1)
    yield(2)
    yield(3)
    yield(4)
    yield(5)
}

for (n in numbers) {
    println(n)
}
```

**Besonderheiten:**
- Verwendet `sequence { }` für Generatoren
- `yield()` für Wertegenerierung
- Lazy evaluation

**Weiterführende Links:**
- [Kotlin Documentation - Sequences](https://kotlinlang.org/docs/sequences.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```haskell
-- Iteration über Listen und Arrays
def main : IO Unit := do
  let numbers := [1, 2, 3, 4, 5]
  for n in numbers do
    IO.println s!"{n}"

  -- Array-Iteration
  for n in #[10, 20, 30] do
    IO.println s!"{n}"

-- ForIn Typeclass für benutzerdefinierte Iteration
structure Countdown where
  n : Nat

instance : ForIn m Countdown Nat where
  forIn c init f := do
    let mut acc := init
    for i in List.range c.n do
      match ← f (c.n - i) acc with
      | .done a => return a
      | .yield a => acc := a
    return acc
```

**Besonderheiten:**
- `for ... in ... do` Syntax für Iteration über Sammlungen
- `ForIn` Typeclass ermöglicht benutzerdefinierte Iteration (analog zu Rusts `Iterator`-Trait)
- Listen, Arrays, Ranges und andere Sammlungen implementieren `ForIn`
- Monadic Iteration: `for`-Schleifen können in jeder Monade verwendet werden

**Weiterführende Links:**
- [Lean 4 Documentation - Do Notation](https://lean-lang.org/lean4/doc/do.html)

</TabItem>
<TabItem value="python" label="Python">

```python
# Generator Function
def numbers():
    yield 1
    yield 2
    yield 3
    yield 4
    yield 5

for n in numbers():
    print(n)
```

**Besonderheiten:**
- Verwendet `yield` für Generatoren
- Generator-Funktionen sind lazy
- `next()` für manuelle Iteration

**Weiterführende Links:**
- [Python Documentation - Generators](https://docs.python.org/3/tutorial/classes.html#generators)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Iterator
let numbers = vec![1, 2, 3, 4, 5];
let mut iter = numbers.iter();
while let Some(n) = iter.next() {
    println!("{}", n);
}

// For loop (verwendet Iteratoren)
for n in numbers.iter() {
    println!("{}", n);
}
```

**Besonderheiten:**
- Verwendet `Iterator` Trait
- `next()` gibt `Option<T>` zurück
- `for` verwendet Iteratoren intern

**Weiterführende Links:**
- [Rust Documentation - Iterators](https://doc.rust-lang.org/book/ch13-02-iterators.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Iterator
val numbers = Iterator(1, 2, 3, 4, 5)
while (numbers.hasNext) {
    println(numbers.next())
}

// For comprehension (verwendet Iteratoren)
for (n <- Iterator(1, 2, 3, 4, 5)) {
    println(n)
}
```

**Besonderheiten:**
- Verwendet `Iterator[T]` Trait
- `hasNext()` und `next()` Methoden
- For comprehensions verwenden Iteratoren

**Weiterführende Links:**
- [Scala Documentation - Iterators](https://www.scala-lang.org/api/current/scala/collection/Iterator.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Iterator (Sequence)
struct Numbers: Sequence {
    func makeIterator() -> AnyIterator<Int> {
        var current = 1
        return AnyIterator {
            guard current <= 5 else { return nil }
            defer { current += 1 }
            return current
        }
    }
}

for n in Numbers() {
    print(n)
}
```

**Besonderheiten:**
- Verwendet `Sequence` Protocol
- `makeIterator()` für Iterator-Erstellung
- `IteratorProtocol` für Iterator-Implementierung

**Weiterführende Links:**
- [Swift Documentation - Sequences](https://developer.apple.com/documentation/swift/sequence)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Generator (seit ES6)
function* numbers(): Generator<number> {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

for (const n of numbers()) {
    console.log(n);
}
```

**Besonderheiten:**
- Verwendet `function*` für Generatoren (seit ES6)
- `yield` für Wertegenerierung
- `Generator<T>` Typ für Typisierung

**Weiterführende Links:**
- [TypeScript Handbook - Generators](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Iterator-Protokoll: iterate() implementieren
struct Countdown
    start::Int
end

function Base.iterate(c::Countdown, state=c.start)
    state <= 0 && return nothing
    return (state, state - 1)
end

for i in Countdown(5)
    println(i)  # 5, 4, 3, 2, 1
end

# Channel als Generator
function fibonacci(n)
    Channel() do ch
        a, b = 0, 1
        for _ in 1:n
            put!(ch, a)
            a, b = b, a + b
        end
    end
end

for val in fibonacci(10)
    print(val, " ")  # 0 1 1 2 3 5 8 13 21 34
end
```

**Besonderheiten:**
- Iterator-Protokoll basiert auf `iterate(collection, state)` → `(element, new_state)` oder `nothing`
- `Channel` kann als Generator-Ersatz verwendet werden
- Lazy Evaluation durch Generator Expressions

**Weiterführende Links:**
- [Julia Documentation - Interfaces](https://docs.julialang.org/en/v1/manual/interfaces/)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Eingebaute Iteratoren
local t = {10, 20, 30}
for i, v in ipairs(t) do     -- Index-basierter Iterator
    print(i, v)
end

for k, v in pairs(t) do      -- Key-Value-Iterator
    print(k, v)
end

-- Eigener Iterator (Closure-basiert)
function range(n)
    local i = 0
    return function()
        i = i + 1
        if i <= n then return i end
    end
end

for val in range(5) do
    print(val)                -- 1, 2, 3, 4, 5
end

-- Coroutine-basierter Generator
function fibonacci(n)
    return coroutine.wrap(function()
        local a, b = 0, 1
        for _ = 1, n do
            coroutine.yield(a)
            a, b = b, a + b
        end
    end)
end

for val in fibonacci(8) do
    print(val)                -- 0, 1, 1, 2, 3, 5, 8, 13
end
```

**Besonderheiten:**
- Iteratoren basieren auf dem generischen `for`-Protokoll (Iterator-Funktion, Zustandswert, Kontrollvariable)
- Eingebaute Iteratoren: `pairs()`, `ipairs()`, `next()`
- Closure-basierte Iteratoren (stateless und stateful)
- `coroutine.wrap()` erzeugt Coroutine-basierte Generatoren
- Lua 5.2+: `__pairs` und `__ipairs` Metamethoden für benutzerdefinierte Iteration

**Weiterführende Links:**
- [Lua Reference Manual - For Statement](https://www.lua.org/manual/5.4/manual.html#3.3.5)
- [Programming in Lua - Iterators](https://www.lua.org/pil/7.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Inline Iterator
iterator countUp(a, b: int): int =
  var i = a
  while i <= b:
    yield i
    inc i

for x in countUp(1, 5):
  echo x  # 1, 2, 3, 4, 5

# Closure Iterator
proc fibonacci(): iterator(): int =
  return iterator(): int =
    var a = 0
    var b = 1
    while true:
      yield a
      (a, b) = (b, a + b)

let fib = fibonacci()
for i in 0..5:
  echo fib()  # 0, 1, 1, 2, 3, 5
```

**Besonderheiten:**
- Inline Iterators: Werden zur Compile-Zeit aufgelöst (Zero-Cost)
- Closure Iterators: Behalten Zustand zwischen Aufrufen
- `yield` gibt Werte zurück und pausiert den Iterator

**Weiterführende Links:**
- [Nim Documentation - Iterators](https://nim-lang.org/docs/manual.html#iterators-and-the-for-statement)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
// Iterator-Interface
class NumberIterator implements Iterator {
    private int $current = 0;

    public function __construct(private int $max) {}
    public function current(): int { return $this->current; }
    public function key(): int { return $this->current; }
    public function next(): void { $this->current++; }
    public function rewind(): void { $this->current = 0; }
    public function valid(): bool { return $this->current < $this->max; }
}

// Generator (seit PHP 5.5)
function fibonacci(): Generator {
    [$a, $b] = [0, 1];
    while (true) {
        yield $a;
        [$a, $b] = [$b, $a + $b];
    }
}
?>
```

**Besonderheiten:**
- `Iterator`-Interface für benutzerdefinierte Iteratoren
- `Generator` mit `yield` seit PHP 5.5
- `IteratorAggregate` als Alternative zu `Iterator`

**Weiterführende Links:**
- [PHP Documentation - Iterators](https://www.php.net/manual/en/language.oop5.iterations.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Iteration über Listen mittels Rekursion und Backtracking
print_all([]).
print_all([H|T]) :-
    write(H), nl,
    print_all(T).

?- print_all([1, 2, 3, 4, 5]).
%  1
%  2
%  3
%  4
%  5

% Generator-ähnlich: Backtracking generiert Werte on-the-fly
fibonacci(0, 0).
fibonacci(1, 1).
fibonacci(N, F) :-
    N > 1,
    N1 is N - 1,
    N2 is N - 2,
    fibonacci(N1, F1),
    fibonacci(N2, F2),
    F is F1 + F2.

% Iteration mit forall/2
?- forall(between(0, 5, N), (fibonacci(N, F), format("fib(~w) = ~w~n", [N, F]))).
```

**Besonderheiten:**
- Prolog hat kein Iterator-Interface im Sinne imperativer Sprachen
- Iteration wird durch Rekursion und Backtracking realisiert
- `forall/2` iteriert über alle Lösungen eines Ziels
- `between/3` generiert Ganzzahlen in einem Bereich, ähnlich wie `range()` in Python
- `findall/3` sammelt alle Lösungen als Liste

**Weiterführende Links:**
- [SWI-Prolog Documentation - forall/2](https://www.swi-prolog.org/pldoc/man?predicate=forall/2)

</TabItem>
</Tabs>


