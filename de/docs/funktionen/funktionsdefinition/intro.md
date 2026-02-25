---
slug: /funktionen/funktionsdefinition
title: 7.1. Funktionsdefinition
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 7.1. Funktionsdefinition

Definition und Deklaration von Funktionen.

## 7.1.1. Named Functions

Funktionen mit einem Namen, die definiert und dann an verschiedenen Stellen im Code aufgerufen werden können. Sie ermöglichen es, Code in wiederverwendbare Einheiten zu strukturieren.

### Sprachen {#sprachen}

<Tabs availableTabs={['ada', 'c', 'carbon', 'clojure', 'common-lisp', 'crystal', 'csharp', 'cpp', 'd', 'dart', 'eiffel', 'elixir', 'elm', 'erlang', 'fsharp', 'fortran', 'gleam', 'go', 'groovy', 'haskell', 'haxe', 'idris', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'lua', 'matlab', 'mercury', 'mojo', 'nim', 'objective-c', 'object-pascal', 'ocaml', 'octave', 'odin', 'perl', 'php', 'prolog', 'purescript', 'python', 'r', 'racket', 'roc', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'vbnet', 'v', 'wolfram-language', 'zig']}>
<TabItem value="ada" label="Ada">

```ada
function To_Upper(Item : String) return String is
begin
    return Ada.Characters.Handling.To_Upper(Item);
end To_Upper;

Result : String := To_Upper("Apfel");
```

**Besonderheiten:**
- Funktionen müssen einen Rückgabetyp haben
- Unterstützt sowohl Funktionen als auch Prozeduren

