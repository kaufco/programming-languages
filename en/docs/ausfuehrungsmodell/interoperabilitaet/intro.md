---
slug: /ausfuehrungsmodell/interoperabilitaet
title: 17.4. Interoperability
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 17.4. Interoperability

FFI, ABI interop, and cross-language integration.

## 17.4.1. FFI (Foreign Function Interfaces)

Mechanisms for calling functions from other programming languages, typically from C/C++ libraries.

### Languages {#sprachen}

<Tabs availableTabs={['ada', 'c', 'common-lisp', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'elixir', 'erlang', 'fortran', 'fsharp', 'gleam', 'go', 'groovy', 'haskell', 'idris', 'java', 'julia', 'koka', 'kotlin', 'lean4', 'lua', 'matlab', 'mercury', 'nim', 'object-pascal', 'objective-c', 'ocaml', 'octave', 'odin', 'perl', 'php', 'prolog', 'purescript', 'python', 'r', 'racket', 'roc', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'v', 'vbnet', 'wolfram-language', 'zig']}>
<TabItem value="ada" label="Ada">

```ada
-- Declaration of an external C function
with Interfaces.C;
procedure Call_External is
   function C_Sqrt (X : Interfaces.C.Double) return Interfaces.C.Double;
   pragma Import (C, C_Sqrt, "sqrt");
   
   Result : Interfaces.C.Double;
begin
   Result := C_Sqrt (4.0);
end Call_External;
```

**Special features:**
- Uses `Interfaces.C` for C interoperability
- `pragma Import` binds external functions
- Also supports C++ via binding generators

**Further reading:**
- [Ada Reference Manual - Interfacing with C](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-B-3.html)

</TabItem>
<TabItem value="c" label="C">

```c
// C can work directly with other C functions
// External functions are included via header files
#include <math.h>

double result = sqrt(4.0);
```

**Special features:**
- Native interoperability with C++ via `extern "C"`
- Can directly include assembly code
- Standard ABI enables interop with many languages

