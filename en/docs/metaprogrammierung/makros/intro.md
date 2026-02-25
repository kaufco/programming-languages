---
slug: /metaprogrammierung/makros
title: 16.2. Macros
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 16.2. Macros

Macros and code generation at compile time.

## 16.2.1. Macro Systems

Enables transforming and generating code at compile time, before the program is executed. Macros extend the language with new syntax and functionality.

### Languages {#sprachen}

<Tabs availableTabs={['common-lisp', 'clojure', 'scheme', 'racket', 'rust', 'scala', 'crystal', 'lean4', 'nim', 'elixir', 'julia', 'haxe', 'd', 'prolog']}>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Defmacro for macro definition
(defmacro when (condition &body body)
  `(if ,condition
       (progn ,@body)))

;; Usage
(when (> 5 3)
  (print "Condition is true")
  (print "This will execute"))

;; Macro with quasiquote
(defmacro incf (var &optional (delta 1))
  `(setf ,var (+ ,var ,delta)))

(let ((x 5))
  (incf x)
  (print x))  ; 6
```

**Special features:**
- Powerful macro system via `defmacro`
- Quasiquote (`) for code generation
- Unquote (,) for variable substitution
- Splicing (,@) for list expansion

**Further reading:**
- [Common Lisp HyperSpec - defmacro](http://www.lispworks.com/documentation/HyperSpec/Body/m_defmac.htm)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; defmacro for macro definition
(defmacro unless [condition & body]
  `(if (not ~condition)
     (do ~@body)))

;; Usage
(unless (< 5 3)
  (println "Condition is false")
  (println "This will execute"))

;; Macro with syntax-quote and splicing
(defmacro with-logging [expr]
  `(do
     (println "Evaluating:" '~expr)
     (let [result# ~expr]
       (println "Result:" result#)
       result#)))

(with-logging (+ 1 2))
;; Evaluating: (+ 1 2)
;; Result: 3
```

**Special features:**
- Powerful macro system via `defmacro`
- Syntax-quote (`) for code generation
- Unquote (~) for variable substitution
- Splicing (~@) for list expansion
- Auto-gensym (`#`-suffix) for hygienic variables

**Further reading:**
- [Clojure Documentation - Macros](https://clojure.org/reference/macros)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; define-syntax for macro definition
(define-syntax when
  (syntax-rules ()
    ((when condition body ...)
     (if condition
         (begin body ...)))))

;; Usage
(when (> 5 3)
  (display "Condition is true")
  (newline))

;; Hygienic Macros
(define-syntax swap!
  (syntax-rules ()
    ((swap! a b)
     (let ((temp a))
       (set! a b)
       (set! b temp)))))
```

**Special features:**
- Hygienic Macros via `define-syntax`
- `syntax-rules` for pattern matching
- Automatic variable hygiene
- Less powerful than Common Lisp macros

**Further reading:**
- [Scheme Documentation - Syntax Rules](https://www.scheme.com/tspl4/syntax.html)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
;; define-syntax for macro definition
(define-syntax when
  (syntax-rules ()
    ((when condition body ...)
     (if condition
         (begin body ...)))))

;; Usage
(when (> 5 3)
  (display "Condition is true")
  (newline))

;; Syntax Objects for advanced macros
(define-syntax (my-macro stx)
  (syntax-case stx ()
    [(_ arg)
     #'(display arg)]))
```

**Special features:**
- Hygienic Macros via `define-syntax`
- `syntax-rules` and `syntax-case` for pattern matching
- Syntax Objects for advanced macros
- Automatic variable hygiene

**Further reading:**
- [Racket Documentation - Macros](https://docs.racket-lang.org/guide/macros.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Declarative Macros
macro_rules! vec {
    ( $( $x:expr ),* ) => {
        {
            let mut temp_vec = Vec::new();
            $(
                temp_vec.push($x);
            )*
            temp_vec
        }
    };
}

// Usage
let v = vec![1, 2, 3];

// Procedural Macros
use proc_macro::TokenStream;

#[proc_macro]
pub fn make_answer(_item: TokenStream) -> TokenStream {
    "fn answer() -> u32 { 42 }".parse().unwrap()
}
```

**Special features:**
- Declarative Macros via `macro_rules!`
- Procedural Macros via `proc_macro`
- Pattern matching for macro arguments
- Hygienic Macros

**Further reading:**
- [Rust Documentation - Macros](https://doc.rust-lang.org/book/ch19-06-macros.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
import scala.language.experimental.macros
import scala.reflect.macros.blackbox.Context

// Def Macro
def assert(cond: Boolean): Unit = macro assertImpl

def assertImpl(c: Context)(cond: c.Expr[Boolean]): c.Expr[Unit] = {
  import c.universe._
  val condStr = show(cond.tree)
  reify {
    if (!cond.value) {
      throw new AssertionError(s"assertion failed: $condStr")
    }
  }
}

// Usage
assert(5 > 3)
```

**Special features:**
- Def Macros via `macro` keyword
- Compile-time code generation
- AST manipulation via `c.universe`
- Less powerful than Lisp macros

**Further reading:**
- [Scala Documentation - Macros](https://docs.scala-lang.org/overviews/macros/overview.html)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Macro Definition
macro define_method(name, value)
  def {{name}}
    {{value}}
  end
end

# Usage
define_method :hello, "Hello, World!"

hello  # => "Hello, World!"

# Macro with AST manipulation
macro times(n, &block)
  {% for i in 0...n %}
    {{block.body}}
  {% end %}
end

times(3) do
  puts "Hello"
end
```

**Special features:**
- Macros via `macro` keyword
- AST manipulation at compile time
- Quasiquote syntax for code generation
- Very powerful macro system

**Further reading:**
- [Crystal Documentation - Macros](https://crystal-lang.org/reference/1.9/syntax_and_semantics/macros.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Macro Definition
macro myAssert(cond: untyped): untyped =
  quote do:
    if not `cond`:
      raise newException(AssertionError, "Assertion failed")

# Usage
myAssert(5 > 3)

# Template for simple code generation
template times(n: int, body: untyped): untyped =
  for i in 0..<n:
    body

times(3):
  echo "Hello"
```

**Special features:**
- Macros via `macro` keyword
- Templates for simple code generation
- AST manipulation via `quote`
- Hygienic Macros

**Further reading:**
- [Nim Documentation - Macros](https://nim-lang.org/docs/macros.html)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# defmacro for macro definition
defmodule MyMacros do
  defmacro unless(condition, do: block) do
    quote do
      if not unquote(condition) do
        unquote(block)
      end
    end
  end
end

# Usage
require MyMacros

MyMacros.unless false do
  IO.puts "This will execute"
end
```

**Special features:**
- Macros via `defmacro`
- `quote` for code generation
- `unquote` for variable substitution
- Hygienic Macros

**Further reading:**
- [Elixir Documentation - Macros](https://elixir-lang.org/getting-started/meta/macros.html)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Macro Definition
macro assert(condition)
    quote
        if !$(esc(condition))
            error("Assertion failed: ", $(string(condition)))
        end
    end
end

# Usage
@assert 5 > 3

# Macro with arguments
macro times(n, expr)
    quote
        for i in 1:$(esc(n))
            $(esc(expr))
        end
    end
end

@times 3 println("Hello")
```

**Special features:**
- Macros via `macro` keyword
- `quote` for code generation
- `esc` for variable hygiene
- Very powerful macro system

**Further reading:**
- [Julia Documentation - Macros](https://docs.julialang.org/en/v1/manual/metaprogramming/#Macros)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Macro definition with syntax and macro_rules
import Lean

-- Simple macro
syntax "assert! " term : command

macro_rules
  | `(assert! $cond) => `(
    if !$cond then
      panic! s!"Assertion failed: {$(Lean.quote (toString cond))}"
  )

-- Macro with syntax quotation
macro "repeat " n:num " times " body:term : term => do
  let mut result ← `($body)
  for _ in List.range (n.getNat - 1) do
    result ← `($body; $result)
  return result
```

**Special features:**
- Lean 4 has a powerful macro system based on `syntax` and `macro_rules`.
- Syntax quotation with `` `( ... ) `` creates and deconstructs syntax objects.
- Macros are executed at compile time and transform syntax to syntax.
- The metaprogramming framework is implemented in Lean 4 itself.

**Further reading:**
- [Lean 4 Documentation - Macros](https://lean-lang.org/lean4/doc/metaprogramming.html)
- [Lean 4 Metaprogramming Book](https://leanprover-community.github.io/lean4-metaprogramming-book/)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Macro Definition
macro function assert(condition:Expr):Expr {
    return macro {
        if (!$condition) {
            throw "Assertion failed: " + $v{condition.toString()};
        }
    };
}

// Usage
assert(5 > 3);

// Build Macro
@:build(Macro.build())
class MyClass {
    // Code is generated at compile time
}
```

**Special features:**
- Macros via `macro` keyword
- Build Macros for class generation
- Expression Macros for code generation
- AST manipulation via `Expr`

**Further reading:**
- [Haxe Documentation - Macros](https://haxe.org/manual/macro.html)

</TabItem>
<TabItem value="d" label="D">

```d
import std.stdio;

// Template for code generation
template times(int n) {
    static if (n > 0) {
        pragma(msg, "Iteration: " ~ n.stringof);
        mixin(times!(n-1));
    }
}

// Mixin for code inclusion
mixin template MyMixin() {
    void myMethod() {
        writeln("Mixed in");
    }
}

class MyClass {
    mixin MyMixin;
}
```

**Special features:**
- Templates for code generation
- Mixins for code inclusion
- Compile-time functions
- Less powerful than Lisp macros

**Further reading:**
- [D Language Documentation - Templates](https://dlang.org/spec/template.html)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% term_expansion: transform terms at load/compile time
% Macro: def_fact(Name, Value) → Name(Value)
term_expansion(def_fact(Name, Value), Clause) :-
    Clause =.. [Name, Value].

% goal_expansion: transform goals at compile time
goal_expansion(log(Msg),
               (write('LOG: '), write(Msg), nl)).

% Usage of term_expansion
def_fact(color, red).
def_fact(color, blue).
% Expanded to: color(red). color(blue).

?- color(red).   % true
?- color(blue).  % true

% Usage of goal_expansion
:- log('System gestartet').
% Output: LOG: System gestartet
```

**Special features:**
- `term_expansion/2` transforms terms at load/compile time
- `goal_expansion/2` transforms goals at compile time
- No explicit macro syntax — transformation via predicates
- Very powerful system, as arbitrary Prolog logic can be used in expansions

**Further reading:**
- [SWI-Prolog Documentation - term_expansion](https://www.swi-prolog.org/pldoc/man?predicate=term_expansion/2)

</TabItem>
</Tabs>


## 16.2.2. Preprocessor / C Preprocessor

Enables transforming code before compilation through text substitution, conditional compilation, and macro expansion.

### Languages {#sprachen}

<Tabs availableTabs={['c', 'cpp', 'fortran', 'objective-c', 'object-pascal']} yellowTabs={['csharp']} orangeTabs={['ada']}>
<TabItem value="c" label="C">

```c
// Requires: #include <stdio.h>

// Macro definition
#define MAX(a, b) ((a) > (b) ? (a) : (b))
#define PI 3.14159

// Conditional compilation
#define DEBUG 1

#if DEBUG
    #define LOG(msg) printf("DEBUG: %s\n", msg)
#else
    #define LOG(msg)
#endif

// Include Guards
#ifndef MY_HEADER_H
#define MY_HEADER_H
// Header content
#endif

int result = MAX(5, 3);
LOG("Result calculated");
// result contains the maximum
```

**Special features:**
- C Preprocessor for text substitution
- `#define` for macro definition
- `#if`, `#ifdef`, `#ifndef` for conditional compilation
- `#include` for header inclusion

**Further reading:**
- [C Preprocessor Documentation](https://gcc.gnu.org/onlinedocs/cpp/)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
#include <iostream>

// Macro definition
#define MAX(a, b) ((a) > (b) ? (a) : (b))
#define DEBUG 1

// Conditional compilation
#if DEBUG
    #define LOG(msg) std::cout << "DEBUG: " << msg << std::endl
#else
    #define LOG(msg)
#endif

// Include Guards
#ifndef MY_HEADER_H
#define MY_HEADER_H
// Header content
#endif

int result = MAX(5, 3);
LOG("Result calculated");
// result contains the maximum
```

**Special features:**
- C++ Preprocessor (identical to C)
- `#define` for macro definition
- `#if`, `#ifdef`, `#ifndef` for conditional compilation
- `#pragma once` as alternative to include guards

**Further reading:**
- [C++ Preprocessor Documentation](https://en.cppreference.com/w/cpp/preprocessor)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Requires: #import <Foundation/Foundation.h>

// Macro definition
#define MAX(a, b) ((a) > (b) ? (a) : (b))
#define DEBUG 1

// Conditional compilation
#if DEBUG
    #define LOG(msg) NSLog(@"DEBUG: %@", msg)
#else
    #define LOG(msg)
#endif

// Preprocessor directives
#ifdef __APPLE__
    #define PLATFORM "macOS"
#endif

int result = MAX(5, 3);
LOG(@"Result calculated");
// result contains the maximum
```

**Special features:**
- Objective-C Preprocessor (identical to C)
- `#define` for macro definition
- `#if`, `#ifdef`, `#ifndef` for conditional compilation
- `#import` for header inclusion

**Further reading:**
- [Apple Documentation - Preprocessor](https://developer.apple.com/library/archive/documentation/DeveloperTools/gcc-4.0.1/cpp/)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Preprocessor directives (with -cpp flag)
#define BUFFER_SIZE 1024
#define DEBUG 1

#ifdef DEBUG
#define LOG(msg) write(*,*) 'DEBUG: ', msg
#else
#define LOG(msg)
#endif

integer :: buffer(BUFFER_SIZE)
LOG('Buffer initialized')
! Conditional compilation depending on DEBUG flag
```

**Special features:**
- C Preprocessor can be enabled with `-cpp` compiler flag
- `#define` for macro definition and constants
- `#if`, `#ifdef`, `#ifndef` for conditional compilation
- Less common than in C/C++, as Fortran has its own PARAMETER constants

**Further reading:**
- [Fortran Preprocessor Documentation](https://gcc.gnu.org/onlinedocs/gfortran/Preprocessing-Options.html)

</TabItem>
<TabItem value="ada" label="Ada">

```ada
-- Ada does not support a preprocessor like C
-- Instead, generic units are used

generic
    type T is private;
    with function ">" (Left, Right : T) return Boolean is <>;
function Max (Left, Right : T) return T;

function Max (Left, Right : T) return T is
begin
    if Left > Right then
        return Left;
    else
        return Right;
    end if;
end Max;
```

**Special features:**
- No preprocessor like in C
- Generic units for code generation
- Conditional compilation via compiler flags
- Type safety at compile time

**Further reading:**
- [Ada Documentation - Generics](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-12.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Preprocessor directives
#define DEBUG
#define NET8_0

#if DEBUG
    Console.WriteLine("Debug mode");
#elif RELEASE
    Console.WriteLine("Release mode");
#else
    Console.WriteLine("Unknown mode");
#endif

// Warning and error
#warning "This function is deprecated"
// #error "Unsupported configuration"

// Region (code folding)
#region Helper methods
void Helper() { }
#endregion

// Pragma
#pragma warning disable CS0168  // Variable is never used
int unused;
#pragma warning restore CS0168
```

**Special features:**
- C# has limited preprocessor directives (no textual replacement like in C/C++)
- `#define` only defines symbols (no macros with values)
- `#if`, `#elif`, `#else`, `#endif` for conditional compilation
- `#pragma` for compiler control
- `#region`/`#endregion` for code folding in IDEs

**Further reading:**
- [Microsoft C# Documentation - Preprocessor Directives](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/preprocessor-directives)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Compiler directives as preprocessor
{$DEFINE DEBUG}

{$IFDEF DEBUG}
  WriteLn('Debug mode active');
{$ENDIF}

{$IFDEF MSWINDOWS}
  // Windows-specific code
{$ENDIF}
{$IFDEF LINUX}
  // Linux-specific code
{$ENDIF}

{$IFOPT R+}
  // Range Checking is enabled
{$ENDIF}
```

**Special features:**
- `{$DEFINE}`/`{$UNDEF}` for symbols
- `{$IFDEF}`/`{$IFNDEF}`/`{$ELSE}`/`{$ENDIF}` for conditional compilation
- `{$I filename}` for include files
- Predefined symbols: `MSWINDOWS`, `LINUX`, `FPC`, `DELPHI`

**Further reading:**
- [Free Pascal Documentation - Compiler Directives](https://www.freepascal.org/docs-html/ref/refch2.html)

</TabItem>
</Tabs>


## 16.2.3. Hygienic Macros

Macros that automatically ensure variable names do not cause naming conflicts by automatically generating unique names.

### Languages {#sprachen}

<Tabs availableTabs={['scheme', 'racket', 'rust', 'scala', 'elixir', 'julia', 'lean4', 'nim', 'crystal', 'common-lisp', 'clojure']}>
<TabItem value="scheme" label="Scheme">

```scheme
;; Hygienic Macro with syntax-rules
(define-syntax swap!
  (syntax-rules ()
    ((swap! a b)
     (let ((temp a))
       (set! a b)
       (set! b temp)))))

;; Automatic variable hygiene
(let ((temp 5))
  (swap! temp 10)
  temp)  ; temp remains unchanged, no naming conflicts
```

**Special features:**
- Hygienic Macros via `syntax-rules`
- Automatic variable hygiene
- No naming conflicts through automatic renaming
- Pattern matching for macro arguments

**Further reading:**
- [Scheme Documentation - Syntax Rules](https://www.scheme.com/tspl4/syntax.html)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
;; Hygienic Macro with syntax-rules
(define-syntax swap!
  (syntax-rules ()
    ((swap! a b)
     (let ((temp a))
       (set! a b)
       (set! b temp)))))

;; Automatic variable hygiene
(let ((temp 5))
  (swap! temp 10)
  temp)  ; temp remains unchanged, no naming conflicts

;; syntax-case for advanced control
(define-syntax (my-macro stx)
  (syntax-case stx ()
    [(_ x)
     (with-syntax ([y (datum->syntax stx 'temp)])
       #'(let ([y x]) y))]))
```

**Special features:**
- Hygienic Macros via `syntax-rules` and `syntax-case`
- Automatic variable hygiene
- `datum->syntax` for explicit syntax creation
- Very powerful macro system

**Further reading:**
- [Racket Documentation - Macros](https://docs.racket-lang.org/guide/macros.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Hygienic Macro
macro_rules! swap {
    ($a:expr, $b:expr) => {
        {
            let temp = $a;
            $a = $b;
            $b = temp;
        }
    };
}

// Automatic variable hygiene
let mut temp = 5;
let mut x = 10;
swap!(temp, x);
// temp remains unchanged, no naming conflicts
```

**Special features:**
- Hygienic Macros via `macro_rules!`
- Automatic variable hygiene
- Pattern matching for macro arguments
- No naming conflicts through automatic renaming

**Further reading:**
- [Rust Documentation - Macros](https://doc.rust-lang.org/book/ch19-06-macros.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
import scala.language.experimental.macros
import scala.reflect.macros.blackbox.Context

// Hygienic Macro
def assert(cond: Boolean): Unit = macro assertImpl

def assertImpl(c: Context)(cond: c.Expr[Boolean]): c.Expr[Unit] = {
  import c.universe._
  // Automatic variable hygiene
  reify {
    if (!cond.value) {
      throw new AssertionError("Assertion failed")
    }
  }
}
```

**Special features:**
- Hygienic Macros via `macro` keyword
- Automatic variable hygiene
- `reify` for code generation
- AST manipulation via `c.universe`

**Further reading:**
- [Scala Documentation - Macros](https://docs.scala-lang.org/overviews/macros/overview.html)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Hygienic Macro
defmodule MyMacros do
  defmacro swap(a, b) do
    quote do
      temp = unquote(a)
      unquote(a) = unquote(b)
      unquote(b) = temp
    end
  end
end

# Automatic variable hygiene
require MyMacros

temp = 5
x = 10
MyMacros.swap(temp, x)
# temp remains unchanged, no naming conflicts
```

**Special features:**
- Hygienic Macros via `defmacro`
- Automatic variable hygiene
- `quote` for code generation
- `unquote` for variable substitution

**Further reading:**
- [Elixir Documentation - Macros](https://elixir-lang.org/getting-started/meta/macros.html)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Hygienic Macro
macro swap(a, b)
    quote
        temp = $(esc(a))
        $(esc(a)) = $(esc(b))
        $(esc(b)) = temp
    end
end

# Automatic variable hygiene with esc
temp = 5
x = 10
@swap(temp, x)
# temp remains unchanged, no naming conflicts
```

**Special features:**
- Hygienic Macros via `macro` keyword
- `esc` for explicit variable hygiene
- Automatic variable hygiene for local variables
- Very powerful macro system

**Further reading:**
- [Julia Documentation - Macros](https://docs.julialang.org/en/v1/manual/metaprogramming/#Macros)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Lean 4 macros are hygienic by default
import Lean

-- Variables in syntax quotations are automatically hygienic
macro "myLet " x:ident " := " v:term " in " body:term : term =>
  `(let $x := $v; $body)

-- No naming conflicts: the x in the macro is a fresh symbol
def test : Nat :=
  let x := 10
  myLet y := 20 in x + y  -- x refers to the outer x
-- test = 30
```

**Special features:**
- Lean 4 macros are hygienic by default.
- Variables in syntax quotations automatically receive unique names.
- No naming conflicts between macro-internal and external variables.
- `mkIdent` can be used for explicitly non-hygienic variables.

**Further reading:**
- [Lean 4 Documentation - Macros](https://lean-lang.org/lean4/doc/metaprogramming.html)
- [Lean 4 Metaprogramming Book - Macros](https://leanprover-community.github.io/lean4-metaprogramming-book/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Hygienic Macro
macro swap(a, b: untyped): untyped =
  quote do:
    block:
      var temp = `a`
      `a` = `b`
      `b` = temp

# Automatic variable hygiene
var temp = 5
var x = 10
swap(temp, x)
# temp remains unchanged, no naming conflicts
```

**Special features:**
- Hygienic Macros via `macro` keyword
- Automatic variable hygiene
- `quote` for code generation
- Backticks for variable substitution

**Further reading:**
- [Nim Documentation - Macros](https://nim-lang.org/docs/macros.html)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Hygienic Macro
macro swap(a, b)
  temp = a
  {{a}} = {{b}}
  {{b}} = temp
end

# Automatic variable hygiene
temp = 5
x = 10
swap(temp, x)
# temp remains unchanged, no naming conflicts
```

**Special features:**
- Hygienic Macros via `macro` keyword
- Automatic variable hygiene
- Quasiquote syntax for code generation
- Very powerful macro system

**Further reading:**
- [Crystal Documentation - Macros](https://crystal-lang.org/reference/1.9/syntax_and_semantics/macros.html)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Common Lisp macros are not hygienic by default
;; Gensym for manual hygiene
(defmacro swap (a b)
  (let ((temp (gensym)))
    `(let ((,temp ,a))
       (setf ,a ,b)
       (setf ,b ,temp))))

;; Usage with Gensym
(let ((temp 5))
  (swap temp 10)
  temp)  ; temp remains unchanged through Gensym
```

**Special features:**
- Macros are not hygienic by default
- `gensym` for manual variable hygiene
- Explicit control over variable names
- Very powerful, but not automatically hygienic macro system

**Further reading:**
- [Common Lisp HyperSpec - gensym](http://www.lispworks.com/documentation/HyperSpec/Body/f_gensym.htm)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Clojure macros are not hygienic by default
;; Gensym for manual hygiene
(defmacro my-let [val & body]
  `(let [~'x ~val]  ; UNSAFE: x could collide
     ~@body))

;; Hygienic version with auto-gensym
(defmacro my-let-safe [val & body]
  `(let [x# ~val]   ; x# generates unique name
     ~@body))

;; Manual gensym usage
(defmacro do-twice [expr]
  (let [result (gensym "result")]
    `(let [~result ~expr]
       [~result ~result])))

(do-twice (+ 1 2))  ; [3 3]
```

**Special features:**
- Macros are not hygienic by default
- Auto-gensym (`#`-suffix) for simple hygiene
- `gensym` for manual variable hygiene
- Explicit control over variable names

**Further reading:**
- [Clojure Documentation - Macros](https://clojure.org/reference/macros)

</TabItem>
</Tabs>


## 16.2.4. Template Metaprogramming

Enables generating and transforming code at compile time by using templates that are instantiated at compile time.

### Languages {#sprachen}

<Tabs availableTabs={['cpp', 'd', 'rust', 'haxe', 'nim', 'crystal', 'zig']}>
<TabItem value="cpp" label="C++">

```cpp
// Requires: #include <iostream>

// Template for compile-time calculation
template<int N>
struct Factorial {
    static const int value = N * Factorial<N - 1>::value;
};

template<>
struct Factorial<0> {
    static const int value = 1;
};

// Template metaprogramming for type transformation
template<typename T>
struct RemovePointer {
    using type = T;
};

template<typename T>
struct RemovePointer<T*> {
    using type = T;
};

// Factorial<5>::value is 120 (calculated at compile time)
```

**Special features:**
- Template metaprogramming via templates
- Compile-time calculations via template specialization
- Type transformation at compile time
- Very powerful, but complex

**Further reading:**
- [C++ Documentation - Templates](https://en.cppreference.com/w/cpp/language/templates)

</TabItem>
<TabItem value="d" label="D">

```d
// Requires: import std.stdio;

// Template for compile-time calculation
template Factorial(int n) {
    static if (n == 0)
        enum Factorial = 1;
    else
        enum Factorial = n * Factorial!(n - 1);
}

// Template-Metaprogrammierung für Typ-Transformation
template RemovePointer(T) {
    static if (is(T U : U*))
        alias RemovePointer = U;
    else
        alias RemovePointer = T;
}

void main() {
    writeln(Factorial!5);  // 120 (calculated at compile time)
}
```

**Special features:**
- Template metaprogramming via templates
- Compile-time calculations via `static if`
- Type transformation at compile time
- Less complex than C++

**Further reading:**
- [D Language Documentation - Templates](https://dlang.org/spec/template.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Const Generics für Compile-Time-Berechnung
const fn factorial(n: u32) -> u32 {
    match n {
        0 | 1 => 1,
        _ => n * factorial(n - 1),
    }
}

// Verwendung zur Compile-Zeit
const FACT_5: u32 = factorial(5);

// Typ-Level-Programmierung über Traits
trait RemovePointer {
    type Output;
}

impl<T> RemovePointer for T {
    type Output = T;
}

impl<T> RemovePointer for *mut T {
    type Output = T;
}

fn main() {
    println!("{}", FACT_5);  // 120 (calculated at compile time)
}
```

**Special features:**
- Const Functions for compile-time calculations
- Const Generics for compile-time parameters
- Type-level programming via traits
- Less powerful than C++ templates

**Further reading:**
- [Rust Documentation - Const Functions](https://doc.rust-lang.org/reference/const_eval.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Build Macro for compile-time code generation
@:build(Macro.build())
class MyClass {
    // Code is generated at compile time
}

// Expression Macro for compile-time calculation
macro static function factorial(n:Expr):Expr {
    var value = switch (n.expr) {
        case EConst(CInt(i)): i;
        default: throw "Expected integer";
    };
    
    var result = 1;
    for (i in 2...value + 1) {
        result *= i;
    }
    
    return macro $v{result};
}

// Usage
var fact5 = factorial(5);  // 120 (calculated at compile time)
```

**Special features:**
- Build Macros for compile-time code generation
- Expression Macros for compile-time calculations
- AST manipulation at compile time
- Very powerful macro system

**Further reading:**
- [Haxe Documentation - Macros](https://haxe.org/manual/macro.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Template Metaprogramming
template repeat(n: int, body: untyped): untyped =
  for i in 0..<n:
    body

repeat(3):
  echo "Hello"

# Compile-time calculation via static
proc factorial(n: static int): int =
  when n <= 1: 1
  else: n * factorial(n - 1)

const fact5 = factorial(5)  # 120 (calculated at compile time)

# Templates for code generation
template getter(name: untyped, T: typedesc) =
  proc `get name`(obj: MyObj): T = obj.name
```

**Special features:**
- Templates for code generation (compile-time substitution)
- `static` parameters for compile-time values
- `when` for compile-time conditions
- Templates are hygienic and zero-cost

**Further reading:**
- [Nim Documentation - Templates](https://nim-lang.org/docs/manual.html#templates)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Compile-time calculation via macros
macro factorial(n)
  {% if n == 0 %}
    1
  {% else %}
    {{ n }} * factorial({{ n - 1 }})
  {% end %}
end

# Usage at compile time
fact5 = factorial(5)  # 120 (calculated at compile time)

# Type-level programming via generics
class RemovePointer(T)
  def self.remove_pointer(value : T) : T
    value
  end
end

puts fact5
```

**Special features:**
- Macros for compile-time calculations
- `{% %}` for compile-time code execution
- Generics for type-level programming
- Very powerful macro system

**Further reading:**
- [Crystal Documentation - Macros](https://crystal-lang.org/reference/1.9/syntax_and_semantics/macros.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Compile-time calculation via comptime
fn factorial(comptime n: u32) u32 {
    if (n == 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Usage at compile time
const fact5 = comptime factorial(5);  // 120 (calculated at compile time)

// Type-level programming via comptime
fn removePointer(comptime T: type) type {
    return T;
}

pub fn main() void {
    @import("std").debug.print("{}\n", .{fact5});
}
```

**Special features:**
- `comptime` for compile-time calculations
- Compile-time parameters via `comptime`
- Type-level programming via `comptime` types
- Very powerful compile-time system

**Further reading:**
- [Zig Documentation - Comptime](https://ziglang.org/documentation/0.11.0/#comptime)

</TabItem>
</Tabs>


## 16.2.5. Compile-Time Execution

Enables executing code at compile time to perform calculations, generate code, or make decisions before the program is compiled.

### Languages {#sprachen}

<Tabs availableTabs={['common-lisp', 'cpp', 'crystal', 'd', 'haxe', 'lean4', 'nim', 'prolog', 'rust', 'v', 'zig']}>
<TabItem value="zig" label="Zig">

```zig
// Compile-time function
fn factorial(comptime n: u32) u32 {
    if (n == 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Compile-time execution
const fact5 = comptime factorial(5);  // 120 (calculated at compile time)

// Compile-time string manipulation
fn reverse(comptime str: []const u8) []const u8 {
    comptime var result: [str.len]u8 = undefined;
    comptime var i: usize = 0;
    comptime while (i < str.len) : (i += 1) {
        result[i] = str[str.len - 1 - i];
    }
    return &result;
}

const reversed = comptime reverse("hello");  // "olleh" (calculated at compile time)

pub fn main() void {
    @import("std").debug.print("Factorial: {}\n", .{fact5});
    @import("std").debug.print("Reversed: {s}\n", .{reversed});
}
```

**Special features:**
- `comptime` for compile-time execution
- Compile-time functions can be used at runtime and compile time
- Compile-time string manipulation possible
- Very powerful compile-time system

**Further reading:**
- [Zig Documentation - Comptime](https://ziglang.org/documentation/0.11.0/#comptime)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Compile-time function
proc factorial(n: static int): int =
  when n == 0:
    1
  else:
    n * factorial(n - 1)

# Compile-time execution
const fact5 = factorial(5)  # 120 (calculated at compile time)

# Compile-time string manipulation
proc reverse(s: static string): string =
  result = ""
  for i in countdown(s.len - 1, 0):
    result.add(s[i])

const reversed = reverse("hello")  # "olleh" (calculated at compile time)

echo fact5
echo reversed
```

**Special features:**
- `static` parameters for compile-time values
- Compile-time functions via `static` parameters
- `when` for compile-time conditions
- Compile-time string manipulation possible

**Further reading:**
- [Nim Documentation - Static Parameters](https://nim-lang.org/docs/manual.html#templates-static-parameters)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Compile-time calculation via macros
macro factorial(n)
  {% if n == 0 %}
    1
  {% else %}
    {{ n }} * factorial({{ n - 1 }})
  {% end %}
end

# Compile-time execution
fact5 = factorial(5)  # 120 (calculated at compile time)

# Compile-time string manipulation
macro reverse(str)
  {% reversed = str.reverse %}
  {{ reversed }}
end

reversed = reverse("hello")  # "olleh" (calculated at compile time)

puts fact5
puts reversed
```

**Special features:**
- Macros for compile-time execution
- `{% %}` for compile-time code execution
- Compile-time string manipulation possible
- Very powerful macro system

**Further reading:**
- [Crystal Documentation - Macros](https://crystal-lang.org/reference/1.9/syntax_and_semantics/macros.html)

</TabItem>
<TabItem value="d" label="D">

```d
import std.stdio;

// Compile-time function
int factorial(int n) {
    if (n == 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Compile-time execution
enum fact5 = factorial(5);  // 120 (calculated at compile time)

// Compile-time string manipulation
string reverse(string s) {
    string result;
    for (int i = s.length - 1; i >= 0; i--) {
        result ~= s[i];
    }
    return result;
}

enum reversed = reverse("hello");  // "olleh" (calculated at compile time)

void main() {
    writeln(fact5);
    writeln(reversed);
}
```

**Special features:**
- `enum` for compile-time values
- Compile-time functions via `enum`
- Compile-time string manipulation possible
- CTFE (Compile-Time Function Execution)

**Further reading:**
- [D Language Documentation - CTFE](https://dlang.org/spec/function.html#interpretation)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Directives (:- Goal) are executed at load/compile time
:- write('Modul wird geladen...'), nl.

% Compile-time calculation
:- X is 2 ** 10,
   format("2^10 = ~w~n", [X]).
% Output when loading: 2^10 = 1024

% Generate dynamic facts at load time
:- forall(
       between(1, 5, N),
       (Sq is N * N, assertz(square(N, Sq)))
   ).

?- square(3, X).  % X = 9
?- square(5, X).  % X = 25

% term_expansion for compile-time transformation
term_expansion(compute_table(Max), Clauses) :-
    findall(
        cube(N, C),
        (between(1, Max, N), C is N * N * N),
        Clauses
    ).

compute_table(3).
?- cube(2, X).  % X = 8
```

**Special features:**
- `:- Goal.` directives are executed at load/compile time
- Arbitrary Prolog predicates can be called at load time
- `term_expansion/2` for compile-time code generation
- Prolog does not strictly distinguish between compile time and runtime

**Further reading:**
- [SWI-Prolog Documentation - Directives](https://www.swi-prolog.org/pldoc/man?section=directive)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Const function for compile-time calculation
const fn factorial(n: u32) -> u32 {
    match n {
        0 | 1 => 1,
        _ => n * factorial(n - 1),
    }
}

// Compile-time execution
const FACT_5: u32 = factorial(5);  // 120 (calculated at compile time)

// Compile-time string manipulation (limited)
const fn string_len(s: &str) -> usize {
    s.len()
}

const LEN: usize = string_len("hello");  // 5 (calculated at compile time)

fn main() {
    println!("Factorial: {}", FACT_5);
    println!("Length: {}", LEN);
}
```

**Special features:**
- `const fn` for compile-time functions
- Const Generics for compile-time parameters
- Compile-time string manipulation limited
- Less powerful than Zig or D

**Further reading:**
- [Rust Documentation - Const Functions](https://doc.rust-lang.org/reference/const_eval.html)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
#include <iostream>

// Constexpr function for compile-time calculation
constexpr int factorial(int n) {
    return (n == 0) ? 1 : n * factorial(n - 1);
}

// Compile-time execution
constexpr int fact5 = factorial(5);  // 120 (calculated at compile time)

// Template metaprogramming for compile-time calculation
template<int N>
struct Factorial {
    static constexpr int value = N * Factorial<N - 1>::value;
};

template<>
struct Factorial<0> {
    static constexpr int value = 1;
};

int main() {
    std::cout << fact5 << std::endl;  // 120
    std::cout << Factorial<5>::value << std::endl;  // 120
    return 0;
}
```

**Special features:**
- `constexpr` for compile-time functions
- Template metaprogramming for compile-time calculations
- Compile-time string manipulation limited
- Very powerful, but complex

**Further reading:**
- [C++ Documentation - constexpr](https://en.cppreference.com/w/cpp/language/constexpr)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Compile-time function via macros
macro static function factorial(n:Expr):Expr {
    var value = switch (n.expr) {
        case EConst(CInt(i)): i;
        default: throw "Expected integer";
    };
    
    var result = 1;
    for (i in 2...value + 1) {
        result *= i;
    }
    
    return macro $v{result};
}

// Compile-time execution
var fact5 = factorial(5);  // 120 (calculated at compile time)

// Build Macro for compile-time code generation
@:build(Macro.build())
class MyClass {
    // Code is generated at compile time
}
```

**Special features:**
- Macros for compile-time execution
- Build Macros for compile-time code generation
- AST manipulation at compile time
- Very powerful macro system

**Further reading:**
- [Haxe Documentation - Macros](https://haxe.org/manual/macro.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- #eval executes code at compile time
#eval 2 + 3  -- 5 (calculated at compile time)

-- #check checks types at compile time
#check Nat.add  -- Nat → Nat → Nat

-- Compile-time calculation in definitions
def factorial : Nat → Nat
  | 0     => 1
  | n + 1 => (n + 1) * factorial n

#eval factorial 10  -- 3628800 (at compile time)

-- Compile-time proof
example : factorial 5 = 120 := by native_decide
```

**Special features:**
- `#eval` executes arbitrary Lean expressions at compile time.
- `#check` checks types at compile time.
- Lean 4 can perform arbitrary calculations at compile time (Turing-complete).
- `native_decide` and `decide` can decide propositions at compile time.

**Further reading:**
- [Lean 4 Documentation - Metaprogramming](https://lean-lang.org/lean4/doc/metaprogramming.html)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; eval-when for compile-time execution
(eval-when (:compile-toplevel :load-toplevel :execute)
  (defvar *compile-time-constant* (+ 1 2 3)))

;; Reader macros for compile-time evaluation
(defvar x #.(+ 1 2 3))  ; Evaluated at read time

;; Compiler macros
(define-compiler-macro square (&whole form x)
  (if (numberp x)
      (* x x)      ; Compile-time calculation
      form))        ; Runtime calculation
```

**Special features:**
- `eval-when` controls when code is evaluated (Compile-Time, Load-Time, Execute-Time)
- `#.` reader macro for read-time evaluation
- Compiler macros for compile-time optimizations
- Macros themselves are expanded at compile time

**Further reading:**
- [Common Lisp HyperSpec - eval-when](http://www.lispworks.com/documentation/HyperSpec/Body/s_eval_w.htm)

</TabItem>
<TabItem value="v" label="V">

```v
// Compile-Time Execution
fn platform_info() string {
    $if windows {
        return 'Windows'
    } $else $if linux {
        return 'Linux'
    } $else $if macos {
        return 'macOS'
    } $else {
        return 'Unknown'
    }
}

// Compile-Time Reflection über Struct-Felder
struct User {
    name string
    age  int
}

fn print_fields() {
    $for field in User.fields {
        println('${field.name}: ${field.typ}')
    }
}
```

**Special features:**
- `$if` for compile-time conditions (OS, architecture)
- `$for` for compile-time iteration over struct fields
- `$embed_file()` for compile-time file embedding
- Code is evaluated at compile time and unused paths are removed

**Further reading:**
- [V Documentation - Compile-Time Reflection](https://github.com/vlang/v/blob/master/doc/docs.md#compile-time-reflection)

</TabItem>
</Tabs>


## 16.2.6. Derive / Auto-Derive

Derive mechanisms automatically generate implementations of traits, type classes, or interfaces for user-defined types. Instead of manually writing repetitive boilerplate code, the compiler can derive the implementation based on the structure of the type.

### Languages {#sprachen}

<Tabs availableTabs={['elixir', 'haskell', 'idris', 'lean4', 'purescript', 'rust', 'scala']} yellowTabs={['csharp', 'crystal', 'fsharp', 'java', 'kotlin', 'nim', 'ocaml', 'python', 'swift']} orangeTabs={['d']}>
<TabItem value="csharp" label="C#">

```csharp
// record generiert automatisch Equals, GetHashCode, ToString
record Point(int X, int Y);

var p1 = new Point(1, 2);
var p2 = new Point(1, 2);

Console.WriteLine(p1 == p2);       // true (auto-generated Equals)
Console.WriteLine(p1);             // "Point { X = 1, Y = 2 }" (auto-generated ToString)
Console.WriteLine(p1.GetHashCode()); // consistent HashCode

// record struct for value types (since C# 10)
record struct Color(byte R, byte G, byte B);

// With-expression for immutable updates
var p3 = p1 with { X = 5 }; // Point { X = 5, Y = 2 }
```

**Special features:**
- `record` automatically generates `Equals`, `GetHashCode`, `ToString`, and deconstructor (since C# 9)
- `record struct` for value types (since C# 10)
- `with`-expression for immutable copies with changes
- No general derive system — only for `record` types

**Further reading:**
- [Microsoft C# Documentation - Records](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/record)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Macro-based derive mechanisms
struct Point
  getter x : Int32
  getter y : Int32

  def initialize(@x, @y)
  end

  # Auto-generation via macros
  def_equals @x, @y        # generates ==
  def_hash @x, @y          # generates hash
  def_clone                 # generates clone
end

p1 = Point.new(1, 2)
p2 = Point.new(1, 2)
puts p1 == p2 # true (auto-generated)

# JSON serialization via annotation
require "json"

struct Color
  include JSON::Serializable
  @[JSON::Field]
  getter r : UInt8
  @[JSON::Field]
  getter g : UInt8
  @[JSON::Field]
  getter b : UInt8
end
```

**Special features:**
- `def_equals`, `def_hash`, `def_clone` macros for auto-generated methods
- `include JSON::Serializable` for auto-generated JSON serialization
- Macro-based — no special derive syntax
- Extensible through own macros

**Further reading:**
- [Crystal Documentation - Macros](https://crystal-lang.org/reference/syntax_and_semantics/macros/index.html)

</TabItem>
<TabItem value="d" label="D">

```d
// Mixin-based code generation
struct Point
{
    int x;
    int y;

    // Generate toString via mixin
    mixin template AutoToString()
    {
        string toString() const
        {
            import std.format;
            return format!"Point(%d, %d)"(x, y);
        }
    }
    mixin AutoToString;

    // Generate opEquals via mixin
    bool opEquals()(auto ref const typeof(this) rhs) const
    {
        return this.tupleof == rhs.tupleof;
    }

    // toHash via tupleof
    size_t toHash() const nothrow @safe
    {
        return hashOf(this.tupleof);
    }
}
```

**Special features:**
- No native derive system — mixins and templates for code generation
- `tupleof` allows generic access to all struct fields
- `mixin template` for reusable code generation
- String mixins (`mixin("code")`) for flexible metaprogramming
- Less ergonomic than dedicated derive systems

**Further reading:**
- [D Language Documentation - Mixins](https://dlang.org/spec/template-mixin.html)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# @derive für Protocol-Implementierungen
defmodule Point do
  @derive [Inspect]
  defstruct [:x, :y]
end

# Eigenes Protocol mit @derive
defprotocol Printable do
  def to_string(data)
end

defimpl Printable, for: Point do
  def to_string(point), do: "(#{point.x}, #{point.y})"
end

# @derive mit Jason für JSON-Serialisierung
defmodule Color do
  @derive {Jason.Encoder, only: [:r, :g, :b]}
  defstruct [:r, :g, :b]
end

p = %Point{x: 1, y: 2}
IO.inspect(p)  # %Point{x: 1, y: 2} (via @derive [Inspect])
```

**Special features:**
- `@derive` derives protocol implementations for structs
- Works with built-in protocols like `Inspect`
- Extensible for own protocols and libraries (e.g., Jason for JSON)
- Options like `only:` to control derived fields
- Protocol-based — not limited to traits or interfaces

**Further reading:**
- [Elixir Documentation - Protocols](https://elixir-lang.org/getting-started/protocols.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// F# generiert automatisch strukturelle Gleichheit und Vergleich
type Point = { X: int; Y: int }

let p1 = { X = 1; Y = 2 }
let p2 = { X = 1; Y = 2 }

printfn "%b" (p1 = p2)  // true (auto-generiert)
printfn "%s" (p1.ToString()) // "{ X = 1; Y = 2 }"

// Discriminated Unions ebenfalls auto-derived
type Shape =
    | Circle of radius: float
    | Rectangle of width: float * height: float

let s1 = Circle 5.0
let s2 = Circle 5.0
printfn "%b" (s1 = s2) // true

// Attribute zur Steuerung
[<CustomEquality; CustomComparison>]
type Custom = { Value: int }
    // Own Equality/Comparison must be implemented
```

**Special features:**
- Records and Discriminated Unions automatically receive structural equality and comparison
- `ToString`, `Equals`, `GetHashCode`, and `CompareTo` are auto-generated
- `[<StructuralEquality>]` and `[<StructuralComparison>]` are active by default
- `[<CustomEquality>]` / `[<NoEquality>]` for manual control
- No general derive system, but extensive automatic derivations

**Further reading:**
- [F# Documentation - Records](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/records)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- deriving for automatic type class implementations
data Point = Point { x :: Int, y :: Int }
    deriving (Show, Eq, Ord, Read)

p1 = Point 1 2
p2 = Point 1 2
print (p1 == p2)     -- True (derived Eq)
print (show p1)      -- "Point {x = 1, y = 2}" (derived Show)
print (p1 < Point 2 3) -- True (derived Ord)

-- DerivingStrategies for control (since GHC 8.2)
{-# LANGUAGE DerivingStrategies #-}
{-# LANGUAGE DeriveGeneric #-}

data Color = Color { r :: Int, g :: Int, b :: Int }
    deriving stock (Show, Eq)      -- Standard derivation
    deriving anyclass (ToJSON)     -- via type class
    deriving (Generic)             -- for generic programming

-- GeneralizedNewtypeDeriving
newtype Celsius = Celsius Double
    deriving newtype (Show, Eq, Num)
```

**Special features:**
- `deriving` automatically derives type class instances
- Standard-derivable: `Eq`, `Ord`, `Show`, `Read`, `Bounded`, `Enum`, `Ix`
- `DeriveGeneric` for generic derivation of arbitrary type classes
- `DerivingStrategies` (since GHC 8.2) to control derivation strategy
- `GeneralizedNewtypeDeriving` for newtypes
- `DerivingVia` (since GHC 8.6) for derivation via isomorphic types

**Further reading:**
- [GHC Documentation - Deriving](https://ghc.gitlab.haskell.org/ghc/doc/users_guide/exts/deriving.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- %runElab for automatic deriving via elaborator reflection
data Point = MkPoint Int Int

-- Automatic deriving via elaborator
%runElab derive "Point" [Show, Eq, Ord, DecEq]

p1 : Point
p1 = MkPoint 1 2

p2 : Point
p2 = MkPoint 1 2

-- Use derived instances
main : IO ()
main = do
    printLn (p1 == p2)  -- True
    printLn (show p1)   -- "MkPoint 1 2"
```

**Special features:**
- `%runElab derive` for automatic interface derivation via elaborator reflection
- Derivable: `Show`, `Eq`, `Ord`, `DecEq`, and more
- Elaborator reflection enables custom derive mechanisms
- Dependent types allow provably correct derivations

**Further reading:**
- [Idris 2 Documentation - Elaborator Reflection](https://idris2.readthedocs.io/en/latest/elaboratorReflection/elaborator-reflection.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- deriving automatically generates type class instances
structure Point where
  x : Int
  y : Int
deriving Repr, BEq, Hashable, Inhabited

-- Use automatically generated instances
def p1 : Point := { x := 1, y := 2 }
def p2 : Point := { x := 1, y := 2 }

#eval p1 == p2   -- true (via BEq)
#eval repr p1     -- "{ x := 1, y := 2 }" (via Repr)

-- For inductive types
inductive Color where
  | red | green | blue
deriving Repr, BEq, Hashable, Inhabited
```

**Special features:**
- `deriving` automatically generates type class instances for structures and inductive types.
- Derivable type classes: `Repr`, `BEq`, `Hashable`, `Inhabited`, `DecidableEq` and others.
- Custom deriving handlers can be registered.
- Similar to Haskell `deriving` or Rust `#[derive(...)]`.

**Further reading:**
- [Lean 4 Documentation - Structures](https://lean-lang.org/lean4/doc/structures.html)
- [Lean 4 Documentation - Deriving](https://lean-lang.org/lean4/doc/deriving.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// record automatically generates equals, hashCode, toString (since Java 16)
record Point(int x, int y) {}

var p1 = new Point(1, 2);
var p2 = new Point(1, 2);

System.out.println(p1.equals(p2)); // true (auto-generated)
System.out.println(p1);            // "Point[x=1, y=2]" (auto-generated)
System.out.println(p1.hashCode()); // consistent HashCode

// Accessor methods auto-generated
System.out.println(p1.x()); // 1
System.out.println(p1.y()); // 2

// Records are implicitly final and immutable
```

**Special features:**
- `record` automatically generates `equals`, `hashCode`, `toString`, accessor methods and constructor (since Java 16)
- Records are implicitly `final` and immutable
- Compact constructor syntax for validation
- No general derive system — only for `record` types
- Lombok (`@Data`, `@Value`) as a library-based alternative

**Further reading:**
- [Oracle Java Documentation - Records](https://docs.oracle.com/en/java/javase/17/language/records.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// data class automatically generates equals, hashCode, toString, copy
data class Point(val x: Int, val y: Int)

val p1 = Point(1, 2)
val p2 = Point(1, 2)

println(p1 == p2)     // true (auto-generated equals)
println(p1)           // "Point(x=1, y=2)" (auto-generated toString)
println(p1.hashCode()) // consistent HashCode

// copy for immutable updates
val p3 = p1.copy(x = 5) // Point(x=5, y=2)

// Destructuring via componentN
val (x, y) = p1
println("$x, $y") // "1, 2"
```

**Special features:**
- `data class` automatically generates `equals`, `hashCode`, `toString`, `copy` and `componentN`
- Based on properties declared in the primary constructor
- `copy()` with named arguments for immutable updates
- Destructuring declarations via auto-generated `componentN` functions
- No general derive system — only for `data class`

**Further reading:**
- [Kotlin Documentation - Data Classes](https://kotlinlang.org/docs/data-classes.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Macro-based derive mechanisms
type
  Point = object
    x, y: int

# Equality and Hash via compiler support
proc `==`(a, b: Point): bool =
  a.x == b.x and a.y == b.y

proc `$`(p: Point): string =
  "Point(" & $p.x & ", " & $p.y & ")"

# Macro for auto-generated methods
macro derive(T: typedesc, traits: varargs[untyped]): untyped =
  # Generates methods based on type fields
  result = newStmtList()
  for trait in traits:
    case trait.strVal
    of "Eq": result.add genEq(T)
    of "Show": result.add genShow(T)

# Usage
let p1 = Point(x: 1, y: 2)
let p2 = Point(x: 1, y: 2)
echo p1 == p2 # true
echo $p1      # "Point(1, 2)"
```

**Special features:**
- No built-in derive system — macros are used for code generation
- `==` operator and `$` conversion can be generated via macro
- `hashable` pragma for automatic hashing
- Extensible through custom derive macros via AST manipulation
- Template-based code generation as a lightweight alternative

**Further reading:**
- [Nim Documentation - Macros](https://nim-lang.org/docs/macros.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* ppx_deriving for automatic derivations *)
(* Required: opam install ppx_deriving *)

type point = { x : int; y : int }
[@@deriving show, eq, ord]

let p1 = { x = 1; y = 2 }
let p2 = { x = 1; y = 2 }

let () =
    Printf.printf "%b\n" (equal_point p1 p2); (* true *)
    Printf.printf "%s\n" (show_point p1)      (* "{ x = 1; y = 2 }" *)

(* Variant types also derivable *)
type shape =
    | Circle of float
    | Rectangle of float * float
[@@deriving show, eq]

(* ppx_yojson for JSON serialization *)
type color = { r : int; g : int; b : int }
[@@deriving yojson]
```

**Special features:**
- `[@@deriving ...]` via ppx preprocessor (not native in the language)
- `ppx_deriving` is the standard framework for derivations
- Derivable: `show`, `eq`, `ord`, `hash`, `make`, `enum` and more
- `ppx_yojson`, `ppx_sexp_conv` for serialization
- Extensible through custom ppx derivers

**Further reading:**
- [ppx_deriving Documentation](https://github.com/ocaml-ppx/ppx_deriving)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- derive for automatic type class instances
data Point = Point Int Int

derive instance eqPoint :: Eq Point
derive instance ordPoint :: Ord Point
derive instance showPoint :: Show Point (via Generic)

-- Generic Deriving
import Data.Generic.Rep (class Generic)
import Data.Generic.Rep.Show (genericShow)

derive instance genericPoint :: Generic Point _

instance showPoint :: Show Point where
    show = genericShow

-- Newtype Deriving
newtype Celsius = Celsius Number
derive newtype instance eqCelsius :: Eq Celsius
derive newtype instance showCelsius :: Show Celsius
```

**Special features:**
- `derive instance` for automatic type class derivation
- `derive newtype instance` for newtype derivation (delegates to the inner type)
- `Generic` deriving for more complex derivations via generic representation
- Derivable: `Eq`, `Ord`, `Show`, `Generic`, `Newtype`
- `genericShow`, `genericEq` etc. for generic implementations

**Further reading:**
- [PureScript Documentation - Type Class Deriving](https://github.com/purescript/documentation/blob/master/language/Type-Class-Deriving.md)

</TabItem>
<TabItem value="python" label="Python">

```python
from dataclasses import dataclass, field

# @dataclass generates __init__, __repr__, __eq__, __hash__
@dataclass
class Point:
    x: int
    y: int

p1 = Point(1, 2)
p2 = Point(1, 2)

print(p1 == p2)  # True (auto-generated __eq__)
print(p1)        # "Point(x=1, y=2)" (auto-generated __repr__)

# Optional features
@dataclass(frozen=True, order=True)
class Color:
    r: int
    g: int
    b: int

c1 = Color(255, 0, 0)
c2 = Color(0, 255, 0)
print(c1 < c2)  # True (auto-generated __lt__ via order=True)
# c1.r = 128     # FrozenInstanceError (frozen=True)
```

**Special features:**
- `@dataclass` automatically generates `__init__`, `__repr__`, `__eq__` (since Python 3.7)
- `order=True` additionally generates `__lt__`, `__le__`, `__gt__`, `__ge__`
- `frozen=True` for immutable instances (generates `__hash__`)
- `field()` for field-specific configuration (default values, factories)
- `attrs` library as a more powerful alternative

**Further reading:**
- [Python Documentation - dataclasses](https://docs.python.org/3/library/dataclasses.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// #[derive] for automatic trait implementations
#[derive(Debug, Clone, PartialEq, Eq, Hash)]
struct Point {
    x: i32,
    y: i32,
}

let p1 = Point { x: 1, y: 2 };
let p2 = Point { x: 1, y: 2 };

println!("{:?}", p1);           // "Point { x: 1, y: 2 }" (Debug)
println!("{}", p1 == p2);       // true (PartialEq)
let p3 = p1.clone();            // Clone

// Derive for enums
#[derive(Debug, Clone, PartialEq)]
enum Shape {
    Circle(f64),
    Rectangle(f64, f64),
}

// Derive for serialization (via serde)
// Required: serde = { version = "1", features = ["derive"] }
#[derive(Serialize, Deserialize, Debug)]
struct Color {
    r: u8,
    g: u8,
    b: u8,
}
```

**Special features:**
- `#[derive(...)]` automatically generates trait implementations
- Standard derivable: `Debug`, `Clone`, `Copy`, `PartialEq`, `Eq`, `Hash`, `PartialOrd`, `Ord`, `Default`
- Procedural macros enable custom derive macros (e.g. `serde::Serialize`)
- Works for structs and enums
- Derive macros generate code at compile time via token stream transformation

**Further reading:**
- [Rust Book - Derivable Traits](https://doc.rust-lang.org/book/appendix-03-derivable-traits.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Case Classes automatically generate apply, unapply, equals, hashCode, toString
case class Point(x: Int, y: Int)

val p1 = Point(1, 2)
val p2 = Point(1, 2)

println(p1 == p2) // true (auto-generated equals)
println(p1)       // "Point(1,2)" (auto-generated toString)

// copy for immutable updates
val p3 = p1.copy(x = 5) // Point(5, 2)

// Pattern Matching via auto-generated unapply
p1 match {
    case Point(x, y) => println(s"x=$x, y=$y")
}

// derives clause (since Scala 3)
case class Color(r: Int, g: Int, b: Int) derives CanEqual

// Enum with derives (since Scala 3)
enum Shape derives CanEqual:
    case Circle(radius: Double)
    case Rectangle(width: Double, height: Double)
```

**Special features:**
- `case class` generates `apply`, `unapply`, `equals`, `hashCode`, `toString`, `copy`, `productIterator`
- `derives` clause (since Scala 3) for explicit type class derivation
- `case class` has been available since Scala 1.0
- `derives` supports `CanEqual`, `Ordering`, `Show` and custom type classes
- Companion object with `apply`/`unapply` is automatically created

**Further reading:**
- [Scala 3 Documentation - Derivation](https://docs.scala-lang.org/scala3/reference/contextual/derivation.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Automatic protocol conformance
struct Point: Equatable, Hashable, CustomStringConvertible {
    let x: Int
    let y: Int

    // Equatable and Hashable are automatically synthesized
    // when all stored properties are conformant

    var description: String {
        "Point(x: \(x), y: \(y))"
    }
}

let p1 = Point(x: 1, y: 2)
let p2 = Point(x: 1, y: 2)

print(p1 == p2) // true (auto-synthesized)

// Codable for automatic serialization
struct Color: Codable, Equatable {
    let r: Int
    let g: Int
    let b: Int
}

// JSON serialization without manual code
let encoder = JSONEncoder()
let data = try encoder.encode(Color(r: 255, g: 0, b: 0))
```

**Special features:**
- Swift automatically synthesizes `Equatable`, `Hashable` and `Codable` for structs and enums
- Requirement: All stored properties must conform to the protocol
- `Codable` (`Encodable & Decodable`) for JSON/Plist serialization
- `CaseIterable` for enums (generates `allCases`)
- No general derive system, but compiler synthesis for specific protocols

**Further reading:**
- [Swift Documentation - Protocols](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/protocols/)

</TabItem>
</Tabs>