**Weiterführende Links:**
- [Ada Documentation - Subprograms](https://learn.adacore.com/courses/intro-to-ada/chapters/subprograms.html)

</TabItem>
<TabItem value="c" label="C">

```c
char* to_upper(char* item) {
    for (int i = 0; item[i]; i++) {
        item[i] = toupper(item[i]);
    }
    return item;
}

char result[] = "Apfel";
to_upper(result);
```

**Besonderheiten:**
- Funktionen müssen vor ihrer Verwendung deklariert werden
- Unterstützt Funktionszeiger

**Weiterführende Links:**
- [C Documentation - Functions](https://en.cppreference.com/w/c/language/functions)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
fn ToUpper(item: String) -> String {
    return item.ToUpper();
}

var result: String = ToUpper("Apfel");
```

**Besonderheiten:**
- Experimentelle Sprache, Syntax kann sich noch ändern
- C++-ähnliche Syntax mit modernen Features

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
(defn to-upper [item]
  (.toUpperCase item))

(def result (to-upper "Apfel"))
```

**Besonderheiten:**
- Funktionen sind First-Class-Objekte
- Unterstützt Multimethoden und Polymorphismus

**Weiterführende Links:**
- [Clojure Documentation - Functions](https://clojure.org/reference/functions)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
(defun to-upper (item)
  (string-upcase item))

(defvar result (to-upper "Apfel"))
```

**Besonderheiten:**
- Funktionen sind First-Class-Objekte
- Unterstützt Multiple Dispatch

**Weiterführende Links:**
- [Common Lisp HyperSpec - Functions](http://www.lispworks.com/documentation/HyperSpec/Body/f_fun.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
def to_upper(item : String) : String
  item.upcase
end

result = to_upper("Apfel")
```

**Besonderheiten:**
- Ruby-ähnliche Syntax
- Unterstützt Method Overloading

**Weiterführende Links:**
- [Crystal Documentation - Methods](https://crystal-lang.org/reference/1.11/syntax_and_semantics/methods.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
string ToUpper(string item)
{
    return item.ToUpper();
}

string result = ToUpper("Apfel");
```

**Besonderheiten:**
- Unterstützt Method Overloading
- Kann als statische oder Instanzmethoden definiert werden

**Weiterführende Links:**
- [Microsoft C# Documentation - Methods](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/methods)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
std::string toUpper(const std::string& item) {
    std::string result = item;
    std::transform(result.begin(), result.end(), result.begin(), ::toupper);
    return result;
}

std::string result = toUpper("Apfel");
```

**Besonderheiten:**
- Unterstützt Function Overloading
- Kann inline definiert werden

**Weiterführende Links:**
- [cppreference.com - Functions](https://en.cppreference.com/w/cpp/language/functions)

</TabItem>
<TabItem value="d" label="D">

```d
string toUpper(string item) {
    import std.string : toUpper;
    return item.toUpper();
}

string result = toUpper("Apfel");
```

**Besonderheiten:**
- Unterstützt Function Overloading
- Kann als Template-Funktionen definiert werden

**Weiterführende Links:**
- [D Language Specification - Functions](https://dlang.org/spec/function.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
String toUpper(String item) {
    return item.toUpperCase();
}

String result = toUpper("Apfel");
```

**Besonderheiten:**
- Unterstützt Named Parameters
- Kann als Top-Level-Funktionen oder Methoden definiert werden

**Weiterführende Links:**
- [Dart Documentation - Functions](https://dart.dev/guides/language/language-tour#functions)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
to_upper (item: STRING): STRING
    do
        Result := item.as_upper
    end

result: STRING
    do
        Result := to_upper("Apfel")
    end
```

**Besonderheiten:**
- Unterstützt Design by Contract (Preconditions, Postconditions)
- Funktionen müssen einen Rückgabetyp haben

**Weiterführende Links:**
- [Eiffel Documentation - Routines](https://www.eiffel.org/doc/eiffel/Routines)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
def to_upper(item) do
    String.upcase(item)
end

result = to_upper("Apfel")
```

**Besonderheiten:**
- Funktionen sind First-Class-Objekte
- Unterstützt Pattern Matching in Funktionsköpfen

**Weiterführende Links:**
- [Elixir Documentation - Functions](https://elixir-lang.org/getting-started/basic-types.html#functions)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
toUpper : String -> String
toUpper item =
    String.toUpper item

result = toUpper "Apfel"
```

**Besonderheiten:**
- Funktionale Sprache mit expliziten Typannotationen
- Unterstützt Currying

**Weiterführende Links:**
- [Elm Documentation - Functions](https://guide.elm-lang.org/core_language.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
to_upper(Item) ->
    string:uppercase(Item).

Result = to_upper("Apfel").
```

**Besonderheiten:**
- Funktionen werden in Modulen definiert
- Unterstützt Pattern Matching in Funktionsköpfen

**Weiterführende Links:**
- [Erlang Documentation - Functions](https://www.erlang.org/doc/reference_manual/functions.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
let toUpper (item: string) : string =
    item.ToUpper()

let result = toUpper "Apfel"
```

**Besonderheiten:**
- Funktionale Sprache mit First-Class-Funktionen
- Unterstützt Currying und Partial Application

**Weiterführende Links:**
- [F# Documentation - Functions](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/functions/)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
function to_upper(item) result(result_str)
    character(len=*), intent(in) :: item
    character(len=len(item)) :: result_str
    integer :: i
    
    do i = 1, len(item)
        result_str(i:i) = achar(iachar(item(i:i)) - 32)
    end do
end function to_upper

character(len=5) :: result
result = to_upper("Apfel")
```

**Besonderheiten:**
- Funktionen müssen einen Rückgabetyp haben
- Unterstützt sowohl Funktionen als auch Subroutinen

**Weiterführende Links:**
- [Fortran Documentation - Functions](https://gcc.gnu.org/onlinedocs/gfortran/Function.html)

</TabItem>
<TabItem value="gleam" label="Gleam">

```erlang
pub fn to_upper(item: String) -> String {
    string.uppercase(item)
}

let result = to_upper("Apfel")
```

**Besonderheiten:**
- Funktionale Sprache mit expliziten Typannotationen
- Funktionen sind First-Class-Objekte

**Weiterführende Links:**
- [Gleam Documentation - Functions](https://gleam.run/documentation/tour/functions/)

</TabItem>
<TabItem value="go" label="Go">

```go
func toUpper(item string) string {
    return strings.ToUpper(item)
}

result := toUpper("Apfel")
```

**Besonderheiten:**
- Unterstützt Multiple Return Values
- Funktionen sind First-Class-Objekte

**Weiterführende Links:**
- [Go Documentation - Functions](https://go.dev/ref/spec#Function_declarations)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
def toUpper(item) {
    item.toUpperCase()
}

def result = toUpper("Apfel")
```

**Besonderheiten:**
- Unterstützt sowohl statische als auch dynamische Typisierung
- Kann als Methoden oder Closures definiert werden

**Weiterführende Links:**
- [Groovy Documentation - Methods](https://groovy-lang.org/structure.html#_methods)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
toUpper :: String -> String
toUpper item = map toUpper item

result = toUpper "Apfel"
```

**Besonderheiten:**
- Funktionale Sprache mit expliziten Typannotationen
- Unterstützt Currying

**Weiterführende Links:**
- [Haskell Documentation - Functions](https://www.haskell.org/tutorial/functions.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
function toUpper(item:String):String {
    return item.toUpperCase();
}

var result = toUpper("Apfel");
```

**Besonderheiten:**
- Cross-Platform-Kompilierung
- Funktionen können auf Modul-Ebene oder als Klassenmethoden definiert werden

**Weiterführende Links:**
- [Haxe Documentation - Functions](https://haxe.org/manual/types-function.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Benötigt: import Data.String
toUpperCase : String -> String
toUpperCase item = toUpper item

result : String
result = toUpperCase "Apfel"
```

**Besonderheiten:**
- Funktionale Sprache mit abhängigen Typen
- Unterstützt Currying

**Weiterführende Links:**
- [Idris 2 Documentation - Functions](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html)

</TabItem>
<TabItem value="java" label="Java">

```java
static String toUpper(String item) {
    return item.toUpperCase();
}

String result = toUpper("Apfel");
```

**Besonderheiten:**
- Funktionen müssen Teil einer Klasse sein
- Unterstützt Method Overloading

**Weiterführende Links:**
- [Oracle Java Documentation - Methods](https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
function toUpper(item) {
    return item.toUpperCase();
}

const result = toUpper("Apfel");
```

**Besonderheiten:**
- Funktionen sind First-Class-Objekte
- Unterstützt Function Hoisting

**Weiterführende Links:**
- [MDN Web Docs - Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
function to_upper(item)
    uppercase(item)
end

result = to_upper("Apfel")
```

**Besonderheiten:**
- Unterstützt Multiple Dispatch
- Funktionen sind First-Class-Objekte

**Weiterführende Links:**
- [Julia Documentation - Functions](https://docs.julialang.org/en/v1/manual/functions/)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Named Functions
fun to-upper(item: string): string
  item.to-upper

val result = to-upper("Apfel")

// Funktion mit mehreren Parametern
fun add(x: int, y: int): int
  x + y

// Funktion mit Effekt-Annotation
fun greet(name: string): console ()
  println("Hallo, " ++ name)
```

**Besonderheiten:**
- Funktionen werden mit `fun` definiert
- Der Rückgabetyp steht nach dem `:`
- Effekte werden im Funktionstyp annotiert (z.B. `console`)
- Der letzte Ausdruck ist der implizite Rückgabewert
- Bindestriche in Funktionsnamen erlaubt (`to-upper`)

**Weiterführende Links:**
- [Koka Language Guide - Functions](https://koka-lang.github.io/koka/doc/book.html#sec-functions)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
fun toUpper(item: String): String {
    return item.uppercase()
}

val result = toUpper("Apfel")
```

**Besonderheiten:**
- Unterstützt Extension Functions
- Kann als Top-Level-Funktionen oder Methoden definiert werden

**Weiterführende Links:**
- [Kotlin Documentation - Functions](https://kotlinlang.org/docs/functions.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```haskell
def toUpper (item : String) : String :=
  item.map Char.toUpper

#eval toUpper "Apfel"  -- "APFEL"
```

**Besonderheiten:**
- Funktionen werden mit `def` definiert
- Rückgabetyp wird mit `: Typ` annotiert
- `:=` trennt Signatur von Implementierung
- Funktionen sind standardmäßig pure

**Weiterführende Links:**
- [Lean 4 Documentation - Defining Functions](https://lean-lang.org/lean4/doc/functions.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
function to_upper(item)
    return string.upper(item)
end

local result = to_upper("Apfel")
```

**Besonderheiten:**
- Funktionen sind First-Class-Objekte
- Unterstützt Multiple Return Values

**Weiterführende Links:**
- [Lua Documentation - Functions](https://www.lua.org/manual/5.4/manual.html#3.4.11)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
function result = to_upper(item)
    result = upper(item);
end

result = to_upper("Apfel");
```

**Besonderheiten:**
- Funktionen müssen in separaten Dateien definiert werden (außer lokale Funktionen)
- Unterstützt sowohl Funktionen als auch Skripte

**Weiterführende Links:**
- [MATLAB Documentation - Functions](https://www.mathworks.com/help/matlab/ref/function.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
:- func to_upper(string) = string.
to_upper(Item) = string.to_upper(Item).
```

**Besonderheiten:**
- Funktionsdeklaration mit `:- func` gefolgt von der Definition
- Mercury unterscheidet zwischen Funktionen (`func`) und Prädikaten (`pred`)
- Starke statische Typisierung

**Weiterführende Links:**
- [Mercury Language Reference - Functions](https://mercurylang.org/information/doc-latest/mercury_ref/Functions.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
fn to_upper(item: String) -> String:
    return item.upper()

var result = to_upper("Apfel")
```

**Besonderheiten:**
- Python-ähnliche Syntax mit statischer Typisierung
- Unterstützt sowohl `fn` als auch `def` Funktionen

**Weiterführende Links:**
- [Mojo Documentation - Functions](https://docs.modular.com/mojo/manual/functions/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
proc toUpper(item: string): string =
    item.toUpper()

let result = toUpper("Apfel")
```

**Besonderheiten:**
- Unterstützt sowohl `proc` als auch `func` (pure functions)
- Kann als Methoden definiert werden

**Weiterführende Links:**
- [Nim Documentation - Procedures](https://nim-lang.org/docs/manual.html#procedures)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
NSString* toUpper(NSString* item) {
    return [item uppercaseString];
}

NSString* result = toUpper(@"Apfel");
```

**Besonderheiten:**
- Unterstützt sowohl C-Funktionen als auch Objective-C-Methoden
- Methoden werden in Klassen definiert

**Weiterführende Links:**
- [Objective-C Documentation - Functions](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/DefiningClasses/DefiningClasses.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
function ToUpper(const item: string): string;
begin
    Result := UpperCase(item);
end;

var result: string;
result := ToUpper('Apfel');
```

**Besonderheiten:**
- Unterstützt sowohl Funktionen als auch Prozeduren
- Funktionen müssen einen Rückgabetyp haben

**Weiterführende Links:**
- [Object Pascal Documentation - Functions](https://docwiki.embarcadero.com/RADStudio/en/Procedures_and_Functions)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
let to_upper (item: string) : string =
    String.uppercase_ascii item

let result = to_upper "Apfel"
```

**Besonderheiten:**
- Funktionale Sprache mit First-Class-Funktionen
- Unterstützt Currying

**Weiterführende Links:**
- [OCaml Documentation - Functions](https://ocaml.org/docs/first-hour#functions)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
function result = to_upper(item)
    result = toupper(item);
end

result = to_upper("Apfel");
```

**Besonderheiten:**
- MATLAB-ähnliche Syntax
- Funktionen müssen in separaten Dateien definiert werden

**Weiterführende Links:**
- [Octave Documentation - Functions](https://octave.org/doc/v8.1.0/Functions-and-Scripts.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
to_upper :: proc(item: string) -> string {
    return strings.to_upper(item)
}

result := to_upper("Apfel")
```

**Besonderheiten:**
- Unterstützt sowohl Prozeduren als auch Funktionen
- Funktionen müssen einen Rückgabetyp haben

**Weiterführende Links:**
- [Odin Documentation - Procedures](https://odin-lang.org/docs/overview/#procedures)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
sub to_upper {
    my $item = shift;
    return uc($item);
}

my $result = to_upper("Apfel");
```

**Besonderheiten:**
- Unterstützt sowohl Funktionen als auch Subroutinen
- Funktionen sind First-Class-Objekte

**Weiterführende Links:**
- [Perl Documentation - Functions](https://perldoc.perl.org/perlsub)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
function toUpper($item) {
    return strtoupper($item);
}

$result = toUpper("Apfel");
```

**Besonderheiten:**
- Funktionen sind First-Class-Objekte
- Unterstützt sowohl Funktionen als auch Methoden

**Weiterführende Links:**
- [PHP Documentation - Functions](https://www.php.net/manual/en/functions.user-defined.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
to_upper(Item, Result) :-
    upcase_atom(Item, Result).

?- to_upper(apfel, Result).
%  Result = 'APFEL'
```

**Besonderheiten:**
- Prolog definiert Prädikate (Relationen) statt Funktionen
- Prädikate haben keinen Rückgabewert — Ergebnisse werden durch Unifikation von Argumenten gebunden
- Prädikate werden mit `:-` definiert (Regeln) oder als Fakten ohne Body

**Weiterführende Links:**
- [SWI-Prolog Documentation - Defining Predicates](https://www.swi-prolog.org/pldoc/man?section=predicate)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Benötigt: import Data.String as String
toUpper :: String -> String
toUpper item = String.toUpper item

result :: String
result = toUpper "Apfel"
```

**Besonderheiten:**
- Funktionale Sprache mit expliziten Typannotationen
- Unterstützt Currying

**Weiterführende Links:**
- [PureScript Documentation - Functions](https://book.purescript.org/chapter3.html)

</TabItem>
<TabItem value="python" label="Python">

```python
def to_upper(item):
    return item.upper()

result = to_upper("Apfel")
```

**Besonderheiten:**
- Funktionen sind First-Class-Objekte
- Unterstützt sowohl Funktionen als auch Methoden

**Weiterführende Links:**
- [Python Documentation - Functions](https://docs.python.org/3/tutorial/controlflow.html#defining-functions)

</TabItem>
<TabItem value="r" label="R">

```r
to_upper <- function(item) {
    toupper(item)
}

result <- to_upper("Apfel")
```

**Besonderheiten:**
- Funktionen sind First-Class-Objekte
- Unterstützt sowohl Funktionen als auch Methoden

**Weiterführende Links:**
- [R Documentation - Functions](https://cran.r-project.org/doc/manuals/r-release/R-lang.html#Function-objects)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
(define (to-upper item)
    (string-upcase item))

(define result (to-upper "Apfel"))
```

**Besonderheiten:**
- Funktionale Sprache mit First-Class-Funktionen
- Unterstützt sowohl Funktionen als auch Prozeduren

**Weiterführende Links:**
- [Racket Documentation - Functions](https://docs.racket-lang.org/guide/define.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
toUpper : Str -> Str
toUpper = \item -> Str.toUpper item

result : Str
result = toUpper "Apfel"
```

**Besonderheiten:**
- Funktionale Sprache mit expliziten Typannotationen
- Funktionen werden als Bindungen von Lambda-Ausdrücken definiert

**Weiterführende Links:**
- [Roc Documentation - Functions](https://www.roc-lang.org/tutorial#defining-functions)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
def to_upper(item)
    item.upcase
end

result = to_upper("Apfel")
```

**Besonderheiten:**
- Funktionen sind First-Class-Objekte
- Unterstützt sowohl Funktionen als auch Methoden

**Weiterführende Links:**
- [Ruby Documentation - Methods](https://docs.ruby-lang.org/en/master/syntax/methods_rdoc.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
fn to_upper(item: &str) -> String {
    item.to_uppercase()
}

let result = to_upper("Apfel");
```

**Besonderheiten:**
- Unterstützt sowohl Funktionen als auch Methoden
- Funktionen können als Closures definiert werden

**Weiterführende Links:**
- [Rust Book - Functions](https://doc.rust-lang.org/book/ch03-03-functions.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
def toUpper(item: String): String = {
    item.toUpperCase
}

val result = toUpper("Apfel")
```

**Besonderheiten:**
- Funktionale und objektorientierte Sprache
- Unterstützt sowohl Funktionen als auch Methoden

**Weiterführende Links:**
- [Scala Documentation - Functions](https://docs.scala-lang.org/tour/functions.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
(define (to-upper item)
    (string-upcase item))

(define result (to-upper "Apfel"))
```

**Besonderheiten:**
- Funktionale Sprache mit First-Class-Funktionen
- Unterstützt sowohl Funktionen als auch Prozeduren

**Weiterführende Links:**
- [Scheme Documentation - Functions](https://www.scheme.com/tspl4/start.html#./start:h0)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
func toUpper(item: String) -> String {
    return item.uppercased()
}

let result = toUpper(item: "Apfel")
```

**Besonderheiten:**
- Unterstützt sowohl Funktionen als auch Methoden
- Funktionen können als Closures definiert werden

**Weiterführende Links:**
- [Swift Documentation - Functions](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/functions/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
function toUpper(item: string): string {
    return item.toUpperCase();
}

const result = toUpper("Apfel");
```

**Besonderheiten:**
- Unterstützt vollständige Typannotationen
- Funktionen sind First-Class-Objekte

**Weiterführende Links:**
- [TypeScript Handbook - Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
Function ToUpper(item As String) As String
    Return item.ToUpper()
End Function

Dim result As String = ToUpper("Apfel")
```

**Besonderheiten:**
- Unterstützt sowohl Funktionen als auch Subroutinen
- Funktionen müssen einen Rückgabetyp haben

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Functions](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/procedures/function-procedures)

</TabItem>
<TabItem value="v" label="V">

```v
fn to_upper(item string) string {
    return item.to_upper()
}

result := to_upper("Apfel")
```

**Besonderheiten:**
- Unterstützt sowohl Funktionen als auch Methoden
- Funktionen müssen einen Rückgabetyp haben

**Weiterführende Links:**
- [V Documentation - Functions](https://github.com/vlang/v/blob/master/doc/docs.md#functions)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```wolfram
toUpper[item_] := ToUpperCase[item]

result = toUpper["Apfel"]
```

**Besonderheiten:**
- Unterstützt Pattern Matching in Funktionsdefinitionen
- Funktionen sind First-Class-Objekte

**Weiterführende Links:**
- [Wolfram Language Documentation - Functions](https://reference.wolfram.com/language/guide/FunctionsAndPrograms.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
fn toUpper(item: []const u8) []const u8 {
    // Implementation würde hier stehen
    return item;
}

const result = toUpper("Apfel");
```

**Besonderheiten:**
- Unterstützt sowohl Funktionen als auch Methoden
- Funktionen müssen einen Rückgabetyp haben

**Weiterführende Links:**
- [Zig Documentation - Functions](https://ziglang.org/documentation/0.11.0/#Functions)

</TabItem>
</Tabs>


## 7.1.2. Anonymous Functions / Lambdas

### Anonymous Functions


Funktionen ohne Namen, die direkt definiert und verwendet werden können. Sie werden oft als Argumente an andere Funktionen übergeben oder in Variablen gespeichert.


<Tabs availableTabs={['ada', 'carbon', 'clojure', 'common-lisp', 'crystal', 'csharp', 'cpp', 'd', 'dart', 'eiffel', 'elixir', 'elm', 'erlang', 'fsharp', 'gleam', 'go', 'groovy', 'haskell', 'haxe', 'idris', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'lua', 'matlab', 'mercury', 'mojo', 'nim', 'objective-c', 'object-pascal', 'ocaml', 'octave', 'odin', 'perl', 'php', 'purescript', 'python', 'r', 'racket', 'roc', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'vbnet', 'v', 'wolfram-language']} orangeTabs={['c', 'fortran', 'zig']}>
<TabItem value="ada" label="Ada">

```ada
type String_Func is access function(Item : String) return String;

function Apply_Func(Func : String_Func; Item : String) return String is
begin
    return Func(Item);
end Apply_Func;

Result : String := Apply_Func(
    new String_Func'(function(Item : String) return String is
        begin
            return Ada.Characters.Handling.To_Upper(Item);
        end),
    "Apfel"
);
```

**Besonderheiten:**
- Anonyme Funktionen werden über Access-Typen realisiert
- Erfordert explizite Typdefinitionen

**Weiterführende Links:**
- [Ada Documentation - Access Types](https://learn.adacore.com/courses/intro-to-ada/chapters/access_types.html)

</TabItem>
<TabItem value="c" label="C">

```c
typedef char* (*StringFunc)(char*);

char* apply_func(StringFunc func, char* item) {
    return func(item);
}

char* to_upper_impl(char* item) {
    for (int i = 0; item[i]; i++) {
        item[i] = toupper(item[i]);
    }
    return item;
}

char result[] = "Apfel";
apply_func(to_upper_impl, result);
```

**Besonderheiten:**
- Anonyme Funktionen werden über Funktionszeiger realisiert
- Keine direkte Unterstützung für Closures

**Weiterführende Links:**
- [C Documentation - Function Pointers](https://en.cppreference.com/w/c/language/pointer#Function_pointers)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
fn ApplyFunc(func: fn(String) -> String, item: String) -> String {
    return func(item);
}

var result = ApplyFunc(fn(item: String) -> String {
    return item.ToUpper();
}, "Apfel");
```

**Besonderheiten:**
- Experimentelle Sprache, Syntax kann sich noch ändern
- Unterstützt anonyme Funktionen direkt

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
(defn apply-func [func item]
  (func item))

(def result (apply-func 
  (fn [item] (.toUpperCase item))
  "Apfel"))
```

**Besonderheiten:**
- Unterstützt sowohl `fn` als auch die kompakte `#`-Syntax
- Funktionen sind First-Class-Objekte

**Weiterführende Links:**
- [Clojure Documentation - Anonymous Functions](https://clojure.org/reference/reader#_dispatch)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
(defun apply-func (func item)
  (funcall func item))

(defvar result (apply-func 
  (lambda (item) (string-upcase item))
  "Apfel"))
```

**Besonderheiten:**
- Verwendet `lambda` für anonyme Funktionen
- Funktionen sind First-Class-Objekte

**Weiterführende Links:**
- [Common Lisp HyperSpec - Lambda](http://www.lispworks.com/documentation/HyperSpec/Body/m_lambda.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
def apply_func(func, item)
  func.call(item)
end

result = apply_func(->(item : String) { item.upcase }, "Apfel")
```

**Besonderheiten:**
- Unterstützt anonyme Funktionen über Procs
- Ruby-ähnliche Syntax

**Weiterführende Links:**
- [Crystal Documentation - Procs](https://crystal-lang.org/reference/1.11/syntax_and_semantics/literals/proc.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
string ApplyFunc(Func<string, string> func, string item)
{
    return func(item);
}

string result = ApplyFunc(item => item.ToUpper(), "Apfel");
```

**Besonderheiten:**
- Unterstützt anonyme Funktionen seit C# 1.0
- Kann als Delegates oder Lambda-Ausdrücke definiert werden

**Weiterführende Links:**
- [Microsoft C# Documentation - Anonymous Methods](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/delegate-operator)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
#include <functional>
#include <string>

std::string applyFunc(std::function<std::string(const std::string&)> func, 
                      const std::string& item) {
    return func(item);
}

std::string result = applyFunc([](const std::string& item) {
    std::string result = item;
    std::transform(result.begin(), result.end(), result.begin(), ::toupper);
    return result;
}, "Apfel");
```

**Besonderheiten:**
- Unterstützt anonyme Funktionen über Lambda-Ausdrücke (seit C++11)
- Kann auch über Funktionszeiger realisiert werden

**Weiterführende Links:**
- [cppreference.com - Lambda expressions](https://en.cppreference.com/w/cpp/language/lambda)

</TabItem>
<TabItem value="d" label="D">

```d
string applyFunc(string function(string) func, string item) {
    return func(item);
}

string result = applyFunc((string item) {
    import std.string : toUpper;
    return item.toUpper();
}, "Apfel");
```

**Besonderheiten:**
- Unterstützt anonyme Funktionen seit D 2.0
- Unterstützt Closures

**Weiterführende Links:**
- [D Language Specification - Function Literals](https://dlang.org/spec/expression.html#function_literals)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
String applyFunc(String Function(String) func, String item) {
    return func(item);
}

String result = applyFunc((String item) {
    return item.toUpperCase();
}, "Apfel");
```

**Besonderheiten:**
- Unterstützt anonyme Funktionen seit Dart 1.0
- Vollständige Closure-Unterstützung

**Weiterführende Links:**
- [Dart Documentation - Functions](https://dart.dev/guides/language/language-tour#functions)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
apply_func (func: FUNCTION [STRING, STRING]; item: STRING): STRING
    do
        Result := func.item ([item])
    end

result: STRING
    local
        anon_func: FUNCTION [STRING, STRING]
    do
        create {FUNCTION [STRING, STRING]} anon_func.make (
            agent (s: STRING): STRING
                do
                    Result := s.as_upper
                end
        )
        Result := apply_func (anon_func, "Apfel")
    end
```

**Besonderheiten:**
- Anonyme Funktionen werden über Agents realisiert
- Unterstützt Closures

**Weiterführende Links:**
- [Eiffel Documentation - Agents](https://www.eiffel.org/doc/eiffel/Agents)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
def apply_func(func, item) do
    func.(item)
end

result = apply_func(fn item -> String.upcase(item) end, "Apfel")
```

**Besonderheiten:**
- Unterstützt sowohl `fn` als auch die kompakte `&`-Syntax
- Funktionen sind First-Class-Objekte

**Weiterführende Links:**
- [Elixir Documentation - Anonymous Functions](https://hexdocs.pm/elixir/Function.html)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
applyFunc : (String -> String) -> String -> String
applyFunc func item =
    func item

result = applyFunc (\item -> String.toUpper item) "Apfel"
```

**Besonderheiten:**
- Funktionale Sprache mit expliziten Typannotationen
- Unterstützt anonyme Funktionen über Lambda-Ausdrücke

**Weiterführende Links:**
- [Elm Documentation - Functions](https://guide.elm-lang.org/core_language.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
apply_func(Func, Item) ->
    Func(Item).

Result = apply_func(fun(Item) -> string:uppercase(Item) end, "Apfel").
```

**Besonderheiten:**
- Verwendet `fun` für anonyme Funktionen
- Funktionen sind First-Class-Objekte

**Weiterführende Links:**
- [Erlang Documentation - Fun Expressions](https://www.erlang.org/doc/reference_manual/expressions.html#fun-expressions)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
let applyFunc (func: string -> string) (item: string) : string =
    func item

let result = applyFunc (fun item -> item.ToUpper()) "Apfel"
```

**Besonderheiten:**
- Verwendet `fun` für anonyme Funktionen
- Unterstützt Currying und Partial Application

**Weiterführende Links:**
- [F# Documentation - Lambda Expressions](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/functions/lambda-expressions-the-fun-keyword)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Fortran unterstützt keine anonymen Funktionen direkt
! Funktionalität muss über benannte Funktionen realisiert werden

function apply_func(item) result(result_str)
    character(len=*), intent(in) :: item
    character(len=len(item)) :: result_str
    integer :: i
    
    do i = 1, len(item)
        result_str(i:i) = achar(iachar(item(i:i)) - 32)
    end do
end function apply_func

character(len=5) :: result
result = apply_func("Apfel")
```

**Besonderheiten:**
- Fortran unterstützt keine anonymen Funktionen direkt
- Funktionalität muss über benannte Funktionen realisiert werden

**Weiterführende Links:**
- [Fortran Documentation - Functions](https://gcc.gnu.org/onlinedocs/gfortran/Function.html)

</TabItem>
<TabItem value="gleam" label="Gleam">

```erlang
pub fn apply_func(func: fn(String) -> String, item: String) -> String {
    func(item)
}

let result = apply_func(fn(item) { string.uppercase(item) }, "Apfel")
```

**Besonderheiten:**
- Funktionale Sprache mit expliziten Typannotationen
- Unterstützt anonyme Funktionen über `fn`

**Weiterführende Links:**
- [Gleam Documentation - Functions](https://gleam.run/documentation/tour/functions/)

</TabItem>
<TabItem value="go" label="Go">

```go
func applyFunc(func func(string) string, item string) string {
    return func(item)
}

result := applyFunc(func(item string) string {
    return strings.ToUpper(item)
}, "Apfel")
```

**Besonderheiten:**
- Unterstützt anonyme Funktionen seit Go 1.0
- Funktionen sind First-Class-Objekte

**Weiterführende Links:**
- [Go Documentation - Function literals](https://go.dev/ref/spec#Function_literals)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
def applyFunc(func, item) {
    func(item)
}

def result = applyFunc({ item -> item.toUpperCase() }, "Apfel")
```

**Besonderheiten:**
- Verwendet Closures für anonyme Funktionen
- Unterstützt implizite Parameter (`it`)

**Weiterführende Links:**
- [Groovy Documentation - Closures](https://groovy-lang.org/closures.html)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
applyFunc :: (String -> String) -> String -> String
applyFunc func item = func item

result = applyFunc (\item -> map toUpper item) "Apfel"
```

**Besonderheiten:**
- Funktionale Sprache mit expliziten Typannotationen
- Unterstützt anonyme Funktionen über Lambda-Ausdrücke

**Weiterführende Links:**
- [Haskell Documentation - Lambda Expressions](https://www.haskell.org/onlinereport/haskell2010/haskellch3.html#x8-580003.17)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
function applyFunc(func: String -> String, item: String): String {
    return func(item);
}

var result = applyFunc(function(item: String): String {
    return item.toUpperCase();
}, "Apfel");
```

**Besonderheiten:**
- Unterstützt anonyme Funktionen
- Cross-Platform-Kompilierung

**Weiterführende Links:**
- [Haxe Documentation - Functions](https://haxe.org/manual/types-function.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
applyFunc : (String -> String) -> String -> String
applyFunc func item = func item

result : String
result = applyFunc (\item => toUpper item) "Apfel"
```

**Besonderheiten:**
- Funktionale Sprache mit abhängigen Typen
- Unterstützt anonyme Funktionen über Lambda-Ausdrücke

**Weiterführende Links:**
- [Idris Documentation - Functions](https://idris2.readthedocs.io/en/latest/tutorial/functions.html)

</TabItem>
<TabItem value="java" label="Java">

```java
static String applyFunc(java.util.function.Function<String, String> func, String item) {
    return func.apply(item);
}

String result = applyFunc(item -> item.toUpperCase(), "Apfel");
```

**Besonderheiten:**
- Unterstützt anonyme Funktionen über Lambda-Ausdrücke (seit Java 8.0)
- Vor Java 8 wurden anonyme innere Klassen verwendet

**Weiterführende Links:**
- [Oracle Java Documentation - Lambda Expressions](https://docs.oracle.com/javase/tutorial/java/javaOO/lambdaexpressions.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
function applyFunc(func, item) {
    return func(item);
}

const result = applyFunc(function(item) {
    return item.toUpperCase();
}, "Apfel");
```

**Besonderheiten:**
- Unterstützt anonyme Funktionen seit ES1
- Funktionen sind First-Class-Objekte

**Weiterführende Links:**
- [MDN Web Docs - Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
function apply_func(func, item)
    func(item)
end

result = apply_func(item -> uppercase(item), "Apfel")
```

**Besonderheiten:**
- Unterstützt anonyme Funktionen über Lambda-Ausdrücke
- Funktionen sind First-Class-Objekte

**Weiterführende Links:**
- [Julia Documentation - Anonymous Functions](https://docs.julialang.org/en/v1/manual/functions/#man-anonymous-functions)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Anonymous Functions
val double = fn(x: int) { x * 2 }
val result = double(5) // 10

// Als Argument übergeben
fun apply(f: (int) -> int, x: int): int
  f(x)

val r = apply(fn(x) { x + 1 }, 10) // 11

// Trailing Lambda Syntax
val items = [1, 2, 3, 4, 5]
val evens = items.filter fn(x) { x % 2 == 0 } // [2, 4]
```

**Besonderheiten:**
- Anonyme Funktionen mit `fn(params) { body }`
- Funktionen sind First-Class-Werte
- Trailing Lambda Syntax: Letzter Lambda-Parameter kann nach den Klammern stehen
- Closures erfassen automatisch freie Variablen

**Weiterführende Links:**
- [Koka Language Guide - Anonymous Functions](https://koka-lang.github.io/koka/doc/book.html#sec-anonymous-functions)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
fun applyFunc(func: (String) -> String, item: String): String {
    return func(item)
}

val result = applyFunc({ item -> item.uppercase() }, "Apfel")
```

**Besonderheiten:**
- Unterstützt anonyme Funktionen über Lambda-Ausdrücke
- Kann als letzter Parameter außerhalb der Klammern geschrieben werden

**Weiterführende Links:**
- [Kotlin Documentation - Lambda Expressions](https://kotlinlang.org/docs/lambdas.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```haskell
def applyFunc (func : String → String) (item : String) : String :=
  func item

#eval applyFunc (fun item => item.map Char.toUpper) "Apfel"  -- "APFEL"
```

**Besonderheiten:**
- Anonyme Funktionen mit `fun parameter => ausdruck`
- Mehrere Parameter: `fun x y => x + y`
- Typ-Annotationen optional: `fun (x : Nat) => x + 1`

**Weiterführende Links:**
- [Lean 4 Documentation - Anonymous Functions](https://lean-lang.org/lean4/doc/functions.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
function apply_func(func, item)
    return func(item)
end

local result = apply_func(function(item)
    return string.upper(item)
end, "Apfel")
```

**Besonderheiten:**
- Unterstützt anonyme Funktionen
- Funktionen sind First-Class-Objekte

**Weiterführende Links:**
- [Lua Documentation - Functions](https://www.lua.org/manual/5.4/manual.html#3.4.11)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
function result = apply_func(func, item)
    result = func(item);
end

result = apply_func(@(item) upper(item), "Apfel");
```

**Besonderheiten:**
- Unterstützt anonyme Funktionen über Function Handles
- Verwendet `@`-Syntax für anonyme Funktionen

**Weiterführende Links:**
- [MATLAB Documentation - Anonymous Functions](https://www.mathworks.com/help/matlab/matlab_prog/anonymous-functions.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
:- func apply_func((func(string) = string), string) = string.
apply_func(Func, Item) = Func(Item).

Result = apply_func((func(Item) = string.to_upper(Item)), "Apfel").
```

**Besonderheiten:**
- Lambda-Funktionen mit `(func(Args) = Expr)` Syntax
- Lambda-Prädikate mit `(pred(Args::Modes) is Det :- Body)` Syntax
- Lambdas können Variablen aus dem umgebenden Scope erfassen

**Weiterführende Links:**
- [Mercury Language Reference - Lambda Expressions](https://mercurylang.org/information/doc-latest/mercury_ref/Lambda-expressions.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
fn apply_func(func: fn(String) -> String, item: String) -> String:
    return func(item)

var result = apply_func(fn(item: String) -> String:
    return item.upper()
, "Apfel")
```

**Besonderheiten:**
- Python-ähnliche Syntax mit statischer Typisierung
- Unterstützt anonyme Funktionen über `fn`

**Weiterführende Links:**
- [Mojo Documentation - Functions](https://docs.modular.com/mojo/manual/functions/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
proc applyFunc(func: proc(item: string): string, item: string): string =
    func(item)

let result = applyFunc(proc(item: string): string = item.toUpper(), "Apfel")
```

**Besonderheiten:**
- Verwendet `proc` für anonyme Funktionen
- Unterstützt Closures

**Weiterführende Links:**
- [Nim Documentation - Procedures](https://nim-lang.org/docs/manual.html#procedures)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
NSString* (^applyFunc)(NSString* (^)(NSString*), NSString*) = ^NSString* (NSString* (^func)(NSString*), NSString* item) {
    return func(item);
};

NSString* result = applyFunc(^NSString* (NSString* item) {
    return [item uppercaseString];
}, @"Apfel");
```

**Besonderheiten:**
- Unterstützt anonyme Funktionen über Blocks (seit Objective-C 2.0)
- Blocks sind Closures mit Variable Capture

**Weiterführende Links:**
- [Apple Documentation - Blocks](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/WorkingwithBlocks/WorkingwithBlocks.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
type
  TStringFunc = function(const item: string): string;

function ApplyFunc(func: TStringFunc; const item: string): string;
begin
    Result := func(item);
end;

var result: string;
begin
    result := ApplyFunc(function(const item: string): string
        begin
            Result := UpperCase(item);
        end, 'Apfel');
end;
```

**Besonderheiten:**
- Unterstützt anonyme Funktionen über Anonymous Methods (seit Delphi 2009)
- Unterstützt Closures mit Variable Capture

**Weiterführende Links:**
- [Embarcadero Delphi Documentation - Anonymous Methods](https://docwiki.embarcadero.com/RADStudio/en/Anonymous_Methods_in_Delphi)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
let apply_func (func: string -> string) (item: string) : string =
    func item

let result = apply_func (fun item -> String.uppercase_ascii item) "Apfel"
```

**Besonderheiten:**
- Verwendet `fun` für anonyme Funktionen
- Funktionale Sprache mit First-Class-Funktionen

**Weiterführende Links:**
- [OCaml Documentation - Functions](https://ocaml.org/docs/first-hour#functions)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
function result = apply_func(func, item)
    result = func(item);
end

result = apply_func(@(item) toupper(item), "Apfel");
```

**Besonderheiten:**
- Unterstützt anonyme Funktionen über Function Handles
- Verwendet `@`-Syntax für anonyme Funktionen

**Weiterführende Links:**
- [Octave Documentation - Anonymous Functions](https://octave.org/doc/v8.1.0/Anonymous-Functions.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
apply_func :: proc(func: proc(item: string) -> string, item: string) -> string {
    return func(item)
}

result := apply_func(proc(item: string) -> string {
    return strings.to_upper(item)
}, "Apfel")
```

**Besonderheiten:**
- Unterstützt anonyme Funktionen über Prozeduren
- Funktionen müssen einen Rückgabetyp haben

**Weiterführende Links:**
- [Odin Documentation - Procedures](https://odin-lang.org/docs/overview/#procedures)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
sub apply_func {
    my ($func, $item) = @_;
    return $func->($item);
}

my $result = apply_func(sub {
    my $item = shift;
    return uc($item);
}, "Apfel");
```

**Besonderheiten:**
- Verwendet anonyme Subroutinen
- Unterstützt Closures

**Weiterführende Links:**
- [Perl Documentation - Anonymous Subroutines](https://perldoc.perl.org/perlsub#Anonymous-Subroutines)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
function applyFunc($func, $item) {
    return $func($item);
}

$result = applyFunc(function($item) {
    return strtoupper($item);
}, "Apfel");
```

**Besonderheiten:**
- Unterstützt anonyme Funktionen seit PHP 5.3
- Unterstützen Closures mit `use`-Klausel

**Weiterführende Links:**
- [PHP Documentation - Anonymous Functions](https://www.php.net/manual/en/functions.anonymous.php)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
applyFunc :: (String -> String) -> String -> String
applyFunc func item = func item

result :: String
result = applyFunc (\item -> toUpper item) "Apfel"
```

**Besonderheiten:**
- Funktionale Sprache mit expliziten Typannotationen
- Unterstützt anonyme Funktionen über Lambda-Ausdrücke

**Weiterführende Links:**
- [PureScript Documentation - Functions](https://book.purescript.org/chapter3.html)

</TabItem>
<TabItem value="python" label="Python">

```python
def apply_func(func, item):
    return func(item)

result = apply_func(lambda item: item.upper(), "Apfel")
```

**Besonderheiten:**
- Unterstützt anonyme Funktionen über Lambda-Ausdrücke
- Lambda-Ausdrücke sind auf einen einzelnen Ausdruck beschränkt

**Weiterführende Links:**
- [Python Documentation - Lambda Expressions](https://docs.python.org/3/tutorial/controlflow.html#lambda-expressions)

</TabItem>
<TabItem value="r" label="R">

```r
apply_func <- function(func, item) {
    func(item)
}

result <- apply_func(function(item) {
    toupper(item)
}, "Apfel")
```

**Besonderheiten:**
- Unterstützt anonyme Funktionen
- Funktionen sind First-Class-Objekte

**Weiterführende Links:**
- [R Documentation - Functions](https://cran.r-project.org/doc/manuals/r-release/R-lang.html#Function-objects)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
(define (apply-func func item)
    (func item))

(define result (apply-func (lambda (item) (string-upcase item)) "Apfel"))
```

**Besonderheiten:**
- Verwendet `lambda` für anonyme Funktionen
- Funktionale Sprache mit First-Class-Funktionen

**Weiterführende Links:**
- [Racket Documentation - Lambda](https://docs.racket-lang.org/guide/lambda.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
applyFunc : (Str -> Str), Str -> Str
applyFunc = \func, item -> func item

result : Str
result = applyFunc (\item -> Str.toUpper item) "Apfel"
```

**Besonderheiten:**
- Lambda-Ausdrücke mit `\param -> body` Syntax
- Funktionale Sprache mit First-Class-Funktionen

**Weiterführende Links:**
- [Roc Documentation - Functions](https://www.roc-lang.org/tutorial#defining-functions)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
def apply_func(func, item)
    func.call(item)
end

result = apply_func(proc { |item| item.upcase }, "Apfel")
```

**Besonderheiten:**
- Verwendet Procs oder Blocks für anonyme Funktionen
- Unterstützt sowohl `proc` als auch `lambda`

**Weiterführende Links:**
- [Ruby Documentation - Procs](https://docs.ruby-lang.org/en/master/syntax/methods_rdoc.html#label-Procs)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
fn apply_func<F>(func: F, item: &str) -> String
where
    F: Fn(&str) -> String,
{
    func(item)
}

let result = apply_func(|item| item.to_uppercase(), "Apfel");
```

**Besonderheiten:**
- Unterstützt anonyme Funktionen über Closures
- Unterstützt drei Arten von Closures: `Fn`, `FnMut`, `FnOnce`

**Weiterführende Links:**
- [Rust Book - Closures](https://doc.rust-lang.org/book/ch13-01-closures.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
def applyFunc(func: String => String, item: String): String = {
    func(item)
}

val result = applyFunc(item => item.toUpperCase, "Apfel")
```

**Besonderheiten:**
- Unterstützt anonyme Funktionen über Lambda-Ausdrücke
- Funktionale und objektorientierte Sprache

**Weiterführende Links:**
- [Scala Documentation - Anonymous Functions](https://docs.scala-lang.org/scala3/book/fun-anonymous-functions.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
(define (apply-func func item)
    (func item))

(define result (apply-func (lambda (item) (string-upcase item)) "Apfel"))
```

**Besonderheiten:**
- Verwendet `lambda` für anonyme Funktionen
- Funktionale Sprache mit First-Class-Funktionen

**Weiterführende Links:**
- [Scheme Documentation - Lambda](https://www.scheme.com/tspl4/start.html#./start:h3)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
let toUpper: (String) -> String = { item in item.uppercased() }

let result = toUpper("Apfel")

// Closure mit Shorthand Argument Names
let toLower: (String) -> String = { $0.lowercased() }
```

**Besonderheiten:**
- Closures sind die anonymen Funktionen in Swift
- Unterstützt Shorthand Argument Names (`$0`, `$1`, etc.)
- Trailing Closure Syntax bei letztem Parameter

**Weiterführende Links:**
- [Swift Documentation - Closures](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/closures/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
function applyFunc(func: (item: string) => string, item: string): string {
    return func(item);
}

const result = applyFunc(function(item: string): string {
    return item.toUpperCase();
}, "Apfel");
```

**Besonderheiten:**
- Unterstützt vollständige Typannotationen
- Funktionen sind First-Class-Objekte

**Weiterführende Links:**
- [TypeScript Handbook - Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
Function ApplyFunc(func As Func(Of String, String), item As String) As String
    Return func(item)
End Function

Dim result As String = ApplyFunc(Function(item As String) item.ToUpper(), "Apfel")
```

**Besonderheiten:**
- Unterstützt anonyme Funktionen seit VB.NET 9.0
- Unterstützt sowohl `Function` als auch `Sub` Lambdas

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Lambda Expressions](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/procedures/lambda-expressions)

</TabItem>
<TabItem value="v" label="V">

```v
fn apply_func(func fn(string) string, item string) string {
    return func(item)
}

result := apply_func(fn(item string) string {
    return item.to_upper()
}, "Apfel")
```

**Besonderheiten:**
- Unterstützt anonyme Funktionen über `fn`
- Funktionen müssen einen Rückgabetyp haben

**Weiterführende Links:**
- [V Documentation - Functions](https://github.com/vlang/v/blob/master/doc/docs.md#functions)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```wolfram
applyFunc[func_, item_] := func[item]

result = applyFunc[Function[item, ToUpperCase[item]], "Apfel"]
```

**Besonderheiten:**
- Verwendet `Function` oder `&` für anonyme Funktionen
- Unterstützt Pattern Matching in Funktionen

**Weiterführende Links:**
- [Wolfram Language Documentation - Pure Functions](https://reference.wolfram.com/language/guide/FunctionalProgramming.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
fn applyFunc(func: *const fn ([]const u8) []const u8, item: []const u8) []const u8 {
    return func(item);
}

// Anonyme Funktion über Struct-Method-Pattern
const result = applyFunc(&struct {
    fn call(item: []const u8) []const u8 {
        return item;
    }
}.call, "Apfel");
```

**Besonderheiten:**
- Zig hat keine echten anonymen Funktionsliterale
- Workaround: Anonyme Struct mit Methode definieren
- Funktionen können über Funktionszeiger übergeben werden
- Keine Closures (kein Zugriff auf äußere Variablen)

**Weiterführende Links:**
- [Zig Documentation - Functions](https://ziglang.org/documentation/master/#Functions)

</TabItem>
</Tabs>


---

### Lambdaausdrücke


Anonyme Funktionen, die kompakt inline definiert werden können. Ermöglichen es, Funktionen als First-Class-Objekte zu behandeln und sie an andere Funktionen zu übergeben oder von Funktionen zurückzugeben.


<Tabs availableTabs={['carbon', 'clojure', 'common-lisp', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'elixir', 'elm', 'erlang', 'fsharp', 'gleam', 'go', 'groovy', 'haskell', 'haxe', 'idris', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'lua', 'mojo', 'nim', 'object-pascal', 'ocaml', 'perl', 'php', 'purescript', 'python', 'r', 'racket', 'roc', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'vbnet', 'wolfram-language']} yellowTabs={['octave']}>
<TabItem value="csharp" label="C#">

```csharp
// Lambda-Ausdruck (seit C# 3.0)
// Benötigt: using System.Linq;
string[] items = { "Apfel", "Banane", "Kirsche" };
var filtered = items.Where(item => item.StartsWith("A")).ToArray();

// Lambda mit mehreren Anweisungen
items.ToList().ForEach(item => {
    Console.WriteLine($"Item: {item}");
});
```

**Besonderheiten:**
- Wurden in C# 3.0 eingeführt und sind stark mit LINQ integriert
- Unterstützen vollständige Closures

**Weiterführende Links:**
- [Microsoft C# Documentation - Lambda Expressions](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/lambda-expressions)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Lambda-Ausdruck (seit C++11)
// Benötigt: #include <vector>, <string>, <algorithm>, <iostream>
std::vector<std::string> items = {"Apfel", "Banane", "Kirsche"};
std::vector<std::string> filtered;
std::copy_if(items.begin(), items.end(), std::back_inserter(filtered),
    [](const std::string& item) { return item.starts_with("A"); });

// Lambda mit mehreren Anweisungen
std::for_each(items.begin(), items.end(), [](const std::string& item) {
    std::cout << "Item: " << item << std::endl;
});
```

**Besonderheiten:**
- Wurden in C++11 eingeführt
- Unterstützen Capture-Listen für Variablen aus dem umgebenden Scope

**Weiterführende Links:**
- [cppreference.com - Lambda expressions](https://en.cppreference.com/w/cpp/language/lambda)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Lambda-Ausdruck (experimentell)
var items: [String] = {"Apfel", "Banane", "Kirsche"};
var filtered = items.Where([](item: String) -> bool {
    return item.StartsWith("A");
});
```

**Besonderheiten:**
- Experimentelle Sprache, Syntax kann sich noch ändern
- C++-ähnliche Syntax mit modernen Features

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Lambda-Ausdruck (fn oder #-Syntax)
(def items ["Apfel" "Banane" "Kirsche"])
(def filtered (filter #(.startsWith % "A") items))

;; Lambda mit mehreren Anweisungen
(doseq [item items]
  (println (str "Item: " item)))
```

**Besonderheiten:**
- Unterstützt sowohl `fn` als auch die kompakte `#`-Syntax
- Funktionen sind First-Class-Objekte

**Weiterführende Links:**
- [Clojure Documentation - Functions](https://clojure.org/reference/reader#_dispatch)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Lambda-Ausdruck
(let ((items '("Apfel" "Banane" "Kirsche")))
  (remove-if-not (lambda (item) (string-prefix-p "A" item)) items))

;; Lambda mit mehreren Anweisungen
(mapc (lambda (item) (format t "Item: ~a~%" item)) items)
```

**Besonderheiten:**
- `lambda` ist ein Makro, das anonyme Funktionen erstellt
- Funktionen sind First-Class-Objekte

**Weiterführende Links:**
- [Common Lisp HyperSpec - Lambda](http://www.lispworks.com/documentation/HyperSpec/Body/m_lambda.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Lambda-Ausdruck (Proc)
items = ["Apfel", "Banane", "Kirsche"]
filtered = items.select { |item| item.starts_with?("A") }

# Lambda mit mehreren Anweisungen
items.each do |item|
  puts "Item: #{item}"
end
```

**Besonderheiten:**
- Verwendet Blocks (ähnlich wie Ruby)
- Unterstützt sowohl `{ }` als auch `do...end` Syntax

**Weiterführende Links:**
- [Crystal Documentation - Blocks and Procs](https://crystal-lang.org/reference/1.11/syntax_and_semantics/blocks_and_procs.html)

</TabItem>
<TabItem value="d" label="D">

```d
// Lambda-Ausdruck (seit D 2.0)
// Benötigt: import std.algorithm, std.array, std.stdio;
string[] items = ["Apfel", "Banane", "Kirsche"];
auto filtered = items.filter!(item => item.startsWith("A")).array;

// Lambda mit mehreren Anweisungen
items.each!(item => writeln("Item: ", item));
```

**Besonderheiten:**
- Wurden in D 2.0 eingeführt
- Unterstützen Closures

**Weiterführende Links:**
- [D Language Specification - Function Literals](https://dlang.org/spec/expression.html#function_literals)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Lambda-Ausdruck (Arrow Function)
var items = ["Apfel", "Banane", "Kirsche"];
var filtered = items.where((item) => item.startsWith("A")).toList();

// Lambda mit mehreren Anweisungen
items.forEach((item) {
  print("Item: $item");
});
```

**Besonderheiten:**
- Unterstützt sowohl Arrow Functions als auch traditionelle anonyme Funktionen
- Vollständige Closure-Unterstützung

**Weiterführende Links:**
- [Dart Language Tour - Functions](https://dart.dev/guides/language/language-tour#functions)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Lambda-Ausdruck (fn oder &-Syntax)
items = ["Apfel", "Banane", "Kirsche"]
filtered = Enum.filter(items, fn item -> String.starts_with?(item, "A") end)

# Kompakte &-Syntax
filtered = Enum.filter(items, &String.starts_with?(&1, "A"))

# Lambda mit mehreren Anweisungen
Enum.each(items, fn item ->
  IO.puts("Item: #{item}")
end)
```

**Besonderheiten:**
- Unterstützt sowohl `fn` als auch die kompakte `&`-Syntax
- Funktionen sind First-Class-Objekte

**Weiterführende Links:**
- [Elixir Documentation - Anonymous Functions](https://hexdocs.pm/elixir/Function.html)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Lambda-Ausdruck
items = ["Apfel", "Banane", "Kirsche"]
filtered = List.filter (\item -> String.startsWith "A" item) items

-- Lambda mit mehreren Anweisungen
List.map (\item -> 
    Debug.log "Item" item
) items
```

**Besonderheiten:**
- Funktionale Sprache mit First-Class-Funktionen
- Unterstützt Currying

**Weiterführende Links:**
- [Elm Documentation - Functions](https://guide.elm-lang.org/core_language.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% Lambda-Ausdruck (Fun)
Items = ["Apfel", "Banane", "Kirsche"],
Filtered = lists:filter(fun(Item) -> string:prefix(Item, "A") =/= nomatch end, Items),

% Lambda mit mehreren Anweisungen
lists:foreach(fun(Item) ->
    io:format("Item: ~s~n", [Item])
end, Items).
```

**Besonderheiten:**
- Verwendet `fun` für anonyme Funktionen
- Funktionen sind First-Class-Objekte

**Weiterführende Links:**
- [Erlang Documentation - Fun Expressions](https://www.erlang.org/doc/reference_manual/expressions.html#fun-expressions)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Lambda-Ausdruck
let items = ["Apfel"; "Banane"; "Kirsche"]
let filtered = List.filter (fun item -> item.StartsWith("A")) items

// Lambda mit mehreren Anweisungen
List.iter (fun item ->
    printfn "Item: %s" item
) items
```

**Besonderheiten:**
- Verwendet `fun` für anonyme Funktionen
- Unterstützt Currying und Partial Application

**Weiterführende Links:**
- [F# Documentation - Lambda Expressions](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/functions/lambda-expressions-the-fun-keyword)

</TabItem>
<TabItem value="gleam" label="Gleam">

```erlang
// Lambda-Ausdruck
let items = ["Apfel", "Banane", "Kirsche"]
let filtered = list.filter(items, fn(item) { string.starts_with(item, "A") })

// Lambda mit mehreren Anweisungen
list.each(items, fn(item) {
  io.println(string.append("Item: ", item))
})
```

**Besonderheiten:**
- Funktionale Sprache mit First-Class-Funktionen
- Unterstützt Closures

**Weiterführende Links:**
- [Gleam Documentation - Functions](https://gleam.run/documentation/tour/functions/)

</TabItem>
<TabItem value="go" label="Go">

```go
// Anonyme Funktion (seit Go 1.0)
items := []string{"Apfel", "Banane", "Kirsche"}
var filtered []string
for _, item := range items {
    if func(s string) bool { return strings.HasPrefix(s, "A") }(item) {
        filtered = append(filtered, item)
    }
}

// Lambda-ähnliche Verwendung mit Funktionen höherer Ordnung
filtered = slices.FilterFunc(items, func(item string) bool {
    return strings.HasPrefix(item, "A")
})
```

**Besonderheiten:**
- Unterstützt anonyme Funktionen seit Version 1.0
- Seit Go 1.18 gibt es generische Funktionen höherer Ordnung in `slices` und `maps`

**Weiterführende Links:**
- [Go Documentation - Function literals](https://go.dev/ref/spec#Function_literals)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Lambda-Ausdruck (Closure)
def items = ["Apfel", "Banane", "Kirsche"]
def filtered = items.findAll { it.startsWith("A") }

// Lambda mit mehreren Anweisungen
items.each { item ->
    println "Item: $item"
}
```

**Besonderheiten:**
- Verwendet Closures für Lambda-ähnliche Funktionalität
- Unterstützt implizite Parameter (`it`)

**Weiterführende Links:**
- [Groovy Documentation - Closures](https://groovy-lang.org/closures.html)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Lambda-Ausdruck
items = ["Apfel", "Banane", "Kirsche"]
filtered = filter (\item -> "A" `isPrefixOf` item) items

-- Lambda mit mehreren Anweisungen
mapM_ (\item -> putStrLn $ "Item: " ++ item) items
```

**Besonderheiten:**
- Funktionale Sprache mit First-Class-Funktionen
- Unterstützt Currying

**Weiterführende Links:**
- [Haskell Documentation - Lambda Expressions](https://www.haskell.org/onlinereport/haskell2010/haskellch3.html#x8-580003.17)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Lambda-Ausdruck
var items = ["Apfel", "Banane", "Kirsche"];
var filtered = items.filter(item -> item.indexOf("A") == 0);

// Lambda mit mehreren Anweisungen
items.forEach(item -> {
    trace("Item: " + item);
});
```

**Besonderheiten:**
- Unterstützt Arrow Functions
- Cross-Platform-Kompilierung

**Weiterführende Links:**
- [Haxe Documentation - Functions](https://haxe.org/manual/types-function.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Lambda-Ausdruck
items : List String
items = ["Apfel", "Banane", "Kirsche"]
filtered = filter (\item => isPrefixOf "A" item) items

-- Lambda mit mehreren Anweisungen
traverse_ (\item => putStrLn $ "Item: " ++ item) items
```

**Besonderheiten:**
- Funktionale Sprache mit abhängigen Typen
- Unterstützt Currying

**Weiterführende Links:**
- [Idris Documentation - Functions](https://idris2.readthedocs.io/en/latest/tutorial/functions.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Lambda-Ausdruck (seit Java 8.0)
List<String> items = Arrays.asList("Apfel", "Banane", "Kirsche");
var filtered = items.stream()
                   .filter(item -> item.startsWith("A"))
                   .toList();

// Lambda mit mehreren Anweisungen
items.forEach((item) -> {
    System.out.println("Item: " + item);
});
```

**Besonderheiten:**
- Wurden in Java 8.0 eingeführt und müssen funktionale Interfaces implementieren
- Unterstützen effektiv final variables (effectively final) für Closures

**Weiterführende Links:**
- [Oracle Java Documentation - Lambda Expressions](https://docs.oracle.com/javase/tutorial/java/javaOO/lambdaexpressions.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Arrow Function (seit ES6/ES2015)
const items = ["Apfel", "Banane", "Kirsche"];
const filtered = items.filter(item => item.startsWith("A"));

// Arrow Function mit mehreren Anweisungen
items.forEach((item) => {
    console.log(`Item: ${item}`);
});

// Lexikalisches this-Binding
const obj = {
    name: "Test",
    getName: () => this.name, // this bezieht sich auf umgebenden Kontext
    getNameTraditional: function() {
        return this.name; // this bezieht sich auf obj
    }
};
```

**Besonderheiten:**
- Haben lexikalisches `this`-Binding (kein eigenes `this`), was sie ideal für Callbacks macht

**Weiterführende Links:**
- [MDN Web Docs - Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Lambda-Ausdruck (Anonymous Function)
items = ["Apfel", "Banane", "Kirsche"]
filtered = filter(item -> startswith(item, "A"), items)

# Lambda mit mehreren Anweisungen
foreach(items) do item
    println("Item: $item")
end
```

**Besonderheiten:**
- Unterstützt sowohl `->` als auch `do...end` Syntax
- Funktionen sind First-Class-Objekte

**Weiterführende Links:**
- [Julia Documentation - Anonymous Functions](https://docs.julialang.org/en/v1/manual/functions/#man-anonymous-functions)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Lambda-Ausdrücke
val items = ["Apfel", "Banane", "Kirsche"]
val filtered = items.filter fn(item) { item.starts-with("A") }

// Lambda mit explizitem Typ
val double: (int) -> int = fn(x) { x * 2 }

// Kurzform für einzeilige Lambdas
val square = fn(x: int) { x * x }
```

**Besonderheiten:**
- Lambda-Syntax: `fn(params) { body }`
- Lambdas können inline als Argumente übergeben werden
- Trailing Lambda Syntax für bessere Lesbarkeit
- Typ-Inferenz für Lambda-Parameter

**Weiterführende Links:**
- [Koka Language Guide - Anonymous Functions](https://koka-lang.github.io/koka/doc/book.html#sec-anonymous-functions)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Lambda-Ausdruck
val items = listOf("Apfel", "Banane", "Kirsche")
val filtered = items.filter { it.startsWith("A") }

// Lambda mit mehreren Anweisungen
items.forEach { item ->
    println("Item: $item")
}
```

**Besonderheiten:**
- Unterstützt sowohl `{ }` als auch explizite Parameter
- Impliziter Parameter `it` wenn nur ein Parameter vorhanden ist

**Weiterführende Links:**
- [Kotlin Documentation - Lambda Expressions](https://kotlinlang.org/docs/lambdas.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```haskell
-- Lambda-Ausdruck
let items := ["Apfel", "Banane", "Kirsche"]
let filtered := items.filter (fun item => "A".isPrefixOf item)

-- Kurzform mit · (anonymous function shorthand)
let doubled := [1, 2, 3].map (· * 2)  -- [2, 4, 6]
```

**Besonderheiten:**
- `fun parameter => ausdruck` für Lambda-Ausdrücke
- `·` (Mittelpunkt) als Kurzschreibweise für einparametrige anonyme Funktionen
- Automatisches Currying macht partielle Anwendung trivial

**Weiterführende Links:**
- [Lean 4 Documentation - Anonymous Functions](https://lean-lang.org/lean4/doc/functions.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Lambda-Ausdruck (Anonymous Function)
local items = {"Apfel", "Banane", "Kirsche"}
local filtered = {}
for _, item in ipairs(items) do
    if (function(s) return string.sub(s, 1, 1) == "A" end)(item) then
        table.insert(filtered, item)
    end
end

-- Lambda mit mehreren Anweisungen
for _, item in ipairs(items) do
    (function(s) print("Item: " .. s) end)(item)
end
```

**Besonderheiten:**
- Unterstützt anonyme Funktionen
- Funktionen sind First-Class-Objekte

**Weiterführende Links:**
- [Lua Documentation - Functions](https://www.lua.org/manual/5.4/manual.html#3.4.11)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# Lambda-Ausdruck (Python-ähnlich)
var items = ["Apfel", "Banane", "Kirsche"]
var filtered = [item for item in items if item.startswith("A")]

# Lambda mit filter
filtered = list(filter(lambda item: item.startswith("A"), items))
```

**Besonderheiten:**
- Python-ähnliche Syntax
- Unterstützt Lambda-Ausdrücke wie Python

**Weiterführende Links:**
- [Mojo Documentation - Functions](https://docs.modular.com/mojo/manual/functions/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Lambda-Ausdruck (Anonymous Procedure)
var items = @["Apfel", "Banane", "Kirsche"]
var filtered = items.filter(proc(item: string): bool = item.startsWith("A"))

# Lambda mit mehreren Anweisungen
items.apply(proc(item: string) =
    echo "Item: ", item
)
```

**Besonderheiten:**
- Verwendet `proc` für anonyme Funktionen
- Unterstützt Closures

**Weiterführende Links:**
- [Nim Documentation - Procedures](https://nim-lang.org/docs/manual.html#procedures)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Lambda-Ausdruck (Anonymous Method, seit Delphi 2009)
var
  items: TArray<string>;
  filterFunc: TFunc<string, Boolean>;
begin
  items := ['Apfel', 'Banane', 'Kirsche'];
  filterFunc := function(const item: string): Boolean
    begin
      Result := item.StartsWith('A');
    end;

  // Lambda mit mehreren Anweisungen
  TArray<string>.ForEach(items, procedure(const item: string)
    begin
      WriteLn('Item: ', item);
    end);
end;
```

**Besonderheiten:**
- Wurden in Delphi 2009 eingeführt (Anonymous Methods)
- Unterstützt sowohl `procedure` als auch `function` anonyme Methoden
- Unterstützt Closures mit Variable Capture

**Weiterführende Links:**
- [Embarcadero Delphi Documentation - Anonymous Methods](https://docwiki.embarcadero.com/RADStudio/en/Anonymous_Methods_in_Delphi)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Lambda-Ausdruck (Anonymous Function) *)
let items = ["Apfel"; "Banane"; "Kirsche"]
let filtered = List.filter (fun item -> String.starts_with item "A") items

(* Lambda mit mehreren Anweisungen *)
List.iter (fun item ->
    print_endline ("Item: " ^ item)
) items
```

**Besonderheiten:**
- Verwendet `fun` für anonyme Funktionen
- Funktionale Sprache mit First-Class-Funktionen

**Weiterführende Links:**
- [OCaml Documentation - Functions](https://ocaml.org/docs/first-hour#functions)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Lambda-Ausdruck (Anonymous Subroutine)
my @items = ("Apfel", "Banane", "Kirsche");
my @filtered = grep { substr($_, 0, 1) eq "A" } @items;

# Lambda mit mehreren Anweisungen
foreach my $item (@items) {
    sub { print "Item: $_[0]\n" }->($item);
}
```

**Besonderheiten:**
- Verwendet anonyme Subroutinen
- Unterstützt Closures

**Weiterführende Links:**
- [Perl Documentation - Anonymous Subroutines](https://perldoc.perl.org/perlsub#Anonymous-Subroutines)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
// Lambda-Ausdruck (Anonymous Function, seit PHP 5.3)
$items = ["Apfel", "Banane", "Kirsche"];
$filtered = array_filter($items, function($item) {
    return str_starts_with($item, "A");
});

// Lambda mit mehreren Anweisungen
array_walk($items, function($item) {
    echo "Item: $item\n";
});
```

**Besonderheiten:**
- Wurden in PHP 5.3 eingeführt
- Unterstützen Closures mit `use`-Klausel

**Weiterführende Links:**
- [PHP Documentation - Anonymous Functions](https://www.php.net/manual/en/functions.anonymous.php)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Lambda-Ausdruck
items = ["Apfel", "Banane", "Kirsche"]
filtered = filter (\item -> String.startsWith "A" item) items

-- Lambda mit mehreren Anweisungen
traverse_ (\item -> log $ "Item: " <> item) items
```

**Besonderheiten:**
- Funktionale Sprache mit First-Class-Funktionen
- Unterstützt Currying

**Weiterführende Links:**
- [PureScript Documentation - Functions](https://book.purescript.org/chapter3.html)

</TabItem>
<TabItem value="python" label="Python">

```python
# Lambda-Ausdruck
items = ["Apfel", "Banane", "Kirsche"]
filtered = list(filter(lambda item: item.startswith("A"), items))

# Lambda mit forEach-ähnlicher Iteration
for item in items:
    print(f"Item: {item}")
```

**Besonderheiten:**
- Sind auf einen einzelnen Ausdruck beschränkt
- Für komplexere Funktionen sollten reguläre Funktionen verwendet werden

**Weiterführende Links:**
- [Python Documentation - Lambda Expressions](https://docs.python.org/3/tutorial/controlflow.html#lambda-expressions)

</TabItem>
<TabItem value="r" label="R">

```r
# Lambda-Ausdruck (Anonymous Function)
items <- c("Apfel", "Banane", "Kirsche")
filtered <- Filter(function(item) startsWith(item, "A"), items)

# Lambda mit mehreren Anweisungen
lapply(items, function(item) {
  cat("Item:", item, "\n")
})
```

**Besonderheiten:**
- Unterstützt anonyme Funktionen
- Funktionen sind First-Class-Objekte

**Weiterführende Links:**
- [R Documentation - Functions](https://cran.r-project.org/doc/manuals/r-release/R-lang.html#Function-objects)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
;; Lambda-Ausdruck
(define items '("Apfel" "Banane" "Kirsche"))
(define filtered (filter (lambda (item) (string-prefix? item "A")) items))

;; Lambda mit mehreren Anweisungen
(for-each (lambda (item) (printf "Item: ~a\n" item)) items)
```

**Besonderheiten:**
- Verwendet `lambda` für anonyme Funktionen
- Funktionale Sprache mit First-Class-Funktionen

**Weiterführende Links:**
- [Racket Documentation - Lambda](https://docs.racket-lang.org/guide/lambda.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Lambda-Ausdruck
items = ["Apfel", "Banane", "Kirsche"]
filtered = List.keepIf items \item -> Str.startsWith item "A"

-- Lambda mit mehreren Parametern
sum = List.walk [1, 2, 3] 0 \acc, n -> acc + n
```

**Besonderheiten:**
- Funktionale Sprache mit First-Class-Funktionen
- Lambdas mit `\param -> body` Syntax
- Unterstützt Closures

**Weiterführende Links:**
- [Roc Documentation - Functions](https://www.roc-lang.org/tutorial#defining-functions)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Lambda-Ausdruck (Block oder Proc)
items = ["Apfel", "Banane", "Kirsche"]
filtered = items.select { |item| item.start_with?("A") }

# Lambda mit mehreren Anweisungen
items.each do |item|
  puts "Item: #{item}"
end
```

**Besonderheiten:**
- Verwendet Blocks für Lambda-ähnliche Funktionalität
- Unterstützt sowohl `{ }` als auch `do...end` Syntax

**Weiterführende Links:**
- [Ruby Documentation - Blocks](https://ruby-doc.org/core-3.1.0/doc/syntax/methods_rdoc.html#label-Blocks)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Lambda-Ausdruck (Closure)
let items = vec!["Apfel", "Banane", "Kirsche"];
let filtered: Vec<_> = items.into_iter()
    .filter(|item| item.starts_with("A"))
    .collect();

// Lambda mit mehreren Anweisungen
items.iter().for_each(|item| {
    println!("Item: {}", item);
});
```

**Besonderheiten:**
- Wurden in Rust 1.0 eingeführt
- Unterstützen drei Arten von Closures: `Fn`, `FnMut`, `FnOnce`

**Weiterführende Links:**
- [Rust Documentation - Closures](https://doc.rust-lang.org/book/ch13-01-closures.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Lambda-Ausdruck
val items = List("Apfel", "Banane", "Kirsche")
val filtered = items.filter(item => item.startsWith("A"))

// Lambda mit mehreren Anweisungen
items.foreach { item =>
  println(s"Item: $item")
}
```

**Besonderheiten:**
- Unterstützt sowohl `=>` als auch Block-Syntax
- Funktionale und objektorientierte Sprache

**Weiterführende Links:**
- [Scala Documentation - Anonymous Functions](https://docs.scala-lang.org/scala3/book/fun-anonymous-functions.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; Lambda-Ausdruck
(define items '("Apfel" "Banane" "Kirsche"))
(define filtered (filter (lambda (item) (string-prefix? "A" item)) items))

;; Lambda mit mehreren Anweisungen
(for-each (lambda (item) (display (string-append "Item: " item "\n"))) items)
```

**Besonderheiten:**
- Verwendet `lambda` für anonyme Funktionen
- Funktionale Sprache mit First-Class-Funktionen

**Weiterführende Links:**
- [Scheme Documentation - Lambda](https://www.scheme.com/tspl4/start.html#./start:h3)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Lambda-Ausdruck (Closure)
let items = ["Apfel", "Banane", "Kirsche"]
let filtered = items.filter { $0.hasPrefix("A") }

// Lambda mit mehreren Anweisungen
items.forEach { item in
    print("Item: \(item)")
}
```

**Besonderheiten:**
- Unterstützt sowohl `{ }` als auch explizite Parameter
- Shorthand Argument Names (`$0`, `$1`, etc.)

**Weiterführende Links:**
- [Swift Documentation - Closures](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/closures/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Arrow Function (seit ES6/ES2015)
const items = ["Apfel", "Banane", "Kirsche"];
const filtered = items.filter(item => item.startsWith("A"));

// Arrow Function mit mehreren Anweisungen
items.forEach((item) => {
    console.log(`Item: ${item}`);
});

// Lexikalisches this-Binding
const obj = {
    name: "Test",
    getName: () => this.name, // this bezieht sich auf umgebenden Kontext
    getNameTraditional: function() {
        return this.name; // this bezieht sich auf obj
    }
};
```

**Besonderheiten:**
- Haben lexikalisches `this`-Binding (kein eigenes `this`), was sie ideal für Callbacks macht

**Weiterführende Links:**
- [TypeScript Handbook - Arrow Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html#arrow-functions)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```csharp
' Lambda-Ausdruck (seit VB.NET 9.0 / .NET Framework 3.5)
Dim items As String() = {"Apfel", "Banane", "Kirsche"}
Dim filtered = items.Where(Function(item) item.StartsWith("A")).ToArray()

' Lambda mit mehreren Anweisungen
items.ToList().ForEach(Sub(item)
    Console.WriteLine($"Item: {item}")
End Sub)
```

**Besonderheiten:**
- Wurden in VB.NET 9.0 eingeführt
- Unterstützt sowohl `Function` als auch `Sub` Lambdas

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Lambda Expressions](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/procedures/lambda-expressions)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```wolfram
(* Lambda-Ausdruck (Pure Function) *)
items = {"Apfel", "Banane", "Kirsche"};
filtered = Select[items, StringStartsQ[#, "A"] &];

(* Lambda mit mehreren Anweisungen *)
Map[Function[item, Print["Item: ", item]], items]
```

**Besonderheiten:**
- Verwendet `Function` oder `&` für anonyme Funktionen
- Unterstützt Pattern Matching in Funktionen

**Weiterführende Links:**
- [Wolfram Language Documentation - Pure Functions](https://reference.wolfram.com/language/guide/FunctionalProgramming.html)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
% Lambda-Ausdrücke (anonyme Funktionen)
square = @(x) x^2;
result = square(5);  % 25

add = @(a, b) a + b;
result = add(3, 4);  % 7
```

**Besonderheiten:**
- Syntax: `@(parameter) ausdruck`
- Anonyme Funktionen können Variablen aus dem umgebenden Scope erfassen
- Nur ein einzelner Ausdruck möglich (kein Funktionskörper)

**Weiterführende Links:**
- [GNU Octave Documentation - Anonymous Functions](https://octave.org/doc/v8.1.0/Anonymous-Functions.html)

</TabItem>
</Tabs>


---

### Arrow Functions


Kompakte Syntax für anonyme Funktionen mit einem Pfeil (`=>` oder `->`). Bieten oft lexikalisches `this`-Binding und eine kürzere Schreibweise als traditionelle anonyme Funktionen.


<Tabs availableTabs={['carbon', 'csharp', 'dart', 'elixir', 'elm', 'fsharp', 'haxe', 'javascript', 'kotlin', 'lean4', 'ocaml', 'php', 'purescript', 'rust', 'scala', 'typescript']} orangeTabs={['swift']}>
<TabItem value="carbon" label="Carbon">

```cpp
fn ApplyFunc(func: fn(String) -> String, item: String) -> String {
    return func(item);
}

var result = ApplyFunc(fn(item: String) -> String {
    return item.ToUpper();
}, "Apfel");
```

**Besonderheiten:**
- Experimentelle Sprache, Syntax kann sich noch ändern
- Verwendet `->` für Rückgabetypen

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
string ApplyFunc(Func<string, string> func, string item)
{
    return func(item);
}

string result = ApplyFunc(item => item.ToUpper(), "Apfel");
```

**Besonderheiten:**
- Arrow Functions wurden in C# 3.0 eingeführt
- Unterstützen vollständige Closures

**Weiterführende Links:**
- [Microsoft C# Documentation - Lambda Expressions](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/lambda-expressions)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
String ApplyFunc(String Function(String) func, String item) {
    return func(item);
}

String result = ApplyFunc((item) => item.toUpperCase(), "Apfel");
```

**Besonderheiten:**
- Arrow Functions wurden in Dart 1.0 eingeführt
- Vollständige Closure-Unterstützung

**Weiterführende Links:**
- [Dart Documentation - Arrow Functions](https://dart.dev/guides/language/language-tour#arrow-functions)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
def apply_func(func, item) do
    func.(item)
end

result = apply_func(&String.upcase/1, "Apfel")
```

**Besonderheiten:**
- Verwendet `&`-Syntax für Arrow Functions
- Unterstützt sowohl `fn` als auch die kompakte `&`-Syntax

**Weiterführende Links:**
- [Elixir Documentation - Anonymous Functions](https://hexdocs.pm/elixir/Function.html)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
applyFunc : (String -> String) -> String -> String
applyFunc func item =
    func item

result = applyFunc (\item -> String.toUpper item) "Apfel"
```

**Besonderheiten:**
- Funktionale Sprache mit expliziten Typannotationen
- Verwendet `->` für Funktionssignaturen

**Weiterführende Links:**
- [Elm Documentation - Functions](https://guide.elm-lang.org/core_language.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
let applyFunc (func: string -> string) (item: string) : string =
    func item

let result = applyFunc (fun item -> item.ToUpper()) "Apfel"
```

**Besonderheiten:**
- Verwendet `->` für Funktionssignaturen
- Unterstützt Currying und Partial Application

**Weiterführende Links:**
- [F# Documentation - Lambda Expressions](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/functions/lambda-expressions-the-fun-keyword)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
function applyFunc(func: String -> String, item: String): String {
    return func(item);
}

var result = applyFunc(item -> item.toUpperCase(), "Apfel");
```

**Besonderheiten:**
- Unterstützt Arrow Functions
- Cross-Platform-Kompilierung

**Weiterführende Links:**
- [Haxe Documentation - Functions](https://haxe.org/manual/types-function.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
function applyFunc(func, item) {
    return func(item);
}

const result = applyFunc(item => item.toUpperCase(), "Apfel");

// Lexikalisches this-Binding
const obj = {
    name: "Test",
    getName: () => this.name, // this bezieht sich auf umgebenden Kontext
    getNameTraditional: function() {
        return this.name; // this bezieht sich auf obj
    }
};
```

**Besonderheiten:**
- Arrow Functions wurden in ES6/ES2015 eingeführt
- Haben lexikalisches `this`-Binding (kein eigenes `this`), was sie ideal für Callbacks macht

**Weiterführende Links:**
- [MDN Web Docs - Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
fun applyFunc(func: (String) -> String, item: String): String {
    return func(item)
}

val result = applyFunc({ item -> item.uppercase() }, "Apfel")
```

**Besonderheiten:**
- Unterstützt Arrow Functions über Lambda-Ausdrücke
- Kann als letzter Parameter außerhalb der Klammern geschrieben werden

**Weiterführende Links:**
- [Kotlin Documentation - Lambda Expressions](https://kotlinlang.org/docs/lambdas.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```haskell
def applyFunc (func : String → String) (item : String) : String :=
  func item

-- Arrow Function mit fun ... =>
let result := applyFunc (fun item => item.map Char.toUpper) "Apfel"
```

**Besonderheiten:**
- `fun parameter => ausdruck` als Arrow-Function-Syntax
- `=>` als Pfeil-Operator (ähnlich zu `->` in OCaml/Haskell)
- `→` (Unicode) oder `->` (ASCII) für Funktionstypen

**Weiterführende Links:**
- [Lean 4 Documentation - Anonymous Functions](https://lean-lang.org/lean4/doc/functions.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
let apply_func (func: string -> string) (item: string) : string =
    func item

let result = apply_func (fun item -> String.uppercase_ascii item) "Apfel"
```

**Besonderheiten:**
- Verwendet `->` für Funktionssignaturen
- Funktionale Sprache mit First-Class-Funktionen

**Weiterführende Links:**
- [OCaml Documentation - Functions](https://ocaml.org/docs/first-hour#functions)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
applyFunc :: (String -> String) -> String -> String
applyFunc func item = func item

result :: String
result = applyFunc (\item -> toUpper item) "Apfel"
```

**Besonderheiten:**
- Funktionale Sprache mit expliziten Typannotationen
- Verwendet `->` für Funktionssignaturen

**Weiterführende Links:**
- [PureScript Documentation - Functions](https://book.purescript.org/chapter3.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
fn apply_func<F>(func: F, item: &str) -> String
where
    F: Fn(&str) -> String,
{
    func(item)
}

let result = apply_func(|item| item.to_uppercase(), "Apfel");
```

**Besonderheiten:**
- Unterstützt Arrow Functions über Closures mit `|`-Syntax
- Unterstützt drei Arten von Closures: `Fn`, `FnMut`, `FnOnce`

**Weiterführende Links:**
- [Rust Book - Closures](https://doc.rust-lang.org/book/ch13-01-closures.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
def applyFunc(func: String => String, item: String): String = {
    func(item)
}

val result = applyFunc(item => item.toUpperCase, "Apfel")
```

**Besonderheiten:**
- Unterstützt Arrow Functions über `=>`-Syntax
- Funktionale und objektorientierte Sprache

**Weiterführende Links:**
- [Scala Documentation - Anonymous Functions](https://docs.scala-lang.org/scala3/book/fun-anonymous-functions.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Closures (Swifts Äquivalent zu Arrow Functions)
let items = ["Apfel", "Banane", "Kirsche"]
let filtered = items.filter { $0.hasPrefix("A") }

// Closure mit expliziten Parametern
items.forEach { item in
    print("Item: \(item)")
}
```

**Besonderheiten:**
- Swift hat keine Arrow Functions im Sinne von JavaScript/TypeScript
- Closures mit `{ }` sind das Äquivalent
- Shorthand Argument Names (`$0`, `$1`, etc.)

**Weiterführende Links:**
- [Swift Documentation - Closures](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/closures/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
function applyFunc(func: (item: string) => string, item: string): string {
    return func(item);
}

const result = applyFunc((item: string) => item.toUpperCase(), "Apfel");

// Lexikalisches this-Binding
const obj = {
    name: "Test",
    getName: () => this.name, // this bezieht sich auf umgebenden Kontext
    getNameTraditional: function() {
        return this.name; // this bezieht sich auf obj
    }
};
```

**Besonderheiten:**
- Arrow Functions wurden in ES6/ES2015 eingeführt
- Haben lexikalisches `this`-Binding (kein eigenes `this`), was sie ideal für Callbacks macht
- Unterstützt vollständige Typannotationen

**Weiterführende Links:**
- [TypeScript Handbook - Arrow Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html#arrow-functions)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
// Arrow Functions (seit PHP 7.4)
$double = fn($x) => $x * 2;

$numbers = [1, 2, 3, 4, 5];
$doubled = array_map(fn($n) => $n * 2, $numbers);

// Arrow Functions erfassen Variablen automatisch per Value
$factor = 3;
$multiply = fn($x) => $x * $factor;
?>
```

**Besonderheiten:**
- `fn` Syntax seit PHP 7.4
- Erfassen äußere Variablen automatisch per Value (kein `use` nötig)
- Nur ein einzelner Ausdruck (kein Block-Body)
- Implizites `return`

**Weiterführende Links:**
- [PHP Documentation - Arrow Functions](https://www.php.net/manual/en/functions.arrow.php)

</TabItem>
</Tabs>


## 7.1.3. Blocks (Ruby-style)

Code-Blöcke, die an Methoden übergeben werden können. Sie werden mit `{ }` oder `do...end` definiert und ermöglichen es, Code als Argumente zu übergeben, ähnlich wie Lambda-Ausdrücke, aber mit spezieller Syntax-Integration.

### Sprachen {#sprachen}

<Tabs availableTabs={['crystal', 'ruby']}>
<TabItem value="crystal" label="Crystal">

```crystal
def apply_block(items, &block)
  result = [] of String
  items.each do |item|
    result << block.call(item)
  end
  result
end

items = ["Apfel", "Banane", "Kirsche"]
result = apply_block(items) { |item| item.upcase }

# Alternative Syntax mit do...end
result = apply_block(items) do |item|
  item.upcase
end
```

**Besonderheiten:**
- Unterstützt sowohl `{ }` als auch `do...end` Syntax
- Blocks sind First-Class-Objekte (Procs)
- Können in Variablen gespeichert werden

**Weiterführende Links:**
- [Crystal Documentation - Blocks and Procs](https://crystal-lang.org/reference/1.11/syntax_and_semantics/blocks_and_procs.html)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
def apply_block(items, &block)
  result = []
  items.each do |item|
    result << block.call(item)
  end
  result
end

items = ["Apfel", "Banane", "Kirsche"]
result = apply_block(items) { |item| item.upcase }

# Alternative Syntax mit do...end
result = apply_block(items) do |item|
  item.upcase
end

# Block kann auch direkt an Methoden übergeben werden
result = items.map { |item| item.upcase }
```

**Besonderheiten:**
- Unterstützt sowohl `{ }` als auch `do...end` Syntax
- Blocks sind First-Class-Objekte (Procs)
- Können in Variablen gespeichert werden
- Können an Methoden übergeben werden, ohne explizit als Parameter deklariert zu sein

**Weiterführende Links:**
- [Ruby Documentation - Blocks](https://ruby-doc.org/core-3.1.0/doc/syntax/methods_rdoc.html#label-Blocks)

</TabItem>
</Tabs>


## 7.1.4. Local Functions

Funktionen, die innerhalb einer anderen Funktion definiert werden können. Ermöglichen es, Hilfsfunktionen nahe am Verwendungsort zu platzieren und den Gültigkeitsbereich zu begrenzen.

### Sprachen {#sprachen}

<Tabs availableTabs={['ada', 'clojure', 'common-lisp', 'csharp', 'd', 'dart', 'elixir', 'elm', 'erlang', 'fortran', 'fsharp', 'go', 'groovy', 'haskell', 'idris', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'lua', 'matlab', 'nim', 'object-pascal', 'ocaml', 'octave', 'perl', 'php', 'python', 'r', 'racket', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'vbnet', 'wolfram-language']}>
<TabItem value="ada" label="Ada">

```ada
function Calculate(Items : String_Array) return String_Array is
    function Filter_Items(Items : String_Array; Prefix : String) return String_Array is
        Result : String_Array(1 .. 0);
    begin
        for Item of Items loop
            if Item'Length >= Prefix'Length and then
               Item(Item'First .. Item'First + Prefix'Length - 1) = Prefix then
                Result := Result & Item;
            end if;
        end loop;
        return Result;
    end Filter_Items;
    
    function Process_Item(Item : String) return String is
    begin
        return To_Upper(Item);
    end Process_Item;
    
    Filtered : String_Array := Filter_Items(Items, "A");
    Result : String_Array(1 .. 0);
begin
    for Item of Filtered loop
        Result := Result & Process_Item(Item);
    end loop;
    return Result;
end Calculate;
```

**Besonderheiten:**
- Lokale Funktionen können auf Variablen der äußeren Funktion zugreifen
- Unterstützen Closures

**Weiterführende Links:**
- [Ada Documentation - Functions](https://learn.adacore.com/courses/intro-to-ada/chapters/subprograms.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
string[] Calculate(string[] items)
{
    string[] FilterItems(string[] items, string prefix)
    {
        return items.Where(item => item.StartsWith(prefix)).ToArray();
    }
    
    string ProcessItem(string item)
    {
        return item.ToUpper();
    }
    
    var filtered = FilterItems(items, "A");
    return filtered.Select(ProcessItem).ToArray();
}

// Benötigt: using System.Linq;
string[] items = { "Apfel", "Banane", "Kirsche" };
string[] result = Calculate(items);
```

**Besonderheiten:**
- Lokale Funktionen (seit C# 7.0)
- Können auf Variablen der äußeren Funktion zugreifen
- Können vor ihrer Definition aufgerufen werden

**Weiterführende Links:**
- [Microsoft C# Documentation - Local Functions](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/local-functions)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
List<String> calculate(List<String> items) {
    List<String> filterItems(List<String> items, String prefix) {
        return items.where((item) => item.startsWith(prefix)).toList();
    }
    
    String processItem(String item) {
        return item.toUpperCase();
    }
    
    var filtered = filterItems(items, "A");
    return filtered.map(processItem).toList();
}

var items = ["Apfel", "Banane", "Kirsche"];
var result = calculate(items);
```

**Besonderheiten:**
- Lokale Funktionen können auf Variablen der äußeren Funktion zugreifen
- Unterstützen Closures

**Weiterführende Links:**
- [Dart Documentation - Functions](https://dart.dev/guides/language/language-tour#functions)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
def calculate(items) do
    filter_items = fn items, prefix ->
        Enum.filter(items, &String.starts_with?(&1, prefix))
    end
    
    process_item = fn item ->
        String.upcase(item)
    end
    
    filtered = filter_items.(items, "A")
    Enum.map(filtered, process_item)
end

items = ["Apfel", "Banane", "Kirsche"]
result = calculate(items)
```

**Besonderheiten:**
- Lokale Funktionen werden als anonyme Funktionen definiert
- Können auf Variablen der äußeren Funktion zugreifen (Closures)

**Weiterführende Links:**
- [Elixir Documentation - Functions](https://elixir-lang.org/getting-started/basic-types.html#functions)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
calculate(Items) ->
    FilterItems = fun(Items, Prefix) ->
        lists:filter(fun(Item) -> 
            string:prefix(Item, Prefix) =/= nomatch 
        end, Items)
    end,
    
    ProcessItem = fun(Item) ->
        string:uppercase(Item)
    end,
    
    Filtered = FilterItems(Items, "A"),
    lists:map(ProcessItem, Filtered).

Items = ["Apfel", "Banane", "Kirsche"],
Result = calculate(Items).
```

**Besonderheiten:**
- Lokale Funktionen werden als anonyme Funktionen definiert
- Können auf Variablen der äußeren Funktion zugreifen (Closures)

**Weiterführende Links:**
- [Erlang Documentation - Functions](https://www.erlang.org/doc/reference_manual/functions.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
let calculate items =
    let filterItems items prefix =
        List.filter (fun item -> item.StartsWith(prefix)) items
    
    let processItem item =
        item.ToUpper()
    
    let filtered = filterItems items "A"
    List.map processItem filtered

let items = ["Apfel"; "Banane"; "Kirsche"]
let result = calculate items
```

**Besonderheiten:**
- Lokale Funktionen werden mit `let` definiert
- Können auf Variablen der äußeren Funktion zugreifen

**Weiterführende Links:**
- [F# Documentation - Functions](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/functions/)

</TabItem>
<TabItem value="go" label="Go">

```go
func calculate(items []string) []string {
    filterItems := func(items []string, prefix string) []string {
        var filtered []string
        for _, item := range items {
            if strings.HasPrefix(item, prefix) {
                filtered = append(filtered, item)
            }
        }
        return filtered
    }
    
    processItem := func(item string) string {
        return strings.ToUpper(item)
    }
    
    filtered := filterItems(items, "A")
    result := make([]string, len(filtered))
    for i, item := range filtered {
        result[i] = processItem(item)
    }
    return result
}

// Benötigt: import "strings"
items := []string{"Apfel", "Banane", "Kirsche"}
result := calculate(items)
```

**Besonderheiten:**
- Lokale Funktionen werden als anonyme Funktionen definiert
- Können auf Variablen der äußeren Funktion zugreifen (Closures)

**Weiterführende Links:**
- [Go Documentation - Functions](https://go.dev/ref/spec#Function_declarations)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
def calculate(items) {
    def filterItems(items, prefix) {
        items.findAll { it.startsWith(prefix) }
    }
    
    def processItem(item) {
        item.toUpperCase()
    }
    
    def filtered = filterItems(items, "A")
    filtered.collect { processItem(it) }
}

def items = ["Apfel", "Banane", "Kirsche"]
def result = calculate(items)
```

**Besonderheiten:**
- Lokale Funktionen können auf Variablen der äußeren Funktion zugreifen
- Unterstützen Closures

**Weiterführende Links:**
- [Groovy Documentation - Functions](https://groovy-lang.org/closures.html)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
calculate :: [String] -> [String]
calculate items = 
    let filterItems items prefix = filter (isPrefixOf prefix) items
        processItem item = map toUpper item
        filtered = filterItems items "A"
    in map processItem filtered

items = ["Apfel", "Banane", "Kirsche"]
result = calculate items
```

**Besonderheiten:**
- Lokale Funktionen werden mit `let` oder `where` definiert
- Können auf Variablen der äußeren Funktion zugreifen

**Weiterführende Links:**
- [Haskell Documentation - Functions](https://www.haskell.org/tutorial/functions.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
function calculate(items) {
    function filterItems(items, prefix) {
        return items.filter(item => item.startsWith(prefix));
    }
    
    function processItem(item) {
        return item.toUpperCase();
    }
    
    const filtered = filterItems(items, "A");
    return filtered.map(processItem);
}

const items = ["Apfel", "Banane", "Kirsche"];
const result = calculate(items);
```

**Besonderheiten:**
- Lokale Funktionen können auf Variablen der äußeren Funktion zugreifen (Closures)
- Werden durch Hoisting an den Anfang der Funktion verschoben

**Weiterführende Links:**
- [MDN Web Docs - Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
function calculate(items)
    function filter_items(items, prefix)
        filter(item -> startswith(item, prefix), items)
    end
    
    function process_item(item)
        uppercase(item)
    end
    
    filtered = filter_items(items, "A")
    map(process_item, filtered)
end

items = ["Apfel", "Banane", "Kirsche"]
result = calculate(items)
```

**Besonderheiten:**
- Lokale Funktionen können auf Variablen der äußeren Funktion zugreifen
- Unterstützen Closures

**Weiterführende Links:**
- [Julia Documentation - Functions](https://docs.julialang.org/en/v1/manual/functions/)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Local Functions
fun calculate(items: list<string>): list<string>
  // Lokale Hilfsfunktion
  fun filter-items(xs: list<string>, prefix: string): list<string>
    xs.filter fn(item) { item.starts-with(prefix) }

  fun process-item(item: string): string
    item.to-upper

  val filtered = filter-items(items, "A")
  filtered.map(process-item)

val items = ["Apfel", "Banane", "Kirsche"]
val result = calculate(items) // ["APFEL"]
```

**Besonderheiten:**
- Lokale Funktionen werden mit `fun` innerhalb einer anderen Funktion definiert
- Haben Zugriff auf Variablen der umschließenden Funktion (Closures)
- Können rekursiv sein
- Dienen der Kapselung von Hilfslogik

**Weiterführende Links:**
- [Koka Language Guide - Functions](https://koka-lang.github.io/koka/doc/book.html#sec-functions)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
fun calculate(items: List<String>): List<String> {
    fun filterItems(items: List<String>, prefix: String): List<String> {
        return items.filter { it.startsWith(prefix) }
    }
    
    fun processItem(item: String): String {
        return item.uppercase()
    }
    
    val filtered = filterItems(items, "A")
    return filtered.map(::processItem)
}

val items = listOf("Apfel", "Banane", "Kirsche")
val result = calculate(items)
```

**Besonderheiten:**
- Lokale Funktionen können auf Variablen der äußeren Funktion zugreifen
- Unterstützen Closures

**Weiterführende Links:**
- [Kotlin Documentation - Functions](https://kotlinlang.org/docs/functions.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```haskell
def calculate (items : List String) : List String :=
  let filtered := filterItems items "A"
  filtered.map processItem
where
  filterItems (items : List String) (prefix : String) : List String :=
    items.filter (fun item => prefix.isPrefixOf item)
  processItem (item : String) : String :=
    item.map Char.toUpper

let items := ["Apfel", "Banane", "Kirsche"]
#eval calculate items  -- ["APFEL"]
```

**Besonderheiten:**
- `where`-Klausel für lokale Funktionsdefinitionen nach dem Funktionskörper
- `let ... := ...` für lokale Bindungen im Funktionskörper
- Lokale Funktionen können auf Parameter der äußeren Funktion zugreifen (Closures)

**Weiterführende Links:**
- [Lean 4 Documentation - Where Declarations](https://lean-lang.org/lean4/doc/declarations.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
function calculate(items)
    local function filterItems(items, prefix)
        local filtered = {}
        for _, item in ipairs(items) do
            if string.sub(item, 1, #prefix) == prefix then
                table.insert(filtered, item)
            end
        end
        return filtered
    end
    
    local function processItem(item)
        return string.upper(item)
    end
    
    local filtered = filterItems(items, "A")
    local result = {}
    for _, item in ipairs(filtered) do
        table.insert(result, processItem(item))
    end
    return result
end

local items = {"Apfel", "Banane", "Kirsche"}
local result = calculate(items)
```

**Besonderheiten:**
- Lokale Funktionen können auf Variablen der äußeren Funktion zugreifen
- Unterstützen Closures

**Weiterführende Links:**
- [Lua Documentation - Functions](https://www.lua.org/manual/5.4/manual.html#3.4.11)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
proc calculate(items: seq[string]): seq[string] =
    proc filterItems(items: seq[string], prefix: string): seq[string] =
        result = @[]
        for item in items:
            if item.startsWith(prefix):
                result.add(item)
    
    proc processItem(item: string): string =
        item.toUpper()
    
    let filtered = filterItems(items, "A")
    result = @[]
    for item in filtered:
        result.add(processItem(item))

let items = @["Apfel", "Banane", "Kirsche"]
let result = calculate(items)
```

**Besonderheiten:**
- Lokale Funktionen können auf Variablen der äußeren Funktion zugreifen
- Unterstützen Closures

**Weiterführende Links:**
- [Nim Documentation - Functions](https://nim-lang.org/docs/manual.html#procedures)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
let calculate items =
    let filter_items items prefix =
        List.filter (fun item -> String.starts_with ~prefix item) items
    in
    let process_item item =
        String.uppercase_ascii item
    in
    let filtered = filter_items items "A" in
    List.map process_item filtered

let items = ["Apfel"; "Banane"; "Kirsche"]
let result = calculate items
```

**Besonderheiten:**
- Lokale Funktionen werden mit `let ... in` definiert
- Können auf Variablen der äußeren Funktion zugreifen

**Weiterführende Links:**
- [OCaml Documentation - Functions](https://ocaml.org/manual/expr.html#ss:expr-let)

</TabItem>
<TabItem value="php" label="PHP">

```php
function calculate($items) {
    $filterItems = function($items, $prefix) {
        return array_filter($items, function($item) use ($prefix) {
            return str_starts_with($item, $prefix);
        });
    };
    
    $processItem = function($item) {
        return strtoupper($item);
    };
    
    $filtered = $filterItems($items, "A");
    return array_map($processItem, $filtered);
}

$items = ["Apfel", "Banane", "Kirsche"];
$result = calculate($items);
```

**Besonderheiten:**
- Lokale Funktionen werden als anonyme Funktionen definiert
- Können auf Variablen der äußeren Funktion zugreifen (mit `use`)

**Weiterführende Links:**
- [PHP Documentation - Functions](https://www.php.net/manual/en/functions.anonymous.php)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
sub calculate {
    my @items = @_;
    
    sub filter_items {
        my ($items, $prefix) = @_;
        return grep { substr($_, 0, length($prefix)) eq $prefix } @$items;
    }
    
    sub process_item {
        my $item = shift;
        return uc($item);
    }
    
    my @filtered = filter_items(\@items, "A");
    return map { process_item($_) } @filtered;
}

my @items = ("Apfel", "Banane", "Kirsche");
my @result = calculate(@items);
```

**Besonderheiten:**
- Lokale Funktionen können auf Variablen der äußeren Funktion zugreifen
- Unterstützen Closures

**Weiterführende Links:**
- [Perl Documentation - Functions](https://perldoc.perl.org/perlsub)

</TabItem>
<TabItem value="python" label="Python">

```python
def calculate(items):
    def filter_items(items, prefix):
        return [item for item in items if item.startswith(prefix)]
    
    def process_item(item):
        return item.upper()
    
    filtered = filter_items(items, "A")
    return [process_item(item) for item in filtered]

items = ["Apfel", "Banane", "Kirsche"]
result = calculate(items)
```

**Besonderheiten:**
- Lokale Funktionen können auf Variablen der äußeren Funktion zugreifen (Closures)
- Können nach der Definition aufgerufen werden, auch wenn sie später im Code definiert sind

**Weiterführende Links:**
- [Python Documentation - Nested Functions](https://docs.python.org/3/tutorial/controlflow.html#defining-functions)

</TabItem>
<TabItem value="r" label="R">

```r
calculate <- function(items) {
    filter_items <- function(items, prefix) {
        items[startsWith(items, prefix)]
    }
    
    process_item <- function(item) {
        toupper(item)
    }
    
    filtered <- filter_items(items, "A")
    sapply(filtered, process_item)
}

items <- c("Apfel", "Banane", "Kirsche")
result <- calculate(items)
```

**Besonderheiten:**
- Lokale Funktionen können auf Variablen der äußeren Funktion zugreifen
- Unterstützen Closures

**Weiterführende Links:**
- [R Documentation - Functions](https://cran.r-project.org/doc/manuals/r-release/R-intro.html#Functions)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
(define (calculate items)
    (define (filter-items items prefix)
        (filter (lambda (item) (string-prefix? item prefix)) items))
    
    (define (process-item item)
        (string-upcase item))
    
    (define filtered (filter-items items "A"))
    (map process-item filtered))

(define items '("Apfel" "Banane" "Kirsche"))
(define result (calculate items))
```

**Besonderheiten:**
- Lokale Funktionen werden mit `define` innerhalb der Funktion definiert
- Können auf Variablen der äußeren Funktion zugreifen

**Weiterführende Links:**
- [Racket Documentation - Functions](https://docs.racket-lang.org/guide/define.html)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
def calculate(items)
    def filter_items(items, prefix)
        items.select { |item| item.start_with?(prefix) }
    end
    
    def process_item(item)
        item.upcase
    end
    
    filtered = filter_items(items, "A")
    filtered.map { |item| process_item(item) }
end

items = ["Apfel", "Banane", "Kirsche"]
result = calculate(items)
```

**Besonderheiten:**
- Lokale Funktionen können auf Variablen der äußeren Funktion zugreifen
- Unterstützen Closures

**Weiterführende Links:**
- [Ruby Documentation - Methods](https://docs.ruby-lang.org/en/master/syntax/methods_rdoc.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
fn calculate(items: Vec<&str>) -> Vec<String> {
    fn filter_items(items: &[&str], prefix: &str) -> Vec<&str> {
        items.iter().filter(|item| item.starts_with(prefix)).copied().collect()
    }
    
    fn process_item(item: &str) -> String {
        item.to_uppercase()
    }
    
    let filtered = filter_items(&items, "A");
    filtered.iter().map(|item| process_item(item)).collect()
}

let items = vec!["Apfel", "Banane", "Kirsche"];
let result = calculate(items);
```

**Besonderheiten:**
- Lokale Funktionen können auf Variablen der äußeren Funktion zugreifen
- Unterstützen Closures

**Weiterführende Links:**
- [Rust Book - Functions](https://doc.rust-lang.org/book/ch03-03-functions.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
def calculate(items: List[String]): List[String] = {
    def filterItems(items: List[String], prefix: String): List[String] = {
        items.filter(_.startsWith(prefix))
    }
    
    def processItem(item: String): String = {
        item.toUpperCase
    }
    
    val filtered = filterItems(items, "A")
    filtered.map(processItem)
}

val items = List("Apfel", "Banane", "Kirsche")
val result = calculate(items)
```

**Besonderheiten:**
- Lokale Funktionen können auf Variablen der äußeren Funktion zugreifen
- Unterstützen Closures

**Weiterführende Links:**
- [Scala Documentation - Functions](https://docs.scala-lang.org/tour/functions.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
(define (calculate items)
    (define (filter-items items prefix)
        (filter (lambda (item) (string-prefix? prefix item)) items))

    (define (process-item item)
        (string-upcase item))

    (define filtered (filter-items items "A"))
    (map process-item filtered))

(define items '("Apfel" "Banane" "Kirsche"))
(define result (calculate items))
```

**Besonderheiten:**
- Lokale Funktionen werden mit `define` innerhalb der Funktion definiert
- Zugriff auf Variablen der äußeren Funktion möglich

**Weiterführende Links:**
- [Scheme Documentation - Functions](https://www.scheme.com/tspl4/start.html#./start:h0)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
func calculate(items: [String]) -> [String] {
    func filterItems(items: [String], prefix: String) -> [String] {
        return items.filter { $0.hasPrefix(prefix) }
    }
    
    func processItem(item: String) -> String {
        return item.uppercased()
    }
    
    let filtered = filterItems(items: items, prefix: "A")
    return filtered.map(processItem)
}

let items = ["Apfel", "Banane", "Kirsche"]
let result = calculate(items: items)
```

**Besonderheiten:**
- Lokale Funktionen können auf Variablen der äußeren Funktion zugreifen
- Unterstützen Closures

**Weiterführende Links:**
- [Swift Documentation - Functions](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/functions/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
function calculate(items: string[]): string[] {
    function filterItems(items: string[], prefix: string): string[] {
        return items.filter(item => item.startsWith(prefix));
    }
    
    function processItem(item: string): string {
        return item.toUpperCase();
    }
    
    const filtered = filterItems(items, "A");
    return filtered.map(processItem);
}

const items = ["Apfel", "Banane", "Kirsche"];
const result = calculate(items);
```

**Besonderheiten:**
- Lokale Funktionen können auf Variablen der äußeren Funktion zugreifen (Closures)
- Werden durch Hoisting an den Anfang der Funktion verschoben
- Unterstützen vollständige Typannotationen

**Weiterführende Links:**
- [TypeScript Handbook - Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
Function Calculate(items As String()) As String()
    Function FilterItems(items As String(), prefix As String) As String()
        Return items.Where(Function(item) item.StartsWith(prefix)).ToArray()
    End Function
    
    Function ProcessItem(item As String) As String
        Return item.ToUpper()
    End Function
    
    Dim filtered = FilterItems(items, "A")
    Return filtered.Select(Function(item) ProcessItem(item)).ToArray()
End Function

' Benötigt: Imports System.Linq
Dim items As String() = {"Apfel", "Banane", "Kirsche"}
Dim result As String() = Calculate(items)
```

**Besonderheiten:**
- Lokale Funktionen (seit VB.NET 16.0)
- Können auf Variablen der äußeren Funktion zugreifen
- Können vor ihrer Definition aufgerufen werden

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Local Functions](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/procedures/local-functions)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Lokale Funktionen mit letfn
(defn process [items]
  (letfn [(double-val [x] (* x 2))
          (format-val [x] (str "Wert: " x))]
    (map (comp format-val double-val) items)))

(process [1 2 3])  ; ("Wert: 2" "Wert: 4" "Wert: 6")

;; letfn erlaubt gegenseitige Rekursion
(letfn [(even? [n] (if (zero? n) true (odd? (dec n))))
        (odd? [n] (if (zero? n) false (even? (dec n))))]
  (even? 10))  ; true
```

**Besonderheiten:**
- `letfn` für lokale Funktionsdefinitionen
- Erlaubt gegenseitige Rekursion zwischen lokalen Funktionen
- Alternativ: `let` mit `fn` für einfache lokale Funktionen

**Weiterführende Links:**
- [Clojure Documentation - Special Forms](https://clojure.org/reference/special_forms#letfn)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; flet (nicht-rekursive lokale Funktionen)
(flet ((square (x) (* x x))
       (double (x) (* x 2)))
  (+ (square 3) (double 4)))  ; 17

;; labels (rekursive lokale Funktionen)
(labels ((factorial (n)
           (if (<= n 1) 1
               (* n (factorial (1- n))))))
  (factorial 5))  ; 120
```

**Besonderheiten:**
- `flet` für nicht-rekursive lokale Funktionen (können sich nicht selbst aufrufen)
- `labels` für rekursive lokale Funktionen (können sich selbst und gegenseitig aufrufen)
- Lokale Funktionen können Closures über die umgebende Umgebung bilden

**Weiterführende Links:**
- [Common Lisp HyperSpec - flet](http://www.lispworks.com/documentation/HyperSpec/Body/s_flet_.htm)

</TabItem>
<TabItem value="d" label="D">

```d
// Local Functions (verschachtelte Funktionen)
int calculate(int x, int y) {
    // Lokale Hilfsfunktion
    int square(int n) {
        return n * n;
    }

    int add(int a, int b) {
        return a + b;
    }

    return add(square(x), square(y));
}

int result = calculate(3, 4);  // 25
```

**Besonderheiten:**
- Funktionen können innerhalb anderer Funktionen definiert werden
- Lokale Funktionen haben Zugriff auf den umgebenden Scope (Closure)
- Können als Delegates an andere Funktionen übergeben werden
- Unterstützt beliebige Verschachtelungstiefe

**Weiterführende Links:**
- [D Language Specification - Nested Functions](https://dlang.org/spec/function.html#nested)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Lokale Funktionen in let-Ausdrücken
fibonacci : Int -> Int
fibonacci n =
    let
        fib a b count =
            if count <= 0 then a
            else fib b (a + b) (count - 1)
    in
    fib 0 1 n
```

**Besonderheiten:**
- Lokale Funktionen werden in `let ... in` definiert
- Haben Zugriff auf den umgebenden Scope (Closures)
- Können rekursiv sein
- Nicht außerhalb des `let`-Blocks sichtbar

**Weiterführende Links:**
- [Elm Documentation - Let Expressions](https://guide.elm-lang.org/core_language.html)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Lokale Funktionen mit CONTAINS
subroutine process(values, n)
    integer, intent(in) :: n
    real, intent(inout) :: values(n)
    integer :: i

    do i = 1, n
        values(i) = transform(values(i))
    end do

contains
    function transform(x) result(res)
        real, intent(in) :: x
        real :: res
        res = x * 2.0 + 1.0
    end function transform
end subroutine process
```

**Besonderheiten:**
- Interne Prozeduren werden nach `CONTAINS` definiert
- Haben Zugriff auf Variablen der umgebenden Prozedur (Host Association)
- Nur innerhalb der umgebenden Prozedur sichtbar

**Weiterführende Links:**
- [Fortran Wiki - Internal procedures](https://fortranwiki.org/fortran/show/Internal+procedures)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Lokale Funktionen mit where
circleArea : Double -> Double
circleArea radius = pi * square radius
  where
    square : Double -> Double
    square x = x * x

-- Lokale Funktionen mit let
compute : Int -> Int
compute n =
    let double : Int -> Int
        double x = x * 2
    in double n + double (n + 1)
```

**Besonderheiten:**
- `where`-Klauseln definieren lokale Funktionen am Ende einer Definition
- `let`-Ausdrücke definieren lokale Funktionen inline
- Lokale Funktionen haben Zugriff auf äußere Bindungen

**Weiterführende Links:**
- [Idris 2 Documentation - Where Clauses](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
function result = main()
    result = helper(5);
end

% Lokale Funktion (nur in dieser Datei zugänglich)
function y = helper(x)
    y = x * 2;
end
```

**Besonderheiten:**
- Lokale Funktionen werden am Ende der Datei definiert
- Nur innerhalb der Datei zugänglich
- Seit R2016b auch in Skripten unterstützt

**Weiterführende Links:**
- [MATLAB Documentation - Local Functions](https://www.mathworks.com/help/matlab/matlab_prog/local-functions.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
procedure Outer;
var
  x: Integer;

  function Square(n: Integer): Integer;
  begin
    Result := n * n;
  end;

  procedure PrintResult(n: Integer);
  begin
    WriteLn('Ergebnis: ', Square(n));
  end;

begin
  x := 5;
  PrintResult(x);
end;
```

**Besonderheiten:**
- Verschachtelte Funktionen/Prozeduren in jeder Tiefe möglich
- Zugriff auf Variablen der äußeren Funktion (Lexical Scoping)
- Müssen vor dem `begin`-Block der äußeren Funktion deklariert werden

**Weiterführende Links:**
- [Free Pascal Documentation - Nested Procedures](https://www.freepascal.org/docs-html/ref/refch14.html)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
function result = main()
    result = helper(5);
end

function result = helper(x)
    result = x * 2;
end
```

**Besonderheiten:**
- Lokale Funktionen werden am Ende der Datei definiert
- Nur innerhalb derselben Datei sichtbar
- Hauptfunktion muss als erste Funktion in der Datei stehen

**Weiterführende Links:**
- [GNU Octave Documentation - Functions](https://octave.org/doc/v8.1.0/Functions-and-Scripts.html)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
outer[] := Module[{inner},
    inner[x_] := x * 2;
    inner[5] + inner[10]
]

outer[]  (* 30 *)
```

**Besonderheiten:**
- Lokale Funktionen können in `Module[]` definiert werden
- Sie sind nur innerhalb des Modules sichtbar

**Weiterführende Links:**
- [Wolfram Language Documentation - Module](https://reference.wolfram.com/language/ref/Module.html)

</TabItem>
</Tabs>

## 7.1.5. Lambda with Receiver

Lambda-Ausdrücke, die mit einem Receiver-Objekt aufgerufen werden. Der Receiver wird innerhalb des Lambda-Ausdrucks als `this` verfügbar, was es ermöglicht, Methoden des Receivers direkt aufzurufen, ohne das Objekt explizit zu referenzieren.

### Sprachen {#sprachen}

<Tabs availableTabs={['kotlin']}>
<TabItem value="kotlin" label="Kotlin">

```kotlin
class StringBuilder {
    private val items = mutableListOf<String>()
    
    fun append(item: String) {
        items.add(item)
    }
    
    fun build(): String {
        return items.joinToString(", ")
    }
}

fun buildString(block: StringBuilder.() -> Unit): String {
    val sb = StringBuilder()
    sb.block()
    return sb.build()
}

val result = buildString {
    append("Apfel")
    append("Banane")
    append("Kirsche")
}
```

**Besonderheiten:**
- Lambda with Receiver wurde in Kotlin 1.0 eingeführt
- Ermöglicht es, DSL-ähnliche Syntax zu erstellen
- Der Receiver wird innerhalb des Lambda-Ausdrucks als `this` verfügbar

**Weiterführende Links:**
- [Kotlin Documentation - Lambda with Receiver](https://kotlinlang.org/docs/lambdas.html#function-literals-with-receiver)

</TabItem>
</Tabs>


## 7.1.6. Functions vs. Subroutines

Unterscheidung zwischen Funktionen (die einen Wert zurückgeben) und Subroutinen/Prozeduren (die keinen Wert zurückgeben). Einige Sprachen unterscheiden explizit zwischen diesen beiden Konzepten.

### Sprachen {#sprachen}

<Tabs availableTabs={['ada', 'fortran', 'mercury', 'object-pascal', 'vbnet']}>
<TabItem value="ada" label="Ada">

```ada
-- Funktion (gibt einen Wert zurück)
function Add(a, b: Integer) return Integer is
begin
    return a + b;
end Add;

-- Prozedur (gibt keinen Wert zurück)
procedure Print_Sum(a, b: Integer) is
    Sum: Integer;
begin
    Sum := a + b;
    Put_Line(Integer'Image(Sum));
end Print_Sum;

Result : Integer := Add(5, 3);
Print_Sum(5, 3);
```

**Besonderheiten:**
- Funktionen müssen einen Rückgabetyp haben
- Prozeduren geben keinen Wert zurück
- Beide können Parameter haben

**Weiterführende Links:**
- [Ada Documentation - Subprograms](https://learn.adacore.com/courses/intro-to-ada/chapters/subprograms.html)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Funktion (gibt einen Wert zurück)
function Add(a, b) result(sum)
    integer, intent(in) :: a, b
    integer :: sum
    sum = a + b
end function Add

! Subroutine (gibt keinen Wert zurück)
subroutine Print_Sum(a, b)
    integer, intent(in) :: a, b
    integer :: sum
    sum = a + b
    print *, sum
end subroutine Print_Sum

integer :: result
result = Add(5, 3)
call Print_Sum(5, 3)
```

**Besonderheiten:**
- Funktionen müssen einen Rückgabetyp haben
- Subroutinen geben keinen Wert zurück
- Subroutinen werden mit `call` aufgerufen

**Weiterführende Links:**
- [Fortran Documentation - Functions and Subroutines](https://gcc.gnu.org/onlinedocs/gfortran/Function.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Funktion (gibt einen Wert zurück)
:- func add(int, int) = int.
add(A, B) = A + B.

% Prädikat (gibt keinen Wert zurück, verwendet Output-Parameter)
:- pred print_sum(int::in, int::in, io::di, io::uo) is det.
print_sum(A, B, !IO) :-
    Sum = A + B,
    io.write_int(Sum, !IO),
    io.nl(!IO).
```

**Besonderheiten:**
- Funktionen (`func`) geben einen Wert zurück
- Prädikate (`pred`) verwenden Output-Parameter statt Rückgabewerte
- Determinismus-Deklaration erforderlich (`is det`, `is semidet`, etc.)
- `!IO` ist ein State-Variable-Paar für I/O-Threading

**Weiterführende Links:**
- [Mercury Language Reference - Functions](https://mercurylang.org/information/doc-latest/mercury_ref/Functions.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Funktion (gibt einen Wert zurück)
function Add(a, b: Integer): Integer;
begin
    Result := a + b;
end;

// Prozedur (gibt keinen Wert zurück)
procedure PrintSum(a, b: Integer);
var
    Sum: Integer;
begin
    Sum := a + b;
    WriteLn(Sum);
end;

var
    Result: Integer;
begin
    Result := Add(5, 3);
    PrintSum(5, 3);
end.
```

**Besonderheiten:**
- Funktionen müssen einen Rückgabetyp haben
- Prozeduren geben keinen Wert zurück
- Beide können Parameter haben

**Weiterführende Links:**
- [Object Pascal Documentation - Procedures and Functions](https://docwiki.embarcadero.com/RADStudio/en/Procedures_and_Functions)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Funktion (gibt einen Wert zurück)
Function Add(a As Integer, b As Integer) As Integer
    Return a + b
End Function

' Subroutine (gibt keinen Wert zurück)
Sub PrintSum(a As Integer, b As Integer)
    Dim sum As Integer = a + b
    Console.WriteLine(sum)
End Sub

Dim result As Integer = Add(5, 3)
PrintSum(5, 3)
```

**Besonderheiten:**
- Funktionen müssen einen Rückgabetyp haben
- Subroutinen geben keinen Wert zurück
- Beide können Parameter haben

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Procedures](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/procedures/)

</TabItem>
</Tabs>


## 7.1.7. Default Parameters

Funktionsparameter können mit Standardwerten versehen werden. Wenn beim Aufruf kein Wert für einen Parameter übergeben wird, wird der Standardwert verwendet.

### Sprachen {#sprachen}

<Tabs availableTabs={['carbon', 'common-lisp', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'elixir', 'groovy', 'haxe', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'matlab', 'nim', 'object-pascal', 'ocaml', 'odin', 'php', 'python', 'r', 'racket', 'ruby', 'scala', 'swift', 'typescript', 'v', 'vbnet', 'wolfram-language']} yellowTabs={['fortran']} orangeTabs={['clojure', 'java', 'lua', 'octave', 'rust', 'zig']}>
<TabItem value="carbon" label="Carbon">

```cpp
fn Greet(name: String, greeting: String = "Hallo") -> String {
    return greeting + ", " + name + "!";
}

var result1 = Greet("Welt");
var result2 = Greet("Welt", "Guten Tag");
```

**Besonderheiten:**
- Experimentelle Sprache, Syntax kann sich noch ändern
- Unterstützt Default Parameters

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
def greet(name : String, greeting : String = "Hallo") : String
  "#{greeting}, #{name}!"
end

result1 = greet("Welt")
result2 = greet("Welt", "Guten Tag")
```

**Besonderheiten:**
- Unterstützt Default Parameters
- Ruby-ähnliche Syntax

**Weiterführende Links:**
- [Crystal Documentation - Default Arguments](https://crystal-lang.org/reference/1.11/syntax_and_semantics/default_and_named_arguments.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
string Greet(string name, string greeting = "Hallo")
{
    return $"{greeting}, {name}!";
}

string result1 = Greet("Welt");
string result2 = Greet("Welt", "Guten Tag");
```

**Besonderheiten:**
- Unterstützt Default Parameters seit C# 4.0
- Default Parameters müssen am Ende der Parameterliste stehen

**Weiterführende Links:**
- [Microsoft C# Documentation - Named and Optional Arguments](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/named-and-optional-arguments)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
#include <string>

std::string Greet(const std::string& name, const std::string& greeting = "Hallo") {
    return greeting + ", " + name + "!";
}

std::string result1 = Greet("Welt");
std::string result2 = Greet("Welt", "Guten Tag");
```

**Besonderheiten:**
- Unterstützt Default Parameters seit C++98
- Default Parameters müssen am Ende der Parameterliste stehen

**Weiterführende Links:**
- [cppreference.com - Default arguments](https://en.cppreference.com/w/cpp/language/default_arguments)

</TabItem>
<TabItem value="d" label="D">

```d
string greet(string name, string greeting = "Hallo") {
    return greeting ~ ", " ~ name ~ "!";
}

string result1 = greet("Welt");
string result2 = greet("Welt", "Guten Tag");
```

**Besonderheiten:**
- Unterstützt Default Parameters
- Default Parameters müssen am Ende der Parameterliste stehen

**Weiterführende Links:**
- [D Language Specification - Default Function Arguments](https://dlang.org/spec/function.html#default-arguments)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
String greet(String name, [String greeting = "Hallo"]) {
    return "$greeting, $name!";
}

String result1 = greet("Welt");
String result2 = greet("Welt", "Guten Tag");
```

**Besonderheiten:**
- Unterstützt Default Parameters über optionale Parameter mit `[]`
- Default Parameters müssen am Ende der Parameterliste stehen

**Weiterführende Links:**
- [Dart Documentation - Optional Parameters](https://dart.dev/guides/language/language-tour#optional-parameters)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
def greet(name, greeting = "Hallo") {
    "$greeting, $name!"
}

def result1 = greet("Welt")
def result2 = greet("Welt", "Guten Tag")
```

**Besonderheiten:**
- Unterstützt Default Parameters
- Default Parameters müssen am Ende der Parameterliste stehen

**Weiterführende Links:**
- [Groovy Documentation - Methods](https://groovy-lang.org/structure.html#_methods)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
function greet(name: String, ?greeting: String = "Hallo"): String {
    return greeting + ", " + name + "!";
}

var result1 = greet("Welt");
var result2 = greet("Welt", "Guten Tag");
```

**Besonderheiten:**
- Unterstützt Default Parameters über optionale Parameter mit `?`
- Cross-Platform-Kompilierung

**Weiterführende Links:**
- [Haxe Documentation - Optional Arguments](https://haxe.org/manual/lf-function-arguments.html#optional-arguments)

</TabItem>
<TabItem value="java" label="Java">

```java
static String greet(String name, String greeting) {
    if (greeting == null) {
        greeting = "Hallo";
    }
    return greeting + ", " + name + "!";
}

// Java unterstützt keine Default Parameters direkt
// Workaround: Method Overloading
static String greet(String name) {
    return greet(name, "Hallo");
}

String result1 = greet("Welt");
String result2 = greet("Welt", "Guten Tag");
```

**Besonderheiten:**
- Java unterstützt keine Default Parameters direkt
- Workaround: Method Overloading verwenden

**Weiterführende Links:**
- [Oracle Java Documentation - Methods](https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
function greet(name, greeting = "Hallo") {
    return `${greeting}, ${name}!`;
}

const result1 = greet("Welt");
const result2 = greet("Welt", "Guten Tag");
```

**Besonderheiten:**
- Unterstützt Default Parameters seit ES6/ES2015
- Default Parameters müssen am Ende der Parameterliste stehen

**Weiterführende Links:**
- [MDN Web Docs - Default Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
function greet(name; greeting = "Hallo")
    "$greeting, $name!"
end

result1 = greet("Welt")
result2 = greet("Welt", greeting = "Guten Tag")
```

**Besonderheiten:**
- Unterstützt Default Parameters über Keyword Arguments
- Default Parameters werden mit `;` getrennt

**Weiterführende Links:**
- [Julia Documentation - Keyword Arguments](https://docs.julialang.org/en/v1/manual/functions/#Keyword-Arguments)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Default Parameters
fun greet(name: string, greeting: string = "Hallo"): string
  greeting ++ ", " ++ name ++ "!"

val result1 = greet("Welt")                    // "Hallo, Welt!"
val result2 = greet("Welt", "Guten Tag")       // "Guten Tag, Welt!"

// Mehrere Default Parameters
fun create-point(x: int = 0, y: int = 0): (int, int)
  (x, y)

val origin = create-point()       // (0, 0)
val point  = create-point(5)      // (5, 0)
val point2 = create-point(5, 10)  // (5, 10)
```

**Besonderheiten:**
- Default-Werte werden mit `=` nach dem Parametertyp angegeben
- Parameter mit Default-Werten können beim Aufruf weggelassen werden
- Kann mit Named Parameters kombiniert werden

**Weiterführende Links:**
- [Koka Language Guide - Functions](https://koka-lang.github.io/koka/doc/book.html#sec-functions)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
fun greet(name: String, greeting: String = "Hallo"): String {
    return "$greeting, $name!"
}

val result1 = greet("Welt")
val result2 = greet("Welt", "Guten Tag")
```

**Besonderheiten:**
- Unterstützt Default Parameters seit Kotlin 1.0
- Default Parameters müssen am Ende der Parameterliste stehen

**Weiterführende Links:**
- [Kotlin Documentation - Default Arguments](https://kotlinlang.org/docs/functions.html#default-arguments)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```haskell
def greet (name : String) (greeting : String := "Hallo") : String :=
  s!"{greeting}, {name}!"

#eval greet "Welt"               -- "Hallo, Welt!"
#eval greet "Welt" "Guten Tag"   -- "Guten Tag, Welt!"
```

**Besonderheiten:**
- Default-Werte mit `:= wert` in der Parameterliste
- Default Parameters können an beliebiger Position stehen
- Können mit Named Parameters kombiniert werden

**Weiterführende Links:**
- [Lean 4 Documentation - Default Arguments](https://lean-lang.org/lean4/doc/functions.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
function greet(name, greeting)
    greeting = greeting or "Hallo"
    return greeting .. ", " .. name .. "!"
end

local result1 = greet("Welt")
local result2 = greet("Welt", "Guten Tag")
```

**Besonderheiten:**
- Lua unterstützt keine Default Parameters direkt
- Workaround: `or`-Operator verwenden

**Weiterführende Links:**
- [Lua Documentation - Functions](https://www.lua.org/manual/5.4/manual.html#3.4.11)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
proc greet(name: string, greeting: string = "Hallo"): string =
    greeting & ", " & name & "!"

let result1 = greet("Welt")
let result2 = greet("Welt", "Guten Tag")
```

**Besonderheiten:**
- Unterstützt Default Parameters
- Default Parameters müssen am Ende der Parameterliste stehen

**Weiterführende Links:**
- [Nim Documentation - Procedures](https://nim-lang.org/docs/manual.html#procedures)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
function Greet(name: string; greeting: string = 'Hallo'): string;
begin
    Result := greeting + ', ' + name + '!';
end;

var
    result1, result2: string;
begin
    result1 := Greet('Welt');
    result2 := Greet('Welt', 'Guten Tag');
end.
```

**Besonderheiten:**
- Unterstützt Default Parameters
- Default Parameters müssen am Ende der Parameterliste stehen

**Weiterführende Links:**
- [Object Pascal Documentation - Default Parameters](https://docwiki.embarcadero.com/RADStudio/en/Default_Parameters)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
let greet ?(greeting = "Hallo") name =
    greeting ^ ", " ^ name ^ "!"

let result1 = greet "Welt"
let result2 = greet ~greeting:"Guten Tag" "Welt"
```

**Besonderheiten:**
- Unterstützt Default Parameters über optionale Parameter mit `?`
- Default Parameters können in beliebiger Reihenfolge übergeben werden

**Weiterführende Links:**
- [OCaml Documentation - Optional Arguments](https://ocaml.org/docs/first-hour#optional-arguments)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
greet :: proc(name: string, greeting: string = "Hallo") -> string {
    return fmt.tprintf("%s, %s!", greeting, name)
}

result1 := greet("Welt")
result2 := greet("Welt", "Guten Tag")
```

**Besonderheiten:**
- Unterstützt Default Parameters
- Default Parameters müssen am Ende der Parameterliste stehen

**Weiterführende Links:**
- [Odin Documentation - Procedures](https://odin-lang.org/docs/overview/#procedures)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
function greet($name, $greeting = "Hallo") {
    return "$greeting, $name!";
}

$result1 = greet("Welt");
$result2 = greet("Welt", "Guten Tag");
```

**Besonderheiten:**
- Unterstützt Default Parameters seit PHP 4.0
- Default Parameters müssen am Ende der Parameterliste stehen

**Weiterführende Links:**
- [PHP Documentation - Function Arguments](https://www.php.net/manual/en/functions.arguments.php#functions.arguments.default)

</TabItem>
<TabItem value="python" label="Python">

```python
def greet(name, greeting="Hallo"):
    return f"{greeting}, {name}!"

result1 = greet("Welt")
result2 = greet("Welt", "Guten Tag")
```

**Besonderheiten:**
- Unterstützt Default Parameters seit Python 1.0
- Default Parameters müssen am Ende der Parameterliste stehen

**Weiterführende Links:**
- [Python Documentation - Default Argument Values](https://docs.python.org/3/tutorial/controlflow.html#default-argument-values)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
def greet(name, greeting = "Hallo")
    "#{greeting}, #{name}!"
end

result1 = greet("Welt")
result2 = greet("Welt", "Guten Tag")
```

**Besonderheiten:**
- Unterstützt Default Parameters seit Ruby 1.0
- Default Parameters müssen am Ende der Parameterliste stehen

**Weiterführende Links:**
- [Ruby Documentation - Methods](https://docs.ruby-lang.org/en/master/syntax/methods_rdoc.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
fn greet(name: &str, greeting: Option<&str>) -> String {
    let greeting = greeting.unwrap_or("Hallo");
    format!("{}, {}!", greeting, name)
}

let result1 = greet("Welt", None);
let result2 = greet("Welt", Some("Guten Tag"));
```

**Besonderheiten:**
- Rust unterstützt keine Default Parameters direkt
- Workaround: `Option<T>` verwenden

**Weiterführende Links:**
- [Rust Book - Functions](https://doc.rust-lang.org/book/ch03-03-functions.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
def greet(name: String, greeting: String = "Hallo"): String = {
    s"$greeting, $name!"
}

val result1 = greet("Welt")
val result2 = greet("Welt", "Guten Tag")
```

**Besonderheiten:**
- Unterstützt Default Parameters seit Scala 2.0
- Default Parameters müssen am Ende der Parameterliste stehen

**Weiterführende Links:**
- [Scala Documentation - Default Parameter Values](https://docs.scala-lang.org/tour/default-parameter-values.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
func greet(name: String, greeting: String = "Hallo") -> String {
    return "\(greeting), \(name)!"
}

let result1 = greet(name: "Welt")
let result2 = greet(name: "Welt", greeting: "Guten Tag")
```

**Besonderheiten:**
- Unterstützt Default Parameters seit Swift 1.0
- Default Parameters können an beliebiger Position stehen (nicht nur am Ende)

**Weiterführende Links:**
- [Swift Documentation - Functions](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/functions/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
function greet(name: string, greeting: string = "Hallo"): string {
    return `${greeting}, ${name}!`;
}

const result1 = greet("Welt");
const result2 = greet("Welt", "Guten Tag");
```

**Besonderheiten:**
- Unterstützt Default Parameters seit ES6/ES2015
- Default Parameters müssen am Ende der Parameterliste stehen

**Weiterführende Links:**
- [TypeScript Handbook - Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
Function Greet(name As String, Optional greeting As String = "Hallo") As String
    Return greeting & ", " & name & "!"
End Function

Dim result1 As String = Greet("Welt")
Dim result2 As String = Greet("Welt", "Guten Tag")
```

**Besonderheiten:**
- Unterstützt Default Parameters über `Optional`-Schlüsselwort
- Default Parameters müssen am Ende der Parameterliste stehen

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Optional Parameters](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/procedures/optional-parameters)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
fn greet(name: []const u8, greeting: ?[]const u8) []const u8 {
    const g = greeting orelse "Hallo";
    // Implementation würde hier stehen
    return name;
}

const result1 = greet("Welt", null);
const result2 = greet("Welt", "Guten Tag");
```

**Besonderheiten:**
- Zig unterstützt keine Default Parameters direkt
- Workaround: Optionale Parameter mit `?` verwenden

**Weiterführende Links:**
- [Zig Documentation - Functions](https://ziglang.org/documentation/0.11.0/#Functions)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Default Parameters über Multi-Arity
(defn greet
  ([name] (greet name "Hello"))
  ([name greeting] (str greeting ", " name "!")))

(greet "Alice")           ; "Hello, Alice!"
(greet "Alice" "Hallo")   ; "Hallo, Alice!"

;; Alternative: Map-Destructuring mit Defaults
(defn connect [{:keys [host port timeout]
                :or {host "localhost" port 8080 timeout 5000}}]
  (str host ":" port " (timeout: " timeout ")"))

(connect {})                    ; "localhost:8080 (timeout: 5000)"
(connect {:port 3000})          ; "localhost:3000 (timeout: 5000)"
```

**Besonderheiten:**
- Multi-Arity-Funktionen als Ersatz für Default-Parameter
- Map-Destructuring mit `:or` für benannte Defaults
- Kein direktes Keyword-Argument-Syntax wie in Python

**Weiterführende Links:**
- [Clojure Documentation - Functions](https://clojure.org/guides/learn/functions#_multi_arity_functions)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Default Parameters mit &optional
(defun greet (name &optional (greeting "Hello"))
  (format nil "~a, ~a!" greeting name))

(greet "World")          ; "Hello, World!"
(greet "World" "Hi")     ; "Hi, World!"

;; supplied-p Parameter zum Prüfen, ob Argument übergeben wurde
(defun log-message (msg &optional (level :info level-supplied-p))
  (if level-supplied-p
      (format nil "[~a] ~a (explicit)" level msg)
      (format nil "[~a] ~a (default)" level msg)))
```

**Besonderheiten:**
- `&optional` für optionale Parameter mit Defaultwerten
- `supplied-p` Parameter zur Erkennung, ob ein Argument übergeben wurde
- Defaultwerte können beliebige Ausdrücke sein (werden zur Aufrufzeit evaluiert)

**Weiterführende Links:**
- [Common Lisp HyperSpec - Ordinary Lambda Lists](http://www.lispworks.com/documentation/HyperSpec/Body/03_da.htm)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
defmodule Greeter do
  def greet(name, greeting \\ "Hallo") do
    "#{greeting}, #{name}!"
  end

  def create_point(x \\ 0, y \\ 0) do
    {x, y}
  end
end

Greeter.greet("Welt")          # "Hallo, Welt!"
Greeter.greet("Welt", "Hi")    # "Hi, Welt!"
Greeter.create_point()         # {0, 0}
Greeter.create_point(1, 2)     # {1, 2}
```

**Besonderheiten:**
- Default-Werte werden mit `\\` definiert
- Erzeugt intern mehrere Funktionsklauseln mit verschiedenen Aritäten
- Bei Funktionen mit mehreren Klauseln muss ein Funktionskopf ohne Body deklariert werden

**Weiterführende Links:**
- [Elixir Documentation - Default Arguments](https://elixir-lang.org/getting-started/modules-and-functions.html#default-arguments)

</TabItem>

<TabItem value="fortran" label="Fortran">

```fortran
! Optionale Parameter mit OPTIONAL und PRESENT()
subroutine greet(name, greeting)
    character(len=*), intent(in) :: name
    character(len=*), intent(in), optional :: greeting

    if (present(greeting)) then
        print *, greeting, " ", name
    else
        print *, "Hallo ", name
    end if
end subroutine

call greet("Welt")              ! "Hallo Welt"
call greet("Welt", "Guten Tag") ! "Guten Tag Welt"
```

**Besonderheiten:**
- `OPTIONAL`-Attribut für optionale Parameter
- `PRESENT(arg)` prüft, ob ein optionales Argument übergeben wurde
- Kein echter Default-Wert in der Signatur, sondern manuelle Prüfung mit `PRESENT()`

**Weiterführende Links:**
- [Fortran Wiki - Optional Arguments](https://fortranwiki.org/fortran/show/Optional+arguments)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% Default Parameters (seit R2019b)
function result = greet(name, greeting)
    arguments
        name string
        greeting string = "Hallo"
    end
    result = greeting + " " + name;
end

greet("Max")          % "Hallo Max"
greet("Max", "Hi")    % "Hi Max"
```

**Besonderheiten:**
- `arguments`-Block für Parametervalidierung und Standardwerte (seit R2019b)
- Vor R2019b: manuelle Prüfung mit `nargin`
- Standardwerte werden nur für fehlende Argumente verwendet

**Weiterführende Links:**
- [MATLAB Documentation - Arguments Validation](https://www.mathworks.com/help/matlab/matlab_prog/function-argument-validation-1.html)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
function result = greet(name, greeting)
    if nargin < 2
        greeting = "Hallo";
    end
    result = sprintf("%s, %s!", greeting, name);
end

greet("Welt")          % "Hallo, Welt!"
greet("Welt", "Hi")    % "Hi, Welt!"
```

**Besonderheiten:**
- Keine direkte Default-Parameter-Syntax
- `nargin` gibt die Anzahl der übergebenen Argumente zurück
- Default-Werte werden über `if nargin < n`-Prüfung gesetzt

**Weiterführende Links:**
- [GNU Octave Documentation - Defining Functions](https://octave.org/doc/v8.1.0/Defining-Functions.html)

</TabItem>
<TabItem value="r" label="R">

```r
greet <- function(name, greeting = "Hallo") {
    paste(greeting, name)
}

result1 <- greet("Anna")           # "Hallo Anna"
result2 <- greet("Anna", "Hi")     # "Hi Anna"
```

**Besonderheiten:**
- Default-Werte werden in der Funktionsdefinition angegeben
- Default-Ausdrücke werden lazy ausgewertet (erst bei Verwendung)
- Default-Werte können auf andere Parameter referenzieren

**Weiterführende Links:**
- [R Documentation - Function Definition](https://cran.r-project.org/doc/manuals/r-release/R-lang.html#Function-objects)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
(define (greet [name "Welt"])
  (printf "Hallo, ~a!\n" name))

(greet)         ; "Hallo, Welt!"
(greet "Max")   ; "Hallo, Max!"
```

**Besonderheiten:**
- Optionale Parameter werden in eckigen Klammern mit Defaultwert definiert
- Können mit Keyword-Argumenten kombiniert werden

**Weiterführende Links:**
- [Racket Documentation - Function Definitions](https://docs.racket-lang.org/guide/define.html)

</TabItem>
<TabItem value="v" label="V">

```v
// Default Parameters (über Struct-Argumente)
@[params]
struct Config {
    width  int = 800
    height int = 600
    title  string = 'Untitled'
}

fn create_window(c Config) {
    println('${c.title}: ${c.width}x${c.height}')
}

create_window()                          // Alle Defaults
create_window(width: 1920, height: 1080) // Teilweise überschrieben
create_window(title: 'Mein Fenster')     // Nur Titel
```

**Besonderheiten:**
- Default-Parameter über `@[params]` Struct-Attribute
- Felder mit Default-Werten können beim Aufruf weggelassen werden
- Benannte Argumente beim Aufruf

**Weiterführende Links:**
- [V Documentation - Default Field Values](https://github.com/vlang/v/blob/master/doc/docs.md#default-field-values)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Default Parameters mit Optional *)
greet[name_: "Welt"] := "Hallo, " <> name <> "!"

greet[]        (* "Hallo, Welt!" *)
greet["Max"]   (* "Hallo, Max!" *)
```

**Besonderheiten:**
- `x_: default` definiert einen optionalen Parameter mit Default-Wert
- Mehrere optionale Parameter möglich

**Weiterführende Links:**
- [Wolfram Language Documentation - Optional](https://reference.wolfram.com/language/ref/Optional.html)

</TabItem>
</Tabs>


## 7.1.8. Named Parameters

Funktionsparameter können beim Aufruf explizit benannt werden, was die Lesbarkeit verbessert und es ermöglicht, Parameter in beliebiger Reihenfolge zu übergeben.

### Sprachen {#sprachen}

<Tabs availableTabs={['carbon', 'common-lisp', 'crystal', 'csharp', 'dart', 'fortran', 'gleam', 'groovy', 'julia', 'koka', 'kotlin', 'lean4', 'matlab', 'nim', 'ocaml', 'odin', 'php', 'python', 'r', 'racket', 'ruby', 'scala', 'swift', 'typescript', 'vbnet']} yellowTabs={['objective-c']} orangeTabs={['lua']}>
<TabItem value="carbon" label="Carbon">

```cpp
fn CreateUser(name: String, age: i32, email: String) -> User {
    // Implementation würde hier stehen
    return User{};
}

var user = CreateUser(name: "Max", age: 30, email: "max@example.com");
```

**Besonderheiten:**
- Experimentelle Sprache, Syntax kann sich noch ändern
- Unterstützt Named Parameters

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
def create_user(name : String, age : Int32, email : String) : User
  # Implementation würde hier stehen
  User.new
end

user = create_user(name: "Max", age: 30, email: "max@example.com")
```

**Besonderheiten:**
- Unterstützt Named Parameters
- Ruby-ähnliche Syntax

**Weiterführende Links:**
- [Crystal Documentation - Named Arguments](https://crystal-lang.org/reference/1.11/syntax_and_semantics/default_and_named_arguments.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
User CreateUser(string name, int age, string email)
{
    // Implementation würde hier stehen
    return new User();
}

var user = CreateUser(name: "Max", age: 30, email: "max@example.com");
```

**Besonderheiten:**
- Unterstützt Named Parameters seit C# 4.0
- Named Parameters können in beliebiger Reihenfolge übergeben werden

**Weiterführende Links:**
- [Microsoft C# Documentation - Named and Optional Arguments](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/named-and-optional-arguments)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
User createUser({required String name, required int age, required String email}) {
    // Implementation würde hier stehen
    return User();
}

var user = createUser(name: "Max", age: 30, email: "max@example.com");
```

**Besonderheiten:**
- Unterstützt Named Parameters über `{}`-Syntax
- `required`-Schlüsselwort für obligatorische Parameter

**Weiterführende Links:**
- [Dart Documentation - Named Parameters](https://dart.dev/guides/language/language-tour#named-parameters)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
def createUser(Map args) {
    def name = args.name
    def age = args.age
    def email = args.email
    // Implementation würde hier stehen
    return new User()
}

def user = createUser(name: "Max", age: 30, email: "max@example.com")
```

**Besonderheiten:**
- Unterstützt Named Parameters über Map-Syntax
- Parameter können in beliebiger Reihenfolge übergeben werden

**Weiterführende Links:**
- [Groovy Documentation - Named Parameters](https://groovy-lang.org/structure.html#_named_parameters)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
function create_user(; name, age, email)
    # Implementation würde hier stehen
    return User()
end

user = create_user(name = "Max", age = 30, email = "max@example.com")
```

**Besonderheiten:**
- Unterstützt Named Parameters über Keyword Arguments mit `;`
- Named Parameters können in beliebiger Reihenfolge übergeben werden

**Weiterführende Links:**
- [Julia Documentation - Keyword Arguments](https://docs.julialang.org/en/v1/manual/functions/#Keyword-Arguments)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Named Parameters
fun create-rectangle(width: int, height: int): int
  width * height

// Aufruf mit Named Parameters
val area1 = create-rectangle(width = 10, height = 5)   // 50
val area2 = create-rectangle(height = 5, width = 10)   // 50 (Reihenfolge egal)

// Kombination mit Default Parameters
fun greet(name: string, greeting: string = "Hallo"): string
  greeting ++ ", " ++ name ++ "!"

val result = greet(greeting = "Guten Tag", name = "Welt") // "Guten Tag, Welt!"
```

**Besonderheiten:**
- Named Parameters werden mit `name = value` beim Aufruf angegeben
- Ermöglichen eine beliebige Reihenfolge der Argumente
- Verbessern die Lesbarkeit bei Funktionen mit vielen Parametern
- Können mit Default Parameters kombiniert werden

**Weiterführende Links:**
- [Koka Language Guide - Functions](https://koka-lang.github.io/koka/doc/book.html#sec-functions)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
fun createUser(name: String, age: Int, email: String): User {
    // Implementation würde hier stehen
    return User()
}

val user = createUser(name = "Max", age = 30, email = "max@example.com")
```

**Besonderheiten:**
- Unterstützt Named Parameters seit Kotlin 1.0
- Named Parameters können in beliebiger Reihenfolge übergeben werden

**Weiterführende Links:**
- [Kotlin Documentation - Named Arguments](https://kotlinlang.org/docs/functions.html#named-arguments)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```haskell
structure User where
  name : String
  age : Nat
  email : String

def createUser (name : String) (age : Nat) (email : String) : User :=
  { name, age, email }

-- Named Parameters mit (param := wert)
#eval createUser (name := "Max") (age := 30) (email := "max@example.com")

-- Reihenfolge kann verändert werden
#eval createUser (email := "max@example.com") (name := "Max") (age := 30)
```

**Besonderheiten:**
- Named Parameters mit `(parameter := wert)` Syntax
- Ermöglichen beliebige Reihenfolge der Argumente
- Können mit Default Parameters kombiniert werden
- Verbessern die Lesbarkeit bei Funktionen mit vielen Parametern

**Weiterführende Links:**
- [Lean 4 Documentation - Named Arguments](https://lean-lang.org/lean4/doc/functions.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
function createUser(args)
    local name = args.name
    local age = args.age
    local email = args.email
    -- Implementation würde hier stehen
    return {}
end

local user = createUser({name = "Max", age = 30, email = "max@example.com"})
```

**Besonderheiten:**
- Lua unterstützt keine Named Parameters direkt
- Workaround: Tabelle als Parameter verwenden

**Weiterführende Links:**
- [Lua Documentation - Functions](https://www.lua.org/manual/5.4/manual.html#3.4.11)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
proc createUser(name: string, age: int, email: string): User =
    # Implementation würde hier stehen
    User()

let user = createUser(name = "Max", age = 30, email = "max@example.com")
```

**Besonderheiten:**
- Unterstützt Named Parameters
- Named Parameters können in beliebiger Reihenfolge übergeben werden

**Weiterführende Links:**
- [Nim Documentation - Procedures](https://nim-lang.org/docs/manual.html#procedures)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
let create_user ~name ~age ~email =
    (* Implementation würde hier stehen *)
    { name; age; email }

let user = create_user ~name:"Max" ~age:30 ~email:"max@example.com"
```

**Besonderheiten:**
- Unterstützt Named Parameters über `~`-Syntax
- Named Parameters können in beliebiger Reihenfolge übergeben werden

**Weiterführende Links:**
- [OCaml Documentation - Labeled Arguments](https://ocaml.org/docs/first-hour#labeled-arguments)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
create_user :: proc(name: string, age: int, email: string) -> User {
    // Implementation würde hier stehen
    return User{}
}

user := create_user(name = "Max", age = 30, email = "max@example.com")
```

**Besonderheiten:**
- Unterstützt Named Parameters
- Named Parameters können in beliebiger Reihenfolge übergeben werden

**Weiterführende Links:**
- [Odin Documentation - Procedures](https://odin-lang.org/docs/overview/#procedures)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
function createUser($name, $age, $email) {
    // Implementation würde hier stehen
    return new User();
}

$user = createUser(name: "Max", age: 30, email: "max@example.com");
```

**Besonderheiten:**
- Unterstützt Named Parameters seit PHP 8.0
- Named Parameters können in beliebiger Reihenfolge übergeben werden

**Weiterführende Links:**
- [PHP Documentation - Named Arguments](https://www.php.net/manual/en/functions.arguments.php#functions.named-arguments)

</TabItem>
<TabItem value="python" label="Python">

```python
def create_user(name, age, email):
    # Implementation würde hier stehen
    return User()

user = create_user(name="Max", age=30, email="max@example.com")
```

**Besonderheiten:**
- Unterstützt Named Parameters seit Python 1.0
- Named Parameters können in beliebiger Reihenfolge übergeben werden

**Weiterführende Links:**
- [Python Documentation - Keyword Arguments](https://docs.python.org/3/tutorial/controlflow.html#keyword-arguments)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
def create_user(name:, age:, email:)
    # Implementation würde hier stehen
    User.new
end

user = create_user(name: "Max", age: 30, email: "max@example.com")
```

**Besonderheiten:**
- Unterstützt Named Parameters über Keyword Arguments (seit Ruby 2.0)
- Named Parameters können in beliebiger Reihenfolge übergeben werden

**Weiterführende Links:**
- [Ruby Documentation - Keyword Arguments](https://docs.ruby-lang.org/en/master/syntax/methods_rdoc.html#label-Keyword+Arguments)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
def createUser(name: String, age: Int, email: String): User = {
    // Implementation würde hier stehen
    User()
}

val user = createUser(name = "Max", age = 30, email = "max@example.com")
```

**Besonderheiten:**
- Unterstützt Named Parameters seit Scala 2.0
- Named Parameters können in beliebiger Reihenfolge übergeben werden

**Weiterführende Links:**
- [Scala Documentation - Named Arguments](https://docs.scala-lang.org/tour/named-arguments.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
func createUser(name: String, age: Int, email: String) {
    print("\(name), \(age), \(email)")
}

let user = createUser(name: "Max", age: 30, email: "max@example.com")
```

**Besonderheiten:**
- Named Parameters (Argument Labels) sind Standard in Swift
- Argumente müssen in der definierten Reihenfolge übergeben werden
- Externe und interne Parameternamen können unterschiedlich sein (`func greet(for name: String)`)

**Weiterführende Links:**
- [Swift Documentation - Functions](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/functions/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
function createUser(name: string, age: number, email: string): User {
    // Implementation würde hier stehen
    return {} as User;
}

const user = createUser(name: "Max", age: 30, email: "max@example.com");
```

**Besonderheiten:**
- Unterstützt Named Parameters seit ES6/ES2015
- Named Parameters können in beliebiger Reihenfolge übergeben werden

**Weiterführende Links:**
- [TypeScript Handbook - Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
Function CreateUser(name As String, age As Integer, email As String) As User
    ' Implementation würde hier stehen
    Return New User()
End Function

Dim user As User = CreateUser(name:="Max", age:=30, email:="max@example.com")
```

**Besonderheiten:**
- Unterstützt Named Parameters seit VB.NET 1.0
- Named Parameters können in beliebiger Reihenfolge übergeben werden

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Named Arguments](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/procedures/passing-arguments-by-position-and-by-name)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Named Parameters mit &key
(defun make-person (&key name age (city "Berlin"))
  (list :name name :age age :city city))

(make-person :name "Alice" :age 30)
;; (:NAME "Alice" :AGE 30 :CITY "Berlin")

(make-person :age 25 :name "Bob" :city "München")
;; (:NAME "Bob" :AGE 25 :CITY "München")
```

**Besonderheiten:**
- `&key` für benannte (Keyword) Parameter
- Reihenfolge der Argumente ist egal
- Defaultwerte und `supplied-p` wie bei `&optional`
- Kombination mit `&optional` und `&rest` möglich

**Weiterführende Links:**
- [Common Lisp HyperSpec - Ordinary Lambda Lists](http://www.lispworks.com/documentation/HyperSpec/Body/03_da.htm)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Named Parameters (Keyword Arguments)
subroutine create_rect(width, height, color)
    real, intent(in) :: width, height
    character(len=*), intent(in) :: color
    print *, width, height, color
end subroutine

! Aufruf mit Keyword Arguments
call create_rect(width=10.0, height=20.0, color="rot")
call create_rect(color="blau", height=5.0, width=3.0)
```

**Besonderheiten:**
- Keyword Arguments erlauben beliebige Reihenfolge der Argumente
- Syntax: `parameter_name=wert`
- Erfordert explizites Interface (z.B. über Module)

**Weiterführende Links:**
- [Fortran Wiki - Keyword Arguments](https://fortranwiki.org/fortran/show/Keyword+arguments)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// Named Parameters (Labelled Arguments)
pub fn replace(in string: String, each pattern: String, with replacement: String) -> String {
  // Implementation
  string
}

// Aufruf mit Labels
replace(in: "Hello World", each: "World", with: "Gleam")
```

**Besonderheiten:**
- Labelled Arguments mit `label name: Type` Syntax
- Labels sind optional beim Aufruf
- Verbessern die Lesbarkeit von Funktionsaufrufen

**Weiterführende Links:**
- [Gleam Documentation - Labelled Arguments](https://tour.gleam.run/functions/labelled-arguments/)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% Named Parameters (seit R2021a)
function result = createPoint(options)
    arguments
        options.x double = 0
        options.y double = 0
        options.color string = "red"
    end
    result = sprintf("(%g, %g) in %s", options.x, options.y, options.color);
end

createPoint(x=1, y=2, color="blue")
```

**Besonderheiten:**
- Name-Value-Argumente seit R2021a mit `arguments`-Block
- Vor R2021a: `varargin` mit `inputParser` oder manuellem Parsing
- Name-Value-Argumente sind optional und haben Standardwerte

**Weiterführende Links:**
- [MATLAB Documentation - Name-Value Arguments](https://www.mathworks.com/help/matlab/matlab_prog/function-argument-validation-1.html)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Named Parameters über Selector-Labels
- (void)sendMessage:(NSString *)message
         toRecipient:(NSString *)recipient
         withPriority:(int)priority {
    NSLog(@"Sende '%@' an %@ (Priorität: %d)", message, recipient, priority);
}

// Aufruf mit benannten Parametern
[self sendMessage:@"Hallo"
      toRecipient:@"Alice"
      withPriority:1];
```

**Besonderheiten:**
- Parameter-Labels sind Teil des Method-Selectors
- Labels sind beim Aufruf zwingend erforderlich (nicht optional)
- Die Reihenfolge der Parameter ist fest (kein Umordnen möglich)
- Selector-basiertes Naming ist ein Kernelement der Smalltalk-Tradition

**Weiterführende Links:**
- [Apple Documentation - Defining Classes](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/DefiningClasses/DefiningClasses.html)

</TabItem>
<TabItem value="r" label="R">

```r
create_person <- function(name, age, city) {
    list(name = name, age = age, city = city)
}

# Aufruf mit Named Parameters (Reihenfolge egal)
person <- create_person(age = 30, name = "Anna", city = "Berlin")
```

**Besonderheiten:**
- Alle Parameter können per Name übergeben werden
- Named Parameters erlauben beliebige Reihenfolge
- Partielles Matching von Parameternamen möglich (z.B. `na` für `name`)

**Weiterführende Links:**
- [R Documentation - Function Arguments](https://cran.r-project.org/doc/manuals/r-release/R-lang.html#Argument-matching)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
(define (create-point #:x x #:y y)
  (list x y))

(create-point #:x 3 #:y 4)  ; '(3 4)
(create-point #:y 4 #:x 3)  ; '(3 4) - Reihenfolge egal
```

**Besonderheiten:**
- Keyword-Argumente mit `#:keyword`-Syntax
- Reihenfolge der Keyword-Argumente ist beliebig
- Können mit Default-Werten kombiniert werden

**Weiterführende Links:**
- [Racket Documentation - Keyword Arguments](https://docs.racket-lang.org/guide/lambda.html)

</TabItem>
</Tabs>


## 7.1.9. Implicit Parameters

Funktionsparameter, die automatisch aus dem Kontext bereitgestellt werden.

### Sprachen {#sprachen}

<Tabs availableTabs={['haskell', 'lean4', 'scala']} orangeTabs={['swift']}>
<TabItem value="haskell" label="Haskell">

```haskell
-- Implicit parameters mit ?-Syntax
f :: (?x :: Int) => Int -> Int
f y = y + ?x

-- Verwendung
let ?x = 10 in f 5  -- Ergebnis: 15

-- Implicit parameters mit type classes
class Show a where
    show :: a -> String

instance Show Int where
    show = show

-- show verwendet implizit Show-Instanz
printValue :: (Show a) => a -> IO ()
printValue x = putStrLn (show x)  -- show ist implizit
```

**Besonderheiten:**
- Implicit parameters mit `?`-Syntax
- Type classes ermöglichen implizite Parameter über Typkontext
- Implicit parameters müssen explizit im Typ-Signatur deklariert werden
- Werden aus dem lexikalischen Kontext bereitgestellt

**Weiterführende Links:**
- [Haskell Documentation - Implicit Parameters](https://ghc.gitlab.haskell.org/ghc/doc/users_guide/exts/implicit_parameters.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```haskell
-- Implizite Parameter mit {}
def identity {α : Type} (x : α) : α := x

-- Typeclass-Constraint mit []
def add [Add α] (x y : α) : α := x + y

-- Auto-bound implicit (α wird automatisch implizit)
def head? (xs : List α) : Option α :=
  xs.head?

-- Instanz-Auflösung
#eval add 5 3       -- 8 (Add Nat wird automatisch gewählt)
#eval identity 42   -- 42 (α = Nat wird inferiert)
```

**Besonderheiten:**
- `{x : Typ}` für reguläre implizite Parameter (werden vom Unifier inferiert)
- `[Typeclass α]` für Typeclass-Instanzen (werden durch Instanz-Suche aufgelöst)
- `{{x : Typ}}` für strikt implizite Parameter (nur durch Instanz-Suche)
- Auto-bound implizite Variablen: freie Typvariablen werden automatisch implizit
- Implizite Parameter sind ein Kernfeature von Lean 4

**Weiterführende Links:**
- [Lean 4 Documentation - Implicit Arguments](https://lean-lang.org/lean4/doc/typeClasses.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Implicit parameters
def greet(name: String)(implicit greeting: String): String = {
  s"$greeting, $name!"
}

implicit val defaultGreeting: String = "Hello"

greet("Alice")  // Verwendet implizit defaultGreeting

// Implicit parameters mit type classes
trait Ordering[T] {
  def compare(x: T, y: T): Int
}

def max[T](x: T, y: T)(implicit ord: Ordering[T]): T = {
  if (ord.compare(x, y) > 0) x else y
}

implicit val intOrdering: Ordering[Int] = (x, y) => x.compareTo(y)

max(10, 20)  // Verwendet implizit intOrdering
```

**Besonderheiten:**
- Implicit parameters mit `implicit`-Keyword
- Implicit values müssen im Scope verfügbar sein
- Type classes werden über implicit parameters implementiert
- Kann zu unerwartetem Verhalten führen, daher vorsichtig verwenden

**Weiterführende Links:**
- [Scala Documentation - Implicit Parameters](https://docs.scala-lang.org/tour/implicit-parameters.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Implicit parameters mit default arguments
func greet(name: String, greeting: String = "Hello") -> String {
    return "\(greeting), \(name)!"
}

greet("Alice")  // Verwendet default "Hello"

// Implicit parameters mit protocols
protocol Ordering {
    associatedtype Element
    func compare(_ x: Element, _ y: Element) -> Int
}

func max<T>(_ x: T, _ y: T, using ordering: Ordering) -> T where ordering.Element == T {
    return ordering.compare(x, y) > 0 ? x : y
}

// Swift hat keine echten implicit parameters wie Scala
// Stattdessen werden default arguments verwendet
```

**Besonderheiten:**
- Keine echten implicit parameters wie in Scala
- Default arguments ermöglichen ähnliche Funktionalität
- Protocols ermöglichen type-class-ähnliche Funktionalität
- Explizite Parameterübergabe ist erforderlich

**Weiterführende Links:**
- [Swift Documentation - Functions](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/thebasics/)

</TabItem>
</Tabs>


## 7.1.10. Variadic Functions

Funktionen, die eine variable Anzahl von Argumenten akzeptieren können. Ermöglichen es, Funktionen zu schreiben, die mit unterschiedlichen Anzahlen von Parametern aufgerufen werden können.

### Sprachen {#sprachen}

<Tabs availableTabs={['c', 'clojure', 'common-lisp', 'cpp', 'csharp', 'd', 'go', 'groovy', 'java', 'javascript', 'julia', 'kotlin', 'lua', 'matlab', 'nim', 'objective-c', 'object-pascal', 'octave', 'odin', 'perl', 'php', 'python', 'r', 'racket', 'ruby', 'scala', 'swift', 'typescript', 'v', 'vbnet', 'wolfram-language']} orangeTabs={['dart', 'haxe', 'ocaml', 'rust', 'zig']}>
<TabItem value="c" label="C">

```c
#include <stdarg.h>
#include <stdio.h>

int sum(int count, ...) {
    va_list args;
    va_start(args, count);
    int total = 0;
    for (int i = 0; i < count; i++) {
        total += va_arg(args, int);
    }
    va_end(args);
    return total;
}

int result = sum(3, 1, 2, 3);
```

**Besonderheiten:**
- Unterstützt Variadic Functions über `stdarg.h`
- Erfordert mindestens einen festen Parameter
- Typunsicher

**Weiterführende Links:**
- [C Documentation - Variadic Functions](https://en.cppreference.com/w/c/variadic)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
int Sum(params int[] numbers)
{
    return numbers.Sum();
}

int result = Sum(1, 2, 3, 4, 5);
```

**Besonderheiten:**
- Unterstützt Variadic Functions über `params`-Schlüsselwort
- Typsicher
- Muss am Ende der Parameterliste stehen

**Weiterführende Links:**
- [Microsoft C# Documentation - params](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/params)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
#include <initializer_list>
#include <numeric>

int sum(std::initializer_list<int> numbers) {
    return std::accumulate(numbers.begin(), numbers.end(), 0);
}

int result = sum({1, 2, 3, 4, 5});
```

**Besonderheiten:**
- Unterstützt Variadic Functions über `std::initializer_list` (seit C++11)
- Typsicher
- Alternative: Template-Variadic Functions (seit C++11)

**Weiterführende Links:**
- [cppreference.com - Variadic functions](https://en.cppreference.com/w/cpp/utility/variadic)

</TabItem>
<TabItem value="d" label="D">

```d
int sum(int[] numbers...) {
    return numbers.sum;
}

int result = sum(1, 2, 3, 4, 5);
```

**Besonderheiten:**
- Unterstützt Variadic Functions über `...`-Syntax
- Typsicher
- Muss am Ende der Parameterliste stehen

**Weiterführende Links:**
- [D Language Specification - Variadic Functions](https://dlang.org/spec/function.html#variadic-functions)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
int sum(List<int> numbers) {
    return numbers.fold(0, (a, b) => a + b);
}

int result = sum([1, 2, 3, 4, 5]);
```

**Besonderheiten:**
- Dart unterstützt keine Variadic Functions direkt
- Workaround: Liste als Parameter verwenden

**Weiterführende Links:**
- [Dart Documentation - Functions](https://dart.dev/guides/language/language-tour#functions)

</TabItem>
<TabItem value="go" label="Go">

```go
func sum(numbers ...int) int {
    total := 0
    for _, num := range numbers {
        total += num
    }
    return total
}

result := sum(1, 2, 3, 4, 5)
```

**Besonderheiten:**
- Unterstützt Variadic Functions über `...`-Syntax
- Typsicher
- Muss am Ende der Parameterliste stehen

**Weiterführende Links:**
- [Go Documentation - Variadic Functions](https://go.dev/ref/spec#Function_types)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
def sum(Object... numbers) {
    numbers.sum()
}

def result = sum(1, 2, 3, 4, 5)
```

**Besonderheiten:**
- Unterstützt Variadic Functions über `...`-Syntax
- Typsicher (mit Typannotationen)

**Weiterführende Links:**
- [Groovy Documentation - Methods](https://groovy-lang.org/structure.html#_methods)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
function sum(numbers: Array<Int>): Int {
    var total = 0;
    for (num in numbers) {
        total += num;
    }
    return total;
}

var result = sum([1, 2, 3, 4, 5]);
```

**Besonderheiten:**
- Haxe unterstützt keine Variadic Functions direkt
- Workaround: Array als Parameter verwenden

**Weiterführende Links:**
- [Haxe Documentation - Functions](https://haxe.org/manual/types-function.html)

</TabItem>
<TabItem value="java" label="Java">

```java
static int sum(int... numbers) {
    int total = 0;
    for (int num : numbers) {
        total += num;
    }
    return total;
}

int result = sum(1, 2, 3, 4, 5);
```

**Besonderheiten:**
- Unterstützt Variadic Functions über `...`-Syntax (seit Java 5.0)
- Typsicher
- Muss am Ende der Parameterliste stehen

**Weiterführende Links:**
- [Oracle Java Documentation - Variable Arguments](https://docs.oracle.com/javase/tutorial/java/javaOO/arguments.html#varargs)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}

const result = sum(1, 2, 3, 4, 5);
```

**Besonderheiten:**
- Unterstützt Variadic Functions über Rest Parameters (seit ES6/ES2015)
- Typsicher (mit TypeScript)
- Muss am Ende der Parameterliste stehen

**Weiterführende Links:**
- [MDN Web Docs - Rest Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
function sum(numbers...)
    total = 0
    for num in numbers
        total += num
    end
    total
end

result = sum(1, 2, 3, 4, 5)
```

**Besonderheiten:**
- Unterstützt Variadic Functions über `...`-Syntax
- Typsicher (mit Typannotationen)
- Muss am Ende der Parameterliste stehen

**Weiterführende Links:**
- [Julia Documentation - Varargs Functions](https://docs.julialang.org/en/v1/manual/functions/#Varargs-Functions)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
fun sum(vararg numbers: Int): Int {
    return numbers.sum()
}

val result = sum(1, 2, 3, 4, 5)
```

**Besonderheiten:**
- Unterstützt Variadic Functions über `vararg`-Schlüsselwort
- Typsicher
- Muss am Ende der Parameterliste stehen

**Weiterführende Links:**
- [Kotlin Documentation - Variable Number of Arguments](https://kotlinlang.org/docs/functions.html#variable-number-of-arguments-varargs)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
function sum(...)
    local numbers = {...}
    local total = 0
    for _, num in ipairs(numbers) do
        total = total + num
    end
    return total
end

local result = sum(1, 2, 3, 4, 5)
```

**Besonderheiten:**
- Unterstützt Variadic Functions über `...`-Syntax
- Typsicher (mit Typannotationen in Lua 5.4+)

**Weiterführende Links:**
- [Lua Documentation - Functions](https://www.lua.org/manual/5.4/manual.html#3.4.11)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
proc sum(numbers: varargs[int]): int =
    result = 0
    for num in numbers:
        result += num

let result = sum(1, 2, 3, 4, 5)
```

**Besonderheiten:**
- Unterstützt Variadic Functions über `varargs`-Schlüsselwort
- Typsicher
- Muss am Ende der Parameterliste stehen

**Weiterführende Links:**
- [Nim Documentation - Procedures](https://nim-lang.org/docs/manual.html#procedures)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
let sum numbers =
    List.fold_left (+) 0 numbers

let result = sum [1; 2; 3; 4; 5]
```

**Besonderheiten:**
- OCaml unterstützt keine Variadic Functions direkt
- Workaround: Liste als Parameter verwenden

**Weiterführende Links:**
- [OCaml Documentation - Functions](https://ocaml.org/docs/first-hour#functions)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
sum :: proc(numbers: ..int) -> int {
    total := 0
    for num in numbers {
        total += num
    }
    return total
}

result := sum(1, 2, 3, 4, 5)
```

**Besonderheiten:**
- Unterstützt Variadic Functions über `..`-Syntax
- Typsicher
- Muss am Ende der Parameterliste stehen

**Weiterführende Links:**
- [Odin Documentation - Procedures](https://odin-lang.org/docs/overview/#procedures)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
sub sum {
    my $total = 0;
    foreach my $num (@_) {
        $total += $num;
    }
    return $total;
}

my $result = sum(1, 2, 3, 4, 5);
```

**Besonderheiten:**
- Unterstützt Variadic Functions über `@_`-Array
- Alle Parameter werden automatisch in `@_` gespeichert

**Weiterführende Links:**
- [Perl Documentation - Functions](https://perldoc.perl.org/perlsub)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
function sum(...$numbers) {
    return array_sum($numbers);
}

$result = sum(1, 2, 3, 4, 5);
```

**Besonderheiten:**
- Unterstützt Variadic Functions über `...`-Syntax (seit PHP 5.6)
- Typsicher (mit Typannotationen)
- Muss am Ende der Parameterliste stehen

**Weiterführende Links:**
- [PHP Documentation - Variable-length argument lists](https://www.php.net/manual/en/functions.arguments.php#functions.variable-arg-list)

</TabItem>
<TabItem value="python" label="Python">

```python
def sum(*numbers):
    return sum(numbers)

result = sum(1, 2, 3, 4, 5)
```

**Besonderheiten:**
- Unterstützt Variadic Functions über `*args`-Syntax
- Typsicher (mit Typannotationen)
- Muss am Ende der Parameterliste stehen

**Weiterführende Links:**
- [Python Documentation - Arbitrary Argument Lists](https://docs.python.org/3/tutorial/controlflow.html#arbitrary-argument-lists)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
def sum(*numbers)
    numbers.sum
end

result = sum(1, 2, 3, 4, 5)
```

**Besonderheiten:**
- Unterstützt Variadic Functions über `*args`-Syntax
- Typsicher (mit Typannotationen)
- Muss am Ende der Parameterliste stehen

**Weiterführende Links:**
- [Ruby Documentation - Methods](https://docs.ruby-lang.org/en/master/syntax/methods_rdoc.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
fn sum(numbers: &[i32]) -> i32 {
    numbers.iter().sum()
}

let result = sum(&[1, 2, 3, 4, 5]);
```

**Besonderheiten:**
- Rust unterstützt keine Variadic Functions direkt
- Workaround: Slice als Parameter verwenden

**Weiterführende Links:**
- [Rust Book - Functions](https://doc.rust-lang.org/book/ch03-03-functions.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
def sum(numbers: Int*): Int = {
    numbers.sum
}

val result = sum(1, 2, 3, 4, 5)
```

**Besonderheiten:**
- Unterstützt Variadic Functions über `*`-Syntax
- Typsicher
- Muss am Ende der Parameterliste stehen

**Weiterführende Links:**
- [Scala Documentation - Variable Arguments](https://docs.scala-lang.org/tour/varargs.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
func sum(_ numbers: Int...) -> Int {
    return numbers.reduce(0, +)
}

let result = sum(1, 2, 3, 4, 5)
```

**Besonderheiten:**
- Unterstützt Variadic Functions über `...`-Syntax
- Typsicher
- Muss am Ende der Parameterliste stehen

**Weiterführende Links:**
- [Swift Documentation - Functions](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/functions/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
function sum(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b, 0);
}

const result = sum(1, 2, 3, 4, 5);
```

**Besonderheiten:**
- Unterstützt Variadic Functions über Rest Parameters (seit ES6/ES2015)
- Typsicher
- Muss am Ende der Parameterliste stehen

**Weiterführende Links:**
- [TypeScript Handbook - Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
Function Sum(ParamArray numbers() As Integer) As Integer
    Return numbers.Sum()
End Function

Dim result As Integer = Sum(1, 2, 3, 4, 5)
```

**Besonderheiten:**
- Unterstützt Variadic Functions über `ParamArray`-Schlüsselwort
- Typsicher
- Muss am Ende der Parameterliste stehen

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - ParamArray](https://learn.microsoft.com/en-us/dotnet/visual-basic/language-reference/modifiers/paramarray)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
fn sum(numbers: []const i32) i32 {
    var total: i32 = 0;
    for (numbers) |num| {
        total += num;
    }
    return total;
}

const result = sum(&[_]i32{ 1, 2, 3, 4, 5 });
```

**Besonderheiten:**
- Zig unterstützt keine Variadic Functions direkt
- Workaround: Slice als Parameter verwenden

**Weiterführende Links:**
- [Zig Documentation - Functions](https://ziglang.org/documentation/0.11.0/#Functions)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Variadic Functions mit &
(defn sum [& numbers]
  (apply + numbers))

(sum 1 2 3 4 5)  ; 15

;; Kombination mit festen Parametern
(defn log [level & messages]
  (println (str "[" level "] " (clojure.string/join " " messages))))

(log "INFO" "Server" "gestartet" "auf" "Port" "8080")
;; [INFO] Server gestartet auf Port 8080
```

**Besonderheiten:**
- `&` sammelt restliche Argumente als Sequenz
- Kann mit festen Parametern kombiniert werden
- `apply` zum Weiterleiten von variadischen Argumenten

**Weiterführende Links:**
- [Clojure Documentation - Functions](https://clojure.org/guides/learn/functions#_variadic_functions)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Variadic Functions mit &rest
(defun sum (&rest numbers)
  (apply #'+ numbers))

(sum 1 2 3)       ; 6
(sum 1 2 3 4 5)   ; 15

;; Kombination mit festen Parametern
(defun log-message (level &rest parts)
  (format nil "[~a] ~{~a~^ ~}" level parts))

(log-message :info "User" "logged" "in")
;; "[INFO] User logged in"
```

**Besonderheiten:**
- `&rest` sammelt alle verbleibenden Argumente in eine Liste
- `apply` übergibt eine Liste als einzelne Argumente an eine Funktion
- Kombination mit `&optional` und `&key` möglich

**Weiterführende Links:**
- [Common Lisp HyperSpec - Ordinary Lambda Lists](http://www.lispworks.com/documentation/HyperSpec/Body/03_da.htm)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% Variadic Functions: varargin und varargout
function result = sum_all(varargin)
    result = 0;
    for i = 1:nargin
        result = result + varargin{i};
    end
end

sum_all(1, 2, 3)     % 6
sum_all(1, 2, 3, 4)  % 10
```

**Besonderheiten:**
- `varargin` als Cell Array für variable Eingabeargumente
- `varargout` als Cell Array für variable Ausgabeargumente
- `nargin` und `nargout` für Anzahl der Argumente

**Weiterführende Links:**
- [MATLAB Documentation - varargin](https://www.mathworks.com/help/matlab/ref/varargin.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
procedure PrintAll(const Args: array of const);
var
  i: Integer;
begin
  for i := Low(Args) to High(Args) do
    case Args[i].VType of
      vtInteger: WriteLn(Args[i].VInteger);
      vtString: WriteLn(Args[i].VString^);
      vtAnsiString: WriteLn(AnsiString(Args[i].VAnsiString));
    end;
end;

begin
  PrintAll([42, 'Hallo', 3.14]);
end;
```

**Besonderheiten:**
- `array of const` für heterogene variadic Parameter
- `array of Type` für homogene variadic Parameter (Open Arrays)
- `TVarRec`-Record für Typinformation zur Laufzeit

**Weiterführende Links:**
- [Free Pascal Documentation - Open Arrays](https://www.freepascal.org/docs-html/ref/refsu69.html)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Variadic Methode mit nil-Terminierung
- (NSArray *)arrayWithItems:(id)firstItem, ... NS_REQUIRES_NIL_TERMINATION {
    NSMutableArray *items = [NSMutableArray array];
    va_list args;
    va_start(args, firstItem);
    for (id item = firstItem; item != nil; item = va_arg(args, id)) {
        [items addObject:item];
    }
    va_end(args);
    return items;
}

NSArray *items = [self arrayWithItems:@"A", @"B", @"C", nil];
```

**Besonderheiten:**
- C-style variadische Funktionen mit `va_list`, `va_start`, `va_end`
- ObjC-Konvention: nil-terminierte Argumentlisten
- `NS_REQUIRES_NIL_TERMINATION` Attribut für Compiler-Prüfung
- NSString `stringWithFormat:` ist ein prominentes Beispiel

**Weiterführende Links:**
- [Apple Documentation - Programming with Objective-C](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
function result = sum_all(varargin)
    result = 0;
    for i = 1:length(varargin)
        result = result + varargin{i};
    end
end

sum_all(1, 2, 3)      % 6
sum_all(1, 2, 3, 4, 5) % 15
```

**Besonderheiten:**
- `varargin` als letzter Parameter sammelt alle weiteren Argumente
- `varargin` ist ein Cell-Array
- `varargout` für variable Anzahl an Rückgabewerten

**Weiterführende Links:**
- [GNU Octave Documentation - Variable-length Argument Lists](https://octave.org/doc/v8.1.0/Variable_002dlength-Argument-Lists.html)

</TabItem>
<TabItem value="r" label="R">

```r
my_sum <- function(...) {
    args <- list(...)
    total <- 0
    for (val in args) {
        total <- total + val
    }
    total
}

result <- my_sum(1, 2, 3, 4, 5) # 15
```

**Besonderheiten:**
- `...` (dots) nimmt beliebig viele Argumente entgegen
- `list(...)` konvertiert in eine Liste
- Dots können an andere Funktionen weitergegeben werden

**Weiterführende Links:**
- [R Documentation - dots](https://cran.r-project.org/doc/manuals/r-release/R-lang.html#Dot-dot-dot)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
(define (sum . args)
  (apply + args))

(sum 1 2 3)      ; 6
(sum 1 2 3 4 5)  ; 15
```

**Besonderheiten:**
- Rest-Argumente mit Punkt-Notation `(define (f . args) ...)`
- `apply` für Anwendung von Funktionen auf Listen
- Eingebaute Operatoren wie `+`, `*` sind bereits variadisch

**Weiterführende Links:**
- [Racket Documentation - Function Definitions](https://docs.racket-lang.org/guide/define.html)

</TabItem>
<TabItem value="v" label="V">

```v
// Variadic Functions
fn sum(values ...int) int {
    mut total := 0
    for v in values {
        total += v
    }
    return total
}

result := sum(1, 2, 3, 4, 5)
println(result)  // 15
```

**Besonderheiten:**
- `...Type` für variadische Parameter
- Parameter wird als Array behandelt
- Muss letzter Parameter sein

**Weiterführende Links:**
- [V Documentation - Variadic Functions](https://github.com/vlang/v/blob/master/doc/docs.md#variadic-functions)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Variadic Functions mit BlankSequence *)
mySum[args__] := Plus[args]

mySum[1, 2, 3]       (* 6 *)
mySum[1, 2, 3, 4, 5] (* 15 *)
```

**Besonderheiten:**
- `__` (BlankSequence) matcht ein oder mehr Argumente
- `___` (BlankNullSequence) matcht null oder mehr Argumente

**Weiterführende Links:**
- [Wolfram Language Documentation - BlankSequence](https://reference.wolfram.com/language/ref/BlankSequence.html)

</TabItem>
</Tabs>


## 7.1.11. Function Overloading

### Function Overloading


Mehrere Funktionen mit demselben Namen, aber unterschiedlichen Parametern (Anzahl, Typen oder beides) definieren. Der Compiler oder Interpreter wählt basierend auf den übergebenen Argumenten die passende Funktion aus.


<Tabs availableTabs={['carbon', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'fortran', 'groovy', 'java', 'julia', 'kotlin', 'mercury', 'nim', 'object-pascal', 'ocaml', 'odin', 'prolog', 'rust', 'scala', 'swift', 'typescript', 'vbnet', 'wolfram-language']} yellowTabs={['objective-c']} orangeTabs={['haxe', 'php']}>
<TabItem value="carbon" label="Carbon">

```cpp
fn Add(a: i32, b: i32) -> i32 {
    return a + b;
}

fn Add(a: f64, b: f64) -> f64 {
    return a + b;
}

var result1: i32 = Add(5, 3);
var result2: f64 = Add(5.0, 3.0);
```

**Besonderheiten:**
- Experimentelle Sprache, Syntax kann sich noch ändern
- Unterstützt Function Overloading basierend auf Parametertypen

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
def add(a : Int32, b : Int32) : Int32
  a + b
end

def add(a : Float64, b : Float64) : Float64
  a + b
end

result1 = add(5, 3)
result2 = add(5.0, 3.0)
```

**Besonderheiten:**
- Unterstützt Function Overloading basierend auf Parametertypen
- Ruby-ähnliche Syntax

**Weiterführende Links:**
- [Crystal Documentation - Method Overloading](https://crystal-lang.org/reference/1.11/syntax_and_semantics/methods.html#overloading)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
int Add(int a, int b)
{
    return a + b;
}

double Add(double a, double b)
{
    return a + b;
}

int result1 = Add(5, 3);
double result2 = Add(5.0, 3.0);
```

**Besonderheiten:**
- Unterstützt Function Overloading basierend auf Parametertypen und Anzahl
- Kann nicht nur durch Rückgabetyp unterschieden werden

**Weiterführende Links:**
- [Microsoft C# Documentation - Method Overloading](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/methods#method-overloading)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
int Add(int a, int b) {
    return a + b;
}

double Add(double a, double b) {
    return a + b;
}

int result1 = Add(5, 3);
double result2 = Add(5.0, 3.0);
```

**Besonderheiten:**
- Unterstützt Function Overloading basierend auf Parametertypen und Anzahl
- Kann nicht nur durch Rückgabetyp unterschieden werden

**Weiterführende Links:**
- [cppreference.com - Function overloading](https://en.cppreference.com/w/cpp/language/overload_resolution)

</TabItem>
<TabItem value="d" label="D">

```d
int add(int a, int b) {
    return a + b;
}

double add(double a, double b) {
    return a + b;
}

int result1 = add(5, 3);
double result2 = add(5.0, 3.0);
```

**Besonderheiten:**
- Unterstützt Function Overloading basierend auf Parametertypen und Anzahl
- Kann nicht nur durch Rückgabetyp unterschieden werden

**Weiterführende Links:**
- [D Language Specification - Function Overloading](https://dlang.org/spec/function.html#function-overloading)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
int add(int a, int b) {
    return a + b;
}

double add(double a, double b) {
    return a + b;
}

int result1 = add(5, 3);
double result2 = add(5.0, 3.0);
```

**Besonderheiten:**
- Unterstützt Function Overloading basierend auf Parametertypen und Anzahl
- Kann nicht nur durch Rückgabetyp unterschieden werden

**Weiterführende Links:**
- [Dart Documentation - Methods](https://dart.dev/guides/language/language-tour#methods)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
def add(int a, int b) {
    a + b
}

def add(double a, double b) {
    a + b
}

def result1 = add(5, 3)
def result2 = add(5.0, 3.0)
```

**Besonderheiten:**
- Unterstützt Function Overloading basierend auf Parametertypen und Anzahl
- Unterstützt sowohl statische als auch dynamische Typisierung

**Weiterführende Links:**
- [Groovy Documentation - Methods](https://groovy-lang.org/structure.html#_methods)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Function Overloading: nur für extern-Klassen über @:overload
// Reguläre Funktionen können NICHT überladen werden
// Workaround: Optionale Parameter oder Dynamic
function add(a:Float, b:Float):Float {
    return a + b;
}

var result1 = add(5, 3);     // 8.0
var result2 = add(5.0, 3.0); // 8.0
```

**Besonderheiten:**
- Haxe unterstützt KEIN traditionelles Function Overloading
- Für extern-Klassen kann `@:overload` Metadata verwendet werden
- Workaround: Optionale Parameter oder `Dynamic`-Typ

**Weiterführende Links:**
- [Haxe Documentation - Functions](https://haxe.org/manual/types-function.html)

</TabItem>
<TabItem value="java" label="Java">

```java
static int add(int a, int b) {
    return a + b;
}

static double add(double a, double b) {
    return a + b;
}

int result1 = add(5, 3);
double result2 = add(5.0, 3.0);
```

**Besonderheiten:**
- Unterstützt Method Overloading basierend auf Parametertypen und Anzahl
- Kann nicht nur durch Rückgabetyp unterschieden werden

**Weiterführende Links:**
- [Oracle Java Documentation - Method Overloading](https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html#overloading)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
add(a::Int, b::Int) = a + b
add(a::Float64, b::Float64) = a + b

result1 = add(5, 3)
result2 = add(5.0, 3.0)
```

**Besonderheiten:**
- Unterstützt Multiple Dispatch (Function Overloading basierend auf allen Parametertypen)
- Sehr mächtiges Overloading-System

**Weiterführende Links:**
- [Julia Documentation - Methods](https://docs.julialang.org/en/v1/manual/methods/)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
fun add(a: Int, b: Int): Int {
    return a + b
}

fun add(a: Double, b: Double): Double {
    return a + b
}

val result1 = add(5, 3)
val result2 = add(5.0, 3.0)
```

**Besonderheiten:**
- Unterstützt Function Overloading basierend auf Parametertypen und Anzahl
- Kann nicht nur durch Rückgabetyp unterschieden werden

**Weiterführende Links:**
- [Kotlin Documentation - Functions](https://kotlinlang.org/docs/functions.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Overloading durch Typklassen
:- typeclass addable(T) where [
    func add(T, T) = T
].

:- instance addable(int) where [
    add(A, B) = A + B
].

:- instance addable(float) where [
    add(A, B) = A + B
].

Result1 = add(5, 3),       % int
Result2 = add(5.0, 3.0).   % float
```

**Besonderheiten:**
- Overloading über Typklassen (`typeclass`) und Instanzen (`instance`)
- Prädikate/Funktionen können durch Typ und Arität überladen werden
- Überladungsauflösung zur Compile-Zeit durch das Typsystem
- Ähnlich wie Haskells Type Classes

**Weiterführende Links:**
- [Mercury Language Reference - Type Classes](https://mercurylang.org/information/doc-latest/mercury_ref/Type-classes.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
proc add(a: int, b: int): int =
    a + b

proc add(a: float64, b: float64): float64 =
    a + b

let result1 = add(5, 3)
let result2 = add(5.0, 3.0)
```

**Besonderheiten:**
- Unterstützt Function Overloading basierend auf Parametertypen und Anzahl
- Kann nicht nur durch Rückgabetyp unterschieden werden

**Weiterführende Links:**
- [Nim Documentation - Procedures](https://nim-lang.org/docs/manual.html#procedures)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Objective-C: Kein traditionelles Overloading
// Methoden werden durch Selector-Namen unterschieden
- (int)addInt:(int)a with:(int)b {
    return a + b;
}

- (double)addDouble:(double)a with:(double)b {
    return a + b;
}

int result1 = [self addInt:5 with:3];
double result2 = [self addDouble:5.0 with:3.0];
```

**Besonderheiten:**
- Objective-C unterstützt KEIN Overloading basierend auf Parametertypen
- Methoden werden durch ihren vollständigen Selector unterschieden
- Verschiedene Selector-Namen ermöglichen ähnliche Funktionalität
- Der Selector `addInt:with:` ist verschieden von `addDouble:with:`

**Weiterführende Links:**
- [Apple Documentation - Defining Classes](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/DefiningClasses/DefiningClasses.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
function Add(a, b: Integer): Integer; overload;
begin
    Result := a + b;
end;

function Add(a, b: Double): Double; overload;
begin
    Result := a + b;
end;

var
    result1: Integer;
    result2: Double;
begin
    result1 := Add(5, 3);
    result2 := Add(5.0, 3.0);
end.
```

**Besonderheiten:**
- `overload`-Direktive ist für Function Overloading erforderlich
- Unterscheidung basierend auf Parametertypen und Anzahl
- Kann nicht nur durch Rückgabetyp unterschieden werden

**Weiterführende Links:**
- [Delphi Documentation - Overloading](https://docwiki.embarcadero.com/RADStudio/en/Overloading_procedures_and_functions)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
let add (a: int) (b: int) : int = a + b

let add (a: float) (b: float) : float = a +. b

let result1 = add 5 3
let result2 = add 5.0 3.0
```

**Besonderheiten:**
- Unterstützt Function Overloading basierend auf Parametertypen
- Funktionale Sprache mit First-Class-Funktionen

**Weiterführende Links:**
- [OCaml Documentation - Functions](https://ocaml.org/docs/first-hour#functions)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
add :: proc(a: int, b: int) -> int {
    return a + b
}

add :: proc(a: f64, b: f64) -> f64 {
    return a + b
}

result1 := add(5, 3)
result2 := add(5.0, 3.0)
```

**Besonderheiten:**
- Unterstützt Function Overloading basierend auf Parametertypen und Anzahl
- Kann nicht nur durch Rückgabetyp unterschieden werden

**Weiterführende Links:**
- [Odin Documentation - Procedures](https://odin-lang.org/docs/overview/#procedures)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
// PHP unterstützt keine Function Overloading
// Stattdessen: Union Types (seit PHP 8.0) oder dynamische Typen
function add(int|float $a, int|float $b): int|float {
    return $a + $b;
}

$result1 = add(5, 3);       // 8
$result2 = add(5.0, 3.0);   // 8.0
?>
```

**Besonderheiten:**
- PHP unterstützt KEINE Function Overloading
- Zwei Funktionen mit demselben Namen verursachen Fatal Error
- Union Types (seit PHP 8.0) als Alternative
- `__call()` Magic Method als OOP-Workaround

**Weiterführende Links:**
- [PHP Documentation - Functions](https://www.php.net/manual/en/functions.user-defined.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Prädikate mit unterschiedlicher Arität (Anzahl der Argumente)
add(X, Y, Result) :-
    Result is X + Y.

add(X, Y, Z, Result) :-
    Result is X + Y + Z.

?- add(5, 3, Result1).
%  Result1 = 8
?- add(5, 3, 2, Result2).
%  Result2 = 10
```

**Besonderheiten:**
- Prolog unterstützt Überladung basierend auf Arität (Anzahl der Argumente)
- `add/3` und `add/4` sind unterschiedliche Prädikate
- Keine Überladung basierend auf Typen (Prolog ist dynamisch typisiert)
- Zusätzlich ermöglicht Pattern Matching im Kopf verschiedene Klauseln für unterschiedliche Argumentmuster

**Weiterführende Links:**
- [SWI-Prolog Documentation - Predicate Indicators](https://www.swi-prolog.org/pldoc/man?section=preddesc)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
fn add(a: i32, b: i32) -> i32 {
    a + b
}

fn add(a: f64, b: f64) -> f64 {
    a + b
}

let result1 = add(5, 3);
let result2 = add(5.0, 3.0);
```

**Besonderheiten:**
- Unterstützt Function Overloading basierend auf Parametertypen und Anzahl
- Kann nicht nur durch Rückgabetyp unterschieden werden

**Weiterführende Links:**
- [Rust Book - Functions](https://doc.rust-lang.org/book/ch03-03-functions.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
def add(a: Int, b: Int): Int = {
    a + b
}

def add(a: Double, b: Double): Double = {
    a + b
}

val result1 = add(5, 3)
val result2 = add(5.0, 3.0)
```

**Besonderheiten:**
- Unterstützt Function Overloading basierend auf Parametertypen und Anzahl
- Funktionale und objektorientierte Sprache

**Weiterführende Links:**
- [Scala Documentation - Methods](https://docs.scala-lang.org/tour/methods.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
func add(a: Int, b: Int) -> Int {
    return a + b
}

func add(a: Double, b: Double) -> Double {
    return a + b
}

let result1 = add(a: 5, b: 3)
let result2 = add(a: 5.0, b: 3.0)
```

**Besonderheiten:**
- Unterstützt Function Overloading basierend auf Parametertypen und Anzahl
- Kann nicht nur durch Rückgabetyp unterschieden werden

**Weiterführende Links:**
- [Swift Documentation - Functions](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/functions/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
function add(a: number, b: number): number {
    return a + b;
}

function add(a: string, b: string): string {
    return a + b;
}

const result1 = add(5, 3);
const result2 = add("5", "3");
```

**Besonderheiten:**
- Unterstützt Function Overloading basierend auf Parametertypen und Anzahl
- Kann nicht nur durch Rückgabetyp unterschieden werden

**Weiterführende Links:**
- [TypeScript Handbook - Function Overloads](https://www.typescriptlang.org/docs/handbook/2/functions.html#function-overloads)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
Function Add(a As Integer, b As Integer) As Integer
    Return a + b
End Function

Function Add(a As Double, b As Double) As Double
    Return a + b
End Function

Dim result1 As Integer = Add(5, 3)
Dim result2 As Double = Add(5.0, 3.0)
```

**Besonderheiten:**
- Unterstützt Function Overloading basierend auf Parametertypen und Anzahl
- Kann nicht nur durch Rückgabetyp unterschieden werden

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Procedure Overloading](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/procedures/overloaded-procedures)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Function Overloading über generische Interfaces
interface double_value
    module procedure double_int, double_real
end interface

function double_int(x) result(res)
    integer, intent(in) :: x
    integer :: res
    res = x * 2
end function

function double_real(x) result(res)
    real, intent(in) :: x
    real :: res
    res = x * 2.0
end function

integer :: i = double_value(5)      ! Ruft double_int auf
real :: r = double_value(3.14)      ! Ruft double_real auf
```

**Besonderheiten:**
- Überladung über `INTERFACE`-Blöcke mit `MODULE PROCEDURE`
- Auflösung basiert auf Parametertypen und -anzahl
- Kann nicht nur durch Rückgabetyp unterschieden werden

**Weiterführende Links:**
- [Fortran Wiki - Generic Interfaces](https://fortranwiki.org/fortran/show/Generic+interfaces)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Function Overloading via Pattern Matching *)
area[r_?NumericQ] := Pi * r^2                          (* Kreis *)
area[w_?NumericQ, h_?NumericQ] := w * h                (* Rechteck *)
area[a_?NumericQ, b_?NumericQ, c_?NumericQ] := Module[ (* Dreieck *)
    {s = (a + b + c) / 2},
    Sqrt[s (s - a) (s - b) (s - c)]
]

area[5]        (* 78.5398 - Kreis *)
area[3, 4]     (* 12 - Rechteck *)
area[3, 4, 5]  (* 6 - Dreieck *)
```

**Besonderheiten:**
- Überladung durch unterschiedliche Pattern-Definitionen
- Automatische Auswahl basierend auf Argument-Anzahl und -Typ
- Spezifischere Patterns haben Vorrang

**Weiterführende Links:**
- [Wolfram Language Documentation - Functions](https://reference.wolfram.com/language/guide/FunctionsAndPrograms.html)

</TabItem>
</Tabs>



---

### Procedure Overloading


Mehrere Prozeduren/Subroutinen mit demselben Namen, aber unterschiedlichen Parametern (Anzahl, Typen oder beides) definieren. Der Compiler oder Interpreter wählt basierend auf den übergebenen Argumenten die passende Prozedur aus.


<Tabs availableTabs={['ada', 'fortran', 'object-pascal', 'vbnet']}>
<TabItem value="ada" label="Ada">

```ada
procedure Print_Value(value: Integer) is
begin
    Put_Line("Integer: " & Integer'Image(value));
end Print_Value;

procedure Print_Value(value: Float) is
begin
    Put_Line("Float: " & Float'Image(value));
end Print_Value;

procedure Print_Value(value: String) is
begin
    Put_Line("String: " & value);
end Print_Value;

Print_Value(42);
Print_Value(3.14);
Print_Value("Apfel");
```

**Besonderheiten:**
- Unterstützt Procedure Overloading basierend auf Parametertypen und Anzahl
- Kann nicht nur durch Rückgabetyp unterschieden werden (Prozeduren haben keinen Rückgabetyp)

**Weiterführende Links:**
- [Ada Documentation - Subprograms](https://learn.adacore.com/courses/intro-to-ada/chapters/subprograms.html)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Procedure Overloading über generische Interfaces
interface PrintValue
    module procedure PrintValue_int, PrintValue_real, PrintValue_str
end interface

subroutine PrintValue_int(value)
    integer, intent(in) :: value
    print *, "Integer: ", value
end subroutine

subroutine PrintValue_real(value)
    real, intent(in) :: value
    print *, "Real: ", value
end subroutine

subroutine PrintValue_str(value)
    character(len=*), intent(in) :: value
    print *, "String: ", value
end subroutine

call PrintValue(42)
call PrintValue(3.14)
call PrintValue("Apfel")
```

**Besonderheiten:**
- Überladung über `INTERFACE`-Blöcke mit `MODULE PROCEDURE`
- Auflösung basiert auf Parametertypen und -anzahl
- Subroutinen müssen unterschiedliche interne Namen haben

**Weiterführende Links:**
- [Fortran Wiki - Generic Interfaces](https://fortranwiki.org/fortran/show/Generic+interfaces)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
procedure PrintValue(value: Integer); overload;
begin
    WriteLn('Integer: ', value);
end;

procedure PrintValue(value: Double); overload;
begin
    WriteLn('Double: ', value);
end;

procedure PrintValue(value: string); overload;
begin
    WriteLn('String: ', value);
end;

begin
    PrintValue(42);
    PrintValue(3.14);
    PrintValue('Apfel');
end.
```

**Besonderheiten:**
- `overload`-Direktive ist für Procedure Overloading erforderlich
- Unterscheidung basierend auf Parametertypen und Anzahl

**Weiterführende Links:**
- [Delphi Documentation - Overloading](https://docwiki.embarcadero.com/RADStudio/en/Overloading_procedures_and_functions)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
Sub PrintValue(value As Integer)
    Console.WriteLine("Integer: " & value)
End Sub

Sub PrintValue(value As Double)
    Console.WriteLine("Double: " & value)
End Sub

Sub PrintValue(value As String)
    Console.WriteLine("String: " & value)
End Sub

PrintValue(42)
PrintValue(3.14)
PrintValue("Apfel")
```

**Besonderheiten:**
- Unterstützt Subroutine Overloading basierend auf Parametertypen und Anzahl
- Kann nicht nur durch Rückgabetyp unterschieden werden (Subroutinen haben keinen Rückgabetyp)

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Procedure Overloading](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/procedures/overloaded-procedures)

</TabItem>
</Tabs>


## 7.1.12. Higher-Order Functions

Funktionen, die andere Funktionen als Parameter akzeptieren oder Funktionen als Rückgabewert zurückgeben. Ermöglichen es, Code abstrakter und wiederverwendbarer zu gestalten.

### Sprachen {#sprachen}

<Tabs availableTabs={['carbon', 'clojure', 'common-lisp', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'elixir', 'elm', 'erlang', 'fsharp', 'gleam', 'go', 'groovy', 'haskell', 'haxe', 'idris', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'lua', 'matlab', 'mercury', 'nim', 'objective-c', 'ocaml', 'octave', 'perl', 'php', 'prolog', 'purescript', 'python', 'r', 'racket', 'roc', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'v', 'vbnet', 'wolfram-language', 'zig']}>
<TabItem value="carbon" label="Carbon">

```cpp
fn ApplyFunc(func: fn(i32) -> i32, value: i32) -> i32 {
    return func(value);
}

fn Double(x: i32) -> i32 {
    return x * 2;
}

var result = ApplyFunc(Double, 5);
```

**Besonderheiten:**
- Experimentelle Sprache, Syntax kann sich noch ändern
- Unterstützt Higher-Order Functions

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
(defn apply-func [func value]
  (func value))

(defn double [x]
  (* x 2))

(def result (apply-func double 5))
```

**Besonderheiten:**
- Funktionen sind First-Class-Objekte
- Unterstützt Higher-Order Functions nativ

**Weiterführende Links:**
- [Clojure Documentation - Functions](https://clojure.org/reference/functions)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
(defun apply-func (func value)
  (funcall func value))

(defun double (x)
  (* x 2))

(defvar result (apply-func #'double 5))
```

**Besonderheiten:**
- Funktionen sind First-Class-Objekte
- Unterstützt Higher-Order Functions nativ

**Weiterführende Links:**
- [Common Lisp HyperSpec - Functions](http://www.lispworks.com/documentation/HyperSpec/Body/f_fun.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
def apply_func(func, value)
  func.call(value)
end

def double(x)
  x * 2
end

result = apply_func(->double, 5)
```

**Besonderheiten:**
- Unterstützt Higher-Order Functions über Procs
- Ruby-ähnliche Syntax

**Weiterführende Links:**
- [Crystal Documentation - Procs](https://crystal-lang.org/reference/1.11/syntax_and_semantics/literals/proc.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
int ApplyFunc(Func<int, int> func, int value)
{
    return func(value);
}

int Double(int x)
{
    return x * 2;
}

int result = ApplyFunc(Double, 5);
```

**Besonderheiten:**
- Unterstützt Higher-Order Functions über Delegates und Lambda-Ausdrücke
- Seit C# 1.0 verfügbar

**Weiterführende Links:**
- [Microsoft C# Documentation - Delegates](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/delegates/)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
#include <functional>

int applyFunc(std::function<int(int)> func, int value) {
    return func(value);
}

int doubleValue(int x) {
    return x * 2;
}

int result = applyFunc(doubleValue, 5);
```

**Besonderheiten:**
- Unterstützt Higher-Order Functions über Funktionszeiger und `std::function`
- Seit C++98 verfügbar

**Weiterführende Links:**
- [cppreference.com - std::function](https://en.cppreference.com/w/cpp/utility/functional/function)

</TabItem>
<TabItem value="d" label="D">

```d
int applyFunc(int function(int) func, int value) {
    return func(value);
}

int doubleValue(int x) {
    return x * 2;
}

int result = applyFunc(&doubleValue, 5);
```

**Besonderheiten:**
- Unterstützt Higher-Order Functions über Funktionszeiger
- Unterstützt auch Delegates

**Weiterführende Links:**
- [D Language Specification - Function Pointers](https://dlang.org/spec/function.html#function-pointers)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
int applyFunc(int Function(int) func, int value) {
    return func(value);
}

int doubleValue(int x) {
    return x * 2;
}

int result = applyFunc(doubleValue, 5);
```

**Besonderheiten:**
- Unterstützt Higher-Order Functions nativ
- Funktionen sind First-Class-Objekte

**Weiterführende Links:**
- [Dart Documentation - Functions](https://dart.dev/guides/language/language-tour#functions)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
def apply_func(func, value) do
    func.(value)
end

def double(x) do
    x * 2
end

result = apply_func(&double/1, 5)
```

**Besonderheiten:**
- Funktionen sind First-Class-Objekte
- Unterstützt Higher-Order Functions nativ

**Weiterführende Links:**
- [Elixir Documentation - Functions](https://elixir-lang.org/getting-started/basic-types.html#functions)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
applyFunc : (Int -> Int) -> Int -> Int
applyFunc func value =
    func value

double : Int -> Int
double x =
    x * 2

result = applyFunc double 5
```

**Besonderheiten:**
- Funktionale Sprache mit expliziten Typannotationen
- Unterstützt Higher-Order Functions nativ

**Weiterführende Links:**
- [Elm Documentation - Functions](https://guide.elm-lang.org/core_language.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
apply_func(Func, Value) ->
    Func(Value).

double(X) ->
    X * 2.

Result = apply_func(fun double/1, 5).
```

**Besonderheiten:**
- Funktionen sind First-Class-Objekte
- Unterstützt Higher-Order Functions nativ

**Weiterführende Links:**
- [Erlang Documentation - Functions](https://www.erlang.org/doc/reference_manual/functions.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
let applyFunc (func: int -> int) (value: int) : int =
    func value

let double (x: int) : int =
    x * 2

let result = applyFunc double 5
```

**Besonderheiten:**
- Funktionale Sprache mit First-Class-Funktionen
- Unterstützt Higher-Order Functions nativ

**Weiterführende Links:**
- [F# Documentation - Functions](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/functions/)

</TabItem>
<TabItem value="gleam" label="Gleam">

```erlang
pub fn apply_func(func: fn(Int) -> Int, value: Int) -> Int {
    func(value)
}

pub fn double(x: Int) -> Int {
    x * 2
}

let result = apply_func(double, 5)
```

**Besonderheiten:**
- Funktionale Sprache mit expliziten Typannotationen
- Unterstützt Higher-Order Functions nativ

**Weiterführende Links:**
- [Gleam Documentation - Functions](https://gleam.run/documentation/tour/functions/)

</TabItem>
<TabItem value="go" label="Go">

```go
func applyFunc(f func(int) int, value int) int {
    return f(value)
}

func double(x int) int {
    return x * 2
}

result := applyFunc(double, 5)
```

**Besonderheiten:**
- Unterstützt Higher-Order Functions über Funktionszeiger
- Funktionen sind First-Class-Objekte

**Weiterführende Links:**
- [Go Documentation - Functions](https://go.dev/ref/spec#Function_declarations)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
def applyFunc(func, value) {
    func(value)
}

def doubleValue(x) {
    x * 2
}

// Methoden-Referenz mit .& Operator
def result = applyFunc(this.&doubleValue, 5) // 10

// Oder direkt mit Closure
def result2 = applyFunc({ x -> x * 2 }, 5) // 10
```

**Besonderheiten:**
- Unterstützt Higher-Order Functions über Closures und Methoden-Referenzen
- `.&` Operator für Methoden-Referenzen
- Funktionen/Closures sind First-Class-Objekte

**Weiterführende Links:**
- [Groovy Documentation - Closures](https://groovy-lang.org/closures.html)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
applyFunc :: (Int -> Int) -> Int -> Int
applyFunc func value = func value

double :: Int -> Int
double x = x * 2

result = applyFunc double 5
```

**Besonderheiten:**
- Funktionale Sprache mit expliziten Typannotationen
- Unterstützt Higher-Order Functions nativ

**Weiterführende Links:**
- [Haskell Documentation - Functions](https://www.haskell.org/tutorial/functions.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
function applyFunc(func: Int -> Int, value: Int): Int {
    return func(value);
}

function double(x: Int): Int {
    return x * 2;
}

var result = applyFunc(double, 5);
```

**Besonderheiten:**
- Unterstützt Higher-Order Functions nativ
- Cross-Platform-Kompilierung

**Weiterführende Links:**
- [Haxe Documentation - Functions](https://haxe.org/manual/types-function.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
applyFunc : (Int -> Int) -> Int -> Int
applyFunc func value = func value

double : Int -> Int
double x = x * 2

result : Int
result = applyFunc double 5
```

**Besonderheiten:**
- Funktionale Sprache mit abhängigen Typen
- Unterstützt Higher-Order Functions nativ

**Weiterführende Links:**
- [Idris Documentation - Functions](https://idris2.readthedocs.io/en/latest/tutorial/functions.html)

</TabItem>
<TabItem value="java" label="Java">

```java
import java.util.function.Function;

static int applyFunc(Function<Integer, Integer> func, int value) {
    return func.apply(value);
}

static int doubleValue(int x) {
    return x * 2;
}

int result = applyFunc(Main::doubleValue, 5);
```

**Besonderheiten:**
- Unterstützt Higher-Order Functions über funktionale Interfaces (seit Java 8.0)
- Verwendet Method References oder Lambda-Ausdrücke

**Weiterführende Links:**
- [Oracle Java Documentation - Functional Interfaces](https://docs.oracle.com/javase/tutorial/java/javaOO/lambdaexpressions.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
function applyFunc(func, value) {
    return func(value);
}

function double(x) {
    return x * 2;
}

const result = applyFunc(double, 5);
```

**Besonderheiten:**
- Unterstützt Higher-Order Functions nativ
- Funktionen sind First-Class-Objekte

**Weiterführende Links:**
- [MDN Web Docs - Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
function apply_func(func, value)
    func(value)
end

function double(x)
    x * 2
end

result = apply_func(double, 5)
```

**Besonderheiten:**
- Unterstützt Higher-Order Functions nativ
- Funktionen sind First-Class-Objekte

**Weiterführende Links:**
- [Julia Documentation - Functions](https://docs.julialang.org/en/v1/manual/functions/)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Higher-Order Functions
fun apply(f: (int) -> int, x: int): int
  f(x)

fun double(x: int): int
  x * 2

val result = apply(double, 5) // 10

// Standard Higher-Order Functions
val numbers = [1, 2, 3, 4, 5]
val doubled = numbers.map fn(x) { x * 2 }         // [2, 4, 6, 8, 10]
val evens = numbers.filter fn(x) { x % 2 == 0 }   // [2, 4]
val sum = numbers.foldl(0) fn(acc, x) { acc + x }  // 15

// Funktion als Rückgabewert
fun multiplier(factor: int): (int) -> int
  fn(x) { x * factor }

val triple = multiplier(3)
val tripled = triple(7) // 21
```

**Besonderheiten:**
- Funktionen sind First-Class-Werte und können als Parameter übergeben und zurückgegeben werden
- Effekte werden automatisch durch Higher-Order Functions propagiert
- Umfangreiche Standardbibliothek mit `map`, `filter`, `foldl` etc.
- Trailing Lambda Syntax für ergonomische HOF-Aufrufe

**Weiterführende Links:**
- [Koka Language Guide - Functions](https://koka-lang.github.io/koka/doc/book.html#sec-functions)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
fun applyFunc(func: (Int) -> Int, value: Int): Int {
    return func(value)
}

fun double(x: Int): Int {
    return x * 2
}

val result = applyFunc(::double, 5)
```

**Besonderheiten:**
- Unterstützt Higher-Order Functions nativ
- Funktionen sind First-Class-Objekte

**Weiterführende Links:**
- [Kotlin Documentation - Higher-Order Functions](https://kotlinlang.org/docs/lambdas.html#higher-order-functions)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```haskell
def applyFunc (func : Nat → Nat) (value : Nat) : Nat :=
  func value

def double (x : Nat) : Nat := x * 2

#eval applyFunc double 5  -- 10

-- map, filter als Higher-Order Functions
#eval [1, 2, 3, 4, 5].map (· * 2)       -- [2, 4, 6, 8, 10]
#eval [1, 2, 3, 4, 5].filter (· > 3)    -- [4, 5]
```

**Besonderheiten:**
- Funktionen sind First-Class-Werte und können als Parameter übergeben werden
- `·` als Kurzform für anonyme Funktionen
- Standardbibliothek bietet `map`, `filter`, `foldl` etc.

**Weiterführende Links:**
- [Lean 4 Documentation - Functions](https://lean-lang.org/lean4/doc/functions.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
function apply_func(func, value)
    return func(value)
end

function double(x)
    return x * 2
end

local result = apply_func(double, 5)
```

**Besonderheiten:**
- Unterstützt Higher-Order Functions nativ
- Funktionen sind First-Class-Objekte

**Weiterführende Links:**
- [Lua Documentation - Functions](https://www.lua.org/manual/5.4/manual.html#3.4.11)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
proc applyFunc(func: proc(x: int): int, value: int): int =
    func(value)

proc double(x: int): int =
    x * 2

let result = applyFunc(double, 5)
```

**Besonderheiten:**
- Unterstützt Higher-Order Functions über Prozeduren
- Funktionen sind First-Class-Objekte

**Weiterführende Links:**
- [Nim Documentation - Procedures](https://nim-lang.org/docs/manual.html#procedures)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
let apply_func (func: int -> int) (value: int) : int =
    func value

let double (x: int) : int =
    x * 2

let result = apply_func double 5
```

**Besonderheiten:**
- Funktionale Sprache mit First-Class-Funktionen
- Unterstützt Higher-Order Functions nativ

**Weiterführende Links:**
- [OCaml Documentation - Functions](https://ocaml.org/docs/first-hour#functions)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
sub apply_func {
    my ($func, $value) = @_;
    return $func->($value);
}

sub double {
    my $x = shift;
    return $x * 2;
}

my $result = apply_func(\&double, 5);
```

**Besonderheiten:**
- Unterstützt Higher-Order Functions über Funktionsreferenzen
- Funktionen sind First-Class-Objekte

**Weiterführende Links:**
- [Perl Documentation - Functions](https://perldoc.perl.org/perlsub)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
function applyFunc($func, $value) {
    return $func($value);
}

function double($x) {
    return $x * 2;
}

$result = applyFunc('double', 5);
```

**Besonderheiten:**
- Unterstützt Higher-Order Functions über Funktionsnamen oder Closures
- Funktionen sind First-Class-Objekte

**Weiterführende Links:**
- [PHP Documentation - Functions](https://www.php.net/manual/en/functions.user-defined.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Higher-Order mit call/N und maplist
double(X, Result) :-
    Result is X * 2.

apply_func(Func, Value, Result) :-
    call(Func, Value, Result).

?- apply_func(double, 5, Result).
%  Result = 10

% maplist als Higher-Order-Prädikat
?- maplist(double, [1, 2, 3], Results).
%  Results = [2, 4, 6]
```

**Besonderheiten:**
- `call/N` ermöglicht das Aufrufen von Prädikaten, die als Terme übergeben werden (ISO-Standard)
- `maplist/2-5`, `include/3`, `exclude/3`, `foldl/4-7` sind eingebaute Higher-Order-Prädikate
- Prädikate können als Argumente an andere Prädikate übergeben werden

**Weiterführende Links:**
- [SWI-Prolog Documentation - Meta-predicates](https://www.swi-prolog.org/pldoc/man?section=metacall)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
applyFunc :: (Int -> Int) -> Int -> Int
applyFunc func value = func value

double :: Int -> Int
double x = x * 2

result :: Int
result = applyFunc double 5
```

**Besonderheiten:**
- Funktionale Sprache mit expliziten Typannotationen
- Unterstützt Higher-Order Functions nativ

**Weiterführende Links:**
- [PureScript Documentation - Functions](https://book.purescript.org/chapter3.html)

</TabItem>
<TabItem value="python" label="Python">

```python
def apply_func(func, value):
    return func(value)

def double(x):
    return x * 2

result = apply_func(double, 5)
```

**Besonderheiten:**
- Unterstützt Higher-Order Functions nativ
- Funktionen sind First-Class-Objekte

**Weiterführende Links:**
- [Python Documentation - Functions](https://docs.python.org/3/tutorial/controlflow.html#defining-functions)

</TabItem>
<TabItem value="r" label="R">

```r
apply_func <- function(func, value) {
    func(value)
}

double <- function(x) {
    x * 2
}

result <- apply_func(double, 5)
```

**Besonderheiten:**
- Unterstützt Higher-Order Functions nativ
- Funktionen sind First-Class-Objekte

**Weiterführende Links:**
- [R Documentation - Functions](https://cran.r-project.org/doc/manuals/r-release/R-lang.html#Function-objects)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
(define (apply-func func value)
    (func value))

(define (double x)
    (* x 2))

(define result (apply-func double 5))
```

**Besonderheiten:**
- Funktionale Sprache mit First-Class-Funktionen
- Unterstützt Higher-Order Functions nativ

**Weiterführende Links:**
- [Racket Documentation - Functions](https://docs.racket-lang.org/guide/define.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
applyFunc : (I64 -> I64), I64 -> I64
applyFunc = \func, value -> func value

double : I64 -> I64
double = \x -> x * 2

result : I64
result = applyFunc double 5
```

**Besonderheiten:**
- Funktionale Sprache mit expliziten Typannotationen
- Unterstützt Higher-Order Functions nativ

**Weiterführende Links:**
- [Roc Documentation - Functions](https://www.roc-lang.org/tutorial#defining-functions)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
def apply_func(func, value)
    func.call(value)
end

def double(x)
    x * 2
end

result = apply_func(method(:double), 5)
```

**Besonderheiten:**
- Unterstützt Higher-Order Functions über Method-Objekte oder Procs
- Funktionen sind First-Class-Objekte

**Weiterführende Links:**
- [Ruby Documentation - Methods](https://docs.ruby-lang.org/en/master/syntax/methods_rdoc.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
fn apply_func<F>(func: F, value: i32) -> i32
where
    F: Fn(i32) -> i32,
{
    func(value)
}

fn double(x: i32) -> i32 {
    x * 2
}

let result = apply_func(double, 5);
```

**Besonderheiten:**
- Unterstützt Higher-Order Functions über Closures und Funktionszeiger
- Typsicher mit Generics

**Weiterführende Links:**
- [Rust Book - Closures](https://doc.rust-lang.org/book/ch13-01-closures.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
def applyFunc(func: Int => Int, value: Int): Int = {
    func(value)
}

def double(x: Int): Int = {
    x * 2
}

val result = applyFunc(double, 5)
```

**Besonderheiten:**
- Funktionale und objektorientierte Sprache
- Unterstützt Higher-Order Functions nativ

**Weiterführende Links:**
- [Scala Documentation - Functions](https://docs.scala-lang.org/tour/functions.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
(define (apply-func func value)
    (func value))

(define (double x)
    (* x 2))

(define result (apply-func double 5))
```

**Besonderheiten:**
- Funktionale Sprache mit First-Class-Funktionen
- Unterstützt Higher-Order Functions nativ

**Weiterführende Links:**
- [Scheme Documentation - Functions](https://www.scheme.com/tspl4/start.html#./start:h0)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
func applyFunc(_ fn: (Int) -> Int, value: Int) -> Int {
    return fn(value)
}

func double(x: Int) -> Int {
    return x * 2
}

let result = applyFunc(double, value: 5)
```

**Besonderheiten:**
- Unterstützt Higher-Order Functions nativ
- Funktionen sind First-Class-Objekte

**Weiterführende Links:**
- [Swift Documentation - Functions](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/functions/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
function applyFunc(func: (value: number) => number, value: number): number {
    return func(value);
}

function double(x: number): number {
    return x * 2;
}

const result = applyFunc(double, 5);
```

**Besonderheiten:**
- Unterstützt Higher-Order Functions nativ
- Vollständige Typannotationen

**Weiterführende Links:**
- [TypeScript Handbook - Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
Function ApplyFunc(func As Func(Of Integer, Integer), value As Integer) As Integer
    Return func(value)
End Function

Function DoubleValue(x As Integer) As Integer
    Return x * 2
End Function

Dim result As Integer = ApplyFunc(AddressOf DoubleValue, 5)
```

**Besonderheiten:**
- Unterstützt Higher-Order Functions über Delegates
- Verwendet `AddressOf` für Funktionsreferenzen

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Delegates](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/delegates/)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% Higher-Order Functions
function result = apply(func, value)
    result = func(value);
end

result = apply(@sqrt, 16);     % 4
result = apply(@(x) x^2, 5);  % 25

% Eingebaute Higher-Order Functions
numbers = [1, 2, 3, 4, 5];
squared = arrayfun(@(x) x^2, numbers); % [1, 4, 9, 16, 25]
```

**Besonderheiten:**
- Function Handles (`@`) ermöglichen Funktionen als Argumente
- `arrayfun`, `cellfun`, `structfun` als eingebaute Higher-Order Functions

**Weiterführende Links:**
- [MATLAB Documentation - Function Handles](https://www.mathworks.com/help/matlab/matlab_prog/creating-a-function-handle.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Higher-Order Predicates
% Mercury unterstützt Higher-Order Predicates und Funktionen als First-Class-Werte.

:- func apply_func((func(int) = int), int) = int.
apply_func(F, X) = apply(F, X).

:- func double(int) = int.
double(X) = X * 2.

:- func add_n(int, int) = int.
add_n(N, X) = X + N.

% Funktion, die eine Funktion zurückgibt
:- func make_adder(int) = (func(int) = int).
make_adder(N) = add_n(N).

:- pred main(io::di, io::uo) is det.
main(!IO) :-
    Result1 = apply_func(double, 5),
    io.format("double(5) = %d\n", [i(Result1)], !IO),

    Adder = make_adder(10),
    Result2 = apply(Adder, 3),
    io.format("make_adder(10)(3) = %d\n", [i(Result2)], !IO),

    % Eingebaute Higher-Order Functions
    List = [1, 2, 3, 4, 5],
    Doubled = list.map(double, List),
    Filtered = list.filter((pred(X::in) is semidet :- X > 3), List),
    list.foldl((pred(X::in, Acc0::in, Acc::out) is det :- Acc = Acc0 + X), List, 0, Sum).
```

**Besonderheiten:**
- Mercury unterstützt Higher-Order Predicates und Funktionen als First-Class-Werte.
- `apply/N` wird verwendet, um Funktionen/Prädikate, die als Argumente übergeben wurden, aufzurufen.
- Funktionen können andere Funktionen zurückgeben (Closures).
- Die Standardbibliothek bietet `list.map`, `list.filter`, `list.foldl` und weitere Higher-Order Functions.
- Die Typsignatur für Higher-Order Argumente verwendet Klammern: `(func(int) = int)` oder `pred(int)`.

**Weiterführende Links:**
- [Mercury Language Reference - Higher-Order](https://www.mercurylang.org/information/doc-release/mercury_ref/Higher-order.html)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Higher-Order Function: Block als Parameter
- (NSArray *)map:(NSArray *)array withBlock:(id (^)(id))block {
    NSMutableArray *result = [NSMutableArray array];
    for (id item in array) {
        [result addObject:block(item)];
    }
    return result;
}

NSArray *numbers = @[@1, @2, @3];
NSArray *doubled = [self map:numbers withBlock:^id(id item) {
    return @([item intValue] * 2);
}];
```

**Besonderheiten:**
- Blocks ermöglichen Higher-Order Functions
- Blocks können als Parameter übergeben und zurückgegeben werden
- NSArray-Methoden wie `enumerateObjectsUsingBlock:` verwenden Higher-Order-Patterns

**Weiterführende Links:**
- [Apple Documentation - Blocks](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/WorkingwithBlocks/WorkingwithBlocks.html)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
function result = apply(func, value)
    result = func(value);
end

square = @(x) x^2;
result = apply(square, 5);  % 25

% Eingebaute HOFs
numbers = [1, 2, 3, 4, 5];
doubled = arrayfun(@(x) x * 2, numbers);  % [2, 4, 6, 8, 10]
```

**Besonderheiten:**
- Function Handles (`@`) ermöglichen Übergabe von Funktionen als Argumente
- `arrayfun`, `cellfun`, `structfun` als eingebaute Higher-Order Functions

**Weiterführende Links:**
- [GNU Octave Documentation - Function Handles](https://octave.org/doc/v8.1.0/Function-Handles.html)

</TabItem>
<TabItem value="v" label="V">

```v
// Higher-Order Functions
fn apply(values []int, transform fn (int) int) []int {
    mut result := []int{}
    for v in values {
        result << transform(v)
    }
    return result
}

doubled := apply([1, 2, 3], fn (x int) int {
    return x * 2
})
println(doubled)  // [2, 4, 6]
```

**Besonderheiten:**
- Funktionen können als Parameter übergeben werden
- Funktionstypen mit `fn (params) return_type` Syntax
- Unterstützung für anonyme Funktionen als Argumente

**Weiterführende Links:**
- [V Documentation - Functions](https://github.com/vlang/v/blob/master/doc/docs.md#functions)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Higher-Order Functions *)
items = {1, 2, 3, 4, 5};
doubled = Map[# * 2 &, items]            (* {2, 4, 6, 8, 10} *)
evens = Select[items, EvenQ]              (* {2, 4} *)
sum = Fold[Plus, 0, items]               (* 15 *)
```

**Besonderheiten:**
- `Map` (/@), `Select`, `Fold`, `Apply` (@@) sind zentrale höherwertige Funktionen
- Kurzform: `f /@ list` für `Map[f, list]`

**Weiterführende Links:**
- [Wolfram Language Documentation - Functional Programming](https://reference.wolfram.com/language/guide/FunctionalProgramming.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Higher-Order Functions: Funktionen als Parameter
fn applyTwice(func: *const fn (i32) i32, x: i32) i32 {
    return func(func(x));
}

fn double(x: i32) i32 {
    return x * 2;
}

const result = applyTwice(&double, 3);  // 12
```

**Besonderheiten:**
- Funktionen können als Parameter über Funktionszeiger übergeben werden
- Funktionstypen werden explizit annotiert
- Keine Closures, aber Funktionszeiger sind first-class

**Weiterführende Links:**
- [Zig Documentation - Functions](https://ziglang.org/documentation/master/#Functions)

</TabItem>
</Tabs>


## 7.1.13. Currying

Technik, bei der eine Funktion mit mehreren Argumenten in eine Sequenz von Funktionen umgewandelt wird, die jeweils ein einzelnes Argument akzeptieren. Ermöglicht es, Funktionen schrittweise anzuwenden.

### Sprachen {#sprachen}

<Tabs availableTabs={['common-lisp', 'elixir', 'elm', 'erlang', 'fsharp', 'groovy', 'haskell', 'idris', 'javascript', 'koka', 'lean4', 'ocaml', 'purescript', 'python', 'racket', 'scala', 'scheme', 'wolfram-language']} orangeTabs={['clojure']}>
<TabItem value="clojure" label="Clojure">

```clojure
(defn add [x y z]
  (+ x y z))

;; Currying manuell
(defn add-curried [x]
  (fn [y]
    (fn [z]
      (+ x y z))))

(def result (((add-curried 1) 2) 3))  ; 6
```

**Besonderheiten:**
- Currying wird manuell durch verschachtelte Funktionen realisiert
- Funktionen sind First-Class-Objekte
- Kein natives Currying wie in Haskell

**Weiterführende Links:**
- [Clojure Documentation - Functions](https://clojure.org/reference/functions)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
(defun add (x y z)
  (+ x y z))

;; Currying manuell
(defun add-curried (x)
  (lambda (y)
    (lambda (z)
      (+ x y z))))

(defvar result (funcall (funcall (add-curried 1) 2) 3))
```

**Besonderheiten:**
- Currying wird manuell durch verschachtelte Lambda-Ausdrücke realisiert
- Funktionen sind First-Class-Objekte

**Weiterführende Links:**
- [Common Lisp HyperSpec - Functions](http://www.lispworks.com/documentation/HyperSpec/Body/f_fun.htm)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
defmodule CurryExample do
  def add(x, y, z) do
    x + y + z
  end

  # Currying manuell
  def add_curried(x) do
    fn y ->
      fn z ->
        x + y + z
      end
    end
  end
end

result = CurryExample.add_curried(1).(2).(3)
# => 6
```

**Besonderheiten:**
- Currying wird manuell durch verschachtelte anonyme Funktionen realisiert
- Benannte Funktionen werden mit `()` aufgerufen, anonyme mit `.()` 
- Funktionen sind First-Class-Objects

**Weiterführende Links:**
- [Elixir Documentation - Functions](https://elixir-lang.org/getting-started/modules-and-functions.html)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
add : Int -> Int -> Int -> Int
add x y z = x + y + z

-- Currying ist automatisch
add1 : Int -> Int -> Int
add1 = add 1

add12 : Int -> Int
add12 = add1 2

result = add12 3
```

**Besonderheiten:**
- Currying ist automatisch - alle Funktionen sind automatisch curried
- Funktionale Sprache mit expliziten Typannotationen

**Weiterführende Links:**
- [Elm Documentation - Functions](https://guide.elm-lang.org/core_language.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
add(X, Y, Z) ->
    X + Y + Z.

% Currying manuell
add_curried(X) ->
    fun(Y) ->
        fun(Z) ->
            X + Y + Z
        end
    end.

Result = ((add_curried(1))(2))(3).
```

**Besonderheiten:**
- Currying wird manuell durch verschachtelte anonyme Funktionen realisiert
- Funktionen sind First-Class-Objekte

**Weiterführende Links:**
- [Erlang Documentation - Functions](https://www.erlang.org/doc/reference_manual/functions.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
let add x y z = x + y + z

// Currying ist automatisch
let add1 = add 1
let add12 = add1 2
let result = add12 3
```

**Besonderheiten:**
- Currying ist automatisch - alle Funktionen sind automatisch curried
- Funktionale Sprache mit First-Class-Funktionen

**Weiterführende Links:**
- [F# Documentation - Functions](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/functions/)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
add :: Int -> Int -> Int -> Int
add x y z = x + y + z

-- Currying ist automatisch
add1 :: Int -> Int -> Int
add1 = add 1

add12 :: Int -> Int
add12 = add1 2

result = add12 3
```

**Besonderheiten:**
- Currying ist automatisch - alle Funktionen sind automatisch curried
- Funktionale Sprache mit expliziten Typannotationen

**Weiterführende Links:**
- [Haskell Documentation - Functions](https://www.haskell.org/tutorial/functions.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
add : Int -> Int -> Int -> Int
add x y z = x + y + z

-- Currying ist automatisch
add1 : Int -> Int -> Int
add1 = add 1

add12 : Int -> Int
add12 = add1 2

result : Int
result = add12 3
```

**Besonderheiten:**
- Currying ist automatisch - alle Funktionen sind automatisch curried
- Funktionale Sprache mit abhängigen Typen

**Weiterführende Links:**
- [Idris Documentation - Functions](https://idris2.readthedocs.io/en/latest/tutorial/functions.html)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Currying (manuell)
fun add(x: int): (int) -> int
  fn(y) { x + y }

val add5 = add(5)
val result = add5(3) // 8

// Mehrstufiges Currying
fun add3(x: int): (int) -> ((int) -> int)
  fn(y) { fn(z) { x + y + z } }

val result2 = add3(1)(2)(3) // 6
```

**Besonderheiten:**
- Koka hat kein automatisches Currying wie Haskell
- Currying wird manuell durch verschachtelte Funktionen erreicht
- Funktionen sind First-Class-Werte, was Currying ermöglicht
- Nützlich für die Erstellung spezialisierter Funktionen

**Weiterführende Links:**
- [Koka Language Guide - Functions](https://koka-lang.github.io/koka/doc/book.html#sec-functions)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```haskell
-- Funktionen sind automatisch gecurried
def add (x : Nat) (y : Nat) (z : Nat) : Nat := x + y + z

-- Typ: Nat → Nat → Nat → Nat
-- Äquivalent zu: Nat → (Nat → (Nat → Nat))

-- Partielle Anwendung durch Currying
def add1 := add 1
def add12 := add1 2

#eval add12 3  -- 6
```

**Besonderheiten:**
- Automatisches Currying: Alle Funktionen mit mehreren Parametern sind automatisch gecurried
- Jeder Parameter kann einzeln übergeben werden
- Partielle Anwendung ergibt sich natürlich aus dem Currying

**Weiterführende Links:**
- [Lean 4 Documentation - Functions](https://lean-lang.org/lean4/doc/functions.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
function add(x, y, z) {
    return x + y + z;
}

// Currying manuell
function addCurried(x) {
    return function(y) {
        return function(z) {
            return x + y + z;
        };
    };
}

const result = addCurried(1)(2)(3);
```

**Besonderheiten:**
- Currying wird manuell durch verschachtelte Funktionen realisiert
- Arrow Functions können verwendet werden für kompaktere Syntax

**Weiterführende Links:**
- [MDN Web Docs - Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
let add x y z = x + y + z

(* Currying ist automatisch *)
let add1 = add 1
let add12 = add1 2
let result = add12 3
```

**Besonderheiten:**
- Currying ist automatisch - alle Funktionen sind automatisch curried
- Funktionale Sprache mit First-Class-Funktionen

**Weiterführende Links:**
- [OCaml Documentation - Functions](https://ocaml.org/docs/first-hour#functions)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
add :: Int -> Int -> Int -> Int
add x y z = x + y + z

-- Currying ist automatisch
add1 :: Int -> Int -> Int
add1 = add 1

add12 :: Int -> Int
add12 = add1 2

result :: Int
result = add12 3
```

**Besonderheiten:**
- Currying ist automatisch - alle Funktionen sind automatisch curried
- Funktionale Sprache mit expliziten Typannotationen

**Weiterführende Links:**
- [PureScript Documentation - Functions](https://book.purescript.org/chapter3.html)

</TabItem>
<TabItem value="python" label="Python">

```python
def add(x, y, z):
    return x + y + z

# Currying manuell
def add_curried(x):
    def inner(y):
        def inner2(z):
            return x + y + z
        return inner2
    return inner

result = add_curried(1)(2)(3)
```

**Besonderheiten:**
- Currying wird manuell durch verschachtelte Funktionen realisiert
- Funktionen sind First-Class-Objekte

**Weiterführende Links:**
- [Python Documentation - Functions](https://docs.python.org/3/tutorial/controlflow.html#defining-functions)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
(define (add x y z)
    (+ x y z))

;; Currying manuell
(define (add-curried x)
    (lambda (y)
        (lambda (z)
            (+ x y z))))

(define result (((add-curried 1) 2) 3))
```

**Besonderheiten:**
- Currying wird manuell durch verschachtelte Lambda-Ausdrücke realisiert
- Funktionale Sprache mit First-Class-Funktionen

**Weiterführende Links:**
- [Racket Documentation - Functions](https://docs.racket-lang.org/guide/define.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
def add(x: Int)(y: Int)(z: Int): Int = {
    x + y + z
}

// Currying mit mehreren Parameterlisten
val add1 = add(1) _
val add12 = add1(2)
val result = add12(3)
```

**Besonderheiten:**
- Unterstützt Currying über mehrere Parameterlisten
- Funktionale und objektorientierte Sprache

**Weiterführende Links:**
- [Scala Documentation - Currying](https://docs.scala-lang.org/tour/multiple-parameter-lists.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
(define (add x y z)
    (+ x y z))

;; Currying manuell
(define (add-curried x)
    (lambda (y)
        (lambda (z)
            (+ x y z))))

(define result (((add-curried 1) 2) 3))
```

**Besonderheiten:**
- Currying wird manuell durch verschachtelte Lambda-Ausdrücke realisiert
- Funktionale Sprache mit First-Class-Funktionen

**Weiterführende Links:**
- [Scheme Documentation - Functions](https://www.scheme.com/tspl4/start.html#./start:h0)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Currying mit .curry()
def multiply = { a, b -> a * b }

def double = multiply.curry(2)
def triple = multiply.curry(3)

println double(5)  // 10
println triple(5)  // 15

// Right-Currying mit .rcurry()
def power = { base, exp -> base ** exp }
def square = power.rcurry(2)
println square(5)  // 25
```

**Besonderheiten:**
- `.curry()` bindet Argumente von links
- `.rcurry()` bindet Argumente von rechts
- `.ncurry()` bindet Argumente an beliebiger Position
- Gibt eine neue Closure zurück

**Weiterführende Links:**
- [Groovy Documentation - Currying](https://groovy-lang.org/closures.html#_currying)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Currying *)
add[x_][y_] := x + y
add5 = add[5];
add5[3]  (* 8 *)

(* OperatorApplied (seit Version 13.1) *)
addOp = OperatorApplied[Plus, 2];
add10 = addOp[10];
add10[5]  (* 15 *)
```

**Besonderheiten:**
- Currying durch verschachtelte Funktionsdefinitionen `f[x_][y_] := ...`
- `OperatorApplied` (seit Version 13.1) für explizites Currying

**Weiterführende Links:**
- [Wolfram Language Documentation - OperatorApplied](https://reference.wolfram.com/language/ref/OperatorApplied.html)

</TabItem>
</Tabs>


## 7.1.14. Partial Application

Technik, bei der eine Funktion mit mehreren Argumenten mit weniger Argumenten aufgerufen wird, als sie erwartet, wodurch eine neue Funktion entsteht, die die restlichen Argumente erwartet. Ähnlich wie Currying, aber weniger strikt.

### Sprachen {#sprachen}

<Tabs availableTabs={['clojure', 'common-lisp', 'elixir', 'elm', 'erlang', 'fsharp', 'groovy', 'haskell', 'idris', 'javascript', 'koka', 'lean4', 'mercury', 'ocaml', 'purescript', 'python', 'racket', 'scala', 'scheme', 'wolfram-language']} yellowTabs={['prolog']}>
<TabItem value="clojure" label="Clojure">

```clojure
(defn add [x y z]
  (+ x y z))

;; Partial Application
(def add1 (partial add 1))
(def add12 (partial add1 2))

(def result (add12 3))
```

**Besonderheiten:**
- Unterstützt Partial Application über `partial`-Funktion
- Funktionen sind First-Class-Objekte

**Weiterführende Links:**
- [Clojure Documentation - partial](https://clojure.org/reference/other_functions#partial)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
(defun add (x y z)
  (+ x y z))

;; Partial Application manuell
(defun add1 (y z)
  (add 1 y z))

(defun add12 (z)
  (add 1 2 z))

(defvar result (add12 3))
```

**Besonderheiten:**
- Partial Application wird manuell durch Wrapper-Funktionen realisiert
- Funktionen sind First-Class-Objekte

**Weiterführende Links:**
- [Common Lisp HyperSpec - Functions](http://www.lispworks.com/documentation/HyperSpec/Body/f_fun.htm)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
def add(x, y, z) do
    x + y + z
end

# Partial Application über &-Syntax
add1 = &add(1, &1, &2)
add12 = &add(1, 2, &1)

result = add12.(3)
```

**Besonderheiten:**
- Unterstützt Partial Application über `&`-Syntax
- Funktionen sind First-Class-Objekte

**Weiterführende Links:**
- [Elixir Documentation - Partial Application](https://elixir-lang.org/getting-started/basic-types.html#functions)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
add : Int -> Int -> Int -> Int
add x y z = x + y + z

-- Partial Application ist automatisch
add1 : Int -> Int -> Int
add1 = add 1

add12 : Int -> Int
add12 = add 1 2

result = add12 3
```

**Besonderheiten:**
- Partial Application ist automatisch durch Currying
- Funktionale Sprache mit expliziten Typannotationen

**Weiterführende Links:**
- [Elm Documentation - Functions](https://guide.elm-lang.org/core_language.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
add(X, Y, Z) ->
    X + Y + Z.

% Partial Application über fun
Add1 = fun(Y, Z) -> add(1, Y, Z) end.
Add12 = fun(Z) -> add(1, 2, Z) end.

Result = Add12(3).
```

**Besonderheiten:**
- Partial Application wird über anonyme Funktionen realisiert
- Funktionen sind First-Class-Objekte

**Weiterführende Links:**
- [Erlang Documentation - Functions](https://www.erlang.org/doc/reference_manual/functions.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
let add x y z = x + y + z

// Partial Application ist automatisch
let add1 = add 1
let add12 = add 1 2
let result = add12 3
```

**Besonderheiten:**
- Partial Application ist automatisch durch Currying
- Funktionale Sprache mit First-Class-Funktionen

**Weiterführende Links:**
- [F# Documentation - Functions](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/functions/)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
add :: Int -> Int -> Int -> Int
add x y z = x + y + z

-- Partial Application ist automatisch
add1 :: Int -> Int -> Int
add1 = add 1

add12 :: Int -> Int
add12 = add 1 2

result = add12 3
```

**Besonderheiten:**
- Partial Application ist automatisch durch Currying
- Funktionale Sprache mit expliziten Typannotationen

**Weiterführende Links:**
- [Haskell Documentation - Functions](https://www.haskell.org/tutorial/functions.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
add : Int -> Int -> Int -> Int
add x y z = x + y + z

-- Partial Application ist automatisch
add1 : Int -> Int -> Int
add1 = add 1

add12 : Int -> Int
add12 = add 1 2

result : Int
result = add12 3
```

**Besonderheiten:**
- Partial Application ist automatisch durch Currying
- Funktionale Sprache mit abhängigen Typen

**Weiterführende Links:**
- [Idris Documentation - Functions](https://idris2.readthedocs.io/en/latest/tutorial/functions.html)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Partial Application (manuell über Lambdas)
fun add(x: int, y: int, z: int): int
  x + y + z

// Partial Application durch Lambda-Wrapper
val add1 = fn(y, z) { add(1, y, z) }
val add12 = fn(z) { add(1, 2, z) }

val result = add12(3) // 6

// Partiell angewandte Higher-Order Function
val numbers = [1, 2, 3, 4, 5]
fun greaterThan(threshold: int): (int) -> bool
  fn(x) { x > threshold }

val bigNumbers = numbers.filter(greaterThan(3)) // [4, 5]
```

**Besonderheiten:**
- Koka hat keine automatische Partial Application wie Haskell
- Wird manuell über Lambda-Ausdrücke erreicht
- Häufiges Muster: Funktion gibt eine spezialisierte Lambda zurück
- Nützlich in Kombination mit Higher-Order Functions

**Weiterführende Links:**
- [Koka Language Guide - Functions](https://koka-lang.github.io/koka/doc/book.html#sec-functions)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```haskell
def add (x : Nat) (y : Nat) (z : Nat) : Nat := x + y + z

-- Partial Application durch automatisches Currying
def add1 := add 1
def add12 := add 1 2

#eval add12 3  -- 6

-- Partial Application mit anonymer Funktion
def multiplyBy (factor : Nat) : Nat → Nat := (· * factor)

#eval [1, 2, 3].map (multiplyBy 3)  -- [3, 6, 9]
```

**Besonderheiten:**
- Partial Application ergibt sich automatisch durch Currying
- Jede Funktion kann mit weniger Argumenten aufgerufen werden
- `·`-Notation für anonyme partielle Anwendung

**Weiterführende Links:**
- [Lean 4 Documentation - Functions](https://lean-lang.org/lean4/doc/functions.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Partial Application (Partielle Anwendung)
% Mercury unterstützt partielle Anwendung von Prädikaten und Funktionen nativ.

:- func add(int, int) = int.
add(X, Y) = X + Y.

:- pred print_list(list(int)::in, io::di, io::uo) is det.
print_list([], !IO).
print_list([H|T], !IO) :-
    io.format("%d ", [i(H)], !IO),
    print_list(T, !IO).

:- pred main(io::di, io::uo) is det.
main(!IO) :-
    % Partielle Anwendung einer Funktion
    AddFive = add(5),          % AddFive : func(int) = int
    Result = apply(AddFive, 3), % Result = 8

    % Partielle Anwendung mit list.map
    Numbers = [1, 2, 3, 4, 5],
    Incremented = list.map(add(10), Numbers),  % [11, 12, 13, 14, 15]

    % Partielle Anwendung eines Prädikats
    list.filter((pred(X::in) is semidet :- X > 3), Numbers, Filtered),

    io.format("add(5)(3) = %d\n", [i(Result)], !IO),
    print_list(Incremented, !IO),
    io.nl(!IO).
```

**Besonderheiten:**
- Mercury unterstützt partielle Anwendung (Partial Application) nativ.
- Wenn eine Funktion `f(A, B) = C` existiert, kann `f(A)` als Higher-Order Term mit einem verbleibenden Argument verwendet werden.
- Dies funktioniert sowohl für `func` als auch für `pred` Deklarationen.
- Partielle Anwendung wird häufig mit `list.map`, `list.filter` und anderen Higher-Order Functions kombiniert.

**Weiterführende Links:**
- [Mercury Language Reference - Higher-Order](https://www.mercurylang.org/information/doc-release/mercury_ref/Higher-order.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
function add(x, y, z) {
    return x + y + z;
}

// Partial Application manuell
function partial(fn, ...args) {
    return function(...restArgs) {
        return fn(...args, ...restArgs);
    };
}

const add1 = partial(add, 1);
const add12 = partial(add1, 2);
const result = add12(3);
```

**Besonderheiten:**
- Partial Application wird manuell durch Wrapper-Funktionen realisiert
- Arrow Functions können verwendet werden für kompaktere Syntax

**Weiterführende Links:**
- [MDN Web Docs - Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
let add x y z = x + y + z

(* Partial Application ist automatisch *)
let add1 = add 1
let add12 = add 1 2
let result = add12 3
```

**Besonderheiten:**
- Partial Application ist automatisch durch Currying
- Funktionale Sprache mit First-Class-Funktionen

**Weiterführende Links:**
- [OCaml Documentation - Functions](https://ocaml.org/docs/first-hour#functions)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
add(X, Y, Z, Result) :-
    Result is X + Y + Z.

% Partial Application über call/N
% call(add(1), 2, 3, Result) wird zu add(1, 2, 3, Result)
?- call(add(1), 2, 3, Result).
%  Result = 6

% Partial Application mit maplist
increment(X, Result) :- Result is X + 1.
?- maplist(increment, [1, 2, 3], Results).
%  Results = [2, 3, 4]

% Mehrfache partielle Anwendung
add_partial(X, Y, Result) :- Result is X + Y.
?- maplist(call(add_partial(10)), [1, 2, 3], Results).
%  Results = [11, 12, 13]
```

**Besonderheiten:**
- `call/N` (ISO-Standard) ermöglicht Partial Application, indem Argumente an einen Term angehängt werden
- `call(Goal, Arg1, ...)` ruft `Goal` mit zusätzlichen Argumenten auf
- Häufig in Kombination mit `maplist`, `include`, `foldl` verwendet

**Weiterführende Links:**
- [SWI-Prolog Documentation - call/N](https://www.swi-prolog.org/pldoc/doc_for?object=call/2)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
add :: Int -> Int -> Int -> Int
add x y z = x + y + z

-- Partial Application ist automatisch
add1 :: Int -> Int -> Int
add1 = add 1

add12 :: Int -> Int
add12 = add 1 2

result :: Int
result = add12 3
```

**Besonderheiten:**
- Partial Application ist automatisch durch Currying
- Funktionale Sprache mit expliziten Typannotationen

**Weiterführende Links:**
- [PureScript Documentation - Functions](https://book.purescript.org/chapter3.html)

</TabItem>
<TabItem value="python" label="Python">

```python
def add(x, y, z):
    return x + y + z

# Partial Application über functools.partial
from functools import partial

add1 = partial(add, 1)
add12 = partial(add1, 2)
result = add12(3)
```

**Besonderheiten:**
- Unterstützt Partial Application über `functools.partial`
- Funktionen sind First-Class-Objekte

**Weiterführende Links:**
- [Python Documentation - functools.partial](https://docs.python.org/3/library/functools.html#functools.partial)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
(define (add x y z)
  (+ x y z))

;; Partial Application mit curry
(define add1 (curry add 1))
(define add12 (curry add 1 2))

(add12 3)  ; 6

;; Partial Application von rechts mit curryr
(define add-to-3 (curryr add 3))
```

**Besonderheiten:**
- `curry` und `curryr` für eingebaute Partial Application
- `curry` bindet Argumente von links, `curryr` von rechts
- Funktionale Sprache mit First-Class-Funktionen

**Weiterführende Links:**
- [Racket Documentation - curry](https://docs.racket-lang.org/reference/procedures.html#%28def._%28%28lib._racket%2Ffunction..rkt%29._curry%29%29)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
def add(x: Int)(y: Int)(z: Int): Int = {
    x + y + z
}

// Partial Application mit mehreren Parameterlisten
val add1 = add(1) _
val add12 = add(1)(2) _
val result = add12(3)
```

**Besonderheiten:**
- Unterstützt Partial Application über mehrere Parameterlisten
- Funktionale und objektorientierte Sprache

**Weiterführende Links:**
- [Scala Documentation - Currying](https://docs.scala-lang.org/tour/multiple-parameter-lists.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
(define (add x y z)
    (+ x y z))

;; Partial Application manuell
(define (add1 y z)
    (add 1 y z))

(define (add12 z)
    (add 1 2 z))

(define result (add12 3))
```

**Besonderheiten:**
- Partial Application wird manuell durch Wrapper-Funktionen realisiert
- Funktionale Sprache mit First-Class-Funktionen

**Weiterführende Links:**
- [Scheme Documentation - Functions](https://www.scheme.com/tspl4/start.html#./start:h0)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Partial Application über curry
def add = { a, b, c -> a + b + c }

// Teilweise Anwendung
def addFive = add.curry(5)
println addFive(3, 2)  // 10

// Mehrfache partielle Anwendung
def addFiveAndThree = add.curry(5).curry(3)
println addFiveAndThree(2)  // 10

// ncurry für Bindung an bestimmter Position
def greeting = { greeting, name, punctuation -> "$greeting, $name$punctuation" }
def helloGreeting = greeting.ncurry(0, "Hallo")
println helloGreeting("Welt", "!")  // "Hallo, Welt!"
```

**Besonderheiten:**
- `.curry()` für Partial Application von links
- `.rcurry()` für Partial Application von rechts
- `.ncurry(index, args)` für Partial Application an bestimmter Position

**Weiterführende Links:**
- [Groovy Documentation - Currying](https://groovy-lang.org/closures.html#_currying)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Partial Application mit Pure Functions *)
multiply = Function[{x, y}, x * y];
double = multiply[2, #] &;
double[5]  (* 10 *)

(* Partial Application mit Slot *)
addTen = (# + 10) &;
addTen[5]  (* 15 *)
```

**Besonderheiten:**
- `#`-Slots ermöglichen Partial Application
- Pure Functions (`&`) können teilweise angewendet werden

**Weiterführende Links:**
- [Wolfram Language Documentation - Pure Functions](https://reference.wolfram.com/language/ref/Function.html)

</TabItem>
</Tabs>

## 7.1.15. Function Composition

Function Composition kombiniert zwei oder mehr Funktionen zu einer neuen Funktion, bei der die Ausgabe der einen als Eingabe der nächsten dient: `(f ∘ g)(x) = f(g(x))`.

### Sprachen {#sprachen}

<Tabs availableTabs={['clojure', 'elm', 'fsharp', 'groovy', 'haskell', 'idris', 'java', 'julia', 'lean4', 'ocaml', 'purescript', 'racket', 'ruby', 'scala', 'wolfram-language']} orangeTabs={['common-lisp', 'd', 'elixir', 'erlang', 'koka', 'kotlin', 'python', 'scheme', 'swift']}>
<TabItem value="clojure" label="Clojure">

```clojure
(defn double-val [x] (* x 2))
(defn increment [x] (+ x 1))

;; comp komponiert rechts nach links: (increment (double-val x))
(def double-then-increment (comp increment double-val))
(double-then-increment 5)  ; 11

;; Mehrere Funktionen komponieren
(def transform (comp str inc #(* % 2)))
(transform 5)  ; "11"
```

**Besonderheiten:**
- `comp` komponiert beliebig viele Funktionen von rechts nach links
- Ohne Argumente gibt `(comp)` die Identitätsfunktion zurück
- `comp` ist Teil von `clojure.core` und sofort verfügbar

**Weiterführende Links:**
- [Clojure Documentation - comp](https://clojuredocs.org/clojure.core/comp)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
(defun double-val (x) (* x 2))
(defun increment (x) (+ x 1))

;; Manuelle Kompositionsfunktion
(defun compose (f g)
  (lambda (x) (funcall f (funcall g x))))

(defvar double-then-increment (compose #'increment #'double-val))
(funcall double-then-increment 5)  ; 11
```

**Besonderheiten:**
- Keine eingebaute `compose`-Funktion im Standard
- Trivial mit `lambda` und `funcall` zu implementieren
- Die Alexandria-Bibliothek stellt `compose` als Utility bereit

**Weiterführende Links:**
- [Common Lisp HyperSpec - funcall](http://www.lispworks.com/documentation/HyperSpec/Body/f_funcal.htm)

</TabItem>
<TabItem value="d" label="D">

```d
int doubleVal(int x) { return x * 2; }
int increment(int x) { return x + 1; }

// Manuelle Komposition mit Lambda
auto doubleThenIncrement = (int x) => increment(doubleVal(x));
doubleThenIncrement(5);  // 11
```

**Besonderheiten:**
- Keine eingebaute Kompositionsfunktion in der Standardbibliothek
- Komposition wird manuell mit Lambda-Ausdrücken realisiert
- D's Template-System ermöglicht generische Kompositions-Wrapper

**Weiterführende Links:**
- [D Language Reference - Function Literals](https://dlang.org/spec/expression.html#function_literals)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
double_val = fn x -> x * 2 end
increment = fn x -> x + 1 end

# Manuelle Komposition
double_then_increment = fn x -> increment.(double_val.(x)) end
double_then_increment.(5)  # 11
```

**Besonderheiten:**
- Kein nativer Kompositionsoperator
- Der Pipe-Operator `|>` bietet eine verwandte, aber unterschiedliche Funktionalität (Wert-Piping, nicht Funktionskomposition)
- Anonyme Funktionen werden mit `.()` aufgerufen

**Weiterführende Links:**
- [Elixir Documentation - Anonymous Functions](https://hexdocs.pm/elixir/anonymous-functions.html)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
doubleVal : Int -> Int
doubleVal x = x * 2

increment : Int -> Int
increment x = x + 1

-- >> komponiert links nach rechts
doubleThenIncrement : Int -> Int
doubleThenIncrement = doubleVal >> increment
-- doubleThenIncrement 5 == 11

-- << komponiert rechts nach links
incrementThenDouble : Int -> Int
incrementThenDouble = doubleVal << increment
-- incrementThenDouble 5 == 12
```

**Besonderheiten:**
- `>>` komponiert links nach rechts (forward composition)
- `<<` komponiert rechts nach links (backward composition)
- Komposition ist ein zentrales Konzept in Elm und wird häufig in Pipelines eingesetzt

**Weiterführende Links:**
- [Elm Documentation - Function Composition](https://package.elm-lang.org/packages/elm/core/latest/Basics#%3C%3C)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
DoubleVal = fun(X) -> X * 2 end,
Increment = fun(X) -> X + 1 end,

%% Manuelle Komposition
DoubleThenIncrement = fun(X) -> Increment(DoubleVal(X)) end,
DoubleThenIncrement(5).  % 11
```

**Besonderheiten:**
- Kein nativer Kompositionsoperator oder eingebaute Kompositionsfunktion
- Komposition wird manuell mit anonymen Funktionen (`fun`) realisiert

**Weiterführende Links:**
- [Erlang Documentation - Funs](https://www.erlang.org/doc/programming_examples/funs)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Function Composition (manuell)
fun double(x: int): int
  x * 2

fun increment(x: int): int
  x + 1

// Manuelle Komposition über Lambda
val doubleThenIncrement = fn(x: int) { increment(double(x)) }
val result = doubleThenIncrement(5) // 11

// Kompositions-Hilfsfunktion
fun compose(f: (int) -> int, g: (int) -> int): (int) -> int
  fn(x) { f(g(x)) }

val doubleThenInc = compose(increment, double)
val result2 = doubleThenInc(5) // 11

// Dot-Notation als Pipe-ähnliche Komposition
val result3 = 5.double.increment // 11
```

**Besonderheiten:**
- Koka hat keinen eingebauten Kompositionsoperator wie Haskell's `.`
- Komposition kann manuell über Lambdas oder Hilfsfunktionen erreicht werden
- Die Dot-Notation (`x.f.g`) ermöglicht eine natürliche links-nach-rechts Komposition
- UFCS (Uniform Function Call Syntax) macht Komposition lesbarer

**Weiterführende Links:**
- [Koka Language Guide - Functions](https://koka-lang.github.io/koka/doc/book.html#sec-functions)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
let doubleVal x = x * 2
let increment x = x + 1

// >> komponiert links nach rechts
let doubleThenIncrement = doubleVal >> increment
doubleThenIncrement 5  // 11

// << komponiert rechts nach links
let incrementThenDouble = doubleVal << increment
incrementThenDouble 5  // 12
```

**Besonderheiten:**
- `>>` komponiert links nach rechts (forward composition)
- `<<` komponiert rechts nach links (backward composition)
- Komposition ist ein zentrales Idiom in F# und wird häufig anstelle von Piping verwendet

**Weiterführende Links:**
- [Microsoft F# Documentation - Function Composition](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/functions/#function-composition-and-pipelining)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
def doubleVal = { x -> x * 2 }
def increment = { x -> x + 1 }

// >> komponiert links nach rechts
def doubleThenIncrement = doubleVal >> increment
doubleThenIncrement(5)  // 11

// << komponiert rechts nach links
def incrementThenDouble = doubleVal << increment
incrementThenDouble(5)  // 12
```

**Besonderheiten:**
- `>>` (rightShift) und `<<` (leftShift) auf Closures für Komposition
- `>>` entspricht `andThen`, `<<` entspricht `compose`
- Closures sind First-Class-Objekte mit eingebauter Kompositionsunterstützung

**Weiterführende Links:**
- [Groovy Documentation - Closures](https://groovy-lang.org/closures.html#_composition)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
doubleVal :: Int -> Int
doubleVal x = x * 2

increment :: Int -> Int
increment x = x + 1

-- . komponiert rechts nach links
doubleThenIncrement :: Int -> Int
doubleThenIncrement = increment . doubleVal
-- doubleThenIncrement 5 == 11

-- Mehrfache Komposition
transform :: Int -> String
transform = show . increment . doubleVal
-- transform 5 == "11"
```

**Besonderheiten:**
- `.` ist der Kompositionsoperator (rechts nach links)
- Komposition ist ein fundamentales Konzept in Haskell und wird extensiv genutzt
- Pointfree-Stil basiert stark auf Funktionskomposition

**Weiterführende Links:**
- [Haskell Wiki - Function Composition](https://wiki.haskell.org/Function_composition)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
doubleVal : Int -> Int
doubleVal x = x * 2

increment : Int -> Int
increment x = x + 1

-- . komponiert rechts nach links
doubleThenIncrement : Int -> Int
doubleThenIncrement = increment . doubleVal
-- doubleThenIncrement 5 == 11
```

**Besonderheiten:**
- `.` ist der Kompositionsoperator wie in Haskell
- Komposition ist typgeprüft — Typen müssen kompatibel sein
- Funktionskomposition ist auch in abhängig typisierten Kontexten einsetzbar

**Weiterführende Links:**
- [Idris 2 Documentation - Functions](https://idris2.readthedocs.io/en/latest/tutorial/functions.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Benötigt: import java.util.function.Function (seit Java 8)
Function<Integer, Integer> doubleVal = x -> x * 2;
Function<Integer, Integer> increment = x -> x + 1;

// andThen: links nach rechts
Function<Integer, Integer> doubleThenIncrement = doubleVal.andThen(increment);
doubleThenIncrement.apply(5);  // 11

// compose: rechts nach links
Function<Integer, Integer> incrementThenDouble = doubleVal.compose(increment);
incrementThenDouble.apply(5);  // 12
```

**Besonderheiten:**
- `Function.andThen()` komponiert links nach rechts (seit Java 8)
- `Function.compose()` komponiert rechts nach links (seit Java 8)
- Erfordert die Verwendung von `Function<T, R>` — nicht mit primitiven Typen nutzbar
- Auch `UnaryOperator<T>`, `BiFunction<T, U, R>` unterstützen Komposition

**Weiterführende Links:**
- [Oracle Java Documentation - Function](https://docs.oracle.com/javase/8/docs/api/java/util/function/Function.html)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
double_val(x) = x * 2
increment(x) = x + 1

# ∘ (Unicode) komponiert rechts nach links
double_then_increment = increment ∘ double_val
double_then_increment(5)  # 11

# Mehrfache Komposition
transform = string ∘ increment ∘ double_val
transform(5)  # "11"
```

**Besonderheiten:**
- `∘` (eingegeben als `\circ` + Tab) ist der native Kompositionsoperator
- Komponiert rechts nach links
- Seit Julia 0.6 verfügbar
- Der Pipe-Operator `|>` bietet die umgekehrte Richtung für Wert-Piping

**Weiterführende Links:**
- [Julia Documentation - Function Composition](https://docs.julialang.org/en/v1/manual/functions/#Function-composition-and-piping)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
val doubleVal: (Int) -> Int = { x -> x * 2 }
val increment: (Int) -> Int = { x -> x + 1 }

// Manuelle Komposition
val doubleThenIncrement: (Int) -> Int = { x -> increment(doubleVal(x)) }
doubleThenIncrement(5)  // 11

// Generische Kompositions-Erweiterungsfunktion
fun <A, B, C> ((B) -> C).compose(other: (A) -> B): (A) -> C =
    { a -> this(other(a)) }

val composed = increment.compose(doubleVal)
composed(5)  // 11
```

**Besonderheiten:**
- Kein nativer Kompositionsoperator
- Komposition kann elegant über Extension Functions realisiert werden
- Funktionstypen sind First-Class und unterstützen Variablen-Zuweisung

**Weiterführende Links:**
- [Kotlin Documentation - Higher-Order Functions](https://kotlinlang.org/docs/lambdas.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Function Composition
def doubleVal (x : Int) : Int := x * 2
def increment (x : Int) : Int := x + 1

-- Kompositionsoperator ∘ (rechts nach links)
def doubleThenIncrement : Int → Int := increment ∘ doubleVal
def result : Int := doubleThenIncrement 5 -- 11
```

**Besonderheiten:**
- Lean 4 bietet einen nativen Kompositionsoperator `∘` (eingegeben als `\circ` + Tab), der Funktionen von rechts nach links komponiert
- Komposition ist ein grundlegendes Konzept in Lean 4 als funktionale Sprache
- Die Komposition ist typsicher und wird vom Compiler überprüft

**Weiterführende Links:**
- [Lean 4 Documentation - Functions](https://lean-lang.org/lean4/doc/functions.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
let double_val x = x * 2
let increment x = x + 1

(* Fun.compose seit OCaml 4.08 *)
let double_then_increment = Fun.compose increment double_val
(* double_then_increment 5 = 11 *)

(* Eigener Kompositionsoperator *)
let ( >> ) f g x = g (f x)
let transform = double_val >> increment
(* transform 5 = 11 *)
```

**Besonderheiten:**
- `Fun.compose` in der Standardbibliothek seit OCaml 4.08
- Eigene Operatoren für Komposition sind idiomatisch und weit verbreitet
- `|>` ist der Pipe-Operator (Wert-Piping, nicht Komposition)

**Weiterführende Links:**
- [OCaml Documentation - Fun Module](https://ocaml.org/api/Fun.html)

</TabItem>
<TabItem value="purescript" label="PureScript">

```haskell
doubleVal :: Int -> Int
doubleVal x = x * 2

increment :: Int -> Int
increment x = x + 1

-- <<< komponiert rechts nach links
doubleThenIncrement :: Int -> Int
doubleThenIncrement = increment <<< doubleVal
-- doubleThenIncrement 5 == 11

-- >>> komponiert links nach rechts
incrementThenDouble :: Int -> Int
incrementThenDouble = increment >>> doubleVal
-- incrementThenDouble 5 == 12
```

**Besonderheiten:**
- `<<<` komponiert rechts nach links (wie `.` in Haskell)
- `>>>` komponiert links nach rechts
- Definiert in der `Semigroupoid`-Typklasse aus `purescript-prelude`

**Weiterführende Links:**
- [PureScript Documentation - Semigroupoid](https://pursuit.purescript.org/packages/purescript-prelude/docs/Control.Semigroupoid)

</TabItem>
<TabItem value="python" label="Python">

```python
def double_val(x): return x * 2
def increment(x): return x + 1

# Manuelle Komposition mit Lambda
double_then_increment = lambda x: increment(double_val(x))
double_then_increment(5)  # 11

# Generische Kompositionsfunktion
from functools import reduce

def compose(*funcs):
    return reduce(lambda f, g: lambda x: f(g(x)), funcs)

transform = compose(str, increment, double_val)
transform(5)  # "11"
```

**Besonderheiten:**
- Kein nativer Kompositionsoperator oder eingebaute `compose`-Funktion
- `functools` enthält keine Kompositionsfunktion
- Komposition wird häufig manuell mit Lambda-Ausdrücken realisiert

**Weiterführende Links:**
- [Python Documentation - functools](https://docs.python.org/3/library/functools.html)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
(define (double-val x) (* x 2))
(define (increment x) (+ x 1))

;; compose komponiert rechts nach links
(define double-then-increment (compose increment double-val))
(double-then-increment 5)  ; 11

;; Mehrere Funktionen komponieren
(define transform (compose number->string increment double-val))
(transform 5)  ; "11"
```

**Besonderheiten:**
- `compose` ist Teil von `racket/base` und sofort verfügbar
- Komponiert beliebig viele Funktionen von rechts nach links
- `compose1` ist eine optimierte Variante für einargumentige Funktionen

**Weiterführende Links:**
- [Racket Documentation - compose](https://docs.racket-lang.org/reference/procedures.html#%28def._%28%28lib._racket%2Fprivate%2Flist..rkt%29._compose%29%29)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
double_val = ->(x) { x * 2 }
increment = ->(x) { x + 1 }

# >> komponiert links nach rechts (seit Ruby 2.6)
double_then_increment = double_val >> increment
double_then_increment.call(5)  # 11

# << komponiert rechts nach links (seit Ruby 2.6)
increment_then_double = double_val << increment
increment_then_double.call(5)  # 12
```

**Besonderheiten:**
- `Proc#>>` und `Proc#<<` seit Ruby 2.6
- `>>` komponiert links nach rechts, `<<` rechts nach links
- Auch `Method`-Objekte unterstützen `>>` und `<<`

**Weiterführende Links:**
- [Ruby Documentation - Proc#>>](https://docs.ruby-lang.org/en/master/Proc.html#method-i-3E-3E)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
val doubleVal: Int => Int = _ * 2
val increment: Int => Int = _ + 1

// andThen: links nach rechts
val doubleThenIncrement = doubleVal.andThen(increment)
doubleThenIncrement(5)  // 11

// compose: rechts nach links
val incrementThenDouble = doubleVal.compose(increment)
incrementThenDouble(5)  // 12
```

**Besonderheiten:**
- `Function1` bietet `andThen` und `compose`
- `andThen` komponiert links nach rechts
- `compose` komponiert rechts nach links
- Auch für `PartialFunction` verfügbar

**Weiterführende Links:**
- [Scala Documentation - Function1](https://www.scala-lang.org/api/current/scala/Function1.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
(define (double-val x) (* x 2))
(define (increment x) (+ x 1))

;; Manuelle Kompositionsfunktion
(define (compose f g)
  (lambda (x) (f (g x))))

(define double-then-increment (compose increment double-val))
(double-then-increment 5)  ; 11
```

**Besonderheiten:**
- Kein eingebautes `compose` im R7RS-Standard
- Trivial mit `lambda` zu implementieren
- Einige Scheme-Implementierungen (z.B. Chez Scheme, Guile) bieten `compose` als Erweiterung

**Weiterführende Links:**
- [R7RS Standard](https://r7rs.org/)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
func doubleVal(_ x: Int) -> Int { x * 2 }
func increment(_ x: Int) -> Int { x + 1 }

// Generische Kompositionsfunktion
func compose<A, B, C>(_ f: @escaping (B) -> C, _ g: @escaping (A) -> B) -> (A) -> C {
    return { x in f(g(x)) }
}

let doubleThenIncrement = compose(increment, doubleVal)
doubleThenIncrement(5)  // 11

// Eigener Kompositionsoperator
precedencegroup CompositionPrecedence {
    associativity: left
}
infix operator >>>: CompositionPrecedence
func >>> <A, B, C>(f: @escaping (A) -> B, g: @escaping (B) -> C) -> (A) -> C {
    return { x in g(f(x)) }
}

let transform = doubleVal >>> increment
transform(5)  // 11
```

**Besonderheiten:**
- Kein nativer Kompositionsoperator
- Custom Operators ermöglichen die Definition eines eigenen Kompositionsoperators
- `@escaping` ist nötig, da die Funktionen in einem Closure gespeichert werden

**Weiterführende Links:**
- [Swift Documentation - Closures](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/closures/)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```wolfram
doubleVal[x_] := x * 2
increment[x_] := x + 1

(* Composition komponiert rechts nach links *)
doubleThenIncrement = Composition[increment, doubleVal]
doubleThenIncrement[5]  (* 11 *)

(* Operator-Notation mit @* *)
doubleThenIncrement2 = increment @* doubleVal
doubleThenIncrement2[5]  (* 11 *)

(* RightComposition komponiert links nach rechts *)
incrementThenDouble = RightComposition[increment, doubleVal]
incrementThenDouble[5]  (* 12 *)
```

**Besonderheiten:**
- `Composition` und `@*` komponieren rechts nach links
- `RightComposition` und `/*` komponieren links nach rechts
- Beliebig viele Funktionen können komponiert werden
- `Identity` ist das neutrale Element der Komposition

**Weiterführende Links:**
- [Wolfram Language Documentation - Composition](https://reference.wolfram.com/language/ref/Composition.html)

</TabItem>
</Tabs>

## 7.1.16. Memoization

Memoization ist eine Optimierungstechnik, bei der die Ergebnisse von Funktionsaufrufen zwischengespeichert und bei erneuten Aufrufen mit denselben Argumenten direkt aus dem Cache zurückgegeben werden.

### Sprachen {#sprachen}

<Tabs availableTabs={['clojure', 'd', 'groovy', 'mercury', 'prolog', 'python', 'wolfram-language']} yellowTabs={['eiffel', 'perl', 'r']} orangeTabs={['haskell', 'java', 'javascript', 'kotlin', 'lua', 'ruby', 'scala', 'typescript']}>
<TabItem value="clojure" label="Clojure">

```clojure
(def fib
  (memoize
    (fn [n]
      (if (< n 2)
        n
        (+ (fib (- n 1)) (fib (- n 2)))))))

(fib 40)  ; sofort berechnet dank Memoization
```

**Besonderheiten:**
- `memoize` ist Teil von `clojure.core` und sofort verfügbar
- Wrappet eine Funktion und cached die Ergebnisse in einer internen Map
- Thread-sicher durch Verwendung von Atoms
- Der Cache wächst unbegrenzt — kein automatisches Eviction

**Weiterführende Links:**
- [Clojure Documentation - memoize](https://clojuredocs.org/clojure.core/memoize)

</TabItem>
<TabItem value="d" label="D">

```d
// Benötigt: import std.functional : memoize
int square(int n) {
    return n * n;
}

alias cachedSquare = memoize!square;
cachedSquare(5);  // 25 — Berechnung beim ersten Aufruf
cachedSquare(5);  // 25 — aus dem Cache

// Rekursive Memoization erfordert manuellen Ansatz
ulong[ulong] fibCache;

ulong fib(ulong n) {
    if (auto p = n in fibCache) return *p;
    ulong result = n < 2 ? n : fib(n - 1) + fib(n - 2);
    fibCache[n] = result;
    return result;
}

fib(40);  // sofort berechnet dank Memoization
```

**Besonderheiten:**
- `std.functional.memoize` ist ein Template, das eine memoized Version einer Funktion erstellt
- Für rekursive Funktionen: Rekursive Aufrufe nutzen nicht automatisch den Cache — manueller Ansatz mit Associative Array nötig
- Konfigurierbarer Cache-Größenlimit über Template-Parameter

**Weiterführende Links:**
- [D Language - std.functional](https://dlang.org/phobos/std_functional.html#memoize)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
-- once-Funktionen: Ergebnis wird beim ersten Aufruf berechnet und gespeichert
feature
    pi_approximation: REAL_64
        once
            Result := compute_expensive_pi
        end

    shared_config: CONFIG
        once
            create Result.make_from_file ("config.json")
        end
```

**Besonderheiten:**
- `once`-Funktionen berechnen ihr Ergebnis nur beim ersten Aufruf und cachen es
- Nur für parameterlose Funktionen — keine argumentbasierte Memoization
- Verschiedene `once`-Varianten: `once ("PROCESS")`, `once ("THREAD")`, `once ("OBJECT")`
- `once ("PROCESS")` cached für den gesamten Prozess (Standard), `once ("OBJECT")` pro Objekt

**Weiterführende Links:**
- [Eiffel Documentation - Once Routines](https://www.eiffel.org/doc/eiffel/Once_routines)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Benötigt: import groovy.transform.Memoized
@Memoized
long fib(long n) {
    if (n < 2) return n
    return fib(n - 1) + fib(n - 2)
}

fib(40)  // sofort berechnet dank Memoization
```

**Besonderheiten:**
- `@Memoized` ist eine eingebaute AST-Transformation
- Rekursive Aufrufe nutzen automatisch den Cache
- Optional: `@Memoized(maxCacheSize = 100)` begrenzt die Cache-Größe
- Auch auf Closures anwendbar mit `.memoize()`

**Weiterführende Links:**
- [Groovy Documentation - @Memoized](https://groovy-lang.org/metaprogramming.html#xform-Memoized)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Memoization über tabling (pragma memo)
% Mercury bietet eingebaute Memoization über die pragma-Direktive.

:- module fib_memo.
:- interface.
:- import_module io.
:- pred main(io::di, io::uo) is det.
:- implementation.
:- import_module int, string.

% Memoized Funktion mit pragma memo
:- func fib(int) = int.
:- pragma memo(fib/1).
fib(N) =
    ( if N < 2 then N
      else fib(N - 1) + fib(N - 2)
    ).

main(!IO) :-
    Result = fib(40),
    io.format("fib(40) = %d\n", [i(Result)], !IO).
```

**Besonderheiten:**
- Mercury bietet eingebaute Memoization über `:- pragma memo(pred_name/arity)`.
- Tabled Evaluation speichert berechnete Ergebnisse automatisch zwischen.
- Besonders nützlich für rekursive Funktionen wie Fibonacci.
- Die Memoization wird vom Compiler verwaltet und erfordert keine manuelle Cache-Implementierung.
- Funktioniert sowohl für `func` als auch für `pred` Deklarationen.

**Weiterführende Links:**
- [Mercury Language Reference - Tabling pragmas](https://www.mercurylang.org/information/doc-release/mercury_ref/Tabling-pragmas.html)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Memoization über Lazy Evaluation und indizierte Liste
fib :: Int -> Integer
fib = (map fib' [0..] !!)
  where
    fib' 0 = 0
    fib' 1 = 1
    fib' n = fib (n - 1) + fib (n - 2)

-- fib 40 — sofort berechnet dank Memoization
```

**Besonderheiten:**
- Keine eingebaute Memoization-Funktion
- Lazy Evaluation ermöglicht Memoization über indizierte Datenstrukturen (Listen, Arrays)
- Die Liste `map fib' [0..]` wird lazy erzeugt — jedes Element wird nur einmal berechnet
- Bibliotheken wie `MemoTrie` und `data-memocombinators` bieten generische Memoization

**Weiterführende Links:**
- [Haskell Wiki - Memoization](https://wiki.haskell.org/Memoization)

</TabItem>
<TabItem value="java" label="Java">

```java
private Map<Long, Long> cache = new HashMap<>();

long fib(long n) {
    if (cache.containsKey(n)) return cache.get(n);
    long result;
    if (n < 2) result = n;
    else result = fib(n - 1) + fib(n - 2);
    cache.put(n, result);
    return result;
}

fib(40);  // sofort berechnet dank Memoization
```

**Besonderheiten:**
- Kein eingebauter Memoization-Mechanismus
- `HashMap`-basierte Memoization ist das gängige Pattern
- Für Thread-Sicherheit: `ConcurrentHashMap` verwenden
- `Map.computeIfAbsent` kann bei nicht-rekursiven Funktionen verwendet werden

**Weiterführende Links:**
- [Oracle Java Documentation - HashMap](https://docs.oracle.com/javase/8/docs/api/java/util/HashMap.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
function memoize(fn) {
    const cache = new Map();
    return function(n) {
        if (cache.has(n)) return cache.get(n);
        const result = fn(n);
        cache.set(n, result);
        return result;
    };
}

const fib = memoize(n => {
    if (n < 2) return n;
    return fib(n - 1) + fib(n - 2);
});

fib(40);  // sofort berechnet dank Memoization
```

**Besonderheiten:**
- Kein eingebauter Memoization-Mechanismus
- `Map`-basierte Closures sind das gängige Pattern
- `WeakMap` kann für objektbasierte Schlüssel verwendet werden, um Memory Leaks zu vermeiden
- Bibliotheken wie Lodash bieten `_.memoize()`

**Weiterführende Links:**
- [MDN Web Docs - Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
val cache = mutableMapOf<Long, Long>()

fun fib(n: Long): Long = cache.getOrPut(n) {
    if (n < 2) n else fib(n - 1) + fib(n - 2)
}

fib(40)  // sofort berechnet dank Memoization
```

**Besonderheiten:**
- Kein eingebauter Memoization-Mechanismus
- `MutableMap.getOrPut()` ist ein elegantes Pattern für Cache-Logik
- `lazy { }` bietet Memoization für parameterlose Berechnungen
- Für Thread-Sicherheit: `ConcurrentHashMap` oder `lazy(LazyThreadSafetyMode.SYNCHRONIZED)`

**Weiterführende Links:**
- [Kotlin Documentation - getOrPut](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/get-or-put.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
local cache = {}

function fib(n)
    if cache[n] then return cache[n] end
    local result
    if n < 2 then
        result = n
    else
        result = fib(n - 1) + fib(n - 2)
    end
    cache[n] = result
    return result
end

fib(40)  -- sofort berechnet dank Memoization
```

**Besonderheiten:**
- Kein eingebauter Memoization-Mechanismus
- Table-basierte Caches sind das gängige Pattern in Lua
- Metatables können für transparentes Caching verwendet werden
- Einfache Implementierung dank Lua-Tables als universelle Datenstruktur

**Weiterführende Links:**
- [Lua Documentation - Tables](https://www.lua.org/manual/5.4/manual.html#2.1)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Benötigt: use Memoize (CPAN-Modul)
use Memoize;

sub fib {
    my ($n) = @_;
    return $n if $n < 2;
    return fib($n - 1) + fib($n - 2);
}

memoize('fib');
fib(40);  # sofort berechnet dank Memoization
```

**Besonderheiten:**
- `Memoize` ist ein weit verbreitetes CPAN-Modul (nicht im Perl-Core)
- `memoize('funktionsname')` ersetzt die Funktion durch eine gecachte Version
- Unterstützt verschiedene Cache-Backends über `HASH`-Option
- `Memoize::Expire` ermöglicht zeitbasiertes Cache-Eviction

**Weiterführende Links:**
- [CPAN - Memoize](https://metacpan.org/pod/Memoize)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Tabling (Memoization) mit :- table Direktive
:- table fib/2.

fib(0, 0).
fib(1, 1).
fib(N, Result) :-
    N > 1,
    N1 is N - 1,
    N2 is N - 2,
    fib(N1, R1),
    fib(N2, R2),
    Result is R1 + R2.

?- fib(40, Result).
%  Result = 102334155 (sofort berechnet dank Tabling)
```

**Besonderheiten:**
- `:- table predicate/arity.` aktiviert automatisches Tabling (Memoization)
- Ergebnisse werden bei erneutem Aufruf mit denselben Argumenten aus dem Cache zurückgegeben
- Tabling verhindert auch Endlosschleifen bei links-rekursiven Prädikaten
- Verfügbar in SWI-Prolog, XSB, YAP, B-Prolog und anderen Implementierungen

**Weiterführende Links:**
- [SWI-Prolog Documentation - Tabling](https://www.swi-prolog.org/pldoc/man?section=tabling)

</TabItem>
<TabItem value="python" label="Python">

```python
# @cache — unbegrenzter Cache (seit Python 3.9)
from functools import cache

@cache
def fib(n):
    if n < 2:
        return n
    return fib(n - 1) + fib(n - 2)

fib(40)  # sofort berechnet dank Memoization

# @lru_cache — mit optionalem Größenlimit (seit Python 3.2)
from functools import lru_cache

@lru_cache(maxsize=128)
def fib_limited(n):
    if n < 2:
        return n
    return fib_limited(n - 1) + fib_limited(n - 2)
```

**Besonderheiten:**
- `@cache` (seit Python 3.9) — unbegrenzter Cache, äquivalent zu `@lru_cache(maxsize=None)`
- `@lru_cache` (seit Python 3.2) — LRU-Cache mit konfigurierbarem Größenlimit
- `cache_info()` liefert Statistiken (Hits, Misses, Größe)
- `cache_clear()` leert den Cache
- Thread-sicher implementiert

**Weiterführende Links:**
- [Python Documentation - functools.cache](https://docs.python.org/3/library/functools.html#functools.cache)

</TabItem>
<TabItem value="r" label="R">

```r
# Benötigt: library(memoise)
library(memoise)

fib <- memoise(function(n) {
    if (n < 2) return(n)
    fib(n - 1) + fib(n - 2)
})

fib(40)  # sofort berechnet dank Memoization
```

**Besonderheiten:**
- `memoise` ist ein separates R-Paket (nicht in Base R)
- Rekursive Aufrufe nutzen automatisch den Cache
- Verschiedene Cache-Backends: In-Memory, Dateisystem, AWS S3
- `forget(fib)` leert den Cache einer memoisierten Funktion

**Weiterführende Links:**
- [CRAN - memoise](https://cran.r-project.org/web/packages/memoise/index.html)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
def fib(n, cache = {})
  cache[n] ||= n < 2 ? n : fib(n - 1, cache) + fib(n - 2, cache)
end

fib(40)  # sofort berechnet dank Memoization
```

**Besonderheiten:**
- Kein eingebauter Memoization-Mechanismus
- `||=` ist das idiomatische Ruby-Pattern für Lazy-Caching
- Hash als Default-Parameter ist ein gängiges Memoization-Pattern
- Für klassenbasierte Memoization: `@cache`-Instanzvariable oder das `memoizable`-Gem

**Weiterführende Links:**
- [Ruby Documentation - Hash](https://docs.ruby-lang.org/en/master/Hash.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
val cache = scala.collection.mutable.Map[Long, Long]()

def fib(n: Long): Long = cache.getOrElseUpdate(n, {
  if (n < 2) n else fib(n - 1) + fib(n - 2)
})

fib(40)  // sofort berechnet dank Memoization
```

**Besonderheiten:**
- Kein eingebauter Memoization-Mechanismus
- `mutable.Map.getOrElseUpdate` ist ein elegantes Pattern für Cache-Logik
- `lazy val` bietet Memoization für parameterlose Berechnungen
- Bibliotheken wie Scalaz und Cats bieten funktionale Memoization-Abstraktion

**Weiterführende Links:**
- [Scala Documentation - mutable.Map](https://www.scala-lang.org/api/current/scala/collection/mutable/Map.html)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
function memoize(fn) {
    const cache = new Map();
    return function(n) {
        if (cache.has(n)) return cache.get(n);
        const result = fn(n);
        cache.set(n, result);
        return result;
    };
}

const fib = memoize(n => {
    if (n < 2) return n;
    return fib(n - 1) + fib(n - 2);
});

fib(40);  // sofort berechnet dank Memoization
```

**Besonderheiten:**
- Identisches Pattern wie in JavaScript
- Kein eingebauter Memoization-Mechanismus
- `Map`-basierte Closures sind das gängige Pattern
- Bibliotheken wie Lodash bieten typisierte `_.memoize()`

**Weiterführende Links:**
- [MDN Web Docs - Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```wolfram
(* Definitions-basierte Memoization *)
fib[0] = 0;
fib[1] = 1;
fib[n_] := fib[n] = fib[n - 1] + fib[n - 2]

fib[40]  (* sofort berechnet dank Memoization *)

(* Once — Ergebnis wird einmal berechnet und gespeichert *)
expensiveResult = Once[LongComputation[]]
```

**Besonderheiten:**
- `f[n_] := f[n] = expr` ist das idiomatische Memoization-Pattern: der Ausdruck wird ausgewertet und als spezifische Regel `f[n] = result` gespeichert
- `Once[expr]` berechnet `expr` einmal und cached das Ergebnis dauerhaft
- Gespeicherte Definitionen können mit `Clear[f]` oder `DownValues` inspiziert werden
- Kein automatisches Cache-Eviction — manuelle Verwaltung nötig

**Weiterführende Links:**
- [Wolfram Language Documentation - Once](https://reference.wolfram.com/language/ref/Once.html)

</TabItem>
</Tabs>

