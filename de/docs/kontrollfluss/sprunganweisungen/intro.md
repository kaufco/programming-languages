---
slug: /kontrollfluss/sprunganweisungen
title: 6.4. Sprunganweisungen
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 6.4. Sprunganweisungen

Kontrollfluss durch Sprünge und Ausnahmen.

## 6.4.1. Return Statements

Anweisungen, die die Ausführung einer Funktion beenden und optional einen Wert zurückgeben. Ermöglichen es, Funktionen vorzeitig zu beenden und Ergebnisse an den Aufrufer zurückzugeben.

### Sprachen {#sprachen}

<Tabs availableTabs={['ada', 'c', 'carbon', 'common-lisp', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'eiffel', 'fortran', 'go', 'groovy', 'haxe', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'lua', 'matlab', 'mercury', 'mojo', 'nim', 'objective-c', 'object-pascal', 'ocaml', 'octave', 'odin', 'perl', 'php', 'python', 'r', 'ruby', 'rust', 'scala', 'swift', 'typescript', 'v', 'vbnet', 'wolfram-language', 'zig']}>
<TabItem value="ada" label="Ada">

```ada
-- Return Statement
function add(a, b: Integer) return Integer is
begin
    return a + b;
end add;
```

**Besonderheiten:**
- `return` beendet die Funktion
- Muss einen Wert zurückgeben, wenn die Funktion einen Rückgabetyp hat

**Weiterführende Links:**
- [Ada Reference Manual - Return Statement](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-6-5.html)

</TabItem>
<TabItem value="c" label="C">

```c
// Return Statement
int add(int a, int b) {
    return a + b;
}
```

**Besonderheiten:**
- `return` beendet die Funktion
- Muss einen Wert zurückgeben, wenn die Funktion einen Rückgabetyp hat
- `return;` für void-Funktionen

