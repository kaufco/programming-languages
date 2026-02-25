---
slug: /binding-scoping/variablenbindung
title: 4.1. Variablenbindung
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 4.1. Variablenbindung

Deklaration und Zuweisung von Variablen.

## 4.1.1. Variable Declaration

Ankündigung, dass eine Variable existiert, bevor sie verwendet wird.

### Sprachen {#sprachen}

<Tabs availableTabs={['ada', 'c', 'carbon', 'clojure', 'common-lisp', 'crystal', 'csharp', 'cpp', 'd', 'dart', 'eiffel', 'elixir', 'elm', 'erlang', 'fsharp', 'fortran', 'gleam', 'go', 'groovy', 'haskell', 'haxe', 'idris', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'lua', 'matlab', 'mercury', 'mojo', 'nim', 'objective-c', 'object-pascal', 'ocaml', 'octave', 'odin', 'perl', 'prolog', 'purescript', 'python', 'r', 'racket', 'roc', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'vbnet', 'v', 'wolfram-language', 'zig']} yellowTabs={['php']}>
<TabItem value="ada" label="Ada">

```ada
-- Variablendeklaration
count : Integer;
name : String;
price : Float;

-- Deklaration mit Initialisierung
count : Integer := 42;
name : String := "Hallo";
```

**Besonderheiten:**
- Typ muss explizit angegeben werden
- Initialisierung ist optional

**Weiterführende Links:**
- [Ada Reference Manual - Object Declarations](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-3-3-1.html)

</TabItem>
<TabItem value="c" label="C">

```c
// Variablendeklaration
int count;
char* name;
double price;

// Deklaration mit Initialisierung
int count = 42;
char* name = "Hallo";
```

**Besonderheiten:**
- Typ muss explizit angegeben werden
- Variablen können ohne Initialisierung deklariert werden

