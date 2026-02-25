---
slug: /ausfuehrungsmodell/execution-targets
title: 17.3. Execution Targets
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 17.3. Execution Targets

Kompilierungsziele: Native Code, VM, Interpreter.

## 17.3.1. Native Code

Code wird direkt zu Maschinencode kompiliert und nativ auf der Zielplattform ausgeführt.

### Sprachen {#sprachen}

<Tabs availableTabs={['ada', 'c', 'carbon', 'common-lisp', 'cpp', 'crystal', 'd', 'fortran', 'go', 'haskell', 'idris', 'julia', 'koka', 'lean4', 'mercury', 'nim', 'object-pascal', 'objective-c', 'ocaml', 'odin', 'prolog', 'roc', 'rust', 'swift', 'v', 'zig']}>
<TabItem value="ada" label="Ada">

```ada
-- Kompilierung zu Native Code
procedure Main is
begin
   null;
end Main;
```

**Besonderheiten:**
- Kompiliert direkt zu Maschinencode für die Zielplattform
- Unterstützt Cross-Compilation für verschiedene Zielarchitekturen

**Weiterführende Links:**
- [Ada Reference Manual](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-TOC.html)

</TabItem>
<TabItem value="c" label="C">

```c
// Kompilierung zu Native Code
int main(void) {
    return 0;
}
```

**Besonderheiten:**
- Klassisches Beispiel für Native Code-Kompilierung
- Direkte Übersetzung zu Maschinencode durch Compiler wie GCC, Clang

