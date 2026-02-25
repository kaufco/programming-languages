---
slug: /testing/testing-features
title: 18.1. Testing und Assertions
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 18.1. Testing und Assertions

Assert-Statements, eingebaute Testframeworks, Property-Based Testing.

## 18.1.1. Assert-Statements

Assert-Statements prüfen zur Laufzeit, ob eine Bedingung wahr ist, und brechen das Programm mit einer Fehlermeldung ab, falls nicht. Sie dienen der Fehlererkennung während der Entwicklung und können in vielen Sprachen im Release-Build deaktiviert werden.

### Sprachen

<Tabs availableTabs={['ada', 'c', 'cpp', 'csharp', 'clojure', 'common-lisp', 'd', 'dart', 'eiffel', 'elixir', 'erlang', 'fsharp', 'gleam', 'go', 'groovy', 'haskell', 'java', 'julia', 'kotlin', 'lua', 'matlab', 'mojo', 'nim', 'objective-c', 'object-pascal', 'ocaml', 'octave', 'odin', 'perl', 'php', 'python', 'r', 'racket', 'roc', 'ruby', 'rust', 'scala', 'swift', 'typescript', 'v', 'vbnet', 'wolfram-language', 'zig']} yellowTabs={['erlang', 'gleam', 'javascript', 'typescript']} orangeTabs={['crystal', 'fortran', 'haxe', 'mercury', 'perl', 'prolog', 'ruby', 'scheme']}>
<TabItem value="ada" label="Ada">

```ada
X : Integer := 10;

pragma Assert(X > 0);
pragma Assert(X > 0, "X muss positiv sein");

-- Alternativ mit Ada 2012 Aspects
procedure Process(Value : Integer) with
  Pre => Value > 0
is begin
  null;
end Process;
```

**Besonderheiten:**
- `pragma Assert` ist seit Ada 2005 standardisiert
- Kann über `pragma Assertion_Policy(Check)` aktiviert/deaktiviert werden
- Ada 2012 führte zusätzlich Pre-/Postconditions als Aspekte ein
- Im Release-Modus mit `pragma Assertion_Policy(Ignore)` deaktivierbar

