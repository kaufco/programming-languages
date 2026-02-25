---
slug: /ausfuehrungsmodell/interoperabilitaet
title: 17.4. Interoperabilität
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 17.4. Interoperabilität

FFI, ABI-Interop und sprachübergreifende Integration.

## 17.4.1. FFI (Foreign Function Interfaces)

Mechanismen zum Aufruf von Funktionen aus anderen Programmiersprachen, typischerweise aus C/C++-Bibliotheken.

### Sprachen {#sprachen}

<Tabs availableTabs={['ada', 'c', 'common-lisp', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'elixir', 'erlang', 'fortran', 'fsharp', 'gleam', 'go', 'groovy', 'haskell', 'idris', 'java', 'julia', 'koka', 'kotlin', 'lean4', 'lua', 'matlab', 'mercury', 'nim', 'object-pascal', 'objective-c', 'ocaml', 'octave', 'odin', 'perl', 'php', 'prolog', 'purescript', 'python', 'r', 'racket', 'roc', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'v', 'vbnet', 'wolfram-language', 'zig']}>
<TabItem value="ada" label="Ada">

```ada
-- Deklaration einer externen C-Funktion
with Interfaces.C;
procedure Call_External is
   function C_Sqrt (X : Interfaces.C.Double) return Interfaces.C.Double;
   pragma Import (C, C_Sqrt, "sqrt");
   
   Result : Interfaces.C.Double;
begin
   Result := C_Sqrt (4.0);
end Call_External;
```

**Besonderheiten:**
- Verwendet `Interfaces.C` für C-Interoperabilität
- `pragma Import` bindet externe Funktionen ein
- Unterstützt auch C++ über Binding-Generatoren

**Weiterführende Links:**
- [Ada Reference Manual - Interfacing with C](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-B-3.html)

</TabItem>
<TabItem value="c" label="C">

```c
// C kann direkt mit anderen C-Funktionen arbeiten
// Externe Funktionen werden über Header-Dateien eingebunden
#include <math.h>

double result = sqrt(4.0);
```

**Besonderheiten:**
- Native Interoperabilität mit C++ über `extern "C"`
- Kann Assembly-Code direkt einbinden
- Standard-ABI ermöglicht Interop mit vielen Sprachen

