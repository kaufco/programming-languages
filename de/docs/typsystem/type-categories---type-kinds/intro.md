---
slug: /typsystem/type-categories---type-kinds
title: 3.2. Type Categories / Type Kinds
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 3.2. Type Categories / Type Kinds

Klassifiziert verschiedene Typkategorien und ihre Eigenschaften.

## 3.2.1. Primitive Types

Grundlegende, vom Sprachsystem bereitgestellte Typen, die nicht aus anderen Typen zusammengesetzt sind.

### Sprachen {#sprachen}

<Tabs availableTabs={['ada', 'c', 'carbon', 'csharp', 'cpp', 'clojure', 'common-lisp', 'crystal', 'd', 'dart', 'eiffel', 'elixir', 'elm', 'erlang', 'fsharp', 'fortran', 'gleam', 'go', 'groovy', 'haskell', 'haxe', 'idris', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'lua', 'matlab', 'mercury', 'mojo', 'nim', 'objective-c', 'object-pascal', 'ocaml', 'octave', 'odin', 'perl', 'php', 'prolog', 'purescript', 'python', 'r', 'racket', 'roc', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'vbnet', 'v', 'wolfram-language', 'zig']}>
<TabItem value="ada" label="Ada">

```ada
-- Primitive Types: Integer, Float, Boolean, Character
x : Integer := 42;
y : Float := 3.14;
flag : Boolean := True;
ch : Character := 'A';
```

**Besonderheiten:**
- Integer, Float, Boolean und Character sind primitive Typen
- Weitere primitive Typen: Wide_Character, Wide_Wide_Character
- Numerische Typen können mit Range Constraints versehen werden

**Weiterführende Links:**
- [Ada Reference Manual - Types](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-3.html)

</TabItem>
<TabItem value="c" label="C">

```c
// Primitive Types: int, float, double, char, _Bool
int x = 42;
float y = 3.14f;
double z = 3.14159;
char ch = 'A';
_Bool flag = 1;
```

**Besonderheiten:**
- Grundlegende primitive Typen: int, float, double, char, _Bool (seit C99)
- Weitere primitive Typen: short, long, long long, unsigned Varianten
- void ist ein spezieller primitiver Typ

