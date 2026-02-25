---
slug: /metaprogrammierung/makros
title: 16.2. Makros
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 16.2. Makros

Makros und Code-Generierung zur Compile-Zeit.

## 16.2.1. Macro Systems

Ermöglicht es, Code zur Compile-Zeit zu transformieren und zu generieren, bevor das Programm ausgeführt wird. Makros erweitern die Sprache um neue Syntax und Funktionalität.

### Sprachen {#sprachen}

<Tabs availableTabs={['common-lisp', 'clojure', 'scheme', 'racket', 'rust', 'scala', 'crystal', 'lean4', 'nim', 'elixir', 'julia', 'haxe', 'd', 'prolog']}>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Defmacro für Makro-Definition
(defmacro when (condition &body body)
  `(if ,condition
       (progn ,@body)))

;; Verwendung
(when (> 5 3)
  (print "Condition is true")
  (print "This will execute"))

;; Makro mit Quasiquote
(defmacro incf (var &optional (delta 1))
  `(setf ,var (+ ,var ,delta)))

(let ((x 5))
  (incf x)
  (print x))  ; 6
```

**Besonderheiten:**
- Mächtiges Makro-System über `defmacro`
- Quasiquote (`) für Code-Generierung
- Unquote (,) für Variablen-Einsetzung
- Splicing (,@) für Listen-Auflösung

