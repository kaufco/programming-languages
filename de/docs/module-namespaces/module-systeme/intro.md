---
slug: /module-namespaces/module-systeme
title: 15.1. Module-Systeme
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 15.1. Module-Systeme

Module-Systeme und Namespaces.

## 15.1.1. Module Definition

Definition von Modulen als organisatorische Einheiten für Code. Module ermöglichen es, Code in logische Einheiten zu strukturieren und zu kapseln.

### Sprachen {#sprachen}

<Tabs availableTabs={['ada', 'carbon', 'clojure', 'common-lisp', 'crystal', 'd', 'dart', 'elixir', 'elm', 'erlang', 'fortran', 'fsharp', 'gleam', 'groovy', 'haskell', 'idris', 'java', 'javascript', 'julia', 'koka', 'lean4', 'lua', 'mercury', 'mojo', 'nim', 'object-pascal', 'objective-c', 'ocaml', 'odin', 'prolog', 'purescript', 'racket', 'roc', 'ruby', 'rust', 'scheme', 'swift', 'v', 'wolfram-language', 'zig']}>
<TabItem value="ada" label="Ada">

```ada
package Math_Utils is
    function Add(A, B : Integer) return Integer;
end Math_Utils;

package body Math_Utils is
    function Add(A, B : Integer) return Integer is
    begin
        return A + B;
    end Add;
end Math_Utils;
```

**Besonderheiten:**
- Module werden als Packages definiert
- Trennung zwischen Package-Spezifikation und Package-Body
- Packages können verschachtelt werden