**Weiterführende Links:**
- [C Standard - Return statement](https://en.cppreference.com/w/c/language/return)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Return Statement
fn add(a: i32, b: i32) -> i32 {
    return a + b;
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
// Return Statement
int add(int a, int b) {
    return a + b;
}
```

**Besonderheiten:**
- `return` beendet die Funktion
- Muss einen Wert zurückgeben, wenn die Funktion einen Rückgabetyp hat
- `return;` für void-Funktionen

**Weiterführende Links:**
- [cppreference.com - Return statement](https://en.cppreference.com/w/cpp/language/return)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Return Statement
def add(a : Int32, b : Int32) : Int32
  return a + b
end
```

**Besonderheiten:**
- `return` beendet die Funktion
- Letzter Ausdruck ist impliziter Return (optional)

**Weiterführende Links:**
- [Crystal Documentation - Methods](https://crystal-lang.org/reference/1.11/syntax_and_semantics/methods.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Return Statement
int Add(int a, int b) {
    return a + b;
}
```

**Besonderheiten:**
- `return` beendet die Funktion
- Muss einen Wert zurückgeben, wenn die Funktion einen Rückgabetyp hat
- `return;` für void-Funktionen

**Weiterführende Links:**
- [Microsoft C# Documentation - return statement](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/statements/jump-statements#the-return-statement)

</TabItem>
<TabItem value="d" label="D">

```d
// Return Statement
int add(int a, int b) {
    return a + b;
}
```

**Besonderheiten:**
- `return` beendet die Funktion
- Muss einen Wert zurückgeben, wenn die Funktion einen Rückgabetyp hat
- `return;` für void-Funktionen

**Weiterführende Links:**
- [D Language Specification - Return Statement](https://dlang.org/spec/statement.html#return_statement)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Return Statement
int add(int a, int b) {
  return a + b;
}
```

**Besonderheiten:**
- `return` beendet die Funktion
- Muss einen Wert zurückgeben, wenn die Funktion einen Rückgabetyp hat
- `return;` für void-Funktionen

**Weiterführende Links:**
- [Dart Language Tour - Return values](https://dart.dev/guides/language/language-tour#return-values)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
-- Return Statement
add(a, b: INTEGER): INTEGER is
    do
        Result := a + b
    end
```

**Besonderheiten:**
- Verwendet `Result` für den Rückgabewert
- Kein explizites `return` Statement

**Weiterführende Links:**
- [Eiffel Documentation - Functions](https://www.eiffel.org/doc/eiffel/Functions)

</TabItem>
<TabItem value="go" label="Go">

```go
// Return Statement
func add(a, b int) int {
    return a + b
}
```

**Besonderheiten:**
- `return` beendet die Funktion
- Muss einen Wert zurückgeben, wenn die Funktion einen Rückgabetyp hat
- Unterstützt Named Returns

**Weiterführende Links:**
- [Go Documentation - Return statements](https://go.dev/ref/spec#Return_statements)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Return Statement
def add(a, b) {
    return a + b
}
```

**Besonderheiten:**
- `return` beendet die Funktion
- Letzter Ausdruck ist impliziter Return (optional)

**Weiterführende Links:**
- [Groovy Documentation - Methods](https://groovy-lang.org/syntax.html#_methods)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Return Statement
function add(a: Int, b: Int): Int {
    return a + b;
}
```

**Besonderheiten:**
- `return` beendet die Funktion
- Muss einen Wert zurückgeben, wenn die Funktion einen Rückgabetyp hat

**Weiterführende Links:**
- [Haxe Documentation - Functions](https://haxe.org/manual/expression-function.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Return Statement
int add(int a, int b) {
    return a + b;
}
```

**Besonderheiten:**
- `return` beendet die Funktion
- Muss einen Wert zurückgeben, wenn die Funktion einen Rückgabetyp hat
- `return;` für void-Methoden

**Weiterführende Links:**
- [Oracle Java Documentation - return Statement](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/branch.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Return Statement
function add(a, b) {
    return a + b;
}
```

**Besonderheiten:**
- `return` beendet die Funktion
- Optional: Wenn kein Wert zurückgegeben wird, ist der Rückgabewert `undefined`

**Weiterführende Links:**
- [MDN Web Docs - return](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Return Statement
function add(a, b)
    return a + b
end
```

**Besonderheiten:**
- `return` beendet die Funktion
- Letzter Ausdruck ist impliziter Return (optional)

**Weiterführende Links:**
- [Julia Documentation - Functions](https://docs.julialang.org/en/v1/manual/functions/)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Return Statement (implizit)
fun add(a: int, b: int): int
  a + b  // Letzter Ausdruck ist der Rückgabewert

// Expliziter Return ist selten nötig
fun max-value(a: int, b: int): int
  if a > b then a else b
```

**Besonderheiten:**
- Der letzte Ausdruck einer Funktion ist der implizite Rückgabewert
- Kein explizites `return` nötig (expression-based)
- `if`/`then`/`else` gibt direkt einen Wert zurück

**Weiterführende Links:**
- [Koka Language Guide - Functions](https://koka-lang.github.io/koka/doc/book.html#sec-functions)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Return Statement
fun add(a: Int, b: Int): Int {
    return a + b
}
```

**Besonderheiten:**
- `return` beendet die Funktion
- Muss einen Wert zurückgeben, wenn die Funktion einen Rückgabetyp hat
- Letzter Ausdruck ist impliziter Return bei Expression Bodies

**Weiterführende Links:**
- [Kotlin Documentation - Functions](https://kotlinlang.org/docs/functions.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Return Statement (implizit – letzter Ausdruck)
def add (a b : Nat) : Nat :=
  a + b

-- Return Statement in do-Notation
def greetAndAdd (a b : Nat) : IO Nat := do
  IO.println "Berechne..."
  return a + b
```

**Besonderheiten:**
- Reine Funktionen verwenden den letzten Ausdruck als impliziten Rückgabewert
- `return` ist nur in `do`-Blöcken (monadischem Kontext) verfügbar
- `:=` definiert den Funktionskörper als Ausdruck
- Kein explizites `return`-Keyword in reinen Funktionen nötig

**Weiterführende Links:**
- [Lean 4 Documentation - Defining Functions](https://lean-lang.org/lean4/doc/functions.html)
- [Lean 4 Documentation - do-notation](https://lean-lang.org/lean4/doc/do.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Return Statement
function add(a, b)
    return a + b
end
```

**Besonderheiten:**
- `return` beendet die Funktion
- Kann mehrere Werte zurückgeben: `return a, b`

**Weiterführende Links:**
- [Lua Documentation - Functions](https://www.lua.org/manual/5.4/manual.html#2.5.9)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% Return Statement
function result = add(a, b)
    result = a + b;
end
```

**Besonderheiten:**
- Rückgabewert wird durch Zuweisung an die Output-Variable gesetzt
- `return`-Keyword existiert für explizites Verlassen der Funktion (Early Return)
- Am Ende einer Funktion wird automatisch zurückgekehrt

**Weiterführende Links:**
- [MATLAB Documentation - Functions](https://www.mathworks.com/help/matlab/ref/function.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Return Statement (implizit – letzter Ausdruck)
:- func add(int, int) = int.
add(A, B) = A + B.

% Predicate-Stil mit Output-Parametern
:- pred add(int::in, int::in, int::out) is det.
add(A, B, A + B).
```

**Besonderheiten:**
- Mercury hat kein explizites `return`-Keyword
- Funktionen geben den Wert des Ausdrucks auf der rechten Seite zurück
- Prädikate verwenden Output-Parameter statt Rückgabewerten
- Der Compiler stellt über das Determinismus-System sicher, dass ein Wert produziert wird

**Weiterführende Links:**
- [Mercury Language Reference - Functions](https://www.mercurylang.org/information/doc-release/mercury_ref/Functions.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# Return Statement
def add(a: Int, b: Int) -> Int:
    return a + b
```

**Besonderheiten:**
- Python-ähnliche Syntax
- `return` beendet die Funktion

**Weiterführende Links:**
- [Mojo Documentation - Functions](https://docs.modular.com/mojo/manual/functions/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Return Statement
proc add(a, b: int): int =
    return a + b
```

**Besonderheiten:**
- `return` beendet die Funktion
- Letzter Ausdruck ist impliziter Return (optional)

**Weiterführende Links:**
- [Nim Documentation - Procedures](https://nim-lang.org/docs/manual.html#procedures)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Return Statement
- (int)add:(int)a andB:(int)b {
    return a + b;
}
```

**Besonderheiten:**
- `return` beendet die Funktion
- Muss einen Wert zurückgeben, wenn die Funktion einen Rückgabetyp hat
- `return;` für void-Methoden

**Weiterführende Links:**
- [Apple Documentation - Methods](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/DefiningClasses/DefiningClasses.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Return Statement
function add(a, b: Integer): Integer;
begin
    Result := a + b;
end;
```

**Besonderheiten:**
- Verwendet `Result` für den Rückgabewert
- Kein explizites `return` Statement

**Weiterführende Links:**
- [Free Pascal Documentation - Functions](https://www.freepascal.org/docs-html/ref/refse19.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Return Statement *)
let add a b = a + b
```

**Besonderheiten:**
- OCaml hat kein explizites `return` Statement
- Letzter Ausdruck ist impliziter Return

**Weiterführende Links:**
- [OCaml Documentation - Functions](https://v2.ocaml.org/manual/expr.html#s:function-definitions)

</TabItem>
<TabItem value="octave" label="Octave">

```matlab
% Return Statement
function result = add(a, b)
    result = a + b;
endfunction
```

**Besonderheiten:**
- Verwendet Zuweisung an Funktionsname für Rückgabewert
- Kein explizites `return` Statement

**Weiterführende Links:**
- [GNU Octave Documentation - Functions](https://octave.org/doc/v8.1.0/Functions.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Return Statement
add :: proc(a, b: i32) -> i32 {
    return a + b
}
```

**Besonderheiten:**
- `return` beendet die Funktion
- Muss einen Wert zurückgeben, wenn die Funktion einen Rückgabetyp hat

**Weiterführende Links:**
- [Odin Documentation - Procedures](https://odin-lang.org/docs/overview/#procedures)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Return Statement
sub add {
    my ($a, $b) = @_;
    return $a + $b;
}
```

**Besonderheiten:**
- `return` beendet die Funktion
- Optional: Wenn kein Wert zurückgegeben wird, ist der Rückgabewert der letzte Ausdruck

**Weiterführende Links:**
- [Perl Documentation - Subroutines](https://perldoc.perl.org/perlsub)

</TabItem>
<TabItem value="php" label="PHP">

```php
// Return Statement
function add($a, $b) {
    return $a + $b;
}
```

**Besonderheiten:**
- `return` beendet die Funktion
- Optional: Wenn kein Wert zurückgegeben wird, ist der Rückgabewert `null`

**Weiterführende Links:**
- [PHP Documentation - Functions](https://www.php.net/manual/en/functions.user-defined.php)

</TabItem>
<TabItem value="python" label="Python">

```python
# Return Statement
def add(a, b):
    return a + b
```

**Besonderheiten:**
- `return` beendet die Funktion
- Optional: Wenn kein Wert zurückgegeben wird, ist der Rückgabewert `None`
- Kann mehrere Werte zurückgeben: `return a, b`

**Weiterführende Links:**
- [Python Documentation - Functions](https://docs.python.org/3/tutorial/controlflow.html#defining-functions)

</TabItem>
<TabItem value="r" label="R">

```r
# Return Statement
add <- function(a, b) {
    return(a + b)
}
```

**Besonderheiten:**
- `return()` beendet die Funktion
- Letzter Ausdruck ist impliziter Return (optional)

**Weiterführende Links:**
- [R Documentation - Functions](https://www.rdocumentation.org/packages/base/versions/3.6.2/topics/function)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Return Statement
def add(a, b)
    return a + b
end
```

**Besonderheiten:**
- `return` beendet die Funktion
- Letzter Ausdruck ist impliziter Return (optional)

**Weiterführende Links:**
- [Ruby Documentation - Methods](https://docs.ruby-lang.org/en/3.2/syntax/methods_rdoc.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Return Statement
fn add(a: i32, b: i32) -> i32 {
    return a + b;
}
```

**Besonderheiten:**
- `return` beendet die Funktion
- Letzter Ausdruck ist impliziter Return (optional, ohne Semikolon)

**Weiterführende Links:**
- [Rust Documentation - Functions](https://doc.rust-lang.org/book/ch03-03-functions.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Return Statement
def add(a: Int, b: Int): Int = {
    return a + b
}
```

**Besonderheiten:**
- `return` beendet die Funktion
- Letzter Ausdruck ist impliziter Return (optional)

**Weiterführende Links:**
- [Scala Documentation - Functions](https://docs.scala-lang.org/tour/functions.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Return Statement
func add(a: Int, b: Int) -> Int {
    return a + b
}
```

**Besonderheiten:**
- `return` beendet die Funktion
- Muss einen Wert zurückgeben, wenn die Funktion einen Rückgabetyp hat

**Weiterführende Links:**
- [Swift Documentation - Functions](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/functions/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Return Statement
function add(a: number, b: number): number {
    return a + b;
}
```

**Besonderheiten:**
- `return` beendet die Funktion
- Optional: Wenn kein Wert zurückgegeben wird, ist der Rückgabewert `undefined`

**Weiterführende Links:**
- [TypeScript Handbook - Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Return Statement
Function Add(a As Integer, b As Integer) As Integer
    Return a + b
End Function
```

**Besonderheiten:**
- `Return` beendet die Funktion
- Muss einen Wert zurückgeben, wenn die Funktion einen Rückgabetyp hat

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Return Statement](https://learn.microsoft.com/en-us/dotnet/visual-basic/language-reference/statements/return-statement)

</TabItem>
<TabItem value="v" label="V">

```v
// Return Statement
fn add(a int, b int) int {
    return a + b
}
```

**Besonderheiten:**
- `return` beendet die Funktion
- Muss einen Wert zurückgeben, wenn die Funktion einen Rückgabetyp hat

**Weiterführende Links:**
- [V Documentation - Functions](https://github.com/vlang/v/blob/master/doc/docs.md#functions)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Return Statement
fn add(a: i32, b: i32) i32 {
    return a + b;
}
```

**Besonderheiten:**
- `return` beendet die Funktion
- Muss einen Wert zurückgeben, wenn die Funktion einen Rückgabetyp hat

**Weiterführende Links:**
- [Zig Documentation - Functions](https://ziglang.org/documentation/0.11.0/#Functions)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Return-from (aus benanntem Block / Funktion)
(defun find-first-even (numbers)
  (dolist (n numbers)
    (when (evenp n)
      (return-from find-first-even n)))
  nil)

;; Return (aus nil-Block, z.B. loop/dolist)
(dolist (n '(1 3 5 4 7))
  (when (evenp n)
    (return n)))  ; Gibt 4 zurück
```

**Besonderheiten:**
- `return-from` gibt aus einem benannten Block zurück (jede `defun` erstellt einen Block mit dem Funktionsnamen)
- `return` ist Kurzform für `(return-from nil ...)` - gibt aus dem nächsten `nil`-Block zurück
- Ohne explizites `return` wird der Wert des letzten Ausdrucks zurückgegeben

**Weiterführende Links:**
- [Common Lisp HyperSpec - return-from](http://www.lispworks.com/documentation/HyperSpec/Body/s_ret_fr.htm)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! RETURN Statement
subroutine greet(name)
    character(len=*), intent(in) :: name
    print *, "Hallo, ", name
    return
end subroutine

function double(x) result(res)
    integer, intent(in) :: x
    integer :: res
    res = x * 2
    return
end function
```

**Besonderheiten:**
- `RETURN` beendet die Ausführung einer Subroutine/Funktion
- In Funktionen wird der Wert über die Result-Variable zurückgegeben
- `RETURN` ist am Ende einer Prozedur optional

**Weiterführende Links:**
- [Fortran Standard - RETURN Statement](https://gcc.gnu.org/onlinedocs/gfortran/RETURN.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
function Add(a, b: Integer): Integer;
begin
  Result := a + b;  // Rückgabewert setzen
end;

function FindPositive(a, b: Integer): Integer;
begin
  if a > 0 then
    Exit(a);     // Sofortige Rückkehr mit Wert
  if b > 0 then
    Exit(b);
  Result := -1;
end;
```

**Besonderheiten:**
- `Result` ist eine implizite Variable für den Rückgabewert
- `Exit` beendet die Funktion sofort
- `Exit(value)` setzt den Rückgabewert und beendet die Funktion

**Weiterführende Links:**
- [Free Pascal Documentation - Exit](https://www.freepascal.org/docs-html/ref/refsu57.html)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
f[x_] := Module[{},
    If[x < 0, Return["Negativ"]];
    x^2
]

f[-1]  (* "Negativ" *)
f[5]   (* 25 *)
```

**Besonderheiten:**
- `Return[expr]` gibt einen Wert aus einer Funktion zurück
- In der Praxis wird Return selten verwendet, da der letzte Ausdruck automatisch zurückgegeben wird

**Weiterführende Links:**
- [Wolfram Language Documentation - Return](https://reference.wolfram.com/language/ref/Return.html)

</TabItem>
</Tabs>


## 6.4.2. Early Return

Programmierpattern, bei dem Return-Statements früh in einer Funktion verwendet werden, um Fehlerfälle oder Randbedingungen zu behandeln. Reduziert Verschachtelung und verbessert die Lesbarkeit durch frühe Behandlung von Edge Cases.

### Sprachen {#sprachen}

<Tabs availableTabs={['ada', 'c', 'carbon', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'eiffel', 'fortran', 'go', 'groovy', 'haxe', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'lua', 'matlab', 'mojo', 'nim', 'objective-c', 'object-pascal', 'ocaml', 'octave', 'odin', 'perl', 'php', 'python', 'r', 'ruby', 'rust', 'scala', 'swift', 'typescript', 'v', 'vbnet', 'zig']}>
<TabItem value="ada" label="Ada">

```ada
-- Early Return
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
- Early Returns werden mit `return` implementiert
- Reduziert Verschachtelung und verbessert Lesbarkeit

**Weiterführende Links:**
- [Ada Reference Manual - Return Statement](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-6-5.html)

</TabItem>
<TabItem value="c" label="C">

```c
// Early Return
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
- Early Returns werden mit `return` implementiert
- Reduziert Verschachtelung und verbessert Lesbarkeit

**Weiterführende Links:**
- [C Standard - Return statement](https://en.cppreference.com/w/c/language/return)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Early Return
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
- Early Returns werden mit `return` implementiert

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Early Return
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
- Early Returns werden mit `return` implementiert
- Reduziert Verschachtelung und verbessert Lesbarkeit

**Weiterführende Links:**
- [cppreference.com - Return statement](https://en.cppreference.com/w/cpp/language/return)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Early Return
def process_value(value : Int32) : String
  return "Ungültig" if value < 0
  return "Null" if value == 0
  
  "Gültig"
end
```

**Besonderheiten:**
- Early Returns werden mit `return` implementiert
- Unterstützt auch Postfix-If-Syntax: `return "Ungültig" if value < 0`

**Weiterführende Links:**
- [Crystal Documentation - Methods](https://crystal-lang.org/reference/1.11/syntax_and_semantics/methods.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Early Return
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
- Early Returns werden mit `return` implementiert
- Reduziert Verschachtelung und verbessert Lesbarkeit

**Weiterführende Links:**
- [Microsoft C# Documentation - return statement](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/statements/jump-statements#the-return-statement)

</TabItem>
<TabItem value="d" label="D">

```d
// Early Return
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
- Early Returns werden mit `return` implementiert
- Reduziert Verschachtelung und verbessert Lesbarkeit

**Weiterführende Links:**
- [D Language Specification - Return Statement](https://dlang.org/spec/statement.html#return_statement)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Early Return
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
- Early Returns werden mit `return` implementiert
- Reduziert Verschachtelung und verbessert Lesbarkeit

**Weiterführende Links:**
- [Dart Language Tour - Return values](https://dart.dev/guides/language/language-tour#return-values)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
-- Early Return
process_value(value: INTEGER): STRING is
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
- Early Returns werden mit `return` implementiert
- Verwendet `Result` für den Rückgabewert

**Weiterführende Links:**
- [Eiffel Documentation - Functions](https://www.eiffel.org/doc/eiffel/Functions)

</TabItem>
<TabItem value="go" label="Go">

```go
// Early Return
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
- Early Returns werden mit `return` implementiert
- Reduziert Verschachtelung und verbessert Lesbarkeit
- Sehr häufig in Go-Code verwendet

**Weiterführende Links:**
- [Go Documentation - Return statements](https://go.dev/ref/spec#Return_statements)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Early Return
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
- Early Returns werden mit `return` implementiert
- Reduziert Verschachtelung und verbessert Lesbarkeit

**Weiterführende Links:**
- [Groovy Documentation - Methods](https://groovy-lang.org/syntax.html#_methods)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Early Return
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
- Early Returns werden mit `return` implementiert
- Reduziert Verschachtelung und verbessert Lesbarkeit

**Weiterführende Links:**
- [Haxe Documentation - Functions](https://haxe.org/manual/expression-function.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Early Return
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
- Early Returns werden mit `return` implementiert
- Reduziert Verschachtelung und verbessert Lesbarkeit

**Weiterführende Links:**
- [Oracle Java Documentation - return Statement](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/branch.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Early Return
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
- Early Returns werden mit `return` implementiert
- Reduziert Verschachtelung und verbessert Lesbarkeit

**Weiterführende Links:**
- [MDN Web Docs - return](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Early Return
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
- Early Returns werden mit `return` implementiert
- Reduziert Verschachtelung und verbessert Lesbarkeit

**Weiterführende Links:**
- [Julia Documentation - Functions](https://docs.julialang.org/en/v1/manual/functions/)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Early Return (Expression-based)
fun process-value(value: int): string
  if value < 0 then return "Ungültig"
  if value == 0 then return "Null"
  "Gültig"  // Impliziter Return
```

**Besonderheiten:**
- `return` kann für Early Returns verwendet werden
- Koka ist expression-based, daher ist `return` selten nötig
- Pattern Matching mit `match` ist oft die idiomatischere Alternative

**Weiterführende Links:**
- [Koka Language Guide - Functions](https://koka-lang.github.io/koka/doc/book.html#sec-functions)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Early Return
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
- Early Returns werden mit `return` implementiert
- Reduziert Verschachtelung und verbessert Lesbarkeit

**Weiterführende Links:**
- [Kotlin Documentation - Functions](https://kotlinlang.org/docs/functions.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Early Return (Expression-basiert)
def processValue (value : Int) : String :=
  if value < 0 then
    "Ungültig"
  else if value == 0 then
    "Null"
  else
    "Gültig"

-- Early Return mit do-Notation
def processValueIO (value : Int) : IO String := do
  if value < 0 then
    return "Ungültig"
  if value == 0 then
    return "Null"
  return "Gültig"
```

**Besonderheiten:**
- Reine Funktionen verwenden verschachtelte `if`-Expressions (kein explizites `return`)
- In `do`-Blöcken kann `return` für Early Returns verwendet werden
- Early Return in `do`-Notation beendet den aktuellen `do`-Block
- Expression-basierter Stil ist idiomatischer in Lean 4

**Weiterführende Links:**
- [Lean 4 Documentation - If-then-else](https://lean-lang.org/lean4/doc/control.html#if-then-else)
- [Lean 4 Documentation - do-notation](https://lean-lang.org/lean4/doc/do.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Early Return
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
- Early Returns werden mit `return` implementiert
- Reduziert Verschachtelung und verbessert Lesbarkeit

**Weiterführende Links:**
- [Lua Documentation - Functions](https://www.lua.org/manual/5.4/manual.html#2.5.9)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% Early Return
function result = process_value(value)
    if value < 0
        result = "Ungültig";
        return
    end
    
    if value == 0
        result = "Null";
        return
    end
    
    result = "Gültig";
end
```

**Besonderheiten:**
- Early Returns werden mit `return` implementiert
- Verwendet Zuweisung an Funktionsname für Rückgabewert

**Weiterführende Links:**
- [MATLAB Documentation - Functions](https://www.mathworks.com/help/matlab/ref/function.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# Early Return
def process_value(value: Int) -> String:
    if value < 0:
        return "Ungültig"
    
    if value == 0:
        return "Null"
    
    return "Gültig"
```

**Besonderheiten:**
- Python-ähnliche Syntax
- Early Returns werden mit `return` implementiert

**Weiterführende Links:**
- [Mojo Documentation - Functions](https://docs.modular.com/mojo/manual/functions/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Early Return
proc processValue(value: int): string =
    if value < 0:
        return "Ungültig"
    
    if value == 0:
        return "Null"
    
    return "Gültig"
```

**Besonderheiten:**
- Early Returns werden mit `return` implementiert
- Reduziert Verschachtelung und verbessert Lesbarkeit

**Weiterführende Links:**
- [Nim Documentation - Procedures](https://nim-lang.org/docs/manual.html#procedures)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Early Return
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
- Early Returns werden mit `return` implementiert
- Reduziert Verschachtelung und verbessert Lesbarkeit

**Weiterführende Links:**
- [Apple Documentation - Methods](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/DefiningClasses/DefiningClasses.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Early Return
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
- Early Returns werden mit `Exit` implementiert
- Verwendet `Exit` für frühe Returns mit Wert

**Weiterführende Links:**
- [Free Pascal Documentation - Functions](https://www.freepascal.org/docs-html/ref/refse19.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Early Return *)
let process_value value =
    if value < 0 then
        "Ungültig"
    else if value = 0 then
        "Null"
    else
        "Gültig"
```

**Besonderheiten:**
- OCaml verwendet If-Expressions, daher werden Early Returns als frühe If-Zweige implementiert
- Funktionaler Stil ohne explizite Returns

**Weiterführende Links:**
- [OCaml Documentation - Functions](https://v2.ocaml.org/manual/expr.html#s:function-definitions)

</TabItem>
<TabItem value="octave" label="Octave">

```matlab
% Early Return
function result = process_value(value)
    if value < 0
        result = "Ungültig";
        return
    endif
    
    if value == 0
        result = "Null";
        return
    endif
    
    result = "Gültig";
endfunction
```

**Besonderheiten:**
- Early Returns werden mit `return` implementiert
- Verwendet Zuweisung an Funktionsname für Rückgabewert

**Weiterführende Links:**
- [GNU Octave Documentation - Functions](https://octave.org/doc/v8.1.0/Functions.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Early Return
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
- Early Returns werden mit `return` implementiert
- Reduziert Verschachtelung und verbessert Lesbarkeit

**Weiterführende Links:**
- [Odin Documentation - Procedures](https://odin-lang.org/docs/overview/#procedures)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Early Return
sub process_value {
    my ($value) = @_;
    
    return "Ungültig" if $value < 0;
    return "Null" if $value == 0;
    
    return "Gültig";
}
```

**Besonderheiten:**
- Early Returns werden mit `return` implementiert
- Unterstützt auch Postfix-If-Syntax: `return "Ungültig" if $value < 0`

**Weiterführende Links:**
- [Perl Documentation - Subroutines](https://perldoc.perl.org/perlsub)

</TabItem>
<TabItem value="php" label="PHP">

```php
// Early Return
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
- Early Returns werden mit `return` implementiert
- Reduziert Verschachtelung und verbessert Lesbarkeit

**Weiterführende Links:**
- [PHP Documentation - Functions](https://www.php.net/manual/en/functions.user-defined.php)

</TabItem>
<TabItem value="python" label="Python">

```python
# Early Return
def process_value(value):
    if value < 0:
        return "Ungültig"
    
    if value == 0:
        return "Null"
    
    return "Gültig"
```

**Besonderheiten:**
- Early Returns werden mit `return` implementiert
- Reduziert Verschachtelung und verbessert Lesbarkeit

**Weiterführende Links:**
- [Python Documentation - Functions](https://docs.python.org/3/tutorial/controlflow.html#defining-functions)

</TabItem>
<TabItem value="r" label="R">

```r
# Early Return
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
- Early Returns werden mit `return()` implementiert
- Reduziert Verschachtelung und verbessert Lesbarkeit

**Weiterführende Links:**
- [R Documentation - Functions](https://www.rdocumentation.org/packages/base/versions/3.6.2/topics/function)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Early Return
def process_value(value)
    return "Ungültig" if value < 0
    return "Null" if value == 0
    
    "Gültig"
end
```

**Besonderheiten:**
- Early Returns werden mit `return` implementiert
- Unterstützt auch Postfix-If-Syntax: `return "Ungültig" if value < 0`

**Weiterführende Links:**
- [Ruby Documentation - Methods](https://docs.ruby-lang.org/en/3.2/syntax/methods_rdoc.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Early Return
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
- Early Returns werden mit `return` implementiert
- Reduziert Verschachtelung und verbessert Lesbarkeit
- Letzter Ausdruck ist impliziter Return

**Weiterführende Links:**
- [Rust Documentation - Functions](https://doc.rust-lang.org/book/ch03-03-functions.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Early Return
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
- Early Returns werden mit `return` implementiert
- Reduziert Verschachtelung und verbessert Lesbarkeit

**Weiterführende Links:**
- [Scala Documentation - Functions](https://docs.scala-lang.org/tour/functions.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Early Return
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
- Early Returns werden mit `return` implementiert
- Reduziert Verschachtelung und verbessert Lesbarkeit

**Weiterführende Links:**
- [Swift Documentation - Functions](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/functions/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Early Return
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
- Early Returns werden mit `return` implementiert
- Reduziert Verschachtelung und verbessert Lesbarkeit

**Weiterführende Links:**
- [TypeScript Handbook - Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Early Return
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
- Early Returns werden mit `Return` implementiert
- Reduziert Verschachtelung und verbessert Lesbarkeit

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Return Statement](https://learn.microsoft.com/en-us/dotnet/visual-basic/language-reference/statements/return-statement)

</TabItem>
<TabItem value="v" label="V">

```v
// Early Return
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
- Early Returns werden mit `return` implementiert
- Reduziert Verschachtelung und verbessert Lesbarkeit

**Weiterführende Links:**
- [V Documentation - Functions](https://github.com/vlang/v/blob/master/doc/docs.md#functions)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Early Return
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
- Early Returns werden mit `return` implementiert
- Reduziert Verschachtelung und verbessert Lesbarkeit

**Weiterführende Links:**
- [Zig Documentation - Functions](https://ziglang.org/documentation/0.11.0/#Functions)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Early Return
function safe_divide(a, b) result(res)
    real, intent(in) :: a, b
    real :: res

    if (b == 0.0) then
        res = 0.0
        return  ! Early Return
    end if

    res = a / b
end function
```

**Besonderheiten:**
- `RETURN` kann an beliebiger Stelle verwendet werden
- Ermöglicht vorzeitiges Beenden einer Prozedur
- Result-Variable muss vor `RETURN` gesetzt sein

**Weiterführende Links:**
- [Fortran Standard - RETURN Statement](https://gcc.gnu.org/onlinedocs/gfortran/RETURN.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
function Divide(a, b: Double): Double;
begin
  if b = 0 then
    Exit(0);  // Early Return bei Division durch Null
  Result := a / b;
end;

procedure ProcessList(count: Integer);
begin
  if count <= 0 then
    Exit;  // Early Return für Prozeduren (ohne Wert)
  // Verarbeitung...
end;
```

**Besonderheiten:**
- `Exit` für sofortige Rückkehr aus Funktionen/Prozeduren
- `Exit(value)` für Funktionen mit Rückgabewert
- `Exit` ohne Parameter für Prozeduren

**Weiterführende Links:**
- [Free Pascal Documentation - Exit](https://www.freepascal.org/docs-html/ref/refsu57.html)

</TabItem>
</Tabs>


## 6.4.3. Goto Statements

Unbedingte Sprunganweisungen, die die Programmausführung zu einer markierten Stelle im Code springen lassen. Ermöglichen es, den Kontrollfluss direkt zu steuern, werden aber in modernen Sprachen oft vermieden.

### Sprachen {#sprachen}

<Tabs availableTabs={['ada', 'c', 'common-lisp', 'cpp', 'csharp', 'd', 'fortran', 'go', 'lua', 'objective-c', 'object-pascal', 'perl', 'php']} orangeTabs={['python']}>
<TabItem value="ada" label="Ada">

```ada
-- Goto Statement
declare
    i : Integer := 0;
begin
    loop
        i := i + 1;
        if i > 5 then
            goto end_loop;
        end if;
        Put_Line(Integer'Image(i));
    end loop;
    <<end_loop>>
end;
```

**Besonderheiten:**
- Verwendet `goto label;` für Sprünge
- Labels werden mit `<<label>>` definiert
- Eingeschränkte Verwendung (nur innerhalb derselben Subroutine)

**Weiterführende Links:**
- [Ada Reference Manual - Goto Statement](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-5-8.html)

</TabItem>
<TabItem value="c" label="C">

```c
// Goto Statement
int i = 0;
loop_start:
    i++;
    if (i > 5) {
        goto loop_end;
    }
    printf("%d\n", i);
    goto loop_start;
loop_end:
```

**Besonderheiten:**
- Verwendet `goto label;` für Sprünge
- Labels werden mit `label:` definiert
- Kann zu Spaghetti-Code führen

**Weiterführende Links:**
- [C Standard - goto statement](https://en.cppreference.com/w/c/language/goto)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Goto Statement
int i = 0;
loop_start:
    i++;
    if (i > 5) {
        goto loop_end;
    }
    std::cout << i << std::endl;
    goto loop_start;
loop_end:
```

**Besonderheiten:**
- Verwendet `goto label;` für Sprünge
- Labels werden mit `label:` definiert
- Kann zu Spaghetti-Code führen
- Wird in modernem C++-Code vermieden

**Weiterführende Links:**
- [cppreference.com - goto statement](https://en.cppreference.com/w/cpp/language/goto)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Goto Statement
int i = 0;
loop_start:
    i++;
    if (i > 5)
    {
        goto loop_end;
    }
    Console.WriteLine(i);
    goto loop_start;
loop_end:

// Goto in Switch
switch (value)
{
    case 1:
        Console.WriteLine("Eins");
        goto case 2;  // Springt zu case 2
    case 2:
        Console.WriteLine("Zwei");
        goto default;  // Springt zu default
    default:
        Console.WriteLine("Default");
        break;
}
```

**Besonderheiten:**
- Verwendet `goto label;` für Sprünge zu Labels
- `goto case value;` und `goto default;` in switch-Statements
- Labels werden mit `label:` definiert

**Weiterführende Links:**
- [Microsoft C# Documentation - goto statement](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/statements/jump-statements#the-goto-statement)

</TabItem>
<TabItem value="d" label="D">

```d
// Goto Statement
int i = 0;
loop_start:
    i++;
    if (i > 5) {
        goto loop_end;
    }
    writeln(i);
    goto loop_start;
loop_end:
```

**Besonderheiten:**
- Verwendet `goto label;` für Sprünge
- Labels werden mit `label:` definiert
- Kann zu Spaghetti-Code führen

**Weiterführende Links:**
- [D Language Specification - Goto Statement](https://dlang.org/spec/statement.html#goto_statement)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Goto Statement
integer :: i
i = 0
10 continue
    i = i + 1
    if (i > 5) goto 20
    print *, i
    goto 10
20 continue
```

**Besonderheiten:**
- Verwendet `goto label` für Sprünge
- Labels sind numerisch (z.B. `10`, `20`)
- Sehr häufig in älterem Fortran-Code verwendet

**Weiterführende Links:**
- [Fortran Standard - GOTO Statement](https://gcc.gnu.org/onlinedocs/gfortran/GOTO-statement.html)

</TabItem>
<TabItem value="go" label="Go">

```go
// Goto Statement
i := 0
loopStart:
    i++
    if i > 5 {
        goto loopEnd
    }
    fmt.Println(i)
    goto loopStart
loopEnd:
```

**Besonderheiten:**
- Verwendet `goto label` für Sprünge
- Labels werden mit `label:` definiert
- Eingeschränkte Verwendung (nur innerhalb derselben Funktion)

**Weiterführende Links:**
- [Go Documentation - Goto statements](https://go.dev/ref/spec#Goto_statements)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Goto Statement (seit Lua 5.2)
local i = 0
::loop_start::
    i = i + 1
    if i > 5 then
        goto loop_end
    end
    print(i)
    goto loop_start
::loop_end::
```

**Besonderheiten:**
- Wurde in Lua 5.2 eingeführt
- Verwendet `goto label` für Sprünge
- Labels werden mit `::label::` definiert

**Weiterführende Links:**
- [Lua Documentation - Goto](https://www.lua.org/manual/5.4/manual.html#3.3.4)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Goto Statement
int i = 0;
loop_start:
    i++;
    if (i > 5) {
        goto loop_end;
    }
    NSLog(@"%d", i);
    goto loop_start;
loop_end:
```

**Besonderheiten:**
- Verwendet `goto label;` für Sprünge
- Labels werden mit `label:` definiert
- Kann zu Spaghetti-Code führen

**Weiterführende Links:**
- [Apple Documentation - Control Flow](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/FoundationTypesandCollections/FoundationTypesandCollections.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Goto Statement
var i: Integer;
label loop_start, loop_end;
begin
    i := 0;
    loop_start:
        Inc(i);
        if i > 5 then
            goto loop_end;
        WriteLn(i);
        goto loop_start;
    loop_end:
end;
```

**Besonderheiten:**
- Verwendet `goto label;` für Sprünge
- Labels müssen mit `label` deklariert werden
- Labels werden mit `label:` definiert

**Weiterführende Links:**
- [Free Pascal Documentation - Goto Statement](https://www.freepascal.org/docs-html/ref/refse24.html)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Goto Statement
my $i = 0;
LOOP_START:
    $i++;
    if ($i > 5) {
        goto LOOP_END;
    }
    print "$i\n";
    goto LOOP_START;
LOOP_END:
```

**Besonderheiten:**
- Verwendet `goto LABEL;` für Sprünge
- Labels werden mit `LABEL:` definiert
- Unterstützt auch `goto &subroutine` für Subroutine-Aufrufe

**Weiterführende Links:**
- [Perl Documentation - Goto](https://perldoc.perl.org/functions/goto)

</TabItem>
<TabItem value="php" label="PHP">

```php
// Goto Statement (seit PHP 5.3)
$i = 0;
loop_start:
    $i++;
    if ($i > 5) {
        goto loop_end;
    }
    echo $i . "\n";
    goto loop_start;
loop_end:
```

**Besonderheiten:**
- Wurde in PHP 5.3 eingeführt
- Verwendet `goto label;` für Sprünge
- Labels werden mit `label:` definiert

**Weiterführende Links:**
- [PHP Documentation - goto](https://www.php.net/manual/en/control-structures.goto.php)

</TabItem>
<TabItem value="python" label="Python">

```python
# Goto Statement (nicht direkt unterstützt)
# Python unterstützt kein goto
# Wird mit Exceptions oder anderen Patterns emuliert
```

**Besonderheiten:**
- Python unterstützt kein `goto` Statement
- Wird typischerweise mit anderen Patterns emuliert

**Weiterführende Links:**
- [Python Documentation - Control Flow](https://docs.python.org/3/tutorial/controlflow.html)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Goto mit tagbody/go
(tagbody
  (setq i 0)
 start
  (when (>= i 5) (go end))
  (format t "~a~%" i)
  (incf i)
  (go start)
 end)
```

**Besonderheiten:**
- `tagbody` erstellt einen Block mit benannten Tags
- `go` springt zu einem Tag innerhalb des umgebenden `tagbody`
- Nur vorwärts- und rückwärtssprünge innerhalb desselben `tagbody` erlaubt
- Selten direkt verwendet - `loop` und `do` nutzen intern `tagbody`

**Weiterführende Links:**
- [Common Lisp HyperSpec - tagbody](http://www.lispworks.com/documentation/HyperSpec/Body/s_tagbod.htm)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
label done;
var
  i: Integer;
begin
  for i := 0 to 100 do
  begin
    if i = 5 then
      goto done;
    WriteLn(i);
  end;
  done:
    WriteLn('Fertig');
end;
```

**Besonderheiten:**
- `label`-Deklaration erforderlich
- `goto label` springt zum Label
- Verwendung wird allgemein nicht empfohlen

**Weiterführende Links:**
- [Free Pascal Documentation - Goto](https://www.freepascal.org/docs-html/ref/refsu56.html)

</TabItem>
</Tabs>


## 6.4.4. Continuations

Mechanismen zur expliziten Kontrolle des zukünftigen Programmablaufs. Continuations repräsentieren den "Rest des Programms" ab einem bestimmten Punkt und ermöglichen es, den Kontrollfluss auf nicht-lokale Weise zu steuern.

### Sprachen {#sprachen}

<Tabs availableTabs={['racket', 'scheme']} yellowTabs={['common-lisp']}>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Limitierte Continuations über catch/throw
(catch 'exit
  (format t "Vor throw~%")
  (throw 'exit "Ergebnis")
  (format t "Nach throw~%"))  ; Wird nie erreicht
;; Gibt "Ergebnis" zurück

;; Non-local exit über block/return-from
(block escape
  (mapcar (lambda (x)
            (when (= x 3)
              (return-from escape "Gefunden!")))
          '(1 2 3 4 5)))
;; Gibt "Gefunden!" zurück
```

**Besonderheiten:**
- Common Lisp hat KEINE echten First-Class-Continuations wie Scheme (`call/cc`)
- `catch`/`throw` für dynamische nicht-lokale Exits (Tag-basiert)
- `block`/`return-from` für lexikalische nicht-lokale Exits
- Einige Implementierungen bieten Continuations über Bibliotheken (z.B. cl-cont)

**Weiterführende Links:**
- [Common Lisp HyperSpec - catch](http://www.lispworks.com/documentation/HyperSpec/Body/s_catch.htm)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
;; Continuations (call/cc)
(define result
  (call/cc
    (lambda (exit)
      (exit "Wert")
      "Normal")))
```

**Besonderheiten:**
- Verwendet `call/cc` (call-with-current-continuation)
- Ermöglicht nicht-lokale Kontrollfluss-Steuerung
- Sehr mächtiges Feature für Kontrollfluss-Manipulation

**Weiterführende Links:**
- [Racket Documentation - Continuations](https://docs.racket-lang.org/reference/cont.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; Continuations (call/cc)
(define result
  (call/cc
    (lambda (exit)
      (exit "Wert")
      "Normal")))
```

**Besonderheiten:**
- Verwendet `call/cc` (call-with-current-continuation)
- Ermöglicht nicht-lokale Kontrollfluss-Steuerung
- Sehr mächtiges Feature für Kontrollfluss-Manipulation

**Weiterführende Links:**
- [Scheme Documentation - Continuations](https://www.scheme.com/tspl4/control.html#./control:h1)

</TabItem>
</Tabs>


