---
slug: /syntax-struktur/syntax-eigenschaften
title: 2.3. Syntax-Eigenschaften
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 2.3. Syntax-Eigenschaften

Eigenschaften der Syntax.

## 2.3.1. Case-Sensitivität

Unterscheidung zwischen Groß- und Kleinbuchstaben in Bezeichnern (Variablennamen, Funktionsnamen, etc.).

### Sprachen {#sprachen}

<Tabs availableTabs={['ada', 'c', 'csharp', 'cpp', 'carbon', 'clojure', 'common-lisp', 'crystal', 'd', 'dart', 'eiffel', 'elixir', 'elm', 'erlang', 'fsharp', 'fortran', 'gleam', 'go', 'groovy', 'haskell', 'haxe', 'idris', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'lua', 'matlab', 'mercury', 'mojo', 'nim', 'objective-c', 'object-pascal', 'ocaml', 'octave', 'odin', 'perl', 'php', 'prolog', 'purescript', 'python', 'r', 'racket', 'roc', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'vbnet', 'v', 'wolfram-language', 'zig']}>
<TabItem value="ada" label="Ada">

```ada
X : Integer := 10;
x : Integer := 20;  -- Fehler: x ist dasselbe wie X
```

**Besonderheiten:**
- Ada ist case-insensitiv
- `X` und `x` werden als derselbe Bezeichner behandelt

**Weiterführende Links:**
- [Ada Reference Manual - Identifiers](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-2-3.html)

</TabItem>
<TabItem value="c" label="C">

```c
int x = 10;
int X = 20;  // X ist unterschiedlich von x
```

**Besonderheiten:**
- C ist case-sensitiv
- `x` und `X` sind unterschiedliche Bezeichner

