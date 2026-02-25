---
slug: /syntax-struktur/kommentare
title: 2.1. Comments
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 2.1. Comments

Comment syntax and documentation.

## 2.1.1. Block Comments

Comments that can span multiple lines and are delimited by special delimiters.

### Languages {#sprachen}

<Tabs availableTabs={['c', 'csharp', 'cpp', 'carbon', 'clojure', 'common-lisp', 'crystal', 'd', 'dart', 'elm', 'fsharp', 'go', 'groovy', 'haskell', 'haxe', 'idris', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'lua', 'matlab', 'mercury', 'nim', 'objective-c', 'object-pascal', 'ocaml', 'octave', 'odin', 'perl', 'php', 'prolog', 'purescript', 'racket', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'wolfram-language']} orangeTabs={['python']}>
<TabItem value="c" label="C">

```c
/* This is a block comment
   that can span multiple lines */

/* Single-line block comment */
```

**Special features:**
- Block comments cannot be nested

**Further reading:**
- [C Standard - Comments](https://en.cppreference.com/w/c/language/comment)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
/* This is a block comment
   that can span multiple lines */

/* Single-line block comment */
```

**Special features:**
- Block comments cannot be nested

**Further reading:**
- [C# Documentation - Comments](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/lexical-structure#comments)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
/* This is a block comment
   that can span multiple lines */

/* Single-line block comment */
```

**Special features:**
- Block comments cannot be nested

**Further reading:**
- [C++ Standard - Comments](https://en.cppreference.com/w/cpp/language/comment)

</TabItem>
<TabItem value="carbon" label="Carbon">

```carbon
/* This is a block comment
   that can span multiple lines */

/* Single-line block comment */
```

**Special features:**
- Carbon uses C++-like block comment syntax

**Further reading:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
(comment
  This is a block comment
  that can span multiple lines
  and can contain code that is not executed)
```

**Special features:**
- Clojure uses `(comment ...)` for block comments
- Code inside `comment` is not executed but can be syntactically valid

**Further reading:**
- [Clojure Documentation - Comments](https://clojure.org/reference/reader#_comment)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
#|
This is a block comment
that can span multiple lines
|#
```

**Special features:**
- Block comments can be nested

**Further reading:**
- [Common Lisp HyperSpec - Comments](http://www.lispworks.com/documentation/HyperSpec/Body/02_d.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
=begin
This is a block comment
that can span multiple lines
=end
```

**Special features:**
- Crystal uses Ruby-like block comment syntax

**Further reading:**
- [Crystal Documentation - Comments](https://crystal-lang.org/reference/syntax_and_semantics/literals/comments.html)

</TabItem>
<TabItem value="d" label="D">

```d
/* This is a block comment
   that can span multiple lines */

/* Single-line block comment */

/+ Nested block comments +/
```

**Special features:**
- D supports both C-style `/* */` and nestable `/+ +/` block comments

**Further reading:**
- [D Language Specification - Comments](https://dlang.org/spec/lex.html#comment)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
/* This is a block comment
   that can span multiple lines */

/* Single-line block comment */
```

**Special features:**
- Block comments cannot be nested

**Further reading:**
- [Dart Language Specification - Comments](https://dart.dev/guides/language/language-tour#comments)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
{- This is a block comment
   that can span multiple lines -}

{- Single-line block comment -}
```

**Special features:**
- Block comments can be nested

**Further reading:**
- [Elm Documentation - Comments](https://guide.elm-lang.org/core_language.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
(* This is a block comment
   that can span multiple lines *)

(* Single-line block comment *)
```

**Special features:**
- Block comments can be nested

**Further reading:**
- [F# Documentation - Comments](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/comments)

</TabItem>
<TabItem value="go" label="Go">

```go
/* This is a block comment
   that can span multiple lines */

/* Single-line block comment */
```

**Special features:**
- Block comments cannot be nested

**Further reading:**
- [Go Language Specification - Comments](https://go.dev/ref/spec#Comments)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
/* This is a block comment
   that can span multiple lines */

/* Single-line block comment */
```

**Special features:**
- Block comments cannot be nested

**Further reading:**
- [Groovy Documentation - Comments](https://groovy-lang.org/syntax.html#_comments)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
{- This is a block comment
   that can span multiple lines -}

{- Single-line block comment -}
```

**Special features:**
- Block comments can be nested

**Further reading:**
- [Haskell Report - Comments](https://www.haskell.org/onlinereport/haskell2010/haskellch2.html#x7-180002.2)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
/* This is a block comment
   that can span multiple lines */

/* Single-line block comment */
```

**Special features:**
- Block comments cannot be nested

**Further reading:**
- [Haxe Documentation - Comments](https://haxe.org/manual/expression.html#comments)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
{- This is a block comment
   that can span multiple lines -}

{- Single-line block comment -}
```

**Special features:**
- Block comments can be nested

**Further reading:**
- [Idris 2 Documentation](https://idris2.readthedocs.io/en/latest/tutorial/starting.html)

</TabItem>
<TabItem value="java" label="Java">

```java
/* This is a block comment
   that can span multiple lines */

/* Single-line block comment */
```

**Special features:**
- Block comments cannot be nested

**Further reading:**
- [Java Language Specification - Comments](https://docs.oracle.com/javase/specs/jls/se17/html/jls-3.html#jls-3.7)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
/* This is a block comment
   that can span multiple lines */

/* Single-line block comment */
```

**Special features:**
- Block comments cannot be nested

**Further reading:**
- [MDN Web Docs - Comments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#comments)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
#= This is a block comment
   that can span multiple lines =#

#= Single-line block comment =#
```

**Special features:**
- Block comments can be nested

**Further reading:**
- [Julia Documentation - Comments](https://docs.julialang.org/en/v1/manual/documentation/#Comments)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
/* This is a block comment
   that can span multiple lines */

/* Block comments /* can be nested */ */
```

**Special features:**
- Block comments can be nested

**Further reading:**
- [Koka Language Documentation](https://koka-lang.github.io/koka/doc/book.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
/* This is a block comment
   that can span multiple lines */

/* Single-line block comment */
```

**Special features:**
- Block comments cannot be nested

**Further reading:**
- [Kotlin Documentation - Comments](https://kotlinlang.org/docs/kotlin-doc.html#block-comments)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```haskell
/- This is a block comment
   that can span multiple lines -/

/- Block comments /- can be nested -/ -/
```

**Special features:**
- Block comments use `/-` and `-/`
- Block comments can be nested

**Further reading:**
- [Lean 4 Documentation](https://lean-lang.org/lean4/doc/)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
--[[ This is a block comment
     that can span multiple lines ]]

--[=[ Nested block comments ]=]
```

**Special features:**
- Lua supports nested block comments with `--[[ ]]` or `--[=[ ]=]`

**Further reading:**
- [Lua Documentation - Comments](https://www.lua.org/manual/5.4/manual.html#3.1)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
%{ This is a block comment
   that can span multiple lines %}

% Single-line comment
```

**Special features:**
- MATLAB supports block comments with `%{ %}`

**Further reading:**
- [MATLAB Documentation - Comments](https://www.mathworks.com/help/matlab/matlab_prog/comments.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
/* This is a block comment
   that can span multiple lines */

/* Single-line block comment */
```

**Special features:**
- Block comments use C-style `/* ... */`
- Block comments cannot be nested

**Further reading:**
- [Mercury Language Reference - Comments](https://www.mercurylang.org/information/doc-release/mercury_ref/Comments.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
#[ This is a block comment
   that can span multiple lines ]#

#[ Single-line block comment ]#
```

**Special features:**
- Block comments can be nested

**Further reading:**
- [Nim Documentation - Comments](https://nim-lang.org/docs/manual.html#lexical-analysis-comments)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
/* This is a block comment
   that can span multiple lines */

/* Single-line block comment */
```

**Special features:**
- Block comments cannot be nested

**Further reading:**
- [Objective-C Documentation](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
{ This is a block comment
  that can span multiple lines }

(* Alternative syntax for block comments *)
```

**Special features:**
- Object Pascal supports both `{ }` and `(* *)` for block comments

**Further reading:**
- [Delphi Documentation - Comments](https://docwiki.embarcadero.com/RADStudio/Alexandria/en/Comments)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* This is a block comment
   that can span multiple lines *)

(* Single-line block comment *)
```

**Special features:**
- Block comments can be nested

**Further reading:**
- [OCaml Documentation - Comments](https://v2.ocaml.org/manual/lex.html#comments)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
%{ This is a block comment
   that can span multiple lines %}

% Single-line comment
```

**Special features:**
- Octave supports block comments with `%{ %}`

**Further reading:**
- [GNU Octave Documentation - Comments](https://octave.org/doc/v8.1.0/Comments.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
/* This is a block comment
   that can span multiple lines */

/* Single-line block comment */
```

**Special features:**
- Block comments cannot be nested

**Further reading:**
- [Odin Documentation - Comments](https://odin-lang.org/docs/overview/#comments)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
=comment
This is a block comment
that can span multiple lines
=cut

# Single-line comment
```

**Special features:**
- Perl uses POD (Plain Old Documentation) syntax for block comments with `=comment ... =cut`

**Further reading:**
- [Perl Documentation - Comments](https://perldoc.perl.org/perlpod)

</TabItem>
<TabItem value="php" label="PHP">

```php
/* This is a block comment
   that can span multiple lines */

/* Single-line block comment */
```

**Special features:**
- Block comments cannot be nested

**Further reading:**
- [PHP Documentation - Comments](https://www.php.net/manual/en/language.basic-syntax.comments.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
/* This is a block comment
   that can span multiple lines */

/* Single-line block comment */
```

**Special features:**
- Block comments use C-style `/* ... */`
- Block comments cannot be nested

**Further reading:**
- [SWI-Prolog Documentation - Comments](https://www.swi-prolog.org/pldoc/man?section=syntax)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
{- This is a block comment
   that can span multiple lines -}

{- Single-line block comment -}
```

**Special features:**
- Block comments can be nested

**Further reading:**
- [PureScript Documentation](https://www.purescript.org/documentation/)

</TabItem>
<TabItem value="python" label="Python">

```python
# Python only uses line comments
# There are no true block comments
# Each line must be commented individually

"""
This is a docstring, not a comment
and is treated as a string at runtime
"""
```

**Special features:**
- Python does not use true block comments, only line comments with `#`
- Triple-quoted strings (`"""` or `'''`) are sometimes used as block comments but are actually strings

**Further reading:**
- [Python Documentation - Comments](https://docs.python.org/3/reference/lexical_analysis.html#comments)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
#| This is a block comment
   that can span multiple lines |#

#| Single-line block comment |#
```

**Special features:**
- Block comments can be nested

**Further reading:**
- [Racket Documentation - Comments](https://docs.racket-lang.org/reference/comments.html)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
=begin
This is a block comment
that can span multiple lines
=end

# Single-line comment
```

**Special features:**
- Ruby uses `=begin ... =end` for block comments

**Further reading:**
- [Ruby Documentation - Comments](https://docs.ruby-lang.org/en/master/syntax/comments_rdoc.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
/* This is a block comment
   that can span multiple lines */

/* Single-line block comment */
```

**Special features:**
- Block comments cannot be nested

**Further reading:**
- [Rust Book - Comments](https://doc.rust-lang.org/book/ch03-04-comments.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
/* This is a block comment
   that can span multiple lines */

/* Single-line block comment */
```

**Special features:**
- Block comments cannot be nested

**Further reading:**
- [Scala Documentation - Comments](https://docs.scala-lang.org/style/comments.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
#| This is a block comment
   that can span multiple lines |#

#| Single-line block comment |#
```

**Special features:**
- Block comments can be nested

**Further reading:**
- [Scheme R7RS - Comments](https://small.r7rs.org/wiki/Comments/)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
/* This is a block comment
   that can span multiple lines */

/* Single-line block comment */
```

**Special features:**
- Block comments cannot be nested

**Further reading:**
- [Swift Documentation - Comments](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/thebasics/#Comments)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
/* This is a block comment
   that can span multiple lines */

/* Single-line block comment */
```

**Special features:**
- Block comments cannot be nested

**Further reading:**
- [TypeScript Handbook - Comments](https://www.typescriptlang.org/docs/handbook/intro.html)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* This is a block comment
   that can span multiple lines *)

(* Single-line block comment *)
```

**Special features:**
- Block comments can be nested

**Further reading:**
- [Wolfram Language Documentation - Comments](https://reference.wolfram.com/language/guide/Comments.html)

</TabItem>
</Tabs>


## 2.1.2. Line Comments

Comments that span only one line and are introduced by a special character or character sequence.

### Languages {#sprachen}

<Tabs availableTabs={['ada', 'c', 'csharp', 'cpp', 'carbon', 'clojure', 'common-lisp', 'crystal', 'd', 'dart', 'eiffel', 'elixir', 'elm', 'erlang', 'fsharp', 'fortran', 'gleam', 'go', 'groovy', 'haskell', 'haxe', 'idris', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'lua', 'matlab', 'mercury', 'mojo', 'nim', 'objective-c', 'object-pascal', 'ocaml', 'octave', 'odin', 'perl', 'php', 'prolog', 'purescript', 'python', 'r', 'racket', 'roc', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'vbnet', 'v', 'wolfram-language', 'zig']}>
<TabItem value="ada" label="Ada">

```ada
-- This is a line comment in Ada
```

**Special features:**
- Line comments start with `--` and extend to the end of the line

**Further reading:**
- [Ada Reference Manual - Comments](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-2-7.html)

</TabItem>
<TabItem value="c" label="C">

```c
// This is a line comment in C (since C99)
/* Block comment is also available */
```

**Special features:**
- Line comments with `//` are available since C99
- Before C99, only block comments were available

**Further reading:**
- [C Standard - Comments](https://en.cppreference.com/w/c/language/comment)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// This is a line comment in C#
```

**Special features:**
- Line comments start with `//` and extend to the end of the line

**Further reading:**
- [C# Documentation - Comments](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/lexical-structure#comments)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// This is a line comment in C++
```

**Special features:**
- Line comments start with `//` and extend to the end of the line

**Further reading:**
- [C++ Standard - Comments](https://en.cppreference.com/w/cpp/language/comment)

</TabItem>
<TabItem value="carbon" label="Carbon">

```carbon
// This is a line comment in Carbon
```

**Special features:**
- Line comments start with `//` and extend to the end of the line

**Further reading:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; This is a line comment in Clojure
```

**Special features:**
- Line comments start with `;;` and extend to the end of the line

**Further reading:**
- [Clojure Documentation - Comments](https://clojure.org/reference/reader#_comment)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; This is a line comment in Common Lisp
```

**Special features:**
- Line comments start with `;;` and extend to the end of the line

**Further reading:**
- [Common Lisp HyperSpec - Comments](http://www.lispworks.com/documentation/HyperSpec/Body/02_d.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# This is a line comment in Crystal
```

**Special features:**
- Line comments start with `#` and extend to the end of the line

**Further reading:**
- [Crystal Documentation - Comments](https://crystal-lang.org/reference/syntax_and_semantics/literals/comments.html)

</TabItem>
<TabItem value="d" label="D">

```d
// This is a line comment in D
```

**Special features:**
- Line comments start with `//` and extend to the end of the line

**Further reading:**
- [D Language Specification - Comments](https://dlang.org/spec/lex.html#comment)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// This is a line comment in Dart
```

**Special features:**
- Line comments start with `//` and extend to the end of the line

**Further reading:**
- [Dart Language Specification - Comments](https://dart.dev/guides/language/language-tour#comments)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
-- This is a line comment in Eiffel
```

**Special features:**
- Line comments start with `--` and extend to the end of the line

**Further reading:**
- [Eiffel Language Documentation](https://www.eiffel.org/doc/eiffel/Language)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# This is a line comment in Elixir
```

**Special features:**
- Line comments start with `#` and extend to the end of the line

**Further reading:**
- [Elixir Documentation - Comments](https://elixir-lang.org/getting-started/basic-types.html#comments)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- This is a line comment in Elm
```

**Special features:**
- Line comments start with `--` and extend to the end of the line

**Further reading:**
- [Elm Documentation - Comments](https://guide.elm-lang.org/core_language.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% This is a line comment in Erlang
%% Two % are often used for documentation comments
```

**Special features:**
- Line comments start with `%` or `%%` and extend to the end of the line
- `%%` is often used for documentation comments

**Further reading:**
- [Erlang Documentation - Comments](https://www.erlang.org/doc/reference_manual/introduction.html#comments)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// This is a line comment in F#
```

**Special features:**
- Line comments start with `//` and extend to the end of the line

**Further reading:**
- [F# Documentation - Comments](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/comments)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! This is a line comment in Fortran
```

**Special features:**
- Line comments start with `!` and extend to the end of the line

**Further reading:**
- [Fortran Standard - Comments](https://gcc.gnu.org/onlinedocs/gfortran/Comments.html)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// This is a line comment in Gleam
```

**Special features:**
- Line comments start with `//` and extend to the end of the line

**Further reading:**
- [Gleam Documentation - Comments](https://gleam.run/documentation/)

</TabItem>
<TabItem value="go" label="Go">

```go
// This is a line comment in Go
```

**Special features:**
- Line comments start with `//` and extend to the end of the line

**Further reading:**
- [Go Language Specification - Comments](https://go.dev/ref/spec#Comments)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// This is a line comment in Groovy
```

**Special features:**
- Line comments start with `//` and extend to the end of the line

**Further reading:**
- [Groovy Documentation - Comments](https://groovy-lang.org/syntax.html#_comments)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- This is a line comment in Haskell
```

**Special features:**
- Line comments start with `--` and extend to the end of the line

**Further reading:**
- [Haskell Report - Comments](https://www.haskell.org/onlinereport/haskell2010/haskellch2.html#x7-180002.2)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// This is a line comment in Haxe
```

**Special features:**
- Line comments start with `//` and extend to the end of the line

**Further reading:**
- [Haxe Documentation - Comments](https://haxe.org/manual/expression.html#comments)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- This is a line comment in Idris
```

**Special features:**
- Line comments start with `--` and extend to the end of the line

**Further reading:**
- [Idris 2 Documentation](https://idris2.readthedocs.io/en/latest/tutorial/starting.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// This is a line comment in Java
```

**Special features:**
- Line comments start with `//` and extend to the end of the line

**Further reading:**
- [Java Language Specification - Comments](https://docs.oracle.com/javase/specs/jls/se17/html/jls-3.html#jls-3.7)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// This is a line comment in JavaScript
```

**Special features:**
- Line comments start with `//` and extend to the end of the line

**Further reading:**
- [MDN Web Docs - Comments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#comments)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# This is a line comment in Julia
```

**Special features:**
- Line comments start with `#` and extend to the end of the line

**Further reading:**
- [Julia Documentation - Comments](https://docs.julialang.org/en/v1/manual/documentation/#Comments)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// This is a line comment in Koka
```

**Special features:**
- Line comments start with `//` and extend to the end of the line

**Further reading:**
- [Koka Language Documentation](https://koka-lang.github.io/koka/doc/book.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// This is a line comment in Kotlin
```

**Special features:**
- Line comments start with `//` and extend to the end of the line

**Further reading:**
- [Kotlin Documentation - Comments](https://kotlinlang.org/docs/kotlin-doc.html#line-comments)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```haskell
-- This is a line comment in Lean 4
```

**Special features:**
- Line comments start with `--` and extend to the end of the line

**Further reading:**
- [Lean 4 Documentation](https://lean-lang.org/lean4/doc/)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- This is a line comment in Lua
```

**Special features:**
- Line comments start with `--` and extend to the end of the line

**Further reading:**
- [Lua Documentation - Comments](https://www.lua.org/manual/5.4/manual.html#3.1)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% This is a line comment in MATLAB
```

**Special features:**
- Line comments start with `%` and extend to the end of the line

**Further reading:**
- [MATLAB Documentation - Comments](https://www.mathworks.com/help/matlab/matlab_prog/comments.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% This is a line comment in Mercury
```

**Special features:**
- Line comments start with `%` and extend to the end of the line

**Further reading:**
- [Mercury Language Reference - Comments](https://www.mercurylang.org/information/doc-release/mercury_ref/Comments.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# This is a line comment in Mojo
```

**Special features:**
- Line comments start with `#` and extend to the end of the line

**Further reading:**
- [Mojo Documentation](https://docs.modular.com/mojo/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# This is a line comment in Nim
```

**Special features:**
- Line comments start with `#` and extend to the end of the line

**Further reading:**
- [Nim Documentation - Comments](https://nim-lang.org/docs/manual.html#lexical-analysis-comments)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// This is a line comment in Objective-C
```

**Special features:**
- Line comments start with `//` and extend to the end of the line

**Further reading:**
- [Objective-C Documentation](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// This is a line comment in Object Pascal
```

**Special features:**
- Line comments start with `//` and extend to the end of the line

**Further reading:**
- [Delphi Documentation - Comments](https://docwiki.embarcadero.com/RADStudio/Alexandria/en/Comments)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* OCaml uses block comments for line comments *)
```

**Special features:**
- OCaml uses block comments `(* *)` also for single-line comments

**Further reading:**
- [OCaml Documentation - Comments](https://v2.ocaml.org/manual/lex.html#comments)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
% This is a line comment in Octave
```

**Special features:**
- Line comments start with `%` and extend to the end of the line

**Further reading:**
- [GNU Octave Documentation - Comments](https://octave.org/doc/v8.1.0/Comments.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// This is a line comment in Odin
```

**Special features:**
- Line comments start with `//` and extend to the end of the line

**Further reading:**
- [Odin Documentation - Comments](https://odin-lang.org/docs/overview/#comments)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# This is a line comment in Perl
```

**Special features:**
- Line comments start with `#` and extend to the end of the line

**Further reading:**
- [Perl Documentation - Comments](https://perldoc.perl.org/perlsyn#Comments)

</TabItem>
<TabItem value="php" label="PHP">

```php
// This is a line comment in PHP
# Alternative syntax with #
```

**Special features:**
- Line comments can start with `//` or `#` and extend to the end of the line

**Further reading:**
- [PHP Documentation - Comments](https://www.php.net/manual/en/language.basic-syntax.comments.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% This is a line comment in Prolog
%% Two % are often used for documentation comments
```

**Special features:**
- Line comments start with `%` and extend to the end of the line
- `%%` is conventionally used for documentation comments

**Further reading:**
- [SWI-Prolog Documentation - Comments](https://www.swi-prolog.org/pldoc/man?section=syntax)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- This is a line comment in PureScript
```

**Special features:**
- Line comments start with `--` and extend to the end of the line

**Further reading:**
- [PureScript Documentation](https://www.purescript.org/documentation/)

</TabItem>
<TabItem value="python" label="Python">

```python
# This is a line comment in Python
```

**Special features:**
- Line comments start with `#` and extend to the end of the line

**Further reading:**
- [Python Documentation - Comments](https://docs.python.org/3/reference/lexical_analysis.html#comments)

</TabItem>
<TabItem value="r" label="R">

```r
# This is a line comment in R
```

**Special features:**
- Line comments start with `#` and extend to the end of the line

**Further reading:**
- [R Documentation - Comments](https://cran.r-project.org/doc/manuals/r-release/R-lang.html#Comments)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
; This is a line comment in Racket
```

**Special features:**
- Line comments start with `;` and extend to the end of the line

**Further reading:**
- [Racket Documentation - Comments](https://docs.racket-lang.org/reference/comments.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
# This is a line comment in Roc
```

**Special features:**
- Line comments start with `#` and extend to the end of the line

**Further reading:**
- [Roc Documentation](https://www.roc-lang.org/tutorial)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# This is a line comment in Ruby
```

**Special features:**
- Line comments start with `#` and extend to the end of the line

**Further reading:**
- [Ruby Documentation - Comments](https://docs.ruby-lang.org/en/master/syntax/comments_rdoc.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// This is a line comment in Rust
```

**Special features:**
- Line comments start with `//` and extend to the end of the line

**Further reading:**
- [Rust Book - Comments](https://doc.rust-lang.org/book/ch03-04-comments.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// This is a line comment in Scala
```

**Special features:**
- Line comments start with `//` and extend to the end of the line

**Further reading:**
- [Scala Documentation - Comments](https://docs.scala-lang.org/style/comments.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
; This is a line comment in Scheme
```

**Special features:**
- Line comments start with `;` and extend to the end of the line

**Further reading:**
- [Scheme R7RS - Comments](https://small.r7rs.org/wiki/Comments/)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// This is a line comment in Swift
```

**Special features:**
- Line comments start with `//` and extend to the end of the line

**Further reading:**
- [Swift Documentation - Comments](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/thebasics/#Comments)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// This is a line comment in TypeScript
```

**Special features:**
- Line comments start with `//` and extend to the end of the line

**Further reading:**
- [TypeScript Handbook - Comments](https://www.typescriptlang.org/docs/handbook/intro.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' This is a line comment in VB.NET
```

**Special features:**
- Line comments start with `'` and extend to the end of the line

**Further reading:**
- [VB.NET Documentation - Comments](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/program-structure/comments-in-code)

</TabItem>
<TabItem value="v" label="V">

```v
// This is a line comment in V
```

**Special features:**
- Line comments start with `//` and extend to the end of the line

**Further reading:**
- [V Documentation - Comments](https://github.com/vlang/v/blob/master/doc/docs.md#comments)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Wolfram Language uses block comments also for line comments *)
```

**Special features:**
- Wolfram Language uses block comments `(* *)` also for single-line comments

**Further reading:**
- [Wolfram Language Documentation - Comments](https://reference.wolfram.com/language/guide/Comments.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// This is a line comment in Zig
```

**Special features:**
- Line comments start with `//` and extend to the end of the line

**Further reading:**
- [Zig Documentation - Comments](https://ziglang.org/documentation/master/#Comments)

</TabItem>
</Tabs>


## 2.1.3. Doc Comments

Special comments for documenting code elements that can often be processed by documentation tools.

### Languages {#sprachen}

<Tabs availableTabs={['clojure', 'common-lisp', 'csharp', 'd', 'dart', 'elixir', 'fsharp', 'gleam', 'go', 'groovy', 'haskell', 'idris', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'nim', 'objective-c', 'ocaml', 'perl', 'php', 'prolog', 'python', 'roc', 'rust', 'scala', 'swift', 'typescript', 'v', 'wolfram-language', 'zig']}>
<TabItem value="csharp" label="C#">

```csharp
/// <summary>
/// Calculates the sum of two numbers.
/// </summary>
/// <param name="a">First number</param>
/// <param name="b">Second number</param>
/// <returns>The sum of a and b</returns>
int Add(int a, int b)
{
    return a + b;
}
```

**Special features:**
- XML documentation comments with `///` are processed by IntelliSense and documentation tools

**Further reading:**
- [C# Documentation - XML Documentation Comments](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/xmldoc/)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
/// Calculates the sum of two numbers.
/// 
/// [a] is the first number.
/// [b] is the second number.
/// 
/// Returns the sum of a and b.
int add(int a, int b) {
  return a + b;
}
```

**Special features:**
- Dart doc comments with `///` are processed by dartdoc
- Supports Markdown formatting

**Further reading:**
- [Dart Documentation - Comments](https://dart.dev/guides/language/effective-dart/documentation)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
@doc """
Calculates the sum of two numbers.

## Parameters

  * `a` - First number
  * `b` - Second number

## Returns

The sum of a and b.
"""
def add(a, b) do
  a + b
end
```

**Special features:**
- Elixir uses `@doc` attributes for documentation
- Supports Markdown formatting

**Further reading:**
- [Elixir Documentation - Module Attributes](https://elixir-lang.org/getting-started/module-attributes.html#as-annotations)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
/// Calculates the sum of two numbers.
/// 
/// ## Parameters
/// 
/// - `a` - First number
/// - `b` - Second number
/// 
/// ## Returns
/// 
/// The sum of a and b.
let add a b = a + b
```

**Special features:**
- F# XML documentation comments with `///` are processed by IntelliSense
- Supports XML tags or Markdown formatting

**Further reading:**
- [F# Documentation - XML Documentation](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/xml-documentation)

</TabItem>
<TabItem value="go" label="Go">

```go
// Add calculates the sum of two numbers.
//
// a is the first number.
// b is the second number.
//
// Returns the sum of a and b.
func Add(a, b int) int {
    return a + b
}
```

**Special features:**
- Go doc comments start directly before the declared element
- Processed by `godoc`
- First line should be a summary

**Further reading:**
- [Go Documentation - Comments](https://go.dev/doc/effective_go#commentary)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
/**
 * Calculates the sum of two numbers.
 * 
 * @param a First number
 * @param b Second number
 * @return The sum of a and b
 */
int add(int a, int b) {
    return a + b
}
```

**Special features:**
- Groovy uses Javadoc-like syntax with `/** */`
- Supports Javadoc tags like `@param`, `@return`, etc.

**Further reading:**
- [Groovy Documentation - Documentation Comments](https://groovy-lang.org/structure.html#_documentation_comments)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- | Calculates the sum of two numbers.
-- 
-- @a@ is the first number.
-- @b@ is the second number.
-- 
-- Returns the sum of a and b.
add :: Int -> Int -> Int
add a b = a + b
```

**Special features:**
- Haskell doc comments start with `-- |` for the first line
- Further lines use `--`
- Processed by Haddock

**Further reading:**
- [Haskell Documentation - Haddock](https://www.haskell.org/haddock/)

</TabItem>
<TabItem value="java" label="Java">

```java
/**
 * Calculates the sum of two numbers.
 * 
 * @param a First number
 * @param b Second number
 * @return The sum of a and b
 */
public int add(int a, int b) {
    return a + b;
}
```

**Special features:**
- Javadoc comments use `/** */`
- Supports special tags like `@param`, `@return`, `@throws`, etc.
- Processed by javadoc tool

**Further reading:**
- [Java Documentation - Javadoc](https://docs.oracle.com/javase/8/docs/technotes/tools/windows/javadoc.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
/**
 * Calculates the sum of two numbers.
 * 
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} The sum of a and b
 */
function add(a, b) {
    return a + b;
}
```

**Special features:**
- JSDoc comments use `/** */`
- Supports type information in curly braces
- Processed by JSDoc tools

**Further reading:**
- [JSDoc Documentation](https://jsdoc.app/)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
"""
    add(a, b)

Calculates the sum of two numbers.

# Arguments
- `a`: First number
- `b`: Second number

# Returns
The sum of a and b.
"""
function add(a, b)
    return a + b
end
```

**Special features:**
- Julia uses triple-quoted strings `"""` for documentation
- Supports Markdown formatting
- Processed by Julia's documentation system

**Further reading:**
- [Julia Documentation - Documentation](https://docs.julialang.org/en/v1/manual/documentation/)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
/// Calculates the sum of two numbers.
///
/// `a` is the first number.
/// `b` is the second number.
///
/// Returns the sum of a and b.
fun add(a : int, b : int) : int
  a + b
```

**Special features:**
- Doc comments start with `///`
- Processed by Koka documentation generation

**Further reading:**
- [Koka Language Documentation](https://koka-lang.github.io/koka/doc/book.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
/**
 * Calculates the sum of two numbers.
 * 
 * @param a First number
 * @param b Second number
 * @return The sum of a and b
 */
fun add(a: Int, b: Int): Int {
    return a + b
}
```

**Special features:**
- Kotlin doc comments use `/** */` (KDoc)
- Supports Markdown formatting
- Processed by Dokka

**Further reading:**
- [Kotlin Documentation - KDoc](https://kotlinlang.org/docs/kotlin-doc.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```haskell
/-- Calculates the sum of two numbers.

`a` is the first number.
`b` is the second number.

Returns the sum of a and b. -/
def add (a b : Nat) : Nat :=
  a + b

/-! Module documentation for the current module.
    Placed at the beginning of the file. -/
```

**Special features:**
- Doc comments use `/--` ... `-/` for declarations
- Module documentation uses `/-!` ... `-/`
- Supports Markdown formatting
- Processed by Lean's documentation system and the IDE

**Further reading:**
- [Lean 4 Documentation](https://lean-lang.org/lean4/doc/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
## Calculates the sum of two numbers.
## 
## Parameters:
##   a: First number
##   b: Second number
## 
## Returns:
##   The sum of a and b.
proc add(a, b: int): int =
  return a + b
```

**Special features:**
- Nim doc comments use `##` (double `#`)
- Processed by nimdoc

**Further reading:**
- [Nim Documentation - Documentation Comments](https://nim-lang.org/docs/docgen.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(** Calculates the sum of two numbers.
    
    @param a First number
    @param b Second number
    @return The sum of a and b *)
let add a b = a + b
```

**Special features:**
- OCaml doc comments use `(** *)`
- Supports special tags like `@param`, `@return`, etc.
- Processed by ocamldoc

**Further reading:**
- [OCaml Documentation - Documentation Comments](https://v2.ocaml.org/manual/ocamldoc.html)

</TabItem>
<TabItem value="php" label="PHP">

```php
/**
 * Calculates the sum of two numbers.
 * 
 * @param int $a First number
 * @param int $b Second number
 * @return int The sum of a and b
 */
function add(int $a, int $b): int {
    return $a + $b;
}
```

**Special features:**
- PHPDoc comments use `/** */`
- Supports type information in tags
- Processed by phpDocumentor

**Further reading:**
- [PHPDoc Documentation](https://docs.phpdoc.org/)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
%! add(+A:integer, +B:integer, -Sum:integer) is det.
%
%  Calculates the sum of two numbers.
%
%  @arg A   First number
%  @arg B   Second number
%  @arg Sum The sum of A and B

add(A, B, Sum) :-
    Sum is A + B.

/** <module> Mathematical helper predicates

This module provides mathematical helper predicates.

@author Example author
@license MIT
*/
```

**Special features:**
- SWI-Prolog supports PlDoc documentation comments with `%!` for predicates
- `/** <module> ... */` for module documentation
- Supports tags like `@arg`, `@author`, `@license`, `@see`
- Processed by `doc_server/1` and online documentation

**Further reading:**
- [SWI-Prolog PlDoc Documentation](https://www.swi-prolog.org/pldoc/doc_for?object=section(%27packages/pldoc.html%27))

</TabItem>
<TabItem value="python" label="Python">

```python
def add(a: int, b: int) -> int:
    """Calculates the sum of two numbers.
    
    Args:
        a: First number
        b: Second number
    
    Returns:
        The sum of a and b.
    """
    return a + b
```

**Special features:**
- Python docstrings use triple-quoted strings `"""` or `'''`
- Often follow Google or NumPy docstring style
- Processed by tools like Sphinx

**Further reading:**
- [Python Documentation - Docstrings](https://docs.python.org/3/tutorial/classes.html#documentation-strings)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
/// Calculates the sum of two numbers.
/// 
/// # Arguments
/// 
/// * `a` - First number
/// * `b` - Second number
/// 
/// # Returns
/// 
/// The sum of a and b.
pub fn add(a: i32, b: i32) -> i32 {
    a + b
}
```

**Special features:**
- Rust doc comments use `///` for public API documentation
- Supports Markdown formatting
- Processed by rustdoc

**Further reading:**
- [Rust Book - Documentation Comments](https://doc.rust-lang.org/book/ch14-02-publishing-to-crates-io.html#documentation-comments)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
/** Calculates the sum of two numbers.
  * 
  * @param a First number
  * @param b Second number
  * @return The sum of a and b
  */
def add(a: Int, b: Int): Int = {
  a + b
}
```

**Special features:**
- Scala doc comments use `/** */`
- Supports Javadoc-like tags
- Processed by Scaladoc

**Further reading:**
- [Scala Documentation - Scaladoc](https://docs.scala-lang.org/style/scaladoc.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
/// Calculates the sum of two numbers.
/// 
/// - Parameters:
///   - a: First number
///   - b: Second number
/// - Returns: The sum of a and b
func add(a: Int, b: Int) -> Int {
    return a + b
}
```

**Special features:**
- Swift doc comments use `///`
- Supports special Markdown formatting for parameters and return values
- Processed by Xcode and Swift doc tools

**Further reading:**
- [Swift Documentation - Documentation Comments](https://www.swift.org/documentation/api-design-guidelines/#write-a-documentation-comment-for-every-declaration)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
/**
 * Calculates the sum of two numbers.
 * 
 * @param a - First number
 * @param b - Second number
 * @returns The sum of a and b
 */
function add(a: number, b: number): number {
    return a + b;
}
```

**Special features:**
- TypeScript doc comments use JSDoc syntax `/** */`
- Supports type information (often redundant with TypeScript types)
- Processed by TypeScript editors and JSDoc tools

**Further reading:**
- [TypeScript Handbook - JSDoc](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
/// Calculates the sum of two numbers.
/// 
/// a: First number
/// b: Second number
/// 
/// Returns: The sum of a and b.
pub fn add(a: i32, b: i32) i32 {
    return a + b;
}
```

**Special features:**
- Zig doc comments use `///`
- Supports Markdown formatting
- Processed by zig-doc

**Further reading:**
- [Zig Documentation - Documentation Comments](https://ziglang.org/documentation/master/#Documentation-Comments)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Docstrings in functions
(defn factorial
  "Calculates the factorial of n.
  n must be a non-negative integer."
  [n]
  (if (<= n 1) 1 (* n (factorial (dec n)))))

;; Retrieve docstring
(doc factorial)

;; Docstrings in namespaces
(ns my-app.core
  "Main module of the application.")
```

**Special features:**
- Docstrings as string directly after the function name
- `doc` to retrieve documentation in the REPL
- Also available for `def`, `defn`, `defmacro`, `ns`
- Docstrings are stored as metadata

**Further reading:**
- [Clojure Documentation - Special Forms](https://clojure.org/reference/special_forms#def)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Docstrings for functions
(defun factorial (n)
  "Calculates the factorial of N.
N must be a non-negative integer."
  (if (<= n 1) 1
      (* n (factorial (1- n)))))

;; Docstrings for variables
(defvar *max-retries* 3
  "Maximum number of retry attempts.")

;; Query docstring
(documentation 'factorial 'function)
```

**Special features:**
- Docstrings are strings directly after the parameter list
- Supported for `defun`, `defvar`, `defclass`, `defgeneric`, etc.
- Retrievable at runtime via `(documentation symbol type)`
- No special syntax needed (normal string)

**Further reading:**
- [Common Lisp HyperSpec - documentation](http://www.lispworks.com/documentation/HyperSpec/Body/f_docume.htm)

</TabItem>
<TabItem value="d" label="D">

```d
/// Calculates the sum of two numbers.
///
/// Params:
///   a = First number
///   b = Second number
///
/// Returns:
///   The sum of a and b.
int add(int a, int b) {
    return a + b;
}

/**
 * A class representing a point in 2D space.
 *
 * Examples:
 * ---
 * auto p = new Point(1.0, 2.0);
 * assert(p.x == 1.0);
 * ---
 */
class Point {
    double x, y;
    this(double x, double y) { this.x = x; this.y = y; }
}
```

**Special features:**
- `///` for single-line doc comments (Ddoc)
- `/** ... */` for multi-line doc comments
- `/++ ... +/` for nestable doc comments
- Sections: `Params:`, `Returns:`, `Examples:`, `Throws:`, `See_Also:`
- DMD generates HTML documentation from Ddoc comments

**Further reading:**
- [D Language Specification - Ddoc](https://dlang.org/spec/ddoc.html)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
/// Calculates the sum of two numbers.
///
/// ## Example
///
/// ```gleam
/// add(1, 2)  // -> 3
/// ```
pub fn add(a: Int, b: Int) -> Int {
  a + b
}
```

**Special features:**
- Doc comments start with `///`
- Support Markdown formatting
- Are included in generated documentation

**Further reading:**
- [Gleam Documentation - Comments](https://tour.gleam.run/basics/comments/)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
||| Adds two integer values.
||| @a the first summand
||| @b the second summand
add : (a : Int) -> (b : Int) -> Int
add a b = a + b
```

**Special features:**
- Doc comments start with `|||`
- `@param` syntax for parameter documentation
- Displayed by the Idris IDE and REPL

**Further reading:**
- [Idris 2 Documentation](https://idris2.readthedocs.io/en/latest/tutorial/starting.html)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
/// Calculates the sum of two integers.
///
/// @param a The first summand.
/// @param b The second summand.
/// @return The sum of a and b.
- (int)add:(int)a with:(int)b {
    return a + b;
}

/**
 * Creates a formatted greeting.
 *
 * @param name The name of the person.
 * @return A formatted greeting string.
 */
- (NSString *)greet:(NSString *)name {
    return [NSString stringWithFormat:@"Hallo, %@!", name];
}
```

**Special features:**
- `///` and `/** */` for documentation comments
- `@param`, `@return`, `@see`, `@note` tags
- Xcode displays doc comments in Quick Help
- Compatible with HeaderDoc and Doxygen

**Further reading:**
- [Apple Documentation - HeaderDoc](https://developer.apple.com/library/archive/documentation/DeveloperTools/Conceptual/HeaderDoc/intro/intro.html)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
=head1 NAME

Math::Utils - Mathematical utility functions

=head1 SYNOPSIS

    use Math::Utils;
    my $result = add(5, 3);

=head1 DESCRIPTION

This module provides mathematical utility functions.

=head2 add($a, $b)

Adds two numbers and returns the result.

=cut

sub add {
    my ($a, $b) = @_;
    return $a + $b;
}
```

**Special features:**
- POD (Plain Old Documentation) is embedded in Perl
- Starts with `=` at the beginning of a line, ends with `=cut`
- Can be extracted and displayed with `perldoc`

**Further reading:**
- [Perl Documentation - perlpod](https://perldoc.perl.org/perlpod)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
## Adds two numbers.
## Returns the sum.
add : I64, I64 -> I64
add = \a, b -> a + b
```

**Special features:**
- Doc comments start with `##`
- Used for documentation of modules and functions

**Further reading:**
- [Roc Documentation](https://www.roc-lang.org/tutorial)

</TabItem>
<TabItem value="v" label="V">

```v
// Doc comments
/// Calculates the area of a circle.
/// `radius` - the radius of the circle
fn area(radius f64) f64 {
    return 3.14159 * radius * radius
}
```

**Special features:**
- `///` for documentation comments
- Processed by `v doc`
- Can contain Markdown formatting

**Further reading:**
- [V Documentation - Comments](https://github.com/vlang/v/blob/master/doc/docs.md#comments)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Doc comments via Usage Messages *)
Add::usage = "Add[a, b] adds two numbers a and b."
Add[a_, b_] := a + b

?Add  (* Displays the Usage Message *)
```

**Special features:**
- `Symbol::usage` defines documentation for functions
- `?Symbol` displays the Usage Message
- Usage Messages are also displayed as tooltips in notebooks

**Further reading:**
- [Wolfram Language Documentation - Usage Messages](https://reference.wolfram.com/language/ref/MessageName.html)

</TabItem>
</Tabs>

