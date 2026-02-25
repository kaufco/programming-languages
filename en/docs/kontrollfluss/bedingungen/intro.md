---
slug: /kontrollfluss/bedingungen
title: 6.1. Conditions
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 6.1. Conditions

Conditional execution of code.

## 6.1.1. If-Else Statements

Conditional execution of code based on a condition. Allows executing different code paths depending on the truth value of a condition.

### Languages {#sprachen}

<Tabs availableTabs={['ada', 'c', 'carbon', 'clojure', 'common-lisp', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'eiffel', 'elixir', 'elm', 'erlang', 'fsharp', 'fortran', 'gleam', 'go', 'groovy', 'haskell', 'haxe', 'idris', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'lua', 'matlab', 'mercury', 'mojo', 'nim', 'objective-c', 'object-pascal', 'ocaml', 'octave', 'odin', 'perl', 'php', 'prolog', 'purescript', 'python', 'r', 'racket', 'roc', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'vbnet', 'v', 'wolfram-language', 'zig']}>
<TabItem value="ada" label="Ada">

```ada
-- If-Else Statement
if temperature > 30 then
    result := "Hot";
elsif temperature > 20 then
    result := "Warm";
else
    result := "Cold";
end if;
```

**Special features:**
- Uses `elsif` instead of `else if`
- Must be closed with `end if`

**Further reading:**
- [Ada Reference Manual - If Statements](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-5-3.html)

</TabItem>
<TabItem value="c" label="C">

```c
// If-Else Statement
if (temperature > 30) {
    result = "Hot";
} else if (temperature > 20) {
    result = "Warm";
} else {
    result = "Cold";
}
```

**Special features:**
- Parentheses around the condition are required
- Curly braces can be omitted for single statements, but are recommended

