---
slug: /funktionen/spezielle-funktionstypen
title: 7.3. Special Function Types
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 7.3. Special Function Types

Special types of functions such as generators and coroutines.

## 7.3.1. Pure Functions

Functions that have no side effects and always return the same output for the same inputs. They depend only on their parameters and do not modify global variables or state. Enable code to be more predictable and testable.

### Languages {#sprachen}

<Tabs availableTabs={['clojure', 'd', 'elixir', 'elm', 'erlang', 'fortran', 'fsharp', 'gleam', 'haskell', 'idris', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'mercury', 'nim', 'ocaml', 'prolog', 'purescript', 'python', 'racket', 'roc', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'wolfram-language']}>
<TabItem value="clojure" label="Clojure">

```clojure
(defn add [a b]
  (+ a b))

(def result (add 5 3))
```

**Special features:**
- Functional language that promotes Pure Functions
- Immutability is standard
- Functions are pure by default, unless they use `atom`, `ref`, etc.

**Further reading:**
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

**Special features:**
- Functional language that enforces Pure Functions
- All functions are pure
- No side effects possible

**Further reading:**
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

**Special features:**
- Functional language that promotes Pure Functions
- Immutability is standard
- Functions are pure by default, unless they use `mutable` or `ref`

**Further reading:**
- [F# Documentation - Functions](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/functions/)

</TabItem>
<TabItem value="gleam" label="Gleam">

```erlang
fn add(a: Int, b: Int) -> Int {
  a + b
}

let result = add(5, 3)
```

**Special features:**
- Functional language that promotes Pure Functions
- Immutability is standard
- Functions are pure by default

**Further reading:**
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

**Special features:**
- Functional language that enforces Pure Functions
- All functions are pure
- Side effects are handled via effects

**Further reading:**
- [Idris Documentation - Functions](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
function add(a, b) {
    return a + b;
}

const result = add(5, 3);
```

**Special features:**
- Supports Pure Functions but does not enforce them
- Functions can be pure but don't have to be
- Side effects are possible

**Further reading:**
- [MDN Web Docs - Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
function add(a::Int, b::Int)::Int
    return a + b
end

result = add(5, 3)
```

**Special features:**
- Supports Pure Functions but does not enforce them
- Functions can be pure but don't have to be
- Side effects are possible

**Further reading:**
- [Julia Documentation - Functions](https://docs.julialang.org/en/v1/manual/functions/)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Pure Functions (no effects in type)
fun add(a: int, b: int): int
  a + b  // No side effects

fun factorial(n: int): int
  if n <= 1 then 1
  else n * factorial(n - 1)

val result = add(5, 3) // 8

// The type `(int, int) -> int` has NO effect
// This guarantees purity at compile time
```

**Special features:**
- Koka's effect system tracks purity explicitly in the type system
- A function without effect annotation (e.g. `(int) -> int`) is guaranteed pure
- The compiler enforces that pure functions have no side effects
- This goes beyond Haskell: Koka distinguishes different effect types (IO, Exceptions, State etc.)

**Further reading:**
- [Koka Language Guide - Effects](https://koka-lang.github.io/koka/doc/book.html#sec-effects)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
fun add(a: Int, b: Int): Int {
    return a + b
}

val result = add(5, 3)
```

**Special features:**
- Supports Pure Functions but does not enforce them
- Functions can be pure but don't have to be
- Side effects are possible

**Further reading:**
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

**Special features:**
- Supports Pure Functions but does not enforce them
- Functions can be pure but don't have to be
- Side effects are possible

**Further reading:**
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

**Special features:**
- Supports Pure Functions but does not enforce them
- Functions can be pure but don't have to be
- Side effects are possible

**Further reading:**
- [Swift Documentation - Functions](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/functions/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
function add(a: number, b: number): number {
    return a + b;
}

const result = add(5, 3);
```

**Special features:**
- Supports Pure Functions but does not enforce them
- Functions can be pure but don't have to be
- Side effects are possible

**Further reading:**
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
// pure int bad() { return globalVar; }  // Error: cannot access mutable global
```

**Besonderheiten:**
- `pure` Attribut garantiert: keine Seiteneffekte, kein Zugriff auf mutable globalen Zustand
- Pure functions can be evaluated at compile time (CTFE)
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

Functions that have side effects or depend on global variables or state. They can return different outputs for the same inputs and may modify global variables or state. Enable interaction with the outside world (e.g. I/O, mutation, network).

### Languages {#sprachen}

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

**Special features:**
- Supports Impure Functions natively
- Functions can modify global variables
- Side effects are standard

**Further reading:**
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

**Special features:**
- Supports Impure Functions natively
- Functions can modify global variables
- Side effects are standard

**Further reading:**
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

**Special features:**
- Supports Impure Functions natively
- Functions can modify global variables
- Side effects are standard

**Further reading:**
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

**Special features:**
- Supports Impure Functions natively
- Functions can modify global variables
- Side effects are standard

**Further reading:**
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

**Special features:**
- Supports Impure Functions natively
- Functions can modify global variables
- Side effects are standard

**Further reading:**
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

**Special features:**
- Supports Impure Functions natively
- Functions can modify global variables
- Side effects are standard

**Further reading:**
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
// Impure Functions (with effect annotations)
fun greet(name: string): console ()
  println("Hello, " ++ name) // console effect

fun divide(x: int, y: int): exn int
  if y == 0 then throw("Division durch Null")
  x / y

// Multiple effects
fun readAndPrint(): <console, fsys> ()
  val content = read-text-file("data.txt".path) // fsys effect
  println(content)                                // console effect

// The effect is visible in the type:
// greet : (string) -> console ()
// divide : (int, int) -> exn int
```

**Special features:**
- Effects are explicitly annotated in the function type (`console`, `exn`, `io`, etc.)
- The compiler infers and checks effects automatically
- Distinguishes different effect types: `console`, `exn`, `div`, `ndet`, `io`
- Impure Functions can only be called from functions with compatible effects

**Further reading:**
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

**Special features:**
- Supports Impure Functions natively
- Functions can modify global variables
- Side effects are standard

**Further reading:**
- [Kotlin Documentation - Functions](https://kotlinlang.org/docs/functions.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```haskell
-- Impure Functions (with IO Monad)
def increment (counter : IO.Ref Nat) : IO Nat := do
  counter.modify (· + 1)
  counter.get

-- Usage in main
def main : IO Unit := do
  let counter ← IO.mkRef (0 : Nat)
  let result ← increment counter
  IO.println s!"{result}"  -- 1
```

**Special features:**
- Side effects are marked via the `IO` monad
- Mutable State via `IO.Ref` (reference cells)
- The compiler distinguishes pure and impure functions via the type system
- Impure functions can only be called from other `IO` contexts
- `do` notation for sequential execution of side effects

**Further reading:**
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

**Special features:**
- Supports Impure Functions natively
- Functions can modify global variables
- Side effects are standard

**Further reading:**
- [Lua Documentation - Functions](https://www.lua.org/manual/5.4/manual.html#2.5.9)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Impure Functions / Side effects in Mercury
% Mercury manages side effects via state threading with the io type.
% Additionally, there are `impure` and `semipure` declarations.

:- module impure_example.
:- interface.
:- import_module io.
:- pred main(io::di, io::uo) is det.
:- implementation.
:- import_module int, string.

% I/O via state threading (idiomatic way)
:- pred greet(string::in, io::di, io::uo) is det.
greet(Name, !IO) :-
    io.format("Hello, %s!\n", [s(Name)], !IO).

% Impure predicates (for C interop or performance)
:- impure pred write_to_stderr(string::in) is det.
:- pragma foreign_proc("C",
    write_to_stderr(Msg::in),
    [will_not_call_mercury],
    "fprintf(stderr, \"%s\", Msg);").

:- pred main(io::di, io::uo) is det.
main(!IO) :-
    greet("World", !IO),
    % Impure code must be explicitly marked:
    % impure_call(write_to_stderr("Error"))
    io.write_string("Done.\n", !IO).
```

**Special features:**
- Mercury manages side effects primarily via state threading with `io::di, io::uo` (destructive input / unique output).
- `!IO` is syntactic sugar for state threading and preserves referential transparency.
- `impure` and `semipure` declarations enable direct access to side effects (e.g. for FFI with C).
- The compiler enforces that `impure` predicates can only be called from explicitly marked contexts.
- `:- pragma promise_pure` allows declaring an `impure` predicate as pure (unsafe escape hatch).

**Further reading:**
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

**Special features:**
- Supports Impure Functions natively
- Functions can modify global variables
- Side effects are standard

**Further reading:**
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
% Impure predicates: side effects via I/O and dynamic database
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

% I/O side effect
greet(Name) :-
    write('Hello, '), write(Name), nl.
```

**Special features:**
- Prolog supports Impure Functions via I/O predicates (`write/1`, `read/1`, `nl/0`)
- `assert/1` and `retract/1` modify the dynamic database at runtime
- `:- dynamic` declares predicates as dynamically modifiable
- Side effects are explicitly recognizable through the used built-in predicates

**Further reading:**
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

**Special features:**
- Supports Impure Functions natively
- Functions can modify global variables (with `global` keyword)
- Side effects are standard

**Further reading:**
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

**Special features:**
- Supports Impure Functions natively
- Functions can modify global variables (with `$` prefix)
- Side effects are standard

**Further reading:**
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

**Special features:**
- Supports Impure Functions, but with Ownership System
- Global variables require thread-safety (e.g. `Mutex`, `Atomic`)
- Side effects are possible, but explicit

**Further reading:**
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

**Special features:**
- Supports Impure Functions natively
- Functions can modify global variables
- Side effects are standard

**Further reading:**
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

**Special features:**
- Supports Impure Functions natively
- Functions can modify global variables
- Side effects are standard

**Further reading:**
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

**Special features:**
- Supports Impure Functions natively
- Functions can modify global variables
- Side effects are standard

**Further reading:**
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

**Special features:**
- Supports Impure Functions natively
- Functions can modify global variables
- Side effects are standard

**Further reading:**
- [Microsoft VB.NET Documentation - Functions](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/procedures/function-procedures)

</TabItem>
<TabItem value="d" label="D">

```d
// Impure Functions (Standard in D)
// Requires: import std.stdio;
int counter = 0;

void increment() {
    counter++;  // Side effect: modifies global state
}

void printMessage(string msg) {
    writeln(msg);  // Side effect: I/O
}

int readAndModify() {
    counter++;
    return counter;  // Reads and modifies global state
}
```

**Special features:**
- Functions without `pure` attribute are impure (standard)
- Can read and modify global state
- Can perform I/O
- D explicitly distinguishes between `pure` and impure functions

**Further reading:**
- [D Language Specification - Function Attributes](https://dlang.org/spec/function.html#pure-functions)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Impure Elemental Functions (since Fortran 2008)
impure elemental subroutine log_value(x)
    real, intent(in) :: x
    print *, "Value: ", x  ! I/O is a side effect
end subroutine
```

**Special features:**
- `IMPURE` allows side effects in elemental procedures (since Fortran 2008)
- Standard functions without `PURE` are implicitly impure
- `IMPURE ELEMENTAL` combines elemental application with side effects

**Further reading:**
- [Fortran Wiki - Impure elemental procedures](https://fortranwiki.org/fortran/show/Impure+elemental+procedures)

</TabItem>
</Tabs>


## 7.3.3. Generators and Iterators

### Generator Functions


Functions that can generate a sequence of values without computing all values at once. They can pause their execution and resume later, enabling efficient processing of large or infinite sequences.


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

**Special features:**
- Supports Generator Functions with `yield return` (since C# 2.0)
- Returns `IEnumerable<T>`
- Lazy Evaluation

**Further reading:**
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
% Generator-like behavior via backtracking
generate_number(N, X) :-
    between(0, N, X).

% Individual values are generated sequentially via backtracking
?- generate_number(4, X).
%  X = 0 ;
%  X = 1 ;
%  X = 2 ;
%  X = 3 ;
%  X = 4

% Collect all values with findall/3
?- findall(X, generate_number(4, X), Numbers).
%  Numbers = [0, 1, 2, 3, 4]
```

**Special features:**
- Prolog has no `yield`-based generator syntax, but backtracking provides similar functionality
- For queries with multiple solutions, Prolog generates values lazily via backtracking (`;` for next solution)
- `between/3` is a built-in predicate for generating number sequences
- `findall/3`, `bagof/3` and `setof/3` collect all generated solutions in a list

**Further reading:**
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

**Special features:**
- Supports Generator Functions with `yield` (since Python 2.2)
- Returns generator object
- Lazy Evaluation

**Further reading:**
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

**Special features:**
- Supports Generator Functions with `yield` and blocks
- Returns Enumerator
- Lazy Evaluation

**Further reading:**
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

**Special features:**
- Supports Generator Functions with iterators
- Returns `Iterator<T>`
- Lazy Evaluation

**Further reading:**
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
- `coroutine.yield()` pauses execution and returns a value
- `coroutine.wrap()` gibt eine Funktion zurück, die kompatibel mit `for`-Schleifen ist
- Generatoren können lazy und unendlich sein

**Weiterführende Links:**
- [Lua Reference Manual - Coroutines](https://www.lua.org/manual/5.4/manual.html#2.6)

</TabItem>
</Tabs>



---

### Yield / Resume (Generator Control Flow)


Control flow mechanism that allows generator functions to pause their execution (`yield`) and resume later at the same point (`resume`). Enables step-by-step value generation and switching control between generator and caller.


<Tabs availableTabs={['csharp', 'dart', 'javascript', 'kotlin', 'lua', 'php', 'python', 'ruby', 'typescript']}>
<TabItem value="csharp" label="C#">

```csharp
IEnumerable<int> GenerateNumbers(int n) {
    for (int i = 0; i < n; i++) {
        yield return i;  // Pauses here, returns value
        // Resumes here on next call
    }
}

var generator = GenerateNumbers(5);
var enumerator = generator.GetEnumerator();
while (enumerator.MoveNext()) {  // Resume
    Console.WriteLine(enumerator.Current);
}
```

**Special features:**
- Supports `yield return` for pause (since C# 2.0)
- `MoveNext()` performs resume
- State is saved between calls

**Further reading:**
- [Microsoft C# Documentation - yield](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/statements/yield)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
Iterable<int> generateNumbers(int n) sync* {
    for (int i = 0; i < n; i++) {
        yield i;  // Pauses here, returns value
        // Resumes here on next call
    }
}

var generator = generateNumbers(5);
var iterator = generator.iterator;
while (iterator.moveNext()) {  // Resume
    print(iterator.current);
}
```

**Special features:**
- Supports `yield` for pause (since Dart 2.0)
- `moveNext()` performs resume
- State is saved between calls

**Further reading:**
- [Dart Language Tour - Generators](https://dart.dev/guides/language/language-tour#generators)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
function* generateNumbers(n) {
    for (let i = 0; i < n; i++) {
        yield i;  // Pauses here, returns value
        // Resumes here on next call
    }
}

const generator = generateNumbers(5);
let result = generator.next();  // Resume
while (!result.done) {
    console.log(result.value);
    result = generator.next();  // Resume
}
```

**Special features:**
- Supports `yield` for pause (since ES6)
- `next()` performs resume
- State is saved between calls

**Further reading:**
- [MDN Web Docs - Generator Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
fun generateNumbers(n: Int): Sequence<Int> = sequence {
    for (i in 0 until n) {
        yield(i)  // Pauses here, returns value
        // Resumes here on next call
    }
}

val generator = generateNumbers(5)
val iterator = generator.iterator()
while (iterator.hasNext()) {  // Resume
    println(iterator.next())
}
```

**Special features:**
- Supports `yield` for pause (since Kotlin 1.3)
- `next()` performs resume
- State is saved between calls

**Further reading:**
- [Kotlin Documentation - Sequences](https://kotlinlang.org/docs/sequences.html)

</TabItem>
<TabItem value="php" label="PHP">

```php
function generateNumbers($n) {
    for ($i = 0; $i < $n; $i++) {
        yield $i;  // Pauses here, returns value
        // Resumes here on next call
    }
}

$generator = generateNumbers(5);
while ($generator->valid()) {  // Resume
    echo $generator->current() . "\n";
    $generator->next();  // Resume
}
```

**Special features:**
- Supports `yield` for pause (since PHP 5.5)
- `next()` performs resume
- State is saved between calls

**Further reading:**
- [PHP Documentation - Generators](https://www.php.net/manual/en/language.generators.php)

</TabItem>
<TabItem value="python" label="Python">

```python
def generate_numbers(n):
    for i in range(n):
        yield i  # Pauses here, returns value
        # Resumes here on next call

generator = generate_numbers(5)
while True:
    try:
        value = next(generator)  # Resume
        print(value)
    except StopIteration:
        break
```

**Special features:**
- Supports `yield` for pause (since Python 2.2)
- `next()` performs resume
- State is saved between calls

**Further reading:**
- [Python Documentation - Generators](https://docs.python.org/3/tutorial/classes.html#generators)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
def generate_numbers(n)
    return enum_for(:generate_numbers, n) unless block_given?
    (0...n).each do |i|
        yield i  # Pauses here, returns value
        # Resumes here on next call
    end
end

generator = generate_numbers(5)
generator.each do |value|  # Resume
    puts value
end
```

**Special features:**
- Supports `yield` for pause
- `each` performs resume
- State is saved between calls

**Further reading:**
- [Ruby Documentation - Enumerators](https://ruby-doc.org/core-3.1.0/Enumerator.html)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
function* generateNumbers(n: number): Generator<number> {
    for (let i = 0; i < n; i++) {
        yield i;  // Pauses here, returns value
        // Resumes here on next call
    }
}

const generator = generateNumbers(5);
let result = generator.next();  // Resume
while (!result.done) {
    console.log(result.value);
    result = generator.next();  // Resume
}
```

**Special features:**
- Supports `yield` for pause (since ES6)
- `next()` performs resume
- State is saved between calls

**Further reading:**
- [TypeScript Handbook - Generators](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Yield / Resume with Coroutines
local co = coroutine.create(function(x)
    print("First Resume:", x)
    local y = coroutine.yield(x * 2)    -- Yield with return value
    print("Second Resume:", y)
    local z = coroutine.yield(y + 1)    -- Yield with return value
    print("Third Resume:", z)
    return z * 3                         -- Final return value
end)

local ok, val = coroutine.resume(co, 10)   -- First resume: 10
print(val)                                   -- 20 (yielded value)

ok, val = coroutine.resume(co, 20)          -- Second resume: 20
print(val)                                   -- 21 (yielded value)

ok, val = coroutine.resume(co, 30)          -- Third resume: 30
print(val)                                   -- 90 (return value)

-- Check status
print(coroutine.status(co))                  -- "dead"
```

**Special features:**
- `coroutine.yield(...)` pauses the coroutine and returns values to `resume`
- `coroutine.resume(co, ...)` resumes the coroutine and passes values to `yield`
- Bidirectional communication between `resume` and `yield`
- Coroutine status: `"running"`, `"suspended"`, `"normal"`, `"dead"`
- `coroutine.wrap()` as simplified alternative to `create`/`resume`

**Further reading:**
- [Lua Reference Manual - Coroutine Manipulation](https://www.lua.org/manual/5.4/manual.html#6.2)

</TabItem>
</Tabs>



---

### Generator Expressions


Lazy-evaluated expressions that generate values on-the-fly without storing all values in memory. Similar to comprehensions, but with delayed evaluation for better memory efficiency.


<Tabs availableTabs={['clojure', 'elixir', 'fsharp', 'haskell', 'julia', 'python', 'scala']}>
<TabItem value="clojure" label="Clojure">

```clojure
;; Generator Expression (lazy-seq)
(def numbers (range 1 6))
(def squared (map #(* % %) numbers))

;; Lazy Evaluation
(take 3 squared)
```

**Special features:**
- Uses `lazy-seq` for lazy sequences
- `map` creates lazy sequences
- Values are only computed when needed

**Further reading:**
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

**Special features:**
- Uses `Stream` for lazy evaluation
- `Stream.map` creates lazy streams
- Values are only computed on enumeration

**Further reading:**
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

**Special features:**
- Uses `seq { }` for lazy sequences
- Syntax: `seq { for variable in collection -> expression }`
- Values are only computed on enumeration

**Further reading:**
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

**Special features:**
- Haskell lists are lazy by default
- List comprehensions are lazy
- Values are only computed when needed

**Further reading:**
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

**Special features:**
- Syntax: `(expression for variable in collection)`
- Values are only computed on iteration
- More memory-efficient than list comprehensions

**Further reading:**
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

**Special features:**
- Uses `LazyList` for lazy sequences (since Scala 2.13)
- `Stream` is deprecated, `LazyList` is the modern alternative
- Values are only computed on enumeration

**Further reading:**
- [Scala Documentation - LazyList](https://www.scala-lang.org/api/current/scala/collection/immutable/LazyList.html)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Generator Expression (lazy)
gen = (x^2 for x in 1:10)

# Usage in functions
total = sum(x^2 for x in 1:10)  # 385

# With filter
even_squares = sum(x^2 for x in 1:10 if iseven(x))  # 220

# collect() materializes the generator
squares = collect(x^2 for x in 1:5)  # [1, 4, 9, 16, 25]
```

**Special features:**
- Generator Expressions are lazy (no memory for intermediate results)
- Can be used directly in function calls
- Support filters with `if`

**Further reading:**
- [Julia Documentation - Generators](https://docs.julialang.org/en/v1/manual/arrays/#Generator-Expressions)

</TabItem>
</Tabs>



---

### Iterators and Generators


Mechanisms for sequential iteration over collections or for generating values on-the-fly. Iterators enable iteration over data structures, while generators can generate values lazily.


<Tabs availableTabs={['cpp', 'csharp', 'dart', 'java', 'javascript', 'julia', 'kotlin', 'lean4', 'lua', 'nim', 'php', 'python', 'rust', 'scala', 'swift', 'typescript']} yellowTabs={['prolog']} orangeTabs={['go']}>
<TabItem value="cpp" label="C++">

```cpp
// Iterator
std::vector<int> numbers = {1, 2, 3, 4, 5};
for (auto it = numbers.begin(); it != numbers.end(); ++it) {
    std::cout << *it << std::endl;
}

// Range-based for (since C++11)
for (const auto& n : numbers) {
    std::cout << n << std::endl;
}
```

**Special features:**
- Uses Iterator pattern
- `begin()` and `end()` for iterator ranges
- Range-based for uses iterators internally

**Further reading:**
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

**Special features:**
- Uses `yield return` for generators
- `IEnumerable<T>` for iterators
- Lazy evaluation with `yield`

**Further reading:**
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

**Special features:**
- Uses `sync*` for synchronous generators
- Uses `async*` for asynchronous generators
- `yield` for value generation

**Further reading:**
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

**Special features:**
- Go has no explicit iterators
- Uses channels for generator pattern
- `range` over channels for iteration

**Further reading:**
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

// Enhanced for (since Java 5.0)
for (Integer n : numbers) {
    System.out.println(n);
}
```

**Special features:**
- Uses `Iterator<T>` interface
- `hasNext()` and `next()` methods
- Enhanced for uses iterators internally

**Further reading:**
- [Oracle Java Documentation - Iterator](https://docs.oracle.com/javase/8/docs/api/java/util/Iterator.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Generator (since ES6)
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

**Special features:**
- Uses `function*` for generators (since ES6)
- `yield` for value generation
- `for...of` for iteration over iterables

**Further reading:**
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

**Special features:**
- Uses `sequence { }` for generators
- `yield()` for value generation
- Lazy evaluation

**Further reading:**
- [Kotlin Documentation - Sequences](https://kotlinlang.org/docs/sequences.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```haskell
-- Iteration over lists and arrays
def main : IO Unit := do
  let numbers := [1, 2, 3, 4, 5]
  for n in numbers do
    IO.println s!"{n}"

  -- Array iteration
  for n in #[10, 20, 30] do
    IO.println s!"{n}"

-- ForIn Typeclass for custom iteration
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

**Special features:**
- `for ... in ... do` syntax for iteration over collections
- `ForIn` Typeclass enables custom iteration (similar to Rust's `Iterator` trait)
- Lists, arrays, ranges and other collections implement `ForIn`
- Monadic iteration: `for` loops can be used in any monad

**Further reading:**
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

**Special features:**
- Uses `yield` for generators
- Generator functions are lazy
- `next()` for manual iteration

**Further reading:**
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

// For loop (uses iterators)
for n in numbers.iter() {
    println!("{}", n);
}
```

**Special features:**
- Uses `Iterator` trait
- `next()` returns `Option<T>`
- `for` uses iterators internally

**Further reading:**
- [Rust Documentation - Iterators](https://doc.rust-lang.org/book/ch13-02-iterators.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Iterator
val numbers = Iterator(1, 2, 3, 4, 5)
while (numbers.hasNext) {
    println(numbers.next())
}

// For comprehension (uses iterators)
for (n <- Iterator(1, 2, 3, 4, 5)) {
    println(n)
}
```

**Special features:**
- Uses `Iterator[T]` trait
- `hasNext()` and `next()` methods
- For comprehensions use iterators

**Further reading:**
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

**Special features:**
- Uses `Sequence` protocol
- `makeIterator()` for iterator creation
- `IteratorProtocol` for iterator implementation

**Further reading:**
- [Swift Documentation - Sequences](https://developer.apple.com/documentation/swift/sequence)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Generator (since ES6)
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

**Special features:**
- Uses `function*` for generators (since ES6)
- `yield` for value generation
- `Generator<T>` type for typing

**Further reading:**
- [TypeScript Handbook - Generators](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Iterator protocol: implement iterate()
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

# Channel as generator
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

**Special features:**
- Iterator protocol based on `iterate(collection, state)` → `(element, new_state)` or `nothing`
- `Channel` can be used as generator replacement
- Lazy evaluation through generator expressions

**Further reading:**
- [Julia Documentation - Interfaces](https://docs.julialang.org/en/v1/manual/interfaces/)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Built-in iterators
local t = {10, 20, 30}
for i, v in ipairs(t) do     -- Index-based iterator
    print(i, v)
end

for k, v in pairs(t) do      -- Key-value iterator
    print(k, v)
end

-- Custom iterator (closure-based)
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

-- Coroutine-based generator
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

**Special features:**
- Iterators are based on the generic `for` protocol (iterator function, state value, control variable)
- Built-in iterators: `pairs()`, `ipairs()`, `next()`
- Closure-based iterators (stateless and stateful)
- `coroutine.wrap()` creates coroutine-based generators
- Lua 5.2+: `__pairs` and `__ipairs` metamethods for custom iteration

**Further reading:**
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

**Special features:**
- Inline iterators: resolved at compile time (zero-cost)
- Closure iterators: maintain state between calls
- `yield` returns values and pauses the iterator

**Further reading:**
- [Nim Documentation - Iterators](https://nim-lang.org/docs/manual.html#iterators-and-the-for-statement)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
// Iterator interface
class NumberIterator implements Iterator {
    private int $current = 0;

    public function __construct(private int $max) {}
    public function current(): int { return $this->current; }
    public function key(): int { return $this->current; }
    public function next(): void { $this->current++; }
    public function rewind(): void { $this->current = 0; }
    public function valid(): bool { return $this->current < $this->max; }
}

// Generator (since PHP 5.5)
function fibonacci(): Generator {
    [$a, $b] = [0, 1];
    while (true) {
        yield $a;
        [$a, $b] = [$b, $a + $b];
    }
}
?>
```

**Special features:**
- `Iterator` interface for custom iterators
- `Generator` with `yield` since PHP 5.5
- `IteratorAggregate` as alternative to `Iterator`

**Further reading:**
- [PHP Documentation - Iterators](https://www.php.net/manual/en/language.oop5.iterations.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Iteration over lists via recursion and backtracking
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

% Generator-like: backtracking generates values on-the-fly
fibonacci(0, 0).
fibonacci(1, 1).
fibonacci(N, F) :-
    N > 1,
    N1 is N - 1,
    N2 is N - 2,
    fibonacci(N1, F1),
    fibonacci(N2, F2),
    F is F1 + F2.

% Iteration with forall/2
?- forall(between(0, 5, N), (fibonacci(N, F), format("fib(~w) = ~w~n", [N, F]))).
```

**Special features:**
- Prolog has no iterator interface in the sense of imperative languages
- Iteration is realized through recursion and backtracking
- `forall/2` iterates over all solutions of a goal
- `between/3` generates integers in a range, similar to `range()` in Python
- `findall/3` collects all solutions as a list

**Further reading:**
- [SWI-Prolog Documentation - forall/2](https://www.swi-prolog.org/pldoc/man?predicate=forall/2)

</TabItem>
</Tabs>


