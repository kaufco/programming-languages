---
slug: /ausfuehrungsmodell/execution-targets
title: 17.3. Execution Targets
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 17.3. Execution Targets

Compilation targets: Native Code, VM, Interpreter.

## 17.3.1. Native Code

Code is compiled directly to machine code and executed natively on the target platform.

### Languages {#sprachen}

<Tabs availableTabs={['ada', 'c', 'carbon', 'common-lisp', 'cpp', 'crystal', 'd', 'fortran', 'go', 'haskell', 'idris', 'julia', 'koka', 'lean4', 'mercury', 'nim', 'object-pascal', 'objective-c', 'ocaml', 'odin', 'prolog', 'roc', 'rust', 'swift', 'v', 'zig']}>
<TabItem value="ada" label="Ada">

```ada
-- Compilation to Native Code
procedure Main is
begin
   null;
end Main;
```

**Special features:**
- Compiles directly to machine code for the target platform
- Supports cross-compilation for various target architectures

**Further reading:**
- [Ada Reference Manual](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-TOC.html)

</TabItem>
<TabItem value="c" label="C">

```c
// Compilation to Native Code
int main(void) {
    return 0;
}
```

**Special features:**
- Classic example of native code compilation
- Direct translation to machine code by compilers like GCC, Clang

**Further reading:**
- [C Standard Documentation](https://www.iso.org/standard/74528.html)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Compilation to Native Code
package Main api;

fn Main() -> i32 {
  return 0;
}
```

**Special features:**
- Compiles to native code similar to C++
- Goal: Interoperability with C++ with modern syntax

**Further reading:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Compilation to Native Code
int main() {
    return 0;
}
```

**Special features:**
- Compiles directly to machine code
- Supports various optimization levels

**Further reading:**
- [C++ Reference](https://en.cppreference.com/)

</TabItem>
<TabItem value="crystal" label="Crystal">

```ruby
# Compilation to Native Code
def main
  0
end
```

**Special features:**
- Compiles to native code with LLVM
- Ruby-like syntax with static typing

**Further reading:**
- [Crystal Documentation](https://crystal-lang.org/docs/)

</TabItem>
<TabItem value="d" label="D">

```d
// Compilation to Native Code
void main() {
}
```

**Special features:**
- Compiles to native code
- Supports various backends (DMD, GDC, LDC)

**Further reading:**
- [D Language Documentation](https://dlang.org/documentation.html)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Compilation to Native Code
program main
    implicit none
end program main
```

**Special features:**
- Compiles to native code
- Optimized for numerical calculations

**Further reading:**
- [Fortran Standard](https://wg5-fortran.org/)

</TabItem>
<TabItem value="go" label="Go">

```go
// Compilation to Native Code
package main

func main() {
}
```

**Special features:**
- Compiles to native code without external dependencies
- Static linking by default

**Further reading:**
- [Go Documentation](https://go.dev/doc/)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Compilation to Native Code with GHC
main :: IO ()
main = return ()
```

**Special features:**
- GHC compiles to native code
- Supports cross-compilation

**Further reading:**
- [GHC User's Guide](https://ghc.gitlab.haskell.org/ghc/doc/users_guide/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Compilation to Native Code
proc main() =
  discard

main()
```

**Special features:**
- Compiles to native code via C or C++ as intermediate language
- Supports various backends

**Further reading:**
- [Nim Documentation](https://nim-lang.org/documentation.html)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objective-c
// Compilation to Native Code
#import <Foundation/Foundation.h>

int main(int argc, const char * argv[]) {
    return 0;
}
```

**Special features:**
- Compiles to native code with Clang/LLVM
- Uses Objective-C Runtime

**Further reading:**
- [Objective-C Documentation](https://developer.apple.com/documentation/objectivec)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Compilation to Native Code
program Main;
begin
end.
```

**Special features:**
- Compiles to native code
- Supports various compilers (Free Pascal, Delphi)

**Further reading:**
- [Free Pascal Documentation](https://www.freepascal.org/docs.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Compilation to Native Code *)
let main () = ()
```

**Special features:**
- OCaml compiles to native code
- Also supports bytecode compilation

**Further reading:**
- [OCaml Documentation](https://ocaml.org/docs/)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Compilation to Native Code
package main

main :: proc() {
}
```

**Special features:**
- Compiles to native code
- C-like performance with modern syntax

**Further reading:**
- [Odin Documentation](https://odin-lang.org/docs/)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Compilation to Native Code
fn main() {
}
```

**Special features:**
- Compiles to native code with LLVM
- Static linking by default

**Further reading:**
- [Rust Book](https://doc.rust-lang.org/book/)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Compilation to Native Code
func main() {
}
```

**Special features:**
- Compiles to native code with Swift Compiler
- Supports various target platforms

**Further reading:**
- [Swift Documentation](https://www.swift.org/documentation/)

</TabItem>
<TabItem value="v" label="V">

```v
// Compilation to Native Code
fn main() {
}
```

**Special features:**
- Compiles to native code
- Fast compilation

**Further reading:**
- [V Documentation](https://docs.vlang.io/)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Compilation to Native Code
pub fn main() void {
}
```

**Special features:**
- Compiles to native code
- Supports cross-compilation without additional configuration

**Further reading:**
- [Zig Documentation](https://ziglang.org/documentation/)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; SBCL compiles to native machine code
(defun fibonacci (n)
  (declare (optimize (speed 3) (safety 0))
           (type fixnum n))
  (if (<= n 1) n
      (+ (fibonacci (1- n)) (fibonacci (- n 2)))))

;; Trigger compilation explicitly
(compile 'fibonacci)

;; Show disassembly
(disassemble 'fibonacci)
```

**Special features:**
- SBCL, CCL, CMUCL and others compile directly to native machine code
- `(declare (optimize ...))` controls compiler optimizations
- `compile` compiles individual functions
- `compile-file` compiles entire files to FASL (Fast Load) files
- Some implementations (e.g. CLISP) interpret or compile to bytecode

**Further reading:**
- [SBCL Manual - Compiler](http://www.sbcl.org/manual/#Compiler)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Compilation to native code via C backend
-- idris2 --cg refc -o program Main.idr
main : IO ()
main = putStrLn "Hello, World!"
```

**Special features:**
- Compilation to C code, then to native code with C compiler
- RefC backend generates reference-counted C code
- Alternative: Chez Scheme backend (standard) generates Scheme code

**Further reading:**
- [Idris 2 Documentation](https://idris2.readthedocs.io/)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Julia compiles to native code via LLVM JIT
function add(a::Int, b::Int)
    a + b
end

# Show generated native code
@code_native add(1, 2)

# Show LLVM IR
@code_llvm add(1, 2)

# Show type-inferred code
@code_typed add(1, 2)
```

**Special features:**
- JIT compilation to native machine code via LLVM
- First call compiles (compile-time overhead), then native speed
- `@code_native`, `@code_llvm`, `@code_typed` for inspection
- Ahead-of-time compilation possible with PackageCompiler.jl

**Further reading:**
- [Julia Documentation - Performance Tips](https://docs.julialang.org/en/v1/manual/performance-tips/)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
// Koka compiles to C code, then to native machine code
fun main()
  println("Hello, World!")

// Compilation:
// koka main.kk          → generates C code and compiles to native binary
// koka --optimize main.kk  → optimized compilation
```

**Special features:**
- Compiles to C code, which is then compiled to native code with a C compiler (gcc/clang)
- Perceus reference counting is implemented in the generated C code
- Optimizations at C level by the C compiler
- Small, standalone binaries without runtime VM

**Further reading:**
- [Koka Documentation - Compilation](https://koka-lang.github.io/koka/doc/book.html#sec-install)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Lean 4 compiles to C code, then to native machine code
def main : IO Unit :=
  IO.println "Hello, World!"

-- Compilation:
-- lake build        → generates C code and compiles to native binary
-- lake build +release → optimized compilation
```

**Special features:**
- Compiles to C code, which is then compiled to native code with a C compiler (gcc/clang).
- Reference counting is implemented in the generated C code.
- Lake as build system orchestrates the compilation process.
- Small, standalone binaries without runtime VM.

**Further reading:**
- [Lean 4 Documentation - Compilation](https://lean-lang.org/lean4/doc/setup.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Roc compiles to native machine code
-- Uses LLVM as backend
```

**Special features:**
- Compiles to native machine code via LLVM
- Ahead-of-Time Compilation (AOT)
- No runtime or VM required

**Further reading:**
- [Roc Documentation](https://www.roc-lang.org/)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% GNU Prolog compiles to native machine code
% Compilation: gplc program.pl -o program

:- initialization(main).

main :-
    write('Hello, World!'), nl,
    halt.

% Execution: ./program
```

**Special features:**
- GNU Prolog compiles via WAM (Warren Abstract Machine) to native C code and then to machine code
- Generates standalone, executable binaries without external dependencies
- Ahead-of-Time Compilation (AOT)
- Other implementations (SWI-Prolog, SICStus) primarily compile to bytecode

**Further reading:**
- [GNU Prolog Documentation - Compiling](http://www.gprolog.org/manual/gprolog.html#sec11)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Compilation to Native Code via C backend
% mmc --grade hlc.gc program.m
:- module program.
:- interface.
:- import_module io.
:- pred main(io::di, io::uo) is det.
:- implementation.
main(!IO) :-
    io.write_string("Hello, World!\n", !IO).
```

**Special features:**
- Mercury compiles to C code, which is then compiled to native machine code with GCC/Clang
- Primary backend: `hlc.gc` (High-Level C with Garbage Collection)
- Generates standalone binaries without external runtime VM
- Supports cross-compilation via C compiler flags

**Further reading:**
- [Mercury Documentation - Compilation Grades](https://www.mercurylang.org/information/doc-release/mercury_user_guide/Compilation-model-options.html)

</TabItem>
</Tabs>


## 17.3.2. Virtual Machine (JVM, CLR, etc.)

Code is compiled to bytecode and executed on a virtual machine.

### Languages {#sprachen}

<Tabs availableTabs={['clojure', 'csharp', 'dart', 'elixir', 'erlang', 'fsharp', 'gleam', 'groovy', 'java', 'kotlin', 'lua', 'mercury', 'prolog', 'scala', 'vbnet']}>
<TabItem value="clojure" label="Clojure">

```clojure
;; Compilation to JVM Bytecode
(defn main []
  nil)
```

**Special features:**
- Compiles to JVM bytecode
- Runs on the Java Virtual Machine

**Further reading:**
- [Clojure Documentation](https://clojure.org/docs/getting_started)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Compilation to IL (Intermediate Language)
class Program
{
    static void Main()
    {
    }
}
```

**Special features:**
- Compiles to IL (Intermediate Language)
- Runs on the Common Language Runtime (CLR)
- Also supports NativeAOT for native code compilation

**Further reading:**
- [C# Documentation](https://learn.microsoft.com/en-us/dotnet/csharp/)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Compilation to BEAM Bytecode
defmodule Main do
  def main do
  end
end
```

**Special features:**
- Compiles to BEAM bytecode
- Runs on the BEAM Virtual Machine

**Further reading:**
- [Elixir Documentation](https://elixir-lang.org/docs.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% Compilation to BEAM Bytecode
main() ->
    ok.
```

**Special features:**
- Compiles to BEAM bytecode
- Runs on the BEAM Virtual Machine

**Further reading:**
- [Erlang Documentation](https://www.erlang.org/docs)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Compilation to IL (Intermediate Language)
module Main

let main () = ()
```

**Special features:**
- Compiles to IL (Intermediate Language)
- Runs on the Common Language Runtime (CLR)
- Also supports NativeAOT for native code compilation

**Further reading:**
- [F# Documentation](https://learn.microsoft.com/en-us/dotnet/fsharp/)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// Compilation to BEAM Bytecode
pub fn main() {
  Nil
}
```

**Special features:**
- Compiles to BEAM bytecode
- Runs on the BEAM Virtual Machine

**Further reading:**
- [Gleam Documentation](https://gleam.run/documentation/)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Compilation to JVM Bytecode
def main() {
}
```

**Special features:**
- Compiles to JVM bytecode
- Runs on the Java Virtual Machine

**Further reading:**
- [Groovy Documentation](https://groovy-lang.org/documentation.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Compilation to JVM Bytecode
class Main {
    public static void main(String[] args) {
    }
}
```

**Special features:**
- Compiles to JVM bytecode
- Runs on the Java Virtual Machine
- Platform-independent execution

**Further reading:**
- [Java Documentation](https://docs.oracle.com/javase/)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Compilation to JVM Bytecode
fun main() {
}
```

**Special features:**
- Compiles to JVM bytecode
- Runs on the Java Virtual Machine
- Also supports Kotlin/Native for native code compilation

**Further reading:**
- [Kotlin Documentation](https://kotlinlang.org/docs/home.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Compilation to Lua Bytecode
function main()
end
```

**Special features:**
- Compiles to Lua bytecode
- Runs on the Lua Virtual Machine

**Further reading:**
- [Lua Documentation](https://www.lua.org/manual/5.4/)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Compilation to JVM Bytecode
object Main {
  def main(args: Array[String]): Unit = {
  }
}
```

**Special features:**
- Compiles to JVM bytecode
- Runs on the Java Virtual Machine

**Further reading:**
- [Scala Documentation](https://docs.scala-lang.org/)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Compilation to IL (Intermediate Language)
Module Main
    Sub Main()
    End Sub
End Module
```

**Special features:**
- Compiles to IL (Intermediate Language)
- Runs on the Common Language Runtime (CLR)

**Further reading:**
- [VB.NET Documentation](https://learn.microsoft.com/en-us/dotnet/visual-basic/)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Dart VM
// Dart code is executed on the Dart Virtual Machine
// Development mode: JIT compilation for fast iterations
// $ dart run main.dart

void main() {
  print('Runs on the Dart VM');
}

// Production mode: AOT compilation to native code
// $ dart compile exe main.dart
```

**Special features:**
- Dart VM with JIT compilation for development (Hot Reload in Flutter)
- AOT compilation to native machine code for production
- Dart VM supports isolates for parallelism
- No JVM or CLR - own VM

**Further reading:**
- [Dart Documentation - Dart VM](https://dart.dev/overview#platform)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% SWI-Prolog compiles to WAM bytecode
% (Warren Abstract Machine)

:- initialization(main).

main :-
    write('Runs on the WAM'), nl.

% Execution: swipl program.pl
```

**Special features:**
- Prolog is typically compiled to WAM bytecode (Warren Abstract Machine)
- WAM is a language-specific VM, optimized for unification and backtracking
- SWI-Prolog, SICStus Prolog and YAP use WAM-based VMs
- No JVM/CLR/BEAM – own VM architecture

**Further reading:**
- [SWI-Prolog Documentation](https://www.swi-prolog.org/pldoc/man?section=overview)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Compilation to Java bytecode (JVM)
% mmc --grade java program.m
% java -cp Mercury/classpath program

% Compilation to C# IL (CLR)
% mmc --grade csharp program.m

:- module program.
:- interface.
:- import_module io.
:- pred main(io::di, io::uo) is det.
:- implementation.
main(!IO) :-
    io.write_string("Runs on JVM or CLR\n", !IO).
```

**Special features:**
- Java backend (`--grade java`): Compiles to Java source code, then to JVM bytecode
- C# backend (`--grade csharp`): Compiles to C# source code, then to CLR IL
- Both backends are less mature than the primary C backend
- Same Mercury source code for all backends

**Further reading:**
- [Mercury Documentation - Compilation Grades](https://www.mercurylang.org/information/doc-release/mercury_user_guide/Compilation-model-options.html)

</TabItem>
</Tabs>


## 17.3.3. Interpreter

Code is executed directly by the interpreter, without prior compilation to machine code or bytecode.

### Languages {#sprachen}

<Tabs availableTabs={['common-lisp', 'groovy', 'javascript', 'julia', 'lua', 'matlab', 'octave', 'perl', 'php', 'prolog', 'python', 'r', 'racket', 'ruby', 'scheme', 'typescript', 'wolfram-language']} orangeTabs={['elm']}>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Execution by interpreter
(defun main ()
  nil)
```

**Special features:**
- Primarily executed by interpreter
- Also supports compilation to native code

**Further reading:**
- [Common Lisp HyperSpec](http://www.lispworks.com/documentation/HyperSpec/Front/)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Elm compiles to JavaScript
-- elm make src/Main.elm --output=main.js
main =
    text "Hello, World!"
```

**Special features:**
- Elm is a compiled language (no interpreter)
- Compiles to optimized JavaScript
- `elm make` generates .js files
- `elm reactor` provides a development server with live reloading

**Further reading:**
- [Elm Documentation - Install](https://guide.elm-lang.org/install/elm.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Execution by interpreter/JIT compiler
function main() {
}
```

**Special features:**
- Interpreted by JavaScript engines (V8, SpiderMonkey, etc.)
- Modern engines use JIT compilation at runtime

**Further reading:**
- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% Execution by MATLAB interpreter
function main()
end
```

**Special features:**
- Executed by MATLAB interpreter
- JIT compilation for performance optimization

**Further reading:**
- [MATLAB Documentation](https://www.mathworks.com/help/matlab/)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
% Execution by Octave interpreter
function main()
end
```

**Special features:**
- Executed by Octave interpreter
- MATLAB-compatible

**Further reading:**
- [GNU Octave Documentation](https://docs.octave.org/)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Execution by Perl interpreter
sub main {
}
```

**Special features:**
- Executed by Perl interpreter
- Also supports compilation to bytecode

**Further reading:**
- [Perl Documentation](https://perldoc.perl.org/)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
// Execution by PHP interpreter (Zend Engine)
function main() {
}
?>
```

**Special features:**
- Executed by PHP interpreter (Zend Engine)
- JIT compilation since PHP 8.0

**Further reading:**
- [PHP Documentation](https://www.php.net/docs.php)

</TabItem>
<TabItem value="python" label="Python">

```python
# Execution by Python interpreter (CPython)
def main():
    pass
```

**Special features:**
- Executed by Python interpreter (CPython)
- Also supports other implementations (PyPy, Jython, etc.)

**Further reading:**
- [Python Documentation](https://docs.python.org/)

</TabItem>
<TabItem value="r" label="R">

```r
# Execution by R interpreter
main <- function() {
}
```

**Special features:**
- Executed by R interpreter
- Optimized for statistical calculations

**Further reading:**
- [R Documentation](https://www.r-project.org/help.html)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
;; Execution by Racket runtime
(define (main)
  (displayln "Hello, World!"))

(main)
```

**Special features:**
- Code is compiled to bytecode and then executed
- Racket CS (since 2019) uses Chez Scheme as backend with JIT compilation
- Also supports interactive evaluation (REPL)

**Further reading:**
- [Racket Documentation](https://docs.racket-lang.org/)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Execution by Ruby interpreter (MRI/YARV)
def main
end
```

**Special features:**
- Executed by Ruby interpreter (MRI/YARV)
- Also supports other implementations (JRuby, Rubinius, etc.)

**Further reading:**
- [Ruby Documentation](https://docs.ruby-lang.org/)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; Execution by Scheme interpreter
(define (main)
  (void))
```

**Special features:**
- Primarily executed by interpreter
- Also supports compilation to native code

**Further reading:**
- [R7RS Scheme Specification](https://small.r7rs.org/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Compilation to JavaScript, then execution by interpreter
function main(): void {
}
```

**Special features:**
- Compiles to JavaScript, which is then executed by JavaScript interpreter
- Type checking at compile time

**Further reading:**
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```wolfram
(* Execution by Wolfram Engine *)
main[] := Null
```

**Special features:**
- Interpreted by Wolfram Engine
- Supports symbolic calculations

**Further reading:**
- [Wolfram Language Documentation](https://reference.wolfram.com/language/)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Groovy can be executed as interpreter

// GroovyShell for dynamic code execution
def shell = new GroovyShell()
def result = shell.evaluate('2 + 3') // 5

// Scripts can be executed directly:
// $ groovy script.groovy

// GroovyConsole for interactive development
// $ groovyConsole
```

**Special features:**
- `groovy` command executes scripts directly (without explicit compilation)
- `GroovyShell` for dynamic code evaluation at runtime
- `GroovyConsole` as interactive GUI console
- Also supports compiled execution as JVM bytecode

**Further reading:**
- [Groovy Documentation - GroovyShell](https://groovy-lang.org/integrating.html#_groovyshell)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Julia REPL (Read-Eval-Print Loop)
# Interactive execution
julia> 1 + 2
3

julia> x = "Hello"
"Hello"

# Script execution
# julia script.jl
```

**Special features:**
- Interactive REPL for exploratory programming
- Scripts are compiled via JIT and executed (not a pure interpreter)
- Julia is a JIT-compiled language, not interpreted in the classical sense
- REPL supports Help mode (`?`), Shell mode (`;`), Package mode (`]`)

**Further reading:**
- [Julia Documentation - The Julia REPL](https://docs.julialang.org/en/v1/stdlib/REPL/)

</TabItem>

<TabItem value="lua" label="Lua">

```lua
-- Lua is executed via interpreter
-- Execution: lua script.lua

-- Interactive mode (REPL)
-- $ lua
-- > print("Hello, World!")

-- Compilation to bytecode (optional)
-- $ luac -o script.luac script.lua
-- $ lua script.luac

-- Embedding: Lua is often used as an embedded scripting language
-- C host program creates Lua state and executes scripts
```

**Special features:**
- Lua compiles source code to bytecode and executes it on the Lua VM
- `lua` is the standard interpreter (REPL and script execution)
- `luac` can precompile bytecode
- LuaJIT provides a JIT compiler for significantly higher performance
- Lua is often used as an embedded scripting language in C/C++ applications

**Further reading:**
- [Lua Reference Manual - Lua Stand-alone](https://www.lua.org/manual/5.4/manual.html#7)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Interactive execution in Prolog interpreter (REPL)
% $ swipl
% ?- write('Hello, World!'), nl.
% Hello, World!
% true.

% Script execution
% $ swipl -s script.pl

% Load and query
?- consult('program.pl').
?- main.
```

**Special features:**
- SWI-Prolog provides an interactive top-level interpreter (REPL)
- Predicates can be defined and queried directly in the REPL
- Scripts are loaded and executed via `consult/1` or `swipl -s`
- Other implementations (GNU Prolog, SICStus) also provide interactive REPLs

**Further reading:**
- [SWI-Prolog Documentation - Getting Started](https://www.swi-prolog.org/pldoc/man?section=quickstart)

</TabItem>

</Tabs>


## 17.3.4. Multi-target Compilation / Cross-Platform Compilation

Code can be compiled to various target platforms or execution targets.

### Languages {#sprachen}

<Tabs availableTabs={['csharp', 'dart', 'fsharp', 'gleam', 'go', 'haskell', 'haxe', 'idris', 'kotlin', 'mercury', 'mojo', 'nim', 'ocaml', 'purescript', 'rust', 'scala', 'swift', 'typescript', 'zig']} yellowTabs={['koka']}>
<TabItem value="csharp" label="C#">

```csharp
// Compilation to various targets
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

**Special features:**
- Supports compilation to CLR, NativeAOT and WebAssembly
- Cross-platform compilation for various operating systems

**Further reading:**
- [C# Documentation](https://learn.microsoft.com/en-us/dotnet/csharp/)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Compilation to various targets
// - CLR (.NET)
// - NativeAOT (Native Code)
// - JavaScript (Fable)
module Main

let main () = ()
```

**Special features:**
- Supports compilation to CLR, NativeAOT and JavaScript (via Fable)
- Cross-platform compilation

**Further reading:**
- [F# Documentation](https://learn.microsoft.com/en-us/dotnet/fsharp/)

</TabItem>
<TabItem value="go" label="Go">

```go
// Cross-platform compilation to various target platforms
// GOOS=linux GOARCH=amd64 go build
package main

func main() {
}
```

**Special features:**
- Cross-platform compilation for various operating systems and architectures
- Simple target platform selection via environment variables

**Further reading:**
- [Go Documentation](https://go.dev/doc/)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Compilation to various targets
// - JavaScript, C++, C#, Java, Python, PHP, Lua, Flash, etc.
class Main {
    static function main() {
    }
}
```

**Special features:**
- Supports compilation to many different target platforms
- Unified language for multi-target development

**Further reading:**
- [Haxe Documentation](https://haxe.org/documentation/)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Compilation to various targets
-- - Native Code (GHC)
-- - JavaScript (GHCJS)
-- - WebAssembly
main :: IO ()
main = return ()
```

**Special features:**
- Supports compilation to native code, JavaScript (GHCJS) and WebAssembly
- Cross-platform compilation

**Further reading:**
- [GHC User's Guide](https://ghc.gitlab.haskell.org/ghc/doc/users_guide/)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Compilation to various targets
-- - Chez Scheme (standard backend)
-- - C (RefC backend)
-- - Node.js / JavaScript
-- - Racket
-- - Gambit
main : IO ()
main = putStrLn "Hello from Idris 2!"
```

**Special features:**
- Supports multiple backends: Chez Scheme (standard), C, JavaScript, Racket, Gambit
- Backend is selected with `--cg` flag (e.g. `--cg chez`, `--cg refc`, `--cg node`)
- Cross-platform through various backend options

**Further reading:**
- [Idris 2 Documentation](https://idris2.readthedocs.io/)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Compilation to various targets
// - JVM
// - Native (Kotlin/Native)
// - JavaScript (Kotlin/JS)
fun main() {
}
```

**Special features:**
- Supports compilation to JVM, native code and JavaScript
- Multi-platform projects with shared code

**Further reading:**
- [Kotlin Documentation](https://kotlinlang.org/docs/home.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# Compilation to various targets
# - Native Code
# - WebAssembly
# - GPU (CUDA, etc.)
def main():
    pass
```

**Special features:**
- Supports compilation to native code, WebAssembly and GPU targets
- Cross-platform compilation

**Further reading:**
- [Mojo Documentation](https://docs.modular.com/mojo/)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Compilation to various targets *)
(* - Native Code *)
(* - JavaScript (js_of_ocaml) *)
(* - Bytecode *)
let main () = ()
```

**Special features:**
- Supports compilation to native code, JavaScript (js_of_ocaml) and bytecode
- Cross-platform compilation

**Further reading:**
- [OCaml Documentation](https://ocaml.org/docs/)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Compilation to various targets
-- - JavaScript
-- - Erlang (via PureScript-Erlang)
-- - C++ (via PureScript-C++ backend)
main :: Effect Unit
main = pure unit
```

**Special features:**
- Supports compilation to JavaScript, Erlang and C++
- Various backends for various target platforms

**Further reading:**
- [PureScript Documentation](https://www.purescript.org/learn/)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Cross-platform compilation to various target platforms
// rustup target add <target>
fn main() {
}
```

**Special features:**
- Cross-platform compilation for many different target platforms
- Simple target platform selection via rustup

**Further reading:**
- [Rust Book](https://doc.rust-lang.org/book/)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Compilation to various targets
// - JVM
// - JavaScript (Scala.js)
// - Native (Scala Native)
object Main {
  def main(args: Array[String]): Unit = {
  }
}
```

**Special features:**
- Supports compilation to JVM, JavaScript (Scala.js) and native code (Scala Native)
- Multi-platform projects possible

**Further reading:**
- [Scala Documentation](https://docs.scala-lang.org/)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Cross-platform compilation to various target platforms
// - iOS, macOS, watchOS, tvOS
// - Linux
// - Windows (since Swift 5.3)
func main() {
}
```

**Special features:**
- Cross-platform compilation for various Apple platforms, Linux and Windows
- Unified language for multi-platform development

**Further reading:**
- [Swift Documentation](https://www.swift.org/documentation/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Compilation to various JavaScript versions
// - ES5, ES6, ES2015, ES2017, ES2018, ES2019, ES2020, ESNext
function main(): void {
}
```

**Special features:**
- Compiles to various JavaScript versions
- Cross-platform through JavaScript runtime

**Further reading:**
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Cross-platform compilation to various target platforms
// zig build-exe -target <target>
pub fn main() void {
}
```

**Special features:**
- Cross-platform compilation for many different target platforms
- Simple target platform selection without additional configuration

**Further reading:**
- [Zig Documentation](https://ziglang.org/documentation/)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Multi-target compilation
// Native: $ dart compile exe main.dart -o app
// JavaScript: $ dart compile js main.dart -o app.js
// Kernel: $ dart compile kernel main.dart

void main() {
  print('Platform-independent Dart code');
}
```

**Special features:**
- Compilation to native x86/ARM code (`dart compile exe`)
- Compilation to JavaScript (`dart compile js`)
- Flutter: Compilation for Android, iOS, Web, Desktop (Windows, macOS, Linux)
- AOT and JIT compilation supported

**Further reading:**
- [Dart Documentation - Platforms](https://dart.dev/overview#platform)

</TabItem>

<TabItem value="gleam" label="Gleam">

```gleam
// Gleam compiles to Erlang and JavaScript
pub fn main() {
  io.println("Runs on BEAM or JavaScript!")
}

// Compilation:
// gleam build --target erlang
// gleam build --target javascript
```

**Special features:**
- Compiles to Erlang (BEAM bytecode) and JavaScript
- Same source code for both targets
- `@external` for target-specific implementations
- JavaScript target enables browser and Node.js usage

**Further reading:**
- [Gleam Documentation - Targets](https://gleam.run/documentation/)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
// Multi-target: C backend (primary) and JavaScript backend
// koka main.kk              → C backend (native)
// koka --target=js main.kk  → JavaScript backend

fun main()
  println("Runs on C or JavaScript backend")
```

**Special features:**
- Primary backend: C (compiles to native code)
- Experimental JavaScript backend for browser/Node.js
- C backend is mature, JS backend has limited functionality
- Switch between backends via `--target` flag

**Further reading:**
- [Koka Documentation - Installation](https://koka-lang.github.io/koka/doc/book.html#sec-install)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Multi-target compilation
# nim c main.nim        # C backend
# nim cpp main.nim      # C++ backend
# nim js main.nim       # JavaScript backend
# nim objc main.nim     # Objective-C backend

proc main() =
  when defined(js):
    echo "JavaScript Backend"
  elif defined(c):
    echo "C Backend"
  else:
    echo "Other Backend"

main()
```

**Special features:**
- C, C++, JavaScript and Objective-C as backends
- `when defined()` for backend-specific code
- Cross-compilation via `--os` and `--cpu` flags
- Compiles to native code via C/C++ as intermediate language

**Further reading:**
- [Nim Documentation - Compiler](https://nim-lang.org/docs/nimc.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Multi-target compilation
% mmc --grade hlc.gc program.m    → C backend (native)
% mmc --grade java program.m      → Java backend (JVM)
% mmc --grade csharp program.m    → C# backend (CLR)

:- module program.
:- interface.
:- import_module io.
:- pred main(io::di, io::uo) is det.
:- implementation.
main(!IO) :-
    io.write_string("Platform-independent Mercury code\n", !IO).
```

**Special features:**
- C backend (primary): Compiles to C code, then to native machine code
- Java backend: Compiles to Java source code for the JVM
- C# backend: Compiles to C# source code for the CLR
- Backend selection via `--grade` flag when compiling

**Further reading:**
- [Mercury Documentation - Compilation Grades](https://www.mercurylang.org/information/doc-release/mercury_user_guide/Compilation-model-options.html)

</TabItem>

</Tabs>