**Further reading:**
- [C Standard - Conditional Statements](https://en.cppreference.com/w/c/language/if)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// If-Else Statement
if (temperature > 30) {
    result = "Hot";
} else if (temperature > 20) {
    result = "Warm";
} else {
    result = "Cold";
}
```

**Special features:**
- Experimental language, syntax may still change
- C++-like syntax

**Further reading:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; If-Else Statement
(def result
  (if (> temperature 30)
    "Hot"
    (if (> temperature 20)
      "Warm"
      "Cold")))
```

**Special features:**
- `if` is an expression that returns a value
- No explicit `else` clause, the second parameter is the else branch
- `cond` is used for multiple conditions

**Further reading:**
- [Clojure Documentation - Conditionals](https://clojure.org/reference/special_forms#if)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; If-Else Statement
(if (> temperature 30)
    (setf result "Hot")
    (if (> temperature 20)
        (setf result "Warm")
        (setf result "Cold")))
```

**Special features:**
- `if` is an expression with two branches (then and else)
- `cond` is used for multiple conditions

**Further reading:**
- [Common Lisp HyperSpec - If](http://www.lispworks.com/documentation/HyperSpec/Body/s_if.htm)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// If-Else Statement
if (temperature > 30) {
    result = "Hot";
} else if (temperature > 20) {
    result = "Warm";
} else {
    result = "Cold";
}
```

**Special features:**
- Parentheses around the condition are required
- Curly braces can be omitted for single statements, but are recommended

**Further reading:**
- [cppreference.com - If statement](https://en.cppreference.com/w/cpp/language/if)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# If-Else Statement
if temperature > 30
  result = "Hot"
elsif temperature > 20
  result = "Warm"
else
  result = "Cold"
end
```

**Special features:**
- Uses `elsif` instead of `else if`
- Must be closed with `end`
- Parentheses around the condition are optional

**Further reading:**
- [Crystal Documentation - If](https://crystal-lang.org/reference/1.11/syntax_and_semantics/if.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// If-Else Statement
if (temperature > 30) {
    result = "Hot";
} else if (temperature > 20) {
    result = "Warm";
} else {
    result = "Cold";
}
```

**Special features:**
- Parentheses around the condition are required
- Curly braces can be omitted for single statements, but are recommended

**Further reading:**
- [Microsoft C# Documentation - if-else](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/statements/selection-statements#the-if-statement)

</TabItem>
<TabItem value="d" label="D">

```d
// If-Else Statement
if (temperature > 30) {
    result = "Hot";
} else if (temperature > 20) {
    result = "Warm";
} else {
    result = "Cold";
}
```

**Special features:**
- Parentheses around the condition are required
- Curly braces can be omitted for single statements

**Further reading:**
- [D Language Specification - If Statement](https://dlang.org/spec/statement.html#if_statement)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// If-Else Statement
if (temperature > 30) {
  result = "Hot";
} else if (temperature > 20) {
  result = "Warm";
} else {
  result = "Cold";
}
```

**Special features:**
- Parentheses around the condition are required
- Curly braces can be omitted for single statements

**Further reading:**
- [Dart Language Tour - If and else](https://dart.dev/guides/language/language-tour#if-and-else)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
-- If-Else Statement
if temperature > 30 then
    result := "Hot"
elseif temperature > 20 then
    result := "Warm"
else
    result := "Cold"
end
```

**Special features:**
- Uses `elseif` instead of `else if`
- Must be closed with `end`

**Further reading:**
- [Eiffel Documentation - Control Structures](https://www.eiffel.org/doc/eiffel/Control_Structures)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# If-Else Statement
result = if temperature > 30 do
  "Hot"
else
  if temperature > 20 do
    "Warm"
  else
    "Cold"
  end
end
```

**Special features:**
- `if` is an expression that returns a value
- Must be closed with `end`
- `cond` is used for multiple conditions

**Further reading:**
- [Elixir Documentation - if and unless](https://hexdocs.pm/elixir/Kernel.html#if/2)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- If-Else Statement
result = if temperature > 30 then
    "Hot"
else if temperature > 20 then
    "Warm"
else
    "Cold"
```

**Special features:**
- `if` is an expression that returns a value
- Must always have an `else` branch
- No curly braces

**Further reading:**
- [Elm Documentation - If Expressions](https://guide.elm-lang.org/core_language.html#if-expressions)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% If-Else Statement
Result = if
    Temperature > 30 -> "Hot";
    Temperature > 20 -> "Warm";
    true -> "Cold"
end.
```

**Special features:**
- `if` is an expression with multiple guard clauses
- Must always have a `true` clause as fallback
- Each clause ends with semicolon, the last with period

**Further reading:**
- [Erlang Documentation - If Expressions](https://www.erlang.org/doc/reference_manual/expressions.html#if-expressions)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// If-Else Statement
let result = if temperature > 30 then
    "Hot"
else if temperature > 20 then
    "Warm"
else
    "Cold"
```

**Special features:**
- `if` is an expression that returns a value
- Must always have an `else` branch
- No curly braces

**Further reading:**
- [F# Documentation - Conditional Expressions](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/conditional-expressions-if-then-else)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! If-Else Statement
if (temperature > 30) then
    result = "Hot"
else if (temperature > 20) then
    result = "Warm"
else
    result = "Cold"
end if
```

**Special features:**
- Uses `else if` (with space)
- Must be closed with `end if`

**Further reading:**
- [Fortran Standard - IF Statement](https://gcc.gnu.org/onlinedocs/gfortran/IF-statement.html)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// Conditions via case expressions
let temperature = 25
let result = case temperature {
  t if t > 30 -> "Hot"
  t if t > 20 -> "Warm"
  _ -> "Cold"
}
```

**Special features:**
- Gleam uses `case` expressions with guards for conditions
- `case` is an expression that returns a value
- Guards are specified with `if` after the pattern
- Uncertainty about `if` syntax - manual verification needed whether newer Gleam versions support `if` expressions

**Further reading:**
- [Gleam Documentation - Case Expressions](https://tour.gleam.run/flow-control/case-expressions/)

</TabItem>
<TabItem value="go" label="Go">

```go
// If-Else Statement
if temperature > 30 {
    result = "Hot"
} else if temperature > 20 {
    result = "Warm"
} else {
    result = "Cold"
}
```

**Special features:**
- Parentheses around the condition are required
- Curly braces are required

**Further reading:**
- [Go Documentation - If](https://go.dev/ref/spec#If_statements)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// If-Else Statement
if (temperature > 30) {
    result = "Hot"
} else if (temperature > 20) {
    result = "Warm"
} else {
    result = "Cold"
}
```

**Special features:**
- Parentheses around the condition are optional
- Curly braces can be omitted for single statements

**Further reading:**
- [Groovy Documentation - Conditional Structures](https://groovy-lang.org/semantics.html#_conditional_structures)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- If-Else Statement
result = if temperature > 30
    then "Hot"
    else if temperature > 20
        then "Warm"
        else "Cold"
```

**Special features:**
- `if` is an expression that returns a value
- Must always have an `else` branch
- Pattern matching or guards are used for multiple conditions

**Further reading:**
- [Haskell Documentation - If Expressions](https://www.haskell.org/onlinereport/haskell2010/haskellch3.html#x8-380003.13)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// If-Else Statement
if (temperature > 30) {
    result = "Hot";
} else if (temperature > 20) {
    result = "Warm";
} else {
    result = "Cold";
}
```

**Special features:**
- Parentheses around the condition are required
- Curly braces can be omitted for single statements

**Further reading:**
- [Haxe Documentation - If](https://haxe.org/manual/expression-if.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- If-Else Statement
result = if temperature > 30
    then "Hot"
    else if temperature > 20
        then "Warm"
        else "Cold"
```

**Special features:**
- `if` is an expression that returns a value
- Must always have an `else` branch

**Further reading:**
- [Idris Documentation - Conditionals](https://idris2.readthedocs.io/en/latest/tutorial/starting.html#conditionals)

</TabItem>
<TabItem value="java" label="Java">

```java
// If-Else Statement
if (temperature > 30) {
    result = "Hot";
} else if (temperature > 20) {
    result = "Warm";
} else {
    result = "Cold";
}
```

**Special features:**
- Parentheses around the condition are required
- Curly braces can be omitted for single statements, but are recommended

**Further reading:**
- [Oracle Java Documentation - The if-then and if-then-else Statements](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/if.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// If-Else Statement
if (temperature > 30) {
    result = "Hot";
} else if (temperature > 20) {
    result = "Warm";
} else {
    result = "Cold";
}
```

**Special features:**
- Parentheses around the condition are required
- Curly braces can be omitted for single statements, but are recommended

**Further reading:**
- [MDN Web Docs - if...else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# If-Else Statement
if temperature > 30
    result = "Hot"
elseif temperature > 20
    result = "Warm"
else
    result = "Cold"
end
```

**Special features:**
- Uses `elseif` instead of `else if`
- Must be closed with `end`
- Parentheses around the condition are optional

**Further reading:**
- [Julia Documentation - Control Flow](https://docs.julialang.org/en/v1/manual/control-flow/#if-and-ternary-operator)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// If-Else (Expression-based)
val result = if temperature > 30 then "Hot"
             elif temperature > 20 then "Warm"
             else "Cold"

// If-Else with side effects
fun check-temperature(temperature: int): console ()
  if temperature > 30 then
    println("Hot")
  elif temperature > 20 then
    println("Warm")
  else
    println("Cold")
```

**Special features:**
- `if`/`then`/`elif`/`else` are expressions (return a value)
- `elif` instead of `else if`
- No parentheses around conditions needed
- Indentation-based block structure

**Further reading:**
- [Koka Language Guide - Control Flow](https://koka-lang.github.io/koka/doc/book.html#sec-control)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// If-Else Statement
if (temperature > 30) {
    result = "Hot"
} else if (temperature > 20) {
    result = "Warm"
} else {
    result = "Cold"
}
```

**Special features:**
- Parentheses around the condition are required
- `if` can also be used as an expression (without curly braces)

**Further reading:**
- [Kotlin Documentation - If Expression](https://kotlinlang.org/docs/control-flow.html#if-expression)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```haskell
-- If-Else Statement
let result := if temperature > 30 then
  "Hot"
else if temperature > 20 then
  "Warm"
else
  "Cold"
```

**Special features:**
- `if` is an expression that returns a value
- Must always have an `else` branch
- Uses `then` after the condition
- Keine Klammern oder geschweiften Klammern nötig

**Further reading:**
- [Functional Programming in Lean - Conditionals](https://lean-lang.org/functional_programming_in_lean/)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- If-Else Statement
if temperature > 30 then
    result = "Hot"
elseif temperature > 20 then
    result = "Warm"
else
    result = "Cold"
end
```

**Special features:**
- Uses `elseif` instead of `else if`
- Must be closed with `end`
- Parentheses around the condition are optional

**Further reading:**
- [Lua Documentation - If](https://www.lua.org/manual/5.4/manual.html#3.3.4)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% If-Else Statement
if temperature > 30
    result = "Hot";
elseif temperature > 20
    result = "Warm";
else
    result = "Cold";
end
```

**Special features:**
- Uses `elseif` instead of `else if`
- Must be closed with `end`
- Parentheses around the condition are optional

**Further reading:**
- [MATLAB Documentation - if, elseif, else](https://www.mathworks.com/help/matlab/ref/if.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% If-Else Statement
( if Temperature > 30 then
    Result = "Hot"
else if Temperature > 20 then
    Result = "Warm"
else
    Result = "Cold"
)
```

**Special features:**
- Two syntax variants: `if ... then ... else` and `( Cond -> Then ; Else )`
- `if-then-else` is an expression that returns a value
- The `else` branch is required (completeness is checked by the compiler)

**Further reading:**
- [Mercury Language Reference - If-then-else](https://www.mercurylang.org/information/doc-release/mercury_ref/If_002dthen_002delse.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# If-Else Statement
if temperature > 30:
    result = "Hot"
elif temperature > 20:
    result = "Warm"
else:
    result = "Cold"
```

**Special features:**
- Python-like syntax
- Verwendet `elif` instead of `else if`
- Must be structured with indentation

**Further reading:**
- [Mojo Documentation - Control Flow](https://docs.modular.com/mojo/manual/control-flow/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# If-Else Statement
if temperature > 30:
    result = "Hot"
elif temperature > 20:
    result = "Warm"
else:
    result = "Cold"
```

**Special features:**
- Verwendet `elif` instead of `else if`
- Must be structured with indentation
- Parentheses around the condition are optional

**Further reading:**
- [Nim Documentation - If Statement](https://nim-lang.org/docs/manual.html#statements-and-expressions-if-statement)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// If-Else Statement
if (temperature > 30) {
    result = @"Hot";
} else if (temperature > 20) {
    result = @"Warm";
} else {
    result = @"Cold";
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
// If-Else Statement
if temperature > 30 then
    result := "Hot"
else if temperature > 20 then
    result := "Warm"
else
    result := "Cold";
```

**Special features:**
- Uses `then` after the condition
- Parentheses around the condition are optional
- Curly braces are not used

**Further reading:**
- [Free Pascal Documentation - If Statements](https://www.freepascal.org/docs-html/ref/refse20.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* If-Else Statement *)
let result = if temperature > 30 then
    "Hot"
else if temperature > 20 then
    "Warm"
else
    "Cold"
```

**Special features:**
- `if` is an expression that returns a value
- Must always have an `else` branch
- No curly braces

**Further reading:**
- [OCaml Documentation - If Expressions](https://v2.ocaml.org/manual/expr.html#s:conditional-expressions)

</TabItem>
<TabItem value="octave" label="Octave">

```matlab
% If-Else Statement
if temperature > 30
    result = "Hot";
elseif temperature > 20
    result = "Warm";
else
    result = "Cold";
end
```

**Special features:**
- Uses `elseif` instead of `else if`
- Must be closed with `end`
- Parentheses around the condition are optional

**Further reading:**
- [GNU Octave Documentation - The if Statement](https://octave.org/doc/v8.1.0/The-if-Statement.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// If-Else Statement
if temperature > 30 {
    result = "Hot"
} else if temperature > 20 {
    result = "Warm"
} else {
    result = "Cold"
}
```

**Special features:**
- Parentheses around the condition are required
- Curly braces are required

**Further reading:**
- [Odin Documentation - If Statements](https://odin-lang.org/docs/overview/#if-statements)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# If-Else Statement
if ($temperature > 30) {
    $result = "Hot";
} elsif ($temperature > 20) {
    $result = "Warm";
} else {
    $result = "Cold";
}
```

**Special features:**
- Uses `elsif` instead of `else if`
- Parentheses around the condition are required
- Also supports `unless` as a negated `if`

**Further reading:**
- [Perl Documentation - Compound Statements](https://perldoc.perl.org/perlsyn#Compound-Statements)

</TabItem>
<TabItem value="php" label="PHP">

```php
// If-Else Statement
if ($temperature > 30) {
    $result = "Hot";
} else if ($temperature > 20) {
    $result = "Warm";
} else {
    $result = "Cold";
}
```

**Special features:**
- Variables must be marked with `$`
- Parentheses around the condition are required
- Curly braces can be omitted for single statements

**Further reading:**
- [PHP Documentation - if](https://www.php.net/manual/en/control-structures.if.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% If-Else Statement
classify_temperature(Temperature, Result) :-
    ( Temperature > 30 ->
        Result = 'Hot'
    ; Temperature > 20 ->
        Result = 'Warm'
    ;
        Result = 'Cold'
    ).
```

**Special features:**
- Prolog uses `( Condition -> Then ; Else )` as If-Else construct
- The `->` operator is the "If-Then" operator, `;` separates the else branch
- Nesting is possible through chains of `; ( Condition -> ... ; ... )`
- Unlike imperative languages, this is typically used within predicates

**Further reading:**
- [SWI-Prolog – Control Structures](https://www.swi-prolog.org/pldoc/man?section=control)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- If-Else Statement
result = if temperature > 30
    then "Hot"
    else if temperature > 20
        then "Warm"
        else "Cold"
```

**Special features:**
- `if` is an expression that returns a value
- Must always have an `else` branch
- No curly braces

**Further reading:**
- [PureScript Documentation - Conditionals](https://book.purescript.org/chapter3.html#conditional-expressions)

</TabItem>
<TabItem value="python" label="Python">

```python
# If-Else Statement
if temperature > 30:
    result = "Hot"
elif temperature > 20:
    result = "Warm"
else:
    result = "Cold"
```

**Special features:**
- Verwendet `elif` instead of `else if`
- Must be structured with indentation
- Parentheses around the condition are optional

**Further reading:**
- [Python Documentation - if Statements](https://docs.python.org/3/tutorial/controlflow.html#if-statements)

</TabItem>
<TabItem value="r" label="R">

```r
# If-Else Statement
if (temperature > 30) {
    result <- "Hot"
} else if (temperature > 20) {
    result <- "Warm"
} else {
    result <- "Cold"
}
```

**Special features:**
- Parentheses around the condition are required
- Assignment is done with `<-` or `=`
- Curly braces can be omitted for single statements

**Further reading:**
- [R Documentation - if](https://www.rdocumentation.org/packages/base/versions/3.6.2/topics/ifelse)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
;; If-Else Statement
(define result
  (if (> temperature 30)
      "Hot"
      (if (> temperature 20)
          "Warm"
          "Cold")))
```

**Special features:**
- `if` is an expression that returns a value
- No explicit `else` clause, the second parameter is the else branch
- `cond` is used for multiple conditions

**Further reading:**
- [Racket Documentation - Conditionals](https://docs.racket-lang.org/guide/if.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- If-Else Statement
result = if temperature > 30 then
    "Hot"
else if temperature > 20 then
    "Warm"
else
    "Cold"
```

**Special features:**
- `if` is an expression that returns a value
- Must always have an `else` branch
- No curly braces

**Further reading:**
- [Roc Documentation - If Expressions](https://www.roc-lang.org/tutorial#if-expressions)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# If-Else Statement
if temperature > 30
    result = "Hot"
elsif temperature > 20
    result = "Warm"
else
    result = "Cold"
end
```

**Special features:**
- Uses `elsif` instead of `else if`
- Must be closed with `end`
- Parentheses around the condition are optional

**Further reading:**
- [Ruby Documentation - Control Expressions](https://docs.ruby-lang.org/en/3.2/syntax/control_expressions_rdoc.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// If-Else Statement
if temperature > 30 {
    result = "Hot";
} else if temperature > 20 {
    result = "Warm";
} else {
    result = "Cold";
}
```

**Special features:**
- Parentheses around the condition are required
- Curly braces are required
- `if` can also be used as an expression

**Further reading:**
- [Rust Documentation - if Expressions](https://doc.rust-lang.org/book/ch03-05-control-flow.html#if-expressions)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// If-Else Statement
if (temperature > 30) {
    result = "Hot"
} else if (temperature > 20) {
    result = "Warm"
} else {
    result = "Cold"
}
```

**Special features:**
- `if` is an expression that returns a value
- Parentheses around the condition are required
- Curly braces can be omitted for single statements

**Further reading:**
- [Scala Documentation - If Expressions](https://docs.scala-lang.org/tour/if-else.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; If-Else Statement
(define result
  (if (> temperature 30)
      "Hot"
      (if (> temperature 20)
          "Warm"
          "Cold")))
```

**Special features:**
- `if` is an expression that returns a value
- No explicit `else` clause, the second parameter is the else branch
- `cond` is used for multiple conditions

**Further reading:**
- [Scheme Documentation - Conditionals](https://www.scheme.com/tspl4/further.html#./further:h1)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// If-Else Statement
if temperature > 30 {
    result = "Hot"
} else if temperature > 20 {
    result = "Warm"
} else {
    result = "Cold"
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
// If-Else Statement
if (temperature > 30) {
    result = "Hot";
} else if (temperature > 20) {
    result = "Warm";
} else {
    result = "Cold";
}
```

**Special features:**
- Parentheses around the condition are required
- Curly braces can be omitted for single statements, but are recommended

**Further reading:**
- [TypeScript Handbook - If Statements](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' If-Else Statement
If temperature > 30 Then
    result = "Hot"
ElseIf temperature > 20 Then
    result = "Warm"
Else
    result = "Cold"
End If
```

**Special features:**
- Verwendet `ElseIf` statt `else if`
- Muss mit `End If` abgeschlossen werden
- Verwendet `Then` nach der Bedingung

**Further reading:**
- [Microsoft VB.NET Documentation - If...Then...Else Statement](https://learn.microsoft.com/en-us/dotnet/visual-basic/language-reference/statements/if-then-else-statement)

</TabItem>
<TabItem value="v" label="V">

```v
// If-Else Statement
if temperature > 30 {
    result = "Hot"
} else if temperature > 20 {
    result = "Warm"
} else {
    result = "Cold"
}
```

**Special features:**
- Parentheses around the condition are required
- Curly braces are required

**Further reading:**
- [V Documentation - Control Flow](https://github.com/vlang/v/blob/master/doc/docs.md#control-flow)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* If-Else Statement *)
result = If[temperature > 30,
    "Hot",
    If[temperature > 20,
        "Warm",
        "Cold"
    ]
]
```

**Special features:**
- `If` ist ein Ausdruck, der einen Wert zurückgibt
- Function syntax with commas
- Must always have an else branch

**Further reading:**
- [Wolfram Language Documentation - If](https://reference.wolfram.com/language/ref/If.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// If-Else Statement
if (temperature > 30) {
    result = "Hot";
} else if (temperature > 20) {
    result = "Warm";
} else {
    result = "Cold";
}
```

**Special features:**
- Parentheses around the condition are required
- Curly braces are required

**Further reading:**
- [Zig Documentation - If](https://ziglang.org/documentation/0.11.0/#If)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
var
  x: Integer = 10;
begin
  if x > 0 then
    WriteLn('Positive')
  else if x = 0 then
    WriteLn('Zero')
  else
    WriteLn('Negative');

  // With begin/end for multiple statements
  if x > 5 then
  begin
    WriteLn('x is greater than 5');
    WriteLn('x = ', x);
  end;
end;
```

**Special features:**
- `if`/`then`/`else` syntax
- No `then` needed after `else if` clause (only after `if`)
- `begin`/`end` required for compound statements
- No semicolon before `else`

**Further reading:**
- [Delphi Documentation - If Statements](https://docwiki.embarcadero.com/RADStudio/en/If_Statements)

</TabItem>
</Tabs>


## 6.1.2. Ternary Operators

Compact conditional expressions that return a value based on a condition. Allow writing simple If-Else logic in a single expression.

### Languages {#sprachen}

<Tabs availableTabs={['c', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'groovy', 'haxe', 'java', 'javascript', 'julia', 'kotlin', 'lean4', 'mercury', 'mojo', 'nim', 'objective-c', 'perl', 'php', 'python', 'ruby', 'rust', 'scala', 'swift', 'typescript', 'v', 'zig']} orangeTabs={['go', 'lua']}>
<TabItem value="c" label="C">

```c
// Ternary Operator
result = temperature > 30 ? "Hot" : (temperature > 20 ? "Warm" : "Cold");
```

**Special features:**
- Syntax: `condition ? value_if_true : value_if_false`
- Can be nested

**Further reading:**
- [C Standard - Conditional Operator](https://en.cppreference.com/w/c/language/operator_other#Conditional_operator)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Ternary Operator
result = temperature > 30 ? "Hot" : (temperature > 20 ? "Warm" : "Cold");
```

**Special features:**
- Syntax: `condition ? value_if_true : value_if_false`
- Can be nested

**Further reading:**
- [cppreference.com - Conditional operator](https://en.cppreference.com/w/cpp/language/operator_other#Conditional_operator)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Ternary Operator
result = temperature > 30 ? "Hot" : (temperature > 20 ? "Warm" : "Cold")
```

**Special features:**
- Syntax: `condition ? value_if_true : value_if_false`
- Can be nested

**Further reading:**
- [Crystal Documentation - If](https://crystal-lang.org/reference/1.11/syntax_and_semantics/if.html#ternary-if)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Ternary Operator
result = temperature > 30 ? "Hot" : (temperature > 20 ? "Warm" : "Cold");
```

**Special features:**
- Syntax: `condition ? value_if_true : value_if_false`
- Can be nested

**Further reading:**
- [Microsoft C# Documentation - ?: operator](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/conditional-operator)

</TabItem>
<TabItem value="d" label="D">

```d
// Ternary Operator
result = temperature > 30 ? "Hot" : (temperature > 20 ? "Warm" : "Cold");
```

**Special features:**
- Syntax: `condition ? value_if_true : value_if_false`
- Can be nested

**Further reading:**
- [D Language Specification - Conditional Expression](https://dlang.org/spec/expression.html#conditional_expression)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Ternary Operator
result = temperature > 30 ? "Hot" : (temperature > 20 ? "Warm" : "Cold");
```

**Special features:**
- Syntax: `condition ? value_if_true : value_if_false`
- Can be nested

**Further reading:**
- [Dart Language Tour - Conditional expressions](https://dart.dev/guides/language/language-tour#conditional-expressions)

</TabItem>
<TabItem value="go" label="Go">

```go
// Ternary Operator (emulated with IIFE)
result := func() string {
    if temperature > 30 {
        return "Hot"
    } else if temperature > 20 {
        return "Warm"
    }
    return "Cold"
}()
```

**Special features:**
- Go has no direct ternary operator
- Typically emulated with an immediately invoked anonymous function (IIFE)
- Or with If-Else statements

**Further reading:**
- [Go Documentation - If statements](https://go.dev/ref/spec#If_statements)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Ternary Operator
result = temperature > 30 ? "Hot" : (temperature > 20 ? "Warm" : "Cold")
```

**Special features:**
- Syntax: `condition ? value_if_true : value_if_false`
- Can be nested

**Further reading:**
- [Groovy Documentation - Conditional Operators](https://groovy-lang.org/operators.html#_conditional_operator)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Ternary Operator
result = temperature > 30 ? "Hot" : (temperature > 20 ? "Warm" : "Cold");
```

**Special features:**
- Syntax: `condition ? value_if_true : value_if_false`
- Can be nested

**Further reading:**
- [Haxe Documentation - Conditional Operator](https://haxe.org/manual/expression-operators-conditionals.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Ternary Operator
result = temperature > 30 ? "Hot" : (temperature > 20 ? "Warm" : "Cold");
```

**Special features:**
- Syntax: `condition ? value_if_true : value_if_false`
- Can be nested

**Further reading:**
- [Oracle Java Documentation - Conditional Operator ? :](https://docs.oracle.com/javase/specs/jls/se17/html/jls-15.html#jls-15.25)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Ternary Operator
result = temperature > 30 ? "Hot" : (temperature > 20 ? "Warm" : "Cold");
```

**Special features:**
- Syntax: `condition ? value_if_true : value_if_false`
- Can be nested

**Further reading:**
- [MDN Web Docs - Conditional (ternary) operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Ternary Operator (as If-Expression)
result = if (temperature > 30) "Hot" else if (temperature > 20) "Warm" else "Cold"
```

**Special features:**
- Kotlin has no traditional ternary operator
- Instead uses If-Expressions that return a value
- Syntax: `if (condition) value_if_true else value_if_false`

**Further reading:**
- [Kotlin Documentation - If Expression](https://kotlinlang.org/docs/control-flow.html#if-expression)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```haskell
-- Ternary Operator (als If-Expression)
let result := if temperature > 30 then "Hot"
  else if temperature > 20 then "Warm"
  else "Cold"
```

**Special features:**
- Lean 4 has no separate ternary operator
- `if`/`then`/`else` is already an expression that returns a value
- Syntax: `if condition then value_if_true else value_if_false`

**Further reading:**
- [Functional Programming in Lean - Conditionals](https://lean-lang.org/functional_programming_in_lean/)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Ternary (If-Then-Else Expression)
Result = ( if Temperature > 30 then "Hot"
           else if Temperature > 20 then "Warm"
           else "Cold" )
```

**Special features:**
- Mercury has no traditional ternary operator
- `if-then-else` is an expression that directly returns a value
- Syntax: `( if Condition then Value1 else Value2 )`

**Further reading:**
- [Mercury Language Reference - If-then-else](https://www.mercurylang.org/information/doc-release/mercury_ref/If_002dthen_002delse.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Ternary Operator (als And-Or-Idiom)
result = (temperature > 30) and "Hot" or ((temperature > 20) and "Warm" or "Cold")
```

**Special features:**
- Lua has no direct ternary operator
- Typically emulated with the And-Or idiom: `condition and value_if_true or value_if_false`
- Only works if `value_if_true` is truthy

**Further reading:**
- [Lua Documentation - Logical Operators](https://www.lua.org/manual/5.4/manual.html#3.4.5)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# Ternary Operator (Python-style)
result = "Hot" if temperature > 30 else ("Warm" if temperature > 20 else "Cold")
```

**Special features:**
- Python-like syntax
- Syntax: `value_if_true if condition else value_if_false`
- Can be nested

**Further reading:**
- [Mojo Documentation - Control Flow](https://docs.modular.com/mojo/manual/control-flow/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Ternary Operator (If-Expression)
result = if temperature > 30: "Hot" elif temperature > 20: "Warm" else: "Cold"
```

**Special features:**
- Nim has no traditional ternary operator
- Instead uses If-Expressions that return a value
- Syntax: `if condition: value_if_true else: value_if_false`

**Further reading:**
- [Nim Documentation - If Expression](https://nim-lang.org/docs/manual.html#statements-and-expressions-if-expression)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Ternary Operator
result = temperature > 30 ? @"Hot" : (temperature > 20 ? @"Warm" : @"Cold");
```

**Special features:**
- Syntax: `condition ? value_if_true : value_if_false`
- Can be nested

**Further reading:**
- [Apple Documentation - Conditional Operator](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Ternary Operator
$result = $temperature > 30 ? "Hot" : ($temperature > 20 ? "Warm" : "Cold");
```

**Special features:**
- Syntax: `condition ? value_if_true : value_if_false`
- Can be nested
- Variables must be marked with `$`

**Further reading:**
- [Perl Documentation - Conditional Operator](https://perldoc.perl.org/perlop#Conditional-Operator)

</TabItem>
<TabItem value="php" label="PHP">

```php
// Ternary Operator
$result = $temperature > 30 ? "Hot" : ($temperature > 20 ? "Warm" : "Cold");
```

**Special features:**
- Syntax: `condition ? value_if_true : value_if_false`
- Can be nested
- Variables must be marked with `$`

**Further reading:**
- [PHP Documentation - Ternary Operator](https://www.php.net/manual/en/language.operators.comparison.php#language.operators.comparison.ternary)

</TabItem>
<TabItem value="python" label="Python">

```python
# Ternary Operator (Conditional Expression)
result = "Hot" if temperature > 30 else ("Warm" if temperature > 20 else "Cold")
```

**Special features:**
- Syntax: `value_if_true if condition else value_if_false`
- Can be nested
- Introduced in Python 2.5

**Further reading:**
- [Python Documentation - Conditional expressions](https://docs.python.org/3/reference/expressions.html#conditional-expressions)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Ternary Operator
result = temperature > 30 ? "Hot" : (temperature > 20 ? "Warm" : "Cold")
```

**Special features:**
- Syntax: `condition ? value_if_true : value_if_false`
- Can be nested

**Further reading:**
- [Ruby Documentation - Operators](https://docs.ruby-lang.org/en/3.2/syntax/operators_rdoc.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Ternary Operator (as If-Expression)
let result = if temperature > 30 {
    "Hot"
} else if temperature > 20 {
    "Warm"
} else {
    "Cold"
};
```

**Special features:**
- Rust has no traditional ternary operator
- Instead uses If-Expressions that return a value
- Syntax: `if condition { value_if_true } else { value_if_false }`

**Further reading:**
- [Rust Documentation - If Expressions](https://doc.rust-lang.org/book/ch03-05-control-flow.html#if-expressions)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Ternary Operator (as If-Expression)
val result = if (temperature > 30) "Hot" else if (temperature > 20) "Warm" else "Cold"
```

**Special features:**
- Scala has no traditional ternary operator
- Instead uses If-Expressions that return a value
- Syntax: `if (condition) value_if_true else value_if_false`

**Further reading:**
- [Scala Documentation - If Expressions](https://docs.scala-lang.org/tour/if-else.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Ternary Operator
result = temperature > 30 ? "Hot" : (temperature > 20 ? "Warm" : "Cold")
```

**Special features:**
- Syntax: `condition ? value_if_true : value_if_false`
- Can be nested

**Further reading:**
- [Swift Documentation - Ternary Conditional Operator](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/basicoperators/#Ternary-Conditional-Operator)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Ternary Operator
result = temperature > 30 ? "Hot" : (temperature > 20 ? "Warm" : "Cold");
```

**Special features:**
- Syntax: `condition ? value_if_true : value_if_false`
- Can be nested

**Further reading:**
- [TypeScript Handbook - Conditional Operator](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)

</TabItem>
<TabItem value="v" label="V">

```v
// Ternary Operator
result := if temperature > 30 { "Hot" } else if temperature > 20 { "Warm" } else { "Cold" }
```

**Special features:**
- V has no traditional ternary operator
- Instead uses If-Expressions that return a value
- Syntax: `if condition { value_if_true } else { value_if_false }`

**Further reading:**
- [V Documentation - Control Flow](https://github.com/vlang/v/blob/master/doc/docs.md#control-flow)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Ternary Operator (as If-Expression)
const result = if (temperature > 30) "Hot" else if (temperature > 20) "Warm" else "Cold";
```

**Special features:**
- Zig has no traditional ternary operator
- Instead uses If-Expressions that return a value
- Syntax: `if (condition) value_if_true else value_if_false`

**Further reading:**
- [Zig Documentation - If](https://ziglang.org/documentation/0.11.0/#If)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
x = 10
result = x > 5 ? "large" : "small"  # "large"

# Nested ternary operator
grade = 85
label = grade >= 90 ? "A" : grade >= 80 ? "B" : grade >= 70 ? "C" : "F"
```

**Special features:**
- Syntax: `condition ? true_value : false_value`
- Is an expression and returns a value
- Condition must be a Bool (no implicit truthy/falsy)

**Further reading:**
- [Julia Documentation - Short-Circuit Evaluation](https://docs.julialang.org/en/v1/manual/control-flow/#Short-Circuit-Evaluation)

</TabItem>
</Tabs>


## 6.1.3. Guard Clauses

Programming pattern that uses early returns or exits to avoid nested If-Statements. Improves readability by reducing indentation depth and early handling of error cases or edge conditions.

### Languages {#sprachen}

<Tabs availableTabs={['ada', 'c', 'carbon', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'eiffel', 'elixir', 'erlang', 'go', 'groovy', 'haxe', 'java', 'javascript', 'julia', 'kotlin', 'lean4', 'lua', 'mercury', 'mojo', 'nim', 'objective-c', 'object-pascal', 'ocaml', 'odin', 'perl', 'php', 'prolog', 'python', 'r', 'ruby', 'rust', 'scala', 'swift', 'typescript', 'v', 'vbnet', 'zig']}>
<TabItem value="ada" label="Ada">

```ada
-- Guard Clause with early return
function process_value(value: Integer) return String is
begin
    if value < 0 then
        return "Invalid";
    end if;
    
    if value = 0 then
        return "Zero";
    end if;
    
    return "Valid";
end process_value;
```

**Special features:**
- Guard Clauses are implemented with early returns
- Reduces nesting and improves readability

**Further reading:**
- [Ada Reference Manual - Return Statements](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-6-5.html)

</TabItem>
<TabItem value="c" label="C">

```c
// Guard Clause with early return
const char* process_value(int value) {
    if (value < 0) {
        return "Invalid";
    }
    
    if (value == 0) {
        return "Zero";
    }
    
    return "Valid";
}
```

**Special features:**
- Guard Clauses are implemented with early returns
- Reduces nesting and improves readability

**Further reading:**
- [C Standard - Return statement](https://en.cppreference.com/w/c/language/return)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Guard Clause with early return
fn process_value(value: i32) -> String {
    if (value < 0) {
        return "Invalid";
    }
    
    if (value == 0) {
        return "Zero";
    }
    
    return "Valid";
}
```

**Special features:**
- Experimental language, syntax may still change
- Guard Clauses are implemented with early returns

**Further reading:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Guard Clause with early return
std::string process_value(int value) {
    if (value < 0) {
        return "Invalid";
    }
    
    if (value == 0) {
        return "Zero";
    }
    
    return "Valid";
}
```

**Special features:**
- Guard Clauses are implemented with early returns
- Reduces nesting and improves readability

**Further reading:**
- [cppreference.com - Return statement](https://en.cppreference.com/w/cpp/language/return)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Guard Clause with early return
def process_value(value : Int32) : String
  return "Invalid" if value < 0
  return "Zero" if value == 0
  
  "Valid"
end
```

**Special features:**
- Guard Clauses are implemented with early returns
- Also supports Postfix-If syntax: `return "Invalid" if value < 0`

**Further reading:**
- [Crystal Documentation - Methods](https://crystal-lang.org/reference/1.11/syntax_and_semantics/methods.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Guard Clause with early return
string ProcessValue(int value) {
    if (value < 0) {
        return "Invalid";
    }
    
    if (value == 0) {
        return "Zero";
    }
    
    return "Valid";
}
```

**Special features:**
- Guard Clauses are implemented with early returns
- Reduces nesting and improves readability

**Further reading:**
- [Microsoft C# Documentation - return statement](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/statements/jump-statements#the-return-statement)

</TabItem>
<TabItem value="d" label="D">

```d
// Guard Clause with early return
string processValue(int value) {
    if (value < 0) {
        return "Invalid";
    }
    
    if (value == 0) {
        return "Zero";
    }
    
    return "Valid";
}
```

**Special features:**
- Guard Clauses are implemented with early returns
- Reduces nesting and improves readability

**Further reading:**
- [D Language Specification - Return Statement](https://dlang.org/spec/statement.html#return_statement)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Guard Clause with early return
String processValue(int value) {
  if (value < 0) {
    return "Invalid";
  }
  
  if (value == 0) {
    return "Zero";
  }
  
  return "Valid";
}
```

**Special features:**
- Guard Clauses are implemented with early returns
- Reduces nesting and improves readability

**Further reading:**
- [Dart Language Tour - Return values](https://dart.dev/guides/language/language-tour#return-values)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
-- Guard Clause with early return
process_value (value: INTEGER): STRING
    do
        if value < 0 then
            Result := "Invalid"
            return
        end
        
        if value = 0 then
            Result := "Zero"
            return
        end
        
        Result := "Valid"
    end
```

**Special features:**
- Guard Clauses are implemented with early returns
- Uses `Result` for the return value

**Further reading:**
- [Eiffel ECMA-367 Standard](https://www.ecma-international.org/publications-and-standards/standards/ecma-367/)

</TabItem>
<TabItem value="go" label="Go">

```go
// Guard Clause with early return
func processValue(value int) string {
    if value < 0 {
        return "Invalid"
    }
    
    if value == 0 {
        return "Zero"
    }
    
    return "Valid"
}
```

**Special features:**
- Guard Clauses are implemented with early returns
- Reduces nesting and improves readability
- Very commonly used in Go code

**Further reading:**
- [Go Documentation - Return statements](https://go.dev/ref/spec#Return_statements)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Guard Clause with early return
def processValue(value) {
    if (value < 0) {
        return "Invalid"
    }
    
    if (value == 0) {
        return "Zero"
    }
    
    return "Valid"
}
```

**Special features:**
- Guard Clauses are implemented with early returns
- Reduces nesting and improves readability

**Further reading:**
- [Groovy Documentation - Methods](https://groovy-lang.org/syntax.html#_methods)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Guard Clause with early return
function processValue(value: Int): String {
    if (value < 0) {
        return "Invalid";
    }
    
    if (value == 0) {
        return "Zero";
    }
    
    return "Valid";
}
```

**Special features:**
- Guard Clauses are implemented with early returns
- Reduces nesting and improves readability

**Further reading:**
- [Haxe Documentation - Functions](https://haxe.org/manual/expression-function.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Guard Clause with early return
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

**Special features:**
- Guard Clauses are implemented with early returns
- Reduces nesting and improves readability

**Further reading:**
- [Oracle Java Documentation - return Statement](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/branch.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Guard Clause with early return
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

**Special features:**
- Guard Clauses are implemented with early returns
- Reduces nesting and improves readability

**Further reading:**
- [MDN Web Docs - return](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Guard Clause with early return
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

**Special features:**
- Guard Clauses are implemented with early returns
- Reduces nesting and improves readability

**Further reading:**
- [Julia Documentation - Functions](https://docs.julialang.org/en/v1/manual/functions/)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Guard Clause with early return
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

**Special features:**
- Guard Clauses are implemented with early returns
- Reduces nesting and improves readability

**Further reading:**
- [Kotlin Documentation - Functions](https://kotlinlang.org/docs/functions.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```haskell
-- Guard Clause (Expression-based)
def processValue (value : Int) : String :=
  if value < 0 then "Ungültig"
  else if value == 0 then "Null"
  else "Gültig"

-- Alternative: Guard Clause with early return (do-notation)
def processValue' (value : Int) : String := Id.run do
  if value < 0 then return "Ungültig"
  if value == 0 then return "Null"
  return "Gültig"
```

**Special features:**
- Expression-based: `if`/`then`/`else` expressions as Guard Clauses
- Imperative style: `do` notation with `return` for early returns (`Id.run do` for pure functions)
- Pattern matching with `match` is another idiomatic alternative

**Further reading:**
- [Functional Programming in Lean - Functions](https://lean-lang.org/functional_programming_in_lean/)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Guard Clause with early return
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

**Special features:**
- Guard Clauses are implemented with early returns
- Reduces nesting and improves readability

**Further reading:**
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

**Special features:**
- Mercury uses `if-then-else` expressions for guard logic
- No explicit `return` – the function value results from the expression
- The compiler automatically checks completeness and determinism

**Further reading:**
- [Mercury Language Reference - If-then-else](https://www.mercurylang.org/information/doc-release/mercury_ref/If_002dthen_002delse.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# Guard Clause with early return
def process_value(value: Int) -> String:
    if value < 0:
        return "Ungültig"
    
    if value == 0:
        return "Null"
    
    return "Gültig"
```

**Special features:**
- Python-like syntax
- Guard Clauses are implemented with early returns

**Further reading:**
- [Mojo Documentation - Functions](https://docs.modular.com/mojo/manual/functions/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Guard Clause with early return
proc processValue(value: int): string =
    if value < 0:
        return "Ungültig"
    
    if value == 0:
        return "Null"
    
    return "Gültig"
```

**Special features:**
- Guard Clauses are implemented with early returns
- Reduces nesting and improves readability

**Further reading:**
- [Nim Documentation - Procedures](https://nim-lang.org/docs/manual.html#procedures)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Guard Clause with early return
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

**Special features:**
- Guard Clauses are implemented with early returns
- Reduces nesting and improves readability

**Further reading:**
- [Apple Documentation - Methods](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/DefiningClasses/DefiningClasses.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Guard Clause with early return
function processValue(value: Integer): String;
begin
    if value < 0 then
        Exit("Ungültig");
    
    if value = 0 then
        Exit("Null");
    
    Result := "Gültig";
end;
```

**Special features:**
- Guard Clauses are implemented with early returns
- Uses `Exit` for early returns with value

**Further reading:**
- [Free Pascal Documentation - Functions](https://www.freepascal.org/docs-html/ref/refse19.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Guard Clause with early return *)
let process_value value =
    if value < 0 then
        "Ungültig"
    else if value = 0 then
        "Null"
    else
        "Gültig"
```

**Special features:**
- OCaml uses if-expressions, so Guard Clauses are implemented as early if-branches
- Functional style without explicit returns

**Further reading:**
- [OCaml Documentation - Functions](https://v2.ocaml.org/manual/expr.html#s:function-definitions)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Guard Clause with early return
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

**Special features:**
- Guard Clauses are implemented with early returns
- Reduces nesting and improves readability

**Further reading:**
- [Odin Documentation - Procedures](https://odin-lang.org/docs/overview/#procedures)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Guard Clause with early return
sub process_value {
    my ($value) = @_;
    
    return "Ungültig" if $value < 0;
    return "Null" if $value == 0;
    
    return "Gültig";
}
```

**Special features:**
- Guard Clauses are implemented with early returns
- Also supports postfix if syntax: `return "Ungültig" if $value < 0`

**Further reading:**
- [Perl Documentation - Subroutines](https://perldoc.perl.org/perlsub)

</TabItem>
<TabItem value="php" label="PHP">

```php
// Guard Clause with early return
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

**Special features:**
- Guard Clauses are implemented with early returns
- Reduces nesting and improves readability

**Further reading:**
- [PHP Documentation - Functions](https://www.php.net/manual/en/functions.user-defined.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Guard Clauses via multiple clauses
process_value(Value, "Ungültig") :-
    Value < 0.
process_value(0, "Null").
process_value(Value, "Gültig") :-
    Value > 0.
```

**Special features:**
- Prolog naturally implements Guard Clauses via multiple clauses of the same predicate
- Clauses are checked from top to bottom (first-match semantics)
- Conditions in the clause body act as guards – if they fail, the next clause is tried (backtracking)
- No explicit "return" needed – the result is bound via unification

**Further reading:**
- [SWI-Prolog – Defining Predicates](https://www.swi-prolog.org/pldoc/man?section=defpred)

</TabItem>
<TabItem value="python" label="Python">

```python
# Guard Clause with early return
def process_value(value):
    if value < 0:
        return "Ungültig"
    
    if value == 0:
        return "Null"
    
    return "Gültig"
```

**Special features:**
- Guard Clauses are implemented with early returns
- Reduces nesting and improves readability

**Further reading:**
- [Python Documentation - Functions](https://docs.python.org/3/tutorial/controlflow.html#defining-functions)

</TabItem>
<TabItem value="r" label="R">

```r
# Guard Clause with early return
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

**Special features:**
- Guard Clauses are implemented with early returns
- Reduces nesting and improves readability

**Further reading:**
- [R Documentation - Functions](https://www.rdocumentation.org/packages/base/versions/3.6.2/topics/function)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Guard Clause with early return
def process_value(value)
    return "Ungültig" if value < 0
    return "Null" if value == 0
    
    "Gültig"
end
```

**Special features:**
- Guard Clauses are implemented with early returns
- Also supports postfix if syntax: `return "Ungültig" if value < 0`

**Further reading:**
- [Ruby Documentation - Methods](https://docs.ruby-lang.org/en/3.2/syntax/methods_rdoc.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Guard Clause with early return
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

**Special features:**
- Guard Clauses are implemented with early returns
- Reduces nesting and improves readability
- Last expression is implicit return

**Further reading:**
- [Rust Documentation - Functions](https://doc.rust-lang.org/book/ch03-03-functions.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Guard Clause with early return
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

**Special features:**
- Guard Clauses are implemented with early returns
- Reduces nesting and improves readability

**Further reading:**
- [Scala Documentation - Functions](https://docs.scala-lang.org/tour/functions.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Guard Clause with early return
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

**Special features:**
- Guard Clauses are implemented with early returns
- Swift also has `guard` statements for explicit Guard Clauses

**Further reading:**
- [Swift Documentation - Control Flow](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/controlflow/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Guard Clause with early return
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

**Special features:**
- Guard Clauses are implemented with early returns
- Reduces nesting and improves readability

**Further reading:**
- [TypeScript Handbook - Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Guard Clause with early return
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

**Special features:**
- Guard Clauses are implemented with early returns
- Reduces nesting and improves readability

**Further reading:**
- [Microsoft VB.NET Documentation - Return Statement](https://learn.microsoft.com/en-us/dotnet/visual-basic/language-reference/statements/return-statement)

</TabItem>
<TabItem value="v" label="V">

```v
// Guard Clause with early return
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

**Special features:**
- Guard Clauses are implemented with early returns
- Reduces nesting and improves readability

**Further reading:**
- [V Documentation - Functions](https://github.com/vlang/v/blob/master/doc/docs.md#functions)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Guard Clause with early return
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

**Special features:**
- Guard Clauses are implemented with early returns
- Reduces nesting and improves readability

**Further reading:**
- [Zig Documentation - Functions](https://ziglang.org/documentation/0.11.0/#Functions)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Guard Clauses in function definitions
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

**Special features:**
- Guards are defined with `when` after the function signature
- Only certain functions are allowed in guards (e.g., `is_integer/1`, `is_binary/1`, `rem/2`)
- Guards are checked in order; first match wins
- Combination with `and`, `or`, `not`

**Further reading:**
- [Elixir Documentation - Guards](https://hexdocs.pm/elixir/patterns-and-guards.html#guards)

</TabItem>
<TabItem value="erlang" label="Erlang">
```erlang
% Guard Clauses
check_value(X) when X > 0 -> positive;
check_value(X) when X < 0 -> negative;
check_value(0) -> zero.

% Guards in case expressions
Result = case Temperature of
    T when T > 30 -> "Heiß";
    T when T > 20 -> "Warm";
    _ -> "Kalt"
end.
```

**Special features:**
- Guards with `when` clause in function heads and `case` expressions
- Only certain functions allowed in guards (BIFs, comparisons, arithmetic expressions)
- Combination with `,` (and) and `;` (or)
- Guards must not have side effects

**Further reading:**
- [Erlang Documentation - Guard Sequences](https://www.erlang.org/doc/reference_manual/expressions.html#guard-sequences)
</TabItem>
</Tabs>


## 6.1.4. Statement Modifiers (Postfix Control Structures)

Control structures that are placed after the statement instead of before it. Allow conditions and loops to be written in a more compact, readable form, especially for simple cases.

### Languages {#sprachen}

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

**Special features:**
- Supports `if`, `unless`, `while` and `until` as postfix modifiers
- Improves readability for simple cases

**Further reading:**
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

**Special features:**
- Supports `if`, `unless`, `while`, `until` and `for` as postfix modifiers
- Very commonly used in Perl code
- Improves readability for simple cases

**Further reading:**
- [Perl Documentation - Statement Modifiers](https://perldoc.perl.org/perlsyn#Statement-Modifiers)

</TabItem>
<TabItem value="python" label="Python">

```python
# Statement Modifier (Postfix If) - not directly supported
# Typically emulated with ternary operator
result = "Heiß" if temperature > 30 else None

# Statement Modifier (Postfix While/For) - not supported
# Must be written in normal syntax
```

**Special features:**
- Python only supports postfix if as part of the ternary operator
- Postfix while/for are not supported
- Must be written in normal syntax

**Further reading:**
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

**Special features:**
- Supports `if`, `unless`, `while` and `until` as postfix modifiers
- Very commonly used in Ruby code
- Improves readability for simple cases

**Further reading:**
- [Ruby Documentation - Control Expressions](https://docs.ruby-lang.org/en/3.2/syntax/control_expressions_rdoc.html)

</TabItem>
</Tabs>

