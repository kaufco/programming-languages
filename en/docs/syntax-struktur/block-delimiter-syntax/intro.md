---
slug: /syntax-struktur/block-delimiter-syntax
title: 2.2. Block-Delimiter-Syntax
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 2.2. Block-Delimiter-Syntax

Syntax for block delimiters.

## 2.2.1. Curly-Brace Syntax (C-Style: `{ }`)

Use of curly braces `{ }` to delimit code blocks.

### Languages {#languages}

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

**Special features:**
- Curly braces are used for functions, control structures, and compound statements

**Further reading:**
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

**Special features:**
- Curly braces are used for methods, control structures, and namespaces

**Further reading:**
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

**Special features:**
- Curly braces are used for functions, control structures, and namespaces

**Further reading:**
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

**Special features:**
- Carbon uses C++-like curly braces for code blocks

**Further reading:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
(defn example []
  (let [x 10]
    (when (> x 5)
      (println "x ist größer als 5"))))
```

**Special features:**
- Clojure uses parentheses `()` for all code structures, not curly braces

**Further reading:**
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

**Special features:**
- Crystal uses `end` for block delimitation, not curly braces

**Further reading:**
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

**Special features:**
- Curly braces are used for functions and control structures

**Further reading:**
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

**Special features:**
- Curly braces are used for functions and control structures

**Further reading:**
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

**Special features:**
- Curly braces are used for functions and control structures
- Opening curly brace must be on the same line as the statement

**Further reading:**
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

**Special features:**
- Curly braces are used for methods and control structures

**Further reading:**
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

**Special features:**
- Curly braces are used for functions and control structures

**Further reading:**
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

**Special features:**
- Curly braces are used for methods, control structures, and classes

**Further reading:**
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

**Special features:**
- Curly braces are used for functions, control structures, and object literals

**Further reading:**
- [MDN Web Docs - Statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
fun example()
  val x = 10
  if x > 5 then
    println("x ist größer als 5")

// Alternative with explicit curly braces
fun example-braces() {
  val x = 10;
  if x > 5 then {
    println("x ist größer als 5")
  }
}
```

**Special features:**
- Curly braces for function bodies and blocks are optional thanks to layout rules (indentation)
- When curly braces are used, semicolons can be used as separators
- Koka supports both brace-based and indentation-based syntax

**Further reading:**
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

**Special features:**
- Curly braces are used for functions and control structures

**Further reading:**
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

**Special features:**
- Curly braces are used for methods and control structures

**Further reading:**
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

**Special features:**
- Curly braces are used for functions and control structures

**Further reading:**
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

**Special features:**
- Curly braces are used for functions, control structures, and modules

**Further reading:**
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

**Special features:**
- Curly braces are used for methods and control structures

**Further reading:**
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

**Special features:**
- Curly braces are used for functions and control structures

**Further reading:**
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

**Special features:**
- Curly braces are used for functions, control structures, and object literals

**Further reading:**
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

**Special features:**
- Curly braces are used for functions and control structures

**Further reading:**
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

**Special features:**
- Uses `{ }` for function bodies and blocks
- Combination with `pub fn`, `case`, `fn` etc.
- No semicolon required at end of line

