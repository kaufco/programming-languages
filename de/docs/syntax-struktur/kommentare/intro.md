---
slug: /syntax-struktur/kommentare
title: 2.1. Kommentare
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 2.1. Kommentare

Kommentar-Syntax und Dokumentation.

## 2.1.1. Block-Kommentare

Kommentare, die über mehrere Zeilen erstrecken können und durch spezielle Delimiter begrenzt werden.

### Sprachen {#sprachen}

<Tabs availableTabs={['c', 'csharp', 'cpp', 'carbon', 'clojure', 'common-lisp', 'crystal', 'd', 'dart', 'elm', 'fsharp', 'go', 'groovy', 'haskell', 'haxe', 'idris', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'lua', 'matlab', 'mercury', 'nim', 'objective-c', 'object-pascal', 'ocaml', 'octave', 'odin', 'perl', 'php', 'prolog', 'purescript', 'racket', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'wolfram-language']} orangeTabs={['python']}>
<TabItem value="c" label="C">

```c
/* Dies ist ein Block-Kommentar
   der sich über mehrere Zeilen
   erstrecken kann */

/* Einzeiliger Block-Kommentar */
```

**Besonderheiten:**
- Block-Kommentare können nicht verschachtelt werden

**Weiterführende Links:**
- [C Standard - Comments](https://en.cppreference.com/w/c/language/comment)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
/* Dies ist ein Block-Kommentar
   der sich über mehrere Zeilen
   erstrecken kann */

/* Einzeiliger Block-Kommentar */
```

**Besonderheiten:**
- Block-Kommentare können nicht verschachtelt werden

**Weiterführende Links:**
- [C# Documentation - Comments](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/lexical-structure#comments)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
/* Dies ist ein Block-Kommentar
   der sich über mehrere Zeilen
   erstrecken kann */

/* Einzeiliger Block-Kommentar */
```

**Besonderheiten:**
- Block-Kommentare können nicht verschachtelt werden

**Weiterführende Links:**
- [C++ Standard - Comments](https://en.cppreference.com/w/cpp/language/comment)

</TabItem>
<TabItem value="carbon" label="Carbon">

```carbon
/* Dies ist ein Block-Kommentar
   der sich über mehrere Zeilen
   erstrecken kann */

/* Einzeiliger Block-Kommentar */
```

**Besonderheiten:**
- Carbon verwendet C++-ähnliche Block-Kommentar-Syntax

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
(comment
  Dies ist ein Block-Kommentar
  der sich über mehrere Zeilen
  erstrecken kann
  und Code enthalten kann, der nicht ausgeführt wird)
```

**Besonderheiten:**
- Clojure verwendet `(comment ...)` für Block-Kommentare
- Der Code innerhalb von `comment` wird nicht ausgeführt, kann aber syntaktisch gültig sein

**Weiterführende Links:**
- [Clojure Documentation - Comments](https://clojure.org/reference/reader#_comment)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
#|
Dies ist ein Block-Kommentar
der sich über mehrere Zeilen
erstrecken kann
|#
```

**Besonderheiten:**
- Block-Kommentare können verschachtelt werden

**Weiterführende Links:**
- [Common Lisp HyperSpec - Comments](http://www.lispworks.com/documentation/HyperSpec/Body/02_d.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
=begin
Dies ist ein Block-Kommentar
der sich über mehrere Zeilen
erstrecken kann
=end
```

**Besonderheiten:**
- Crystal verwendet Ruby-ähnliche Block-Kommentar-Syntax

**Weiterführende Links:**
- [Crystal Documentation - Comments](https://crystal-lang.org/reference/syntax_and_semantics/literals/comments.html)

</TabItem>
<TabItem value="d" label="D">

```d
/* Dies ist ein Block-Kommentar
   der sich über mehrere Zeilen
   erstrecken kann */

/* Einzeiliger Block-Kommentar */

/+ Verschachtelbare Block-Kommentare +/
```

**Besonderheiten:**
- D unterstützt sowohl C-Style `/* */` als auch verschachtelbare `/+ +/` Block-Kommentare

**Weiterführende Links:**
- [D Language Specification - Comments](https://dlang.org/spec/lex.html#comment)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
/* Dies ist ein Block-Kommentar
   der sich über mehrere Zeilen
   erstrecken kann */

/* Einzeiliger Block-Kommentar */
```

**Besonderheiten:**
- Block-Kommentare können nicht verschachtelt werden

**Weiterführende Links:**
- [Dart Language Specification - Comments](https://dart.dev/guides/language/language-tour#comments)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
{- Dies ist ein Block-Kommentar
   der sich über mehrere Zeilen
   erstrecken kann -}

{- Einzeiliger Block-Kommentar -}
```

**Besonderheiten:**
- Block-Kommentare können verschachtelt werden

**Weiterführende Links:**
- [Elm Documentation - Comments](https://guide.elm-lang.org/core_language.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
(* Dies ist ein Block-Kommentar
   der sich über mehrere Zeilen
   erstrecken kann *)

(* Einzeiliger Block-Kommentar *)
```

**Besonderheiten:**
- Block-Kommentare können verschachtelt werden

**Weiterführende Links:**
- [F# Documentation - Comments](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/comments)

</TabItem>
<TabItem value="go" label="Go">

```go
/* Dies ist ein Block-Kommentar
   der sich über mehrere Zeilen
   erstrecken kann */

/* Einzeiliger Block-Kommentar */
```

**Besonderheiten:**
- Block-Kommentare können nicht verschachtelt werden

**Weiterführende Links:**
- [Go Language Specification - Comments](https://go.dev/ref/spec#Comments)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
/* Dies ist ein Block-Kommentar
   der sich über mehrere Zeilen
   erstrecken kann */

/* Einzeiliger Block-Kommentar */
```

**Besonderheiten:**
- Block-Kommentare können nicht verschachtelt werden

**Weiterführende Links:**
- [Groovy Documentation - Comments](https://groovy-lang.org/syntax.html#_comments)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
{- Dies ist ein Block-Kommentar
   der sich über mehrere Zeilen
   erstrecken kann -}

{- Einzeiliger Block-Kommentar -}
```

**Besonderheiten:**
- Block-Kommentare können verschachtelt werden

**Weiterführende Links:**
- [Haskell Report - Comments](https://www.haskell.org/onlinereport/haskell2010/haskellch2.html#x7-180002.2)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
/* Dies ist ein Block-Kommentar
   der sich über mehrere Zeilen
   erstrecken kann */

/* Einzeiliger Block-Kommentar */
```

**Besonderheiten:**
- Block-Kommentare können nicht verschachtelt werden

**Weiterführende Links:**
- [Haxe Documentation - Comments](https://haxe.org/manual/expression.html#comments)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
{- Dies ist ein Block-Kommentar
   der sich über mehrere Zeilen
   erstrecken kann -}

{- Einzeiliger Block-Kommentar -}
```

**Besonderheiten:**
- Block-Kommentare können verschachtelt werden

**Weiterführende Links:**
- [Idris 2 Documentation](https://idris2.readthedocs.io/en/latest/tutorial/starting.html)

</TabItem>
<TabItem value="java" label="Java">

```java
/* Dies ist ein Block-Kommentar
   der sich über mehrere Zeilen
   erstrecken kann */

/* Einzeiliger Block-Kommentar */
```

**Besonderheiten:**
- Block-Kommentare können nicht verschachtelt werden

**Weiterführende Links:**
- [Java Language Specification - Comments](https://docs.oracle.com/javase/specs/jls/se17/html/jls-3.html#jls-3.7)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
/* Dies ist ein Block-Kommentar
   der sich über mehrere Zeilen
   erstrecken kann */

/* Einzeiliger Block-Kommentar */
```

**Besonderheiten:**
- Block-Kommentare können nicht verschachtelt werden

**Weiterführende Links:**
- [MDN Web Docs - Comments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#comments)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
#= Dies ist ein Block-Kommentar
   der sich über mehrere Zeilen
   erstrecken kann =#

#= Einzeiliger Block-Kommentar =#
```

**Besonderheiten:**
- Block-Kommentare können verschachtelt werden

**Weiterführende Links:**
- [Julia Documentation - Comments](https://docs.julialang.org/en/v1/manual/documentation/#Comments)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
/* Dies ist ein Block-Kommentar
   der sich über mehrere Zeilen
   erstrecken kann */

/* Block-Kommentare /* können verschachtelt */ werden */
```

**Besonderheiten:**
- Block-Kommentare können verschachtelt werden

**Weiterführende Links:**
- [Koka Language Documentation](https://koka-lang.github.io/koka/doc/book.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
/* Dies ist ein Block-Kommentar
   der sich über mehrere Zeilen
   erstrecken kann */

/* Einzeiliger Block-Kommentar */
```

**Besonderheiten:**
- Block-Kommentare können nicht verschachtelt werden

**Weiterführende Links:**
- [Kotlin Documentation - Comments](https://kotlinlang.org/docs/kotlin-doc.html#block-comments)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```haskell
/- Dies ist ein Block-Kommentar
   der sich über mehrere Zeilen
   erstrecken kann -/

/- Block-Kommentare /- können verschachtelt -/ werden -/
```

**Besonderheiten:**
- Block-Kommentare verwenden `/-` und `-/`
- Block-Kommentare können verschachtelt werden

**Weiterführende Links:**
- [Lean 4 Documentation](https://lean-lang.org/lean4/doc/)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
--[[ Dies ist ein Block-Kommentar
     der sich über mehrere Zeilen
     erstrecken kann ]]

--[=[ Verschachtelbare Block-Kommentare ]=]
```

**Besonderheiten:**
- Lua unterstützt verschachtelbare Block-Kommentare mit `--[[ ]]` oder `--[=[ ]=]`

**Weiterführende Links:**
- [Lua Documentation - Comments](https://www.lua.org/manual/5.4/manual.html#3.1)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
%{ Dies ist ein Block-Kommentar
   der sich über mehrere Zeilen
   erstrecken kann %}

% Einzeiliger Kommentar
```

**Besonderheiten:**
- MATLAB unterstützt Block-Kommentare mit `%{ %}`

**Weiterführende Links:**
- [MATLAB Documentation - Comments](https://www.mathworks.com/help/matlab/matlab_prog/comments.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
/* Dies ist ein Block-Kommentar
   der sich über mehrere Zeilen
   erstrecken kann */

/* Einzeiliger Block-Kommentar */
```

**Besonderheiten:**
- Block-Kommentare verwenden C-Style `/* ... */`
- Block-Kommentare können nicht verschachtelt werden

**Weiterführende Links:**
- [Mercury Language Reference - Comments](https://www.mercurylang.org/information/doc-release/mercury_ref/Comments.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
#[ Dies ist ein Block-Kommentar
   der sich über mehrere Zeilen
   erstrecken kann ]#

#[ Einzeiliger Block-Kommentar ]#
```

**Besonderheiten:**
- Block-Kommentare können verschachtelt werden

**Weiterführende Links:**
- [Nim Documentation - Comments](https://nim-lang.org/docs/manual.html#lexical-analysis-comments)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
/* Dies ist ein Block-Kommentar
   der sich über mehrere Zeilen
   erstrecken kann */

/* Einzeiliger Block-Kommentar */
```

**Besonderheiten:**
- Block-Kommentare können nicht verschachtelt werden

**Weiterführende Links:**
- [Objective-C Documentation](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
{ Dies ist ein Block-Kommentar
  der sich über mehrere Zeilen
  erstrecken kann }

(* Alternative Syntax für Block-Kommentare *)
```

**Besonderheiten:**
- Object Pascal unterstützt sowohl `{ }` als auch `(* *)` für Block-Kommentare

**Weiterführende Links:**
- [Delphi Documentation - Comments](https://docwiki.embarcadero.com/RADStudio/Alexandria/en/Comments)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Dies ist ein Block-Kommentar
   der sich über mehrere Zeilen
   erstrecken kann *)

(* Einzeiliger Block-Kommentar *)
```

**Besonderheiten:**
- Block-Kommentare können verschachtelt werden

**Weiterführende Links:**
- [OCaml Documentation - Comments](https://v2.ocaml.org/manual/lex.html#comments)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
%{ Dies ist ein Block-Kommentar
   der sich über mehrere Zeilen
   erstrecken kann %}

% Einzeiliger Kommentar
```

**Besonderheiten:**
- Octave unterstützt Block-Kommentare mit `%{ %}`

**Weiterführende Links:**
- [GNU Octave Documentation - Comments](https://octave.org/doc/v8.1.0/Comments.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
/* Dies ist ein Block-Kommentar
   der sich über mehrere Zeilen
   erstrecken kann */

/* Einzeiliger Block-Kommentar */
```

**Besonderheiten:**
- Block-Kommentare können nicht verschachtelt werden

**Weiterführende Links:**
- [Odin Documentation - Comments](https://odin-lang.org/docs/overview/#comments)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
=comment
Dies ist ein Block-Kommentar
der sich über mehrere Zeilen
erstrecken kann
=cut

# Einzeiliger Kommentar
```

**Besonderheiten:**
- Perl verwendet POD (Plain Old Documentation) Syntax für Block-Kommentare mit `=comment ... =cut`

**Weiterführende Links:**
- [Perl Documentation - Comments](https://perldoc.perl.org/perlpod)

</TabItem>
<TabItem value="php" label="PHP">

```php
/* Dies ist ein Block-Kommentar
   der sich über mehrere Zeilen
   erstrecken kann */

/* Einzeiliger Block-Kommentar */
```

**Besonderheiten:**
- Block-Kommentare können nicht verschachtelt werden

**Weiterführende Links:**
- [PHP Documentation - Comments](https://www.php.net/manual/en/language.basic-syntax.comments.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
/* Dies ist ein Block-Kommentar
   der sich über mehrere Zeilen
   erstrecken kann */

/* Einzeiliger Block-Kommentar */
```

**Besonderheiten:**
- Block-Kommentare verwenden C-Style `/* ... */`
- Block-Kommentare können nicht verschachtelt werden

**Weiterführende Links:**
- [SWI-Prolog Documentation - Comments](https://www.swi-prolog.org/pldoc/man?section=syntax)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
{- Dies ist ein Block-Kommentar
   der sich über mehrere Zeilen
   erstrecken kann -}

{- Einzeiliger Block-Kommentar -}
```

**Besonderheiten:**
- Block-Kommentare können verschachtelt werden

**Weiterführende Links:**
- [PureScript Documentation](https://www.purescript.org/documentation/)

</TabItem>
<TabItem value="python" label="Python">

```python
# Python verwendet nur Zeilenkommentare
# Es gibt keine echten Block-Kommentare
# Jede Zeile muss einzeln kommentiert werden

"""
Dies ist ein Docstring, kein Kommentar
und wird zur Laufzeit als String behandelt
"""
```

**Besonderheiten:**
- Python verwendet keine echten Block-Kommentare, sondern nur Zeilenkommentare mit `#`
- Triple-Quoted Strings (`"""` oder `'''`) werden manchmal als Block-Kommentare verwendet, sind aber tatsächlich Strings

**Weiterführende Links:**
- [Python Documentation - Comments](https://docs.python.org/3/reference/lexical_analysis.html#comments)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
#| Dies ist ein Block-Kommentar
   der sich über mehrere Zeilen
   erstrecken kann |#

#| Einzeiliger Block-Kommentar |#
```

**Besonderheiten:**
- Block-Kommentare können verschachtelt werden

**Weiterführende Links:**
- [Racket Documentation - Comments](https://docs.racket-lang.org/reference/comments.html)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
=begin
Dies ist ein Block-Kommentar
der sich über mehrere Zeilen
erstrecken kann
=end

# Einzeiliger Kommentar
```

**Besonderheiten:**
- Ruby verwendet `=begin ... =end` für Block-Kommentare

**Weiterführende Links:**
- [Ruby Documentation - Comments](https://docs.ruby-lang.org/en/master/syntax/comments_rdoc.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
/* Dies ist ein Block-Kommentar
   der sich über mehrere Zeilen
   erstrecken kann */

/* Einzeiliger Block-Kommentar */
```

**Besonderheiten:**
- Block-Kommentare können nicht verschachtelt werden

**Weiterführende Links:**
- [Rust Book - Comments](https://doc.rust-lang.org/book/ch03-04-comments.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
/* Dies ist ein Block-Kommentar
   der sich über mehrere Zeilen
   erstrecken kann */

/* Einzeiliger Block-Kommentar */
```

**Besonderheiten:**
- Block-Kommentare können nicht verschachtelt werden

**Weiterführende Links:**
- [Scala Documentation - Comments](https://docs.scala-lang.org/style/comments.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
#| Dies ist ein Block-Kommentar
   der sich über mehrere Zeilen
   erstrecken kann |#

#| Einzeiliger Block-Kommentar |#
```

**Besonderheiten:**
- Block-Kommentare können verschachtelt werden

**Weiterführende Links:**
- [Scheme R7RS - Comments](https://small.r7rs.org/wiki/Comments/)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
/* Dies ist ein Block-Kommentar
   der sich über mehrere Zeilen
   erstrecken kann */

/* Einzeiliger Block-Kommentar */
```

**Besonderheiten:**
- Block-Kommentare können nicht verschachtelt werden

**Weiterführende Links:**
- [Swift Documentation - Comments](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/thebasics/#Comments)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
/* Dies ist ein Block-Kommentar
   der sich über mehrere Zeilen
   erstrecken kann */

/* Einzeiliger Block-Kommentar */
```

**Besonderheiten:**
- Block-Kommentare können nicht verschachtelt werden

**Weiterführende Links:**
- [TypeScript Handbook - Comments](https://www.typescriptlang.org/docs/handbook/intro.html)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Dies ist ein Block-Kommentar
   der sich über mehrere Zeilen
   erstrecken kann *)

(* Einzeiliger Block-Kommentar *)
```

**Besonderheiten:**
- Block-Kommentare können verschachtelt werden

**Weiterführende Links:**
- [Wolfram Language Documentation - Comments](https://reference.wolfram.com/language/guide/Comments.html)

</TabItem>
</Tabs>


## 2.1.2. Zeilenkommentare

Kommentare, die nur eine Zeile umfassen und durch ein spezielles Zeichen oder Zeichenfolge eingeleitet werden.

### Sprachen {#sprachen}

<Tabs availableTabs={['ada', 'c', 'csharp', 'cpp', 'carbon', 'clojure', 'common-lisp', 'crystal', 'd', 'dart', 'eiffel', 'elixir', 'elm', 'erlang', 'fsharp', 'fortran', 'gleam', 'go', 'groovy', 'haskell', 'haxe', 'idris', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'lua', 'matlab', 'mercury', 'mojo', 'nim', 'objective-c', 'object-pascal', 'ocaml', 'octave', 'odin', 'perl', 'php', 'prolog', 'purescript', 'python', 'r', 'racket', 'roc', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'vbnet', 'v', 'wolfram-language', 'zig']}>
<TabItem value="ada" label="Ada">

```ada
-- Dies ist ein Zeilenkommentar in Ada
```

**Besonderheiten:**
- Zeilenkommentare beginnen mit `--` und erstrecken sich bis zum Zeilenende

**Weiterführende Links:**
- [Ada Reference Manual - Comments](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-2-7.html)

</TabItem>
<TabItem value="c" label="C">

```c
// Dies ist ein Zeilenkommentar in C (seit C99)
/* Block-Kommentar ist auch verfügbar */
```

**Besonderheiten:**
- Zeilenkommentare mit `//` sind seit C99 verfügbar
- Vor C99 waren nur Block-Kommentare verfügbar

**Weiterführende Links:**
- [C Standard - Comments](https://en.cppreference.com/w/c/language/comment)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Dies ist ein Zeilenkommentar in C#
```

**Besonderheiten:**
- Zeilenkommentare beginnen mit `//` und erstrecken sich bis zum Zeilenende

**Weiterführende Links:**
- [C# Documentation - Comments](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/lexical-structure#comments)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Dies ist ein Zeilenkommentar in C++
```

**Besonderheiten:**
- Zeilenkommentare beginnen mit `//` und erstrecken sich bis zum Zeilenende

**Weiterführende Links:**
- [C++ Standard - Comments](https://en.cppreference.com/w/cpp/language/comment)

</TabItem>
<TabItem value="carbon" label="Carbon">

```carbon
// Dies ist ein Zeilenkommentar in Carbon
```

**Besonderheiten:**
- Zeilenkommentare beginnen mit `//` und erstrecken sich bis zum Zeilenende

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Dies ist ein Zeilenkommentar in Clojure
```

**Besonderheiten:**
- Zeilenkommentare beginnen mit `;;` und erstrecken sich bis zum Zeilenende

**Weiterführende Links:**
- [Clojure Documentation - Comments](https://clojure.org/reference/reader#_comment)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Dies ist ein Zeilenkommentar in Common Lisp
```

**Besonderheiten:**
- Zeilenkommentare beginnen mit `;;` und erstrecken sich bis zum Zeilenende

**Weiterführende Links:**
- [Common Lisp HyperSpec - Comments](http://www.lispworks.com/documentation/HyperSpec/Body/02_d.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Dies ist ein Zeilenkommentar in Crystal
```

**Besonderheiten:**
- Zeilenkommentare beginnen mit `#` und erstrecken sich bis zum Zeilenende

**Weiterführende Links:**
- [Crystal Documentation - Comments](https://crystal-lang.org/reference/syntax_and_semantics/literals/comments.html)

</TabItem>
<TabItem value="d" label="D">

```d
// Dies ist ein Zeilenkommentar in D
```

**Besonderheiten:**
- Zeilenkommentare beginnen mit `//` und erstrecken sich bis zum Zeilenende

**Weiterführende Links:**
- [D Language Specification - Comments](https://dlang.org/spec/lex.html#comment)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Dies ist ein Zeilenkommentar in Dart
```

**Besonderheiten:**
- Zeilenkommentare beginnen mit `//` und erstrecken sich bis zum Zeilenende

**Weiterführende Links:**
- [Dart Language Specification - Comments](https://dart.dev/guides/language/language-tour#comments)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
-- Dies ist ein Zeilenkommentar in Eiffel
```

**Besonderheiten:**
- Zeilenkommentare beginnen mit `--` und erstrecken sich bis zum Zeilenende

**Weiterführende Links:**
- [Eiffel Language Documentation](https://www.eiffel.org/doc/eiffel/Language)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Dies ist ein Zeilenkommentar in Elixir
```

**Besonderheiten:**
- Zeilenkommentare beginnen mit `#` und erstrecken sich bis zum Zeilenende

**Weiterführende Links:**
- [Elixir Documentation - Comments](https://elixir-lang.org/getting-started/basic-types.html#comments)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Dies ist ein Zeilenkommentar in Elm
```

**Besonderheiten:**
- Zeilenkommentare beginnen mit `--` und erstrecken sich bis zum Zeilenende

**Weiterführende Links:**
- [Elm Documentation - Comments](https://guide.elm-lang.org/core_language.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% Dies ist ein Zeilenkommentar in Erlang
%% Oft werden zwei % verwendet für Dokumentationskommentare
```

**Besonderheiten:**
- Zeilenkommentare beginnen mit `%` oder `%%` und erstrecken sich bis zum Zeilenende
- `%%` wird oft für Dokumentationskommentare verwendet

**Weiterführende Links:**
- [Erlang Documentation - Comments](https://www.erlang.org/doc/reference_manual/introduction.html#comments)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Dies ist ein Zeilenkommentar in F#
```

**Besonderheiten:**
- Zeilenkommentare beginnen mit `//` und erstrecken sich bis zum Zeilenende

**Weiterführende Links:**
- [F# Documentation - Comments](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/comments)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Dies ist ein Zeilenkommentar in Fortran
```

**Besonderheiten:**
- Zeilenkommentare beginnen mit `!` und erstrecken sich bis zum Zeilenende

**Weiterführende Links:**
- [Fortran Standard - Comments](https://gcc.gnu.org/onlinedocs/gfortran/Comments.html)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// Dies ist ein Zeilenkommentar in Gleam
```

**Besonderheiten:**
- Zeilenkommentare beginnen mit `//` und erstrecken sich bis zum Zeilenende

**Weiterführende Links:**
- [Gleam Documentation - Comments](https://gleam.run/documentation/)

</TabItem>
<TabItem value="go" label="Go">

```go
// Dies ist ein Zeilenkommentar in Go
```

**Besonderheiten:**
- Zeilenkommentare beginnen mit `//` und erstrecken sich bis zum Zeilenende

**Weiterführende Links:**
- [Go Language Specification - Comments](https://go.dev/ref/spec#Comments)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Dies ist ein Zeilenkommentar in Groovy
```

**Besonderheiten:**
- Zeilenkommentare beginnen mit `//` und erstrecken sich bis zum Zeilenende

**Weiterführende Links:**
- [Groovy Documentation - Comments](https://groovy-lang.org/syntax.html#_comments)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Dies ist ein Zeilenkommentar in Haskell
```

**Besonderheiten:**
- Zeilenkommentare beginnen mit `--` und erstrecken sich bis zum Zeilenende

**Weiterführende Links:**
- [Haskell Report - Comments](https://www.haskell.org/onlinereport/haskell2010/haskellch2.html#x7-180002.2)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Dies ist ein Zeilenkommentar in Haxe
```

**Besonderheiten:**
- Zeilenkommentare beginnen mit `//` und erstrecken sich bis zum Zeilenende

**Weiterführende Links:**
- [Haxe Documentation - Comments](https://haxe.org/manual/expression.html#comments)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Dies ist ein Zeilenkommentar in Idris
```

**Besonderheiten:**
- Zeilenkommentare beginnen mit `--` und erstrecken sich bis zum Zeilenende

**Weiterführende Links:**
- [Idris 2 Documentation](https://idris2.readthedocs.io/en/latest/tutorial/starting.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Dies ist ein Zeilenkommentar in Java
```

**Besonderheiten:**
- Zeilenkommentare beginnen mit `//` und erstrecken sich bis zum Zeilenende

**Weiterführende Links:**
- [Java Language Specification - Comments](https://docs.oracle.com/javase/specs/jls/se17/html/jls-3.html#jls-3.7)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Dies ist ein Zeilenkommentar in JavaScript
```

**Besonderheiten:**
- Zeilenkommentare beginnen mit `//` und erstrecken sich bis zum Zeilenende

**Weiterführende Links:**
- [MDN Web Docs - Comments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#comments)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Dies ist ein Zeilenkommentar in Julia
```

**Besonderheiten:**
- Zeilenkommentare beginnen mit `#` und erstrecken sich bis zum Zeilenende

**Weiterführende Links:**
- [Julia Documentation - Comments](https://docs.julialang.org/en/v1/manual/documentation/#Comments)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Dies ist ein Zeilenkommentar in Koka
```

**Besonderheiten:**
- Zeilenkommentare beginnen mit `//` und erstrecken sich bis zum Zeilenende

**Weiterführende Links:**
- [Koka Language Documentation](https://koka-lang.github.io/koka/doc/book.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Dies ist ein Zeilenkommentar in Kotlin
```

**Besonderheiten:**
- Zeilenkommentare beginnen mit `//` und erstrecken sich bis zum Zeilenende

**Weiterführende Links:**
- [Kotlin Documentation - Comments](https://kotlinlang.org/docs/kotlin-doc.html#line-comments)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```haskell
-- Dies ist ein Zeilenkommentar in Lean 4
```

**Besonderheiten:**
- Zeilenkommentare beginnen mit `--` und erstrecken sich bis zum Zeilenende

**Weiterführende Links:**
- [Lean 4 Documentation](https://lean-lang.org/lean4/doc/)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Dies ist ein Zeilenkommentar in Lua
```

**Besonderheiten:**
- Zeilenkommentare beginnen mit `--` und erstrecken sich bis zum Zeilenende

**Weiterführende Links:**
- [Lua Documentation - Comments](https://www.lua.org/manual/5.4/manual.html#3.1)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% Dies ist ein Zeilenkommentar in MATLAB
```

**Besonderheiten:**
- Zeilenkommentare beginnen mit `%` und erstrecken sich bis zum Zeilenende

**Weiterführende Links:**
- [MATLAB Documentation - Comments](https://www.mathworks.com/help/matlab/matlab_prog/comments.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Dies ist ein Zeilenkommentar in Mercury
```

**Besonderheiten:**
- Zeilenkommentare beginnen mit `%` und erstrecken sich bis zum Zeilenende

**Weiterführende Links:**
- [Mercury Language Reference - Comments](https://www.mercurylang.org/information/doc-release/mercury_ref/Comments.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# Dies ist ein Zeilenkommentar in Mojo
```

**Besonderheiten:**
- Zeilenkommentare beginnen mit `#` und erstrecken sich bis zum Zeilenende

**Weiterführende Links:**
- [Mojo Documentation](https://docs.modular.com/mojo/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Dies ist ein Zeilenkommentar in Nim
```

**Besonderheiten:**
- Zeilenkommentare beginnen mit `#` und erstrecken sich bis zum Zeilenende

**Weiterführende Links:**
- [Nim Documentation - Comments](https://nim-lang.org/docs/manual.html#lexical-analysis-comments)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Dies ist ein Zeilenkommentar in Objective-C
```

**Besonderheiten:**
- Zeilenkommentare beginnen mit `//` und erstrecken sich bis zum Zeilenende

**Weiterführende Links:**
- [Objective-C Documentation](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Dies ist ein Zeilenkommentar in Object Pascal
```

**Besonderheiten:**
- Zeilenkommentare beginnen mit `//` und erstrecken sich bis zum Zeilenende

**Weiterführende Links:**
- [Delphi Documentation - Comments](https://docwiki.embarcadero.com/RADStudio/Alexandria/en/Comments)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* OCaml verwendet Block-Kommentare für Zeilenkommentare *)
```

**Besonderheiten:**
- OCaml verwendet Block-Kommentare `(* *)` auch für einzeilige Kommentare

**Weiterführende Links:**
- [OCaml Documentation - Comments](https://v2.ocaml.org/manual/lex.html#comments)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
% Dies ist ein Zeilenkommentar in Octave
```

**Besonderheiten:**
- Zeilenkommentare beginnen mit `%` und erstrecken sich bis zum Zeilenende

**Weiterführende Links:**
- [GNU Octave Documentation - Comments](https://octave.org/doc/v8.1.0/Comments.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Dies ist ein Zeilenkommentar in Odin
```

**Besonderheiten:**
- Zeilenkommentare beginnen mit `//` und erstrecken sich bis zum Zeilenende

**Weiterführende Links:**
- [Odin Documentation - Comments](https://odin-lang.org/docs/overview/#comments)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Dies ist ein Zeilenkommentar in Perl
```

**Besonderheiten:**
- Zeilenkommentare beginnen mit `#` und erstrecken sich bis zum Zeilenende

**Weiterführende Links:**
- [Perl Documentation - Comments](https://perldoc.perl.org/perlsyn#Comments)

</TabItem>
<TabItem value="php" label="PHP">

```php
// Dies ist ein Zeilenkommentar in PHP
# Alternative Syntax mit #
```

**Besonderheiten:**
- Zeilenkommentare können mit `//` oder `#` beginnen und erstrecken sich bis zum Zeilenende

**Weiterführende Links:**
- [PHP Documentation - Comments](https://www.php.net/manual/en/language.basic-syntax.comments.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Dies ist ein Zeilenkommentar in Prolog
%% Oft werden zwei % verwendet für Dokumentationskommentare
```

**Besonderheiten:**
- Zeilenkommentare beginnen mit `%` und erstrecken sich bis zum Zeilenende
- `%%` wird konventionell für Dokumentationskommentare verwendet

**Weiterführende Links:**
- [SWI-Prolog Documentation - Comments](https://www.swi-prolog.org/pldoc/man?section=syntax)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Dies ist ein Zeilenkommentar in PureScript
```

**Besonderheiten:**
- Zeilenkommentare beginnen mit `--` und erstrecken sich bis zum Zeilenende

**Weiterführende Links:**
- [PureScript Documentation](https://www.purescript.org/documentation/)

</TabItem>
<TabItem value="python" label="Python">

```python
# Dies ist ein Zeilenkommentar in Python
```

**Besonderheiten:**
- Zeilenkommentare beginnen mit `#` und erstrecken sich bis zum Zeilenende

**Weiterführende Links:**
- [Python Documentation - Comments](https://docs.python.org/3/reference/lexical_analysis.html#comments)

</TabItem>
<TabItem value="r" label="R">

```r
# Dies ist ein Zeilenkommentar in R
```

**Besonderheiten:**
- Zeilenkommentare beginnen mit `#` und erstrecken sich bis zum Zeilenende

**Weiterführende Links:**
- [R Documentation - Comments](https://cran.r-project.org/doc/manuals/r-release/R-lang.html#Comments)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
; Dies ist ein Zeilenkommentar in Racket
```

**Besonderheiten:**
- Zeilenkommentare beginnen mit `;` und erstrecken sich bis zum Zeilenende

**Weiterführende Links:**
- [Racket Documentation - Comments](https://docs.racket-lang.org/reference/comments.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
# Dies ist ein Zeilenkommentar in Roc
```

**Besonderheiten:**
- Zeilenkommentare beginnen mit `#` und erstrecken sich bis zum Zeilenende

**Weiterführende Links:**
- [Roc Documentation](https://www.roc-lang.org/tutorial)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Dies ist ein Zeilenkommentar in Ruby
```

**Besonderheiten:**
- Zeilenkommentare beginnen mit `#` und erstrecken sich bis zum Zeilenende

**Weiterführende Links:**
- [Ruby Documentation - Comments](https://docs.ruby-lang.org/en/master/syntax/comments_rdoc.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Dies ist ein Zeilenkommentar in Rust
```

**Besonderheiten:**
- Zeilenkommentare beginnen mit `//` und erstrecken sich bis zum Zeilenende

**Weiterführende Links:**
- [Rust Book - Comments](https://doc.rust-lang.org/book/ch03-04-comments.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Dies ist ein Zeilenkommentar in Scala
```

**Besonderheiten:**
- Zeilenkommentare beginnen mit `//` und erstrecken sich bis zum Zeilenende

**Weiterführende Links:**
- [Scala Documentation - Comments](https://docs.scala-lang.org/style/comments.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
; Dies ist ein Zeilenkommentar in Scheme
```

**Besonderheiten:**
- Zeilenkommentare beginnen mit `;` und erstrecken sich bis zum Zeilenende

**Weiterführende Links:**
- [Scheme R7RS - Comments](https://small.r7rs.org/wiki/Comments/)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Dies ist ein Zeilenkommentar in Swift
```

**Besonderheiten:**
- Zeilenkommentare beginnen mit `//` und erstrecken sich bis zum Zeilenende

**Weiterführende Links:**
- [Swift Documentation - Comments](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/thebasics/#Comments)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Dies ist ein Zeilenkommentar in TypeScript
```

**Besonderheiten:**
- Zeilenkommentare beginnen mit `//` und erstrecken sich bis zum Zeilenende

**Weiterführende Links:**
- [TypeScript Handbook - Comments](https://www.typescriptlang.org/docs/handbook/intro.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Dies ist ein Zeilenkommentar in VB.NET
```

**Besonderheiten:**
- Zeilenkommentare beginnen mit `'` und erstrecken sich bis zum Zeilenende

**Weiterführende Links:**
- [VB.NET Documentation - Comments](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/program-structure/comments-in-code)

</TabItem>
<TabItem value="v" label="V">

```v
// Dies ist ein Zeilenkommentar in V
```

**Besonderheiten:**
- Zeilenkommentare beginnen mit `//` und erstrecken sich bis zum Zeilenende

**Weiterführende Links:**
- [V Documentation - Comments](https://github.com/vlang/v/blob/master/doc/docs.md#comments)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Wolfram Language verwendet Block-Kommentare auch für Zeilenkommentare *)
```

**Besonderheiten:**
- Wolfram Language verwendet Block-Kommentare `(* *)` auch für einzeilige Kommentare

**Weiterführende Links:**
- [Wolfram Language Documentation - Comments](https://reference.wolfram.com/language/guide/Comments.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Dies ist ein Zeilenkommentar in Zig
```

**Besonderheiten:**
- Zeilenkommentare beginnen mit `//` und erstrecken sich bis zum Zeilenende

**Weiterführende Links:**
- [Zig Documentation - Comments](https://ziglang.org/documentation/master/#Comments)

</TabItem>
</Tabs>


## 2.1.3. Doc-Kommentare

Spezielle Kommentare zur Dokumentation von Code-Elementen, die oft von Dokumentations-Tools verarbeitet werden können.

### Sprachen {#sprachen}

<Tabs availableTabs={['clojure', 'common-lisp', 'csharp', 'd', 'dart', 'elixir', 'fsharp', 'gleam', 'go', 'groovy', 'haskell', 'idris', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'nim', 'objective-c', 'ocaml', 'perl', 'php', 'prolog', 'python', 'roc', 'rust', 'scala', 'swift', 'typescript', 'v', 'wolfram-language', 'zig']}>
<TabItem value="csharp" label="C#">

```csharp
/// <summary>
/// Berechnet die Summe zweier Zahlen.
/// </summary>
/// <param name="a">Erste Zahl</param>
/// <param name="b">Zweite Zahl</param>
/// <returns>Die Summe von a und b</returns>
int Add(int a, int b)
{
    return a + b;
}
```

**Besonderheiten:**
- XML-Dokumentationskommentare mit `///` werden von IntelliSense und Dokumentations-Tools verarbeitet

**Weiterführende Links:**
- [C# Documentation - XML Documentation Comments](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/xmldoc/)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
/// Berechnet die Summe zweier Zahlen.
/// 
/// [a] ist die erste Zahl.
/// [b] ist die zweite Zahl.
/// 
/// Returns die Summe von a und b.
int add(int a, int b) {
  return a + b;
}
```

**Besonderheiten:**
- Dart-Doc-Kommentare mit `///` werden von dartdoc verarbeitet
- Unterstützt Markdown-Formatierung

**Weiterführende Links:**
- [Dart Documentation - Comments](https://dart.dev/guides/language/effective-dart/documentation)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
@doc """
Berechnet die Summe zweier Zahlen.

## Parameters

  * `a` - Erste Zahl
  * `b` - Zweite Zahl

## Returns

Die Summe von a und b.
"""
def add(a, b) do
  a + b
end
```

**Besonderheiten:**
- Elixir verwendet `@doc` Attribute für Dokumentation
- Unterstützt Markdown-Formatierung

**Weiterführende Links:**
- [Elixir Documentation - Module Attributes](https://elixir-lang.org/getting-started/module-attributes.html#as-annotations)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
/// Berechnet die Summe zweier Zahlen.
/// 
/// ## Parameters
/// 
/// - `a` - Erste Zahl
/// - `b` - Zweite Zahl
/// 
/// ## Returns
/// 
/// Die Summe von a und b.
let add a b = a + b
```

**Besonderheiten:**
- F# XML-Dokumentationskommentare mit `///` werden von IntelliSense verarbeitet
- Unterstützt XML-Tags oder Markdown-Formatierung

**Weiterführende Links:**
- [F# Documentation - XML Documentation](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/xml-documentation)

</TabItem>
<TabItem value="go" label="Go">

```go
// Add berechnet die Summe zweier Zahlen.
//
// a ist die erste Zahl.
// b ist die zweite Zahl.
//
// Returns die Summe von a und b.
func Add(a, b int) int {
    return a + b
}
```

**Besonderheiten:**
- Go-Doc-Kommentare beginnen direkt vor dem deklarierten Element
- Werden von `godoc` verarbeitet
- Erste Zeile sollte eine Zusammenfassung sein

**Weiterführende Links:**
- [Go Documentation - Comments](https://go.dev/doc/effective_go#commentary)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
/**
 * Berechnet die Summe zweier Zahlen.
 * 
 * @param a Erste Zahl
 * @param b Zweite Zahl
 * @return Die Summe von a und b
 */
int add(int a, int b) {
    return a + b
}
```

**Besonderheiten:**
- Groovy verwendet Javadoc-ähnliche Syntax mit `/** */`
- Unterstützt Javadoc-Tags wie `@param`, `@return`, etc.

**Weiterführende Links:**
- [Groovy Documentation - Documentation Comments](https://groovy-lang.org/structure.html#_documentation_comments)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- | Berechnet die Summe zweier Zahlen.
-- 
-- @a@ ist die erste Zahl.
-- @b@ ist die zweite Zahl.
-- 
-- Returns die Summe von a und b.
add :: Int -> Int -> Int
add a b = a + b
```

**Besonderheiten:**
- Haskell-Doc-Kommentare beginnen mit `-- |` für die erste Zeile
- Weitere Zeilen verwenden `--`
- Werden von Haddock verarbeitet

**Weiterführende Links:**
- [Haskell Documentation - Haddock](https://www.haskell.org/haddock/)

</TabItem>
<TabItem value="java" label="Java">

```java
/**
 * Berechnet die Summe zweier Zahlen.
 * 
 * @param a Erste Zahl
 * @param b Zweite Zahl
 * @return Die Summe von a und b
 */
public int add(int a, int b) {
    return a + b;
}
```

**Besonderheiten:**
- Javadoc-Kommentare verwenden `/** */`
- Unterstützt spezielle Tags wie `@param`, `@return`, `@throws`, etc.
- Werden von javadoc-Tool verarbeitet

**Weiterführende Links:**
- [Java Documentation - Javadoc](https://docs.oracle.com/javase/8/docs/technotes/tools/windows/javadoc.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
/**
 * Berechnet die Summe zweier Zahlen.
 * 
 * @param {number} a - Erste Zahl
 * @param {number} b - Zweite Zahl
 * @returns {number} Die Summe von a und b
 */
function add(a, b) {
    return a + b;
}
```

**Besonderheiten:**
- JSDoc-Kommentare verwenden `/** */`
- Unterstützt Typinformationen in geschweiften Klammern
- Werden von JSDoc-Tools verarbeitet

**Weiterführende Links:**
- [JSDoc Documentation](https://jsdoc.app/)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
"""
    add(a, b)

Berechnet die Summe zweier Zahlen.

# Arguments
- `a`: Erste Zahl
- `b`: Zweite Zahl

# Returns
Die Summe von a und b.
"""
function add(a, b)
    return a + b
end
```

**Besonderheiten:**
- Julia verwendet Triple-Quoted Strings `"""` für Dokumentation
- Unterstützt Markdown-Formatierung
- Werden von Julia's Dokumentationssystem verarbeitet

**Weiterführende Links:**
- [Julia Documentation - Documentation](https://docs.julialang.org/en/v1/manual/documentation/)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
/// Berechnet die Summe zweier Zahlen.
///
/// `a` ist die erste Zahl.
/// `b` ist die zweite Zahl.
///
/// Gibt die Summe von a und b zurück.
fun add(a : int, b : int) : int
  a + b
```

**Besonderheiten:**
- Doc-Kommentare beginnen mit `///`
- Werden von der Koka-Dokumentationsgenerierung verarbeitet

**Weiterführende Links:**
- [Koka Language Documentation](https://koka-lang.github.io/koka/doc/book.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
/**
 * Berechnet die Summe zweier Zahlen.
 * 
 * @param a Erste Zahl
 * @param b Zweite Zahl
 * @return Die Summe von a und b
 */
fun add(a: Int, b: Int): Int {
    return a + b
}
```

**Besonderheiten:**
- Kotlin-Doc-Kommentare verwenden `/** */` (KDoc)
- Unterstützt Markdown-Formatierung
- Werden von Dokka verarbeitet

**Weiterführende Links:**
- [Kotlin Documentation - KDoc](https://kotlinlang.org/docs/kotlin-doc.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```haskell
/-- Berechnet die Summe zweier Zahlen.

`a` ist die erste Zahl.
`b` ist die zweite Zahl.

Gibt die Summe von a und b zurück. -/
def add (a b : Nat) : Nat :=
  a + b

/-! Modul-Dokumentation für das aktuelle Modul.
    Wird am Anfang der Datei platziert. -/
```

**Besonderheiten:**
- Doc-Kommentare verwenden `/--` ... `-/` für Deklarationen
- Modul-Dokumentation verwendet `/-!` ... `-/`
- Unterstützt Markdown-Formatierung
- Werden von Lean's Dokumentationssystem und der IDE verarbeitet

**Weiterführende Links:**
- [Lean 4 Documentation](https://lean-lang.org/lean4/doc/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
## Berechnet die Summe zweier Zahlen.
## 
## Parameters:
##   a: Erste Zahl
##   b: Zweite Zahl
## 
## Returns:
##   Die Summe von a und b.
proc add(a, b: int): int =
  return a + b
```

**Besonderheiten:**
- Nim-Doc-Kommentare verwenden `##` (doppeltes `#`)
- Werden von nimdoc verarbeitet

**Weiterführende Links:**
- [Nim Documentation - Documentation Comments](https://nim-lang.org/docs/docgen.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(** Berechnet die Summe zweier Zahlen.
    
    @param a Erste Zahl
    @param b Zweite Zahl
    @return Die Summe von a und b *)
let add a b = a + b
```

**Besonderheiten:**
- OCaml-Doc-Kommentare verwenden `(** *)`
- Unterstützt spezielle Tags wie `@param`, `@return`, etc.
- Werden von ocamldoc verarbeitet

**Weiterführende Links:**
- [OCaml Documentation - Documentation Comments](https://v2.ocaml.org/manual/ocamldoc.html)

</TabItem>
<TabItem value="php" label="PHP">

```php
/**
 * Berechnet die Summe zweier Zahlen.
 * 
 * @param int $a Erste Zahl
 * @param int $b Zweite Zahl
 * @return int Die Summe von a und b
 */
function add(int $a, int $b): int {
    return $a + $b;
}
```

**Besonderheiten:**
- PHPDoc-Kommentare verwenden `/** */`
- Unterstützt Typinformationen in Tags
- Werden von phpDocumentor verarbeitet

**Weiterführende Links:**
- [PHPDoc Documentation](https://docs.phpdoc.org/)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
%! add(+A:integer, +B:integer, -Sum:integer) is det.
%
%  Berechnet die Summe zweier Zahlen.
%
%  @arg A   Erste Zahl
%  @arg B   Zweite Zahl
%  @arg Sum Die Summe von A und B

add(A, B, Sum) :-
    Sum is A + B.

/** <module> Mathematische Hilfsprädikate

Dieses Modul bietet mathematische Hilfsprädikate.

@author Beispielautor
@license MIT
*/
```

**Besonderheiten:**
- SWI-Prolog unterstützt PlDoc-Dokumentationskommentare mit `%!` für Prädikate
- `/** <module> ... */` für Modul-Dokumentation
- Unterstützt Tags wie `@arg`, `@author`, `@license`, `@see`
- Wird von `doc_server/1` und der Online-Dokumentation verarbeitet

**Weiterführende Links:**
- [SWI-Prolog PlDoc Documentation](https://www.swi-prolog.org/pldoc/doc_for?object=section(%27packages/pldoc.html%27))

</TabItem>
<TabItem value="python" label="Python">

```python
def add(a: int, b: int) -> int:
    """Berechnet die Summe zweier Zahlen.
    
    Args:
        a: Erste Zahl
        b: Zweite Zahl
    
    Returns:
        Die Summe von a und b.
    """
    return a + b
```

**Besonderheiten:**
- Python-Docstrings verwenden Triple-Quoted Strings `"""` oder `'''`
- Folgen oft dem Google- oder NumPy-Docstring-Stil
- Werden von Tools wie Sphinx verarbeitet

**Weiterführende Links:**
- [Python Documentation - Docstrings](https://docs.python.org/3/tutorial/classes.html#documentation-strings)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
/// Berechnet die Summe zweier Zahlen.
/// 
/// # Arguments
/// 
/// * `a` - Erste Zahl
/// * `b` - Zweite Zahl
/// 
/// # Returns
/// 
/// Die Summe von a und b.
pub fn add(a: i32, b: i32) -> i32 {
    a + b
}
```

**Besonderheiten:**
- Rust-Doc-Kommentare verwenden `///` für öffentliche API-Dokumentation
- Unterstützt Markdown-Formatierung
- Werden von rustdoc verarbeitet

**Weiterführende Links:**
- [Rust Book - Documentation Comments](https://doc.rust-lang.org/book/ch14-02-publishing-to-crates-io.html#documentation-comments)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
/** Berechnet die Summe zweier Zahlen.
  * 
  * @param a Erste Zahl
  * @param b Zweite Zahl
  * @return Die Summe von a und b
  */
def add(a: Int, b: Int): Int = {
  a + b
}
```

**Besonderheiten:**
- Scala-Doc-Kommentare verwenden `/** */`
- Unterstützt Javadoc-ähnliche Tags
- Werden von Scaladoc verarbeitet

**Weiterführende Links:**
- [Scala Documentation - Scaladoc](https://docs.scala-lang.org/style/scaladoc.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
/// Berechnet die Summe zweier Zahlen.
/// 
/// - Parameters:
///   - a: Erste Zahl
///   - b: Zweite Zahl
/// - Returns: Die Summe von a und b
func add(a: Int, b: Int) -> Int {
    return a + b
}
```

**Besonderheiten:**
- Swift-Doc-Kommentare verwenden `///`
- Unterstützt spezielle Markdown-Formatierung für Parameter und Rückgabewerte
- Werden von Xcode und Swift-Doc-Tools verarbeitet

**Weiterführende Links:**
- [Swift Documentation - Documentation Comments](https://www.swift.org/documentation/api-design-guidelines/#write-a-documentation-comment-for-every-declaration)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
/**
 * Berechnet die Summe zweier Zahlen.
 * 
 * @param a - Erste Zahl
 * @param b - Zweite Zahl
 * @returns Die Summe von a und b
 */
function add(a: number, b: number): number {
    return a + b;
}
```

**Besonderheiten:**
- TypeScript-Doc-Kommentare verwenden JSDoc-Syntax `/** */`
- Unterstützt Typinformationen (oft redundant zu TypeScript-Typen)
- Werden von TypeScript-Editoren und JSDoc-Tools verarbeitet

**Weiterführende Links:**
- [TypeScript Handbook - JSDoc](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
/// Berechnet die Summe zweier Zahlen.
/// 
/// a: Erste Zahl
/// b: Zweite Zahl
/// 
/// Returns: Die Summe von a und b.
pub fn add(a: i32, b: i32) i32 {
    return a + b;
}
```

**Besonderheiten:**
- Zig-Doc-Kommentare verwenden `///`
- Unterstützt Markdown-Formatierung
- Werden von zig-doc verarbeitet

**Weiterführende Links:**
- [Zig Documentation - Documentation Comments](https://ziglang.org/documentation/master/#Documentation-Comments)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Docstrings in Funktionen
(defn factorial
  "Berechnet die Fakultät von n.
  n muss eine nicht-negative ganze Zahl sein."
  [n]
  (if (<= n 1) 1 (* n (factorial (dec n)))))

;; Docstring abrufen
(doc factorial)

;; Docstrings in Namespaces
(ns my-app.core
  "Hauptmodul der Anwendung.")
```

**Besonderheiten:**
- Docstrings als String direkt nach dem Funktionsnamen
- `doc` zum Abrufen der Dokumentation in der REPL
- Auch für `def`, `defn`, `defmacro`, `ns` verfügbar
- Docstrings werden als Metadaten gespeichert

**Weiterführende Links:**
- [Clojure Documentation - Special Forms](https://clojure.org/reference/special_forms#def)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Docstrings für Funktionen
(defun factorial (n)
  "Berechnet die Fakultät von N.
N muss eine nicht-negative Ganzzahl sein."
  (if (<= n 1) 1
      (* n (factorial (1- n)))))

;; Docstrings für Variablen
(defvar *max-retries* 3
  "Maximale Anzahl an Wiederholungsversuchen.")

;; Docstring abfragen
(documentation 'factorial 'function)
```

**Besonderheiten:**
- Docstrings sind Strings direkt nach der Parameterliste
- Unterstützt für `defun`, `defvar`, `defclass`, `defgeneric`, etc.
- Zur Laufzeit über `(documentation symbol type)` abrufbar
- Keine spezielle Syntax nötig (normaler String)

**Weiterführende Links:**
- [Common Lisp HyperSpec - documentation](http://www.lispworks.com/documentation/HyperSpec/Body/f_docume.htm)

</TabItem>
<TabItem value="d" label="D">

```d
/// Berechnet die Summe zweier Zahlen.
///
/// Params:
///   a = Erste Zahl
///   b = Zweite Zahl
///
/// Returns:
///   Die Summe von a und b.
int add(int a, int b) {
    return a + b;
}

/**
 * Eine Klasse, die einen Punkt im 2D-Raum darstellt.
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

**Besonderheiten:**
- `///` für einzeilige Doc-Kommentare (Ddoc)
- `/** ... */` für mehrzeilige Doc-Kommentare
- `/++ ... +/` für verschachtelbare Doc-Kommentare
- Sections: `Params:`, `Returns:`, `Examples:`, `Throws:`, `See_Also:`
- DMD generiert HTML-Dokumentation aus Ddoc-Kommentaren

**Weiterführende Links:**
- [D Language Specification - Ddoc](https://dlang.org/spec/ddoc.html)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
/// Berechnet die Summe zweier Zahlen.
///
/// ## Beispiel
///
/// ```gleam
/// add(1, 2)  // -> 3
/// ```
pub fn add(a: Int, b: Int) -> Int {
  a + b
}
```

**Besonderheiten:**
- Doc-Kommentare beginnen mit `///`
- Unterstützen Markdown-Formatierung
- Werden in die generierte Dokumentation aufgenommen

**Weiterführende Links:**
- [Gleam Documentation - Comments](https://tour.gleam.run/basics/comments/)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
||| Addiert zwei Integer-Werte.
||| @a der erste Summand
||| @b der zweite Summand
add : (a : Int) -> (b : Int) -> Int
add a b = a + b
```

**Besonderheiten:**
- Doc-Kommentare beginnen mit `|||`
- `@param` Syntax für Parameter-Dokumentation
- Werden von der Idris-IDE und dem REPL angezeigt

**Weiterführende Links:**
- [Idris 2 Documentation](https://idris2.readthedocs.io/en/latest/tutorial/starting.html)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
/// Berechnet die Summe zweier Ganzzahlen.
///
/// @param a Der erste Summand.
/// @param b Der zweite Summand.
/// @return Die Summe von a und b.
- (int)add:(int)a with:(int)b {
    return a + b;
}

/**
 * Erstellt eine formatierte Begrüßung.
 *
 * @param name Der Name der Person.
 * @return Ein formatierter Begrüßungsstring.
 */
- (NSString *)greet:(NSString *)name {
    return [NSString stringWithFormat:@"Hallo, %@!", name];
}
```

**Besonderheiten:**
- `///` und `/** */` für Dokumentationskommentare
- `@param`, `@return`, `@see`, `@note` Tags
- Xcode zeigt Doc-Kommentare in Quick Help an
- Kompatibel mit HeaderDoc und Doxygen

**Weiterführende Links:**
- [Apple Documentation - HeaderDoc](https://developer.apple.com/library/archive/documentation/DeveloperTools/Conceptual/HeaderDoc/intro/intro.html)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
=head1 NAME

Math::Utils - Mathematische Hilfsfunktionen

=head1 SYNOPSIS

    use Math::Utils;
    my $result = add(5, 3);

=head1 DESCRIPTION

Dieses Modul bietet mathematische Hilfsfunktionen.

=head2 add($a, $b)

Addiert zwei Zahlen und gibt das Ergebnis zurück.

=cut

sub add {
    my ($a, $b) = @_;
    return $a + $b;
}
```

**Besonderheiten:**
- POD (Plain Old Documentation) ist in Perl eingebettet
- Beginnt mit `=` am Zeilenanfang, endet mit `=cut`
- Kann mit `perldoc` extrahiert und angezeigt werden

**Weiterführende Links:**
- [Perl Documentation - perlpod](https://perldoc.perl.org/perlpod)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
## Addiert zwei Zahlen.
## Gibt die Summe zurück.
add : I64, I64 -> I64
add = \a, b -> a + b
```

**Besonderheiten:**
- Doc-Kommentare beginnen mit `##`
- Werden für die Dokumentation von Modulen und Funktionen verwendet

**Weiterführende Links:**
- [Roc Documentation](https://www.roc-lang.org/tutorial)

</TabItem>
<TabItem value="v" label="V">

```v
// Doc-Kommentare
/// Berechnet die Fläche eines Kreises.
/// `radius` - der Radius des Kreises
fn area(radius f64) f64 {
    return 3.14159 * radius * radius
}
```

**Besonderheiten:**
- `///` für Dokumentationskommentare
- Werden von `v doc` verarbeitet
- Können Markdown-Formatierung enthalten

**Weiterführende Links:**
- [V Documentation - Comments](https://github.com/vlang/v/blob/master/doc/docs.md#comments)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Doc-Kommentare via Usage Messages *)
Add::usage = "Add[a, b] adds two numbers a and b."
Add[a_, b_] := a + b

?Add  (* Zeigt die Usage Message an *)
```

**Besonderheiten:**
- `Symbol::usage` definiert Dokumentation für Funktionen
- `?Symbol` zeigt die Usage Message an
- Usage Messages werden auch in Notebooks als Tooltip angezeigt

**Weiterführende Links:**
- [Wolfram Language Documentation - Usage Messages](https://reference.wolfram.com/language/ref/MessageName.html)

</TabItem>
</Tabs>

