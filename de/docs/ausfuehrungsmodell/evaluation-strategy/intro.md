---
slug: /ausfuehrungsmodell/evaluation-strategy
title: 17.1. Evaluation Strategy
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 17.1. Evaluation Strategy

Wie Argumente und Ausdrücke ausgewertet werden.

## 17.1.1. Call-by-Value

Parameter werden als Werte übergeben. Der Wert des Arguments wird vor dem Funktionsaufruf ausgewertet und kopiert. Änderungen am Parameter innerhalb der Funktion beeinflussen nicht die ursprüngliche Variable.

### Sprachen {#sprachen}

<Tabs availableTabs={['ada', 'c', 'carbon', 'clojure', 'common-lisp', 'crystal', 'csharp', 'cpp', 'd', 'dart', 'eiffel', 'elixir', 'elm', 'erlang', 'fsharp', 'fortran', 'gleam', 'go', 'groovy', 'haskell', 'haxe', 'idris', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'lua', 'matlab', 'mercury', 'mojo', 'nim', 'objective-c', 'object-pascal', 'ocaml', 'octave', 'odin', 'perl', 'php', 'purescript', 'python', 'r', 'racket', 'roc', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'vbnet', 'v', 'wolfram-language', 'zig']}>
<TabItem value="ada" label="Ada">

```ada
procedure Modify_Value(x : in Integer) is
begin
    -- x kann nicht geändert werden, da 'in' Parameter
    null;
end Modify_Value;

-- Aufruf
value : Integer := 5;
Modify_Value(value);
-- value ist immer noch 5, da Call-by-Value verwendet wird
```

**Besonderheiten:**
- Standard-Parameterübergabe ist Call-by-Value für `in`-Parameter
- `in out`-Parameter verwenden Call-by-Reference (siehe Call-by-Reference-Kapitel)

**Weiterführende Links:**
- [Ada Reference Manual - Parameter Modes](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-6-2.html)

</TabItem>
<TabItem value="c" label="C">

```c
void modifyValue(int x) {
    x = x * 2;
}

// Aufruf
int value = 5;
modifyValue(value);
// value ist immer noch 5, da Call-by-Value verwendet wird
```

**Besonderheiten:**
- Standard-Parameterübergabe ist Call-by-Value
- Für Call-by-Reference müssen Pointer verwendet werden

