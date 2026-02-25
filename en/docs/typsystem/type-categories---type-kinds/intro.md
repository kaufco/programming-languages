---
slug: /typsystem/type-categories---type-kinds
title: 3.2. Type Categories / Type Kinds
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 3.2. Type Categories / Type Kinds

Classifies different type categories and their properties.

## 3.2.1. Primitive Types

Basic types provided by the language system that are not composed from other types.

### Languages {#sprachen}

<Tabs availableTabs={['ada', 'c', 'carbon', 'csharp', 'cpp', 'clojure', 'common-lisp', 'crystal', 'd', 'dart', 'eiffel', 'elixir', 'elm', 'erlang', 'fsharp', 'fortran', 'gleam', 'go', 'groovy', 'haskell', 'haxe', 'idris', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'lua', 'matlab', 'mercury', 'mojo', 'nim', 'objective-c', 'object-pascal', 'ocaml', 'octave', 'odin', 'perl', 'php', 'prolog', 'purescript', 'python', 'r', 'racket', 'roc', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'vbnet', 'v', 'wolfram-language', 'zig']}>
<TabItem value="ada" label="Ada">

```ada
-- Primitive Types: Integer, Float, Boolean, Character
x : Integer := 42;
y : Float := 3.14;
flag : Boolean := True;
ch : Character := 'A';
```

**Special features:**
- Integer, Float, Boolean and Character are primitive types
- Additional primitive types: Wide_Character, Wide_Wide_Character
- Numeric types can be annotated with range constraints

**Further reading:**
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

**Special features:**
- Basic primitive types: int, float, double, char, _Bool (since C99)
- Additional primitive types: short, long, long long, unsigned variants
- void is a special primitive type

**Further reading:**
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

**Special features:**
- Explicit size specifications: i8, i16, i32, i64 for integers, f32, f64 for floats
- bool and char are primitive types
- Experimental language, syntax may still change

**Further reading:**
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

**Special features:**
- Many primitive types: sbyte, byte, short, ushort, int, uint, long, ulong, float, double, decimal, bool, char
- All primitive types are aliases for .NET types (e.g. int = System.Int32)
- decimal is a 128-bit floating-point type for financial calculations

**Further reading:**
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

**Special features:**
- Basic primitive types: bool, char, int, float, double
- Additional primitive types: short, long, long long, unsigned variants, wchar_t, char16_t, char32_t
- void is a special primitive type

**Further reading:**
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

**Special features:**
- Primitive types: long, double, boolean, char
- All values are objects, but primitive types are optimized for performance
- Additional primitive types: byte, short, int, float

**Further reading:**
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

**Special features:**
- Primitive types: number (integer, float, ratio, complex), character, boolean (t/nil)
- All values are objects, but there are primitive types at a low level
- number encompasses various numeric types

**Further reading:**
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

**Special features:**
- Primitive types: Int8, Int16, Int32, Int64, UInt8, UInt16, UInt32, UInt64, Float32, Float64, Bool, Char
- All types are objects, but primitive types are optimized for performance
- Nil is a special primitive type

**Further reading:**
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

**Special features:**
- Primitive types: bool, byte, ubyte, short, ushort, int, uint, long, ulong, float, double, real, ifloat, idouble, ireal, cfloat, cdouble, creal, char, wchar, dchar
- real, ifloat, idouble, ireal, cfloat, cdouble, creal are extended precision types
- void is a special primitive type

**Further reading:**
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

**Special features:**
- Primitive types: int, double, bool, String, null
- All values are objects, including primitive types
- int and double are arbitrary-precision numbers

**Further reading:**
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

**Special features:**
- Primitive types: INTEGER, REAL, DOUBLE, BOOLEAN, CHARACTER
- All types are classes, but primitive types are optimized for performance
- CHARACTER is an 8-bit type

**Further reading:**
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

**Special features:**
- Primitive types: integer (arbitrary precision), float, boolean (atoms :true/:false), atom
- All values are immutable
- atom is a primitive type for constants

**Further reading:**
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

**Special features:**
- Primitive types: Int, Float, Bool, Char, String
- All types are immutable
- String is a primitive type (not a list of Char)

**Further reading:**
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

**Special features:**
- Primitive types: integer (arbitrary precision), float, atom, boolean (atoms true/false)
- All values are immutable
- atom is a primitive type for constants

**Further reading:**
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

**Special features:**
- Primitive types: sbyte, byte, int16, uint16, int32, uint32, int64, uint64, nativeint, unativeint, float32, float, decimal, bool, char, string
- `float` is an alias for System.Double (64-bit), `float32` for System.Single (32-bit)
- All primitive types are .NET types

**Further reading:**
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

**Special features:**
- Primitive types: INTEGER, REAL, DOUBLE PRECISION, LOGICAL, CHARACTER
- Additional primitive types: COMPLEX, DOUBLE COMPLEX
- CHARACTER can have a length

