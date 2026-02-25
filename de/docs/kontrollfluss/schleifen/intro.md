---
slug: /kontrollfluss/schleifen
title: 6.2. Schleifen
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 6.2. Schleifen

Konstrukte zur wiederholten Ausführung von Code-Blöcken über Sammlungen oder bis bestimmte Bedingungen erfüllt sind.

## 6.2.1. While-Schleifen

Schleifen, die Code wiederholt ausführen, solange eine Bedingung wahr ist. Die Bedingung wird vor jedem Durchlauf geprüft, sodass der Schleifenkörper möglicherweise nie ausgeführt wird.

### Sprachen {#sprachen}

<Tabs availableTabs={['ada', 'c', 'carbon', 'common-lisp', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'eiffel', 'fortran', 'go', 'groovy', 'haxe', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'lua', 'matlab', 'mojo', 'nim', 'objective-c', 'object-pascal', 'ocaml', 'octave', 'odin', 'perl', 'php', 'prolog', 'python', 'r', 'ruby', 'rust', 'scala', 'swift', 'typescript', 'v', 'vbnet', 'wolfram-language', 'zig']} yellowTabs={['prolog']}>
<TabItem value="ada" label="Ada">

```ada
-- While Loop
i := 0;
while i < 10 loop
    Put_Line(Integer'Image(i));
    i := i + 1;
end loop;
```

**Besonderheiten:**
- Muss mit `end loop` abgeschlossen werden
- Bedingung wird vor jedem Durchlauf geprüft

**Weiterführende Links:**
- [Ada Reference Manual - While Loops](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-5-5.html)

</TabItem>
<TabItem value="c" label="C">

```c
// While Loop
int i = 0;
while (i < 10) {
    printf("%d\n", i);
    i++;
}
```

**Besonderheiten:**
- Klammern um die Bedingung sind erforderlich
- Geschweifte Klammern können bei einzelnen Statements weggelassen werden, werden aber empfohlen