**Weiterführende Links:**
- [Common Lisp HyperSpec - defmacro](http://www.lispworks.com/documentation/HyperSpec/Body/m_defmac.htm)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; defmacro für Makro-Definition
(defmacro unless [condition & body]
  `(if (not ~condition)
     (do ~@body)))

;; Verwendung
(unless (< 5 3)
  (println "Condition is false")
  (println "This will execute"))

;; Makro mit Syntax-Quote und Splicing
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

**Besonderheiten:**
- Mächtiges Makro-System über `defmacro`
- Syntax-Quote (`) für Code-Generierung
- Unquote (~) für Variablen-Einsetzung
- Splicing (~@) für Listen-Auflösung
- Auto-Gensym (`#`-Suffix) für hygienische Variablen

**Weiterführende Links:**
- [Clojure Documentation - Macros](https://clojure.org/reference/macros)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; define-syntax für Makro-Definition
(define-syntax when
  (syntax-rules ()
    ((when condition body ...)
     (if condition
         (begin body ...)))))

;; Verwendung
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

**Besonderheiten:**
- Hygienic Macros über `define-syntax`
- `syntax-rules` für Pattern-Matching
- Automatische Variablen-Hygiene
- Weniger mächtig als Common Lisp Makros

**Weiterführende Links:**
- [Scheme Documentation - Syntax Rules](https://www.scheme.com/tspl4/syntax.html)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
;; define-syntax für Makro-Definition
(define-syntax when
  (syntax-rules ()
    ((when condition body ...)
     (if condition
         (begin body ...)))))

;; Verwendung
(when (> 5 3)
  (display "Condition is true")
  (newline))

;; Syntax Objects für erweiterte Makros
(define-syntax (my-macro stx)
  (syntax-case stx ()
    [(_ arg)
     #'(display arg)]))
```

**Besonderheiten:**
- Hygienic Macros über `define-syntax`
- `syntax-rules` und `syntax-case` für Pattern-Matching
- Syntax Objects für erweiterte Makros
- Automatische Variablen-Hygiene

**Weiterführende Links:**
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

// Verwendung
let v = vec![1, 2, 3];

// Procedural Macros
use proc_macro::TokenStream;

#[proc_macro]
pub fn make_answer(_item: TokenStream) -> TokenStream {
    "fn answer() -> u32 { 42 }".parse().unwrap()
}
```

**Besonderheiten:**
- Declarative Macros über `macro_rules!`
- Procedural Macros über `proc_macro`
- Pattern-Matching für Makro-Argumente
- Hygienic Macros

**Weiterführende Links:**
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

// Verwendung
assert(5 > 3)
```

**Besonderheiten:**
- Def Macros über `macro` Keyword
- Compile-Time-Code-Generierung
- AST-Manipulation über `c.universe`
- Weniger mächtig als Lisp-Makros

**Weiterführende Links:**
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

# Verwendung
define_method :hello, "Hello, World!"

hello  # => "Hello, World!"

# Macro mit AST-Manipulation
macro times(n, &block)
  {% for i in 0...n %}
    {{block.body}}
  {% end %}
end

times(3) do
  puts "Hello"
end
```

**Besonderheiten:**
- Makros über `macro` Keyword
- AST-Manipulation zur Compile-Zeit
- Quasiquote-Syntax für Code-Generierung
- Sehr mächtiges Makro-System

**Weiterführende Links:**
- [Crystal Documentation - Macros](https://crystal-lang.org/reference/1.9/syntax_and_semantics/macros.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Macro Definition
macro myAssert(cond: untyped): untyped =
  quote do:
    if not `cond`:
      raise newException(AssertionError, "Assertion failed")

# Verwendung
myAssert(5 > 3)

# Template für einfache Code-Generierung
template times(n: int, body: untyped): untyped =
  for i in 0..<n:
    body

times(3):
  echo "Hello"
```

**Besonderheiten:**
- Makros über `macro` Keyword
- Templates für einfache Code-Generierung
- AST-Manipulation über `quote`
- Hygienic Macros

**Weiterführende Links:**
- [Nim Documentation - Macros](https://nim-lang.org/docs/macros.html)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# defmacro für Makro-Definition
defmodule MyMacros do
  defmacro unless(condition, do: block) do
    quote do
      if not unquote(condition) do
        unquote(block)
      end
    end
  end
end

# Verwendung
require MyMacros

MyMacros.unless false do
  IO.puts "This will execute"
end
```

**Besonderheiten:**
- Makros über `defmacro`
- `quote` für Code-Generierung
- `unquote` für Variablen-Einsetzung
- Hygienic Macros

**Weiterführende Links:**
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

# Verwendung
@assert 5 > 3

# Macro mit Argumenten
macro times(n, expr)
    quote
        for i in 1:$(esc(n))
            $(esc(expr))
        end
    end
end

@times 3 println("Hello")
```

**Besonderheiten:**
- Makros über `macro` Keyword
- `quote` für Code-Generierung
- `esc` für Variablen-Hygiene
- Sehr mächtiges Makro-System

**Weiterführende Links:**
- [Julia Documentation - Macros](https://docs.julialang.org/en/v1/manual/metaprogramming/#Macros)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Macro-Definition mit syntax und macro_rules
import Lean

-- Einfaches Macro
syntax "assert! " term : command

macro_rules
  | `(assert! $cond) => `(
    if !$cond then
      panic! s!"Assertion failed: {$(Lean.quote (toString cond))}"
  )

-- Macro mit Syntax-Quotation
macro "repeat " n:num " times " body:term : term => do
  let mut result ← `($body)
  for _ in List.range (n.getNat - 1) do
    result ← `($body; $result)
  return result
```

**Besonderheiten:**
- Lean 4 hat ein mächtiges Makro-System basierend auf `syntax` und `macro_rules`.
- Syntax-Quotation mit `` `( ... ) `` erzeugt und dekonstruiert Syntax-Objekte.
- Makros werden zur Compile-Zeit ausgeführt und transformieren Syntax zu Syntax.
- Das Metaprogrammierungs-Framework ist in Lean 4 selbst implementiert.

**Weiterführende Links:**
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

// Verwendung
assert(5 > 3);

// Build Macro
@:build(Macro.build())
class MyClass {
    // Code wird zur Compile-Zeit generiert
}
```

**Besonderheiten:**
- Makros über `macro` Keyword
- Build Macros für Klassen-Generierung
- Expression Macros für Code-Generierung
- AST-Manipulation über `Expr`

**Weiterführende Links:**
- [Haxe Documentation - Macros](https://haxe.org/manual/macro.html)

</TabItem>
<TabItem value="d" label="D">

```d
import std.stdio;

// Template für Code-Generierung
template times(int n) {
    static if (n > 0) {
        pragma(msg, "Iteration: " ~ n.stringof);
        mixin(times!(n-1));
    }
}

// Mixin für Code-Einbindung
mixin template MyMixin() {
    void myMethod() {
        writeln("Mixed in");
    }
}

class MyClass {
    mixin MyMixin;
}
```

**Besonderheiten:**
- Templates für Code-Generierung
- Mixins für Code-Einbindung
- Compile-Time-Funktionen
- Weniger mächtig als Lisp-Makros

**Weiterführende Links:**
- [D Language Documentation - Templates](https://dlang.org/spec/template.html)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% term_expansion: Terme zur Lade-/Compile-Zeit transformieren
% Makro: def_fact(Name, Value) → Name(Value)
term_expansion(def_fact(Name, Value), Clause) :-
    Clause =.. [Name, Value].

% goal_expansion: Ziele zur Compile-Zeit transformieren
goal_expansion(log(Msg),
               (write('LOG: '), write(Msg), nl)).

% Verwendung von term_expansion
def_fact(color, red).
def_fact(color, blue).
% Wird expandiert zu: color(red). color(blue).

?- color(red).   % true
?- color(blue).  % true

% Verwendung von goal_expansion
:- log('System gestartet').
% Ausgabe: LOG: System gestartet
```

**Besonderheiten:**
- `term_expansion/2` transformiert Terme zur Lade-/Compile-Zeit
- `goal_expansion/2` transformiert Ziele zur Compile-Zeit
- Keine explizite Makro-Syntax — Transformation über Prädikate
- Sehr mächtiges System, da beliebige Prolog-Logik in Expansionen verwendet werden kann

**Weiterführende Links:**
- [SWI-Prolog Documentation - term_expansion](https://www.swi-prolog.org/pldoc/man?predicate=term_expansion/2)

</TabItem>
</Tabs>


## 16.2.2. Preprocessor / C Preprocessor

Ermöglicht es, Code vor der Compilierung zu transformieren, durch Textersetzung, bedingte Kompilierung und Makro-Expansion.

### Sprachen {#sprachen}

<Tabs availableTabs={['c', 'cpp', 'fortran', 'objective-c', 'object-pascal']} yellowTabs={['csharp']} orangeTabs={['ada']}>
<TabItem value="c" label="C">

```c
// Benötigt: #include <stdio.h>

// Makro-Definition
#define MAX(a, b) ((a) > (b) ? (a) : (b))
#define PI 3.14159

// Bedingte Kompilierung
#define DEBUG 1

#if DEBUG
    #define LOG(msg) printf("DEBUG: %s\n", msg)
#else
    #define LOG(msg)
#endif

// Include Guards
#ifndef MY_HEADER_H
#define MY_HEADER_H
// Header-Inhalt
#endif

int result = MAX(5, 3);
LOG("Result calculated");
// result enthält das Maximum
```

**Besonderheiten:**
- C Preprocessor für Textersetzung
- `#define` für Makro-Definition
- `#if`, `#ifdef`, `#ifndef` für bedingte Kompilierung
- `#include` für Header-Einbindung

**Weiterführende Links:**
- [C Preprocessor Documentation](https://gcc.gnu.org/onlinedocs/cpp/)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
#include <iostream>

// Makro-Definition
#define MAX(a, b) ((a) > (b) ? (a) : (b))
#define DEBUG 1

// Bedingte Kompilierung
#if DEBUG
    #define LOG(msg) std::cout << "DEBUG: " << msg << std::endl
#else
    #define LOG(msg)
#endif

// Include Guards
#ifndef MY_HEADER_H
#define MY_HEADER_H
// Header-Inhalt
#endif

int result = MAX(5, 3);
LOG("Result calculated");
// result enthält das Maximum
```

**Besonderheiten:**
- C++ Preprocessor (identisch mit C)
- `#define` für Makro-Definition
- `#if`, `#ifdef`, `#ifndef` für bedingte Kompilierung
- `#pragma once` als Alternative zu Include Guards

**Weiterführende Links:**
- [C++ Preprocessor Documentation](https://en.cppreference.com/w/cpp/preprocessor)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Benötigt: #import <Foundation/Foundation.h>

// Makro-Definition
#define MAX(a, b) ((a) > (b) ? (a) : (b))
#define DEBUG 1

// Bedingte Kompilierung
#if DEBUG
    #define LOG(msg) NSLog(@"DEBUG: %@", msg)
#else
    #define LOG(msg)
#endif

// Preprocessor-Direktiven
#ifdef __APPLE__
    #define PLATFORM "macOS"
#endif

int result = MAX(5, 3);
LOG(@"Result calculated");
// result enthält das Maximum
```

**Besonderheiten:**
- Objective-C Preprocessor (identisch mit C)
- `#define` für Makro-Definition
- `#if`, `#ifdef`, `#ifndef` für bedingte Kompilierung
- `#import` für Header-Einbindung

**Weiterführende Links:**
- [Apple Documentation - Preprocessor](https://developer.apple.com/library/archive/documentation/DeveloperTools/gcc-4.0.1/cpp/)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Preprocessor-Direktiven (mit -cpp Flag)
#define BUFFER_SIZE 1024
#define DEBUG 1

#ifdef DEBUG
#define LOG(msg) write(*,*) 'DEBUG: ', msg
#else
#define LOG(msg)
#endif

integer :: buffer(BUFFER_SIZE)
LOG('Buffer initialisiert')
! Bedingte Kompilierung je nach DEBUG-Flag
```

**Besonderheiten:**
- C-Preprocessor mit `-cpp` Compiler-Flag aktivierbar
- `#define` für Makro-Definition und Konstanten
- `#if`, `#ifdef`, `#ifndef` für bedingte Kompilierung
- Weniger verbreitet als in C/C++, da Fortran eigene PARAMETER-Konstanten hat

**Weiterführende Links:**
- [Fortran Preprocessor Documentation](https://gcc.gnu.org/onlinedocs/gfortran/Preprocessing-Options.html)

</TabItem>
<TabItem value="ada" label="Ada">

```ada
-- Ada unterstützt keinen Preprocessor wie C
-- Stattdessen werden generische Einheiten verwendet

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

**Besonderheiten:**
- Kein Preprocessor wie in C
- Generische Einheiten für Code-Generierung
- Bedingte Kompilierung über Compiler-Flags
- Typsicherheit zur Compile-Zeit

**Weiterführende Links:**
- [Ada Documentation - Generics](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-12.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Preprocessor-Direktiven
#define DEBUG
#define NET8_0

#if DEBUG
    Console.WriteLine("Debug-Modus");
#elif RELEASE
    Console.WriteLine("Release-Modus");
#else
    Console.WriteLine("Unbekannter Modus");
#endif

// Warnung und Fehler
#warning "Diese Funktion ist veraltet"
// #error "Nicht unterstützte Konfiguration"

// Region (Code-Faltung)
#region Hilfsmethoden
void Helper() { }
#endregion

// Pragma
#pragma warning disable CS0168  // Variable wird nie verwendet
int unused;
#pragma warning restore CS0168
```

**Besonderheiten:**
- C# hat eingeschränkte Preprocessor-Direktiven (kein textueller Ersatz wie in C/C++)
- `#define` definiert nur Symbole (keine Makros mit Werten)
- `#if`, `#elif`, `#else`, `#endif` für bedingte Kompilierung
- `#pragma` für Compiler-Steuerung
- `#region`/`#endregion` für Code-Faltung in IDEs

**Weiterführende Links:**
- [Microsoft C# Documentation - Preprocessor Directives](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/preprocessor-directives)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Compiler-Direktiven als Preprocessor
{$DEFINE DEBUG}

{$IFDEF DEBUG}
  WriteLn('Debug-Modus aktiv');
{$ENDIF}

{$IFDEF MSWINDOWS}
  // Windows-spezifischer Code
{$ENDIF}
{$IFDEF LINUX}
  // Linux-spezifischer Code
{$ENDIF}

{$IFOPT R+}
  // Range Checking ist aktiviert
{$ENDIF}
```

**Besonderheiten:**
- `{$DEFINE}`/`{$UNDEF}` für Symbole
- `{$IFDEF}`/`{$IFNDEF}`/`{$ELSE}`/`{$ENDIF}` für bedingte Kompilierung
- `{$I filename}` für Include-Dateien
- Vordefinierte Symbole: `MSWINDOWS`, `LINUX`, `FPC`, `DELPHI`

**Weiterführende Links:**
- [Free Pascal Documentation - Compiler Directives](https://www.freepascal.org/docs-html/ref/refch2.html)

</TabItem>
</Tabs>


## 16.2.3. Hygienic Macros

Makros, die automatisch sicherstellen, dass Variablennamen keine Namenskonflikte verursachen, indem sie automatisch eindeutige Namen generieren.

### Sprachen {#sprachen}

<Tabs availableTabs={['scheme', 'racket', 'rust', 'scala', 'elixir', 'julia', 'lean4', 'nim', 'crystal', 'common-lisp', 'clojure']}>
<TabItem value="scheme" label="Scheme">

```scheme
;; Hygienic Macro mit syntax-rules
(define-syntax swap!
  (syntax-rules ()
    ((swap! a b)
     (let ((temp a))
       (set! a b)
       (set! b temp)))))

;; Automatische Variablen-Hygiene
(let ((temp 5))
  (swap! temp 10)
  temp)  ; temp bleibt unverändert, keine Namenskonflikte
```

**Besonderheiten:**
- Hygienic Macros über `syntax-rules`
- Automatische Variablen-Hygiene
- Keine Namenskonflikte durch automatische Umbenennung
- Pattern-Matching für Makro-Argumente

**Weiterführende Links:**
- [Scheme Documentation - Syntax Rules](https://www.scheme.com/tspl4/syntax.html)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
;; Hygienic Macro mit syntax-rules
(define-syntax swap!
  (syntax-rules ()
    ((swap! a b)
     (let ((temp a))
       (set! a b)
       (set! b temp)))))

;; Automatische Variablen-Hygiene
(let ((temp 5))
  (swap! temp 10)
  temp)  ; temp bleibt unverändert, keine Namenskonflikte

;; syntax-case für erweiterte Kontrolle
(define-syntax (my-macro stx)
  (syntax-case stx ()
    [(_ x)
     (with-syntax ([y (datum->syntax stx 'temp)])
       #'(let ([y x]) y))]))
```

**Besonderheiten:**
- Hygienic Macros über `syntax-rules` und `syntax-case`
- Automatische Variablen-Hygiene
- `datum->syntax` für explizite Syntax-Erstellung
- Sehr mächtiges Makro-System

**Weiterführende Links:**
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

// Automatische Variablen-Hygiene
let mut temp = 5;
let mut x = 10;
swap!(temp, x);
// temp bleibt unverändert, keine Namenskonflikte
```

**Besonderheiten:**
- Hygienic Macros über `macro_rules!`
- Automatische Variablen-Hygiene
- Pattern-Matching für Makro-Argumente
- Keine Namenskonflikte durch automatische Umbenennung

**Weiterführende Links:**
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
  // Automatische Variablen-Hygiene
  reify {
    if (!cond.value) {
      throw new AssertionError("Assertion failed")
    }
  }
}
```

**Besonderheiten:**
- Hygienic Macros über `macro` Keyword
- Automatische Variablen-Hygiene
- `reify` für Code-Generierung
- AST-Manipulation über `c.universe`

**Weiterführende Links:**
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

# Automatische Variablen-Hygiene
require MyMacros

temp = 5
x = 10
MyMacros.swap(temp, x)
# temp bleibt unverändert, keine Namenskonflikte
```

**Besonderheiten:**
- Hygienic Macros über `defmacro`
- Automatische Variablen-Hygiene
- `quote` für Code-Generierung
- `unquote` für Variablen-Einsetzung

**Weiterführende Links:**
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

# Automatische Variablen-Hygiene mit esc
temp = 5
x = 10
@swap(temp, x)
# temp bleibt unverändert, keine Namenskonflikte
```

**Besonderheiten:**
- Hygienic Macros über `macro` Keyword
- `esc` für explizite Variablen-Hygiene
- Automatische Variablen-Hygiene für lokale Variablen
- Sehr mächtiges Makro-System

**Weiterführende Links:**
- [Julia Documentation - Macros](https://docs.julialang.org/en/v1/manual/metaprogramming/#Macros)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Lean 4 Makros sind standardmäßig hygienisch
import Lean

-- Variablen in Syntax-Quotationen sind automatisch hygienisch
macro "myLet " x:ident " := " v:term " in " body:term : term =>
  `(let $x := $v; $body)

-- Keine Namenskonflikte: das x im Macro ist ein frisches Symbol
def test : Nat :=
  let x := 10
  myLet y := 20 in x + y  -- x bezieht sich auf das äußere x
-- test = 30
```

**Besonderheiten:**
- Lean 4 Makros sind standardmäßig hygienisch.
- Variablen in Syntax-Quotationen erhalten automatisch eindeutige Namen.
- Keine Namenskonflikte zwischen Makro-internen und externen Variablen.
- `mkIdent` kann für explizit nicht-hygienische Variablen verwendet werden.

**Weiterführende Links:**
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

# Automatische Variablen-Hygiene
var temp = 5
var x = 10
swap(temp, x)
# temp bleibt unverändert, keine Namenskonflikte
```

**Besonderheiten:**
- Hygienic Macros über `macro` Keyword
- Automatische Variablen-Hygiene
- `quote` für Code-Generierung
- Backticks für Variablen-Einsetzung

**Weiterführende Links:**
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

# Automatische Variablen-Hygiene
temp = 5
x = 10
swap(temp, x)
# temp bleibt unverändert, keine Namenskonflikte
```

**Besonderheiten:**
- Hygienic Macros über `macro` Keyword
- Automatische Variablen-Hygiene
- Quasiquote-Syntax für Code-Generierung
- Sehr mächtiges Makro-System

**Weiterführende Links:**
- [Crystal Documentation - Macros](https://crystal-lang.org/reference/1.9/syntax_and_semantics/macros.html)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Common Lisp Makros sind nicht hygienisch per Default
;; Gensym für manuelle Hygiene
(defmacro swap (a b)
  (let ((temp (gensym)))
    `(let ((,temp ,a))
       (setf ,a ,b)
       (setf ,b ,temp))))

;; Verwendung mit Gensym
(let ((temp 5))
  (swap temp 10)
  temp)  ; temp bleibt unverändert durch Gensym
```

**Besonderheiten:**
- Makros sind nicht hygienisch per Default
- `gensym` für manuelle Variablen-Hygiene
- Explizite Kontrolle über Variablennamen
- Sehr mächtiges, aber nicht automatisch hygienisches Makro-System

**Weiterführende Links:**
- [Common Lisp HyperSpec - gensym](http://www.lispworks.com/documentation/HyperSpec/Body/f_gensym.htm)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Clojure Makros sind nicht hygienisch per Default
;; Gensym für manuelle Hygiene
(defmacro my-let [val & body]
  `(let [~'x ~val]  ; UNSICHER: x könnte kollidieren
     ~@body))

;; Hygienische Version mit Auto-Gensym
(defmacro my-let-safe [val & body]
  `(let [x# ~val]   ; x# erzeugt eindeutigen Namen
     ~@body))

;; Manuelle Gensym-Verwendung
(defmacro do-twice [expr]
  (let [result (gensym "result")]
    `(let [~result ~expr]
       [~result ~result])))

(do-twice (+ 1 2))  ; [3 3]
```

**Besonderheiten:**
- Makros sind nicht hygienisch per Default
- Auto-Gensym (`#`-Suffix) für einfache Hygiene
- `gensym` für manuelle Variablen-Hygiene
- Explizite Kontrolle über Variablennamen

**Weiterführende Links:**
- [Clojure Documentation - Macros](https://clojure.org/reference/macros)

</TabItem>
</Tabs>


## 16.2.4. Template Metaprogrammierung

Ermöglicht es, Code zur Compile-Zeit zu generieren und zu transformieren, indem Templates verwendet werden, die zur Compile-Zeit instanziiert werden.

### Sprachen {#sprachen}

<Tabs availableTabs={['cpp', 'd', 'rust', 'haxe', 'nim', 'crystal', 'zig']}>
<TabItem value="cpp" label="C++">

```cpp
// Benötigt: #include <iostream>

// Template für Compile-Time-Berechnung
template<int N>
struct Factorial {
    static const int value = N * Factorial<N - 1>::value;
};

template<>
struct Factorial<0> {
    static const int value = 1;
};

// Template-Metaprogrammierung für Typ-Transformation
template<typename T>
struct RemovePointer {
    using type = T;
};

template<typename T>
struct RemovePointer<T*> {
    using type = T;
};

// Factorial<5>::value ist 120 (zur Compile-Zeit berechnet)
```

**Besonderheiten:**
- Template-Metaprogrammierung über Templates
- Compile-Time-Berechnungen über Template-Spezialisierung
- Typ-Transformation zur Compile-Zeit
- Sehr mächtig, aber komplex

**Weiterführende Links:**
- [C++ Documentation - Templates](https://en.cppreference.com/w/cpp/language/templates)

</TabItem>
<TabItem value="d" label="D">

```d
// Benötigt: import std.stdio;

// Template für Compile-Time-Berechnung
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
    writeln(Factorial!5);  // 120 (zur Compile-Zeit berechnet)
}
```

**Besonderheiten:**
- Template-Metaprogrammierung über Templates
- Compile-Time-Berechnungen über `static if`
- Typ-Transformation zur Compile-Zeit
- Weniger komplex als C++

**Weiterführende Links:**
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
    println!("{}", FACT_5);  // 120 (zur Compile-Zeit berechnet)
}
```

**Besonderheiten:**
- Const Functions für Compile-Time-Berechnungen
- Const Generics für Compile-Time-Parameter
- Typ-Level-Programmierung über Traits
- Weniger mächtig als C++ Templates

**Weiterführende Links:**
- [Rust Documentation - Const Functions](https://doc.rust-lang.org/reference/const_eval.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Build Macro für Compile-Time-Code-Generierung
@:build(Macro.build())
class MyClass {
    // Code wird zur Compile-Zeit generiert
}

// Expression Macro für Compile-Time-Berechnung
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

// Verwendung
var fact5 = factorial(5);  // 120 (zur Compile-Zeit berechnet)
```

**Besonderheiten:**
- Build Macros für Compile-Time-Code-Generierung
- Expression Macros für Compile-Time-Berechnungen
- AST-Manipulation zur Compile-Zeit
- Sehr mächtiges Makro-System

**Weiterführende Links:**
- [Haxe Documentation - Macros](https://haxe.org/manual/macro.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Template Metaprogrammierung
template repeat(n: int, body: untyped): untyped =
  for i in 0..<n:
    body

repeat(3):
  echo "Hello"

# Compile-Time-Berechnung über static
proc factorial(n: static int): int =
  when n <= 1: 1
  else: n * factorial(n - 1)

const fact5 = factorial(5)  # 120 (zur Compile-Zeit berechnet)

# Templates für Code-Generierung
template getter(name: untyped, T: typedesc) =
  proc `get name`(obj: MyObj): T = obj.name
```

**Besonderheiten:**
- Templates für Code-Generierung (Compile-Time-Substitution)
- `static` Parameter für Compile-Time-Werte
- `when` für Compile-Time-Bedingungen
- Templates sind hygienic und Zero-Cost

**Weiterführende Links:**
- [Nim Documentation - Templates](https://nim-lang.org/docs/manual.html#templates)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Compile-Time-Berechnung über Makros
macro factorial(n)
  {% if n == 0 %}
    1
  {% else %}
    {{ n }} * factorial({{ n - 1 }})
  {% end %}
end

# Verwendung zur Compile-Zeit
fact5 = factorial(5)  # 120 (zur Compile-Zeit berechnet)

# Typ-Level-Programmierung über Generics
class RemovePointer(T)
  def self.remove_pointer(value : T) : T
    value
  end
end

puts fact5
```

**Besonderheiten:**
- Makros für Compile-Time-Berechnungen
- `{% %}` für Compile-Time-Code-Ausführung
- Generics für Typ-Level-Programmierung
- Sehr mächtiges Makro-System

**Weiterführende Links:**
- [Crystal Documentation - Macros](https://crystal-lang.org/reference/1.9/syntax_and_semantics/macros.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Compile-Time-Berechnung über Comptime
fn factorial(comptime n: u32) u32 {
    if (n == 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Verwendung zur Compile-Zeit
const fact5 = comptime factorial(5);  // 120 (zur Compile-Zeit berechnet)

// Typ-Level-Programmierung über Comptime
fn removePointer(comptime T: type) type {
    return T;
}

pub fn main() void {
    @import("std").debug.print("{}\n", .{fact5});
}
```

**Besonderheiten:**
- `comptime` für Compile-Time-Berechnungen
- Compile-Time-Parameter über `comptime`
- Typ-Level-Programmierung über `comptime` Types
- Sehr mächtiges Compile-Time-System

**Weiterführende Links:**
- [Zig Documentation - Comptime](https://ziglang.org/documentation/0.11.0/#comptime)

</TabItem>
</Tabs>


## 16.2.5. Compile-Time Execution

Ermöglicht es, Code zur Compile-Zeit auszuführen, um Berechnungen durchzuführen, Code zu generieren oder Entscheidungen zu treffen, bevor das Programm kompiliert wird.

### Sprachen {#sprachen}

<Tabs availableTabs={['common-lisp', 'cpp', 'crystal', 'd', 'haxe', 'lean4', 'nim', 'prolog', 'rust', 'v', 'zig']}>
<TabItem value="zig" label="Zig">

```zig
// Compile-Time-Funktion
fn factorial(comptime n: u32) u32 {
    if (n == 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Compile-Time-Ausführung
const fact5 = comptime factorial(5);  // 120 (zur Compile-Zeit berechnet)

// Compile-Time-String-Manipulation
fn reverse(comptime str: []const u8) []const u8 {
    comptime var result: [str.len]u8 = undefined;
    comptime var i: usize = 0;
    comptime while (i < str.len) : (i += 1) {
        result[i] = str[str.len - 1 - i];
    }
    return &result;
}

const reversed = comptime reverse("hello");  // "olleh" (zur Compile-Zeit berechnet)

pub fn main() void {
    @import("std").debug.print("Factorial: {}\n", .{fact5});
    @import("std").debug.print("Reversed: {s}\n", .{reversed});
}
```

**Besonderheiten:**
- `comptime` für Compile-Time-Ausführung
- Compile-Time-Funktionen können zur Laufzeit und Compile-Zeit verwendet werden
- Compile-Time-String-Manipulation möglich
- Sehr mächtiges Compile-Time-System

**Weiterführende Links:**
- [Zig Documentation - Comptime](https://ziglang.org/documentation/0.11.0/#comptime)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Compile-Time-Funktion
proc factorial(n: static int): int =
  when n == 0:
    1
  else:
    n * factorial(n - 1)

# Compile-Time-Ausführung
const fact5 = factorial(5)  # 120 (zur Compile-Zeit berechnet)

# Compile-Time-String-Manipulation
proc reverse(s: static string): string =
  result = ""
  for i in countdown(s.len - 1, 0):
    result.add(s[i])

const reversed = reverse("hello")  # "olleh" (zur Compile-Zeit berechnet)

echo fact5
echo reversed
```

**Besonderheiten:**
- `static` Parameter für Compile-Time-Werte
- Compile-Time-Funktionen über `static` Parameter
- `when` für Compile-Time-Bedingungen
- Compile-Time-String-Manipulation möglich

**Weiterführende Links:**
- [Nim Documentation - Static Parameters](https://nim-lang.org/docs/manual.html#templates-static-parameters)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Compile-Time-Berechnung über Makros
macro factorial(n)
  {% if n == 0 %}
    1
  {% else %}
    {{ n }} * factorial({{ n - 1 }})
  {% end %}
end

# Compile-Time-Ausführung
fact5 = factorial(5)  # 120 (zur Compile-Zeit berechnet)

# Compile-Time-String-Manipulation
macro reverse(str)
  {% reversed = str.reverse %}
  {{ reversed }}
end

reversed = reverse("hello")  # "olleh" (zur Compile-Zeit berechnet)

puts fact5
puts reversed
```

**Besonderheiten:**
- Makros für Compile-Time-Ausführung
- `{% %}` für Compile-Time-Code-Ausführung
- Compile-Time-String-Manipulation möglich
- Sehr mächtiges Makro-System

**Weiterführende Links:**
- [Crystal Documentation - Macros](https://crystal-lang.org/reference/1.9/syntax_and_semantics/macros.html)

</TabItem>
<TabItem value="d" label="D">

```d
import std.stdio;

// Compile-Time-Funktion
int factorial(int n) {
    if (n == 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Compile-Time-Ausführung
enum fact5 = factorial(5);  // 120 (zur Compile-Zeit berechnet)

// Compile-Time-String-Manipulation
string reverse(string s) {
    string result;
    for (int i = s.length - 1; i >= 0; i--) {
        result ~= s[i];
    }
    return result;
}

enum reversed = reverse("hello");  // "olleh" (zur Compile-Zeit berechnet)

void main() {
    writeln(fact5);
    writeln(reversed);
}
```

**Besonderheiten:**
- `enum` für Compile-Time-Werte
- Compile-Time-Funktionen über `enum`
- Compile-Time-String-Manipulation möglich
- CTFE (Compile-Time Function Execution)

**Weiterführende Links:**
- [D Language Documentation - CTFE](https://dlang.org/spec/function.html#interpretation)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Direktiven (:- Goal) werden zur Lade-/Compile-Zeit ausgeführt
:- write('Modul wird geladen...'), nl.

% Compile-Zeit-Berechnung
:- X is 2 ** 10,
   format("2^10 = ~w~n", [X]).
% Ausgabe beim Laden: 2^10 = 1024

% Dynamische Fakten zur Ladezeit generieren
:- forall(
       between(1, 5, N),
       (Sq is N * N, assertz(square(N, Sq)))
   ).

?- square(3, X).  % X = 9
?- square(5, X).  % X = 25

% term_expansion für Compile-Zeit-Transformation
term_expansion(compute_table(Max), Clauses) :-
    findall(
        cube(N, C),
        (between(1, Max, N), C is N * N * N),
        Clauses
    ).

compute_table(3).
?- cube(2, X).  % X = 8
```

**Besonderheiten:**
- `:- Goal.` Direktiven werden zur Lade-/Compile-Zeit ausgeführt
- Beliebige Prolog-Prädikate können zur Ladezeit aufgerufen werden
- `term_expansion/2` für Compile-Zeit-Code-Generierung
- Prolog unterscheidet nicht streng zwischen Compile-Zeit und Laufzeit

**Weiterführende Links:**
- [SWI-Prolog Documentation - Directives](https://www.swi-prolog.org/pldoc/man?section=directive)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Const Function für Compile-Time-Berechnung
const fn factorial(n: u32) -> u32 {
    match n {
        0 | 1 => 1,
        _ => n * factorial(n - 1),
    }
}

// Compile-Time-Ausführung
const FACT_5: u32 = factorial(5);  // 120 (zur Compile-Zeit berechnet)

// Compile-Time-String-Manipulation (eingeschränkt)
const fn string_len(s: &str) -> usize {
    s.len()
}

const LEN: usize = string_len("hello");  // 5 (zur Compile-Zeit berechnet)

fn main() {
    println!("Factorial: {}", FACT_5);
    println!("Length: {}", LEN);
}
```

**Besonderheiten:**
- `const fn` für Compile-Time-Funktionen
- Const Generics für Compile-Time-Parameter
- Compile-Time-String-Manipulation eingeschränkt
- Weniger mächtig als Zig oder D

**Weiterführende Links:**
- [Rust Documentation - Const Functions](https://doc.rust-lang.org/reference/const_eval.html)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
#include <iostream>

// Constexpr Function für Compile-Time-Berechnung
constexpr int factorial(int n) {
    return (n == 0) ? 1 : n * factorial(n - 1);
}

// Compile-Time-Ausführung
constexpr int fact5 = factorial(5);  // 120 (zur Compile-Zeit berechnet)

// Template-Metaprogrammierung für Compile-Time-Berechnung
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

**Besonderheiten:**
- `constexpr` für Compile-Time-Funktionen
- Template-Metaprogrammierung für Compile-Time-Berechnungen
- Compile-Time-String-Manipulation eingeschränkt
- Sehr mächtig, aber komplex

**Weiterführende Links:**
- [C++ Documentation - constexpr](https://en.cppreference.com/w/cpp/language/constexpr)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Compile-Time-Funktion über Makros
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

// Compile-Time-Ausführung
var fact5 = factorial(5);  // 120 (zur Compile-Zeit berechnet)

// Build Macro für Compile-Time-Code-Generierung
@:build(Macro.build())
class MyClass {
    // Code wird zur Compile-Zeit generiert
}
```

**Besonderheiten:**
- Makros für Compile-Time-Ausführung
- Build Macros für Compile-Time-Code-Generierung
- AST-Manipulation zur Compile-Zeit
- Sehr mächtiges Makro-System

**Weiterführende Links:**
- [Haxe Documentation - Macros](https://haxe.org/manual/macro.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- #eval führt Code zur Compile-Zeit aus
#eval 2 + 3  -- 5 (zur Compile-Zeit berechnet)

-- #check prüft Typen zur Compile-Zeit
#check Nat.add  -- Nat → Nat → Nat

-- Compile-Time-Berechnung in Definitionen
def factorial : Nat → Nat
  | 0     => 1
  | n + 1 => (n + 1) * factorial n

#eval factorial 10  -- 3628800 (zur Compile-Zeit)

-- Compile-Time-Beweis
example : factorial 5 = 120 := by native_decide
```

**Besonderheiten:**
- `#eval` führt beliebige Lean-Ausdrücke zur Compile-Zeit aus.
- `#check` prüft Typen zur Compile-Zeit.
- Lean 4 kann beliebige Berechnungen zur Compile-Zeit durchführen (Turing-vollständig).
- `native_decide` und `decide` können Propositionen zur Compile-Zeit entscheiden.

**Weiterführende Links:**
- [Lean 4 Documentation - Metaprogramming](https://lean-lang.org/lean4/doc/metaprogramming.html)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; eval-when für Compile-Time Execution
(eval-when (:compile-toplevel :load-toplevel :execute)
  (defvar *compile-time-constant* (+ 1 2 3)))

;; Reader-Makros für Compile-Time Evaluation
(defvar x #.(+ 1 2 3))  ; Wird zur Read-Time evaluiert

;; Compiler-Makros
(define-compiler-macro square (&whole form x)
  (if (numberp x)
      (* x x)      ; Compile-Time-Berechnung
      form))        ; Laufzeit-Berechnung
```

**Besonderheiten:**
- `eval-when` kontrolliert, wann Code evaluiert wird (Compile-Time, Load-Time, Execute-Time)
- `#.` Reader-Makro für Read-Time Evaluation
- Compiler-Makros für Compile-Time-Optimierungen
- Makros selbst werden zur Compile-Time expandiert

**Weiterführende Links:**
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

**Besonderheiten:**
- `$if` für Compile-Time-Bedingungen (OS, Architektur)
- `$for` für Compile-Time-Iteration über Struct-Felder
- `$embed_file()` für Compile-Time-Dateieinbettung
- Code wird zur Kompilierzeit ausgewertet und nicht benötigte Pfade entfernt

**Weiterführende Links:**
- [V Documentation - Compile-Time Reflection](https://github.com/vlang/v/blob/master/doc/docs.md#compile-time-reflection)

</TabItem>
</Tabs>


## 16.2.6. Derive / Auto-Derive

Derive-Mechanismen generieren automatisch Implementierungen von Traits, Typklassen oder Interfaces für benutzerdefinierte Typen. Statt repetitiven Boilerplate-Code manuell zu schreiben, kann der Compiler die Implementierung basierend auf der Struktur des Typs ableiten.

### Sprachen {#sprachen}

<Tabs availableTabs={['elixir', 'haskell', 'idris', 'lean4', 'purescript', 'rust', 'scala']} yellowTabs={['csharp', 'crystal', 'fsharp', 'java', 'kotlin', 'nim', 'ocaml', 'python', 'swift']} orangeTabs={['d']}>
<TabItem value="csharp" label="C#">

```csharp
// record generiert automatisch Equals, GetHashCode, ToString
record Point(int X, int Y);

var p1 = new Point(1, 2);
var p2 = new Point(1, 2);

Console.WriteLine(p1 == p2);       // true (auto-generiertes Equals)
Console.WriteLine(p1);             // "Point { X = 1, Y = 2 }" (auto-generiertes ToString)
Console.WriteLine(p1.GetHashCode()); // konsistenter HashCode

// record struct für Werttypen (seit C# 10)
record struct Color(byte R, byte G, byte B);

// With-Expression für immutable Updates
var p3 = p1 with { X = 5 }; // Point { X = 5, Y = 2 }
```

**Besonderheiten:**
- `record` generiert automatisch `Equals`, `GetHashCode`, `ToString` und Dekonstruktor (seit C# 9)
- `record struct` für Werttypen (seit C# 10)
- `with`-Expression für immutable Kopien mit Änderungen
- Kein allgemeines Derive-System — nur für `record`-Typen

**Weiterführende Links:**
- [Microsoft C# Documentation - Records](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/record)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Macro-basierte Derive-Mechanismen
struct Point
  getter x : Int32
  getter y : Int32

  def initialize(@x, @y)
  end

  # Auto-Generierung über Makros
  def_equals @x, @y        # generiert ==
  def_hash @x, @y          # generiert hash
  def_clone                 # generiert clone
end

p1 = Point.new(1, 2)
p2 = Point.new(1, 2)
puts p1 == p2 # true (auto-generiert)

# JSON-Serialisierung via Annotation
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

**Besonderheiten:**
- `def_equals`, `def_hash`, `def_clone` Makros für auto-generierte Methoden
- `include JSON::Serializable` für auto-generierte JSON-Serialisierung
- Makro-basiert — keine spezielle Derive-Syntax
- Erweiterbar durch eigene Makros

**Weiterführende Links:**
- [Crystal Documentation - Macros](https://crystal-lang.org/reference/syntax_and_semantics/macros/index.html)

</TabItem>
<TabItem value="d" label="D">

```d
// Mixin-basierte Code-Generierung
struct Point
{
    int x;
    int y;

    // toString via Mixin generieren
    mixin template AutoToString()
    {
        string toString() const
        {
            import std.format;
            return format!"Point(%d, %d)"(x, y);
        }
    }
    mixin AutoToString;

    // opEquals via Mixin generieren
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

**Besonderheiten:**
- Kein natives Derive-System — Mixins und Templates für Code-Generierung
- `tupleof` erlaubt generischen Zugriff auf alle Struct-Felder
- `mixin template` für wiederverwendbare Code-Generierung
- String Mixins (`mixin("code")`) für flexible Metaprogrammierung
- Weniger ergonomisch als dedizierte Derive-Systeme

**Weiterführende Links:**
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

**Besonderheiten:**
- `@derive` leitet Protocol-Implementierungen für Structs ab
- Funktioniert mit eingebauten Protocols wie `Inspect`
- Erweiterbar für eigene Protocols und Bibliotheken (z.B. Jason für JSON)
- Optionen wie `only:` zur Steuerung der abgeleiteten Felder
- Protocol-basiert — nicht auf Traits oder Interfaces limitiert

**Weiterführende Links:**
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
    // Eigene Equality/Comparison muss implementiert werden
```

**Besonderheiten:**
- Records und Discriminated Unions erhalten automatisch strukturelle Gleichheit und Vergleich
- `ToString`, `Equals`, `GetHashCode` und `CompareTo` werden auto-generiert
- `[<StructuralEquality>]` und `[<StructuralComparison>]` sind standardmäßig aktiv
- `[<CustomEquality>]` / `[<NoEquality>]` für manuelle Kontrolle
- Kein allgemeines Derive-System, aber umfangreiche automatische Ableitungen

**Weiterführende Links:**
- [F# Documentation - Records](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/records)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- deriving für automatische Typklassen-Implementierungen
data Point = Point { x :: Int, y :: Int }
    deriving (Show, Eq, Ord, Read)

p1 = Point 1 2
p2 = Point 1 2
print (p1 == p2)     -- True (abgeleitetes Eq)
print (show p1)      -- "Point {x = 1, y = 2}" (abgeleitetes Show)
print (p1 < Point 2 3) -- True (abgeleitetes Ord)

-- DerivingStrategies für Kontrolle (seit GHC 8.2)
{-# LANGUAGE DerivingStrategies #-}
{-# LANGUAGE DeriveGeneric #-}

data Color = Color { r :: Int, g :: Int, b :: Int }
    deriving stock (Show, Eq)      -- Standard-Ableitung
    deriving anyclass (ToJSON)     -- via Typklasse
    deriving (Generic)             -- für generische Programmierung

-- GeneralizedNewtypeDeriving
newtype Celsius = Celsius Double
    deriving newtype (Show, Eq, Num)
```

**Besonderheiten:**
- `deriving` leitet Typklassen-Instanzen automatisch ab
- Standard-ableitbar: `Eq`, `Ord`, `Show`, `Read`, `Bounded`, `Enum`, `Ix`
- `DeriveGeneric` für generische Ableitung beliebiger Typklassen
- `DerivingStrategies` (seit GHC 8.2) zur Kontrolle der Ableitungsstrategie
- `GeneralizedNewtypeDeriving` für Newtypes
- `DerivingVia` (seit GHC 8.6) für Ableitung über isomorphe Typen

**Weiterführende Links:**
- [GHC Documentation - Deriving](https://ghc.gitlab.haskell.org/ghc/doc/users_guide/exts/deriving.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- %runElab für automatisches Deriving via Elaborator Reflection
data Point = MkPoint Int Int

-- Automatisches Deriving über Elaborator
%runElab derive "Point" [Show, Eq, Ord, DecEq]

p1 : Point
p1 = MkPoint 1 2

p2 : Point
p2 = MkPoint 1 2

-- Abgeleitete Instanzen verwenden
main : IO ()
main = do
    printLn (p1 == p2)  -- True
    printLn (show p1)   -- "MkPoint 1 2"
```

**Besonderheiten:**
- `%runElab derive` für automatische Interface-Ableitung via Elaborator Reflection
- Ableitbar: `Show`, `Eq`, `Ord`, `DecEq` und weitere
- Elaborator Reflection ermöglicht benutzerdefinierte Derive-Mechanismen
- Dependent Types erlauben beweisbar korrekte Ableitungen

**Weiterführende Links:**
- [Idris 2 Documentation - Elaborator Reflection](https://idris2.readthedocs.io/en/latest/elaboratorReflection/elaborator-reflection.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- deriving generiert automatisch Typklassen-Instanzen
structure Point where
  x : Int
  y : Int
deriving Repr, BEq, Hashable, Inhabited

-- Automatisch generierte Instanzen verwenden
def p1 : Point := { x := 1, y := 2 }
def p2 : Point := { x := 1, y := 2 }

#eval p1 == p2   -- true (via BEq)
#eval repr p1     -- "{ x := 1, y := 2 }" (via Repr)

-- Für induktive Typen
inductive Color where
  | red | green | blue
deriving Repr, BEq, Hashable, Inhabited
```

**Besonderheiten:**
- `deriving` generiert automatisch Typklassen-Instanzen für Strukturen und induktive Typen.
- Ableitbare Typklassen: `Repr`, `BEq`, `Hashable`, `Inhabited`, `DecidableEq` u.a.
- Benutzerdefinierte Deriving-Handler können registriert werden.
- Ähnlich wie Haskell `deriving` oder Rust `#[derive(...)]`.

**Weiterführende Links:**
- [Lean 4 Documentation - Structures](https://lean-lang.org/lean4/doc/structures.html)
- [Lean 4 Documentation - Deriving](https://lean-lang.org/lean4/doc/deriving.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// record generiert automatisch equals, hashCode, toString (seit Java 16)
record Point(int x, int y) {}

var p1 = new Point(1, 2);
var p2 = new Point(1, 2);

System.out.println(p1.equals(p2)); // true (auto-generiert)
System.out.println(p1);            // "Point[x=1, y=2]" (auto-generiert)
System.out.println(p1.hashCode()); // konsistenter HashCode

// Accessor-Methoden auto-generiert
System.out.println(p1.x()); // 1
System.out.println(p1.y()); // 2

// Records sind implizit final und immutable
```

**Besonderheiten:**
- `record` generiert automatisch `equals`, `hashCode`, `toString`, Accessor-Methoden und Konstruktor (seit Java 16)
- Records sind implizit `final` und unveränderlich
- Kompakte Konstruktor-Syntax für Validierung
- Kein allgemeines Derive-System — nur für `record`-Typen
- Lombok (`@Data`, `@Value`) als Library-basierte Alternative

**Weiterführende Links:**
- [Oracle Java Documentation - Records](https://docs.oracle.com/en/java/javase/17/language/records.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// data class generiert automatisch equals, hashCode, toString, copy
data class Point(val x: Int, val y: Int)

val p1 = Point(1, 2)
val p2 = Point(1, 2)

println(p1 == p2)     // true (auto-generiertes equals)
println(p1)           // "Point(x=1, y=2)" (auto-generiertes toString)
println(p1.hashCode()) // konsistenter HashCode

// copy für immutable Updates
val p3 = p1.copy(x = 5) // Point(x=5, y=2)

// Destructuring über componentN
val (x, y) = p1
println("$x, $y") // "1, 2"
```

**Besonderheiten:**
- `data class` generiert automatisch `equals`, `hashCode`, `toString`, `copy` und `componentN`
- Basiert auf den im primären Konstruktor deklarierten Properties
- `copy()` mit Named Arguments für immutable Updates
- Destructuring Declarations über auto-generierte `componentN`-Funktionen
- Kein allgemeines Derive-System — nur für `data class`

**Weiterführende Links:**
- [Kotlin Documentation - Data Classes](https://kotlinlang.org/docs/data-classes.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Macro-basierte Derive-Mechanismen
type
  Point = object
    x, y: int

# Equality und Hash via Compiler-Unterstützung
proc `==`(a, b: Point): bool =
  a.x == b.x and a.y == b.y

proc `$`(p: Point): string =
  "Point(" & $p.x & ", " & $p.y & ")"

# Macro für auto-generierte Methoden
macro derive(T: typedesc, traits: varargs[untyped]): untyped =
  # Generiert Methoden basierend auf Typ-Feldern
  result = newStmtList()
  for trait in traits:
    case trait.strVal
    of "Eq": result.add genEq(T)
    of "Show": result.add genShow(T)

# Verwendung
let p1 = Point(x: 1, y: 2)
let p2 = Point(x: 1, y: 2)
echo p1 == p2 # true
echo $p1      # "Point(1, 2)"
```

**Besonderheiten:**
- Kein eingebautes Derive-System — Makros werden für Code-Generierung verwendet
- `==`-Operator und `$`-Konversion können per Makro generiert werden
- `hashable`-Pragma für automatisches Hashing
- Erweiterbar durch eigene Derive-Makros über AST-Manipulation
- Template-basierte Code-Generierung als leichtgewichtige Alternative

**Weiterführende Links:**
- [Nim Documentation - Macros](https://nim-lang.org/docs/macros.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* ppx_deriving für automatische Ableitungen *)
(* Benötigt: opam install ppx_deriving *)

type point = { x : int; y : int }
[@@deriving show, eq, ord]

let p1 = { x = 1; y = 2 }
let p2 = { x = 1; y = 2 }

let () =
    Printf.printf "%b\n" (equal_point p1 p2); (* true *)
    Printf.printf "%s\n" (show_point p1)      (* "{ x = 1; y = 2 }" *)

(* Varianten-Typen ebenfalls ableitbar *)
type shape =
    | Circle of float
    | Rectangle of float * float
[@@deriving show, eq]

(* ppx_yojson für JSON-Serialisierung *)
type color = { r : int; g : int; b : int }
[@@deriving yojson]
```

**Besonderheiten:**
- `[@@deriving ...]` via ppx-Preprocessor (nicht nativ in der Sprache)
- `ppx_deriving` ist das Standard-Framework für Ableitungen
- Ableitbar: `show`, `eq`, `ord`, `hash`, `make`, `enum` und weitere
- `ppx_yojson`, `ppx_sexp_conv` für Serialisierung
- Erweiterbar durch eigene ppx-Deriver

**Weiterführende Links:**
- [ppx_deriving Documentation](https://github.com/ocaml-ppx/ppx_deriving)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- derive für automatische Typklassen-Instanzen
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

**Besonderheiten:**
- `derive instance` für automatische Typklassen-Ableitung
- `derive newtype instance` für Newtype-Ableitung (delegiert an den inneren Typ)
- `Generic` Deriving für komplexere Ableitungen via generische Repräsentation
- Ableitbar: `Eq`, `Ord`, `Show`, `Generic`, `Newtype`
- `genericShow`, `genericEq` etc. für generische Implementierungen

**Weiterführende Links:**
- [PureScript Documentation - Type Class Deriving](https://github.com/purescript/documentation/blob/master/language/Type-Class-Deriving.md)

</TabItem>
<TabItem value="python" label="Python">

```python
from dataclasses import dataclass, field

# @dataclass generiert __init__, __repr__, __eq__, __hash__
@dataclass
class Point:
    x: int
    y: int

p1 = Point(1, 2)
p2 = Point(1, 2)

print(p1 == p2)  # True (auto-generiertes __eq__)
print(p1)        # "Point(x=1, y=2)" (auto-generiertes __repr__)

# Optionale Features
@dataclass(frozen=True, order=True)
class Color:
    r: int
    g: int
    b: int

c1 = Color(255, 0, 0)
c2 = Color(0, 255, 0)
print(c1 < c2)  # True (auto-generiertes __lt__ via order=True)
# c1.r = 128     # FrozenInstanceError (frozen=True)
```

**Besonderheiten:**
- `@dataclass` generiert `__init__`, `__repr__`, `__eq__` automatisch (seit Python 3.7)
- `order=True` generiert zusätzlich `__lt__`, `__le__`, `__gt__`, `__ge__`
- `frozen=True` für unveränderliche Instanzen (generiert `__hash__`)
- `field()` für Feld-spezifische Konfiguration (Default-Werte, Factories)
- `attrs` Bibliothek als leistungsfähigere Alternative

**Weiterführende Links:**
- [Python Documentation - dataclasses](https://docs.python.org/3/library/dataclasses.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// #[derive] für automatische Trait-Implementierungen
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

// Derive für Enums
#[derive(Debug, Clone, PartialEq)]
enum Shape {
    Circle(f64),
    Rectangle(f64, f64),
}

// Derive für Serialisierung (via serde)
// Benötigt: serde = { version = "1", features = ["derive"] }
#[derive(Serialize, Deserialize, Debug)]
struct Color {
    r: u8,
    g: u8,
    b: u8,
}
```

**Besonderheiten:**
- `#[derive(...)]` generiert automatisch Trait-Implementierungen
- Standard-ableitbar: `Debug`, `Clone`, `Copy`, `PartialEq`, `Eq`, `Hash`, `PartialOrd`, `Ord`, `Default`
- Procedural Macros ermöglichen eigene Derive-Makros (z.B. `serde::Serialize`)
- Funktioniert für Structs und Enums
- Derive-Makros generieren Code zur Compile-Zeit über Token-Stream-Transformation

**Weiterführende Links:**
- [Rust Book - Derivable Traits](https://doc.rust-lang.org/book/appendix-03-derivable-traits.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Case Classes generieren automatisch apply, unapply, equals, hashCode, toString
case class Point(x: Int, y: Int)

val p1 = Point(1, 2)
val p2 = Point(1, 2)

println(p1 == p2) // true (auto-generiertes equals)
println(p1)       // "Point(1,2)" (auto-generiertes toString)

// copy für immutable Updates
val p3 = p1.copy(x = 5) // Point(5, 2)

// Pattern Matching via auto-generiertem unapply
p1 match {
    case Point(x, y) => println(s"x=$x, y=$y")
}

// derives-Klausel (seit Scala 3)
case class Color(r: Int, g: Int, b: Int) derives CanEqual

// Enum mit derives (seit Scala 3)
enum Shape derives CanEqual:
    case Circle(radius: Double)
    case Rectangle(width: Double, height: Double)
```

**Besonderheiten:**
- `case class` generiert `apply`, `unapply`, `equals`, `hashCode`, `toString`, `copy`, `productIterator`
- `derives`-Klausel (seit Scala 3) für explizite Typklassen-Ableitung
- `case class` ist seit Scala 1.0 verfügbar
- `derives` unterstützt `CanEqual`, `Ordering`, `Show` und benutzerdefinierte Typklassen
- Companion Object mit `apply`/`unapply` wird automatisch erzeugt

**Weiterführende Links:**
- [Scala 3 Documentation - Derivation](https://docs.scala-lang.org/scala3/reference/contextual/derivation.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Automatische Protocol-Konformität
struct Point: Equatable, Hashable, CustomStringConvertible {
    let x: Int
    let y: Int

    // Equatable und Hashable werden automatisch synthetisiert
    // wenn alle Stored Properties konform sind

    var description: String {
        "Point(x: \(x), y: \(y))"
    }
}

let p1 = Point(x: 1, y: 2)
let p2 = Point(x: 1, y: 2)

print(p1 == p2) // true (auto-synthetisiert)

// Codable für automatische Serialisierung
struct Color: Codable, Equatable {
    let r: Int
    let g: Int
    let b: Int
}

// JSON-Serialisierung ohne manuellen Code
let encoder = JSONEncoder()
let data = try encoder.encode(Color(r: 255, g: 0, b: 0))
```

**Besonderheiten:**
- Swift synthetisiert automatisch `Equatable`, `Hashable` und `Codable` für Structs und Enums
- Voraussetzung: Alle Stored Properties müssen dem Protocol konform sein
- `Codable` (`Encodable & Decodable`) für JSON/Plist-Serialisierung
- `CaseIterable` für Enums (generiert `allCases`)
- Kein allgemeines Derive-System, aber Compiler-Synthese für spezifische Protocols

**Weiterführende Links:**
- [Swift Documentation - Protocols](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/protocols/)

</TabItem>
</Tabs>

