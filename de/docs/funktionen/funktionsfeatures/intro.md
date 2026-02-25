---
slug: /funktionen/funktionsfeatures
title: 7.2. Funktionsfeatures
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 7.2. Funktionsfeatures

Zusätzliche Features von Funktionen.

## 7.2.1. First-Class Functions

Funktionen, die wie normale Werte behandelt werden können: Sie können in Variablen gespeichert, als Parameter übergeben, von Funktionen zurückgegeben und zur Laufzeit erstellt werden.

### Sprachen {#sprachen}

<Tabs availableTabs={['carbon', 'clojure', 'common-lisp', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'elixir', 'elm', 'erlang', 'fsharp', 'gleam', 'go', 'groovy', 'haskell', 'haxe', 'idris', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'lua', 'matlab', 'mercury', 'nim', 'objective-c', 'object-pascal', 'ocaml', 'octave', 'perl', 'php', 'purescript', 'python', 'r', 'racket', 'roc', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'v', 'vbnet', 'zig']} yellowTabs={['prolog']}>
<TabItem value="carbon" label="Carbon">

```cpp
fn Double(x: i32) -> i32 {
    return x * 2;
}

var func: fn(i32) -> i32 = Double;
var result = func(5);
```

**Besonderheiten:**
- Experimentelle Sprache, Syntax kann sich noch ändern
- Unterstützt First-Class Functions

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
(defn double [x]
  (* x 2))

(def func double)
(def result (func 5))
```

**Besonderheiten:**
- Funktionen sind First-Class-Objekte
- Können in Variablen gespeichert und übergeben werden

**Weiterführende Links:**
- [Clojure Documentation - Functions](https://clojure.org/reference/functions)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
(defun double (x)
  (* x 2))

(defvar func #'double)
(defvar result (funcall func 5))
```

**Besonderheiten:**
- Funktionen sind First-Class-Objekte
- Verwendet `#'` für Funktionsreferenzen