**Further reading:**
- [Gleam Documentation](https://gleam.run/documentation/)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Curly-Brace Syntax for blocks
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

**Special features:**
- Curly braces `{}` are MANDATORY for all control structures
- `{}` are also required for single-line statements (unlike in C)
- `{}` are also used for hash references and anonymous blocks

**Further reading:**
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

**Special features:**
- Curly braces for blocks
- No parentheses around conditions (unlike C)
- Indentation is convention, not syntactically relevant

**Further reading:**
- [V Documentation](https://github.com/vlang/v/blob/master/doc/docs.md)

</TabItem>
</Tabs>


## 2.2.2. begin...end Syntax (Pascal-Style: `begin ... end`)

Use of `begin` and `end` to delimit code blocks.

### Languages {#languages}

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

**Special features:**
- Ada uses `begin` and `end` for procedures, functions, and compound statements
- Various `end` variants such as `end if`, `end loop`, etc.

**Further reading:**
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

**Special features:**
- Eiffel uses `do` and `end` for routines
- `if` blocks end with `end`

**Further reading:**
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

**Special features:**
- Object Pascal uses `begin` and `end` for procedures, functions, and compound statements
- `if` blocks can optionally use `begin`/`end`

**Further reading:**
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

**Special features:**
- Ruby uses `end` for methods, control structures, and classes
- No explicit `begin` for methods, only `end`

**Further reading:**
- [Ruby Documentation - Syntax](https://docs.ruby-lang.org/en/master/syntax/methods_rdoc.html)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Functions
function greet(name)
    println("Hallo, $name!")
end

# if blocks
if x > 0
    println("positiv")
elseif x < 0
    println("negativ")
else
    println("null")
end

# Loops
for i in 1:5
    println(i)
end

# begin...end block
result = begin
    a = 1
    b = 2
    a + b
end
```

**Special features:**
- All blocks end with `end` (function, if, for, while, try, begin, module, struct, etc.)
- `begin...end` for explicit blocks
- No curly braces or indentation as delimiters

**Further reading:**
- [Julia Documentation - Control Flow](https://docs.julialang.org/en/v1/manual/control-flow/)

</TabItem>
</Tabs>


## 2.2.3. Indentation-based Syntax (Python, Haskell, etc.)

Use of indentation to delimit code blocks instead of explicit delimiters.

### Languages {#languages}

<Tabs availableTabs={['haskell', 'idris', 'koka', 'lean4', 'nim', 'python', 'roc', 'scala']}>
<TabItem value="haskell" label="Haskell">

```haskell
example = do
  let x = 10
  if x > 5
    then putStrLn "x ist größer als 5"
    else return ()
```

**Special features:**
- Haskell uses indentation for block delimitation in `do` blocks
- Indentation is semantically relevant

**Further reading:**
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

**Special features:**
- Koka uses layout rules similar to Haskell
- Indentation determines the block structure, curly braces are optional
- Semicolons can separate expressions on the same line

**Further reading:**
- [Koka Language Documentation - Basics](https://koka-lang.github.io/koka/doc/book.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```haskell
-- Indentation determines the block structure
def example : IO Unit := do
  let x := 10
  if x > 5 then
    IO.println "x ist größer als 5"

-- where clause with indentation
def compute (n : Nat) : Nat :=
  helper n
  where
    helper (x : Nat) : Nat := x * x + 1
```

**Special features:**
- Lean 4 uses indentation for block delimitation in `do` blocks, `where` clauses, and `let` expressions
- Indentation is semantically relevant (off-side rule like Haskell)
- Curly braces are not used for block delimiters

**Further reading:**
- [Lean 4 Documentation](https://lean-lang.org/lean4/doc/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
proc example() =
  var x = 10
  if x > 5:
    echo "x ist größer als 5"
```

**Special features:**
- Nim uses indentation for block delimitation
- Indentation is semantically relevant

**Further reading:**
- [Nim Documentation - Indentation](https://nim-lang.org/docs/manual.html#lexical-analysis-indentation)

</TabItem>
<TabItem value="python" label="Python">

```python
def example():
    x = 10
    if x > 5:
        print("x ist größer als 5")
```

**Special features:**
- Python uses indentation for block delimitation
- Indentation is semantically relevant and part of the syntax
- Typically 4 spaces or 1 tab

**Further reading:**
- [Python Documentation - Indentation](https://docs.python.org/3/reference/lexical_analysis.html#indentation)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Indentation defines blocks
example : Int -> String
example n =
    let result = n * 2
        label = "Ergebnis"
    in label ++ ": " ++ show result

-- where clause with indentation
compute : Int -> Int
compute n = helper n
  where
    helper : Int -> Int
    helper x = x * x + 1
```

**Special features:**
- Indentation defines code blocks (like Haskell)
- `let`, `where`, `do`, and `case` use indentation
- Alternatively, curly braces and semicolons can be used

**Further reading:**
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

**Special features:**
- Indentation determines the block structure
- No curly braces or begin/end
- Similar to Haskell/Elm

**Further reading:**
- [Roc Documentation](https://www.roc-lang.org/tutorial)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Indentation-based Syntax (since Scala 3)
def calculate(x: Int, y: Int): Int =
    val sum = x + y
    val product = x * y
    sum + product // Last expression is the return value

// Classes with indentation
class Person(val name: String, val age: Int):
    def greet(): String =
        s"Hallo, ich bin $name"

    def isAdult: Boolean =
        age >= 18
```

**Special features:**
- Optional since Scala 3: Curly braces and indentation can be mixed
- `:` at end of line introduces an indented block
- Supported for classes, traits, methods, If/Else, Match/Case
- Compiler flag `-no-indent` disables the indentation syntax

**Further reading:**
- [Scala 3 Documentation - Indentation](https://docs.scala-lang.org/scala3/reference/other-new-features/indentation.html)

</TabItem>
</Tabs>

