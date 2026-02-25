---
slug: /ausfuehrungsmodell/order-of-evaluation
title: 17.2. Order of Evaluation
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 17.2. Order of Evaluation

Reihenfolge der Auswertung und Seiteneffekte.

## 17.2.1. Evaluation Order

Die Reihenfolge, in der Ausdrücke und Funktionsargumente ausgewertet werden. Die meisten Sprachen definieren eine spezifische Auswertungsreihenfolge (z.B. links-nach-rechts), während einige die Reihenfolge undefiniert lassen.

### Sprachen {#sprachen}

<Tabs availableTabs={['ada', 'c', 'carbon', 'clojure', 'common-lisp', 'crystal', 'csharp', 'cpp', 'd', 'dart', 'eiffel', 'elixir', 'elm', 'erlang', 'fsharp', 'fortran', 'gleam', 'go', 'groovy', 'haskell', 'haxe', 'idris', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'lua', 'matlab', 'mercury', 'mojo', 'nim', 'objective-c', 'object-pascal', 'ocaml', 'octave', 'odin', 'perl', 'php', 'prolog', 'purescript', 'python', 'r', 'racket', 'roc', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'vbnet', 'v', 'wolfram-language', 'zig']}>
<TabItem value="ada" label="Ada">

```ada
function Add(x, y: Integer) return Integer is
begin
    return x + y;
end Add;

-- Aufruf
result := Add(Compute(1), Compute(2));
-- Argumente werden links-nach-rechts ausgewertet
```

**Besonderheiten:**
- Argumente werden links-nach-rechts ausgewertet
- Die Reihenfolge ist garantiert

**Weiterführende Links:**
- [Ada Reference Manual - Expression Evaluation](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-4-5.html)

</TabItem>
<TabItem value="c" label="C">

```c
int add(int x, int y) {
    return x + y;
}

// Aufruf
int result = add(compute(1), compute(2));
// Die Reihenfolge der Argumentauswertung ist undefiniert
```

**Besonderheiten:**
- Die Reihenfolge der Argumentauswertung ist undefiniert
- Compiler können die Reihenfolge optimieren