**Weiterführende Links:**
- [Common Lisp HyperSpec - Functions](http://www.lispworks.com/documentation/HyperSpec/Body/f_fun.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
def double(x)
  x * 2
end

func = ->double
result = func.call(5)
```

**Besonderheiten:**
- Funktionen sind First-Class-Objekte über Procs
- Ruby-ähnliche Syntax

**Weiterführende Links:**
- [Crystal Documentation - Procs](https://crystal-lang.org/reference/1.11/syntax_and_semantics/literals/proc.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
int Double(int x)
{
    return x * 2;
}

Func<int, int> func = Double;
int result = func(5);
```

**Besonderheiten:**
- Unterstützt First-Class Functions über Delegates und Lambda-Ausdrücke
- Seit C# 1.0 verfügbar

**Weiterführende Links:**
- [Microsoft C# Documentation - Delegates](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/delegates/)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
#include <functional>

int doubleValue(int x) {
    return x * 2;
}

std::function<int(int)> func = doubleValue;
int result = func(5);
```

**Besonderheiten:**
- Unterstützt First-Class Functions über Funktionszeiger und `std::function`
- Seit C++98 verfügbar

**Weiterführende Links:**
- [cppreference.com - std::function](https://en.cppreference.com/w/cpp/utility/functional/function)

</TabItem>
<TabItem value="d" label="D">

```d
int doubleValue(int x) {
    return x * 2;
}

int function(int) func = &doubleValue;
int result = func(5);
```

**Besonderheiten:**
- Unterstützt First-Class Functions über Funktionszeiger
- Unterstützt auch Delegates

**Weiterführende Links:**
- [D Language Specification - Function Pointers](https://dlang.org/spec/function.html#function-pointers)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
int doubleValue(int x) {
    return x * 2;
}

int Function(int) func = doubleValue;
int result = func(5);
```

**Besonderheiten:**
- Unterstützt First-Class Functions nativ
- Funktionen sind First-Class-Objekte

**Weiterführende Links:**
- [Dart Documentation - Functions](https://dart.dev/guides/language/language-tour#functions)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
def double(x) do
    x * 2
end

func = &double/1
result = func.(5)
```

**Besonderheiten:**
- Funktionen sind First-Class-Objekte
- Unterstützt First-Class Functions nativ

**Weiterführende Links:**
- [Elixir Documentation - Functions](https://elixir-lang.org/getting-started/basic-types.html#functions)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
double : Int -> Int
double x = x * 2

func : Int -> Int
func = double

result = func 5
```

**Besonderheiten:**
- Funktionale Sprache mit expliziten Typannotationen
- Funktionen sind First-Class-Objekte

**Weiterführende Links:**
- [Elm Documentation - Functions](https://guide.elm-lang.org/core_language.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
double(X) ->
    X * 2.

Func = fun double/1,
Result = Func(5).
```

**Besonderheiten:**
- Funktionen sind First-Class-Objekte
- Unterstützt First-Class Functions nativ

**Weiterführende Links:**
- [Erlang Documentation - Functions](https://www.erlang.org/doc/reference_manual/functions.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
let double (x: int) : int = x * 2

let func: int -> int = double
let result = func 5
```

**Besonderheiten:**
- Funktionale Sprache mit First-Class-Funktionen
- Funktionen sind First-Class-Objekte

**Weiterführende Links:**
- [F# Documentation - Functions](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/functions/)

</TabItem>
<TabItem value="gleam" label="Gleam">

```erlang
pub fn double(x: Int) -> Int {
    x * 2
}

let func = double
let result = func(5)
```

**Besonderheiten:**
- Funktionale Sprache mit expliziten Typannotationen
- Funktionen sind First-Class-Objekte

**Weiterführende Links:**
- [Gleam Documentation - Functions](https://gleam.run/documentation/tour/functions/)

</TabItem>
<TabItem value="go" label="Go">

```go
func double(x int) int {
    return x * 2
}

var func func(int) int = double
result := func(5)
```

**Besonderheiten:**
- Unterstützt First-Class Functions über Funktionszeiger
- Funktionen sind First-Class-Objekte

**Weiterführende Links:**
- [Go Documentation - Functions](https://go.dev/ref/spec#Function_declarations)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
def doubleValue(x) {
    x * 2
}

// Methoden-Referenz mit .& Operator
def func = this.&doubleValue
def result = func(5) // 10

// Closures als First-Class-Objekte
def multiply = { x, y -> x * y }
def result2 = multiply(3, 4) // 12
```

**Besonderheiten:**
- Unterstützt First-Class Functions über Closures und Methoden-Referenzen
- `.&` Operator für Methoden-Referenzen
- Closures können Variablen zugewiesen und als Argumente übergeben werden

**Weiterführende Links:**
- [Groovy Documentation - Closures](https://groovy-lang.org/closures.html)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
double :: Int -> Int
double x = x * 2

func :: Int -> Int
func = double

result = func 5
```

**Besonderheiten:**
- Funktionale Sprache mit expliziten Typannotationen
- Funktionen sind First-Class-Objekte

**Weiterführende Links:**
- [Haskell Documentation - Functions](https://www.haskell.org/tutorial/functions.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
function double(x: Int): Int {
    return x * 2;
}

var func: Int -> Int = double;
var result = func(5);
```

**Besonderheiten:**
- Unterstützt First-Class Functions nativ
- Cross-Platform-Kompilierung

**Weiterführende Links:**
- [Haxe Documentation - Functions](https://haxe.org/manual/types-function.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
double : Int -> Int
double x = x * 2

func : Int -> Int
func = double

result : Int
result = func 5
```

**Besonderheiten:**
- Funktionale Sprache mit abhängigen Typen
- Funktionen sind First-Class-Objekte

**Weiterführende Links:**
- [Idris Documentation - Functions](https://idris2.readthedocs.io/en/latest/tutorial/functions.html)

</TabItem>
<TabItem value="java" label="Java">

```java
import java.util.function.Function;

static int doubleValue(int x) {
    return x * 2;
}

Function<Integer, Integer> func = Main::doubleValue;
int result = func.apply(5);
```

**Besonderheiten:**
- Unterstützt First-Class Functions über funktionale Interfaces (seit Java 8.0)
- Verwendet Method References oder Lambda-Ausdrücke

**Weiterführende Links:**
- [Oracle Java Documentation - Functional Interfaces](https://docs.oracle.com/javase/tutorial/java/javaOO/lambdaexpressions.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
function double(x) {
    return x * 2;
}

const func = double;
const result = func(5);
```

**Besonderheiten:**
- Unterstützt First-Class Functions nativ
- Funktionen sind First-Class-Objekte

**Weiterführende Links:**
- [MDN Web Docs - Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
function double(x)
    x * 2
end

func = double
result = func(5)
```

**Besonderheiten:**
- Unterstützt First-Class Functions nativ
- Funktionen sind First-Class-Objekte

**Weiterführende Links:**
- [Julia Documentation - Functions](https://docs.julialang.org/en/v1/manual/functions/)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// First-Class Functions
fun double(x: int): int
  x * 2

// Funktion als Wert speichern
val func: (int) -> int = double
val result = func(5) // 10

// Funktion als Parameter übergeben
fun apply(f: (int) -> int, x: int): int
  f(x)

val r = apply(double, 5) // 10

// Funktion als Rückgabewert
fun multiplier(factor: int): (int) -> int
  fn(x) { x * factor }

val triple = multiplier(3)
val tripled = triple(4) // 12
```

**Besonderheiten:**
- Funktionen sind vollwertige First-Class-Werte
- Können als Parameter, Rückgabewerte und in Variablen gespeichert werden
- Funktionstypen werden mit `->` notiert (z.B. `(int) -> int`)
- Effekte werden in Funktionstypen propagiert

**Weiterführende Links:**
- [Koka Language Guide - Functions](https://koka-lang.github.io/koka/doc/book.html#sec-functions)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
fun double(x: Int): Int {
    return x * 2
}

val func: (Int) -> Int = ::double
val result = func(5)
```

**Besonderheiten:**
- Unterstützt First-Class Functions nativ
- Funktionen sind First-Class-Objekte

**Weiterführende Links:**
- [Kotlin Documentation - Function References](https://kotlinlang.org/docs/reflection.html#function-references)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- First-Class Functions
def double (x : Int) : Int := x * 2

def applyFunc (f : Int → Int) (value : Int) : Int := f value

def result : Int := applyFunc double 5
```

**Besonderheiten:**
- Funktionen sind First-Class-Objekte und können in Variablen gespeichert, als Parameter übergeben und von Funktionen zurückgegeben werden
- Lean 4 ist eine funktionale Sprache, in der Funktionen grundlegende Bausteine sind
- Funktionstypen werden mit `→` (oder `->`) annotiert

**Weiterführende Links:**
- [Lean 4 Documentation - Functions](https://lean-lang.org/lean4/doc/functions.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
function double(x)
    return x * 2
end

local func = double
local result = func(5)
```

**Besonderheiten:**
- Unterstützt First-Class Functions nativ
- Funktionen sind First-Class-Objekte

**Weiterführende Links:**
- [Lua Documentation - Functions](https://www.lua.org/manual/5.4/manual.html#3.4.11)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
proc double(x: int): int =
    x * 2

var func: proc(x: int): int = double
let result = func(5)
```

**Besonderheiten:**
- Unterstützt First-Class Functions über Prozeduren
- Funktionen sind First-Class-Objekte

**Weiterführende Links:**
- [Nim Documentation - Procedures](https://nim-lang.org/docs/manual.html#procedures)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
let double (x: int) : int = x * 2

let func: int -> int = double
let result = func 5
```

**Besonderheiten:**
- Funktionale Sprache mit First-Class-Funktionen
- Funktionen sind First-Class-Objekte

**Weiterführende Links:**
- [OCaml Documentation - Functions](https://ocaml.org/docs/first-hour#functions)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
sub double {
    my $x = shift;
    return $x * 2;
}

my $func = \&double;
my $result = $func->(5);
```

**Besonderheiten:**
- Unterstützt First-Class Functions über Funktionsreferenzen
- Funktionen sind First-Class-Objekte

**Weiterführende Links:**
- [Perl Documentation - Functions](https://perldoc.perl.org/perlsub)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
function double($x) {
    return $x * 2;
}

$func = 'double';
$result = $func(5);
```

**Besonderheiten:**
- Unterstützt First-Class Functions über Funktionsnamen oder Closures
- Funktionen sind First-Class-Objekte

**Weiterführende Links:**
- [PHP Documentation - Functions](https://www.php.net/manual/en/functions.user-defined.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
double(X, Result) :- Result is X * 2.

% Prädikat als Argument übergeben und mit call/2 aufrufen
apply_func(Func, Value, Result) :-
    call(Func, Value, Result).

?- apply_func(double, 5, Result).
%  Result = 10

% In Variable speichern und später aufrufen
?- Func = double, call(Func, 5, Result).
%  Result = 10
```

**Besonderheiten:**
- Prädikate können als Atome/Terme gespeichert und mit `call/N` aufgerufen werden
- `call/N` ist ISO-Standard und ermöglicht das dynamische Aufrufen von Prädikaten
- Prädikate sind keine echten First-Class-Werte, sondern Terme, die über `call/N` ausgeführt werden

**Weiterführende Links:**
- [SWI-Prolog Documentation - Meta-predicates](https://www.swi-prolog.org/pldoc/man?section=metacall)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
double :: Int -> Int
double x = x * 2

func :: Int -> Int
func = double

result :: Int
result = func 5
```

**Besonderheiten:**
- Funktionale Sprache mit expliziten Typannotationen
- Funktionen sind First-Class-Objekte

**Weiterführende Links:**
- [PureScript Documentation - Functions](https://book.purescript.org/chapter3.html)

</TabItem>
<TabItem value="python" label="Python">

```python
def double(x):
    return x * 2

func = double
result = func(5)
```

**Besonderheiten:**
- Unterstützt First-Class Functions nativ
- Funktionen sind First-Class-Objekte

**Weiterführende Links:**
- [Python Documentation - Functions](https://docs.python.org/3/tutorial/controlflow.html#defining-functions)

</TabItem>
<TabItem value="r" label="R">

```r
double <- function(x) {
    x * 2
}

func <- double
result <- func(5)
```

**Besonderheiten:**
- Unterstützt First-Class Functions nativ
- Funktionen sind First-Class-Objekte

**Weiterführende Links:**
- [R Documentation - Functions](https://cran.r-project.org/doc/manuals/r-release/R-lang.html#Function-objects)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
(define (double x)
    (* x 2))

(define func double)
(define result (func 5))
```

**Besonderheiten:**
- Funktionale Sprache mit First-Class-Funktionen
- Funktionen sind First-Class-Objekte

**Weiterführende Links:**
- [Racket Documentation - Functions](https://docs.racket-lang.org/guide/define.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
double : Int -> Int
double x = x * 2

func : Int -> Int
func = double

result : Int
result = func 5
```

**Besonderheiten:**
- Funktionale Sprache mit expliziten Typannotationen
- Funktionen sind First-Class-Objekte

**Weiterführende Links:**
- [Roc Documentation - Functions](https://www.roc-lang.org/tutorial#functions)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
def double(x)
    x * 2
end

func = method(:double)
result = func.call(5)
```

**Besonderheiten:**
- Unterstützt First-Class Functions über Method-Objekte oder Procs
- Funktionen sind First-Class-Objekte

**Weiterführende Links:**
- [Ruby Documentation - Methods](https://docs.ruby-lang.org/en/master/syntax/methods_rdoc.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
fn double(x: i32) -> i32 {
    x * 2
}

let func: fn(i32) -> i32 = double;
let result = func(5);
```

**Besonderheiten:**
- Unterstützt First-Class Functions über Funktionszeiger und Closures
- Typsicher

**Weiterführende Links:**
- [Rust Book - Functions](https://doc.rust-lang.org/book/ch03-03-functions.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
def double(x: Int): Int = {
    x * 2
}

val func: Int => Int = double
val result = func(5)
```

**Besonderheiten:**
- Funktionale und objektorientierte Sprache
- Funktionen sind First-Class-Objekte

**Weiterführende Links:**
- [Scala Documentation - Functions](https://docs.scala-lang.org/tour/functions.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
(define (double x)
    (* x 2))

(define func double)
(define result (func 5))
```

**Besonderheiten:**
- Funktionale Sprache mit First-Class-Funktionen
- Funktionen sind First-Class-Objekte

**Weiterführende Links:**
- [Scheme Documentation - Functions](https://www.scheme.com/tspl4/start.html#./start:h0)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
func double(x: Int) -> Int {
    return x * 2
}

let fn: (Int) -> Int = double
let result = fn(5)
```

**Besonderheiten:**
- Unterstützt First-Class Functions nativ
- Funktionen sind First-Class-Objekte

**Weiterführende Links:**
- [Swift Documentation - Functions](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/functions/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
function double(x: number): number {
    return x * 2;
}

const func: (x: number) => number = double;
const result = func(5);
```

**Besonderheiten:**
- Unterstützt First-Class Functions nativ
- Vollständige Typannotationen

**Weiterführende Links:**
- [TypeScript Handbook - Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
Function DoubleValue(x As Integer) As Integer
    Return x * 2
End Function

Dim func As Func(Of Integer, Integer) = AddressOf DoubleValue
Dim result As Integer = func(5)
```

**Besonderheiten:**
- Unterstützt First-Class Functions über Delegates
- Verwendet `AddressOf` für Funktionsreferenzen

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Delegates](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/delegates/)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% First-Class Functions über Function Handles
func = @sin;
result = func(pi/2);  % 1

% Funktionen in Cell Arrays speichern
funcs = {@sin, @cos, @tan};
for i = 1:length(funcs)
    disp(funcs{i}(pi/4));
end
```

**Besonderheiten:**
- Function Handles (`@`) machen Funktionen zu First-Class Values
- Können gespeichert, übergeben und in Datenstrukturen verwendet werden

**Weiterführende Links:**
- [MATLAB Documentation - Function Handles](https://www.mathworks.com/help/matlab/matlab_prog/creating-a-function-handle.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% First-Class Functions und Prädikate
:- module first_class.
:- interface.
:- import_module io.
:- pred main(io::di, io::uo) is det.
:- implementation.
:- import_module int, list, string.

:- func double(int) = int.
double(X) = X * 2.

:- func triple(int) = int.
triple(X) = X * 3.

:- pred main(io::di, io::uo) is det.
main(!IO) :-
    % Funktion in Variable speichern
    Func = double,
    Result = apply(Func, 5),      % 10
    io.format("double(5) = %d\n", [i(Result)], !IO),

    % Funktionen in einer Liste speichern
    Funcs = [double, triple],
    Results = list.map(
        (func(F) = apply(F, 4)),
        Funcs
    ),

    % Funktion als Parameter übergeben
    Mapped = list.map(double, [1, 2, 3]).  % [2, 4, 6]
```

**Besonderheiten:**
- Mercury behandelt Prädikate und Funktionen als First-Class-Werte.
- Funktionen und Prädikate können in Variablen gespeichert, als Argumente übergeben und in Datenstrukturen verwendet werden.
- `apply/N` wird zum Aufrufen von Funktionswerten verwendet.
- Das Typsystem gewährleistet Typsicherheit bei Higher-Order Operationen.

**Weiterführende Links:**
- [Mercury Language Reference - Higher-Order](https://www.mercurylang.org/information/doc-release/mercury_ref/Higher-order.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// First-Class Functions: Anonymous Methods (seit Delphi 2009)
type
  TIntFunc = reference to function(x: Integer): Integer;

function Apply(func: TIntFunc; value: Integer): Integer;
begin
  Result := func(value);
end;

var
  double: TIntFunc;
  result: Integer;
begin
  double := function(x: Integer): Integer
  begin
    Result := x * 2;
  end;

  result := Apply(double, 5);  // 10
end;
```

**Besonderheiten:**
- `reference to function/procedure` für Funktionsreferenzen (seit Delphi 2009)
- Funktionen können als Parameter übergeben und in Variablen gespeichert werden
- Unterstützt Variable Capture (Closures)

**Weiterführende Links:**
- [Delphi Documentation - Anonymous Methods](https://docwiki.embarcadero.com/RADStudio/en/Anonymous_Methods_in_Delphi)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Blocks als First-Class Objekte
NSString* (^transform)(NSString*) = ^NSString* (NSString *input) {
    return [input uppercaseString];
};

// Block in Variable speichern
NSString *result = transform(@"hallo"); // "HALLO"

// Block als Rückgabewert
- (NSString* (^)(NSString*))createFormatter {
    return ^NSString* (NSString *input) {
        return [input capitalizedString];
    };
}
```

**Besonderheiten:**
- Blocks sind First-Class Objekte (können zugewiesen, übergeben, zurückgegeben werden)
- C-Function-Pointers als alternative für C-Funktionen
- Blocks werden auf dem Heap gespeichert (nach Kopie)

**Weiterführende Links:**
- [Apple Documentation - Blocks](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/WorkingwithBlocks/WorkingwithBlocks.html)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
% First-Class Functions via Function Handles
func = @sin;
result = func(pi/2);  % 1

% Funktionen in Datenstrukturen speichern
operations = {@plus, @minus, @times};
result = operations{1}(3, 4);  % 7
```

**Besonderheiten:**
- Function Handles machen Funktionen zu First-Class-Werten
- Können in Variablen gespeichert, übergeben und zurückgegeben werden
- `@funcname` erzeugt einen Handle auf eine benannte Funktion

**Weiterführende Links:**
- [GNU Octave Documentation - Function Handles](https://octave.org/doc/v8.1.0/Function-Handles.html)

</TabItem>
<TabItem value="v" label="V">

```v
// First-Class Functions
fn add(a int, b int) int {
    return a + b
}

// Funktion als Wert zuweisen
operation := add
result := operation(3, 4)
println(result)  // 7

// Funktion in Array speichern
operations := [fn (a int, b int) int { return a + b },
               fn (a int, b int) int { return a - b }]
```

**Besonderheiten:**
- Funktionen können Variablen zugewiesen werden
- Funktionen können in Datenstrukturen gespeichert werden
- Funktionen können als Parameter übergeben und zurückgegeben werden

**Weiterführende Links:**
- [V Documentation - Functions](https://github.com/vlang/v/blob/master/doc/docs.md#functions)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// First-Class Functions: Funktionszeiger als Werte
fn double(x: i32) i32 {
    return x * 2;
}

fn triple(x: i32) i32 {
    return x * 3;
}

// Funktion in Variable speichern
const func: *const fn (i32) i32 = &double;
const result = func(5);  // 10

// Funktionszeiger umzuweisen
var current_func: *const fn (i32) i32 = &double;
current_func = &triple;
const result2 = current_func(5);  // 15
```

**Besonderheiten:**
- Funktionen können in Variablen gespeichert werden
- Funktionszeiger können übergeben und zurückgegeben werden
- Keine Closures (kein Capture von lokalen Variablen)
- Funktionstyp wird explizit annotiert

**Weiterführende Links:**
- [Zig Documentation - Functions](https://ziglang.org/documentation/master/#Functions)

</TabItem>
</Tabs>


## 7.2.2. Closures

Funktionen, die auf Variablen aus ihrem umgebenden Scope zugreifen können, auch nachdem der Scope geschlossen wurde. Sie "schließen" die Umgebung ein, in der sie definiert wurden.

### Sprachen {#sprachen}

<Tabs availableTabs={['carbon', 'clojure', 'common-lisp', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'elixir', 'elm', 'erlang', 'fsharp', 'gleam', 'go', 'groovy', 'haskell', 'haxe', 'idris', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'lua', 'matlab', 'mercury', 'nim', 'objective-c', 'object-pascal', 'ocaml', 'perl', 'php', 'purescript', 'python', 'r', 'racket', 'roc', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'v', 'vbnet', 'wolfram-language']} yellowTabs={['octave', 'prolog']}>
<TabItem value="carbon" label="Carbon">

```cpp
fn CreateCounter() -> fn() -> i32 {
    var count: i32 = 0;
    return fn() -> i32 {
        count = count + 1;
        return count;
    };
}

var counter = CreateCounter();
var result1 = counter();
var result2 = counter();
```

**Besonderheiten:**
- Experimentelle Sprache, Syntax kann sich noch ändern
- Unterstützt Closures

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
(defn create-counter []
  (let [count (atom 0)]
    (fn []
      (swap! count inc))))

(def counter (create-counter))
(def result1 (counter))
(def result2 (counter))
```

**Besonderheiten:**
- Unterstützt Closures nativ
- Verwendet `atom` für veränderliche Zustände

**Weiterführende Links:**
- [Clojure Documentation - Closures](https://clojure.org/reference/reader#_dispatch)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
(defun create-counter ()
  (let ((count 0))
    (lambda ()
      (incf count))))

(defvar counter (create-counter))
(defvar result1 (funcall counter))
(defvar result2 (funcall counter))
```

**Besonderheiten:**
- Unterstützt Closures nativ
- Funktionen sind First-Class-Objekte

**Weiterführende Links:**
- [Common Lisp HyperSpec - Lambda](http://www.lispworks.com/documentation/HyperSpec/Body/m_lambda.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
def create_counter
  count = 0
  -> { count += 1 }
end

counter = create_counter
result1 = counter.call
result2 = counter.call
```

**Besonderheiten:**
- Unterstützt Closures über Procs
- Ruby-ähnliche Syntax

**Weiterführende Links:**
- [Crystal Documentation - Closures](https://crystal-lang.org/reference/1.11/syntax_and_semantics/blocks_and_procs.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
Func<int> CreateCounter()
{
    int count = 0;
    return () => ++count;
}

var counter = CreateCounter();
int result1 = counter();
int result2 = counter();
```

**Besonderheiten:**
- Unterstützt Closures über Lambda-Ausdrücke (seit C# 3.0)
- Vollständige Closure-Unterstützung

**Weiterführende Links:**
- [Microsoft C# Documentation - Lambda Expressions](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/lambda-expressions)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
#include <functional>

std::function<int()> createCounter() {
    int count = 0;
    return [count]() mutable {
        return ++count;
    };
}

auto counter = createCounter();
int result1 = counter();
int result2 = counter();
```

**Besonderheiten:**
- Unterstützt Closures über Lambda-Ausdrücke (seit C++11)
- Verwendet Capture-Listen für Variablen

**Weiterführende Links:**
- [cppreference.com - Lambda expressions](https://en.cppreference.com/w/cpp/language/lambda)

</TabItem>
<TabItem value="d" label="D">

```d
int delegate() createCounter() {
    int count = 0;
    return delegate() {
        return ++count;
    };
}

auto counter = createCounter();
int result1 = counter();
int result2 = counter();
```

**Besonderheiten:**
- Unterstützt Closures über Delegates
- Vollständige Closure-Unterstützung

**Weiterführende Links:**
- [D Language Specification - Delegates](https://dlang.org/spec/function.html#closures)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
int Function() createCounter() {
    int count = 0;
    return () {
        return ++count;
    };
}

var counter = createCounter();
int result1 = counter();
int result2 = counter();
```

**Besonderheiten:**
- Unterstützt Closures nativ
- Vollständige Closure-Unterstützung

**Weiterführende Links:**
- [Dart Documentation - Closures](https://dart.dev/guides/language/language-tour#functions)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
defmodule ClosureExample do
  def create_adder(n) do
    fn x -> n + x end
  end

  def create_multiplier(factor) do
    fn x -> x * factor end
  end
end

adder = ClosureExample.create_adder(5)
result1 = adder.(3) # 8
result2 = adder.(10) # 15

multiplier = ClosureExample.create_multiplier(3)
result3 = multiplier.(4) # 12
```

**Besonderheiten:**
- Closures erfassen Variablen aus dem umgebenden Scope
- Alle erfassten Werte sind immutable
- Für zustandsbehaftete Closures wird `Agent` oder `GenServer` benötigt
- Funktionen sind First-Class-Objects

**Weiterführende Links:**
- [Elixir Documentation - Anonymous Functions](https://hexdocs.pm/elixir/anonymous-functions.html)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
createCounter : () -> Int
createCounter = 
    let
        count = 0
    in
        \() -> count + 1
```

**Besonderheiten:**
- Elm unterstützt Closures, aber ist rein funktional (keine Mutation)
- Funktionale Sprache mit expliziten Typannotationen

**Weiterführende Links:**
- [Elm Documentation - Functions](https://guide.elm-lang.org/core_language.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
create_counter() ->
    Count = 0,
    fun() ->
        Count + 1
    end.

Counter = create_counter(),
Result1 = Counter(),
Result2 = Counter().
```

**Besonderheiten:**
- Unterstützt Closures nativ
- Erlang ist funktional (keine Mutation)

**Weiterführende Links:**
- [Erlang Documentation - Fun Expressions](https://www.erlang.org/doc/reference_manual/expressions.html#fun-expressions)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
let createCounter () =
    let count = ref 0
    fun () ->
        count := !count + 1
        !count

let counter = createCounter()
let result1 = counter()
let result2 = counter()
```

**Besonderheiten:**
- Unterstützt Closures nativ
- Verwendet `ref` für veränderliche Zustände

**Weiterführende Links:**
- [F# Documentation - Closures](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/functions/)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// Closures: Funktionen erfassen ihre Umgebung
pub fn create_adder(x: Int) -> fn(Int) -> Int {
  fn(y) { x + y }
}

let add_five = create_adder(5)
let result = add_five(3)  // 8
```

**Besonderheiten:**
- Gleam unterstützt Closures, die ihre Umgebung erfassen
- Alle erfassten Variablen sind immutable
- Closures können keine veränderlichen Zustände erfassen (kein Counter-Pattern wie in imperativen Sprachen)

**Weiterführende Links:**
- [Gleam Documentation - Anonymous Functions](https://tour.gleam.run/functions/anonymous-functions/)

</TabItem>
<TabItem value="go" label="Go">

```go
func createCounter() func() int {
    count := 0
    return func() int {
        count++
        return count
    }
}

counter := createCounter()
result1 := counter()
result2 := counter()
```

**Besonderheiten:**
- Unterstützt Closures nativ
- Vollständige Closure-Unterstützung

**Weiterführende Links:**
- [Go Documentation - Function literals](https://go.dev/ref/spec#Function_literals)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
def createCounter() {
    def count = 0
    return { ++count }
}

def counter = createCounter()
def result1 = counter()
def result2 = counter()
```

**Besonderheiten:**
- Unterstützt Closures nativ
- Vollständige Closure-Unterstützung

**Weiterführende Links:**
- [Groovy Documentation - Closures](https://groovy-lang.org/closures.html)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
createCounter :: () -> Int
createCounter = 
    let count = 0
    in \() -> count + 1
```

**Besonderheiten:**
- Haskell unterstützt Closures, aber ist rein funktional (keine Mutation)
- Funktionale Sprache mit expliziten Typannotationen

**Weiterführende Links:**
- [Haskell Documentation - Functions](https://www.haskell.org/tutorial/functions.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
function createCounter(): Void -> Int {
    var count = 0;
    return function(): Int {
        return ++count;
    };
}

var counter = createCounter();
var result1 = counter();
var result2 = counter();
```

**Besonderheiten:**
- Unterstützt Closures nativ
- Cross-Platform-Kompilierung

**Weiterführende Links:**
- [Haxe Documentation - Functions](https://haxe.org/manual/types-function.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Closures: Funktionen erfassen ihren lexikalischen Scope
makeGreeter : String -> String -> String
makeGreeter greeting = \name => greeting ++ ", " ++ name ++ "!"

hello : String -> String
hello = makeGreeter "Hallo"

result : String
result = hello "Welt"  -- "Hallo, Welt!"
```

**Besonderheiten:**
- Idris unterstützt Closures, aber ist rein funktional (keine Mutation)
- Erfasste Variablen sind immer immutable
- Closures entstehen natürlich durch Currying und Partial Application

**Weiterführende Links:**
- [Idris 2 Documentation - Functions](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html)

</TabItem>
<TabItem value="java" label="Java">

```java
import java.util.function.Supplier;
import java.util.concurrent.atomic.AtomicInteger;

static Supplier<Integer> createCounter() {
    AtomicInteger count = new AtomicInteger(0);
    return () -> count.incrementAndGet();
}

Supplier<Integer> counter = createCounter();
int result1 = counter.get();
int result2 = counter.get();
```

**Besonderheiten:**
- Unterstützt Closures über Lambda-Ausdrücke (seit Java 8.0)
- Variablen müssen effektiv final sein (effectively final)

**Weiterführende Links:**
- [Oracle Java Documentation - Lambda Expressions](https://docs.oracle.com/javase/tutorial/java/javaOO/lambdaexpressions.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
function createCounter() {
    let count = 0;
    return function() {
        return ++count;
    };
}

const counter = createCounter();
const result1 = counter();
const result2 = counter();
```

**Besonderheiten:**
- Unterstützt Closures nativ
- Vollständige Closure-Unterstützung

**Weiterführende Links:**
- [MDN Web Docs - Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
function create_counter()
    count = 0
    return function()
        global count
        count += 1
        return count
    end
end

counter = create_counter()
result1 = counter()
result2 = counter()
```

**Besonderheiten:**
- Unterstützt Closures nativ
- Vollständige Closure-Unterstützung

**Weiterführende Links:**
- [Julia Documentation - Closures](https://docs.julialang.org/en/v1/manual/functions/#man-closures)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Closures
fun make-adder(x: int): (int) -> int
  fn(y) { x + y }  // Closure: erfasst x aus dem äußeren Scope

val add5 = make-adder(5)
val result = add5(3) // 8

// Closure mit veränderlichem Zustand
fun counter(): (() -> int)
  var count := 0
  fn()
    count := count + 1
    count
```

**Besonderheiten:**
- Closures erfassen automatisch freie Variablen aus dem umschließenden Scope
- Sowohl `val` als auch `var` Variablen können erfasst werden
- Effekte der erfassten Variablen werden im Funktionstyp reflektiert
- Closures sind der primäre Mechanismus für zustandsbasierte Abstraktionen

**Weiterführende Links:**
- [Koka Language Guide - Anonymous Functions](https://koka-lang.github.io/koka/doc/book.html#sec-anonymous-functions)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
fun createCounter(): () -> Int {
    var count = 0
    return { ++count }
}

val counter = createCounter()
val result1 = counter()
val result2 = counter()
```

**Besonderheiten:**
- Unterstützt Closures nativ
- Vollständige Closure-Unterstützung

**Weiterführende Links:**
- [Kotlin Documentation - Closures](https://kotlinlang.org/docs/lambdas.html#closures)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Closures
def createAdder (x : Int) : Int → Int :=
  fun y => x + y

def add5 : Int → Int := createAdder 5
def result1 : Int := add5 3  -- 8
def result2 : Int := add5 10 -- 15
```

**Besonderheiten:**
- Closures werden durch Lambda-Ausdrücke (`fun`) realisiert, die Variablen aus dem umgebenden Scope erfassen
- Da Lean 4 standardmäßig immutable ist, erfassen Closures Werte, nicht veränderbare Referenzen
- Closures sind ein natürliches Konzept in Lean 4 als funktionaler Sprache

**Weiterführende Links:**
- [Lean 4 Documentation - Anonymous Functions](https://lean-lang.org/lean4/doc/functions.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
function create_counter()
    local count = 0
    return function()
        count = count + 1
        return count
    end
end

local counter = create_counter()
local result1 = counter()
local result2 = counter()
```

**Besonderheiten:**
- Unterstützt Closures nativ
- Vollständige Closure-Unterstützung

**Weiterführende Links:**
- [Lua Documentation - Closures](https://www.lua.org/manual/5.4/manual.html#3.4.11)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
proc createCounter(): proc(): int =
    var count = 0
    return proc(): int =
        inc count
        count

let counter = createCounter()
let result1 = counter()
let result2 = counter()
```

**Besonderheiten:**
- Unterstützt Closures nativ
- Vollständige Closure-Unterstützung

**Weiterführende Links:**
- [Nim Documentation - Closures](https://nim-lang.org/docs/manual.html#procedures)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
let create_counter () =
    let count = ref 0 in
    fun () ->
        count := !count + 1;
        !count

let counter = create_counter ()
let result1 = counter ()
let result2 = counter ()
```

**Besonderheiten:**
- Unterstützt Closures nativ
- Verwendet `ref` für veränderliche Zustände

**Weiterführende Links:**
- [OCaml Documentation - Closures](https://ocaml.org/docs/first-hour#functions)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
sub create_counter {
    my $count = 0;
    return sub {
        return ++$count;
    };
}

my $counter = create_counter();
my $result1 = $counter->();
my $result2 = $counter->();
```

**Besonderheiten:**
- Unterstützt Closures nativ
- Vollständige Closure-Unterstützung

**Weiterführende Links:**
- [Perl Documentation - Closures](https://perldoc.perl.org/perlsub#Closures)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
function createCounter() {
    $count = 0;
    return function() use (&$count) {
        return ++$count;
    };
}

$counter = createCounter();
$result1 = $counter();
$result2 = $counter();
```

**Besonderheiten:**
- Unterstützt Closures über `use`-Klausel (seit PHP 5.3)
- `&$count` für Referenz-Übergabe

**Weiterführende Links:**
- [PHP Documentation - Closures](https://www.php.net/manual/en/functions.anonymous.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Lambda-Ausdrücke mit Variablen-Capture über >>
:- use_module(library(apply)).

create_counter(Counter) :-
    Counter = [In, Out]>>(Out is In + 1).

?- create_counter(Counter), call(Counter, 5, Result).
%  Result = 6

% Capture einer äußeren Variable
multiply_by(Factor, Lambda) :-
    Lambda = [X, Result]>>(Result is X * Factor).

?- multiply_by(3, Func), call(Func, 5, Result).
%  Result = 15
```

**Besonderheiten:**
- Prolog unterstützt Closures eingeschränkt über Lambda-Ausdrücke mit der `>>`-Notation
- Freie Variablen aus dem umgebenden Kontext werden durch Unifikation gebunden
- Es gibt keinen veränderlichen Zustand — Prolog-Variablen sind logische Variablen
- `library(apply)` stellt `maplist`, `foldl` etc. für die Verwendung mit Lambdas bereit

**Weiterführende Links:**
- [SWI-Prolog Documentation - library(apply)](https://www.swi-prolog.org/pldoc/man?section=apply)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
createCounter :: () -> Int
createCounter = 
    let count = 0
    in \() -> count + 1
```

**Besonderheiten:**
- PureScript unterstützt Closures, aber ist rein funktional (keine Mutation)
- Funktionale Sprache mit expliziten Typannotationen

**Weiterführende Links:**
- [PureScript Documentation - Functions](https://book.purescript.org/chapter3.html)

</TabItem>
<TabItem value="python" label="Python">

```python
def create_counter():
    count = 0
    def counter():
        nonlocal count
        count += 1
        return count
    return counter

counter = create_counter()
result1 = counter()
result2 = counter()
```

**Besonderheiten:**
- Unterstützt Closures nativ
- Verwendet `nonlocal` für veränderliche Variablen

**Weiterführende Links:**
- [Python Documentation - Closures](https://docs.python.org/3/tutorial/classes.html#python-scopes-and-namespaces)

</TabItem>
<TabItem value="r" label="R">

```r
create_counter <- function() {
    count <- 0
    function() {
        count <<- count + 1
        count
    }
}

counter <- create_counter()
result1 <- counter()
result2 <- counter()
```

**Besonderheiten:**
- Unterstützt Closures nativ
- Verwendet `<<-` für Zuweisung im äußeren Scope

**Weiterführende Links:**
- [R Documentation - Closures](https://cran.r-project.org/doc/manuals/r-release/R-lang.html#Closures)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
(define (create-counter)
    (let ((count 0))
        (lambda ()
            (set! count (+ count 1))
            count)))

(define counter (create-counter))
(define result1 (counter))
(define result2 (counter))
```

**Besonderheiten:**
- Unterstützt Closures nativ
- Verwendet `set!` für Mutation

**Weiterführende Links:**
- [Racket Documentation - Closures](https://docs.racket-lang.org/guide/define.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Closures: Lambda erfasst äußere Variablen
makeGreeter : Str -> (Str -> Str)
makeGreeter = \greeting ->
    \name -> "$(greeting), $(name)!"

greetHello = makeGreeter "Hallo"
result = greetHello "Welt"
```

**Besonderheiten:**
- Roc unterstützt Closures (Lambda erfasst äußere Variablen)
- Rein funktional - keine Mutation in Closures
- Lexikalisches Scoping

**Weiterführende Links:**
- [Roc Documentation - Functions](https://www.roc-lang.org/tutorial#defining-functions)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
def create_counter
    count = 0
    proc { count += 1 }
end

counter = create_counter
result1 = counter.call
result2 = counter.call
```

**Besonderheiten:**
- Unterstützt Closures nativ
- Vollständige Closure-Unterstützung

**Weiterführende Links:**
- [Ruby Documentation - Closures](https://docs.ruby-lang.org/en/master/syntax/methods_rdoc.html#label-Closures)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
fn create_counter() -> impl FnMut() -> i32 {
    let mut count = 0;
    move || {
        count += 1;
        count
    }
}

let mut counter = create_counter();
let result1 = counter();
let result2 = counter();
```

**Besonderheiten:**
- Unterstützt Closures über `move`-Closures
- Verwendet `FnMut` für veränderliche Closures

**Weiterführende Links:**
- [Rust Book - Closures](https://doc.rust-lang.org/book/ch13-01-closures.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
def createCounter(): () => Int = {
    var count = 0
    () => {
        count += 1
        count
    }
}

val counter = createCounter()
val result1 = counter()
val result2 = counter()
```

**Besonderheiten:**
- Unterstützt Closures nativ
- Vollständige Closure-Unterstützung

**Weiterführende Links:**
- [Scala Documentation - Closures](https://docs.scala-lang.org/tour/higher-order-functions.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
(define (create-counter)
    (let ((count 0))
        (lambda ()
            (set! count (+ count 1))
            count)))

(define counter (create-counter))
(define result1 (counter))
(define result2 (counter))
```

**Besonderheiten:**
- Unterstützt Closures nativ
- Verwendet `set!` für Mutation

**Weiterführende Links:**
- [Scheme Documentation - Closures](https://www.scheme.com/tspl4/start.html#./start:h0)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
func createCounter() -> () -> Int {
    var count = 0
    return {
        count += 1
        return count
    }
}

let counter = createCounter()
let result1 = counter()
let result2 = counter()
```

**Besonderheiten:**
- Unterstützt Closures nativ
- Vollständige Closure-Unterstützung

**Weiterführende Links:**
- [Swift Documentation - Closures](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/closures/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
function createCounter(): () => number {
    let count = 0;
    return function(): number {
        return ++count;
    };
}

const counter = createCounter();
const result1 = counter();
const result2 = counter();
```

**Besonderheiten:**
- Unterstützt Closures nativ
- Vollständige Closure-Unterstützung

**Weiterführende Links:**
- [TypeScript Handbook - Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
Function CreateCounter() As Func(Of Integer)
    Dim count As Integer = 0
    Return Function() As Integer
        count += 1
        Return count
    End Function
End Function

Dim counter = CreateCounter()
Dim result1 = counter()
Dim result2 = counter()
```

**Besonderheiten:**
- Unterstützt Closures über Lambda-Ausdrücke (seit VB.NET 9.0)
- Vollständige Closure-Unterstützung

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Lambda Expressions](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/procedures/lambda-expressions)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% Closures: Anonyme Funktionen erfassen Variablen
function f = make_adder(n)
    f = @(x) x + n;  % n wird aus dem Scope erfasst
end

add5 = make_adder(5);
add5(3)  % 8
add5(10) % 15
```

**Besonderheiten:**
- Anonyme Funktionen erfassen Variablen aus dem umgebenden Scope
- Der erfasste Wert ist eine Kopie zum Zeitpunkt der Erstellung
- Verschachtelte Funktionen haben ebenfalls Zugriff auf den umgebenden Scope

**Weiterführende Links:**
- [MATLAB Documentation - Anonymous Functions](https://www.mathworks.com/help/matlab/matlab_prog/anonymous-functions.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Closures: Lambda-Ausdrücke erfassen Variablen aus dem Scope
:- module closures.
:- interface.
:- import_module io.
:- pred main(io::di, io::uo) is det.
:- implementation.
:- import_module int, list, string.

:- func make_adder(int) = (func(int) = int).
make_adder(N) = (func(X) = X + N).

:- pred main(io::di, io::uo) is det.
main(!IO) :-
    % Closure: N wird aus dem Scope erfasst
    AddFive = make_adder(5),
    Result1 = apply(AddFive, 3),   % 8
    Result2 = apply(AddFive, 10),  % 15
    io.format("add5(3) = %d\n", [i(Result1)], !IO),
    io.format("add5(10) = %d\n", [i(Result2)], !IO),

    % Inline-Closure mit Lambda-Syntax
    Multiplier = 3,
    Tripled = list.map(
        (func(X) = X * Multiplier),
        [1, 2, 3, 4]
    ).  % [3, 6, 9, 12]
```

**Besonderheiten:**
- Mercury unterstützt Closures über Lambda-Ausdrücke (`func(...) = ...` und `pred(...) is ... :- ...`).
- Variablen aus dem umgebenden Scope werden als unveränderliche Werte erfasst.
- Da Mercury eine rein logische Sprache ist, sind alle erfassten Werte unveränderlich (immutable).
- Closures werden häufig mit Higher-Order Funktionen wie `list.map`, `list.filter` kombiniert.

**Weiterführende Links:**
- [Mercury Language Reference - Higher-Order](https://www.mercurylang.org/information/doc-release/mercury_ref/Higher-order.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Closures: Anonymous Methods mit Variable Capture (seit Delphi 2009)
type
  TIntFunc = reference to function: Integer;

function MakeCounter: TIntFunc;
var
  count: Integer;
begin
  count := 0;
  Result := function: Integer
  begin
    count := count + 1;
    Result := count;
  end;
end;

var
  counter: TIntFunc;
begin
  counter := MakeCounter;
  WriteLn(counter());  // 1
  WriteLn(counter());  // 2
  WriteLn(counter());  // 3
end;
```

**Besonderheiten:**
- Anonymous Methods können lokale Variablen der umgebenden Funktion erfassen
- Erfasste Variablen leben so lange wie die Closure
- Seit Delphi 2009 verfügbar

**Weiterführende Links:**
- [Delphi Documentation - Anonymous Methods](https://docwiki.embarcadero.com/RADStudio/en/Anonymous_Methods_in_Delphi)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Closure: Block mit Variable Capture
int multiplier = 3;
int (^multiply)(int) = ^int(int value) {
    return value * multiplier; // Erfasst multiplier aus dem Scope
};

int result = multiply(5); // 15

// __block für mutable Captures
__block int counter = 0;
void (^increment)(void) = ^{
    counter++; // Modifiziert erfasste Variable
};
increment();
// counter ist jetzt 1
```

**Besonderheiten:**
- Blocks sind Closures mit automatischem Variable Capture
- Erfasste Variablen werden standardmäßig als Kopie erfasst (const)
- `__block` Qualifier ermöglicht Modifikation erfasster Variablen
- Blocks seit Objective-C 2.0 (Mac OS X 10.6 / iOS 4.0)

**Weiterführende Links:**
- [Apple Documentation - Blocks](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/WorkingwithBlocks/WorkingwithBlocks.html)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
% Closures: Anonyme Funktionen erfassen umgebende Variablen
function f = make_adder(n)
    f = @(x) x + n;
end

add5 = make_adder(5);
result = add5(3);  % 8
```

**Besonderheiten:**
- Anonyme Funktionen erfassen Variablen zum Zeitpunkt der Erstellung (by value)
- Änderungen an der erfassten Variable nach Erstellung haben keinen Effekt

**Weiterführende Links:**
- [GNU Octave Documentation - Anonymous Functions](https://octave.org/doc/v8.1.0/Anonymous-Functions.html)

</TabItem>
<TabItem value="v" label="V">

```v
// Closures mit explizitem Capture
mut counter := 0

increment := fn [mut counter] () int {
    counter++
    return counter
}

println(increment())  // 1
println(increment())  // 2
```

**Besonderheiten:**
- Closures müssen äußere Variablen explizit mit `[var]` capturen
- `[mut var]` für mutable Capture
- Explizites Capture verhindert versehentliche Seiteneffekte

**Weiterführende Links:**
- [V Documentation - Closures](https://github.com/vlang/v/blob/master/doc/docs.md#closures)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Closures mit Module *)
makeCounter[] := Module[{count = 0},
    Function[count++; count]
]

counter = makeCounter[];
counter[]  (* 1 *)
counter[]  (* 2 *)
counter[]  (* 3 *)
```

**Besonderheiten:**
- `Module[]` erstellt lexikalisch gebundene Variablen
- Closure erfasst die lokale Variable

**Weiterführende Links:**
- [Wolfram Language Documentation - Module](https://reference.wolfram.com/language/ref/Module.html)

</TabItem>
</Tabs>


## 7.2.3. Method References / Function Pointers

Referenzen auf Funktionen oder Methoden, die gespeichert, übergeben und später aufgerufen werden können, ohne sie sofort auszuführen. Ermöglicht es, Funktionen als Werte zu behandeln und sie dynamisch zu verwenden.

### Sprachen {#sprachen}

<Tabs availableTabs={['ada', 'c', 'carbon', 'clojure', 'common-lisp', 'crystal', 'csharp', 'cpp', 'd', 'dart', 'eiffel', 'elixir', 'elm', 'erlang', 'fsharp', 'fortran', 'gleam', 'go', 'groovy', 'haskell', 'haxe', 'idris', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'lua', 'matlab', 'mercury', 'mojo', 'nim', 'objective-c', 'object-pascal', 'ocaml', 'octave', 'odin', 'perl', 'php', 'purescript', 'python', 'r', 'racket', 'roc', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'vbnet', 'v', 'wolfram-language', 'zig']} yellowTabs={['prolog']}>
<TabItem value="ada" label="Ada">

```ada
function Double(X : Integer) return Integer is
begin
    return X * 2;
end Double;

type Func_Access is access function(X : Integer) return Integer;
Func_Ptr : Func_Access := Double'Access;
Result : Integer := Func_Ptr(5);
```

**Besonderheiten:**
- Verwendet `'Access` für Funktionszugriffe
- Funktionszeiger müssen typisiert sein

**Weiterführende Links:**
- [Ada Documentation - Access Types](https://learn.adacore.com/courses/intro-to-ada/chapters/access_types.html)

</TabItem>
<TabItem value="c" label="C">

```c
int double_value(int x) {
    return x * 2;
}

int (*func_ptr)(int) = double_value;
int result = func_ptr(5);
```

**Besonderheiten:**
- Unterstützt Funktionszeiger nativ
- Syntax: `return_type (*pointer_name)(parameters)`

**Weiterführende Links:**
- [C Documentation - Function Pointers](https://en.cppreference.com/w/c/language/pointer#Function_pointers)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
fn Double(x: i32) -> i32 {
    return x * 2;
}

var func: fn(i32) -> i32 = Double;
var result = func(5);
```

**Besonderheiten:**
- Experimentelle Sprache, Syntax kann sich noch ändern
- Unterstützt Funktionsreferenzen

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
(defn double-value [x]
  (* x 2))

(def func double-value)
(def result (func 5))
```

**Besonderheiten:**
- Funktionen sind First-Class-Objekte
- Funktionsreferenzen können direkt zugewiesen werden

**Weiterführende Links:**
- [Clojure Documentation - Functions](https://clojure.org/reference/functions)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
(defun double-value (x)
  (* x 2))

(defvar func #'double-value)
(defvar result (funcall func 5))
```

**Besonderheiten:**
- Verwendet `#'` für Funktionsreferenzen
- `funcall` wird benötigt, um Funktionsreferenzen aufzurufen

**Weiterführende Links:**
- [Common Lisp HyperSpec - Functions](http://www.lispworks.com/documentation/HyperSpec/Body/f_fun.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
def double_value(x : Int32) : Int32
  x * 2
end

func = ->double_value(Int32)
result = func.call(5)
```

**Besonderheiten:**
- Verwendet `->` für Funktionsreferenzen
- Typannotationen erforderlich

**Weiterführende Links:**
- [Crystal Documentation - Proc](https://crystal-lang.org/reference/1.11/syntax_and_semantics/literals/proc.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
int DoubleValue(int x) {
    return x * 2;
}

Func<int, int> func = DoubleValue;
int result = func(5);

// Method Group
Action<int> action = Console.WriteLine;
```

**Besonderheiten:**
- Verwendet `Func<T, TResult>` und `Action<T>` Delegates
- Method Groups können direkt zugewiesen werden (seit C# 2.0)

**Weiterführende Links:**
- [Microsoft C# Documentation - Delegates](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/delegates/)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
int doubleValue(int x) {
    return x * 2;
}

int (*funcPtr)(int) = doubleValue;
int result = funcPtr(5);

// Oder mit std::function (seit C++11)
#include <functional>
std::function<int(int)> func = doubleValue;
```

**Besonderheiten:**
- Unterstützt sowohl C-Style Funktionszeiger als auch `std::function` (seit C++11)
- `std::function` ist flexibler und kann auch Funktionsobjekte speichern

**Weiterführende Links:**
- [cppreference.com - Function pointers](https://en.cppreference.com/w/cpp/language/pointer#Function_pointers)
- [cppreference.com - std::function](https://en.cppreference.com/w/cpp/utility/functional/function)

</TabItem>
<TabItem value="d" label="D">

```d
int doubleValue(int x) {
    return x * 2;
}

int function(int) func = &doubleValue;
int result = func(5);
```

**Besonderheiten:**
- Verwendet `&` für Funktionsreferenzen
- Unterstützt sowohl Funktionszeiger als auch Delegates

**Weiterführende Links:**
- [D Language Specification - Function Pointers](https://dlang.org/spec/function.html#function_pointers)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
int doubleValue(int x) {
    return x * 2;
}

Function func = doubleValue;
int result = func(5);
```

**Besonderheiten:**
- Funktionen sind First-Class-Objekte
- Funktionsreferenzen können direkt zugewiesen werden

**Weiterführende Links:**
- [Dart Language Tour - Functions](https://dart.dev/guides/language/language-tour#functions)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
double_value (x: INTEGER): INTEGER
    do
        Result := x * 2
    end

func: FUNCTION [INTEGER, INTEGER]
    do
        Result := agent double_value(?)
    end

result: INTEGER
    do
        Result := func.item ([5])
    end
```

**Besonderheiten:**
- Verwendet Agents für Funktionsreferenzen
- `agent`-Syntax für Funktionsreferenzen

**Weiterführende Links:**
- [Eiffel Documentation - Agents](https://www.eiffel.org/doc/eiffel/Agents)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
def double_value(x) do
    x * 2
end

func = &double_value/1
result = func.(5)
```

**Besonderheiten:**
- Verwendet `&` für Funktionsreferenzen
- Arity muss angegeben werden (`/1`)
- Aufruf mit `.()` statt `()`

**Weiterführende Links:**
- [Elixir Documentation - Function Capturing](https://hexdocs.pm/elixir/Kernel.html#&/1)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
doubleValue : Int -> Int
doubleValue x =
    x * 2

func : Int -> Int
func = doubleValue

result = func 5
```

**Besonderheiten:**
- Funktionen sind First-Class-Objekte
- Funktionsreferenzen können direkt zugewiesen werden

**Weiterführende Links:**
- [Elm Documentation - Functions](https://guide.elm-lang.org/core_language.html)

</TabItem>
<TabItem value="erlang" label="Erlang">
```erlang
double_value(X) ->
    X * 2.

% Lokale Funktionsreferenz
Func = fun double_value/1,
Result = Func(5).

% Vollqualifizierte Referenz (anderes Modul)
Func2 = fun lists:reverse/1,
Result2 = Func2([1, 2, 3]).
```

**Besonderheiten:**
- `fun Function/Arity` für lokale Funktionsreferenzen
- `fun Module:Function/Arity` für vollqualifizierte Funktionsreferenzen
- Arity muss immer angegeben werden

**Weiterführende Links:**
- [Erlang Documentation - Fun Expressions](https://www.erlang.org/doc/reference_manual/expressions.html#fun-expressions)
</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
let doubleValue (x: int) : int =
    x * 2

let func = doubleValue
let result = func 5
```

**Besonderheiten:**
- Funktionen sind First-Class-Objekte
- Funktionsreferenzen können direkt zugewiesen werden

**Weiterführende Links:**
- [F# Documentation - Functions](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/functions/)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
function double_value(x) result(res)
    integer, intent(in) :: x
    integer :: res
    res = x * 2
end function double_value

procedure(double_value), pointer :: func
func => double_value
result = func(5)
```

**Besonderheiten:**
- Verwendet Procedure Pointers (seit Fortran 2003)
- `procedure`-Interface für Typisierung

**Weiterführende Links:**
- [Fortran Wiki - Procedure Pointers](https://fortranwiki.org/fortran/show/Procedure+pointers)

</TabItem>
<TabItem value="gleam" label="Gleam">

```erlang
fn double_value(x: Int) -> Int {
  x * 2
}

let func = double_value
let result = func(5)
```

**Besonderheiten:**
- Funktionen sind First-Class-Objekte
- Funktionsreferenzen können direkt zugewiesen werden

**Weiterführende Links:**
- [Gleam Documentation - Functions](https://gleam.run/documentation/tour/functions/)

</TabItem>
<TabItem value="go" label="Go">

```go
func doubleValue(x int) int {
    return x * 2
}

var func func(int) int = doubleValue
result := func(5)
```

**Besonderheiten:**
- Funktionen sind First-Class-Objekte
- Funktionsreferenzen können direkt zugewiesen werden

**Weiterführende Links:**
- [Go Documentation - Function Values](https://go.dev/tour/moretypes/25)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
def doubleValue(x) {
    return x * 2
}

def func = this.&doubleValue
def result = func(5)
```

**Besonderheiten:**
- Verwendet `&` für Method References
- Unterstützt auch Closures

**Weiterführende Links:**
- [Groovy Documentation - Method Pointers](https://groovy-lang.org/closures.html#method-pointers)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
doubleValue :: Int -> Int
doubleValue x = x * 2

func :: Int -> Int
func = doubleValue

result = func 5
```

**Besonderheiten:**
- Funktionen sind First-Class-Objekte
- Funktionsreferenzen können direkt zugewiesen werden

**Weiterführende Links:**
- [Haskell Documentation - Functions](https://www.haskell.org/tutorial/functions.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
function doubleValue(x: Int): Int {
    return x * 2;
}

var func: Int -> Int = doubleValue;
var result = func(5);
```

**Besonderheiten:**
- Funktionen sind First-Class-Objekte
- Funktionsreferenzen können direkt zugewiesen werden

**Weiterführende Links:**
- [Haxe Documentation - Functions](https://haxe.org/manual/types-function.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
doubleValue : Int -> Int
doubleValue x = x * 2

func : Int -> Int
func = doubleValue

result : Int
result = func 5
```

**Besonderheiten:**
- Funktionen sind First-Class-Objekte
- Funktionsreferenzen können direkt zugewiesen werden

**Weiterführende Links:**
- [Idris Documentation - Functions](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html)

</TabItem>
<TabItem value="java" label="Java">

```java
int doubleValue(int x) {
    return x * 2;
}

// Method Reference (seit Java 8)
Function<Integer, Integer> func = this::doubleValue;
int result = func.apply(5);

// Oder mit Lambda
Function<Integer, Integer> func2 = x -> x * 2;
```

**Besonderheiten:**
- Method References wurden in Java 8 eingeführt
- Verwendet `::` für Method References
- Unterstützt `Function<T, R>` und andere funktionale Interfaces

**Weiterführende Links:**
- [Oracle Java Documentation - Method References](https://docs.oracle.com/javase/tutorial/java/javaOO/methodreferences.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
function doubleValue(x) {
    return x * 2;
}

const func = doubleValue;
const result = func(5);
```

**Besonderheiten:**
- Funktionen sind First-Class-Objekte
- Funktionsreferenzen können direkt zugewiesen werden

**Weiterführende Links:**
- [MDN Web Docs - Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
function double_value(x::Int)::Int
    return x * 2
end

func = double_value
result = func(5)
```

**Besonderheiten:**
- Funktionen sind First-Class-Objekte
- Funktionsreferenzen können direkt zugewiesen werden

**Weiterführende Links:**
- [Julia Documentation - Functions](https://docs.julialang.org/en/v1/manual/functions/)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Function References
fun double(x: int): int
  x * 2

fun increment(x: int): int
  x + 1

// Funktionen direkt als Referenz übergeben
val numbers = [1, 2, 3, 4, 5]
val doubled = numbers.map(double)       // [2, 4, 6, 8, 10]
val incremented = numbers.map(increment) // [2, 3, 4, 5, 6]

// In Variablen speichern
val f: (int) -> int = double
val result = f(5) // 10
```

**Besonderheiten:**
- Funktionen können direkt über ihren Namen referenziert werden
- Kein spezieller Operator (wie `::` in Kotlin oder `&` in Ruby) nötig
- Funktionsnamen sind bereits Werte vom Funktionstyp
- Ermöglicht elegante Übergabe an Higher-Order Functions

**Weiterführende Links:**
- [Koka Language Guide - Functions](https://koka-lang.github.io/koka/doc/book.html#sec-functions)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
fun doubleValue(x: Int): Int {
    return x * 2
}

val func: (Int) -> Int = ::doubleValue
val result = func(5)
```

**Besonderheiten:**
- Verwendet `::` für Function References (seit Kotlin 1.0)
- Unterstützt sowohl Function References als auch Lambda-Ausdrücke

**Weiterführende Links:**
- [Kotlin Documentation - Function References](https://kotlinlang.org/docs/reflection.html#function-references)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Function References
def doubleValue (x : Int) : Int := x * 2

-- Funktionsname direkt als Referenz übergeben
def applyFunc (f : Int → Int) (value : Int) : Int := f value

def result : Int := applyFunc doubleValue 5
```

**Besonderheiten:**
- In Lean 4 sind Funktionen First-Class-Werte und können direkt über ihren Namen referenziert werden
- Kein spezielles Syntax-Element wie `::` oder `&` nötig — der Funktionsname selbst ist bereits eine Referenz
- Funktionsreferenzen können in Variablen gespeichert und als Argumente übergeben werden

**Weiterführende Links:**
- [Lean 4 Documentation - Functions](https://lean-lang.org/lean4/doc/functions.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
function double_value(x)
    return x * 2
end

local func = double_value
local result = func(5)
```

**Besonderheiten:**
- Funktionen sind First-Class-Objekte
- Funktionsreferenzen können direkt zugewiesen werden

**Weiterführende Links:**
- [Lua Documentation - Functions](https://www.lua.org/manual/5.4/manual.html#2.5.9)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
function result = double_value(x)
    result = x * 2;
end

func = @double_value;
result = func(5);
```

**Besonderheiten:**
- Verwendet `@` für Function Handles
- Function Handles können gespeichert und übergeben werden

**Weiterführende Links:**
- [MATLAB Documentation - Function Handles](https://www.mathworks.com/help/matlab/matlab_prog/creating-a-function-handle.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Funktionsreferenzen / Prädikatreferenzen
:- module func_ref.
:- interface.
:- import_module io.
:- pred main(io::di, io::uo) is det.
:- implementation.
:- import_module int, list, string.

:- func double_value(int) = int.
double_value(X) = X * 2.

:- func triple_value(int) = int.
triple_value(X) = X * 3.

:- pred main(io::di, io::uo) is det.
main(!IO) :-
    % Referenz auf eine Funktion in Variable speichern
    Func = double_value,
    Result = apply(Func, 5),  % 10
    io.format("double_value(5) = %d\n", [i(Result)], !IO),

    % Funktionsreferenz als Parameter übergeben
    Mapped = list.map(triple_value, [1, 2, 3]),  % [3, 6, 9]

    % Prädikatreferenz übergeben
    list.filter(int.is_even, [1, 2, 3, 4, 5], Evens).  % [2, 4]
```

**Besonderheiten:**
- In Mercury werden Funktionen und Prädikate über ihren Namen referenziert.
- Referenzen sind First-Class-Werte und können in Variablen gespeichert und übergeben werden.
- `apply/N` wird verwendet, um Funktionsreferenzen aufzurufen; `call/N` für Prädikatreferenzen.
- Der Compiler prüft Typen und Modi statisch, auch bei Higher-Order Verwendung.

**Weiterführende Links:**
- [Mercury Language Reference - Higher-Order](https://www.mercurylang.org/information/doc-release/mercury_ref/Higher-order.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
fn double_value(x: Int) -> Int:
    return x * 2

var func = double_value
var result = func(5)
```

**Besonderheiten:**
- Funktionen sind First-Class-Objekte
- Funktionsreferenzen können direkt zugewiesen werden

**Weiterführende Links:**
- [Mojo Documentation - Functions](https://docs.modular.com/mojo/manual/functions/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
proc doubleValue(x: int): int =
    return x * 2

var func = doubleValue
var result = func(5)
```

**Besonderheiten:**
- Funktionen sind First-Class-Objekte
- Funktionsreferenzen können direkt zugewiesen werden

**Weiterführende Links:**
- [Nim Documentation - Procedures](https://nim-lang.org/docs/manual.html#procedures)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
int doubleValue(int x) {
    return x * 2;
}

int (*func)(int) = doubleValue;
int result = func(5);
```

**Besonderheiten:**
- Unterstützt C-Style Funktionszeiger
- Unterstützt auch Selectors für Methoden

**Weiterführende Links:**
- [Objective-C Documentation - Function Pointers](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
function DoubleValue(x: Integer): Integer;
begin
    Result := x * 2;
end;

type
    TFunc = function(x: Integer): Integer;

var
    func: TFunc;
    result: Integer;
begin
    func := @DoubleValue;
    result := func(5);
end;
```

**Besonderheiten:**
- Verwendet `@` für Funktionszeiger
- Funktionszeiger müssen typisiert sein

**Weiterführende Links:**
- [Free Pascal Documentation - Function Pointers](https://www.freepascal.org/docs-html/ref/refsu68.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
let double_value x = x * 2

let func = double_value
let result = func 5
```

**Besonderheiten:**
- Funktionen sind First-Class-Objekte
- Funktionsreferenzen können direkt zugewiesen werden

**Weiterführende Links:**
- [OCaml Documentation - Functions](https://ocaml.org/docs/first-hour)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
function result = double_value(x)
    result = x * 2;
end

func = @double_value;
result = func(5);
```

**Besonderheiten:**
- Verwendet `@` für Function Handles
- Function Handles können gespeichert und übergeben werden

**Weiterführende Links:**
- [GNU Octave Documentation - Function Handles](https://octave.org/doc/v8.1.0/Function-Handles.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
double_value :: proc(x: int) -> int {
    return x * 2
}

func := double_value
result := func(5)
```

**Besonderheiten:**
- Funktionen sind First-Class-Objekte
- Funktionsreferenzen können direkt zugewiesen werden

**Weiterführende Links:**
- [Odin Documentation - Procedures](https://odin-lang.org/docs/overview/#procedures)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
sub double_value {
    my ($x) = @_;
    return $x * 2;
}

my $func = \&double_value;
my $result = $func->(5);
```

**Besonderheiten:**
- Verwendet `\&` für Funktionsreferenzen
- Aufruf mit `->()`

**Weiterführende Links:**
- [Perl Documentation - Function References](https://perldoc.perl.org/perlref#Code-References)

</TabItem>
<TabItem value="php" label="PHP">

```php
function doubleValue($x) {
    return $x * 2;
}

$func = 'doubleValue';
$result = $func(5);

// Oder mit callable (seit PHP 5.4)
$func2 = 'doubleValue';
$result2 = call_user_func($func2, 5);
```

**Besonderheiten:**
- Unterstützt String-basierte Funktionsreferenzen
- Unterstützt auch `callable` Type (seit PHP 5.4)

**Weiterführende Links:**
- [PHP Documentation - Callables](https://www.php.net/manual/en/language.types.callable.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
double_value(X, Result) :- Result is X * 2.

% Prädikatreferenz als Atom speichern
?- Func = double_value, call(Func, 5, Result).
%  Result = 10

% Prädikatreferenz an anderes Prädikat übergeben
apply_func(Func, Value, Result) :-
    call(Func, Value, Result).

?- apply_func(double_value, 5, Result).
%  Result = 10
```

**Besonderheiten:**
- Prädikate werden durch ihren Namen (Atom) referenziert
- `call/N` (ISO-Standard) ruft ein Prädikat dynamisch über seinen Namen auf
- Keine Funktionszeiger im klassischen Sinne — stattdessen werden Atome/Terme als Referenzen verwendet

**Weiterführende Links:**
- [SWI-Prolog Documentation - Meta-predicates](https://www.swi-prolog.org/pldoc/man?section=metacall)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
doubleValue :: Int -> Int
doubleValue x = x * 2

func :: Int -> Int
func = doubleValue

result = func 5
```

**Besonderheiten:**
- Funktionen sind First-Class-Objekte
- Funktionsreferenzen können direkt zugewiesen werden

**Weiterführende Links:**
- [PureScript Documentation - Functions](https://book.purescript.org/chapter3.html)

</TabItem>
<TabItem value="python" label="Python">

```python
def double_value(x):
    return x * 2

func = double_value
result = func(5)
```

**Besonderheiten:**
- Funktionen sind First-Class-Objekte
- Funktionsreferenzen können direkt zugewiesen werden

**Weiterführende Links:**
- [Python Documentation - Functions](https://docs.python.org/3/tutorial/controlflow.html#defining-functions)

</TabItem>
<TabItem value="r" label="R">

```r
double_value <- function(x) {
    return(x * 2)
}

func <- double_value
result <- func(5)
```

**Besonderheiten:**
- Funktionen sind First-Class-Objekte
- Funktionsreferenzen können direkt zugewiesen werden

**Weiterführende Links:**
- [R Documentation - Functions](https://cran.r-project.org/doc/manuals/r-release/R-intro.html#Writing-your-own-functions)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
(define (double-value x)
  (* x 2))

(define func double-value)
(define result (func 5))
```

**Besonderheiten:**
- Funktionen sind First-Class-Objekte
- Funktionsreferenzen können direkt zugewiesen werden

**Weiterführende Links:**
- [Racket Documentation - Functions](https://docs.racket-lang.org/guide/define.html)

</TabItem>
<TabItem value="roc" label="Roc">

```roc
doubleValue = \x -> x * 2

func = doubleValue
result = func 5
```

**Besonderheiten:**
- Funktionen sind First-Class-Objekte
- Funktionsreferenzen können direkt zugewiesen werden

**Weiterführende Links:**
- [Roc Documentation - Functions](https://www.roc-lang.org/tutorial)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
def double_value(x)
    return x * 2
end

func = method(:double_value)
result = func.call(5)
```

**Besonderheiten:**
- Verwendet `method(:name)` für Method References
- Aufruf mit `.call()`

**Weiterführende Links:**
- [Ruby Documentation - Method Objects](https://ruby-doc.org/core-3.1.0/Method.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
fn double_value(x: i32) -> i32 {
    x * 2
}

let func: fn(i32) -> i32 = double_value;
let result = func(5);
```

**Besonderheiten:**
- Unterstützt Function Pointers (`fn` type)
- Unterstützt auch Closures (`Fn`, `FnMut`, `FnOnce` traits)

**Weiterführende Links:**
- [Rust Book - Function Pointers](https://doc.rust-lang.org/book/ch19-05-advanced-functions-and-closures.html#function-pointers)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
def doubleValue(x: Int): Int = {
    x * 2
}

val func: Int => Int = doubleValue
val result = func(5)
```

**Besonderheiten:**
- Funktionen sind First-Class-Objekte
- Method References können direkt zugewiesen werden

**Weiterführende Links:**
- [Scala Documentation - Functions](https://docs.scala-lang.org/tour/basics.html#functions)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
(define (double-value x)
  (* x 2))

(define func double-value)
(define result (func 5))
```

**Besonderheiten:**
- Funktionen sind First-Class-Objekte
- Funktionsreferenzen können direkt zugewiesen werden

**Weiterführende Links:**
- [Scheme Documentation - Functions](https://www.scheme.com/tspl4/start.html#./start:h0)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
func doubleValue(x: Int) -> Int {
    return x * 2
}

let fn: (Int) -> Int = doubleValue
let result = fn(5)
```

**Besonderheiten:**
- Funktionen sind First-Class-Objekte
- Funktionsreferenzen können direkt zugewiesen werden

**Weiterführende Links:**
- [Swift Documentation - Functions](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/functions/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
function doubleValue(x: number): number {
    return x * 2;
}

const func: (x: number) => number = doubleValue;
const result = func(5);
```

**Besonderheiten:**
- Funktionen sind First-Class-Objekte
- Funktionsreferenzen können direkt zugewiesen werden
- Unterstützt Typannotationen für Funktionsreferenzen

**Weiterführende Links:**
- [TypeScript Handbook - Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
Function DoubleValue(x As Integer) As Integer
    Return x * 2
End Function

Dim func As Func(Of Integer, Integer) = AddressOf DoubleValue
Dim result As Integer = func(5)
```

**Besonderheiten:**
- Verwendet `AddressOf` für Funktionsreferenzen
- Unterstützt `Func(Of T, TResult)` Delegates

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Delegates](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/delegates/)

</TabItem>
<TabItem value="v" label="V">

```v
fn double_value(x int) int {
    return x * 2
}

func := double_value
result := func(5)
```

**Besonderheiten:**
- Funktionen sind First-Class-Objekte
- Funktionsreferenzen können direkt zugewiesen werden

**Weiterführende Links:**
- [V Documentation - Functions](https://github.com/vlang/v/blob/master/doc/docs.md#functions)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```wolfram
doubleValue[x_] := x * 2

func = doubleValue
result = func[5]
```

**Besonderheiten:**
- Funktionen sind First-Class-Objekte
- Funktionsreferenzen können direkt zugewiesen werden

**Weiterführende Links:**
- [Wolfram Language Documentation - Functions](https://reference.wolfram.com/language/guide/Functions.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
fn double_value(x: i32) i32 {
    return x * 2;
}

const func: fn(i32) i32 = double_value;
const result = func(5);
```

**Besonderheiten:**
- Funktionen sind First-Class-Objekte
- Funktionsreferenzen können direkt zugewiesen werden

**Weiterführende Links:**
- [Zig Documentation - Functions](https://ziglang.org/documentation/0.11.0/#Functions)

</TabItem>
</Tabs>


## 7.2.4. Property References / Field References

Referenzen auf Eigenschaften oder Felder, die gespeichert, übergeben und später verwendet werden können, um auf Eigenschaften zuzugreifen oder sie zu modifizieren, ohne sie sofort zu lesen oder zu schreiben. Ermöglicht es, Eigenschaften als Werte zu behandeln und sie dynamisch zu verwenden.

### Sprachen {#sprachen}

<Tabs availableTabs={['csharp', 'dart', 'groovy', 'java', 'javascript', 'kotlin', 'python', 'ruby', 'scala', 'swift', 'typescript', 'vbnet']}>
<TabItem value="csharp" label="C#">

```csharp
class Person {
    public string Name { get; set; }
}

Person person = new Person { Name = "Alice" };

// Property Reference mit Expression Trees (seit C# 3.0)
System.Linq.Expressions.Expression<Func<Person, string>> nameRef = p => p.Name;
var nameGetter = nameRef.Compile();
string name = nameGetter(person);

// Oder mit Reflection
var propertyInfo = typeof(Person).GetProperty("Name");
string name2 = (string)propertyInfo.GetValue(person);
```

**Besonderheiten:**
- Unterstützt Expression Trees für Property References (seit C# 3.0)
- Unterstützt auch Reflection für Property Access
- Wird häufig in LINQ und Datenbindung verwendet

**Weiterführende Links:**
- [Microsoft C# Documentation - Expression Trees](https://learn.microsoft.com/en-us/dotnet/csharp/advanced-topics/expression-trees/)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
class Person {
    String name;
    Person(this.name);
}

Person person = Person("Alice");

// Property Reference mit Symbol (seit Dart 2.0)
Symbol nameSymbol = #name;
String name = MirrorSystem.getName(nameSymbol).toString();

// Oder mit Reflection
import 'dart:mirrors';
var mirror = reflect(person);
var nameField = mirror.type.declarations[#name];
```

**Besonderheiten:**
- Unterstützt Symbols für Property References (seit Dart 2.0)
- Reflection ist optional und erfordert `dart:mirrors`
- Symbols werden zur Laufzeit aufgelöst

**Weiterführende Links:**
- [Dart Documentation - Symbols](https://dart.dev/guides/language/language-tour#symbols)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
class Person {
    String name
}

Person person = new Person(name: "Alice")

// Property Reference
def nameRef = Person.metaClass.getProperty(person, "name")
String name = nameRef

// Oder mit Closure
def getName = { Person p -> p.name }
String name2 = getName(person)
```

**Besonderheiten:**
- Unterstützt MetaClass für Property References
- Unterstützt auch Closures für Property Access
- Dynamische Property-Zugriffe zur Laufzeit

**Weiterführende Links:**
- [Groovy Documentation - MetaClass](https://groovy-lang.org/metaprogramming.html#_metaclasses)

</TabItem>
<TabItem value="java" label="Java">

```java
class Person {
    private String name;
    
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
}

Person person = new Person();
person.setName("Alice");

// Property Reference mit Method References (seit Java 8)
Function<Person, String> nameGetter = Person::getName;
String name = nameGetter.apply(person);

// Oder mit Reflection
try {
    java.lang.reflect.Method getNameMethod = Person.class.getMethod("getName");
    String name2 = (String)getNameMethod.invoke(person);
} catch (Exception e) {
    // Handle exception
}
```

**Besonderheiten:**
- Verwendet Method References für Property Access (seit Java 8)
- Unterstützt auch Reflection für Property Access
- Java verwendet Getter/Setter-Pattern für Properties

**Weiterführende Links:**
- [Oracle Java Documentation - Method References](https://docs.oracle.com/javase/tutorial/java/javaOO/methodreferences.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
class Person {
    constructor(name) {
        this.name = name;
    }
}

const person = new Person("Alice");

// Property Reference mit String
const propertyName = "name";
const name = person[propertyName];

// Oder mit Function
const getName = (p) => p.name;
const name2 = getName(person);
```

**Besonderheiten:**
- Unterstützt String-basierte Property References
- Properties können dynamisch zur Laufzeit zugegriffen werden
- Unterstützt auch Computed Property Names

**Weiterführende Links:**
- [MDN Web Docs - Property Accessors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
class Person(var name: String)

val person = Person("Alice")

// Property Reference (seit Kotlin 1.0)
val nameRef: KProperty1<Person, String> = Person::name
val name = nameRef.get(person)

// Oder direkt
val nameGetter: (Person) -> String = Person::name
val name2 = nameGetter(person)
```

**Besonderheiten:**
- Unterstützt Property References mit `::` Syntax (seit Kotlin 1.0)
- Property References sind First-Class-Objekte
- Unterstützt sowohl Read- als auch Write-Property References

**Weiterführende Links:**
- [Kotlin Documentation - Reflection](https://kotlinlang.org/docs/reflection.html#property-references)

</TabItem>
<TabItem value="python" label="Python">

```python
class Person:
    def __init__(self, name):
        self.name = name

person = Person("Alice")

# Property Reference mit getattr
property_name = "name"
name = getattr(person, property_name)

# Oder mit Function
def get_name(p):
    return p.name

name2 = get_name(person)
```

**Besonderheiten:**
- Unterstützt `getattr` für Property References
- Properties können dynamisch zur Laufzeit zugegriffen werden
- Unterstützt auch `operator.attrgetter` für Property References

**Weiterführende Links:**
- [Python Documentation - Built-in Functions](https://docs.python.org/3/library/functions.html#getattr)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
class Person
    attr_accessor :name
    
    def initialize(name)
        @name = name
    end
end

person = Person.new("Alice")

# Property Reference mit Symbol
name_ref = :name
name = person.send(name_ref)

# Oder mit Method
name_getter = person.method(:name)
name2 = name_getter.call
```

**Besonderheiten:**
- Unterstützt Symbols für Property References
- Verwendet `send` für dynamische Method Calls
- Unterstützt auch `method` für Method References

**Weiterführende Links:**
- [Ruby Documentation - Object#send](https://ruby-doc.org/core-3.1.0/Object.html#method-i-send)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
class Person(var name: String)

val person = new Person("Alice")

// Property Reference mit Reflection
import scala.reflect.runtime.universe._
val mirror = runtimeMirror(getClass.getClassLoader)
val personType = typeOf[Person]
val nameSymbol = personType.decl(TermName("name")).asTerm
val nameMethod = mirror.reflect(person).reflectField(nameSymbol)
val name = nameMethod.get.asInstanceOf[String]
```

**Besonderheiten:**
- Unterstützt Reflection für Property References
- Verwendet Scala Reflection API
- Komplexere Syntax für Property Access

**Weiterführende Links:**
- [Scala Documentation - Reflection](https://docs.scala-lang.org/overviews/reflection/overview.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
class Person {
    var name: String
    init(name: String) {
        self.name = name
    }
}

let person = Person(name: "Alice")

// Property Reference mit KeyPath (seit Swift 4.0)
let nameKeyPath: KeyPath<Person, String> = \Person.name
let name = person[keyPath: nameKeyPath]

// Oder direkt
let nameGetter: (Person) -> String = { $0.name }
let name2 = nameGetter(person)
```

**Besonderheiten:**
- Unterstützt KeyPath für Property References (seit Swift 4.0)
- KeyPaths sind typisiert und typsicher
- Unterstützt sowohl Read- als auch Write-KeyPaths

**Weiterführende Links:**
- [Swift Documentation - KeyPath](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/keypaths/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

const person = new Person("Alice");

// Property Reference mit String
const propertyName: keyof Person = "name";
const name = person[propertyName];

// Oder mit Function
const getName = (p: Person): string => p.name;
const name2 = getName(person);
```

**Besonderheiten:**
- Unterstützt String-basierte Property References mit `keyof` Type
- Properties können dynamisch zur Laufzeit zugegriffen werden
- Unterstützt Typannotationen für Property References

**Weiterführende Links:**
- [TypeScript Handbook - Keyof Type Operator](https://www.typescriptlang.org/docs/handbook/2/keyof-types.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
Class Person
    Public Property Name As String
End Class

Dim person As New Person With {.Name = "Alice"}

' Property Reference mit Expression Trees (seit VB.NET 9.0)
Dim nameRef As System.Linq.Expressions.Expression(Of Func(Of Person, String)) = Function(p) p.Name
Dim nameGetter = nameRef.Compile()
Dim name As String = nameGetter(person)

' Oder mit Reflection
Dim propertyInfo = GetType(Person).GetProperty("Name")
Dim name2 As String = CStr(propertyInfo.GetValue(person))
```

**Besonderheiten:**
- Unterstützt Expression Trees für Property References (seit VB.NET 9.0)
- Unterstützt auch Reflection für Property Access
- Wird häufig in LINQ und Datenbindung verwendet

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Expression Trees](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/concepts/expression-trees/)

</TabItem>
</Tabs>


## 7.2.5. Uniform Function Call Syntax (UFCS)

Ermöglicht es, Funktionen sowohl als Methodenaufrufe (`obj.method()`) als auch als freistehende Funktionsaufrufe (`method(obj)`) zu verwenden. Der erste Parameter einer Funktion kann als Objekt behandelt werden, auf dem die Funktion aufgerufen wird, was zu einer einheitlicheren und flexibleren Syntax führt.

### Sprachen {#sprachen}

<Tabs availableTabs={['crystal', 'd', 'koka', 'lean4', 'nim', 'roc', 'swift', 'v', 'zig']}>
<TabItem value="crystal" label="Crystal">

```crystal
def to_upper(str : String) : String
    str.upcase
end

str = "hello"

# Freistehender Funktionsaufruf
result1 = to_upper(str)

# Methodenaufruf (UFCS)
result2 = str.to_upper
```

**Besonderheiten:**
- Unterstützt UFCS nativ
- Funktionen können sowohl als Methoden als auch als freistehende Funktionen aufgerufen werden
- Erste Parameter wird als Receiver behandelt

**Weiterführende Links:**
- [Crystal Documentation - Methods](https://crystal-lang.org/reference/1.11/syntax_and_semantics/methods.html)

</TabItem>
<TabItem value="d" label="D">

```d
string toUpper(string str) {
    return str.toUpper();
}

string str = "hello";

// Freistehender Funktionsaufruf
string result1 = toUpper(str);

// Methodenaufruf (UFCS, seit D 2.0)
string result2 = str.toUpper();
```

**Besonderheiten:**
- UFCS wurde in D 2.0 eingeführt
- Funktionen können sowohl als Methoden als auch als freistehende Funktionen aufgerufen werden
- Erste Parameter wird als Receiver behandelt

**Weiterführende Links:**
- [D Language Specification - Uniform Function Call Syntax](https://dlang.org/spec/function.html#pseudo-member)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Uniform Function Call Syntax (Dot Notation)
fun double(x: int): int
  x * 2

fun increment(x: int): int
  x + 1

// Traditioneller Aufruf
val r1 = double(5)     // 10
val r2 = increment(5)  // 6

// UFCS / Dot Notation
val r3 = 5.double      // 10
val r4 = 5.increment   // 6

// Chaining durch Dot Notation
val result = 5.double.increment // 11

// Auch mit mehreren Parametern
fun add(x: int, y: int): int
  x + y

val r5 = 3.add(4) // 7
```

**Besonderheiten:**
- Koka unterstützt Dot Notation als natürliches UFCS
- `x.f` ist äquivalent zu `f(x)`, `x.f(y)` zu `f(x, y)`
- Ermöglicht natürliches links-nach-rechts Chaining
- Funktioniert mit allen Top-Level-Funktionen

**Weiterführende Links:**
- [Koka Language Guide - Dot Notation](https://koka-lang.github.io/koka/doc/book.html#sec-dot)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Uniform Function Call Syntax (Dot Notation)
def List.doubleAll (xs : List Int) : List Int :=
  xs.map (· * 2)

def numbers : List Int := [1, 2, 3, 4, 5]

-- Dot Notation (UFCS)
def result1 : List Int := numbers.doubleAll

-- Äquivalenter freistehender Funktionsaufruf
def result2 : List Int := List.doubleAll numbers

-- Chaining durch Dot Notation
def result3 : List Int := numbers.map (· * 2) |>.filter (· > 4)
```

**Besonderheiten:**
- Lean 4 unterstützt generalisierte Dot-Notation: `x.f` wird zu `T.f x`, wobei `T` der Typ von `x` ist
- Ermöglicht eine methodenähnliche Syntax für Namespace-Funktionen
- Chaining ist durch Dot-Notation oder den Pipe-Operator `|>` möglich
- Funktioniert automatisch für alle Funktionen im Namespace des Typs

**Weiterführende Links:**
- [Lean 4 Documentation - Dot Notation](https://lean-lang.org/lean4/doc/expressions/dotnotation.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
proc toUpper(str: string): string =
    return str.toUpper()

let str = "hello"

# Freistehender Funktionsaufruf
let result1 = toUpper(str)

# Methodenaufruf (UFCS)
let result2 = str.toUpper()
```

**Besonderheiten:**
- Unterstützt UFCS nativ
- Funktionen können sowohl als Methoden als auch als freistehende Funktionen aufgerufen werden
- Erste Parameter wird als Receiver behandelt

**Weiterführende Links:**
- [Nim Documentation - Method Call Syntax](https://nim-lang.org/docs/manual.html#procedures-method-call-syntax)

</TabItem>
<TabItem value="roc" label="Roc">

```roc
toUpper = \str -> Str.toUpper str

str = "hello"

# Freistehender Funktionsaufruf
result1 = toUpper str

# Methodenaufruf (UFCS)
result2 = str |> toUpper
```

**Besonderheiten:**
- Unterstützt UFCS über Pipe-Operator (`|>`)
- Funktionen können sowohl als Methoden als auch als freistehende Funktionen aufgerufen werden
- Pipe-Operator ermöglicht Methodenaufruf-Syntax

**Weiterführende Links:**
- [Roc Documentation - Functions](https://www.roc-lang.org/tutorial)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
func toUpper(_ str: String) -> String {
    return str.uppercased()
}

let str = "hello"

// Freistehender Funktionsaufruf
let result1 = toUpper(str)

// Methodenaufruf (über Extension)
extension String {
    func toUpper() -> String {
        return self.uppercased()
    }
}
let result2 = str.toUpper()
```

**Besonderheiten:**
- Unterstützt UFCS über Extensions
- Funktionen können als Methoden über Extensions hinzugefügt werden
- Erste Parameter kann als Receiver behandelt werden

**Weiterführende Links:**
- [Swift Documentation - Extensions](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/extensions/)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
fn toUpper(str: []const u8) []const u8 {
    // Implementation
    return str;
}

const str = "hello";

// Freistehender Funktionsaufruf
const result1 = toUpper(str);

// Methodenaufruf (über Struct Methods)
const String = struct {
    data: []const u8,
    
    fn toUpper(self: @This()) []const u8 {
        return toUpper(self.data);
    }
};
```

**Besonderheiten:**
- Unterstützt UFCS über Struct Methods
- Funktionen können als Methoden über Structs hinzugefügt werden
- Erste Parameter kann als Receiver behandelt werden

**Weiterführende Links:**
- [Zig Documentation - Structs](https://ziglang.org/documentation/0.11.0/#structs)

</TabItem>
<TabItem value="v" label="V">

```v
// UFCS: Methoden und freie Funktionen
struct Point {
    x f64
    y f64
}

fn (p Point) distance(other Point) f64 {
    dx := p.x - other.x
    dy := p.y - other.y
    return (dx * dx + dy * dy)
}

p1 := Point{x: 0.0, y: 0.0}
p2 := Point{x: 3.0, y: 4.0}

// Methoden-Aufruf
d := p1.distance(p2)

// Array-Methoden
numbers := [3, 1, 4, 1, 5]
sorted := numbers.sorted()
filtered := numbers.filter(it > 2)
```

**Besonderheiten:**
- Methoden werden als freie Funktionen mit Receiver definiert
- UFCS ermöglicht flüssige Methodenketten
- `it` als impliziter Parameter in Kurzform-Closures

**Weiterführende Links:**
- [V Documentation - Methods](https://github.com/vlang/v/blob/master/doc/docs.md#methods)

</TabItem>
</Tabs>


## 7.2.6. Recursion

Die Fähigkeit einer Funktion, sich selbst aufzurufen. Ermöglicht es, Probleme durch wiederholte Anwendung derselben Funktion auf kleinere Teilprobleme zu lösen.

### Sprachen {#sprachen}

<Tabs availableTabs={['ada', 'c', 'carbon', 'clojure', 'common-lisp', 'crystal', 'csharp', 'cpp', 'd', 'dart', 'eiffel', 'elixir', 'elm', 'erlang', 'fsharp', 'fortran', 'gleam', 'go', 'groovy', 'haskell', 'haxe', 'idris', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'lua', 'matlab', 'mercury', 'mojo', 'nim', 'objective-c', 'object-pascal', 'ocaml', 'octave', 'odin', 'perl', 'php', 'prolog', 'purescript', 'python', 'r', 'racket', 'roc', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'vbnet', 'v', 'wolfram-language', 'zig']}>
<TabItem value="ada" label="Ada">

```ada
function Factorial(N : Natural) return Natural is
begin
    if N <= 1 then
        return 1;
    else
        return N * Factorial(N - 1);
    end if;
end Factorial;

Result : Natural := Factorial(5);
```

**Besonderheiten:**
- Unterstützt Rekursion nativ
- Rekursive Funktionen müssen explizit deklariert werden

**Weiterführende Links:**
- [Ada Documentation - Subprograms](https://learn.adacore.com/courses/intro-to-ada/chapters/subprograms.html)

</TabItem>
<TabItem value="c" label="C">

```c
int factorial(int n) {
    if (n <= 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

int result = factorial(5);
```

**Besonderheiten:**
- Unterstützt Rekursion nativ
- Rekursive Funktionen müssen vor ihrer Verwendung deklariert werden

**Weiterführende Links:**
- [C Documentation - Functions](https://en.cppreference.com/w/c/language/functions)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
fn Factorial(n: i32) -> i32 {
    if (n <= 1) {
        return 1;
    } else {
        return n * Factorial(n - 1);
    }
}

var result = Factorial(5);
```

**Besonderheiten:**
- Experimentelle Sprache, Syntax kann sich noch ändern
- Unterstützt Rekursion nativ

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
(defn factorial [n]
  (if (<= n 1)
    1
    (* n (factorial (dec n)))))

(def result (factorial 5))
```

**Besonderheiten:**
- Unterstützt Rekursion nativ
- Rekursive Funktionen können mit `recur` für Tail-Call-Optimierung verwendet werden

**Weiterführende Links:**
- [Clojure Documentation - Recursion](https://clojure.org/reference/special_forms#recur)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
(defun factorial (n)
  (if (<= n 1)
      1
      (* n (factorial (- n 1)))))

(defvar result (factorial 5))
```

**Besonderheiten:**
- Unterstützt Rekursion nativ
- Rekursive Funktionen können mit `labels` für lokale Rekursion verwendet werden

**Weiterführende Links:**
- [Common Lisp HyperSpec - Functions](http://www.lispworks.com/documentation/HyperSpec/Body/f_fun.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
def factorial(n : Int32) : Int32
    if n <= 1
        1
    else
        n * factorial(n - 1)
    end
end

result = factorial(5)
```

**Besonderheiten:**
- Unterstützt Rekursion nativ
- Rekursive Funktionen können mit Tail-Call-Optimierung verwendet werden

**Weiterführende Links:**
- [Crystal Documentation - Methods](https://crystal-lang.org/reference/1.11/syntax_and_semantics/methods.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
int Factorial(int n) {
    if (n <= 1) {
        return 1;
    } else {
        return n * Factorial(n - 1);
    }
}

int result = Factorial(5);
```

**Besonderheiten:**
- Unterstützt Rekursion nativ
- Rekursive Funktionen können mit Tail-Call-Optimierung verwendet werden (abhängig vom Compiler)

**Weiterführende Links:**
- [Microsoft C# Documentation - Methods](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/methods)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
int factorial(int n) {
    if (n <= 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

int result = factorial(5);
```

**Besonderheiten:**
- Unterstützt Rekursion nativ
- Rekursive Funktionen können mit Tail-Call-Optimierung verwendet werden (abhängig vom Compiler)

**Weiterführende Links:**
- [cppreference.com - Functions](https://en.cppreference.com/w/cpp/language/functions)

</TabItem>
<TabItem value="d" label="D">

```d
int factorial(int n) {
    if (n <= 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

int result = factorial(5);
```

**Besonderheiten:**
- Unterstützt Rekursion nativ
- Rekursive Funktionen können mit Tail-Call-Optimierung verwendet werden

**Weiterführende Links:**
- [D Language Specification - Functions](https://dlang.org/spec/function.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
int factorial(int n) {
    if (n <= 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

int result = factorial(5);
```

**Besonderheiten:**
- Unterstützt Rekursion nativ
- Rekursive Funktionen können mit Tail-Call-Optimierung verwendet werden

**Weiterführende Links:**
- [Dart Language Tour - Functions](https://dart.dev/guides/language/language-tour#functions)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
factorial (n: INTEGER): INTEGER
    do
        if n <= 1 then
            Result := 1
        else
            Result := n * factorial(n - 1)
        end
    end

result: INTEGER
    do
        Result := factorial(5)
    end
```

**Besonderheiten:**
- Unterstützt Rekursion nativ
- Rekursive Funktionen müssen explizit deklariert werden

**Weiterführende Links:**
- [Eiffel Documentation - Routines](https://www.eiffel.org/doc/eiffel/Routines)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
def factorial(n) do
    if n <= 1 do
        1
    else
        n * factorial(n - 1)
    end
end

result = factorial(5)
```

**Besonderheiten:**
- Unterstützt Rekursion nativ
- Rekursive Funktionen können mit Tail-Call-Optimierung verwendet werden

**Weiterführende Links:**
- [Elixir Documentation - Functions](https://elixir-lang.org/getting-started/basic-types.html#functions)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
factorial : Int -> Int
factorial n =
    if n <= 1 then
        1
    else
        n * factorial (n - 1)

result = factorial 5
```

**Besonderheiten:**
- Unterstützt Rekursion nativ
- Rekursive Funktionen können mit Tail-Call-Optimierung verwendet werden

**Weiterführende Links:**
- [Elm Documentation - Functions](https://guide.elm-lang.org/core_language.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
factorial(N) ->
    if
        N =< 1 -> 1;
        true -> N * factorial(N - 1)
    end.

Result = factorial(5).
```

**Besonderheiten:**
- Unterstützt Rekursion nativ
- Rekursive Funktionen können mit Tail-Call-Optimierung verwendet werden

**Weiterführende Links:**
- [Erlang Documentation - Functions](https://www.erlang.org/doc/reference_manual/functions.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
let rec factorial n =
    if n <= 1 then
        1
    else
        n * factorial (n - 1)

let result = factorial 5
```

**Besonderheiten:**
- Unterstützt Rekursion nativ
- Rekursive Funktionen müssen mit `rec` gekennzeichnet werden
- Rekursive Funktionen können mit Tail-Call-Optimierung verwendet werden

**Weiterführende Links:**
- [F# Documentation - Functions](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/functions/)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
recursive function factorial(n) result(res)
    integer, intent(in) :: n
    integer :: res
    if (n <= 1) then
        res = 1
    else
        res = n * factorial(n - 1)
    end if
end function factorial

result = factorial(5)
```

**Besonderheiten:**
- Unterstützt Rekursion nativ (seit Fortran 90)
- Rekursive Funktionen müssen mit `recursive` gekennzeichnet werden

**Weiterführende Links:**
- [Fortran Wiki - Recursive Functions](https://fortranwiki.org/fortran/show/recursive)

</TabItem>
<TabItem value="gleam" label="Gleam">

```erlang
fn factorial(n: Int) -> Int {
  case n {
    n if n <= 1 -> 1
    n -> n * factorial(n - 1)
  }
}

let result = factorial(5)
```

**Besonderheiten:**
- Unterstützt Rekursion nativ
- Rekursive Funktionen können mit Tail-Call-Optimierung verwendet werden

**Weiterführende Links:**
- [Gleam Documentation - Functions](https://gleam.run/documentation/tour/functions/)

</TabItem>
<TabItem value="go" label="Go">

```go
func factorial(n int) int {
    if n <= 1 {
        return 1
    } else {
        return n * factorial(n - 1)
    }
}

result := factorial(5)
```

**Besonderheiten:**
- Unterstützt Rekursion nativ
- Rekursive Funktionen können mit Tail-Call-Optimierung verwendet werden

**Weiterführende Links:**
- [Go Documentation - Functions](https://go.dev/tour/basics/11)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
def factorial(n) {
    if (n <= 1) {
        return 1
    } else {
        return n * factorial(n - 1)
    }
}

def result = factorial(5) // 120
```

**Besonderheiten:**
- Unterstützt Rekursion nativ
- Keine automatische Tail-Call Optimization (siehe `@TailRecursive` Annotation)
- Rekursionstiefe begrenzt durch JVM-Stack-Größe

**Weiterführende Links:**
- [Groovy Documentation - Methods](https://groovy-lang.org/objectorientation.html#_methods)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
factorial :: Int -> Int
factorial n
    | n <= 1 = 1
    | otherwise = n * factorial (n - 1)

result = factorial 5
```

**Besonderheiten:**
- Unterstützt Rekursion nativ
- Rekursive Funktionen können mit Tail-Call-Optimierung verwendet werden

**Weiterführende Links:**
- [Haskell Documentation - Functions](https://www.haskell.org/tutorial/functions.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
function factorial(n:Int):Int {
    if (n <= 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

var result = factorial(5);
```

**Besonderheiten:**
- Unterstützt Rekursion nativ
- Keine garantierte Tail-Call-Optimierung (target-abhängig)

**Weiterführende Links:**
- [Haxe Documentation - Functions](https://haxe.org/manual/types-function.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
factorial : Int -> Int
factorial n = if n <= 1 then 1 else n * factorial (n - 1)

result : Int
result = factorial 5
```

**Besonderheiten:**
- Unterstützt Rekursion nativ
- Rekursive Funktionen können mit Tail-Call-Optimierung verwendet werden

**Weiterführende Links:**
- [Idris Documentation - Functions](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html)

</TabItem>
<TabItem value="java" label="Java">

```java
int factorial(int n) {
    if (n <= 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

int result = factorial(5);
```

**Besonderheiten:**
- Unterstützt Rekursion nativ
- Keine Tail-Call-Optimierung (JVM unterstützt kein TCO)
- Bei tiefer Rekursion kann `StackOverflowError` auftreten

**Weiterführende Links:**
- [Oracle Java Documentation - Methods](https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
function factorial(n) {
    if (n <= 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

const result = factorial(5);
```

**Besonderheiten:**
- Unterstützt Rekursion nativ
- Rekursive Funktionen können mit Tail-Call-Optimierung verwendet werden (abhängig vom Engine)

**Weiterführende Links:**
- [MDN Web Docs - Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
function factorial(n::Int)::Int
    if n <= 1
        return 1
    else
        return n * factorial(n - 1)
    end
end

result = factorial(5)
```

**Besonderheiten:**
- Unterstützt Rekursion nativ
- Rekursive Funktionen können mit Tail-Call-Optimierung verwendet werden

**Weiterführende Links:**
- [Julia Documentation - Functions](https://docs.julialang.org/en/v1/manual/functions/)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Recursion
fun factorial(n: int): int
  if n <= 1 then 1
  else n * factorial(n - 1)

val result = factorial(5) // 120

// Tail-recursive Version
fun factorial-tail(n: int, acc: int = 1): int
  if n <= 1 then acc
  else factorial-tail(n - 1, n * acc)

// Rekursion über Listen
fun sum(xs: list<int>): int
  match xs
    Nil        -> 0
    Cons(x, rest) -> x + sum(rest)

val s = sum([1, 2, 3, 4, 5]) // 15
```

**Besonderheiten:**
- Rekursion ist das primäre Iterationsmittel in Koka
- Tail-rekursive Funktionen werden optimiert (TCO)
- Pattern Matching auf Listen mit `Cons`/`Nil` ist idiomatisch
- `fun`-Funktionen sind standardmäßig rekursiv (kein `rec` nötig)

**Weiterführende Links:**
- [Koka Language Guide - Functions](https://koka-lang.github.io/koka/doc/book.html#sec-functions)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
fun factorial(n: Int): Int {
    return if (n <= 1) {
        1
    } else {
        n * factorial(n - 1)
    }
}

val result = factorial(5)
```

**Besonderheiten:**
- Unterstützt Rekursion nativ
- Rekursive Funktionen können mit Tail-Call-Optimierung verwendet werden

**Weiterführende Links:**
- [Kotlin Documentation - Functions](https://kotlinlang.org/docs/functions.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Rekursion
def factorial : Nat → Nat
  | 0 => 1
  | n + 1 => (n + 1) * factorial n

def result : Nat := factorial 5 -- 120
```

**Besonderheiten:**
- Lean 4 unterstützt Rekursion nativ mit Pattern Matching auf der Funktionsdefinition
- Der Compiler prüft, dass rekursive Aufrufe terminieren (Termination Checker)
- Für nicht-triviale Terminierung kann `decreasing_by` oder `termination_by` verwendet werden
- Strukturelle Rekursion wird automatisch erkannt

**Weiterführende Links:**
- [Lean 4 Documentation - Recursion](https://lean-lang.org/lean4/doc/functions.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
function factorial(n)
    if n <= 1 then
        return 1
    else
        return n * factorial(n - 1)
    end
end

local result = factorial(5)
```

**Besonderheiten:**
- Unterstützt Rekursion nativ
- Rekursive Funktionen können mit Tail-Call-Optimierung verwendet werden

**Weiterführende Links:**
- [Lua Documentation - Functions](https://www.lua.org/manual/5.4/manual.html#2.5.9)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
function result = factorial(n)
    if n <= 1
        result = 1;
    else
        result = n * factorial(n - 1);
    end
end

result = factorial(5);
```

**Besonderheiten:**
- Unterstützt Rekursion nativ
- Keine Tail-Call-Optimierung verfügbar
- Rekursionstiefe ist durch den Speicher begrenzt

**Weiterführende Links:**
- [MATLAB Documentation - Functions](https://www.mathworks.com/help/matlab/ref/function.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Rekursion
:- module recursion.
:- interface.
:- import_module io.
:- pred main(io::di, io::uo) is det.
:- implementation.
:- import_module int, list, string.

% Einfache Rekursion
:- func factorial(int) = int.
factorial(N) =
    ( if N =< 1 then 1
      else N * factorial(N - 1)
    ).

% Rekursion über Listen
:- func sum_list(list(int)) = int.
sum_list([]) = 0.
sum_list([H|T]) = H + sum_list(T).

% Tail-rekursive Version mit Akkumulator
:- func factorial_acc(int, int) = int.
factorial_acc(N, Acc) =
    ( if N =< 1 then Acc
      else factorial_acc(N - 1, N * Acc)
    ).

:- pred main(io::di, io::uo) is det.
main(!IO) :-
    io.format("5! = %d\n", [i(factorial(5))], !IO),
    io.format("sum([1,2,3]) = %d\n", [i(sum_list([1, 2, 3]))], !IO),
    io.format("5! (tail-rec) = %d\n", [i(factorial_acc(5, 1))], !IO).
```

**Besonderheiten:**
- Rekursion ist das primäre Kontrollfluss-Paradigma in Mercury (keine Schleifen).
- Mercury unterstützt Pattern Matching auf Listenstrukturen für rekursive Verarbeitung.
- Tail-rekursive Prädikate und Funktionen werden vom Compiler optimiert.
- Der Compiler kann Endrekursion erkennen und automatisch optimieren.

**Weiterführende Links:**
- [Mercury Language Reference - Determinism](https://www.mercurylang.org/information/doc-release/mercury_ref/Determinism.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
fn factorial(n: Int) -> Int:
    if n <= 1:
        return 1
    else:
        return n * factorial(n - 1)

var result = factorial(5)
```

**Besonderheiten:**
- Unterstützt Rekursion nativ
- Rekursive Funktionen können mit Tail-Call-Optimierung verwendet werden

**Weiterführende Links:**
- [Mojo Documentation - Functions](https://docs.modular.com/mojo/manual/functions/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
proc factorial(n: int): int =
    if n <= 1:
        return 1
    else:
        return n * factorial(n - 1)

var result = factorial(5)
```

**Besonderheiten:**
- Unterstützt Rekursion nativ
- Rekursive Funktionen können mit Tail-Call-Optimierung verwendet werden

**Weiterführende Links:**
- [Nim Documentation - Procedures](https://nim-lang.org/docs/manual.html#procedures)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
int factorial(int n) {
    if (n <= 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

int result = factorial(5);
```

**Besonderheiten:**
- Unterstützt Rekursion nativ
- Rekursive Funktionen können mit Tail-Call-Optimierung verwendet werden

**Weiterführende Links:**
- [Objective-C Documentation - Functions](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
function Factorial(n: Integer): Integer;
begin
    if n <= 1 then
        Result := 1
    else
        Result := n * Factorial(n - 1);
end;

var
    result: Integer;
begin
    result := Factorial(5);
end;
```

**Besonderheiten:**
- Unterstützt Rekursion nativ
- Rekursive Funktionen müssen explizit deklariert werden

**Weiterführende Links:**
- [Free Pascal Documentation - Functions](https://www.freepascal.org/docs-html/ref/refsu68.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
let rec factorial n =
    if n <= 1 then
        1
    else
        n * factorial (n - 1)

let result = factorial 5
```

**Besonderheiten:**
- Unterstützt Rekursion nativ
- Rekursive Funktionen müssen mit `rec` gekennzeichnet werden
- Rekursive Funktionen können mit Tail-Call-Optimierung verwendet werden

**Weiterführende Links:**
- [OCaml Documentation - Functions](https://ocaml.org/docs/first-hour)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
function result = factorial(n)
    if n <= 1
        result = 1;
    else
        result = n * factorial(n - 1);
    end
end

result = factorial(5);
```

**Besonderheiten:**
- Unterstützt Rekursion nativ
- Keine Tail-Call-Optimierung (Stack Overflow bei zu tiefer Rekursion möglich)

**Weiterführende Links:**
- [GNU Octave Documentation - Functions](https://octave.org/doc/v8.1.0/Functions.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
factorial :: proc(n: int) -> int {
    if n <= 1 {
        return 1
    } else {
        return n * factorial(n - 1)
    }
}

result := factorial(5)
```

**Besonderheiten:**
- Unterstützt Rekursion nativ
- Rekursive Funktionen können mit Tail-Call-Optimierung verwendet werden

**Weiterführende Links:**
- [Odin Documentation - Procedures](https://odin-lang.org/docs/overview/#procedures)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
sub factorial {
    my ($n) = @_;
    if ($n <= 1) {
        return 1;
    } else {
        return $n * factorial($n - 1);
    }
}

my $result = factorial(5);
```

**Besonderheiten:**
- Unterstützt Rekursion nativ
- Keine automatische Tail-Call-Optimierung
- Manuelles Tail-Call-Verhalten möglich mit `goto &func`

**Weiterführende Links:**
- [Perl Documentation - Functions](https://perldoc.perl.org/perlsub)

</TabItem>
<TabItem value="php" label="PHP">

```php
function factorial($n) {
    if ($n <= 1) {
        return 1;
    } else {
        return $n * factorial($n - 1);
    }
}

$result = factorial(5);
```

**Besonderheiten:**
- Unterstützt Rekursion nativ
- Keine Tail-Call-Optimierung (tiefe Rekursion kann zu Stack Overflow führen)
- Rekursionstiefe durch Stack-Größe begrenzt

**Weiterführende Links:**
- [PHP Documentation - Functions](https://www.php.net/manual/en/functions.user-defined.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
factorial(0, 1).
factorial(N, Result) :-
    N > 0,
    N1 is N - 1,
    factorial(N1, R1),
    Result is N * R1.

?- factorial(5, Result).
%  Result = 120
```

**Besonderheiten:**
- Rekursion ist das primäre Kontrollfluss-Mittel in Prolog (keine Schleifen im klassischen Sinne)
- Basisfall und rekursiver Fall werden als separate Klauseln definiert
- Pattern Matching im Kopf der Klausel ersetzt bedingte Verzweigungen

**Weiterführende Links:**
- [SWI-Prolog Documentation - Recursion](https://www.swi-prolog.org/pldoc/man?section=recursion)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
factorial :: Int -> Int
factorial n
    | n <= 1 = 1
    | otherwise = n * factorial (n - 1)

result = factorial 5
```

**Besonderheiten:**
- Unterstützt Rekursion nativ
- Rekursive Funktionen können mit Tail-Call-Optimierung verwendet werden

**Weiterführende Links:**
- [PureScript Documentation - Functions](https://book.purescript.org/chapter3.html)

</TabItem>
<TabItem value="python" label="Python">

```python
def factorial(n):
    if n <= 1:
        return 1
    else:
        return n * factorial(n - 1)

result = factorial(5)
```

**Besonderheiten:**
- Unterstützt Rekursion nativ
- Standardmäßig Rekursionslimit von 1000 (`sys.setrecursionlimit()` zum Ändern)
- Python unterstützt keine Tail-Call-Optimierung

**Weiterführende Links:**
- [Python Documentation - Functions](https://docs.python.org/3/tutorial/controlflow.html#defining-functions)

</TabItem>
<TabItem value="r" label="R">

```r
factorial <- function(n) {
    if (n <= 1) {
        return(1)
    } else {
        return(n * factorial(n - 1))
    }
}

result <- factorial(5)
```

**Besonderheiten:**
- Unterstützt Rekursion nativ
- Keine native Tail-Call Optimization
- Stack-Tiefe ist begrenzt (standardmäßig ca. 1000 Aufrufe)

**Weiterführende Links:**
- [R Documentation - Functions](https://cran.r-project.org/doc/manuals/r-release/R-lang.html#Function-objects)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
(define (factorial n)
  (if (<= n 1)
      1
      (* n (factorial (- n 1)))))

(define result (factorial 5))
```

**Besonderheiten:**
- Unterstützt Rekursion nativ
- Rekursive Funktionen können mit Tail-Call-Optimierung verwendet werden

**Weiterführende Links:**
- [Racket Documentation - Functions](https://docs.racket-lang.org/guide/define.html)

</TabItem>
<TabItem value="roc" label="Roc">

```roc
factorial = \n ->
    if n <= 1 then
        1
    else
        n * factorial (n - 1)

result = factorial 5
```

**Besonderheiten:**
- Unterstützt Rekursion nativ
- Rekursive Funktionen können mit Tail-Call-Optimierung verwendet werden

**Weiterführende Links:**
- [Roc Documentation - Functions](https://www.roc-lang.org/tutorial)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
def factorial(n)
    if n <= 1
        return 1
    else
        return n * factorial(n - 1)
    end
end

result = factorial(5)
```

**Besonderheiten:**
- Unterstützt Rekursion nativ
- Rekursive Funktionen können mit Tail-Call-Optimierung verwendet werden

**Weiterführende Links:**
- [Ruby Documentation - Methods](https://ruby-doc.org/core-3.1.0/Method.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
fn factorial(n: i32) -> i32 {
    if n <= 1 {
        1
    } else {
        n * factorial(n - 1)
    }
}

let result = factorial(5);
```

**Besonderheiten:**
- Unterstützt Rekursion nativ
- Rekursive Funktionen können mit Tail-Call-Optimierung verwendet werden

**Weiterführende Links:**
- [Rust Book - Functions](https://doc.rust-lang.org/book/ch03-03-how-functions-work.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
def factorial(n: Int): Int = {
    if (n <= 1) {
        1
    } else {
        n * factorial(n - 1)
    }
}

val result = factorial(5)
```

**Besonderheiten:**
- Unterstützt Rekursion nativ
- Rekursive Funktionen können mit Tail-Call-Optimierung verwendet werden

**Weiterführende Links:**
- [Scala Documentation - Functions](https://docs.scala-lang.org/tour/basics.html#functions)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
(define (factorial n)
  (if (<= n 1)
      1
      (* n (factorial (- n 1)))))

(define result (factorial 5))
```

**Besonderheiten:**
- Unterstützt Rekursion nativ
- Rekursive Funktionen können mit Tail-Call-Optimierung verwendet werden

**Weiterführende Links:**
- [Scheme Documentation - Functions](https://www.scheme.com/tspl4/start.html#./start:h0)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
func factorial(_ n: Int) -> Int {
    if n <= 1 {
        return 1
    } else {
        return n * factorial(n - 1)
    }
}

let result = factorial(5)
```

**Besonderheiten:**
- Unterstützt Rekursion nativ
- Rekursive Funktionen können mit Tail-Call-Optimierung verwendet werden

**Weiterführende Links:**
- [Swift Documentation - Functions](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/functions/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
function factorial(n: number): number {
    if (n <= 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

const result = factorial(5);
```

**Besonderheiten:**
- Unterstützt Rekursion nativ
- Rekursive Funktionen können mit Tail-Call-Optimierung verwendet werden (abhängig vom Engine)

**Weiterführende Links:**
- [TypeScript Handbook - Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
Function Factorial(n As Integer) As Integer
    If n <= 1 Then
        Return 1
    Else
        Return n * Factorial(n - 1)
    End If
End Function

Dim result As Integer = Factorial(5)
```

**Besonderheiten:**
- Unterstützt Rekursion nativ
- Rekursive Funktionen können mit Tail-Call-Optimierung verwendet werden

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Functions](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/procedures/function-procedures)

</TabItem>
<TabItem value="v" label="V">

```v
fn factorial(n int) int {
    if n <= 1 {
        return 1
    } else {
        return n * factorial(n - 1)
    }
}

result := factorial(5)
```

**Besonderheiten:**
- Unterstützt Rekursion nativ
- Rekursive Funktionen können mit Tail-Call-Optimierung verwendet werden

**Weiterführende Links:**
- [V Documentation - Functions](https://github.com/vlang/v/blob/master/doc/docs.md#functions)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```wolfram
factorial[n_] := If[n <= 1, 1, n * factorial[n - 1]]

result = factorial[5]
```

**Besonderheiten:**
- Unterstützt Rekursion nativ
- Rekursive Funktionen können mit Tail-Call-Optimierung verwendet werden

**Weiterführende Links:**
- [Wolfram Language Documentation - Functions](https://reference.wolfram.com/language/guide/Functions.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
fn factorial(n: i32) i32 {
    if (n <= 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

const result = factorial(5);
```

**Besonderheiten:**
- Unterstützt Rekursion nativ
- Rekursive Funktionen können mit Tail-Call-Optimierung verwendet werden

**Weiterführende Links:**
- [Zig Documentation - Functions](https://ziglang.org/documentation/0.11.0/#Functions)

</TabItem>
</Tabs>


## 7.2.7. Tail Call Optimization

Eine Optimierungstechnik, bei der rekursive Funktionsaufrufe im Tail-Position (als letzte Operation vor der Rückkehr) optimiert werden, um Stack-Overflows zu vermeiden und den Speicherverbrauch zu reduzieren. Der rekursive Aufruf wird durch einen Sprung ersetzt, sodass kein neuer Stack-Frame erstellt wird.

### Sprachen {#sprachen}

<Tabs availableTabs={['clojure', 'elixir', 'elm', 'erlang', 'fsharp', 'gleam', 'groovy', 'haskell', 'javascript', 'koka', 'kotlin', 'lean4', 'lua', 'mercury', 'ocaml', 'prolog', 'purescript', 'racket', 'roc', 'rust', 'scheme', 'swift']} yellowTabs={['scala']}>
<TabItem value="clojure" label="Clojure">

```clojure
(defn factorial [n]
  (letfn [(fact-helper [n acc]
            (if (<= n 1)
              acc
              (recur (dec n) (* n acc))))]
    (fact-helper n 1)))

(def result (factorial 5))
```

**Besonderheiten:**
- Unterstützt TCO über `recur` (seit Clojure 1.0)
- `recur` muss explizit verwendet werden für Tail-Recursion
- Nur innerhalb derselben Funktion oder `loop` möglich

**Weiterführende Links:**
- [Clojure Documentation - Recur](https://clojure.org/reference/special_forms#recur)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
defmodule Factorial do
    def factorial(n) do
        factorial_helper(n, 1)
    end
    
    defp factorial_helper(n, acc) when n <= 1 do
        acc
    end
    
    defp factorial_helper(n, acc) do
        factorial_helper(n - 1, n * acc)
    end
end

result = Factorial.factorial(5)
```

**Besonderheiten:**
- Unterstützt TCO nativ
- Tail-Recursive Funktionen werden automatisch optimiert
- Erlang VM optimiert Tail Calls

**Weiterführende Links:**
- [Elixir Documentation - Functions](https://elixir-lang.org/getting-started/basic-types.html#functions)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
factorial : Int -> Int
factorial n =
    let
        factHelper n acc =
            if n <= 1 then
                acc
            else
                factHelper (n - 1) (n * acc)
    in
    factHelper n 1

result = factorial 5
```

**Besonderheiten:**
- Der Elm-Compiler erkennt tail-rekursive Funktionen und wandelt sie in Schleifen im generierten JavaScript um
- Tail-Recursive Funktionen verbrauchen keinen Stack-Speicher
- Nur direkte Tail-Rekursion wird optimiert (keine gegenseitige Rekursion)

**Weiterführende Links:**
- [Elm Documentation - Functions](https://guide.elm-lang.org/core_language.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
-module(factorial).
-export([factorial/1]).

factorial(N) ->
    factorial_helper(N, 1).

factorial_helper(N, Acc) when N =< 1 ->
    Acc;
factorial_helper(N, Acc) ->
    factorial_helper(N - 1, N * Acc).

Result = factorial:factorial(5).
```

**Besonderheiten:**
- Unterstützt TCO nativ
- Tail-Recursive Funktionen werden automatisch optimiert
- Erlang VM optimiert Tail Calls

**Weiterführende Links:**
- [Erlang Documentation - Functions](https://www.erlang.org/doc/reference_manual/functions.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
let rec factorial n =
    let rec factorialHelper n acc =
        if n <= 1 then
            acc
        else
            factorialHelper (n - 1) (n * acc)
    factorialHelper n 1

let result = factorial 5
```

**Besonderheiten:**
- Unterstützt TCO nativ
- Tail-Recursive Funktionen werden automatisch optimiert
- .NET Runtime optimiert Tail Calls

**Weiterführende Links:**
- [F# Documentation - Functions](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/functions/)

</TabItem>
<TabItem value="gleam" label="Gleam">

```erlang
fn factorial(n: Int) -> Int {
  fn factorial_helper(n: Int, acc: Int) -> Int {
    case n {
      n if n <= 1 -> acc
      n -> factorial_helper(n - 1, n * acc)
    }
  }
  factorial_helper(n, 1)
}

let result = factorial(5)
```

**Besonderheiten:**
- Unterstützt TCO nativ
- Tail-Recursive Funktionen werden automatisch optimiert
- Erlang VM optimiert Tail Calls

**Weiterführende Links:**
- [Gleam Documentation - Functions](https://gleam.run/documentation/tour/functions/)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
factorial :: Int -> Int
factorial n = factorialHelper n 1
    where
        factorialHelper n acc
            | n <= 1 = acc
            | otherwise = factorialHelper (n - 1) (n * acc)

result = factorial 5
```

**Besonderheiten:**
- Unterstützt TCO nativ
- Tail-Recursive Funktionen werden automatisch optimiert
- GHC optimiert Tail Calls

**Weiterführende Links:**
- [Haskell Documentation - Functions](https://www.haskell.org/tutorial/functions.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
function factorial(n) {
    function factorialHelper(n, acc) {
        if (n <= 1) {
            return acc;
        } else {
            return factorialHelper(n - 1, n * acc);
        }
    }
    return factorialHelper(n, 1);
}

const result = factorial(5);
```

**Besonderheiten:**
- Unterstützt TCO in ES6 (seit ES2015)
- Nicht alle JavaScript-Engines implementieren TCO (z.B. V8 nicht)
- Tail-Recursive Funktionen werden nur in bestimmten Engines optimiert

**Weiterführende Links:**
- [MDN Web Docs - Tail Call Optimization](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#tail_call_optimization)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Tail Call Optimization
fun factorial(n: int, acc: int = 1): int
  if n <= 1 then acc
  else factorial(n - 1, n * acc) // Tail-rekursiver Aufruf

val result = factorial(5) // 120

// TCO für Listen-Operationen
fun sum-tail(xs: list<int>, acc: int = 0): int
  match xs
    Nil           -> acc
    Cons(x, rest) -> sum-tail(rest, acc + x) // Tail Call

val s = sum-tail([1, 2, 3, 4, 5]) // 15
```

**Besonderheiten:**
- Koka optimiert tail-rekursive Aufrufe automatisch
- Keine spezielle Annotation (wie `tailrec`) nötig
- Der Compiler kompiliert zu C und nutzt dabei TCO
- Perceus-Referenzzählung ermöglicht effiziente tail-rekursive Datenstrukturen

**Weiterführende Links:**
- [Koka Language Guide - Functions](https://koka-lang.github.io/koka/doc/book.html#sec-functions)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
tailrec fun factorial(n: Int, acc: Int = 1): Int {
    return if (n <= 1) {
        acc
    } else {
        factorial(n - 1, n * acc)
    }
}

val result = factorial(5)
```

**Besonderheiten:**
- Unterstützt TCO mit `tailrec`-Modifier (seit Kotlin 1.0)
- `tailrec` muss explizit auf der rekursiven Funktion verwendet werden
- Compiler optimiert Tail Calls nur mit `tailrec` und gibt Warnung aus, wenn Aufruf nicht in Tail-Position ist

**Weiterführende Links:**
- [Kotlin Documentation - Tail Recursive Functions](https://kotlinlang.org/docs/functions.html#tail-recursive-functions)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Tail Call Optimization
def factorial (n : Nat) (acc : Nat := 1) : Nat :=
  match n with
  | 0 => acc
  | n + 1 => factorial n ((n + 1) * acc)

def result : Nat := factorial 5 -- 120
```

**Besonderheiten:**
- Der Lean 4 Compiler optimiert tail-rekursive Funktionen automatisch
- Tail Calls werden in Schleifen umgewandelt, um Stack-Overflows zu vermeiden
- Keine explizite Annotation (wie `tailrec`) nötig — die Optimierung erfolgt automatisch
- Der Termination Checker stellt sicher, dass die Rekursion endet

**Weiterführende Links:**
- [Lean 4 Documentation - Recursion](https://lean-lang.org/lean4/doc/functions.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Tail Call Optimization
:- module tco.
:- interface.
:- import_module io.
:- pred main(io::di, io::uo) is det.
:- implementation.
:- import_module int, string.

% Tail-rekursive Funktion mit Akkumulator
:- func factorial(int) = int.
factorial(N) = factorial_acc(N, 1).

:- func factorial_acc(int, int) = int.
factorial_acc(N, Acc) =
    ( if N =< 1 then Acc
      else factorial_acc(N - 1, N * Acc)
    ).

% Tail-rekursives Prädikat
:- pred sum_to(int::in, int::in, int::out) is det.
sum_to(N, Acc, Result) :-
    ( if N =< 0 then
        Result = Acc
    else
        sum_to(N - 1, Acc + N, Result)
    ).

:- pred main(io::di, io::uo) is det.
main(!IO) :-
    io.format("5! = %d\n", [i(factorial(5))], !IO),
    sum_to(100, 0, Sum),
    io.format("sum(1..100) = %d\n", [i(Sum)], !IO).
```

**Besonderheiten:**
- Der Mercury-Compiler (Melbourne Mercury Compiler) optimiert tail-rekursive Aufrufe automatisch.
- Tail Calls in `det` und `semidet` Prädikaten werden in Schleifen umgewandelt.
- Keine spezielle Annotation erforderlich – die Optimierung geschieht automatisch.
- Akkumulator-Muster ist die empfohlene Technik für tail-rekursive Funktionen.

**Weiterführende Links:**
- [Mercury FAQ - Tail Recursion](https://www.mercurylang.org/information/doc-release/mercury_faq/index.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
let rec factorial n =
    let rec factorial_helper n acc =
        if n <= 1 then
            acc
        else
            factorial_helper (n - 1) (n * acc)
    in
    factorial_helper n 1

let result = factorial 5
```

**Besonderheiten:**
- Unterstützt TCO nativ
- Tail-Recursive Funktionen werden automatisch optimiert
- OCaml Compiler optimiert Tail Calls

**Weiterführende Links:**
- [OCaml Documentation - Functions](https://ocaml.org/docs/first-hour)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Tail-rekursive Version mit Akkumulator
factorial(N, Result) :-
    factorial_helper(N, 1, Result).

factorial_helper(0, Acc, Acc).
factorial_helper(N, Acc, Result) :-
    N > 0,
    N1 is N - 1,
    Acc1 is N * Acc,
    factorial_helper(N1, Acc1, Result).

?- factorial(5, Result).
%  Result = 120
```

**Besonderheiten:**
- Prolog-Implementierungen optimieren Last Call Optimization (LCO) automatisch
- Tail-rekursive Prädikate werden ohne zusätzlichen Stack-Verbrauch ausgeführt
- Akkumulator-Muster ist das Standardverfahren für tail-rekursive Prädikate

**Weiterführende Links:**
- [SWI-Prolog Documentation - Last Call Optimization](https://www.swi-prolog.org/pldoc/man?section=memory)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
factorial :: Int -> Int
factorial n = factorialHelper n 1
    where
        factorialHelper n acc
            | n <= 1 = acc
            | otherwise = factorialHelper (n - 1) (n * acc)

result = factorial 5
```

**Besonderheiten:**
- Unterstützt TCO nativ
- Tail-Recursive Funktionen werden automatisch optimiert
- JavaScript-Compiler optimiert Tail Calls

**Weiterführende Links:**
- [PureScript Documentation - Functions](https://book.purescript.org/chapter3.html)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
(define (factorial n)
  (define (factorial-helper n acc)
    (if (<= n 1)
        acc
        (factorial-helper (- n 1) (* n acc))))
  (factorial-helper n 1))

(define result (factorial 5))
```

**Besonderheiten:**
- Unterstützt TCO nativ
- Tail-Recursive Funktionen werden automatisch optimiert
- Racket optimiert Tail Calls

**Weiterführende Links:**
- [Racket Documentation - Functions](https://docs.racket-lang.org/guide/define.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
fn factorial(n: i32) -> i32 {
    fn factorial_helper(n: i32, acc: i32) -> i32 {
        if n <= 1 {
            acc
        } else {
            factorial_helper(n - 1, n * acc)
        }
    }
    factorial_helper(n, 1)
}

let result = factorial(5);
```

**Besonderheiten:**
- Unterstützt TCO in bestimmten Fällen
- Tail-Recursive Funktionen werden manchmal optimiert (abhängig vom Compiler)
- LLVM optimiert Tail Calls in einigen Fällen

**Weiterführende Links:**
- [Rust Book - Functions](https://doc.rust-lang.org/book/ch03-03-how-functions-work.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
(define (factorial n)
  (define (factorial-helper n acc)
    (if (<= n 1)
        acc
        (factorial-helper (- n 1) (* n acc))))
  (factorial-helper n 1))

(define result (factorial 5))
```

**Besonderheiten:**
- Unterstützt TCO nativ
- Tail-Recursive Funktionen werden automatisch optimiert
- Scheme-Spezifikation erfordert TCO

**Weiterführende Links:**
- [Scheme Documentation - Tail Calls](https://www.scheme.com/tspl4/start.html#./start:h0)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
func factorial(_ n: Int) -> Int {
    func factorialHelper(_ n: Int, _ acc: Int) -> Int {
        if n <= 1 {
            return acc
        } else {
            return factorialHelper(n - 1, n * acc)
        }
    }
    return factorialHelper(n, 1)
}

let result = factorial(5)
```

**Besonderheiten:**
- Unterstützt TCO in bestimmten Fällen
- Tail-Recursive Funktionen werden manchmal optimiert (abhängig vom Compiler)
- Swift Compiler optimiert Tail Calls in einigen Fällen

**Weiterführende Links:**
- [Swift Documentation - Functions](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/functions/)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
import groovy.transform.TailRecursive

// Tail-Call Optimization mit @TailRecursive
@TailRecursive
def factorial(BigInteger n, BigInteger acc = 1) {
    if (n <= 1) return acc
    return factorial(n - 1, n * acc)
}

println factorial(1000) // Funktioniert ohne StackOverflow
```

**Besonderheiten:**
- `@TailRecursive` AST-Transformation wandelt Tail-Rekursion in Schleife um
- Nur für direkte Tail-Calls anwendbar
- Kompilierungsfehler, wenn Methode nicht tail-rekursiv ist

**Weiterführende Links:**
- [Groovy Documentation - TailRecursive](https://docs.groovy-lang.org/latest/html/gapi/groovy/transform/TailRecursive.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Tail Call Optimization (Proper Tail Calls)
-- Lua garantiert Tail Call Optimization

-- Tail-rekursive Fakultät
function factorial(n, acc)
    acc = acc or 1
    if n <= 1 then
        return acc
    end
    return factorial(n - 1, n * acc)  -- Proper Tail Call
end

print(factorial(1000000))  -- Kein Stack Overflow

-- Zustandsmaschine mit Tail Calls
function state_a()
    print("State A")
    return state_b()    -- Proper Tail Call
end

function state_b()
    print("State B")
    return state_a()    -- Proper Tail Call (unendliche Rekursion ohne Stack Overflow)
end
```

**Besonderheiten:**
- Lua garantiert Proper Tail Calls (nicht nur Optimierung, sondern Teil der Spezifikation)
- Ein Tail Call liegt vor, wenn `return func(args)` die letzte Aktion ist
- Kein Stack-Wachstum bei Tail Calls
- Ermöglicht unbegrenzte Rekursionstiefe für Zustandsmaschinen
- Nur `return func(args)` ist ein Tail Call, nicht `return func(args) + 1` o.ä.

**Weiterführende Links:**
- [Lua Reference Manual - Function Calls](https://www.lua.org/manual/5.4/manual.html#3.4.10)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Tail Call Optimization
factorialHelper : I64, I64 -> I64
factorialHelper = \n, acc ->
    if n <= 1 then
        acc
    else
        factorialHelper (n - 1) (acc * n)

factorial : I64 -> I64
factorial = \n -> factorialHelper n 1
```

**Besonderheiten:**
- TCO wird vom Compiler automatisch angewendet
- Akkumulator-Pattern für tail-rekursive Funktionen
- Ermöglicht effiziente Rekursion

**Weiterführende Links:**
- [Roc Documentation](https://www.roc-lang.org/tutorial)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
import scala.annotation.tailrec

@tailrec
def factorial(n: Int, acc: Int = 1): Int =
{
    if (n <= 1) acc
    else factorial(n - 1, n * acc)
}

val result = factorial(5) // 120
```

**Besonderheiten:**
- `@tailrec`-Annotation garantiert Tail Call Optimization zur Kompilierzeit
- Compiler-Fehler, wenn Funktion nicht tail-rekursiv ist
- Nur direkte Selbst-Rekursion wird optimiert (keine gegenseitige Rekursion)
- Verhindert Stack Overflows bei tiefer Rekursion

**Weiterführende Links:**
- [Scala Documentation - Tail Recursion](https://docs.scala-lang.org/scala3/book/fp-functions-are-values.html)

</TabItem>
</Tabs>


## 7.2.8. Multiple Return Values / Tuples

Die Fähigkeit einer Funktion, mehrere Werte gleichzeitig zurückzugeben, typischerweise als Tupel oder strukturierte Rückgabewerte. Ermöglicht es, zusammengehörige Werte gemeinsam zu behandeln, ohne auf Out-Parameter oder Wrapper-Objekte zurückgreifen zu müssen.

### Sprachen {#sprachen}

<Tabs availableTabs={['clojure', 'common-lisp', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'elixir', 'elm', 'erlang', 'fsharp', 'gleam', 'go', 'groovy', 'haskell', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'lua', 'matlab', 'mercury', 'nim', 'ocaml', 'octave', 'perl', 'php', 'prolog', 'python', 'r', 'racket', 'roc', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'v', 'vbnet', 'wolfram-language', 'zig']}>
<TabItem value="csharp" label="C#">

```csharp
(int quotient, int remainder) Divide(int dividend, int divisor) {
    return (dividend / divisor, dividend % divisor);
}

var (quotient, remainder) = Divide(10, 3);
```

**Besonderheiten:**
- Unterstützt Tuples für Multiple Return Values (seit C# 7.0)
- Unterstützt auch ValueTuples für benannte Rückgabewerte
- Destructuring Assignment für Tuple-Zuweisung

**Weiterführende Links:**
- [Microsoft C# Documentation - Tuples](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/value-tuples)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
(defn divide [dividend divisor]
  [(quot dividend divisor) (rem dividend divisor)])

(let [[quotient remainder] (divide 10 3)]
  [quotient remainder])
```

**Besonderheiten:**
- Unterstützt Vektoren für Multiple Return Values
- Destructuring Assignment für Vektor-Zuweisung
- Funktionen können Vektoren zurückgeben

**Weiterführende Links:**
- [Clojure Documentation - Vectors](https://clojure.org/reference/data_structures#vectors)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
(defun divide (dividend divisor)
  (values (floor dividend divisor) (mod dividend divisor)))

(multiple-value-bind (quotient remainder) (divide 10 3)
  (list quotient remainder))
```

**Besonderheiten:**
- Unterstützt `values` für Multiple Return Values
- `multiple-value-bind` für Destructuring Assignment
- Native Unterstützung für Multiple Return Values

**Weiterführende Links:**
- [Common Lisp HyperSpec - Values](http://www.lispworks.com/documentation/HyperSpec/Body/f_values.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
def divide(dividend : Int32, divisor : Int32) : {Int32, Int32}
    {dividend // divisor, dividend % divisor}
end

quotient, remainder = divide(10, 3)
```

**Besonderheiten:**
- Unterstützt Tuples für Multiple Return Values
- Destructuring Assignment für Tuple-Zuweisung
- Tuple-Syntax: `{value1, value2}`

**Weiterführende Links:**
- [Crystal Documentation - Tuples](https://crystal-lang.org/reference/1.11/syntax_and_semantics/literals/tuple.html)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
#include <tuple>

std::tuple<int, int> divide(int dividend, int divisor) {
    return std::make_tuple(dividend / divisor, dividend % divisor);
}

auto [quotient, remainder] = divide(10, 3);
```

**Besonderheiten:**
- Unterstützt `std::tuple` für Multiple Return Values (seit C++11)
- Structured Bindings für Destructuring Assignment (seit C++17)
- Unterstützt auch `std::pair` für zwei Werte

**Weiterführende Links:**
- [cppreference.com - std::tuple](https://en.cppreference.com/w/cpp/utility/tuple)
- [cppreference.com - Structured Bindings](https://en.cppreference.com/w/cpp/language/structured_binding)

</TabItem>
<TabItem value="d" label="D">

```d
import std.typecons;

Tuple!(int, int) divide(int dividend, int divisor) {
    return tuple(dividend / divisor, dividend % divisor);
}

auto result = divide(10, 3);
auto quotient = result[0];
auto remainder = result[1];
```

**Besonderheiten:**
- Unterstützt `Tuple` für Multiple Return Values
- Tuple-Zugriff über Index
- Unterstützt auch Destructuring Assignment

**Weiterführende Links:**
- [D Language Specification - Tuples](https://dlang.org/phobos/std_typecons.html#.Tuple)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
(List<int> result) divide(int dividend, int divisor) {
    return [dividend ~/ divisor, dividend % divisor];
}

var result = divide(10, 3);
var quotient = result[0];
var remainder = result[1];
```

**Besonderheiten:**
- Unterstützt Listen für Multiple Return Values
- List-Zugriff über Index
- Unterstützt auch Records für benannte Rückgabewerte (seit Dart 3.0)

**Weiterführende Links:**
- [Dart Language Tour - Records](https://dart.dev/guides/language/language-tour#records)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
def divide(dividend, divisor) do
    {div(dividend, divisor), rem(dividend, divisor)}
end

{quotient, remainder} = divide(10, 3)
```

**Besonderheiten:**
- Unterstützt Tuples für Multiple Return Values
- Destructuring Assignment für Tuple-Zuweisung
- Tuple-Syntax: `{value1, value2}`

**Weiterführende Links:**
- [Elixir Documentation - Tuples](https://elixir-lang.org/getting-started/basic-types.html#tuples)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
divide : Int -> Int -> (Int, Int)
divide dividend divisor =
    (dividend // divisor, remainderBy divisor dividend)

(quotient, remainder) = divide 10 3
```

**Besonderheiten:**
- Unterstützt Tuples für Multiple Return Values
- Destructuring Assignment für Tuple-Zuweisung
- Tuple-Syntax: `(value1, value2)`

**Weiterführende Links:**
- [Elm Documentation - Tuples](https://guide.elm-lang.org/core_language.html#tuples)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
divide(Dividend, Divisor) ->
    {Dividend div Divisor, Dividend rem Divisor}.

{Quotient, Remainder} = divide(10, 3).
```

**Besonderheiten:**
- Unterstützt Tuples für Multiple Return Values
- Destructuring Assignment für Tuple-Zuweisung
- Tuple-Syntax: `{value1, value2}`

**Weiterführende Links:**
- [Erlang Documentation - Tuples](https://www.erlang.org/doc/reference_manual/data_types.html#tuple)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
let divide dividend divisor =
    (dividend / divisor, dividend % divisor)

let (quotient, remainder) = divide 10 3
```

**Besonderheiten:**
- Unterstützt Tuples für Multiple Return Values
- Destructuring Assignment für Tuple-Zuweisung
- Tuple-Syntax: `(value1, value2)`

**Weiterführende Links:**
- [F# Documentation - Tuples](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/tuples)

</TabItem>
<TabItem value="go" label="Go">

```go
func divide(dividend, divisor int) (int, int) {
    return dividend / divisor, dividend % divisor
}

quotient, remainder := divide(10, 3)
```

**Besonderheiten:**
- Unterstützt Multiple Return Values nativ
- Destructuring Assignment für Multiple Return Values
- Native Syntax ohne Tuples

**Weiterführende Links:**
- [Go Documentation - Functions](https://go.dev/tour/basics/11)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
def divide(dividend, divisor) {
    return [dividend.intdiv(divisor), dividend % divisor]
}

def (quotient, remainder) = divide(10, 3)
```

**Besonderheiten:**
- Unterstützt Listen für Multiple Return Values
- Destructuring Assignment für List-Zuweisung
- List-Syntax: `[value1, value2]`

**Weiterführende Links:**
- [Groovy Documentation - Lists](https://groovy-lang.org/groovy-dev-kit.html#_working_with_collections)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
divide :: Int -> Int -> (Int, Int)
divide dividend divisor = (dividend `div` divisor, dividend `mod` divisor)

(quotient, remainder) = divide 10 3
```

**Besonderheiten:**
- Unterstützt Tuples für Multiple Return Values
- Destructuring Assignment für Tuple-Zuweisung
- Tuple-Syntax: `(value1, value2)`

**Weiterführende Links:**
- [Haskell Documentation - Tuples](https://www.haskell.org/tutorial/more.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Mit Record (seit Java 14)
record DivisionResult(int quotient, int remainder) {}

DivisionResult divide(int dividend, int divisor) {
    return new DivisionResult(dividend / divisor, dividend % divisor);
}

var result = divide(10, 3);
int quotient = result.quotient();
int remainder = result.remainder();
```

**Besonderheiten:**
- Unterstützt Records für Multiple Return Values (seit Java 14)
- Vorher: Wrapper-Klassen oder Arrays
- Records ermöglichen benannte Rückgabewerte

**Weiterführende Links:**
- [Oracle Java Documentation - Records](https://docs.oracle.com/javase/specs/jls/se14/html/jls-8.html#jls-8.10)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
function divide(dividend, divisor) {
    return [Math.floor(dividend / divisor), dividend % divisor];
}

const [quotient, remainder] = divide(10, 3);
```

**Besonderheiten:**
- Unterstützt Arrays für Multiple Return Values
- Destructuring Assignment für Array-Zuweisung
- Array-Syntax: `[value1, value2]`

**Weiterführende Links:**
- [MDN Web Docs - Destructuring Assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
function divide(dividend::Int, divisor::Int)::Tuple{Int, Int}
    return (dividend ÷ divisor, dividend % divisor)
end

quotient, remainder = divide(10, 3)
```

**Besonderheiten:**
- Unterstützt Tuples für Multiple Return Values
- Destructuring Assignment für Tuple-Zuweisung
- Tuple-Syntax: `(value1, value2)`

**Weiterführende Links:**
- [Julia Documentation - Tuples](https://docs.julialang.org/en/v1/manual/functions/#Tuples)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Multiple Return Values (Tuples)
fun divide(dividend: int, divisor: int): (int, int)
  (dividend / divisor, dividend % divisor)

val (quotient, remainder) = divide(10, 3) // (3, 1)

// Tuple mit drei Werten
fun min-max-avg(xs: list<int>): (int, int, int)
  val mn = xs.minimum(0)
  val mx = xs.maximum(0)
  val avg = xs.sum / xs.length
  (mn, mx, avg)

val (lo, hi, avg) = min-max-avg([3, 1, 4, 1, 5]) // (1, 5, 2)
```

**Besonderheiten:**
- Koka verwendet Tuples für Multiple Return Values
- Destructuring mit `val (a, b) = ...`
- Tuples sind typisiert: `(int, string)`, `(int, int, int)` etc.
- Können auch mit benannten Feldern über Records erreicht werden

**Weiterführende Links:**
- [Koka Language Guide - Tuples](https://koka-lang.github.io/koka/doc/book.html#sec-tuples)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
fun divide(dividend: Int, divisor: Int): Pair<Int, Int> {
    return Pair(dividend / divisor, dividend % divisor)
}

val (quotient, remainder) = divide(10, 3)
```

**Besonderheiten:**
- Unterstützt `Pair` für zwei Werte
- Unterstützt auch `Triple` für drei Werte
- Destructuring Assignment für Pair/Triple-Zuweisung

**Weiterführende Links:**
- [Kotlin Documentation - Destructuring Declarations](https://kotlinlang.org/docs/destructuring-declarations.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Multiple Return Values (Produkt-Typen / Tuples)
def divide (dividend divisor : Int) : Int × Int :=
  (dividend / divisor, dividend % divisor)

def result : Int × Int := divide 10 3
def (quotient, remainder) := result
```

**Besonderheiten:**
- Lean 4 verwendet Produkt-Typen (`×` oder `Prod`) für mehrere Rückgabewerte
- Tuples werden mit `(a, b)` erstellt und mit Pattern Matching destrukturiert
- Für benannte Felder können Structures (`structure`) verwendet werden
- Verschachtelte Tuples sind möglich: `Int × Int × String`

**Weiterführende Links:**
- [Lean 4 Documentation - Structures](https://lean-lang.org/lean4/doc/structures.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
function divide(dividend, divisor)
    return math.floor(dividend / divisor), dividend % divisor
end

local quotient, remainder = divide(10, 3)
```

**Besonderheiten:**
- Unterstützt Multiple Return Values nativ
- Destructuring Assignment für Multiple Return Values
- Native Syntax ohne Tuples

**Weiterführende Links:**
- [Lua Documentation - Functions](https://www.lua.org/manual/5.4/manual.html#2.5.9)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
proc divide(dividend: int, divisor: int): (int, int) =
    return (dividend div divisor, dividend mod divisor)

let (quotient, remainder) = divide(10, 3)
```

**Besonderheiten:**
- Unterstützt Tuples für Multiple Return Values
- Destructuring Assignment für Tuple-Zuweisung
- Tuple-Syntax: `(value1, value2)`

**Weiterführende Links:**
- [Nim Documentation - Tuples](https://nim-lang.org/docs/manual.html#types-tuple-type)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
let divide dividend divisor =
    (dividend / divisor, dividend mod divisor)

let (quotient, remainder) = divide 10 3
```

**Besonderheiten:**
- Unterstützt Tuples für Multiple Return Values
- Destructuring Assignment für Tuple-Zuweisung
- Tuple-Syntax: `(value1, value2)`

**Weiterführende Links:**
- [OCaml Documentation - Tuples](https://ocaml.org/docs/first-hour)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
sub divide {
    my ($dividend, $divisor) = @_;
    return (int($dividend / $divisor), $dividend % $divisor);
}

my ($quotient, $remainder) = divide(10, 3);
```

**Besonderheiten:**
- Unterstützt Listen für Multiple Return Values
- Destructuring Assignment für List-Zuweisung
- List-Syntax: `(value1, value2)`

**Weiterführende Links:**
- [Perl Documentation - Functions](https://perldoc.perl.org/perlsub)

</TabItem>
<TabItem value="php" label="PHP">

```php
function divide($dividend, $divisor) {
    return [intval($dividend / $divisor), $dividend % $divisor];
}

list($quotient, $remainder) = divide(10, 3);
```

**Besonderheiten:**
- Unterstützt Arrays für Multiple Return Values
- Destructuring Assignment mit `list()` für Array-Zuweisung
- Array-Syntax: `[value1, value2]`

**Weiterführende Links:**
- [PHP Documentation - Arrays](https://www.php.net/manual/en/language.types.array.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Mehrere Rückgabewerte über Output-Argumente
divide(Dividend, Divisor, Quotient, Remainder) :-
    Quotient is Dividend // Divisor,
    Remainder is Dividend mod Divisor.

?- divide(10, 3, Quotient, Remainder).
%  Quotient = 3, Remainder = 1

% Alternativ über zusammengesetzte Terme (Compound Terms)
divide_pair(Dividend, Divisor, Result) :-
    Q is Dividend // Divisor,
    R is Dividend mod Divisor,
    Result = pair(Q, R).

?- divide_pair(10, 3, pair(Q, R)).
%  Q = 3, R = 1
```

**Besonderheiten:**
- Prolog gibt Werte nicht explizit zurück — stattdessen werden mehrere Output-Argumente über Unifikation gebunden
- Mehrere Rückgabewerte sind ein natürliches Konzept, da jedes Argument eines Prädikats als Output dienen kann
- Alternativ können zusammengesetzte Terme (Compound Terms) wie `pair(Q, R)` oder Listen `[Q, R]` verwendet werden
- Destructuring erfolgt automatisch durch Pattern Matching / Unifikation

**Weiterführende Links:**
- [SWI-Prolog Documentation - Arithmetic](https://www.swi-prolog.org/pldoc/man?section=arith)

</TabItem>
<TabItem value="python" label="Python">

```python
def divide(dividend, divisor):
    return dividend // divisor, dividend % divisor

quotient, remainder = divide(10, 3)
```

**Besonderheiten:**
- Unterstützt Tuples für Multiple Return Values
- Destructuring Assignment für Tuple-Zuweisung
- Tuple-Syntax: `(value1, value2)` oder `value1, value2`

**Weiterführende Links:**
- [Python Documentation - Tuples](https://docs.python.org/3/tutorial/datastructures.html#tuples-and-sequences)

</TabItem>
<TabItem value="r" label="R">

```r
divide <- function(dividend, divisor) {
    return(c(dividend %/% divisor, dividend %% divisor))
}

result <- divide(10, 3)
quotient <- result[1]
remainder <- result[2]
```

**Besonderheiten:**
- Unterstützt Vektoren für Multiple Return Values
- Vektor-Zugriff über Index
- Vektor-Syntax: `c(value1, value2)`

**Weiterführende Links:**
- [R Documentation - Vectors](https://cran.r-project.org/doc/manuals/r-release/R-intro.html#Vectors)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
(define (divide dividend divisor)
  (values (quotient dividend divisor) (remainder dividend divisor)))

(define-values (q r) (divide 10 3))
; q = 3, r = 1
```

**Besonderheiten:**
- `values` für Multiple Return Values
- `define-values` für Destructuring
- Auch `call-with-values` für funktionale Verarbeitung

**Weiterführende Links:**
- [Racket Documentation - Multiple Values](https://docs.racket-lang.org/reference/values.html)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
def divide(dividend, divisor)
    return dividend / divisor, dividend % divisor
end

quotient, remainder = divide(10, 3)
```

**Besonderheiten:**
- Unterstützt Arrays für Multiple Return Values
- Destructuring Assignment für Array-Zuweisung
- Native Syntax ohne explizite Arrays

**Weiterführende Links:**
- [Ruby Documentation - Methods](https://ruby-doc.org/core-3.1.0/Method.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
fn divide(dividend: i32, divisor: i32) -> (i32, i32) {
    (dividend / divisor, dividend % divisor)
}

let (quotient, remainder) = divide(10, 3);
```

**Besonderheiten:**
- Unterstützt Tuples für Multiple Return Values
- Destructuring Assignment für Tuple-Zuweisung
- Tuple-Syntax: `(value1, value2)`

**Weiterführende Links:**
- [Rust Book - Tuples](https://doc.rust-lang.org/book/ch03-02-data-types.html#the-tuple-type)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
def divide(dividend: Int, divisor: Int): (Int, Int) = {
    (dividend / divisor, dividend % divisor)
}

val (quotient, remainder) = divide(10, 3)
```

**Besonderheiten:**
- Unterstützt Tuples für Multiple Return Values
- Destructuring Assignment für Tuple-Zuweisung
- Tuple-Syntax: `(value1, value2)`

**Weiterführende Links:**
- [Scala Documentation - Tuples](https://docs.scala-lang.org/tour/tuples.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
(define (divide dividend divisor)
  (list (quotient dividend divisor) (remainder dividend divisor)))

(define result (divide 10 3))
(define quotient (car result))
(define remainder (cadr result))
```

**Besonderheiten:**
- Unterstützt Listen für Multiple Return Values
- List-Zugriff über Funktionen
- List-Syntax: `(list value1 value2)`

**Weiterführende Links:**
- [Scheme Documentation - Lists](https://www.scheme.com/tspl4/start.html#./start:h0)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
func divide(_ dividend: Int, _ divisor: Int) -> (Int, Int) {
    return (dividend / divisor, dividend % divisor)
}

let (quotient, remainder) = divide(10, 3)
```

**Besonderheiten:**
- Unterstützt Tuples für Multiple Return Values
- Destructuring Assignment für Tuple-Zuweisung
- Tuple-Syntax: `(value1, value2)`

**Weiterführende Links:**
- [Swift Documentation - Tuples](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/the-basics/#tuples)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
function divide(dividend: number, divisor: number): [number, number] {
    return [Math.floor(dividend / divisor), dividend % divisor];
}

const [quotient, remainder] = divide(10, 3);
```

**Besonderheiten:**
- Unterstützt Tuples für Multiple Return Values
- Destructuring Assignment für Tuple-Zuweisung
- Tuple-Syntax: `[value1, value2]`

**Weiterführende Links:**
- [TypeScript Handbook - Tuples](https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
Function Divide(dividend As Integer, divisor As Integer) As (Integer, Integer)
    Return (dividend \ divisor, dividend Mod divisor)
End Function

Dim (quotient, remainder) = Divide(10, 3)
```

**Besonderheiten:**
- Unterstützt Tuples für Multiple Return Values (seit VB.NET 15.0)
- Destructuring Assignment für Tuple-Zuweisung
- Tuple-Syntax: `(value1, value2)`

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Tuples](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/data-types/tuples)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
fn divide(dividend: i32, divisor: i32) struct { i32, i32 } {
    return .{ dividend / divisor, dividend % divisor };
}

const result = divide(10, 3);
const quotient = result[0];
const remainder = result[1];
```

**Besonderheiten:**
- Unterstützt Structs für Multiple Return Values
- Struct-Zugriff über Index
- Struct-Syntax: `struct { type1, type2 }`

**Weiterführende Links:**
- [Zig Documentation - Structs](https://ziglang.org/documentation/0.11.0/#structs)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// Multiple Return Values via Tuples
pub fn min_max(items: List(Int)) -> #(Int, Int) {
  let min = list.fold(items, 999_999, int.min)
  let max = list.fold(items, 0, int.max)
  #(min, max)
}

let #(min, max) = min_max([3, 1, 4, 1, 5])
```

**Besonderheiten:**
- Tuples werden für Multiple Return Values verwendet
- Destructuring mit `let #(a, b) = ...`
- Typ-sicher mit Type Inference

**Weiterführende Links:**
- [Gleam Documentation - Tuples](https://tour.gleam.run/data-types/tuples/)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% Multiple Return Values
function [quotient, remainder] = divmod(a, b)
    quotient = floor(a / b);
    remainder = mod(a, b);
end

[q, r] = divmod(17, 5);  % q = 3, r = 2
q = divmod(17, 5);        % Nur erster Wert
```

**Besonderheiten:**
- Mehrere Rückgabewerte mit `[a, b, c] = func()` Syntax
- Aufrufer kann weniger Werte entgegennehmen als definiert
- `nargout` gibt die Anzahl der angeforderten Rückgabewerte an

**Weiterführende Links:**
- [MATLAB Documentation - Functions](https://www.mathworks.com/help/matlab/ref/function.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Multiple Return Values über mehrere Output-Argumente
:- module multi_return.
:- interface.
:- import_module io.
:- pred main(io::di, io::uo) is det.
:- implementation.
:- import_module int, string.

% Mehrere Rückgabewerte über Output-Argumente
:- pred divmod(int::in, int::in, int::out, int::out) is det.
divmod(A, B, Quotient, Remainder) :-
    Quotient = A / B,
    Remainder = A mod B.

% Alternative: Tupel als Rückgabetyp mit func
:- func divmod_tuple(int, int) = {int, int}.
divmod_tuple(A, B) = {A / B, A mod B}.

:- pred main(io::di, io::uo) is det.
main(!IO) :-
    % Über Output-Argumente
    divmod(17, 5, Q, R),
    io.format("17 / 5 = %d Rest %d\n", [i(Q), i(R)], !IO),

    % Über Tupel
    {Q2, R2} = divmod_tuple(17, 5),
    io.format("17 / 5 = %d Rest %d\n", [i(Q2), i(R2)], !IO).
```

**Besonderheiten:**
- Mercury unterstützt mehrere Rückgabewerte über mehrere `out`-Argumente in Prädikaten.
- Alternativ können Tupel `{A, B, C}` als Rückgabetyp einer `func` verwendet werden.
- Die `out`-Argumente-Variante ist idiomatischer in Mercury.
- Das Modussystem (`in`, `out`) macht explizit, welche Argumente Eingabe und welche Ausgabe sind.

**Weiterführende Links:**
- [Mercury Language Reference - Modes](https://www.mercurylang.org/information/doc-release/mercury_ref/Modes.html)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
function [quotient, remainder] = divide(a, b)
    quotient = floor(a / b);
    remainder = mod(a, b);
end

[q, r] = divide(17, 5);  % q = 3, r = 2
```

**Besonderheiten:**
- Multiple Rückgabewerte werden in eckigen Klammern deklariert
- Aufrufer kann weniger Werte als verfügbar empfangen
- `nargout` gibt die Anzahl der angeforderten Rückgabewerte an

**Weiterführende Links:**
- [GNU Octave Documentation - Multiple Return Values](https://octave.org/doc/v8.1.0/Multiple-Return-Values.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Multiple Return Values über Tuples
divMod : I64, I64 -> (I64, I64)
divMod = \a, b -> (Num.divTrunc a b, Num.rem a b)

(quotient, remainder) = divMod 17 5

-- Oder über Records
minMax : List I64 -> { min : I64, max : I64 }
minMax = \list -> { min: List.min list, max: List.max list }
```

**Besonderheiten:**
- Tuples `(a, b)` für anonyme Rückgabewerte
- Records `{ field1, field2 }` für benannte Rückgabewerte
- Destructuring bei der Zuweisung

**Weiterführende Links:**
- [Roc Documentation](https://www.roc-lang.org/tutorial)

</TabItem>
<TabItem value="v" label="V">

```v
// Multiple Return Values
fn divide(a f64, b f64) (f64, bool) {
    if b == 0 {
        return 0.0, false
    }
    return a / b, true
}

result, ok := divide(10.0, 3.0)
if ok {
    println(result)
}
```

**Besonderheiten:**
- Mehrere Rückgabewerte mit `(Type1, Type2)` Syntax
- Destrukturierung beim Aufruf mit `,`

**Weiterführende Links:**
- [V Documentation - Functions](https://github.com/vlang/v/blob/master/doc/docs.md#functions)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Multiple Return Values via Listen *)
divmod[a_, b_] := {Quotient[a, b], Mod[a, b]}

{q, r} = divmod[17, 5];
Print[q]  (* 3 *)
Print[r]  (* 2 *)
```

**Besonderheiten:**
- Listen werden für mehrere Rückgabewerte verwendet
- Destructuring-Zuweisung extrahiert die Werte

**Weiterführende Links:**
- [Wolfram Language Documentation - Lists](https://reference.wolfram.com/language/guide/Lists.html)

</TabItem>
</Tabs>


## 7.2.9. Inline Functions

Funktionen, die vom Compiler inline expandiert werden, um den Funktionsaufruf-Overhead zu vermeiden. Der Funktionscode wird direkt an der Aufrufstelle eingefügt, was die Performance verbessern kann, aber auch die Codegröße erhöhen kann.

### Sprachen {#sprachen}

<Tabs availableTabs={['c', 'cpp', 'csharp', 'd', 'kotlin', 'lean4', 'mercury', 'nim', 'object-pascal', 'rust', 'scala', 'swift', 'v', 'zig']}>
<TabItem value="c" label="C">

```c
inline int add(int a, int b) {
    return a + b;
}

int result = add(5, 3);
```

**Besonderheiten:**
- Unterstützt `inline` Keyword (seit C99)
- Compiler kann Inline-Hinweis ignorieren
- Inline-Funktionen müssen in Header-Dateien definiert werden

**Weiterführende Links:**
- [C Documentation - Inline Functions](https://en.cppreference.com/w/c/language/inline)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
using System.Runtime.CompilerServices;

[MethodImpl(MethodImplOptions.AggressiveInlining)]
int Add(int a, int b) {
    return a + b;
}

int result = Add(5, 3);
```

**Besonderheiten:**
- Unterstützt Inline-Funktionen mit `MethodImpl` Attribute (seit C# 1.0)
- `AggressiveInlining` für aggressive Inline-Optimierung
- Compiler kann Inline-Hinweis ignorieren

**Weiterführende Links:**
- [Microsoft C# Documentation - MethodImpl](https://learn.microsoft.com/en-us/dotnet/api/system.runtime.compilerservices.methodimploptions)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
inline int add(int a, int b) {
    return a + b;
}

int result = add(5, 3);
```

**Besonderheiten:**
- Unterstützt `inline` Keyword (seit C++98)
- Compiler kann Inline-Hinweis ignorieren
- Inline-Funktionen müssen in Header-Dateien definiert werden
- `constexpr` Funktionen sind implizit inline (seit C++11)

**Weiterführende Links:**
- [cppreference.com - Inline Functions](https://en.cppreference.com/w/cpp/language/inline)

</TabItem>
<TabItem value="d" label="D">

```d
// Inline Functions
pragma(inline, true)
int add(int a, int b) {
    return a + b;
}

// Compiler kann auch automatisch inlinen
pragma(inline, false)
int noInline(int x) {
    return x * 2;
}

int result = add(5, 3);  // Compiler kann add hier inlinen
```

**Besonderheiten:**
- `pragma(inline, true)` als Hinweis für den Compiler zum Inlinen
- `pragma(inline, false)` verhindert Inlining
- Ohne Pragma entscheidet der Compiler basierend auf Heuristiken
- Kein `inline` Keyword wie in C/C++

**Weiterführende Links:**
- [D Language Specification - Inline Functions](https://dlang.org/spec/pragma.html#inline)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
inline fun add(a: Int, b: Int): Int {
    return a + b
}

val result = add(5, 3)
```

**Besonderheiten:**
- Unterstützt `inline` Keyword (seit Kotlin 1.0)
- Inline-Funktionen werden zur Compile-Zeit expandiert
- Unterstützt auch `noinline` für Parameter, die nicht inline sein sollen

**Weiterführende Links:**
- [Kotlin Documentation - Inline Functions](https://kotlinlang.org/docs/inline-functions.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Inline Functions
@[inline] def add (a b : Int) : Int := a + b

def result : Int := add 5 3

-- Aggressives Inlining
@[always_inline] def multiply (a b : Int) : Int := a * b
```

**Besonderheiten:**
- `@[inline]` markiert eine Funktion als Inline-Kandidat für den Compiler
- `@[always_inline]` erzwingt Inlining in allen Fällen
- `@[noinline]` verhindert Inlining explizit
- Ohne Attribut entscheidet der Compiler basierend auf Heuristiken

**Weiterführende Links:**
- [Lean 4 Documentation - Attributes](https://lean-lang.org/lean4/doc/attributes.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Inline Functions über pragma inline
:- module inline_example.
:- interface.
:- import_module io.
:- pred main(io::di, io::uo) is det.
:- implementation.
:- import_module int, string.

:- func add(int, int) = int.
:- pragma inline(add/2).
add(A, B) = A + B.

:- func square(int) = int.
:- pragma inline(square/1).
square(X) = X * X.

:- pred main(io::di, io::uo) is det.
main(!IO) :-
    Result = add(5, 3),
    io.format("add(5, 3) = %d\n", [i(Result)], !IO),
    io.format("square(4) = %d\n", [i(square(4))], !IO).
```

**Besonderheiten:**
- `:- pragma inline(name/arity)` markiert eine Funktion oder ein Prädikat für Inlining.
- Der Compiler ersetzt den Aufruf durch den Funktionskörper an der Aufrufstelle.
- `:- pragma no_inline(name/arity)` verhindert Inlining explizit.
- Inlining ist besonders nützlich für kleine, häufig aufgerufene Funktionen.

**Weiterführende Links:**
- [Mercury Language Reference - Inlining pragmas](https://www.mercurylang.org/information/doc-release/mercury_ref/Inlining.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
proc add(a: int, b: int): int {.inline.} =
    return a + b

var result = add(5, 3)
```

**Besonderheiten:**
- Unterstützt `inline` Pragmas
- Compiler kann Inline-Hinweis ignorieren
- Inline-Funktionen werden zur Compile-Zeit expandiert

**Weiterführende Links:**
- [Nim Documentation - Pragmas](https://nim-lang.org/docs/manual.html#pragmas)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
#[inline]
fn add(a: i32, b: i32) -> i32 {
    a + b
}

let result = add(5, 3);
```

**Besonderheiten:**
- Unterstützt `#[inline]` Attribute (seit Rust 1.0)
- Unterstützt auch `#[inline(always)]` für aggressive Inline-Optimierung
- Compiler kann Inline-Hinweis ignorieren

**Weiterführende Links:**
- [Rust Book - Inline Attributes](https://doc.rust-lang.org/reference/attributes/codegen.html#the-inline-attribute)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
@inline(__always)
func add(_ a: Int, _ b: Int) -> Int {
    return a + b
}

let result = add(5, 3)
```

**Besonderheiten:**
- Unterstützt `@inline(__always)` Attribute (seit Swift 1.0)
- Unterstützt auch `@inline(never)` um Inlining zu verhindern
- Compiler kann Inline-Hinweis ignorieren

**Weiterführende Links:**
- [Swift Documentation - Attributes](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/attributes/)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
inline fn add(a: i32, b: i32) i32 {
    return a + b;
}

const result = add(5, 3);
```

**Besonderheiten:**
- Unterstützt `inline` Keyword
- Inline-Funktionen werden zur Compile-Zeit expandiert
- Compiler kann Inline-Hinweis ignorieren

**Weiterführende Links:**
- [Zig Documentation - Functions](https://ziglang.org/documentation/0.11.0/#Functions)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Inline Functions (seit Delphi 2005, Free Pascal 2.6.0)
function Max(a, b: Integer): Integer; inline;
begin
  if a > b then
    Result := a
  else
    Result := b;
end;

var
  result: Integer;
begin
  result := Max(10, 20);  // Wird vom Compiler inline expandiert
end;
```

**Besonderheiten:**
- `inline`-Direktive als Hinweis an den Compiler
- Compiler entscheidet, ob tatsächlich inlined wird
- Seit Delphi 2005 und Free Pascal 2.6.0

**Weiterführende Links:**
- [Delphi Documentation - Inline](https://docwiki.embarcadero.com/RADStudio/en/Inline_keyword)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Inline Functions (seit Scala 3)
inline def add(a: Int, b: Int): Int =
{
    a + b
}

val result = add(5, 3) // Wird zur Kompilierzeit inlined
```

**Besonderheiten:**
- `inline def` garantiert Inlining (kein Hinweis wie in C/C++)
- Kompilierzeit-Auswertung möglich bei konstanten Argumenten
- Wird auch für Metaprogramming verwendet (inline matches, inline if)
- Seit Scala 3.0 verfügbar

**Weiterführende Links:**
- [Scala 3 Documentation - Inline](https://docs.scala-lang.org/scala3/reference/metaprogramming/inline.html)

</TabItem>
<TabItem value="v" label="V">

```v
// Inline Functions
@[inline]
fn max(a int, b int) int {
    return if a > b { a } else { b }
}

result := max(10, 20)
```

**Besonderheiten:**
- `@[inline]` Attribut für Inline-Hinweis
- Compiler-Hinweis, keine Garantie
- Nützlich für kleine, häufig aufgerufene Funktionen

**Weiterführende Links:**
- [V Documentation - Attributes](https://github.com/vlang/v/blob/master/doc/docs.md#attributes)

</TabItem>
</Tabs>


## 7.2.10. Scope Functions (let, run, with, apply, also)

Spezielle Funktionen, die einen temporären Scope für ein Objekt erstellen und Operationen auf diesem Objekt ausführen. Sie ermöglichen es, Code lesbarer und konziser zu gestalten, indem sie einen Kontext für Operationen bereitstellen.

### Sprachen {#sprachen}

<Tabs availableTabs={['kotlin']} orangeTabs={['rust', 'scala', 'swift']}>
<TabItem value="kotlin" label="Kotlin">

```kotlin
data class Person(var name: String, var age: Int)

val person = Person("Alice", 25)

// let: Führt Operationen aus und gibt das Ergebnis zurück
val result1 = person.let { it.name.uppercase() }

// run: Führt Operationen aus und gibt das Ergebnis zurück (mit this)
val result2 = person.run { name.uppercase() }

// with: Führt Operationen aus und gibt das Ergebnis zurück (mit this, nicht als Extension)
val result3 = with(person) { name.uppercase() }

// apply: Modifiziert das Objekt und gibt es zurück (mit this)
val result4 = person.apply { age = 30 }

// also: Führt Operationen aus und gibt das ursprüngliche Objekt zurück (mit it)
val result5 = person.also { println(it.name) }
```

**Besonderheiten:**
- Unterstützt fünf Scope Functions: `let`, `run`, `with`, `apply`, `also` (seit Kotlin 1.0)
- `let` und `also` verwenden `it` als Parameter
- `run`, `with`, und `apply` verwenden `this` als Receiver
- Unterschiedliche Rückgabewerte: `let`, `run`, `with` geben das Ergebnis zurück, `apply` und `also` geben das Objekt zurück

**Weiterführende Links:**
- [Kotlin Documentation - Scope Functions](https://kotlinlang.org/docs/scope-functions.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
struct Person {
    name: String,
    age: i32,
}

let mut person = Person { name: "Alice".to_string(), age: 25 };

// Ähnliches Konzept mit Closures
let result1 = {
    let name = person.name.clone();
    name.to_uppercase()
};

// Oder mit Methoden
let result2 = person.name.to_uppercase();

// Modifikation mit Closure
let result3 = {
    person.age = 30;
    &person
};
```

**Besonderheiten:**
- Unterstützt ähnliche Konzepte mit Closures und Blocks
- Keine nativen Scope Functions wie in Kotlin
- Closures können ähnliche Funktionalität bereitstellen

**Weiterführende Links:**
- [Rust Book - Closures](https://doc.rust-lang.org/book/ch13-01-closures.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
case class Person(var name: String, var age: Int)

val person = Person("Alice", 25)

// Ähnliches Konzept mit Methoden
val result1 = person.name.toUpperCase

// Oder mit Blocks
val result2 = {
    val name = person.name
    name.toUpperCase
}

// Modifikation
val result3 = {
    person.age = 30
    person
}
```

**Besonderheiten:**
- Unterstützt ähnliche Konzepte mit Blocks und Methoden
- Keine nativen Scope Functions wie in Kotlin
- Blocks können ähnliche Funktionalität bereitstellen

**Weiterführende Links:**
- [Scala Documentation - Blocks](https://docs.scala-lang.org/tour/basics.html#blocks)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
struct Person {
    var name: String
    var age: Int
}

var person = Person(name: "Alice", age: 25)

// Ähnliches Konzept mit Closures
let result1 = { person.name.uppercased() }()

// Oder mit Methoden
let result2 = person.name.uppercased()

// Modifikation mit Closure
let result3 = {
    person.age = 30
    return person
}()
```

**Besonderheiten:**
- Unterstützt ähnliche Konzepte mit Closures
- Keine nativen Scope Functions wie in Kotlin
- Closures können ähnliche Funktionalität bereitstellen

**Weiterführende Links:**
- [Swift Documentation - Closures](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/closures/)

</TabItem>
</Tabs>

