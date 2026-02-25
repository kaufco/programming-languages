---
slug: /kontrollfluss/switch-und-pattern-matching
title: 6.3. Switch and Pattern Matching
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 6.3. Switch and Pattern Matching

Switch/Case, Pattern Matching on values and types, Destructuring, Guards.

## 6.3.1. Switch/Case Statements

Multiple branches that allow executing code based on the value of an expression. Provide a clearer alternative to long If-Else-If chains.

### Languages {#sprachen}

<Tabs availableTabs={['ada', 'carbon', 'clojure', 'common-lisp', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'eiffel', 'elixir', 'erlang', 'fortran', 'go', 'groovy', 'haxe', 'idris', 'java', 'javascript', 'kotlin', 'lean4', 'matlab', 'mojo', 'nim', 'objective-c', 'object-pascal', 'octave', 'odin', 'php', 'python', 'ruby', 'rust', 'scala', 'swift', 'typescript', 'v', 'vbnet', 'wolfram-language', 'zig']} yellowTabs={['c']} orangeTabs={['lua', 'mercury', 'perl']}>
<TabItem value="ada" label="Ada">

```ada
-- Case Statement
case temperature is
    when 31 .. 100 => result := "Heiß";
    when 21 .. 30 => result := "Warm";
    when others => result := "Kalt";
end case;
```

**Special features:**
- Uses `case ... is` and `when`
- `others` is the default case
- Must be closed with `end case`
- Supports ranges with `..`

**Further reading:**
- [Ada Reference Manual - Case Statements](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-5-4.html)

</TabItem>
<TabItem value="c" label="C">

```c
// Switch Statement
switch (day) {
    case 1:
        result = "Montag";
        break;
    case 2:
        result = "Dienstag";
        break;
    case 3:
        result = "Mittwoch";
        break;
    default:
        result = "Anderer Tag";
        break;
}
```

**Special features:**
- Fall-through behavior: `break` is required to prevent fall-through
- `default` is the standard case
- Only integer types allowed as case values (no strings)