**Weiterführende Links:**
- [C Standard Library](https://en.cppreference.com/w/c)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Benötigt: using System.Runtime.InteropServices;
// P/Invoke für Windows
[DllImport("kernel32.dll", SetLastError = true)]
static extern bool Beep(uint dwFreq, uint dwDuration);

// Native AOT mit LibraryImport (seit .NET 7)
[LibraryImport("mylib.dll")]
static partial int MyFunction(int x);

Beep(1000, 500);
```

**Besonderheiten:**
- P/Invoke für Windows, Mono.Posix für Unix
- `LibraryImport` für Native AOT (seit .NET 7)
- Unterstützt auch COM-Interop

**Weiterführende Links:**
- [Microsoft C# P/Invoke Documentation](https://learn.microsoft.com/en-us/dotnet/standard/native-interop/pinvoke)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// C++ kann C-Funktionen direkt aufrufen
extern "C" {
    #include <math.h>
}

double result = sqrt(4.0);

// C++ kann auch C++-Funktionen aus anderen Compilation Units aufrufen
// über Header-Dateien und Linker
```

**Besonderheiten:**
- `extern "C"` für C-Kompatibilität
- Name Mangling für C++-Funktionen
- Kann Assembly-Code direkt einbinden

**Weiterführende Links:**
- [C++ Reference - Language Linking](https://en.cppreference.com/w/cpp/language/language_linkage)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# FFI über libffi
@[Link("m")]
lib LibM
  fun sqrt(x : Float64) : Float64
end

result = LibM.sqrt(4.0)
```

**Besonderheiten:**
- Verwendet `lib`-Blöcke für FFI-Deklarationen
- Automatische Typkonvertierung zwischen Crystal- und C-Typen
- Unterstützt Callbacks

**Weiterführende Links:**
- [Crystal FFI Documentation](https://crystal-lang.org/reference/guides/c_bindings/)

</TabItem>
<TabItem value="d" label="D">

```d
// Externe C-Funktion importieren
extern(C) {
    double sqrt(double x);
}

void main() {
    double result = sqrt(4.0);
}
```

**Besonderheiten:**
- `extern(C)` für C-Kompatibilität
- `extern(C++)` für C++-Interop
- Unterstützt auch Windows-APIs direkt

**Weiterführende Links:**
- [D Language - Interfacing to C](https://dlang.org/spec/interfaceToC.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
import 'dart:ffi';
import 'dart:io';

// FFI seit Dart 2.5
typedef NativeSqrt = Double Function(Double);
typedef DartSqrt = double Function(double);

void main() {
  final dylib = DynamicLibrary.open('libm.so.6');
  final sqrtPointer = dylib.lookup<NativeFunction<NativeSqrt>>('sqrt');
  final sqrt = sqrtPointer.asFunction<DartSqrt>();
  
  final result = sqrt(4.0);
}
```

**Besonderheiten:**
- FFI seit Dart 2.5
- Verwendet `dart:ffi` für native Bibliotheken
- Unterstützt Callbacks und Structs

**Weiterführende Links:**
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

# Oder über Ports für externe Programme
port = Port.open({:spawn, "external_program"}, [:binary])
```

**Besonderheiten:**
- NIFs für native C-Funktionen
- Ports für externe Programme
- NIFs laufen im BEAM-Prozess (können VM crashen)

**Weiterführende Links:**
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

**Besonderheiten:**
- NIFs für native C-Funktionen
- Ports für externe Programme
- NIFs laufen im BEAM-Prozess

**Weiterführende Links:**
- [Erlang NIFs Documentation](https://www.erlang.org/doc/tutorial/nif.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Benötigt: open System.Runtime.InteropServices
// P/Invoke
[<DllImport("kernel32.dll", SetLastError = true)>]
extern bool Beep(uint dwFreq, uint dwDuration)

Beep(1000u, 500u)
```

**Besonderheiten:**
- Verwendet P/Invoke wie C#
- Unterstützt auch COM-Interop
- Native AOT mit `LibraryImport` (seit .NET 7)

**Weiterführende Links:**
- [F# Interop Documentation](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/functions/external-functions)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! ISO_C_BINDING für C-Interoperabilität
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

**Besonderheiten:**
- `ISO_C_BINDING` für C-Interoperabilität (seit Fortran 2003)
- `bind(c)` für C-Kompatibilität
- Unterstützt auch Fortran-zu-Fortran-Calls

**Weiterführende Links:**
- [Fortran ISO_C_BINDING](https://gcc.gnu.org/onlinedocs/gfortran/ISO_005fC_005fBINDING.html)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// FFI über externe Funktionen
@external(erlang, "math", "sqrt")
pub fn sqrt(x: Float) -> Float

pub fn main() {
  sqrt(4.0)
}
```

**Besonderheiten:**
- FFI über `@external`-Attribute
- Kompiliert zu Erlang/Elixir, nutzt deren FFI-Mechanismen
- Unterstützt Erlang- und JavaScript-Targets

**Weiterführende Links:**
- [Gleam External Functions](https://gleam.run/documentation/tour/external-functions/)

</TabItem>
<TabItem value="go" label="Go">

```go
// cgo für C-Interoperabilität
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

**Besonderheiten:**
- `cgo` für C-Interoperabilität
- Automatische Typkonvertierung zwischen Go und C
- Kann auch C++ über C-Wrapper aufrufen

**Weiterführende Links:**
- [Go CGO Documentation](https://pkg.go.dev/cmd/cgo)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// JNI für native Funktionen
@Grab('org.scijava:native-lib-loader:2.3.5')
import org.scijava.nativelib.NativeLoader

// Oder über Java Native Access (JNA)
@Grab('net.java.dev.jna:jna:5.12.1')
import com.sun.jna.Library
import com.sun.jna.Native

interface CLibrary extends Library {
    CLibrary INSTANCE = Native.load("c", CLibrary.class)
    double sqrt(double x)
}

def result = CLibrary.INSTANCE.sqrt(4.0)
```

**Besonderheiten:**
- Nutzt JNI über Java
- Kann auch JNA (Java Native Access) verwenden
- Läuft auf der JVM

**Weiterführende Links:**
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

**Besonderheiten:**
- `ForeignFunctionInterface` Language Extension
- `foreign import ccall` für C-Funktionen
- Unterstützt auch `stdcall` und `cplusplus`

**Weiterführende Links:**
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

**Besonderheiten:**
- JNI für native Funktionen
- `native`-Schlüsselwort für native Methoden
- `System.loadLibrary()` lädt native Bibliotheken
- JEP 389: Foreign Function & Memory API (seit Java 17, Preview)

**Weiterführende Links:**
- [Oracle Java JNI Documentation](https://docs.oracle.com/javase/8/docs/technotes/guides/jni/)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# ccall für C-Funktionen
result = ccall(:sqrt, Cdouble, (Cdouble,), 4.0)

# Oder mit @ccall Makro (seit Julia 1.9)
using Libdl
libm = dlopen("libm")
sqrt_func = dlsym(libm, :sqrt)
result = @ccall sqrt_func(4.0::Cdouble)::Cdouble
```

**Besonderheiten:**
- `ccall` für direkte C-Funktionsaufrufe
- `@ccall` Makro seit Julia 1.9
- Automatische Typkonvertierung
- Unterstützt auch C++ über C-Wrapper

**Weiterführende Links:**
- [Julia C Interface Documentation](https://docs.julialang.org/en/v1/manual/calling-c-and-fortran-code/)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
// FFI: extern-Deklarationen für C-Funktionen
extern import
  c file "math-helper.c"

// C-Funktion deklarieren
extern c-sqrt(x : float64) : float64
  c "sqrt"

// Verwendung
fun main()
  val result = c-sqrt(4.0)
  println(result.show)  // 2.0
```

**Besonderheiten:**
- `extern`-Deklarationen für C-Funktionsaufrufe
- Direktes Einbinden von C-Dateien über `extern import`
- Automatische Typabbildung zwischen Koka- und C-Typen
- Kompiliert zu C, daher nahtlose C-Interoperabilität

**Weiterführende Links:**
- [Koka Documentation - External Functions](https://koka-lang.github.io/koka/doc/book.html#sec-extern)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// JNI über Java
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

**Besonderheiten:**
- Nutzt JNI über Java
- `external`-Schlüsselwort für native Funktionen
- Kotlin/Native hat eigenes FFI-System

**Weiterführende Links:**
- [Kotlin Native Interop](https://kotlinlang.org/docs/native-interop.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- FFI zu C über @[extern]
@[extern "lean_uint64_add"]
opaque myAdd : UInt64 → UInt64 → UInt64

-- Eigene C-Funktion einbinden
@[extern "my_c_sqrt"]
opaque mySqrt : Float → Float

-- In einer .c Datei:
-- double my_c_sqrt(double x) { return sqrt(x); }

-- alloy für C-Inline-Code
-- @[extern "lean_alloy_example"]
-- opaque allocateBuffer : USize → IO ByteArray
```

**Besonderheiten:**
- `@[extern "c_function_name"]` bindet C-Funktionen ein.
- `opaque` deklariert eine Funktion ohne Lean-Implementierung.
- Lean 4 kompiliert zu C, was die FFI-Integration vereinfacht.
- `@[implementedBy]` erlaubt eine C-Implementierung für eine Lean-Deklaration.

**Weiterführende Links:**
- [Lean 4 Documentation - FFI](https://lean-lang.org/lean4/doc/dev/ffi.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- FFI über LuaJIT (nicht in Standard-Lua)
local ffi = require("ffi")

ffi.cdef[[
double sqrt(double x);
]]

local libm = ffi.load("m")
local result = libm.sqrt(4.0)
```

**Besonderheiten:**
- FFI nur in LuaJIT verfügbar
- Standard-Lua verwendet C-API für Erweiterungen
- LuaJIT FFI ist sehr performant

**Weiterführende Links:**
- [LuaJIT FFI Documentation](https://luajit.org/ext_ffi.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% FFI über pragma foreign_proc
:- module ffi_example.
:- interface.
:- import_module io.
:- pred main(io::di, io::uo) is det.
:- implementation.
:- import_module float, string.

% C-Funktion deklarieren
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

**Besonderheiten:**
- `pragma foreign_proc` für C-, Java- und C#-FFI
- Deklarative Angabe von Reinheitsgarantien (`will_not_call_mercury`, `promise_pure`)
- Unterstützt C (Standard-Backend), Java (`--grade java`) und C# (`--grade csharp`)
- Automatische Speicherverwaltung über den Mercury-GC auch bei FFI-Aufrufen

**Weiterführende Links:**
- [Mercury Language Reference - Foreign Language Interface](https://www.mercurylang.org/information/doc-release/mercury_ref/Foreign-language-interface.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# FFI über importc
proc sqrt(x: cdouble): cdouble {.importc: "sqrt", header: "<math.h>".}

let result = sqrt(4.0)
```

**Besonderheiten:**
- `importc` für C-Funktionen
- Automatische Typkonvertierung
- Unterstützt auch C++ über `importcpp`

**Weiterführende Links:**
- [Nim FFI Documentation](https://nim-lang.org/docs/manual.html#foreign-function-interface)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Kann C-Funktionen direkt aufrufen
#include <math.h>

double result = sqrt(4.0);

// Kann auch Objective-C++ verwenden
```

**Besonderheiten:**
- Direkte C-Kompatibilität
- Kann C++ über Objective-C++ aufrufen
- Unterstützt auch Swift-Interop

**Weiterführende Links:**
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

**Besonderheiten:**
- `external` für externe Funktionen
- `cdecl` für C-Konvention
- Unterstützt auch Windows-DLLs

**Weiterführende Links:**
- [Free Pascal External Functions](https://www.freepascal.org/docs-html/ref/refsu80.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* FFI über external *)
external sqrt : float -> float = "sqrt" [@@noalloc]

let result = sqrt 4.0
```

**Besonderheiten:**
- `external` für C-Funktionen
- `[@@noalloc]` für Funktionen ohne Allokation
- Unterstützt auch C++ über C-Wrapper

**Weiterführende Links:**
- [OCaml FFI Documentation](https://ocaml.org/manual/intfc.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// FFI über foreign
foreign import "system:libc.lib"
foreign libc {
    sqrt :: proc(x: f64) -> f64 ---
}

main :: proc() {
    result := sqrt(4.0)
}
```

**Besonderheiten:**
- `foreign` für externe Funktionen
- Direkte C-Kompatibilität
- Unterstützt auch Windows-APIs

**Weiterführende Links:**
- [Odin FFI Documentation](https://odin-lang.org/docs/overview/#foreign-system)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# XS für native Funktionen
use Math::Libm qw(sqrt);

my $result = sqrt(4.0);

# Oder über FFI::Raw
use FFI::Raw;

my $libm = FFI::Raw->new('libm.so.6', 'sqrt', FFI::Raw::double, FFI::Raw::double);
my $result = $libm->call(4.0);
```

**Besonderheiten:**
- XS (eXternal Subroutine) für native Funktionen
- FFI::Raw für dynamisches FFI
- Viele CPAN-Module nutzen XS

**Weiterführende Links:**
- [Perl XS Documentation](https://perldoc.perl.org/perlxs)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
// FFI seit PHP 7.4
$ffi = FFI::cdef("
    double sqrt(double x);
", "libm.so.6");

$result = $ffi->sqrt(4.0);
```

**Besonderheiten:**
- FFI seit PHP 7.4
- `FFI::cdef()` für C-Deklarationen
- Kann auch Header-Dateien einbinden

**Weiterführende Links:**
- [PHP FFI Documentation](https://www.php.net/manual/en/book.ffi.php)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- FFI über foreign import
foreign import sqrt :: Number -> Number

main = log $ show $ sqrt 4.0
```

**Besonderheiten:**
- `foreign import` für externe Funktionen
- Kompiliert zu JavaScript, nutzt dessen FFI-Mechanismen
- Unterstützt auch andere Backends

**Weiterführende Links:**
- [PureScript FFI Documentation](https://github.com/purescript/documentation/blob/master/language/FFI.md)

</TabItem>
<TabItem value="python" label="Python">

```python
# ctypes für C-Funktionen
from ctypes import CDLL, c_double

libm = CDLL("libm.so.6")
libm.sqrt.argtypes = [c_double]
libm.sqrt.restype = c_double

result = libm.sqrt(4.0)

# Oder cffi
from cffi import FFI
ffi = FFI()
ffi.cdef("double sqrt(double x);")
lib = ffi.dlopen("libm.so.6")
result = lib.sqrt(4.0)
```

**Besonderheiten:**
- `ctypes` in Standardbibliothek
- `cffi` als Alternative (C Foreign Function Interface)
- Automatische Typkonvertierung mit cffi

**Weiterführende Links:**
- [Python ctypes Documentation](https://docs.python.org/3/library/ctypes.html)

</TabItem>
<TabItem value="r" label="R">

```r
# C-Funktion über .C aufrufen (nach dyn.load)
# Benötigt: kompilierte C-Bibliothek
dyn.load("mylib.so")
result <- .C("my_add", x = as.double(2.0), y = as.double(3.0))$x

# Oder .Call für komplexere C-Funktionen (SEXP-basiert)
result <- .Call("my_complex_function", 42L)

# Rcpp für komfortables C++-Interface
# Benötigt: Rcpp-Paket
```

**Besonderheiten:**
- `.C()` für einfache C-Funktionen (Basisdatentypen)
- `.Call()` für C-Funktionen mit R-Objekten (SEXP)
- `.External()` für komplexere Fälle
- `Rcpp`-Paket als modernes C++-Interface

**Weiterführende Links:**
- [R Extensions - Interface Functions](https://cran.r-project.org/doc/manuals/r-release/R-exts.html#Interface-functions-.Call-and-.External)

</TabItem>

<TabItem value="racket" label="Racket">

```racket
#lang racket

; FFI über ffi/unsafe
(require ffi/unsafe)

(define libm (ffi-lib "libm"))
(define sqrt-func (get-ffi-obj "sqrt" libm (_fun _double -> _double)))

(define result (sqrt-func 4.0))
```

**Besonderheiten:**
- `ffi/unsafe` für C-FFI
- Automatische Typkonvertierung
- Unterstützt auch Callbacks

**Weiterführende Links:**
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

**Besonderheiten:**
- FFI gem für dynamisches FFI
- `attach_function` bindet C-Funktionen
- Unterstützt auch Callbacks

**Weiterführende Links:**
- [Ruby FFI Documentation](https://github.com/ffi/ffi)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// FFI über extern Blöcke
extern "C" {
    fn sqrt(x: f64) -> f64;
}

fn main() {
    unsafe {
        let result = sqrt(4.0);
    }
}
```

**Besonderheiten:**
- `extern "C"` für C-Funktionen
- `unsafe` Block erforderlich
- Unterstützt auch `extern "Rust"` für Rust-zu-Rust

**Weiterführende Links:**
- [Rust FFI Documentation](https://doc.rust-lang.org/nomicon/ffi.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// JNI über Java
class NativeMath {
  System.loadLibrary("mathlib")
  
  @native def sqrt(x: Double): Double
}

object Main extends App {
  val math = new NativeMath()
  val result = math.sqrt(4.0)
}
```

**Besonderheiten:**
- Nutzt JNI über Java
- `@native` Annotation für native Methoden
- Läuft auf der JVM

**Weiterführende Links:**
- [Scala Native Methods](https://docs.scala-lang.org/scala3/book/interacting-with-java.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; FFI über (chibi ffi) oder ähnliche Bibliotheken
(import (chibi ffi))

(define libm (load-library "libm.so.6"))
(define sqrt (foreign-procedure "sqrt" (double) double))

(define result (sqrt 4.0))
```

**Besonderheiten:**
- FFI über Bibliotheken wie `(chibi ffi)`
- Implementierungsabhängig
- Viele Scheme-Implementierungen haben eigene FFI-Mechanismen

**Weiterführende Links:**
- [Chibi Scheme FFI](https://github.com/ashinn/chibi-scheme)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// FFI über C-Interoperabilität
import Darwin

let result = sqrt(4.0)

// Oder für eigene C-Funktionen
import Foundation

@_silgen_name("my_c_function")
func myCFunction(_ x: Double) -> Double

let result2 = myCFunction(4.0)
```

**Besonderheiten:**
- Direkte C-Kompatibilität
- `@_silgen_name` für C-Funktionen
- Kann auch Objective-C aufrufen

**Weiterführende Links:**
- [Apple Swift Interoperability](https://www.swift.org/documentation/c-interop/)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Benötigt: Imports System.Runtime.InteropServices
' P/Invoke wie C#
<DllImport("kernel32.dll", SetLastError:=True)>
Function Beep(dwFreq As UInteger, dwDuration As UInteger) As Boolean
End Function

Sub Main()
    Beep(1000, 500)
End Sub
```

**Besonderheiten:**
- Verwendet P/Invoke wie C#
- Unterstützt auch COM-Interop
- Native AOT mit `LibraryImport` (seit .NET 7)

**Weiterführende Links:**
- [Microsoft VB.NET Interop Documentation](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/com-interop/)

</TabItem>
<TabItem value="v" label="V">

```v
// FFI über [C] Attribute
[C]
fn sqrt(x f64) f64

fn main() {
    result := sqrt(4.0)
}
```

**Besonderheiten:**
- `[C]` Attribute für C-Funktionen
- Automatische Typkonvertierung
- Unterstützt auch Windows-APIs

**Weiterführende Links:**
- [V FFI Documentation](https://github.com/vlang/v/blob/master/doc/docs.md#calling-c-code-from-v)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// FFI über extern
const std = @import("std");
const c = @cImport(@cInclude("math.h"));

pub fn main() void {
    const result = c.sqrt(4.0);
    _ = result;
}
```

**Besonderheiten:**
- `@cImport` für C-Header
- `@cInclude` für Header-Dateien
- Direkte C-Kompatibilität

**Weiterführende Links:**
- [Zig C Interoperability](https://ziglang.org/documentation/0.11.0/#C)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Benötigt: (ql:quickload :cffi)

;; C-Bibliothek laden
(cffi:load-foreign-library "libm.so")

;; C-Funktion deklarieren
(cffi:defcfun "sqrt" :double
  (x :double))

;; C-Funktion aufrufen
(sqrt 2.0d0)  ; 1.4142135623730951d0

;; C-Struct definieren
(cffi:defcstruct point
  (x :double)
  (y :double))
```

**Besonderheiten:**
- CFFI ist die portable FFI-Bibliothek für Common Lisp
- Unterstützt C-Funktionsaufrufe, Structs, Pointer, Callbacks
- Implementierungen haben auch eigene FFI-Mechanismen (z.B. SBCL's `sb-alien`)
- Automatische Typkonvertierung zwischen Lisp und C

**Weiterführende Links:**
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

**Besonderheiten:**
- `%foreign` Direktive für FFI-Deklarationen
- Unterstützt C und JavaScript FFI
- Backend-spezifische FFI-Syntax
- Typsichere Wrapper um fremde Funktionen

**Weiterführende Links:**
- [Idris 2 Documentation - FFI](https://idris2.readthedocs.io/en/latest/ffi/ffi.html)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% FFI: Aufruf von C-Bibliotheken
% Benötigt: Shared Library (.so/.dll) und Header-Datei
loadlibrary('mylib', 'mylib.h');
result = calllib('mylib', 'add', 3, 4);
unloadlibrary('mylib');

% MEX-Funktionen: C/C++/Fortran Code als MATLAB-Funktionen
% Kompiliert mit: mex myfunction.c
```

**Besonderheiten:**
- `calllib` für Aufruf von Shared Libraries zur Laufzeit
- MEX-Dateien für kompilierte C/C++/Fortran-Erweiterungen
- Unterstützt auch Java-, Python- und .NET-Interop

**Weiterführende Links:**
- [MATLAB Documentation - Call C Shared Libraries](https://www.mathworks.com/help/matlab/call-c-library-functions.html)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
% Aufruf einer C-Funktion über mex-Interface
% mex my_function.c
% result = my_function(arg1, arg2);

% Dynamisches Laden von Shared Libraries
autoload("my_func", "my_lib.oct");
```

**Besonderheiten:**
- oct-Dateien: Native Octave-C++-Interface
- mex-Dateien: MATLAB-kompatibles C/C++-Interface
- `mkoctfile` zum Kompilieren von oct-Dateien
- `mex` zum Kompilieren von mex-Dateien

**Weiterführende Links:**
- [GNU Octave Documentation - External Code Interface](https://octave.org/doc/v8.1.0/External-Code-Interface.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- FFI über Platform-Konzept
-- Platforms sind in Rust, Zig oder C implementiert
-- und stellen I/O-Funktionen für Roc bereit

-- app-Deklaration verbindet mit Platform
app "myapp"
    packages { pf: "..." }
    provides [main] to pf
```

**Besonderheiten:**
- FFI über Platform-Konzept
- Platforms werden in Rust, Zig oder C implementiert
- Klare Grenze zwischen Roc-Code und nativen Funktionen

**Weiterführende Links:**
- [Roc Documentation](https://www.roc-lang.org/)

</TabItem>

<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* LibraryLink für C/C++-Integration *)
lib = LibraryFunctionLoad["mylib", "add", {Integer, Integer}, Integer]
result = lib[3, 4]  (* 7 *)

(* ExternalEvaluate für andere Sprachen *)
ExternalEvaluate["Python", "1 + 2"]  (* 3 *)
```

**Besonderheiten:**
- `LibraryLink` für C/C++-Bibliotheken
- `ExternalEvaluate` für Python, JavaScript, NodeJS, Ruby etc.
- WSTP (Wolfram Symbolic Transfer Protocol) für bidirektionale Kommunikation

**Weiterführende Links:**
- [Wolfram Language Documentation - LibraryLink](https://reference.wolfram.com/language/guide/LibraryLink.html)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% FFI über die Foreign Language Interface (SWI-Prolog)
% C-Funktion in Prolog einbinden

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

**Besonderheiten:**
- SWI-Prolog bietet eine umfangreiche C Foreign Language Interface
- C-Funktionen werden als Prolog-Prädikate über `PL_register_foreign()` registriert
- Bidirektionaler Datenaustausch über `term_t`-Typen und `PL_get_*`/`PL_unify_*`-Funktionen
- GNU Prolog bietet ebenfalls ein C-Interface über `gplc`

**Weiterführende Links:**
- [SWI-Prolog Documentation - Foreign Language Interface](https://www.swi-prolog.org/pldoc/man?section=foreign)

</TabItem>
</Tabs>


## 17.4.2. C/C++ ABI Interop

Direkte Kompatibilität mit der C/C++ Application Binary Interface (ABI) für effiziente Interoperabilität ohne zusätzliche Wrapper-Schichten.

### Sprachen {#sprachen}

<Tabs availableTabs={['ada', 'c', 'carbon', 'cpp', 'crystal', 'd', 'fortran', 'fsharp', 'go', 'haskell', 'julia', 'koka', 'lean4', 'mercury', 'nim', 'object-pascal', 'objective-c', 'ocaml', 'octave', 'odin', 'prolog', 'rust', 'swift', 'v', 'vbnet', 'zig']} yellowTabs={['kotlin']}>
<TabItem value="ada" label="Ada">

```ada
-- Direkte C ABI Kompatibilität
with Interfaces.C;
procedure C_ABI_Interop is
   function C_Function (X : Interfaces.C.Int) return Interfaces.C.Int;
   pragma Import (C, C_Function, "c_function");
   
   Result : Interfaces.C.Int;
begin
   Result := C_Function (42);
end C_ABI_Interop;
```

**Besonderheiten:**
- Direkte C ABI Kompatibilität über `Interfaces.C`
- `pragma Import` mit C-Konvention
- Unterstützt auch C++ über Binding-Generatoren

**Weiterführende Links:**
- [Ada Reference Manual - Interfacing with C](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-B-3.html)

</TabItem>
<TabItem value="c" label="C">

```c
// Native C ABI - Standard für alle anderen Sprachen
int add(int a, int b) {
    return a + b;
}

// Header-Datei für externe Nutzung
// extern int add(int a, int b);
```

**Besonderheiten:**
- C definiert das Standard-ABI, an dem sich andere Sprachen orientieren
- Funktionen sind über Header-Dateien für andere Compilation Units verfügbar
- Nahezu jede Programmiersprache bietet FFI-Bindungen für C-Funktionen

**Weiterführende Links:**
- [C Standard - External Definitions](https://en.cppreference.com/w/c/language/extern)

</TabItem>

<TabItem value="carbon" label="Carbon">

```carbon
// Carbon zielt auf C++ ABI Kompatibilität ab
// (Sprache noch in Entwicklung)
package Interop api;

// Carbon soll direkt mit C++ ABI kompatibel sein
```

**Besonderheiten:**
- Ziel: Direkte C++ ABI Kompatibilität
- Sprache noch in Entwicklung
- Soll C++ Code direkt aufrufen können

**Weiterführende Links:**
- [Carbon Language - Interoperability](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// C++ ABI - Name Mangling für Typ-Sicherheit
int add(int a, int b) {
    return a + b;
}

// C ABI Kompatibilität über extern "C"
extern "C" {
    int add_c(int a, int b) {
        return a + b;
    }
}
```

**Besonderheiten:**
- C++ ABI mit Name Mangling
- `extern "C"` für C-Kompatibilität
- Verschiedene ABI-Versionen (Itanium, MSVC)

**Weiterführende Links:**
- [C++ ABI Documentation](https://itanium-cxx-abi.github.io/cxx-abi/)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Direkte C ABI Kompatibilität
@[Link("mylib")]
lib MyLib
  fun add(a : Int32, b : Int32) : Int32
end

result = MyLib.add(10, 20)
```

**Besonderheiten:**
- Direkte C ABI Kompatibilität über `lib`-Blöcke
- Automatische Typkonvertierung
- Keine zusätzlichen Wrapper-Schichten

**Weiterführende Links:**
- [Crystal C Bindings](https://crystal-lang.org/reference/guides/c_bindings/)

</TabItem>
<TabItem value="d" label="D">

```d
// Direkte C/C++ ABI Kompatibilität
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

**Besonderheiten:**
- `extern(C)` für C ABI
- `extern(C++)` für C++ ABI
- Direkte Kompatibilität ohne Wrapper

**Weiterführende Links:**
- [D Language - C++ Interfacing](https://dlang.org/spec/cpp_interface.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Benötigt: open System.Runtime.InteropServices
// Native AOT mit direkter C ABI (seit .NET 7)
[<LibraryImport("mylib.dll")>]
static partial int Add(int a, int b)

// P/Invoke (traditionell)
[<DllImport("mylib.dll")>]
extern int AddPInvoke(int a, int b)
```

**Besonderheiten:**
- `LibraryImport` für Native AOT mit direkter C ABI (seit .NET 7)
- P/Invoke für traditionelle Interop
- Unterstützt auch C++ über C-Wrapper

**Weiterführende Links:**
- [F# Native Interop](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/functions/external-functions)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! ISO_C_BINDING für direkte C ABI Kompatibilität
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

**Besonderheiten:**
- `ISO_C_BINDING` für direkte C ABI (seit Fortran 2003)
- `bind(c)` für C-Kompatibilität
- Direkte ABI-Kompatibilität ohne Wrapper

**Weiterführende Links:**
- [Fortran ISO_C_BINDING](https://gcc.gnu.org/onlinedocs/gfortran/ISO_005fC_005fBINDING.html)

</TabItem>
<TabItem value="go" label="Go">

```go
// cgo für direkte C ABI Kompatibilität
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

**Besonderheiten:**
- `cgo` ermöglicht direkte C ABI Kompatibilität
- Automatische Typkonvertierung
- Kann auch C++ über C-Wrapper aufrufen

**Weiterführende Links:**
- [Go CGO Documentation](https://pkg.go.dev/cmd/cgo)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Direkte C ABI Kompatibilität
{-# LANGUAGE ForeignFunctionInterface #-}

import Foreign.C.Types

foreign import ccall "add"
  c_add :: CInt -> CInt -> CInt

main :: IO ()
main = print $ c_add 10 20
```

**Besonderheiten:**
- `foreign import ccall` für direkte C ABI
- Automatische Typkonvertierung
- Unterstützt auch `stdcall` und `cplusplus`

**Weiterführende Links:**
- [Haskell FFI Documentation](https://wiki.haskell.org/Foreign_Function_Interface)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Direkte C ABI Kompatibilität über ccall
result = ccall((:add, "mylib"), Cint, (Cint, Cint), 10, 20)

# Oder mit @ccall Makro (seit Julia 1.9)
using Libdl
lib = dlopen("mylib")
add_func = dlsym(lib, :add)
result = @ccall add_func(10::Cint, 20::Cint)::Cint
```

**Besonderheiten:**
- `ccall` für direkte C ABI
- `@ccall` Makro seit Julia 1.9
- Automatische Typkonvertierung

**Weiterführende Links:**
- [Julia C Interface](https://docs.julialang.org/en/v1/manual/calling-c-and-fortran-code/)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
// Direkte C ABI Kompatibilität (Koka kompiliert zu C)
extern import
  c file "native-math.c"
  c header "native-math.h"

// C-Funktionen direkt aufrufen
extern c-add(x : int32, y : int32) : int32
  c "add"

extern c-multiply(x : float64, y : float64) : float64
  c "multiply"

fun main()
  val sum = c-add(10.int32, 20.int32)
  val product = c-multiply(3.14, 2.0)
  println("Sum: " ++ sum.show ++ ", Product: " ++ product.show)
```

**Besonderheiten:**
- Koka kompiliert zu C – nahtlose C ABI Kompatibilität
- `extern`-Deklarationen binden C-Funktionen direkt ein
- C-Header und C-Dateien können direkt eingebunden werden
- Kein Overhead durch direkte C-Code-Generierung

**Weiterführende Links:**
- [Koka Documentation - External Functions](https://koka-lang.github.io/koka/doc/book.html#sec-extern)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Direkte C ABI Kompatibilität (Lean 4 kompiliert zu C)
-- C-Funktionen über @[extern] einbinden
@[extern "add"]
opaque cAdd : Int32 → Int32 → Int32

@[extern "multiply"]
opaque cMultiply : Float → Float → Float

-- In einer .c Datei:
-- int32_t add(int32_t x, int32_t y) { return x + y; }
-- double multiply(double x, double y) { return x * y; }

def main : IO Unit := do
  IO.println s!"Sum: {cAdd 10 20}"
  IO.println s!"Product: {cMultiply 3.14 2.0}"
```

**Besonderheiten:**
- Lean 4 kompiliert zu C – nahtlose C ABI Kompatibilität.
- `@[extern "c_name"]` bindet C-Funktionen direkt ein.
- C-Header und C-Dateien werden über das Lake-Build-System eingebunden.
- Kein Overhead durch direkte C-Code-Generierung.

**Weiterführende Links:**
- [Lean 4 Documentation - FFI](https://lean-lang.org/lean4/doc/dev/ffi.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Kotlin/Native für direkte C ABI
import kotlinx.cinterop.*

@OptIn(ExperimentalForeignApi::class)
fun main() {
    platform.posix.printf("Hello from C\n")
    
    // Direkte C-Funktionsaufrufe
    val result = platform.posix.add(10, 20)
}
```

**Besonderheiten:**
- Kotlin/Native unterstützt direkte C ABI
- `kotlinx.cinterop` für C-Interoperabilität
- JVM-Version nutzt JNI (keine direkte ABI)

**Weiterführende Links:**
- [Kotlin Native Interop](https://kotlinlang.org/docs/native-interop.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Direkte C ABI Kompatibilität (Mercury kompiliert zu C)
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

**Besonderheiten:**
- Mercury kompiliert zu C – direkte C ABI Kompatibilität ohne Overhead
- `pragma foreign_proc("C", ...)` für Inline-C-Code in Mercury-Prädikaten
- C-Header über `pragma foreign_decl` einbindbar
- Shared Libraries können direkt gelinkt werden

**Weiterführende Links:**
- [Mercury Language Reference - Foreign Language Interface](https://www.mercurylang.org/information/doc-release/mercury_ref/Foreign-language-interface.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Direkte C ABI Kompatibilität
proc add(a: cint, b: cint): cint {.importc: "add", header: "mylib.h".}

let result = add(10, 20)
```

**Besonderheiten:**
- `importc` für direkte C ABI
- Automatische Typkonvertierung
- Unterstützt auch C++ über `importcpp`

**Weiterführende Links:**
- [Nim FFI Documentation](https://nim-lang.org/docs/manual.html#foreign-function-interface)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Direkte C ABI Kompatibilität
#include <stdio.h>

int add(int a, int b) {
    return a + b;
}

int result = add(10, 20);
```

**Besonderheiten:**
- Direkte C ABI Kompatibilität
- Kann C++ über Objective-C++ aufrufen
- Unterstützt auch Swift-Interop

**Weiterführende Links:**
- [Apple Objective-C Documentation](https://developer.apple.com/documentation/objectivec)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Direkte C ABI Kompatibilität
function add(a, b: Integer): Integer; cdecl; external 'mylib.so' name 'add';

var
  result: Integer;
begin
  result := add(10, 20);
end.
```

**Besonderheiten:**
- `external` mit `cdecl` für direkte C ABI
- Unterstützt auch Windows-DLLs
- Direkte Kompatibilität ohne Wrapper

**Weiterführende Links:**
- [Free Pascal External Functions](https://www.freepascal.org/docs-html/ref/refsu80.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Direkte C ABI Kompatibilität *)
external add : int -> int -> int = "add" [@@noalloc]

let result = add 10 20
```

**Besonderheiten:**
- `external` für direkte C ABI
- `[@@noalloc]` für Funktionen ohne Allokation
- Unterstützt auch C++ über C-Wrapper

**Weiterführende Links:**
- [OCaml FFI Documentation](https://ocaml.org/manual/intfc.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Direkte C ABI Kompatibilität
foreign import "system:libc.lib"
foreign libc {
    add :: proc(a, b: i32) -> i32 ---
}

main :: proc() {
    result := add(10, 20)
}
```

**Besonderheiten:**
- `foreign` für direkte C ABI
- Automatische Typkonvertierung
- Unterstützt auch Windows-APIs

**Weiterführende Links:**
- [Odin FFI Documentation](https://odin-lang.org/docs/overview/#foreign-system)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Direkte C ABI Kompatibilität
extern "C" {
    fn add(a: i32, b: i32) -> i32;
}

fn main() {
    unsafe {
        let result = add(10, 20);
    }
}

// Rust kann auch C++ über extern "C++" aufrufen (seit Rust 1.70, unstable)
```

**Besonderheiten:**
- `extern "C"` für direkte C ABI
- `unsafe` Block erforderlich
- `extern "C++"` für C++ ABI (unstable, seit Rust 1.70)

**Weiterführende Links:**
- [Rust FFI Documentation](https://doc.rust-lang.org/nomicon/ffi.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Direkte C ABI Kompatibilität
import Darwin

// Swift kann C-Funktionen direkt aufrufen
let result = add(10, 20)

// Oder mit @_silgen_name
@_silgen_name("add")
func add(_ a: Int32, _ b: Int32) -> Int32

let result2 = add(10, 20)
```

**Besonderheiten:**
- Direkte C ABI Kompatibilität
- `@_silgen_name` für C-Funktionen
- Kann auch Objective-C aufrufen

**Weiterführende Links:**
- [Apple Swift Interoperability](https://www.swift.org/documentation/c-interop/)

</TabItem>
<TabItem value="v" label="V">

```v
// Direkte C ABI Kompatibilität
[C]
fn add(a int, b int) int

fn main() {
    result := add(10, 20)
}
```

**Besonderheiten:**
- `[C]` Attribute für direkte C ABI
- Automatische Typkonvertierung
- Unterstützt auch Windows-APIs

**Weiterführende Links:**
- [V FFI Documentation](https://github.com/vlang/v/blob/master/doc/docs.md#calling-c-code-from-v)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Benötigt: Imports System.Runtime.InteropServices
' Native AOT mit direkter C ABI (seit .NET 7)
<LibraryImport("mylib.dll")>
Function Add(a As Integer, b As Integer) As Integer
End Function

Sub Main()
    Dim result As Integer = Add(10, 20)
End Sub
```

**Besonderheiten:**
- `LibraryImport` für Native AOT mit direkter C ABI (seit .NET 7)
- P/Invoke für traditionelle Interop
- Unterstützt auch COM-Interop

**Weiterführende Links:**
- [Microsoft VB.NET Interop Documentation](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/com-interop/)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Direkte C ABI Kompatibilität
const std = @import("std");
const c = @cImport(@cInclude("mylib.h"));

pub fn main() void {
    const result = c.add(10, 20);
    _ = result;
}
```

**Besonderheiten:**
- `@cImport` für direkte C ABI
- `@cInclude` für Header-Dateien
- Vollständige C-Kompatibilität

**Weiterführende Links:**
- [Zig C Interoperability](https://ziglang.org/documentation/0.11.0/#C)

</TabItem>
<TabItem value="octave" label="Octave">

```cpp
// Beispiel einer oct-Datei (C++)
// Benötigt: mkoctfile my_add.cc
#include <octave/oct.h>

DEFUN_DLD (my_add, args, , "Add two values")
{
  double a = args(0).double_value();
  double b = args(1).double_value();
  return octave_value(a + b);
}
```

**Besonderheiten:**
- oct-Dateien verwenden die Octave-C++-API direkt
- mex-Dateien bieten MATLAB-kompatible C-API
- Voller Zugriff auf Octave-Datentypen aus C/C++

**Weiterführende Links:**
- [GNU Octave Documentation - Oct-Files](https://octave.org/doc/v8.1.0/Oct_002dFiles.html)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Direkte C ABI Kompatibilität über Foreign Language Interface
% C-Funktionen werden als Prolog-Prädikate registriert

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

**Besonderheiten:**
- SWI-Prolog nutzt die Standard-C-ABI für Foreign Predicates
- Shared Libraries (`.so`/`.dll`) werden direkt geladen
- `PL_register_foreign()` registriert C-Funktionen als Prolog-Prädikate
- GNU Prolog unterstützt ebenfalls direkten C-ABI-Zugriff über `gplc --c-compiler`

**Weiterführende Links:**
- [SWI-Prolog Documentation - Foreign Language Interface](https://www.swi-prolog.org/pldoc/man?section=foreign)

</TabItem>

</Tabs>


## 17.4.3. Language Interop (z.B. JVM-Sprachen untereinander)

Interoperabilität zwischen Sprachen, die auf derselben Laufzeitumgebung oder Plattform laufen, ohne externe Schnittstellen.

### Sprachen {#sprachen}

<Tabs availableTabs={['clojure', 'csharp', 'elixir', 'erlang', 'fsharp', 'gleam', 'groovy', 'java', 'javascript', 'kotlin', 'matlab', 'mercury', 'objective-c', 'racket', 'ruby', 'scala', 'typescript', 'vbnet']} yellowTabs={['mercury']}>
<TabItem value="clojure" label="Clojure">

```clojure
;; Interop mit Java (JVM)
(import 'java.util.ArrayList)

(def list (ArrayList.))
(.add list "Hello")
(.add list "World")

;; Interop mit anderen JVM-Sprachen
;; Kann Java-Klassen direkt verwenden
(def date (java.util.Date.))
```

**Besonderheiten:**
- Läuft auf der JVM, kann Java-Code direkt aufrufen
- Kann auch andere JVM-Sprachen über Java-Interfaces nutzen
- `import` für Java-Klassen
- Punkt-Notation für Methodenaufrufe

**Weiterführende Links:**
- [Clojure Java Interop](https://clojure.org/reference/java_interop)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Interop mit anderen .NET-Sprachen
// Kann F#-Module und VB.NET-Code aufrufen
// (wenn als .NET-Assembly kompiliert)

// Beispiel: F#-Funktion aus C# aufrufen
// namespace FSharpModule
// public static int Add(int a, int b) { ... }

int result = FSharpModule.Add(10, 20);
```

**Besonderheiten:**
- Läuft auf .NET, kann F# und VB.NET direkt aufrufen
- Gemeinsame Intermediate Language (IL)
- Kann auch andere .NET-Sprachen nutzen
- Gemeinsame Typen und Bibliotheken

**Weiterführende Links:**
- [Microsoft .NET Language Interoperability](https://learn.microsoft.com/en-us/dotnet/standard/language-interoperability)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Interop mit Erlang (BEAM)
:erlang.now()

# Kann Erlang-Module direkt aufrufen
:lists.reverse([1, 2, 3])

# Kann auch Gleam-Code nutzen (wenn kompiliert)
```

**Besonderheiten:**
- Läuft auf BEAM, kann Erlang-Code direkt aufrufen
- Gemeinsame Laufzeitumgebung
- Kann auch Gleam-Code nutzen (wenn zu Erlang kompiliert)
- Atome für Erlang-Module

**Weiterführende Links:**
- [Elixir Erlang Interop](https://elixir-lang.org/getting-started/erlang-libraries.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% Interop mit Elixir (BEAM)
% Kann Elixir-Module aufrufen, wenn kompiliert

% Beispiel: Elixir-Modul aus Erlang aufrufen
% 'Elixir.MyModule':function()
```

**Besonderheiten:**
- Läuft auf BEAM, kann Elixir-Code nutzen
- Gemeinsame Laufzeitumgebung
- Kann auch Gleam-Code nutzen (wenn zu Erlang kompiliert)
- Elixir-Module haben 'Elixir.'-Präfix

**Weiterführende Links:**
- [Erlang Interoperability](https://www.erlang.org/doc/tutorial/overview.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Interop mit anderen .NET-Sprachen
// Kann C#-Klassen direkt verwenden
let list = System.Collections.Generic.List<string>()
list.Add("Hello")

// Kann auch VB.NET-Code aufrufen
// (wenn als .NET-Assembly kompiliert)
```

**Besonderheiten:**
- Läuft auf .NET, kann C# und VB.NET direkt aufrufen
- Gemeinsame Intermediate Language (IL)
- Kann auch andere .NET-Sprachen nutzen
- Gemeinsame Typen und Bibliotheken

**Weiterführende Links:**
- [F# .NET Interoperability](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/interop/)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// Interop mit Erlang/Elixir (BEAM)
// Direkte Nutzung von Erlang-Funktionen via @external
@external(erlang, "lists", "reverse")
pub fn reverse(list: List(a)) -> List(a)

// Gleam-Module, die Erlang-Code wrappen
// Benötigt: import gleam/io
pub fn main() {
  io.println("Hello from Gleam")
}
```

**Besonderheiten:**
- Kompiliert zu Erlang, kann Erlang-Code direkt aufrufen via `@external`
- Läuft auf BEAM, kann Elixir-Code nutzen
- Gemeinsame Laufzeitumgebung mit Erlang und Elixir
- Typsichere FFI-Deklarationen

**Weiterführende Links:**
- [Gleam External Functions](https://tour.gleam.run/advanced-features/externals/)

</TabItem>

<TabItem value="groovy" label="Groovy">

```groovy
// Interop mit Java (JVM)
import java.util.ArrayList

def list = new ArrayList()
list.add("Hello")
list.add("World")

// Kann auch andere JVM-Sprachen über Java-Interfaces nutzen
// Kann Kotlin, Scala, Clojure-Code aufrufen (wenn kompiliert)
```

**Besonderheiten:**
- Läuft auf der JVM, kann Java-Code direkt aufrufen
- Kann auch andere JVM-Sprachen über Java-Interfaces nutzen
- Dynamische Typen für einfachere Interop
- Gemeinsame Bytecode-Ebene

**Weiterführende Links:**
- [Groovy Java Integration](https://groovy-lang.org/java-integration.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Interop mit anderen JVM-Sprachen
import java.util.*;

// Kann Kotlin, Scala, Groovy, Clojure-Code aufrufen
// (wenn als JVM-Bytecode kompiliert)

// Beispiel: Kotlin-Klasse aus Java aufrufen
// public class KotlinClass { ... }
KotlinClass instance = new KotlinClass();
```

**Besonderheiten:**
- Läuft auf der JVM, kann andere JVM-Sprachen aufrufen
- Gemeinsame Bytecode-Ebene
- Kann Kotlin, Scala, Groovy, Clojure nutzen
- Gemeinsame Typen und Bibliotheken

**Weiterführende Links:**
- [Oracle Java Platform](https://docs.oracle.com/javase/tutorial/)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Interop mit TypeScript (kompiliert zu JavaScript)
// TypeScript-Code wird zu JavaScript kompiliert

// Kann auch andere JS-Transpiler-Sprachen nutzen
// (CoffeeScript, Dart, etc.)

// Beispiel: TypeScript-Funktion aus JavaScript
function add(a, b) {
    return a + b;
}
```

**Besonderheiten:**
- Läuft in JavaScript-Engines, kann TypeScript-Code nutzen
- TypeScript kompiliert zu JavaScript
- Kann auch andere transpilierte Sprachen nutzen
- Gemeinsame Laufzeitumgebung

**Weiterführende Links:**
- [MDN JavaScript Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Interop mit Java (JVM)
import java.util.ArrayList

val list = ArrayList<String>()
list.add("Hello")
list.add("World")

// Kann auch andere JVM-Sprachen über Java-Interfaces nutzen
// Kann Scala, Groovy, Clojure-Code aufrufen (wenn kompiliert)
```

**Besonderheiten:**
- Läuft auf der JVM, kann Java-Code direkt aufrufen
- Kann auch andere JVM-Sprachen über Java-Interfaces nutzen
- `@JvmStatic` für Java-Kompatibilität
- Gemeinsame Bytecode-Ebene

**Weiterführende Links:**
- [Kotlin Java Interop](https://kotlinlang.org/docs/java-interop.html)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
;; Datei: math-typed.rkt
;; #lang typed/racket
;; (provide add)
;; (: add (-> Integer Integer Integer))
;; (define (add a b) (+ a b))

;; Datei: main.rkt
#lang racket
(require "math-typed.rkt")  ; Typed Racket aus ungetyptem Racket
(add 5 3)  ; 8
```

**Besonderheiten:**
- Unterstützt verschiedene `#lang`-Dialekte pro Datei
- Kann Typed Racket, R5RS, etc. nutzen
- Contracts werden automatisch an Sprachgrenzen eingefügt
- Gemeinsame Racket-Laufzeitumgebung

**Weiterführende Links:**
- [Racket Language Interoperability](https://docs.racket-lang.org/guide/languages.html)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Interop mit anderen Ruby-Implementierungen
# (wenn kompatibel)

# Kann auch JRuby (JVM) oder mruby nutzen
# (wenn kompatibel)

# Beispiel: JRuby kann Java-Code aufrufen
# require 'java'
# java_import 'java.util.ArrayList'
```

**Besonderheiten:**
- Verschiedene Implementierungen (CRuby, JRuby, mruby)
- JRuby läuft auf JVM, kann Java-Code aufrufen
- Gemeinsame Ruby-Sprache, verschiedene Laufzeiten
- Kann auch andere Ruby-Implementierungen nutzen

**Weiterführende Links:**
- [Ruby Documentation](https://www.ruby-lang.org/en/documentation/)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Interop mit Java (JVM)
import java.util.ArrayList

val list = new ArrayList[String]()
list.add("Hello")
list.add("World")

// Kann auch andere JVM-Sprachen über Java-Interfaces nutzen
// Kann Kotlin, Groovy, Clojure-Code aufrufen (wenn kompiliert)
```

**Besonderheiten:**
- Läuft auf der JVM, kann Java-Code direkt aufrufen
- Kann auch andere JVM-Sprachen über Java-Interfaces nutzen
- `@ScalaSignature` für Scala-spezifische Features
- Gemeinsame Bytecode-Ebene

**Weiterführende Links:**
- [Scala Java Interop](https://docs.scala-lang.org/scala3/book/interacting-with-java.html)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Interop mit JavaScript
// TypeScript kompiliert zu JavaScript

// Kann JavaScript-Code direkt nutzen
function add(a: number, b: number): number {
    return a + b;
}

// Kann auch andere transpilierte Sprachen nutzen
// (wenn zu JavaScript kompiliert)
```

**Besonderheiten:**
- Kompiliert zu JavaScript, kann JS-Code direkt nutzen
- Läuft in JavaScript-Engines
- Kann auch andere transpilierte Sprachen nutzen
- Gemeinsame Laufzeitumgebung

**Weiterführende Links:**
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Interop mit anderen .NET-Sprachen
' Kann C#-Klassen direkt verwenden
Dim list As New System.Collections.Generic.List(Of String)()
list.Add("Hello")

' Kann auch F#-Code aufrufen
' (wenn als .NET-Assembly kompiliert)
```

**Besonderheiten:**
- Läuft auf .NET, kann C# und F# direkt aufrufen
- Gemeinsame Intermediate Language (IL)
- Kann auch andere .NET-Sprachen nutzen
- Gemeinsame Typen und Bibliotheken

**Weiterführende Links:**
- [Microsoft VB.NET Interoperability](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/interoperability/)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% Java Interop (nativ unterstützt)
list = java.util.ArrayList();
list.add("Hello");
list.add("World");

% Python Interop (seit R2014b)
np = py.importlib.import_module('numpy');
arr = np.array({1, 2, 3});
```

**Besonderheiten:**
- Native Java-Integration (JVM läuft innerhalb von MATLAB)
- Python-Interop seit R2014b mit `py.`-Syntax
- .NET-Interop auf Windows
- COM-Interop auf Windows

**Weiterführende Links:**
- [MATLAB Documentation - Call Python from MATLAB](https://www.mathworks.com/help/matlab/call-python-libraries.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Language Interop über JVM-Backend (--grade java)
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

**Besonderheiten:**
- Mit `--grade java` kompiliert Mercury zu Java-Klassen, die von anderen JVM-Sprachen aufrufbar sind
- `pragma foreign_proc("Java", ...)` ermöglicht Aufrufe von Java-Code aus Mercury
- Mit `--grade csharp` analog für .NET-Interop mit C#, F#, VB.NET
- Interop erfordert explizite `foreign_proc`-Deklarationen (kein nahtloser Zugriff)

**Weiterführende Links:**
- [Mercury Language Reference - Foreign Language Interface](https://www.mercurylang.org/information/doc-release/mercury_ref/Foreign-language-interface.html)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// C-Interop (direkt, da Superset)
int result = printf("C-Funktion: %d\n", 42);

// C++-Interop (Objective-C++ mit .mm Dateien)
// std::vector<int> vec = {1, 2, 3}; // In .mm Dateien möglich

// Swift-Interop (über Bridging Header)
// Swift-Klassen können aus Objective-C verwendet werden
// ObjC-Klassen können aus Swift verwendet werden
```

**Besonderheiten:**
- Direkte C-Kompatibilität (ObjC ist C-Superset)
- Objective-C++ (.mm Dateien) für C++-Interop
- Swift-Interop über Bridging Headers und @objc Attribut
- Keine JVM/CLR-Interoperabilität

**Weiterführende Links:**
- [Apple Documentation - Swift and Objective-C Interoperability](https://developer.apple.com/documentation/swift/importing-objective-c-into-swift)

</TabItem>
</Tabs>