**Further reading:**
- [C Standard Library](https://en.cppreference.com/w/c)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Required: using System.Runtime.InteropServices;
// P/Invoke for Windows
[DllImport("kernel32.dll", SetLastError = true)]
static extern bool Beep(uint dwFreq, uint dwDuration);

// Native AOT with LibraryImport (since .NET 7)
[LibraryImport("mylib.dll")]
static partial int MyFunction(int x);

Beep(1000, 500);
```

**Special features:**
- P/Invoke for Windows, Mono.Posix for Unix
- `LibraryImport` for Native AOT (since .NET 7)
- Also supports COM interop

**Further reading:**
- [Microsoft C# P/Invoke Documentation](https://learn.microsoft.com/en-us/dotnet/standard/native-interop/pinvoke)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// C++ can directly call C functions
extern "C" {
    #include <math.h>
}

double result = sqrt(4.0);

// C++ can also call C++ functions from other compilation units
// via header files and linker
```

**Special features:**
- `extern "C"` for C compatibility
- Name mangling for C++ functions
- Can directly include assembly code

**Further reading:**
- [C++ Reference - Language Linking](https://en.cppreference.com/w/cpp/language/language_linkage)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# FFI via libffi
@[Link("m")]
lib LibM
  fun sqrt(x : Float64) : Float64
end

result = LibM.sqrt(4.0)
```

**Special features:**
- Uses `lib` blocks for FFI declarations
- Automatic type conversion between Crystal and C types
- Supports callbacks

**Further reading:**
- [Crystal FFI Documentation](https://crystal-lang.org/reference/guides/c_bindings/)

</TabItem>
<TabItem value="d" label="D">

```d
// Import external C function
extern(C) {
    double sqrt(double x);
}

void main() {
    double result = sqrt(4.0);
}
```

**Special features:**
- `extern(C)` for C compatibility
- `extern(C++)` for C++ interop
- Also directly supports Windows APIs

**Further reading:**
- [D Language - Interfacing to C](https://dlang.org/spec/interfaceToC.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
import 'dart:ffi';
import 'dart:io';

// FFI since Dart 2.5
typedef NativeSqrt = Double Function(Double);
typedef DartSqrt = double Function(double);

void main() {
  final dylib = DynamicLibrary.open('libm.so.6');
  final sqrtPointer = dylib.lookup<NativeFunction<NativeSqrt>>('sqrt');
  final sqrt = sqrtPointer.asFunction<DartSqrt>();
  
  final result = sqrt(4.0);
}
```

**Special features:**
- FFI since Dart 2.5
- Uses `dart:ffi` for native libraries
- Supports callbacks and structs

**Further reading:**
- [Dart FFI Documentation](https://dart.dev/guides/libraries/c-interop)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# NIFs (Native Implemented Functions)
defmodule MathNif do
  @on_load :load_nif
  
  def load_nif do
    :erlang.load_nif('./math_nif', 0)
  end
  
  def sqrt(_), do: :erlang.nif_error(:nif_not_loaded)
end

# Or via ports for external programs
port = Port.open({:spawn, "external_program"}, [:binary])
```

**Special features:**
- NIFs for native C functions
- Ports for external programs
- NIFs run in the BEAM process (can crash the VM)

**Further reading:**
- [Elixir NIFs Documentation](https://hexdocs.pm/elixir/Port.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% NIFs (Native Implemented Functions)
-module(math_nif).
-on_load(init/0).

init() ->
    ok = erlang:load_nif("./math_nif", 0).

sqrt(_X) ->
    erlang:nif_error(nif_not_loaded).
```

**Special features:**
- NIFs for native C functions
- Ports for external programs
- NIFs run in the BEAM process

**Further reading:**
- [Erlang NIFs Documentation](https://www.erlang.org/doc/tutorial/nif.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Required: open System.Runtime.InteropServices
// P/Invoke
[<DllImport("kernel32.dll", SetLastError = true)>]
extern bool Beep(uint dwFreq, uint dwDuration)

Beep(1000u, 500u)
```

**Special features:**
- Uses P/Invoke like C#
- Also supports COM interop
- Native AOT with `LibraryImport` (since .NET 7)

**Further reading:**
- [F# Interop Documentation](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/functions/external-functions)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! ISO_C_BINDING for C interoperability
use iso_c_binding

interface
    function c_sqrt(x) bind(c, name='sqrt')
        import :: c_double
        real(c_double), value :: x
        real(c_double) :: c_sqrt
    end function
end interface

real(c_double) :: result
result = c_sqrt(4.0_c_double)
```

**Special features:**
- `ISO_C_BINDING` for C interoperability (since Fortran 2003)
- `bind(c)` for C compatibility
- Also supports Fortran-to-Fortran calls

**Further reading:**
- [Fortran ISO_C_BINDING](https://gcc.gnu.org/onlinedocs/gfortran/ISO_005fC_005fBINDING.html)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// FFI via external functions
@external(erlang, "math", "sqrt")
pub fn sqrt(x: Float) -> Float

pub fn main() {
  sqrt(4.0)
}
```

**Special features:**
- FFI via `@external` attributes
- Compiles to Erlang/Elixir, uses their FFI mechanisms
- Supports Erlang and JavaScript targets

**Further reading:**
- [Gleam External Functions](https://gleam.run/documentation/tour/external-functions/)

</TabItem>
<TabItem value="go" label="Go">

```go
// cgo for C interoperability
/*
#include <math.h>
*/
import "C"

import "fmt"

func main() {
    result := C.sqrt(4.0)
    fmt.Println(result)
}
```

**Special features:**
- `cgo` for C interoperability
- Automatic type conversion between Go and C
- Can also call C++ via C wrappers

**Further reading:**
- [Go CGO Documentation](https://pkg.go.dev/cmd/cgo)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// JNI for native functions
@Grab('org.scijava:native-lib-loader:2.3.5')
import org.scijava.nativelib.NativeLoader

// Or via Java Native Access (JNA)
@Grab('net.java.dev.jna:jna:5.12.1')
import com.sun.jna.Library
import com.sun.jna.Native

interface CLibrary extends Library {
    CLibrary INSTANCE = Native.load("c", CLibrary.class)
    double sqrt(double x)
}

def result = CLibrary.INSTANCE.sqrt(4.0)
```

**Special features:**
- Uses JNI via Java
- Can also use JNA (Java Native Access)
- Runs on the JVM

**Further reading:**
- [Groovy JNI Documentation](https://groovy-lang.org/)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Foreign Function Interface
{-# LANGUAGE ForeignFunctionInterface #-}

import Foreign.C.Types

foreign import ccall "math.h sqrt"
  c_sqrt :: CDouble -> CDouble

main :: IO ()
main = print $ c_sqrt 4.0
```

**Special features:**
- `ForeignFunctionInterface` language extension
- `foreign import ccall` for C functions
- Also supports `stdcall` and `cplusplus`

**Further reading:**
- [Haskell FFI Documentation](https://wiki.haskell.org/Foreign_Function_Interface)

</TabItem>
<TabItem value="java" label="Java">

```java
// JNI (Java Native Interface)
public class NativeMath {
    static {
        System.loadLibrary("mathlib");
    }
    
    public native double sqrt(double x);
    
    public static void main(String[] args) {
        NativeMath math = new NativeMath();
        double result = math.sqrt(4.0);
    }
}
```

**Special features:**
- JNI for native functions
- `native` keyword for native methods
- `System.loadLibrary()` loads native libraries
- JEP 389: Foreign Function & Memory API (since Java 17, Preview)

**Further reading:**
- [Oracle Java JNI Documentation](https://docs.oracle.com/javase/8/docs/technotes/guides/jni/)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# ccall for C functions
result = ccall(:sqrt, Cdouble, (Cdouble,), 4.0)

# Or with @ccall macro (since Julia 1.9)
using Libdl
libm = dlopen("libm")
sqrt_func = dlsym(libm, :sqrt)
result = @ccall sqrt_func(4.0::Cdouble)::Cdouble
```

**Special features:**
- `ccall` for direct C function calls
- `@ccall` macro since Julia 1.9
- Automatic type conversion
- Also supports C++ via C wrapper

**Further reading:**
- [Julia C Interface Documentation](https://docs.julialang.org/en/v1/manual/calling-c-and-fortran-code/)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
// FFI: extern declarations for C functions
extern import
  c file "math-helper.c"

// Declare C function
extern c-sqrt(x : float64) : float64
  c "sqrt"

// Usage
fun main()
  val result = c-sqrt(4.0)
  println(result.show)  // 2.0
```

**Special features:**
- `extern` declarations for C function calls
- Direct inclusion of C files via `extern import`
- Automatic type mapping between Koka and C types
- Compiles to C, therefore seamless C interoperability

**Further reading:**
- [Koka Documentation - External Functions](https://koka-lang.github.io/koka/doc/book.html#sec-extern)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// JNI via Java
class NativeMath {
    init {
        System.loadLibrary("mathlib")
    }
    
    external fun sqrt(x: Double): Double
}

fun main() {
    val math = NativeMath()
    val result = math.sqrt(4.0)
}
```

**Special features:**
- Uses JNI via Java
- `external` keyword for native functions
- Kotlin/Native has its own FFI system

**Further reading:**
- [Kotlin Native Interop](https://kotlinlang.org/docs/native-interop.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- FFI to C via @[extern]
@[extern "lean_uint64_add"]
opaque myAdd : UInt64 → UInt64 → UInt64

-- Include custom C function
@[extern "my_c_sqrt"]
opaque mySqrt : Float → Float

-- In a .c file:
-- double my_c_sqrt(double x) { return sqrt(x); }

-- alloy for C inline code
-- @[extern "lean_alloy_example"]
-- opaque allocateBuffer : USize → IO ByteArray
```

**Special features:**
- `@[extern "c_function_name"]` binds C functions.
- `opaque` declares a function without Lean implementation.
- Lean 4 compiles to C, which simplifies FFI integration.
- `@[implementedBy]` allows a C implementation for a Lean declaration.

**Further reading:**
- [Lean 4 Documentation - FFI](https://lean-lang.org/lean4/doc/dev/ffi.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- FFI via LuaJIT (not in standard Lua)
local ffi = require("ffi")

ffi.cdef[[
double sqrt(double x);
]]

local libm = ffi.load("m")
local result = libm.sqrt(4.0)
```

**Special features:**
- FFI only available in LuaJIT
- Standard Lua uses C API for extensions
- LuaJIT FFI is very performant

**Further reading:**
- [LuaJIT FFI Documentation](https://luajit.org/ext_ffi.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% FFI via pragma foreign_proc
:- module ffi_example.
:- interface.
:- import_module io.
:- pred main(io::di, io::uo) is det.
:- implementation.
:- import_module float, string.

% Declare C function
:- pred c_sqrt(float::in, float::out) is det.
:- pragma foreign_proc("C",
    c_sqrt(X::in, Result::out),
    [will_not_call_mercury, promise_pure],
"
    Result = sqrt(X);
").

main(!IO) :-
    c_sqrt(4.0, Result),
    io.format("sqrt(4.0) = %f\n", [f(Result)], !IO).
```

**Special features:**
- `pragma foreign_proc` for C, Java, and C# FFI
- Declarative specification of purity guarantees (`will_not_call_mercury`, `promise_pure`)
- Supports C (standard backend), Java (`--grade java`), and C# (`--grade csharp`)
- Automatic memory management via Mercury GC even for FFI calls

**Further reading:**
- [Mercury Language Reference - Foreign Language Interface](https://www.mercurylang.org/information/doc-release/mercury_ref/Foreign-language-interface.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# FFI via importc
proc sqrt(x: cdouble): cdouble {.importc: "sqrt", header: "<math.h>".}

let result = sqrt(4.0)
```

**Special features:**
- `importc` for C functions
- Automatic type conversion
- Also supports C++ via `importcpp`

**Further reading:**
- [Nim FFI Documentation](https://nim-lang.org/docs/manual.html#foreign-function-interface)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Can directly call C functions
#include <math.h>

double result = sqrt(4.0);

// Can also use Objective-C++
```

**Special features:**
- Direct C compatibility
- Can call C++ via Objective-C++
- Also supports Swift interop

**Further reading:**
- [Apple Objective-C Documentation](https://developer.apple.com/documentation/objectivec)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Externe Funktionen
function sqrt(x: Double): Double; cdecl; external 'libm.so' name 'sqrt';

var
  result: Double;
begin
  result := sqrt(4.0);
end.
```

**Special features:**
- `external` for external functions
- `cdecl` for C convention
- Also supports Windows DLLs

**Further reading:**
- [Free Pascal External Functions](https://www.freepascal.org/docs-html/ref/refsu80.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* FFI via external *)
external sqrt : float -> float = "sqrt" [@@noalloc]

let result = sqrt 4.0
```

**Special features:**
- `external` for C functions
- `[@@noalloc]` for functions without allocation
- Also supports C++ via C wrapper

**Further reading:**
- [OCaml FFI Documentation](https://ocaml.org/manual/intfc.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// FFI via foreign
foreign import "system:libc.lib"
foreign libc {
    sqrt :: proc(x: f64) -> f64 ---
}

main :: proc() {
    result := sqrt(4.0)
}
```

**Special features:**
- `foreign` for external functions
- Direct C compatibility
- Also supports Windows APIs

**Further reading:**
- [Odin FFI Documentation](https://odin-lang.org/docs/overview/#foreign-system)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# XS for native functions
use Math::Libm qw(sqrt);

my $result = sqrt(4.0);

# Or via FFI::Raw
use FFI::Raw;

my $libm = FFI::Raw->new('libm.so.6', 'sqrt', FFI::Raw::double, FFI::Raw::double);
my $result = $libm->call(4.0);
```

**Special features:**
- XS (eXternal Subroutine) for native functions
- FFI::Raw for dynamic FFI
- Many CPAN modules use XS

**Further reading:**
- [Perl XS Documentation](https://perldoc.perl.org/perlxs)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
// FFI since PHP 7.4
$ffi = FFI::cdef("
    double sqrt(double x);
", "libm.so.6");

$result = $ffi->sqrt(4.0);
```

**Special features:**
- FFI since PHP 7.4
- `FFI::cdef()` for C declarations
- Can also include header files

**Further reading:**
- [PHP FFI Documentation](https://www.php.net/manual/en/book.ffi.php)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- FFI via foreign import
foreign import sqrt :: Number -> Number

main = log $ show $ sqrt 4.0
```

**Special features:**
- `foreign import` for external functions
- Compiles to JavaScript, uses its FFI mechanisms
- Also supports other backends

**Further reading:**
- [PureScript FFI Documentation](https://github.com/purescript/documentation/blob/master/language/FFI.md)

</TabItem>
<TabItem value="python" label="Python">

```python
# ctypes for C functions
from ctypes import CDLL, c_double

libm = CDLL("libm.so.6")
libm.sqrt.argtypes = [c_double]
libm.sqrt.restype = c_double

result = libm.sqrt(4.0)

# Or cffi
from cffi import FFI
ffi = FFI()
ffi.cdef("double sqrt(double x);")
lib = ffi.dlopen("libm.so.6")
result = lib.sqrt(4.0)
```

**Special features:**
- `ctypes` in standard library
- `cffi` as alternative (C Foreign Function Interface)
- Automatic type conversion with cffi

**Further reading:**
- [Python ctypes Documentation](https://docs.python.org/3/library/ctypes.html)

</TabItem>
<TabItem value="r" label="R">

```r
# Call C function via .C (after dyn.load)
# Required: compiled C library
dyn.load("mylib.so")
result <- .C("my_add", x = as.double(2.0), y = as.double(3.0))$x

# Or .Call for more complex C functions (SEXP-based)
result <- .Call("my_complex_function", 42L)

# Rcpp for convenient C++ interface
# Required: Rcpp package
```

**Special features:**
- `.C()` for simple C functions (basic data types)
- `.Call()` for C functions with R objects (SEXP)
- `.External()` for more complex cases
- `Rcpp` package as modern C++ interface

**Further reading:**
- [R Extensions - Interface Functions](https://cran.r-project.org/doc/manuals/r-release/R-exts.html#Interface-functions-.Call-and-.External)

</TabItem>

<TabItem value="racket" label="Racket">

```racket
#lang racket

; FFI via ffi/unsafe
(require ffi/unsafe)

(define libm (ffi-lib "libm"))
(define sqrt-func (get-ffi-obj "sqrt" libm (_fun _double -> _double)))

(define result (sqrt-func 4.0))
```

**Special features:**
- `ffi/unsafe` for C FFI
- Automatic type conversion
- Also supports callbacks

**Further reading:**
- [Racket FFI Documentation](https://docs.racket-lang.org/foreign/index.html)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# FFI gem
require 'ffi'

module MathLib
  extend FFI::Library
  ffi_lib 'm'
  
  attach_function :sqrt, [:double], :double
end

result = MathLib.sqrt(4.0)
```

**Special features:**
- FFI gem for dynamic FFI
- `attach_function` binds C functions
- Also supports callbacks

**Further reading:**
- [Ruby FFI Documentation](https://github.com/ffi/ffi)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// FFI via extern blocks
extern "C" {
    fn sqrt(x: f64) -> f64;
}

fn main() {
    unsafe {
        let result = sqrt(4.0);
    }
}
```

**Special features:**
- `extern "C"` for C functions
- `unsafe` block required
- Also supports `extern "Rust"` for Rust-to-Rust

**Further reading:**
- [Rust FFI Documentation](https://doc.rust-lang.org/nomicon/ffi.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// JNI via Java
class NativeMath {
  System.loadLibrary("mathlib")
  
  @native def sqrt(x: Double): Double
}

object Main extends App {
  val math = new NativeMath()
  val result = math.sqrt(4.0)
}
```

**Special features:**
- Uses JNI via Java
- `@native` annotation for native methods
- Runs on the JVM

**Further reading:**
- [Scala Native Methods](https://docs.scala-lang.org/scala3/book/interacting-with-java.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; FFI via (chibi ffi) or similar libraries
(import (chibi ffi))

(define libm (load-library "libm.so.6"))
(define sqrt (foreign-procedure "sqrt" (double) double))

(define result (sqrt 4.0))
```

**Special features:**
- FFI via libraries like `(chibi ffi)`
- Implementation-dependent
- Many Scheme implementations have their own FFI mechanisms

**Further reading:**
- [Chibi Scheme FFI](https://github.com/ashinn/chibi-scheme)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// FFI via C interoperability
import Darwin

let result = sqrt(4.0)

// Or for custom C functions
import Foundation

@_silgen_name("my_c_function")
func myCFunction(_ x: Double) -> Double

let result2 = myCFunction(4.0)
```

**Special features:**
- Direct C compatibility
- `@_silgen_name` for C functions
- Can also call Objective-C

**Further reading:**
- [Apple Swift Interoperability](https://www.swift.org/documentation/c-interop/)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Required: Imports System.Runtime.InteropServices
' P/Invoke like C#
<DllImport("kernel32.dll", SetLastError:=True)>
Function Beep(dwFreq As UInteger, dwDuration As UInteger) As Boolean
End Function

Sub Main()
    Beep(1000, 500)
End Sub
```

**Special features:**
- Uses P/Invoke like C#
- Also supports COM interop
- Native AOT with `LibraryImport` (since .NET 7)

**Further reading:**
- [Microsoft VB.NET Interop Documentation](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/com-interop/)

</TabItem>
<TabItem value="v" label="V">

```v
// FFI via [C] attribute
[C]
fn sqrt(x f64) f64

fn main() {
    result := sqrt(4.0)
}
```

**Special features:**
- `[C]` attribute for C functions
- Automatic type conversion
- Also supports Windows APIs

**Further reading:**
- [V FFI Documentation](https://github.com/vlang/v/blob/master/doc/docs.md#calling-c-code-from-v)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// FFI via extern
const std = @import("std");
const c = @cImport(@cInclude("math.h"));

pub fn main() void {
    const result = c.sqrt(4.0);
    _ = result;
}
```

**Special features:**
- `@cImport` for C headers
- `@cInclude` for header files
- Direct C compatibility

**Further reading:**
- [Zig C Interoperability](https://ziglang.org/documentation/0.11.0/#C)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Required: (ql:quickload :cffi)

;; Load C library
(cffi:load-foreign-library "libm.so")

;; Declare C function
(cffi:defcfun "sqrt" :double
  (x :double))

;; Call C function
(sqrt 2.0d0)  ; 1.4142135623730951d0

;; Define C struct
(cffi:defcstruct point
  (x :double)
  (y :double))
```

**Special features:**
- CFFI is the portable FFI library for Common Lisp
- Supports C function calls, structs, pointers, callbacks
- Implementations also have their own FFI mechanisms (e.g., SBCL's `sb-alien`)
- Automatic type conversion between Lisp and C

**Further reading:**
- [CFFI Documentation](https://cffi.common-lisp.dev/)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- C FFI
%foreign "C:puts,libc"
prim_puts : String -> PrimIO Int

puts : String -> IO Int
puts str = primIO (prim_puts str)

-- JavaScript FFI
%foreign "javascript:lambda: x => console.log(x)"
prim_log : String -> PrimIO ()

jsLog : String -> IO ()
jsLog str = primIO (prim_log str)
```

**Special features:**
- `%foreign` directive for FFI declarations
- Supports C and JavaScript FFI
- Backend-specific FFI syntax
- Type-safe wrappers around foreign functions

**Further reading:**
- [Idris 2 Documentation - FFI](https://idris2.readthedocs.io/en/latest/ffi/ffi.html)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% FFI: Calling C libraries
% Required: Shared Library (.so/.dll) and header file
loadlibrary('mylib', 'mylib.h');
result = calllib('mylib', 'add', 3, 4);
unloadlibrary('mylib');

% MEX functions: C/C++/Fortran code as MATLAB functions
% Compiled with: mex myfunction.c
```

**Special features:**
- `calllib` for calling shared libraries at runtime
- MEX files for compiled C/C++/Fortran extensions
- Also supports Java, Python, and .NET interop

**Further reading:**
- [MATLAB Documentation - Call C Shared Libraries](https://www.mathworks.com/help/matlab/call-c-library-functions.html)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
% Calling a C function via mex interface
% mex my_function.c
% result = my_function(arg1, arg2);

% Dynamic loading of shared libraries
autoload("my_func", "my_lib.oct");
```

**Special features:**
- oct files: Native Octave C++ interface
- mex files: MATLAB-compatible C/C++ interface
- `mkoctfile` for compiling oct files
- `mex` for compiling mex files

**Further reading:**
- [GNU Octave Documentation - External Code Interface](https://octave.org/doc/v8.1.0/External-Code-Interface.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- FFI via Platform concept
-- Platforms are implemented in Rust, Zig, or C
-- and provide I/O functions for Roc

-- app declaration connects with Platform
app "myapp"
    packages { pf: "..." }
    provides [main] to pf
```

**Special features:**
- FFI via Platform concept
- Platforms are implemented in Rust, Zig, or C
- Clear boundary between Roc code and native functions

**Further reading:**
- [Roc Documentation](https://www.roc-lang.org/)

</TabItem>

<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* LibraryLink for C/C++ integration *)
lib = LibraryFunctionLoad["mylib", "add", {Integer, Integer}, Integer]
result = lib[3, 4]  (* 7 *)

(* ExternalEvaluate for other languages *)
ExternalEvaluate["Python", "1 + 2"]  (* 3 *)
```

**Special features:**
- `LibraryLink` for C/C++ libraries
- `ExternalEvaluate` for Python, JavaScript, NodeJS, Ruby etc.
- WSTP (Wolfram Symbolic Transfer Protocol) for bidirectional communication

**Further reading:**
- [Wolfram Language Documentation - LibraryLink](https://reference.wolfram.com/language/guide/LibraryLink.html)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% FFI via Foreign Language Interface (SWI-Prolog)
% Include C function in Prolog

% In C (my_sqrt.c):
% #include <SWI-Prolog.h>
% #include <math.h>
% foreign_t pl_sqrt(term_t x, term_t result) {
%     double val;
%     PL_get_float(x, &val);
%     return PL_unify_float(result, sqrt(val));
% }
% install_t install_my_sqrt() {
%     PL_register_foreign("c_sqrt", 2, pl_sqrt, 0);
% }

% In Prolog:
:- use_foreign_library(my_sqrt).

?- c_sqrt(4.0, Result).
% Result = 2.0
```

**Special features:**
- SWI-Prolog provides a comprehensive C Foreign Language Interface
- C functions are registered as Prolog predicates via `PL_register_foreign()`
- Bidirectional data exchange via `term_t` types and `PL_get_*`/`PL_unify_*` functions
- GNU Prolog also provides a C interface via `gplc`

**Further reading:**
- [SWI-Prolog Documentation - Foreign Language Interface](https://www.swi-prolog.org/pldoc/man?section=foreign)

</TabItem>
</Tabs>


## 17.4.2. C/C++ ABI Interop

Direct compatibility with the C/C++ Application Binary Interface (ABI) for efficient interoperability without additional wrapper layers.

### Languages {#sprachen}

<Tabs availableTabs={['ada', 'c', 'carbon', 'cpp', 'crystal', 'd', 'fortran', 'fsharp', 'go', 'haskell', 'julia', 'koka', 'lean4', 'mercury', 'nim', 'object-pascal', 'objective-c', 'ocaml', 'octave', 'odin', 'prolog', 'rust', 'swift', 'v', 'vbnet', 'zig']} yellowTabs={['kotlin']}>
<TabItem value="ada" label="Ada">

```ada
-- Direct C ABI compatibility
with Interfaces.C;
procedure C_ABI_Interop is
   function C_Function (X : Interfaces.C.Int) return Interfaces.C.Int;
   pragma Import (C, C_Function, "c_function");
   
   Result : Interfaces.C.Int;
begin
   Result := C_Function (42);
end C_ABI_Interop;
```

**Special features:**
- Direct C ABI compatibility via `Interfaces.C`
- `pragma Import` with C convention
- Also supports C++ via binding generators

**Further reading:**
- [Ada Reference Manual - Interfacing with C](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-B-3.html)

</TabItem>
<TabItem value="c" label="C">

```c
// Native C ABI - standard for all other languages
int add(int a, int b) {
    return a + b;
}

// Header file for external use
// extern int add(int a, int b);
```

**Special features:**
- C defines the standard ABI that other languages follow
- Functions are available to other compilation units via header files
- Almost every programming language provides FFI bindings for C functions

**Further reading:**
- [C Standard - External Definitions](https://en.cppreference.com/w/c/language/extern)

</TabItem>

<TabItem value="carbon" label="Carbon">

```carbon
// Carbon aims for C++ ABI compatibility
// (language still in development)
package Interop api;

// Carbon should be directly compatible with C++ ABI
```

**Special features:**
- Goal: Direct C++ ABI compatibility
- Language still in development
- Should be able to directly call C++ code

**Further reading:**
- [Carbon Language - Interoperability](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// C++ ABI - Name Mangling for type safety
int add(int a, int b) {
    return a + b;
}

// C ABI compatibility via extern "C"
extern "C" {
    int add_c(int a, int b) {
        return a + b;
    }
}
```

**Special features:**
- C++ ABI with Name Mangling
- `extern "C"` for C compatibility
- Various ABI versions (Itanium, MSVC)

**Further reading:**
- [C++ ABI Documentation](https://itanium-cxx-abi.github.io/cxx-abi/)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Direct C ABI compatibility
@[Link("mylib")]
lib MyLib
  fun add(a : Int32, b : Int32) : Int32
end

result = MyLib.add(10, 20)
```

**Special features:**
- Direct C ABI compatibility via `lib` blocks
- Automatic type conversion
- No additional wrapper layers

**Further reading:**
- [Crystal C Bindings](https://crystal-lang.org/reference/guides/c_bindings/)

</TabItem>
<TabItem value="d" label="D">

```d
// Direct C/C++ ABI compatibility
extern(C) {
    int add(int a, int b);
}

extern(C++) {
    int add_cpp(int a, int b);
}

void main() {
    int result1 = add(10, 20);
    int result2 = add_cpp(10, 20);
}
```

**Special features:**
- `extern(C)` for C ABI
- `extern(C++)` for C++ ABI
- Direct compatibility without wrappers

**Further reading:**
- [D Language - C++ Interfacing](https://dlang.org/spec/cpp_interface.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Required: open System.Runtime.InteropServices
// Native AOT with direct C ABI (since .NET 7)
[<LibraryImport("mylib.dll")>]
static partial int Add(int a, int b)

// P/Invoke (traditional)
[<DllImport("mylib.dll")>]
extern int AddPInvoke(int a, int b)
```

**Special features:**
- `LibraryImport` for Native AOT with direct C ABI (since .NET 7)
- P/Invoke for traditional interop
- Also supports C++ via C wrapper

**Further reading:**
- [F# Native Interop](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/functions/external-functions)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! ISO_C_BINDING for direct C ABI compatibility
use iso_c_binding

interface
    function c_add(a, b) bind(c)
        import :: c_int
        integer(c_int), value :: a, b
        integer(c_int) :: c_add
    end function
end interface

integer(c_int) :: result
result = c_add(10, 20)
```

**Special features:**
- `ISO_C_BINDING` for direct C ABI (since Fortran 2003)
- `bind(c)` for C compatibility
- Direct ABI compatibility without wrappers

**Further reading:**
- [Fortran ISO_C_BINDING](https://gcc.gnu.org/onlinedocs/gfortran/ISO_005fC_005fBINDING.html)

</TabItem>
<TabItem value="go" label="Go">

```go
// cgo for direct C ABI compatibility
/*
#include <stdlib.h>
int add(int a, int b) { return a + b; }
*/
import "C"

import "fmt"

func main() {
    result := C.add(10, 20)
    fmt.Println(result)
}
```

**Special features:**
- `cgo` enables direct C ABI compatibility
- Automatic type conversion
- Can also call C++ via C wrapper

**Further reading:**
- [Go CGO Documentation](https://pkg.go.dev/cmd/cgo)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Direct C ABI compatibility
{-# LANGUAGE ForeignFunctionInterface #-}

import Foreign.C.Types

foreign import ccall "add"
  c_add :: CInt -> CInt -> CInt

main :: IO ()
main = print $ c_add 10 20
```

**Special features:**
- `foreign import ccall` for direct C ABI
- Automatic type conversion
- Also supports `stdcall` and `cplusplus`

**Further reading:**
- [Haskell FFI Documentation](https://wiki.haskell.org/Foreign_Function_Interface)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Direct C ABI compatibility via ccall
result = ccall((:add, "mylib"), Cint, (Cint, Cint), 10, 20)

# Or with @ccall macro (since Julia 1.9)
using Libdl
lib = dlopen("mylib")
add_func = dlsym(lib, :add)
result = @ccall add_func(10::Cint, 20::Cint)::Cint
```

**Special features:**
- `ccall` for direct C ABI
- `@ccall` macro since Julia 1.9
- Automatic type conversion

**Further reading:**
- [Julia C Interface](https://docs.julialang.org/en/v1/manual/calling-c-and-fortran-code/)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
// Direct C ABI compatibility (Koka compiles to C)
extern import
  c file "native-math.c"
  c header "native-math.h"

// Directly call C functions
extern c-add(x : int32, y : int32) : int32
  c "add"

extern c-multiply(x : float64, y : float64) : float64
  c "multiply"

fun main()
  val sum = c-add(10.int32, 20.int32)
  val product = c-multiply(3.14, 2.0)
  println("Sum: " ++ sum.show ++ ", Product: " ++ product.show)
```

**Special features:**
- Koka compiles to C – seamless C ABI compatibility
- `extern` declarations directly bind C functions
- C headers and C files can be directly included
- No overhead through direct C code generation

**Further reading:**
- [Koka Documentation - External Functions](https://koka-lang.github.io/koka/doc/book.html#sec-extern)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Direct C ABI compatibility (Lean 4 compiles to C)
-- Include C functions via @[extern]
@[extern "add"]
opaque cAdd : Int32 → Int32 → Int32

@[extern "multiply"]
opaque cMultiply : Float → Float → Float

-- In a .c file:
-- int32_t add(int32_t x, int32_t y) { return x + y; }
-- double multiply(double x, double y) { return x * y; }

def main : IO Unit := do
  IO.println s!"Sum: {cAdd 10 20}"
  IO.println s!"Product: {cMultiply 3.14 2.0}"
```

**Special features:**
- Lean 4 compiles to C – seamless C ABI compatibility.
- `@[extern "c_name"]` directly binds C functions.
- C headers and C files are included via the Lake build system.
- No overhead through direct C code generation.

**Further reading:**
- [Lean 4 Documentation - FFI](https://lean-lang.org/lean4/doc/dev/ffi.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Kotlin/Native for direct C ABI
import kotlinx.cinterop.*

@OptIn(ExperimentalForeignApi::class)
fun main() {
    platform.posix.printf("Hello from C\n")
    
    // Direct C function calls
    val result = platform.posix.add(10, 20)
}
```

**Special features:**
- Kotlin/Native supports direct C ABI
- `kotlinx.cinterop` for C interoperability
- JVM version uses JNI (no direct ABI)

**Further reading:**
- [Kotlin Native Interop](https://kotlinlang.org/docs/native-interop.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Direct C ABI compatibility (Mercury compiles to C)
:- module c_abi_example.
:- interface.
:- import_module io.
:- pred main(io::di, io::uo) is det.
:- implementation.

:- pred c_add(int::in, int::in, int::out) is det.
:- pragma foreign_proc("C",
    c_add(A::in, B::in, Result::out),
    [will_not_call_mercury, promise_pure],
"
    Result = A + B;
").

main(!IO) :-
    c_add(10, 20, Result),
    io.write_int(Result, !IO),
    io.nl(!IO).
```

**Special features:**
- Mercury compiles to C – direct C ABI compatibility without overhead
- `pragma foreign_proc("C", ...)` for inline C code in Mercury predicates
- C headers can be included via `pragma foreign_decl`
- Shared libraries can be directly linked

**Further reading:**
- [Mercury Language Reference - Foreign Language Interface](https://www.mercurylang.org/information/doc-release/mercury_ref/Foreign-language-interface.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Direct C ABI compatibility
proc add(a: cint, b: cint): cint {.importc: "add", header: "mylib.h".}

let result = add(10, 20)
```

**Special features:**
- `importc` for direct C ABI
- Automatic type conversion
- Also supports C++ via `importcpp`

**Further reading:**
- [Nim FFI Documentation](https://nim-lang.org/docs/manual.html#foreign-function-interface)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Direct C ABI compatibility
#include <stdio.h>

int add(int a, int b) {
    return a + b;
}

int result = add(10, 20);
```

**Special features:**
- Direct C ABI compatibility
- Can call C++ via Objective-C++
- Also supports Swift interop

**Further reading:**
- [Apple Objective-C Documentation](https://developer.apple.com/documentation/objectivec)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Direct C ABI compatibility
function add(a, b: Integer): Integer; cdecl; external 'mylib.so' name 'add';

var
  result: Integer;
begin
  result := add(10, 20);
end.
```

**Special features:**
- `external` with `cdecl` for direct C ABI
- Also supports Windows DLLs
- Direct compatibility without wrappers

**Further reading:**
- [Free Pascal External Functions](https://www.freepascal.org/docs-html/ref/refsu80.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Direct C ABI compatibility *)
external add : int -> int -> int = "add" [@@noalloc]

let result = add 10 20
```

**Special features:**
- `external` for direct C ABI
- `[@@noalloc]` for functions without allocation
- Also supports C++ via C wrapper

**Further reading:**
- [OCaml FFI Documentation](https://ocaml.org/manual/intfc.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Direct C ABI compatibility
foreign import "system:libc.lib"
foreign libc {
    add :: proc(a, b: i32) -> i32 ---
}

main :: proc() {
    result := add(10, 20)
}
```

**Special features:**
- `foreign` for direct C ABI
- Automatic type conversion
- Also supports Windows APIs

**Further reading:**
- [Odin FFI Documentation](https://odin-lang.org/docs/overview/#foreign-system)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Direct C ABI compatibility
extern "C" {
    fn add(a: i32, b: i32) -> i32;
}

fn main() {
    unsafe {
        let result = add(10, 20);
    }
}

// Rust can also call C++ via extern "C++" (since Rust 1.70, unstable)
```

**Special features:**
- `extern "C"` for direct C ABI
- `unsafe` block required
- `extern "C++"` for C++ ABI (unstable, since Rust 1.70)

**Further reading:**
- [Rust FFI Documentation](https://doc.rust-lang.org/nomicon/ffi.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Direct C ABI compatibility
import Darwin

// Swift can directly call C functions
let result = add(10, 20)

// Or with @_silgen_name
@_silgen_name("add")
func add(_ a: Int32, _ b: Int32) -> Int32

let result2 = add(10, 20)
```

**Special features:**
- Direct C ABI compatibility
- `@_silgen_name` for C functions
- Can also call Objective-C

**Further reading:**
- [Apple Swift Interoperability](https://www.swift.org/documentation/c-interop/)

</TabItem>
<TabItem value="v" label="V">

```v
// Direct C ABI compatibility
[C]
fn add(a int, b int) int

fn main() {
    result := add(10, 20)
}
```

**Special features:**
- `[C]` attribute for direct C ABI
- Automatic type conversion
- Also supports Windows APIs

**Further reading:**
- [V FFI Documentation](https://github.com/vlang/v/blob/master/doc/docs.md#calling-c-code-from-v)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Requires: Imports System.Runtime.InteropServices
' Native AOT with direct C ABI (since .NET 7)
<LibraryImport("mylib.dll")>
Function Add(a As Integer, b As Integer) As Integer
End Function

Sub Main()
    Dim result As Integer = Add(10, 20)
End Sub
```

**Special features:**
- `LibraryImport` for Native AOT with direct C ABI (since .NET 7)
- P/Invoke for traditional interop
- Also supports COM interop

**Further reading:**
- [Microsoft VB.NET Interop Documentation](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/com-interop/)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Direct C ABI compatibility
const std = @import("std");
const c = @cImport(@cInclude("mylib.h"));

pub fn main() void {
    const result = c.add(10, 20);
    _ = result;
}
```

**Special features:**
- `@cImport` for direct C ABI
- `@cInclude` for header files
- Full C compatibility

**Further reading:**
- [Zig C Interoperability](https://ziglang.org/documentation/0.11.0/#C)

</TabItem>
<TabItem value="octave" label="Octave">

```cpp
// Example of an oct file (C++)
// Requires: mkoctfile my_add.cc
#include <octave/oct.h>

DEFUN_DLD (my_add, args, , "Add two values")
{
  double a = args(0).double_value();
  double b = args(1).double_value();
  return octave_value(a + b);
}
```

**Special features:**
- oct files use the Octave C++ API directly
- mex files provide MATLAB-compatible C API
- Full access to Octave data types from C/C++

**Further reading:**
- [GNU Octave Documentation - Oct-Files](https://octave.org/doc/v8.1.0/Oct_002dFiles.html)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Direct C ABI compatibility via Foreign Language Interface
% C functions are registered as Prolog predicates

% In C (math_ops.c):
% #include <SWI-Prolog.h>
% foreign_t pl_add(term_t a, term_t b, term_t result) {
%     int x, y;
%     PL_get_integer(a, &x);
%     PL_get_integer(b, &y);
%     return PL_unify_integer(result, x + y);
% }
% install_t install() {
%     PL_register_foreign("c_add", 3, pl_add, 0);
% }

% In Prolog:
:- use_foreign_library(math_ops).

?- c_add(10, 20, Result).
% Result = 30
```

**Special features:**
- SWI-Prolog uses the standard C ABI for foreign predicates
- Shared libraries (`.so`/`.dll`) are directly loaded
- `PL_register_foreign()` registers C functions as Prolog predicates
- GNU Prolog also supports direct C ABI access via `gplc --c-compiler`

**Further reading:**
- [SWI-Prolog Documentation - Foreign Language Interface](https://www.swi-prolog.org/pldoc/man?section=foreign)

</TabItem>

</Tabs>


## 17.4.3. Language Interop (e.g., JVM languages with each other)

Interoperability between languages that run on the same runtime environment or platform, without external interfaces.

### Languages {#sprachen}

<Tabs availableTabs={['clojure', 'csharp', 'elixir', 'erlang', 'fsharp', 'gleam', 'groovy', 'java', 'javascript', 'kotlin', 'matlab', 'mercury', 'objective-c', 'racket', 'ruby', 'scala', 'typescript', 'vbnet']} yellowTabs={['mercury']}>
<TabItem value="clojure" label="Clojure">

```clojure
;; Interop with Java (JVM)
(import 'java.util.ArrayList)

(def list (ArrayList.))
(.add list "Hello")
(.add list "World")

;; Interop with other JVM languages
;; Can directly use Java classes
(def date (java.util.Date.))
```

**Special features:**
- Runs on the JVM, can directly call Java code
- Can also use other JVM languages via Java interfaces
- `import` for Java classes
- Dot notation for method calls

**Further reading:**
- [Clojure Java Interop](https://clojure.org/reference/java_interop)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Interop with other .NET languages
// Can call F# modules and VB.NET code
// (when compiled as .NET assembly)

// Example: Call F# function from C#
// namespace FSharpModule
// public static int Add(int a, int b) { ... }

int result = FSharpModule.Add(10, 20);
```

**Special features:**
- Runs on .NET, can directly call F# and VB.NET
- Common Intermediate Language (IL)
- Can also use other .NET languages
- Common types and libraries

**Further reading:**
- [Microsoft .NET Language Interoperability](https://learn.microsoft.com/en-us/dotnet/standard/language-interoperability)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Interop with Erlang (BEAM)
:erlang.now()

# Can directly call Erlang modules
:lists.reverse([1, 2, 3])

# Can also use Gleam code (when compiled)
```

**Special features:**
- Runs on BEAM, can directly call Erlang code
- Common runtime environment
- Can also use Gleam code (when compiled to Erlang)
- Atoms for Erlang modules

**Further reading:**
- [Elixir Erlang Interop](https://elixir-lang.org/getting-started/erlang-libraries.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% Interop with Elixir (BEAM)
% Can call Elixir modules when compiled

% Example: Call Elixir module from Erlang
% 'Elixir.MyModule':function()
```

**Special features:**
- Runs on BEAM, can use Elixir code
- Common runtime environment
- Can also use Gleam code (when compiled to Erlang)
- Elixir modules have 'Elixir.' prefix

**Further reading:**
- [Erlang Interoperability](https://www.erlang.org/doc/tutorial/overview.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Interop with other .NET languages
// Can directly use C# classes
let list = System.Collections.Generic.List<string>()
list.Add("Hello")

// Can also call VB.NET code
// (when compiled as .NET assembly)
```

**Special features:**
- Runs on .NET, can directly call C# and VB.NET
- Common Intermediate Language (IL)
- Can also use other .NET languages
- Common types and libraries

**Further reading:**
- [F# .NET Interoperability](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/interop/)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// Interop with Erlang/Elixir (BEAM)
// Direct use of Erlang functions via @external
@external(erlang, "lists", "reverse")
pub fn reverse(list: List(a)) -> List(a)

// Gleam modules that wrap Erlang code
// Required: import gleam/io
pub fn main() {
  io.println("Hello from Gleam")
}
```

**Special features:**
- Compiles to Erlang, can directly call Erlang code via `@external`
- Runs on BEAM, can use Elixir code
- Common runtime environment with Erlang and Elixir
- Type-safe FFI declarations

**Further reading:**
- [Gleam External Functions](https://tour.gleam.run/advanced-features/externals/)

</TabItem>

<TabItem value="groovy" label="Groovy">

```groovy
// Interop with Java (JVM)
import java.util.ArrayList

def list = new ArrayList()
list.add("Hello")
list.add("World")

// Can also use other JVM languages via Java interfaces
// Can call Kotlin, Scala, Clojure code (when compiled)
```

**Special features:**
- Runs on the JVM, can directly call Java code
- Can also use other JVM languages via Java interfaces
- Dynamic types for easier interop
- Common bytecode level

**Further reading:**
- [Groovy Java Integration](https://groovy-lang.org/java-integration.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Interop with other JVM languages
import java.util.*;

// Can call Kotlin, Scala, Groovy, Clojure code
// (when compiled as JVM bytecode)

// Example: Call Kotlin class from Java
// public class KotlinClass { ... }
KotlinClass instance = new KotlinClass();
```

**Special features:**
- Runs on the JVM, can call other JVM languages
- Common bytecode level
- Can use Kotlin, Scala, Groovy, Clojure
- Common types and libraries

**Further reading:**
- [Oracle Java Platform](https://docs.oracle.com/javase/tutorial/)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Interop with TypeScript (compiles to JavaScript)
// TypeScript code is compiled to JavaScript

// Can also use other JS transpiler languages
// (CoffeeScript, Dart, etc.)

// Example: TypeScript function from JavaScript
function add(a, b) {
    return a + b;
}
```

**Special features:**
- Runs in JavaScript engines, can use TypeScript code
- TypeScript compiles to JavaScript
- Can also use other transpiled languages
- Common runtime environment

**Further reading:**
- [MDN JavaScript Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Interop with Java (JVM)
import java.util.ArrayList

val list = ArrayList<String>()
list.add("Hello")
list.add("World")

// Can also use other JVM languages via Java interfaces
// Can call Scala, Groovy, Clojure code (when compiled)
```

**Special features:**
- Runs on the JVM, can directly call Java code
- Can also use other JVM languages via Java interfaces
- `@JvmStatic` for Java compatibility
- Common bytecode level

**Further reading:**
- [Kotlin Java Interop](https://kotlinlang.org/docs/java-interop.html)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
;; File: math-typed.rkt
;; #lang typed/racket
;; (provide add)
;; (: add (-> Integer Integer Integer))
;; (define (add a b) (+ a b))

;; File: main.rkt
#lang racket
(require "math-typed.rkt")  ; Typed Racket from untyped Racket
(add 5 3)  ; 8
```

**Special features:**
- Supports different `#lang` dialects per file
- Can use Typed Racket, R5RS, etc.
- Contracts are automatically inserted at language boundaries
- Shared Racket runtime environment

**Further reading:**
- [Racket Language Interoperability](https://docs.racket-lang.org/guide/languages.html)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Interop with other Ruby implementations
# (if compatible)

# Can also use JRuby (JVM) or mruby
# (if compatible)

# Example: JRuby can call Java code
# require 'java'
# java_import 'java.util.ArrayList'
```

**Special features:**
- Different implementations (CRuby, JRuby, mruby)
- JRuby runs on JVM, can call Java code
- Shared Ruby language, different runtimes
- Can also use other Ruby implementations

**Further reading:**
- [Ruby Documentation](https://www.ruby-lang.org/en/documentation/)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Interop with Java (JVM)
import java.util.ArrayList

val list = new ArrayList[String]()
list.add("Hello")
list.add("World")

// Can also use other JVM languages via Java interfaces
// Can call Kotlin, Groovy, Clojure code (if compiled)
```

**Special features:**
- Runs on JVM, can directly call Java code
- Can also use other JVM languages via Java interfaces
- `@ScalaSignature` for Scala-specific features
- Shared bytecode level

**Further reading:**
- [Scala Java Interop](https://docs.scala-lang.org/scala3/book/interacting-with-java.html)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Interop with JavaScript
// TypeScript compiles to JavaScript

// Can directly use JavaScript code
function add(a: number, b: number): number {
    return a + b;
}

// Can also use other transpiled languages
// (if compiled to JavaScript)
```

**Special features:**
- Compiles to JavaScript, can directly use JS code
- Runs in JavaScript engines
- Can also use other transpiled languages
- Shared runtime environment

**Further reading:**
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Interop with other .NET languages
' Can directly use C# classes
Dim list As New System.Collections.Generic.List(Of String)()
list.Add("Hello")

' Can also call F# code
' (if compiled as .NET assembly)
```

**Special features:**
- Runs on .NET, can directly call C# and F#
- Shared Intermediate Language (IL)
- Can also use other .NET languages
- Shared types and libraries

**Further reading:**
- [Microsoft VB.NET Interoperability](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/interoperability/)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% Java Interop (natively supported)
list = java.util.ArrayList();
list.add("Hello");
list.add("World");

% Python Interop (since R2014b)
np = py.importlib.import_module('numpy');
arr = np.array({1, 2, 3});
```

**Special features:**
- Native Java integration (JVM runs within MATLAB)
- Python interop since R2014b with `py.` syntax
- .NET interop on Windows
- COM interop on Windows

**Further reading:**
- [MATLAB Documentation - Call Python from MATLAB](https://www.mathworks.com/help/matlab/call-python-libraries.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Language Interop via JVM backend (--grade java)
:- module jvm_interop.
:- interface.
:- import_module io.
:- pred main(io::di, io::uo) is det.
:- implementation.

:- pred java_hello(string::out) is det.
:- pragma foreign_proc("Java",
    java_hello(Result::out),
    [will_not_call_mercury, promise_pure],
"
    Result = ""Hello from Java!"";
").

main(!IO) :-
    java_hello(Msg),
    io.write_string(Msg, !IO),
    io.nl(!IO).
```

**Special features:**
- With `--grade java`, Mercury compiles to Java classes that can be called from other JVM languages
- `pragma foreign_proc("Java", ...)` enables calls to Java code from Mercury
- With `--grade csharp` analogously for .NET interop with C#, F#, VB.NET
- Interop requires explicit `foreign_proc` declarations (no seamless access)

**Further reading:**
- [Mercury Language Reference - Foreign Language Interface](https://www.mercurylang.org/information/doc-release/mercury_ref/Foreign-language-interface.html)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// C Interop (direct, as superset)
int result = printf("C function: %d\n", 42);

// C++ Interop (Objective-C++ with .mm files)
// std::vector<int> vec = {1, 2, 3}; // Possible in .mm files

// Swift Interop (via bridging header)
// Swift classes can be used from Objective-C
// ObjC classes can be used from Swift
```

**Special features:**
- Direct C compatibility (ObjC is C superset)
- Objective-C++ (.mm files) for C++ interop
- Swift interop via bridging headers and @objc attribute
- No JVM/CLR interoperability

**Further reading:**
- [Apple Documentation - Swift and Objective-C Interoperability](https://developer.apple.com/documentation/swift/importing-objective-c-into-swift)

</TabItem>
</Tabs>

