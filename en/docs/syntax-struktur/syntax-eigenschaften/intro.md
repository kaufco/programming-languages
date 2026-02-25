---
slug: /syntax-struktur/syntax-eigenschaften
title: 2.3. Syntax Properties
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 2.3. Syntax Properties

Properties of syntax.

## 2.3.1. Case Sensitivity

Distinction between uppercase and lowercase letters in identifiers (variable names, function names, etc.).

### Languages {#sprachen}

<Tabs availableTabs={['ada', 'c', 'csharp', 'cpp', 'carbon', 'clojure', 'common-lisp', 'crystal', 'd', 'dart', 'eiffel', 'elixir', 'elm', 'erlang', 'fsharp', 'fortran', 'gleam', 'go', 'groovy', 'haskell', 'haxe', 'idris', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'lua', 'matlab', 'mercury', 'mojo', 'nim', 'objective-c', 'object-pascal', 'ocaml', 'octave', 'odin', 'perl', 'php', 'prolog', 'purescript', 'python', 'r', 'racket', 'roc', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'vbnet', 'v', 'wolfram-language', 'zig']}>
<TabItem value="ada" label="Ada">

```ada
X : Integer := 10;
x : Integer := 20;  -- Error: x is the same as X
```

**Special features:**
- Ada is case-insensitive
- `X` and `x` are treated as the same identifier

**Further reading:**
- [Ada Reference Manual - Identifiers](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-2-3.html)

</TabItem>
<TabItem value="c" label="C">

```c
int x = 10;
int X = 20;  // X is different from x
```

**Special features:**
- C is case-sensitive
- `x` and `X` are different identifiers