**Weiterführende Links:**
- [Ada Documentation - Packages](https://learn.adacore.com/courses/intro-to-ada/chapters/packages.html)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
package MathUtils api;

fn Add(a: i32, b: i32) -> i32 {
    return a + b;
}
```

**Besonderheiten:**
- Experimentelle Sprache, Syntax kann sich noch ändern
- Packages werden mit `package`-Keyword definiert
- `api`-Modifier macht Funktionen öffentlich

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
(ns math-utils)

(defn add [a b]
  (+ a b))
```

**Besonderheiten:**
- Module werden als Namespaces mit `ns` definiert
- Namespaces können verschachtelt werden
- Unterstützt dynamische Namespace-Erstellung

**Weiterführende Links:**
- [Clojure Documentation - Namespaces](https://clojure.org/reference/namespaces)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
(defpackage :math-utils
  (:use :cl)
  (:export :add))

(in-package :math-utils)

(defun add (a b)
  (+ a b))
```

**Besonderheiten:**
- Module werden als Packages mit `defpackage` definiert
- `:export` spezifiziert öffentliche Symbole
- `in-package` wechselt zum Package-Kontext

**Weiterführende Links:**
- [Common Lisp HyperSpec - Packages](http://www.lispworks.com/documentation/HyperSpec/Body/11_.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
module MathUtils
  def self.add(a : Int32, b : Int32) : Int32
    a + b
  end
end
```

**Besonderheiten:**
- Module werden mit `module`-Keyword definiert
- Module können Methoden enthalten
- Unterstützt Mixins

**Weiterführende Links:**
- [Crystal Documentation - Modules](https://crystal-lang.org/reference/1.11/syntax_and_semantics/modules.html)

</TabItem>
<TabItem value="d" label="D">

```d
module math_utils;

int add(int a, int b) {
    return a + b;
}
```

**Besonderheiten:**
- Module werden mit `module`-Keyword am Dateianfang definiert
- Modulname entspricht normalerweise dem Dateinamen
- Unterstützt Package-Hierarchien

**Weiterführende Links:**
- [D Language Specification - Modules](https://dlang.org/spec/module.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
library math_utils;

int add(int a, int b) {
    return a + b;
}
```

**Besonderheiten:**
- Module werden als Libraries mit `library`-Direktive definiert
- Library-Name ist optional
- Jede Datei ist automatisch eine Library

**Weiterführende Links:**
- [Dart Documentation - Libraries](https://dart.dev/guides/libraries/create-library-packages)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
defmodule MathUtils do
  def add(a, b) do
    a + b
  end
end
```

**Besonderheiten:**
- Module werden mit `defmodule` definiert
- Module können verschachtelt werden
- Unterstützt Module-Attribute

**Weiterführende Links:**
- [Elixir Documentation - Modules](https://elixir-lang.org/getting-started/modules-and-functions.html)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
module MathUtils exposing (add)

add : Int -> Int -> Int
add a b =
    a + b
```

**Besonderheiten:**
- Module werden mit `module`-Keyword definiert
- `exposing` spezifiziert exportierte Funktionen
- Modulname muss dem Dateipfad entsprechen

**Weiterführende Links:**
- [Elm Documentation - Modules](https://guide.elm-lang.org/webapps/modules.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
-module(math_utils).
-export([add/2]).

add(A, B) ->
    A + B.
```

**Besonderheiten:**
- Module werden mit `-module()`-Direktive definiert
- `-export()` spezifiziert öffentliche Funktionen
- Modulname muss dem Dateinamen entsprechen

**Weiterführende Links:**
- [Erlang Documentation - Modules](https://www.erlang.org/doc/reference_manual/modules.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
module MathUtils

let add a b = a + b
```

**Besonderheiten:**
- Module werden mit `module`-Keyword definiert
- Unterstützt verschachtelte Module
- Kann als Datei-Module oder Namespace-Module definiert werden

**Weiterführende Links:**
- [Microsoft F# Documentation - Modules](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/modules)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
module math_utils
    implicit none
contains
    function add(a, b) result(sum)
        integer, intent(in) :: a, b
        integer :: sum
        sum = a + b
    end function add
end module math_utils
```

**Besonderheiten:**
- Module werden mit `module`-Keyword definiert
- Unterstützt `contains` für interne Prozeduren
- Kann Variablen und Typen exportieren

**Weiterführende Links:**
- [Fortran Wiki - Modules](https://fortranwiki.org/fortran/show/Modules)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// Module werden durch Dateinamen definiert
// Datei: src/math_utils.gleam

pub fn add(a: Int, b: Int) -> Int {
  a + b
}

fn helper(x: Int) -> Int {
  x * 2
}
```

**Besonderheiten:**
- Module werden durch Dateinamen definiert (kein `module`-Keyword)
- `pub` macht Funktionen öffentlich
- Ohne `pub` sind Funktionen modul-privat
- Modulname entspricht dem Dateipfad

**Weiterführende Links:**
- [Gleam Documentation - Modules](https://tour.gleam.run/basics/modules/)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
module MathUtils (add) where

add :: Int -> Int -> Int
add a b = a + b
```

**Besonderheiten:**
- Module werden mit `module`-Keyword definiert
- Exportliste spezifiziert öffentliche Funktionen
- Modulname muss dem Dateipfad entsprechen

**Weiterführende Links:**
- [Haskell Documentation - Modules](https://www.haskell.org/tutorial/modules.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
module MathUtils

add : Int -> Int -> Int
add a b = a + b
```

**Besonderheiten:**
- Module werden mit `module`-Keyword definiert
- Unterstützt verschachtelte Module
- Modulname entspricht dem Dateipfad

**Weiterführende Links:**
- [Idris Documentation - Modules](https://idris2.readthedocs.io/en/latest/tutorial/modules.html)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
module MathUtils

function add(a::Int, b::Int)::Int
    return a + b
end

end
```

**Besonderheiten:**
- Module werden mit `module`-Keyword definiert
- Unterstützt verschachtelte Module
- Kann mit `export` Funktionen exportieren

**Weiterführende Links:**
- [Julia Documentation - Modules](https://docs.julialang.org/en/v1/manual/modules/)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
// Module werden durch Dateien definiert
// Datei: math/utils.kk
module math/utils

// Öffentliche Funktionen mit pub
pub fun add(a : int, b : int) : int
  a + b

// Private Funktion (Standard)
fun helper(x : int) : int
  x * 2
```

**Besonderheiten:**
- Module werden durch Dateien definiert (Dateiname = Modulname)
- Modulpfad entspricht der Verzeichnisstruktur
- `pub` markiert öffentliche Definitionen
- Ohne `pub` sind Definitionen modulprivat

**Weiterführende Links:**
- [Koka Documentation - Modules](https://koka-lang.github.io/koka/doc/book.html#sec-modules)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Module werden durch Dateien und Namespaces definiert
-- Datei: MyLib/Utils.lean → Modul MyLib.Utils

namespace MyLib.Utils

def add (a b : Nat) : Nat := a + b

private def helper (x : Nat) : Nat := x * 2

end MyLib.Utils
```

**Besonderheiten:**
- Module werden durch Dateien definiert (Dateipfad = Modulpfad).
- `namespace` definiert benannte Bereiche innerhalb eines Moduls.
- `private` markiert Definitionen als nicht-öffentlich.
- `section` und `variable` ermöglichen lokale Parametrisierung.

**Weiterführende Links:**
- [Lean 4 Documentation - Modules](https://lean-lang.org/lean4/doc/modules.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
local math_utils = {}

function math_utils.add(a, b)
    return a + b
end

return math_utils
```

**Besonderheiten:**
- Module werden als Tabellen definiert
- `return` am Ende exportiert das Modul
- `local` macht Variablen lokal

**Weiterführende Links:**
- [Lua Documentation - Modules](https://www.lua.org/manual/5.4/manual.html#6.3)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
:- module math_utils.
:- interface.

:- func add(int, int) = int.

:- implementation.

add(A, B) = A + B.
```

**Besonderheiten:**
- Module werden mit `:- module name.` deklariert
- Trennung in `:- interface.` (öffentliche Schnittstelle) und `:- implementation.` (private Implementierung)
- Jede `.m`-Datei enthält genau ein Modul
- Sub-Module können verschachtelt oder in separaten Dateien definiert werden

**Weiterführende Links:**
- [Mercury Language Reference - Modules](https://www.mercurylang.org/information/doc-release/mercury_ref/Modules.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
module math_utils:
    fn add(a: Int, b: Int) -> Int:
        return a + b
```

**Besonderheiten:**
- Module werden mit `module`-Keyword definiert
- Python-ähnliche Syntax
- Unterstützt strukturierte Module-Definition

**Weiterführende Links:**
- [Mojo Documentation - Modules](https://docs.modular.com/mojo/manual/modules/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Datei: math_utils.nim
# Jede .nim-Datei ist automatisch ein Modul

proc add*(a, b: int): int =  # * = exportiert
  a + b

proc helper(x: int): int =  # kein * = privat
  x * 2
```

**Besonderheiten:**
- Jede `.nim`-Datei ist automatisch ein Modul
- Modulname wird vom Dateinamen abgeleitet
- `*` nach dem Namen exportiert ein Symbol (öffentlich)
- Symbole ohne `*` sind privat (nur im Modul sichtbar)

**Weiterführende Links:**
- [Nim Documentation - Modules](https://nim-lang.org/docs/manual.html#modules)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
unit MathUtils;

interface

function Add(A, B: Integer): Integer;

implementation

function Add(A, B: Integer): Integer;
begin
    Result := A + B;
end;

end.
```

**Besonderheiten:**
- Module werden als Units mit `unit`-Keyword definiert
- Trennung zwischen `interface` und `implementation`
- Units werden mit `uses` importiert

**Weiterführende Links:**
- [Free Pascal Documentation - Units](https://www.freepascal.org/docs-html/ref/refse5.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
module MathUtils = struct
  let add a b = a + b
end
```

**Besonderheiten:**
- Module werden mit `module`-Keyword definiert
- Unterstützt Funktoren (Module als Parameter)
- Kann als Datei-Module oder inline definiert werden

**Weiterführende Links:**
- [OCaml Documentation - Modules](https://ocaml.org/docs/modules)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
package math_utils

add :: proc(a: int, b: int) -> int {
    return a + b
}
```

**Besonderheiten:**
- Module werden als Packages mit `package`-Direktive definiert
- Package-Name entspricht normalerweise dem Verzeichnisnamen
- Unterstützt Package-Hierarchien

**Weiterführende Links:**
- [Odin Documentation - Packages](https://odin-lang.org/docs/overview/#packages)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
:- module(math_utils, [add/3]).

add(A, B, Result) :-
    Result is A + B.
```

**Besonderheiten:**
- Module werden mit `:- module(Name, ExportList).` Direktive definiert
- Die Exportliste enthält Prädikate als `Name/Arity`-Paare
- Prädikate verwenden Ausgabe-Argumente statt Rückgabewerte
- Ein Modul entspricht typischerweise einer Datei

**Weiterführende Links:**
- [SWI-Prolog Documentation - Modules](https://www.swi-prolog.org/pldoc/man?section=defmodule)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
module MathUtils where

add :: Int -> Int -> Int
add a b = a + b
```

**Besonderheiten:**
- Module werden mit `module`-Keyword definiert
- Modulname muss dem Dateipfad entsprechen
- Unterstützt Exportlisten

**Weiterführende Links:**
- [PureScript Documentation - Modules](https://book.purescript.org/chapter3.html)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
#lang racket

(module math-utils racket
  (provide add)
  (define (add a b)
    (+ a b)))
```

**Besonderheiten:**
- Module werden mit `module`-Form definiert
- `provide` spezifiziert exportierte Bindungen
- Unterstützt verschiedene Module-Sprachen

**Weiterführende Links:**
- [Racket Documentation - Modules](https://docs.racket-lang.org/guide/modules.html)

</TabItem>
<TabItem value="roc" label="Roc">

```roc
interface MathUtils
    exposes [add]
    imports []

add : I64, I64 -> I64
add = \a, b -> a + b
```

**Besonderheiten:**
- Module werden mit `interface`-Keyword definiert
- `exposes` spezifiziert exportierte Funktionen
- `imports` listet Abhängigkeiten auf

**Weiterführende Links:**
- [Roc Documentation - Modules](https://www.roc-lang.org/tutorial)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
module MathUtils
  def self.add(a, b)
    a + b
  end
end
```

**Besonderheiten:**
- Module werden mit `module`-Keyword definiert
- Module können als Namespaces oder Mixins verwendet werden
- Unterstützt verschachtelte Module

**Weiterführende Links:**
- [Ruby Documentation - Modules](https://docs.ruby-lang.org/en/3.2/syntax/modules_and_classes_rdoc.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
mod math_utils {
    pub fn add(a: i32, b: i32) -> i32 {
        a + b
    }
}
```

**Besonderheiten:**
- Module werden mit `mod`-Keyword definiert
- `pub` macht Funktionen öffentlich
- Module können als Dateien oder inline definiert werden

**Weiterführende Links:**
- [Rust Documentation - Modules](https://doc.rust-lang.org/book/ch07-02-defining-modules-to-control-scope-and-privacy.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; R7RS Module (define-library)
(define-library (math-utils)
  (export add)
  (begin
    (define (add a b)
      (+ a b))))
```

**Besonderheiten:**
- R7RS verwendet `define-library` für Module
- `export` spezifiziert exportierte Bindungen
- Ältere Syntax variiert je nach Implementierung (Guile: `define-module`, R6RS: `library`)

**Weiterführende Links:**
- [R7RS Scheme - Libraries](https://small.r7rs.org/attachment/r7rs.pdf)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// math_utils.swift
// Module wird automatisch durch Datei erstellt

func add(_ a: Int, _ b: Int) -> Int {
    return a + b
}
```

**Besonderheiten:**
- Module werden automatisch durch Dateien erstellt
- Dateiname bestimmt Modulname
- Unterstützt explizite Module mit `@_exported import`

**Weiterführende Links:**
- [Swift Documentation - Modules](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/accesscontrol/)

</TabItem>
<TabItem value="v" label="V">

```v
module math_utils

pub fn add(a int, b int) int {
    return a + b
}
```

**Besonderheiten:**
- Module werden mit `module`-Direktive definiert
- `pub` macht Funktionen öffentlich
- Modulname entspricht dem Verzeichnisnamen

**Weiterführende Links:**
- [V Documentation - Modules](https://github.com/vlang/v/blob/master/doc/docs.md#modules)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```wolfram
BeginPackage["MathUtils`"]

Add::usage = "Add[a, b] adds two numbers."

Begin["`Private`"]
Add[a_, b_] := a + b
End[]

EndPackage[]
```

**Besonderheiten:**
- Module werden mit `BeginPackage`/`EndPackage` definiert
- `Begin["`Private`"]` definiert private Implementierung
- Unterstützt Package-Hierarchien

**Weiterführende Links:**
- [Wolfram Language Documentation - Packages](https://reference.wolfram.com/language/guide/Packages.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// math_utils.zig
// Module wird automatisch durch Datei erstellt

pub fn add(a: i32, b: i32) i32 {
    return a + b;
}
```

**Besonderheiten:**
- Module werden automatisch durch Dateien erstellt
- `pub` macht Funktionen öffentlich
- Dateiname bestimmt Modulname

**Weiterführende Links:**
- [Zig Documentation - Source Files](https://ziglang.org/documentation/0.11.0/#Source-Encoding)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Modul-Definition über Packages
package com.example.myapp

class MyService {
    String process(String input) {
        return input.toUpperCase()
    }
}
```

**Besonderheiten:**
- Module werden über Java-Packages organisiert
- `package`-Deklaration am Anfang der Datei
- Verzeichnisstruktur muss Package-Struktur entsprechen

**Weiterführende Links:**
- [Groovy Documentation - Packages](https://groovy-lang.org/structure.html#_packages)

</TabItem>
<TabItem value="java" label="Java">

```java
// module-info.java (seit Java 9)
module com.example.myapp {
    requires java.base;          // Abhängigkeit deklarieren
    requires java.sql;           // SQL-Modul einbinden
    exports com.example.myapp.api;  // Paket exportieren
}
```

**Besonderheiten:**
- Java Platform Module System seit Java 9 (JEP 261, Project Jigsaw)
- Moduldefinition in `module-info.java` im Projektstamm
- `requires` für Abhängigkeiten, `exports` für öffentliche Pakete
- Starke Kapselung: nicht-exportierte Pakete sind nicht zugänglich

**Weiterführende Links:**
- [Oracle Java Documentation - Modules](https://docs.oracle.com/javase/specs/jls/se21/html/jls-7.html#jls-7.7)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// ES Module Definition (seit ES2015)
// Datei: mathUtils.js

// Named Exports
export function add(a, b) {
    return a + b;
}

export const PI = 3.14159;

// Default Export
export default class Calculator {
    add(a, b) { return a + b; }
    subtract(a, b) { return a - b; }
}
```

**Besonderheiten:**
- ES-Module seit ES2015/ES6
- Eine Datei ist ein Modul, wenn sie `import` oder `export` Statements enthält
- Unterstützt Named Exports und Default Exports
- Module haben ihren eigenen Scope (kein globaler Namespace-Polluting)
- CommonJS-Module (`module.exports`) werden parallel in Node.js unterstützt

**Weiterführende Links:**
- [MDN Web Docs - JavaScript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)

</TabItem>

<TabItem value="objective-c" label="Objective-C">

```objc
// Module Import (seit Xcode 5)
@import Foundation;
@import UIKit;

// Submodule
@import Foundation.NSString;
```

**Besonderheiten:**
- Clang Modules seit Xcode 5 (2013)
- `@import` statt `#import` für Module
- Module werden durch `module.modulemap` Dateien definiert
- Bessere Compile-Performance als Header-Includes

**Weiterführende Links:**
- [Apple Documentation - Modules](https://developer.apple.com/library/archive/documentation/DeveloperTools/Conceptual/ClangModules/Introduction/Introduction.html)

</TabItem>
</Tabs>


## 15.1.2. Module Import / Export

Import und Export von Modulen, um Code zwischen Modulen zu teilen. Export macht Funktionen, Typen und Variablen für andere Module verfügbar, Import ermöglicht den Zugriff darauf.

### Sprachen {#sprachen}

<Tabs availableTabs={['ada', 'carbon', 'clojure', 'common-lisp', 'crystal', 'd', 'dart', 'elixir', 'elm', 'erlang', 'fortran', 'fsharp', 'gleam', 'groovy', 'haskell', 'idris', 'java', 'javascript', 'julia', 'koka', 'lean4', 'lua', 'mercury', 'mojo', 'nim', 'object-pascal', 'objective-c', 'ocaml', 'odin', 'prolog', 'purescript', 'python', 'racket', 'roc', 'ruby', 'rust', 'scheme', 'swift', 'typescript', 'v', 'wolfram-language', 'zig']}>
<TabItem value="ada" label="Ada">

```ada
-- Export in Math_Utils.ads
package Math_Utils is
    function Add(A, B : Integer) return Integer;
end Math_Utils;

-- Import in anderer Datei
with Math_Utils;
use Math_Utils;

Result : Integer := Add(5, 3);
```

**Besonderheiten:**
- `with` importiert ein Package
- `use` macht Namen direkt verfügbar
- Export erfolgt durch Deklaration in Package-Spezifikation

**Weiterführende Links:**
- [Ada Documentation - Packages](https://learn.adacore.com/courses/intro-to-ada/chapters/packages.html)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Export in math_utils.carbon
package MathUtils api;

fn Add(a: i32, b: i32) -> i32 {
    return a + b;
}

// Import in anderer Datei
package MyApp;

import MathUtils;

fn Main() -> i32 {
    return MathUtils.Add(5, 3);
}
```

**Besonderheiten:**
- `api`-Modifier exportiert öffentliche Funktionen
- `import` importiert ein Package
- Experimentelle Syntax kann sich noch ändern

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Export in math_utils.clj
(ns math-utils)

(defn add [a b]
  (+ a b))

;; Import in anderer Datei
(ns my-app
  (:require [math-utils :as math]))

(def result (math/add 5 3))
```

**Besonderheiten:**
- `:require` importiert Namespaces
- `:as` erstellt Alias
- Unterstützt `:refer` für direkten Import

**Weiterführende Links:**
- [Clojure Documentation - Namespaces](https://clojure.org/reference/namespaces)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Export in math-utils.lisp
(defpackage :math-utils
  (:use :cl)
  (:export :add))

(in-package :math-utils)

(defun add (a b)
  (+ a b))

;; Import in anderer Datei
(defpackage :my-app
  (:use :cl :math-utils))

(in-package :my-app)

(defvar result (add 5 3))
```

**Besonderheiten:**
- `:export` spezifiziert exportierte Symbole
- `:use` importiert alle exportierten Symbole
- Unterstützt `:import-from` für selektiven Import

**Weiterführende Links:**
- [Common Lisp HyperSpec - Packages](http://www.lispworks.com/documentation/HyperSpec/Body/11_.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Export in math_utils.cr
module MathUtils
  def self.add(a : Int32, b : Int32) : Int32
    a + b
  end
end

# Import in anderer Datei
require "./math_utils"

result = MathUtils.add(5, 3)
```

**Besonderheiten:**
- `require` importiert Dateien
- Module-Namen sind automatisch verfügbar
- Unterstützt relative und absolute Pfade

**Weiterführende Links:**
- [Crystal Documentation - Requiring Files](https://crystal-lang.org/reference/1.11/syntax_and_semantics/requiring_files.html)

</TabItem>
<TabItem value="d" label="D">

```d
// Export in math_utils.d
module math_utils;

int add(int a, int b) {
    return a + b;
}

// Import in anderer Datei
module my_app;

import math_utils;

void main() {
    int result = add(5, 3);
}
```

**Besonderheiten:**
- `import` importiert Module
- Unterstützt selektiven Import: `import math_utils : add;`
- Unterstützt `public import` für Re-Export

**Weiterführende Links:**
- [D Language Specification - Import](https://dlang.org/spec/module.html#import-declaration)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Export in math_utils.dart
library math_utils;

int add(int a, int b) {
    return a + b;
}

// Import in anderer Datei
import 'math_utils.dart';

void main() {
    int result = add(5, 3);
}
```

**Besonderheiten:**
- `import` importiert Libraries
- Unterstützt `show` und `hide` für selektiven Import
- Unterstützt `as` für Aliasing

**Weiterführende Links:**
- [Dart Documentation - Libraries](https://dart.dev/guides/libraries/create-library-packages)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Export in math_utils.ex
defmodule MathUtils do
  def add(a, b) do
    a + b
  end
end

# Import in anderer Datei
defmodule MyApp do
  require MathUtils
  
  def calculate do
    MathUtils.add(5, 3)
  end
end
```

**Besonderheiten:**
- `require` importiert Module
- `alias` erstellt Alias
- Unterstützt `import` für Funktions-Import

**Weiterführende Links:**
- [Elixir Documentation - Aliases, require, and import](https://elixir-lang.org/getting-started/alias-require-and-import.html)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Export in MathUtils.elm
module MathUtils exposing (add)

add : Int -> Int -> Int
add a b =
    a + b

-- Import in anderer Datei
import MathUtils

result = MathUtils.add 5 3
```

**Besonderheiten:**
- `exposing` spezifiziert exportierte Funktionen
- `import` importiert Module
- Unterstützt `exposing (..)` für alle Exporte

**Weiterführende Links:**
- [Elm Documentation - Modules](https://guide.elm-lang.org/webapps/modules.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
%% Export in math_utils.erl
-module(math_utils).
-export([add/2]).

add(A, B) ->
    A + B.

%% Import in anderer Datei
-module(my_app).

result() ->
    math_utils:add(5, 3).
```

**Besonderheiten:**
- `-export()` spezifiziert exportierte Funktionen
- Funktionen werden mit Modulname aufgerufen: `module:function()`
- Kein expliziter Import nötig

**Weiterführende Links:**
- [Erlang Documentation - Modules](https://www.erlang.org/doc/reference_manual/modules.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Export in MathUtils.fs
module MathUtils

let add a b = a + b

// Import in anderer Datei
open MathUtils

let result = add 5 3
```

**Besonderheiten:**
- `open` importiert Module
- Unterstützt selektiven Import
- Module werden automatisch exportiert

**Weiterführende Links:**
- [Microsoft F# Documentation - Modules](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/modules)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Export in math_utils.f90
module math_utils
    implicit none
contains
    function add(a, b) result(sum)
        integer, intent(in) :: a, b
        integer :: sum
        sum = a + b
    end function add
end module math_utils

! Import in anderer Datei
program my_app
    use math_utils
    implicit none
    integer :: result
    result = add(5, 3)
end program my_app
```

**Besonderheiten:**
- `use` importiert Module
- Unterstützt `only` für selektiven Import
- `contains` definiert interne Prozeduren

**Weiterführende Links:**
- [Fortran Wiki - Modules](https://fortranwiki.org/fortran/show/Modules)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// Export: pub-Keyword in src/math_utils.gleam
pub fn add(a: Int, b: Int) -> Int {
  a + b
}

// Import: in anderer Datei
import math_utils

pub fn main() {
  math_utils.add(5, 3)
}

// Import mit Alias
import math_utils as math
```

**Besonderheiten:**
- `pub` exportiert Funktionen und Typen
- `import module/name` für Import
- Unterstützt Aliasing mit `as`
- Unterstützt selektiven Import: `import gleam/list.{map, filter}`

**Weiterführende Links:**
- [Gleam Documentation - Modules](https://tour.gleam.run/basics/modules/)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Export in MathUtils.hs
module MathUtils (add) where

add :: Int -> Int -> Int
add a b = a + b

-- Import in anderer Datei
import MathUtils

result = add 5 3
```

**Besonderheiten:**
- Exportliste spezifiziert exportierte Funktionen
- `import` importiert Module
- Unterstützt `qualified` und `as` für Aliasing

**Weiterführende Links:**
- [Haskell Documentation - Modules](https://www.haskell.org/tutorial/modules.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Export in MathUtils.idr
module MathUtils

export
add : Int -> Int -> Int
add a b = a + b

-- Import in anderer Datei
import MathUtils

result : Int
result = add 5 3
```

**Besonderheiten:**
- `export` exportiert Funktionen
- `import` importiert Module
- Unterstützt `public export` für vollständigen Export

**Weiterführende Links:**
- [Idris Documentation - Modules](https://idris2.readthedocs.io/en/latest/tutorial/modules.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Export in math_utils.js
export function add(a, b) {
    return a + b;
}

// Import in anderer Datei
import { add } from './math_utils.js';

const result = add(5, 3);
```

**Besonderheiten:**
- ES6 Modules mit `export` und `import`
- Unterstützt Named Exports und Default Exports
- Unterstützt `import * as` für Namespace-Import

**Weiterführende Links:**
- [MDN Web Docs - JavaScript Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Export in MathUtils.jl
module MathUtils

export add

function add(a::Int, b::Int)::Int
    return a + b
end

end

# Import in anderer Datei
using MathUtils

result = add(5, 3)
```

**Besonderheiten:**
- `export` exportiert Funktionen
- `using` importiert alle exportierten Namen
- Unterstützt `import` für selektiven Import

**Weiterführende Links:**
- [Julia Documentation - Modules](https://docs.julialang.org/en/v1/manual/modules/)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
// Export: pub markiert öffentliche Definitionen
// Datei: math/utils.kk
module math/utils

pub fun add(a : int, b : int) : int
  a + b

pub val pi = 3.14159

// Import in anderer Datei
import math/utils

fun main()
  val result = add(5, 3)
  println(result.show)
```

**Besonderheiten:**
- `pub` markiert Definitionen als öffentlich (exportiert)
- Ohne `pub` sind Definitionen modulprivat
- `import` importiert alle öffentlichen Definitionen eines Moduls
- Qualifizierte Nutzung über Modulnamen möglich

**Weiterführende Links:**
- [Koka Documentation - Modules](https://koka-lang.github.io/koka/doc/book.html#sec-modules)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Import eines Moduls
import MyLib.Utils

-- open macht alle Definitionen ohne Qualifizierung zugänglich
open MyLib.Utils in
#eval add 5 3  -- 8

-- Selektiver Import
open MyLib.Utils (add) in
#eval add 5 3

-- Export: Alle nicht-private Definitionen sind automatisch exportiert
-- private def helper ... → nicht exportiert
-- def add ... → exportiert
```

**Besonderheiten:**
- `import` importiert ein Modul und alle transitiven Abhängigkeiten.
- `open` macht Definitionen ohne Qualifizierung zugänglich.
- Selektiver Import mit `open M (f, g)`.
- Alle Definitionen ohne `private` sind automatisch exportiert.

**Weiterführende Links:**
- [Lean 4 Documentation - Modules](https://lean-lang.org/lean4/doc/modules.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Export in math_utils.lua
local math_utils = {}

function math_utils.add(a, b)
    return a + b
end

return math_utils

-- Import in anderer Datei
local math_utils = require("math_utils")

local result = math_utils.add(5, 3)
```

**Besonderheiten:**
- `return` exportiert das Modul
- `require()` importiert Module
- Module werden in `package.loaded` gecacht

**Weiterführende Links:**
- [Lua Documentation - Modules](https://www.lua.org/manual/5.4/manual.html#6.3)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Export: Interface-Sektion definiert öffentliche Schnittstelle
:- module math_utils.
:- interface.

:- func add(int, int) = int.

:- implementation.

add(A, B) = A + B.

% Import in anderer Datei
:- module main.
:- interface.
:- implementation.

:- import_module math_utils.

:- func result = int.
result = math_utils.add(5, 3).
```

**Besonderheiten:**
- `:- import_module` importiert ein Modul (qualifizierter Zugriff)
- `:- use_module` importiert und macht Namen ohne Qualifizierung verfügbar
- Export wird durch Deklaration in der `:- interface.`-Sektion gesteuert
- Alles in `:- implementation.` ist privat

**Weiterführende Links:**
- [Mercury Language Reference - Modules](https://www.mercurylang.org/information/doc-release/mercury_ref/Modules.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# Export in math_utils.mojo
module math_utils:
    fn add(a: Int, b: Int) -> Int:
        return a + b

# Import in anderer Datei
from math_utils import add

fn main():
    var result = add(5, 3)
```

**Besonderheiten:**
- `from ... import` importiert Funktionen
- Unterstützt `import` für Modul-Import
- Python-ähnliche Syntax

**Weiterführende Links:**
- [Mojo Documentation - Modules](https://docs.modular.com/mojo/manual/modules/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Datei: math_utils.nim
proc add*(a, b: int): int =  # * = exportiert
  a + b

# Datei: main.nim
import math_utils          # Alles importieren
from math_utils import add  # Selektiver Import
import math_utils except add  # Alles außer add

var result = add(5, 3)
```

**Besonderheiten:**
- `import` importiert alle exportierten Symbole
- `from ... import` für selektiven Import
- `import ... except` zum Ausschließen von Symbolen
- Nur mit `*` markierte Symbole sind importierbar

**Weiterführende Links:**
- [Nim Documentation - Import Statement](https://nim-lang.org/docs/manual.html#modules-import-statement)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
{ Export in MathUtils.pas }
unit MathUtils;

interface

function Add(A, B: Integer): Integer;

implementation

function Add(A, B: Integer): Integer;
begin
    Result := A + B;
end;

end.

{ Import in anderer Datei }
unit MyApp;

uses MathUtils;

var
    Result: Integer;
begin
    Result := Add(5, 3);
end.
```

**Besonderheiten:**
- `uses` importiert Units
- `interface`-Sektion definiert Exporte
- Units werden zur Compile-Zeit gelinkt

**Weiterführende Links:**
- [Free Pascal Documentation - Units](https://www.freepascal.org/docs-html/ref/refse5.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Export in math_utils.ml *)
module MathUtils = struct
  let add a b = a + b
end

(* Import in anderer Datei *)
open MathUtils

let result = add 5 3
```

**Besonderheiten:**
- `open` importiert Module
- Unterstützt `module` für explizite Module
- Dateien werden automatisch zu Modulen

**Weiterführende Links:**
- [OCaml Documentation - Modules](https://ocaml.org/docs/modules)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Export in math_utils.odin
package math_utils

add :: proc(a: int, b: int) -> int {
    return a + b
}

// Import in anderer Datei
package my_app

import "math_utils"

main :: proc() {
    result := math_utils.add(5, 3)
}
```

**Besonderheiten:**
- `import` importiert Packages
- Package-Namen werden als Namespace verwendet
- Unterstützt relative und absolute Pfade

**Weiterführende Links:**
- [Odin Documentation - Packages](https://odin-lang.org/docs/overview/#packages)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Export in math_utils.pl
:- module(math_utils, [add/3]).

add(A, B, Result) :-
    Result is A + B.

% Import in anderer Datei
:- use_module(math_utils).

% Nutzung
?- add(5, 3, Result).
% Result = 8
```

**Besonderheiten:**
- `use_module/1` importiert alle exportierten Prädikate
- `use_module/2` ermöglicht selektiven Import: `:- use_module(math_utils, [add/3]).`
- Export wird durch die Moduldefinition festgelegt (zweites Argument von `module/2`)
- Qualifizierter Zugriff: `math_utils:add(5, 3, R)`

**Weiterführende Links:**
- [SWI-Prolog Documentation - Import/Export](https://www.swi-prolog.org/pldoc/man?section=import)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Export in MathUtils.purs
module MathUtils where

add :: Int -> Int -> Int
add a b = a + b

-- Import in anderer Datei
import MathUtils

result = add 5 3
```

**Besonderheiten:**
- `import` importiert Module
- Unterstützt selektiven Import: `import MathUtils (add)`
- Unterstützt `as` für Aliasing

**Weiterführende Links:**
- [PureScript Documentation - Modules](https://book.purescript.org/chapter3.html)

</TabItem>
<TabItem value="python" label="Python">

```python
# Export in math_utils.py
def add(a: int, b: int) -> int:
    return a + b

# Import in anderer Datei
from math_utils import add

result = add(5, 3)
```

**Besonderheiten:**
- `from ... import` importiert Funktionen
- Unterstützt `import` für Modul-Import
- `__all__` spezifiziert Standard-Exporte

**Weiterführende Links:**
- [Python Documentation - Modules](https://docs.python.org/3/tutorial/modules.html)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
#lang racket

;; Export in math-utils.rkt
(module math-utils racket
  (provide add)
  (define (add a b)
    (+ a b)))

;; Import in anderer Datei
(require "math-utils.rkt")

(define result (add 5 3))
```

**Besonderheiten:**
- `provide` exportiert Bindungen
- `require` importiert Module
- Unterstützt verschiedene Module-Sprachen

**Weiterführende Links:**
- [Racket Documentation - Modules](https://docs.racket-lang.org/guide/modules.html)

</TabItem>
<TabItem value="roc" label="Roc">

```roc
# Export in MathUtils.roc
interface MathUtils
    exposes [add]
    imports []

add : I64, I64 -> I64
add = \a, b -> a + b

# Import in anderer Datei
interface Main
    exposes [main]
    imports [MathUtils]

main = MathUtils.add 5 3
```

**Besonderheiten:**
- `exposes` spezifiziert exportierte Funktionen
- `imports` importiert Module
- Qualifizierter Zugriff mit `ModuleName.function`

**Weiterführende Links:**
- [Roc Documentation - Modules](https://www.roc-lang.org/tutorial)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Export in math_utils.rb
module MathUtils
  def self.add(a, b)
    a + b
  end
end

# Import in anderer Datei
require_relative 'math_utils'

result = MathUtils.add(5, 3)
```

**Besonderheiten:**
- `require` oder `require_relative` importiert Dateien
- Module-Namen sind automatisch verfügbar
- Unterstützt `include` für Mixins

**Weiterführende Links:**
- [Ruby Documentation - Modules](https://docs.ruby-lang.org/en/3.2/syntax/modules_and_classes_rdoc.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Export in math_utils.rs
pub mod math_utils {
    pub fn add(a: i32, b: i32) -> i32 {
        a + b
    }
}

// Import in anderer Datei
use math_utils::add;

fn main() {
    let result = add(5, 3);
}
```

**Besonderheiten:**
- `pub` exportiert Module und Funktionen
- `use` importiert Module
- Unterstützt `pub use` für Re-Export

**Weiterführende Links:**
- [Rust Documentation - Modules](https://doc.rust-lang.org/book/ch07-02-defining-modules-to-control-scope-and-privacy.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; Export in math-utils.sld
(define-library (math-utils)
  (export add)
  (begin
    (define (add a b)
      (+ a b))))

;; Import in anderer Datei
(import (math-utils))

(define result (add 5 3))
```

**Besonderheiten:**
- R7RS: `import` für Module importieren
- R7RS: `export` innerhalb `define-library` für Exporte
- Guile verwendet abweichende Syntax (`use-modules`, `#:export`)

**Weiterführende Links:**
- [R7RS Scheme - Libraries](https://small.r7rs.org/attachment/r7rs.pdf)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Export in math_utils.swift
public func add(_ a: Int, _ b: Int) -> Int {
    return a + b
}

// Import in anderer Datei
import math_utils

let result = add(5, 3)
```

**Besonderheiten:**
- `public` exportiert Funktionen
- `import` importiert Module
- Module werden automatisch durch Dateien erstellt

**Weiterführende Links:**
- [Swift Documentation - Access Control](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/accesscontrol/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Export in math_utils.ts
export function add(a: number, b: number): number {
    return a + b;
}

// Import in anderer Datei
import { add } from './math_utils';

const result = add(5, 3);
```

**Besonderheiten:**
- ES6 Modules mit `export` und `import`
- Unterstützt Named Exports und Default Exports
- Unterstützt `import type` für Typ-Importe

**Weiterführende Links:**
- [TypeScript Documentation - Modules](https://www.typescriptlang.org/docs/handbook/modules.html)

</TabItem>
<TabItem value="v" label="V">

```v
// Export in math_utils.v
module math_utils

pub fn add(a int, b int) int {
    return a + b
}

// Import in anderer Datei
module my_app

import math_utils

fn main() {
    result := math_utils.add(5, 3)
}
```

**Besonderheiten:**
- `pub` exportiert Funktionen
- `import` importiert Module
- Modulname entspricht dem Verzeichnisnamen

**Weiterführende Links:**
- [V Documentation - Modules](https://github.com/vlang/v/blob/master/doc/docs.md#modules)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```wolfram
(* Export in MathUtils.m *)
BeginPackage["MathUtils`"]

Add::usage = "Add[a, b] adds two numbers."

Begin["`Private`"]
Add[a_, b_] := a + b
End[]

EndPackage[]

(* Import in anderer Datei *)
Needs["MathUtils`"]

result = Add[5, 3]
```

**Besonderheiten:**
- `BeginPackage`/`EndPackage` definiert Exporte
- `Needs` oder `Get` importiert Packages
- Unterstützt Package-Hierarchien

**Weiterführende Links:**
- [Wolfram Language Documentation - Packages](https://reference.wolfram.com/language/guide/Packages.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Export in math_utils.zig
pub fn add(a: i32, b: i32) i32 {
    return a + b;
}

// Import in anderer Datei
const math_utils = @import("math_utils.zig");

pub fn main() void {
    const result = math_utils.add(5, 3);
}
```

**Besonderheiten:**
- `pub` exportiert Funktionen
- `@import()` importiert Module
- Module werden automatisch durch Dateien erstellt

**Weiterführende Links:**
- [Zig Documentation - Source Files](https://ziglang.org/documentation/0.11.0/#Source-Encoding)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Import-Statements
import java.util.ArrayList
import groovy.transform.TupleConstructor

// Wildcard-Import
import java.util.*

// Statischer Import
import static java.lang.Math.PI
import static java.lang.Math.sqrt

// Alias-Import
import java.util.Date as JDate
import java.sql.Date as SqlDate

def d1 = new JDate()
def d2 = new SqlDate(System.currentTimeMillis())
```

**Besonderheiten:**
- `import` für Klassen-Import
- `import static` für statische Methoden/Felder
- `as` für Import-Aliase (Umbenennung)
- Standard-Imports: `java.lang.*`, `java.util.*`, `groovy.lang.*`, etc.

**Weiterführende Links:**
- [Groovy Documentation - Imports](https://groovy-lang.org/structure.html#_imports)

</TabItem>
<TabItem value="java" label="Java">

```java
// module-info.java (seit Java 9)
module com.example.myapp {
    // Import (Abhängigkeiten)
    requires java.sql;
    requires transitive java.logging;  // Transitiver Export

    // Export (öffentliche Pakete)
    exports com.example.myapp.api;
    exports com.example.myapp.util to com.example.other;  // Eingeschränkter Export

    // Services
    provides com.example.spi.MyService with com.example.impl.MyServiceImpl;
    uses com.example.spi.MyService;
}
```

**Besonderheiten:**
- `requires` importiert Abhängigkeiten
- `requires transitive` macht Abhängigkeit für abhängige Module sichtbar
- `exports` macht Pakete für alle Module zugänglich
- `exports ... to` beschränkt Zugriff auf bestimmte Module

**Weiterführende Links:**
- [Oracle Java Documentation - Modules](https://docs.oracle.com/javase/specs/jls/se21/html/jls-7.html#jls-7.7)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Klassisches Header-Import
#import <Foundation/Foundation.h>
#import "MyClass.h"

// Module Import (seit Xcode 5)
@import Foundation;

// Selektiver Import
@import Foundation.NSString;
```

**Besonderheiten:**
- `#import` verhindert doppeltes Einbinden (im Gegensatz zu C `#include`)
- `@import` für Module (seit Xcode 5)
- Spitzklammern `<>` für System-/Framework-Header
- Anführungszeichen `""` für projektlokale Header

**Weiterführende Links:**
- [Apple Documentation - Modules](https://developer.apple.com/library/archive/documentation/DeveloperTools/Conceptual/ClangModules/Introduction/Introduction.html)

</TabItem>
</Tabs>


## 15.1.3. Namespaces

Namespaces organisieren Code in logische Gruppen und vermeiden Namenskonflikte durch hierarchische Namensräume. Sie ermöglichen es, Bezeichner in verschiedenen Kontexten zu verwenden.

### Sprachen {#sprachen}

<Tabs availableTabs={['ada', 'carbon', 'clojure', 'common-lisp', 'cpp', 'csharp', 'crystal', 'd', 'dart', 'elixir', 'elm', 'fsharp', 'fortran', 'gleam', 'go', 'groovy', 'haskell', 'haxe', 'idris', 'java', 'julia', 'koka', 'kotlin', 'lean4', 'lua', 'mercury', 'mojo', 'nim', 'object-pascal', 'objective-c', 'ocaml', 'odin', 'perl', 'php', 'prolog', 'purescript', 'python', 'racket', 'ruby', 'rust', 'scala', 'swift', 'typescript', 'vbnet', 'v', 'wolfram-language', 'zig']} yellowTabs={['erlang', 'roc', 'scheme']}>
<TabItem value="ada" label="Ada">

```ada
package Math.Utils is
    function Add(A, B : Integer) return Integer;
end Math.Utils;

package body Math.Utils is
    function Add(A, B : Integer) return Integer is
    begin
        return A + B;
    end Add;
end Math.Utils;

with Math.Utils;
Result : Integer := Math.Utils.Add(5, 3);
```

**Besonderheiten:**
- Packages können verschachtelt werden
- Punkt-Notation für verschachtelte Packages
- Unterstützt hierarchische Namespaces

**Weiterführende Links:**
- [Ada Documentation - Packages](https://learn.adacore.com/courses/intro-to-ada/chapters/packages.html)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
package Math api;

package Math.Utils api;

fn Add(a: i32, b: i32) -> i32 {
    return a + b;
}
```

**Besonderheiten:**
- Packages können verschachtelt werden
- Punkt-Notation für verschachtelte Packages
- Experimentelle Syntax kann sich noch ändern

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
(ns math.utils)

(defn add [a b]
  (+ a b))

;; Verschachtelter Namespace
(ns math.utils.advanced)

(defn multiply [a b]
  (* a b))
```

**Besonderheiten:**
- Namespaces können verschachtelt werden
- Punkt-Notation für verschachtelte Namespaces
- Unterstützt dynamische Namespace-Erstellung

**Weiterführende Links:**
- [Clojure Documentation - Namespaces](https://clojure.org/reference/namespaces)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
(defpackage :math.utils
  (:use :cl)
  (:export :add))

(in-package :math.utils)

(defun add (a b)
  (+ a b))
```

**Besonderheiten:**
- Packages können verschachtelt werden
- Punkt-Notation für verschachtelte Packages
- Unterstützt hierarchische Namespaces

**Weiterführende Links:**
- [Common Lisp HyperSpec - Packages](http://www.lispworks.com/documentation/HyperSpec/Body/11_.htm)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
namespace Math {
    namespace Utils {
        int add(int a, int b) {
            return a + b;
        }
    }
}

// Verwendung
int result = Math::Utils::add(5, 3);

// Oder mit using
using namespace Math::Utils;
int result2 = add(5, 3);
```

**Besonderheiten:**
- Namespaces können verschachtelt werden
- `::` für Namespace-Trennung
- Unterstützt `using namespace` für direkten Zugriff

**Weiterführende Links:**
- [cppreference.com - Namespaces](https://en.cppreference.com/w/cpp/language/namespace)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
namespace Math.Utils
{
    public static class Calculator
    {
        public static int Add(int a, int b)
        {
            return a + b;
        }
    }
}

// Verwendung
using Math.Utils;
int result = Calculator.Add(5, 3);
```

**Besonderheiten:**
- Namespaces können verschachtelt werden
- Punkt-Notation für verschachtelte Namespaces
- `using` macht Namespace-Namen verfügbar

**Weiterführende Links:**
- [Microsoft C# Documentation - Namespaces](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/namespace)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
module Math
  module Utils
    def self.add(a : Int32, b : Int32) : Int32
      a + b
    end
  end
end

# Verwendung
result = Math::Utils.add(5, 3)
```

**Besonderheiten:**
- Module können verschachtelt werden
- `::` für Namespace-Trennung
- Unterstützt hierarchische Namespaces

**Weiterführende Links:**
- [Crystal Documentation - Modules](https://crystal-lang.org/reference/1.11/syntax_and_semantics/modules.html)

</TabItem>
<TabItem value="d" label="D">

```d
module math.utils;

int add(int a, int b) {
    return a + b;
}

// Verwendung
import math.utils;
int result = add(5, 3);
```

**Besonderheiten:**
- Module-Namen können Punkte enthalten
- Punkt-Notation für hierarchische Module
- Unterstützt Package-Hierarchien

**Weiterführende Links:**
- [D Language Specification - Modules](https://dlang.org/spec/module.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
library math.utils;

int add(int a, int b) {
    return a + b;
}

// Verwendung
import 'math/utils.dart' as math;
int result = math.add(5, 3);
```

**Besonderheiten:**
- Libraries können verschachtelt werden
- Pfad-basierte Namespaces
- Unterstützt `as` für Aliasing

**Weiterführende Links:**
- [Dart Documentation - Libraries](https://dart.dev/guides/libraries/create-library-packages)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
defmodule Math.Utils do
  def add(a, b) do
    a + b
  end
end

# Verwendung
result = Math.Utils.add(5, 3)
```

**Besonderheiten:**
- Module können verschachtelt werden
- Punkt-Notation für verschachtelte Module
- Unterstützt hierarchische Namespaces

**Weiterführende Links:**
- [Elixir Documentation - Modules](https://elixir-lang.org/getting-started/modules-and-functions.html)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
module Math.Utils exposing (add)

add : Int -> Int -> Int
add a b =
    a + b

-- Verwendung
import Math.Utils
result = Math.Utils.add 5 3
```

**Besonderheiten:**
- Module können verschachtelt werden
- Punkt-Notation für verschachtelte Module
- Modulname muss dem Dateipfad entsprechen

**Weiterführende Links:**
- [Elm Documentation - Modules](https://guide.elm-lang.org/webapps/modules.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
-module(math_utils).
-export([add/2]).

add(A, B) ->
    A + B.

%% Verwendung
result() ->
    math_utils:add(5, 3).
```

**Besonderheiten:**
- Module-Namen können Unterstriche enthalten
- Unterstützt hierarchische Namenskonventionen
- Keine explizite Verschachtelung, aber Namenskonventionen

**Weiterführende Links:**
- [Erlang Documentation - Modules](https://www.erlang.org/doc/reference_manual/modules.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
namespace Math.Utils

module Calculator =
    let add a b = a + b

// Verwendung
open Math.Utils
let result = Calculator.add 5 3
```

**Besonderheiten:**
- Namespaces können verschachtelt werden
- Punkt-Notation für verschachtelte Namespaces
- Unterstützt sowohl Namespaces als auch Module

**Weiterführende Links:**
- [Microsoft F# Documentation - Namespaces](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/namespaces)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
module math_utils
    implicit none
contains
    function add(a, b) result(sum)
        integer, intent(in) :: a, b
        integer :: sum
        sum = a + b
    end function add
end module math_utils

! Verwendung
program my_app
    use math_utils
    implicit none
    integer :: result
    result = add(5, 3)
end program my_app
```

**Besonderheiten:**
- Module können verschachtelt werden
- Unterstützt hierarchische Namenskonventionen
- `use` importiert Module-Namespace

**Weiterführende Links:**
- [Fortran Wiki - Modules](https://fortranwiki.org/fortran/show/Modules)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// Namespaces durch Verzeichnisstruktur
// Datei: src/math/utils.gleam

pub fn add(a: Int, b: Int) -> Int {
  a + b
}

// Import
import math/utils

pub fn main() {
  utils.add(5, 3)
}
```

**Besonderheiten:**
- Module dienen als Namespaces
- Verzeichnisstruktur definiert die Hierarchie
- `/` als Separator in Import-Pfaden
- Modulname ist der letzte Teil des Pfads (z.B. `utils` bei `import math/utils`)

**Weiterführende Links:**
- [Gleam Documentation - Modules](https://tour.gleam.run/basics/modules/)

</TabItem>
<TabItem value="go" label="Go">

```go
package math

package utils

func Add(a, b int) int {
    return a + b
}

// Verwendung
import "math/utils"
result := utils.Add(5, 3)
```

**Besonderheiten:**
- Packages können verschachtelt werden
- Pfad-basierte Namespaces
- Unterstützt hierarchische Package-Struktur

**Weiterführende Links:**
- [Go Documentation - Packages](https://go.dev/doc/effective_go#names)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
package math.utils

class Calculator {
    static int add(int a, int b) {
        return a + b
    }
}

// Verwendung
import math.utils.Calculator
def result = Calculator.add(5, 3)
```

**Besonderheiten:**
- Packages können verschachtelt werden
- Punkt-Notation für verschachtelte Packages
- Unterstützt hierarchische Namespaces

**Weiterführende Links:**
- [Groovy Documentation - Packages](https://groovy-lang.org/structure.html#_packages)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
module Math.Utils (add) where

add :: Int -> Int -> Int
add a b = a + b

-- Verwendung
import Math.Utils
result = add 5 3
```

**Besonderheiten:**
- Module können verschachtelt werden
- Punkt-Notation für verschachtelte Module
- Modulname muss dem Dateipfad entsprechen

**Weiterführende Links:**
- [Haskell Documentation - Modules](https://www.haskell.org/tutorial/modules.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
package math.utils;

class Calculator {
    public static function add(a: Int, b: Int): Int {
        return a + b;
    }
}

// Verwendung
import math.utils.Calculator;
var result = Calculator.add(5, 3);
```

**Besonderheiten:**
- Packages können verschachtelt werden
- Punkt-Notation für verschachtelte Packages
- Unterstützt hierarchische Namespaces

**Weiterführende Links:**
- [Haxe Documentation - Packages](https://haxe.org/manual/type-system-packages.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
module Math.Utils

export
add : Int -> Int -> Int
add a b = a + b

-- Verwendung
import Math.Utils
result : Int
result = add 5 3
```

**Besonderheiten:**
- Module können verschachtelt werden
- Punkt-Notation für verschachtelte Module
- Modulname entspricht dem Dateipfad

**Weiterführende Links:**
- [Idris Documentation - Modules](https://idris2.readthedocs.io/en/latest/tutorial/modules.html)

</TabItem>
<TabItem value="java" label="Java">

```java
package math.utils;

public class Calculator {
    public static int add(int a, int b) {
        return a + b;
    }
}

// Verwendung
import math.utils.Calculator;
int result = Calculator.add(5, 3);
```

**Besonderheiten:**
- Packages können verschachtelt werden
- Punkt-Notation für verschachtelte Packages
- Unterstützt hierarchische Namespaces

**Weiterführende Links:**
- [Oracle Java Documentation - Packages](https://docs.oracle.com/javase/tutorial/java/package/packages.html)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
module Math
    module Utils
        export add
        function add(a::Int, b::Int)::Int
            return a + b
        end
    end
end

# Verwendung
using Math.Utils
result = add(5, 3)
```

**Besonderheiten:**
- Module können verschachtelt werden
- Punkt-Notation für verschachtelte Module
- Unterstützt hierarchische Namespaces

**Weiterführende Links:**
- [Julia Documentation - Modules](https://docs.julialang.org/en/v1/manual/modules/)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
// Module als Namespaces (Verzeichnisstruktur)
// Datei: math/utils.kk → Namespace math/utils
module math/utils

pub fun add(a : int, b : int) : int
  a + b

// Datei: math/advanced.kk → Namespace math/advanced
module math/advanced

import math/utils

pub fun double-add(a : int, b : int) : int
  add(a, b) + add(a, b)
```

**Besonderheiten:**
- Module dienen als Namespaces
- Verzeichnisstruktur definiert die Namespace-Hierarchie
- Qualifizierte Aufrufe über Modulnamen möglich
- Kein separates Namespace-Keyword – Module sind Namespaces

**Weiterführende Links:**
- [Koka Documentation - Modules](https://koka-lang.github.io/koka/doc/book.html#sec-modules)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Namespace-Definition
namespace Math.Utils

def add (a b : Nat) : Nat := a + b
def multiply (a b : Nat) : Nat := a * b

end Math.Utils

-- Qualifizierte Nutzung
#eval Math.Utils.add 5 3  -- 8

-- Namespace öffnen
open Math.Utils in
#eval add 5 3  -- 8

-- Verschachtelte Namespaces
namespace Math.Advanced
  open Math.Utils
  def doubleAdd (a b : Nat) : Nat := add a b + add a b
end Math.Advanced
```

**Besonderheiten:**
- `namespace` definiert hierarchische Namespaces.
- Punkt-Notation für verschachtelte Namespaces (`Math.Utils`).
- `open` macht Definitionen ohne Qualifizierung zugänglich.
- `section` bietet temporäre Parametrisierung innerhalb eines Scopes.

**Weiterführende Links:**
- [Lean 4 Documentation - Namespaces](https://lean-lang.org/lean4/doc/modules.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
package math.utils

object Calculator {
    fun add(a: Int, b: Int): Int {
        return a + b
    }
}

// Verwendung
import math.utils.Calculator
val result = Calculator.add(5, 3)
```

**Besonderheiten:**
- Packages können verschachtelt werden
- Punkt-Notation für verschachtelte Packages
- Unterstützt hierarchische Namespaces

**Weiterführende Links:**
- [Kotlin Documentation - Packages](https://kotlinlang.org/docs/packages.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Namespace als Tabelle
local Math = {}

Math.Utils = {}

function Math.Utils.add(a, b)
    return a + b
end

-- Verwendung
local result = Math.Utils.add(5, 3)
```

**Besonderheiten:**
- Namespaces werden als Tabellen implementiert
- Punkt-Notation für verschachtelte Tabellen
- Unterstützt hierarchische Namespaces

**Weiterführende Links:**
- [Lua Documentation - Tables](https://www.lua.org/manual/5.4/manual.html#2.1)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Sub-Module als Namespaces
:- module math.
:- interface.

:- include_module utils.

:- implementation.

:- module math.utils.
:- interface.

:- func add(int, int) = int.

:- implementation.

add(A, B) = A + B.

:- end_module math.utils.

% Verwendung
:- import_module math.utils.
Result = math.utils.add(5, 3)
```

**Besonderheiten:**
- Module dienen als Namespaces mit Punkt-Notation (`math.utils`)
- Sub-Module ermöglichen hierarchische Namensräume
- `:- include_module` registriert Sub-Module im Eltern-Modul
- Qualifizierter Zugriff über `modul.name`

**Weiterführende Links:**
- [Mercury Language Reference - Sub-Modules](https://www.mercurylang.org/information/doc-release/mercury_ref/Sub_002dmodules.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
module Math:
    module Utils:
        fn add(a: Int, b: Int) -> Int:
            return a + b

# Verwendung
from Math.Utils import add
var result = add(5, 3)
```

**Besonderheiten:**
- Module können verschachtelt werden
- Punkt-Notation für verschachtelte Module
- Python-ähnliche Syntax

**Weiterführende Links:**
- [Mojo Documentation - Modules](https://docs.modular.com/mojo/manual/modules/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Verzeichnisstruktur als Namespace:
# math/utils.nim
proc add*(a, b: int): int = a + b

# main.nim
import math/utils
echo add(5, 3)

# Qualifizierter Zugriff
import math/utils as mu
echo mu.add(5, 3)
```

**Besonderheiten:**
- Verzeichnisstruktur definiert Namespaces
- Module können mit `as` umbenannt werden
- Qualifizierter Zugriff mit `modul.symbol`
- Kein dediziertes Namespace-Keyword

**Weiterführende Links:**
- [Nim Documentation - Modules](https://nim-lang.org/docs/manual.html#modules)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
unit Math.Utils;

interface

function Add(A, B: Integer): Integer;

implementation

function Add(A, B: Integer): Integer;
begin
    Result := A + B;
end;

end.

{ Verwendung }
uses Math.Utils;

var
    Result: Integer;
begin
    Result := Add(5, 3);
end.
```

**Besonderheiten:**
- Units können verschachtelt werden
- Punkt-Notation für verschachtelte Units
- Unterstützt hierarchische Namespaces

**Weiterführende Links:**
- [Free Pascal Documentation - Units](https://www.freepascal.org/docs-html/ref/refse5.html)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// MathUtils.h
#import <Foundation/Foundation.h>

@interface MathUtils : NSObject
+ (int)add:(int)a with:(int)b;
@end

// Verwendung
#import "MathUtils.h"
int result = [MathUtils add:5 with:3];
```

**Besonderheiten:**
- Frameworks können als Namespaces dienen
- Unterstützt hierarchische Framework-Struktur
- Seit Objective-C 2.0 mit @import für Module

**Weiterführende Links:**
- [Apple Documentation - Modules](https://clang.llvm.org/docs/Modules.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
module Math = struct
  module Utils = struct
    let add a b = a + b
  end
end

(* Verwendung *)
let result = Math.Utils.add 5 3
```

**Besonderheiten:**
- Module können verschachtelt werden
- Punkt-Notation für verschachtelte Module
- Unterstützt hierarchische Namespaces

**Weiterführende Links:**
- [OCaml Documentation - Modules](https://ocaml.org/docs/modules)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
package math.utils

add :: proc(a: int, b: int) -> int {
    return a + b
}

// Verwendung
import "math/utils"
result := math.utils.add(5, 3)
```

**Besonderheiten:**
- Packages können verschachtelt werden
- Pfad-basierte Namespaces
- Unterstützt hierarchische Package-Struktur

**Weiterführende Links:**
- [Odin Documentation - Packages](https://odin-lang.org/docs/overview/#packages)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
package Math::Utils;

sub add {
    my ($a, $b) = @_;
    return $a + $b;
}

# Verwendung
use Math::Utils;
my $result = Math::Utils::add(5, 3);
```

**Besonderheiten:**
- Packages können verschachtelt werden
- `::` für Namespace-Trennung
- Unterstützt hierarchische Namespaces

**Weiterführende Links:**
- [Perl Documentation - Packages](https://perldoc.perl.org/perlmod)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
namespace Math\Utils;

function add(int $a, int $b): int {
    return $a + $b;
}

// Verwendung
use Math\Utils\add;
$result = add(5, 3);
```

**Besonderheiten:**
- Namespaces können verschachtelt werden
- Backslash für Namespace-Trennung
- Unterstützt hierarchische Namespaces

**Weiterführende Links:**
- [PHP Documentation - Namespaces](https://www.php.net/manual/en/language.namespaces.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
:- module(math_utils, [add/3]).

add(A, B, Result) :-
    Result is A + B.

% Qualifizierter Zugriff aus anderem Modul
?- math_utils:add(5, 3, Result).
% Result = 8

% Unqualifizierter Zugriff nach use_module
:- use_module(math_utils).
?- add(5, 3, Result).
% Result = 8
```

**Besonderheiten:**
- Module dienen als Namespaces in Prolog
- Qualifizierter Zugriff über `Modul:Prädikat`
- Namenskonflikte werden durch Modulqualifikation aufgelöst
- Kein separates Namespace-Konzept — Module sind Namespaces

**Weiterführende Links:**
- [SWI-Prolog Documentation - Overriding Predicate References](https://www.swi-prolog.org/pldoc/man?section=overrule)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
module Math.Utils where

add :: Int -> Int -> Int
add a b = a + b

-- Verwendung
import Math.Utils
result = add 5 3
```

**Besonderheiten:**
- Module können verschachtelt werden
- Punkt-Notation für verschachtelte Module
- Modulname muss dem Dateipfad entsprechen

**Weiterführende Links:**
- [PureScript Documentation - Modules](https://book.purescript.org/chapter3.html)

</TabItem>
<TabItem value="python" label="Python">

```python
# math/utils.py
def add(a: int, b: int) -> int:
    return a + b

# Verwendung
from math import utils
result = utils.add(5, 3)
```

**Besonderheiten:**
- Module können verschachtelt werden
- Punkt-Notation für verschachtelte Module
- Pfad-basierte Namespaces

**Weiterführende Links:**
- [Python Documentation - Modules](https://docs.python.org/3/tutorial/modules.html)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
#lang racket

(module math racket
  (module utils racket
    (provide add)
    (define (add a b)
      (+ a b))))

(require (submod "." math utils))
(define result (add 5 3))
```

**Besonderheiten:**
- Module können verschachtelt werden
- Unterstützt hierarchische Module-Struktur
- `submod` für verschachtelte Module

**Weiterführende Links:**
- [Racket Documentation - Modules](https://docs.racket-lang.org/guide/modules.html)

</TabItem>
<TabItem value="roc" label="Roc">

```roc
# Module als Namespaces
interface MathUtils
    exposes [add]
    imports []

add : I64, I64 -> I64
add = \a, b -> a + b

# Verwendung
# MathUtils.add 5 3
```

**Besonderheiten:**
- Module dienen als Namespaces
- Qualifizierter Zugriff mit `ModuleName.function`
- Keine verschachtelten Namespaces

**Weiterführende Links:**
- [Roc Documentation - Modules](https://www.roc-lang.org/tutorial)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
module Math
  module Utils
    def self.add(a, b)
      a + b
    end
  end
end

# Verwendung
result = Math::Utils.add(5, 3)
```

**Besonderheiten:**
- Module können verschachtelt werden
- `::` für Namespace-Trennung
- Unterstützt hierarchische Namespaces

**Weiterführende Links:**
- [Ruby Documentation - Modules](https://docs.ruby-lang.org/en/3.2/syntax/modules_and_classes_rdoc.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
mod math {
    pub mod utils {
        pub fn add(a: i32, b: i32) -> i32 {
            a + b
        }
    }
}

// Verwendung
use math::utils;
let result = utils::add(5, 3);
```

**Besonderheiten:**
- Module können verschachtelt werden
- `::` für Namespace-Trennung
- Unterstützt hierarchische Namespaces

**Weiterführende Links:**
- [Rust Documentation - Modules](https://doc.rust-lang.org/book/ch07-02-defining-modules-to-control-scope-and-privacy.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
package math.utils

object Calculator {
    def add(a: Int, b: Int): Int = {
        a + b
    }
}

// Verwendung
import math.utils.Calculator
val result = Calculator.add(5, 3)
```

**Besonderheiten:**
- Packages können verschachtelt werden
- Punkt-Notation für verschachtelte Packages
- Unterstützt hierarchische Namespaces

**Weiterführende Links:**
- [Scala Documentation - Packages](https://docs.scala-lang.org/tour/packages.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; Hierarchische Namespaces über Library-Namen
(define-library (math utils)
  (export add)
  (begin
    (define (add a b)
      (+ a b))))

;; Verwendung
(import (math utils))
(define result (add 5 3))
```

**Besonderheiten:**
- Namespaces werden durch hierarchische Library-Namen realisiert
- R7RS verwendet `define-library` mit verschachtelten Namen
- Kein separates Namespace-Konzept wie in anderen Sprachen

**Weiterführende Links:**
- [R7RS Scheme - Libraries](https://small.r7rs.org/attachment/r7rs.pdf)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// math/utils.swift
// Module wird automatisch durch Datei erstellt

public func add(_ a: Int, _ b: Int) -> Int {
    return a + b
}

// Verwendung
import math
let result = math.add(5, 3)
```

**Besonderheiten:**
- Module werden automatisch durch Dateien erstellt
- Unterstützt hierarchische Module-Struktur
- Pfad-basierte Namespaces

**Weiterführende Links:**
- [Swift Documentation - Access Control](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/accesscontrol/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// math/utils.ts
export namespace Math {
    export namespace Utils {
        export function add(a: number, b: number): number {
            return a + b;
        }
    }
}

// Verwendung
import { Math } from './math/utils';
const result = Math.Utils.add(5, 3);
```

**Besonderheiten:**
- Namespaces können verschachtelt werden
- Punkt-Notation für verschachtelte Namespaces
- Unterstützt sowohl Namespaces als auch ES6 Modules

**Weiterführende Links:**
- [TypeScript Documentation - Namespaces](https://www.typescriptlang.org/docs/handbook/namespaces.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
Namespace Math.Utils
    Public Module Calculator
        Public Function Add(a As Integer, b As Integer) As Integer
            Return a + b
        End Function
    End Module
End Namespace

' Verwendung
Imports Math.Utils
Dim result As Integer = Calculator.Add(5, 3)
```

**Besonderheiten:**
- Namespaces können verschachtelt werden
- Punkt-Notation für verschachtelte Namespaces
- Unterstützt hierarchische Namespaces

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Namespaces](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/program-structure/namespaces)

</TabItem>
<TabItem value="v" label="V">

```v
module math.utils

pub fn add(a int, b int) int {
    return a + b
}

// Verwendung
import math.utils
result := math.utils.add(5, 3)
```

**Besonderheiten:**
- Module können verschachtelt werden
- Punkt-Notation für verschachtelte Module
- Modulname entspricht dem Verzeichnisnamen

**Weiterführende Links:**
- [V Documentation - Modules](https://github.com/vlang/v/blob/master/doc/docs.md#modules)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```wolfram
BeginPackage["Math`Utils`"]

Add::usage = "Add[a, b] adds two numbers."

Begin["`Private`"]
Add[a_, b_] := a + b
End[]

EndPackage[]

(* Verwendung *)
Needs["Math`Utils`"]
result = Add[5, 3]
```

**Besonderheiten:**
- Packages können verschachtelt werden
- Backtick-Notation für verschachtelte Packages
- Unterstützt hierarchische Namespaces

**Weiterführende Links:**
- [Wolfram Language Documentation - Packages](https://reference.wolfram.com/language/guide/Packages.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// math/utils.zig
pub fn add(a: i32, b: i32) i32 {
    return a + b;
}

// Verwendung
const math_utils = @import("math/utils.zig");
const result = math_utils.add(5, 3);
```

**Besonderheiten:**
- Module werden automatisch durch Dateien erstellt
- Pfad-basierte Namespaces
- Unterstützt hierarchische Module-Struktur

**Weiterführende Links:**
- [Zig Documentation - Source Files](https://ziglang.org/documentation/0.11.0/#Source-Encoding)

</TabItem>
</Tabs>


## 15.1.4. Packages

Packages sind größere organisatorische Einheiten, die Module, Typen und Funktionen zusammenfassen. Sie dienen der Code-Organisation, Wiederverwendung und Verteilung von Bibliotheken.

### Sprachen {#sprachen}

<Tabs availableTabs={['ada', 'carbon', 'clojure', 'common-lisp', 'cpp', 'csharp', 'd', 'dart', 'elixir', 'elm', 'erlang', 'fsharp', 'go', 'groovy', 'haskell', 'haxe', 'java', 'julia', 'kotlin', 'lean4', 'lua', 'nim', 'object-pascal', 'objective-c', 'ocaml', 'odin', 'perl', 'php', 'prolog', 'python', 'r', 'racket', 'roc', 'ruby', 'rust', 'scala', 'swift', 'v', 'vbnet', 'wolfram-language', 'zig']} yellowTabs={['koka']}>
<TabItem value="ada" label="Ada">

```ada
-- Package-Spezifikation in math_utils.ads
package Math_Utils is
    function Add(A, B : Integer) return Integer;
end Math_Utils;

-- Package-Body in math_utils.adb
package body Math_Utils is
    function Add(A, B : Integer) return Integer is
    begin
        return A + B;
    end Add;
end Math_Utils;
```

**Besonderheiten:**
- Packages sind die Hauptorganisationsform in Ada
- Trennung zwischen Package-Spezifikation und Body
- Packages können verschachtelt werden

**Weiterführende Links:**
- [Ada Documentation - Packages](https://learn.adacore.com/courses/intro-to-ada/chapters/packages.html)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
package MathUtils api;

fn Add(a: i32, b: i32) -> i32 {
    return a + b
}
```

**Besonderheiten:**
- Packages sind die Hauptorganisationsform
- `api`-Modifier macht Package öffentlich
- Experimentelle Syntax kann sich noch ändern

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
(ns math.utils)

(defn add [a b]
  (+ a b))
```

**Besonderheiten:**
- Namespaces dienen als Packages
- Unterstützt hierarchische Package-Struktur
- Packages werden in JAR-Dateien verteilt

**Weiterführende Links:**
- [Clojure Documentation - Namespaces](https://clojure.org/reference/namespaces)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
(defpackage :math.utils
  (:use :cl)
  (:export :add))

(in-package :math.utils)

(defun add (a b)
  (+ a b))
```

**Besonderheiten:**
- Packages sind die Hauptorganisationsform
- Unterstützt hierarchische Package-Struktur
- Packages werden über Quicklisp verteilt

**Weiterführende Links:**
- [Common Lisp HyperSpec - Packages](http://www.lispworks.com/documentation/HyperSpec/Body/11_.htm)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Header-Dateien dienen als Package-Interface
// math_utils.h
namespace Math {
    namespace Utils {
        int add(int a, int b);
    }
}

// math_utils.cpp
#include "math_utils.h"
namespace Math {
    namespace Utils {
        int add(int a, int b) {
            return a + b;
        }
    }
}
```

**Besonderheiten:**
- Header-Dateien dienen als Package-Interface
- Namespaces organisieren Packages
- C++20 unterstützt echte Module

**Weiterführende Links:**
- [cppreference.com - Modules](https://en.cppreference.com/w/cpp/language/modules)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
namespace Math.Utils
{
    public static class Calculator
    {
        public static int Add(int a, int b)
        {
            return a + b;
        }
    }
}
```

**Besonderheiten:**
- Namespaces organisieren Packages
- Packages werden als NuGet-Pakete verteilt
- Unterstützt hierarchische Package-Struktur

**Weiterführende Links:**
- [Microsoft C# Documentation - Namespaces](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/namespace)

</TabItem>
<TabItem value="d" label="D">

```d
module math.utils;

int add(int a, int b) {
    return a + b;
}
```

**Besonderheiten:**
- Module dienen als Packages
- Unterstützt hierarchische Package-Struktur
- Packages werden über DUB verteilt

**Weiterführende Links:**
- [D Language Specification - Modules](https://dlang.org/spec/module.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
library math.utils;

int add(int a, int b) {
    return a + b;
}
```

**Besonderheiten:**
- Libraries dienen als Packages
- Packages werden über Pub verteilt
- Unterstützt hierarchische Package-Struktur

**Weiterführende Links:**
- [Dart Documentation - Packages](https://dart.dev/guides/libraries/create-library-packages)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
defmodule Math.Utils do
  def add(a, b) do
    a + b
  end
end
```

**Besonderheiten:**
- Module dienen als Packages
- Packages werden über Hex verteilt
- Unterstützt hierarchische Package-Struktur

**Weiterführende Links:**
- [Elixir Documentation - Modules](https://elixir-lang.org/getting-started/modules-and-functions.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
-module(math_utils).
-export([add/2]).

add(A, B) ->
    A + B.
```

**Besonderheiten:**
- Module dienen als Packages
- Packages werden als OTP Applications verteilt
- Unterstützt hierarchische Namenskonventionen

**Weiterführende Links:**
- [Erlang Documentation - Modules](https://www.erlang.org/doc/reference_manual/modules.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
namespace Math.Utils

module Calculator =
    let add a b = a + b
```

**Besonderheiten:**
- Namespaces organisieren Packages
- Packages werden als NuGet-Pakete verteilt
- Unterstützt hierarchische Package-Struktur

**Weiterführende Links:**
- [Microsoft F# Documentation - Namespaces](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/namespaces)

</TabItem>
<TabItem value="go" label="Go">

```go
package math

package utils

func Add(a, b int) int {
    return a + b
}
```

**Besonderheiten:**
- Packages sind die Hauptorganisationsform
- Packages werden über Go Modules verteilt
- Unterstützt hierarchische Package-Struktur

**Weiterführende Links:**
- [Go Documentation - Packages](https://go.dev/doc/effective_go#names)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
package math.utils

class Calculator {
    static int add(int a, int b) {
        return a + b
    }
}
```

**Besonderheiten:**
- Packages sind die Hauptorganisationsform
- Packages werden als JAR-Dateien verteilt
- Unterstützt hierarchische Package-Struktur

**Weiterführende Links:**
- [Groovy Documentation - Packages](https://groovy-lang.org/structure.html#_packages)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
module Math.Utils (add) where

add :: Int -> Int -> Int
add a b = a + b
```

**Besonderheiten:**
- Module dienen als Packages
- Packages werden über Cabal/Hackage verteilt
- Unterstützt hierarchische Package-Struktur

**Weiterführende Links:**
- [Haskell Documentation - Modules](https://www.haskell.org/tutorial/modules.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
package math.utils;

class Calculator {
    public static function add(a: Int, b: Int): Int {
        return a + b;
    }
}
```

**Besonderheiten:**
- Packages sind die Hauptorganisationsform
- Packages werden über Haxelib verteilt
- Unterstützt hierarchische Package-Struktur

**Weiterführende Links:**
- [Haxe Documentation - Packages](https://haxe.org/manual/type-system-packages.html)

</TabItem>
<TabItem value="java" label="Java">

```java
package math.utils;

public class Calculator {
    public static int add(int a, int b) {
        return a + b;
    }
}
```

**Besonderheiten:**
- Packages sind die Hauptorganisationsform
- Packages werden als JAR-Dateien verteilt
- Unterstützt hierarchische Package-Struktur

**Weiterführende Links:**
- [Oracle Java Documentation - Packages](https://docs.oracle.com/javase/tutorial/java/package/packages.html)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
module MathUtils

export add

function add(a::Int, b::Int)::Int
    return a + b
end

end
```

**Besonderheiten:**
- Module dienen als Packages
- Packages werden über Julia Package Manager verteilt
- Unterstützt hierarchische Package-Struktur

**Weiterführende Links:**
- [Julia Documentation - Packages](https://docs.julialang.org/en/v1/stdlib/Pkg/)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
// Packages über koka.json konfiguriert
// koka.json:
// { "name": "math-utils",
//   "version": "1.0.0",
//   "main": "math/utils" }

// Datei: math/utils.kk
module math/utils

pub fun add(a : int, b : int) : int
  a + b

// Externe Packages installieren:
// koka --install <github-user>/<repo>
```

**Besonderheiten:**
- Packages über `koka.json` Konfigurationsdatei definiert
- Externe Packages von GitHub installierbar
- Basispaket-System, noch nicht so ausgereift wie etablierte Package Manager
- Module innerhalb eines Packages über Verzeichnisstruktur organisiert

**Weiterführende Links:**
- [Koka Documentation - Packages](https://koka-lang.github.io/koka/doc/book.html#sec-packages)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
package math.utils

object Calculator {
    fun add(a: Int, b: Int): Int {
        return a + b
    }
}
```

**Besonderheiten:**
- Packages sind die Hauptorganisationsform
- Packages werden als JAR-Dateien verteilt
- Unterstützt hierarchische Package-Struktur

**Weiterführende Links:**
- [Kotlin Documentation - Packages](https://kotlinlang.org/docs/packages.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- lakefile.lean definiert Packages
import Lake
open Lake DSL

package «math-utils» where
  leanOptions := #[⟨`autoImplicit, false⟩]

require mathlib from git
  "https://github.com/leanprover-community/mathlib4" @ "main"

@[default_target]
lean_lib «MathUtils» where
  srcDir := "src"
```

**Besonderheiten:**
- Lake ist das Build-System und Package-Manager von Lean 4.
- `lakefile.lean` definiert Packages, Abhängigkeiten und Build-Targets.
- `require` importiert externe Pakete (z.B. von GitHub).
- `lean_lib` und `lean_exe` definieren Library- und Executable-Targets.

**Weiterführende Links:**
- [Lean 4 Documentation - Lake](https://lean-lang.org/lean4/doc/setup.html#lake)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Package als Tabelle
local math_utils = {}

function math_utils.add(a, b)
    return a + b
end

return math_utils
```

**Besonderheiten:**
- Tabellen dienen als Packages
- Packages werden über LuaRocks verteilt
- Unterstützt hierarchische Package-Struktur

**Weiterführende Links:**
- [Lua Documentation - Modules](https://www.lua.org/manual/5.4/manual.html#6.3)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Package-Struktur:
# mypackage/
#   mypackage.nimble   # Package-Definition
#   src/
#     mypackage.nim    # Hauptmodul
#     mypackage/
#       utils.nim      # Submodul

# mypackage.nimble:
# version = "1.0.0"
# author = "Name"
# requires "nim >= 2.0.0"
```

**Besonderheiten:**
- Packages werden über `.nimble`-Dateien definiert
- Verzeichnisstruktur bestimmt Package-Hierarchie
- Nimble als Package-Manager

**Weiterführende Links:**
- [Nim Documentation - Nimble](https://github.com/nim-lang/nimble#readme)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
unit Math.Utils;

interface

function Add(A, B: Integer): Integer;

implementation

function Add(A, B: Integer): Integer;
begin
    Result := A + B;
end;

end.
```

**Besonderheiten:**
- Units dienen als Packages
- Packages werden als Komponenten verteilt
- Unterstützt hierarchische Package-Struktur

**Weiterführende Links:**
- [Free Pascal Documentation - Units](https://www.freepascal.org/docs-html/ref/refse5.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
module MathUtils = struct
  let add a b = a + b
end
```

**Besonderheiten:**
- Module dienen als Packages
- Packages werden über OPAM verteilt
- Unterstützt hierarchische Package-Struktur

**Weiterführende Links:**
- [OCaml Documentation - Modules](https://ocaml.org/docs/modules)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
package math.utils

add :: proc(a: int, b: int) -> int {
    return a + b
}
```

**Besonderheiten:**
- Packages sind die Hauptorganisationsform
- Unterstützt hierarchische Package-Struktur
- Package-Name entspricht dem Verzeichnisnamen

**Weiterführende Links:**
- [Odin Documentation - Packages](https://odin-lang.org/docs/overview/#packages)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
package Math::Utils;

sub add {
    my ($a, $b) = @_;
    return $a + $b;
}
```

**Besonderheiten:**
- Packages sind die Hauptorganisationsform
- Packages werden über CPAN verteilt
- Unterstützt hierarchische Package-Struktur

**Weiterführende Links:**
- [Perl Documentation - Packages](https://perldoc.perl.org/perlmod)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
namespace Math\Utils;

function add(int $a, int $b): int {
    return $a + $b;
}
```

**Besonderheiten:**
- Namespaces organisieren Packages
- Packages werden über Composer verteilt
- Unterstützt hierarchische Package-Struktur

**Weiterführende Links:**
- [PHP Documentation - Namespaces](https://www.php.net/manual/en/language.namespaces.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Pack-Verzeichnisstruktur:
% my_pack/
%   pack.pl          - Pack-Metadaten
%   prolog/
%     math_utils.pl  - Quellcode

% pack.pl
name(my_pack).
version('1.0.0').
title('My Prolog Pack').
requires(lists).

% Nutzung
?- pack_install(my_pack).
:- use_module(library(math_utils)).
```

**Besonderheiten:**
- SWI-Prolog Packs sind die Package-Organisationsform
- `pack.pl` definiert Metadaten (Name, Version, Dependencies)
- Packs werden über `pack_install/1` installiert
- Zentrale Registry auf pack.swi-prolog.org

**Weiterführende Links:**
- [SWI-Prolog Pack Documentation](https://www.swi-prolog.org/pack/list)

</TabItem>
<TabItem value="python" label="Python">

```python
# __init__.py macht Verzeichnis zu Package
# math/utils/__init__.py
def add(a: int, b: int) -> int:
    return a + b
```

**Besonderheiten:**
- Verzeichnisse mit `__init__.py` sind Packages
- Packages werden über PyPI verteilt
- Unterstützt hierarchische Package-Struktur

**Weiterführende Links:**
- [Python Documentation - Packages](https://docs.python.org/3/tutorial/modules.html#packages)

</TabItem>
<TabItem value="r" label="R">

```r
# Package-Struktur in Verzeichnis
# math.utils/R/math.utils.R
add <- function(a, b) {
    return(a + b)
}
```

**Besonderheiten:**
- Verzeichnisse mit bestimmter Struktur sind Packages
- Packages werden über CRAN verteilt
- Unterstützt hierarchische Package-Struktur

**Weiterführende Links:**
- [R Documentation - Packages](https://cran.r-project.org/doc/manuals/r-release/R-exts.html)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
#lang racket

(module math-utils racket
  (provide add)
  (define (add a b)
    (+ a b)))
```

**Besonderheiten:**
- Module dienen als Packages
- Packages werden über Racket Package Manager verteilt
- Unterstützt hierarchische Package-Struktur

**Weiterführende Links:**
- [Racket Documentation - Packages](https://docs.racket-lang.org/pkg/getting-started.html)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
module Math
  module Utils
    def self.add(a, b)
      a + b
    end
  end
end
```

**Besonderheiten:**
- Module dienen als Packages
- Packages werden als Gems verteilt
- Unterstützt hierarchische Package-Struktur

**Weiterführende Links:**
- [Ruby Documentation - Modules](https://docs.ruby-lang.org/en/3.2/syntax/modules_and_classes_rdoc.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Crate ist Package-Einheit
// Cargo.toml definiert Package
pub mod math_utils {
    pub fn add(a: i32, b: i32) -> i32 {
        a + b
    }
}
```

**Besonderheiten:**
- Crates sind Package-Einheiten
- Packages werden über Cargo/Crates.io verteilt
- Unterstützt hierarchische Package-Struktur

**Weiterführende Links:**
- [Rust Documentation - Crates](https://doc.rust-lang.org/book/ch07-01-packages-and-crates.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
package math.utils

object Calculator {
    def add(a: Int, b: Int): Int = {
        a + b
    }
}
```

**Besonderheiten:**
- Packages sind die Hauptorganisationsform
- Packages werden als JAR-Dateien verteilt
- Unterstützt hierarchische Package-Struktur

**Weiterführende Links:**
- [Scala Documentation - Packages](https://docs.scala-lang.org/tour/packages.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Package wird durch Verzeichnisstruktur definiert
// Package.swift definiert Package
public func add(_ a: Int, _ b: Int) -> Int {
    return a + b
}
```

**Besonderheiten:**
- Packages werden durch Verzeichnisstruktur definiert
- Packages werden über Swift Package Manager verteilt
- Unterstützt hierarchische Package-Struktur

**Weiterführende Links:**
- [Swift Documentation - Packages](https://www.swift.org/package-manager/)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
Namespace Math.Utils
    Public Module Calculator
        Public Function Add(a As Integer, b As Integer) As Integer
            Return a + b
        End Function
    End Module
End Namespace
```

**Besonderheiten:**
- Namespaces organisieren Packages
- Packages werden als NuGet-Pakete verteilt
- Unterstützt hierarchische Package-Struktur

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Namespaces](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/program-structure/namespaces)

</TabItem>
<TabItem value="v" label="V">

```v
module math.utils

pub fn add(a int, b int) int {
    return a + b
}
```

**Besonderheiten:**
- Module dienen als Packages
- Unterstützt hierarchische Package-Struktur
- Package-Name entspricht dem Verzeichnisnamen

**Weiterführende Links:**
- [V Documentation - Modules](https://github.com/vlang/v/blob/master/doc/docs.md#modules)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```wolfram
BeginPackage["Math`Utils`"]

Add::usage = "Add[a, b] adds two numbers."

Begin["`Private`"]
Add[a_, b_] := a + b
End[]

EndPackage[]
```

**Besonderheiten:**
- Packages sind die Hauptorganisationsform
- Packages werden über Wolfram Paclet Repository verteilt
- Unterstützt hierarchische Package-Struktur

**Weiterführende Links:**
- [Wolfram Language Documentation - Packages](https://reference.wolfram.com/language/guide/Packages.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Package wird durch Verzeichnisstruktur definiert
// build.zig definiert Package
pub fn add(a: i32, b: i32) i32 {
    return a + b;
}
```

**Besonderheiten:**
- Packages werden durch Verzeichnisstruktur definiert
- Unterstützt hierarchische Package-Struktur
- Package-Name entspricht dem Verzeichnisnamen

**Weiterführende Links:**
- [Zig Documentation - Build System](https://ziglang.org/documentation/0.11.0/#Zig-Build-System)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Packages werden in elm.json definiert
-- { "dependencies": { "elm/core": "1.0.5", "elm/html": "1.0.0" } }

-- Verwendung von Packages
import Html exposing (Html, div, text)
import Json.Decode as Decode
```

**Besonderheiten:**
- Packages werden über `elm.json` verwaltet
- Offizielle Package-Registry: https://package.elm-lang.org
- Semantische Versionierung wird vom Compiler erzwungen
- Alle Packages müssen dokumentiert sein (Compiler-Anforderung)

**Weiterführende Links:**
- [Elm Package Registry](https://package.elm-lang.org/)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Framework Import
@import Foundation;
@import UIKit;
@import CoreData;

// Framework-Klassen verwenden
NSArray *items = @[@1, @2, @3];          // Foundation
UIView *view = [[UIView alloc] init];     // UIKit
```

**Besonderheiten:**
- Frameworks sind die ObjC-Variante von Packages/Bibliotheken
- Bündeln Header, Bibliothek und Ressourcen
- System-Frameworks: Foundation, UIKit, CoreData, etc.
- Eigene Frameworks können erstellt werden

**Weiterführende Links:**
- [Apple Documentation - Framework Programming Guide](https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/BPFrameworks/Frameworks.html)

</TabItem>
<TabItem value="roc" label="Roc">

```roc
# Package-Definition in einer app-Datei
app "myapp"
    packages { pf: "https://github.com/roc-lang/basic-cli/releases/..." }
    imports [pf.Stdout]
    provides [main] to pf
```

**Besonderheiten:**
- Packages werden über URLs referenziert
- `packages` Block in der app-Deklaration
- Content-addressed Dependencies

**Weiterführende Links:**
- [Roc Documentation](https://www.roc-lang.org/tutorial)

</TabItem>
</Tabs>


## 15.1.5. Visibility Rules

Sichtbarkeitsregeln bestimmen, welche Teile eines Moduls oder Packages von außen zugänglich sind. Sie kontrollieren den Zugriff auf Funktionen, Typen und Variablen und ermöglichen Kapselung.

### Sprachen {#sprachen}

<Tabs availableTabs={['ada', 'carbon', 'clojure', 'common-lisp', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'elixir', 'elm', 'erlang', 'fortran', 'fsharp', 'go', 'groovy', 'haskell', 'idris', 'java', 'julia', 'koka', 'kotlin', 'lean4', 'lua', 'mercury', 'mojo', 'nim', 'object-pascal', 'objective-c', 'ocaml', 'odin', 'perl', 'php', 'prolog', 'purescript', 'python', 'racket', 'roc', 'ruby', 'rust', 'scala', 'swift', 'typescript', 'v', 'vbnet', 'wolfram-language', 'zig']} yellowTabs={['gleam', 'haxe', 'scheme']}>
<TabItem value="ada" label="Ada">

```ada
package Math_Utils is
    -- Öffentlich (exportiert)
    function Add(A, B : Integer) return Integer;
private
    -- Privat (nur innerhalb Package sichtbar)
    function Helper(X : Integer) return Integer;
end Math_Utils;
```

**Besonderheiten:**
- `private`-Sektion macht Teile privat
- Ohne `private` sind Deklarationen öffentlich
- Package-Body ist immer privat

**Weiterführende Links:**
- [Ada Documentation - Packages](https://learn.adacore.com/courses/intro-to-ada/chapters/packages.html)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
package MathUtils api;

// Öffentlich (durch api-Modifier)
fn Add(a: i32, b: i32) -> i32 {
    return a + b
}

// Privat (ohne api-Modifier)
fn Helper(x: i32) -> i32 {
    return x * 2
}
```

**Besonderheiten:**
- `api`-Modifier macht Funktionen öffentlich
- Ohne `api` sind Funktionen privat
- Experimentelle Syntax kann sich noch ändern

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
(ns math.utils)

;; Öffentlich (standardmäßig)
(defn add [a b]
  (+ a b))

;; Privat (mit ^:private Meta)
(defn ^:private helper [x]
  (* x 2))
```

**Besonderheiten:**
- Standardmäßig sind Funktionen öffentlich
- `^:private` Meta macht Funktionen privat
- Unterstützt Namespace-Privatheit

**Weiterführende Links:**
- [Clojure Documentation - Privacy](https://clojure.org/reference/namespaces#_private_vars)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
(defpackage :math.utils
  (:use :cl)
  (:export :add))  ; Nur :add wird exportiert

(in-package :math.utils)

(defun add (a b)
  (+ a b))

(defun helper (x)  ; Privat (nicht exportiert)
  (* x 2))
```

**Besonderheiten:**
- `:export` spezifiziert öffentliche Symbole
- Nicht exportierte Symbole sind privat
- Unterstützt selektiven Export

**Weiterführende Links:**
- [Common Lisp HyperSpec - Packages](http://www.lispworks.com/documentation/HyperSpec/Body/11_.htm)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
namespace Math {
    namespace Utils {
        // Öffentlich (standardmäßig)
        int add(int a, int b) {
            return a + b;
        }
        
        // Privat (durch anonymen Namespace)
        namespace {
            int helper(int x) {
                return x * 2;
            }
        }
    }
}
```

**Besonderheiten:**
- Standardmäßig sind Funktionen öffentlich
- Anonymer Namespace macht Funktionen privat
- `static` macht Funktionen datei-lokal

**Weiterführende Links:**
- [cppreference.com - Namespaces](https://en.cppreference.com/w/cpp/language/namespace)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
namespace Math.Utils
{
    public static class Calculator
    {
        // Öffentlich
        public static int Add(int a, int b)
        {
            return a + b;
        }
        
        // Privat
        private static int Helper(int x)
        {
            return x * 2;
        }
        
        // Intern (nur innerhalb Assembly)
        internal static int InternalHelper(int x)
        {
            return x * 2;
        }
    }
}
```

**Besonderheiten:**
- `public`, `private`, `internal`, `protected`, `protected internal`
- Standardmäßig ist Zugriff `internal` für Klassen
- Unterstützt Assembly-Privatheit

**Weiterführende Links:**
- [Microsoft C# Documentation - Access Modifiers](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/access-modifiers)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
module MathUtils
  # Öffentlich
  def self.add(a : Int32, b : Int32) : Int32
    a + b
  end
  
  # Privat
  private def self.helper(x : Int32) : Int32
    x * 2
  end
end
```

**Besonderheiten:**
- `private` macht Methoden privat
- Standardmäßig sind Methoden öffentlich
- Unterstützt Klassen-Privatheit

**Weiterführende Links:**
- [Crystal Documentation - Visibility](https://crystal-lang.org/reference/1.11/syntax_and_semantics/visibility.html)

</TabItem>
<TabItem value="d" label="D">

```d
module math.utils;

// Öffentlich
public int add(int a, int b) {
    return a + b;
}

// Privat
private int helper(int x) {
    return x * 2;
}

// Package-privat (standardmäßig)
int packageHelper(int x) {
    return x * 2;
}
```

**Besonderheiten:**
- `public`, `private`, `package`, `protected`
- Standardmäßig ist Zugriff `package`
- Unterstützt Package-Privatheit

**Weiterführende Links:**
- [D Language Specification - Access Control](https://dlang.org/spec/attribute.html#visibility)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
library math.utils;

// Öffentlich (standardmäßig)
int add(int a, int b) {
    return a + b;
}

// Privat (mit _ Präfix)
int _helper(int x) {
    return x * 2;
}
```

**Besonderheiten:**
- Standardmäßig sind Funktionen öffentlich
- `_` Präfix macht Funktionen privat
- Unterstützt Library-Privatheit

**Weiterführende Links:**
- [Dart Documentation - Libraries](https://dart.dev/guides/libraries/create-library-packages)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
defmodule Math.Utils do
  # Öffentlich
  def add(a, b) do
    a + b
  end
  
  # Privat
  defp helper(x) do
    x * 2
  end
end
```

**Besonderheiten:**
- `def` macht Funktionen öffentlich
- `defp` macht Funktionen privat
- Unterstützt Modul-Privatheit

**Weiterführende Links:**
- [Elixir Documentation - Functions](https://elixir-lang.org/getting-started/modules-and-functions.html#private-functions)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
-module(math_utils).
-export([add/2]).  % Nur add/2 wird exportiert

% Öffentlich (exportiert)
add(A, B) ->
    A + B.

% Privat (nicht exportiert)
helper(X) ->
    X * 2.
```

**Besonderheiten:**
- `-export()` spezifiziert öffentliche Funktionen
- Nicht exportierte Funktionen sind privat
- Unterstützt selektiven Export

**Weiterführende Links:**
- [Erlang Documentation - Modules](https://www.erlang.org/doc/reference_manual/modules.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
module Math.Utils

// Öffentlich
let add a b = a + b

// Privat
let private helper x = x * 2

// Intern (nur innerhalb Assembly)
let internal internalHelper x = x * 2
```

**Besonderheiten:**
- `public`, `private`, `internal`
- Standardmäßig sind Funktionen öffentlich
- Unterstützt Assembly-Privatheit

**Weiterführende Links:**
- [Microsoft F# Documentation - Access Control](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/access-control)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
module math_utils
    implicit none
    public :: add  ! Öffentlich
    private :: helper  ! Privat
contains
    function add(a, b) result(sum)
        integer, intent(in) :: a, b
        integer :: sum
        sum = a + b
    end function add
    
    function helper(x) result(res)
        integer, intent(in) :: x
        integer :: res
        res = x * 2
    end function helper
end module math_utils
```

**Besonderheiten:**
- `public` und `private` spezifizieren Sichtbarkeit
- Standardmäßig sind Funktionen öffentlich
- Unterstützt Modul-Privatheit

**Weiterführende Links:**
- [Fortran Wiki - Modules](https://fortranwiki.org/fortran/show/Modules)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// Visibility Rules
// Datei: src/math/utils.gleam

// Öffentlich (von anderen Modulen zugreifbar)
pub fn add(a: Int, b: Int) -> Int {
  a + b
}

// Privat (nur innerhalb dieses Moduls)
fn helper(x: Int) -> Int {
  x * 2
}

// Opaque Types: Typ ist öffentlich, Konstruktor ist privat
pub opaque type Counter {
  Counter(value: Int)
}
```

**Besonderheiten:**
- `pub` macht Funktionen und Typen öffentlich
- Ohne `pub` sind Funktionen modul-privat
- `pub opaque type` exportiert den Typ, aber nicht den Konstruktor
- Keine weiteren Sichtbarkeitsmodifikatoren (kein protected/internal)

**Weiterführende Links:**
- [Gleam Documentation - Modules](https://tour.gleam.run/basics/modules/)

</TabItem>
<TabItem value="go" label="Go">

```go
package math

package utils

// Öffentlich (Großbuchstabe)
func Add(a, b int) int {
    return a + b
}

// Privat (Kleinbuchstabe)
func helper(x int) int {
    return x * 2
}
```

**Besonderheiten:**
- Großbuchstabe = öffentlich
- Kleinbuchstabe = privat
- Unterstützt Package-Privatheit

**Weiterführende Links:**
- [Go Documentation - Exported names](https://go.dev/ref/spec#Exported_identifiers)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
package math.utils

class Calculator {
    // Öffentlich
    public static int add(int a, int b) {
        return a + b
    }
    
    // Privat
    private static int helper(int x) {
        return x * 2
    }
    
    // Package-privat
    static int packageHelper(int x) {
        return x * 2
    }
}
```

**Besonderheiten:**
- `public`, `private`, `protected`, `package`
- Standardmäßig ist Zugriff `package`
- Unterstützt Package-Privatheit

**Weiterführende Links:**
- [Groovy Documentation - Visibility](https://groovy-lang.org/objectorientation.html#_visibility)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
module Math.Utils (add) where  -- Nur add wird exportiert

-- Öffentlich (exportiert)
add :: Int -> Int -> Int
add a b = a + b

-- Privat (nicht exportiert)
helper :: Int -> Int
helper x = x * 2
```

**Besonderheiten:**
- Exportliste spezifiziert öffentliche Funktionen
- Nicht exportierte Funktionen sind privat
- Unterstützt selektiven Export

**Weiterführende Links:**
- [Haskell Documentation - Modules](https://www.haskell.org/tutorial/modules.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
package math.utils;

class Calculator {
    // Öffentlich
    public static function add(a:Int, b:Int):Int {
        return a + b;
    }

    // Privat (Standard ohne Modifier)
    static function helper(x:Int):Int {
        return x * 2;
    }

    // Privat (explizit)
    private static function internalHelper(x:Int):Int {
        return x * 2;
    }
}
```

**Besonderheiten:**
- `public`: Zugriff von überall
- `private`: Nur innerhalb der Klasse (Standard)
- Haxe hat KEIN `protected` oder `internal` Keyword
- `@:access` Metadata für erweiterte Zugriffskontrolle

**Weiterführende Links:**
- [Haxe Documentation - Visibility](https://haxe.org/manual/class-field-visibility.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
module Math.Utils

-- Öffentlich
export
add : Int -> Int -> Int
add a b = a + b

-- Privat (ohne export)
helper : Int -> Int
helper x = x * 2
```

**Besonderheiten:**
- `export` macht Funktionen öffentlich
- Ohne `export` sind Funktionen privat
- Unterstützt Modul-Privatheit

**Weiterführende Links:**
- [Idris Documentation - Modules](https://idris2.readthedocs.io/en/latest/tutorial/modules.html)

</TabItem>
<TabItem value="java" label="Java">

```java
package math.utils;

public class Calculator {
    // Öffentlich
    public static int add(int a, int b) {
        return a + b;
    }
    
    // Privat
    private static int helper(int x) {
        return x * 2;
    }
    
    // Package-privat (standardmäßig)
    static int packageHelper(int x) {
        return x * 2;
    }
    
    // Protected
    protected static int protectedHelper(int x) {
        return x * 2;
    }
}
```

**Besonderheiten:**
- `public`, `private`, `protected`, package-privat (kein Modifier)
- Standardmäßig ist Zugriff package-privat
- Unterstützt Package-Privatheit

**Weiterführende Links:**
- [Oracle Java Documentation - Access Control](https://docs.oracle.com/javase/tutorial/java/javaOO/accesscontrol.html)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
module MathUtils

# Öffentlich (exportiert)
export add

function add(a::Int, b::Int)::Int
    return a + b
end

# Privat (nicht exportiert)
function helper(x::Int)::Int
    return x * 2
end

end
```

**Besonderheiten:**
- `export` macht Funktionen öffentlich
- Nicht exportierte Funktionen sind privat
- Unterstützt selektiven Export

**Weiterführende Links:**
- [Julia Documentation - Modules](https://docs.julialang.org/en/v1/manual/modules/)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
package math.utils

object Calculator {
    // Öffentlich
    fun add(a: Int, b: Int): Int {
        return a + b
    }
    
    // Privat
    private fun helper(x: Int): Int {
        return x * 2
    }
    
    // Intern (nur innerhalb Modul)
    internal fun internalHelper(x: Int): Int {
        return x * 2
    }
    
    // Protected
    protected fun protectedHelper(x: Int): Int {
        return x * 2
    }
}
```

**Besonderheiten:**
- `public`, `private`, `protected`, `internal`
- Standardmäßig ist Zugriff `public`
- Unterstützt Modul-Privatheit

**Weiterführende Links:**
- [Kotlin Documentation - Visibility Modifiers](https://kotlinlang.org/docs/visibility-modifiers.html)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
// Visibility Rules in Koka
module math/utils

// Öffentlich: mit pub-Keyword
pub fun add(a : int, b : int) : int
  a + b

pub val pi = 3.14159

// Privat: ohne pub (Standard)
fun helper(x : int) : int
  x * 2

// Öffentlicher Typ mit privaten Konstruktoren
pub type color
  Red
  Green
  Blue

// Abstrakte Typen: pub ohne Konstruktoren zu exportieren
pub type abstract-token
```

**Besonderheiten:**
- `pub` für öffentliche Sichtbarkeit
- Ohne `pub` sind Definitionen modulprivat (Standard)
- Abstrakte Typen können exportiert werden, ohne interne Struktur offenzulegen
- Einfaches, zweistufiges Sichtbarkeitssystem (öffentlich/privat)

**Weiterführende Links:**
- [Koka Documentation - Modules](https://koka-lang.github.io/koka/doc/book.html#sec-modules)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
namespace MyLib

-- Öffentlich (Standard)
def add (a b : Nat) : Nat := a + b

-- Privat: nur innerhalb des Moduls sichtbar
private def helper (x : Nat) : Nat := x * 2

-- Protected: sichtbar in Kindnamespaces
protected def internalAdd (a b : Nat) : Nat := a + b

-- Section-lokale Variablen
section
  variable (n : Nat)
  def addN (x : Nat) : Nat := x + n
end

end MyLib
```

**Besonderheiten:**
- Standardmäßig sind alle Definitionen öffentlich.
- `private` schränkt die Sichtbarkeit auf das aktuelle Modul ein.
- `protected` ermöglicht Zugriff in Kind-Namespaces.
- `section` bietet lokale Scopes für Variablen und Definitionen.

**Weiterführende Links:**
- [Lean 4 Documentation - Modules](https://lean-lang.org/lean4/doc/modules.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
local math_utils = {}

-- Öffentlich (in Tabelle)
function math_utils.add(a, b)
    return a + b
end

-- Privat (lokal)
local function helper(x)
    return x * 2
end

return math_utils
```

**Besonderheiten:**
- `local` macht Funktionen privat
- Funktionen in Tabelle sind öffentlich
- Unterstützt Modul-Privatheit durch Konvention

**Weiterführende Links:**
- [Lua Documentation - Modules](https://www.lua.org/manual/5.4/manual.html#6.3)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
:- module math_utils.
:- interface.

% Öffentlich (in interface-Sektion)
:- func add(int, int) = int.

:- implementation.

% Privat (in implementation-Sektion)
:- func helper(int) = int.

add(A, B) = A + B.
helper(X) = X * 2.
```

**Besonderheiten:**
- `:- interface.`-Sektion definiert die öffentliche Schnittstelle
- `:- implementation.`-Sektion enthält private Deklarationen und Implementierungen
- Alles in der Interface-Sektion ist für andere Module sichtbar
- Typen können als opak exportiert werden (nur Typname, keine Konstruktoren)

**Weiterführende Links:**
- [Mercury Language Reference - Modules](https://www.mercurylang.org/information/doc-release/mercury_ref/Modules.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
module MathUtils:
    # Öffentlich
    fn add(a: Int, b: Int) -> Int:
        return a + b
    
    # Privat
    fn _helper(x: Int) -> Int:
        return x * 2
```

**Besonderheiten:**
- Standardmäßig sind Funktionen öffentlich
- `_` Präfix macht Funktionen privat
- Python-ähnliche Konvention

**Weiterführende Links:**
- [Mojo Documentation - Modules](https://docs.modular.com/mojo/manual/modules/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Datei: math_utils.nim
proc add*(a, b: int): int =  # Öffentlich (exportiert)
  a + b

proc helper(x: int): int =   # Privat (nicht exportiert)
  x * 2

type
  PublicType* = object        # Öffentlich
    field1*: int              # Öffentliches Feld
    field2: string            # Privates Feld
```

**Besonderheiten:**
- `*` nach dem Namen = öffentlich (exportiert)
- Kein `*` = privat (nur im Modul sichtbar)
- Gilt für Prozeduren, Typen, Felder, Variablen
- Kein `protected`-Konzept

**Weiterführende Links:**
- [Nim Documentation - Export Marker](https://nim-lang.org/docs/manual.html#modules-export-marker)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
unit Math.Utils;

interface

// Öffentlich
function Add(A, B: Integer): Integer;

implementation

function Add(A, B: Integer): Integer;
begin
    Result := A + B;
end;

// Privat (nur in implementation)
function Helper(X: Integer): Integer;
begin
    Result := X * 2;
end;

end.
```

**Besonderheiten:**
- `interface`-Sektion ist öffentlich
- `implementation`-Sektion ist privat
- Unterstützt Unit-Privatheit

**Weiterführende Links:**
- [Free Pascal Documentation - Units](https://www.freepascal.org/docs-html/ref/refse5.html)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// MathUtils.h (Öffentlich)
@interface MathUtils : NSObject
+ (int)add:(int)a with:(int)b;
@end

// MathUtils.m (Privat)
#import "MathUtils.h"

@implementation MathUtils
+ (int)add:(int)a with:(int)b {
    return a + b;
}

// Privat (nicht in .h)
+ (int)helper:(int)x {
    return x * 2;
}
@end
```

**Besonderheiten:**
- Header-Datei definiert öffentliche API
- Implementation-Datei kann private Methoden enthalten
- Unterstützt Klassen-Privatheit

**Weiterführende Links:**
- [Apple Documentation - Encapsulation](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/EncapsulatingData/EncapsulatingData.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
module MathUtils : sig
  val add : int -> int -> int  (* Öffentlich *)
end = struct
  let add a b = a + b
  
  let helper x = x * 2  (* Privat *)
end
```

**Besonderheiten:**
- Signatur spezifiziert öffentliche Funktionen
- Nicht in Signatur = privat
- Unterstützt selektiven Export

**Weiterführende Links:**
- [OCaml Documentation - Modules](https://ocaml.org/docs/modules)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
package math.utils

// Öffentlich
add :: proc(a: int, b: int) -> int {
    return a + b
}

// Privat (mit _ Präfix)
_helper :: proc(x: int) -> int {
    return x * 2
}
```

**Besonderheiten:**
- Standardmäßig sind Funktionen öffentlich
- `_` Präfix macht Funktionen privat
- Unterstützt Package-Privatheit

**Weiterführende Links:**
- [Odin Documentation - Packages](https://odin-lang.org/docs/overview/#packages)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
package Math::Utils;

# Öffentlich (standardmäßig)
sub add {
    my ($a, $b) = @_;
    return $a + $b;
}

# Privat (durch Konvention mit _)
sub _helper {
    my ($x) = @_;
    return $x * 2;
}
```

**Besonderheiten:**
- Standardmäßig sind Funktionen öffentlich
- `_` Präfix macht Funktionen privat (Konvention)
- Unterstützt Package-Privatheit durch Konvention

**Weiterführende Links:**
- [Perl Documentation - Packages](https://perldoc.perl.org/perlmod)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
namespace Math\Utils;

class Calculator {
    // Öffentlich
    public static function add(int $a, int $b): int {
        return $a + $b;
    }
    
    // Privat
    private static function helper(int $x): int {
        return $x * 2;
    }
    
    // Protected
    protected static function protectedHelper(int $x): int {
        return $x * 2;
    }
}
```

**Besonderheiten:**
- `public`, `private`, `protected`
- Standardmäßig ist Zugriff `public`
- Unterstützt Klassen-Privatheit

**Weiterführende Links:**
- [PHP Documentation - Visibility](https://www.php.net/manual/en/language.oop5.visibility.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
:- module(math_utils, [add/3]).  % Nur add/3 wird exportiert

% Öffentlich (exportiert)
add(A, B, Result) :-
    Result is A + B.

% Privat (nicht exportiert)
helper(X, Result) :-
    Result is X * 2.
```

**Besonderheiten:**
- Exportliste in `module/2` bestimmt Sichtbarkeit
- Nicht exportierte Prädikate sind modullokal
- Zugriff auf private Prädikate über `Modul:Prädikat` möglich (kein striktes Enforcement)
- `module_transparent/1` ermöglicht Meta-Prädikate, die im Kontext des Aufrufers arbeiten

**Weiterführende Links:**
- [SWI-Prolog Documentation - Module Visibility](https://www.swi-prolog.org/pldoc/man?section=defmodule)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
module Math.Utils (add) where  -- Nur add wird exportiert

-- Öffentlich (exportiert)
add :: Int -> Int -> Int
add a b = a + b

-- Privat (nicht exportiert)
helper :: Int -> Int
helper x = x * 2
```

**Besonderheiten:**
- Exportliste spezifiziert öffentliche Funktionen
- Nicht exportierte Funktionen sind privat
- Unterstützt selektiven Export

**Weiterführende Links:**
- [PureScript Documentation - Modules](https://book.purescript.org/chapter3.html)

</TabItem>
<TabItem value="python" label="Python">

```python
# Öffentlich (standardmäßig)
def add(a: int, b: int) -> int:
    return a + b

# Privat (durch Konvention mit _)
def _helper(x: int) -> int:
    return x * 2

# Name mangling (mit __)
def __private_helper(x: int) -> int:
    return x * 2
```

**Besonderheiten:**
- Standardmäßig sind Funktionen öffentlich
- `_` Präfix macht Funktionen privat (Konvention)
- `__` Präfix führt zu Name Mangling

**Weiterführende Links:**
- [Python Documentation - Private Variables](https://docs.python.org/3/tutorial/classes.html#private-variables)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
#lang racket

(module math-utils racket
  (provide add)  ; Nur add wird exportiert
  
  ; Öffentlich (exportiert)
  (define (add a b)
    (+ a b))
  
  ; Privat (nicht exportiert)
  (define (helper x)
    (* x 2)))
```

**Besonderheiten:**
- `provide` spezifiziert öffentliche Bindungen
- Nicht exportierte Bindungen sind privat
- Unterstützt selektiven Export

**Weiterführende Links:**
- [Racket Documentation - Modules](https://docs.racket-lang.org/guide/modules.html)

</TabItem>
<TabItem value="roc" label="Roc">

```roc
interface MathUtils
    exposes [add]
    imports []

# Öffentlich (in exposes aufgeführt)
add : I64, I64 -> I64
add = \a, b -> a + b

# Privat (nicht in exposes)
helper : I64 -> I64
helper = \x -> x * 2
```

**Besonderheiten:**
- `exposes` spezifiziert öffentliche Funktionen
- Nicht aufgeführte Funktionen sind privat
- Einfache Sichtbarkeitsregel

**Weiterführende Links:**
- [Roc Documentation - Modules](https://www.roc-lang.org/tutorial)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
module MathUtils
  # Öffentlich
  def self.add(a, b)
    a + b
  end
  
  # Privat
  private
  
  def self.helper(x)
    x * 2
  end
end
```

**Besonderheiten:**
- `public`, `private`, `protected`
- Standardmäßig sind Methoden öffentlich
- Unterstützt Modul-Privatheit

**Weiterführende Links:**
- [Ruby Documentation - Visibility](https://docs.ruby-lang.org/en/3.2/syntax/modules_and_classes_rdoc.html#label-Visibility)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
mod math_utils {
    // Öffentlich
    pub fn add(a: i32, b: i32) -> i32 {
        a + b
    }
    
    // Privat
    fn helper(x: i32) -> i32 {
        x * 2
    }
    
    // Öffentlich für übergeordnetes Modul
    pub(crate) fn crate_helper(x: i32) -> i32 {
        x * 2
    }
}
```

**Besonderheiten:**
- `pub` macht Funktionen öffentlich
- Ohne `pub` sind Funktionen privat
- Unterstützt `pub(crate)`, `pub(super)`, etc.

**Weiterführende Links:**
- [Rust Documentation - Privacy](https://doc.rust-lang.org/book/ch07-03-paths-for-referring-to-an-item-in-the-module-tree.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
package math.utils

object Calculator {
    // Öffentlich
    def add(a: Int, b: Int): Int = {
        a + b
    }
    
    // Privat
    private def helper(x: Int): Int = {
        x * 2
    }
    
    // Package-privat
    private[utils] def packageHelper(x: Int): Int = {
        x * 2
    }
    
    // Protected
    protected def protectedHelper(x: Int): Int = {
        x * 2
    }
}
```

**Besonderheiten:**
- `public`, `private`, `protected`, package-privat
- Standardmäßig ist Zugriff `public`
- Unterstützt Package-Privatheit mit `private[package]`

**Weiterführende Links:**
- [Scala Documentation - Access Modifiers](https://docs.scala-lang.org/tour/access-modifiers.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
(define-library (math utils)
  (export add)  ; Nur add wird exportiert
  (begin
    ;; Öffentlich (exportiert)
    (define (add a b)
      (+ a b))

    ;; Privat (nicht exportiert)
    (define (helper x)
      (* x 2))))
```

**Besonderheiten:**
- Sichtbarkeit wird über `export` gesteuert
- Nicht exportierte Bindungen sind privat (nur innerhalb der Library sichtbar)
- Kein `public`/`private`-Keyword

**Weiterführende Links:**
- [R7RS Scheme - Libraries](https://small.r7rs.org/attachment/r7rs.pdf)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Öffentlich
public func add(_ a: Int, _ b: Int) -> Int {
    return a + b
}

// Privat
private func helper(_ x: Int) -> Int {
    return x * 2
}

// Intern (nur innerhalb Modul)
internal func internalHelper(_ x: Int) -> Int {
    return x * 2
}

// File-private
fileprivate func filePrivateHelper(_ x: Int) -> Int {
    return x * 2
}
```

**Besonderheiten:**
- `public`, `private`, `internal`, `fileprivate`
- Standardmäßig ist Zugriff `internal`
- Unterstützt Modul-Privatheit

**Weiterführende Links:**
- [Swift Documentation - Access Control](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/accesscontrol/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Öffentlich (standardmäßig)
export function add(a: number, b: number): number {
    return a + b;
}

// Privat (nicht exportiert)
function helper(x: number): number {
    return x * 2;
}

// Öffentlich mit explizitem export
export function publicAdd(a: number, b: number): number {
    return a + b;
}
```

**Besonderheiten:**
- `export` macht Funktionen öffentlich
- Nicht exportierte Funktionen sind privat
- Unterstützt selektiven Export

**Weiterführende Links:**
- [TypeScript Documentation - Modules](https://www.typescriptlang.org/docs/handbook/modules.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
Namespace Math.Utils
    Public Module Calculator
        ' Öffentlich
        Public Function Add(a As Integer, b As Integer) As Integer
            Return a + b
        End Function
        
        ' Privat
        Private Function Helper(x As Integer) As Integer
            Return x * 2
        End Function
        
        ' Intern (nur innerhalb Assembly)
        Friend Function InternalHelper(x As Integer) As Integer
            Return x * 2
        End Function
    End Module
End Namespace
```

**Besonderheiten:**
- `Public`, `Private`, `Friend`, `Protected`, `Protected Friend`
- Standardmäßig ist Zugriff `Public`
- Unterstützt Assembly-Privatheit

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Access Levels](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/declared-elements/access-levels)

</TabItem>
<TabItem value="v" label="V">

```v
module math.utils

// Öffentlich
pub fn add(a int, b int) int {
    return a + b
}

// Privat
fn helper(x int) int {
    return x * 2
}
```

**Besonderheiten:**
- `pub` macht Funktionen öffentlich
- Ohne `pub` sind Funktionen privat
- Unterstützt Modul-Privatheit

**Weiterführende Links:**
- [V Documentation - Modules](https://github.com/vlang/v/blob/master/doc/docs.md#modules)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```wolfram
BeginPackage["Math`Utils`"]

Add::usage = "Add[a, b] adds two numbers."

Begin["`Private`"]
Helper[x_] := x * 2  (* Privat *)
Add[a_, b_] := a + b + Helper[0]
End[]

EndPackage[]
```

**Besonderheiten:**
- `Begin["`Private`"]` macht Funktionen privat
- Funktionen außerhalb `Private` sind öffentlich
- Unterstützt Package-Privatheit

**Weiterführende Links:**
- [Wolfram Language Documentation - Packages](https://reference.wolfram.com/language/guide/Packages.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Öffentlich
pub fn add(a: i32, b: i32) i32 {
    return a + b;
}

// Privat
fn helper(x: i32) i32 {
    return x * 2;
}
```

**Besonderheiten:**
- `pub` macht Funktionen öffentlich
- Ohne `pub` sind Funktionen privat
- Unterstützt Modul-Privatheit

**Weiterführende Links:**
- [Zig Documentation - Source Files](https://ziglang.org/documentation/0.11.0/#Source-Encoding)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Alles exportieren
module MyModule exposing (..)

-- Nur bestimmte Funktionen exportieren
module MyModule exposing (publicFunc, PublicType)

-- Opaque Types: Typ exportieren, aber nicht die Konstruktoren
module Temperature exposing (Temperature, fromCelsius, toCelsius)

type Temperature = Celsius Float

fromCelsius : Float -> Temperature
fromCelsius = Celsius

toCelsius : Temperature -> Float
toCelsius (Celsius t) = t
```

**Besonderheiten:**
- `exposing (..)` exportiert alles
- `exposing (func1, func2)` exportiert nur benannte Werte
- Opaque Types: Typ exportieren ohne Konstruktoren für Kapselung
- Keine `private`/`public` Keywords, nur `exposing`

**Weiterführende Links:**
- [Elm Documentation - Modules](https://guide.elm-lang.org/webapps/modules.html)

</TabItem>
</Tabs>