**Further reading:**
- [C Standard - Switch statement](https://en.cppreference.com/w/c/language/switch)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Match Expression (statt switch/case)
match (temperature) {
    case i32: i32 if i32 > 30 => {
        result = "Heiß";
    }
    case i32: i32 if i32 > 20 => {
        result = "Warm";
    }
    default => {
        result = "Kalt";
    }
}
```

**Special features:**
- Carbon uses `match` instead of `switch/case`
- No fall-through behavior, no `break` needed
- Experimental language, syntax may still change
- Pattern Matching with guards possible

**Further reading:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Switch Statement
switch (temperature) {
    case 31 ... 100:
        result = "Heiß";
        break;
    case 21 ... 30:
        result = "Warm";
        break;
    default:
        result = "Kalt";
        break;
}
```

**Special features:**
- Fall-through behavior: `break` is required to prevent fall-through
- `default` is the standard case
- Supports ranges with `...` (GCC extension)
- Since C++17: `[[fallthrough]]` attribute for explicit fall-through

**Further reading:**
- [cppreference.com - Switch statement](https://en.cppreference.com/w/cpp/language/switch)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Case Statement
case temperature
when 31..100
  result = "Heiß"
when 21..30
  result = "Warm"
else
  result = "Kalt"
end
```

**Special features:**
- Uses `case` and `when`
- `else` is the default case
- Must be closed with `end`
- Supports ranges with `..`
- No fall-through

**Further reading:**
- [Crystal Documentation - Case](https://crystal-lang.org/reference/1.11/syntax_and_semantics/case.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Switch Statement
switch (temperature) {
    case >= 31:
        result = "Heiß";
        break;
    case >= 21 and <= 30:
        result = "Warm";
        break;
    default:
        result = "Kalt";
        break;
}
```

**Special features:**
- Fall-through behavior: `break` is required to prevent fall-through
- `default` is the standard case
- Since C# 7.0: Pattern Matching with `when` clauses
- Since C# 8.0: Switch Expressions available

**Further reading:**
- [Microsoft C# Documentation - switch statement](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/statements/selection-statements#the-switch-statement)

</TabItem>
<TabItem value="d" label="D">

```d
// Switch Statement
switch (temperature) {
    case 31 ... 100:
        result = "Heiß";
        break;
    case 21 ... 30:
        result = "Warm";
        break;
    default:
        result = "Kalt";
        break;
}
```

**Special features:**
- Fall-through-Verhalten: `break` ist erforderlich, um Fall-through zu verhindern
- `default` ist der Standard-Fall
- Unterstützt Bereiche mit `...`

**Further reading:**
- [D Language Specification - Switch Statement](https://dlang.org/spec/statement.html#switch_statement)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Switch Statement
switch (temperature) {
  case >= 31:
    result = "Heiß";
    break;
  case >= 21 && <= 30:
    result = "Warm";
    break;
  default:
    result = "Kalt";
    break;
}
```

**Special features:**
- Fall-through behavior: `break` is required to prevent fall-through
- `default` is the standard case
- Since Dart 3.0: Pattern Matching with guards

**Further reading:**
- [Dart Language Tour - Switch and case](https://dart.dev/guides/language/language-tour#switch-and-case)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
-- Inspect Statement
inspect temperature
    when 31 .. 100 then
        result := "Heiß"
    when 21 .. 30 then
        result := "Warm"
    else
        result := "Kalt"
end
```

**Special features:**
- Uses `inspect` instead of `switch`
- `else` is the default case
- Must be closed with `end`
- Supports ranges with `..`
- No fall-through

**Further reading:**
- [Eiffel Documentation - Control Structures](https://www.eiffel.org/doc/eiffel/Control_Structures)

</TabItem>
<TabItem value="go" label="Go">

```go
// Switch Statement
switch {
case temperature >= 31:
    result = "Heiß"
case temperature >= 21 && temperature <= 30:
    result = "Warm"
default:
    result = "Kalt"
}
```

**Special features:**
- No fall-through (automatic)
- `default` is the standard case
- Can be used without expression (like If-Else-If)
- Supports multiple values per case: `case 1, 2, 3:`

**Further reading:**
- [Go Documentation - Switch statements](https://go.dev/ref/spec#Switch_statements)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Switch Statement
switch (temperature) {
    case 31..100:
        result = "Heiß"
        break
    case 21..30:
        result = "Warm"
        break
    default:
        result = "Kalt"
        break
}
```

**Special features:**
- Fall-through behavior: `break` is required to prevent fall-through
- `default` is the standard case
- Supports ranges with `..`
- Supports different types (not just numbers)

**Further reading:**
- [Groovy Documentation - Switch Statement](https://groovy-lang.org/semantics.html#_switch_statement)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Switch Statement (Pattern Matching)
var result = switch (temperature) {
    case t if (t > 30): "Heiß";
    case t if (t > 20): "Warm";
    default: "Kalt";
};
```

**Special features:**
- Kein Fall-through (automatisch)
- `default` ist der Standard-Fall
- Switch ist ein Ausdruck (gibt einen Wert zurück)
- Unterstützt Guards mit `case x if (bedingung):`

**Further reading:**
- [Haxe Documentation - Switch](https://haxe.org/manual/expression-switch.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Switch Statement (klassisch)
switch (day) {
    case "MONDAY":
    case "TUESDAY":
    case "WEDNESDAY":
    case "THURSDAY":
    case "FRIDAY":
        result = "Werktag";
        break;
    case "SATURDAY":
    case "SUNDAY":
        result = "Wochenende";
        break;
    default:
        result = "Unbekannt";
        break;
}

// Switch Expression (seit Java 14)
String result = switch (day) {
    case "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY" -> "Werktag";
    case "SATURDAY", "SUNDAY" -> "Wochenende";
    default -> "Unbekannt";
};
```

**Special features:**
- Fall-through-Verhalten: `break` ist erforderlich, um Fall-through zu verhindern
- `default` ist der Standard-Fall
- Seit Java 14: Switch Expressions mit Arrow-Syntax (`->`)
- Seit Java 14: Mehrere Werte pro Case mit Komma

**Further reading:**
- [Oracle Java Documentation - The switch Statement](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/switch.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Switch Statement
switch (temperature) {
    case 31:
    case 32:
    case 33:
    // ... weitere Fälle ...
    case 100:
        result = "Heiß";
        break;
    case 21:
    case 22:
    // ... weitere Fälle ...
    case 30:
        result = "Warm";
        break;
    default:
        result = "Kalt";
        break;
}
```

**Special features:**
- Fall-through-Verhalten: `break` ist erforderlich, um Fall-through zu verhindern
- `default` ist der Standard-Fall
- Keine direkte Bereichsunterstützung, aber Fall-through kann verwendet werden

**Further reading:**
- [MDN Web Docs - switch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// When Expression
result = when (temperature) {
    in 31..100 -> "Heiß"
    in 21..30 -> "Warm"
    else -> "Kalt"
}
```

**Special features:**
- Verwendet `when` statt `switch`
- `else` ist der Standard-Fall
- Kein Fall-through
- Unterstützt Bereiche mit `..`
- Kann als Ausdruck verwendet werden

**Further reading:**
- [Kotlin Documentation - When expression](https://kotlinlang.org/docs/control-flow.html#when-expression)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Match Expression (Switch/Case)
def describe (temperature : Nat) : String :=
  match temperature with
  | 31 => "Genau 31"
  | 20 => "Genau 20"
  | _ => if temperature > 30 then "Heiß"
         else if temperature > 20 then "Warm"
         else "Kalt"

-- Pattern Matching auf mehreren Werten
def dayName (day : Nat) : String :=
  match day with
  | 1 => "Montag"
  | 2 => "Dienstag"
  | 3 => "Mittwoch"
  | _ => "Anderer Tag"
```

**Special features:**
- Lean 4 verwendet `match ... with` statt `switch/case`
- Kein Fall-through-Verhalten
- `_` als Wildcard-Pattern (Catch-All)
- `match` ist ein Ausdruck, der einen Wert zurückgibt
- Patterns werden von oben nach unten geprüft

**Further reading:**
- [Lean 4 Documentation - Pattern Matching](https://lean-lang.org/lean4/doc/pattern.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Lua hat kein Switch-Statement
-- Wird typischerweise mit If-Else-If oder einer Lookup-Tabelle emuliert
if temperature >= 31 and temperature <= 100 then
    result = "Heiß"
elseif temperature >= 21 and temperature <= 30 then
    result = "Warm"
else
    result = "Kalt"
end
```

**Special features:**
- Lua hat kein natives Switch-Statement
- Wird typischerweise mit If-Else-If-Statements emuliert
- Oder mit einer Lookup-Tabelle

**Further reading:**
- [Lua Documentation - Control Structures](https://www.lua.org/manual/5.4/manual.html#3.3.4)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# Match Statement (seit Python 3.10)
match temperature:
    case temp if temp >= 31:
        result = "Heiß"
    case temp if temp >= 21 and temp <= 30:
        result = "Warm"
    case _:
        result = "Kalt"
```

**Special features:**
- Python-ähnliche Syntax
- Verwendet `match` und `case`
- `_` ist der Default-Fall
- Pattern Matching mit Guards

**Further reading:**
- [Mojo Documentation - Control Flow](https://docs.modular.com/mojo/manual/control-flow/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Case Statement
case temperature:
of 31..100:
    result = "Heiß"
of 21..30:
    result = "Warm"
else:
    result = "Kalt"
```

**Special features:**
- Verwendet `case` und `of`
- `else` ist der Standard-Fall
- Unterstützt Bereiche mit `..`
- Kein Fall-through

**Further reading:**
- [Nim Documentation - Case Statement](https://nim-lang.org/docs/manual.html#statements-and-expressions-case-statement)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Switch Statement
switch (temperature) {
    case 31 ... 100:
        result = @"Heiß";
        break;
    case 21 ... 30:
        result = @"Warm";
        break;
    default:
        result = @"Kalt";
        break;
}
```

**Special features:**
- Fall-through-Verhalten: `break` ist erforderlich, um Fall-through zu verhindern
- `default` ist der Standard-Fall
- Unterstützt Bereiche mit `...` (GCC-Erweiterung)

**Further reading:**
- [Apple Documentation - Control Flow](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/FoundationTypesandCollections/FoundationTypesandCollections.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Case Statement
case temperature of
    31..100: result := "Heiß";
    21..30: result := "Warm";
else
    result := "Kalt";
end;
```

**Special features:**
- Verwendet `case ... of`
- `else` ist der Standard-Fall
- Muss mit `end` abgeschlossen werden
- Unterstützt Bereiche mit `..`
- Kein Fall-through

**Further reading:**
- [Free Pascal Documentation - Case Statements](https://www.freepascal.org/docs-html/ref/refse21.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Switch Statement
switch temperature {
case 31..=100:
    result = "Heiß"
case 21..=30:
    result = "Warm"
case:
    result = "Kalt"
}
```

**Special features:**
- Kein Fall-through (automatisch)
- `case:` ist der Standard-Fall
- Unterstützt Bereiche mit `..=`

**Further reading:**
- [Odin Documentation - Switch Statements](https://odin-lang.org/docs/overview/#switch-statements)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Switch/Case: kein natives Switch-Statement
# Workaround: If-Elsif-Ketten
if ($temperature >= 31) {
    $result = "Heiß";
} elsif ($temperature >= 21) {
    $result = "Warm";
} else {
    $result = "Kalt";
}

# Alternativ: Dispatch-Tabelle mit Hash
my %dispatch = (
    hot  => sub { "Heiß" },
    warm => sub { "Warm" },
    cold => sub { "Kalt" },
);
```

**Special features:**
- `given/when` war experimentell (Perl 5.10–5.18) und wurde in Perl 5.40 entfernt
- Empfohlene Alternativen: If-Elsif-Ketten oder Hash-basierte Dispatch-Tabellen
- Kein natives Switch/Case-Statement in aktuellem Perl

**Further reading:**
- [Perl Documentation - Compound Statements](https://perldoc.perl.org/perlsyn#Compound-Statements)

</TabItem>
<TabItem value="php" label="PHP">

```php
// Switch Statement
switch (true) {
    case $temperature >= 31:
        $result = "Heiß";
        break;
    case $temperature >= 21:
        $result = "Warm";
        break;
    default:
        $result = "Kalt";
        break;
}

// Match Expression (seit PHP 8.0)
$result = match (true) {
    $temperature >= 31 => "Heiß",
    $temperature >= 21 => "Warm",
    default => "Kalt",
};
```

**Special features:**
- Fall-through-Verhalten: `break` ist erforderlich, um Fall-through zu verhindern
- `default` ist der Standard-Fall
- Für Bedingungsausdrücke muss `switch(true)` verwendet werden
- Match Expression seit PHP 8.0 (kein Fall-through, strenger Vergleich)

**Further reading:**
- [PHP Documentation - switch](https://www.php.net/manual/en/control-structures.switch.php)

</TabItem>
<TabItem value="python" label="Python">

```python
# Match Statement (seit Python 3.10)
match temperature:
    case temp if temp >= 31:
        result = "Heiß"
    case temp if temp >= 21 and temp <= 30:
        result = "Warm"
    case _:
        result = "Kalt"
```

**Special features:**
- Wurde in Python 3.10 eingeführt
- Verwendet `match` und `case`
- `_` ist der Default-Fall
- Pattern Matching mit Guards

**Further reading:**
- [Python Documentation - match Statements](https://docs.python.org/3/tutorial/controlflow.html#match-statements)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Case Statement
result = case temperature
when 31..100
    "Heiß"
when 21..30
    "Warm"
else
    "Kalt"
end
```

**Special features:**
- Verwendet `case` und `when`
- `else` ist der Standard-Fall
- Muss mit `end` abgeschlossen werden
- Unterstützt Bereiche mit `..`
- Kann als Ausdruck verwendet werden
- Kein Fall-through

**Further reading:**
- [Ruby Documentation - Control Expressions](https://docs.ruby-lang.org/en/3.2/syntax/control_expressions_rdoc.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Match Expression
result = match temperature {
    31..=100 => "Heiß",
    21..=30 => "Warm",
    _ => "Kalt"
};
```

**Special features:**
- Verwendet `match` statt `switch`
- `_` ist der Default-Fall
- Kein Fall-through
- Unterstützt Bereiche mit `..=`
- Muss exhaustiv sein (alle Fälle müssen abgedeckt sein)

**Further reading:**
- [Rust Documentation - Match Expressions](https://doc.rust-lang.org/book/ch06-02-match.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Match Expression
result = temperature match {
  case temp if temp >= 31 => "Heiß"
  case temp if temp >= 21 && temp <= 30 => "Warm"
  case _ => "Kalt"
}
```

**Special features:**
- Verwendet `match` statt `switch`
- `_` ist der Default-Fall
- Kein Fall-through
- Pattern Matching mit Guards
- Kann als Ausdruck verwendet werden

**Further reading:**
- [Scala Documentation - Match Expressions](https://docs.scala-lang.org/tour/pattern-matching.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Switch Statement
switch temperature {
case 31...100:
    result = "Heiß"
case 21...30:
    result = "Warm"
default:
    result = "Kalt"
}
```

**Special features:**
- Kein Fall-through (automatisch)
- `default` ist der Standard-Fall
- Unterstützt Bereiche mit `...`
- Muss exhaustiv sein (alle Fälle müssen abgedeckt sein, außer bei Enum)

**Further reading:**
- [Swift Documentation - Control Flow](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/controlflow/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Switch Statement
switch (temperature) {
    case 31:
    case 32:
    // ... weitere Fälle ...
    case 100:
        result = "Heiß";
        break;
    case 21:
    case 22:
    // ... weitere Fälle ...
    case 30:
        result = "Warm";
        break;
    default:
        result = "Kalt";
        break;
}
```

**Special features:**
- Fall-through-Verhalten: `break` ist erforderlich, um Fall-through zu verhindern
- `default` ist der Standard-Fall
- Keine direkte Bereichsunterstützung, aber Fall-through kann verwendet werden

**Further reading:**
- [TypeScript Handbook - Switch Statements](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Select Case Statement
Select Case temperature
    Case 31 To 100
        result = "Heiß"
    Case 21 To 30
        result = "Warm"
    Case Else
        result = "Kalt"
End Select
```

**Special features:**
- Verwendet `Select Case` statt `switch`
- `Case Else` ist der Standard-Fall
- Muss mit `End Select` abgeschlossen werden
- Unterstützt Bereiche mit `To`
- Kein Fall-through

**Further reading:**
- [Microsoft VB.NET Documentation - Select...Case Statement](https://learn.microsoft.com/en-us/dotnet/visual-basic/language-reference/statements/select-case-statement)

</TabItem>
<TabItem value="v" label="V">

```v
// Match Expression
result := match temperature {
    31..100 { "Heiß" }
    21..30 { "Warm" }
    else { "Kalt" }
}
```

**Special features:**
- Verwendet `match` statt `switch`
- `else` ist der Standard-Fall
- Kein Fall-through
- Unterstützt Bereiche mit `..`

**Further reading:**
- [V Documentation - Control Flow](https://github.com/vlang/v/blob/master/doc/docs.md#control-flow)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Switch Expression
result = switch (temperature) {
    31...100 => "Heiß",
    21...30 => "Warm",
    else => "Kalt"
};
```

**Special features:**
- Verwendet `switch` als Ausdruck
- `else` ist der Standard-Fall
- Kein Fall-through
- Unterstützt Bereiche mit `...`
- Muss exhaustiv sein (alle Fälle müssen abgedeckt sein)

**Further reading:**
- [Zig Documentation - Switch](https://ziglang.org/documentation/0.11.0/#Switch)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; case: Konstante Werte (kompiliert zu Lookup-Tabelle)
(defn describe-number [n]
  (case n
    1 "eins"
    2 "zwei"
    3 "drei"
    "unbekannt"))  ; Default-Wert

;; cond: Allgemeine Bedingungen
(defn categorize [temperature]
  (cond
    (> temperature 30) "Heiß"
    (> temperature 20) "Warm"
    (> temperature 10) "Kühl"
    :else              "Kalt"))

;; condp: Bedingungen mit gemeinsamem Prädikat
(defn type-of [x]
  (condp instance? x
    String  "String"
    Long    "Long"
    Double  "Double"
    "Unbekannt"))
```

**Special features:**
- `case` für konstante Werte (effiziente Lookup-Tabelle)
- `cond` für allgemeine Bedingungen
- `condp` für Bedingungen mit gemeinsamem Prädikat
- Alle sind Ausdrücke mit Rückgabewert

**Further reading:**
- [Clojure Documentation - Special Forms](https://clojure.org/reference/special_forms)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; case (mit otherwise für Default)
(defun describe-day (day)
  (case day
    (:monday "Start der Woche")
    ((:saturday :sunday) "Wochenende")
    (otherwise "Wochentag")))

;; ecase (Error wenn kein Match)
(defun traffic-light (color)
  (ecase color
    (:red "Stop")
    (:yellow "Achtung")
    (:green "Fahren")))

;; typecase (Typ-basiertes Matching)
(defun process (x)
  (typecase x
    (integer (format nil "Integer: ~a" x))
    (string (format nil "String: ~a" x))
    (t "Unbekannt")))
```

**Special features:**
- `case` vergleicht mit `eql` und unterstützt `otherwise` als Default
- `ecase` signalisiert einen Error, wenn kein Fall zutrifft (exhaustive)
- `ccase` ist wie `ecase`, bietet aber einen Continue-Restart
- `typecase`/`etypecase`/`ctypecase` für Typ-basiertes Dispatching
- Schlüssel werden nicht evaluiert (Konstanten)

**Further reading:**
- [Common Lisp HyperSpec - case](http://www.lispworks.com/documentation/HyperSpec/Body/m_case_.htm)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# case: Pattern-Matching-basiertes Switch
value = :banana
result = case value do
  :apple -> "Apfel"
  :banana -> "Banane"
  :cherry -> "Kirsche"
  _ -> "Unbekannt"
end

# cond: Mehrere Bedingungen prüfen
temperature = 25
description = cond do
  temperature > 30 -> "Heiß"
  temperature > 20 -> "Warm"
  true -> "Kalt"
end
```

**Special features:**
- `case` nutzt Pattern Matching für Verzweigungen
- `cond` prüft mehrere Bedingungen (ähnlich if/else-if Ketten)
- Beide sind Ausdrücke, die einen Wert zurückgeben
- `_` als Catch-All-Pattern in `case`; `true` als Catch-All in `cond`

**Further reading:**
- [Elixir Documentation - case, cond and if](https://elixir-lang.org/getting-started/case-cond-and-if.html)

</TabItem>
<TabItem value="erlang" label="Erlang">
```erlang
% Case Expression
Result = case Value of
    1 -> "Eins";
    2 -> "Zwei";
    3 -> "Drei";
    _ -> "Andere Zahl"
end.
```

**Special features:**
- `case` ist ein Ausdruck, der einen Wert zurückgibt
- Unterstützt Pattern Matching in Klauseln
- `_` als Catch-All-Pattern
- Unterstützt Guards mit `when`

**Further reading:**
- [Erlang Documentation - Case Expressions](https://www.erlang.org/doc/reference_manual/expressions.html#case)
</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! SELECT CASE Statement
integer :: day = 3

select case (day)
    case (1)
        print *, "Montag"
    case (2)
        print *, "Dienstag"
    case (3:5)
        print *, "Mittwoch bis Freitag"
    case default
        print *, "Wochenende"
end select
```

**Special features:**
- `SELECT CASE` für Fallunterscheidungen
- Unterstützt Ranges mit `case (start:end)`
- Kein Fall-Through (kein `break` nötig)
- Funktioniert mit INTEGER, LOGICAL und CHARACTER

**Further reading:**
- [Fortran Standard - SELECT CASE](https://gcc.gnu.org/onlinedocs/gfortran/SELECT-CASE.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Case Expression (kein switch, sondern case...of)
describe : Int -> String
describe n = case n of
    0 => "Null"
    1 => "Eins"
    2 => "Zwei"
    _ => "Andere Zahl"

result : String
result = describe 1  -- "Eins"
```

**Special features:**
- `case ... of` ist ein Ausdruck, der einen Wert zurückgibt
- Unterstützt Wildcards (`_`) als Default-Fall
- Kein Fall-through wie bei C-style switch

**Further reading:**
- [Idris 2 Documentation - Types and Functions](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Switch/Case (über Funktionsklauseln mit Pattern Matching)
:- func describe_day(int) = string.
describe_day(1) = "Montag".
describe_day(2) = "Dienstag".
describe_day(3) = "Mittwoch".
describe_day(_) = "Anderer Tag".
```

**Special features:**
- Mercury hat kein dediziertes `switch`/`case`-Statement
- Stattdessen werden Funktionsklauseln mit Pattern Matching verwendet
- Klauseln werden von oben nach unten geprüft
- `_` als Wildcard für den Default-Fall

**Further reading:**
- [Mercury Language Reference - Functions](https://www.mercurylang.org/information/doc-release/mercury_ref/Functions.html)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% Switch/Case Statement
day = "Montag";
switch day
    case "Montag"
        result = "Wochenanfang";
    case {"Samstag", "Sonntag"}
        result = "Wochenende";
    otherwise
        result = "Wochentag";
end
```

**Special features:**
- Kein `break` erforderlich (kein Fall-through)
- `otherwise` statt `default`
- Case-Werte können Cell Arrays für mehrere Werte enthalten
- Muss mit `end` abgeschlossen werden

**Further reading:**
- [MATLAB Documentation - switch, case, otherwise](https://www.mathworks.com/help/matlab/ref/switch.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
var
  day: Integer = 3;
begin
  case day of
    1: WriteLn('Montag');
    2: WriteLn('Dienstag');
    3: WriteLn('Mittwoch');
    4, 5: WriteLn('Donnerstag oder Freitag');
    6..7: WriteLn('Wochenende');
  else
    WriteLn('Ungültiger Tag');
  end;
end;
```

**Special features:**
- `case`/`of`/`end` Syntax
- Unterstützt Ordinaltypen (Integer, Char, Enum)
- Komma-separierte Werte und Bereiche (`..`) möglich
- `else`-Klausel für Default-Fall
- Kein Fall-Through wie in C

**Further reading:**
- [Delphi Documentation - Case Statements](https://docwiki.embarcadero.com/RADStudio/en/Case_Statements)

</TabItem>
<TabItem value="octave" label="Octave">

```matlab
% Switch/Case Statement
switch day
    case "Montag"
        result = "Wochenanfang";
    case {"Samstag", "Sonntag"}
        result = "Wochenende";
    otherwise
        result = "Wochentag";
end
```

**Special features:**
- Kein Fall-Through (implizites Break nach jedem Case)
- `otherwise` als Default-Zweig
- Case kann mehrere Werte als Cell-Array enthalten
- Funktioniert mit Strings und numerischen Werten

**Further reading:**
- [GNU Octave Documentation - The switch Statement](https://octave.org/doc/v8.1.0/The-switch-Statement.html)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Switch Statement *)
color = "red";
result = Switch[color,
    "red", "Rot",
    "green", "Grün",
    "blue", "Blau",
    _, "Unbekannt"
]

(* Which (mehrstufige Bedingung) *)
temperature = 25;
result2 = Which[
    temperature > 30, "Heiß",
    temperature > 20, "Warm",
    True, "Kalt"
]
```

**Special features:**
- `Switch[]` für Wertvergleiche mit Pattern Matching
- `Which[]` für mehrstufige Bedingungen
- `_` als Wildcard für Default-Fall

**Further reading:**
- [Wolfram Language Documentation - Switch](https://reference.wolfram.com/language/ref/Switch.html)

</TabItem>
</Tabs>


## 6.3.2. Pattern Matching auf Werten

Pattern Matching ermöglicht die Dekomposition von Werten basierend auf ihrem konkreten Wert, nicht auf ihrem Typ.

### Languages {#sprachen}

<Tabs availableTabs={['csharp', 'dart', 'elixir', 'elm', 'erlang', 'fsharp', 'gleam', 'haskell', 'haxe', 'idris', 'koka', 'lean4', 'mercury', 'ocaml', 'php', 'prolog', 'purescript', 'python', 'racket', 'roc', 'rust', 'scala', 'swift', 'v', 'wolfram-language']}>
<TabItem value="csharp" label="C#">

```csharp
// Pattern Matching auf Werten (seit C# 8.0)
int value = 5;
string result = value switch
{
    0 => "Null",
    1 => "Eins",
    2 => "Zwei",
    > 10 => "Größer als zehn",
    _ => "Andere Zahl"
};
```

**Special features:**
- Pattern Matching auf Werten seit C# 8.0
- Unterstützt relationale Patterns (`>`, `<`, `>=`, `<=`)
- `_` als Catch-All-Pattern

**Further reading:**
- [C# Pattern Matching Documentation](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/functional/pattern-matching)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Pattern Matching auf Werten
value = 5
result = case value do
  0 -> "Null"
  1 -> "Eins"
  2 -> "Zwei"
  n when n > 10 -> "Größer als zehn"
  _ -> "Andere Zahl"
end
```

**Special features:**
- Pattern Matching ist ein fundamentales Sprachfeature
- Guards können mit `when` verwendet werden
- `_` als Catch-All-Pattern

**Further reading:**
- [Elixir Pattern Matching Guide](https://elixir-lang.org/getting-started/pattern-matching.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% Pattern Matching auf Werten
Value = 5,
Result = case Value of
    0 -> "Null";
    1 -> "Eins";
    2 -> "Zwei";
    N when N > 10 -> "Größer als zehn";
    _ -> "Andere Zahl"
end.
```

**Special features:**
- Pattern Matching ist ein fundamentales Sprachfeature
- Guards können mit `when` verwendet werden
- `_` als Catch-All-Pattern

**Further reading:**
- [Erlang Pattern Matching](https://www.erlang.org/doc/reference_manual/patterns.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Pattern Matching auf Werten
let value = 5
let result = match value with
    | 0 -> "Null"
    | 1 -> "Eins"
    | 2 -> "Zwei"
    | n when n > 10 -> "Größer als zehn"
    | _ -> "Andere Zahl"
```

**Special features:**
- Pattern Matching ist ein fundamentales Sprachfeature
- Guards können mit `when` verwendet werden
- `_` als Catch-All-Pattern

**Further reading:**
- [F# Pattern Matching](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/pattern-matching)

</TabItem>
<TabItem value="gleam" label="Gleam">

```erlang
// Pattern Matching auf Werten
let value = 5
let result = case value {
  0 -> "Null"
  1 -> "Eins"
  2 -> "Zwei"
  n if n > 10 -> "Größer als zehn"
  _ -> "Andere Zahl"
}
```

**Special features:**
- Pattern Matching ist ein fundamentales Sprachfeature
- Guards können mit `if` verwendet werden
- `_` als Catch-All-Pattern

**Further reading:**
- [Gleam Pattern Matching](https://gleam.run/documentation/tour/pattern-matching/)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Pattern Matching auf Werten
value = 5
result = case value of
  0 -> "Null"
  1 -> "Eins"
  2 -> "Zwei"
  n | n > 10 -> "Größer als zehn"
  _ -> "Andere Zahl"
```

**Special features:**
- Pattern Matching ist ein fundamentales Sprachfeature
- Guards können mit `|` verwendet werden
- `_` als Catch-All-Pattern

**Further reading:**
- [Haskell Pattern Matching](https://www.haskell.org/tutorial/patterns.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Pattern Matching auf Werten *)
let value = 5 in
let result = match value with
  | 0 -> "Null"
  | 1 -> "Eins"
  | 2 -> "Zwei"
  | n when n > 10 -> "Größer als zehn"
  | _ -> "Andere Zahl"
```

**Special features:**
- Pattern Matching ist ein fundamentales Sprachfeature
- Guards können mit `when` verwendet werden
- `_` als Catch-All-Pattern

**Further reading:**
- [OCaml Pattern Matching](https://ocaml.org/manual/patterns.html)

</TabItem>
<TabItem value="python" label="Python">

```python
# Pattern Matching auf Werten (seit Python 3.10)
value = 5
match value:
    case 0:
        result = "Null"
    case 1:
        result = "Eins"
    case 2:
        result = "Zwei"
    case n if n > 10:
        result = "Größer als zehn"
    case _:
        result = "Andere Zahl"
```

**Special features:**
- Pattern Matching auf Werten seit Python 3.10
- Guards können mit `if` verwendet werden
- `_` als Catch-All-Pattern

**Further reading:**
- [Python Pattern Matching](https://docs.python.org/3/tutorial/controlflow.html#match-statements)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Pattern Matching auf Werten
let value = 5;
let result = match value {
    0 => "Null",
    1 => "Eins",
    2 => "Zwei",
    n if n > 10 => "Größer als zehn",
    _ => "Andere Zahl"
};
```

**Special features:**
- Pattern Matching ist ein fundamentales Sprachfeature
- Guards können mit `if` verwendet werden
- `_` als Catch-All-Pattern

**Further reading:**
- [Rust Pattern Matching](https://doc.rust-lang.org/book/ch18-03-pattern-syntax.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Pattern Matching auf Werten
val value = 5
val result = value match {
  case 0 => "Null"
  case 1 => "Eins"
  case 2 => "Zwei"
  case n if n > 10 => "Größer als zehn"
  case _ => "Andere Zahl"
}
```

**Special features:**
- Pattern Matching ist ein fundamentales Sprachfeature
- Guards können mit `if` verwendet werden
- `_` als Catch-All-Pattern

**Further reading:**
- [Scala Pattern Matching](https://docs.scala-lang.org/tour/pattern-matching.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Pattern Matching auf Werten
let value = 5
let result = switch value {
case 0:
    "Null"
case 1:
    "Eins"
case 2:
    "Zwei"
case let n where n > 10:
    "Größer als zehn"
default:
    "Andere Zahl"
}
```

**Special features:**
- Pattern Matching auf Werten seit Swift 1.0
- Guards können mit `where` verwendet werden
- `default` als Catch-All-Pattern

**Further reading:**
- [Swift Pattern Matching](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/patterns/)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Pattern Matching auf Werten (seit Dart 3.0)
String describeNumber(int value) => switch (value) {
  0 => 'Null',
  1 => 'Eins',
  2 => 'Zwei',
  < 0 => 'Negativ',
  >= 100 => 'Groß',
  _ => 'Andere Zahl',
};

// Constant Patterns
const pi = 3.14;
var result = switch (value) {
  0 => 'Null',
  pi => 'Pi',
  _ => 'Unbekannt',
};
```

**Special features:**
- Switch Expressions mit `=>` Syntax (seit Dart 3.0)
- Relational Patterns (`< 0`, `>= 100`)
- Constant Patterns für benannte Konstanten
- Wildcard `_` als Default-Fall
- Exhaustiveness Checking bei sealed Klassen

**Further reading:**
- [Dart Documentation - Patterns](https://dart.dev/language/patterns)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Pattern Matching auf Werten
describe : Int -> String
describe n =
    case n of
        0 -> "Null"
        1 -> "Eins"
        _ -> "Andere Zahl"

-- Pattern Matching auf Custom Types
type Color = Red | Green | Blue

toHex : Color -> String
toHex color =
    case color of
        Red   -> "#FF0000"
        Green -> "#00FF00"
        Blue  -> "#0000FF"
```

**Special features:**
- `case ... of` ist der primäre Mechanismus für Pattern Matching
- Unterstützt Literale, Custom Type-Konstruktoren und Wildcard `_`
- Compiler erzwingt Exhaustiveness (alle Fälle müssen abgedeckt sein)

**Further reading:**
- [Elm Documentation - Pattern Matching](https://guide.elm-lang.org/types/pattern_matching.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Pattern Matching auf Werten
var result = switch (value) {
    case 0: "Null";
    case 1: "Eins";
    case 2: "Zwei";
    default: "Andere";
};
```

**Special features:**
- Switch ist ein Ausdruck
- Kein Fall-through
- Exhaustiveness Checking bei Enums

**Further reading:**
- [Haxe Documentation - Pattern Matching](https://haxe.org/manual/lf-pattern-matching.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Pattern Matching auf Werten
fibonacci : Nat -> Nat
fibonacci 0 = 0
fibonacci 1 = 1
fibonacci (S (S n)) = fibonacci (S n) + fibonacci n

-- Pattern Matching auf Listen
describe : List a -> String
describe [] = "Leer"
describe [_] = "Ein Element"
describe _ = "Mehrere Elemente"
```

**Special features:**
- Pattern Matching ist fundamental in der Sprache
- Funktionsdefinitionen können mehrere Gleichungen mit Patterns haben
- Unterstützt verschachtelte Patterns

**Further reading:**
- [Idris 2 Documentation - Types and Functions](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Pattern Matching auf Werten
fun describeNumber(n: int): string
  match n
    0 -> "Null"
    1 -> "Eins"
    2 -> "Zwei"
    _ -> "Andere Zahl"

val d0 = describeNumber(0) // "Null"
val d5 = describeNumber(5) // "Andere Zahl"
```

**Special features:**
- Koka verwendet `match`-Ausdrücke für Pattern Matching
- Unterstützt das Matching auf konkrete Werte
- `_` ist ein Wildcard-Pattern, das jeden Wert matcht
- Pattern Matching ist exhaustiv (der Compiler prüft, ob alle Fälle abgedeckt sind)

**Further reading:**
- [Koka Language Guide - Pattern Matching](https://koka-lang.github.io/koka/doc/book.html#sec-pattern-matching)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Pattern Matching auf Werten
def describeNumber (n : Nat) : String :=
  match n with
  | 0 => "Null"
  | 1 => "Eins"
  | 2 => "Zwei"
  | _ => "Andere Zahl"

#eval describeNumber 0  -- "Null"
#eval describeNumber 5  -- "Andere Zahl"
```

**Special features:**
- `match`-Ausdrücke unterstützen Pattern Matching auf konkreten Werten
- `_` ist ein Wildcard-Pattern, das jeden Wert matcht
- Patterns werden von oben nach unten geprüft
- Pattern Matching ist exhaustiv (der Compiler prüft, ob alle Fälle abgedeckt sind)

**Further reading:**
- [Lean 4 Documentation - Pattern Matching](https://lean-lang.org/lean4/doc/pattern.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Pattern Matching auf Werten (über Funktionsklauseln)
:- func describe(int) = string.
describe(0) = "Null".
describe(1) = "Eins".
describe(2) = "Zwei".
describe(_) = "Andere Zahl".
```

**Special features:**
- Pattern Matching ist das zentrale Konzept in Mercury
- Konkrete Werte in Funktionsklauselköpfen fungieren als Patterns
- Klauseln werden von oben nach unten geprüft
- `_` als Wildcard-Pattern für den Catch-All-Fall

**Further reading:**
- [Mercury Language Reference - Functions](https://www.mercurylang.org/information/doc-release/mercury_ref/Functions.html)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
// Match Expression (seit PHP 8.0)
$status = 200;

$message = match ($status) {
    200 => "OK",
    301 => "Moved Permanently",
    404 => "Not Found",
    500 => "Internal Server Error",
    default => "Unknown",
};
?>
```

**Special features:**
- `match` Expression seit PHP 8.0
- Verwendet strikten Vergleich (`===`)
- Kein Fall-through wie bei `switch`
- Gibt einen Wert zurück (Expression, nicht Statement)

**Further reading:**
- [PHP Documentation - match](https://www.php.net/manual/en/control-structures.match.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Pattern Matching auf Werten über Klauselköpfe
describe(0, "Null").
describe(1, "Eins").
describe(N, Result) :-
    number_codes(N, Codes),
    append("Andere Zahl: ", Codes, ResultCodes),
    atom_codes(Result, ResultCodes).
```

**Special features:**
- Pattern Matching ist das zentrale Konzept in Prolog – jede Klausel matcht über Unifikation
- Konkrete Werte im Klauselkopf fungieren als Patterns
- Klauseln werden von oben nach unten versucht (First-Match mit Backtracking)
- Kein explizites `match`-Schlüsselwort nötig – das Matching geschieht implizit beim Prädikataufruf

**Further reading:**
- [SWI-Prolog – Pattern Matching](https://www.swi-prolog.org/pldoc/man?section=unify)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Pattern Matching auf Werten
describe :: Int -> String
describe 0 = "Null"
describe 1 = "Eins"
describe n = "Andere Zahl: " <> show n
```

**Special features:**
- Pattern Matching direkt in Funktionsdefinitionen
- Unterstützt Literale, Wildcards und Variablen
- Compiler warnt bei nicht-exhaustiven Patterns

**Further reading:**
- [PureScript Documentation - Pattern Matching](https://github.com/purescript/documentation/blob/master/language/Pattern-Matching.md)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
(define (describe value)
  (match value
    [0 "Null"]
    [1 "Eins"]
    [x (format "Andere Zahl: ~a" x)]))

(describe 0)  ; "Null"
(describe 1)  ; "Eins"
(describe 42) ; "Andere Zahl: 42"
```

**Special features:**
- `match` ist das zentrale Pattern-Matching-Konstrukt
- Unterstützt Literal-Werte, Variablen-Bindung und komplexe Patterns
- Teil der Standard-Bibliothek

**Further reading:**
- [Racket Documentation - Pattern Matching](https://docs.racket-lang.org/reference/match.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Pattern Matching auf Werten
describe : I64 -> Str
describe = \n ->
    when n is
        0 -> "Null"
        1 -> "Eins"
        _ -> "Andere Zahl"
```

**Special features:**
- `when/is` Syntax für Pattern Matching
- `_` als Wildcard-Pattern
- Exhaustive Checking erzwungen

**Further reading:**
- [Roc Documentation - Pattern Matching](https://www.roc-lang.org/tutorial#pattern-matching)

</TabItem>
<TabItem value="v" label="V">

```v
// Pattern Matching auf Werten
x := 42

result := match x {
    0 { 'Null' }
    1...10 { 'Klein' }
    11...100 { 'Mittel' }
    else { 'Groß' }
}
println(result)
```

**Special features:**
- `match` als Expression mit Rückgabewert
- Unterstützt Ranges mit `...`
- `else` als Fallback (Pflicht, wenn nicht exhaustive)

**Further reading:**
- [V Documentation - Match](https://github.com/vlang/v/blob/master/doc/docs.md#match)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Pattern Matching auf Werten *)
f[0] := "Null"
f[1] := "Eins"
f[x_] := "Andere: " <> ToString[x]

f[0]  (* "Null" *)
f[1]  (* "Eins" *)
f[42] (* "Andere: 42" *)
```

**Special features:**
- Pattern Matching ist das zentrale Paradigma der Wolfram Language
- Funktionsdefinitionen verwenden Pattern Matching
- Unterstützt beliebig verschachtelte Muster

**Further reading:**
- [Wolfram Language Documentation - Patterns](https://reference.wolfram.com/language/guide/Patterns.html)

</TabItem>
</Tabs>


## 6.3.3. Pattern Matching auf Types

Pattern Matching ermöglicht die Dekomposition von Werten basierend auf ihrem Typ, nicht auf ihrem konkreten Wert.

### Languages {#sprachen}

<Tabs availableTabs={['csharp', 'dart', 'fsharp', 'haskell', 'haxe', 'java', 'lean4', 'mercury', 'ocaml', 'python', 'rust', 'scala', 'swift', 'v', 'wolfram-language']}>
<TabItem value="csharp" label="C#">

```csharp
// Pattern Matching auf Types (seit C# 7.0)
object obj = "Hallo";
string result = obj switch
{
    int i => $"Zahl: {i}",
    string s => $"Text: {s}",
    double d => $"Dezimal: {d}",
    _ => "Unbekannter Typ"
};
```

**Special features:**
- Type Pattern Matching seit C# 7.0
- Kann mit `is`-Ausdruck verwendet werden
- `_` als Catch-All-Pattern

**Further reading:**
- [C# Pattern Matching Documentation](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/functional/pattern-matching)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Pattern Matching auf Types
let obj: obj = "Hallo"
let result = match obj with
    | :? int as i -> $"Zahl: {i}"
    | :? string as s -> $"Text: {s}"
    | :? double as d -> $"Dezimal: {d}"
    | _ -> "Unbekannter Typ"
```

**Special features:**
- Type Pattern Matching mit `:?` Syntax
- Variablen können mit `as` gebunden werden
- `_` als Catch-All-Pattern

**Further reading:**
- [F# Pattern Matching](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/pattern-matching)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Pattern Matching auf Types
data Value = IntVal Int | StringVal String | DoubleVal Double

result :: Value -> String
result val = case val of
  IntVal i -> "Zahl: " ++ show i
  StringVal s -> "Text: " ++ s
  DoubleVal d -> "Dezimal: " ++ show d
```

**Special features:**
- Pattern Matching auf Algebraic Data Types
- Jeder Konstruktor kann gematcht werden
- Exhaustive Pattern Matching wird geprüft

**Further reading:**
- [Haskell Pattern Matching](https://www.haskell.org/tutorial/patterns.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Pattern Matching auf Types *)
type value = 
  | IntVal of int 
  | StringVal of string 
  | DoubleVal of float

let result = function
  | IntVal i -> "Zahl: " ^ string_of_int i
  | StringVal s -> "Text: " ^ s
  | DoubleVal d -> "Dezimal: " ^ string_of_float d
```

**Special features:**
- Pattern Matching auf Variant Types
- Jeder Konstruktor kann gematcht werden
- Exhaustive Pattern Matching wird geprüft

**Further reading:**
- [OCaml Pattern Matching](https://ocaml.org/manual/patterns.html)

</TabItem>
<TabItem value="python" label="Python">

```python
# Pattern Matching auf Types (seit Python 3.10)
# Benötigt: from typing import Union
obj: Union[int, str, float] = "Hallo"
match obj:
    case int(i):
        result = f"Zahl: {i}"
    case str(s):
        result = f"Text: {s}"
    case float(d):
        result = f"Dezimal: {d}"
    case _:
        result = "Unbekannter Typ"
```

**Special features:**
- Type Pattern Matching seit Python 3.10
- Kann mit Typ-Annotationen kombiniert werden
- `_` als Catch-All-Pattern

**Further reading:**
- [Python Pattern Matching](https://docs.python.org/3/tutorial/controlflow.html#match-statements)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Pattern Matching auf Types
enum Value {
    IntVal(i32),
    StringVal(String),
    DoubleVal(f64),
}

let obj = Value::StringVal("Hallo".to_string());
let result = match obj {
    Value::IntVal(i) => format!("Zahl: {}", i),
    Value::StringVal(s) => format!("Text: {}", s),
    Value::DoubleVal(d) => format!("Dezimal: {}", d),
};
```

**Special features:**
- Pattern Matching auf Enums
- Jeder Variant kann gematcht werden
- Exhaustive Pattern Matching wird geprüft

**Further reading:**
- [Rust Pattern Matching](https://doc.rust-lang.org/book/ch18-03-pattern-syntax.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Pattern Matching auf Types
sealed trait Value
case class IntVal(i: Int) extends Value
case class StringVal(s: String) extends Value
case class DoubleVal(d: Double) extends Value

val obj: Value = StringVal("Hallo")
val result = obj match {
  case IntVal(i) => s"Zahl: $i"
  case StringVal(s) => s"Text: $s"
  case DoubleVal(d) => s"Dezimal: $d"
}
```

**Special features:**
- Pattern Matching auf Case Classes
- Sealed Traits ermöglichen exhaustive Pattern Matching
- Jeder Case kann gematcht werden

**Further reading:**
- [Scala Pattern Matching](https://docs.scala-lang.org/tour/pattern-matching.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Pattern Matching auf Types
enum Value {
    case intVal(Int)
    case stringVal(String)
    case doubleVal(Double)
}

let obj: Value = .stringVal("Hallo")
let result = switch obj {
case .intVal(let i):
    "Zahl: \(i)"
case .stringVal(let s):
    "Text: \(s)"
case .doubleVal(let d):
    "Dezimal: \(d)"
}
```

**Special features:**
- Pattern Matching auf Enums mit Associated Values
- Jeder Case kann gematcht werden
- Exhaustive Pattern Matching wird geprüft

**Further reading:**
- [Swift Pattern Matching](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/patterns/)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Pattern Matching auf Types (seit Dart 3.0)
String describe(Object value) => switch (value) {
  int i => 'Integer: $i',
  String s => 'String: $s',
  double d => 'Double: $d',
  List<int> l => 'Int-Liste mit ${l.length} Elementen',
  _ => 'Unbekannter Typ',
};

// Type Patterns mit Variablenbindung
void process(Object obj) {
  if (obj case int value) {
    print('Integer: $value');
  }
}
```

**Special features:**
- Variable Patterns mit Typannotation binden und prüfen gleichzeitig
- Funktioniert in `switch`-Expressions und `if-case`-Statements
- Automatische Type Promotion nach erfolgreichem Match
- Unterstützt generische Typen im Pattern

**Further reading:**
- [Dart Documentation - Patterns](https://dart.dev/language/patterns)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Pattern Matching auf Enum-Typen
enum Animal {
    Dog(name:String);
    Cat(name:String);
    Bird;
}

var result = switch (animal) {
    case Dog(name): 'Hund: $name';
    case Cat(name): 'Katze: $name';
    case Bird: "Vogel";
};
```

**Special features:**
- Pattern Matching auf Enum-Konstruktoren
- Destrukturierung der Konstruktor-Parameter
- Compile-Zeit-Exhaustiveness-Checking

**Further reading:**
- [Haxe Documentation - Pattern Matching](https://haxe.org/manual/lf-pattern-matching.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Pattern Matching auf Types (seit Java 16)
Object obj = "Hello";

// instanceof mit Pattern Variable
if (obj instanceof String s) {
    System.out.println("String: " + s.toUpperCase());
} else if (obj instanceof Integer i) {
    System.out.println("Integer: " + (i * 2));
}

// Vor Java 16: expliziter Cast nötig
if (obj instanceof String) {
    String s = (String) obj;
    System.out.println(s.toUpperCase());
}
```

**Special features:**
- `instanceof` Pattern Matching seit Java 16 (JEP 394)
- Typ-Prüfung und Variablenbindung in einem Schritt
- Pattern Variable ist im Scope des `true`-Zweigs verfügbar
- Ersetzt explizite Casts nach `instanceof`

**Further reading:**
- [Oracle Java Documentation - Pattern Matching for instanceof](https://docs.oracle.com/en/java/javase/21/language/pattern-matching-instanceof-operator.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Pattern Matching on Types (Inductive Types)
inductive Shape where
  | circle (radius : Float)
  | rectangle (width : Float) (height : Float)

def describe : Shape → String
  | Shape.circle r => s!"Kreis mit Radius {r}"
  | Shape.rectangle w h => s!"Rechteck {w}×{h}"

#eval describe (Shape.circle 5.0)        -- "Kreis mit Radius 5.000000"
#eval describe (Shape.rectangle 3.0 4.0) -- "Rechteck 3.000000×4.000000"
```

**Special features:**
- Pattern matching on inductive types (Sum Types / Discriminated Unions)
- Each constructor represents its own "type case"
- Variables in patterns automatically bind the constructor values
- Exhaustiveness checking by the compiler

**Further reading:**
- [Lean 4 Documentation - Inductive Types](https://lean-lang.org/lean4/doc/inductive.html)
- [Lean 4 Documentation - Pattern Matching](https://lean-lang.org/lean4/doc/pattern.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Pattern Matching on Types (Algebraic Data Types)
:- type value
    --->    int_val(int)
    ;       string_val(string)
    ;       float_val(float).

:- func describe(value) = string.
describe(int_val(I)) = "Zahl: " ++ string.int_to_string(I).
describe(string_val(S)) = "Text: " ++ S.
describe(float_val(D)) = "Dezimal: " ++ string.float_to_string(D).
```

**Special features:**
- Pattern matching on algebraic data types (Discriminated Unions)
- Each constructor can be matched directly in the clause head
- Variables in patterns automatically bind the contained values
- Exhaustiveness is checked by the determinism system

**Further reading:**
- [Mercury Language Reference - Discriminated Unions](https://www.mercurylang.org/information/doc-release/mercury_ref/Discriminated-unions.html)

</TabItem>
<TabItem value="v" label="V">

```v
// Pattern Matching on Types (Sum Types)
type Shape = Circle | Rectangle

struct Circle { radius f64 }
struct Rectangle { width f64  height f64 }

fn describe(s Shape) string {
    return match s {
        Circle { 'Kreis mit Radius ${s.radius}' }
        Rectangle { 'Rechteck ${s.width}x${s.height}' }
    }
}
```

**Special features:**
- Type matching on sum types with `match`
- Automatic unwrapping of the concrete type
- Access to fields of the concrete type within the branch

**Further reading:**
- [V Documentation - Sum Types](https://github.com/vlang/v/blob/master/doc/docs.md#sum-types)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Pattern Matching on Types (Heads) *)
describe[x_Integer] := "Integer: " <> ToString[x]
describe[x_String] := "String: " <> x
describe[x_List] := "List mit " <> ToString[Length[x]] <> " Elementen"
describe[_] := "Unbekannter Typ"

describe[42]        (* "Integer: 42" *)
describe["Hello"]   (* "String: Hello" *)
describe[{1, 2}]   (* "List mit 2 Elementen" *)
```

**Special features:**
- `_Integer`, `_String`, `_List` etc. match on head types
- Supports user-defined head patterns

**Further reading:**
- [Wolfram Language Documentation - Patterns](https://reference.wolfram.com/language/guide/Patterns.html)

</TabItem>
</Tabs>


## 6.3.4. Match/Case Expressions

Match/Case Expressions are expressions that use pattern matching and return a value.

### Languages {#sprachen}

<Tabs availableTabs={['dart', 'elixir', 'elm', 'erlang', 'fsharp', 'gleam', 'haskell', 'haxe', 'idris', 'koka', 'lean4', 'ocaml', 'php', 'purescript', 'racket', 'roc', 'rust', 'scala', 'swift', 'v', 'wolfram-language']} yellowTabs={['python']} orangeTabs={['mercury']}>
<TabItem value="elixir" label="Elixir">

```elixir
# Match/Case Expression
value = 5
result = case value do
  0 -> "Null"
  1 -> "Eins"
  2 -> "Zwei"
  _ -> "Andere Zahl"
end
```

**Special features:**
- `case` is an expression that returns a value
- Pattern matching is a fundamental language feature
- `_` as catch-all pattern

**Further reading:**
- [Elixir Pattern Matching Guide](https://elixir-lang.org/getting-started/pattern-matching.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% Match/Case Expression
Value = 5,
Result = case Value of
    0 -> "Null";
    1 -> "Eins";
    2 -> "Zwei";
    _ -> "Andere Zahl"
end.
```

**Special features:**
- `case` is an expression that returns a value
- Pattern matching is a fundamental language feature
- `_` as catch-all pattern

**Further reading:**
- [Erlang Pattern Matching](https://www.erlang.org/doc/reference_manual/patterns.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Match/Case Expression
let value = 5
let result = match value with
    | 0 -> "Null"
    | 1 -> "Eins"
    | 2 -> "Zwei"
    | _ -> "Andere Zahl"
```

**Special features:**
- `match` is an expression that returns a value
- Pattern matching is a fundamental language feature
- `_` as catch-all pattern

**Further reading:**
- [F# Pattern Matching](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/pattern-matching)

</TabItem>
<TabItem value="gleam" label="Gleam">

```erlang
// Match/Case Expression
let value = 5
let result = case value {
  0 -> "Null"
  1 -> "Eins"
  2 -> "Zwei"
  _ -> "Andere Zahl"
}
```

**Special features:**
- `case` is an expression that returns a value
- Pattern matching is a fundamental language feature
- `_` as catch-all pattern

**Further reading:**
- [Gleam Pattern Matching](https://gleam.run/documentation/tour/pattern-matching/)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Match/Case Expression
value = 5
result = case value of
  0 -> "Null"
  1 -> "Eins"
  2 -> "Zwei"
  _ -> "Andere Zahl"
```

**Special features:**
- `case` is an expression that returns a value
- Pattern matching is a fundamental language feature
- `_` as catch-all pattern

**Further reading:**
- [Haskell Pattern Matching](https://www.haskell.org/tutorial/patterns.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Match/Case Expression *)
let value = 5 in
let result = match value with
  | 0 -> "Null"
  | 1 -> "Eins"
  | 2 -> "Zwei"
  | _ -> "Andere Zahl"
```

**Special features:**
- `match` is an expression that returns a value
- Pattern matching is a fundamental language feature
- `_` as catch-all pattern

**Further reading:**
- [OCaml Pattern Matching](https://ocaml.org/manual/patterns.html)

</TabItem>
<TabItem value="python" label="Python">

```python
# Match/Case Expression (since Python 3.10)
value = 5
match value:
    case 0:
        result = "Null"
    case 1:
        result = "Eins"
    case 2:
        result = "Zwei"
    case _:
        result = "Andere Zahl"
```

**Special features:**
- `match` is a statement, not an expression (since Python 3.10)
- Pattern matching since Python 3.10
- `_` as catch-all pattern

**Further reading:**
- [Python Pattern Matching](https://docs.python.org/3/tutorial/controlflow.html#match-statements)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Match/Case Expression
let value = 5;
let result = match value {
    0 => "Null",
    1 => "Eins",
    2 => "Zwei",
    _ => "Andere Zahl"
};
```

**Special features:**
- `match` is an expression that returns a value
- Pattern matching is a fundamental language feature
- `_` as catch-all pattern

**Further reading:**
- [Rust Pattern Matching](https://doc.rust-lang.org/book/ch18-03-pattern-syntax.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Match/Case Expression
val value = 5
val result = value match {
  case 0 => "Null"
  case 1 => "Eins"
  case 2 => "Zwei"
  case _ => "Andere Zahl"
}
```

**Special features:**
- `match` is an expression that returns a value
- Pattern matching is a fundamental language feature
- `_` as catch-all pattern

**Further reading:**
- [Scala Pattern Matching](https://docs.scala-lang.org/tour/pattern-matching.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Match/Case Expression
let value = 5
let result = switch value {
case 0:
    "Null"
case 1:
    "Eins"
case 2:
    "Zwei"
default:
    "Andere Zahl"
}
```

**Special features:**
- `switch` is an expression that returns a value (since Swift 5.9)
- Pattern matching is a fundamental language feature
- `default` as catch-all pattern

**Further reading:**
- [Swift Pattern Matching](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/patterns/)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Switch Expressions (since Dart 3.0)
var description = switch (value) {
  0 => 'Null',
  1 || 2 => 'Eins oder Zwei',    // OR-Pattern
  >= 3 && <= 9 => 'Einstellig',   // AND-Pattern mit Relational
  _ => 'Andere Zahl',
};

// Switch Expression mit komplexen Patterns
String format(Object value) => switch (value) {
  int i when i < 0 => 'Negativ: $i',
  int i => 'Positiv: $i',
  String s when s.isEmpty => 'Leerer String',
  String s => 'String: $s',
  _ => 'Unbekannt',
};
```

**Special features:**
- Switch expressions return a value
- Support OR patterns (`||`), AND patterns (`&&`)
- Guard clauses with `when`
- Exhaustiveness checking for sealed classes and enums
- Since Dart 3.0

**Further reading:**
- [Dart Documentation - Branches](https://dart.dev/language/branches)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Case Expression (returns a value)
type Shape
    = Circle Float
    | Rectangle Float Float

area : Shape -> Float
area shape =
    case shape of
        Circle r ->
            pi * r * r
        Rectangle w h ->
            w * h

-- Nested Pattern Matching
type Maybe a = Just a | Nothing

withDefault : a -> Maybe a -> a
withDefault default maybe =
    case maybe of
        Just value -> value
        Nothing    -> default
```

**Special features:**
- `case ... of` is an expression (not a statement)
- All branches must return the same type
- Compiler enforces exhaustiveness checking
- Supports destructuring in patterns

**Further reading:**
- [Elm Documentation - Pattern Matching](https://guide.elm-lang.org/types/pattern_matching.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Switch als Ausdruck
var description = switch (color) {
    case Red: "Rot";
    case Green: "Grün";
    case Blue: "Blau";
};
```

**Special features:**
- `switch` is an expression and returns a value
- No `break` needed
- Exhaustiveness checking for enums

**Further reading:**
- [Haxe Documentation - Switch](https://haxe.org/manual/expression-switch.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Case Expression
data Shape = Circle Double | Rectangle Double Double

area : Shape -> Double
area s = case s of
    Circle r => pi * r * r
    Rectangle w h => w * h

result : Double
result = area (Circle 5.0)
```

**Special features:**
- `case ... of` is an expression that returns a value
- Can be used anywhere an expression is expected
- Supports nested patterns

**Further reading:**
- [Idris 2 Documentation - Types and Functions](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Match/Case Expressions
type Shape
  Circle(radius: float64)
  Rectangle(width: float64, height: float64)

fun area(s: Shape): float64
  match s
    Circle(r)        -> 3.14159 * r * r
    Rectangle(w, h)  -> w * h

val myCircle = Circle(5.0)
val myRect = Rectangle(10.0, 4.0)

val areaCircle = area(myCircle) // 78.53975
val areaRect = area(myRect)     // 40.0
```

**Special features:**
- `match` expressions are the primary way for pattern matching in Koka
- They are expressions that return a value
- Often used with algebraic data types (ADTs)
- The compiler checks for exhaustiveness (all possible cases must be covered)

**Further reading:**
- [Koka Language Guide - Pattern Matching](https://koka-lang.github.io/koka/doc/book.html#sec-pattern-matching)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Match/Case Expression (returns a value)
inductive Shape where
  | circle (radius : Float)
  | rectangle (width : Float) (height : Float)

def area (s : Shape) : Float :=
  match s with
  | Shape.circle r => 3.14159 * r * r
  | Shape.rectangle w h => w * h

#eval area (Shape.circle 5.0)        -- 78.539750
#eval area (Shape.rectangle 10.0 4.0) -- 40.000000
```

**Special features:**
- `match` expressions are expressions that return a value
- Pattern matching is the primary way for case distinction in Lean 4
- Often used with inductive types (ADTs)
- The compiler checks for exhaustiveness

**Further reading:**
- [Lean 4 Documentation - Pattern Matching](https://lean-lang.org/lean4/doc/pattern.html)
- [Lean 4 Documentation - Inductive Types](https://lean-lang.org/lean4/doc/inductive.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Match/Case Expression (via If-Then-Else expression)
:- func describe(int) = string.
describe(Value) =
    ( if Value = 0 then "Null"
    else if Value = 1 then "Eins"
    else if Value = 2 then "Zwei"
    else "Andere Zahl"
    ).

% Alternative: function clauses (implicit match expression)
:- func describe_alt(int) = string.
describe_alt(0) = "Null".
describe_alt(1) = "Eins".
describe_alt(2) = "Zwei".
describe_alt(_) = "Andere Zahl".
```

**Special features:**
- Mercury has no dedicated `match`/`case` expression
- `if-then-else` is an expression that returns a value
- Alternative: function clauses with pattern matching in the clause head
- Both variants are idiomatic and expressive

**Further reading:**
- [Mercury Language Reference - Conditional Goals](https://www.mercurylang.org/information/doc-release/mercury_ref/Conditional-goals.html)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
// Match Expression (since PHP 8.0)
$value = 3;

$result = match ($value) {
    1, 2 => "Eins oder Zwei",
    3, 4 => "Drei oder Vier",
    default => "Anderer Wert",
};

// Match with no-match error
// When no case matches and no default is present: UnhandledMatchError
?>
```

**Special features:**
- `match` is an expression and returns a value
- Multiple values per arm separated by comma
- Strict comparison (`===`) instead of loose equality
- `UnhandledMatchError` when no arm and no `default` matches

**Further reading:**
- [PHP Documentation - match](https://www.php.net/manual/en/control-structures.match.php)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Match/Case Expressions
data Shape = Circle Number | Rectangle Number Number

area :: Shape -> Number
area shape = case shape of
    Circle r -> Math.pi * r * r
    Rectangle w h -> w * h
```

**Special features:**
- `case...of` syntax for pattern matching
- Is an expression that returns a value
- Compiler checks exhaustiveness

**Further reading:**
- [PureScript Documentation - Pattern Matching](https://github.com/purescript/documentation/blob/master/language/Pattern-Matching.md)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
(define (classify value)
  (match value
    [(? number?) "Zahl"]
    [(? string?) "String"]
    [(list a b) (format "Liste mit 2 Elementen: ~a, ~a" a b)]
    [_ "Unbekannt"]))

(classify 42)          ; "Zahl"
(classify "hello")     ; "String"
(classify '(1 2))      ; "Liste mit 2 Elementen: 1, 2"
```

**Special features:**
- `match` returns a value (is an expression)
- Supports predicates with `?`
- `_` as wildcard pattern

**Further reading:**
- [Racket Documentation - Pattern Matching](https://docs.racket-lang.org/reference/match.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- when/is Expression
result : Str
result =
    when color is
        Red -> "Rot"
        Green -> "Grün"
        Blue -> "Blau"
```

**Special features:**
- `when/is` is an expression that returns a value
- Can be used directly in bindings
- Exhaustive checking

**Further reading:**
- [Roc Documentation - Pattern Matching](https://www.roc-lang.org/tutorial#pattern-matching)

</TabItem>
<TabItem value="v" label="V">

```v
// Match Expression
day := 3

name := match day {
    1 { 'Montag' }
    2 { 'Dienstag' }
    3 { 'Mittwoch' }
    4 { 'Donnerstag' }
    5 { 'Freitag' }
    6, 7 { 'Wochenende' }
    else { 'Ungültig' }
}
println(name)
```

**Special features:**
- `match` is an expression (returns a value)
- Multiple values per branch with `,`
- `else` as default branch
- No fall-through

**Further reading:**
- [V Documentation - Match](https://github.com/vlang/v/blob/master/doc/docs.md#match)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Match/Case via Switch mit Patterns *)
describe[x_] := Switch[x,
    _Integer, "Integer",
    _String, "String",
    {__}, "Non-empty List",
    _, "Andere"
]

describe[42]       (* "Integer" *)
describe["hi"]     (* "String" *)
describe[{1, 2}]  (* "Non-empty List" *)
```

**Special features:**
- `Switch[]` supports pattern matching as case expressions
- Pattern matching is available in every function definition
- `Replace[expr, {pattern1 -> result1, pattern2 -> result2}]` as alternative

**Further reading:**
- [Wolfram Language Documentation - Switch](https://reference.wolfram.com/language/ref/Switch.html)

</TabItem>
</Tabs>


## 6.3.5. Pattern Matching for switch

Pattern Matching in switch statements enables the use of patterns instead of simple values.

### Languages {#sprachen}

<Tabs availableTabs={['csharp', 'dart', 'java', 'javascript', 'kotlin', 'swift', 'typescript']}>
<TabItem value="csharp" label="C#">

```csharp
// Pattern Matching for switch (since C# 8.0)
int value = 5;
string result = value switch
{
    0 => "Null",
    1 => "Eins",
    2 => "Zwei",
    > 10 => "Größer als zehn",
    _ => "Andere Zahl"
};
```

**Special features:**
- Pattern matching in switch expressions since C# 8.0
- Supports relational patterns (`>`, `<`, `>=`, `<=`)
- `_` as catch-all pattern

**Further reading:**
- [C# Pattern Matching Documentation](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/functional/pattern-matching)

</TabItem>
<TabItem value="java" label="Java">

```java
// Pattern Matching for switch (since Java 21)
Object obj = "Hello";
String result = switch (obj) {
    case Integer i    -> "Integer: " + i;
    case String s     -> "String: " + s;
    case int[] arr    -> "Array mit " + arr.length + " Elementen";
    case null         -> "null";
    default           -> "Unbekannt: " + obj;
};
```

**Special features:**
- Pattern matching for switch since Java 21 (JEP 441)
- Supports type patterns, guarded patterns (`when`), null patterns
- Arrow syntax (`->`) for cases
- `default` as catch-all pattern
- Exhaustiveness checking for sealed types

**Further reading:**
- [Oracle Java Documentation - Pattern Matching for switch](https://docs.oracle.com/en/java/javase/21/language/pattern-matching-switch-expressions-and-statements.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Pattern Matching for switch (traditional)
let value = 5;
let result;
switch (value) {
    case 0:
        result = "Null";
        break;
    case 1:
        result = "Eins";
        break;
    case 2:
        result = "Zwei";
        break;
    default:
        result = "Andere Zahl";
}
```

**Special features:**
- Traditional switch statement without pattern matching
- `break` is required
- `default` as catch-all pattern

**Further reading:**
- [MDN: switch Statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Pattern Matching for when (Kotlin's switch)
val value = 5
val result = when (value) {
    0 -> "Null"
    1 -> "Eins"
    2 -> "Zwei"
    else -> "Andere Zahl"
}
```

**Special features:**
- `when` is Kotlin's switch equivalent with pattern matching
- Supports various pattern types
- `else` as catch-all pattern

**Further reading:**
- [Kotlin when Expression](https://kotlinlang.org/docs/control-flow.html#when-expression)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Pattern Matching for switch
let value = 5
let result = switch value {
case 0:
    "Null"
case 1:
    "Eins"
case 2:
    "Zwei"
default:
    "Andere Zahl"
}
```

**Special features:**
- Pattern matching in switch statements since Swift 1.0
- Supports various pattern types
- `default` as catch-all pattern

**Further reading:**
- [Swift Pattern Matching](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/patterns/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Pattern Matching for switch (traditional)
let value: number = 5;
let result: string;
switch (value) {
    case 0:
        result = "Null";
        break;
    case 1:
        result = "Eins";
        break;
    case 2:
        result = "Zwei";
        break;
    default:
        result = "Andere Zahl";
}
```

**Special features:**
- Traditional switch statement without pattern matching
- `break` is required
- `default` as catch-all pattern

**Further reading:**
- [TypeScript: switch Statement](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Pattern Matching for switch (since Dart 3.0)
switch (value) {
  case int i when i > 0:
    print('Positive Zahl: $i');
  case String s:
    print('String: $s');
  case [int first, ...rest]:
    print('Liste mit erstem Element: $first');
  case {'name': String name}:
    print('Map mit Name: $name');
  default:
    print('Unbekannt');
}
```

**Special features:**
- Extended `switch` statements with pattern matching (since Dart 3.0)
- No `break` needed anymore (no fall-through)
- Supports list patterns, map patterns, object patterns
- Guard clauses with `when`
- `case` keyword still required

**Further reading:**
- [Dart Documentation - Branches](https://dart.dev/language/branches)

</TabItem>
</Tabs>


## 6.3.6. Destructuring Patterns (Object, Array)

Destructuring Patterns enable the extraction of values from objects and arrays directly in the pattern.

### Languages {#sprachen}

<Tabs availableTabs={['clojure', 'csharp', 'dart', 'elixir', 'elm', 'erlang', 'fsharp', 'gleam', 'haskell', 'haxe', 'idris', 'javascript', 'koka', 'kotlin', 'lean4', 'mercury', 'ocaml', 'prolog', 'purescript', 'python', 'racket', 'roc', 'rust', 'scala', 'swift', 'typescript', 'wolfram-language']}>
<TabItem value="csharp" label="C#">

```csharp
// Destructuring Patterns (since C# 8.0)
var point = (x: 5, y: 10);
var result = point switch
{
    (0, 0) => "Ursprung",
    (var x, var y) when x == y => "Auf Diagonale",
    (var x, var y) => $"Punkt: ({x}, {y})"
};

// Array Destructuring (since C# 12)
int[] arr = {1, 2, 3};
var arrResult = arr switch
{
    [0] => "Nur Null",
    [var first, ..] => $"Erstes Element: {first}"
};
```

**Special features:**
- Tuple destructuring since C# 8.0
- Array destructuring since C# 12
- Variables can be bound with `var`

**Further reading:**
- [C# Pattern Matching Documentation](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/functional/pattern-matching)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Destructuring Patterns
point = {5, 10}
result = case point do
  {0, 0} -> "Ursprung"
  {x, y} when x == y -> "Auf Diagonale"
  {x, y} -> "Punkt: (#{x}, #{y})"
end

# List-Destructuring
list = [1, 2, 3]
list_result = case list do
  [0] -> "Nur Null"
  [first | _] -> "Erstes Element: #{first}"
end
```

**Special features:**
- Tuple destructuring is a fundamental language feature
- List destructuring with `|` operator
- Guards can be used with `when`

**Further reading:**
- [Elixir Pattern Matching Guide](https://elixir-lang.org/getting-started/pattern-matching.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% Destructuring Patterns
Point = {5, 10},
Result = case Point of
    {0, 0} -> "Ursprung";
    {X, Y} when X == Y -> "Auf Diagonale";
    {X, Y} -> "Punkt: (" ++ integer_to_list(X) ++ ", " ++ integer_to_list(Y) ++ ")"
end.

% List-Destructuring
List = [1, 2, 3],
ListResult = case List of
    [0] -> "Nur Null";
    [First | _] -> "Erstes Element: " ++ integer_to_list(First)
end.
```

**Special features:**
- Tuple destructuring is a fundamental language feature
- List destructuring with `|` operator
- Guards can be used with `when`

**Further reading:**
- [Erlang Pattern Matching](https://www.erlang.org/doc/reference_manual/patterns.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Destructuring Patterns
let point = (5, 10)
let result = match point with
    | (0, 0) -> "Ursprung"
    | (x, y) when x = y -> "Auf Diagonale"
    | (x, y) -> $"Punkt: ({x}, {y})"

// List-Destructuring
let list = [1; 2; 3]
let listResult = match list with
    | [0] -> "Nur Null"
    | first::_ -> $"Erstes Element: {first}"
```

**Special features:**
- Tuple destructuring is a fundamental language feature
- List destructuring with `::` operator
- Guards can be used with `when`

**Further reading:**
- [F# Pattern Matching](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/pattern-matching)

</TabItem>
<TabItem value="gleam" label="Gleam">

```erlang
// Destructuring Patterns
let point = #(5, 10)
let result = case point {
  #(0, 0) -> "Ursprung"
  #(x, y) if x == y -> "Auf Diagonale"
  #(x, y) -> "Punkt: (" <> int.to_string(x) <> ", " <> int.to_string(y) <> ")"
}

// List-Destructuring
let list = [1, 2, 3]
let list_result = case list {
  [0] -> "Nur Null"
  [first, ..] -> "Erstes Element: " <> int.to_string(first)
}
```

**Special features:**
- Tuple destructuring is a fundamental language feature
- List destructuring with `..` for rest
- Guards can be used with `if`

**Further reading:**
- [Gleam Pattern Matching](https://gleam.run/documentation/tour/pattern-matching/)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Destructuring Patterns
point = (5, 10)
result = case point of
  (0, 0) -> "Ursprung"
  (x, y) | x == y -> "Auf Diagonale"
  (x, y) -> "Punkt: (" ++ show x ++ ", " ++ show y ++ ")"

-- List-Destructuring
list = [1, 2, 3]
listResult = case list of
  [0] -> "Nur Null"
  first:_ -> "Erstes Element: " ++ show first
```

**Special features:**
- Tuple destructuring is a fundamental language feature
- List destructuring with `:` operator
- Guards can be used with `|`

**Further reading:**
- [Haskell Pattern Matching](https://www.haskell.org/tutorial/patterns.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Destructuring Patterns
const point = {x: 5, y: 10};
const {x, y} = point;

// Array-Destructuring
const arr = [1, 2, 3];
const [first, ...rest] = arr;

// In switch (traditionell)
let result;
switch (true) {
    case x === 0 && y === 0:
        result = "Ursprung";
        break;
    case x === y:
        result = "Auf Diagonale";
        break;
    default:
        result = `Punkt: (${x}, ${y})`;
}
```

**Special features:**
- Destructuring assignment since ES6
- No pattern matching in switch statements
- Rest pattern with `...`

**Further reading:**
- [MDN: Destructuring Assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Destructuring Patterns
type Person
  Person(name: string, age: int)

val alice = Person("Alice", 30)

fun greet(p: Person): string
  match p
    Person(name, age) -> "Hallo " ++ name ++ ", du bist " ++ age.show ++ " Jahre alt."

// Tuple Destructuring
val (x, y) = (10, 20)

// List Destructuring
fun headOrDefault(xs: list<int>, default: int): int
  match xs
    Cons(h, _) -> h
    Nil        -> default
```

**Special features:**
- Destructuring is a core part of pattern matching
- Enables extraction of fields from records, elements from tuples and lists
- Can be used in `match` expressions, `val` bindings and function parameters
- `Cons` and `Nil` for list destructuring

**Further reading:**
- [Koka Language Guide - Pattern Matching](https://koka-lang.github.io/koka/doc/book.html#sec-pattern-matching)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Destructuring Patterns
data class Point(val x: Int, val y: Int)
val point = Point(5, 10)
val result = when (point) {
    Point(0, 0) -> "Ursprung"
    is Point -> if (point.x == point.y) "Auf Diagonale" else "Punkt: (${point.x}, ${point.y})"
}

// Array-Destructuring
val arr = arrayOf(1, 2, 3)
val (first) = arr
```

**Special features:**
- Destructuring in when expressions
- Data classes support destructuring
- Array destructuring supported

**Further reading:**
- [Kotlin Destructuring Declarations](https://kotlinlang.org/docs/destructuring-declarations.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Destructuring Patterns (Tupel)
def describeTuple (p : Nat × Nat) : String :=
  match p with
  | (0, 0) => "Ursprung"
  | (x, y) => s!"Punkt: ({x}, {y})"

-- Destructuring Patterns (Inductive Types)
inductive Shape where
  | circle (radius : Float)
  | rectangle (width : Float) (height : Float)

def describe : Shape → String
  | Shape.circle r => s!"Kreis mit Radius {r}"
  | Shape.rectangle w h => s!"Rechteck {w}×{h}"

-- List-Destructuring
def describeList : List Nat → String
  | [] => "Leere Liste"
  | [x] => s!"Ein Element: {x}"
  | x :: _ => s!"Erstes Element: {x}"
```

**Special features:**
- Destructuring on tuples, inductive types and lists
- `::` for head/tail destructuring with lists
- Patterns can be nested
- Can be used in `match` expressions, `let` bindings and function parameters

**Further reading:**
- [Lean 4 Documentation - Pattern Matching](https://lean-lang.org/lean4/doc/pattern.html)
- [Lean 4 Documentation - Inductive Types](https://lean-lang.org/lean4/doc/inductive.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Destructuring Patterns
:- type point ---> point(int, int).

:- func describe_point(point) = string.
describe_point(point(0, 0)) = "Ursprung".
describe_point(point(X, Y)) =
    "Punkt: (" ++ int_to_string(X) ++ ", " ++ int_to_string(Y) ++ ")".

% List-Destructuring
:- func describe_list(list(int)) = string.
describe_list([]) = "Leere Liste".
describe_list([First | _]) = "Erstes Element: " ++ int_to_string(First).
```

**Special features:**
- Destructuring via pattern matching in function clause heads
- Constructor destructuring by specifying the structure in the pattern
- List destructuring with `[Head | Tail]` syntax
- Nested destructuring of arbitrary depth possible

**Further reading:**
- [Mercury Language Reference - Discriminated Unions](https://www.mercurylang.org/information/doc-release/mercury_ref/Discriminated-unions.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Destructuring Patterns *)
let point = (5, 10) in
let result = match point with
  | (0, 0) -> "Ursprung"
  | (x, y) when x = y -> "Auf Diagonale"
  | (x, y) -> "Punkt: (" ^ string_of_int x ^ ", " ^ string_of_int y ^ ")"

(* List-Destructuring *)
let list = [1; 2; 3] in
let list_result = match list with
  | [0] -> "Nur Null"
  | first::_ -> "Erstes Element: " ^ string_of_int first
```

**Special features:**
- Tuple destructuring is a fundamental language feature
- List destructuring with `::` operator
- Guards can be used with `when`

**Further reading:**
- [OCaml Pattern Matching](https://ocaml.org/manual/patterns.html)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Destructuring of Compound Terms
describe_point(point(0, 0), "Ursprung").
describe_point(point(X, X), "Auf Diagonale") :- X \= 0.
describe_point(point(X, Y), Result) :-
    format(atom(Result), "Punkt: (~w, ~w)", [X, Y]).

% List-Destructuring
describe_list([0], "Nur Null").
describe_list([First|_], Result) :-
    format(atom(Result), "Erstes Element: ~w", [First]).

% Nested Destructuring
process(person(name(First, Last), Age), Result) :-
    format(atom(Result), "~w ~w, ~w Jahre", [First, Last, Age]).
```

**Special features:**
- Destructuring happens via unification of compound terms (functors)
- Lists are destructured with `[Head|Tail]`
- Nested destructuring of arbitrary depth is possible
- Variables in the clause head automatically bind the corresponding parts

**Further reading:**
- [SWI-Prolog – Terms](https://www.swi-prolog.org/pldoc/man?section=manipterm)

</TabItem>
<TabItem value="python" label="Python">

```python
# Destructuring Patterns (since Python 3.10)
point = (5, 10)
match point:
    case (0, 0):
        result = "Ursprung"
    case (x, y) if x == y:
        result = "Auf Diagonale"
    case (x, y):
        result = f"Punkt: ({x}, {y})"

# List-Destructuring
arr = [1, 2, 3]
match arr:
    case [0]:
        result = "Nur Null"
    case [first, *_]:
        result = f"Erstes Element: {first}"
```

**Special features:**
- Tuple destructuring since Python 3.10
- List destructuring with `*_` for rest
- Guards can be used with `if`

**Further reading:**
- [Python Pattern Matching](https://docs.python.org/3/tutorial/controlflow.html#match-statements)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Destructuring Patterns
let point = (5, 10);
let result = match point {
    (0, 0) => "Ursprung",
    (x, y) if x == y => "Auf Diagonale",
    (x, y) => format!("Punkt: ({}, {})", x, y)
};

// Array-Destructuring
let arr = [1, 2, 3];
let arr_result = match arr {
    [0] => "Nur Null",
    [first, ..] => format!("Erstes Element: {}", first)
};
```

**Special features:**
- Tuple destructuring is a fundamental language feature
- Array destructuring with `..` for rest
- Guards can be used with `if`

**Further reading:**
- [Rust Pattern Matching](https://doc.rust-lang.org/book/ch18-03-pattern-syntax.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Destructuring Patterns
val point = (5, 10)
val result = point match {
  case (0, 0) => "Ursprung"
  case (x, y) if x == y => "Auf Diagonale"
  case (x, y) => s"Punkt: ($x, $y)"
}

// List-Destructuring
val list = List(1, 2, 3)
val listResult = list match {
  case 0 :: Nil => "Nur Null"
  case first :: _ => s"Erstes Element: $first"
}
```

**Special features:**
- Tuple destructuring is a fundamental language feature
- List destructuring with `::` operator
- Guards can be used with `if`

**Further reading:**
- [Scala Pattern Matching](https://docs.scala-lang.org/tour/pattern-matching.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Destructuring Patterns
let point = (x: 5, y: 10)
let result = switch point {
case (0, 0):
    "Ursprung"
case let (x, y) where x == y:
    "Auf Diagonale"
case let (x, y):
    "Punkt: (\(x), \(y))"
}

// Array-Destructuring
let arr = [1, 2, 3]
let arrResult = switch arr {
case [0]:
    "Nur Null"
case let first, _, _:
    "Erstes Element: \(first)"
default:
    "Andere"
}
```

**Special features:**
- Tuple destructuring is a fundamental language feature
- Array destructuring supported
- Guards can be used with `where`

**Further reading:**
- [Swift Pattern Matching](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/patterns/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Destructuring Patterns
const point = {x: 5, y: 10};
const {x, y} = point;

// Array-Destructuring
const arr = [1, 2, 3];
const [first, ...rest] = arr;

// In switch (traditionell)
let result: string;
switch (true) {
    case x === 0 && y === 0:
        result = "Ursprung";
        break;
    case x === y:
        result = "Auf Diagonale";
        break;
    default:
        result = `Punkt: (${x}, ${y})`;
}
```

**Special features:**
- Destructuring assignment since ES6
- No pattern matching in switch statements
- Rest pattern with `...`

**Further reading:**
- [TypeScript: Destructuring](https://www.typescriptlang.org/docs/handbook/variable-declarations.html#destructuring)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Sequential Destructuring (Vektoren/Listen)
(let [[a b c] [1 2 3]]
  (println a b c))  ; 1 2 3

;; Mit Rest
(let [[head & tail] [1 2 3 4 5]]
  (println head tail))  ; 1 (2 3 4 5)

;; Map Destructuring
(let [{:keys [name age]} {:name "Alice" :age 30}]
  (println name age))  ; Alice 30

;; Verschachtelt
(let [{:keys [name] {:keys [city]} :address}
      {:name "Alice" :address {:city "Berlin"}}]
  (println name city))  ; Alice Berlin

;; Mit Defaults
(let [{:keys [name age] :or {age 0}} {:name "Alice"}]
  (println name age))  ; Alice 0
```

**Special features:**
- Sequential destructuring for vectors and lists
- Map destructuring with `:keys`, `:strs`, `:syms`
- Can be combined nested
- Defaults via `:or`
- Works in `let`, `fn`, `defn`, `for`, `doseq`

**Further reading:**
- [Clojure Documentation - Destructuring](https://clojure.org/guides/destructuring)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Destructuring Patterns (since Dart 3.0)
// List-Destructuring
var [a, b, c] = [1, 2, 3];

// Map-Destructuring
var {'name': name, 'age': age} = {'name': 'Alice', 'age': 30};

// Record-Destructuring
var (x, y) = (1, 2);
var (name: n, age: a2) = (name: 'Bob', age: 25);

// Object-Destructuring
class Point {
  final int x, y;
  Point(this.x, this.y);
}

var Point(:x, :y) = Point(3, 4);
print('$x, $y');  // 3, 4
```

**Special features:**
- List patterns: `[a, b, ...rest]`
- Map patterns: `{'key': value}`
- Record patterns: `(a, b)` and `(name: a, age: b)`
- Object patterns: `ClassName(:field1, :field2)`
- Rest pattern `...` in lists

**Further reading:**
- [Dart Documentation - Patterns](https://dart.dev/language/patterns)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Tuple Destructuring
swap : (a, b) -> (b, a)
swap tuple =
    case tuple of
        (x, y) -> (y, x)

-- Custom Type Destructuring
type Shape
    = Circle Float
    | Rectangle Float Float

width : Shape -> Float
width shape =
    case shape of
        Circle r -> r * 2
        Rectangle w _ -> w

-- List Destructuring
head : List a -> Maybe a
head list =
    case list of
        first :: _ -> Just first
        [] -> Nothing
```

**Special features:**
- Destructuring in `case` expressions and `let` bindings
- Supports tuples, custom types and lists
- `::` for head/rest destructuring of lists
- `_` as wildcard for ignored values

**Further reading:**
- [Elm Documentation - Pattern Matching](https://guide.elm-lang.org/types/pattern_matching.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Destructuring in switch
enum Expr {
    Add(left:Expr, right:Expr);
    Const(value:Int);
}

function eval(expr:Expr):Int {
    return switch (expr) {
        case Add(Const(a), Const(b)): a + b;
        case Add(left, right): eval(left) + eval(right);
        case Const(v): v;
    };
}
```

**Special features:**
- Nested destructuring in enum patterns
- Deep pattern resolution

**Further reading:**
- [Haxe Documentation - Pattern Matching](https://haxe.org/manual/lf-pattern-matching.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Destructuring on Tuples
swap : (a, b) -> (b, a)
swap (x, y) = (y, x)

-- Destructuring on Data Types
data Point = MkPoint Double Double

getX : Point -> Double
getX (MkPoint x _) = x

-- Destructuring on Lists
headAndTail : List a -> Maybe (a, List a)
headAndTail (x :: xs) = Just (x, xs)
headAndTail [] = Nothing
```

**Special features:**
- Destructuring happens via pattern matching on constructors
- Works with tuples, lists and user-defined types
- Wildcards (`_`) for unused parts

**Further reading:**
- [Idris 2 Documentation - Types and Functions](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Destructuring Patterns
data Pair a b = Pair a b

getFirst :: forall a b. Pair a b -> a
getFirst (Pair x _) = x

-- Record Destructuring
getName :: { name :: String, age :: Int } -> String
getName { name } = name

-- Array Destructuring
headOrDefault :: Array Int -> Int
headOrDefault [x] = x
headOrDefault _ = 0
```

**Special features:**
- Destructuring in function parameters and `case` expressions
- Supports records, data types and arrays
- Wildcard `_` for ignored values

**Further reading:**
- [PureScript Documentation - Pattern Matching](https://github.com/purescript/documentation/blob/master/language/Pattern-Matching.md)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
(struct point (x y))

(define (describe-point p)
  (match p
    [(point x y) (format "Point(~a, ~a)" x y)]))

(define (sum-list lst)
  (match lst
    [(list a b c) (+ a b c)]
    [(list a b) (+ a b)]
    [_ 0]))

(describe-point (point 3 4))  ; "Point(3, 4)"
(sum-list '(1 2 3))           ; 6
```

**Special features:**
- Destructuring for structs, lists and vectors
- Automatic binding of components
- Nested patterns possible

**Further reading:**
- [Racket Documentation - Pattern Matching](https://docs.racket-lang.org/reference/match.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Record Destructuring
point = { x: 1, y: 2 }
{ x, y } = point

-- Tag Union Destructuring
when result is
    Ok value -> value
    Err msg -> msg
```

**Special features:**
- Record destructuring with `{ field1, field2 }`
- Tag union destructuring in `when/is`
- Tuple destructuring with `(a, b)`

**Further reading:**
- [Roc Documentation - Pattern Matching](https://www.roc-lang.org/tutorial#pattern-matching)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Destructuring of Lists *)
{a, b, c} = {1, 2, 3};
Print[a]  (* 1 *)

(* Destructuring in Function Parameters *)
sum[{x_, y_}] := x + y
sum[{3, 4}]  (* 7 *)

(* Nested Destructuring *)
f[{a_, {b_, c_}}] := a + b + c
f[{1, {2, 3}}]  (* 6 *)
```

**Special features:**
- Lists can be destructured directly
- Function parameters support nested patterns
- Supports arbitrary depth nesting

**Further reading:**
- [Wolfram Language Documentation - Patterns](https://reference.wolfram.com/language/guide/Patterns.html)

</TabItem>
</Tabs>


## 6.3.7. Record Patterns

Record Patterns enable the decomposition of records/structures with named fields.

### Languages {#sprachen}

<Tabs availableTabs={['csharp', 'dart', 'elixir', 'elm', 'erlang', 'fsharp', 'gleam', 'haskell', 'java', 'koka', 'lean4', 'ocaml', 'purescript', 'python', 'roc', 'rust', 'scala', 'swift']}>
<TabItem value="csharp" label="C#">

```csharp
// Record Patterns (since C# 8.0)
record Point(int X, int Y);
var point = new Point(5, 10);
var result = point switch
{
    Point(0, 0) => "Ursprung",
    Point(var x, var y) when x == y => "Auf Diagonale",
    Point(var x, var y) => $"Punkt: ({x}, {y})"
};
```

**Special features:**
- Record patterns since C# 8.0
- Positional patterns for records
- Guards can be used

**Further reading:**
- [C# Pattern Matching Documentation](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/functional/pattern-matching)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Record Patterns
defmodule Point do
  defstruct [:x, :y]
end

point = %Point{x: 5, y: 10}
result = case point do
  %Point{x: 0, y: 0} -> "Ursprung"
  %Point{x: x, y: y} when x == y -> "Auf Diagonale"
  %Point{x: x, y: y} -> "Punkt: (#{x}, #{y})"
end
```

**Special features:**
- Struct pattern matching is a fundamental language feature
- Named field patterns
- Guards can be used with `when`

**Further reading:**
- [Elixir Pattern Matching Guide](https://elixir-lang.org/getting-started/pattern-matching.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% Record Patterns
-record(point, {x, y}).

Point = #point{x = 5, y = 10},
Result = case Point of
    #point{x = 0, y = 0} -> "Ursprung";
    #point{x = X, y = Y} when X == Y -> "Auf Diagonale";
    #point{x = X, y = Y} -> "Punkt: (" ++ integer_to_list(X) ++ ", " ++ integer_to_list(Y) ++ ")"
end.
```

**Special features:**
- Record pattern matching is a fundamental language feature
- Named field patterns
- Guards can be used with `when`

**Further reading:**
- [Erlang Records](https://www.erlang.org/doc/reference_manual/records.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Record Patterns
type Point = { X: int; Y: int }
let point = { X = 5; Y = 10 }
let result = match point with
    | { X = 0; Y = 0 } -> "Ursprung"
    | { X = x; Y = y } when x = y -> "Auf Diagonale"
    | { X = x; Y = y } -> $"Punkt: ({x}, {y})"
```

**Special features:**
- Record pattern matching is a fundamental language feature
- Named field patterns
- Guards can be used with `when`

**Further reading:**
- [F# Pattern Matching](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/pattern-matching)

</TabItem>
<TabItem value="gleam" label="Gleam">

```erlang
// Record Patterns
pub type Point {
  Point(x: Int, y: Int)
}

let point = Point(5, 10)
let result = case point {
  Point(0, 0) -> "Ursprung"
  Point(x, y) if x == y -> "Auf Diagonale"
  Point(x, y) -> "Punkt: (" <> int.to_string(x) <> ", " <> int.to_string(y) <> ")"
}
```

**Special features:**
- Custom type pattern matching is a fundamental language feature
- Positional patterns for records
- Guards can be used with `if`

**Further reading:**
- [Gleam Pattern Matching](https://gleam.run/documentation/tour/pattern-matching/)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Record Patterns
data Point = Point { x :: Int, y :: Int }

point = Point { x = 5, y = 10 }
result = case point of
  Point { x = 0, y = 0 } -> "Ursprung"
  Point { x = x, y = y } | x == y -> "Auf Diagonale"
  Point { x = x, y = y } -> "Punkt: (" ++ show x ++ ", " ++ show y ++ ")"
```

**Special features:**
- Record pattern matching is a fundamental language feature
- Named field patterns
- Guards can be used with `|`

**Further reading:**
- [Haskell Pattern Matching](https://www.haskell.org/tutorial/patterns.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Record Patterns *)
type point = { x : int; y : int }

let point = { x = 5; y = 10 } in
let result = match point with
  | { x = 0; y = 0 } -> "Ursprung"
  | { x = x; y = y } when x = y -> "Auf Diagonale"
  | { x = x; y = y } -> "Punkt: (" ^ string_of_int x ^ ", " ^ string_of_int y ^ ")"
```

**Special features:**
- Record pattern matching is a fundamental language feature
- Named field patterns
- Guards can be used with `when`

**Further reading:**
- [OCaml Pattern Matching](https://ocaml.org/manual/patterns.html)

</TabItem>
<TabItem value="python" label="Python">

```python
# Record Patterns (since Python 3.10)
# Required: from dataclasses import dataclass
@dataclass
class Point:
    x: int
    y: int

point = Point(5, 10)
match point:
    case Point(x=0, y=0):
        result = "Ursprung"
    case Point(x=x, y=y) if x == y:
        result = "Auf Diagonale"
    case Point(x=x, y=y):
        result = f"Punkt: ({x}, {y})"
```

**Special features:**
- Record patterns since Python 3.10
- Named field patterns with `=`
- Guards can be used with `if`

**Further reading:**
- [Python Pattern Matching](https://docs.python.org/3/tutorial/controlflow.html#match-statements)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Record Patterns
struct Point {
    x: i32,
    y: i32,
}

let point = Point { x: 5, y: 10 };
let result = match point {
    Point { x: 0, y: 0 } => "Ursprung",
    Point { x, y } if x == y => "Auf Diagonale",
    Point { x, y } => format!("Punkt: ({}, {})", x, y),
};
```

**Special features:**
- Struct pattern matching is a fundamental language feature
- Named field patterns
- Guards can be used with `if`

**Further reading:**
- [Rust Pattern Matching](https://doc.rust-lang.org/book/ch18-03-pattern-syntax.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Record Patterns
case class Point(x: Int, y: Int)

val point = Point(5, 10)
val result = point match {
  case Point(0, 0) => "Ursprung"
  case Point(x, y) if x == y => "Auf Diagonale"
  case Point(x, y) => s"Punkt: ($x, $y)"
}
```

**Special features:**
- Case class pattern matching is a fundamental language feature
- Positional patterns for case classes
- Guards can be used with `if`

**Further reading:**
- [Scala Pattern Matching](https://docs.scala-lang.org/tour/pattern-matching.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Record Patterns
struct Point {
    let x: Int
    let y: Int
}

let point = Point(x: 5, y: 10)
let result = switch point {
case Point(x: 0, y: 0):
    "Ursprung"
case let Point(x: x, y: y) where x == y:
    "Auf Diagonale"
case let Point(x: x, y: y):
    "Punkt: (\(x), \(y))"
}
```

**Special features:**
- Struct pattern matching is a fundamental language feature
- Named field patterns
- Guards can be used with `where`

**Further reading:**
- [Swift Pattern Matching](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/patterns/)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Record Patterns (since Dart 3.0)
// Positional Record Pattern
var record = (1, 'hello', true);
var (number, text, flag) = record;

// Named Record Pattern
var named = (name: 'Alice', age: 30);
var (name: n, age: a) = named;

// In switch
String describe((int, String) pair) => switch (pair) {
  (0, _) => 'Null mit beliebigem String',
  (_, '') => 'Beliebige Zahl mit leerem String',
  (int n, String s) => '$s: $n',
};
```

**Special features:**
- Positional and named record patterns
- Records are a language feature since Dart 3.0
- Record patterns support nested patterns
- Wildcard `_` for unneeded fields

**Further reading:**
- [Dart Documentation - Records](https://dart.dev/language/records)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Record Pattern in function parameters
greet : { name : String, age : Int } -> String
greet { name, age } =
    name ++ " is " ++ String.fromInt age

-- Record Pattern in let-bindings
example =
    let
        person = { name = "Alice", age = 30 }
        { name } = person
    in
    "Hello, " ++ name
```

**Special features:**
- Record destructuring extracts fields by name
- Not all fields need to be extracted
- Works in function parameters and `let`-bindings

**Further reading:**
- [Elm Documentation - Records](https://guide.elm-lang.org/types/records.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Record Patterns (since Java 21)
record Point(int x, int y) {}

Object obj = new Point(3, 4);

// Record Pattern in instanceof
if (obj instanceof Point(int x, int y)) {
    System.out.println("x=" + x + ", y=" + y);
}

// Record Pattern in switch
String result = switch (obj) {
    case Point(int x, int y) -> "Point(" + x + ", " + y + ")";
    default -> "Not a Point";
};
```

**Special features:**
- Record Patterns since Java 21 (JEP 440)
- Destructuring of Records in `instanceof` and `switch`
- Nested Record Patterns possible
- Combinable with Guarded Patterns (`when`)

**Further reading:**
- [Oracle Java Documentation - Record Patterns](https://docs.oracle.com/en/java/javase/21/language/record-patterns.html)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Record Patterns
type User
  User(id: int, name: string, email: string)

fun getUserInfo(u: User): string
  match u
    User(_, name, email) -> name ++ " (" ++ email ++ ")"

// Nested Record Patterns
type Address
  Address(city: string, zip: string)

type Customer
  Customer(name: string, address: Address)

fun getCity(c: Customer): string
  match c
    Customer(_, Address(city, _)) -> city
```

**Special features:**
- Koka supports Record Patterns through constructor destructuring
- Fields are extracted positionally (by order of constructor parameters)
- Wildcards (`_`) for uninteresting fields
- Nested Patterns enable deep destructuring

**Further reading:**
- [Koka Language Guide - Pattern Matching](https://koka-lang.github.io/koka/doc/book.html#sec-pattern-matching)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Record / Structure Patterns
structure Point where
  x : Float
  y : Float

def describe (p : Point) : String :=
  match p with
  | ⟨0.0, 0.0⟩ => "Origin"
  | ⟨x, y⟩ => s!"Point: ({x}, {y})"

-- Nested Structure Patterns
structure Address where
  city : String
  zip : String

structure Customer where
  name : String
  address : Address

def getCity (c : Customer) : String :=
  match c with
  | ⟨_, ⟨city, _⟩⟩ => city
```

**Special features:**
- Structures can be destructured with Anonymous Constructor `⟨...⟩`
- Fields are extracted positionally
- Nested Patterns enable deep destructuring
- Wildcards (`_`) for uninteresting fields

**Further reading:**
- [Lean 4 Documentation - Structures](https://lean-lang.org/lean4/doc/struct.html)
- [Lean 4 Documentation - Pattern Matching](https://lean-lang.org/lean4/doc/pattern.html)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Record Patterns
greet :: { name :: String, age :: Int } -> String
greet { name, age } = name <> " (" <> show age <> ")"

-- Partielles Record Pattern
getName :: { name :: String | r } -> String
getName { name } = name
```

**Special features:**
- Records can be destructured directly in Patterns
- Supports partial Record Patterns with Row Polymorphism (`| r`)

**Further reading:**
- [PureScript Documentation - Pattern Matching](https://github.com/purescript/documentation/blob/master/language/Pattern-Matching.md)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Record Patterns
getName : { name : Str }* -> Str
getName = \{ name } -> name
```

**Special features:**
- Record Patterns extract fields
- `{ name }*` for open Record types (with additional fields)

**Further reading:**
- [Roc Documentation - Records](https://www.roc-lang.org/tutorial#records)

</TabItem>
</Tabs>


## 6.3.8. Guard Patterns

Guard Patterns enable additional conditions in Pattern Matching that go beyond the pattern structure.

### Languages {#sprachen}

<Tabs availableTabs={['csharp', 'dart', 'elixir', 'erlang', 'fsharp', 'gleam', 'haskell', 'haxe', 'idris', 'java', 'koka', 'mercury', 'ocaml', 'prolog', 'purescript', 'python', 'racket', 'roc', 'rust', 'scala', 'swift', 'wolfram-language']}>
<TabItem value="csharp" label="C#">

```csharp
// Guard Patterns (since C# 8.0)
int value = 5;
string result = value switch
{
    > 10 => "Greater than ten",
    < 0 => "Negative",
    >= 0 and <= 10 => "Between zero and ten",
    _ => "Other"
};
```

**Special features:**
- Guard Patterns with relational operators since C# 8.0
- Combination with `and`, `or`, `not`
- `when` clauses in switch statements

**Further reading:**
- [C# Pattern Matching Documentation](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/functional/pattern-matching)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Guard Patterns
value = 5
result = case value do
  n when n > 10 -> "Greater than ten"
  n when n < 0 -> "Negative"
  n when n >= 0 and n <= 10 -> "Between zero and ten"
  _ -> "Other"
end
```

**Special features:**
- Guards with `when` clause
- Supports various guard functions
- Combination with `and`, `or`, `not`

**Further reading:**
- [Elixir Pattern Matching Guide](https://elixir-lang.org/getting-started/pattern-matching.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% Guard Patterns
Value = 5,
Result = case Value of
    N when N > 10 -> "Greater than ten";
    N when N < 0 -> "Negative";
    N when N >= 0, N =< 10 -> "Between zero and ten";
    _ -> "Other"
end.
```

**Special features:**
- Guards with `when` clause
- Supports various guard functions
- Combination with `,` (and) and `;` (or)

**Further reading:**
- [Erlang Pattern Matching](https://www.erlang.org/doc/reference_manual/patterns.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Guard Patterns
let value = 5
let result = match value with
    | n when n > 10 -> "Greater than ten"
    | n when n < 0 -> "Negative"
    | n when n >= 0 && n <= 10 -> "Between zero and ten"
    | _ -> "Other"
```

**Special features:**
- Guards with `when` clause
- Supports various conditions
- Combination with `&&`, `||`, `not`

**Further reading:**
- [F# Pattern Matching](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/pattern-matching)

</TabItem>
<TabItem value="gleam" label="Gleam">

```erlang
// Guard Patterns
let value = 5
let result = case value {
  n if n > 10 -> "Greater than ten"
  n if n < 0 -> "Negative"
  n if n >= 0 && n <= 10 -> "Between zero and ten"
  _ -> "Other"
}
```

**Special features:**
- Guards with `if` clause
- Supports various conditions
- Combination with `&&`, `||`, `!`

**Further reading:**
- [Gleam Pattern Matching](https://gleam.run/documentation/tour/pattern-matching/)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Guard Patterns
value = 5
result = case value of
  n | n > 10 -> "Greater than ten"
  n | n < 0 -> "Negative"
  n | n >= 0 && n <= 10 -> "Between zero and ten"
  _ -> "Other"
```

**Special features:**
- Guards with `|` syntax
- Supports various conditions
- Combination with `&&`, `||`, `not`

**Further reading:**
- [Haskell Pattern Matching](https://www.haskell.org/tutorial/patterns.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Guard Patterns *)
let value = 5 in
let result = match value with
  | n when n > 10 -> "Greater than ten"
  | n when n < 0 -> "Negative"
  | n when n >= 0 && n <= 10 -> "Between zero and ten"
  | _ -> "Other"
```

**Special features:**
- Guards with `when` clause
- Supports various conditions
- Combination with `&&`, `||`, `not`

**Further reading:**
- [OCaml Pattern Matching](https://ocaml.org/manual/patterns.html)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Guard Patterns via conditions in clause body
classify(N, "Greater than ten") :- N > 10.
classify(N, "Negative") :- N < 0.
classify(N, "Between zero and ten") :- N >= 0, N =< 10.
classify(_, "Other").
```

**Special features:**
- Guards in Prolog are expressed through conditions in the clause body
- Arithmetic comparisons (`>`, `<`, `>=`, `=<`) serve as guard conditions
- Multiple conditions are linked with `,` (conjunction)
- Clauses are checked sequentially – the first matching clause is used

**Further reading:**
- [SWI-Prolog – Arithmetic](https://www.swi-prolog.org/pldoc/man?section=arith)

</TabItem>
<TabItem value="python" label="Python">

```python
# Guard Patterns (since Python 3.10)
value = 5
match value:
    case n if n > 10:
        result = "Greater than ten"
    case n if n < 0:
        result = "Negative"
    case n if n >= 0 and n <= 10:
        result = "Between zero and ten"
    case _:
        result = "Other"
```

**Special features:**
- Guards with `if` clause since Python 3.10
- Supports various conditions
- Combination with `and`, `or`, `not`

**Further reading:**
- [Python Pattern Matching](https://docs.python.org/3/tutorial/controlflow.html#match-statements)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Guard Patterns
let value = 5;
let result = match value {
    n if n > 10 => "Greater than ten",
    n if n < 0 => "Negative",
    n if n >= 0 && n <= 10 => "Between zero and ten",
    _ => "Other"
};
```

**Special features:**
- Guards with `if` clause
- Supports various conditions
- Combination with `&&`, `||`, `!`

**Further reading:**
- [Rust Pattern Matching](https://doc.rust-lang.org/book/ch18-03-pattern-syntax.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Guard Patterns
val value = 5
val result = value match {
  case n if n > 10 => "Greater than ten"
  case n if n < 0 => "Negative"
  case n if n >= 0 && n <= 10 => "Between zero and ten"
  case _ => "Other"
}
```

**Special features:**
- Guards with `if` clause
- Supports various conditions
- Combination with `&&`, `||`, `!`

**Further reading:**
- [Scala Pattern Matching](https://docs.scala-lang.org/tour/pattern-matching.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Guard Patterns
let value = 5
let result = switch value {
case let n where n > 10:
    "Greater than ten"
case let n where n < 0:
    "Negative"
case let n where n >= 0 && n <= 10:
    "Between zero and ten"
default:
    "Other"
}
```

**Special features:**
- Guards with `where` clause
- Supports various conditions
- Combination with `&&`, `||`, `!`

**Further reading:**
- [Swift Pattern Matching](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/patterns/)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Guard Patterns with when (since Dart 3.0)
String categorize(int value) => switch (value) {
  int n when n < 0 => 'Negative',
  int n when n == 0 => 'Zero',
  int n when n <= 100 => 'Small',
  int n when n <= 1000 => 'Medium',
  _ => 'Large',
};

// Guards in if-case
if (value case int n when n.isEven) {
  print('Even number: $n');
}

// Guards with complex conditions
switch (shape) {
  case Rectangle(:var width, :var height) when width == height:
    print('Square');
  case Rectangle():
    print('Rectangle');
}
```

**Special features:**
- `when` keyword for guard clauses
- Guards can contain arbitrary expressions
- Can access bound variables from the pattern
- Since Dart 3.0

**Further reading:**
- [Dart Documentation - Patterns](https://dart.dev/language/patterns)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Guard Patterns
var result = switch (value) {
    case x if (x > 100): "Large";
    case x if (x > 0): "Positive";
    case 0: "Zero";
    case _: "Negative";
};
```

**Special features:**
- Guards with `case variable if (condition):` syntax
- Guards are evaluated after pattern matching

**Further reading:**
- [Haxe Documentation - Pattern Matching](https://haxe.org/manual/lf-pattern-matching.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Guards with if in case expressions
classify : Int -> String
classify n = if n < 0 then "Negative"
             else if n == 0 then "Zero"
             else "Positive"

-- with clause for Pattern Matching with Guards
filter : (a -> Bool) -> List a -> List a
filter p [] = []
filter p (x :: xs) with (p x)
    _ | True = x :: filter p xs
    _ | False = filter p xs
```

**Special features:**
- `with` clauses enable Pattern Matching on computed values
- Guards can be nested
- Idris 2 uses `with` clauses instead of traditional guard syntax

**Further reading:**
- [Idris 2 Documentation - With Rule](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html#with-rule)

</TabItem>
<TabItem value="java" label="Java">

```java
// Guard Patterns with when clause (since Java 21)
Object obj = 42;

String result = switch (obj) {
    case Integer i when i > 0  -> "Positive: " + i;
    case Integer i when i == 0 -> "Zero";
    case Integer i             -> "Negative: " + i;
    case String s when s.isEmpty() -> "Empty String";
    case String s              -> "String: " + s;
    default                    -> "Unknown";
};
```

**Special features:**
- Guarded Patterns with `when` clause since Java 21 (JEP 441)
- `when` replaces the `&&` syntax used in preview versions
- Can be combined with Type Patterns and Record Patterns
- Guards are evaluated after pattern matching

**Further reading:**
- [Oracle Java Documentation - Pattern Matching for switch](https://docs.oracle.com/en/java/javase/21/language/pattern-matching-switch-expressions-and-statements.html)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Guard Patterns
fun classify(n: int): string
  match n
    x | x < 0  -> "Negativ"
    0           -> "Null"
    x | x > 0  -> "Positiv"

val c1 = classify(-5) // "Negativ"
val c2 = classify(0)  // "Null"
val c3 = classify(10) // "Positiv"

// Guards with ADTs
type Result
  Ok(value: int)
  Error(code: int, message: string)

fun handleResult(r: Result): string
  match r
    Ok(x) | x > 100      -> "Great success: " ++ x.show
    Ok(x)                 -> "Success: " ++ x.show
    Error(404, m)         -> "Not found: " ++ m
    Error(_, m)           -> "Error: " ++ m
```

**Special features:**
- Guards are specified with `|` after the pattern
- Guards are evaluated after successful pattern matching
- Enables finer distinction of cases
- Can be used with arbitrary Boolean expressions

**Further reading:**
- [Koka Language Guide - Pattern Matching](https://koka-lang.github.io/koka/doc/book.html#sec-pattern-matching)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Guard Patterns (via If-Then-Else in clause bodies)
:- func classify(int) = string.
classify(N) = Result :-
    ( if N > 10 then
        Result = "Greater than ten"
    else if N < 0 then
        Result = "Negative"
    else
        Result = "Between zero and ten"
    ).
```

**Special features:**
- Guards are realized through `if-then-else` expressions in clause bodies
- Arbitrary boolean conditions as guards possible
- Combination of conditions with `,` (And) and `;` (Or)
- Determinism system ensures all cases are covered

**Further reading:**
- [Mercury Language Reference - Conditional Goals](https://www.mercurylang.org/information/doc-release/mercury_ref/Conditional-goals.html)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Guard Patterns
classify :: Int -> String
classify n
    | n < 0 = "Negative"
    | n == 0 = "Zero"
    | n < 10 = "Small"
    | otherwise = "Large"
```

**Special features:**
- Guards are introduced with `|`
- `otherwise` as Catch-All (is `true`)
- Guards can be used in function definitions and `case` expressions

**Further reading:**
- [PureScript Documentation - Guards](https://github.com/purescript/documentation/blob/master/language/Pattern-Matching.md#guards)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
(define (classify-number n)
  (match n
    [(? number? x) #:when (> x 0) "Positive"]
    [(? number? x) #:when (< x 0) "Negative"]
    [0 "Zero"]
    [_ "Not a number"]))

(classify-number 42)   ; "Positive"
(classify-number -5)   ; "Negative"
(classify-number 0)    ; "Zero"
```

**Special features:**
- `#:when` for guard conditions in `match`
- Guards can be arbitrary expressions
- Checked after pattern matching

**Further reading:**
- [Racket Documentation - Pattern Matching](https://docs.racket-lang.org/reference/match.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Guard Patterns
classify : I64 -> Str
classify = \n ->
    when n is
        x if x > 0 -> "Positive"
        x if x < 0 -> "Negative"
        _ -> "Zero"
```

**Special features:**
- `if` guards in `when/is` Patterns
- Guard is checked after pattern matching

**Further reading:**
- [Roc Documentation - Pattern Matching](https://www.roc-lang.org/tutorial#pattern-matching)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Guard Patterns with /; (Condition) *)
f[x_Integer /; x > 0] := "Positive"
f[x_Integer /; x < 0] := "Negative"
f[0] := "Zero"

f[5]   (* "Positive" *)
f[-3]  (* "Negative" *)
f[0]   (* "Zero" *)
```

**Special features:**
- `/;` (Condition) adds guard conditions to patterns
- Condition must evaluate to True for the pattern to match
- Can be placed at any position in the pattern

**Further reading:**
- [Wolfram Language Documentation - Condition](https://reference.wolfram.com/language/ref/Condition.html)

</TabItem>
</Tabs>


## 6.3.9. Active Patterns

Active Patterns allow defining custom decomposition functions that can be used directly in Pattern Matching expressions. Instead of only matching against fixed values or types, the decomposition logic is extracted into a function.

### Languages {#sprachen}

<Tabs availableTabs={['fsharp', 'haskell', 'idris', 'racket', 'scala']} yellowTabs={['swift', 'wolfram-language']}>
<TabItem value="fsharp" label="F#">

```fsharp
// Complete Active Pattern
let (|Positive|Negative|Zero|) n =
    if n > 0 then Positive
    elif n < 0 then Negative
    else Zero

let classify n =
    match n with
    | Positive -> "positiv"
    | Negative -> "negativ"
    | Zero -> "null"

// Partial Active Pattern
let (|Even|_|) n = if n % 2 = 0 then Some n else None

let describe n =
    match n with
    | Even n -> sprintf "%d is even" n
    | _ -> sprintf "%d is odd" n
```

**Special features:**
- **Complete Active Patterns** (`(|A|B|C|)`) cover all cases — the compiler checks completeness
- **Partial Active Patterns** (`(|A|_|)`) return `Some`/`None` and only match on `Some`
- **Parameterized Active Patterns** allow additional parameters: `(|DivisibleBy|_|) d n = ...`
- Active Patterns are first-class functions and can be combined

**Further reading:**
- [Microsoft F# Documentation - Active Patterns](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/active-patterns)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
{-# LANGUAGE ViewPatterns #-}

data Sign = Positive | Negative | Zero

sign :: Int -> Sign
sign n | n > 0     = Positive
       | n < 0     = Negative
       | otherwise  = Zero

classify :: Int -> String
classify (sign -> Positive) = "positive"
classify (sign -> Negative) = "negative"
classify (sign -> Zero)     = "zero"

-- View Pattern with extraction function
parity :: Int -> Either Int Int
parity n | even n    = Left n
         | otherwise = Right n

describe :: Int -> String
describe (parity -> Left n)  = show n ++ " is even"
describe (parity -> Right n) = show n ++ " is odd"
```

**Special features:**
- View Patterns require the GHC extension `ViewPatterns`
- Syntax: `(function -> pattern)` — the function is applied to the value and the result is matched against the pattern
- View Patterns can be combined with regular patterns
- Pattern Synonyms (GHC extension `PatternSynonyms`) offer another alternative for custom patterns

**Further reading:**
- [GHC User's Guide - View Patterns](https://ghc.gitlab.haskell.org/ghc/doc/users_guide/exts/view_patterns.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
data Sign = Positive | Negative | Zero

sign : Int -> Sign
sign n = if n > 0 then Positive
         else if n < 0 then Negative
         else Zero

classify : Int -> String
classify n with (sign n)
  _ | Positive = "positive"
  _ | Negative = "negative"
  _ | Zero     = "zero"
```

**Special features:**
- Views are realized with the `with` construct
- The view function is applied to the value, the result is available after `|` for matching
- Views are a central concept in Idris for dependent Pattern Matching
- Nested `with` blocks enable multi-stage decompositions

**Further reading:**
- [Idris 2 Documentation - Views](https://idris2.readthedocs.io/en/latest/tutorial/views.html)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
(define-match-expander positive
  (lambda (stx)
    (syntax-case stx ()
      [(_) #'(? positive?)])))

(define-match-expander negative
  (lambda (stx)
    (syntax-case stx ()
      [(_) #'(? negative?)])))

(define (classify n)
  (match n
    [(positive) "positive"]
    [(negative) "negative"]
    [_ "zero"]))

;; Match Expander with extraction
(define-match-expander even-val
  (lambda (stx)
    (syntax-case stx ()
      [(_ x) #'(? even? x)])))

(define (describe n)
  (match n
    [(even-val x) (format "~a is even" x)]
    [_ (format "~a is odd" n)]))
```

**Special features:**
- `define-match-expander` defines custom patterns for `match`
- The expander is a macro transformer that generates syntax objects
- `?` in patterns applies a predicate to the value
- Match Expanders can define arbitrarily complex decompositions

**Further reading:**
- [Racket Documentation - define-match-expander](https://docs.racket-lang.org/reference/match.html#%28form._%28%28lib._racket%2Fmatch..rkt%29._define-match-expander%29%29)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
object Positive {
  def unapply(n: Int): Boolean = n > 0
}

object Negative {
  def unapply(n: Int): Boolean = n < 0
}

def classify(n: Int): String = n match {
  case Positive() => "positive"
  case Negative() => "negative"
  case _          => "zero"
}

// Extractor with value return
object Even {
  def unapply(n: Int): Option[Int] =
    if (n % 2 == 0) Some(n) else None
}

val describe: Int => String = {
  case Even(n) => s"$n is even"
  case n       => s"$n is odd"
}
```

**Special features:**
- Extractors are defined as objects with `unapply` method
- `unapply` with `Boolean` return: Pattern matches on `true`
- `unapply` with `Option` return: Pattern matches on `Some` and extracts the value
- `unapplySeq` enables extraction of variable number of values

**Further reading:**
- [Scala Documentation - Extractor Objects](https://docs.scala-lang.org/tour/extractor-objects.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Custom Pattern Matching via ~= operator
func ~= (pattern: (Int) -> Bool, value: Int) -> Bool {
    pattern(value)
}

let isPositive: (Int) -> Bool = { $0 > 0 }
let isNegative: (Int) -> Bool = { $0 < 0 }

func classify(_ n: Int) -> String {
    switch n {
    case isPositive: return "positive"
    case isNegative: return "negative"
    default: return "zero"
    }
}
```

**Special features:**
- No native Active Pattern system — Custom Matching via `~=` operator overloading
- The `~=` operator is used in `switch`/`case` expressions for Pattern Matching
- Any type can implement `~=` to define custom matching behavior
- More limited than true Active Patterns: no destructuring, only Bool return

**Further reading:**
- [Swift Documentation - Pattern Matching Operator](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/patterns/)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```wolfram
(* Condition-Patterns with /; *)
classify[n_ /; n > 0] := "positive"
classify[n_ /; n < 0] := "negative"
classify[0] := "zero"

(* PatternTest with ? — custom test function as Pattern *)
myEvenQ = EvenQ;
describe[n_?myEvenQ] := ToString[n] <> " is even"
describe[n_] := ToString[n] <> " is odd"
```

**Special features:**
- `Condition` (`/;`) adds arbitrary conditions to patterns
- `PatternTest` (`?`) applies a test function to the matched value
- Patterns can be combined arbitrarily with `|` (Alternatives) and `/;`
- No extractor mechanism — decomposition occurs via pattern structure, not via functions

**Further reading:**
- [Wolfram Language Documentation - Condition](https://reference.wolfram.com/language/ref/Condition.html)
- [Wolfram Language Documentation - PatternTest](https://reference.wolfram.com/language/ref/PatternTest.html)

</TabItem>
</Tabs>


## 6.3.10. Unnamed Variables and Patterns

Unnamed Variables and Patterns enable ignoring values in Pattern Matching without binding them.

### Languages {#sprachen}

<Tabs availableTabs={['csharp', 'dart', 'elixir', 'elm', 'erlang', 'fsharp', 'gleam', 'haskell', 'haxe', 'idris', 'java', 'koka', 'lean4', 'mercury', 'ocaml', 'prolog', 'purescript', 'python', 'racket', 'roc', 'rust', 'scala', 'swift', 'wolfram-language']}>
<TabItem value="csharp" label="C#">

```csharp
// Unnamed Variables and Patterns (since C# 8.0)
var point = (x: 5, y: 10);
var result = point switch
{
    (0, _) => "X is zero",
    (_, 0) => "Y is zero",
    (_, _) => "Both non-zero"
};
```

**Special features:**
- `_` as Discard Pattern since C# 8.0
- Can be used in various contexts
- Ignores values without binding

**Further reading:**
- [C# Pattern Matching Documentation](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/functional/pattern-matching)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Unnamed Variables and Patterns
point = {5, 10}
result = case point do
  {0, _} -> "X is zero"
  {_, 0} -> "Y is zero"
  {_, _} -> "Both non-zero"
end
```

**Special features:**
- `_` as Unnamed Variable is a fundamental language feature
- Can be used in various contexts
- Ignores values without binding

**Further reading:**
- [Elixir Pattern Matching Guide](https://elixir-lang.org/getting-started/pattern-matching.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% Unnamed Variables and Patterns
Point = {5, 10},
Result = case Point of
    {0, _} -> "X is zero";
    {_, 0} -> "Y is zero";
    {_, _} -> "Both non-zero"
end.
```

**Special features:**
- `_` as Unnamed Variable is a fundamental language feature
- Can be used in various contexts
- Ignores values without binding

**Further reading:**
- [Erlang Pattern Matching](https://www.erlang.org/doc/reference_manual/patterns.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Unnamed Variables and Patterns
let point = (5, 10)
let result = match point with
    | (0, _) -> "X is zero"
    | (_, 0) -> "Y is zero"
    | (_, _) -> "Both non-zero"
```

**Special features:**
- `_` as Unnamed Variable is a fundamental language feature
- Can be used in various contexts
- Ignores values without binding

**Further reading:**
- [F# Pattern Matching](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/pattern-matching)

</TabItem>
<TabItem value="gleam" label="Gleam">

```erlang
// Unnamed Variables and Patterns
let point = #(5, 10)
let result = case point {
  #(0, _) -> "X is zero"
  #(_, 0) -> "Y is zero"
  #(_, _) -> "Both non-zero"
}
```

**Special features:**
- `_` as Unnamed Variable is a fundamental language feature
- Can be used in various contexts
- Ignores values without binding

**Further reading:**
- [Gleam Pattern Matching](https://gleam.run/documentation/tour/pattern-matching/)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Unnamed Variables and Patterns
point = (5, 10)
result = case point of
  (0, _) -> "X is zero"
  (_, 0) -> "Y is zero"
  (_, _) -> "Both non-zero"
```

**Special features:**
- `_` as Unnamed Variable is a fundamental language feature
- Can be used in various contexts
- Ignores values without binding

**Further reading:**
- [Haskell Pattern Matching](https://www.haskell.org/tutorial/patterns.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Unnamed Variables and Patterns *)
let point = (5, 10) in
let result = match point with
  | (0, _) -> "X is zero"
  | (_, 0) -> "Y is zero"
  | (_, _) -> "Both non-zero"
```

**Special features:**
- `_` as Unnamed Variable is a fundamental language feature
- Can be used in various contexts
- Ignores values without binding

**Further reading:**
- [OCaml Pattern Matching](https://ocaml.org/manual/patterns.html)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Unnamed Variables with _
describe_point(point(0, _), "X is zero").
describe_point(point(_, 0), "Y is zero").
describe_point(point(_, _), "Both non-zero").

% Multiple unnamed variables in a clause
first_element([First|_], First).

% Specific anonymous variables with _Prefix
process(person(_Name, Age), "Adult") :- Age >= 18.
process(person(_Name, _Age), "Minor").
```

**Special features:**
- `_` is the anonymous variable – each occurrence is independent and never bound
- Variables with `_` prefix (e.g. `_Name`) are named but don't generate singleton warnings
- `_` can be used arbitrarily often in a pattern – each occurrence is its own variable
- Fundamental language feature that has existed since the beginnings of Prolog

**Further reading:**
- [SWI-Prolog – Anonymous Variables](https://www.swi-prolog.org/pldoc/man?section=syntax)

</TabItem>
<TabItem value="python" label="Python">

```python
# Unnamed Variables and Patterns (since Python 3.10)
point = (5, 10)
match point:
    case (0, _):
        result = "X is zero"
    case (_, 0):
        result = "Y is zero"
    case (_, _):
        result = "Both non-zero"
```

**Special features:**
- `_` as Unnamed Variable since Python 3.10
- Can be used in various contexts
- Ignores values without binding

**Further reading:**
- [Python Pattern Matching](https://docs.python.org/3/tutorial/controlflow.html#match-statements)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Unnamed Variables and Patterns
let point = (5, 10);
let result = match point {
    (0, _) => "X is zero",
    (_, 0) => "Y is zero",
    (_, _) => "Both non-zero"
};
```

**Special features:**
- `_` as Unnamed Variable is a fundamental language feature
- Can be used in various contexts
- Ignores values without binding

**Further reading:**
- [Rust Pattern Matching](https://doc.rust-lang.org/book/ch18-03-pattern-syntax.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Unnamed Variables and Patterns
val point = (5, 10)
val result = point match {
  case (0, _) => "X is zero"
  case (_, 0) => "Y is zero"
  case (_, _) => "Both non-zero"
}
```

**Special features:**
- `_` as Unnamed Variable is a fundamental language feature
- Can be used in various contexts
- Ignores values without binding

**Further reading:**
- [Scala Pattern Matching](https://docs.scala-lang.org/tour/pattern-matching.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Unnamed Variables and Patterns
let point = (x: 5, y: 10)
let result = switch point {
case (0, _):
    "X is zero"
case (_, 0):
    "Y is zero"
case (_, _):
    "Both non-zero"
}
```

**Special features:**
- `_` as Unnamed Variable is a fundamental language feature
- Can be used in various contexts
- Ignores values without binding

**Further reading:**
- [Swift Pattern Matching](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/patterns/)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Unnamed Variables and Wildcard Patterns (since Dart 3.0)
// Wildcard in Destructuring
var (name, _, age) = ('Alice', 'ignored', 30);

// Wildcard in switch
switch (value) {
  case (int _, String s):
    print('String: $s');
  case _:
    print('Default');
}

// Rest Pattern for ignoring
var [first, ..., last] = [1, 2, 3, 4, 5];

// Wildcard in for loops
for (var MapEntry(:value, key: _) in map.entries) {
  print(value);
}
```

**Special features:**
- `_` as Wildcard for ignoring values
- `...` as Rest Pattern without variable binding
- Multiple `_` in a pattern allowed (no name conflict)
- Since Dart 3.0

**Further reading:**
- [Dart Documentation - Patterns](https://dart.dev/language/patterns)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Wildcard Pattern _
isZero : Int -> Bool
isZero n =
    case n of
        0 -> True
        _ -> False

-- Wildcard in Destructuring
firstElement : List a -> Maybe a
firstElement list =
    case list of
        first :: _ -> Just first
        [] -> Nothing

-- Wildcard in Tuple-Destructuring
getFirst : (a, b) -> a
getFirst (x, _) = x
```

**Special features:**
- `_` matches any value without binding it
- Can be used multiple times in the same pattern
- Compiler does not warn about unused wildcard bindings

**Further reading:**
- [Elm Documentation - Pattern Matching](https://guide.elm-lang.org/types/pattern_matching.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Wildcard Pattern
var result = switch (pair) {
    case { x: 0, y: _ }: "On the Y-axis";
    case { x: _, y: 0 }: "On the X-axis";
    case _: "Other point";
};
```

**Special features:**
- `_` as Wildcard for arbitrary values
- Can be used in nested patterns

**Further reading:**
- [Haxe Documentation - Pattern Matching](https://haxe.org/manual/lf-pattern-matching.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Wildcard-Pattern
fst : (a, b) -> a
fst (x, _) = x

snd : (a, b) -> b
snd (_, y) = y

-- Multiple Wildcards
isNonEmpty : List a -> Bool
isNonEmpty (_ :: _) = True
isNonEmpty [] = False
```

**Special features:**
- `_` as Wildcard for unused variables
- Can be used multiple times in a pattern
- Compiler does not warn about unused wildcards

**Further reading:**
- [Idris 2 Documentation - Types and Functions](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Unnamed Variables and Patterns (Wildcard _)
type Point
  Point(x: int, y: int)

fun getX(pt: Point): int
  match pt
    Point(x, _) -> x  // y is uninteresting

// Multiple Wildcards
fun isNonEmpty(xs: list<int>): bool
  match xs
    Cons(_, _) -> True
    Nil        -> False

// Wildcard in nested Patterns
type Pair
  Pair(fst: int, snd: int)

fun firstOfPair(p: Pair): int
  match p
    Pair(x, _) -> x
```

**Special features:**
- `_` is the Wildcard Pattern for ignoring values
- Can be used multiple times in a pattern
- Improves readability by focusing on relevant parts
- Important for exhaustiveness checking without unnecessary bindings

**Further reading:**
- [Koka Language Guide - Pattern Matching](https://koka-lang.github.io/koka/doc/book.html#sec-pattern-matching)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Unnamed Variables (Wildcard Pattern)
def first (pair : Nat × Nat) : Nat :=
  match pair with
  | (x, _) => x

-- Wildcard in inductive types
inductive Shape where
  | circle (radius : Float)
  | rectangle (width : Float) (height : Float)

def isCircle : Shape → Bool
  | Shape.circle _ => true
  | Shape.rectangle _ _ => false

-- Wildcard in lists
def head? : List Nat → Option Nat
  | [] => none
  | x :: _ => some x
```

**Special features:**
- `_` is the Wildcard Pattern for ignoring values
- Can be used multiple times in a pattern
- Works in `match` expressions, `let` bindings and function definitions
- Important for exhaustiveness checking without unnecessary bindings

**Further reading:**
- [Lean 4 Documentation - Pattern Matching](https://lean-lang.org/lean4/doc/pattern.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Unnamed Variables and Patterns
:- type point ---> point(int, int).

:- func get_x(point) = int.
get_x(point(X, _)) = X.

% Wildcard in lists
:- func first(list(T)) = T.
:- mode first(in) = out is semidet.
first([H | _]) = H.

% Multiple Wildcards
:- pred is_pair(list(T)::in) is semidet.
is_pair([_, _]).
```

**Special features:**
- `_` as Wildcard Pattern is a fundamental language feature
- Can be used multiple times in a pattern
- Ignores values without binding
- Each `_` is independent (matches different values)

**Further reading:**
- [Mercury Language Reference - Data Terms](https://www.mercurylang.org/information/doc-release/mercury_ref/Data-terms.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Unnamed Variables and Patterns (since Java 22)
record Point(int x, int y) {}

// Unnamed Variable in catch
try {
    int result = 10 / 0;
} catch (ArithmeticException _) {
    System.out.println("Division by zero");
}

// Unnamed Pattern in Record Patterns
Object obj = new Point(3, 4);
if (obj instanceof Point(int x, _)) {
    System.out.println("x=" + x);
}

// Unnamed Variable in enhanced for
for (var _ : List.of(1, 2, 3)) {
    System.out.println("Iteration");
}
```

**Special features:**
- Unnamed Variables and Patterns since Java 22 (JEP 456)
- Uses `_` as placeholder for unneeded variables
- Applicable in `catch`, `for`, `instanceof`, `switch`, lambda parameters
- Improves readability through explicit ignoring of values

**Further reading:**
- [Oracle Java Documentation - Unnamed Variables](https://docs.oracle.com/en/java/javase/22/language/unnamed-variables-and-patterns.html)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Unnamed Variables and Patterns
getFirst :: forall a b. Tuple a b -> a
getFirst (Tuple x _) = x

isZero :: Int -> Boolean
isZero 0 = true
isZero _ = false
```

**Special features:**
- `_` as Wildcard for ignored values
- Can be used in any pattern

**Further reading:**
- [PureScript Documentation - Pattern Matching](https://github.com/purescript/documentation/blob/master/language/Pattern-Matching.md)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
(define (first-element lst)
  (match lst
    [(list first _ ...) first]
    [_ "Empty"]))

(first-element '(1 2 3))  ; 1
```

**Special features:**
- `_` as Wildcard Pattern (matches everything, doesn't bind)
- `...` for rest elements
- Can be used in nested patterns

**Further reading:**
- [Racket Documentation - Pattern Matching](https://docs.racket-lang.org/reference/match.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Unnamed Variables and Patterns
getFirst : (a, b) -> a
getFirst = \(first, _) -> first

when result is
    Ok _ -> "Success"
    Err _ -> "Error"
```

**Special features:**
- `_` as Wildcard Pattern (ignores the value)
- Can be used in Pattern Matching and Destructuring

**Further reading:**
- [Roc Documentation - Pattern Matching](https://www.roc-lang.org/tutorial#pattern-matching)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Unnamed Patterns *)
f[_, y_] := y           (* First argument is ignored *)
f["ignored", 42]      (* 42 *)

(* Blank Sequences *)
g[__, last_] := last     (* All except the last are ignored *)
g[1, 2, 3, 4]           (* 4 *)
```

**Special features:**
- `_` (Blank) matches an arbitrary expression
- `__` (BlankSequence) matches one or more expressions
- `___` (BlankNullSequence) matches zero or more expressions

**Further reading:**
- [Wolfram Language Documentation - Blank](https://reference.wolfram.com/language/ref/Blank.html)

</TabItem>
</Tabs>


## 6.3.11. Exhaustiveness Checking

Exhaustiveness Checking ensures that all possible cases in a Pattern Match are covered.

### Languages {#sprachen}

<Tabs availableTabs={['csharp', 'dart', 'elm', 'fsharp', 'gleam', 'haskell', 'haxe', 'idris', 'java', 'koka', 'kotlin', 'lean4', 'mercury', 'ocaml', 'purescript', 'roc', 'rust', 'scala', 'swift', 'v']}>
<TabItem value="csharp" label="C#">

```csharp
// Exhaustiveness Checking (since C# 8.0)
enum Status { Active, Inactive, Pending }

Status status = Status.Active;
string result = status switch
{
    Status.Active => "Active",
    Status.Inactive => "Inactive",
    Status.Pending => "Pending"
    // Compiler warns about missing cases
};
```

**Special features:**
- Exhaustiveness Checking for switch expressions since C# 8.0
- Compiler warns about uncovered enum values
- Complete coverage is enforced

**Further reading:**
- [C# Pattern Matching Documentation](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/functional/pattern-matching)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Exhaustiveness Checking
type Status = Active | Inactive | Pending

let status = Status.Active
let result = match status with
    | Status.Active -> "Active"
    | Status.Inactive -> "Inactive"
    | Status.Pending -> "Pending"
    // Compiler warns about missing cases
```

**Special features:**
- Exhaustiveness Checking is a fundamental language feature
- Compiler warns about uncovered Discriminated Union Cases
- Complete coverage is enforced

**Further reading:**
- [F# Pattern Matching](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/pattern-matching)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Exhaustiveness Checking
data Status = Active | Inactive | Pending

status = Active
result = case status of
  Active -> "Active"
  Inactive -> "Inactive"
  Pending -> "Pending"
  -- Compiler warns about missing cases
```

**Special features:**
- Exhaustiveness Checking is a fundamental language feature
- Compiler warns about uncovered Data Constructor Cases
- Complete coverage is enforced

**Further reading:**
- [Haskell Pattern Matching](https://www.haskell.org/tutorial/patterns.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Exhaustiveness Checking *)
type status = Active | Inactive | Pending

let status = Active in
let result = match status with
  | Active -> "Active"
  | Inactive -> "Inactive"
  | Pending -> "Pending"
  (* Compiler warns about missing cases *)
```

**Special features:**
- Exhaustiveness Checking is a fundamental language feature
- Compiler warns about uncovered Variant Cases
- Complete coverage is enforced

**Further reading:**
- [OCaml Pattern Matching](https://ocaml.org/manual/patterns.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Exhaustiveness Checking
enum Status {
    Active,
    Inactive,
    Pending,
}

let status = Status::Active;
let result = match status {
    Status::Active => "Active",
    Status::Inactive => "Inactive",
    Status::Pending => "Pending",
    // Compiler warns about missing cases
};
```

**Special features:**
- Exhaustiveness Checking is a fundamental language feature
- Compiler warns about uncovered Enum Variants
- Complete coverage is enforced

**Further reading:**
- [Rust Pattern Matching](https://doc.rust-lang.org/book/ch18-03-pattern-syntax.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Exhaustiveness Checking
sealed trait Status
case object Active extends Status
case object Inactive extends Status
case object Pending extends Status

val status: Status = Active
val result = status match {
  case Active => "Active"
  case Inactive => "Inactive"
  case Pending => "Pending"
  // Compiler warns about missing cases (only with sealed)
}
```

**Special features:**
- Exhaustiveness Checking with `sealed` Traits
- Compiler warns about uncovered Case Objects
- Complete coverage is enforced

**Further reading:**
- [Scala Pattern Matching](https://docs.scala-lang.org/tour/pattern-matching.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Exhaustiveness Checking
enum Status {
    case active
    case inactive
    case pending
}

let status: Status = .active
let result = switch status {
case .active:
    "Active"
case .inactive:
    "Inactive"
case .pending:
    "Pending"
    // Compiler warns about missing cases
}
```

**Special features:**
- Exhaustiveness Checking is a fundamental language feature
- Compiler warns about uncovered Enum Cases
- Complete coverage is enforced

**Further reading:**
- [Swift Pattern Matching](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/patterns/)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Exhaustiveness Checking (since Dart 3.0)
sealed class Shape {}
class Circle extends Shape { final double radius; Circle(this.radius); }
class Rectangle extends Shape { final double width, height; Rectangle(this.width, this.height); }

// Compiler checks completeness
double area(Shape shape) => switch (shape) {
  Circle(:var radius) => 3.14159 * radius * radius,
  Rectangle(:var width, :var height) => width * height,
  // No default needed - all subtypes covered
};

// Also with Enums
enum Color { red, green, blue }

String toHex(Color c) => switch (c) {
  Color.red => '#FF0000',
  Color.green => '#00FF00',
  Color.blue => '#0000FF',
};
```

**Special features:**
- Exhaustiveness Checking for `sealed` classes and Enums
- Compiler warning when not all cases are covered
- No `default`/`_` case needed with complete coverage
- Since Dart 3.0

**Further reading:**
- [Dart Documentation - Class Modifiers](https://dart.dev/language/class-modifiers)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
type Color = Red | Green | Blue

-- Compiler error: not all cases covered
-- toHex : Color -> String
-- toHex color =
--     case color of
--         Red -> "#FF0000"
--         -- Green and Blue missing -> Compiler error

-- Correct: all cases covered
toHex : Color -> String
toHex color =
    case color of
        Red   -> "#FF0000"
        Green -> "#00FF00"
        Blue  -> "#0000FF"
```

**Special features:**
- Compiler enforces that all variants of a Custom Type are handled
- No runtime error possible through missing pattern branches
- New variants lead to compiler errors at all `case` locations
- Contributes to Elm's "no runtime errors" guarantee

**Further reading:**
- [Elm Documentation - Pattern Matching](https://guide.elm-lang.org/types/pattern_matching.html)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
pub type Color {
  Red
  Green
  Blue
}

pub fn to_hex(color: Color) -> String {
  case color {
    Red -> "#FF0000"
    Green -> "#00FF00"
    // Compilation error: Blue is not covered
  }
}
```

**Special features:**
- Compiler enforces complete coverage of all variants in case expressions
- Prevents forgotten cases at compile time
- Applies to Custom Types, Bool, and other Pattern Matches

**Further reading:**
- [Gleam Documentation - Case Expressions](https://tour.gleam.run/flow-control/case-expressions/)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Exhaustiveness Checking
enum Color { Red; Green; Blue; }

// Compiler warning when not all cases are covered:
var name = switch (color) {
    case Red: "Red";
    case Green: "Green";
    case Blue: "Blue";
    // All cases covered - no default needed
};
```

**Special features:**
- Compiler checks completeness for Enum Patterns
- Warning for missing cases
- `default` or `case _:` for catch-all

**Further reading:**
- [Haxe Documentation - Pattern Matching](https://haxe.org/manual/lf-pattern-matching.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Exhaustiveness Checking via Totality Checker
data Color = Red | Green | Blue

-- total: All cases covered
colorName : Color -> String
colorName Red = "Red"
colorName Green = "Green"
colorName Blue = "Blue"

-- Non-total function: Compiler warning
-- partial
incompleteFn : Color -> String
incompleteFn Red = "Red"
-- Green and Blue missing -> Warning
```

**Special features:**
- Totality Checker checks Exhaustiveness and termination
- `total` keyword enforces complete coverage
- `partial` keyword allows incomplete patterns
- Non-total functions generate compiler warnings

**Further reading:**
- [Idris 2 Documentation - Totality](https://idris2.readthedocs.io/en/latest/tutorial/theorems.html)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Exhaustiveness Checking
type TrafficLight
  Red
  Yellow
  Green

fun nextLight(current: TrafficLight): TrafficLight
  match current
    Red    -> Green
    Yellow -> Red
    Green  -> Yellow
    // All cases covered — no compiler error

// Incomplete matching generates a compiler error:
// fun incomplete(current: TrafficLight): string
//   match current
//     Red -> "Red"
//     // Error: non-exhaustive match, missing: Yellow, Green

// Exhaustiveness with Maybe
fun unwrapOr(opt: maybe<int>, default: int): int
  match opt
    Just(x) -> x
    Nothing -> default
```

**Special features:**
- Koka performs strict exhaustiveness checking for `match` expressions
- The compiler ensures that all constructors of an ADT are covered
- Non-exhaustive matches lead to a compile error
- Significantly improves code robustness and safety

**Further reading:**
- [Koka Language Guide - Pattern Matching](https://koka-lang.github.io/koka/doc/book.html#sec-pattern-matching)

</TabItem>
<TabItem value="java" label="Java">

```java
// Exhaustiveness Checking (since Java 21)
sealed interface Shape permits Circle, Rectangle {}
record Circle(double radius) implements Shape {}
record Rectangle(double width, double height) implements Shape {}

// Compiler checks completeness - no default needed
double area(Shape shape) {
    return switch (shape) {
        case Circle c    -> Math.PI * c.radius() * c.radius();
        case Rectangle r -> r.width() * r.height();
    };
}
```

**Special features:**
- Exhaustiveness Checking since Java 21 (JEP 441)
- Compiler checks whether all cases are covered
- No `default` needed when Sealed Types are fully covered
- Compilation error if a case is missing

**Further reading:**
- [Oracle Java Documentation - Pattern Matching for switch](https://docs.oracle.com/en/java/javase/21/language/pattern-matching-switch-expressions-and-statements.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Exhaustiveness Checking with Sealed Classes
sealed class Shape {
    data class Circle(val radius: Double) : Shape()
    data class Rectangle(val width: Double, val height: Double) : Shape()
}

fun area(shape: Shape): Double = when (shape) {
    is Shape.Circle -> Math.PI * shape.radius * shape.radius
    is Shape.Rectangle -> shape.width * shape.height
    // Compiler error if a case is missing
}

// Exhaustiveness Checking with Enum Classes
enum class Color { RED, GREEN, BLUE }

fun describe(color: Color): String = when (color) {
    Color.RED -> "Rot"
    Color.GREEN -> "Grün"
    Color.BLUE -> "Blau"
    // Compiler error if a case is missing
}
```

**Special features:**
- Compiler enforces completeness for `when` expressions (Expression, not Statement)
- Works with Sealed Classes, Enum Classes and Boolean
- `else` branch can be used as catch-all
- Since Kotlin 1.7: also recommended for `when` statements with Sealed Classes

**Further reading:**
- [Kotlin Documentation - Sealed classes and when expression](https://kotlinlang.org/docs/sealed-classes.html#sealed-classes-and-when-expression)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Exhaustiveness Checking with inductive types
inductive Color where
  | red
  | green
  | blue

-- Complete Pattern Matching (compiles)
def colorName : Color → String
  | Color.red => "Rot"
  | Color.green => "Grün"
  | Color.blue => "Blau"

-- Incomplete Pattern Matching (Compiler error!)
-- def incompleteFn : Color → String
--   | Color.red => "Rot"
--   -- Error: missing cases: Color.green, Color.blue
```

**Special features:**
- Lean 4 enforces strict exhaustiveness checking for all `match` expressions
- Missing cases lead to a compiler error (not just a warning)
- Works with all inductive types (Enums, Sum Types, recursive types)
- `_` as wildcard pattern for catch-all

**Further reading:**
- [Lean 4 Documentation - Pattern Matching](https://lean-lang.org/lean4/doc/pattern.html)
- [Lean 4 Documentation - Inductive Types](https://lean-lang.org/lean4/doc/inductive.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Exhaustiveness Checking (via the determinism system)
:- type color ---> red ; green ; blue.

:- func color_name(color) = string.
color_name(red) = "Rot".
color_name(green) = "Grün".
color_name(blue) = "Blau".
% Compiler checks exhaustiveness for 'det' determinism

% Incomplete Pattern Matching leads to compiler error:
% :- func incomplete(color) = string.
% incomplete(red) = "Rot".
% -- Error: determinism declaration not satisfied
```

**Special features:**
- The determinism system (`det`, `semidet`, etc.) enforces exhaustiveness
- For `det` functions, all constructors must be covered
- Missing cases lead to a compiler error (not just a warning)
- `_` as wildcard pattern for catch-all cases

**Further reading:**
- [Mercury Language Reference - Determinism](https://www.mercurylang.org/information/doc-release/mercury_ref/Determinism.html)

</TabItem>

<TabItem value="purescript" label="PureScript">

```purescript
-- Exhaustiveness Checking
data Color = Red | Green | Blue

-- Compiler warning: Non-exhaustive Pattern Matching
-- colorName :: Color -> String
-- colorName Red = "Rot"
-- colorName Green = "Grün"
-- Missing: Blue -> ...

-- Complete Pattern Matching
colorName :: Color -> String
colorName Red = "Rot"
colorName Green = "Grün"
colorName Blue = "Blau"
```

**Special features:**
- Compiler checks exhaustiveness at compile time
- Warning for non-exhaustive patterns
- Enforces complete coverage of all cases

**Further reading:**
- [PureScript Documentation - Pattern Matching](https://github.com/purescript/documentation/blob/master/language/Pattern-Matching.md)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Exhaustiveness Checking
-- Compiler error if not all cases are covered
Color : [Red, Green, Blue]

toStr : Color -> Str
toStr = \color ->
    when color is
        Red -> "Rot"
        Green -> "Grün"
        Blue -> "Blau"
        -- All cases must be covered
```

**Special features:**
- Compiler enforces complete coverage of all cases
- Compile-time error for missing patterns
- `_` wildcard for catch-all

**Further reading:**
- [Roc Documentation - Pattern Matching](https://www.roc-lang.org/tutorial#pattern-matching)

</TabItem>
<TabItem value="v" label="V">

```v
// Exhaustiveness Checking
type Token = Keyword | Identifier | Number

struct Keyword { name string }
struct Identifier { name string }
struct Number { value int }

fn describe(t Token) string {
    return match t {
        Keyword { 'Keyword: ${t.name}' }
        Identifier { 'Identifier: ${t.name}' }
        Number { 'Number: ${t.value}' }
        // All variants must be covered
    }
}
```

**Special features:**
- Compiler checks completeness for `match` on Sum Types
- Missing variants lead to compilation errors
- `else` branch can bypass exhaustiveness

**Further reading:**
- [V Documentation - Match](https://github.com/vlang/v/blob/master/doc/docs.md#match)

</TabItem>
</Tabs>

