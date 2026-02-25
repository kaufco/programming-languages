---
slug: /kontrollfluss/switch-und-pattern-matching
title: 6.3. Switch und Pattern Matching
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 6.3. Switch und Pattern Matching

Switch/Case, Pattern Matching auf Werten und Typen, Destructuring, Guards.

## 6.3.1. Switch/Case Statements

Mehrfachverzweigungen, die es ermöglichen, Code basierend auf dem Wert eines Ausdrucks auszuführen. Bieten eine übersichtlichere Alternative zu langen If-Else-If-Ketten.

### Sprachen {#sprachen}

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

**Besonderheiten:**
- Verwendet `case ... is` und `when`
- `others` ist der Default-Fall
- Muss mit `end case` abgeschlossen werden
- Unterstützt Bereiche mit `..`

**Weiterführende Links:**
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

**Besonderheiten:**
- Fall-through-Verhalten: `break` ist erforderlich, um Fall-through zu verhindern
- `default` ist der Standard-Fall
- Nur Integer-Typen als case-Werte erlaubt (keine Strings)

**Weiterführende Links:**
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

**Besonderheiten:**
- Carbon verwendet `match` statt `switch/case`
- Kein Fall-through-Verhalten, kein `break` nötig
- Experimentelle Sprache, Syntax kann sich noch ändern
- Pattern Matching mit Guards möglich

**Weiterführende Links:**
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

**Besonderheiten:**
- Fall-through-Verhalten: `break` ist erforderlich, um Fall-through zu verhindern
- `default` ist der Standard-Fall
- Unterstützt Bereiche mit `...` (GCC-Erweiterung)
- Seit C++17: `[[fallthrough]]` Attribut für explizites Fall-through

**Weiterführende Links:**
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

**Besonderheiten:**
- Verwendet `case` und `when`
- `else` ist der Default-Fall
- Muss mit `end` abgeschlossen werden
- Unterstützt Bereiche mit `..`
- Kein Fall-through

**Weiterführende Links:**
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

**Besonderheiten:**
- Fall-through-Verhalten: `break` ist erforderlich, um Fall-through zu verhindern
- `default` ist der Standard-Fall
- Seit C# 7.0: Pattern Matching mit `when`-Klauseln
- Seit C# 8.0: Switch Expressions verfügbar

**Weiterführende Links:**
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

**Besonderheiten:**
- Fall-through-Verhalten: `break` ist erforderlich, um Fall-through zu verhindern
- `default` ist der Standard-Fall
- Unterstützt Bereiche mit `...`

**Weiterführende Links:**
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

**Besonderheiten:**
- Fall-through-Verhalten: `break` ist erforderlich, um Fall-through zu verhindern
- `default` ist der Standard-Fall
- Seit Dart 3.0: Pattern Matching mit Guards

**Weiterführende Links:**
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

**Besonderheiten:**
- Verwendet `inspect` statt `switch`
- `else` ist der Standard-Fall
- Muss mit `end` abgeschlossen werden
- Unterstützt Bereiche mit `..`
- Kein Fall-through

**Weiterführende Links:**
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

**Besonderheiten:**
- Kein Fall-through (automatisch)
- `default` ist der Standard-Fall
- Kann ohne Ausdruck verwendet werden (wie If-Else-If)
- Unterstützt mehrere Werte pro Case: `case 1, 2, 3:`

**Weiterführende Links:**
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

**Besonderheiten:**
- Fall-through-Verhalten: `break` ist erforderlich, um Fall-through zu verhindern
- `default` ist der Standard-Fall
- Unterstützt Bereiche mit `..`
- Unterstützt verschiedene Typen (nicht nur Zahlen)

**Weiterführende Links:**
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

**Besonderheiten:**
- Kein Fall-through (automatisch)
- `default` ist der Standard-Fall
- Switch ist ein Ausdruck (gibt einen Wert zurück)
- Unterstützt Guards mit `case x if (bedingung):`

**Weiterführende Links:**
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

**Besonderheiten:**
- Fall-through-Verhalten: `break` ist erforderlich, um Fall-through zu verhindern
- `default` ist der Standard-Fall
- Seit Java 14: Switch Expressions mit Arrow-Syntax (`->`)
- Seit Java 14: Mehrere Werte pro Case mit Komma

**Weiterführende Links:**
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

**Besonderheiten:**
- Fall-through-Verhalten: `break` ist erforderlich, um Fall-through zu verhindern
- `default` ist der Standard-Fall
- Keine direkte Bereichsunterstützung, aber Fall-through kann verwendet werden

**Weiterführende Links:**
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

**Besonderheiten:**
- Verwendet `when` statt `switch`
- `else` ist der Standard-Fall
- Kein Fall-through
- Unterstützt Bereiche mit `..`
- Kann als Ausdruck verwendet werden

**Weiterführende Links:**
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

**Besonderheiten:**
- Lean 4 verwendet `match ... with` statt `switch/case`
- Kein Fall-through-Verhalten
- `_` als Wildcard-Pattern (Catch-All)
- `match` ist ein Ausdruck, der einen Wert zurückgibt
- Patterns werden von oben nach unten geprüft

**Weiterführende Links:**
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

**Besonderheiten:**
- Lua hat kein natives Switch-Statement
- Wird typischerweise mit If-Else-If-Statements emuliert
- Oder mit einer Lookup-Tabelle

**Weiterführende Links:**
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

**Besonderheiten:**
- Python-ähnliche Syntax
- Verwendet `match` und `case`
- `_` ist der Default-Fall
- Pattern Matching mit Guards

**Weiterführende Links:**
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

**Besonderheiten:**
- Verwendet `case` und `of`
- `else` ist der Standard-Fall
- Unterstützt Bereiche mit `..`
- Kein Fall-through

**Weiterführende Links:**
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

**Besonderheiten:**
- Fall-through-Verhalten: `break` ist erforderlich, um Fall-through zu verhindern
- `default` ist der Standard-Fall
- Unterstützt Bereiche mit `...` (GCC-Erweiterung)

**Weiterführende Links:**
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

**Besonderheiten:**
- Verwendet `case ... of`
- `else` ist der Standard-Fall
- Muss mit `end` abgeschlossen werden
- Unterstützt Bereiche mit `..`
- Kein Fall-through

**Weiterführende Links:**
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

**Besonderheiten:**
- Kein Fall-through (automatisch)
- `case:` ist der Standard-Fall
- Unterstützt Bereiche mit `..=`

**Weiterführende Links:**
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

**Besonderheiten:**
- `given/when` war experimentell (Perl 5.10–5.18) und wurde in Perl 5.40 entfernt
- Empfohlene Alternativen: If-Elsif-Ketten oder Hash-basierte Dispatch-Tabellen
- Kein natives Switch/Case-Statement in aktuellem Perl

**Weiterführende Links:**
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

**Besonderheiten:**
- Fall-through-Verhalten: `break` ist erforderlich, um Fall-through zu verhindern
- `default` ist der Standard-Fall
- Für Bedingungsausdrücke muss `switch(true)` verwendet werden
- Match Expression seit PHP 8.0 (kein Fall-through, strenger Vergleich)

**Weiterführende Links:**
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

**Besonderheiten:**
- Wurde in Python 3.10 eingeführt
- Verwendet `match` und `case`
- `_` ist der Default-Fall
- Pattern Matching mit Guards

**Weiterführende Links:**
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

**Besonderheiten:**
- Verwendet `case` und `when`
- `else` ist der Standard-Fall
- Muss mit `end` abgeschlossen werden
- Unterstützt Bereiche mit `..`
- Kann als Ausdruck verwendet werden
- Kein Fall-through

**Weiterführende Links:**
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

**Besonderheiten:**
- Verwendet `match` statt `switch`
- `_` ist der Default-Fall
- Kein Fall-through
- Unterstützt Bereiche mit `..=`
- Muss exhaustiv sein (alle Fälle müssen abgedeckt sein)

**Weiterführende Links:**
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

**Besonderheiten:**
- Verwendet `match` statt `switch`
- `_` ist der Default-Fall
- Kein Fall-through
- Pattern Matching mit Guards
- Kann als Ausdruck verwendet werden

**Weiterführende Links:**
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

**Besonderheiten:**
- Kein Fall-through (automatisch)
- `default` ist der Standard-Fall
- Unterstützt Bereiche mit `...`
- Muss exhaustiv sein (alle Fälle müssen abgedeckt sein, außer bei Enum)

**Weiterführende Links:**
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

**Besonderheiten:**
- Fall-through-Verhalten: `break` ist erforderlich, um Fall-through zu verhindern
- `default` ist der Standard-Fall
- Keine direkte Bereichsunterstützung, aber Fall-through kann verwendet werden

**Weiterführende Links:**
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

**Besonderheiten:**
- Verwendet `Select Case` statt `switch`
- `Case Else` ist der Standard-Fall
- Muss mit `End Select` abgeschlossen werden
- Unterstützt Bereiche mit `To`
- Kein Fall-through

**Weiterführende Links:**
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

**Besonderheiten:**
- Verwendet `match` statt `switch`
- `else` ist der Standard-Fall
- Kein Fall-through
- Unterstützt Bereiche mit `..`

**Weiterführende Links:**
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

**Besonderheiten:**
- Verwendet `switch` als Ausdruck
- `else` ist der Standard-Fall
- Kein Fall-through
- Unterstützt Bereiche mit `...`
- Muss exhaustiv sein (alle Fälle müssen abgedeckt sein)

**Weiterführende Links:**
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

**Besonderheiten:**
- `case` für konstante Werte (effiziente Lookup-Tabelle)
- `cond` für allgemeine Bedingungen
- `condp` für Bedingungen mit gemeinsamem Prädikat
- Alle sind Ausdrücke mit Rückgabewert

**Weiterführende Links:**
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

**Besonderheiten:**
- `case` vergleicht mit `eql` und unterstützt `otherwise` als Default
- `ecase` signalisiert einen Error, wenn kein Fall zutrifft (exhaustive)
- `ccase` ist wie `ecase`, bietet aber einen Continue-Restart
- `typecase`/`etypecase`/`ctypecase` für Typ-basiertes Dispatching
- Schlüssel werden nicht evaluiert (Konstanten)

**Weiterführende Links:**
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

**Besonderheiten:**
- `case` nutzt Pattern Matching für Verzweigungen
- `cond` prüft mehrere Bedingungen (ähnlich if/else-if Ketten)
- Beide sind Ausdrücke, die einen Wert zurückgeben
- `_` als Catch-All-Pattern in `case`; `true` als Catch-All in `cond`

**Weiterführende Links:**
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

**Besonderheiten:**
- `case` ist ein Ausdruck, der einen Wert zurückgibt
- Unterstützt Pattern Matching in Klauseln
- `_` als Catch-All-Pattern
- Unterstützt Guards mit `when`

**Weiterführende Links:**
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

**Besonderheiten:**
- `SELECT CASE` für Fallunterscheidungen
- Unterstützt Ranges mit `case (start:end)`
- Kein Fall-Through (kein `break` nötig)
- Funktioniert mit INTEGER, LOGICAL und CHARACTER

**Weiterführende Links:**
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

**Besonderheiten:**
- `case ... of` ist ein Ausdruck, der einen Wert zurückgibt
- Unterstützt Wildcards (`_`) als Default-Fall
- Kein Fall-through wie bei C-style switch

**Weiterführende Links:**
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

**Besonderheiten:**
- Mercury hat kein dediziertes `switch`/`case`-Statement
- Stattdessen werden Funktionsklauseln mit Pattern Matching verwendet
- Klauseln werden von oben nach unten geprüft
- `_` als Wildcard für den Default-Fall

**Weiterführende Links:**
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

**Besonderheiten:**
- Kein `break` erforderlich (kein Fall-through)
- `otherwise` statt `default`
- Case-Werte können Cell Arrays für mehrere Werte enthalten
- Muss mit `end` abgeschlossen werden

**Weiterführende Links:**
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

**Besonderheiten:**
- `case`/`of`/`end` Syntax
- Unterstützt Ordinaltypen (Integer, Char, Enum)
- Komma-separierte Werte und Bereiche (`..`) möglich
- `else`-Klausel für Default-Fall
- Kein Fall-Through wie in C

**Weiterführende Links:**
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

**Besonderheiten:**
- Kein Fall-Through (implizites Break nach jedem Case)
- `otherwise` als Default-Zweig
- Case kann mehrere Werte als Cell-Array enthalten
- Funktioniert mit Strings und numerischen Werten

**Weiterführende Links:**
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

**Besonderheiten:**
- `Switch[]` für Wertvergleiche mit Pattern Matching
- `Which[]` für mehrstufige Bedingungen
- `_` als Wildcard für Default-Fall