**Weiterführende Links:**
- [Ada Reference Manual - Assertions](http://www.ada-auth.org/standards/rm12_w_tc1/html/RM-11-4-2.html)

</TabItem>
<TabItem value="c" label="C">

```c
// Benötigt: #include <assert.h>
int x = 10;

assert(x > 0);
assert(x > 0 && "x muss positiv sein");
```

**Besonderheiten:**
- `assert` ist ein Makro aus `<assert.h>`
- Wird durch `#define NDEBUG` vor dem Include komplett deaktiviert
- Gibt bei Fehlschlag Dateiname, Zeilennummer und Ausdruck aus
- Kein separater Nachrichten-Parameter – Workaround über `&&`-Trick

**Weiterführende Links:**
- [cppreference.com - assert](https://en.cppreference.com/w/c/error/assert)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Benötigt: #include <cassert>
int x = 10;

assert(x > 0);
assert(x > 0 && "x muss positiv sein");

// static_assert für Compile-Zeit (seit C++11)
static_assert(sizeof(int) >= 4, "int muss mindestens 4 Bytes haben");
```

**Besonderheiten:**
- `assert` ist ein Makro aus `<cassert>`, identisch zu C
- Wird durch `#define NDEBUG` deaktiviert
- `static_assert` (seit C++11) prüft Bedingungen zur Compile-Zeit
- `static_assert` ohne Nachricht seit C++17

**Weiterführende Links:**
- [cppreference.com - assert](https://en.cppreference.com/w/cpp/error/assert)
- [cppreference.com - static_assert](https://en.cppreference.com/w/cpp/language/static_assert)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Benötigt: using System.Diagnostics;
int x = 10;

Debug.Assert(x > 0);
Debug.Assert(x > 0, "x muss positiv sein");

// Trace.Assert ist auch im Release-Build aktiv
Trace.Assert(x > 0, "x muss positiv sein");
```

**Besonderheiten:**
- `Debug.Assert` ist nur im Debug-Build aktiv (Conditional-Attribut)
- `Trace.Assert` ist auch im Release-Build aktiv
- Zeigt bei Fehlschlag einen Dialog oder schreibt in die Trace-Ausgabe
- Kein Sprach-Keyword, sondern Methoden aus `System.Diagnostics`

**Weiterführende Links:**
- [Microsoft Docs - Debug.Assert](https://learn.microsoft.com/en-us/dotnet/api/system.diagnostics.debug.assert)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
(def x 10)

(assert (> x 0))
(assert (> x 0) "x muss positiv sein")
```

**Besonderheiten:**
- `assert` ist ein Makro in der Standardbibliothek
- Wirft `AssertionError` bei Fehlschlag
- Kann über `*assert*`-Binding global deaktiviert werden: `(set! *assert* false)`
- Optionaler zweiter Parameter für die Fehlermeldung

**Weiterführende Links:**
- [Clojure Documentation - assert](https://clojuredocs.org/clojure.core/assert)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
(defvar x 10)

(assert (> x 0))
(assert (> x 0) () "x muss positiv sein")

;; Mit korrigierbaren Platzhaltern
(assert (> x 0) (x) "x ist ~A, muss aber positiv sein" x)
```

**Besonderheiten:**
- `assert` ist ein Standard-Makro in Common Lisp
- Einzigartig: Kann den Benutzer interaktiv zur Korrektur auffordern (Restarts)
- Der zweite Parameter ist eine Liste korrigierbarer Variablen
- Kann nicht global deaktiviert werden – ist immer aktiv

**Weiterführende Links:**
- [Common Lisp HyperSpec - assert](http://www.lispworks.com/documentation/HyperSpec/Body/m_assert.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
x = 10

raise "x muss positiv sein" unless x > 0

# In Specs: assert-ähnliche Matcher
describe "Assertions" do
  it "prüft Bedingungen" do
    x.should be > 0
  end
end
```

**Besonderheiten:**
- Crystal hat kein eingebautes `assert`-Statement
- Laufzeit-Prüfungen werden über `raise` realisiert
- Das Spec-Framework bietet `should`-basierte Assertions
- Workaround: Eigene `assert`-Methode ist einfach implementierbar

**Weiterführende Links:**
- [Crystal Documentation - Spec](https://crystal-lang.org/reference/1.11/guides/testing.html)

</TabItem>
<TabItem value="d" label="D">

```d
int x = 10;

assert(x > 0);
assert(x > 0, "x muss positiv sein");

// static assert für Compile-Zeit
static assert(int.sizeof >= 4, "int muss mindestens 4 Bytes haben");
```

**Besonderheiten:**
- `assert` ist ein Sprach-Keyword (kein Makro wie in C/C++)
- Wird im Release-Build mit `-release` deaktiviert
- `static assert` prüft Bedingungen zur Compile-Zeit
- Bei Fehlschlag wird ein `AssertError` geworfen

**Weiterführende Links:**
- [D Documentation - Assert Expression](https://dlang.org/spec/expression.html#AssertExpression)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
int x = 10;

assert(x > 0);
assert(x > 0, 'x muss positiv sein');
```

**Besonderheiten:**
- `assert` ist ein Sprach-Keyword
- Nur im Debug-Modus aktiv – in Produktion (`dart compile`) deaktiviert
- Unterstützt optionalen zweiten Parameter für die Fehlermeldung
- Flutter nutzt Assertions intensiv für Widget-Validierung

**Weiterführende Links:**
- [Dart Documentation - Assert](https://dart.dev/language/error-handling#assert)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
x: INTEGER

x := 10
check x > 0 end

-- Design by Contract
process (value: INTEGER)
  require
    value_positive: value > 0
  do
    -- Verarbeitung
  ensure
    result_valid: value > 0
  end
```

**Besonderheiten:**
- `check` ist das Assert-Äquivalent in Eiffel
- Design by Contract ist ein Kernkonzept: `require` (Vorbedingung), `ensure` (Nachbedingung), `invariant` (Klasseninvariante)
- Assertions können pro Ebene aktiviert/deaktiviert werden
- Eiffel ist der Ursprung von Design by Contract

**Weiterführende Links:**
- [Eiffel Documentation - Assertions](https://www.eiffel.org/doc/eiffel/ET-_Design_by_Contract)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
x = 10

# Pattern Matching als implizite Assertion
^x = 10  # OK
# ^x = 5  # ** (MatchError)

# Explizite Prüfung
unless x > 0, do: raise "x muss positiv sein"
```

**Besonderheiten:**
- Elixir hat kein dediziertes `assert`-Statement
- Pattern Matching dient als idiomate Assertion (Fehlschlag löst `MatchError` aus)
- `assert` und `refute` existieren nur im Testframework ExUnit
- Laufzeitprüfungen werden über Guards oder `raise`/`throw` realisiert

**Weiterführende Links:**
- [Elixir Documentation - Pattern Matching](https://hexdocs.pm/elixir/pattern-matching.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
X = 10,

%% Pattern Matching als implizite Assertion
10 = X,  % OK
%% 5 = X  % ** badmatch

%% EUnit-Makro
%% Benötigt: -include_lib("eunit/include/eunit.hrl").
?assert(X > 0),
?assertEqual(10, X).
```

**Besonderheiten:**
- Erlang hat kein eingebautes `assert`-Statement
- Pattern Matching ist die idiomatische Form der Assertion
- EUnit stellt `?assert`, `?assertEqual`, `?assertMatch` als Makros bereit
- Guards in Funktionsköpfen dienen ebenfalls der Wert-Validierung

**Weiterführende Links:**
- [Erlang Documentation - EUnit](https://www.erlang.org/doc/apps/eunit/chapter.html)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
integer :: x = 10

if (x <= 0) then
  error stop "x muss positiv sein"
end if
```

**Besonderheiten:**
- Fortran hat kein eingebautes `assert`-Statement
- Workaround über `if` + `error stop` (seit Fortran 2008)
- Einige Compiler bieten proprietäre Assert-Erweiterungen
- Kein standardisierter Mechanismus zur Deaktivierung

**Weiterführende Links:**
- [Fortran Wiki - Error Handling](https://fortranwiki.org/fortran/show/Error+handling)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
let x = 10

assert (x > 0)

// System.Diagnostics für Nachrichten
System.Diagnostics.Debug.Assert(x > 0, "x muss positiv sein")
```

**Besonderheiten:**
- `assert` ist ein F#-Keyword, das nur im Debug-Build aktiv ist
- Für Nachrichten wird `System.Diagnostics.Debug.Assert` benötigt
- Wirft `System.Exception` bei Fehlschlag
- Im Release-Build wird der Ausdruck nicht ausgewertet

**Weiterführende Links:**
- [Microsoft Docs - F# Assertions](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/assertions)

</TabItem>
<TabItem value="gleam" label="Gleam">

```erlang
let x = 10

// let assert für Pattern-Matching-Assertions
let assert Ok(value) = parse("42")

// Für boolesche Assertions: should-Bibliothek
should.be_true(x > 0)
```

**Besonderheiten:**
- `let assert` ist ein Sprach-Feature für Pattern-Matching-Assertions
- Kein allgemeines `assert` für beliebige boolesche Ausdrücke
- Bei fehlgeschlagenem `let assert` wird das Programm mit einem Panic beendet
- Für boolesche Assertions werden externe Bibliotheken verwendet

**Weiterführende Links:**
- [Gleam Documentation - Let Assert](https://gleam.run/book/tour/let-assert.html)

</TabItem>
<TabItem value="go" label="Go">

```go
x := 10

if x <= 0 {
    panic("x muss positiv sein")
}
```

**Besonderheiten:**
- Go hat bewusst **kein** `assert`-Statement
- Die Go-Entwickler empfehlen explizite `if`-Prüfungen mit `panic` oder Error-Handling
- `panic` ist der idiomatische Ersatz für nicht-behebbare Fehler
- Im `testing`-Paket: `t.Fatal()`, `t.Error()` statt `assert`

**Weiterführende Links:**
- [Go FAQ - Why does Go not have assertions?](https://go.dev/doc/faq#assertions)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
def x = 10

assert x > 0
assert x > 0 : "x muss positiv sein"
```

**Besonderheiten:**
- Groovy hat **Power Assertions** – bei Fehlschlag werden alle Teilausdrücke angezeigt
- Immer aktiv (können nicht deaktiviert werden, anders als in Java)
- Fehlermeldungen zeigen den Wert jedes Teilausdrucks in einer visuellen Darstellung
- Optionale Nachricht mit `:` statt `,`

**Weiterführende Links:**
- [Groovy Documentation - Power Assertions](https://groovy-lang.org/semantics.html#_power_assertion)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Benötigt: import Control.Exception (assert)
x = 10

-- assert gibt den zweiten Wert zurück, wenn die Bedingung wahr ist
result = assert (x > 0) "Berechnung erfolgreich"

-- error als Alternative
checkedX = if x > 0 then x else error "x muss positiv sein"
```

**Besonderheiten:**
- `assert` ist eine GHC-Erweiterung aus `Control.Exception`
- Wird mit `-O` (Optimierung) oder `-fignore-asserts` deaktiviert
- Gibt bei Fehlschlag den Quellcode-Standort aus
- `assert` nimmt zwei Argumente: Bedingung und Rückgabewert

**Weiterführende Links:**
- [GHC Documentation - Assertions](https://downloads.haskell.org/~ghc/latest/docs/users_guide/exts/assert.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
var x = 10;

// Kein eingebautes assert – Workaround:
if (x <= 0) throw "x muss positiv sein";

// Mit Debug-Klasse
#if debug
if (x <= 0) throw "x muss positiv sein";
#end
```

**Besonderheiten:**
- Haxe hat kein eingebautes `assert`-Statement
- Workaround über `if` + `throw` oder bedingte Kompilierung
- `#if debug` ermöglicht Debug-only Assertions
- Externe Bibliotheken wie `buddy` bieten Assert-Funktionalität

**Weiterführende Links:**
- [Haxe Documentation - Conditional Compilation](https://haxe.org/manual/lf-condition-compilation.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Assert-Statements (seit Java 1.4)
int x = 10;

assert x > 0;
assert x > 0 : "x muss positiv sein";
```

**Besonderheiten:**
- `assert` ist ein Sprach-Keyword seit Java 1.4
- Standardmäßig **deaktiviert** – muss mit `-ea` (enable assertions) aktiviert werden
- Wirft `AssertionError` bei Fehlschlag
- Nachricht wird mit `:` statt `,` angegeben

**Weiterführende Links:**
- [Oracle Java Documentation - Assertions](https://docs.oracle.com/javase/8/docs/technotes/guides/language/assert.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
let x = 10;

// console.assert – loggt nur, wirft keinen Fehler
console.assert(x > 0, "x muss positiv sein");

// Node.js: assert-Modul (wirft Fehler)
// Benötigt: const assert = require('node:assert');
assert(x > 0);
assert.strictEqual(x, 10);
```

**Besonderheiten:**
- `console.assert()` ist im Browser verfügbar, **wirft aber keinen Fehler** – loggt nur
- Node.js bietet ein vollständiges `assert`-Modul mit `assert`, `strictEqual`, `deepEqual` etc.
- Kein Sprach-Keyword – assert ist immer eine Funktion/Methode
- Das Node.js-Modul `node:assert` wirft `AssertionError` bei Fehlschlag

**Weiterführende Links:**
- [MDN - console.assert()](https://developer.mozilla.org/en-US/docs/Web/API/console/assert_static)
- [Node.js - Assert Module](https://nodejs.org/api/assert.html)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
x = 10

@assert x > 0
@assert x > 0 "x muss positiv sein"
```

**Besonderheiten:**
- `@assert` ist ein Makro in der Standardbibliothek
- Wirft `AssertionError` bei Fehlschlag
- Kann nicht global deaktiviert werden
- Zeigt bei Fehlschlag den fehlgeschlagenen Ausdruck an

**Weiterführende Links:**
- [Julia Documentation - @assert](https://docs.julialang.org/en/v1/base/base/#Base.@assert)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
val x = 10

assert(x > 0)
assert(x > 0) { "x muss positiv sein" }

// require/check – immer aktiv
require(x > 0) { "x muss positiv sein" }  // IllegalArgumentException
check(x > 0) { "x muss positiv sein" }    // IllegalStateException
```

**Besonderheiten:**
- `assert` ist wie in Java standardmäßig deaktiviert (aktivieren mit `-ea`)
- `require` und `check` sind **immer aktiv** und idiomatischer in Kotlin
- `require` wirft `IllegalArgumentException` (für Parameter-Validierung)
- `check` wirft `IllegalStateException` (für Zustandsprüfungen)

**Weiterführende Links:**
- [Kotlin Documentation - assert](https://kotlinlang.org/api/core/kotlin-stdlib/kotlin/assert.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
local x = 10

assert(x > 0)
assert(x > 0, "x muss positiv sein")
```

**Besonderheiten:**
- `assert` ist eine eingebaute Funktion
- Wirft einen `error` bei Fehlschlag
- Kann nicht deaktiviert werden
- Gibt bei Fehlschlag die optionale Nachricht oder `"assertion failed!"` aus

**Weiterführende Links:**
- [Lua Documentation - assert](https://www.lua.org/manual/5.4/manual.html#pdf-assert)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
x = 10;

assert(x > 0);
assert(x > 0, 'x muss positiv sein');
assert(x > 0, 'myId:assertFail', 'x ist %d, muss positiv sein', x);
```

**Besonderheiten:**
- `assert` ist eine eingebaute Funktion
- Unterstützt formatierte Fehlermeldungen mit Message-ID
- Kann nicht deaktiviert werden
- Wirft einen Fehler, der mit `try/catch` abgefangen werden kann

**Weiterführende Links:**
- [MathWorks Documentation - assert](https://www.mathworks.com/help/matlab/ref/assert.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
X = 10,

% Workaround über if-then-else mit error/1
( X > 0 ->
    true
;
    error("x muss positiv sein")
).
```

**Besonderheiten:**
- Mercury hat kein eingebautes `assert`-Statement
- Workaround über if-then-else (`( Cond -> true ; error(Msg) )`)
- `error/1` aus dem `exception`-Modul bricht das Programm mit einer Fehlermeldung ab
- Mercury setzt primär auf sein starkes Typsystem und Determinismus-System für Compile-Zeit-Garantien

**Weiterführende Links:**
- [Mercury Library Reference - exception](https://mercurylang.org/information/doc-release/mercury_library/exception.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```mojo
var x = 10

debug_assert(x > 0, "x muss positiv sein")
```

**Besonderheiten:**
- `debug_assert` ist die Standard-Assert-Funktion
- Nur im Debug-Modus aktiv – wird im Release-Build entfernt
- Mojo befindet sich noch in aktiver Entwicklung
- Syntax und Verfügbarkeit können sich ändern

**Weiterführende Links:**
- [Mojo Documentation - debug_assert](https://docs.modular.com/mojo/stdlib/builtin/debug_assert/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
let x = 10

assert x > 0
assert x > 0, "x muss positiv sein"

# doAssert – kann nicht deaktiviert werden
doAssert x > 0, "x muss positiv sein"

# Static Assert für Compile-Zeit
static: assert sizeof(int) >= 4
```

**Besonderheiten:**
- `assert` ist ein Template in der Standardbibliothek
- Wird mit `--assertions:off` oder `-d:danger` deaktiviert
- `doAssert` ist **immer aktiv** und kann nicht deaktiviert werden
- Zeigt bei Fehlschlag den Quellcode-Standort und den Ausdruck an

**Weiterführende Links:**
- [Nim Documentation - assert](https://nim-lang.org/docs/assertions.html)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objectivec
int x = 10;

NSAssert(x > 0, @"x muss positiv sein");
NSCAssert(x > 0, @"x muss positiv sein");  // In C-Funktionen

// C-Style assert ist ebenfalls verfügbar
assert(x > 0);
```

**Besonderheiten:**
- `NSAssert` ist ein Foundation-Makro für Objective-C-Methoden
- `NSCAssert` ist die Variante für C-Funktionen
- Wird durch `NS_BLOCK_ASSERTIONS` Preprocessor-Flag deaktiviert
- Zusätzlich steht das C-Makro `assert` aus `<assert.h>` zur Verfügung

**Weiterführende Links:**
- [Apple Documentation - NSAssert](https://developer.apple.com/documentation/foundation/nsassert)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
var
  x: Integer;
begin
  x := 10;

  Assert(x > 0);
  Assert(x > 0, 'x muss positiv sein');
end;
```

**Besonderheiten:**
- `Assert` ist eine eingebaute Prozedur
- Kann über Compiler-Direktive `{$C-}` deaktiviert werden
- Wirft `EAssertionFailed` Exception bei Fehlschlag
- Standardmäßig im Debug-Modus aktiv

**Weiterführende Links:**
- [Free Pascal Documentation - Assert](https://www.freepascal.org/docs-html/rtl/system/assert.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
let x = 10

let () = assert (x > 0)

(* assert false – signalisiert unerreichbaren Code *)
let unreachable () = assert false
```

**Besonderheiten:**
- `assert` ist ein Sprach-Keyword
- Wirft `Assert_failure` Exception mit Datei, Zeile und Spalte
- Kann nicht deaktiviert werden
- `assert false` hat den speziellen Typ `'a` (beliebiger Typ)

**Weiterführende Links:**
- [OCaml Manual - Assertions](https://v2.ocaml.org/api/compilerlibrary/index.html)

</TabItem>
<TabItem value="octave" label="Octave">

```matlab
x = 10;

assert(x > 0);
assert(x, 10);           % Prüft Gleichheit
assert(x, 10, 0.001);    % Prüft Gleichheit mit Toleranz
```

**Besonderheiten:**
- `assert` ist eine eingebaute Funktion
- Unterstützt numerische Vergleiche mit Toleranz (dritter Parameter)
- Wird oft in `%!test`-Blöcken für eingebettete Tests verwendet
- Kann nicht deaktiviert werden

**Weiterführende Links:**
- [GNU Octave Documentation - assert](https://docs.octave.org/latest/Test-Functions.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
x := 10

assert(x > 0)
assert(x > 0, "x muss positiv sein")

// Panic bei nicht-behebaren Fehlern
if x <= 0 do panic("x muss positiv sein")
```

**Besonderheiten:**
- `assert` ist eine eingebaute Prozedur
- Wird im Release-Build mit `-o:speed` oder `-no-bounds-check` deaktiviert
- Zeigt bei Fehlschlag den Quellcode-Standort an
- `panic` ist eine separate Funktion, die immer aktiv ist

**Weiterführende Links:**
- [Odin Documentation - Built-in Procedures](https://odin-lang.org/docs/overview/#built-in-procedures)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Benötigt: use Carp::Assert;
my $x = 10;

assert($x > 0);

# Ohne Modul: Workaround
die "x muss positiv sein" unless $x > 0;
```

**Besonderheiten:**
- Perl hat kein eingebautes `assert`-Statement
- `Carp::Assert` ist ein CPAN-Modul für Assertions
- Idiomatischer Workaround: `die ... unless ...`
- `Carp::Assert` kann mit `no Carp::Assert` deaktiviert werden

**Weiterführende Links:**
- [CPAN - Carp::Assert](https://metacpan.org/pod/Carp::Assert)

</TabItem>
<TabItem value="php" label="PHP">

```php
$x = 10;

assert($x > 0);
assert($x > 0, 'x muss positiv sein');

// Seit PHP 8.0: wirft AssertionError
// assert($x > 100);  // AssertionError
```

**Besonderheiten:**
- `assert` ist eine Sprachkonstrukt-ähnliche Funktion
- Verhalten über `php.ini` konfigurierbar (`zend.assertions`)
- Seit PHP 8.0 wirft `assert` standardmäßig `AssertionError`
- Mit `zend.assertions = -1` im Produktionsmodus vollständig entfernbar

**Weiterführende Links:**
- [PHP Documentation - assert](https://www.php.net/manual/en/function.assert.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
X = 10,

% Workaround: If-then-else mit throw
(X > 0 -> true ; throw(error(assertion_error, 'X muss positiv sein'))),

% Eigenes Hilfsprädikat
assert_true(Goal) :-
    (call(Goal) -> true ; throw(assertion_failed(Goal))).

:- assert_true(10 > 0).
```

**Besonderheiten:**
- ISO-Prolog hat **kein** eingebautes Assert-Statement für Bedingungsprüfungen
- `assert/1` und `assertz/1` in Prolog dienen der Datenbankmanipulation (Hinzufügen von Fakten/Klauseln), nicht der Bedingungsprüfung
- Workaround über If-then-else (`->`) mit `throw/1`
- SWI-Prologs `plunit`-Bibliothek bietet `assertion/1` für Tests

**Weiterführende Links:**
- [SWI-Prolog Documentation - Exception Handling](https://www.swi-prolog.org/pldoc/man?section=exception)

</TabItem>
<TabItem value="python" label="Python">

```python
x = 10

assert x > 0
assert x > 0, "x muss positiv sein"
```

**Besonderheiten:**
- `assert` ist ein Sprach-Keyword
- Wird mit `-O` (Optimierung) oder `-OO` deaktiviert
- Wirft `AssertionError` bei Fehlschlag
- Sollte **nicht** für Validierung von Benutzereingaben verwendet werden

**Weiterführende Links:**
- [Python Documentation - assert](https://docs.python.org/3/reference/simple_stmts.html#the-assert-statement)

</TabItem>
<TabItem value="r" label="R">

```r
x <- 10

stopifnot(x > 0)
stopifnot("x muss positiv sein" = x > 0)

# Mehrere Bedingungen gleichzeitig
stopifnot(x > 0, x < 100, is.numeric(x))
```

**Besonderheiten:**
- R verwendet `stopifnot()` statt `assert`
- Unterstützt mehrere Bedingungen als separate Argumente
- Benannte Argumente werden als Fehlermeldung verwendet (seit R 4.0)
- Kann nicht deaktiviert werden – ist immer aktiv

**Weiterführende Links:**
- [R Documentation - stopifnot](https://stat.ethz.ch/R-manual/R-devel/library/base/html/stopifnot.html)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
(define x 10)

;; Workaround über unless/error
(unless (> x 0)
  (error "x muss positiv sein"))

;; In rackunit: Testspezifische Assertions
;; Benötigt: (require rackunit)
(check-true (> x 0))
(check-equal? x 10)
```

**Besonderheiten:**
- Racket hat kein eingebautes `assert`-Statement für Laufzeitprüfungen
- `unless`/`error` ist der idiomatische Workaround
- `rackunit` bietet umfangreiche Test-Assertions (`check-true`, `check-equal?` etc.)
- Rackets Contract-System (`define/contract`) bietet mächtigere Zusicherungen

**Weiterführende Links:**
- [Racket Documentation - rackunit](https://docs.racket-lang.org/rackunit/)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
x = 10

expect x > 0

-- In Tests
expect x == 10
```

**Besonderheiten:**
- `expect` ist ein Sprach-Keyword speziell für Assertions und Tests
- Wird vom Compiler in Test-Kontexten verwendet
- Zeigt bei Fehlschlag den Ausdruck und die beteiligten Werte an
- Roc befindet sich noch in aktiver Entwicklung

**Weiterführende Links:**
- [Roc Documentation - expect](https://www.roc-lang.org/tutorial#expect)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
x = 10

# Kein eingebautes assert – Workaround:
raise "x muss positiv sein" unless x > 0

# In Minitest/Test::Unit:
# assert x > 0
# assert_equal 10, x
```

**Besonderheiten:**
- Ruby hat kein eingebautes `assert`-Statement
- Idiomatischer Workaround: `raise ... unless ...`
- `assert`-Methoden existieren in Minitest und Test::Unit (Testframeworks)
- Eigene `assert`-Methode ist leicht implementierbar

**Weiterführende Links:**
- [Ruby Documentation - Minitest::Assertions](https://ruby-doc.org/stdlib/libdoc/minitest/rdoc/Minitest/Assertions.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
let x = 10;

assert!(x > 0);
assert!(x > 0, "x muss positiv sein");
assert!(x > 0, "x ist {}, muss positiv sein", x);

assert_eq!(x, 10);
assert_ne!(x, 0);

// debug_assert – nur im Debug-Build
debug_assert!(x > 0);
```

**Besonderheiten:**
- `assert!`, `assert_eq!`, `assert_ne!` sind Makros (immer aktiv)
- `debug_assert!`, `debug_assert_eq!`, `debug_assert_ne!` nur im Debug-Build
- Fehlermeldungen unterstützen Format-Strings wie `println!`
- `assert_eq!` und `assert_ne!` zeigen bei Fehlschlag beide Werte an

**Weiterführende Links:**
- [Rust Documentation - assert!](https://doc.rust-lang.org/std/macro.assert.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
val x = 10

assert(x > 0)
assert(x > 0, "x muss positiv sein")

// require – für Vorbedingungen (wirft IllegalArgumentException)
require(x > 0, "x muss positiv sein")

// ensuring – für Nachbedingungen
def double(n: Int): Int = { n * 2 } ensuring (_ > 0)
```

**Besonderheiten:**
- `assert` ist eine Methode in `Predef` (automatisch importiert)
- `require` ist für Parameter-Validierung (wirft `IllegalArgumentException`)
- `ensuring` prüft Nachbedingungen auf dem Rückgabewert
- Assertions können mit `-Xelide-below` deaktiviert werden

**Weiterführende Links:**
- [Scala Documentation - assert](https://www.scala-lang.org/api/current/scala/Predef$.html#assert)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
(define x 10)

;; Kein Standard-assert – Workaround:
(when (<= x 0)
  (error "x muss positiv sein"))

;; SRFI-78: Leichtgewichtiges Testing
;; (check (> x 0) => #t)
```

**Besonderheiten:**
- Scheme (R7RS) hat kein standardisiertes `assert`
- Workaround über `error` oder `when`/`unless`
- SRFI-78 definiert leichtgewichtiges Testing mit `check`
- Einige Implementierungen bieten eigene Assert-Erweiterungen

**Weiterführende Links:**
- [SRFI-78 - Lightweight Testing](https://srfi.schemers.org/srfi-78/)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
let x = 10

assert(x > 0)
assert(x > 0, "x muss positiv sein")

// precondition – auch im Release-Build aktiv
precondition(x > 0, "x muss positiv sein")

// assertionFailure/preconditionFailure – bedingungsloser Abbruch
// assertionFailure("Unerreichbarer Code")
```

**Besonderheiten:**
- `assert` wird im Release-Build (`-O`) entfernt
- `precondition` bleibt auch im Release-Build aktiv
- `assertionFailure` und `preconditionFailure` sind bedingungslose Abbrüche
- Mit `-Ounchecked` werden auch `precondition`-Checks entfernt

**Weiterführende Links:**
- [Swift Documentation - assert](https://developer.apple.com/documentation/swift/assert(_:_:file:line:))

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
let x = 10;

// console.assert – loggt nur, wirft keinen Fehler
console.assert(x > 0, "x muss positiv sein");

// Node.js: assert-Modul (wirft Fehler)
// Benötigt: import assert from 'node:assert';
assert(x > 0);
assert.strictEqual(x, 10);
```

**Besonderheiten:**
- Identisches Verhalten wie JavaScript
- TypeScript bietet zusätzlich **Assertion Functions** für Typ-Narrowing: `asserts value is Type`
- `console.assert()` wirft **keinen** Fehler – loggt nur
- Das Node.js-Modul `node:assert` wirft `AssertionError` bei Fehlschlag

**Weiterführende Links:**
- [TypeScript Documentation - Assertion Functions](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#assertion-functions)
- [Node.js - Assert Module](https://nodejs.org/api/assert.html)

</TabItem>
<TabItem value="v" label="V">

```v
x := 10

assert x > 0
assert x > 0, 'x muss positiv sein'
```

**Besonderheiten:**
- `assert` ist ein Sprach-Keyword
- Zeigt bei Fehlschlag den Ausdruck und die Werte der Operanden an
- In `test_`-Dateien sind Assertions das primäre Testmittel
- Im Release-Build (`-prod`) werden Assertions deaktiviert

**Weiterführende Links:**
- [V Documentation - assert](https://github.com/vlang/v/blob/master/doc/docs.md#asserts)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```csharp
' Benötigt: Imports System.Diagnostics
Dim x As Integer = 10

Debug.Assert(x > 0)
Debug.Assert(x > 0, "x muss positiv sein")

' Trace.Assert ist auch im Release-Build aktiv
Trace.Assert(x > 0, "x muss positiv sein")
```

**Besonderheiten:**
- Identisches Verhalten wie C# (beide nutzen `System.Diagnostics`)
- `Debug.Assert` ist nur im Debug-Build aktiv
- `Trace.Assert` ist auch im Release-Build aktiv
- Kein Sprach-Keyword, sondern Methoden aus dem .NET Framework

**Weiterführende Links:**
- [Microsoft Docs - Debug.Assert](https://learn.microsoft.com/en-us/dotnet/api/system.diagnostics.debug.assert)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
x = 10;

Assert[x > 0]
Assert[x > 0, "x muss positiv sein"]
```

**Besonderheiten:**
- `Assert` ist eine eingebaute Funktion
- Generiert eine `Assert::asrtf`-Nachricht bei Fehlschlag
- Kann über `$AssertFunction` angepasst werden
- Standardmäßig immer aktiv

**Weiterführende Links:**
- [Wolfram Documentation - Assert](https://reference.wolfram.com/language/ref/Assert.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
const x: i32 = 10;

// Benötigt: const std = @import("std");
std.debug.assert(x > 0);

// Unreachable – für unerreichbaren Code
// unreachable;
```

**Besonderheiten:**
- `std.debug.assert` ist eine Standardbibliotheksfunktion
- Kein separater Nachrichten-Parameter möglich
- Im Release-Build (`ReleaseFast`, `ReleaseSmall`) wird `assert` zu `unreachable`
- `@panic` kann für Assertions mit Nachricht verwendet werden

**Weiterführende Links:**
- [Zig Documentation - std.debug.assert](https://ziglang.org/documentation/master/std/#std.debug.assert)

</TabItem>
</Tabs>

## 18.1.2. Eingebaute Testframeworks

Einige Sprachen liefern ein Testframework als Teil der Sprache oder Standardbibliothek mit, sodass keine externen Abhängigkeiten für grundlegendes Unit-Testing benötigt werden.

### Sprachen

<Tabs availableTabs={['clojure', 'crystal', 'd', 'elixir', 'erlang', 'go', 'julia', 'matlab', 'nim', 'octave', 'odin', 'perl', 'prolog', 'python', 'racket', 'roc', 'ruby', 'rust', 'swift', 'v', 'wolfram-language', 'zig']} yellowTabs={['csharp', 'dart', 'elm', 'gleam', 'groovy', 'javascript', 'kotlin', 'mojo', 'objective-c', 'typescript', 'vbnet']}>
<TabItem value="clojure" label="Clojure">

```clojure
;; clojure.test ist Teil der Standardbibliothek
(ns myapp.core-test
  (:require [clojure.test :refer [deftest is testing]]))

(deftest addition-test
  (testing "Addition"
    (is (= 4 (+ 2 2)))
    (is (pos? 42))))
```

**Besonderheiten:**
- `clojure.test` ist Teil der Clojure-Standardbibliothek
- `deftest` definiert Tests, `is` prüft Assertions
- `testing` gruppiert zusammengehörige Assertions mit Beschreibung
- Ausführung mit `lein test` oder `clojure -X:test`

**Weiterführende Links:**
- [Clojure Documentation - clojure.test](https://clojure.github.io/clojure/clojure.test-api.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// MSTest – Teil des .NET SDK
[TestClass]
public class MathTests
{
    [TestMethod]
    public void Addition_ReturnsCorrectResult()
    {
        Assert.AreEqual(4, 2 + 2);
        Assert.IsTrue(42 > 0);
    }
}
```

**Besonderheiten:**
- MSTest ist im .NET SDK enthalten und über `dotnet test` ausführbar
- Kein Sprach-Feature, sondern offizielles Framework von Microsoft
- Alternativen wie xUnit und NUnit sind in der Community verbreiteter
- Testprojekte werden mit `dotnet new mstest` erstellt

**Weiterführende Links:**
- [Microsoft Docs - MSTest](https://learn.microsoft.com/en-us/dotnet/core/testing/unit-testing-with-mstest)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
require "spec"

describe "Math" do
  it "addiert korrekt" do
    (2 + 2).should eq(4)
    42.should be > 0
  end
end
```

**Besonderheiten:**
- `spec` ist Teil der Crystal-Standardbibliothek
- RSpec-ähnliche Syntax mit `describe`, `it`, `should`
- Ausführung mit `crystal spec`
- Unterstützt `before_each`, `after_each` und `pending` für übersprungene Tests

**Weiterführende Links:**
- [Crystal Documentation - Spec](https://crystal-lang.org/reference/1.11/guides/testing.html)

</TabItem>
<TabItem value="d" label="D">

```d
// unittest-Blöcke sind ein Sprach-Feature
int add(int a, int b) {
    return a + b;
}

unittest {
    assert(add(2, 2) == 4);
    assert(42 > 0);
}
```

**Besonderheiten:**
- `unittest`-Blöcke sind direkt in die Sprache integriert
- Können überall im Code stehen – direkt neben der getesteten Funktion
- Ausführung mit `dmd -unittest` oder `rdmd --main -unittest`
- Tests laufen vor `main()` und werden im Release-Build übersprungen

**Weiterführende Links:**
- [D Documentation - Unit Tests](https://dlang.org/spec/unittest.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Benötigt: package:test (offizielles Dart-Paket)
import 'package:test/test.dart';

void main() {
  test('Addition', () {
    expect(2 + 2, equals(4));
    expect(42, isPositive);
  });
}
```

**Besonderheiten:**
- `package:test` ist das offizielle Testpaket, aber nicht in der Standardbibliothek
- Muss als Abhängigkeit in `pubspec.yaml` hinzugefügt werden
- Ausführung mit `dart test`
- Unterstützt `group`, `setUp`, `tearDown` und asynchrone Tests

**Weiterführende Links:**
- [Dart Documentation - Testing](https://dart.dev/guides/testing)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
defmodule MathTest do
  use ExUnit.Case

  test "Addition" do
    assert 2 + 2 == 4
    assert 42 > 0
  end
end
```

**Besonderheiten:**
- ExUnit ist Teil der Elixir-Standardbibliothek
- `use ExUnit.Case` importiert die Testfunktionalität
- Ausführung mit `mix test`
- Unterstützt `setup`, `describe`, `doctest` und asynchrone Tests

**Weiterführende Links:**
- [Elixir Documentation - ExUnit](https://hexdocs.pm/ex_unit/ExUnit.html)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Benötigt: elm-explorations/test (offizielles Paket)
module MathTest exposing (..)

import Expect
import Test exposing (Test, test)

suite : Test
suite =
    test "Addition" <|
        \_ -> Expect.equal 4 (2 + 2)
```

**Besonderheiten:**
- `elm-test` ist das offizielle Testpaket, aber nicht in der Standardbibliothek
- Muss separat installiert werden: `elm install elm-explorations/test`
- Ausführung mit `elm-test`
- Rein funktionale Tests ohne Seiteneffekte

**Weiterführende Links:**
- [Elm Test Documentation](https://package.elm-lang.org/packages/elm-explorations/test/latest/)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
-module(math_test).
-include_lib("eunit/include/eunit.hrl").

addition_test() ->
    ?assertEqual(4, 2 + 2),
    ?assert(42 > 0).
```

**Besonderheiten:**
- EUnit und Common Test sind Teil der OTP-Distribution
- EUnit: Leichtgewichtiges Unit-Testing mit `_test()`-Suffixkonvention
- Common Test: Umfangreicheres Framework für System- und Integrationstests
- Ausführung mit `rebar3 eunit` oder `eunit:test(module_name)`

**Weiterführende Links:**
- [Erlang Documentation - EUnit](https://www.erlang.org/doc/apps/eunit/chapter.html)
- [Erlang Documentation - Common Test](https://www.erlang.org/doc/apps/common_test/introduction.html)

</TabItem>
<TabItem value="gleam" label="Gleam">

```erlang
// Benötigt: gleeunit (offizielles Testpaket)
import gleeunit
import gleeunit/should

pub fn addition_test() {
  { 2 + 2 } |> should.equal(4)
  True |> should.be_true()
}
```

**Besonderheiten:**
- `gleeunit` ist das offizielle Testpaket, aber nicht in der Standardbibliothek
- Wird standardmäßig bei `gleam new` als Abhängigkeit hinzugefügt
- Testfunktionen enden auf `_test`
- Ausführung mit `gleam test`

**Weiterführende Links:**
- [Gleam Documentation - Testing](https://gleam.run/book/tour/test.html)

</TabItem>
<TabItem value="go" label="Go">

```go
// Datei: math_test.go
package math

import "testing"

func TestAddition(t *testing.T) {
    result := 2 + 2
    if result != 4 {
        t.Errorf("Erwartet 4, erhalten %d", result)
    }
}
```

**Besonderheiten:**
- `testing` ist Teil der Go-Standardbibliothek
- Testdateien enden auf `_test.go`, Funktionen beginnen mit `Test`
- Ausführung mit `go test`
- Kein Assert – Tests nutzen `t.Error()`, `t.Fatal()`, `t.Errorf()`
- Unterstützt Benchmarks (`BenchmarkXxx`) und Fuzzing (`FuzzXxx`, seit Go 1.18)

**Weiterführende Links:**
- [Go Documentation - testing](https://pkg.go.dev/testing)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Groovy-eigene Test-Unterstützung
class MathTest extends GroovyTestCase {
    void testAddition() {
        assertEquals(4, 2 + 2)
        assertTrue(42 > 0)
    }
}
```

**Besonderheiten:**
- `GroovyTestCase` ist Teil der Groovy-Standardbibliothek
- Basiert auf JUnit, erweitert es mit Groovy-Features
- Power Assertions bieten detaillierte Fehlermeldungen
- In der Praxis wird häufig Spock als externes Framework verwendet

**Weiterführende Links:**
- [Groovy Documentation - Testing](https://groovy-lang.org/testing.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Node.js: node:test (seit Node.js 18)
import { describe, it } from 'node:test';
import assert from 'node:assert';

describe('Math', () => {
    it('addiert korrekt', () => {
        assert.strictEqual(2 + 2, 4);
        assert.ok(42 > 0);
    });
});
```

**Besonderheiten:**
- `node:test` ist seit Node.js 18 im Kern enthalten
- Ausführung mit `node --test`
- Bietet `describe`, `it`, `before`, `after`, `beforeEach`, `afterEach`
- Nutzt das `node:assert`-Modul für Assertions
- Im Browser gibt es kein eingebautes Testframework

**Weiterführende Links:**
- [Node.js Documentation - Test Runner](https://nodejs.org/api/test.html)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
using Test

@testset "Math" begin
    @test 2 + 2 == 4
    @test 42 > 0
    @test_throws DomainError sqrt(-1)
end
```

**Besonderheiten:**
- `Test` ist Teil der Julia-Standardbibliothek
- `@testset` gruppiert Tests, `@test` prüft einzelne Assertions
- `@test_throws` prüft, ob eine Exception geworfen wird
- Ausführung mit `julia -e 'using Pkg; Pkg.test()'`

**Weiterführende Links:**
- [Julia Documentation - Test](https://docs.julialang.org/en/v1/stdlib/Test/)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// kotlin.test – offizielle Testbibliothek
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue

class MathTest {
    @Test fun addition() {
        assertEquals(4, 2 + 2)
        assertTrue(42 > 0)
    }
}
```

**Besonderheiten:**
- `kotlin.test` ist eine offizielle Bibliothek von JetBrains, aber nicht in der Stdlib
- Muss als Abhängigkeit hinzugefügt werden
- Plattformunabhängig – funktioniert auf JVM, JS und Native
- Nutzt je nach Plattform JUnit, QUnit oder nativen Test-Runner

**Weiterführende Links:**
- [Kotlin Documentation - kotlin.test](https://kotlinlang.org/api/latest/kotlin.test/)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% Datei: MathTest.m
classdef MathTest < matlab.unittest.TestCase
    methods (Test)
        function testAddition(testCase)
            testCase.verifyEqual(2 + 2, 4);
            testCase.verifyGreaterThan(42, 0);
        end
    end
end
```

**Besonderheiten:**
- `matlab.unittest` ist Teil der MATLAB-Standardbibliothek
- Klassenbasiertes Framework mit `verifyEqual`, `verifyTrue` etc.
- Ausführung mit `runtests('MathTest')`
- Unterstützt Fixtures, parametrisierte Tests und Test-Suites

**Weiterführende Links:**
- [MathWorks Documentation - Unit Testing Framework](https://www.mathworks.com/help/matlab/matlab-unit-test-framework.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```mojo
from testing import assert_equal, assert_true

def test_addition():
    assert_equal(2 + 2, 4)
    assert_true(42 > 0)
```

**Besonderheiten:**
- `testing`-Modul ist Teil der Mojo-Standardbibliothek
- Bietet `assert_equal`, `assert_true`, `assert_false` etc.
- Mojo befindet sich noch in aktiver Entwicklung
- Ausführung mit `mojo test`

**Weiterführende Links:**
- [Mojo Documentation - Testing](https://docs.modular.com/mojo/stdlib/testing/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
import unittest

suite "Math":
  test "Addition":
    check 2 + 2 == 4
    check 42 > 0
```

**Besonderheiten:**
- `unittest` ist Teil der Nim-Standardbibliothek
- `suite` gruppiert Tests, `test` definiert einzelne Testfälle
- `check` ist die Assert-Funktion im Testkontext
- Ausführung mit `nim c -r test_math.nim`

**Weiterführende Links:**
- [Nim Documentation - unittest](https://nim-lang.org/docs/unittest.html)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objectivec
// XCTest – Teil des Xcode SDK
@interface MathTests : XCTestCase
@end

@implementation MathTests
- (void)testAddition {
    XCTAssertEqual(2 + 2, 4);
    XCTAssertTrue(42 > 0);
}
@end
```

**Besonderheiten:**
- XCTest ist Teil des Xcode SDK (nicht der Sprache selbst)
- Testklassen erben von `XCTestCase`
- Testmethoden beginnen mit `test`
- Ausführung über Xcode oder `xcodebuild test`

**Weiterführende Links:**
- [Apple Documentation - XCTest](https://developer.apple.com/documentation/xctest)

</TabItem>
<TabItem value="octave" label="Octave">

```matlab
% Eingebettete Tests in Quelldateien
function result = add(a, b)
  result = a + b;
endfunction

%!test
%! assert(add(2, 2), 4);
%! assert(42 > 0);
```

**Besonderheiten:**
- Octave hat eingebettete Tests mit `%!test`-Blöcken direkt in Quelldateien
- `assert` ist die primäre Testfunktion
- Ausführung mit `test('dateiname')`
- Tests werden direkt neben dem getesteten Code geschrieben

**Weiterführende Links:**
- [GNU Octave Documentation - Test Functions](https://docs.octave.org/latest/Test-Functions.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
package math_test

import "core:testing"

@(test)
test_addition :: proc(t: ^testing.T) {
    testing.expect_value(t, 2 + 2, 4)
    testing.expect(t, 42 > 0)
}
```

**Besonderheiten:**
- `core:testing` ist Teil der Odin-Standardbibliothek
- Testfunktionen werden mit `@(test)` annotiert
- Ausführung mit `odin test`
- Unterstützt `expect`, `expect_value` und `log`

**Weiterführende Links:**
- [Odin Documentation - Testing](https://odin-lang.org/docs/overview/#testing)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
use Test::More;

is(2 + 2, 4, 'Addition');
ok(42 > 0, 'Positiv');

done_testing();
```

**Besonderheiten:**
- `Test::More` und `Test::Simple` sind Teil der Perl-Core-Distribution
- TAP (Test Anything Protocol) als standardisiertes Ausgabeformat
- Ausführung mit `prove` oder `perl -Ilib t/test.t`
- Unterstützt `is`, `ok`, `like`, `is_deeply` und viele weitere

**Weiterführende Links:**
- [Perl Documentation - Test::More](https://perldoc.perl.org/Test::More)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
%% Benötigt: :- use_module(library(plunit)).
:- begin_tests(math).

test(addition) :-
    X is 2 + 2,
    assertion(X == 4).

test(positive) :-
    assertion(42 > 0).

:- end_tests(math).
```

**Besonderheiten:**
- `plunit` ist Teil der SWI-Prolog-Standardbibliothek
- `:- begin_tests(Name).` / `:- end_tests(Name).` definieren Testblöcke
- `test(Name)` oder `test(Name, [Optionen])` definieren einzelne Tests
- `assertion/1` prüft Goals innerhalb von Tests
- Ausführung mit `run_tests.` in der Prolog-Konsole oder `swipl -g run_tests -t halt datei.pl`

**Weiterführende Links:**
- [SWI-Prolog Documentation - PlUnit](https://www.swi-prolog.org/pldoc/doc_for?object=section(%27packages/plunit.html%27))

</TabItem>
<TabItem value="python" label="Python">

```python
import unittest

class MathTest(unittest.TestCase):
    def test_addition(self):
        self.assertEqual(2 + 2, 4)
        self.assertTrue(42 > 0)

# Alternativ: doctest
def add(a, b):
    """
    >>> add(2, 2)
    4
    """
    return a + b
```

**Besonderheiten:**
- `unittest` und `doctest` sind Teil der Python-Standardbibliothek
- `unittest` ist JUnit-inspiriert mit Klassen und Methoden
- `doctest` testet Beispiele direkt aus Docstrings
- Ausführung mit `python -m unittest` oder `python -m doctest`
- In der Praxis wird häufig `pytest` als externes Framework verwendet

**Weiterführende Links:**
- [Python Documentation - unittest](https://docs.python.org/3/library/unittest.html)
- [Python Documentation - doctest](https://docs.python.org/3/library/doctest.html)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
(require rackunit)

(test-case "Math"
  (check-equal? (+ 2 2) 4)
  (check-true (> 42 0)))
```

**Besonderheiten:**
- `rackunit` ist Teil der Racket-Distribution
- `check-equal?`, `check-true`, `check-exn` etc. als Assertion-Funktionen
- `test-case` und `test-suite` für Gruppierung
- Ausführung mit `raco test datei.rkt`

**Weiterführende Links:**
- [Racket Documentation - RackUnit](https://docs.racket-lang.org/rackunit/)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
expect 2 + 2 == 4
expect 42 > 0
```

**Besonderheiten:**
- `expect` ist ein Sprach-Keyword für Tests und Assertions
- Kein separates Framework nötig – Testing ist in die Sprache integriert
- Ausführung mit `roc test`
- Zeigt bei Fehlschlag die beteiligten Werte an
- Roc befindet sich noch in aktiver Entwicklung

**Weiterführende Links:**
- [Roc Documentation - Testing](https://www.roc-lang.org/tutorial#expect)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
require "minitest/autorun"

class MathTest < Minitest::Test
  def test_addition
    assert_equal 4, 2 + 2
    assert 42 > 0
  end
end
```

**Besonderheiten:**
- `minitest` ist Teil der Ruby-Standardbibliothek
- Unterstützt sowohl Unit-Test- als auch Spec-Style
- `assert`, `assert_equal`, `assert_raises` etc. als Assertions
- Ausführung mit `ruby test_math.rb`

**Weiterführende Links:**
- [Ruby Documentation - Minitest](https://ruby-doc.org/stdlib/libdoc/minitest/rdoc/Minitest.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
fn add(a: i32, b: i32) -> i32 {
    a + b
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_addition() {
        assert_eq!(add(2, 2), 4);
        assert!(42 > 0);
    }
}
```

**Besonderheiten:**
- Testing ist direkt in die Sprache und den Compiler integriert
- `#[test]` markiert Testfunktionen, `#[cfg(test)]` markiert Testmodule
- Ausführung mit `cargo test`
- Tests können direkt neben dem Produktionscode stehen
- Unterstützt `#[should_panic]` und `#[ignore]`

**Weiterführende Links:**
- [Rust Documentation - Testing](https://doc.rust-lang.org/book/ch11-01-writing-tests.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
import Testing

@Test func addition() {
    #expect(2 + 2 == 4)
    #expect(42 > 0)
}

// XCTest (älterer Ansatz)
import XCTest
class MathTests: XCTestCase {
    func testAddition() {
        XCTAssertEqual(2 + 2, 4)
    }
}
```

**Besonderheiten:**
- Swift Testing ist seit Swift 5.9 das neue offizielle Framework
- XCTest ist das ältere Framework, Teil des Xcode SDK
- Swift Testing nutzt `@Test`-Makro und `#expect`-Makro
- Ausführung mit `swift test` (Swift Package Manager) oder Xcode

**Weiterführende Links:**
- [Apple Documentation - Swift Testing](https://developer.apple.com/documentation/testing)
- [Apple Documentation - XCTest](https://developer.apple.com/documentation/xctest)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Node.js: node:test (seit Node.js 18)
import { describe, it } from 'node:test';
import assert from 'node:assert';

describe('Math', () => {
    it('addiert korrekt', () => {
        assert.strictEqual(2 + 2, 4);
        assert.ok(42 > 0);
    });
});
```

**Besonderheiten:**
- Identisch zu JavaScript – nutzt Node.js `node:test`
- TypeScript-Dateien benötigen einen Build-Schritt oder `tsx`/`ts-node`
- Deno und Bun haben eigene eingebaute Test-Runner
- In der Praxis werden häufig Jest oder Vitest verwendet

**Weiterführende Links:**
- [Node.js Documentation - Test Runner](https://nodejs.org/api/test.html)

</TabItem>
<TabItem value="v" label="V">

```v
// Datei: math_test.v
fn test_addition() {
    assert 2 + 2 == 4
    assert 42 > 0
}
```

**Besonderheiten:**
- Testing ist direkt in die Sprache integriert
- Testdateien enden auf `_test.v`, Funktionen beginnen mit `test_`
- Ausführung mit `v test datei_test.v`
- `assert` ist das primäre Testmittel, zeigt bei Fehlschlag die Werte an

**Weiterführende Links:**
- [V Documentation - Testing](https://github.com/vlang/v/blob/master/doc/docs.md#testing)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```csharp
' MSTest – Teil des .NET SDK
<TestClass>
Public Class MathTests
    <TestMethod>
    Public Sub Addition_ReturnsCorrectResult()
        Assert.AreEqual(4, 2 + 2)
        Assert.IsTrue(42 > 0)
    End Sub
End Class
```

**Besonderheiten:**
- Identisch zu C# – MSTest ist im .NET SDK enthalten
- Verwendet VB.NET-Attribute-Syntax: `<TestClass>`, `<TestMethod>`
- Ausführung mit `dotnet test`
- Alternativen wie xUnit und NUnit sind ebenfalls verfügbar

**Weiterführende Links:**
- [Microsoft Docs - MSTest](https://learn.microsoft.com/en-us/dotnet/core/testing/unit-testing-with-mstest)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
VerificationTest[2 + 2, 4]
VerificationTest[42 > 0, True]

(* Mehrere Tests als TestReport *)
TestReport[{
    VerificationTest[2 + 2, 4],
    VerificationTest[42 > 0, True]
}]
```

**Besonderheiten:**
- `VerificationTest` und `TestReport` sind eingebaute Funktionen
- `VerificationTest` vergleicht Ergebnis mit erwartetem Wert
- `TestReport` erstellt einen zusammenfassenden Bericht
- Tests können in `.wlt`-Dateien gespeichert werden

**Weiterführende Links:**
- [Wolfram Documentation - VerificationTest](https://reference.wolfram.com/language/ref/VerificationTest.html)
- [Wolfram Documentation - TestReport](https://reference.wolfram.com/language/ref/TestReport.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
fn add(a: i32, b: i32) i32 {
    return a + b;
}

test "Addition" {
    const std = @import("std");
    try std.testing.expectEqual(@as(i32, 4), add(2, 2));
    try std.testing.expect(42 > 0);
}
```

**Besonderheiten:**
- `test`-Blöcke sind direkt in die Sprache integriert
- Tests können überall im Code stehen – neben dem getesteten Code
- Ausführung mit `zig test datei.zig`
- `std.testing` bietet `expectEqual`, `expect`, `expectError` etc.
- Tests werden im Release-Build nicht kompiliert

**Weiterführende Links:**
- [Zig Documentation - Testing](https://ziglang.org/documentation/master/#Zig-Test)

</TabItem>
</Tabs>

## 18.1.3. Property-Based Testing

Property-Based Testing generiert automatisch zufällige Testdaten und prüft, ob definierte Eigenschaften (Properties) für alle generierten Eingaben gelten. Im Gegensatz zu herkömmlichen Unit-Tests, die konkrete Werte testen, werden allgemeine Gesetzmäßigkeiten verifiziert.

### Sprachen

<Tabs availableTabs={['clojure', 'elixir', 'erlang', 'fsharp', 'haskell', 'java', 'javascript', 'kotlin', 'ocaml', 'python', 'purescript', 'rust', 'scala', 'swift', 'typescript']} yellowTabs={['csharp', 'cpp', 'dart', 'go', 'groovy', 'julia', 'nim', 'racket', 'ruby', 'vbnet']}>
<TabItem value="clojure" label="Clojure">

```clojure
;; Benötigt: org.clojure/test.check
(require '[clojure.test.check :as tc])
(require '[clojure.test.check.generators :as gen])
(require '[clojure.test.check.properties :as prop])

(def sort-idempotent
  (prop/for-all [v (gen/vector gen/int)]
    (= (sort v) (sort (sort v)))))

(tc/quick-check 100 sort-idempotent)
```

**Besonderheiten:**
- `test.check` ist eine offizielle Clojure-Contrib-Bibliothek
- Generatoren (`gen/int`, `gen/string`, `gen/vector` etc.) sind sehr komposabel
- Shrinking reduziert fehlgeschlagene Eingaben automatisch auf minimale Gegenbeispiele
- Integration mit `clojure.test` über `defspec`

**Weiterführende Links:**
- [Clojure test.check](https://github.com/clojure/test.check)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Benötigt: FsCheck oder FsCheck.Xunit NuGet-Paket
[Property]
public bool Sort_Is_Idempotent(int[] items)
{
    var sorted = items.OrderBy(x => x).ToArray();
    var sortedTwice = sorted.OrderBy(x => x).ToArray();
    return sorted.SequenceEqual(sortedTwice);
}
```

**Besonderheiten:**
- FsCheck ist die verbreitetste PBT-Bibliothek für .NET
- Ursprünglich für F# entwickelt, aber vollständig in C# nutzbar
- Integration mit xUnit, NUnit und MSTest über Zusatzpakete
- CsCheck ist eine reine C#-Alternative

**Weiterführende Links:**
- [FsCheck Documentation](https://fscheck.github.io/FsCheck/)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Benötigt: RapidCheck-Bibliothek
#include <rapidcheck.h>
#include <algorithm>
#include <vector>

rc::check("Sort ist idempotent", [](std::vector<int> items) {
    auto sorted = items;
    std::sort(sorted.begin(), sorted.end());
    auto sortedTwice = sorted;
    std::sort(sortedTwice.begin(), sortedTwice.end());
    RC_ASSERT(sorted == sortedTwice);
});
```

**Besonderheiten:**
- RapidCheck ist die verbreitetste PBT-Bibliothek für C++
- Nutzt C++11-Features wie Lambda-Ausdrücke
- Automatisches Shrinking von fehlgeschlagenen Eingaben
- Integration mit Google Test und Catch2 möglich

**Weiterführende Links:**
- [RapidCheck GitHub](https://github.com/emil-e/rapidcheck)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Benötigt: glados Paket
import 'package:glados/glados.dart';

void main() {
  Glados<List<int>>(any.list(any.int)).test(
    'Sort ist idempotent', (items) {
      final sorted = List.of(items)..sort();
      final sortedTwice = List.of(sorted)..sort();
      expect(sorted, equals(sortedTwice));
    },
  );
}
```

**Besonderheiten:**
- `glados` ist die bekannteste PBT-Bibliothek für Dart
- Bietet Generatoren für gängige Typen
- Automatisches Shrinking
- Integration mit dem Dart-Testframework

**Weiterführende Links:**
- [Glados - pub.dev](https://pub.dev/packages/glados)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Benötigt: stream_data Abhängigkeit
use ExUnit.Case
use ExUnit.Properties

property "Sort ist idempotent" do
  check all items <- list_of(integer()) do
    sorted = Enum.sort(items)
    assert sorted == Enum.sort(sorted)
  end
end
```

**Besonderheiten:**
- `StreamData` ist die offizielle PBT-Bibliothek für Elixir
- Integration mit ExUnit über `use ExUnit.Properties`
- Generatoren sind komposabel und stream-basiert
- Automatisches Shrinking von fehlgeschlagenen Eingaben

**Weiterführende Links:**
- [StreamData Documentation](https://hexdocs.pm/stream_data/)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
%% Benötigt: PropEr-Bibliothek
-include_lib("proper/include/proper.hrl").

prop_sort_idempotent() ->
    ?FORALL(Items, list(integer()),
        begin
            Sorted = lists:sort(Items),
            Sorted =:= lists:sort(Sorted)
        end).
```

**Besonderheiten:**
- PropEr ist die verbreitetste Open-Source-PBT-Bibliothek für Erlang
- QuickCheck (Quviq) ist die kommerzielle Alternative und das Original für Erlang
- `?FORALL`-Makro definiert Properties
- Erlang war eine der ersten Sprachen mit industriellem PBT-Einsatz

**Weiterführende Links:**
- [PropEr Documentation](https://proper-testing.github.io/)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Benötigt: FsCheck NuGet-Paket
open FsCheck

let sortIsIdempotent (items: int list) =
    let sorted = List.sort items
    sorted = List.sort sorted

Check.QuickThrowOnFailure sortIsIdempotent
```

**Besonderheiten:**
- FsCheck ist eine reife, in F# geschriebene PBT-Bibliothek
- Inspiriert von Haskells QuickCheck
- Automatische Generator-Ableitung für F#-Typen (einschließlich Discriminated Unions)
- Nahtlose Integration mit xUnit und NUnit

**Weiterführende Links:**
- [FsCheck Documentation](https://fscheck.github.io/FsCheck/)

</TabItem>
<TabItem value="go" label="Go">

```go
// Benötigt: testing/quick (Standardbibliothek)
import (
    "sort"
    "testing"
    "testing/quick"
)

func TestSortIdempotent(t *testing.T) {
    f := func(items []int) bool {
        sort.Ints(items)
        sorted := make([]int, len(items))
        copy(sorted, items)
        sort.Ints(items)
        return reflect.DeepEqual(sorted, items)
    }
    if err := quick.Check(f, nil); err != nil {
        t.Error(err)
    }
}
```

**Besonderheiten:**
- `testing/quick` ist Teil der Go-Standardbibliothek, aber sehr eingeschränkt
- Generiert nur Zufallswerte für einfache Typen
- Kein Shrinking von fehlgeschlagenen Eingaben
- Externe Alternativen: `gopter`, `rapid` bieten mehr Funktionalität

**Weiterführende Links:**
- [Go Documentation - testing/quick](https://pkg.go.dev/testing/quick)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Benötigt: jqwik (Java PBT-Framework)
@Property
void sortIsIdempotent(@ForAll List<Integer> items) {
    def sorted = items.sort(false)
    def sortedTwice = sorted.sort(false)
    assert sorted == sortedTwice
}
```

**Besonderheiten:**
- Groovy nutzt Java-PBT-Bibliotheken wie jqwik oder QuickTheories
- Groovys dynamische Typisierung erleichtert die Generatordefinition
- Spock-Framework bietet keine native PBT-Unterstützung
- Integration über JUnit-Platform

**Weiterführende Links:**
- [jqwik Documentation](https://jqwik.net/)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Benötigt: QuickCheck-Paket
import Test.QuickCheck
import Data.List (sort)

prop_sortIdempotent :: [Int] -> Bool
prop_sortIdempotent items =
    sort items == sort (sort items)

main :: IO ()
main = quickCheck prop_sortIdempotent
```

**Besonderheiten:**
- QuickCheck ist die **Urform** des Property-Based Testing (2000 veröffentlicht)
- `Arbitrary`-Typklasse ermöglicht automatische Generatordefinition für eigene Typen
- Automatisches Shrinking reduziert Gegenbeispiele auf minimale Fälle
- Nahezu alle PBT-Bibliotheken in anderen Sprachen sind von QuickCheck inspiriert

**Weiterführende Links:**
- [Hackage - QuickCheck](https://hackage.haskell.org/package/QuickCheck)

</TabItem>
<TabItem value="java" label="Java">

```java
// Benötigt: jqwik-Bibliothek
import net.jqwik.api.*;
import java.util.*;

class SortProperties {
    @Property
    boolean sortIsIdempotent(@ForAll List<Integer> items) {
        var sorted = items.stream().sorted().toList();
        var sortedTwice = sorted.stream().sorted().toList();
        return sorted.equals(sortedTwice);
    }
}
```

**Besonderheiten:**
- jqwik ist das modernste PBT-Framework für Java
- `@Property` markiert Properties, `@ForAll` generiert Zufallswerte
- Automatisches Shrinking und komposable Generatoren
- Läuft auf der JUnit-Platform

**Weiterführende Links:**
- [jqwik Documentation](https://jqwik.net/)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Benötigt: fast-check-Bibliothek
import fc from 'fast-check';

fc.assert(
    fc.property(fc.array(fc.integer()), (items) => {
        const sorted = [...items].sort((a, b) => a - b);
        const sortedTwice = [...sorted].sort((a, b) => a - b);
        return JSON.stringify(sorted) === JSON.stringify(sortedTwice);
    })
);
```

**Besonderheiten:**
- fast-check ist die verbreitetste PBT-Bibliothek für JavaScript
- Umfangreiche eingebaute Generatoren (Arbitraries)
- Automatisches Shrinking von fehlgeschlagenen Eingaben
- Integration mit Jest, Mocha, Vitest und anderen Frameworks

**Weiterführende Links:**
- [fast-check Documentation](https://fast-check.dev/)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Benötigt: PropCheck.jl
using PropCheck

@check function sort_idempotent(items::Vector{Int})
    sorted = sort(items)
    sorted == sort(sorted)
end
```

**Besonderheiten:**
- `PropCheck.jl` ist die bekannteste PBT-Bibliothek für Julia
- Integration mit dem `Test`-Standardmodul
- Generatoren für gängige Julia-Typen
- Automatisches Shrinking

**Weiterführende Links:**
- [PropCheck.jl GitHub](https://github.com/Seelengrab/PropCheck.jl)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Benötigt: Kotest-Bibliothek
import io.kotest.property.forAll
import io.kotest.property.Arb
import io.kotest.property.arbitrary.list
import io.kotest.property.arbitrary.int

suspend fun main() {
    forAll(Arb.list(Arb.int())) { items ->
        val sorted = items.sorted()
        sorted == sorted.sorted()
    }
}
```

**Besonderheiten:**
- Kotest bietet eingebaute PBT-Unterstützung
- Komposable Generatoren (`Arb`) für Kotlin-Typen
- Automatisches Shrinking von fehlgeschlagenen Eingaben
- jqwik ist über die JUnit-Platform ebenfalls nutzbar

**Weiterführende Links:**
- [Kotest Property Testing](https://kotest.io/docs/proptest/property-based-testing.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Benötigt: rapid-Bibliothek
import rapid

proc sortIdempotent(items: seq[int]): bool =
  let sorted = items.sorted()
  sorted == sorted.sorted()

# Manueller Ansatz mit randomize
import std/random
randomize()
for i in 0..99:
  var items: seq[int]
  for j in 0..rand(20):
    items.add(rand(1000))
  assert items.sorted() == items.sorted().sorted()
```

**Besonderheiten:**
- PBT-Bibliotheken für Nim existieren, sind aber weniger verbreitet
- Manuelles randomisiertes Testing mit `std/random` als Alternative
- `rapid` ist eine PBT-Bibliothek inspiriert von Go's `rapid`
- Nim-Community ist kleiner, daher weniger ausgereifte PBT-Werkzeuge

**Weiterführende Links:**
- [Nim Documentation - random](https://nim-lang.org/docs/random.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Benötigt: qcheck oder qcheck-core opam-Paket *)
open QCheck

let sort_idempotent =
  Test.make ~name:"Sort ist idempotent"
    (list int) (fun items ->
      let sorted = List.sort compare items in
      sorted = List.sort compare sorted)

let () = QCheck_runner.run_tests_main [sort_idempotent]
```

**Besonderheiten:**
- QCheck ist die verbreitetste PBT-Bibliothek für OCaml
- Inspiriert von Haskells QuickCheck
- Automatisches Shrinking von fehlgeschlagenen Eingaben
- Integration mit Alcotest und OUnit möglich

**Weiterführende Links:**
- [QCheck on opam](https://ocaml.org/p/qcheck/latest)

</TabItem>
<TabItem value="purescript" label="PureScript">

```haskell
-- Benötigt: purescript-quickcheck
import Test.QuickCheck (quickCheck, (===))
import Data.Array (sort)

main :: Effect Unit
main = quickCheck \items ->
  sort (sort items) === sort (items :: Array Int)
```

**Besonderheiten:**
- `purescript-quickcheck` ist direkt von Haskells QuickCheck inspiriert
- `Arbitrary`-Typklasse für automatische Generatordefinition
- Automatisches Shrinking
- Integration mit PureScripts Effektsystem

**Weiterführende Links:**
- [purescript-quickcheck](https://pursuit.purescript.org/packages/purescript-quickcheck/)

</TabItem>
<TabItem value="python" label="Python">

```python
# Benötigt: hypothesis-Bibliothek
from hypothesis import given
from hypothesis.strategies import lists, integers

@given(lists(integers()))
def test_sort_idempotent(items):
    sorted_items = sorted(items)
    assert sorted_items == sorted(sorted_items)
```

**Besonderheiten:**
- Hypothesis ist die verbreitetste PBT-Bibliothek für Python
- `@given`-Dekorator generiert automatisch Testdaten
- Umfangreiche Strategien (Generatoren) für Python-Typen
- Speichert fehlgeschlagene Beispiele in einer Datenbank für Reproduzierbarkeit
- Automatisches Shrinking auf minimale Gegenbeispiele

**Weiterführende Links:**
- [Hypothesis Documentation](https://hypothesis.readthedocs.io/)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
;; Benötigt: rackcheck Paket
(require rackcheck rackunit)

(define-property sort-idempotent
  ([items (gen:list gen:natural)])
  (check-equal? (sort items <)
                (sort (sort items <) <)))
```

**Besonderheiten:**
- `rackcheck` ist die PBT-Bibliothek für Racket
- Integration mit rackunit für Assertions
- Komposable Generatoren (`gen:list`, `gen:natural` etc.)
- Automatisches Shrinking

**Weiterführende Links:**
- [rackcheck Documentation](https://docs.racket-lang.org/rackcheck/)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Benötigt: rantly gem
require 'rantly/minitest_extensions'

class SortTest < Minitest::Test
  def test_sort_idempotent
    property_of {
      array { integer }
    }.check { |items|
      sorted = items.sort
      assert_equal sorted, sorted.sort
    }
  end
end
```

**Besonderheiten:**
- `rantly` ist die bekannteste PBT-Bibliothek für Ruby
- Integration mit Minitest und RSpec
- Einfache Generator-DSL für Ruby-Typen
- Kein automatisches Shrinking (manuell implementierbar)

**Weiterführende Links:**
- [Rantly GitHub](https://github.com/rantly-rb/rantly)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Benötigt: proptest crate
use proptest::prelude::*;

proptest! {
    #[test]
    fn sort_idempotent(mut items: Vec<i32>) {
        items.sort();
        let sorted = items.clone();
        items.sort();
        prop_assert_eq!(sorted, items);
    }
}
```

**Besonderheiten:**
- `proptest` ist die verbreitetste PBT-Bibliothek für Rust
- Strategien-basierte Generatordefinition mit `any::<T>()`
- Automatisches Shrinking von fehlgeschlagenen Eingaben
- `quickcheck` Crate ist eine Alternative, näher am Haskell-Original

**Weiterführende Links:**
- [proptest Documentation](https://docs.rs/proptest/latest/proptest/)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Benötigt: ScalaCheck-Bibliothek
import org.scalacheck.Properties
import org.scalacheck.Prop.forAll

object SortSpec extends Properties("Sort") {
  property("idempotent") = forAll { (items: List[Int]) =>
    val sorted = items.sorted
    sorted == sorted.sorted
  }
}
```

**Besonderheiten:**
- ScalaCheck ist die Standardbibliothek für PBT in Scala
- Inspiriert von Haskells QuickCheck
- `Gen`-Monade für komposable Generatoren
- Automatisches Shrinking und Integration mit ScalaTest/MUnit

**Weiterführende Links:**
- [ScalaCheck Documentation](https://scalacheck.org/)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Benötigt: swift-testing (seit Swift 5.9)
import Testing

@Test(arguments: [
    [3, 1, 2],
    [5, 4, 3, 2, 1],
    [Int]()
])
func sortIdempotent(items: [Int]) {
    let sorted = items.sorted()
    #expect(sorted == sorted.sorted())
}

// Vollständiges PBT mit SwiftCheck:
// import SwiftCheck
// property("Sort ist idempotent") <- forAll { (items: [Int]) in
//     items.sorted() == items.sorted().sorted()
// }
```

**Besonderheiten:**
- Swift Testing bietet parametrisierte Tests, aber kein vollständiges PBT
- `SwiftCheck` ist eine dedizierte PBT-Bibliothek (inspiriert von QuickCheck)
- SwiftCheck bietet `Arbitrary`-Protokoll und automatisches Shrinking
- Swift Testing (`@Test(arguments:)`) ist für tabellengetriebene Tests geeignet

**Weiterführende Links:**
- [SwiftCheck GitHub](https://github.com/typelift/SwiftCheck)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Benötigt: fast-check-Bibliothek
import fc from 'fast-check';

fc.assert(
    fc.property(fc.array(fc.integer()), (items) => {
        const sorted = [...items].sort((a, b) => a - b);
        const sortedTwice = [...sorted].sort((a, b) => a - b);
        return JSON.stringify(sorted) === JSON.stringify(sortedTwice);
    })
);
```

**Besonderheiten:**
- Identisch zu JavaScript – fast-check bietet vollständige TypeScript-Typisierung
- Generatoren sind typisiert und bieten IntelliSense-Unterstützung
- Unterstützt generische Typen und komplexe Datenstrukturen
- Integration mit Jest, Vitest und anderen Frameworks

**Weiterführende Links:**
- [fast-check Documentation](https://fast-check.dev/)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```csharp
' Benötigt: FsCheck NuGet-Paket
<Property>
Public Function Sort_Is_Idempotent(items As Integer()) As Boolean
    Dim sorted = items.OrderBy(Function(x) x).ToArray()
    Dim sortedTwice = sorted.OrderBy(Function(x) x).ToArray()
    Return sorted.SequenceEqual(sortedTwice)
End Function
```

**Besonderheiten:**
- FsCheck ist auch aus VB.NET nutzbar (gleiche .NET-Bibliothek)
- Weniger verbreitet als in C# oder F#
- Identische Funktionalität wie die C#-Variante
- Integration über NUnit, xUnit oder MSTest

**Weiterführende Links:**
- [FsCheck Documentation](https://fscheck.github.io/FsCheck/)

</TabItem>
</Tabs>

## 18.1.4. Test-Annotationen

Test-Annotationen, Attribute oder Makros markieren Funktionen explizit als Tests und steuern deren Ausführung. Sie ermöglichen es dem Test-Runner, Testfunktionen automatisch zu erkennen, zu filtern und mit Metadaten zu versehen.

### Sprachen

<Tabs availableTabs={['csharp', 'd', 'dart', 'elixir', 'erlang', 'go', 'groovy', 'java', 'julia', 'kotlin', 'nim', 'odin', 'php', 'python', 'ruby', 'rust', 'scala', 'swift', 'v', 'vbnet', 'zig']} yellowTabs={['clojure', 'crystal', 'haskell', 'javascript', 'matlab', 'objective-c', 'octave', 'perl', 'prolog', 'racket', 'typescript']}>
<TabItem value="clojure" label="Clojure">

```clojure
(ns myapp.core-test
  (:require [clojure.test :refer [deftest is testing]]))

;; deftest definiert einen benannten Test
(deftest addition-test
  (is (= 4 (+ 2 2))))

;; testing gruppiert Assertions mit Beschreibung
(deftest math-test
  (testing "Addition"
    (is (= 4 (+ 2 2))))
  (testing "Subtraktion"
    (is (= 0 (- 2 2)))))
```

**Besonderheiten:**
- `deftest` ist ein Makro, das einen Test definiert und registriert
- Keine Annotation im klassischen Sinne – Clojure nutzt Makros statt Metadaten
- `testing` dient der Gruppierung innerhalb eines Tests
- Tests werden über Namenskonvention (Namespace endet auf `-test`) gefunden

**Weiterführende Links:**
- [Clojure Documentation - clojure.test](https://clojure.github.io/clojure/clojure.test-api.html)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
require "spec"

describe "Math" do
  it "addiert korrekt" do
    (2 + 2).should eq(4)
  end

  pending "noch nicht implementiert" do
    # Wird übersprungen
  end
end
```

**Besonderheiten:**
- Crystal nutzt `describe`/`it`-Blöcke statt Annotationen
- `pending` markiert Tests als übersprungen
- `before_each` und `after_each` für Setup/Teardown
- Keine Annotation im klassischen Sinne – BDD-Style über Makros

**Weiterführende Links:**
- [Crystal Documentation - Spec](https://crystal-lang.org/reference/1.11/guides/testing.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// MSTest
[TestClass]
public class MathTests
{
    [TestInitialize]
    public void Setup() { /* Vor jedem Test */ }

    [TestMethod]
    public void TestAddition() { Assert.AreEqual(4, 2 + 2); }

    [TestMethod]
    [Ignore("Noch nicht implementiert")]
    public void TestDivision() { }

    [DataTestMethod]
    [DataRow(1, 1, 2)]
    [DataRow(2, 3, 5)]
    public void TestAdd(int a, int b, int expected)
    {
        Assert.AreEqual(expected, a + b);
    }
}
```

**Besonderheiten:**
- `[TestMethod]` markiert Testmethoden, `[TestClass]` markiert Testklassen
- `[Ignore]` überspringt Tests mit optionaler Begründung
- `[DataTestMethod]`/`[DataRow]` für parametrisierte Tests
- `[TestInitialize]`/`[TestCleanup]` für Setup/Teardown
- xUnit nutzt `[Fact]`, `[Theory]`, `[InlineData]`; NUnit nutzt `[Test]`, `[TestCase]`

**Weiterführende Links:**
- [Microsoft Docs - MSTest Attributes](https://learn.microsoft.com/en-us/dotnet/core/testing/unit-testing-with-mstest)

</TabItem>
<TabItem value="d" label="D">

```d
// unittest-Blöcke als Sprach-Feature
int add(int a, int b) {
    return a + b;
}

unittest {
    assert(add(2, 2) == 4);
    assert(add(0, 0) == 0);
}

// Benannte Unit-Tests (seit DMD 2.077)
@("Addition Test")
unittest {
    assert(add(1, 1) == 2);
}
```

**Besonderheiten:**
- `unittest`-Blöcke sind ein Sprach-Feature, keine Annotation
- Benannte Unit-Tests mit `@("Name")` seit DMD 2.077
- Tests stehen direkt neben dem getesteten Code
- `@safe`, `@nogc` und andere Attribute können auf `unittest` angewendet werden

**Weiterführende Links:**
- [D Documentation - Unit Tests](https://dlang.org/spec/unittest.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
import 'package:test/test.dart';

void main() {
  test('Addition', () {
    expect(2 + 2, equals(4));
  });

  test('Division', skip: 'Noch nicht implementiert', () {
    // Wird übersprungen
  });

  group('Arithmetik', () {
    setUp(() { /* Vor jedem Test */ });
    tearDown(() { /* Nach jedem Test */ });

    test('Subtraktion', () {
      expect(3 - 1, equals(2));
    });
  });
}
```

**Besonderheiten:**
- Dart nutzt Funktionsaufrufe (`test`, `group`) statt Annotationen
- `skip`-Parameter markiert Tests als übersprungen
- `setUp`/`tearDown` für Setup/Teardown pro Gruppe
- `@isTest`- und `@isTestGroup`-Annotationen existieren für eigene Test-Wrapper

**Weiterführende Links:**
- [Dart Documentation - Testing](https://dart.dev/guides/testing)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
defmodule MathTest do
  use ExUnit.Case

  setup do
    %{value: 42}
  end

  test "Addition" do
    assert 2 + 2 == 4
  end

  @tag :skip
  test "noch nicht implementiert" do
    # Wird übersprungen
  end

  @tag :slow
  test "langsamer Test", %{value: value} do
    assert value == 42
  end
end
```

**Besonderheiten:**
- `test`-Makro definiert Testfälle
- `@tag`-Modul-Attribut annotiert Tests mit Metadaten
- `@tag :skip` überspringt Tests, benutzerdefinierte Tags für Filterung
- `setup`-Block stellt Kontext-Daten für Tests bereit
- `describe`-Makro gruppiert zusammengehörige Tests

**Weiterführende Links:**
- [Elixir Documentation - ExUnit](https://hexdocs.pm/ex_unit/ExUnit.Case.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
-module(math_test).
-include_lib("eunit/include/eunit.hrl").

%% Namenskonvention: _test() Suffix
addition_test() ->
    ?assertEqual(4, 2 + 2).

%% Test-Generator für Setup/Teardown
math_test_() ->
    {setup,
     fun() -> ok end,           %% Setup
     fun(_) -> ok end,          %% Teardown
     [fun addition_test/0]}.
```

**Besonderheiten:**
- EUnit nutzt `_test()`-Suffix als Namenskonvention statt Annotationen
- `_test_()`-Suffix (mit Unterstrich am Ende) für Test-Generatoren
- Test-Generatoren ermöglichen Setup/Teardown und Gruppierung
- `?_test`-Makro als Alternative zur Namenskonvention

**Weiterführende Links:**
- [Erlang Documentation - EUnit](https://www.erlang.org/doc/apps/eunit/chapter.html)

</TabItem>
<TabItem value="go" label="Go">

```go
package math

import "testing"

// Namenskonvention: Test-Präfix
func TestAddition(t *testing.T) {
    if 2+2 != 4 {
        t.Error("Addition fehlgeschlagen")
    }
}

// Subtest
func TestMath(t *testing.T) {
    t.Run("Addition", func(t *testing.T) {
        if 2+2 != 4 {
            t.Fatal("Fehlgeschlagen")
        }
    })
}

func TestSkipped(t *testing.T) {
    t.Skip("Noch nicht implementiert")
}
```

**Besonderheiten:**
- Go nutzt `Test`-Präfix als Namenskonvention statt Annotationen
- `t.Skip()` überspringt Tests, `t.Run()` definiert Subtests
- `Benchmark`-Präfix für Benchmarks, `Fuzz`-Präfix für Fuzzing (seit Go 1.18)
- `TestMain` für globales Setup/Teardown

**Weiterführende Links:**
- [Go Documentation - testing](https://pkg.go.dev/testing)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
import org.junit.jupiter.api.*

class MathTests {
    @BeforeEach
    void setup() { /* Vor jedem Test */ }

    @Test
    void testAddition() {
        assert 2 + 2 == 4
    }

    @Test
    @Disabled("Noch nicht implementiert")
    void testDivision() { }

    @ParameterizedTest
    @ValueSource(ints = [1, 2, 3])
    void testPositive(int value) {
        assert value > 0
    }
}
```

**Besonderheiten:**
- Groovy nutzt JUnit-Annotationen (JUnit 5 oder JUnit 4)
- `@Test` markiert Testmethoden, `@Disabled` überspringt sie
- `@BeforeEach`/`@AfterEach` für Setup/Teardown
- `@ParameterizedTest` mit verschiedenen Quellen für parametrisierte Tests
- Spock-Framework nutzt eigene DSL statt Annotationen

**Weiterführende Links:**
- [Groovy Documentation - Testing](https://groovy-lang.org/testing.html)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Benötigt: tasty und tasty-hunit
import Test.Tasty
import Test.Tasty.HUnit

tests :: TestTree
tests = testGroup "Math"
  [ testCase "Addition" $ 2 + 2 @?= 4
  , testCase "Subtraktion" $ 3 - 1 @?= 2
  ]

main :: IO ()
main = defaultMain tests
```

**Besonderheiten:**
- Haskell nutzt keine Annotationen – Tests werden als Werte definiert
- `testCase`, `testGroup` als Konstruktoren für Test-Bäume
- `Tasty` ist das verbreitetste Test-Framework mit modularer Architektur
- HSpec bietet eine BDD-ähnliche DSL als Alternative

**Weiterführende Links:**
- [Tasty Documentation](https://hackage.haskell.org/package/tasty)

</TabItem>
<TabItem value="java" label="Java">

```java
import org.junit.jupiter.api.*;
import org.junit.jupiter.params.*;
import org.junit.jupiter.params.provider.*;

class MathTests {
    @BeforeEach
    void setup() { /* Vor jedem Test */ }

    @Test
    void testAddition() { assertEquals(4, 2 + 2); }

    @Test
    @Disabled("Noch nicht implementiert")
    void testDivision() { }

    @ParameterizedTest
    @CsvSource({"1, 1, 2", "2, 3, 5"})
    void testAdd(int a, int b, int expected) {
        assertEquals(expected, a + b);
    }

    @RepeatedTest(5)
    void testRepeated() { assertTrue(Math.random() >= 0); }
}
```

**Besonderheiten:**
- `@Test` (JUnit 5) markiert Testmethoden
- `@Disabled` überspringt Tests, `@Tag` gruppiert sie für Filterung
- `@BeforeEach`/`@AfterEach` für Setup/Teardown, `@BeforeAll`/`@AfterAll` pro Klasse
- `@ParameterizedTest` mit verschiedenen Quellen (`@ValueSource`, `@CsvSource`, `@MethodSource`)
- `@RepeatedTest` führt einen Test mehrfach aus
- JUnit 4 nutzt `@Before`/`@After`/`@Ignore` (ältere API)

**Weiterführende Links:**
- [JUnit 5 Documentation - Annotations](https://junit.org/junit5/docs/current/user-guide/#writing-tests-annotations)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
import { describe, it, before, after } from 'node:test';
import assert from 'node:assert';

describe('Math', () => {
    before(() => { /* Einmaliges Setup */ });
    after(() => { /* Einmaliges Teardown */ });

    it('addiert korrekt', () => {
        assert.strictEqual(2 + 2, 4);
    });

    it.skip('noch nicht implementiert', () => {
        // Wird übersprungen
    });

    it.todo('Division implementieren');
});
```

**Besonderheiten:**
- JavaScript nutzt Funktionsaufrufe statt Annotationen
- `it.skip()` überspringt Tests, `it.todo()` markiert ausstehende Tests
- `before`/`after`/`beforeEach`/`afterEach` für Setup/Teardown
- `describe` gruppiert zusammengehörige Tests
- Pattern ist identisch in Jest, Mocha, Vitest etc.

**Weiterführende Links:**
- [Node.js Documentation - Test Runner](https://nodejs.org/api/test.html)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
using Test

@testset "Math" begin
    @test 2 + 2 == 4
    @test 3 - 1 == 2

    @test_skip 1 / 0  # Test wird übersprungen

    @test_throws DomainError sqrt(-1)
end
```

**Besonderheiten:**
- `@test` markiert einzelne Assertions, `@testset` gruppiert sie
- `@test_skip` überspringt Tests, `@test_throws` prüft Exceptions
- `@test_broken` markiert bekanntermaßen fehlerhafte Tests
- Makros statt Annotationen – Julia-idiomatischer Ansatz

**Weiterführende Links:**
- [Julia Documentation - Test](https://docs.julialang.org/en/v1/stdlib/Test/)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
import kotlin.test.*

class MathTests {
    @BeforeTest
    fun setup() { /* Vor jedem Test */ }

    @Test
    fun testAddition() { assertEquals(4, 2 + 2) }

    @Test
    @Ignore
    fun testDivision() { /* Wird übersprungen */ }
}

// Auf JVM auch JUnit 5 Annotationen nutzbar:
// @ParameterizedTest, @ValueSource, @Disabled etc.
```

**Besonderheiten:**
- `@Test`, `@BeforeTest`, `@AfterTest` aus `kotlin.test` (plattformunabhängig)
- `@Ignore` überspringt Tests
- Auf der JVM sind alle JUnit-5-Annotationen zusätzlich nutzbar
- `kotlin.test` abstrahiert über JUnit (JVM), QUnit (JS) und native Tests

**Weiterführende Links:**
- [Kotlin Documentation - kotlin.test](https://kotlinlang.org/api/latest/kotlin.test/)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
classdef MathTests < matlab.unittest.TestCase
    methods (TestMethodSetup)
        function setup(testCase)
            % Vor jedem Test
        end
    end

    methods (Test)
        function testAddition(testCase)
            testCase.verifyEqual(2 + 2, 4);
        end
    end

    methods (Test, TestTags = {'slow'})
        function testSlow(testCase)
            testCase.verifyTrue(true);
        end
    end
end
```

**Besonderheiten:**
- MATLAB nutzt `methods (Test)`-Blöcke statt einzelne Annotationen
- `TestTags` ermöglichen Filterung bei der Ausführung
- `TestMethodSetup`/`TestMethodTeardown` für Setup/Teardown
- `TestClassSetup`/`TestClassTeardown` für klassenweites Setup

**Weiterführende Links:**
- [MathWorks Documentation - Test Tags](https://www.mathworks.com/help/matlab/matlab_prog/tag-unit-tests.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
import unittest

suite "Math":
  setup:
    # Vor jedem Test
    discard

  teardown:
    # Nach jedem Test
    discard

  test "Addition":
    check 2 + 2 == 4

  test "Subtraktion":
    skip()  # Test wird übersprungen
```

**Besonderheiten:**
- `suite` und `test` sind Makros, keine Annotationen
- `setup`/`teardown` innerhalb einer Suite für Setup/Teardown
- `skip()` überspringt einen Test
- `check` und `require` als Assert-Funktionen im Testkontext

**Weiterführende Links:**
- [Nim Documentation - unittest](https://nim-lang.org/docs/unittest.html)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objectivec
@interface MathTests : XCTestCase
@end

@implementation MathTests

- (void)setUp {
    [super setUp];
    // Vor jedem Test
}

- (void)testAddition {
    XCTAssertEqual(2 + 2, 4);
}

- (void)testPerformanceExample {
    [self measureBlock:^{
        // Performance-Messung
    }];
}

@end
```

**Besonderheiten:**
- XCTest nutzt `test`-Methodenpräfix als Konvention statt Annotationen
- `setUp`/`tearDown` für Setup/Teardown
- `measureBlock:` für Performance-Tests
- Xcode erkennt Tests automatisch über Reflexion

**Weiterführende Links:**
- [Apple Documentation - XCTest](https://developer.apple.com/documentation/xctest)

</TabItem>
<TabItem value="octave" label="Octave">

```matlab
function result = add(a, b)
  result = a + b;
endfunction

%!test
%! assert(add(2, 2), 4);

%!test
%! assert(add(0, 0), 0);

%!xtest
%! % Bekanntermaßen fehlerhafter Test
%! assert(1 == 2);
```

**Besonderheiten:**
- `%!test` markiert Testblöcke direkt in der Quelldatei
- `%!xtest` markiert bekanntermaßen fehlerhafte Tests (expected failure)
- `%!assert` für einzelne Assertions ohne Testblock
- Keine klassischen Annotationen – eingebettete Kommentar-Direktiven

**Weiterführende Links:**
- [GNU Octave Documentation - Test Functions](https://docs.octave.org/latest/Test-Functions.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
package math_test

import "core:testing"

@(test)
test_addition :: proc(t: ^testing.T) {
    testing.expect_value(t, 2 + 2, 4)
}

@(test)
test_subtraction :: proc(t: ^testing.T) {
    testing.expect_value(t, 3 - 1, 2)
}
```

**Besonderheiten:**
- `@(test)` ist ein echtes Sprach-Attribut zur Markierung von Tests
- Testfunktionen erhalten einen `^testing.T`-Parameter
- Ausführung mit `odin test`
- Odin hat eines der saubersten Attribut-basierten Test-Systeme

**Weiterführende Links:**
- [Odin Documentation - Testing](https://odin-lang.org/docs/overview/#testing)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
use Test::More tests => 3;

# Kein Annotations-System – Tests sind sequenzielle Aufrufe
ok(2 + 2 == 4, 'Addition');
is(2 + 2, 4, 'Addition mit is');

SKIP: {
    skip "Noch nicht implementiert", 1;
    ok(0, 'Übersprungener Test');
}

done_testing();
```

**Besonderheiten:**
- Perl nutzt keine Annotationen – TAP-basierte sequenzielle Tests
- `SKIP`-Block überspringt Tests mit Begründung
- `TODO`-Block markiert erwartete Fehler
- Test-Dateien werden über Namenskonvention (`t/*.t`) gefunden

**Weiterführende Links:**
- [Perl Documentation - Test::More](https://perldoc.perl.org/Test::More)

</TabItem>
<TabItem value="php" label="PHP">

```php
// PHPUnit
use PHPUnit\Framework\TestCase;
use PHPUnit\Framework\Attributes\Test;
use PHPUnit\Framework\Attributes\DataProvider;

class MathTest extends TestCase
{
    protected function setUp(): void { /* Vor jedem Test */ }

    #[Test]
    public function addition(): void {
        $this->assertEquals(4, 2 + 2);
    }

    #[Test]
    #[DataProvider('additionProvider')]
    public function addParameterized(int $a, int $b, int $expected): void {
        $this->assertEquals($expected, $a + $b);
    }

    public static function additionProvider(): array {
        return [[1, 1, 2], [2, 3, 5]];
    }
}
```

**Besonderheiten:**
- PHPUnit 10+ nutzt PHP 8 Attribute: `#[Test]`, `#[DataProvider]`, `#[Depends]`
- Ältere Versionen nutzten `@test`, `@dataProvider` als Doc-Comment-Annotationen
- `#[Test]` als Alternative zum `test`-Methodenpräfix
- `setUp()`/`tearDown()` für Setup/Teardown
- `markTestSkipped()` und `markTestIncomplete()` steuern Testausführung

**Weiterführende Links:**
- [PHPUnit Documentation - Attributes](https://docs.phpunit.de/en/11.5/attributes.html)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
%% Benötigt: :- use_module(library(plunit)).
:- begin_tests(math).

test(addition) :-
    X is 2 + 2,
    assertion(X == 4).

test(division, [blocked('Noch nicht implementiert')]) :-
    true.

test(exception, [throws(error(type_error(_,_), _))]) :-
    _ is 1 + a.

test(with_setup, [setup(X = 42), cleanup(true)]) :-
    assertion(X > 0).

:- end_tests(math).
```

**Besonderheiten:**
- SWI-Prologs `plunit` nutzt `test/1` und `test/2` mit Optionsliste zur Testmarkierung
- Optionen statt Annotationen: `blocked(Reason)`, `fixme(Reason)`, `condition(Goal)`, `throws(Error)`
- `setup(Goal)` und `cleanup(Goal)` als Optionen für Setup/Teardown pro Test
- `:- begin_tests(Name).` / `:- end_tests(Name).` gruppieren Tests als Direktiven
- Kein Annotationssystem im klassischen Sinne – Prolog nutzt Terme als Metadaten

**Weiterführende Links:**
- [SWI-Prolog Documentation - PlUnit](https://www.swi-prolog.org/pldoc/doc_for?object=section(%27packages/plunit.html%27))

</TabItem>
<TabItem value="python" label="Python">

```python
import unittest
import pytest

# unittest: Namenskonvention
class MathTest(unittest.TestCase):
    def setUp(self):
        pass  # Vor jedem Test

    def test_addition(self):
        self.assertEqual(2 + 2, 4)

    @unittest.skip("Noch nicht implementiert")
    def test_division(self):
        pass

# pytest: Dekoratoren
@pytest.mark.skip(reason="Noch nicht implementiert")
def test_skipped():
    pass

@pytest.mark.parametrize("a, b, expected", [(1, 1, 2), (2, 3, 5)])
def test_add(a, b, expected):
    assert a + b == expected
```

**Besonderheiten:**
- `unittest`: `@unittest.skip`, `@unittest.skipIf`, `@unittest.expectedFailure`
- `pytest`: `@pytest.mark.skip`, `@pytest.mark.parametrize`, `@pytest.mark.xfail`
- `pytest` nutzt Funktionen mit `test_`-Präfix und Dekoratoren
- `pytest.fixture` für Setup/Teardown mit Dependency Injection

**Weiterführende Links:**
- [Python Documentation - unittest](https://docs.python.org/3/library/unittest.html)
- [pytest Documentation - Markers](https://docs.pytest.org/en/stable/how-to/mark.html)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
(require rackunit)

(test-suite "Math"
  (test-case "Addition"
    (check-equal? (+ 2 2) 4))
  (test-case "Subtraktion"
    (check-equal? (- 3 1) 2)))

;; before/after für Setup/Teardown
(test-suite "Mit Setup"
  #:before (lambda () (displayln "Setup"))
  #:after (lambda () (displayln "Teardown"))
  (test-case "Test" (check-true #t)))
```

**Besonderheiten:**
- `test-case` und `test-suite` als Funktionsaufrufe statt Annotationen
- `#:before`/`#:after` für Setup/Teardown auf Suite-Ebene
- `around` für Setup/Teardown auf Test-Ebene
- Tests werden mit `raco test` ausgeführt

**Weiterführende Links:**
- [Racket Documentation - RackUnit](https://docs.racket-lang.org/rackunit/)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
require "minitest/autorun"

class MathTest < Minitest::Test
  def setup
    # Vor jedem Test
  end

  def test_addition
    assert_equal 4, 2 + 2
  end

  def test_skip_example
    skip "Noch nicht implementiert"
  end
end

# Spec-Style
describe "Math" do
  before { } # Vor jedem Test

  it "addiert korrekt" do
    _(2 + 2).must_equal 4
  end
end
```

**Besonderheiten:**
- Minitest: `test_`-Präfix als Namenskonvention statt Annotationen
- `setup`/`teardown` für Setup/Teardown
- `skip` innerhalb eines Tests zum Überspringen
- Spec-Style mit `describe`/`it` als Alternative

**Weiterführende Links:**
- [Ruby Documentation - Minitest](https://ruby-doc.org/stdlib/libdoc/minitest/rdoc/Minitest.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_addition() {
        assert_eq!(2 + 2, 4);
    }

    #[test]
    #[ignore]
    fn test_slow() {
        // Wird nur mit `cargo test -- --ignored` ausgeführt
    }

    #[test]
    #[should_panic(expected = "Division by zero")]
    fn test_panic() {
        panic!("Division by zero");
    }
}
```

**Besonderheiten:**
- `#[test]` markiert Testfunktionen
- `#[ignore]` überspringt Tests (ausführbar mit `--ignored`)
- `#[should_panic]` erwartet einen Panic mit optionaler Nachricht
- `#[cfg(test)]` markiert Module, die nur beim Testen kompiliert werden
- Kein eingebautes Setup/Teardown – eigene Hilfsfunktionen oder Fixtures-Crates

**Weiterführende Links:**
- [Rust Documentation - Test Attributes](https://doc.rust-lang.org/reference/attributes/testing.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// MUnit
class MathSuite extends munit.FunSuite {
  override def beforeEach(context: BeforeEach): Unit = {
    // Vor jedem Test
  }

  test("Addition") { assertEquals(2 + 2, 4) }

  test("Division".ignore) { /* Wird übersprungen */ }

  test("Subtraktion".tag(Slow)) { assertEquals(3 - 1, 2) }
}
```

**Besonderheiten:**
- MUnit und ScalaTest nutzen DSL-Methoden statt Java-Annotationen
- `.ignore` überspringt Tests, `.tag()` annotiert mit Metadaten
- `override def beforeEach`/`afterEach` für Setup/Teardown
- JUnit-Annotationen (`@Test`) sind auf der JVM ebenfalls nutzbar

**Weiterführende Links:**
- [MUnit Documentation](https://scalameta.org/munit/)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
import Testing

// Swift Testing (seit Swift 5.9)
@Test func addition() {
    #expect(2 + 2 == 4)
}

@Test(.disabled("Noch nicht implementiert"))
func division() { }

@Test(.tags(.slow))
func slowTest() { #expect(true) }

@Suite struct MathTests {
    @Test(arguments: [1, 2, 3])
    func positive(value: Int) {
        #expect(value > 0)
    }
}
```

**Besonderheiten:**
- `@Test` markiert Testfunktionen, `@Suite` markiert Test-Suites (Swift Testing)
- `.disabled()` überspringt Tests, `.tags()` annotiert mit Metadaten
- `@Test(arguments:)` für parametrisierte Tests
- XCTest (ältere API): `test`-Methodenpräfix, `setUp()`/`tearDown()`

**Weiterführende Links:**
- [Apple Documentation - Swift Testing](https://developer.apple.com/documentation/testing)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
import { describe, it, before, after } from 'node:test';
import assert from 'node:assert';

describe('Math', () => {
    before(() => { /* Einmaliges Setup */ });
    after(() => { /* Einmaliges Teardown */ });

    it('addiert korrekt', () => {
        assert.strictEqual(2 + 2, 4);
    });

    it.skip('noch nicht implementiert', () => {
        // Wird übersprungen
    });

    it.todo('Division implementieren');
});
```

**Besonderheiten:**
- Identisch zu JavaScript – nutzt Funktionsaufrufe statt Annotationen
- `it.skip()` überspringt Tests, `it.todo()` markiert ausstehende Tests
- In der Praxis: Jest/Vitest bieten identisches API
- TypeScript-spezifisch: Typisierte Mocks und Assertions über externe Bibliotheken

**Weiterführende Links:**
- [Node.js Documentation - Test Runner](https://nodejs.org/api/test.html)

</TabItem>
<TabItem value="v" label="V">

```v
fn test_addition() {
    assert 2 + 2 == 4
}

fn test_subtraction() {
    assert 3 - 1 == 2
}
```

**Besonderheiten:**
- V nutzt `test_`-Präfix als Namenskonvention statt Annotationen
- Testdateien enden auf `_test.v`
- Keine Skip/Ignore-Annotation – Tests sind entweder vorhanden oder nicht
- Kein eingebautes Setup/Teardown-System

**Weiterführende Links:**
- [V Documentation - Testing](https://github.com/vlang/v/blob/master/doc/docs.md#testing)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```csharp
' MSTest
<TestClass>
Public Class MathTests
    <TestInitialize>
    Public Sub Setup()
        ' Vor jedem Test
    End Sub

    <TestMethod>
    Public Sub TestAddition()
        Assert.AreEqual(4, 2 + 2)
    End Sub

    <TestMethod>
    <Ignore("Noch nicht implementiert")>
    Public Sub TestDivision()
    End Sub

    <DataTestMethod>
    <DataRow(1, 1, 2)>
    <DataRow(2, 3, 5)>
    Public Sub TestAdd(a As Integer, b As Integer, expected As Integer)
        Assert.AreEqual(expected, a + b)
    End Sub
End Class
```

**Besonderheiten:**
- Identisch zu C# – MSTest-Attribute in VB.NET-Syntax mit `< >`
- `<TestMethod>`, `<Ignore>`, `<DataTestMethod>`, `<DataRow>`
- `<TestInitialize>`/`<TestCleanup>` für Setup/Teardown
- xUnit und NUnit sind ebenfalls verfügbar

**Weiterführende Links:**
- [Microsoft Docs - MSTest](https://learn.microsoft.com/en-us/dotnet/core/testing/unit-testing-with-mstest)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
const std = @import("std");

test "Addition" {
    try std.testing.expectEqual(@as(i32, 4), 2 + 2);
}

test "Subtraktion" {
    try std.testing.expectEqual(@as(i32, 2), 3 - 1);
}

// Tests können übersprungen werden durch return error
test "übersprungen" {
    return error.SkipZigTest;
}
```

**Besonderheiten:**
- `test`-Blöcke sind ein Sprach-Feature, keine Annotation
- Kein Skip-Attribut – Überspringen durch `return error.SkipZigTest`
- Tests können benannt werden mit String-Literal
- Kein eingebautes Setup/Teardown – aber `defer` und `errdefer` als Alternative

**Weiterführende Links:**
- [Zig Documentation - Testing](https://ziglang.org/documentation/master/#Zig-Test)

</TabItem>
</Tabs>

