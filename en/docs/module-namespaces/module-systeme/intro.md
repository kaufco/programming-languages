---
slug: /module-namespaces/module-systeme
title: 15.1. Module Systems
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 15.1. Module Systems

Module systems and namespaces.

## 15.1.1. Module Definition

Definition of modules as organizational units for code. Modules enable structuring and encapsulating code into logical units.

### Languages {#sprachen}

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

**Special features:**
- Modules are defined as packages
- Separation between package specification and package body
- Packages can be nested

**Further reading:**
- [Ada Documentation - Packages](https://learn.adacore.com/courses/intro-to-ada/chapters/packages.html)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
package MathUtils api;

fn Add(a: i32, b: i32) -> i32 {
    return a + b;
}
```

**Special features:**
- Experimental language, syntax may still change
- Packages are defined with `package` keyword
- `api` modifier makes functions public

**Further reading:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
(ns math-utils)

(defn add [a b]
  (+ a b))
```

**Special features:**
- Modules are defined as namespaces with `ns`
- Namespaces can be nested
- Supports dynamic namespace creation

**Further reading:**
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

**Special features:**
- Modules are defined as packages with `defpackage`
- `:export` specifies public symbols
- `in-package` switches to package context

**Further reading:**
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

**Special features:**
- Modules are defined with `module` keyword
- Modules can contain methods
- Supports mixins

**Further reading:**
- [Crystal Documentation - Modules](https://crystal-lang.org/reference/1.11/syntax_and_semantics/modules.html)

</TabItem>
<TabItem value="d" label="D">

```d
module math_utils;

int add(int a, int b) {
    return a + b;
}
```

**Special features:**
- Modules are defined with `module` keyword at the beginning of the file
- Module name usually corresponds to the file name
- Supports package hierarchies

**Further reading:**
- [D Language Specification - Modules](https://dlang.org/spec/module.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
library math_utils;

int add(int a, int b) {
    return a + b;
}
```

**Special features:**
- Modules are defined as libraries with `library` directive
- Library name is optional
- Every file is automatically a library

**Further reading:**
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

**Special features:**
- Modules are defined with `defmodule`
- Modules can be nested
- Supports module attributes

**Further reading:**
- [Elixir Documentation - Modules](https://elixir-lang.org/getting-started/modules-and-functions.html)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
module MathUtils exposing (add)

add : Int -> Int -> Int
add a b =
    a + b
```

**Special features:**
- Modules are defined with `module` keyword
- `exposing` specifies exported functions
- Module name must match the file path

**Further reading:**
- [Elm Documentation - Modules](https://guide.elm-lang.org/webapps/modules.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
-module(math_utils).
-export([add/2]).

add(A, B) ->
    A + B.
```

**Special features:**
- Modules are defined with `-module()` directive
- `-export()` specifies public functions
- Module name must match the file name

**Further reading:**
- [Erlang Documentation - Modules](https://www.erlang.org/doc/reference_manual/modules.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
module MathUtils

let add a b = a + b
```

**Special features:**
- Modules are defined with `module` keyword
- Supports nested modules
- Can be defined as file modules or namespace modules

**Further reading:**
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

**Special features:**
- Modules are defined with `module` keyword
- Supports `contains` for internal procedures
- Can export variables and types

**Further reading:**
- [Fortran Wiki - Modules](https://fortranwiki.org/fortran/show/Modules)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// Modules are defined by file names
// File: src/math_utils.gleam

pub fn add(a: Int, b: Int) -> Int {
  a + b
}

fn helper(x: Int) -> Int {
  x * 2
}
```

**Special features:**
- Modules are defined by file names (no `module` keyword)
- `pub` makes functions public
- Without `pub`, functions are module-private
- Module name corresponds to the file path

**Further reading:**
- [Gleam Documentation - Modules](https://tour.gleam.run/basics/modules/)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
module MathUtils (add) where

add :: Int -> Int -> Int
add a b = a + b
```

**Special features:**
- Modules are defined with `module` keyword
- Export list specifies public functions
- Module name must match the file path

**Further reading:**
- [Haskell Documentation - Modules](https://www.haskell.org/tutorial/modules.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
module MathUtils

add : Int -> Int -> Int
add a b = a + b
```

**Special features:**
- Modules are defined with `module` keyword
- Supports nested modules
- Module name corresponds to the file path

**Further reading:**
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

**Special features:**
- Modules are defined with `module` keyword
- Supports nested modules
- Can export functions with `export`

**Further reading:**
- [Julia Documentation - Modules](https://docs.julialang.org/en/v1/manual/modules/)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
// Modules are defined by files
// File: math/utils.kk
module math/utils

// Public functions with pub
pub fun add(a : int, b : int) : int
  a + b

// Private function (default)
fun helper(x : int) : int
  x * 2
```

**Special features:**
- Modules are defined by files (file name = module name)
- Module path corresponds to directory structure
- `pub` marks public definitions
- Without `pub`, definitions are module-private

**Further reading:**
- [Koka Documentation - Modules](https://koka-lang.github.io/koka/doc/book.html#sec-modules)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Modules are defined by files and namespaces
-- File: MyLib/Utils.lean → Module MyLib.Utils

namespace MyLib.Utils

def add (a b : Nat) : Nat := a + b

private def helper (x : Nat) : Nat := x * 2

end MyLib.Utils
```

**Special features:**
- Modules are defined by files (file path = module path).
- `namespace` defines named scopes within a module.
- `private` marks definitions as non-public.
- `section` and `variable` enable local parameterization.

**Further reading:**
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

**Special features:**
- Modules are defined as tables
- `return` at the end exports the module
- `local` makes variables local

**Further reading:**
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

**Special features:**
- Modules are declared with `:- module name.`
- Separation into `:- interface.` (public interface) and `:- implementation.` (private implementation)
- Each `.m` file contains exactly one module
- Sub-modules can be nested or defined in separate files

**Further reading:**
- [Mercury Language Reference - Modules](https://www.mercurylang.org/information/doc-release/mercury_ref/Modules.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
module math_utils:
    fn add(a: Int, b: Int) -> Int:
        return a + b
```

**Special features:**
- Modules are defined with `module` keyword
- Python-like syntax
- Supports structured module definition

**Further reading:**
- [Mojo Documentation - Modules](https://docs.modular.com/mojo/manual/modules/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# File: math_utils.nim
# Every .nim file is automatically a module

proc add*(a, b: int): int =  # * = exported
  a + b

proc helper(x: int): int =  # no * = private
  x * 2
```

**Special features:**
- Every `.nim` file is automatically a module
- Module name is derived from the file name
- `*` after the name exports a symbol (public)
- Symbols without `*` are private (only visible within the module)

**Further reading:**
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

**Special features:**
- Modules are defined as units with `unit` keyword
- Separation between `interface` and `implementation`
- Units are imported with `uses`

**Further reading:**
- [Free Pascal Documentation - Units](https://www.freepascal.org/docs-html/ref/refse5.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
module MathUtils = struct
  let add a b = a + b
end
```

**Special features:**
- Modules are defined with `module` keyword
- Supports functors (modules as parameters)
- Can be defined as file modules or inline

**Further reading:**
- [OCaml Documentation - Modules](https://ocaml.org/docs/modules)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
package math_utils

add :: proc(a: int, b: int) -> int {
    return a + b
}
```

**Special features:**
- Modules are defined as packages with `package` directive
- Package name usually corresponds to the directory name
- Supports package hierarchies

**Further reading:**
- [Odin Documentation - Packages](https://odin-lang.org/docs/overview/#packages)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
:- module(math_utils, [add/3]).

add(A, B, Result) :-
    Result is A + B.
```

**Special features:**
- Modules are defined with `:- module(Name, ExportList).` directive
- The export list contains predicates as `Name/Arity` pairs
- Predicates use output arguments instead of return values
- A module typically corresponds to a file

**Further reading:**
- [SWI-Prolog Documentation - Modules](https://www.swi-prolog.org/pldoc/man?section=defmodule)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
module MathUtils where

add :: Int -> Int -> Int
add a b = a + b
```

**Special features:**
- Modules are defined with `module` keyword
- Module name must match the file path
- Supports export lists

**Further reading:**
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

**Special features:**
- Modules are defined with `module` form
- `provide` specifies exported bindings
- Supports various module languages

**Further reading:**
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

**Special features:**
- Modules are defined with `interface` keyword
- `exposes` specifies exported functions
- `imports` lists dependencies

**Further reading:**
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

**Special features:**
- Modules are defined with `module` keyword
- Modules can be used as namespaces or mixins
- Supports nested modules

**Further reading:**
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

**Special features:**
- Modules are defined with `mod` keyword
- `pub` makes functions public
- Modules can be defined as files or inline

**Further reading:**
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

**Special features:**
- R7RS uses `define-library` for modules
- `export` specifies exported bindings
- Older syntax varies by implementation (Guile: `define-module`, R6RS: `library`)

**Further reading:**
- [R7RS Scheme - Libraries](https://small.r7rs.org/attachment/r7rs.pdf)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// math_utils.swift
// Module is automatically created by file

func add(_ a: Int, _ b: Int) -> Int {
    return a + b
}
```

**Special features:**
- Modules are automatically created by files
- File name determines module name
- Supports explicit modules with `@_exported import`

**Further reading:**
- [Swift Documentation - Modules](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/accesscontrol/)

</TabItem>
<TabItem value="v" label="V">

```v
module math_utils

pub fn add(a int, b int) int {
    return a + b
}
```

**Special features:**
- Modules are defined with `module` directive
- `pub` makes functions public
- Module name corresponds to the directory name

**Further reading:**
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

**Special features:**
- Modules are defined with `BeginPackage`/`EndPackage`
- `Begin["`Private`"]` defines private implementation
- Supports package hierarchies

**Further reading:**
- [Wolfram Language Documentation - Packages](https://reference.wolfram.com/language/guide/Packages.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// math_utils.zig
// Module is automatically created by file

pub fn add(a: i32, b: i32) i32 {
    return a + b;
}
```

**Special features:**
- Modules are automatically created by files
- `pub` makes functions public
- File name determines module name

**Further reading:**
- [Zig Documentation - Source Files](https://ziglang.org/documentation/0.11.0/#Source-Encoding)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Module definition via packages
package com.example.myapp

class MyService {
    String process(String input) {
        return input.toUpperCase()
    }
}
```

**Special features:**
- Modules are organized via Java packages
- `package` declaration at the beginning of the file
- Directory structure must match package structure

**Further reading:**
- [Groovy Documentation - Packages](https://groovy-lang.org/structure.html#_packages)

</TabItem>
<TabItem value="java" label="Java">

```java
// module-info.java (since Java 9)
module com.example.myapp {
    requires java.base;          // Declare dependency
    requires java.sql;           // Include SQL module
    exports com.example.myapp.api;  // Export package
}
```

**Special features:**
- Java Platform Module System since Java 9 (JEP 261, Project Jigsaw)
- Module definition in `module-info.java` at project root
- `requires` for dependencies, `exports` for public packages
- Strong encapsulation: non-exported packages are not accessible

**Further reading:**
- [Oracle Java Documentation - Modules](https://docs.oracle.com/javase/specs/jls/se21/html/jls-7.html#jls-7.7)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// ES Module Definition (since ES2015)
// File: mathUtils.js

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

**Special features:**
- ES modules since ES2015/ES6
- A file is a module if it contains `import` or `export` statements
- Supports named exports and default exports
- Modules have their own scope (no global namespace pollution)
- CommonJS modules (`module.exports`) are supported in parallel in Node.js

**Further reading:**
- [MDN Web Docs - JavaScript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)

</TabItem>

<TabItem value="objective-c" label="Objective-C">

```objc
// Module Import (since Xcode 5)
@import Foundation;
@import UIKit;

// Submodule
@import Foundation.NSString;
```

**Special features:**
- Clang Modules since Xcode 5 (2013)
- `@import` instead of `#import` for modules
- Modules are defined by `module.modulemap` files
- Better compile performance than header includes

**Further reading:**
- [Apple Documentation - Modules](https://developer.apple.com/library/archive/documentation/DeveloperTools/Conceptual/ClangModules/Introduction/Introduction.html)

</TabItem>
</Tabs>


## 15.1.2. Module Import / Export

Import and export of modules to share code between modules. Export makes functions, types, and variables available to other modules, import enables access to them.

### Languages {#sprachen}

<Tabs availableTabs={['ada', 'carbon', 'clojure', 'common-lisp', 'crystal', 'd', 'dart', 'elixir', 'elm', 'erlang', 'fortran', 'fsharp', 'gleam', 'groovy', 'haskell', 'idris', 'java', 'javascript', 'julia', 'koka', 'lean4', 'lua', 'mercury', 'mojo', 'nim', 'object-pascal', 'objective-c', 'ocaml', 'odin', 'prolog', 'purescript', 'python', 'racket', 'roc', 'ruby', 'rust', 'scheme', 'swift', 'typescript', 'v', 'wolfram-language', 'zig']}>
<TabItem value="ada" label="Ada">

```ada
-- Export in Math_Utils.ads
package Math_Utils is
    function Add(A, B : Integer) return Integer;
end Math_Utils;

-- Import in another file
with Math_Utils;
use Math_Utils;

Result : Integer := Add(5, 3);
```

**Special features:**
- `with` imports a package
- `use` makes names directly available
- Export occurs through declaration in package specification

**Further reading:**
- [Ada Documentation - Packages](https://learn.adacore.com/courses/intro-to-ada/chapters/packages.html)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Export in math_utils.carbon
package MathUtils api;

fn Add(a: i32, b: i32) -> i32 {
    return a + b;
}

// Import in another file
package MyApp;

import MathUtils;

fn Main() -> i32 {
    return MathUtils.Add(5, 3);
}
```

**Special features:**
- `api` modifier exports public functions
- `import` imports a package
- Experimental syntax may still change

**Further reading:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Export in math_utils.clj
(ns math-utils)

(defn add [a b]
  (+ a b))

;; Import in another file
(ns my-app
  (:require [math-utils :as math]))

(def result (math/add 5 3))
```

**Special features:**
- `:require` imports namespaces
- `:as` creates alias
- Supports `:refer` for direct import

**Further reading:**
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

;; Import in another file
(defpackage :my-app
  (:use :cl :math-utils))

(in-package :my-app)

(defvar result (add 5 3))
```

**Special features:**
- `:export` specifies exported symbols
- `:use` imports all exported symbols
- Supports `:import-from` for selective import

**Further reading:**
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

# Import in another file
require "./math_utils"

result = MathUtils.add(5, 3)
```

**Special features:**
- `require` imports files
- Module names are automatically available
- Supports relative and absolute paths

**Further reading:**
- [Crystal Documentation - Requiring Files](https://crystal-lang.org/reference/1.11/syntax_and_semantics/requiring_files.html)

</TabItem>
<TabItem value="d" label="D">

```d
// Export in math_utils.d
module math_utils;

int add(int a, int b) {
    return a + b;
}

// Import in another file
module my_app;

import math_utils;

void main() {
    int result = add(5, 3);
}
```

**Special features:**
- `import` imports modules
- Supports selective import: `import math_utils : add;`
- Supports `public import` for re-export

**Further reading:**
- [D Language Specification - Import](https://dlang.org/spec/module.html#import-declaration)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Export in math_utils.dart
library math_utils;

int add(int a, int b) {
    return a + b;
}

// Import in another file
import 'math_utils.dart';

void main() {
    int result = add(5, 3);
}
```

**Special features:**
- `import` imports libraries
- Supports `show` and `hide` for selective import
- Supports `as` for aliasing

**Further reading:**
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

# Import in another file
defmodule MyApp do
  require MathUtils
  
  def calculate do
    MathUtils.add(5, 3)
  end
end
```

**Special features:**
- `require` imports modules
- `alias` creates alias
- Supports `import` for function import

**Further reading:**
- [Elixir Documentation - Aliases, require, and import](https://elixir-lang.org/getting-started/alias-require-and-import.html)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Export in MathUtils.elm
module MathUtils exposing (add)

add : Int -> Int -> Int
add a b =
    a + b

-- Import in another file
import MathUtils

result = MathUtils.add 5 3
```

**Special features:**
- `exposing` specifies exported functions
- `import` imports modules
- Supports `exposing (..)` for all exports

**Further reading:**
- [Elm Documentation - Modules](https://guide.elm-lang.org/webapps/modules.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
%% Export in math_utils.erl
-module(math_utils).
-export([add/2]).

add(A, B) ->
    A + B.

%% Import in another file
-module(my_app).

result() ->
    math_utils:add(5, 3).
```

**Special features:**
- `-export()` specifies exported functions
- Functions are called with module name: `module:function()`
- No explicit import needed

**Further reading:**
- [Erlang Documentation - Modules](https://www.erlang.org/doc/reference_manual/modules.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Export in MathUtils.fs
module MathUtils

let add a b = a + b

// Import in another file
open MathUtils

let result = add 5 3
```

**Special features:**
- `open` imports modules
- Supports selective import
- Modules are automatically exported

**Further reading:**
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

! Import in another file
program my_app
    use math_utils
    implicit none
    integer :: result
    result = add(5, 3)
end program my_app
```

**Special features:**
- `use` imports modules
- Supports `only` for selective import
- `contains` defines internal procedures

**Further reading:**
- [Fortran Wiki - Modules](https://fortranwiki.org/fortran/show/Modules)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// Export: pub-Keyword in src/math_utils.gleam
pub fn add(a: Int, b: Int) -> Int {
  a + b
}

// Import: in another file
import math_utils

pub fn main() {
  math_utils.add(5, 3)
}

// Import with alias
import math_utils as math
```

**Special features:**
- `pub` exports functions and types
- `import module/name` for import
- Supports aliasing with `as`
- Supports selective import: `import gleam/list.{map, filter}`

**Further reading:**
- [Gleam Documentation - Modules](https://tour.gleam.run/basics/modules/)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Export in MathUtils.hs
module MathUtils (add) where

add :: Int -> Int -> Int
add a b = a + b

-- Import in another file
import MathUtils

result = add 5 3
```

**Special features:**
- Export list specifies exported functions
- `import` imports modules
- Supports `qualified` and `as` for aliasing

**Further reading:**
- [Haskell Documentation - Modules](https://www.haskell.org/tutorial/modules.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Export in MathUtils.idr
module MathUtils

export
add : Int -> Int -> Int
add a b = a + b

-- Import in another file
import MathUtils

result : Int
result = add 5 3
```

**Special features:**
- `export` exports functions
- `import` imports modules
- Supports `public export` for full export

**Further reading:**
- [Idris Documentation - Modules](https://idris2.readthedocs.io/en/latest/tutorial/modules.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Export in math_utils.js
export function add(a, b) {
    return a + b;
}

// Import in another file
import { add } from './math_utils.js';

const result = add(5, 3);
```

**Special features:**
- ES6 modules with `export` and `import`
- Supports named exports and default exports
- Supports `import * as` for namespace import

**Further reading:**
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

# Import in another file
using MathUtils

result = add(5, 3)
```

**Special features:**
- `export` exports functions
- `using` imports all exported names
- Supports `import` for selective import

**Further reading:**
- [Julia Documentation - Modules](https://docs.julialang.org/en/v1/manual/modules/)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
// Export: pub marks public definitions
// File: math/utils.kk
module math/utils

pub fun add(a : int, b : int) : int
  a + b

pub val pi = 3.14159

// Import in another file
import math/utils

fun main()
  val result = add(5, 3)
  println(result.show)
```

**Special features:**
- `pub` marks definitions as public (exported)
- Without `pub`, definitions are module-private
- `import` imports all public definitions of a module
- Qualified usage via module name is possible

**Further reading:**
- [Koka Documentation - Modules](https://koka-lang.github.io/koka/doc/book.html#sec-modules)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Import a module
import MyLib.Utils

-- open makes all definitions accessible without qualification
open MyLib.Utils in
#eval add 5 3  -- 8

-- Selective import
open MyLib.Utils (add) in
#eval add 5 3

-- Export: All non-private definitions are automatically exported
-- private def helper ... → not exported
-- def add ... → exported
```

**Special features:**
- `import` imports a module and all transitive dependencies.
- `open` makes definitions accessible without qualification.
- Selective import with `open M (f, g)`.
- All definitions without `private` are automatically exported.

**Further reading:**
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

-- Import in another file
local math_utils = require("math_utils")

local result = math_utils.add(5, 3)
```

**Special features:**
- `return` exports the module
- `require()` imports modules
- Modules are cached in `package.loaded`

**Further reading:**
- [Lua Documentation - Modules](https://www.lua.org/manual/5.4/manual.html#6.3)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Export: Interface section defines public interface
:- module math_utils.
:- interface.

:- func add(int, int) = int.

:- implementation.

add(A, B) = A + B.

% Import in another file
:- module main.
:- interface.
:- implementation.

:- import_module math_utils.

:- func result = int.
result = math_utils.add(5, 3).
```

**Special features:**
- `:- import_module` imports a module (qualified access)
- `:- use_module` imports and makes names available without qualification
- Export is controlled by declaration in the `:- interface.` section
- Everything in `:- implementation.` is private

**Further reading:**
- [Mercury Language Reference - Modules](https://www.mercurylang.org/information/doc-release/mercury_ref/Modules.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# Export in math_utils.mojo
module math_utils:
    fn add(a: Int, b: Int) -> Int:
        return a + b

# Import in another file
from math_utils import add

fn main():
    var result = add(5, 3)
```

**Special features:**
- `from ... import` imports functions
- Supports `import` for module import
- Python-like syntax

**Further reading:**
- [Mojo Documentation - Modules](https://docs.modular.com/mojo/manual/modules/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# File: math_utils.nim
proc add*(a, b: int): int =  # * = exported
  a + b

# File: main.nim
import math_utils          # Import everything
from math_utils import add  # Selective import
import math_utils except add  # Everything except add

var result = add(5, 3)
```

**Special features:**
- `import` imports all exported symbols
- `from ... import` for selective import
- `import ... except` to exclude symbols
- Only symbols marked with `*` are importable

**Further reading:**
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

{ Import in another file }
unit MyApp;

uses MathUtils;

var
    Result: Integer;
begin
    Result := Add(5, 3);
end.
```

**Special features:**
- `uses` imports units
- `interface` section defines exports
- Units are linked at compile time

**Further reading:**
- [Free Pascal Documentation - Units](https://www.freepascal.org/docs-html/ref/refse5.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Export in math_utils.ml *)
module MathUtils = struct
  let add a b = a + b
end

(* Import in another file *)
open MathUtils

let result = add 5 3
```

**Special features:**
- `open` imports modules
- Supports `module` for explicit modules
- Files are automatically converted to modules

**Further reading:**
- [OCaml Documentation - Modules](https://ocaml.org/docs/modules)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Export in math_utils.odin
package math_utils

add :: proc(a: int, b: int) -> int {
    return a + b
}

// Import in another file
package my_app

import "math_utils"

main :: proc() {
    result := math_utils.add(5, 3)
}
```

**Special features:**
- `import` imports packages
- Package names are used as namespace
- Supports relative and absolute paths

**Further reading:**
- [Odin Documentation - Packages](https://odin-lang.org/docs/overview/#packages)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Export in math_utils.pl
:- module(math_utils, [add/3]).

add(A, B, Result) :-
    Result is A + B.

% Import in another file
:- use_module(math_utils).

% Usage
?- add(5, 3, Result).
% Result = 8
```

**Special features:**
- `use_module/1` imports all exported predicates
- `use_module/2` enables selective import: `:- use_module(math_utils, [add/3]).`
- Export is determined by module definition (second argument of `module/2`)
- Qualified access: `math_utils:add(5, 3, R)`

**Further reading:**
- [SWI-Prolog Documentation - Import/Export](https://www.swi-prolog.org/pldoc/man?section=import)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Export in MathUtils.purs
module MathUtils where

add :: Int -> Int -> Int
add a b = a + b

-- Import in another file
import MathUtils

result = add 5 3
```

**Special features:**
- `import` imports modules
- Supports selective import: `import MathUtils (add)`
- Supports `as` for aliasing

**Further reading:**
- [PureScript Documentation - Modules](https://book.purescript.org/chapter3.html)

</TabItem>
<TabItem value="python" label="Python">

```python
# Export in math_utils.py
def add(a: int, b: int) -> int:
    return a + b

# Import in another file
from math_utils import add

result = add(5, 3)
```

**Special features:**
- `from ... import` imports functions
- Supports `import` for module import
- `__all__` specifies default exports

**Further reading:**
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

;; Import in another file
(require "math-utils.rkt")

(define result (add 5 3))
```

**Special features:**
- `provide` exports bindings
- `require` imports modules
- Supports various module languages

**Further reading:**
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

# Import in another file
interface Main
    exposes [main]
    imports [MathUtils]

main = MathUtils.add 5 3
```

**Special features:**
- `exposes` specifies exported functions
- `imports` imports modules
- Qualified access with `ModuleName.function`

**Further reading:**
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

# Import in another file
require_relative 'math_utils'

result = MathUtils.add(5, 3)
```

**Special features:**
- `require` or `require_relative` imports files
- Module names are automatically available
- Supports `include` for mixins

**Further reading:**
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

// Import in another file
use math_utils::add;

fn main() {
    let result = add(5, 3);
}
```

**Special features:**
- `pub` exports modules and functions
- `use` imports modules
- Supports `pub use` for re-export

**Further reading:**
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

;; Import in another file
(import (math-utils))

(define result (add 5 3))
```

**Special features:**
- R7RS: `import` for importing modules
- R7RS: `export` within `define-library` for exports
- Guile uses different syntax (`use-modules`, `#:export`)

**Further reading:**
- [R7RS Scheme - Libraries](https://small.r7rs.org/attachment/r7rs.pdf)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Export in math_utils.swift
public func add(_ a: Int, _ b: Int) -> Int {
    return a + b
}

// Import in another file
import math_utils

let result = add(5, 3)
```

**Special features:**
- `public` exports functions
- `import` imports modules
- Modules are automatically created by files

**Further reading:**
- [Swift Documentation - Access Control](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/accesscontrol/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Export in math_utils.ts
export function add(a: number, b: number): number {
    return a + b;
}

// Import in another file
import { add } from './math_utils';

const result = add(5, 3);
```

**Special features:**
- ES6 modules with `export` and `import`
- Supports named exports and default exports
- Supports `import type` for type imports

**Further reading:**
- [TypeScript Documentation - Modules](https://www.typescriptlang.org/docs/handbook/modules.html)

</TabItem>
<TabItem value="v" label="V">

```v
// Export in math_utils.v
module math_utils

pub fn add(a int, b int) int {
    return a + b
}

// Import in another file
module my_app

import math_utils

fn main() {
    result := math_utils.add(5, 3)
}
```

**Special features:**
- `pub` exports functions
- `import` imports modules
- Module name corresponds to the directory name

**Further reading:**
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

(* Import in another file *)
Needs["MathUtils`"]

result = Add[5, 3]
```

**Special features:**
- `BeginPackage`/`EndPackage` defines exports
- `Needs` or `Get` imports packages
- Supports package hierarchies

**Further reading:**
- [Wolfram Language Documentation - Packages](https://reference.wolfram.com/language/guide/Packages.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Export in math_utils.zig
pub fn add(a: i32, b: i32) i32 {
    return a + b;
}

// Import in another file
const math_utils = @import("math_utils.zig");

pub fn main() void {
    const result = math_utils.add(5, 3);
}
```

**Special features:**
- `pub` exports functions
- `@import()` imports modules
- Modules are automatically created by files

**Further reading:**
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

**Special features:**
- `import` for class import
- `import static` for static methods/fields
- `as` for import aliases (renaming)
- Default imports: `java.lang.*`, `java.util.*`, `groovy.lang.*`, etc.

**Further reading:**
- [Groovy Documentation - Imports](https://groovy-lang.org/structure.html#_imports)

</TabItem>
<TabItem value="java" label="Java">

```java
// module-info.java (since Java 9)
module com.example.myapp {
    // Import (dependencies)
    requires java.sql;
    requires transitive java.logging;  // Transitive export

    // Export (public packages)
    exports com.example.myapp.api;
    exports com.example.myapp.util to com.example.other;  // Restricted export

    // Services
    provides com.example.spi.MyService with com.example.impl.MyServiceImpl;
    uses com.example.spi.MyService;
}
```

**Special features:**
- `requires` imports dependencies
- `requires transitive` makes dependency visible to dependent modules
- `exports` makes packages accessible to all modules
- `exports ... to` restricts access to specific modules

**Further reading:**
- [Oracle Java Documentation - Modules](https://docs.oracle.com/javase/specs/jls/se21/html/jls-7.html#jls-7.7)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Classic header import
#import <Foundation/Foundation.h>
#import "MyClass.h"

// Module Import (since Xcode 5)
@import Foundation;

// Selective import
@import Foundation.NSString;
```

**Special features:**
- `#import` prevents double inclusion (unlike C `#include`)
- `@import` for modules (since Xcode 5)
- Angle brackets `<>` for system/framework headers
- Quotation marks `""` for project-local headers

**Further reading:**
- [Apple Documentation - Modules](https://developer.apple.com/library/archive/documentation/DeveloperTools/Conceptual/ClangModules/Introduction/Introduction.html)

</TabItem>
</Tabs>


## 15.1.3. Namespaces

Namespaces organize code into logical groups and avoid naming conflicts through hierarchical namespaces. They enable using identifiers in different contexts.

### Languages {#sprachen}

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

**Special features:**
- Packages can be nested
- Dot notation for nested packages
- Supports hierarchical namespaces

**Further reading:**
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

**Special features:**
- Packages can be nested
- Dot notation for nested packages
- Experimental syntax may still change

**Further reading:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
(ns math.utils)

(defn add [a b]
  (+ a b))

;; Nested namespace
(ns math.utils.advanced)

(defn multiply [a b]
  (* a b))
```

**Special features:**
- Namespaces can be nested
- Dot notation for nested namespaces
- Supports dynamic namespace creation

**Further reading:**
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

**Special features:**
- Packages can be nested
- Dot notation for nested packages
- Supports hierarchical namespaces

**Further reading:**
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

// Usage
int result = Math::Utils::add(5, 3);

// Or with using
using namespace Math::Utils;
int result2 = add(5, 3);
```

**Special features:**
- Namespaces can be nested
- `::` for namespace separation
- Supports `using namespace` for direct access

**Further reading:**
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

// Usage
using Math.Utils;
int result = Calculator.Add(5, 3);
```

**Special features:**
- Namespaces can be nested
- Dot notation for nested namespaces
- `using` makes namespace names available

**Further reading:**
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

# Usage
result = Math::Utils.add(5, 3)
```

**Special features:**
- Modules can be nested
- `::` for namespace separation
- Supports hierarchical namespaces

**Further reading:**
- [Crystal Documentation - Modules](https://crystal-lang.org/reference/1.11/syntax_and_semantics/modules.html)

</TabItem>
<TabItem value="d" label="D">

```d
module math.utils;

int add(int a, int b) {
    return a + b;
}

// Usage
import math.utils;
int result = add(5, 3);
```

**Special features:**
- Module names can contain dots
- Dot notation for hierarchical modules
- Supports package hierarchies

**Further reading:**
- [D Language Specification - Modules](https://dlang.org/spec/module.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
library math.utils;

int add(int a, int b) {
    return a + b;
}

// Usage
import 'math/utils.dart' as math;
int result = math.add(5, 3);
```

**Special features:**
- Libraries can be nested
- Path-based namespaces
- Supports `as` for aliasing

**Further reading:**
- [Dart Documentation - Libraries](https://dart.dev/guides/libraries/create-library-packages)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
defmodule Math.Utils do
  def add(a, b) do
    a + b
  end
end

# Usage
result = Math.Utils.add(5, 3)
```

**Special features:**
- Modules can be nested
- Dot notation for nested modules
- Supports hierarchical namespaces

**Further reading:**
- [Elixir Documentation - Modules](https://elixir-lang.org/getting-started/modules-and-functions.html)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
module Math.Utils exposing (add)

add : Int -> Int -> Int
add a b =
    a + b

-- Usage
import Math.Utils
result = Math.Utils.add 5 3
```

**Special features:**
- Modules can be nested
- Dot notation for nested modules
- Module name must match the file path

**Further reading:**
- [Elm Documentation - Modules](https://guide.elm-lang.org/webapps/modules.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
-module(math_utils).
-export([add/2]).

add(A, B) ->
    A + B.

%% Usage
result() ->
    math_utils:add(5, 3).
```

**Special features:**
- Module names can contain underscores
- Supports hierarchical naming conventions
- No explicit nesting, but naming conventions

**Further reading:**
- [Erlang Documentation - Modules](https://www.erlang.org/doc/reference_manual/modules.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
namespace Math.Utils

module Calculator =
    let add a b = a + b

// Usage
open Math.Utils
let result = Calculator.add 5 3
```

**Special features:**
- Namespaces can be nested
- Dot notation for nested namespaces
- Supports both namespaces and modules

**Further reading:**
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

! Usage
program my_app
    use math_utils
    implicit none
    integer :: result
    result = add(5, 3)
end program my_app
```

**Special features:**
- Modules can be nested
- Supports hierarchical naming conventions
- `use` imports module namespace

**Further reading:**
- [Fortran Wiki - Modules](https://fortranwiki.org/fortran/show/Modules)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// Namespaces through directory structure
// File: src/math/utils.gleam

pub fn add(a: Int, b: Int) -> Int {
  a + b
}

// Import
import math/utils

pub fn main() {
  utils.add(5, 3)
}
```

**Special features:**
- Modules serve as namespaces
- Directory structure defines the hierarchy
- `/` as separator in import paths
- Module name is the last part of the path (e.g., `utils` in `import math/utils`)

**Further reading:**
- [Gleam Documentation - Modules](https://tour.gleam.run/basics/modules/)

</TabItem>
<TabItem value="go" label="Go">

```go
package math

package utils

func Add(a, b int) int {
    return a + b
}

// Usage
import "math/utils"
result := utils.Add(5, 3)
```

**Special features:**
- Packages can be nested
- Path-based namespaces
- Supports hierarchical package structure

**Further reading:**
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

// Usage
import math.utils.Calculator
def result = Calculator.add(5, 3)
```

**Special features:**
- Packages can be nested
- Dot notation for nested packages
- Supports hierarchical namespaces

**Further reading:**
- [Groovy Documentation - Packages](https://groovy-lang.org/structure.html#_packages)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
module Math.Utils (add) where

add :: Int -> Int -> Int
add a b = a + b

-- Usage
import Math.Utils
result = add 5 3
```

**Special features:**
- Modules can be nested
- Dot notation for nested modules
- Module name must match the file path

**Further reading:**
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

// Usage
import math.utils.Calculator;
var result = Calculator.add(5, 3);
```

**Special features:**
- Packages can be nested
- Dot notation for nested packages
- Supports hierarchical namespaces

**Further reading:**
- [Haxe Documentation - Packages](https://haxe.org/manual/type-system-packages.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
module Math.Utils

export
add : Int -> Int -> Int
add a b = a + b

-- Usage
import Math.Utils
result : Int
result = add 5 3
```

**Special features:**
- Modules can be nested
- Dot notation for nested modules
- Module name matches the file path

**Further reading:**
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

// Usage
import math.utils.Calculator;
int result = Calculator.add(5, 3);
```

**Special features:**
- Packages can be nested
- Dot notation for nested packages
- Supports hierarchical namespaces

**Further reading:**
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

# Usage
using Math.Utils
result = add(5, 3)
```

**Special features:**
- Modules can be nested
- Dot notation for nested modules
- Supports hierarchical namespaces

**Further reading:**
- [Julia Documentation - Modules](https://docs.julialang.org/en/v1/manual/modules/)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
// Modules as namespaces (directory structure)
// File: math/utils.kk → Namespace math/utils
module math/utils

pub fun add(a : int, b : int) : int
  a + b

// File: math/advanced.kk → Namespace math/advanced
module math/advanced

import math/utils

pub fun double-add(a : int, b : int) : int
  add(a, b) + add(a, b)
```

**Special features:**
- Modules serve as namespaces
- Directory structure defines the namespace hierarchy
- Qualified calls via module names possible
- No separate namespace keyword – modules are namespaces

**Further reading:**
- [Koka Documentation - Modules](https://koka-lang.github.io/koka/doc/book.html#sec-modules)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Namespace definition
namespace Math.Utils

def add (a b : Nat) : Nat := a + b
def multiply (a b : Nat) : Nat := a * b

end Math.Utils

-- Qualified usage
#eval Math.Utils.add 5 3  -- 8

-- Open namespace
open Math.Utils in
#eval add 5 3  -- 8

-- Nested namespaces
namespace Math.Advanced
  open Math.Utils
  def doubleAdd (a b : Nat) : Nat := add a b + add a b
end Math.Advanced
```

**Special features:**
- `namespace` defines hierarchical namespaces.
- Dot notation for nested namespaces (`Math.Utils`).
- `open` makes definitions accessible without qualification.
- `section` provides temporary parameterization within a scope.

**Further reading:**
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

// Usage
import math.utils.Calculator
val result = Calculator.add(5, 3)
```

**Special features:**
- Packages can be nested
- Dot notation for nested packages
- Supports hierarchical namespaces

**Further reading:**
- [Kotlin Documentation - Packages](https://kotlinlang.org/docs/packages.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Namespace as table
local Math = {}

Math.Utils = {}

function Math.Utils.add(a, b)
    return a + b
end

-- Usage
local result = Math.Utils.add(5, 3)
```

**Special features:**
- Namespaces are implemented as tables
- Dot notation for nested tables
- Supports hierarchical namespaces

**Further reading:**
- [Lua Documentation - Tables](https://www.lua.org/manual/5.4/manual.html#2.1)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Sub-modules as namespaces
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

% Usage
:- import_module math.utils.
Result = math.utils.add(5, 3)
```

**Special features:**
- Modules serve as namespaces with dot notation (`math.utils`)
- Sub-modules enable hierarchical namespaces
- `:- include_module` registers sub-modules in the parent module
- Qualified access via `module.name`

**Further reading:**
- [Mercury Language Reference - Sub-Modules](https://www.mercurylang.org/information/doc-release/mercury_ref/Sub_002dmodules.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
module Math:
    module Utils:
        fn add(a: Int, b: Int) -> Int:
            return a + b

# Usage
from Math.Utils import add
var result = add(5, 3)
```

**Special features:**
- Modules can be nested
- Dot notation for nested modules
- Python-like syntax

**Further reading:**
- [Mojo Documentation - Modules](https://docs.modular.com/mojo/manual/modules/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Directory structure as namespace:
# math/utils.nim
proc add*(a, b: int): int = a + b

# main.nim
import math/utils
echo add(5, 3)

# Qualified access
import math/utils as mu
echo mu.add(5, 3)
```

**Special features:**
- Directory structure defines namespaces
- Modules can be renamed with `as`
- Qualified access with `module.symbol`
- No dedicated namespace keyword

**Further reading:**
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

{ Usage }
uses Math.Utils;

var
    Result: Integer;
begin
    Result := Add(5, 3);
end.
```

**Special features:**
- Units can be nested
- Dot notation for nested units
- Supports hierarchical namespaces

**Further reading:**
- [Free Pascal Documentation - Units](https://www.freepascal.org/docs-html/ref/refse5.html)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// MathUtils.h
#import <Foundation/Foundation.h>

@interface MathUtils : NSObject
+ (int)add:(int)a with:(int)b;
@end

// Usage
#import "MathUtils.h"
int result = [MathUtils add:5 with:3];
```

**Special features:**
- Frameworks can serve as namespaces
- Supports hierarchical framework structure
- Since Objective-C 2.0 with @import for modules

**Further reading:**
- [Apple Documentation - Modules](https://clang.llvm.org/docs/Modules.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
module Math = struct
  module Utils = struct
    let add a b = a + b
  end
end

(* Usage *)
let result = Math.Utils.add 5 3
```

**Special features:**
- Modules can be nested
- Dot notation for nested modules
- Supports hierarchical namespaces

**Further reading:**
- [OCaml Documentation - Modules](https://ocaml.org/docs/modules)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
package math.utils

add :: proc(a: int, b: int) -> int {
    return a + b
}

// Usage
import "math/utils"
result := math.utils.add(5, 3)
```

**Special features:**
- Packages can be nested
- Path-based namespaces
- Supports hierarchical package structure

**Further reading:**
- [Odin Documentation - Packages](https://odin-lang.org/docs/overview/#packages)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
package Math::Utils;

sub add {
    my ($a, $b) = @_;
    return $a + $b;
}

# Usage
use Math::Utils;
my $result = Math::Utils::add(5, 3);
```

**Special features:**
- Packages can be nested
- `::` for namespace separation
- Supports hierarchical namespaces

**Further reading:**
- [Perl Documentation - Packages](https://perldoc.perl.org/perlmod)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
namespace Math\Utils;

function add(int $a, int $b): int {
    return $a + $b;
}

// Usage
use Math\Utils\add;
$result = add(5, 3);
```

**Special features:**
- Namespaces can be nested
- Backslash for namespace separation
- Supports hierarchical namespaces

**Further reading:**
- [PHP Documentation - Namespaces](https://www.php.net/manual/en/language.namespaces.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
:- module(math_utils, [add/3]).

add(A, B, Result) :-
    Result is A + B.

% Qualified access from another module
?- math_utils:add(5, 3, Result).
% Result = 8

% Unqualified access after use_module
:- use_module(math_utils).
?- add(5, 3, Result).
% Result = 8
```

**Special features:**
- Modules serve as namespaces in Prolog
- Qualified access via `Module:Predicate`
- Name conflicts are resolved by module qualification
- No separate namespace concept — modules are namespaces

**Further reading:**
- [SWI-Prolog Documentation - Overriding Predicate References](https://www.swi-prolog.org/pldoc/man?section=overrule)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
module Math.Utils where

add :: Int -> Int -> Int
add a b = a + b

-- Usage
import Math.Utils
result = add 5 3
```

**Special features:**
- Modules can be nested
- Dot notation for nested modules
- Module name must match the file path

**Further reading:**
- [PureScript Documentation - Modules](https://book.purescript.org/chapter3.html)

</TabItem>
<TabItem value="python" label="Python">

```python
# math/utils.py
def add(a: int, b: int) -> int:
    return a + b

# Usage
from math import utils
result = utils.add(5, 3)
```

**Special features:**
- Modules can be nested
- Dot notation for nested modules
- Path-based namespaces

**Further reading:**
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

**Special features:**
- Modules can be nested
- Supports hierarchical module structure
- `submod` for nested modules

**Further reading:**
- [Racket Documentation - Modules](https://docs.racket-lang.org/guide/modules.html)

</TabItem>
<TabItem value="roc" label="Roc">

```roc
# Modules as namespaces
interface MathUtils
    exposes [add]
    imports []

add : I64, I64 -> I64
add = \a, b -> a + b

# Usage
# MathUtils.add 5 3
```

**Special features:**
- Modules serve as namespaces
- Qualified access with `ModuleName.function`
- No nested namespaces

**Further reading:**
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

# Usage
result = Math::Utils.add(5, 3)
```

**Special features:**
- Modules can be nested
- `::` for namespace separation
- Supports hierarchical namespaces

**Further reading:**
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

// Usage
use math::utils;
let result = utils::add(5, 3);
```

**Special features:**
- Modules can be nested
- `::` for namespace separation
- Supports hierarchical namespaces

**Further reading:**
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

// Usage
import math.utils.Calculator
val result = Calculator.add(5, 3)
```

**Special features:**
- Packages can be nested
- Dot notation for nested packages
- Supports hierarchical namespaces

**Further reading:**
- [Scala Documentation - Packages](https://docs.scala-lang.org/tour/packages.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; Hierarchical namespaces via library names
(define-library (math utils)
  (export add)
  (begin
    (define (add a b)
      (+ a b))))

;; Usage
(import (math utils))
(define result (add 5 3))
```

**Special features:**
- Namespaces are realized through hierarchical library names
- R7RS uses `define-library` with nested names
- No separate namespace concept like in other languages

**Further reading:**
- [R7RS Scheme - Libraries](https://small.r7rs.org/attachment/r7rs.pdf)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// math/utils.swift
// Module is automatically created by file

public func add(_ a: Int, _ b: Int) -> Int {
    return a + b
}

// Usage
import math
let result = math.add(5, 3)
```

**Special features:**
- Modules are automatically created by files
- Supports hierarchical module structure
- Path-based namespaces

**Further reading:**
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

// Usage
import { Math } from './math/utils';
const result = Math.Utils.add(5, 3);
```

**Special features:**
- Namespaces can be nested
- Dot notation for nested namespaces
- Supports both namespaces and ES6 modules

**Further reading:**
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

' Usage
Imports Math.Utils
Dim result As Integer = Calculator.Add(5, 3)
```

**Special features:**
- Namespaces can be nested
- Dot notation for nested namespaces
- Supports hierarchical namespaces

**Further reading:**
- [Microsoft VB.NET Documentation - Namespaces](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/program-structure/namespaces)

</TabItem>
<TabItem value="v" label="V">

```v
module math.utils

pub fn add(a int, b int) int {
    return a + b
}

// Usage
import math.utils
result := math.utils.add(5, 3)
```

**Special features:**
- Modules can be nested
- Dot notation for nested modules
- Module name matches the directory name

**Further reading:**
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

(* Usage *)
Needs["Math`Utils`"]
result = Add[5, 3]
```

**Special features:**
- Packages can be nested
- Backtick notation for nested packages
- Supports hierarchical namespaces

**Further reading:**
- [Wolfram Language Documentation - Packages](https://reference.wolfram.com/language/guide/Packages.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// math/utils.zig
pub fn add(a: i32, b: i32) i32 {
    return a + b;
}

// Usage
const math_utils = @import("math/utils.zig");
const result = math_utils.add(5, 3);
```

**Special features:**
- Modules are automatically created by files
- Path-based namespaces
- Supports hierarchical module structure

**Further reading:**
- [Zig Documentation - Source Files](https://ziglang.org/documentation/0.11.0/#Source-Encoding)

</TabItem>
</Tabs>


## 15.1.4. Packages

Packages are larger organizational units that group together modules, types, and functions. They serve code organization, reuse, and distribution of libraries.

### Languages {#languages}

<Tabs availableTabs={['ada', 'carbon', 'clojure', 'common-lisp', 'cpp', 'csharp', 'd', 'dart', 'elixir', 'elm', 'erlang', 'fsharp', 'go', 'groovy', 'haskell', 'haxe', 'java', 'julia', 'kotlin', 'lean4', 'lua', 'nim', 'object-pascal', 'objective-c', 'ocaml', 'odin', 'perl', 'php', 'prolog', 'python', 'r', 'racket', 'roc', 'ruby', 'rust', 'scala', 'swift', 'v', 'vbnet', 'wolfram-language', 'zig']} yellowTabs={['koka']}>
<TabItem value="ada" label="Ada">

```ada
-- Package specification in math_utils.ads
package Math_Utils is
    function Add(A, B : Integer) return Integer;
end Math_Utils;

-- Package body in math_utils.adb
package body Math_Utils is
    function Add(A, B : Integer) return Integer is
    begin
        return A + B;
    end Add;
end Math_Utils;
```

**Special features:**
- Packages are the main organizational form in Ada
- Separation between package specification and body
- Packages can be nested

**Further reading:**
- [Ada Documentation - Packages](https://learn.adacore.com/courses/intro-to-ada/chapters/packages.html)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
package MathUtils api;

fn Add(a: i32, b: i32) -> i32 {
    return a + b
}
```

**Special features:**
- Packages are the main organizational form
- `api` modifier makes package public
- Experimental syntax may still change

**Further reading:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
(ns math.utils)

(defn add [a b]
  (+ a b))
```

**Special features:**
- Namespaces serve as packages
- Supports hierarchical package structure
- Packages are distributed in JAR files

**Further reading:**
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

**Special features:**
- Packages are the main organizational form
- Supports hierarchical package structure
- Packages are distributed via Quicklisp

**Further reading:**
- [Common Lisp HyperSpec - Packages](http://www.lispworks.com/documentation/HyperSpec/Body/11_.htm)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Header files serve as package interface
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

**Special features:**
- Header files serve as package interface
- Namespaces organize packages
- C++20 supports true modules

**Further reading:**
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

**Special features:**
- Namespaces organize packages
- Packages are distributed as NuGet packages
- Supports hierarchical package structure

**Further reading:**
- [Microsoft C# Documentation - Namespaces](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/namespace)

</TabItem>
<TabItem value="d" label="D">

```d
module math.utils;

int add(int a, int b) {
    return a + b;
}
```

**Special features:**
- Modules serve as packages
- Supports hierarchical package structure
- Packages are distributed via DUB

**Further reading:**
- [D Language Specification - Modules](https://dlang.org/spec/module.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
library math.utils;

int add(int a, int b) {
    return a + b;
}
```

**Special features:**
- Libraries serve as packages
- Packages are distributed via Pub
- Supports hierarchical package structure

**Further reading:**
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

**Special features:**
- Modules serve as packages
- Packages are distributed via Hex
- Supports hierarchical package structure

**Further reading:**
- [Elixir Documentation - Modules](https://elixir-lang.org/getting-started/modules-and-functions.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
-module(math_utils).
-export([add/2]).

add(A, B) ->
    A + B.
```

**Special features:**
- Modules serve as packages
- Packages are distributed as OTP Applications
- Supports hierarchical naming conventions

**Further reading:**
- [Erlang Documentation - Modules](https://www.erlang.org/doc/reference_manual/modules.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
namespace Math.Utils

module Calculator =
    let add a b = a + b
```

**Special features:**
- Namespaces organize packages
- Packages are distributed as NuGet packages
- Supports hierarchical package structure

**Further reading:**
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

**Special features:**
- Packages are the main organizational form
- Packages are distributed via Go Modules
- Supports hierarchical package structure

**Further reading:**
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

**Special features:**
- Packages are the main organizational form
- Packages are distributed as JAR files
- Supports hierarchical package structure

**Further reading:**
- [Groovy Documentation - Packages](https://groovy-lang.org/structure.html#_packages)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
module Math.Utils (add) where

add :: Int -> Int -> Int
add a b = a + b
```

**Special features:**
- Modules serve as packages
- Packages are distributed via Cabal/Hackage
- Supports hierarchical package structure

**Further reading:**
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

**Special features:**
- Packages are the main organizational form
- Packages are distributed via Haxelib
- Supports hierarchical package structure

**Further reading:**
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

**Special features:**
- Packages are the main organizational form
- Packages are distributed as JAR files
- Supports hierarchical package structure

**Further reading:**
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

**Special features:**
- Modules serve as packages
- Packages are distributed via Julia Package Manager
- Supports hierarchical package structure

**Further reading:**
- [Julia Documentation - Packages](https://docs.julialang.org/en/v1/stdlib/Pkg/)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
// Packages configured via koka.json
// koka.json:
// { "name": "math-utils",
//   "version": "1.0.0",
//   "main": "math/utils" }

// File: math/utils.kk
module math/utils

pub fun add(a : int, b : int) : int
  a + b

// Install external packages:
// koka --install <github-user>/<repo>
```

**Special features:**
- Packages defined via `koka.json` configuration file
- External packages installable from GitHub
- Basic package system, not as mature as established package managers
- Modules within a package organized via directory structure

**Further reading:**
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

**Special features:**
- Packages are the main organizational form
- Packages are distributed as JAR files
- Supports hierarchical package structure

**Further reading:**
- [Kotlin Documentation - Packages](https://kotlinlang.org/docs/packages.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- lakefile.lean defines packages
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

**Special features:**
- Lake is the build system and package manager of Lean 4.
- `lakefile.lean` defines packages, dependencies, and build targets.
- `require` imports external packages (e.g., from GitHub).
- `lean_lib` and `lean_exe` define library and executable targets.

**Further reading:**
- [Lean 4 Documentation - Lake](https://lean-lang.org/lean4/doc/setup.html#lake)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Package as table
local math_utils = {}

function math_utils.add(a, b)
    return a + b
end

return math_utils
```

**Special features:**
- Tables serve as packages
- Packages are distributed via LuaRocks
- Supports hierarchical package structure

**Further reading:**
- [Lua Documentation - Modules](https://www.lua.org/manual/5.4/manual.html#6.3)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Package structure:
# mypackage/
#   mypackage.nimble   # Package definition
#   src/
#     mypackage.nim    # Main module
#     mypackage/
#       utils.nim      # Submodule

# mypackage.nimble:
# version = "1.0.0"
# author = "Name"
# requires "nim >= 2.0.0"
```

**Special features:**
- Packages are defined via `.nimble` files
- Directory structure determines package hierarchy
- Nimble as package manager

**Further reading:**
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

**Special features:**
- Units serve as packages
- Packages are distributed as components
- Supports hierarchical package structure

**Further reading:**
- [Free Pascal Documentation - Units](https://www.freepascal.org/docs-html/ref/refse5.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
module MathUtils = struct
  let add a b = a + b
end
```

**Special features:**
- Modules serve as packages
- Packages are distributed via OPAM
- Supports hierarchical package structure

**Further reading:**
- [OCaml Documentation - Modules](https://ocaml.org/docs/modules)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
package math.utils

add :: proc(a: int, b: int) -> int {
    return a + b
}
```

**Special features:**
- Packages are the main organizational form
- Supports hierarchical package structure
- Package name matches the directory name

**Further reading:**
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

**Special features:**
- Packages are the main organizational form
- Packages are distributed via CPAN
- Supports hierarchical package structure

**Further reading:**
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

**Special features:**
- Namespaces organize packages
- Packages are distributed via Composer
- Supports hierarchical package structure

**Further reading:**
- [PHP Documentation - Namespaces](https://www.php.net/manual/en/language.namespaces.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Pack directory structure:
% my_pack/
%   pack.pl          - Pack metadata
%   prolog/
%     math_utils.pl  - Source code

% pack.pl
name(my_pack).
version('1.0.0').
title('My Prolog Pack').
requires(lists).

% Usage
?- pack_install(my_pack).
:- use_module(library(math_utils)).
```

**Special features:**
- SWI-Prolog Packs are the package organizational form
- `pack.pl` defines metadata (name, version, dependencies)
- Packs are installed via `pack_install/1`
- Central registry at pack.swi-prolog.org

**Further reading:**
- [SWI-Prolog Pack Documentation](https://www.swi-prolog.org/pack/list)

</TabItem>
<TabItem value="python" label="Python">

```python
# __init__.py makes directory a package
# math/utils/__init__.py
def add(a: int, b: int) -> int:
    return a + b
```

**Special features:**
- Directories with `__init__.py` are packages
- Packages are distributed via PyPI
- Supports hierarchical package structure

**Further reading:**
- [Python Documentation - Packages](https://docs.python.org/3/tutorial/modules.html#packages)

</TabItem>
<TabItem value="r" label="R">

```r
# Package structure in directory
# math.utils/R/math.utils.R
add <- function(a, b) {
    return(a + b)
}
```

**Special features:**
- Directories with specific structure are packages
- Packages are distributed via CRAN
- Supports hierarchical package structure

**Further reading:**
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

**Special features:**
- Modules serve as packages
- Packages are distributed via Racket Package Manager
- Supports hierarchical package structure

**Further reading:**
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

**Special features:**
- Modules serve as packages
- Packages are distributed as Gems
- Supports hierarchical package structure

**Further reading:**
- [Ruby Documentation - Modules](https://docs.ruby-lang.org/en/3.2/syntax/modules_and_classes_rdoc.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Crate is package unit
// Cargo.toml defines package
pub mod math_utils {
    pub fn add(a: i32, b: i32) -> i32 {
        a + b
    }
}
```

**Special features:**
- Crates are package units
- Packages are distributed via Cargo/Crates.io
- Supports hierarchical package structure

**Further reading:**
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

**Special features:**
- Packages are the main organizational form
- Packages are distributed as JAR files
- Supports hierarchical package structure

**Further reading:**
- [Scala Documentation - Packages](https://docs.scala-lang.org/tour/packages.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Package is defined by directory structure
// Package.swift defines package
public func add(_ a: Int, _ b: Int) -> Int {
    return a + b
}
```

**Special features:**
- Packages are defined by directory structure
- Packages are distributed via Swift Package Manager
- Supports hierarchical package structure

**Further reading:**
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

**Special features:**
- Namespaces organize packages
- Packages are distributed as NuGet packages
- Supports hierarchical package structure

**Further reading:**
- [Microsoft VB.NET Documentation - Namespaces](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/program-structure/namespaces)

</TabItem>
<TabItem value="v" label="V">

```v
module math.utils

pub fn add(a int, b int) int {
    return a + b
}
```

**Special features:**
- Modules serve as packages
- Supports hierarchical package structure
- Package name matches the directory name

**Further reading:**
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

**Special features:**
- Packages are the main organizational form
- Packages are distributed via Wolfram Paclet Repository
- Supports hierarchical package structure

**Further reading:**
- [Wolfram Language Documentation - Packages](https://reference.wolfram.com/language/guide/Packages.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Package is defined by directory structure
// build.zig defines package
pub fn add(a: i32, b: i32) i32 {
    return a + b;
}
```

**Special features:**
- Packages are defined by directory structure
- Supports hierarchical package structure
- Package name matches the directory name

**Further reading:**
- [Zig Documentation - Build System](https://ziglang.org/documentation/0.11.0/#Zig-Build-System)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Packages are defined in elm.json
-- { "dependencies": { "elm/core": "1.0.5", "elm/html": "1.0.0" } }

-- Usage of packages
import Html exposing (Html, div, text)
import Json.Decode as Decode
```

**Special features:**
- Packages are managed via `elm.json`
- Official package registry: https://package.elm-lang.org
- Semantic versioning is enforced by the compiler
- All packages must be documented (compiler requirement)

**Further reading:**
- [Elm Package Registry](https://package.elm-lang.org/)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Framework Import
@import Foundation;
@import UIKit;
@import CoreData;

// Use framework classes
NSArray *items = @[@1, @2, @3];          // Foundation
UIView *view = [[UIView alloc] init];     // UIKit
```

**Special features:**
- Frameworks are the ObjC variant of packages/libraries
- Bundle headers, library, and resources
- System frameworks: Foundation, UIKit, CoreData, etc.
- Custom frameworks can be created

**Further reading:**
- [Apple Documentation - Framework Programming Guide](https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/BPFrameworks/Frameworks.html)

</TabItem>
<TabItem value="roc" label="Roc">

```roc
# Package definition in an app file
app "myapp"
    packages { pf: "https://github.com/roc-lang/basic-cli/releases/..." }
    imports [pf.Stdout]
    provides [main] to pf
```

**Special features:**
- Packages are referenced via URLs
- `packages` block in the app declaration
- Content-addressed dependencies

**Further reading:**
- [Roc Documentation](https://www.roc-lang.org/tutorial)

</TabItem>
</Tabs>


## 15.1.5. Visibility Rules

Visibility rules determine which parts of a module or package are accessible from outside. They control access to functions, types, and variables and enable encapsulation.

### Languages {#languages}

<Tabs availableTabs={['ada', 'carbon', 'clojure', 'common-lisp', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'elixir', 'elm', 'erlang', 'fortran', 'fsharp', 'go', 'groovy', 'haskell', 'idris', 'java', 'julia', 'koka', 'kotlin', 'lean4', 'lua', 'mercury', 'mojo', 'nim', 'object-pascal', 'objective-c', 'ocaml', 'odin', 'perl', 'php', 'prolog', 'purescript', 'python', 'racket', 'roc', 'ruby', 'rust', 'scala', 'swift', 'typescript', 'v', 'vbnet', 'wolfram-language', 'zig']} yellowTabs={['gleam', 'haxe', 'scheme']}>
<TabItem value="ada" label="Ada">

```ada
package Math_Utils is
    -- Public (exported)
    function Add(A, B : Integer) return Integer;
private
    -- Private (only visible within package)
    function Helper(X : Integer) return Integer;
end Math_Utils;
```

**Special features:**
- `private` section makes parts private
- Without `private`, declarations are public
- Package body is always private

**Further reading:**
- [Ada Documentation - Packages](https://learn.adacore.com/courses/intro-to-ada/chapters/packages.html)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
package MathUtils api;

// Public (via api modifier)
fn Add(a: i32, b: i32) -> i32 {
    return a + b
}

// Private (without api modifier)
fn Helper(x: i32) -> i32 {
    return x * 2
}
```

**Special features:**
- `api` modifier makes functions public
- Without `api`, functions are private
- Experimental syntax may still change

**Further reading:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
(ns math.utils)

;; Public (by default)
(defn add [a b]
  (+ a b))

;; Private (with ^:private meta)
(defn ^:private helper [x]
  (* x 2))
```

**Special features:**
- Functions are public by default
- `^:private` meta makes functions private
- Supports namespace privacy

**Further reading:**
- [Clojure Documentation - Privacy](https://clojure.org/reference/namespaces#_private_vars)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
(defpackage :math.utils
  (:use :cl)
  (:export :add))  ; Only :add is exported

(in-package :math.utils)

(defun add (a b)
  (+ a b))

(defun helper (x)  ; Private (not exported)
  (* x 2))
```

**Special features:**
- `:export` specifies public symbols
- Non-exported symbols are private
- Supports selective export

**Further reading:**
- [Common Lisp HyperSpec - Packages](http://www.lispworks.com/documentation/HyperSpec/Body/11_.htm)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
namespace Math {
    namespace Utils {
        // Public (by default)
        int add(int a, int b) {
            return a + b;
        }
        
        // Private (via anonymous namespace)
        namespace {
            int helper(int x) {
                return x * 2;
            }
        }
    }
}
```

**Special features:**
- Functions are public by default
- Anonymous namespace makes functions private
- `static` makes functions file-local

**Further reading:**
- [cppreference.com - Namespaces](https://en.cppreference.com/w/cpp/language/namespace)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
namespace Math.Utils
{
    public static class Calculator
    {
        // Public
        public static int Add(int a, int b)
        {
            return a + b;
        }
        
        // Private
        private static int Helper(int x)
        {
            return x * 2;
        }
        
        // Internal (only within assembly)
        internal static int InternalHelper(int x)
        {
            return x * 2;
        }
    }
}
```

**Special features:**
- `public`, `private`, `internal`, `protected`, `protected internal`
- Access is `internal` by default for classes
- Supports assembly privacy

**Further reading:**
- [Microsoft C# Documentation - Access Modifiers](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/access-modifiers)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
module MathUtils
  # Public
  def self.add(a : Int32, b : Int32) : Int32
    a + b
  end
  
  # Private
  private def self.helper(x : Int32) : Int32
    x * 2
  end
end
```

**Special features:**
- `private` makes methods private
- Methods are public by default
- Supports class privacy

**Further reading:**
- [Crystal Documentation - Visibility](https://crystal-lang.org/reference/1.11/syntax_and_semantics/visibility.html)

</TabItem>
<TabItem value="d" label="D">

```d
module math.utils;

// Public
public int add(int a, int b) {
    return a + b;
}

// Private
private int helper(int x) {
    return x * 2;
}

// Package-private (by default)
int packageHelper(int x) {
    return x * 2;
}
```

**Special features:**
- `public`, `private`, `package`, `protected`
- Access is `package` by default
- Supports package privacy

**Further reading:**
- [D Language Specification - Access Control](https://dlang.org/spec/attribute.html#visibility)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
library math.utils;

// Public (by default)
int add(int a, int b) {
    return a + b;
}

// Private (with _ prefix)
int _helper(int x) {
    return x * 2;
}
```

**Special features:**
- Functions are public by default
- `_` prefix makes functions private
- Supports library privacy

**Further reading:**
- [Dart Documentation - Libraries](https://dart.dev/guides/libraries/create-library-packages)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
defmodule Math.Utils do
  # Public
  def add(a, b) do
    a + b
  end
  
  # Private
  defp helper(x) do
    x * 2
  end
end
```

**Special features:**
- `def` makes functions public
- `defp` makes functions private
- Supports module privacy

**Further reading:**
- [Elixir Documentation - Functions](https://elixir-lang.org/getting-started/modules-and-functions.html#private-functions)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
-module(math_utils).
-export([add/2]).  % Only add/2 is exported

% Public (exported)
add(A, B) ->
    A + B.

% Private (not exported)
helper(X) ->
    X * 2.
```

**Special features:**
- `-export()` specifies public functions
- Non-exported functions are private
- Supports selective export

**Further reading:**
- [Erlang Documentation - Modules](https://www.erlang.org/doc/reference_manual/modules.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
module Math.Utils

// Public
let add a b = a + b

// Private
let private helper x = x * 2

// Internal (only within assembly)
let internal internalHelper x = x * 2
```

**Special features:**
- `public`, `private`, `internal`
- Functions are public by default
- Supports assembly privacy

**Further reading:**
- [Microsoft F# Documentation - Access Control](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/access-control)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
module math_utils
    implicit none
    public :: add  ! Public
    private :: helper  ! Private
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

**Special features:**
- `public` and `private` specify visibility
- Functions are public by default
- Supports module privacy

**Further reading:**
- [Fortran Wiki - Modules](https://fortranwiki.org/fortran/show/Modules)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// Visibility Rules
// File: src/math/utils.gleam

// Public (accessible from other modules)
pub fn add(a: Int, b: Int) -> Int {
  a + b
}

// Private (only within this module)
fn helper(x: Int) -> Int {
  x * 2
}

// Opaque Types: type is public, constructor is private
pub opaque type Counter {
  Counter(value: Int)
}
```

**Special features:**
- `pub` makes functions and types public
- Without `pub`, functions are module-private
- `pub opaque type` exports the type, but not the constructor
- No further visibility modifiers (no protected/internal)

**Further reading:**
- [Gleam Documentation - Modules](https://tour.gleam.run/basics/modules/)

</TabItem>
<TabItem value="go" label="Go">

```go
package math

package utils

// Public (uppercase)
func Add(a, b int) int {
    return a + b
}

// Private (lowercase)
func helper(x int) int {
    return x * 2
}
```

**Special features:**
- Uppercase = public
- Lowercase = private
- Supports package privacy

**Further reading:**
- [Go Documentation - Exported names](https://go.dev/ref/spec#Exported_identifiers)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
package math.utils

class Calculator {
    // Public
    public static int add(int a, int b) {
        return a + b
    }
    
    // Private
    private static int helper(int x) {
        return x * 2
    }
    
    // Package-private
    static int packageHelper(int x) {
        return x * 2
    }
}
```

**Special features:**
- `public`, `private`, `protected`, `package`
- Default access is `package`
- Supports package privacy

**Further reading:**
- [Groovy Documentation - Visibility](https://groovy-lang.org/objectorientation.html#_visibility)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
module Math.Utils (add) where  -- Only add is exported

-- Public (exported)
add :: Int -> Int -> Int
add a b = a + b

-- Private (not exported)
helper :: Int -> Int
helper x = x * 2
```

**Special features:**
- Export list specifies public functions
- Non-exported functions are private
- Supports selective export

**Further reading:**
- [Haskell Documentation - Modules](https://www.haskell.org/tutorial/modules.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
package math.utils;

class Calculator {
    // Public
    public static function add(a:Int, b:Int):Int {
        return a + b;
    }

    // Private (default without modifier)
    static function helper(x:Int):Int {
        return x * 2;
    }

    // Private (explicit)
    private static function internalHelper(x:Int):Int {
        return x * 2;
    }
}
```

**Special features:**
- `public`: Access from anywhere
- `private`: Only within the class (default)
- Haxe has NO `protected` or `internal` keyword
- `@:access` metadata for advanced access control

**Further reading:**
- [Haxe Documentation - Visibility](https://haxe.org/manual/class-field-visibility.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
module Math.Utils

-- Public
export
add : Int -> Int -> Int
add a b = a + b

-- Private (without export)
helper : Int -> Int
helper x = x * 2
```

**Special features:**
- `export` makes functions public
- Without `export`, functions are private
- Supports module privacy

**Further reading:**
- [Idris Documentation - Modules](https://idris2.readthedocs.io/en/latest/tutorial/modules.html)

</TabItem>
<TabItem value="java" label="Java">

```java
package math.utils;

public class Calculator {
    // Public
    public static int add(int a, int b) {
        return a + b;
    }
    
    // Private
    private static int helper(int x) {
        return x * 2;
    }
    
    // Package-private (default)
    static int packageHelper(int x) {
        return x * 2;
    }
    
    // Protected
    protected static int protectedHelper(int x) {
        return x * 2;
    }
}
```

**Special features:**
- `public`, `private`, `protected`, package-private (no modifier)
- Default access is package-private
- Supports package privacy

**Further reading:**
- [Oracle Java Documentation - Access Control](https://docs.oracle.com/javase/tutorial/java/javaOO/accesscontrol.html)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
module MathUtils

# Public (exported)
export add

function add(a::Int, b::Int)::Int
    return a + b
end

# Private (not exported)
function helper(x::Int)::Int
    return x * 2
end

end
```

**Special features:**
- `export` makes functions public
- Non-exported functions are private
- Supports selective export

**Further reading:**
- [Julia Documentation - Modules](https://docs.julialang.org/en/v1/manual/modules/)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
package math.utils

object Calculator {
    // Public
    fun add(a: Int, b: Int): Int {
        return a + b
    }
    
    // Private
    private fun helper(x: Int): Int {
        return x * 2
    }
    
    // Internal (only within module)
    internal fun internalHelper(x: Int): Int {
        return x * 2
    }
    
    // Protected
    protected fun protectedHelper(x: Int): Int {
        return x * 2
    }
}
```

**Special features:**
- `public`, `private`, `protected`, `internal`
- Default access is `public`
- Supports module privacy

**Further reading:**
- [Kotlin Documentation - Visibility Modifiers](https://kotlinlang.org/docs/visibility-modifiers.html)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
// Visibility Rules in Koka
module math/utils

// Public: with pub keyword
pub fun add(a : int, b : int) : int
  a + b

pub val pi = 3.14159

// Private: without pub (default)
fun helper(x : int) : int
  x * 2

// Public type with private constructors
pub type color
  Red
  Green
  Blue

// Abstract types: export pub without constructors
pub type abstract-token
```

**Special features:**
- `pub` for public visibility
- Without `pub`, definitions are module-private (default)
- Abstract types can be exported without exposing internal structure
- Simple two-level visibility system (public/private)

**Further reading:**
- [Koka Documentation - Modules](https://koka-lang.github.io/koka/doc/book.html#sec-modules)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
namespace MyLib

-- Public (default)
def add (a b : Nat) : Nat := a + b

-- Private: only visible within the module
private def helper (x : Nat) : Nat := x * 2

-- Protected: visible in child namespaces
protected def internalAdd (a b : Nat) : Nat := a + b

-- Section-local variables
section
  variable (n : Nat)
  def addN (x : Nat) : Nat := x + n
end

end MyLib
```

**Special features:**
- By default, all definitions are public.
- `private` restricts visibility to the current module.
- `protected` enables access in child namespaces.
- `section` provides local scopes for variables and definitions.

**Further reading:**
- [Lean 4 Documentation - Modules](https://lean-lang.org/lean4/doc/modules.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
local math_utils = {}

-- Public (in table)
function math_utils.add(a, b)
    return a + b
end

-- Private (local)
local function helper(x)
    return x * 2
end

return math_utils
```

**Special features:**
- `local` makes functions private
- Functions in table are public
- Supports module privacy by convention

**Further reading:**
- [Lua Documentation - Modules](https://www.lua.org/manual/5.4/manual.html#6.3)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
:- module math_utils.
:- interface.

% Public (in interface section)
:- func add(int, int) = int.

:- implementation.

% Private (in implementation section)
:- func helper(int) = int.

add(A, B) = A + B.
helper(X) = X * 2.
```

**Special features:**
- `:- interface.` section defines the public interface
- `:- implementation.` section contains private declarations and implementations
- Everything in the interface section is visible to other modules
- Types can be exported as opaque (only type name, no constructors)

**Further reading:**
- [Mercury Language Reference - Modules](https://www.mercurylang.org/information/doc-release/mercury_ref/Modules.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
module MathUtils:
    # Public
    fn add(a: Int, b: Int) -> Int:
        return a + b
    
    # Private
    fn _helper(x: Int) -> Int:
        return x * 2
```

**Special features:**
- Functions are public by default
- `_` prefix makes functions private
- Python-like convention

**Further reading:**
- [Mojo Documentation - Modules](https://docs.modular.com/mojo/manual/modules/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# File: math_utils.nim
proc add*(a, b: int): int =  # Public (exported)
  a + b

proc helper(x: int): int =   # Private (not exported)
  x * 2

type
  PublicType* = object        # Public
    field1*: int              # Public field
    field2: string            # Private field
```

**Special features:**
- `*` after the name = public (exported)
- No `*` = private (only visible in module)
- Applies to procedures, types, fields, variables
- No `protected` concept

**Further reading:**
- [Nim Documentation - Export Marker](https://nim-lang.org/docs/manual.html#modules-export-marker)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
unit Math.Utils;

interface

// Public
function Add(A, B: Integer): Integer;

implementation

function Add(A, B: Integer): Integer;
begin
    Result := A + B;
end;

// Private (only in implementation)
function Helper(X: Integer): Integer;
begin
    Result := X * 2;
end;

end.
```

**Special features:**
- `interface` section is public
- `implementation` section is private
- Supports unit privacy

**Further reading:**
- [Free Pascal Documentation - Units](https://www.freepascal.org/docs-html/ref/refse5.html)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// MathUtils.h (Public)
@interface MathUtils : NSObject
+ (int)add:(int)a with:(int)b;
@end

// MathUtils.m (Private)
#import "MathUtils.h"

@implementation MathUtils
+ (int)add:(int)a with:(int)b {
    return a + b;
}

// Private (not in .h)
+ (int)helper:(int)x {
    return x * 2;
}
@end
```

**Special features:**
- Header file defines public API
- Implementation file can contain private methods
- Supports class privacy

**Further reading:**
- [Apple Documentation - Encapsulation](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/EncapsulatingData/EncapsulatingData.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
module MathUtils : sig
  val add : int -> int -> int  (* Public *)
end = struct
  let add a b = a + b
  
  let helper x = x * 2  (* Private *)
end
```

**Special features:**
- Signature specifies public functions
- Not in signature = private
- Supports selective export

**Further reading:**
- [OCaml Documentation - Modules](https://ocaml.org/docs/modules)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
package math.utils

// Public
add :: proc(a: int, b: int) -> int {
    return a + b
}

// Private (with _ prefix)
_helper :: proc(x: int) -> int {
    return x * 2
}
```

**Special features:**
- Functions are public by default
- `_` prefix makes functions private
- Supports package privacy

**Further reading:**
- [Odin Documentation - Packages](https://odin-lang.org/docs/overview/#packages)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
package Math::Utils;

# Public (default)
sub add {
    my ($a, $b) = @_;
    return $a + $b;
}

# Private (by convention with _)
sub _helper {
    my ($x) = @_;
    return $x * 2;
}
```

**Special features:**
- Functions are public by default
- `_` prefix makes functions private (convention)
- Supports package privacy by convention

**Further reading:**
- [Perl Documentation - Packages](https://perldoc.perl.org/perlmod)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
namespace Math\Utils;

class Calculator {
    // Public
    public static function add(int $a, int $b): int {
        return $a + $b;
    }
    
    // Private
    private static function helper(int $x): int {
        return $x * 2;
    }
    
    // Protected
    protected static function protectedHelper(int $x): int {
        return $x * 2;
    }
}
```

**Special features:**
- `public`, `private`, `protected`
- Default access is `public`
- Supports class privacy

**Further reading:**
- [PHP Documentation - Visibility](https://www.php.net/manual/en/language.oop5.visibility.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
:- module(math_utils, [add/3]).  % Only add/3 is exported

% Public (exported)
add(A, B, Result) :-
    Result is A + B.

% Private (not exported)
helper(X, Result) :-
    Result is X * 2.
```

**Special features:**
- Export list in `module/2` determines visibility
- Non-exported predicates are module-local
- Access to private predicates via `Module:Predicate` possible (no strict enforcement)
- `module_transparent/1` enables meta-predicates that work in the caller's context

**Further reading:**
- [SWI-Prolog Documentation - Module Visibility](https://www.swi-prolog.org/pldoc/man?section=defmodule)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
module Math.Utils (add) where  -- Only add is exported

-- Public (exported)
add :: Int -> Int -> Int
add a b = a + b

-- Private (not exported)
helper :: Int -> Int
helper x = x * 2
```

**Special features:**
- Export list specifies public functions
- Non-exported functions are private
- Supports selective export

**Further reading:**
- [PureScript Documentation - Modules](https://book.purescript.org/chapter3.html)

</TabItem>
<TabItem value="python" label="Python">

```python
# Public (default)
def add(a: int, b: int) -> int:
    return a + b

# Private (by convention with _)
def _helper(x: int) -> int:
    return x * 2

# Name mangling (with __)
def __private_helper(x: int) -> int:
    return x * 2
```

**Special features:**
- Functions are public by default
- `_` prefix makes functions private (convention)
- `__` prefix causes name mangling

**Further reading:**
- [Python Documentation - Private Variables](https://docs.python.org/3/tutorial/classes.html#private-variables)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
#lang racket

(module math-utils racket
  (provide add)  ; Only add is exported
  
  ; Public (exported)
  (define (add a b)
    (+ a b))
  
  ; Private (not exported)
  (define (helper x)
    (* x 2)))
```

**Special features:**
- `provide` specifies public bindings
- Non-exported bindings are private
- Supports selective export

**Further reading:**
- [Racket Documentation - Modules](https://docs.racket-lang.org/guide/modules.html)

</TabItem>
<TabItem value="roc" label="Roc">

```roc
interface MathUtils
    exposes [add]
    imports []

# Public (listed in exposes)
add : I64, I64 -> I64
add = \a, b -> a + b

# Private (not in exposes)
helper : I64 -> I64
helper = \x -> x * 2
```

**Special features:**
- `exposes` specifies public functions
- Non-listed functions are private
- Simple visibility rule

**Further reading:**
- [Roc Documentation - Modules](https://www.roc-lang.org/tutorial)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
module MathUtils
  # Public
  def self.add(a, b)
    a + b
  end
  
  # Private
  private
  
  def self.helper(x)
    x * 2
  end
end
```

**Special features:**
- `public`, `private`, `protected`
- Methods are public by default
- Supports module privacy

**Further reading:**
- [Ruby Documentation - Visibility](https://docs.ruby-lang.org/en/3.2/syntax/modules_and_classes_rdoc.html#label-Visibility)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
mod math_utils {
    // Public
    pub fn add(a: i32, b: i32) -> i32 {
        a + b
    }
    
    // Private
    fn helper(x: i32) -> i32 {
        x * 2
    }
    
    // Public for parent module
    pub(crate) fn crate_helper(x: i32) -> i32 {
        x * 2
    }
}
```

**Special features:**
- `pub` makes functions public
- Without `pub`, functions are private
- Supports `pub(crate)`, `pub(super)`, etc.

**Further reading:**
- [Rust Documentation - Privacy](https://doc.rust-lang.org/book/ch07-03-paths-for-referring-to-an-item-in-the-module-tree.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
package math.utils

object Calculator {
    // Public
    def add(a: Int, b: Int): Int = {
        a + b
    }
    
    // Private
    private def helper(x: Int): Int = {
        x * 2
    }
    
    // Package-private
    private[utils] def packageHelper(x: Int): Int = {
        x * 2
    }
    
    // Protected
    protected def protectedHelper(x: Int): Int = {
        x * 2
    }
}
```

**Special features:**
- `public`, `private`, `protected`, package-private
- Default access is `public`
- Supports package privacy with `private[package]`

**Further reading:**
- [Scala Documentation - Access Modifiers](https://docs.scala-lang.org/tour/access-modifiers.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
(define-library (math utils)
  (export add)  ; Only add is exported
  (begin
    ;; Public (exported)
    (define (add a b)
      (+ a b))

    ;; Private (not exported)
    (define (helper x)
      (* x 2))))
```

**Special features:**
- Visibility is controlled via `export`
- Non-exported bindings are private (only visible within the library)
- No `public`/`private` keyword

**Further reading:**
- [R7RS Scheme - Libraries](https://small.r7rs.org/attachment/r7rs.pdf)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Public
public func add(_ a: Int, _ b: Int) -> Int {
    return a + b
}

// Private
private func helper(_ x: Int) -> Int {
    return x * 2
}

// Internal (only within module)
internal func internalHelper(_ x: Int) -> Int {
    return x * 2
}

// File-private
fileprivate func filePrivateHelper(_ x: Int) -> Int {
    return x * 2
}
```

**Special features:**
- `public`, `private`, `internal`, `fileprivate`
- Default access is `internal`
- Supports module privacy

**Further reading:**
- [Swift Documentation - Access Control](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/accesscontrol/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Public (default)
export function add(a: number, b: number): number {
    return a + b;
}

// Private (not exported)
function helper(x: number): number {
    return x * 2;
}

// Public with explicit export
export function publicAdd(a: number, b: number): number {
    return a + b;
}
```

**Special features:**
- `export` makes functions public
- Non-exported functions are private
- Supports selective export

**Further reading:**
- [TypeScript Documentation - Modules](https://www.typescriptlang.org/docs/handbook/modules.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
Namespace Math.Utils
    Public Module Calculator
        ' Public
        Public Function Add(a As Integer, b As Integer) As Integer
            Return a + b
        End Function
        
        ' Private
        Private Function Helper(x As Integer) As Integer
            Return x * 2
        End Function
        
        ' Internal (only within assembly)
        Friend Function InternalHelper(x As Integer) As Integer
            Return x * 2
        End Function
    End Module
End Namespace
```

**Special features:**
- `Public`, `Private`, `Friend`, `Protected`, `Protected Friend`
- Default access is `Public`
- Supports assembly privacy

**Further reading:**
- [Microsoft VB.NET Documentation - Access Levels](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/declared-elements/access-levels)

</TabItem>
<TabItem value="v" label="V">

```v
module math.utils

// Public
pub fn add(a int, b int) int {
    return a + b
}

// Private
fn helper(x int) int {
    return x * 2
}
```

**Special features:**
- `pub` makes functions public
- Without `pub`, functions are private
- Supports module privacy

**Further reading:**
- [V Documentation - Modules](https://github.com/vlang/v/blob/master/doc/docs.md#modules)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```wolfram
BeginPackage["Math`Utils`"]

Add::usage = "Add[a, b] adds two numbers."

Begin["`Private`"]
Helper[x_] := x * 2  (* Private *)
Add[a_, b_] := a + b + Helper[0]
End[]

EndPackage[]
```

**Special features:**
- `Begin["`Private`"]` makes functions private
- Functions outside `Private` are public
- Supports package privacy

**Further reading:**
- [Wolfram Language Documentation - Packages](https://reference.wolfram.com/language/guide/Packages.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Public
pub fn add(a: i32, b: i32) i32 {
    return a + b;
}

// Private
fn helper(x: i32) i32 {
    return x * 2;
}
```

**Special features:**
- `pub` makes functions public
- Without `pub`, functions are private
- Supports module privacy

**Further reading:**
- [Zig Documentation - Source Files](https://ziglang.org/documentation/0.11.0/#Source-Encoding)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Export everything
module MyModule exposing (..)

-- Export only specific functions
module MyModule exposing (publicFunc, PublicType)

-- Opaque Types: export type but not constructors
module Temperature exposing (Temperature, fromCelsius, toCelsius)

type Temperature = Celsius Float

fromCelsius : Float -> Temperature
fromCelsius = Celsius

toCelsius : Temperature -> Float
toCelsius (Celsius t) = t
```

**Special features:**
- `exposing (..)` exports everything
- `exposing (func1, func2)` exports only named values
- Opaque Types: export type without constructors for encapsulation
- No `private`/`public` keywords, only `exposing`

**Further reading:**
- [Elm Documentation - Modules](https://guide.elm-lang.org/webapps/modules.html)

</TabItem>
</Tabs>