**Weiterführende Links:**
- [Wolfram Language Documentation - Switch](https://reference.wolfram.com/language/ref/Switch.html)

</TabItem>
</Tabs>


## 6.3.2. Pattern Matching auf Werten

Pattern Matching ermöglicht die Dekomposition von Werten basierend auf ihrem konkreten Wert, nicht auf ihrem Typ.

### Sprachen {#sprachen}

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

**Besonderheiten:**
- Pattern Matching auf Werten seit C# 8.0
- Unterstützt relationale Patterns (`>`, `<`, `>=`, `<=`)
- `_` als Catch-All-Pattern

**Weiterführende Links:**
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

**Besonderheiten:**
- Pattern Matching ist ein fundamentales Sprachfeature
- Guards können mit `when` verwendet werden
- `_` als Catch-All-Pattern

**Weiterführende Links:**
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

**Besonderheiten:**
- Pattern Matching ist ein fundamentales Sprachfeature
- Guards können mit `when` verwendet werden
- `_` als Catch-All-Pattern

**Weiterführende Links:**
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

**Besonderheiten:**
- Pattern Matching ist ein fundamentales Sprachfeature
- Guards können mit `when` verwendet werden
- `_` als Catch-All-Pattern

**Weiterführende Links:**
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

**Besonderheiten:**
- Pattern Matching ist ein fundamentales Sprachfeature
- Guards können mit `if` verwendet werden
- `_` als Catch-All-Pattern

**Weiterführende Links:**
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

**Besonderheiten:**
- Pattern Matching ist ein fundamentales Sprachfeature
- Guards können mit `|` verwendet werden
- `_` als Catch-All-Pattern

**Weiterführende Links:**
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

**Besonderheiten:**
- Pattern Matching ist ein fundamentales Sprachfeature
- Guards können mit `when` verwendet werden
- `_` als Catch-All-Pattern

**Weiterführende Links:**
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

**Besonderheiten:**
- Pattern Matching auf Werten seit Python 3.10
- Guards können mit `if` verwendet werden
- `_` als Catch-All-Pattern

**Weiterführende Links:**
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

**Besonderheiten:**
- Pattern Matching ist ein fundamentales Sprachfeature
- Guards können mit `if` verwendet werden
- `_` als Catch-All-Pattern

**Weiterführende Links:**
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

**Besonderheiten:**
- Pattern Matching ist ein fundamentales Sprachfeature
- Guards können mit `if` verwendet werden
- `_` als Catch-All-Pattern

**Weiterführende Links:**
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

**Besonderheiten:**
- Pattern Matching auf Werten seit Swift 1.0
- Guards können mit `where` verwendet werden
- `default` als Catch-All-Pattern

**Weiterführende Links:**
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

**Besonderheiten:**
- Switch Expressions mit `=>` Syntax (seit Dart 3.0)
- Relational Patterns (`< 0`, `>= 100`)
- Constant Patterns für benannte Konstanten
- Wildcard `_` als Default-Fall
- Exhaustiveness Checking bei sealed Klassen

**Weiterführende Links:**
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

**Besonderheiten:**
- `case ... of` ist der primäre Mechanismus für Pattern Matching
- Unterstützt Literale, Custom Type-Konstruktoren und Wildcard `_`
- Compiler erzwingt Exhaustiveness (alle Fälle müssen abgedeckt sein)

**Weiterführende Links:**
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

**Besonderheiten:**
- Switch ist ein Ausdruck
- Kein Fall-through
- Exhaustiveness Checking bei Enums

**Weiterführende Links:**
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

**Besonderheiten:**
- Pattern Matching ist fundamental in der Sprache
- Funktionsdefinitionen können mehrere Gleichungen mit Patterns haben
- Unterstützt verschachtelte Patterns

**Weiterführende Links:**
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

**Besonderheiten:**
- Koka verwendet `match`-Ausdrücke für Pattern Matching
- Unterstützt das Matching auf konkrete Werte
- `_` ist ein Wildcard-Pattern, das jeden Wert matcht
- Pattern Matching ist exhaustiv (der Compiler prüft, ob alle Fälle abgedeckt sind)

**Weiterführende Links:**
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

**Besonderheiten:**
- `match`-Ausdrücke unterstützen Pattern Matching auf konkreten Werten
- `_` ist ein Wildcard-Pattern, das jeden Wert matcht
- Patterns werden von oben nach unten geprüft
- Pattern Matching ist exhaustiv (der Compiler prüft, ob alle Fälle abgedeckt sind)

**Weiterführende Links:**
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

**Besonderheiten:**
- Pattern Matching ist das zentrale Konzept in Mercury
- Konkrete Werte in Funktionsklauselköpfen fungieren als Patterns
- Klauseln werden von oben nach unten geprüft
- `_` als Wildcard-Pattern für den Catch-All-Fall

**Weiterführende Links:**
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

**Besonderheiten:**
- `match` Expression seit PHP 8.0
- Verwendet strikten Vergleich (`===`)
- Kein Fall-through wie bei `switch`
- Gibt einen Wert zurück (Expression, nicht Statement)

**Weiterführende Links:**
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

**Besonderheiten:**
- Pattern Matching ist das zentrale Konzept in Prolog – jede Klausel matcht über Unifikation
- Konkrete Werte im Klauselkopf fungieren als Patterns
- Klauseln werden von oben nach unten versucht (First-Match mit Backtracking)
- Kein explizites `match`-Schlüsselwort nötig – das Matching geschieht implizit beim Prädikataufruf

**Weiterführende Links:**
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

**Besonderheiten:**
- Pattern Matching direkt in Funktionsdefinitionen
- Unterstützt Literale, Wildcards und Variablen
- Compiler warnt bei nicht-exhaustiven Patterns

**Weiterführende Links:**
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

**Besonderheiten:**
- `match` ist das zentrale Pattern-Matching-Konstrukt
- Unterstützt Literal-Werte, Variablen-Bindung und komplexe Patterns
- Teil der Standard-Bibliothek

**Weiterführende Links:**
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

**Besonderheiten:**
- `when/is` Syntax für Pattern Matching
- `_` als Wildcard-Pattern
- Exhaustive Checking erzwungen

**Weiterführende Links:**
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

**Besonderheiten:**
- `match` als Expression mit Rückgabewert
- Unterstützt Ranges mit `...`
- `else` als Fallback (Pflicht, wenn nicht exhaustive)

**Weiterführende Links:**
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

**Besonderheiten:**
- Pattern Matching ist das zentrale Paradigma der Wolfram Language
- Funktionsdefinitionen verwenden Pattern Matching
- Unterstützt beliebig verschachtelte Muster

**Weiterführende Links:**
- [Wolfram Language Documentation - Patterns](https://reference.wolfram.com/language/guide/Patterns.html)

</TabItem>
</Tabs>


## 6.3.3. Pattern Matching auf Types

Pattern Matching ermöglicht die Dekomposition von Werten basierend auf ihrem Typ, nicht auf ihrem konkreten Wert.

### Sprachen {#sprachen}

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

**Besonderheiten:**
- Type Pattern Matching seit C# 7.0
- Kann mit `is`-Ausdruck verwendet werden
- `_` als Catch-All-Pattern

**Weiterführende Links:**
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

**Besonderheiten:**
- Type Pattern Matching mit `:?` Syntax
- Variablen können mit `as` gebunden werden
- `_` als Catch-All-Pattern

**Weiterführende Links:**
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

**Besonderheiten:**
- Pattern Matching auf Algebraic Data Types
- Jeder Konstruktor kann gematcht werden
- Exhaustive Pattern Matching wird geprüft

**Weiterführende Links:**
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

**Besonderheiten:**
- Pattern Matching auf Variant Types
- Jeder Konstruktor kann gematcht werden
- Exhaustive Pattern Matching wird geprüft

**Weiterführende Links:**
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

**Besonderheiten:**
- Type Pattern Matching seit Python 3.10
- Kann mit Typ-Annotationen kombiniert werden
- `_` als Catch-All-Pattern

**Weiterführende Links:**
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

**Besonderheiten:**
- Pattern Matching auf Enums
- Jeder Variant kann gematcht werden
- Exhaustive Pattern Matching wird geprüft

**Weiterführende Links:**
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

**Besonderheiten:**
- Pattern Matching auf Case Classes
- Sealed Traits ermöglichen exhaustive Pattern Matching
- Jeder Case kann gematcht werden

**Weiterführende Links:**
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

**Besonderheiten:**
- Pattern Matching auf Enums mit Associated Values
- Jeder Case kann gematcht werden
- Exhaustive Pattern Matching wird geprüft

**Weiterführende Links:**
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

**Besonderheiten:**
- Variable Patterns mit Typannotation binden und prüfen gleichzeitig
- Funktioniert in `switch`-Expressions und `if-case`-Statements
- Automatische Type Promotion nach erfolgreichem Match
- Unterstützt generische Typen im Pattern

**Weiterführende Links:**
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

**Besonderheiten:**
- Pattern Matching auf Enum-Konstruktoren
- Destrukturierung der Konstruktor-Parameter
- Compile-Zeit-Exhaustiveness-Checking

**Weiterführende Links:**
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

**Besonderheiten:**
- `instanceof` Pattern Matching seit Java 16 (JEP 394)
- Typ-Prüfung und Variablenbindung in einem Schritt
- Pattern Variable ist im Scope des `true`-Zweigs verfügbar
- Ersetzt explizite Casts nach `instanceof`

**Weiterführende Links:**
- [Oracle Java Documentation - Pattern Matching for instanceof](https://docs.oracle.com/en/java/javase/21/language/pattern-matching-instanceof-operator.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Pattern Matching auf Types (Induktive Typen)
inductive Shape where
  | circle (radius : Float)
  | rectangle (width : Float) (height : Float)

def describe : Shape → String
  | Shape.circle r => s!"Kreis mit Radius {r}"
  | Shape.rectangle w h => s!"Rechteck {w}×{h}"

#eval describe (Shape.circle 5.0)        -- "Kreis mit Radius 5.000000"
#eval describe (Shape.rectangle 3.0 4.0) -- "Rechteck 3.000000×4.000000"
```

**Besonderheiten:**
- Pattern Matching auf induktiven Typen (Sum Types / Discriminated Unions)
- Jeder Konstruktor repräsentiert einen eigenen „Typ-Fall"
- Variablen in Patterns binden automatisch die Werte des Konstruktors
- Exhaustiveness Checking durch den Compiler

**Weiterführende Links:**
- [Lean 4 Documentation - Inductive Types](https://lean-lang.org/lean4/doc/inductive.html)
- [Lean 4 Documentation - Pattern Matching](https://lean-lang.org/lean4/doc/pattern.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Pattern Matching auf Types (Algebraische Datentypen)
:- type value
    --->    int_val(int)
    ;       string_val(string)
    ;       float_val(float).

:- func describe(value) = string.
describe(int_val(I)) = "Zahl: " ++ string.int_to_string(I).
describe(string_val(S)) = "Text: " ++ S.
describe(float_val(D)) = "Dezimal: " ++ string.float_to_string(D).
```

**Besonderheiten:**
- Pattern Matching auf Algebraischen Datentypen (Discriminated Unions)
- Jeder Konstruktor kann direkt im Klauselkopf gematcht werden
- Variablen in Patterns binden automatisch die enthaltenen Werte
- Exhaustiveness wird durch das Determinismussystem geprüft

**Weiterführende Links:**
- [Mercury Language Reference - Discriminated Unions](https://www.mercurylang.org/information/doc-release/mercury_ref/Discriminated-unions.html)

</TabItem>
<TabItem value="v" label="V">

```v
// Pattern Matching auf Types (Sum Types)
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

**Besonderheiten:**
- Type Matching auf Sum Types mit `match`
- Automatisches Unwrapping des konkreten Typs
- Zugriff auf Felder des konkreten Typs innerhalb des Branches

**Weiterführende Links:**
- [V Documentation - Sum Types](https://github.com/vlang/v/blob/master/doc/docs.md#sum-types)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Pattern Matching auf Types (Heads) *)
describe[x_Integer] := "Integer: " <> ToString[x]
describe[x_String] := "String: " <> x
describe[x_List] := "List mit " <> ToString[Length[x]] <> " Elementen"
describe[_] := "Unbekannter Typ"

describe[42]        (* "Integer: 42" *)
describe["Hello"]   (* "String: Hello" *)
describe[{1, 2}]   (* "List mit 2 Elementen" *)
```

**Besonderheiten:**
- `_Integer`, `_String`, `_List` etc. matchen auf Head-Typen
- Unterstützt benutzerdefinierte Head-Patterns

**Weiterführende Links:**
- [Wolfram Language Documentation - Patterns](https://reference.wolfram.com/language/guide/Patterns.html)

</TabItem>
</Tabs>


## 6.3.4. Match/Case Expressions

Match/Case Expressions sind Ausdrücke, die Pattern Matching verwenden und einen Wert zurückgeben.

### Sprachen {#sprachen}

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

**Besonderheiten:**
- `case` ist ein Ausdruck, der einen Wert zurückgibt
- Pattern Matching ist ein fundamentales Sprachfeature
- `_` als Catch-All-Pattern

**Weiterführende Links:**
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

**Besonderheiten:**
- `case` ist ein Ausdruck, der einen Wert zurückgibt
- Pattern Matching ist ein fundamentales Sprachfeature
- `_` als Catch-All-Pattern

**Weiterführende Links:**
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

**Besonderheiten:**
- `match` ist ein Ausdruck, der einen Wert zurückgibt
- Pattern Matching ist ein fundamentales Sprachfeature
- `_` als Catch-All-Pattern

**Weiterführende Links:**
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

**Besonderheiten:**
- `case` ist ein Ausdruck, der einen Wert zurückgibt
- Pattern Matching ist ein fundamentales Sprachfeature
- `_` als Catch-All-Pattern

**Weiterführende Links:**
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

**Besonderheiten:**
- `case` ist ein Ausdruck, der einen Wert zurückgibt
- Pattern Matching ist ein fundamentales Sprachfeature
- `_` als Catch-All-Pattern

**Weiterführende Links:**
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

**Besonderheiten:**
- `match` ist ein Ausdruck, der einen Wert zurückgibt
- Pattern Matching ist ein fundamentales Sprachfeature
- `_` als Catch-All-Pattern

**Weiterführende Links:**
- [OCaml Pattern Matching](https://ocaml.org/manual/patterns.html)

</TabItem>
<TabItem value="python" label="Python">

```python
# Match/Case Expression (seit Python 3.10)
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

**Besonderheiten:**
- `match` ist eine Statement, kein Ausdruck (seit Python 3.10)
- Pattern Matching seit Python 3.10
- `_` als Catch-All-Pattern

**Weiterführende Links:**
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

**Besonderheiten:**
- `match` ist ein Ausdruck, der einen Wert zurückgibt
- Pattern Matching ist ein fundamentales Sprachfeature
- `_` als Catch-All-Pattern

**Weiterführende Links:**
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

**Besonderheiten:**
- `match` ist ein Ausdruck, der einen Wert zurückgibt
- Pattern Matching ist ein fundamentales Sprachfeature
- `_` als Catch-All-Pattern

**Weiterführende Links:**
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

**Besonderheiten:**
- `switch` ist ein Ausdruck, der einen Wert zurückgibt (seit Swift 5.9)
- Pattern Matching ist ein fundamentales Sprachfeature
- `default` als Catch-All-Pattern

**Weiterführende Links:**
- [Swift Pattern Matching](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/patterns/)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Switch Expressions (seit Dart 3.0)
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

**Besonderheiten:**
- Switch Expressions geben einen Wert zurück
- Unterstützen OR-Patterns (`||`), AND-Patterns (`&&`)
- Guard-Klauseln mit `when`
- Exhaustiveness Checking bei sealed Klassen und Enums
- Seit Dart 3.0

**Weiterführende Links:**
- [Dart Documentation - Branches](https://dart.dev/language/branches)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Case Expression (gibt einen Wert zurück)
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

-- Verschachteltes Pattern Matching
type Maybe a = Just a | Nothing

withDefault : a -> Maybe a -> a
withDefault default maybe =
    case maybe of
        Just value -> value
        Nothing    -> default
```

**Besonderheiten:**
- `case ... of` ist ein Ausdruck (nicht ein Statement)
- Alle Zweige müssen den gleichen Typ zurückgeben
- Compiler erzwingt Exhaustiveness Checking
- Unterstützt Destructuring in den Patterns

**Weiterführende Links:**
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

**Besonderheiten:**
- `switch` ist ein Ausdruck und gibt einen Wert zurück
- Kein `break` nötig
- Exhaustiveness Checking bei Enums

**Weiterführende Links:**
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

**Besonderheiten:**
- `case ... of` ist ein Ausdruck, der einen Wert zurückgibt
- Kann überall verwendet werden, wo ein Ausdruck erwartet wird
- Unterstützt verschachtelte Patterns

**Weiterführende Links:**
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

**Besonderheiten:**
- `match`-Ausdrücke sind der primäre Weg für Pattern Matching in Koka
- Sie sind Ausdrücke, die einen Wert zurückgeben
- Werden häufig mit Algebraic Data Types (ADTs) verwendet
- Der Compiler prüft auf Exhaustivität (alle möglichen Fälle müssen abgedeckt sein)

**Weiterführende Links:**
- [Koka Language Guide - Pattern Matching](https://koka-lang.github.io/koka/doc/book.html#sec-pattern-matching)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Match/Case Expression (gibt Wert zurück)
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

**Besonderheiten:**
- `match`-Ausdrücke sind Expressions, die einen Wert zurückgeben
- Pattern Matching ist der primäre Weg zur Fallunterscheidung in Lean 4
- Werden häufig mit induktiven Typen (ADTs) verwendet
- Der Compiler prüft auf Exhaustivität

**Weiterführende Links:**
- [Lean 4 Documentation - Pattern Matching](https://lean-lang.org/lean4/doc/pattern.html)
- [Lean 4 Documentation - Inductive Types](https://lean-lang.org/lean4/doc/inductive.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Match/Case Expression (über If-Then-Else-Ausdruck)
:- func describe(int) = string.
describe(Value) =
    ( if Value = 0 then "Null"
    else if Value = 1 then "Eins"
    else if Value = 2 then "Zwei"
    else "Andere Zahl"
    ).

% Alternative: Funktionsklauseln (implizite Match Expression)
:- func describe_alt(int) = string.
describe_alt(0) = "Null".
describe_alt(1) = "Eins".
describe_alt(2) = "Zwei".
describe_alt(_) = "Andere Zahl".
```

**Besonderheiten:**
- Mercury hat keine dedizierte `match`/`case`-Expression
- `if-then-else` ist ein Ausdruck, der einen Wert zurückgibt
- Alternative: Funktionsklauseln mit Pattern Matching im Klauselkopf
- Beide Varianten sind idiomatisch und ausdrucksstark

**Weiterführende Links:**
- [Mercury Language Reference - Conditional Goals](https://www.mercurylang.org/information/doc-release/mercury_ref/Conditional-goals.html)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
// Match Expression (seit PHP 8.0)
$value = 3;

$result = match ($value) {
    1, 2 => "Eins oder Zwei",
    3, 4 => "Drei oder Vier",
    default => "Anderer Wert",
};

// Match mit no-match Fehler
// Wenn kein Fall zutrifft und kein default vorhanden: UnhandledMatchError
?>
```

**Besonderheiten:**
- `match` ist eine Expression und gibt einen Wert zurück
- Mehrere Werte pro Arm mit Komma getrennt
- Strikter Vergleich (`===`) statt lose Gleichheit
- `UnhandledMatchError` wenn kein Arm und kein `default` zutrifft

**Weiterführende Links:**
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

**Besonderheiten:**
- `case...of` Syntax für Pattern Matching
- Ist ein Ausdruck, der einen Wert zurückgibt
- Compiler prüft Exhaustiveness

**Weiterführende Links:**
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

**Besonderheiten:**
- `match` gibt einen Wert zurück (ist ein Expression)
- Unterstützt Prädikate mit `?`
- `_` als Wildcard-Pattern

**Weiterführende Links:**
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

**Besonderheiten:**
- `when/is` ist ein Ausdruck, der einen Wert zurückgibt
- Kann direkt in Bindungen verwendet werden
- Exhaustive Checking

**Weiterführende Links:**
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

**Besonderheiten:**
- `match` ist eine Expression (gibt einen Wert zurück)
- Mehrere Werte pro Branch mit `,`
- `else` als Default-Branch
- Kein Fall-through

**Weiterführende Links:**
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

**Besonderheiten:**
- `Switch[]` unterstützt Pattern Matching als Case-Ausdrücke
- Pattern Matching ist in jeder Funktionsdefinition verfügbar
- `Replace[expr, {pattern1 -> result1, pattern2 -> result2}]` als Alternative

**Weiterführende Links:**
- [Wolfram Language Documentation - Switch](https://reference.wolfram.com/language/ref/Switch.html)

</TabItem>
</Tabs>


## 6.3.5. Pattern Matching for switch

Pattern Matching in switch-Statements ermöglicht die Verwendung von Patterns statt einfacher Werte.

### Sprachen {#sprachen}

<Tabs availableTabs={['csharp', 'dart', 'java', 'javascript', 'kotlin', 'swift', 'typescript']}>
<TabItem value="csharp" label="C#">

```csharp
// Pattern Matching for switch (seit C# 8.0)
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

**Besonderheiten:**
- Pattern Matching in switch-Expressions seit C# 8.0
- Unterstützt relationale Patterns (`>`, `<`, `>=`, `<=`)
- `_` als Catch-All-Pattern

**Weiterführende Links:**
- [C# Pattern Matching Documentation](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/functional/pattern-matching)

</TabItem>
<TabItem value="java" label="Java">

```java
// Pattern Matching for switch (seit Java 21)
Object obj = "Hello";
String result = switch (obj) {
    case Integer i    -> "Integer: " + i;
    case String s     -> "String: " + s;
    case int[] arr    -> "Array mit " + arr.length + " Elementen";
    case null         -> "null";
    default           -> "Unbekannt: " + obj;
};
```

**Besonderheiten:**
- Pattern Matching for switch seit Java 21 (JEP 441)
- Unterstützt Typ-Patterns, Guarded Patterns (`when`), Null-Patterns
- Arrow-Syntax (`->`) für Cases
- `default` als Catch-All-Pattern
- Exhaustiveness Checking bei Sealed Types

**Weiterführende Links:**
- [Oracle Java Documentation - Pattern Matching for switch](https://docs.oracle.com/en/java/javase/21/language/pattern-matching-switch-expressions-and-statements.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Pattern Matching for switch (traditionell)
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

**Besonderheiten:**
- Traditionelles switch-Statement ohne Pattern Matching
- `break` ist erforderlich
- `default` als Catch-All-Pattern

**Weiterführende Links:**
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

**Besonderheiten:**
- `when` ist Kotlin's switch-Äquivalent mit Pattern Matching
- Unterstützt verschiedene Pattern-Typen
- `else` als Catch-All-Pattern

**Weiterführende Links:**
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

**Besonderheiten:**
- Pattern Matching in switch-Statements seit Swift 1.0
- Unterstützt verschiedene Pattern-Typen
- `default` als Catch-All-Pattern

**Weiterführende Links:**
- [Swift Pattern Matching](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/patterns/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Pattern Matching for switch (traditionell)
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

**Besonderheiten:**
- Traditionelles switch-Statement ohne Pattern Matching
- `break` ist erforderlich
- `default` als Catch-All-Pattern

**Weiterführende Links:**
- [TypeScript: switch Statement](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Pattern Matching for switch (seit Dart 3.0)
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

**Besonderheiten:**
- Erweiterte `switch`-Statements mit Pattern Matching (seit Dart 3.0)
- Kein `break` mehr nötig (kein Fall-through)
- Unterstützt List-Patterns, Map-Patterns, Object-Patterns
- Guard-Klauseln mit `when`
- `case`-Keyword weiterhin erforderlich

**Weiterführende Links:**
- [Dart Documentation - Branches](https://dart.dev/language/branches)

</TabItem>
</Tabs>


## 6.3.6. Destructuring Patterns (Object, Array)

Destructuring Patterns ermöglichen die Extraktion von Werten aus Objekten und Arrays direkt im Pattern.

### Sprachen {#sprachen}

<Tabs availableTabs={['clojure', 'csharp', 'dart', 'elixir', 'elm', 'erlang', 'fsharp', 'gleam', 'haskell', 'haxe', 'idris', 'javascript', 'koka', 'kotlin', 'lean4', 'mercury', 'ocaml', 'prolog', 'purescript', 'python', 'racket', 'roc', 'rust', 'scala', 'swift', 'typescript', 'wolfram-language']}>
<TabItem value="csharp" label="C#">

```csharp
// Destructuring Patterns (seit C# 8.0)
var point = (x: 5, y: 10);
var result = point switch
{
    (0, 0) => "Ursprung",
    (var x, var y) when x == y => "Auf Diagonale",
    (var x, var y) => $"Punkt: ({x}, {y})"
};

// Array-Destructuring (seit C# 12)
int[] arr = {1, 2, 3};
var arrResult = arr switch
{
    [0] => "Nur Null",
    [var first, ..] => $"Erstes Element: {first}"
};
```

**Besonderheiten:**
- Tuple-Destructuring seit C# 8.0
- Array-Destructuring seit C# 12
- Variablen können mit `var` gebunden werden

**Weiterführende Links:**
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

**Besonderheiten:**
- Tuple-Destructuring ist ein fundamentales Sprachfeature
- List-Destructuring mit `|` Operator
- Guards können mit `when` verwendet werden

**Weiterführende Links:**
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

**Besonderheiten:**
- Tuple-Destructuring ist ein fundamentales Sprachfeature
- List-Destructuring mit `|` Operator
- Guards können mit `when` verwendet werden

**Weiterführende Links:**
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

**Besonderheiten:**
- Tuple-Destructuring ist ein fundamentales Sprachfeature
- List-Destructuring mit `::` Operator
- Guards können mit `when` verwendet werden

**Weiterführende Links:**
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

**Besonderheiten:**
- Tuple-Destructuring ist ein fundamentales Sprachfeature
- List-Destructuring mit `..` für Rest
- Guards können mit `if` verwendet werden

**Weiterführende Links:**
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

**Besonderheiten:**
- Tuple-Destructuring ist ein fundamentales Sprachfeature
- List-Destructuring mit `:` Operator
- Guards können mit `|` verwendet werden

**Weiterführende Links:**
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

**Besonderheiten:**
- Destructuring Assignment seit ES6
- Kein Pattern Matching in switch-Statements
- Rest-Pattern mit `...`

**Weiterführende Links:**
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

**Besonderheiten:**
- Destructuring ist ein Kernbestandteil des Pattern Matchings
- Ermöglicht das Extrahieren von Feldern aus Records, Elementen aus Tupeln und Listen
- Kann in `match`-Ausdrücken, `val`-Bindungen und Funktionsparametern verwendet werden
- `Cons` und `Nil` für Listen-Destructuring

**Weiterführende Links:**
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

**Besonderheiten:**
- Destructuring in when-Expressions
- Data Classes unterstützen Destructuring
- Array-Destructuring unterstützt

**Weiterführende Links:**
- [Kotlin Destructuring Declarations](https://kotlinlang.org/docs/destructuring-declarations.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Destructuring Patterns (Tupel)
def describeTuple (p : Nat × Nat) : String :=
  match p with
  | (0, 0) => "Ursprung"
  | (x, y) => s!"Punkt: ({x}, {y})"

-- Destructuring Patterns (Induktive Typen)
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

**Besonderheiten:**
- Destructuring auf Tupeln, induktiven Typen und Listen
- `::` für Head/Tail-Destructuring bei Listen
- Patterns können verschachtelt werden
- Kann in `match`-Ausdrücken, `let`-Bindungen und Funktionsparametern verwendet werden

**Weiterführende Links:**
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

**Besonderheiten:**
- Destructuring über Pattern Matching in Funktionsklauselköpfen
- Konstruktor-Destructuring durch Angabe der Struktur im Pattern
- List-Destructuring mit `[Head | Tail]`-Syntax
- Verschachteltes Destructuring beliebiger Tiefe möglich

**Weiterführende Links:**
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

**Besonderheiten:**
- Tuple-Destructuring ist ein fundamentales Sprachfeature
- List-Destructuring mit `::` Operator
- Guards können mit `when` verwendet werden

**Weiterführende Links:**
- [OCaml Pattern Matching](https://ocaml.org/manual/patterns.html)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Destructuring von Compound Terms
describe_point(point(0, 0), "Ursprung").
describe_point(point(X, X), "Auf Diagonale") :- X \= 0.
describe_point(point(X, Y), Result) :-
    format(atom(Result), "Punkt: (~w, ~w)", [X, Y]).

% List-Destructuring
describe_list([0], "Nur Null").
describe_list([First|_], Result) :-
    format(atom(Result), "Erstes Element: ~w", [First]).

% Verschachteltes Destructuring
process(person(name(First, Last), Age), Result) :-
    format(atom(Result), "~w ~w, ~w Jahre", [First, Last, Age]).
```

**Besonderheiten:**
- Destructuring geschieht über Unifikation von Compound Terms (Funktoren)
- Listen werden mit `[Head|Tail]` destrukturiert
- Verschachteltes Destructuring beliebiger Tiefe ist möglich
- Variablen im Klauselkopf binden automatisch die entsprechenden Teile

**Weiterführende Links:**
- [SWI-Prolog – Terms](https://www.swi-prolog.org/pldoc/man?section=manipterm)

</TabItem>
<TabItem value="python" label="Python">

```python
# Destructuring Patterns (seit Python 3.10)
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

**Besonderheiten:**
- Tuple-Destructuring seit Python 3.10
- List-Destructuring mit `*_` für Rest
- Guards können mit `if` verwendet werden

**Weiterführende Links:**
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

**Besonderheiten:**
- Tuple-Destructuring ist ein fundamentales Sprachfeature
- Array-Destructuring mit `..` für Rest
- Guards können mit `if` verwendet werden

**Weiterführende Links:**
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

**Besonderheiten:**
- Tuple-Destructuring ist ein fundamentales Sprachfeature
- List-Destructuring mit `::` Operator
- Guards können mit `if` verwendet werden

**Weiterführende Links:**
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

**Besonderheiten:**
- Tuple-Destructuring ist ein fundamentales Sprachfeature
- Array-Destructuring unterstützt
- Guards können mit `where` verwendet werden

**Weiterführende Links:**
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

**Besonderheiten:**
- Destructuring Assignment seit ES6
- Kein Pattern Matching in switch-Statements
- Rest-Pattern mit `...`

**Weiterführende Links:**
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

**Besonderheiten:**
- Sequentielles Destructuring für Vektoren und Listen
- Map-Destructuring mit `:keys`, `:strs`, `:syms`
- Verschachtelt kombinierbar
- Defaults über `:or`
- Funktioniert in `let`, `fn`, `defn`, `for`, `doseq`

**Weiterführende Links:**
- [Clojure Documentation - Destructuring](https://clojure.org/guides/destructuring)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Destructuring Patterns (seit Dart 3.0)
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

**Besonderheiten:**
- List-Patterns: `[a, b, ...rest]`
- Map-Patterns: `{'key': value}`
- Record-Patterns: `(a, b)` und `(name: a, age: b)`
- Object-Patterns: `ClassName(:field1, :field2)`
- Rest-Pattern `...` in Listen

**Weiterführende Links:**
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

**Besonderheiten:**
- Destructuring in `case`-Ausdrücken und `let`-Bindings
- Unterstützt Tuples, Custom Types und Listen
- `::` für Kopf/Rest-Destructuring von Listen
- `_` als Wildcard für ignorierte Werte

**Weiterführende Links:**
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

**Besonderheiten:**
- Verschachtelte Destrukturierung in Enum-Patterns
- Tiefe Pattern-Auflösung

**Weiterführende Links:**
- [Haxe Documentation - Pattern Matching](https://haxe.org/manual/lf-pattern-matching.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Destructuring auf Tupeln
swap : (a, b) -> (b, a)
swap (x, y) = (y, x)

-- Destructuring auf Data Types
data Point = MkPoint Double Double

getX : Point -> Double
getX (MkPoint x _) = x

-- Destructuring auf Listen
headAndTail : List a -> Maybe (a, List a)
headAndTail (x :: xs) = Just (x, xs)
headAndTail [] = Nothing
```

**Besonderheiten:**
- Destructuring erfolgt durch Pattern Matching auf Konstruktoren
- Funktioniert mit Tupeln, Listen und benutzerdefinierten Typen
- Wildcards (`_`) für unbenutzte Teile

**Weiterführende Links:**
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

**Besonderheiten:**
- Destructuring in Funktionsparametern und `case`-Ausdrücken
- Unterstützt Records, Data Types und Arrays
- Wildcard `_` für ignorierte Werte

**Weiterführende Links:**
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

**Besonderheiten:**
- Destructuring für Structs, Listen und Vektoren
- Automatische Bindung von Komponenten
- Verschachtelte Patterns möglich

**Weiterführende Links:**
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

**Besonderheiten:**
- Record Destructuring mit `{ field1, field2 }`
- Tag Union Destructuring in `when/is`
- Tuple Destructuring mit `(a, b)`

**Weiterführende Links:**
- [Roc Documentation - Pattern Matching](https://www.roc-lang.org/tutorial#pattern-matching)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Destructuring von Listen *)
{a, b, c} = {1, 2, 3};
Print[a]  (* 1 *)

(* Destructuring in Funktionsparametern *)
sum[{x_, y_}] := x + y
sum[{3, 4}]  (* 7 *)

(* Verschachteltes Destructuring *)
f[{a_, {b_, c_}}] := a + b + c
f[{1, {2, 3}}]  (* 6 *)
```

**Besonderheiten:**
- Listen können direkt destrukturiert werden
- Funktionsparameter unterstützen verschachtelte Patterns
- Unterstützt beliebig tiefe Verschachtelung

**Weiterführende Links:**
- [Wolfram Language Documentation - Patterns](https://reference.wolfram.com/language/guide/Patterns.html)

</TabItem>
</Tabs>


## 6.3.7. Record Patterns

Record Patterns ermöglichen die Dekomposition von Records/Strukturen mit benannten Feldern.

### Sprachen {#sprachen}

<Tabs availableTabs={['csharp', 'dart', 'elixir', 'elm', 'erlang', 'fsharp', 'gleam', 'haskell', 'java', 'koka', 'lean4', 'ocaml', 'purescript', 'python', 'roc', 'rust', 'scala', 'swift']}>
<TabItem value="csharp" label="C#">

```csharp
// Record Patterns (seit C# 8.0)
record Point(int X, int Y);
var point = new Point(5, 10);
var result = point switch
{
    Point(0, 0) => "Ursprung",
    Point(var x, var y) when x == y => "Auf Diagonale",
    Point(var x, var y) => $"Punkt: ({x}, {y})"
};
```

**Besonderheiten:**
- Record Patterns seit C# 8.0
- Positionelle Patterns für Records
- Guards können verwendet werden

**Weiterführende Links:**
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

**Besonderheiten:**
- Struct-Pattern Matching ist ein fundamentales Sprachfeature
- Benannte Feld-Patterns
- Guards können mit `when` verwendet werden

**Weiterführende Links:**
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

**Besonderheiten:**
- Record-Pattern Matching ist ein fundamentales Sprachfeature
- Benannte Feld-Patterns
- Guards können mit `when` verwendet werden

**Weiterführende Links:**
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

**Besonderheiten:**
- Record-Pattern Matching ist ein fundamentales Sprachfeature
- Benannte Feld-Patterns
- Guards können mit `when` verwendet werden

**Weiterführende Links:**
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

**Besonderheiten:**
- Custom Type-Pattern Matching ist ein fundamentales Sprachfeature
- Positionelle Patterns für Records
- Guards können mit `if` verwendet werden

**Weiterführende Links:**
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

**Besonderheiten:**
- Record-Pattern Matching ist ein fundamentales Sprachfeature
- Benannte Feld-Patterns
- Guards können mit `|` verwendet werden

**Weiterführende Links:**
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

**Besonderheiten:**
- Record-Pattern Matching ist ein fundamentales Sprachfeature
- Benannte Feld-Patterns
- Guards können mit `when` verwendet werden

**Weiterführende Links:**
- [OCaml Pattern Matching](https://ocaml.org/manual/patterns.html)

</TabItem>
<TabItem value="python" label="Python">

```python
# Record Patterns (seit Python 3.10)
# Benötigt: from dataclasses import dataclass
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

**Besonderheiten:**
- Record Patterns seit Python 3.10
- Benannte Feld-Patterns mit `=`
- Guards können mit `if` verwendet werden

**Weiterführende Links:**
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

**Besonderheiten:**
- Struct-Pattern Matching ist ein fundamentales Sprachfeature
- Benannte Feld-Patterns
- Guards können mit `if` verwendet werden

**Weiterführende Links:**
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

**Besonderheiten:**
- Case Class-Pattern Matching ist ein fundamentales Sprachfeature
- Positionelle Patterns für Case Classes
- Guards können mit `if` verwendet werden

**Weiterführende Links:**
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

**Besonderheiten:**
- Struct-Pattern Matching ist ein fundamentales Sprachfeature
- Benannte Feld-Patterns
- Guards können mit `where` verwendet werden

**Weiterführende Links:**
- [Swift Pattern Matching](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/patterns/)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Record Patterns (seit Dart 3.0)
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

**Besonderheiten:**
- Positional und Named Record Patterns
- Records sind seit Dart 3.0 ein Sprachfeature
- Record Patterns unterstützen verschachtelte Patterns
- Wildcard `_` für nicht benötigte Felder

**Weiterführende Links:**
- [Dart Documentation - Records](https://dart.dev/language/records)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Record Pattern in Funktionsparametern
greet : { name : String, age : Int } -> String
greet { name, age } =
    name ++ " ist " ++ String.fromInt age

-- Record Pattern in let-Bindings
example =
    let
        person = { name = "Alice", age = 30 }
        { name } = person
    in
    "Hallo, " ++ name
```

**Besonderheiten:**
- Record-Destructuring extrahiert Felder nach Namen
- Nicht alle Felder müssen extrahiert werden
- Funktioniert in Funktionsparametern und `let`-Bindings

**Weiterführende Links:**
- [Elm Documentation - Records](https://guide.elm-lang.org/types/records.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Record Patterns (seit Java 21)
record Point(int x, int y) {}

Object obj = new Point(3, 4);

// Record Pattern in instanceof
if (obj instanceof Point(int x, int y)) {
    System.out.println("x=" + x + ", y=" + y);
}

// Record Pattern in switch
String result = switch (obj) {
    case Point(int x, int y) -> "Point(" + x + ", " + y + ")";
    default -> "Kein Point";
};
```

**Besonderheiten:**
- Record Patterns seit Java 21 (JEP 440)
- Destrukturierung von Records in `instanceof` und `switch`
- Verschachtelte Record Patterns möglich
- Kombinierbar mit Guarded Patterns (`when`)

**Weiterführende Links:**
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

// Verschachtelte Record Patterns
type Address
  Address(city: string, zip: string)

type Customer
  Customer(name: string, address: Address)

fun getCity(c: Customer): string
  match c
    Customer(_, Address(city, _)) -> city
```

**Besonderheiten:**
- Koka unterstützt Record Patterns durch Konstruktor-Destructuring
- Felder werden positionell extrahiert (nach Reihenfolge der Konstruktor-Parameter)
- Wildcards (`_`) für uninteressante Felder
- Verschachtelte Patterns ermöglichen tiefes Destructuring

**Weiterführende Links:**
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
  | ⟨0.0, 0.0⟩ => "Ursprung"
  | ⟨x, y⟩ => s!"Punkt: ({x}, {y})"

-- Verschachtelte Structure Patterns
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

**Besonderheiten:**
- Structures können mit Anonymous Constructor `⟨...⟩` destructured werden
- Felder werden positionell extrahiert
- Verschachtelte Patterns ermöglichen tiefes Destructuring
- Wildcards (`_`) für uninteressante Felder

**Weiterführende Links:**
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

**Besonderheiten:**
- Records können direkt in Patterns destructured werden
- Unterstützt partielle Record-Patterns mit Row-Polymorphismus (`| r`)

**Weiterführende Links:**
- [PureScript Documentation - Pattern Matching](https://github.com/purescript/documentation/blob/master/language/Pattern-Matching.md)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Record Patterns
getName : { name : Str }* -> Str
getName = \{ name } -> name
```

**Besonderheiten:**
- Record Patterns extrahieren Felder
- `{ name }*` für offene Record-Typen (mit zusätzlichen Feldern)

**Weiterführende Links:**
- [Roc Documentation - Records](https://www.roc-lang.org/tutorial#records)

</TabItem>
</Tabs>


## 6.3.8. Guard Patterns

Guard Patterns ermöglichen zusätzliche Bedingungen in Pattern Matching, die über die Pattern-Struktur hinausgehen.

### Sprachen {#sprachen}

<Tabs availableTabs={['csharp', 'dart', 'elixir', 'erlang', 'fsharp', 'gleam', 'haskell', 'haxe', 'idris', 'java', 'koka', 'mercury', 'ocaml', 'prolog', 'purescript', 'python', 'racket', 'roc', 'rust', 'scala', 'swift', 'wolfram-language']}>
<TabItem value="csharp" label="C#">

```csharp
// Guard Patterns (seit C# 8.0)
int value = 5;
string result = value switch
{
    > 10 => "Größer als zehn",
    < 0 => "Negativ",
    >= 0 and <= 10 => "Zwischen null und zehn",
    _ => "Andere"
};
```

**Besonderheiten:**
- Guard Patterns mit relationalen Operatoren seit C# 8.0
- Kombination mit `and`, `or`, `not`
- `when`-Klauseln in switch-Statements

**Weiterführende Links:**
- [C# Pattern Matching Documentation](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/functional/pattern-matching)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Guard Patterns
value = 5
result = case value do
  n when n > 10 -> "Größer als zehn"
  n when n < 0 -> "Negativ"
  n when n >= 0 and n <= 10 -> "Zwischen null und zehn"
  _ -> "Andere"
end
```

**Besonderheiten:**
- Guards mit `when`-Klausel
- Unterstützt verschiedene Guard-Funktionen
- Kombination mit `and`, `or`, `not`

**Weiterführende Links:**
- [Elixir Pattern Matching Guide](https://elixir-lang.org/getting-started/pattern-matching.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% Guard Patterns
Value = 5,
Result = case Value of
    N when N > 10 -> "Größer als zehn";
    N when N < 0 -> "Negativ";
    N when N >= 0, N =< 10 -> "Zwischen null und zehn";
    _ -> "Andere"
end.
```

**Besonderheiten:**
- Guards mit `when`-Klausel
- Unterstützt verschiedene Guard-Funktionen
- Kombination mit `,` (und) und `;` (oder)

**Weiterführende Links:**
- [Erlang Pattern Matching](https://www.erlang.org/doc/reference_manual/patterns.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Guard Patterns
let value = 5
let result = match value with
    | n when n > 10 -> "Größer als zehn"
    | n when n < 0 -> "Negativ"
    | n when n >= 0 && n <= 10 -> "Zwischen null und zehn"
    | _ -> "Andere"
```

**Besonderheiten:**
- Guards mit `when`-Klausel
- Unterstützt verschiedene Bedingungen
- Kombination mit `&&`, `||`, `not`

**Weiterführende Links:**
- [F# Pattern Matching](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/pattern-matching)

</TabItem>
<TabItem value="gleam" label="Gleam">

```erlang
// Guard Patterns
let value = 5
let result = case value {
  n if n > 10 -> "Größer als zehn"
  n if n < 0 -> "Negativ"
  n if n >= 0 && n <= 10 -> "Zwischen null und zehn"
  _ -> "Andere"
}
```

**Besonderheiten:**
- Guards mit `if`-Klausel
- Unterstützt verschiedene Bedingungen
- Kombination mit `&&`, `||`, `!`

**Weiterführende Links:**
- [Gleam Pattern Matching](https://gleam.run/documentation/tour/pattern-matching/)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Guard Patterns
value = 5
result = case value of
  n | n > 10 -> "Größer als zehn"
  n | n < 0 -> "Negativ"
  n | n >= 0 && n <= 10 -> "Zwischen null und zehn"
  _ -> "Andere"
```

**Besonderheiten:**
- Guards mit `|`-Syntax
- Unterstützt verschiedene Bedingungen
- Kombination mit `&&`, `||`, `not`

**Weiterführende Links:**
- [Haskell Pattern Matching](https://www.haskell.org/tutorial/patterns.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Guard Patterns *)
let value = 5 in
let result = match value with
  | n when n > 10 -> "Größer als zehn"
  | n when n < 0 -> "Negativ"
  | n when n >= 0 && n <= 10 -> "Zwischen null und zehn"
  | _ -> "Andere"
```

**Besonderheiten:**
- Guards mit `when`-Klausel
- Unterstützt verschiedene Bedingungen
- Kombination mit `&&`, `||`, `not`

**Weiterführende Links:**
- [OCaml Pattern Matching](https://ocaml.org/manual/patterns.html)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Guard Patterns über Bedingungen im Klauselkörper
classify(N, "Größer als zehn") :- N > 10.
classify(N, "Negativ") :- N < 0.
classify(N, "Zwischen null und zehn") :- N >= 0, N =< 10.
classify(_, "Andere").
```

**Besonderheiten:**
- Guards werden in Prolog durch Bedingungen im Klauselkörper ausgedrückt
- Arithmetische Vergleiche (`>`, `<`, `>=`, `=<`) dienen als Guard-Bedingungen
- Mehrere Bedingungen werden mit `,` (Konjunktion) verknüpft
- Die Klauseln werden sequenziell geprüft – die erste passende Klausel wird verwendet

**Weiterführende Links:**
- [SWI-Prolog – Arithmetic](https://www.swi-prolog.org/pldoc/man?section=arith)

</TabItem>
<TabItem value="python" label="Python">

```python
# Guard Patterns (seit Python 3.10)
value = 5
match value:
    case n if n > 10:
        result = "Größer als zehn"
    case n if n < 0:
        result = "Negativ"
    case n if n >= 0 and n <= 10:
        result = "Zwischen null und zehn"
    case _:
        result = "Andere"
```

**Besonderheiten:**
- Guards mit `if`-Klausel seit Python 3.10
- Unterstützt verschiedene Bedingungen
- Kombination mit `and`, `or`, `not`

**Weiterführende Links:**
- [Python Pattern Matching](https://docs.python.org/3/tutorial/controlflow.html#match-statements)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Guard Patterns
let value = 5;
let result = match value {
    n if n > 10 => "Größer als zehn",
    n if n < 0 => "Negativ",
    n if n >= 0 && n <= 10 => "Zwischen null und zehn",
    _ => "Andere"
};
```

**Besonderheiten:**
- Guards mit `if`-Klausel
- Unterstützt verschiedene Bedingungen
- Kombination mit `&&`, `||`, `!`

**Weiterführende Links:**
- [Rust Pattern Matching](https://doc.rust-lang.org/book/ch18-03-pattern-syntax.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Guard Patterns
val value = 5
val result = value match {
  case n if n > 10 => "Größer als zehn"
  case n if n < 0 => "Negativ"
  case n if n >= 0 && n <= 10 => "Zwischen null und zehn"
  case _ => "Andere"
}
```

**Besonderheiten:**
- Guards mit `if`-Klausel
- Unterstützt verschiedene Bedingungen
- Kombination mit `&&`, `||`, `!`

**Weiterführende Links:**
- [Scala Pattern Matching](https://docs.scala-lang.org/tour/pattern-matching.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Guard Patterns
let value = 5
let result = switch value {
case let n where n > 10:
    "Größer als zehn"
case let n where n < 0:
    "Negativ"
case let n where n >= 0 && n <= 10:
    "Zwischen null und zehn"
default:
    "Andere"
}
```

**Besonderheiten:**
- Guards mit `where`-Klausel
- Unterstützt verschiedene Bedingungen
- Kombination mit `&&`, `||`, `!`

**Weiterführende Links:**
- [Swift Pattern Matching](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/patterns/)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Guard Patterns mit when (seit Dart 3.0)
String categorize(int value) => switch (value) {
  int n when n < 0 => 'Negativ',
  int n when n == 0 => 'Null',
  int n when n <= 100 => 'Klein',
  int n when n <= 1000 => 'Mittel',
  _ => 'Groß',
};

// Guards in if-case
if (value case int n when n.isEven) {
  print('Gerade Zahl: $n');
}

// Guards mit komplexen Bedingungen
switch (shape) {
  case Rectangle(:var width, :var height) when width == height:
    print('Quadrat');
  case Rectangle():
    print('Rechteck');
}
```

**Besonderheiten:**
- `when`-Keyword für Guard-Klauseln
- Guards können beliebige Ausdrücke enthalten
- Können auf gebundene Variablen aus dem Pattern zugreifen
- Seit Dart 3.0

**Weiterführende Links:**
- [Dart Documentation - Patterns](https://dart.dev/language/patterns)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Guard Patterns
var result = switch (value) {
    case x if (x > 100): "Groß";
    case x if (x > 0): "Positiv";
    case 0: "Null";
    case _: "Negativ";
};
```

**Besonderheiten:**
- Guards mit `case variable if (bedingung):` Syntax
- Guards werden nach dem Pattern-Match ausgewertet

**Weiterführende Links:**
- [Haxe Documentation - Pattern Matching](https://haxe.org/manual/lf-pattern-matching.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Guards mit if in case-Ausdrücken
classify : Int -> String
classify n = if n < 0 then "Negativ"
             else if n == 0 then "Null"
             else "Positiv"

-- with-Klausel für Pattern Matching mit Guards
filter : (a -> Bool) -> List a -> List a
filter p [] = []
filter p (x :: xs) with (p x)
    _ | True = x :: filter p xs
    _ | False = filter p xs
```

**Besonderheiten:**
- `with`-Klauseln ermöglichen Pattern Matching auf berechneten Werten
- Guards können verschachtelt werden
- Idris 2 nutzt `with`-Klauseln statt traditioneller Guard-Syntax

**Weiterführende Links:**
- [Idris 2 Documentation - With Rule](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html#with-rule)

</TabItem>
<TabItem value="java" label="Java">

```java
// Guard Patterns mit when-Klausel (seit Java 21)
Object obj = 42;

String result = switch (obj) {
    case Integer i when i > 0  -> "Positiv: " + i;
    case Integer i when i == 0 -> "Null";
    case Integer i             -> "Negativ: " + i;
    case String s when s.isEmpty() -> "Leerer String";
    case String s              -> "String: " + s;
    default                    -> "Unbekannt";
};
```

**Besonderheiten:**
- Guarded Patterns mit `when`-Klausel seit Java 21 (JEP 441)
- `when` ersetzt die in Preview-Versionen verwendete `&&`-Syntax
- Kann mit Typ-Patterns und Record Patterns kombiniert werden
- Guards werden nach dem Pattern-Match ausgewertet

**Weiterführende Links:**
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

// Guards mit ADTs
type Result
  Ok(value: int)
  Error(code: int, message: string)

fun handleResult(r: Result): string
  match r
    Ok(x) | x > 100      -> "Großer Erfolg: " ++ x.show
    Ok(x)                 -> "Erfolg: " ++ x.show
    Error(404, m)         -> "Nicht gefunden: " ++ m
    Error(_, m)           -> "Fehler: " ++ m
```

**Besonderheiten:**
- Guards werden mit `|` nach dem Pattern angegeben
- Guards werden nach dem erfolgreichen Matching des Patterns ausgewertet
- Ermöglicht feinere Unterscheidung von Fällen
- Können mit beliebigen Booleschen Ausdrücken verwendet werden

**Weiterführende Links:**
- [Koka Language Guide - Pattern Matching](https://koka-lang.github.io/koka/doc/book.html#sec-pattern-matching)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Guard Patterns (über If-Then-Else in Klauselkörpern)
:- func classify(int) = string.
classify(N) = Result :-
    ( if N > 10 then
        Result = "Größer als zehn"
    else if N < 0 then
        Result = "Negativ"
    else
        Result = "Zwischen null und zehn"
    ).
```

**Besonderheiten:**
- Guards werden über `if-then-else`-Ausdrücke im Klauselkörper realisiert
- Beliebige boolesche Bedingungen als Guards möglich
- Kombination von Bedingungen mit `,` (Und) und `;` (Oder)
- Determinismussystem stellt sicher, dass alle Fälle abgedeckt sind

**Weiterführende Links:**
- [Mercury Language Reference - Conditional Goals](https://www.mercurylang.org/information/doc-release/mercury_ref/Conditional-goals.html)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Guard Patterns
classify :: Int -> String
classify n
    | n < 0 = "Negativ"
    | n == 0 = "Null"
    | n < 10 = "Klein"
    | otherwise = "Groß"
```

**Besonderheiten:**
- Guards werden mit `|` eingeleitet
- `otherwise` als Catch-All (ist `true`)
- Guards können in Funktionsdefinitionen und `case`-Ausdrücken verwendet werden

**Weiterführende Links:**
- [PureScript Documentation - Guards](https://github.com/purescript/documentation/blob/master/language/Pattern-Matching.md#guards)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
(define (classify-number n)
  (match n
    [(? number? x) #:when (> x 0) "Positiv"]
    [(? number? x) #:when (< x 0) "Negativ"]
    [0 "Null"]
    [_ "Keine Zahl"]))

(classify-number 42)   ; "Positiv"
(classify-number -5)   ; "Negativ"
(classify-number 0)    ; "Null"
```

**Besonderheiten:**
- `#:when` für Guard-Bedingungen in `match`
- Guards können beliebige Ausdrücke sein
- Werden nach dem Pattern-Match geprüft

**Weiterführende Links:**
- [Racket Documentation - Pattern Matching](https://docs.racket-lang.org/reference/match.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Guard Patterns
classify : I64 -> Str
classify = \n ->
    when n is
        x if x > 0 -> "Positiv"
        x if x < 0 -> "Negativ"
        _ -> "Null"
```

**Besonderheiten:**
- `if`-Guards in `when/is` Patterns
- Guard wird nach Pattern-Match geprüft

**Weiterführende Links:**
- [Roc Documentation - Pattern Matching](https://www.roc-lang.org/tutorial#pattern-matching)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Guard Patterns mit /; (Condition) *)
f[x_Integer /; x > 0] := "Positiv"
f[x_Integer /; x < 0] := "Negativ"
f[0] := "Null"

f[5]   (* "Positiv" *)
f[-3]  (* "Negativ" *)
f[0]   (* "Null" *)
```

**Besonderheiten:**
- `/;` (Condition) fügt Guard-Bedingungen zu Patterns hinzu
- Bedingung muss True ergeben, damit das Pattern matcht
- Kann an beliebiger Stelle im Pattern stehen

**Weiterführende Links:**
- [Wolfram Language Documentation - Condition](https://reference.wolfram.com/language/ref/Condition.html)

</TabItem>
</Tabs>


## 6.3.9. Active Patterns

Active Patterns ermöglichen es, benutzerdefinierte Zerlegungsfunktionen zu definieren, die direkt in Pattern-Matching-Ausdrücken verwendet werden können. Statt nur gegen feste Werte oder Typen zu matchen, wird die Zerlegungslogik in eine Funktion ausgelagert.

### Sprachen {#sprachen}

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
    | Even n -> sprintf "%d ist gerade" n
    | _ -> sprintf "%d ist ungerade" n
```

**Besonderheiten:**
- **Complete Active Patterns** (`(|A|B|C|)`) decken alle Fälle ab — der Compiler prüft Vollständigkeit
- **Partial Active Patterns** (`(|A|_|)`) geben `Some`/`None` zurück und matchen nur bei `Some`
- **Parameterized Active Patterns** erlauben zusätzliche Parameter: `(|DivisibleBy|_|) d n = ...`
- Active Patterns sind First-Class-Funktionen und können kombiniert werden

**Weiterführende Links:**
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
classify (sign -> Positive) = "positiv"
classify (sign -> Negative) = "negativ"
classify (sign -> Zero)     = "null"

-- View Pattern mit Extraktionsfunktion
parity :: Int -> Either Int Int
parity n | even n    = Left n
         | otherwise = Right n

describe :: Int -> String
describe (parity -> Left n)  = show n ++ " ist gerade"
describe (parity -> Right n) = show n ++ " ist ungerade"
```

**Besonderheiten:**
- View Patterns erfordern die GHC-Erweiterung `ViewPatterns`
- Syntax: `(funktion -> pattern)` — die Funktion wird auf den Wert angewendet und das Ergebnis gegen das Pattern gematcht
- View Patterns können mit regulären Patterns kombiniert werden
- Pattern Synonyms (GHC-Erweiterung `PatternSynonyms`) bieten eine weitere Alternative für benutzerdefinierte Patterns

**Weiterführende Links:**
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
  _ | Positive = "positiv"
  _ | Negative = "negativ"
  _ | Zero     = "null"
```

**Besonderheiten:**
- Views werden mit dem `with`-Konstrukt realisiert
- Die View-Funktion wird auf den Wert angewendet, das Ergebnis steht nach `|` zum Matchen bereit
- Views sind ein zentrales Konzept in Idris für dependent Pattern Matching
- Verschachtelte `with`-Blöcke ermöglichen mehrstufige Zerlegungen

**Weiterführende Links:**
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
    [(positive) "positiv"]
    [(negative) "negativ"]
    [_ "null"]))

;; Match Expander mit Extraktion
(define-match-expander even-val
  (lambda (stx)
    (syntax-case stx ()
      [(_ x) #'(? even? x)])))

(define (describe n)
  (match n
    [(even-val x) (format "~a ist gerade" x)]
    [_ (format "~a ist ungerade" n)]))
```

**Besonderheiten:**
- `define-match-expander` definiert benutzerdefinierte Pattern für `match`
- Der Expander ist ein Makro-Transformer, der Syntax-Objekte erzeugt
- `?` in Patterns wendet ein Prädikat auf den Wert an
- Match Expander können beliebig komplexe Zerlegungen definieren

**Weiterführende Links:**
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
  case Positive() => "positiv"
  case Negative() => "negativ"
  case _          => "null"
}

// Extractor mit Wertrückgabe
object Even {
  def unapply(n: Int): Option[Int] =
    if (n % 2 == 0) Some(n) else None
}

val describe: Int => String = {
  case Even(n) => s"$n ist gerade"
  case n       => s"$n ist ungerade"
}
```

**Besonderheiten:**
- Extractors werden als Objekte mit `unapply`-Methode definiert
- `unapply` mit `Boolean`-Rückgabe: Pattern matcht bei `true`
- `unapply` mit `Option`-Rückgabe: Pattern matcht bei `Some` und extrahiert den Wert
- `unapplySeq` ermöglicht Extraktion variabler Anzahl von Werten

**Weiterführende Links:**
- [Scala Documentation - Extractor Objects](https://docs.scala-lang.org/tour/extractor-objects.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Custom Pattern Matching über ~= Operator
func ~= (pattern: (Int) -> Bool, value: Int) -> Bool {
    pattern(value)
}

let isPositive: (Int) -> Bool = { $0 > 0 }
let isNegative: (Int) -> Bool = { $0 < 0 }

func classify(_ n: Int) -> String {
    switch n {
    case isPositive: return "positiv"
    case isNegative: return "negativ"
    default: return "null"
    }
}
```

**Besonderheiten:**
- Kein natives Active-Pattern-System — Custom Matching über `~=`-Operator-Überladung
- Der `~=`-Operator wird in `switch`/`case`-Ausdrücken für Pattern Matching verwendet
- Jeder Typ kann `~=` implementieren, um eigenes Matching-Verhalten zu definieren
- Eingeschränkter als echte Active Patterns: keine Destrukturierung, nur Bool-Rückgabe

**Weiterführende Links:**
- [Swift Documentation - Pattern Matching Operator](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/patterns/)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```wolfram
(* Condition-Patterns mit /; *)
classify[n_ /; n > 0] := "positiv"
classify[n_ /; n < 0] := "negativ"
classify[0] := "null"

(* PatternTest mit ? — eigene Testfunktion als Pattern *)
myEvenQ = EvenQ;
describe[n_?myEvenQ] := ToString[n] <> " ist gerade"
describe[n_] := ToString[n] <> " ist ungerade"
```

**Besonderheiten:**
- `Condition` (`/;`) fügt beliebige Bedingungen zu Patterns hinzu
- `PatternTest` (`?`) wendet eine Testfunktion auf den gematchten Wert an
- Patterns können mit `|` (Alternatives) und `/;` beliebig kombiniert werden
- Kein Extractor-Mechanismus — Zerlegung erfolgt über Pattern-Struktur, nicht über Funktionen

**Weiterführende Links:**
- [Wolfram Language Documentation - Condition](https://reference.wolfram.com/language/ref/Condition.html)
- [Wolfram Language Documentation - PatternTest](https://reference.wolfram.com/language/ref/PatternTest.html)

</TabItem>
</Tabs>


## 6.3.10. Unnamed Variables and Patterns

Unnamed Variables and Patterns ermöglichen das Ignorieren von Werten im Pattern Matching, ohne sie zu binden.

### Sprachen {#sprachen}

<Tabs availableTabs={['csharp', 'dart', 'elixir', 'elm', 'erlang', 'fsharp', 'gleam', 'haskell', 'haxe', 'idris', 'java', 'koka', 'lean4', 'mercury', 'ocaml', 'prolog', 'purescript', 'python', 'racket', 'roc', 'rust', 'scala', 'swift', 'wolfram-language']}>
<TabItem value="csharp" label="C#">

```csharp
// Unnamed Variables and Patterns (seit C# 8.0)
var point = (x: 5, y: 10);
var result = point switch
{
    (0, _) => "X ist null",
    (_, 0) => "Y ist null",
    (_, _) => "Beide ungleich null"
};
```

**Besonderheiten:**
- `_` als Discard-Pattern seit C# 8.0
- Kann in verschiedenen Kontexten verwendet werden
- Ignoriert Werte ohne Bindung

**Weiterführende Links:**
- [C# Pattern Matching Documentation](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/functional/pattern-matching)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Unnamed Variables and Patterns
point = {5, 10}
result = case point do
  {0, _} -> "X ist null"
  {_, 0} -> "Y ist null"
  {_, _} -> "Beide ungleich null"
end
```

**Besonderheiten:**
- `_` als Unnamed Variable ist ein fundamentales Sprachfeature
- Kann in verschiedenen Kontexten verwendet werden
- Ignoriert Werte ohne Bindung

**Weiterführende Links:**
- [Elixir Pattern Matching Guide](https://elixir-lang.org/getting-started/pattern-matching.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% Unnamed Variables and Patterns
Point = {5, 10},
Result = case Point of
    {0, _} -> "X ist null";
    {_, 0} -> "Y ist null";
    {_, _} -> "Beide ungleich null"
end.
```

**Besonderheiten:**
- `_` als Unnamed Variable ist ein fundamentales Sprachfeature
- Kann in verschiedenen Kontexten verwendet werden
- Ignoriert Werte ohne Bindung

**Weiterführende Links:**
- [Erlang Pattern Matching](https://www.erlang.org/doc/reference_manual/patterns.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Unnamed Variables and Patterns
let point = (5, 10)
let result = match point with
    | (0, _) -> "X ist null"
    | (_, 0) -> "Y ist null"
    | (_, _) -> "Beide ungleich null"
```

**Besonderheiten:**
- `_` als Unnamed Variable ist ein fundamentales Sprachfeature
- Kann in verschiedenen Kontexten verwendet werden
- Ignoriert Werte ohne Bindung

**Weiterführende Links:**
- [F# Pattern Matching](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/pattern-matching)

</TabItem>
<TabItem value="gleam" label="Gleam">

```erlang
// Unnamed Variables and Patterns
let point = #(5, 10)
let result = case point {
  #(0, _) -> "X ist null"
  #(_, 0) -> "Y ist null"
  #(_, _) -> "Beide ungleich null"
}
```

**Besonderheiten:**
- `_` als Unnamed Variable ist ein fundamentales Sprachfeature
- Kann in verschiedenen Kontexten verwendet werden
- Ignoriert Werte ohne Bindung

**Weiterführende Links:**
- [Gleam Pattern Matching](https://gleam.run/documentation/tour/pattern-matching/)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Unnamed Variables and Patterns
point = (5, 10)
result = case point of
  (0, _) -> "X ist null"
  (_, 0) -> "Y ist null"
  (_, _) -> "Beide ungleich null"
```

**Besonderheiten:**
- `_` als Unnamed Variable ist ein fundamentales Sprachfeature
- Kann in verschiedenen Kontexten verwendet werden
- Ignoriert Werte ohne Bindung

**Weiterführende Links:**
- [Haskell Pattern Matching](https://www.haskell.org/tutorial/patterns.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Unnamed Variables and Patterns *)
let point = (5, 10) in
let result = match point with
  | (0, _) -> "X ist null"
  | (_, 0) -> "Y ist null"
  | (_, _) -> "Beide ungleich null"
```

**Besonderheiten:**
- `_` als Unnamed Variable ist ein fundamentales Sprachfeature
- Kann in verschiedenen Kontexten verwendet werden
- Ignoriert Werte ohne Bindung

**Weiterführende Links:**
- [OCaml Pattern Matching](https://ocaml.org/manual/patterns.html)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Unnamed Variables mit _
describe_point(point(0, _), "X ist null").
describe_point(point(_, 0), "Y ist null").
describe_point(point(_, _), "Beide ungleich null").

% Mehrere unbenannte Variablen in einer Klausel
first_element([First|_], First).

% Spezifische anonyme Variablen mit _Prefix
process(person(_Name, Age), "Erwachsen") :- Age >= 18.
process(person(_Name, _Age), "Minderjährig").
```

**Besonderheiten:**
- `_` ist die anonyme Variable – jedes Vorkommen ist unabhängig und wird nie gebunden
- Variablen mit `_`-Prefix (z.B. `_Name`) sind benannt, erzeugen aber keine Singleton-Warnung
- `_` kann beliebig oft in einem Pattern verwendet werden – jedes Vorkommen ist eine eigene Variable
- Fundamentales Sprachfeature, das seit den Anfängen von Prolog existiert

**Weiterführende Links:**
- [SWI-Prolog – Anonymous Variables](https://www.swi-prolog.org/pldoc/man?section=syntax)

</TabItem>
<TabItem value="python" label="Python">

```python
# Unnamed Variables and Patterns (seit Python 3.10)
point = (5, 10)
match point:
    case (0, _):
        result = "X ist null"
    case (_, 0):
        result = "Y ist null"
    case (_, _):
        result = "Beide ungleich null"
```

**Besonderheiten:**
- `_` als Unnamed Variable seit Python 3.10
- Kann in verschiedenen Kontexten verwendet werden
- Ignoriert Werte ohne Bindung

**Weiterführende Links:**
- [Python Pattern Matching](https://docs.python.org/3/tutorial/controlflow.html#match-statements)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Unnamed Variables and Patterns
let point = (5, 10);
let result = match point {
    (0, _) => "X ist null",
    (_, 0) => "Y ist null",
    (_, _) => "Beide ungleich null"
};
```

**Besonderheiten:**
- `_` als Unnamed Variable ist ein fundamentales Sprachfeature
- Kann in verschiedenen Kontexten verwendet werden
- Ignoriert Werte ohne Bindung

**Weiterführende Links:**
- [Rust Pattern Matching](https://doc.rust-lang.org/book/ch18-03-pattern-syntax.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Unnamed Variables and Patterns
val point = (5, 10)
val result = point match {
  case (0, _) => "X ist null"
  case (_, 0) => "Y ist null"
  case (_, _) => "Beide ungleich null"
}
```

**Besonderheiten:**
- `_` als Unnamed Variable ist ein fundamentales Sprachfeature
- Kann in verschiedenen Kontexten verwendet werden
- Ignoriert Werte ohne Bindung

**Weiterführende Links:**
- [Scala Pattern Matching](https://docs.scala-lang.org/tour/pattern-matching.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Unnamed Variables and Patterns
let point = (x: 5, y: 10)
let result = switch point {
case (0, _):
    "X ist null"
case (_, 0):
    "Y ist null"
case (_, _):
    "Beide ungleich null"
}
```

**Besonderheiten:**
- `_` als Unnamed Variable ist ein fundamentales Sprachfeature
- Kann in verschiedenen Kontexten verwendet werden
- Ignoriert Werte ohne Bindung

**Weiterführende Links:**
- [Swift Pattern Matching](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/patterns/)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Unnamed Variables und Wildcard Patterns (seit Dart 3.0)
// Wildcard in Destructuring
var (name, _, age) = ('Alice', 'ignoriert', 30);

// Wildcard in switch
switch (value) {
  case (int _, String s):
    print('String: $s');
  case _:
    print('Default');
}

// Rest-Pattern zum Ignorieren
var [first, ..., last] = [1, 2, 3, 4, 5];

// Wildcard in for-Schleifen
for (var MapEntry(:value, key: _) in map.entries) {
  print(value);
}
```

**Besonderheiten:**
- `_` als Wildcard zum Ignorieren von Werten
- `...` als Rest-Pattern ohne Variablenbindung
- Mehrere `_` in einem Pattern erlaubt (kein Namenskonflikt)
- Seit Dart 3.0

**Weiterführende Links:**
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

**Besonderheiten:**
- `_` matcht jeden Wert, ohne ihn zu binden
- Kann mehrfach im selben Pattern verwendet werden
- Compiler warnt nicht bei unbenutzten Wildcard-Bindings

**Weiterführende Links:**
- [Elm Documentation - Pattern Matching](https://guide.elm-lang.org/types/pattern_matching.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Wildcard Pattern
var result = switch (pair) {
    case { x: 0, y: _ }: "Auf der Y-Achse";
    case { x: _, y: 0 }: "Auf der X-Achse";
    case _: "Anderer Punkt";
};
```

**Besonderheiten:**
- `_` als Wildcard für beliebige Werte
- Kann in verschachtelten Patterns verwendet werden

**Weiterführende Links:**
- [Haxe Documentation - Pattern Matching](https://haxe.org/manual/lf-pattern-matching.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Wildcard-Pattern
fst : (a, b) -> a
fst (x, _) = x

snd : (a, b) -> b
snd (_, y) = y

-- Mehrere Wildcards
isNonEmpty : List a -> Bool
isNonEmpty (_ :: _) = True
isNonEmpty [] = False
```

**Besonderheiten:**
- `_` als Wildcard für unbenutzte Variablen
- Kann mehrfach in einem Pattern verwendet werden
- Compiler warnt nicht bei unbenutzten Wildcards

**Weiterführende Links:**
- [Idris 2 Documentation - Types and Functions](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Unnamed Variables and Patterns (Wildcard _)
type Point
  Point(x: int, y: int)

fun getX(pt: Point): int
  match pt
    Point(x, _) -> x  // y ist uninteressant

// Mehrere Wildcards
fun isNonEmpty(xs: list<int>): bool
  match xs
    Cons(_, _) -> True
    Nil        -> False

// Wildcard in verschachtelten Patterns
type Pair
  Pair(fst: int, snd: int)

fun firstOfPair(p: Pair): int
  match p
    Pair(x, _) -> x
```

**Besonderheiten:**
- `_` ist der Wildcard-Pattern zum Ignorieren von Werten
- Kann mehrfach in einem Pattern verwendet werden
- Verbessert die Lesbarkeit, indem der Fokus auf relevante Teile gelegt wird
- Wichtig für die Exhaustivitätsprüfung ohne unnötige Bindungen

**Weiterführende Links:**
- [Koka Language Guide - Pattern Matching](https://koka-lang.github.io/koka/doc/book.html#sec-pattern-matching)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Unnamed Variables (Wildcard Pattern)
def first (pair : Nat × Nat) : Nat :=
  match pair with
  | (x, _) => x

-- Wildcard in induktiven Typen
inductive Shape where
  | circle (radius : Float)
  | rectangle (width : Float) (height : Float)

def isCircle : Shape → Bool
  | Shape.circle _ => true
  | Shape.rectangle _ _ => false

-- Wildcard in Listen
def head? : List Nat → Option Nat
  | [] => none
  | x :: _ => some x
```

**Besonderheiten:**
- `_` ist der Wildcard-Pattern zum Ignorieren von Werten
- Kann mehrfach in einem Pattern verwendet werden
- Funktioniert in `match`-Ausdrücken, `let`-Bindungen und Funktionsdefinitionen
- Wichtig für die Exhaustivitätsprüfung ohne unnötige Bindungen

**Weiterführende Links:**
- [Lean 4 Documentation - Pattern Matching](https://lean-lang.org/lean4/doc/pattern.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Unnamed Variables and Patterns
:- type point ---> point(int, int).

:- func get_x(point) = int.
get_x(point(X, _)) = X.

% Wildcard in Listen
:- func first(list(T)) = T.
:- mode first(in) = out is semidet.
first([H | _]) = H.

% Mehrere Wildcards
:- pred is_pair(list(T)::in) is semidet.
is_pair([_, _]).
```

**Besonderheiten:**
- `_` als Wildcard-Pattern ist ein fundamentales Sprachfeature
- Kann mehrfach in einem Pattern verwendet werden
- Ignoriert Werte ohne Bindung
- Jedes `_` ist unabhängig (matcht verschiedene Werte)

**Weiterführende Links:**
- [Mercury Language Reference - Data Terms](https://www.mercurylang.org/information/doc-release/mercury_ref/Data-terms.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Unnamed Variables and Patterns (seit Java 22)
record Point(int x, int y) {}

// Unnamed Variable in catch
try {
    int result = 10 / 0;
} catch (ArithmeticException _) {
    System.out.println("Division durch Null");
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

**Besonderheiten:**
- Unnamed Variables und Patterns seit Java 22 (JEP 456)
- Verwendet `_` als Platzhalter für nicht benötigte Variablen
- Anwendbar in `catch`, `for`, `instanceof`, `switch`, Lambda-Parameter
- Verbessert Lesbarkeit durch explizites Ignorieren von Werten

**Weiterführende Links:**
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

**Besonderheiten:**
- `_` als Wildcard für ignorierte Werte
- Kann in jedem Pattern verwendet werden

**Weiterführende Links:**
- [PureScript Documentation - Pattern Matching](https://github.com/purescript/documentation/blob/master/language/Pattern-Matching.md)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
(define (first-element lst)
  (match lst
    [(list first _ ...) first]
    [_ "Leer"]))

(first-element '(1 2 3))  ; 1
```

**Besonderheiten:**
- `_` als Wildcard-Pattern (matcht alles, bindet nicht)
- `...` für Rest-Elemente
- Kann in verschachtelten Patterns verwendet werden

**Weiterführende Links:**
- [Racket Documentation - Pattern Matching](https://docs.racket-lang.org/reference/match.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Unnamed Variables und Patterns
getFirst : (a, b) -> a
getFirst = \(first, _) -> first

when result is
    Ok _ -> "Success"
    Err _ -> "Error"
```

**Besonderheiten:**
- `_` als Wildcard-Pattern (ignoriert den Wert)
- Kann in Pattern Matching und Destructuring verwendet werden

**Weiterführende Links:**
- [Roc Documentation - Pattern Matching](https://www.roc-lang.org/tutorial#pattern-matching)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Unnamed Patterns *)
f[_, y_] := y           (* Erstes Argument wird ignoriert *)
f["ignoriert", 42]      (* 42 *)

(* Blank-Sequenzen *)
g[__, last_] := last     (* Alle außer dem letzten werden ignoriert *)
g[1, 2, 3, 4]           (* 4 *)
```

**Besonderheiten:**
- `_` (Blank) matcht einen beliebigen Ausdruck
- `__` (BlankSequence) matcht eine oder mehrere Ausdrücke
- `___` (BlankNullSequence) matcht null oder mehr Ausdrücke

**Weiterführende Links:**
- [Wolfram Language Documentation - Blank](https://reference.wolfram.com/language/ref/Blank.html)

</TabItem>
</Tabs>


## 6.3.11. Exhaustiveness Checking

Exhaustiveness Checking stellt sicher, dass alle möglichen Fälle in einem Pattern Match abgedeckt sind.

### Sprachen {#sprachen}

<Tabs availableTabs={['csharp', 'dart', 'elm', 'fsharp', 'gleam', 'haskell', 'haxe', 'idris', 'java', 'koka', 'kotlin', 'lean4', 'mercury', 'ocaml', 'purescript', 'roc', 'rust', 'scala', 'swift', 'v']}>
<TabItem value="csharp" label="C#">

```csharp
// Exhaustiveness Checking (seit C# 8.0)
enum Status { Active, Inactive, Pending }

Status status = Status.Active;
string result = status switch
{
    Status.Active => "Aktiv",
    Status.Inactive => "Inaktiv",
    Status.Pending => "Ausstehend"
    // Compiler warnt bei fehlenden Cases
};
```

**Besonderheiten:**
- Exhaustiveness Checking für switch-Expressions seit C# 8.0
- Compiler warnt bei nicht abgedeckten Enum-Werten
- Vollständige Abdeckung wird erzwungen

**Weiterführende Links:**
- [C# Pattern Matching Documentation](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/functional/pattern-matching)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Exhaustiveness Checking
type Status = Active | Inactive | Pending

let status = Status.Active
let result = match status with
    | Status.Active -> "Aktiv"
    | Status.Inactive -> "Inaktiv"
    | Status.Pending -> "Ausstehend"
    // Compiler warnt bei fehlenden Cases
```

**Besonderheiten:**
- Exhaustiveness Checking ist ein fundamentales Sprachfeature
- Compiler warnt bei nicht abgedeckten Discriminated Union Cases
- Vollständige Abdeckung wird erzwungen

**Weiterführende Links:**
- [F# Pattern Matching](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/pattern-matching)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Exhaustiveness Checking
data Status = Active | Inactive | Pending

status = Active
result = case status of
  Active -> "Aktiv"
  Inactive -> "Inaktiv"
  Pending -> "Ausstehend"
  -- Compiler warnt bei fehlenden Cases
```

**Besonderheiten:**
- Exhaustiveness Checking ist ein fundamentales Sprachfeature
- Compiler warnt bei nicht abgedeckten Data Constructor Cases
- Vollständige Abdeckung wird erzwungen

**Weiterführende Links:**
- [Haskell Pattern Matching](https://www.haskell.org/tutorial/patterns.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Exhaustiveness Checking *)
type status = Active | Inactive | Pending

let status = Active in
let result = match status with
  | Active -> "Aktiv"
  | Inactive -> "Inaktiv"
  | Pending -> "Ausstehend"
  (* Compiler warnt bei fehlenden Cases *)
```

**Besonderheiten:**
- Exhaustiveness Checking ist ein fundamentales Sprachfeature
- Compiler warnt bei nicht abgedeckten Variant Cases
- Vollständige Abdeckung wird erzwungen

**Weiterführende Links:**
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
    Status::Active => "Aktiv",
    Status::Inactive => "Inaktiv",
    Status::Pending => "Ausstehend",
    // Compiler warnt bei fehlenden Cases
};
```

**Besonderheiten:**
- Exhaustiveness Checking ist ein fundamentales Sprachfeature
- Compiler warnt bei nicht abgedeckten Enum Variants
- Vollständige Abdeckung wird erzwungen

**Weiterführende Links:**
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
  case Active => "Aktiv"
  case Inactive => "Inaktiv"
  case Pending => "Ausstehend"
  // Compiler warnt bei fehlenden Cases (nur mit sealed)
}
```

**Besonderheiten:**
- Exhaustiveness Checking mit `sealed` Traits
- Compiler warnt bei nicht abgedeckten Case Objects
- Vollständige Abdeckung wird erzwungen

**Weiterführende Links:**
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
    "Aktiv"
case .inactive:
    "Inaktiv"
case .pending:
    "Ausstehend"
    // Compiler warnt bei fehlenden Cases
}
```

**Besonderheiten:**
- Exhaustiveness Checking ist ein fundamentales Sprachfeature
- Compiler warnt bei nicht abgedeckten Enum Cases
- Vollständige Abdeckung wird erzwungen

**Weiterführende Links:**
- [Swift Pattern Matching](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/patterns/)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Exhaustiveness Checking (seit Dart 3.0)
sealed class Shape {}
class Circle extends Shape { final double radius; Circle(this.radius); }
class Rectangle extends Shape { final double width, height; Rectangle(this.width, this.height); }

// Compiler prüft Vollständigkeit
double area(Shape shape) => switch (shape) {
  Circle(:var radius) => 3.14159 * radius * radius,
  Rectangle(:var width, :var height) => width * height,
  // Kein default nötig - alle Subtypen abgedeckt
};

// Auch bei Enums
enum Color { red, green, blue }

String toHex(Color c) => switch (c) {
  Color.red => '#FF0000',
  Color.green => '#00FF00',
  Color.blue => '#0000FF',
};
```

**Besonderheiten:**
- Exhaustiveness Checking für `sealed` Klassen und Enums
- Compiler-Warnung wenn nicht alle Fälle abgedeckt sind
- Kein `default`/`_`-Fall nötig bei vollständiger Abdeckung
- Seit Dart 3.0

**Weiterführende Links:**
- [Dart Documentation - Class Modifiers](https://dart.dev/language/class-modifiers)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
type Color = Red | Green | Blue

-- Compiler-Fehler: nicht alle Fälle abgedeckt
-- toHex : Color -> String
-- toHex color =
--     case color of
--         Red -> "#FF0000"
--         -- Green und Blue fehlen -> Compiler-Fehler

-- Korrekt: alle Fälle abgedeckt
toHex : Color -> String
toHex color =
    case color of
        Red   -> "#FF0000"
        Green -> "#00FF00"
        Blue  -> "#0000FF"
```

**Besonderheiten:**
- Compiler erzwingt, dass alle Varianten eines Custom Types behandelt werden
- Kein Laufzeitfehler durch fehlende Pattern-Zweige möglich
- Neue Varianten führen zu Compiler-Fehlern an allen `case`-Stellen
- Trägt zu Elms Garantie "keine Laufzeitfehler" bei

**Weiterführende Links:**
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
    // Kompilierungsfehler: Blue ist nicht abgedeckt
  }
}
```

**Besonderheiten:**
- Compiler erzwingt vollständige Abdeckung aller Varianten in case-Ausdrücken
- Verhindert vergessene Fälle zur Kompilierzeit
- Gilt für Custom Types, Bool, und andere Pattern Matches

**Weiterführende Links:**
- [Gleam Documentation - Case Expressions](https://tour.gleam.run/flow-control/case-expressions/)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Exhaustiveness Checking
enum Color { Red; Green; Blue; }

// Compiler-Warnung wenn nicht alle Fälle abgedeckt:
var name = switch (color) {
    case Red: "Rot";
    case Green: "Grün";
    case Blue: "Blau";
    // Alle Fälle abgedeckt - kein default nötig
};
```

**Besonderheiten:**
- Compiler prüft Vollständigkeit bei Enum-Patterns
- Warnung bei fehlenden Fällen
- `default` oder `case _:` für catch-all

**Weiterführende Links:**
- [Haxe Documentation - Pattern Matching](https://haxe.org/manual/lf-pattern-matching.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Exhaustiveness Checking durch Totality Checker
data Color = Red | Green | Blue

-- total: Alle Fälle abgedeckt
colorName : Color -> String
colorName Red = "Rot"
colorName Green = "Grün"
colorName Blue = "Blau"

-- Nicht-totale Funktion: Compiler-Warnung
-- partial
incompleteFn : Color -> String
incompleteFn Red = "Rot"
-- Green und Blue fehlen -> Warnung
```

**Besonderheiten:**
- Totality Checker prüft Exhaustiveness und Terminierung
- `total`-Keyword erzwingt vollständige Abdeckung
- `partial`-Keyword erlaubt unvollständige Patterns
- Nicht-totale Funktionen erzeugen Compiler-Warnungen

**Weiterführende Links:**
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
    // Alle Fälle abgedeckt — kein Compiler-Fehler

// Unvollständiges Matching erzeugt einen Compiler-Fehler:
// fun incomplete(current: TrafficLight): string
//   match current
//     Red -> "Rot"
//     // Fehler: non-exhaustive match, missing: Yellow, Green

// Exhaustiveness mit Maybe
fun unwrapOr(opt: maybe<int>, default: int): int
  match opt
    Just(x) -> x
    Nothing -> default
```

**Besonderheiten:**
- Koka führt strenge Exhaustivitätsprüfung für `match`-Ausdrücke durch
- Der Compiler stellt sicher, dass alle Konstruktoren eines ADT abgedeckt sind
- Nicht-exhaustive Matches führen zu einem Compile-Fehler
- Verbessert die Robustheit und Sicherheit des Codes erheblich

**Weiterführende Links:**
- [Koka Language Guide - Pattern Matching](https://koka-lang.github.io/koka/doc/book.html#sec-pattern-matching)

</TabItem>
<TabItem value="java" label="Java">

```java
// Exhaustiveness Checking (seit Java 21)
sealed interface Shape permits Circle, Rectangle {}
record Circle(double radius) implements Shape {}
record Rectangle(double width, double height) implements Shape {}

// Compiler prüft Vollständigkeit - kein default nötig
double area(Shape shape) {
    return switch (shape) {
        case Circle c    -> Math.PI * c.radius() * c.radius();
        case Rectangle r -> r.width() * r.height();
    };
}
```

**Besonderheiten:**
- Exhaustiveness Checking seit Java 21 (JEP 441)
- Compiler prüft, ob alle Fälle abgedeckt sind
- Kein `default` nötig bei vollständiger Abdeckung von Sealed Types
- Kompilierfehler, wenn ein Fall fehlt

**Weiterführende Links:**
- [Oracle Java Documentation - Pattern Matching for switch](https://docs.oracle.com/en/java/javase/21/language/pattern-matching-switch-expressions-and-statements.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Exhaustiveness Checking mit Sealed Classes
sealed class Shape {
    data class Circle(val radius: Double) : Shape()
    data class Rectangle(val width: Double, val height: Double) : Shape()
}

fun area(shape: Shape): Double = when (shape) {
    is Shape.Circle -> Math.PI * shape.radius * shape.radius
    is Shape.Rectangle -> shape.width * shape.height
    // Compiler-Fehler, wenn ein Fall fehlt
}

// Exhaustiveness Checking mit Enum Classes
enum class Color { RED, GREEN, BLUE }

fun describe(color: Color): String = when (color) {
    Color.RED -> "Rot"
    Color.GREEN -> "Grün"
    Color.BLUE -> "Blau"
    // Compiler-Fehler, wenn ein Fall fehlt
}
```

**Besonderheiten:**
- Compiler erzwingt Vollständigkeit bei `when`-Ausdrücken (Expression, nicht Statement)
- Funktioniert mit Sealed Classes, Enum Classes und Boolean
- `else`-Branch kann als Catch-all verwendet werden
- Seit Kotlin 1.7: auch für `when`-Statements mit Sealed Classes empfohlen

**Weiterführende Links:**
- [Kotlin Documentation - Sealed classes and when expression](https://kotlinlang.org/docs/sealed-classes.html#sealed-classes-and-when-expression)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Exhaustiveness Checking bei induktiven Typen
inductive Color where
  | red
  | green
  | blue

-- Vollständiges Pattern Matching (kompiliert)
def colorName : Color → String
  | Color.red => "Rot"
  | Color.green => "Grün"
  | Color.blue => "Blau"

-- Unvollständiges Pattern Matching (Compiler-Fehler!)
-- def incompleteFn : Color → String
--   | Color.red => "Rot"
--   -- Fehler: missing cases: Color.green, Color.blue
```

**Besonderheiten:**
- Lean 4 erzwingt strenge Exhaustivitätsprüfung für alle `match`-Ausdrücke
- Fehlende Fälle führen zu einem Compiler-Fehler (nicht nur Warnung)
- Funktioniert mit allen induktiven Typen (Enums, Sum Types, rekursive Typen)
- `_` als Wildcard-Pattern für Catch-All

**Weiterführende Links:**
- [Lean 4 Documentation - Pattern Matching](https://lean-lang.org/lean4/doc/pattern.html)
- [Lean 4 Documentation - Inductive Types](https://lean-lang.org/lean4/doc/inductive.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Exhaustiveness Checking (über das Determinismussystem)
:- type color ---> red ; green ; blue.

:- func color_name(color) = string.
color_name(red) = "Rot".
color_name(green) = "Grün".
color_name(blue) = "Blau".
% Compiler prüft Exhaustiveness für 'det' Determinismus

% Unvollständiges Pattern Matching führt zu Compiler-Fehler:
% :- func incomplete(color) = string.
% incomplete(red) = "Rot".
% -- Fehler: determinism declaration not satisfied
```

**Besonderheiten:**
- Das Determinismussystem (`det`, `semidet`, etc.) erzwingt Exhaustiveness
- Für `det`-Funktionen müssen alle Konstruktoren abgedeckt sein
- Fehlende Fälle führen zu einem Compiler-Fehler (nicht nur Warnung)
- `_` als Wildcard-Pattern für Catch-All-Fälle

**Weiterführende Links:**
- [Mercury Language Reference - Determinism](https://www.mercurylang.org/information/doc-release/mercury_ref/Determinism.html)

</TabItem>

<TabItem value="purescript" label="PureScript">

```purescript
-- Exhaustiveness Checking
data Color = Red | Green | Blue

-- Compiler-Warnung: Nicht-exhaustives Pattern Matching
-- colorName :: Color -> String
-- colorName Red = "Rot"
-- colorName Green = "Grün"
-- Fehlt: Blue -> ...

-- Vollständiges Pattern Matching
colorName :: Color -> String
colorName Red = "Rot"
colorName Green = "Grün"
colorName Blue = "Blau"
```

**Besonderheiten:**
- Compiler prüft Exhaustiveness zur Compile-Zeit
- Warnung bei nicht-exhaustiven Patterns
- Erzwingt vollständige Abdeckung aller Fälle

**Weiterführende Links:**
- [PureScript Documentation - Pattern Matching](https://github.com/purescript/documentation/blob/master/language/Pattern-Matching.md)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Exhaustiveness Checking
-- Compiler-Fehler wenn nicht alle Fälle abgedeckt
Color : [Red, Green, Blue]

toStr : Color -> Str
toStr = \color ->
    when color is
        Red -> "Rot"
        Green -> "Grün"
        Blue -> "Blau"
        -- Alle Fälle müssen abgedeckt sein
```

**Besonderheiten:**
- Compiler erzwingt vollständige Abdeckung aller Fälle
- Compile-time Fehler bei fehlenden Patterns
- `_` Wildcard für Catch-all

**Weiterführende Links:**
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
        // Alle Varianten müssen abgedeckt sein
    }
}
```

**Besonderheiten:**
- Compiler prüft Vollständigkeit bei `match` auf Sum Types
- Fehlende Varianten führen zu Kompilierfehlern
- `else`-Branch kann Exhaustiveness umgehen

**Weiterführende Links:**
- [V Documentation - Match](https://github.com/vlang/v/blob/master/doc/docs.md#match)

</TabItem>
</Tabs>

