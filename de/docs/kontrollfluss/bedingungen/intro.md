---
slug: /kontrollfluss/bedingungen
title: 6.1. Bedingungen
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 6.1. Bedingungen

Bedingte Ausführung von Code.

## 6.1.1. If-Else Statements

Bedingte Ausführung von Code basierend auf einer Bedingung. Ermöglicht es, unterschiedliche Code-Pfade je nach Wahrheitswert einer Bedingung auszuführen.

### Sprachen {#sprachen}

<Tabs availableTabs={['ada', 'c', 'carbon', 'clojure', 'common-lisp', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'eiffel', 'elixir', 'elm', 'erlang', 'fsharp', 'fortran', 'gleam', 'go', 'groovy', 'haskell', 'haxe', 'idris', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'lua', 'matlab', 'mercury', 'mojo', 'nim', 'objective-c', 'object-pascal', 'ocaml', 'octave', 'odin', 'perl', 'php', 'prolog', 'purescript', 'python', 'r', 'racket', 'roc', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'vbnet', 'v', 'wolfram-language', 'zig']}>
<TabItem value="ada" label="Ada">

```ada
-- If-Else Statement
if temperature > 30 then
    result := "Heiß";
elsif temperature > 20 then
    result := "Warm";
else
    result := "Kalt";
end if;
```

**Besonderheiten:**
- Verwendet `elsif` statt `else if`
- Muss mit `end if` abgeschlossen werden

**Weiterführende Links:**
- [Ada Reference Manual - If Statements](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-5-3.html)

</TabItem>
<TabItem value="c" label="C">

```c
// If-Else Statement
if (temperature > 30) {
    result = "Heiß";
} else if (temperature > 20) {
    result = "Warm";
} else {
    result = "Kalt";
}
```

**Besonderheiten:**
- Klammern um die Bedingung sind erforderlich
- Geschweifte Klammern können bei einzelnen Statements weggelassen werden, werden aber empfohlen