**Weiterführende Links:**
- [C Standard - Declarations](https://en.cppreference.com/w/c/language/declarations)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Variablendeklaration
int count;
string name;
double price;

// Deklaration mit Initialisierung
int count = 42;
string name = "Hallo";
```

**Besonderheiten:**
- Typ muss explizit angegeben werden (außer bei `var`)
- Lokale Variablen müssen initialisiert werden, bevor sie verwendet werden

**Weiterführende Links:**
- [Microsoft C# Documentation - Variables](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/variables)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Variablendeklaration
int count;
std::string name;
double price;

// Deklaration mit Initialisierung
int count = 42;
std::string name = "Hallo";
```

**Besonderheiten:**
- Typ muss explizit angegeben werden (außer bei `auto`)
- Variablen können ohne Initialisierung deklariert werden

**Weiterführende Links:**
- [cppreference.com - Declarations](https://en.cppreference.com/w/cpp/language/declarations)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Variablendeklaration
var count: i32;
var name: String;
var price: f64;

// Deklaration mit Initialisierung
var count: i32 = 42;
var name: String = "Hallo";
```

**Besonderheiten:**
- Experimentelle Sprache, Syntax kann sich noch ändern
- `var` mit explizitem Typ oder Type Inference

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Variablendeklaration (mit def)
(def count 42)
(def name "Hallo")
(def price 19.99)

;; Lokale Variablen (mit let)
(let [count 42
      name "Hallo"]
  (println count name))
```

**Besonderheiten:**
- `def` für globale Bindungen
- `let` für lokale Bindungen
- Immutable by default

**Weiterführende Links:**
- [Clojure Documentation - Vars](https://clojure.org/reference/vars)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Variablendeklaration (mit defvar oder defparameter)
(defvar count 42)
(defparameter name "Hallo")

;; Lokale Variablen (mit let)
(let ((count 42)
      (name "Hallo"))
  (format t "~a ~a~%" count name))
```

**Besonderheiten:**
- `defvar` für Variablen, die nicht überschrieben werden
- `defparameter` für Variablen, die überschrieben werden können
- `let` für lokale Bindungen

**Weiterführende Links:**
- [Common Lisp HyperSpec - Variables](http://www.lispworks.com/documentation/HyperSpec/Body/03_abab.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Variablendeklaration
count : Int32
name : String
price : Float64

# Deklaration mit Initialisierung
count = 42
name = "Hallo"
```

**Besonderheiten:**
- Typ kann explizit angegeben werden oder wird inferiert
- Type Inference ist standardmäßig aktiv

**Weiterführende Links:**
- [Crystal Documentation - Variables](https://crystal-lang.org/reference/1.11/syntax_and_semantics/variables.html)

</TabItem>
<TabItem value="d" label="D">

```d
// Variablendeklaration
int count;
string name;
double price;

// Deklaration mit Initialisierung
int count = 42;
string name = "Hallo";
```

**Besonderheiten:**
- Typ muss explizit angegeben werden
- Variablen können ohne Initialisierung deklariert werden

**Weiterführende Links:**
- [D Language Specification - Variables](https://dlang.org/spec/declaration.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Variablendeklaration
int count;
String name;
double price;

// Deklaration mit Initialisierung
int count = 42;
String name = "Hallo";
```

**Besonderheiten:**
- Typ kann explizit angegeben werden oder wird inferiert
- Lokale Variablen müssen initialisiert werden, bevor sie verwendet werden

**Weiterführende Links:**
- [Dart Language Tour - Variables](https://dart.dev/guides/language/language-tour#variables)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
-- Variablendeklaration (in Klasse)
count: INTEGER
name: STRING
price: REAL

-- Deklaration mit Initialisierung
count: INTEGER := 42
name: STRING := "Hallo"
```

**Besonderheiten:**
- Typ muss explizit angegeben werden
- Variablen werden in Klassen deklariert

**Weiterführende Links:**
- [Eiffel Documentation - Variables](https://www.eiffel.org/doc/eiffel/Variables)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Variablendeklaration (mit Pattern Matching)
count = 42
name = "Hallo"
price = 19.99

# Lokale Variablen (in Funktionen)
def example do
  count = 42
  name = "Hallo"
  count + String.length(name)
end
```

**Besonderheiten:**
- Pattern Matching für Variablendeklaration
- Immutable by default
- Variablen beginnen mit Kleinbuchstaben

**Weiterführende Links:**
- [Elixir Documentation - Variables](https://elixir-lang.org/getting-started/basic-types.html#variables)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Variablendeklaration
count = 42
name = "Hallo"
price = 19.99

-- Typannotationen (optional)
count : Int
count = 42

name : String
name = "Hallo"
```

**Besonderheiten:**
- Immutable by default
- Typannotationen sind optional, werden aber empfohlen

**Weiterführende Links:**
- [Elm Documentation - Values](https://guide.elm-lang.org/core_language.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% Variablendeklaration (mit Pattern Matching)
Count = 42,
Name = "Hallo",
Price = 19.99.

% In Funktionen
example() ->
    Count = 42,
    Name = "Hallo",
    Count + length(Name).
```

**Besonderheiten:**
- Pattern Matching für Variablendeklaration
- Immutable by default
- Variablen beginnen mit Großbuchstaben

**Weiterführende Links:**
- [Erlang Documentation - Variables](https://www.erlang.org/doc/reference_manual/data_types.html#variables)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Variablendeklaration
let count = 42
let name = "Hallo"
let price = 19.99

// Mit Typannotation
let count : int = 42
let name : string = "Hallo"
```

**Besonderheiten:**
- `let` für Variablendeklaration
- Immutable by default
- Typ kann explizit angegeben werden oder wird inferiert

**Weiterführende Links:**
- [F# Documentation - Values](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/values/)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Variablendeklaration
integer :: count
character(len=10) :: name
real :: price

! Deklaration mit Initialisierung
integer :: count = 42
character(len=10) :: name = "Hallo"
```

**Besonderheiten:**
- Typ muss explizit angegeben werden
- `::` für Typannotation

**Weiterführende Links:**
- [Fortran Standard - Variable Declarations](https://gcc.gnu.org/onlinedocs/gfortran/Variable-Declarations.html)

</TabItem>
<TabItem value="gleam" label="Gleam">

```erlang
// Variablendeklaration (mit let)
let count = 42
let name = "Hallo"
let price = 19.99

// Mit Typannotation
let count: Int = 42
let name: String = "Hallo"
```

**Besonderheiten:**
- `let` für Variablendeklaration
- Immutable by default
- Typ kann explizit angegeben werden oder wird inferiert

**Weiterführende Links:**
- [Gleam Documentation - Variables](https://gleam.run/documentation/)

</TabItem>
<TabItem value="go" label="Go">

```go
// Variablendeklaration
var count int
var name string
var price float64

// Deklaration mit Initialisierung
var count int = 42
var name string = "Hallo"

// Kurzform mit Type Inference
count := 42
name := "Hallo"
```

**Besonderheiten:**
- `var` für explizite Deklaration
- `:=` für kurze Deklaration mit Type Inference
- Typ kann explizit angegeben werden oder wird inferiert

**Weiterführende Links:**
- [Go Documentation - Variables](https://go.dev/ref/spec#Variable_declarations)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Variablendeklaration mit def (dynamischer Typ)
def count = 42
def name = "Hallo"
def price = 19.99

// Deklaration ohne Initialisierung
def uninitialized

// Mit explizitem Typ
int number = 42
String text = "Hallo"
```

**Besonderheiten:**
- `def` für dynamische Typisierung
- Explizite Typen sind optional
- Typ kann explizit angegeben oder inferiert werden

**Weiterführende Links:**
- [Groovy Documentation - Variables](https://groovy-lang.org/semantics.html#_variable_declaration)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Variablendeklaration (in let oder where)
example = let
    count = 42
    name = "Hallo"
    price = 19.99
  in count + length name

-- Mit Typannotation
example :: Int
example = let
    count :: Int
    count = 42
  in count
```

**Besonderheiten:**
- Immutable by default
- Variablen werden in `let` oder `where` Blöcken deklariert
- Typannotationen sind optional, werden aber empfohlen

**Weiterführende Links:**
- [Haskell Documentation - Variables](https://www.haskell.org/tutorial/variables.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Variablendeklaration
var count: Int;
var name: String;
var price: Float;

// Deklaration mit Initialisierung
var count: Int = 42;
var name: String = "Hallo";

// Mit Type Inference
var count = 42;
var name = "Hallo";
```

**Besonderheiten:**
- `var` für Variablendeklaration
- Typ kann explizit angegeben werden oder wird inferiert

**Weiterführende Links:**
- [Haxe Documentation - Variables](https://haxe.org/manual/expression-var.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Variablendeklaration (mit let)
example : Int
example = let
    count = 42
    name = "Hallo"
  in count + length name

-- Mit Typannotation
example2 : Int
example2 = let
    count : Int
    count = 42
  in count
```

**Besonderheiten:**
- Immutable by default
- Variablen werden in `let` Blöcken deklariert
- Typannotationen sind optional, werden aber empfohlen

**Weiterführende Links:**
- [Idris 2 Documentation - Types and Functions](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Variablendeklaration
int count;
String name;
double price;

// Deklaration mit Initialisierung
int count = 42;
String name = "Hallo";
```

**Besonderheiten:**
- Typ muss explizit angegeben werden
- Lokale Variablen müssen initialisiert werden, bevor sie verwendet werden

**Weiterführende Links:**
- [Java Language Specification - Variables](https://docs.oracle.com/javase/specs/jls/se21/html/jls-4.html#jls-4.12)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Variablendeklaration (mit var, let oder const)
var count;
let name;
const price = 19.99;

// Deklaration mit Initialisierung
var count = 42;
let name = "Hallo";
```

**Besonderheiten:**
- `var`, `let` oder `const` für Variablendeklaration
- `var` hat Function Scope, `let` und `const` haben Block Scope

**Weiterführende Links:**
- [MDN Web Docs - Variables](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#declarations)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Variablendeklaration
count
name
price

# Deklaration mit Initialisierung
count = 42
name = "Hallo"
price = 19.99

# Mit Typannotation
count::Int = 42
name::String = "Hallo"
```

**Besonderheiten:**
- Typ kann explizit angegeben werden oder wird inferiert
- Variablen können ohne Initialisierung deklariert werden

**Weiterführende Links:**
- [Julia Documentation - Variables](https://docs.julialang.org/en/v1/manual/variables/)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Variablendeklaration mit val (immutable)
val count = 42
val name = "Hallo"
val price = 19.99

// Mit expliziter Typannotation
val count2: int = 42
val name2: string = "Hallo"

// Mutable Variablen mit var
var counter := 0
var message := "Start"
```

**Besonderheiten:**
- `val` für immutable Bindungen (Standard)
- `var` für mutable lokale Variablen (mit `:=` für Initialisierung)
- Typinferenz ist Standard, explizite Annotationen optional
- Variablen müssen bei Deklaration initialisiert werden

**Weiterführende Links:**
- [Koka Language Guide - Basics](https://koka-lang.github.io/koka/doc/book.html#sec-basics)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Variablendeklaration mit def (Top-Level)
def count : Nat := 42
def name : String := "Hallo"
def price : Float := 19.99

-- Lokale Variablen mit let
def example : Nat :=
  let count := 42
  let name := "Hallo"
  count + name.length

-- Mit expliziter Typannotation
def example2 : Nat :=
  let count : Nat := 42
  let name : String := "Hallo"
  count + name.length
```

**Besonderheiten:**
- `def` für Top-Level-Definitionen (immutable)
- `let` für lokale Bindungen in Ausdrücken und `do`-Blöcken
- Typinferenz ist Standard, explizite Annotationen optional
- Variablen müssen bei Deklaration initialisiert werden

**Weiterführende Links:**
- [Lean 4 Documentation - Definitions](https://lean-lang.org/lean4/doc/lean-by-example/variables.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Variablendeklaration
var count: Int
var name: String
var price: Double

// Deklaration mit Initialisierung
var count: Int = 42
var name: String = "Hallo"

// Mit Type Inference
var count = 42
var name = "Hallo"
```

**Besonderheiten:**
- `var` für mutable Variablen, `val` für immutable Variablen
- Typ kann explizit angegeben werden oder wird inferiert

**Weiterführende Links:**
- [Kotlin Documentation - Variables](https://kotlinlang.org/docs/basic-syntax.html#variables)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Variablendeklaration (implizit durch Zuweisung)
local count
local name
local price

-- Deklaration mit Initialisierung
local count = 42
local name = "Hallo"
local price = 19.99
```

**Besonderheiten:**
- `local` für lokale Variablen
- Globale Variablen werden ohne `local` deklariert
- Typ wird dynamisch bestimmt

**Weiterführende Links:**
- [Lua Documentation - Variables](https://www.lua.org/manual/5.4/manual.html#3.3.7)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% Variablendeklaration (implizit durch Zuweisung)
count = 42;
name = 'Hallo';
price = 19.99;
```

**Besonderheiten:**
- Variablen werden implizit durch Zuweisung deklariert
- Typ wird dynamisch bestimmt

**Weiterführende Links:**
- [MATLAB Documentation - Variables](https://www.mathworks.com/help/matlab/matlab_prog/creating-and-concatenating-matrices.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```mercury
% Variablendeklaration (implizit durch Verwendung)
:- pred example(int::out, string::out) is det.
example(Count, Name) :-
    Count = 42,
    Name = "Hallo".

% Variablen beginnen mit Großbuchstaben
:- func calculate(int, int) = int.
calculate(X, Y) = X + Y.

% _ ist die anonyme Variable
:- pred print_first(list(T)::in, T::out) is semidet.
print_first([First | _], First).
```

**Besonderheiten:**
- Variablen werden implizit deklariert (kein Keyword nötig)
- Variablen beginnen mit Großbuchstaben oder Unterstrich
- `_` ist die anonyme Variable (jedes Vorkommen ist unabhängig)
- Variablen werden durch Unifikation gebunden, nicht durch Zuweisung
- Starkes Typsystem mit Typinferenz

**Weiterführende Links:**
- [Mercury Language Reference - Syntax](https://www.mercurylang.org/information/doc-release/mercury_ref/Syntax.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# Variablendeklaration
var count: Int
var name: String
var price: Float64

# Deklaration mit Initialisierung
var count: Int = 42
var name: String = "Hallo"

# Mit Type Inference
var count = 42
var name = "Hallo"
```

**Besonderheiten:**
- `var` für Variablendeklaration
- Typ kann explizit angegeben werden oder wird inferiert

**Weiterführende Links:**
- [Mojo Documentation - Variables](https://docs.modular.com/mojo/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Variablendeklaration
var count: int
var name: string
var price: float

# Deklaration mit Initialisierung
var count: int = 42
var name: string = "Hallo"

# Mit Type Inference
var count = 42
var name = "Hallo"
```

**Besonderheiten:**
- `var` für mutable Variablen, `let` für immutable Variablen
- Typ kann explizit angegeben werden oder wird inferiert

**Weiterführende Links:**
- [Nim Documentation - Variables](https://nim-lang.org/docs/manual.html#variables)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objectivec
// Variablendeklaration
int count;
NSString* name;
double price;

// Deklaration mit Initialisierung
int count = 42;
NSString* name = @"Hallo";
```

**Besonderheiten:**
- Typ muss explizit angegeben werden
- Objekte werden als Pointer deklariert

**Weiterführende Links:**
- [Objective-C Documentation - Variables](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Variablendeklaration
var
  count: Integer;
  name: String;
  price: Double;

// Deklaration mit Initialisierung
var
  count: Integer = 42;
  name: String = 'Hallo';
```

**Besonderheiten:**
- `var` Block für Variablendeklarationen
- Typ muss explizit angegeben werden

**Weiterführende Links:**
- [Object Pascal Documentation - Variables](https://www.freepascal.org/docs-html/ref/refse14.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Variablendeklaration (mit let) *)
let count = 42
let name = "Hallo"
let price = 19.99

(* Mit Typannotation *)
let count : int = 42
let name : string = "Hallo"
```

**Besonderheiten:**
- `let` für Variablendeklaration
- Immutable by default
- Typ kann explizit angegeben werden oder wird inferiert

**Weiterführende Links:**
- [OCaml Documentation - Variables](https://ocaml.org/manual/expr.html#ss:expr-let)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
% Variablendeklaration (implizit durch Zuweisung)
count = 42;
name = "Hallo";
price = 19.99;
```

**Besonderheiten:**
- Variablen werden implizit durch Zuweisung deklariert
- Typ wird dynamisch bestimmt

**Weiterführende Links:**
- [Octave Documentation - Variables](https://octave.org/doc/v8.1.0/Variables.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Variablendeklaration
count: int
name: string
price: f64

// Deklaration mit Initialisierung
count: int = 42
name: string = "Hallo"
```

**Besonderheiten:**
- Typ muss explizit angegeben werden
- Variablen können ohne Initialisierung deklariert werden

**Weiterführende Links:**
- [Odin Documentation - Variables](https://odin-lang.org/docs/overview/#variables)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Variablendeklaration (mit my, our oder state)
my $count;
my $name;
my $price;

# Deklaration mit Initialisierung
my $count = 42;
my $name = "Hallo";
```

**Besonderheiten:**
- `my` für lexikalische Variablen
- `our` für Package-Variablen
- `state` für statische Variablen
- Sigils (`$`, `@`, `%`) für Typindikatoren

**Weiterführende Links:**
- [Perl Documentation - Variables](https://perldoc.perl.org/perlvar)

</TabItem>
<TabItem value="php" label="PHP">

```php
// Variablendeklaration (implizit durch Zuweisung)
$count = 42;
$name = "Hallo";
$price = 19.99;

// Funktionsparameter mit Typannotation (seit PHP 7.0)
function add(int $a, int $b): int {
    return $a + $b;
}
```

**Besonderheiten:**
- Variablen werden implizit durch Zuweisung deklariert
- Keine explizite Deklaration ohne Zuweisung möglich
- Typ wird dynamisch bestimmt
- Typannotationen für Parameter und Rückgabewerte (seit PHP 7.0)

**Weiterführende Links:**
- [PHP Documentation - Variables](https://www.php.net/manual/en/language.variables.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Variablendeklaration (implizit durch Verwendung)
example(Count, Name) :-
    Count = 42,
    Name = hello.

% Variablen beginnen mit Großbuchstaben
calculate(X, Y, Result) :-
    Result is X + Y.

% _ ist die anonyme Variable
print_first([First|_]) :-
    format("~w~n", [First]).
```

**Besonderheiten:**
- Variablen werden implizit deklariert (kein Keyword nötig)
- Variablen beginnen mit Großbuchstaben oder Unterstrich
- `_` ist die anonyme Variable (jedes Vorkommen ist unabhängig)
- Variablen werden durch Unifikation gebunden, nicht durch Zuweisung

**Weiterführende Links:**
- [SWI-Prolog Manual - Syntax of Terms](https://www.swi-prolog.org/pldoc/man?section=syntax)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Variablendeklaration (mit let)
example = let
    count = 42
    name = "Hallo"
    price = 19.99
  in count + length name

-- Mit Typannotation
example :: Int
example = let
    count :: Int
    count = 42
  in count
```

**Besonderheiten:**
- Immutable by default
- Variablen werden in `let` Blöcken deklariert
- Typannotationen sind optional, werden aber empfohlen

**Weiterführende Links:**
- [PureScript Documentation - Variables](https://www.purescript.org/learn/getting-started/)

</TabItem>
<TabItem value="python" label="Python">

```python
# Variablendeklaration (implizit durch Zuweisung)
count = 42
name = "Hallo"
price = 19.99

# Mit Typannotation (seit Python 3.6, optional)
count: int = 42
name: str = "Hallo"
```

**Besonderheiten:**
- Variablen werden implizit durch Zuweisung deklariert
- Typannotationen sind optional (seit Python 3.6)
- Typ wird dynamisch bestimmt

**Weiterführende Links:**
- [Python Documentation - Variables](https://docs.python.org/3/reference/executionmodel.html#naming-and-binding)

</TabItem>
<TabItem value="r" label="R">

```r
# Variablendeklaration (implizit durch Zuweisung)
count <- 42
name <- "Hallo"
price <- 19.99

# Alternative Syntax
count = 42
name = "Hallo"
```

**Besonderheiten:**
- Variablen werden implizit durch Zuweisung deklariert
- `<-` oder `=` für Zuweisung
- Typ wird dynamisch bestimmt

**Weiterführende Links:**
- [R Documentation - Variables](https://cran.r-project.org/doc/manuals/r-release/R-intro.html#Simple-manipulations-numbers-vectors-and-matrices)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
;; Variablendeklaration (mit define oder let)
(define count 42)
(define name "Hallo")
(define price 19.99)

;; Lokale Variablen (mit let)
(let ([count 42]
      [name "Hallo"])
  (display count))
```

**Besonderheiten:**
- `define` für globale Bindungen
- `let` für lokale Bindungen
- Immutable by default

**Weiterführende Links:**
- [Racket Documentation - Variables](https://docs.racket-lang.org/guide/define.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Variablendeklaration (mit def)
count = 42
name = "Hallo"
price = 19.99

-- Mit Typannotation
count : I64
count = 42
```

**Besonderheiten:**
- Immutable by default
- Typ kann explizit angegeben werden oder wird inferiert

**Weiterführende Links:**
- [Roc Documentation - Variables](https://www.roc-lang.org/)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Variablendeklaration (implizit durch Zuweisung)
count = 42
name = "Hallo"
price = 19.99

# Lokale Variablen
count = 42
name = "Hallo"
```

**Besonderheiten:**
- Variablen werden implizit durch Zuweisung deklariert
- Typ wird dynamisch bestimmt
- Lokale Variablen beginnen mit Kleinbuchstaben

**Weiterführende Links:**
- [Ruby Documentation - Variables](https://ruby-doc.org/core-3.1.2/doc/syntax/assignment_rdoc.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Variablendeklaration
let count: i32;
let name: String;
let price: f64;

// Deklaration mit Initialisierung
let count: i32 = 42;
let name: String = "Hallo".to_string();

// Mit Type Inference
let count = 42;
let name = "Hallo".to_string();
```

**Besonderheiten:**
- `let` für Variablendeklaration
- Immutable by default (`mut` für mutable Variablen)
- Typ kann explizit angegeben werden oder wird inferiert

**Weiterführende Links:**
- [Rust Documentation - Variables](https://doc.rust-lang.org/book/ch03-01-variables-and-mutability.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Variablendeklaration
var count: Int
var name: String
var price: Double

// Deklaration mit Initialisierung
var count: Int = 42
var name: String = "Hallo"

// Mit Type Inference
var count = 42
var name = "Hallo"
```

**Besonderheiten:**
- `var` für mutable Variablen, `val` für immutable Variablen
- Typ kann explizit angegeben werden oder wird inferiert

**Weiterführende Links:**
- [Scala Documentation - Variables](https://docs.scala-lang.org/tour/basics.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; Variablendeklaration (mit define oder let)
(define count 42)
(define name "Hallo")
(define price 19.99)

;; Lokale Variablen (mit let)
(let ((count 42)
      (name "Hallo"))
  (display count))
```

**Besonderheiten:**
- `define` für globale Bindungen
- `let` für lokale Bindungen
- Immutable by default

**Weiterführende Links:**
- [Scheme Documentation - Variables](https://www.scheme.com/tspl4/binding.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Variablendeklaration
var count: Int
var name: String
var price: Double

// Deklaration mit Initialisierung
var count: Int = 42
var name: String = "Hallo"

// Mit Type Inference
var count = 42
var name = "Hallo"
```

**Besonderheiten:**
- `var` für mutable Variablen, `let` für immutable Variablen
- Typ kann explizit angegeben werden oder wird inferiert

**Weiterführende Links:**
- [Swift Documentation - Variables](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/thebasics/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Variablendeklaration (mit var, let oder const)
var count: number;
let name: string;
const price: number = 19.99;

// Deklaration mit Initialisierung
var count: number = 42;
let name: string = "Hallo";

// Mit Type Inference
var count = 42;
let name = "Hallo";
```

**Besonderheiten:**
- `var`, `let` oder `const` für Variablendeklaration
- Typ kann explizit angegeben werden oder wird inferiert
- `var` hat Function Scope, `let` und `const` haben Block Scope

**Weiterführende Links:**
- [TypeScript Documentation - Variables](https://www.typescriptlang.org/docs/handbook/variable-declarations.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vbnet
' Variablendeklaration
Dim count As Integer
Dim name As String
Dim price As Double

' Deklaration mit Initialisierung
Dim count As Integer = 42
Dim name As String = "Hallo"
```

**Besonderheiten:**
- `Dim` für Variablendeklaration
- Typ muss explizit angegeben werden (außer bei Type Inference)

**Weiterführende Links:**
- [VB.NET Documentation - Variables](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/variables/)

</TabItem>
<TabItem value="v" label="V">

```v
// Variablendeklaration
mut count int
mut name string
mut price f64

// Deklaration mit Initialisierung
mut count int = 42
mut name string = "Hallo"

// Mit Type Inference
mut count := 42
mut name := "Hallo"
```

**Besonderheiten:**
- `mut` für mutable Variablen
- Typ kann explizit angegeben werden oder wird inferiert
- `:=` für kurze Deklaration mit Type Inference

**Weiterführende Links:**
- [V Documentation - Variables](https://github.com/vlang/v/blob/master/doc/docs.md)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```wolfram
(* Variablendeklaration (implizit durch Zuweisung) *)
count = 42
name = "Hallo"
price = 19.99

(* Mit Typannotation *)
count = 42 (* Integer *)
name = "Hallo" (* String *)
```

**Besonderheiten:**
- Variablen werden implizit durch Zuweisung deklariert
- Typ wird dynamisch bestimmt
- Pattern Matching für Variablendeklaration

**Weiterführende Links:**
- [Wolfram Language Documentation - Variables](https://reference.wolfram.com/language/guide/VariablesAndFunctions.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Variablendeklaration
var count: i32 = undefined;
var name: []const u8 = undefined;
var price: f64 = undefined;

// Deklaration mit Initialisierung
var count: i32 = 42;
var name: []const u8 = "Hallo";
```

**Besonderheiten:**
- `var` für mutable Variablen, `const` für immutable Variablen
- Typ muss explizit angegeben werden
- `undefined` für nicht initialisierte Variablen

**Weiterführende Links:**
- [Zig Documentation - Variables](https://ziglang.org/documentation/0.11.0/#Variables)

</TabItem>
</Tabs>


## 4.1.2. Variable Assignment

Zuweisung von Werten an bereits deklarierte Variablen.

### Sprachen {#sprachen}

<Tabs availableTabs={['ada', 'c', 'carbon', 'clojure', 'common-lisp', 'crystal', 'csharp', 'cpp', 'd', 'dart', 'eiffel', 'elixir', 'erlang', 'fsharp', 'fortran', 'go', 'groovy', 'haxe', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'lua', 'matlab', 'mojo', 'nim', 'objective-c', 'object-pascal', 'ocaml', 'octave', 'odin', 'perl', 'php', 'python', 'r', 'racket', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'vbnet', 'v', 'wolfram-language', 'zig']} orangeTabs={['elm', 'gleam', 'haskell', 'idris', 'mercury', 'prolog', 'purescript', 'roc']}>
<TabItem value="ada" label="Ada">

```ada
-- Variablenzuweisung
count : Integer := 10;
count := 42;
name : String := "Welt";
name := "Hallo";
```

**Besonderheiten:**
- `:=` für Zuweisung
- Typ muss bei Deklaration angegeben werden

**Weiterführende Links:**
- [Ada Reference Manual - Assignment Statements](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-5-2.html)

</TabItem>
<TabItem value="c" label="C">

```c
// Variablenzuweisung
int count = 10;
count = 42;
char* name = "Welt";
name = "Hallo";
```

**Besonderheiten:**
- `=` für Zuweisung
- Typ muss bei Deklaration angegeben werden

**Weiterführende Links:**
- [C Standard - Assignment Operators](https://en.cppreference.com/w/c/language/operator_assignment)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Variablenzuweisung
int count = 10;
count = 42;
string name = "Welt";
name = "Hallo";
```

**Besonderheiten:**
- `=` für Zuweisung
- Typ muss bei Deklaration angegeben werden (außer bei `var`)

**Weiterführende Links:**
- [Microsoft C# Documentation - Assignment Operators](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/assignment-operator)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Variablenzuweisung
int count = 10;
count = 42;
std::string name = "Welt";
name = "Hallo";
```

**Besonderheiten:**
- `=` für Zuweisung
- Typ muss bei Deklaration angegeben werden (außer bei `auto`)

**Weiterführende Links:**
- [cppreference.com - Assignment Operators](https://en.cppreference.com/w/cpp/language/operator_assignment)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Variablenzuweisung
var count: i32 = 10;
count = 42;
var name: String = "Welt";
name = "Hallo";
```

**Besonderheiten:**
- `=` für Zuweisung
- Experimentelle Sprache, Syntax kann sich noch ändern

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Variablenzuweisung (mit atom für mutable Variablen)
(def count (atom 10))
(swap! count (fn [_] 42))

;; Lokale Bindungen sind immutable
(let [count 10
      count 42]  ; Shadowing, nicht Zuweisung
  count)
```

**Besonderheiten:**
- Immutable by default
- `atom` für mutable Variablen mit `swap!` oder `reset!`
- Lokale Bindungen können nicht neu zugewiesen werden

**Weiterführende Links:**
- [Clojure Documentation - Atoms](https://clojure.org/reference/atoms)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Variablenzuweisung
(defvar count 10)
(setf count 42)
(defparameter name "Welt")
(setf name "Hallo")
```

**Besonderheiten:**
- `setf` für Zuweisung
- `defvar` und `defparameter` für Variablendeklaration

**Weiterführende Links:**
- [Common Lisp HyperSpec - Assignment](http://www.lispworks.com/documentation/HyperSpec/Body/m_setf_.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Variablenzuweisung
count = 10
count = 42
name = "Welt"
name = "Hallo"
```

**Besonderheiten:**
- `=` für Zuweisung
- Typ wird inferiert oder kann explizit angegeben werden

**Weiterführende Links:**
- [Crystal Documentation - Variables](https://crystal-lang.org/reference/1.11/syntax_and_semantics/variables.html)

</TabItem>
<TabItem value="d" label="D">

```d
// Variablenzuweisung
int count = 10;
count = 42;
string name = "Welt";
name = "Hallo";
```

**Besonderheiten:**
- `=` für Zuweisung
- Typ muss bei Deklaration angegeben werden

**Weiterführende Links:**
- [D Language Specification - Assignment](https://dlang.org/spec/expression.html#assignment_expressions)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Variablenzuweisung
int count = 10;
count = 42;
String name = "Welt";
name = "Hallo";
```

**Besonderheiten:**
- `=` für Zuweisung
- Typ kann bei Deklaration angegeben werden oder wird inferiert

**Weiterführende Links:**
- [Dart Language Tour - Variables](https://dart.dev/guides/language/language-tour#variables)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
-- Variablenzuweisung
count: INTEGER := 10
count := 42
name: STRING := "Welt"
name := "Hallo"
```

**Besonderheiten:**
- `:=` für Zuweisung
- Typ muss bei Deklaration angegeben werden

**Weiterführende Links:**
- [Eiffel Documentation - Assignment](https://www.eiffel.org/doc/eiffel/Assignment)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Variablenzuweisung (Pattern Matching)
count = 10
count = 42  # Neue Bindung, nicht Zuweisung
name = "Welt"
name = "Hallo"
```

**Besonderheiten:**
- `=` für Pattern Matching, nicht Zuweisung
- Technisch gesehen werden Variablen neu gebunden, nicht zugewiesen
- Immutable by default

**Weiterführende Links:**
- [Elixir Documentation - Pattern Matching](https://elixir-lang.org/getting-started/pattern-matching.html)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Variablenzuweisung (nicht möglich, da immutable)
count = 10
-- count = 42  -- Fehler: kann nicht neu zugewiesen werden

-- Neue Bindung mit anderem Namen
count2 = 42
```

**Besonderheiten:**
- Immutable by default
- Variablen können nicht neu zugewiesen werden
- Neue Bindungen mit anderen Namen müssen erstellt werden

**Weiterführende Links:**
- [Elm Documentation - Values](https://guide.elm-lang.org/core_language.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% Variablenzuweisung (Pattern Matching)
Count = 10,
Count = 42,  % Fehler: kann nicht neu zugewiesen werden

% Neue Bindung mit anderem Namen
Count2 = 42.
```

**Besonderheiten:**
- `=` für Pattern Matching, nicht Zuweisung
- Immutable by default
- Variablen können nicht neu zugewiesen werden

**Weiterführende Links:**
- [Erlang Documentation - Variables](https://www.erlang.org/doc/reference_manual/data_types.html#variables)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Variablenzuweisung (mutable Variablen)
let mutable count = 10
count <- 42
let mutable name = "Welt"
name <- "Hallo"
```

**Besonderheiten:**
- `<-` für Zuweisung an mutable Variablen
- `mutable` Keyword erforderlich für Zuweisung
- Immutable by default

**Weiterführende Links:**
- [F# Documentation - Mutable Variables](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/values/#mutable-variables)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Variablenzuweisung
integer :: count = 10
count = 42
character(len=10) :: name = "Welt"
name = "Hallo"
```

**Besonderheiten:**
- `=` für Zuweisung
- Typ muss bei Deklaration angegeben werden

**Weiterführende Links:**
- [Fortran Standard - Assignment](https://gcc.gnu.org/onlinedocs/gfortran/Assignment.html)

</TabItem>
<TabItem value="gleam" label="Gleam">

```erlang
// Variablenzuweisung (nicht möglich, da immutable)
let count = 10
// count = 42  // Fehler: kann nicht neu zugewiesen werden

// Neue Bindung mit anderem Namen
let count2 = 42
```

**Besonderheiten:**
- Immutable by default
- Variablen können nicht neu zugewiesen werden
- Neue Bindungen mit anderen Namen müssen erstellt werden

**Weiterführende Links:**
- [Gleam Documentation - Variables](https://gleam.run/documentation/)

</TabItem>
<TabItem value="go" label="Go">

```go
// Variablenzuweisung
var count int = 10
count = 42
var name string = "Welt"
name = "Hallo"
```

**Besonderheiten:**
- `=` für Zuweisung
- Typ kann bei Deklaration angegeben werden oder wird inferiert

**Weiterführende Links:**
- [Go Documentation - Assignment](https://go.dev/ref/spec#Assignments)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Variablenzuweisung
def count = 10
count = 42
def name = "Welt"
name = "Hallo"
```

**Besonderheiten:**
- `=` für Zuweisung
- Typ wird dynamisch bestimmt oder kann explizit angegeben werden

**Weiterführende Links:**
- [Groovy Documentation - Variables](https://groovy-lang.org/semantics.html#_variable_declaration)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Variablenzuweisung (nicht möglich, da immutable)
count = 10
-- count = 42  -- Fehler: kann nicht neu zugewiesen werden

-- Neue Bindung mit anderem Namen
count2 = 42
```

**Besonderheiten:**
- Immutable by default
- Variablen können nicht neu zugewiesen werden
- Neue Bindungen mit anderen Namen müssen erstellt werden

**Weiterführende Links:**
- [Haskell Documentation - Variables](https://www.haskell.org/tutorial/variables.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Variablenzuweisung
var count: Int = 10;
count = 42;
var name: String = "Welt";
name = "Hallo";
```

**Besonderheiten:**
- `=` für Zuweisung
- Typ kann bei Deklaration angegeben werden oder wird inferiert

**Weiterführende Links:**
- [Haxe Documentation - Variables](https://haxe.org/manual/expression-var.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Variablenzuweisung (nicht möglich, da immutable)
count : Int
count = 10
-- count = 42  -- Fehler: kann nicht neu zugewiesen werden

-- Neue Bindung mit anderem Namen
count2 : Int
count2 = 42
```

**Besonderheiten:**
- Immutable by default
- Variablen können nicht neu zugewiesen werden
- Neue Bindungen mit anderen Namen müssen erstellt werden

**Weiterführende Links:**
- [Idris 2 Documentation - Types and Functions](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Variablenzuweisung
int count = 10;
count = 42;
String name = "Welt";
name = "Hallo";
```

**Besonderheiten:**
- `=` für Zuweisung
- Typ muss bei Deklaration angegeben werden

**Weiterführende Links:**
- [Java Language Specification - Assignment](https://docs.oracle.com/javase/specs/jls/se21/html/jls-15.html#jls-15.26)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Variablenzuweisung
var count = 10;
count = 42;
let name = "Welt";
name = "Hallo";
const price = 19.99;
// price = 20.00;  // Fehler: const kann nicht neu zugewiesen werden
```

**Besonderheiten:**
- `=` für Zuweisung
- `var` und `let` für mutable Variablen
- `const` für immutable Variablen

**Weiterführende Links:**
- [MDN Web Docs - Assignment Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Variablenzuweisung
count = 10
count = 42
name = "Welt"
name = "Hallo"
```

**Besonderheiten:**
- `=` für Zuweisung
- Typ wird dynamisch bestimmt oder kann explizit angegeben werden

**Weiterführende Links:**
- [Julia Documentation - Variables](https://docs.julialang.org/en/v1/manual/variables/)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Variablenzuweisung mit var und :=
var count := 10
count := 42
var name := "Welt"
name := "Hallo"

// val kann nicht neu zugewiesen werden
val price = 19.99
// price := 20.00  // Compile-Fehler: val ist immutable
```

**Besonderheiten:**
- `:=` für Zuweisung an `var`-Variablen
- `val`-Bindungen sind immutable und können nicht neu zugewiesen werden
- `var` ist auf lokalen Scope beschränkt (kein globales `var`)

**Weiterführende Links:**
- [Koka Language Guide - Basics](https://koka-lang.github.io/koka/doc/book.html#sec-basics)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Variablenzuweisung mit let mut
def example : IO Unit := do
  let mut count := 10
  count := 42
  let mut name := "Welt"
  name := "Hallo"
  IO.println s!"{count}"  -- 42
  IO.println name          -- Hallo

-- let-Bindungen können nicht neu zugewiesen werden
-- let x := 10
-- x := 20  -- Fehler: let-Bindungen sind immutable
```

**Besonderheiten:**
- `:=` für Zuweisung an `let mut`-Variablen
- `let`-Bindungen sind immutable und können nicht neu zugewiesen werden
- `let mut` ist nur in `do`-Blöcken verfügbar

**Weiterführende Links:**
- [Lean 4 Documentation - Mutable Variables](https://lean-lang.org/lean4/doc/do.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Variablenzuweisung
var count = 10
count = 42
var name = "Welt"
name = "Hallo"
val price = 19.99
// price = 20.00  // Fehler: val kann nicht neu zugewiesen werden
```

**Besonderheiten:**
- `=` für Zuweisung
- `var` für mutable Variablen
- `val` für immutable Variablen

**Weiterführende Links:**
- [Kotlin Documentation - Variables](https://kotlinlang.org/docs/basic-syntax.html#variables)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Variablenzuweisung
local count = 10
count = 42
local name = "Welt"
name = "Hallo"
```

**Besonderheiten:**
- `=` für Zuweisung
- Typ wird dynamisch bestimmt

**Weiterführende Links:**
- [Lua Documentation - Variables](https://www.lua.org/manual/5.4/manual.html#3.3.7)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% Variablenzuweisung
count = 10;
count = 42;
name = 'Welt';
name = 'Hallo';
```

**Besonderheiten:**
- `=` für Zuweisung
- Typ wird dynamisch bestimmt

**Weiterführende Links:**
- [MATLAB Documentation - Variables](https://www.mathworks.com/help/matlab/matlab_prog/creating-and-concatenating-matrices.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```mercury
% Variablenbindung durch Unifikation (keine Neuzuweisung)
:- pred example(io::di, io::uo) is det.
example(!IO) :-
    Count = 42,
    % Count = 100  % Fehler: Count ist bereits an 42 gebunden

    % Neue Bindung mit anderem Namen
    Count2 = 100,
    io.format("%d %d\n", [i(Count), i(Count2)], !IO).
```

**Besonderheiten:**
- `=` ist Unifikation, nicht Zuweisung
- Variablen können nicht neu zugewiesen werden (einmalige Bindung)
- Neue Bindungen müssen mit neuen Variablennamen erstellt werden
- `is/2` wertet arithmetische Ausdrücke nicht aus — stattdessen werden Funktionen verwendet

**Weiterführende Links:**
- [Mercury Language Reference - Unification](https://www.mercurylang.org/information/doc-release/mercury_ref/Builtin-unification-and-comparison.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# Variablenzuweisung
var count: Int = 10
count = 42
var name: String = "Welt"
name = "Hallo"
```

**Besonderheiten:**
- `=` für Zuweisung
- Typ kann bei Deklaration angegeben werden oder wird inferiert

**Weiterführende Links:**
- [Mojo Documentation - Variables](https://docs.modular.com/mojo/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Variablenzuweisung
var count = 10
count = 42
var name = "Welt"
name = "Hallo"
```

**Besonderheiten:**
- `=` für Zuweisung
- `var` für mutable Variablen
- Typ kann bei Deklaration angegeben werden oder wird inferiert

**Weiterführende Links:**
- [Nim Documentation - Variables](https://nim-lang.org/docs/manual.html#variables)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objectivec
// Variablenzuweisung
int count = 10;
count = 42;
NSString* name = @"Welt";
name = @"Hallo";
```

**Besonderheiten:**
- `=` für Zuweisung
- Typ muss bei Deklaration angegeben werden

**Weiterführende Links:**
- [Objective-C Documentation - Variables](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Variablenzuweisung
var
  count: Integer = 10;
  name: String = 'Welt';
begin
  count := 42;
  name := 'Hallo';
end;
```

**Besonderheiten:**
- `:=` für Zuweisung
- Typ muss bei Deklaration angegeben werden

**Weiterführende Links:**
- [Object Pascal Documentation - Variables](https://www.freepascal.org/docs-html/ref/refse14.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Variablenzuweisung (mutable Variablen) *)
let count = ref 10
count := 42
let name = ref "Welt"
name := "Hallo"
```

**Besonderheiten:**
- `:=` für Zuweisung an `ref` Variablen
- `ref` für mutable Variablen
- Immutable by default

**Weiterführende Links:**
- [OCaml Documentation - References](https://ocaml.org/manual/coreexamples.html#s:references)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
% Variablenzuweisung
count = 10;
count = 42;
name = "Welt";
name = "Hallo";
```

**Besonderheiten:**
- `=` für Zuweisung
- Typ wird dynamisch bestimmt

**Weiterführende Links:**
- [Octave Documentation - Variables](https://octave.org/doc/v8.1.0/Variables.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Variablenzuweisung
count: int = 10
count = 42
name: string = "Welt"
name = "Hallo"
```

**Besonderheiten:**
- `=` für Zuweisung
- Typ muss bei Deklaration angegeben werden

**Weiterführende Links:**
- [Odin Documentation - Variables](https://odin-lang.org/docs/overview/#variables)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Variablenzuweisung
my $count = 10;
$count = 42;
my $name = "Welt";
$name = "Hallo";
```

**Besonderheiten:**
- `=` für Zuweisung
- Sigils (`$`, `@`, `%`) für Typindikatoren

**Weiterführende Links:**
- [Perl Documentation - Variables](https://perldoc.perl.org/perlvar)

</TabItem>
<TabItem value="php" label="PHP">

```php
// Variablenzuweisung
$count = 10;
$count = 42;
$name = "Welt";
$name = "Hallo";
```

**Besonderheiten:**
- `=` für Zuweisung
- Typ wird dynamisch bestimmt

**Weiterführende Links:**
- [PHP Documentation - Variables](https://www.php.net/manual/en/language.variables.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Variablenbindung durch Unifikation (keine Neuzuweisung)
example :-
    Count = 42,
    % Count = 100  % Fehler: Count ist bereits an 42 gebunden

    % Neue Bindung mit anderem Namen
    Count2 = 100,
    format("~w ~w~n", [Count, Count2]).
```

**Besonderheiten:**
- `=` ist Unifikation, nicht Zuweisung
- Variablen können nicht neu zugewiesen werden (einmalige Bindung)
- Neue Bindungen müssen mit neuen Variablennamen erstellt werden
- `is/2` wertet arithmetische Ausdrücke aus und unifiziert das Ergebnis

**Weiterführende Links:**
- [SWI-Prolog Manual - Unification](https://www.swi-prolog.org/pldoc/man?predicate=%3D/2)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Variablenzuweisung (nicht möglich, da immutable)
count = 10
-- count = 42  -- Fehler: kann nicht neu zugewiesen werden

-- Neue Bindung mit anderem Namen
count2 = 42
```

**Besonderheiten:**
- Immutable by default
- Variablen können nicht neu zugewiesen werden
- Neue Bindungen mit anderen Namen müssen erstellt werden

**Weiterführende Links:**
- [PureScript Documentation - Variables](https://www.purescript.org/learn/getting-started/)

</TabItem>
<TabItem value="python" label="Python">

```python
# Variablenzuweisung
count = 10
count = 42
name = "Welt"
name = "Hallo"
```

**Besonderheiten:**
- `=` für Zuweisung
- Typ wird dynamisch bestimmt

**Weiterführende Links:**
- [Python Documentation - Assignment Statements](https://docs.python.org/3/reference/simple_stmts.html#assignment-statements)

</TabItem>
<TabItem value="r" label="R">

```r
# Variablenzuweisung
count <- 10
count <- 42
name <- "Welt"
name <- "Hallo"

# Alternative Syntax
count = 10
count = 42
```

**Besonderheiten:**
- `<-` oder `=` für Zuweisung
- Typ wird dynamisch bestimmt

**Weiterführende Links:**
- [R Documentation - Variables](https://cran.r-project.org/doc/manuals/r-release/R-intro.html#Simple-manipulations-numbers-vectors-and-matrices)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
;; Variablenzuweisung (mutable Variablen)
(define count 10)
(set! count 42)
(define name "Welt")
(set! name "Hallo")
```

**Besonderheiten:**
- `set!` für Zuweisung an bestehende Variablen
- `define` erstellt Bindungen, die mit `set!` geändert werden können
- Mutation mit `set!` ist möglich, wird aber stilistisch vermieden

**Weiterführende Links:**
- [Racket Documentation - Assignment](https://docs.racket-lang.org/guide/set_.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Variablenzuweisung (nicht möglich, da immutable)
count = 10
-- count = 42  -- Fehler: kann nicht neu zugewiesen werden

-- Neue Bindung mit anderem Namen
count2 = 42
```

**Besonderheiten:**
- Immutable by default
- Variablen können nicht neu zugewiesen werden
- Neue Bindungen mit anderen Namen müssen erstellt werden

**Weiterführende Links:**
- [Roc Documentation - Variables](https://www.roc-lang.org/)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Variablenzuweisung
count = 10
count = 42
name = "Welt"
name = "Hallo"
```

**Besonderheiten:**
- `=` für Zuweisung
- Typ wird dynamisch bestimmt

**Weiterführende Links:**
- [Ruby Documentation - Variables](https://ruby-doc.org/core-3.1.2/doc/syntax/assignment_rdoc.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Variablenzuweisung
let mut count = 10;
count = 42;
let mut name = "Welt".to_string();
name = "Hallo".to_string();
```

**Besonderheiten:**
- `=` für Zuweisung
- `mut` Keyword erforderlich für mutable Variablen
- Immutable by default

**Weiterführende Links:**
- [Rust Documentation - Variables](https://doc.rust-lang.org/book/ch03-01-variables-and-mutability.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Variablenzuweisung
var count = 10
count = 42
var name = "Welt"
name = "Hallo"
```

**Besonderheiten:**
- `=` für Zuweisung
- `var` für mutable Variablen
- `val` für immutable Variablen

**Weiterführende Links:**
- [Scala Documentation - Variables](https://docs.scala-lang.org/tour/basics.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; Variablenzuweisung (mutable Variablen)
(define count 10)
(set! count 42)
(define name "Welt")
(set! name "Hallo")
```

**Besonderheiten:**
- `set!` für Zuweisung an mutable Variablen
- `define` erstellt standardmäßig immutable Bindungen
- `set!` erfordert, dass die Variable mit `define` als mutable deklariert wurde

**Weiterführende Links:**
- [Scheme Documentation - Assignment](https://www.scheme.com/tspl4/assignment.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Variablenzuweisung
var count = 10
count = 42
var name = "Welt"
name = "Hallo"
```

**Besonderheiten:**
- `=` für Zuweisung
- `var` für mutable Variablen
- `let` für immutable Variablen

**Weiterführende Links:**
- [Swift Documentation - Variables](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/thebasics/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Variablenzuweisung
var count = 10;
count = 42;
let name = "Welt";
name = "Hallo";
const price = 19.99;
// price = 20.00;  // Fehler: const kann nicht neu zugewiesen werden
```

**Besonderheiten:**
- `=` für Zuweisung
- `var` und `let` für mutable Variablen
- `const` für immutable Variablen

**Weiterführende Links:**
- [TypeScript Documentation - Variable Declarations](https://www.typescriptlang.org/docs/handbook/variable-declarations.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vbnet
' Variablenzuweisung
Dim count As Integer = 10
count = 42
Dim name As String = "Welt"
name = "Hallo"
```

**Besonderheiten:**
- `=` für Zuweisung
- Typ kann bei Deklaration angegeben werden oder wird inferiert

**Weiterführende Links:**
- [VB.NET Documentation - Variables](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/variables/)

</TabItem>
<TabItem value="v" label="V">

```v
// Variablenzuweisung
mut count := 10
count = 42
mut name := "Welt"
name = "Hallo"
```

**Besonderheiten:**
- `=` für Zuweisung
- `mut` für mutable Variablen
- `:=` für kurze Deklaration mit Type Inference

**Weiterführende Links:**
- [V Documentation - Variables](https://github.com/vlang/v/blob/master/doc/docs.md)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```wolfram
(* Variablenzuweisung *)
count = 10
count = 42
name = "Welt"
name = "Hallo"
```

**Besonderheiten:**
- `=` für Zuweisung
- Typ wird dynamisch bestimmt

**Weiterführende Links:**
- [Wolfram Language Documentation - Variables](https://reference.wolfram.com/language/guide/VariablesAndFunctions.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Variablenzuweisung
var count: i32 = 10;
count = 42;
var name: []const u8 = "Welt";
name = "Hallo";
```

**Besonderheiten:**
- `=` für Zuweisung
- `var` für mutable Variablen
- Typ muss bei Deklaration angegeben werden

**Weiterführende Links:**
- [Zig Documentation - Variables](https://ziglang.org/documentation/0.11.0/#Variables)

</TabItem>
</Tabs>


## 4.1.3. Immutable Variables (const, let, val)

Variablen, die nach der Initialisierung nicht mehr geändert werden können.

### Sprachen {#sprachen}

<Tabs availableTabs={['carbon', 'clojure', 'csharp', 'd', 'dart', 'elixir', 'elm', 'erlang', 'fortran', 'fsharp', 'gleam', 'groovy', 'haskell', 'haxe', 'idris', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'mercury', 'nim', 'objective-c', 'object-pascal', 'ocaml', 'php', 'prolog', 'purescript', 'racket', 'roc', 'rust', 'scala', 'swift', 'typescript', 'v', 'zig']} orangeTabs={['common-lisp', 'scheme']}>
<TabItem value="csharp" label="C#">

```csharp
// Immutable Variablen (const und readonly)
const int count = 42;
readonly string name = "Hallo";

// const für Compile-Time-Konstanten
const double PI = 3.14159;

// readonly für Runtime-Konstanten
readonly DateTime createdAt = DateTime.Now;
```

**Besonderheiten:**
- `const` für Compile-Time-Konstanten
- `readonly` für Runtime-Konstanten (nur in Klassen)

**Weiterführende Links:**
- [Microsoft C# Documentation - const](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/const)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Immutable Variablen (final und const)
final int count = 42;
const String name = "Hallo";

// final für Runtime-Konstanten
final DateTime now = DateTime.now();

// const für Compile-Time-Konstanten
const double PI = 3.14159;
```

**Besonderheiten:**
- `final` für Runtime-Konstanten
- `const` für Compile-Time-Konstanten

**Weiterführende Links:**
- [Dart Language Tour - Final and Const](https://dart.dev/guides/language/language-tour#final-and-const)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Immutable Variablen (const)
const count = 42;
const name = "Hallo";
const price = 19.99;

// const kann nicht neu zugewiesen werden
// count = 50;  // Fehler: Assignment to constant variable
```

**Besonderheiten:**
- `const` für immutable Variablen (seit ES6)
- `const` verhindert Reassignment, aber Objekte können modifiziert werden

**Weiterführende Links:**
- [MDN Web Docs - const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Immutable Variablen (const)
const count = 42;
const name = "Hallo";
const price = 19.99;

// const kann nicht neu zugewiesen werden
// count = 50;  // Fehler: Cannot assign to 'count' because it is a constant
```

**Besonderheiten:**
- `const` für immutable Variablen
- `const` verhindert Reassignment, aber Objekte können modifiziert werden

**Weiterführende Links:**
- [TypeScript Documentation - const](https://www.typescriptlang.org/docs/handbook/variable-declarations.html#const-declarations)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Immutable Variablen (val)
val count = 42
val name = "Hallo"
val price = 19.99

// val kann nicht neu zugewiesen werden
// count = 50  // Fehler: Val cannot be reassigned
```

**Besonderheiten:**
- `val` für immutable Variablen
- `var` für mutable Variablen

**Weiterführende Links:**
- [Kotlin Documentation - Properties](https://kotlinlang.org/docs/properties.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Immutable Variablen (val)
val count = 42
val name = "Hallo"
val price = 19.99

// val kann nicht neu zugewiesen werden
// count = 50  // Fehler: reassignment to val
```

**Besonderheiten:**
- `val` für immutable Variablen
- `var` für mutable Variablen

**Weiterführende Links:**
- [Scala Documentation - Values](https://docs.scala-lang.org/tour/basics.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Immutable Variablen (let)
let count = 42
let name = "Hallo"
let price = 19.99

// let kann nicht neu zugewiesen werden
// count = 50  // Fehler: Cannot assign to value: 'count' is a 'let' constant
```

**Besonderheiten:**
- `let` für immutable Variablen
- `var` für mutable Variablen

**Weiterführende Links:**
- [Swift Documentation - Constants and Variables](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/thebasics/)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Immutable Variablen (let ohne mut)
let count = 42;
let name = "Hallo".to_string();
let price = 19.99;

// let kann nicht neu zugewiesen werden
// count = 50;  // Fehler: cannot assign twice to immutable variable
```

**Besonderheiten:**
- `let` für immutable Variablen (Standard)
- `let mut` für mutable Variablen

**Weiterführende Links:**
- [Rust Documentation - Variables](https://doc.rust-lang.org/book/ch03-01-variables-and-mutability.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Immutable Variablen (let)
let count = 42
let name = "Hallo"
let price = 19.99

# let kann nicht neu zugewiesen werden
# count = 50  # Fehler: 'count' cannot be assigned to
```

**Besonderheiten:**
- `let` für immutable Variablen
- `var` für mutable Variablen

**Weiterführende Links:**
- [Nim Documentation - Variables](https://nim-lang.org/docs/manual.html#variables)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Immutable Variablen (let ohne mutable)
let count = 42
let name = "Hallo"
let price = 19.99

// let kann nicht neu zugewiesen werden
// count <- 50  // Fehler: Dieser Wert ist unveränderlich
```

**Besonderheiten:**
- `let` für immutable Variablen (Standard)
- `let mutable` für mutable Variablen

**Weiterführende Links:**
- [F# Documentation - Values](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/values/)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Immutable Variablen (let ohne ref) *)
let count = 42
let name = "Hallo"
let price = 19.99

(* let kann nicht neu zugewiesen werden *)
(* count := 50  (* Fehler: nur ref Variablen können zugewiesen werden *) *)
```

**Besonderheiten:**
- `let` für immutable Variablen (Standard)
- `ref` für mutable Variablen

**Weiterführende Links:**
- [OCaml Documentation - Values](https://ocaml.org/manual/expr.html#ss:expr-let)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Immutable Variablen (Standard)
count = 42
name = "Hallo"
price = 19.99

-- Alle Variablen sind immutable
-- count = 50  -- Fehler: kann nicht neu zugewiesen werden
```

**Besonderheiten:**
- Alle Variablen sind standardmäßig immutable
- Keine expliziten Keywords erforderlich

**Weiterführende Links:**
- [Haskell Documentation - Variables](https://www.haskell.org/tutorial/variables.html)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Immutable Variablen (Standard)
count = 42
name = "Hallo"
price = 19.99

-- Alle Variablen sind immutable
-- count = 50  -- Fehler: kann nicht neu zugewiesen werden
```

**Besonderheiten:**
- Alle Variablen sind standardmäßig immutable
- Keine expliziten Keywords erforderlich

**Weiterführende Links:**
- [Elm Documentation - Values](https://guide.elm-lang.org/core_language.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% Immutable Variablen (Standard)
Count = 42,
Name = "Hallo",
Price = 19.99.

% Alle Variablen sind immutable
% Count = 50.  % Fehler: kann nicht neu zugewiesen werden
```

**Besonderheiten:**
- Alle Variablen sind standardmäßig immutable
- Pattern Matching statt Zuweisung

**Weiterführende Links:**
- [Erlang Documentation - Variables](https://www.erlang.org/doc/reference_manual/data_types.html#variables)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Immutable Variablen (Standard)
count = 42
name = "Hallo"
price = 19.99

# Alle Variablen sind immutable
# count = 50  # Neue Bindung, nicht Zuweisung
```

**Besonderheiten:**
- Alle Variablen sind standardmäßig immutable
- `=` ist Pattern Matching, nicht Zuweisung

**Weiterführende Links:**
- [Elixir Documentation - Pattern Matching](https://elixir-lang.org/getting-started/pattern-matching.html)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Immutable Variablen (Standard)
(def count 42)
(def name "Hallo")
(def price 19.99)

;; Alle Variablen sind immutable
;; count = 50  ;; Fehler: kann nicht neu zugewiesen werden
```

**Besonderheiten:**
- Alle Variablen sind standardmäßig immutable
- `def` für globale Bindungen, `let` für lokale Bindungen

**Weiterführende Links:**
- [Clojure Documentation - Vars](https://clojure.org/reference/vars)

</TabItem>
<TabItem value="gleam" label="Gleam">

```erlang
// Immutable Variablen (Standard)
let count = 42
let name = "Hallo"
let price = 19.99

// Alle Variablen sind immutable
// count = 50  // Fehler: kann nicht neu zugewiesen werden
```

**Besonderheiten:**
- Alle Variablen sind standardmäßig immutable
- `let` für Variablendeklaration

**Weiterführende Links:**
- [Gleam Documentation - Variables](https://gleam.run/documentation/)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Immutable Variablen (Standard)
count = 42
name = "Hallo"
price = 19.99

-- Alle Variablen sind immutable
-- count = 50  -- Fehler: kann nicht neu zugewiesen werden
```

**Besonderheiten:**
- Alle Variablen sind standardmäßig immutable
- Keine expliziten Keywords erforderlich

**Weiterführende Links:**
- [PureScript Documentation - Variables](https://www.purescript.org/learn/getting-started/)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Immutable Variablen (Standard)
count = 42
name = "Hallo"
price = 19.99

-- Alle Variablen sind immutable
-- count = 50  -- Fehler: kann nicht neu zugewiesen werden
```

**Besonderheiten:**
- Alle Variablen sind standardmäßig immutable
- Keine expliziten Keywords erforderlich

**Weiterführende Links:**
- [Roc Documentation - Variables](https://www.roc-lang.org/)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Immutable Variablen (Standard)
count : Int
count = 42
name : String
name = "Hallo"

-- Alle Variablen sind immutable
-- count = 50  -- Fehler: kann nicht neu zugewiesen werden
```

**Besonderheiten:**
- Alle Variablen sind standardmäßig immutable
- Typannotationen sind optional, werden aber empfohlen

**Weiterführende Links:**
- [Idris 2 Documentation - Types and Functions](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
;; Immutable Werte (Datenstrukturen)
(define items (list 1 2 3))   ; Liste ist immutable
(define pair (cons 'a 'b))    ; Paar ist immutable
(define str "hello")          ; String ist immutable

;; Variablen-Bindungen sind konventionell immutable
;; (set! items '(4 5 6))  ;; Technisch möglich, stilistisch vermieden
```

**Besonderheiten:**
- Datenstrukturen (Listen, Paare, Strings) sind standardmäßig immutable
- Variablenbindungen können mit `set!` geändert werden, aber Konvention ist Immutabilität
- Funktionaler Programmierstil bevorzugt unveränderliche Bindungen

**Weiterführende Links:**
- [Racket Documentation - Variables](https://docs.racket-lang.org/guide/define.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; Immutable Variablen (nicht direkt unterstützt)
;; Scheme hat keine erzwungene Immutabilität für Variablen
;; Alle mit define deklarierten Variablen können mit set! verändert werden
(define count 42)
(define name "Hallo")
(define price 19.99)

;; Konvention: Variablen nicht mit set! verändern
;; Aber: (set! count 50) ist syntaktisch und semantisch gültig
```

**Besonderheiten:**
- Scheme hat keine erzwungene Immutabilität für Variablen
- Alle `define`-Bindungen können mit `set!` verändert werden
- Immutabilität ist Konvention, nicht durch die Sprache erzwungen

**Weiterführende Links:**
- [Scheme Documentation - Variables](https://www.scheme.com/tspl4/binding.html)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Immutable Variablen (nicht direkt unterstützt)
;; Common Lisp hat keine expliziten immutable Variablen
;; Alle Variablen sind standardmäßig mutable
(defvar count 42)
(defparameter name "Hallo")
```

**Besonderheiten:**
- Keine expliziten immutable Variablen
- Alle Variablen sind standardmäßig mutable

**Weiterführende Links:**
- [Common Lisp HyperSpec - Variables](http://www.lispworks.com/documentation/HyperSpec/Body/03_abab.htm)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Immutable Variablen mit let
let count: i32 = 42;
let name: String = "Hallo";
let price: f64 = 19.99;

// Zuweisung an let-Variable ist nicht erlaubt
// count = 10; // Fehler: Cannot assign to let binding
```

**Besonderheiten:**
- `let` deklariert immutable Bindings
- `var` deklariert mutable Variablen (siehe Mutable Variables)
- Experimentelle Sprache, Syntax kann sich noch ändern

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="d" label="D">

```d
// Immutable Variables
immutable int x = 42;
// x = 10;  // Fehler: cannot modify immutable

const double pi = 3.14159;
// pi = 3.0;  // Fehler: cannot modify const

// enum für compile-time Konstanten
enum MAX_SIZE = 100;

// immutable Arrays
immutable int[] values = [1, 2, 3];
// values[0] = 10;  // Fehler
```

**Besonderheiten:**
- `immutable`: Wert kann niemals geändert werden (tief unveränderlich)
- `const`: Wert kann über diese Referenz nicht geändert werden
- `enum`: Compile-time Konstante (kein Speicherplatz)
- `immutable` Daten sind implizit Thread-sicher

**Weiterführende Links:**
- [D Language Specification - Const and Immutable](https://dlang.org/spec/const3.html)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Konstanten mit PARAMETER
integer, parameter :: MAX_SIZE = 100
real, parameter :: PI = 3.141592653589793
character(len=*), parameter :: GREETING = "Hallo"

! MAX_SIZE = 200  ! Fehler: PARAMETER kann nicht geändert werden
```

**Besonderheiten:**
- `PARAMETER`-Attribut für Kompilierzeit-Konstanten
- Wert muss zur Kompilierzeit bekannt sein
- Kann nicht neu zugewiesen werden

**Weiterführende Links:**
- [Fortran Standard - PARAMETER](https://gcc.gnu.org/onlinedocs/gfortran/PARAMETER.html)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Immutable Variablen mit final
final int count = 42
// count = 43 // Fehler: Cannot assign a value to final variable

final String name = "Hallo"
// name = "Welt" // Fehler: Cannot assign a value to final variable

// Auch mit def
final def price = 19.99
```

**Besonderheiten:**
- `final` verhindert Neuzuweisung nach Initialisierung
- Kein `const`- oder `val`-Schlüsselwort
- `final` bei Objekten verhindert nur Neuzuweisung, nicht Mutation des Objekts

**Weiterführende Links:**
- [Groovy Documentation - Variables](https://groovy-lang.org/semantics.html#_variable_declaration)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Immutable Variables mit final (seit Haxe 4.0)
final count = 42;
final name:String = "Hallo";
// count = 43; // Fehler: Cannot assign to final
```

**Besonderheiten:**
- `final` für unveränderliche Variablen (seit Haxe 4.0)
- Typ kann explizit angegeben werden oder wird inferiert

**Weiterführende Links:**
- [Haxe Documentation - Final](https://haxe.org/manual/class-field-final.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Immutable Variables: final keyword
final int count = 42;
// count = 10;  // Kompilierfehler: cannot assign a value to final variable

final String name = "Alice";
// name = "Bob";  // Kompilierfehler

// final bei Referenztypen: Referenz ist unveränderlich, Objekt nicht
final List<String> items = new ArrayList<>();
items.add("Apfel");  // OK: Objekt kann verändert werden
// items = new ArrayList<>();  // Kompilierfehler: Referenz kann nicht geändert werden
```

**Besonderheiten:**
- `final`-Keyword macht Variablen unveränderlich
- Bei Referenztypen ist nur die Referenz unveränderlich, nicht das Objekt selbst
- `final` kann für lokale Variablen, Parameter, Felder und Methodenparameter verwendet werden
- Seit Java 10: `var` mit `final` kombinierbar (`final var x = 42;`)

**Weiterführende Links:**
- [Oracle Java Documentation - final Keyword](https://docs.oracle.com/javase/tutorial/java/javaOO/classvars.html)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Konstanten mit const (global scope)
const MAX_SIZE = 100
const PI_APPROX = 3.14159

# const verhindert Typ-Änderung
# MAX_SIZE = "text"  # Fehler: Typ-Änderung nicht erlaubt

# Wert-Änderung erzeugt Warnung
# MAX_SIZE = 200  # Warnung: redefinition of constant

# Immutable Structs
struct Point
    x::Float64
    y::Float64
end

p = Point(1.0, 2.0)
# p.x = 3.0  # Fehler: immutable struct
```

**Besonderheiten:**
- `const` nur für globale Variablen verfügbar, nicht für lokale
- Typ-Änderung einer `const`-Variable erzeugt einen Fehler
- Wert-Änderung einer `const`-Variable erzeugt eine Warnung
- `struct` (ohne `mutable`) erstellt unveränderliche Datentypen

**Weiterführende Links:**
- [Julia Documentation - Constants](https://docs.julialang.org/en/v1/manual/variables-and-scoping/#Constants)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Immutable Variables: val (Standard)
val count = 42
val name = "Hallo"
val price = 19.99

// val kann nicht neu zugewiesen werden
// count := 50  // Compile-Fehler: val ist immutable

// Alle val-Bindungen sind unveränderlich
fun example(): console ()
  val x = 10
  val y = 20
  println((x + y).show)  // 30
```

**Besonderheiten:**
- `val` ist der Standard für Variablendeklarationen (immutable)
- Immutabilität ist ein Kernprinzip von Koka
- Datenstrukturen sind standardmäßig immutable
- Für mutable Variablen muss explizit `var` verwendet werden

**Weiterführende Links:**
- [Koka Language Guide - Basics](https://koka-lang.github.io/koka/doc/book.html#sec-basics)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Immutable Variables: let und def (Standard)
def count : Nat := 42
def name : String := "Hallo"
def price : Float := 19.99

-- def kann nicht neu zugewiesen werden (Top-Level-Definition)

-- let in do-Blöcken
def example : IO Unit := do
  let x := 10
  let y := 20
  -- x := 30  -- Fehler: let-Bindungen sind immutable
  IO.println s!"{x + y}"  -- 30
```

**Besonderheiten:**
- `def` für Top-Level-Definitionen (immer immutable)
- `let` für lokale Bindungen (immutable by default)
- Immutabilität ist ein Kernprinzip von Lean 4
- Für mutable lokale Variablen muss explizit `let mut` verwendet werden

**Weiterführende Links:**
- [Lean 4 Documentation - Definitions](https://lean-lang.org/lean4/doc/lean-by-example/variables.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```mercury
% Immutable Variablen (Standard in Mercury)
:- pred example(io::di, io::uo) is det.
example(!IO) :-
    Count = 42,
    Name = "hello",
    Price = 19.99,
    % Count = 50  % Fehler: Unifikation schlägt fehl (Count ist bereits 42)
    io.format("%d %s %f\n", [i(Count), s(Name), f(Price)], !IO).

% Alle Variablen sind nach Bindung unveränderlich
:- pred immutable_demo(io::di, io::uo) is det.
immutable_demo(!IO) :-
    X = [1, 2, 3],
    % X = [4, 5, 6]  % Fehler: X ist bereits gebunden
    list.length(X, Len),
    io.format("Länge: %d\n", [i(Len)], !IO).
```

**Besonderheiten:**
- Alle Variablen sind nach Bindung (Unifikation) unveränderlich
- Unveränderlichkeit ist ein fundamentales Prinzip der logischen Programmierung
- Kein spezielles Keyword wie `const` oder `val` nötig — Immutabilität ist der Standard
- Neue Werte erfordern neue Variablennamen

**Weiterführende Links:**
- [Mercury Language Reference - Unification](https://www.mercurylang.org/information/doc-release/mercury_ref/Builtin-unification-and-comparison.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Konstanten
const
  MaxSize = 100;
  Pi = 3.14159;
  Greeting: string = 'Hallo Welt';

// Typed Constants (sind in Free Pascal tatsächlich mutable!)
const
  Counter: Integer = 0;

begin
  // MaxSize := 200;  // Fehler: Kann nicht zugewiesen werden
end;
```

**Besonderheiten:**
- `const` für Compile-Zeit-Konstanten
- Typed Constants (`const x: Type = value`) sind in Free Pascal standardmäßig mutable (mit `{$J+}`)
- True Constants (`const x = value`) sind immer immutable
- `{$J-}` macht Typed Constants immutable

**Weiterführende Links:**
- [Free Pascal Documentation - Constants](https://www.freepascal.org/docs-html/ref/refse3.html)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Immutable Variable mit const
const int maxValue = 100;
// maxValue = 200; // Fehler

// Immutable Pointer
NSString *const name = @"Hallo";
// name = @"Welt"; // Fehler: Cannot assign to variable with const-qualified type
```

**Besonderheiten:**
- `const` für immutable primitive Werte
- `const` bei Pointern unterscheidet zwischen Pointer-Konstanz und Wert-Konstanz
- Keine eigenes Keyword wie `let` oder `val` (das ist Swift/Kotlin)

**Weiterführende Links:**
- [Apple Documentation - Programming with Objective-C](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
// Konstanten
const MAX_SIZE = 100;
define('PI', 3.14159);

// Klassen-Konstanten
class Config {
    const VERSION = "1.0";
    public const NAME = "MyApp";
}

echo Config::VERSION;
?>
```

**Besonderheiten:**
- `const` für Kompilierzeit-Konstanten (nur skalare Werte)
- `define()` für Laufzeit-Konstanten
- Klassen-Konstanten mit `const` innerhalb von Klassen
- Variablen können nicht als immutable deklariert werden

**Weiterführende Links:**
- [PHP Documentation - Constants](https://www.php.net/manual/en/language.constants.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Immutable Variablen (Standard in Prolog)
example :-
    Count = 42,
    Name = hello,
    Price = 19.99,
    % Count = 50   % Fehler: Unifikation schlägt fehl (Count ist bereits 42)
    format("~w ~w ~w~n", [Count, Name, Price]).

% Alle Variablen sind nach Bindung unveränderlich
immutable_demo :-
    X = [1, 2, 3],
    % X = [4, 5, 6]  % Fehler: X ist bereits gebunden
    length(X, Len),
    format("Länge: ~w~n", [Len]).
```

**Besonderheiten:**
- Alle Variablen sind nach Bindung (Unifikation) unveränderlich
- Unveränderlichkeit ist ein fundamentales Prinzip der logischen Programmierung
- Kein spezielles Keyword wie `const` oder `val` nötig — Immutabilität ist der Standard
- Neue Werte erfordern neue Variablennamen

**Weiterführende Links:**
- [SWI-Prolog Manual - Unification](https://www.swi-prolog.org/pldoc/man?predicate=%3D/2)

</TabItem>
<TabItem value="v" label="V">

```v
// Immutable Variables (Standard)
name := 'Alice'
age := 30

// name = 'Bob'  // Fehler: Cannot assign to immutable variable

// Mutable mit `mut`
mut counter := 0
counter = 1  // OK
```

**Besonderheiten:**
- Variablen sind standardmäßig immutable (deklariert mit `:=`)
- `mut` Keyword für veränderbare Variablen
- Immutability wird vom Compiler erzwungen

**Weiterführende Links:**
- [V Documentation - Variables](https://github.com/vlang/v/blob/master/doc/docs.md#variables)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Immutable Variables: const
const count: i32 = 42;
const name: []const u8 = "Hallo";
const price: f64 = 19.99;

// Kann nicht geändert werden
// count = 10;  // Kompilierfehler: cannot assign to constant

// Const mit Type Inference
const pi = 3.14159;
const message = "Welt";
```

**Besonderheiten:**
- `const` erstellt unveränderliche Bindungen
- Bevorzugter Deklarationstyp in Zig (idiomatic)
- Comptime-Werte sind immer `const`
- `const` ist nicht nur für die Bindung, sondern auch für den Pointer-Typ relevant

**Weiterführende Links:**
- [Zig Documentation - Variables](https://ziglang.org/documentation/master/#Variables)

</TabItem>
</Tabs>


## 4.1.4. Mutable Variables (var)

Variablen, die nach der Initialisierung geändert werden können.

### Sprachen {#sprachen}

<Tabs availableTabs={['ada', 'c', 'carbon', 'clojure', 'common-lisp', 'crystal', 'csharp', 'cpp', 'd', 'dart', 'eiffel', 'fsharp', 'go', 'groovy', 'haxe', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'lua', 'matlab', 'mojo', 'nim', 'objective-c', 'object-pascal', 'ocaml', 'octave', 'odin', 'perl', 'php', 'python', 'r', 'racket', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'vbnet', 'v', 'wolfram-language', 'zig']}>
<TabItem value="csharp" label="C#">

```csharp
// Mutable Variablen (var oder expliziter Typ)
var count = 10;
count = 42;
var name = "Welt";
name = "Hallo";

// Mit explizitem Typ
int count2 = 10;
count2 = 42;
```

**Besonderheiten:**
- `var` für Type Inference (seit C# 3.0)
- Explizite Typen für mutable Variablen

**Weiterführende Links:**
- [Microsoft C# Documentation - var](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/statements/declarations#implicitly-typed-local-variables)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Mutable Variablen (var oder let)
var count = 10;
count = 42;
let name = "Welt";
name = "Hallo";
```

**Besonderheiten:**
- `var` für Function Scope
- `let` für Block Scope

**Weiterführende Links:**
- [MDN Web Docs - var](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Mutable Variablen (var oder let)
var count = 10;
count = 42;
let name = "Welt";
name = "Hallo";
```

**Besonderheiten:**
- `var` für Function Scope
- `let` für Block Scope

**Weiterführende Links:**
- [TypeScript Documentation - Variable Declarations](https://www.typescriptlang.org/docs/handbook/variable-declarations.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Mutable Variablen (var)
var count = 10
count = 42
var name = "Welt"
name = "Hallo"
```

**Besonderheiten:**
- `var` für mutable Variablen
- `val` für immutable Variablen

**Weiterführende Links:**
- [Kotlin Documentation - Variables](https://kotlinlang.org/docs/basic-syntax.html#variables)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Mutable Variablen (var)
var count = 10
count = 42
var name = "Welt"
name = "Hallo"
```

**Besonderheiten:**
- `var` für mutable Variablen
- `val` für immutable Variablen

**Weiterführende Links:**
- [Scala Documentation - Variables](https://docs.scala-lang.org/tour/basics.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Mutable Variablen (var)
var count = 10
count = 42
var name = "Welt"
name = "Hallo"
```

**Besonderheiten:**
- `var` für mutable Variablen
- `let` für immutable Variablen

**Weiterführende Links:**
- [Swift Documentation - Variables](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/thebasics/)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Mutable Variablen (let mut)
let mut count = 10;
count = 42;
let mut name = "Welt".to_string();
name = "Hallo".to_string();
```

**Besonderheiten:**
- `let mut` für mutable Variablen
- `let` für immutable Variablen (Standard)

**Weiterführende Links:**
- [Rust Documentation - Variables](https://doc.rust-lang.org/book/ch03-01-variables-and-mutability.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Mutable Variablen (var)
var count = 10
count = 42
var name = "Welt"
name = "Hallo"
```

**Besonderheiten:**
- `var` für mutable Variablen
- `let` für immutable Variablen

**Weiterführende Links:**
- [Nim Documentation - Variables](https://nim-lang.org/docs/manual.html#variables)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Mutable Variablen (var oder expliziter Typ)
var count = 10;
count = 42;
String name = "Welt";
name = "Hallo";
```

**Besonderheiten:**
- `var` für Type Inference
- Explizite Typen für mutable Variablen

**Weiterführende Links:**
- [Dart Language Tour - Variables](https://dart.dev/guides/language/language-tour#variables)

</TabItem>
<TabItem value="go" label="Go">

```go
// Mutable Variablen (var oder :=)
var count int = 10
count = 42
name := "Welt"
name = "Hallo"
```

**Besonderheiten:**
- `var` für explizite Deklaration
- `:=` für kurze Deklaration mit Type Inference

**Weiterführende Links:**
- [Go Documentation - Variables](https://go.dev/ref/spec#Variable_declarations)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Mutable Variablen (def oder expliziter Typ)
def count = 10
count = 42
String name = "Welt"
name = "Hallo"
```

**Besonderheiten:**
- `def` für dynamische Typisierung
- Explizite Typen für mutable Variablen

**Weiterführende Links:**
- [Groovy Documentation - Variables](https://groovy-lang.org/semantics.html#_variable_declaration)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Mutable Variablen (var)
var count: Int = 10;
count = 42;
var name: String = "Welt";
name = "Hallo";
```

**Besonderheiten:**
- `var` für Variablendeklaration
- Typ kann explizit angegeben werden oder wird inferiert

**Weiterführende Links:**
- [Haxe Documentation - Variables](https://haxe.org/manual/expression-var.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# Mutable Variablen (var)
var count: Int = 10
count = 42
var name: String = "Welt"
name = "Hallo"
```

**Besonderheiten:**
- `var` für Variablendeklaration
- Typ kann explizit angegeben werden oder wird inferiert

**Weiterführende Links:**
- [Mojo Documentation - Variables](https://docs.modular.com/mojo/)

</TabItem>
<TabItem value="v" label="V">

```v
// Mutable Variablen (mut)
mut count := 10
count = 42
mut name := "Welt"
name = "Hallo"
```

**Besonderheiten:**
- `mut` für mutable Variablen
- `:=` für kurze Deklaration mit Type Inference

**Weiterführende Links:**
- [V Documentation - Variables](https://github.com/vlang/v/blob/master/doc/docs.md)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vbnet
' Mutable Variablen (Dim)
Dim count As Integer = 10
count = 42
Dim name As String = "Welt"
name = "Hallo"
```

**Besonderheiten:**
- `Dim` für Variablendeklaration
- Typ kann explizit angegeben werden oder wird inferiert

**Weiterführende Links:**
- [VB.NET Documentation - Variables](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/variables/)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Mutable Variablen (var)
var count: i32 = 10;
count = 42;
var name: []const u8 = "Welt";
name = "Hallo";
```

**Besonderheiten:**
- `var` für mutable Variablen
- `const` für immutable Variablen

**Weiterführende Links:**
- [Zig Documentation - Variables](https://ziglang.org/documentation/0.11.0/#Variables)

</TabItem>
<TabItem value="java" label="Java">

```java
// Mutable Variablen (expliziter Typ)
int count = 10;
count = 42;
String name = "Welt";
name = "Hallo";
```

**Besonderheiten:**
- Explizite Typen für mutable Variablen
- Seit Java 10: `var` für lokale Typinferenz (`var x = 42;`)

**Weiterführende Links:**
- [Java Language Specification - Variables](https://docs.oracle.com/javase/specs/jls/se21/html/jls-4.html#jls-4.12)

</TabItem>
<TabItem value="c" label="C">

```c
// Mutable Variablen (expliziter Typ)
int count = 10;
count = 42;
char* name = "Welt";
name = "Hallo";
```

**Besonderheiten:**
- Explizite Typen für mutable Variablen
- Alle Variablen sind standardmäßig mutable

**Weiterführende Links:**
- [C Standard - Declarations](https://en.cppreference.com/w/c/language/declarations)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Mutable Variablen (expliziter Typ oder auto)
int count = 10;
count = 42;
auto name = std::string("Welt");
name = "Hallo";
```

**Besonderheiten:**
- Explizite Typen oder `auto` für mutable Variablen
- Alle Variablen sind standardmäßig mutable

**Weiterführende Links:**
- [cppreference.com - Declarations](https://en.cppreference.com/w/cpp/language/declarations)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Mutable Variablen (var)
var count: i32 = 10;
count = 42;
var name: String = "Welt";
name = "Hallo";
```

**Besonderheiten:**
- `var` für Variablendeklaration
- Experimentelle Sprache, Syntax kann sich noch ändern

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="d" label="D">

```d
// Mutable Variablen (expliziter Typ)
int count = 10;
count = 42;
string name = "Welt";
name = "Hallo";
```

**Besonderheiten:**
- Explizite Typen für mutable Variablen
- Alle Variablen sind standardmäßig mutable

**Weiterführende Links:**
- [D Language Specification - Variables](https://dlang.org/spec/declaration.html)

</TabItem>
<TabItem value="ada" label="Ada">

```ada
-- Mutable Variablen (expliziter Typ)
count : Integer := 10;
count := 42;
name : String := "Welt";
name := "Hallo";
```

**Besonderheiten:**
- Explizite Typen für mutable Variablen
- `:=` für Zuweisung

**Weiterführende Links:**
- [Ada Reference Manual - Variables](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-3-3-1.html)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
-- Mutable Variablen (expliziter Typ)
count: INTEGER := 10
count := 42
name: STRING := "Welt"
name := "Hallo"
```

**Besonderheiten:**
- Explizite Typen für mutable Variablen
- `:=` für Zuweisung

**Weiterführende Links:**
- [Eiffel Documentation - Variables](https://www.eiffel.org/doc/eiffel/Variables)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Mutable Variablen (expliziter Typ)
count: int = 10
count = 42
name: string = "Welt"
name = "Hallo"
```

**Besonderheiten:**
- Explizite Typen für mutable Variablen
- Alle Variablen sind standardmäßig mutable

**Weiterführende Links:**
- [Odin Documentation - Variables](https://odin-lang.org/docs/overview/#variables)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objectivec
// Mutable Variablen (expliziter Typ)
int count = 10;
count = 42;
NSString* name = @"Welt";
name = @"Hallo";
```

**Besonderheiten:**
- Explizite Typen für mutable Variablen
- Alle Variablen sind standardmäßig mutable

**Weiterführende Links:**
- [Objective-C Documentation - Variables](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Mutable Variablen (var Block)
var
  count: Integer = 10;
  name: String = 'Welt';
begin
  count := 42;
  name := 'Hallo';
end;
```

**Besonderheiten:**
- `var` Block für Variablendeklarationen
- `:=` für Zuweisung

**Weiterführende Links:**
- [Object Pascal Documentation - Variables](https://www.freepascal.org/docs-html/ref/refse14.html)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Mutable Variablen (standardmäßig)
count = 10
count = 42
name = "Welt"
name = "Hallo"
```

**Besonderheiten:**
- Alle Variablen sind standardmäßig mutable
- Kein explizites `var` Keyword erforderlich

**Weiterführende Links:**
- [Crystal Documentation - Variables](https://crystal-lang.org/reference/1.11/syntax_and_semantics/variables.html)

</TabItem>
<TabItem value="python" label="Python">

```python
# Mutable Variablen (standardmäßig)
count = 10
count = 42
name = "Welt"
name = "Hallo"
```

**Besonderheiten:**
- Alle Variablen sind standardmäßig mutable
- Kein explizites `var` Keyword erforderlich

**Weiterführende Links:**
- [Python Documentation - Assignment Statements](https://docs.python.org/3/reference/simple_stmts.html#assignment-statements)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Mutable Variablen (standardmäßig)
count = 10
count = 42
name = "Welt"
name = "Hallo"
```

**Besonderheiten:**
- Alle Variablen sind standardmäßig mutable
- Kein explizites `var` Keyword erforderlich

**Weiterführende Links:**
- [Ruby Documentation - Variables](https://ruby-doc.org/core-3.1.2/doc/syntax/assignment_rdoc.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Mutable Variablen (local)
local count = 10
count = 42
local name = "Welt"
name = "Hallo"
```

**Besonderheiten:**
- `local` für lokale Variablen
- Alle Variablen sind standardmäßig mutable

**Weiterführende Links:**
- [Lua Documentation - Variables](https://www.lua.org/manual/5.4/manual.html#3.3.7)

</TabItem>
<TabItem value="php" label="PHP">

```php
// Mutable Variablen (standardmäßig)
$count = 10;
$count = 42;
$name = "Welt";
$name = "Hallo";
```

**Besonderheiten:**
- Alle Variablen sind standardmäßig mutable
- `$` Prefix für Variablen

**Weiterführende Links:**
- [PHP Documentation - Variables](https://www.php.net/manual/en/language.variables.php)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Mutable Variablen (my)
my $count = 10;
$count = 42;
my $name = "Welt";
$name = "Hallo";
```

**Besonderheiten:**
- `my` für lexikalische Variablen
- Sigils (`$`, `@`, `%`) für Typindikatoren

**Weiterführende Links:**
- [Perl Documentation - Variables](https://perldoc.perl.org/perlvar)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Mutable Variablen (standardmäßig)
count = 10
count = 42
name = "Welt"
name = "Hallo"
```

**Besonderheiten:**
- Alle Variablen sind standardmäßig mutable
- Typ kann explizit angegeben werden oder wird inferiert

**Weiterführende Links:**
- [Julia Documentation - Variables](https://docs.julialang.org/en/v1/manual/variables/)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Mutable Variablen mit var
fun example(): console ()
  var count := 10
  count := 42
  var name := "Welt"
  name := "Hallo"
  println(count.show)  // 42
  println(name)        // Hallo
```

**Besonderheiten:**
- `var` für mutable lokale Variablen
- `:=` für Initialisierung und Neuzuweisung
- `var` ist nur in lokalem Scope verfügbar (nicht auf Modul-Ebene)
- Mutable Zustand wird durch das Effekt-System getrackt

**Weiterführende Links:**
- [Koka Language Guide - Basics](https://koka-lang.github.io/koka/doc/book.html#sec-basics)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Mutable Variablen (let mut in do-Blöcken)
def example : IO Unit := do
  let mut count := 10
  count := 42
  let mut name := "Welt"
  name := "Hallo"
  IO.println s!"{count}"  -- 42
  IO.println name          -- Hallo
```

**Besonderheiten:**
- `let mut` für mutable lokale Variablen
- `:=` für Initialisierung und Neuzuweisung
- `let mut` ist nur in `do`-Blöcken verfügbar
- `let` (ohne `mut`) ist immutable (Standard)

**Weiterführende Links:**
- [Lean 4 Documentation - Mutable Variables](https://lean-lang.org/lean4/doc/do.html)

</TabItem>
<TabItem value="r" label="R">

```r
# Mutable Variablen (standardmäßig)
count <- 10
count <- 42
name <- "Welt"
name <- "Hallo"
```

**Besonderheiten:**
- `<-` oder `=` für Zuweisung
- Alle Variablen sind standardmäßig mutable

**Weiterführende Links:**
- [R Documentation - Variables](https://cran.r-project.org/doc/manuals/r-release/R-intro.html#Simple-manipulations-numbers-vectors-and-matrices)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% Mutable Variablen (standardmäßig)
count = 10;
count = 42;
name = 'Welt';
name = 'Hallo';
```

**Besonderheiten:**
- Alle Variablen sind standardmäßig mutable
- Typ wird dynamisch bestimmt

**Weiterführende Links:**
- [MATLAB Documentation - Variables](https://www.mathworks.com/help/matlab/matlab_prog/creating-and-concatenating-matrices.html)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
% Mutable Variablen (standardmäßig)
count = 10;
count = 42;
name = "Welt";
name = "Hallo";
```

**Besonderheiten:**
- Alle Variablen sind standardmäßig mutable
- Typ wird dynamisch bestimmt

**Weiterführende Links:**
- [Octave Documentation - Variables](https://octave.org/doc/v8.1.0/Variables.html)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```wolfram
(* Mutable Variablen (standardmäßig) *)
count = 10
count = 42
name = "Welt"
name = "Hallo"
```

**Besonderheiten:**
- Alle Variablen sind standardmäßig mutable
- Typ wird dynamisch bestimmt

**Weiterführende Links:**
- [Wolfram Language Documentation - Variables](https://reference.wolfram.com/language/guide/VariablesAndFunctions.html)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Mutable Variablen (mit atom)
(def count (atom 10))
(swap! count (fn [_] 42))
(reset! count 42)

(def name (atom "Welt"))
(swap! name (fn [_] "Hallo"))
```

**Besonderheiten:**
- `atom` für mutable Variablen
- `swap!` und `reset!` für Änderungen
- Standardmäßig sind Variablen immutable

**Weiterführende Links:**
- [Clojure Documentation - Atoms](https://clojure.org/reference/atoms)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Mutable Variablen (defvar oder defparameter)
(defvar count 10)
(setf count 42)
(defparameter name "Welt")
(setf name "Hallo")
```

**Besonderheiten:**
- `defvar` und `defparameter` für Variablendeklaration
- `setf` für Zuweisung
- Alle Variablen sind standardmäßig mutable

**Weiterführende Links:**
- [Common Lisp HyperSpec - Variables](http://www.lispworks.com/documentation/HyperSpec/Body/03_abab.htm)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Mutable Variablen (let mutable)
let mutable count = 10
count <- 42
let mutable name = "Welt"
name <- "Hallo"
```

**Besonderheiten:**
- `let mutable` für mutable Variablen
- `<-` für Zuweisung
- Standardmäßig sind Variablen immutable

**Weiterführende Links:**
- [F# Documentation - Mutable Variables](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/values/#mutable-variables)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Mutable Variablen (ref) *)
let count = ref 10
count := 42
let name = ref "Welt"
name := "Hallo"
```

**Besonderheiten:**
- `ref` für mutable Variablen
- `:=` für Zuweisung
- Standardmäßig sind Variablen immutable

**Weiterführende Links:**
- [OCaml Documentation - References](https://ocaml.org/manual/coreexamples.html#s:references)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
;; Mutable Variablen (define mit set!)
(define count 10)
(set! count 42)
(define name "Welt")
(set! name "Hallo")
```

**Besonderheiten:**
- `define` für Variablendeklaration
- `set!` für Mutation bestehender Bindungen
- Variablen können mutiert werden, funktionaler Stil bevorzugt jedoch Immutabilität

**Weiterführende Links:**
- [Racket Documentation - Assignment](https://docs.racket-lang.org/guide/set_.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; Mutable Variablen (alle define-Variablen sind mutable)
(define count 10)
(set! count 42)
(define name "Welt")
(set! name "Hallo")
```

**Besonderheiten:**
- `define` erstellt Bindungen, die mit `set!` verändert werden können
- `set!` für Neuzuweisung
- Keine separate "mutable" Deklaration nötig - alle Variablen sind mutable

**Weiterführende Links:**
- [Scheme Documentation - Assignment](https://www.scheme.com/tspl4/assignment.html)

</TabItem>
</Tabs>


## 4.1.5. Variable Shadowing

Eine Variable in einem inneren Scope verdeckt eine Variable mit demselben Namen im äußeren Scope.

### Sprachen {#sprachen}

<Tabs availableTabs={['c', 'clojure', 'common-lisp', 'cpp', 'csharp', 'd', 'dart', 'elm', 'gleam', 'go', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'lua', 'nim', 'objective-c', 'octave', 'perl', 'python', 'roc', 'rust', 'scala', 'swift', 'typescript', 'wolfram-language']}>
<TabItem value="javascript" label="JavaScript">

```javascript
// Variable Shadowing
let count = 10;
{
  let count = 42;  // Shadowt die äußere Variable
  console.log(count);  // 42
}
console.log(count);  // 10
```

**Besonderheiten:**
- `let` und `const` unterstützen Shadowing
- `var` unterstützt kein Shadowing (Function Scope)

**Weiterführende Links:**
- [MDN Web Docs - let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Variable Shadowing
let count = 10;
{
  let count = 42;  // Shadowt die äußere Variable
  console.log(count);  // 42
}
console.log(count);  // 10
```

**Besonderheiten:**
- `let` und `const` unterstützen Shadowing
- `var` unterstützt kein Shadowing (Function Scope)

**Weiterführende Links:**
- [TypeScript Documentation - Variable Declarations](https://www.typescriptlang.org/docs/handbook/variable-declarations.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Variable Shadowing: Felder durch lokale Variablen
class Example {
    int count = 10;  // Feld

    void method() {
        int count = 42;  // Shadowt das Feld
        System.out.println(count);       // 42
        System.out.println(this.count);  // 10
    }
}
```

**Besonderheiten:**
- Felder können durch lokale Variablen geshadowt werden
- Zugriff auf das geshadowte Feld über `this.feldname`
- Lokale Variablen können NICHT durch andere lokale Variablen im selben Methodenblock geshadowt werden (Kompilierfehler)

**Weiterführende Links:**
- [Java Language Specification - Scope](https://docs.oracle.com/javase/specs/jls/se21/html/jls-6.html#jls-6.4)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Variable Shadowing: nur Felder durch lokale Variablen
class Example {
    int count = 10;  // Feld
    
    void Method() {
        int count = 42;  // Lokale Variable shadowt Feld
        Console.WriteLine(count);        // 42 (lokale Variable)
        Console.WriteLine(this.count);   // 10 (Feld)
    }
}

// Variable Shadowing in verschachtelten Methoden
void Outer() {
    int x = 10;
    void Inner() {
        int x = 42;  // OK: Eigener Scope in lokaler Funktion
        Console.WriteLine(x);  // 42
    }
}
```

**Besonderheiten:**
- Felder können durch lokale Variablen geshadowt werden (Zugriff auf Feld mit `this.`)
- Lokale Variablen können NICHT in verschachtelten Blöcken desselben Method-Scopes geshadowt werden (CS0136)
- Lokale Funktionen haben eigene Scopes und können Variablen shadowen

**Weiterführende Links:**
- [Microsoft C# Documentation - Scope](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/basic-concepts#scopes)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Variable Shadowing
int count = 10;
{
  int count = 42;  // Shadowt die äußere Variable
  std::cout << count << std::endl;  // 42
}
std::cout << count << std::endl;  // 10
```

**Besonderheiten:**
- Lokale Variablen können Variablen in äußeren Scopes shadowen
- Namespace-Variablen können durch lokale Variablen geshadowt werden

**Weiterführende Links:**
- [cppreference.com - Scope](https://en.cppreference.com/w/cpp/language/scope)

</TabItem>
<TabItem value="c" label="C">

```c
// Variable Shadowing
int count = 10;
{
  int count = 42;  // Shadowt die äußere Variable
  printf("%d\n", count);  // 42
}
printf("%d\n", count);  // 10
```

**Besonderheiten:**
- Lokale Variablen können Variablen in äußeren Scopes shadowen
- Globale Variablen können durch lokale Variablen geshadowt werden

**Weiterführende Links:**
- [C Standard - Scope](https://en.cppreference.com/w/c/language/scope)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Variable Shadowing
let count = 10;
{
  let count = 42;  // Shadowt die äußere Variable
  println!("{}", count);  // 42
}
println!("{}", count);  // 10
```

**Besonderheiten:**
- Shadowing ist erlaubt und häufig verwendet
- Shadowing erlaubt Typänderungen

**Weiterführende Links:**
- [Rust Documentation - Variables](https://doc.rust-lang.org/book/ch03-01-variables-and-mutability.html)

</TabItem>
<TabItem value="go" label="Go">

```go
// Variable Shadowing
count := 10
{
  count := 42  // Shadowt die äußere Variable
  fmt.Println(count)  // 42
}
fmt.Println(count)  // 10
```

**Besonderheiten:**
- Lokale Variablen können Variablen in äußeren Scopes shadowen
- Package-Variablen können durch lokale Variablen geshadowt werden

**Weiterführende Links:**
- [Go Documentation - Scope](https://go.dev/ref/spec#Declarations_and_scope)

</TabItem>
<TabItem value="python" label="Python">

```python
# Variable Shadowing
count = 10
def inner():
    count = 42  # Shadowt die äußere Variable
    print(count)  # 42
inner()
print(count)  # 10
```

**Besonderheiten:**
- Lokale Variablen können globale Variablen shadowen
- Innerhalb von Funktionen können Variablen aus äußeren Scopes geshadowt werden

**Weiterführende Links:**
- [Python Documentation - Scopes](https://docs.python.org/3/tutorial/classes.html#scopes-and-namespaces)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Variable Shadowing
val count = 10
run {
  val count = 42  // Shadowt die äußere Variable
  println(count)  // 42
}
println(count)  // 10
```

**Besonderheiten:**
- Lokale Variablen können Variablen in äußeren Scopes shadowen
- Parameter können durch lokale Variablen geshadowt werden

**Weiterführende Links:**
- [Kotlin Documentation - Scope](https://kotlinlang.org/docs/scope-functions.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Variable Shadowing
val count = 10
{
  val count = 42  // Shadowt die äußere Variable
  println(count)  // 42
}
println(count)  // 10
```

**Besonderheiten:**
- Lokale Variablen können Variablen in äußeren Scopes shadowen
- Parameter können durch lokale Variablen geshadowt werden

**Weiterführende Links:**
- [Scala Documentation - Scope](https://docs.scala-lang.org/tour/basics.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Variable Shadowing
let count = 10
{
  let count = 42  // Shadowt die äußere Variable
  print(count)  // 42
}
print(count)  // 10
```

**Besonderheiten:**
- Lokale Variablen können Variablen in äußeren Scopes shadowen
- Parameter können durch lokale Variablen geshadowt werden

**Weiterführende Links:**
- [Swift Documentation - Scope](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/thebasics/)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Variable Shadowing
int count = 10;
{
  int count = 42;  // Shadowt die äußere Variable
  print(count);  // 42
}
print(count);  // 10
```

**Besonderheiten:**
- Lokale Variablen können Variablen in äußeren Scopes shadowen
- Parameter können durch lokale Variablen geshadowt werden

**Weiterführende Links:**
- [Dart Language Tour - Scope](https://dart.dev/guides/language/language-tour#scope)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Variable Shadowing in let-Blöcken
(def x 10)

(let [x 20]
  (println x)    ; 20 (äußeres x wird überschattet)
  (let [x 30]
    (println x))) ; 30 (inneres x überschattet das mittlere)

(println x)       ; 10 (ursprünglicher Wert unverändert)
```

**Besonderheiten:**
- Shadowing in `let`-Blöcken ist idiomatisch
- Äußere Bindungen bleiben unverändert
- Auch innerhalb desselben `let` möglich: `(let [x 1 x (+ x 1)] x)` → 2

**Weiterführende Links:**
- [Clojure Documentation - let](https://clojure.org/reference/special_forms#let)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Variable Shadowing durch verschachteltes let
(let ((x 10))
  (format t "Outer x: ~a~%" x)  ; 10
  (let ((x 20))
    (format t "Inner x: ~a~%" x))  ; 20
  (format t "Outer x again: ~a~%" x))  ; 10
```

**Besonderheiten:**
- Verschachtelte `let`-Formen schatten äußere Variablen
- Äußere Variable bleibt nach Ende des inneren `let` unverändert
- Gilt auch für Funktionsparameter und `flet`/`labels`

**Weiterführende Links:**
- [Common Lisp HyperSpec - let](http://www.lispworks.com/documentation/HyperSpec/Body/s_let_l.htm)

</TabItem>
<TabItem value="d" label="D">

```d
// Variable Shadowing in verschachtelten Scopes
int x = 10;
{
    int x = 20;  // Shadowed die äußere Variable
    writeln(x);  // 20
}
writeln(x);  // 10

// Shadowing in foreach
int i = 100;
foreach (i; 0 .. 5) {
    writeln(i);  // 0, 1, 2, 3, 4
}
writeln(i);  // 100
```

**Besonderheiten:**
- Shadowing nur in verschachtelten Scopes erlaubt
- Shadowing im selben Scope ist nicht erlaubt (Kompilierfehler)
- Funktionsparameter können Modul-Level-Variablen shadowing

**Weiterführende Links:**
- [D Language Specification - Declarations](https://dlang.org/spec/declaration.html)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Variable Shadowing in let-Ausdrücken
example : Int
example =
    let
        x = 10
    in
    let
        x = 20  -- Shadowing: neues x überdeckt das äußere x
    in
    x  -- 20
```

**Besonderheiten:**
- Shadowing ist in `let`-Ausdrücken erlaubt
- Das äußere Binding bleibt unverändert
- Kein Shadowing auf Top-Level-Ebene innerhalb eines Moduls

**Weiterführende Links:**
- [Elm Documentation - Let Expressions](https://guide.elm-lang.org/core_language.html)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// Variable Shadowing
let x = 10
let x = x + 5    // x ist jetzt 15 (Shadowing)
let x = "hello"  // x ist jetzt ein String (Shadowing mit anderem Typ)
```

**Besonderheiten:**
- Variable Shadowing ist erlaubt und üblich
- Ermöglicht Neubindung mit anderem Typ
- Kein Mutability - es wird eine neue Bindung erstellt

**Weiterführende Links:**
- [Gleam Documentation - Variables](https://tour.gleam.run/basics/variables/)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
x = 10

function demo()
    x = 20  # Lokale Variable, shadowed die globale
    println(x)  # 20
    
    let x = 30  # Neuer Scope mit let
        println(x)  # 30
    end
    
    println(x)  # 20
end

demo()
println(x)  # 10 (globale Variable unverändert)
```

**Besonderheiten:**
- Lokale Variablen in Funktionen shadowed globale Variablen
- `let`-Blöcke erstellen einen neuen Scope für Shadowing
- Schleifen-Variablen shadowed äußere Variablen

**Weiterführende Links:**
- [Julia Documentation - Scope of Variables](https://docs.julialang.org/en/v1/manual/variables-and-scoping/)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Variable Shadowing
fun example(): console ()
  val x = 10
  val x = 42  // Shadowt die vorherige Bindung
  println(x.show)  // 42

  val y = 100
  fun inner()
    val y = 200  // Shadowt y aus äußerem Scope
    println(y.show)  // 200
  inner()
  println(y.show)  // 100
```

**Besonderheiten:**
- Koka erlaubt Variable Shadowing mit `val`
- Innere Bindungen können äußere Bindungen mit gleichem Namen verdecken
- Es wird eine neue Bindung erstellt, die alte bleibt unverändert

**Weiterführende Links:**
- [Koka Language Guide - Basics](https://koka-lang.github.io/koka/doc/book.html#sec-basics)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Variable Shadowing
def example : IO Unit := do
  let x := 10
  let x := 42  -- Shadowt die vorherige Bindung
  IO.println s!"{x}"  -- 42

-- In verschachtelten let-Ausdrücken
def nested : Nat :=
  let x := 10
  let result :=
    let x := 20  -- Shadowt x aus äußerem Scope
    x + 1
  result + x  -- 21 + 10 = 31
```

**Besonderheiten:**
- Lean 4 erlaubt Variable Shadowing mit `let`
- Innere Bindungen können äußere Bindungen mit gleichem Namen verdecken
- Es wird eine neue Bindung erstellt, die alte bleibt unverändert

**Weiterführende Links:**
- [Lean 4 Documentation - Variables](https://lean-lang.org/lean4/doc/lean-by-example/variables.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Variable Shadowing mit local
local x = 10

do
    local x = 20    -- Shadowed die äußere Variable
    print(x)        -- 20
end

print(x)            -- 10 (Original-Wert)

-- Shadowing in Funktionen
local function example()
    local x = 30    -- Shadowed die äußere Variable
    print(x)        -- 30
end

example()
print(x)            -- 10 (Original-Wert bleibt erhalten)
```

**Besonderheiten:**
- `local`-Variablen können äußere `local`-Variablen in verschachtelten Blöcken shadowing
- Innere Deklaration verdeckt die äußere, ohne sie zu verändern
- Gilt für alle Block-Kontexte: `do...end`, `if...then...end`, `for...do...end`, Funktionen

**Weiterführende Links:**
- [Lua Reference Manual - Local Declarations](https://www.lua.org/manual/5.4/manual.html#3.3.7)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Variable Shadowing
var x = 10
echo x  # 10

block:
  var x = 20  # Shadowed
  echo x  # 20

echo x  # 10 (äußere Variable unverändert)

# Shadowing in Schleifen
for i in 0..2:
  let x = i * 10
  echo x  # 0, 10, 20
```

**Besonderheiten:**
- Variablen können in inneren Scopes neu deklariert werden
- Äußere Variable wird verdeckt, nicht überschrieben
- Compiler warnt standardmäßig bei Shadowing

**Weiterführende Links:**
- [Nim Documentation - Scoping Rules](https://nim-lang.org/docs/manual.html#scoping-rules)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
int value = 10;
{
    int value = 20; // Shadowed: verdeckt äußere Variable
    NSLog(@"%d", value); // 20
}
NSLog(@"%d", value); // 10
```

**Besonderheiten:**
- C-style Variable Shadowing in verschachtelten Blöcken
- Compiler-Warnung bei Shadowing möglich (`-Wshadow`)
- Äußere Variable wird nicht verändert

**Weiterführende Links:**
- [Apple Documentation - Programming with Objective-C](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
x = 10;

function result = inner()
    x = 20;  % Lokale Variable, shadowt die äußere
    result = x;
end

result = inner();  % 20
% x im äußeren Scope ist weiterhin 10
```

**Besonderheiten:**
- Lokale Variablen in Funktionen shadowen äußere Variablen
- Jede Funktion hat einen eigenen Scope

**Weiterführende Links:**
- [GNU Octave Documentation - Variables](https://octave.org/doc/v8.1.0/Variables.html)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Variable Shadowing mit my
my $x = 10;
{
    my $x = 20;  # Shadowed: neues $x im inneren Block
    print "$x\n";  # 20
}
print "$x\n";  # 10
```

**Besonderheiten:**
- `my` in inneren Blöcken erzeugt neue lexikalische Variable
- Äußere Variable bleibt unverändert
- Funktioniert auch in Schleifen und Funktionen

**Weiterführende Links:**
- [Perl Documentation - my](https://perldoc.perl.org/functions/my)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Variable Shadowing
x = 10
x = x + 5
-- x ist jetzt 15 (neue Bindung, kein Reassignment)
```

**Besonderheiten:**
- Shadowing erstellt eine neue Bindung mit gleichem Namen
- Die alte Bindung ist nicht mehr zugänglich
- Kein Reassignment, sondern neue Bindung

**Weiterführende Links:**
- [Roc Documentation](https://www.roc-lang.org/tutorial)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
x = 10;
Module[{x = 20},
    Print[x]  (* 20 - lokale Variable überdeckt globale *)
];
Print[x]      (* 10 - globale Variable unverändert *)
```

**Besonderheiten:**
- `Module[]` erstellt lokale Variablen, die globale verdecken
- `Block[]` verwendet ebenfalls lokale Bindungen

**Weiterführende Links:**
- [Wolfram Language Documentation - Module](https://reference.wolfram.com/language/ref/Module.html)

</TabItem>
</Tabs>


## 4.1.6. Variable Variables

Verwendung des Werts einer Variable als Name einer anderen Variable.

### Sprachen {#sprachen}

<Tabs availableTabs={['php', 'perl', 'python', 'ruby']}>
<TabItem value="php" label="PHP">

```php
// Variable Variables
$name = "count";
$$name = 42;  // Erstellt $count = 42
echo $count;  // 42

// Mit geschweiften Klammern
${$name} = 42;
${"prefix_" . $name} = 42;  // $prefix_count = 42
```

**Besonderheiten:**
- `$$` für Variable Variables
- Geschweifte Klammern für komplexere Ausdrücke

**Weiterführende Links:**
- [PHP Documentation - Variable Variables](https://www.php.net/manual/en/language.variables.variable.php)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Variable Variables
my $name = "count";
${$name} = 42;  # Erstellt $count = 42
print $count;  # 42

# Mit Symbol-Tabelle
my $var_name = "count";
*{$var_name} = \42;  # Erstellt $count = 42
```

**Besonderheiten:**
- `${$name}` für Variable Variables
- Symbol-Tabelle für erweiterte Funktionalität

**Weiterführende Links:**
- [Perl Documentation - Symbol Tables](https://perldoc.perl.org/perldata#Typeglobs-and-Filehandles)

</TabItem>
<TabItem value="python" label="Python">

```python
# Variable Variables (mit globals() oder locals())
name = "count"
globals()[name] = 42  # Erstellt count = 42
print(count)  # 42

# Mit locals() in Funktionen
def example():
    name = "count"
    locals()[name] = 42  # Funktioniert nur in bestimmten Kontexten
```

**Besonderheiten:**
- `globals()` und `locals()` für Variable Variables
- Nicht empfohlen, da es Code schwer lesbar macht

**Weiterführende Links:**
- [Python Documentation - globals()](https://docs.python.org/3/library/functions.html#globals)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Variable Variables (mit instance_variable_set oder eval)
name = "count"
instance_variable_set("@#{name}", 42)  # @count = 42

# Mit eval (nicht empfohlen)
eval("#{name} = 42")
```

**Besonderheiten:**
- `instance_variable_set` für Instanzvariablen
- `eval` möglich, aber nicht empfohlen

**Weiterführende Links:**
- [Ruby Documentation - instance_variable_set](https://ruby-doc.org/core-3.1.2/Object.html#method-i-instance_variable_set)

</TabItem>
</Tabs>


## 4.1.7. Hoisting

Variablen- und Funktionsdeklarationen werden an den Anfang ihres Scopes verschoben, bevor der Code ausgeführt wird.

### Sprachen {#sprachen}

<Tabs availableTabs={['javascript', 'typescript']}>
<TabItem value="javascript" label="JavaScript">

```javascript
// Hoisting mit var
console.log(count);  // undefined (nicht ReferenceError)
var count = 42;

// Funktions-Hoisting
console.log(hello());  // "Hallo"
function hello() {
  return "Hallo";
}

// let und const werden nicht gehoisted (Temporal Dead Zone)
// console.log(name);  // ReferenceError
let name = "Welt";
```

**Besonderheiten:**
- `var` wird gehoisted, aber initialisiert mit `undefined`
- Funktionsdeklarationen werden vollständig gehoisted
- `let` und `const` werden nicht gehoisted (Temporal Dead Zone)

**Weiterführende Links:**
- [MDN Web Docs - Hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Hoisting mit var
console.log(count);  // undefined (nicht ReferenceError)
var count = 42;

// Funktions-Hoisting
console.log(hello());  // "Hallo"
function hello(): string {
  return "Hallo";
}

// let und const werden nicht gehoisted (Temporal Dead Zone)
// console.log(name);  // ReferenceError
let name = "Welt";
```

**Besonderheiten:**
- `var` wird gehoisted, aber initialisiert mit `undefined`
- Funktionsdeklarationen werden vollständig gehoisted
- `let` und `const` werden nicht gehoisted (Temporal Dead Zone)

**Weiterführende Links:**
- [TypeScript Documentation - Variable Declarations](https://www.typescriptlang.org/docs/handbook/variable-declarations.html)

</TabItem>
</Tabs>


## 4.1.8. Sigils

Zeichen, die den Typ einer Variable anzeigen (z.B. `$`, `@`, `%`).

### Sprachen {#sprachen}

<Tabs availableTabs={['elixir', 'perl', 'php', 'ruby']}>
<TabItem value="perl" label="Perl">

```perl
# Sigils für verschiedene Typen
my $scalar = 42;        # $ für Skalare
my @array = (1, 2, 3);  # @ für Arrays
my %hash = (a => 1);    # % für Hashes

# Zugriff auf Array-Elemente
$array[0] = 10;  # $ für einzelne Elemente

# Zugriff auf Hash-Elemente
$hash{a} = 1;  # $ für einzelne Werte
```

**Besonderheiten:**
- `$` für Skalare und einzelne Elemente
- `@` für Arrays
- `%` für Hashes
- Sigils zeigen den Typ, nicht die Variable

**Weiterführende Links:**
- [Perl Documentation - Sigils](https://perldoc.perl.org/perlintro#Variable-types)

</TabItem>
<TabItem value="php" label="PHP">

```php
// Sigils für Variablen
$scalar = 42;           // $ für alle Variablen
$array = [1, 2, 3];     // $ für Arrays
$hash = ['a' => 1];     // $ für assoziative Arrays

// Zugriff auf Array-Elemente
$array[0] = 10;

// Zugriff auf Hash-Elemente
$hash['a'] = 1;
```

**Besonderheiten:**
- `$` für alle Variablen
- Typ wird durch den Wert bestimmt, nicht durch das Sigil

**Weiterführende Links:**
- [PHP Documentation - Variables](https://www.php.net/manual/en/language.variables.php)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Sigils für verschiedene Variablentypen
scalar = 42           # Kein Sigil für lokale Variablen
@instance = 42        # @ für Instanzvariablen
@@class = 42          # @@ für Klassenvariablen
$global = 42          # $ für globale Variablen
CONSTANT = 42         # Großbuchstaben für Konstanten
```

**Besonderheiten:**
- Kein Sigil für lokale Variablen
- `@` für Instanzvariablen
- `@@` für Klassenvariablen
- `$` für globale Variablen

**Weiterführende Links:**
- [Ruby Documentation - Variables](https://ruby-doc.org/core-3.1.2/doc/syntax/assignment_rdoc.html)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Eingebaute Sigils
regex = ~r/hello\s+world/i       # Regular Expression
string = ~s(hello "world")       # String mit Escape
words = ~w(foo bar baz)          # Word List: ["foo", "bar", "baz"]
charlist = ~c(hello)             # Charlist

# Heredoc-Varianten (Großbuchstabe = ohne Interpolation)
raw = ~S(hello #{name})          # Kein Interpolation: "hello \#{name}"
words_atoms = ~w(foo bar baz)a   # Atom List: [:foo, :bar, :baz]
```

**Besonderheiten:**
- Kleinbuchstaben-Sigils unterstützen String-Interpolation und Escape-Sequenzen
- Großbuchstaben-Sigils sind "raw" (keine Interpolation/Escaping)
- `~w` unterstützt Modifier: `a` für Atoms, `c` für Charlists, `s` für Strings (Standard)
- Benutzerdefinierte Sigils können über `sigil_x`-Funktionen erstellt werden

**Weiterführende Links:**
- [Elixir Documentation - Sigils](https://elixir-lang.org/getting-started/sigils.html)

</TabItem>
</Tabs>

## 4.1.9. Destructuring Declarations

Destructuring Declarations ermöglichen die Extraktion von Werten aus Objekten und Arrays in separaten Deklarationen.

### Sprachen {#sprachen}

<Tabs availableTabs={['clojure', 'csharp', 'dart', 'elixir', 'elm', 'erlang', 'fsharp', 'gleam', 'haskell', 'javascript', 'koka', 'kotlin', 'lean4', 'mercury', 'ocaml', 'prolog', 'purescript', 'python', 'roc', 'rust', 'scala', 'swift', 'typescript', 'wolfram-language']}>
<TabItem value="csharp" label="C#">

```csharp
// Destructuring Declarations (seit C# 7.0)
var point = (x: 5, y: 10);
var (x, y) = point;

// Array-Destructuring (seit C# 12)
int[] arr = {1, 2, 3};
var (first, second, third) = arr;
```

**Besonderheiten:**
- Tuple-Destructuring seit C# 7.0
- Array-Destructuring seit C# 12
- Variablen werden direkt deklariert

**Weiterführende Links:**
- [C# Tuple Types](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/value-tuples)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Destructuring Declarations
point = {5, 10}
{x, y} = point

# List-Destructuring
list = [1, 2, 3]
[first, second, third] = list
```

**Besonderheiten:**
- Destructuring ist ein fundamentales Sprachfeature
- Tuple- und List-Destructuring unterstützt
- Pattern Matching in Deklarationen

**Weiterführende Links:**
- [Elixir Pattern Matching Guide](https://elixir-lang.org/getting-started/pattern-matching.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% Destructuring Declarations
Point = {5, 10},
{X, Y} = Point.

% List-Destructuring
List = [1, 2, 3],
[First, Second, Third] = List.
```

**Besonderheiten:**
- Destructuring ist ein fundamentales Sprachfeature
- Tuple- und List-Destructuring unterstützt
- Pattern Matching in Deklarationen

**Weiterführende Links:**
- [Erlang Pattern Matching](https://www.erlang.org/doc/reference_manual/patterns.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Destructuring Declarations
let point = (5, 10)
let (x, y) = point

// List-Destructuring
let list = [1; 2; 3]
let [first; second; third] = list
```

**Besonderheiten:**
- Destructuring ist ein fundamentales Sprachfeature
- Tuple- und List-Destructuring unterstützt
- Pattern Matching in Deklarationen

**Weiterführende Links:**
- [F# Pattern Matching](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/pattern-matching)

</TabItem>
<TabItem value="gleam" label="Gleam">

```erlang
// Destructuring Declarations
let point = #(5, 10)
let #(x, y) = point

// List-Destructuring
let list = [1, 2, 3]
let [first, second, third] = list
```

**Besonderheiten:**
- Destructuring ist ein fundamentales Sprachfeature
- Tuple- und List-Destructuring unterstützt
- Pattern Matching in Deklarationen

**Weiterführende Links:**
- [Gleam Pattern Matching](https://gleam.run/documentation/tour/pattern-matching/)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Destructuring Declarations
point = (5, 10)
(x, y) = point

-- List-Destructuring
list = [1, 2, 3]
(first:second:third:_) = list
```

**Besonderheiten:**
- Destructuring ist ein fundamentales Sprachfeature
- Tuple- und List-Destructuring unterstützt
- Pattern Matching in Deklarationen

**Weiterführende Links:**
- [Haskell Pattern Matching](https://www.haskell.org/tutorial/patterns.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Destructuring Declarations (seit ES6)
const point = {x: 5, y: 10};
const {x, y} = point;

// Array-Destructuring
const arr = [1, 2, 3];
const [first, second, third] = arr;
```

**Besonderheiten:**
- Destructuring Assignment seit ES6
- Object- und Array-Destructuring unterstützt
- Variablen werden direkt deklariert

**Weiterführende Links:**
- [MDN: Destructuring Assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Destructuring Declarations über Pattern Matching
type Point
  Point(x: int, y: int)

val Point(x, y) = Point(5, 10)
// x ist 5, y ist 10

// Tuple-Destructuring
val (a, b, c) = (1, "hello", True)

// In match-Ausdrücken
type Shape
  Circle(radius: float64)
  Rectangle(width: float64, height: float64)

fun area(s: Shape): float64
  match s
    Circle(r) -> 3.14159 * r * r
    Rectangle(w, h) -> w * h
```

**Besonderheiten:**
- Destructuring über Pattern Matching in `val`-Bindungen
- Algebraische Datentypen können direkt destrukturiert werden
- Tuple-Destructuring unterstützt
- Vollständiges Pattern Matching in `match`-Ausdrücken

**Weiterführende Links:**
- [Koka Language Guide - Pattern Matching](https://koka-lang.github.io/koka/doc/book.html#sec-pattern-matching)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Destructuring Declarations über Pattern Matching
structure Point where
  x : Nat
  y : Nat

def example : Nat :=
  let p := Point.mk 5 10
  let ⟨x, y⟩ := p  -- Destrukturierung mit anonymem Konstruktor
  x + y  -- 15

-- Tuple-Destructuring
def tupleExample : Nat :=
  let (a, b, c) := (1, 2, 3)
  a + b + c  -- 6

-- In match-Ausdrücken
inductive Shape where
  | circle (radius : Float)
  | rectangle (width : Float) (height : Float)

def area : Shape → Float
  | .circle r => 3.14159 * r * r
  | .rectangle w h => w * h
```

**Besonderheiten:**
- Destructuring über Pattern Matching in `let`-Bindungen
- `⟨...⟩` (anonymous constructor) für Strukturen
- Tuple-Destructuring unterstützt
- Vollständiges Pattern Matching in `match`-Ausdrücken und Funktionsdefinitionen

**Weiterführende Links:**
- [Lean 4 Documentation - Pattern Matching](https://lean-lang.org/lean4/doc/lean-by-example/pattern-matching.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```mercury
% Destructuring Declarations über Unifikation/Pattern Matching
% Funktor-Destructuring
:- type point ---> point(int, int).

:- pred example(io::di, io::uo) is det.
example(!IO) :-
    Point = point(5, 10),
    point(X, Y) = Point,
    % X = 5, Y = 10

    % List-Destructuring
    List = [1, 2, 3],
    [First, Second, Third] = List,

    % Head-Tail-Destructuring
    [Head | Tail] = [1, 2, 3],
    % Head = 1, Tail = [2, 3]

    io.format("%d %d\n", [i(X), i(Y)], !IO).

% In Prädikatköpfen
:- pred process_pair(pair(K, V)::in, io::di, io::uo) is det.
process_pair(Key - Value, !IO) :-
    io.format("%s: %d\n", [s(Key), i(Value)], !IO).
```

**Besonderheiten:**
- Destructuring ist ein fundamentales Sprachfeature (über Unifikation)
- Funktoren und Listen können direkt in Prädikatköpfen destrukturiert werden
- `[Head | Tail]`-Notation für Listen-Zerlegung
- Pattern Matching ist die primäre Methode zur Datenextraktion
- Starkes Typsystem überprüft Destructuring-Patterns zur Kompilierzeit

**Weiterführende Links:**
- [Mercury Language Reference - Data Types](https://www.mercurylang.org/information/doc-release/mercury_ref/Types.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Destructuring Declarations
data class Point(val x: Int, val y: Int)
val point = Point(5, 10)
val (x, y) = point

// Array-Destructuring
val arr = arrayOf(1, 2, 3)
val (first, second, third) = arr
```

**Besonderheiten:**
- Destructuring Declarations für Data Classes
- Array-Destructuring unterstützt
- Variablen werden direkt deklariert

**Weiterführende Links:**
- [Kotlin Destructuring Declarations](https://kotlinlang.org/docs/destructuring-declarations.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Destructuring Declarations *)
let point = (5, 10) in
let (x, y) = point in

(* List-Destructuring *)
let list = [1; 2; 3] in
let [first; second; third] = list in
```

**Besonderheiten:**
- Destructuring ist ein fundamentales Sprachfeature
- Tuple- und List-Destructuring unterstützt
- Pattern Matching in Deklarationen

**Weiterführende Links:**
- [OCaml Pattern Matching](https://ocaml.org/manual/patterns.html)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Destructuring Declarations über Unifikation/Pattern Matching
% Tuple-Destructuring (über Funktor-Argumente)
Point = point(5, 10),
point(X, Y) = Point,
% X = 5, Y = 10

% List-Destructuring
List = [1, 2, 3],
[First, Second, Third] = List,
% First = 1, Second = 2, Third = 3

% Head-Tail-Destructuring
[Head|Tail] = [1, 2, 3],
% Head = 1, Tail = [2, 3]

% In Prädikatköpfen
process_pair(pair(Key, Value)) :-
    format("~w: ~w~n", [Key, Value]).
```

**Besonderheiten:**
- Destructuring ist ein fundamentales Sprachfeature (über Unifikation)
- Funktoren und Listen können direkt in Prädikatköpfen destrukturiert werden
- `[Head|Tail]`-Notation für Listen-Zerlegung
- Pattern Matching ist die primäre Methode zur Datenextraktion

**Weiterführende Links:**
- [SWI-Prolog Manual - Pattern Matching](https://www.swi-prolog.org/pldoc/man?section=syntax)

</TabItem>
<TabItem value="python" label="Python">

```python
# Destructuring Declarations
point = (5, 10)
x, y = point

# List-Destructuring
arr = [1, 2, 3]
first, second, third = arr
```

**Besonderheiten:**
- Tuple-Unpacking ist ein fundamentales Sprachfeature
- List-Unpacking unterstützt
- Variablen werden direkt deklariert

**Weiterführende Links:**
- [Python: Unpacking](https://docs.python.org/3/tutorial/datastructures.html#tuples-and-sequences)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Destructuring Declarations
let point = (5, 10);
let (x, y) = point;

// Array-Destructuring
let arr = [1, 2, 3];
let [first, second, third] = arr;
```

**Besonderheiten:**
- Destructuring ist ein fundamentales Sprachfeature
- Tuple- und Array-Destructuring unterstützt
- Pattern Matching in Deklarationen

**Weiterführende Links:**
- [Rust Pattern Matching](https://doc.rust-lang.org/book/ch18-03-pattern-syntax.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Destructuring Declarations
val point = (5, 10)
val (x, y) = point

// List-Destructuring
val list = List(1, 2, 3)
val first :: second :: third :: _ = list
```

**Besonderheiten:**
- Destructuring ist ein fundamentales Sprachfeature
- Tuple- und List-Destructuring unterstützt
- Pattern Matching in Deklarationen

**Weiterführende Links:**
- [Scala Pattern Matching](https://docs.scala-lang.org/tour/pattern-matching.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Destructuring Declarations
let point = (x: 5, y: 10)
let (x, y) = point

// Array-Destructuring
let arr = [1, 2, 3]
let (first, second, third) = (arr[0], arr[1], arr[2])
```

**Besonderheiten:**
- Tuple-Destructuring ist ein fundamentales Sprachfeature
- Array-Destructuring über Tuple-Unpacking
- Variablen werden direkt deklariert

**Weiterführende Links:**
- [Swift: Tuples](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/thebasics/#Tuples)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Destructuring Declarations (seit ES6)
const point = {x: 5, y: 10};
const {x, y} = point;

// Array-Destructuring
const arr = [1, 2, 3];
const [first, second, third] = arr;
```

**Besonderheiten:**
- Destructuring Assignment seit ES6
- Object- und Array-Destructuring unterstützt
- Variablen werden direkt deklariert

**Weiterführende Links:**
- [TypeScript: Destructuring](https://www.typescriptlang.org/docs/handbook/variable-declarations.html#destructuring)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Destructuring in Funktionsparametern
(defn greet [{:keys [name age]}]
  (println (str name " ist " age " Jahre alt")))

(greet {:name "Alice" :age 30})

;; Destructuring in for/doseq
(doseq [[key value] {:a 1 :b 2 :c 3}]
  (println key "->" value))

;; Verschachteltes Destructuring in Funktionen
(defn process-point [[x y]]
  (Math/sqrt (+ (* x x) (* y y))))

(process-point [3 4])  ; 5.0
```

**Besonderheiten:**
- Destructuring direkt in `defn`-Parametern
- Auch in `for`, `doseq`, `loop` nutzbar
- Kombinierbar mit Variadic-Argumenten

**Weiterführende Links:**
- [Clojure Documentation - Destructuring](https://clojure.org/guides/destructuring)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Destructuring Declarations (seit Dart 3.0)
// In var-Deklarationen
var (a, b) = (1, 'hello');
var [first, second, ...rest] = [1, 2, 3, 4, 5];

// In for-Schleifen
var map = {'a': 1, 'b': 2};
for (var MapEntry(:key, :value) in map.entries) {
  print('$key: $value');
}

// In if-case
if (json case {'name': String name, 'age': int age}) {
  print('$name ist $age Jahre alt');
}
```

**Besonderheiten:**
- Destructuring funktioniert in `var`-Deklarationen
- Kann in `for-in`-Schleifen verwendet werden
- `if-case` kombiniert Destructuring mit Bedingungen
- Unterstützt alle Pattern-Typen (List, Map, Record, Object)

**Weiterführende Links:**
- [Dart Documentation - Patterns](https://dart.dev/language/patterns)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Destructuring in let-Bindings
example : String
example =
    let
        (x, y) = (10, 20)
        { name, age } = { name = "Alice", age = 30 }
    in
    name ++ " ist " ++ String.fromInt age ++ " Jahre alt"
```

**Besonderheiten:**
- Tuple-Destructuring in `let`-Bindings
- Record-Destructuring in `let`-Bindings
- Funktionsparameter unterstützen ebenfalls Destructuring

**Weiterführende Links:**
- [Elm Documentation - Records](https://guide.elm-lang.org/types/records.html)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Destructuring Declarations
example = let
    Tuple x y = Tuple 1 2
    { name, age } = { name: "Alice", age: 30 }
  in name <> " is " <> show age
```

**Besonderheiten:**
- Destructuring in `let`- und `where`-Bindungen
- Unterstützt Record- und Data-Type-Patterns

**Weiterführende Links:**
- [PureScript Documentation - Pattern Matching](https://github.com/purescript/documentation/blob/master/language/Pattern-Matching.md)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Destructuring Declarations
{ x, y } = { x: 10, y: 20 }
(first, second) = (1, "hello")
```

**Besonderheiten:**
- Destructuring direkt in Bindungen
- Funktioniert mit Records und Tuples

**Weiterführende Links:**
- [Roc Documentation - Pattern Matching](https://www.roc-lang.org/tutorial#pattern-matching)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Destructuring-Zuweisung *)
{x, y, z} = {10, 20, 30};
Print[x]  (* 10 *)
Print[y]  (* 20 *)

(* Mit Rest-Pattern *)
{first, rest___} = {1, 2, 3, 4};
Print[first]   (* 1 *)
Print[{rest}]  (* {2, 3, 4} *)
```

**Besonderheiten:**
- Direkte Destrukturierung bei der Zuweisung
- `___` (BlankNullSequence) für Rest-Elemente
- Funktioniert mit allen Ausdruckstypen

**Weiterführende Links:**
- [Wolfram Language Documentation - Set](https://reference.wolfram.com/language/ref/Set.html)

</TabItem>
</Tabs>


