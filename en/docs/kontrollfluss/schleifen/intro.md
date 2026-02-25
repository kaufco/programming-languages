---
slug: /kontrollfluss/schleifen
title: 6.2. Loops
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 6.2. Loops

Constructs for repeatedly executing code blocks over collections or until certain conditions are met.

## 6.2.1. While Loops

Loops that repeatedly execute code as long as a condition is true. The condition is checked before each iteration, so the loop body may never be executed.

### Languages {#sprachen}

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

**Special features:**
- Must be terminated with `end loop`
- Condition is checked before each iteration

**Further reading:**
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

**Special features:**
- Parentheses around the condition are required
- Curly braces can be omitted for single statements, but are recommended

**Further reading:**
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

**Special features:**
- Experimental language, syntax may still change
- C++-like syntax

**Further reading:**
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

**Special features:**
- Parentheses around the condition are required
- Curly braces can be omitted for single statements, but are recommended

**Further reading:**
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

**Special features:**
- Must be terminated with `end`
- Parentheses around the condition are optional

**Further reading:**
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

**Special features:**
- Parentheses around the condition are required
- Curly braces can be omitted for single statements, but are recommended

**Further reading:**
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

**Special features:**
- Parentheses around the condition are required
- Curly braces can be omitted for single statements

**Further reading:**
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

**Special features:**
- Parentheses around the condition are required
- Curly braces can be omitted for single statements

**Further reading:**
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

**Special features:**
- Uses `from...until...loop` instead of `while`
- The condition is an exit condition (terminates when true)

**Further reading:**
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

**Special features:**
- Go has no separate `while` keyword
- Uses `for` without initialization and increment as a while loop

**Further reading:**
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

**Special features:**
- Klammern um die Bedingung sind optional
- Geschweifte Klammern können bei einzelnen Statements weggelassen werden

**Further reading:**
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

**Special features:**
- Parentheses around the condition are required
- Curly braces can be omitted for single statements

**Further reading:**
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

**Special features:**
- Parentheses around the condition are required
- Curly braces can be omitted for single statements, but are recommended

**Further reading:**
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

**Special features:**
- Parentheses around the condition are required
- Curly braces can be omitted for single statements, but are recommended

**Further reading:**
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

**Special features:**
- Must be terminated with `end`
- Parentheses around the condition are optional

