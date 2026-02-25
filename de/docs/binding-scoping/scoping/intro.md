---
slug: /binding-scoping/scoping
title: 4.2. Scoping
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 4.2. Scoping

Sichtbarkeit und Gültigkeitsbereich von Variablen.

## 4.2.1. Block Scope

Variablen sind nur innerhalb des Blocks sichtbar, in dem sie deklariert wurden.

### Sprachen {#sprachen}

<Tabs availableTabs={['c', 'common-lisp', 'cpp', 'csharp', 'd', 'dart', 'elm', 'fortran', 'go', 'groovy', 'java', 'javascript', 'koka', 'kotlin', 'lean4', 'lua', 'nim', 'objective-c', 'perl', 'rust', 'scala', 'swift', 'typescript', 'v', 'wolfram-language', 'zig']} yellowTabs={['julia', 'object-pascal']} orangeTabs={['python']}>
<TabItem value="javascript" label="JavaScript">

```javascript
// Block Scope mit let und const
{
  let count = 42;
  const name = "Hallo";
  console.log(count);  // 42
}
// console.log(count);  // ReferenceError

// var hat kein Block Scope
{
  var count = 42;
}
console.log(count);  // 42 (var hat Function Scope)
```

**Besonderheiten:**
- `let` und `const` haben Block Scope
- `var` hat Function Scope, nicht Block Scope