**Weiterführende Links:**
- [C Standard - While loop](https://en.cppreference.com/w/c/language/while)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// While Loop
var i: i32 = 0;
while (i < 10) {
    Print(i);
    i++;
}
```

**Besonderheiten:**
- Experimentelle Sprache, Syntax kann sich noch ändern
- C++-ähnliche Syntax

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// While Loop
int i = 0;
while (i < 10) {
    std::cout << i << std::endl;
    i++;
}
```

**Besonderheiten:**
- Klammern um die Bedingung sind erforderlich
- Geschweifte Klammern können bei einzelnen Statements weggelassen werden, werden aber empfohlen

**Weiterführende Links:**
- [cppreference.com - While loop](https://en.cppreference.com/w/cpp/language/while)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# While Loop
i = 0
while i < 10
  puts i
  i += 1
end
```

**Besonderheiten:**
- Muss mit `end` abgeschlossen werden
- Klammern um die Bedingung sind optional

**Weiterführende Links:**
- [Crystal Documentation - While](https://crystal-lang.org/reference/1.11/syntax_and_semantics/while.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// While Loop
int i = 0;
while (i < 10) {
    Console.WriteLine(i);
    i++;
}
```

**Besonderheiten:**
- Klammern um die Bedingung sind erforderlich
- Geschweifte Klammern können bei einzelnen Statements weggelassen werden, werden aber empfohlen

**Weiterführende Links:**
- [Microsoft C# Documentation - while statement](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/statements/iteration-statements#the-while-statement)

</TabItem>
<TabItem value="d" label="D">

```d
// While Loop
int i = 0;
while (i < 10) {
    writeln(i);
    i++;
}
```

**Besonderheiten:**
- Klammern um die Bedingung sind erforderlich
- Geschweifte Klammern können bei einzelnen Statements weggelassen werden

**Weiterführende Links:**
- [D Language Specification - While Statement](https://dlang.org/spec/statement.html#while_statement)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// While Loop
int i = 0;
while (i < 10) {
  print(i);
  i++;
}
```

**Besonderheiten:**
- Klammern um die Bedingung sind erforderlich
- Geschweifte Klammern können bei einzelnen Statements weggelassen werden

**Weiterführende Links:**
- [Dart Language Tour - While and do-while](https://dart.dev/guides/language/language-tour#while-and-do-while)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
-- While Loop
from
    i := 0
until
    i >= 10
loop
    io.put_integer(i)
    io.put_new_line
    i := i + 1
end
```

**Besonderheiten:**
- Verwendet `from...until...loop` statt `while`
- Die Bedingung ist eine Exit-Bedingung (wird beendet, wenn wahr)

**Weiterführende Links:**
- [Eiffel Documentation - Control Structures](https://www.eiffel.org/doc/eiffel/Control_Structures)

</TabItem>
<TabItem value="go" label="Go">

```go
// While Loop
i := 0
for i < 10 {
    fmt.Println(i)
    i++
}
```

**Besonderheiten:**
- Go hat kein separates `while`-Keyword
- Verwendet `for` ohne Initialisierung und Inkrement als While-Schleife

**Weiterführende Links:**
- [Go Documentation - For statements](https://go.dev/ref/spec#For_statements)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// While Loop
int i = 0
while (i < 10) {
    println i
    i++
}
```

**Besonderheiten:**
- Klammern um die Bedingung sind optional
- Geschweifte Klammern können bei einzelnen Statements weggelassen werden

**Weiterführende Links:**
- [Groovy Documentation - Looping Structures](https://groovy-lang.org/semantics.html#_looping_structures)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// While Loop
var i = 0;
while (i < 10) {
    trace(i);
    i++;
}
```

**Besonderheiten:**
- Klammern um die Bedingung sind erforderlich
- Geschweifte Klammern können bei einzelnen Statements weggelassen werden

**Weiterführende Links:**
- [Haxe Documentation - While](https://haxe.org/manual/expression-while.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// While Loop
int i = 0;
while (i < 10) {
    System.out.println(i);
    i++;
}
```

**Besonderheiten:**
- Klammern um die Bedingung sind erforderlich
- Geschweifte Klammern können bei einzelnen Statements weggelassen werden, werden aber empfohlen

**Weiterführende Links:**
- [Oracle Java Documentation - The while and do-while Statements](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/while.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// While Loop
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}
```

**Besonderheiten:**
- Klammern um die Bedingung sind erforderlich
- Geschweifte Klammern können bei einzelnen Statements weggelassen werden, werden aber empfohlen

**Weiterführende Links:**
- [MDN Web Docs - while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# While Loop
i = 0
while i < 10
    println(i)
    i += 1
end
```

**Besonderheiten:**
- Muss mit `end` abgeschlossen werden
- Klammern um die Bedingung sind optional

**Weiterführende Links:**
- [Julia Documentation - Control Flow](https://docs.julialang.org/en/v1/manual/control-flow/#while-loops)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// While Loop (als Funktion)
fun count-up(): console ()
  var i := 0
  while { i < 10 }
    println(i.show)
    i := i + 1
```

**Besonderheiten:**
- `while` ist eine Funktion, kein Schlüsselwort
- Bedingung und Körper sind Lambda-Ausdrücke (in `{ }`)
- Mutabler Zustand über `var` und `:=`
- Einrückungsbasierte Syntax

**Weiterführende Links:**
- [Koka Language Guide - Control Flow](https://koka-lang.github.io/koka/doc/book.html#sec-control)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// While Loop
var i = 0
while (i < 10) {
    println(i)
    i++
}
```

**Besonderheiten:**
- Klammern um die Bedingung sind erforderlich
- Geschweifte Klammern können bei einzelnen Statements weggelassen werden

**Weiterführende Links:**
- [Kotlin Documentation - While loop](https://kotlinlang.org/docs/control-flow.html#while-loops)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```haskell
-- While Loop (in do-Notation)
def countUp : IO Unit := do
  let mut i := 0
  while i < 10 do
    IO.println (toString i)
    i := i + 1
```

**Besonderheiten:**
- `while` ist in `do`-Blöcken verfügbar
- Benötigt mutable Variablen (`let mut`)
- Bedingung wird vor jedem Durchlauf geprüft

**Weiterführende Links:**
- [Functional Programming in Lean - Monads](https://lean-lang.org/functional_programming_in_lean/)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- While Loop
local i = 0
while i < 10 do
    print(i)
    i = i + 1
end
```

**Besonderheiten:**
- Verwendet `do` nach der Bedingung
- Muss mit `end` abgeschlossen werden
- Klammern um die Bedingung sind optional

**Weiterführende Links:**
- [Lua Documentation - While](https://www.lua.org/manual/5.4/manual.html#3.3.5)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% While Loop
i = 0;
while i < 10
    disp(i);
    i = i + 1;
end
```

**Besonderheiten:**
- Muss mit `end` abgeschlossen werden
- Klammern um die Bedingung sind optional

**Weiterführende Links:**
- [MATLAB Documentation - while](https://www.mathworks.com/help/matlab/ref/while.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# While Loop
var i: Int = 0
while i < 10:
    print(i)
    i += 1
```

**Besonderheiten:**
- Python-ähnliche Syntax
- Muss mit Einrückung strukturiert werden
- Klammern um die Bedingung sind optional

**Weiterführende Links:**
- [Mojo Documentation - Control Flow](https://docs.modular.com/mojo/manual/control-flow/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# While Loop
var i = 0
while i < 10:
    echo i
    inc i
```

**Besonderheiten:**
- Muss mit Einrückung strukturiert werden
- Klammern um die Bedingung sind optional

**Weiterführende Links:**
- [Nim Documentation - While Statement](https://nim-lang.org/docs/manual.html#statements-and-expressions-while-statement)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// While Loop
int i = 0;
while (i < 10) {
    NSLog(@"%d", i);
    i++;
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
// While Loop
var i: Integer;
begin
    i := 0;
    while i < 10 do
    begin
        WriteLn(i);
        Inc(i);
    end;
end;
```

**Besonderheiten:**
- Verwendet `do` nach der Bedingung
- Muss mit `end` abgeschlossen werden
- Klammern um die Bedingung sind optional

**Weiterführende Links:**
- [Free Pascal Documentation - While Statements](https://www.freepascal.org/docs-html/ref/refse22.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* While Loop *)
let i = ref 0 in
while !i < 10 do
    print_int !i;
    print_newline ();
    i := !i + 1
done
```

**Besonderheiten:**
- Muss mit `done` abgeschlossen werden
- Verwendet Referenzen (`ref`) für mutable Variablen
- Dereferenzierung mit `!`

**Weiterführende Links:**
- [OCaml Documentation - While Loops](https://v2.ocaml.org/manual/expr.html#s:iterative-expressions)

</TabItem>
<TabItem value="octave" label="Octave">

```matlab
% While Loop
i = 0;
while i < 10
    disp(i);
    i = i + 1;
end
```

**Besonderheiten:**
- Muss mit `end` abgeschlossen werden
- Klammern um die Bedingung sind optional

**Weiterführende Links:**
- [GNU Octave Documentation - The while Statement](https://octave.org/doc/v8.1.0/The-while-Statement.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// While Loop
i := 0
for i < 10 {
    fmt.println(i)
    i += 1
}
```

**Besonderheiten:**
- Odin hat kein separates `while`-Keyword
- Verwendet `for` ohne Initialisierung und Inkrement als While-Schleife

**Weiterführende Links:**
- [Odin Documentation - For Statements](https://odin-lang.org/docs/overview/#for-statements)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# While Loop
my $i = 0;
while ($i < 10) {
    print "$i\n";
    $i++;
}
```

**Besonderheiten:**
- Klammern um die Bedingung sind erforderlich
- Unterstützt auch `until` als negiertes `while`

**Weiterführende Links:**
- [Perl Documentation - While Loops](https://perldoc.perl.org/perlsyn#While-and-Until)

</TabItem>
<TabItem value="php" label="PHP">

```php
// While Loop
$i = 0;
while ($i < 10) {
    echo $i . "\n";
    $i++;
}
```

**Besonderheiten:**
- Klammern um die Bedingung sind erforderlich
- Variablen müssen mit `$` gekennzeichnet werden
- Geschweifte Klammern können bei einzelnen Statements weggelassen werden

**Weiterführende Links:**
- [PHP Documentation - while](https://www.php.net/manual/en/control-structures.while.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% While-Schleife über Rekursion
while_loop(I, Max) :-
    I < Max,
    write(I), nl,
    I1 is I + 1,
    while_loop(I1, Max).
while_loop(Max, Max).

% Aufruf
:- while_loop(0, 10).
```

**Besonderheiten:**
- Prolog besitzt kein natives `while`-Konstrukt
- While-Schleifen werden über rekursive Prädikate realisiert
- Tail-Rekursion wird von den meisten Prolog-Implementierungen optimiert (Last-Call-Optimization)
- Die Abbruchbedingung wird über Pattern Matching oder Guards gesteuert

**Weiterführende Links:**
- [SWI-Prolog – Recursion](https://www.swi-prolog.org/pldoc/man?section=recursion)

</TabItem>
<TabItem value="python" label="Python">

```python
# While Loop
i = 0
while i < 10:
    print(i)
    i += 1
```

**Besonderheiten:**
- Muss mit Einrückung strukturiert werden
- Klammern um die Bedingung sind optional

**Weiterführende Links:**
- [Python Documentation - while Statements](https://docs.python.org/3/reference/compound_stmts.html#while)

</TabItem>
<TabItem value="r" label="R">

```r
# While Loop
i <- 0
while (i < 10) {
    print(i)
    i <- i + 1
}
```

**Besonderheiten:**
- Klammern um die Bedingung sind erforderlich
- Zuweisung erfolgt mit `<-` oder `=`

**Weiterführende Links:**
- [R Documentation - Control Structures](https://www.rdocumentation.org/packages/base/versions/3.6.2/topics/Control)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# While Loop
i = 0
while i < 10
    puts i
    i += 1
end
```

**Besonderheiten:**
- Muss mit `end` abgeschlossen werden
- Klammern um die Bedingung sind optional

**Weiterführende Links:**
- [Ruby Documentation - Control Expressions](https://docs.ruby-lang.org/en/3.2/syntax/control_expressions_rdoc.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// While Loop
let mut i = 0;
while i < 10 {
    println!("{}", i);
    i += 1;
}
```

**Besonderheiten:**
- Klammern um die Bedingung sind erforderlich
- Geschweifte Klammern sind erforderlich
- Variablen müssen als `mut` markiert sein, um veränderbar zu sein

**Weiterführende Links:**
- [Rust Documentation - Loops](https://doc.rust-lang.org/book/ch03-05-control-flow.html#repetition-with-loops)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// While Loop
var i = 0
while (i < 10) {
    println(i)
    i += 1
}
```

**Besonderheiten:**
- Klammern um die Bedingung sind erforderlich
- Geschweifte Klammern können bei einzelnen Statements weggelassen werden

**Weiterführende Links:**
- [Scala Documentation - While Loops](https://docs.scala-lang.org/tour/while-loops.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// While Loop
var i = 0
while i < 10 {
    print(i)
    i += 1
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
// While Loop
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}
```

**Besonderheiten:**
- Klammern um die Bedingung sind erforderlich
- Geschweifte Klammern können bei einzelnen Statements weggelassen werden, werden aber empfohlen

**Weiterführende Links:**
- [TypeScript Handbook - Iteration](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' While Loop
Dim i As Integer = 0
While i < 10
    Console.WriteLine(i)
    i += 1
End While
```

**Besonderheiten:**
- Muss mit `End While` abgeschlossen werden
- Verwendet `While` statt `while`

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - While...End While Statement](https://learn.microsoft.com/en-us/dotnet/visual-basic/language-reference/statements/while-end-while-statement)

</TabItem>
<TabItem value="v" label="V">

```v
// While Loop
mut i := 0
for i < 10 {
    println(i)
    i++
}
```

**Besonderheiten:**
- V hat kein separates `while`-Keyword
- Verwendet `for` ohne Initialisierung und Inkrement als While-Schleife

**Weiterführende Links:**
- [V Documentation - Control Flow](https://github.com/vlang/v/blob/master/doc/docs.md#control-flow)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// While Loop
var i: i32 = 0;
while (i < 10) : (i += 1) {
    std.debug.print("{}\n", .{i});
}
```

**Besonderheiten:**
- Klammern um die Bedingung sind erforderlich
- Unterstützt optionales Inkrement nach dem Doppelpunkt: `while (bedingung) : (inkrement)`
- Geschweifte Klammern sind erforderlich

**Weiterführende Links:**
- [Zig Documentation - While](https://ziglang.org/documentation/0.11.0/#While)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; While-Schleife mit loop
(let ((i 0))
  (loop while (< i 5)
        do (format t "~a~%" i)
           (incf i)))

;; While-Schleife mit do
(do ((i 0 (1+ i)))
    ((>= i 5))
  (format t "~a~%" i))
```

**Besonderheiten:**
- `loop while` für klassische While-Schleifen
- `do` bietet eine kompakte Alternative mit Initialisierung und Inkrement
- `loop` ist ein mächtiges Iteration-Makro mit vielen Optionen

**Weiterführende Links:**
- [Common Lisp HyperSpec - loop](http://www.lispworks.com/documentation/HyperSpec/Body/m_loop.htm)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! DO WHILE Schleife
integer :: i = 0

do while (i < 10)
    print *, i
    i = i + 1
end do
```

**Besonderheiten:**
- `DO WHILE (bedingung)` für While-Schleifen
- Prüft Bedingung vor jeder Iteration
- Muss mit `END DO` abgeschlossen werden

**Weiterführende Links:**
- [Fortran Standard - DO Statement](https://gcc.gnu.org/onlinedocs/gfortran/DO-statement.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
var
  i: Integer = 0;
begin
  while i < 5 do
  begin
    WriteLn(i);
    i := i + 1;
  end;
end;
```

**Besonderheiten:**
- `while`/`do` Syntax
- Bedingung wird vor jeder Iteration geprüft
- `begin`/`end` für zusammengesetzte Statements

**Weiterführende Links:**
- [Delphi Documentation - While Statements](https://docwiki.embarcadero.com/RADStudio/en/While_Statements)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* While-Schleife *)
i = 0;
While[i < 5,
    Print[i];
    i++
]
```

**Besonderheiten:**
- `While[test, body]` führt `body` aus, solange `test` True ist
- Funktionale Alternativen wie `NestWhile` werden bevorzugt

**Weiterführende Links:**
- [Wolfram Language Documentation - While](https://reference.wolfram.com/language/ref/While.html)

</TabItem>
</Tabs>


## 6.2.2. Do-While / Repeat-Until Schleifen

Schleifen, die den Schleifenkörper mindestens einmal ausführen, bevor die Bedingung geprüft wird. Die Bedingung wird nach jedem Durchlauf geprüft, sodass der Schleifenkörper immer mindestens einmal ausgeführt wird.

### Sprachen {#sprachen}

<Tabs availableTabs={['c', 'cpp', 'csharp', 'd', 'dart', 'groovy', 'haxe', 'java', 'javascript', 'kotlin', 'lua', 'objective-c', 'object-pascal', 'perl', 'php', 'prolog', 'swift', 'typescript', 'vbnet']} orangeTabs={['ada', 'crystal', 'go', 'julia', 'lean4', 'matlab', 'nim', 'ocaml', 'octave', 'odin', 'python', 'r', 'ruby', 'rust', 'scala', 'v', 'zig']}>
<TabItem value="ada" label="Ada">

```ada
-- Ada hat kein Do-While, verwendet Loop mit Exit
i := 0;
loop
    Put_Line(Integer'Image(i));
    i := i + 1;
    exit when i >= 10;
end loop;
```

**Besonderheiten:**
- Ada hat kein direktes Do-While
- Wird mit `loop...exit when` emuliert

**Weiterführende Links:**
- [Ada Reference Manual - Loop Statements](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-5-5.html)

</TabItem>
<TabItem value="c" label="C">

```c
// Do-While Loop
int i = 0;
do {
    printf("%d\n", i);
    i++;
} while (i < 10);
```

**Besonderheiten:**
- Syntax: `do { ... } while (bedingung);`
- Semikolon nach `while` ist erforderlich
- Schleifenkörper wird mindestens einmal ausgeführt

**Weiterführende Links:**
- [C Standard - Do-while loop](https://en.cppreference.com/w/c/language/do)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Do-While Loop
int i = 0;
do {
    std::cout << i << std::endl;
    i++;
} while (i < 10);
```

**Besonderheiten:**
- Syntax: `do { ... } while (bedingung);`
- Semikolon nach `while` ist erforderlich
- Schleifenkörper wird mindestens einmal ausgeführt

**Weiterführende Links:**
- [cppreference.com - Do-while loop](https://en.cppreference.com/w/cpp/language/do)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Crystal hat kein Do-While, verwendet Loop mit Break
i = 0
loop do
  puts i
  i += 1
  break if i >= 10
end
```

**Besonderheiten:**
- Crystal hat kein direktes Do-While
- Wird mit `loop do...break if` emuliert

**Weiterführende Links:**
- [Crystal Documentation - Loops](https://crystal-lang.org/reference/1.11/syntax_and_semantics/while.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Do-While Loop
int i = 0;
do {
    Console.WriteLine(i);
    i++;
} while (i < 10);
```

**Besonderheiten:**
- Syntax: `do { ... } while (bedingung);`
- Semikolon nach `while` ist erforderlich
- Schleifenkörper wird mindestens einmal ausgeführt

**Weiterführende Links:**
- [Microsoft C# Documentation - do statement](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/statements/iteration-statements#the-do-statement)

</TabItem>
<TabItem value="d" label="D">

```d
// Do-While Loop
int i = 0;
do {
    writeln(i);
    i++;
} while (i < 10);
```

**Besonderheiten:**
- Syntax: `do { ... } while (bedingung);`
- Semikolon nach `while` ist erforderlich
- Schleifenkörper wird mindestens einmal ausgeführt

**Weiterführende Links:**
- [D Language Specification - Do-While Statement](https://dlang.org/spec/statement.html#do_while_statement)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Do-While Loop
int i = 0;
do {
  print(i);
  i++;
} while (i < 10);
```

**Besonderheiten:**
- Syntax: `do { ... } while (bedingung);`
- Semikolon nach `while` ist erforderlich
- Schleifenkörper wird mindestens einmal ausgeführt

**Weiterführende Links:**
- [Dart Language Tour - While and do-while](https://dart.dev/guides/language/language-tour#while-and-do-while)

</TabItem>
<TabItem value="go" label="Go">

```go
// Go hat kein Do-While, verwendet for mit break
i := 0
for {
    fmt.Println(i)
    i++
    if i >= 10 {
        break
    }
}
```

**Besonderheiten:**
- Go hat kein direktes Do-While
- Wird mit `for { ... break }` emuliert

**Weiterführende Links:**
- [Go Documentation - For statements](https://go.dev/ref/spec#For_statements)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Do-While Loop (seit Groovy 3.0)
int i = 0
do {
    println i
    i++
} while (i < 10)
```

**Besonderheiten:**
- `do...while` wird seit Groovy 3.0 (Parrot-Parser) nativ unterstützt
- Schleifenkörper wird mindestens einmal ausgeführt

**Weiterführende Links:**
- [Groovy Documentation - Looping Structures](https://groovy-lang.org/semantics.html#_looping_structures)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Do-While Loop
var i = 0;
do {
    trace(i);
    i++;
} while (i < 10);
```

**Besonderheiten:**
- Syntax: `do { ... } while (bedingung);`
- Semikolon nach `while` ist erforderlich
- Schleifenkörper wird mindestens einmal ausgeführt

**Weiterführende Links:**
- [Haxe Documentation - Do-While](https://haxe.org/manual/expression-while.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Do-While Loop
int i = 0;
do {
    System.out.println(i);
    i++;
} while (i < 10);
```

**Besonderheiten:**
- Syntax: `do { ... } while (bedingung);`
- Semikolon nach `while` ist erforderlich
- Schleifenkörper wird mindestens einmal ausgeführt

**Weiterführende Links:**
- [Oracle Java Documentation - The while and do-while Statements](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/while.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Do-While Loop
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 10);
```

**Besonderheiten:**
- Syntax: `do { ... } while (bedingung);`
- Semikolon nach `while` ist erforderlich
- Schleifenkörper wird mindestens einmal ausgeführt

**Weiterführende Links:**
- [MDN Web Docs - do...while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Julia hat kein Do-While, verwendet while(true) und break
i = 0
while true
    println(i)
    i += 1
    i >= 10 && break
end
```

**Besonderheiten:**
- Julia hat kein direktes Do-While
- Wird mit `while true` und `break` emuliert

**Weiterführende Links:**
- [Julia Documentation - Control Flow](https://docs.julialang.org/en/v1/manual/control-flow/#while-loops)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Do-While Loop
var i = 0
do {
    println(i)
    i++
} while (i < 10)
```

**Besonderheiten:**
- Kotlin unterstützt `do-while` nativ (seit Version 1.0)
- Schleifenkörper wird mindestens einmal ausgeführt
- Variablen, die im `do`-Block deklariert werden, sind in der `while`-Bedingung sichtbar

**Weiterführende Links:**
- [Kotlin Documentation - While loops](https://kotlinlang.org/docs/control-flow.html#while-loops)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```haskell
-- Do-While emuliert mit repeat + break
def doWhileExample : IO Unit := do
  let mut i := 0
  repeat do
    IO.println (toString i)
    i := i + 1
    if i >= 10 then break
```

**Besonderheiten:**
- Lean 4 hat kein natives Do-While
- Wird mit `repeat` (Endlosschleife) und `break` emuliert
- `repeat` führt den Körper mindestens einmal aus

**Weiterführende Links:**
- [Functional Programming in Lean - Monads](https://lean-lang.org/functional_programming_in_lean/)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Do-While / Repeat-Until Schleife
local i = 0
repeat
    print(i)
    i = i + 1
until i >= 10
```

**Besonderheiten:**
- Lua verwendet `repeat...until` (Repeat-Until-Pattern)
- Die Bedingung ist eine Exit-Bedingung (wird beendet, wenn wahr)
- Schleifenkörper wird mindestens einmal ausgeführt

**Weiterführende Links:**
- [Lua Documentation - Repeat](https://www.lua.org/manual/5.4/manual.html#3.3.5)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% MATLAB hat kein Do-While, verwendet while(true) und break
i = 0;
while true
    disp(i);
    i = i + 1;
    if i >= 10
        break
    end
end
```

**Besonderheiten:**
- MATLAB hat kein direktes Do-While
- Wird mit `while true` und `break` emuliert

**Weiterführende Links:**
- [MATLAB Documentation - while](https://www.mathworks.com/help/matlab/ref/while.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Nim hat kein Do-While, verwendet while(true) und break
var i = 0
while true:
    echo i
    inc i
    if i >= 10:
        break
```

**Besonderheiten:**
- Nim hat kein direktes Do-While
- Wird mit `while true` und `break` emuliert

**Weiterführende Links:**
- [Nim Documentation - While Statement](https://nim-lang.org/docs/manual.html#statements-and-expressions-while-statement)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Do-While Loop
int i = 0;
do {
    NSLog(@"%d", i);
    i++;
} while (i < 10);
```

**Besonderheiten:**
- Syntax: `do { ... } while (bedingung);`
- Semikolon nach `while` ist erforderlich
- Schleifenkörper wird mindestens einmal ausgeführt

**Weiterführende Links:**
- [Apple Documentation - Control Flow](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/FoundationTypesandCollections/FoundationTypesandCollections.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Do-While / Repeat-Until Schleife
var i: Integer;
begin
    i := 0;
    repeat
        WriteLn(i);
        Inc(i);
    until i >= 10;
end;
```

**Besonderheiten:**
- Object Pascal verwendet `repeat...until` (Repeat-Until-Pattern)
- Die Bedingung ist eine Exit-Bedingung (wird beendet, wenn wahr)
- Schleifenkörper wird mindestens einmal ausgeführt

**Weiterführende Links:**
- [Free Pascal Documentation - Repeat Statements](https://www.freepascal.org/docs-html/ref/refse23.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* OCaml hat kein Do-While, verwendet while(true) und raise *)
let i = ref 0 in
try
    while true do
        print_int !i;
        print_newline ();
        i := !i + 1;
        if !i >= 10 then raise Exit
    done
with Exit -> ()
```

**Besonderheiten:**
- OCaml hat kein direktes Do-While
- Wird mit `while true` und Exception-Handling emuliert

**Weiterführende Links:**
- [OCaml Documentation - While Loops](https://v2.ocaml.org/manual/expr.html#s:iterative-expressions)

</TabItem>
<TabItem value="octave" label="Octave">

```matlab
% Octave hat kein Do-While, verwendet while(true) und break
i = 0;
while true
    disp(i);
    i = i + 1;
    if i >= 10
        break
    endif
end
```

**Besonderheiten:**
- Octave hat kein direktes Do-While
- Wird mit `while true` und `break` emuliert

**Weiterführende Links:**
- [GNU Octave Documentation - The while Statement](https://octave.org/doc/v8.1.0/The-while-Statement.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Odin hat kein Do-While, verwendet for mit break
i := 0
for {
    fmt.println(i)
    i += 1
    if i >= 10 do break
}
```

**Besonderheiten:**
- Odin hat kein direktes Do-While
- Wird mit `for { ... break }` emuliert

**Weiterführende Links:**
- [Odin Documentation - For Statements](https://odin-lang.org/docs/overview/#for-statements)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Do-While Loop
my $i = 0;
do {
    print "$i\n";
    $i++;
} while ($i < 10);
```

**Besonderheiten:**
- `do { ... } while (bedingung)` ist ein echter Post-Check-Loop
- Der Block wird mindestens einmal ausgeführt
- Unterstützt auch `do { ... } until (bedingung)` als negierte Variante

**Weiterführende Links:**
- [Perl Documentation - Loop Control](https://perldoc.perl.org/perlsyn#Loop-Control)

</TabItem>
<TabItem value="php" label="PHP">

```php
// Do-While Loop
$i = 0;
do {
    echo $i . "\n";
    $i++;
} while ($i < 10);
```

**Besonderheiten:**
- Syntax: `do { ... } while (bedingung);`
- Semikolon nach `while` ist erforderlich
- Schleifenkörper wird mindestens einmal ausgeführt

**Weiterführende Links:**
- [PHP Documentation - do-while](https://www.php.net/manual/en/control-structures.do.while.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Repeat-Until mit repeat/0
count_to_10 :-
    nb_setval(counter, 0),
    repeat,
        nb_getval(counter, I),
        write(I), nl,
        I1 is I + 1,
        nb_setval(counter, I1),
    I1 >= 10,
    !.
```

**Besonderheiten:**
- Prolog besitzt das eingebaute Prädikat `repeat/0`, das unendlich viele Choice-Points erzeugt
- In Kombination mit Bedingungen und Cut (`!`) entsteht ein Repeat-Until-Muster
- `repeat` garantiert, dass der Schleifenkörper mindestens einmal ausgeführt wird
- Der Cut (`!`) beendet das Backtracking, sobald die Abbruchbedingung erfüllt ist

**Weiterführende Links:**
- [SWI-Prolog – repeat/0](https://www.swi-prolog.org/pldoc/doc_for?object=repeat/0)

</TabItem>
<TabItem value="python" label="Python">

```python
# Python hat kein Do-While, verwendet while(true) und break
i = 0
while True:
    print(i)
    i += 1
    if i >= 10:
        break
```

**Besonderheiten:**
- Python hat kein direktes Do-While
- Wird mit `while True` und `break` emuliert

**Weiterführende Links:**
- [Python Documentation - while Statements](https://docs.python.org/3/reference/compound_stmts.html#while)

</TabItem>
<TabItem value="r" label="R">

```r
# R hat kein Do-While, verwendet repeat...break (Repeat-Until)
i <- 0
repeat {
    print(i)
    i <- i + 1
    if (i >= 10) break
}
```

**Besonderheiten:**
- R verwendet `repeat...break` (Repeat-Until-Pattern)
- Die Bedingung wird mit `if` und `break` geprüft
- Schleifenkörper wird mindestens einmal ausgeführt

**Weiterführende Links:**
- [R Documentation - Control Structures](https://www.rdocumentation.org/packages/base/versions/3.6.2/topics/Control)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Ruby hat kein Do-While, verwendet begin...end while (nicht empfohlen)
# Oder loop do...break
i = 0
loop do
    puts i
    i += 1
    break if i >= 10
end
```

**Besonderheiten:**
- Ruby hat kein direktes Do-While
- Wird mit `loop do...break` emuliert
- `begin...end while` existiert, wird aber nicht empfohlen

**Weiterführende Links:**
- [Ruby Documentation - Control Expressions](https://docs.ruby-lang.org/en/3.2/syntax/control_expressions_rdoc.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Rust hat kein Do-While, verwendet loop...break
let mut i = 0;
loop {
    println!("{}", i);
    i += 1;
    if i >= 10 {
        break;
    }
}
```

**Besonderheiten:**
- Rust hat kein direktes Do-While
- Wird mit `loop { ... break }` emuliert

**Weiterführende Links:**
- [Rust Documentation - Loops](https://doc.rust-lang.org/book/ch03-05-control-flow.html#repetition-with-loops)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Scala hat kein Do-While, verwendet while(true) und return
var i = 0
while (true) {
    println(i)
    i += 1
    if (i >= 10) return
}
```

**Besonderheiten:**
- Scala hat kein direktes Do-While
- Wird mit `while(true)` und `return` oder `break` emuliert

**Weiterführende Links:**
- [Scala Documentation - While Loops](https://docs.scala-lang.org/tour/while-loops.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Do-While / Repeat-While Schleife
var i = 0
repeat {
    print(i)
    i += 1
} while i < 10
```

**Besonderheiten:**
- Swift verwendet `repeat...while` (Repeat-Until-Pattern, aber Bedingung ist Continue-Bedingung)
- Die Bedingung ist eine Continue-Bedingung (wird fortgesetzt, wenn wahr)
- Schleifenkörper wird mindestens einmal ausgeführt

**Weiterführende Links:**
- [Swift Documentation - Control Flow](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/controlflow/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Do-While Loop
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 10);
```

**Besonderheiten:**
- Syntax: `do { ... } while (bedingung);`
- Semikolon nach `while` ist erforderlich
- Schleifenkörper wird mindestens einmal ausgeführt

**Weiterführende Links:**
- [TypeScript Handbook - Iteration](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Do-Loop While (Do-While)
Dim i As Integer = 0
Do
    Console.WriteLine(i)
    i += 1
Loop While i < 10
```

**Besonderheiten:**
- VB.NET verwendet `Do...Loop While`
- Die Bedingung ist eine Continue-Bedingung (wird fortgesetzt, wenn wahr)
- Schleifenkörper wird mindestens einmal ausgeführt

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Do...Loop Statement](https://learn.microsoft.com/en-us/dotnet/visual-basic/language-reference/statements/do-loop-statement)

</TabItem>
<TabItem value="v" label="V">

```v
// V hat kein Do-While, verwendet for mit break
mut i := 0
for {
    println(i)
    i++
    if i >= 10 {
        break
    }
}
```

**Besonderheiten:**
- V hat kein direktes Do-While
- Wird mit `for { ... break }` emuliert

**Weiterführende Links:**
- [V Documentation - Control Flow](https://github.com/vlang/v/blob/master/doc/docs.md#control-flow)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Zig hat kein Do-While, verwendet while(true) und break
var i: i32 = 0;
while (true) {
    std.debug.print("{}\n", .{i});
    i += 1;
    if (i >= 10) break;
}
```

**Besonderheiten:**
- Zig hat kein direktes Do-While
- Wird mit `while(true)` und `break` emuliert

**Weiterführende Links:**
- [Zig Documentation - While](https://ziglang.org/documentation/0.11.0/#While)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
var
  i: Integer = 0;
begin
  repeat
    WriteLn(i);
    i := i + 1;
  until i >= 5;
end;
```

**Besonderheiten:**
- `repeat`/`until` statt `do`/`while`
- Bedingung wird nach jeder Iteration geprüft
- Schleife läuft mindestens einmal
- Kein `begin`/`end` nötig (repeat/until bilden den Block)
- Bedingung ist invertiert: Schleife endet, wenn Bedingung `True` ist

**Weiterführende Links:**
- [Delphi Documentation - Repeat Statements](https://docwiki.embarcadero.com/RADStudio/en/Repeat_Statements)

</TabItem>
</Tabs>


## 6.2.3. Index-basierte For-Schleifen (C-Style)

For-Schleifen mit expliziter Initialisierung, Bedingung und Inkrement. Ermöglichen präzise Kontrolle über die Schleifenvariable und sind besonders nützlich für Array-Indexierung und numerische Iterationen.

### Sprachen {#sprachen}

<Tabs availableTabs={['c', 'cpp', 'csharp', 'd', 'dart', 'go', 'groovy', 'java', 'javascript', 'lua', 'nim', 'objective-c', 'object-pascal', 'odin', 'perl', 'php', 'typescript', 'v', 'wolfram-language']} orangeTabs={['haxe', 'kotlin', 'rust', 'swift', 'zig']}>
<TabItem value="c" label="C">

```c
// Index-basierte For-Schleife (C-Style)
for (int i = 0; i < 10; i++) {
    printf("%d\n", i);
}
```

**Besonderheiten:**
- Syntax: `for (init; bedingung; inkrement) { ... }`
- Alle drei Teile sind optional
- Variablendeklaration im Init-Teil ist seit C99 möglich

**Weiterführende Links:**
- [C Standard - For loop](https://en.cppreference.com/w/c/language/for)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Index-basierte For-Schleife (C-Style)
for (int i = 0; i < 10; i++) {
    std::cout << i << std::endl;
}
```

**Besonderheiten:**
- Syntax: `for (init; bedingung; inkrement) { ... }`
- Alle drei Teile sind optional
- Variablendeklaration im Init-Teil ist möglich

**Weiterführende Links:**
- [cppreference.com - For loop](https://en.cppreference.com/w/cpp/language/for)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Index-basierte For-Schleife (C-Style)
for (int i = 0; i < 10; i++) {
    Console.WriteLine(i);
}
```

**Besonderheiten:**
- Syntax: `for (init; bedingung; inkrement) { ... }`
- Alle drei Teile sind optional
- Variablendeklaration im Init-Teil ist möglich

**Weiterführende Links:**
- [Microsoft C# Documentation - for statement](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/statements/iteration-statements#the-for-statement)

</TabItem>
<TabItem value="d" label="D">

```d
// Index-basierte For-Schleife (C-Style)
for (int i = 0; i < 10; i++) {
    writeln(i);
}
```

**Besonderheiten:**
- Syntax: `for (init; bedingung; inkrement) { ... }`
- Alle drei Teile sind optional
- Variablendeklaration im Init-Teil ist möglich

**Weiterführende Links:**
- [D Language Specification - For Statement](https://dlang.org/spec/statement.html#for_statement)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Index-basierte For-Schleife (C-Style)
for (int i = 0; i < 10; i++) {
  print(i);
}
```

**Besonderheiten:**
- Syntax: `for (init; bedingung; inkrement) { ... }`
- Alle drei Teile sind optional
- Variablendeklaration im Init-Teil ist möglich

**Weiterführende Links:**
- [Dart Language Tour - For loops](https://dart.dev/guides/language/language-tour#for-loops)

</TabItem>
<TabItem value="go" label="Go">

```go
// Index-basierte For-Schleife (C-Style)
for i := 0; i < 10; i++ {
    fmt.Println(i)
}
```

**Besonderheiten:**
- Go verwendet `for` für alle Schleifentypen
- Syntax: `for init; bedingung; inkrement { ... }`
- Alle drei Teile sind optional

**Weiterführende Links:**
- [Go Documentation - For statements](https://go.dev/ref/spec#For_statements)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Index-basierte For-Schleife (C-Style)
for (int i = 0; i < 10; i++) {
    println i
}
```

**Besonderheiten:**
- Syntax: `for (init; bedingung; inkrement) { ... }`
- Alle drei Teile sind optional
- Variablendeklaration im Init-Teil ist möglich

**Weiterführende Links:**
- [Groovy Documentation - Looping Structures](https://groovy-lang.org/semantics.html#_looping_structures)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Index-basierte For-Schleife (Range-basiert)
for (i in 0...10) {
    trace(i);
}
```

**Besonderheiten:**
- Haxe hat keine C-Style `for(init; cond; step)` Syntax
- Index-basierte Iteration über Range-Operator `...` (exklusiv)
- `0...10` iteriert von 0 bis 9

**Weiterführende Links:**
- [Haxe Documentation - For](https://haxe.org/manual/expression-for.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Index-basierte For-Schleife (C-Style)
for (int i = 0; i < 10; i++) {
    System.out.println(i);
}
```

**Besonderheiten:**
- Syntax: `for (init; bedingung; inkrement) { ... }`
- Alle drei Teile sind optional
- Variablendeklaration im Init-Teil ist möglich

**Weiterführende Links:**
- [Oracle Java Documentation - The for Statement](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/for.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Index-basierte For-Schleife (C-Style)
for (let i = 0; i < 10; i++) {
    console.log(i);
}
```

**Besonderheiten:**
- Syntax: `for (init; bedingung; inkrement) { ... }`
- Alle drei Teile sind optional
- `let` oder `var` für Variablendeklaration im Init-Teil

**Weiterführende Links:**
- [MDN Web Docs - for](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Index-basierte For-Schleife (C-Style)
for (i in 0 until 10) {
    println(i)
}
```

**Besonderheiten:**
- Kotlin hat keine traditionelle C-Style-For-Schleife
- Verwendet Range-Syntax: `for (i in start until end)`
- Oder `for (i in 0..9)` für inklusive Bereiche

**Weiterführende Links:**
- [Kotlin Documentation - For loop](https://kotlinlang.org/docs/control-flow.html#for-loops)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Index-basierte For-Schleife (C-Style)
for i in 0..<10:
    echo i
```

**Besonderheiten:**
- Nim verwendet Range-Syntax: `for i in start..<end`
- Unterstützt auch `countup` und `countdown` für explizite Kontrolle

**Weiterführende Links:**
- [Nim Documentation - For Statement](https://nim-lang.org/docs/manual.html#statements-and-expressions-for-statement)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Index-basierte For-Schleife (C-Style)
for (int i = 0; i < 10; i++) {
    NSLog(@"%d", i);
}
```

**Besonderheiten:**
- Syntax: `for (init; bedingung; inkrement) { ... }`
- Alle drei Teile sind optional
- Variablendeklaration im Init-Teil ist möglich

**Weiterführende Links:**
- [Apple Documentation - Control Flow](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/FoundationTypesandCollections/FoundationTypesandCollections.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Index-basierte For-Schleife (C-Style)
for i := 0; i < 10; i += 1 {
    fmt.println(i)
}
```

**Besonderheiten:**
- Syntax: `for init; bedingung; inkrement { ... }`
- Alle drei Teile sind optional
- Variablendeklaration im Init-Teil ist möglich

**Weiterführende Links:**
- [Odin Documentation - For Statements](https://odin-lang.org/docs/overview/#for-statements)

</TabItem>
<TabItem value="php" label="PHP">

```php
// Index-basierte For-Schleife (C-Style)
for ($i = 0; $i < 10; $i++) {
    echo $i . "\n";
}
```

**Besonderheiten:**
- Syntax: `for (init; bedingung; inkrement) { ... }`
- Alle drei Teile sind optional
- Variablen müssen mit `$` gekennzeichnet werden

**Weiterführende Links:**
- [PHP Documentation - for](https://www.php.net/manual/en/control-structures.for.php)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Index-basierte For-Schleife (C-Style)
for i in 0..10 {
    println!("{}", i);
}
```

**Besonderheiten:**
- Rust hat keine traditionelle C-Style-For-Schleife
- Verwendet Range-Syntax: `for i in start..end`
- `..` ist exklusiv, `..=` ist inklusiv

**Weiterführende Links:**
- [Rust Documentation - Loops](https://doc.rust-lang.org/book/ch03-05-control-flow.html#repetition-with-loops)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Index-basierte For-Schleife (C-Style)
for i in 0..<10 {
    print(i)
}
```

**Besonderheiten:**
- Swift hat keine traditionelle C-Style-For-Schleife (entfernt in Swift 3.0)
- Verwendet Range-Syntax: `for i in start..<end`
- `..<` ist exklusiv, `...` ist inklusiv

**Weiterführende Links:**
- [Swift Documentation - Control Flow](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/controlflow/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Index-basierte For-Schleife (C-Style)
for (let i = 0; i < 10; i++) {
    console.log(i);
}
```

**Besonderheiten:**
- Syntax: `for (init; bedingung; inkrement) { ... }`
- Alle drei Teile sind optional
- `let` oder `var` für Variablendeklaration im Init-Teil

**Weiterführende Links:**
- [TypeScript Handbook - Iteration](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html)

</TabItem>
<TabItem value="v" label="V">

```v
// Index-basierte For-Schleife (C-Style)
for i := 0; i < 10; i++ {
    println(i)
}
```

**Besonderheiten:**
- Syntax: `for init; bedingung; inkrement { ... }`
- Alle drei Teile sind optional
- Variablendeklaration im Init-Teil ist möglich

**Weiterführende Links:**
- [V Documentation - Control Flow](https://github.com/vlang/v/blob/master/doc/docs.md#control-flow)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Index-basierte For-Schleife (C-Style)
var i: i32 = 0;
while (i < 10) : (i += 1) {
    std.debug.print("{}\n", .{i});
}
```

**Besonderheiten:**
- Zig hat keine traditionelle C-Style-For-Schleife
- Verwendet `while` mit optionalem Inkrement: `while (bedingung) : (inkrement) { ... }`

**Weiterführende Links:**
- [Zig Documentation - While](https://ziglang.org/documentation/0.11.0/#While)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Numerische For-Schleife (index-basiert)
for i = 1, 10 do
    print(i)        -- 1, 2, 3, ..., 10
end

-- Mit Schrittweite
for i = 0, 20, 2 do
    print(i)        -- 0, 2, 4, ..., 20
end

-- Rückwärts zählen
for i = 10, 1, -1 do
    print(i)        -- 10, 9, 8, ..., 1
end

-- Schleifenvariable ist automatisch lokal
for i = 1, 5 do
    -- i ist nur innerhalb der Schleife sichtbar
end
-- print(i)         -- nil
```

**Besonderheiten:**
- Syntax: `for var = start, stop [, step] do ... end`
- Standardmäßig Schrittweite 1 (kann negativ sein für Rückwärtszählen)
- Schleifenvariable ist automatisch lokal zum Schleifenblock
- Start, Stop und Step werden einmal beim Eintritt evaluiert
- Schleifenvariable sollte nicht innerhalb der Schleife zugewiesen werden

**Weiterführende Links:**
- [Lua Reference Manual - For Statement](https://www.lua.org/manual/5.4/manual.html#3.3.5)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
var
  i: Integer;
begin
  // Aufwärts zählen
  for i := 0 to 4 do
    WriteLn(i);

  // Abwärts zählen
  for i := 4 downto 0 do
    WriteLn(i);
end;
```

**Besonderheiten:**
- `for`/`to`/`do` für aufwärts, `for`/`downto`/`do` für abwärts
- Laufvariable darf innerhalb der Schleife nicht modifiziert werden
- Schrittweite ist immer 1

**Weiterführende Links:**
- [Delphi Documentation - For Statements](https://docwiki.embarcadero.com/RADStudio/en/For_Statements)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# C-Style For-Schleife
for (my $i = 0; $i < 10; $i++) {
    print "$i\n";
}
```

**Besonderheiten:**
- Syntax: `for (init; bedingung; inkrement) { ... }`
- `for` und `foreach` sind synonym in Perl
- Klammern um die Steuerungsausdrücke sind erforderlich

**Weiterführende Links:**
- [Perl Documentation - For Loops](https://perldoc.perl.org/perlsyn#For-Loops)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* For-Schleife (C-Style) *)
For[i = 0, i < 5, i++,
    Print[i]
]
```

**Besonderheiten:**
- `For[start, test, incr, body]` ist C-ähnlich
- In der Praxis wird `Do[]` oder `Table[]` bevorzugt

**Weiterführende Links:**
- [Wolfram Language Documentation - For](https://reference.wolfram.com/language/ref/For.html)

</TabItem>
</Tabs>


## 6.2.4. Iterative For-Schleifen

Iteration direkt über eine Sammlung ohne explizite Indizes. Viele moderne Sprachen bieten kompakte Konstrukte für dieses Muster.

### Sprachen {#sprachen}

<Tabs availableTabs={['ada', 'carbon', 'clojure', 'common-lisp', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'eiffel', 'elixir', 'fsharp', 'go', 'groovy', 'haxe', 'java', 'javascript', 'julia', 'kotlin', 'lean4', 'lua', 'matlab', 'mojo', 'nim', 'objective-c', 'object-pascal', 'octave', 'odin', 'perl', 'php', 'python', 'r', 'racket', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'v', 'vbnet', 'wolfram-language', 'zig']} orangeTabs={['elm', 'erlang', 'gleam', 'haskell', 'idris', 'koka', 'mercury', 'ocaml', 'purescript', 'roc']}>
<TabItem value="ada" label="Ada">

```ada
-- for-Schleife über Arrays
declare
   type String_Array is array (Positive range <>) of String (1 .. 10);
   items : String_Array := ("Apfel     ", "Banane    ", "Kirsche   ");
begin
   for item of items loop
      Put_Line(item);
   end loop;
end;
```

**Besonderheiten:**
- Unterstützt Iteration über Arrays und Container
- Typsicher und effizient

**Weiterführende Links:**
- [Ada Reference Manual - For Loops](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-5-5.html)

</TabItem>
<TabItem value="csharp" label="C#">

```java
// Enhanced for-loop (seit Java 5.0)
List<String> items = Arrays.asList("Apfel", "Banane", "Kirsche");
for (String item : items) {
    System.out.println(item);
}
```

**Besonderheiten:**
- Wurde in Java 5.0 eingeführt und ist typsicher
- Funktioniert mit allen `Iterable`-Implementierungen

**Weiterführende Links:**
- [Oracle Java Documentation - The for Statement](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/for.html)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Range-based for loop (seit C++11)
std::vector<std::string> items = {"Apfel", "Banane", "Kirsche"};
for (const auto& item : items) {
    std::cout << item << std::endl;
}
```

**Besonderheiten:**
- Wurde in C++11 eingeführt
- Funktioniert mit allen Containern, die `begin()` und `end()` bereitstellen

**Weiterführende Links:**
- [cppreference.com - Range-based for loop](https://en.cppreference.com/w/cpp/language/range-for)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Range-based for loop (experimentell)
var items: [String] = {"Apfel", "Banane", "Kirsche"};
for (var item: items) {
    Print(item);
}
```

**Besonderheiten:**
- Experimentelle Sprache, Syntax kann sich noch ändern
- C++-ähnliche Syntax mit modernen Features

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; for-Schleife über Sequenzen
(def items ["Apfel" "Banane" "Kirsche"])
(doseq [item items]
  (println item))
```

**Besonderheiten:**
- `doseq` für Seiteneffekte, `for` für List Comprehensions
- Funktioniert mit allen Sequenzen

**Weiterführende Links:**
- [Clojure Documentation - for and doseq](https://clojure.org/reference/special_forms#for)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; dolist für Listen
(let ((items '("Apfel" "Banane" "Kirsche")))
  (dolist (item items)
    (format t "~a~%" item)))
```

**Besonderheiten:**
- `dolist` für Listen, `loop` für allgemeine Iteration
- Funktionale und imperative Iteration möglich

**Weiterführende Links:**
- [Common Lisp HyperSpec - dolist](http://www.lispworks.com/documentation/HyperSpec/Body/m_dolist.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# for-Schleife über Collections
items = ["Apfel", "Banane", "Kirsche"]
items.each do |item|
  puts item
end
```

**Besonderheiten:**
- Ruby-ähnliche Syntax
- Unterstützt `each`, `each_with_index` und andere Iteratoren

**Weiterführende Links:**
- [Crystal Documentation - Control Flow](https://crystal-lang.org/reference/1.11/syntax_and_semantics/control_expressions.html)

</TabItem>
<TabItem value="d" label="D">

```d
// foreach-Schleife
string[] items = ["Apfel", "Banane", "Kirsche"];
foreach (item; items) {
    writeln(item);
}
```

**Besonderheiten:**
- Unterstützt Iteration über Arrays, Ranges und benutzerdefinierte Typen
- Sehr flexibel und effizient

**Weiterführende Links:**
- [D Language Specification - Foreach Statement](https://dlang.org/spec/statement.html#foreach)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// for-in-Schleife
var items = ["Apfel", "Banane", "Kirsche"];
for (var item in items) {
  print(item);
}
```

**Besonderheiten:**
- Funktioniert mit allen `Iterable`-Implementierungen
- Typsicher

**Weiterführende Links:**
- [Dart Language Tour - Loops](https://dart.dev/guides/language/language-tour#loops)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
-- across-Schleife
items: ARRAY [STRING]
items := <<"Apfel", "Banane", "Kirsche">>
across items as item loop
    print (item.item)
    print ("%N")
end
```

**Besonderheiten:**
- Verwendet `across` für Iteration über Container
- Typsicher und kontraktbasiert

**Weiterführende Links:**
- [Eiffel Documentation - Iteration](https://www.eiffel.org/doc/eiffel/Loop_Invariants)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# for-Comprehension
items = ["Apfel", "Banane", "Kirsche"]
for item <- items do
  IO.puts(item)
end
```

**Besonderheiten:**
- `for` ist eine Comprehension, die Listen zurückgibt
- Für Seiteneffekte wird oft `Enum.each` verwendet

**Weiterführende Links:**
- [Elixir Documentation - Comprehensions](https://hexdocs.pm/elixir/1.16/comprehensions.html)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Elm hat keine imperativen Schleifen
-- Iteration über List-Funktionen
items = ["Apfel", "Banane", "Kirsche"]
uppercased = List.map String.toUpper items
-- ["APFEL", "BANANE", "KIRSCHE"]
```

**Besonderheiten:**
- Elm hat keine imperativen Schleifen (kein `for`, `while`)
- Iteration erfolgt über Higher-Order Functions wie `List.map`, `List.foldl`
- Alle Iterationen erzeugen neue Werte (keine Seiteneffekte)

**Weiterführende Links:**
- [Elm Documentation - List](https://package.elm-lang.org/packages/elm/core/latest/List)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% List Comprehensions oder lists:foreach
Items = ["Apfel", "Banane", "Kirsche"],
lists:foreach(fun(Item) -> io:format("~s~n", [Item]) end, Items).
```

**Besonderheiten:**
- Verwendet `lists:foreach` oder List Comprehensions
- Funktionale Iteration ohne imperative Schleifen

**Weiterführende Links:**
- [Erlang Documentation - List Comprehensions](https://www.erlang.org/doc/programming_examples/list_comprehensions.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// for-in-Schleife
let items = ["Apfel"; "Banane"; "Kirsche"]
for item in items do
    printfn "%s" item
```

**Besonderheiten:**
- Funktioniert mit allen `seq`-Typen
- Unterstützt auch Ranges

**Weiterführende Links:**
- [F# Documentation - Loops](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/loops-for-to-expression)

</TabItem>
<TabItem value="gleam" label="Gleam">

```erlang
// list.map oder list.each
let items = ["Apfel", "Banane", "Kirsche"]
list.each(items, fn(item) {
  io.println(item)
})
```

**Besonderheiten:**
- Funktionale Sprache ohne imperative Schleifen
- Verwendet List-Funktionen für Iteration

**Weiterführende Links:**
- [Gleam Documentation - Lists](https://gleam.run/documentation/tour/lists/)

</TabItem>
<TabItem value="go" label="Go">

```go
// for range-Schleife
items := []string{"Apfel", "Banane", "Kirsche"}
for _, item := range items {
    fmt.Println(item)
}
```

**Besonderheiten:**
- `for range` funktioniert mit Arrays, Slices, Maps, Strings und Channels
- Unterstützt Index und Wert

**Weiterführende Links:**
- [Go Documentation - For statements](https://go.dev/ref/spec#For_statements)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// for-in-Schleife
def items = ["Apfel", "Banane", "Kirsche"]
for (item in items) {
    println item
}
```

**Besonderheiten:**
- Funktioniert mit allen Iterables
- Unterstützt auch `each`-Methode

**Weiterführende Links:**
- [Groovy Documentation - Loops](https://groovy-lang.org/semantics.html#_loops)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- mapM_ für Seiteneffekte, map für Transformation
items = ["Apfel", "Banane", "Kirsche"]
mapM_ putStrLn items
```

**Besonderheiten:**
- Funktionale Sprache ohne imperative Schleifen
- Verwendet List-Funktionen für Iteration

**Weiterführende Links:**
- [Haskell Documentation - Lists](https://www.haskell.org/tutorial/lists.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// for-Schleife
var items = ["Apfel", "Banane", "Kirsche"];
for (item in items) {
    trace(item);
}
```

**Besonderheiten:**
- Funktioniert mit Arrays und Iterables
- Cross-Platform-Kompilierung

**Weiterführende Links:**
- [Haxe Documentation - For Loops](https://haxe.org/manual/expression-for.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- traverse_ für Seiteneffekte
items : List String
items = ["Apfel", "Banane", "Kirsche"]
traverse_ putStrLn items
```

**Besonderheiten:**
- Funktionale Sprache ohne imperative Schleifen
- Verwendet List-Funktionen für Iteration

**Weiterführende Links:**
- [Idris Documentation - Lists](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html#lists)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Iteration über Listen (Higher-Order Funktionen)
val items = ["Apfel", "Banane", "Kirsche"]
items.foreach fn(item)
  println(item)

// Mit Index
items.foreach-indexed fn(i, item)
  println(i.show ++ ": " ++ item)

// For mit Range
for(0, 10) fn(i)
  println(i.show)
```

**Besonderheiten:**
- Koka verwendet Higher-Order-Funktionen statt imperativer Schleifen
- `foreach` für Iteration über Listen
- `for(start, end)` für Index-basierte Iteration
- Funktionaler Stil mit Lambda-Ausdrücken

**Weiterführende Links:**
- [Koka Language Guide - Control Flow](https://koka-lang.github.io/koka/doc/book.html#sec-control)

</TabItem>
<TabItem value="java" label="Java">

```java
// Enhanced for-loop (seit Java 5.0)
List<String> items = Arrays.asList("Apfel", "Banane", "Kirsche");
for (String item : items) {
    System.out.println(item);
}
```

**Besonderheiten:**
- Wurde in Java 5.0 eingeführt und ist typsicher
- Funktioniert mit allen `Iterable`-Implementierungen

**Weiterführende Links:**
- [Oracle Java Documentation - The for Statement](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/for.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// for...of-Schleife (seit ES6/ES2015)
const items = ["Apfel", "Banane", "Kirsche"];
for (const item of items) {
    console.log(item);
}
```

**Besonderheiten:**
- `for...of` funktioniert mit allen iterierbaren Objekten (Arrays, Strings, Maps, Sets, etc.)

**Weiterführende Links:**
- [MDN Web Docs - for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# for-Schleife
items = ["Apfel", "Banane", "Kirsche"]
for item in items
    println(item)
end
```

**Besonderheiten:**
- Sehr flexibel, funktioniert mit allen iterierbaren Objekten
- Unterstützt auch Ranges und Generatoren

**Weiterführende Links:**
- [Julia Documentation - For Loops](https://docs.julialang.org/en/v1/manual/control-flow/#for-Loops)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// for-in-Schleife
val items = listOf("Apfel", "Banane", "Kirsche")
for (item in items) {
    println(item)
}
```

**Besonderheiten:**
- Funktioniert mit allen Typen, die `Iterable` implementieren
- Unterstützt auch Ranges und Arrays

**Weiterführende Links:**
- [Kotlin Documentation - For Loops](https://kotlinlang.org/docs/control-flow.html#for-loops)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```haskell
-- for-in-Schleife (in do-Notation)
def printItems : IO Unit := do
  let items := ["Apfel", "Banane", "Kirsche"]
  for item in items do
    IO.println item
```

**Besonderheiten:**
- `for` ist in `do`-Blöcken verfügbar
- Funktioniert mit allen Typen, die eine `ForIn`-Instanz haben
- Unterstützt Listen, Arrays, Ranges und andere Sammlungen

**Weiterführende Links:**
- [Functional Programming in Lean - Monads](https://lean-lang.org/functional_programming_in_lean/)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- for-in-Schleife (ipairs für Arrays)
local items = {"Apfel", "Banane", "Kirsche"}
for _, item in ipairs(items) do
    print(item)
end
```

**Besonderheiten:**
- `ipairs` für Arrays, `pairs` für Tabellen
- Generische Iteration über Tabellen

**Weiterführende Links:**
- [Lua Documentation - For Statement](https://www.lua.org/manual/5.4/manual.html#3.3.5)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% for-Schleife
items = ["Apfel", "Banane", "Kirsche"];
for item = items
    disp(item)
end
```

**Besonderheiten:**
- Funktioniert mit Arrays und Cell Arrays
- Unterstützt auch numerische Ranges

**Weiterführende Links:**
- [MATLAB Documentation - for](https://www.mathworks.com/help/matlab/ref/for.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Iteration über Listen (Higher-Order-Prädikate)
:- pred main(io::di, io::uo) is det.
main(!IO) :-
    Items = ["Apfel", "Banane", "Kirsche"],
    list.foldl(
        (pred(Item::in, !.IO::di, !:IO::uo) is det :-
            io.write_string(Item, !IO),
            io.nl(!IO)
        ),
        Items, !IO).
```

**Besonderheiten:**
- Mercury hat keine imperativen Schleifen
- Iteration über Listen erfolgt über Higher-Order-Prädikate wie `list.foldl`, `list.map`
- I/O-Operationen erfordern das Durchreichen des I/O-State (`!IO`)
- Funktionaler/logischer Stil mit explizitem State-Threading

**Weiterführende Links:**
- [Mercury Library Reference - list](https://www.mercurylang.org/information/doc-release/mercury_library/list.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# for-Schleife (Python-ähnlich)
var items = ["Apfel", "Banane", "Kirsche"]
for item in items:
    print(item)
```

**Besonderheiten:**
- Python-ähnliche Syntax
- Unterstützt Iteration über Collections

**Weiterführende Links:**
- [Mojo Documentation - Control Flow](https://docs.modular.com/mojo/manual/control-flow/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# for-Schleife
var items = @["Apfel", "Banane", "Kirsche"]
for item in items:
    echo item
```

**Besonderheiten:**
- Funktioniert mit Arrays, Sequenzen und anderen Iterables
- Unterstützt auch Ranges

**Weiterführende Links:**
- [Nim Documentation - For Statement](https://nim-lang.org/docs/manual.html#statements-and-expressions-for-statement)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// for-in-Schleife (seit Delphi 2005)
var
  items: TArray<string>;
begin
  items := ['Apfel', 'Banane', 'Kirsche'];
  for item in items do
    WriteLn(item);
end;
```

**Besonderheiten:**
- Wurde in Delphi 2005 eingeführt
- Funktioniert mit Arrays und Collections, die `GetEnumerator` implementieren

**Weiterführende Links:**
- [Embarcadero Delphi Documentation - For...In Loops](https://docwiki.embarcadero.com/RADStudio/en/For...In_Loops)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objectivec
// Fast Enumeration (seit Objective-C 2.0)
NSArray *items = @[@"Apfel", @"Banane", @"Kirsche"];
for (NSString *item in items) {
    NSLog(@"%@", item);
}
```

**Besonderheiten:**
- Fast Enumeration wurde in Objective-C 2.0 eingeführt
- Funktioniert mit `NSArray`, `NSSet`, `NSDictionary` und anderen Collections

**Weiterführende Links:**
- [Apple Documentation - Fast Enumeration](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ObjectiveC/Chapters/ocFastEnumeration.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* List.iter für Seiteneffekte *)
let items = ["Apfel"; "Banane"; "Kirsche"]
List.iter (fun item -> print_endline item) items
```

**Besonderheiten:**
- Funktionale Sprache ohne imperative Schleifen
- Verwendet `List.iter` für Seiteneffekte, `List.map` für Transformation

**Weiterführende Links:**
- [OCaml Documentation - Lists](https://ocaml.org/docs/lists)

</TabItem>
<TabItem value="octave" label="Octave">

```matlab
% for-Schleife (MATLAB-ähnlich)
items = ["Apfel", "Banane", "Kirsche"];
for item = items
    disp(item)
end
```

**Besonderheiten:**
- MATLAB-ähnliche Syntax
- Funktioniert mit Arrays

**Weiterführende Links:**
- [GNU Octave Documentation - The for Statement](https://octave.org/doc/v8.1.0/The-for-Statement.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// for-in-Schleife
items := []string{"Apfel", "Banane", "Kirsche"}
for item in items {
    fmt.println(item)
}
```

**Besonderheiten:**
- Funktioniert mit Arrays und Slices
- Unterstützt auch Ranges

**Weiterführende Links:**
- [Odin Documentation - For Loops](https://odin-lang.org/docs/overview/#for-statements)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# for-Schleife
my @items = ("Apfel", "Banane", "Kirsche");
for my $item (@items) {
    print "$item\n";
}
```

**Besonderheiten:**
- Unterstützt auch `foreach` als Alias für `for`
- Funktioniert mit Arrays und Listen

**Weiterführende Links:**
- [Perl Documentation - Foreach Loops](https://perldoc.perl.org/perlsyn#Foreach-Loops)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
// foreach-Schleife
$items = ["Apfel", "Banane", "Kirsche"];
foreach ($items as $item) {
    echo $item . "\n";
}
```

**Besonderheiten:**
- `foreach` funktioniert mit Arrays und Objekten, die `Traversable` implementieren
- Unterstützt auch assoziative Arrays mit `foreach ($array as $key => $value)`

**Weiterführende Links:**
- [PHP Documentation - foreach](https://www.php.net/manual/en/control-structures.foreach.php)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- traverse_ für Seiteneffekte
items = ["Apfel", "Banane", "Kirsche"]
traverse_ log items
```

**Besonderheiten:**
- Funktionale Sprache ohne imperative Schleifen
- Verwendet List-Funktionen für Iteration

**Weiterführende Links:**
- [PureScript Documentation - Lists](https://book.purescript.org/chapter3.html#lists)

</TabItem>
<TabItem value="python" label="Python">

```python
# Iterative For-Schleife
items = ["Apfel", "Banane", "Kirsche"]
for item in items:
    print(item)

# Mit enumerate für Index und Wert
for i, item in enumerate(items):
    print(f"{i}: {item}")
```

**Besonderheiten:**
- `for item in iterable` iteriert über beliebige Iterables
- `enumerate()` liefert Index und Wert
- Funktioniert mit Listen, Tuples, Strings, Dicts, Sets und allen Iterables

**Weiterführende Links:**
- [Python Documentation - for Statements](https://docs.python.org/3/tutorial/controlflow.html#for-statements)

</TabItem>
<TabItem value="r" label="R">

```r
# for-Schleife
items <- c("Apfel", "Banane", "Kirsche")
for (item in items) {
  cat(item, "\n")
}
```

**Besonderheiten:**
- Funktioniert mit Vektoren, Listen und anderen iterierbaren Objekten
- Unterstützt auch numerische Ranges

**Weiterführende Links:**
- [R Documentation - For Loops](https://cran.r-project.org/doc/manuals/r-release/R-intro.html#Repetitive-execution-for-loops)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
;; for-Schleife
(define items '("Apfel" "Banane" "Kirsche"))
(for ([item items])
  (printf "~a~n" item))
```

**Besonderheiten:**
- Unterstützt verschiedene `for`-Varianten für verschiedene Datentypen
- Sehr flexibel und mächtig

**Weiterführende Links:**
- [Racket Documentation - for](https://docs.racket-lang.org/reference/for.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Iteration über Funktionen (keine traditionellen Schleifen)
items = ["Apfel", "Banane", "Kirsche"]
result = List.map items \item -> Str.toUpper item
```

**Besonderheiten:**
- Keine traditionellen For-Schleifen
- Verwendet `List.map`, `List.walk` etc. für Iteration
- Funktionaler Stil

**Weiterführende Links:**
- [Roc Documentation - Lists](https://www.roc-lang.org/builtins/List)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# for-in-Schleife oder each
items = ["Apfel", "Banane", "Kirsche"]
for item in items
  puts item
end

# Oder idiomatischer mit each
items.each do |item|
  puts item
end
```

**Besonderheiten:**
- Unterstützt sowohl `for` als auch `each`-Methode
- `each` ist die idiomatischere Variante

**Weiterführende Links:**
- [Ruby Documentation - For Loops](https://ruby-doc.org/core-3.1.0/doc/syntax/control_expressions_rdoc.html#label-for+Loop)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// for-Schleife
let items = vec!["Apfel", "Banane", "Kirsche"];
for item in items {
    println!("{}", item);
}
```

**Besonderheiten:**
- Funktioniert mit allen Typen, die `IntoIterator` implementieren
- Ownership-bewusst und sicher

**Weiterführende Links:**
- [Rust Documentation - For Loops](https://doc.rust-lang.org/book/ch03-05-control-flow.html#repetition-with-loops)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// for-Schleife
val items = List("Apfel", "Banane", "Kirsche")
for (item <- items) {
  println(item)
}
```

**Besonderheiten:**
- Funktioniert mit allen Collections
- Unterstützt auch for-Comprehensions für Transformationen

**Weiterführende Links:**
- [Scala Documentation - For Loops](https://docs.scala-lang.org/scala3/book/control-structures.html#for-loops-and-for-expressions)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; for-each für Seiteneffekte
(define items '("Apfel" "Banane" "Kirsche"))
(for-each (lambda (item) (display (string-append item "\n"))) items)
```

**Besonderheiten:**
- Verwendet `for-each` für Seiteneffekte, `map` für Transformation
- Funktionale Iteration

**Weiterführende Links:**
- [Scheme Documentation - Iteration](https://www.scheme.com/tspl4/control.html#./control:h2)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// for-in-Schleife
let items = ["Apfel", "Banane", "Kirsche"]
for item in items {
    print(item)
}
```

**Besonderheiten:**
- Funktioniert mit allen Typen, die `Sequence` implementieren
- Unterstützt auch Ranges und Stride

**Weiterführende Links:**
- [Swift Documentation - For-In Loops](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/controlflow/#For-In-Loops)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```javascript
// for...of-Schleife (seit ES6/ES2015)
const items = ["Apfel", "Banane", "Kirsche"];
for (const item of items) {
    console.log(item);
}
```

**Besonderheiten:**
- `for...of` funktioniert mit allen iterierbaren Objekten (Arrays, Strings, Maps, Sets, etc.)

**Weiterführende Links:**
- [MDN Web Docs - for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)

</TabItem>
<TabItem value="v" label="V">

```v
// for-in-Schleife
items := ["Apfel", "Banane", "Kirsche"]
for item in items {
    println(item)
}
```

**Besonderheiten:**
- Funktioniert mit Arrays und Maps
- Unterstützt auch Ranges

**Weiterführende Links:**
- [V Documentation - For Loops](https://github.com/vlang/v/blob/master/doc/docs.md#for-loops)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```csharp
' For Each-Schleife
Dim items As String() = {"Apfel", "Banane", "Kirsche"}
For Each item In items
    Console.WriteLine(item)
Next
```

**Besonderheiten:**
- `For Each` funktioniert mit allen Typen, die `IEnumerable` implementieren
- Typsicher

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - For Each...Next Statement](https://learn.microsoft.com/en-us/dotnet/visual-basic/language-reference/statements/for-each-next-statement)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```wolfram
(* Do-Schleife *)
items = {"Apfel", "Banane", "Kirsche"};
Do[Print[item], {item, items}]
```

**Besonderheiten:**
- Verwendet `Do` oder `For` für Iteration
- Unterstützt auch funktionale Iteration mit `Map`

**Weiterführende Links:**
- [Wolfram Language Documentation - Do](https://reference.wolfram.com/language/ref/Do.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// for-Schleife
const items = [_][]const u8{"Apfel", "Banane", "Kirsche"};
for (items) |item| {
    std.debug.print("{s}\n", .{item});
}
```

**Besonderheiten:**
- Funktioniert mit Arrays, Slices und anderen iterierbaren Typen
- Unterstützt auch Index mit `for (items, 0..) |item, index|`

**Weiterführende Links:**
- [Zig Documentation - For Loops](https://ziglang.org/documentation/0.11.0/#for)

</TabItem>
</Tabs>


## 6.2.5. For-Each / Enhanced For Loops

Schleifen, die über Sammlungen iterieren, ohne explizite Indexverwaltung. Bieten eine saubere und sichere Möglichkeit, über Arrays, Listen und andere iterierbare Strukturen zu iterieren.

### Sprachen {#sprachen}

<Tabs availableTabs={['ada', 'carbon', 'clojure', 'common-lisp', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'eiffel', 'elixir', 'fsharp', 'go', 'groovy', 'haxe', 'idris', 'java', 'javascript', 'julia', 'kotlin', 'lean4', 'lua', 'matlab', 'mojo', 'nim', 'objective-c', 'object-pascal', 'octave', 'odin', 'perl', 'php', 'purescript', 'python', 'r', 'racket', 'roc', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'v', 'vbnet', 'wolfram-language', 'zig']} orangeTabs={['elm', 'erlang', 'gleam', 'haskell', 'koka', 'mercury', 'ocaml']}>
<TabItem value="ada" label="Ada">

```ada
-- For-Each Loop (of-Syntax)
declare
    type String_Array is array (Positive range <>) of String (1 .. 10);
    items : String_Array := ("Apfel     ", "Banane    ", "Kirsche   ");
begin
    for item of items loop
        Put_Line(item);
    end loop;
end;
```

**Besonderheiten:**
- Verwendet `for item of items` für direkte Element-Iteration
- Muss mit `end loop` abgeschlossen werden

**Weiterführende Links:**
- [Ada Reference Manual - For Loops](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-5-5.html)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// For-Each Loop
var items: [String] = {"Apfel", "Banane", "Kirsche"};
for (item: String in items) {
    Print(item);
}
```

**Besonderheiten:**
- Experimentelle Sprache, Syntax kann sich noch ändern
- C++-ähnliche Syntax mit expliziter Typannotation

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; For-Each Loop (doseq)
(def items ["Apfel" "Banane" "Kirsche"])
(doseq [item items]
  (println item))
```

**Besonderheiten:**
- Verwendet `doseq` für Seiteneffekte
- `for` ist für List Comprehensions reserviert

**Weiterführende Links:**
- [Clojure Documentation - doseq](https://clojure.org/reference/special_forms#doseq)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; For-Each Loop (dolist)
(let ((items '("Apfel" "Banane" "Kirsche")))
  (dolist (item items)
    (format t "~a~%" item)))
```

**Besonderheiten:**
- Verwendet `dolist` für Listen
- `dolist` ist spezifisch für Listen-Iteration

**Weiterführende Links:**
- [Common Lisp HyperSpec - dolist](http://www.lispworks.com/documentation/HyperSpec/Body/m_dolist.htm)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// For-Each Loop (Range-based for, seit C++11)
std::vector<std::string> items = {"Apfel", "Banane", "Kirsche"};
for (const auto& item : items) {
    std::cout << item << std::endl;
}
```

**Besonderheiten:**
- Wurde in C++11 eingeführt
- Syntax: `for (element : container)`
- Unterstützt `auto` für Typinferenz

**Weiterführende Links:**
- [cppreference.com - Range-based for loop](https://en.cppreference.com/w/cpp/language/range-for)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# For-Each Loop
items = ["Apfel", "Banane", "Kirsche"]
items.each do |item|
  puts item
end
```

**Besonderheiten:**
- Verwendet `each` mit Block
- Unterstützt auch `for item in items` Syntax

**Weiterführende Links:**
- [Crystal Documentation - Iteration](https://crystal-lang.org/reference/1.11/syntax_and_semantics/for.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// For-Each Loop (foreach)
string[] items = {"Apfel", "Banane", "Kirsche"};
foreach (string item in items) {
    Console.WriteLine(item);
}
```

**Besonderheiten:**
- Syntax: `foreach (typ variable in collection)`
- Unterstützt `var` für Typinferenz (seit C# 3.0)

**Weiterführende Links:**
- [Microsoft C# Documentation - foreach statement](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/statements/iteration-statements#the-foreach-statement)

</TabItem>
<TabItem value="d" label="D">

```d
// For-Each Loop (foreach)
string[] items = ["Apfel", "Banane", "Kirsche"];
foreach (item; items) {
    writeln(item);
}
```

**Besonderheiten:**
- Syntax: `foreach (variable; collection)`
- Unterstützt auch `foreach (ref item; items)` für Referenzen

**Weiterführende Links:**
- [D Language Specification - Foreach Statement](https://dlang.org/spec/statement.html#foreach_statement)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// For-Each Loop (for-in)
var items = ["Apfel", "Banane", "Kirsche"];
for (var item in items) {
  print(item);
}
```

**Besonderheiten:**
- Syntax: `for (variable in collection)`
- Unterstützt `var` für Typinferenz

**Weiterführende Links:**
- [Dart Language Tour - For loops](https://dart.dev/guides/language/language-tour#for-loops)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
-- For-Each Loop (across)
across
    items as item
loop
    io.put_string(item.item)
    io.put_new_line
end
```

**Besonderheiten:**
- Verwendet `across...as...loop` Syntax
- Muss mit `end` abgeschlossen werden

**Weiterführende Links:**
- [Eiffel Documentation - Control Structures](https://www.eiffel.org/doc/eiffel/Control_Structures)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# For-Each Loop (Enum.each)
items = ["Apfel", "Banane", "Kirsche"]
Enum.each(items, fn item -> IO.puts(item) end)
```

**Besonderheiten:**
- Verwendet `Enum.each/2` mit anonymer Funktion
- Alternativ: `for`-Comprehension (`for x <- list, do: ...`)

**Weiterführende Links:**
- [Elixir Documentation - Enum.each](https://hexdocs.pm/elixir/Enum.html#each/2)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Elm hat keine for-each-Schleifen
-- Äquivalent: List.map für Element-weise Verarbeitung
items = ["Apfel", "Banane", "Kirsche"]
processed = List.map (\item -> String.toUpper item) items
-- ["APFEL", "BANANE", "KIRSCHE"]

-- Mit Index
indexed = List.indexedMap (\i item -> String.fromInt i ++ ": " ++ item) items
-- ["0: Apfel", "1: Banane", "2: Kirsche"]
```

**Besonderheiten:**
- Elm hat keine traditionellen Schleifen
- `List.map` für Transformation jedes Elements
- `List.indexedMap` für Iteration mit Index
- `List.foldl` / `List.foldr` für Akkumulation

**Weiterführende Links:**
- [Elm Documentation - List](https://package.elm-lang.org/packages/elm/core/latest/List)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% For-Each Loop (lists:foreach)
Items = ["Apfel", "Banane", "Kirsche"],
lists:foreach(fun(Item) -> io:format("~s~n", [Item]) end, Items).
```

**Besonderheiten:**
- Verwendet `lists:foreach` mit Funktion
- Funktionaler Stil ohne explizite Schleifen

**Weiterführende Links:**
- [Erlang Documentation - lists:foreach](https://www.erlang.org/doc/man/lists.html#foreach-2)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// For-Each Loop (for...in)
let items = ["Apfel"; "Banane"; "Kirsche"]
for item in items do
    printfn "%s" item
```

**Besonderheiten:**
- Syntax: `for variable in collection do`
- Muss mit `do` eingeleitet werden

**Weiterführende Links:**
- [F# Documentation - For...in Expression](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/loops-for-in-expression)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// For-Each Loop via list.each
// Benötigt: import gleam/list
// Benötigt: import gleam/io
let items = ["Apfel", "Banane", "Kirsche"]
list.each(items, fn(item) { io.println(item) })
```

**Besonderheiten:**
- Verwendet `list.each` für Iteration mit Seiteneffekten
- Funktionaler Stil ohne imperative Schleifen
- `list.map` für Transformation, `list.each` für Seiteneffekte

**Weiterführende Links:**
- [Gleam Documentation - list.each](https://hexdocs.pm/gleam_stdlib/gleam/list.html#each)

</TabItem>
<TabItem value="go" label="Go">

```go
// For-Each Loop (for...range)
items := []string{"Apfel", "Banane", "Kirsche"}
for _, item := range items {
    fmt.Println(item)
}
```

**Besonderheiten:**
- Syntax: `for index, value := range collection`
- `_` wird verwendet, um den Index zu ignorieren

**Weiterführende Links:**
- [Go Documentation - For statements](https://go.dev/ref/spec#For_statements)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// For-Each Loop (for...in)
def items = ["Apfel", "Banane", "Kirsche"]
for (item in items) {
    println item
}
```

**Besonderheiten:**
- Syntax: `for (variable in collection)`
- Unterstützt auch `items.each { item -> ... }` Syntax

**Weiterführende Links:**
- [Groovy Documentation - Looping Structures](https://groovy-lang.org/semantics.html#_looping_structures)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- For-Each Loop (mapM_ für Seiteneffekte)
import Control.Monad
items = ["Apfel", "Banane", "Kirsche"]
mapM_ putStrLn items
```

**Besonderheiten:**
- Haskell hat keine traditionellen Schleifen
- Verwendet `mapM_` für Seiteneffekte oder `map` für Transformationen

**Weiterführende Links:**
- [Haskell Documentation - Control.Monad](https://hackage.haskell.org/package/base/docs/Control-Monad.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// For-Each Loop (for...in)
var items = ["Apfel", "Banane", "Kirsche"];
for (item in items) {
    trace(item);
}
```

**Besonderheiten:**
- Syntax: `for (variable in collection)`
- Unterstützt Iteratoren

**Weiterführende Links:**
- [Haxe Documentation - For](https://haxe.org/manual/expression-for.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- For-Each Loop (for_ für Seiteneffekte)
items : List String
items = ["Apfel", "Banane", "Kirsche"]
for_ items (\item => putStrLn item)
```

**Besonderheiten:**
- Verwendet `for_` für Seiteneffekte
- Funktionaler Stil

**Weiterführende Links:**
- [Idris Documentation - Control Structures](https://idris2.readthedocs.io/en/latest/tutorial/starting.html#control-structures)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// For-Each über Listen (Higher-Order-Funktion)
val items = ["Apfel", "Banane", "Kirsche"]
items.foreach fn(item)
  println(item)

// Mit map für Transformationen
val upper = items.map fn(item)
  item.to-upper
```

**Besonderheiten:**
- Koka verwendet `foreach` als Higher-Order-Funktion statt einer Schleifen-Syntax
- `map` für Transformationen, `foreach` für Seiteneffekte
- Lambda-Ausdrücke mit `fn(...)` Syntax

**Weiterführende Links:**
- [Koka Standard Library - Lists](https://koka-lang.github.io/koka/doc/std_core.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// For-Each Loop (Enhanced for, seit Java 5.0)
String[] items = {"Apfel", "Banane", "Kirsche"};
for (String item : items) {
    System.out.println(item);
}
```

**Besonderheiten:**
- Wurde in Java 5.0 eingeführt
- Syntax: `for (typ variable : collection)`
- Unterstützt alle Iterable-Implementierungen

**Weiterführende Links:**
- [Oracle Java Documentation - The for-each Loop](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/for.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// For-Each Loop (for...of, seit ES6)
const items = ["Apfel", "Banane", "Kirsche"];
for (const item of items) {
    console.log(item);
}
```

**Besonderheiten:**
- Wurde in ES6 eingeführt
- Syntax: `for (const variable of collection)`
- Unterstützt alle iterierbaren Objekte

**Weiterführende Links:**
- [MDN Web Docs - for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# For-Each Loop (for...in)
items = ["Apfel", "Banane", "Kirsche"]
for item in items
    println(item)
end
```

**Besonderheiten:**
- Syntax: `for variable in collection`
- Muss mit `end` abgeschlossen werden

**Weiterführende Links:**
- [Julia Documentation - Control Flow](https://docs.julialang.org/en/v1/manual/control-flow/#for-loops)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// For-Each Loop (for...in)
val items = arrayOf("Apfel", "Banane", "Kirsche")
for (item in items) {
    println(item)
}
```

**Besonderheiten:**
- Syntax: `for (variable in collection)`
- Unterstützt alle Iterable-Implementierungen

**Weiterführende Links:**
- [Kotlin Documentation - For loop](https://kotlinlang.org/docs/control-flow.html#for-loops)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```haskell
-- For-Each Loop (for...in)
def printItems : IO Unit := do
  let items := #["Apfel", "Banane", "Kirsche"]
  for item in items do
    IO.println item
```

**Besonderheiten:**
- Syntax: `for variable in collection do`
- Funktioniert mit allen Typen, die eine `ForIn`-Instanz haben (Listen, Arrays, etc.)
- `#[...]` erstellt ein Array, `[...]` erstellt eine Liste

**Weiterführende Links:**
- [Functional Programming in Lean - Monads](https://lean-lang.org/functional_programming_in_lean/)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- For-Each Loop (for...in mit ipairs)
local items = {"Apfel", "Banane", "Kirsche"}
for _, item in ipairs(items) do
    print(item)
end
```

**Besonderheiten:**
- Verwendet `ipairs` für Array-ähnliche Tabellen
- Syntax: `for index, value in ipairs(table)`
- `_` wird verwendet, um den Index zu ignorieren

**Weiterführende Links:**
- [Lua Documentation - For Statement](https://www.lua.org/manual/5.4/manual.html#3.3.5)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% For-Each Loop (for...in)
items = ["Apfel", "Banane", "Kirsche"];
for item = items
    disp(item)
end
```

**Besonderheiten:**
- Syntax: `for variable = collection`
- Muss mit `end` abgeschlossen werden

**Weiterführende Links:**
- [MATLAB Documentation - for](https://www.mathworks.com/help/matlab/ref/for.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% For-Each (Higher-Order-Prädikate)
:- pred main(io::di, io::uo) is det.
main(!IO) :-
    Items = ["Apfel", "Banane", "Kirsche"],
    list.foldl(
        (pred(Item::in, !.IO::di, !:IO::uo) is det :-
            io.write_string(Item, !IO),
            io.nl(!IO)
        ),
        Items, !IO).

% Transformation mit list.map
:- func double_items(list(int)) = list(int).
double_items(Items) = list.map((func(X) = X * 2), Items).
```

**Besonderheiten:**
- Mercury hat kein `for-each`-Sprachkonstrukt
- Iteration über Higher-Order-Prädikate: `list.foldl`, `list.map`, `list.filter`
- `list.map` für Transformationen, `list.foldl` für Akkumulation mit Seiteneffekten
- Funktionaler/logischer Stil statt imperativer Schleifen

**Weiterführende Links:**
- [Mercury Library Reference - list](https://www.mercurylang.org/information/doc-release/mercury_library/list.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# For-Each Loop (for...in)
var items = ["Apfel", "Banane", "Kirsche"]
for item in items:
    print(item)
```

**Besonderheiten:**
- Python-ähnliche Syntax
- Syntax: `for variable in collection`
- Muss mit Einrückung strukturiert werden

**Weiterführende Links:**
- [Mojo Documentation - Control Flow](https://docs.modular.com/mojo/manual/control-flow/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# For-Each Loop (for...in)
let items = ["Apfel", "Banane", "Kirsche"]
for item in items:
    echo item
```

**Besonderheiten:**
- Syntax: `for variable in collection`
- Muss mit Einrückung strukturiert werden

**Weiterführende Links:**
- [Nim Documentation - For Statement](https://nim-lang.org/docs/manual.html#statements-and-expressions-for-statement)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// For-Each Loop (Fast Enumeration, seit Objective-C 2.0)
NSArray *items = @[@"Apfel", @"Banane", @"Kirsche"];
for (NSString *item in items) {
    NSLog(@"%@", item);
}
```

**Besonderheiten:**
- Wurde in Objective-C 2.0 eingeführt
- Syntax: `for (typ variable in collection)`
- Unterstützt NSArray, NSSet, NSDictionary

**Weiterführende Links:**
- [Apple Documentation - Fast Enumeration](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/FoundationTypesandCollections/FoundationTypesandCollections.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// For-Each Loop (for...in)
var items: array of String = ['Apfel', 'Banane', 'Kirsche'];
var item: String;
begin
    for item in items do
        WriteLn(item);
end;
```

**Besonderheiten:**
- Syntax: `for variable in collection do`
- Muss mit `do` eingeleitet werden

**Weiterführende Links:**
- [Free Pascal Documentation - For...in Loop](https://www.freepascal.org/docs-html/ref/refse24.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* For-Each Loop (List.iter für Seiteneffekte) *)
let items = ["Apfel"; "Banane"; "Kirsche"] in
List.iter (fun item -> print_endline item) items
```

**Besonderheiten:**
- OCaml hat keine traditionellen Schleifen
- Verwendet `List.iter` für Seiteneffekte oder `List.map` für Transformationen

**Weiterführende Links:**
- [OCaml Documentation - Lists](https://v2.ocaml.org/manual/libref/List.html)

</TabItem>
<TabItem value="octave" label="Octave">

```matlab
% For-Each Loop (for...in)
items = {"Apfel", "Banane", "Kirsche"};
for item = items
    disp(item{1})
end
```

**Besonderheiten:**
- Syntax: `for variable = collection`
- Muss mit `end` abgeschlossen werden
- Zell-Arrays erfordern spezielle Indizierung

**Weiterführende Links:**
- [GNU Octave Documentation - The for Statement](https://octave.org/doc/v8.1.0/The-for-Statement.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// For-Each Loop (for...in)
items := []string{"Apfel", "Banane", "Kirsche"}
for item in items {
    fmt.println(item)
}
```

**Besonderheiten:**
- Syntax: `for variable in collection`
- Unterstützt alle iterierbaren Typen

**Weiterführende Links:**
- [Odin Documentation - For Statements](https://odin-lang.org/docs/overview/#for-statements)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# For-Each Loop (for...foreach)
my @items = ("Apfel", "Banane", "Kirsche");
for my $item (@items) {
    print "$item\n";
}
```

**Besonderheiten:**
- Syntax: `for variable (@array)` oder `foreach variable (@array)`
- `for` und `foreach` sind synonym

**Weiterführende Links:**
- [Perl Documentation - Foreach Loops](https://perldoc.perl.org/perlsyn#Foreach-Loops)

</TabItem>
<TabItem value="php" label="PHP">

```php
// For-Each Loop (foreach)
$items = ["Apfel", "Banane", "Kirsche"];
foreach ($items as $item) {
    echo $item . "\n";
}
```

**Besonderheiten:**
- Syntax: `foreach ($collection as $variable)`
- Unterstützt auch `foreach ($array as $key => $value)` für assoziative Arrays

**Weiterführende Links:**
- [PHP Documentation - foreach](https://www.php.net/manual/en/control-structures.foreach.php)

</TabItem>
<TabItem value="purescript" label="PureScript">

```haskell
-- For-Each Loop (for_ für Seiteneffekte)
import Control.Monad
items = ["Apfel", "Banane", "Kirsche"]
for_ items \item -> log item
```

**Besonderheiten:**
- Verwendet `for_` für Seiteneffekte
- Funktionaler Stil

**Weiterführende Links:**
- [PureScript Documentation - Control.Monad](https://pursuit.purescript.org/packages/purescript-control/docs/Control.Monad)

</TabItem>
<TabItem value="python" label="Python">

```python
# For-Each Loop (for...in)
items = ["Apfel", "Banane", "Kirsche"]
for item in items:
    print(item)
```

**Besonderheiten:**
- Syntax: `for variable in collection`
- Muss mit Einrückung strukturiert werden
- Unterstützt alle iterierbaren Objekte

**Weiterführende Links:**
- [Python Documentation - for Statements](https://docs.python.org/3/tutorial/controlflow.html#for-statements)

</TabItem>
<TabItem value="r" label="R">

```r
# For-Each Loop (for...in)
items <- c("Apfel", "Banane", "Kirsche")
for (item in items) {
    print(item)
}
```

**Besonderheiten:**
- Syntax: `for (variable in collection)`
- Klammern um die Bedingung sind erforderlich

**Weiterführende Links:**
- [R Documentation - Control Structures](https://www.rdocumentation.org/packages/base/versions/3.6.2/topics/Control)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
;; For-Each Loop (for-each)
(define items '("Apfel" "Banane" "Kirsche"))
(for-each displayln items)
```

**Besonderheiten:**
- Verwendet `for-each` für Seiteneffekte
- Funktionaler Stil

**Weiterführende Links:**
- [Racket Documentation - for-each](https://docs.racket-lang.org/reference/pairs.html#%28def._%28%28lib._racket%2Fprivate%2Flist..rkt%29._for-each%29%29)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- For-Each über List.walk (Fold)
items = ["Apfel", "Banane", "Kirsche"]
result = List.walk items "" \acc, item ->
    Str.concat acc item
```

**Besonderheiten:**
- Verwendet `List.walk` (Fold) für iterative Verarbeitung
- `List.walk` nimmt Liste, Startwert und Funktion
- Funktionaler Stil statt imperativer Schleifen

**Weiterführende Links:**
- [Roc Documentation - List.walk](https://www.roc-lang.org/builtins/List#walk)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# For-Each Loop (for...in)
items = ["Apfel", "Banane", "Kirsche"]
for item in items
    puts item
end
```

**Besonderheiten:**
- Syntax: `for variable in collection`
- Muss mit `end` abgeschlossen werden
- Unterstützt auch `items.each { |item| ... }` Syntax

**Weiterführende Links:**
- [Ruby Documentation - Control Expressions](https://docs.ruby-lang.org/en/3.2/syntax/control_expressions_rdoc.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// For-Each Loop (for...in)
let items = vec!["Apfel", "Banane", "Kirsche"];
for item in items {
    println!("{}", item);
}
```

**Besonderheiten:**
- Syntax: `for variable in collection`
- Unterstützt alle Typen, die `IntoIterator` implementieren

**Weiterführende Links:**
- [Rust Documentation - Loops](https://doc.rust-lang.org/book/ch03-05-control-flow.html#repetition-with-loops)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// For-Each Loop (for...in)
val items = Array("Apfel", "Banane", "Kirsche")
for (item <- items) {
    println(item)
}
```

**Besonderheiten:**
- Syntax: `for (variable <- collection)`
- Unterstützt auch `items.foreach { item => ... }` Syntax

**Weiterführende Links:**
- [Scala Documentation - For Comprehensions](https://docs.scala-lang.org/tour/for-comprehensions.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; For-Each Loop (for-each)
(define items '("Apfel" "Banane" "Kirsche"))
(for-each display items)
(newline)
```

**Besonderheiten:**
- Verwendet `for-each` für Seiteneffekte
- Funktionaler Stil

**Weiterführende Links:**
- [Scheme Documentation - for-each](https://www.scheme.com/tspl4/objects.html#./objects:h1)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// For-Each Loop (for...in)
let items = ["Apfel", "Banane", "Kirsche"]
for item in items {
    print(item)
}
```

**Besonderheiten:**
- Syntax: `for variable in collection`
- Unterstützt alle Typen, die `Sequence` implementieren

**Weiterführende Links:**
- [Swift Documentation - Control Flow](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/controlflow/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// For-Each Loop (for...of)
const items = ["Apfel", "Banane", "Kirsche"];
for (const item of items) {
    console.log(item);
}
```

**Besonderheiten:**
- Wurde in ES6 eingeführt
- Syntax: `for (const variable of collection)`
- Unterstützt alle iterierbaren Objekte

**Weiterführende Links:**
- [TypeScript Handbook - Iteration](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html)

</TabItem>
<TabItem value="v" label="V">

```v
// For-Each Loop (for...in)
items := ["Apfel", "Banane", "Kirsche"]
for item in items {
    println(item)
}
```

**Besonderheiten:**
- Syntax: `for variable in collection`
- Unterstützt alle iterierbaren Typen

**Weiterführende Links:**
- [V Documentation - Control Flow](https://github.com/vlang/v/blob/master/doc/docs.md#control-flow)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' For-Each Loop (For Each...In)
Dim items() As String = {"Apfel", "Banane", "Kirsche"}
For Each item In items
    Console.WriteLine(item)
Next
```

**Besonderheiten:**
- Syntax: `For Each variable In collection`
- Muss mit `Next` abgeschlossen werden

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - For Each...Next Statement](https://learn.microsoft.com/en-us/dotnet/visual-basic/language-reference/statements/for-each-next-statement)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* For-Each Loop (Do) *)
items = {"Apfel", "Banane", "Kirsche"};
Do[Print[item], {item, items}]
```

**Besonderheiten:**
- Verwendet `Do` mit Iterator-Syntax
- Funktionssyntax mit geschweiften Klammern

**Weiterführende Links:**
- [Wolfram Language Documentation - Do](https://reference.wolfram.com/language/ref/Do.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// For-Each Loop (for...in)
const items = [_][]const u8{"Apfel", "Banane", "Kirsche"};
for (items) |item| {
    std.debug.print("{s}\n", .{item});
}
```

**Besonderheiten:**
- Syntax: `for (collection) |variable|`
- Unterstützt alle iterierbaren Typen

**Weiterführende Links:**
- [Zig Documentation - For](https://ziglang.org/documentation/0.11.0/#For)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// For-In-Schleifen (seit Delphi 2005)
var
  numbers: array[0..4] of Integer = (10, 20, 30, 40, 50);
  n: Integer;
  ch: Char;
  s: string;
begin
  // Über Array iterieren
  for n in numbers do
    WriteLn(n);

  // Über String iterieren
  s := 'Hallo';
  for ch in s do
    WriteLn(ch);
end;
```

**Besonderheiten:**
- `for`/`in`/`do` Syntax seit Delphi 2005
- Funktioniert mit Arrays, Strings, Sets, Collections
- Benutzerdefinierte Iteratoren über `GetEnumerator`

**Weiterführende Links:**
- [Delphi Documentation - For-In Statements](https://docwiki.embarcadero.com/RADStudio/en/For_Statements#For-in_Statements)

</TabItem>
</Tabs>


## 6.2.6. Range-based For Loops

For-Schleifen, die über numerische Bereiche iterieren, ohne explizite Indexverwaltung. Bieten eine kompakte Syntax für die Iteration über sequenzielle Wertebereiche.

### Sprachen {#sprachen}

<Tabs availableTabs={['carbon', 'cpp', 'crystal', 'groovy', 'julia', 'kotlin', 'lean4', 'lua', 'matlab', 'mojo', 'nim', 'odin', 'perl', 'php', 'python', 'r', 'ruby', 'rust', 'scala', 'swift', 'v', 'zig']} yellowTabs={['csharp', 'haxe', 'java']} orangeTabs={['dart', 'go', 'javascript', 'typescript']}>
<TabItem value="carbon" label="Carbon">

```cpp
// Range-based For Loop
for (var i: i32 in 0..10) {
    Print(i);
}
```

**Besonderheiten:**
- Experimentelle Sprache, Syntax kann sich noch ändern
- Verwendet `..` für exklusive Bereiche

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Range-based For Loop (seit C++11)
for (int i : {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}) {
    std::cout << i << std::endl;
}

// Mit std::ranges (seit C++20)
#include <ranges>
for (int i : std::views::iota(0, 10)) {
    std::cout << i << std::endl;
}
```

**Besonderheiten:**
- Seit C++11: Range-based for über Container
- Seit C++20: `std::ranges::views::iota` für numerische Bereiche

**Weiterführende Links:**
- [cppreference.com - Range-based for loop](https://en.cppreference.com/w/cpp/language/range-for)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Range-based For Loop
(0...10).each do |i|
  puts i
end
```

**Besonderheiten:**
- Verwendet `...` für exklusive Bereiche
- Verwendet `..` für inklusive Bereiche
- Muss mit `each` aufgerufen werden

**Weiterführende Links:**
- [Crystal Documentation - Ranges](https://crystal-lang.org/reference/1.11/syntax_and_semantics/literals/range.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Range-based For Loop (seit C# 8.0 mit System.Range)
for (int i = 0; i < 10; i++) {
    Console.WriteLine(i);
}

// Mit Ranges (seit C# 8.0)
var range = 0..10;
var array = new int[10];
for (int i = range.Start.Value; i < range.End.Value; i++) {
    Console.WriteLine(i);
}
```

**Besonderheiten:**
- C# hat keine direkte Range-basierte For-Schleife
- Seit C# 8.0: `System.Range` für Array-Slicing verfügbar
- Traditionelle For-Schleife wird verwendet

**Weiterführende Links:**
- [Microsoft C# Documentation - Indices and ranges](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/member-access-operators#range-operator-)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Range-based For Loop
for (var i in Iterable.generate(10, (i) => i)) {
  print(i);
}
```

**Besonderheiten:**
- Dart hat keine direkte Range-Syntax
- Verwendet `Iterable.generate` für numerische Bereiche

**Weiterführende Links:**
- [Dart Language Tour - For loops](https://dart.dev/guides/language/language-tour#for-loops)

</TabItem>
<TabItem value="go" label="Go">

```go
// Range-based For Loop
for i := range make([]int, 10) {
    fmt.Println(i)
}
```

**Besonderheiten:**
- Go hat keine direkte Range-Syntax für Zahlen
- Verwendet `range` über Slice mit `make`

**Weiterführende Links:**
- [Go Documentation - For statements](https://go.dev/ref/spec#For_statements)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Range-based For Loop
for (i in 0..<10) {
    println i
}
```

**Besonderheiten:**
- Verwendet `..<` für exklusive Bereiche
- Verwendet `..` für inklusive Bereiche

**Weiterführende Links:**
- [Groovy Documentation - Ranges](https://groovy-lang.org/syntax.html#_ranges)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Range-based For Loop
for (i in 0...10) {
    trace(i); // 0 bis 9
}
```

**Besonderheiten:**
- Verwendet `...` (drei Punkte) für exklusive End-Bereiche
- `0...10` iteriert von 0 bis 9 (10 ist exkludiert)
- Kein Operator für inklusive Bereiche

**Weiterführende Links:**
- [Haxe Documentation - For](https://haxe.org/manual/expression-for.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Range-based For Loop (seit Java 8 mit IntStream)
// Benötigt: import java.util.stream.IntStream;
IntStream.range(0, 10).forEach(i -> System.out.println(i));
```

**Besonderheiten:**
- Java hat keine direkte Range-Syntax
- Verwendet `IntStream.range` für numerische Bereiche (seit Java 8)
- `IntStream.rangeClosed` für inklusive Obergrenze

**Weiterführende Links:**
- [Oracle Java Documentation - IntStream](https://docs.oracle.com/javase/8/docs/api/java/util/stream/IntStream.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Range-based For Loop (mit Array.from)
for (const i of Array.from({length: 10}, (_, i) => i)) {
    console.log(i);
}
```

**Besonderheiten:**
- JavaScript hat keine direkte Range-Syntax
- Verwendet `Array.from` mit Generator-Funktion

**Weiterführende Links:**
- [MDN Web Docs - Array.from](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Range-based For Loop
for i in 0:9
    println(i)
end
```

**Besonderheiten:**
- Verwendet `:` für Bereiche
- Syntax: `start:end` (inklusiv)

**Weiterführende Links:**
- [Julia Documentation - Ranges](https://docs.julialang.org/en/v1/manual/arrays/#Ranges)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Range-based For Loop
for (i in 0 until 10) {
    println(i)
}
```

**Besonderheiten:**
- Verwendet `until` für exklusive Bereiche
- Verwendet `..` für inklusive Bereiche

**Weiterführende Links:**
- [Kotlin Documentation - Ranges](https://kotlinlang.org/docs/ranges.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Range-based For Loop
#eval show IO Unit from do
  for i in [0:10] do
    IO.println i

-- Range-based For Loop mit Schritt
#eval show IO Unit from do
  for i in [0:10:2] do
    IO.println i  -- 0, 2, 4, 6, 8
```

**Besonderheiten:**
- Verwendet `[start:end]` für exklusive Bereiche (Range-Syntax)
- Optionaler dritter Parameter für Schrittweite: `[start:end:step]`
- `for`-Schleifen in Lean 4 sind syntaktischer Zucker für `ForIn`-Instanzen
- Ranges erzeugen keine vollständige Liste, sondern iterieren lazy

**Weiterführende Links:**
- [Lean 4 Documentation - For loop](https://lean-lang.org/lean4/doc/control.html#for-loop)
- [Lean 4 Documentation - Ranges](https://lean-lang.org/lean4/doc/array.html#ranges)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Range-based For Loop (mit numerischer for)
for i = 0, 9 do
    print(i)
end
```

**Besonderheiten:**
- Verwendet numerische For-Schleife: `for i = start, end`
- Unterstützt optionales Inkrement: `for i = start, end, step`

**Weiterführende Links:**
- [Lua Documentation - For Statement](https://www.lua.org/manual/5.4/manual.html#3.3.5)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# Range-based For Loop
for i in range(10):
    print(i)
```

**Besonderheiten:**
- Python-ähnliche Syntax
- Verwendet `range(start, end)` oder `range(end)`

**Weiterführende Links:**
- [Mojo Documentation - Control Flow](https://docs.modular.com/mojo/manual/control-flow/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Range-based For Loop
for i in 0..<10:
    echo i
```

**Besonderheiten:**
- Verwendet `..<` für exklusive Bereiche
- Verwendet `..` für inklusive Bereiche

**Weiterführende Links:**
- [Nim Documentation - For Statement](https://nim-lang.org/docs/manual.html#statements-and-expressions-for-statement)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Range-based For Loop
for i in 0..<10 {
    fmt.println(i)
}
```

**Besonderheiten:**
- Verwendet `..<` für exklusive Bereiche
- Verwendet `..` für inklusive Bereiche

**Weiterführende Links:**
- [Odin Documentation - For Statements](https://odin-lang.org/docs/overview/#for-statements)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Range-based For Loop (mit .. Operator)
for my $i (0..9) {
    print "$i\n";
}
```

**Besonderheiten:**
- Verwendet `..` für Bereiche
- Erstellt Liste von Werten

**Weiterführende Links:**
- [Perl Documentation - Range Operator](https://perldoc.perl.org/perlop#Range-Operators)

</TabItem>
<TabItem value="php" label="PHP">

```php
// Range-based For Loop (mit range())
foreach (range(0, 9) as $i) {
    echo $i . "\n";
}
```

**Besonderheiten:**
- Verwendet `range()` Funktion
- Erstellt Array von Werten

**Weiterführende Links:**
- [PHP Documentation - range](https://www.php.net/manual/en/function.range.php)

</TabItem>
<TabItem value="python" label="Python">

```python
# Range-based For Loop
for i in range(10):
    print(i)
```

**Besonderheiten:**
- Verwendet `range(start, end)` oder `range(end)`
- `range` ist exklusiv (end wird nicht eingeschlossen)

**Weiterführende Links:**
- [Python Documentation - range](https://docs.python.org/3/library/stdtypes.html#range)

</TabItem>
<TabItem value="r" label="R">

```r
# Range-based For Loop
for (i in 0:9) {
    print(i)
}
```

**Besonderheiten:**
- Verwendet `:` für Bereiche
- Syntax: `start:end` (inklusiv)

**Weiterführende Links:**
- [R Documentation - Colon Operator](https://www.rdocumentation.org/packages/base/versions/3.6.2/topics/colon)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Range-based For Loop
(0...10).each do |i|
    puts i
end
```

**Besonderheiten:**
- Verwendet `...` für exklusive Bereiche
- Verwendet `..` für inklusive Bereiche
- Muss mit `each` aufgerufen werden

**Weiterführende Links:**
- [Ruby Documentation - Ranges](https://docs.ruby-lang.org/en/3.2/syntax/literals_rdoc.html#label-Ranges)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Range-based For Loop
for i in 0..10 {
    println!("{}", i);
}
```

**Besonderheiten:**
- Verwendet `..` für exklusive Bereiche
- Verwendet `..=` für inklusive Bereiche

**Weiterführende Links:**
- [Rust Documentation - Ranges](https://doc.rust-lang.org/std/ops/struct.Range.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Range-based For Loop
for (i <- 0 until 10) {
    println(i)
}
```

**Besonderheiten:**
- Verwendet `until` für exklusive Bereiche
- Verwendet `to` für inklusive Bereiche

**Weiterführende Links:**
- [Scala Documentation - Ranges](https://www.scala-lang.org/api/current/scala/collection/immutable/Range.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Range-based For Loop
for i in 0..<10 {
    print(i)
}
```

**Besonderheiten:**
- Verwendet `..<` für exklusive Bereiche
- Verwendet `...` für inklusive Bereiche

**Weiterführende Links:**
- [Swift Documentation - Ranges](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/controlflow/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Range-based For Loop (mit Array.from)
for (const i of Array.from({length: 10}, (_, i) => i)) {
    console.log(i);
}
```

**Besonderheiten:**
- TypeScript hat keine direkte Range-Syntax
- Verwendet `Array.from` mit Generator-Funktion

**Weiterführende Links:**
- [TypeScript Handbook - Iteration](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html)

</TabItem>
<TabItem value="v" label="V">

```v
// Range-based For Loop
for i in 0..10 {
    println(i)
}
```

**Besonderheiten:**
- Verwendet `..` für Bereiche
- Syntax: `start..end` (exklusiv)

**Weiterführende Links:**
- [V Documentation - Control Flow](https://github.com/vlang/v/blob/master/doc/docs.md#control-flow)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Range-based For Loop
for (0..10) |i| {
    std.debug.print("{}\n", .{i});
}
```

**Besonderheiten:**
- Verwendet `..` für exklusive Bereiche
- Syntax: `for (start..end) |variable|`

**Weiterführende Links:**
- [Zig Documentation - For](https://ziglang.org/documentation/0.11.0/#For)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% Range-based For Loop
for i = 1:10
    disp(i)
end

% Mit Schrittweite
for i = 0:0.5:5
    disp(i)
end
```

**Besonderheiten:**
- Syntax: `for variable = start:end` oder `for variable = start:step:end`
- Standardmäßig Range-basiert mit Colon-Operator
- Muss mit `end` abgeschlossen werden

**Weiterführende Links:**
- [MATLAB Documentation - for](https://www.mathworks.com/help/matlab/ref/for.html)

</TabItem>
</Tabs>


## 6.2.7. Do Loops (Fortran-style)

Schleifen mit expliziter Schleifenvariable, Startwert, Endwert und optionalem Inkrement. Typisch für Fortran und ähnliche Sprachen, die numerische Iterationen mit expliziter Variablenkontrolle ermöglichen.

### Sprachen {#sprachen}

<Tabs availableTabs={['fortran', 'matlab', 'octave']}>
<TabItem value="fortran" label="Fortran">

```fortran
! Do Loop (Fortran-style)
integer :: i
do i = 1, 10
    print *, i
end do

! Mit Inkrement
do i = 1, 10, 2
    print *, i
end do
```

**Besonderheiten:**
- Syntax: `do variable = start, end [, increment]`
- Muss mit `end do` abgeschlossen werden
- Inkrement ist optional (Standard: 1)

**Weiterführende Links:**
- [Fortran Standard - DO Statement](https://gcc.gnu.org/onlinedocs/gfortran/DO-statement.html)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% Do Loop (For-Loop mit expliziter Variablenkontrolle)
for i = 1:10
    disp(i)
end

% Mit Inkrement
for i = 1:2:10
    disp(i)
end
```

**Besonderheiten:**
- MATLAB verwendet `for` mit Range-Syntax
- Syntax: `for variable = start:increment:end`
- Muss mit `end` abgeschlossen werden

**Weiterführende Links:**
- [MATLAB Documentation - for](https://www.mathworks.com/help/matlab/ref/for.html)

</TabItem>
<TabItem value="octave" label="Octave">

```matlab
% Do Loop (For-Loop mit expliziter Variablenkontrolle)
for i = 1:10
    disp(i)
endfor

% Mit Inkrement
for i = 1:2:10
    disp(i)
endfor
```

**Besonderheiten:**
- Octave verwendet `for` mit Range-Syntax
- Syntax: `for variable = start:increment:end`
- Muss mit `endfor` abgeschlossen werden

**Weiterführende Links:**
- [GNU Octave Documentation - The for Statement](https://octave.org/doc/v8.1.0/The-for-Statement.html)

</TabItem>
</Tabs>


## 6.2.8. Comprehensions (List, Dict, Set)

Kompakte Syntax zur Erstellung von Listen, Dictionaries und Sets durch Transformation und Filterung bestehender Sammlungen. Ermöglichen es, komplexe Operationen in einer einzigen, lesbaren Zeile auszudrücken.

### Sprachen {#sprachen}

<Tabs availableTabs={['clojure', 'common-lisp', 'elixir', 'erlang', 'fsharp', 'haskell', 'idris', 'julia', 'nim', 'prolog', 'python', 'racket', 'scala', 'scheme', 'wolfram-language']}>
<TabItem value="clojure" label="Clojure">

```clojure
;; List Comprehension (for)
(def numbers [1, 2, 3, 4, 5])
(def squared (for [n numbers] (* n n)))

;; Mit Bedingung
(def evens (for [n numbers :when (even? n)] n))
```

**Besonderheiten:**
- Verwendet `for` mit Bindungen
- Unterstützt `:when` für Filterung
- Unterstützt `:let` für lokale Bindungen

**Weiterführende Links:**
- [Clojure Documentation - for](https://clojure.org/reference/special_forms#for)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; List Comprehension (loop)
(loop for n in '(1 2 3 4 5)
      collect (* n n))

;; Mit Bedingung
(loop for n in '(1 2 3 4 5)
      when (evenp n)
      collect n)
```

**Besonderheiten:**
- Verwendet `loop` mit `collect`
- Unterstützt `when` für Filterung

**Weiterführende Links:**
- [Common Lisp HyperSpec - loop](http://www.lispworks.com/documentation/HyperSpec/Body/m_loop.htm)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# List Comprehension (for)
numbers = [1, 2, 3, 4, 5]
squared = for n <- numbers, do: n * n

# Mit Bedingung
evens = for n <- numbers, rem(n, 2) == 0, do: n
```

**Besonderheiten:**
- Syntax: `for variable <- collection, condition, do: expression`
- Unterstützt mehrere Generatoren und Bedingungen

**Weiterführende Links:**
- [Elixir Documentation - Comprehensions](https://hexdocs.pm/elixir/Kernel.SpecialForms.html#for/1)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% List Comprehension
Numbers = [1, 2, 3, 4, 5],
Squared = [N * N || N <- Numbers].

% Mit Bedingung
Evens = [N || N <- Numbers, N rem 2 =:= 0].
```

**Besonderheiten:**
- Syntax: `[Expression || Generator, Condition]`
- Unterstützt mehrere Generatoren und Bedingungen

**Weiterführende Links:**
- [Erlang Documentation - List Comprehensions](https://www.erlang.org/doc/programming_examples/list_comprehensions.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// List Comprehension (List Comprehension)
let numbers = [1; 2; 3; 4; 5]
let squared = [for n in numbers -> n * n]

// Mit Bedingung
let evens = [for n in numbers do if n % 2 = 0 then yield n]
```

**Besonderheiten:**
- Syntax: `[for variable in collection -> expression]`
- Unterstützt `if...then yield` für Filterung

**Weiterführende Links:**
- [F# Documentation - List Expressions](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/lists#list-expressions)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- List Comprehension
numbers = [1, 2, 3, 4, 5]
squared = [n * n | n <- numbers]

-- Mit Bedingung
evens = [n | n <- numbers, even n]
```

**Besonderheiten:**
- Syntax: `[expression | generator, condition]`
- Unterstützt mehrere Generatoren und Bedingungen

**Weiterführende Links:**
- [Haskell Documentation - List Comprehensions](https://www.haskell.org/onlinereport/haskell2010/haskellch3.html#x8-420003.11)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- List Comprehension
numbers : List Int
numbers = [1, 2, 3, 4, 5]
squared : List Int
squared = [n * n | n <- numbers]

-- Mit Bedingung
evens : List Int
evens = [n | n <- numbers, mod n 2 == 0]
```

**Besonderheiten:**
- Syntax: `[expression | generator, condition]`
- Unterstützt mehrere Generatoren und Bedingungen

**Weiterführende Links:**
- [Idris Documentation - List Comprehensions](https://idris2.readthedocs.io/en/latest/tutorial/starting.html#list-comprehensions)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# List Comprehension
numbers = [1, 2, 3, 4, 5]
squared = [n * n for n in numbers]

# Mit Bedingung
evens = [n for n in numbers if n % 2 == 0]
```

**Besonderheiten:**
- Syntax: `[expression for variable in collection if condition]`
- Unterstützt mehrere Generatoren und Bedingungen

**Weiterführende Links:**
- [Julia Documentation - Comprehensions](https://docs.julialang.org/en/v1/manual/arrays/#Comprehensions)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% List Comprehension mit findall/3
:- Numbers = [1, 2, 3, 4, 5],
   findall(S, (member(N, Numbers), S is N * N), Squared),
   write(Squared).  % [1, 4, 9, 16, 25]

% Mit Bedingung (Filterung)
:- Numbers = [1, 2, 3, 4, 5],
   findall(N, (member(N, Numbers), N mod 2 =:= 0), Evens),
   write(Evens).  % [2, 4]

% Verschachtelte Comprehension
:- findall(X-Y, (between(1, 3, X), between(1, 3, Y)), Pairs),
   write(Pairs).  % [1-1, 1-2, 1-3, 2-1, ...]
```

**Besonderheiten:**
- `findall(Template, Goal, List)` sammelt alle Lösungen – entspricht einer List Comprehension
- `bagof/3` wie `findall/3`, schlägt aber fehl wenn keine Lösung existiert
- `setof/3` wie `bagof/3`, entfernt jedoch Duplikate und sortiert das Ergebnis
- Filterung geschieht durch zusätzliche Bedingungen im Goal

**Weiterführende Links:**
- [SWI-Prolog – findall/3](https://www.swi-prolog.org/pldoc/doc_for?object=findall/3)

</TabItem>
<TabItem value="python" label="Python">

```python
# List Comprehension
numbers = [1, 2, 3, 4, 5]
squared = [n * n for n in numbers]

# Mit Bedingung
evens = [n for n in numbers if n % 2 == 0]

# Dict Comprehension
squared_dict = {n: n * n for n in numbers}

# Set Comprehension
squared_set = {n * n for n in numbers}
```

**Besonderheiten:**
- Syntax: `[expression for variable in collection if condition]`
- Unterstützt List, Dict und Set Comprehensions
- Unterstützt mehrere Generatoren und Bedingungen

**Weiterführende Links:**
- [Python Documentation - List Comprehensions](https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
;; List Comprehension (for/list)
(define numbers '(1 2 3 4 5))
(define squared (for/list ([n numbers]) (* n n)))

;; Mit Bedingung
(define evens (for/list ([n numbers] #:when (even? n)) n))
```

**Besonderheiten:**
- Verwendet `for/list` mit Bindungen
- Unterstützt `#:when` für Filterung

**Weiterführende Links:**
- [Racket Documentation - for](https://docs.racket-lang.org/reference/for.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// List Comprehension (for comprehension)
val numbers = List(1, 2, 3, 4, 5)
val squared = for (n <- numbers) yield n * n

// Mit Bedingung
val evens = for (n <- numbers if n % 2 == 0) yield n
```

**Besonderheiten:**
- Syntax: `for (generator if condition) yield expression`
- Unterstützt mehrere Generatoren und Bedingungen
- Muss `yield` verwenden

**Weiterführende Links:**
- [Scala Documentation - For Comprehensions](https://docs.scala-lang.org/tour/for-comprehensions.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; List Comprehension (SRFI-42)
(import (srfi 42))
(define numbers '(1 2 3 4 5))
(define squared (list-ec (: n numbers) (* n n)))

;; Mit Bedingung
(define evens (list-ec (: n numbers) (if (even? n)) n))
```

**Besonderheiten:**
- Verwendet SRFI-42 (Eager Comprehensions)
- Syntax: `(list-ec (: variable collection) expression)`
- Unterstützt `if` für Filterung

**Weiterführende Links:**
- [SRFI-42 Documentation](https://srfi.schemers.org/srfi-42/srfi-42.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Benötigt: import sugar
# List Comprehensions mit collect
let squares = collect:
  for i in 0..<10:
    i * i

let evens = collect:
  for i in 0..<20:
    if i mod 2 == 0:
      i

echo squares  # @[0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
echo evens    # @[0, 2, 4, 6, 8, 10, 12, 14, 16, 18]
```

**Besonderheiten:**
- `collect` Macro aus dem `sugar`-Modul (seit Nim 1.4)
- Unterstützt Filterung mit `if`
- Erzeugt `seq`-Typen

**Weiterführende Links:**
- [Nim Documentation - Sugar Module](https://nim-lang.org/docs/sugar.html#collect.m%2Cuntyped)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* List Comprehension mit Table *)
squares = Table[i^2, {i, 1, 10}]

(* Mit Bedingung *)
evenSquares = Select[Table[i^2, {i, 1, 10}], EvenQ]

(* Verschachtelt *)
pairs = Flatten[Table[{i, j}, {i, 1, 3}, {j, 1, 3}], 1]
```

**Besonderheiten:**
- `Table[]` ist das Äquivalent zu List Comprehensions
- `Select[]` für Filter-Bedingungen
- Unterstützt mehrdimensionale Iteratoren

**Weiterführende Links:**
- [Wolfram Language Documentation - Table](https://reference.wolfram.com/language/ref/Table.html)

</TabItem>
</Tabs>


## 6.2.9. For-Comprehensions (Scala-style)

Monadische For-Comprehensions, die es ermöglichen, mehrere Monaden zu kombinieren und zu transformieren. Bieten eine deklarative Syntax für sequenzielle Operationen über Monaden wie Option, List, Future, etc.

### Sprachen {#sprachen}

<Tabs availableTabs={['fsharp', 'haskell', 'lean4', 'scala']}>
<TabItem value="fsharp" label="F#">

```fsharp
// For-Comprehension (Computation Expression)
let numbers = [1; 2; 3; 4; 5]
let result = 
    [for x in numbers do
     for y in numbers do
     if x + y = 5 then yield (x, y)]
```

**Besonderheiten:**
- Verwendet Computation Expressions
- Syntax: `[for variable in collection do ... yield expression]`
- Unterstützt mehrere Generatoren

**Weiterführende Links:**
- [F# Documentation - Computation Expressions](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/computation-expressions)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- For-Comprehension (do notation)
import Control.Monad

result = do
    x <- [1, 2, 3, 4, 5]
    y <- [1, 2, 3, 4, 5]
    guard (x + y == 5)
    return (x, y)
```

**Besonderheiten:**
- Verwendet `do` Notation für Monaden
- Syntax: `do { variable <- monad; ... return expression }`
- Unterstützt `guard` für Filterung

**Weiterführende Links:**
- [Haskell Documentation - do notation](https://www.haskell.org/onlinereport/haskell2010/haskellch3.html#x8-380003.14)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- For-Comprehension (do Notation mit List-Monade)
def result : List (Nat × Nat) := do
  let x ← [1, 2, 3, 4, 5]
  let y ← [1, 2, 3, 4, 5]
  guard (x + y = 5)
  return (x, y)

#eval result  -- [(1, 4), (2, 3), (3, 2), (4, 1)]
```

**Besonderheiten:**
- Lean 4 hat native `do`-Notation für monadische Operationen
- `List` hat eine `Monad`- und `Alternative`-Instanz
- `guard` filtert Ergebnisse basierend auf einer Bedingung (benötigt `Alternative`)
- `←` bindet einen Wert aus der Monade (entspricht Haskells `<-`)

**Weiterführende Links:**
- [Lean 4 Documentation - do-notation](https://lean-lang.org/lean4/doc/do.html)
- [Lean 4 Documentation - Monads](https://lean-lang.org/lean4/doc/monads.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// For-Comprehension
val numbers = List(1, 2, 3, 4, 5)
val result = for {
    x <- numbers
    y <- numbers
    if x + y == 5
} yield (x, y)
```

**Besonderheiten:**
- Syntax: `for { generator; condition } yield expression`
- Unterstützt mehrere Generatoren und Bedingungen
- Funktioniert mit allen Monaden (Option, List, Future, etc.)

**Weiterführende Links:**
- [Scala Documentation - For Comprehensions](https://docs.scala-lang.org/tour/for-comprehensions.html)

</TabItem>
</Tabs>


## 6.2.10. Loop Control (break, continue, labels)

Mechanismen zur Kontrolle des Schleifenablaufs. Ermöglichen es, Schleifen vorzeitig zu beenden (break), Iterationen zu überspringen (continue) oder verschachtelte Schleifen gezielt zu steuern (labels).

### Sprachen {#sprachen}

<Tabs availableTabs={['ada', 'carbon', 'cpp', 'd', 'dart', 'fortran', 'go', 'groovy', 'java', 'javascript', 'kotlin', 'mojo', 'objective-c', 'odin', 'perl', 'php', 'rust', 'swift', 'typescript', 'v', 'zig']} yellowTabs={['crystal', 'csharp', 'haxe', 'julia', 'lua', 'matlab', 'nim', 'object-pascal', 'octave', 'python', 'r', 'ruby', 'scala', 'vbnet', 'wolfram-language']} orangeTabs={['c', 'common-lisp', 'ocaml']}>
<TabItem value="ada" label="Ada">

```ada
-- Break (exit)
for i in 1..10 loop
    if i > 5 then
        exit;
    end if;
    Put_Line(Integer'Image(i));
end loop;

-- Continue (next)
for i in 1..10 loop
    if i mod 2 = 0 then
        next;
    end if;
    Put_Line(Integer'Image(i));
end loop;

-- Labels
Outer: for i in 1..3 loop
    Inner: for j in 1..3 loop
        if i = 2 and j = 2 then
            exit Outer;
        end if;
    end loop Inner;
end loop Outer;
```

**Besonderheiten:**
- Verwendet `exit` für break
- Verwendet `next` für continue
- Unterstützt Labels für verschachtelte Schleifen

**Weiterführende Links:**
- [Ada Reference Manual - Exit Statement](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-5-7.html)

</TabItem>
<TabItem value="c" label="C">

```c
// Break
for (int i = 1; i <= 10; i++) {
    if (i > 5) {
        break;
    }
    printf("%d\n", i);
}

// Continue
for (int i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        continue;
    }
    printf("%d\n", i);
}

// Verschachtelte Schleifen mit goto verlassen
for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 3; j++) {
        if (i == 2 && j == 2) {
            goto done;
        }
    }
}
done: ;
```

**Besonderheiten:**
- `break` beendet die innerste Schleife
- `continue` überspringt zur nächsten Iteration
- Kein labeled break/continue wie in Java – `goto` wird als Ersatz verwendet

**Weiterführende Links:**
- [C Standard - break and continue](https://en.cppreference.com/w/c/language/break)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Break
for (var i: i32 = 1; i <= 10; i++) {
    if (i > 5) {
        break;
    }
    Print(i);
}

// Continue
for (var i: i32 = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        continue;
    }
    Print(i);
}
```

**Besonderheiten:**
- Experimentelle Sprache, Syntax kann sich noch ändern
- C++-ähnliche Syntax

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Break
for (int i = 1; i <= 10; i++) {
    if (i > 5) {
        break;
    }
    std::cout << i << std::endl;
}

// Continue
for (int i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        continue;
    }
    std::cout << i << std::endl;
}

// Labels (mit goto)
outer: for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 3; j++) {
        if (i == 2 && j == 2) {
            goto outer;
        }
    }
}
```

**Besonderheiten:**
- `break` beendet die innere Schleife
- `continue` überspringt zur nächsten Iteration
- Labels nur mit `goto` möglich

**Weiterführende Links:**
- [cppreference.com - break and continue](https://en.cppreference.com/w/cpp/language/break)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Break
(1..10).each do |i|
  break if i > 5
  puts i
end

# Continue (next)
(1..10).each do |i|
  next if i % 2 == 0
  puts i
end
```

**Besonderheiten:**
- Verwendet `break` für break
- Verwendet `next` für continue
- Labels werden nicht direkt unterstützt

**Weiterführende Links:**
- [Crystal Documentation - Control Flow](https://crystal-lang.org/reference/1.11/syntax_and_semantics/break_next_return.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Break
for (int i = 1; i <= 10; i++) {
    if (i > 5) {
        break;
    }
    Console.WriteLine(i);
}

// Continue
for (int i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        continue;
    }
    Console.WriteLine(i);
}
```

**Besonderheiten:**
- `break` beendet die innere Schleife
- `continue` überspringt zur nächsten Iteration
- Labels werden nicht direkt unterstützt

**Weiterführende Links:**
- [Microsoft C# Documentation - break and continue](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/statements/jump-statements)

</TabItem>
<TabItem value="d" label="D">

```d
// Break
for (int i = 1; i <= 10; i++) {
    if (i > 5) {
        break;
    }
    writeln(i);
}

// Continue
for (int i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        continue;
    }
    writeln(i);
}

// Labels (mit goto)
outer: for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 3; j++) {
        if (i == 2 && j == 2) {
            goto outer;
        }
    }
}
```

**Besonderheiten:**
- `break` beendet die innere Schleife
- `continue` überspringt zur nächsten Iteration
- Labels nur mit `goto` möglich

**Weiterführende Links:**
- [D Language Specification - Break and Continue](https://dlang.org/spec/statement.html#break_continue)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Break
for (int i = 1; i <= 10; i++) {
  if (i > 5) {
    break;
  }
  print(i);
}

// Continue
for (int i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    continue;
  }
  print(i);
}

// Labels
outer: for (int i = 1; i <= 3; i++) {
  inner: for (int j = 1; j <= 3; j++) {
    if (i == 2 && j == 2) {
      break outer;
    }
  }
}
```

**Besonderheiten:**
- `break` beendet die innere Schleife
- `continue` überspringt zur nächsten Iteration
- Unterstützt Labels: `break label` und `continue label`

**Weiterführende Links:**
- [Dart Language Tour - Break and continue](https://dart.dev/guides/language/language-tour#break-and-continue)

</TabItem>
<TabItem value="go" label="Go">

```go
// Break
for i := 1; i <= 10; i++ {
    if i > 5 {
        break
    }
    fmt.Println(i)
}

// Continue
for i := 1; i <= 10; i++ {
    if i % 2 == 0 {
        continue
    }
    fmt.Println(i)
}

// Labels
outer: for i := 1; i <= 3; i++ {
    for j := 1; j <= 3; j++ {
        if i == 2 && j == 2 {
            break outer
        }
    }
}
```

**Besonderheiten:**
- `break` beendet die innere Schleife
- `continue` überspringt zur nächsten Iteration
- Unterstützt Labels: `break label` und `continue label`

**Weiterführende Links:**
- [Go Documentation - Break and continue](https://go.dev/ref/spec#Break_statements)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Break
for (int i = 1; i <= 10; i++) {
    if (i > 5) {
        break
    }
    println i
}

// Continue
for (int i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        continue
    }
    println i
}

// Labels
outer: for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 3; j++) {
        if (i == 2 && j == 2) {
            break outer
        }
    }
}
```

**Besonderheiten:**
- `break` beendet die innere Schleife
- `continue` überspringt zur nächsten Iteration
- Unterstützt Labels: `break label` und `continue label`

**Weiterführende Links:**
- [Groovy Documentation - Looping Structures](https://groovy-lang.org/semantics.html#_looping_structures)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Break
for (i in 1...11) {
    if (i > 5) {
        break;
    }
    trace(i);
}

// Continue
for (i in 1...11) {
    if (i % 2 == 0) {
        continue;
    }
    trace(i);
}
```

**Besonderheiten:**
- `break` beendet die innere Schleife
- `continue` überspringt zur nächsten Iteration
- Labels werden nicht direkt unterstützt

**Weiterführende Links:**
- [Haxe Documentation - Control Flow](https://haxe.org/manual/expression-control-flow.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Break
for (int i = 1; i <= 10; i++) {
    if (i > 5) {
        break;
    }
    System.out.println(i);
}

// Continue
for (int i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        continue;
    }
    System.out.println(i);
}

// Labels
outer: for (int i = 1; i <= 3; i++) {
    inner: for (int j = 1; j <= 3; j++) {
        if (i == 2 && j == 2) {
            break outer;
        }
    }
}
```

**Besonderheiten:**
- `break` beendet die innere Schleife
- `continue` überspringt zur nächsten Iteration
- Unterstützt Labels: `break label` und `continue label`

**Weiterführende Links:**
- [Oracle Java Documentation - Branching Statements](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/branch.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Break
for (let i = 1; i <= 10; i++) {
    if (i > 5) {
        break;
    }
    console.log(i);
}

// Continue
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}

// Labels
outer: for (let i = 1; i <= 3; i++) {
    inner: for (let j = 1; j <= 3; j++) {
        if (i === 2 && j === 2) {
            break outer;
        }
    }
}
```

**Besonderheiten:**
- `break` beendet die innere Schleife
- `continue` überspringt zur nächsten Iteration
- Unterstützt Labels: `break label` und `continue label`

**Weiterführende Links:**
- [MDN Web Docs - break and continue](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Break
for i in 1:10
    if i > 5
        break
    end
    println(i)
end

# Continue
for i in 1:10
    if i % 2 == 0
        continue
    end
    println(i)
end
```

**Besonderheiten:**
- `break` beendet die innere Schleife
- `continue` überspringt zur nächsten Iteration
- Labels werden nicht direkt unterstützt

**Weiterführende Links:**
- [Julia Documentation - Control Flow](https://docs.julialang.org/en/v1/manual/control-flow/#break-and-continue)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Break
for (i in 1..10) {
    if (i > 5) {
        break
    }
    println(i)
}

// Continue
for (i in 1..10) {
    if (i % 2 == 0) {
        continue
    }
    println(i)
}

// Labels
outer@ for (i in 1..3) {
    inner@ for (j in 1..3) {
        if (i == 2 && j == 2) {
            break@outer
        }
    }
}
```

**Besonderheiten:**
- `break` beendet die innere Schleife
- `continue` überspringt zur nächsten Iteration
- Unterstützt Labels: `break@label` und `continue@label`

**Weiterführende Links:**
- [Kotlin Documentation - Returns and jumps](https://kotlinlang.org/docs/returns.html#break-and-continue-labels)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Break
for i = 1, 10 do
    if i > 5 then
        break
    end
    print(i)
end

-- Continue (nicht direkt unterstützt, mit goto emuliert)
for i = 1, 10 do
    if i % 2 == 0 then
        goto continue
    end
    print(i)
    ::continue::
end

-- Labels (mit goto)
for i = 1, 3 do
    for j = 1, 3 do
        if i == 2 and j == 2 then
            goto outer
        end
    end
    ::outer::
end
```

**Besonderheiten:**
- `break` beendet die innere Schleife
- `continue` wird mit `goto` emuliert (seit Lua 5.2)
- Labels mit `goto` möglich

**Weiterführende Links:**
- [Lua Documentation - Control Structures](https://www.lua.org/manual/5.4/manual.html#3.3.4)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% Break
for i = 1:10
    if i > 5
        break
    end
    disp(i)
end

% Continue
for i = 1:10
    if mod(i, 2) == 0
        continue
    end
    disp(i)
end
```

**Besonderheiten:**
- `break` beendet die innere Schleife
- `continue` überspringt zur nächsten Iteration
- Labels werden nicht direkt unterstützt

**Weiterführende Links:**
- [MATLAB Documentation - break and continue](https://www.mathworks.com/help/matlab/ref/break.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# Break
for i in range(1, 11):
    if i > 5:
        break
    print(i)

# Continue
for i in range(1, 11):
    if i % 2 == 0:
        continue
    print(i)
```

**Besonderheiten:**
- Python-ähnliche Syntax
- `break` beendet die innere Schleife
- `continue` überspringt zur nächsten Iteration

**Weiterführende Links:**
- [Mojo Documentation - Control Flow](https://docs.modular.com/mojo/manual/control-flow/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Break
for i in 1..10:
    if i > 5:
        break
    echo i

# Continue
for i in 1..10:
    if i mod 2 == 0:
        continue
    echo i
```

**Besonderheiten:**
- `break` beendet die innere Schleife
- `continue` überspringt zur nächsten Iteration
- Labels werden nicht direkt unterstützt

**Weiterführende Links:**
- [Nim Documentation - Break and Continue](https://nim-lang.org/docs/manual.html#statements-and-expressions-break-statement)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Break
for (int i = 1; i <= 10; i++) {
    if (i > 5) {
        break;
    }
    NSLog(@"%d", i);
}

// Continue
for (int i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        continue;
    }
    NSLog(@"%d", i);
}

// Labels (mit goto)
outer: for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 3; j++) {
        if (i == 2 && j == 2) {
            goto outer;
        }
    }
}
```

**Besonderheiten:**
- `break` beendet die innere Schleife
- `continue` überspringt zur nächsten Iteration
- Labels nur mit `goto` möglich

**Weiterführende Links:**
- [Apple Documentation - Control Flow](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/FoundationTypesandCollections/FoundationTypesandCollections.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Break
var i: Integer;
begin
    for i := 1 to 10 do
    begin
        if i > 5 then
            Break;
        WriteLn(i);
    end;
end;

// Continue
for i := 1 to 10 do
begin
    if i mod 2 = 0 then
        Continue;
    WriteLn(i);
end;

// Labels (mit goto)
label outer;
var i, j: Integer;
begin
    for i := 1 to 3 do
    begin
        for j := 1 to 3 do
        begin
            if (i = 2) and (j = 2) then
                goto outer;
        end;
    end;
    outer:
end;
```

**Besonderheiten:**
- Verwendet `Break` für break
- Verwendet `Continue` für continue
- Labels mit `goto` möglich

**Weiterführende Links:**
- [Free Pascal Documentation - Break and Continue](https://www.freepascal.org/docs-html/ref/refse25.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Break und Continue werden nicht direkt unterstützt *)
(* Wird mit Exceptions oder rekursiven Funktionen emuliert *)
let rec loop i =
    if i > 10 then ()
    else if i > 5 then ()
    else (
        print_int i;
        print_newline ();
        loop (i + 1)
    )
```

**Besonderheiten:**
- OCaml hat keine `break` oder `continue` Statements
- Wird typischerweise mit rekursiven Funktionen oder Exceptions emuliert

**Weiterführende Links:**
- [OCaml Documentation - Control Structures](https://v2.ocaml.org/manual/expr.html#s:control-structures)

</TabItem>
<TabItem value="octave" label="Octave">

```matlab
% Break
for i = 1:10
    if i > 5
        break
    endif
    disp(i)
endfor

% Continue
for i = 1:10
    if mod(i, 2) == 0
        continue
    endif
    disp(i)
endfor
```

**Besonderheiten:**
- `break` beendet die innere Schleife
- `continue` überspringt zur nächsten Iteration
- Labels werden nicht direkt unterstützt

**Weiterführende Links:**
- [GNU Octave Documentation - Break and Continue](https://octave.org/doc/v8.1.0/Break-and-Continue.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Break
for i := 1; i <= 10; i += 1 {
    if i > 5 {
        break
    }
    fmt.println(i)
}

// Continue
for i := 1; i <= 10; i += 1 {
    if i % 2 == 0 {
        continue
    }
    fmt.println(i)
}

// Labels
outer: for i := 1; i <= 3; i += 1 {
    for j := 1; j <= 3; j += 1 {
        if i == 2 && j == 2 {
            break outer
        }
    }
}
```

**Besonderheiten:**
- `break` beendet die innere Schleife
- `continue` überspringt zur nächsten Iteration
- Unterstützt Labels: `break label` und `continue label`

**Weiterführende Links:**
- [Odin Documentation - For Statements](https://odin-lang.org/docs/overview/#for-statements)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Break (last)
for my $i (1..10) {
    if ($i > 5) {
        last;
    }
    print "$i\n";
}

# Continue (next)
for my $i (1..10) {
    if ($i % 2 == 0) {
        next;
    }
    print "$i\n";
}

# Labels
OUTER: for my $i (1..3) {
    INNER: for my $j (1..3) {
        if ($i == 2 && $j == 2) {
            last OUTER;
        }
    }
}
```

**Besonderheiten:**
- Verwendet `last` für break
- Verwendet `next` für continue
- Unterstützt Labels: `last label` und `next label`

**Weiterführende Links:**
- [Perl Documentation - Loop Control](https://perldoc.perl.org/perlsyn#Loop-Control)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
// Break
for ($i = 1; $i <= 10; $i++) {
    if ($i > 5) {
        break;
    }
    echo $i . "\n";
}

// Continue
for ($i = 1; $i <= 10; $i++) {
    if ($i % 2 == 0) {
        continue;
    }
    echo $i . "\n";
}

// Multi-Level Break/Continue
for ($i = 0; $i < 3; $i++) {
    for ($j = 0; $j < 3; $j++) {
        if ($j == 1) break 2; // Bricht beide Schleifen ab
    }
}
?>
```

**Besonderheiten:**
- `break` beendet die innere Schleife
- `continue` überspringt zur nächsten Iteration
- `break N` und `continue N` für Multi-Level-Break/Continue (N = Anzahl der Schleifenebenen)
- Keine benannten Labels wie in Java oder Kotlin

**Weiterführende Links:**
- [PHP Documentation - break](https://www.php.net/manual/en/control-structures.break.php)

</TabItem>
<TabItem value="python" label="Python">

```python
# Break
for i in range(1, 11):
    if i > 5:
        break
    print(i)

# Continue
for i in range(1, 11):
    if i % 2 == 0:
        continue
    print(i)
```

**Besonderheiten:**
- `break` beendet die innere Schleife
- `continue` überspringt zur nächsten Iteration
- Labels werden nicht direkt unterstützt

**Weiterführende Links:**
- [Python Documentation - break and continue](https://docs.python.org/3/tutorial/controlflow.html#break-and-continue-statements)

</TabItem>
<TabItem value="r" label="R">

```r
# Break
for (i in 1:10) {
    if (i > 5) {
        break
    }
    print(i)
}

# Next (continue)
for (i in 1:10) {
    if (i %% 2 == 0) {
        next
    }
    print(i)
}
```

**Besonderheiten:**
- `break` beendet die innere Schleife
- Verwendet `next` für continue
- Labels werden nicht direkt unterstützt

**Weiterführende Links:**
- [R Documentation - Control Structures](https://www.rdocumentation.org/packages/base/versions/3.6.2/topics/Control)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Break
(1..10).each do |i|
    break if i > 5
    puts i
end

# Continue (next)
(1..10).each do |i|
    next if i % 2 == 0
    puts i
end
```

**Besonderheiten:**
- `break` beendet die innere Schleife
- Verwendet `next` für continue
- Labels werden nicht direkt unterstützt

**Weiterführende Links:**
- [Ruby Documentation - Control Expressions](https://docs.ruby-lang.org/en/3.2/syntax/control_expressions_rdoc.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Break
for i in 1..=10 {
    if i > 5 {
        break;
    }
    println!("{}", i);
}

// Continue
for i in 1..=10 {
    if i % 2 == 0 {
        continue;
    }
    println!("{}", i);
}

// Labels
'outer: for i in 1..=3 {
    'inner: for j in 1..=3 {
        if i == 2 && j == 2 {
            break 'outer;
        }
    }
}
```

**Besonderheiten:**
- `break` beendet die innere Schleife
- `continue` überspringt zur nächsten Iteration
- Unterstützt Labels: `break 'label` und `continue 'label`

**Weiterführende Links:**
- [Rust Documentation - Loops](https://doc.rust-lang.org/book/ch03-05-control-flow.html#repetition-with-loops)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Break (seit Scala 2.8, nicht empfohlen)
import scala.util.control.Breaks._
breakable {
    for (i <- 1 to 10) {
        if (i > 5) {
            break
        }
        println(i)
    }
}

// Continue (mit if emuliert)
for (i <- 1 to 10) {
    if (i % 2 != 0) {
        println(i)
    }
}
```

**Besonderheiten:**
- `break` wird mit `breakable` Block verwendet (nicht empfohlen)
- `continue` wird typischerweise mit `if` emuliert
- Labels werden nicht direkt unterstützt

**Weiterführende Links:**
- [Scala Documentation - Break and Continue](https://docs.scala-lang.org/tour/tour-of-scala.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Break
for i in 1...10 {
    if i > 5 {
        break
    }
    print(i)
}

// Continue
for i in 1...10 {
    if i % 2 == 0 {
        continue
    }
    print(i)
}

// Labels
outer: for i in 1...3 {
    inner: for j in 1...3 {
        if i == 2 && j == 2 {
            break outer
        }
    }
}
```

**Besonderheiten:**
- `break` beendet die innere Schleife
- `continue` überspringt zur nächsten Iteration
- Unterstützt Labels: `break label` und `continue label`

**Weiterführende Links:**
- [Swift Documentation - Control Flow](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/controlflow/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Break
for (let i = 1; i <= 10; i++) {
    if (i > 5) {
        break;
    }
    console.log(i);
}

// Continue
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}

// Labels
outer: for (let i = 1; i <= 3; i++) {
    inner: for (let j = 1; j <= 3; j++) {
        if (i === 2 && j === 2) {
            break outer;
        }
    }
}
```

**Besonderheiten:**
- `break` beendet die innere Schleife
- `continue` überspringt zur nächsten Iteration
- Unterstützt Labels: `break label` und `continue label`

**Weiterführende Links:**
- [TypeScript Handbook - Iteration](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Exit For (Break)
For i As Integer = 1 To 10
    If i > 5 Then
        Exit For
    End If
    Console.WriteLine(i)
Next

' Continue For
For i As Integer = 1 To 10
    If i Mod 2 = 0 Then
        Continue For
    End If
    Console.WriteLine(i)
Next
```

**Besonderheiten:**
- Verwendet `Exit For` für break
- Verwendet `Continue For` für continue
- Labels werden nicht direkt unterstützt

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Exit Statement](https://learn.microsoft.com/en-us/dotnet/visual-basic/language-reference/statements/exit-statement)

</TabItem>
<TabItem value="v" label="V">

```v
// Break
for i := 1; i <= 10; i++ {
    if i > 5 {
        break
    }
    println(i)
}

// Continue
for i := 1; i <= 10; i++ {
    if i % 2 == 0 {
        continue
    }
    println(i)
}

// Labels
outer: for i := 1; i <= 3; i++ {
    inner: for j := 1; j <= 3; j++ {
        if i == 2 && j == 2 {
            break outer
        }
    }
}
```

**Besonderheiten:**
- `break` beendet die innere Schleife
- `continue` überspringt zur nächsten Iteration
- Unterstützt Labels: `break label` und `continue label`

**Weiterführende Links:**
- [V Documentation - Control Flow](https://github.com/vlang/v/blob/master/doc/docs.md#control-flow)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Break
for (0..10) |i| {
    if (i > 5) {
        break;
    }
    std.debug.print("{}\n", .{i});
}

// Continue
for (0..10) |i| {
    if (i % 2 == 0) {
        continue;
    }
    std.debug.print("{}\n", .{i});
}

// Labels
outer: for (0..3) |i| {
    for (0..3) |j| {
        if (i == 1 and j == 1) {
            break :outer;
        }
    }
}

// While mit break-Wert
const result = while (true) {
    // ...
    break 42;
} else 0;
```

**Besonderheiten:**
- `break` beendet die innere Schleife
- `continue` überspringt zur nächsten Iteration
- Unterstützt Labels: `break :label` und `continue :label`
- `break` kann einen Wert zurückgeben (Schleife als Ausdruck)

**Weiterführende Links:**
- [Zig Documentation - For](https://ziglang.org/documentation/master/#for)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Break (return aus loop)
(loop for i from 0
      when (>= i 5) return i
      do (format t "~a~%" i))

;; Return-from (benannter Block)
(block outer
  (loop for i from 0 to 10
        do (when (= i 5) (return-from outer i))))

;; Loop-finish
(loop for i from 0 to 10
      when (= i 5) do (loop-finish)
      collect i)  ; (0 1 2 3 4)
```

**Besonderheiten:**
- `return` bricht aus dem nächsten umgebenden `nil`-Block aus (z.B. `loop`)
- `return-from` bricht aus einem benannten Block aus
- `loop-finish` beendet eine `loop`-Schleife regulär (collect-Ergebnisse bleiben erhalten)
- Kein direktes `continue` - stattdessen bedingte Logik oder `tagbody`/`go`

**Weiterführende Links:**
- [Common Lisp HyperSpec - return-from](http://www.lispworks.com/documentation/HyperSpec/Body/s_ret_fr.htm)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! EXIT (break) und CYCLE (continue)
integer :: i

do i = 1, 20
    if (i == 5) cycle   ! Überspringe 5
    if (i == 15) exit   ! Beende bei 15
    print *, i
end do

! Benannte Schleifen mit Labels
outer: do i = 1, 10
    inner: do j = 1, 10
        if (j == 5) cycle inner  ! Überspringe inner
        if (i == 3) exit outer   ! Beende outer
    end do inner
end do outer
```

**Besonderheiten:**
- `EXIT` entspricht `break` (verlässt die Schleife)
- `CYCLE` entspricht `continue` (springt zur nächsten Iteration)
- Benannte Schleifen ermöglichen gezieltes EXIT/CYCLE auf äußere Schleifen

**Weiterführende Links:**
- [Fortran Standard - EXIT Statement](https://gcc.gnu.org/onlinedocs/gfortran/EXIT-statement.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
var
  i: Integer;
begin
  for i := 0 to 9 do
  begin
    if i = 3 then
      Continue;  // Nächste Iteration
    if i = 7 then
      Break;     // Schleife beenden
    WriteLn(i);
  end;
  // Ausgabe: 0, 1, 2, 4, 5, 6
end;
```

**Besonderheiten:**
- `Break` beendet die aktuelle Schleife
- `Continue` springt zur nächsten Iteration
- Keine Labels für Break/Continue (nur innerste Schleife)

**Weiterführende Links:**
- [Free Pascal Documentation - Break and Continue](https://www.freepascal.org/docs-html/ref/refsu58.html)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Break *)
Do[
    If[i > 3, Break[]];
    Print[i],
    {i, 1, 10}
]

(* Continue *)
Do[
    If[EvenQ[i], Continue[]];
    Print[i],
    {i, 1, 5}
]
```

**Besonderheiten:**
- `Break[]` beendet die innerste Schleife
- `Continue[]` springt zum nächsten Schleifendurchlauf
- Kein Label-System für verschachtelte Schleifen

**Weiterführende Links:**
- [Wolfram Language Documentation - Break](https://reference.wolfram.com/language/ref/Break.html)

</TabItem>
</Tabs>
## 6.2.11. Loop-Else-Klauseln

Eine Loop-Else-Klausel ist ein Code-Block, der ausgeführt wird, wenn eine Schleife regulär beendet wird — also ohne vorzeitigen Abbruch durch `break`. Dies ermöglicht eine elegante Unterscheidung zwischen vollständiger und abgebrochener Iteration ohne Flag-Variablen.

### Sprachen {#sprachen}

<Tabs availableTabs={['python']}>
<TabItem value="python" label="Python">

```python
# for...else: else-Block wird nur ohne break ausgeführt
items = ["Apfel", "Banane", "Kirsche"]

for item in items:
    if item == "Mango":
        print(f"{item} gefunden!")
        break
else:
    print("Mango nicht gefunden")

# while...else: funktioniert analog
i = 0
while i < len(items):
    if items[i] == "Mango":
        print(f"{items[i]} gefunden!")
        break
    i += 1
else:
    print("Mango nicht in der Liste")
```

**Besonderheiten:**
- Sowohl `for...else` als auch `while...else` werden unterstützt
- Der `else`-Block wird **nicht** ausgeführt, wenn die Schleife durch `break` verlassen wird
- Der `else`-Block **wird** ausgeführt, wenn die Schleife regulär endet — auch bei leerer Iteration (z.B. `for x in []`)
- Python ist die einzige weit verbreitete Sprache mit nativem Loop-Else

**Weiterführende Links:**
- [Python Documentation - More Control Flow Tools](https://docs.python.org/3/tutorial/controlflow.html#break-and-continue-statements-and-else-clauses-on-loops)

</TabItem>
</Tabs>

## 6.2.12. Labeled Blocks

Labeled Blocks ermöglichen es, verschachtelte Schleifen oder Blöcke mit einem Namen zu versehen und gezielt per `break` oder `continue` aus einer bestimmten Ebene auszubrechen — nicht nur aus der innersten Schleife.

### Sprachen {#sprachen}

<Tabs availableTabs={['ada', 'common-lisp', 'd', 'dart', 'fortran', 'go', 'groovy', 'java', 'javascript', 'kotlin', 'nim', 'odin', 'perl', 'rust', 'swift', 'typescript', 'zig']} yellowTabs={['php', 'scala']} orangeTabs={['lua', 'ruby']}>
<TabItem value="ada" label="Ada">

```ada
Search:
for I in 1 .. 3 loop
    for J in 1 .. 3 loop
        if Matrix(I, J) = Target then
            exit Search;
        end if;
    end loop;
end loop Search;
```

**Besonderheiten:**
- Labels stehen vor dem `loop`-Statement und enden mit einem Doppelpunkt
- `exit Label_Name;` bricht die benannte Schleife ab
- Der Label-Name muss bei `end loop` wiederholt werden
- Unterstützt auch `exit Label_Name when Bedingung;`

**Weiterführende Links:**
- [Ada Reference Manual - Loop Statements](http://www.ada-auth.org/standards/rm12_w_tc1/html/RM-5-5.html)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
(block outer
  (dolist (row groups)
    (dolist (val row)
      (when (= val target)
        (return-from outer val)))))
```

**Besonderheiten:**
- `block` erstellt einen benannten Block
- `return-from` verlässt den benannten Block mit einem optionalen Rückgabewert
- Kann auch ohne Schleifen für beliebige Code-Blöcke verwendet werden
- `tagbody`/`go` bietet zusätzlich Sprungmarken innerhalb von Blöcken

**Weiterführende Links:**
- [Common Lisp HyperSpec - block](http://www.lispworks.com/documentation/HyperSpec/Body/s_block.htm)

</TabItem>
<TabItem value="d" label="D">

```d
outer: foreach (row; groups) {
    foreach (val; row) {
        if (val == target)
            break outer;
    }
}
```

**Besonderheiten:**
- Labels stehen direkt vor dem `foreach`/`for`-Statement
- Sowohl `break label` als auch `continue label` werden unterstützt
- `continue label` springt zum nächsten Durchlauf der benannten Schleife

**Weiterführende Links:**
- [D Language Reference - Labeled Statements](https://dlang.org/spec/statement.html#labeled-statement)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
var groups = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
var target = 5;

outer:
for (var row in groups) {
    for (var val in row) {
        if (val == target) break outer;
    }
}
```

**Besonderheiten:**
- Labels stehen vor dem Schleifen-Statement mit Doppelpunkt
- Sowohl `break label` als auch `continue label` werden unterstützt

**Weiterführende Links:**
- [Dart Language Tour - Break and Continue](https://dart.dev/language/loops#break-and-continue)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
outer: do i = 1, 3
    do j = 1, 3
        if (matrix(i, j) == target) exit outer
    end do
end do outer
```

**Besonderheiten:**
- Benannte `DO`-Schleifen verwenden einen Label vor dem `do`
- `exit label` verlässt die benannte Schleife
- `cycle label` entspricht `continue` und springt zum nächsten Durchlauf
- Der Label-Name muss bei `end do` wiederholt werden

**Weiterführende Links:**
- [Fortran Wiki - Do Loop](https://fortranwiki.org/fortran/show/do+loop)

</TabItem>
<TabItem value="go" label="Go">

```go
groups := [][]int{{1, 2, 3}, {4, 5, 6}, {7, 8, 9}}
target := 5

Outer:
    for _, row := range groups {
        for _, val := range row {
            if val == target {
                break Outer
            }
        }
    }
```

**Besonderheiten:**
- Labels stehen auf einer eigenen Zeile mit Doppelpunkt
- Sowohl `break Label` als auch `continue Label` werden unterstützt
- Konvention: Label-Namen beginnen mit Großbuchstabe

**Weiterführende Links:**
- [Go Specification - Break statements](https://go.dev/ref/spec#Break_statements)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
def groups = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
def target = 5

outer:
for (row in groups) {
    for (val in row) {
        if (val == target) break outer
    }
}
```

**Besonderheiten:**
- Syntax identisch mit Java
- Sowohl `break label` als auch `continue label` werden unterstützt

**Weiterführende Links:**
- [Groovy Documentation - Control Structures](https://groovy-lang.org/semantics.html#_break)

</TabItem>
<TabItem value="java" label="Java">

```java
int[][] groups = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
int target = 5;

outer:
for (int[] row : groups) {
    for (int val : row) {
        if (val == target) {
            break outer;
        }
    }
}
```

**Besonderheiten:**
- Labels stehen vor dem Schleifen-Statement mit Doppelpunkt
- Sowohl `break label` als auch `continue label` werden unterstützt
- Labels können auch vor Blöcken stehen (nicht nur Schleifen)

**Weiterführende Links:**
- [Oracle Java Documentation - Branching Statements](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/branch.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
const groups = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const target = 5;

outer:
for (const row of groups) {
    for (const val of row) {
        if (val === target) {
            break outer;
        }
    }
}
```

**Besonderheiten:**
- Labels stehen vor dem Statement mit Doppelpunkt
- Sowohl `break label` als auch `continue label` werden unterstützt
- Labels können auch vor beliebigen Blöcken stehen (nicht nur Schleifen)

**Weiterführende Links:**
- [MDN Web Docs - label](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
val groups = arrayOf(intArrayOf(1, 2, 3), intArrayOf(4, 5, 6), intArrayOf(7, 8, 9))
val target = 5

outer@ for (row in groups) {
    for (val in row) {
        if (val == target) break@outer
    }
}
```

**Besonderheiten:**
- Labels werden mit `@` am Schleifen-Statement definiert (`label@`)
- Referenzierung mit `break@label` und `continue@label`
- Auch für `return` aus Lambda-Ausdrücken nutzbar (`return@label`)

**Weiterführende Links:**
- [Kotlin Documentation - Returns and Jumps](https://kotlinlang.org/docs/returns.html#break-and-continue-labels)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Abbruch aus verschachtelten Schleifen mit goto (seit Lua 5.2)
local groups = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}}
local target = 5

for _, row in ipairs(groups) do
    for _, val in ipairs(row) do
        if val == target then
            goto found
        end
    end
end
::found::
```

**Besonderheiten:**
- Lua hat keine nativen Labeled Loops
- `goto` und Labels (`::label::`) können als Workaround verwendet werden (seit Lua 5.2)
- Labels haben Block-Scope und können nicht in verschachtelte Funktionen springen
- Kein `continue`-Statement verfügbar

**Weiterführende Links:**
- [Lua Reference Manual - goto](https://www.lua.org/manual/5.4/manual.html#3.3.4)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
let groups = @[@[1, 2, 3], @[4, 5, 6], @[7, 8, 9]]
let target = 5

block outer:
  for row in groups:
    for val in row:
      if val == target:
        break outer
```

**Besonderheiten:**
- `block name:` erstellt einen benannten Block
- `break name` verlässt den benannten Block
- Kann für beliebige Code-Blöcke verwendet werden, nicht nur Schleifen
- Kein `continue` mit Label — nur `break`

**Weiterführende Links:**
- [Nim Manual - Block Statement](https://nim-lang.org/docs/manual.html#statements-and-expressions-block-statement)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
groups := [3][3]int{{1, 2, 3}, {4, 5, 6}, {7, 8, 9}}
target := 5

outer: for row in groups {
    for val in row {
        if val == target {
            break outer
        }
    }
}
```

**Besonderheiten:**
- Labels stehen direkt vor dem `for`-Statement
- Sowohl `break label` als auch `continue label` werden unterstützt

**Weiterführende Links:**
- [Odin Language Specification - For Statement](https://odin-lang.org/docs/overview/#for-statement)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
my @groups = ([1, 2, 3], [4, 5, 6], [7, 8, 9]);
my $target = 5;

OUTER: for my $row (@groups) {
    for my $val (@$row) {
        last OUTER if $val == $target;
    }
}
```

**Besonderheiten:**
- Labels stehen vor dem Schleifen-Statement in Großbuchstaben (Konvention)
- `last LABEL` entspricht `break` für die benannte Schleife
- `next LABEL` entspricht `continue` für die benannte Schleife
- `redo LABEL` startet den aktuellen Durchlauf der benannten Schleife neu

**Weiterführende Links:**
- [Perl Documentation - Loop Control](https://perldoc.perl.org/perlsyn#Loop-Control)

</TabItem>
<TabItem value="php" label="PHP">

```php
$groups = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
$target = 5;

foreach ($groups as $row) {
    foreach ($row as $val) {
        if ($val === $target) {
            break 2;
        }
    }
}
```

**Besonderheiten:**
- PHP verwendet **numerische Ebenen** statt benannter Labels
- `break 2` bricht 2 Schleifenebenen ab, `break 3` drei Ebenen, usw.
- `continue 2` springt zum nächsten Durchlauf der äußeren Schleife
- Standard `break`/`continue` ohne Zahl wirkt nur auf die innerste Schleife

**Weiterführende Links:**
- [PHP Documentation - break](https://www.php.net/manual/en/control-structures.break.php)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
groups = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
target = 5

catch(:found) do
  groups.each do |row|
    row.each do |val|
      throw(:found) if val == target
    end
  end
end
```

**Besonderheiten:**
- Ruby hat keine nativen Labeled Loops
- `catch`/`throw` mit Symbolen bietet einen Workaround für Multi-Level-Abbruch
- `throw(:symbol)` springt zum nächsten umschließenden `catch(:symbol)`
- Nicht zu verwechseln mit Exception-Handling (`raise`/`rescue`)

**Weiterführende Links:**
- [Ruby Documentation - Kernel#catch](https://docs.ruby-lang.org/en/master/Kernel.html#method-i-catch)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
let groups = vec![vec![1, 2, 3], vec![4, 5, 6], vec![7, 8, 9]];
let target = 5;

'outer: for row in &groups {
    for val in row {
        if *val == target {
            break 'outer;
        }
    }
}
```

**Besonderheiten:**
- Labels verwenden Lifetime-Syntax mit Apostroph (`'label`)
- Sowohl `break 'label` als auch `continue 'label` werden unterstützt
- Labeled Blocks können auch ohne Schleifen verwendet werden und einen Wert zurückgeben (seit Rust 1.65)

**Weiterführende Links:**
- [Rust Reference - Loop Labels](https://doc.rust-lang.org/reference/expressions/loop-expr.html#loop-labels)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Benötigt: import scala.util.boundary, boundary.break (seit Scala 3.3)
val groups = List(List(1, 2, 3), List(4, 5, 6), List(7, 8, 9))
val target = 5

boundary:
  for row <- groups do
    for val <- row do
      if val == target then break()
```

**Besonderheiten:**
- Scala hat keine nativen Labeled Loops
- Seit Scala 3.3 bietet `boundary`/`break` aus der Standardbibliothek eine strukturierte Alternative
- `break()` verlässt den nächsten umschließenden `boundary`-Block
- Boundaries können auch Werte zurückgeben: `boundary[Int]: ... break(42)`

**Weiterführende Links:**
- [Scala Documentation - boundary/break](https://www.scala-lang.org/api/3.x/scala/util/boundary$.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
let groups = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
let target = 5

outerLoop: for row in groups {
    for val in row {
        if val == target {
            break outerLoop
        }
    }
}
```

**Besonderheiten:**
- Labels stehen vor dem Schleifen-Statement mit Doppelpunkt
- Sowohl `break label` als auch `continue label` werden unterstützt
- Labels können auch vor `if`-, `switch`- und `do`-Statements stehen

**Weiterführende Links:**
- [Swift Documentation - Labeled Statements](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/controlflow/#Labeled-Statements)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
const groups = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const target = 5;

outer:
for (const row of groups) {
    for (const val of row) {
        if (val === target) {
            break outer;
        }
    }
}
```

**Besonderheiten:**
- Identisches Verhalten wie in JavaScript
- Sowohl `break label` als auch `continue label` werden unterstützt
- Labels können auch vor beliebigen Blöcken stehen

**Weiterführende Links:**
- [MDN Web Docs - label](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
const groups = [3][3]u32{ .{ 1, 2, 3 }, .{ 4, 5, 6 }, .{ 7, 8, 9 } };
const target: u32 = 5;

outer: for (groups) |row| {
    for (row) |val| {
        if (val == target) break :outer;
    }
}
```

**Besonderheiten:**
- Labels stehen vor dem `for`/`while`-Statement mit Doppelpunkt
- `break :label` und `continue :label` verwenden die Doppelpunkt-Syntax
- Labeled Blocks können auch Werte zurückgeben: `const x = blk: { break :blk value; };`

**Weiterführende Links:**
- [Zig Language Reference - Labeled Blocks](https://ziglang.org/documentation/master/#Labeled-Blocks)

</TabItem>
</Tabs>