**Weiterführende Links:**
- [C Standard - Conditional Statements](https://en.cppreference.com/w/c/language/if)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// If-Else Statement
if (temperature > 30) {
    result = "Heiß";
} else if (temperature > 20) {
    result = "Warm";
} else {
    result = "Kalt";
}
```

**Besonderheiten:**
- Experimentelle Sprache, Syntax kann sich noch ändern
- C++-ähnliche Syntax

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; If-Else Statement
(def result
  (if (> temperature 30)
    "Heiß"
    (if (> temperature 20)
      "Warm"
      "Kalt")))
```

**Besonderheiten:**
- `if` ist ein Ausdruck, der einen Wert zurückgibt
- Keine explizite `else`-Klausel, der zweite Parameter ist der else-Zweig
- Für mehrere Bedingungen wird `cond` verwendet

**Weiterführende Links:**
- [Clojure Documentation - Conditionals](https://clojure.org/reference/special_forms#if)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; If-Else Statement
(if (> temperature 30)
    (setf result "Heiß")
    (if (> temperature 20)
        (setf result "Warm")
        (setf result "Kalt")))
```

**Besonderheiten:**
- `if` ist ein Ausdruck mit zwei Zweigen (then und else)
- Für mehrere Bedingungen wird `cond` verwendet

**Weiterführende Links:**
- [Common Lisp HyperSpec - If](http://www.lispworks.com/documentation/HyperSpec/Body/s_if.htm)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// If-Else Statement
if (temperature > 30) {
    result = "Heiß";
} else if (temperature > 20) {
    result = "Warm";
} else {
    result = "Kalt";
}
```

**Besonderheiten:**
- Klammern um die Bedingung sind erforderlich
- Geschweifte Klammern können bei einzelnen Statements weggelassen werden, werden aber empfohlen

**Weiterführende Links:**
- [cppreference.com - If statement](https://en.cppreference.com/w/cpp/language/if)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# If-Else Statement
if temperature > 30
  result = "Heiß"
elsif temperature > 20
  result = "Warm"
else
  result = "Kalt"
end
```

**Besonderheiten:**
- Verwendet `elsif` statt `else if`
- Muss mit `end` abgeschlossen werden
- Klammern um die Bedingung sind optional

**Weiterführende Links:**
- [Crystal Documentation - If](https://crystal-lang.org/reference/1.11/syntax_and_semantics/if.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// If-Else Statement
if (temperature > 30) {
    result = "Heiß";
} else if (temperature > 20) {
    result = "Warm";
} else {
    result = "Kalt";
}
```

**Besonderheiten:**
- Klammern um die Bedingung sind erforderlich
- Geschweifte Klammern können bei einzelnen Statements weggelassen werden, werden aber empfohlen

**Weiterführende Links:**
- [Microsoft C# Documentation - if-else](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/statements/selection-statements#the-if-statement)

</TabItem>
<TabItem value="d" label="D">

```d
// If-Else Statement
if (temperature > 30) {
    result = "Heiß";
} else if (temperature > 20) {
    result = "Warm";
} else {
    result = "Kalt";
}
```

**Besonderheiten:**
- Klammern um die Bedingung sind erforderlich
- Geschweifte Klammern können bei einzelnen Statements weggelassen werden

**Weiterführende Links:**
- [D Language Specification - If Statement](https://dlang.org/spec/statement.html#if_statement)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// If-Else Statement
if (temperature > 30) {
  result = "Heiß";
} else if (temperature > 20) {
  result = "Warm";
} else {
  result = "Kalt";
}
```

**Besonderheiten:**
- Klammern um die Bedingung sind erforderlich
- Geschweifte Klammern können bei einzelnen Statements weggelassen werden

**Weiterführende Links:**
- [Dart Language Tour - If and else](https://dart.dev/guides/language/language-tour#if-and-else)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
-- If-Else Statement
if temperature > 30 then
    result := "Heiß"
elseif temperature > 20 then
    result := "Warm"
else
    result := "Kalt"
end
```

**Besonderheiten:**
- Verwendet `elseif` statt `else if`
- Muss mit `end` abgeschlossen werden

**Weiterführende Links:**
- [Eiffel Documentation - Control Structures](https://www.eiffel.org/doc/eiffel/Control_Structures)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# If-Else Statement
result = if temperature > 30 do
  "Heiß"
else
  if temperature > 20 do
    "Warm"
  else
    "Kalt"
  end
end
```

**Besonderheiten:**
- `if` ist ein Ausdruck, der einen Wert zurückgibt
- Muss mit `end` abgeschlossen werden
- Für mehrere Bedingungen wird `cond` verwendet

**Weiterführende Links:**
- [Elixir Documentation - if and unless](https://hexdocs.pm/elixir/Kernel.html#if/2)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- If-Else Statement
result = if temperature > 30 then
    "Heiß"
else if temperature > 20 then
    "Warm"
else
    "Kalt"
```

**Besonderheiten:**
- `if` ist ein Ausdruck, der einen Wert zurückgibt
- Muss immer einen `else`-Zweig haben
- Keine geschweiften Klammern

**Weiterführende Links:**
- [Elm Documentation - If Expressions](https://guide.elm-lang.org/core_language.html#if-expressions)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% If-Else Statement
Result = if
    Temperature > 30 -> "Heiß";
    Temperature > 20 -> "Warm";
    true -> "Kalt"
end.
```

**Besonderheiten:**
- `if` ist ein Ausdruck mit mehreren Guard-Klauseln
- Muss immer eine `true`-Klausel als Fallback haben
- Jede Klausel endet mit Semikolon, die letzte mit Punkt

**Weiterführende Links:**
- [Erlang Documentation - If Expressions](https://www.erlang.org/doc/reference_manual/expressions.html#if-expressions)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// If-Else Statement
let result = if temperature > 30 then
    "Heiß"
else if temperature > 20 then
    "Warm"
else
    "Kalt"
```

**Besonderheiten:**
- `if` ist ein Ausdruck, der einen Wert zurückgibt
- Muss immer einen `else`-Zweig haben
- Keine geschweiften Klammern

**Weiterführende Links:**
- [F# Documentation - Conditional Expressions](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/conditional-expressions-if-then-else)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! If-Else Statement
if (temperature > 30) then
    result = "Heiß"
else if (temperature > 20) then
    result = "Warm"
else
    result = "Kalt"
end if
```

**Besonderheiten:**
- Verwendet `else if` (mit Leerzeichen)
- Muss mit `end if` abgeschlossen werden

**Weiterführende Links:**
- [Fortran Standard - IF Statement](https://gcc.gnu.org/onlinedocs/gfortran/IF-statement.html)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// Bedingungen über case-Ausdrücke
let temperature = 25
let result = case temperature {
  t if t > 30 -> "Heiß"
  t if t > 20 -> "Warm"
  _ -> "Kalt"
}
```

**Besonderheiten:**
- Gleam nutzt `case`-Ausdrücke mit Guards für Bedingungen
- `case` ist ein Ausdruck, der einen Wert zurückgibt
- Guards werden mit `if` nach dem Pattern angegeben
- Unklarheit bei `if`-Syntax - manuelle Prüfung nötig, ob neuere Gleam-Versionen `if`-Ausdrücke unterstützen

**Weiterführende Links:**
- [Gleam Documentation - Case Expressions](https://tour.gleam.run/flow-control/case-expressions/)

</TabItem>
<TabItem value="go" label="Go">

```go
// If-Else Statement
if temperature > 30 {
    result = "Heiß"
} else if temperature > 20 {
    result = "Warm"
} else {
    result = "Kalt"
}
```

**Besonderheiten:**
- Klammern um die Bedingung sind erforderlich
- Geschweifte Klammern sind erforderlich

**Weiterführende Links:**
- [Go Documentation - If](https://go.dev/ref/spec#If_statements)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// If-Else Statement
if (temperature > 30) {
    result = "Heiß"
} else if (temperature > 20) {
    result = "Warm"
} else {
    result = "Kalt"
}
```

**Besonderheiten:**
- Klammern um die Bedingung sind optional
- Geschweifte Klammern können bei einzelnen Statements weggelassen werden

**Weiterführende Links:**
- [Groovy Documentation - Conditional Structures](https://groovy-lang.org/semantics.html#_conditional_structures)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- If-Else Statement
result = if temperature > 30
    then "Heiß"
    else if temperature > 20
        then "Warm"
        else "Kalt"
```

**Besonderheiten:**
- `if` ist ein Ausdruck, der einen Wert zurückgibt
- Muss immer einen `else`-Zweig haben
- Für mehrere Bedingungen wird Pattern Matching oder Guards verwendet

**Weiterführende Links:**
- [Haskell Documentation - If Expressions](https://www.haskell.org/onlinereport/haskell2010/haskellch3.html#x8-380003.13)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// If-Else Statement
if (temperature > 30) {
    result = "Heiß";
} else if (temperature > 20) {
    result = "Warm";
} else {
    result = "Kalt";
}
```

**Besonderheiten:**
- Klammern um die Bedingung sind erforderlich
- Geschweifte Klammern können bei einzelnen Statements weggelassen werden

**Weiterführende Links:**
- [Haxe Documentation - If](https://haxe.org/manual/expression-if.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- If-Else Statement
result = if temperature > 30
    then "Heiß"
    else if temperature > 20
        then "Warm"
        else "Kalt"
```

**Besonderheiten:**
- `if` ist ein Ausdruck, der einen Wert zurückgibt
- Muss immer einen `else`-Zweig haben

**Weiterführende Links:**
- [Idris Documentation - Conditionals](https://idris2.readthedocs.io/en/latest/tutorial/starting.html#conditionals)

</TabItem>
<TabItem value="java" label="Java">

```java
// If-Else Statement
if (temperature > 30) {
    result = "Heiß";
} else if (temperature > 20) {
    result = "Warm";
} else {
    result = "Kalt";
}
```

**Besonderheiten:**
- Klammern um die Bedingung sind erforderlich
- Geschweifte Klammern können bei einzelnen Statements weggelassen werden, werden aber empfohlen

**Weiterführende Links:**
- [Oracle Java Documentation - The if-then and if-then-else Statements](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/if.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// If-Else Statement
if (temperature > 30) {
    result = "Heiß";
} else if (temperature > 20) {
    result = "Warm";
} else {
    result = "Kalt";
}
```

**Besonderheiten:**
- Klammern um die Bedingung sind erforderlich
- Geschweifte Klammern können bei einzelnen Statements weggelassen werden, werden aber empfohlen

**Weiterführende Links:**
- [MDN Web Docs - if...else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# If-Else Statement
if temperature > 30
    result = "Heiß"
elseif temperature > 20
    result = "Warm"
else
    result = "Kalt"
end
```

**Besonderheiten:**
- Verwendet `elseif` statt `else if`
- Muss mit `end` abgeschlossen werden
- Klammern um die Bedingung sind optional

**Weiterführende Links:**
- [Julia Documentation - Control Flow](https://docs.julialang.org/en/v1/manual/control-flow/#if-and-ternary-operator)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// If-Else (Expression-based)
val result = if temperature > 30 then "Heiß"
             elif temperature > 20 then "Warm"
             else "Kalt"

// If-Else mit Seiteneffekten
fun check-temperature(temperature: int): console ()
  if temperature > 30 then
    println("Heiß")
  elif temperature > 20 then
    println("Warm")
  else
    println("Kalt")
```

**Besonderheiten:**
- `if`/`then`/`elif`/`else` sind Expressions (geben einen Wert zurück)
- `elif` statt `else if`
- Keine Klammern um Bedingungen nötig
- Einrückungsbasierte Blockstruktur

**Weiterführende Links:**
- [Koka Language Guide - Control Flow](https://koka-lang.github.io/koka/doc/book.html#sec-control)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// If-Else Statement
if (temperature > 30) {
    result = "Heiß"
} else if (temperature > 20) {
    result = "Warm"
} else {
    result = "Kalt"
}
```

**Besonderheiten:**
- Klammern um die Bedingung sind erforderlich
- `if` kann auch als Ausdruck verwendet werden (ohne geschweifte Klammern)

**Weiterführende Links:**
- [Kotlin Documentation - If Expression](https://kotlinlang.org/docs/control-flow.html#if-expression)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```haskell
-- If-Else Statement
let result := if temperature > 30 then
  "Heiß"
else if temperature > 20 then
  "Warm"
else
  "Kalt"
```

**Besonderheiten:**
- `if` ist ein Ausdruck, der einen Wert zurückgibt
- Muss immer einen `else`-Zweig haben
- Verwendet `then` nach der Bedingung
- Keine Klammern oder geschweiften Klammern nötig

**Weiterführende Links:**
- [Functional Programming in Lean - Conditionals](https://lean-lang.org/functional_programming_in_lean/)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- If-Else Statement
if temperature > 30 then
    result = "Heiß"
elseif temperature > 20 then
    result = "Warm"
else
    result = "Kalt"
end
```

**Besonderheiten:**
- Verwendet `elseif` statt `else if`
- Muss mit `end` abgeschlossen werden
- Klammern um die Bedingung sind optional

**Weiterführende Links:**
- [Lua Documentation - If](https://www.lua.org/manual/5.4/manual.html#3.3.4)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% If-Else Statement
if temperature > 30
    result = "Heiß";
elseif temperature > 20
    result = "Warm";
else
    result = "Kalt";
end
```

**Besonderheiten:**
- Verwendet `elseif` statt `else if`
- Muss mit `end` abgeschlossen werden
- Klammern um die Bedingung sind optional

**Weiterführende Links:**
- [MATLAB Documentation - if, elseif, else](https://www.mathworks.com/help/matlab/ref/if.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% If-Else Statement
( if Temperature > 30 then
    Result = "Heiß"
else if Temperature > 20 then
    Result = "Warm"
else
    Result = "Kalt"
)
```

**Besonderheiten:**
- Zwei Syntaxvarianten: `if ... then ... else` und `( Cond -> Then ; Else )`
- `if-then-else` ist ein Ausdruck, der einen Wert zurückgibt
- Der `else`-Zweig ist erforderlich (Vollständigkeit wird vom Compiler geprüft)

**Weiterführende Links:**
- [Mercury Language Reference - If-then-else](https://www.mercurylang.org/information/doc-release/mercury_ref/If_002dthen_002delse.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# If-Else Statement
if temperature > 30:
    result = "Heiß"
elif temperature > 20:
    result = "Warm"
else:
    result = "Kalt"
```

**Besonderheiten:**
- Python-ähnliche Syntax
- Verwendet `elif` statt `else if`
- Muss mit Einrückung strukturiert werden

**Weiterführende Links:**
- [Mojo Documentation - Control Flow](https://docs.modular.com/mojo/manual/control-flow/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# If-Else Statement
if temperature > 30:
    result = "Heiß"
elif temperature > 20:
    result = "Warm"
else:
    result = "Kalt"
```

**Besonderheiten:**
- Verwendet `elif` statt `else if`
- Muss mit Einrückung strukturiert werden
- Klammern um die Bedingung sind optional

**Weiterführende Links:**
- [Nim Documentation - If Statement](https://nim-lang.org/docs/manual.html#statements-and-expressions-if-statement)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// If-Else Statement
if (temperature > 30) {
    result = @"Heiß";
} else if (temperature > 20) {
    result = @"Warm";
} else {
    result = @"Kalt";
}
```

**Besonderheiten:**
- Klammern um die Bedingung sind erforderlich
- Geschweifte Klammern können bei einzelnen Statements weggelassen werden

**Weiterführende Links:**
- [Apple Documentation - Control Flow](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/FoundationTypesandCollections/FoundationTypesandCollections.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// If-Else Statement
if temperature > 30 then
    result := "Heiß"
else if temperature > 20 then
    result := "Warm"
else
    result := "Kalt";
```

**Besonderheiten:**
- Verwendet `then` nach der Bedingung
- Klammern um die Bedingung sind optional
- Geschweifte Klammern werden nicht verwendet

**Weiterführende Links:**
- [Free Pascal Documentation - If Statements](https://www.freepascal.org/docs-html/ref/refse20.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* If-Else Statement *)
let result = if temperature > 30 then
    "Heiß"
else if temperature > 20 then
    "Warm"
else
    "Kalt"
```

**Besonderheiten:**
- `if` ist ein Ausdruck, der einen Wert zurückgibt
- Muss immer einen `else`-Zweig haben
- Keine geschweiften Klammern

**Weiterführende Links:**
- [OCaml Documentation - If Expressions](https://v2.ocaml.org/manual/expr.html#s:conditional-expressions)

</TabItem>
<TabItem value="octave" label="Octave">

```matlab
% If-Else Statement
if temperature > 30
    result = "Heiß";
elseif temperature > 20
    result = "Warm";
else
    result = "Kalt";
end
```

**Besonderheiten:**
- Verwendet `elseif` statt `else if`
- Muss mit `end` abgeschlossen werden
- Klammern um die Bedingung sind optional

**Weiterführende Links:**
- [GNU Octave Documentation - The if Statement](https://octave.org/doc/v8.1.0/The-if-Statement.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// If-Else Statement
if temperature > 30 {
    result = "Heiß"
} else if temperature > 20 {
    result = "Warm"
} else {
    result = "Kalt"
}
```

**Besonderheiten:**
- Klammern um die Bedingung sind erforderlich
- Geschweifte Klammern sind erforderlich

**Weiterführende Links:**
- [Odin Documentation - If Statements](https://odin-lang.org/docs/overview/#if-statements)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# If-Else Statement
if ($temperature > 30) {
    $result = "Heiß";
} elsif ($temperature > 20) {
    $result = "Warm";
} else {
    $result = "Kalt";
}
```

**Besonderheiten:**
- Verwendet `elsif` statt `else if`
- Klammern um die Bedingung sind erforderlich
- Unterstützt auch `unless` als negiertes `if`

**Weiterführende Links:**
- [Perl Documentation - Compound Statements](https://perldoc.perl.org/perlsyn#Compound-Statements)

</TabItem>
<TabItem value="php" label="PHP">

```php
// If-Else Statement
if ($temperature > 30) {
    $result = "Heiß";
} else if ($temperature > 20) {
    $result = "Warm";
} else {
    $result = "Kalt";
}
```

**Besonderheiten:**
- Variablen müssen mit `$` gekennzeichnet werden
- Klammern um die Bedingung sind erforderlich
- Geschweifte Klammern können bei einzelnen Statements weggelassen werden

**Weiterführende Links:**
- [PHP Documentation - if](https://www.php.net/manual/en/control-structures.if.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% If-Else Statement
classify_temperature(Temperature, Result) :-
    ( Temperature > 30 ->
        Result = 'Heiß'
    ; Temperature > 20 ->
        Result = 'Warm'
    ;
        Result = 'Kalt'
    ).
```

**Besonderheiten:**
- Prolog verwendet `( Bedingung -> Then ; Else )` als If-Else-Konstrukt
- Der `->` Operator ist der „If-Then"-Operator, `;` trennt den Else-Zweig
- Verschachtelungen sind durch Ketten von `; ( Bedingung -> ... ; ... )` möglich
- Im Gegensatz zu imperativen Sprachen wird dies typischerweise innerhalb von Prädikaten verwendet

**Weiterführende Links:**
- [SWI-Prolog – Control Structures](https://www.swi-prolog.org/pldoc/man?section=control)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- If-Else Statement
result = if temperature > 30
    then "Heiß"
    else if temperature > 20
        then "Warm"
        else "Kalt"
```

**Besonderheiten:**
- `if` ist ein Ausdruck, der einen Wert zurückgibt
- Muss immer einen `else`-Zweig haben
- Keine geschweiften Klammern

**Weiterführende Links:**
- [PureScript Documentation - Conditionals](https://book.purescript.org/chapter3.html#conditional-expressions)

</TabItem>
<TabItem value="python" label="Python">

```python
# If-Else Statement
if temperature > 30:
    result = "Heiß"
elif temperature > 20:
    result = "Warm"
else:
    result = "Kalt"
```

**Besonderheiten:**
- Verwendet `elif` statt `else if`
- Muss mit Einrückung strukturiert werden
- Klammern um die Bedingung sind optional

**Weiterführende Links:**
- [Python Documentation - if Statements](https://docs.python.org/3/tutorial/controlflow.html#if-statements)

</TabItem>
<TabItem value="r" label="R">

```r
# If-Else Statement
if (temperature > 30) {
    result <- "Heiß"
} else if (temperature > 20) {
    result <- "Warm"
} else {
    result <- "Kalt"
}
```

**Besonderheiten:**
- Klammern um die Bedingung sind erforderlich
- Zuweisung erfolgt mit `<-` oder `=`
- Geschweifte Klammern können bei einzelnen Statements weggelassen werden

**Weiterführende Links:**
- [R Documentation - if](https://www.rdocumentation.org/packages/base/versions/3.6.2/topics/ifelse)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
;; If-Else Statement
(define result
  (if (> temperature 30)
      "Heiß"
      (if (> temperature 20)
          "Warm"
          "Kalt")))
```

**Besonderheiten:**
- `if` ist ein Ausdruck, der einen Wert zurückgibt
- Keine explizite `else`-Klausel, der zweite Parameter ist der else-Zweig
- Für mehrere Bedingungen wird `cond` verwendet

**Weiterführende Links:**
- [Racket Documentation - Conditionals](https://docs.racket-lang.org/guide/if.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- If-Else Statement
result = if temperature > 30 then
    "Heiß"
else if temperature > 20 then
    "Warm"
else
    "Kalt"
```

**Besonderheiten:**
- `if` ist ein Ausdruck, der einen Wert zurückgibt
- Muss immer einen `else`-Zweig haben
- Keine geschweiften Klammern

**Weiterführende Links:**
- [Roc Documentation - If Expressions](https://www.roc-lang.org/tutorial#if-expressions)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# If-Else Statement
if temperature > 30
    result = "Heiß"
elsif temperature > 20
    result = "Warm"
else
    result = "Kalt"
end
```

**Besonderheiten:**
- Verwendet `elsif` statt `else if`
- Muss mit `end` abgeschlossen werden
- Klammern um die Bedingung sind optional

**Weiterführende Links:**
- [Ruby Documentation - Control Expressions](https://docs.ruby-lang.org/en/3.2/syntax/control_expressions_rdoc.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// If-Else Statement
if temperature > 30 {
    result = "Heiß";
} else if temperature > 20 {
    result = "Warm";
} else {
    result = "Kalt";
}
```

**Besonderheiten:**
- Klammern um die Bedingung sind erforderlich
- Geschweifte Klammern sind erforderlich
- `if` kann auch als Ausdruck verwendet werden

**Weiterführende Links:**
- [Rust Documentation - if Expressions](https://doc.rust-lang.org/book/ch03-05-control-flow.html#if-expressions)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// If-Else Statement
if (temperature > 30) {
    result = "Heiß"
} else if (temperature > 20) {
    result = "Warm"
} else {
    result = "Kalt"
}
```

**Besonderheiten:**
- `if` ist ein Ausdruck, der einen Wert zurückgibt
- Klammern um die Bedingung sind erforderlich
- Geschweifte Klammern können bei einzelnen Statements weggelassen werden

**Weiterführende Links:**
- [Scala Documentation - If Expressions](https://docs.scala-lang.org/tour/if-else.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; If-Else Statement
(define result
  (if (> temperature 30)
      "Heiß"
      (if (> temperature 20)
          "Warm"
          "Kalt")))
```

**Besonderheiten:**
- `if` ist ein Ausdruck, der einen Wert zurückgibt
- Keine explizite `else`-Klausel, der zweite Parameter ist der else-Zweig
- Für mehrere Bedingungen wird `cond` verwendet

**Weiterführende Links:**
- [Scheme Documentation - Conditionals](https://www.scheme.com/tspl4/further.html#./further:h1)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// If-Else Statement
if temperature > 30 {
    result = "Heiß"
} else if temperature > 20 {
    result = "Warm"
} else {
    result = "Kalt"
}
```

**Besonderheiten:**
- Klammern um die Bedingung sind optional
- Geschweifte Klammern sind erforderlich

**Weiterführende Links:**
- [Swift Documentation - Control Flow](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/controlflow/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// If-Else Statement
if (temperature > 30) {
    result = "Heiß";
} else if (temperature > 20) {
    result = "Warm";
} else {
    result = "Kalt";
}
```

**Besonderheiten:**
- Klammern um die Bedingung sind erforderlich
- Geschweifte Klammern können bei einzelnen Statements weggelassen werden, werden aber empfohlen

**Weiterführende Links:**
- [TypeScript Handbook - If Statements](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' If-Else Statement
If temperature > 30 Then
    result = "Heiß"
ElseIf temperature > 20 Then
    result = "Warm"
Else
    result = "Kalt"
End If
```

**Besonderheiten:**
- Verwendet `ElseIf` statt `else if`
- Muss mit `End If` abgeschlossen werden
- Verwendet `Then` nach der Bedingung

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - If...Then...Else Statement](https://learn.microsoft.com/en-us/dotnet/visual-basic/language-reference/statements/if-then-else-statement)

</TabItem>
<TabItem value="v" label="V">

```v
// If-Else Statement
if temperature > 30 {
    result = "Heiß"
} else if temperature > 20 {
    result = "Warm"
} else {
    result = "Kalt"
}
```

**Besonderheiten:**
- Klammern um die Bedingung sind erforderlich
- Geschweifte Klammern sind erforderlich

**Weiterführende Links:**
- [V Documentation - Control Flow](https://github.com/vlang/v/blob/master/doc/docs.md#control-flow)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* If-Else Statement *)
result = If[temperature > 30,
    "Heiß",
    If[temperature > 20,
        "Warm",
        "Kalt"
    ]
]
```

**Besonderheiten:**
- `If` ist ein Ausdruck, der einen Wert zurückgibt
- Funktionssyntax mit Kommas
- Muss immer einen else-Zweig haben

**Weiterführende Links:**
- [Wolfram Language Documentation - If](https://reference.wolfram.com/language/ref/If.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// If-Else Statement
if (temperature > 30) {
    result = "Heiß";
} else if (temperature > 20) {
    result = "Warm";
} else {
    result = "Kalt";
}
```

**Besonderheiten:**
- Klammern um die Bedingung sind erforderlich
- Geschweifte Klammern sind erforderlich

**Weiterführende Links:**
- [Zig Documentation - If](https://ziglang.org/documentation/0.11.0/#If)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
var
  x: Integer = 10;
begin
  if x > 0 then
    WriteLn('Positiv')
  else if x = 0 then
    WriteLn('Null')
  else
    WriteLn('Negativ');

  // Mit begin/end für Mehrfach-Statements
  if x > 5 then
  begin
    WriteLn('x ist größer als 5');
    WriteLn('x = ', x);
  end;
end;
```

**Besonderheiten:**
- `if`/`then`/`else` Syntax
- Kein `then` nach `else if`-Klausel nötig (nur nach `if`)
- `begin`/`end` für zusammengesetzte Statements erforderlich
- Kein Semikolon vor `else`

**Weiterführende Links:**
- [Delphi Documentation - If Statements](https://docwiki.embarcadero.com/RADStudio/en/If_Statements)

</TabItem>
</Tabs>


## 6.1.2. Ternary Operators

Kompakte bedingte Ausdrücke, die einen Wert basierend auf einer Bedingung zurückgeben. Ermöglichen es, einfache If-Else-Logik in einem einzigen Ausdruck zu schreiben.

### Sprachen {#sprachen}

<Tabs availableTabs={['c', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'groovy', 'haxe', 'java', 'javascript', 'julia', 'kotlin', 'lean4', 'mercury', 'mojo', 'nim', 'objective-c', 'perl', 'php', 'python', 'ruby', 'rust', 'scala', 'swift', 'typescript', 'v', 'zig']} orangeTabs={['go', 'lua']}>
<TabItem value="c" label="C">

```c
// Ternary Operator
result = temperature > 30 ? "Heiß" : (temperature > 20 ? "Warm" : "Kalt");
```

**Besonderheiten:**
- Syntax: `bedingung ? wert_wenn_wahr : wert_wenn_falsch`
- Kann verschachtelt werden

**Weiterführende Links:**
- [C Standard - Conditional Operator](https://en.cppreference.com/w/c/language/operator_other#Conditional_operator)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Ternary Operator
result = temperature > 30 ? "Heiß" : (temperature > 20 ? "Warm" : "Kalt");
```

**Besonderheiten:**
- Syntax: `bedingung ? wert_wenn_wahr : wert_wenn_falsch`
- Kann verschachtelt werden

**Weiterführende Links:**
- [cppreference.com - Conditional operator](https://en.cppreference.com/w/cpp/language/operator_other#Conditional_operator)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Ternary Operator
result = temperature > 30 ? "Heiß" : (temperature > 20 ? "Warm" : "Kalt")
```

**Besonderheiten:**
- Syntax: `bedingung ? wert_wenn_wahr : wert_wenn_falsch`
- Kann verschachtelt werden

**Weiterführende Links:**
- [Crystal Documentation - If](https://crystal-lang.org/reference/1.11/syntax_and_semantics/if.html#ternary-if)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Ternary Operator
result = temperature > 30 ? "Heiß" : (temperature > 20 ? "Warm" : "Kalt");
```

**Besonderheiten:**
- Syntax: `bedingung ? wert_wenn_wahr : wert_wenn_falsch`
- Kann verschachtelt werden

**Weiterführende Links:**
- [Microsoft C# Documentation - ?: operator](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/conditional-operator)

</TabItem>
<TabItem value="d" label="D">

```d
// Ternary Operator
result = temperature > 30 ? "Heiß" : (temperature > 20 ? "Warm" : "Kalt");
```

**Besonderheiten:**
- Syntax: `bedingung ? wert_wenn_wahr : wert_wenn_falsch`
- Kann verschachtelt werden

**Weiterführende Links:**
- [D Language Specification - Conditional Expression](https://dlang.org/spec/expression.html#conditional_expression)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Ternary Operator
result = temperature > 30 ? "Heiß" : (temperature > 20 ? "Warm" : "Kalt");
```

**Besonderheiten:**
- Syntax: `bedingung ? wert_wenn_wahr : wert_wenn_falsch`
- Kann verschachtelt werden

**Weiterführende Links:**
- [Dart Language Tour - Conditional expressions](https://dart.dev/guides/language/language-tour#conditional-expressions)

</TabItem>
<TabItem value="go" label="Go">

```go
// Ternary Operator (emuliert mit IIFE)
result := func() string {
    if temperature > 30 {
        return "Heiß"
    } else if temperature > 20 {
        return "Warm"
    }
    return "Kalt"
}()
```

**Besonderheiten:**
- Go hat keinen direkten Ternary Operator
- Wird typischerweise mit einer sofort aufgerufenen anonymen Funktion (IIFE) emuliert
- Oder mit If-Else-Statements

**Weiterführende Links:**
- [Go Documentation - If statements](https://go.dev/ref/spec#If_statements)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Ternary Operator
result = temperature > 30 ? "Heiß" : (temperature > 20 ? "Warm" : "Kalt")
```

**Besonderheiten:**
- Syntax: `bedingung ? wert_wenn_wahr : wert_wenn_falsch`
- Kann verschachtelt werden

**Weiterführende Links:**
- [Groovy Documentation - Conditional Operators](https://groovy-lang.org/operators.html#_conditional_operator)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Ternary Operator
result = temperature > 30 ? "Heiß" : (temperature > 20 ? "Warm" : "Kalt");
```

**Besonderheiten:**
- Syntax: `bedingung ? wert_wenn_wahr : wert_wenn_falsch`
- Kann verschachtelt werden

**Weiterführende Links:**
- [Haxe Documentation - Conditional Operator](https://haxe.org/manual/expression-operators-conditionals.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Ternary Operator
result = temperature > 30 ? "Heiß" : (temperature > 20 ? "Warm" : "Kalt");
```

**Besonderheiten:**
- Syntax: `bedingung ? wert_wenn_wahr : wert_wenn_falsch`
- Kann verschachtelt werden

**Weiterführende Links:**
- [Oracle Java Documentation - Conditional Operator ? :](https://docs.oracle.com/javase/specs/jls/se17/html/jls-15.html#jls-15.25)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Ternary Operator
result = temperature > 30 ? "Heiß" : (temperature > 20 ? "Warm" : "Kalt");
```

**Besonderheiten:**
- Syntax: `bedingung ? wert_wenn_wahr : wert_wenn_falsch`
- Kann verschachtelt werden

**Weiterführende Links:**
- [MDN Web Docs - Conditional (ternary) operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Ternary Operator (als If-Expression)
result = if (temperature > 30) "Heiß" else if (temperature > 20) "Warm" else "Kalt"
```

**Besonderheiten:**
- Kotlin hat keinen traditionellen Ternary Operator
- Verwendet stattdessen If-Expressions, die einen Wert zurückgeben
- Syntax: `if (bedingung) wert_wenn_wahr else wert_wenn_falsch`

**Weiterführende Links:**
- [Kotlin Documentation - If Expression](https://kotlinlang.org/docs/control-flow.html#if-expression)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```haskell
-- Ternary Operator (als If-Expression)
let result := if temperature > 30 then "Heiß"
  else if temperature > 20 then "Warm"
  else "Kalt"
```

**Besonderheiten:**
- Lean 4 hat keinen separaten Ternary Operator
- `if`/`then`/`else` ist bereits ein Ausdruck, der einen Wert zurückgibt
- Syntax: `if bedingung then wert_wenn_wahr else wert_wenn_falsch`

**Weiterführende Links:**
- [Functional Programming in Lean - Conditionals](https://lean-lang.org/functional_programming_in_lean/)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Ternary (If-Then-Else Expression)
Result = ( if Temperature > 30 then "Heiß"
           else if Temperature > 20 then "Warm"
           else "Kalt" )
```

**Besonderheiten:**
- Mercury hat keinen traditionellen Ternary Operator
- `if-then-else` ist ein Ausdruck, der direkt einen Wert zurückgibt
- Syntax: `( if Bedingung then Wert1 else Wert2 )`

**Weiterführende Links:**
- [Mercury Language Reference - If-then-else](https://www.mercurylang.org/information/doc-release/mercury_ref/If_002dthen_002delse.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Ternary Operator (als And-Or-Idiom)
result = (temperature > 30) and "Heiß" or ((temperature > 20) and "Warm" or "Kalt")
```

**Besonderheiten:**
- Lua hat keinen direkten Ternary Operator
- Wird typischerweise mit dem And-Or-Idiom emuliert: `bedingung and wert_wenn_wahr or wert_wenn_falsch`
- Funktioniert nur, wenn `wert_wenn_wahr` truthy ist

**Weiterführende Links:**
- [Lua Documentation - Logical Operators](https://www.lua.org/manual/5.4/manual.html#3.4.5)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# Ternary Operator (Python-style)
result = "Heiß" if temperature > 30 else ("Warm" if temperature > 20 else "Kalt")
```

**Besonderheiten:**
- Python-ähnliche Syntax
- Syntax: `wert_wenn_wahr if bedingung else wert_wenn_falsch`
- Kann verschachtelt werden

**Weiterführende Links:**
- [Mojo Documentation - Control Flow](https://docs.modular.com/mojo/manual/control-flow/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Ternary Operator (If-Expression)
result = if temperature > 30: "Heiß" elif temperature > 20: "Warm" else: "Kalt"
```

**Besonderheiten:**
- Nim hat keinen traditionellen Ternary Operator
- Verwendet stattdessen If-Expressions, die einen Wert zurückgeben
- Syntax: `if bedingung: wert_wenn_wahr else: wert_wenn_falsch`

**Weiterführende Links:**
- [Nim Documentation - If Expression](https://nim-lang.org/docs/manual.html#statements-and-expressions-if-expression)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Ternary Operator
result = temperature > 30 ? @"Heiß" : (temperature > 20 ? @"Warm" : @"Kalt");
```

**Besonderheiten:**
- Syntax: `bedingung ? wert_wenn_wahr : wert_wenn_falsch`
- Kann verschachtelt werden

**Weiterführende Links:**
- [Apple Documentation - Conditional Operator](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Ternary Operator
$result = $temperature > 30 ? "Heiß" : ($temperature > 20 ? "Warm" : "Kalt");
```

**Besonderheiten:**
- Syntax: `bedingung ? wert_wenn_wahr : wert_wenn_falsch`
- Kann verschachtelt werden
- Variablen müssen mit `$` gekennzeichnet werden

**Weiterführende Links:**
- [Perl Documentation - Conditional Operator](https://perldoc.perl.org/perlop#Conditional-Operator)

</TabItem>
<TabItem value="php" label="PHP">

```php
// Ternary Operator
$result = $temperature > 30 ? "Heiß" : ($temperature > 20 ? "Warm" : "Kalt");
```

**Besonderheiten:**
- Syntax: `bedingung ? wert_wenn_wahr : wert_wenn_falsch`
- Kann verschachtelt werden
- Variablen müssen mit `$` gekennzeichnet werden

**Weiterführende Links:**
- [PHP Documentation - Ternary Operator](https://www.php.net/manual/en/language.operators.comparison.php#language.operators.comparison.ternary)

</TabItem>
<TabItem value="python" label="Python">

```python
# Ternary Operator (Conditional Expression)
result = "Heiß" if temperature > 30 else ("Warm" if temperature > 20 else "Kalt")
```

**Besonderheiten:**
- Syntax: `wert_wenn_wahr if bedingung else wert_wenn_falsch`
- Kann verschachtelt werden
- Wurde in Python 2.5 eingeführt

**Weiterführende Links:**
- [Python Documentation - Conditional expressions](https://docs.python.org/3/reference/expressions.html#conditional-expressions)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Ternary Operator
result = temperature > 30 ? "Heiß" : (temperature > 20 ? "Warm" : "Kalt")
```

**Besonderheiten:**
- Syntax: `bedingung ? wert_wenn_wahr : wert_wenn_falsch`
- Kann verschachtelt werden

**Weiterführende Links:**
- [Ruby Documentation - Operators](https://docs.ruby-lang.org/en/3.2/syntax/operators_rdoc.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Ternary Operator (als If-Expression)
let result = if temperature > 30 {
    "Heiß"
} else if temperature > 20 {
    "Warm"
} else {
    "Kalt"
};
```

**Besonderheiten:**
- Rust hat keinen traditionellen Ternary Operator
- Verwendet stattdessen If-Expressions, die einen Wert zurückgeben
- Syntax: `if bedingung { wert_wenn_wahr } else { wert_wenn_falsch }`

**Weiterführende Links:**
- [Rust Documentation - If Expressions](https://doc.rust-lang.org/book/ch03-05-control-flow.html#if-expressions)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Ternary Operator (als If-Expression)
val result = if (temperature > 30) "Heiß" else if (temperature > 20) "Warm" else "Kalt"
```

**Besonderheiten:**
- Scala hat keinen traditionellen Ternary Operator
- Verwendet stattdessen If-Expressions, die einen Wert zurückgeben
- Syntax: `if (bedingung) wert_wenn_wahr else wert_wenn_falsch`

**Weiterführende Links:**
- [Scala Documentation - If Expressions](https://docs.scala-lang.org/tour/if-else.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Ternary Operator
result = temperature > 30 ? "Heiß" : (temperature > 20 ? "Warm" : "Kalt")
```

**Besonderheiten:**
- Syntax: `bedingung ? wert_wenn_wahr : wert_wenn_falsch`
- Kann verschachtelt werden

**Weiterführende Links:**
- [Swift Documentation - Ternary Conditional Operator](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/basicoperators/#Ternary-Conditional-Operator)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Ternary Operator
result = temperature > 30 ? "Heiß" : (temperature > 20 ? "Warm" : "Kalt");
```

**Besonderheiten:**
- Syntax: `bedingung ? wert_wenn_wahr : wert_wenn_falsch`
- Kann verschachtelt werden

**Weiterführende Links:**
- [TypeScript Handbook - Conditional Operator](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)

</TabItem>
<TabItem value="v" label="V">

```v
// Ternary Operator
result := if temperature > 30 { "Heiß" } else if temperature > 20 { "Warm" } else { "Kalt" }
```

**Besonderheiten:**
- V hat keinen traditionellen Ternary Operator
- Verwendet stattdessen If-Expressions, die einen Wert zurückgeben
- Syntax: `if bedingung { wert_wenn_wahr } else { wert_wenn_falsch }`

**Weiterführende Links:**
- [V Documentation - Control Flow](https://github.com/vlang/v/blob/master/doc/docs.md#control-flow)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Ternary Operator (als If-Expression)
const result = if (temperature > 30) "Heiß" else if (temperature > 20) "Warm" else "Kalt";
```

**Besonderheiten:**
- Zig hat keinen traditionellen Ternary Operator
- Verwendet stattdessen If-Expressions, die einen Wert zurückgeben
- Syntax: `if (bedingung) wert_wenn_wahr else wert_wenn_falsch`

**Weiterführende Links:**
- [Zig Documentation - If](https://ziglang.org/documentation/0.11.0/#If)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
x = 10
result = x > 5 ? "groß" : "klein"  # "groß"

# Verschachtelter ternärer Operator
grade = 85
label = grade >= 90 ? "A" : grade >= 80 ? "B" : grade >= 70 ? "C" : "F"
```

**Besonderheiten:**
- Syntax: `condition ? true_value : false_value`
- Ist ein Ausdruck und gibt einen Wert zurück
- Bedingung muss ein Bool sein (kein implizites Truthy/Falsy)

**Weiterführende Links:**
- [Julia Documentation - Short-Circuit Evaluation](https://docs.julialang.org/en/v1/manual/control-flow/#Short-Circuit-Evaluation)

</TabItem>
</Tabs>


## 6.1.3. Guard Clauses

Programmierpattern, bei dem frühe Returns oder Exits verwendet werden, um verschachtelte If-Statements zu vermeiden. Verbessert die Lesbarkeit durch Reduzierung der Einrückungstiefe und frühe Behandlung von Fehlerfällen oder Randbedingungen.

### Sprachen {#sprachen}

<Tabs availableTabs={['ada', 'c', 'carbon', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'eiffel', 'elixir', 'erlang', 'go', 'groovy', 'haxe', 'java', 'javascript', 'julia', 'kotlin', 'lean4', 'lua', 'mercury', 'mojo', 'nim', 'objective-c', 'object-pascal', 'ocaml', 'odin', 'perl', 'php', 'prolog', 'python', 'r', 'ruby', 'rust', 'scala', 'swift', 'typescript', 'v', 'vbnet', 'zig']}>
<TabItem value="ada" label="Ada">

```ada
-- Guard Clause mit frühem Return
function process_value(value: Integer) return String is
begin
    if value < 0 then
        return "Ungültig";
    end if;
    
    if value = 0 then
        return "Null";
    end if;
    
    return "Gültig";
end process_value;
```

**Besonderheiten:**
- Guard Clauses werden mit frühen Returns implementiert
- Reduziert Verschachtelung und verbessert Lesbarkeit

**Weiterführende Links:**
- [Ada Reference Manual - Return Statements](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-6-5.html)

</TabItem>
<TabItem value="c" label="C">

```c
// Guard Clause mit frühem Return
const char* process_value(int value) {
    if (value < 0) {
        return "Ungültig";
    }
    
    if (value == 0) {
        return "Null";
    }
    
    return "Gültig";
}
```

**Besonderheiten:**
- Guard Clauses werden mit frühen Returns implementiert
- Reduziert Verschachtelung und verbessert Lesbarkeit

**Weiterführende Links:**
- [C Standard - Return statement](https://en.cppreference.com/w/c/language/return)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Guard Clause mit frühem Return
fn process_value(value: i32) -> String {
    if (value < 0) {
        return "Ungültig";
    }
    
    if (value == 0) {
        return "Null";
    }
    
    return "Gültig";
}
```

**Besonderheiten:**
- Experimentelle Sprache, Syntax kann sich noch ändern
- Guard Clauses werden mit frühen Returns implementiert

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Guard Clause mit frühem Return
std::string process_value(int value) {
    if (value < 0) {
        return "Ungültig";
    }
    
    if (value == 0) {
        return "Null";
    }
    
    return "Gültig";
}
```

**Besonderheiten:**
- Guard Clauses werden mit frühen Returns implementiert
- Reduziert Verschachtelung und verbessert Lesbarkeit

**Weiterführende Links:**
- [cppreference.com - Return statement](https://en.cppreference.com/w/cpp/language/return)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Guard Clause mit frühem Return
def process_value(value : Int32) : String
  return "Ungültig" if value < 0
  return "Null" if value == 0
  
  "Gültig"
end
```

**Besonderheiten:**
- Guard Clauses werden mit frühen Returns implementiert
- Unterstützt auch Postfix-If-Syntax: `return "Ungültig" if value < 0`

**Weiterführende Links:**
- [Crystal Documentation - Methods](https://crystal-lang.org/reference/1.11/syntax_and_semantics/methods.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Guard Clause mit frühem Return
string ProcessValue(int value) {
    if (value < 0) {
        return "Ungültig";
    }
    
    if (value == 0) {
        return "Null";
    }
    
    return "Gültig";
}
```

**Besonderheiten:**
- Guard Clauses werden mit frühen Returns implementiert
- Reduziert Verschachtelung und verbessert Lesbarkeit

**Weiterführende Links:**
- [Microsoft C# Documentation - return statement](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/statements/jump-statements#the-return-statement)

</TabItem>
<TabItem value="d" label="D">

```d
// Guard Clause mit frühem Return
string processValue(int value) {
    if (value < 0) {
        return "Ungültig";
    }
    
    if (value == 0) {
        return "Null";
    }
    
    return "Gültig";
}
```

**Besonderheiten:**
- Guard Clauses werden mit frühen Returns implementiert
- Reduziert Verschachtelung und verbessert Lesbarkeit

**Weiterführende Links:**
- [D Language Specification - Return Statement](https://dlang.org/spec/statement.html#return_statement)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Guard Clause mit frühem Return
String processValue(int value) {
  if (value < 0) {
    return "Ungültig";
  }
  
  if (value == 0) {
    return "Null";
  }
  
  return "Gültig";
}
```

**Besonderheiten:**
- Guard Clauses werden mit frühen Returns implementiert
- Reduziert Verschachtelung und verbessert Lesbarkeit

**Weiterführende Links:**
- [Dart Language Tour - Return values](https://dart.dev/guides/language/language-tour#return-values)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
-- Guard Clause mit frühem Return
process_value (value: INTEGER): STRING
    do
        if value < 0 then
            Result := "Ungültig"
            return
        end
        
        if value = 0 then
            Result := "Null"
            return
        end
        
        Result := "Gültig"
    end
```

**Besonderheiten:**
- Guard Clauses werden mit frühen Returns implementiert
- Verwendet `Result` für den Rückgabewert

**Weiterführende Links:**
- [Eiffel ECMA-367 Standard](https://www.ecma-international.org/publications-and-standards/standards/ecma-367/)

</TabItem>
<TabItem value="go" label="Go">

```go
// Guard Clause mit frühem Return
func processValue(value int) string {
    if value < 0 {
        return "Ungültig"
    }
    
    if value == 0 {
        return "Null"
    }
    
    return "Gültig"
}
```

**Besonderheiten:**
- Guard Clauses werden mit frühen Returns implementiert
- Reduziert Verschachtelung und verbessert Lesbarkeit
- Sehr häufig in Go-Code verwendet

**Weiterführende Links:**
- [Go Documentation - Return statements](https://go.dev/ref/spec#Return_statements)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Guard Clause mit frühem Return
def processValue(value) {
    if (value < 0) {
        return "Ungültig"
    }
    
    if (value == 0) {
        return "Null"
    }
    
    return "Gültig"
}
```

**Besonderheiten:**
- Guard Clauses werden mit frühen Returns implementiert
- Reduziert Verschachtelung und verbessert Lesbarkeit

**Weiterführende Links:**
- [Groovy Documentation - Methods](https://groovy-lang.org/syntax.html#_methods)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Guard Clause mit frühem Return
function processValue(value: Int): String {
    if (value < 0) {
        return "Ungültig";
    }
    
    if (value == 0) {
        return "Null";
    }
    
    return "Gültig";
}
```

**Besonderheiten:**
- Guard Clauses werden mit frühen Returns implementiert
- Reduziert Verschachtelung und verbessert Lesbarkeit

**Weiterführende Links:**
- [Haxe Documentation - Functions](https://haxe.org/manual/expression-function.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Guard Clause mit frühem Return
String processValue(int value) {
    if (value < 0) {
        return "Ungültig";
    }
    
    if (value == 0) {
        return "Null";
    }
    
    return "Gültig";
}
```

**Besonderheiten:**
- Guard Clauses werden mit frühen Returns implementiert
- Reduziert Verschachtelung und verbessert Lesbarkeit

**Weiterführende Links:**
- [Oracle Java Documentation - return Statement](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/branch.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Guard Clause mit frühem Return
function processValue(value) {
    if (value < 0) {
        return "Ungültig";
    }
    
    if (value == 0) {
        return "Null";
    }
    
    return "Gültig";
}
```

**Besonderheiten:**
- Guard Clauses werden mit frühen Returns implementiert
- Reduziert Verschachtelung und verbessert Lesbarkeit

**Weiterführende Links:**
- [MDN Web Docs - return](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Guard Clause mit frühem Return
function process_value(value)
    if value < 0
        return "Ungültig"
    end
    
    if value == 0
        return "Null"
    end
    
    return "Gültig"
end
```

**Besonderheiten:**
- Guard Clauses werden mit frühen Returns implementiert
- Reduziert Verschachtelung und verbessert Lesbarkeit

**Weiterführende Links:**
- [Julia Documentation - Functions](https://docs.julialang.org/en/v1/manual/functions/)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Guard Clause mit frühem Return
fun processValue(value: Int): String {
    if (value < 0) {
        return "Ungültig"
    }
    
    if (value == 0) {
        return "Null"
    }
    
    return "Gültig"
}
```

**Besonderheiten:**
- Guard Clauses werden mit frühen Returns implementiert
- Reduziert Verschachtelung und verbessert Lesbarkeit

**Weiterführende Links:**
- [Kotlin Documentation - Functions](https://kotlinlang.org/docs/functions.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```haskell
-- Guard Clause (Expression-based)
def processValue (value : Int) : String :=
  if value < 0 then "Ungültig"
  else if value == 0 then "Null"
  else "Gültig"

-- Alternative: Guard Clause mit early return (do-Notation)
def processValue' (value : Int) : String := Id.run do
  if value < 0 then return "Ungültig"
  if value == 0 then return "Null"
  return "Gültig"
```

**Besonderheiten:**
- Expression-basiert: `if`/`then`/`else`-Ausdrücke als Guard Clauses
- Imperativer Stil: `do`-Notation mit `return` für Early Returns (`Id.run do` für reine Funktionen)
- Pattern Matching mit `match` ist eine weitere idiomatische Alternative

**Weiterführende Links:**
- [Functional Programming in Lean - Functions](https://lean-lang.org/functional_programming_in_lean/)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Guard Clause mit frühem Return
function process_value(value)
    if value < 0 then
        return "Ungültig"
    end
    
    if value == 0 then
        return "Null"
    end
    
    return "Gültig"
end
```

**Besonderheiten:**
- Guard Clauses werden mit frühen Returns implementiert
- Reduziert Verschachtelung und verbessert Lesbarkeit

**Weiterführende Links:**
- [Lua Documentation - Functions](https://www.lua.org/manual/5.4/manual.html#2.5.9)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Guard Clause (Expression-based)
:- func process_value(int) = string.
process_value(Value) =
    ( if Value < 0 then "Ungültig"
      else if Value = 0 then "Null"
      else "Gültig"
    ).
```

**Besonderheiten:**
- Mercury verwendet `if-then-else`-Ausdrücke für Guard-Logik
- Kein explizites `return` – der Funktionswert ergibt sich aus dem Ausdruck
- Der Compiler prüft Vollständigkeit und Determinismus automatisch

**Weiterführende Links:**
- [Mercury Language Reference - If-then-else](https://www.mercurylang.org/information/doc-release/mercury_ref/If_002dthen_002delse.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# Guard Clause mit frühem Return
def process_value(value: Int) -> String:
    if value < 0:
        return "Ungültig"
    
    if value == 0:
        return "Null"
    
    return "Gültig"
```

**Besonderheiten:**
- Python-ähnliche Syntax
- Guard Clauses werden mit frühen Returns implementiert

**Weiterführende Links:**
- [Mojo Documentation - Functions](https://docs.modular.com/mojo/manual/functions/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Guard Clause mit frühem Return
proc processValue(value: int): string =
    if value < 0:
        return "Ungültig"
    
    if value == 0:
        return "Null"
    
    return "Gültig"
```

**Besonderheiten:**
- Guard Clauses werden mit frühen Returns implementiert
- Reduziert Verschachtelung und verbessert Lesbarkeit

**Weiterführende Links:**
- [Nim Documentation - Procedures](https://nim-lang.org/docs/manual.html#procedures)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Guard Clause mit frühem Return
- (NSString *)processValue:(int)value {
    if (value < 0) {
        return @"Ungültig";
    }
    
    if (value == 0) {
        return @"Null";
    }
    
    return @"Gültig";
}
```

**Besonderheiten:**
- Guard Clauses werden mit frühen Returns implementiert
- Reduziert Verschachtelung und verbessert Lesbarkeit

**Weiterführende Links:**
- [Apple Documentation - Methods](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/DefiningClasses/DefiningClasses.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Guard Clause mit frühem Return
function processValue(value: Integer): String;
begin
    if value < 0 then
        Exit("Ungültig");
    
    if value = 0 then
        Exit("Null");
    
    Result := "Gültig";
end;
```

**Besonderheiten:**
- Guard Clauses werden mit frühen Returns implementiert
- Verwendet `Exit` für frühe Returns mit Wert

**Weiterführende Links:**
- [Free Pascal Documentation - Functions](https://www.freepascal.org/docs-html/ref/refse19.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Guard Clause mit frühem Return *)
let process_value value =
    if value < 0 then
        "Ungültig"
    else if value = 0 then
        "Null"
    else
        "Gültig"
```

**Besonderheiten:**
- OCaml verwendet If-Expressions, daher werden Guard Clauses als frühe If-Zweige implementiert
- Funktionaler Stil ohne explizite Returns

**Weiterführende Links:**
- [OCaml Documentation - Functions](https://v2.ocaml.org/manual/expr.html#s:function-definitions)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Guard Clause mit frühem Return
process_value :: proc(value: i32) -> string {
    if value < 0 {
        return "Ungültig"
    }
    
    if value == 0 {
        return "Null"
    }
    
    return "Gültig"
}
```

**Besonderheiten:**
- Guard Clauses werden mit frühen Returns implementiert
- Reduziert Verschachtelung und verbessert Lesbarkeit

**Weiterführende Links:**
- [Odin Documentation - Procedures](https://odin-lang.org/docs/overview/#procedures)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Guard Clause mit frühem Return
sub process_value {
    my ($value) = @_;
    
    return "Ungültig" if $value < 0;
    return "Null" if $value == 0;
    
    return "Gültig";
}
```

**Besonderheiten:**
- Guard Clauses werden mit frühen Returns implementiert
- Unterstützt auch Postfix-If-Syntax: `return "Ungültig" if $value < 0`

**Weiterführende Links:**
- [Perl Documentation - Subroutines](https://perldoc.perl.org/perlsub)

</TabItem>
<TabItem value="php" label="PHP">

```php
// Guard Clause mit frühem Return
function processValue($value) {
    if ($value < 0) {
        return "Ungültig";
    }
    
    if ($value == 0) {
        return "Null";
    }
    
    return "Gültig";
}
```

**Besonderheiten:**
- Guard Clauses werden mit frühen Returns implementiert
- Reduziert Verschachtelung und verbessert Lesbarkeit

**Weiterführende Links:**
- [PHP Documentation - Functions](https://www.php.net/manual/en/functions.user-defined.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Guard Clauses über multiple Klauseln
process_value(Value, "Ungültig") :-
    Value < 0.
process_value(0, "Null").
process_value(Value, "Gültig") :-
    Value > 0.
```

**Besonderheiten:**
- Prolog realisiert Guard Clauses natürlich über multiple Klauseln desselben Prädikats
- Die Klauseln werden von oben nach unten geprüft (First-Match-Semantik)
- Bedingungen im Klauselkörper wirken als Guards – schlagen sie fehl, wird die nächste Klausel versucht (Backtracking)
- Kein explizites „Return" nötig – das Ergebnis wird über Unifikation gebunden

**Weiterführende Links:**
- [SWI-Prolog – Defining Predicates](https://www.swi-prolog.org/pldoc/man?section=defpred)

</TabItem>
<TabItem value="python" label="Python">

```python
# Guard Clause mit frühem Return
def process_value(value):
    if value < 0:
        return "Ungültig"
    
    if value == 0:
        return "Null"
    
    return "Gültig"
```

**Besonderheiten:**
- Guard Clauses werden mit frühen Returns implementiert
- Reduziert Verschachtelung und verbessert Lesbarkeit

**Weiterführende Links:**
- [Python Documentation - Functions](https://docs.python.org/3/tutorial/controlflow.html#defining-functions)

</TabItem>
<TabItem value="r" label="R">

```r
# Guard Clause mit frühem Return
process_value <- function(value) {
    if (value < 0) {
        return("Ungültig")
    }
    
    if (value == 0) {
        return("Null")
    }
    
    return("Gültig")
}
```

**Besonderheiten:**
- Guard Clauses werden mit frühen Returns implementiert
- Reduziert Verschachtelung und verbessert Lesbarkeit

**Weiterführende Links:**
- [R Documentation - Functions](https://www.rdocumentation.org/packages/base/versions/3.6.2/topics/function)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Guard Clause mit frühem Return
def process_value(value)
    return "Ungültig" if value < 0
    return "Null" if value == 0
    
    "Gültig"
end
```

**Besonderheiten:**
- Guard Clauses werden mit frühen Returns implementiert
- Unterstützt auch Postfix-If-Syntax: `return "Ungültig" if value < 0`

**Weiterführende Links:**
- [Ruby Documentation - Methods](https://docs.ruby-lang.org/en/3.2/syntax/methods_rdoc.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Guard Clause mit frühem Return
fn process_value(value: i32) -> &'static str {
    if value < 0 {
        return "Ungültig";
    }
    
    if value == 0 {
        return "Null";
    }
    
    "Gültig"
}
```

**Besonderheiten:**
- Guard Clauses werden mit frühen Returns implementiert
- Reduziert Verschachtelung und verbessert Lesbarkeit
- Letzter Ausdruck ist impliziter Return

**Weiterführende Links:**
- [Rust Documentation - Functions](https://doc.rust-lang.org/book/ch03-03-functions.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Guard Clause mit frühem Return
def processValue(value: Int): String = {
    if (value < 0) {
        return "Ungültig"
    }
    
    if (value == 0) {
        return "Null"
    }
    
    "Gültig"
}
```

**Besonderheiten:**
- Guard Clauses werden mit frühen Returns implementiert
- Reduziert Verschachtelung und verbessert Lesbarkeit

**Weiterführende Links:**
- [Scala Documentation - Functions](https://docs.scala-lang.org/tour/functions.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Guard Clause mit frühem Return
func processValue(value: Int) -> String {
    if value < 0 {
        return "Ungültig"
    }
    
    if value == 0 {
        return "Null"
    }
    
    return "Gültig"
}
```

**Besonderheiten:**
- Guard Clauses werden mit frühen Returns implementiert
- Swift hat auch `guard`-Statements für explizite Guard Clauses

**Weiterführende Links:**
- [Swift Documentation - Control Flow](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/controlflow/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Guard Clause mit frühem Return
function processValue(value: number): string {
    if (value < 0) {
        return "Ungültig";
    }
    
    if (value === 0) {
        return "Null";
    }
    
    return "Gültig";
}
```

**Besonderheiten:**
- Guard Clauses werden mit frühen Returns implementiert
- Reduziert Verschachtelung und verbessert Lesbarkeit

**Weiterführende Links:**
- [TypeScript Handbook - Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Guard Clause mit frühem Return
Function ProcessValue(value As Integer) As String
    If value < 0 Then
        Return "Ungültig"
    End If
    
    If value = 0 Then
        Return "Null"
    End If
    
    Return "Gültig"
End Function
```

**Besonderheiten:**
- Guard Clauses werden mit frühen Returns implementiert
- Reduziert Verschachtelung und verbessert Lesbarkeit

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Return Statement](https://learn.microsoft.com/en-us/dotnet/visual-basic/language-reference/statements/return-statement)

</TabItem>
<TabItem value="v" label="V">

```v
// Guard Clause mit frühem Return
fn process_value(value int) string {
    if value < 0 {
        return "Ungültig"
    }
    
    if value == 0 {
        return "Null"
    }
    
    return "Gültig"
}
```

**Besonderheiten:**
- Guard Clauses werden mit frühen Returns implementiert
- Reduziert Verschachtelung und verbessert Lesbarkeit

**Weiterführende Links:**
- [V Documentation - Functions](https://github.com/vlang/v/blob/master/doc/docs.md#functions)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Guard Clause mit frühem Return
fn processValue(value: i32) []const u8 {
    if (value < 0) {
        return "Ungültig";
    }
    
    if (value == 0) {
        return "Null";
    }
    
    return "Gültig";
}
```

**Besonderheiten:**
- Guard Clauses werden mit frühen Returns implementiert
- Reduziert Verschachtelung und verbessert Lesbarkeit

**Weiterführende Links:**
- [Zig Documentation - Functions](https://ziglang.org/documentation/0.11.0/#Functions)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Guard Clauses in Funktionsdefinitionen
defmodule Guard do
  def describe(value) when is_integer(value) and value > 0 do
    "Positive Ganzzahl"
  end

  def describe(value) when is_integer(value) do
    "Ganzzahl"
  end

  def describe(value) when is_binary(value) do
    "String"
  end

  def describe(_value) do
    "Anderer Typ"
  end
end

Guard.describe(42)      # "Positive Ganzzahl"
Guard.describe(-1)      # "Ganzzahl"
Guard.describe("hello") # "String"
```

**Besonderheiten:**
- Guards werden mit `when` nach der Funktionssignatur definiert
- Nur bestimmte Funktionen sind in Guards erlaubt (z.B. `is_integer/1`, `is_binary/1`, `rem/2`)
- Guards werden in Reihenfolge geprüft; erster Match gewinnt
- Kombination mit `and`, `or`, `not`

**Weiterführende Links:**
- [Elixir Documentation - Guards](https://hexdocs.pm/elixir/patterns-and-guards.html#guards)

</TabItem>
<TabItem value="erlang" label="Erlang">
```erlang
% Guard Clauses
check_value(X) when X > 0 -> positive;
check_value(X) when X < 0 -> negative;
check_value(0) -> zero.

% Guards in case-Expressions
Result = case Temperature of
    T when T > 30 -> "Heiß";
    T when T > 20 -> "Warm";
    _ -> "Kalt"
end.
```

**Besonderheiten:**
- Guards mit `when`-Klausel in Funktionsköpfen und `case`-Expressions
- Nur bestimmte Funktionen erlaubt in Guards (BIFs, Vergleiche, arithmetische Ausdrücke)
- Kombination mit `,` (und) und `;` (oder)
- Guards dürfen keine Seiteneffekte haben

**Weiterführende Links:**
- [Erlang Documentation - Guard Sequences](https://www.erlang.org/doc/reference_manual/expressions.html#guard-sequences)
</TabItem>
</Tabs>


## 6.1.4. Statement Modifiers (Postfix Control Structures)

Kontrollstrukturen, die nach dem Statement platziert werden, anstatt davor. Ermöglichen es, Bedingungen und Schleifen in kompakterer, lesbarerer Form zu schreiben, besonders für einfache Fälle.

### Sprachen {#sprachen}

<Tabs availableTabs={['crystal', 'perl', 'ruby']} orangeTabs={['python']}>
<TabItem value="crystal" label="Crystal">

```crystal
# Statement Modifier (Postfix If)
result = "Heiß" if temperature > 30

# Statement Modifier (Postfix Unless)
result = "Kalt" unless temperature > 20

# Statement Modifier (Postfix While)
i = 0
i += 1 while i < 10

# Statement Modifier (Postfix Until)
i = 0
i += 1 until i >= 10
```

**Besonderheiten:**
- Unterstützt `if`, `unless`, `while` und `until` als Postfix-Modifier
- Verbessert Lesbarkeit für einfache Fälle

**Weiterführende Links:**
- [Crystal Documentation - If](https://crystal-lang.org/reference/1.11/syntax_and_semantics/if.html#as-a-modifier)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Statement Modifier (Postfix If)
$result = "Heiß" if $temperature > 30;

# Statement Modifier (Postfix Unless)
$result = "Kalt" unless $temperature > 20;

# Statement Modifier (Postfix While)
$i = 0;
$i++ while $i < 10;

# Statement Modifier (Postfix Until)
$i = 0;
$i++ until $i >= 10;

# Statement Modifier (Postfix For/ForEach)
print "$_\n" for @items;
```

**Besonderheiten:**
- Unterstützt `if`, `unless`, `while`, `until` und `for` als Postfix-Modifier
- Sehr häufig in Perl-Code verwendet
- Verbessert Lesbarkeit für einfache Fälle

**Weiterführende Links:**
- [Perl Documentation - Statement Modifiers](https://perldoc.perl.org/perlsyn#Statement-Modifiers)

</TabItem>
<TabItem value="python" label="Python">

```python
# Statement Modifier (Postfix If) - nicht direkt unterstützt
# Wird typischerweise mit Ternary Operator emuliert
result = "Heiß" if temperature > 30 else None

# Statement Modifier (Postfix While/For) - nicht unterstützt
# Muss in normaler Syntax geschrieben werden
```

**Besonderheiten:**
- Python unterstützt Postfix-If nur als Teil des Ternary Operators
- Postfix-While/For werden nicht unterstützt
- Muss in normaler Syntax geschrieben werden

**Weiterführende Links:**
- [Python Documentation - Conditional expressions](https://docs.python.org/3/reference/expressions.html#conditional-expressions)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Statement Modifier (Postfix If)
result = "Heiß" if temperature > 30

# Statement Modifier (Postfix Unless)
result = "Kalt" unless temperature > 20

# Statement Modifier (Postfix While)
i = 0
i += 1 while i < 10

# Statement Modifier (Postfix Until)
i = 0
i += 1 until i >= 10
```

**Besonderheiten:**
- Unterstützt `if`, `unless`, `while` und `until` als Postfix-Modifier
- Sehr häufig in Ruby-Code verwendet
- Verbessert Lesbarkeit für einfache Fälle

**Weiterführende Links:**
- [Ruby Documentation - Control Expressions](https://docs.ruby-lang.org/en/3.2/syntax/control_expressions_rdoc.html)

</TabItem>
</Tabs>