**Further reading:**
- [C Standard - Identifiers](https://en.cppreference.com/w/c/language/identifier)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
int x = 10;
int X = 20;  // X is different from x
```

**Special features:**
- C# is case-sensitive
- `x` and `X` are different identifiers

**Further reading:**
- [C# Documentation - Identifiers](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/lexical-structure#identifiers)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
int x = 10;
int X = 20;  // X is different from x
```

**Special features:**
- C++ is case-sensitive
- `x` and `X` are different identifiers

**Further reading:**
- [C++ Standard - Identifiers](https://en.cppreference.com/w/cpp/language/identifiers)

</TabItem>
<TabItem value="carbon" label="Carbon">

```carbon
var x: i32 = 10;
var X: i32 = 20;  // X is different from x
```

**Special features:**
- Carbon is case-sensitive
- `x` and `X` are different identifiers

**Further reading:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
(def x 10)
(def X 20)  ; X is different from x
```

**Special features:**
- Clojure is case-sensitive
- `x` and `X` are different identifiers

**Further reading:**
- [Clojure Documentation - Symbols](https://clojure.org/reference/reader#_symbols)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
(defvar x 10)
(defvar X 20)  ; WARNING: overwrites x, as reader converts to uppercase!
;; Both create the symbol X

;; Case-sensitive only with escape characters
(defvar |lowercase| 10)
(defvar |LOWERCASE| 20)  ; Different from |lowercase|
```

**Special features:**
- The CL reader converts unescaped symbol names to uppercase by default
- Practically, CL is therefore case-insensitive: `foo`, `FOO`, and `Foo` are the same symbol
- Case sensitivity only achievable via pipe escape (`|symbol|`) or backslash escape
- The symbol system itself is case-sensitive, but the reader normalizes

**Further reading:**
- [Common Lisp HyperSpec - Reader Algorithm](http://www.lispworks.com/documentation/HyperSpec/Body/02_d.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
x = 10
X = 20  # X is different from x
```

**Special features:**
- Crystal is case-sensitive
- `x` and `X` are different identifiers

**Further reading:**
- [Crystal Documentation - Syntax](https://crystal-lang.org/reference/syntax_and_semantics/)

</TabItem>
<TabItem value="d" label="D">

```d
int x = 10;
int X = 20;  // X is different from x
```

**Special features:**
- D is case-sensitive
- `x` and `X` are different identifiers

**Further reading:**
- [D Language Specification - Identifiers](https://dlang.org/spec/lex.html#identifier)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
int x = 10;
int X = 20;  // X is different from x
```

**Special features:**
- Dart is case-sensitive
- `x` and `X` are different identifiers

**Further reading:**
- [Dart Language Specification - Identifiers](https://dart.dev/guides/language/spec)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
x: INTEGER
X: INTEGER  -- Error: X is the same as x
```

**Special features:**
- Eiffel is case-insensitive
- `x` and `X` are treated as the same identifier

**Further reading:**
- [Eiffel Language Documentation](https://www.eiffel.org/doc/eiffel/Language)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Case sensitivity
x = 10
x_value = 20    # Variables start with lowercase
_temp = 30      # Variables can start with _

# Atoms are case-sensitive
:hello != :Hello  # true

# Modules start with uppercase
# IO, String, Enum are different modules
```

**Special features:**
- Elixir is case-sensitive
- Variable names must start with lowercase or `_`
- Identifiers with uppercase are aliases (module names)
- Atoms are case-sensitive: `:hello` and `:Hello` are different

**Further reading:**
- [Elixir Documentation - Naming Conventions](https://hexdocs.pm/elixir/naming-conventions.html)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Case sensitivity
name = "Alice"
-- Name = "Alice"  -- Error: variables must start with lowercase

-- Uppercase for types and constructors
type Color = Red | Green | Blue
```

**Special features:**
- Elm is case-sensitive
- Variables and functions must start with lowercase
- Types, modules, and constructors must start with uppercase
- This convention is enforced by the compiler (not just style)

**Further reading:**
- [Elm Documentation - Syntax](https://guide.elm-lang.org/core_language.html)

</TabItem>
<TabItem value="erlang" label="Erlang">
```erlang
X = 10.         % Variable (uppercase)
hello.           % Atom (lowercase)
Hello = world.   % Variable Hello bound to atom world
```

**Special features:**
- Erlang is case-sensitive
- Variables start with uppercase or `_`
- Atoms start with lowercase
- `X` (variable) and `x` (atom) are fundamentally different concepts

**Further reading:**
- [Erlang Documentation - Data Types](https://www.erlang.org/doc/reference_manual/data_types.html)
</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
let x = 10
let X = 20  // X is different from x
```

**Special features:**
- F# is case-sensitive
- `x` and `X` are different identifiers

**Further reading:**
- [F# Documentation - Identifiers](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/identifiers)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
INTEGER :: x
INTEGER :: X  ! Error: X is the same as x
```

**Special features:**
- Fortran is case-insensitive
- `x` and `X` are treated as the same identifier

**Further reading:**
- [Fortran Standard - Names](https://gcc.gnu.org/onlinedocs/gfortran/Names.html)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// Case sensitivity
let count = 10
let count_total = 20  // Different from count

// Uppercase for types and constructors
type Color {
  Red    // Constructor (uppercase)
  Blue   // Constructor (uppercase)
}
```

**Special features:**
- Gleam is case-sensitive
- Variables and functions: `snake_case` (lowercase)
- Types and constructors: `PascalCase` (uppercase)
- Uppercase as variable name is not allowed

**Further reading:**
- [Gleam Documentation](https://gleam.run/documentation/)

</TabItem>
<TabItem value="go" label="Go">

```go
x := 10
X := 20  // X is different from x
```

**Special features:**
- Go is case-sensitive
- `x` and `X` are different identifiers
- Uppercase at the beginning makes identifiers public (exported)

**Further reading:**
- [Go Language Specification - Identifiers](https://go.dev/ref/spec#Identifiers)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
def x = 10
def X = 20  // X is different from x
```

**Special features:**
- Groovy is case-sensitive
- `x` and `X` are different identifiers

**Further reading:**
- [Groovy Documentation - Syntax](https://groovy-lang.org/syntax.html)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
x = 10
X = 20  -- X is different from x
```

**Special features:**
- Haskell is case-sensitive
- `x` and `X` are different identifiers
- Convention: types start with uppercase, values with lowercase

**Further reading:**
- [Haskell Report - Identifiers](https://www.haskell.org/onlinereport/haskell2010/haskellch2.html#x7-160002.4)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
var x = 10;
var X = 20;  // X is different from x
```

**Special features:**
- Haxe is case-sensitive
- `x` and `X` are different identifiers

**Further reading:**
- [Haxe Documentation - Syntax](https://haxe.org/manual/expression.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
myValue : Int
myValue = 10
myvalue : Int
myvalue = 20  -- myValue and myvalue are different
```

**Special features:**
- Idris is case-sensitive
- Identifiers with uppercase are reserved for types and constructors
- Variable names must start with lowercase

**Further reading:**
- [Idris 2 Documentation](https://idris2.readthedocs.io/en/latest/tutorial/starting.html)

</TabItem>
<TabItem value="java" label="Java">

```java
int x = 10;
int X = 20;  // X is different from x
```

**Special features:**
- Java is case-sensitive
- `x` and `X` are different identifiers

**Further reading:**
- [Java Language Specification - Identifiers](https://docs.oracle.com/javase/specs/jls/se17/html/jls-3.html#jls-3.8)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
let x = 10;
let X = 20;  // X is different from x
```

**Special features:**
- JavaScript is case-sensitive
- `x` and `X` are different identifiers

**Further reading:**
- [MDN Web Docs - Identifiers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#variables)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
x = 10
X = 20  # X is different from x
```

**Special features:**
- Julia is case-sensitive
- `x` and `X` are different identifiers

**Further reading:**
- [Julia Documentation - Variables](https://docs.julialang.org/en/v1/manual/variables/)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
val x = 10
val X = 20  // X is different from x
```

**Special features:**
- Koka is case-sensitive
- `x` and `X` are different identifiers
- Convention: types and constructors start with uppercase, values with lowercase

**Further reading:**
- [Koka Language Documentation](https://koka-lang.github.io/koka/doc/book.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
val x = 10
val X = 20  // X is different from x
```

**Special features:**
- Kotlin is case-sensitive
- `x` and `X` are different identifiers

**Further reading:**
- [Kotlin Documentation - Identifiers](https://kotlinlang.org/docs/grammar.html#identifier)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```haskell
def x := 10
def X := 20  -- X is different from x
```

**Special features:**
- Lean 4 is case-sensitive
- `x` and `X` are different identifiers
- Convention: types and namespaces start with uppercase, values with lowercase

**Further reading:**
- [Lean 4 Documentation](https://lean-lang.org/lean4/doc/)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
x = 10
X = 20  -- X is different from x
```

**Special features:**
- Lua is case-sensitive
- `x` and `X` are different identifiers

**Further reading:**
- [Lua Documentation - Identifiers](https://www.lua.org/manual/5.4/manual.html#3.1)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
x = 10;
X = 20;  % X is a separate variable (not the same as x)
disp(x); % 10
disp(X); % 20
```

**Special features:**
- MATLAB is case-sensitive
- `x` and `X` are different variables
- Function names are also case-sensitive

**Further reading:**
- [MATLAB Documentation - Variable Names](https://www.mathworks.com/help/matlab/matlab_prog/variable-names.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Variables start with uppercase or _
X = 10.
Name = "Alice".
_Temp = 42.

% Atoms start with lowercase
% hello and Hello are fundamentally different concepts
```

**Special features:**
- Mercury is case-sensitive
- Variables start with uppercase or `_`
- Atoms and functors start with lowercase
- `X` (variable) and `x` (atom) are fundamentally different concepts (like in Prolog)

**Further reading:**
- [Mercury Language Reference - Syntax](https://www.mercurylang.org/information/doc-release/mercury_ref/Syntax.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
x = 10
X = 20  # X is different from x
```

**Special features:**
- Mojo is case-sensitive
- `x` and `X` are different identifiers

**Further reading:**
- [Mojo Documentation](https://docs.modular.com/mojo/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
var x = 10
var X = 20  # X is different from x
```

**Special features:**
- Nim is case-sensitive, but underscore-insensitive
- `x` and `X` are different identifiers
- `my_var` and `myVar` are treated as the same identifier

**Further reading:**
- [Nim Documentation - Identifiers](https://nim-lang.org/docs/manual.html#lexical-analysis-identifiers)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
int x = 10;
int X = 20;  // X is different from x
```

**Special features:**
- Objective-C is case-sensitive
- `x` and `X` are different identifiers

**Further reading:**
- [Objective-C Documentation](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
var
  x: Integer;
  X: Integer;  // Error: X is the same as x
```

**Special features:**
- Object Pascal is case-insensitive
- `x` and `X` are treated as the same identifier

**Further reading:**
- [Delphi Documentation - Identifiers](https://docwiki.embarcadero.com/RADStudio/Alexandria/en/Identifiers)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
let x = 10
let X = 20  (* X is different from x *)
```

**Special features:**
- OCaml is case-sensitive
- `x` and `X` are different identifiers

**Further reading:**
- [OCaml Documentation - Identifiers](https://v2.ocaml.org/manual/lex.html#identifiers)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
x = 10;
X = 20;  % X is different from x
```

**Special features:**
- Octave is case-sensitive
- `x` and `X` are different identifiers

**Further reading:**
- [GNU Octave Documentation - Variables](https://octave.org/doc/v8.1.0/Variables.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
x: i32 : 10
X: i32 : 20  // X is different from x
```

**Special features:**
- Odin is case-sensitive
- `x` and `X` are different identifiers

**Further reading:**
- [Odin Documentation - Identifiers](https://odin-lang.org/docs/overview/#identifiers)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
my $x = 10;
my $X = 20;  # X is different from x
```

**Special features:**
- Perl is case-sensitive
- `x` and `X` are different identifiers

**Further reading:**
- [Perl Documentation - Variables](https://perldoc.perl.org/perlvar)

</TabItem>
<TabItem value="php" label="PHP">

```php
$x = 10;
$X = 20;  // X is different from x
```

**Special features:**
- PHP is case-sensitive for variables
- `x` and `X` are different identifiers
- Functions and classes are case-insensitive

**Further reading:**
- [PHP Documentation - Variables](https://www.php.net/manual/en/language.variables.basics.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Variables start with uppercase or _
X = 10.
Name = "Alice".
_temp = 42.

% Atoms start with lowercase
hello.
parent(tom, bob).
```

**Special features:**
- Prolog is case-sensitive
- Variables start with uppercase or `_`
- Atoms start with lowercase
- `X` (variable) and `x` (atom) are fundamentally different concepts

**Further reading:**
- [SWI-Prolog Documentation - Syntax](https://www.swi-prolog.org/pldoc/man?section=syntax)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
x = 10
X = 20  -- X is different from x
```

**Special features:**
- PureScript is case-sensitive
- `x` and `X` are different identifiers

**Further reading:**
- [PureScript Documentation](https://www.purescript.org/documentation/)

</TabItem>
<TabItem value="python" label="Python">

```python
x = 10
X = 20  # X is different from x
```

**Special features:**
- Python is case-sensitive
- `x` and `X` are different identifiers

**Further reading:**
- [Python Documentation - Identifiers](https://docs.python.org/3/reference/lexical_analysis.html#identifiers)

</TabItem>
<TabItem value="r" label="R">

```r
x <- 10
X <- 20  # X is different from x
```

**Special features:**
- R is case-sensitive
- `x` and `X` are different identifiers

**Further reading:**
- [R Documentation - Objects](https://cran.r-project.org/doc/manuals/r-release/R-lang.html#Objects)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
(define x 10)
(define X 20)  ; X is different from x
```

**Special features:**
- Racket is case-sensitive
- `x` and `X` are different identifiers

**Further reading:**
- [Racket Documentation - Identifiers](https://docs.racket-lang.org/reference/syntax.html#%28part._.Identifiers%29)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
x = 10
X = 20  -- X is different from x
```

**Special features:**
- Roc is case-sensitive
- `x` and `X` are different identifiers

**Further reading:**
- [Roc Documentation](https://www.roc-lang.org/)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
x = 10
X = 20  # X is different from x
```

**Special features:**
- Ruby is case-sensitive
- `x` and `X` are different identifiers
- Convention: constants start with uppercase

**Further reading:**
- [Ruby Documentation - Variables](https://docs.ruby-lang.org/en/master/syntax/variables_rdoc.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
let x = 10;
let X = 20;  // X is different from x
```

**Special features:**
- Rust is case-sensitive
- `x` and `X` are different identifiers
- Convention: types start with uppercase

**Further reading:**
- [Rust Book - Variables](https://doc.rust-lang.org/book/ch03-01-variables-and-mutability.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
val x = 10
val X = 20  // X is different from x
```

**Special features:**
- Scala is case-sensitive
- `x` and `X` are different identifiers

**Further reading:**
- [Scala Documentation - Identifiers](https://docs.scala-lang.org/tour/basics.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
(define x 10)
(define X 20)  ; X is different from x
```

**Special features:**
- Scheme is case-sensitive
- `x` and `X` are different identifiers

**Further reading:**
- [Scheme R7RS - Identifiers](https://small.r7rs.org/wiki/Identifiers/)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
let x = 10
let X = 20  // X is different from x
```

**Special features:**
- Swift is case-sensitive
- `x` and `X` are different identifiers

**Further reading:**
- [Swift Documentation - Identifiers](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/lexicalstructure/#Identifiers)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
let x = 10;
let X = 20;  // X is different from x
```

**Special features:**
- TypeScript is case-sensitive
- `x` and `X` are different identifiers

**Further reading:**
- [TypeScript Handbook - Basic Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
Dim x As Integer = 10
Dim X As Integer = 20  ' Error: X is the same as x
```

**Special features:**
- VB.NET is case-insensitive
- `x` and `X` are treated as the same identifier

**Further reading:**
- [VB.NET Documentation - Declared Element Names](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/declared-elements/declared-element-names)

</TabItem>
<TabItem value="v" label="V">

```v
x := 10
X := 20  // X is different from x
```

**Special features:**
- V is case-sensitive
- `x` and `X` are different identifiers

**Further reading:**
- [V Documentation - Variables](https://github.com/vlang/v/blob/master/doc/docs.md#variables)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
x = 10
X = 20  (* X is different from x *)
```

**Special features:**
- Wolfram Language is case-sensitive
- `x` and `X` are different identifiers

**Further reading:**
- [Wolfram Language Documentation - Symbols](https://reference.wolfram.com/language/guide/Symbols.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
const x: i32 = 10;
const X: i32 = 20;  // X is different from x
```

**Special features:**
- Zig is case-sensitive
- `x` and `X` are different identifiers

**Further reading:**
- [Zig Documentation - Identifiers](https://ziglang.org/documentation/master/#Identifiers)

</TabItem>
</Tabs>


## 2.3.2. Semantically Significant Indentation

Indentation is part of the syntax and determines the block structure of the code.

### Languages {#sprachen}

<Tabs availableTabs={['haskell', 'idris', 'koka', 'lean4', 'nim', 'python', 'roc', 'scala']}>
<TabItem value="haskell" label="Haskell">

```haskell
example = do
  let x = 10
  if x > 5
    then putStrLn "x is greater than 5"
    else return ()
```

**Special features:**
- Indentation is semantically significant in `do` blocks
- Layout rule: code at the same indentation level belongs to the same block

**Further reading:**
- [Haskell Report - Layout](https://www.haskell.org/onlinereport/haskell2010/haskellch2.html#x7-170002.7)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
fun example()
  val x = 10
  if x > 5 then
    println("x is greater than 5")
```

**Special features:**
- Koka uses layout rules similar to Haskell (off-side rule)
- Indentation determines the block structure
- Curly braces and semicolons can be used alternatively

**Further reading:**
- [Koka Language Documentation - Basics](https://koka-lang.github.io/koka/doc/book.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```haskell
-- Indentation determines block structure
def example : IO Unit := do
  let x := 10
  if x > 5 then
    IO.println "x is greater than 5"
  else
    pure ()
```

**Special features:**
- Indentation is semantically significant in `do` blocks, `where` clauses, `let` and `match` expressions
- Layout rule: code at the same indentation level belongs to the same block (off-side rule like Haskell)

**Further reading:**
- [Lean 4 Documentation](https://lean-lang.org/lean4/doc/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
proc example() =
  var x = 10
  if x > 5:
    echo "x is greater than 5"
```

**Special features:**
- Indentation is semantically significant
- Determines the block structure

**Further reading:**
- [Nim Documentation - Indentation](https://nim-lang.org/docs/manual.html#lexical-analysis-indentation)

</TabItem>
<TabItem value="python" label="Python">

```python
def example():
    x = 10
    if x > 5:
        print("x is greater than 5")
```

**Special features:**
- Indentation is semantically significant and part of the syntax
- Determines the block structure
- Typically 4 spaces or 1 tab

**Further reading:**
- [Python Documentation - Indentation](https://docs.python.org/3/reference/lexical_analysis.html#indentation)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Indentation determines membership
add : Int -> Int -> Int
add a b = a + b  -- Indented = belongs to definition

-- where block via indentation
example : Int -> Int
example n = result
  where
    result : Int
    result = n * 2 + offset
    offset : Int
    offset = 10
```

**Special features:**
- Indentation defines code blocks (off-side rule like Haskell)
- `where`, `let`, `do` and `case` use indentation
- Alternatively: curly braces `{ }` and semicolons `;`

**Further reading:**
- [Idris 2 Documentation](https://idris2.readthedocs.io/en/latest/tutorial/starting.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Semantically significant indentation
result =
    x = 10
    y = 20
    x + y
```

**Special features:**
- Indentation is syntactically significant
- Determines the membership of expressions to blocks

**Further reading:**
- [Roc Documentation](https://www.roc-lang.org/tutorial)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Semantically significant indentation (since Scala 3)
val result =
    if true then
        val x = 10
        x * 2
    else
        val y = 5
        y * 3

// Match with indentation
val description = result match
    case n if n > 10 => "Large"
    case n if n > 0 => "Small"
    case _ => "Zero or negative"
```

**Special features:**
- Indentation defines block boundaries (like in Python/Haskell)
- Optional: curly braces are still supported
- `then` instead of curly braces after `if`
- `do` instead of curly braces after `while`/`for`
- Available since Scala 3.0

**Further reading:**
- [Scala 3 Documentation - Indentation](https://docs.scala-lang.org/scala3/reference/other-new-features/indentation.html)

</TabItem>
</Tabs>


## 2.3.3. Expression vs. Statement Syntax

Distinction between expressions (which return values) and statements (which perform actions).

### Languages {#sprachen}

<Tabs availableTabs={['c', 'clojure', 'common-lisp', 'cpp', 'csharp', 'elm', 'gleam', 'go', 'idris', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'mercury', 'nim', 'prolog', 'python', 'racket', 'roc', 'rust', 'scala', 'swift', 'typescript', 'wolfram-language']}>
<TabItem value="c" label="C">

```c
int x = 10;
if (x > 5) {  // if is a statement
    printf("x is greater than 5\n");
}
int y = x > 5 ? 10 : 20;  // Ternary is an expression
```

**Special features:**
- C distinguishes between expressions and statements
- `if` is a statement, not an expression
- Ternary operator `?:` is an expression

**Further reading:**
- [C Standard - Statements](https://en.cppreference.com/w/c/language/statements)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
int x = 10;
if (x > 5) {  // if is a statement
    Console.WriteLine("x is greater than 5");
}
int y = x > 5 ? 10 : 20;  // Ternary is an expression
```

**Special features:**
- C# distinguishes between expressions and statements
- `if` is a statement, not an expression
- Ternary operator `?:` is an expression

**Further reading:**
- [C# Documentation - Statements](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/statements/)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
int x = 10;
if (x > 5) {  // if is a statement
    std::cout << "x is greater than 5" << std::endl;
}
int y = x > 5 ? 10 : 20;  // Ternary is an expression
```

**Special features:**
- C++ distinguishes between expressions and statements
- `if` is a statement, not an expression
- Ternary operator `?:` is an expression

**Further reading:**
- [C++ Standard - Statements](https://en.cppreference.com/w/cpp/language/statements)

</TabItem>
<TabItem value="go" label="Go">

```go
x := 10
if x > 5 {  // if is a statement
    fmt.Println("x is greater than 5")
}
y := map[bool]int{true: 10, false: 20}[x > 5]  // Workaround for expression
```

**Special features:**
- Go distinguishes between expressions and statements
- `if` is a statement, not an expression
- No ternary operator, but map literals can be used as a workaround

**Further reading:**
- [Go Language Specification - Statements](https://go.dev/ref/spec#Statements)

</TabItem>
<TabItem value="java" label="Java">

```java
int x = 10;
if (x > 5) {  // if is a statement
    System.out.println("x is greater than 5");
}
int y = x > 5 ? 10 : 20;  // Ternary is an expression
```

**Special features:**
- Java distinguishes between expressions and statements
- `if` is a statement, not an expression
- Ternary operator `?:` is an expression

**Further reading:**
- [Java Language Specification - Statements](https://docs.oracle.com/javase/specs/jls/se17/html/jls-14.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
let x = 10;
if (x > 5) {  // if is a statement
    console.log("x is greater than 5");
}
let y = x > 5 ? 10 : 20;  // Ternary is an expression
```

**Special features:**
- JavaScript distinguishes between expressions and statements
- `if` is a statement, not an expression
- Ternary operator `?:` is an expression

**Further reading:**
- [MDN Web Docs - Statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
val x = 10
val result = if x > 5 then "x is greater than 5"
             else "x is not greater than 5"

// match is an expression
val label = match x
  0 -> "Zero"
  _ -> "Other number"
```

**Special features:**
- Koka is fully expression-based
- `if`, `match`, `val`, `fn` are expressions that return values
- The last expression in a block is the return value

**Further reading:**
- [Koka Language Documentation - Basics](https://koka-lang.github.io/koka/doc/book.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
val x = 10
val result = if (x > 5) {  // if is an expression
    "x is greater than 5"
} else {
    "x is not greater than 5"
}
```

**Special features:**
- Kotlin treats `if` as an expression when a value is returned
- `if` can be both a statement and an expression

**Further reading:**
- [Kotlin Documentation - Control Flow](https://kotlinlang.org/docs/control-flow.html#if-expression)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```haskell
-- Everything is an expression
def result : String :=
  if True then "Yes" else "No"

-- match is an expression
def describe (n : Nat) : String :=
  match n with
  | 0 => "Zero"
  | _ => "Other number"

-- let is an expression
def computed : Nat :=
  let x := 10
  let y := 20
  x + y
```

**Special features:**
- Lean 4 is fully expression-based
- `if/then/else`, `match`, `let` are expressions that return values
- The last expression in a block is the return value
- No distinction between statements and expressions

**Further reading:**
- [Lean 4 Documentation](https://lean-lang.org/lean4/doc/)

</TabItem>
<TabItem value="python" label="Python">

```python
x = 10
if x > 5:  # if is a statement
    print("x is greater than 5")
y = 10 if x > 5 else 20  # Ternary is an expression
```

**Special features:**
- Python distinguishes between expressions and statements
- `if` is a statement, not an expression
- Ternary expression `x if condition else y` is an expression

**Further reading:**
- [Python Documentation - Expressions](https://docs.python.org/3/reference/expressions.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
let x = 10;
let result = if x > 5 {  // if is an expression
    "x is greater than 5"
} else {
    "x is not greater than 5"
};
```

**Special features:**
- Rust treats `if` as an expression
- All control structures can be expressions

**Further reading:**
- [Rust Book - Control Flow](https://doc.rust-lang.org/book/ch03-05-control-flow.html#if-expressions)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
val x = 10
val result = if (x > 5) {  // if is an expression
    "x is greater than 5"
} else {
    "x is not greater than 5"
}
```

**Special features:**
- Scala treats `if` as an expression
- Almost everything is an expression in Scala

**Further reading:**
- [Scala Documentation - Expressions](https://docs.scala-lang.org/tour/expressions.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
let x = 10
let result = if x > 5 {  // if is an expression (since Swift 5.9)
    "x is greater than 5"
} else {
    "x is not greater than 5"
}
```

**Special features:**
- Swift supports `if` as an expression since Swift 5.9
- Previously `if` was only a statement

**Further reading:**
- [Swift Documentation - Control Flow](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/controlflow/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
let x = 10;
if (x > 5) {  // if is a statement
    console.log("x is greater than 5");
}
let y = x > 5 ? 10 : 20;  // Ternary is an expression
```

**Special features:**
- TypeScript distinguishes between expressions and statements
- `if` is a statement, not an expression
- Ternary operator `?:` is an expression

**Further reading:**
- [TypeScript Handbook - Control Flow](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Everything is an expression with return value
(def result
  (if (> 5 3)
    "greater"
    "smaller"))  ; "greater"

;; let is an expression
(def value
  (let [x 10
        y 20]
    (+ x y)))  ; 30

;; do returns the last expression
(def side-effect-result
  (do
    (println "Side effect")
    42))  ; 42
```

**Special features:**
- Clojure has no statements, everything is an expression
- `if`, `let`, `do`, `cond` all return a value
- The last expression in a block is the return value
- No explicit `return` needed

**Further reading:**
- [Clojure Documentation - Evaluation](https://clojure.org/reference/evaluation)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Everything is an expression
(defvar result
  (if (> 3 2)
      "greater"
      "smaller"))

;; let returns the last expression
(defvar x (let ((a 10) (b 20))
            (+ a b)))  ; 30

;; progn groups expressions, returns the last one
(defvar y (progn
            (format t "Side effect~%")
            42))  ; 42
```

**Special features:**
- Everything in Common Lisp is an expression (expression-based)
- No distinction between expressions and statements
- Every expression has a return value
- `progn` corresponds to a block that returns the last value

**Further reading:**
- [Common Lisp HyperSpec - Evaluation](http://www.lispworks.com/documentation/HyperSpec/Body/03_a.htm)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Everything is an expression
result =
    if True then "yes" else "no"  -- if is an expression

-- case is an expression
description =
    case 42 of
        0 -> "Zero"
        _ -> "Other number"

-- let is an expression
computed =
    let
        x = 10
        y = 20
    in
    x + y
```

**Special features:**
- Elm is fully expression-based (no statements)
- `if`, `case`, `let` are expressions that return values
- No `return` keyword needed (last expression is the return value)
- No semicolon or statement terminator

**Further reading:**
- [Elm Documentation - Core Language](https://guide.elm-lang.org/core_language.html)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// Everything is an expression
let result = case True {
  True -> "Yes"
  False -> "No"
}

// Function body returns last expression
pub fn max(a: Int, b: Int) -> Int {
  case a > b {
    True -> a
    False -> b
  }
}
```

**Special features:**
- Gleam is fully expression-based
- `case` returns a value
- No `return` keyword needed, last expression is returned

**Further reading:**
- [Gleam Documentation](https://gleam.run/documentation/)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Everything is an expression
result : String
result = if True then "Yes" else "No"

-- case is an expression
value : Int
value = case Just 42 of
    Just n => n
    Nothing => 0

-- let is an expression
computed : Int
computed = let x = 10 in x * 2
```

**Special features:**
- Idris is fully expression-based
- `if`, `case`, `let` are expressions that return values
- No distinction between statements and expressions

**Further reading:**
- [Idris 2 Documentation - Types and Functions](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# if as expression
x = 10
result = if x > 0
    "positive"
else
    "not positive"
end

# begin block as expression
value = begin
    a = 1
    b = 2
    a + b  # Last expression is the return value
end

# Ternary operator
label = x > 0 ? "yes" : "no"
```

**Special features:**
- `if`, `begin`, `try` and other constructs are expressions with return values
- The last expression in a block is the return value
- Functions implicitly return the last expression
- Assignments (`=`) are also expressions

**Further reading:**
- [Julia Documentation - Control Flow](https://docs.julialang.org/en/v1/manual/control-flow/)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Functions are expressions with return values
:- func classify(int) = string.
classify(X) =
    ( if X > 5 then "x is greater than 5"
      else "x is not greater than 5" ).

% if-then-else as expression in functions
:- func abs_value(int) = int.
abs_value(X) = ( if X >= 0 then X else -X ).

% Predicates use goals
:- pred example(io::di, io::uo) is det.
example(!IO) :-
    X = 10,
    ( if X > 5 then
        io.write_string("x is greater than 5\n", !IO)
    else
        io.write_string("x is not greater than 5\n", !IO)
    ).
```

**Special features:**
- Mercury distinguishes between functions (expressions with return values) and predicates (goals)
- `if-then-else` is an expression that returns values in functions
- Function bodies are expressions: `classify(X) = (if ... then ... else ...)`
- Arithmetic expressions are evaluated directly (no `is/2` like in Prolog)

**Further reading:**
- [Mercury Language Reference - Functions](https://www.mercurylang.org/information/doc-release/mercury_ref/Functions.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Expression vs. Statement
# if as expression
let max = if 10 > 5: 10 else: 5

# case as expression
let label = case 42
  of 0..9: "single digit"
  of 10..99: "two digits"
  else: "three digits+"

# block as expression
let result = block:
  var x = 10
  x * 2

echo max     # 10
echo label   # "two digits"
echo result  # 20
```

**Special features:**
- `if`, `case`, `block`, `try` can be used as expressions
- The last expression of a block is the return value
- Nim is primarily statement-based, but many constructs can also be used as expressions

**Further reading:**
- [Nim Documentation - Statements and Expressions](https://nim-lang.org/docs/manual.html#statements-and-expressions)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Everything in Prolog is a Term/Goal — no expression/statement distinction

% If-then-else as goal expression
classify(X, Label) :-
    (X > 0 -> Label = positive ; Label = non_positive).

% Arithmetic expressions are evaluated with is/2
double(X, Result) :-
    Result is X * 2.

% Comma is logical AND, semicolon is logical OR
check(X) :-
    (X > 0, X < 100 ; X =:= 0).
```

**Special features:**
- Prolog has no distinction between expressions and statements — everything is a Term/Goal
- `(Cond -> Then ; Else)` is a goal expression for conditional logic
- Arithmetic expressions are evaluated with `is/2`: `X is 3 + 4`
- Comma `,` is logical AND, semicolon `;` is logical OR

**Further reading:**
- [SWI-Prolog Documentation - Control](https://www.swi-prolog.org/pldoc/man?section=control)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
; Everything is an expression
(define result
  (if (> 5 3)
      "greater"
      "smaller"))

; cond as expression
(define category
  (cond
    [(> 100 50) "large"]
    [(> 50 25) "medium"]
    [else "small"]))

; let as expression
(define sum
  (let ([a 5] [b 10])
    (+ a b)))
```

**Special features:**
- Everything in Racket is an expression (expression-based)
- No distinction between statements and expressions
- `if`, `cond`, `let`, `begin` all return values

**Further reading:**
- [Racket Documentation - Expressions](https://docs.racket-lang.org/guide/intro.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Expression-based: Everything is an expression
result =
    if x > 0 then
        "positive"
    else
        "not positive"

value =
    when color is
        Red -> 1
        Green -> 2
        Blue -> 3
```

**Special features:**
- Everything is an expression (expression-based)
- No statements - the last expression in a block is the return value
- `if/then/else` and `when/is` are expressions

**Further reading:**
- [Roc Documentation](https://www.roc-lang.org/tutorial)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Everything is an expression *)
result = If[True, 42, 0]  (* If is an expression *)
list = Table[i^2, {i, 5}] (* Table is an expression *)
```

**Special features:**
- Wolfram Language is fully expression-based
- Every expression has a value (including If, Do, Module, etc.)
- No distinction between statements and expressions

**Further reading:**
- [Wolfram Language Documentation - Expressions](https://reference.wolfram.com/language/tutorial/Expressions.html)

</TabItem>
</Tabs>


## 2.3.4. Top-Level Statements

Statements can be placed directly at the top level of a program, without being embedded in a function or class.

### Languages {#sprachen}

<Tabs availableTabs={['csharp', 'javascript', 'julia', 'nim', 'prolog', 'python', 'rust', 'swift', 'typescript', 'wolfram-language']} yellowTabs={['groovy']}>
<TabItem value="csharp" label="C#">

```csharp
// Top-Level Statements (since C# 9.0)
using System;

Console.WriteLine("Hello, World!");
int x = 10;
if (x > 5) {
    Console.WriteLine("x is greater than 5");
}
```

**Special features:**
- Top-level statements have been available since C# 9.0
- Only one file per project can have top-level statements

**Further reading:**
- [C# Documentation - Top-Level Statements](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/programming-guide/inside-a-program/top-level-statements)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Top-Level Statements
console.log("Hello, World!");
let x = 10;
if (x > 5) {
    console.log("x is greater than 5");
}
```

**Special features:**
- JavaScript supports top-level statements by default
- Code is executed directly when the script is loaded

**Further reading:**
- [MDN Web Docs - JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Top-Level Statements
println("Hello, World!")
x = 10
if x > 5
    println("x is greater than 5")
end
```

**Special features:**
- Julia supports top-level statements by default
- Code is executed directly when the script is loaded

**Further reading:**
- [Julia Documentation - Introduction](https://docs.julialang.org/en/v1/manual/getting-started/)

</TabItem>
<TabItem value="python" label="Python">

```python
# Top-Level Statements
print("Hello, World!")
x = 10
if x > 5:
    print("x is greater than 5")
```

**Special features:**
- Python supports top-level statements by default
- Code is executed directly when the script is loaded

**Further reading:**
- [Python Documentation - Introduction](https://docs.python.org/3/tutorial/introduction.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Rust requires a main function
fn main() {
    println!("Hello, World!");
    let x = 10;
    if x > 5 {
        println!("x is greater than 5");
    }
}
```

**Special features:**
- Rust requires a `main` function
- Top-level statements are not directly possible

**Further reading:**
- [Rust Book - Hello, World](https://doc.rust-lang.org/book/ch01-02-hello-world.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Top-Level Statements (in Swift Playgrounds or scripts)
print("Hello, World!")
let x = 10
if x > 5 {
    print("x is greater than 5")
}
```

**Special features:**
- Swift supports top-level statements in Playgrounds and scripts
- Regular Swift projects require a `main` function

**Further reading:**
- [Swift Documentation - The Basics](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/thebasics/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Top-Level Statements
console.log("Hello, World!");
let x = 10;
if (x > 5) {
    console.log("x is greater than 5");
}
```

**Special features:**
- TypeScript supports top-level statements by default
- Code is executed directly when the script is loaded

**Further reading:**
- [TypeScript Handbook - Basic Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Top-Level Statements in Groovy Scripts
println "Hello, World!"

def x = 42
def y = x * 2

if (y > 50) {
    println "Large"
}

// Classes can also be defined at top level
class Helper {
    static String greet(String name) { "Hello, $name" }
}

println Helper.greet("World")
```

**Special features:**
- Groovy Scripts allow statements at top level (without class/method)
- Scripts are internally compiled into a class that extends `Script`
- In `.groovy` files with class definitions, no top-level statements are allowed

**Further reading:**
- [Groovy Documentation - Scripts](https://groovy-lang.org/structure.html#_scripts)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Top-Level Statements
echo "Executable directly at top level"

var x = 42
echo x

if x > 10:
  echo "x is greater than 10"

for i in 0..2:
  echo i
```

**Special features:**
- Nim allows statements directly at top level
- No `main` function required
- Top-level code is executed at program start

**Further reading:**
- [Nim Documentation - Modules](https://nim-lang.org/docs/manual.html#modules)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Prolog programs consist of top-level clauses

% Facts
parent(tom, bob).
parent(bob, ann).

% Rules
grandparent(X, Z) :-
    parent(X, Y),
    parent(Y, Z).

% Directive (executed when loading)
:- write('Program loaded'), nl.
```

**Special features:**
- Prolog programs consist exclusively of top-level clauses (facts, rules, directives)
- No `main` function or class wrapper needed
- Directives `:- Goal.` are executed when the file is loaded
- In the REPL, arbitrary queries can be entered directly

**Further reading:**
- [SWI-Prolog Documentation - Program](https://www.swi-prolog.org/pldoc/man?section=program)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Top-Level Statements are executed directly *)
x = 42
Print["Hello, World!"]
f[n_] := n^2
```

**Special features:**
- All expressions can be at top level
- No main function or program structure required
- Interactive evaluation in notebooks

**Further reading:**
- [Wolfram Language Documentation - Programs](https://reference.wolfram.com/language/guide/FunctionsAndPrograms.html)

</TabItem>
</Tabs>


## 2.3.5. Optional Parentheses

Parentheses in function calls can optionally be omitted.

### Languages {#sprachen}

<Tabs availableTabs={['crystal', 'elixir', 'groovy', 'haskell', 'julia', 'kotlin', 'lean4', 'nim', 'ruby', 'scala', 'swift']}>
<TabItem value="crystal" label="Crystal">

```crystal
def greet(name)
  puts "Hello, #{name}"
end

greet "World"  # Parentheses optional
greet("World")  # Parentheses allowed
```

**Special features:**
- Parentheses in function calls are optional
- Recommended for better readability

**Further reading:**
- [Crystal Documentation - Methods](https://crystal-lang.org/reference/syntax_and_semantics/methods.html)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
def greet(name) do
  IO.puts("Hello, #{name}")
end

greet "World"  # Parentheses optional
greet("World")  # Parentheses allowed
```

**Special features:**
- Parentheses in function calls are optional
- Recommended for better readability

**Further reading:**
- [Elixir Documentation - Functions](https://elixir-lang.org/getting-started/modules-and-functions.html)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
greet name = putStrLn ("Hello, " ++ name)

greet "World"  -- Parentheses optional
greet("World")  -- Parentheses allowed
```

**Special features:**
- Parentheses in function calls are optional
- Function calls use spaces instead of parentheses

**Further reading:**
- [Haskell Report - Functions](https://www.haskell.org/onlinereport/haskell2010/haskellch3.html#x8-260003)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
function greet(name)
    println("Hello, $name")
end

greet "World"  # Parentheses optional
greet("World")  # Parentheses allowed
```

**Special features:**
- Parentheses in function calls are optional
- Recommended for better readability

**Further reading:**
- [Julia Documentation - Functions](https://docs.julialang.org/en/v1/manual/functions/)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
fun greet(name: String) {
    println("Hello, $name")
}

greet("World")  // Parentheses required
```

**Special features:**
- Kotlin requires parentheses in function calls
- Parentheses are not optional

**Further reading:**
- [Kotlin Documentation - Functions](https://kotlinlang.org/docs/functions.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```haskell
def greet (name : String) : IO Unit :=
  IO.println s!"Hello, {name}"

-- Function application without parentheses (Juxtaposition)
#eval greet "World"
#eval IO.println "Hello"

-- Parentheses only for grouping
#eval IO.println (toString (1 + 2))
```

**Special features:**
- Function application uses spaces instead of parentheses (like Haskell)
- Parentheses are only used for grouping, not for function calls
- Multiple arguments are separated by spaces: `f a b c`

**Further reading:**
- [Lean 4 Documentation](https://lean-lang.org/lean4/doc/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
proc greet(name: string) =
  echo "Hello, ", name

greet "World"  # Parentheses optional
greet("World")  # Parentheses allowed
```

**Special features:**
- Parentheses in function calls are optional
- Recommended for better readability

**Further reading:**
- [Nim Documentation - Procedures](https://nim-lang.org/docs/manual.html#procedures)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
def greet(name)
  puts "Hello, #{name}"
end

greet "World"  # Parentheses optional
greet("World")  # Parentheses allowed
```

**Special features:**
- Parentheses in function calls are optional
- Recommended for better readability

**Further reading:**
- [Ruby Documentation - Methods](https://docs.ruby-lang.org/en/master/syntax/methods_rdoc.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
def greet(name: String): Unit = {
  println(s"Hello, $name")
}

greet "World"  // Parentheses optional (since Scala 2.13)
greet("World")  // Parentheses allowed
```

**Special features:**
- Parentheses in function calls are optional since Scala 2.13
- Only when the function has exactly one parameter

**Further reading:**
- [Scala Documentation - Methods](https://docs.scala-lang.org/tour/methods.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
func greet(name: String) {
    print("Hello, \(name)")
}

greet("World")  // Parentheses required
```

**Special features:**
- Swift requires parentheses in function calls
- Parentheses are not optional

**Further reading:**
- [Swift Documentation - Functions](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/functions/)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Optional parentheses in method calls
println "Hallo"         // instead of println("Hallo")

def items = [3, 1, 2]
items.each { println it } // instead of items.each({ println(it) })

// With multiple arguments
def add(a, b) { a + b }
println add(1, 2)       // Parentheses required here (ambiguity)
```

**Special features:**
- Parentheses in method calls with at least one argument optional
- For calls without arguments, parentheses are required (otherwise property access)
- Frequently used in DSLs and build scripts (e.g. Gradle)

**Further reading:**
- [Groovy Documentation - Optional Parentheses](https://groovy-lang.org/style-guide.html#_omitting_parentheses)

</TabItem>
</Tabs>