**Weiterführende Links:**
- [C Standard - Types](https://en.cppreference.com/w/c/language/types)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Primitive Types: i8, i16, i32, i64, f32, f64, bool, char
var x: i32 = 42;
var y: f64 = 3.14;
var flag: bool = true;
var ch: char = 'A';
```

**Besonderheiten:**
- Explizite Größenangaben: i8, i16, i32, i64 für Integer, f32, f64 für Floats
- bool und char sind primitive Typen
- Experimentelle Sprache, Syntax kann sich noch ändern

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Primitive Types: int, float, double, bool, char, byte, etc.
int x = 42;
float y = 3.14f;
double z = 3.14159;
bool flag = true;
char ch = 'A';
byte b = 255;
```

**Besonderheiten:**
- Viele primitive Typen: sbyte, byte, short, ushort, int, uint, long, ulong, float, double, decimal, bool, char
- Alle primitiven Typen sind Aliase für .NET-Typen (z.B. int = System.Int32)
- decimal ist ein 128-bit Fließkommatyp für finanzielle Berechnungen

**Weiterführende Links:**
- [Microsoft C# Documentation - Built-in Types](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Primitive Types: int, float, double, bool, char, etc.
int x = 42;
float y = 3.14f;
double z = 3.14159;
bool flag = true;
char ch = 'A';
```

**Besonderheiten:**
- Grundlegende primitive Typen: bool, char, int, float, double
- Weitere primitive Typen: short, long, long long, unsigned Varianten, wchar_t, char16_t, char32_t
- void ist ein spezieller primitiver Typ

**Weiterführende Links:**
- [cppreference.com - Fundamental Types](https://en.cppreference.com/w/cpp/language/types)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Primitive Types: long, double, boolean, char
(def x 42)  ; long
(def y 3.14)  ; double
(def flag true)  ; boolean
(def ch \A)  ; char
```

**Besonderheiten:**
- Primitive Typen: long, double, boolean, char
- Alle Werte sind Objekte, aber primitive Typen werden für Performance optimiert
- Weitere primitive Typen: byte, short, int, float

**Weiterführende Links:**
- [Clojure Documentation - Primitives](https://clojure.org/reference/java-interop#primitives)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Primitive Types: number, character, boolean
(defvar x 42)  ; integer
(defvar y 3.14)  ; float
(defvar flag t)  ; boolean
(defvar ch #\A)  ; character
```

**Besonderheiten:**
- Primitive Typen: number (integer, float, ratio, complex), character, boolean (t/nil)
- Alle Werte sind Objekte, aber es gibt primitive Typen auf niedriger Ebene
- number umfasst verschiedene numerische Typen

**Weiterführende Links:**
- [Common Lisp HyperSpec - Types](http://www.lispworks.com/documentation/HyperSpec/Body/t.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Primitive Types: Int32, Float64, Bool, Char
x : Int32 = 42
y : Float64 = 3.14
flag : Bool = true
ch : Char = 'A'
```

**Besonderheiten:**
- Primitive Typen: Int8, Int16, Int32, Int64, UInt8, UInt16, UInt32, UInt64, Float32, Float64, Bool, Char
- Alle Typen sind Objekte, aber primitive Typen werden für Performance optimiert
- Nil ist ein spezieller primitiver Typ

**Weiterführende Links:**
- [Crystal Documentation - Primitive Types](https://crystal-lang.org/reference/1.11/syntax_and_semantics/literals.html)

</TabItem>
<TabItem value="d" label="D">

```d
// Primitive Types: int, float, double, bool, char
int x = 42;
float y = 3.14f;
double z = 3.14159;
bool flag = true;
char ch = 'A';
```

**Besonderheiten:**
- Primitive Typen: bool, byte, ubyte, short, ushort, int, uint, long, ulong, float, double, real, ifloat, idouble, ireal, cfloat, cdouble, creal, char, wchar, dchar
- real, ifloat, idouble, ireal, cfloat, cdouble, creal sind extended precision types
- void ist ein spezieller primitiver Typ

**Weiterführende Links:**
- [D Language Specification - Fundamental Types](https://dlang.org/spec/type.html#fundamental-types)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Primitive Types: int, double, bool, String, null
int x = 42;
double y = 3.14;
bool flag = true;
String str = 'Hello';
```

**Besonderheiten:**
- Primitive Typen: int, double, bool, String, null
- Alle Werte sind Objekte, auch primitive Typen
- int und double sind arbitrary-precision Zahlen

**Weiterführende Links:**
- [Dart Documentation - Built-in Types](https://dart.dev/language/built-in-types)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
-- Primitive Types: INTEGER, REAL, BOOLEAN, CHARACTER
local
    x: INTEGER
    y: REAL
    flag: BOOLEAN
    ch: CHARACTER
do
    x := 42
    y := 3.14
    flag := True
    ch := 'A'
end
```

**Besonderheiten:**
- Primitive Typen: INTEGER, REAL, DOUBLE, BOOLEAN, CHARACTER
- Alle Typen sind Klassen, aber primitive Typen werden für Performance optimiert
- CHARACTER ist ein 8-bit Typ

**Weiterführende Links:**
- [Eiffel Documentation - Basic Types](https://www.eiffel.org/doc/eiffel/Eiffel_Standard)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Primitive Types: integer, float, boolean, atom
x = 42  # integer
y = 3.14  # float
flag = true  # boolean (atom)
atom = :hello  # atom
```

**Besonderheiten:**
- Primitive Typen: integer (arbitrary precision), float, boolean (atoms :true/:false), atom
- Alle Werte sind unveränderlich
- atom ist ein primitiver Typ für Konstanten

**Weiterführende Links:**
- [Elixir Documentation - Basic Types](https://elixir-lang.org/getting-started/basic-types.html)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Primitive Types: Int, Float, Bool, Char, String
x : Int
x = 42

y : Float
y = 3.14

flag : Bool
flag = True

ch : Char
ch = 'A'
```

**Besonderheiten:**
- Primitive Typen: Int, Float, Bool, Char, String
- Alle Typen sind unveränderlich
- String ist ein primitiver Typ (nicht eine Liste von Char)

**Weiterführende Links:**
- [Elm Documentation - Types](https://guide.elm-lang.org/types/)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% Primitive Types: integer, float, atom, boolean
X = 42,  % integer
Y = 3.14,  % float
Flag = true,  % boolean (atom)
Atom = hello.  % atom
```

**Besonderheiten:**
- Primitive Typen: integer (arbitrary precision), float, atom, boolean (atoms true/false)
- Alle Werte sind unveränderlich
- atom ist ein primitiver Typ für Konstanten

**Weiterführende Links:**
- [Erlang Documentation - Data Types](https://www.erlang.org/doc/reference_manual/data_types.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Primitive Types: int, float, float32, bool, char, byte, decimal
let x = 42  // int (System.Int32)
let y = 3.14  // float (System.Double, 64-bit)
let f = 3.14f  // float32 (System.Single, 32-bit)
let flag = true  // bool
let ch = 'A'  // char
let b = 255uy  // byte
```

**Besonderheiten:**
- Primitive Typen: sbyte, byte, int16, uint16, int32, uint32, int64, uint64, nativeint, unativeint, float32, float, decimal, bool, char, string
- `float` ist ein Alias für System.Double (64-bit), `float32` für System.Single (32-bit)
- Alle primitiven Typen sind .NET-Typen

**Weiterführende Links:**
- [F# Documentation - Primitive Types](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/basic-types)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Primitive Types: INTEGER, REAL, LOGICAL, CHARACTER
INTEGER :: x = 42
REAL :: y = 3.14
LOGICAL :: flag = .TRUE.
CHARACTER :: ch = 'A'
```

**Besonderheiten:**
- Primitive Typen: INTEGER, REAL, DOUBLE PRECISION, LOGICAL, CHARACTER
- Weitere primitive Typen: COMPLEX, DOUBLE COMPLEX
- CHARACTER kann eine Länge haben

**Weiterführende Links:**
- [Fortran Standard - Intrinsic Types](https://gcc.gnu.org/onlinedocs/gfortran/Intrinsic-Types.html)

</TabItem>
<TabItem value="gleam" label="Gleam">

```erlang
// Primitive Types: Int, Float, Bool
let x = 42  // Int
let y = 3.14  // Float
let flag = True  // Bool
```

**Besonderheiten:**
- Primitive Typen: Int (64-bit), Float (64-bit), Bool
- Alle Werte sind unveränderlich
- String ist ein primitiver Typ (nicht eine Liste von Char)

**Weiterführende Links:**
- [Gleam Documentation - Types](https://gleam.run/documentation/tour/types/)

</TabItem>
<TabItem value="go" label="Go">

```go
// Primitive Types: int, float64, bool, string, byte, rune
var x int = 42
var y float64 = 3.14
var flag bool = true
var str string = "Hello"
var b byte = 'A'
var r rune = 'A'
```

**Besonderheiten:**
- Primitive Typen: bool, string, int, int8, int16, int32, int64, uint, uint8, uint16, uint32, uint64, uintptr, byte (alias für uint8), rune (alias für int32), float32, float64, complex64, complex128
- int und uint haben plattformabhängige Größe
- string ist ein primitiver Typ

**Weiterführende Links:**
- [Go Language Specification - Types](https://go.dev/ref/spec#Types)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Primitive Types: int, double, boolean, char (mit Autoboxing)
int x = 42
double y = 3.14
boolean flag = true
char ch = 'A'
```

**Besonderheiten:**
- Primitive Types: byte, short, int, long, float, double, boolean, char
- Automatisches Autoboxing zu Wrapper-Klassen (Integer, Double, etc.)
- Groovy behandelt Primitive intern als Objekte (Autoboxing)

**Weiterführende Links:**
- [Groovy Documentation - Primitive Types](https://groovy-lang.org/objectorientation.html#_primitive_types)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Primitive Types: Int, Integer, Float, Double, Bool, Char
x :: Int
x = 42

y :: Double
y = 3.14

flag :: Bool
flag = True

ch :: Char
ch = 'A'
```

**Besonderheiten:**
- Primitive Typen: Int, Integer (arbitrary precision), Float, Double, Bool, Char
- Integer ist arbitrary-precision, Int ist fixed-size
- Alle Typen sind unveränderlich

**Weiterführende Links:**
- [Haskell Documentation - Basic Types](https://www.haskell.org/tutorial/basictypes.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Primitive Types: Int, Float, Bool
var x: Int = 42;
var y: Float = 3.14;
var flag: Bool = true;
```

**Besonderheiten:**
- Primitive Typen: Int, Float, Bool
- Weitere primitive Typen je nach Target: UInt (Flash/JS), Single (C#)
- Alle Typen werden je nach Target zu entsprechenden primitiven Typen kompiliert

**Weiterführende Links:**
- [Haxe Documentation - Basic Types](https://haxe.org/manual/types-basic-types.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Primitive Types: Int, Integer, Double, Bool, Char
x : Int
x = 42

y : Double
y = 3.14

flag : Bool
flag = True

ch : Char
ch = 'A'
```

**Besonderheiten:**
- Primitive Typen: Int, Integer (arbitrary precision), Double, Bool, Char
- Integer ist arbitrary-precision, Int ist fixed-size
- Alle Typen sind unveränderlich

**Weiterführende Links:**
- [Idris Documentation - Types](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html#types)

</TabItem>
<TabItem value="java" label="Java">

```java
// Primitive Types: int, double, boolean, char, byte, short, long, float
int x = 42;
double y = 3.14;
boolean flag = true;
char ch = 'A';
byte b = 127;
```

**Besonderheiten:**
- Primitive Typen: byte, short, int, long, float, double, boolean, char
- Autoboxing zu Wrapper-Klassen (Integer, Double, Boolean, Character, etc.)
- void ist ein spezieller primitiver Typ

**Weiterführende Links:**
- [Oracle Java Documentation - Primitive Types](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Primitive Types: number, boolean, string, null, undefined, symbol, bigint
let x = 42;  // number
let y = 3.14;  // number
let flag = true;  // boolean
let str = 'Hello';  // string
let n = null;  // null
let u = undefined;  // undefined
let sym = Symbol('id');  // symbol
let big = 9007199254740991n;  // bigint
```

**Besonderheiten:**
- Primitive Typen: number, boolean, string, null, undefined, symbol (seit ES6), bigint (seit ES2020)
- Alle Werte außer null und undefined haben Wrapper-Objekte
- string ist ein primitiver Typ, aber verhält sich wie ein Objekt

**Weiterführende Links:**
- [MDN Web Docs - Data Types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Primitive Types: Int, Float64, Bool, Char
x::Int = 42
y::Float64 = 3.14
flag::Bool = true
ch::Char = 'A'
```

**Besonderheiten:**
- Primitive Typen: Bool, Int8, UInt8, Int16, UInt16, Int32, UInt32, Int64, UInt64, Int128, UInt128, Float16, Float32, Float64, Char
- Viele numerische Typen mit expliziten Größen
- Alle Typen sind unveränderlich

**Weiterführende Links:**
- [Julia Documentation - Types](https://docs.julialang.org/en/v1/manual/types/)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Primitive Types: int, float64, bool, char, string
val x: int = 42
val y: float64 = 3.14
val flag: bool = True
val ch: char = 'A'
val name: string = "Hallo"
```

**Besonderheiten:**
- Primitive Typen: `int` (arbitrary precision), `float64`, `bool`, `char`, `string`, `()` (unit)
- `int` ist standardmäßig beliebig groß (arbitrary precision)
- Spezielle Typen: `int32`, `int64`, `ssize_t` über Standardbibliothek verfügbar
- Alle Werte sind unveränderlich (immutable by default)

**Weiterführende Links:**
- [Koka Standard Library - Types](https://koka-lang.github.io/koka/doc/std_core_types.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Primitive Types: Int, Double, Boolean, Char, Byte, Short, Long, Float
val x: Int = 42
val y: Double = 3.14
val flag: Boolean = true
val ch: Char = 'A'
val b: Byte = 127
```

**Besonderheiten:**
- Primitive Typen: Byte, Short, Int, Long, Float, Double, Boolean, Char
- Alle primitiven Typen haben nullable Varianten (Int?, Double?, etc.)
- Autoboxing nur wenn nötig (z.B. in generischen Typen)

**Weiterführende Links:**
- [Kotlin Documentation - Basic Types](https://kotlinlang.org/docs/basic-types.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Primitive Types: Nat, Int, Float, Bool, Char, String, UInt8, etc.
def x : Int := 42
def y : Float := 3.14
def flag : Bool := true
def ch : Char := 'A'
def n : Nat := 100
```

**Besonderheiten:**
- Primitive Typen: Nat, Int, UInt8/16/32/64, Int8/16/32/64, Float, Bool, Char, String
- `Nat` (natürliche Zahlen) und `Int` (ganze Zahlen) sind beliebig groß (arbitrary precision)
- `Float` ist 64-bit IEEE 754 (kein 32-bit Float)
- Alle Typen sind nicht-nullable

**Weiterführende Links:**
- [Lean 4 Documentation - Dependent Type Theory](https://lean-lang.org/theorem_proving_in_lean4/dependent_type_theory.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Primitive Types: number, boolean, string, nil
local x = 42  -- number
local y = 3.14  -- number
local flag = true  -- boolean
local str = "Hello"  -- string
local n = nil  -- nil
```

**Besonderheiten:**
- Primitive Typen: number (double precision float), boolean, string, nil
- number ist immer double precision float
- string ist ein primitiver Typ (internisiert)

**Weiterführende Links:**
- [Lua Documentation - Types](https://www.lua.org/manual/5.4/manual.html#2.1)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% Primitive Types: double, logical, char, int8, int16, int32, int64, etc.
x = 42;  % double (default)
y = 3.14;  % double
flag = true;  % logical
str = 'Hello';  % char array
```

**Besonderheiten:**
- Primitive Typen: double (default), single, int8, int16, int32, int64, uint8, uint16, uint32, uint64, logical, char
- double ist der Standard für numerische Werte
- char ist ein Array von Zeichen

**Weiterführende Links:**
- [MATLAB Documentation - Data Types](https://www.mathworks.com/help/matlab/data-types.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```mercury
% Primitive Types: int, float, char, string
:- pred main(io::di, io::uo) is det.
main(!IO) :-
    X = 42,            % int (maschinenabhängige Wortgröße)
    Y = 3.14,          % float (double precision)
    C = 'A',           % char (Unicode-Zeichen)
    S = "Hello",       % string (Zeichenkette)
    io.write_int(X, !IO), io.nl(!IO),
    io.write_float(Y, !IO), io.nl(!IO),
    io.write_char(C, !IO), io.nl(!IO),
    io.write_string(S, !IO), io.nl(!IO).
```

**Besonderheiten:**
- Primitive Typen: `int` (maschinenabhängig), `float` (double), `char` (Unicode), `string`
- `int` ist ein vorzeichenbehafteter Integer in Maschinenwortgröße
- `float` entspricht C `double` (64-bit IEEE 754)
- `string` ist eine Zeichenkette (nicht ein Array von Zeichen)

**Weiterführende Links:**
- [The Mercury Language Reference Manual - Builtin Types](https://www.mercurylang.org/documentation/reference.html#Builtin_types)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# Primitive Types: Int, Float64, Bool
var x: Int = 42
var y: Float64 = 3.14
var flag: Bool = true
```

**Besonderheiten:**
- Primitive Typen: Int, Int8, Int16, Int32, Int64, UInt8, UInt16, UInt32, UInt64, Float32, Float64, Bool
- Explizite Größenangaben für numerische Typen
- Alle Typen sind unveränderlich

**Weiterführende Links:**
- [Mojo Documentation - Types](https://docs.modular.com/mojo/manual/basics/types.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Primitive Types: int, float, bool, char
var x: int = 42
var y: float = 3.14
var flag: bool = true
var ch: char = 'A'
```

**Besonderheiten:**
- Primitive Typen: `int`, `int8`, `int16`, `int32`, `int64`, `uint`, `uint8`, `uint16`, `uint32`, `uint64`, `float`, `float32`, `float64`, `bool`, `char`
- `int` und `uint` haben plattformabhängige Größe (32-bit oder 64-bit)
- Variablen können mit `var` (veränderlich), `let` (unveränderlich) oder `const` (Compile-Time-Konstante) deklariert werden

**Weiterführende Links:**
- [Nim Documentation - Types](https://nim-lang.org/docs/manual.html#types)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Primitive Types: int, float, double, BOOL, char
int x = 42;
float y = 3.14f;
double z = 3.14159;
BOOL flag = YES;
char ch = 'A';
```

**Besonderheiten:**
- Primitive Typen: int, float, double, BOOL, char, short, long, long long, unsigned Varianten
- BOOL ist eigentlich ein typedef für signed char (YES/NO)
- Alle primitiven Typen sind C-kompatibel

**Weiterführende Links:**
- [Objective-C Documentation - Types](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Primitive Types: Integer, Real, Boolean, Char
var
  x: Integer = 42;
  y: Real = 3.14;
  flag: Boolean = True;
  ch: Char = 'A';
```

**Besonderheiten:**
- Primitive Typen: Integer, Real, Double, Boolean, Char, Byte, ShortInt, Word, LongInt, etc.
- Viele numerische Typen mit verschiedenen Größen
- Boolean ist ein primitiver Typ (True/False)

**Weiterführende Links:**
- [Free Pascal Documentation - Simple Types](https://www.freepascal.org/docs-html/ref/refse8.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Primitive Types: int, float, bool, char *)
let x = 42  (* int *)
let y = 3.14  (* float *)
let flag = true  (* bool *)
let ch = 'A'  (* char *)
```

**Besonderheiten:**
- Primitive Typen: int (31-bit oder 63-bit), float (64-bit), bool, char, string, unit
- int ist nicht 32-bit oder 64-bit, sondern 31-bit oder 63-bit (wegen GC-Tag)
- Alle Typen sind unveränderlich

**Weiterführende Links:**
- [OCaml Documentation - Types](https://ocaml.org/manual/coreexamples.html#s:types)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
% Primitive Types: double, logical, char
x = 42;  % double (default)
y = 3.14;  % double
flag = true;  % logical
str = 'Hello';  % char array
```

**Besonderheiten:**
- Primitive Typen: double (default), single, int8, int16, int32, int64, uint8, uint16, uint32, uint64, logical, char
- double ist der Standard für numerische Werte
- char ist ein Array von Zeichen

**Weiterführende Links:**
- [GNU Octave Documentation - Data Types](https://octave.org/doc/v8.1.0/Data-Types.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Primitive Types: i32, f64, bool, rune
x: i32 = 42
y: f64 = 3.14
flag: bool = true
ch: rune = 'A'
```

**Besonderheiten:**
- Primitive Typen: i8, i16, i32, i64, i128, u8, u16, u32, u64, u128, uptr, f32, f64, bool, rune (Unicode codepoint), byte
- Explizite Größenangaben für alle numerischen Typen
- rune ist ein primitiver Typ für Unicode-Zeichen

**Weiterführende Links:**
- [Odin Documentation - Types](https://odin-lang.org/docs/overview/#types)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Primitive Types: scalar (number, string), undef
my $x = 42;  # number
my $y = 3.14;  # number
my $flag = 1;  # boolean (number: 1/0)
my $str = "Hello";  # string
my $undef = undef;  # undef
```

**Besonderheiten:**
- Primitive Typen: scalar (kann number oder string sein), undef
- Scalar kann je nach Kontext number oder string sein (Dualvar)
- Boolean ist kein separater Typ, sondern 1/0 oder ""/"1"

**Weiterführende Links:**
- [Perl Documentation - Data Types](https://perldoc.perl.org/perldata)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
// Primitive Types: int, float, bool, string, null
$x = 42;  // int
$y = 3.14;  // float
$flag = true;  // bool
$str = "Hello";  // string
$null = null;  // null
?>
```

**Besonderheiten:**
- Primitive Typen: int, float, bool, string, null
- int ist plattformabhängig (32-bit oder 64-bit)
- string ist ein primitiver Typ (kein Array von Char)

**Weiterführende Links:**
- [PHP Documentation - Types](https://www.php.net/manual/en/language.types.intro.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Primitive Types: Integers, Floats, Atoms
X = 42,          % Integer (beliebige Präzision)
Y = 3.14,        % Float (64-bit)
A = hello,       % Atom (symbolischer Wert)
S = "Hallo",     % String (in SWI-Prolog)

% Typ-Prüfung
integer(42),     % true
float(3.14),     % true
atom(hello),     % true
number(42),      % true
```

**Besonderheiten:**
- Integers mit beliebiger Präzision (implementierungsabhängig, z.B. SWI-Prolog)
- Floats sind typischerweise 64-bit IEEE 754
- Atome sind eindeutige symbolische Konstanten (ähnlich wie Symbols in Ruby/Lisp)
- Strings sind je nach Implementierung Atome oder Listen von Zeichencodes

**Weiterführende Links:**
- [SWI-Prolog Documentation - Primitive Types](https://www.swi-prolog.org/pldoc/man?section=syntax)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Primitive Types: Int, Number, Boolean, Char, String
x :: Int
x = 42

y :: Number
y = 3.14

flag :: Boolean
flag = true

ch :: Char
ch = 'A'
```

**Besonderheiten:**
- Primitive Typen: Int, Number (Float64), Boolean, Char, String
- Alle Typen sind unveränderlich
- String ist ein primitiver Typ (nicht eine Liste von Char)

**Weiterführende Links:**
- [PureScript Documentation - Types](https://github.com/purescript/documentation/blob/master/language/Types.md)

</TabItem>
<TabItem value="python" label="Python">

```python
# Primitive Types: int, float, bool, str, None
x = 42  # int
y = 3.14  # float
flag = True  # bool
str_val = "Hello"  # str
none_val = None  # NoneType
```

**Besonderheiten:**
- Primitive Typen: int (arbitrary precision), float, bool, str, NoneType
- Alle Werte sind Objekte, aber es gibt primitive Typen
- int ist arbitrary-precision (keine Größenbeschränkung)

**Weiterführende Links:**
- [Python Documentation - Built-in Types](https://docs.python.org/3/library/stdtypes.html)

</TabItem>
<TabItem value="r" label="R">

```r
# Primitive Types: numeric, logical, character, NULL
x <- 42  # numeric
y <- 3.14  # numeric
flag <- TRUE  # logical
str <- "Hello"  # character
null_val <- NULL  # NULL
```

**Besonderheiten:**
- Primitive Typen: numeric (double), integer, logical, character, complex, raw, NULL
- numeric ist standardmäßig double precision
- character ist ein primitiver Typ (Vektor von Zeichen)

**Weiterführende Links:**
- [R Documentation - Data Types](https://cran.r-project.org/doc/manuals/r-release/R-intro.html#R-objects)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
; Primitive Types: number, boolean, char, string
(define x 42)    ; number (exact integer)
(define y 3.14)  ; number (inexact)
(define flag #t) ; boolean
(define ch #\A)  ; char
```

**Besonderheiten:**
- Primitive Typen: number (integer, float), boolean (#t/#f), char, string
- number umfasst integer (exact) und float (inexact)
- Alle Typen sind unveränderlich

**Weiterführende Links:**
- [Racket Documentation - Data Types](https://docs.racket-lang.org/guide/datatypes.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Primitive Types: I32, F64, Bool, Str
x : I32
x = 42

y : F64
y = 3.14

flag : Bool
flag = True

str : Str
str = "Hello"
```

**Besonderheiten:**
- Primitive Typen: I8, I16, I32, I64, I128, U8, U16, U32, U64, U128, F32, F64, Bool, Str
- Explizite Größenangaben für alle numerischen Typen
- Str ist ein primitiver Typ (nicht eine Liste von Char)

**Weiterführende Links:**
- [Roc Documentation - Types](https://www.roc-lang.org/tutorial#types)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Primitive Types: Integer, Float, TrueClass/FalseClass, String, NilClass
x = 42  # Integer
y = 3.14  # Float
flag = true  # TrueClass
str = "Hello"  # String
nil_val = nil  # NilClass
```

**Besonderheiten:**
- Primitive Typen: Integer (arbitrary precision), Float, TrueClass, FalseClass, String, NilClass, Symbol
- Alle Werte sind Objekte, aber es gibt primitive Typen
- Integer ist arbitrary-precision

**Weiterführende Links:**
- [Ruby Documentation - Data Types](https://ruby-doc.org/core-3.1.0/doc/syntax/literals_rdoc.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Primitive Types: i32, f64, bool, char
let x: i32 = 42;
let y: f64 = 3.14;
let flag: bool = true;
let ch: char = 'A';
```

**Besonderheiten:**
- Primitive Typen: i8, i16, i32, i64, i128, isize, u8, u16, u32, u64, u128, usize, f32, f64, bool, char
- Explizite Größenangaben für alle numerischen Typen
- isize und usize haben plattformabhängige Größe

**Weiterführende Links:**
- [The Rust Book - Data Types](https://doc.rust-lang.org/book/ch03-02-data-types.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Primitive Types: Int, Double, Boolean, Char, Byte, Short, Long, Float
val x: Int = 42
val y: Double = 3.14
val flag: Boolean = true
val ch: Char = 'A'
```

**Besonderheiten:**
- Primitive Typen: Byte, Short, Int, Long, Float, Double, Boolean, Char
- Autoboxing zu Wrapper-Klassen (java.lang.Integer, etc.)
- Unit ist ein spezieller primitiver Typ

**Weiterführende Links:**
- [Scala Documentation - Types](https://docs.scala-lang.org/tour/unified-types.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; Primitive Types: number, boolean, char, string
(define x 42)  ; number
(define y 3.14)  ; number
(define flag #t)  ; boolean
(define ch #\A)  ; char
```

**Besonderheiten:**
- Primitive Typen: number (integer, float), boolean (#t/#f), char, string
- number umfasst integer (exact) und float (inexact)
- Alle Typen sind unveränderlich

**Weiterführende Links:**
- [Scheme Documentation - Data Types](https://www.scheme.com/tspl4/objects.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Primitive Types: Int, Double, Bool, Character, String
let x: Int = 42
let y: Double = 3.14
let flag: Bool = true
let ch: Character = "A"
let str: String = "Hello"
```

**Besonderheiten:**
- Primitive Typen: Int, Int8, Int16, Int32, Int64, UInt, UInt8, UInt16, UInt32, UInt64, Float, Double, Bool, Character, String
- Int und UInt haben plattformabhängige Größe
- String ist ein primitiver Typ (nicht ein Array von Character)

**Weiterführende Links:**
- [Swift Documentation - Types](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/thebasics/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Primitive Types: number, boolean, string, null, undefined, symbol, bigint
let x: number = 42;
let y: number = 3.14;
let flag: boolean = true;
let str: string = 'Hello';
let n: null = null;
let u: undefined = undefined;
let sym: symbol = Symbol('id');
let big: bigint = 9007199254740991n;
```

**Besonderheiten:**
- Primitive Typen: number, boolean, string, null, undefined, symbol (seit ES6), bigint (seit ES2020)
- Alle Typen entsprechen JavaScript-Primitiven
- void ist ein spezieller primitiver Typ

**Weiterführende Links:**
- [TypeScript Handbook - Basic Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Primitive Types: Integer, Double, Boolean, Char, Byte, etc.
Dim x As Integer = 42
Dim y As Double = 3.14
Dim flag As Boolean = True
Dim ch As Char = "A"c
Dim b As Byte = 255
```

**Besonderheiten:**
- Primitive Typen: SByte, Byte, Short, UShort, Integer, UInteger, Long, ULong, Single, Double, Decimal, Boolean, Char, String
- Alle primitiven Typen sind .NET-Typen
- Decimal ist ein 128-bit Fließkommatyp

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Data Types](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/data-types/)

</TabItem>
<TabItem value="v" label="V">

```v
// Primitive Types: int, f64, bool, string, byte, rune
mut x := 42  // int
mut y := 3.14  // f64
mut flag := true  // bool
mut str := "Hello"  // string
mut ch := `A`  // rune
```

**Besonderheiten:**
- Primitive Typen: i8, i16, int, i64, i128, u8, u16, u32, u64, u128, f32, f64, bool, string, byte, rune
- int ist plattformabhängig (32-bit oder 64-bit)
- string ist ein primitiver Typ

**Weiterführende Links:**
- [V Documentation - Types](https://github.com/vlang/v/blob/master/doc/docs.md#types)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Primitive Types: Integer, Real, Boolean, String, Symbol *)
x = 42           (* Integer - arbitrary precision *)
y = 3.14         (* Real *)
flag = True      (* Boolean *)
str = "Hello"    (* String *)
sym = mySymbol   (* Symbol *)
```

**Besonderheiten:**
- Primitive Typen: Integer (arbitrary precision), Real, Boolean (True/False), String, Symbol
- Integer ist arbitrary-precision (keine feste Größe)
- Symbol ist ein primitiver Typ für symbolische Bezeichner

**Weiterführende Links:**
- [Wolfram Language Documentation - Types of Data](https://reference.wolfram.com/language/guide/TypesOfData.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Primitive Types: i32, f64, bool, u8
const x: i32 = 42;
const y: f64 = 3.14;
const flag: bool = true;
const b: u8 = 255;
```

**Besonderheiten:**
- Primitive Typen: i8, i16, i32, i64, i128, u8, u16, u32, u64, u128, usize, isize, f16, f32, f64, f80, f128, bool, void, noreturn, type, anyerror, comptime_int, comptime_float
- Explizite Größenangaben für alle numerischen Typen
- comptime_int und comptime_float sind compile-time Typen

**Weiterführende Links:**
- [Zig Documentation - Types](https://ziglang.org/documentation/0.11.0/#Primitive-Types)

</TabItem>
</Tabs>


## 3.2.2. Signed Integers (8/16/32/64 bit)

Vorzeichenbehaftete Ganzzahlen mit expliziten Größenangaben (8, 16, 32 oder 64 Bit).

### Sprachen {#sprachen}

<Tabs availableTabs={['ada', 'c', 'carbon', 'csharp', 'cpp', 'crystal', 'd', 'eiffel', 'fsharp', 'fortran', 'go', 'groovy', 'haskell', 'idris', 'java', 'julia', 'kotlin', 'lean4', 'matlab', 'mojo', 'nim', 'objective-c', 'object-pascal', 'octave', 'odin', 'roc', 'rust', 'scala', 'swift', 'vbnet', 'v', 'zig']} yellowTabs={['dart', 'haxe', 'koka', 'mercury', 'ocaml', 'python', 'r']}>
<TabItem value="ada" label="Ada">

```ada
-- Signed Integers: Integer (implementation-defined), Integer_8, Integer_16, Integer_32, Integer_64
x : Integer := 42;  -- implementation-defined size
i8 : Integer_8 := 127;
i16 : Integer_16 := 32767;
i32 : Integer_32 := 2147483647;
i64 : Integer_64 := 9223372036854775807;
```

**Besonderheiten:**
- Integer_8, Integer_16, Integer_32, Integer_64 sind signed integer Typen mit expliziten Größen
- Integer ist implementation-defined (typischerweise 32-bit oder 64-bit)
- Alle Typen sind in Standard-Package verfügbar

**Weiterführende Links:**
- [Ada Reference Manual - Integer Types](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-3-5-4.html)

</TabItem>
<TabItem value="c" label="C">

```c
// Signed Integers: char, short, int, long, long long
char c = 127;  // typically 8-bit
short s = 32767;  // at least 16-bit
int i = 2147483647;  // at least 16-bit, typically 32-bit
long l = 2147483647L;  // at least 32-bit
long long ll = 9223372036854775807LL;  // at least 64-bit
```

**Besonderheiten:**
- char, short, int, long, long long sind signed integer Typen
- Größen sind implementation-defined (mindestens die angegebenen Größen)
- int8_t, int16_t, int32_t, int64_t (seit C99) für explizite Größen

**Weiterführende Links:**
- [C Standard - Integer Types](https://en.cppreference.com/w/c/language/arithmetic_types)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Signed Integers: i8, i16, i32, i64
var x: i8 = 127;
var y: i16 = 32767;
var z: i32 = 2147483647;
var w: i64 = 9223372036854775807;
```

**Besonderheiten:**
- i8, i16, i32, i64 sind signed integer Typen mit expliziten Größen
- Alle Größen sind garantiert
- Experimentelle Sprache, Syntax kann sich noch ändern

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Signed Integers: sbyte, short, int, long
sbyte b = 127;  // 8-bit
short s = 32767;  // 16-bit
int i = 2147483647;  // 32-bit
long l = 9223372036854775807L;  // 64-bit
```

**Besonderheiten:**
- sbyte (8-bit), short (16-bit), int (32-bit), long (64-bit) sind signed integer Typen
- Alle Größen sind garantiert
- Alle Typen sind Aliase für .NET-Typen (System.SByte, System.Int16, System.Int32, System.Int64)

**Weiterführende Links:**
- [Microsoft C# Documentation - Integral Types](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/integral-numeric-types)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Signed Integers: char, short, int, long, long long
char c = 127;  // typically 8-bit
short s = 32767;  // at least 16-bit
int i = 2147483647;  // at least 16-bit, typically 32-bit
long l = 2147483647L;  // at least 32-bit
long long ll = 9223372036854775807LL;  // at least 64-bit
```

**Besonderheiten:**
- char, short, int, long, long long sind signed integer Typen
- Größen sind implementation-defined (mindestens die angegebenen Größen)
- int8_t, int16_t, int32_t, int64_t (seit C++11) für explizite Größen

**Weiterführende Links:**
- [cppreference.com - Integer Types](https://en.cppreference.com/w/cpp/language/types)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Signed Integers: Int8, Int16, Int32, Int64
x : Int8 = 127
y : Int16 = 32767
z : Int32 = 2147483647
w : Int64 = 9223372036854775807
```

**Besonderheiten:**
- Int8, Int16, Int32, Int64 sind signed integer Typen mit expliziten Größen
- Alle Größen sind garantiert
- Int ist ein Alias für Int32

**Weiterführende Links:**
- [Crystal Documentation - Integers](https://crystal-lang.org/reference/1.11/syntax_and_semantics/literals/integers.html)

</TabItem>
<TabItem value="d" label="D">

```d
// Signed Integers: byte, short, int, long
byte b = 127;  // 8-bit
short s = 32767;  // 16-bit
int i = 2147483647;  // 32-bit
long l = 9223372036854775807L;  // 64-bit
```

**Besonderheiten:**
- byte (8-bit), short (16-bit), int (32-bit), long (64-bit) sind signed integer Typen
- Alle Größen sind garantiert
- Weitere Typen: cent (128-bit, wenn verfügbar)

**Weiterführende Links:**
- [D Language Specification - Integer Types](https://dlang.org/spec/type.html#integral-types)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Signed Integers: int (arbitrary precision, keine expliziten Größen)
int x = 42;
int y = 2147483647;
int z = 9223372036854775807;
```

**Besonderheiten:**
- int ist arbitrary-precision, keine expliziten Größenangaben
- Intern werden Werte je nach Größe als 64-bit oder BigInt gespeichert
- Keine separaten Typen für 8/16/32/64-bit

**Weiterführende Links:**
- [Dart Documentation - Numbers](https://dart.dev/language/built-in-types#numbers)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
-- Signed Integers: INTEGER_8, INTEGER_16, INTEGER_32, INTEGER_64
local
    a: INTEGER_8
    b: INTEGER_16
    c: INTEGER_32
    d: INTEGER_64
    x: INTEGER
do
    a := 127
    b := 32767
    c := 2147483647
    d := 9223372036854775807
    x := 42  -- INTEGER ist Alias für INTEGER_32
end
```

**Besonderheiten:**
- INTEGER_8 (8-bit), INTEGER_16 (16-bit), INTEGER_32 (32-bit), INTEGER_64 (64-bit) sind im ECMA-367 Standard definiert
- `INTEGER` ist ein Alias für `INTEGER_32`
- Alle Integer-Typen sind expanded classes (Werttypen)

**Weiterführende Links:**
- [Eiffel ECMA-367 Standard](https://www.ecma-international.org/publications-and-standards/standards/ecma-367/)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Signed Integers: sbyte, int16, int32, int64
let b: sbyte = 127y  // 8-bit
let s: int16 = 32767s  // 16-bit
let i: int32 = 2147483647  // 32-bit
let l: int64 = 9223372036854775807L  // 64-bit
```

**Besonderheiten:**
- sbyte (8-bit), int16 (16-bit), int32 (32-bit), int64 (64-bit) sind signed integer Typen
- Alle Größen sind garantiert
- Alle Typen sind .NET-Typen

**Weiterführende Links:**
- [F# Documentation - Numeric Types](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/basic-types)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Signed Integers: INTEGER (implementation-defined), INTEGER(KIND=1), INTEGER(KIND=2), INTEGER(KIND=4), INTEGER(KIND=8)
INTEGER :: x = 42  ! implementation-defined
INTEGER(KIND=1) :: i8 = 127_1
INTEGER(KIND=2) :: i16 = 32767_2
INTEGER(KIND=4) :: i32 = 2147483647_4
INTEGER(KIND=8) :: i64 = 9223372036854775807_8
```

**Besonderheiten:**
- INTEGER(KIND=n) für explizite Größen (KIND=1,2,4,8 entsprechen typischerweise 8,16,32,64-bit)
- INTEGER ist implementation-defined (typischerweise 32-bit)
- Literale benötigen KIND-Suffix (`_n`) für Werte größer als der Default-Kind
- SELECTED_INT_KIND für portable Größenangaben

**Weiterführende Links:**
- [Fortran Standard - Integer Types](https://gcc.gnu.org/onlinedocs/gfortran/Integer-types.html)

</TabItem>
<TabItem value="go" label="Go">

```go
// Signed Integers: int8, int16, int32, int64, int
var b int8 = 127  // 8-bit
var s int16 = 32767  // 16-bit
var i int32 = 2147483647  // 32-bit
var l int64 = 9223372036854775807  // 64-bit
var x int = 42  // platform-dependent (32-bit or 64-bit)
```

**Besonderheiten:**
- int8, int16, int32, int64 sind signed integer Typen mit expliziten Größen
- int ist plattformabhängig (32-bit oder 64-bit)
- Alle Größen sind garantiert

**Weiterführende Links:**
- [Go Language Specification - Numeric Types](https://go.dev/ref/spec#Numeric_types)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Signed Integers: byte, short, int, long
byte b = 127  // 8-bit
short s = 32767  // 16-bit
int i = 2147483647  // 32-bit
long l = 9223372036854775807L  // 64-bit
```

**Besonderheiten:**
- byte (8-bit), short (16-bit), int (32-bit), long (64-bit) sind signed integer Typen
- Alle Größen sind garantiert
- Autoboxing zu Wrapper-Klassen (Byte, Short, Integer, Long)

**Weiterführende Links:**
- [Groovy Documentation - Primitive Types](https://groovy-lang.org/semantics.html#_primitive_types)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Signed Integers: Int8, Int16, Int32, Int64, Int
import Data.Int

x :: Int8
x = 127

y :: Int16
y = 32767

z :: Int32
z = 2147483647

w :: Int64
w = 9223372036854775807

i :: Int
i = 42  -- platform-dependent
```

**Besonderheiten:**
- Int8, Int16, Int32, Int64 sind signed integer Typen mit expliziten Größen
- Int ist plattformabhängig (typischerweise 32-bit oder 64-bit)
- Alle Typen sind in Data.Int verfügbar

**Weiterführende Links:**
- [Haskell Documentation - Fixed-size Types](https://hackage.haskell.org/package/base/docs/Data-Int.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Signed Integers: Int (target-dependent, keine expliziten Größen)
var x: Int = 42;
var y: Int = 2147483647;
```

**Besonderheiten:**
- Int ist target-dependent (32-bit oder 64-bit je nach Target)
- Keine expliziten Größenangaben für 8/16/32/64-bit
- Größe hängt vom Compiler-Target ab

**Weiterführende Links:**
- [Haxe Documentation - Basic Types](https://haxe.org/manual/types-basic-types.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Signed Integers: Int8, Int16, Int32, Int64, Int
x : Int8
x = 127

y : Int16
y = 32767

z : Int32
z = 2147483647

w : Int64
w = 9223372036854775807

i : Int
i = 42  -- platform-dependent
```

**Besonderheiten:**
- Int8, Int16, Int32, Int64 sind signed integer Typen mit expliziten Größen
- Int ist plattformabhängig
- Alle Typen sind in Standard-Library verfügbar

**Weiterführende Links:**
- [Idris Documentation - Types](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html#types)

</TabItem>
<TabItem value="java" label="Java">

```java
// Signed Integers: byte, short, int, long
byte b = 127;  // 8-bit
short s = 32767;  // 16-bit
int i = 2147483647;  // 32-bit
long l = 9223372036854775807L;  // 64-bit
```

**Besonderheiten:**
- byte (8-bit), short (16-bit), int (32-bit), long (64-bit) sind signed integer Typen
- Alle Größen sind garantiert
- Autoboxing zu Wrapper-Klassen (Byte, Short, Integer, Long)

**Weiterführende Links:**
- [Oracle Java Documentation - Primitive Types](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Signed Integers: Int8, Int16, Int32, Int64, Int128
x::Int8 = 127
y::Int16 = 32767
z::Int32 = 2147483647
w::Int64 = 9223372036854775807
v::Int128 = 170141183460469231731687303715884105727
```

**Besonderheiten:**
- Int8, Int16, Int32, Int64, Int128 sind signed integer Typen mit expliziten Größen
- Alle Größen sind garantiert
- Int ist ein Alias für Int32 oder Int64 (plattformabhängig)

**Weiterführende Links:**
- [Julia Documentation - Integers](https://docs.julialang.org/en/v1/manual/integers-and-floating-point-numbers/)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Signed Integers: int (arbitrary precision), int32, int64
val x: int = 42                   // arbitrary precision (Standard)
val y: int32 = 2147483647.int32   // 32-bit signed
val z: int64 = 9223372036854775807.int64  // 64-bit signed
```

**Besonderheiten:**
- `int` ist standardmäßig arbitrary precision (keine feste Größe)
- `int32` und `int64` sind über die Standardbibliothek verfügbar (`std/num/int32`, `std/num/int64`)
- Keine `int8` oder `int16` Typen
- Konvertierung zwischen Typen über explizite Funktionen (z.B. `.int32`)

**Weiterführende Links:**
- [Koka Standard Library - int32](https://koka-lang.github.io/koka/doc/std_num_int32.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Signed Integers: Byte, Short, Int, Long
val b: Byte = 127  // 8-bit
val s: Short = 32767  // 16-bit
val i: Int = 2147483647  // 32-bit
val l: Long = 9223372036854775807L  // 64-bit
```

**Besonderheiten:**
- Byte (8-bit), Short (16-bit), Int (32-bit), Long (64-bit) sind signed integer Typen
- Alle Größen sind garantiert
- Alle Typen haben nullable Varianten (Byte?, Short?, Int?, Long?)

**Weiterführende Links:**
- [Kotlin Documentation - Numbers](https://kotlinlang.org/docs/numbers.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Signed Integers: Int8, Int16, Int32, Int64
def b : Int8 := 127          -- 8-bit
def s : Int16 := 32767       -- 16-bit
def i : Int32 := 2147483647  -- 32-bit
def l : Int64 := 9223372036854775807  -- 64-bit
```

**Besonderheiten:**
- Int8 (8-bit), Int16 (16-bit), Int32 (32-bit), Int64 (64-bit) sind fixed-size signed integer Typen
- Zusätzlich: `Int` ist arbitrary precision (beliebig groß)
- Alle Größen sind garantiert
- Kein Autoboxing nötig

**Weiterführende Links:**
- [Lean 4 Documentation - Dependent Type Theory](https://lean-lang.org/theorem_proving_in_lean4/dependent_type_theory.html)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% Signed Integers: int8, int16, int32, int64
x = int8(127);  % 8-bit
y = int16(32767);  % 16-bit
z = int32(2147483647);  % 32-bit
w = int64(9223372036854775807);  % 64-bit
```

**Besonderheiten:**
- int8, int16, int32, int64 sind signed integer Typen mit expliziten Größen
- Alle Größen sind garantiert
- Standard ist double, explizite Konvertierung erforderlich

**Weiterführende Links:**
- [MATLAB Documentation - Integer Types](https://www.mathworks.com/help/matlab/numeric-types.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```mercury
% Signed Integers: int (maschinenabhängige Wortgröße)
:- pred main(io::di, io::uo) is det.
main(!IO) :-
    X = 42,                    % int
    Y = -100,                  % int
    Max = max_int,             % Maximaler int-Wert (plattformabhängig)
    Min = min_int,             % Minimaler int-Wert (plattformabhängig)
    io.write_int(X, !IO), io.nl(!IO),
    io.write_int(Y, !IO), io.nl(!IO),
    io.write_int(Max, !IO), io.nl(!IO),
    io.write_int(Min, !IO), io.nl(!IO).
```

**Besonderheiten:**
- Mercury hat nur einen eingebauten Integer-Typ: `int` (vorzeichenbehaftet, maschinenabhängige Wortgröße)
- Keine expliziten Bit-Breiten-Typen (kein int8, int16, int32, int64)
- `max_int` und `min_int` geben die plattformabhängigen Grenzen an
- Für Arithmetik mit beliebiger Genauigkeit steht das `integer`-Modul zur Verfügung

**Weiterführende Links:**
- [The Mercury Standard Library - int](https://www.mercurylang.org/information/doc-release/mercury_library/int.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# Signed Integers: Int8, Int16, Int32, Int64
var x: Int8 = 127
var y: Int16 = 32767
var z: Int32 = 2147483647
var w: Int64 = 9223372036854775807
```

**Besonderheiten:**
- Int8, Int16, Int32, Int64 sind signed integer Typen mit expliziten Größen
- Alle Größen sind garantiert
- Alle Typen sind unveränderlich

**Weiterführende Links:**
- [Mojo Documentation - Types](https://docs.modular.com/mojo/manual/basics/types.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Signed Integers: int8, int16, int32, int64, int
var b: int8 = 127
var s: int16 = 32767
var i: int32 = 2147483647
var l: int64 = 9223372036854775807
var x: int = 42  # platform-dependent
```

**Besonderheiten:**
- int8, int16, int32, int64 sind signed integer Typen mit expliziten Größen
- int ist plattformabhängig (32-bit oder 64-bit)
- Alle Größen sind garantiert

**Weiterführende Links:**
- [Nim Documentation - Integers](https://nim-lang.org/docs/manual.html#types-integers)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Signed Integers: char, short, int, long, long long
char c = 127;  // 8-bit
short s = 32767;  // 16-bit
int i = 2147483647;  // 32-bit
long l = 2147483647L;  // 32-bit or 64-bit
long long ll = 9223372036854775807LL;  // 64-bit
```

**Besonderheiten:**
- char, short, int, long, long long sind signed integer Typen
- Größen sind implementation-defined (C-kompatibel)
- int8_t, int16_t, int32_t, int64_t für explizite Größen (seit C99)

**Weiterführende Links:**
- [Objective-C Documentation - Types](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Signed Integers: ShortInt, SmallInt, Integer, Int64
var
  b: ShortInt = 127;  // 8-bit
  s: SmallInt = 32767;  // 16-bit
  i: Integer = 2147483647;  // 32-bit
  l: Int64 = 9223372036854775807;  // 64-bit
```

**Besonderheiten:**
- ShortInt (8-bit), SmallInt (16-bit), Integer (32-bit), Int64 (64-bit) sind signed integer Typen
- Alle Größen sind garantiert
- LongInt ist ein Alias für Integer (32-bit)

**Weiterführende Links:**
- [Free Pascal Documentation - Integer Types](https://www.freepascal.org/docs-html/ref/refse8.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Signed Integers: int (31-bit or 63-bit), keine expliziten Größen *)
let x = 42  (* int, 31-bit or 63-bit *)
```

**Besonderheiten:**
- int ist 31-bit oder 63-bit (wegen GC-Tag), keine expliziten Größenangaben
- Keine separaten Typen für 8/16/32/64-bit
- int32 und int64 sind in separate Module verfügbar (Int32, Int64)

**Weiterführende Links:**
- [OCaml Documentation - Integers](https://ocaml.org/manual/coreexamples.html#s:types)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
% Signed Integers: int8, int16, int32, int64
x = int8(127);  % 8-bit
y = int16(32767);  % 16-bit
z = int32(2147483647);  % 32-bit
w = int64(9223372036854775807);  % 64-bit
```

**Besonderheiten:**
- int8, int16, int32, int64 sind signed integer Typen mit expliziten Größen
- Alle Größen sind garantiert
- Standard ist double, explizite Konvertierung erforderlich

**Weiterführende Links:**
- [GNU Octave Documentation - Numeric Data Types](https://octave.org/doc/v8.1.0/Numeric-Data-Types.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Signed Integers: i8, i16, i32, i64, i128
b: i8 = 127
s: i16 = 32767
i: i32 = 2147483647
l: i64 = 9223372036854775807
x: i128 = 170141183460469231731687303715884105727
```

**Besonderheiten:**
- i8, i16, i32, i64, i128 sind signed integer Typen mit expliziten Größen
- Alle Größen sind garantiert
- isize ist plattformabhängig (32-bit oder 64-bit)

**Weiterführende Links:**
- [Odin Documentation - Types](https://odin-lang.org/docs/overview/#types)

</TabItem>
<TabItem value="python" label="Python">

```python
# Signed Integers: int (arbitrary precision, keine expliziten Größen)
x = 42
y = 2147483647
z = 9223372036854775807
```

**Besonderheiten:**
- int ist arbitrary-precision, keine expliziten Größenangaben
- Keine separaten Typen für 8/16/32/64-bit
- Intern werden Werte je nach Größe als 32-bit, 64-bit oder BigInt gespeichert

**Weiterführende Links:**
- [Python Documentation - Numeric Types](https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex)

</TabItem>
<TabItem value="r" label="R">

```r
# Signed Integers: integer (32-bit), keine expliziten Größen für 8/16/64-bit
x <- 42L  # integer (32-bit)
```

**Besonderheiten:**
- integer ist 32-bit signed integer
- Keine expliziten Typen für 8/16/64-bit
- L-Suffix für integer Literale erforderlich

**Weiterführende Links:**
- [R Documentation - Numeric Types](https://cran.r-project.org/doc/manuals/r-release/R-intro.html#Numeric-vectors)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Signed Integers: I8, I16, I32, I64, I128
b : I8
b = 127

s : I16
s = 32767

i : I32
i = 2147483647

l : I64
l = 9223372036854775807

x : I128
x = 170141183460469231731687303715884105727
```

**Besonderheiten:**
- I8, I16, I32, I64, I128 sind signed integer Typen mit expliziten Größen
- Alle Größen sind garantiert
- Alle Typen sind unveränderlich

**Weiterführende Links:**
- [Roc Documentation - Types](https://www.roc-lang.org/tutorial#types)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Signed Integers: i8, i16, i32, i64, i128, isize
let b: i8 = 127;
let s: i16 = 32767;
let i: i32 = 2147483647;
let l: i64 = 9223372036854775807;
let x: i128 = 170141183460469231731687303715884105727;
let z: isize = 42;  // platform-dependent
```

**Besonderheiten:**
- i8, i16, i32, i64, i128 sind signed integer Typen mit expliziten Größen
- isize ist plattformabhängig (32-bit oder 64-bit)
- Alle Größen sind garantiert

**Weiterführende Links:**
- [The Rust Book - Integer Types](https://doc.rust-lang.org/book/ch03-02-data-types.html#integer-types)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Signed Integers: Byte, Short, Int, Long
val b: Byte = 127  // 8-bit
val s: Short = 32767  // 16-bit
val i: Int = 2147483647  // 32-bit
val l: Long = 9223372036854775807L  // 64-bit
```

**Besonderheiten:**
- Byte (8-bit), Short (16-bit), Int (32-bit), Long (64-bit) sind signed integer Typen
- Alle Größen sind garantiert
- Autoboxing zu Wrapper-Klassen (java.lang.Byte, etc.)

**Weiterführende Links:**
- [Scala Documentation - Numeric Types](https://docs.scala-lang.org/tour/unified-types.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Signed Integers: Int8, Int16, Int32, Int64, Int
let b: Int8 = 127
let s: Int16 = 32767
let i: Int32 = 2147483647
let l: Int64 = 9223372036854775807
let x: Int = 42  // platform-dependent (32-bit or 64-bit)
```

**Besonderheiten:**
- Int8, Int16, Int32, Int64 sind signed integer Typen mit expliziten Größen
- Int ist plattformabhängig (32-bit oder 64-bit)
- Alle Größen sind garantiert

**Weiterführende Links:**
- [Swift Documentation - Numeric Types](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/thebasics/#Numeric-Type-Conversions)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Signed Integers: SByte, Short, Integer, Long
Dim b As SByte = 127  ' 8-bit
Dim s As Short = 32767  ' 16-bit
Dim i As Integer = 2147483647  ' 32-bit
Dim l As Long = 9223372036854775807L  ' 64-bit
```

**Besonderheiten:**
- SByte (8-bit), Short (16-bit), Integer (32-bit), Long (64-bit) sind signed integer Typen
- Alle Größen sind garantiert
- Alle Typen sind .NET-Typen (System.SByte, System.Int16, System.Int32, System.Int64)

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Numeric Types](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/data-types/numeric-types)

</TabItem>
<TabItem value="v" label="V">

```v
// Signed Integers: i8, i16, int, i64
mut b := i8(127)
mut s := i16(32767)
mut i := 42  // int (platform-dependent, 32-bit or 64-bit)
mut l := i64(9223372036854775807)
```

**Besonderheiten:**
- i8, i16, i64 sind signed integer Typen mit expliziten Größen
- int ist plattformabhängig (32-bit oder 64-bit)
- Alle Größen sind garantiert

**Weiterführende Links:**
- [V Documentation - Types](https://github.com/vlang/v/blob/master/doc/docs.md#types)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Signed Integers: i8, i16, i32, i64, i128, isize
const b: i8 = 127;
const s: i16 = 32767;
const i: i32 = 2147483647;
const l: i64 = 9223372036854775807;
const x: i128 = 170141183460469231731687303715884105727;
const z: isize = 42;  // platform-dependent
```

**Besonderheiten:**
- i8, i16, i32, i64, i128 sind signed integer Typen mit expliziten Größen
- isize ist plattformabhängig (32-bit oder 64-bit)
- Alle Größen sind garantiert

**Weiterführende Links:**
- [Zig Documentation - Primitive Types](https://ziglang.org/documentation/0.11.0/#Primitive-Types)

</TabItem>
</Tabs>


## 3.2.3. Unsigned Integers (8/16/32/64 bit)

Vorzeichenlose Ganzzahlen mit expliziten Größenangaben (8, 16, 32 oder 64 Bit).

### Sprachen {#sprachen}

<Tabs availableTabs={['c', 'carbon', 'csharp', 'cpp', 'crystal', 'd', 'eiffel', 'fsharp', 'go', 'haskell', 'idris', 'julia', 'kotlin', 'lean4', 'matlab', 'mojo', 'nim', 'objective-c', 'object-pascal', 'octave', 'odin', 'roc', 'rust', 'swift', 'vbnet', 'v', 'zig']} yellowTabs={['ada', 'haxe', 'java']} orangeTabs={['dart', 'fortran', 'groovy', 'ocaml', 'python', 'r', 'scala']}>
<TabItem value="ada" label="Ada">

```ada
-- Unsigned Integers: Natural (non-negative), Modular types
x : Natural := 42;  -- non-negative integer
type Byte is mod 256;  -- 8-bit unsigned
type Word is mod 65536;  -- 16-bit unsigned
```

**Besonderheiten:**
- Natural ist ein Subtyp von Integer (non-negative)
- Modular types (mod) für unsigned integers mit expliziter Größe
- Keine direkten Typen für 8/16/32/64-bit, aber mod kann verwendet werden

**Weiterführende Links:**
- [Ada Reference Manual - Modular Types](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-3-5-4.html)

</TabItem>
<TabItem value="c" label="C">

```c
// Unsigned Integers: unsigned char, unsigned short, unsigned int, unsigned long, unsigned long long
unsigned char c = 255;  // 8-bit
unsigned short s = 65535;  // at least 16-bit
unsigned int i = 4294967295U;  // at least 16-bit, typically 32-bit
unsigned long l = 4294967295UL;  // at least 32-bit
unsigned long long ll = 18446744073709551615ULL;  // at least 64-bit
```

**Besonderheiten:**
- unsigned char, unsigned short, unsigned int, unsigned long, unsigned long long sind unsigned integer Typen
- Größen sind implementation-defined (mindestens die angegebenen Größen)
- uint8_t, uint16_t, uint32_t, uint64_t (seit C99) für explizite Größen

**Weiterführende Links:**
- [C Standard - Integer Types](https://en.cppreference.com/w/c/language/arithmetic_types)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Unsigned Integers: u8, u16, u32, u64
var x: u8 = 255;
var y: u16 = 65535;
var z: u32 = 4294967295;
var w: u64 = 18446744073709551615;
```

**Besonderheiten:**
- u8, u16, u32, u64 sind unsigned integer Typen mit expliziten Größen
- Alle Größen sind garantiert
- Experimentelle Sprache, Syntax kann sich noch ändern

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Unsigned Integers: byte, ushort, uint, ulong
byte b = 255;  // 8-bit
ushort s = 65535;  // 16-bit
uint i = 4294967295U;  // 32-bit
ulong l = 18446744073709551615UL;  // 64-bit
```

**Besonderheiten:**
- byte (8-bit), ushort (16-bit), uint (32-bit), ulong (64-bit) sind unsigned integer Typen
- Alle Größen sind garantiert
- Alle Typen sind Aliase für .NET-Typen (System.Byte, System.UInt16, System.UInt32, System.UInt64)

**Weiterführende Links:**
- [Microsoft C# Documentation - Integral Types](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/integral-numeric-types)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Unsigned Integers: unsigned char, unsigned short, unsigned int, unsigned long, unsigned long long
unsigned char c = 255;  // 8-bit
unsigned short s = 65535;  // at least 16-bit
unsigned int i = 4294967295U;  // at least 16-bit, typically 32-bit
unsigned long l = 4294967295UL;  // at least 32-bit
unsigned long long ll = 18446744073709551615ULL;  // at least 64-bit
```

**Besonderheiten:**
- unsigned char, unsigned short, unsigned int, unsigned long, unsigned long long sind unsigned integer Typen
- Größen sind implementation-defined (mindestens die angegebenen Größen)
- uint8_t, uint16_t, uint32_t, uint64_t (seit C++11) für explizite Größen

**Weiterführende Links:**
- [cppreference.com - Integer Types](https://en.cppreference.com/w/cpp/language/types)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Unsigned Integers: UInt8, UInt16, UInt32, UInt64
x : UInt8 = 255
y : UInt16 = 65535
z : UInt32 = 4294967295
w : UInt64 = 18446744073709551615
```

**Besonderheiten:**
- UInt8, UInt16, UInt32, UInt64 sind unsigned integer Typen mit expliziten Größen
- Alle Größen sind garantiert
- Alle Typen sind in Standard-Library verfügbar

**Weiterführende Links:**
- [Crystal Documentation - Integers](https://crystal-lang.org/reference/1.11/syntax_and_semantics/literals/integers.html)

</TabItem>
<TabItem value="d" label="D">

```d
// Unsigned Integers: ubyte, ushort, uint, ulong
ubyte b = 255;  // 8-bit
ushort s = 65535;  // 16-bit
uint i = 4294967295;  // 32-bit
ulong l = 18446744073709551615UL;  // 64-bit
```

**Besonderheiten:**
- ubyte (8-bit), ushort (16-bit), uint (32-bit), ulong (64-bit) sind unsigned integer Typen
- Alle Größen sind garantiert
- Weitere Typen: ucent (128-bit, wenn verfügbar)

**Weiterführende Links:**
- [D Language Specification - Integer Types](https://dlang.org/spec/type.html#integral-types)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Unsigned Integers: int (arbitrary precision, keine expliziten Größen)
int x = 42;
int y = 4294967295;
int z = 18446744073709551615;
```

**Besonderheiten:**
- int ist arbitrary-precision, keine expliziten Größenangaben
- Keine separaten Typen für unsigned integers
- Intern werden Werte je nach Größe als 64-bit oder BigInt gespeichert

**Weiterführende Links:**
- [Dart Documentation - Numbers](https://dart.dev/language/built-in-types#numbers)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
-- Unsigned Integers: NATURAL_8, NATURAL_16, NATURAL_32, NATURAL_64
local
    a: NATURAL_8
    b: NATURAL_16
    c: NATURAL_32
    d: NATURAL_64
do
    a := 255
    b := 65535
    c := 4294967295
    d := 18446744073709551615
end
```

**Besonderheiten:**
- NATURAL_8 (8-bit), NATURAL_16 (16-bit), NATURAL_32 (32-bit), NATURAL_64 (64-bit) sind im ECMA-367 Standard definiert
- `NATURAL` ist ein Alias für `NATURAL_32`
- Alle NATURAL-Typen sind expanded classes (Werttypen)

**Weiterführende Links:**
- [Eiffel ECMA-367 Standard](https://www.ecma-international.org/publications-and-standards/standards/ecma-367/)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Unsigned Integers: byte, uint16, uint32, uint64
let b: byte = 255uy  // 8-bit
let s: uint16 = 65535us  // 16-bit
let i: uint32 = 4294967295u  // 32-bit
let l: uint64 = 18446744073709551615UL  // 64-bit
```

**Besonderheiten:**
- byte (8-bit), uint16 (16-bit), uint32 (32-bit), uint64 (64-bit) sind unsigned integer Typen
- Alle Größen sind garantiert
- Alle Typen sind .NET-Typen

**Weiterführende Links:**
- [F# Documentation - Numeric Types](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/basic-types)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Unsigned Integers: INTEGER mit UNSIGNED (nicht standard, compiler-spezifisch)
! Standard Fortran hat keine unsigned integers
INTEGER :: x = 42
```

**Besonderheiten:**
- Standard Fortran hat keine unsigned integer Typen
- Einige Compiler unterstützen UNSIGNED als Erweiterung
- Typischerweise werden signed integers verwendet

**Weiterführende Links:**
- [Fortran Standard - Integer Types](https://gcc.gnu.org/onlinedocs/gfortran/Integer-types.html)

</TabItem>
<TabItem value="go" label="Go">

```go
// Unsigned Integers: uint8, uint16, uint32, uint64, uint
var b uint8 = 255  // 8-bit
var s uint16 = 65535  // 16-bit
var i uint32 = 4294967295  // 32-bit
var l uint64 = 18446744073709551615  // 64-bit
var x uint = 42  // platform-dependent (32-bit or 64-bit)
```

**Besonderheiten:**
- uint8, uint16, uint32, uint64 sind unsigned integer Typen mit expliziten Größen
- uint ist plattformabhängig (32-bit oder 64-bit)
- Alle Größen sind garantiert

**Weiterführende Links:**
- [Go Language Specification - Numeric Types](https://go.dev/ref/spec#Numeric_types)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Unsigned Integers: nicht direkt unterstützt (nur signed)
// Workaround: Verwende größere signed types
int x = 42
long y = 4294967295L
```

**Besonderheiten:**
- Groovy hat keine direkten unsigned integer Typen
- Workaround: Verwende größere signed types
- Autoboxing zu Wrapper-Klassen

**Weiterführende Links:**
- [Groovy Documentation - Primitive Types](https://groovy-lang.org/semantics.html#_primitive_types)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Unsigned Integers: Word8, Word16, Word32, Word64, Word
import Data.Word

x :: Word8
x = 255

y :: Word16
y = 65535

z :: Word32
z = 4294967295

w :: Word64
w = 18446744073709551615

i :: Word
i = 42  -- platform-dependent
```

**Besonderheiten:**
- Word8, Word16, Word32, Word64 sind unsigned integer Typen mit expliziten Größen
- Word ist plattformabhängig (typischerweise 32-bit oder 64-bit)
- Alle Typen sind in Data.Word verfügbar

**Weiterführende Links:**
- [Haskell Documentation - Fixed-size Types](https://hackage.haskell.org/package/base/docs/Data-Word.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Unsigned Integers: UInt (Abstract-Typ über Int)
var x:UInt = 42;
var y:UInt = 4294967295; // Max-Wert (32-bit)
```

**Besonderheiten:**
- `UInt` ist ein Abstract-Typ über `Int`, verfügbar auf allen Targets
- Keine expliziten Größenangaben für 8/16/32/64-bit
- Überlaufverhalten ist target-dependent

**Weiterführende Links:**
- [Haxe Documentation - Basic Types](https://haxe.org/manual/types-basic-types.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Unsigned Integers: Bits8, Bits16, Bits32, Bits64
x : Bits8
x = 255

y : Bits16
y = 65535

z : Bits32
z = 4294967295

w : Bits64
w = 18446744073709551615
```

**Besonderheiten:**
- Bits8, Bits16, Bits32, Bits64 sind unsigned integer Typen mit expliziten Größen
- Alle Größen sind garantiert
- Alle Typen sind in Standard-Library verfügbar

**Weiterführende Links:**
- [Idris Documentation - Types](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html#types)

</TabItem>
<TabItem value="java" label="Java">

```java
// Unsigned Integers: nicht direkt unterstützt (seit Java 8: Methoden in Wrapper-Klassen)
// Workaround: Verwende größere signed types
int x = 42;
long y = 4294967295L;
// Seit Java 8: Integer.toUnsignedLong(), etc.
```

**Besonderheiten:**
- Java hat keine direkten unsigned integer Typen
- Seit Java 8: Methoden in Wrapper-Klassen für unsigned Operationen (Integer.toUnsignedLong(), etc.)
- Workaround: Verwende größere signed types

**Weiterführende Links:**
- [Oracle Java Documentation - Unsigned Integer Arithmetic](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Unsigned Integers: UInt8, UInt16, UInt32, UInt64, UInt128
x::UInt8 = 255
y::UInt16 = 65535
z::UInt32 = 4294967295
w::UInt64 = 18446744073709551615
v::UInt128 = 340282366920938463463374607431768211455
```

**Besonderheiten:**
- UInt8, UInt16, UInt32, UInt64, UInt128 sind unsigned integer Typen mit expliziten Größen
- Alle Größen sind garantiert
- UInt ist ein Alias für UInt32 oder UInt64 (plattformabhängig)

**Weiterführende Links:**
- [Julia Documentation - Integers](https://docs.julialang.org/en/v1/manual/integers-and-floating-point-numbers/)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Unsigned Integers: UByte, UShort, UInt, ULong (seit Kotlin 1.3)
val b: UByte = 255u  // 8-bit
val s: UShort = 65535u  // 16-bit
val i: UInt = 4294967295u  // 32-bit
val l: ULong = 18446744073709551615uL  // 64-bit
```

**Besonderheiten:**
- UByte (8-bit), UShort (16-bit), UInt (32-bit), ULong (64-bit) sind unsigned integer Typen (seit Kotlin 1.3)
- Alle Größen sind garantiert
- Alle Typen haben nullable Varianten (UByte?, UShort?, UInt?, ULong?)

**Weiterführende Links:**
- [Kotlin Documentation - Unsigned Integers](https://kotlinlang.org/docs/unsigned-integer-types.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Unsigned Integers: UInt8, UInt16, UInt32, UInt64
def b : UInt8 := 255           -- 8-bit
def s : UInt16 := 65535        -- 16-bit
def i : UInt32 := 4294967295   -- 32-bit
def l : UInt64 := 18446744073709551615  -- 64-bit
```

**Besonderheiten:**
- UInt8 (8-bit), UInt16 (16-bit), UInt32 (32-bit), UInt64 (64-bit) sind fixed-size unsigned integer Typen
- Zusätzlich: `Nat` ist der Standard-Typ für natürliche Zahlen (arbitrary precision)
- `USize` für plattformabhängige Größe (32 oder 64 Bit)
- Alle Größen sind garantiert

**Weiterführende Links:**
- [Lean 4 Documentation - Dependent Type Theory](https://lean-lang.org/theorem_proving_in_lean4/dependent_type_theory.html)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% Unsigned Integers: uint8, uint16, uint32, uint64
x = uint8(255);  % 8-bit
y = uint16(65535);  % 16-bit
z = uint32(4294967295);  % 32-bit
w = uint64(18446744073709551615);  % 64-bit
```

**Besonderheiten:**
- uint8, uint16, uint32, uint64 sind unsigned integer Typen mit expliziten Größen
- Alle Größen sind garantiert
- Standard ist double, explizite Konvertierung erforderlich

**Weiterführende Links:**
- [MATLAB Documentation - Integer Types](https://www.mathworks.com/help/matlab/numeric-types.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# Unsigned Integers: UInt8, UInt16, UInt32, UInt64
var x: UInt8 = 255
var y: UInt16 = 65535
var z: UInt32 = 4294967295
var w: UInt64 = 18446744073709551615
```

**Besonderheiten:**
- UInt8, UInt16, UInt32, UInt64 sind unsigned integer Typen mit expliziten Größen
- Alle Größen sind garantiert
- Alle Typen sind unveränderlich

**Weiterführende Links:**
- [Mojo Documentation - Types](https://docs.modular.com/mojo/manual/basics/types.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Unsigned Integers: uint8, uint16, uint32, uint64, uint
var b: uint8 = 255
var s: uint16 = 65535
var i: uint32 = 4294967295
var l: uint64 = 18446744073709551615
var x: uint = 42  # platform-dependent
```

**Besonderheiten:**
- uint8, uint16, uint32, uint64 sind unsigned integer Typen mit expliziten Größen
- uint ist plattformabhängig (32-bit oder 64-bit)
- Alle Größen sind garantiert

**Weiterführende Links:**
- [Nim Documentation - Integers](https://nim-lang.org/docs/manual.html#types-integers)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Unsigned Integers: unsigned char, unsigned short, unsigned int, unsigned long, unsigned long long
unsigned char c = 255;  // 8-bit
unsigned short s = 65535;  // 16-bit
unsigned int i = 4294967295U;  // 32-bit
unsigned long l = 4294967295UL;  // 32-bit or 64-bit
unsigned long long ll = 18446744073709551615ULL;  // 64-bit
```

**Besonderheiten:**
- unsigned char, unsigned short, unsigned int, unsigned long, unsigned long long sind unsigned integer Typen
- Größen sind implementation-defined (C-kompatibel)
- uint8_t, uint16_t, uint32_t, uint64_t für explizite Größen (seit C99)

**Weiterführende Links:**
- [Objective-C Documentation - Types](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Unsigned Integers: Byte, Word, Cardinal, UInt64
var
  b: Byte = 255;  // 8-bit
  w: Word = 65535;  // 16-bit
  c: Cardinal = 4294967295;  // 32-bit
  u: UInt64 = 18446744073709551615;  // 64-bit
```

**Besonderheiten:**
- Byte (8-bit), Word (16-bit), Cardinal (32-bit), UInt64 (64-bit) sind unsigned integer Typen
- Alle Größen sind garantiert
- LongWord ist ein Alias für Cardinal (32-bit)

**Weiterführende Links:**
- [Free Pascal Documentation - Integer Types](https://www.freepascal.org/docs-html/ref/refse8.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Unsigned Integers: nicht direkt unterstützt *)
(* Workaround: Verwende int und ignoriere Vorzeichen *)
let x = 42
```

**Besonderheiten:**
- OCaml hat keine direkten unsigned integer Typen
- Workaround: Verwende int und ignoriere Vorzeichen
- int32 und int64 Module haben keine unsigned Varianten

**Weiterführende Links:**
- [OCaml Documentation - Integers](https://ocaml.org/manual/coreexamples.html#s:types)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
% Unsigned Integers: uint8, uint16, uint32, uint64
x = uint8(255);  % 8-bit
y = uint16(65535);  % 16-bit
z = uint32(4294967295);  % 32-bit
w = uint64(18446744073709551615);  % 64-bit
```

**Besonderheiten:**
- uint8, uint16, uint32, uint64 sind unsigned integer Typen mit expliziten Größen
- Alle Größen sind garantiert
- Standard ist double, explizite Konvertierung erforderlich

**Weiterführende Links:**
- [GNU Octave Documentation - Numeric Data Types](https://octave.org/doc/v8.1.0/Numeric-Data-Types.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Unsigned Integers: u8, u16, u32, u64, u128
b: u8 = 255
s: u16 = 65535
i: u32 = 4294967295
l: u64 = 18446744073709551615
x: u128 = 340282366920938463463374607431768211455
```

**Besonderheiten:**
- u8, u16, u32, u64, u128 sind unsigned integer Typen mit expliziten Größen
- Alle Größen sind garantiert
- usize ist plattformabhängig (32-bit oder 64-bit)

**Weiterführende Links:**
- [Odin Documentation - Types](https://odin-lang.org/docs/overview/#types)

</TabItem>
<TabItem value="python" label="Python">

```python
# Unsigned Integers: nicht direkt unterstützt (int ist signed)
# Workaround: Verwende größere signed types
x = 42
y = 4294967295
```

**Besonderheiten:**
- Python hat keine direkten unsigned integer Typen
- int ist arbitrary-precision signed integer
- Workaround: Verwende größere signed types

**Weiterführende Links:**
- [Python Documentation - Numeric Types](https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex)

</TabItem>
<TabItem value="r" label="R">

```r
# Unsigned Integers: nicht direkt unterstützt
# Workaround: Verwende integer (signed)
x <- 42L  # integer (signed)
```

**Besonderheiten:**
- R hat keine direkten unsigned integer Typen
- integer ist 32-bit signed integer
- Workaround: Verwende signed integer

**Weiterführende Links:**
- [R Documentation - Numeric Types](https://cran.r-project.org/doc/manuals/r-release/R-intro.html#Numeric-vectors)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Unsigned Integers: U8, U16, U32, U64, U128
b : U8
b = 255

s : U16
s = 65535

i : U32
i = 4294967295

l : U64
l = 18446744073709551615

x : U128
x = 340282366920938463463374607431768211455
```

**Besonderheiten:**
- U8, U16, U32, U64, U128 sind unsigned integer Typen mit expliziten Größen
- Alle Größen sind garantiert
- Alle Typen sind unveränderlich

**Weiterführende Links:**
- [Roc Documentation - Types](https://www.roc-lang.org/tutorial#types)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Unsigned Integers: u8, u16, u32, u64, u128, usize
let b: u8 = 255;
let s: u16 = 65535;
let i: u32 = 4294967295;
let l: u64 = 18446744073709551615;
let x: u128 = 340282366920938463463374607431768211455;
let z: usize = 42;  // platform-dependent
```

**Besonderheiten:**
- u8, u16, u32, u64, u128 sind unsigned integer Typen mit expliziten Größen
- usize ist plattformabhängig (32-bit oder 64-bit)
- Alle Größen sind garantiert

**Weiterführende Links:**
- [The Rust Book - Integer Types](https://doc.rust-lang.org/book/ch03-02-data-types.html#integer-types)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Unsigned Integers: nicht direkt unterstützt (nur signed)
// Workaround: Verwende größere signed types
val x: Int = 42
val y: Long = 4294967295L
```

**Besonderheiten:**
- Scala hat keine direkten unsigned integer Typen
- Workaround: Verwende größere signed types
- Autoboxing zu Wrapper-Klassen

**Weiterführende Links:**
- [Scala Documentation - Numeric Types](https://docs.scala-lang.org/tour/unified-types.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Unsigned Integers: UInt8, UInt16, UInt32, UInt64, UInt
let b: UInt8 = 255
let s: UInt16 = 65535
let i: UInt32 = 4294967295
let l: UInt64 = 18446744073709551615
let x: UInt = 42  // platform-dependent (32-bit or 64-bit)
```

**Besonderheiten:**
- UInt8, UInt16, UInt32, UInt64 sind unsigned integer Typen mit expliziten Größen
- UInt ist plattformabhängig (32-bit oder 64-bit)
- Alle Größen sind garantiert

**Weiterführende Links:**
- [Swift Documentation - Numeric Types](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/thebasics/#Numeric-Type-Conversions)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Unsigned Integers: Byte, UShort, UInteger, ULong
Dim b As Byte = 255  ' 8-bit
Dim s As UShort = 65535  ' 16-bit
Dim i As UInteger = 4294967295UI  ' 32-bit
Dim l As ULong = 18446744073709551615UL  ' 64-bit
```

**Besonderheiten:**
- Byte (8-bit), UShort (16-bit), UInteger (32-bit), ULong (64-bit) sind unsigned integer Typen
- Alle Größen sind garantiert
- Alle Typen sind .NET-Typen (System.Byte, System.UInt16, System.UInt32, System.UInt64)

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Numeric Types](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/data-types/numeric-types)

</TabItem>
<TabItem value="v" label="V">

```v
// Unsigned Integers: u8, u16, u32, u64
mut b := u8(255)
mut s := u16(65535)
mut i := u32(4294967295)
mut l := u64(18446744073709551615)
```

**Besonderheiten:**
- u8, u16, u32, u64 sind unsigned integer Typen mit expliziten Größen
- Alle Größen sind garantiert
- Kein plattformabhängiger unsigned Typ

**Weiterführende Links:**
- [V Documentation - Types](https://github.com/vlang/v/blob/master/doc/docs.md#types)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Unsigned Integers: u8, u16, u32, u64, u128, usize
const b: u8 = 255;
const s: u16 = 65535;
const i: u32 = 4294967295;
const l: u64 = 18446744073709551615;
const x: u128 = 340282366920938463463374607431768211455;
const z: usize = 42;  // platform-dependent
```

**Besonderheiten:**
- u8, u16, u32, u64, u128 sind unsigned integer Typen mit expliziten Größen
- usize ist plattformabhängig (32-bit oder 64-bit)
- Alle Größen sind garantiert

**Weiterführende Links:**
- [Zig Documentation - Primitive Types](https://ziglang.org/documentation/0.11.0/#Primitive-Types)

</TabItem>
</Tabs>


## 3.2.4. Floating Point (32/64 bit)

Fließkommazahlen mit einfacher (32-bit) oder doppelter (64-bit) Genauigkeit.

### Sprachen {#sprachen}

<Tabs availableTabs={['ada', 'c', 'carbon', 'csharp', 'cpp', 'clojure', 'common-lisp', 'crystal', 'd', 'eiffel', 'fsharp', 'fortran', 'go', 'groovy', 'haskell', 'java', 'julia', 'kotlin', 'matlab', 'mojo', 'nim', 'objective-c', 'object-pascal', 'octave', 'odin', 'roc', 'rust', 'scala', 'swift', 'vbnet', 'v', 'zig']} yellowTabs={['dart', 'elixir', 'elm', 'erlang', 'gleam', 'haxe', 'idris', 'javascript', 'koka', 'lean4', 'lua', 'mercury', 'ocaml', 'perl', 'php', 'purescript', 'python', 'r', 'racket', 'ruby', 'scheme', 'typescript', 'wolfram-language']}>
<TabItem value="ada" label="Ada">

```ada
-- Floating Point: Float (implementation-defined), Long_Float (64-bit)
x : Float := 3.14;  -- implementation-defined precision
y : Long_Float := 3.141592653589793;  -- 64-bit
```

**Besonderheiten:**
- Float ist implementation-defined (typischerweise 32-bit oder 64-bit)
- Long_Float ist garantiert 64-bit
- Weitere Typen: Long_Long_Float (wenn verfügbar)

**Weiterführende Links:**
- [Ada Reference Manual - Floating Point Types](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-3-5-7.html)

</TabItem>
<TabItem value="c" label="C">

```c
// Floating Point: float (32-bit), double (64-bit)
float f = 3.14f;  // 32-bit
double d = 3.141592653589793;  // 64-bit
```

**Besonderheiten:**
- float ist 32-bit IEEE 754
- double ist 64-bit IEEE 754
- long double ist extended precision (implementation-defined)

**Weiterführende Links:**
- [C Standard - Floating Point Types](https://en.cppreference.com/w/c/language/arithmetic_types)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Floating Point: f32 (32-bit), f64 (64-bit)
var x: f32 = 3.14;
var y: f64 = 3.141592653589793;
```

**Besonderheiten:**
- f32 ist 32-bit IEEE 754
- f64 ist 64-bit IEEE 754
- Alle Größen sind garantiert
- Experimentelle Sprache, Syntax kann sich noch ändern

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Floating Point: float (32-bit), double (64-bit)
float f = 3.14f;  // 32-bit
double d = 3.141592653589793;  // 64-bit
```

**Besonderheiten:**
- float ist 32-bit IEEE 754
- double ist 64-bit IEEE 754
- Alle Größen sind garantiert
- decimal ist ein 128-bit Fließkommatyp (nicht IEEE 754)

**Weiterführende Links:**
- [Microsoft C# Documentation - Floating Point Types](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/floating-point-numeric-types)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Floating Point: float (32-bit), double (64-bit)
float f = 3.14f;  // 32-bit
double d = 3.141592653589793;  // 64-bit
```

**Besonderheiten:**
- float ist 32-bit IEEE 754
- double ist 64-bit IEEE 754
- long double ist extended precision (implementation-defined)

**Weiterführende Links:**
- [cppreference.com - Floating Point Types](https://en.cppreference.com/w/cpp/language/types)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Floating Point: double (64-bit)
(def x 3.14)  ; double
(def y 3.141592653589793)  ; double
```

**Besonderheiten:**
- double ist 64-bit IEEE 754
- float ist verfügbar, aber double ist Standard
- Alle Fließkommazahlen sind double

**Weiterführende Links:**
- [Clojure Documentation - Numbers](https://clojure.org/reference/data_structures#Numbers)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Floating Point: single-float (32-bit), double-float (64-bit)
(defvar x 3.14s0)  ; single-float (32-bit)
(defvar y 3.141592653589793d0)  ; double-float (64-bit)
```

**Besonderheiten:**
- single-float ist 32-bit
- double-float ist 64-bit
- short-float und long-float sind implementation-defined

**Weiterführende Links:**
- [Common Lisp HyperSpec - Floating Point Types](http://www.lispworks.com/documentation/HyperSpec/Body/t_short_.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Floating Point: Float32 (32-bit), Float64 (64-bit)
x : Float32 = 3.14_f32
y : Float64 = 3.141592653589793
```

**Besonderheiten:**
- Float32 ist 32-bit IEEE 754
- Float64 ist 64-bit IEEE 754
- Float ist ein Alias für Float64
- Alle Größen sind garantiert

**Weiterführende Links:**
- [Crystal Documentation - Floats](https://crystal-lang.org/reference/1.11/syntax_and_semantics/literals/floats.html)

</TabItem>
<TabItem value="d" label="D">

```d
// Floating Point: float (32-bit), double (64-bit)
float f = 3.14f;  // 32-bit
double d = 3.141592653589793;  // 64-bit
```

**Besonderheiten:**
- float ist 32-bit IEEE 754
- double ist 64-bit IEEE 754
- real ist extended precision (typischerweise 80-bit oder 64-bit)
- ifloat, idouble, ireal sind imaginary types

**Weiterführende Links:**
- [D Language Specification - Floating Point Types](https://dlang.org/spec/type.html#floating-point-types)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Floating Point: double (64-bit)
double x = 3.14;
double y = 3.141592653589793;
```

**Besonderheiten:**
- double ist 64-bit IEEE 754
- float ist nicht verfügbar, nur double
- Alle Fließkommazahlen sind double

**Weiterführende Links:**
- [Dart Documentation - Numbers](https://dart.dev/language/built-in-types#numbers)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
-- Floating Point: REAL_32 (32-bit), REAL_64 (64-bit)
local
    x: REAL_32
    y: REAL_64
do
    x := 3.14
    y := 3.141592653589793
end
```

**Besonderheiten:**
- REAL_32 (32-bit) und REAL_64 (64-bit) sind im ECMA-367 Standard definiert
- `REAL` ist ein Alias für `REAL_32`, `DOUBLE` ist ein Alias für `REAL_64`
- Alle Fließkommatypen sind IEEE 754 und expanded classes (Werttypen)

**Weiterführende Links:**
- [Eiffel ECMA-367 Standard](https://www.ecma-international.org/publications-and-standards/standards/ecma-367/)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Floating Point: float (64-bit)
x = 3.14  # float (64-bit)
y = 3.141592653589793  # float (64-bit)
```

**Besonderheiten:**
- float ist 64-bit IEEE 754
- Keine 32-bit float Typen
- Alle Fließkommazahlen sind 64-bit

**Weiterführende Links:**
- [Elixir Documentation - Numbers](https://elixir-lang.org/getting-started/basic-types.html#numbers)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Floating Point: Float (64-bit)
x : Float
x = 3.14

y : Float
y = 3.141592653589793
```

**Besonderheiten:**
- Float ist 64-bit IEEE 754
- Keine 32-bit float Typen
- Alle Fließkommazahlen sind 64-bit

**Weiterführende Links:**
- [Elm Documentation - Numbers](https://guide.elm-lang.org/types/numbers.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% Floating Point: float (64-bit)
X = 3.14,  % float (64-bit)
Y = 3.141592653589793.  % float (64-bit)
```

**Besonderheiten:**
- float ist 64-bit IEEE 754
- Keine 32-bit float Typen
- Alle Fließkommazahlen sind 64-bit

**Weiterführende Links:**
- [Erlang Documentation - Data Types](https://www.erlang.org/doc/reference_manual/data_types.html#floating-point-numbers)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Floating Point: float32 (32-bit), float (64-bit)
let f: float32 = 3.14f  // 32-bit
let d: float = 3.141592653589793  // 64-bit
```

**Besonderheiten:**
- float32 ist 32-bit IEEE 754
- float ist 64-bit IEEE 754 (Alias für System.Double)
- Alle Größen sind garantiert

**Weiterführende Links:**
- [F# Documentation - Numeric Types](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/basic-types)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Floating Point: REAL (implementation-defined), DOUBLE PRECISION (64-bit)
REAL :: x = 3.14  ! implementation-defined
DOUBLE PRECISION :: y = 3.141592653589793D0  ! 64-bit
```

**Besonderheiten:**
- REAL ist implementation-defined (typischerweise 32-bit oder 64-bit)
- DOUBLE PRECISION ist garantiert 64-bit
- REAL(KIND=4) und REAL(KIND=8) für explizite Größen

**Weiterführende Links:**
- [Fortran Standard - Floating Point Types](https://gcc.gnu.org/onlinedocs/gfortran/Floating-point-types.html)

</TabItem>
<TabItem value="gleam" label="Gleam">

```erlang
// Floating Point: Float (64-bit)
let x = 3.14  // Float (64-bit)
let y = 3.141592653589793  // Float (64-bit)
```

**Besonderheiten:**
- Float ist 64-bit IEEE 754
- Keine 32-bit float Typen
- Alle Fließkommazahlen sind 64-bit

**Weiterführende Links:**
- [Gleam Documentation - Types](https://gleam.run/documentation/tour/types/)

</TabItem>
<TabItem value="go" label="Go">

```go
// Floating Point: float32 (32-bit), float64 (64-bit)
var f float32 = 3.14  // 32-bit
var d float64 = 3.141592653589793  // 64-bit
```

**Besonderheiten:**
- float32 ist 32-bit IEEE 754
- float64 ist 64-bit IEEE 754
- Alle Größen sind garantiert

**Weiterführende Links:**
- [Go Language Specification - Floating Point Types](https://go.dev/ref/spec#Numeric_types)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Floating Point: float (32-bit), double (64-bit)
float f = 3.14f  // 32-bit
double d = 3.141592653589793  // 64-bit
```

**Besonderheiten:**
- float ist 32-bit IEEE 754
- double ist 64-bit IEEE 754
- Alle Größen sind garantiert
- Autoboxing zu Wrapper-Klassen (Float, Double)

**Weiterführende Links:**
- [Groovy Documentation - Numbers](https://groovy-lang.org/semantics.html#_numbers)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Floating Point: Float (32-bit), Double (64-bit)
x :: Float
x = 3.14

y :: Double
y = 3.141592653589793
```

**Besonderheiten:**
- Float ist 32-bit IEEE 754
- Double ist 64-bit IEEE 754
- Alle Größen sind garantiert

**Weiterführende Links:**
- [Haskell Documentation - Floating Point Types](https://www.haskell.org/tutorial/numbers.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Floating Point: Float (target-dependent, typischerweise 64-bit)
var x: Float = 3.14;
var y: Float = 3.141592653589793;
```

**Besonderheiten:**
- Float ist target-dependent (typischerweise 64-bit)
- Keine expliziten Größenangaben für 32/64-bit
- Größe hängt vom Compiler-Target ab

**Weiterführende Links:**
- [Haxe Documentation - Basic Types](https://haxe.org/manual/types-basic-types.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Floating Point: Double (64-bit)
x : Double
x = 3.14

y : Double
y = 3.141592653589793
```

**Besonderheiten:**
- Double ist 64-bit IEEE 754
- Keine 32-bit float Typen
- Alle Fließkommazahlen sind 64-bit

**Weiterführende Links:**
- [Idris Documentation - Types](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html#types)

</TabItem>
<TabItem value="java" label="Java">

```java
// Floating Point: float (32-bit), double (64-bit)
float f = 3.14f;  // 32-bit
double d = 3.141592653589793;  // 64-bit
```

**Besonderheiten:**
- float ist 32-bit IEEE 754
- double ist 64-bit IEEE 754
- Alle Größen sind garantiert
- Autoboxing zu Wrapper-Klassen (Float, Double)

**Weiterführende Links:**
- [Oracle Java Documentation - Floating Point Types](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Floating Point: number (64-bit)
let x = 3.14;  // number (64-bit)
let y = 3.141592653589793;  // number (64-bit)
```

**Besonderheiten:**
- number ist 64-bit IEEE 754 (double precision)
- Keine 32-bit float Typen
- Alle Fließkommazahlen sind 64-bit

**Weiterführende Links:**
- [MDN Web Docs - Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Floating Point: Float16 (16-bit), Float32 (32-bit), Float64 (64-bit)
x::Float16 = Float16(3.14)  # 16-bit
y::Float32 = 3.14f0  # 32-bit
z::Float64 = 3.141592653589793  # 64-bit
```

**Besonderheiten:**
- Float16 (16-bit), Float32 (32-bit), Float64 (64-bit) sind floating point Typen
- Alle Größen sind garantiert
- Float ist ein Alias für Float64

**Weiterführende Links:**
- [Julia Documentation - Floating Point Numbers](https://docs.julialang.org/en/v1/manual/integers-and-floating-point-numbers/)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Floating Point: float64 (64-bit)
val x: float64 = 3.141592653589793
val y: float64 = 2.718281828459045
```

**Besonderheiten:**
- Nur `float64` (64-bit IEEE 754) verfügbar
- Kein 32-bit Float-Typ
- Literale wie `3.14` werden automatisch als `float64` interpretiert

**Weiterführende Links:**
- [Koka Standard Library - float64](https://koka-lang.github.io/koka/doc/std_core_types.html#type-float64)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Floating Point: Float (32-bit), Double (64-bit)
val f: Float = 3.14f  // 32-bit
val d: Double = 3.141592653589793  // 64-bit
```

**Besonderheiten:**
- Float ist 32-bit IEEE 754
- Double ist 64-bit IEEE 754
- Alle Größen sind garantiert
- Alle Typen haben nullable Varianten (Float?, Double?)

**Weiterführende Links:**
- [Kotlin Documentation - Numbers](https://kotlinlang.org/docs/numbers.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Floating Point: Float (nur 64-bit)
def f : Float := 3.14
def d : Float := 3.141592653589793
```

**Besonderheiten:**
- Nur `Float` (64-bit IEEE 754) verfügbar, kein 32-bit Float-Typ
- Standardtyp für Fließkommazahlen
- Unterstützt Standard-Arithmetik und mathematische Funktionen
- `OfScientific`-Type-Class für Literal-Konvertierung

**Weiterführende Links:**
- [Lean 4 Documentation - Dependent Type Theory](https://lean-lang.org/theorem_proving_in_lean4/dependent_type_theory.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Floating Point: number (64-bit)
local x = 3.14  -- number (64-bit)
local y = 3.141592653589793  -- number (64-bit)
```

**Besonderheiten:**
- number ist 64-bit IEEE 754 (double precision)
- Keine 32-bit float Typen
- Alle Fließkommazahlen sind 64-bit

**Weiterführende Links:**
- [Lua Documentation - Numbers](https://www.lua.org/manual/5.4/manual.html#2.1)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% Floating Point: single (32-bit), double (64-bit)
x = single(3.14);  % 32-bit
y = 3.141592653589793;  % double (64-bit, default)
```

**Besonderheiten:**
- single ist 32-bit IEEE 754
- double ist 64-bit IEEE 754 (Standard)
- Alle Größen sind garantiert

**Weiterführende Links:**
- [MATLAB Documentation - Floating Point Types](https://www.mathworks.com/help/matlab/numeric-types.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```mercury
% Floating Point: float (64-bit double precision)
:- pred main(io::di, io::uo) is det.
main(!IO) :-
    X = 3.14,                          % float (64-bit)
    Y = 3.141592653589793,             % float (64-bit)
    Z = 1.0e10,                        % Wissenschaftliche Notation
    io.write_float(X, !IO), io.nl(!IO),
    io.write_float(Y, !IO), io.nl(!IO),
    io.write_float(Z, !IO), io.nl(!IO).
```

**Besonderheiten:**
- Mercury hat nur einen Fließkommatyp: `float` (entspricht C `double`, 64-bit IEEE 754)
- Kein 32-bit `float`-Typ verfügbar
- Wissenschaftliche Notation wird unterstützt
- Standardmathematische Operationen im `float`-Modul

**Weiterführende Links:**
- [The Mercury Standard Library - float](https://www.mercurylang.org/information/doc-release/mercury_library/float.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# Floating Point: Float32 (32-bit), Float64 (64-bit)
var x: Float32 = 3.14
var y: Float64 = 3.141592653589793
```

**Besonderheiten:**
- Float32 ist 32-bit IEEE 754
- Float64 ist 64-bit IEEE 754
- Alle Größen sind garantiert
- Alle Typen sind unveränderlich

**Weiterführende Links:**
- [Mojo Documentation - Types](https://docs.modular.com/mojo/manual/basics/types.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Floating Point: float32 (32-bit), float64 (64-bit)
var f: float32 = 3.14'f32
var d: float64 = 3.141592653589793
```

**Besonderheiten:**
- float32 ist 32-bit IEEE 754
- float64 ist 64-bit IEEE 754
- float ist ein Alias für float64
- Alle Größen sind garantiert

**Weiterführende Links:**
- [Nim Documentation - Floats](https://nim-lang.org/docs/manual.html#types-floats)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Floating Point: float (32-bit), double (64-bit)
float f = 3.14f;  // 32-bit
double d = 3.141592653589793;  // 64-bit
```

**Besonderheiten:**
- float ist 32-bit IEEE 754
- double ist 64-bit IEEE 754
- Alle Größen sind garantiert (C-kompatibel)

**Weiterführende Links:**
- [Objective-C Documentation - Types](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Floating Point: Single (32-bit), Double (64-bit)
var
  f: Single = 3.14;  // 32-bit
  d: Double = 3.141592653589793;  // 64-bit
```

**Besonderheiten:**
- Single ist 32-bit IEEE 754
- Double ist 64-bit IEEE 754
- Alle Größen sind garantiert
- Extended ist extended precision (typischerweise 80-bit)

**Weiterführende Links:**
- [Free Pascal Documentation - Real Types](https://www.freepascal.org/docs-html/ref/refse9.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Floating Point: float (64-bit) *)
let x = 3.14  (* float (64-bit) *)
let y = 3.141592653589793  (* float (64-bit) *)
```

**Besonderheiten:**
- float ist 64-bit IEEE 754
- Keine 32-bit float Typen
- Alle Fließkommazahlen sind 64-bit

**Weiterführende Links:**
- [OCaml Documentation - Floating Point](https://ocaml.org/manual/coreexamples.html#s:types)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
% Floating Point: single (32-bit), double (64-bit)
x = single(3.14);  % 32-bit
y = 3.141592653589793;  % double (64-bit, default)
```

**Besonderheiten:**
- single ist 32-bit IEEE 754
- double ist 64-bit IEEE 754 (Standard)
- Alle Größen sind garantiert

**Weiterführende Links:**
- [GNU Octave Documentation - Numeric Data Types](https://octave.org/doc/v8.1.0/Numeric-Data-Types.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Floating Point: f32 (32-bit), f64 (64-bit)
f: f32 = 3.14
d: f64 = 3.141592653589793
```

**Besonderheiten:**
- f32 ist 32-bit IEEE 754
- f64 ist 64-bit IEEE 754
- Alle Größen sind garantiert

**Weiterführende Links:**
- [Odin Documentation - Types](https://odin-lang.org/docs/overview/#types)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Floating Point: number (64-bit, typischerweise)
my $x = 3.14;  # number (64-bit)
my $y = 3.141592653589793;  # number (64-bit)
```

**Besonderheiten:**
- number ist typischerweise 64-bit IEEE 754 (double precision)
- Keine expliziten Typen für 32/64-bit
- Größe ist implementation-defined

**Weiterführende Links:**
- [Perl Documentation - Numeric Literals](https://perldoc.perl.org/perlnumber)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
// Floating Point: float (64-bit)
$x = 3.14;  // float (64-bit)
$y = 3.141592653589793;  // float (64-bit)
?>
```

**Besonderheiten:**
- float ist 64-bit IEEE 754 (double precision)
- Keine 32-bit float Typen
- Alle Fließkommazahlen sind 64-bit

**Weiterführende Links:**
- [PHP Documentation - Floating Point Numbers](https://www.php.net/manual/en/language.types.float.php)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Floating Point: Number (64-bit)
x :: Number
x = 3.14

y :: Number
y = 3.141592653589793
```

**Besonderheiten:**
- Number ist 64-bit IEEE 754
- Keine 32-bit float Typen
- Alle Fließkommazahlen sind 64-bit

**Weiterführende Links:**
- [PureScript Documentation - Numbers](https://github.com/purescript/documentation/blob/master/language/Types.md)

</TabItem>
<TabItem value="python" label="Python">

```python
# Floating Point: float (64-bit)
x = 3.14  # float (64-bit)
y = 3.141592653589793  # float (64-bit)
```

**Besonderheiten:**
- float ist 64-bit IEEE 754 (double precision)
- Keine 32-bit float Typen
- Alle Fließkommazahlen sind 64-bit

**Weiterführende Links:**
- [Python Documentation - Floating Point](https://docs.python.org/3/tutorial/floatingpoint.html)

</TabItem>
<TabItem value="r" label="R">

```r
# Floating Point: numeric (64-bit)
x <- 3.14  # numeric (64-bit)
y <- 3.141592653589793  # numeric (64-bit)
```

**Besonderheiten:**
- numeric ist 64-bit IEEE 754 (double precision)
- Keine 32-bit float Typen
- Alle Fließkommazahlen sind 64-bit

**Weiterführende Links:**
- [R Documentation - Numeric Types](https://cran.r-project.org/doc/manuals/r-release/R-intro.html#Numeric-vectors)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
; Floating Point: flonum (64-bit)
(define x 3.14)                ; flonum (64-bit)
(define y 3.141592653589793)   ; flonum (64-bit)
```

**Besonderheiten:**
- flonum ist 64-bit IEEE 754
- Keine 32-bit float Typen
- Alle Fließkommazahlen sind 64-bit

**Weiterführende Links:**
- [Racket Documentation - Numbers](https://docs.racket-lang.org/guide/numbers.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Floating Point: F32 (32-bit), F64 (64-bit)
f : F32
f = 3.14

d : F64
d = 3.141592653589793
```

**Besonderheiten:**
- F32 ist 32-bit IEEE 754
- F64 ist 64-bit IEEE 754
- Alle Größen sind garantiert
- Alle Typen sind unveränderlich

**Weiterführende Links:**
- [Roc Documentation - Types](https://www.roc-lang.org/tutorial#types)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Floating Point: Float (64-bit)
x = 3.14  # Float (64-bit)
y = 3.141592653589793  # Float (64-bit)
```

**Besonderheiten:**
- Float ist 64-bit IEEE 754 (double precision)
- Keine 32-bit float Typen
- Alle Fließkommazahlen sind 64-bit

**Weiterführende Links:**
- [Ruby Documentation - Numeric](https://ruby-doc.org/core-3.1.0/Numeric.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Floating Point: f32 (32-bit), f64 (64-bit)
let f: f32 = 3.14;  // 32-bit
let d: f64 = 3.141592653589793;  // 64-bit
```

**Besonderheiten:**
- f32 ist 32-bit IEEE 754
- f64 ist 64-bit IEEE 754
- Alle Größen sind garantiert

**Weiterführende Links:**
- [The Rust Book - Floating Point Types](https://doc.rust-lang.org/book/ch03-02-data-types.html#floating-point-types)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Floating Point: Float (32-bit), Double (64-bit)
val f: Float = 3.14f  // 32-bit
val d: Double = 3.141592653589793  // 64-bit
```

**Besonderheiten:**
- Float ist 32-bit IEEE 754
- Double ist 64-bit IEEE 754
- Alle Größen sind garantiert
- Autoboxing zu Wrapper-Klassen (java.lang.Float, java.lang.Double)

**Weiterführende Links:**
- [Scala Documentation - Numeric Types](https://docs.scala-lang.org/tour/unified-types.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; Floating Point: flonum (64-bit, typischerweise)
(define x 3.14)  ; flonum (64-bit)
(define y 3.141592653589793)  ; flonum (64-bit)
```

**Besonderheiten:**
- flonum ist typischerweise 64-bit IEEE 754
- Keine expliziten Typen für 32/64-bit
- Größe ist implementation-defined

**Weiterführende Links:**
- [Scheme Documentation - Numbers](https://www.scheme.com/tspl4/objects.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Floating Point: Float (32-bit), Double (64-bit)
let f: Float = 3.14  // 32-bit
let d: Double = 3.141592653589793  // 64-bit
```

**Besonderheiten:**
- Float ist 32-bit IEEE 754
- Double ist 64-bit IEEE 754
- Alle Größen sind garantiert

**Weiterführende Links:**
- [Swift Documentation - Floating Point Numbers](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/thebasics/#Floating-Point-Numbers)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Floating Point: number (64-bit)
let x: number = 3.14;  // number (64-bit)
let y: number = 3.141592653589793;  // number (64-bit)
```

**Besonderheiten:**
- number ist 64-bit IEEE 754 (double precision)
- Keine 32-bit float Typen
- Alle Fließkommazahlen sind 64-bit (JavaScript-kompatibel)

**Weiterführende Links:**
- [TypeScript Handbook - Basic Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Floating Point: Single (32-bit), Double (64-bit)
Dim f As Single = 3.14F  ' 32-bit
Dim d As Double = 3.141592653589793  ' 64-bit
```

**Besonderheiten:**
- Single ist 32-bit IEEE 754
- Double ist 64-bit IEEE 754
- Alle Größen sind garantiert
- Alle Typen sind .NET-Typen (System.Single, System.Double)

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Floating Point Types](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/data-types/floating-point-types)

</TabItem>
<TabItem value="v" label="V">

```v
// Floating Point: f32 (32-bit), f64 (64-bit)
mut f := f32(3.14)
mut d := f64(3.141592653589793)
```

**Besonderheiten:**
- f32 ist 32-bit IEEE 754
- f64 ist 64-bit IEEE 754
- Alle Größen sind garantiert

**Weiterführende Links:**
- [V Documentation - Types](https://github.com/vlang/v/blob/master/doc/docs.md#types)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Floating Point: Real (maschinengenau typischerweise 64-bit) *)
x = 3.14                        (* Real, maschinengenau *)
y = 3.141592653589793`           (* Real mit expliziter Maschinengenauigkeit *)
z = N[Pi, 50]                    (* Real mit 50 Stellen Präzision *)
```

**Besonderheiten:**
- Real ist typischerweise 64-bit IEEE 754 (maschinengenau)
- Arbitrary-precision arithmetic verfügbar via `N[expr, n]`
- Keine festen 32/64-bit Typen, aber Maschinengenauigkeit entspricht 64-bit

**Weiterführende Links:**
- [Wolfram Language Documentation - Numbers](https://reference.wolfram.com/language/guide/Numbers.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Floating Point: f16 (16-bit), f32 (32-bit), f64 (64-bit), f80, f128
const f16_val: f16 = 3.14;  // 16-bit
const f32_val: f32 = 3.14;  // 32-bit
const f64_val: f64 = 3.141592653589793;  // 64-bit
```

**Besonderheiten:**
- f16 (16-bit), f32 (32-bit), f64 (64-bit) sind floating point Typen
- f80 und f128 sind extended precision (wenn verfügbar)
- Alle Größen sind garantiert

**Weiterführende Links:**
- [Zig Documentation - Primitive Types](https://ziglang.org/documentation/0.11.0/#Primitive-Types)

</TabItem>
</Tabs>


## 3.2.5. Boolean

Wahrheitswerte mit zwei möglichen Zuständen: wahr (true) oder falsch (false).

### Sprachen {#sprachen}

<Tabs availableTabs={['ada', 'c', 'carbon', 'csharp', 'cpp', 'clojure', 'common-lisp', 'crystal', 'd', 'dart', 'eiffel', 'elixir', 'elm', 'erlang', 'fsharp', 'fortran', 'gleam', 'go', 'groovy', 'haskell', 'haxe', 'idris', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'lua', 'matlab', 'mercury', 'mojo', 'nim', 'objective-c', 'object-pascal', 'ocaml', 'octave', 'odin', 'php', 'purescript', 'python', 'r', 'racket', 'roc', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'vbnet', 'v', 'wolfram-language', 'zig']} yellowTabs={['perl']}>
<TabItem value="ada" label="Ada">

```ada
-- Boolean: Boolean type
flag : Boolean := True;
result : Boolean := False;
```

**Besonderheiten:**
- Boolean ist ein Enumeration type mit zwei Werten: True und False
- Standard-Boolean-Typ ist verfügbar
- Alle Boolean-Werte sind unveränderlich

**Weiterführende Links:**
- [Ada Reference Manual - Boolean Type](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-3-5-3.html)

</TabItem>
<TabItem value="c" label="C">

```c
// Boolean: _Bool (seit C99), stdbool.h für bool
#include <stdbool.h>
bool flag = true;
bool result = false;
```

**Besonderheiten:**
- _Bool ist seit C99 verfügbar
- stdbool.h definiert bool, true, false als Makros
- Vor C99: int mit 0/1 als Workaround

**Weiterführende Links:**
- [C Standard - Boolean Type](https://en.cppreference.com/w/c/language/bool_constant)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Boolean: bool
var flag: bool = true;
var result: bool = false;
```

**Besonderheiten:**
- bool ist ein primitiver Typ
- true und false sind die einzigen Werte
- Experimentelle Sprache, Syntax kann sich noch ändern

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Boolean: bool
bool flag = true;
bool result = false;
```

**Besonderheiten:**
- bool ist ein primitiver Typ (Alias für System.Boolean)
- true und false sind die einzigen Werte
- Alle Boolean-Werte sind unveränderlich

**Weiterführende Links:**
- [Microsoft C# Documentation - Boolean Type](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/bool)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Boolean: bool
bool flag = true;
bool result = false;
```

**Besonderheiten:**
- bool ist ein primitiver Typ (seit C++98)
- true und false sind die einzigen Werte
- Kann implizit zu int konvertiert werden (true=1, false=0)

**Weiterführende Links:**
- [cppreference.com - Boolean Type](https://en.cppreference.com/w/cpp/language/types)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Boolean: boolean
(def flag true)  ; boolean
(def result false)  ; boolean
```

**Besonderheiten:**
- boolean ist ein primitiver Typ
- true und false sind die einzigen Werte
- nil ist auch "falsy" in booleschen Kontexten

**Weiterführende Links:**
- [Clojure Documentation - Booleans](https://clojure.org/reference/data_structures#Booleans)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Boolean: t (true), nil (false)
(defvar flag t)  ; true
(defvar result nil)  ; false
```

**Besonderheiten:**
- t ist true, nil ist false
- Alle anderen Werte sind auch "truthy"
- nil ist das einzige "falsy" Wert

**Weiterführende Links:**
- [Common Lisp HyperSpec - Boolean](http://www.lispworks.com/documentation/HyperSpec/Body/t_boolean.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Boolean: Bool
flag : Bool = true
result : Bool = false
```

**Besonderheiten:**
- Bool ist ein primitiver Typ
- true und false sind die einzigen Werte
- nil ist auch "falsy" in booleschen Kontexten

**Weiterführende Links:**
- [Crystal Documentation - Booleans](https://crystal-lang.org/reference/1.11/syntax_and_semantics/literals/booleans.html)

</TabItem>
<TabItem value="d" label="D">

```d
// Boolean: bool
bool flag = true;
bool result = false;
```

**Besonderheiten:**
- bool ist ein primitiver Typ
- true und false sind die einzigen Werte
- Kann implizit zu int konvertiert werden (true=1, false=0)

**Weiterführende Links:**
- [D Language Specification - Boolean Type](https://dlang.org/spec/type.html#basic-data-types)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Boolean: bool
bool flag = true;
bool result = false;
```

**Besonderheiten:**
- bool ist ein primitiver Typ
- true und false sind die einzigen Werte
- Alle Boolean-Werte sind unveränderlich

**Weiterführende Links:**
- [Dart Documentation - Booleans](https://dart.dev/language/built-in-types#booleans)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
-- Boolean: BOOLEAN
local
    flag: BOOLEAN
    result: BOOLEAN
do
    flag := True
    result := False
end
```

**Besonderheiten:**
- BOOLEAN ist ein primitiver Typ
- True und False sind die einzigen Werte
- Alle Boolean-Werte sind unveränderlich

**Weiterführende Links:**
- [Eiffel Documentation - Boolean Type](https://www.eiffel.org/doc/eiffel/Eiffel_Standard)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Boolean: boolean (atoms :true/:false)
flag = true  # atom :true
result = false  # atom :false
```

**Besonderheiten:**
- boolean sind Atome :true und :false
- nil ist auch "falsy" in booleschen Kontexten
- Alle Werte sind unveränderlich

**Weiterführende Links:**
- [Elixir Documentation - Booleans](https://elixir-lang.org/getting-started/basic-types.html#booleans)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Boolean: Bool
flag : Bool
flag = True

result : Bool
result = False
```

**Besonderheiten:**
- Bool ist ein primitiver Typ
- True und False sind die einzigen Werte
- Alle Boolean-Werte sind unveränderlich

**Weiterführende Links:**
- [Elm Documentation - Booleans](https://guide.elm-lang.org/types/booleans.html)

</TabItem>
<TabItem value="erlang" label="Erlang">
```erlang
% Boolean: boolean (atoms true/false)
Flag = true,  % atom true
Result = false.  % atom false
```

**Besonderheiten:**
- boolean sind Atome `true` und `false`
- Alle Werte sind unveränderlich
- Nur `false` ist falsy; es gibt kein `nil` in Erlang

**Weiterführende Links:**
- [Erlang Documentation - Booleans](https://www.erlang.org/doc/reference_manual/data_types.html#boolean)
</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Boolean: bool
let flag = true
let result = false
```

**Besonderheiten:**
- bool ist ein primitiver Typ (Alias für System.Boolean)
- true und false sind die einzigen Werte
- Alle Boolean-Werte sind unveränderlich

**Weiterführende Links:**
- [F# Documentation - Boolean Type](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/basic-types)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Boolean: LOGICAL
LOGICAL :: flag = .TRUE.
LOGICAL :: result = .FALSE.
```

**Besonderheiten:**
- LOGICAL ist ein primitiver Typ
- `.TRUE.` und `.FALSE.` sind die einzigen logischen Literale
- LOGICAL-Variablen können mit verschiedenen KINDs deklariert werden

**Weiterführende Links:**
- [Fortran Standard - Logical Type](https://gcc.gnu.org/onlinedocs/gfortran/LOGICAL.html)

</TabItem>
<TabItem value="gleam" label="Gleam">

```erlang
// Boolean: Bool
let flag = True
let result = False
```

**Besonderheiten:**
- Bool ist ein primitiver Typ
- True und False sind die einzigen Werte
- Alle Boolean-Werte sind unveränderlich

**Weiterführende Links:**
- [Gleam Documentation - Types](https://gleam.run/documentation/tour/types/)

</TabItem>
<TabItem value="go" label="Go">

```go
// Boolean: bool
var flag bool = true
var result bool = false
```

**Besonderheiten:**
- bool ist ein primitiver Typ
- true und false sind die einzigen Werte
- Alle Boolean-Werte sind unveränderlich

**Weiterführende Links:**
- [Go Language Specification - Boolean Type](https://go.dev/ref/spec#Boolean_types)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Boolean: boolean
boolean flag = true
boolean result = false
```

**Besonderheiten:**
- boolean ist ein primitiver Typ
- true und false sind die einzigen Werte
- Autoboxing zu Wrapper-Klasse (Boolean)

**Weiterführende Links:**
- [Groovy Documentation - Booleans](https://groovy-lang.org/semantics.html#_booleans)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Boolean: Bool
flag :: Bool
flag = True

result :: Bool
result = False
```

**Besonderheiten:**
- Bool ist ein primitiver Typ
- True und False sind die einzigen Werte
- Alle Boolean-Werte sind unveränderlich

**Weiterführende Links:**
- [Haskell Documentation - Boolean Type](https://www.haskell.org/tutorial/basictypes.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Boolean: Bool
var flag: Bool = true;
var result: Bool = false;
```

**Besonderheiten:**
- Bool ist ein primitiver Typ
- true und false sind die einzigen Werte
- Alle Boolean-Werte sind unveränderlich

**Weiterführende Links:**
- [Haxe Documentation - Basic Types](https://haxe.org/manual/types-basic-types.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Boolean: Bool
flag : Bool
flag = True

result : Bool
result = False
```

**Besonderheiten:**
- Bool ist ein primitiver Typ
- True und False sind die einzigen Werte
- Alle Boolean-Werte sind unveränderlich

**Weiterführende Links:**
- [Idris Documentation - Types](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html#types)

</TabItem>
<TabItem value="java" label="Java">

```java
// Boolean: boolean
boolean flag = true;
boolean result = false;
```

**Besonderheiten:**
- boolean ist ein primitiver Typ
- true und false sind die einzigen Werte
- Autoboxing zu Wrapper-Klasse (Boolean)

**Weiterführende Links:**
- [Oracle Java Documentation - Boolean Type](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Boolean: boolean
let flag = true;
let result = false;
```

**Besonderheiten:**
- boolean ist ein primitiver Typ
- true und false sind die einzigen Werte
- Viele Werte sind "truthy" oder "falsy" in booleschen Kontexten

**Weiterführende Links:**
- [MDN Web Docs - Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Boolean: Bool
flag::Bool = true
result::Bool = false
```

**Besonderheiten:**
- Bool ist ein primitiver Typ
- true und false sind die einzigen Werte
- Alle Boolean-Werte sind unveränderlich

**Weiterführende Links:**
- [Julia Documentation - Booleans](https://docs.julialang.org/en/v1/manual/mathematical-operations/#Boolean-Expressions)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Boolean: bool
val flag: bool = True
val result: bool = False

// Logische Operatoren
val and-result = flag && result
val or-result = flag || result
val not-result = !flag
```

**Besonderheiten:**
- `bool` mit Konstruktoren `True` und `False`
- Definiert als algebraischer Datentyp: `type bool { True; False }`
- Logische Operatoren: `&&`, `||`, `!`
- Pattern Matching auf Bool-Werte möglich

**Weiterführende Links:**
- [Koka Standard Library - bool](https://koka-lang.github.io/koka/doc/std_core_types.html#type-bool)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Boolean: Boolean
val flag: Boolean = true
val result: Boolean = false
```

**Besonderheiten:**
- Boolean ist ein primitiver Typ
- true und false sind die einzigen Werte
- Alle Typen haben nullable Varianten (Boolean?)

**Weiterführende Links:**
- [Kotlin Documentation - Booleans](https://kotlinlang.org/docs/basic-types.html#booleans)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Boolean: Bool
def flag : Bool := true
def result : Bool := false

-- Logische Operatoren
def andResult : Bool := true && false  -- false
def orResult : Bool := true || false   -- true
def notResult : Bool := !true          -- false
```

**Besonderheiten:**
- `Bool` ist ein induktiver Typ mit Konstruktoren `true` und `false`
- Logische Operatoren: `&&` (und), `||` (oder), `!` (nicht)
- Pattern Matching auf `Bool` möglich
- Wird in `if`/`then`/`else` Ausdrücken verwendet

**Weiterführende Links:**
- [Lean 4 Documentation - Dependent Type Theory](https://lean-lang.org/theorem_proving_in_lean4/dependent_type_theory.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Boolean: boolean
local flag = true  -- boolean
local result = false  -- boolean
```

**Besonderheiten:**
- boolean ist ein primitiver Typ (seit Lua 5.0)
- true und false sind die einzigen Werte
- nil ist auch "falsy" in booleschen Kontexten

**Weiterführende Links:**
- [Lua Documentation - Booleans](https://www.lua.org/manual/5.4/manual.html#2.1)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% Boolean: logical
flag = true;  % logical
result = false;  % logical
```

**Besonderheiten:**
- logical ist ein primitiver Typ
- true und false sind die einzigen Werte
- Alle Boolean-Werte sind unveränderlich

**Weiterführende Links:**
- [MATLAB Documentation - Logical Arrays](https://www.mathworks.com/help/matlab/logical-operations.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```mercury
% Boolean: bool (yes | no)
:- import_module bool.

:- pred main(io::di, io::uo) is det.
main(!IO) :-
    Flag = yes,              % bool
    Result = no,             % bool
    Negated = bool.not(Flag),
    Combined = bool.and(Flag, Result),
    io.write(Flag, !IO), io.nl(!IO),
    io.write(Negated, !IO), io.nl(!IO),
    io.write(Combined, !IO), io.nl(!IO).
```

**Besonderheiten:**
- `bool` ist als ADT definiert: `:- type bool ---> yes ; no.`
- Die Werte sind `yes` und `no` (nicht `true`/`false`)
- Boolean-Operatoren im `bool`-Modul: `bool.and/2`, `bool.or/2`, `bool.not/1`
- Logische Tests in Mercury verwenden eher `semidet`-Prädikate als Boolean-Werte

**Weiterführende Links:**
- [The Mercury Standard Library - bool](https://www.mercurylang.org/information/doc-release/mercury_library/bool.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# Boolean: Bool
var flag: Bool = True
var result: Bool = False
```

**Besonderheiten:**
- Bool ist ein primitiver Typ
- True und False sind die einzigen Werte
- Alle Boolean-Werte sind unveränderlich

**Weiterführende Links:**
- [Mojo Documentation - Types](https://docs.modular.com/mojo/manual/basics/types.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Boolean: bool
var flag: bool = true
var result: bool = false
```

**Besonderheiten:**
- `bool` ist ein primitiver Typ
- `true` und `false` sind die einzigen Werte
- Boolean-Operatoren: `and`, `or`, `not`, `xor`

**Weiterführende Links:**
- [Nim Documentation - Booleans](https://nim-lang.org/docs/manual.html#types-boolean-type)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Boolean: BOOL
BOOL flag = YES;
BOOL result = NO;
```

**Besonderheiten:**
- BOOL ist ein typedef für signed char
- YES und NO sind die Werte (1 und 0)
- Kann implizit zu int konvertiert werden

**Weiterführende Links:**
- [Objective-C Documentation - Boolean Type](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Boolean: Boolean
var
  flag: Boolean = True;
  result: Boolean = False;
```

**Besonderheiten:**
- Boolean ist ein primitiver Typ
- True und False sind die Werte
- Alle Boolean-Werte sind unveränderlich

**Weiterführende Links:**
- [Free Pascal Documentation - Boolean Type](https://www.freepascal.org/docs-html/ref/refse8.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Boolean: bool *)
let flag = true
let result = false
```

**Besonderheiten:**
- bool ist ein primitiver Typ
- true und false sind die einzigen Werte
- Alle Boolean-Werte sind unveränderlich

**Weiterführende Links:**
- [OCaml Documentation - Booleans](https://ocaml.org/manual/coreexamples.html#s:types)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
% Boolean: logical
flag = true;  % logical
result = false;  % logical
```

**Besonderheiten:**
- logical ist ein primitiver Typ
- true und false sind die einzigen Werte
- Alle Boolean-Werte sind unveränderlich

**Weiterführende Links:**
- [GNU Octave Documentation - Logical Values](https://octave.org/doc/v8.1.0/Logical-Values.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Boolean: bool
flag: bool = true
result: bool = false
```

**Besonderheiten:**
- bool ist ein primitiver Typ
- true und false sind die einzigen Werte
- Alle Boolean-Werte sind unveränderlich

**Weiterführende Links:**
- [Odin Documentation - Types](https://odin-lang.org/docs/overview/#types)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Boolean: nicht direkt unterstützt, 1/0 oder ""/"1"
my $flag = 1;  # true
my $result = 0;  # false
```

**Besonderheiten:**
- Perl hat keinen direkten Boolean-Typ
- 1/0 oder ""/"1" werden als Boolean verwendet
- Viele Werte sind "truthy" oder "falsy"

**Weiterführende Links:**
- [Perl Documentation - Boolean Context](https://perldoc.perl.org/perlsyn#Truth-and-Falsehood)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
// Boolean: bool
$flag = true;
$result = false;
?>
```

**Besonderheiten:**
- bool ist ein primitiver Typ
- true und false sind die einzigen Werte
- Viele Werte sind "truthy" oder "falsy" in booleschen Kontexten

**Weiterführende Links:**
- [PHP Documentation - Boolean](https://www.php.net/manual/en/language.types.boolean.php)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Boolean: Boolean
flag :: Boolean
flag = true

result :: Boolean
result = false
```

**Besonderheiten:**
- Boolean ist ein primitiver Typ
- true und false sind die einzigen Werte
- Alle Boolean-Werte sind unveränderlich

**Weiterführende Links:**
- [PureScript Documentation](https://github.com/purescript/documentation/blob/master/language/Types.md)

</TabItem>
<TabItem value="python" label="Python">

```python
# Boolean: bool
flag = True
result = False
```

**Besonderheiten:**
- bool ist ein primitiver Typ (Subtyp von int)
- True und False sind die einzigen Werte
- Viele Werte sind "truthy" oder "falsy" in booleschen Kontexten

**Weiterführende Links:**
- [Python Documentation - Boolean Type](https://docs.python.org/3/library/stdtypes.html#boolean-values)

</TabItem>
<TabItem value="r" label="R">

```r
# Boolean: logical
flag <- TRUE  # logical
result <- FALSE  # logical
```

**Besonderheiten:**
- logical ist ein primitiver Typ
- TRUE und FALSE sind die Werte
- Alle Boolean-Werte sind unveränderlich

**Weiterführende Links:**
- [R Documentation - Logical Vectors](https://cran.r-project.org/doc/manuals/r-release/R-intro.html#Logical-vectors)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
; Boolean
(define flag #t)    ; boolean (true)
(define result #f)  ; boolean (false)
```

**Besonderheiten:**
- boolean ist ein primitiver Typ
- `#t` (true) und `#f` (false) sind die Werte
- Alle Boolean-Werte sind unveränderlich

**Weiterführende Links:**
- [Racket Documentation - Booleans](https://docs.racket-lang.org/reference/booleans.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Boolean: Bool
flag : Bool
flag = True

result : Bool
result = False
```

**Besonderheiten:**
- Bool ist ein primitiver Typ
- True und False sind die einzigen Werte
- Alle Boolean-Werte sind unveränderlich

**Weiterführende Links:**
- [Roc Documentation - Types](https://www.roc-lang.org/tutorial#types)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Boolean: TrueClass/FalseClass
flag = true  # TrueClass
result = false  # FalseClass
```

**Besonderheiten:**
- true ist TrueClass, false ist FalseClass
- true und false sind die einzigen Werte
- nil ist auch "falsy" in booleschen Kontexten

**Weiterführende Links:**
- [Ruby Documentation - Boolean](https://ruby-doc.org/core-3.1.0/TrueClass.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Boolean: bool
let flag: bool = true;
let result: bool = false;
```

**Besonderheiten:**
- bool ist ein primitiver Typ
- true und false sind die einzigen Werte
- Alle Boolean-Werte sind unveränderlich

**Weiterführende Links:**
- [The Rust Book - Boolean Type](https://doc.rust-lang.org/book/ch03-02-data-types.html#the-boolean-type)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Boolean: Boolean
val flag: Boolean = true
val result: Boolean = false
```

**Besonderheiten:**
- Boolean ist ein primitiver Typ
- true und false sind die einzigen Werte
- Autoboxing zu Wrapper-Klasse (java.lang.Boolean)

**Weiterführende Links:**
- [Scala Documentation - Boolean Type](https://docs.scala-lang.org/tour/unified-types.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; Boolean: boolean
(define flag #t)  ; boolean (true)
(define result #f)  ; boolean (false)
```

**Besonderheiten:**
- boolean ist ein primitiver Typ
- #t (true) und #f (false) sind die Werte
- Alle Boolean-Werte sind unveränderlich

**Weiterführende Links:**
- [Scheme Documentation - Booleans](https://www.scheme.com/tspl4/objects.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Boolean: Bool
let flag: Bool = true
let result: Bool = false
```

**Besonderheiten:**
- Bool ist ein primitiver Typ
- true und false sind die einzigen Werte
- Alle Boolean-Werte sind unveränderlich

**Weiterführende Links:**
- [Swift Documentation - Booleans](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/thebasics/#Booleans)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Boolean: boolean
let flag: boolean = true;
let result: boolean = false;
```

**Besonderheiten:**
- boolean ist ein primitiver Typ
- true und false sind die einzigen Werte
- Alle Boolean-Werte sind unveränderlich (JavaScript-kompatibel)

**Weiterführende Links:**
- [TypeScript Handbook - Basic Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Boolean: Boolean
Dim flag As Boolean = True
Dim result As Boolean = False
```

**Besonderheiten:**
- Boolean ist ein primitiver Typ (Alias für System.Boolean)
- True und False sind die Werte
- Alle Boolean-Werte sind unveränderlich

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Boolean Type](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/data-types/boolean-data-type)

</TabItem>
<TabItem value="v" label="V">

```v
// Boolean: bool
mut flag := true
mut result := false
```

**Besonderheiten:**
- bool ist ein primitiver Typ
- true und false sind die einzigen Werte
- Alle Boolean-Werte sind unveränderlich

**Weiterführende Links:**
- [V Documentation - Types](https://github.com/vlang/v/blob/master/doc/docs.md#types)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Boolean: True/False *)
flag = True
result = False
```

**Besonderheiten:**
- True und False sind symbolische Konstanten
- Alle Boolean-Werte sind unveränderlich
- Symbolische Auswertung ist verfügbar

**Weiterführende Links:**
- [Wolfram Language Documentation - Booleans](https://reference.wolfram.com/language/guide/Booleans.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Boolean: bool
const flag: bool = true;
const result: bool = false;
```

**Besonderheiten:**
- bool ist ein primitiver Typ
- true und false sind die einzigen Werte
- Alle Boolean-Werte sind unveränderlich

**Weiterführende Links:**
- [Zig Documentation - Primitive Types](https://ziglang.org/documentation/0.11.0/#Primitive-Types)

</TabItem>
</Tabs>


## 3.2.6. Character

Einzelne Zeichen, typischerweise Unicode-Codepoints oder ASCII-Zeichen.

### Sprachen {#sprachen}

<Tabs availableTabs={['ada', 'c', 'carbon', 'csharp', 'cpp', 'clojure', 'common-lisp', 'crystal', 'd', 'eiffel', 'elm', 'fsharp', 'fortran', 'go', 'groovy', 'haskell', 'idris', 'java', 'julia', 'koka', 'kotlin', 'lean4', 'matlab', 'mercury', 'nim', 'objective-c', 'object-pascal', 'ocaml', 'octave', 'odin', 'purescript', 'racket', 'rust', 'scala', 'scheme', 'swift', 'vbnet']} yellowTabs={['elixir', 'erlang', 'zig']} orangeTabs={['dart', 'gleam', 'haxe', 'javascript', 'lua', 'mojo', 'perl', 'php', 'python', 'r', 'roc', 'ruby', 'typescript', 'v', 'wolfram-language']}>
<TabItem value="ada" label="Ada">

```ada
-- Character: Character (8-bit), Wide_Character, Wide_Wide_Character
ch : Character := 'A';
wide_ch : Wide_Character := 'Ä';
wide_wide_ch : Wide_Wide_Character := '🎉';
```

**Besonderheiten:**
- Character ist 8-bit (ISO 8859-1)
- Wide_Character ist 16-bit (Unicode BMP)
- Wide_Wide_Character ist 32-bit (vollständiges Unicode)

**Weiterführende Links:**
- [Ada Reference Manual - Character Types](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-3-5-2.html)

</TabItem>
<TabItem value="c" label="C">

```c
// Character: char (8-bit)
char ch = 'A';
```

**Besonderheiten:**
- char ist 8-bit (kann signed oder unsigned sein, implementation-defined)
- Keine direkten Unicode-Typen
- wchar_t für breite Zeichen (implementation-defined Größe)

**Weiterführende Links:**
- [C Standard - Character Types](https://en.cppreference.com/w/c/language/arithmetic_types)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Character: char
var ch: char = 'A';
```

**Besonderheiten:**
- char ist ein primitiver Typ
- Experimentelle Sprache, Syntax kann sich noch ändern
- Unicode-Unterstützung ist geplant

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Character: char (16-bit Unicode)
char ch = 'A';
char unicode = '\u00E4';  // ä (Unicode-Zeichen)
char newline = '\n';       // Escape-Sequenz
```

**Besonderheiten:**
- char ist 16-bit Unicode (UTF-16 Code Unit)
- Zeichen außerhalb der Basic Multilingual Plane (z.B. Emojis) benötigen Surrogate-Pairs und passen nicht in einen einzelnen `char`
- System.Char ist der .NET-Typ

**Weiterführende Links:**
- [Microsoft C# Documentation - Char Type](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/char)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Character: char (8-bit), wchar_t, char16_t, char32_t
char ch = 'A';
wchar_t wch = L'Ä';
char16_t u16ch = u'🎉';
char32_t u32ch = U'🎉';
```

**Besonderheiten:**
- char ist 8-bit (kann signed oder unsigned sein, implementation-defined)
- wchar_t ist implementation-defined Größe
- char16_t (16-bit) und char32_t (32-bit) seit C++11 für Unicode

**Weiterführende Links:**
- [cppreference.com - Character Types](https://en.cppreference.com/w/cpp/language/types)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Character: char
(def ch \A)  ; char
(def unicode \🎉)  ; char (Unicode)
```

**Besonderheiten:**
- char ist ein primitiver Typ
- Unterstützt Unicode-Zeichen
- Alle Zeichen sind unveränderlich

**Weiterführende Links:**
- [Clojure Documentation - Characters](https://clojure.org/reference/data_structures#Characters)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Character: character
(defvar ch #\A)  ; character
(defvar unicode #\🎉)  ; character (Unicode)
```

**Besonderheiten:**
- character ist ein primitiver Typ
- Unterstützt Unicode-Zeichen
- Alle Zeichen sind unveränderlich

**Weiterführende Links:**
- [Common Lisp HyperSpec - Character Type](http://www.lispworks.com/documentation/HyperSpec/Body/t_charac.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Character: Char (32-bit Unicode)
ch : Char = 'A'
unicode : Char = '🎉'
```

**Besonderheiten:**
- Char ist 32-bit Unicode (UTF-32)
- Unterstützt alle Unicode-Zeichen
- Alle Zeichen sind unveränderlich

**Weiterführende Links:**
- [Crystal Documentation - Characters](https://crystal-lang.org/reference/1.11/syntax_and_semantics/literals/char.html)

</TabItem>
<TabItem value="d" label="D">

```d
// Character: char (8-bit), wchar (16-bit), dchar (32-bit)
char ch = 'A';
wchar wch = 'Ä';
dchar dch = '🎉';
```

**Besonderheiten:**
- char ist 8-bit (UTF-8 code unit)
- wchar ist 16-bit (UTF-16 code unit)
- dchar ist 32-bit (Unicode codepoint)

**Weiterführende Links:**
- [D Language Specification - Character Types](https://dlang.org/spec/type.html#basic-data-types)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Character: String (kein separater Character-Typ)
String ch = 'A';
String unicode = '🎉';
```

**Besonderheiten:**
- Dart hat keinen separaten Character-Typ
- String mit einem Zeichen wird verwendet
- Unterstützt Unicode-Zeichen

**Weiterführende Links:**
- [Dart Documentation - Strings](https://dart.dev/language/built-in-types#strings)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
-- Character: CHARACTER_8 (8-bit), CHARACTER_32 (Unicode)
local
    ch: CHARACTER_8
    uc: CHARACTER_32
do
    ch := 'A'
    uc := '%/9731/'  -- Unicode-Codepoint U+2603 (Snowman)
end
```

**Besonderheiten:**
- CHARACTER_8 (8-bit) und CHARACTER_32 (32-bit Unicode) sind im ECMA-367 Standard definiert
- `CHARACTER` ist ein Alias für `CHARACTER_8`
- CHARACTER_32 bietet volle Unicode-Unterstützung
- Alle Zeichen-Typen sind expanded classes (Werttypen)

**Weiterführende Links:**
- [Eiffel ECMA-367 Standard](https://www.ecma-international.org/publications-and-standards/standards/ecma-367/)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Character: charlist (kein separater Character-Typ)
ch = ?A  # integer codepoint
unicode = ?🎉  # integer codepoint
```

**Besonderheiten:**
- Elixir hat keinen separaten Character-Typ
- ?X gibt den Codepoint als Integer zurück
- Unterstützt Unicode-Zeichen

**Weiterführende Links:**
- [Elixir Documentation - Charlists](https://elixir-lang.org/getting-started/binaries-strings-and-char-lists.html)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Character: Char
ch : Char
ch = 'A'

unicode : Char
unicode = '🎉'
```

**Besonderheiten:**
- Char ist ein primitiver Typ
- Unterstützt Unicode-Zeichen
- Alle Zeichen sind unveränderlich

**Weiterführende Links:**
- [Elm Documentation - Characters](https://package.elm-lang.org/packages/elm/core/latest/Char)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% Character: integer codepoint (kein separater Character-Typ)
Ch = $A,  % integer codepoint
Unicode = $🎉.  % integer codepoint
```

**Besonderheiten:**
- Erlang hat keinen separaten Character-Typ
- $X gibt den Codepoint als Integer zurück
- Unterstützt Unicode-Zeichen

**Weiterführende Links:**
- [Erlang Documentation - Characters](https://www.erlang.org/doc/reference_manual/data_types.html#characters)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Character: char (16-bit Unicode)
let ch: char = 'A'
let unicode: char = '\u00E9'  // é (BMP-Zeichen)
```

**Besonderheiten:**
- char ist 16-bit Unicode (UTF-16, eine Code Unit)
- Zeichen außerhalb der BMP (z.B. Emojis) erfordern Surrogat-Paare und passen nicht in einen einzelnen `char`
- System.Char ist der .NET-Typ

**Weiterführende Links:**
- [F# Documentation - Characters](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/basic-types)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Character: CHARACTER
CHARACTER :: ch = 'A'
CHARACTER(LEN=10) :: name = 'Hallo'
```

**Besonderheiten:**
- CHARACTER ist ein primitiver Typ
- Kann eine Länge haben (CHARACTER(LEN=n))
- CHARACTER(LEN=*) für Strings variabler Länge als Parameter

**Weiterführende Links:**
- [Fortran Standard - Character Type](https://gcc.gnu.org/onlinedocs/gfortran/CHARACTER.html)

</TabItem>
<TabItem value="gleam" label="Gleam">

```erlang
// Character: String (kein separater Character-Typ)
let ch = "A"  // String mit einem Zeichen
let unicode = "🎉"  // String mit einem Zeichen
```

**Besonderheiten:**
- Gleam hat keinen separaten Character-Typ
- String mit einem Zeichen wird verwendet
- Unterstützt Unicode-Zeichen

**Weiterführende Links:**
- [Gleam Documentation - Types](https://gleam.run/documentation/tour/types/)

</TabItem>
<TabItem value="go" label="Go">

```go
// Character: rune (32-bit Unicode codepoint), byte (8-bit)
var ch rune = 'A'
var unicode rune = '🎉'
var b byte = 'A'  // 8-bit
```

**Besonderheiten:**
- rune ist 32-bit Unicode codepoint (Alias für int32)
- byte ist 8-bit (Alias für uint8)
- Unterstützt alle Unicode-Zeichen

**Weiterführende Links:**
- [Go Language Specification - Rune Type](https://go.dev/ref/spec#Rune_literals)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Character: char (16-bit Unicode / UTF-16)
char ch = 'A'
char unicode = '\u00E4' // ä
```

**Besonderheiten:**
- char ist 16-bit Unicode (UTF-16 Code Unit)
- Unterstützt Zeichen der Basic Multilingual Plane (U+0000 bis U+FFFF)
- Autoboxing zu Wrapper-Klasse `Character`

**Weiterführende Links:**
- [Groovy Documentation - Characters](https://groovy-lang.org/objectorientation.html#_primitive_types)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Character: Char
ch :: Char
ch = 'A'

unicode :: Char
unicode = '🎉'
```

**Besonderheiten:**
- Char ist ein primitiver Typ
- Unterstützt Unicode-Zeichen
- Alle Zeichen sind unveränderlich

**Weiterführende Links:**
- [Haskell Documentation - Characters](https://www.haskell.org/tutorial/basictypes.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Character: String (kein separater Character-Typ, target-dependent)
var ch: String = "A";
var unicode: String = "🎉";
```

**Besonderheiten:**
- Haxe hat keinen separaten Character-Typ
- String mit einem Zeichen wird verwendet
- Unterstützung hängt vom Target ab

**Weiterführende Links:**
- [Haxe Documentation - Basic Types](https://haxe.org/manual/types-basic-types.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Character: Char
ch : Char
ch = 'A'

unicode : Char
unicode = '🎉'
```

**Besonderheiten:**
- Char ist ein primitiver Typ
- Unterstützt Unicode-Zeichen
- Alle Zeichen sind unveränderlich

**Weiterführende Links:**
- [Idris Documentation - Types](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html#types)

</TabItem>
<TabItem value="java" label="Java">

```java
// Character: char (16-bit Unicode)
char ch = 'A';
char unicode = '\u00E9';  // é
char digit = '7';
```

**Besonderheiten:**
- char ist 16-bit Unicode (UTF-16)
- Unterstützt Basic Multilingual Plane (BMP) Zeichen direkt
- Supplementary Characters (z.B. Emojis) benötigen Surrogate-Paare (`char[]` oder `String`)
- Autoboxing zu Wrapper-Klasse (Character)

**Weiterführende Links:**
- [Oracle Java Documentation - Character Type](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Character: String (kein separater Character-Typ)
let ch = 'A';
let unicode = '🎉';
```

**Besonderheiten:**
- JavaScript hat keinen separaten Character-Typ
- String mit einem Zeichen wird verwendet
- Unterstützt Unicode-Zeichen (UTF-16)

**Weiterführende Links:**
- [MDN Web Docs - String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Character: Char (32-bit Unicode codepoint)
ch::Char = 'A'
unicode::Char = '🎉'
```

**Besonderheiten:**
- Char ist 32-bit Unicode codepoint
- Unterstützt alle Unicode-Zeichen
- Alle Zeichen sind unveränderlich

**Weiterführende Links:**
- [Julia Documentation - Characters](https://docs.julialang.org/en/v1/manual/strings/#Characters)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Character: char (Unicode codepoint)
val ch: char = 'A'
val unicode: char = '🎉'
```

**Besonderheiten:**
- `char` repräsentiert einen Unicode-Codepoint
- Literale mit einfachen Anführungszeichen
- Unterstützt alle Unicode-Zeichen

**Weiterführende Links:**
- [Koka Standard Library - char](https://koka-lang.github.io/koka/doc/std_core_types.html#type-char)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Character: Char (16-bit Unicode)
val ch: Char = 'A'
val unicode: Char = '🎉'
```

**Besonderheiten:**
- Char ist 16-bit Unicode (UTF-16)
- Unterstützt alle Unicode-Zeichen
- Alle Typen haben nullable Varianten (Char?)

**Weiterführende Links:**
- [Kotlin Documentation - Characters](https://kotlinlang.org/docs/basic-types.html#characters)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Character: Char (Unicode Scalar Value)
def ch : Char := 'A'
def unicode : Char := '🎉'
def newline : Char := '\n'
```

**Besonderheiten:**
- `Char` repräsentiert einen Unicode Scalar Value
- Literale mit einfachen Anführungszeichen
- Unterstützt alle Unicode-Zeichen
- Escape-Sequenzen wie `\n`, `\t`, `\\` verfügbar

**Weiterführende Links:**
- [Lean 4 Documentation - Dependent Type Theory](https://lean-lang.org/theorem_proving_in_lean4/dependent_type_theory.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Character: string (kein separater Character-Typ)
local ch = "A"  -- string mit einem Zeichen
local unicode = "🎉"  -- string mit einem Zeichen
```

**Besonderheiten:**
- Lua hat keinen separaten Character-Typ
- string mit einem Zeichen wird verwendet
- Unterstützt Unicode-Zeichen (UTF-8)

**Weiterführende Links:**
- [Lua Documentation - Strings](https://www.lua.org/manual/5.4/manual.html#2.1)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% Character: char (kein separater Character-Typ)
ch = 'A';  % char array
unicode = '🎉';  % char array
```

**Besonderheiten:**
- MATLAB hat keinen separaten Character-Typ
- char array mit einem Zeichen wird verwendet
- Unterstützt Unicode-Zeichen

**Weiterführende Links:**
- [MATLAB Documentation - Characters](https://www.mathworks.com/help/matlab/characters-and-strings.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```mercury
% Character: char (Unicode-Zeichen)
:- pred main(io::di, io::uo) is det.
main(!IO) :-
    Ch = 'A',                   % char
    Digit = '9',                % char
    Code = char.to_int(Ch),     % Unicode-Codepoint
    io.write_char(Ch, !IO), io.nl(!IO),
    io.write_char(Digit, !IO), io.nl(!IO),
    io.write_int(Code, !IO), io.nl(!IO).
```

**Besonderheiten:**
- `char` repräsentiert ein einzelnes Unicode-Zeichen (Unicode-Codepoint)
- Zeichenliterale mit einfachen Anführungszeichen: `'A'`, `'ä'`
- Konvertierung zwischen `char` und `int` (Unicode-Codepoint) mit `char.to_int/1` und `char.from_int/1`
- Das `char`-Modul bietet Klassifikationsprädikate wie `is_alpha/1`, `is_digit/1`, etc.

**Weiterführende Links:**
- [The Mercury Standard Library - char](https://www.mercurylang.org/information/doc-release/mercury_library/char.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# Character: String (kein separater Character-Typ)
var ch: String = "A"
var unicode: String = "🎉"
```

**Besonderheiten:**
- Mojo hat keinen separaten Character-Typ
- String mit einem Zeichen wird verwendet
- Unterstützt Unicode-Zeichen

**Weiterführende Links:**
- [Mojo Documentation - Types](https://docs.modular.com/mojo/manual/basics/types.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Character: char (8-bit)
var ch: char = 'A'
```

**Besonderheiten:**
- char ist 8-bit
- Keine direkten Unicode-Typen
- Rune-Typ für Unicode-Zeichen ist verfügbar

**Weiterführende Links:**
- [Nim Documentation - Characters](https://nim-lang.org/docs/manual.html#types-characters)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Character: char (8-bit), unichar (16-bit Unicode)
char ch = 'A';
unichar unicode = L'🎉';
```

**Besonderheiten:**
- char ist 8-bit
- unichar ist 16-bit Unicode (UTF-16)
- Unterstützt Unicode-Zeichen

**Weiterführende Links:**
- [Objective-C Documentation - Characters](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Character: Char (8-bit)
var
  ch: Char = 'A';
```

**Besonderheiten:**
- Char ist 8-bit
- Keine direkten Unicode-Typen
- WideChar für breite Zeichen ist verfügbar (je nach Compiler)

**Weiterführende Links:**
- [Free Pascal Documentation - Character Type](https://www.freepascal.org/docs-html/ref/refse8.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Character: char (8-bit) *)
let ch = 'A'
```

**Besonderheiten:**
- char ist 8-bit
- Keine direkten Unicode-Typen
- String für Unicode-Zeichen wird verwendet

**Weiterführende Links:**
- [OCaml Documentation - Characters](https://ocaml.org/manual/coreexamples.html#s:types)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
% Character: char (kein separater Character-Typ)
ch = 'A';  % char array
unicode = '🎉';  % char array
```

**Besonderheiten:**
- Octave hat keinen separaten Character-Typ
- char array mit einem Zeichen wird verwendet
- Unterstützt Unicode-Zeichen

**Weiterführende Links:**
- [GNU Octave Documentation - Characters](https://octave.org/doc/v8.1.0/Characters.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Character: rune (32-bit Unicode codepoint)
ch: rune = 'A'
unicode: rune = '🎉'
```

**Besonderheiten:**
- rune ist 32-bit Unicode codepoint
- Unterstützt alle Unicode-Zeichen
- Alle Zeichen sind unveränderlich

**Weiterführende Links:**
- [Odin Documentation - Types](https://odin-lang.org/docs/overview/#types)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Character: string (kein separater Character-Typ)
my $ch = "A";  # string mit einem Zeichen
my $unicode = "🎉";  # string mit einem Zeichen
```

**Besonderheiten:**
- Perl hat keinen separaten Character-Typ
- string mit einem Zeichen wird verwendet
- Unterstützt Unicode-Zeichen (UTF-8)

**Weiterführende Links:**
- [Perl Documentation - Characters](https://perldoc.perl.org/perlunicode)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
// Character: string (kein separater Character-Typ)
$ch = "A";  // string mit einem Zeichen
$unicode = "🎉";  // string mit einem Zeichen
?>
```

**Besonderheiten:**
- PHP hat keinen separaten Character-Typ
- string mit einem Zeichen wird verwendet
- Unterstützt Unicode-Zeichen (UTF-8)

**Weiterführende Links:**
- [PHP Documentation - Strings](https://www.php.net/manual/en/language.types.string.php)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Character: Char
ch :: Char
ch = 'A'

unicode :: Char
unicode = '🎉'
```

**Besonderheiten:**
- Char ist ein primitiver Typ
- Unterstützt Unicode-Zeichen
- Alle Zeichen sind unveränderlich

**Weiterführende Links:**
- [PureScript Documentation](https://github.com/purescript/documentation/blob/master/language/Types.md)

</TabItem>
<TabItem value="python" label="Python">

```python
# Character: str (kein separater Character-Typ)
ch = 'A'  # str mit einem Zeichen
unicode = '🎉'  # str mit einem Zeichen
```

**Besonderheiten:**
- Python hat keinen separaten Character-Typ
- str mit einem Zeichen wird verwendet
- Unterstützt Unicode-Zeichen (UTF-8)

**Weiterführende Links:**
- [Python Documentation - Strings](https://docs.python.org/3/tutorial/introduction.html#strings)

</TabItem>
<TabItem value="r" label="R">

```r
# Character: character (kein separater Character-Typ)
ch <- "A"  # character mit einem Zeichen
unicode <- "🎉"  # character mit einem Zeichen
```

**Besonderheiten:**
- R hat keinen separaten Character-Typ
- character mit einem Zeichen wird verwendet
- Unterstützt Unicode-Zeichen

**Weiterführende Links:**
- [R Documentation - Character Vectors](https://cran.r-project.org/doc/manuals/r-release/R-intro.html#Character-vectors)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
; Character
(define ch #\A)       ; character
(define unicode #\λ)  ; character (Unicode)
```

**Besonderheiten:**
- character ist ein primitiver Typ
- Unterstützt Unicode-Zeichen
- Alle Zeichen sind unveränderlich

**Weiterführende Links:**
- [Racket Documentation - Characters](https://docs.racket-lang.org/reference/characters.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Character: Str (kein separater Character-Typ)
ch : Str
ch = "A"

unicode : Str
unicode = "🎉"
```

**Besonderheiten:**
- Roc hat keinen separaten Character-Typ
- Str mit einem Zeichen wird verwendet
- Unterstützt Unicode-Zeichen

**Weiterführende Links:**
- [Roc Documentation - Types](https://www.roc-lang.org/tutorial#types)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Character: String (kein separater Character-Typ)
ch = "A"  # String mit einem Zeichen
unicode = "🎉"  # String mit einem Zeichen
```

**Besonderheiten:**
- Ruby hat keinen separaten Character-Typ
- String mit einem Zeichen wird verwendet
- Unterstützt Unicode-Zeichen (UTF-8)

**Weiterführende Links:**
- [Ruby Documentation - Strings](https://ruby-doc.org/core-3.1.0/String.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Character: char (32-bit Unicode codepoint)
let ch: char = 'A';
let unicode: char = '🎉';
```

**Besonderheiten:**
- char ist 32-bit Unicode codepoint
- Unterstützt alle Unicode-Zeichen
- Alle Zeichen sind unveränderlich

**Weiterführende Links:**
- [The Rust Book - Character Type](https://doc.rust-lang.org/book/ch03-02-data-types.html#the-character-type)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Character: Char (16-bit Unicode)
val ch: Char = 'A'
val unicode: Char = '\u00E9' // é (BMP-Zeichen)
```

**Besonderheiten:**
- Char ist 16-bit Unicode (UTF-16 Code Unit)
- Unterstützt Unicode-Zeichen der Basic Multilingual Plane (U+0000 bis U+FFFF)
- Zeichen außerhalb der BMP (z.B. Emojis) erfordern Surrogate Pairs als String
- Autoboxing zu Wrapper-Klasse (`java.lang.Character`)

**Weiterführende Links:**
- [Scala Documentation - Unified Types](https://docs.scala-lang.org/tour/unified-types.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; Character: character
(define ch #\A)  ; character
(define unicode #\🎉)  ; character (Unicode)
```

**Besonderheiten:**
- character ist ein primitiver Typ
- Unterstützt Unicode-Zeichen
- Alle Zeichen sind unveränderlich

**Weiterführende Links:**
- [Scheme Documentation - Characters](https://www.scheme.com/tspl4/objects.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Character: Character (Unicode extended grapheme cluster)
let ch: Character = "A"
let unicode: Character = "🎉"
```

**Besonderheiten:**
- Character ist ein Unicode extended grapheme cluster
- Unterstützt alle Unicode-Zeichen
- Kann mehrere Unicode-Codepoints enthalten

**Weiterführende Links:**
- [Swift Documentation - Characters](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/stringsandcharacters/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Character: string (kein separater Character-Typ)
let ch: string = 'A';
let unicode: string = '🎉';
```

**Besonderheiten:**
- TypeScript hat keinen separaten Character-Typ
- string mit einem Zeichen wird verwendet
- Unterstützt Unicode-Zeichen (UTF-16, JavaScript-kompatibel)

**Weiterführende Links:**
- [TypeScript Handbook - Basic Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Character: Char (16-bit Unicode)
Dim ch As Char = "A"c
Dim unicode As Char = "🎉"c
```

**Besonderheiten:**
- Char ist 16-bit Unicode (UTF-16)
- Unterstützt alle Unicode-Zeichen
- System.Char ist der .NET-Typ

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Char Type](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/data-types/char-data-type)

</TabItem>
<TabItem value="v" label="V">

```v
// Character: string (kein separater Character-Typ)
mut ch := "A"  // string mit einem Zeichen
mut unicode := "🎉"  // string mit einem Zeichen
```

**Besonderheiten:**
- V hat keinen separaten Character-Typ
- string mit einem Zeichen wird verwendet
- Unterstützt Unicode-Zeichen

**Weiterführende Links:**
- [V Documentation - Types](https://github.com/vlang/v/blob/master/doc/docs.md#types)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Character: String (kein separater Character-Typ) *)
ch = "A"           (* String mit einem Zeichen *)
unicode = "\[Alpha]" (* Unicode-Zeichen *)
```

**Besonderheiten:**
- Wolfram Language hat keinen separaten Character-Typ
- String mit einem Zeichen wird verwendet
- Unterstützt Unicode-Zeichen via `\[Name]`-Syntax

**Weiterführende Links:**
- [Wolfram Language Documentation - Strings](https://reference.wolfram.com/language/guide/Strings.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Character: u8 (8-bit), comptime (compile-time character)
const ch: u8 = 'A';
const unicode = '🎉';  // comptime character
```

**Besonderheiten:**
- u8 für 8-bit Zeichen
- comptime für compile-time Zeichen (Unicode)
- Keine direkten Unicode-Typen zur Laufzeit

**Weiterführende Links:**
- [Zig Documentation - Characters](https://ziglang.org/documentation/0.11.0/#Characters)

</TabItem>
</Tabs>


## 3.2.7. Structured Types

Typen, die aus mehreren benannten oder unbenannten Komponenten bestehen, wie Structs, Records oder Tuples.

### Sprachen {#sprachen}

<Tabs availableTabs={['ada', 'c', 'carbon', 'csharp', 'cpp', 'clojure', 'common-lisp', 'crystal', 'd', 'dart', 'eiffel', 'elixir', 'elm', 'erlang', 'fsharp', 'fortran', 'gleam', 'go', 'groovy', 'haskell', 'haxe', 'idris', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'lua', 'matlab', 'mercury', 'mojo', 'nim', 'objective-c', 'object-pascal', 'ocaml', 'octave', 'odin', 'perl', 'php', 'prolog', 'purescript', 'python', 'r', 'racket', 'roc', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'vbnet', 'v', 'wolfram-language', 'zig']}>
<TabItem value="ada" label="Ada">

```ada
-- Structured Types: Record types
type Point is record
    X : Integer;
    Y : Integer;
end record;

P : Point := (X => 1, Y => 2);
```

**Besonderheiten:**
- Record types sind strukturierte Typen mit benannten Komponenten
- Alle Komponenten haben Namen
- Zugriff über Punkt-Notation

**Weiterführende Links:**
- [Ada Reference Manual - Record Types](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-3-8.html)

</TabItem>
<TabItem value="c" label="C">

```c
// Structured Types: struct
struct Point {
    int x;
    int y;
};

struct Point p = {1, 2};
```

**Besonderheiten:**
- struct ist ein strukturierter Typ mit benannten Komponenten
- Alle Komponenten haben Namen
- Zugriff über Punkt-Notation

**Weiterführende Links:**
- [C Standard - Structures](https://en.cppreference.com/w/c/language/struct)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Structured Types: struct
struct Point {
    var x: i32;
    var y: i32;
}

var p: Point = {.x = 1, .y = 2};
```

**Besonderheiten:**
- struct ist ein strukturierter Typ mit benannten Komponenten
- Experimentelle Sprache, Syntax kann sich noch ändern
- Zugriff über Punkt-Notation

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Structured Types: struct, class, record
struct Point {
    public int X;
    public int Y;
}

var p = new Point { X = 1, Y = 2 };
```

**Besonderheiten:**
- struct, class und record sind strukturierte Typen
- struct ist ein Value Type
- record ist ein strukturierter Typ mit automatischer Gleichheitsprüfung (seit C# 9.0)

**Weiterführende Links:**
- [Microsoft C# Documentation - Structs](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/struct)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Structured Types: struct, class
struct Point {
    int x;
    int y;
};

Point p = {1, 2};
```

**Besonderheiten:**
- struct und class sind strukturierte Typen
- struct ist standardmäßig public, class ist standardmäßig private
- Zugriff über Punkt-Notation

**Weiterführende Links:**
- [cppreference.com - Classes](https://en.cppreference.com/w/cpp/language/class)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Structured Types: maps, records
(defrecord Point [x y])
(def p (->Point 1 2))
```

**Besonderheiten:**
- Maps und Records sind strukturierte Typen
- Records sind spezielle Maps mit vordefinierten Feldern
- Zugriff über Keyword-Notation

**Weiterführende Links:**
- [Clojure Documentation - Records](https://clojure.org/reference/datastructures#Records)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Structured Types: structs, classes
(defstruct point
  x
  y)

(defvar p (make-point :x 1 :y 2))
```

**Besonderheiten:**
- structs und classes sind strukturierte Typen
- structs sind einfache strukturierte Typen
- Zugriff über Slot-Notation

**Weiterführende Links:**
- [Common Lisp HyperSpec - Structures](http://www.lispworks.com/documentation/HyperSpec/Body/m_defstr.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Structured Types: struct, class
struct Point
  property x : Int32
  property y : Int32
end

p = Point.new(x: 1, y: 2)
```

**Besonderheiten:**
- struct und class sind strukturierte Typen
- struct ist ein Value Type
- Zugriff über Punkt-Notation

**Weiterführende Links:**
- [Crystal Documentation - Structs](https://crystal-lang.org/reference/1.11/syntax_and_semantics/structs.html)

</TabItem>
<TabItem value="d" label="D">

```d
// Structured Types: struct, class
struct Point {
    int x;
    int y;
}

Point p = Point(1, 2);
```

**Besonderheiten:**
- struct und class sind strukturierte Typen
- struct ist ein Value Type
- Zugriff über Punkt-Notation

**Weiterführende Links:**
- [D Language Specification - Structs](https://dlang.org/spec/struct.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Structured Types: class, record (seit Dart 3.0)
class Point {
  int x;
  int y;
  Point(this.x, this.y);
}

var p = Point(1, 2);
```

**Besonderheiten:**
- class ist ein strukturierter Typ
- record ist ein strukturierter Typ mit benannten oder unbenannten Komponenten (seit Dart 3.0)
- Zugriff über Punkt-Notation

**Weiterführende Links:**
- [Dart Documentation - Classes](https://dart.dev/language/classes)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
-- Structured Types: classes
class POINT
feature
    x: INTEGER
    y: INTEGER
end
```

**Besonderheiten:**
- Klassen sind strukturierte Typen
- Alle Komponenten haben Namen
- Zugriff über Punkt-Notation

**Weiterführende Links:**
- [Eiffel Documentation - Classes](https://www.eiffel.org/doc/eiffel/Eiffel_Standard)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Structured Types: structs, maps
defmodule Point do
  defstruct [:x, :y]
end

p = %Point{x: 1, y: 2}
```

**Besonderheiten:**
- Structs und Maps sind strukturierte Typen
- Structs sind spezielle Maps mit vordefinierten Feldern
- Zugriff über Map-Notation

**Weiterführende Links:**
- [Elixir Documentation - Structs](https://elixir-lang.org/getting-started/structs.html)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Structured Types: records, custom types
type alias Point = { x : Int, y : Int }

p : Point
p = { x = 1, y = 2 }
```

**Besonderheiten:**
- Records sind strukturierte Typen mit benannten Komponenten
- Custom types können strukturierte Typen sein
- Zugriff über Punkt-Notation

**Weiterführende Links:**
- [Elm Documentation - Records](https://guide.elm-lang.org/types/records.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% Structured Types: records, maps
-record(point, {x, y}).

P = #point{x = 1, y = 2}.
```

**Besonderheiten:**
- Records und Maps sind strukturierte Typen
- Records sind compile-time Konstrukte
- Maps sind runtime-Datenstrukturen

**Weiterführende Links:**
- [Erlang Documentation - Records](https://www.erlang.org/doc/reference_manual/records.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Structured Types: records, structs, classes
type Point = { X: int; Y: int }

let p = { X = 1; Y = 2 }
```

**Besonderheiten:**
- Records, structs und classes sind strukturierte Typen
- Records sind strukturierte Typen mit benannten Komponenten
- Zugriff über Punkt-Notation

**Weiterführende Links:**
- [F# Documentation - Records](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/records)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Structured Types: derived types
type :: Point
    integer :: x
    integer :: y
end type Point

type(Point) :: p = Point(1, 2)
```

**Besonderheiten:**
- Derived types sind strukturierte Typen
- Alle Komponenten haben Namen
- Zugriff über Prozent-Notation

**Weiterführende Links:**
- [Fortran Standard - Derived Types](https://gcc.gnu.org/onlinedocs/gfortran/DERIVED-TYPES.html)

</TabItem>
<TabItem value="gleam" label="Gleam">

```erlang
// Structured Types: custom types, records
pub type Point {
  Point(x: Int, y: Int)
}

let p = Point(1, 2)
```

**Besonderheiten:**
- Custom types sind strukturierte Typen
- Records sind strukturierte Typen mit benannten Komponenten
- Zugriff über Punkt-Notation

**Weiterführende Links:**
- [Gleam Documentation - Types](https://gleam.run/documentation/tour/types/)

</TabItem>
<TabItem value="go" label="Go">

```go
// Structured Types: structs
type Point struct {
    X int
    Y int
}

p := Point{X: 1, Y: 2}
```

**Besonderheiten:**
- structs sind strukturierte Typen
- Alle Komponenten haben Namen
- Zugriff über Punkt-Notation

**Weiterführende Links:**
- [Go Language Specification - Struct Types](https://go.dev/ref/spec#Struct_types)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Structured Types: classes, @TupleConstructor
class Point {
    int x
    int y
}

def p = new Point(x: 1, y: 2)
```

**Besonderheiten:**
- Klassen sind strukturierte Typen
- @TupleConstructor erzeugt Tuple-ähnliche Konstruktoren
- Zugriff über Punkt-Notation

**Weiterführende Links:**
- [Groovy Documentation - Classes](https://groovy-lang.org/objectorientation.html)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Structured Types: data types, records
data Point = Point { x :: Int, y :: Int }

p :: Point
p = Point { x = 1, y = 2 }
```

**Besonderheiten:**
- Data types sind strukturierte Typen
- Records sind data types mit benannten Komponenten
- Zugriff über Punkt-Notation

**Weiterführende Links:**
- [Haskell Documentation - Data Types](https://www.haskell.org/tutorial/moretypes.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Structured Types: classes, typedefs
class Point {
    public var x:Int;
    public var y:Int;
    public function new(x:Int, y:Int) {
        this.x = x;
        this.y = y;
    }
}

var p = new Point(1, 2);
```

**Besonderheiten:**
- Klassen und Typedefs sind strukturierte Typen
- Typedefs können anonyme Strukturen definieren: `typedef Point = { x:Int, y:Int }`
- Zugriff über Punkt-Notation

**Weiterführende Links:**
- [Haxe Documentation - Classes](https://haxe.org/manual/types-class-instance.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Structured Types: data types, records
data Point : Type where
    MkPoint : Int -> Int -> Point

p : Point
p = MkPoint 1 2
```

**Besonderheiten:**
- Data types sind strukturierte Typen
- Records sind data types mit benannten Komponenten
- Zugriff über Pattern Matching

**Weiterführende Links:**
- [Idris Documentation - Data Types](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html#data-types)

</TabItem>
<TabItem value="java" label="Java">

```java
// Structured Types: classes, records (seit Java 14)
class Point {
    int x;
    int y;
}

Point p = new Point();
```

**Besonderheiten:**
- Klassen sind strukturierte Typen
- Records sind strukturierte Typen mit automatischer Gleichheitsprüfung (seit Java 14)
- Zugriff über Punkt-Notation

**Weiterführende Links:**
- [Oracle Java Documentation - Classes](https://docs.oracle.com/javase/tutorial/java/concepts/class.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Structured Types: objects, classes (seit ES6)
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

const p = new Point(1, 2);
```

**Besonderheiten:**
- Objekte und Klassen sind strukturierte Typen
- Objekte sind dynamische strukturierte Typen
- Zugriff über Punkt-Notation

**Weiterführende Links:**
- [MDN Web Docs - Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Structured Types: structs, mutable structs
struct Point
    x::Int
    y::Int
end

p = Point(1, 2)
```

**Besonderheiten:**
- structs und mutable structs sind strukturierte Typen
- structs sind unveränderlich
- Zugriff über Punkt-Notation

**Weiterführende Links:**
- [Julia Documentation - Composite Types](https://docs.julialang.org/en/v1/manual/types/#Composite-Types)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Structured Types: struct, type (ADTs), Tuples
struct point
  x: int
  y: int

type shape
  Circle(radius: float64)
  Rectangle(width: float64, height: float64)

// Tuples
val pair: (int, string) = (42, "Hallo")

val p = Point(1, 2)
val c = Circle(5.0)
```

**Besonderheiten:**
- `struct` definiert Record-Typen (Product Types) mit benannten Feldern
- `type` definiert Algebraic Data Types (Sum Types)
- Tuples als anonyme Product Types verfügbar
- Alle strukturierten Typen sind unveränderlich (immutable by default)

**Weiterführende Links:**
- [Koka Language Guide - Data Types](https://koka-lang.github.io/koka/doc/book.html#sec-structs)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Structured Types: classes, data classes
class Point(val x: Int, val y: Int)

val p = Point(1, 2)
```

**Besonderheiten:**
- Klassen und data classes sind strukturierte Typen
- data classes sind strukturierte Typen mit automatischer Gleichheitsprüfung
- Zugriff über Punkt-Notation

**Weiterführende Links:**
- [Kotlin Documentation - Classes](https://kotlinlang.org/docs/classes.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Structured Types: Structures, Tuples, Arrays
structure Point where
  x : Float
  y : Float
  deriving Repr

def p : Point := { x := 1.0, y := 2.0 }

-- Tuples (Product Types)
def pair : Int × String := (42, "Hallo")

-- Listen und Arrays
def items : List String := ["Apfel", "Banane", "Kirsche"]
def arr : Array Int := #[1, 2, 3]
```

**Besonderheiten:**
- `structure` für benannte Felder (Records)
- Tuples mit `×` Typ-Operator (Product Types)
- `List` (verkettet) und `Array` (zusammenhängend) für Sammlungen
- Alle strukturierten Typen sind standardmäßig unveränderlich (immutable)

**Weiterführende Links:**
- [Lean 4 Documentation - Structures and Records](https://lean-lang.org/theorem_proving_in_lean4/structures_and_records.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Structured Types: tables
local Point = {}
Point.x = 1
Point.y = 2
```

**Besonderheiten:**
- Tables sind strukturierte Typen
- Tables sind dynamische strukturierte Typen
- Zugriff über Punkt-Notation

**Weiterführende Links:**
- [Lua Documentation - Tables](https://www.lua.org/manual/5.4/manual.html#2.1)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% Structured Types: structures
p = struct('x', 1, 'y', 2);
```

**Besonderheiten:**
- Structures sind strukturierte Typen
- Structures sind dynamische strukturierte Typen
- Zugriff über Punkt-Notation

**Weiterführende Links:**
- [MATLAB Documentation - Structures](https://www.mathworks.com/help/matlab/structures.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```mercury
% Structured Types: Algebraische Datentypen mit benannten Feldern
:- type point
    --->    point(
                x :: int,
                y :: int
            ).

:- type person
    --->    person(
                name :: string,
                age  :: int
            ).

% Listen, Tupel und verschachtelte Typen
:- type pair(A, B)
    --->    pair(A, B).

:- pred main(io::di, io::uo) is det.
main(!IO) :-
    P = point(1, 2),
    Alice = person("Alice", 30),
    Items = [1, 2, 3] : list(int),
    io.write(P, !IO), io.nl(!IO),
    io.write(Alice, !IO), io.nl(!IO),
    io.write(Items, !IO), io.nl(!IO).
```

**Besonderheiten:**
- Strukturierte Typen werden als Algebraische Datentypen (ADTs) mit benannten Feldern definiert.
- Listen (`list(T)`), Tupel und benutzerdefinierte zusammengesetzte Typen sind verfügbar.
- Feldzugriff über `^`-Operator: `P ^ x`.
- Alle Typen sind unveränderlich (Value Types).

**Weiterführende Links:**
- [The Mercury Language Reference Manual - Data Types](https://www.mercurylang.org/documentation/reference.html#Data_types)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# Structured Types: structs
struct Point:
    var x: Int
    var y: Int

var p = Point(1, 2)
```

**Besonderheiten:**
- structs sind strukturierte Typen
- structs sind Value Types
- Zugriff über Punkt-Notation

**Weiterführende Links:**
- [Mojo Documentation - Structs](https://docs.modular.com/mojo/manual/structs-and-classes/structs.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Structured Types: objects, tuples
type Point = object
    x: int
    y: int

var p = Point(x: 1, y: 2)
```

**Besonderheiten:**
- Objects und Tuples sind strukturierte Typen
- Objects sind strukturierte Typen mit benannten Komponenten
- Zugriff über Punkt-Notation

**Weiterführende Links:**
- [Nim Documentation - Object Types](https://nim-lang.org/docs/manual.html#types-object-types)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Structured Types: classes, structs
@interface Point : NSObject
@property int x;
@property int y;
@end
```

**Besonderheiten:**
- Klassen und structs sind strukturierte Typen
- Klassen sind Reference Types
- Zugriff über Punkt-Notation

**Weiterführende Links:**
- [Objective-C Documentation - Classes](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/DefiningClasses/DefiningClasses.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Structured Types: records, classes
type
  Point = record
    x: Integer;
    y: Integer;
  end;
```

**Besonderheiten:**
- Records und Klassen sind strukturierte Typen
- Records sind Value Types
- Zugriff über Punkt-Notation

**Weiterführende Links:**
- [Free Pascal Documentation - Records](https://www.freepascal.org/docs-html/ref/refse19.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Structured Types: records, tuples *)
type point = { x : int; y : int }

let p = { x = 1; y = 2 }
```

**Besonderheiten:**
- Records und Tuples sind strukturierte Typen
- Records sind strukturierte Typen mit benannten Komponenten
- Zugriff über Punkt-Notation

**Weiterführende Links:**
- [OCaml Documentation - Records](https://ocaml.org/manual/records.html)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
% Structured Types: structures
p = struct('x', 1, 'y', 2);
```

**Besonderheiten:**
- Structures sind strukturierte Typen
- Structures sind dynamische strukturierte Typen
- Zugriff über Punkt-Notation

**Weiterführende Links:**
- [GNU Octave Documentation - Structures](https://octave.org/doc/v8.1.0/Structures.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Structured Types: structs
Point :: struct {
    x: i32,
    y: i32,
}

p := Point{x = 1, y = 2}
```

**Besonderheiten:**
- structs sind strukturierte Typen
- structs sind Value Types
- Zugriff über Punkt-Notation

**Weiterführende Links:**
- [Odin Documentation - Structs](https://odin-lang.org/docs/overview/#structs)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Structured Types: hashes, objects
my $p = { x => 1, y => 2 };
```

**Besonderheiten:**
- Hashes und Objekte sind strukturierte Typen
- Hashes sind dynamische strukturierte Typen
- Zugriff über Hash-Notation

**Weiterführende Links:**
- [Perl Documentation - Hashes](https://perldoc.perl.org/perldata#Hashes)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
// Structured Types: classes, arrays
class Point {
    public $x;
    public $y;
}

$p = new Point();
?>
```

**Besonderheiten:**
- Klassen und Arrays sind strukturierte Typen
- Klassen sind strukturierte Typen mit benannten Komponenten
- Zugriff über Pfeil-Notation

**Weiterführende Links:**
- [PHP Documentation - Classes](https://www.php.net/manual/en/language.oop5.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Structured Types: Compound Terms (Funktoren) und Listen
Point = point(1, 2),          % Compound Term mit Funktor point/2
Person = person(max, 30),     % Compound Term mit Funktor person/2

% Listen als rekursive Strukturen
List = [1, 2, 3],             % Liste
[Head | Tail] = [1, 2, 3],   % Head = 1, Tail = [2, 3]

% Verschachtelte Strukturen
Tree = node(node(leaf(1), leaf(2)), leaf(3)),

% Strukturelle Inspektion
functor(Point, F, A),         % F = point, A = 2
arg(1, Point, X),             % X = 1
Point =.. [point, 1, 2]      % Univ: Term ↔ Liste
```

**Besonderheiten:**
- Compound Terms (Funktoren) als universelle strukturierte Datentypen
- Listen als rekursive Strukturen mit `[Head | Tail]`-Notation
- Keine benannten Felder — Zugriff über Position mit `arg/3`
- `functor/3` und `=../2` (Univ) für strukturelle Inspektion und Konstruktion

**Weiterführende Links:**
- [SWI-Prolog Documentation - Compound Terms](https://www.swi-prolog.org/pldoc/man?section=compound)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Structured Types: records, data types
type Point = { x :: Int, y :: Int }

p :: Point
p = { x: 1, y: 2 }
```

**Besonderheiten:**
- Records und data types sind strukturierte Typen
- Records sind strukturierte Typen mit benannten Komponenten
- Zugriff über Punkt-Notation

**Weiterführende Links:**
- [PureScript Documentation - Records](https://github.com/purescript/documentation/blob/master/language/Types.md)

</TabItem>
<TabItem value="python" label="Python">

```python
# Structured Types: classes, dataclasses (seit Python 3.7), namedtuples
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

p = Point(1, 2)
```

**Besonderheiten:**
- Klassen, dataclasses und namedtuples sind strukturierte Typen
- dataclasses sind strukturierte Typen mit automatischer Gleichheitsprüfung (seit Python 3.7)
- Zugriff über Punkt-Notation

**Weiterführende Links:**
- [Python Documentation - Classes](https://docs.python.org/3/tutorial/classes.html)

</TabItem>
<TabItem value="r" label="R">

```r
# Structured Types: lists, S3/S4 classes
p <- list(x = 1, y = 2)
```

**Besonderheiten:**
- Lists und S3/S4 Klassen sind strukturierte Typen
- Lists sind dynamische strukturierte Typen
- Zugriff über Dollar-Notation

**Weiterführende Links:**
- [R Documentation - Lists](https://cran.r-project.org/doc/manuals/r-release/R-intro.html#Lists)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
; Structured Types: structs
(struct point (x y))

(define p (point 1 2))
(point-x p)  ; 1
(point-y p)  ; 2
```

**Besonderheiten:**
- Structs sind strukturierte Typen mit benannten Komponenten
- Zugriff über automatisch generierte Accessor-Funktionen
- Standardmäßig opak (nicht transparent)

**Weiterführende Links:**
- [Racket Documentation - Structures](https://docs.racket-lang.org/guide/define-struct.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Structured Types: records
Point : { x : I32, y : I32 }

p : Point
p = { x : 1, y : 2 }
```

**Besonderheiten:**
- Records sind strukturierte Typen
- Records sind strukturierte Typen mit benannten Komponenten
- Zugriff über Punkt-Notation

**Weiterführende Links:**
- [Roc Documentation - Records](https://www.roc-lang.org/tutorial#records)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Structured Types: classes, structs
Point = Struct.new(:x, :y)
p = Point.new(1, 2)
```

**Besonderheiten:**
- Klassen und Structs sind strukturierte Typen
- Structs sind strukturierte Typen mit benannten Komponenten
- Zugriff über Punkt-Notation

**Weiterführende Links:**
- [Ruby Documentation - Struct](https://ruby-doc.org/core-3.1.0/Struct.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Structured Types: structs, tuples
struct Point {
    x: i32,
    y: i32,
}

let p = Point { x: 1, y: 2 };
```

**Besonderheiten:**
- structs und tuples sind strukturierte Typen
- structs sind strukturierte Typen mit benannten Komponenten
- Zugriff über Punkt-Notation

**Weiterführende Links:**
- [The Rust Book - Structs](https://doc.rust-lang.org/book/ch05-01-defining-structs.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Structured Types: classes, case classes
class Point(val x: Int, val y: Int)

val p = new Point(1, 2)
```

**Besonderheiten:**
- Klassen und case classes sind strukturierte Typen
- case classes sind strukturierte Typen mit automatischer Gleichheitsprüfung
- Zugriff über Punkt-Notation

**Weiterführende Links:**
- [Scala Documentation - Classes](https://docs.scala-lang.org/tour/classes.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; Structured Types: records (SRFI-9)
(define-record-type point
  (make-point x y)
  point?
  (x point-x)
  (y point-y))

(define p (make-point 1 2))
```

**Besonderheiten:**
- Records sind strukturierte Typen (SRFI-9)
- Records sind strukturierte Typen mit benannten Komponenten
- Zugriff über Accessor-Funktionen

**Weiterführende Links:**
- [Scheme Documentation - Records](https://www.scheme.com/tspl4/objects.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Structured Types: structs, classes
struct Point {
    var x: Int
    var y: Int
}

let p = Point(x: 1, y: 2)
```

**Besonderheiten:**
- structs und classes sind strukturierte Typen
- structs sind Value Types
- Zugriff über Punkt-Notation

**Weiterführende Links:**
- [Swift Documentation - Structures](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/classesandstructures/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Structured Types: interfaces, classes, type aliases
interface Point {
    x: number;
    y: number;
}

const p: Point = { x: 1, y: 2 };
```

**Besonderheiten:**
- Interfaces, Klassen und type aliases sind strukturierte Typen
- Interfaces definieren strukturierte Typen
- Zugriff über Punkt-Notation

**Weiterführende Links:**
- [TypeScript Handbook - Interfaces](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Structured Types: classes, structures
Public Structure Point
    Public X As Integer
    Public Y As Integer
End Structure

Dim p As Point = New Point With {.X = 1, .Y = 2}
```

**Besonderheiten:**
- Klassen und Structures sind strukturierte Typen
- Structures sind Value Types
- Zugriff über Punkt-Notation

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Structures](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/data-types/structures)

</TabItem>
<TabItem value="v" label="V">

```v
// Structured Types: structs
struct Point {
    x int
    y int
}

mut p := Point{x: 1, y: 2}
```

**Besonderheiten:**
- structs sind strukturierte Typen
- structs sind Value Types
- Zugriff über Punkt-Notation

**Weiterführende Links:**
- [V Documentation - Structs](https://github.com/vlang/v/blob/master/doc/docs.md#structs)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Structured Types: Associations, Lists *)
p = <|"x" -> 1, "y" -> 2|>
```

**Besonderheiten:**
- Associations und Lists sind strukturierte Typen
- Associations sind strukturierte Typen mit benannten Komponenten
- Zugriff über Bracket-Notation

**Weiterführende Links:**
- [Wolfram Language Documentation - Associations](https://reference.wolfram.com/language/guide/Associations.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Structured Types: structs
const Point = struct {
    x: i32,
    y: i32,
};

const p = Point{ .x = 1, .y = 2 };
```

**Besonderheiten:**
- structs sind strukturierte Typen
- structs sind Value Types
- Zugriff über Punkt-Notation

**Weiterführende Links:**
- [Zig Documentation - Structs](https://ziglang.org/documentation/0.11.0/#structs)

</TabItem>
</Tabs>


## 3.2.8. Object-like Types

Typen, die Objekte repräsentieren, typischerweise mit Eigenschaften und Methoden, wie Klassen oder Interfaces.

### Sprachen {#sprachen}

<Tabs availableTabs={['ada', 'carbon', 'csharp', 'cpp', 'clojure', 'common-lisp', 'crystal', 'd', 'dart', 'eiffel', 'elixir', 'fsharp', 'fortran', 'groovy', 'haxe', 'java', 'javascript', 'julia', 'kotlin', 'lua', 'matlab', 'mojo', 'nim', 'objective-c', 'object-pascal', 'ocaml', 'octave', 'perl', 'php', 'python', 'r', 'racket', 'ruby', 'scala', 'swift', 'typescript', 'vbnet', 'wolfram-language']} orangeTabs={['c', 'elm', 'erlang', 'gleam', 'go', 'haskell', 'idris', 'koka', 'lean4', 'mercury', 'odin', 'purescript', 'roc', 'rust', 'scheme', 'v', 'zig']}>
<TabItem value="ada" label="Ada">

```ada
-- Object-like Types: Tagged types (OOP)
type Person is tagged record
    Name : String;
end record;

procedure Greet(Self : Person);
```

**Besonderheiten:**
- Tagged types sind object-like Types mit Vererbung
- Unterstützt OOP-Features wie Polymorphismus
- Zugriff über Punkt-Notation

**Weiterführende Links:**
- [Ada Reference Manual - Tagged Types](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-3-9.html)

</TabItem>
<TabItem value="c" label="C">

```c
// Object-like Types: structs mit Funktionen (OOP-Simulation)
struct Person {
    char* name;
    void (*greet)(struct Person*);
};

void person_greet(struct Person* self) {
    printf("Hallo, ich bin %s\n", self->name);
}
```

**Besonderheiten:**
- structs können mit Funktionszeigern object-like Types simulieren
- Keine direkten OOP-Features
- Manuelle OOP-Simulation erforderlich

**Weiterführende Links:**
- [C Standard - Structures](https://en.cppreference.com/w/c/language/struct)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Object-like Types: classes
class Person {
    var name: String;
    
    fn greet[self: Self]() {
        Print("Hallo, ich bin {0}", self.name);
    }
}
```

**Besonderheiten:**
- classes sind object-like Types
- Experimentelle Sprache, Syntax kann sich noch ändern
- Unterstützt OOP-Features

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Object-like Types: classes, interfaces
class Person {
    public string Name { get; set; }
    
    public void Greet() {
        Console.WriteLine($"Hallo, ich bin {Name}");
    }
}
```

**Besonderheiten:**
- Klassen und Interfaces sind object-like Types
- Klassen sind Reference Types
- Unterstützt OOP-Features wie Vererbung und Polymorphismus

**Weiterführende Links:**
- [Microsoft C# Documentation - Classes](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/types/classes)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Object-like Types: classes, structs
class Person {
private:
    std::string name;
    
public:
    void greet() {
        std::cout << "Hallo, ich bin " << name << std::endl;
    }
};
```

**Besonderheiten:**
- Klassen und structs sind object-like Types
- Unterstützt OOP-Features wie Vererbung und Polymorphismus
- struct ist standardmäßig public, class ist standardmäßig private

**Weiterführende Links:**
- [cppreference.com - Classes](https://en.cppreference.com/w/cpp/language/class)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Object-like Types: defprotocol, defrecord, deftype
(defprotocol Greetable
  (greet [this]))

(defrecord Person [name]
  Greetable
  (greet [this]
    (println (str "Hallo, ich bin " (:name this)))))
```

**Besonderheiten:**
- Protocols, Records und Types sind object-like Types
- Protocols definieren Interfaces
- Records sind unveränderliche object-like Types

**Weiterführende Links:**
- [Clojure Documentation - Protocols](https://clojure.org/reference/protocols)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Object-like Types: classes
(defclass person ()
  ((name :initarg :name :accessor person-name)))

(defmethod greet ((p person))
  (format t "Hallo, ich bin ~a~%" (person-name p)))
```

**Besonderheiten:**
- Klassen sind object-like Types
- Unterstützt CLOS (Common Lisp Object System)
- Zugriff über Slot-Notation

**Weiterführende Links:**
- [Common Lisp HyperSpec - Classes](http://www.lispworks.com/documentation/HyperSpec/Body/t_class.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Object-like Types: classes
class Person
  property name : String
  
  def initialize(@name)
  end
  
  def greet
    puts "Hallo, ich bin #{@name}"
  end
end
```

**Besonderheiten:**
- Klassen sind object-like Types
- Unterstützt OOP-Features wie Vererbung
- Zugriff über Punkt-Notation

**Weiterführende Links:**
- [Crystal Documentation - Classes](https://crystal-lang.org/reference/1.11/syntax_and_semantics/classes_and_methods.html)

</TabItem>
<TabItem value="d" label="D">

```d
// Object-like Types: classes, interfaces
class Person {
    string name;
    
    void greet() {
        writeln("Hallo, ich bin ", name);
    }
}
```

**Besonderheiten:**
- Klassen und Interfaces sind object-like Types
- Unterstützt OOP-Features wie Vererbung
- Zugriff über Punkt-Notation

**Weiterführende Links:**
- [D Language Specification - Classes](https://dlang.org/spec/class.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Object-like Types: classes, mixins
class Person {
  String name;
  
  Person(this.name);
  
  void greet() {
    print('Hallo, ich bin $name');
  }
}
```

**Besonderheiten:**
- Klassen und Mixins sind object-like Types
- Unterstützt OOP-Features wie Vererbung
- Zugriff über Punkt-Notation

**Weiterführende Links:**
- [Dart Documentation - Classes](https://dart.dev/language/classes)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
-- Object-like Types: classes
class PERSON
feature
    name: STRING
    
    make(a_name: STRING)
    do
        name := a_name
    end
    
    greet
    do
        io.put_string("Hallo, ich bin ")
        io.put_string(name)
        io.put_new_line
    end
end
```

**Besonderheiten:**
- Klassen sind object-like Types
- Unterstützt OOP-Features wie Vererbung
- Zugriff über Punkt-Notation

**Weiterführende Links:**
- [Eiffel Documentation - Classes](https://www.eiffel.org/doc/eiffel/Eiffel_Standard)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Object-like Types: modules, structs, protocols
defmodule Person do
  defstruct [:name]
  
  def greet(%Person{name: name}) do
    IO.puts("Hallo, ich bin #{name}")
  end
end
```

**Besonderheiten:**
- Module, Structs und Protocols sind object-like Types
- Structs sind unveränderliche object-like Types
- Protocols definieren Interfaces

**Weiterführende Links:**
- [Elixir Documentation - Structs](https://elixir-lang.org/getting-started/structs.html)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Object-like Types: custom types (keine direkten OOP-Features)
type alias Person = { name : String }

greet : Person -> String
greet person = "Hallo, ich bin " ++ person.name
```

**Besonderheiten:**
- Custom types und Records sind object-like Types
- Keine direkten OOP-Features wie Vererbung
- Funktionale Programmierung mit object-like Strukturen

**Weiterführende Links:**
- [Elm Documentation - Custom Types](https://guide.elm-lang.org/types/custom_types.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% Object-like Types: modules, records (keine direkten OOP-Features)
-module(person).
-export([greet/1]).

-record(person, {name}).

greet(#person{name = Name}) ->
    io:format("Hallo, ich bin ~s~n", [Name]).
```

**Besonderheiten:**
- Module und Records sind object-like Types
- Keine direkten OOP-Features
- Funktionale Programmierung mit object-like Strukturen

**Weiterführende Links:**
- [Erlang Documentation - Modules](https://www.erlang.org/doc/reference_manual/modules.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Object-like Types: classes, interfaces
type Person(name: string) =
    member this.Name = name
    
    member this.Greet() =
        printfn "Hallo, ich bin %s" this.Name
```

**Besonderheiten:**
- Klassen und Interfaces sind object-like Types
- Unterstützt OOP-Features wie Vererbung
- Zugriff über Punkt-Notation

**Weiterführende Links:**
- [F# Documentation - Classes](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/classes)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Object-like Types: derived types mit type-bound procedures
type :: Person
    character(len=20) :: name
contains
    procedure :: greet
end type Person

subroutine greet(self)
    class(Person), intent(in) :: self
    print *, "Hallo, ich bin ", self%name
end subroutine
```

**Besonderheiten:**
- Derived types mit type-bound procedures sind object-like Types
- Unterstützt OOP-Features (seit Fortran 2003)
- Zugriff über Prozent-Notation

**Weiterführende Links:**
- [Fortran Standard - Type-bound Procedures](https://gcc.gnu.org/onlinedocs/gfortran/Type-bound-procedures.html)

</TabItem>
<TabItem value="gleam" label="Gleam">

```erlang
// Object-like Types: custom types (keine direkten OOP-Features)
pub type Person {
  Person(name: String)
}

pub fn greet(person: Person) {
  case person {
    Person(name) -> io.println("Hallo, ich bin " <> name)
  }
}
```

**Besonderheiten:**
- Custom types sind object-like Types
- Keine direkten OOP-Features
- Funktionale Programmierung mit object-like Strukturen

**Weiterführende Links:**
- [Gleam Documentation - Types](https://gleam.run/documentation/tour/types/)

</TabItem>
<TabItem value="go" label="Go">

```go
// Object-like Types: structs mit methods
type Person struct {
    Name string
}

func (p Person) Greet() {
    fmt.Printf("Hallo, ich bin %s\n", p.Name)
}
```

**Besonderheiten:**
- Structs mit Methods sind object-like Types
- Keine direkten OOP-Features wie Vererbung
- Interfaces für Polymorphismus

**Weiterführende Links:**
- [Go Language Specification - Methods](https://go.dev/ref/spec#Method_declarations)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Object-like Types: classes, traits
class Person {
    String name
    
    void greet() {
        println "Hallo, ich bin ${name}"
    }
}
```

**Besonderheiten:**
- Klassen und Traits sind object-like Types
- Unterstützt OOP-Features wie Vererbung
- Zugriff über Punkt-Notation

**Weiterführende Links:**
- [Groovy Documentation - Classes](https://groovy-lang.org/objectorientation.html)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Object-like Types: data types (keine direkten OOP-Features)
data Person = Person { name :: String }

greet :: Person -> String
greet person = "Hallo, ich bin " ++ name person
```

**Besonderheiten:**
- Data types sind object-like Types
- Keine direkten OOP-Features
- Funktionale Programmierung mit object-like Strukturen

**Weiterführende Links:**
- [Haskell Documentation - Data Types](https://www.haskell.org/tutorial/moretypes.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Object-like Types: classes, interfaces
class Person {
    var name: String;
    
    public function new(name: String) {
        this.name = name;
    }
    
    public function greet(): Void {
        trace("Hallo, ich bin " + name);
    }
}
```

**Besonderheiten:**
- Klassen und Interfaces sind object-like Types
- Unterstützt OOP-Features wie Vererbung
- Zugriff über Punkt-Notation

**Weiterführende Links:**
- [Haxe Documentation - Classes](https://haxe.org/manual/types-class-instance.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Object-like Types: data types, interfaces (keine direkten OOP-Features)
data Person : Type where
    MkPerson : String -> Person

greet : Person -> String
greet (MkPerson name) = "Hallo, ich bin " ++ name
```

**Besonderheiten:**
- Data types und Interfaces sind object-like Types
- Keine direkten OOP-Features
- Funktionale Programmierung mit object-like Strukturen

**Weiterführende Links:**
- [Idris Documentation - Data Types](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html#data-types)

</TabItem>
<TabItem value="java" label="Java">

```java
// Object-like Types: classes, interfaces
class Person {
    private String name;
    
    public Person(String name) {
        this.name = name;
    }
    
    public void greet() {
        System.out.println("Hallo, ich bin " + name);
    }
}
```

**Besonderheiten:**
- Klassen und Interfaces sind object-like Types
- Unterstützt OOP-Features wie Vererbung
- Zugriff über Punkt-Notation

**Weiterführende Links:**
- [Oracle Java Documentation - Classes](https://docs.oracle.com/javase/tutorial/java/concepts/class.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Object-like Types: classes (seit ES6), objects, prototypes
class Person {
    constructor(name) {
        this.name = name;
    }
    
    greet() {
        console.log(`Hallo, ich bin ${this.name}`);
    }
}
```

**Besonderheiten:**
- Klassen, Objekte und Prototypes sind object-like Types
- Klassen sind seit ES6 verfügbar
- Unterstützt OOP-Features wie Vererbung

**Weiterführende Links:**
- [MDN Web Docs - Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Object-like Types: mutable structs, abstract types
mutable struct Person
    name::String
end

function greet(p::Person)
    println("Hallo, ich bin $(p.name)")
end
```

**Besonderheiten:**
- Mutable structs sind object-like Types
- Unterstützt OOP-Features wie Vererbung (über abstract types)
- Zugriff über Punkt-Notation

**Weiterführende Links:**
- [Julia Documentation - Composite Types](https://docs.julialang.org/en/v1/manual/types/#Composite-Types)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Object-like Types: struct + Funktionen (kein OOP)
struct person
  name: string

fun greet(p: person): console ()
  println("Hallo, ich bin " ++ p.name)
```

**Besonderheiten:**
- Koka hat keine Klassen oder OOP-Features
- `struct` und `type` (ADTs) dienen als Datencontainer
- Funktionen werden separat definiert und nehmen Daten als Parameter
- Dot-Notation (`p.name`) nutzt automatisch generierte Accessor-Funktionen

**Weiterführende Links:**
- [Koka Language Guide - Data Types](https://koka-lang.github.io/koka/doc/book.html#sec-structs)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Object-like Types: classes, interfaces, data classes
class Person(val name: String) {
    fun greet() {
        println("Hallo, ich bin $name")
    }
}
```

**Besonderheiten:**
- Klassen, Interfaces und data classes sind object-like Types
- Unterstützt OOP-Features wie Vererbung
- Zugriff über Punkt-Notation

**Weiterführende Links:**
- [Kotlin Documentation - Classes](https://kotlinlang.org/docs/classes.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Object-like Types: Structures + Type Classes (kein OOP)
structure Person where
  name : String
  age : Nat
  deriving Repr

-- "Methoden" als Namespace-Funktionen
def Person.greet (p : Person) : String :=
  s!"Hallo, ich bin {p.name}"

-- Type Classes für polymorphes Verhalten
class Greetable (α : Type) where
  greet : α → String

instance : Greetable Person where
  greet p := s!"Hallo, ich bin {p.name}"
```

**Besonderheiten:**
- Keine Klassen im OOP-Sinne, stattdessen Structures + Type Classes
- Structures können Funktionen im eigenen Namespace haben (Dot-Notation)
- Type Classes ermöglichen polymorphes Verhalten (ähnlich wie Interfaces)
- Kein Vererbungskonzept, stattdessen Composition und Type-Class-Hierarchien

**Weiterführende Links:**
- [Lean 4 Documentation - Type Classes](https://lean-lang.org/theorem_proving_in_lean4/type_classes.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Object-like Types: tables, metatables
Person = {}
Person.__index = Person

function Person:new(name)
    local obj = {name = name}
    setmetatable(obj, Person)
    return obj
end

function Person:greet()
    print("Hallo, ich bin " .. self.name)
end
```

**Besonderheiten:**
- Tables mit Metatables sind object-like Types
- Unterstützt OOP-Features durch Metatables
- Zugriff über Punkt-Notation

**Weiterführende Links:**
- [Lua Documentation - Metatables](https://www.lua.org/manual/5.4/manual.html#2.4)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% Object-like Types: classes
classdef Person
    properties
        name
    end
    
    methods
        function obj = Person(name)
            obj.name = name;
        end
        
        function greet(obj)
            fprintf('Hallo, ich bin %s\n', obj.name);
        end
    end
end
```

**Besonderheiten:**
- Klassen sind object-like Types
- Unterstützt OOP-Features wie Vererbung
- Zugriff über Punkt-Notation

**Weiterführende Links:**
- [MATLAB Documentation - Classes](https://www.mathworks.com/help/matlab/matlab_oop/classes-and-objects-in-matlab.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```mercury
% Object-like Types: Type Classes + Module-basierte Abstraktion
% Mercury hat keine Klassen, aber Type Classes bieten Polymorphismus.

:- typeclass greetable(T) where [
    pred greet(T::in, string::out) is det
].

:- type person
    --->    person(name :: string, age :: int).

:- instance greetable(person) where [
    greet(P, S) :-
        string.format("Hallo, ich bin %s", [s(P ^ name)], S)
].

% Verwendung
:- pred main(io::di, io::uo) is det.
main(!IO) :-
    Alice = person("Alice", 30),
    greet(Alice, Greeting),
    io.write_string(Greeting, !IO), io.nl(!IO).
```

**Besonderheiten:**
- Mercury hat keine Klassen oder Objekte im OOP-Sinne.
- Type Classes bieten Polymorphismus ähnlich zu Haskells Type Classes.
- Daten und Operationen sind getrennt (Typdefinitionen + Prädikate/Funktionen).
- Module dienen als Kapselungsmechanismus (ähnlich zu Packages).

**Weiterführende Links:**
- [The Mercury Language Reference Manual - Type Classes](https://www.mercurylang.org/documentation/reference.html#Type_classes)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# Object-like Types: classes
class Person:
    var name: String
    
    fn __init__(inout self, name: String):
        self.name = name
    
    fn greet(self):
        print("Hallo, ich bin", self.name)
```

**Besonderheiten:**
- Klassen sind object-like Types
- Unterstützt OOP-Features
- Zugriff über Punkt-Notation

**Weiterführende Links:**
- [Mojo Documentation - Classes](https://docs.modular.com/mojo/manual/structs-and-classes/classes.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Object-like Types: objects mit methods
type Person = object
    name: string

proc greet(self: Person) =
    echo "Hallo, ich bin ", self.name
```

**Besonderheiten:**
- Objects mit Methods sind object-like Types
- Unterstützt OOP-Features wie Vererbung
- Zugriff über Punkt-Notation

**Weiterführende Links:**
- [Nim Documentation - Object Types](https://nim-lang.org/docs/manual.html#types-object-types)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Object-like Types: classes, protocols
@interface Person : NSObject
@property NSString* name;
- (void)greet;
@end

@implementation Person
- (void)greet {
    NSLog(@"Hallo, ich bin %@", self.name);
}
@end
```

**Besonderheiten:**
- Klassen und Protocols sind object-like Types
- Unterstützt OOP-Features wie Vererbung
- Zugriff über Punkt-Notation

**Weiterführende Links:**
- [Objective-C Documentation - Classes](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/DefiningClasses/DefiningClasses.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Object-like Types: classes
type
  Person = class
  private
    name: string;
  public
    constructor Create(aName: string);
    procedure Greet;
  end;
```

**Besonderheiten:**
- Klassen sind object-like Types
- Unterstützt OOP-Features wie Vererbung
- Zugriff über Punkt-Notation

**Weiterführende Links:**
- [Free Pascal Documentation - Classes](https://www.freepascal.org/docs-html/ref/refse20.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Object-like Types: classes, objects *)
class person name =
object
    val name = name
    
    method greet =
        Printf.printf "Hallo, ich bin %s\n" name
end
```

**Besonderheiten:**
- Klassen und Objekte sind object-like Types
- Unterstützt OOP-Features wie Vererbung
- Zugriff über Punkt-Notation

**Weiterführende Links:**
- [OCaml Documentation - Classes](https://v2.ocaml.org/manual/objectexamples.html)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
% Object-like Types: classes
classdef Person
    properties
        name
    end
    
    methods
        function obj = Person(name)
            obj.name = name;
        end
        
        function greet(obj)
            printf('Hallo, ich bin %s\n', obj.name);
        end
    end
end
```

**Besonderheiten:**
- Klassen sind object-like Types
- Unterstützt OOP-Features wie Vererbung
- Zugriff über Punkt-Notation

**Weiterführende Links:**
- [GNU Octave Documentation - Classes](https://octave.org/doc/v8.1.0/Object-Oriented-Programming.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Object-like Types: structs mit procedures (keine direkten OOP-Features)
Person :: struct {
    name: string,
}

greet :: proc(p: Person) {
    fmt.printf("Hallo, ich bin %s\n", p.name)
}
```

**Besonderheiten:**
- Structs mit Procedures sind object-like Types
- Keine direkten OOP-Features
- Manuelle OOP-Simulation erforderlich

**Weiterführende Links:**
- [Odin Documentation - Structs](https://odin-lang.org/docs/overview/#structs)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Object-like Types: packages, classes (seit Perl 5)
package Person;

sub new {
    my ($class, $name) = @_;
    bless { name => $name }, $class;
}

sub greet {
    my ($self) = @_;
    print "Hallo, ich bin $self->{name}\n";
}
```

**Besonderheiten:**
- Packages und Klassen sind object-like Types
- Unterstützt OOP-Features wie Vererbung
- Zugriff über Pfeil-Notation

**Weiterführende Links:**
- [Perl Documentation - Objects](https://perldoc.perl.org/perlobj)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
// Object-like Types: classes, interfaces
class Person {
    public $name;
    
    public function __construct($name) {
        $this->name = $name;
    }
    
    public function greet() {
        echo "Hallo, ich bin " . $this->name . "\n";
    }
}
?>
```

**Besonderheiten:**
- Klassen und Interfaces sind object-like Types
- Unterstützt OOP-Features wie Vererbung
- Zugriff über Pfeil-Notation

**Weiterführende Links:**
- [PHP Documentation - Classes](https://www.php.net/manual/en/language.oop5.php)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Object-like Types: type classes, data types (keine direkten OOP-Features)
data Person = Person { name :: String }

greet :: Person -> String
greet (Person { name }) = "Hallo, ich bin " <> name
```

**Besonderheiten:**
- Type classes und data types sind object-like Types
- Keine direkten OOP-Features
- Funktionale Programmierung mit object-like Strukturen

**Weiterführende Links:**
- [PureScript Documentation - Types](https://github.com/purescript/documentation/blob/master/language/Types.md)

</TabItem>
<TabItem value="python" label="Python">

```python
# Object-like Types: classes
class Person:
    def __init__(self, name):
        self.name = name
    
    def greet(self):
        print(f"Hallo, ich bin {self.name}")
```

**Besonderheiten:**
- Klassen sind object-like Types
- Unterstützt OOP-Features wie Vererbung
- Zugriff über Punkt-Notation

**Weiterführende Links:**
- [Python Documentation - Classes](https://docs.python.org/3/tutorial/classes.html)

</TabItem>
<TabItem value="r" label="R">

```r
# Object-like Types: S3/S4 classes, R6 classes
Person <- setRefClass("Person",
  fields = list(name = "character"),
  methods = list(
    greet = function() {
      cat("Hallo, ich bin", name, "\n")
    }
  )
)
```

**Besonderheiten:**
- S3/S4/R6 Klassen sind object-like Types
- Unterstützt OOP-Features
- Zugriff über Dollar-Notation

**Weiterführende Links:**
- [R Documentation - Object-Oriented Programming](https://cran.r-project.org/doc/manuals/r-release/R-intro.html#Object_002doriented-programming)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
; Object-like Types: classes
(define person%
  (class object%
    (super-new)
    (init-field name)

    (define/public (greet)
      (printf "Hallo, ich bin ~a\n" name))))
```

**Besonderheiten:**
- Klassen sind object-like Types
- Unterstützt OOP-Features wie Vererbung
- `(super-new)` ist obligatorisch in jeder Klassen-Definition

**Weiterführende Links:**
- [Racket Documentation - Classes](https://docs.racket-lang.org/guide/classes.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Object-like Types: Records mit Funktionen (keine direkten OOP-Features)
greet : { name : Str } -> Str
greet = \person -> "Hallo, ich bin $(person.name)"
```

**Besonderheiten:**
- Records mit Funktionen sind object-like Types
- Keine direkten OOP-Features
- Funktionale Programmierung mit object-like Strukturen

**Weiterführende Links:**
- [Roc Documentation - Records](https://www.roc-lang.org/tutorial#records)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Object-like Types: classes, modules
class Person
  attr_accessor :name
  
  def initialize(name)
    @name = name
  end
  
  def greet
    puts "Hallo, ich bin #{@name}"
  end
end
```

**Besonderheiten:**
- Klassen und Module sind object-like Types
- Unterstützt OOP-Features wie Vererbung
- Zugriff über Punkt-Notation

**Weiterführende Links:**
- [Ruby Documentation - Classes](https://ruby-doc.org/core-3.1.0/Class.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Object-like Types: structs mit impl blocks, traits
struct Person {
    name: String,
}

impl Person {
    fn greet(&self) {
        println!("Hallo, ich bin {}", self.name);
    }
}
```

**Besonderheiten:**
- Structs mit impl blocks und Traits sind object-like Types
- Keine direkten OOP-Features wie Vererbung
- Traits für Polymorphismus

**Weiterführende Links:**
- [The Rust Book - Structs](https://doc.rust-lang.org/book/ch05-01-defining-structs.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Object-like Types: classes, traits, objects
class Person(val name: String) {
    def greet(): Unit = {
        println(s"Hallo, ich bin $name")
    }
}
```

**Besonderheiten:**
- Klassen, Traits und Objects sind object-like Types
- Unterstützt OOP-Features wie Vererbung
- Zugriff über Punkt-Notation

**Weiterführende Links:**
- [Scala Documentation - Classes](https://docs.scala-lang.org/tour/classes.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; Object-like Types: records, closures (keine direkten OOP-Features)
(define (make-person name)
  (lambda (message)
    (case message
      ((name) name)
      ((greet) (display (string-append "Hallo, ich bin " name "\n"))))))
```

**Besonderheiten:**
- Records und Closures sind object-like Types
- Keine direkten OOP-Features
- Manuelle OOP-Simulation mit Closures

**Weiterführende Links:**
- [Scheme Documentation - Records](https://www.scheme.com/tspl4/objects.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Object-like Types: classes, structs, protocols
class Person {
    var name: String
    
    init(name: String) {
        self.name = name
    }
    
    func greet() {
        print("Hallo, ich bin \(name)")
    }
}
```

**Besonderheiten:**
- Klassen, Structs und Protocols sind object-like Types
- Unterstützt OOP-Features wie Vererbung
- Zugriff über Punkt-Notation

**Weiterführende Links:**
- [Swift Documentation - Classes](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/classesandstructures/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Object-like Types: classes, interfaces
class Person {
    name: string;
    
    constructor(name: string) {
        this.name = name;
    }
    
    greet(): void {
        console.log(`Hallo, ich bin ${this.name}`);
    }
}
```

**Besonderheiten:**
- Klassen und Interfaces sind object-like Types
- Unterstützt OOP-Features wie Vererbung
- Zugriff über Punkt-Notation

**Weiterführende Links:**
- [TypeScript Handbook - Classes](https://www.typescriptlang.org/docs/handbook/2/classes.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Object-like Types: classes, interfaces
Public Class Person
    Private name As String
    
    Public Sub New(name As String)
        Me.name = name
    End Sub
    
    Public Sub Greet()
        Console.WriteLine($"Hallo, ich bin {name}")
    End Sub
End Class
```

**Besonderheiten:**
- Klassen und Interfaces sind object-like Types
- Unterstützt OOP-Features wie Vererbung
- Zugriff über Punkt-Notation

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Classes](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/objects-and-classes/)

</TabItem>
<TabItem value="v" label="V">

```v
// Object-like Types: structs mit methods
struct Person {
    name string
}

fn (p Person) greet() {
    println("Hallo, ich bin ${p.name}")
}
```

**Besonderheiten:**
- Structs mit Methods sind object-like Types
- Keine direkten OOP-Features wie Vererbung
- Zugriff über Punkt-Notation

**Weiterführende Links:**
- [V Documentation - Structs](https://github.com/vlang/v/blob/master/doc/docs.md#structs)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Object-like Types: Symbols und Associations *)
Person[name_] := <|"name" -> name, "greet" -> Function[Print["Hallo, ich bin ", name]]|>
```

**Besonderheiten:**
- Symbols und Associations werden für objekt-ähnliche Strukturen verwendet
- Methoden werden als Funktionen in der Association gespeichert
- Zugriff über Bracket-Notation

**Weiterführende Links:**
- [Wolfram Language Documentation - Associations](https://reference.wolfram.com/language/guide/Associations.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Object-like Types: structs mit functions (keine direkten OOP-Features)
const Person = struct {
    name: []const u8,
    
    pub fn greet(self: Person) void {
        std.debug.print("Hallo, ich bin {s}\n", .{self.name});
    }
};
```

**Besonderheiten:**
- Structs mit Functions sind object-like Types
- Keine direkten OOP-Features
- Manuelle OOP-Simulation erforderlich

**Weiterführende Links:**
- [Zig Documentation - Structs](https://ziglang.org/documentation/0.11.0/#structs)

</TabItem>
</Tabs>



## 3.2.9. Abstract Types

Typen, die nicht direkt instanziiert werden können, sondern als Basis für andere Typen dienen, wie abstrakte Klassen, Interfaces oder Traits.

### Sprachen {#sprachen}

<Tabs availableTabs={['ada', 'carbon', 'clojure', 'common-lisp', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'eiffel', 'elixir', 'fortran', 'fsharp', 'go', 'groovy', 'haskell', 'haxe', 'idris', 'java', 'julia', 'koka', 'kotlin', 'lean4', 'matlab', 'mercury', 'mojo', 'nim', 'object-pascal', 'ocaml', 'octave', 'php', 'purescript', 'python', 'r', 'racket', 'rust', 'scala', 'typescript', 'v', 'vbnet']} yellowTabs={['objective-c', 'swift']} orangeTabs={['c', 'gleam', 'lua', 'odin', 'perl', 'roc', 'ruby', 'scheme', 'wolfram-language', 'zig']}>
<TabItem value="ada" label="Ada">

```ada
-- Abstract Types: abstract tagged types
type Shape is abstract tagged null record;

procedure Draw(Self : Shape) is abstract;

type Circle is new Shape with record
    Radius : Float;
end record;
```

**Besonderheiten:**
- Abstract tagged types sind abstrakte Typen
- Abstract procedures müssen in abgeleiteten Typen implementiert werden
- Kann nicht direkt instanziiert werden

**Weiterführende Links:**
- [Ada Reference Manual - Abstract Types](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-3-9-3.html)

</TabItem>
<TabItem value="c" label="C">

```c
// Abstract Types: nicht direkt unterstützt (OOP-Simulation)
// Workaround: struct mit Funktionszeigern, NULL für nicht implementiert
struct Shape {
    void (*draw)(struct Shape*);
};

// Kann nicht verhindern, dass Shape direkt instanziiert wird
```

**Besonderheiten:**
- C hat keine direkten abstrakten Typen
- Manuelle OOP-Simulation erforderlich
- Keine Compiler-Unterstützung für abstrakte Typen

**Weiterführende Links:**
- [C Standard - Structures](https://en.cppreference.com/w/c/language/struct)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Abstract Types: abstract classes, interfaces
abstract class Shape {
    abstract fn draw[self: Self]();
}

class Circle extends Shape {
    var radius: f64;
    
    impl fn draw[self: Self]() {
        // Implementation
    }
}
```

**Besonderheiten:**
- Abstract classes und Interfaces sind abstrakte Typen
- Experimentelle Sprache, Syntax kann sich noch ändern
- Kann nicht direkt instanziiert werden

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Abstract Types: abstract classes, interfaces
abstract class Shape {
    public abstract void Draw();
}

class Circle : Shape {
    public override void Draw() {
        // Implementation
    }
}
```

**Besonderheiten:**
- Abstract classes und Interfaces sind abstrakte Typen
- Abstract methods müssen in abgeleiteten Klassen implementiert werden
- Kann nicht direkt instanziiert werden

**Weiterführende Links:**
- [Microsoft C# Documentation - Abstract Classes](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/abstract)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Abstract Types: abstract classes (mit pure virtual functions)
class Shape {
public:
    virtual void draw() = 0;  // pure virtual
};

class Circle : public Shape {
public:
    void draw() override {
        // Implementation
    }
};
```

**Besonderheiten:**
- Abstract classes mit pure virtual functions sind abstrakte Typen
- Pure virtual functions müssen in abgeleiteten Klassen implementiert werden
- Kann nicht direkt instanziiert werden

**Weiterführende Links:**
- [cppreference.com - Abstract Classes](https://en.cppreference.com/w/cpp/language/abstract_class)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Abstract Types: protocols, defprotocol
(defprotocol Drawable
  (draw [this]))

(defrecord Circle [radius]
  Drawable
  (draw [this]
    ;; Implementation
    ))
```

**Besonderheiten:**
- Protocols sind abstrakte Typen
- Protocols definieren abstrakte Methoden
- Kann nicht direkt instanziiert werden

**Weiterführende Links:**
- [Clojure Documentation - Protocols](https://clojure.org/reference/protocols)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Abstract Types: abstract classes
(defclass shape ()
  ())

(defgeneric draw (shape))

(defclass circle (shape)
  ((radius :initarg :radius :accessor radius)))

(defmethod draw ((c circle))
  ;; Implementation
  )
```

**Besonderheiten:**
- Abstract classes sind abstrakte Typen
- Generic functions definieren abstrakte Methoden
- Kann nicht direkt instanziiert werden (wenn abstract)

**Weiterführende Links:**
- [Common Lisp HyperSpec - Classes](http://www.lispworks.com/documentation/HyperSpec/Body/t_class.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Abstract Types: abstract classes
abstract class Shape
  abstract def draw
end

class Circle < Shape
  def draw
    # Implementation
  end
end
```

**Besonderheiten:**
- Abstract classes sind abstrakte Typen
- Abstract methods müssen in abgeleiteten Klassen implementiert werden
- Kann nicht direkt instanziiert werden

**Weiterführende Links:**
- [Crystal Documentation - Abstract Classes](https://crystal-lang.org/reference/1.11/syntax_and_semantics/virtual_and_abstract_types.html)

</TabItem>
<TabItem value="d" label="D">

```d
// Abstract Types: abstract classes, interfaces
abstract class Shape {
    abstract void draw();
}

class Circle : Shape {
    override void draw() {
        // Implementation
    }
}
```

**Besonderheiten:**
- Abstract classes und Interfaces sind abstrakte Typen
- Abstract methods müssen in abgeleiteten Klassen implementiert werden
- Kann nicht direkt instanziiert werden

**Weiterführende Links:**
- [D Language Specification - Abstract Classes](https://dlang.org/spec/class.html#abstract-class)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Abstract Types: abstract classes, interfaces
abstract class Shape {
    void draw();
}

class Circle implements Shape {
    @override
    void draw() {
        // Implementation
    }
}
```

**Besonderheiten:**
- Abstract classes und Interfaces sind abstrakte Typen
- Abstract methods müssen in implementierenden Klassen implementiert werden
- Kann nicht direkt instanziiert werden

**Weiterführende Links:**
- [Dart Documentation - Abstract Classes](https://dart.dev/language/classes#abstract-classes)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
-- Abstract Types: deferred classes
deferred class SHAPE
feature
    draw
        deferred
    end
end

class CIRCLE
inherit
    SHAPE
feature
    draw
    do
        -- Implementation
    end
end
```

**Besonderheiten:**
- Deferred classes sind abstrakte Typen
- Deferred features müssen in erbenden Klassen implementiert werden
- Kann nicht direkt instanziiert werden

**Weiterführende Links:**
- [Eiffel Documentation - Deferred Classes](https://www.eiffel.org/doc/eiffel/Eiffel_Standard)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Abstract Types: protocols
defprotocol Drawable do
  def draw(shape)
end

defimpl Drawable, for: Circle do
  def draw(_circle) do
    # Implementation
  end
end
```

**Besonderheiten:**
- Protocols sind abstrakte Typen
- Protocols definieren abstrakte Funktionen
- Kann nicht direkt instanziiert werden

**Weiterführende Links:**
- [Elixir Documentation - Protocols](https://elixir-lang.org/getting-started/protocols.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Abstract Types: abstract classes, interfaces
[<AbstractClass>]
type Shape() =
    abstract member Draw: unit -> unit

type Circle() =
    inherit Shape()
    override this.Draw() =
        // Implementation
```

**Besonderheiten:**
- Abstract classes und Interfaces sind abstrakte Typen
- Abstract members müssen in abgeleiteten Klassen implementiert werden
- Kann nicht direkt instanziiert werden

**Weiterführende Links:**
- [F# Documentation - Abstract Classes](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/classes#abstract-classes)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Abstract Types: abstract derived types (seit Fortran 2003)
type, abstract :: Shape
contains
    procedure(draw_interface), deferred :: draw
end type Shape

abstract interface
    subroutine draw_interface(self)
        import Shape
        class(Shape), intent(in) :: self
    end subroutine
end interface
```

**Besonderheiten:**
- Abstract derived types sind abstrakte Typen (seit Fortran 2003)
- Deferred procedures müssen in erweiterten Typen implementiert werden
- Kann nicht direkt instanziiert werden

**Weiterführende Links:**
- [Fortran Standard - Abstract Types](https://gcc.gnu.org/onlinedocs/gfortran/Abstract-types.html)

</TabItem>
<TabItem value="gleam" label="Gleam">

```erlang
// Abstract Types: nicht direkt unterstützt (funktionale Programmierung)
// Workaround: Custom types mit Pattern Matching
pub type Shape {
  Circle(Int)
  Rectangle(Int, Int)
}

pub fn draw(shape: Shape) {
  case shape {
    Circle(_) -> // Implementation
    Rectangle(_, _) -> // Implementation
  }
}
```

**Besonderheiten:**
- Gleam hat keine direkten abstrakten Typen
- Custom types mit Pattern Matching als Workaround
- Funktionale Programmierung ohne OOP-Features

**Weiterführende Links:**
- [Gleam Documentation - Types](https://gleam.run/documentation/tour/types/)

</TabItem>
<TabItem value="go" label="Go">

```go
// Abstract Types: interfaces
type Drawable interface {
    Draw()
}

type Circle struct {
    Radius float64
}

func (c Circle) Draw() {
    // Implementation
}
```

**Besonderheiten:**
- Interfaces sind abstrakte Typen
- Interfaces definieren abstrakte Methoden
- Kann nicht direkt instanziiert werden

**Weiterführende Links:**
- [Go Language Specification - Interface Types](https://go.dev/ref/spec#Interface_types)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Abstract Types: abstract classes, interfaces, traits
abstract class Shape {
    abstract void draw()
}

class Circle extends Shape {
    void draw() {
        // Implementation
    }
}
```

**Besonderheiten:**
- Abstract classes, Interfaces und Traits sind abstrakte Typen
- Abstract methods müssen in abgeleiteten Klassen implementiert werden
- Kann nicht direkt instanziiert werden

**Weiterführende Links:**
- [Groovy Documentation - Abstract Classes](https://groovy-lang.org/objectorientation.html)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Abstract Types: type classes
class Drawable a where
    draw :: a -> IO ()

data Circle = Circle { radius :: Double }

instance Drawable Circle where
    draw _ = putStrLn "Drawing circle"
```

**Besonderheiten:**
- Type classes sind abstrakte Typen
- Type classes definieren abstrakte Funktionen
- Kann nicht direkt instanziiert werden

**Weiterführende Links:**
- [Haskell Documentation - Type Classes](https://www.haskell.org/tutorial/classes.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Abstract Types: Compile-Zeit-Wrapper über Basistypen
abstract Percentage(Int) {
    inline public function new(i:Int) {
        this = i;
    }

    @:from static public function fromFloat(f:Float):Percentage {
        return new Percentage(Std.int(f * 100));
    }

    @:to public function toFloat():Float {
        return this / 100.0;
    }
}

var p:Percentage = new Percentage(75);
var f:Float = p; // Implizite Konvertierung zu Float: 0.75
```

**Besonderheiten:**
- Haxe `abstract` Types sind Compile-Zeit-Typen, die einen Basistyp umhüllen
- Unterstützen implizite Konvertierungen (`@:from`, `@:to`)
- Unterstützen Operator-Überladung (`@:op`)
- Existieren nur zur Compile-Zeit, zur Laufzeit wird der Basistyp verwendet

**Weiterführende Links:**
- [Haxe Documentation - Abstract Types](https://haxe.org/manual/types-abstract.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Abstract Types: interfaces
interface Drawable a where
    draw : a -> IO ()

data Circle = MkCircle Double

Drawable Circle where
    draw _ = putStrLn "Drawing circle"
```

**Besonderheiten:**
- Interfaces sind abstrakte Typen
- Interfaces definieren abstrakte Funktionen
- Kann nicht direkt instanziiert werden

**Weiterführende Links:**
- [Idris Documentation - Interfaces](https://idris2.readthedocs.io/en/latest/tutorial/interfaces.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Abstract Types: abstract classes, interfaces
abstract class Shape {
    abstract void draw();
}

class Circle extends Shape {
    @Override
    void draw() {
        // Implementation
    }
}
```

**Besonderheiten:**
- Abstract classes und Interfaces sind abstrakte Typen
- Abstract methods müssen in abgeleiteten Klassen implementiert werden
- Kann nicht direkt instanziiert werden

**Weiterführende Links:**
- [Oracle Java Documentation - Abstract Classes](https://docs.oracle.com/javase/tutorial/java/IandI/abstract.html)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Abstract Types: abstract types
abstract type Shape end

function draw(shape::Shape)
    error("draw not implemented for $(typeof(shape))")
end

struct Circle <: Shape
    radius::Float64
end

function draw(circle::Circle)
    println("Drawing circle")
end
```

**Besonderheiten:**
- Abstract types sind abstrakte Typen
- Abstract types können nicht direkt instanziiert werden
- Funktionen können für abstract types definiert werden

**Weiterführende Links:**
- [Julia Documentation - Abstract Types](https://docs.julialang.org/en/v1/manual/types/#Abstract-Types)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Abstract Types: Opaque Types über Module
// Typ ist sichtbar, Konstruktor ist privat
abstract type user-id
  UserId(value: int)

// Nur über Funktionen zugänglich
fun create-user-id(value: int): user-id
  UserId(value)

fun get-value(id: user-id): int
  match id
    UserId(v) -> v

// Alternativ: ADTs als abstrakte Schnittstelle
type shape
  Circle(radius: float64)
  Rectangle(width: float64, height: float64)

fun draw(s: shape): console ()
  match s
    Circle(r)      -> println("Zeichne Kreis mit Radius " ++ r.show)
    Rectangle(w,h) -> println("Zeichne Rechteck " ++ w.show ++ "x" ++ h.show)
```

**Besonderheiten:**
- Abstrakte Typen durch selektive Modul-Exporte (Typ öffentlich, Konstruktor privat)
- `abstract type` für Typen, deren Implementierung verborgen bleiben soll
- ADTs dienen als algebraische Schnittstellen mit erschöpfendem Pattern Matching
- Keine abstrakten Klassen oder Interfaces im OOP-Sinne

**Weiterführende Links:**
- [Koka Language Guide - Modules](https://koka-lang.github.io/koka/doc/book.html#sec-modules)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Abstract Types: abstract classes, interfaces
abstract class Shape {
    abstract fun draw()
}

class Circle : Shape() {
    override fun draw() {
        // Implementation
    }
}
```

**Besonderheiten:**
- Abstract classes und Interfaces sind abstrakte Typen
- Abstract methods müssen in abgeleiteten Klassen implementiert werden
- Kann nicht direkt instanziiert werden

**Weiterführende Links:**
- [Kotlin Documentation - Abstract Classes](https://kotlinlang.org/docs/classes.html#abstract-classes)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Abstract Types: Type Classes als abstrakte Schnittstellen
class Shape (α : Type) where
  area : α → Float
  perimeter : α → Float

structure Circle where
  radius : Float

instance : Shape Circle where
  area c := Float.pi * c.radius * c.radius
  perimeter c := 2.0 * Float.pi * c.radius

-- Verwendung mit Polymorphismus
def printArea [Shape α] (s : α) : String :=
  s!"Fläche: {Shape.area s}"
```

**Besonderheiten:**
- Keine abstrakten Klassen, stattdessen Type Classes als abstrakte Schnittstellen
- Type Classes definieren Methoden-Signaturen, Instanzen implementieren sie
- `opaque` Definitionen für Implementation-Hiding
- Ähnliches Konzept wie Haskell Type Classes

**Weiterführende Links:**
- [Lean 4 Documentation - Type Classes](https://lean-lang.org/theorem_proving_in_lean4/type_classes.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Abstract Types: nicht direkt unterstützt
-- Workaround: Metatables mit Fehler bei direkter Instanziierung
local Shape = {}
Shape.__index = Shape

function Shape:new()
    error("Cannot instantiate abstract class")
end
```

**Besonderheiten:**
- Lua hat keine direkten abstrakten Typen
- Manuelle OOP-Simulation erforderlich
- Runtime-Fehler bei direkter Instanziierung

**Weiterführende Links:**
- [Lua Documentation - Metatables](https://www.lua.org/manual/5.4/manual.html#2.4)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% Abstract Types: abstract classes
classdef (Abstract) Shape
    methods (Abstract)
        draw(obj)
    end
end

classdef Circle < Shape
    methods
        function draw(obj)
            % Implementation
        end
    end
end
```

**Besonderheiten:**
- Abstract classes sind abstrakte Typen
- Abstract methods müssen in abgeleiteten Klassen implementiert werden
- Kann nicht direkt instanziiert werden

**Weiterführende Links:**
- [MATLAB Documentation - Abstract Classes](https://www.mathworks.com/help/matlab/matlab_oop/abstract-classes-and-interfaces.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```mercury
% Abstract Types: Abstract Data Types via Module-System
% Die interne Repräsentation wird im interface-Teil nicht offengelegt.

% shape.m
:- module shape.
:- interface.

:- type shape.     % Opaker/abstrakter Typ
:- func circle(float) = shape.
:- func rectangle(float, float) = shape.
:- func area(shape) = float.

:- implementation.

:- type shape
    --->    circle(float)
    ;       rectangle(float, float).

area(circle(R)) = math.pi * R * R.
area(rectangle(W, H)) = W * H.
```

**Besonderheiten:**
- Abstrakte Typen werden durch das Modulsystem realisiert (opake Typen).
- Im `interface`-Abschnitt wird nur der Typname deklariert, nicht die interne Struktur.
- Externe Module können den Typ nur über die exportierten Funktionen/Prädikate verwenden.
- Type Classes bieten eine weitere Form der Abstraktion (ähnlich zu Interfaces).

**Weiterführende Links:**
- [The Mercury Language Reference Manual - Modules](https://www.mercurylang.org/documentation/reference.html#Modules)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# Abstract Types: abstract classes, traits
@abstract
class Shape:
    @abstractmethod
    fn draw(self):
        pass

class Circle(Shape):
    fn draw(self):
        # Implementation
        pass
```

**Besonderheiten:**
- Abstract classes und Traits sind abstrakte Typen
- Abstract methods müssen in abgeleiteten Klassen implementiert werden
- Kann nicht direkt instanziiert werden

**Weiterführende Links:**
- [Mojo Documentation - Classes](https://docs.modular.com/mojo/manual/structs-and-classes/classes.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Abstract Types: abstract methods
type Shape = object of RootObj
method draw(self: Shape) {.base.} =
    raise newException(ValueError, "draw not implemented")

type Circle = object of Shape
    radius: float

method draw(self: Circle) =
    echo "Drawing circle"
```

**Besonderheiten:**
- Abstract methods sind abstrakte Typen
- Abstract methods müssen in abgeleiteten Typen implementiert werden
- Kann nicht direkt instanziiert werden (wenn abstract)

**Weiterführende Links:**
- [Nim Documentation - Methods](https://nim-lang.org/docs/manual.html#methods)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Abstract Types: abstract classes (Konvention), protocols
@protocol Drawable
- (void)draw;
@end

@interface Shape : NSObject <Drawable>
@end

@implementation Shape
- (void)draw {
    [NSException raise:@"AbstractMethod" format:@"draw must be implemented"];
}
@end
```

**Besonderheiten:**
- Protocols sind abstrakte Typen
- Abstract classes sind Konvention (keine Compiler-Unterstützung)
- Runtime-Fehler bei nicht implementierten Methoden

**Weiterführende Links:**
- [Objective-C Documentation - Protocols](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/WorkingwithProtocols/WorkingwithProtocols.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Abstract Types: abstract classes, interfaces
type
  Shape = class abstract
  public
    procedure Draw; virtual; abstract;
  end;
  
  Circle = class(Shape)
  public
    procedure Draw; override;
  end;
```

**Besonderheiten:**
- Abstract classes und Interfaces sind abstrakte Typen
- Abstract methods müssen in abgeleiteten Klassen implementiert werden
- Kann nicht direkt instanziiert werden

**Weiterführende Links:**
- [Free Pascal Documentation - Abstract Classes](https://www.freepascal.org/docs-html/ref/refse20.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Abstract Types: virtual classes *)
class virtual shape =
object
    method virtual draw : unit
end

class circle =
object
    inherit shape
    method draw = print_endline "Drawing circle"
end
```

**Besonderheiten:**
- Virtual classes sind abstrakte Typen
- Virtual methods müssen in abgeleiteten Klassen implementiert werden
- Kann nicht direkt instanziiert werden

**Weiterführende Links:**
- [OCaml Documentation - Virtual Classes](https://v2.ocaml.org/manual/objectexamples.html)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
% Abstract Types: abstract classes
classdef (Abstract) Shape
    methods (Abstract)
        draw(obj)
    end
end

classdef Circle < Shape
    methods
        function draw(obj)
            % Implementation
        end
    end
end
```

**Besonderheiten:**
- Abstract classes sind abstrakte Typen
- Abstract methods müssen in abgeleiteten Klassen implementiert werden
- Kann nicht direkt instanziiert werden

**Weiterführende Links:**
- [GNU Octave Documentation - Abstract Classes](https://octave.org/doc/v8.1.0/Object-Oriented-Programming.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Abstract Types: nicht direkt unterstützt
// Workaround: Interfaces mit Fehler bei direkter Verwendung
Drawable :: interface {
    draw: proc(self: ^Self)
}

// Kann nicht direkt instanziiert werden
```

**Besonderheiten:**
- Odin hat keine direkten abstrakten Typen
- Interfaces können als abstrakte Typen verwendet werden
- Manuelle OOP-Simulation erforderlich

**Weiterführende Links:**
- [Odin Documentation - Interfaces](https://odin-lang.org/docs/overview/#interfaces)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Abstract Types: abstract classes (Konvention)
package Shape;

sub new {
    my $class = shift;
    die "Cannot instantiate abstract class" if $class eq 'Shape';
    bless {}, $class;
}

sub draw {
    die "draw must be implemented";
}
```

**Besonderheiten:**
- Perl hat keine direkten abstrakten Typen
- Abstract classes sind Konvention (keine Compiler-Unterstützung)
- Runtime-Fehler bei direkter Instanziierung

**Weiterführende Links:**
- [Perl Documentation - Objects](https://perldoc.perl.org/perlobj)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
// Abstract Types: abstract classes, interfaces
abstract class Shape {
    abstract public function draw();
}

class Circle extends Shape {
    public function draw() {
        // Implementation
    }
}
?>
```

**Besonderheiten:**
- Abstract classes und Interfaces sind abstrakte Typen
- Abstract methods müssen in abgeleiteten Klassen implementiert werden
- Kann nicht direkt instanziiert werden

**Weiterführende Links:**
- [PHP Documentation - Abstract Classes](https://www.php.net/manual/en/language.oop5.abstract.php)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Abstract Types: type classes
class Drawable a where
    draw :: a -> Effect Unit

data Circle = Circle Number

instance Drawable Circle where
    draw _ = log "Drawing circle"
```

**Besonderheiten:**
- Type classes sind abstrakte Typen
- Type classes definieren abstrakte Funktionen
- Kann nicht direkt instanziiert werden

**Weiterführende Links:**
- [PureScript Documentation - Type Classes](https://github.com/purescript/documentation/blob/master/language/Type-Classes.md)

</TabItem>
<TabItem value="python" label="Python">

```python
# Abstract Types: abstract base classes (ABC)
from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def draw(self):
        pass

class Circle(Shape):
    def draw(self):
        # Implementation
        pass
```

**Besonderheiten:**
- Abstract base classes (ABC) sind abstrakte Typen
- Abstract methods müssen in abgeleiteten Klassen implementiert werden
- Kann nicht direkt instanziiert werden

**Weiterführende Links:**
- [Python Documentation - Abstract Base Classes](https://docs.python.org/3/library/abc.html)

</TabItem>
<TabItem value="r" label="R">

```r
# Abstract Types: abstract classes (S4)
setClass("Shape", contains = "VIRTUAL")

setGeneric("draw", function(object) standardGeneric("draw"))

setMethod("draw", "Shape", function(object) {
    stop("draw must be implemented")
})
```

**Besonderheiten:**
- S4-Klassen mit `contains = "VIRTUAL"` sind abstrakt
- Abstrakte Methoden müssen mit `setGeneric` definiert werden
- Können nicht direkt instanziiert werden

**Weiterführende Links:**
- [R Documentation - Classes](https://stat.ethz.ch/R-manual/R-devel/library/methods/html/Classes.html)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
; Abstract Types: abstract classes
(define abstract-shape%
  (class object%
    (super-new)
    (abstract draw)))
```

**Besonderheiten:**
- Abstract classes sind abstrakte Typen
- Abstract methods müssen in abgeleiteten Klassen implementiert werden
- Kann nicht direkt instanziiert werden

**Weiterführende Links:**
- [Racket Documentation - Abstract Classes](https://docs.racket-lang.org/guide/classes.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Abstract Types: nicht direkt unterstützt (funktionale Programmierung)
-- Workaround: Tag Unions mit Pattern Matching
draw : [Circle I32, Rectangle I32 I32] -> Str
draw = \shape ->
    when shape is
        Circle _ -> "Drawing circle"
        Rectangle _ _ -> "Drawing rectangle"
```

**Besonderheiten:**
- Roc hat keine direkten abstrakten Typen
- Tag Unions mit Pattern Matching als Workaround
- Funktionale Programmierung ohne OOP-Features

**Weiterführende Links:**
- [Roc Documentation - Tags](https://www.roc-lang.org/tutorial#tags)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Abstract Types: abstract classes (Konvention)
class Shape
  def initialize
    raise "Cannot instantiate abstract class" if self.class == Shape
  end
  
  def draw
    raise "draw must be implemented"
  end
end
```

**Besonderheiten:**
- Ruby hat keine direkten abstrakten Typen
- Abstract classes sind Konvention (keine Compiler-Unterstützung)
- Runtime-Fehler bei direkter Instanziierung

**Weiterführende Links:**
- [Ruby Documentation - Classes](https://ruby-doc.org/core-3.1.0/Class.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Abstract Types: traits
trait Drawable {
    fn draw(&self);
}

struct Circle {
    radius: f64,
}

impl Drawable for Circle {
    fn draw(&self) {
        println!("Drawing circle");
    }
}
```

**Besonderheiten:**
- Traits sind abstrakte Typen
- Traits definieren abstrakte Methoden
- Kann nicht direkt instanziiert werden

**Weiterführende Links:**
- [The Rust Book - Traits](https://doc.rust-lang.org/book/ch10-02-traits.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Abstract Types: abstract classes, traits
abstract class Shape {
    def draw(): Unit
}

class Circle extends Shape {
    override def draw(): Unit = {
        // Implementation
    }
}
```

**Besonderheiten:**
- Abstract classes und Traits sind abstrakte Typen
- Abstract methods müssen in abgeleiteten Klassen implementiert werden
- Kann nicht direkt instanziiert werden

**Weiterführende Links:**
- [Scala Documentation - Abstract Classes](https://docs.scala-lang.org/tour/traits.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; Abstract Types: nicht direkt unterstützt
;; Workaround: Records mit Konvention, nicht direkt zu instanziieren
(define-record-type shape
  (make-shape)
  shape?
  (draw shape-draw))

;; Kein Sprachmechanismus verhindert direkte Instanziierung
;; Abstraktion nur durch Konvention
```

**Besonderheiten:**
- Scheme hat keine abstrakten Typen
- Kein Mechanismus zur Verhinderung der Instanziierung
- Abstraktion nur durch Konvention möglich

**Weiterführende Links:**
- [Scheme Documentation - Records](https://www.scheme.com/tspl4/objects.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Abstract Types: protocols, abstract classes (Konvention)
protocol Drawable {
    func draw()
}

class Circle: Drawable {
    func draw() {
        // Implementation
    }
}
```

**Besonderheiten:**
- Protocols sind abstrakte Typen
- Abstract classes sind Konvention (keine direkte Compiler-Unterstützung)
- Kann nicht direkt instanziiert werden

**Weiterführende Links:**
- [Swift Documentation - Protocols](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/protocols/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Abstract Types: abstract classes, interfaces
abstract class Shape {
    abstract draw(): void;
}

class Circle extends Shape {
    draw(): void {
        // Implementation
    }
}
```

**Besonderheiten:**
- Abstract classes und Interfaces sind abstrakte Typen
- Abstract methods müssen in abgeleiteten Klassen implementiert werden
- Kann nicht direkt instanziiert werden

**Weiterführende Links:**
- [TypeScript Handbook - Abstract Classes](https://www.typescriptlang.org/docs/handbook/2/classes.html#abstract-classes-and-members)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Abstract Types: abstract classes, interfaces
Public MustInherit Class Shape
    Public MustOverride Sub Draw()
End Class

Public Class Circle
    Inherits Shape
    
    Public Overrides Sub Draw()
        ' Implementation
    End Sub
End Class
```

**Besonderheiten:**
- Abstract classes (MustInherit) und Interfaces sind abstrakte Typen
- Abstract methods (MustOverride) müssen in abgeleiteten Klassen implementiert werden
- Kann nicht direkt instanziiert werden

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Abstract Classes](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/inheritance/)

</TabItem>
<TabItem value="v" label="V">

```v
// Abstract Types: interfaces
interface Drawable {
    draw()
}

struct Circle {
    radius f64
}

fn (c Circle) draw() {
    println("Drawing circle")
}
```

**Besonderheiten:**
- Interfaces sind abstrakte Typen
- Interfaces definieren abstrakte Methoden
- Kann nicht direkt instanziiert werden

**Weiterführende Links:**
- [V Documentation - Interfaces](https://github.com/vlang/v/blob/master/doc/docs.md#interfaces)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Abstract Types: Konvention durch Messages *)
Shape /: Shape[] := (Message[Shape::abstract, "Shape"]; $Failed)

Circle[name_] := <|"name" -> name, "draw" -> Function[Print["Drawing circle"]]|>
```

**Besonderheiten:**
- Wolfram Language hat keine direkten abstrakten Typen
- Abstract Types sind Konvention
- Runtime-Fehler bei direkter Instanziierung

**Weiterführende Links:**
- [Wolfram Language Documentation - Messages](https://reference.wolfram.com/language/guide/Messages.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Abstract Types: nicht direkt unterstützt
// Workaround: structs mit Fehler bei direkter Verwendung
const Drawable = struct {
    draw: *const fn() void,
};

// Kann nicht verhindern, dass Drawable direkt instanziiert wird
```

**Besonderheiten:**
- Zig hat keine direkten abstrakten Typen
- Manuelle OOP-Simulation erforderlich
- Keine Compiler-Unterstützung für abstrakte Typen

**Weiterführende Links:**
- [Zig Documentation - Structs](https://ziglang.org/documentation/0.11.0/#structs)

</TabItem>
</Tabs>