**Weiterführende Links:**
- [MDN Web Docs - let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Block Scope mit let und const
{
  let count = 42;
  const name = "Hallo";
  console.log(count);  // 42
}
// console.log(count);  // ReferenceError

// var hat kein Block Scope
{
  var count = 42;
}
console.log(count);  // 42 (var hat Function Scope)
```

**Besonderheiten:**
- `let` und `const` haben Block Scope
- `var` hat Function Scope, nicht Block Scope

**Weiterführende Links:**
- [TypeScript Documentation - Variable Declarations](https://www.typescriptlang.org/docs/handbook/variable-declarations.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Block Scope
{
  int count = 42;
  System.out.println(count);  // 42
}
// System.out.println(count);  // Compiler-Fehler
```

**Besonderheiten:**
- Alle lokalen Variablen haben Block Scope
- Variablen sind nur innerhalb des Blocks sichtbar

**Weiterführende Links:**
- [Java Language Specification - Scope](https://docs.oracle.com/javase/specs/jls/se21/html/jls-6.html#jls-6.3)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Block Scope
{
  int count = 42;
  Console.WriteLine(count);  // 42
}
// Console.WriteLine(count);  // Compiler-Fehler
```

**Besonderheiten:**
- Alle lokalen Variablen haben Block Scope
- Variablen sind nur innerhalb des Blocks sichtbar

**Weiterführende Links:**
- [Microsoft C# Documentation - Scope](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/basic-concepts#scopes)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Block Scope
{
  int count = 42;
  std::cout << count << std::endl;  // 42
}
// std::cout << count << std::endl;  // Compiler-Fehler
```

**Besonderheiten:**
- Alle lokalen Variablen haben Block Scope
- Variablen sind nur innerhalb des Blocks sichtbar

**Weiterführende Links:**
- [cppreference.com - Scope](https://en.cppreference.com/w/cpp/language/scope)

</TabItem>
<TabItem value="c" label="C">

```c
// Block Scope
{
  int count = 42;
  printf("%d\n", count);  // 42
}
// printf("%d\n", count);  // Compiler-Fehler
```

**Besonderheiten:**
- Alle lokalen Variablen haben Block Scope
- Variablen sind nur innerhalb des Blocks sichtbar

**Weiterführende Links:**
- [C Standard - Scope](https://en.cppreference.com/w/c/language/scope)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Block Scope
{
  let count = 42;
  println!("{}", count);  // 42
}
// println!("{}", count);  // Compiler-Fehler
```

**Besonderheiten:**
- Alle Variablen haben Block Scope
- Variablen sind nur innerhalb des Blocks sichtbar

**Weiterführende Links:**
- [Rust Documentation - Variables](https://doc.rust-lang.org/book/ch03-01-variables-and-mutability.html)

</TabItem>
<TabItem value="go" label="Go">

```go
// Block Scope
{
  count := 42
  fmt.Println(count)  // 42
}
// fmt.Println(count)  // Compiler-Fehler
```

**Besonderheiten:**
- Alle lokalen Variablen haben Block Scope
- Variablen sind nur innerhalb des Blocks sichtbar

**Weiterführende Links:**
- [Go Documentation - Scope](https://go.dev/ref/spec#Declarations_and_scope)

</TabItem>
<TabItem value="python" label="Python">

```python
# Block Scope (eingeschränkt)
count = 10
if True:
    count = 42  # Ändert die äußere Variable
    inner = 5   # Auch im äußeren Scope sichtbar
print(count)  # 42
print(inner)  # 5 (kein eigener Block-Scope)
```

**Besonderheiten:**
- Python hat kein echtes Block Scope
- Variablen in Blöcken sind im äußeren Scope sichtbar
- Nur Funktionen und Klassen erzeugen neue Scopes

**Weiterführende Links:**
- [Python Documentation - Scopes](https://docs.python.org/3/tutorial/classes.html#scopes-and-namespaces)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Block Scope
fun example(): console ()
  val count = 42
  println(count.show)  // 42
  // count ist nur innerhalb dieses Blocks sichtbar

// Verschachtelte Scopes
fun nested(): console ()
  val x = 10
  val result =
    val y = 20   // y ist nur in diesem Block sichtbar
    x + y
  println(result.show)  // 30
```

**Besonderheiten:**
- Einrückungsbasierte Blöcke definieren Scopes
- `val`- und `var`-Bindungen sind nur im umgebenden Block sichtbar
- Verschachtelte Blöcke können auf äußere Bindungen zugreifen

**Weiterführende Links:**
- [Koka Language Guide - Lexical Scoping](https://koka-lang.github.io/koka/doc/book.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Block Scope über let...in und do-Blöcke
def blockExample : Nat :=
  let x := 10
  let result :=
    let y := 20  -- y ist nur in diesem Block sichtbar
    x + y
  result  -- 30
  -- y ist hier nicht mehr zugänglich

-- Block Scope in do-Blöcken
def doExample : IO Unit := do
  let count := 42
  IO.println s!"{count}"  -- 42
-- count ist hier nicht mehr zugänglich
```

**Besonderheiten:**
- `let ... in`-Ausdrücke erstellen lokale Scopes
- `do`-Blöcke verwenden einrückungsbasierte Scopes
- `let`-Bindungen sind nur im umgebenden Block sichtbar
- Verschachtelte Scopes können auf äußere Bindungen zugreifen

**Weiterführende Links:**
- [Lean 4 Documentation - Variables](https://lean-lang.org/lean4/doc/lean-by-example/variables.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Block Scope
run {
  val count = 42
  println(count)  // 42
}
// println(count)  // Compiler-Fehler
```

**Besonderheiten:**
- Alle lokalen Variablen haben Block Scope
- Variablen sind nur innerhalb des Blocks sichtbar

**Weiterführende Links:**
- [Kotlin Documentation - Scope](https://kotlinlang.org/docs/scope-functions.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Block Scope
{
  val count = 42
  println(count)  // 42
}
// println(count)  // Compiler-Fehler
```

**Besonderheiten:**
- Alle lokalen Variablen haben Block Scope
- Variablen sind nur innerhalb des Blocks sichtbar

**Weiterführende Links:**
- [Scala Documentation - Scope](https://docs.scala-lang.org/tour/basics.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Block Scope
{
  let count = 42
  print(count)  // 42
}
// print(count)  // Compiler-Fehler
```

**Besonderheiten:**
- Alle lokalen Variablen haben Block Scope
- Variablen sind nur innerhalb des Blocks sichtbar

**Weiterführende Links:**
- [Swift Documentation - Scope](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/thebasics/)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Block Scope
{
  int count = 42;
  print(count);  // 42
}
// print(count);  // Compiler-Fehler
```

**Besonderheiten:**
- Alle lokalen Variablen haben Block Scope
- Variablen sind nur innerhalb des Blocks sichtbar

**Weiterführende Links:**
- [Dart Language Tour - Scope](https://dart.dev/guides/language/language-tour#scope)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Block Scope mit let
(let ((x 10)
      (y 20))
  (+ x y))  ; x und y nur innerhalb des let sichtbar

;; Block Scope mit block
(block my-block
  (format t "Inside block~%")
  (return-from my-block 42))
```

**Besonderheiten:**
- `let` erstellt einen neuen lexikalischen Scope für Variablen
- `block` erstellt benannte Blöcke mit `return-from`
- Variablen sind nur innerhalb ihres `let`-Blocks sichtbar

**Weiterführende Links:**
- [Common Lisp HyperSpec - let](http://www.lispworks.com/documentation/HyperSpec/Body/s_let_l.htm)

</TabItem>
<TabItem value="d" label="D">

```d
// Block Scope
{
    int x = 42;
    writeln(x);  // 42
}
// writeln(x);  // Fehler: x ist nicht sichtbar

if (true) {
    int y = 10;
}
// writeln(y);  // Fehler: y ist nicht sichtbar
```

**Besonderheiten:**
- Variablen sind nur innerhalb des Blocks sichtbar
- Curly Braces `{}` definieren einen Block
- Gilt für `if`, `for`, `while`, `foreach` und eigenständige Blöcke

**Weiterführende Links:**
- [D Language Specification - Scope](https://dlang.org/spec/declaration.html#scope)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Block Scope über let-Ausdrücke
example : Int
example =
    let
        x = 10
        y = 20
    in
    x + y  -- x und y sind nur innerhalb des let-Blocks sichtbar

-- x und y sind hier nicht mehr zugänglich
```

**Besonderheiten:**
- `let ... in` erstellt einen neuen Scope
- Variablen sind nur innerhalb des `let`-Blocks sichtbar
- Verschachtelte `let`-Ausdrücke möglich

**Weiterführende Links:**
- [Elm Documentation - Let Expressions](https://guide.elm-lang.org/core_language.html)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Block Scope mit BLOCK-Konstrukt (seit Fortran 2008)
integer :: x = 10

block
    integer :: y = 20  ! Nur in diesem Block sichtbar
    x = x + y
end block

! y ist hier nicht mehr zugänglich
```

**Besonderheiten:**
- `BLOCK...END BLOCK` für lokalen Scope (seit Fortran 2008)
- Variablen im Block sind nur innerhalb des Blocks sichtbar
- Kann lokale Variablen deklarieren

**Weiterführende Links:**
- [Fortran Wiki - BLOCK construct](https://fortranwiki.org/fortran/show/BLOCK)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Block Scope
def x = 10

if (true) {
    def y = 20 // nur innerhalb des if-Blocks sichtbar
    println x   // 10 - äußere Variable sichtbar
    println y   // 20
}

// println y // Fehler: Variable y nicht definiert
```

**Besonderheiten:**
- Variablen mit `def` oder explizitem Typ haben Block Scope
- Innere Blöcke können auf äußere Variablen zugreifen
- Äußere Blöcke können nicht auf innere Variablen zugreifen

**Weiterführende Links:**
- [Groovy Documentation - Semantics](https://groovy-lang.org/semantics.html)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# for-Schleifen haben eigenen Scope
for i in 1:5
    temp = i * 2
end
# temp ist hier nicht verfügbar

# let-Block erstellt expliziten Scope
let
    local_var = 42
    println(local_var)
end
# local_var ist hier nicht verfügbar

# if-Blöcke erstellen KEINEN neuen Scope
x = 10
if x > 5
    y = 20
end
println(y)  # 20 (y ist hier verfügbar)
```

**Besonderheiten:**
- `for`, `while`, `try`, `let` erstellen neue Scopes
- `if`-Blöcke erstellen **keinen** neuen Scope
- Unterschied zwischen Hard Scope (Funktionen) und Soft Scope (Schleifen in REPL)

**Weiterführende Links:**
- [Julia Documentation - Scope of Variables](https://docs.julialang.org/en/v1/manual/variables-and-scoping/)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Block Scope mit do...end
do
    local x = 10
    print(x)    -- 10
end
-- print(x)     -- Fehler: x ist hier nicht sichtbar

-- Block Scope in if-Blöcken
if true then
    local y = 20
    print(y)    -- 20
end
-- print(y)     -- nil (y ist hier nicht sichtbar)

-- Block Scope in for-Schleifen
for i = 1, 3 do
    local temp = i * 2
end
-- print(temp)  -- nil (temp ist hier nicht sichtbar)
-- print(i)     -- nil (Schleifenvariable ebenfalls block-scoped)
```

**Besonderheiten:**
- `local`-Variablen sind block-scoped (nicht function-scoped)
- Blöcke werden durch `do...end`, `if...then...end`, `for...do...end`, `while...do...end`, Funktionskörper erstellt
- Schleifenvariablen in `for`-Schleifen sind automatisch lokal zum Schleifenblock
- `do...end` kann explizit als Scope-Block verwendet werden

**Weiterführende Links:**
- [Lua Reference Manual - Blocks](https://www.lua.org/manual/5.4/manual.html#3.3.1)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Block Scope
block:
  var x = 10
  echo x  # 10

# echo x  # Fehler: x ist nicht definiert

if true:
  var y = 20
  echo y  # 20

# echo y  # Fehler: y ist nicht definiert
```

**Besonderheiten:**
- Variablen sind im Block ihrer Deklaration sichtbar
- `block:`-Statement für explizite Scopes
- Kontrollstrukturen (`if`, `for`, `while`) erstellen eigene Scopes

**Weiterführende Links:**
- [Nim Documentation - Scoping Rules](https://nim-lang.org/docs/manual.html#scoping-rules)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
procedure Example;
var
  x: Integer;
begin
  x := 10;
  // Variablen müssen im var-Block VOR begin deklariert werden
  // Kein Block-Scope innerhalb von begin/end
end;

// Inline Variable Declaration (seit Delphi 10.3)
procedure ModernExample;
begin
  var x: Integer := 10;  // Block-Scope innerhalb von begin/end
  if x > 5 then
  begin
    var y: Integer := 20;  // Scope nur in diesem Block
  end;
  // y ist hier nicht mehr sichtbar
end;
```

**Besonderheiten:**
- Traditionell: Alle Variablen im `var`-Block vor `begin` deklariert
- Seit Delphi 10.3: Inline Variable Declarations mit Block-Scope
- Free Pascal unterstützt Inline-Variablen noch nicht vollständig

**Weiterführende Links:**
- [Delphi Documentation - Inline Variable Declarations](https://docwiki.embarcadero.com/RADStudio/en/Inline_Variable_Declaration)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
{
    int x = 10;
    NSLog(@"%d", x); // 10
}
// x ist hier nicht mehr sichtbar
```

**Besonderheiten:**
- C-style Block Scope mit geschweiften Klammern
- Variablen sind nur innerhalb ihres Blocks sichtbar
- Verschachtelte Blöcke können auf äußere Variablen zugreifen

**Weiterführende Links:**
- [Apple Documentation - Programming with Objective-C](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Block Scope mit my
{
    my $x = 10;
    print "$x\n";  # 10
}
# $x ist hier nicht mehr sichtbar
```

**Besonderheiten:**
- `my` deklariert Variablen mit Block Scope
- Variablen sind nur innerhalb des umschließenden Blocks sichtbar
- Gilt für `{}`, `if`, `while`, `for` und andere Block-Konstrukte

**Weiterführende Links:**
- [Perl Documentation - Scoping](https://perldoc.perl.org/perlsub#Private-Variables-via-my())

</TabItem>
<TabItem value="v" label="V">

```v
// Block Scope
{
    x := 42
    println(x)  // OK
}
// println(x)  // Fehler: x ist hier nicht sichtbar

if true {
    y := 10
    println(y)  // OK
}
// println(y)  // Fehler: y ist hier nicht sichtbar
```

**Besonderheiten:**
- Variablen sind auf ihren Block beschränkt
- Blöcke werden durch `{ }` definiert
- Gilt für alle Kontrollstrukturen (if, for, match)

**Weiterführende Links:**
- [V Documentation - Variables](https://github.com/vlang/v/blob/master/doc/docs.md#variables)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Block Scope mit Module *)
Module[{x = 10, y = 20},
    Print[x + y]  (* 30 *)
]
(* x und y sind hier nicht mehr sichtbar *)
```

**Besonderheiten:**
- `Module[]` erstellt lokale Variablen mit lexikalischem Scope
- `Block[]` erstellt temporäre Bindungen mit dynamischem Scope
- `With[]` erstellt lokale Konstanten

**Weiterführende Links:**
- [Wolfram Language Documentation - Scoping](https://reference.wolfram.com/language/guide/ScopingConstructs.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Block Scope: Variablen sind auf ihren Block beschränkt
const std = @import("std");

pub fn main() void {
    const x: i32 = 10;
    {
        const y: i32 = 20;
        std.debug.print("{}\n", .{x + y});  // OK: x ist sichtbar
    }
    // std.debug.print("{}\n", .{y});  // Kompilierfehler: y nicht sichtbar

    // Labeled Blocks mit Rückgabewert
    const result = blk: {
        const temp: i32 = 42;
        break :blk temp * 2;
    };
    // temp ist hier nicht sichtbar
}
```

**Besonderheiten:**
- Variablen sind auf den umgebenden `{}` Block beschränkt
- Labeled Blocks können Werte zurückgeben (`break :label value`)
- Kein Variable Shadowing erlaubt

**Weiterführende Links:**
- [Zig Documentation - Blocks](https://ziglang.org/documentation/master/#Blocks)

</TabItem>
</Tabs>


## 4.2.2. Function Scope

Variablen sind nur innerhalb der Funktion sichtbar, in der sie deklariert wurden.

### Sprachen {#sprachen}

<Tabs availableTabs={['c', 'common-lisp', 'cpp', 'csharp', 'd', 'dart', 'fortran', 'go', 'groovy', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'matlab', 'mercury', 'nim', 'objective-c', 'object-pascal', 'octave', 'perl', 'php', 'prolog', 'python', 'ruby', 'rust', 'scala', 'swift', 'typescript', 'v', 'wolfram-language']}>
<TabItem value="javascript" label="JavaScript">

```javascript
// Function Scope mit var
function example() {
  var count = 42;
  if (true) {
    var name = "Hallo";  // Hat Function Scope
  }
  console.log(count);  // 42
  console.log(name);   // "Hallo"
}
// console.log(count);  // ReferenceError
```

**Besonderheiten:**
- `var` hat Function Scope
- `let` und `const` haben Block Scope

**Weiterführende Links:**
- [MDN Web Docs - var](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Function Scope mit var
function example(): void {
  var count = 42;
  if (true) {
    var name = "Hallo";  // Hat Function Scope
  }
  console.log(count);  // 42
  console.log(name);   // "Hallo"
}
// console.log(count);  // ReferenceError
```

**Besonderheiten:**
- `var` hat Function Scope
- `let` und `const` haben Block Scope

**Weiterführende Links:**
- [TypeScript Documentation - Variable Declarations](https://www.typescriptlang.org/docs/handbook/variable-declarations.html)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Clause Scope (Function Scope)
example(X) :-
    Y is X + 1,
    format("~w~n", [Y]).
% Y ist nur innerhalb dieser Klausel sichtbar

another_clause :-
    % Y ist hier nicht sichtbar
    Z = 42,
    format("~w~n", [Z]).
```

**Besonderheiten:**
- Variablen sind auf die Klausel (Regel/Fakt) beschränkt, in der sie erscheinen
- Jede Klausel eines Prädikats hat einen eigenen Variablenscope
- Variablen beginnen mit Großbuchstaben oder Unterstrich
- `_` ist die anonyme Variable (jedes Vorkommen ist unabhängig)

**Weiterführende Links:**
- [SWI-Prolog Manual - Syntax](https://www.swi-prolog.org/pldoc/man?section=syntax)

</TabItem>
<TabItem value="python" label="Python">

```python
# Function Scope
def example():
    count = 42
    if True:
        name = "Hallo"  # Hat Function Scope
    print(count)  # 42
    print(name)   # "Hallo"

# print(count)  # NameError
```

**Besonderheiten:**
- Alle Variablen in Funktionen haben Function Scope
- Variablen sind nur innerhalb der Funktion sichtbar

**Weiterführende Links:**
- [Python Documentation - Scopes](https://docs.python.org/3/tutorial/classes.html#scopes-and-namespaces)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Function Scope
def example
  count = 42
  if true
    name = "Hallo"  # Hat Function Scope
  end
  puts count  # 42
  puts name   # "Hallo"
end
# puts count  # NameError
```

**Besonderheiten:**
- Alle Variablen in Funktionen haben Function Scope
- Variablen sind nur innerhalb der Funktion sichtbar

**Weiterführende Links:**
- [Ruby Documentation - Variables](https://ruby-doc.org/core-3.1.2/doc/syntax/assignment_rdoc.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Function Scope (Method Scope)
void example() {
  int count = 42;
  if (true) {
    int name = 10;  // Hat Block Scope, nicht Function Scope
  }
  System.out.println(count);  // 42
  // System.out.println(name);  // Compiler-Fehler
}
```

**Besonderheiten:**
- Java hat Block Scope, nicht Function Scope
- Variablen in Blöcken sind nicht im gesamten Function Scope sichtbar

**Weiterführende Links:**
- [Java Language Specification - Scope](https://docs.oracle.com/javase/specs/jls/se21/html/jls-6.html#jls-6.3)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Function Scope (Method Scope)
void Example() {
  int count = 42;
  if (true) {
    int name = 10;  // Hat Block Scope, nicht Function Scope
  }
  Console.WriteLine(count);  // 42
  // Console.WriteLine(name);  // Compiler-Fehler
}
```

**Besonderheiten:**
- C# hat Block Scope, nicht Function Scope
- Variablen in Blöcken sind nicht im gesamten Function Scope sichtbar

**Weiterführende Links:**
- [Microsoft C# Documentation - Scope](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/basic-concepts#scopes)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Function Scope
void example() {
  int count = 42;
  if (true) {
    int name = 10;  // Hat Block Scope, nicht Function Scope
  }
  std::cout << count << std::endl;  // 42
  // std::cout << name << std::endl;  // Compiler-Fehler
}
```

**Besonderheiten:**
- C++ hat Block Scope, nicht Function Scope
- Variablen in Blöcken sind nicht im gesamten Function Scope sichtbar

**Weiterführende Links:**
- [cppreference.com - Scope](https://en.cppreference.com/w/cpp/language/scope)

</TabItem>
<TabItem value="c" label="C">

```c
// Function Scope
void example() {
  int count = 42;
  if (true) {
    int name = 10;  // Hat Block Scope, nicht Function Scope
  }
  printf("%d\n", count);  // 42
  // printf("%d\n", name);  // Compiler-Fehler
}
```

**Besonderheiten:**
- C hat Block Scope, nicht Function Scope
- Variablen in Blöcken sind nicht im gesamten Function Scope sichtbar

**Weiterführende Links:**
- [C Standard - Scope](https://en.cppreference.com/w/c/language/scope)

</TabItem>
<TabItem value="go" label="Go">

```go
// Function Scope
func example() {
  count := 42
  if true {
    name := "Hallo"  // Hat Block Scope, nicht Function Scope
  }
  fmt.Println(count)  // 42
  // fmt.Println(name)  // Compiler-Fehler
}
```

**Besonderheiten:**
- Go hat Block Scope, nicht Function Scope
- Variablen in Blöcken sind nicht im gesamten Function Scope sichtbar

**Weiterführende Links:**
- [Go Documentation - Scope](https://go.dev/ref/spec#Declarations_and_scope)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Function Scope
fn example() {
  let count = 42;
  if true {
    let name = "Hallo";  // Hat Block Scope, nicht Function Scope
  }
  println!("{}", count);  // 42
  // println!("{}", name);  // Compiler-Fehler
}
```

**Besonderheiten:**
- Rust hat Block Scope, nicht Function Scope
- Variablen in Blöcken sind nicht im gesamten Function Scope sichtbar

**Weiterführende Links:**
- [Rust Documentation - Variables](https://doc.rust-lang.org/book/ch03-01-variables-and-mutability.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Function Scope
fun example() {
  val count = 42
  if (true) {
    val name = "Hallo"  // Hat Block Scope, nicht Function Scope
  }
  println(count)  // 42
  // println(name)  // Compiler-Fehler
}
```

**Besonderheiten:**
- Kotlin hat Block Scope, nicht Function Scope
- Variablen in Blöcken sind nicht im gesamten Function Scope sichtbar

**Weiterführende Links:**
- [Kotlin Documentation - Scope](https://kotlinlang.org/docs/scope-functions.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Function Scope
def example(): Unit = {
  val count = 42
  if (true) {
    val name = "Hallo"  // Hat Block Scope, nicht Function Scope
  }
  println(count)  // 42
  // println(name)  // Compiler-Fehler
}
```

**Besonderheiten:**
- Scala hat Block Scope, nicht Function Scope
- Variablen in Blöcken sind nicht im gesamten Function Scope sichtbar

**Weiterführende Links:**
- [Scala Documentation - Scope](https://docs.scala-lang.org/tour/basics.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Function Scope
func example() {
  let count = 42
  if true {
    let name = "Hallo"  // Hat Block Scope, nicht Function Scope
  }
  print(count)  // 42
  // print(name)  // Compiler-Fehler
}
```

**Besonderheiten:**
- Swift hat Block Scope, nicht Function Scope
- Variablen in Blöcken sind nicht im gesamten Function Scope sichtbar

**Weiterführende Links:**
- [Swift Documentation - Scope](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/thebasics/)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Function Scope
void example() {
  int count = 42;
  if (true) {
    String name = "Hallo";  // Hat Block Scope, nicht Function Scope
  }
  print(count);  // 42
  // print(name);  // Compiler-Fehler
}
```

**Besonderheiten:**
- Dart hat Block Scope, nicht Function Scope
- Variablen in Blöcken sind nicht im gesamten Function Scope sichtbar

**Weiterführende Links:**
- [Dart Language Tour - Scope](https://dart.dev/guides/language/language-tour#scope)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Function Scope
(defun calculate (x y)
  (let ((result (+ x y)))
    result))
;; x, y und result sind außerhalb nicht sichtbar
```

**Besonderheiten:**
- Funktionsparameter sind auf den Funktionskörper beschränkt
- `defun` erstellt implizit einen `block` mit dem Funktionsnamen
- Lokale Variablen mit `let` sind auf den `let`-Block beschränkt

**Weiterführende Links:**
- [Common Lisp HyperSpec - defun](http://www.lispworks.com/documentation/HyperSpec/Body/m_defun.htm)

</TabItem>
<TabItem value="d" label="D">

```d
// Function Scope
void myFunction() {
    int localVar = 42;
    writeln(localVar);  // 42
}

// writeln(localVar);  // Fehler: localVar ist nicht sichtbar

void anotherFunction() {
    // localVar ist hier nicht sichtbar
    int localVar = 100;  // Eigenständige Variable
}
```

**Besonderheiten:**
- Variablen sind nur innerhalb der Funktion sichtbar
- Jede Funktion hat ihren eigenen Scope
- Verschachtelte Funktionen haben Zugriff auf den umgebenden Scope

**Weiterführende Links:**
- [D Language Specification - Scope](https://dlang.org/spec/declaration.html#scope)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Function Scope
function calculate(x) result(res)
    integer, intent(in) :: x
    integer :: res
    integer :: temp  ! Nur in dieser Funktion sichtbar

    temp = x * 2
    res = temp + 1
end function calculate

! temp ist außerhalb der Funktion nicht zugänglich
```

**Besonderheiten:**
- Variablen in Funktionen/Subroutinen haben lokalen Scope
- Lokale Variablen sind außerhalb der Funktion nicht zugänglich
- `SAVE`-Attribut bewahrt den Wert zwischen Aufrufen

**Weiterführende Links:**
- [Fortran Wiki - Functions](https://fortranwiki.org/fortran/show/Functions)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Function Scope
def myFunction() {
    def localVar = 42 // nur innerhalb der Funktion sichtbar
    return localVar
}

def result = myFunction() // 42
// println localVar // Fehler: Variable localVar nicht definiert
```

**Besonderheiten:**
- Variablen innerhalb einer Methode sind nur dort sichtbar
- Parameter haben ebenfalls Function Scope
- Closures können auf umgebende Variablen zugreifen (Closure Scope)

**Weiterführende Links:**
- [Groovy Documentation - Semantics](https://groovy-lang.org/semantics.html)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
function outer()
    x = 10  # Lokale Variable in outer
    
    function inner()
        y = 20  # Lokale Variable in inner
        println(x)  # Kann auf x zugreifen (Closure)
    end
    
    inner()
    # y ist hier nicht verfügbar
end
```

**Besonderheiten:**
- Funktionen erstellen einen Hard Scope
- Innere Funktionen können auf Variablen der äußeren Funktion zugreifen (Closures)
- Lokale Variablen sind außerhalb der Funktion nicht sichtbar

**Weiterführende Links:**
- [Julia Documentation - Scope of Variables](https://docs.julialang.org/en/v1/manual/variables-and-scoping/)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Function Scope
fun outer(): console ()
  val x = 10  // Lokale Variable in outer
  fun inner()
    val y = 20  // Lokale Variable in inner
    println(x.show)  // Kann auf x zugreifen (Closure)
  inner()
  // y ist hier nicht verfügbar
```

**Besonderheiten:**
- Funktionen erstellen einen eigenen Scope
- Innere Funktionen können auf Variablen der äußeren Funktion zugreifen (Closures)
- Parameter und `val`/`var`-Bindungen sind nur in der Funktion sichtbar

**Weiterführende Links:**
- [Koka Language Guide - Functions](https://koka-lang.github.io/koka/doc/book.html#sec-functions)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Function Scope
def outer : IO Unit := do
  let count := 42
  let inner : IO Unit := do
    let name := "Hallo"  -- Nur in inner sichtbar
    IO.println s!"{count}"  -- 42 (aus outer Scope)
  inner
  -- name ist hier nicht sichtbar

-- Funktionsparameter haben Function Scope
def calculate (x y : Nat) : Nat :=
  x + y
-- x und y sind außerhalb nicht sichtbar
```

**Besonderheiten:**
- Funktionsparameter und lokale `let`-Bindungen sind auf die Funktion beschränkt
- Innere Funktionen können auf Variablen der äußeren Funktion zugreifen (Closures)
- `where`-Definitionen haben Zugriff auf den umgebenden Scope

**Weiterführende Links:**
- [Lean 4 Documentation - Functions](https://lean-lang.org/lean4/doc/lean-by-example/functions.html)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
function example()
    x = 10;  % Nur in dieser Funktion sichtbar
    helper();
    disp(x); % x ist immer noch 10
end

function helper()
    % x ist hier NICHT sichtbar
    y = 20;  % Nur in helper sichtbar
end
```

**Besonderheiten:**
- Jede Funktion hat ihren eigenen Workspace
- Variablen aus if/for/while-Blöcken sind in der gesamten Funktion sichtbar (kein Block Scope)
- Verschachtelte Funktionen können auf den Workspace der äußeren Funktion zugreifen

**Weiterführende Links:**
- [MATLAB Documentation - Base and Function Workspaces](https://www.mathworks.com/help/matlab/matlab_prog/base-and-function-workspaces.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```mercury
% Clause Scope (Function Scope)
:- pred example(int::in, io::di, io::uo) is det.
example(X, !IO) :-
    Y = X + 1,
    io.format("%d\n", [i(Y)], !IO).
% Y ist nur innerhalb dieser Klausel sichtbar

:- pred another_clause(io::di, io::uo) is det.
another_clause(!IO) :-
    % Y ist hier nicht sichtbar
    Z = 42,
    io.format("%d\n", [i(Z)], !IO).
```

**Besonderheiten:**
- Variablen sind auf die Klausel (Regel) beschränkt, in der sie erscheinen
- Jede Klausel eines Prädikats hat einen eigenen Variablenscope
- Variablen beginnen mit Großbuchstaben oder Unterstrich
- `_` ist die anonyme Variable (jedes Vorkommen ist unabhängig)

**Weiterführende Links:**
- [Mercury Language Reference - Clauses](https://www.mercurylang.org/information/doc-release/mercury_ref/Clauses.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Function Scope
proc myProc() =
  var localVar = 42
  echo localVar  # 42

myProc()
# echo localVar  # Fehler: localVar ist nicht definiert
```

**Besonderheiten:**
- Variablen in Prozeduren sind lokal
- Nicht zugänglich außerhalb der Prozedur
- Verschachtelte Prozeduren können auf äußere Variablen zugreifen (Closures)

**Weiterführende Links:**
- [Nim Documentation - Procedures](https://nim-lang.org/docs/manual.html#procedures)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
procedure Example;
var
  x: Integer;  // Function Scope
begin
  x := 10;
end;
// x ist hier nicht sichtbar
```

**Besonderheiten:**
- Variablen im `var`-Block sind auf die Funktion/Prozedur beschränkt
- Verschachtelte Funktionen können auf Variablen der äußeren Funktion zugreifen

**Weiterführende Links:**
- [Free Pascal Documentation - Procedures](https://www.freepascal.org/docs-html/ref/refch14.html)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
- (void)example {
    int x = 10; // x ist in der gesamten Methode sichtbar
    if (x > 5) {
        int y = 20; // y nur im if-Block sichtbar
    }
    // y ist hier nicht mehr sichtbar
}
```

**Besonderheiten:**
- C-style Function/Method Scope
- Lokale Variablen sind nur innerhalb der Methode sichtbar
- Verschachtelte Blöcke erzeugen Sub-Scopes

**Weiterführende Links:**
- [Apple Documentation - Programming with Objective-C](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
function demo()
    x = 10;  % Nur innerhalb der Funktion sichtbar
    if true
        y = 20;  % Ebenfalls in gesamter Funktion sichtbar
    end
    disp(y);  % Funktioniert: y ist im Function Scope
end
```

**Besonderheiten:**
- Variablen sind im gesamten Funktionskörper sichtbar
- Kein Block Scope (if/for-Blöcke erzeugen keinen neuen Scope)

**Weiterführende Links:**
- [GNU Octave Documentation - Variables](https://octave.org/doc/v8.1.0/Variables.html)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
// Function Scope: Variablen sind nur innerhalb der Funktion sichtbar
$globalVar = "global";

function example() {
    $localVar = "local";
    // echo $globalVar;  // Fehler: Undefined variable
    echo $localVar;      // OK
}

// echo $localVar;  // Fehler: Undefined variable
?>
```

**Besonderheiten:**
- Variablen haben Function Scope (kein Block Scope)
- Globale Variablen sind in Funktionen nicht automatisch sichtbar
- `global` Keyword für Zugriff auf globale Variablen

**Weiterführende Links:**
- [PHP Documentation - Variable Scope](https://www.php.net/manual/en/language.variables.scope.php)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Function Scope mit local
our $x = 10;

sub example {
    local $x = 20;  # Dynamisch gebunden, sichtbar in aufgerufenen Funktionen
    inner();
}

sub inner {
    print "$x\n";  # 20 (sieht den lokalen Wert von example)
}

example();
print "$x\n";  # 10 (Original wiederhergestellt)
```

**Besonderheiten:**
- `local` erzeugt temporäre Werte für Package-Variablen
- Sichtbar in der Funktion und allen aufgerufenen Funktionen
- Wert wird nach Funktionsende wiederhergestellt

**Weiterführende Links:**
- [Perl Documentation - local](https://perldoc.perl.org/functions/local)

</TabItem>
<TabItem value="v" label="V">

```v
// Function Scope
fn calculate() int {
    result := 42
    return result
}

// println(result)  // Fehler: result ist nur in calculate() sichtbar
```

**Besonderheiten:**
- Variablen sind auf die Funktion beschränkt, in der sie deklariert werden
- Kein Zugriff auf lokale Variablen von außen

**Weiterführende Links:**
- [V Documentation - Functions](https://github.com/vlang/v/blob/master/doc/docs.md#functions)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
f[x_] := Module[{local = x * 2},
    local + 1
]

f[5]  (* 11 *)
(* local ist hier nicht sichtbar *)
```

**Besonderheiten:**
- `Module[]` erstellt Funktions-lokale Variablen
- Pattern-Parameter (`x_`) sind nur innerhalb der Funktionsdefinition sichtbar

**Weiterführende Links:**
- [Wolfram Language Documentation - Module](https://reference.wolfram.com/language/ref/Module.html)

</TabItem>
</Tabs>


## 4.2.3. Global Scope

Variablen, die im globalen Scope deklariert wurden, sind überall im Programm sichtbar.

### Sprachen {#sprachen}

<Tabs availableTabs={['c', 'common-lisp', 'cpp', 'd', 'dart', 'fortran', 'go', 'javascript', 'julia', 'kotlin', 'lua', 'matlab', 'nim', 'objective-c', 'object-pascal', 'octave', 'perl', 'php', 'python', 'ruby', 'rust', 'scala', 'swift', 'typescript', 'wolfram-language']} orangeTabs={['csharp', 'java', 'prolog']}>
<TabItem value="javascript" label="JavaScript">

```javascript
// Global Scope
var globalCount = 42;  // Global mit var
let globalName = "Hallo";  // Global mit let
const globalPrice = 19.99;  // Global mit const

function example() {
  console.log(globalCount);  // 42
  console.log(globalName);   // "Hallo"
}
```

**Besonderheiten:**
- Variablen außerhalb von Funktionen sind global
- `var`, `let` und `const` können global sein

**Weiterführende Links:**
- [MDN Web Docs - Global Scope](https://developer.mozilla.org/en-US/docs/Glossary/Global_scope)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Global Scope
var globalCount = 42;  // Global mit var
let globalName = "Hallo";  // Global mit let
const globalPrice = 19.99;  // Global mit const

function example(): void {
  console.log(globalCount);  // 42
  console.log(globalName);   // "Hallo"
}
```

**Besonderheiten:**
- Variablen außerhalb von Funktionen sind global
- `var`, `let` und `const` können global sein

**Weiterführende Links:**
- [TypeScript Documentation - Variable Declarations](https://www.typescriptlang.org/docs/handbook/variable-declarations.html)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Globaler Scope über dynamische Prädikate
:- dynamic global_count/1.

set_global :-
    retractall(global_count(_)),
    assert(global_count(42)).

read_global :-
    global_count(Count),
    format("~w~n", [Count]).  % 42

% Globale Flags
:- set_prolog_flag(my_flag, default_value).

read_flag :-
    current_prolog_flag(my_flag, Value),
    format("~w~n", [Value]).
```

**Besonderheiten:**
- Prolog hat keine globalen Variablen im traditionellen Sinne
- Globaler Zustand wird über dynamische Prädikate (`assert`/`retract`) simuliert
- `nb_setval`/`nb_getval` (SWI-Prolog) bieten globale Variablen als Erweiterung
- Prolog-Flags (`set_prolog_flag`/`current_prolog_flag`) für globale Konfiguration

**Weiterführende Links:**
- [SWI-Prolog Manual - Dynamic Predicates](https://www.swi-prolog.org/pldoc/man?predicate=assert/1)

</TabItem>
<TabItem value="python" label="Python">

```python
# Global Scope
global_count = 42
global_name = "Hallo"

def example():
    print(global_count)  # 42
    print(global_name)   # "Hallo"
```

**Besonderheiten:**
- Variablen auf Modulebene sind global
- `global` Keyword zum Modifizieren globaler Variablen in Funktionen

**Weiterführende Links:**
- [Python Documentation - Global Scope](https://docs.python.org/3/tutorial/classes.html#scopes-and-namespaces)

</TabItem>
<TabItem value="java" label="Java">

```java
// Global Scope (Klassenfelder)
public class Example {
  static int globalCount = 42;  // Statisches Feld
  String globalName = "Hallo";  // Instanzfeld
  
  void method() {
    System.out.println(globalCount);  // 42
    System.out.println(globalName);   // "Hallo"
  }
}
```

**Besonderheiten:**
- Keine echten globalen Variablen
- Statische Felder sind klassenweit sichtbar

**Weiterführende Links:**
- [Java Language Specification - Scope](https://docs.oracle.com/javase/specs/jls/se21/html/jls-6.html#jls-6.3)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Global Scope (Klassenfelder)
public class Example {
  static int globalCount = 42;  // Statisches Feld
  string globalName = "Hallo";  // Instanzfeld
  
  void Method() {
    Console.WriteLine(globalCount);  // 42
    Console.WriteLine(globalName);   // "Hallo"
  }
}
```

**Besonderheiten:**
- Keine echten globalen Variablen
- Statische Felder sind klassenweit sichtbar

**Weiterführende Links:**
- [Microsoft C# Documentation - Scope](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/basic-concepts#scopes)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Global Scope
int globalCount = 42;
std::string globalName = "Hallo";

void example() {
  std::cout << globalCount << std::endl;  // 42
  std::cout << globalName << std::endl;   // "Hallo"
}
```

**Besonderheiten:**
- Variablen außerhalb von Funktionen sind global
- `static` für interne Verknüpfung

**Weiterführende Links:**
- [cppreference.com - Scope](https://en.cppreference.com/w/cpp/language/scope)

</TabItem>
<TabItem value="c" label="C">

```c
// Global Scope
int globalCount = 42;
char* globalName = "Hallo";

void example() {
  printf("%d\n", globalCount);  // 42
  printf("%s\n", globalName);   // "Hallo"
}
```

**Besonderheiten:**
- Variablen außerhalb von Funktionen sind global
- `static` für interne Verknüpfung

**Weiterführende Links:**
- [C Standard - Scope](https://en.cppreference.com/w/c/language/scope)

</TabItem>
<TabItem value="go" label="Go">

```go
// Global Scope (Package Level)
var globalCount = 42
var globalName = "Hallo"

func example() {
  fmt.Println(globalCount)  // 42
  fmt.Println(globalName)    // "Hallo"
}
```

**Besonderheiten:**
- Variablen auf Package-Ebene sind global
- Großbuchstaben für exportierte Variablen

**Weiterführende Links:**
- [Go Documentation - Scope](https://go.dev/ref/spec#Declarations_and_scope)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Global Scope (Module Level)
static GLOBAL_COUNT: i32 = 42;
static mut GLOBAL_NAME: &str = "Hallo";

fn example() {
  println!("{}", GLOBAL_COUNT);  // 42
  unsafe {
    println!("{}", GLOBAL_NAME);  // "Hallo"
  }
}
```

**Besonderheiten:**
- `static` für globale Variablen
- `static mut` erfordert `unsafe` Block

**Weiterführende Links:**
- [Rust Documentation - Static Items](https://doc.rust-lang.org/reference/items/static-items.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Global Scope (Top-Level)
val globalCount = 42
var globalName = "Hallo"

fun example() {
  println(globalCount)  // 42
  println(globalName)   // "Hallo"
}
```

**Besonderheiten:**
- Top-Level-Variablen sind global
- Variablen sind im gesamten Package sichtbar

**Weiterführende Links:**
- [Kotlin Documentation - Scope](https://kotlinlang.org/docs/scope-functions.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Global Scope (Object Level)
object Example {
  val globalCount = 42
  var globalName = "Hallo"
  
  def example(): Unit = {
    println(globalCount)  // 42
    println(globalName)    // "Hallo"
  }
}
```

**Besonderheiten:**
- Variablen in Objects sind global
- `val` für immutable, `var` für mutable

**Weiterführende Links:**
- [Scala Documentation - Objects](https://docs.scala-lang.org/tour/singleton-objects.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Global Scope
let globalCount = 42
var globalName = "Hallo"

func example() {
  print(globalCount)  // 42
  print(globalName)   // "Hallo"
}
```

**Besonderheiten:**
- Top-Level-Variablen sind global
- Variablen sind im gesamten Modul sichtbar

**Weiterführende Links:**
- [Swift Documentation - Scope](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/thebasics/)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Global Scope (Top-Level)
int globalCount = 42;
String globalName = "Hallo";

void example() {
  print(globalCount);  // 42
  print(globalName);   // "Hallo"
}
```

**Besonderheiten:**
- Top-Level-Variablen sind global
- Variablen sind im gesamten Library sichtbar

**Weiterführende Links:**
- [Dart Language Tour - Scope](https://dart.dev/guides/language/language-tour#scope)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Global Scope
globalCount = 42
globalName = "Hallo"

function example()
  print(globalCount)  -- 42
  print(globalName)   -- "Hallo"
end
```

**Besonderheiten:**
- Variablen ohne `local` sind global
- Globale Variablen sind überall sichtbar

**Weiterführende Links:**
- [Lua Documentation - Variables](https://www.lua.org/manual/5.4/manual.html#3.3.7)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Global Scope
$globalCount = 42  # $ für globale Variablen
globalName = "Hallo"  # Top-Level-Variable

def example
  puts $globalCount  # 42
  puts globalName    # "Hallo"
end
```

**Besonderheiten:**
- `$` für echte globale Variablen
- Top-Level-Variablen sind im gesamten File sichtbar

**Weiterführende Links:**
- [Ruby Documentation - Variables](https://ruby-doc.org/core-3.1.2/doc/syntax/assignment_rdoc.html)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Globale spezielle Variablen
(defvar *counter* 0)
(defparameter *max-retries* 3)

;; Globale Funktionen
(defun greet (name)
  (format t "Hello, ~a~%" name))
```

**Besonderheiten:**
- `defvar` deklariert globale spezielle Variablen (wird nur einmal initialisiert)
- `defparameter` deklariert globale spezielle Variablen (wird bei jedem Laden neu initialisiert)
- Konvention: Globale Variablen mit `*earmuffs*` umgeben
- Globale Variablen sind dynamisch gebunden (special variables)

**Weiterführende Links:**
- [Common Lisp HyperSpec - defvar](http://www.lispworks.com/documentation/HyperSpec/Body/m_defpar.htm)

</TabItem>
<TabItem value="d" label="D">

```d
// Global Scope (Modul-Level)
module mymodule;

int globalVar = 42;  // Modul-Level Variable

void func1() {
    writeln(globalVar);  // 42
}

void func2() {
    globalVar = 100;  // Kann von überall im Modul geändert werden
}
```

**Besonderheiten:**
- Modul-Level Variablen sind im gesamten Modul sichtbar
- Standard-Sichtbarkeit ist `public` (auch aus anderen Modulen importierbar)
- `private` beschränkt Sichtbarkeit auf das aktuelle Modul
- Thread-Local Storage (TLS) ist Standard für Modul-Level Variablen

**Weiterführende Links:**
- [D Language Specification - Module](https://dlang.org/spec/module.html)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Globaler Scope über Module
module globals
    implicit none
    integer :: counter = 0
end module globals

subroutine increment()
    use globals
    counter = counter + 1
end subroutine
```

**Besonderheiten:**
- Module-Variablen sind global für alle `USE`-Anweisungen
- COMMON-Blöcke (veraltet) für globale Variablen
- Module sind der empfohlene Weg für globalen State

**Weiterführende Links:**
- [Fortran Wiki - Modules](https://fortranwiki.org/fortran/show/Modules)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Globale Variablen
global_var = 42

function modify_global()
    global global_var  # Explizit global deklarieren
    global_var = 100
end

modify_global()
println(global_var)  # 100
```

**Besonderheiten:**
- Globale Variablen erfordern `global` Keyword in Funktionen zum Schreiben
- Lesen globaler Variablen ist ohne `global` möglich
- Globale Variablen können Performance beeinträchtigen (Typ-Instabilität)
- `const` wird für globale Konstanten empfohlen

**Weiterführende Links:**
- [Julia Documentation - Global Scope](https://docs.julialang.org/en/v1/manual/variables-and-scoping/#Global-Scope)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
function setGlobal()
    global sharedVar
    sharedVar = 42;
end

function readGlobal()
    global sharedVar
    disp(sharedVar); % 42
end
```

**Besonderheiten:**
- `global`-Keyword macht eine Variable global zugänglich
- Muss in jeder Funktion deklariert werden, die darauf zugreifen will
- Globale Variablen werden in der Praxis selten empfohlen

**Weiterführende Links:**
- [MATLAB Documentation - Global Variables](https://www.mathworks.com/help/matlab/ref/global.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Global Scope
var globalVar = 100

proc useGlobal() =
  echo globalVar  # 100
  globalVar += 1

useGlobal()
echo globalVar  # 101
```

**Besonderheiten:**
- Top-Level-Variablen sind global im Modul
- Zugriff aus Prozeduren möglich
- Export mit `*` für modulübergreifenden Zugriff

**Weiterführende Links:**
- [Nim Documentation - Modules](https://nim-lang.org/docs/manual.html#modules)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
var
  GlobalCounter: Integer = 0;  // Globale Variable

procedure Increment;
begin
  GlobalCounter := GlobalCounter + 1;
end;

begin
  Increment;
  WriteLn(GlobalCounter);  // 1
end.
```

**Besonderheiten:**
- Globale Variablen im `var`-Block außerhalb von Funktionen/Prozeduren
- Sichtbar in der gesamten Unit und allen Units, die diese importieren
- Unit-private globale Variablen im `implementation`-Abschnitt

**Weiterführende Links:**
- [Free Pascal Documentation - Variables](https://www.freepascal.org/docs-html/ref/refse14.html)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Globale Variable
int globalCounter = 0;

// Globale Konstante
NSString *const AppName = @"MyApp";

// Static globale Variable (nur in dieser Datei sichtbar)
static int fileCounter = 0;
```

**Besonderheiten:**
- C-style globale Variablen und Konstanten
- `static` begrenzt die Sichtbarkeit auf die Datei (File Scope)
- Globale ObjC-Objekte benötigen `const` oder `static`

**Weiterführende Links:**
- [Apple Documentation - Programming with Objective-C](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
global counter;
counter = 0;

function increment()
    global counter;
    counter = counter + 1;
end

increment();
disp(counter);  % 1
```

**Besonderheiten:**
- `global`-Keyword deklariert globale Variablen
- Muss in jeder Funktion erneut mit `global` deklariert werden
- `persistent`-Variablen behalten ihren Wert zwischen Funktionsaufrufen

**Weiterführende Links:**
- [GNU Octave Documentation - Global Variables](https://octave.org/doc/v8.1.0/Global-Variables.html)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
// Global Scope: global Keyword für Zugriff
$counter = 0;

function increment() {
    global $counter;
    $counter++;
}

increment();
echo $counter; // 1
?>
```

**Besonderheiten:**
- Globale Variablen erfordern `global` Keyword in Funktionen
- `$GLOBALS` Superglobal-Array als Alternative
- Globaler Scope ist isoliert von Function Scope

**Weiterführende Links:**
- [PHP Documentation - Variable Scope](https://www.php.net/manual/en/language.variables.scope.php)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Global Scope mit our
our $global_var = 42;

sub example {
    print "$global_var\n";  # 42
}

example();
```

**Besonderheiten:**
- `our` deklariert Variablen im Package-Scope (global)
- Ohne `use strict` sind Variablen automatisch global
- `our` macht Package-Variablen lexikalisch sichtbar

**Weiterführende Links:**
- [Perl Documentation - our](https://perldoc.perl.org/functions/our)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Globale Variablen *)
globalVar = 42

f[] := Print[globalVar]
f[]  (* 42 *)
```

**Besonderheiten:**
- Standardmäßig sind alle Zuweisungen auf Top-Level global
- Globale Symbole gehören zu einem Context (z.B. `Global``)

**Weiterführende Links:**
- [Wolfram Language Documentation - Variables and Functions](https://reference.wolfram.com/language/guide/VariablesAndFunctions.html)

</TabItem>
</Tabs>


## 4.2.4. No Global Variables

Sprachen, die keine globalen Variablen erlauben oder deren Verwendung einschränken.

### Sprachen {#sprachen}

<Tabs availableTabs={['haskell', 'elm', 'erlang', 'elixir', 'clojure', 'gleam', 'koka', 'lean4', 'mercury', 'purescript', 'roc', 'idris']}>
<TabItem value="haskell" label="Haskell">

```haskell
-- Keine globalen Variablen
-- Alle Werte sind in Modulen organisiert
module Example where

count :: Int
count = 42

name :: String
name = "Hallo"
```

**Besonderheiten:**
- Keine globalen Variablen im traditionellen Sinne
- Alle Werte sind in Modulen organisiert
- Immutable by default

**Weiterführende Links:**
- [Haskell Documentation - Modules](https://www.haskell.org/tutorial/modules.html)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Keine globalen Variablen
-- Alle Werte sind in Modulen organisiert
module Example exposing (count, name)

count : Int
count = 42

name : String
name = "Hallo"
```

**Besonderheiten:**
- Keine globalen Variablen
- Alle Werte sind in Modulen organisiert
- Immutable by default

**Weiterführende Links:**
- [Elm Documentation - Modules](https://guide.elm-lang.org/core_language/modules.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% Keine globalen Variablen
% Alle Werte sind in Modulen organisiert
-module(example).
-export([count/0, name/0]).

count() -> 42.
name() -> "Hallo".
```

**Besonderheiten:**
- Keine globalen Variablen
- Alle Werte sind in Modulen organisiert
- Immutable by default

**Weiterführende Links:**
- [Erlang Documentation - Modules](https://www.erlang.org/doc/reference_manual/modules.html)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Keine globalen Variablen
# Alle Werte sind in Modulen organisiert
defmodule Example do
  def count, do: 42
  def name, do: "Hallo"
end
```

**Besonderheiten:**
- Keine globalen Variablen
- Alle Werte sind in Modulen organisiert
- Immutable by default

**Weiterführende Links:**
- [Elixir Documentation - Modules](https://elixir-lang.org/getting-started/modules-and-functions.html)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Keine globalen Variablen im traditionellen Sinne
;; Alle Werte sind in Namespaces organisiert
(ns example)

(def count 42)
(def name "Hallo")
```

**Besonderheiten:**
- Keine globalen Variablen im traditionellen Sinne
- Alle Werte sind in Namespaces organisiert
- Immutable by default

**Weiterführende Links:**
- [Clojure Documentation - Namespaces](https://clojure.org/reference/namespaces)

</TabItem>
<TabItem value="gleam" label="Gleam">

```erlang
// Keine globalen Variablen
// Alle Werte sind in Modulen organisiert
pub fn count() -> Int {
  42
}

pub fn name() -> String {
  "Hallo"
}
```

**Besonderheiten:**
- Keine globalen Variablen
- Alle Werte sind in Modulen organisiert
- Immutable by default

**Weiterführende Links:**
- [Gleam Documentation - Modules](https://gleam.run/documentation/)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Keine globalen Variablen
// Alle Werte sind in Modulen organisiert
module example

val count: int = 42
val name: string = "Hallo"

// Modul-Definitionen sind unveränderlich
// Kein globaler mutabler Zustand möglich
```

**Besonderheiten:**
- Keine globalen mutablen Variablen
- Alle Modul-Level-Definitionen sind unveränderlich
- Mutabler Zustand wird durch Effekte (z.B. `ref`) explizit modelliert
- Effekt-System erzwingt explizite Verwaltung von Seiteneffekten

**Weiterführende Links:**
- [Koka Language Guide - Modules](https://koka-lang.github.io/koka/doc/book.html#sec-modules)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Keine globalen Variablen
-- Alle Werte sind in Namespaces organisiert
namespace Example

def count : Nat := 42
def name : String := "Hallo"

-- Namespace-Definitionen sind unveränderlich
-- Kein globaler mutabler Zustand möglich
```

**Besonderheiten:**
- Keine globalen mutablen Variablen
- Alle Top-Level-Definitionen (`def`) sind unveränderlich
- Werte sind in Namespaces organisiert
- Mutabler Zustand wird durch Monaden (z.B. `IO`, `StateM`) explizit modelliert

**Weiterführende Links:**
- [Lean 4 Documentation - Namespaces](https://lean-lang.org/lean4/doc/organization.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```mercury
% Keine globalen Variablen
% Alle Werte sind in Modulen organisiert
:- module example.
:- interface.

:- func count = int.
:- func name = string.

:- implementation.

count = 42.
name = "Hallo".
```

**Besonderheiten:**
- Keine globalen mutablen Variablen
- Alle Definitionen sind in Modulen organisiert
- Modul-Level-Funktionen und -Prädikate sind unveränderlich
- Mutabler Zustand wird über I/O-State (`io.state`) explizit verwaltet

**Weiterführende Links:**
- [Mercury Language Reference - Modules](https://www.mercurylang.org/information/doc-release/mercury_ref/Modules.html)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Keine globalen Variablen
-- Alle Werte sind in Modulen organisiert
module Example where

count :: Int
count = 42

name :: String
name = "Hallo"
```

**Besonderheiten:**
- Keine globalen Variablen
- Alle Werte sind in Modulen organisiert
- Immutable by default

**Weiterführende Links:**
- [PureScript Documentation - Modules](https://www.purescript.org/learn/getting-started/)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Keine globalen Variablen
-- Alle Werte sind in Modulen organisiert
count : I64
count = 42

name : Str
name = "Hallo"
```

**Besonderheiten:**
- Keine globalen Variablen
- Alle Werte sind in Modulen organisiert
- Immutable by default

**Weiterführende Links:**
- [Roc Documentation - Modules](https://www.roc-lang.org/)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Keine globalen Variablen
-- Alle Werte sind in Modulen organisiert
module Example

count : Int
count = 42

name : String
name = "Hallo"
```

**Besonderheiten:**
- Keine globalen Variablen
- Alle Werte sind in Modulen organisiert
- Immutable by default

**Weiterführende Links:**
- [Idris 2 Documentation - Modules](https://idris2.readthedocs.io/en/latest/tutorial/modules.html)

</TabItem>
</Tabs>


## 4.2.5. Lexical Scoping

Variablen werden anhand ihrer Position im Quellcode aufgelöst, nicht anhand der Aufrufkette.

### Sprachen {#sprachen}

<Tabs availableTabs={['clojure', 'common-lisp', 'cpp', 'csharp', 'd', 'dart', 'elm', 'fortran', 'go', 'groovy', 'idris', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'lua', 'matlab', 'mercury', 'nim', 'objective-c', 'object-pascal', 'perl', 'python', 'racket', 'roc', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'wolfram-language', 'zig']} orangeTabs={['c', 'octave', 'v']}>
<TabItem value="javascript" label="JavaScript">

```javascript
// Lexical Scoping
function outer() {
  let count = 42;
  
  function inner() {
    console.log(count);  // 42 (aus outer Scope)
  }
  
  inner();
}
```

**Besonderheiten:**
- `let` und `const` haben Lexical Scoping
- `var` hat auch Lexical Scoping (Function Scope)

**Weiterführende Links:**
- [MDN Web Docs - Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Lexical Scoping
function outer(): void {
  let count = 42;
  
  function inner(): void {
    console.log(count);  // 42 (aus outer Scope)
  }
  
  inner();
}
```

**Besonderheiten:**
- `let` und `const` haben Lexical Scoping
- `var` hat auch Lexical Scoping (Function Scope)

**Weiterführende Links:**
- [TypeScript Documentation - Closures](https://www.typescriptlang.org/docs/handbook/variable-declarations.html)

</TabItem>
<TabItem value="python" label="Python">

```python
# Lexical Scoping
def outer():
    count = 42
    
    def inner():
        print(count)  # 42 (aus outer Scope)
    
    inner()
```

**Besonderheiten:**
- Python hat Lexical Scoping
- Closures können auf Variablen aus äußeren Scopes zugreifen

**Weiterführende Links:**
- [Python Documentation - Closures](https://docs.python.org/3/tutorial/classes.html#scopes-and-namespaces)

</TabItem>
<TabItem value="java" label="Java">

```java
// Lexical Scoping
void outer() {
  int count = 42;
  
  class Inner {
    void inner() {
      System.out.println(count);  // 42 (aus outer Scope)
    }
  }
  
  new Inner().inner();
}
```

**Besonderheiten:**
- Java hat Lexical Scoping
- Innere Klassen können auf Variablen aus äußeren Scopes zugreifen

**Weiterführende Links:**
- [Java Language Specification - Scope](https://docs.oracle.com/javase/specs/jls/se21/html/jls-6.html#jls-6.3)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Lexical Scoping
void Outer() {
  int count = 42;
  
  Action inner = () => {
    Console.WriteLine(count);  // 42 (aus outer Scope)
  };
  
  inner();
}
```

**Besonderheiten:**
- C# hat Lexical Scoping
- Lambda-Ausdrücke können auf Variablen aus äußeren Scopes zugreifen

**Weiterführende Links:**
- [Microsoft C# Documentation - Closures](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/lambda-expressions)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Lexical Scoping
void outer() {
  int count = 42;
  
  auto inner = [count]() {
    std::cout << count << std::endl;  // 42 (aus outer Scope)
  };
  
  inner();
}
```

**Besonderheiten:**
- C++ hat Lexical Scoping
- Lambda-Ausdrücke können Variablen aus äußeren Scopes erfassen

**Weiterführende Links:**
- [cppreference.com - Lambda Expressions](https://en.cppreference.com/w/cpp/language/lambda)

</TabItem>
<TabItem value="c" label="C">

```c
// Lexical Scoping (eingeschränkt)
void outer() {
  int count = 42;
  
  // C hat keine Closures
  // Innere Funktionen können nicht auf äußere Variablen zugreifen
}
```

**Besonderheiten:**
- C hat kein vollständiges Lexical Scoping
- Keine Closures oder innere Funktionen

**Weiterführende Links:**
- [C Standard - Scope](https://en.cppreference.com/w/c/language/scope)

</TabItem>
<TabItem value="go" label="Go">

```go
// Lexical Scoping
func outer() {
  count := 42
  
  inner := func() {
    fmt.Println(count)  // 42 (aus outer Scope)
  }
  
  inner()
}
```

**Besonderheiten:**
- Go hat Lexical Scoping
- Closures können auf Variablen aus äußeren Scopes zugreifen

**Weiterführende Links:**
- [Go Documentation - Closures](https://go.dev/tour/moretypes/25)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Lexical Scoping
fn outer() {
  let count = 42;
  
  let inner = || {
    println!("{}", count);  // 42 (aus outer Scope)
  };
  
  inner();
}
```

**Besonderheiten:**
- Rust hat Lexical Scoping
- Closures können auf Variablen aus äußeren Scopes zugreifen

**Weiterführende Links:**
- [Rust Documentation - Closures](https://doc.rust-lang.org/book/ch13-01-closures.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Lexical Scoping
fun outer() {
  val count = 42
  
  val inner = {
    println(count)  // 42 (aus outer Scope)
  }
  
  inner()
}
```

**Besonderheiten:**
- Kotlin hat Lexical Scoping
- Closures können auf Variablen aus äußeren Scopes zugreifen

**Weiterführende Links:**
- [Kotlin Documentation - Closures](https://kotlinlang.org/docs/lambdas.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Lexical Scoping
def outer(): Unit = {
  val count = 42
  
  val inner = () => {
    println(count)  // 42 (aus outer Scope)
  }
  
  inner()
}
```

**Besonderheiten:**
- Scala hat Lexical Scoping
- Closures können auf Variablen aus äußeren Scopes zugreifen

**Weiterführende Links:**
- [Scala Documentation - Closures](https://docs.scala-lang.org/tour/higher-order-functions.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Lexical Scoping
func outer() {
  let count = 42
  
  let inner = {
    print(count)  // 42 (aus outer Scope)
  }
  
  inner()
}
```

**Besonderheiten:**
- Swift hat Lexical Scoping
- Closures können auf Variablen aus äußeren Scopes zugreifen

**Weiterführende Links:**
- [Swift Documentation - Closures](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/closures/)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Lexical Scoping
void outer() {
  int count = 42;
  
  void inner() {
    print(count);  // 42 (aus outer Scope)
  }
  
  inner();
}
```

**Besonderheiten:**
- Dart hat Lexical Scoping
- Closures können auf Variablen aus äußeren Scopes zugreifen

**Weiterführende Links:**
- [Dart Language Tour - Closures](https://dart.dev/guides/language/language-tour#functions)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Lexical Scoping: Variablen werden im definierenden Kontext aufgelöst
(defn make-adder [x]
  (fn [y] (+ x y)))  ; x wird lexikalisch gebunden

(def add5 (make-adder 5))
(add5 3)  ; 8 — x ist 5 aus dem lexikalischen Kontext
```

**Besonderheiten:**
- Lexikalisches Scoping ist Standard in Clojure
- Closures erfassen ihren lexikalischen Kontext
- `let`, `fn`, `defn` erzeugen lexikalische Bindungen

**Weiterführende Links:**
- [Clojure Documentation - Vars and the Global Environment](https://clojure.org/reference/vars)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Lexical Scoping (Standard in Common Lisp)
(let ((x 10))
  (let ((f (lambda () x)))
    (let ((x 20))
      (funcall f))))  ; Gibt 10 zurück (lexikalisches x)
```

**Besonderheiten:**
- Lexical Scoping ist der Standard für `let`-Bindungen
- Closures erfassen lexikalische Umgebung
- Nur mit `defvar`/`defparameter` deklarierte Variablen nutzen dynamisches Scoping
- Seit ANSI Common Lisp ist lexikalisches Scoping der Default

**Weiterführende Links:**
- [Common Lisp HyperSpec - Lexical Variables](http://www.lispworks.com/documentation/HyperSpec/Body/03_aaba.htm)

</TabItem>
<TabItem value="d" label="D">

```d
// Lexical Scoping
int x = 10;

void outer() {
    int y = 20;

    void inner() {
        writeln(x);  // 10 (Zugriff auf Modul-Level)
        writeln(y);  // 20 (Zugriff auf umgebende Funktion)
    }

    inner();
}
```

**Besonderheiten:**
- Variablen werden anhand der Position im Quellcode aufgelöst
- Innere Funktionen haben Zugriff auf Variablen äußerer Funktionen
- Closures erfassen Variablen lexikalisch
- Kein Dynamic Scoping

**Weiterführende Links:**
- [D Language Specification - Scope](https://dlang.org/spec/declaration.html#scope)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Lexical Scoping
outerFunction : Int -> Int -> Int
outerFunction x =
    let
        innerFunction y = x + y  -- x aus dem äußeren Scope
    in
    innerFunction
```

**Besonderheiten:**
- Innere Funktionen haben Zugriff auf Variablen des äußeren Scopes
- Scope wird zur Compile-Zeit bestimmt (lexikalisch)
- Kein dynamisches Scoping

**Weiterführende Links:**
- [Elm Documentation - Functions](https://guide.elm-lang.org/core_language.html)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Lexical Scoping mit internen Prozeduren
subroutine outer()
    implicit none
    integer :: x = 10

contains
    subroutine inner()
        ! x ist durch lexikalisches Scoping sichtbar
        print *, x  ! Zugriff auf x aus outer()
    end subroutine inner
end subroutine outer
```

**Besonderheiten:**
- Interne Prozeduren (nach `CONTAINS`) haben Zugriff auf Variablen der umgebenden Prozedur
- Host Association: Variablen werden aus dem umgebenden Scope geerbt
- Module-Variablen über `USE` Association zugänglich

**Weiterführende Links:**
- [Fortran Wiki - Internal procedures](https://fortranwiki.org/fortran/show/Internal+procedures)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Lexical Scoping
def outer = "außen"

def myFunction() {
    def inner = "innen"
    println outer // Zugriff auf äußere Variable (in Scripts)
}

// Closures nutzen Lexical Scoping
def createClosure() {
    def x = 10
    return { -> x + 1 } // x wird lexikalisch gebunden
}

def closure = createClosure()
println closure() // 11
```

**Besonderheiten:**
- Groovy verwendet Lexical Scoping (statisches Scoping)
- Closures erfassen Variablen aus dem umgebenden lexikalischen Scope
- Closure-Delegate kann das Scoping-Verhalten beeinflussen

**Weiterführende Links:**
- [Groovy Documentation - Closures](https://groovy-lang.org/closures.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Lexical Scoping
outer : Int
outer =
    let x = 10
        inner = let y = 20
                in x + y  -- x aus äußerem Scope sichtbar
    in inner
```

**Besonderheiten:**
- Variablen werden lexikalisch aufgelöst
- `let` und `where` erstellen neue Scopes
- Innere Scopes haben Zugriff auf äußere Bindungen

**Weiterführende Links:**
- [Idris 2 Documentation - Types and Functions](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
function make_counter()
    count = 0
    return function()
        count += 1  # Zugriff auf Variable aus äußerem Scope
        return count
    end
end

counter = make_counter()
println(counter())  # 1
println(counter())  # 2
println(counter())  # 3
```

**Besonderheiten:**
- Julia verwendet lexikalisches (statisches) Scoping
- Closures erfassen Variablen aus dem umschließenden Scope
- Scope wird zur Compile-Zeit bestimmt

**Weiterführende Links:**
- [Julia Documentation - Scope of Variables](https://docs.julialang.org/en/v1/manual/variables-and-scoping/)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Lexical Scoping
fun make-counter(): () -> console int
  var count := 0
  fn()
    count := count + 1  // Zugriff auf Variable aus äußerem Scope
    println(count.show)
    count

val counter = make-counter()
counter()  // 1
counter()  // 2
counter()  // 3
```

**Besonderheiten:**
- Koka verwendet Lexical Scoping
- Closures erfassen Variablen aus dem umgebenden lexikalischen Scope
- Innere Funktionen haben Zugriff auf `val`- und `var`-Bindungen der äußeren Funktion
- Scope wird zur Compile-Zeit bestimmt

**Weiterführende Links:**
- [Koka Language Guide - Functions](https://koka-lang.github.io/koka/doc/book.html#sec-functions)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Lexical Scoping
def makeAdder (x : Nat) : Nat → Nat :=
  fun y => x + y  -- x wird lexikalisch gebunden

def add5 := makeAdder 5
#eval add5 3  -- 8 — x ist 5 aus dem lexikalischen Kontext

-- Closures in do-Blöcken
def outer : IO Unit := do
  let count := 42
  let inner := fun () => IO.println s!"{count}"  -- count aus outer Scope
  inner ()
```

**Besonderheiten:**
- Lean 4 verwendet Lexical Scoping
- Closures erfassen Variablen aus dem umgebenden lexikalischen Scope
- Scope wird zur Compile-Zeit bestimmt
- Kein dynamisches Scoping

**Weiterführende Links:**
- [Lean 4 Documentation - Functions](https://lean-lang.org/lean4/doc/lean-by-example/functions.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Lexical Scoping: Closures erfassen äußere Variablen
function makeCounter()
    local count = 0
    return function()
        count = count + 1    -- Erfasst "count" aus dem äußeren Scope
        return count
    end
end

local counter = makeCounter()
print(counter())  -- 1
print(counter())  -- 2
print(counter())  -- 3

-- Verschachtelte Scopes
local x = "global"
do
    local x = "outer"
    local function inner()
        print(x)    -- "outer" (lexikalisch gebunden)
    end
    inner()
end
```

**Besonderheiten:**
- Lua verwendet vollständiges Lexical Scoping (seit Lua 5.0)
- Closures erfassen Upvalues (Referenzen auf äußere `local`-Variablen)
- Upvalues werden als Referenzen erfasst, nicht als Kopien
- Lua hatte vor Version 5.0 eingeschränktes Scoping (nur ein Upvalue-Level)

**Weiterführende Links:**
- [Lua Reference Manual - Visibility Rules](https://www.lua.org/manual/5.4/manual.html#3.5)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
function result = outer()
    x = 10;
    result = inner();
    
    function y = inner()
        y = x + 5; % Zugriff auf x aus outer
    end
end
```

**Besonderheiten:**
- Verschachtelte Funktionen haben Zugriff auf Variablen der äußeren Funktion
- Anonyme Funktionen erfassen Variablen aus dem umgebenden Scope (Closures)

**Weiterführende Links:**
- [MATLAB Documentation - Nested Functions](https://www.mathworks.com/help/matlab/matlab_prog/nested-functions.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```mercury
% Lexical Scoping: Variablen werden im Quellcode aufgelöst
:- pred outer(io::di, io::uo) is det.
outer(!IO) :-
    Count = 42,
    % Lambda-Ausdruck erfasst Count aus dem umgebenden Scope
    Inner = (pred(IO0::di, IO1::uo) is det :-
        io.format("%d\n", [i(Count)], IO0, IO1)
    ),
    Inner(!IO).

% Variablen in Klauseln werden lexikalisch aufgelöst
:- func add(int, int) = int.
add(X, Y) = X + Y.
```

**Besonderheiten:**
- Mercury verwendet Lexical Scoping
- Variablen werden anhand ihrer Position im Quellcode aufgelöst
- Lambda-Ausdrücke können Variablen aus dem umgebenden Scope erfassen (Closures)
- Kein dynamisches Scoping

**Weiterführende Links:**
- [Mercury Language Reference - Clauses](https://www.mercurylang.org/information/doc-release/mercury_ref/Clauses.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Lexical Scoping
var x = "global"

proc outer() =
  var x = "outer"
  proc inner() =
    echo x  # "outer" (lexikalisch gebunden)
  inner()

outer()
echo x  # "global"
```

**Besonderheiten:**
- Nim verwendet Lexical Scoping
- Innere Funktionen können auf äußere Variablen zugreifen
- Closures erfassen Variablen lexikalisch

**Weiterführende Links:**
- [Nim Documentation - Scoping Rules](https://nim-lang.org/docs/manual.html#scoping-rules)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
procedure Outer;
var
  x: Integer;

  procedure Inner;
  begin
    x := 42;  // Zugriff auf Variable der äußeren Funktion
  end;

begin
  x := 0;
  Inner;
  WriteLn(x);  // 42
end;
```

**Besonderheiten:**
- Lexical Scoping: Verschachtelte Funktionen sehen Variablen der äußeren Funktion
- Statische Bindung zur Compile-Zeit

**Weiterführende Links:**
- [Free Pascal Documentation - Procedures](https://www.freepascal.org/docs-html/ref/refch14.html)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
int outer = 10;

void (^block)(void) = ^{
    // Block sieht outer über Lexical Scoping
    NSLog(@"%d", outer); // 10
};

block();
```

**Besonderheiten:**
- C-style lexikalisches Scoping
- Blocks (Closures) erfassen Variablen aus dem umgebenden Scope
- Erfasste Variablen werden standardmäßig als Kopie erfasst
- `__block` Qualifier ermöglicht Modifikation erfasster Variablen

**Weiterführende Links:**
- [Apple Documentation - Blocks](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/WorkingwithBlocks/WorkingwithBlocks.html)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
x = 10;
func = @() disp(x);  % Anonyme Funktion erfasst x aus dem äußeren Scope
func();  % Gibt 10 aus
```

**Besonderheiten:**
- Anonyme Funktionen verwenden Lexical Scoping (Werte werden bei Erstellung erfasst)
- Reguläre Funktionen haben eigenen Scope (kein Zugriff auf äußere lokale Variablen)

**Weiterführende Links:**
- [GNU Octave Documentation - Anonymous Functions](https://octave.org/doc/v8.1.0/Anonymous-Functions.html)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Lexical Scoping mit my
my $x = 10;

sub outer {
    my $y = 20;
    sub inner {
        print "$x\n";  # 10 (lexikalisch sichtbar)
        print "$y\n";  # 20 (lexikalisch sichtbar)
    }
    inner();
}

outer();
```

**Besonderheiten:**
- `my` erzeugt lexikalisch gebundene Variablen
- Variablen sind in umschließenden Blöcken sichtbar (Closures)
- Standard-Scoping-Mechanismus in modernem Perl

**Weiterführende Links:**
- [Perl Documentation - Scoping](https://perldoc.perl.org/perlsub#Private-Variables-via-my())

</TabItem>
<TabItem value="racket" label="Racket">

```racket
;; Lexical Scoping
(define x 10)

(define (outer)
  (define x 20)
  (define (inner)
    x)  ; Referenziert x aus outer (20), nicht global (10)
  (inner))

(outer)  ; 20
```

**Besonderheiten:**
- Lexical Scoping ist das Standard-Scoping-Modell
- Variablen werden im lexikalischen Kontext aufgelöst
- Closures erfassen lexikalische Umgebung

**Weiterführende Links:**
- [Racket Documentation - Scope](https://docs.racket-lang.org/guide/let.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Lexical Scoping
outer = 10
inner =
    x = outer + 5
    x
```

**Besonderheiten:**
- Lexikalisches Scoping
- Innere Scopes haben Zugriff auf äußere Bindungen
- Closures erfassen Variablen lexikalisch

**Weiterführende Links:**
- [Roc Documentation](https://www.roc-lang.org/tutorial)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
(define (outer)
  (define x 10)
  (define (inner)
    (display x))  ; Zugriff auf x aus dem umgebenden Scope
  (inner))

(let ((x 1))
  (let ((f (lambda () x)))
    (let ((x 2))
      (f))))  ; Gibt 1 zurück (lexical scoping)
```

**Besonderheiten:**
- Scheme hat Lexical Scoping als fundamentales Feature eingeführt
- Closures erfassen Variablen aus dem lexikalischen Scope
- `let`, `let*`, `letrec` erstellen lexikalische Scopes

**Weiterführende Links:**
- [Scheme Documentation - Lexical Scoping](https://www.scheme.com/tspl4/binding.html)

</TabItem>
<TabItem value="v" label="V">

```v
// Lexical Scoping
x := 10

fn outer() {
    // x ist hier nicht sichtbar (kein Zugriff auf äußere Variablen)
    y := 20

    inner_fn := fn [y] () {
        println(y)  // Zugriff über Capture
    }
    inner_fn()
}
```

**Besonderheiten:**
- Lexical Scoping: Scope wird zur Kompilierzeit bestimmt
- Closures müssen Variablen explizit mit `[var]` capturen
- Funktionen haben keinen impliziten Zugriff auf äußere Variablen

**Weiterführende Links:**
- [V Documentation - Closures](https://github.com/vlang/v/blob/master/doc/docs.md#closures)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Lexical Scoping mit Module *)
x = 10;
f[] := Module[{x = 20},
    g[] := x;  (* Bezieht sich auf lokales x *)
    g[]
]
f[]  (* 20 *)
```

**Besonderheiten:**
- `Module[]` verwendet lexikalisches Scoping
- Lokale Variablen werden durch eindeutige Symbole ersetzt

**Weiterführende Links:**
- [Wolfram Language Documentation - Module](https://reference.wolfram.com/language/ref/Module.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Lexical Scoping: Scope wird zur Compile-Zeit bestimmt
const std = @import("std");

const global_value: i32 = 100;

fn outerFunction() void {
    const outer_value: i32 = 50;

    // Inner Block kann auf outer_value zugreifen
    {
        const inner_value: i32 = outer_value + global_value;
        std.debug.print("{}\n", .{inner_value});  // 150
    }
}
```

**Besonderheiten:**
- Zig verwendet lexikalisches Scoping
- Scope wird zur Compile-Zeit bestimmt, nicht zur Laufzeit
- Innere Blöcke können auf Variablen äußerer Blöcke zugreifen
- Kein dynamisches Scoping

**Weiterführende Links:**
- [Zig Documentation - Variables](https://ziglang.org/documentation/master/#Variables)

</TabItem>
</Tabs>


## 4.2.6. Dynamic Scoping

Variablen werden anhand der Aufrufkette aufgelöst, nicht anhand ihrer Position im Quellcode.

### Sprachen {#sprachen}

<Tabs availableTabs={['clojure', 'common-lisp', 'perl', 'wolfram-language']}>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Dynamic Scoping mit special variables
(defvar *count* 42)  ; Special variable (dynamic)

(defun outer ()
  (let ((*count* 100))  ; Dynamisch gebunden
    (inner)))

(defun inner ()
  (format t "~a~%" *count*))  ; Verwendet dynamisch gebundene Variable

(outer)  ; Gibt 100 aus, nicht 42
```

**Besonderheiten:**
- `defvar` und `defparameter` erzeugen special variables
- `*` Konvention für special variables
- Dynamische Bindung mit `let`

**Weiterführende Links:**
- [Common Lisp HyperSpec - Dynamic Variables](http://www.lispworks.com/documentation/HyperSpec/Body/03_abab.htm)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Dynamic Scoping mit local
our $count = 42;  # Package variable

sub outer {
  local $count = 100;  # Dynamisch gebunden
  inner();
}

sub inner {
  print "$count\n";  # Verwendet dynamisch gebundene Variable
}

outer();  # Gibt 100 aus, nicht 42
```

**Besonderheiten:**
- `local` für dynamische Bindung
- `our` für Package-Variablen
- Dynamisches Scoping ist verfügbar, aber nicht standardmäßig

**Weiterführende Links:**
- [Perl Documentation - local](https://perldoc.perl.org/functions/local)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Dynamic Scoping mit ^:dynamic und binding
(def ^:dynamic *greeting* "Hello")

(defn greet [name]
  (println (str *greeting* ", " name "!")))

(greet "Alice")  ; Hello, Alice!

(binding [*greeting* "Hallo"]
  (greet "Alice"))  ; Hallo, Alice! (dynamisch überschrieben)

(greet "Alice")  ; Hello, Alice! (Originalwert)
```

**Besonderheiten:**
- Dynamische Vars werden mit `^:dynamic` Metadata deklariert
- Konvention: Earmuffs (`*name*`) für dynamische Vars
- `binding` setzt Thread-lokale Werte
- Dynamisches Scoping ist explizit opt-in (Standard ist lexikalisch)

**Weiterführende Links:**
- [Clojure Documentation - Vars](https://clojure.org/reference/vars)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Dynamic Scoping mit Block *)
x = 10;
f[] := x;
Block[{x = 20},
    f[]  (* 20 - dynamisches Scoping, verwendet den Block-Wert *)
]
f[]  (* 10 - außerhalb des Blocks wieder original *)
```

**Besonderheiten:**
- `Block[]` verwendet dynamisches Scoping
- Temporäre Bindungen gelten für alle aufgerufenen Funktionen innerhalb des Blocks

**Weiterführende Links:**
- [Wolfram Language Documentation - Block](https://reference.wolfram.com/language/ref/Block.html)

</TabItem>
</Tabs>