**Weiterführende Links:**
- [C Standard - Expression Evaluation](https://www.open-std.org/jtc1/sc22/wg14/www/docs/n1570.pdf)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
fn Add(x: i32, y: i32) -> i32 {
    return x + y;
}

// Aufruf
var result: i32 = Add(Compute(1), Compute(2));
// Die Reihenfolge der Argumentauswertung ist definiert (links-nach-rechts)
```

**Besonderheiten:**
- Carbon zielt darauf ab, kein undefiniertes Verhalten zu haben
- Die Reihenfolge der Argumentauswertung ist definiert (links-nach-rechts)
- Im Gegensatz zu C++ vermeidet Carbon bewusst unspezifizierte Evaluation Order
- Experimentelle Sprache, Syntax kann sich noch ändern

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>

<TabItem value="clojure" label="Clojure">

```clojure
(defn compute [x]
  (println (str "Computing: " x))
  (* x 10))

(defn add [x y]
  (+ x y))

;; Argumente werden links-nach-rechts ausgewertet
(def result (add (compute 1) (compute 2)))
;; Ausgabe: Computing: 1, dann Computing: 2
;; result = 30
```

**Besonderheiten:**
- Argumente werden links-nach-rechts ausgewertet
- Die Reihenfolge ist garantiert

**Weiterführende Links:**
- [Clojure Documentation - Evaluation](https://clojure.org/reference/evaluation)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
(defun add (x y)
  (+ x y))

;; Aufruf
(setf result (add (compute 1) (compute 2)))
;; Argumente werden links-nach-rechts ausgewertet
```

**Besonderheiten:**
- Argumente werden links-nach-rechts ausgewertet
- Die Reihenfolge ist garantiert

**Weiterführende Links:**
- [Common Lisp HyperSpec - Function Calls](http://www.lispworks.com/documentation/HyperSpec/Body/03_ababc.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
def add(x : Int32, y : Int32) : Int32
  x + y
end

# Aufruf
result = add(compute(1), compute(2))
# Argumente werden links-nach-rechts ausgewertet
```

**Besonderheiten:**
- Argumente werden links-nach-rechts ausgewertet
- Die Reihenfolge ist garantiert

**Weiterführende Links:**
- [Crystal Documentation - Methods](https://crystal-lang.org/reference/1.11/syntax_and_semantics/methods_and_procs.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
int Add(int x, int y) {
    return x + y;
}

// Aufruf
int result = Add(Compute(1), Compute(2));
// Argumente werden links-nach-rechts ausgewertet
```

**Besonderheiten:**
- Argumente werden links-nach-rechts ausgewertet
- Die Reihenfolge ist garantiert

**Weiterführende Links:**
- [Microsoft C# Documentation - Expression Evaluation](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/expressions)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
int add(int x, int y) {
    return x + y;
}

// Aufruf
int result = add(compute(1), compute(2));
// Die Reihenfolge der Argumentauswertung ist undefiniert
```

**Besonderheiten:**
- Die Reihenfolge der Argumentauswertung ist undefiniert
- Compiler können die Reihenfolge optimieren

**Weiterführende Links:**
- [cppreference.com - Expression Evaluation](https://en.cppreference.com/w/cpp/language/eval_order)

</TabItem>
<TabItem value="d" label="D">

```d
int add(int x, int y) {
    return x + y;
}

// Aufruf
int result = add(compute(1), compute(2));
// Die Reihenfolge der Argumentauswertung ist undefiniert
```

**Besonderheiten:**
- Die Reihenfolge der Argumentauswertung ist undefiniert
- Ähnlich wie C++

**Weiterführende Links:**
- [D Language Documentation - Expression Evaluation](https://dlang.org/spec/expression.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
int add(int x, int y) {
  return x + y;
}

// Aufruf
int result = add(compute(1), compute(2));
// Argumente werden links-nach-rechts ausgewertet
```

**Besonderheiten:**
- Argumente werden links-nach-rechts ausgewertet
- Die Reihenfolge ist garantiert

**Weiterführende Links:**
- [Dart Documentation - Functions](https://dart.dev/language/functions)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
add (x, y: INTEGER): INTEGER
    do
        Result := x + y
    end

-- Aufruf
result := add(compute(1), compute(2))
-- Argumente werden links-nach-rechts ausgewertet
```

**Besonderheiten:**
- Argumente werden links-nach-rechts ausgewertet
- Die Reihenfolge ist garantiert

**Weiterführende Links:**
- [Eiffel Documentation - Expression Evaluation](https://www.eiffel.org/doc/eiffel/Expressions)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
def add(x, y) do
  x + y
end

# Aufruf
result = add(compute(1), compute(2))
# Argumente werden links-nach-rechts ausgewertet
```

**Besonderheiten:**
- Argumente werden links-nach-rechts ausgewertet
- Die Reihenfolge ist garantiert

**Weiterführende Links:**
- [Elixir Documentation - Functions](https://elixir-lang.org/getting-started/modules-and-functions.html)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
add : Int -> Int -> Int
add x y = x + y

-- Aufruf
result = add (compute 1) (compute 2)
-- Argumente werden links-nach-rechts ausgewertet
```

**Besonderheiten:**
- Argumente werden links-nach-rechts ausgewertet
- Die Reihenfolge ist garantiert

**Weiterführende Links:**
- [Elm Documentation - Functions](https://guide.elm-lang.org/core_language.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
add(X, Y) ->
    X + Y.

%% Aufruf
Result = add(compute(1), compute(2)).
%% Argumente werden links-nach-rechts ausgewertet
```

**Besonderheiten:**
- Argumente werden links-nach-rechts ausgewertet
- Die Reihenfolge ist garantiert

**Weiterführende Links:**
- [Erlang Documentation - Functions](https://www.erlang.org/doc/reference_manual/functions.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
let add x y = x + y

// Aufruf
let result = add (compute 1) (compute 2)
// Argumente werden links-nach-rechts ausgewertet
```

**Besonderheiten:**
- Argumente werden links-nach-rechts ausgewertet
- Die Reihenfolge ist garantiert

**Weiterführende Links:**
- [F# Documentation - Functions](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/functions/)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
function add(x, y) result(res)
    integer, intent(in) :: x, y
    integer :: res
    res = x + y
end function add

! Aufruf
result = add(compute(1), compute(2))
! Die Reihenfolge der Argumentauswertung ist undefiniert
```

**Besonderheiten:**
- Die Reihenfolge der Argumentauswertung ist undefiniert
- Compiler können die Reihenfolge optimieren

**Weiterführende Links:**
- [Fortran Standard - Expression Evaluation](https://gcc.gnu.org/onlinedocs/gfortran/Argument-passing.html)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
pub fn add(x: Int, y: Int) -> Int {
  x + y
}

// Aufruf
let result = add(compute(1), compute(2))
// Argumente werden links-nach-rechts ausgewertet
```

**Besonderheiten:**
- Argumente werden links-nach-rechts ausgewertet
- Die Reihenfolge ist garantiert

**Weiterführende Links:**
- [Gleam Documentation - Functions](https://gleam.run/documentation/)

</TabItem>
<TabItem value="go" label="Go">

```go
func add(x, y int) int {
    return x + y
}

// Aufruf
result := add(compute(1), compute(2))
// Die Reihenfolge der Argumentauswertung ist undefiniert
```

**Besonderheiten:**
- Die Reihenfolge der Argumentauswertung ist undefiniert
- Compiler können die Reihenfolge optimieren

**Weiterführende Links:**
- [Go Documentation - Expression Evaluation](https://go.dev/ref/spec#Order_of_evaluation)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
def add(x, y) {
    x + y
}

// Aufruf
def result = add(compute(1), compute(2))
// Argumente werden links-nach-rechts ausgewertet
```

**Besonderheiten:**
- Argumente werden links-nach-rechts ausgewertet
- Die Reihenfolge ist garantiert

**Weiterführende Links:**
- [Groovy Documentation - Methods](https://groovy-lang.org/documentation.html)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
add :: Int -> Int -> Int
add x y = x + y

compute :: Int -> Int
compute n = n * 2

-- Aufruf
result = add (compute 1) (compute 2)
-- Auswertungsreihenfolge hängt vom Bedarf ab (Lazy Evaluation)
```

**Besonderheiten:**
- Haskell verwendet Lazy Evaluation: Argumente werden erst bei Bedarf ausgewertet
- Die Auswertungsreihenfolge ist für reine Ausdrücke **nicht** garantiert
- In der IO-Monade ist die Reihenfolge durch die monadische Sequenzierung definiert
- GHC kann durch Optimierungen die Auswertungsreihenfolge ändern

**Weiterführende Links:**
- [Haskell Wiki - Lazy Evaluation](https://wiki.haskell.org/Lazy_evaluation)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
function add(x: Int, y: Int): Int {
    return x + y;
}

// Aufruf
var result = add(compute(1), compute(2));
// Die Reihenfolge der Argumentauswertung ist undefiniert
```

**Besonderheiten:**
- Die Reihenfolge der Argumentauswertung ist undefiniert
- Abhängig vom Ziel-Compiler

**Weiterführende Links:**
- [Haxe Documentation - Functions](https://haxe.org/manual/expression-function.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
add : Int -> Int -> Int
add x y = x + y

compute : Int -> Int
compute x = x * 2

-- Aufruf
result : Int
result = add (compute 1) (compute 2)
-- Argumente werden links-nach-rechts ausgewertet
```

**Besonderheiten:**
- Argumente werden links-nach-rechts ausgewertet
- Die Reihenfolge ist garantiert

**Weiterführende Links:**
- [Idris 2 Documentation - Types and Functions](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html)

</TabItem>
<TabItem value="java" label="Java">

```java
int add(int x, int y) {
    return x + y;
}

// Aufruf
int result = add(compute(1), compute(2));
// Argumente werden links-nach-rechts ausgewertet
```

**Besonderheiten:**
- Argumente werden links-nach-rechts ausgewertet
- Die Reihenfolge ist garantiert

**Weiterführende Links:**
- [Oracle Java Documentation - Expression Evaluation](https://docs.oracle.com/javase/specs/jls/se17/html/jls-15.html#jls-15.7)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
function add(x, y) {
    return x + y;
}

// Aufruf
let result = add(compute(1), compute(2));
// Argumente werden links-nach-rechts ausgewertet
```

**Besonderheiten:**
- Argumente werden links-nach-rechts ausgewertet
- Die Reihenfolge ist garantiert

**Weiterführende Links:**
- [MDN Web Docs - Expression Evaluation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
function add(x, y)
    x + y
end

# Aufruf
result = add(compute(1), compute(2))
# Argumente werden links-nach-rechts ausgewertet
```

**Besonderheiten:**
- Argumente werden links-nach-rechts ausgewertet
- Die Reihenfolge ist garantiert

**Weiterführende Links:**
- [Julia Documentation - Functions](https://docs.julialang.org/en/v1/manual/functions/)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
// Strikte Links-nach-rechts-Auswertung
fun add(x : int, y : int) : int
  x + y

fun compute(n : int) : int
  println("Berechne " ++ n.show)
  n * 10

fun main()
  val result = add(compute(1), compute(2))
  // Gibt aus: "Berechne 1", dann "Berechne 2"
  println(result.show)
```

**Besonderheiten:**
- Strikte Links-nach-rechts-Auswertung aller Argumente
- Auswertungsreihenfolge ist garantiert und deterministisch
- Effektsystem trackt Seiteneffekte, sodass die Reihenfolge typsicher ist

**Weiterführende Links:**
- [Koka Documentation - Functions](https://koka-lang.github.io/koka/doc/book.html#sec-basics)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
fun add(x: Int, y: Int): Int {
    return x + y
}

// Aufruf
val result = add(compute(1), compute(2))
// Argumente werden links-nach-rechts ausgewertet
```

**Besonderheiten:**
- Argumente werden links-nach-rechts ausgewertet
- Die Reihenfolge ist garantiert

**Weiterführende Links:**
- [Kotlin Documentation - Functions](https://kotlinlang.org/docs/functions.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
def add (x y : Nat) : Nat := x + y

-- Argumente werden links-nach-rechts ausgewertet (eager)
#eval add (1 + 2) (3 + 4)  -- 10
-- Erst (1+2)=3, dann (3+4)=7, dann add 3 7 = 10
```

**Besonderheiten:**
- Lean 4 ist strikt: Argumente werden links-nach-rechts, vollständig ausgewertet.
- Die Auswertungsreihenfolge ist determiniert und garantiert.
- In `do`-Notation werden Ausdrücke sequentiell ausgewertet.

**Weiterführende Links:**
- [Lean 4 Documentation - Functions](https://lean-lang.org/lean4/doc/functions.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
function add(x, y)
    return x + y
end

-- Aufruf
local result = add(compute(1), compute(2))
-- Argumente werden links-nach-rechts ausgewertet
```

**Besonderheiten:**
- Argumente werden links-nach-rechts ausgewertet
- Die Reihenfolge ist garantiert

**Weiterführende Links:**
- [Lua Documentation - Functions](https://www.lua.org/manual/5.4/manual.html#3.4.11)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
function res = add(x, y)
    res = x + y;
end

% Aufruf
result = add(compute(1), compute(2));
% Die Reihenfolge der Argumentauswertung ist undefiniert
```

**Besonderheiten:**
- Die Reihenfolge der Argumentauswertung ist undefiniert
- Compiler können die Reihenfolge optimieren

**Weiterführende Links:**
- [MATLAB Documentation - Functions](https://www.mathworks.com/help/matlab/ref/function.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
:- module eval_order.
:- interface.
:- import_module io.
:- pred main(io::di, io::uo) is det.
:- implementation.
:- import_module int, string.

:- func compute(int) = int.
compute(X) = X * 10.

:- func add(int, int) = int.
add(X, Y) = X + Y.

main(!IO) :-
    % Goals in einer Konjunktion werden links-nach-rechts ausgewertet
    Result = add(compute(1), compute(2)),
    io.format("Ergebnis: %d\n", [i(Result)], !IO).
```

**Besonderheiten:**
- Goals in einer Konjunktion werden strikt von links nach rechts ausgewertet
- Funktionsargumente werden vor dem Aufruf ausgewertet (strikte Evaluation)
- Der Compiler kann die Reihenfolge bei reinen Prädikaten ohne beobachtbare Unterschiede optimieren
- Das Mode-System bestimmt Datenfluss und beeinflusst die zulässige Auswertungsreihenfolge

**Weiterführende Links:**
- [Mercury Language Reference - Semantics](https://www.mercurylang.org/information/doc-release/mercury_ref/Semantics.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
fn add(x: Int, y: Int) -> Int:
    return x + y

# Aufruf
var result = add(compute(1), compute(2))
# Die Reihenfolge der Argumentauswertung ist undefiniert
```

**Besonderheiten:**
- Die Reihenfolge der Argumentauswertung ist undefiniert
- Ähnlich wie Python

**Weiterführende Links:**
- [Mojo Documentation - Functions](https://docs.modular.com/mojo/manual/functions/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
proc add(x, y: int): int =
    x + y

# Aufruf
var result = add(compute(1), compute(2))
# Die Reihenfolge der Argumentauswertung ist undefiniert
```

**Besonderheiten:**
- Die Reihenfolge der Argumentauswertung ist undefiniert
- Compiler können die Reihenfolge optimieren

**Weiterführende Links:**
- [Nim Documentation - Procedures](https://nim-lang.org/docs/manual.html#procedures)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
- (int)add:(int)x withY:(int)y {
    return x + y;
}

// Aufruf
int result = [self add:compute(1) withY:compute(2)];
// Die Reihenfolge der Argumentauswertung ist undefiniert
```

**Besonderheiten:**
- Die Reihenfolge der Argumentauswertung ist undefiniert
- Compiler können die Reihenfolge optimieren

**Weiterführende Links:**
- [Objective-C Documentation - Methods](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/DefiningClasses/DefiningClasses.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
function Add(x, y: Integer): Integer;
begin
    Result := x + y;
end;

// Aufruf
var
    result: Integer;
begin
    result := Add(Compute(1), Compute(2));
    // Argumente werden links-nach-rechts ausgewertet
end;
```

**Besonderheiten:**
- Argumente werden links-nach-rechts ausgewertet
- Die Reihenfolge ist garantiert

**Weiterführende Links:**
- [Object Pascal Documentation - Procedures](https://www.freepascal.org/docs-html/ref/refsu68.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
let add x y = x + y

(* Aufruf *)
let result = add (compute 1) (compute 2)
(* Argumente werden links-nach-rechts ausgewertet *)
```

**Besonderheiten:**
- Argumente werden links-nach-rechts ausgewertet
- Die Reihenfolge ist garantiert

**Weiterführende Links:**
- [OCaml Documentation - Functions](https://ocaml.org/docs/first-hour)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
function res = add(x, y)
    res = x + y;
end

% Aufruf
result = add(compute(1), compute(2));
% Die Reihenfolge der Argumentauswertung ist undefiniert
```

**Besonderheiten:**
- Die Reihenfolge der Argumentauswertung ist undefiniert
- Ähnlich wie MATLAB

**Weiterführende Links:**
- [Octave Documentation - Functions](https://octave.org/doc/v8.1.0/Functions-and-Scripts.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
add :: proc(x, y: int) -> int {
    return x + y
}

// Aufruf
result := add(compute(1), compute(2))
// Die Reihenfolge der Argumentauswertung ist undefiniert
```

**Besonderheiten:**
- Die Reihenfolge der Argumentauswertung ist undefiniert
- Ähnlich wie C

**Weiterführende Links:**
- [Odin Documentation - Procedures](https://odin-lang.org/docs/overview/#procedures)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
sub add {
    my ($x, $y) = @_;
    return $x + $y;
}

# Aufruf
my $result = add(compute(1), compute(2));
# Argumente werden links-nach-rechts ausgewertet
```

**Besonderheiten:**
- Argumente werden links-nach-rechts ausgewertet
- Die Reihenfolge ist garantiert

**Weiterführende Links:**
- [Perl Documentation - Functions](https://perldoc.perl.org/perlsub)

</TabItem>
<TabItem value="php" label="PHP">

```php
function add($x, $y) {
    return $x + $y;
}

// Aufruf
$result = add(compute(1), compute(2));
// Argumente werden links-nach-rechts ausgewertet
```

**Besonderheiten:**
- Argumente werden links-nach-rechts ausgewertet
- Die Reihenfolge ist garantiert

**Weiterführende Links:**
- [PHP Documentation - Functions](https://www.php.net/manual/en/functions.user-defined.php)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
add :: Int -> Int -> Int
add x y = x + y

-- Aufruf
result = add (compute 1) (compute 2)
-- Argumente werden links-nach-rechts ausgewertet
```

**Besonderheiten:**
- Argumente werden links-nach-rechts ausgewertet
- Die Reihenfolge ist garantiert

**Weiterführende Links:**
- [PureScript Documentation - Functions](https://www.purescript.org/documentation/)

</TabItem>
<TabItem value="python" label="Python">

```python
def add(x, y):
    return x + y

# Aufruf
result = add(compute(1), compute(2))
# Argumente werden links-nach-rechts ausgewertet
```

**Besonderheiten:**
- Argumente werden links-nach-rechts ausgewertet
- Die Reihenfolge ist garantiert

**Weiterführende Links:**
- [Python Documentation - Expression Evaluation](https://docs.python.org/3/reference/expressions.html#evaluation-order)

</TabItem>
<TabItem value="r" label="R">

```r
add <- function(x, y) {
    x + y
}

# Aufruf
result <- add(compute(1), compute(2))
# Argumente werden links-nach-rechts ausgewertet
```

**Besonderheiten:**
- Argumente werden links-nach-rechts ausgewertet
- Die Reihenfolge ist garantiert
- R verwendet Lazy Evaluation für Funktionsargumente

**Weiterführende Links:**
- [R Documentation - Functions](https://cran.r-project.org/doc/manuals/r-release/R-lang.html#Function-objects)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
(define (add x y)
  (+ x y))

;; Aufruf
(define result (add (compute 1) (compute 2)))
;; Argumente werden links-nach-rechts ausgewertet
```

**Besonderheiten:**
- Argumente werden links-nach-rechts ausgewertet
- Die Reihenfolge ist garantiert

**Weiterführende Links:**
- [Racket Documentation - Functions](https://docs.racket-lang.org/guide/define.html)

</TabItem>
<TabItem value="roc" label="Roc">

```roc
add : I64, I64 -> I64
add = \x, y -> x + y

# Argumente werden links-nach-rechts ausgewertet
result = add (compute 1) (compute 2)
```

**Besonderheiten:**
- Argumente werden links-nach-rechts ausgewertet
- Strikte Evaluation (eager)
- Die Reihenfolge ist garantiert

**Weiterführende Links:**
- [Roc Documentation](https://www.roc-lang.org/tutorial)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
def add(x, y)
    x + y
end

# Aufruf
result = add(compute(1), compute(2))
# Argumente werden links-nach-rechts ausgewertet
```

**Besonderheiten:**
- Argumente werden links-nach-rechts ausgewertet
- Die Reihenfolge ist garantiert

**Weiterführende Links:**
- [Ruby Documentation - Methods](https://docs.ruby-lang.org/en/master/syntax/methods_rdoc.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
fn add(x: i32, y: i32) -> i32 {
    x + y
}

// Aufruf
let result = add(compute(1), compute(2));
// Die Reihenfolge der Argumentauswertung ist undefiniert
```

**Besonderheiten:**
- Die Reihenfolge der Argumentauswertung ist undefiniert
- Compiler können die Reihenfolge optimieren

**Weiterführende Links:**
- [Rust Documentation - Expression Evaluation](https://doc.rust-lang.org/reference/expressions.html#evaluation-order-of-operands)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
def add(x: Int, y: Int): Int = x + y

// Aufruf
val result = add(compute(1), compute(2))
// Argumente werden links-nach-rechts ausgewertet
```

**Besonderheiten:**
- Argumente werden links-nach-rechts ausgewertet
- Die Reihenfolge ist garantiert

**Weiterführende Links:**
- [Scala Documentation - Functions](https://docs.scala-lang.org/tour/functions.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
(define (add x y)
  (+ x y))

;; Aufruf
(define result (add (compute 1) (compute 2)))
;; Auswertungsreihenfolge der Argumente ist UNSPEZIFIZIERT (R7RS §4.1.3)
```

**Besonderheiten:**
- Auswertungsreihenfolge von Operanden ist laut R7RS unspezifiziert
- Implementierungsabhängig (manche Implementierungen nutzen links-nach-rechts)
- Für garantierte Reihenfolge: `let*` oder separate `define`-Ausdrücke verwenden

**Weiterführende Links:**
- [R7RS Scheme Specification](https://small.r7rs.org/attachment/r7rs.pdf)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
func add(_ x: Int, _ y: Int) -> Int {
    return x + y
}

// Aufruf
let result = add(compute(1), compute(2))
// Argumente werden links-nach-rechts ausgewertet
```

**Besonderheiten:**
- Argumente werden links-nach-rechts ausgewertet
- Die Reihenfolge ist garantiert

**Weiterführende Links:**
- [Swift Documentation - Functions](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/functions/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
function add(x: number, y: number): number {
    return x + y;
}

// Aufruf
let result = add(compute(1), compute(2));
// Argumente werden links-nach-rechts ausgewertet
```

**Besonderheiten:**
- Argumente werden links-nach-rechts ausgewertet
- Die Reihenfolge ist garantiert

**Weiterführende Links:**
- [TypeScript Documentation - Functions](https://www.typescriptlang.org/docs/handbook/functions.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
Function Add(x As Integer, y As Integer) As Integer
    Return x + y
End Function

' Aufruf
Dim result As Integer = Add(Compute(1), Compute(2))
' Argumente werden links-nach-rechts ausgewertet
```

**Besonderheiten:**
- Argumente werden links-nach-rechts ausgewertet
- Die Reihenfolge ist garantiert

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Procedures](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/procedures/)

</TabItem>
<TabItem value="v" label="V">

```v
fn add(x int, y int) int {
    return x + y
}

// Aufruf
result := add(compute(1), compute(2))
// Die Reihenfolge der Argumentauswertung ist undefiniert
```

**Besonderheiten:**
- Die Reihenfolge der Argumentauswertung ist undefiniert
- Ähnlich wie C

**Weiterführende Links:**
- [V Documentation - Functions](https://github.com/vlang/v/blob/master/doc/docs.md#functions)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```wolfram
add[x_, y_] := x + y

(* Aufruf *)
result = add[compute[1], compute[2]]
(* Argumente werden links-nach-rechts ausgewertet *)
```

**Besonderheiten:**
- Argumente werden links-nach-rechts ausgewertet
- Die Reihenfolge ist garantiert
- Wolfram Language verwendet symbolische Auswertung

**Weiterführende Links:**
- [Wolfram Language Documentation - Functions](https://reference.wolfram.com/language/guide/Functions.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
const std = @import("std");

fn add(x: i32, y: i32) i32 {
    return x + y;
}

fn compute(x: i32) i32 {
    std.debug.print("compute({})\n", .{x});
    return x * 2;
}

const result = add(compute(1), compute(2));
// Auswertungsreihenfolge: compute(1), dann compute(2) (links-nach-rechts)
```

**Besonderheiten:**
- Funktionsargumente werden von links nach rechts ausgewertet
- Zig hat eine definierte Auswertungsreihenfolge (anders als C)
- Seiteneffekte in Argumenten haben vorhersagbare Reihenfolge

**Weiterführende Links:**
- [Zig Documentation - Operators](https://ziglang.org/documentation/master/#Operators)

</TabItem>

<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Standard-Auswertungsreihenfolge *)
(* 1. Head wird ausgewertet *)
(* 2. Argumente von links nach rechts *)
(* 3. Funktionsregeln werden angewendet *)

f[x_] := x + 1
g[x_] := x * 2

result = f[g[3]]  (* g[3] -> 6, dann f[6] -> 7 *)
```

**Besonderheiten:**
- Wolfram Language hat eine definierte Auswertungsreihenfolge (Standard Evaluation Procedure)
- `HoldAll`, `HoldFirst`, `HoldRest` ändern die Auswertungsreihenfolge
- Ausdrücke werden rekursiv von innen nach außen ausgewertet

**Weiterführende Links:**
- [Wolfram Language Documentation - Standard Evaluation](https://reference.wolfram.com/language/tutorial/EvaluationOfExpressions.html)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Prolog wertet Goals von links nach rechts aus
add(X, Y, Result) :-
    Result is X + Y.

compute(X, Result) :-
    write('Computing: '), write(X), nl,
    Result is X * 10.

% Aufruf
?- compute(1, A), compute(2, B), add(A, B, Result).
% Ausgabe: Computing: 1, dann Computing: 2
% A = 10, B = 20, Result = 30
```

**Besonderheiten:**
- Goals in einer Klausel werden strikt von links nach rechts ausgewertet
- Argumente von Prädikaten werden durch Unifikation gebunden (nicht „ausgewertet")
- Arithmetische Ausdrücke werden nur durch `is/2` explizit ausgewertet
- Backtracking erfolgt nach Depth-First-Search-Reihenfolge

**Weiterführende Links:**
- [SWI-Prolog Documentation - Control Flow](https://www.swi-prolog.org/pldoc/man?section=control)

</TabItem>
</Tabs>


## 17.2.2. Side Effects

Seiteneffekte sind Änderungen am Programmzustand außerhalb des lokalen Bereichs einer Funktion, wie z.B. das Modifizieren globaler Variablen, das Schreiben in Dateien oder das Ausgeben von Daten.

### Sprachen {#sprachen}

<Tabs availableTabs={['ada', 'c', 'carbon', 'clojure', 'common-lisp', 'crystal', 'csharp', 'cpp', 'd', 'dart', 'eiffel', 'elixir', 'elm', 'erlang', 'fsharp', 'fortran', 'gleam', 'go', 'groovy', 'haskell', 'haxe', 'idris', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'lua', 'matlab', 'mercury', 'mojo', 'nim', 'objective-c', 'object-pascal', 'ocaml', 'octave', 'odin', 'perl', 'php', 'prolog', 'purescript', 'python', 'r', 'racket', 'roc', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'vbnet', 'v', 'wolfram-language', 'zig']}>
<TabItem value="ada" label="Ada">

```ada
Global_Var : Integer := 0;

procedure Modify_Global is
begin
    Global_Var := Global_Var + 1;
end Modify_Global;
```

**Besonderheiten:**
- Side Effects sind erlaubt und üblich
- Globale Variablen können modifiziert werden

**Weiterführende Links:**
- [Ada Reference Manual - Variables](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-3-3.html)

</TabItem>
<TabItem value="c" label="C">

```c
int global_var = 0;

void modify_global() {
    global_var++;
}
```

**Besonderheiten:**
- Side Effects sind erlaubt und üblich
- Globale Variablen können modifiziert werden

**Weiterführende Links:**
- [C Standard - Variables](https://www.open-std.org/jtc1/sc22/wg14/www/docs/n1570.pdf)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
var global_var: i32 = 0;

fn ModifyGlobal() {
    global_var++;
}
```

**Besonderheiten:**
- Side Effects sind erlaubt und üblich
- Globale Variablen können modifiziert werden

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
(def global-var (atom 0))

(defn modify-global []
  (swap! global-var inc))
```

**Besonderheiten:**
- Side Effects werden durch `atom`, `ref`, `agent` kontrolliert
- Funktionale Programmierung bevorzugt, aber Side Effects sind möglich

**Weiterführende Links:**
- [Clojure Documentation - State](https://clojure.org/reference/atoms)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
(defvar *global-var* 0)

(defun modify-global ()
  (incf *global-var*))
```

**Besonderheiten:**
- Side Effects sind erlaubt und üblich
- Globale Variablen werden mit `*` markiert

**Weiterführende Links:**
- [Common Lisp HyperSpec - Variables](http://www.lispworks.com/documentation/HyperSpec/Body/03_aa.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
$global_var = 0

def modify_global
  $global_var += 1
end
```

**Besonderheiten:**
- Side Effects sind erlaubt und üblich
- Globale Variablen werden mit `$` markiert

**Weiterführende Links:**
- [Crystal Documentation - Variables](https://crystal-lang.org/reference/1.11/syntax_and_semantics/assignment.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
static int globalVar = 0;

static void ModifyGlobal() {
    globalVar++;
}
```

**Besonderheiten:**
- Side Effects sind erlaubt und üblich
- Statische Variablen können als globale Variablen verwendet werden

**Weiterführende Links:**
- [Microsoft C# Documentation - Variables](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/variables)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
int global_var = 0;

void modify_global() {
    global_var++;
}
```

**Besonderheiten:**
- Side Effects sind erlaubt und üblich
- Globale Variablen können modifiziert werden

**Weiterführende Links:**
- [cppreference.com - Variables](https://en.cppreference.com/w/cpp/language/variable)

</TabItem>
<TabItem value="d" label="D">

```d
int globalVar = 0;

void modifyGlobal() {
    globalVar++;
}
```

**Besonderheiten:**
- Side Effects sind erlaubt und üblich
- Globale Variablen können modifiziert werden

**Weiterführende Links:**
- [D Language Documentation - Variables](https://dlang.org/spec/variable.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
int globalVar = 0;

void modifyGlobal() {
  globalVar++;
}
```

**Besonderheiten:**
- Side Effects sind erlaubt und üblich
- Globale Variablen können modifiziert werden

**Weiterführende Links:**
- [Dart Documentation - Variables](https://dart.dev/language/variables)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
global_var: INTEGER
    once
        Result := 0
    end

modify_global
    do
        global_var := global_var + 1
    end
```

**Besonderheiten:**
- Side Effects sind erlaubt und üblich
- Globale Variablen können modifiziert werden

**Weiterführende Links:**
- [Eiffel Documentation - Variables](https://www.eiffel.org/doc/eiffel/Variables)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
defmodule Global do
  def modify_global do
    Agent.update(:global_var, &(&1 + 1))
  end
end
```

**Besonderheiten:**
- Side Effects werden durch `Agent`, `GenServer` kontrolliert
- Funktionale Programmierung bevorzugt, aber Side Effects sind möglich

**Weiterführende Links:**
- [Elixir Documentation - Agents](https://elixir-lang.org/getting-started/mix-otp/agent.html)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Elm erlaubt keine Side Effects in reinen Funktionen
-- Side Effects werden durch Commands und Subscriptions gehandhabt
```

**Besonderheiten:**
- Reine Funktionen haben keine Side Effects
- Side Effects werden durch `Cmd` und `Sub` gehandhabt
- Funktionale Programmierung ohne direkte Side Effects

**Weiterführende Links:**
- [Elm Documentation - Effects](https://guide.elm-lang.org/effects/)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
-module(global).
-export([modify_global/0]).

modify_global() ->
    put(global_var, get(global_var) + 1).
```

**Besonderheiten:**
- Side Effects werden durch `put`/`get` oder `ets` kontrolliert
- Funktionale Programmierung bevorzugt, aber Side Effects sind möglich

**Weiterführende Links:**
- [Erlang Documentation - Process Dictionary](https://www.erlang.org/doc/reference_manual/processes.html#process-dictionary)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
let mutable globalVar = 0

let modifyGlobal() =
    globalVar <- globalVar + 1
```

**Besonderheiten:**
- Side Effects sind erlaubt, aber `mutable` ist erforderlich
- Funktionale Programmierung bevorzugt, aber Side Effects sind möglich

**Weiterführende Links:**
- [F# Documentation - Mutable Variables](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/values/)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
module global_module
    integer :: global_var = 0
end module global_module

subroutine modify_global()
    use global_module
    global_var = global_var + 1
end subroutine modify_global
```

**Besonderheiten:**
- Side Effects sind erlaubt und üblich
- Module-Variablen können als globale Variablen verwendet werden

**Weiterführende Links:**
- [Fortran Standard - Variables](https://gcc.gnu.org/onlinedocs/gfortran/Variables.html)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// Gleam erlaubt keine Side Effects in reinen Funktionen
// Side Effects werden durch Typen wie `Result`, `Task` gehandhabt
```

**Besonderheiten:**
- Reine Funktionen haben keine Side Effects
- Side Effects werden durch Typen kontrolliert
- Funktionale Programmierung ohne direkte Side Effects

**Weiterführende Links:**
- [Gleam Documentation - Effects](https://gleam.run/documentation/)

</TabItem>
<TabItem value="go" label="Go">

```go
var globalVar int = 0

func modifyGlobal() {
    globalVar++
}
```

**Besonderheiten:**
- Side Effects sind erlaubt und üblich
- Globale Variablen können modifiziert werden

**Weiterführende Links:**
- [Go Documentation - Variables](https://go.dev/ref/spec#Variables)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
@Field static int globalVar = 0

def modifyGlobal() {
    globalVar++
}
```

**Besonderheiten:**
- Side Effects sind erlaubt und üblich
- Statische Variablen können als globale Variablen verwendet werden

**Weiterführende Links:**
- [Groovy Documentation - Variables](https://groovy-lang.org/documentation.html)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
import Data.IORef

modifyGlobal :: IO ()
modifyGlobal = do
    ref <- newIORef 0
    modifyIORef ref (+1)
```

**Besonderheiten:**
- Reine Funktionen haben keine Side Effects
- Side Effects werden durch `IO`, `ST`, `IORef` gehandhabt
- Funktionale Programmierung ohne direkte Side Effects

**Weiterführende Links:**
- [Haskell Documentation - IO](https://www.haskell.org/tutorial/io.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
static var globalVar: Int = 0;

static function modifyGlobal(): Void {
    globalVar++;
}
```

**Besonderheiten:**
- Side Effects sind erlaubt und üblich
- Statische Variablen können als globale Variablen verwendet werden

**Weiterführende Links:**
- [Haxe Documentation - Variables](https://haxe.org/manual/expression-var.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Idris erlaubt keine Side Effects in reinen Funktionen
-- Side Effects werden durch Effekte-System gehandhabt
```

**Besonderheiten:**
- Reine Funktionen haben keine Side Effects
- Side Effects werden durch Effekte-System kontrolliert
- Funktionale Programmierung ohne direkte Side Effects

**Weiterführende Links:**
- [Idris Documentation - Effects](https://idris2.readthedocs.io/en/latest/tutorial/effects.html)

</TabItem>
<TabItem value="java" label="Java">

```java
static int globalVar = 0;

static void modifyGlobal() {
    globalVar++;
}
```

**Besonderheiten:**
- Side Effects sind erlaubt und üblich
- Statische Variablen können als globale Variablen verwendet werden

**Weiterführende Links:**
- [Oracle Java Documentation - Variables](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/variables.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
let globalVar = 0;

function modifyGlobal() {
    globalVar++;
}
```

**Besonderheiten:**
- Side Effects sind erlaubt und üblich
- Globale Variablen können modifiziert werden

**Weiterführende Links:**
- [MDN Web Docs - Variables](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#declarations)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
global global_var = 0

function modify_global()
    global global_var
    global_var += 1
end
```

**Besonderheiten:**
- Side Effects sind erlaubt und üblich
- `global`-Keyword ist erforderlich, um globale Variablen zu modifizieren

**Weiterführende Links:**
- [Julia Documentation - Variables](https://docs.julialang.org/en/v1/manual/variables-and-scoping/)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
// Side Effects werden im Typsystem getrackt
// Reine Funktion (keine Effekte)
fun add(x : int, y : int) : int
  x + y

// Funktion mit Konsolen-Effekt
fun greet(name : string) : console ()
  println("Hallo, " ++ name)

// Funktion mit State-Effekt
fun counter() : st<global> int
  var count := 0
  count := count + 1
  count

// Effekte sind im Typ sichtbar:
// add    : (int, int) -> int           (rein)
// greet  : (string) -> console ()      (Konsolen-Effekt)
// counter: () -> st<global> int        (State-Effekt)
```

**Besonderheiten:**
- **Einzigartiges Feature**: Alle Seiteneffekte werden im Typsystem getrackt
- Reine Funktionen haben keine Effekt-Annotation
- Effekte wie `console`, `exn`, `div`, `st` werden explizit im Funktionstyp angegeben
- Compiler erzwingt korrekte Effektdeklaration

**Weiterführende Links:**
- [Koka Documentation - Effect Types](https://koka-lang.github.io/koka/doc/book.html#sec-effect-types)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
var globalVar = 0

fun modifyGlobal() {
    globalVar++
}
```

**Besonderheiten:**
- Side Effects sind erlaubt und üblich
- Top-Level-Variablen können als globale Variablen verwendet werden

**Weiterführende Links:**
- [Kotlin Documentation - Variables](https://kotlinlang.org/docs/basic-syntax.html#variables)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Reine Funktion: keine Seiteneffekte
def add (x y : Nat) : Nat := x + y

-- Seiteneffekte nur in IO-Monade
def greet (name : String) : IO Unit :=
  IO.println s!"Hallo, {name}!"

-- Seiteneffekte im Typ sichtbar:
-- add   : Nat → Nat → Nat         (rein)
-- greet : String → IO Unit        (IO-Effekt)
```

**Besonderheiten:**
- Seiteneffekte werden durch die `IO`-Monade im Typsystem getrackt.
- Reine Funktionen haben keinen monadischen Rückgabetyp.
- Der Compiler erzwingt, dass Seiteneffekte nur in der `IO`-Monade auftreten.
- `StateM`, `ReaderM`, `ExceptT` tracken weitere Effekte.

**Weiterführende Links:**
- [Lean 4 Documentation - IO Monad](https://lean-lang.org/lean4/doc/io.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
global_var = 0

function modify_global()
    global_var = global_var + 1
end
```

**Besonderheiten:**
- Side Effects sind erlaubt und üblich
- Globale Variablen können modifiziert werden

**Weiterführende Links:**
- [Lua Documentation - Variables](https://www.lua.org/manual/5.4/manual.html#2.3)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
global global_var
global_var = 0;

function modify_global()
    global global_var
    global_var = global_var + 1;
end
```

**Besonderheiten:**
- Side Effects sind erlaubt und üblich
- `global`-Keyword ist erforderlich, um globale Variablen zu verwenden

**Weiterführende Links:**
- [MATLAB Documentation - Variables](https://www.mathworks.com/help/matlab/matlab_prog/share-data-between-workspaces.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
:- module side_effects.
:- interface.
:- import_module io.
:- pred main(io::di, io::uo) is det.
:- implementation.
:- import_module int, string.

% Reine Funktion: keine Seiteneffekte möglich
:- func add(int, int) = int.
add(X, Y) = X + Y.

% Seiteneffekte nur über I/O-State-Threading
:- pred greet(string::in, io::di, io::uo) is det.
greet(Name, !IO) :-
    io.format("Hallo, %s!\n", [s(Name)], !IO).

main(!IO) :-
    % I/O-Seiteneffekte werden durch !IO sequenziert
    greet("Welt", !IO),
    io.write_string("Ergebnis: ", !IO),
    io.write_int(add(1, 2), !IO),
    io.nl(!IO).
```

**Besonderheiten:**
- Mercury ist deklarativ rein: Seiteneffekte sind nur über I/O-State-Threading (`!IO`) möglich
- `io`-Modi (`di`/`uo`) erzwingen eindeutige Sequenzierung der Seiteneffekte
- Reine Funktionen/Prädikate können keine Seiteneffekte haben – der Compiler überprüft dies
- Globaler veränderlicher Zustand ist im reinen Mercury nicht vorhanden

**Weiterführende Links:**
- [Mercury Language Reference - Purity](https://www.mercurylang.org/information/doc-release/mercury_ref/Purity.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
var global_var: Int = 0

fn modify_global():
    global_var += 1
```

**Besonderheiten:**
- Side Effects sind erlaubt und üblich
- Globale Variablen können modifiziert werden

**Weiterführende Links:**
- [Mojo Documentation - Variables](https://docs.modular.com/mojo/manual/variables/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
var globalVar = 0

proc modifyGlobal() =
    globalVar += 1
```

**Besonderheiten:**
- Side Effects sind erlaubt und üblich
- Globale Variablen können modifiziert werden

**Weiterführende Links:**
- [Nim Documentation - Variables](https://nim-lang.org/docs/manual.html#variables)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
static int globalVar = 0;

- (void)modifyGlobal {
    globalVar++;
}
```

**Besonderheiten:**
- Side Effects sind erlaubt und üblich
- Statische Variablen können als globale Variablen verwendet werden

**Weiterführende Links:**
- [Objective-C Documentation - Variables](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/DefiningClasses/DefiningClasses.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
var
    GlobalVar: Integer = 0;

procedure ModifyGlobal;
begin
    GlobalVar := GlobalVar + 1;
end;
```

**Besonderheiten:**
- Side Effects sind erlaubt und üblich
- Globale Variablen können modifiziert werden

**Weiterführende Links:**
- [Object Pascal Documentation - Variables](https://www.freepascal.org/docs-html/ref/refsu4.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
let global_var = ref 0

let modify_global () =
    global_var := !global_var + 1
```

**Besonderheiten:**
- Side Effects werden durch `ref` kontrolliert
- Funktionale Programmierung bevorzugt, aber Side Effects sind möglich

**Weiterführende Links:**
- [OCaml Documentation - References](https://ocaml.org/docs/first-hour)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
global global_var;
global_var = 0;

function modify_global()
    global global_var;
    global_var = global_var + 1;
end
```

**Besonderheiten:**
- Side Effects sind erlaubt und üblich
- `global`-Keyword ist erforderlich, um globale Variablen zu verwenden

**Weiterführende Links:**
- [Octave Documentation - Variables](https://octave.org/doc/v8.1.0/Variables.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
global_var : int : 0

modify_global :: proc() {
    global_var += 1
}
```

**Besonderheiten:**
- Side Effects sind erlaubt und üblich
- Globale Variablen können modifiziert werden

**Weiterführende Links:**
- [Odin Documentation - Variables](https://odin-lang.org/docs/overview/#variables)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
our $global_var = 0;

sub modify_global {
    $global_var++;
}
```

**Besonderheiten:**
- Side Effects sind erlaubt und üblich
- `our`-Keyword deklariert globale Variablen

**Weiterführende Links:**
- [Perl Documentation - Variables](https://perldoc.perl.org/perlvar)

</TabItem>
<TabItem value="php" label="PHP">

```php
$globalVar = 0;

function modifyGlobal() {
    global $globalVar;
    $globalVar++;
}
```

**Besonderheiten:**
- Side Effects sind erlaubt und üblich
- `global`-Keyword ist erforderlich, um globale Variablen zu verwenden

**Weiterführende Links:**
- [PHP Documentation - Variables](https://www.php.net/manual/en/language.variables.scope.php)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- PureScript erlaubt keine Side Effects in reinen Funktionen
-- Side Effects werden durch Effekte-System gehandhabt
```

**Besonderheiten:**
- Reine Funktionen haben keine Side Effects
- Side Effects werden durch Effekte-System kontrolliert
- Funktionale Programmierung ohne direkte Side Effects

**Weiterführende Links:**
- [PureScript Documentation - Effects](https://www.purescript.org/documentation/)

</TabItem>
<TabItem value="python" label="Python">

```python
global_var = 0

def modify_global():
    global global_var
    global_var += 1
```

**Besonderheiten:**
- Side Effects sind erlaubt und üblich
- `global`-Keyword ist erforderlich, um globale Variablen zu modifizieren

**Weiterführende Links:**
- [Python Documentation - Variables](https://docs.python.org/3/tutorial/classes.html#python-scopes-and-namespaces)

</TabItem>
<TabItem value="r" label="R">

```r
global_var <<- 0

modify_global <- function() {
    global_var <<- global_var + 1
}
```

**Besonderheiten:**
- Side Effects sind erlaubt und üblich
- `<<-`-Operator weist globalen Variablen zu

**Weiterführende Links:**
- [R Documentation - Variables](https://cran.r-project.org/doc/manuals/r-release/R-lang.html#Scope)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
(define global-var 0)

(define (modify-global)
  (set! global-var (+ global-var 1)))
```

**Besonderheiten:**
- Side Effects werden durch `set!` kontrolliert
- Funktionale Programmierung bevorzugt, aber Side Effects sind möglich

**Weiterführende Links:**
- [Racket Documentation - Variables](https://docs.racket-lang.org/guide/assignment.html)

</TabItem>
<TabItem value="roc" label="Roc">

```roc
-- Roc erlaubt keine Side Effects in reinen Funktionen
-- Side Effects werden durch Effekte-System gehandhabt
```

**Besonderheiten:**
- Reine Funktionen haben keine Side Effects
- Side Effects werden durch Effekte-System kontrolliert
- Funktionale Programmierung ohne direkte Side Effects

**Weiterführende Links:**
- [Roc Documentation - Effects](https://www.roc-lang.org/tutorial)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
$global_var = 0

def modify_global
    $global_var += 1
end
```

**Besonderheiten:**
- Side Effects sind erlaubt und üblich
- Globale Variablen werden mit `$` markiert

**Weiterführende Links:**
- [Ruby Documentation - Variables](https://docs.ruby-lang.org/en/master/syntax/variables_rdoc.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
static mut GLOBAL_VAR: i32 = 0;

unsafe fn modify_global() {
    GLOBAL_VAR += 1;
}
```

**Besonderheiten:**
- Side Effects sind erlaubt, aber `unsafe` ist für globale mutable Variablen erforderlich
- Rust bevorzugt Ownership-System statt globale Variablen

**Weiterführende Links:**
- [Rust Documentation - Static Variables](https://doc.rust-lang.org/book/ch19-01-unsafe-rust.html#accessing-or-modifying-a-mutable-static-variable)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
var globalVar = 0

def modifyGlobal(): Unit = {
    globalVar += 1
}
```

**Besonderheiten:**
- Side Effects sind erlaubt und üblich
- Top-Level-Variablen können als globale Variablen verwendet werden

**Weiterführende Links:**
- [Scala Documentation - Variables](https://docs.scala-lang.org/tour/basics.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
(define global-var 0)

(define (modify-global)
  (set! global-var (+ global-var 1)))
```

**Besonderheiten:**
- Side Effects werden durch `set!` kontrolliert
- Funktionale Programmierung bevorzugt, aber Side Effects sind möglich

**Weiterführende Links:**
- [Scheme Documentation - Variables](https://www.scheme.com/tspl4/objects.html#./objects:s246)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
var globalVar = 0

func modifyGlobal() {
    globalVar += 1
}
```

**Besonderheiten:**
- Side Effects sind erlaubt und üblich
- Top-Level-Variablen können als globale Variablen verwendet werden

**Weiterführende Links:**
- [Swift Documentation - Variables](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/thebasics/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
let globalVar = 0;

function modifyGlobal(): void {
    globalVar++;
}
```

**Besonderheiten:**
- Side Effects sind erlaubt und üblich
- Globale Variablen können modifiziert werden

**Weiterführende Links:**
- [TypeScript Documentation - Variables](https://www.typescriptlang.org/docs/handbook/variable-declarations.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
Module GlobalModule
    Public globalVar As Integer = 0
End Module

Sub ModifyGlobal()
    GlobalModule.globalVar += 1
End Sub
```

**Besonderheiten:**
- Side Effects sind erlaubt und üblich
- Module-Variablen können als globale Variablen verwendet werden

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Variables](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/variables/)

</TabItem>
<TabItem value="v" label="V">

```v
__global (
    global_var int
)

fn modify_global() {
    global_var++
}
```

**Besonderheiten:**
- Side Effects sind erlaubt und üblich
- `__global`-Block deklariert globale Variablen

**Weiterführende Links:**
- [V Documentation - Variables](https://github.com/vlang/v/blob/master/doc/docs.md#variables)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```wolfram
globalVar = 0;

modifyGlobal[] := (globalVar = globalVar + 1)
```

**Besonderheiten:**
- Side Effects sind erlaubt und üblich
- Globale Variablen können modifiziert werden

**Weiterführende Links:**
- [Wolfram Language Documentation - Variables](https://reference.wolfram.com/language/guide/VariablesAndFunctions.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
var global_var: i32 = 0;

fn modify_global() void {
    global_var += 1;
}
```

**Besonderheiten:**
- Side Effects sind erlaubt und üblich
- Globale Variablen können modifiziert werden

**Weiterführende Links:**
- [Zig Documentation - Variables](https://ziglang.org/documentation/0.11.0/#Variables)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Side Effects sind erlaubt *)
counter = 0;
increment[] := (counter++; counter)

increment[]  (* 1 *)
increment[]  (* 2 *)
Print["Counter: ", counter]  (* Print ist ein Side Effect *)
```

**Besonderheiten:**
- Wolfram Language erlaubt Seiteneffekte (Print, Set, etc.)
- Globale Variablen können modifiziert werden
- `CompoundExpression` (`;`) für Sequenzen mit Seiteneffekten

**Weiterführende Links:**
- [Wolfram Language Documentation - CompoundExpression](https://reference.wolfram.com/language/ref/CompoundExpression.html)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Side Effects über assert/retract und I/O
:- dynamic counter/1.
counter(0).

increment :-
    retract(counter(Old)),
    New is Old + 1,
    assert(counter(New)).

% Aufruf
?- increment, increment, counter(X).
% X = 2
% write/1 und nl/0 sind I/O-Side-Effects
?- write('Hello'), nl.
% Ausgabe: Hello
```

**Besonderheiten:**
- `assert/1` und `retract/1` modifizieren die dynamische Datenbank (globaler Zustand)
- `write/1`, `read/1`, `nl/0` sind I/O-Seiteneffekte
- `set_prolog_flag/2` ändert globale Interpreter-Einstellungen
- Prolog ist nicht referentiell transparent aufgrund von Seiteneffekten

**Weiterführende Links:**
- [SWI-Prolog Documentation - Database](https://www.swi-prolog.org/pldoc/man?section=dynpreds)

</TabItem>
</Tabs>

## 17.2.3. No Undefined Behavior

Die Sprache garantiert, dass alle Programme ein definiertes Verhalten haben. Es gibt keine Situationen, in denen das Verhalten des Programms undefiniert ist.

### Sprachen {#sprachen}

<Tabs availableTabs={['ada', 'crystal', 'csharp', 'dart', 'elixir', 'elm', 'erlang', 'fsharp', 'gleam', 'go', 'groovy', 'haskell', 'idris', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'lua', 'mercury', 'mojo', 'nim', 'ocaml', 'prolog', 'purescript', 'python', 'r', 'racket', 'roc', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'v', 'vbnet', 'wolfram-language']}>
<TabItem value="ada" label="Ada">

```ada
function Safe_Divide(x, y: Integer) return Integer is
begin
    if y = 0 then
        raise Constraint_Error;
    end if;
    return x / y;
end Safe_Divide;
```

**Besonderheiten:**
- Ada garantiert definiertes Verhalten
- Ausnahmen werden explizit behandelt

**Weiterführende Links:**
- [Ada Reference Manual - Exceptions](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-11.html)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
def safe_divide(x : Int32, y : Int32) : Int32
  raise DivisionByZero.new if y == 0
  x / y
end
```

**Besonderheiten:**
- Crystal garantiert definiertes Verhalten
- Ausnahmen werden explizit behandelt

**Weiterführende Links:**
- [Crystal Documentation - Exceptions](https://crystal-lang.org/reference/1.11/syntax_and_semantics/exception_handling.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
int safeDivide(int x, int y) {
  if (y == 0) {
    throw Exception('Division by zero');
  }
  return x ~/ y;
}
```

**Besonderheiten:**
- Dart garantiert definiertes Verhalten
- Ausnahmen werden explizit behandelt

**Weiterführende Links:**
- [Dart Documentation - Exceptions](https://dart.dev/language/error-handling)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
def safe_divide(x, y) do
  case y do
    0 -> {:error, "Division by zero"}
    _ -> {:ok, div(x, y)}
  end
end
```

**Besonderheiten:**
- Elixir garantiert definiertes Verhalten
- Fehler werden durch Pattern Matching behandelt

**Weiterführende Links:**
- [Elixir Documentation - Error Handling](https://elixir-lang.org/getting-started/try-catch-and-rescue.html)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
safeDivide : Int -> Int -> Result String Int
safeDivide x y =
  if y == 0 then
    Err "Division by zero"
  else
    Ok (x // y)
```

**Besonderheiten:**
- Elm garantiert definiertes Verhalten
- Fehler werden durch `Result`-Typ behandelt

**Weiterführende Links:**
- [Elm Documentation - Error Handling](https://guide.elm-lang.org/error_handling/)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
safe_divide(X, Y) ->
    case Y of
        0 -> {error, "Division by zero"};
        _ -> {ok, X div Y}
    end.
```

**Besonderheiten:**
- Erlang garantiert definiertes Verhalten
- Fehler werden durch Pattern Matching behandelt

**Weiterführende Links:**
- [Erlang Documentation - Error Handling](https://www.erlang.org/doc/reference_manual/errors.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
let safeDivide x y =
    if y = 0 then
        Error "Division by zero"
    else
        Ok (x / y)
```

**Besonderheiten:**
- F# garantiert definiertes Verhalten
- Fehler werden durch `Result`-Typ behandelt

**Weiterführende Links:**
- [F# Documentation - Error Handling](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/results/)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
pub fn safe_divide(x: Int, y: Int) -> Result(Int, String) {
  case y {
    0 -> Error("Division by zero")
    _ -> Ok(x / y)
  }
}
```

**Besonderheiten:**
- Gleam garantiert definiertes Verhalten
- Fehler werden durch `Result`-Typ behandelt

**Weiterführende Links:**
- [Gleam Documentation - Error Handling](https://gleam.run/documentation/)

</TabItem>
<TabItem value="go" label="Go">

```go
func safeDivide(x, y int) (int, error) {
    if y == 0 {
        return 0, fmt.Errorf("division by zero")
    }
    return x / y, nil
}
```

**Besonderheiten:**
- Go garantiert definiertes Verhalten
- Fehler werden durch Rückgabewerte behandelt

**Weiterführende Links:**
- [Go Documentation - Error Handling](https://go.dev/doc/effective_go#errors)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
def safeDivide(x, y) {
    if (y == 0) {
        throw new ArithmeticException("Division by zero")
    }
    return x / y
}
```

**Besonderheiten:**
- Groovy garantiert definiertes Verhalten
- Ausnahmen werden explizit behandelt

**Weiterführende Links:**
- [Groovy Documentation - Exceptions](https://groovy-lang.org/documentation.html)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
safeDivide :: Int -> Int -> Either String Int
safeDivide x y
    | y == 0 = Left "Division by zero"
    | otherwise = Right (x `div` y)
```

**Besonderheiten:**
- Haskell garantiert definiertes Verhalten
- Fehler werden durch `Either`-Typ behandelt

**Weiterführende Links:**
- [Haskell Documentation - Error Handling](https://www.haskell.org/documentation/)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
safeDivide : Int -> Int -> Either String Int
safeDivide x y = if y == 0
    then Left "Division by zero"
    else Right (x `div` y)
```

**Besonderheiten:**
- Idris garantiert definiertes Verhalten
- Fehler werden durch `Either`-Typ behandelt

**Weiterführende Links:**
- [Idris Documentation - Error Handling](https://idris2.readthedocs.io/en/latest/tutorial/types_functions.html)

</TabItem>
<TabItem value="java" label="Java">

```java
static int safeDivide(int x, int y) throws ArithmeticException {
    if (y == 0) {
        throw new ArithmeticException("Division by zero");
    }
    return x / y;
}
```

**Besonderheiten:**
- Java garantiert definiertes Verhalten
- Ausnahmen werden explizit behandelt

**Weiterführende Links:**
- [Oracle Java Documentation - Exceptions](https://docs.oracle.com/javase/tutorial/essential/exceptions/)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
function safeDivide(x, y) {
    if (y === 0) {
        throw new Error('Division by zero');
    }
    return x / y;
}
```

**Besonderheiten:**
- JavaScript garantiert definiertes Verhalten
- Ausnahmen werden explizit behandelt

**Weiterführende Links:**
- [MDN Web Docs - Error Handling](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
function safe_divide(x, y)
    if y == 0
        throw(DivideError())
    end
    return x / y
end
```

**Besonderheiten:**
- Julia garantiert definiertes Verhalten
- Ausnahmen werden explizit behandelt

**Weiterführende Links:**
- [Julia Documentation - Error Handling](https://docs.julialang.org/en/v1/manual/control-flow/#Exception-Handling)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
// Kein undefiniertes Verhalten – alle Operationen sind sicher
fun safe-divide(x : int, y : int) : exn int
  if y == 0 then throw("Division by zero")
  x / y

fun main()
  // Effektsystem erzwingt Behandlung von Exceptions
  val result = try({ safe-divide(10, 0) }) fn(exn)
    println("Fehler: " ++ exn.message)
    0
  println(result.show)
```

**Besonderheiten:**
- Kein undefiniertes Verhalten – alle Operationen sind wohldefiniert
- Effektsystem trackt potentielle Fehler im Typ (`exn`)
- Speichersicherheit durch Perceus Reference Counting
- Keine Null-Pointer, keine Buffer Overflows, keine Data Races

**Weiterführende Links:**
- [Koka Documentation - Effect Types](https://koka-lang.github.io/koka/doc/book.html#sec-effect-types)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
fun safeDivide(x: Int, y: Int): Int {
    if (y == 0) {
        throw ArithmeticException("Division by zero")
    }
    return x / y
}
```

**Besonderheiten:**
- Kotlin garantiert definiertes Verhalten
- Ausnahmen werden explizit behandelt

**Weiterführende Links:**
- [Kotlin Documentation - Exceptions](https://kotlinlang.org/docs/exceptions.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Lean 4 garantiert kein Undefined Behavior
-- Alle Operationen sind typsicher
def safeDivide (x y : Nat) : Option Nat :=
  if y == 0 then none else some (x / y)

-- Array-Zugriff ist boundsgeprüft
def safeGet (arr : Array Nat) (i : Nat) : Option Nat :=
  if h : i < arr.size then some arr[i] else none
```

**Besonderheiten:**
- Lean 4 hat kein Undefined Behavior im sicheren Kern.
- Array-Zugriffe sind boundsgeprüft oder erfordern Beweise.
- Division durch 0 gibt 0 zurück (definiertes Verhalten).
- Nur `unsafe`-Blöcke können potenziell unsicheres Verhalten erzeugen.

**Weiterführende Links:**
- [Lean 4 Documentation](https://lean-lang.org/lean4/doc/)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
function safe_divide(x, y)
    if y == 0 then
        error("Division by zero")
    end
    return x / y
end
```

**Besonderheiten:**
- Lua garantiert definiertes Verhalten
- Ausnahmen werden explizit behandelt

**Weiterführende Links:**
- [Lua Documentation - Error Handling](https://www.lua.org/manual/5.4/manual.html#2.3)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
:- module no_ub.
:- interface.
:- import_module io.
:- pred main(io::di, io::uo) is det.
:- implementation.
:- import_module int, string, list, exception.

:- func safe_divide(int, int) = int.
safe_divide(X, Y) = Result :-
    ( if Y = 0 then
        throw("Division durch Null")
    else
        Result = X / Y
    ).

main(!IO) :-
    io.write_int(safe_divide(10, 2), !IO),
    io.nl(!IO).
```

**Besonderheiten:**
- Mercury hat kein undefiniertes Verhalten – alle Operationen sind wohldefiniert
- Starkes Typsystem mit statischer Typprüfung zur Compile-Zeit
- Mode-System verhindert Zugriff auf nicht-initialisierte Variablen
- Determinismus-Deklarationen (`det`, `semidet`, `multi`) verhindern unbehandelte Fälle
- Keine Null-Pointer, keine Buffer-Overflows, keine Data Races

**Weiterführende Links:**
- [Mercury Language Reference - Type System](https://www.mercurylang.org/information/doc-release/mercury_ref/Type-system.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
fn safe_divide(x: Int, y: Int) -> Int:
    if y == 0:
        raise Error("Division by zero")
    return x // y
```

**Besonderheiten:**
- Mojo garantiert definiertes Verhalten
- Ausnahmen werden explizit behandelt

**Weiterführende Links:**
- [Mojo Documentation - Error Handling](https://docs.modular.com/mojo/manual/error-handling/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
proc safeDivide(x, y: int): int =
    if y == 0:
        raise newException(ValueError, "Division by zero")
    x div y
```

**Besonderheiten:**
- Nim garantiert definiertes Verhalten
- Ausnahmen werden explizit behandelt

**Weiterführende Links:**
- [Nim Documentation - Exceptions](https://nim-lang.org/docs/manual.html#exception-handling)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
let safe_divide x y =
    if y = 0 then
        Error "Division by zero"
    else
        Ok (x / y)
```

**Besonderheiten:**
- OCaml garantiert definiertes Verhalten
- Fehler werden durch `Result`-Typ behandelt

**Weiterführende Links:**
- [OCaml Documentation - Error Handling](https://ocaml.org/docs/first-hour)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
safeDivide :: Int -> Int -> Either String Int
safeDivide x y
    | y == 0 = Left "Division by zero"
    | otherwise = Right (x / y)
```

**Besonderheiten:**
- PureScript garantiert definiertes Verhalten
- Fehler werden durch `Either`-Typ behandelt

**Weiterführende Links:**
- [PureScript Documentation - Error Handling](https://www.purescript.org/documentation/)

</TabItem>
<TabItem value="python" label="Python">

```python
def safe_divide(x, y):
    if y == 0:
        raise ZeroDivisionError("Division by zero")
    return x / y
```

**Besonderheiten:**
- Python garantiert definiertes Verhalten
- Ausnahmen werden explizit behandelt

**Weiterführende Links:**
- [Python Documentation - Exceptions](https://docs.python.org/3/tutorial/errors.html)

</TabItem>
<TabItem value="r" label="R">

```r
safe_divide <- function(x, y) {
    if (y == 0) {
        stop("Division by zero")
    }
    x / y
}
```

**Besonderheiten:**
- R garantiert definiertes Verhalten
- Ausnahmen werden explizit behandelt

**Weiterführende Links:**
- [R Documentation - Error Handling](https://cran.r-project.org/doc/manuals/r-release/R-lang.html#Error-handling)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
(define (safe-divide x y)
  (if (zero? y)
      (error "Division by zero")
      (/ x y)))
```

**Besonderheiten:**
- Racket garantiert definiertes Verhalten
- Ausnahmen werden explizit behandelt

**Weiterführende Links:**
- [Racket Documentation - Error Handling](https://docs.racket-lang.org/guide/exns.html)

</TabItem>
<TabItem value="roc" label="Roc">

```roc
safeDivide : I64, I64 -> [Ok I64, DivByZero]
safeDivide = \x, y ->
    if y == 0 then
        DivByZero
    else
        Ok (Num.divTrunc x y)
```

**Besonderheiten:**
- Roc garantiert definiertes Verhalten
- Fehler werden durch Tag Unions behandelt
- Kein Undefined Behavior

**Weiterführende Links:**
- [Roc Documentation](https://www.roc-lang.org/tutorial)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
def safe_divide(x, y)
    raise ZeroDivisionError, "Division by zero" if y == 0
    x / y
end
```

**Besonderheiten:**
- Ruby garantiert definiertes Verhalten
- Ausnahmen werden explizit behandelt

**Weiterführende Links:**
- [Ruby Documentation - Exceptions](https://docs.ruby-lang.org/en/master/syntax/exceptions_rdoc.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
fn safe_divide(x: i32, y: i32) -> Result<i32, String> {
    if y == 0 {
        Err("Division by zero".to_string())
    } else {
        Ok(x / y)
    }
}
```

**Besonderheiten:**
- Rust garantiert definiertes Verhalten
- Fehler werden durch `Result`-Typ behandelt
- Keine undefined behavior durch Memory Safety

**Weiterführende Links:**
- [Rust Documentation - Error Handling](https://doc.rust-lang.org/book/ch09-00-error-handling.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
def safeDivide(x: Int, y: Int): Either[String, Int] = {
    if (y == 0) {
        Left("Division by zero")
    } else {
        Right(x / y)
    }
}
```

**Besonderheiten:**
- Scala garantiert definiertes Verhalten
- Fehler werden durch `Either`-Typ behandelt

**Weiterführende Links:**
- [Scala Documentation - Error Handling](https://docs.scala-lang.org/tour/traits.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
(define (safe-divide x y)
  (if (zero? y)
      (error "Division by zero")
      (/ x y)))
```

**Besonderheiten:**
- Scheme garantiert definiertes Verhalten
- Ausnahmen werden explizit behandelt

**Weiterführende Links:**
- [Scheme Documentation - Error Handling](https://www.scheme.com/tspl4/exceptions.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
func safeDivide(_ x: Int, _ y: Int) throws -> Int {
    guard y != 0 else {
        throw NSError(domain: "MathError", code: 1, userInfo: nil)
    }
    return x / y
}
```

**Besonderheiten:**
- Swift garantiert definiertes Verhalten
- Ausnahmen werden explizit behandelt

**Weiterführende Links:**
- [Swift Documentation - Error Handling](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/errorhandling/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
function safeDivide(x: number, y: number): number {
    if (y === 0) {
        throw new Error('Division by zero');
    }
    return x / y;
}
```

**Besonderheiten:**
- TypeScript garantiert definiertes Verhalten
- Ausnahmen werden explizit behandelt

**Weiterführende Links:**
- [TypeScript Documentation - Error Handling](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
Function SafeDivide(x As Integer, y As Integer) As Integer
    If y = 0 Then
        Throw New DivideByZeroException("Division by zero")
    End If
    Return x \ y
End Function
```

**Besonderheiten:**
- VB.NET garantiert definiertes Verhalten
- Ausnahmen werden explizit behandelt

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Exceptions](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/error-handling/)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```wolfram
safeDivide[x_, y_] := If[y == 0,
    Throw["Division by zero"],
    x / y
]
```

**Besonderheiten:**
- Wolfram Language garantiert definiertes Verhalten
- Ausnahmen werden explizit behandelt

**Weiterführende Links:**
- [Wolfram Language Documentation - Error Handling](https://reference.wolfram.com/language/guide/ErrorHandling.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// C# (safe code) hat kein undefiniertes Verhalten
int[] arr = { 1, 2, 3 };

// Array-Zugriff außerhalb der Grenzen → Exception, kein UB
try {
    int val = arr[10];  // IndexOutOfRangeException
} catch (IndexOutOfRangeException) {
    Console.WriteLine("Index außerhalb der Grenzen");
}

// Integer-Overflow → definiertes Verhalten (wrapping oder Exception)
checked {
    int max = int.MaxValue;
    // int overflow = max + 1;  // OverflowException in checked context
}
unchecked {
    int max = int.MaxValue;
    int overflow = max + 1;  // Definiertes Wrapping: int.MinValue
}
```

**Besonderheiten:**
- Safe Code hat kein undefiniertes Verhalten
- Array-Zugriffe werden zur Laufzeit geprüft
- Integer-Overflow: `checked` wirft Exception, `unchecked` hat definiertes Wrapping
- `unsafe` Code kann undefiniertes Verhalten einführen (Pointer-Arithmetik etc.)
- Null-Referenzen werfen NullReferenceException statt UB

**Weiterführende Links:**
- [Microsoft C# Documentation - Checked and Unchecked](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/statements/checked-and-unchecked)

</TabItem>
<TabItem value="v" label="V">

```v
// No Undefined Behavior
arr := [1, 2, 3]

// Bounds Checking (Runtime-Fehler statt UB)
// arr[5]  // Panic statt Undefined Behavior

// Variablen werden initialisiert
x := int(0)  // Immer initialisiert

// Null-Safety
// ptr := voidptr(0)
// unsafe { *ptr }  // Nur in unsafe möglich
```

**Besonderheiten:**
- Bounds Checking für Arrays (Runtime-Panic statt UB)
- Alle Variablen werden initialisiert
- Null-Dereferenzierung wird verhindert
- `unsafe` ist explizit erforderlich für potenziell unsichere Operationen
- Kein undefiniertes Verhalten im sicheren Code

**Weiterführende Links:**
- [V Documentation - Safety](https://github.com/vlang/v/blob/master/doc/docs.md)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Prolog hat kein undefiniertes Verhalten
% Ungültige Operationen werfen definierte Fehler

safe_divide(_, 0, _) :-
    throw(error(division_by_zero, context(safe_divide/3, ''))).
safe_divide(X, Y, Result) :-
    Y =\= 0,
    Result is X / Y.

% ?- safe_divide(10, 0, R).
% ERROR: Unhandled exception: error(division_by_zero, ...)

% Typfehler werden zur Laufzeit erkannt
% ?- X is hello + 1.
% ERROR: is/2: Arithmetic: `hello/0' is not a function
```

**Besonderheiten:**
- Alle Operationen haben definiertes Verhalten (ISO-Prolog-Standard)
- Typfehler, Instanziierungsfehler und Existenzfehler werden als Exceptions geworfen
- Kein Speicherzugriff außerhalb der Grenzen (keine Pointer-Arithmetik)
- Speicherverwaltung durch automatische Garbage Collection

**Weiterführende Links:**
- [SWI-Prolog Documentation - Exception Handling](https://www.swi-prolog.org/pldoc/man?section=exception)

</TabItem>
</Tabs>