**Further reading:**
- [Julia Documentation - Control Flow](https://docs.julialang.org/en/v1/manual/control-flow/#while-loops)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// While Loop (as function)
fun count-up(): console ()
  var i := 0
  while { i < 10 }
    println(i.show)
    i := i + 1
```

**Special features:**
- `while` is a function, not a keyword
- Condition and body are lambda expressions (in `{ }`)
- Mutable state via `var` and `:=`
- Indentation-based syntax

**Further reading:**
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

**Special features:**
- Parentheses around the condition are required
- Curly braces can be omitted for single statements

**Further reading:**
- [Kotlin Documentation - While loop](https://kotlinlang.org/docs/control-flow.html#while-loops)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```haskell
-- While Loop (in do notation)
def countUp : IO Unit := do
  let mut i := 0
  while i < 10 do
    IO.println (toString i)
    i := i + 1
```

**Special features:**
- `while` is available in `do` blocks
- Requires mutable variables (`let mut`)
- Condition is checked before each iteration

**Further reading:**
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

**Special features:**
- Uses `do` after the condition
- Must be terminated with `end`
- Parentheses around the condition are optional

**Further reading:**
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

**Special features:**
- Must be terminated with `end`
- Parentheses around the condition are optional

**Further reading:**
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

**Special features:**
- Python-like syntax
- Must be structured with indentation
- Parentheses around the condition are optional

**Further reading:**
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

**Special features:**
- Must be structured with indentation
- Parentheses around the condition are optional

**Further reading:**
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

**Special features:**
- Parentheses around the condition are required
- Curly braces can be omitted for single statements

**Further reading:**
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

**Special features:**
- Uses `do` after the condition
- Must be terminated with `end`
- Parentheses around the condition are optional

**Further reading:**
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

**Special features:**
- Must be terminated with `done`
- Uses references (`ref`) for mutable variables
- Dereferencing with `!`

**Further reading:**
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

**Special features:**
- Must be terminated with `end`
- Parentheses around the condition are optional

**Further reading:**
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

**Special features:**
- Odin has no separate `while` keyword
- Uses `for` without initialization and increment as a while loop

**Further reading:**
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

**Special features:**
- Parentheses around the condition are required
- Also supports `until` as a negated `while`

**Further reading:**
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

**Special features:**
- Parentheses around the condition are required
- Variables must be prefixed with `$`
- Curly braces can be omitted for single statements

**Further reading:**
- [PHP Documentation - while](https://www.php.net/manual/en/control-structures.while.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% While loop via recursion
while_loop(I, Max) :-
    I < Max,
    write(I), nl,
    I1 is I + 1,
    while_loop(I1, Max).
while_loop(Max, Max).

% Call
:- while_loop(0, 10).
```

**Special features:**
- Prolog has no native `while` construct
- While loops are implemented via recursive predicates
- Tail recursion is optimized by most Prolog implementations (last-call optimization)
- The termination condition is controlled via pattern matching or guards

**Further reading:**
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

**Special features:**
- Must be structured with indentation
- Parentheses around the condition are optional

**Further reading:**
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

**Special features:**
- Parentheses around the condition are required
- Assignment is done with `<-` or `=`

**Further reading:**
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

**Special features:**
- Must be terminated with `end`
- Parentheses around the condition are optional

**Further reading:**
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

**Special features:**
- Parentheses around the condition are required
- Curly braces are required
- Variables must be marked as `mut` to be mutable

**Further reading:**
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

**Special features:**
- Parentheses around the condition are required
- Curly braces can be omitted for single statements

**Further reading:**
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

**Special features:**
- Parentheses around the condition are optional
- Curly braces are required

**Further reading:**
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

**Special features:**
- Parentheses around the condition are required
- Curly braces can be omitted for single statements, but are recommended

**Further reading:**
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

**Special features:**
- Must be terminated with `End While`
- Uses `While` instead of `while`

**Further reading:**
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

**Special features:**
- V has no separate `while` keyword
- Uses `for` without initialization and increment as a while loop

**Further reading:**
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

**Special features:**
- Parentheses around the condition are required
- Supports optional increment after the colon: `while (condition) : (increment)`
- Curly braces are required

**Further reading:**
- [Zig Documentation - While](https://ziglang.org/documentation/0.11.0/#While)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; While loop with loop
(let ((i 0))
  (loop while (< i 5)
        do (format t "~a~%" i)
           (incf i)))

;; While loop with do
(do ((i 0 (1+ i)))
    ((>= i 5))
  (format t "~a~%" i))
```

**Special features:**
- `loop while` for classic while loops
- `do` provides a compact alternative with initialization and increment
- `loop` is a powerful iteration macro with many options

**Further reading:**
- [Common Lisp HyperSpec - loop](http://www.lispworks.com/documentation/HyperSpec/Body/m_loop.htm)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! DO WHILE loop
integer :: i = 0

do while (i < 10)
    print *, i
    i = i + 1
end do
```

**Special features:**
- `DO WHILE (condition)` for while loops
- Checks condition before each iteration
- Must be terminated with `END DO`

**Further reading:**
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

**Special features:**
- `while`/`do` syntax
- Condition is checked before each iteration
- `begin`/`end` for compound statements

**Further reading:**
- [Delphi Documentation - While Statements](https://docwiki.embarcadero.com/RADStudio/en/While_Statements)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* While loop *)
i = 0;
While[i < 5,
    Print[i];
    i++
]
```

**Special features:**
- `While[test, body]` executes `body` as long as `test` is True
- Functional alternatives like `NestWhile` are preferred

**Further reading:**
- [Wolfram Language Documentation - While](https://reference.wolfram.com/language/ref/While.html)

</TabItem>
</Tabs>


## 6.2.2. Do-While / Repeat-Until Loops

Loops that execute the loop body at least once before checking the condition. The condition is checked after each iteration, so the loop body is always executed at least once.

### Languages {#sprachen}

<Tabs availableTabs={['c', 'cpp', 'csharp', 'd', 'dart', 'groovy', 'haxe', 'java', 'javascript', 'kotlin', 'lua', 'objective-c', 'object-pascal', 'perl', 'php', 'prolog', 'swift', 'typescript', 'vbnet']} orangeTabs={['ada', 'crystal', 'go', 'julia', 'lean4', 'matlab', 'nim', 'ocaml', 'octave', 'odin', 'python', 'r', 'ruby', 'rust', 'scala', 'v', 'zig']}>
<TabItem value="ada" label="Ada">

```ada
-- Ada has no do-while, uses loop with exit
i := 0;
loop
    Put_Line(Integer'Image(i));
    i := i + 1;
    exit when i >= 10;
end loop;
```

**Special features:**
- Ada has no direct do-while
- Emulated with `loop...exit when`

**Further reading:**
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

**Special features:**
- Syntax: `do { ... } while (condition);`
- Semicolon after `while` is required
- Loop body is executed at least once

**Further reading:**
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

**Special features:**
- Syntax: `do { ... } while (condition);`
- Semicolon after `while` is required
- Loop body is executed at least once

**Further reading:**
- [cppreference.com - Do-while loop](https://en.cppreference.com/w/cpp/language/do)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Crystal has no do-while, uses loop with break
i = 0
loop do
  puts i
  i += 1
  break if i >= 10
end
```

**Special features:**
- Crystal has no direct do-while
- Emulated with `loop do...break if`

**Further reading:**
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

**Special features:**
- Syntax: `do { ... } while (condition);`
- Semicolon after `while` is required
- Loop body is executed at least once

**Further reading:**
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

**Special features:**
- Syntax: `do { ... } while (condition);`
- Semicolon after `while` is required
- Loop body is executed at least once

**Further reading:**
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

**Special features:**
- Syntax: `do { ... } while (condition);`
- Semicolon after `while` is required
- Loop body is executed at least once

**Further reading:**
- [Dart Language Tour - While and do-while](https://dart.dev/guides/language/language-tour#while-and-do-while)

</TabItem>
<TabItem value="go" label="Go">

```go
// Go has no do-while, uses for with break
i := 0
for {
    fmt.Println(i)
    i++
    if i >= 10 {
        break
    }
}
```

**Special features:**
- Go has no direct do-while
- Emulated with `for { ... break }`

**Further reading:**
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

**Special features:**
- `do...while` has been natively supported since Groovy 3.0 (Parrot parser)
- Loop body is executed at least once

**Further reading:**
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

**Special features:**
- Syntax: `do { ... } while (condition);`
- Semicolon after `while` is required
- Loop body is executed at least once

**Further reading:**
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

**Special features:**
- Syntax: `do { ... } while (condition);`
- Semicolon after `while` is required
- Loop body is executed at least once

**Further reading:**
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

**Special features:**
- Syntax: `do { ... } while (condition);`
- Semicolon after `while` is required
- Loop body is executed at least once

**Further reading:**
- [MDN Web Docs - do...while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Julia has no do-while, uses while(true) and break
i = 0
while true
    println(i)
    i += 1
    i >= 10 && break
end
```

**Special features:**
- Julia hat kein direktes Do-While
- Wird mit `while true` und `break` emuliert

**Further reading:**
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

**Special features:**
- Kotlin natively supports `do-while` (since version 1.0)
- Loop body is executed at least once
- Variables declared in the `do` block are visible in the `while` condition

**Further reading:**
- [Kotlin Documentation - While loops](https://kotlinlang.org/docs/control-flow.html#while-loops)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```haskell
-- Do-while emulated with repeat + break
def doWhileExample : IO Unit := do
  let mut i := 0
  repeat do
    IO.println (toString i)
    i := i + 1
    if i >= 10 then break
```

**Special features:**
- Lean 4 has no native do-while
- Emulated with `repeat` (infinite loop) and `break`
- `repeat` executes the body at least once

**Further reading:**
- [Functional Programming in Lean - Monads](https://lean-lang.org/functional_programming_in_lean/)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Do-while / repeat-until loop
local i = 0
repeat
    print(i)
    i = i + 1
until i >= 10
```

**Special features:**
- Lua uses `repeat...until` (repeat-until pattern)
- The condition is an exit condition (terminates when true)
- Loop body is executed at least once

**Further reading:**
- [Lua Documentation - Repeat](https://www.lua.org/manual/5.4/manual.html#3.3.5)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% MATLAB has no do-while, uses while(true) and break
i = 0;
while true
    disp(i);
    i = i + 1;
    if i >= 10
        break
    end
end
```

**Special features:**
- MATLAB has no direct do-while
- Emulated with `while true` and `break`

**Further reading:**
- [MATLAB Documentation - while](https://www.mathworks.com/help/matlab/ref/while.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Nim has no do-while, uses while(true) and break
var i = 0
while true:
    echo i
    inc i
    if i >= 10:
        break
```

**Special features:**
- Nim has no direct do-while
- Emulated with `while true` and `break`

**Further reading:**
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

**Special features:**
- Syntax: `do { ... } while (condition);`
- Semicolon after `while` is required
- Loop body is executed at least once

**Further reading:**
- [Apple Documentation - Control Flow](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/FoundationTypesandCollections/FoundationTypesandCollections.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Do-while / repeat-until loop
var i: Integer;
begin
    i := 0;
    repeat
        WriteLn(i);
        Inc(i);
    until i >= 10;
end;
```

**Special features:**
- Object Pascal uses `repeat...until` (repeat-until pattern)
- The condition is an exit condition (terminates when true)
- Loop body is executed at least once

**Further reading:**
- [Free Pascal Documentation - Repeat Statements](https://www.freepascal.org/docs-html/ref/refse23.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* OCaml has no do-while, uses while(true) and raise *)
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

**Special features:**
- OCaml has no direct do-while
- Emulated with `while true` and exception handling

**Further reading:**
- [OCaml Documentation - While Loops](https://v2.ocaml.org/manual/expr.html#s:iterative-expressions)

</TabItem>
<TabItem value="octave" label="Octave">

```matlab
% Octave has no do-while, uses while(true) and break
i = 0;
while true
    disp(i);
    i = i + 1;
    if i >= 10
        break
    endif
end
```

**Special features:**
- Octave has no direct do-while
- Emulated with `while true` and `break`

**Further reading:**
- [GNU Octave Documentation - The while Statement](https://octave.org/doc/v8.1.0/The-while-Statement.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Odin has no do-while, uses for with break
i := 0
for {
    fmt.println(i)
    i += 1
    if i >= 10 do break
}
```

**Special features:**
- Odin has no direct do-while
- Emulated with `for { ... break }`

**Further reading:**
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

**Special features:**
- `do { ... } while (condition)` is a true post-check loop
- The block is executed at least once
- Also supports `do { ... } until (condition)` as a negated variant

**Further reading:**
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

**Special features:**
- Syntax: `do { ... } while (condition);`
- Semicolon after `while` is required
- Loop body is executed at least once

**Further reading:**
- [PHP Documentation - do-while](https://www.php.net/manual/en/control-structures.do.while.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Repeat-until with repeat/0
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

**Special features:**
- Prolog has the built-in predicate `repeat/0`, which creates infinitely many choice points
- In combination with conditions and cut (`!`), a repeat-until pattern emerges
- `repeat` guarantees that the loop body is executed at least once
- The cut (`!`) terminates backtracking once the termination condition is met

**Further reading:**
- [SWI-Prolog – repeat/0](https://www.swi-prolog.org/pldoc/doc_for?object=repeat/0)

</TabItem>
<TabItem value="python" label="Python">

```python
# Python has no do-while, uses while(true) and break
i = 0
while True:
    print(i)
    i += 1
    if i >= 10:
        break
```

**Special features:**
- Python has no direct do-while
- Emulated with `while True` and `break`

**Further reading:**
- [Python Documentation - while Statements](https://docs.python.org/3/reference/compound_stmts.html#while)

</TabItem>
<TabItem value="r" label="R">

```r
# R has no do-while, uses repeat...break (repeat-until)
i <- 0
repeat {
    print(i)
    i <- i + 1
    if (i >= 10) break
}
```

**Special features:**
- R uses `repeat...break` (repeat-until pattern)
- The condition is checked with `if` and `break`
- Loop body is executed at least once

**Further reading:**
- [R Documentation - Control Structures](https://www.rdocumentation.org/packages/base/versions/3.6.2/topics/Control)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Ruby has no do-while, uses begin...end while (not recommended)
# Or loop do...break
i = 0
loop do
    puts i
    i += 1
    break if i >= 10
end
```

**Special features:**
- Ruby has no direct do-while
- Emulated with `loop do...break`
- `begin...end while` exists but is not recommended

**Further reading:**
- [Ruby Documentation - Control Expressions](https://docs.ruby-lang.org/en/3.2/syntax/control_expressions_rdoc.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Rust has no do-while, uses loop...break
let mut i = 0;
loop {
    println!("{}", i);
    i += 1;
    if i >= 10 {
        break;
    }
}
```

**Special features:**
- Rust has no direct do-while
- Emulated with `loop { ... break }`

**Further reading:**
- [Rust Documentation - Loops](https://doc.rust-lang.org/book/ch03-05-control-flow.html#repetition-with-loops)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Scala has no do-while, uses while(true) and return
var i = 0
while (true) {
    println(i)
    i += 1
    if (i >= 10) return
}
```

**Special features:**
- Scala has no direct do-while
- Emulated with `while(true)` and `return` or `break`

**Further reading:**
- [Scala Documentation - While Loops](https://docs.scala-lang.org/tour/while-loops.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Do-while / repeat-while loop
var i = 0
repeat {
    print(i)
    i += 1
} while i < 10
```

**Special features:**
- Swift uses `repeat...while` (repeat-until pattern, but condition is a continue condition)
- The condition is a continue condition (continues when true)
- Loop body is executed at least once

**Further reading:**
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

**Special features:**
- Syntax: `do { ... } while (condition);`
- Semicolon after `while` is required
- Loop body is executed at least once

**Further reading:**
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

**Special features:**
- VB.NET uses `Do...Loop While`
- The condition is a continue condition (continues when true)
- Loop body is executed at least once

**Further reading:**
- [Microsoft VB.NET Documentation - Do...Loop Statement](https://learn.microsoft.com/en-us/dotnet/visual-basic/language-reference/statements/do-loop-statement)

</TabItem>
<TabItem value="v" label="V">

```v
// V has no do-while, uses for with break
mut i := 0
for {
    println(i)
    i++
    if i >= 10 {
        break
    }
}
```

**Special features:**
- V has no direct do-while
- Emulated with `for { ... break }`

**Further reading:**
- [V Documentation - Control Flow](https://github.com/vlang/v/blob/master/doc/docs.md#control-flow)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Zig has no do-while, uses while(true) and break
var i: i32 = 0;
while (true) {
    std.debug.print("{}\n", .{i});
    i += 1;
    if (i >= 10) break;
}
```

**Special features:**
- Zig has no direct do-while
- Emulated with `while(true)` and `break`

**Further reading:**
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

**Special features:**
- `repeat`/`until` instead of `do`/`while`
- Condition is checked after each iteration
- Loop runs at least once
- No `begin`/`end` needed (repeat/until form the block)
- Condition is inverted: loop ends when condition is `True`

**Further reading:**
- [Delphi Documentation - Repeat Statements](https://docwiki.embarcadero.com/RADStudio/en/Repeat_Statements)

</TabItem>
</Tabs>


## 6.2.3. Index-based For Loops (C-Style)

For loops with explicit initialization, condition, and increment. Enable precise control over the loop variable and are particularly useful for array indexing and numerical iterations.

### Languages {#sprachen}

<Tabs availableTabs={['c', 'cpp', 'csharp', 'd', 'dart', 'go', 'groovy', 'java', 'javascript', 'lua', 'nim', 'objective-c', 'object-pascal', 'odin', 'perl', 'php', 'typescript', 'v', 'wolfram-language']} orangeTabs={['haxe', 'kotlin', 'rust', 'swift', 'zig']}>
<TabItem value="c" label="C">

```c
// Index-basierte For-Schleife (C-Style)
for (int i = 0; i < 10; i++) {
    printf("%d\n", i);
}
```

**Special features:**
- Syntax: `for (init; condition; increment) { ... }`
- All three parts are optional
- Variable declaration in the init part is possible since C99

**Further reading:**
- [C Standard - For loop](https://en.cppreference.com/w/c/language/for)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Index-basierte For-Schleife (C-Style)
for (int i = 0; i < 10; i++) {
    std::cout << i << std::endl;
}
```

**Special features:**
- Syntax: `for (init; condition; increment) { ... }`
- All three parts are optional
- Variable declaration in the init part is possible

**Further reading:**
- [cppreference.com - For loop](https://en.cppreference.com/w/cpp/language/for)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Index-basierte For-Schleife (C-Style)
for (int i = 0; i < 10; i++) {
    Console.WriteLine(i);
}
```

**Special features:**
- Syntax: `for (init; condition; increment) { ... }`
- All three parts are optional
- Variable declaration in the init part is possible

**Further reading:**
- [Microsoft C# Documentation - for statement](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/statements/iteration-statements#the-for-statement)

</TabItem>
<TabItem value="d" label="D">

```d
// Index-basierte For-Schleife (C-Style)
for (int i = 0; i < 10; i++) {
    writeln(i);
}
```

**Special features:**
- Syntax: `for (init; condition; increment) { ... }`
- All three parts are optional
- Variable declaration in the init part is possible

**Further reading:**
- [D Language Specification - For Statement](https://dlang.org/spec/statement.html#for_statement)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Index-basierte For-Schleife (C-Style)
for (int i = 0; i < 10; i++) {
  print(i);
}
```

**Special features:**
- Syntax: `for (init; condition; increment) { ... }`
- All three parts are optional
- Variable declaration in the init part is possible

**Further reading:**
- [Dart Language Tour - For loops](https://dart.dev/guides/language/language-tour#for-loops)

</TabItem>
<TabItem value="go" label="Go">

```go
// Index-basierte For-Schleife (C-Style)
for i := 0; i < 10; i++ {
    fmt.Println(i)
}
```

**Special features:**
- Go uses `for` for all loop types
- Syntax: `for init; condition; increment { ... }`
- All three parts are optional

**Further reading:**
- [Go Documentation - For statements](https://go.dev/ref/spec#For_statements)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Index-basierte For-Schleife (C-Style)
for (int i = 0; i < 10; i++) {
    println i
}
```

**Special features:**
- Syntax: `for (init; condition; increment) { ... }`
- All three parts are optional
- Variable declaration in the init part is possible

**Further reading:**
- [Groovy Documentation - Looping Structures](https://groovy-lang.org/semantics.html#_looping_structures)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Index-based for loop (range-based)
for (i in 0...10) {
    trace(i);
}
```

**Special features:**
- Haxe has no C-style `for(init; cond; step)` syntax
- Index-based iteration via range operator `...` (exclusive)
- `0...10` iterates from 0 to 9

**Further reading:**
- [Haxe Documentation - For](https://haxe.org/manual/expression-for.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Index-basierte For-Schleife (C-Style)
for (int i = 0; i < 10; i++) {
    System.out.println(i);
}
```

**Special features:**
- Syntax: `for (init; condition; increment) { ... }`
- All three parts are optional
- Variable declaration in the init part is possible

**Further reading:**
- [Oracle Java Documentation - The for Statement](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/for.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Index-based for loop (C-style)
for (let i = 0; i < 10; i++) {
    console.log(i);
}
```

**Special features:**
- Syntax: `for (init; condition; increment) { ... }`
- All three parts are optional
- `let` or `var` for variable declaration in the init part

**Further reading:**
- [MDN Web Docs - for](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Index-based for loop (C-style)
for (i in 0 until 10) {
    println(i)
}
```

**Special features:**
- Kotlin has no traditional C-style for loop
- Uses range syntax: `for (i in start until end)`
- Or `for (i in 0..9)` for inclusive ranges

**Further reading:**
- [Kotlin Documentation - For loop](https://kotlinlang.org/docs/control-flow.html#for-loops)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Index-based for loop (C-style)
for i in 0..<10:
    echo i
```

**Special features:**
- Nim uses range syntax: `for i in start..<end`
- Also supports `countup` and `countdown` for explicit control

**Further reading:**
- [Nim Documentation - For Statement](https://nim-lang.org/docs/manual.html#statements-and-expressions-for-statement)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Index-basierte For-Schleife (C-Style)
for (int i = 0; i < 10; i++) {
    NSLog(@"%d", i);
}
```

**Special features:**
- Syntax: `for (init; condition; increment) { ... }`
- All three parts are optional
- Variable declaration in the init part is possible

**Further reading:**
- [Apple Documentation - Control Flow](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/FoundationTypesandCollections/FoundationTypesandCollections.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Index-based for loop (C-style)
for i := 0; i < 10; i += 1 {
    fmt.println(i)
}
```

**Special features:**
- Syntax: `for init; condition; increment { ... }`
- All three parts are optional
- Variable declaration in the init part is possible

**Further reading:**
- [Odin Documentation - For Statements](https://odin-lang.org/docs/overview/#for-statements)

</TabItem>
<TabItem value="php" label="PHP">

```php
// Index-based for loop (C-style)
for ($i = 0; $i < 10; $i++) {
    echo $i . "\n";
}
```

**Special features:**
- Syntax: `for (init; condition; increment) { ... }`
- All three parts are optional
- Variables must be prefixed with `$`

**Further reading:**
- [PHP Documentation - for](https://www.php.net/manual/en/control-structures.for.php)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Index-based for loop (C-style)
for i in 0..10 {
    println!("{}", i);
}
```

**Special features:**
- Rust has no traditional C-style for loop
- Uses range syntax: `for i in start..end`
- `..` is exclusive, `..=` is inclusive

**Further reading:**
- [Rust Documentation - Loops](https://doc.rust-lang.org/book/ch03-05-control-flow.html#repetition-with-loops)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Index-based for loop (C-style)
for i in 0..<10 {
    print(i)
}
```

**Special features:**
- Swift has no traditional C-style for loop (removed in Swift 3.0)
- Uses range syntax: `for i in start..<end`
- `..<` is exclusive, `...` is inclusive

**Further reading:**
- [Swift Documentation - Control Flow](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/controlflow/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Index-based for loop (C-style)
for (let i = 0; i < 10; i++) {
    console.log(i);
}
```

**Special features:**
- Syntax: `for (init; condition; increment) { ... }`
- All three parts are optional
- `let` or `var` for variable declaration in the init part

**Further reading:**
- [TypeScript Handbook - Iteration](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html)

</TabItem>
<TabItem value="v" label="V">

```v
// Index-based for loop (C-style)
for i := 0; i < 10; i++ {
    println(i)
}
```

**Special features:**
- Syntax: `for init; condition; increment { ... }`
- All three parts are optional
- Variable declaration in the init part is possible

**Further reading:**
- [V Documentation - Control Flow](https://github.com/vlang/v/blob/master/doc/docs.md#control-flow)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Index-based for loop (C-style)
var i: i32 = 0;
while (i < 10) : (i += 1) {
    std.debug.print("{}\n", .{i});
}
```

**Special features:**
- Zig has no traditional C-style for loop
- Uses `while` with optional increment: `while (condition) : (increment) { ... }`

**Further reading:**
- [Zig Documentation - While](https://ziglang.org/documentation/0.11.0/#While)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Numeric for loop (index-based)
for i = 1, 10 do
    print(i)        -- 1, 2, 3, ..., 10
end

-- With step size
for i = 0, 20, 2 do
    print(i)        -- 0, 2, 4, ..., 20
end

-- Count backwards
for i = 10, 1, -1 do
    print(i)        -- 10, 9, 8, ..., 1
end

-- Loop variable is automatically local
for i = 1, 5 do
    -- i is only visible within the loop
end
-- print(i)         -- nil
```

**Special features:**
- Syntax: `for var = start, stop [, step] do ... end`
- Default step size is 1 (can be negative for counting backwards)
- Loop variable is automatically local to the loop block
- Start, stop, and step are evaluated once on entry
- Loop variable should not be assigned within the loop

**Further reading:**
- [Lua Reference Manual - For Statement](https://www.lua.org/manual/5.4/manual.html#3.3.5)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
var
  i: Integer;
begin
  // Count upwards
  for i := 0 to 4 do
    WriteLn(i);

  // Count downwards
  for i := 4 downto 0 do
    WriteLn(i);
end;
```

**Special features:**
- `for`/`to`/`do` for upwards, `for`/`downto`/`do` for downwards
- Loop variable must not be modified within the loop
- Step size is always 1

**Further reading:**
- [Delphi Documentation - For Statements](https://docwiki.embarcadero.com/RADStudio/en/For_Statements)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# C-style for loop
for (my $i = 0; $i < 10; $i++) {
    print "$i\n";
}
```

**Special features:**
- Syntax: `for (init; condition; increment) { ... }`
- `for` and `foreach` are synonymous in Perl
- Parentheses around control expressions are required

**Further reading:**
- [Perl Documentation - For Loops](https://perldoc.perl.org/perlsyn#For-Loops)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* For loop (C-style) *)
For[i = 0, i < 5, i++,
    Print[i]
]
```

**Special features:**
- `For[start, test, incr, body]` is C-like
- In practice, `Do[]` or `Table[]` is preferred

**Further reading:**
- [Wolfram Language Documentation - For](https://reference.wolfram.com/language/ref/For.html)

</TabItem>
</Tabs>


## 6.2.4. Iterative For Loops

Iteration directly over a collection without explicit indices. Many modern languages provide compact constructs for this pattern.

### Languages {#sprachen}

<Tabs availableTabs={['ada', 'carbon', 'clojure', 'common-lisp', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'eiffel', 'elixir', 'fsharp', 'go', 'groovy', 'haxe', 'java', 'javascript', 'julia', 'kotlin', 'lean4', 'lua', 'matlab', 'mojo', 'nim', 'objective-c', 'object-pascal', 'octave', 'odin', 'perl', 'php', 'python', 'r', 'racket', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'v', 'vbnet', 'wolfram-language', 'zig']} orangeTabs={['elm', 'erlang', 'gleam', 'haskell', 'idris', 'koka', 'mercury', 'ocaml', 'purescript', 'roc']}>
<TabItem value="ada" label="Ada">

```ada
-- for loop over arrays
declare
   type String_Array is array (Positive range <>) of String (1 .. 10);
   items : String_Array := ("Apfel     ", "Banane    ", "Kirsche   ");
begin
   for item of items loop
      Put_Line(item);
   end loop;
end;
```

**Special features:**
- Supports iteration over arrays and containers
- Type-safe and efficient

**Further reading:**
- [Ada Reference Manual - For Loops](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-5-5.html)

</TabItem>
<TabItem value="csharp" label="C#">

```java
// Enhanced for-loop (since Java 5.0)
List<String> items = Arrays.asList("Apfel", "Banane", "Kirsche");
for (String item : items) {
    System.out.println(item);
}
```

**Special features:**
- Introduced in Java 5.0 and is type-safe
- Works with all `Iterable` implementations

**Further reading:**
- [Oracle Java Documentation - The for Statement](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/for.html)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Range-based for loop (since C++11)
std::vector<std::string> items = {"Apfel", "Banane", "Kirsche"};
for (const auto& item : items) {
    std::cout << item << std::endl;
}
```

**Special features:**
- Introduced in C++11
- Works with all containers that provide `begin()` and `end()`

**Further reading:**
- [cppreference.com - Range-based for loop](https://en.cppreference.com/w/cpp/language/range-for)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Range-based for loop (experimental)
var items: [String] = {"Apfel", "Banane", "Kirsche"};
for (var item: items) {
    Print(item);
}
```

**Special features:**
- Experimental language, syntax may still change
- C++-like syntax with modern features

**Further reading:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; for loop over sequences
(def items ["Apfel" "Banane" "Kirsche"])
(doseq [item items]
  (println item))
```

**Special features:**
- `doseq` for side effects, `for` for List Comprehensions
- Works with all sequences

**Further reading:**
- [Clojure Documentation - for and doseq](https://clojure.org/reference/special_forms#for)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; dolist for lists
(let ((items '("Apfel" "Banane" "Kirsche")))
  (dolist (item items)
    (format t "~a~%" item)))
```

**Special features:**
- `dolist` for lists, `loop` for general iteration
- Functional and imperative iteration possible

**Further reading:**
- [Common Lisp HyperSpec - dolist](http://www.lispworks.com/documentation/HyperSpec/Body/m_dolist.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# for loop over Collections
items = ["Apfel", "Banane", "Kirsche"]
items.each do |item|
  puts item
end
```

**Special features:**
- Ruby-like syntax
- Supports `each`, `each_with_index` and other iterators

**Further reading:**
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

**Special features:**
- Supports iteration over Arrays, Ranges and custom types
- Very flexible and efficient

**Further reading:**
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

**Special features:**
- Works with all `Iterable` implementations
- Type-safe

**Further reading:**
- [Dart Language Tour - Loops](https://dart.dev/guides/language/language-tour#loops)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
-- across loop
items: ARRAY [STRING]
items := <<"Apfel", "Banane", "Kirsche">>
across items as item loop
    print (item.item)
    print ("%N")
end
```

**Special features:**
- Uses `across` for iteration over containers
- Type-safe and contract-based

**Further reading:**
- [Eiffel Documentation - Iteration](https://www.eiffel.org/doc/eiffel/Loop_Invariants)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# for comprehension
items = ["Apfel", "Banane", "Kirsche"]
for item <- items do
  IO.puts(item)
end
```

**Special features:**
- `for` is a comprehension that returns lists
- `Enum.each` is often used for side effects

**Further reading:**
- [Elixir Documentation - Comprehensions](https://hexdocs.pm/elixir/1.16/comprehensions.html)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Elm has no imperative loops
-- Iteration via List functions
items = ["Apfel", "Banane", "Kirsche"]
uppercased = List.map String.toUpper items
-- ["APFEL", "BANANE", "KIRSCHE"]
```

**Special features:**
- Elm has no imperative loops (no `for`, `while`)
- Iteration is done via Higher-Order Functions like `List.map`, `List.foldl`
- All iterations create new values (no side effects)

**Further reading:**
- [Elm Documentation - List](https://package.elm-lang.org/packages/elm/core/latest/List)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% List Comprehensions or lists:foreach
Items = ["Apfel", "Banane", "Kirsche"],
lists:foreach(fun(Item) -> io:format("~s~n", [Item]) end, Items).
```

**Special features:**
- Uses `lists:foreach` or List Comprehensions
- Functional iteration without imperative loops

**Further reading:**
- [Erlang Documentation - List Comprehensions](https://www.erlang.org/doc/programming_examples/list_comprehensions.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// for-in-Schleife
let items = ["Apfel"; "Banane"; "Kirsche"]
for item in items do
    printfn "%s" item
```

**Special features:**
- Works with all `seq` types
- Also supports Ranges

**Further reading:**
- [F# Documentation - Loops](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/loops-for-to-expression)

</TabItem>
<TabItem value="gleam" label="Gleam">

```erlang
// list.map or list.each
let items = ["Apfel", "Banane", "Kirsche"]
list.each(items, fn(item) {
  io.println(item)
})
```

**Special features:**
- Funktionale Sprache ohne imperative Schleifen
- Uses List functions for iteration

**Further reading:**
- [Gleam Documentation - Lists](https://gleam.run/documentation/tour/lists/)

</TabItem>
<TabItem value="go" label="Go">

```go
// for range loop
items := []string{"Apfel", "Banane", "Kirsche"}
for _, item := range items {
    fmt.Println(item)
}
```

**Special features:**
- `for range` works with Arrays, Slices, Maps, Strings and Channels
- Supports index and value

**Further reading:**
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

**Special features:**
- Works with all Iterables
- Also supports `each` method

**Further reading:**
- [Groovy Documentation - Loops](https://groovy-lang.org/semantics.html#_loops)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- mapM_ for side effects, map for transformation
items = ["Apfel", "Banane", "Kirsche"]
mapM_ putStrLn items
```

**Special features:**
- Funktionale Sprache ohne imperative Schleifen
- Uses List functions for iteration

**Further reading:**
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

**Special features:**
- Works with Arrays and Iterables
- Cross-platform compilation

**Further reading:**
- [Haxe Documentation - For Loops](https://haxe.org/manual/expression-for.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- traverse_ for side effects
items : List String
items = ["Apfel", "Banane", "Kirsche"]
traverse_ putStrLn items
```

**Special features:**
- Funktionale Sprache ohne imperative Schleifen
- Uses List functions for iteration

**Further reading:**
- [Idris Documentation - Lists](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html#lists)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Iteration over lists (Higher-Order functions)
val items = ["Apfel", "Banane", "Kirsche"]
items.foreach fn(item)
  println(item)

// With index
items.foreach-indexed fn(i, item)
  println(i.show ++ ": " ++ item)

// For with Range
for(0, 10) fn(i)
  println(i.show)
```

**Special features:**
- Koka uses Higher-Order functions instead of imperative loops
- `foreach` for iteration over lists
- `for(start, end)` for index-based iteration
- Functional style with lambda expressions

**Further reading:**
- [Koka Language Guide - Control Flow](https://koka-lang.github.io/koka/doc/book.html#sec-control)

</TabItem>
<TabItem value="java" label="Java">

```java
// Enhanced for-loop (since Java 5.0)
List<String> items = Arrays.asList("Apfel", "Banane", "Kirsche");
for (String item : items) {
    System.out.println(item);
}
```

**Special features:**
- Introduced in Java 5.0 and is type-safe
- Works with all `Iterable` implementations

**Further reading:**
- [Oracle Java Documentation - The for Statement](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/for.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// for...of loop (since ES6/ES2015)
const items = ["Apfel", "Banane", "Kirsche"];
for (const item of items) {
    console.log(item);
}
```

**Special features:**
- `for...of` works with all iterable objects (Arrays, Strings, Maps, Sets, etc.)

**Further reading:**
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

**Special features:**
- Very flexible, works with all iterable objects
- Also supports Ranges and Generators

**Further reading:**
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

**Special features:**
- Works with all types that implement `Iterable`
- Also supports Ranges and Arrays

**Further reading:**
- [Kotlin Documentation - For Loops](https://kotlinlang.org/docs/control-flow.html#for-loops)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```haskell
-- for-in loop (in do notation)
def printItems : IO Unit := do
  let items := ["Apfel", "Banane", "Kirsche"]
  for item in items do
    IO.println item
```

**Special features:**
- `for` is available in `do` blocks
- Works with all types that have a `ForIn` instance
- Supports lists, arrays, ranges and other collections

**Further reading:**
- [Functional Programming in Lean - Monads](https://lean-lang.org/functional_programming_in_lean/)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- for-in loop (ipairs for arrays)
local items = {"Apfel", "Banane", "Kirsche"}
for _, item in ipairs(items) do
    print(item)
end
```

**Special features:**
- `ipairs` for arrays, `pairs` for tables
- Generic iteration over tables

**Further reading:**
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

**Special features:**
- Works with Arrays and Cell Arrays
- Also supports numeric ranges

**Further reading:**
- [MATLAB Documentation - for](https://www.mathworks.com/help/matlab/ref/for.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Iteration over lists (Higher-Order predicates)
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

**Special features:**
- Mercury has no imperative loops
- Iteration over lists is done via Higher-Order predicates like `list.foldl`, `list.map`
- I/O operations require passing through the I/O state (`!IO`)
- Functional/logical style with explicit state threading

**Further reading:**
- [Mercury Library Reference - list](https://www.mercurylang.org/information/doc-release/mercury_library/list.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# for loop (Python-like)
var items = ["Apfel", "Banane", "Kirsche"]
for item in items:
    print(item)
```

**Special features:**
- Python-like syntax
- Supports iteration over Collections

**Further reading:**
- [Mojo Documentation - Control Flow](https://docs.modular.com/mojo/manual/control-flow/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# for-Schleife
var items = @["Apfel", "Banane", "Kirsche"]
for item in items:
    echo item
```

**Special features:**
- Works with Arrays, sequences and other Iterables
- Also supports Ranges

**Further reading:**
- [Nim Documentation - For Statement](https://nim-lang.org/docs/manual.html#statements-and-expressions-for-statement)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// for-in loop (since Delphi 2005)
var
  items: TArray<string>;
begin
  items := ['Apfel', 'Banane', 'Kirsche'];
  for item in items do
    WriteLn(item);
end;
```

**Special features:**
- Introduced in Delphi 2005
- Works with Arrays and Collections that implement `GetEnumerator`

**Further reading:**
- [Embarcadero Delphi Documentation - For...In Loops](https://docwiki.embarcadero.com/RADStudio/en/For...In_Loops)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objectivec
// Fast Enumeration (since Objective-C 2.0)
NSArray *items = @[@"Apfel", @"Banane", @"Kirsche"];
for (NSString *item in items) {
    NSLog(@"%@", item);
}
```

**Special features:**
- Fast Enumeration was introduced in Objective-C 2.0
- Works with `NSArray`, `NSSet`, `NSDictionary` and other Collections

**Further reading:**
- [Apple Documentation - Fast Enumeration](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ObjectiveC/Chapters/ocFastEnumeration.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* List.iter for side effects *)
let items = ["Apfel"; "Banane"; "Kirsche"]
List.iter (fun item -> print_endline item) items
```

**Special features:**
- Functional language without imperative loops
- Uses `List.iter` for side effects, `List.map` for transformation

**Further reading:**
- [OCaml Documentation - Lists](https://ocaml.org/docs/lists)

</TabItem>
<TabItem value="octave" label="Octave">

```matlab
% for loop (MATLAB-like)
items = ["Apfel", "Banane", "Kirsche"];
for item = items
    disp(item)
end
```

**Special features:**
- MATLAB-like syntax
- Works with Arrays

**Further reading:**
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

**Special features:**
- Works with Arrays and Slices
- Also supports Ranges

**Further reading:**
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

**Special features:**
- Also supports `foreach` as an alias for `for`
- Works with Arrays and lists

**Further reading:**
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

**Special features:**
- `foreach` works with Arrays and objects that implement `Traversable`
- Also supports associative arrays with `foreach ($array as $key => $value)`

**Further reading:**
- [PHP Documentation - foreach](https://www.php.net/manual/en/control-structures.foreach.php)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- traverse_ for side effects
items = ["Apfel", "Banane", "Kirsche"]
traverse_ log items
```

**Special features:**
- Funktionale Sprache ohne imperative Schleifen
- Uses List functions for iteration

**Further reading:**
- [PureScript Documentation - Lists](https://book.purescript.org/chapter3.html#lists)

</TabItem>
<TabItem value="python" label="Python">

```python
# Iterative For loop
items = ["Apfel", "Banane", "Kirsche"]
for item in items:
    print(item)

# With enumerate for index and value
for i, item in enumerate(items):
    print(f"{i}: {item}")
```

**Special features:**
- `for item in iterable` iterates over any Iterables
- `enumerate()` provides index and value
- Works with lists, tuples, strings, dicts, sets and all Iterables

**Further reading:**
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

**Special features:**
- Works with vectors, lists and other iterable objects
- Also supports numeric ranges

**Further reading:**
- [R Documentation - For Loops](https://cran.r-project.org/doc/manuals/r-release/R-intro.html#Repetitive-execution-for-loops)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
;; for loop
(define items '("Apfel" "Banane" "Kirsche"))
(for ([item items])
  (printf "~a~n" item))
```

**Special features:**
- Supports various `for` variants for different data types
- Very flexible and powerful

**Further reading:**
- [Racket Documentation - for](https://docs.racket-lang.org/reference/for.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Iteration via functions (no traditional loops)
items = ["Apfel", "Banane", "Kirsche"]
result = List.map items \item -> Str.toUpper item
```

**Special features:**
- No traditional For loops
- Uses `List.map`, `List.walk` etc. for iteration
- Functional style

**Further reading:**
- [Roc Documentation - Lists](https://www.roc-lang.org/builtins/List)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# for-in loop or each
items = ["Apfel", "Banane", "Kirsche"]
for item in items
  puts item
end

# Or more idiomatically with each
items.each do |item|
  puts item
end
```

**Special features:**
- Supports both `for` and `each` method
- `each` is the more idiomatic variant

**Further reading:**
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

**Special features:**
- Works with all types that implement `IntoIterator`
- Ownership-aware and safe

**Further reading:**
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

**Special features:**
- Works with all Collections
- Also supports for-Comprehensions for transformations

**Further reading:**
- [Scala Documentation - For Loops](https://docs.scala-lang.org/scala3/book/control-structures.html#for-loops-and-for-expressions)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; for-each for side effects
(define items '("Apfel" "Banane" "Kirsche"))
(for-each (lambda (item) (display (string-append item "\n"))) items)
```

**Special features:**
- Uses `for-each` for side effects, `map` for transformation
- Functional iteration

**Further reading:**
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

**Special features:**
- Works with all types that implement `Sequence`
- Also supports Ranges and Stride

**Further reading:**
- [Swift Documentation - For-In Loops](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/controlflow/#For-In-Loops)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```javascript
// for...of loop (since ES6/ES2015)
const items = ["Apfel", "Banane", "Kirsche"];
for (const item of items) {
    console.log(item);
}
```

**Special features:**
- `for...of` works with all iterable objects (Arrays, Strings, Maps, Sets, etc.)

**Further reading:**
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

**Special features:**
- Works with Arrays and Maps
- Also supports Ranges

**Further reading:**
- [V Documentation - For Loops](https://github.com/vlang/v/blob/master/doc/docs.md#for-loops)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```csharp
' For Each loop
Dim items As String() = {"Apfel", "Banane", "Kirsche"}
For Each item In items
    Console.WriteLine(item)
Next
```

**Special features:**
- `For Each` works with all types that implement `IEnumerable`
- Type-safe

**Further reading:**
- [Microsoft VB.NET Documentation - For Each...Next Statement](https://learn.microsoft.com/en-us/dotnet/visual-basic/language-reference/statements/for-each-next-statement)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```wolfram
(* Do loop *)
items = {"Apfel", "Banane", "Kirsche"};
Do[Print[item], {item, items}]
```

**Special features:**
- Uses `Do` or `For` for iteration
- Also supports functional iteration with `Map`

**Further reading:**
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

**Special features:**
- Works with Arrays, Slices and other iterable types
- Also supports index with `for (items, 0..) |item, index|`

**Further reading:**
- [Zig Documentation - For Loops](https://ziglang.org/documentation/0.11.0/#for)

</TabItem>
</Tabs>


## 6.2.5. For-Each / Enhanced For Loops

Loops that iterate over collections without explicit index management. Provide a clean and safe way to iterate over arrays, lists, and other iterable structures.

### Languages {#sprachen}

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

**Special features:**
- Uses `for item of items` for direct element iteration
- Must be closed with `end loop`

**Further reading:**
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

**Special features:**
- Experimental language, syntax may still change
- C++-like syntax with explicit type annotation

**Further reading:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; For-Each Loop (doseq)
(def items ["Apfel" "Banane" "Kirsche"])
(doseq [item items]
  (println item))
```

**Special features:**
- Uses `doseq` for side effects
- `for` is reserved for List Comprehensions

**Further reading:**
- [Clojure Documentation - doseq](https://clojure.org/reference/special_forms#doseq)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; For-Each Loop (dolist)
(let ((items '("Apfel" "Banane" "Kirsche")))
  (dolist (item items)
    (format t "~a~%" item)))
```

**Special features:**
- Uses `dolist` for lists
- `dolist` is specific for list iteration

**Further reading:**
- [Common Lisp HyperSpec - dolist](http://www.lispworks.com/documentation/HyperSpec/Body/m_dolist.htm)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// For-Each Loop (Range-based for, since C++11)
std::vector<std::string> items = {"Apfel", "Banane", "Kirsche"};
for (const auto& item : items) {
    std::cout << item << std::endl;
}
```

**Special features:**
- Introduced in C++11
- Syntax: `for (element : container)`
- Supports `auto` for type inference

**Further reading:**
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

**Special features:**
- Uses `each` with block
- Also supports `for item in items` syntax

**Further reading:**
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

**Special features:**
- Syntax: `foreach (type variable in collection)`
- Supports `var` for type inference (since C# 3.0)

**Further reading:**
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

**Special features:**
- Syntax: `foreach (variable; collection)`
- Also supports `foreach (ref item; items)` for references

**Further reading:**
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

**Special features:**
- Syntax: `for (variable in collection)`
- Supports `var` for type inference

**Further reading:**
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

**Special features:**
- Uses `across...as...loop` syntax
- Must be closed with `end`

**Further reading:**
- [Eiffel Documentation - Control Structures](https://www.eiffel.org/doc/eiffel/Control_Structures)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# For-Each Loop (Enum.each)
items = ["Apfel", "Banane", "Kirsche"]
Enum.each(items, fn item -> IO.puts(item) end)
```

**Special features:**
- Uses `Enum.each/2` with anonymous function
- Alternative: `for`-Comprehension (`for x <- list, do: ...`)

**Further reading:**
- [Elixir Documentation - Enum.each](https://hexdocs.pm/elixir/Enum.html#each/2)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Elm hat keine for-each-Schleifen
-- Equivalent: List.map for element-wise processing
items = ["Apfel", "Banane", "Kirsche"]
processed = List.map (\item -> String.toUpper item) items
-- ["APFEL", "BANANE", "KIRSCHE"]

-- Mit Index
indexed = List.indexedMap (\i item -> String.fromInt i ++ ": " ++ item) items
-- ["0: Apfel", "1: Banane", "2: Kirsche"]
```

**Special features:**
- Elm hat keine traditionellen Schleifen
- `List.map` for transformation of each element
- `List.indexedMap` for iteration with index
- `List.foldl` / `List.foldr` for accumulation

**Further reading:**
- [Elm Documentation - List](https://package.elm-lang.org/packages/elm/core/latest/List)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% For-Each Loop (lists:foreach)
Items = ["Apfel", "Banane", "Kirsche"],
lists:foreach(fun(Item) -> io:format("~s~n", [Item]) end, Items).
```

**Special features:**
- Uses `lists:foreach` with function
- Functional style without explicit loops

**Further reading:**
- [Erlang Documentation - lists:foreach](https://www.erlang.org/doc/man/lists.html#foreach-2)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// For-Each Loop (for...in)
let items = ["Apfel"; "Banane"; "Kirsche"]
for item in items do
    printfn "%s" item
```

**Special features:**
- Syntax: `for variable in collection do`
- Muss mit `do` eingeleitet werden

**Further reading:**
- [F# Documentation - For...in Expression](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/loops-for-in-expression)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// For-Each Loop via list.each
// Requires: import gleam/list
// Requires: import gleam/io
let items = ["Apfel", "Banane", "Kirsche"]
list.each(items, fn(item) { io.println(item) })
```

**Special features:**
- Uses `list.each` for iteration with side effects
- Functional style without imperative loops
- `list.map` for transformation, `list.each` for side effects

**Further reading:**
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

**Special features:**
- Syntax: `for index, value := range collection`
- `_` is used to ignore the index

**Further reading:**
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

**Special features:**
- Syntax: `for (variable in collection)`
- Also supports `items.each { item -> ... }` syntax

**Further reading:**
- [Groovy Documentation - Looping Structures](https://groovy-lang.org/semantics.html#_looping_structures)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- For-Each Loop (mapM_ für Seiteneffekte)
import Control.Monad
items = ["Apfel", "Banane", "Kirsche"]
mapM_ putStrLn items
```

**Special features:**
- Haskell hat keine traditionellen Schleifen
- Uses `mapM_` for side effects or `map` for transformations

**Further reading:**
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

**Special features:**
- Syntax: `for (variable in collection)`
- Supports iterators

**Further reading:**
- [Haxe Documentation - For](https://haxe.org/manual/expression-for.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- For-Each Loop (for_ für Seiteneffekte)
items : List String
items = ["Apfel", "Banane", "Kirsche"]
for_ items (\item => putStrLn item)
```

**Special features:**
- Verwendet `for_` für Seiteneffekte
- Funktionaler Stil

**Further reading:**
- [Idris Documentation - Control Structures](https://idris2.readthedocs.io/en/latest/tutorial/starting.html#control-structures)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// For-Each über Listen (Higher-Order-Funktion)
val items = ["Apfel", "Banane", "Kirsche"]
items.foreach fn(item)
  println(item)

// With map for transformations
val upper = items.map fn(item)
  item.to-upper
```

**Special features:**
- Koka uses `foreach` as a Higher-Order function instead of a loop syntax
- `map` for transformations, `foreach` for side effects
- Lambda expressions with `fn(...)` syntax

**Further reading:**
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

**Special features:**
- Introduced in Java 5.0
- Syntax: `for (type variable : collection)`
- Supports all Iterable implementations

**Further reading:**
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

**Special features:**
- Wurde in ES6 eingeführt
- Syntax: `for (const variable of collection)`
- Unterstützt alle iterierbaren Objekte

**Further reading:**
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

**Special features:**
- Syntax: `for variable in collection`
- Muss mit `end` abgeschlossen werden

**Further reading:**
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

**Special features:**
- Syntax: `for (variable in collection)`
- Supports all Iterable implementations

**Further reading:**
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

**Special features:**
- Syntax: `for variable in collection do`
- Works with all types that have a `ForIn` instance (lists, arrays, etc.)
- `#[...]` creates an array, `[...]` creates a list

**Further reading:**
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

**Special features:**
- Uses `ipairs` for array-like tables
- Syntax: `for index, value in ipairs(table)`
- `_` is used to ignore the index

**Further reading:**
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

**Special features:**
- Syntax: `for variable = collection`
- Muss mit `end` abgeschlossen werden

**Further reading:**
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

**Special features:**
- Mercury has no `for-each` language construct
- Iteration via Higher-Order predicates: `list.foldl`, `list.map`, `list.filter`
- `list.map` for transformations, `list.foldl` for accumulation with side effects
- Functional/logical style instead of imperative loops

**Further reading:**
- [Mercury Library Reference - list](https://www.mercurylang.org/information/doc-release/mercury_library/list.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# For-Each Loop (for...in)
var items = ["Apfel", "Banane", "Kirsche"]
for item in items:
    print(item)
```

**Special features:**
- Python-like syntax
- Syntax: `for variable in collection`
- Must be structured with indentation

**Further reading:**
- [Mojo Documentation - Control Flow](https://docs.modular.com/mojo/manual/control-flow/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# For-Each Loop (for...in)
let items = ["Apfel", "Banane", "Kirsche"]
for item in items:
    echo item
```

**Special features:**
- Syntax: `for variable in collection`
- Muss mit Einrückung strukturiert werden

**Further reading:**
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

**Special features:**
- Introduced in Objective-C 2.0
- Syntax: `for (type variable in collection)`
- Supports NSArray, NSSet, NSDictionary

**Further reading:**
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

**Special features:**
- Syntax: `for variable in collection do`
- Muss mit `do` eingeleitet werden

**Further reading:**
- [Free Pascal Documentation - For...in Loop](https://www.freepascal.org/docs-html/ref/refse24.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* For-Each Loop (List.iter für Seiteneffekte) *)
let items = ["Apfel"; "Banane"; "Kirsche"] in
List.iter (fun item -> print_endline item) items
```

**Special features:**
- OCaml has no traditional loops
- Uses `List.iter` for side effects or `List.map` for transformations

**Further reading:**
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

**Special features:**
- Syntax: `for variable = collection`
- Must be closed with `end`
- Cell arrays require special indexing

**Further reading:**
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

**Special features:**
- Syntax: `for variable in collection`
- Unterstützt alle iterierbaren Typen

**Further reading:**
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

**Special features:**
- Syntax: `for variable (@array)` or `foreach variable (@array)`
- `for` and `foreach` are synonymous

**Further reading:**
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

**Special features:**
- Syntax: `foreach ($collection as $variable)`
- Also supports `foreach ($array as $key => $value)` for associative arrays

**Further reading:**
- [PHP Documentation - foreach](https://www.php.net/manual/en/control-structures.foreach.php)

</TabItem>
<TabItem value="purescript" label="PureScript">

```haskell
-- For-Each Loop (for_ für Seiteneffekte)
import Control.Monad
items = ["Apfel", "Banane", "Kirsche"]
for_ items \item -> log item
```

**Special features:**
- Verwendet `for_` für Seiteneffekte
- Funktionaler Stil

**Further reading:**
- [PureScript Documentation - Control.Monad](https://pursuit.purescript.org/packages/purescript-control/docs/Control.Monad)

</TabItem>
<TabItem value="python" label="Python">

```python
# For-Each Loop (for...in)
items = ["Apfel", "Banane", "Kirsche"]
for item in items:
    print(item)
```

**Special features:**
- Syntax: `for variable in collection`
- Must be structured with indentation
- Supports all iterable objects

**Further reading:**
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

**Special features:**
- Syntax: `for (variable in collection)`
- Parentheses around the condition are required

**Further reading:**
- [R Documentation - Control Structures](https://www.rdocumentation.org/packages/base/versions/3.6.2/topics/Control)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
;; For-Each Loop (for-each)
(define items '("Apfel" "Banane" "Kirsche"))
(for-each displayln items)
```

**Special features:**
- Verwendet `for-each` für Seiteneffekte
- Funktionaler Stil

**Further reading:**
- [Racket Documentation - for-each](https://docs.racket-lang.org/reference/pairs.html#%28def._%28%28lib._racket%2Fprivate%2Flist..rkt%29._for-each%29%29)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- For-Each über List.walk (Fold)
items = ["Apfel", "Banane", "Kirsche"]
result = List.walk items "" \acc, item ->
    Str.concat acc item
```

**Special features:**
- Uses `List.walk` (Fold) for iterative processing
- `List.walk` takes list, initial value and function
- Functional style instead of imperative loops

**Further reading:**
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

**Special features:**
- Syntax: `for variable in collection`
- Must be closed with `end`
- Also supports `items.each { |item| ... }` syntax

**Further reading:**
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

**Special features:**
- Syntax: `for variable in collection`
- Supports all types that implement `IntoIterator`

**Further reading:**
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

**Special features:**
- Syntax: `for (variable <- collection)`
- Also supports `items.foreach { item => ... }` syntax

**Further reading:**
- [Scala Documentation - For Comprehensions](https://docs.scala-lang.org/tour/for-comprehensions.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; For-Each Loop (for-each)
(define items '("Apfel" "Banane" "Kirsche"))
(for-each display items)
(newline)
```

**Special features:**
- Verwendet `for-each` für Seiteneffekte
- Funktionaler Stil

**Further reading:**
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

**Special features:**
- Syntax: `for variable in collection`
- Supports all types that implement `Sequence`

**Further reading:**
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

**Special features:**
- Wurde in ES6 eingeführt
- Syntax: `for (const variable of collection)`
- Unterstützt alle iterierbaren Objekte

**Further reading:**
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

**Special features:**
- Syntax: `for variable in collection`
- Unterstützt alle iterierbaren Typen

**Further reading:**
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

**Special features:**
- Syntax: `For Each variable In collection`
- Must be closed with `Next`

**Further reading:**
- [Microsoft VB.NET Documentation - For Each...Next Statement](https://learn.microsoft.com/en-us/dotnet/visual-basic/language-reference/statements/for-each-next-statement)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* For-Each Loop (Do) *)
items = {"Apfel", "Banane", "Kirsche"};
Do[Print[item], {item, items}]
```

**Special features:**
- Uses `Do` with iterator syntax
- Function syntax with curly braces

**Further reading:**
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

**Special features:**
- Syntax: `for (collection) |variable|`
- Supports all iterable types

**Further reading:**
- [Zig Documentation - For](https://ziglang.org/documentation/0.11.0/#For)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// For-In loops (since Delphi 2005)
var
  numbers: array[0..4] of Integer = (10, 20, 30, 40, 50);
  n: Integer;
  ch: Char;
  s: string;
begin
  // Iterate over array
  for n in numbers do
    WriteLn(n);

  // Iterate over string
  s := 'Hallo';
  for ch in s do
    WriteLn(ch);
end;
```

**Special features:**
- `for`/`in`/`do` syntax since Delphi 2005
- Works with Arrays, Strings, Sets, Collections
- Custom iterators via `GetEnumerator`

**Further reading:**
- [Delphi Documentation - For-In Statements](https://docwiki.embarcadero.com/RADStudio/en/For_Statements#For-in_Statements)

</TabItem>
</Tabs>


## 6.2.6. Range-based For Loops

For loops that iterate over numeric ranges without explicit index management. Provide a compact syntax for iterating over sequential value ranges.

### Languages {#sprachen}

<Tabs availableTabs={['carbon', 'cpp', 'crystal', 'groovy', 'julia', 'kotlin', 'lean4', 'lua', 'matlab', 'mojo', 'nim', 'odin', 'perl', 'php', 'python', 'r', 'ruby', 'rust', 'scala', 'swift', 'v', 'zig']} yellowTabs={['csharp', 'haxe', 'java']} orangeTabs={['dart', 'go', 'javascript', 'typescript']}>
<TabItem value="carbon" label="Carbon">

```cpp
// Range-based For Loop
for (var i: i32 in 0..10) {
    Print(i);
}
```

**Special features:**
- Experimental language, syntax may still change
- Uses `..` for exclusive ranges

**Further reading:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Range-based For Loop (since C++11)
for (int i : {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}) {
    std::cout << i << std::endl;
}

// With std::ranges (since C++20)
#include <ranges>
for (int i : std::views::iota(0, 10)) {
    std::cout << i << std::endl;
}
```

**Special features:**
- Since C++11: Range-based for over containers
- Since C++20: `std::ranges::views::iota` for numeric ranges

**Further reading:**
- [cppreference.com - Range-based for loop](https://en.cppreference.com/w/cpp/language/range-for)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Range-based For Loop
(0...10).each do |i|
  puts i
end
```

**Special features:**
- Uses `...` for exclusive ranges
- Uses `..` for inclusive ranges
- Must be called with `each`

**Further reading:**
- [Crystal Documentation - Ranges](https://crystal-lang.org/reference/1.11/syntax_and_semantics/literals/range.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Range-based For Loop (since C# 8.0 with System.Range)
for (int i = 0; i < 10; i++) {
    Console.WriteLine(i);
}

// With Ranges (since C# 8.0)
var range = 0..10;
var array = new int[10];
for (int i = range.Start.Value; i < range.End.Value; i++) {
    Console.WriteLine(i);
}
```

**Special features:**
- C# has no direct range-based for loop
- Since C# 8.0: `System.Range` available for array slicing
- Traditional for loop is used

**Further reading:**
- [Microsoft C# Documentation - Indices and ranges](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/member-access-operators#range-operator-)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Range-based For Loop
for (var i in Iterable.generate(10, (i) => i)) {
  print(i);
}
```

**Special features:**
- Dart has no direct range syntax
- Uses `Iterable.generate` for numeric ranges

**Further reading:**
- [Dart Language Tour - For loops](https://dart.dev/guides/language/language-tour#for-loops)

</TabItem>
<TabItem value="go" label="Go">

```go
// Range-based For Loop
for i := range make([]int, 10) {
    fmt.Println(i)
}
```

**Special features:**
- Go has no direct range syntax for numbers
- Uses `range` over slice with `make`

**Further reading:**
- [Go Documentation - For statements](https://go.dev/ref/spec#For_statements)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Range-based For Loop
for (i in 0..<10) {
    println i
}
```

**Special features:**
- Uses `..<` for exclusive ranges
- Uses `..` for inclusive ranges

**Further reading:**
- [Groovy Documentation - Ranges](https://groovy-lang.org/syntax.html#_ranges)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Range-based For Loop
for (i in 0...10) {
    trace(i); // 0 to 9
}
```

**Special features:**
- Uses `...` (three dots) for exclusive end ranges
- `0...10` iterates from 0 to 9 (10 is excluded)
- No operator for inclusive ranges

**Further reading:**
- [Haxe Documentation - For](https://haxe.org/manual/expression-for.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Range-based For Loop (since Java 8 with IntStream)
// Requires: import java.util.stream.IntStream;
IntStream.range(0, 10).forEach(i -> System.out.println(i));
```

**Special features:**
- Java has no direct range syntax
- Uses `IntStream.range` for numeric ranges (since Java 8)
- `IntStream.rangeClosed` for inclusive upper bound

**Further reading:**
- [Oracle Java Documentation - IntStream](https://docs.oracle.com/javase/8/docs/api/java/util/stream/IntStream.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Range-based For Loop (with Array.from)
for (const i of Array.from({length: 10}, (_, i) => i)) {
    console.log(i);
}
```

**Special features:**
- JavaScript has no direct range syntax
- Uses `Array.from` with generator function

**Further reading:**
- [MDN Web Docs - Array.from](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Range-based For Loop
for i in 0:9
    println(i)
end
```

**Special features:**
- Uses `:` for ranges
- Syntax: `start:end` (inclusive)

**Further reading:**
- [Julia Documentation - Ranges](https://docs.julialang.org/en/v1/manual/arrays/#Ranges)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Range-based For Loop
for (i in 0 until 10) {
    println(i)
}
```

**Special features:**
- Uses `until` for exclusive ranges
- Uses `..` for inclusive ranges

**Further reading:**
- [Kotlin Documentation - Ranges](https://kotlinlang.org/docs/ranges.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Range-based For Loop
#eval show IO Unit from do
  for i in [0:10] do
    IO.println i

-- Range-based For Loop with step
#eval show IO Unit from do
  for i in [0:10:2] do
    IO.println i  -- 0, 2, 4, 6, 8
```

**Special features:**
- Uses `[start:end]` for exclusive ranges (range syntax)
- Optional third parameter for step size: `[start:end:step]`
- `for` loops in Lean 4 are syntactic sugar for `ForIn` instances
- Ranges do not create a complete list, but iterate lazily

**Further reading:**
- [Lean 4 Documentation - For loop](https://lean-lang.org/lean4/doc/control.html#for-loop)
- [Lean 4 Documentation - Ranges](https://lean-lang.org/lean4/doc/array.html#ranges)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Range-based For Loop (with numeric for)
for i = 0, 9 do
    print(i)
end
```

**Special features:**
- Uses numeric for loop: `for i = start, end`
- Supports optional increment: `for i = start, end, step`

**Further reading:**
- [Lua Documentation - For Statement](https://www.lua.org/manual/5.4/manual.html#3.3.5)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# Range-based For Loop
for i in range(10):
    print(i)
```

**Special features:**
- Python-like syntax
- Uses `range(start, end)` or `range(end)`

**Further reading:**
- [Mojo Documentation - Control Flow](https://docs.modular.com/mojo/manual/control-flow/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Range-based For Loop
for i in 0..<10:
    echo i
```

**Special features:**
- Uses `..<` for exclusive ranges
- Uses `..` for inclusive ranges

**Further reading:**
- [Nim Documentation - For Statement](https://nim-lang.org/docs/manual.html#statements-and-expressions-for-statement)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Range-based For Loop
for i in 0..<10 {
    fmt.println(i)
}
```

**Special features:**
- Uses `..<` for exclusive ranges
- Uses `..` for inclusive ranges

**Further reading:**
- [Odin Documentation - For Statements](https://odin-lang.org/docs/overview/#for-statements)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Range-based For Loop (with .. operator)
for my $i (0..9) {
    print "$i\n";
}
```

**Special features:**
- Uses `..` for ranges
- Creates list of values

**Further reading:**
- [Perl Documentation - Range Operator](https://perldoc.perl.org/perlop#Range-Operators)

</TabItem>
<TabItem value="php" label="PHP">

```php
// Range-based For Loop (with range())
foreach (range(0, 9) as $i) {
    echo $i . "\n";
}
```

**Special features:**
- Uses `range()` function
- Creates array of values

**Further reading:**
- [PHP Documentation - range](https://www.php.net/manual/en/function.range.php)

</TabItem>
<TabItem value="python" label="Python">

```python
# Range-based For Loop
for i in range(10):
    print(i)
```

**Special features:**
- Uses `range(start, end)` or `range(end)`
- `range` is exclusive (end is not included)

**Further reading:**
- [Python Documentation - range](https://docs.python.org/3/library/stdtypes.html#range)

</TabItem>
<TabItem value="r" label="R">

```r
# Range-based For Loop
for (i in 0:9) {
    print(i)
}
```

**Special features:**
- Uses `:` for ranges
- Syntax: `start:end` (inclusive)

**Further reading:**
- [R Documentation - Colon Operator](https://www.rdocumentation.org/packages/base/versions/3.6.2/topics/colon)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Range-based For Loop
(0...10).each do |i|
    puts i
end
```

**Special features:**
- Uses `...` for exclusive ranges
- Uses `..` for inclusive ranges
- Must be called with `each`

**Further reading:**
- [Ruby Documentation - Ranges](https://docs.ruby-lang.org/en/3.2/syntax/literals_rdoc.html#label-Ranges)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Range-based For Loop
for i in 0..10 {
    println!("{}", i);
}
```

**Special features:**
- Uses `..` for exclusive ranges
- Uses `..=` for inclusive ranges

**Further reading:**
- [Rust Documentation - Ranges](https://doc.rust-lang.org/std/ops/struct.Range.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Range-based For Loop
for (i <- 0 until 10) {
    println(i)
}
```

**Special features:**
- Uses `until` for exclusive ranges
- Uses `to` for inclusive ranges

**Further reading:**
- [Scala Documentation - Ranges](https://www.scala-lang.org/api/current/scala/collection/immutable/Range.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Range-based For Loop
for i in 0..<10 {
    print(i)
}
```

**Special features:**
- Uses `..<` for exclusive ranges
- Uses `...` for inclusive ranges

**Further reading:**
- [Swift Documentation - Ranges](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/controlflow/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Range-based For Loop (with Array.from)
for (const i of Array.from({length: 10}, (_, i) => i)) {
    console.log(i);
}
```

**Special features:**
- TypeScript has no direct range syntax
- Uses `Array.from` with generator function

**Further reading:**
- [TypeScript Handbook - Iteration](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html)

</TabItem>
<TabItem value="v" label="V">

```v
// Range-based For Loop
for i in 0..10 {
    println(i)
}
```

**Special features:**
- Uses `..` for ranges
- Syntax: `start..end` (exclusive)

**Further reading:**
- [V Documentation - Control Flow](https://github.com/vlang/v/blob/master/doc/docs.md#control-flow)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Range-based For Loop
for (0..10) |i| {
    std.debug.print("{}\n", .{i});
}
```

**Special features:**
- Uses `..` for exclusive ranges
- Syntax: `for (start..end) |variable|`

**Further reading:**
- [Zig Documentation - For](https://ziglang.org/documentation/0.11.0/#For)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% Range-based For Loop
for i = 1:10
    disp(i)
end

% With step size
for i = 0:0.5:5
    disp(i)
end
```

**Special features:**
- Syntax: `for variable = start:end` or `for variable = start:step:end`
- Range-based by default with colon operator
- Must be terminated with `end`

**Further reading:**
- [MATLAB Documentation - for](https://www.mathworks.com/help/matlab/ref/for.html)

</TabItem>
</Tabs>


## 6.2.7. Do Loops (Fortran-style)

Loops with explicit loop variable, start value, end value, and optional increment. Typical for Fortran and similar languages that enable numeric iterations with explicit variable control.

### Languages {#sprachen}

<Tabs availableTabs={['fortran', 'matlab', 'octave']}>
<TabItem value="fortran" label="Fortran">

```fortran
! Do Loop (Fortran-style)
integer :: i
do i = 1, 10
    print *, i
end do

! With increment
do i = 1, 10, 2
    print *, i
end do
```

**Special features:**
- Syntax: `do variable = start, end [, increment]`
- Must be terminated with `end do`
- Increment is optional (default: 1)

**Further reading:**
- [Fortran Standard - DO Statement](https://gcc.gnu.org/onlinedocs/gfortran/DO-statement.html)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% Do Loop (For-Loop with explicit variable control)
for i = 1:10
    disp(i)
end

% With increment
for i = 1:2:10
    disp(i)
end
```

**Special features:**
- MATLAB uses `for` with range syntax
- Syntax: `for variable = start:increment:end`
- Must be terminated with `end`

**Further reading:**
- [MATLAB Documentation - for](https://www.mathworks.com/help/matlab/ref/for.html)

</TabItem>
<TabItem value="octave" label="Octave">

```matlab
% Do Loop (For-Loop with explicit variable control)
for i = 1:10
    disp(i)
endfor

% With increment
for i = 1:2:10
    disp(i)
endfor
```

**Special features:**
- Octave uses `for` with range syntax
- Syntax: `for variable = start:increment:end`
- Must be terminated with `endfor`

**Further reading:**
- [GNU Octave Documentation - The for Statement](https://octave.org/doc/v8.1.0/The-for-Statement.html)

</TabItem>
</Tabs>


## 6.2.8. Comprehensions (List, Dict, Set)

Compact syntax for creating lists, dictionaries, and sets through transformation and filtering of existing collections. Enables expressing complex operations in a single, readable line.

### Languages {#sprachen}

<Tabs availableTabs={['clojure', 'common-lisp', 'elixir', 'erlang', 'fsharp', 'haskell', 'idris', 'julia', 'nim', 'prolog', 'python', 'racket', 'scala', 'scheme', 'wolfram-language']}>
<TabItem value="clojure" label="Clojure">

```clojure
;; List Comprehension (for)
(def numbers [1, 2, 3, 4, 5])
(def squared (for [n numbers] (* n n)))

;; With condition
(def evens (for [n numbers :when (even? n)] n))
```

**Special features:**
- Uses `for` with bindings
- Supports `:when` for filtering
- Supports `:let` for local bindings

**Further reading:**
- [Clojure Documentation - for](https://clojure.org/reference/special_forms#for)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; List Comprehension (loop)
(loop for n in '(1 2 3 4 5)
      collect (* n n))

;; With condition
(loop for n in '(1 2 3 4 5)
      when (evenp n)
      collect n)
```

**Special features:**
- Uses `loop` with `collect`
- Supports `when` for filtering

**Further reading:**
- [Common Lisp HyperSpec - loop](http://www.lispworks.com/documentation/HyperSpec/Body/m_loop.htm)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# List Comprehension (for)
numbers = [1, 2, 3, 4, 5]
squared = for n <- numbers, do: n * n

# With condition
evens = for n <- numbers, rem(n, 2) == 0, do: n
```

**Special features:**
- Syntax: `for variable <- collection, condition, do: expression`
- Supports multiple generators and conditions

**Further reading:**
- [Elixir Documentation - Comprehensions](https://hexdocs.pm/elixir/Kernel.SpecialForms.html#for/1)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% List Comprehension
Numbers = [1, 2, 3, 4, 5],
Squared = [N * N || N <- Numbers].

% With condition
Evens = [N || N <- Numbers, N rem 2 =:= 0].
```

**Special features:**
- Syntax: `[Expression || Generator, Condition]`
- Supports multiple generators and conditions

**Further reading:**
- [Erlang Documentation - List Comprehensions](https://www.erlang.org/doc/programming_examples/list_comprehensions.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// List Comprehension (List Comprehension)
let numbers = [1; 2; 3; 4; 5]
let squared = [for n in numbers -> n * n]

// With condition
let evens = [for n in numbers do if n % 2 = 0 then yield n]
```

**Special features:**
- Syntax: `[for variable in collection -> expression]`
- Supports `if...then yield` for filtering

**Further reading:**
- [F# Documentation - List Expressions](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/lists#list-expressions)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- List Comprehension
numbers = [1, 2, 3, 4, 5]
squared = [n * n | n <- numbers]

-- With condition
evens = [n | n <- numbers, even n]
```

**Special features:**
- Syntax: `[expression | generator, condition]`
- Supports multiple generators and conditions

**Further reading:**
- [Haskell Documentation - List Comprehensions](https://www.haskell.org/onlinereport/haskell2010/haskellch3.html#x8-420003.11)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- List Comprehension
numbers : List Int
numbers = [1, 2, 3, 4, 5]
squared : List Int
squared = [n * n | n <- numbers]

-- With condition
evens : List Int
evens = [n | n <- numbers, mod n 2 == 0]
```

**Special features:**
- Syntax: `[expression | generator, condition]`
- Supports multiple generators and conditions

**Further reading:**
- [Idris Documentation - List Comprehensions](https://idris2.readthedocs.io/en/latest/tutorial/starting.html#list-comprehensions)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# List Comprehension
numbers = [1, 2, 3, 4, 5]
squared = [n * n for n in numbers]

# With condition
evens = [n for n in numbers if n % 2 == 0]
```

**Special features:**
- Syntax: `[expression for variable in collection if condition]`
- Supports multiple generators and conditions

**Further reading:**
- [Julia Documentation - Comprehensions](https://docs.julialang.org/en/v1/manual/arrays/#Comprehensions)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% List Comprehension with findall/3
:- Numbers = [1, 2, 3, 4, 5],
   findall(S, (member(N, Numbers), S is N * N), Squared),
   write(Squared).  % [1, 4, 9, 16, 25]

% With condition (filtering)
:- Numbers = [1, 2, 3, 4, 5],
   findall(N, (member(N, Numbers), N mod 2 =:= 0), Evens),
   write(Evens).  % [2, 4]

% Nested comprehension
:- findall(X-Y, (between(1, 3, X), between(1, 3, Y)), Pairs),
   write(Pairs).  % [1-1, 1-2, 1-3, 2-1, ...]
```

**Special features:**
- `findall(Template, Goal, List)` collects all solutions – equivalent to a list comprehension
- `bagof/3` like `findall/3`, but fails if no solution exists
- `setof/3` like `bagof/3`, but removes duplicates and sorts the result
- Filtering is done through additional conditions in the Goal

**Further reading:**
- [SWI-Prolog – findall/3](https://www.swi-prolog.org/pldoc/doc_for?object=findall/3)

</TabItem>
<TabItem value="python" label="Python">

```python
# List Comprehension
numbers = [1, 2, 3, 4, 5]
squared = [n * n for n in numbers]

# With condition
evens = [n for n in numbers if n % 2 == 0]

# Dict Comprehension
squared_dict = {n: n * n for n in numbers}

# Set Comprehension
squared_set = {n * n for n in numbers}
```

**Special features:**
- Syntax: `[expression for variable in collection if condition]`
- Supports List, Dict and Set Comprehensions
- Supports multiple generators and conditions

**Further reading:**
- [Python Documentation - List Comprehensions](https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
;; List Comprehension (for/list)
(define numbers '(1 2 3 4 5))
(define squared (for/list ([n numbers]) (* n n)))

;; With condition
(define evens (for/list ([n numbers] #:when (even? n)) n))
```

**Special features:**
- Uses `for/list` with bindings
- Supports `#:when` for filtering

**Further reading:**
- [Racket Documentation - for](https://docs.racket-lang.org/reference/for.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// List Comprehension (for comprehension)
val numbers = List(1, 2, 3, 4, 5)
val squared = for (n <- numbers) yield n * n

// With condition
val evens = for (n <- numbers if n % 2 == 0) yield n
```

**Special features:**
- Syntax: `for (generator if condition) yield expression`
- Supports multiple generators and conditions
- Must use `yield`

**Further reading:**
- [Scala Documentation - For Comprehensions](https://docs.scala-lang.org/tour/for-comprehensions.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; List Comprehension (SRFI-42)
(import (srfi 42))
(define numbers '(1 2 3 4 5))
(define squared (list-ec (: n numbers) (* n n)))

;; With condition
(define evens (list-ec (: n numbers) (if (even? n)) n))
```

**Special features:**
- Uses SRFI-42 (Eager Comprehensions)
- Syntax: `(list-ec (: variable collection) expression)`
- Supports `if` for filtering

**Further reading:**
- [SRFI-42 Documentation](https://srfi.schemers.org/srfi-42/srfi-42.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Requires: import sugar
# List Comprehensions with collect
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

**Special features:**
- `collect` macro from the `sugar` module (since Nim 1.4)
- Supports filtering with `if`
- Creates `seq` types

**Further reading:**
- [Nim Documentation - Sugar Module](https://nim-lang.org/docs/sugar.html#collect.m%2Cuntyped)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* List Comprehension with Table *)
squares = Table[i^2, {i, 1, 10}]

(* With condition *)
evenSquares = Select[Table[i^2, {i, 1, 10}], EvenQ]

(* Nested *)
pairs = Flatten[Table[{i, j}, {i, 1, 3}, {j, 1, 3}], 1]
```

**Special features:**
- `Table[]` is the equivalent to list comprehensions
- `Select[]` for filter conditions
- Supports multidimensional iterators

**Further reading:**
- [Wolfram Language Documentation - Table](https://reference.wolfram.com/language/ref/Table.html)

</TabItem>
</Tabs>


## 6.2.9. For-Comprehensions (Scala-style)

Monadic for-comprehensions that enable combining and transforming multiple monads. Provide a declarative syntax for sequential operations over monads such as Option, List, Future, etc.

### Languages {#sprachen}

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

**Special features:**
- Uses Computation Expressions
- Syntax: `[for variable in collection do ... yield expression]`
- Supports multiple generators

**Further reading:**
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

**Special features:**
- Uses `do` notation for monads
- Syntax: `do { variable <- monad; ... return expression }`
- Supports `guard` for filtering

**Further reading:**
- [Haskell Documentation - do notation](https://www.haskell.org/onlinereport/haskell2010/haskellch3.html#x8-380003.14)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- For-Comprehension (do notation with List monad)
def result : List (Nat × Nat) := do
  let x ← [1, 2, 3, 4, 5]
  let y ← [1, 2, 3, 4, 5]
  guard (x + y = 5)
  return (x, y)

#eval result  -- [(1, 4), (2, 3), (3, 2), (4, 1)]
```

**Special features:**
- Lean 4 has native `do` notation for monadic operations
- `List` has a `Monad` and `Alternative` instance
- `guard` filters results based on a condition (requires `Alternative`)
- `←` binds a value from the monad (corresponds to Haskell's `<-`)

**Further reading:**
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

**Special features:**
- Syntax: `for { generator; condition } yield expression`
- Supports multiple generators and conditions
- Works with all monads (Option, List, Future, etc.)

**Further reading:**
- [Scala Documentation - For Comprehensions](https://docs.scala-lang.org/tour/for-comprehensions.html)

</TabItem>
</Tabs>


## 6.2.10. Loop Control (break, continue, labels)

Mechanisms for controlling loop flow. Enable terminating loops early (break), skipping iterations (continue), or controlling nested loops specifically (labels).

### Languages {#sprachen}

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

**Special features:**
- Uses `exit` for break
- Uses `next` for continue
- Supports labels for nested loops

**Further reading:**
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

// Exit nested loops with goto
for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 3; j++) {
        if (i == 2 && j == 2) {
            goto done;
        }
    }
}
done: ;
```

**Special features:**
- `break` terminates the innermost loop
- `continue` skips to the next iteration
- No labeled break/continue like in Java – `goto` is used as a replacement

**Further reading:**
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

**Special features:**
- Experimental language, syntax may still change
- C++-like syntax

**Further reading:**
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

// Labels (with goto)
outer: for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 3; j++) {
        if (i == 2 && j == 2) {
            goto outer;
        }
    }
}
```

**Special features:**
- `break` terminates the inner loop
- `continue` skips to the next iteration
- Labels only possible with `goto`

**Further reading:**
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

**Special features:**
- Uses `break` for break
- Uses `next` for continue
- Labels are not directly supported

**Further reading:**
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

**Special features:**
- `break` terminates the inner loop
- `continue` skips to the next iteration
- Labels are not directly supported

**Further reading:**
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

// Labels (with goto)
outer: for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 3; j++) {
        if (i == 2 && j == 2) {
            goto outer;
        }
    }
}
```

**Special features:**
- `break` terminates the inner loop
- `continue` skips to the next iteration
- Labels only possible with `goto`

**Further reading:**
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

**Special features:**
- `break` terminates the inner loop
- `continue` skips to the next iteration
- Supports labels: `break label` and `continue label`

**Further reading:**
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

**Special features:**
- `break` terminates the inner loop
- `continue` skips to the next iteration
- Supports labels: `break label` and `continue label`

**Further reading:**
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

**Special features:**
- `break` terminates the inner loop
- `continue` skips to the next iteration
- Supports labels: `break label` and `continue label`

**Further reading:**
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

**Special features:**
- `break` terminates the inner loop
- `continue` skips to the next iteration
- Labels are not directly supported

**Further reading:**
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

**Special features:**
- `break` terminates the inner loop
- `continue` skips to the next iteration
- Supports labels: `break label` and `continue label`

**Further reading:**
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

**Special features:**
- `break` terminates the inner loop
- `continue` skips to the next iteration
- Supports labels: `break label` and `continue label`

**Further reading:**
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

**Special features:**
- `break` terminates the inner loop
- `continue` skips to the next iteration
- Labels are not directly supported

**Further reading:**
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

**Special features:**
- `break` terminates the inner loop
- `continue` skips to the next iteration
- Supports labels: `break@label` and `continue@label`

**Further reading:**
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

-- Continue (not directly supported, emulated with goto)
for i = 1, 10 do
    if i % 2 == 0 then
        goto continue
    end
    print(i)
    ::continue::
end

-- Labels (with goto)
for i = 1, 3 do
    for j = 1, 3 do
        if i == 2 and j == 2 then
            goto outer
        end
    end
    ::outer::
end
```

**Special features:**
- `break` terminates the inner loop
- `continue` is emulated with `goto` (since Lua 5.2)
- Labels possible with `goto`

**Further reading:**
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

**Special features:**
- `break` terminates the inner loop
- `continue` skips to the next iteration
- Labels are not directly supported

**Further reading:**
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

**Special features:**
- Python-like syntax
- `break` terminates the inner loop
- `continue` skips to the next iteration

**Further reading:**
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

**Special features:**
- `break` terminates the inner loop
- `continue` skips to the next iteration
- Labels are not directly supported

**Further reading:**
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

// Labels (with goto)
outer: for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 3; j++) {
        if (i == 2 && j == 2) {
            goto outer;
        }
    }
}
```

**Special features:**
- `break` terminates the inner loop
- `continue` skips to the next iteration
- Labels only possible with `goto`

**Further reading:**
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

// Labels (with goto)
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

**Special features:**
- Uses `Break` for break
- Uses `Continue` for continue
- Labels possible with `goto`

**Further reading:**
- [Free Pascal Documentation - Break and Continue](https://www.freepascal.org/docs-html/ref/refse25.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Break and Continue are not directly supported *)
(* Emulated with exceptions or recursive functions *)
let rec loop i =
    if i > 10 then ()
    else if i > 5 then ()
    else (
        print_int i;
        print_newline ();
        loop (i + 1)
    )
```

**Special features:**
- OCaml has no `break` or `continue` statements
- Typically emulated with recursive functions or exceptions

**Further reading:**
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

**Special features:**
- `break` terminates the inner loop
- `continue` skips to the next iteration
- Labels are not directly supported

**Further reading:**
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

**Special features:**
- `break` terminates the inner loop
- `continue` skips to the next iteration
- Supports labels: `break label` and `continue label`

**Further reading:**
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

**Special features:**
- Uses `last` for break
- Uses `next` for continue
- Supports labels: `last label` and `next label`

**Further reading:**
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
        if ($j == 1) break 2; // Breaks both loops
    }
}
?>
```

**Special features:**
- `break` terminates the inner loop
- `continue` skips to the next iteration
- `break N` and `continue N` for multi-level break/continue (N = number of loop levels)
- No named labels like in Java or Kotlin

**Further reading:**
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

**Special features:**
- `break` terminates the inner loop
- `continue` skips to the next iteration
- Labels are not directly supported

**Further reading:**
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

**Special features:**
- `break` terminates the inner loop
- Uses `next` for continue
- Labels are not directly supported

**Further reading:**
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

**Special features:**
- `break` terminates the inner loop
- Uses `next` for continue
- Labels are not directly supported

**Further reading:**
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

**Special features:**
- `break` terminates the inner loop
- `continue` skips to the next iteration
- Supports labels: `break 'label` and `continue 'label`

**Further reading:**
- [Rust Documentation - Loops](https://doc.rust-lang.org/book/ch03-05-control-flow.html#repetition-with-loops)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Break (since Scala 2.8, not recommended)
import scala.util.control.Breaks._
breakable {
    for (i <- 1 to 10) {
        if (i > 5) {
            break
        }
        println(i)
    }
}

// Continue (emulated with if)
for (i <- 1 to 10) {
    if (i % 2 != 0) {
        println(i)
    }
}
```

**Special features:**
- `break` is used with `breakable` block (not recommended)
- `continue` is typically emulated with `if`
- Labels are not directly supported

**Further reading:**
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

**Special features:**
- `break` terminates the inner loop
- `continue` skips to the next iteration
- Supports labels: `break label` and `continue label`

**Further reading:**
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

**Special features:**
- `break` terminates the inner loop
- `continue` skips to the next iteration
- Supports labels: `break label` and `continue label`

**Further reading:**
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

**Special features:**
- Uses `Exit For` for break
- Uses `Continue For` for continue
- Labels are not directly supported

**Further reading:**
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

**Special features:**
- `break` terminates the inner loop
- `continue` skips to the next iteration
- Supports labels: `break label` and `continue label`

**Further reading:**
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

// While with break value
const result = while (true) {
    // ...
    break 42;
} else 0;
```

**Special features:**
- `break` terminates the inner loop
- `continue` skips to the next iteration
- Supports labels: `break :label` and `continue :label`
- `break` can return a value (loop as expression)

**Further reading:**
- [Zig Documentation - For](https://ziglang.org/documentation/master/#for)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Break (return from loop)
(loop for i from 0
      when (>= i 5) return i
      do (format t "~a~%" i))

;; Return-from (named block)
(block outer
  (loop for i from 0 to 10
        do (when (= i 5) (return-from outer i))))

;; Loop-finish
(loop for i from 0 to 10
      when (= i 5) do (loop-finish)
      collect i)  ; (0 1 2 3 4)
```

**Special features:**
- `return` breaks out of the next surrounding `nil` block (e.g. `loop`)
- `return-from` breaks out of a named block
- `loop-finish` terminates a `loop` loop normally (collect results remain)
- No direct `continue` - instead conditional logic or `tagbody`/`go`

**Further reading:**
- [Common Lisp HyperSpec - return-from](http://www.lispworks.com/documentation/HyperSpec/Body/s_ret_fr.htm)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! EXIT (break) and CYCLE (continue)
integer :: i

do i = 1, 20
    if (i == 5) cycle   ! Skip 5
    if (i == 15) exit   ! Terminate at 15
    print *, i
end do

! Named loops with labels
outer: do i = 1, 10
    inner: do j = 1, 10
        if (j == 5) cycle inner  ! Skip inner
        if (i == 3) exit outer   ! Terminate outer
    end do inner
end do outer
```

**Special features:**
- `EXIT` corresponds to `break` (exits the loop)
- `CYCLE` corresponds to `continue` (jumps to next iteration)
- Named loops enable targeted EXIT/CYCLE on outer loops

**Further reading:**
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
      Continue;  // Next iteration
    if i = 7 then
      Break;     // Terminate loop
    WriteLn(i);
  end;
  // Output: 0, 1, 2, 4, 5, 6
end;
```

**Special features:**
- `Break` terminates the current loop
- `Continue` jumps to the next iteration
- No labels for Break/Continue (only innermost loop)

**Further reading:**
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

**Special features:**
- `Break[]` terminates the innermost loop
- `Continue[]` jumps to the next loop iteration
- No label system for nested loops

**Further reading:**
- [Wolfram Language Documentation - Break](https://reference.wolfram.com/language/ref/Break.html)

</TabItem>
</Tabs>
## 6.2.11. Loop-Else Clauses

A loop-else clause is a code block that executes when a loop terminates normally — i.e., without premature exit via `break`. This enables an elegant distinction between complete and aborted iteration without flag variables.

### Languages {#sprachen}

<Tabs availableTabs={['python']}>
<TabItem value="python" label="Python">

```python
# for...else: else block executes only without break
items = ["Apple", "Banana", "Cherry"]

for item in items:
    if item == "Mango":
        print(f"{item} found!")
        break
else:
    print("Mango not found")

# while...else: works analogously
i = 0
while i < len(items):
    if items[i] == "Mango":
        print(f"{items[i]} found!")
        break
    i += 1
else:
    print("Mango not in the list")
```

**Special features:**
- Both `for...else` and `while...else` are supported
- The `else` block is **not** executed if the loop is exited via `break`
- The `else` block **is** executed if the loop terminates normally — even with empty iteration (e.g., `for x in []`)
- Python is the only widely used language with native loop-else

**Further reading:**
- [Python Documentation - More Control Flow Tools](https://docs.python.org/3/tutorial/controlflow.html#break-and-continue-statements-and-else-clauses-on-loops)

</TabItem>
</Tabs>

## 6.2.12. Labeled Blocks

Labeled blocks allow nested loops or blocks to be given a name and exited from a specific level via `break` or `continue` — not just from the innermost loop.

### Languages {#sprachen}

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

**Special features:**
- Labels appear before the `loop` statement and end with a colon
- `exit Label_Name;` exits the named loop
- The label name must be repeated at `end loop`
- Also supports `exit Label_Name when Condition;`

**Further reading:**
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

**Special features:**
- `block` creates a named block
- `return-from` exits the named block with an optional return value
- Can also be used without loops for arbitrary code blocks
- `tagbody`/`go` additionally provides jump labels within blocks

**Further reading:**
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

**Special features:**
- Labels appear directly before the `foreach`/`for` statement
- Both `break label` and `continue label` are supported
- `continue label` jumps to the next iteration of the named loop

**Further reading:**
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

**Special features:**
- Labels appear before the loop statement with a colon
- Both `break label` and `continue label` are supported

**Further reading:**
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

**Special features:**
- Named `DO` loops use a label before `do`
- `exit label` exits the named loop
- `cycle label` corresponds to `continue` and jumps to the next iteration
- The label name must be repeated at `end do`

**Further reading:**
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

**Special features:**
- Labels appear on their own line with a colon
- Both `break Label` and `continue Label` are supported
- Convention: label names begin with a capital letter

**Further reading:**
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

**Special features:**
- Syntax identical to Java
- Both `break label` and `continue label` are supported

**Further reading:**
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

**Special features:**
- Labels appear before the loop statement with a colon
- Both `break label` and `continue label` are supported
- Labels can also appear before blocks (not just loops)

**Further reading:**
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

**Special features:**
- Labels appear before the statement with a colon
- Both `break label` and `continue label` are supported
- Labels can also appear before arbitrary blocks (not just loops)

**Further reading:**
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

**Special features:**
- Labels are defined with `@` at the loop statement (`label@`)
- Referenced with `break@label` and `continue@label`
- Also usable for `return` from lambda expressions (`return@label`)

**Further reading:**
- [Kotlin Documentation - Returns and Jumps](https://kotlinlang.org/docs/returns.html#break-and-continue-labels)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Exit from nested loops with goto (since Lua 5.2)
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

**Special features:**
- Lua has no native labeled loops
- `goto` and labels (`::label::`) can be used as a workaround (since Lua 5.2)
- Labels have block scope and cannot jump into nested functions
- No `continue` statement available

**Further reading:**
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

**Special features:**
- `block name:` creates a named block
- `break name` exits the named block
- Can be used for arbitrary code blocks, not just loops
- No `continue` with label — only `break`

**Further reading:**
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

**Special features:**
- Labels appear directly before the `for` statement
- Both `break label` and `continue label` are supported

**Further reading:**
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

**Special features:**
- Labels appear before the loop statement in uppercase (convention)
- `last LABEL` corresponds to `break` for the named loop
- `next LABEL` corresponds to `continue` for the named loop
- `redo LABEL` restarts the current iteration of the named loop

**Further reading:**
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

**Special features:**
- PHP uses **numeric levels** instead of named labels
- `break 2` exits 2 loop levels, `break 3` three levels, etc.
- `continue 2` jumps to the next iteration of the outer loop
- Standard `break`/`continue` without a number only affects the innermost loop

**Further reading:**
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

**Special features:**
- Ruby has no native labeled loops
- `catch`/`throw` with symbols provides a workaround for multi-level exit
- `throw(:symbol)` jumps to the next enclosing `catch(:symbol)`
- Not to be confused with exception handling (`raise`/`rescue`)

**Further reading:**
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

**Special features:**
- Labels use lifetime syntax with an apostrophe (`'label`)
- Both `break 'label` and `continue 'label` are supported
- Labeled blocks can also be used without loops and return a value (since Rust 1.65)

**Further reading:**
- [Rust Reference - Loop Labels](https://doc.rust-lang.org/reference/expressions/loop-expr.html#loop-labels)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Required: import scala.util.boundary, boundary.break (since Scala 3.3)
val groups = List(List(1, 2, 3), List(4, 5, 6), List(7, 8, 9))
val target = 5

boundary:
  for row <- groups do
    for val <- row do
      if val == target then break()
```

**Special features:**
- Scala has no native labeled loops
- Since Scala 3.3, `boundary`/`break` from the standard library provides a structured alternative
- `break()` exits the next enclosing `boundary` block
- Boundaries can also return values: `boundary[Int]: ... break(42)`

**Further reading:**
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

**Special features:**
- Labels appear before the loop statement with a colon
- Both `break label` and `continue label` are supported
- Labels can also appear before `if`, `switch`, and `do` statements

**Further reading:**
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

**Special features:**
- Identical behavior to JavaScript
- Both `break label` and `continue label` are supported
- Labels can also appear before arbitrary blocks

**Further reading:**
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

**Special features:**
- Labels appear before the `for`/`while` statement with a colon
- `break :label` and `continue :label` use the colon syntax
- Labeled blocks can also return values: `const x = blk: { break :blk value; };`

**Further reading:**
- [Zig Language Reference - Labeled Blocks](https://ziglang.org/documentation/master/#Labeled-Blocks)

</TabItem>
</Tabs>