**Weiterführende Links:**
- [C Standard - Function Calls](https://www.open-std.org/jtc1/sc22/wg14/www/docs/n1570.pdf)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
fn ModifyValue(x: i32) {
    x = x * 2;
}

// Aufruf
var value: i32 = 5;
ModifyValue(value);
// value ist immer noch 5, da Call-by-Value verwendet wird
```

**Besonderheiten:**
- Standard-Parameterübergabe ist Call-by-Value
- Für Call-by-Reference müssen Referenzen verwendet werden

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
(defn modify-value [x]
  (let [x (* x 2)]
    x))

;; Aufruf
(def value 5)
(modify-value value)
;; value ist immer noch 5, da Call-by-Value verwendet wird
```

**Besonderheiten:**
- Alle Parameter werden Call-by-Value übergeben
- Clojure ist unveränderlich, daher werden Werte kopiert

**Weiterführende Links:**
- [Clojure Documentation - Functions](https://clojure.org/reference/reader)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
(defun modify-value (x)
  (setf x (* x 2))
  x)

;; Aufruf
(setf value 5)
(modify-value value)
;; value ist immer noch 5, da Call-by-Value verwendet wird
```

**Besonderheiten:**
- Standard-Parameterübergabe ist Call-by-Value
- Für Call-by-Reference können spezielle Parameter-Modi verwendet werden

**Weiterführende Links:**
- [Common Lisp HyperSpec - Function Calls](http://www.lispworks.com/documentation/HyperSpec/Body/03_ababc.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
def modify_value(x : Int32)
  x = x * 2
end

# Aufruf
value = 5
modify_value(value)
# value ist immer noch 5, da Call-by-Value verwendet wird
```

**Besonderheiten:**
- Standard-Parameterübergabe ist Call-by-Value
- Für Call-by-Reference müssen Referenzen verwendet werden

**Weiterführende Links:**
- [Crystal Documentation - Methods](https://crystal-lang.org/reference/1.11/syntax_and_semantics/methods_and_procs.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
void ModifyValue(int x) {
    x = x * 2;
}

// Aufruf
int value = 5;
ModifyValue(value);
// value ist immer noch 5, da Call-by-Value verwendet wird
```

**Besonderheiten:**
- Standard-Parameterübergabe ist Call-by-Value
- Für Call-by-Reference muss `ref` oder `out` verwendet werden

**Weiterführende Links:**
- [Microsoft C# Documentation - Passing Parameters](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/method-parameters)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
void modifyValue(int x) {
    x = x * 2;
}

// Aufruf
int value = 5;
modifyValue(value);
// value ist immer noch 5, da Call-by-Value verwendet wird
```

**Besonderheiten:**
- Standard-Parameterübergabe ist Call-by-Value
- Für Call-by-Reference müssen Referenzen (`&`) oder Pointer verwendet werden

**Weiterführende Links:**
- [cppreference.com - Function Parameters](https://en.cppreference.com/w/cpp/language/function)

</TabItem>
<TabItem value="d" label="D">

```d
void modifyValue(int x) {
    x = x * 2;
}

// Aufruf
int value = 5;
modifyValue(value);
// value ist immer noch 5, da Call-by-Value verwendet wird
```

**Besonderheiten:**
- Standard-Parameterübergabe ist Call-by-Value
- Für Call-by-Reference müssen Referenzen (`ref`) verwendet werden

**Weiterführende Links:**
- [D Language Documentation - Function Parameters](https://dlang.org/spec/function.html#parameters)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
void modifyValue(int x) {
  x = x * 2;
}

// Aufruf
int value = 5;
modifyValue(value);
// value ist immer noch 5, da Call-by-Value verwendet wird
```

**Besonderheiten:**
- Standard-Parameterübergabe ist Call-by-Value
- Für Call-by-Reference müssen Objektreferenzen verwendet werden (Objekte werden als Referenz übergeben, aber primitive Typen als Wert)

**Weiterführende Links:**
- [Dart Documentation - Functions](https://dart.dev/language/functions)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
try_modify (x: INTEGER)
    local
        local_x: INTEGER
    do
        -- x := x * 2  -- FEHLER: Formale Argumente sind read-only
        local_x := x * 2  -- Lokale Variable stattdessen verwenden
        io.put_integer (local_x)
    end

-- Aufruf
local
    value: INTEGER
do
    value := 5
    try_modify (value)
    -- value ist immer noch 5
end
```

**Besonderheiten:**
- Expanded types (INTEGER, REAL, BOOLEAN, CHARACTER) werden per Wert übergeben (Kopie)
- Formale Argumente sind in Eiffel IMMER read-only – Zuweisung an Parameter ist verboten
- Änderungen müssen über lokale Variablen erfolgen

**Weiterführende Links:**
- [Eiffel ECMA-367 Standard](https://www.ecma-international.org/publications-and-standards/standards/ecma-367/)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
def modify_value(x) do
  x = x * 2
end

# Aufruf
value = 5
modify_value(value)
# value ist immer noch 5, da Call-by-Value verwendet wird
```

**Besonderheiten:**
- Alle Parameter werden Call-by-Value übergeben
- Elixir ist unveränderlich, daher werden Werte kopiert

**Weiterführende Links:**
- [Elixir Documentation - Functions](https://elixir-lang.org/getting-started/modules-and-functions.html)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
modifyValue : Int -> Int
modifyValue x =
    x * 2

-- Aufruf
value = 5
modifyValue value
-- value ist immer noch 5, da Call-by-Value verwendet wird
```

**Besonderheiten:**
- Alle Parameter werden Call-by-Value übergeben
- Elm ist unveränderlich, daher werden Werte kopiert

**Weiterführende Links:**
- [Elm Documentation - Functions](https://guide.elm-lang.org/core_language.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
modify_value(X) ->
    X * 2.

%% Aufruf
Value = 5,
modify_value(Value).
%% Value ist immer noch 5, da Call-by-Value verwendet wird
```

**Besonderheiten:**
- Alle Parameter werden Call-by-Value übergeben
- Erlang ist unveränderlich, daher werden Werte kopiert

**Weiterführende Links:**
- [Erlang Documentation - Functions](https://www.erlang.org/doc/reference_manual/functions.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
let modifyValue x =
    let x = x * 2
    x

// Aufruf
let value = 5
modifyValue value
// value ist immer noch 5, da Call-by-Value verwendet wird
```

**Besonderheiten:**
- Standard-Parameterübergabe ist Call-by-Value
- F# unterstützt auch Call-by-Name mit `'a -> 'b` Funktionen

**Weiterführende Links:**
- [F# Documentation - Functions](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/functions/)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Call-by-Value mit VALUE-Attribut (seit Fortran 2003)
subroutine modify_value(x)
    integer, value :: x
    x = x + 1  ! Ändert nur die lokale Kopie
end subroutine modify_value

integer :: val = 5
call modify_value(val)
! val ist immer noch 5 (echtes Call-by-Value)
```

**Besonderheiten:**
- `VALUE`-Attribut für echtes Call-by-Value (seit Fortran 2003)
- Der Parameter wird als lokale Kopie behandelt
- `INTENT(IN)` ist kein Call-by-Value, sondern verhindert nur die Änderung des Parameters

**Weiterführende Links:**
- [Fortran Standard - VALUE Attribute](https://gcc.gnu.org/onlinedocs/gfortran/VALUE.html)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
fn modify_value(x: Int) -> Int {
  x * 2
}

// Aufruf
let value = 5
modify_value(value)
// value ist immer noch 5, da Call-by-Value verwendet wird
```

**Besonderheiten:**
- Alle Parameter werden Call-by-Value übergeben
- Gleam ist unveränderlich, daher werden Werte kopiert

**Weiterführende Links:**
- [Gleam Documentation - Functions](https://gleam.run/documentation/)

</TabItem>
<TabItem value="go" label="Go">

```go
func modifyValue(x int) {
    x = x * 2
}

// Aufruf
value := 5
modifyValue(value)
// value ist immer noch 5, da Call-by-Value verwendet wird
```

**Besonderheiten:**
- Standard-Parameterübergabe ist Call-by-Value
- Für Call-by-Reference müssen Pointer verwendet werden

**Weiterführende Links:**
- [Go Documentation - Functions](https://go.dev/ref/spec#Function_types)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
def modifyValue(x) {
    x = x * 2
}

// Aufruf
def value = 5
modifyValue(value)
// value ist immer noch 5, da Call-by-Value verwendet wird
```

**Besonderheiten:**
- Standard-Parameterübergabe ist Call-by-Value
- Für Call-by-Reference müssen Objektreferenzen verwendet werden

**Weiterführende Links:**
- [Groovy Documentation - Methods](https://groovy-lang.org/documentation.html)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Benötigt: {-# LANGUAGE BangPatterns #-}
-- Strikte Auswertung (Call-by-Value) erzwingen
strictAdd :: Int -> Int -> Int
strictAdd !x !y = x + y

-- Mit seq für strikte Auswertung
forceEval :: Int -> Int
forceEval x = x `seq` x * 2

-- Mit $! (strikte Applikation)
result = strictAdd $! (2 + 3) $! (4 + 5)
```

**Besonderheiten:**
- Haskell verwendet standardmäßig Call-by-Need (Lazy Evaluation), **nicht** Call-by-Value
- Strikte Auswertung kann erzwungen werden mit `BangPatterns` (`!`), `seq` oder `$!`
- Alle Werte sind immutable, daher gibt es keine Mutation wie in imperativen Sprachen

**Weiterführende Links:**
- [GHC User's Guide - Bang Patterns](https://ghc.gitlab.haskell.org/ghc/doc/users_guide/exts/strict.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
function modifyValue(x: Int): Void {
    x = x * 2;
}

// Aufruf
var value = 5;
modifyValue(value);
// value ist immer noch 5, da Call-by-Value verwendet wird
```

**Besonderheiten:**
- Standard-Parameterübergabe ist Call-by-Value
- Für Call-by-Reference müssen spezielle Techniken verwendet werden

**Weiterführende Links:**
- [Haxe Documentation - Functions](https://haxe.org/manual/expression-function.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
modifyValue : Int -> Int
modifyValue x = x * 2

-- Aufruf
value : Int
value = 5
modifyValue value
-- value ist immer noch 5, da Call-by-Value verwendet wird
```

**Besonderheiten:**
- Standard-Parameterübergabe ist Call-by-Value
- Idris unterstützt auch Call-by-Name in einigen Kontexten

**Weiterführende Links:**
- [Idris Documentation - Functions](https://idris2.readthedocs.io/en/latest/tutorial/types_functions.html)

</TabItem>
<TabItem value="java" label="Java">

```java
void modifyValue(int x) {
    x = x * 2;
}

// Aufruf
int value = 5;
modifyValue(value);
// value ist immer noch 5, da Call-by-Value verwendet wird
```

**Besonderheiten:**
- Standard-Parameterübergabe ist Call-by-Value
- Objektreferenzen werden als Werte übergeben (die Referenz wird kopiert, nicht das Objekt)

**Weiterführende Links:**
- [Oracle Java Documentation - Method Parameters](https://docs.oracle.com/javase/tutorial/java/javaOO/arguments.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
function modifyValue(x) {
    x = x * 2;
}

// Aufruf
let value = 5;
modifyValue(value);
// value ist immer noch 5, da Call-by-Value verwendet wird
```

**Besonderheiten:**
- Standard-Parameterübergabe ist Call-by-Value
- Objektreferenzen werden als Werte übergeben (die Referenz wird kopiert, nicht das Objekt)

**Weiterführende Links:**
- [MDN Web Docs - Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
function modify_value(x)
    x = x * 2
end

# Aufruf
value = 5
modify_value(value)
# value ist immer noch 5, da Call-by-Value verwendet wird
```

**Besonderheiten:**
- Standard-Parameterübergabe ist Call-by-Sharing (ähnlich Call-by-Value für primitive Typen)
- Für primitive Typen verhält es sich wie Call-by-Value

**Weiterführende Links:**
- [Julia Documentation - Functions](https://docs.julialang.org/en/v1/manual/functions/)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
// Call-by-Value: Standardmäßige Parameterübergabe
fun modify-value(x : int) : int
  x * 2  // Neuer Wert wird zurückgegeben, Original bleibt unverändert

fun main()
  val value = 5
  val result = modify-value(value)
  // value ist immer noch 5 (immutable, Call-by-Value)
  println("Original: " ++ value.show ++ ", Ergebnis: " ++ result.show)
```

**Besonderheiten:**
- Strikte Call-by-Value-Semantik für alle Parameter
- Alle Werte sind standardmäßig immutable
- Effektsystem trackt Seiteneffekte im Typsystem
- Keine impliziten Referenzen oder Pointer

**Weiterführende Links:**
- [Koka Documentation - Functions](https://koka-lang.github.io/koka/doc/book.html#sec-basics)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
fun modifyValue(x: Int) {
    var x = x * 2
}

// Aufruf
val value = 5
modifyValue(value)
// value ist immer noch 5, da Call-by-Value verwendet wird
```

**Besonderheiten:**
- Standard-Parameterübergabe ist Call-by-Value
- Parameter sind unveränderlich (`val`), müssen lokal neu deklariert werden, um geändert zu werden

**Weiterführende Links:**
- [Kotlin Documentation - Functions](https://kotlinlang.org/docs/functions.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Lean 4 verwendet Call-by-Value
def modifyValue (x : Nat) : Nat :=
  x * 2

-- Aufruf
def value := 5
#eval modifyValue value  -- 10
-- value selbst bleibt unverändert (immutable)
```

**Besonderheiten:**
- Lean 4 ist strikt (eager) und verwendet Call-by-Value als Standard-Evaluierungsstrategie.
- Alle Argumente werden vor dem Funktionsaufruf vollständig ausgewertet.
- Parameter sind unveränderlich – Funktionen geben neue Werte zurück.

**Weiterführende Links:**
- [Lean 4 Documentation - Functions](https://lean-lang.org/lean4/doc/functions.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
function modifyValue(x)
    x = x * 2
end

-- Aufruf
local value = 5
modifyValue(value)
-- value ist immer noch 5, da Call-by-Value verwendet wird
```

**Besonderheiten:**
- Standard-Parameterübergabe ist Call-by-Value
- Tabellen werden als Referenzen übergeben

**Weiterführende Links:**
- [Lua Documentation - Functions](https://www.lua.org/manual/5.4/manual.html#3.4.11)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
function modifyValue(x)
    x = x * 2;
end

% Aufruf
value = 5;
modifyValue(value);
% value ist immer noch 5, da Call-by-Value verwendet wird
```

**Besonderheiten:**
- Standard-Parameterübergabe ist Call-by-Value
- Große Arrays können für Performance optimiert werden

**Weiterführende Links:**
- [MATLAB Documentation - Functions](https://www.mathworks.com/help/matlab/ref/function.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
fn modify_value(x: Int) -> None:
    x = x * 2

# Aufruf
var value = 5
modify_value(value)
# value ist immer noch 5, da Call-by-Value verwendet wird
```

**Besonderheiten:**
- Standard-Parameterübergabe ist Call-by-Value
- Für Call-by-Reference müssen `inout`-Parameter verwendet werden

**Weiterführende Links:**
- [Mojo Documentation - Functions](https://docs.modular.com/mojo/manual/functions/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
proc modifyValue(x: int) =
    var x = x * 2

# Aufruf
var value = 5
modifyValue(value)
# value ist immer noch 5, da Call-by-Value verwendet wird
```

**Besonderheiten:**
- Standard-Parameterübergabe ist Call-by-Value
- Für Call-by-Reference müssen `var`-Parameter verwendet werden

**Weiterführende Links:**
- [Nim Documentation - Procedures](https://nim-lang.org/docs/manual.html#procedures)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
- (void)modifyValue:(int)x {
    x = x * 2;
}

// Aufruf
int value = 5;
[self modifyValue:value];
// value ist immer noch 5, da Call-by-Value verwendet wird
```

**Besonderheiten:**
- Standard-Parameterübergabe ist Call-by-Value
- Objekte werden als Referenzen übergeben

**Weiterführende Links:**
- [Objective-C Documentation - Methods](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/DefiningClasses/DefiningClasses.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
procedure ModifyValue(x: Integer);
begin
    x := x * 2;
end;

// Aufruf
var
    value: Integer;
begin
    value := 5;
    ModifyValue(value);
    // value ist immer noch 5, da Call-by-Value verwendet wird
end;
```

**Besonderheiten:**
- Standard-Parameterübergabe ist Call-by-Value
- Für Call-by-Reference müssen `var`-Parameter verwendet werden

**Weiterführende Links:**
- [Object Pascal Documentation - Procedures](https://www.freepascal.org/docs-html/ref/refsu68.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
let modify_value x =
    let x = x * 2 in
    x

(* Aufruf *)
let value = 5 in
modify_value value
(* value ist immer noch 5, da Call-by-Value verwendet wird *)
```

**Besonderheiten:**
- Standard-Parameterübergabe ist Call-by-Value
- OCaml ist unveränderlich, daher werden Werte kopiert

**Weiterführende Links:**
- [OCaml Documentation - Functions](https://ocaml.org/docs/first-hour)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
function modifyValue(x)
    x = x * 2;
end

% Aufruf
value = 5;
modifyValue(value);
% value ist immer noch 5, da Call-by-Value verwendet wird
```

**Besonderheiten:**
- Standard-Parameterübergabe ist Call-by-Value
- Ähnlich wie MATLAB

**Weiterführende Links:**
- [Octave Documentation - Functions](https://octave.org/doc/v8.1.0/Functions-and-Scripts.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
modify_value :: proc(x: int) {
    x = x * 2
}

// Aufruf
value := 5
modify_value(value)
// value ist immer noch 5, da Call-by-Value verwendet wird
```

**Besonderheiten:**
- Standard-Parameterübergabe ist Call-by-Value
- Für Call-by-Reference müssen Pointer verwendet werden

**Weiterführende Links:**
- [Odin Documentation - Procedures](https://odin-lang.org/docs/overview/#procedures)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
sub modify_value {
    my $x = shift;
    $x = $x * 2;
}

# Aufruf
my $value = 5;
modify_value($value);
# $value ist immer noch 5, da Call-by-Value verwendet wird
```

**Besonderheiten:**
- Standard-Parameterübergabe ist Call-by-Value
- Arrays und Hashes werden als Referenzen übergeben

**Weiterführende Links:**
- [Perl Documentation - Functions](https://perldoc.perl.org/perlsub)

</TabItem>
<TabItem value="php" label="PHP">

```php
function modifyValue($x) {
    $x = $x * 2;
}

// Aufruf
$value = 5;
modifyValue($value);
// $value ist immer noch 5, da Call-by-Value verwendet wird
```

**Besonderheiten:**
- Standard-Parameterübergabe ist Call-by-Value
- Für Call-by-Reference muss `&` verwendet werden

**Weiterführende Links:**
- [PHP Documentation - Functions](https://www.php.net/manual/en/functions.user-defined.php)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
modifyValue :: Int -> Int
modifyValue x = x * 2

-- Aufruf
value = 5
modifyValue value
-- value ist immer noch 5, da Call-by-Value verwendet wird
```

**Besonderheiten:**
- Alle Parameter werden Call-by-Value übergeben
- PureScript ist unveränderlich, daher werden Werte kopiert

**Weiterführende Links:**
- [PureScript Documentation - Functions](https://www.purescript.org/documentation/)

</TabItem>
<TabItem value="python" label="Python">

```python
def modify_value(x):
    x = x * 2

# Aufruf
value = 5
modify_value(value)
# value ist immer noch 5, da Call-by-Value verwendet wird
```

**Besonderheiten:**
- Standard-Parameterübergabe ist Call-by-Value
- Objektreferenzen werden als Werte übergeben (die Referenz wird kopiert, nicht das Objekt)

**Weiterführende Links:**
- [Python Documentation - Functions](https://docs.python.org/3/tutorial/controlflow.html#defining-functions)

</TabItem>
<TabItem value="r" label="R">

```r
modify_value <- function(x) {
    x <- x * 2
}

# Aufruf
value <- 5
modify_value(value)
# value ist immer noch 5, da Call-by-Value verwendet wird
```

**Besonderheiten:**
- Standard-Parameterübergabe ist Call-by-Value
- R verwendet Lazy Evaluation für einige Kontexte

**Weiterführende Links:**
- [R Documentation - Functions](https://cran.r-project.org/doc/manuals/r-release/R-lang.html#Function-objects)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
(define (modify-value x)
  (let ([x (* x 2)])
    x))

;; Aufruf
(define value 5)
(modify-value value)
;; value ist immer noch 5, da Call-by-Value verwendet wird
```

**Besonderheiten:**
- Alle Parameter werden Call-by-Value übergeben
- Racket ist unveränderlich, daher werden Werte kopiert

**Weiterführende Links:**
- [Racket Documentation - Functions](https://docs.racket-lang.org/guide/define.html)

</TabItem>
<TabItem value="roc" label="Roc">

```roc
modifyValue : Int -> Int
modifyValue = \x -> x * 2

# Aufruf
value = 5
modifyValue value
# value ist immer noch 5, da Call-by-Value verwendet wird
```

**Besonderheiten:**
- Alle Parameter werden Call-by-Value übergeben
- Roc ist unveränderlich, daher werden Werte kopiert

**Weiterführende Links:**
- [Roc Documentation - Functions](https://www.roc-lang.org/tutorial)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
def modify_value(x)
    x = x * 2
end

# Aufruf
value = 5
modify_value(value)
# value ist immer noch 5, da Call-by-Value verwendet wird
```

**Besonderheiten:**
- Standard-Parameterübergabe ist Call-by-Value
- Objektreferenzen werden als Werte übergeben (die Referenz wird kopiert, nicht das Objekt)

**Weiterführende Links:**
- [Ruby Documentation - Methods](https://docs.ruby-lang.org/en/master/syntax/methods_rdoc.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
fn modify_value(x: i32) {
    let mut x = x * 2;
}

// Aufruf
let value = 5;
modify_value(value);
// value ist immer noch 5, da Call-by-Value verwendet wird
```

**Besonderheiten:**
- Standard-Parameterübergabe ist Call-by-Value
- Für Call-by-Reference müssen Referenzen (`&`) verwendet werden

**Weiterführende Links:**
- [Rust Documentation - Functions](https://doc.rust-lang.org/book/ch03-03-functions.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
def modifyValue(x: Int): Unit = {
    var x = x * 2
}

// Aufruf
val value = 5
modifyValue(value)
// value ist immer noch 5, da Call-by-Value verwendet wird
```

**Besonderheiten:**
- Standard-Parameterübergabe ist Call-by-Value
- Scala unterstützt auch Call-by-Name mit `=>`-Parametern

**Weiterführende Links:**
- [Scala Documentation - Functions](https://docs.scala-lang.org/tour/functions.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
(define (modify-value x)
  (let ((x (* x 2)))
    x))

;; Aufruf
(define value 5)
(modify-value value)
;; value ist immer noch 5, da Call-by-Value verwendet wird
```

**Besonderheiten:**
- Alle Parameter werden Call-by-Value übergeben
- Bei zusammengesetzten Objekten (Listen, Vektoren) wird die Referenz kopiert, nicht das Objekt
- Mutation des übergebenen Objekts ist innerhalb der Funktion möglich

**Weiterführende Links:**
- [Scheme Documentation - Functions](https://www.scheme.com/tspl4/start.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
func modifyValue(_ x: Int) {
    var x = x * 2
}

// Aufruf
let value = 5
modifyValue(value)
// value ist immer noch 5, da Call-by-Value verwendet wird
```

**Besonderheiten:**
- Standard-Parameterübergabe ist Call-by-Value
- Für Call-by-Reference muss `inout` verwendet werden

**Weiterführende Links:**
- [Swift Documentation - Functions](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/functions/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
function modifyValue(x: number): void {
    x = x * 2;
}

// Aufruf
let value = 5;
modifyValue(value);
// value ist immer noch 5, da Call-by-Value verwendet wird
```

**Besonderheiten:**
- Standard-Parameterübergabe ist Call-by-Value
- Objektreferenzen werden als Werte übergeben (die Referenz wird kopiert, nicht das Objekt)

**Weiterführende Links:**
- [TypeScript Documentation - Functions](https://www.typescriptlang.org/docs/handbook/functions.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
Sub ModifyValue(x As Integer)
    x = x * 2
End Sub

' Aufruf
Dim value As Integer = 5
ModifyValue(value)
' value ist immer noch 5, da Call-by-Value verwendet wird
```

**Besonderheiten:**
- Standard-Parameterübergabe ist Call-by-Value
- Für Call-by-Reference muss `ByRef` verwendet werden

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Procedures](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/procedures/)

</TabItem>
<TabItem value="v" label="V">

```v
fn modify_value(x int) {
    mut x := x * 2
}

// Aufruf
mut value := 5
modify_value(value)
// value ist immer noch 5, da Call-by-Value verwendet wird
```

**Besonderheiten:**
- Standard-Parameterübergabe ist Call-by-Value
- Für Call-by-Reference müssen Pointer verwendet werden

**Weiterführende Links:**
- [V Documentation - Functions](https://github.com/vlang/v/blob/master/doc/docs.md#functions)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
modifyValue[x_] := Module[{local = x * 2}, local]

(* Aufruf *)
value = 5;
modifyValue[value]
(* value ist immer noch 5, da der Wert kopiert wird *)
```

**Besonderheiten:**
- Argumente werden durch Pattern Matching gebunden (Wert wird kopiert)
- Der Originalwert wird nicht modifiziert
- Wolfram Language verwendet ein rewriting-basiertes Auswertungsmodell

**Weiterführende Links:**
- [Wolfram Language Documentation - Functions](https://reference.wolfram.com/language/guide/Functions.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
fn modifyValue(x: i32) void {
    var x = x * 2;
}

// Aufruf
var value: i32 = 5;
modifyValue(value);
// value ist immer noch 5, da Call-by-Value verwendet wird
```

**Besonderheiten:**
- Standard-Parameterübergabe ist Call-by-Value
- Für Call-by-Reference müssen Pointer verwendet werden

**Weiterführende Links:**
- [Zig Documentation - Functions](https://ziglang.org/documentation/0.11.0/#Functions)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
:- func modify_value(int) = int.
modify_value(X) = X * 2.

% Aufruf
main(!IO) :-
    Value = 5,
    _Result = modify_value(Value),
    % Value ist immer noch 5, da Call-by-Value verwendet wird
    io.print_line(Value, !IO).
```

**Besonderheiten:**
- Standard-Parameterübergabe ist Call-by-Value für `in`-Mode Parameter
- Alle Werte sind unveränderlich – kein Überschreiben möglich
- Mercury ist strikt (eager): Argumente werden vor dem Aufruf vollständig ausgewertet

**Weiterführende Links:**
- [Mercury Language Reference - Modes](https://www.mercurylang.org/information/doc-release/mercury_ref/Modes.html)

</TabItem>
</Tabs>


## 17.1.2. Call-by-Reference

Parameter werden als Referenzen übergeben. Die Funktion erhält eine Referenz auf die ursprüngliche Variable, sodass Änderungen am Parameter innerhalb der Funktion die ursprüngliche Variable beeinflussen.

### Sprachen {#sprachen}

<Tabs availableTabs={['ada', 'c', 'carbon', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'eiffel', 'fortran', 'go', 'groovy', 'javascript', 'julia', 'kotlin', 'lua', 'mojo', 'nim', 'object-pascal', 'objective-c', 'odin', 'perl', 'php', 'python', 'ruby', 'rust', 'swift', 'typescript', 'v', 'vbnet', 'zig']} yellowTabs={['haxe']}>
<TabItem value="ada" label="Ada">

```ada
procedure Modify_Value(x : in out Integer) is
begin
    x := x * 2;
end Modify_Value;

-- Aufruf
value : Integer := 5;
Modify_Value(value);
-- value ist jetzt 10, da Call-by-Reference verwendet wird
```

**Besonderheiten:**
- `in out`-Parameter verwenden Call-by-Reference
- `out`-Parameter verwenden ebenfalls Call-by-Reference

**Weiterführende Links:**
- [Ada Reference Manual - Parameter Modes](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-6-2.html)

</TabItem>
<TabItem value="c" label="C">

```c
void modifyValue(int *x) {
    *x = *x * 2;
}

// Aufruf
int value = 5;
modifyValue(&value);
// value ist jetzt 10, da Call-by-Reference verwendet wird
```

**Besonderheiten:**
- Call-by-Reference wird durch Pointer (`*`) und Adressoperator (`&`) implementiert
- Pointer müssen explizit dereferenziert werden

**Weiterführende Links:**
- [C Standard - Function Calls](https://www.open-std.org/jtc1/sc22/wg14/www/docs/n1570.pdf)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
fn ModifyValue(x: i32*) {
    *x = *x * 2;
}

// Aufruf
var value: i32 = 5;
ModifyValue(&value);
// value ist jetzt 10, da Call-by-Reference verwendet wird
```

**Besonderheiten:**
- Call-by-Reference wird durch Pointer (`*`) und Adressoperator (`&`) implementiert
- Pointer müssen explizit dereferenziert werden

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
def modify_value(x : Int32*)
  x.value = x.value * 2
end

# Aufruf
value = 5
modify_value(pointerof(value))
# value ist jetzt 10, da Call-by-Reference verwendet wird
```

**Besonderheiten:**
- Call-by-Reference wird durch Pointer implementiert
- `pointerof` erstellt einen Pointer zu einer Variable

**Weiterführende Links:**
- [Crystal Documentation - Methods](https://crystal-lang.org/reference/1.11/syntax_and_semantics/methods_and_procs.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
void ModifyValue(ref int x) {
    x = x * 2;
}

// Aufruf
int value = 5;
ModifyValue(ref value);
// value ist jetzt 10, da Call-by-Reference verwendet wird
```

**Besonderheiten:**
- `ref`-Parameter verwenden Call-by-Reference
- `out`-Parameter verwenden ebenfalls Call-by-Reference, müssen aber initialisiert werden

**Weiterführende Links:**
- [Microsoft C# Documentation - Passing Parameters](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/method-parameters)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
void modifyValue(int& x) {
    x = x * 2;
}

// Aufruf
int value = 5;
modifyValue(value);
// value ist jetzt 10, da Call-by-Reference verwendet wird
```

**Besonderheiten:**
- Referenzen (`&`) verwenden Call-by-Reference
- Pointer (`*`) können ebenfalls verwendet werden, sind aber keine echten Referenzen

**Weiterführende Links:**
- [cppreference.com - Function Parameters](https://en.cppreference.com/w/cpp/language/function)

</TabItem>
<TabItem value="d" label="D">

```d
void modifyValue(ref int x) {
    x = x * 2;
}

// Aufruf
int value = 5;
modifyValue(value);
// value ist jetzt 10, da Call-by-Reference verwendet wird
```

**Besonderheiten:**
- `ref`-Parameter verwenden Call-by-Reference
- `out`-Parameter verwenden ebenfalls Call-by-Reference

**Weiterführende Links:**
- [D Language Documentation - Function Parameters](https://dlang.org/spec/function.html#parameters)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
void modifyValue(List<int> list) {
  list[0] = list[0] * 2;
}

// Aufruf
var value = [5];
modifyValue(value);
// value[0] ist jetzt 10, da Objekte als Referenz übergeben werden
```

**Besonderheiten:**
- Primitive Typen werden Call-by-Value übergeben
- Objekte werden als Referenzen übergeben (Call-by-Sharing)

**Weiterführende Links:**
- [Dart Documentation - Functions](https://dart.dev/language/functions)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
-- Reference Types: Referenz wird kopiert, aber Objekt wird geteilt
modify_point (p: POINT)
    do
        -- p := ...  -- FEHLER: Formale Argumente sind read-only
        p.set_x (p.x * 2)  -- Mutation des referenzierten Objekts ist möglich
    end

-- Aufruf
local
    my_point: POINT
do
    create my_point.make (5, 10)
    modify_point (my_point)
    -- my_point.x ist jetzt 10, da das Objekt über die geteilte Referenz modifiziert wurde
end
```

**Besonderheiten:**
- Reference types werden als Referenzkopie übergeben (Call-by-Sharing)
- Formale Argumente sind IMMER read-only – die Referenz selbst kann nicht geändert werden
- Das referenzierte Objekt kann aber über seine Methoden modifiziert werden
- Expanded types (INTEGER, REAL, etc.) werden per Wert kopiert

**Weiterführende Links:**
- [Eiffel ECMA-367 Standard](https://www.ecma-international.org/publications-and-standards/standards/ecma-367/)

</TabItem>

<TabItem value="go" label="Go">

```go
func modifyValue(x *int) {
    *x = *x * 2
}

// Aufruf
value := 5
modifyValue(&value)
// value ist jetzt 10, da Call-by-Reference verwendet wird
```

**Besonderheiten:**
- Call-by-Reference wird durch Pointer (`*`) und Adressoperator (`&`) implementiert
- Pointer müssen explizit dereferenziert werden

**Weiterführende Links:**
- [Go Documentation - Functions](https://go.dev/ref/spec#Function_types)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
def modifyValue(list) {
    list[0] = list[0] * 2
}

// Aufruf
def value = [5]
modifyValue(value)
// value[0] ist jetzt 10, da Objekte als Referenz übergeben werden
```

**Besonderheiten:**
- Primitive Typen werden Call-by-Value übergeben
- Objekte werden als Referenzen übergeben (Call-by-Sharing)

**Weiterführende Links:**
- [Groovy Documentation - Methods](https://groovy-lang.org/documentation.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Call-by-Reference: Objekte werden als Referenz übergeben
class Box {
    public var value:Int;
    public function new(v:Int) { this.value = v; }
}

function modifyBox(box:Box):Void {
    box.value = box.value * 2;
}

var box = new Box(5);
modifyBox(box);
// box.value ist jetzt 10
```

**Besonderheiten:**
- Objekte (Klasseninstanzen) werden als Referenz übergeben (Call-by-Sharing)
- Primitive Typen (Int, Float, Bool) werden als Wert übergeben
- Keine explizite `ref`-Semantik wie in C# oder Rust

**Weiterführende Links:**
- [Haxe Documentation - Functions](https://haxe.org/manual/expression-function.html)

</TabItem>

<TabItem value="javascript" label="JavaScript">

```javascript
function modifyValue(obj) {
    obj.value = obj.value * 2;
}

// Aufruf
let value = { value: 5 };
modifyValue(value);
// value.value ist jetzt 10, da Objekte als Referenz übergeben werden
```

**Besonderheiten:**
- Primitive Typen werden Call-by-Value übergeben
- Objekte werden als Referenzen übergeben (die Referenz wird kopiert, aber zeigt auf dasselbe Objekt)

**Weiterführende Links:**
- [MDN Web Docs - Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
function modify_value!(x)
    x[1] = x[1] * 2
end

# Aufruf
value = [5]
modify_value!(value)
# value[1] ist jetzt 10, da Arrays als Referenz übergeben werden
```

**Besonderheiten:**
- Funktionen mit `!` im Namen zeigen an, dass sie ihre Argumente modifizieren
- Mutable Objekte werden als Referenzen übergeben (Call-by-Sharing)

**Weiterführende Links:**
- [Julia Documentation - Functions](https://docs.julialang.org/en/v1/manual/functions/)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
fun modifyValue(arr: IntArray) {
    arr[0] = arr[0] * 2
}

// Aufruf
val value = intArrayOf(5)
modifyValue(value)
// value[0] ist jetzt 10, da Arrays als Referenz übergeben werden
```

**Besonderheiten:**
- Primitive Typen werden Call-by-Value übergeben
- Objekte und Arrays werden als Referenzen übergeben (die Referenz wird kopiert, aber zeigt auf dasselbe Objekt)

**Weiterführende Links:**
- [Kotlin Documentation - Functions](https://kotlinlang.org/docs/functions.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
function modifyValue(t)
    t.value = t.value * 2
end

-- Aufruf
local value = { value = 5 }
modifyValue(value)
-- value.value ist jetzt 10, da Tabellen als Referenz übergeben werden
```

**Besonderheiten:**
- Primitive Typen werden Call-by-Value übergeben
- Tabellen werden als Referenzen übergeben

**Weiterführende Links:**
- [Lua Documentation - Functions](https://www.lua.org/manual/5.4/manual.html#3.4.11)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
fn modify_value(inout x: Int) -> None:
    x = x * 2

# Aufruf
var value = 5
modify_value(value)
# value ist jetzt 10, da Call-by-Reference verwendet wird
```

**Besonderheiten:**
- `inout`-Parameter verwenden Call-by-Reference
- Standard-Parameterübergabe ist Call-by-Value

**Weiterführende Links:**
- [Mojo Documentation - Functions](https://docs.modular.com/mojo/manual/functions/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
proc modifyValue(x: var int) =
    x = x * 2

# Aufruf
var value = 5
modifyValue(value)
# value ist jetzt 10, da Call-by-Reference verwendet wird
```

**Besonderheiten:**
- `var`-Parameter verwenden Call-by-Reference
- Standard-Parameterübergabe ist Call-by-Value

**Weiterführende Links:**
- [Nim Documentation - Procedures](https://nim-lang.org/docs/manual.html#procedures)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
- (void)modifyValue:(int *)x {
    *x = *x * 2;
}

// Aufruf
int value = 5;
[self modifyValue:&value];
// value ist jetzt 10, da Call-by-Reference verwendet wird
```

**Besonderheiten:**
- Call-by-Reference wird durch Pointer (`*`) und Adressoperator (`&`) implementiert
- Objekte werden standardmäßig als Referenzen übergeben

**Weiterführende Links:**
- [Objective-C Documentation - Methods](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/DefiningClasses/DefiningClasses.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
procedure ModifyValue(var x: Integer);
begin
    x := x * 2;
end;

// Aufruf
var
    value: Integer;
begin
    value := 5;
    ModifyValue(value);
    // value ist jetzt 10, da Call-by-Reference verwendet wird
end;
```

**Besonderheiten:**
- `var`-Parameter verwenden Call-by-Reference
- Standard-Parameterübergabe ist Call-by-Value

**Weiterführende Links:**
- [Object Pascal Documentation - Procedures](https://www.freepascal.org/docs-html/ref/refsu68.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
modify_value :: proc(x: ^int) {
    x^ = x^ * 2
}

// Aufruf
value := 5
modify_value(&value)
// value ist jetzt 10, da Call-by-Reference verwendet wird
```

**Besonderheiten:**
- Call-by-Reference wird durch Pointer (`^`) und Adressoperator (`&`) implementiert
- Pointer müssen explizit dereferenziert werden (`^`)

**Weiterführende Links:**
- [Odin Documentation - Procedures](https://odin-lang.org/docs/overview/#procedures)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
sub modify_value {
    my $ref = shift;
    $$ref = $$ref * 2;
}

# Aufruf
my $value = 5;
modify_value(\$value);
# $value ist jetzt 10, da Call-by-Reference verwendet wird
```

**Besonderheiten:**
- Call-by-Reference wird durch Referenzen (`\`) implementiert
- Referenzen müssen explizit dereferenziert werden (`$$`)

**Weiterführende Links:**
- [Perl Documentation - Functions](https://perldoc.perl.org/perlsub)

</TabItem>
<TabItem value="php" label="PHP">

```php
function modifyValue(&$x) {
    $x = $x * 2;
}

// Aufruf
$value = 5;
modifyValue($value);
// $value ist jetzt 10, da Call-by-Reference verwendet wird
```

**Besonderheiten:**
- `&`-Parameter verwenden Call-by-Reference
- Standard-Parameterübergabe ist Call-by-Value

**Weiterführende Links:**
- [PHP Documentation - Functions](https://www.php.net/manual/en/functions.user-defined.php)

</TabItem>
<TabItem value="python" label="Python">

```python
def modify_value(obj):
    obj.value = obj.value * 2

# Aufruf
class Value:
    def __init__(self, v):
        self.value = v

value = Value(5)
modify_value(value)
# value.value ist jetzt 10, da Objekte als Referenz übergeben werden
```

**Besonderheiten:**
- Python verwendet "Call-by-Object-Reference" (auch "Call-by-Sharing")
- Alle Werte werden gleich übergeben: die Referenz auf das Objekt wird kopiert
- Bei veränderlichen (mutable) Objekten kann der Inhalt in der Funktion geändert werden
- Bei unveränderlichen (immutable) Objekten (int, str, tuple) erscheint es wie Call-by-Value

**Weiterführende Links:**
- [Python Documentation - Functions](https://docs.python.org/3/tutorial/controlflow.html#defining-functions)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
def modify_value(obj)
    obj.value = obj.value * 2
end

# Aufruf
class Value
    attr_accessor :value
    def initialize(v)
        @value = v
    end
end

value = Value.new(5)
modify_value(value)
# value.value ist jetzt 10, da Objekte als Referenz übergeben werden
```

**Besonderheiten:**
- Primitive Typen werden Call-by-Value übergeben
- Objekte werden als Referenzen übergeben (die Referenz wird kopiert, aber zeigt auf dasselbe Objekt)

**Weiterführende Links:**
- [Ruby Documentation - Methods](https://docs.ruby-lang.org/en/master/syntax/methods_rdoc.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
fn modify_value(x: &mut i32) {
    *x = *x * 2;
}

// Aufruf
let mut value = 5;
modify_value(&mut value);
// value ist jetzt 10, da Call-by-Reference verwendet wird
```

**Besonderheiten:**
- `&mut`-Referenzen verwenden Call-by-Reference
- Referenzen müssen explizit dereferenziert werden (`*`)

**Weiterführende Links:**
- [Rust Documentation - Functions](https://doc.rust-lang.org/book/ch03-03-functions.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
func modifyValue(_ x: inout Int) {
    x = x * 2
}

// Aufruf
var value = 5
modifyValue(&value)
// value ist jetzt 10, da Call-by-Reference verwendet wird
```

**Besonderheiten:**
- `inout`-Parameter verwenden Call-by-Reference
- Standard-Parameterübergabe ist Call-by-Value

**Weiterführende Links:**
- [Swift Documentation - Functions](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/functions/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
function modifyValue(obj: { value: number }): void {
    obj.value = obj.value * 2;
}

// Aufruf
let value = { value: 5 };
modifyValue(value);
// value.value ist jetzt 10, da Objekte als Referenz übergeben werden
```

**Besonderheiten:**
- Primitive Typen werden Call-by-Value übergeben
- Objekte werden als Referenzen übergeben (die Referenz wird kopiert, aber zeigt auf dasselbe Objekt)

**Weiterführende Links:**
- [TypeScript Documentation - Functions](https://www.typescriptlang.org/docs/handbook/functions.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
Sub ModifyValue(ByRef x As Integer)
    x = x * 2
End Sub

' Aufruf
Dim value As Integer = 5
ModifyValue(value)
' value ist jetzt 10, da Call-by-Reference verwendet wird
```

**Besonderheiten:**
- `ByRef`-Parameter verwenden Call-by-Reference
- Standard-Parameterübergabe ist `ByVal` (Call-by-Value)

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Procedures](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/procedures/)

</TabItem>
<TabItem value="v" label="V">

```v
fn modify_value(x &int) {
    *x = *x * 2
}

// Aufruf
mut value := 5
modify_value(&value)
// value ist jetzt 10, da Call-by-Reference verwendet wird
```

**Besonderheiten:**
- Call-by-Reference wird durch Pointer (`&`) und Adressoperator (`&`) implementiert
- Pointer müssen explizit dereferenziert werden (`*`)

**Weiterführende Links:**
- [V Documentation - Functions](https://github.com/vlang/v/blob/master/doc/docs.md#functions)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
fn modifyValue(x: *i32) void {
    x.* = x.* * 2;
}

// Aufruf
var value: i32 = 5;
modifyValue(&value);
// value ist jetzt 10, da Call-by-Reference verwendet wird
```

**Besonderheiten:**
- Call-by-Reference wird durch Pointer (`*`) und Adressoperator (`&`) implementiert
- Pointer müssen explizit dereferenziert werden (`.*`)

**Weiterführende Links:**
- [Zig Documentation - Functions](https://ziglang.org/documentation/0.11.0/#Functions)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Call-by-Reference (Standard in Fortran)
subroutine double_value(x)
    integer, intent(inout) :: x
    x = x * 2  ! Ändert den Original-Wert
end subroutine double_value

integer :: val = 5
call double_value(val)
! val ist jetzt 10
```

**Besonderheiten:**
- Standard-Parameterübergabe ist Call-by-Reference (implementation-defined, aber typischerweise by-reference)
- `INTENT(INOUT)` erlaubt Lesen und Schreiben des Parameters
- `INTENT(OUT)` für reine Ausgabe-Parameter

**Weiterführende Links:**
- [Fortran Standard - Argument Passing](https://gcc.gnu.org/onlinedocs/gfortran/Argument-passing.html)

</TabItem>

</Tabs>


## 17.1.3. Call-by-Name

Parameter werden als Ausdrücke übergeben, die erst bei jeder Verwendung ausgewertet werden. Der Ausdruck wird nicht vor dem Funktionsaufruf ausgewertet, sondern bei jeder Referenz im Funktionskörper neu berechnet.

### Sprachen {#sprachen}

<Tabs availableTabs={['haskell', 'scala', 'wolfram-language']} orangeTabs={['fsharp', 'idris']}>
<TabItem value="fsharp" label="F#">

```fsharp
let compute x = x + x

let callByName (f: unit -> int) = 
    f() + f()

// Aufruf
let result = callByName (fun () -> compute 5)
// Der Ausdruck wird zweimal ausgewertet (10 + 10 = 20)
```

**Besonderheiten:**
- Call-by-Name wird durch Funktionen `unit -> 'a` simuliert
- Der Ausdruck wird bei jeder Verwendung neu ausgewertet

**Weiterführende Links:**
- [F# Documentation - Functions](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/functions/)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
compute :: Int -> Int
compute x = x + x

callByName :: (() -> Int) -> Int
callByName f = f () + f ()

-- Aufruf
result = callByName (\() -> compute 5)
-- Der Ausdruck wird zweimal ausgewertet (10 + 10 = 20)
```

**Besonderheiten:**
- Call-by-Name wird durch Funktionen `() -> a` simuliert
- Haskell verwendet standardmäßig Lazy Evaluation, aber Call-by-Name kann explizit durch Thunks implementiert werden

**Weiterführende Links:**
- [Haskell Documentation - Functions](https://www.haskell.org/documentation/)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
compute : Int -> Int
compute x = x + x

callByName : (() -> Int) -> Int
callByName f = f () + f ()

-- Aufruf
result : Int
result = callByName (\() => compute 5)
-- Der Ausdruck wird zweimal ausgewertet (10 + 10 = 20)
```

**Besonderheiten:**
- Call-by-Name wird durch Funktionen `() -> a` simuliert
- Idris unterstützt auch Lazy Evaluation in einigen Kontexten

**Weiterführende Links:**
- [Idris Documentation - Functions](https://idris2.readthedocs.io/en/latest/tutorial/types_functions.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
def compute(x: Int): Int = x + x

def callByName(f: => Int): Int = f + f

// Aufruf
val result = callByName(compute(5))
// Der Ausdruck wird zweimal ausgewertet (10 + 10 = 20)
```

**Besonderheiten:**
- `=>`-Parameter verwenden Call-by-Name
- Der Ausdruck wird bei jeder Verwendung neu ausgewertet
- Standard-Parameterübergabe ist Call-by-Value

**Weiterführende Links:**
- [Scala Documentation - Functions](https://docs.scala-lang.org/tour/functions.html)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Call-by-Name via HoldAll *)
SetAttributes[callByName, HoldAll]
callByName[expr_] := (Print["Evaluating..."]; expr)

(* Aufruf - Ausdruck wird erst bei Bedarf ausgewertet *)
callByName[1 + 2]  (* Erst Print, dann 3 *)

(* SetDelayed (:=) verzögert die Auswertung *)
lazyValue := (Print["Computing"]; 42)
```

**Besonderheiten:**
- `HoldAll`, `HoldFirst` etc. verhindern die Auswertung von Argumenten
- `:=` (SetDelayed) wertet die rechte Seite erst bei Zugriff aus
- Symbolische Auswertung ist ein Kern-Feature der Wolfram Language

**Weiterführende Links:**
- [Wolfram Language Documentation - HoldAll](https://reference.wolfram.com/language/ref/HoldAll.html)

</TabItem>
</Tabs>


## 17.1.4. Lazy Evaluation

Ausdrücke werden erst ausgewertet, wenn ihr Wert tatsächlich benötigt wird. Dies ermöglicht unendliche Datenstrukturen und kann die Effizienz verbessern, wenn nicht alle Werte benötigt werden.

### Sprachen {#sprachen}

<Tabs availableTabs={['clojure', 'elixir', 'fsharp', 'gleam', 'haskell', 'idris', 'ocaml', 'purescript', 'r', 'racket', 'scala', 'scheme', 'wolfram-language']} yellowTabs={['koka']} orangeTabs={['erlang', 'prolog']}>
<TabItem value="clojure" label="Clojure">

```clojure
(defn lazy-sequence []
  (lazy-seq (cons 1 (lazy-sequence))))

;; Aufruf
(def numbers (take 5 (lazy-sequence)))
;; Nur die ersten 5 Elemente werden ausgewertet
```

**Besonderheiten:**
- `lazy-seq` erstellt lazy Sequenzen
- Elemente werden erst bei Zugriff ausgewertet

**Weiterführende Links:**
- [Clojure Documentation - Lazy Sequences](https://clojure.org/reference/sequences)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
defmodule Lazy do
  def lazy_stream do
    Stream.iterate(1, &(&1 + 1))
  end
end

# Aufruf
numbers = Lazy.lazy_stream() |> Enum.take(5)
# Nur die ersten 5 Elemente werden ausgewertet
```

**Besonderheiten:**
- `Stream`-Module bietet lazy Evaluation
- Elemente werden erst bei Enumeration ausgewertet

**Weiterführende Links:**
- [Elixir Documentation - Streams](https://elixir-lang.org/getting-started/enumerables-and-streams.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% Lazy Evaluation durch Thunks (nullstellige Funktionen)
lazy_value() ->
    fun() -> expensive_computation() end.

%% Aufruf: Wert wird erst hier berechnet
Result = (lazy_value())().

% Lazy Stream mit manueller Auswertung
lazy_ones() -> fun() -> {1, lazy_ones()} end.

take(0, _LazyList) -> [];
take(N, LazyList) ->
    {Value, Next} = LazyList(),
    [Value | take(N - 1, Next)].

FirstFive = take(5, lazy_ones()).
%% Ergebnis: [1, 1, 1, 1, 1]
```

**Besonderheiten:**
- Erlang ist primär eager (strict evaluation)
- Lazy Evaluation kann durch Thunks (nullstellige Funktionen) simuliert werden
- Kein eingebautes Lazy-Evaluation-Framework

**Weiterführende Links:**
- [Erlang Documentation - Functions](https://www.erlang.org/doc/reference_manual/functions.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
let lazyValue = lazy (expensiveComputation())

// Aufruf
let result = lazyValue.Value
// Der Wert wird erst hier ausgewertet
```

**Besonderheiten:**
- `lazy`-Keyword erstellt lazy Werte
- `Value`-Property triggert die Auswertung

**Weiterführende Links:**
- [F# Documentation - Lazy Values](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/lazy-computations)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// Lazy Evaluation via gleam/iterator
// Benötigt: import gleam/iterator
pub fn lazy_list() {
  iterator.from_list([1, 2, 3, 4, 5])
}

let numbers = lazy_list()
let first_two = iterator.take(numbers, 2) |> iterator.to_list()
// Nur die ersten 2 Elemente werden ausgewertet
```

**Besonderheiten:**
- `gleam/iterator` bietet lazy Evaluation
- Elemente werden erst bei Bedarf ausgewertet
- `iterator.from_list`, `iterator.take`, `iterator.map` etc.

**Weiterführende Links:**
- [Gleam Documentation - iterator](https://hexdocs.pm/gleam_stdlib/gleam/iterator.html)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
lazyList :: [Int]
lazyList = [1..]

-- Aufruf
firstFive = take 5 lazyList
-- Nur die ersten 5 Elemente werden ausgewertet
```

**Besonderheiten:**
- Haskell verwendet standardmäßig Lazy Evaluation
- Unendliche Listen sind möglich
- Ausdrücke werden erst bei Bedarf ausgewertet

**Weiterführende Links:**
- [Haskell Documentation - Lazy Evaluation](https://www.haskell.org/documentation/)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Lazy Evaluation mit Lazy-Typ
lazyValue : Lazy Int
lazyValue = 42 + 58  -- Wird erst bei Bedarf ausgewertet

-- Stream für unendliche Sequenzen
nats : Stream Nat
nats = iterate S Z

-- Verwendung
firstFive : List Nat
firstFive = take 5 nats  -- [0, 1, 2, 3, 4]
```

**Besonderheiten:**
- `Stream`-Typ bietet lazy Evaluation für unendliche Sequenzen
- `Lazy`-Typ für explizite verzögerte Auswertung
- Idris 2 ist standardmäßig strikt (eager), Lazy Evaluation ist explizit

**Weiterführende Links:**
- [Idris 2 Documentation - Lazy](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
// Lazy Evaluation über delayed/lazy Funktionen
// Koka ist standardmäßig strikt, unterstützt aber verzögerte Auswertung

// Lazy Value durch Closures
fun lazy-value() : int
  42 + 58  // Wird erst beim Aufruf ausgewertet

// Lazy Liste durch rekursive Funktionen
fun take(n : int, gen : () -> list<int>) : list<int>
  if n <= 0 then [] else gen().take(n - 1, gen)

fun main()
  val result = lazy-value()  // Erst jetzt wird 42 + 58 berechnet
  println(result.show)
```

**Besonderheiten:**
- Koka ist standardmäßig strikt (eager evaluation)
- Lazy Evaluation durch Closures und Thunks simulierbar
- Effektsystem ermöglicht kontrollierte verzögerte Auswertung
- Keine eingebaute `lazy`-Unterstützung wie in Haskell

**Weiterführende Links:**
- [Koka Documentation - Functions](https://koka-lang.github.io/koka/doc/book.html#sec-basics)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
let lazy_value = lazy (expensive_computation ())

(* Aufruf *)
let result = Lazy.force lazy_value
(* Der Wert wird erst hier ausgewertet *)
```

**Besonderheiten:**
- `lazy`-Keyword erstellt lazy Werte
- `Lazy.force` triggert die Auswertung
- OCaml ist standardmäßig eager, aber unterstützt lazy Evaluation

**Weiterführende Links:**
- [OCaml Documentation - Lazy Values](https://ocaml.org/docs/first-hour)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Benötigt: import Data.Lazy (Lazy, defer, force)
lazyValue :: Lazy Int
lazyValue = defer \_ -> expensiveComputation 42

-- Wird erst bei force ausgewertet
result = force lazyValue
```

**Besonderheiten:**
- PureScript ist standardmäßig STRIKT (nicht lazy wie Haskell)
- Explizite Lazy Evaluation über `Data.Lazy`
- `defer` erstellt lazy Werte, `force` erzwingt Auswertung

**Weiterführende Links:**
- [PureScript Documentation - Lazy](https://pursuit.purescript.org/packages/purescript-lazy)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Lazy Evaluation durch freeze/2 (Coroutining)
% Goal wird verzögert, bis Variable gebunden wird

% freeze/2: Verzögertes Goal
:- freeze(X, (Y is X * 2, write(Y))).
% Noch keine Ausgabe - X ist ungebunden
X = 5.
% Jetzt Ausgabe: 10

% Lazy Liste mit freeze/2
lazy_nats(N, [N|Rest]) :-
    N1 is N + 1,
    freeze(Rest, lazy_nats(N1, Rest)).

% Nur benötigte Elemente werden erzeugt
?- lazy_nats(1, [A, B, C | _]).
% A = 1, B = 2, C = 3
```

**Besonderheiten:**
- Prolog ist standardmäßig eager (Tiefensuche mit Links-nach-rechts-Auswertung)
- `freeze/2` verzögert ein Goal bis eine Variable gebunden wird (Coroutining)
- `when/2` bietet flexiblere Bedingungen für verzögerte Auswertung
- Lazy Evaluation nur über Coroutining-Erweiterungen möglich (SWI-Prolog, SICStus)

**Weiterführende Links:**
- [SWI-Prolog Documentation - Coroutining](https://www.swi-prolog.org/pldoc/man?section=coroutining)

</TabItem>

<TabItem value="r" label="R">

```r
lazy_eval <- function(expr) {
  substitute(expr)
}

# Aufruf
result <- lazy_eval(expensive_computation())
# Der Ausdruck wird erst bei Verwendung ausgewertet
```

**Besonderheiten:**
- R verwendet Lazy Evaluation für Funktionsargumente
- `substitute` ermöglicht verzögerte Auswertung

**Weiterführende Links:**
- [R Documentation - Lazy Evaluation](https://cran.r-project.org/doc/manuals/r-release/R-lang.html#Argument-evaluation)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
(define lazy-list
  (stream-cons 1 (stream-map add1 lazy-list)))

;; Aufruf
(define first-five (stream-take lazy-list 5))
;; Nur die ersten 5 Elemente werden ausgewertet
```

**Besonderheiten:**
- `stream`-Module bietet lazy Evaluation
- Unendliche Streams sind möglich

**Weiterführende Links:**
- [Racket Documentation - Streams](https://docs.racket-lang.org/reference/streams.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
lazy val lazyValue = expensiveComputation()

// Aufruf
val result = lazyValue
// Der Wert wird erst hier ausgewertet
```

**Besonderheiten:**
- `lazy val` erstellt lazy Werte
- Der Wert wird erst bei erster Verwendung ausgewertet
- Nachfolgende Zugriffe verwenden den gecachten Wert

**Weiterführende Links:**
- [Scala Documentation - Lazy Values](https://docs.scala-lang.org/tour/automatic-closures.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
(define lazy-list
  (stream-cons 1 (stream-map (lambda (x) (+ x 1)) lazy-list)))

;; Aufruf
(define first-five (stream-take lazy-list 5))
;; Nur die ersten 5 Elemente werden ausgewertet
```

**Besonderheiten:**
- `stream`-Module bietet lazy Evaluation (wenn verfügbar)
- Scheme ist standardmäßig eager, aber einige Implementierungen unterstützen lazy Evaluation

**Weiterführende Links:**
- [Scheme Documentation - Streams](https://www.scheme.com/tspl4/objects.html#./objects:s246)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Lazy Evaluation via SetDelayed *)
lazyValue := (Print["Computing..."]; 42)
(* Wird erst beim Zugriff ausgewertet *)

(* Lazy-artige Konstrukte *)
stream = NestList[# + 1 &, 1, 9]
Take[stream, 5]  (* {1, 2, 3, 4, 5} *)
```

**Besonderheiten:**
- Wolfram Language ist standardmäßig nicht lazy (eagere Auswertung)
- `:=` (SetDelayed) verzögert die Auswertung
- `Hold`, `HoldForm` für explizite Verzögerung
- Seit Version 13.1: `LazyList` und `LazyArray` für echte Lazy-Datenstrukturen

**Weiterführende Links:**
- [Wolfram Language Documentation - Delayed Evaluation](https://reference.wolfram.com/language/guide/DelayedEvaluation.html)

</TabItem>
</Tabs>