**Further reading:**
- [Fortran Standard - Intrinsic Types](https://gcc.gnu.org/onlinedocs/gfortran/Intrinsic-Types.html)

</TabItem>
<TabItem value="gleam" label="Gleam">

```erlang
// Primitive Types: Int, Float, Bool
let x = 42  // Int
let y = 3.14  // Float
let flag = True  // Bool
```

**Special features:**
- Primitive types: Int (64-bit), Float (64-bit), Bool
- All values are immutable
- String is a primitive type (not a list of Char)

**Further reading:**
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

**Special features:**
- Primitive types: bool, string, int, int8, int16, int32, int64, uint, uint8, uint16, uint32, uint64, uintptr, byte (alias for uint8), rune (alias for int32), float32, float64, complex64, complex128
- int and uint have platform-dependent size
- string is a primitive type

**Further reading:**
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

**Special features:**
- Primitive Types: byte, short, int, long, float, double, boolean, char
- Automatic autoboxing to wrapper classes (Integer, Double, etc.)
- Groovy treats primitives internally as objects (autoboxing)

**Further reading:**
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

**Special features:**
- Primitive types: Int, Integer (arbitrary precision), Float, Double, Bool, Char
- Integer is arbitrary-precision, Int is fixed-size
- All types are immutable

**Further reading:**
- [Haskell Documentation - Basic Types](https://www.haskell.org/tutorial/basictypes.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Primitive Types: Int, Float, Bool
var x: Int = 42;
var y: Float = 3.14;
var flag: Bool = true;
```

**Special features:**
- Primitive types: Int, Float, Bool
- Additional primitive types depending on target: UInt (Flash/JS), Single (C#)
- All types are compiled to corresponding primitive types depending on target

**Further reading:**
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

**Special features:**
- Primitive types: Int, Integer (arbitrary precision), Double, Bool, Char
- Integer is arbitrary-precision, Int is fixed-size
- All types are immutable

**Further reading:**
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

**Special features:**
- Primitive types: byte, short, int, long, float, double, boolean, char
- Autoboxing to wrapper classes (Integer, Double, Boolean, Character, etc.)
- void is a special primitive type

**Further reading:**
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

**Special features:**
- Primitive types: number, boolean, string, null, undefined, symbol (since ES6), bigint (since ES2020)
- All values except null and undefined have wrapper objects
- string is a primitive type, but behaves like an object

**Further reading:**
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

**Special features:**
- Primitive types: Bool, Int8, UInt8, Int16, UInt16, Int32, UInt32, Int64, UInt64, Int128, UInt128, Float16, Float32, Float64, Char
- Many numeric types with explicit sizes
- All types are immutable

**Further reading:**
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

**Special features:**
- Primitive types: `int` (arbitrary precision), `float64`, `bool`, `char`, `string`, `()` (unit)
- `int` is arbitrarily large by default (arbitrary precision)
- Special types: `int32`, `int64`, `ssize_t` available via standard library
- All values are immutable (immutable by default)

**Further reading:**
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

**Special features:**
- Primitive types: Byte, Short, Int, Long, Float, Double, Boolean, Char
- All primitive types have nullable variants (Int?, Double?, etc.)
- Autoboxing only when necessary (e.g. in generic types)

**Further reading:**
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

**Special features:**
- Primitive types: Nat, Int, UInt8/16/32/64, Int8/16/32/64, Float, Bool, Char, String
- `Nat` (natural numbers) and `Int` (integers) are arbitrarily large (arbitrary precision)
- `Float` is 64-bit IEEE 754 (no 32-bit Float)
- All types are non-nullable

**Further reading:**
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

**Special features:**
- Primitive types: number (double precision float), boolean, string, nil
- number is always double precision float
- string is a primitive type (interned)

**Further reading:**
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

**Special features:**
- Primitive types: double (default), single, int8, int16, int32, int64, uint8, uint16, uint32, uint64, logical, char
- double is the default for numeric values
- char is an array of characters

**Further reading:**
- [MATLAB Documentation - Data Types](https://www.mathworks.com/help/matlab/data-types.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```mercury
% Primitive Types: int, float, char, string
:- pred main(io::di, io::uo) is det.
main(!IO) :-
    X = 42,            % int (machine-dependent word size)
    Y = 3.14,          % float (double precision)
    C = 'A',           % char (Unicode character)
    S = "Hello",       % string (character string)
    io.write_int(X, !IO), io.nl(!IO),
    io.write_float(Y, !IO), io.nl(!IO),
    io.write_char(C, !IO), io.nl(!IO),
    io.write_string(S, !IO), io.nl(!IO).
```

**Special features:**
- Primitive types: `int` (machine-dependent), `float` (double), `char` (Unicode), `string`
- `int` is a signed integer in machine word size
- `float` corresponds to C `double` (64-bit IEEE 754)
- `string` is a character string (not an array of characters)

**Further reading:**
- [The Mercury Language Reference Manual - Builtin Types](https://www.mercurylang.org/documentation/reference.html#Builtin_types)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# Primitive Types: Int, Float64, Bool
var x: Int = 42
var y: Float64 = 3.14
var flag: Bool = true
```

**Special features:**
- Primitive types: Int, Int8, Int16, Int32, Int64, UInt8, UInt16, UInt32, UInt64, Float32, Float64, Bool
- Explicit size specifications for numeric types
- All types are immutable

**Further reading:**
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

**Special features:**
- Primitive types: `int`, `int8`, `int16`, `int32`, `int64`, `uint`, `uint8`, `uint16`, `uint32`, `uint64`, `float`, `float32`, `float64`, `bool`, `char`
- `int` and `uint` have platform-dependent size (32-bit or 64-bit)
- Variables can be declared with `var` (mutable), `let` (immutable) or `const` (compile-time constant)

**Further reading:**
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

**Special features:**
- Primitive types: int, float, double, BOOL, char, short, long, long long, unsigned variants
- BOOL is actually a typedef for signed char (YES/NO)
- All primitive types are C-compatible

**Further reading:**
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

**Special features:**
- Primitive types: Integer, Real, Double, Boolean, Char, Byte, ShortInt, Word, LongInt, etc.
- Many numeric types with different sizes
- Boolean is a primitive type (True/False)

**Further reading:**
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

**Special features:**
- Primitive types: int (31-bit or 63-bit), float (64-bit), bool, char, string, unit
- int is not 32-bit or 64-bit, but 31-bit or 63-bit (due to GC tag)
- All types are immutable

**Further reading:**
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

**Special features:**
- Primitive types: double (default), single, int8, int16, int32, int64, uint8, uint16, uint32, uint64, logical, char
- double is the default for numeric values
- char is an array of characters

**Further reading:**
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

**Special features:**
- Primitive types: i8, i16, i32, i64, i128, u8, u16, u32, u64, u128, uptr, f32, f64, bool, rune (Unicode codepoint), byte
- Explicit size specifications for all numeric types
- rune is a primitive type for Unicode characters

**Further reading:**
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

**Special features:**
- Primitive types: scalar (can be number or string), undef
- Scalar can be number or string depending on context (Dualvar)
- Boolean is not a separate type, but 1/0 or ""/"1"

**Further reading:**
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

**Special features:**
- Primitive types: int, float, bool, string, null
- int is platform-dependent (32-bit or 64-bit)
- string is a primitive type (not an array of Char)

**Further reading:**
- [PHP Documentation - Types](https://www.php.net/manual/en/language.types.intro.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Primitive Types: Integers, Floats, Atoms
X = 42,          % Integer (arbitrary precision)
Y = 3.14,        % Float (64-bit)
A = hello,       % Atom (symbolic value)
S = "Hallo",     % String (in SWI-Prolog)

% Type checking
integer(42),     % true
float(3.14),     % true
atom(hello),     % true
number(42),      % true
```

**Special features:**
- Integers with arbitrary precision (implementation-dependent, e.g. SWI-Prolog)
- Floats are typically 64-bit IEEE 754
- Atoms are unique symbolic constants (similar to Symbols in Ruby/Lisp)
- Strings are atoms or lists of character codes depending on implementation

**Further reading:**
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

**Special features:**
- Primitive types: Int, Number (Float64), Boolean, Char, String
- All types are immutable
- String is a primitive type (not a list of Char)

**Further reading:**
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

**Special features:**
- Primitive types: int (arbitrary precision), float, bool, str, NoneType
- All values are objects, but there are primitive types
- int is arbitrary-precision (no size limit)

**Further reading:**
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

**Special features:**
- Primitive types: numeric (double), integer, logical, character, complex, raw, NULL
- numeric is double precision by default
- character is a primitive type (vector of characters)

**Further reading:**
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

**Special features:**
- Primitive types: number (integer, float), boolean (#t/#f), char, string
- number encompasses integer (exact) and float (inexact)
- All types are immutable

**Further reading:**
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

**Special features:**
- Primitive types: I8, I16, I32, I64, I128, U8, U16, U32, U64, U128, F32, F64, Bool, Str
- Explicit size specifications for all numeric types
- Str is a primitive type (not a list of Char)

**Further reading:**
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

**Special features:**
- Primitive types: Integer (arbitrary precision), Float, TrueClass, FalseClass, String, NilClass, Symbol
- All values are objects, but there are primitive types
- Integer is arbitrary-precision

**Further reading:**
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

**Special features:**
- Primitive types: i8, i16, i32, i64, i128, isize, u8, u16, u32, u64, u128, usize, f32, f64, bool, char
- Explicit size specifications for all numeric types
- isize and usize have platform-dependent size

**Further reading:**
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

**Special features:**
- Primitive types: Byte, Short, Int, Long, Float, Double, Boolean, Char
- Autoboxing to wrapper classes (java.lang.Integer, etc.)
- Unit is a special primitive type

**Further reading:**
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

**Special features:**
- Primitive types: number (integer, float), boolean (#t/#f), char, string
- number encompasses integer (exact) and float (inexact)
- All types are immutable

**Further reading:**
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

**Special features:**
- Primitive types: Int, Int8, Int16, Int32, Int64, UInt, UInt8, UInt16, UInt32, UInt64, Float, Double, Bool, Character, String
- Int and UInt have platform-dependent size
- String is a primitive type (not an array of Character)

**Further reading:**
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

**Special features:**
- Primitive types: number, boolean, string, null, undefined, symbol (since ES6), bigint (since ES2020)
- All types correspond to JavaScript primitives
- void is a special primitive type

**Further reading:**
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

**Special features:**
- Primitive types: SByte, Byte, Short, UShort, Integer, UInteger, Long, ULong, Single, Double, Decimal, Boolean, Char, String
- All primitive types are .NET types
- Decimal is a 128-bit floating-point type

**Further reading:**
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

**Special features:**
- Primitive types: i8, i16, int, i64, i128, u8, u16, u32, u64, u128, f32, f64, bool, string, byte, rune
- int is platform-dependent (32-bit or 64-bit)
- string is a primitive type

**Further reading:**
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

**Special features:**
- Primitive types: Integer (arbitrary precision), Real, Boolean (True/False), String, Symbol
- Integer is arbitrary-precision (no fixed size)
- Symbol is a primitive type for symbolic identifiers

**Further reading:**
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

**Special features:**
- Primitive types: i8, i16, i32, i64, i128, u8, u16, u32, u64, u128, usize, isize, f16, f32, f64, f80, f128, bool, void, noreturn, type, anyerror, comptime_int, comptime_float
- Explicit size specifications for all numeric types
- comptime_int and comptime_float are compile-time types

**Further reading:**
- [Zig Documentation - Types](https://ziglang.org/documentation/0.11.0/#Primitive-Types)

</TabItem>
</Tabs>


## 3.2.2. Signed Integers (8/16/32/64 bit)

Signed integers with explicit size specifications (8, 16, 32 or 64 bits).

### Languages {#sprachen}

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

**Special features:**
- Integer_8, Integer_16, Integer_32, Integer_64 are signed integer types with explicit sizes
- Integer is implementation-defined (typically 32-bit or 64-bit)
- All types are available in standard package

**Further reading:**
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

**Special features:**
- char, short, int, long, long long are signed integer types
- Sizes are implementation-defined (at least the specified sizes)
- int8_t, int16_t, int32_t, int64_t (since C99) for explicit sizes

**Further reading:**
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

**Special features:**
- i8, i16, i32, i64 are signed integer types with explicit sizes
- All sizes are guaranteed
- Experimental language, syntax may still change

**Further reading:**
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

**Special features:**
- sbyte (8-bit), short (16-bit), int (32-bit), long (64-bit) are signed integer types
- All sizes are guaranteed
- All types are aliases for .NET types (System.SByte, System.Int16, System.Int32, System.Int64)

**Further reading:**
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

**Special features:**
- char, short, int, long, long long are signed integer types
- Sizes are implementation-defined (at least the specified sizes)
- int8_t, int16_t, int32_t, int64_t (since C++11) for explicit sizes

**Further reading:**
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

**Special features:**
- Int8, Int16, Int32, Int64 are signed integer types with explicit sizes
- All sizes are guaranteed
- Int is an alias for Int32

**Further reading:**
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

**Special features:**
- byte (8-bit), short (16-bit), int (32-bit), long (64-bit) are signed integer types
- All sizes are guaranteed
- Additional types: cent (128-bit, if available)

**Further reading:**
- [D Language Specification - Integer Types](https://dlang.org/spec/type.html#integral-types)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Signed Integers: int (arbitrary precision, no explicit sizes)
int x = 42;
int y = 2147483647;
int z = 9223372036854775807;
```

**Special features:**
- int is arbitrary-precision, no explicit size specifications
- Internally, values are stored as 64-bit or BigInt depending on size
- No separate types for 8/16/32/64-bit

**Further reading:**
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
    x := 42  -- INTEGER is alias for INTEGER_32
end
```

**Special features:**
- INTEGER_8 (8-bit), INTEGER_16 (16-bit), INTEGER_32 (32-bit), INTEGER_64 (64-bit) are defined in ECMA-367 standard
- `INTEGER` is an alias for `INTEGER_32`
- All integer types are expanded classes (value types)

**Further reading:**
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

**Special features:**
- sbyte (8-bit), int16 (16-bit), int32 (32-bit), int64 (64-bit) are signed integer types
- All sizes are guaranteed
- All types are .NET types

**Further reading:**
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

**Special features:**
- INTEGER(KIND=n) for explicit sizes (KIND=1,2,4,8 typically correspond to 8,16,32,64-bit)
- INTEGER is implementation-defined (typically 32-bit)
- Literals require KIND suffix (`_n`) for values larger than the default kind
- SELECTED_INT_KIND for portable size specifications

**Further reading:**
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

**Special features:**
- int8, int16, int32, int64 are signed integer types with explicit sizes
- int is platform-dependent (32-bit or 64-bit)
- All sizes are guaranteed

**Further reading:**
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

**Special features:**
- byte (8-bit), short (16-bit), int (32-bit), long (64-bit) are signed integer types
- All sizes are guaranteed
- Autoboxing to wrapper classes (Byte, Short, Integer, Long)

**Further reading:**
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

**Special features:**
- Int8, Int16, Int32, Int64 are signed integer types with explicit sizes
- Int is platform-dependent (typically 32-bit or 64-bit)
- All types are available in Data.Int

**Further reading:**
- [Haskell Documentation - Fixed-size Types](https://hackage.haskell.org/package/base/docs/Data-Int.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Signed Integers: Int (target-dependent, no explicit sizes)
var x: Int = 42;
var y: Int = 2147483647;
```

**Special features:**
- Int is target-dependent (32-bit or 64-bit depending on target)
- No explicit size specifications for 8/16/32/64-bit
- Size depends on compiler target

**Further reading:**
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

**Special features:**
- Int8, Int16, Int32, Int64 are signed integer types with explicit sizes
- Int is platform-dependent
- All types are available in standard library

**Further reading:**
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

**Special features:**
- byte (8-bit), short (16-bit), int (32-bit), long (64-bit) are signed integer types
- All sizes are guaranteed
- Autoboxing to wrapper classes (Byte, Short, Integer, Long)

**Further reading:**
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

**Special features:**
- Int8, Int16, Int32, Int64, Int128 are signed integer types with explicit sizes
- All sizes are guaranteed
- Int is an alias for Int32 or Int64 (platform-dependent)

**Further reading:**
- [Julia Documentation - Integers](https://docs.julialang.org/en/v1/manual/integers-and-floating-point-numbers/)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Signed Integers: int (arbitrary precision), int32, int64
val x: int = 42                   // arbitrary precision (Standard)
val y: int32 = 2147483647.int32   // 32-bit signed
val z: int64 = 9223372036854775807.int64  // 64-bit signed
```

**Special features:**
- `int` is arbitrary precision by default (no fixed size)
- `int32` and `int64` are available via standard library (`std/num/int32`, `std/num/int64`)
- No `int8` or `int16` types
- Conversion between types via explicit functions (e.g. `.int32`)

**Further reading:**
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

**Special features:**
- Byte (8-bit), Short (16-bit), Int (32-bit), Long (64-bit) are signed integer types
- All sizes are guaranteed
- All types have nullable variants (Byte?, Short?, Int?, Long?)

**Further reading:**
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

**Special features:**
- Int8 (8-bit), Int16 (16-bit), Int32 (32-bit), Int64 (64-bit) are fixed-size signed integer types
- Additionally: `Int` is arbitrary precision (arbitrarily large)
- All sizes are guaranteed
- No autoboxing needed

**Further reading:**
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

**Special features:**
- int8, int16, int32, int64 are signed integer types with explicit sizes
- All sizes are guaranteed
- Default is double, explicit conversion required

**Further reading:**
- [MATLAB Documentation - Integer Types](https://www.mathworks.com/help/matlab/numeric-types.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```mercury
% Signed Integers: int (machine-dependent word size)
:- pred main(io::di, io::uo) is det.
main(!IO) :-
    X = 42,                    % int
    Y = -100,                  % int
    Max = max_int,             % Maximum int value (platform-dependent)
    Min = min_int,             % Minimum int value (platform-dependent)
    io.write_int(X, !IO), io.nl(!IO),
    io.write_int(Y, !IO), io.nl(!IO),
    io.write_int(Max, !IO), io.nl(!IO),
    io.write_int(Min, !IO), io.nl(!IO).
```

**Special features:**
- Mercury has only one built-in integer type: `int` (signed, machine-dependent word size)
- No explicit bit-width types (no int8, int16, int32, int64)
- `max_int` and `min_int` indicate platform-dependent limits
- The `integer` module is available for arbitrary precision arithmetic

**Further reading:**
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

**Special features:**
- Int8, Int16, Int32, Int64 are signed integer types with explicit sizes
- All sizes are guaranteed
- All types are immutable

**Further reading:**
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

**Special features:**
- int8, int16, int32, int64 are signed integer types with explicit sizes
- int is platform-dependent (32-bit or 64-bit)
- All sizes are guaranteed

**Further reading:**
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

**Special features:**
- char, short, int, long, long long are signed integer types
- Sizes are implementation-defined (C-compatible)
- int8_t, int16_t, int32_t, int64_t for explicit sizes (since C99)

**Further reading:**
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

**Special features:**
- ShortInt (8-bit), SmallInt (16-bit), Integer (32-bit), Int64 (64-bit) are signed integer types
- All sizes are guaranteed
- LongInt is an alias for Integer (32-bit)

**Further reading:**
- [Free Pascal Documentation - Integer Types](https://www.freepascal.org/docs-html/ref/refse8.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Signed Integers: int (31-bit or 63-bit), no explicit sizes *)
let x = 42  (* int, 31-bit or 63-bit *)
```

**Special features:**
- int is 31-bit or 63-bit (due to GC tag), no explicit size specifications
- No separate types for 8/16/32/64-bit
- int32 and int64 are available in separate modules (Int32, Int64)

**Further reading:**
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

**Special features:**
- int8, int16, int32, int64 are signed integer types with explicit sizes
- All sizes are guaranteed
- Default is double, explicit conversion required

**Further reading:**
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

**Special features:**
- i8, i16, i32, i64, i128 are signed integer types with explicit sizes
- All sizes are guaranteed
- isize is platform-dependent (32-bit or 64-bit)

**Further reading:**
- [Odin Documentation - Types](https://odin-lang.org/docs/overview/#types)

</TabItem>
<TabItem value="python" label="Python">

```python
# Signed Integers: int (arbitrary precision, no explicit sizes)
x = 42
y = 2147483647
z = 9223372036854775807
```

**Special features:**
- int is arbitrary-precision, no explicit size specifications
- No separate types for 8/16/32/64-bit
- Internally, values are stored as 32-bit, 64-bit, or BigInt depending on size

**Further reading:**
- [Python Documentation - Numeric Types](https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex)

</TabItem>
<TabItem value="r" label="R">

```r
# Signed Integers: integer (32-bit), no explicit sizes for 8/16/64-bit
x <- 42L  # integer (32-bit)
```

**Special features:**
- integer is 32-bit signed integer
- No explicit types for 8/16/64-bit
- L suffix required for integer literals

**Further reading:**
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

**Special features:**
- I8, I16, I32, I64, I128 are signed integer types with explicit sizes
- All sizes are guaranteed
- All types are immutable

**Further reading:**
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

**Special features:**
- i8, i16, i32, i64, i128 are signed integer types with explicit sizes
- isize is platform-dependent (32-bit or 64-bit)
- All sizes are guaranteed

**Further reading:**
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

**Special features:**
- Byte (8-bit), Short (16-bit), Int (32-bit), Long (64-bit) are signed integer types
- All sizes are guaranteed
- Autoboxing to wrapper classes (java.lang.Byte, etc.)

**Further reading:**
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

**Special features:**
- Int8, Int16, Int32, Int64 are signed integer types with explicit sizes
- Int is platform-dependent (32-bit or 64-bit)
- All sizes are guaranteed

**Further reading:**
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

**Special features:**
- SByte (8-bit), Short (16-bit), Integer (32-bit), Long (64-bit) are signed integer types
- All sizes are guaranteed
- All types are .NET types (System.SByte, System.Int16, System.Int32, System.Int64)

**Further reading:**
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

**Special features:**
- i8, i16, i64 are signed integer types with explicit sizes
- int is platform-dependent (32-bit or 64-bit)
- All sizes are guaranteed

**Further reading:**
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

**Special features:**
- i8, i16, i32, i64, i128 are signed integer types with explicit sizes
- isize is platform-dependent (32-bit or 64-bit)
- All sizes are guaranteed

**Further reading:**
- [Zig Documentation - Primitive Types](https://ziglang.org/documentation/0.11.0/#Primitive-Types)

</TabItem>
</Tabs>


## 3.2.3. Unsigned Integers (8/16/32/64 bit)

Unsigned integers with explicit size specifications (8, 16, 32, or 64 bits).

### Languages {#sprachen}

<Tabs availableTabs={['c', 'carbon', 'csharp', 'cpp', 'crystal', 'd', 'eiffel', 'fsharp', 'go', 'haskell', 'idris', 'julia', 'kotlin', 'lean4', 'matlab', 'mojo', 'nim', 'objective-c', 'object-pascal', 'octave', 'odin', 'roc', 'rust', 'swift', 'vbnet', 'v', 'zig']} yellowTabs={['ada', 'haxe', 'java']} orangeTabs={['dart', 'fortran', 'groovy', 'ocaml', 'python', 'r', 'scala']}>
<TabItem value="ada" label="Ada">

```ada
-- Unsigned Integers: Natural (non-negative), Modular types
x : Natural := 42;  -- non-negative integer
type Byte is mod 256;  -- 8-bit unsigned
type Word is mod 65536;  -- 16-bit unsigned
```

**Special features:**
- Natural is a subtype of Integer (non-negative)
- Modular types (mod) for unsigned integers with explicit size
- No direct types for 8/16/32/64-bit, but mod can be used

**Further reading:**
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

**Special features:**
- unsigned char, unsigned short, unsigned int, unsigned long, unsigned long long are unsigned integer types
- Sizes are implementation-defined (at least the specified sizes)
- uint8_t, uint16_t, uint32_t, uint64_t (since C99) for explicit sizes

**Further reading:**
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

**Special features:**
- u8, u16, u32, u64 are unsigned integer types with explicit sizes
- All sizes are guaranteed
- Experimental language, syntax may still change

**Further reading:**
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

**Special features:**
- byte (8-bit), ushort (16-bit), uint (32-bit), ulong (64-bit) are unsigned integer types
- All sizes are guaranteed
- All types are aliases for .NET types (System.Byte, System.UInt16, System.UInt32, System.UInt64)

**Further reading:**
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

**Special features:**
- unsigned char, unsigned short, unsigned int, unsigned long, unsigned long long are unsigned integer types
- Sizes are implementation-defined (at least the specified sizes)
- uint8_t, uint16_t, uint32_t, uint64_t (since C++11) for explicit sizes

**Further reading:**
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

**Special features:**
- UInt8, UInt16, UInt32, UInt64 are unsigned integer types with explicit sizes
- All sizes are guaranteed
- All types are available in standard library

**Further reading:**
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

**Special features:**
- ubyte (8-bit), ushort (16-bit), uint (32-bit), ulong (64-bit) are unsigned integer types
- All sizes are guaranteed
- Additional types: ucent (128-bit, if available)

**Further reading:**
- [D Language Specification - Integer Types](https://dlang.org/spec/type.html#integral-types)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Unsigned Integers: int (arbitrary precision, no explicit sizes)
int x = 42;
int y = 4294967295;
int z = 18446744073709551615;
```

**Special features:**
- int is arbitrary-precision, no explicit size specifications
- No separate types for unsigned integers
- Internally, values are stored as 64-bit or BigInt depending on size

**Further reading:**
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

**Special features:**
- NATURAL_8 (8-bit), NATURAL_16 (16-bit), NATURAL_32 (32-bit), NATURAL_64 (64-bit) are defined in the ECMA-367 standard
- `NATURAL` is an alias for `NATURAL_32`
- All NATURAL types are expanded classes (value types)

**Further reading:**
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

**Special features:**
- byte (8-bit), uint16 (16-bit), uint32 (32-bit), uint64 (64-bit) are unsigned integer types
- All sizes are guaranteed
- All types are .NET types

**Further reading:**
- [F# Documentation - Numeric Types](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/basic-types)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Unsigned Integers: INTEGER with UNSIGNED (not standard, compiler-specific)
! Standard Fortran has no unsigned integers
INTEGER :: x = 42
```

**Special features:**
- Standard Fortran has no unsigned integer types
- Some compilers support UNSIGNED as an extension
- Typically, signed integers are used

**Further reading:**
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

**Special features:**
- uint8, uint16, uint32, uint64 are unsigned integer types with explicit sizes
- uint is platform-dependent (32-bit or 64-bit)
- All sizes are guaranteed

**Further reading:**
- [Go Language Specification - Numeric Types](https://go.dev/ref/spec#Numeric_types)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Unsigned Integers: not directly supported (signed only)
// Workaround: Use larger signed types
int x = 42
long y = 4294967295L
```

**Special features:**
- Groovy has no direct unsigned integer types
- Workaround: Use larger signed types
- Autoboxing to wrapper classes

**Further reading:**
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

**Special features:**
- Word8, Word16, Word32, Word64 are unsigned integer types with explicit sizes
- Word is platform-dependent (typically 32-bit or 64-bit)
- All types are available in Data.Word

**Further reading:**
- [Haskell Documentation - Fixed-size Types](https://hackage.haskell.org/package/base/docs/Data-Word.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Unsigned Integers: UInt (Abstract type over Int)
var x:UInt = 42;
var y:UInt = 4294967295; // Max value (32-bit)
```

**Special features:**
- `UInt` is an abstract type over `Int`, available on all targets
- No explicit size specifications for 8/16/32/64-bit
- Overflow behavior is target-dependent

**Further reading:**
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

**Special features:**
- Bits8, Bits16, Bits32, Bits64 are unsigned integer types with explicit sizes
- All sizes are guaranteed
- All types are available in standard library

**Further reading:**
- [Idris Documentation - Types](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html#types)

</TabItem>
<TabItem value="java" label="Java">

```java
// Unsigned Integers: not directly supported (since Java 8: methods in wrapper classes)
// Workaround: Use larger signed types
int x = 42;
long y = 4294967295L;
// Since Java 8: Integer.toUnsignedLong(), etc.
```

**Special features:**
- Java has no direct unsigned integer types
- Since Java 8: Methods in wrapper classes for unsigned operations (Integer.toUnsignedLong(), etc.)
- Workaround: Use larger signed types

**Further reading:**
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

**Special features:**
- UInt8, UInt16, UInt32, UInt64, UInt128 are unsigned integer types with explicit sizes
- All sizes are guaranteed
- UInt is an alias for UInt32 or UInt64 (platform-dependent)

**Further reading:**
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

**Special features:**
- UByte (8-bit), UShort (16-bit), UInt (32-bit), ULong (64-bit) are unsigned integer types (since Kotlin 1.3)
- All sizes are guaranteed
- All types have nullable variants (UByte?, UShort?, UInt?, ULong?)

**Further reading:**
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

**Special features:**
- UInt8 (8-bit), UInt16 (16-bit), UInt32 (32-bit), UInt64 (64-bit) are fixed-size unsigned integer types
- Additionally: `Nat` is the standard type for natural numbers (arbitrary precision)
- `USize` for platform-dependent size (32 or 64 bits)
- All sizes are guaranteed

**Further reading:**
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

**Special features:**
- uint8, uint16, uint32, uint64 are unsigned integer types with explicit sizes
- All sizes are guaranteed
- Default is double, explicit conversion required

**Further reading:**
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

**Special features:**
- UInt8, UInt16, UInt32, UInt64 are unsigned integer types with explicit sizes
- All sizes are guaranteed
- All types are immutable

**Further reading:**
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

**Special features:**
- uint8, uint16, uint32, uint64 are unsigned integer types with explicit sizes
- uint is platform-dependent (32-bit or 64-bit)
- All sizes are guaranteed

**Further reading:**
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

**Special features:**
- unsigned char, unsigned short, unsigned int, unsigned long, unsigned long long are unsigned integer types
- Sizes are implementation-defined (C-compatible)
- uint8_t, uint16_t, uint32_t, uint64_t for explicit sizes (since C99)

**Further reading:**
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

**Special features:**
- Byte (8-bit), Word (16-bit), Cardinal (32-bit), UInt64 (64-bit) are unsigned integer types
- All sizes are guaranteed
- LongWord is an alias for Cardinal (32-bit)

**Further reading:**
- [Free Pascal Documentation - Integer Types](https://www.freepascal.org/docs-html/ref/refse8.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Unsigned Integers: not directly supported *)
(* Workaround: Use int and ignore sign *)
let x = 42
```

**Special features:**
- OCaml has no direct unsigned integer types
- Workaround: Use int and ignore sign
- int32 and int64 modules have no unsigned variants

**Further reading:**
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

**Special features:**
- uint8, uint16, uint32, uint64 are unsigned integer types with explicit sizes
- All sizes are guaranteed
- Default is double, explicit conversion required

**Further reading:**
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

**Special features:**
- u8, u16, u32, u64, u128 are unsigned integer types with explicit sizes
- All sizes are guaranteed
- usize is platform-dependent (32-bit or 64-bit)

**Further reading:**
- [Odin Documentation - Types](https://odin-lang.org/docs/overview/#types)

</TabItem>
<TabItem value="python" label="Python">

```python
# Unsigned Integers: not directly supported (int is signed)
# Workaround: Use larger signed types
x = 42
y = 4294967295
```

**Special features:**
- Python has no direct unsigned integer types
- int is arbitrary-precision signed integer
- Workaround: Use larger signed types

**Further reading:**
- [Python Documentation - Numeric Types](https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex)

</TabItem>
<TabItem value="r" label="R">

```r
# Unsigned Integers: not directly supported
# Workaround: Use integer (signed)
x <- 42L  # integer (signed)
```

**Special features:**
- R has no direct unsigned integer types
- integer is 32-bit signed integer
- Workaround: Use signed integer

**Further reading:**
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

**Special features:**
- U8, U16, U32, U64, U128 are unsigned integer types with explicit sizes
- All sizes are guaranteed
- All types are immutable

**Further reading:**
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

**Special features:**
- u8, u16, u32, u64, u128 are unsigned integer types with explicit sizes
- usize is platform-dependent (32-bit or 64-bit)
- All sizes are guaranteed

**Further reading:**
- [The Rust Book - Integer Types](https://doc.rust-lang.org/book/ch03-02-data-types.html#integer-types)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Unsigned Integers: not directly supported (signed only)
// Workaround: Use larger signed types
val x: Int = 42
val y: Long = 4294967295L
```

**Special features:**
- Scala has no direct unsigned integer types
- Workaround: Use larger signed types
- Autoboxing to wrapper classes

**Further reading:**
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

**Special features:**
- UInt8, UInt16, UInt32, UInt64 are unsigned integer types with explicit sizes
- UInt is platform-dependent (32-bit or 64-bit)
- All sizes are guaranteed

**Further reading:**
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

**Special features:**
- Byte (8-bit), UShort (16-bit), UInteger (32-bit), ULong (64-bit) are unsigned integer types
- All sizes are guaranteed
- All types are .NET types (System.Byte, System.UInt16, System.UInt32, System.UInt64)

**Further reading:**
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

**Special features:**
- u8, u16, u32, u64 are unsigned integer types with explicit sizes
- All sizes are guaranteed
- No platform-dependent unsigned type

**Further reading:**
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

**Special features:**
- u8, u16, u32, u64, u128 are unsigned integer types with explicit sizes
- usize is platform-dependent (32-bit or 64-bit)
- All sizes are guaranteed

**Further reading:**
- [Zig Documentation - Primitive Types](https://ziglang.org/documentation/0.11.0/#Primitive-Types)

</TabItem>
</Tabs>


## 3.2.4. Floating Point (32/64 bit)

Floating point numbers with single (32-bit) or double (64-bit) precision.

### Languages {#sprachen}

<Tabs availableTabs={['ada', 'c', 'carbon', 'csharp', 'cpp', 'clojure', 'common-lisp', 'crystal', 'd', 'eiffel', 'fsharp', 'fortran', 'go', 'groovy', 'haskell', 'java', 'julia', 'kotlin', 'matlab', 'mojo', 'nim', 'objective-c', 'object-pascal', 'octave', 'odin', 'roc', 'rust', 'scala', 'swift', 'vbnet', 'v', 'zig']} yellowTabs={['dart', 'elixir', 'elm', 'erlang', 'gleam', 'haxe', 'idris', 'javascript', 'koka', 'lean4', 'lua', 'mercury', 'ocaml', 'perl', 'php', 'purescript', 'python', 'r', 'racket', 'ruby', 'scheme', 'typescript', 'wolfram-language']}>
<TabItem value="ada" label="Ada">

```ada
-- Floating Point: Float (implementation-defined), Long_Float (64-bit)
x : Float := 3.14;  -- implementation-defined precision
y : Long_Float := 3.141592653589793;  -- 64-bit
```

**Special features:**
- Float is implementation-defined (typically 32-bit or 64-bit)
- Long_Float is guaranteed 64-bit
- Additional types: Long_Long_Float (if available)

**Further reading:**
- [Ada Reference Manual - Floating Point Types](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-3-5-7.html)

</TabItem>
<TabItem value="c" label="C">

```c
// Floating Point: float (32-bit), double (64-bit)
float f = 3.14f;  // 32-bit
double d = 3.141592653589793;  // 64-bit
```

**Special features:**
- float is 32-bit IEEE 754
- double is 64-bit IEEE 754
- long double is extended precision (implementation-defined)

**Further reading:**
- [C Standard - Floating Point Types](https://en.cppreference.com/w/c/language/arithmetic_types)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Floating Point: f32 (32-bit), f64 (64-bit)
var x: f32 = 3.14;
var y: f64 = 3.141592653589793;
```

**Special features:**
- f32 is 32-bit IEEE 754
- f64 is 64-bit IEEE 754
- All sizes are guaranteed
- Experimental language, syntax may still change

**Further reading:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Floating Point: float (32-bit), double (64-bit)
float f = 3.14f;  // 32-bit
double d = 3.141592653589793;  // 64-bit
```

**Special features:**
- float is 32-bit IEEE 754
- double is 64-bit IEEE 754
- All sizes are guaranteed
- decimal is a 128-bit floating point type (not IEEE 754)

**Further reading:**
- [Microsoft C# Documentation - Floating Point Types](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/floating-point-numeric-types)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Floating Point: float (32-bit), double (64-bit)
float f = 3.14f;  // 32-bit
double d = 3.141592653589793;  // 64-bit
```

**Special features:**
- float is 32-bit IEEE 754
- double is 64-bit IEEE 754
- long double is extended precision (implementation-defined)

**Further reading:**
- [cppreference.com - Floating Point Types](https://en.cppreference.com/w/cpp/language/types)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Floating Point: double (64-bit)
(def x 3.14)  ; double
(def y 3.141592653589793)  ; double
```

**Special features:**
- double is 64-bit IEEE 754
- float is available, but double is standard
- All floating point numbers are double

**Further reading:**
- [Clojure Documentation - Numbers](https://clojure.org/reference/data_structures#Numbers)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Floating Point: single-float (32-bit), double-float (64-bit)
(defvar x 3.14s0)  ; single-float (32-bit)
(defvar y 3.141592653589793d0)  ; double-float (64-bit)
```

**Special features:**
- single-float is 32-bit
- double-float is 64-bit
- short-float and long-float are implementation-defined

**Further reading:**
- [Common Lisp HyperSpec - Floating Point Types](http://www.lispworks.com/documentation/HyperSpec/Body/t_short_.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Floating Point: Float32 (32-bit), Float64 (64-bit)
x : Float32 = 3.14_f32
y : Float64 = 3.141592653589793
```

**Special features:**
- Float32 is 32-bit IEEE 754
- Float64 is 64-bit IEEE 754
- Float is an alias for Float64
- All sizes are guaranteed

**Further reading:**
- [Crystal Documentation - Floats](https://crystal-lang.org/reference/1.11/syntax_and_semantics/literals/floats.html)

</TabItem>
<TabItem value="d" label="D">

```d
// Floating Point: float (32-bit), double (64-bit)
float f = 3.14f;  // 32-bit
double d = 3.141592653589793;  // 64-bit
```

**Special features:**
- float is 32-bit IEEE 754
- double is 64-bit IEEE 754
- real is extended precision (typically 80-bit or 64-bit)
- ifloat, idouble, ireal are imaginary types

**Further reading:**
- [D Language Specification - Floating Point Types](https://dlang.org/spec/type.html#floating-point-types)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Floating Point: double (64-bit)
double x = 3.14;
double y = 3.141592653589793;
```

**Special features:**
- double is 64-bit IEEE 754
- float is not available, only double
- All floating point numbers are double

**Further reading:**
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

**Special features:**
- REAL_32 (32-bit) and REAL_64 (64-bit) are defined in the ECMA-367 standard
- `REAL` is an alias for `REAL_32`, `DOUBLE` is an alias for `REAL_64`
- All floating point types are IEEE 754 and expanded classes (value types)

**Further reading:**
- [Eiffel ECMA-367 Standard](https://www.ecma-international.org/publications-and-standards/standards/ecma-367/)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Floating Point: float (64-bit)
x = 3.14  # float (64-bit)
y = 3.141592653589793  # float (64-bit)
```

**Special features:**
- float is 64-bit IEEE 754
- No 32-bit float types
- All floating point numbers are 64-bit

**Further reading:**
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

**Special features:**
- Float is 64-bit IEEE 754
- No 32-bit float types
- All floating point numbers are 64-bit

**Further reading:**
- [Elm Documentation - Numbers](https://guide.elm-lang.org/types/numbers.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% Floating Point: float (64-bit)
X = 3.14,  % float (64-bit)
Y = 3.141592653589793.  % float (64-bit)
```

**Special features:**
- float is 64-bit IEEE 754
- No 32-bit float types
- All floating point numbers are 64-bit

**Further reading:**
- [Erlang Documentation - Data Types](https://www.erlang.org/doc/reference_manual/data_types.html#floating-point-numbers)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Floating Point: float32 (32-bit), float (64-bit)
let f: float32 = 3.14f  // 32-bit
let d: float = 3.141592653589793  // 64-bit
```

**Special features:**
- float32 is 32-bit IEEE 754
- float is 64-bit IEEE 754 (alias for System.Double)
- All sizes are guaranteed

**Further reading:**
- [F# Documentation - Numeric Types](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/basic-types)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Floating Point: REAL (implementation-defined), DOUBLE PRECISION (64-bit)
REAL :: x = 3.14  ! implementation-defined
DOUBLE PRECISION :: y = 3.141592653589793D0  ! 64-bit
```

**Special features:**
- REAL is implementation-defined (typically 32-bit or 64-bit)
- DOUBLE PRECISION is guaranteed 64-bit
- REAL(KIND=4) and REAL(KIND=8) for explicit sizes

**Further reading:**
- [Fortran Standard - Floating Point Types](https://gcc.gnu.org/onlinedocs/gfortran/Floating-point-types.html)

</TabItem>
<TabItem value="gleam" label="Gleam">

```erlang
// Floating Point: Float (64-bit)
let x = 3.14  // Float (64-bit)
let y = 3.141592653589793  // Float (64-bit)
```

**Special features:**
- Float is 64-bit IEEE 754
- No 32-bit float types
- All floating point numbers are 64-bit

**Further reading:**
- [Gleam Documentation - Types](https://gleam.run/documentation/tour/types/)

</TabItem>
<TabItem value="go" label="Go">

```go
// Floating Point: float32 (32-bit), float64 (64-bit)
var f float32 = 3.14  // 32-bit
var d float64 = 3.141592653589793  // 64-bit
```

**Special features:**
- float32 is 32-bit IEEE 754
- float64 is 64-bit IEEE 754
- All sizes are guaranteed

**Further reading:**
- [Go Language Specification - Floating Point Types](https://go.dev/ref/spec#Numeric_types)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Floating Point: float (32-bit), double (64-bit)
float f = 3.14f  // 32-bit
double d = 3.141592653589793  // 64-bit
```

**Special features:**
- float is 32-bit IEEE 754
- double is 64-bit IEEE 754
- All sizes are guaranteed
- Autoboxing to wrapper classes (Float, Double)

**Further reading:**
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

**Special features:**
- Float is 32-bit IEEE 754
- Double is 64-bit IEEE 754
- All sizes are guaranteed

**Further reading:**
- [Haskell Documentation - Floating Point Types](https://www.haskell.org/tutorial/numbers.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Floating Point: Float (target-dependent, typischerweise 64-bit)
var x: Float = 3.14;
var y: Float = 3.141592653589793;
```

**Special features:**
- Float is target-dependent (typically 64-bit)
- No explicit size specifications for 32/64-bit
- Size depends on compiler target

**Further reading:**
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

**Special features:**
- Double is 64-bit IEEE 754
- No 32-bit float types
- All floating point numbers are 64-bit

**Further reading:**
- [Idris Documentation - Types](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html#types)

</TabItem>
<TabItem value="java" label="Java">

```java
// Floating Point: float (32-bit), double (64-bit)
float f = 3.14f;  // 32-bit
double d = 3.141592653589793;  // 64-bit
```

**Special features:**
- float is 32-bit IEEE 754
- double is 64-bit IEEE 754
- All sizes are guaranteed
- Autoboxing to wrapper classes (Float, Double)

**Further reading:**
- [Oracle Java Documentation - Floating Point Types](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Floating Point: number (64-bit)
let x = 3.14;  // number (64-bit)
let y = 3.141592653589793;  // number (64-bit)
```

**Special features:**
- number is 64-bit IEEE 754 (double precision)
- No 32-bit float types
- All floating point numbers are 64-bit

**Further reading:**
- [MDN Web Docs - Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Floating Point: Float16 (16-bit), Float32 (32-bit), Float64 (64-bit)
x::Float16 = Float16(3.14)  # 16-bit
y::Float32 = 3.14f0  # 32-bit
z::Float64 = 3.141592653589793  # 64-bit
```

**Special features:**
- Float16 (16-bit), Float32 (32-bit), Float64 (64-bit) are floating point types
- All sizes are guaranteed
- Float is an alias for Float64

**Further reading:**
- [Julia Documentation - Floating Point Numbers](https://docs.julialang.org/en/v1/manual/integers-and-floating-point-numbers/)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Floating Point: float64 (64-bit)
val x: float64 = 3.141592653589793
val y: float64 = 2.718281828459045
```

**Special features:**
- Only `float64` (64-bit IEEE 754) available
- No 32-bit Float type
- Literals like `3.14` are automatically interpreted as `float64`

**Further reading:**
- [Koka Standard Library - float64](https://koka-lang.github.io/koka/doc/std_core_types.html#type-float64)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Floating Point: Float (32-bit), Double (64-bit)
val f: Float = 3.14f  // 32-bit
val d: Double = 3.141592653589793  // 64-bit
```

**Special features:**
- Float is 32-bit IEEE 754
- Double is 64-bit IEEE 754
- All sizes are guaranteed
- All types have nullable variants (Float?, Double?)

**Further reading:**
- [Kotlin Documentation - Numbers](https://kotlinlang.org/docs/numbers.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Floating Point: Float (64-bit only)
def f : Float := 3.14
def d : Float := 3.141592653589793
```

**Special features:**
- Only `Float` (64-bit IEEE 754) available, no 32-bit Float type
- Standard type for floating point numbers
- Supports standard arithmetic and mathematical functions
- `OfScientific` type class for literal conversion

**Further reading:**
- [Lean 4 Documentation - Dependent Type Theory](https://lean-lang.org/theorem_proving_in_lean4/dependent_type_theory.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Floating Point: number (64-bit)
local x = 3.14  -- number (64-bit)
local y = 3.141592653589793  -- number (64-bit)
```

**Special features:**
- number is 64-bit IEEE 754 (double precision)
- No 32-bit float types
- All floating point numbers are 64-bit

**Further reading:**
- [Lua Documentation - Numbers](https://www.lua.org/manual/5.4/manual.html#2.1)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% Floating Point: single (32-bit), double (64-bit)
x = single(3.14);  % 32-bit
y = 3.141592653589793;  % double (64-bit, default)
```

**Special features:**
- single is 32-bit IEEE 754
- double is 64-bit IEEE 754 (default)
- All sizes are guaranteed

**Further reading:**
- [MATLAB Documentation - Floating Point Types](https://www.mathworks.com/help/matlab/numeric-types.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```mercury
% Floating Point: float (64-bit double precision)
:- pred main(io::di, io::uo) is det.
main(!IO) :-
    X = 3.14,                          % float (64-bit)
    Y = 3.141592653589793,             % float (64-bit)
    Z = 1.0e10,                        % Scientific notation
    io.write_float(X, !IO), io.nl(!IO),
    io.write_float(Y, !IO), io.nl(!IO),
    io.write_float(Z, !IO), io.nl(!IO).
```

**Special features:**
- Mercury has only one floating point type: `float` (corresponds to C `double`, 64-bit IEEE 754)
- No 32-bit `float` type available
- Scientific notation is supported
- Standard mathematical operations in the `float` module

**Further reading:**
- [The Mercury Standard Library - float](https://www.mercurylang.org/information/doc-release/mercury_library/float.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# Floating Point: Float32 (32-bit), Float64 (64-bit)
var x: Float32 = 3.14
var y: Float64 = 3.141592653589793
```

**Special features:**
- Float32 is 32-bit IEEE 754
- Float64 is 64-bit IEEE 754
- All sizes are guaranteed
- All types are immutable

**Further reading:**
- [Mojo Documentation - Types](https://docs.modular.com/mojo/manual/basics/types.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Floating Point: float32 (32-bit), float64 (64-bit)
var f: float32 = 3.14'f32
var d: float64 = 3.141592653589793
```

**Special features:**
- float32 is 32-bit IEEE 754
- float64 is 64-bit IEEE 754
- float is an alias for float64
- All sizes are guaranteed

**Further reading:**
- [Nim Documentation - Floats](https://nim-lang.org/docs/manual.html#types-floats)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Floating Point: float (32-bit), double (64-bit)
float f = 3.14f;  // 32-bit
double d = 3.141592653589793;  // 64-bit
```

**Special features:**
- float is 32-bit IEEE 754
- double is 64-bit IEEE 754
- All sizes are guaranteed (C-compatible)

**Further reading:**
- [Objective-C Documentation - Types](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Floating Point: Single (32-bit), Double (64-bit)
var
  f: Single = 3.14;  // 32-bit
  d: Double = 3.141592653589793;  // 64-bit
```

**Special features:**
- Single is 32-bit IEEE 754
- Double is 64-bit IEEE 754
- All sizes are guaranteed
- Extended is extended precision (typically 80-bit)

**Further reading:**
- [Free Pascal Documentation - Real Types](https://www.freepascal.org/docs-html/ref/refse9.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Floating Point: float (64-bit) *)
let x = 3.14  (* float (64-bit) *)
let y = 3.141592653589793  (* float (64-bit) *)
```

**Special features:**
- float is 64-bit IEEE 754
- No 32-bit float types
- All floating point numbers are 64-bit

**Further reading:**
- [OCaml Documentation - Floating Point](https://ocaml.org/manual/coreexamples.html#s:types)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
% Floating Point: single (32-bit), double (64-bit)
x = single(3.14);  % 32-bit
y = 3.141592653589793;  % double (64-bit, default)
```

**Special features:**
- single is 32-bit IEEE 754
- double is 64-bit IEEE 754 (default)
- All sizes are guaranteed

**Further reading:**
- [GNU Octave Documentation - Numeric Data Types](https://octave.org/doc/v8.1.0/Numeric-Data-Types.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Floating Point: f32 (32-bit), f64 (64-bit)
f: f32 = 3.14
d: f64 = 3.141592653589793
```

**Special features:**
- f32 is 32-bit IEEE 754
- f64 is 64-bit IEEE 754
- All sizes are guaranteed

**Further reading:**
- [Odin Documentation - Types](https://odin-lang.org/docs/overview/#types)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Floating Point: number (64-bit, typischerweise)
my $x = 3.14;  # number (64-bit)
my $y = 3.141592653589793;  # number (64-bit)
```

**Special features:**
- number is typically 64-bit IEEE 754 (double precision)
- No explicit types for 32/64-bit
- Size is implementation-defined

**Further reading:**
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

**Special features:**
- float is 64-bit IEEE 754 (double precision)
- No 32-bit float types
- All floating point numbers are 64-bit

**Further reading:**
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

**Special features:**
- Number is 64-bit IEEE 754
- No 32-bit float types
- All floating point numbers are 64-bit

**Further reading:**
- [PureScript Documentation - Numbers](https://github.com/purescript/documentation/blob/master/language/Types.md)

</TabItem>
<TabItem value="python" label="Python">

```python
# Floating Point: float (64-bit)
x = 3.14  # float (64-bit)
y = 3.141592653589793  # float (64-bit)
```

**Special features:**
- float is 64-bit IEEE 754 (double precision)
- No 32-bit float types
- All floating point numbers are 64-bit

**Further reading:**
- [Python Documentation - Floating Point](https://docs.python.org/3/tutorial/floatingpoint.html)

</TabItem>
<TabItem value="r" label="R">

```r
# Floating Point: numeric (64-bit)
x <- 3.14  # numeric (64-bit)
y <- 3.141592653589793  # numeric (64-bit)
```

**Special features:**
- numeric is 64-bit IEEE 754 (double precision)
- No 32-bit float types
- All floating point numbers are 64-bit

**Further reading:**
- [R Documentation - Numeric Types](https://cran.r-project.org/doc/manuals/r-release/R-intro.html#Numeric-vectors)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
; Floating Point: flonum (64-bit)
(define x 3.14)                ; flonum (64-bit)
(define y 3.141592653589793)   ; flonum (64-bit)
```

**Special features:**
- flonum is 64-bit IEEE 754
- No 32-bit float types
- All floating point numbers are 64-bit

**Further reading:**
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

**Special features:**
- F32 is 32-bit IEEE 754
- F64 is 64-bit IEEE 754
- All sizes are guaranteed
- All types are immutable

**Further reading:**
- [Roc Documentation - Types](https://www.roc-lang.org/tutorial#types)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Floating Point: Float (64-bit)
x = 3.14  # Float (64-bit)
y = 3.141592653589793  # Float (64-bit)
```

**Special features:**
- Float is 64-bit IEEE 754 (double precision)
- No 32-bit float types
- All floating point numbers are 64-bit

**Further reading:**
- [Ruby Documentation - Numeric](https://ruby-doc.org/core-3.1.0/Numeric.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Floating Point: f32 (32-bit), f64 (64-bit)
let f: f32 = 3.14;  // 32-bit
let d: f64 = 3.141592653589793;  // 64-bit
```

**Special features:**
- f32 is 32-bit IEEE 754
- f64 is 64-bit IEEE 754
- All sizes are guaranteed

**Further reading:**
- [The Rust Book - Floating Point Types](https://doc.rust-lang.org/book/ch03-02-data-types.html#floating-point-types)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Floating Point: Float (32-bit), Double (64-bit)
val f: Float = 3.14f  // 32-bit
val d: Double = 3.141592653589793  // 64-bit
```

**Special features:**
- Float is 32-bit IEEE 754
- Double is 64-bit IEEE 754
- All sizes are guaranteed
- Autoboxing to wrapper classes (java.lang.Float, java.lang.Double)

**Further reading:**
- [Scala Documentation - Numeric Types](https://docs.scala-lang.org/tour/unified-types.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; Floating Point: flonum (64-bit, typically)
(define x 3.14)  ; flonum (64-bit)
(define y 3.141592653589793)  ; flonum (64-bit)
```

**Special features:**
- flonum is typically 64-bit IEEE 754
- No explicit types for 32/64-bit
- Size is implementation-defined

**Further reading:**
- [Scheme Documentation - Numbers](https://www.scheme.com/tspl4/objects.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Floating Point: Float (32-bit), Double (64-bit)
let f: Float = 3.14  // 32-bit
let d: Double = 3.141592653589793  // 64-bit
```

**Special features:**
- Float is 32-bit IEEE 754
- Double is 64-bit IEEE 754
- All sizes are guaranteed

**Further reading:**
- [Swift Documentation - Floating Point Numbers](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/thebasics/#Floating-Point-Numbers)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Floating Point: number (64-bit)
let x: number = 3.14;  // number (64-bit)
let y: number = 3.141592653589793;  // number (64-bit)
```

**Special features:**
- number is 64-bit IEEE 754 (double precision)
- No 32-bit float types
- All floating-point numbers are 64-bit (JavaScript-compatible)

**Further reading:**
- [TypeScript Handbook - Basic Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Floating Point: Single (32-bit), Double (64-bit)
Dim f As Single = 3.14F  ' 32-bit
Dim d As Double = 3.141592653589793  ' 64-bit
```

**Special features:**
- Single is 32-bit IEEE 754
- Double is 64-bit IEEE 754
- All sizes are guaranteed
- All types are .NET types (System.Single, System.Double)

**Further reading:**
- [Microsoft VB.NET Documentation - Floating Point Types](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/data-types/floating-point-types)

</TabItem>
<TabItem value="v" label="V">

```v
// Floating Point: f32 (32-bit), f64 (64-bit)
mut f := f32(3.14)
mut d := f64(3.141592653589793)
```

**Special features:**
- f32 is 32-bit IEEE 754
- f64 is 64-bit IEEE 754
- All sizes are guaranteed

**Further reading:**
- [V Documentation - Types](https://github.com/vlang/v/blob/master/doc/docs.md#types)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Floating Point: Real (machine precision typically 64-bit) *)
x = 3.14                        (* Real, machine precision *)
y = 3.141592653589793`           (* Real with explicit machine precision *)
z = N[Pi, 50]                    (* Real with 50 digits precision *)
```

**Special features:**
- Real is typically 64-bit IEEE 754 (machine precision)
- Arbitrary-precision arithmetic available via `N[expr, n]`
- No fixed 32/64-bit types, but machine precision corresponds to 64-bit

**Further reading:**
- [Wolfram Language Documentation - Numbers](https://reference.wolfram.com/language/guide/Numbers.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Floating Point: f16 (16-bit), f32 (32-bit), f64 (64-bit), f80, f128
const f16_val: f16 = 3.14;  // 16-bit
const f32_val: f32 = 3.14;  // 32-bit
const f64_val: f64 = 3.141592653589793;  // 64-bit
```

**Special features:**
- f16 (16-bit), f32 (32-bit), f64 (64-bit) are floating point types
- f80 and f128 are extended precision (when available)
- All sizes are guaranteed

**Further reading:**
- [Zig Documentation - Primitive Types](https://ziglang.org/documentation/0.11.0/#Primitive-Types)

</TabItem>
</Tabs>


## 3.2.5. Boolean

Truth values with two possible states: true or false.

### Languages {#sprachen}

<Tabs availableTabs={['ada', 'c', 'carbon', 'csharp', 'cpp', 'clojure', 'common-lisp', 'crystal', 'd', 'dart', 'eiffel', 'elixir', 'elm', 'erlang', 'fsharp', 'fortran', 'gleam', 'go', 'groovy', 'haskell', 'haxe', 'idris', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'lua', 'matlab', 'mercury', 'mojo', 'nim', 'objective-c', 'object-pascal', 'ocaml', 'octave', 'odin', 'php', 'purescript', 'python', 'r', 'racket', 'roc', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'vbnet', 'v', 'wolfram-language', 'zig']} yellowTabs={['perl']}>
<TabItem value="ada" label="Ada">

```ada
-- Boolean: Boolean type
flag : Boolean := True;
result : Boolean := False;
```

**Special features:**
- Boolean is an enumeration type with two values: True and False
- Standard Boolean type is available
- All Boolean values are immutable

**Further reading:**
- [Ada Reference Manual - Boolean Type](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-3-5-3.html)

</TabItem>
<TabItem value="c" label="C">

```c
// Boolean: _Bool (since C99), stdbool.h for bool
#include <stdbool.h>
bool flag = true;
bool result = false;
```

**Special features:**
- _Bool is available since C99
- stdbool.h defines bool, true, false as macros
- Before C99: int with 0/1 as workaround

**Further reading:**
- [C Standard - Boolean Type](https://en.cppreference.com/w/c/language/bool_constant)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Boolean: bool
var flag: bool = true;
var result: bool = false;
```

**Special features:**
- bool is a primitive type
- true and false are the only values
- Experimental language, syntax may still change

**Further reading:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Boolean: bool
bool flag = true;
bool result = false;
```

**Special features:**
- bool is a primitive type (alias for System.Boolean)
- true and false are the only values
- All Boolean values are immutable

**Further reading:**
- [Microsoft C# Documentation - Boolean Type](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/bool)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Boolean: bool
bool flag = true;
bool result = false;
```

**Special features:**
- bool is a primitive type (since C++98)
- true and false are the only values
- Can be implicitly converted to int (true=1, false=0)

**Further reading:**
- [cppreference.com - Boolean Type](https://en.cppreference.com/w/cpp/language/types)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Boolean: boolean
(def flag true)  ; boolean
(def result false)  ; boolean
```

**Special features:**
- boolean is a primitive type
- true and false are the only values
- nil is also "falsy" in boolean contexts

**Further reading:**
- [Clojure Documentation - Booleans](https://clojure.org/reference/data_structures#Booleans)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Boolean: t (true), nil (false)
(defvar flag t)  ; true
(defvar result nil)  ; false
```

**Special features:**
- t is true, nil is false
- All other values are also "truthy"
- nil is the only "falsy" value

**Further reading:**
- [Common Lisp HyperSpec - Boolean](http://www.lispworks.com/documentation/HyperSpec/Body/t_boolean.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Boolean: Bool
flag : Bool = true
result : Bool = false
```

**Special features:**
- Bool is a primitive type
- true and false are the only values
- nil is also "falsy" in boolean contexts

**Further reading:**
- [Crystal Documentation - Booleans](https://crystal-lang.org/reference/1.11/syntax_and_semantics/literals/booleans.html)

</TabItem>
<TabItem value="d" label="D">

```d
// Boolean: bool
bool flag = true;
bool result = false;
```

**Special features:**
- bool is a primitive type
- true and false are the only values
- Can be implicitly converted to int (true=1, false=0)

**Further reading:**
- [D Language Specification - Boolean Type](https://dlang.org/spec/type.html#basic-data-types)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Boolean: bool
bool flag = true;
bool result = false;
```

**Special features:**
- bool is a primitive type
- true and false are the only values
- All Boolean values are immutable

**Further reading:**
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

**Special features:**
- BOOLEAN is a primitive type
- True and False are the only values
- All Boolean values are immutable

**Further reading:**
- [Eiffel Documentation - Boolean Type](https://www.eiffel.org/doc/eiffel/Eiffel_Standard)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Boolean: boolean (atoms :true/:false)
flag = true  # atom :true
result = false  # atom :false
```

**Special features:**
- boolean are atoms :true and :false
- nil is also "falsy" in boolean contexts
- All values are immutable

**Further reading:**
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

**Special features:**
- Bool is a primitive type
- True and False are the only values
- All Boolean values are immutable

**Further reading:**
- [Elm Documentation - Booleans](https://guide.elm-lang.org/types/booleans.html)

</TabItem>
<TabItem value="erlang" label="Erlang">
```erlang
% Boolean: boolean (atoms true/false)
Flag = true,  % atom true
Result = false.  % atom false
```

**Special features:**
- boolean are atoms `true` and `false`
- All values are immutable
- Only `false` is falsy; there is no `nil` in Erlang

**Further reading:**
- [Erlang Documentation - Booleans](https://www.erlang.org/doc/reference_manual/data_types.html#boolean)
</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Boolean: bool
let flag = true
let result = false
```

**Special features:**
- bool is a primitive type (alias for System.Boolean)
- true and false are the only values
- All Boolean values are immutable

**Further reading:**
- [F# Documentation - Boolean Type](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/basic-types)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Boolean: LOGICAL
LOGICAL :: flag = .TRUE.
LOGICAL :: result = .FALSE.
```

**Special features:**
- LOGICAL is a primitive type
- `.TRUE.` and `.FALSE.` are the only logical literals
- LOGICAL variables can be declared with different KINDs

**Further reading:**
- [Fortran Standard - Logical Type](https://gcc.gnu.org/onlinedocs/gfortran/LOGICAL.html)

</TabItem>
<TabItem value="gleam" label="Gleam">

```erlang
// Boolean: Bool
let flag = True
let result = False
```

**Special features:**
- Bool is a primitive type
- True and False are the only values
- All Boolean values are immutable

**Further reading:**
- [Gleam Documentation - Types](https://gleam.run/documentation/tour/types/)

</TabItem>
<TabItem value="go" label="Go">

```go
// Boolean: bool
var flag bool = true
var result bool = false
```

**Special features:**
- bool is a primitive type
- true and false are the only values
- All Boolean values are immutable

**Further reading:**
- [Go Language Specification - Boolean Type](https://go.dev/ref/spec#Boolean_types)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Boolean: boolean
boolean flag = true
boolean result = false
```

**Special features:**
- boolean is a primitive type
- true and false are the only values
- Autoboxing to wrapper class (Boolean)

**Further reading:**
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

**Special features:**
- Bool is a primitive type
- True and False are the only values
- All Boolean values are immutable

**Further reading:**
- [Haskell Documentation - Boolean Type](https://www.haskell.org/tutorial/basictypes.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Boolean: Bool
var flag: Bool = true;
var result: Bool = false;
```

**Special features:**
- Bool is a primitive type
- true and false are the only values
- All Boolean values are immutable

**Further reading:**
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

**Special features:**
- Bool is a primitive type
- True and False are the only values
- All Boolean values are immutable

**Further reading:**
- [Idris Documentation - Types](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html#types)

</TabItem>
<TabItem value="java" label="Java">

```java
// Boolean: boolean
boolean flag = true;
boolean result = false;
```

**Special features:**
- boolean is a primitive type
- true and false are the only values
- Autoboxing to wrapper class (Boolean)

**Further reading:**
- [Oracle Java Documentation - Boolean Type](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Boolean: boolean
let flag = true;
let result = false;
```

**Special features:**
- boolean is a primitive type
- true and false are the only values
- Many values are "truthy" or "falsy" in boolean contexts

**Further reading:**
- [MDN Web Docs - Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Boolean: Bool
flag::Bool = true
result::Bool = false
```

**Special features:**
- Bool is a primitive type
- true and false are the only values
- All Boolean values are immutable

**Further reading:**
- [Julia Documentation - Booleans](https://docs.julialang.org/en/v1/manual/mathematical-operations/#Boolean-Expressions)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Boolean: bool
val flag: bool = True
val result: bool = False

// Logical operators
val and-result = flag && result
val or-result = flag || result
val not-result = !flag
```

**Special features:**
- `bool` with constructors `True` and `False`
- Defined as algebraic data type: `type bool { True; False }`
- Logical operators: `&&`, `||`, `!`
- Pattern matching on Bool values is possible

**Further reading:**
- [Koka Standard Library - bool](https://koka-lang.github.io/koka/doc/std_core_types.html#type-bool)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Boolean: Boolean
val flag: Boolean = true
val result: Boolean = false
```

**Special features:**
- Boolean is a primitive type
- true and false are the only values
- All types have nullable variants (Boolean?)

**Further reading:**
- [Kotlin Documentation - Booleans](https://kotlinlang.org/docs/basic-types.html#booleans)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Boolean: Bool
def flag : Bool := true
def result : Bool := false

-- Logical operators
def andResult : Bool := true && false  -- false
def orResult : Bool := true || false   -- true
def notResult : Bool := !true          -- false
```

**Special features:**
- `Bool` is an inductive type with constructors `true` and `false`
- Logical operators: `&&` (and), `||` (or), `!` (not)
- Pattern matching on `Bool` is possible
- Used in `if`/`then`/`else` expressions

**Further reading:**
- [Lean 4 Documentation - Dependent Type Theory](https://lean-lang.org/theorem_proving_in_lean4/dependent_type_theory.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Boolean: boolean
local flag = true  -- boolean
local result = false  -- boolean
```

**Special features:**
- boolean is a primitive type (since Lua 5.0)
- true and false are the only values
- nil is also "falsy" in boolean contexts

**Further reading:**
- [Lua Documentation - Booleans](https://www.lua.org/manual/5.4/manual.html#2.1)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% Boolean: logical
flag = true;  % logical
result = false;  % logical
```

**Special features:**
- logical is a primitive type
- true and false are the only values
- All Boolean values are immutable

**Further reading:**
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

**Special features:**
- `bool` is defined as ADT: `:- type bool ---> yes ; no.`
- The values are `yes` and `no` (not `true`/`false`)
- Boolean operators in the `bool` module: `bool.and/2`, `bool.or/2`, `bool.not/1`
- Logical tests in Mercury use `semidet` predicates rather than Boolean values

**Further reading:**
- [The Mercury Standard Library - bool](https://www.mercurylang.org/information/doc-release/mercury_library/bool.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# Boolean: Bool
var flag: Bool = True
var result: Bool = False
```

**Special features:**
- Bool is a primitive type
- True and False are the only values
- All Boolean values are immutable

**Further reading:**
- [Mojo Documentation - Types](https://docs.modular.com/mojo/manual/basics/types.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Boolean: bool
var flag: bool = true
var result: bool = false
```

**Special features:**
- `bool` is a primitive type
- `true` and `false` are the only values
- Boolean operators: `and`, `or`, `not`, `xor`

**Further reading:**
- [Nim Documentation - Booleans](https://nim-lang.org/docs/manual.html#types-boolean-type)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Boolean: BOOL
BOOL flag = YES;
BOOL result = NO;
```

**Special features:**
- BOOL is a typedef for signed char
- YES and NO are the values (1 and 0)
- Can be implicitly converted to int

**Further reading:**
- [Objective-C Documentation - Boolean Type](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Boolean: Boolean
var
  flag: Boolean = True;
  result: Boolean = False;
```

**Special features:**
- Boolean is a primitive type
- True and False are the values
- All Boolean values are immutable

**Further reading:**
- [Free Pascal Documentation - Boolean Type](https://www.freepascal.org/docs-html/ref/refse8.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Boolean: bool *)
let flag = true
let result = false
```

**Special features:**
- bool is a primitive type
- true and false are the only values
- All Boolean values are immutable

**Further reading:**
- [OCaml Documentation - Booleans](https://ocaml.org/manual/coreexamples.html#s:types)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
% Boolean: logical
flag = true;  % logical
result = false;  % logical
```

**Special features:**
- logical is a primitive type
- true and false are the only values
- All Boolean values are immutable

**Further reading:**
- [GNU Octave Documentation - Logical Values](https://octave.org/doc/v8.1.0/Logical-Values.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Boolean: bool
flag: bool = true
result: bool = false
```

**Special features:**
- bool is a primitive type
- true and false are the only values
- All Boolean values are immutable

**Further reading:**
- [Odin Documentation - Types](https://odin-lang.org/docs/overview/#types)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Boolean: not directly supported, 1/0 or ""/"1"
my $flag = 1;  # true
my $result = 0;  # false
```

**Special features:**
- Perl has no direct Boolean type
- 1/0 or ""/"1" are used as Boolean
- Many values are "truthy" or "falsy"

**Further reading:**
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

**Special features:**
- bool is a primitive type
- true and false are the only values
- Many values are "truthy" or "falsy" in boolean contexts

**Further reading:**
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

**Special features:**
- Boolean is a primitive type
- true and false are the only values
- All Boolean values are immutable

**Further reading:**
- [PureScript Documentation](https://github.com/purescript/documentation/blob/master/language/Types.md)

</TabItem>
<TabItem value="python" label="Python">

```python
# Boolean: bool
flag = True
result = False
```

**Special features:**
- bool is a primitive type (subtype of int)
- True and False are the only values
- Many values are "truthy" or "falsy" in boolean contexts

**Further reading:**
- [Python Documentation - Boolean Type](https://docs.python.org/3/library/stdtypes.html#boolean-values)

</TabItem>
<TabItem value="r" label="R">

```r
# Boolean: logical
flag <- TRUE  # logical
result <- FALSE  # logical
```

**Special features:**
- logical is a primitive type
- TRUE and FALSE are the values
- All Boolean values are immutable

**Further reading:**
- [R Documentation - Logical Vectors](https://cran.r-project.org/doc/manuals/r-release/R-intro.html#Logical-vectors)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
; Boolean
(define flag #t)    ; boolean (true)
(define result #f)  ; boolean (false)
```

**Special features:**
- boolean is a primitive type
- `#t` (true) and `#f` (false) are the values
- All Boolean values are immutable

**Further reading:**
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

**Special features:**
- Bool is a primitive type
- True and False are the only values
- All Boolean values are immutable

**Further reading:**
- [Roc Documentation - Types](https://www.roc-lang.org/tutorial#types)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Boolean: TrueClass/FalseClass
flag = true  # TrueClass
result = false  # FalseClass
```

**Special features:**
- true is TrueClass, false is FalseClass
- true and false are the only values
- nil is also "falsy" in boolean contexts

**Further reading:**
- [Ruby Documentation - Boolean](https://ruby-doc.org/core-3.1.0/TrueClass.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Boolean: bool
let flag: bool = true;
let result: bool = false;
```

**Special features:**
- bool is a primitive type
- true and false are the only values
- All Boolean values are immutable

**Further reading:**
- [The Rust Book - Boolean Type](https://doc.rust-lang.org/book/ch03-02-data-types.html#the-boolean-type)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Boolean: Boolean
val flag: Boolean = true
val result: Boolean = false
```

**Special features:**
- Boolean is a primitive type
- true and false are the only values
- Autoboxing to wrapper class (java.lang.Boolean)

**Further reading:**
- [Scala Documentation - Boolean Type](https://docs.scala-lang.org/tour/unified-types.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; Boolean: boolean
(define flag #t)  ; boolean (true)
(define result #f)  ; boolean (false)
```

**Special features:**
- boolean is a primitive type
- #t (true) and #f (false) are the values
- All Boolean values are immutable

**Further reading:**
- [Scheme Documentation - Booleans](https://www.scheme.com/tspl4/objects.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Boolean: Bool
let flag: Bool = true
let result: Bool = false
```

**Special features:**
- Bool is a primitive type
- true and false are the only values
- All Boolean values are immutable

**Further reading:**
- [Swift Documentation - Booleans](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/thebasics/#Booleans)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Boolean: boolean
let flag: boolean = true;
let result: boolean = false;
```

**Special features:**
- boolean is a primitive type
- true and false are the only values
- All Boolean values are immutable (JavaScript-compatible)

**Further reading:**
- [TypeScript Handbook - Basic Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Boolean: Boolean
Dim flag As Boolean = True
Dim result As Boolean = False
```

**Special features:**
- Boolean is a primitive type (alias for System.Boolean)
- True and False are the values
- All Boolean values are immutable

**Further reading:**
- [Microsoft VB.NET Documentation - Boolean Type](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/data-types/boolean-data-type)

</TabItem>
<TabItem value="v" label="V">

```v
// Boolean: bool
mut flag := true
mut result := false
```

**Special features:**
- bool is a primitive type
- true and false are the only values
- All Boolean values are immutable

**Further reading:**
- [V Documentation - Types](https://github.com/vlang/v/blob/master/doc/docs.md#types)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Boolean: True/False *)
flag = True
result = False
```

**Special features:**
- True and False are symbolic constants
- All Boolean values are immutable
- Symbolic evaluation is available

**Further reading:**
- [Wolfram Language Documentation - Booleans](https://reference.wolfram.com/language/guide/Booleans.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Boolean: bool
const flag: bool = true;
const result: bool = false;
```

**Special features:**
- bool is a primitive type
- true and false are the only values
- All Boolean values are immutable

**Further reading:**
- [Zig Documentation - Primitive Types](https://ziglang.org/documentation/0.11.0/#Primitive-Types)

</TabItem>
</Tabs>


## 3.2.6. Character

Single characters, typically Unicode codepoints or ASCII characters.

### Languages {#sprachen}

<Tabs availableTabs={['ada', 'c', 'carbon', 'csharp', 'cpp', 'clojure', 'common-lisp', 'crystal', 'd', 'eiffel', 'elm', 'fsharp', 'fortran', 'go', 'groovy', 'haskell', 'idris', 'java', 'julia', 'koka', 'kotlin', 'lean4', 'matlab', 'mercury', 'nim', 'objective-c', 'object-pascal', 'ocaml', 'octave', 'odin', 'purescript', 'racket', 'rust', 'scala', 'scheme', 'swift', 'vbnet']} yellowTabs={['elixir', 'erlang', 'zig']} orangeTabs={['dart', 'gleam', 'haxe', 'javascript', 'lua', 'mojo', 'perl', 'php', 'python', 'r', 'roc', 'ruby', 'typescript', 'v', 'wolfram-language']}>
<TabItem value="ada" label="Ada">

```ada
-- Character: Character (8-bit), Wide_Character, Wide_Wide_Character
ch : Character := 'A';
wide_ch : Wide_Character := 'Ä';
wide_wide_ch : Wide_Wide_Character := '🎉';
```

**Special features:**
- Character is 8-bit (ISO 8859-1)
- Wide_Character is 16-bit (Unicode BMP)
- Wide_Wide_Character is 32-bit (full Unicode)

**Further reading:**
- [Ada Reference Manual - Character Types](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-3-5-2.html)

</TabItem>
<TabItem value="c" label="C">

```c
// Character: char (8-bit)
char ch = 'A';
```

**Special features:**
- char is 8-bit (can be signed or unsigned, implementation-defined)
- No direct Unicode types
- wchar_t for wide characters (implementation-defined size)

**Further reading:**
- [C Standard - Character Types](https://en.cppreference.com/w/c/language/arithmetic_types)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Character: char
var ch: char = 'A';
```

**Special features:**
- char is a primitive type
- Experimental language, syntax may still change
- Unicode support is planned

**Further reading:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Character: char (16-bit Unicode)
char ch = 'A';
char unicode = '\u00E4';  // ä (Unicode character)
char newline = '\n';       // Escape-Sequenz
```

**Special features:**
- char is 16-bit Unicode (UTF-16 Code Unit)
- Characters outside the Basic Multilingual Plane (e.g. Emojis) require surrogate pairs and do not fit in a single `char`
- System.Char is the .NET type

**Further reading:**
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

**Special features:**
- char is 8-bit (can be signed or unsigned, implementation-defined)
- wchar_t is implementation-defined size
- char16_t (16-bit) and char32_t (32-bit) since C++11 for Unicode

**Further reading:**
- [cppreference.com - Character Types](https://en.cppreference.com/w/cpp/language/types)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Character: char
(def ch \A)  ; char
(def unicode \🎉)  ; char (Unicode)
```

**Special features:**
- char is a primitive type
- Supports Unicode characters
- All characters are immutable

**Further reading:**
- [Clojure Documentation - Characters](https://clojure.org/reference/data_structures#Characters)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Character: character
(defvar ch #\A)  ; character
(defvar unicode #\🎉)  ; character (Unicode)
```

**Special features:**
- character is a primitive type
- Supports Unicode characters
- All characters are immutable

**Further reading:**
- [Common Lisp HyperSpec - Character Type](http://www.lispworks.com/documentation/HyperSpec/Body/t_charac.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Character: Char (32-bit Unicode)
ch : Char = 'A'
unicode : Char = '🎉'
```

**Special features:**
- Char is 32-bit Unicode (UTF-32)
- Supports all Unicode characters
- All characters are immutable

**Further reading:**
- [Crystal Documentation - Characters](https://crystal-lang.org/reference/1.11/syntax_and_semantics/literals/char.html)

</TabItem>
<TabItem value="d" label="D">

```d
// Character: char (8-bit), wchar (16-bit), dchar (32-bit)
char ch = 'A';
wchar wch = 'Ä';
dchar dch = '🎉';
```

**Special features:**
- char is 8-bit (UTF-8 code unit)
- wchar is 16-bit (UTF-16 code unit)
- dchar is 32-bit (Unicode codepoint)

**Further reading:**
- [D Language Specification - Character Types](https://dlang.org/spec/type.html#basic-data-types)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Character: String (no separate character type)
String ch = 'A';
String unicode = '🎉';
```

**Special features:**
- Dart has no separate character type
- String with one character is used
- Supports Unicode characters

**Further reading:**
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
    uc := '%/9731/'  -- Unicode codepoint U+2603 (Snowman)
end
```

**Special features:**
- CHARACTER_8 (8-bit) and CHARACTER_32 (32-bit Unicode) are defined in the ECMA-367 standard
- `CHARACTER` is an alias for `CHARACTER_8`
- CHARACTER_32 provides full Unicode support
- All character types are expanded classes (value types)

**Further reading:**
- [Eiffel ECMA-367 Standard](https://www.ecma-international.org/publications-and-standards/standards/ecma-367/)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Character: charlist (no separate character type)
ch = ?A  # integer codepoint
unicode = ?🎉  # integer codepoint
```

**Special features:**
- Elixir has no separate character type
- ?X returns the codepoint as integer
- Supports Unicode characters

**Further reading:**
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

**Special features:**
- Char is a primitive type
- Supports Unicode characters
- All characters are immutable

**Further reading:**
- [Elm Documentation - Characters](https://package.elm-lang.org/packages/elm/core/latest/Char)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% Character: integer codepoint (no separate character type)
Ch = $A,  % integer codepoint
Unicode = $🎉.  % integer codepoint
```

**Special features:**
- Erlang has no separate character type
- $X returns the codepoint as integer
- Supports Unicode characters

**Further reading:**
- [Erlang Documentation - Characters](https://www.erlang.org/doc/reference_manual/data_types.html#characters)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Character: char (16-bit Unicode)
let ch: char = 'A'
let unicode: char = '\u00E9'  // é (BMP character)
```

**Special features:**
- char is 16-bit Unicode (UTF-16, one code unit)
- Characters outside the BMP (e.g. Emojis) require surrogate pairs and do not fit in a single `char`
- System.Char is the .NET type

**Further reading:**
- [F# Documentation - Characters](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/basic-types)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Character: CHARACTER
CHARACTER :: ch = 'A'
CHARACTER(LEN=10) :: name = 'Hallo'
```

**Special features:**
- CHARACTER is a primitive type
- Can have a length (CHARACTER(LEN=n))
- CHARACTER(LEN=*) for variable-length strings as parameters

**Further reading:**
- [Fortran Standard - Character Type](https://gcc.gnu.org/onlinedocs/gfortran/CHARACTER.html)

</TabItem>
<TabItem value="gleam" label="Gleam">

```erlang
// Character: String (no separate character type)
let ch = "A"  // String with one character
let unicode = "🎉"  // String with one character
```

**Special features:**
- Gleam has no separate character type
- String with one character is used
- Supports Unicode characters

**Further reading:**
- [Gleam Documentation - Types](https://gleam.run/documentation/tour/types/)

</TabItem>
<TabItem value="go" label="Go">

```go
// Character: rune (32-bit Unicode codepoint), byte (8-bit)
var ch rune = 'A'
var unicode rune = '🎉'
var b byte = 'A'  // 8-bit
```

**Special features:**
- rune is 32-bit Unicode codepoint (alias for int32)
- byte is 8-bit (alias for uint8)
- Supports all Unicode characters

**Further reading:**
- [Go Language Specification - Rune Type](https://go.dev/ref/spec#Rune_literals)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Character: char (16-bit Unicode / UTF-16)
char ch = 'A'
char unicode = '\u00E4' // ä
```

**Special features:**
- char is 16-bit Unicode (UTF-16 Code Unit)
- Supports characters of the Basic Multilingual Plane (U+0000 to U+FFFF)
- Autoboxing to wrapper class `Character`

**Further reading:**
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

**Special features:**
- Char is a primitive type
- Supports Unicode characters
- All characters are immutable

**Further reading:**
- [Haskell Documentation - Characters](https://www.haskell.org/tutorial/basictypes.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Character: String (no separate character type, target-dependent)
var ch: String = "A";
var unicode: String = "🎉";
```

**Special features:**
- Haxe has no separate character type
- String with one character is used
- Support depends on the target

**Further reading:**
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

**Special features:**
- Char is a primitive type
- Supports Unicode characters
- All characters are immutable

**Further reading:**
- [Idris Documentation - Types](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html#types)

</TabItem>
<TabItem value="java" label="Java">

```java
// Character: char (16-bit Unicode)
char ch = 'A';
char unicode = '\u00E9';  // é
char digit = '7';
```

**Special features:**
- char is 16-bit Unicode (UTF-16)
- Supports Basic Multilingual Plane (BMP) characters directly
- Supplementary Characters (e.g. Emojis) require surrogate pairs (`char[]` or `String`)
- Autoboxing to wrapper class (Character)

**Further reading:**
- [Oracle Java Documentation - Character Type](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Character: String (no separate character type)
let ch = 'A';
let unicode = '🎉';
```

**Special features:**
- JavaScript has no separate character type
- String with one character is used
- Supports Unicode characters (UTF-16)

**Further reading:**
- [MDN Web Docs - String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Character: Char (32-bit Unicode codepoint)
ch::Char = 'A'
unicode::Char = '🎉'
```

**Special features:**
- Char is 32-bit Unicode codepoint
- Supports all Unicode characters
- All characters are immutable

**Further reading:**
- [Julia Documentation - Characters](https://docs.julialang.org/en/v1/manual/strings/#Characters)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Character: char (Unicode codepoint)
val ch: char = 'A'
val unicode: char = '🎉'
```

**Special features:**
- `char` represents a Unicode codepoint
- Literals with single quotes
- Supports all Unicode characters

**Further reading:**
- [Koka Standard Library - char](https://koka-lang.github.io/koka/doc/std_core_types.html#type-char)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Character: Char (16-bit Unicode)
val ch: Char = 'A'
val unicode: Char = '🎉'
```

**Special features:**
- Char is 16-bit Unicode (UTF-16)
- Supports all Unicode characters
- All types have nullable variants (Char?)

**Further reading:**
- [Kotlin Documentation - Characters](https://kotlinlang.org/docs/basic-types.html#characters)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Character: Char (Unicode Scalar Value)
def ch : Char := 'A'
def unicode : Char := '🎉'
def newline : Char := '\n'
```

**Special features:**
- `Char` represents a Unicode Scalar Value
- Literals with single quotes
- Supports all Unicode characters
- Escape sequences like `\n`, `\t`, `\\` available

**Further reading:**
- [Lean 4 Documentation - Dependent Type Theory](https://lean-lang.org/theorem_proving_in_lean4/dependent_type_theory.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Character: string (no separate character type)
local ch = "A"  -- string with one character
local unicode = "🎉"  -- string with one character
```

**Special features:**
- Lua has no separate character type
- string with one character is used
- Supports Unicode characters (UTF-8)

**Further reading:**
- [Lua Documentation - Strings](https://www.lua.org/manual/5.4/manual.html#2.1)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% Character: char (no separate character type)
ch = 'A';  % char array
unicode = '🎉';  % char array
```

**Special features:**
- MATLAB has no separate character type
- char array with one character is used
- Supports Unicode characters

**Further reading:**
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

**Special features:**
- `char` represents a single Unicode character (Unicode codepoint)
- Character literals with single quotes: `'A'`, `'ä'`
- Conversion between `char` and `int` (Unicode codepoint) with `char.to_int/1` and `char.from_int/1`
- The `char` module provides classification predicates like `is_alpha/1`, `is_digit/1`, etc.

**Further reading:**
- [The Mercury Standard Library - char](https://www.mercurylang.org/information/doc-release/mercury_library/char.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# Character: String (no separate character type)
var ch: String = "A"
var unicode: String = "🎉"
```

**Special features:**
- Mojo has no separate character type
- String with one character is used
- Supports Unicode characters

**Further reading:**
- [Mojo Documentation - Types](https://docs.modular.com/mojo/manual/basics/types.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Character: char (8-bit)
var ch: char = 'A'
```

**Special features:**
- char is 8-bit
- No direct Unicode types
- Rune type for Unicode characters is available

**Further reading:**
- [Nim Documentation - Characters](https://nim-lang.org/docs/manual.html#types-characters)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Character: char (8-bit), unichar (16-bit Unicode)
char ch = 'A';
unichar unicode = L'🎉';
```

**Special features:**
- char is 8-bit
- unichar is 16-bit Unicode (UTF-16)
- Supports Unicode characters

**Further reading:**
- [Objective-C Documentation - Characters](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Character: Char (8-bit)
var
  ch: Char = 'A';
```

**Special features:**
- Char is 8-bit
- No direct Unicode types
- WideChar for wide characters is available (depending on compiler)

**Further reading:**
- [Free Pascal Documentation - Character Type](https://www.freepascal.org/docs-html/ref/refse8.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Character: char (8-bit) *)
let ch = 'A'
```

**Special features:**
- char is 8-bit
- No direct Unicode types
- String is used for Unicode characters

**Further reading:**
- [OCaml Documentation - Characters](https://ocaml.org/manual/coreexamples.html#s:types)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
% Character: char (no separate character type)
ch = 'A';  % char array
unicode = '🎉';  % char array
```

**Special features:**
- Octave has no separate character type
- char array with one character is used
- Supports Unicode characters

**Further reading:**
- [GNU Octave Documentation - Characters](https://octave.org/doc/v8.1.0/Characters.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Character: rune (32-bit Unicode codepoint)
ch: rune = 'A'
unicode: rune = '🎉'
```

**Special features:**
- rune is 32-bit Unicode codepoint
- Supports all Unicode characters
- All characters are immutable

**Further reading:**
- [Odin Documentation - Types](https://odin-lang.org/docs/overview/#types)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Character: string (no separate character type)
my $ch = "A";  # string with one character
my $unicode = "🎉";  # string with one character
```

**Special features:**
- Perl has no separate character type
- string with one character is used
- Supports Unicode characters (UTF-8)

**Further reading:**
- [Perl Documentation - Characters](https://perldoc.perl.org/perlunicode)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
// Character: string (no separate character type)
$ch = "A";  // string with one character
$unicode = "🎉";  // string with one character
?>
```

**Special features:**
- PHP has no separate character type
- string with one character is used
- Supports Unicode characters (UTF-8)

**Further reading:**
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

**Special features:**
- Char is a primitive type
- Supports Unicode characters
- All characters are immutable

**Further reading:**
- [PureScript Documentation](https://github.com/purescript/documentation/blob/master/language/Types.md)

</TabItem>
<TabItem value="python" label="Python">

```python
# Character: str (no separate character type)
ch = 'A'  # str with one character
unicode = '🎉'  # str with one character
```

**Special features:**
- Python has no separate character type
- str with one character is used
- Supports Unicode characters (UTF-8)

**Further reading:**
- [Python Documentation - Strings](https://docs.python.org/3/tutorial/introduction.html#strings)

</TabItem>
<TabItem value="r" label="R">

```r
# Character: character (no separate character type)
ch <- "A"  # character with one character
unicode <- "🎉"  # character with one character
```

**Special features:**
- R has no separate character type
- character with one character is used
- Supports Unicode characters

**Further reading:**
- [R Documentation - Character Vectors](https://cran.r-project.org/doc/manuals/r-release/R-intro.html#Character-vectors)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
; Character
(define ch #\A)       ; character
(define unicode #\λ)  ; character (Unicode)
```

**Special features:**
- character is a primitive type
- Supports Unicode characters
- All characters are immutable

**Further reading:**
- [Racket Documentation - Characters](https://docs.racket-lang.org/reference/characters.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Character: Str (no separate character type)
ch : Str
ch = "A"

unicode : Str
unicode = "🎉"
```

**Special features:**
- Roc has no separate character type
- Str with one character is used
- Supports Unicode characters

**Further reading:**
- [Roc Documentation - Types](https://www.roc-lang.org/tutorial#types)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Character: String (no separate character type)
ch = "A"  # String with one character
unicode = "🎉"  # String with one character
```

**Special features:**
- Ruby has no separate character type
- String with one character is used
- Supports Unicode characters (UTF-8)

**Further reading:**
- [Ruby Documentation - Strings](https://ruby-doc.org/core-3.1.0/String.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Character: char (32-bit Unicode codepoint)
let ch: char = 'A';
let unicode: char = '🎉';
```

**Special features:**
- char is 32-bit Unicode codepoint
- Supports all Unicode characters
- All characters are immutable

**Further reading:**
- [The Rust Book - Character Type](https://doc.rust-lang.org/book/ch03-02-data-types.html#the-character-type)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Character: Char (16-bit Unicode)
val ch: Char = 'A'
val unicode: Char = '\u00E9' // é (BMP-Zeichen)
```

**Special features:**
- Char is 16-bit Unicode (UTF-16 Code Unit)
- Supports Unicode characters of the Basic Multilingual Plane (U+0000 to U+FFFF)
- Characters outside the BMP (e.g. Emojis) require surrogate pairs as String
- Autoboxing to wrapper class (`java.lang.Character`)

**Further reading:**
- [Scala Documentation - Unified Types](https://docs.scala-lang.org/tour/unified-types.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; Character: character
(define ch #\A)  ; character
(define unicode #\🎉)  ; character (Unicode)
```

**Special features:**
- character is a primitive type
- Supports Unicode characters
- All characters are immutable

**Further reading:**
- [Scheme Documentation - Characters](https://www.scheme.com/tspl4/objects.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Character: Character (Unicode extended grapheme cluster)
let ch: Character = "A"
let unicode: Character = "🎉"
```

**Special features:**
- Character is a Unicode extended grapheme cluster
- Supports all Unicode characters
- Can contain multiple Unicode codepoints

**Further reading:**
- [Swift Documentation - Characters](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/stringsandcharacters/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Character: string (kein separater Character-Typ)
let ch: string = 'A';
let unicode: string = '🎉';
```

**Special features:**
- TypeScript has no separate Character type
- string with one character is used
- Supports Unicode characters (UTF-16, JavaScript-compatible)

**Further reading:**
- [TypeScript Handbook - Basic Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Character: Char (16-bit Unicode)
Dim ch As Char = "A"c
Dim unicode As Char = "🎉"c
```

**Special features:**
- Char is 16-bit Unicode (UTF-16)
- Supports all Unicode characters
- System.Char is the .NET type

**Further reading:**
- [Microsoft VB.NET Documentation - Char Type](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/data-types/char-data-type)

</TabItem>
<TabItem value="v" label="V">

```v
// Character: string (kein separater Character-Typ)
mut ch := "A"  // string with one character
mut unicode := "🎉"  // string with one character
```

**Special features:**
- V has no separate Character type
- string with one character is used
- Supports Unicode characters

**Further reading:**
- [V Documentation - Types](https://github.com/vlang/v/blob/master/doc/docs.md#types)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Character: String (kein separater Character-Typ) *)
ch = "A"           (* String with one character *)
unicode = "\[Alpha]" (* Unicode-Zeichen *)
```

**Special features:**
- Wolfram Language has no separate Character type
- String with one character is used
- Supports Unicode characters via `\[Name]` syntax

**Further reading:**
- [Wolfram Language Documentation - Strings](https://reference.wolfram.com/language/guide/Strings.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Character: u8 (8-bit), comptime (compile-time character)
const ch: u8 = 'A';
const unicode = '🎉';  // comptime character
```

**Special features:**
- u8 for 8-bit characters
- comptime for compile-time characters (Unicode)
- No direct Unicode types at runtime

**Further reading:**
- [Zig Documentation - Characters](https://ziglang.org/documentation/0.11.0/#Characters)

</TabItem>
</Tabs>


## 3.2.7. Structured Types

Types that consist of multiple named or unnamed components, such as structs, records, or tuples.

### Languages {#sprachen}

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

**Special features:**
- Record types are structured types with named components
- All components have names
- Access via dot notation

**Further reading:**
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

**Special features:**
- struct is a structured type with named components
- All components have names
- Access via dot notation

**Further reading:**
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

**Special features:**
- struct is a structured type with named components
- Experimental language, syntax may still change
- Access via dot notation

**Further reading:**
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

**Special features:**
- struct, class and record are structured types
- struct is a Value Type
- record is a structured type with automatic equality checking (since C# 9.0)

**Further reading:**
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

**Special features:**
- struct and class are structured types
- struct is public by default, class is private by default
- Access via dot notation

**Further reading:**
- [cppreference.com - Classes](https://en.cppreference.com/w/cpp/language/class)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Structured Types: maps, records
(defrecord Point [x y])
(def p (->Point 1 2))
```

**Special features:**
- Maps and Records are structured types
- Records are special Maps with predefined fields
- Access via keyword notation

**Further reading:**
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

**Special features:**
- structs and classes are structured types
- structs are simple structured types
- Access via slot notation

**Further reading:**
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

**Special features:**
- struct and class are structured types
- struct is a Value Type
- Access via dot notation

**Further reading:**
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

**Special features:**
- struct and class are structured types
- struct is a Value Type
- Access via dot notation

**Further reading:**
- [D Language Specification - Structs](https://dlang.org/spec/struct.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Structured Types: class, record (since Dart 3.0)
class Point {
  int x;
  int y;
  Point(this.x, this.y);
}

var p = Point(1, 2);
```

**Special features:**
- class is a structured type
- record is a structured type with named or unnamed components (since Dart 3.0)
- Access via dot notation

**Further reading:**
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

**Special features:**
- Classes are structured types
- All components have names
- Access via dot notation

**Further reading:**
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

**Special features:**
- Structs and Maps are structured types
- Structs are special Maps with predefined fields
- Access via map notation

**Further reading:**
- [Elixir Documentation - Structs](https://elixir-lang.org/getting-started/structs.html)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Structured Types: records, custom types
type alias Point = { x : Int, y : Int }

p : Point
p = { x = 1, y = 2 }
```

**Special features:**
- Records are structured types with named components
- Custom types can be structured types
- Access via dot notation

**Further reading:**
- [Elm Documentation - Records](https://guide.elm-lang.org/types/records.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% Structured Types: records, maps
-record(point, {x, y}).

P = #point{x = 1, y = 2}.
```

**Special features:**
- Records and Maps are structured types
- Records are compile-time constructs
- Maps are runtime data structures

**Further reading:**
- [Erlang Documentation - Records](https://www.erlang.org/doc/reference_manual/records.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Structured Types: records, structs, classes
type Point = { X: int; Y: int }

let p = { X = 1; Y = 2 }
```

**Special features:**
- Records, structs and classes are structured types
- Records are structured types with named components
- Access via dot notation

**Further reading:**
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

**Special features:**
- Derived types are structured types
- All components have names
- Access via percent notation

**Further reading:**
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

**Special features:**
- Custom types are structured types
- Records are structured types with named components
- Access via dot notation

**Further reading:**
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

**Special features:**
- structs are structured types
- All components have names
- Access via dot notation

**Further reading:**
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

**Special features:**
- Classes are structured types
- @TupleConstructor creates tuple-like constructors
- Access via dot notation

**Further reading:**
- [Groovy Documentation - Classes](https://groovy-lang.org/objectorientation.html)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Structured Types: data types, records
data Point = Point { x :: Int, y :: Int }

p :: Point
p = Point { x = 1, y = 2 }
```

**Special features:**
- Data types are structured types
- Records are data types with named components
- Access via dot notation

**Further reading:**
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

**Special features:**
- Classes and Typedefs are structured types
- Typedefs can define anonymous structures: `typedef Point = { x:Int, y:Int }`
- Access via dot notation

**Further reading:**
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

**Special features:**
- Data types are structured types
- Records are data types with named components
- Access via pattern matching

**Further reading:**
- [Idris Documentation - Data Types](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html#data-types)

</TabItem>
<TabItem value="java" label="Java">

```java
// Structured Types: classes, records (since Java 14)
class Point {
    int x;
    int y;
}

Point p = new Point();
```

**Special features:**
- Classes are structured types
- Records are structured types with automatic equality checking (since Java 14)
- Access via dot notation

**Further reading:**
- [Oracle Java Documentation - Classes](https://docs.oracle.com/javase/tutorial/java/concepts/class.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Structured Types: objects, classes (since ES6)
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

const p = new Point(1, 2);
```

**Special features:**
- Objects and classes are structured types
- Objects are dynamic structured types
- Access via dot notation

**Further reading:**
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

**Special features:**
- structs and mutable structs are structured types
- structs are immutable
- Access via dot notation

**Further reading:**
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

**Special features:**
- `struct` defines record types (Product Types) with named fields
- `type` defines Algebraic Data Types (Sum Types)
- Tuples available as anonymous Product Types
- All structured types are immutable (immutable by default)

**Further reading:**
- [Koka Language Guide - Data Types](https://koka-lang.github.io/koka/doc/book.html#sec-structs)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Structured Types: classes, data classes
class Point(val x: Int, val y: Int)

val p = Point(1, 2)
```

**Special features:**
- Classes and data classes are structured types
- data classes are structured types with automatic equality checking
- Access via dot notation

**Further reading:**
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

-- Lists and Arrays
def items : List String := ["Apfel", "Banane", "Kirsche"]
def arr : Array Int := #[1, 2, 3]
```

**Special features:**
- `structure` for named fields (Records)
- Tuples with `×` type operator (Product Types)
- `List` (linked) and `Array` (contiguous) for collections
- All structured types are immutable by default

**Further reading:**
- [Lean 4 Documentation - Structures and Records](https://lean-lang.org/theorem_proving_in_lean4/structures_and_records.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Structured Types: tables
local Point = {}
Point.x = 1
Point.y = 2
```

**Special features:**
- Tables are structured types
- Tables are dynamic structured types
- Access via dot notation

**Further reading:**
- [Lua Documentation - Tables](https://www.lua.org/manual/5.4/manual.html#2.1)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% Structured Types: structures
p = struct('x', 1, 'y', 2);
```

**Special features:**
- Structures are structured types
- Structures are dynamic structured types
- Access via dot notation

**Further reading:**
- [MATLAB Documentation - Structures](https://www.mathworks.com/help/matlab/structures.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```mercury
% Structured Types: Algebraic Data Types with named fields
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

% Lists, tuples and nested types
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

**Special features:**
- Structured types are defined as Algebraic Data Types (ADTs) with named fields.
- Lists (`list(T)`), tuples and user-defined composite types are available.
- Field access via `^` operator: `P ^ x`.
- All types are immutable (Value Types).

**Further reading:**
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

**Special features:**
- structs are structured types
- structs are Value Types
- Access via dot notation

**Further reading:**
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

**Special features:**
- Objects and Tuples are structured types
- Objects are structured types with named components
- Access via dot notation

**Further reading:**
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

**Special features:**
- Classes and structs are structured types
- Classes are Reference Types
- Access via dot notation

**Further reading:**
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

**Special features:**
- Records and Classes are structured types
- Records are Value Types
- Access via dot notation

**Further reading:**
- [Free Pascal Documentation - Records](https://www.freepascal.org/docs-html/ref/refse19.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Structured Types: records, tuples *)
type point = { x : int; y : int }

let p = { x = 1; y = 2 }
```

**Special features:**
- Records and Tuples are structured types
- Records are structured types with named components
- Access via dot notation

**Further reading:**
- [OCaml Documentation - Records](https://ocaml.org/manual/records.html)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
% Structured Types: structures
p = struct('x', 1, 'y', 2);
```

**Special features:**
- Structures are structured types
- Structures are dynamic structured types
- Access via dot notation

**Further reading:**
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

**Special features:**
- structs are structured types
- structs are Value Types
- Access via dot notation

**Further reading:**
- [Odin Documentation - Structs](https://odin-lang.org/docs/overview/#structs)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Structured Types: hashes, objects
my $p = { x => 1, y => 2 };
```

**Special features:**
- Hashes and Objects are structured types
- Hashes are dynamic structured types
- Access via hash notation

**Further reading:**
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

**Special features:**
- Classes and Arrays are structured types
- Classes are structured types with named components
- Access via arrow notation

**Further reading:**
- [PHP Documentation - Classes](https://www.php.net/manual/en/language.oop5.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Structured Types: Compound Terms (functors) and Lists
Point = point(1, 2),          % Compound Term with functor point/2
Person = person(max, 30),     % Compound Term with functor person/2

% Lists as recursive structures
List = [1, 2, 3],             % List
[Head | Tail] = [1, 2, 3],   % Head = 1, Tail = [2, 3]

% Nested structures
Tree = node(node(leaf(1), leaf(2)), leaf(3)),

% Structural inspection
functor(Point, F, A),         % F = point, A = 2
arg(1, Point, X),             % X = 1
Point =.. [point, 1, 2]      % Univ: Term ↔ List
```

**Special features:**
- Compound Terms (functors) as universal structured data types
- Lists as recursive structures with `[Head | Tail]` notation
- No named fields — access via position with `arg/3`
- `functor/3` and `=../2` (Univ) for structural inspection and construction

**Further reading:**
- [SWI-Prolog Documentation - Compound Terms](https://www.swi-prolog.org/pldoc/man?section=compound)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Structured Types: records, data types
type Point = { x :: Int, y :: Int }

p :: Point
p = { x: 1, y: 2 }
```

**Special features:**
- Records and data types are structured types
- Records are structured types with named components
- Access via dot notation

**Further reading:**
- [PureScript Documentation - Records](https://github.com/purescript/documentation/blob/master/language/Types.md)

</TabItem>
<TabItem value="python" label="Python">

```python
# Structured Types: classes, dataclasses (since Python 3.7), namedtuples
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

p = Point(1, 2)
```

**Special features:**
- Classes, dataclasses and namedtuples are structured types
- dataclasses are structured types with automatic equality checking (since Python 3.7)
- Access via dot notation

**Further reading:**
- [Python Documentation - Classes](https://docs.python.org/3/tutorial/classes.html)

</TabItem>
<TabItem value="r" label="R">

```r
# Structured Types: lists, S3/S4 classes
p <- list(x = 1, y = 2)
```

**Special features:**
- Lists and S3/S4 classes are structured types
- Lists are dynamic structured types
- Access via dollar notation

**Further reading:**
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

**Special features:**
- Structs are structured types with named components
- Access via automatically generated accessor functions
- Opaque by default (not transparent)

**Further reading:**
- [Racket Documentation - Structures](https://docs.racket-lang.org/guide/define-struct.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Structured Types: records
Point : { x : I32, y : I32 }

p : Point
p = { x : 1, y : 2 }
```

**Special features:**
- Records are structured types
- Records are structured types with named components
- Access via dot notation

**Further reading:**
- [Roc Documentation - Records](https://www.roc-lang.org/tutorial#records)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Structured Types: classes, structs
Point = Struct.new(:x, :y)
p = Point.new(1, 2)
```

**Special features:**
- Classes and Structs are structured types
- Structs are structured types with named components
- Access via dot notation

**Further reading:**
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

**Special features:**
- structs and tuples are structured types
- structs are structured types with named components
- Access via dot notation

**Further reading:**
- [The Rust Book - Structs](https://doc.rust-lang.org/book/ch05-01-defining-structs.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Structured Types: classes, case classes
class Point(val x: Int, val y: Int)

val p = new Point(1, 2)
```

**Special features:**
- Classes and case classes are structured types
- case classes are structured types with automatic equality checking
- Access via dot notation

**Further reading:**
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

**Special features:**
- Records are structured types (SRFI-9)
- Records are structured types with named components
- Access via accessor functions

**Further reading:**
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

**Special features:**
- structs and classes are structured types
- structs are Value Types
- Access via dot notation

**Further reading:**
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

**Special features:**
- Interfaces, classes and type aliases are structured types
- Interfaces define structured types
- Access via dot notation

**Further reading:**
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

**Special features:**
- Classes and Structures are structured types
- Structures are Value Types
- Access via dot notation

**Further reading:**
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

**Special features:**
- structs are structured types
- structs are Value Types
- Access via dot notation

**Further reading:**
- [V Documentation - Structs](https://github.com/vlang/v/blob/master/doc/docs.md#structs)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Structured Types: Associations, Lists *)
p = <|"x" -> 1, "y" -> 2|>
```

**Special features:**
- Associations and Lists are structured types
- Associations are structured types with named components
- Access via bracket notation

**Further reading:**
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

**Special features:**
- structs are structured types
- structs are Value Types
- Access via dot notation

**Further reading:**
- [Zig Documentation - Structs](https://ziglang.org/documentation/0.11.0/#structs)

</TabItem>
</Tabs>


## 3.2.8. Object-like Types

Types that represent objects, typically with properties and methods, such as classes or interfaces.

### Languages {#sprachen}

<Tabs availableTabs={['ada', 'carbon', 'csharp', 'cpp', 'clojure', 'common-lisp', 'crystal', 'd', 'dart', 'eiffel', 'elixir', 'fsharp', 'fortran', 'groovy', 'haxe', 'java', 'javascript', 'julia', 'kotlin', 'lua', 'matlab', 'mojo', 'nim', 'objective-c', 'object-pascal', 'ocaml', 'octave', 'perl', 'php', 'python', 'r', 'racket', 'ruby', 'scala', 'swift', 'typescript', 'vbnet', 'wolfram-language']} orangeTabs={['c', 'elm', 'erlang', 'gleam', 'go', 'haskell', 'idris', 'koka', 'lean4', 'mercury', 'odin', 'purescript', 'roc', 'rust', 'scheme', 'v', 'zig']}>
<TabItem value="ada" label="Ada">

```ada
-- Object-like Types: Tagged types (OOP)
type Person is tagged record
    Name : String;
end record;

procedure Greet(Self : Person);
```

**Special features:**
- Tagged types are object-like types with inheritance
- Supports OOP features such as polymorphism
- Access via dot notation

**Further reading:**
- [Ada Reference Manual - Tagged Types](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-3-9.html)

</TabItem>
<TabItem value="c" label="C">

```c
// Object-like Types: structs with functions (OOP simulation)
struct Person {
    char* name;
    void (*greet)(struct Person*);
};

void person_greet(struct Person* self) {
    printf("Hallo, ich bin %s\n", self->name);
}
```

**Special features:**
- structs can simulate object-like types with function pointers
- No direct OOP features
- Manual OOP simulation required

**Further reading:**
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

**Special features:**
- classes are object-like types
- Experimental language, syntax may still change
- Supports OOP features

**Further reading:**
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

**Special features:**
- Classes and Interfaces are object-like types
- Classes are Reference Types
- Supports OOP features such as inheritance and polymorphism

**Further reading:**
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

**Special features:**
- Classes and structs are object-like types
- Supports OOP features such as inheritance and polymorphism
- struct is public by default, class is private by default

**Further reading:**
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

**Special features:**
- Protocols, Records and Types are object-like types
- Protocols define interfaces
- Records are immutable object-like types

**Further reading:**
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

**Special features:**
- Classes are object-like types
- Supports CLOS (Common Lisp Object System)
- Access via slot notation

**Further reading:**
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

**Special features:**
- Classes are object-like types
- Supports OOP features such as inheritance
- Access via dot notation

**Further reading:**
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

**Special features:**
- Classes and Interfaces are object-like types
- Supports OOP features such as inheritance
- Access via dot notation

**Further reading:**
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

**Special features:**
- Classes and Mixins are object-like types
- Supports OOP features such as inheritance
- Access via dot notation

**Further reading:**
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

**Special features:**
- Classes are object-like types
- Supports OOP features such as inheritance
- Access via dot notation

**Further reading:**
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

**Special features:**
- Modules, Structs and Protocols are object-like types
- Structs are immutable object-like types
- Protocols define interfaces

**Further reading:**
- [Elixir Documentation - Structs](https://elixir-lang.org/getting-started/structs.html)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Object-like Types: custom types (no direct OOP features)
type alias Person = { name : String }

greet : Person -> String
greet person = "Hallo, ich bin " ++ person.name
```

**Special features:**
- Custom types and Records are object-like types
- No direct OOP features such as inheritance
- Functional programming with object-like structures

**Further reading:**
- [Elm Documentation - Custom Types](https://guide.elm-lang.org/types/custom_types.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% Object-like Types: modules, records (no direct OOP features)
-module(person).
-export([greet/1]).

-record(person, {name}).

greet(#person{name = Name}) ->
    io:format("Hallo, ich bin ~s~n", [Name]).
```

**Special features:**
- Modules and Records are object-like types
- No direct OOP features
- Functional programming with object-like structures

**Further reading:**
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

**Special features:**
- Classes and Interfaces are object-like types
- Supports OOP features such as inheritance
- Access via dot notation

**Further reading:**
- [F# Documentation - Classes](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/classes)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Object-like Types: derived types with type-bound procedures
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

**Special features:**
- Derived types with type-bound procedures are object-like types
- Supports OOP features (since Fortran 2003)
- Access via percent notation

**Further reading:**
- [Fortran Standard - Type-bound Procedures](https://gcc.gnu.org/onlinedocs/gfortran/Type-bound-procedures.html)

</TabItem>
<TabItem value="gleam" label="Gleam">

```erlang
// Object-like Types: custom types (no direct OOP features)
pub type Person {
  Person(name: String)
}

pub fn greet(person: Person) {
  case person {
    Person(name) -> io.println("Hallo, ich bin " <> name)
  }
}
```

**Special features:**
- Custom types are object-like types
- No direct OOP features
- Functional programming with object-like structures

**Further reading:**
- [Gleam Documentation - Types](https://gleam.run/documentation/tour/types/)

</TabItem>
<TabItem value="go" label="Go">

```go
// Object-like Types: structs with methods
type Person struct {
    Name string
}

func (p Person) Greet() {
    fmt.Printf("Hallo, ich bin %s\n", p.Name)
}
```

**Special features:**
- Structs with Methods are object-like types
- No direct OOP features such as inheritance
- Interfaces for polymorphism

**Further reading:**
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

**Special features:**
- Classes and Traits are object-like types
- Supports OOP features such as inheritance
- Access via dot notation

**Further reading:**
- [Groovy Documentation - Classes](https://groovy-lang.org/objectorientation.html)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Object-like Types: data types (no direct OOP features)
data Person = Person { name :: String }

greet :: Person -> String
greet person = "Hallo, ich bin " ++ name person
```

**Special features:**
- Data types are object-like types
- No direct OOP features
- Functional programming with object-like structures

**Further reading:**
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

**Special features:**
- Classes and Interfaces are object-like types
- Supports OOP features such as inheritance
- Access via dot notation

**Further reading:**
- [Haxe Documentation - Classes](https://haxe.org/manual/types-class-instance.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Object-like Types: data types, interfaces (no direct OOP features)
data Person : Type where
    MkPerson : String -> Person

greet : Person -> String
greet (MkPerson name) = "Hallo, ich bin " ++ name
```

**Special features:**
- Data types and Interfaces are object-like types
- No direct OOP features
- Functional programming with object-like structures

**Further reading:**
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

**Special features:**
- Classes and Interfaces are object-like types
- Supports OOP features such as inheritance
- Access via dot notation

**Further reading:**
- [Oracle Java Documentation - Classes](https://docs.oracle.com/javase/tutorial/java/concepts/class.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Object-like Types: classes (since ES6), objects, prototypes
class Person {
    constructor(name) {
        this.name = name;
    }
    
    greet() {
        console.log(`Hallo, ich bin ${this.name}`);
    }
}
```

**Special features:**
- Classes, Objects and Prototypes are object-like types
- Classes are available since ES6
- Supports OOP features such as inheritance

**Further reading:**
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

**Special features:**
- Mutable structs are object-like types
- Supports OOP features such as inheritance (via abstract types)
- Access via dot notation

**Further reading:**
- [Julia Documentation - Composite Types](https://docs.julialang.org/en/v1/manual/types/#Composite-Types)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Object-like Types: struct + functions (no OOP)
struct person
  name: string

fun greet(p: person): console ()
  println("Hallo, ich bin " ++ p.name)
```

**Special features:**
- Koka has no classes or OOP features
- `struct` and `type` (ADTs) serve as data containers
- Functions are defined separately and take data as parameters
- Dot notation (`p.name`) uses automatically generated accessor functions

**Further reading:**
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

**Special features:**
- Classes, Interfaces and data classes are object-like types
- Supports OOP features such as inheritance
- Access via dot notation

**Further reading:**
- [Kotlin Documentation - Classes](https://kotlinlang.org/docs/classes.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Object-like Types: Structures + Type Classes (kein OOP)
structure Person where
  name : String
  age : Nat
  deriving Repr

-- "Methods" as namespace functions
def Person.greet (p : Person) : String :=
  s!"Hallo, ich bin {p.name}"

-- Type Classes for polymorphic behavior
class Greetable (α : Type) where
  greet : α → String

instance : Greetable Person where
  greet p := s!"Hallo, ich bin {p.name}"
```

**Special features:**
- No classes in the OOP sense, instead Structures + Type Classes
- Structures can have functions in their own namespace (dot notation)
- Type Classes enable polymorphic behavior (similar to interfaces)
- No inheritance concept, instead composition and type class hierarchies

**Further reading:**
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

**Special features:**
- Tables with Metatables are object-like types
- Supports OOP features via metatables
- Access via dot notation

**Further reading:**
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

**Special features:**
- Classes are object-like types
- Supports OOP features such as inheritance
- Access via dot notation

**Further reading:**
- [MATLAB Documentation - Classes](https://www.mathworks.com/help/matlab/matlab_oop/classes-and-objects-in-matlab.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```mercury
% Object-like Types: Type Classes + Module-based abstraction
% Mercury has no classes, but Type Classes provide polymorphism.

:- typeclass greetable(T) where [
    pred greet(T::in, string::out) is det
].

:- type person
    --->    person(name :: string, age :: int).

:- instance greetable(person) where [
    greet(P, S) :-
        string.format("Hallo, ich bin %s", [s(P ^ name)], S)
].

% Usage
:- pred main(io::di, io::uo) is det.
main(!IO) :-
    Alice = person("Alice", 30),
    greet(Alice, Greeting),
    io.write_string(Greeting, !IO), io.nl(!IO).
```

**Special features:**
- Mercury has no classes or objects in the OOP sense.
- Type Classes provide polymorphism similar to Haskell's Type Classes.
- Data and operations are separated (type definitions + predicates/functions).
- Modules serve as an encapsulation mechanism (similar to packages).

**Further reading:**
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

**Special features:**
- Classes are object-like types
- Supports OOP features
- Access via dot notation

**Further reading:**
- [Mojo Documentation - Classes](https://docs.modular.com/mojo/manual/structs-and-classes/classes.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Object-like Types: objects with methods
type Person = object
    name: string

proc greet(self: Person) =
    echo "Hallo, ich bin ", self.name
```

**Special features:**
- Objects with Methods are object-like types
- Supports OOP features such as inheritance
- Access via dot notation

**Further reading:**
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

**Special features:**
- Classes and Protocols are object-like types
- Supports OOP features such as inheritance
- Access via dot notation

**Further reading:**
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

**Special features:**
- Classes are object-like types
- Supports OOP features such as inheritance
- Access via dot notation

**Further reading:**
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

**Special features:**
- Classes and objects are object-like types
- Supports OOP features like inheritance
- Access via dot notation

**Further reading:**
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

**Special features:**
- Classes are object-like types
- Supports OOP features like inheritance
- Access via dot notation

**Further reading:**
- [GNU Octave Documentation - Classes](https://octave.org/doc/v8.1.0/Object-Oriented-Programming.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Object-like Types: structs with procedures (no direct OOP features)
Person :: struct {
    name: string,
}

greet :: proc(p: Person) {
    fmt.printf("Hallo, ich bin %s\n", p.name)
}
```

**Special features:**
- Structs with procedures are object-like types
- No direct OOP features
- Manual OOP simulation required

**Further reading:**
- [Odin Documentation - Structs](https://odin-lang.org/docs/overview/#structs)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Object-like Types: packages, classes (since Perl 5)
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

**Special features:**
- Packages and classes are object-like types
- Supports OOP features like inheritance
- Access via arrow notation

**Further reading:**
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

**Special features:**
- Classes and interfaces are object-like types
- Supports OOP features like inheritance
- Access via arrow notation

**Further reading:**
- [PHP Documentation - Classes](https://www.php.net/manual/en/language.oop5.php)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Object-like Types: type classes, data types (no direct OOP features)
data Person = Person { name :: String }

greet :: Person -> String
greet (Person { name }) = "Hallo, ich bin " <> name
```

**Special features:**
- Type classes and data types are object-like types
- No direct OOP features
- Functional programming with object-like structures

**Further reading:**
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

**Special features:**
- Classes are object-like types
- Supports OOP features like inheritance
- Access via dot notation

**Further reading:**
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

**Special features:**
- S3/S4/R6 classes are object-like types
- Supports OOP features
- Access via dollar notation

**Further reading:**
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

**Special features:**
- Classes are object-like types
- Supports OOP features like inheritance
- `(super-new)` is mandatory in every class definition

**Further reading:**
- [Racket Documentation - Classes](https://docs.racket-lang.org/guide/classes.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Object-like Types: Records with functions (no direct OOP features)
greet : { name : Str } -> Str
greet = \person -> "Hallo, ich bin $(person.name)"
```

**Special features:**
- Records with functions are object-like types
- No direct OOP features
- Functional programming with object-like structures

**Further reading:**
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

**Special features:**
- Classes and modules are object-like types
- Supports OOP features like inheritance
- Access via dot notation

**Further reading:**
- [Ruby Documentation - Classes](https://ruby-doc.org/core-3.1.0/Class.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Object-like Types: structs with impl blocks, traits
struct Person {
    name: String,
}

impl Person {
    fn greet(&self) {
        println!("Hallo, ich bin {}", self.name);
    }
}
```

**Special features:**
- Structs with impl blocks and traits are object-like types
- No direct OOP features like inheritance
- Traits for polymorphism

**Further reading:**
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

**Special features:**
- Classes, traits and objects are object-like types
- Supports OOP features like inheritance
- Access via dot notation

**Further reading:**
- [Scala Documentation - Classes](https://docs.scala-lang.org/tour/classes.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; Object-like Types: records, closures (no direct OOP features)
(define (make-person name)
  (lambda (message)
    (case message
      ((name) name)
      ((greet) (display (string-append "Hallo, ich bin " name "\n"))))))
```

**Special features:**
- Records and closures are object-like types
- No direct OOP features
- Manual OOP simulation with closures

**Further reading:**
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

**Special features:**
- Classes, structs and protocols are object-like types
- Supports OOP features like inheritance
- Access via dot notation

**Further reading:**
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

**Special features:**
- Classes and interfaces are object-like types
- Supports OOP features like inheritance
- Access via dot notation

**Further reading:**
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

**Special features:**
- Classes and interfaces are object-like types
- Supports OOP features like inheritance
- Access via dot notation

**Further reading:**
- [Microsoft VB.NET Documentation - Classes](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/objects-and-classes/)

</TabItem>
<TabItem value="v" label="V">

```v
// Object-like Types: structs with methods
struct Person {
    name string
}

fn (p Person) greet() {
    println("Hallo, ich bin ${p.name}")
}
```

**Special features:**
- Structs with methods are object-like types
- No direct OOP features like inheritance
- Access via dot notation

**Further reading:**
- [V Documentation - Structs](https://github.com/vlang/v/blob/master/doc/docs.md#structs)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Object-like Types: Symbols and Associations *)
Person[name_] := <|"name" -> name, "greet" -> Function[Print["Hallo, ich bin ", name]]|>
```

**Special features:**
- Symbols and associations are used for object-like structures
- Methods are stored as functions in the association
- Access via bracket notation

**Further reading:**
- [Wolfram Language Documentation - Associations](https://reference.wolfram.com/language/guide/Associations.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Object-like Types: structs with functions (no direct OOP features)
const Person = struct {
    name: []const u8,
    
    pub fn greet(self: Person) void {
        std.debug.print("Hallo, ich bin {s}\n", .{self.name});
    }
};
```

**Special features:**
- Structs with functions are object-like types
- No direct OOP features
- Manual OOP simulation required

**Further reading:**
- [Zig Documentation - Structs](https://ziglang.org/documentation/0.11.0/#structs)

</TabItem>
</Tabs>



## 3.2.9. Abstract Types

Types that cannot be directly instantiated, but serve as a basis for other types, such as abstract classes, interfaces, or traits.

### Languages {#sprachen}

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

**Special features:**
- Abstract tagged types are abstract types
- Abstract procedures must be implemented in derived types
- Cannot be directly instantiated

**Further reading:**
- [Ada Reference Manual - Abstract Types](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-3-9-3.html)

</TabItem>
<TabItem value="c" label="C">

```c
// Abstract Types: not directly supported (OOP simulation)
// Workaround: struct with function pointers, NULL for not implemented
struct Shape {
    void (*draw)(struct Shape*);
};

// Cannot prevent Shape from being directly instantiated
```

**Special features:**
- C has no direct abstract types
- Manual OOP simulation required
- No compiler support for abstract types

**Further reading:**
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

**Special features:**
- Abstract classes and interfaces are abstract types
- Experimental language, syntax may still change
- Cannot be directly instantiated

**Further reading:**
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

**Special features:**
- Abstract classes and interfaces are abstract types
- Abstract methods must be implemented in derived classes
- Cannot be directly instantiated

**Further reading:**
- [Microsoft C# Documentation - Abstract Classes](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/abstract)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Abstract Types: abstract classes (with pure virtual functions)
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

**Special features:**
- Abstract classes with pure virtual functions are abstract types
- Pure virtual functions must be implemented in derived classes
- Cannot be directly instantiated

**Further reading:**
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

**Special features:**
- Protocols are abstract types
- Protocols define abstract methods
- Cannot be directly instantiated

**Further reading:**
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

**Special features:**
- Abstract classes are abstract types
- Generic functions define abstract methods
- Cannot be directly instantiated (if abstract)

**Further reading:**
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

**Special features:**
- Abstract classes are abstract types
- Abstract methods must be implemented in derived classes
- Cannot be directly instantiated

**Further reading:**
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

**Special features:**
- Abstract classes and interfaces are abstract types
- Abstract methods must be implemented in derived classes
- Cannot be directly instantiated

**Further reading:**
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

**Special features:**
- Abstract classes and interfaces are abstract types
- Abstract methods must be implemented in implementing classes
- Cannot be directly instantiated

**Further reading:**
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

**Special features:**
- Deferred classes are abstract types
- Deferred features must be implemented in inheriting classes
- Cannot be directly instantiated

**Further reading:**
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

**Special features:**
- Protocols are abstract types
- Protocols define abstract functions
- Cannot be directly instantiated

**Further reading:**
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

**Special features:**
- Abstract classes and interfaces are abstract types
- Abstract members must be implemented in derived classes
- Cannot be directly instantiated

**Further reading:**
- [F# Documentation - Abstract Classes](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/classes#abstract-classes)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Abstract Types: abstract derived types (since Fortran 2003)
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

**Special features:**
- Abstract derived types are abstract types (since Fortran 2003)
- Deferred procedures must be implemented in extended types
- Cannot be directly instantiated

**Further reading:**
- [Fortran Standard - Abstract Types](https://gcc.gnu.org/onlinedocs/gfortran/Abstract-types.html)

</TabItem>
<TabItem value="gleam" label="Gleam">

```erlang
// Abstract Types: not directly supported (functional programming)
// Workaround: Custom types with pattern matching
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

**Special features:**
- Gleam has no direct abstract types
- Custom types with pattern matching as workaround
- Functional programming without OOP features

**Further reading:**
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

**Special features:**
- Interfaces are abstract types
- Interfaces define abstract methods
- Cannot be directly instantiated

**Further reading:**
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

**Special features:**
- Abstract classes, interfaces and traits are abstract types
- Abstract methods must be implemented in derived classes
- Cannot be directly instantiated

**Further reading:**
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

**Special features:**
- Type classes are abstract types
- Type classes define abstract functions
- Cannot be directly instantiated

**Further reading:**
- [Haskell Documentation - Type Classes](https://www.haskell.org/tutorial/classes.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Abstract Types: compile-time wrapper over base types
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
var f:Float = p; // Implicit conversion to Float: 0.75
```

**Special features:**
- Haxe `abstract` types are compile-time types that wrap a base type
- Support implicit conversions (`@:from`, `@:to`)
- Support operator overloading (`@:op`)
- Exist only at compile-time, base type is used at runtime

**Further reading:**
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

**Special features:**
- Interfaces are abstract types
- Interfaces define abstract functions
- Cannot be directly instantiated

**Further reading:**
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

**Special features:**
- Abstract classes and interfaces are abstract types
- Abstract methods must be implemented in derived classes
- Cannot be directly instantiated

**Further reading:**
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

**Special features:**
- Abstract types are abstract types
- Abstract types cannot be directly instantiated
- Functions can be defined for abstract types

**Further reading:**
- [Julia Documentation - Abstract Types](https://docs.julialang.org/en/v1/manual/types/#Abstract-Types)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Abstract Types: Opaque Types via modules
// Type is visible, constructor is private
abstract type user-id
  UserId(value: int)

// Only accessible via functions
fun create-user-id(value: int): user-id
  UserId(value)

fun get-value(id: user-id): int
  match id
    UserId(v) -> v

// Alternatively: ADTs as abstract interface
type shape
  Circle(radius: float64)
  Rectangle(width: float64, height: float64)

fun draw(s: shape): console ()
  match s
    Circle(r)      -> println("Drawing circle with radius " ++ r.show)
    Rectangle(w,h) -> println("Drawing rectangle " ++ w.show ++ "x" ++ h.show)
```

**Special features:**
- Abstract types via selective module exports (type public, constructor private)
- `abstract type` for types whose implementation should remain hidden
- ADTs serve as algebraic interfaces with exhaustive pattern matching
- No abstract classes or interfaces in the OOP sense

**Further reading:**
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

**Special features:**
- Abstract classes and interfaces are abstract types
- Abstract methods must be implemented in derived classes
- Cannot be directly instantiated

**Further reading:**
- [Kotlin Documentation - Abstract Classes](https://kotlinlang.org/docs/classes.html#abstract-classes)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Abstract Types: Type Classes as abstract interfaces
class Shape (α : Type) where
  area : α → Float
  perimeter : α → Float

structure Circle where
  radius : Float

instance : Shape Circle where
  area c := Float.pi * c.radius * c.radius
  perimeter c := 2.0 * Float.pi * c.radius

-- Usage with polymorphism
def printArea [Shape α] (s : α) : String :=
  s!"Area: {Shape.area s}"
```

**Special features:**
- No abstract classes, instead Type Classes as abstract interfaces
- Type Classes define method signatures, instances implement them
- `opaque` definitions for implementation hiding
- Similar concept to Haskell Type Classes

**Further reading:**
- [Lean 4 Documentation - Type Classes](https://lean-lang.org/theorem_proving_in_lean4/type_classes.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Abstract Types: not directly supported
-- Workaround: Metatables with error on direct instantiation
local Shape = {}
Shape.__index = Shape

function Shape:new()
    error("Cannot instantiate abstract class")
end
```

**Special features:**
- Lua has no direct abstract types
- Manual OOP simulation required
- Runtime error on direct instantiation

**Further reading:**
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

**Special features:**
- Abstract classes are abstract types
- Abstract methods must be implemented in derived classes
- Cannot be directly instantiated

**Further reading:**
- [MATLAB Documentation - Abstract Classes](https://www.mathworks.com/help/matlab/matlab_oop/abstract-classes-and-interfaces.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```mercury
% Abstract Types: Abstract Data Types via module system
% The internal representation is not exposed in the interface section.

% shape.m
:- module shape.
:- interface.

:- type shape.     % Opaque/abstract type
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

**Special features:**
- Abstract types are realized through the module system (opaque types).
- In the `interface` section, only the type name is declared, not the internal structure.
- External modules can use the type only through exported functions/predicates.
- Type Classes provide another form of abstraction (similar to interfaces).

**Further reading:**
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

**Special features:**
- Abstract classes and traits are abstract types
- Abstract methods must be implemented in derived classes
- Cannot be directly instantiated

**Further reading:**
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

**Special features:**
- Abstract methods are abstract types
- Abstract methods must be implemented in derived types
- Cannot be directly instantiated (if abstract)

**Further reading:**
- [Nim Documentation - Methods](https://nim-lang.org/docs/manual.html#methods)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Abstract Types: abstract classes (convention), protocols
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

**Special features:**
- Protocols are abstract types
- Abstract classes are convention (no compiler support)
- Runtime error on non-implemented methods

**Further reading:**
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

**Special features:**
- Abstract classes and interfaces are abstract types
- Abstract methods must be implemented in derived classes
- Cannot be directly instantiated

**Further reading:**
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

**Special features:**
- Virtual classes are abstract types
- Virtual methods must be implemented in derived classes
- Cannot be directly instantiated

**Further reading:**
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

**Special features:**
- Abstract classes are abstract types
- Abstract methods must be implemented in derived classes
- Cannot be directly instantiated

**Further reading:**
- [GNU Octave Documentation - Abstract Classes](https://octave.org/doc/v8.1.0/Object-Oriented-Programming.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Abstract Types: not directly supported
// Workaround: Interfaces with error on direct use
Drawable :: interface {
    draw: proc(self: ^Self)
}

// Cannot be directly instantiated
```

**Special features:**
- Odin has no direct abstract types
- Interfaces can be used as abstract types
- Manual OOP simulation required

**Further reading:**
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

**Special features:**
- Perl has no direct abstract types
- Abstract classes are convention (no compiler support)
- Runtime error on direct instantiation

**Further reading:**
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

**Special features:**
- Abstract classes and interfaces are abstract types
- Abstract methods must be implemented in derived classes
- Cannot be directly instantiated

**Further reading:**
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

**Special features:**
- Type classes are abstract types
- Type classes define abstract functions
- Cannot be directly instantiated

**Further reading:**
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

**Special features:**
- Abstract base classes (ABC) are abstract types
- Abstract methods must be implemented in derived classes
- Cannot be directly instantiated

**Further reading:**
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

**Special features:**
- S4 classes with `contains = "VIRTUAL"` are abstract
- Abstract methods must be defined with `setGeneric`
- Cannot be directly instantiated

**Further reading:**
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

**Special features:**
- Abstract classes are abstract types
- Abstract methods must be implemented in derived classes
- Cannot be directly instantiated

**Further reading:**
- [Racket Documentation - Abstract Classes](https://docs.racket-lang.org/guide/classes.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Abstract Types: not directly supported (functional programming)
-- Workaround: Tag Unions with pattern matching
draw : [Circle I32, Rectangle I32 I32] -> Str
draw = \shape ->
    when shape is
        Circle _ -> "Drawing circle"
        Rectangle _ _ -> "Drawing rectangle"
```

**Special features:**
- Roc has no direct abstract types
- Tag Unions with pattern matching as workaround
- Functional programming without OOP features

**Further reading:**
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

**Special features:**
- Ruby has no direct abstract types
- Abstract classes are convention (no compiler support)
- Runtime error on direct instantiation

**Further reading:**
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

**Special features:**
- Traits are abstract types
- Traits define abstract methods
- Cannot be directly instantiated

**Further reading:**
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

**Special features:**
- Abstract classes and traits are abstract types
- Abstract methods must be implemented in derived classes
- Cannot be directly instantiated

**Further reading:**
- [Scala Documentation - Abstract Classes](https://docs.scala-lang.org/tour/traits.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; Abstract Types: not directly supported
;; Workaround: Records with convention, not to be directly instantiated
(define-record-type shape
  (make-shape)
  shape?
  (draw shape-draw))

;; No language mechanism prevents direct instantiation
;; Abstraction only by convention
```

**Special features:**
- Scheme has no abstract types
- No mechanism to prevent instantiation
- Abstraction only possible by convention

**Further reading:**
- [Scheme Documentation - Records](https://www.scheme.com/tspl4/objects.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Abstract Types: protocols, abstract classes (convention)
protocol Drawable {
    func draw()
}

class Circle: Drawable {
    func draw() {
        // Implementation
    }
}
```

**Special features:**
- Protocols are abstract types
- Abstract classes are convention (no direct compiler support)
- Cannot be directly instantiated

**Further reading:**
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

**Special features:**
- Abstract classes and interfaces are abstract types
- Abstract methods must be implemented in derived classes
- Cannot be directly instantiated

**Further reading:**
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

**Special features:**
- Abstract classes (MustInherit) and interfaces are abstract types
- Abstract methods (MustOverride) must be implemented in derived classes
- Cannot be directly instantiated

**Further reading:**
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

**Special features:**
- Interfaces are abstract types
- Interfaces define abstract methods
- Cannot be directly instantiated

**Further reading:**
- [V Documentation - Interfaces](https://github.com/vlang/v/blob/master/doc/docs.md#interfaces)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Abstract Types: convention via messages *)
Shape /: Shape[] := (Message[Shape::abstract, "Shape"]; $Failed)

Circle[name_] := <|"name" -> name, "draw" -> Function[Print["Drawing circle"]]|>
```

**Special features:**
- Wolfram Language has no direct abstract types
- Abstract types are convention
- Runtime error on direct instantiation

**Further reading:**
- [Wolfram Language Documentation - Messages](https://reference.wolfram.com/language/guide/Messages.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Abstract Types: not directly supported
// Workaround: structs with error on direct use
const Drawable = struct {
    draw: *const fn() void,
};

// Cannot prevent Drawable from being directly instantiated
```

**Special features:**
- Zig has no direct abstract types
- Manual OOP simulation required
- No compiler support for abstract types

**Further reading:**
- [Zig Documentation - Structs](https://ziglang.org/documentation/0.11.0/#structs)

</TabItem>
</Tabs>