**Weiterführende Links:**
- [C Standard - Identifiers](https://en.cppreference.com/w/c/language/identifier)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
int x = 10;
int X = 20;  // X ist unterschiedlich von x
```

**Besonderheiten:**
- C# ist case-sensitiv
- `x` und `X` sind unterschiedliche Bezeichner

**Weiterführende Links:**
- [C# Documentation - Identifiers](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/lexical-structure#identifiers)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
int x = 10;
int X = 20;  // X ist unterschiedlich von x
```

**Besonderheiten:**
- C++ ist case-sensitiv
- `x` und `X` sind unterschiedliche Bezeichner

**Weiterführende Links:**
- [C++ Standard - Identifiers](https://en.cppreference.com/w/cpp/language/identifiers)

</TabItem>
<TabItem value="carbon" label="Carbon">

```carbon
var x: i32 = 10;
var X: i32 = 20;  // X ist unterschiedlich von x
```

**Besonderheiten:**
- Carbon ist case-sensitiv
- `x` und `X` sind unterschiedliche Bezeichner

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
(def x 10)
(def X 20)  ; X ist unterschiedlich von x
```

**Besonderheiten:**
- Clojure ist case-sensitiv
- `x` und `X` sind unterschiedliche Bezeichner

**Weiterführende Links:**
- [Clojure Documentation - Symbols](https://clojure.org/reference/reader#_symbols)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
(defvar x 10)
(defvar X 20)  ; ACHTUNG: überschreibt x, da Reader zu Großbuchstaben konvertiert!
;; Beide erzeugen das Symbol X

;; Case-sensitiv nur mit Escape-Zeichen
(defvar |lowercase| 10)
(defvar |LOWERCASE| 20)  ; Unterschiedlich von |lowercase|
```

**Besonderheiten:**
- Der CL-Reader konvertiert unescapte Symbolnamen standardmäßig zu Großbuchstaben
- Praktisch ist CL daher case-insensitiv: `foo`, `FOO` und `Foo` sind dasselbe Symbol
- Case-Sensitivität nur über Pipe-Escape (`|symbol|`) oder Backslash-Escape erreichbar
- Das Symbol-System selbst ist case-sensitiv, aber der Reader normalisiert

**Weiterführende Links:**
- [Common Lisp HyperSpec - Reader Algorithm](http://www.lispworks.com/documentation/HyperSpec/Body/02_d.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
x = 10
X = 20  # X ist unterschiedlich von x
```

**Besonderheiten:**
- Crystal ist case-sensitiv
- `x` und `X` sind unterschiedliche Bezeichner

**Weiterführende Links:**
- [Crystal Documentation - Syntax](https://crystal-lang.org/reference/syntax_and_semantics/)

</TabItem>
<TabItem value="d" label="D">

```d
int x = 10;
int X = 20;  // X ist unterschiedlich von x
```

**Besonderheiten:**
- D ist case-sensitiv
- `x` und `X` sind unterschiedliche Bezeichner

**Weiterführende Links:**
- [D Language Specification - Identifiers](https://dlang.org/spec/lex.html#identifier)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
int x = 10;
int X = 20;  // X ist unterschiedlich von x
```

**Besonderheiten:**
- Dart ist case-sensitiv
- `x` und `X` sind unterschiedliche Bezeichner

**Weiterführende Links:**
- [Dart Language Specification - Identifiers](https://dart.dev/guides/language/spec)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
x: INTEGER
X: INTEGER  -- Fehler: X ist dasselbe wie x
```

**Besonderheiten:**
- Eiffel ist case-insensitiv
- `x` und `X` werden als derselbe Bezeichner behandelt

**Weiterführende Links:**
- [Eiffel Language Documentation](https://www.eiffel.org/doc/eiffel/Language)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Case-Sensitivität
x = 10
x_value = 20    # Variablen beginnen mit Kleinbuchstaben
_temp = 30      # Variablen können mit _ beginnen

# Atoms sind case-sensitiv
:hello != :Hello  # true

# Module beginnen mit Großbuchstaben
# IO, String, Enum sind verschiedene Module
```

**Besonderheiten:**
- Elixir ist case-sensitiv
- Variablennamen müssen mit Kleinbuchstaben oder `_` beginnen
- Bezeichner mit Großbuchstaben sind Aliases (Modulnamen)
- Atoms sind case-sensitiv: `:hello` und `:Hello` sind verschieden

**Weiterführende Links:**
- [Elixir Documentation - Naming Conventions](https://hexdocs.pm/elixir/naming-conventions.html)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Case-Sensitivität
name = "Alice"
-- Name = "Alice"  -- Fehler: Variablen müssen mit Kleinbuchstaben beginnen

-- Großbuchstaben für Typen und Konstruktoren
type Color = Red | Green | Blue
```

**Besonderheiten:**
- Elm ist case-sensitiv
- Variablen und Funktionen müssen mit Kleinbuchstaben beginnen
- Typen, Module und Konstruktoren müssen mit Großbuchstaben beginnen
- Diese Konvention wird vom Compiler erzwungen (nicht nur Stil)

**Weiterführende Links:**
- [Elm Documentation - Syntax](https://guide.elm-lang.org/core_language.html)

</TabItem>
<TabItem value="erlang" label="Erlang">
```erlang
X = 10.         % Variable (Großbuchstabe)
hello.           % Atom (Kleinbuchstabe)
Hello = world.   % Variable Hello gebunden an Atom world
```

**Besonderheiten:**
- Erlang ist case-sensitiv
- Variablen beginnen mit Großbuchstaben oder `_`
- Atome beginnen mit Kleinbuchstaben
- `X` (Variable) und `x` (Atom) sind fundamental unterschiedliche Konzepte

**Weiterführende Links:**
- [Erlang Documentation - Data Types](https://www.erlang.org/doc/reference_manual/data_types.html)
</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
let x = 10
let X = 20  // X ist unterschiedlich von x
```

**Besonderheiten:**
- F# ist case-sensitiv
- `x` und `X` sind unterschiedliche Bezeichner

**Weiterführende Links:**
- [F# Documentation - Identifiers](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/identifiers)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
INTEGER :: x
INTEGER :: X  ! Fehler: X ist dasselbe wie x
```

**Besonderheiten:**
- Fortran ist case-insensitiv
- `x` und `X` werden als derselbe Bezeichner behandelt

**Weiterführende Links:**
- [Fortran Standard - Names](https://gcc.gnu.org/onlinedocs/gfortran/Names.html)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// Case-Sensitivität
let count = 10
let count_total = 20  // Unterschiedlich von count

// Großbuchstaben für Typen und Konstruktoren
type Color {
  Red    // Konstruktor (Großbuchstabe)
  Blue   // Konstruktor (Großbuchstabe)
}
```

**Besonderheiten:**
- Gleam ist case-sensitiv
- Variablen und Funktionen: `snake_case` (Kleinbuchstaben)
- Typen und Konstruktoren: `PascalCase` (Großbuchstaben)
- Großbuchstaben als Variablenname sind nicht erlaubt

**Weiterführende Links:**
- [Gleam Documentation](https://gleam.run/documentation/)

</TabItem>
<TabItem value="go" label="Go">

```go
x := 10
X := 20  // X ist unterschiedlich von x
```

**Besonderheiten:**
- Go ist case-sensitiv
- `x` und `X` sind unterschiedliche Bezeichner
- Großbuchstaben am Anfang machen Bezeichner öffentlich (exportiert)

**Weiterführende Links:**
- [Go Language Specification - Identifiers](https://go.dev/ref/spec#Identifiers)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
def x = 10
def X = 20  // X ist unterschiedlich von x
```

**Besonderheiten:**
- Groovy ist case-sensitiv
- `x` und `X` sind unterschiedliche Bezeichner

**Weiterführende Links:**
- [Groovy Documentation - Syntax](https://groovy-lang.org/syntax.html)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
x = 10
X = 20  -- X ist unterschiedlich von x
```

**Besonderheiten:**
- Haskell ist case-sensitiv
- `x` und `X` sind unterschiedliche Bezeichner
- Konvention: Typen beginnen mit Großbuchstaben, Werte mit Kleinbuchstaben

**Weiterführende Links:**
- [Haskell Report - Identifiers](https://www.haskell.org/onlinereport/haskell2010/haskellch2.html#x7-160002.4)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
var x = 10;
var X = 20;  // X ist unterschiedlich von x
```

**Besonderheiten:**
- Haxe ist case-sensitiv
- `x` und `X` sind unterschiedliche Bezeichner

**Weiterführende Links:**
- [Haxe Documentation - Syntax](https://haxe.org/manual/expression.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
myValue : Int
myValue = 10
myvalue : Int
myvalue = 20  -- myValue und myvalue sind unterschiedlich
```

**Besonderheiten:**
- Idris ist case-sensitiv
- Bezeichner mit Großbuchstaben sind für Typen und Konstruktoren reserviert
- Variablennamen müssen mit Kleinbuchstaben beginnen

**Weiterführende Links:**
- [Idris 2 Documentation](https://idris2.readthedocs.io/en/latest/tutorial/starting.html)

</TabItem>
<TabItem value="java" label="Java">

```java
int x = 10;
int X = 20;  // X ist unterschiedlich von x
```

**Besonderheiten:**
- Java ist case-sensitiv
- `x` und `X` sind unterschiedliche Bezeichner

**Weiterführende Links:**
- [Java Language Specification - Identifiers](https://docs.oracle.com/javase/specs/jls/se17/html/jls-3.html#jls-3.8)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
let x = 10;
let X = 20;  // X ist unterschiedlich von x
```

**Besonderheiten:**
- JavaScript ist case-sensitiv
- `x` und `X` sind unterschiedliche Bezeichner

**Weiterführende Links:**
- [MDN Web Docs - Identifiers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#variables)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
x = 10
X = 20  # X ist unterschiedlich von x
```

**Besonderheiten:**
- Julia ist case-sensitiv
- `x` und `X` sind unterschiedliche Bezeichner

**Weiterführende Links:**
- [Julia Documentation - Variables](https://docs.julialang.org/en/v1/manual/variables/)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
val x = 10
val X = 20  // X ist unterschiedlich von x
```

**Besonderheiten:**
- Koka ist case-sensitiv
- `x` und `X` sind unterschiedliche Bezeichner
- Konvention: Typen und Konstruktoren beginnen mit Großbuchstaben, Werte mit Kleinbuchstaben

**Weiterführende Links:**
- [Koka Language Documentation](https://koka-lang.github.io/koka/doc/book.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
val x = 10
val X = 20  // X ist unterschiedlich von x
```

**Besonderheiten:**
- Kotlin ist case-sensitiv
- `x` und `X` sind unterschiedliche Bezeichner

**Weiterführende Links:**
- [Kotlin Documentation - Identifiers](https://kotlinlang.org/docs/grammar.html#identifier)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```haskell
def x := 10
def X := 20  -- X ist unterschiedlich von x
```

**Besonderheiten:**
- Lean 4 ist case-sensitiv
- `x` und `X` sind unterschiedliche Bezeichner
- Konvention: Typen und Namespaces beginnen mit Großbuchstaben, Werte mit Kleinbuchstaben

**Weiterführende Links:**
- [Lean 4 Documentation](https://lean-lang.org/lean4/doc/)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
x = 10
X = 20  -- X ist unterschiedlich von x
```

**Besonderheiten:**
- Lua ist case-sensitiv
- `x` und `X` sind unterschiedliche Bezeichner

**Weiterführende Links:**
- [Lua Documentation - Identifiers](https://www.lua.org/manual/5.4/manual.html#3.1)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
x = 10;
X = 20;  % X ist eine separate Variable (nicht dasselbe wie x)
disp(x); % 10
disp(X); % 20
```

**Besonderheiten:**
- MATLAB ist case-sensitiv
- `x` und `X` sind unterschiedliche Variablen
- Funktionsnamen sind ebenfalls case-sensitiv

**Weiterführende Links:**
- [MATLAB Documentation - Variable Names](https://www.mathworks.com/help/matlab/matlab_prog/variable-names.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Variablen beginnen mit Großbuchstaben oder _
X = 10.
Name = "Alice".
_Temp = 42.

% Atome beginnen mit Kleinbuchstaben
% hello und Hello sind fundamental unterschiedliche Konzepte
```

**Besonderheiten:**
- Mercury ist case-sensitiv
- Variablen beginnen mit Großbuchstaben oder `_`
- Atome und Funktoren beginnen mit Kleinbuchstaben
- `X` (Variable) und `x` (Atom) sind fundamental unterschiedliche Konzepte (wie in Prolog)

**Weiterführende Links:**
- [Mercury Language Reference - Syntax](https://www.mercurylang.org/information/doc-release/mercury_ref/Syntax.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
x = 10
X = 20  # X ist unterschiedlich von x
```

**Besonderheiten:**
- Mojo ist case-sensitiv
- `x` und `X` sind unterschiedliche Bezeichner

**Weiterführende Links:**
- [Mojo Documentation](https://docs.modular.com/mojo/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
var x = 10
var X = 20  # X ist unterschiedlich von x
```

**Besonderheiten:**
- Nim ist case-sensitiv, aber underscore-insensitiv
- `x` und `X` sind unterschiedliche Bezeichner
- `my_var` und `myVar` werden als derselbe Bezeichner behandelt

**Weiterführende Links:**
- [Nim Documentation - Identifiers](https://nim-lang.org/docs/manual.html#lexical-analysis-identifiers)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
int x = 10;
int X = 20;  // X ist unterschiedlich von x
```

**Besonderheiten:**
- Objective-C ist case-sensitiv
- `x` und `X` sind unterschiedliche Bezeichner

**Weiterführende Links:**
- [Objective-C Documentation](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
var
  x: Integer;
  X: Integer;  // Fehler: X ist dasselbe wie x
```

**Besonderheiten:**
- Object Pascal ist case-insensitiv
- `x` und `X` werden als derselbe Bezeichner behandelt

**Weiterführende Links:**
- [Delphi Documentation - Identifiers](https://docwiki.embarcadero.com/RADStudio/Alexandria/en/Identifiers)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
let x = 10
let X = 20  (* X ist unterschiedlich von x *)
```

**Besonderheiten:**
- OCaml ist case-sensitiv
- `x` und `X` sind unterschiedliche Bezeichner

**Weiterführende Links:**
- [OCaml Documentation - Identifiers](https://v2.ocaml.org/manual/lex.html#identifiers)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
x = 10;
X = 20;  % X ist unterschiedlich von x
```

**Besonderheiten:**
- Octave ist case-sensitiv
- `x` und `X` sind unterschiedliche Bezeichner

**Weiterführende Links:**
- [GNU Octave Documentation - Variables](https://octave.org/doc/v8.1.0/Variables.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
x: i32 : 10
X: i32 : 20  // X ist unterschiedlich von x
```

**Besonderheiten:**
- Odin ist case-sensitiv
- `x` und `X` sind unterschiedliche Bezeichner

**Weiterführende Links:**
- [Odin Documentation - Identifiers](https://odin-lang.org/docs/overview/#identifiers)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
my $x = 10;
my $X = 20;  # X ist unterschiedlich von x
```

**Besonderheiten:**
- Perl ist case-sensitiv
- `x` und `X` sind unterschiedliche Bezeichner

**Weiterführende Links:**
- [Perl Documentation - Variables](https://perldoc.perl.org/perlvar)

</TabItem>
<TabItem value="php" label="PHP">

```php
$x = 10;
$X = 20;  // X ist unterschiedlich von x
```

**Besonderheiten:**
- PHP ist case-sensitiv für Variablen
- `x` und `X` sind unterschiedliche Bezeichner
- Funktionen und Klassen sind case-insensitiv

**Weiterführende Links:**
- [PHP Documentation - Variables](https://www.php.net/manual/en/language.variables.basics.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Variablen beginnen mit Großbuchstaben oder _
X = 10.
Name = "Alice".
_temp = 42.

% Atome beginnen mit Kleinbuchstaben
hello.
parent(tom, bob).
```

**Besonderheiten:**
- Prolog ist case-sensitiv
- Variablen beginnen mit Großbuchstaben oder `_`
- Atome beginnen mit Kleinbuchstaben
- `X` (Variable) und `x` (Atom) sind fundamental unterschiedliche Konzepte

**Weiterführende Links:**
- [SWI-Prolog Documentation - Syntax](https://www.swi-prolog.org/pldoc/man?section=syntax)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
x = 10
X = 20  -- X ist unterschiedlich von x
```

**Besonderheiten:**
- PureScript ist case-sensitiv
- `x` und `X` sind unterschiedliche Bezeichner

**Weiterführende Links:**
- [PureScript Documentation](https://www.purescript.org/documentation/)

</TabItem>
<TabItem value="python" label="Python">

```python
x = 10
X = 20  # X ist unterschiedlich von x
```

**Besonderheiten:**
- Python ist case-sensitiv
- `x` und `X` sind unterschiedliche Bezeichner

**Weiterführende Links:**
- [Python Documentation - Identifiers](https://docs.python.org/3/reference/lexical_analysis.html#identifiers)

</TabItem>
<TabItem value="r" label="R">

```r
x <- 10
X <- 20  # X ist unterschiedlich von x
```

**Besonderheiten:**
- R ist case-sensitiv
- `x` und `X` sind unterschiedliche Bezeichner

**Weiterführende Links:**
- [R Documentation - Objects](https://cran.r-project.org/doc/manuals/r-release/R-lang.html#Objects)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
(define x 10)
(define X 20)  ; X ist unterschiedlich von x
```

**Besonderheiten:**
- Racket ist case-sensitiv
- `x` und `X` sind unterschiedliche Bezeichner

**Weiterführende Links:**
- [Racket Documentation - Identifiers](https://docs.racket-lang.org/reference/syntax.html#%28part._.Identifiers%29)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
x = 10
X = 20  -- X ist unterschiedlich von x
```

**Besonderheiten:**
- Roc ist case-sensitiv
- `x` und `X` sind unterschiedliche Bezeichner

**Weiterführende Links:**
- [Roc Documentation](https://www.roc-lang.org/)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
x = 10
X = 20  # X ist unterschiedlich von x
```

**Besonderheiten:**
- Ruby ist case-sensitiv
- `x` und `X` sind unterschiedliche Bezeichner
- Konvention: Konstanten beginnen mit Großbuchstaben

**Weiterführende Links:**
- [Ruby Documentation - Variables](https://docs.ruby-lang.org/en/master/syntax/variables_rdoc.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
let x = 10;
let X = 20;  // X ist unterschiedlich von x
```

**Besonderheiten:**
- Rust ist case-sensitiv
- `x` und `X` sind unterschiedliche Bezeichner
- Konvention: Typen beginnen mit Großbuchstaben

**Weiterführende Links:**
- [Rust Book - Variables](https://doc.rust-lang.org/book/ch03-01-variables-and-mutability.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
val x = 10
val X = 20  // X ist unterschiedlich von x
```

**Besonderheiten:**
- Scala ist case-sensitiv
- `x` und `X` sind unterschiedliche Bezeichner

**Weiterführende Links:**
- [Scala Documentation - Identifiers](https://docs.scala-lang.org/tour/basics.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
(define x 10)
(define X 20)  ; X ist unterschiedlich von x
```

**Besonderheiten:**
- Scheme ist case-sensitiv
- `x` und `X` sind unterschiedliche Bezeichner

**Weiterführende Links:**
- [Scheme R7RS - Identifiers](https://small.r7rs.org/wiki/Identifiers/)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
let x = 10
let X = 20  // X ist unterschiedlich von x
```

**Besonderheiten:**
- Swift ist case-sensitiv
- `x` und `X` sind unterschiedliche Bezeichner

**Weiterführende Links:**
- [Swift Documentation - Identifiers](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/lexicalstructure/#Identifiers)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
let x = 10;
let X = 20;  // X ist unterschiedlich von x
```

**Besonderheiten:**
- TypeScript ist case-sensitiv
- `x` und `X` sind unterschiedliche Bezeichner

**Weiterführende Links:**
- [TypeScript Handbook - Basic Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
Dim x As Integer = 10
Dim X As Integer = 20  ' Fehler: X ist dasselbe wie x
```

**Besonderheiten:**
- VB.NET ist case-insensitiv
- `x` und `X` werden als derselbe Bezeichner behandelt

**Weiterführende Links:**
- [VB.NET Documentation - Declared Element Names](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/declared-elements/declared-element-names)

</TabItem>
<TabItem value="v" label="V">

```v
x := 10
X := 20  // X ist unterschiedlich von x
```

**Besonderheiten:**
- V ist case-sensitiv
- `x` und `X` sind unterschiedliche Bezeichner

**Weiterführende Links:**
- [V Documentation - Variables](https://github.com/vlang/v/blob/master/doc/docs.md#variables)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
x = 10
X = 20  (* X ist unterschiedlich von x *)
```

**Besonderheiten:**
- Wolfram Language ist case-sensitiv
- `x` und `X` sind unterschiedliche Bezeichner

**Weiterführende Links:**
- [Wolfram Language Documentation - Symbols](https://reference.wolfram.com/language/guide/Symbols.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
const x: i32 = 10;
const X: i32 = 20;  // X ist unterschiedlich von x
```

**Besonderheiten:**
- Zig ist case-sensitiv
- `x` und `X` sind unterschiedliche Bezeichner

**Weiterführende Links:**
- [Zig Documentation - Identifiers](https://ziglang.org/documentation/master/#Identifiers)

</TabItem>
</Tabs>


## 2.3.2. Semantisch relevante Indentation

Einrückung (Indentation) ist Teil der Syntax und bestimmt die Block-Struktur des Codes.

### Sprachen {#sprachen}

<Tabs availableTabs={['haskell', 'idris', 'koka', 'lean4', 'nim', 'python', 'roc', 'scala']}>
<TabItem value="haskell" label="Haskell">

```haskell
example = do
  let x = 10
  if x > 5
    then putStrLn "x ist größer als 5"
    else return ()
```

**Besonderheiten:**
- Einrückung ist semantisch relevant in `do`-Blöcken
- Layout-Regel: Code auf derselben Einrückungsebene gehört zum selben Block

**Weiterführende Links:**
- [Haskell Report - Layout](https://www.haskell.org/onlinereport/haskell2010/haskellch2.html#x7-170002.7)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
fun example()
  val x = 10
  if x > 5 then
    println("x ist größer als 5")
```

**Besonderheiten:**
- Koka verwendet Layout-Regeln ähnlich wie Haskell (off-side rule)
- Einrückung bestimmt die Block-Struktur
- Geschweifte Klammern und Semikolons können alternativ verwendet werden

**Weiterführende Links:**
- [Koka Language Documentation - Basics](https://koka-lang.github.io/koka/doc/book.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```haskell
-- Indentation bestimmt die Block-Struktur
def example : IO Unit := do
  let x := 10
  if x > 5 then
    IO.println "x ist größer als 5"
  else
    pure ()
```

**Besonderheiten:**
- Einrückung ist semantisch relevant in `do`-Blöcken, `where`-Klauseln, `let`- und `match`-Ausdrücken
- Layout-Regel: Code auf derselben Einrückungsebene gehört zum selben Block (off-side rule wie Haskell)

**Weiterführende Links:**
- [Lean 4 Documentation](https://lean-lang.org/lean4/doc/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
proc example() =
  var x = 10
  if x > 5:
    echo "x ist größer als 5"
```

**Besonderheiten:**
- Einrückung ist semantisch relevant
- Bestimmt die Block-Struktur

**Weiterführende Links:**
- [Nim Documentation - Indentation](https://nim-lang.org/docs/manual.html#lexical-analysis-indentation)

</TabItem>
<TabItem value="python" label="Python">

```python
def example():
    x = 10
    if x > 5:
        print("x ist größer als 5")
```

**Besonderheiten:**
- Einrückung ist semantisch relevant und Teil der Syntax
- Bestimmt die Block-Struktur
- Typischerweise 4 Leerzeichen oder 1 Tab

**Weiterführende Links:**
- [Python Documentation - Indentation](https://docs.python.org/3/reference/lexical_analysis.html#indentation)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Indentation bestimmt Zugehörigkeit
add : Int -> Int -> Int
add a b = a + b  -- Eingerückt = gehört zur Definition

-- where-Block durch Indentation
example : Int -> Int
example n = result
  where
    result : Int
    result = n * 2 + offset
    offset : Int
    offset = 10
```

**Besonderheiten:**
- Indentation definiert Code-Blöcke (off-side rule wie Haskell)
- `where`, `let`, `do` und `case` nutzen Indentation
- Alternativ: geschweifte Klammern `{ }` und Semikolons `;`

**Weiterführende Links:**
- [Idris 2 Documentation](https://idris2.readthedocs.io/en/latest/tutorial/starting.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Semantisch relevante Indentation
result =
    x = 10
    y = 20
    x + y
```

**Besonderheiten:**
- Indentation ist syntaktisch relevant
- Bestimmt die Zugehörigkeit von Ausdrücken zu Blöcken

**Weiterführende Links:**
- [Roc Documentation](https://www.roc-lang.org/tutorial)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Semantisch relevante Indentation (seit Scala 3)
val result =
    if true then
        val x = 10
        x * 2
    else
        val y = 5
        y * 3

// Match mit Einrückung
val description = result match
    case n if n > 10 => "Groß"
    case n if n > 0 => "Klein"
    case _ => "Null oder negativ"
```

**Besonderheiten:**
- Einrückung definiert Blockgrenzen (wie in Python/Haskell)
- Optional: Geschweifte Klammern werden weiterhin unterstützt
- `then` statt geschweifter Klammern nach `if`
- `do` statt geschweifter Klammern nach `while`/`for`
- Seit Scala 3.0 verfügbar

**Weiterführende Links:**
- [Scala 3 Documentation - Indentation](https://docs.scala-lang.org/scala3/reference/other-new-features/indentation.html)

</TabItem>
</Tabs>


## 2.3.3. Expression vs. Statement Syntax

Unterscheidung zwischen Expressions (Ausdrücken, die Werte zurückgeben) und Statements (Anweisungen, die Aktionen ausführen).

### Sprachen {#sprachen}

<Tabs availableTabs={['c', 'clojure', 'common-lisp', 'cpp', 'csharp', 'elm', 'gleam', 'go', 'idris', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'mercury', 'nim', 'prolog', 'python', 'racket', 'roc', 'rust', 'scala', 'swift', 'typescript', 'wolfram-language']}>
<TabItem value="c" label="C">

```c
int x = 10;
if (x > 5) {  // if ist ein Statement
    printf("x ist größer als 5\n");
}
int y = x > 5 ? 10 : 20;  // Ternary ist eine Expression
```

**Besonderheiten:**
- C unterscheidet zwischen Expressions und Statements
- `if` ist ein Statement, nicht eine Expression
- Ternary-Operator `?:` ist eine Expression

**Weiterführende Links:**
- [C Standard - Statements](https://en.cppreference.com/w/c/language/statements)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
int x = 10;
if (x > 5) {  // if ist ein Statement
    Console.WriteLine("x ist größer als 5");
}
int y = x > 5 ? 10 : 20;  // Ternary ist eine Expression
```

**Besonderheiten:**
- C# unterscheidet zwischen Expressions und Statements
- `if` ist ein Statement, nicht eine Expression
- Ternary-Operator `?:` ist eine Expression

**Weiterführende Links:**
- [C# Documentation - Statements](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/statements/)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
int x = 10;
if (x > 5) {  // if ist ein Statement
    std::cout << "x ist größer als 5" << std::endl;
}
int y = x > 5 ? 10 : 20;  // Ternary ist eine Expression
```

**Besonderheiten:**
- C++ unterscheidet zwischen Expressions und Statements
- `if` ist ein Statement, nicht eine Expression
- Ternary-Operator `?:` ist eine Expression

**Weiterführende Links:**
- [C++ Standard - Statements](https://en.cppreference.com/w/cpp/language/statements)

</TabItem>
<TabItem value="go" label="Go">

```go
x := 10
if x > 5 {  // if ist ein Statement
    fmt.Println("x ist größer als 5")
}
y := map[bool]int{true: 10, false: 20}[x > 5]  // Workaround für Expression
```

**Besonderheiten:**
- Go unterscheidet zwischen Expressions und Statements
- `if` ist ein Statement, nicht eine Expression
- Kein Ternary-Operator, aber Map-Literale können als Workaround verwendet werden

**Weiterführende Links:**
- [Go Language Specification - Statements](https://go.dev/ref/spec#Statements)

</TabItem>
<TabItem value="java" label="Java">

```java
int x = 10;
if (x > 5) {  // if ist ein Statement
    System.out.println("x ist größer als 5");
}
int y = x > 5 ? 10 : 20;  // Ternary ist eine Expression
```

**Besonderheiten:**
- Java unterscheidet zwischen Expressions und Statements
- `if` ist ein Statement, nicht eine Expression
- Ternary-Operator `?:` ist eine Expression

**Weiterführende Links:**
- [Java Language Specification - Statements](https://docs.oracle.com/javase/specs/jls/se17/html/jls-14.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
let x = 10;
if (x > 5) {  // if ist ein Statement
    console.log("x ist größer als 5");
}
let y = x > 5 ? 10 : 20;  // Ternary ist eine Expression
```

**Besonderheiten:**
- JavaScript unterscheidet zwischen Expressions und Statements
- `if` ist ein Statement, nicht eine Expression
- Ternary-Operator `?:` ist eine Expression

**Weiterführende Links:**
- [MDN Web Docs - Statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
val x = 10
val result = if x > 5 then "x ist größer als 5"
             else "x ist nicht größer als 5"

// match ist ein Ausdruck
val label = match x
  0 -> "Null"
  _ -> "Andere Zahl"
```

**Besonderheiten:**
- Koka ist vollständig expression-basiert
- `if`, `match`, `val`, `fn` sind Ausdrücke, die Werte zurückgeben
- Der letzte Ausdruck in einem Block ist der Rückgabewert

**Weiterführende Links:**
- [Koka Language Documentation - Basics](https://koka-lang.github.io/koka/doc/book.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
val x = 10
val result = if (x > 5) {  // if ist eine Expression
    "x ist größer als 5"
} else {
    "x ist nicht größer als 5"
}
```

**Besonderheiten:**
- Kotlin behandelt `if` als Expression, wenn ein Wert zurückgegeben wird
- `if` kann sowohl Statement als auch Expression sein

**Weiterführende Links:**
- [Kotlin Documentation - Control Flow](https://kotlinlang.org/docs/control-flow.html#if-expression)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```haskell
-- Alles ist ein Ausdruck
def result : String :=
  if True then "Ja" else "Nein"

-- match ist ein Ausdruck
def describe (n : Nat) : String :=
  match n with
  | 0 => "Null"
  | _ => "Andere Zahl"

-- let ist ein Ausdruck
def computed : Nat :=
  let x := 10
  let y := 20
  x + y
```

**Besonderheiten:**
- Lean 4 ist vollständig expression-basiert
- `if/then/else`, `match`, `let` sind Ausdrücke, die Werte zurückgeben
- Der letzte Ausdruck in einem Block ist der Rückgabewert
- Keine Unterscheidung zwischen Statements und Expressions

**Weiterführende Links:**
- [Lean 4 Documentation](https://lean-lang.org/lean4/doc/)

</TabItem>
<TabItem value="python" label="Python">

```python
x = 10
if x > 5:  # if ist ein Statement
    print("x ist größer als 5")
y = 10 if x > 5 else 20  # Ternary ist eine Expression
```

**Besonderheiten:**
- Python unterscheidet zwischen Expressions und Statements
- `if` ist ein Statement, nicht eine Expression
- Ternary-Expression `x if condition else y` ist eine Expression

**Weiterführende Links:**
- [Python Documentation - Expressions](https://docs.python.org/3/reference/expressions.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
let x = 10;
let result = if x > 5 {  // if ist eine Expression
    "x ist größer als 5"
} else {
    "x ist nicht größer als 5"
};
```

**Besonderheiten:**
- Rust behandelt `if` als Expression
- Alle Kontrollstrukturen können Expressions sein

**Weiterführende Links:**
- [Rust Book - Control Flow](https://doc.rust-lang.org/book/ch03-05-control-flow.html#if-expressions)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
val x = 10
val result = if (x > 5) {  // if ist eine Expression
    "x ist größer als 5"
} else {
    "x ist nicht größer als 5"
}
```

**Besonderheiten:**
- Scala behandelt `if` als Expression
- Fast alles ist eine Expression in Scala

**Weiterführende Links:**
- [Scala Documentation - Expressions](https://docs.scala-lang.org/tour/expressions.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
let x = 10
let result = if x > 5 {  // if ist eine Expression (seit Swift 5.9)
    "x ist größer als 5"
} else {
    "x ist nicht größer als 5"
}
```

**Besonderheiten:**
- Swift unterstützt `if` als Expression seit Swift 5.9
- Vorher war `if` nur ein Statement

**Weiterführende Links:**
- [Swift Documentation - Control Flow](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/controlflow/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
let x = 10;
if (x > 5) {  // if ist ein Statement
    console.log("x ist größer als 5");
}
let y = x > 5 ? 10 : 20;  // Ternary ist eine Expression
```

**Besonderheiten:**
- TypeScript unterscheidet zwischen Expressions und Statements
- `if` ist ein Statement, nicht eine Expression
- Ternary-Operator `?:` ist eine Expression

**Weiterführende Links:**
- [TypeScript Handbook - Control Flow](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Alles ist ein Ausdruck mit Rückgabewert
(def result
  (if (> 5 3)
    "größer"
    "kleiner"))  ; "größer"

;; let ist ein Ausdruck
(def value
  (let [x 10
        y 20]
    (+ x y)))  ; 30

;; do gibt den letzten Ausdruck zurück
(def side-effect-result
  (do
    (println "Nebeneffekt")
    42))  ; 42
```

**Besonderheiten:**
- Clojure hat keine Statements, alles ist ein Ausdruck
- `if`, `let`, `do`, `cond` geben alle einen Wert zurück
- Der letzte Ausdruck in einem Block ist der Rückgabewert
- Kein explizites `return` nötig

**Weiterführende Links:**
- [Clojure Documentation - Evaluation](https://clojure.org/reference/evaluation)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Alles ist ein Ausdruck
(defvar result
  (if (> 3 2)
      "größer"
      "kleiner"))

;; let gibt den letzten Ausdruck zurück
(defvar x (let ((a 10) (b 20))
            (+ a b)))  ; 30

;; progn gruppiert Ausdrücke, gibt den letzten zurück
(defvar y (progn
            (format t "Seiteneffekt~%")
            42))  ; 42
```

**Besonderheiten:**
- Alles in Common Lisp ist ein Ausdruck (expression-based)
- Kein Unterschied zwischen Expressions und Statements
- Jeder Ausdruck hat einen Rückgabewert
- `progn` entspricht einem Block, der den letzten Wert zurückgibt

**Weiterführende Links:**
- [Common Lisp HyperSpec - Evaluation](http://www.lispworks.com/documentation/HyperSpec/Body/03_a.htm)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Alles ist ein Ausdruck
result =
    if True then "ja" else "nein"  -- if ist ein Ausdruck

-- case ist ein Ausdruck
description =
    case 42 of
        0 -> "Null"
        _ -> "Andere Zahl"

-- let ist ein Ausdruck
computed =
    let
        x = 10
        y = 20
    in
    x + y
```

**Besonderheiten:**
- Elm ist vollständig expression-basiert (keine Statements)
- `if`, `case`, `let` sind Ausdrücke, die Werte zurückgeben
- Kein `return`-Keyword nötig (letzter Ausdruck ist der Rückgabewert)
- Kein Semikolon oder Statement-Terminator

**Weiterführende Links:**
- [Elm Documentation - Core Language](https://guide.elm-lang.org/core_language.html)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// Alles ist ein Ausdruck
let result = case True {
  True -> "Ja"
  False -> "Nein"
}

// Funktionskörper gibt letzten Ausdruck zurück
pub fn max(a: Int, b: Int) -> Int {
  case a > b {
    True -> a
    False -> b
  }
}
```

**Besonderheiten:**
- Gleam ist vollständig Expression-basiert
- `case` gibt einen Wert zurück
- Kein `return`-Keyword nötig, letzter Ausdruck wird zurückgegeben

**Weiterführende Links:**
- [Gleam Documentation](https://gleam.run/documentation/)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Alles ist ein Ausdruck
result : String
result = if True then "Ja" else "Nein"

-- case ist ein Ausdruck
value : Int
value = case Just 42 of
    Just n => n
    Nothing => 0

-- let ist ein Ausdruck
computed : Int
computed = let x = 10 in x * 2
```

**Besonderheiten:**
- Idris ist vollständig expression-based
- `if`, `case`, `let` sind Ausdrücke, die Werte zurückgeben
- Keine Unterscheidung zwischen Statements und Expressions

**Weiterführende Links:**
- [Idris 2 Documentation - Types and Functions](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# if als Ausdruck
x = 10
result = if x > 0
    "positiv"
else
    "nicht positiv"
end

# begin-Block als Ausdruck
value = begin
    a = 1
    b = 2
    a + b  # Letzter Ausdruck ist der Rückgabewert
end

# Ternärer Operator
label = x > 0 ? "ja" : "nein"
```

**Besonderheiten:**
- `if`, `begin`, `try` und andere Konstrukte sind Ausdrücke mit Rückgabewert
- Der letzte Ausdruck in einem Block ist der Rückgabewert
- Funktionen geben implizit den letzten Ausdruck zurück
- Zuweisungen (`=`) sind ebenfalls Ausdrücke

**Weiterführende Links:**
- [Julia Documentation - Control Flow](https://docs.julialang.org/en/v1/manual/control-flow/)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Funktionen sind Ausdrücke mit Rückgabewert
:- func classify(int) = string.
classify(X) =
    ( if X > 5 then "x ist größer als 5"
      else "x ist nicht größer als 5" ).

% if-then-else als Ausdruck in Funktionen
:- func abs_value(int) = int.
abs_value(X) = ( if X >= 0 then X else -X ).

% Prädikate verwenden Goals
:- pred example(io::di, io::uo) is det.
example(!IO) :-
    X = 10,
    ( if X > 5 then
        io.write_string("x ist größer als 5\n", !IO)
    else
        io.write_string("x ist nicht größer als 5\n", !IO)
    ).
```

**Besonderheiten:**
- Mercury unterscheidet zwischen Funktionen (Ausdrücke mit Rückgabewert) und Prädikaten (Goals)
- `if-then-else` ist ein Ausdruck, der in Funktionen Werte zurückgibt
- Funktionskörper sind Ausdrücke: `classify(X) = (if ... then ... else ...)`
- Arithmetische Ausdrücke werden direkt ausgewertet (kein `is/2` wie in Prolog)

**Weiterführende Links:**
- [Mercury Language Reference - Functions](https://www.mercurylang.org/information/doc-release/mercury_ref/Functions.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Expression vs. Statement
# if als Expression
let max = if 10 > 5: 10 else: 5

# case als Expression
let label = case 42
  of 0..9: "einstellig"
  of 10..99: "zweistellig"
  else: "dreistellig+"

# block als Expression
let result = block:
  var x = 10
  x * 2

echo max     # 10
echo label   # "zweistellig"
echo result  # 20
```

**Besonderheiten:**
- `if`, `case`, `block`, `try` können als Expressions verwendet werden
- Der letzte Ausdruck eines Blocks ist der Rückgabewert
- Nim ist primär statement-basiert, aber viele Konstrukte sind auch als Expression nutzbar

**Weiterführende Links:**
- [Nim Documentation - Statements and Expressions](https://nim-lang.org/docs/manual.html#statements-and-expressions)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Alles in Prolog ist ein Term/Goal — keine Expression/Statement-Unterscheidung

% If-then-else als Goal-Ausdruck
classify(X, Label) :-
    (X > 0 -> Label = positive ; Label = non_positive).

% Arithmetische Ausdrücke werden mit is/2 ausgewertet
double(X, Result) :-
    Result is X * 2.

% Komma ist logisches UND, Semikolon ist logisches ODER
check(X) :-
    (X > 0, X < 100 ; X =:= 0).
```

**Besonderheiten:**
- Prolog hat keine Unterscheidung zwischen Expressions und Statements — alles ist ein Term/Goal
- `(Cond -> Then ; Else)` ist ein Goal-Ausdruck für bedingte Logik
- Arithmetische Ausdrücke werden mit `is/2` ausgewertet: `X is 3 + 4`
- Komma `,` ist logisches UND, Semikolon `;` ist logisches ODER

**Weiterführende Links:**
- [SWI-Prolog Documentation - Control](https://www.swi-prolog.org/pldoc/man?section=control)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
; Alles ist ein Ausdruck
(define result
  (if (> 5 3)
      "größer"
      "kleiner"))

; cond als Ausdruck
(define category
  (cond
    [(> 100 50) "groß"]
    [(> 50 25) "mittel"]
    [else "klein"]))

; let als Ausdruck
(define sum
  (let ([a 5] [b 10])
    (+ a b)))
```

**Besonderheiten:**
- Alles in Racket ist ein Ausdruck (Expression-based)
- Kein Unterschied zwischen Statements und Expressions
- `if`, `cond`, `let`, `begin` geben alle Werte zurück

**Weiterführende Links:**
- [Racket Documentation - Expressions](https://docs.racket-lang.org/guide/intro.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Expression-based: Alles ist ein Ausdruck
result =
    if x > 0 then
        "positiv"
    else
        "nicht positiv"

value =
    when color is
        Red -> 1
        Green -> 2
        Blue -> 3
```

**Besonderheiten:**
- Alles ist ein Ausdruck (expression-based)
- Keine Statements - der letzte Ausdruck in einem Block ist der Rückgabewert
- `if/then/else` und `when/is` sind Ausdrücke

**Weiterführende Links:**
- [Roc Documentation](https://www.roc-lang.org/tutorial)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Alles ist ein Ausdruck *)
result = If[True, 42, 0]  (* If ist ein Ausdruck *)
list = Table[i^2, {i, 5}] (* Table ist ein Ausdruck *)
```

**Besonderheiten:**
- Wolfram Language ist vollständig ausdruck-basiert
- Jeder Ausdruck hat einen Wert (auch If, Do, Module, etc.)
- Keine Unterscheidung zwischen Statements und Expressions

**Weiterführende Links:**
- [Wolfram Language Documentation - Expressions](https://reference.wolfram.com/language/tutorial/Expressions.html)

</TabItem>
</Tabs>


## 2.3.4. Top-Level Statements (Statements auf Top-Level-Ebene)

Statements können direkt auf der obersten Ebene eines Programms stehen, ohne in eine Funktion oder Klasse eingebettet zu sein.

### Sprachen {#sprachen}

<Tabs availableTabs={['csharp', 'javascript', 'julia', 'nim', 'prolog', 'python', 'rust', 'swift', 'typescript', 'wolfram-language']} yellowTabs={['groovy']}>
<TabItem value="csharp" label="C#">

```csharp
// Top-Level Statements (seit C# 9.0)
using System;

Console.WriteLine("Hello, World!");
int x = 10;
if (x > 5) {
    Console.WriteLine("x ist größer als 5");
}
```

**Besonderheiten:**
- Top-Level Statements sind seit C# 9.0 verfügbar
- Nur ein File pro Projekt kann Top-Level Statements haben

**Weiterführende Links:**
- [C# Documentation - Top-Level Statements](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/programming-guide/inside-a-program/top-level-statements)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Top-Level Statements
console.log("Hello, World!");
let x = 10;
if (x > 5) {
    console.log("x ist größer als 5");
}
```

**Besonderheiten:**
- JavaScript unterstützt Top-Level Statements standardmäßig
- Code wird direkt ausgeführt, wenn das Skript geladen wird

**Weiterführende Links:**
- [MDN Web Docs - JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Top-Level Statements
println("Hello, World!")
x = 10
if x > 5
    println("x ist größer als 5")
end
```

**Besonderheiten:**
- Julia unterstützt Top-Level Statements standardmäßig
- Code wird direkt ausgeführt, wenn das Skript geladen wird

**Weiterführende Links:**
- [Julia Documentation - Introduction](https://docs.julialang.org/en/v1/manual/getting-started/)

</TabItem>
<TabItem value="python" label="Python">

```python
# Top-Level Statements
print("Hello, World!")
x = 10
if x > 5:
    print("x ist größer als 5")
```

**Besonderheiten:**
- Python unterstützt Top-Level Statements standardmäßig
- Code wird direkt ausgeführt, wenn das Skript geladen wird

**Weiterführende Links:**
- [Python Documentation - Introduction](https://docs.python.org/3/tutorial/introduction.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Rust erfordert eine main-Funktion
fn main() {
    println!("Hello, World!");
    let x = 10;
    if x > 5 {
        println!("x ist größer als 5");
    }
}
```

**Besonderheiten:**
- Rust erfordert eine `main`-Funktion
- Top-Level Statements sind nicht direkt möglich

**Weiterführende Links:**
- [Rust Book - Hello, World](https://doc.rust-lang.org/book/ch01-02-hello-world.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Top-Level Statements (in Swift Playgrounds oder Skripten)
print("Hello, World!")
let x = 10
if x > 5 {
    print("x ist größer als 5")
}
```

**Besonderheiten:**
- Swift unterstützt Top-Level Statements in Playgrounds und Skripten
- In regulären Swift-Projekten wird eine `main`-Funktion benötigt

**Weiterführende Links:**
- [Swift Documentation - The Basics](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/thebasics/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Top-Level Statements
console.log("Hello, World!");
let x = 10;
if (x > 5) {
    console.log("x ist größer als 5");
}
```

**Besonderheiten:**
- TypeScript unterstützt Top-Level Statements standardmäßig
- Code wird direkt ausgeführt, wenn das Skript geladen wird

**Weiterführende Links:**
- [TypeScript Handbook - Basic Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Top-Level Statements in Groovy Scripts
println "Hello, World!"

def x = 42
def y = x * 2

if (y > 50) {
    println "Groß"
}

// Klassen können auch auf Top-Level definiert werden
class Helper {
    static String greet(String name) { "Hallo, $name" }
}

println Helper.greet("Welt")
```

**Besonderheiten:**
- Groovy Scripts erlauben Statements auf Top-Level-Ebene (ohne Klasse/Methode)
- Scripts werden intern in eine Klasse kompiliert, die `Script` erweitert
- In `.groovy`-Dateien mit Klassen-Definition sind keine Top-Level Statements erlaubt

**Weiterführende Links:**
- [Groovy Documentation - Scripts](https://groovy-lang.org/structure.html#_scripts)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Top-Level Statements
echo "Direkt auf Top-Level ausführbar"

var x = 42
echo x

if x > 10:
  echo "x ist größer als 10"

for i in 0..2:
  echo i
```

**Besonderheiten:**
- Nim erlaubt Statements direkt auf Top-Level-Ebene
- Keine `main`-Funktion erforderlich
- Top-Level-Code wird beim Programmstart ausgeführt

**Weiterführende Links:**
- [Nim Documentation - Modules](https://nim-lang.org/docs/manual.html#modules)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Prolog-Programme bestehen aus Top-Level-Klauseln

% Fakten
parent(tom, bob).
parent(bob, ann).

% Regeln
grandparent(X, Z) :-
    parent(X, Y),
    parent(Y, Z).

% Direktive (wird beim Laden ausgeführt)
:- write('Programm geladen'), nl.
```

**Besonderheiten:**
- Prolog-Programme bestehen ausschließlich aus Top-Level-Klauseln (Fakten, Regeln, Direktiven)
- Keine `main`-Funktion oder Klassen-Wrapper nötig
- Direktiven `:- Goal.` werden beim Laden der Datei ausgeführt
- In der REPL können beliebige Abfragen direkt eingegeben werden

**Weiterführende Links:**
- [SWI-Prolog Documentation - Program](https://www.swi-prolog.org/pldoc/man?section=program)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Top-Level Statements werden direkt ausgeführt *)
x = 42
Print["Hello, World!"]
f[n_] := n^2
```

**Besonderheiten:**
- Alle Ausdrücke können auf Top-Level stehen
- Keine main-Funktion oder Programmstruktur erforderlich
- Interaktive Auswertung in Notebooks

**Weiterführende Links:**
- [Wolfram Language Documentation - Programs](https://reference.wolfram.com/language/guide/FunctionsAndPrograms.html)

</TabItem>
</Tabs>


## 2.3.5. Optional Parentheses

Klammern bei Funktionsaufrufen können optional weggelassen werden.

### Sprachen {#sprachen}

<Tabs availableTabs={['crystal', 'elixir', 'groovy', 'haskell', 'julia', 'kotlin', 'lean4', 'nim', 'ruby', 'scala', 'swift']}>
<TabItem value="crystal" label="Crystal">

```crystal
def greet(name)
  puts "Hello, #{name}"
end

greet "World"  # Klammern optional
greet("World")  # Klammern erlaubt
```

**Besonderheiten:**
- Klammern bei Funktionsaufrufen sind optional
- Empfohlen für bessere Lesbarkeit

**Weiterführende Links:**
- [Crystal Documentation - Methods](https://crystal-lang.org/reference/syntax_and_semantics/methods.html)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
def greet(name) do
  IO.puts("Hello, #{name}")
end

greet "World"  # Klammern optional
greet("World")  # Klammern erlaubt
```

**Besonderheiten:**
- Klammern bei Funktionsaufrufen sind optional
- Empfohlen für bessere Lesbarkeit

**Weiterführende Links:**
- [Elixir Documentation - Functions](https://elixir-lang.org/getting-started/modules-and-functions.html)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
greet name = putStrLn ("Hello, " ++ name)

greet "World"  -- Klammern optional
greet("World")  -- Klammern erlaubt
```

**Besonderheiten:**
- Klammern bei Funktionsaufrufen sind optional
- Funktionsaufrufe verwenden Leerzeichen statt Klammern

**Weiterführende Links:**
- [Haskell Report - Functions](https://www.haskell.org/onlinereport/haskell2010/haskellch3.html#x8-260003)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
function greet(name)
    println("Hello, $name")
end

greet "World"  # Klammern optional
greet("World")  # Klammern erlaubt
```

**Besonderheiten:**
- Klammern bei Funktionsaufrufen sind optional
- Empfohlen für bessere Lesbarkeit

**Weiterführende Links:**
- [Julia Documentation - Functions](https://docs.julialang.org/en/v1/manual/functions/)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
fun greet(name: String) {
    println("Hello, $name")
}

greet("World")  // Klammern erforderlich
```

**Besonderheiten:**
- Kotlin erfordert Klammern bei Funktionsaufrufen
- Klammern sind nicht optional

**Weiterführende Links:**
- [Kotlin Documentation - Functions](https://kotlinlang.org/docs/functions.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```haskell
def greet (name : String) : IO Unit :=
  IO.println s!"Hello, {name}"

-- Funktionsanwendung ohne Klammern (Juxtaposition)
#eval greet "World"
#eval IO.println "Hello"

-- Klammern nur für Gruppierung
#eval IO.println (toString (1 + 2))
```

**Besonderheiten:**
- Funktionsanwendung verwendet Leerzeichen statt Klammern (wie Haskell)
- Klammern werden nur für Gruppierung verwendet, nicht für Funktionsaufrufe
- Mehrere Argumente werden durch Leerzeichen getrennt: `f a b c`

**Weiterführende Links:**
- [Lean 4 Documentation](https://lean-lang.org/lean4/doc/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
proc greet(name: string) =
  echo "Hello, ", name

greet "World"  # Klammern optional
greet("World")  # Klammern erlaubt
```

**Besonderheiten:**
- Klammern bei Funktionsaufrufen sind optional
- Empfohlen für bessere Lesbarkeit

**Weiterführende Links:**
- [Nim Documentation - Procedures](https://nim-lang.org/docs/manual.html#procedures)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
def greet(name)
  puts "Hello, #{name}"
end

greet "World"  # Klammern optional
greet("World")  # Klammern erlaubt
```

**Besonderheiten:**
- Klammern bei Funktionsaufrufen sind optional
- Empfohlen für bessere Lesbarkeit

**Weiterführende Links:**
- [Ruby Documentation - Methods](https://docs.ruby-lang.org/en/master/syntax/methods_rdoc.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
def greet(name: String): Unit = {
  println(s"Hello, $name")
}

greet "World"  // Klammern optional (seit Scala 2.13)
greet("World")  // Klammern erlaubt
```

**Besonderheiten:**
- Klammern bei Funktionsaufrufen sind optional seit Scala 2.13
- Nur wenn die Funktion genau einen Parameter hat

**Weiterführende Links:**
- [Scala Documentation - Methods](https://docs.scala-lang.org/tour/methods.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
func greet(name: String) {
    print("Hello, \(name)")
}

greet("World")  // Klammern erforderlich
```

**Besonderheiten:**
- Swift erfordert Klammern bei Funktionsaufrufen
- Klammern sind nicht optional

**Weiterführende Links:**
- [Swift Documentation - Functions](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/functions/)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Optionale Klammern bei Methodenaufrufen
println "Hallo"         // statt println("Hallo")

def items = [3, 1, 2]
items.each { println it } // statt items.each({ println(it) })

// Bei mehreren Argumenten
def add(a, b) { a + b }
println add(1, 2)       // Klammern hier erforderlich (Mehrdeutigkeit)
```

**Besonderheiten:**
- Klammern bei Methodenaufrufen mit mindestens einem Argument optional
- Bei Aufrufen ohne Argumente sind Klammern erforderlich (sonst Property-Zugriff)
- Häufig in DSLs und Build-Skripten (z.B. Gradle) genutzt

**Weiterführende Links:**
- [Groovy Documentation - Optional Parentheses](https://groovy-lang.org/style-guide.html#_omitting_parentheses)

</TabItem>
</Tabs>

