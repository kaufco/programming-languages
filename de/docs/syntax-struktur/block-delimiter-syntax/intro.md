---
slug: /syntax-struktur/block-delimiter-syntax
title: 2.2. Block-Delimiter-Syntax
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 2.2. Block-Delimiter-Syntax

Syntax für Block-Delimiter.

## 2.2.1. Curly-Brace Syntax (C-Style: `{ }`)

Verwendung von geschweiften Klammern `{ }` zur Abgrenzung von Code-Blöcken.

### Sprachen {#sprachen}

<Tabs availableTabs={['c', 'carbon', 'clojure', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'gleam', 'go', 'groovy', 'haxe', 'java', 'javascript', 'koka', 'kotlin', 'objective-c', 'perl', 'php', 'rust', 'scala', 'swift', 'typescript', 'v', 'zig']}>
<TabItem value="c" label="C">

```c
void example() {
    int x = 10;
    if (x > 5) {
        printf("x ist größer als 5\n");
    }
}
```

**Besonderheiten:**
- Geschweifte Klammern werden für Funktionen, Kontrollstrukturen und zusammengesetzte Statements verwendet

**Weiterführende Links:**
- [C Standard - Compound Statements](https://en.cppreference.com/w/c/language/statements#compound_statements)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
void Example() {
    int x = 10;
    if (x > 5) {
        Console.WriteLine("x ist größer als 5");
    }
}
```

**Besonderheiten:**
- Geschweifte Klammern werden für Methoden, Kontrollstrukturen und Namespaces verwendet

**Weiterführende Links:**
- [C# Documentation - Statements](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/statements/)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
void example() {
    int x = 10;
    if (x > 5) {
        std::cout << "x ist größer als 5" << std::endl;
    }
}
```

**Besonderheiten:**
- Geschweifte Klammern werden für Funktionen, Kontrollstrukturen und Namespaces verwendet

**Weiterführende Links:**
- [C++ Standard - Compound Statements](https://en.cppreference.com/w/cpp/language/statements#compound_statements)

</TabItem>
<TabItem value="carbon" label="Carbon">

```carbon
fn Example() {
    var x: i32 = 10;
    if (x > 5) {
        Print("x ist größer als 5");
    }
}
```

**Besonderheiten:**
- Carbon verwendet C++-ähnliche geschweifte Klammern für Code-Blöcke

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
(defn example []
  (let [x 10]
    (when (> x 5)
      (println "x ist größer als 5"))))
```

**Besonderheiten:**
- Clojure verwendet Klammern `()` für alle Code-Strukturen, nicht geschweifte Klammern

**Weiterführende Links:**
- [Clojure Documentation - Syntax](https://clojure.org/reference/reader)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
def example
  x = 10
  if x > 5
    puts "x ist größer als 5"
  end
end
```

**Besonderheiten:**
- Crystal verwendet `end` für Block-Abgrenzung, nicht geschweifte Klammern

**Weiterführende Links:**
- [Crystal Documentation - Syntax](https://crystal-lang.org/reference/syntax_and_semantics/)

</TabItem>
<TabItem value="d" label="D">

```d
void example() {
    int x = 10;
    if (x > 5) {
        writeln("x ist größer als 5");
    }
}
```

**Besonderheiten:**
- Geschweifte Klammern werden für Funktionen und Kontrollstrukturen verwendet

**Weiterführende Links:**
- [D Language Specification - Statements](https://dlang.org/spec/statement.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
void example() {
  int x = 10;
  if (x > 5) {
    print('x ist größer als 5');
  }
}
```

**Besonderheiten:**
- Geschweifte Klammern werden für Funktionen und Kontrollstrukturen verwendet

**Weiterführende Links:**
- [Dart Language Specification - Statements](https://dart.dev/guides/language/spec)

</TabItem>
<TabItem value="go" label="Go">

```go
func example() {
    x := 10
    if x > 5 {
        fmt.Println("x ist größer als 5")
    }
}
```

**Besonderheiten:**
- Geschweifte Klammern werden für Funktionen und Kontrollstrukturen verwendet
- Öffnende geschweifte Klammer muss auf derselben Zeile wie die Anweisung stehen

**Weiterführende Links:**
- [Go Language Specification - Statements](https://go.dev/ref/spec#Statements)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
def example() {
    int x = 10
    if (x > 5) {
        println "x ist größer als 5"
    }
}
```

**Besonderheiten:**
- Geschweifte Klammern werden für Methoden und Kontrollstrukturen verwendet

**Weiterführende Links:**
- [Groovy Documentation - Syntax](https://groovy-lang.org/syntax.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
function example(): Void {
    var x: Int = 10;
    if (x > 5) {
        trace("x ist größer als 5");
    }
}
```

**Besonderheiten:**
- Geschweifte Klammern werden für Funktionen und Kontrollstrukturen verwendet

**Weiterführende Links:**
- [Haxe Documentation - Syntax](https://haxe.org/manual/expression.html)

</TabItem>
<TabItem value="java" label="Java">

```java
void example() {
    int x = 10;
    if (x > 5) {
        System.out.println("x ist größer als 5");
    }
}
```

**Besonderheiten:**
- Geschweifte Klammern werden für Methoden, Kontrollstrukturen und Klassen verwendet

**Weiterführende Links:**
- [Java Language Specification - Blocks](https://docs.oracle.com/javase/specs/jls/se17/html/jls-14.html#jls-14.2)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
function example() {
    let x = 10;
    if (x > 5) {
        console.log("x ist größer als 5");
    }
}
```

**Besonderheiten:**
- Geschweifte Klammern werden für Funktionen, Kontrollstrukturen und Objektliterale verwendet

**Weiterführende Links:**
- [MDN Web Docs - Statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
fun example()
  val x = 10
  if x > 5 then
    println("x ist größer als 5")

// Alternativ mit expliziten geschweiften Klammern
fun example-braces() {
  val x = 10;
  if x > 5 then {
    println("x ist größer als 5")
  }
}
```

**Besonderheiten:**
- Geschweifte Klammern für Funktionskörper und Blöcke sind optional dank Layout-Regeln (Indentation)
- Wenn geschweifte Klammern verwendet werden, sind Semikolons als Trennzeichen möglich
- Koka unterstützt sowohl Brace-basierte als auch Indentation-basierte Syntax

**Weiterführende Links:**
- [Koka Language Documentation - Basics](https://koka-lang.github.io/koka/doc/book.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
fun example() {
    val x = 10
    if (x > 5) {
        println("x ist größer als 5")
    }
}
```

**Besonderheiten:**
- Geschweifte Klammern werden für Funktionen und Kontrollstrukturen verwendet

**Weiterführende Links:**
- [Kotlin Documentation - Control Flow](https://kotlinlang.org/docs/control-flow.html)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
- (void)example {
    int x = 10;
    if (x > 5) {
        NSLog(@"x ist größer als 5");
    }
}
```

**Besonderheiten:**
- Geschweifte Klammern werden für Methoden und Kontrollstrukturen verwendet

**Weiterführende Links:**
- [Objective-C Documentation](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html)

</TabItem>
<TabItem value="php" label="PHP">

```php
function example() {
    $x = 10;
    if ($x > 5) {
        echo "x ist größer als 5";
    }
}
```

**Besonderheiten:**
- Geschweifte Klammern werden für Funktionen und Kontrollstrukturen verwendet

**Weiterführende Links:**
- [PHP Documentation - Control Structures](https://www.php.net/manual/en/language.control-structures.php)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
fn example() {
    let x = 10;
    if x > 5 {
        println!("x ist größer als 5");
    }
}
```

**Besonderheiten:**
- Geschweifte Klammern werden für Funktionen, Kontrollstrukturen und Module verwendet

**Weiterführende Links:**
- [Rust Book - Functions](https://doc.rust-lang.org/book/ch03-03-how-functions-work.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
def example(): Unit = {
    val x = 10
    if (x > 5) {
        println("x ist größer als 5")
    }
}
```

**Besonderheiten:**
- Geschweifte Klammern werden für Methoden und Kontrollstrukturen verwendet

**Weiterführende Links:**
- [Scala Documentation - Control Structures](https://docs.scala-lang.org/tour/tour-of-scala.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
func example() {
    let x = 10
    if x > 5 {
        print("x ist größer als 5")
    }
}
```

**Besonderheiten:**
- Geschweifte Klammern werden für Funktionen und Kontrollstrukturen verwendet

**Weiterführende Links:**
- [Swift Documentation - Control Flow](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/controlflow/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
function example(): void {
    let x: number = 10;
    if (x > 5) {
        console.log("x ist größer als 5");
    }
}
```

**Besonderheiten:**
- Geschweifte Klammern werden für Funktionen, Kontrollstrukturen und Objektliterale verwendet

**Weiterführende Links:**
- [TypeScript Handbook - Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
fn example() void {
    const x: i32 = 10;
    if (x > 5) {
        std.debug.print("x ist größer als 5\n", .{});
    }
}
```

**Besonderheiten:**
- Geschweifte Klammern werden für Funktionen und Kontrollstrukturen verwendet

**Weiterführende Links:**
- [Zig Documentation - Functions](https://ziglang.org/documentation/master/#Functions)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// Curly-Brace Syntax
pub fn example() -> Int {
  let x = 10
  let y = 20
  x + y
}
```

**Besonderheiten:**
- Verwendet `{ }` für Funktionskörper und Blöcke
- Kombination mit `pub fn`, `case`, `fn` etc.
- Kein Semikolon am Zeilenende nötig

**Weiterführende Links:**
- [Gleam Documentation](https://gleam.run/documentation/)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Curly-Brace Syntax für Blöcke
if ($x > 10) {
    print "Groß\n";
} else {
    print "Klein\n";
}

for my $i (0..9) {
    print "$i\n";
}

sub greet {
    my ($name) = @_;
    print "Hallo $name\n";
}
```

**Besonderheiten:**
- Geschweifte Klammern `{}` sind PFLICHT für alle Kontrollstrukturen
- Auch bei Einzeilern sind `{}` erforderlich (anders als in C)
- `{}` werden auch für Hash-Referenzen und anonyme Blöcke verwendet

**Weiterführende Links:**
- [Perl Documentation - Syntax](https://perldoc.perl.org/perlsyn)

</TabItem>

<TabItem value="v" label="V">

```v
// Curly-Brace Syntax
fn main() {
    if true {
        println('Hello')
    }

    for i := 0; i < 5; i++ {
        println(i)
    }
}
```

**Besonderheiten:**
- Geschweifte Klammern für Blöcke
- Keine Klammern um Bedingungen (anders als C)
- Einrückung ist Konvention, nicht syntaktisch relevant

**Weiterführende Links:**
- [V Documentation](https://github.com/vlang/v/blob/master/doc/docs.md)

</TabItem>
</Tabs>


## 2.2.2. begin...end Syntax (Pascal-Style: `begin ... end`)

Verwendung von `begin` und `end` zur Abgrenzung von Code-Blöcken.

### Sprachen {#sprachen}

<Tabs availableTabs={['ada', 'eiffel', 'julia', 'object-pascal', 'ruby']}>
<TabItem value="ada" label="Ada">

```ada
procedure Example is
begin
    declare
        X : Integer := 10;
    begin
        if X > 5 then
            Put_Line("X ist größer als 5");
        end if;
    end;
end Example;
```

**Besonderheiten:**
- Ada verwendet `begin` und `end` für Prozeduren, Funktionen und zusammengesetzte Statements
- Verschiedene `end`-Varianten wie `end if`, `end loop`, etc.

**Weiterführende Links:**
- [Ada Reference Manual - Statements](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-5-1.html)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
example is
    local
        x: INTEGER
    do
        x := 10
        if x > 5 then
            print("x ist größer als 5%N")
        end
    end
```

**Besonderheiten:**
- Eiffel verwendet `do` und `end` für Routinen
- `if`-Blöcke enden mit `end`

**Weiterführende Links:**
- [Eiffel Language Documentation](https://www.eiffel.org/doc/eiffel/Language)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
procedure Example;
var
  x: Integer;
begin
  x := 10;
  if x > 5 then
  begin
    WriteLn('x ist größer als 5');
  end;
end;
```

**Besonderheiten:**
- Object Pascal verwendet `begin` und `end` für Prozeduren, Funktionen und zusammengesetzte Statements
- `if`-Blöcke können optional `begin`/`end` verwenden

**Weiterführende Links:**
- [Delphi Documentation - Statements](https://docwiki.embarcadero.com/RADStudio/Alexandria/en/Statements)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
def example
  x = 10
  if x > 5
    puts "x ist größer als 5"
  end
end
```

**Besonderheiten:**
- Ruby verwendet `end` für Methoden, Kontrollstrukturen und Klassen
- Kein explizites `begin` für Methoden, nur `end`

**Weiterführende Links:**
- [Ruby Documentation - Syntax](https://docs.ruby-lang.org/en/master/syntax/methods_rdoc.html)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Funktionen
function greet(name)
    println("Hallo, $name!")
end

# if-Blöcke
if x > 0
    println("positiv")
elseif x < 0
    println("negativ")
else
    println("null")
end

# Schleifen
for i in 1:5
    println(i)
end

# begin...end Block
result = begin
    a = 1
    b = 2
    a + b
end
```

**Besonderheiten:**
- Alle Blöcke enden mit `end` (function, if, for, while, try, begin, module, struct, etc.)
- `begin...end` für explizite Blöcke
- Keine geschweiften Klammern oder Einrückung als Delimiter

**Weiterführende Links:**
- [Julia Documentation - Control Flow](https://docs.julialang.org/en/v1/manual/control-flow/)

</TabItem>
</Tabs>


## 2.2.3. Indentation-based Syntax (Python, Haskell, etc.)

Verwendung von Einrückung (Indentation) zur Abgrenzung von Code-Blöcken statt expliziter Delimiter.

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
- Haskell verwendet Einrückung für Block-Abgrenzung in `do`-Blöcken
- Einrückung ist semantisch relevant

**Weiterführende Links:**
- [Haskell Report - Layout](https://www.haskell.org/onlinereport/haskell2010/haskellch2.html#x7-170002.7)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
fun example()
  val x = 10
  if x > 5 then
    println("x ist größer als 5")

fun compute()
  val a = 10
  val b = 20
  a + b
```

**Besonderheiten:**
- Koka verwendet Layout-Regeln ähnlich wie Haskell
- Einrückung bestimmt die Block-Struktur, geschweifte Klammern sind optional
- Semikolons können Ausdrücke auf derselben Zeile trennen

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

-- where-Klausel mit Indentation
def compute (n : Nat) : Nat :=
  helper n
  where
    helper (x : Nat) : Nat := x * x + 1
```

**Besonderheiten:**
- Lean 4 verwendet Einrückung für Block-Abgrenzung in `do`-Blöcken, `where`-Klauseln und `let`-Ausdrücken
- Einrückung ist semantisch relevant (off-side rule wie Haskell)
- Geschweifte Klammern werden nicht für Block-Delimiter verwendet

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
- Nim verwendet Einrückung für Block-Abgrenzung
- Einrückung ist semantisch relevant

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
- Python verwendet Einrückung für Block-Abgrenzung
- Einrückung ist semantisch relevant und Teil der Syntax
- Typischerweise 4 Leerzeichen oder 1 Tab

**Weiterführende Links:**
- [Python Documentation - Indentation](https://docs.python.org/3/reference/lexical_analysis.html#indentation)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Indentation definiert Blöcke
example : Int -> String
example n =
    let result = n * 2
        label = "Ergebnis"
    in label ++ ": " ++ show result

-- where-Klausel mit Indentation
compute : Int -> Int
compute n = helper n
  where
    helper : Int -> Int
    helper x = x * x + 1
```

**Besonderheiten:**
- Indentation definiert Code-Blöcke (wie Haskell)
- `let`, `where`, `do` und `case` verwenden Indentation
- Alternativ können geschweifte Klammern und Semikolons verwendet werden

**Weiterführende Links:**
- [Idris 2 Documentation](https://idris2.readthedocs.io/en/latest/tutorial/starting.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Indentation-based Syntax
result =
    when color is
        Red -> "Rot"
        Green -> "Grün"
        Blue -> "Blau"

add = \a, b ->
    sum = a + b
    sum
```

**Besonderheiten:**
- Indentation bestimmt die Blockstruktur
- Keine geschweiften Klammern oder begin/end
- Ähnlich wie Haskell/Elm

**Weiterführende Links:**
- [Roc Documentation](https://www.roc-lang.org/tutorial)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Indentation-based Syntax (seit Scala 3)
def calculate(x: Int, y: Int): Int =
    val sum = x + y
    val product = x * y
    sum + product // Letzter Ausdruck ist der Rückgabewert

// Klassen mit Einrückung
class Person(val name: String, val age: Int):
    def greet(): String =
        s"Hallo, ich bin $name"

    def isAdult: Boolean =
        age >= 18
```

**Besonderheiten:**
- Optional seit Scala 3: Geschweifte Klammern und Einrückung können gemischt werden
- `:` am Zeilenende leitet einen eingerückten Block ein
- Unterstützt für Klassen, Traits, Methoden, If/Else, Match/Case
- Compiler-Flag `-no-indent` deaktiviert die Einrückungs-Syntax

**Weiterführende Links:**
- [Scala 3 Documentation - Indentation](https://docs.scala-lang.org/scala3/reference/other-new-features/indentation.html)

</TabItem>
</Tabs>