**Weiterführende Links:**
- [C Standard Documentation](https://www.iso.org/standard/74528.html)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Kompilierung zu Native Code
package Main api;

fn Main() -> i32 {
  return 0;
}
```

**Besonderheiten:**
- Kompiliert zu Native Code ähnlich wie C++
- Ziel: Interoperabilität mit C++ bei moderner Syntax

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Kompilierung zu Native Code
int main() {
    return 0;
}
```

**Besonderheiten:**
- Kompiliert direkt zu Maschinencode
- Unterstützt verschiedene Optimierungsstufen

**Weiterführende Links:**
- [C++ Reference](https://en.cppreference.com/)

</TabItem>
<TabItem value="crystal" label="Crystal">

```ruby
# Kompilierung zu Native Code
def main
  0
end
```

**Besonderheiten:**
- Kompiliert zu Native Code mit LLVM
- Ruby-ähnliche Syntax mit statischer Typisierung

**Weiterführende Links:**
- [Crystal Documentation](https://crystal-lang.org/docs/)

</TabItem>
<TabItem value="d" label="D">

```d
// Kompilierung zu Native Code
void main() {
}
```

**Besonderheiten:**
- Kompiliert zu Native Code
- Unterstützt verschiedene Backends (DMD, GDC, LDC)

**Weiterführende Links:**
- [D Language Documentation](https://dlang.org/documentation.html)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Kompilierung zu Native Code
program main
    implicit none
end program main
```

**Besonderheiten:**
- Kompiliert zu Native Code
- Optimiert für numerische Berechnungen

**Weiterführende Links:**
- [Fortran Standard](https://wg5-fortran.org/)

</TabItem>
<TabItem value="go" label="Go">

```go
// Kompilierung zu Native Code
package main

func main() {
}
```

**Besonderheiten:**
- Kompiliert zu Native Code ohne externe Abhängigkeiten
- Statisches Linking standardmäßig

**Weiterführende Links:**
- [Go Documentation](https://go.dev/doc/)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Kompilierung zu Native Code mit GHC
main :: IO ()
main = return ()
```

**Besonderheiten:**
- GHC kompiliert zu Native Code
- Unterstützt Cross-Compilation

**Weiterführende Links:**
- [GHC User's Guide](https://ghc.gitlab.haskell.org/ghc/doc/users_guide/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Kompilierung zu Native Code
proc main() =
  discard

main()
```

**Besonderheiten:**
- Kompiliert zu Native Code über C oder C++ als Zwischensprache
- Unterstützt verschiedene Backends

**Weiterführende Links:**
- [Nim Documentation](https://nim-lang.org/documentation.html)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objective-c
// Kompilierung zu Native Code
#import <Foundation/Foundation.h>

int main(int argc, const char * argv[]) {
    return 0;
}
```

**Besonderheiten:**
- Kompiliert zu Native Code mit Clang/LLVM
- Verwendet Objective-C Runtime

**Weiterführende Links:**
- [Objective-C Documentation](https://developer.apple.com/documentation/objectivec)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Kompilierung zu Native Code
program Main;
begin
end.
```

**Besonderheiten:**
- Kompiliert zu Native Code
- Unterstützt verschiedene Compiler (Free Pascal, Delphi)

**Weiterführende Links:**
- [Free Pascal Documentation](https://www.freepascal.org/docs.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Kompilierung zu Native Code *)
let main () = ()
```

**Besonderheiten:**
- OCaml kompiliert zu Native Code
- Unterstützt auch Bytecode-Kompilierung

**Weiterführende Links:**
- [OCaml Documentation](https://ocaml.org/docs/)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Kompilierung zu Native Code
package main

main :: proc() {
}
```

**Besonderheiten:**
- Kompiliert zu Native Code
- C-ähnliche Performance mit moderner Syntax

**Weiterführende Links:**
- [Odin Documentation](https://odin-lang.org/docs/)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Kompilierung zu Native Code
fn main() {
}
```

**Besonderheiten:**
- Kompiliert zu Native Code mit LLVM
- Statisches Linking standardmäßig

**Weiterführende Links:**
- [Rust Book](https://doc.rust-lang.org/book/)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Kompilierung zu Native Code
func main() {
}
```

**Besonderheiten:**
- Kompiliert zu Native Code mit Swift Compiler
- Unterstützt verschiedene Zielplattformen

**Weiterführende Links:**
- [Swift Documentation](https://www.swift.org/documentation/)

</TabItem>
<TabItem value="v" label="V">

```v
// Kompilierung zu Native Code
fn main() {
}
```

**Besonderheiten:**
- Kompiliert zu Native Code
- Schnelle Kompilierung

**Weiterführende Links:**
- [V Documentation](https://docs.vlang.io/)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Kompilierung zu Native Code
pub fn main() void {
}
```

**Besonderheiten:**
- Kompiliert zu Native Code
- Unterstützt Cross-Compilation ohne zusätzliche Konfiguration

**Weiterführende Links:**
- [Zig Documentation](https://ziglang.org/documentation/)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; SBCL kompiliert zu nativem Maschinencode
(defun fibonacci (n)
  (declare (optimize (speed 3) (safety 0))
           (type fixnum n))
  (if (<= n 1) n
      (+ (fibonacci (1- n)) (fibonacci (- n 2)))))

;; Kompilierung explizit auslösen
(compile 'fibonacci)

;; Disassembly anzeigen
(disassemble 'fibonacci)
```

**Besonderheiten:**
- SBCL, CCL, CMUCL und andere kompilieren direkt zu nativem Maschinencode
- `(declare (optimize ...))` steuert Compiler-Optimierungen
- `compile` kompiliert einzelne Funktionen
- `compile-file` kompiliert ganze Dateien zu FASL (Fast Load) Dateien
- Einige Implementierungen (z.B. CLISP) interpretieren oder kompilieren zu Bytecode

**Weiterführende Links:**
- [SBCL Manual - Compiler](http://www.sbcl.org/manual/#Compiler)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Kompilierung zu nativem Code über C-Backend
-- idris2 --cg refc -o program Main.idr
main : IO ()
main = putStrLn "Hello, World!"
```

**Besonderheiten:**
- Kompilierung zu C-Code, dann zu nativem Code mit C-Compiler
- RefC-Backend erzeugt reference-counted C-Code
- Alternativ: Chez Scheme Backend (Standard) erzeugt Scheme-Code

**Weiterführende Links:**
- [Idris 2 Documentation](https://idris2.readthedocs.io/)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Julia kompiliert zu nativem Code via LLVM JIT
function add(a::Int, b::Int)
    a + b
end

# Generierten nativen Code anzeigen
@code_native add(1, 2)

# LLVM IR anzeigen
@code_llvm add(1, 2)

# Typen-inferierten Code anzeigen
@code_typed add(1, 2)
```

**Besonderheiten:**
- JIT-Compilation zu nativem Maschinencode via LLVM
- Erster Aufruf kompiliert (Compile-Time-Overhead), danach native Geschwindigkeit
- `@code_native`, `@code_llvm`, `@code_typed` zur Inspektion
- Ahead-of-Time-Compilation möglich mit PackageCompiler.jl

**Weiterführende Links:**
- [Julia Documentation - Performance Tips](https://docs.julialang.org/en/v1/manual/performance-tips/)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
// Koka kompiliert zu C-Code, dann zu nativem Maschinencode
fun main()
  println("Hello, World!")

// Kompilierung:
// koka main.kk          → erzeugt C-Code und kompiliert zu nativem Binary
// koka --optimize main.kk  → optimierte Kompilierung
```

**Besonderheiten:**
- Kompiliert zu C-Code, der dann mit einem C-Compiler (gcc/clang) zu nativem Code kompiliert wird
- Perceus Reference Counting wird im generierten C-Code implementiert
- Optimierungen auf C-Ebene durch den C-Compiler
- Kleine, eigenständige Binaries ohne Laufzeit-VM

**Weiterführende Links:**
- [Koka Documentation - Compilation](https://koka-lang.github.io/koka/doc/book.html#sec-install)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Lean 4 kompiliert zu C-Code, dann zu nativem Maschinencode
def main : IO Unit :=
  IO.println "Hello, World!"

-- Kompilierung:
-- lake build        → erzeugt C-Code und kompiliert zu nativem Binary
-- lake build +release → optimierte Kompilierung
```

**Besonderheiten:**
- Kompiliert zu C-Code, der dann mit einem C-Compiler (gcc/clang) zu nativem Code kompiliert wird.
- Reference Counting wird im generierten C-Code implementiert.
- Lake als Build-System orchestriert den Kompilierungsprozess.
- Kleine, eigenständige Binaries ohne Laufzeit-VM.

**Weiterführende Links:**
- [Lean 4 Documentation - Compilation](https://lean-lang.org/lean4/doc/setup.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Roc kompiliert zu nativem Maschinencode
-- Verwendet LLVM als Backend
```

**Besonderheiten:**
- Kompiliert zu nativem Maschinencode über LLVM
- Ahead-of-Time Compilation (AOT)
- Keine Runtime oder VM benötigt

**Weiterführende Links:**
- [Roc Documentation](https://www.roc-lang.org/)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% GNU Prolog kompiliert zu nativem Maschinencode
% Kompilierung: gplc program.pl -o program

:- initialization(main).

main :-
    write('Hello, World!'), nl,
    halt.

% Ausführung: ./program
```

**Besonderheiten:**
- GNU Prolog kompiliert über die WAM (Warren Abstract Machine) zu nativem C-Code und dann zu Maschinencode
- Erzeugt eigenständige, ausführbare Binaries ohne externe Abhängigkeiten
- Ahead-of-Time Compilation (AOT)
- Andere Implementierungen (SWI-Prolog, SICStus) kompilieren primär zu Bytecode

**Weiterführende Links:**
- [GNU Prolog Documentation - Compiling](http://www.gprolog.org/manual/gprolog.html#sec11)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Kompilierung zu Native Code via C-Backend
% mmc --grade hlc.gc program.m
:- module program.
:- interface.
:- import_module io.
:- pred main(io::di, io::uo) is det.
:- implementation.
main(!IO) :-
    io.write_string("Hello, World!\n", !IO).
```

**Besonderheiten:**
- Mercury kompiliert zu C-Code, der dann mit GCC/Clang zu nativem Maschinencode kompiliert wird
- Primäres Backend: `hlc.gc` (High-Level C mit Garbage Collection)
- Erzeugt eigenständige Binaries ohne externe Laufzeit-VM
- Unterstützt Cross-Compilation über C-Compiler-Flags

**Weiterführende Links:**
- [Mercury Documentation - Compilation Grades](https://www.mercurylang.org/information/doc-release/mercury_user_guide/Compilation-model-options.html)

</TabItem>
</Tabs>


## 17.3.2. Virtual Machine (JVM, CLR, etc.)

Code wird zu Bytecode kompiliert und auf einer Virtual Machine ausgeführt.

### Sprachen {#sprachen}

<Tabs availableTabs={['clojure', 'csharp', 'dart', 'elixir', 'erlang', 'fsharp', 'gleam', 'groovy', 'java', 'kotlin', 'lua', 'mercury', 'prolog', 'scala', 'vbnet']}>
<TabItem value="clojure" label="Clojure">

```clojure
;; Kompilierung zu JVM Bytecode
(defn main []
  nil)
```

**Besonderheiten:**
- Kompiliert zu JVM Bytecode
- Läuft auf der Java Virtual Machine

**Weiterführende Links:**
- [Clojure Documentation](https://clojure.org/docs/getting_started)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Kompilierung zu IL (Intermediate Language)
class Program
{
    static void Main()
    {
    }
}
```

**Besonderheiten:**
- Kompiliert zu IL (Intermediate Language)
- Läuft auf der Common Language Runtime (CLR)
- Unterstützt auch NativeAOT für Native Code-Kompilierung

**Weiterführende Links:**
- [C# Documentation](https://learn.microsoft.com/en-us/dotnet/csharp/)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Kompilierung zu BEAM Bytecode
defmodule Main do
  def main do
  end
end
```

**Besonderheiten:**
- Kompiliert zu BEAM Bytecode
- Läuft auf der BEAM Virtual Machine

**Weiterführende Links:**
- [Elixir Documentation](https://elixir-lang.org/docs.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% Kompilierung zu BEAM Bytecode
main() ->
    ok.
```

**Besonderheiten:**
- Kompiliert zu BEAM Bytecode
- Läuft auf der BEAM Virtual Machine

**Weiterführende Links:**
- [Erlang Documentation](https://www.erlang.org/docs)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Kompilierung zu IL (Intermediate Language)
module Main

let main () = ()
```

**Besonderheiten:**
- Kompiliert zu IL (Intermediate Language)
- Läuft auf der Common Language Runtime (CLR)
- Unterstützt auch NativeAOT für Native Code-Kompilierung

**Weiterführende Links:**
- [F# Documentation](https://learn.microsoft.com/en-us/dotnet/fsharp/)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// Kompilierung zu BEAM Bytecode
pub fn main() {
  Nil
}
```

**Besonderheiten:**
- Kompiliert zu BEAM Bytecode
- Läuft auf der BEAM Virtual Machine

**Weiterführende Links:**
- [Gleam Documentation](https://gleam.run/documentation/)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Kompilierung zu JVM Bytecode
def main() {
}
```

**Besonderheiten:**
- Kompiliert zu JVM Bytecode
- Läuft auf der Java Virtual Machine

**Weiterführende Links:**
- [Groovy Documentation](https://groovy-lang.org/documentation.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Kompilierung zu JVM Bytecode
class Main {
    public static void main(String[] args) {
    }
}
```

**Besonderheiten:**
- Kompiliert zu JVM Bytecode
- Läuft auf der Java Virtual Machine
- Platform-unabhängige Ausführung

**Weiterführende Links:**
- [Java Documentation](https://docs.oracle.com/javase/)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Kompilierung zu JVM Bytecode
fun main() {
}
```

**Besonderheiten:**
- Kompiliert zu JVM Bytecode
- Läuft auf der Java Virtual Machine
- Unterstützt auch Kotlin/Native für Native Code-Kompilierung

**Weiterführende Links:**
- [Kotlin Documentation](https://kotlinlang.org/docs/home.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Kompilierung zu Lua Bytecode
function main()
end
```

**Besonderheiten:**
- Kompiliert zu Lua Bytecode
- Läuft auf der Lua Virtual Machine

**Weiterführende Links:**
- [Lua Documentation](https://www.lua.org/manual/5.4/)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Kompilierung zu JVM Bytecode
object Main {
  def main(args: Array[String]): Unit = {
  }
}
```

**Besonderheiten:**
- Kompiliert zu JVM Bytecode
- Läuft auf der Java Virtual Machine

**Weiterführende Links:**
- [Scala Documentation](https://docs.scala-lang.org/)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Kompilierung zu IL (Intermediate Language)
Module Main
    Sub Main()
    End Sub
End Module
```

**Besonderheiten:**
- Kompiliert zu IL (Intermediate Language)
- Läuft auf der Common Language Runtime (CLR)

**Weiterführende Links:**
- [VB.NET Documentation](https://learn.microsoft.com/en-us/dotnet/visual-basic/)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Dart VM
// Dart-Code wird auf der Dart Virtual Machine ausgeführt
// Entwicklungsmodus: JIT-Kompilierung für schnelle Iterationen
// $ dart run main.dart

void main() {
  print('Läuft auf der Dart VM');
}

// Produktionsmodus: AOT-Kompilierung zu nativem Code
// $ dart compile exe main.dart
```

**Besonderheiten:**
- Dart VM mit JIT-Kompilierung für Entwicklung (Hot Reload in Flutter)
- AOT-Kompilierung zu nativem Maschinencode für Produktion
- Dart VM unterstützt Isolates für Parallelität
- Keine JVM oder CLR - eigene VM

**Weiterführende Links:**
- [Dart Documentation - Dart VM](https://dart.dev/overview#platform)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% SWI-Prolog kompiliert zu WAM-Bytecode
% (Warren Abstract Machine)

:- initialization(main).

main :-
    write('Läuft auf der WAM'), nl.

% Ausführung: swipl program.pl
```

**Besonderheiten:**
- Prolog wird typischerweise zu WAM-Bytecode (Warren Abstract Machine) kompiliert
- Die WAM ist eine sprachspezifische VM, optimiert für Unifikation und Backtracking
- SWI-Prolog, SICStus Prolog und YAP nutzen WAM-basierte VMs
- Kein JVM/CLR/BEAM – eigene VM-Architektur

**Weiterführende Links:**
- [SWI-Prolog Documentation](https://www.swi-prolog.org/pldoc/man?section=overview)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Kompilierung zu Java-Bytecode (JVM)
% mmc --grade java program.m
% java -cp Mercury/classpath program

% Kompilierung zu C#-IL (CLR)
% mmc --grade csharp program.m

:- module program.
:- interface.
:- import_module io.
:- pred main(io::di, io::uo) is det.
:- implementation.
main(!IO) :-
    io.write_string("Läuft auf JVM oder CLR\n", !IO).
```

**Besonderheiten:**
- Java-Backend (`--grade java`): Kompiliert zu Java-Quellcode, dann zu JVM-Bytecode
- C#-Backend (`--grade csharp`): Kompiliert zu C#-Quellcode, dann zu CLR-IL
- Beide Backends sind weniger ausgereift als das primäre C-Backend
- Gleicher Mercury-Quellcode für alle Backends

**Weiterführende Links:**
- [Mercury Documentation - Compilation Grades](https://www.mercurylang.org/information/doc-release/mercury_user_guide/Compilation-model-options.html)

</TabItem>
</Tabs>


## 17.3.3. Interpreter

Code wird direkt vom Interpreter ausgeführt, ohne vorherige Kompilierung zu Maschinencode oder Bytecode.

### Sprachen {#sprachen}

<Tabs availableTabs={['common-lisp', 'groovy', 'javascript', 'julia', 'lua', 'matlab', 'octave', 'perl', 'php', 'prolog', 'python', 'r', 'racket', 'ruby', 'scheme', 'typescript', 'wolfram-language']} orangeTabs={['elm']}>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Ausführung durch Interpreter
(defun main ()
  nil)
```

**Besonderheiten:**
- Wird primär durch Interpreter ausgeführt
- Unterstützt auch Kompilierung zu Native Code

**Weiterführende Links:**
- [Common Lisp HyperSpec](http://www.lispworks.com/documentation/HyperSpec/Front/)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Elm kompiliert zu JavaScript
-- elm make src/Main.elm --output=main.js
main =
    text "Hello, World!"
```

**Besonderheiten:**
- Elm ist eine kompilierte Sprache (kein Interpreter)
- Kompiliert zu optimiertem JavaScript
- `elm make` erzeugt .js-Dateien
- `elm reactor` bietet einen Entwicklungsserver mit Live-Reloading

**Weiterführende Links:**
- [Elm Documentation - Install](https://guide.elm-lang.org/install/elm.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Ausführung durch Interpreter/JIT-Compiler
function main() {
}
```

**Besonderheiten:**
- Wird durch JavaScript-Engines interpretiert (V8, SpiderMonkey, etc.)
- Moderne Engines verwenden JIT-Kompilierung zur Laufzeit

**Weiterführende Links:**
- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% Ausführung durch MATLAB Interpreter
function main()
end
```

**Besonderheiten:**
- Wird durch MATLAB Interpreter ausgeführt
- JIT-Kompilierung für Performance-Optimierung

**Weiterführende Links:**
- [MATLAB Documentation](https://www.mathworks.com/help/matlab/)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
% Ausführung durch Octave Interpreter
function main()
end
```

**Besonderheiten:**
- Wird durch Octave Interpreter ausgeführt
- MATLAB-kompatibel

**Weiterführende Links:**
- [GNU Octave Documentation](https://docs.octave.org/)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Ausführung durch Perl Interpreter
sub main {
}
```

**Besonderheiten:**
- Wird durch Perl Interpreter ausgeführt
- Unterstützt auch Kompilierung zu Bytecode

**Weiterführende Links:**
- [Perl Documentation](https://perldoc.perl.org/)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
// Ausführung durch PHP Interpreter (Zend Engine)
function main() {
}
?>
```

**Besonderheiten:**
- Wird durch PHP Interpreter (Zend Engine) ausgeführt
- JIT-Kompilierung seit PHP 8.0

**Weiterführende Links:**
- [PHP Documentation](https://www.php.net/docs.php)

</TabItem>
<TabItem value="python" label="Python">

```python
# Ausführung durch Python Interpreter (CPython)
def main():
    pass
```

**Besonderheiten:**
- Wird durch Python Interpreter (CPython) ausgeführt
- Unterstützt auch andere Implementierungen (PyPy, Jython, etc.)

**Weiterführende Links:**
- [Python Documentation](https://docs.python.org/)

</TabItem>
<TabItem value="r" label="R">

```r
# Ausführung durch R Interpreter
main <- function() {
}
```

**Besonderheiten:**
- Wird durch R Interpreter ausgeführt
- Optimiert für statistische Berechnungen

**Weiterführende Links:**
- [R Documentation](https://www.r-project.org/help.html)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
;; Ausführung durch Racket Runtime
(define (main)
  (displayln "Hello, World!"))

(main)
```

**Besonderheiten:**
- Code wird zu Bytecode kompiliert und dann ausgeführt
- Racket CS (seit 2019) nutzt Chez Scheme als Backend mit JIT-Kompilierung
- Unterstützt auch interaktive Auswertung (REPL)

**Weiterführende Links:**
- [Racket Documentation](https://docs.racket-lang.org/)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Ausführung durch Ruby Interpreter (MRI/YARV)
def main
end
```

**Besonderheiten:**
- Wird durch Ruby Interpreter (MRI/YARV) ausgeführt
- Unterstützt auch andere Implementierungen (JRuby, Rubinius, etc.)

**Weiterführende Links:**
- [Ruby Documentation](https://docs.ruby-lang.org/)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; Ausführung durch Scheme Interpreter
(define (main)
  (void))
```

**Besonderheiten:**
- Wird primär durch Interpreter ausgeführt
- Unterstützt auch Kompilierung zu Native Code

**Weiterführende Links:**
- [R7RS Scheme Specification](https://small.r7rs.org/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Kompilierung zu JavaScript, dann Ausführung durch Interpreter
function main(): void {
}
```

**Besonderheiten:**
- Kompiliert zu JavaScript, das dann durch JavaScript-Interpreter ausgeführt wird
- Type-Checking zur Compile-Zeit

**Weiterführende Links:**
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```wolfram
(* Ausführung durch Wolfram Engine *)
main[] := Null
```

**Besonderheiten:**
- Wird durch Wolfram Engine interpretiert
- Unterstützt symbolische Berechnungen

**Weiterführende Links:**
- [Wolfram Language Documentation](https://reference.wolfram.com/language/)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Groovy kann als Interpreter ausgeführt werden

// GroovyShell für dynamische Code-Ausführung
def shell = new GroovyShell()
def result = shell.evaluate('2 + 3') // 5

// Scripts können direkt ausgeführt werden:
// $ groovy script.groovy

// GroovyConsole für interaktive Entwicklung
// $ groovyConsole
```

**Besonderheiten:**
- `groovy` Befehl führt Scripts direkt aus (ohne explizite Kompilierung)
- `GroovyShell` für dynamische Code-Auswertung zur Laufzeit
- `GroovyConsole` als interaktive GUI-Konsole
- Auch kompilierte Ausführung als JVM-Bytecode möglich

**Weiterführende Links:**
- [Groovy Documentation - GroovyShell](https://groovy-lang.org/integrating.html#_groovyshell)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Julia REPL (Read-Eval-Print Loop)
# Interaktive Ausführung
julia> 1 + 2
3

julia> x = "Hallo"
"Hallo"

# Skript-Ausführung
# julia script.jl
```

**Besonderheiten:**
- Interaktive REPL für explorative Programmierung
- Skripte werden via JIT kompiliert und ausgeführt (kein reiner Interpreter)
- Julia ist eine JIT-kompilierte Sprache, nicht interpretiert im klassischen Sinne
- REPL unterstützt Help-Mode (`?`), Shell-Mode (`;`), Package-Mode (`]`)

**Weiterführende Links:**
- [Julia Documentation - The Julia REPL](https://docs.julialang.org/en/v1/stdlib/REPL/)

</TabItem>

<TabItem value="lua" label="Lua">

```lua
-- Lua wird über den Interpreter ausgeführt
-- Ausführung: lua script.lua

-- Interaktiver Modus (REPL)
-- $ lua
-- > print("Hello, World!")

-- Kompilierung zu Bytecode (optional)
-- $ luac -o script.luac script.lua
-- $ lua script.luac

-- Einbettung: Lua wird häufig als eingebettete Skriptsprache verwendet
-- C-Host-Programm erstellt Lua-State und führt Skripte aus
```

**Besonderheiten:**
- Lua kompiliert Source Code zu Bytecode und führt diesen auf der Lua VM aus
- `lua` ist der Standard-Interpreter (REPL und Skript-Ausführung)
- `luac` kann Bytecode vorab kompilieren
- LuaJIT bietet einen JIT-Compiler für deutlich höhere Performance
- Lua wird häufig als eingebettete Skriptsprache in C/C++-Anwendungen verwendet

**Weiterführende Links:**
- [Lua Reference Manual - Lua Stand-alone](https://www.lua.org/manual/5.4/manual.html#7)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Interaktive Ausführung im Prolog-Interpreter (REPL)
% $ swipl
% ?- write('Hello, World!'), nl.
% Hello, World!
% true.

% Skript-Ausführung
% $ swipl -s script.pl

% Laden und Abfragen
?- consult('program.pl').
?- main.
```

**Besonderheiten:**
- SWI-Prolog bietet einen interaktiven Top-Level-Interpreter (REPL)
- Prädikate können direkt in der REPL definiert und abgefragt werden
- Skripte werden via `consult/1` oder `swipl -s` geladen und ausgeführt
- Auch andere Implementierungen (GNU Prolog, SICStus) bieten interaktive REPLs

**Weiterführende Links:**
- [SWI-Prolog Documentation - Getting Started](https://www.swi-prolog.org/pldoc/man?section=quickstart)

</TabItem>

</Tabs>


## 17.3.4. Multi-target Compilation / Cross-Platform Compilation

Code kann zu verschiedenen Zielplattformen oder Ausführungszielen kompiliert werden.

### Sprachen {#sprachen}

<Tabs availableTabs={['csharp', 'dart', 'fsharp', 'gleam', 'go', 'haskell', 'haxe', 'idris', 'kotlin', 'mercury', 'mojo', 'nim', 'ocaml', 'purescript', 'rust', 'scala', 'swift', 'typescript', 'zig']} yellowTabs={['koka']}>
<TabItem value="csharp" label="C#">

```csharp
// Kompilierung zu verschiedenen Targets
// - CLR (.NET)
// - NativeAOT (Native Code)
// - WebAssembly (Blazor)
class Program
{
    static void Main()
    {
    }
}
```

**Besonderheiten:**
- Unterstützt Kompilierung zu CLR, NativeAOT und WebAssembly
- Cross-Platform Compilation für verschiedene Betriebssysteme

**Weiterführende Links:**
- [C# Documentation](https://learn.microsoft.com/en-us/dotnet/csharp/)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Kompilierung zu verschiedenen Targets
// - CLR (.NET)
// - NativeAOT (Native Code)
// - JavaScript (Fable)
module Main

let main () = ()
```

**Besonderheiten:**
- Unterstützt Kompilierung zu CLR, NativeAOT und JavaScript (via Fable)
- Cross-Platform Compilation

**Weiterführende Links:**
- [F# Documentation](https://learn.microsoft.com/en-us/dotnet/fsharp/)

</TabItem>
<TabItem value="go" label="Go">

```go
// Cross-Platform Compilation zu verschiedenen Zielplattformen
// GOOS=linux GOARCH=amd64 go build
package main

func main() {
}
```

**Besonderheiten:**
- Cross-Platform Compilation für verschiedene Betriebssysteme und Architekturen
- Einfache Zielplattform-Auswahl über Umgebungsvariablen

**Weiterführende Links:**
- [Go Documentation](https://go.dev/doc/)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Kompilierung zu verschiedenen Targets
// - JavaScript, C++, C#, Java, Python, PHP, Lua, Flash, etc.
class Main {
    static function main() {
    }
}
```

**Besonderheiten:**
- Unterstützt Kompilierung zu vielen verschiedenen Zielplattformen
- Einheitliche Sprache für Multi-Target-Entwicklung

**Weiterführende Links:**
- [Haxe Documentation](https://haxe.org/documentation/)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Kompilierung zu verschiedenen Targets
-- - Native Code (GHC)
-- - JavaScript (GHCJS)
-- - WebAssembly
main :: IO ()
main = return ()
```

**Besonderheiten:**
- Unterstützt Kompilierung zu Native Code, JavaScript (GHCJS) und WebAssembly
- Cross-Platform Compilation

**Weiterführende Links:**
- [GHC User's Guide](https://ghc.gitlab.haskell.org/ghc/doc/users_guide/)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Kompilierung zu verschiedenen Targets
-- - Chez Scheme (Standard-Backend)
-- - C (RefC-Backend)
-- - Node.js / JavaScript
-- - Racket
-- - Gambit
main : IO ()
main = putStrLn "Hello from Idris 2!"
```

**Besonderheiten:**
- Unterstützt mehrere Backends: Chez Scheme (Standard), C, JavaScript, Racket, Gambit
- Backend wird mit `--cg` Flag ausgewählt (z.B. `--cg chez`, `--cg refc`, `--cg node`)
- Cross-Platform durch verschiedene Backend-Optionen

**Weiterführende Links:**
- [Idris 2 Documentation](https://idris2.readthedocs.io/)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Kompilierung zu verschiedenen Targets
// - JVM
// - Native (Kotlin/Native)
// - JavaScript (Kotlin/JS)
fun main() {
}
```

**Besonderheiten:**
- Unterstützt Kompilierung zu JVM, Native Code und JavaScript
- Multi-Platform-Projekte mit gemeinsamen Code

**Weiterführende Links:**
- [Kotlin Documentation](https://kotlinlang.org/docs/home.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# Kompilierung zu verschiedenen Targets
# - Native Code
# - WebAssembly
# - GPU (CUDA, etc.)
def main():
    pass
```

**Besonderheiten:**
- Unterstützt Kompilierung zu Native Code, WebAssembly und GPU-Targets
- Cross-Platform Compilation

**Weiterführende Links:**
- [Mojo Documentation](https://docs.modular.com/mojo/)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Kompilierung zu verschiedenen Targets *)
(* - Native Code *)
(* - JavaScript (js_of_ocaml) *)
(* - Bytecode *)
let main () = ()
```

**Besonderheiten:**
- Unterstützt Kompilierung zu Native Code, JavaScript (js_of_ocaml) und Bytecode
- Cross-Platform Compilation

**Weiterführende Links:**
- [OCaml Documentation](https://ocaml.org/docs/)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Kompilierung zu verschiedenen Targets
-- - JavaScript
-- - Erlang (via PureScript-Erlang)
-- - C++ (via PureScript-C++ Backend)
main :: Effect Unit
main = pure unit
```

**Besonderheiten:**
- Unterstützt Kompilierung zu JavaScript, Erlang und C++
- Verschiedene Backends für verschiedene Zielplattformen

**Weiterführende Links:**
- [PureScript Documentation](https://www.purescript.org/learn/)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Cross-Platform Compilation zu verschiedenen Zielplattformen
// rustup target add <target>
fn main() {
}
```

**Besonderheiten:**
- Cross-Platform Compilation für viele verschiedene Zielplattformen
- Einfache Zielplattform-Auswahl über rustup

**Weiterführende Links:**
- [Rust Book](https://doc.rust-lang.org/book/)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Kompilierung zu verschiedenen Targets
// - JVM
// - JavaScript (Scala.js)
// - Native (Scala Native)
object Main {
  def main(args: Array[String]): Unit = {
  }
}
```

**Besonderheiten:**
- Unterstützt Kompilierung zu JVM, JavaScript (Scala.js) und Native Code (Scala Native)
- Multi-Platform-Projekte möglich

**Weiterführende Links:**
- [Scala Documentation](https://docs.scala-lang.org/)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Cross-Platform Compilation zu verschiedenen Zielplattformen
// - iOS, macOS, watchOS, tvOS
// - Linux
// - Windows (seit Swift 5.3)
func main() {
}
```

**Besonderheiten:**
- Cross-Platform Compilation für verschiedene Apple-Plattformen, Linux und Windows
- Einheitliche Sprache für Multi-Platform-Entwicklung

**Weiterführende Links:**
- [Swift Documentation](https://www.swift.org/documentation/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Kompilierung zu verschiedenen JavaScript-Versionen
// - ES5, ES6, ES2015, ES2017, ES2018, ES2019, ES2020, ESNext
function main(): void {
}
```

**Besonderheiten:**
- Kompiliert zu verschiedenen JavaScript-Versionen
- Cross-Platform durch JavaScript-Runtime

**Weiterführende Links:**
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Cross-Platform Compilation zu verschiedenen Zielplattformen
// zig build-exe -target <target>
pub fn main() void {
}
```

**Besonderheiten:**
- Cross-Platform Compilation für viele verschiedene Zielplattformen
- Einfache Zielplattform-Auswahl ohne zusätzliche Konfiguration

**Weiterführende Links:**
- [Zig Documentation](https://ziglang.org/documentation/)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Multi-target Compilation
// Native: $ dart compile exe main.dart -o app
// JavaScript: $ dart compile js main.dart -o app.js
// Kernel: $ dart compile kernel main.dart

void main() {
  print('Plattform-unabhängiger Dart-Code');
}
```

**Besonderheiten:**
- Kompilierung zu nativem x86/ARM-Code (`dart compile exe`)
- Kompilierung zu JavaScript (`dart compile js`)
- Flutter: Kompilierung für Android, iOS, Web, Desktop (Windows, macOS, Linux)
- AOT und JIT-Kompilierung unterstützt

**Weiterführende Links:**
- [Dart Documentation - Platforms](https://dart.dev/overview#platform)

</TabItem>

<TabItem value="gleam" label="Gleam">

```gleam
// Gleam kompiliert zu Erlang und JavaScript
pub fn main() {
  io.println("Läuft auf BEAM oder JavaScript!")
}

// Kompilierung:
// gleam build --target erlang
// gleam build --target javascript
```

**Besonderheiten:**
- Kompiliert zu Erlang (BEAM Bytecode) und JavaScript
- Gleicher Quellcode für beide Targets
- `@external` für target-spezifische Implementierungen
- JavaScript-Target ermöglicht Browser- und Node.js-Nutzung

**Weiterführende Links:**
- [Gleam Documentation - Targets](https://gleam.run/documentation/)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
// Multi-target: C-Backend (primär) und JavaScript-Backend
// koka main.kk              → C-Backend (nativ)
// koka --target=js main.kk  → JavaScript-Backend

fun main()
  println("Läuft auf C oder JavaScript Backend")
```

**Besonderheiten:**
- Primäres Backend: C (kompiliert zu nativem Code)
- Experimentelles JavaScript-Backend für Browser/Node.js
- C-Backend ist ausgereift, JS-Backend hat eingeschränkte Funktionalität
- Wechsel zwischen Backends über `--target` Flag

**Weiterführende Links:**
- [Koka Documentation - Installation](https://koka-lang.github.io/koka/doc/book.html#sec-install)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Multi-target Compilation
# nim c main.nim        # C Backend
# nim cpp main.nim      # C++ Backend
# nim js main.nim       # JavaScript Backend
# nim objc main.nim     # Objective-C Backend

proc main() =
  when defined(js):
    echo "JavaScript Backend"
  elif defined(c):
    echo "C Backend"
  else:
    echo "Anderes Backend"

main()
```

**Besonderheiten:**
- C, C++, JavaScript und Objective-C als Backends
- `when defined()` für backend-spezifischen Code
- Cross-Compilation über `--os` und `--cpu` Flags
- Kompiliert zu nativem Code über C/C++ als Zwischensprache

**Weiterführende Links:**
- [Nim Documentation - Compiler](https://nim-lang.org/docs/nimc.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Multi-target Compilation
% mmc --grade hlc.gc program.m    → C-Backend (nativ)
% mmc --grade java program.m      → Java-Backend (JVM)
% mmc --grade csharp program.m    → C#-Backend (CLR)

:- module program.
:- interface.
:- import_module io.
:- pred main(io::di, io::uo) is det.
:- implementation.
main(!IO) :-
    io.write_string("Plattform-unabhängiger Mercury-Code\n", !IO).
```

**Besonderheiten:**
- C-Backend (primär): Kompiliert zu C-Code, dann zu nativem Maschinencode
- Java-Backend: Kompiliert zu Java-Quellcode für die JVM
- C#-Backend: Kompiliert zu C#-Quellcode für die CLR
- Backend-Auswahl über `--grade` Flag beim Kompilieren

**Weiterführende Links:**
- [Mercury Documentation - Compilation Grades](https://www.mercurylang.org/information/doc-release/mercury_user_guide/Compilation-model-options.html)

</TabItem>

</Tabs>

