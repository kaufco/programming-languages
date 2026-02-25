---
slug: /typsystem/advanced-types
title: 3.8. Advanced Types
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import FilteredTabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 3.8. Advanced Types

Fortgeschrittene Typkonstrukte wie Union Types und ADTs.

## 3.8.1. Union Types

Typen, die einen Wert von mehreren möglichen Typen annehmen können.

### Sprachen {#sprachen}

<FilteredTabs availableTabs={['ada', 'c', 'carbon', 'common-lisp', 'cpp', 'crystal', 'd', 'elm', 'fsharp', 'haxe', 'idris', 'julia', 'kotlin', 'mercury', 'nim', 'object-pascal', 'ocaml', 'odin', 'php', 'purescript', 'python', 'roc', 'rust', 'scala', 'swift', 'typescript', 'v', 'zig']} orangeTabs={['csharp', 'dart']}>
<TabItem value="ada" label="Ada">

```ada
-- Union Types: Variant Records
type Number_Type is (Int_Type, Float_Type);
type Number (Kind : Number_Type := Int_Type) is record
    case Kind is
        when Int_Type =>
            Int_Value : Integer;
        when Float_Type =>
            Float_Value : Float;
    end case;
end record;

num1 : Number := (Kind => Int_Type, Int_Value => 42);
num2 : Number := (Kind => Float_Type, Float_Value => 3.14);
```

**Besonderheiten:**
- Variant Records mit Discriminants
- Type-safe Union Types
- Discriminant bestimmt aktiven Variant

**Weiterführende Links:**
- [Ada Reference Manual - Variant Records](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-3-8.html)

</TabItem>
<TabItem value="c" label="C">

```c
// Union Types: C-style unions (nicht type-safe)
union Number {
    int int_value;
    double float_value;
};

union Number num1;
num1.int_value = 42;

union Number num2;
num2.float_value = 3.14;
```

**Besonderheiten:**
- C-style unions sind nicht type-safe
- Alle Varianten teilen sich denselben Speicher
- Keine Type-Prüfung zur Compile-Zeit

**Weiterführende Links:**
- [C Standard - Union Types](https://en.cppreference.com/w/c/language/union)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Union Types: geplant
// Syntax noch nicht final
// var num: Int | Float = 42;
```

**Besonderheiten:**
- Union Types sind geplant
- Experimentelle Sprache, Syntax kann sich noch ändern

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Union Types: std::variant (seit C++17)
#include <variant>

std::variant<int, double> num1 = 42;
std::variant<int, double> num2 = 3.14;

// Type-safe Zugriff
int int_val = std::get<int>(num1);
double float_val = std::get<double>(num2);

// Oder mit std::visit
std::visit([](auto& value) {
    std::cout << value << std::endl;
}, num1);
```

**Besonderheiten:**
- `std::variant` seit C++17
- Type-safe Union Types
- Unterstützt `std::visit` für Pattern Matching

**Weiterführende Links:**
- [cppreference.com - std::variant](https://en.cppreference.com/w/cpp/utility/variant)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Union Types: Union Types
alias Number = Int32 | Float64

num1 : Number = 42
num2 : Number = 3.14

# Type narrowing
def process_number(num : Number)
  if num.is_a?(Int32)
    puts "Integer: #{num}"
  elsif num.is_a?(Float64)
    puts "Float: #{num}"
  end
end
```

**Besonderheiten:**
- Union Types mit `|` Syntax
- Type narrowing mit `is_a?`
- Compile-time Typ-Prüfung

**Weiterführende Links:**
- [Crystal Documentation - Union Types](https://crystal-lang.org/reference/1.11/syntax_and_semantics/union_types.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Union Types: Discriminated Unions (nicht direkt unterstützt)
// Workaround: Records mit sealed classes (seit C# 9.0)
abstract record Number;
record IntNumber(int Value) : Number;
record FloatNumber(double Value) : Number;

Number num1 = new IntNumber(42);
Number num2 = new FloatNumber(3.14);

// Pattern Matching (seit C# 8.0)
string result = num1 switch
{
    IntNumber i => $"Integer: {i.Value}",
    FloatNumber f => $"Float: {f.Value}",
    _ => "Unknown"
};
```

**Besonderheiten:**
- Keine direkten Union Types
- Discriminated Unions mit sealed classes/records (seit C# 9.0)
- Pattern Matching seit C# 8.0

**Weiterführende Links:**
- [Microsoft C# Documentation - Pattern Matching](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/functional/pattern-matching)

</TabItem>
<TabItem value="d" label="D">

```d
// Union Types: std.variant
import std.variant;

Variant num1 = 42;
Variant num2 = 3.14;

// Type-safe Zugriff
int int_val = num1.get!int;
double float_val = num2.get!double;

// Oder mit visit
num1.visit!((int i) => writeln("Integer: ", i),
            (double d) => writeln("Float: ", d));
```

**Besonderheiten:**
- `std.variant.Variant` für Union Types
- Type-safe Zugriff mit `get!`
- Unterstützt `visit` für Pattern Matching

**Weiterführende Links:**
- [D Language Specification - Variant](https://dlang.org/phobos/std_variant.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Union Types: nicht direkt unterstützt
// Workaround: Object oder dynamic
Object num1 = 42;
Object num2 = 3.14;

// Type checking zur Laufzeit
if (num1 is int) {
  print('Integer: $num1');
} else if (num1 is double) {
  print('Float: $num1');
}
```

**Besonderheiten:**
- Keine direkten Union Types
- `Object` oder `dynamic` als Workaround
- Type checking zur Laufzeit mit `is`

**Weiterführende Links:**
- [Dart Documentation - Type System](https://dart.dev/guides/language/type-system)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Union Types: Discriminated Unions
type Number =
    | Int of int
    | Float of float

let num1 = Int 42
let num2 = Float 3.14

// Pattern Matching
let processNumber num =
    match num with
    | Int i -> printfn "Integer: %d" i
    | Float f -> printfn "Float: %f" f
```

**Besonderheiten:**
- Discriminated Unions mit `|` Syntax
- Pattern Matching mit `match`
- Type-safe Union Types

**Weiterführende Links:**
- [F# Documentation - Discriminated Unions](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/discriminated-unions)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Union Types: Union Types
typedef Number = haxe.extern.EitherType<Int, Float>;

var num1: Number = 42;
var num2: Number = 3.14;

// Type checking
if (Std.isOfType(num1, Int)) {
    trace("Integer: " + num1);
} else if (Std.isOfType(num1, Float)) {
    trace("Float: " + num1);
}
```

**Besonderheiten:**
- Union Types mit `haxe.extern.EitherType`
- Type checking zur Laufzeit
- Unterstützt mehrere Typen

**Weiterführende Links:**
- [Haxe Documentation - Type System](https://haxe.org/manual/type-system-union-types.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Union Types: Sum Types
data Number = IntNumber Int | FloatNumber Double

num1 : Number
num1 = IntNumber 42

num2 : Number
num2 = FloatNumber 3.14

-- Pattern Matching
processNumber : Number -> String
processNumber (IntNumber i) = "Integer: " ++ show i
processNumber (FloatNumber f) = "Float: " ++ show f
```

**Besonderheiten:**
- Sum Types als Union Types
- Pattern Matching mit case expressions
- Type-safe Union Types

**Weiterführende Links:**
- [Idris Documentation - Data Types](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html#data-types)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Union Types: Union Types
const Number = Union{Int, Float64}

num1::Number = 42
num2::Number = 3.14

# Type checking
function process_number(num::Number)
    if num isa Int
        println("Integer: $num")
    elseif num isa Float64
        println("Float: $num")
    end
end
```

**Besonderheiten:**
- Union Types mit `Union{}` Syntax
- Type checking mit `isa`
- Compile-time Typ-Prüfung

**Weiterführende Links:**
- [Julia Documentation - Union Types](https://docs.julialang.org/en/v1/manual/types/#Union-Types)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Union Types: Sealed Classes (seit Kotlin 1.0)
sealed class Number
data class IntNumber(val value: Int) : Number()
data class FloatNumber(val value: Double) : Number()

val num1: Number = IntNumber(42)
val num2: Number = FloatNumber(3.14)

// Pattern Matching
fun processNumber(num: Number) = when (num) {
    is IntNumber -> println("Integer: ${num.value}")
    is FloatNumber -> println("Float: ${num.value}")
}
```

**Besonderheiten:**
- Sealed Classes als Union Types
- Pattern Matching mit `when`
- Type-safe Union Types

**Weiterführende Links:**
- [Kotlin Documentation - Sealed Classes](https://kotlinlang.org/docs/sealed-classes.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Union Types: Discriminated Unions
:- type number
    --->    int_value(int)
    ;       float_value(float).

:- pred process_number(number::in, io::di, io::uo) is det.
process_number(int_value(I), !IO) :-
    io.format("Integer: %d\n", [i(I)], !IO).
process_number(float_value(F), !IO) :-
    io.format("Float: %f\n", [f(F)], !IO).
```

**Besonderheiten:**
- Discriminated Unions mit `---->` und `;` als Variantentrenner
- Jede Variante ist ein benannter Konstruktor mit typisierten Argumenten
- Pattern Matching direkt in der Klauseldefinition (jede Variante = eigene Klausel)

**Weiterführende Links:**
- [Mercury Language Reference - Discriminated Unions](https://www.mercurylang.org/information/doc-release/mercury_ref/Discriminated-unions.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Union Types: object Varianten
type
  NumberKind = enum
    IntKind, FloatKind
  
  Number = object
    case kind: NumberKind
    of IntKind:
      intValue: int
    of FloatKind:
      floatValue: float

var num1 = Number(kind: IntKind, intValue: 42)
var num2 = Number(kind: FloatKind, floatValue: 3.14)

# Pattern Matching
case num1.kind
of IntKind:
  echo "Integer: ", num1.intValue
of FloatKind:
  echo "Float: ", num1.floatValue
```

**Besonderheiten:**
- Object Varianten mit `case` und `of`
- Type-safe Union Types
- Pattern Matching mit `case`

**Weiterführende Links:**
- [Nim Documentation - Object Variants](https://nim-lang.org/docs/manual.html#object-variants)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Union Types: Variant Records
type
  NumberKind = (IntKind, FloatKind);
  Number = record
    case Kind: NumberKind of
      IntKind: (IntValue: Integer);
      FloatKind: (FloatValue: Double);
  end;

var
  num1: Number;
  num2: Number;
begin
  num1.Kind := IntKind;
  num1.IntValue := 42;
  
  num2.Kind := FloatKind;
  num2.FloatValue := 3.14;
end;
```

**Besonderheiten:**
- Variant Records mit `case` und `of`
- Type-safe Union Types
- Discriminant bestimmt aktiven Variant

**Weiterführende Links:**
- [Free Pascal Documentation - Variant Records](https://www.freepascal.org/docs-html/ref/refse19.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Union Types: Variants *)
type number =
  | Int of int
  | Float of float

let num1 = Int 42
let num2 = Float 3.14

(* Pattern Matching *)
let process_number num =
  match num with
  | Int i -> Printf.printf "Integer: %d\n" i
  | Float f -> Printf.printf "Float: %f\n" f
```

**Besonderheiten:**
- Variants mit `|` Syntax
- Pattern Matching mit `match`
- Type-safe Union Types

**Weiterführende Links:**
- [OCaml Documentation - Variants](https://ocaml.org/manual/data-types.html#s:variant-types)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Union Types: Union Types (seit Odin 0.1)
Number :: union {int, f64}

num1: Number = 42
num2: Number = 3.14

// Type checking
switch v in num1 {
case int:
    fmt.printf("Integer: %d\n", v)
case f64:
    fmt.printf("Float: %f\n", v)
}
```

**Besonderheiten:**
- Union Types mit `union{}` Syntax
- Type-safe Union Types
- Pattern Matching mit `switch`

**Weiterführende Links:**
- [Odin Documentation - Union Types](https://odin-lang.org/docs/overview/#union-types)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Union Types: Sum Types
data NumericValue = IntValue Int | FloatValue Number

num1 :: NumericValue
num1 = IntValue 42

num2 :: NumericValue
num2 = FloatValue 3.14

-- Pattern Matching
processNumber :: NumericValue -> String
processNumber (IntValue i) = "Integer: " <> show i
processNumber (FloatValue f) = "Float: " <> show f
```

**Besonderheiten:**
- Sum Types als Union Types
- Pattern Matching mit case expressions
- Type-safe Union Types

**Weiterführende Links:**
- [PureScript Documentation - Data Types](https://github.com/purescript/documentation/blob/master/language/Types.md)

</TabItem>
<TabItem value="python" label="Python">

```python
# Union Types: Union Types (seit Python 3.10)
from typing import Union

# Seit Python 3.10: | Syntax
Number = int | float

num1: Number = 42
num2: Number = 3.14

# Oder mit typing.Union (vor Python 3.10)
NumberOld = Union[int, float]

# Type checking zur Laufzeit
if isinstance(num1, int):
    print(f"Integer: {num1}")
elif isinstance(num1, float):
    print(f"Float: {num1}")
```

**Besonderheiten:**
- Union Types mit `|` Syntax (seit Python 3.10)
- `typing.Union` für ältere Versionen
- Type hints zur Laufzeit nicht erzwungen

**Weiterführende Links:**
- [Python Documentation - Union Types](https://docs.python.org/3/library/typing.html#typing.Union)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Union Types: Tag Unions
Number : [IntVal I32, FloatVal F64]

num1 : Number
num1 = IntVal 42

num2 : Number
num2 = FloatVal 3.14

-- Pattern Matching
processNumber : Number -> Str
processNumber = \num ->
    when num is
        IntVal i -> "Integer: $(Num.toStr i)"
        FloatVal f -> "Float: $(Num.toStr f)"
```

**Besonderheiten:**
- Tag Unions mit `[Tag1 Payload, Tag2 Payload]` Syntax
- Pattern Matching mit `when/is`
- Type-safe Tag Unions

**Weiterführende Links:**
- [Roc Documentation - Tags](https://www.roc-lang.org/tutorial#tags)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Union Types: Enums
enum Number {
    Int(i32),
    Float(f64),
}

let num1 = Number::Int(42);
let num2 = Number::Float(3.14);

// Pattern Matching
match num1 {
    Number::Int(i) => println!("Integer: {}", i),
    Number::Float(f) => println!("Float: {}", f),
}
```

**Besonderheiten:**
- Enums als Union Types
- Pattern Matching mit `match`
- Type-safe Union Types

**Weiterführende Links:**
- [The Rust Book - Enums](https://doc.rust-lang.org/book/ch06-01-defining-an-enum.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Union Types: Sealed Traits/Classes
sealed trait Number
case class IntNumber(value: Int) extends Number
case class FloatNumber(value: Double) extends Number

val num1: Number = IntNumber(42)
val num2: Number = FloatNumber(3.14)

// Pattern Matching
def processNumber(num: Number): String = num match {
    case IntNumber(i) => s"Integer: $i"
    case FloatNumber(f) => s"Float: $f"
}
```

**Besonderheiten:**
- Sealed Traits/Classes als Union Types
- Pattern Matching mit `match`
- Type-safe Union Types

**Weiterführende Links:**
- [Scala Documentation - Sealed Classes](https://docs.scala-lang.org/tour/pattern-matching.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Union Types: Enums
enum Number {
    case int(Int)
    case float(Double)
}

let num1: Number = .int(42)
let num2: Number = .float(3.14)

// Pattern Matching
switch num1 {
case .int(let i):
    print("Integer: \(i)")
case .float(let f):
    print("Float: \(f)")
}
```

**Besonderheiten:**
- Enums mit Associated Values als Union Types
- Pattern Matching mit `switch`
- Type-safe Union Types

**Weiterführende Links:**
- [Swift Documentation - Enumerations](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/enumerations/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Union Types: Union Types
type Number = number | string;

let num1: Number = 42;
let num2: Number = "3.14";

// Type narrowing
function processNumber(num: Number): string {
    if (typeof num === "number") {
        return `Integer: ${num}`;
    } else {
        return `String: ${num}`;
    }
}
```

**Besonderheiten:**
- Union Types mit `|` Syntax
- Type narrowing mit `typeof`
- Type erasure zur Laufzeit (JavaScript)

**Weiterführende Links:**
- [TypeScript Handbook - Union Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Union Types: Union Types
const Number = union(enum) {
    int: i32,
    float: f64,
};

const num1 = Number{ .int = 42 };
const num2 = Number{ .float = 3.14 };

// Pattern Matching
switch (num1) {
    .int => |i| std.debug.print("Integer: {}\n", .{i}),
    .float => |f| std.debug.print("Float: {}\n", .{f}),
}
```

**Besonderheiten:**
- Union Types mit `union(enum)` Syntax
- Pattern Matching mit `switch`
- Type-safe Union Types

**Weiterführende Links:**
- [Zig Documentation - Union Types](https://ziglang.org/documentation/0.11.0/#union)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Union Types mit or Type Specifier
(deftype string-or-number () '(or string number))

(typep 42 'string-or-number)        ; T
(typep "hello" 'string-or-number)   ; T
(typep :symbol 'string-or-number)   ; NIL

;; In Typdeklarationen
(defun process (x)
  (declare (type (or string number) x))
  (typecase x
    (string (format nil "String: ~a" x))
    (number (format nil "Number: ~a" x))))
```

**Besonderheiten:**
- Union Types über `(or type1 type2 ...)` Type Specifier
- Können mit `deftype` als benannte Typen definiert werden
- `typecase` für Typ-basiertes Dispatching
- Vollständig in das Typsystem integriert (prüfbar mit `typep` und `subtypep`)

**Weiterführende Links:**
- [Common Lisp HyperSpec - Type Specifiers](http://www.lispworks.com/documentation/HyperSpec/Body/04_bc.htm)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Union Types (Custom Types)
type Color
    = Red
    | Green
    | Blue

-- Union Types mit Daten
type Shape
    = Circle Float
    | Rectangle Float Float
    | Triangle Float Float Float

-- Verwendung mit Pattern Matching
area : Shape -> Float
area shape =
    case shape of
        Circle r -> pi * r * r
        Rectangle w h -> w * h
        Triangle a b c ->
            let s = (a + b + c) / 2
            in sqrt (s * (s - a) * (s - b) * (s - c))
```

**Besonderheiten:**
- Custom Types sind Tagged Unions (diskriminierte Unions)
- Jeder Konstruktor kann unterschiedliche Daten tragen
- Exhaustive Pattern Matching wird vom Compiler erzwungen
- Custom Types sind der primäre Mechanismus für Datenmodellierung

**Weiterführende Links:**
- [Elm Documentation - Custom Types](https://guide.elm-lang.org/types/custom_types.html)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
// Union Types (seit PHP 8.0)
function processInput(int|string $input): string {
    if (is_int($input)) {
        return "Zahl: $input";
    }
    return "Text: $input";
}

echo processInput(42);       // "Zahl: 42"
echo processInput("hello");  // "Text: hello"
?>
```

**Besonderheiten:**
- Union Types seit PHP 8.0 mit `|` Syntax
- Können für Parameter, Rückgabewerte und Properties verwendet werden
- `null` kann Teil eines Union Types sein: `int|null` (äquivalent zu `?int`)

**Weiterführende Links:**
- [PHP Documentation - Union Types](https://www.php.net/manual/en/language.types.declarations.php#language.types.declarations.union)

</TabItem>
<TabItem value="v" label="V">

```v
// Union Types (Sum Types)
type IntOrString = int | string

fn print_value(val IntOrString) {
    match val {
        int { println('Int: ${val}') }
        string { println('String: ${val}') }
    }
}

print_value(IntOrString(42))
print_value(IntOrString('hello'))
```

**Besonderheiten:**
- Sum Types mit `type Name = A | B | C`
- Tagged Unions (typsicher)
- Exhaustive `match` für Pattern Matching
- Können beliebig viele Typen kombinieren

**Weiterführende Links:**
- [V Documentation - Sum Types](https://github.com/vlang/v/blob/master/doc/docs.md#sum-types)

</TabItem>
</FilteredTabs>


## 3.8.2. Intersection Types

Typen, die alle Eigenschaften mehrerer Typen kombinieren, sodass ein Wert alle Anforderungen erfüllen muss.

### Sprachen {#sprachen}

<FilteredTabs availableTabs={['carbon', 'crystal', 'csharp', 'dart', 'fsharp', 'go', 'haskell', 'haxe', 'idris', 'java', 'julia', 'kotlin', 'nim', 'ocaml', 'odin', 'php', 'purescript', 'rust', 'scala', 'swift', 'typescript', 'zig']} orangeTabs={['python']}>
<TabItem value="carbon" label="Carbon">

```cpp
// Intersection Types: geplant
// Syntax noch nicht final
// type DrawableAndComparable = Drawable & Comparable;
```

**Besonderheiten:**
- Intersection Types sind geplant
- Experimentelle Sprache, Syntax kann sich noch ändern

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Intersection Types: Intersection Types
module Drawable
  abstract def draw
end

module Comparable
  abstract def compare(other)
end

# Intersection: Typ muss beide Module implementieren
alias DrawableAndComparable = Drawable & Comparable

class Shape
  include Drawable
  include Comparable
  
  def draw
    puts "Drawing shape"
  end
  
  def compare(other)
    # Comparison logic
  end
end
```

**Besonderheiten:**
- Intersection Types mit `&` Syntax
- Typ muss alle Module implementieren
- Compile-time Typ-Prüfung

**Weiterführende Links:**
- [Crystal Documentation - Modules](https://crystal-lang.org/reference/1.11/syntax_and_semantics/modules.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Intersection Types: Interfaces (seit C# 1.0)
interface IDrawable
{
    void Draw();
}

interface IComparable<T>
{
    int CompareTo(T other);
}

// Intersection: Klasse muss beide Interfaces implementieren
class Shape : IDrawable, IComparable<Shape>
{
    public void Draw() { }
    public int CompareTo(Shape other) => 0;
}

// Verwendung
void Process<T>(T item) where T : IDrawable, IComparable<T>
{
    item.Draw();
    // item.CompareTo(...) verfügbar
}
```

**Besonderheiten:**
- Interfaces als Intersection Types
- Mehrere Interfaces mit `where` Constraints
- Compile-time Typ-Prüfung

**Weiterführende Links:**
- [Microsoft C# Documentation - Interfaces](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/types/interfaces)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Intersection Types: Mixins (seit Dart 2.0)
mixin Drawable {
  void draw() {}
}

mixin Comparable<T> {
  int compareTo(T other) => 0;
}

// Intersection: Klasse muss beide Mixins verwenden
class Shape with Drawable, Comparable<Shape> {
  @override
  void draw() {}
  
  @override
  int compareTo(Shape other) => 0;
}
```

**Besonderheiten:**
- Mixins als Intersection Types
- Mehrere Mixins mit `with`
- Compile-time Typ-Prüfung

**Weiterführende Links:**
- [Dart Documentation - Mixins](https://dart.dev/language/mixins)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Intersection Types: Interfaces
type IDrawable =
    abstract member Draw: unit -> unit

type IComparable<'T> =
    abstract member CompareTo: 'T -> int

// Intersection: Typ muss beide Interfaces implementieren
type Shape() =
    interface IDrawable with
        member this.Draw() = ()
    
    interface IComparable<Shape> with
        member this.CompareTo(other: Shape) = 0

// Verwendung
let processItem (item: 'T when 'T :> IDrawable and 'T :> IComparable<'T>) =
    (item :> IDrawable).Draw()
```

**Besonderheiten:**
- Interfaces als Intersection Types
- Constraints mit `when` und `and`
- Compile-time Typ-Prüfung

**Weiterführende Links:**
- [F# Documentation - Interfaces](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/interfaces)

</TabItem>
<TabItem value="go" label="Go">

```go
// Intersection Types: Interfaces (seit Go 1.0)
type Drawable interface {
    Draw()
}

type Comparable interface {
    CompareTo(other interface{}) int
}

// Intersection: Typ muss beide Interfaces implementieren
type Shape struct{}

func (s Shape) Draw() {}
func (s Shape) CompareTo(other interface{}) int { return 0 }

// Verwendung
func processItem(item interface{}) {
    if d, ok := item.(Drawable); ok {
        d.Draw()
    }
    if c, ok := item.(Comparable); ok {
        c.CompareTo(nil)
    }
}
```

**Besonderheiten:**
- Interfaces als Intersection Types
- Duck Typing zur Laufzeit
- Type assertions mit `.(Interface)`

**Weiterführende Links:**
- [Go Documentation - Interfaces](https://go.dev/tour/methods/9)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Intersection Types: Type Class Constraints
class Drawable a where
    draw :: a -> IO ()

class Comparable a where
    compareTo :: a -> a -> Ordering

-- Intersection: Typ muss beide Type Classes erfüllen
data Shape = Shape

instance Drawable Shape where
    draw _ = putStrLn "Drawing shape"

instance Comparable Shape where
    compareTo _ _ = EQ

-- Verwendung
processItem :: (Drawable a, Comparable a) => a -> IO ()
processItem item = do
    draw item
    print (compareTo item item)
```

**Besonderheiten:**
- Type Class Constraints als Intersection Types
- Mehrere Constraints mit `(Constraint1, Constraint2)`
- Compile-time Typ-Prüfung

**Weiterführende Links:**
- [Haskell Documentation - Type Classes](https://www.haskell.org/tutorial/classes.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Intersection Types: Intersection Types
interface Drawable {
    function draw(): Void;
}

interface Comparable<T> {
    function compareTo(other: T): Int;
}

// Intersection: Typ muss beide Interfaces implementieren
class Shape implements Drawable implements Comparable<Shape> {
    public function draw(): Void {}
    public function compareTo(other: Shape): Int { return 0; }
}

// Verwendung
function processItem<T:Drawable & Comparable<T>>(item: T): Void {
    item.draw();
    item.compareTo(item);
}
```

**Besonderheiten:**
- Intersection Types mit `&` Syntax
- Mehrere Interfaces mit `implements`
- Compile-time Typ-Prüfung

**Weiterführende Links:**
- [Haxe Documentation - Interfaces](https://haxe.org/manual/types-interfaces.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Intersection Types: Interface Constraints
interface Drawable a where
    draw : a -> IO ()

interface Comparable a where
    compareTo : a -> a -> Ordering

-- Intersection: Typ muss beide Interfaces erfüllen
data Shape = MkShape

Drawable Shape where
    draw _ = putStrLn "Drawing shape"

Comparable Shape where
    compareTo _ _ = EQ

-- Verwendung
processItem : (Drawable a, Comparable a) => a -> IO ()
processItem item = do
    draw item
    print (compareTo item item)
```

**Besonderheiten:**
- Interface Constraints als Intersection Types
- Mehrere Constraints mit `(Constraint1, Constraint2)`
- Compile-time Typ-Prüfung

**Weiterführende Links:**
- [Idris Documentation - Interfaces](https://idris2.readthedocs.io/en/latest/tutorial/interfaces.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Intersection Types: Interfaces (seit Java 1.0)
interface Drawable {
    void draw();
}

interface Printable {
    void print();
}

// Intersection: Klasse muss beide Interfaces implementieren
class Shape implements Drawable, Printable {
    @Override
    public void draw() { System.out.println("Drawing"); }

    @Override
    public void print() { System.out.println("Printing"); }
}

// Intersection Type in Generics mit &
<T extends Drawable & Printable> void processItem(T item) {
    item.draw();
    item.print();
}
```

**Besonderheiten:**
- Interfaces als Intersection Types
- Mehrere Interfaces mit `&` in Generics
- Compile-time Typ-Prüfung

**Weiterführende Links:**
- [Oracle Java Documentation - Intersection Types](https://docs.oracle.com/javase/tutorial/java/generics/bounded.html)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Intersection Types: Intersection Types
abstract type Drawable end
abstract type Comparable end

# Intersection: Typ muss beide abstrakten Typen erfüllen
struct Shape <: Drawable <: Comparable
end

# Verwendung
function process_item(item::Drawable & Comparable)
    # item erfüllt beide Typen
end
```

**Besonderheiten:**
- Intersection Types mit `&` Syntax
- Typ muss beide abstrakten Typen erfüllen
- Compile-time Typ-Prüfung

**Weiterführende Links:**
- [Julia Documentation - Type System](https://docs.julialang.org/en/v1/manual/types/)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Intersection Types: Interfaces (seit Kotlin 1.0)
interface Drawable {
    fun draw()
}

interface Comparable<T> {
    fun compareTo(other: T): Int
}

// Intersection: Klasse muss beide Interfaces implementieren
class Shape : Drawable, Comparable<Shape> {
    override fun draw() {}
    override fun compareTo(other: Shape) = 0
}

// Verwendung mit Generics
fun <T> processItem(item: T) where T : Drawable, T : Comparable<T> {
    item.draw()
    item.compareTo(item)
}
```

**Besonderheiten:**
- Interfaces als Intersection Types
- Mehrere Interfaces mit `where` Constraints
- Compile-time Typ-Prüfung

**Weiterführende Links:**
- [Kotlin Documentation - Interfaces](https://kotlinlang.org/docs/interfaces.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Intersection Types: Concepts mit mehreren Constraints
type
  Drawable = concept a
    a.draw() is void

  Comparable = concept a
    a.compareTo(a) is int

# Intersection: Typ muss beide Concepts erfüllen
type Shape = object

proc draw(s: Shape) = discard
proc compareTo(s: Shape, other: Shape): int = 0

# Mehrere Constraints
proc processItem[T: Drawable and Comparable](item: T) =
  item.draw()
  discard item.compareTo(item)
```

**Besonderheiten:**
- Concepts als Intersection Types
- Intersection mit `and` Syntax
- Compile-time Typ-Prüfung

**Weiterführende Links:**
- [Nim Documentation - Concepts](https://nim-lang.org/docs/manual_experimental.html#concepts)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Intersection Types: Module Types *)
module type Drawable = sig
    val draw : unit -> unit
end

module type Comparable = sig
    val compare_to : 'a -> 'a -> int
end

(* Intersection: Modul muss beide Module Types erfüllen *)
module Shape : Drawable * Comparable = struct
    let draw () = ()
    let compare_to _ _ = 0
end
```

**Besonderheiten:**
- Module Types als Intersection Types
- Mehrere Module Types mit `*`
- Compile-time Typ-Prüfung

**Weiterführende Links:**
- [OCaml Documentation - Module Types](https://ocaml.org/manual/moduleexamples.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Intersection Types: Interfaces
Drawable :: interface {
    draw: proc(self: ^$T)
}

Comparable :: interface {
    compare_to: proc(self: ^$T, other: ^$T) -> int
}

// Intersection: Typ muss beide Interfaces implementieren
Shape :: struct {
    // ...
}

draw :: proc(self: ^Shape) {}
compare_to :: proc(self: ^Shape, other: ^Shape) -> int { return 0 }
```

**Besonderheiten:**
- Interfaces als Intersection Types
- Typ muss alle Interfaces implementieren
- Compile-time Typ-Prüfung

**Weiterführende Links:**
- [Odin Documentation - Interfaces](https://odin-lang.org/docs/overview/#interfaces)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Intersection Types: Type Class Constraints
class Drawable a where
    draw :: a -> Effect Unit

class Comparable a where
    compareTo :: a -> a -> Ordering

-- Intersection: Typ muss beide Type Classes erfüllen
data Shape = Shape

instance Drawable Shape where
    draw _ = pure unit

instance Comparable Shape where
    compareTo _ _ = EQ

-- Verwendung mit mehreren Constraints
processItem :: forall a. Drawable a => Comparable a => a -> Effect Unit
processItem item = do
    draw item
    pure unit
```

**Besonderheiten:**
- Type Class Constraints als Intersection Types
- Mehrere Constraints mit `=>` Ketten
- Compile-time Typ-Prüfung

**Weiterführende Links:**
- [PureScript Documentation - Type Classes](https://github.com/purescript/documentation/blob/master/language/Type-Classes.md)

</TabItem>
<TabItem value="python" label="Python">

```python
from typing import Protocol

class Drawable(Protocol):
    def draw(self) -> None: ...

class Comparable(Protocol):
    def compare_to(self, other) -> int: ...

# Intersection über Mehrfachvererbung von Protocols
class DrawableAndComparable(Drawable, Comparable, Protocol):
    ...

class Shape:
    def draw(self) -> None:
        pass

    def compare_to(self, other) -> int:
        return 0

def process_item(item: DrawableAndComparable) -> None:
    item.draw()
    item.compare_to(item)
```

**Besonderheiten:**
- Keine native Intersection-Syntax (`&` ist nicht für Typen verfügbar)
- Intersection über Mehrfachvererbung von `Protocol`-Klassen simuliert
- Type hints zur Laufzeit nicht erzwungen

**Weiterführende Links:**
- [Python Documentation - Protocols](https://docs.python.org/3/library/typing.html#typing.Protocol)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Intersection Types: Traits
trait Drawable {
    fn draw(&self);
}

trait Comparable {
    fn compare_to(&self, other: &Self) -> std::cmp::Ordering;
}

// Intersection: Typ muss beide Traits implementieren
struct Shape;

impl Drawable for Shape {
    fn draw(&self) {}
}

impl Comparable for Shape {
    fn compare_to(&self, other: &Self) -> std::cmp::Ordering {
        std::cmp::Ordering::Equal
    }
}

// Verwendung
fn process_item<T: Drawable + Comparable>(item: T) {
    item.draw();
    item.compare_to(&item);
}
```

**Besonderheiten:**
- Traits als Intersection Types
- Mehrere Traits mit `+` Syntax
- Compile-time Typ-Prüfung

**Weiterführende Links:**
- [The Rust Book - Traits](https://doc.rust-lang.org/book/ch10-02-traits.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Intersection Types: Traits
trait Drawable {
    def draw(): Unit
}

trait Comparable[T] {
    def compareTo(other: T): Int
}

// Intersection: Klasse muss beide Traits implementieren
class Shape extends Drawable with Comparable[Shape] {
    override def draw(): Unit = {}
    override def compareTo(other: Shape): Int = 0
}

// Verwendung
def processItem[T <: Drawable with Comparable[T]](item: T): Unit = {
    item.draw()
    item.compareTo(item)
}
```

**Besonderheiten:**
- Traits als Intersection Types
- Mehrere Traits mit `with`
- Compile-time Typ-Prüfung

**Weiterführende Links:**
- [Scala Documentation - Traits](https://docs.scala-lang.org/tour/traits.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Intersection Types: Protocols
protocol Drawable {
    func draw()
}

protocol Comparable {
    func compareTo(_ other: Self) -> ComparisonResult
}

// Intersection: Typ muss beide Protocols implementieren
struct Shape: Drawable, Comparable {
    func draw() {}
    func compareTo(_ other: Shape) -> ComparisonResult {
        return .orderedSame
    }
}

// Verwendung
func processItem<T: Drawable & Comparable>(_ item: T) {
    item.draw()
    item.compareTo(item)
}
```

**Besonderheiten:**
- Protocols als Intersection Types
- Mehrere Protocols mit `&` Syntax
- Compile-time Typ-Prüfung

**Weiterführende Links:**
- [Swift Documentation - Protocols](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/protocols/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Intersection Types: Intersection Types
interface Drawable {
    draw(): void;
}

interface Comparable<T> {
    compareTo(other: T): number;
}

// Intersection: Typ muss beide Interfaces erfüllen
type DrawableAndComparable<T> = Drawable & Comparable<T>;

class Shape implements Drawable, Comparable<Shape> {
    draw(): void {}
    compareTo(other: Shape): number { return 0; }
}

// Verwendung
function processItem<T extends Drawable & Comparable<T>>(item: T): void {
    item.draw();
    item.compareTo(item);
}
```

**Besonderheiten:**
- Intersection Types mit `&` Syntax
- Mehrere Interfaces mit `&`
- Type erasure zur Laufzeit (JavaScript)

**Weiterführende Links:**
- [TypeScript Handbook - Intersection Types](https://www.typescriptlang.org/docs/handbook/2/objects.html#intersection-types)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Intersection Types: Interfaces (geplant)
// Aktuell: Workaround mit Structs
const Drawable = struct {
    draw: fn(*const @This()) void,
};

const Comparable = struct {
    compare_to: fn(*const @This(), *const @This()) i32,
};

// Intersection: Typ muss beide Structs erfüllen
const Shape = struct {
    draw: fn(*const @This()) void,
    compare_to: fn(*const @This(), *const @This()) i32,
};
```

**Besonderheiten:**
- Interfaces sind geplant
- Aktuell: Workaround mit Structs
- Compile-time Typ-Prüfung

**Weiterführende Links:**
- [Zig Documentation - Types](https://ziglang.org/documentation/0.11.0/#types)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
// Intersection Types (seit PHP 8.1)
interface Loggable {
    public function log(): void;
}

interface Serializable {
    public function serialize(): string;
}

function process(Loggable&Serializable $input): void {
    $input->log();
    $input->serialize();
}
?>
```

**Besonderheiten:**
- Intersection Types seit PHP 8.1 mit `&` Syntax
- Erfordert, dass ein Wert mehrere Typen gleichzeitig erfüllt
- Nur für Klassen und Interfaces, nicht für primitive Typen

**Weiterführende Links:**
- [PHP Documentation - Intersection Types](https://www.php.net/manual/en/language.types.declarations.php#language.types.declarations.intersection)

</TabItem>
</FilteredTabs>


## 3.8.3. Enums

Aufzählungstypen, die eine feste Menge benannter Werte definieren.

### Sprachen {#sprachen}

<FilteredTabs availableTabs={['ada', 'c', 'carbon', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'fortran', 'fsharp', 'gleam', 'go', 'groovy', 'haxe', 'java', 'julia', 'koka', 'kotlin', 'lean4', 'matlab', 'mercury', 'nim', 'object-pascal', 'objective-c', 'ocaml', 'odin', 'php', 'purescript', 'python', 'roc', 'rust', 'scala', 'swift', 'typescript', 'v', 'vbnet', 'zig']} orangeTabs={['eiffel']}>
<TabItem value="ada" label="Ada">

```ada
-- Enums: Enumeration Types
type Color is (Red, Green, Blue);
type Status is (Pending, Active, Completed);

current_color : Color := Red;
current_status : Status := Active;
```

**Besonderheiten:**
- Enumeration Types mit `is` Syntax
- Werte sind geordnet (ordinal)
- Unterstützt Attribute wie `Color'First`, `Color'Last`

**Weiterführende Links:**
- [Ada Reference Manual - Enumeration Types](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-3-5-1.html)

</TabItem>
<TabItem value="c" label="C">

```c
// Enums: Enum Types (seit C89)
enum Color {
    RED,
    GREEN,
    BLUE
};

enum Status {
    PENDING,
    ACTIVE,
    COMPLETED
};

enum Color current_color = RED;
enum Status current_status = ACTIVE;
```

**Besonderheiten:**
- Enum Types seit C89
- Werte sind Integer-Konstanten
- Unterstützt explizite Werte: `RED = 1`

**Weiterführende Links:**
- [C Standard - Enum Types](https://en.cppreference.com/w/c/language/enum)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Enums: Enums (geplant)
// enum Color { Red, Green, Blue };
```

**Besonderheiten:**
- Enums sind geplant
- Experimentelle Sprache, Syntax kann sich noch ändern

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Enums: Enum Types (seit C++98)
enum Color {
    RED,
    GREEN,
    BLUE
};

// Scoped Enums (seit C++11)
enum class Status {
    PENDING,
    ACTIVE,
    COMPLETED
};

Color current_color = RED;
Status current_status = Status::ACTIVE;
```

**Besonderheiten:**
- Enum Types seit C++98
- Scoped Enums mit `enum class` (seit C++11)
- Unterstützt explizite Werte und Typen

**Weiterführende Links:**
- [cppreference.com - Enum Types](https://en.cppreference.com/w/cpp/language/enum)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Enums: Enum Types
enum Color
  Red
  Green
  Blue
end

enum Status
  Pending
  Active
  Completed
end

current_color = Color::Red
current_status = Status::Active
```

**Besonderheiten:**
- Enum Types mit `enum` Keyword
- Werte sind Typen
- Unterstützt Methoden auf Enums

**Weiterführende Links:**
- [Crystal Documentation - Enums](https://crystal-lang.org/reference/1.11/syntax_and_semantics/enum.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Enums: Enum Types (seit C# 1.0)
enum Color
{
    Red,
    Green,
    Blue
}

enum Status
{
    Pending,
    Active,
    Completed
}

Color currentColor = Color.Red;
Status currentStatus = Status.Active;
```

**Besonderheiten:**
- Enum Types seit C# 1.0
- Unterstützt explizite Werte und Typen
- Flags-Attribut für Bit-Flags

**Weiterführende Links:**
- [Microsoft C# Documentation - Enums](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/enum)

</TabItem>
<TabItem value="d" label="D">

```d
// Enums: Enum Types
enum Color {
    red,
    green,
    blue
}

enum Status {
    pending,
    active,
    completed
}

Color currentColor = Color.red;
Status currentStatus = Status.active;
```

**Besonderheiten:**
- Enum Types mit `enum` Keyword
- Werte sind Integer-Konstanten
- Unterstützt explizite Werte

**Weiterführende Links:**
- [D Language Specification - Enums](https://dlang.org/spec/enum.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Enums: Enum Types (seit Dart 2.17)
enum Color {
  red,
  green,
  blue
}

enum Status {
  pending,
  active,
  completed
}

Color currentColor = Color.red;
Status currentStatus = Status.active;
```

**Besonderheiten:**
- Enum Types seit Dart 2.17
- Unterstützt Methoden und Properties
- Enhanced Enums mit Feldern (seit Dart 2.17)

**Weiterführende Links:**
- [Dart Documentation - Enums](https://dart.dev/language/enums)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
-- Enums: Konstanten-Pattern (kein natives enum-Keyword)
class COLOR
feature
    red: INTEGER = 0
    green: INTEGER = 1
    blue: INTEGER = 2
    
    is_valid (c: INTEGER): BOOLEAN
        do
            Result := c >= red and c <= blue
        end
end

-- Verwendung
local
    c: COLOR
    current_color: INTEGER
do
    create c
    current_color := c.green
end
```

**Besonderheiten:**
- Eiffel hat kein natives `enum`-Keyword
- Enumerationen werden über Klassen mit Integer-Konstanten realisiert
- Typsicherheit muss manuell sichergestellt werden
- Keine automatische Exhaustiveness-Prüfung

**Weiterführende Links:**
- [Eiffel ECMA-367 Standard](https://www.ecma-international.org/publications-and-standards/standards/ecma-367/)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Enums: Enum Types
type Color =
    | Red = 0
    | Green = 1
    | Blue = 2

type Status =
    | Pending = 0
    | Active = 1
    | Completed = 2

let currentColor = Color.Red
let currentStatus = Status.Active
```

**Besonderheiten:**
- Enum Types mit expliziten Werten
- Werte müssen Integer sein
- Unterstützt Pattern Matching

**Weiterführende Links:**
- [F# Documentation - Enums](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/enumerations)

</TabItem>
<TabItem value="go" label="Go">

```go
// Enums: iota für Enums (seit Go 1.0)
type Color int

const (
    Red Color = iota
    Green
    Blue
)

type Status int

const (
    Pending Status = iota
    Active
    Completed
)

var currentColor Color = Red
var currentStatus Status = Active
```

**Besonderheiten:**
- Enums mit `iota` für automatische Werte
- Typ-Alias mit Integer-Basis
- Werte sind Integer-Konstanten

**Weiterführende Links:**
- [Go Documentation - Iota](https://go.dev/ref/spec#Iota)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Enums: Enum Types (Java-kompatibel)
enum Color {
    RED,
    GREEN,
    BLUE
}

enum Status {
    PENDING,
    ACTIVE,
    COMPLETED
}

Color currentColor = Color.RED
Status currentStatus = Status.ACTIVE
```

**Besonderheiten:**
- Enum Types (Java-kompatibel)
- Unterstützt Methoden und Properties
- Unterstützt Konstruktoren

**Weiterführende Links:**
- [Groovy Documentation - Enums](https://groovy-lang.org/syntax.html#_enum)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Enums: Enum Types
enum Color {
    Red;
    Green;
    Blue;
}

enum Status {
    Pending;
    Active;
    Completed;
}

var currentColor: Color = Red;
var currentStatus: Status = Active;
```

**Besonderheiten:**
- Enum Types mit `enum` Keyword
- Unterstützt Parameter für Enum-Werte
- Pattern Matching mit `switch`

**Weiterführende Links:**
- [Haxe Documentation - Enums](https://haxe.org/manual/types-enum-instance.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Enums: Enum Types (seit Java 5)
enum Color {
    RED,
    GREEN,
    BLUE
}

enum Status {
    PENDING,
    ACTIVE,
    COMPLETED
}

Color currentColor = Color.RED;
Status currentStatus = Status.ACTIVE;
```

**Besonderheiten:**
- Enum Types seit Java 5
- Unterstützt Methoden und Konstruktoren
- Unterstützt Interfaces

**Weiterführende Links:**
- [Oracle Java Documentation - Enums](https://docs.oracle.com/javase/tutorial/java/javaOO/enum.html)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Enums: Enum Types (seit Julia 0.4)
@enum Color Red Green Blue
@enum Status Pending Active Completed

current_color = Red
current_status = Active
```

**Besonderheiten:**
- Enum Types mit `@enum` Macro
- Werte sind Integer-Konstanten
- Unterstützt explizite Werte

**Weiterführende Links:**
- [Julia Documentation - Enums](https://docs.julialang.org/en/v1/base/base/#Base.@enum)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Enums: Algebraische Datentypen ohne Felder
type color
  Red
  Green
  Blue

type status
  Pending
  Active
  Completed

val current-color = Red
val current-status = Active
```

**Besonderheiten:**
- Enums werden als algebraische Datentypen ohne Felder definiert
- Konstruktoren beginnen mit Großbuchstaben
- Kein separates `enum`-Keyword — Enums sind ein Spezialfall von `type`

**Weiterführende Links:**
- [Koka Language Documentation - Type Declarations](https://koka-lang.github.io/koka/doc/book.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Enums: Enum Classes (seit Kotlin 1.0)
enum class Color {
    RED,
    GREEN,
    BLUE
}

enum class Status {
    PENDING,
    ACTIVE,
    COMPLETED
}

val currentColor = Color.RED
val currentStatus = Status.ACTIVE
```

**Besonderheiten:**
- Enum Classes seit Kotlin 1.0
- Unterstützt Properties und Methoden
- Unterstützt Interfaces

**Weiterführende Links:**
- [Kotlin Documentation - Enum Classes](https://kotlinlang.org/docs/enum-classes.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Enums: Induktive Typen ohne Felder
inductive Color where
  | red
  | green
  | blue

inductive Status where
  | pending
  | active
  | completed

def currentColor : Color := Color.red
def currentStatus : Status := Status.active
```

**Besonderheiten:**
- Enums sind ein Spezialfall von induktiven Typen (ohne Felder)
- Konstruktoren beginnen per Konvention mit Kleinbuchstaben
- `deriving Repr, BEq` generiert automatisch Repräsentation und Gleichheit

**Weiterführende Links:**
- [Lean 4 Documentation - Enumerated Types](https://lean-lang.org/lean4/doc/enum.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Enums: Enum Types
type Color = enum
  Red,
  Green,
  Blue

type Status = enum
  Pending,
  Active,
  Completed

var currentColor: Color = Red
var currentStatus: Status = Active
```

**Besonderheiten:**
- Enum Types mit `enum` Keyword
- Werte sind geordnet (ordinal)
- Unterstützt explizite Werte

**Weiterführende Links:**
- [Nim Documentation - Enums](https://nim-lang.org/docs/manual.html#types-enumerations)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Enums: Enum Types
type
  Color = (Red, Green, Blue);
  Status = (Pending, Active, Completed);

var
  currentColor: Color;
  currentStatus: Status;
begin
  currentColor := Red;
  currentStatus := Active;
end;
```

**Besonderheiten:**
- Enum Types mit `()` Syntax
- Werte sind geordnet (ordinal)
- Unterstützt explizite Werte

**Weiterführende Links:**
- [Free Pascal Documentation - Enums](https://www.freepascal.org/docs-html/ref/refse18.html)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Enums: Enum Types
typedef NS_ENUM(NSInteger, Color) {
    ColorRed,
    ColorGreen,
    ColorBlue
};

typedef NS_ENUM(NSInteger, Status) {
    StatusPending,
    StatusActive,
    StatusCompleted
};

Color currentColor = ColorRed;
Status currentStatus = StatusActive;
```

**Besonderheiten:**
- Enum Types mit `NS_ENUM` Macro
- Werte sind Integer-Konstanten
- Unterstützt explizite Werte

**Weiterführende Links:**
- [Apple Objective-C Documentation - Enums](https://developer.apple.com/documentation/objectivec/enums)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Enums: Variants *)
type color =
  | Red
  | Green
  | Blue

type status =
  | Pending
  | Active
  | Completed

let current_color = Red
let current_status = Active
```

**Besonderheiten:**
- Variants als Enums
- Pattern Matching mit `match`
- Type-safe Enum Types

**Weiterführende Links:**
- [OCaml Documentation - Variants](https://ocaml.org/manual/data-types.html#s:variant-types)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Enums: Enum Types
Color :: enum {
    Red,
    Green,
    Blue,
}

Status :: enum {
    Pending,
    Active,
    Completed,
}

current_color: Color = .Red
current_status: Status = .Active
```

**Besonderheiten:**
- Enum Types mit `enum{}` Syntax
- Werte sind Integer-Konstanten
- Unterstützt explizite Werte

**Weiterführende Links:**
- [Odin Documentation - Enums](https://odin-lang.org/docs/overview/#enums)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Enums: Sum Types
data Color = Red | Green | Blue
data Status = Pending | Active | Completed

currentColor :: Color
currentColor = Red

currentStatus :: Status
currentStatus = Active
```

**Besonderheiten:**
- Sum Types als Enums
- Pattern Matching mit case expressions
- Type-safe Enum Types

**Weiterführende Links:**
- [PureScript Documentation - Data Types](https://github.com/purescript/documentation/blob/master/language/Types.md)

</TabItem>
<TabItem value="python" label="Python">

```python
# Enums: Enum Types (seit Python 3.4)
from enum import Enum

class Color(Enum):
    RED = 1
    GREEN = 2
    BLUE = 3

class Status(Enum):
    PENDING = 1
    ACTIVE = 2
    COMPLETED = 3

current_color = Color.RED
current_status = Status.ACTIVE
```

**Besonderheiten:**
- Enum Types seit Python 3.4
- Unterstützt `IntEnum` und `Flag`
- Werte müssen explizit angegeben werden

**Weiterführende Links:**
- [Python Documentation - Enums](https://docs.python.org/3/library/enum.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Enums: Enum Types
enum Color {
    Red,
    Green,
    Blue,
}

enum Status {
    Pending,
    Active,
    Completed,
}

let current_color = Color::Red;
let current_status = Status::Active;
```

**Besonderheiten:**
- Enum Types mit `enum` Keyword
- Unterstützt Associated Values
- Pattern Matching mit `match`

**Weiterführende Links:**
- [The Rust Book - Enums](https://doc.rust-lang.org/book/ch06-01-defining-an-enum.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Enums: Enum Types (seit Scala 3)
enum Color:
    case Red, Green, Blue

enum Status:
    case Pending, Active, Completed

val currentColor = Color.Red
val currentStatus = Status.Active
```

**Besonderheiten:**
- Enum Types seit Scala 3
- Unterstützt Parameter und Methoden
- Pattern Matching mit `match`

**Weiterführende Links:**
- [Scala Documentation - Enums](https://docs.scala-lang.org/scala3/book/enums.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Enums: Enum Types
enum Color {
    case red, green, blue
}

enum Status {
    case pending, active, completed
}

let currentColor = Color.red
let currentStatus = Status.active
```

**Besonderheiten:**
- Enum Types mit `enum` Keyword
- Unterstützt Associated Values
- Pattern Matching mit `switch`

**Weiterführende Links:**
- [Swift Documentation - Enumerations](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/enumerations/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Enums: Enum Types (seit TypeScript 1.0)
enum Color {
    Red,
    Green,
    Blue
}

enum Status {
    Pending,
    Active,
    Completed
}

let currentColor = Color.Red;
let currentStatus = Status.Active;
```

**Besonderheiten:**
- Enum Types seit TypeScript 1.0
- Unterstützt String Enums
- Type erasure zur Laufzeit (JavaScript)

**Weiterführende Links:**
- [TypeScript Handbook - Enums](https://www.typescriptlang.org/docs/handbook/enums.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Enums: Enum Types (seit VB.NET 1.0)
Enum Color
    Red
    Green
    Blue
End Enum

Enum Status
    Pending
    Active
    Completed
End Enum

Dim currentColor As Color = Color.Red
Dim currentStatus As Status = Status.Active
```

**Besonderheiten:**
- Enum Types seit VB.NET 1.0
- Unterstützt explizite Werte
- Flags-Attribut für Bit-Flags

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Enums](https://learn.microsoft.com/en-us/dotnet/visual-basic/language-reference/statements/enum-statement)

</TabItem>
<TabItem value="v" label="V">

```v
// Enums: Enum Types (seit V 0.3)
enum Color {
    red
    green
    blue
}

enum Status {
    pending
    active
    completed
}

mut current_color := Color.red
mut current_status := Status.active
```

**Besonderheiten:**
- Enum Types seit V 0.3
- Werte sind Integer-Konstanten
- Unterstützt explizite Werte

**Weiterführende Links:**
- [V Documentation - Enums](https://github.com/vlang/v/blob/master/doc/docs.md#enums)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Enums: Enum Types
const Color = enum {
    red,
    green,
    blue,
};

const Status = enum {
    pending,
    active,
    completed,
};

const current_color = Color.red;
const current_status = Status.active;
```

**Besonderheiten:**
- Enum Types mit `enum{}` Syntax
- Werte sind Integer-Konstanten
- Unterstützt explizite Werte

**Weiterführende Links:**
- [Zig Documentation - Enums](https://ziglang.org/documentation/0.11.0/#enums)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Enums mit BIND(C) (seit Fortran 2003)
enum, bind(c)
    enumerator :: RED = 0, GREEN = 1, BLUE = 2
end enum

integer(kind=kind(RED)) :: color
color = GREEN
```

**Besonderheiten:**
- `ENUM, BIND(C)` für C-kompatible Enumerationen (seit Fortran 2003)
- Enumeratoren werden als INTEGER-Konstanten behandelt
- Hauptsächlich für C-Interoperabilität gedacht

**Weiterführende Links:**
- [Fortran Wiki - Enumerations](https://fortranwiki.org/fortran/show/Enumerations)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// Enums via Custom Types
pub type Color {
  Red
  Green
  Blue
}

pub fn to_string(color: Color) -> String {
  case color {
    Red -> "Rot"
    Green -> "Grün"
    Blue -> "Blau"
  }
}
```

**Besonderheiten:**
- Custom Types mit Konstruktoren ohne Argumente funktionieren wie Enums
- Exhaustiveness Checking durch den Compiler
- Kein separates `enum`-Keyword, verwendet `type`

**Weiterführende Links:**
- [Gleam Documentation - Custom Types](https://tour.gleam.run/data-types/custom-types/)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% Enums: Enumerationsklassen (seit R2010b)
classdef Color
    enumeration
        Red, Green, Blue
    end
end

c = Color.Red;
if c == Color.Green
    disp('Grün');
end
```

**Besonderheiten:**
- Enumerationen werden als `classdef` mit `enumeration`-Block definiert
- Können von Superklassen erben (z.B. `int32`)
- Unterstützung seit R2010b

**Weiterführende Links:**
- [MATLAB Documentation - Enumerations](https://www.mathworks.com/help/matlab/matlab_oop/enumerations.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Enums: Aufzählungstypen als Discriminated Unions ohne Argumente
:- type color
    --->    red
    ;       green
    ;       blue.

:- type status
    --->    pending
    ;       active
    ;       completed.
```

**Besonderheiten:**
- Enums sind Discriminated Unions ohne Argumente (nullstellige Konstruktoren)
- Definiert mit `---->` und `;` als Variantentrenner
- Exhaustive Pattern Matching über alle Konstruktoren erzwungen

**Weiterführende Links:**
- [Mercury Language Reference - Discriminated Unions](https://www.mercurylang.org/information/doc-release/mercury_ref/Discriminated-unions.html)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
// Enums (seit PHP 8.1)
enum Suit {
    case Hearts;
    case Diamonds;
    case Clubs;
    case Spades;
}

// Backed Enums mit Werten
enum Color: string {
    case Red = 'red';
    case Green = 'green';
    case Blue = 'blue';
}

$suit = Suit::Hearts;
$color = Color::from('red'); // Color::Red
?>
```

**Besonderheiten:**
- Native Enums seit PHP 8.1
- Backed Enums mit `string` oder `int` Werten
- Unterstützt Interfaces und Methoden in Enums
- `from()` und `tryFrom()` für Backed Enums

**Weiterführende Links:**
- [PHP Documentation - Enumerations](https://www.php.net/manual/en/language.enumerations.php)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Enums als Tag Unions ohne Payloads
Color : [Red, Green, Blue]

color : Color
color = Red

toStr : Color -> Str
toStr = \c ->
    when c is
        Red -> "Rot"
        Green -> "Grün"
        Blue -> "Blau"
```

**Besonderheiten:**
- Enums werden als Tag Unions ohne Payloads definiert
- Exhaustive Pattern Matching erzwungen
- Compile-time Type Safety

**Weiterführende Links:**
- [Roc Documentation - Tags](https://www.roc-lang.org/tutorial#tags)

</TabItem>
</FilteredTabs>


## 3.8.4. Algebraic Data Types

### Algebraic Data Types


Typen, die durch Kombination von Sum Types (Varianten) und Product Types (Tupel/Records) konstruiert werden.


<FilteredTabs availableTabs={['elm', 'fsharp', 'gleam', 'haskell', 'haxe', 'idris', 'koka', 'lean4', 'mercury', 'nim', 'ocaml', 'purescript', 'roc', 'rust', 'scala', 'swift']}>
<TabItem value="fsharp" label="F#">

```fsharp
// Algebraic Data Types: Discriminated Unions
type Shape =
    | Circle of float
    | Rectangle of float * float
    | Triangle of float * float * float

let circle = Circle 5.0
let rectangle = Rectangle(3.0, 4.0)
let triangle = Triangle(3.0, 4.0, 5.0)

// Pattern Matching
let area shape =
    match shape with
    | Circle r -> System.Math.PI * r * r
    | Rectangle(w, h) -> w * h
    | Triangle(a, b, c) -> 
        let s = (a + b + c) / 2.0
        sqrt(s * (s - a) * (s - b) * (s - c))
```

**Besonderheiten:**
- Discriminated Unions als ADTs
- Kombination von Sum Types und Product Types
- Pattern Matching mit `match`

**Weiterführende Links:**
- [F# Documentation - Discriminated Unions](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/discriminated-unions)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Algebraic Data Types: Data Types
data Shape =
    Circle Double
    | Rectangle Double Double
    | Triangle Double Double Double

circle :: Shape
circle = Circle 5.0

rectangle :: Shape
rectangle = Rectangle 3.0 4.0

triangle :: Shape
triangle = Triangle 3.0 4.0 5.0

-- Pattern Matching
area :: Shape -> Double
area (Circle r) = pi * r * r
area (Rectangle w h) = w * h
area (Triangle a b c) =
    let s = (a + b + c) / 2.0
    in sqrt (s * (s - a) * (s - b) * (s - c))
```

**Besonderheiten:**
- Data Types als ADTs
- Kombination von Sum Types und Product Types
- Pattern Matching mit case expressions

**Weiterführende Links:**
- [Haskell Documentation - Data Types](https://www.haskell.org/tutorial/data.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Algebraic Data Types: Data Types
data Shape : Type where
    Circle : Double -> Shape
    Rectangle : Double -> Double -> Shape
    Triangle : Double -> Double -> Double -> Shape

circle : Shape
circle = Circle 5.0

rectangle : Shape
rectangle = Rectangle 3.0 4.0

triangle : Shape
triangle = Triangle 3.0 4.0 5.0

-- Pattern Matching
area : Shape -> Double
area (Circle r) = pi * r * r
area (Rectangle w h) = w * h
area (Triangle a b c) =
    let s = (a + b + c) / 2.0
    in sqrt (s * (s - a) * (s - b) * (s - c))
```

**Besonderheiten:**
- Data Types als ADTs
- Kombination von Sum Types und Product Types
- Dependent Types erweitern ADTs

**Weiterführende Links:**
- [Idris Documentation - Data Types](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html#data-types)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Algebraic Data Types
type shape
  Circle(radius : float64)
  Rectangle(width : float64, height : float64)
  Triangle(a : float64, b : float64, c : float64)

val circle = Circle(5.0)
val rectangle = Rectangle(3.0, 4.0)
val triangle = Triangle(3.0, 4.0, 5.0)

// Pattern Matching
fun area(s : shape) : float64
  match s
    Circle(r)        -> pi * r * r
    Rectangle(w, h)  -> w * h
    Triangle(a, b, c) ->
      val s = (a + b + c) / 2.0
      sqrt(s * (s - a) * (s - b) * (s - c))
```

**Besonderheiten:**
- Algebraische Datentypen mit `type` und benannten Konstruktoren
- Konstruktoren können benannte Felder haben
- Pattern Matching mit `match`
- Product Types (Structs) mit `struct`-Keyword ebenfalls möglich

**Weiterführende Links:**
- [Koka Language Documentation - Type Declarations](https://koka-lang.github.io/koka/doc/book.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Algebraic Data Types: Induktive Typen
inductive Shape where
  | circle (radius : Float)
  | rectangle (width : Float) (height : Float)
  | triangle (a : Float) (b : Float) (c : Float)

def circle := Shape.circle 5.0
def rectangle := Shape.rectangle 3.0 4.0
def triangle := Shape.triangle 3.0 4.0 5.0

-- Pattern Matching
def area : Shape → Float
  | Shape.circle r => Float.pi * r * r
  | Shape.rectangle w h => w * h
  | Shape.triangle a b c =>
    let s := (a + b + c) / 2.0
    Float.sqrt (s * (s - a) * (s - b) * (s - c))
```

**Besonderheiten:**
- Induktive Typen als ADTs mit `inductive` und Konstruktoren
- Kombination von Sum Types und Product Types
- Pattern Matching direkt in der Funktionsdefinition

**Weiterführende Links:**
- [Lean 4 Documentation - Inductive Types](https://lean-lang.org/lean4/doc/declarations.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Algebraic Data Types: Discriminated Unions
:- type shape
    --->    circle(float)
    ;       rectangle(float, float)
    ;       triangle(float, float, float).

:- func area(shape) = float.
area(circle(R)) = math.pi * R * R.
area(rectangle(W, H)) = W * H.
area(triangle(A, B, C)) = Result :-
    S = (A + B + C) / 2.0,
    Result = math.sqrt(S * (S - A) * (S - B) * (S - C)).
```

**Besonderheiten:**
- Discriminated Unions als ADTs mit `---->` und `;`
- Kombination von Sum Types (`;`) und Product Types (Konstruktorargumente)
- Pattern Matching direkt in Funktionsklauseln

**Weiterführende Links:**
- [Mercury Language Reference - Discriminated Unions](https://www.mercurylang.org/information/doc-release/mercury_ref/Discriminated-unions.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Algebraic Data Types: Variants *)
type shape =
  | Circle of float
  | Rectangle of float * float
  | Triangle of float * float * float

let circle = Circle 5.0
let rectangle = Rectangle(3.0, 4.0)
let triangle = Triangle(3.0, 4.0, 5.0)

(* Pattern Matching *)
let area = function
  | Circle r -> Float.pi *. r *. r
  | Rectangle(w, h) -> w *. h
  | Triangle(a, b, c) ->
      let s = (a +. b +. c) /. 2.0 in
      sqrt (s *. (s -. a) *. (s -. b) *. (s -. c))
```

**Besonderheiten:**
- Variants als ADTs
- Kombination von Sum Types und Product Types
- Pattern Matching mit `match` oder `function`

**Weiterführende Links:**
- [OCaml Documentation - Variants](https://ocaml.org/manual/data-types.html#s:variant-types)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Algebraic Data Types: Data Types
data Shape
    = Circle Number
    | Rectangle Number Number
    | Triangle Number Number Number

circle :: Shape
circle = Circle 5.0

rectangle :: Shape
rectangle = Rectangle 3.0 4.0

triangle :: Shape
triangle = Triangle 3.0 4.0 5.0

-- Pattern Matching
area :: Shape -> Number
area (Circle r) = Math.pi * r * r
area (Rectangle w h) = w * h
area (Triangle a b c) =
    let s = (a + b + c) / 2.0
    in Math.sqrt (s * (s - a) * (s - b) * (s - c))
```

**Besonderheiten:**
- Data Types als ADTs
- Kombination von Sum Types und Product Types
- Pattern Matching mit case expressions

**Weiterführende Links:**
- [PureScript Documentation - Data Types](https://github.com/purescript/documentation/blob/master/language/Types.md)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Algebraic Data Types: Enums
enum Shape {
    Circle(f64),
    Rectangle(f64, f64),
    Triangle(f64, f64, f64),
}

let circle = Shape::Circle(5.0);
let rectangle = Shape::Rectangle(3.0, 4.0);
let triangle = Shape::Triangle(3.0, 4.0, 5.0);

// Pattern Matching
fn area(shape: Shape) -> f64 {
    match shape {
        Shape::Circle(r) => std::f64::consts::PI * r * r,
        Shape::Rectangle(w, h) => w * h,
        Shape::Triangle(a, b, c) => {
            let s = (a + b + c) / 2.0;
            (s * (s - a) * (s - b) * (s - c)).sqrt()
        }
    }
}
```

**Besonderheiten:**
- Enums mit Associated Values als ADTs
- Kombination von Sum Types und Product Types
- Pattern Matching mit `match`

**Weiterführende Links:**
- [The Rust Book - Enums](https://doc.rust-lang.org/book/ch06-01-defining-an-enum.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Algebraic Data Types: Sealed Traits/Classes (seit Scala 3)
enum Shape:
    case Circle(radius: Double)
    case Rectangle(width: Double, height: Double)
    case Triangle(a: Double, b: Double, c: Double)

val circle = Shape.Circle(5.0)
val rectangle = Shape.Rectangle(3.0, 4.0)
val triangle = Shape.Triangle(3.0, 4.0, 5.0)

// Pattern Matching
def area(shape: Shape): Double = shape match {
    case Shape.Circle(r) => math.Pi * r * r
    case Shape.Rectangle(w, h) => w * h
    case Shape.Triangle(a, b, c) =>
        val s = (a + b + c) / 2.0
        math.sqrt(s * (s - a) * (s - b) * (s - c))
}
```

**Besonderheiten:**
- Enums (seit Scala 3) als ADTs
- Kombination von Sum Types und Product Types
- Pattern Matching mit `match`

**Weiterführende Links:**
- [Scala Documentation - Enums](https://docs.scala-lang.org/scala3/book/enums.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Algebraic Data Types: Enums
enum Shape {
    case circle(radius: Double)
    case rectangle(width: Double, height: Double)
    case triangle(a: Double, b: Double, c: Double)
}

let circle = Shape.circle(radius: 5.0)
let rectangle = Shape.rectangle(width: 3.0, height: 4.0)
let triangle = Shape.triangle(a: 3.0, b: 4.0, c: 5.0)

// Pattern Matching
func area(_ shape: Shape) -> Double {
    switch shape {
    case .circle(let r):
        return Double.pi * r * r
    case .rectangle(let w, let h):
        return w * h
    case .triangle(let a, let b, let c):
        let s = (a + b + c) / 2.0
        return sqrt(s * (s - a) * (s - b) * (s - c))
    }
}
```

**Besonderheiten:**
- Enums mit Associated Values als ADTs
- Kombination von Sum Types und Product Types
- Pattern Matching mit `switch`

**Weiterführende Links:**
- [Swift Documentation - Enumerations](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/enumerations/)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Algebraischer Datentyp: Sum Type + Product Type
type Expr
    = Lit Int
    | Add Expr Expr
    | Mul Expr Expr
    | Neg Expr

-- Auswertung
eval : Expr -> Int
eval expr =
    case expr of
        Lit n -> n
        Add a b -> eval a + eval b
        Mul a b -> eval a * eval b
        Neg a -> -(eval a)

-- Beispiel
result = eval (Add (Lit 1) (Mul (Lit 2) (Lit 3)))
```

**Besonderheiten:**
- Custom Types sind vollständige ADTs (Sum Types + Product Types)
- Pattern Matching für Dekonstruktion
- Rekursive Typdefinitionen möglich
- Compiler erzwingt vollständige Behandlung aller Varianten

**Weiterführende Links:**
- [Elm Documentation - Custom Types](https://guide.elm-lang.org/types/custom_types.html)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// Algebraic Data Types
pub type Shape {
  Circle(radius: Float)
  Rectangle(width: Float, height: Float)
  Triangle(base: Float, height: Float)
}

pub fn area(shape: Shape) -> Float {
  case shape {
    Circle(r) -> 3.14159 *. r *. r
    Rectangle(w, h) -> w *. h
    Triangle(b, h) -> 0.5 *. b *. h
  }
}
```

**Besonderheiten:**
- Custom Types sind Algebraic Data Types (Sum Types + Product Types)
- Pattern Matching für Dekonstruktion
- Compiler erzwingt vollständige Abdeckung aller Varianten

**Weiterführende Links:**
- [Gleam Documentation - Custom Types](https://tour.gleam.run/data-types/custom-types/)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Algebraic Data Types: Enums mit Parametern
enum Shape {
    Circle(radius:Float);
    Rectangle(width:Float, height:Float);
    Point;
}

function area(shape:Shape):Float {
    return switch (shape) {
        case Circle(r): Math.PI * r * r;
        case Rectangle(w, h): w * h;
        case Point: 0.0;
    };
}

var s = Circle(5.0);
var a = area(s); // 78.54...
```

**Besonderheiten:**
- Enums mit Konstruktor-Parametern sind vollwertige algebraische Datentypen
- Pattern Matching mit `switch` für Destrukturierung
- Exhaustiveness Checking durch den Compiler

**Weiterführende Links:**
- [Haxe Documentation - Enum Instance](https://haxe.org/manual/types-enum-instance.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Algebraic Data Types: Object Variants
type
  ExprKind = enum
    ekLiteral, ekAdd, ekMul

  Expr = ref object
    case kind: ExprKind
    of ekLiteral:
      value: float
    of ekAdd, ekMul:
      left: Expr
      right: Expr

proc eval(e: Expr): float =
  case e.kind
  of ekLiteral: e.value
  of ekAdd: eval(e.left) + eval(e.right)
  of ekMul: eval(e.left) * eval(e.right)

let expr = Expr(kind: ekAdd,
  left: Expr(kind: ekLiteral, value: 1.0),
  right: Expr(kind: ekLiteral, value: 2.0))
echo eval(expr)  # 3.0
```

**Besonderheiten:**
- Object Variants als ADTs über `case`-Discriminant
- Exhaustive Pattern Matching mit `case`
- Compile-time Sicherheit bei Feldzugriff

**Weiterführende Links:**
- [Nim Documentation - Object Variants](https://nim-lang.org/docs/manual.html#types-object-variants)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Algebraic Data Types als Tag Unions
Shape : [Circle F64, Rectangle F64 F64, Triangle F64 F64 F64]

area : Shape -> F64
area = \shape ->
    when shape is
        Circle r -> 3.14159 * r * r
        Rectangle w h -> w * h
        Triangle a b c ->
            s = (a + b + c) / 2.0
            Num.sqrt (s * (s - a) * (s - b) * (s - c))
```

**Besonderheiten:**
- Tag Unions mit verschiedenen Payloads
- Exhaustive Pattern Matching
- Rekursive Tag Unions möglich

**Weiterführende Links:**
- [Roc Documentation - Tags](https://www.roc-lang.org/tutorial#tags)

</TabItem>
</FilteredTabs>



---

### Sum Types


Typen, die einen Wert aus einer Auswahl mehrerer möglicher Typen darstellen (disjunkte Vereinigung).


<FilteredTabs availableTabs={['elm', 'fsharp', 'gleam', 'haskell', 'idris', 'lean4', 'nim', 'ocaml', 'purescript', 'roc', 'rust', 'scala', 'swift', 'v']}>
<TabItem value="fsharp" label="F#">

```fsharp
// Sum Types: Discriminated Unions
type Result<'T, 'E> =
    | Ok of 'T
    | Error of 'E

let success = Ok 42
let failure = Error "Something went wrong"

// Pattern Matching
match success with
| Ok value -> printfn "Success: %A" value
| Error err -> printfn "Error: %s" err
```

**Besonderheiten:**
- Discriminated Unions als Sum Types
- Disjunkte Vereinigung von Typen
- Pattern Matching mit `match`

**Weiterführende Links:**
- [F# Documentation - Discriminated Unions](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/discriminated-unions)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Sum Types: Data Types
data Result t e =
    Ok t
    | Error e

success :: Result Int String
success = Ok 42

failure :: Result Int String
failure = Error "Something went wrong"

-- Pattern Matching
case success of
    Ok value -> putStrLn ("Success: " ++ show value)
    Error err -> putStrLn ("Error: " ++ err)
```

**Besonderheiten:**
- Data Types als Sum Types
- Disjunkte Vereinigung von Typen
- Pattern Matching mit case expressions

**Weiterführende Links:**
- [Haskell Documentation - Data Types](https://www.haskell.org/tutorial/data.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Sum Types: Data Types
data Result : Type -> Type -> Type where
    Ok : t -> Result t e
    Error : e -> Result t e

success : Result Int String
success = Ok 42

failure : Result Int String
failure = Error "Something went wrong"

-- Pattern Matching
case success of
    Ok value => putStrLn ("Success: " ++ show value)
    Error err => putStrLn ("Error: " ++ err)
```

**Besonderheiten:**
- Data Types als Sum Types
- Disjunkte Vereinigung von Typen
- Dependent Types erweitern Sum Types

**Weiterführende Links:**
- [Idris Documentation - Data Types](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html#data-types)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Sum Types: Induktive Typen
inductive Result (t : Type) (e : Type) where
  | ok : t → Result t e
  | error : e → Result t e

def success : Result Int String := Result.ok 42
def failure : Result Int String := Result.error "Something went wrong"

-- Pattern Matching
match success with
| Result.ok value => IO.println s!"Success: {value}"
| Result.error err => IO.println s!"Error: {err}"
```

**Besonderheiten:**
- Induktive Typen als Sum Types
- Disjunkte Vereinigung von Typen
- Pattern Matching mit `match` oder direkt in der Funktionsdefinition

**Weiterführende Links:**
- [Lean 4 Documentation - Inductive Types](https://lean-lang.org/lean4/doc/declarations.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Sum Types: Variants *)
type ('t, 'e) result =
  | Ok of 't
  | Error of 'e

let success = Ok 42
let failure = Error "Something went wrong"

(* Pattern Matching *)
match success with
  | Ok value -> Printf.printf "Success: %d\n" value
  | Error err -> Printf.printf "Error: %s\n" err
```

**Besonderheiten:**
- Variants als Sum Types
- Disjunkte Vereinigung von Typen
- Pattern Matching mit `match`

**Weiterführende Links:**
- [OCaml Documentation - Variants](https://ocaml.org/manual/data-types.html#s:variant-types)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Sum Types: Data Types
data Result t e
    = Ok t
    | Error e

success :: Result Int String
success = Ok 42

failure :: Result Int String
failure = Error "Something went wrong"

-- Pattern Matching
case success of
    Ok value -> log ("Success: " <> show value)
    Error err -> log ("Error: " <> err)
```

**Besonderheiten:**
- Data Types als Sum Types
- Disjunkte Vereinigung von Typen
- Pattern Matching mit case expressions

**Weiterführende Links:**
- [PureScript Documentation - Data Types](https://github.com/purescript/documentation/blob/master/language/Types.md)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Sum Types: Enums
enum Result<T, E> {
    Ok(T),
    Err(E),
}

let success: Result<i32, String> = Result::Ok(42);
let failure: Result<i32, String> = Result::Err("Something went wrong".to_string());

// Pattern Matching
match success {
    Result::Ok(value) => println!("Success: {}", value),
    Result::Err(err) => println!("Error: {}", err),
}
```

**Besonderheiten:**
- Enums als Sum Types
- Disjunkte Vereinigung von Typen
- Pattern Matching mit `match`

**Weiterführende Links:**
- [The Rust Book - Enums](https://doc.rust-lang.org/book/ch06-01-defining-an-enum.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Sum Types: Sealed Traits/Classes (seit Scala 3)
enum Result[+T, +E]:
    case Ok(value: T)
    case Error(err: E)

val success: Result[Int, String] = Result.Ok(42)
val failure: Result[Int, String] = Result.Error("Something went wrong")

// Pattern Matching
success match {
    case Result.Ok(value) => println(s"Success: $value")
    case Result.Error(err) => println(s"Error: $err")
}
```

**Besonderheiten:**
- Enums (seit Scala 3) als Sum Types
- Disjunkte Vereinigung von Typen
- Pattern Matching mit `match`

**Weiterführende Links:**
- [Scala Documentation - Enums](https://docs.scala-lang.org/scala3/book/enums.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Sum Types: Enums
enum Result<T, E> {
    case ok(T)
    case error(E)
}

let success: Result<Int, String> = .ok(42)
let failure: Result<Int, String> = .error("Something went wrong")

// Pattern Matching
switch success {
case .ok(let value):
    print("Success: \(value)")
case .error(let err):
    print("Error: \(err)")
}
```

**Besonderheiten:**
- Enums als Sum Types
- Disjunkte Vereinigung von Typen
- Pattern Matching mit `switch`

**Weiterführende Links:**
- [Swift Documentation - Enumerations](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/enumerations/)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Sum Type: Ein Wert kann eine von mehreren Varianten sein
type Direction
    = North
    | South
    | East
    | West

type Maybe a
    = Just a
    | Nothing

-- Verwendung
move : Direction -> (Int, Int) -> (Int, Int)
move dir (x, y) =
    case dir of
        North -> (x, y + 1)
        South -> (x, y - 1)
        East  -> (x + 1, y)
        West  -> (x - 1, y)
```

**Besonderheiten:**
- Custom Types sind immer Sum Types (eine von mehreren Varianten)
- Jede Variante kann unterschiedliche Daten tragen
- `Maybe` und `Result` sind die wichtigsten eingebauten Sum Types
- Compiler erzwingt vollständige Behandlung

**Weiterführende Links:**
- [Elm Documentation - Custom Types](https://guide.elm-lang.org/types/custom_types.html)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// Sum Types via Custom Types
pub type Result(a, e) {
  Ok(a)
  Error(e)
}

pub type Option(a) {
  Some(a)
  None
}
```

**Besonderheiten:**
- Custom Types mit mehreren Konstruktoren sind Sum Types
- `Result` und `Option` sind in der Standardbibliothek vordefiniert
- Exhaustive Pattern Matching durch den Compiler

**Weiterführende Links:**
- [Gleam Documentation - Custom Types](https://tour.gleam.run/data-types/custom-types/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Sum Types: Object Variants
type
  ShapeKind = enum
    skCircle, skRectangle, skTriangle

  Shape = object
    case kind: ShapeKind
    of skCircle:
      radius: float
    of skRectangle:
      width, height: float
    of skTriangle:
      a, b, c: float

proc area(s: Shape): float =
  case s.kind
  of skCircle: 3.14159 * s.radius * s.radius
  of skRectangle: s.width * s.height
  of skTriangle:
    let p = (s.a + s.b + s.c) / 2
    sqrt(p * (p - s.a) * (p - s.b) * (p - s.c))
```

**Besonderheiten:**
- Object Variants als Sum Types
- Discriminant-basierte Auswahl
- Exhaustive `case`-Prüfung

**Weiterführende Links:**
- [Nim Documentation - Object Variants](https://nim-lang.org/docs/manual.html#types-object-variants)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Sum Types als Tag Unions
Result a e : [Ok a, Err e]

divide : F64, F64 -> [Ok F64, Err Str]
divide = \x, y ->
    if y == 0.0 then
        Err "Division by zero"
    else
        Ok (x / y)
```

**Besonderheiten:**
- Tag Unions sind der primäre Mechanismus für Sum Types
- Können Typvariablen enthalten
- Exhaustive Pattern Matching erzwungen

**Weiterführende Links:**
- [Roc Documentation - Tags](https://www.roc-lang.org/tutorial#tags)

</TabItem>
<TabItem value="v" label="V">

```v
// Sum Types
struct Circle {
    radius f64
}

struct Rectangle {
    width  f64
    height f64
}

type Shape = Circle | Rectangle

fn area(s Shape) f64 {
    return match s {
        Circle { 3.14159 * s.radius * s.radius }
        Rectangle { s.width * s.height }
    }
}

c := Shape(Circle{radius: 5.0})
println(area(c))
```

**Besonderheiten:**
- Definition mit `type Name = A | B | C`
- Exhaustive Pattern Matching mit `match`
- Typsicherer Zugriff auf die Varianten
- Können Structs, Interfaces und primitive Typen kombinieren

**Weiterführende Links:**
- [V Documentation - Sum Types](https://github.com/vlang/v/blob/master/doc/docs.md#sum-types)

</TabItem>
</FilteredTabs>



---

### Product Types


Typen, die mehrere Werte gleichzeitig kombinieren (kartesisches Produkt).


<FilteredTabs availableTabs={['ada', 'c', 'carbon', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'elm', 'fsharp', 'gleam', 'go', 'groovy', 'haskell', 'haxe', 'idris', 'java', 'julia', 'kotlin', 'lean4', 'nim', 'object-pascal', 'objective-c', 'ocaml', 'odin', 'purescript', 'python', 'roc', 'rust', 'scala', 'swift', 'typescript', 'v', 'vbnet', 'zig']}>
<TabItem value="ada" label="Ada">

```ada
-- Product Types: Records
type Point is record
    X : Float;
    Y : Float;
end record;

type Person is record
    Name : String(1..50);
    Age : Integer;
end record;

p : Point := (X => 1.0, Y => 2.0);
person : Person := (Name => "Alice", Age => 30);
```

**Besonderheiten:**
- Records als Product Types
- Kartesisches Produkt von Typen
- Named fields mit `=>` Syntax

**Weiterführende Links:**
- [Ada Reference Manual - Records](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-3-8.html)

</TabItem>
<TabItem value="c" label="C">

```c
// Product Types: Structs
struct Point {
    double x;
    double y;
};

struct Person {
    char name[50];
    int age;
};

struct Point p = {1.0, 2.0};
struct Person person = {"Alice", 30};
```

**Besonderheiten:**
- Structs als Product Types
- Kartesisches Produkt von Typen
- Named fields mit `.` Syntax

**Weiterführende Links:**
- [C Standard - Struct Types](https://en.cppreference.com/w/c/language/struct)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Product Types: Structs
struct Point {
    var x: f64;
    var y: f64;
}

struct Person {
    var name: String;
    var age: i32;
}

var p: Point = {.x = 1.0, .y = 2.0};
var person: Person = {.name = "Alice", .age = 30};
```

**Besonderheiten:**
- Structs sind Product Types (kartesisches Produkt der Feldtypen)
- Experimentelle Sprache, Syntax kann sich noch ändern
- Designated Initializers mit `.field = value` Syntax

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Product Types: Structs/Classes
struct Point {
    double x;
    double y;
};

struct Person {
    std::string name;
    int age;
};

Point p{1.0, 2.0};
Person person{"Alice", 30};
```

**Besonderheiten:**
- Structs/Classes als Product Types
- Kartesisches Produkt von Typen
- Unterstützt Konstruktoren

**Weiterführende Links:**
- [cppreference.com - Structs](https://en.cppreference.com/w/cpp/language/struct)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Product Types: Structs
struct Point
  property x : Float64
  property y : Float64
  
  def initialize(@x, @y)
  end
end

struct Person
  property name : String
  property age : Int32
  
  def initialize(@name, @age)
  end
end

p = Point.new(1.0, 2.0)
person = Person.new("Alice", 30)
```

**Besonderheiten:**
- Structs als Product Types
- Kartesisches Produkt von Typen
- Unterstützt Properties

**Weiterführende Links:**
- [Crystal Documentation - Structs](https://crystal-lang.org/reference/1.11/syntax_and_semantics/structs.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Product Types: Structs/Classes
struct Point
{
    public double X;
    public double Y;
}

struct Person
{
    public string Name;
    public int Age;
}

var p = new Point { X = 1.0, Y = 2.0 };
var person = new Person { Name = "Alice", Age = 30 };
```

**Besonderheiten:**
- Structs/Classes als Product Types
- Kartesisches Produkt von Typen
- Unterstützt Properties

**Weiterführende Links:**
- [Microsoft C# Documentation - Structs](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/struct)

</TabItem>
<TabItem value="d" label="D">

```d
// Product Types: Structs
struct Point {
    double x;
    double y;
}

struct Person {
    string name;
    int age;
}

Point p = Point(1.0, 2.0);
Person person = Person("Alice", 30);
```

**Besonderheiten:**
- Structs als Product Types
- Kartesisches Produkt von Typen
- Unterstützt Konstruktoren

**Weiterführende Links:**
- [D Language Specification - Structs](https://dlang.org/spec/struct.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Product Types: Classes
class Point {
  final double x;
  final double y;
  
  Point(this.x, this.y);
}

class Person {
  final String name;
  final int age;
  
  Person(this.name, this.age);
}

var p = Point(1.0, 2.0);
var person = Person("Alice", 30);
```

**Besonderheiten:**
- Classes als Product Types
- Kartesisches Produkt von Typen
- Unterstützt Named Constructors

**Weiterführende Links:**
- [Dart Documentation - Classes](https://dart.dev/language/classes)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Product Types: Records
type Point = {
    X: float
    Y: float
}

type Person = {
    Name: string
    Age: int
}

let p = { X = 1.0; Y = 2.0 }
let person = { Name = "Alice"; Age = 30 }
```

**Besonderheiten:**
- Records als Product Types
- Kartesisches Produkt von Typen
- Unterstützt Pattern Matching

**Weiterführende Links:**
- [F# Documentation - Records](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/records)

</TabItem>
<TabItem value="go" label="Go">

```go
// Product Types: Structs (seit Go 1.0)
type Point struct {
    X float64
    Y float64
}

type Person struct {
    Name string
    Age  int
}

p := Point{X: 1.0, Y: 2.0}
person := Person{Name: "Alice", Age: 30}
```

**Besonderheiten:**
- Structs als Product Types
- Kartesisches Produkt von Typen
- Unterstützt Tags für Serialisierung

**Weiterführende Links:**
- [Go Documentation - Structs](https://go.dev/tour/moretypes/2)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Product Types: Classes (Java-kompatibel)
class Point {
    double x
    double y
}

class Person {
    String name
    int age
}

def p = new Point(x: 1.0, y: 2.0)
def person = new Person(name: "Alice", age: 30)
```

**Besonderheiten:**
- Classes als Product Types
- Kartesisches Produkt von Typen
- Unterstützt Named Parameters

**Weiterführende Links:**
- [Groovy Documentation - Classes](https://groovy-lang.org/objectorientation.html)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Product Types: Records
data Point = Point {
    x :: Double,
    y :: Double
}

data Person = Person {
    name :: String,
    age :: Int
}

p :: Point
p = Point { x = 1.0, y = 2.0 }

person :: Person
person = Person { name = "Alice", age = 30 }
```

**Besonderheiten:**
- Records als Product Types
- Kartesisches Produkt von Typen
- Unterstützt Record Syntax

**Weiterführende Links:**
- [Haskell Documentation - Records](https://www.haskell.org/tutorial/moretypes.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Product Types: Classes/Structs
class Point {
    public var x: Float;
    public var y: Float;
    
    public function new(x: Float, y: Float) {
        this.x = x;
        this.y = y;
    }
}

class Person {
    public var name: String;
    public var age: Int;
    
    public function new(name: String, age: Int) {
        this.name = name;
        this.age = age;
    }
}

var p = new Point(1.0, 2.0);
var person = new Person("Alice", 30);
```

**Besonderheiten:**
- Classes/Structs als Product Types
- Kartesisches Produkt von Typen
- Unterstützt Properties

**Weiterführende Links:**
- [Haxe Documentation - Classes](https://haxe.org/manual/types-class-instance.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Product Types: Records
record Point where
    constructor MkPoint
    x : Double
    y : Double

record Person where
    constructor MkPerson
    name : String
    age : Int

p : Point
p = MkPoint 1.0 2.0

person : Person
person = MkPerson "Alice" 30
```

**Besonderheiten:**
- Records als Product Types
- Kartesisches Produkt von Typen
- Dependent Types erweitern Product Types

**Weiterführende Links:**
- [Idris Documentation - Records](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html#records)

</TabItem>
<TabItem value="java" label="Java">

```java
// Product Types: Classes
class Point {
    double x;
    double y;
    
    Point(double x, double y) {
        this.x = x;
        this.y = y;
    }
}

class Person {
    String name;
    int age;
    
    Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
}

Point p = new Point(1.0, 2.0);
Person person = new Person("Alice", 30);
```

**Besonderheiten:**
- Classes als Product Types
- Kartesisches Produkt von Typen
- Unterstützt Konstruktoren

**Weiterführende Links:**
- [Oracle Java Documentation - Classes](https://docs.oracle.com/javase/tutorial/java/concepts/class.html)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Product Types: Structs
struct Point
    x::Float64
    y::Float64
end

struct Person
    name::String
    age::Int
end

p = Point(1.0, 2.0)
person = Person("Alice", 30)
```

**Besonderheiten:**
- Structs als Product Types
- Kartesisches Produkt von Typen
- Unterstützt Type Parameters

**Weiterführende Links:**
- [Julia Documentation - Structs](https://docs.julialang.org/en/v1/manual/types/#Composite-Types)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Product Types: Data Classes (seit Kotlin 1.0)
data class Point(
    val x: Double,
    val y: Double
)

data class Person(
    val name: String,
    val age: Int
)

val p = Point(1.0, 2.0)
val person = Person("Alice", 30)
```

**Besonderheiten:**
- Data Classes als Product Types
- Kartesisches Produkt von Typen
- Automatische `equals`, `hashCode`, `toString`

**Weiterführende Links:**
- [Kotlin Documentation - Data Classes](https://kotlinlang.org/docs/data-classes.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Product Types: Structures
structure Point where
  x : Float
  y : Float

structure Person where
  name : String
  age : Nat

def p : Point := { x := 1.0, y := 2.0 }
def person : Person := { name := "Alice", age := 30 }
```

**Besonderheiten:**
- `structure` definiert Product Types mit benannten Feldern
- Record-Syntax mit `{ field := value }` für Konstruktion
- Automatische Accessor-Funktionen (z.B. `p.x`)

**Weiterführende Links:**
- [Lean 4 Documentation - Structures](https://lean-lang.org/lean4/doc/struct.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Product Types: Objects
type Point = object
  x: float
  y: float

type Person = object
  name: string
  age: int

var p = Point(x: 1.0, y: 2.0)
var person = Person(name: "Alice", age: 30)
```

**Besonderheiten:**
- Objects als Product Types
- Kartesisches Produkt von Typen
- Unterstützt Vererbung

**Weiterführende Links:**
- [Nim Documentation - Objects](https://nim-lang.org/docs/manual.html#types-object-types)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Product Types: Records
type
  Point = record
    X: Double;
    Y: Double;
  end;
  
  Person = record
    Name: String;
    Age: Integer;
  end;

var
  p: Point;
  person: Person;
begin
  p.X := 1.0;
  p.Y := 2.0;
  person.Name := 'Alice';
  person.Age := 30;
end;
```

**Besonderheiten:**
- Records als Product Types
- Kartesisches Produkt von Typen
- Named fields mit `.` Syntax

**Weiterführende Links:**
- [Free Pascal Documentation - Records](https://www.freepascal.org/docs-html/ref/refse19.html)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Product Types: Structs
typedef struct {
    double x;
    double y;
} Point;

typedef struct {
    NSString *name;
    int age;
} Person;

Point p = {1.0, 2.0};
Person person = {@"Alice", 30};
```

**Besonderheiten:**
- Structs als Product Types
- Kartesisches Produkt von Typen
- Named fields mit `.` Syntax

**Weiterführende Links:**
- [Apple Objective-C Documentation - Structs](https://developer.apple.com/documentation/objectivec/structs)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Product Types: Records *)
type point = {
  x : float;
  y : float;
}

type person = {
  name : string;
  age : int;
}

let p = { x = 1.0; y = 2.0 }
let person = { name = "Alice"; age = 30 }
```

**Besonderheiten:**
- Records als Product Types
- Kartesisches Produkt von Typen
- Unterstützt Pattern Matching

**Weiterführende Links:**
- [OCaml Documentation - Records](https://ocaml.org/manual/data-types.html#s:record-types)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Product Types: Structs
Point :: struct {
    x: f64,
    y: f64,
}

Person :: struct {
    name: string,
    age: int,
}

p := Point{x = 1.0, y = 2.0}
person := Person{name = "Alice", age = 30}
```

**Besonderheiten:**
- Structs als Product Types
- Kartesisches Produkt von Typen
- Named fields mit `=` Syntax

**Weiterführende Links:**
- [Odin Documentation - Structs](https://odin-lang.org/docs/overview/#structs)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Product Types: Records
type Point = { x :: Number, y :: Number }
type Person = { name :: String, age :: Int }

p :: Point
p = { x: 1.0, y: 2.0 }

person :: Person
person = { name: "Alice", age: 30 }
```

**Besonderheiten:**
- Records als Product Types
- Kartesisches Produkt von Typen
- Unterstützt Record Syntax

**Weiterführende Links:**
- [PureScript Documentation - Records](https://github.com/purescript/documentation/blob/master/language/Syntax.md#records)

</TabItem>
<TabItem value="python" label="Python">

```python
# Product Types: Dataclasses (seit Python 3.7)
from dataclasses import dataclass

@dataclass
class Point:
    x: float
    y: float

@dataclass
class Person:
    name: str
    age: int

p = Point(1.0, 2.0)
person = Person("Alice", 30)
```

**Besonderheiten:**
- Dataclasses als Product Types (seit Python 3.7)
- Kartesisches Produkt von Typen
- Automatische `__init__`, `__repr__`, `__eq__`

**Weiterführende Links:**
- [Python Documentation - Dataclasses](https://docs.python.org/3/library/dataclasses.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Product Types: Structs
struct Point {
    x: f64,
    y: f64,
}

struct Person {
    name: String,
    age: i32,
}

let p = Point { x: 1.0, y: 2.0 };
let person = Person { name: "Alice".to_string(), age: 30 };
```

**Besonderheiten:**
- Structs als Product Types
- Kartesisches Produkt von Typen
- Unterstützt Pattern Matching

**Weiterführende Links:**
- [The Rust Book - Structs](https://doc.rust-lang.org/book/ch05-00-structs.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Product Types: Case Classes (seit Scala 1.0)
case class Point(x: Double, y: Double)
case class Person(name: String, age: Int)

val p = Point(1.0, 2.0)
val person = Person("Alice", 30)
```

**Besonderheiten:**
- Case Classes als Product Types
- Kartesisches Produkt von Typen
- Automatische `equals`, `hashCode`, `toString`

**Weiterführende Links:**
- [Scala Documentation - Case Classes](https://docs.scala-lang.org/tour/case-classes.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Product Types: Structs
struct Point {
    var x: Double
    var y: Double
}

struct Person {
    var name: String
    var age: Int
}

let p = Point(x: 1.0, y: 2.0)
let person = Person(name: "Alice", age: 30)
```

**Besonderheiten:**
- Structs als Product Types
- Kartesisches Produkt von Typen
- Unterstützt Properties

**Weiterführende Links:**
- [Swift Documentation - Structures](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/structures/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Product Types: Interfaces/Types
interface Point {
    x: number;
    y: number;
}

interface Person {
    name: string;
    age: number;
}

const p: Point = { x: 1.0, y: 2.0 };
const person: Person = { name: "Alice", age: 30 };
```

**Besonderheiten:**
- Interfaces/Types als Product Types
- Kartesisches Produkt von Typen
- Type erasure zur Laufzeit (JavaScript)

**Weiterführende Links:**
- [TypeScript Handbook - Interfaces](https://www.typescriptlang.org/docs/handbook/2/objects.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Product Types: Structures/Classes
Structure Point
    Public X As Double
    Public Y As Double
End Structure

Structure Person
    Public Name As String
    Public Age As Integer
End Structure

Dim p As Point
p.X = 1.0
p.Y = 2.0

Dim person As Person
person.Name = "Alice"
person.Age = 30
```

**Besonderheiten:**
- Structures/Classes als Product Types
- Kartesisches Produkt von Typen
- Unterstützt Properties

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Structures](https://learn.microsoft.com/en-us/dotnet/visual-basic/language-reference/statements/structure-statement)

</TabItem>
<TabItem value="v" label="V">

```v
// Product Types: Structs (seit V 0.3)
struct Point {
    x f64
    y f64
}

struct Person {
    name string
    age int
}

p := Point{x: 1.0, y: 2.0}
person := Person{name: "Alice", age: 30}
```

**Besonderheiten:**
- Structs als Product Types (seit V 0.3)
- Kartesisches Produkt von Typen
- Named fields mit `:` Syntax

**Weiterführende Links:**
- [V Documentation - Structs](https://github.com/vlang/v/blob/master/doc/docs.md#structs)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Product Types: Structs
const Point = struct {
    x: f64,
    y: f64,
};

const Person = struct {
    name: []const u8,
    age: i32,
};

const p = Point{ .x = 1.0, .y = 2.0 };
const person = Person{ .name = "Alice", .age = 30 };
```

**Besonderheiten:**
- Structs als Product Types
- Kartesisches Produkt von Typen
- Named fields mit `.` Syntax

**Weiterführende Links:**
- [Zig Documentation - Structs](https://ziglang.org/documentation/0.11.0/#struct)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Product Types: Records
type alias Point = { x : Float, y : Float }
type alias Person = { name : String, age : Int }

p : Point
p = { x = 1.0, y = 2.0 }

-- Product Types: Tuples
pair : (Int, String)
pair = (42, "Hallo")

-- Custom Type-Konstruktoren als Product Types
type Shape
    = Circle Float            -- 1 Feld
    | Rectangle Float Float   -- 2 Felder (Product)
```

**Besonderheiten:**
- Records sind benannte Product Types mit Feldnamen
- Tuples sind anonyme Product Types (maximal 3 Elemente)
- Custom Type-Konstruktoren können mehrere Felder haben (Product)
- Alle Product Types sind immutable

**Weiterführende Links:**
- [Elm Documentation - Records](https://guide.elm-lang.org/types/records.html)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// Product Types: Records und Tuples
pub type Point {
  Point(x: Int, y: Int)
}

// Tuple als anonymer Product Type
let pair = #(1, "hello")
```

**Besonderheiten:**
- Custom Types mit benannten Feldern sind Product Types (Records)
- Tuples sind anonyme Product Types
- Zugriff auf Record-Felder über Dot-Notation

**Weiterführende Links:**
- [Gleam Documentation - Custom Types](https://tour.gleam.run/data-types/custom-types/)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Product Types: Records
Point : { x : F64, y : F64 }

p : Point
p = { x: 1.0, y: 2.0 }

-- Product Types: Tuples
pair : (I64, Str)
pair = (42, "hello")
```

**Besonderheiten:**
- Records als benannte Product Types
- Tuples als anonyme Product Types
- Alle Product Types sind immutable

**Weiterführende Links:**
- [Roc Documentation - Records](https://www.roc-lang.org/tutorial#records)

</TabItem>
</FilteredTabs>


## 3.8.5. GADTs (Generalized Algebraic Data Types)

GADTs erweitern gewöhnliche algebraische Datentypen, indem Konstruktoren unterschiedliche Typ-Spezialisierungen des Rückgabetyps erzeugen können. Dadurch kann der Compiler in Pattern-Matching-Ausdrücken den konkreten Typ verfeinern und stärkere Typgarantien zur Compile-Zeit durchsetzen.

### Sprachen {#sprachen}

<FilteredTabs availableTabs={['haskell', 'idris', 'lean4', 'ocaml', 'scala']}>
<TabItem value="haskell" label="Haskell">

```haskell
-- GADTs: Generalized Algebraic Data Types
{-# LANGUAGE GADTs #-}

data Expr a where
    LitInt  :: Int -> Expr Int
    LitBool :: Bool -> Expr Bool
    Add     :: Expr Int -> Expr Int -> Expr Int
    If      :: Expr Bool -> Expr a -> Expr a -> Expr a

eval :: Expr a -> a
eval (LitInt n)    = n
eval (LitBool b)   = b
eval (Add x y)     = eval x + eval y
eval (If c t f)    = if eval c then eval t else eval f
```

**Besonderheiten:**
- Erfordert die `GADTs`-Spracherweiterung (`{-# LANGUAGE GADTs #-}`)
- Konstruktoren können unterschiedliche Rückgabetypen erzeugen
- Pattern Matching verfeinert den Typ automatisch (Type Refinement)

**Weiterführende Links:**
- [GHC Documentation - GADTs](https://ghc.gitlab.haskell.org/ghc/doc/users_guide/exts/gadt.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- GADTs: Dependent Data Types
data Expr : Type -> Type where
    LitInt  : Int -> Expr Int
    LitBool : Bool -> Expr Bool
    Add     : Expr Int -> Expr Int -> Expr Int
    If      : Expr Bool -> Expr a -> Expr a -> Expr a

eval : Expr a -> a
eval (LitInt n)    = n
eval (LitBool b)   = b
eval (Add x y)     = eval x + eval y
eval (If c t f)    = if eval c then eval t else eval f
```

**Besonderheiten:**
- GADTs sind ein natürlicher Spezialfall von Dependent Types
- Keine spezielle Erweiterung nötig — die Standard-Datentypdeklaration unterstützt GADTs
- Pattern Matching verfeinert den Typ automatisch

**Weiterführende Links:**
- [Idris 2 Documentation - Types and Functions](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- GADTs: Indexed Inductive Types
inductive Expr : Type → Type where
  | litInt  : Int → Expr Int
  | litBool : Bool → Expr Bool
  | add     : Expr Int → Expr Int → Expr Int
  | ite     : Expr Bool → Expr α → Expr α → Expr α

def eval : Expr α → α
  | Expr.litInt n    => n
  | Expr.litBool b   => b
  | Expr.add x y     => eval x + eval y
  | Expr.ite c t f   => if eval c then eval t else eval f
```

**Besonderheiten:**
- GADTs sind ein natürlicher Spezialfall von Dependent Types (indexed inductive families)
- Keine spezielle Erweiterung nötig — die Standard-`inductive`-Deklaration unterstützt GADTs
- Pattern Matching verfeinert den Typ automatisch (Type Refinement)

**Weiterführende Links:**
- [Lean 4 Documentation - Inductive Families](https://lean-lang.org/lean4/doc/declarations.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* GADTs: Generalized Algebraic Data Types (seit OCaml 4.00) *)
type _ expr =
  | LitInt  : int -> int expr
  | LitBool : bool -> bool expr
  | Add     : int expr * int expr -> int expr
  | If      : bool expr * 'a expr * 'a expr -> 'a expr

let rec eval : type a. a expr -> a = function
  | LitInt n     -> n
  | LitBool b    -> b
  | Add (x, y)   -> eval x + eval y
  | If (c, t, f) -> if eval c then eval t else eval f
```

**Besonderheiten:**
- Native GADT-Unterstützung seit OCaml 4.00
- Konstruktoren verwenden die `:` Syntax statt `of`
- Erfordert lokal abstrakte Typen (`type a.`) in rekursiven Funktionen

**Weiterführende Links:**
- [OCaml Manual - GADTs](https://v2.ocaml.org/manual/gadts-tutorial.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// GADTs: Generalized Algebraic Data Types (seit Scala 3)
enum Expr[A]:
  case LitInt(value: Int) extends Expr[Int]
  case LitBool(value: Boolean) extends Expr[Boolean]
  case Add(left: Expr[Int], right: Expr[Int]) extends Expr[Int]
  case If[A](cond: Expr[Boolean], thenBranch: Expr[A], elseBranch: Expr[A]) extends Expr[A]

def eval[A](expr: Expr[A]): A = expr match
  case Expr.LitInt(n)   => n
  case Expr.LitBool(b)  => b
  case Expr.Add(x, y)   => eval(x) + eval(y)
  case Expr.If(c, t, f) => if eval(c) then eval(t) else eval(f)
```

**Besonderheiten:**
- GADTs über Enums mit expliziten `extends`-Klauseln (seit Scala 3)
- Pattern Matching verfeinert den Typ automatisch
- In Scala 2 über Sealed Traits mit Typparametern möglich, aber weniger ergonomisch

**Weiterführende Links:**
- [Scala 3 Documentation - ADTs and GADTs](https://docs.scala-lang.org/scala3/book/types-adts-gadts.html)

</TabItem>
</FilteredTabs>

## 3.8.6. Type Classes

Abstrakte Schnittstellen, die eine Menge von Operationen definieren, die Typen implementieren müssen.

### Sprachen {#sprachen}

<FilteredTabs availableTabs={['haskell', 'idris', 'lean4', 'mercury', 'purescript', 'roc', 'rust', 'scala']}>
<TabItem value="haskell" label="Haskell">

```haskell
-- Type Classes: Type Classes
class Eq a where
    (==) :: a -> a -> Bool
    (/=) :: a -> a -> Bool

class Show a where
    show :: a -> String

-- Instanzen
instance Eq Int where
    (==) = (Prelude.==)
    (/=) = (Prelude./=)

instance Show Int where
    show = Prelude.show

-- Verwendung
compareValues :: (Eq a, Show a) => a -> a -> String
compareValues x y = if x == y
    then show x ++ " equals " ++ show y
    else show x ++ " does not equal " ++ show y
```

**Besonderheiten:**
- Type Classes als abstrakte Schnittstellen
- Instanzen implementieren Type Classes
- Mehrere Constraints möglich

**Weiterführende Links:**
- [Haskell Documentation - Type Classes](https://www.haskell.org/tutorial/classes.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Type Classes: Interfaces
interface Eq a where
    (==) : a -> a -> Bool
    (/=) : a -> a -> Bool

interface Show a where
    show : a -> String

-- Eigene Instanz für eigenen Typ
data Color = Red | Green | Blue

Eq Color where
    Red == Red = True
    Green == Green = True
    Blue == Blue = True
    _ == _ = False
    x /= y = not (x == y)

Show Color where
    show Red = "Red"
    show Green = "Green"
    show Blue = "Blue"

-- Verwendung mit Constraints
compareValues : (Eq a, Show a) => a -> a -> String
compareValues x y = if x == y
    then show x ++ " equals " ++ show y
    else show x ++ " does not equal " ++ show y
```

**Besonderheiten:**
- Interfaces als Type Classes
- Instanzen implementieren Interfaces
- Dependent Types erweitern Type Classes

**Weiterführende Links:**
- [Idris 2 Documentation - Interfaces](https://idris2.readthedocs.io/en/latest/tutorial/interfaces.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Type Classes: Klassen und Instanzen
class MyEq (α : Type) where
  eq : α → α → Bool

class MyShow (α : Type) where
  show : α → String

-- Instanzen für eigene Typen
inductive Color where | red | green | blue

instance : MyEq Color where
  eq Color.red Color.red := true
  eq Color.green Color.green := true
  eq Color.blue Color.blue := true
  eq _ _ := false

instance : MyShow Color where
  show Color.red := "Red"
  show Color.green := "Green"
  show Color.blue := "Blue"

-- Verwendung mit Constraints
def compareValues [MyEq α] [MyShow α] (x y : α) : String :=
  if MyEq.eq x y
  then MyShow.show x ++ " equals " ++ MyShow.show y
  else MyShow.show x ++ " does not equal " ++ MyShow.show y
```

**Besonderheiten:**
- `class` und `instance` als native Type-Class-Syntax
- Eckige Klammern `[...]` für Instance-Argumente (automatic resolution)
- Mehrere Constraints über mehrere `[...]`-Parameter möglich

**Weiterführende Links:**
- [Lean 4 Documentation - Type Classes](https://lean-lang.org/lean4/doc/typeclass.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Type Classes: Typeclasses
:- typeclass my_eq(T) where [
    pred eq(T::in, T::in) is semidet
].

:- typeclass my_show(T) where [
    func show(T) = string
].

% Instanzen für eigenen Typ
:- type color ---> red ; green ; blue.

:- instance my_eq(color) where [
    pred(eq/2) is color_eq
].

:- pred color_eq(color::in, color::in) is semidet.
color_eq(X, X).

:- instance my_show(color) where [
    func(show/1) is color_show
].

:- func color_show(color) = string.
color_show(red) = "Red".
color_show(green) = "Green".
color_show(blue) = "Blue".

% Verwendung mit Constraints
:- func compare_values(T, T) = string <= (my_eq(T), my_show(T)).
compare_values(X, Y) =
    ( if eq(X, Y) then
        show(X) ++ " equals " ++ show(Y)
    else
        show(X) ++ " does not equal " ++ show(Y)
    ).
```

**Besonderheiten:**
- Type Classes mit `typeclass` und `instance` Deklarationen
- Methoden werden über `pred` und `func` mit Determinismus-Deklaration spezifiziert
- Constraints mit `<=` Syntax auf Funktionssignaturen
- Instanz-Methoden werden über benannte Prädikate/Funktionen implementiert

**Weiterführende Links:**
- [Mercury Language Reference - Type Classes](https://www.mercurylang.org/information/doc-release/mercury_ref/Type-classes.html)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Type Classes: Type Classes
class Eq a where
    eq :: a -> a -> Boolean

class Show a where
    show :: a -> String

-- Instanzen für eigene Typen
data Color = Red | Green | Blue

instance Eq Color where
    eq Red Red = true
    eq Green Green = true
    eq Blue Blue = true
    eq _ _ = false

instance Show Color where
    show Red = "Red"
    show Green = "Green"
    show Blue = "Blue"

-- Verwendung
compareValues :: forall a. Eq a => Show a => a -> a -> String
compareValues x y = if eq x y
    then show x <> " equals " <> show y
    else show x <> " does not equal " <> show y
```

**Besonderheiten:**
- Type Classes als abstrakte Schnittstellen
- Instanzen implementieren Type Classes
- Mehrere Constraints möglich

**Weiterführende Links:**
- [PureScript Documentation - Type Classes](https://github.com/purescript/documentation/blob/master/language/Type-Classes.md)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Type Classes: Traits
trait Eq {
    fn eq(&self, other: &Self) -> bool;
    fn ne(&self, other: &Self) -> bool {
        !self.eq(other)
    }
}

trait Display {
    fn fmt(&self) -> String;
}

// Implementierungen
impl Eq for i32 {
    fn eq(&self, other: &Self) -> bool {
        self == other
    }
}

impl Display for i32 {
    fn fmt(&self) -> String {
        self.to_string()
    }
}

// Verwendung
fn compare_values<T: Eq + Display>(x: T, y: T) -> String {
    if x.eq(&y) {
        format!("{} equals {}", x.fmt(), y.fmt())
    } else {
        format!("{} does not equal {}", x.fmt(), y.fmt())
    }
}
```

**Besonderheiten:**
- Traits als Type Classes
- Implementierungen erfüllen Traits
- Mehrere Trait bounds möglich

**Weiterführende Links:**
- [The Rust Book - Traits](https://doc.rust-lang.org/book/ch10-02-traits.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Type Classes: Type Classes (seit Scala 2.5)
trait Eq[A] {
    def eq(a: A, b: A): Boolean
}

trait Show[A] {
    def show(a: A): String
}

// Instanzen
implicit object IntEq extends Eq[Int] {
    def eq(a: Int, b: Int): Boolean = a == b
}

implicit object IntShow extends Show[Int] {
    def show(a: Int): String = a.toString
}

// Verwendung
def compareValues[A](x: A, y: A)(implicit eq: Eq[A], show: Show[A]): String = {
    if (eq.eq(x, y)) {
        show.show(x) + " equals " + show.show(y)
    } else {
        show.show(x) + " does not equal " + show.show(y)
    }
}
```

**Besonderheiten:**
- Type Classes mit Traits und Implicits
- Implicit parameters für Type Classes
- Mehrere Constraints möglich

**Weiterführende Links:**
- [Scala Documentation - Type Classes](https://docs.scala-lang.org/tour/implicit-parameters.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Abilities (ähnlich Type Classes)
-- Eingebaute Abilities: Eq, Hash, Inspect
-- Custom Abilities können definiert werden

isEqual : a, a -> Bool where a implements Eq
isEqual = \x, y -> x == y
```

**Besonderheiten:**
- Abilities sind Rocs Konzept für Type Classes / Traits
- Eingebaute Abilities: `Eq`, `Hash`, `Inspect`, `Encoding`, `Decoding`
- Custom Abilities können definiert werden

**Weiterführende Links:**
- [Roc Documentation - Abilities](https://www.roc-lang.org/tutorial#abilities)

</TabItem>
</FilteredTabs>


## 3.8.7. Dependent Types

Typen, die von Werten abhängen, ermöglichen präzisere Typbeschreibungen und beweisbare Korrektheit.

### Sprachen {#sprachen}

<FilteredTabs availableTabs={['idris', 'lean4']}>
<TabItem value="idris" label="Idris">

```idris
-- Dependent Types: Dependent Types
data Vect : Nat -> Type -> Type where
    Nil : Vect 0 a
    (::) : a -> Vect n a -> Vect (S n) a

-- Vektor mit bekannter Länge zur Compile-Zeit
vec3 : Vect 3 Int
vec3 = [1, 2, 3]

-- Funktion mit abhängigem Typ
append : Vect n a -> Vect m a -> Vect (n + m) a
append [] ys = ys
append (x :: xs) ys = x :: append xs ys

-- Verwendung
vec1 : Vect 2 Int
vec1 = [1, 2]

vec2 : Vect 2 Int
vec2 = [3, 4]

combined : Vect 4 Int
combined = append vec1 vec2
```

**Besonderheiten:**
- Dependent Types sind fundamental in Idris
- Typen können von Werten abhängen
- Compile-time Beweise möglich

**Weiterführende Links:**
- [Idris Documentation - Dependent Types](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html#dependent-types)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Dependent Types: Vektor mit längenindiziertem Typ
inductive Vect : Nat → Type → Type where
  | nil  : Vect 0 α
  | cons : α → Vect n α → Vect (n + 1) α

-- Vektor mit bekannter Länge zur Compile-Zeit
def vec3 : Vect 3 Int := .cons 1 (.cons 2 (.cons 3 .nil))

-- Funktion mit abhängigem Typ
def append : Vect n α → Vect m α → Vect (n + m) α
  | .nil, ys => ys
  | .cons x xs, ys => .cons x (append xs ys)

-- Verwendung
def vec1 : Vect 2 Int := .cons 1 (.cons 2 .nil)
def vec2 : Vect 2 Int := .cons 3 (.cons 4 .nil)
def combined : Vect 4 Int := append vec1 vec2
```

**Besonderheiten:**
- Dependent Types sind fundamental in Lean 4 — Lean 4 ist ein vollwertiger Beweisassistent
- Typen können von Werten abhängen (z.B. Vektorlänge im Typ)
- Compile-Zeit-Beweise und taktische Metaprogrammierung (`by omega`, `by simp`)
- Universumspolymorphismus: `Type`, `Type 1`, `Type 2`, ...

**Weiterführende Links:**
- [Lean 4 Documentation - Dependent Types](https://lean-lang.org/lean4/doc/dep_types.html)

</TabItem>
</FilteredTabs>


## 3.8.8. Symbol Type

Eindeutige, unveränderliche Werte, die als Identifikatoren verwendet werden.

### Sprachen {#sprachen}

<FilteredTabs availableTabs={['clojure', 'common-lisp', 'elixir', 'erlang', 'javascript', 'prolog', 'racket', 'ruby', 'scheme', 'typescript']} orangeTabs={['lua', 'perl', 'python']}>
<TabItem value="clojure" label="Clojure">

```clojure
;; Symbol Type: Symbols
(def my-symbol 'my-symbol)
(def another-symbol 'another-symbol)

;; Symbols sind eindeutig
(= 'my-symbol 'my-symbol)  ; true
(= 'my-symbol 'another-symbol)  ; false

;; Verwendung in Maps als Keys
{:my-key "value"}
{'my-symbol "value"}
```

**Besonderheiten:**
- Symbols sind fundamental in Clojure
- Eindeutige, unveränderliche Werte
- Verwendung als Identifikatoren

**Weiterführende Links:**
- [Clojure Documentation - Symbols](https://clojure.org/reference/data_structures#Symbols)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Symbol Type: Symbols
(defvar my-symbol 'my-symbol)
(defvar another-symbol 'another-symbol)

;; Symbols sind eindeutig
(eq 'my-symbol 'my-symbol)  ; T
(eq 'my-symbol 'another-symbol)  ; NIL

;; Verwendung in Property Lists
(setf (get 'my-symbol 'property) 'value)
```

**Besonderheiten:**
- Symbols sind fundamental in Common Lisp
- Eindeutige, unveränderliche Werte
- Verwendung als Identifikatoren

**Weiterführende Links:**
- [Common Lisp HyperSpec - Symbols](http://www.lispworks.com/documentation/HyperSpec/Body/t_symbol.htm)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Symbol Type: Atoms
my_atom = :my_atom
another_atom = :another_atom

# Atoms sind eindeutig
my_atom == :my_atom  # true
my_atom == another_atom  # false

# Verwendung in Maps
%{my_atom => "value"}
%{:my_atom => "value"}
```

**Besonderheiten:**
- Atoms als Symbols
- Eindeutige, unveränderliche Werte
- Verwendung als Identifikatoren

**Weiterführende Links:**
- [Elixir Documentation - Atoms](https://elixir-lang.org/getting-started/basic-types.html#atoms)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% Symbol Type: Atoms
MyAtom = my_atom,
AnotherAtom = another_atom.

% Atoms sind eindeutig
MyAtom =:= my_atom.  % true
MyAtom =:= AnotherAtom.  % false

% Verwendung in Maps
#{my_atom => "value"}.
```

**Besonderheiten:**
- Atoms als Symbols
- Eindeutige, unveränderliche Werte
- Verwendung als Identifikatoren

**Weiterführende Links:**
- [Erlang Documentation - Atoms](https://www.erlang.org/doc/reference_manual/data_types.html#atom)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Symbol Type: Symbols (seit ES6)
const mySymbol = Symbol('mySymbol');
const anotherSymbol = Symbol('anotherSymbol');

// Symbols sind eindeutig
mySymbol === Symbol('mySymbol');  // false
const sameSymbol = Symbol.for('mySymbol');
Symbol.for('mySymbol') === sameSymbol;  // true

// Verwendung als Object Keys
const obj = {
    [mySymbol]: 'value'
};
```

**Besonderheiten:**
- Symbols seit ES6
- Eindeutige Werte (außer `Symbol.for`)
- Verwendung als Object Keys

**Weiterführende Links:**
- [MDN Web Docs - Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Symbol Type: nicht direkt unterstützt
-- Workaround: Strings als Identifikatoren
local my_symbol = "my_symbol"
local another_symbol = "another_symbol"

-- Verwendung in Tables
local t = {}
t[my_symbol] = "value"
t["my_symbol"] = "value"
```

**Besonderheiten:**
- Keine direkten Symbols
- Strings als Workaround
- Tables verwenden Strings als Keys

**Weiterführende Links:**
- [Lua Documentation - Types](https://www.lua.org/manual/5.4/manual.html#2.1)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Symbol Type: nicht direkt unterstützt
# Workaround: Strings als Identifikatoren
my $my_symbol = 'my_symbol';
my $another_symbol = 'another_symbol';

# Verwendung in Hashes
my %hash = (
    $my_symbol => 'value',
    'my_symbol' => 'value'
);
```

**Besonderheiten:**
- Keine direkten Symbols
- Strings als Workaround
- Hashes verwenden Strings als Keys

**Weiterführende Links:**
- [Perl Documentation - Data Types](https://perldoc.perl.org/perldata)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Symbol Type: Atome als Symbols
my_atom = hello,
another_atom = world,

% Atome sind eindeutig und unveränderlich
hello == hello,           % true
hello == world,           % false

% Atome als Schlüssel in assoziativen Listen
Pairs = [name-hello, status-active],
member(name-hello, Pairs), % true

% Atome als Enumerationswerte
Color = red,
(Color == red -> write('Rot') ; write('Andere Farbe'))
```

**Besonderheiten:**
- Atome sind die nativen Symbols in Prolog
- Eindeutige, unveränderliche Werte (interned)
- Vergleich über `==/2` (strukturelle Gleichheit) oder Unifikation `=/2`
- Atome werden häufig als Bezeichner, Tags und Enumerationswerte verwendet

**Weiterführende Links:**
- [SWI-Prolog Documentation - Atoms](https://www.swi-prolog.org/pldoc/man?section=atoms)

</TabItem>
<TabItem value="python" label="Python">

```python
# Symbol Type: nicht direkt unterstützt
# Workaround: Strings oder Enum als Identifikatoren
from enum import Enum

class Symbol(Enum):
    MY_SYMBOL = "my_symbol"
    ANOTHER_SYMBOL = "another_symbol"

# Oder mit Strings
my_symbol = "my_symbol"
another_symbol = "another_symbol"

# Verwendung in Dictionaries
d = {my_symbol: "value", "my_symbol": "value"}
```

**Besonderheiten:**
- Keine direkten Symbols
- Strings oder Enum als Workaround
- Dictionaries verwenden hashable Werte als Keys

**Weiterführende Links:**
- [Python Documentation - Enum](https://docs.python.org/3/library/enum.html)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
; Symbol Type: Symbols
(define my-symbol 'my-symbol)
(define another-symbol 'another-symbol)

;; Symbols sind eindeutig
(eq? 'my-symbol 'my-symbol)      ; #t
(eq? 'my-symbol 'another-symbol) ; #f

;; Verwendung in Hash Tables
(define h (make-hash))
(hash-set! h 'my-symbol "value")
```

**Besonderheiten:**
- Symbols sind fundamental in Racket
- Eindeutige, unveränderliche Werte
- Verwendung als Identifikatoren

**Weiterführende Links:**
- [Racket Documentation - Symbols](https://docs.racket-lang.org/reference/symbols.html)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Symbol Type: Symbols
my_symbol = :my_symbol
another_symbol = :another_symbol

# Symbols sind eindeutig
my_symbol == :my_symbol  # true
my_symbol == another_symbol  # false

# Verwendung in Hashes
hash = {my_symbol => "value", :my_symbol => "value"}
```

**Besonderheiten:**
- Symbols sind fundamental in Ruby
- Eindeutige, unveränderliche Werte
- Verwendung als Identifikatoren

**Weiterführende Links:**
- [Ruby Documentation - Symbols](https://ruby-doc.org/core-3.1.2/Symbol.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; Symbol Type: Symbols
(define my-symbol 'my-symbol)
(define another-symbol 'another-symbol)

;; Symbols sind eindeutig
(eq? 'my-symbol 'my-symbol)  ; #t
(eq? 'my-symbol 'another-symbol)  ; #f

;; Verwendung in Association Lists
(define alist '((my-symbol . "value")))
```

**Besonderheiten:**
- Symbols sind fundamental in Scheme
- Eindeutige, unveränderliche Werte
- Verwendung als Identifikatoren

**Weiterführende Links:**
- [Scheme Documentation - Symbols](https://www.scheme.com/tspl4/objects.html#./objects:s2)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Symbol Type: Symbols (seit TypeScript 1.0, ES6)
const mySymbol = Symbol('mySymbol');
const anotherSymbol = Symbol('anotherSymbol');

// Symbols sind eindeutig
mySymbol === Symbol('mySymbol');  // false
const sameSymbol = Symbol.for('mySymbol');
Symbol.for('mySymbol') === sameSymbol;  // true

// Verwendung als Object Keys
const obj: { [key: symbol]: string } = {
    [mySymbol]: 'value'
};
```

**Besonderheiten:**
- Symbols seit TypeScript 1.0 (ES6)
- Eindeutige Werte (außer `Symbol.for`)
- Type erasure zur Laufzeit (JavaScript)

**Weiterführende Links:**
- [TypeScript Handbook - Symbols](https://www.typescriptlang.org/docs/handbook/symbols.html)

</TabItem>
</FilteredTabs>

## 3.8.9. Opaque Types

Opaque Types verbergen die interne Repräsentation eines Typs vor Konsumenten eines Moduls. Nur das definierende Modul kann Werte des Typs erstellen und inspizieren, während externe Nutzer ausschließlich über eine öffentliche Schnittstelle darauf zugreifen können.

### Sprachen {#sprachen}

<FilteredTabs availableTabs={['ada', 'elm', 'fsharp', 'gleam', 'haskell', 'koka', 'lean4', 'mercury', 'ocaml', 'purescript', 'roc', 'rust', 'scala']} yellowTabs={['c', 'go']}>
<TabItem value="ada" label="Ada">

```ada
-- Opaque Types: Private Types
-- Spezifikation: Interne Repräsentation ist verborgen
package User_Ids is
   type User_Id is private;
   function Create (Value : Integer) return User_Id;
   function To_Integer (Id : User_Id) return Integer;
private
   type User_Id is record
      Value : Integer;
   end record;
end User_Ids;
```

**Besonderheiten:**
- `private` Types verbergen die Implementierung im `private`-Teil der Paketspezifikation
- Nur das Paket selbst kann auf die interne Struktur zugreifen
- Externe Nutzer sehen nur die öffentliche Schnittstelle

**Weiterführende Links:**
- [Ada Documentation - Private Types](https://learn.adacore.com/courses/intro-to-ada/chapters/privacy.html)

</TabItem>
<TabItem value="c" label="C">

```c
// Opaque Types: Opaque Pointers
// Header (user_id.h): Nur Forward-Deklaration
typedef struct UserId UserId;
UserId* user_id_create(int value);
int user_id_value(const UserId* id);

// Implementierung (user_id.c): Vollständige Definition
struct UserId {
    int value;
};

UserId* user_id_create(int value) {
    UserId* id = malloc(sizeof(UserId));
    id->value = value;
    return id;
}

int user_id_value(const UserId* id) {
    return id->value;
}
```

**Besonderheiten:**
- Opaque Pointers über Forward-Deklaration von Structs (Incomplete Types)
- Header enthält nur die Deklaration, Implementierung ist in der `.c`-Datei verborgen
- Erfordert Heap-Allokation, da die Größe des Structs extern nicht bekannt ist

**Weiterführende Links:**
- [C Documentation - Incomplete Types](https://en.cppreference.com/w/c/language/type#Incomplete_types)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Opaque Types: Modul-basiert
-- Konstruktor wird NICHT exportiert
module UserId exposing (UserId, create, toInt)

type UserId = UserId Int

create : Int -> UserId
create value = UserId value

toInt : UserId -> Int
toInt (UserId value) = value
```

**Besonderheiten:**
- Opaque Types durch selektives Exportieren (Konstruktor wird nicht exportiert)
- Externe Module können nicht auf den Konstruktor zugreifen oder Pattern Matching durchführen
- Weit verbreitetes Elm-Pattern für typsichere Abstraktionen

**Weiterführende Links:**
- [Elm Guide - Modules](https://guide.elm-lang.org/webapps/modules)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Opaque Types: Signatur-Dateien
// Signatur (UserId.fsi): type UserId (ohne Implementierung)

// Implementierung (UserId.fs)
module UserId

type UserId = private { Value: int }

let create value = { Value = value }
let value id = id.Value
```

**Besonderheiten:**
- Opaque Types über Signatur-Dateien (`.fsi`) oder `private`-Modifier auf Record-Feldern
- Signatur-Datei deklariert den Typ ohne Implementierungsdetails
- `private` verhindert externe Konstruktion und Pattern Matching

**Weiterführende Links:**
- [F# Documentation - Signature Files](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/signature-files)

</TabItem>
<TabItem value="gleam" label="Gleam">

```erlang
// Opaque Types: opaque type
pub opaque type UserId {
  UserId(value: Int)
}

pub fn create(value: Int) -> UserId {
  UserId(value: value)
}

pub fn to_int(id: UserId) -> Int {
  id.value
}
```

**Besonderheiten:**
- Dediziertes `opaque`-Schlüsselwort für Typdefinitionen
- Konstruktoren und Felder sind außerhalb des Moduls nicht zugänglich
- Einfachste Syntax unter allen Sprachen für Opaque Types

**Weiterführende Links:**
- [Gleam Documentation - Opaque Types](https://gleam.run/book/tour/opaque-types)

</TabItem>
<TabItem value="go" label="Go">

```go
// Opaque Types: Unexportierte Felder
package userid

type UserId struct {
    value int // Kleinbuchstabe = nicht exportiert
}

func Create(value int) UserId {
    return UserId{value: value}
}

func (id UserId) Value() int {
    return id.value
}
```

**Besonderheiten:**
- Sichtbarkeit wird über Groß-/Kleinschreibung gesteuert (Kleinbuchstaben = privat)
- Unexportierte Felder sind außerhalb des Pakets nicht zugänglich
- Kein dediziertes Opaque-Type-Feature, aber idiomatisch in Go

**Weiterführende Links:**
- [Go Documentation - Exported Identifiers](https://go.dev/ref/spec#Exported_identifiers)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Opaque Types: Smart Constructors
module UserId (UserId, create, toInt) where
-- Konstruktor MkUserId wird NICHT exportiert

newtype UserId = MkUserId Int

create :: Int -> UserId
create = MkUserId

toInt :: UserId -> Int
toInt (MkUserId n) = n
```

**Besonderheiten:**
- Opaque Types durch selektives Exportieren im Modul-Header
- `newtype` erzeugt einen neuen Typ ohne Laufzeitkosten
- Smart Constructors ermöglichen Validierung bei der Erstellung

**Weiterführende Links:**
- [Haskell Wiki - Smart Constructors](https://wiki.haskell.org/Smart_constructors)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Opaque Types: Abstrakte Typen via Module
// Modul deklariert den Typ als abstract
abstract type user-id
  UserId(value : int)

fun create(value : int) : user-id
  UserId(value)

fun to-int(id : user-id) : int
  id.value
```

**Besonderheiten:**
- `abstract`-Keyword verbirgt die Konstruktoren und Felder außerhalb des Moduls
- Externe Module können nur über öffentliche Funktionen auf den Typ zugreifen
- Innerhalb des Moduls sind Konstruktoren und Pattern Matching verfügbar

**Weiterführende Links:**
- [Koka Language Documentation - Modules](https://koka-lang.github.io/koka/doc/book.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Opaque Types: Private Structures
structure UserId where
  private mk ::
  private value : Int

namespace UserId
  def create (v : Int) : UserId := ⟨v⟩
  def toInt (id : UserId) : Int := id.value
end UserId

-- Außerhalb: Keine direkte Konstruktion oder Feldzugriff
-- let id := UserId.mk 42  -- Fehler: privater Konstruktor
-- let v := id.value        -- Fehler: privates Feld
```

**Besonderheiten:**
- `private` auf Konstruktor und Felder verbirgt die interne Repräsentation
- Außerhalb des Namespaces ist nur die öffentliche API zugänglich
- `opaque def` erzeugt Definitionen, deren Body nicht reduzierbar ist

**Weiterführende Links:**
- [Lean 4 Documentation - Structures](https://lean-lang.org/lean4/doc/struct.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Opaque Types: Abstrakte Typen via Module Interface
% Interface-Datei (.int): Nur Typ-Name, keine Implementierung
:- module user_id.
:- interface.
:- type user_id.
:- func create(int) = user_id.
:- func to_int(user_id) = int.

% Implementierung (.m):
:- implementation.
:- type user_id ---> user_id(int).

create(Value) = user_id(Value).
to_int(user_id(Value)) = Value.
```

**Besonderheiten:**
- Abstrakte Typen durch Deklaration ohne Definition im Interface (`:- type user_id.`)
- Nur das implementierende Modul kennt die interne Repräsentation
- Externe Module können keine Werte direkt konstruieren oder per Pattern Matching inspizieren

**Weiterführende Links:**
- [Mercury Language Reference - Module System](https://www.mercurylang.org/information/doc-release/mercury_ref/Modules.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Opaque Types: Abstrakte Typen in Signaturen *)
(* Signatur (user_id.mli) *)
type t
val create : int -> t
val to_int : t -> int

(* Implementierung (user_id.ml) *)
type t = int
let create value = value
let to_int id = id
```

**Besonderheiten:**
- Abstrakte Typen in `.mli`-Signatur-Dateien verbergen die Implementierung
- Die Signatur deklariert `type t` ohne Definition — der Typ ist extern vollständig opaque
- Implementierung kann beliebig gewählt werden (hier direkt `int`)

**Weiterführende Links:**
- [OCaml Manual - Module Signatures](https://v2.ocaml.org/manual/moduleexamples.html)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Opaque Types: Modul-basiert
module UserId (UserId, create, toInt) where
-- Konstruktor wird NICHT exportiert

newtype UserId = UserId Int

create :: Int -> UserId
create = UserId

toInt :: UserId -> Int
toInt (UserId n) = n
```

**Besonderheiten:**
- Opaque Types durch selektives Exportieren im Modul-Header
- `newtype` erzeugt einen neuen Typ ohne Laufzeitkosten
- Identisches Pattern wie in Haskell

**Weiterführende Links:**
- [PureScript Documentation - Modules](https://github.com/purescript/documentation/blob/master/language/Modules.md)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Opaque Types: Opaque Type Declarations
UserId := I64

create : I64 -> UserId
create = \value -> @UserId value

toI64 : UserId -> I64
toI64 = \@UserId value -> value

-- Nur das definierende Modul kann @ verwenden
```

**Besonderheiten:**
- Dedizierte Syntax mit `:=` für Opaque-Type-Deklarationen
- `@TypeName` als Konstruktor/Destruktor — nur im definierenden Modul verwendbar
- Externe Module können den Typ verwenden, aber nicht erstellen oder inspizieren

**Weiterführende Links:**
- [Roc Documentation - Opaque Types](https://www.roc-lang.org/tutorial#opaque-types)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Opaque Types: pub struct mit privaten Feldern
pub struct UserId(i64); // Feld ist privat

impl UserId {
    pub fn create(value: i64) -> Self {
        UserId(value)
    }

    pub fn value(&self) -> i64 {
        self.0
    }
}
```

**Besonderheiten:**
- Tuple-Struct-Felder sind standardmäßig privat (Newtype Pattern)
- Externe Crates können den Typ verwenden, aber nicht direkt konstruieren oder destrukturieren
- Sehr idiomatisch in Rust — häufig als Newtype Pattern bezeichnet

**Weiterführende Links:**
- [Rust Documentation - Visibility](https://doc.rust-lang.org/reference/visibility-and-privacy.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Opaque Types: Opaque Type Alias (seit Scala 3)
object UserIdModule:
  opaque type UserId = Int

  def create(value: Int): UserId = value

  extension (id: UserId)
    def toInt: Int = id

// Außerhalb: UserId ist nicht als Int bekannt
val id = UserIdModule.create(42)
val n = id.toInt
```

**Besonderheiten:**
- `opaque type` Alias verbirgt die Implementierung außerhalb des definierenden Scopes (seit Scala 3)
- Innerhalb des Scopes ist `UserId = Int` transparent, außerhalb opaque
- Kein Laufzeit-Overhead — zur Compile-Zeit aufgelöst

**Weiterführende Links:**
- [Scala 3 Documentation - Opaque Type Aliases](https://docs.scala-lang.org/scala3/book/types-opaque-types.html)

</TabItem>
</FilteredTabs>

## 3.8.10. Row Polymorphism

Row Polymorphism ermöglicht es, Funktionen zu definieren, die auf Records mit bestimmten Feldern operieren, ohne den vollständigen Record-Typ zu kennen. Der Record kann zusätzliche Felder besitzen, die von der Funktion nicht verwendet werden.

### Sprachen {#sprachen}

<FilteredTabs availableTabs={['elm', 'koka', 'ocaml', 'purescript', 'roc']} yellowTabs={['typescript']}>
<TabItem value="elm" label="Elm">

```elm
-- Row Polymorphism: Extensible Records
greet : { a | name : String } -> String
greet record = "Hello, " ++ record.name

-- Verwendung mit beliebigen Records
user = { name = "Alice", age = 30 }
company = { name = "Acme", city = "Berlin" }

greeting1 = greet user     -- "Hello, Alice"
greeting2 = greet company  -- "Hello, Acme"
```

**Besonderheiten:**
- Extensible Records mit `{ a | field : Type }` Syntax
- `a` ist eine Typvariable für die restlichen Felder des Records
- Ermöglicht Funktionen, die auf beliebigen Records mit bestimmten Feldern operieren

**Weiterführende Links:**
- [Elm Guide - Records](https://guide.elm-lang.org/types/records)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Row Polymorphism: Effekt-Zeilen
// Funktion mit offenem Effekt-Typ
fun greet(name : string) : <console|e> ()
  println("Hello, " ++ name)

// Funktion mit erweitertem Effekt-Typ
fun greet-loud(name : string) : <console|e> ()
  greet(name.to-upper)

// Effekt-Zeilen werden automatisch inferiert
fun compute() : <div|e> int
  val x = 10
  x * 2
```

**Besonderheiten:**
- Row Polymorphism wird primär für das Effekt-Typsystem verwendet
- `<effect1, effect2 | e>` beschreibt eine offene Effekt-Zeile
- `e` ist eine Zeilenvariable für zusätzliche Effekte
- Ermöglicht polymorphe Funktionen über Effekte

**Weiterführende Links:**
- [Koka Language Documentation - Effect Types](https://koka-lang.github.io/koka/doc/book.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Row Polymorphism: Objekt-Typen *)
let greet (obj : < name : string; .. >) =
  "Hello, " ^ obj#name

(* Verwendung mit beliebigen Objekten *)
let user = object
  method name = "Alice"
  method age = 30
end

let company = object
  method name = "Acme"
  method city = "Berlin"
end

let _ = greet user     (* "Hello, Alice" *)
let _ = greet company  (* "Hello, Acme" *)
```

**Besonderheiten:**
- Row Polymorphism in Objekt-Typen mit `< method : type; .. >` Syntax
- `..` steht für beliebige weitere Methoden (offene Zeile)
- Auch in polymorphen Varianten verfügbar

**Weiterführende Links:**
- [OCaml Manual - Objects](https://v2.ocaml.org/manual/objectexamples.html)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Row Polymorphism: Records mit offenen Zeilen
greet :: forall r. { name :: String | r } -> String
greet record = "Hello, " <> record.name

-- Verwendung mit beliebigen Records
user = { name: "Alice", age: 30 }
company = { name: "Acme", city: "Berlin" }

greeting1 = greet user     -- "Hello, Alice"
greeting2 = greet company  -- "Hello, Acme"
```

**Besonderheiten:**
- Native Row Polymorphism mit `{ field :: Type | r }` Syntax
- `r` ist eine Row-Variable für die restlichen Felder
- Wird auch für Effect-Tracking verwendet (extensible effects)

**Weiterführende Links:**
- [PureScript Documentation - Records](https://github.com/purescript/documentation/blob/master/language/Records.md)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Row Polymorphism: Offene Records
greet : { name : Str }* -> Str
greet = \record -> Str.concat "Hello, " record.name

-- Verwendung mit beliebigen Records
user = { name: "Alice", age: 30 }
company = { name: "Acme", city: "Berlin" }

greeting1 = greet user     -- "Hello, Alice"
greeting2 = greet company  -- "Hello, Acme"
```

**Besonderheiten:**
- Offene Records mit `{ field : Type }*` Syntax
- `*` kennzeichnet einen offenen Record, der zusätzliche Felder haben kann
- Records sind standardmäßig strukturell typisiert

**Weiterführende Links:**
- [Roc Documentation - Records](https://www.roc-lang.org/tutorial#records)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Row Polymorphism: Structural Typing
function greet(record: { name: string }): string {
    return "Hello, " + record.name;
}

// Verwendung mit beliebigen Objekten
const user = { name: "Alice", age: 30 };
const company = { name: "Acme", city: "Berlin" };

greet(user);     // "Hello, Alice"
greet(company);  // "Hello, Acme"
```

**Besonderheiten:**
- Structural Typing erlaubt Objekte mit zusätzlichen Properties
- Kein dediziertes Row-Polymorphism-Feature — Structural Subtyping erzielt ein ähnliches Ergebnis
- Excess Property Checking greift nur bei Objekt-Literalen, nicht bei Variablen

**Weiterführende Links:**
- [TypeScript Handbook - Object Types](https://www.typescriptlang.org/docs/handbook/2/objects.html)

</TabItem>
</FilteredTabs>

## 3.8.11. Units of Measure

Units of Measure ermöglichen es, numerische Typen mit physikalischen Einheiten zu annotieren, die zur Compile-Zeit überprüft werden. Inkompatible Einheiten werden beim Kompilieren erkannt und fehlerhafte Berechnungen verhindert.

### Sprachen {#sprachen}

<FilteredTabs availableTabs={['fsharp']} yellowTabs={['ada', 'nim', 'scala']} orangeTabs={['cpp', 'haskell', 'rust']}>
<TabItem value="ada" label="Ada">

```ada
-- Units of Measure: Abgeleitete Typen
type Meters is new Float;
type Seconds is new Float;

Distance : Meters := 100.0;
Time_Taken : Seconds := 9.58;

-- Typsichere Arithmetik
Doubled : Meters := Distance + Distance;

-- Compile-Fehler: inkompatible Typen
-- Invalid : Meters := Distance + Time_Taken;  -- Fehler!
```

**Besonderheiten:**
- Abgeleitete Typen (`new Float`) erzeugen inkompatible Typen
- Arithmetische Operatoren werden automatisch geerbt
- Keine automatische Einheiten-Algebra (z.B. `Meters / Seconds` erzeugt keinen neuen Typ)

**Weiterführende Links:**
- [Ada Documentation - Derived Types](https://learn.adacore.com/courses/intro-to-ada/chapters/strongly_typed_language.html#derived-types)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Units of Measure: Mit mp-units Bibliothek
// Benötigt: mp-units Bibliothek (C++ Proposal P2981)
using namespace mp_units;
using namespace mp_units::si::unit_symbols;

auto distance = 100.0 * m;
auto time = 9.58 * s;
auto speed = distance / time;  // quantity<m / s>

// Compile-Fehler: inkompatible Einheiten
// auto invalid = distance + time;  // Fehler!
```

**Besonderheiten:**
- Erfordert externe Bibliothek (mp-units, Boost.Units)
- Template-Metaprogrammierung ermöglicht vollständige Einheiten-Algebra
- ISO-C++-Proposal P2981 für Standardisierung in Arbeit

**Weiterführende Links:**
- [mp-units Documentation](https://mpusz.github.io/mp-units/)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Units of Measure: Native Einheiten-Annotationen
[<Measure>] type m
[<Measure>] type km
[<Measure>] type s

let distance = 100.0<m>
let time = 9.58<s>
let speed = distance / time  // float<m/s>

// Konvertierung
let toKm (d: float<m>) : float<km> = d / 1000.0<m/km>

// Compile-Fehler: inkompatible Einheiten
// let invalid = distance + time  // Fehler: m ≠ s
```

**Besonderheiten:**
- Natives `[<Measure>]`-Attribut für Einheiten-Definitionen
- Automatische Einheiten-Algebra (z.B. `m/s` aus Division)
- Kein Laufzeit-Overhead — Einheiten werden zur Compile-Zeit aufgelöst (Type Erasure)

**Weiterführende Links:**
- [F# Documentation - Units of Measure](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/units-of-measure)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Units of Measure: Mit dimensional Bibliothek
-- Benötigt: Numeric.Units.Dimensional.Prelude

distance :: Length Double
distance = 100.0 *~ meter

time :: Time Double
time = 9.58 *~ second

speed :: Velocity Double
speed = distance /~ time

-- Compile-Fehler: inkompatible Einheiten
-- invalid = distance +~ time  -- Fehler: Length ≠ Time
```

**Besonderheiten:**
- Erfordert externe Bibliothek (`dimensional` oder `units`)
- Vollständige Einheiten-Algebra über Phantom Types und Type-Level-Berechnungen
- Typsichere Konvertierungen zwischen Einheiten

**Weiterführende Links:**
- [dimensional - Hackage](https://hackage.haskell.org/package/dimensional)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Units of Measure: Distinct Types
type
  Meters = distinct float
  Seconds = distinct float

proc `+`(a, b: Meters): Meters {.borrow.}
proc `+`(a, b: Seconds): Seconds {.borrow.}

let distance = Meters(100.0)
let time = Seconds(9.58)

let doubled = distance + distance

# Compile-Fehler: inkompatible Typen
# let invalid = distance + time  # Fehler!
```

**Besonderheiten:**
- `distinct` Types erzeugen inkompatible Typen
- `{.borrow.}` Pragma übernimmt Operatoren vom Basistyp
- Operatoren müssen explizit für jeden Distinct Type definiert werden

**Weiterführende Links:**
- [Nim Documentation - Distinct Types](https://nim-lang.org/docs/manual.html#types-distinct-type)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Units of Measure: Mit uom Crate
// Benötigt: use uom::si::f64::*;
// Benötigt: use uom::si::length::meter;
// Benötigt: use uom::si::time::second;

let distance = Length::new::<meter>(100.0);
let time = Time::new::<second>(9.58);
let speed = distance / time;  // Velocity

// Compile-Fehler: inkompatible Einheiten
// let invalid = distance + time;  // Fehler!
```

**Besonderheiten:**
- Erfordert externes Crate (`uom`)
- Vollständige Einheiten-Algebra über Phantom Types und Traits
- SI-Einheitensystem und weitere Einheitensysteme unterstützt

**Weiterführende Links:**
- [uom - crates.io](https://crates.io/crates/uom)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Units of Measure: Opaque Types (seit Scala 3)
object Units:
  opaque type Meters = Double
  opaque type Seconds = Double

  def meters(value: Double): Meters = value
  def seconds(value: Double): Seconds = value

  extension (a: Meters)
    def +(b: Meters): Meters = a + b

val distance = Units.meters(100.0)
val doubled = distance + distance

// Compile-Fehler: inkompatible Typen
// val invalid = distance + Units.seconds(9.58)  // Fehler!
```

**Besonderheiten:**
- Opaque Types (seit Scala 3) ermöglichen typsichere Einheiten ohne Laufzeitkosten
- Operatoren müssen über Extension Methods definiert werden
- Keine automatische Einheiten-Algebra — erfordert manuelle Definition abgeleiteter Einheiten

**Weiterführende Links:**
- [Scala 3 Documentation - Opaque Type Aliases](https://docs.scala-lang.org/scala3/book/types-opaque-types.html)

</TabItem>
</FilteredTabs>

## 3.8.12. Phantom Types

Phantom Types sind Typparameter, die auf Wertebene nicht verwendet werden, aber auf Typebene zusätzliche Informationen kodieren. Sie ermöglichen Compile-Zeit-Sicherheitsgarantien ohne Laufzeitkosten.

### Sprachen {#sprachen}

<FilteredTabs availableTabs={['haskell', 'idris', 'lean4', 'ocaml', 'purescript', 'rust', 'scala']} yellowTabs={['cpp', 'elm', 'fsharp', 'swift']} orangeTabs={['typescript']}>
<TabItem value="cpp" label="C++">

```cpp
// Phantom Types: Template-Parameter ohne Wertebene-Verwendung
struct USD {};
struct EUR {};

template<typename Currency>
struct Money {
    double amount;
};

template<typename C>
Money<C> add(Money<C> a, Money<C> b) {
    return {a.amount + b.amount};
}

auto total = add(Money<USD>{10.0}, Money<USD>{20.0});  // OK
// auto invalid = add(Money<USD>{10.0}, Money<EUR>{5.0});  // Compile-Fehler!
```

**Besonderheiten:**
- Template-Parameter als Phantom Types — `Currency` wird nur auf Typebene verwendet
- Compile-Zeit-Überprüfung ohne Laufzeitkosten
- Leere Structs (`USD`, `EUR`) als Type Tags

**Weiterführende Links:**
- [C++ Reference - Templates](https://en.cppreference.com/w/cpp/language/templates)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Phantom Types: Typparameter ohne Wertebene-Verwendung
type USD = USD
type EUR = EUR

type Money currency = Money Float

add : Money a -> Money a -> Money a
add (Money x) (Money y) = Money (x + y)

usd : Float -> Money USD
usd = Money

eur : Float -> Money EUR
eur = Money

total = add (usd 10.0) (usd 20.0)  -- OK: Money USD
-- invalid = add (usd 10.0) (eur 5.0)  -- Compile-Fehler!
```

**Besonderheiten:**
- Typparameter `currency` in `Money currency` wird auf Wertebene nicht verwendet
- Custom Types als Type Tags (`USD`, `EUR`)
- Wird oft in Kombination mit Opaque Types verwendet

**Weiterführende Links:**
- [Elm Guide - Custom Types](https://guide.elm-lang.org/types/custom_types)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Phantom Types: Generische Typparameter ohne Wertebene-Verwendung
type USD = class end
type EUR = class end

type Money<'Currency> = Money of float

let add (Money a : Money<'c>) (Money b : Money<'c>) : Money<'c> =
    Money (a + b)

let usd (amount: float) : Money<USD> = Money amount
let eur (amount: float) : Money<EUR> = Money amount

let total = add (usd 10.0) (usd 20.0)  // OK: Money<USD>
// let invalid = add (usd 10.0) (eur 5.0)  // Compile-Fehler!
```

**Besonderheiten:**
- Generische Typparameter als Phantom Types
- Leere Klassen (`class end`) als Type Tags
- Compiler-Warnung bei ungenutztem Typparameter möglich

**Weiterführende Links:**
- [F# Documentation - Generics](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/generics/)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Phantom Types: Typparameter ohne Wertebene-Verwendung
data USD
data EUR

newtype Money currency = Money { getAmount :: Double }

add :: Money a -> Money a -> Money a
add (Money x) (Money y) = Money (x + y)

usd :: Double -> Money USD
usd = Money

eur :: Double -> Money EUR
eur = Money

total = add (usd 10.0) (usd 20.0)  -- OK: Money USD
-- invalid = add (usd 10.0) (eur 5.0)  -- Compile-Fehler!
```

**Besonderheiten:**
- Leere Datentypen (`data USD`) als Type Tags — keine Konstruktoren, nur auf Typebene existent
- `newtype` erzeugt keinen Laufzeit-Overhead
- Klassisches funktionales Pattern für typsichere Abstraktionen

**Weiterführende Links:**
- [Haskell Wiki - Phantom Types](https://wiki.haskell.org/Phantom_type)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Phantom Types: Typparameter ohne Wertebene-Verwendung
data USD = MkUSD  -- Konstruktor wird nie verwendet
data EUR = MkEUR  -- Konstruktor wird nie verwendet

data Money : Type -> Type where
    MkMoney : Double -> Money currency

add : Money a -> Money a -> Money a
add (MkMoney x) (MkMoney y) = MkMoney (x + y)

usd : Double -> Money USD
usd = MkMoney

eur : Double -> Money EUR
eur = MkMoney

total : Money USD
total = add (usd 10.0) (usd 20.0)
-- add (usd 10.0) (eur 5.0)  -- Compile-Fehler!
```

**Besonderheiten:**
- Phantom Types sind ein Spezialfall von Dependent Types
- Typparameter `currency` wird nur auf Typebene verwendet
- In Idris können Phantom Types zu vollständigen Dependent Types erweitert werden

**Weiterführende Links:**
- [Idris 2 Documentation - Types and Functions](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Phantom Types: Typparameter ohne Wertebene-Verwendung
structure USD
structure EUR

structure Money (currency : Type) where
  amount : Float

def add (a b : Money c) : Money c :=
  ⟨a.amount + b.amount⟩

def usd (amount : Float) : Money USD := ⟨amount⟩
def eur (amount : Float) : Money EUR := ⟨amount⟩

def total := add (usd 10.0) (usd 20.0)  -- OK: Money USD
-- def invalid := add (usd 10.0) (eur 5.0)  -- Compile-Fehler!
```

**Besonderheiten:**
- Typparameter `currency` wird auf Wertebene nicht verwendet
- Leere Structures als Type Tags — kein Laufzeit-Overhead
- Phantom Types sind ein Spezialfall von Dependent Types in Lean 4

**Weiterführende Links:**
- [Lean 4 Documentation - Structures](https://lean-lang.org/lean4/doc/struct.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Phantom Types: Typparameter ohne Wertebene-Verwendung *)
type usd
type eur

type 'currency money = { amount : float }

let add (a : 'a money) (b : 'a money) : 'a money =
  { amount = a.amount +. b.amount }

let usd amount : usd money = { amount }
let eur amount : eur money = { amount }

let total = add (usd 10.0) (usd 20.0)
(* let invalid = add (usd 10.0) (eur 5.0) *)  (* Compile-Fehler! *)
```

**Besonderheiten:**
- Leere Typen (`type usd`) als Type Tags — keine Konstruktoren
- Typparameter `'currency` wird auf Wertebene nicht verwendet
- Häufig mit Modulen und Signaturen kombiniert

**Weiterführende Links:**
- [OCaml Manual - Parametric Polymorphism](https://v2.ocaml.org/manual/coreexamples.html#s:tut-poly)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Phantom Types: Typparameter ohne Wertebene-Verwendung
data USD
data EUR

newtype Money currency = Money Number

add :: forall a. Money a -> Money a -> Money a
add (Money x) (Money y) = Money (x + y)

usd :: Number -> Money USD
usd = Money

eur :: Number -> Money EUR
eur = Money

total = add (usd 10.0) (usd 20.0)  -- OK: Money USD
-- invalid = add (usd 10.0) (eur 5.0)  -- Compile-Fehler!
```

**Besonderheiten:**
- Leere Datentypen als Type Tags
- Identisches Pattern wie in Haskell
- `newtype` erzeugt keinen Laufzeit-Overhead

**Weiterführende Links:**
- [PureScript Documentation - Types](https://github.com/purescript/documentation/blob/master/language/Types.md)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Phantom Types: PhantomData-Marker
// Benötigt: use std::marker::PhantomData;

struct USD;
struct EUR;

struct Money<Currency> {
    amount: f64,
    _currency: PhantomData<Currency>,
}

fn add<C>(a: Money<C>, b: Money<C>) -> Money<C> {
    Money { amount: a.amount + b.amount, _currency: PhantomData }
}

fn usd(amount: f64) -> Money<USD> {
    Money { amount, _currency: PhantomData }
}

fn eur(amount: f64) -> Money<EUR> {
    Money { amount, _currency: PhantomData }
}

let total = add(usd(10.0), usd(20.0));  // OK: Money<USD>
// let invalid = add(usd(10.0), eur(5.0));  // Compile-Fehler!
```

**Besonderheiten:**
- `PhantomData<T>` als expliziter Marker für ungenutzte Typparameter
- Rust erfordert `PhantomData`, da ungenutzte Typparameter sonst einen Compile-Fehler erzeugen
- Zero-Size Type — kein Laufzeit-Overhead

**Weiterführende Links:**
- [Rust Documentation - PhantomData](https://doc.rust-lang.org/std/marker/struct.PhantomData.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Phantom Types: Typparameter ohne Wertebene-Verwendung
sealed trait USD
sealed trait EUR

case class Money[Currency](amount: Double)

def add[C](a: Money[C], b: Money[C]): Money[C] =
  Money(a.amount + b.amount)

def usd(amount: Double): Money[USD] = Money(amount)
def eur(amount: Double): Money[EUR] = Money(amount)

val total = add(usd(10.0), usd(20.0))  // OK: Money[USD]
// val invalid = add(usd(10.0), eur(5.0))  // Compile-Fehler!
```

**Besonderheiten:**
- `sealed trait` ohne Implementierung als Type Tags
- Typparameter `Currency` wird nur auf Typebene verwendet
- Type Erasure zur Laufzeit (JVM) — keine Laufzeitunterscheidung zwischen `Money[USD]` und `Money[EUR]`

**Weiterführende Links:**
- [Scala Documentation - Type Parameters](https://docs.scala-lang.org/tour/generic-classes.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Phantom Types: Generische Typparameter ohne Wertebene-Verwendung
enum USD {}
enum EUR {}

struct Money<Currency> {
    let amount: Double
}

func add<C>(_ a: Money<C>, _ b: Money<C>) -> Money<C> {
    Money(amount: a.amount + b.amount)
}

let total = add(Money<USD>(amount: 10.0), Money<USD>(amount: 20.0))  // OK
// let invalid = add(Money<USD>(amount: 10.0), Money<EUR>(amount: 5.0))  // Compile-Fehler!
```

**Besonderheiten:**
- Leere Enums (`enum USD {}`) als Type Tags — können nicht instanziiert werden
- Generische Typparameter ermöglichen Compile-Zeit-Sicherheit
- Kein spezielles Phantom-Type-Feature nötig — Standard-Generics reichen aus

**Weiterführende Links:**
- [Swift Documentation - Generics](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/generics/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Phantom Types: Branded Types
declare const __brand: unique symbol;

type USD = { readonly [__brand]: 'USD' };
type EUR = { readonly [__brand]: 'EUR' };

type Money<Currency> = number & { readonly [__brand]: Currency };

const usd = (amount: number): Money<USD> => amount as Money<USD>;
const eur = (amount: number): Money<EUR> => amount as Money<EUR>;

function add<C>(a: Money<C>, b: Money<C>): Money<C> {
    return ((a as number) + (b as number)) as Money<C>;
}

function pay(amount: Money<USD>): void { /* ... */ }
pay(usd(10.0));   // OK
// pay(eur(5.0));  // Compile-Fehler: Money<EUR> ≠ Money<USD>
```

**Besonderheiten:**
- Structural Typing erfordert Branded Types als Workaround
- `unique symbol` verhindert strukturelle Gleichheit der Phantom-Typen
- Type Assertions (`as`) nötig, da die Brand-Property nicht zur Laufzeit existiert

**Weiterführende Links:**
- [TypeScript Handbook - Type Assertions](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions)

</TabItem>
</FilteredTabs>

## 3.8.13. Existential Types

Existential Types abstrahieren über einen konkreten Typ, ohne dessen Identität preiszugeben. Der Konsument weiß, dass ein Typ existiert, kann ihn aber nicht inspizieren — dies ermöglicht typsichere Kapselung und heterogene Sammlungen.

### Sprachen {#sprachen}

<FilteredTabs availableTabs={['go', 'haskell', 'idris', 'java', 'kotlin', 'lean4', 'mercury', 'ocaml', 'rust', 'scala', 'swift']} yellowTabs={['cpp']}>
<TabItem value="cpp" label="C++">

```cpp
// Existentielle Typen über virtuelle Basisklassen
struct Displayable {
    virtual std::string display() const = 0;
    virtual ~Displayable() = default;
};

struct IntVal : Displayable {
    int value;
    IntVal(int v) : value(v) {}
    std::string display() const override { return std::to_string(value); }
};

struct StrVal : Displayable {
    std::string value;
    StrVal(std::string v) : value(std::move(v)) {}
    std::string display() const override { return value; }
};

// Heterogene Sammlung — konkreter Typ ist verborgen
std::vector<std::unique_ptr<Displayable>> items;
items.push_back(std::make_unique<IntVal>(42));
items.push_back(std::make_unique<StrVal>("Hallo"));

for (const auto& item : items) {
    std::cout << item->display();
}

// std::any als typ-gelöschter Container (seit C++17)
std::any value = 42;
int extracted = std::any_cast<int>(value);
```

**Besonderheiten:**
- Virtuelle Basisklassen mit Polymorphismus als klassische Form existentieller Typen
- `std::any` (seit C++17) bietet einen allgemeinen typ-gelöschten Container
- `std::any_cast` erfordert Kenntnis des konkreten Typs zur Extraktion

**Weiterführende Links:**
- [cppreference - std::any](https://en.cppreference.com/w/cpp/utility/any)

</TabItem>
<TabItem value="go" label="Go">

```go
// Interfaces als implizite existentielle Typen
type Displayable interface {
    Display() string
}

type IntVal struct{ Value int }
func (v IntVal) Display() string { return fmt.Sprintf("%d", v.Value) }

type StrVal struct{ Value string }
func (v StrVal) Display() string { return v.Value }

// Heterogene Sammlung — konkreter Typ ist verborgen
items := []Displayable{
    IntVal{42},
    StrVal{"Hallo"},
}

for _, item := range items {
    fmt.Println(item.Display())
}

// any (= interface{}) als allgemeiner existentieller Typ
var value any = 42
```

**Besonderheiten:**
- Interfaces sind strukturell typisiert und implizit — keine explizite Implementierung nötig
- Jeder Interface-Wert ist ein Paar aus (konkreter Typ, Wert), was genau einem existentiellen Typ entspricht
- `any` (Alias für `interface{}`) ist der allgemeinste existentielle Typ

**Weiterführende Links:**
- [Go Documentation - Interfaces](https://go.dev/tour/methods/9)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
{-# LANGUAGE ExistentialQuantification #-}

-- Existentieller Typ: verbirgt den konkreten Typ
data Displayable = forall a. Show a => MkDisplayable a

display :: Displayable -> String
display (MkDisplayable x) = show x

-- Heterogene Liste mit verschiedenen Typen
items :: [Displayable]
items = [MkDisplayable 42, MkDisplayable "Hallo", MkDisplayable True]

results :: [String]
results = map display items
-- ["42", "\"Hallo\"", "True"]
```

**Besonderheiten:**
- Erfordert die `ExistentialQuantification`-Erweiterung (oder GADT-Syntax)
- `forall a.` im Datenkonstruktor bindet den Typ existentiell
- Der konkrete Typ ist außerhalb des Pattern Matchings nicht zugänglich
- Nur Operationen der angegebenen Typklasse (hier `Show`) sind verfügbar

**Weiterführende Links:**
- [GHC Documentation - Existential Quantification](https://ghc.gitlab.haskell.org/ghc/doc/users_guide/exts/existential_quantification.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Existentielle Typen über Dependent Pairs
data Displayable : Type where
    MkDisplayable : Show a => a -> Displayable

display : Displayable -> String
display (MkDisplayable x) = show x

-- Heterogene Liste mit verschiedenen Typen
items : List Displayable
items = [MkDisplayable 42, MkDisplayable "Hallo", MkDisplayable True]

results : List String
results = map display items
```

**Besonderheiten:**
- Dependent Pairs (`DPair`) sind die allgemeine Form existentieller Typen
- Der konkrete Typ wird durch den Datenkonstruktor verborgen
- Dependent Types subsumieren existentielle Typen vollständig

**Weiterführende Links:**
- [Idris 2 Documentation - Dependent Pairs](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Existentielle Typen über Wildcards
List<? extends Number> numbers = List.of(42, 3.14, 100L);

// Konkreter Typ-Parameter ist verborgen — nur Number-Operationen verfügbar
double sum = 0;
for (Number n : numbers) {
    sum += n.doubleValue();
}

// Bounded Wildcard als existentieller Typ
static double sumAll(List<? extends Number> items) {
    return items.stream().mapToDouble(Number::doubleValue).sum();
}

// Unbounded Wildcard: vollständig verborgen
static void printAll(List<?> items) {
    for (Object item : items) {
        System.out.println(item);
    }
}
```

**Besonderheiten:**
- `?` (Wildcard) in Generics ist die primäre Form existentieller Typen
- `? extends T` (Upper Bounded) erlaubt nur Lese-Operationen
- `? super T` (Lower Bounded) erlaubt Schreib-Operationen
- Wildcards ermöglichen Varianz ohne explizite Varianz-Annotationen

**Weiterführende Links:**
- [Oracle Java Documentation - Wildcards](https://docs.oracle.com/javase/tutorial/java/generics/wildcards.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Existentielle Typen über Star Projections
val items: List<*> = listOf(42, "Hallo", true)

// Konkreter Typ-Parameter ist verborgen — Elemente sind Any?
for (item in items) {
    println(item)
}

// Bounded Star Projection
fun sumAll(items: List<out Number>): Double {
    return items.sumOf { it.toDouble() }
}

// Use-Site Varianz als existentieller Typ
fun printAll(items: List<out Any?>) {
    for (item in items) {
        println(item)
    }
}
```

**Besonderheiten:**
- Star Projection (`*`) entspricht Javas Unbounded Wildcard (`?`)
- `out T` entspricht `? extends T` (Kovarianz, existentieller Typ)
- `in T` entspricht `? super T` (Kontravarianz)
- Typ-Parameter sind außerhalb der Projektion nicht zugänglich

**Weiterführende Links:**
- [Kotlin Documentation - Star Projections](https://kotlinlang.org/docs/generics.html#star-projections)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Existentielle Typen über Structures mit impliziten Feldern
structure Displayable where
  {α : Type}
  [inst : ToString α]
  val : α

def mkDisplayable [ToString α] (x : α) : Displayable :=
  { val := x }

def display (d : Displayable) : String :=
  @ToString.toString d.α d.inst d.val

-- Heterogene Liste mit verschiedenen Typen
def items : List Displayable :=
  [mkDisplayable (42 : Int), mkDisplayable "Hallo", mkDisplayable true]

def results : List String := items.map display
-- ["42", "Hallo", "true"]
```

**Besonderheiten:**
- Structures mit impliziten Feldern (`{α : Type}`) verbergen den konkreten Typ
- Instance-Felder (`[inst : ToString α]`) koppeln Type-Class-Constraints existentiell
- Dependent Types subsumieren existentielle Typen vollständig (`Sigma`-Typen, `∃`-Quantor)

**Weiterführende Links:**
- [Lean 4 Documentation - Structures](https://lean-lang.org/lean4/doc/struct.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Existentielle Typen: Existentially Quantified Constructors
:- typeclass showable(T) where [
    func show(T) = string
].

:- type displayable
    --->    some [T] (showable(T) => displayable(T)).

:- func display(displayable) = string.
display(displayable(X)) = show(X).

% Heterogene Liste mit verschiedenen Typen
:- func items = list(displayable).
items = [displayable(42), displayable("Hallo"), displayable(yes)].

:- func results = list(string).
results = list.map(display, items).
```

**Besonderheiten:**
- `some [T]` im Konstruktor bindet den Typ existentiell
- Typeclass-Constraints mit `=>` koppeln Operationen an den verborgenen Typ
- Der konkrete Typ ist außerhalb des Pattern Matchings nicht zugänglich
- Nativer Bestandteil des Typsystems (keine Erweiterung nötig)

**Weiterführende Links:**
- [Mercury Language Reference - Existential Types](https://www.mercurylang.org/information/doc-release/mercury_ref/Existential-types.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Existentielle Typen über First-Class Modules *)
module type DISPLAYABLE = sig
  type t
  val value : t
  val display : t -> string
end

let make_displayable (type a) (display : a -> string) (value : a)
    : (module DISPLAYABLE) =
  (module struct
    type t = a
    let value = value
    let display = display
  end)

let display (module M : DISPLAYABLE) = M.display M.value

(* Heterogene Liste — konkreter Typ ist verborgen *)
let items = [
  make_displayable string_of_int 42;
  make_displayable Fun.id "Hallo";
  make_displayable string_of_bool true
]

let results = List.map display items
(* ["42"; "Hallo"; "true"] *)
```

**Besonderheiten:**
- First-Class Modules ermöglichen existentielle Typen über abstrakte Typen in Modul-Signaturen
- Der konkrete Typ `t` ist außerhalb des Moduls nicht zugänglich
- Locally Abstract Types (`type a`) ermöglichen die Konstruktion existentieller Werte

**Weiterführende Links:**
- [OCaml Documentation - First-Class Modules](https://ocaml.org/manual/5.2/firstclassmodules.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Benötigt: use std::fmt::Display;

// Existentielle Typen über Trait Objects (dyn)
let items: Vec<Box<dyn Display>> = vec![
    Box::new(42),
    Box::new("Hallo"),
    Box::new(true),
];

for item in &items {
    println!("{}", item);  // Konkreter Typ ist verborgen
}

// impl Trait als existentieller Rückgabetyp (seit Rust 1.26)
fn make_greeting() -> impl Display {
    "Hallo Welt"
}
```

**Besonderheiten:**
- `dyn Trait` (Trait Objects) sind die primäre Form existentieller Typen
- Trait Objects erfordern Dynamic Dispatch (vtable)
- `impl Trait` in Rückgabeposition ist ein opaker existentieller Typ (seit Rust 1.26)
- `Box<dyn Trait>` ermöglicht heterogene Sammlungen auf dem Heap

**Weiterführende Links:**
- [Rust Documentation - Trait Objects](https://doc.rust-lang.org/book/ch17-02-trait-objects.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Existentielle Typen (Scala 3: Wildcards)
val items: List[?] = List(42, "Hallo", true)

for (item <- items) {
    println(item)  // item ist Any
}

// Wildcard mit Upper Bound
def sumAll(items: List[? <: Number]): Double =
    items.map(_.doubleValue()).sum

// Scala 2: forSome-Syntax (deprecated in Scala 3)
// val items: List[T] forSome { type T } = List(42, "Hallo")
```

**Besonderheiten:**
- Scala 3 verwendet `?` als Wildcard (ersetzt `_` aus Scala 2)
- `forSome`-Syntax aus Scala 2 ist in Scala 3 entfernt
- `? <: T` entspricht Upper Bounded existentiellen Typen
- Match Types in Scala 3 können existentielle Typen teilweise ersetzen

**Weiterführende Links:**
- [Scala 3 Documentation - Type Wildcards](https://docs.scala-lang.org/scala3/reference/changed-features/wildcards.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Existentielle Typen über Protokolle (seit Swift 5.6: any)
let items: [any CustomStringConvertible] = [42, "Hallo", true]

for item in items {
    print(item.description)  // Konkreter Typ ist verborgen
}

// Funktion mit existentiellem Parameter
func display(item: any CustomStringConvertible) {
    print(item.description)
}

// Existentieller Typ vs. opaker Typ (some)
func makeGreeting() -> some CustomStringConvertible {
    return "Hallo Welt"  // Konkreter Typ bleibt verborgen
}
```

**Besonderheiten:**
- `any Protocol` markiert explizit existentielle Typen (seit Swift 5.6)
- `some Protocol` (opake Typen) sind das Gegenstück mit statischem Dispatch
- Existentielle Typen erfordern Dynamic Dispatch und können nicht alle Protokoll-Features nutzen
- Vor Swift 5.6 waren Protokolltypen implizit existentiell

**Weiterführende Links:**
- [Swift Documentation - Protocols](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/protocols/)

</TabItem>
</FilteredTabs>

## 3.8.14. Linear / Affine Types

Lineare Typen garantieren, dass ein Wert exakt einmal verwendet wird. Affine Typen erlauben die Verwendung höchstens einmal — der Wert darf auch verworfen werden. Beide Konzepte ermöglichen sichere Ressourcenverwaltung ohne Garbage Collector.

### Sprachen {#sprachen}

<FilteredTabs availableTabs={['haskell', 'idris', 'rust']} yellowTabs={['mojo', 'swift']}>
<TabItem value="haskell" label="Haskell">

```haskell
{-# LANGUAGE LinearTypes #-}

-- Lineare Typen (seit GHC 9.0)
-- %1 → Argument muss genau einmal verwendet werden

-- Linearer Verbrauch
consume :: a %1 -> ()
consume _ = ()

-- Lineares Swap: Beide Teile werden genau einmal verwendet
swap :: (a, b) %1 -> (b, a)
swap (x, y) = (y, x)

-- Linearer Datei-Zugriff (konzeptionell)
-- openFile  :: FilePath -> (Handle %1 -> Ur a) -> a
-- readFile  :: Handle %1 -> (Handle, String)
-- closeFile :: Handle %1 -> ()

-- Fehler: x wird zweimal verwendet
-- dup :: a %1 -> (a, a)
-- dup x = (x, x)  -- Compile-Fehler!
```

**Besonderheiten:**
- `%1` markiert lineare Funktionspfeile (Argument muss genau einmal verwendet werden)
- `%Many` (Standard) erlaubt beliebige Verwendung
- `Ur a` (Unrestricted) hebt die Linearitätsbeschränkung auf
- Erfordert die `LinearTypes`-Erweiterung (seit GHC 9.0)

**Weiterführende Links:**
- [GHC Documentation - Linear Types](https://ghc.gitlab.haskell.org/ghc/doc/users_guide/exts/linear_types.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Lineare Typen über Multiplicities
-- 1 → muss genau einmal verwendet werden
-- 0 → darf nicht zur Laufzeit verwendet werden

-- Linearer Verbrauch
consume : (1 x : a) -> ()
consume _ = ()

-- Lineares Swap: Beide Teile genau einmal verwendet
swap : (1 _ : (a, b)) -> (b, a)
swap (x, y) = (y, x)

-- Linearer Datei-Zugriff
-- openFile  : (1 _ : String) -> IORes FileHandle
-- readFile  : (1 _ : FileHandle) -> IORes (FileHandle, String)
-- closeFile : (1 _ : FileHandle) -> IORes ()

-- Fehler: x wird zweimal verwendet
-- dup : (1 x : a) -> (a, a)
-- dup x = (x, x)  -- Compile-Fehler!
```

**Besonderheiten:**
- Multiplicities (`0`, `1`, `Unrestricted`) sind in das Typsystem integriert
- Quantitative Type Theory (QTT) als theoretische Grundlage
- `0` markiert Typ-Level-Werte, die zur Laufzeit gelöscht werden
- Linearität wird vollständig vom Compiler überprüft

**Weiterführende Links:**
- [Idris 2 Documentation - Multiplicities](https://idris2.readthedocs.io/en/latest/tutorial/multiplicities.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# Ownership-System mit Move-Semantik
struct FileHandle:
    var name: String

    fn __init__(inout self, name: String):
        self.name = name

    fn read(owned self) -> String:
        return "Inhalt von " + self.name

    fn __del__(owned self):
        print("Handle geschlossen: " + self.name)

var handle = FileHandle("daten.txt")
var content = handle.read()  # handle wird transferiert (Move)
# handle.read()  # Fehler: handle wurde bereits verschoben
```

**Besonderheiten:**
- `owned` markiert Parameter, die Ownership übernehmen (Move-Semantik)
- `borrowed` für schreibgeschützte Referenzen (Standard für `self`)
- `inout` für veränderliche Referenzen
- Destruktor (`__del__`) wird automatisch aufgerufen

**Weiterführende Links:**
- [Mojo Documentation - Ownership](https://docs.modular.com/mojo/manual/values/ownership)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Affine Types: Ownership-System
struct FileHandle {
    name: String,
}

impl FileHandle {
    fn new(name: &str) -> Self {
        FileHandle { name: name.to_string() }
    }

    fn read(self) -> String {  // Konsumiert self (Move)
        format!("Inhalt von {}", self.name)
    }
}

let handle = FileHandle::new("daten.txt");
let content = handle.read();  // handle wird moved
// handle.read();  // Fehler: value used after move

// Drop-Trait für automatische Ressourcenfreigabe
impl Drop for FileHandle {
    fn drop(&mut self) {
        println!("Handle geschlossen: {}", self.name);
    }
}
```

**Besonderheiten:**
- Das Ownership-System ist ein affines Typsystem (Werte können höchstens einmal verwendet werden)
- Move-Semantik ist der Standard — Kopieren erfordert explizites `Clone`
- Borrowing (`&` und `&mut`) ermöglicht temporären Zugriff ohne Ownership-Transfer
- Der Borrow Checker erzwingt die Regeln zur Compile-Zeit

**Weiterführende Links:**
- [Rust Documentation - Ownership](https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Move-Only Types: ~Copyable (seit Swift 5.9)
struct FileHandle: ~Copyable {
    let name: String

    consuming func read() -> String {
        return "Inhalt von \(name)"
    }

    deinit {
        print("Handle geschlossen: \(name)")
    }
}

let handle = FileHandle(name: "daten.txt")
let content = handle.read()  // handle wird konsumiert
// handle.read()  // Fehler: handle wurde bereits konsumiert
```

**Besonderheiten:**
- `~Copyable` markiert nicht-kopierbare Typen (seit Swift 5.9)
- `consuming` Methoden konsumieren den Wert (Move-Semantik)
- `borrowing` Methoden leihen den Wert nur aus
- `deinit` wird automatisch aufgerufen, wenn der Wert konsumiert wird

**Weiterführende Links:**
- [Swift Documentation - Noncopyable Types](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/copyable/)

</TabItem>
</FilteredTabs>

## 3.8.15. Refinement Types

Refinement Types verfeinern bestehende Typen durch Prädikate oder Einschränkungen, sodass nur Werte eines bestimmten Teilbereichs gültig sind. Sie ermöglichen präzisere Typinformationen als einfache Basistypen.

### Sprachen {#sprachen}

<FilteredTabs availableTabs={['ada', 'idris', 'lean4', 'nim', 'object-pascal']}>
<TabItem value="ada" label="Ada">

```ada
-- Refinement Types: Subtypes mit Einschränkungen
subtype Age is Integer range 0 .. 150;
subtype Percentage is Float range 0.0 .. 100.0;
subtype Month is Integer range 1 .. 12;

-- Eigene Typen mit Einschränkungen
type Positive_Int is new Integer range 1 .. Integer'Last;

-- Verwendung: Einschränkung wird zur Laufzeit geprüft
procedure Set_Age (Value : Age) is
begin
    null;  -- Value ist garantiert im Bereich 0..150
end Set_Age;

Valid   : Age := 25;   -- Gültig
-- Invalid : Age := 200;  -- Constraint_Error zur Laufzeit

-- Diskriminanten als Refinement
type Matrix is array (Positive range <>, Positive range <>) of Float;
subtype Matrix_3x3 is Matrix (1 .. 3, 1 .. 3);
```

**Besonderheiten:**
- Subtypes definieren Einschränkungen auf bestehenden Typen mit `range`
- `type ... is new` erstellt einen neuen Typ mit Einschränkungen (nicht zuweisungskompatibel)
- `subtype` erstellt einen kompatiblen Unterbereich (zuweisungskompatibel)
- Bereichsverletzungen lösen `Constraint_Error` zur Laufzeit aus

**Weiterführende Links:**
- [Ada Documentation - Subtypes](https://learn.adacore.com/courses/intro-to-ada/chapters/strongly_typed_language.html#subtypes)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Refinement Types über Dependent Types und Beweise

-- Beweis, dass eine Zahl positiv ist
data IsPositive : Nat -> Type where
    ItIsPositive : IsPositive (S n)

-- Funktion akzeptiert nur positive Zahlen
positiveDouble : (n : Nat) -> IsPositive n -> Nat
positiveDouble (S n) ItIsPositive = 2 * (S n)

-- Compile-Zeit-Beweis: 5 ist positiv
result : Nat
result = positiveDouble 5 ItIsPositive  -- 10

-- Compile-Fehler: 0 ist nicht positiv
-- bad = positiveDouble 0 ItIsPositive  -- Typ-Fehler!

-- Allgemeinere Einschränkung: Bereich
data InRange : (lo : Nat) -> (hi : Nat) -> (n : Nat) -> Type where
    MkInRange : LTE lo n -> LTE n hi -> InRange lo hi n
```

**Besonderheiten:**
- Dependent Types subsumieren Refinement Types vollständig
- Einschränkungen werden als Beweise (Proofs) zur Compile-Zeit geprüft
- Beliebig komplexe Prädikate möglich (nicht nur Bereiche)
- Keine Laufzeit-Checks nötig — Korrektheit ist statisch bewiesen

**Weiterführende Links:**
- [Idris 2 Documentation - Theorem Proving](https://idris2.readthedocs.io/en/latest/tutorial/theorems.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Refinement Types über Subtype und Dependent Types

-- Subtype: Wert mit Beweis einer Eigenschaft
def posDouble (n : { x : Nat // x > 0 }) : Nat :=
  2 * n.val

-- Compile-Zeit-Beweis: 5 > 0
#eval posDouble ⟨5, by omega⟩  -- 10

-- Benutzerdefinierte Refinement Types
def Age := { n : Nat // n ≤ 150 }
def Percentage := { n : Nat // n ≤ 100 }

def validAge : Age := ⟨25, by omega⟩
-- def invalidAge : Age := ⟨200, by omega⟩  -- Beweis schlägt fehl!

-- Allgemeine Prädikate als Refinements
def InRange (lo hi n : Nat) : Prop := lo ≤ n ∧ n ≤ hi
```

**Besonderheiten:**
- Dependent Types subsumieren Refinement Types vollständig
- `Subtype` (`{ x : T // P x }`) verfeinert einen Typ mit einem Beweis
- Taktiken wie `by omega` erzeugen Beweise automatisch
- Beliebig komplexe Prädikate möglich — Korrektheit ist statisch bewiesen

**Weiterführende Links:**
- [Lean 4 Documentation - Propositions and Proofs](https://lean-lang.org/lean4/doc/propositions.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Refinement Types: Range-Typen
type
  Age = range[0..150]
  Percentage = range[0..100]
  Month = range[1..12]
  PositiveInt = range[1..high(int)]

# Verwendung: Einschränkung wird zur Compile- und Laufzeit geprüft
var age: Age = 25       # Gültig
var pct: Percentage = 50  # Gültig
# var bad: Age = 200     # Fehler: Wert außerhalb des Bereichs

# Distinct Types für typsichere Einheiten
type
  Meter = distinct float
  Second = distinct float

var distance: Meter = 100.Meter
var time: Second = 9.58.Second
# var wrong: Meter = time  # Fehler: inkompatible Typen
```

**Besonderheiten:**
- `range[a..b]` definiert einen Wertebereich als Typ
- Bereichsprüfungen erfolgen sowohl zur Compile-Zeit (wenn möglich) als auch zur Laufzeit
- `distinct` erstellt inkompatible Typen aus bestehenden Typen
- Range-Typen können in Arrays und Schleifen verwendet werden

**Weiterführende Links:**
- [Nim Documentation - Subrange Types](https://nim-lang.org/docs/manual.html#types-subrange-types)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Refinement Types: Subrange-Typen
type
  TAge = 0..150;
  TPercentage = 0..100;
  TMonth = 1..12;

// Enum-Subrange
type
  TWorkday = Monday..Friday;

// Verwendung
var
  age: TAge;
  pct: TPercentage;
begin
  age := 25;    // Gültig
  pct := 50;    // Gültig
  // age := 200; // Laufzeitfehler mit {$R+}: Range check error
end;

// Set-Typen basierend auf Subranges
type
  TDaySet = set of TWorkday;
```

**Besonderheiten:**
- Subrange-Typen definieren einen Wertebereich mit `Low..High`
- Bereichsprüfungen sind über die Compiler-Direktive `{$R+}` aktivierbar
- Subrange-Typen können als Basis für Set-Typen und Array-Indizes dienen
- Enum-Subranges ermöglichen Teilmengen von Aufzählungstypen

**Weiterführende Links:**
- [Free Pascal Documentation - Subrange Types](https://www.freepascal.org/docs-html/ref/refsu4.html)

</TabItem>
</FilteredTabs>

## 3.8.16. Flow-Sensitive Typing

Flow-Sensitive Typing (auch Type Narrowing oder Smart Casts) ermöglicht es dem Compiler, den Typ einer Variable basierend auf Kontrollfluss-Analyse automatisch zu verengen. Nach einer Typprüfung ist der speziellere Typ ohne explizite Casts verfügbar.

### Sprachen {#sprachen}

<FilteredTabs availableTabs={['dart', 'kotlin', 'typescript']} yellowTabs={['csharp', 'go', 'java', 'rust', 'scala', 'swift']}>
<TabItem value="csharp" label="C#">

```csharp
// Pattern Matching mit Typ-Tests (seit C# 7.0)
void Process(object value) {
    if (value is string s) {
        Console.WriteLine(s.ToUpper());  // s ist string
    } else if (value is int n) {
        Console.WriteLine(n + 1);        // n ist int
    }
}

// Switch Expression mit Pattern Matching (seit C# 8.0)
string Describe(object value) => value switch {
    string s => $"Text: {s.ToUpper()}",
    int n    => $"Zahl: {n + 1}",
    _        => "Unbekannt"
};

// Nullable Reference Types Flow-Analyse (seit C# 8.0)
void Greet(string? name) {
    if (name != null) {
        Console.WriteLine(name.ToUpper());  // name ist non-null
    }
}
```

**Besonderheiten:**
- Pattern Matching mit `is` erfordert eine neue Variable (`is string s`) — keine implizite Verengung der Originalvariable
- Nullable Reference Types (seit C# 8.0) bieten echte Flow-Analyse für Null-Checks
- Switch Expressions (seit C# 8.0) unterstützen erschöpfende Pattern-Prüfung
- `when`-Guards erlauben zusätzliche Bedingungen in Patterns

**Weiterführende Links:**
- [Microsoft C# Documentation - Pattern Matching](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/patterns)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Flow-Sensitive Typing: Type Promotion
void process(Object value) {
    if (value is String) {
        print(value.toUpperCase());  // value ist automatisch String
    } else if (value is int) {
        print(value + 1);            // value ist automatisch int
    }
}

// Null-Check Promotion
void greet(String? name) {
    if (name != null) {
        print(name.toUpperCase());  // name ist automatisch String
    }
}

// Negierte Prüfung mit early return
void processNotNull(String? value) {
    if (value == null) return;
    print(value.toUpperCase());  // value ist automatisch String
}
```

**Besonderheiten:**
- Type Promotion verengt den Typ der Originalvariable automatisch
- Funktioniert mit `is`, Null-Checks und logischen Operatoren
- Early Return nach Null-Check verengt den Typ im restlichen Scope
- Lokale Variablen, Parameter und private Felder können promoted werden

**Weiterführende Links:**
- [Dart Documentation - Type Promotion](https://dart.dev/tools/non-promotion-reasons)

</TabItem>
<TabItem value="go" label="Go">

```go
// Flow-Sensitive Typing: Type Switches
func process(value interface{}) {
    switch v := value.(type) {
    case string:
        fmt.Println(strings.ToUpper(v))  // v ist string
    case int:
        fmt.Println(v + 1)               // v ist int
    }
}

// Type Assertion mit ok-Pattern
func greet(value interface{}) {
    if name, ok := value.(string); ok {
        fmt.Println(strings.ToUpper(name))  // name ist string
    }
}
```

**Besonderheiten:**
- Type Switches erstellen eine neue Variable mit dem verengten Typ
- Type Assertions mit dem `ok`-Pattern vermeiden Panics bei falschem Typ
- Ohne `ok`-Pattern löst eine fehlgeschlagene Assertion eine Panic aus
- Nur für Interface-Typen verfügbar (nicht für konkrete Typen)

**Weiterführende Links:**
- [Go Documentation - Type Switches](https://go.dev/tour/methods/16)

</TabItem>
<TabItem value="java" label="Java">

```java
// Pattern Matching für instanceof (seit Java 16)
void process(Object value) {
    if (value instanceof String s) {
        System.out.println(s.toUpperCase());  // s ist String
    } else if (value instanceof Integer n) {
        System.out.println(n + 1);            // n ist Integer
    }
}

// Switch Pattern Matching (seit Java 21)
String describe(Object value) {
    return switch (value) {
        case String s  -> "Text: " + s.toUpperCase();
        case Integer n -> "Zahl: " + (n + 1);
        default        -> "Unbekannt";
    };
}

// Guarded Patterns (seit Java 21)
String classify(Object value) {
    return switch (value) {
        case Integer n when n > 0 -> "Positive Zahl";
        case Integer n            -> "Nicht-positive Zahl";
        default                   -> "Kein Integer";
    };
}
```

**Besonderheiten:**
- Pattern Matching für `instanceof` (seit Java 16) erstellt eine neue Pattern-Variable
- Switch Pattern Matching (seit Java 21) ermöglicht erschöpfende Typ-Tests
- Guarded Patterns mit `when`-Klausel (seit Java 21) erlauben zusätzliche Bedingungen
- Vor Java 16 war ein expliziter Cast nach `instanceof` erforderlich

**Weiterführende Links:**
- [Oracle Java Documentation - Pattern Matching](https://docs.oracle.com/en/java/javase/21/language/pattern-matching.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Flow-Sensitive Typing: Smart Casts
fun process(value: Any) {
    if (value is String) {
        println(value.uppercase())  // value ist automatisch String
    } else if (value is Int) {
        println(value + 1)          // value ist automatisch Int
    }
}

// Null-Check Smart Cast
fun greet(name: String?) {
    if (name != null) {
        println(name.uppercase())  // name ist automatisch String
    }
}

// when-Ausdruck mit Smart Cast
fun describe(value: Any): String = when (value) {
    is String -> "Text: ${value.uppercase()}"
    is Int    -> "Zahl: ${value + 1}"
    else      -> "Unbekannt"
}
```

**Besonderheiten:**
- Smart Casts verengen den Typ der Originalvariable automatisch — kein neuer Name nötig
- Funktioniert mit `is`, `!is`, Null-Checks und `when`-Ausdrücken
- Smart Casts funktionieren nur für `val`-Variablen (oder `var` die nicht verändert werden)
- Veränderliche Properties können nicht smart-gecastet werden (Thread-Safety)

**Weiterführende Links:**
- [Kotlin Documentation - Smart Casts](https://kotlinlang.org/docs/typecasts.html#smart-casts)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Flow-Sensitive Typing: Pattern Matching mit Enums
enum Value {
    Text(String),
    Number(i32),
}

fn process(value: &Value) {
    match value {
        Value::Text(s) => println!("{}", s.to_uppercase()),
        Value::Number(n) => println!("{}", n + 1),
    }
}

// if let für einzelne Patterns
fn greet(name: &Option<String>) {
    if let Some(n) = name {
        println!("{}", n.to_uppercase());  // n ist &String
    }
}

// let-else für Early Return (seit Rust 1.65)
fn process_text(value: &Value) {
    let Value::Text(s) = value else { return };
    println!("{}", s.to_uppercase());  // s ist &String
}
```

**Besonderheiten:**
- Pattern Matching in `match`, `if let` und `let-else` erstellt neue Bindings mit dem verengten Typ
- `let-else` (seit Rust 1.65) ermöglicht Narrowing mit Early Return
- Der Compiler erzwingt erschöpfende Pattern-Prüfung in `match`
- Pattern Matching funktioniert mit Enums, Structs, Tupeln und Referenzen

**Weiterführende Links:**
- [Rust Documentation - Pattern Matching](https://doc.rust-lang.org/book/ch06-02-match.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Flow-Sensitive Typing: Match mit Typ-Patterns
def process(value: Any): Unit = value match {
    case s: String => println(s.toUpperCase)  // s ist String
    case n: Int    => println(n + 1)          // n ist Int
    case _         => println("Unbekannt")
}

// Option Matching
def greet(name: Option[String]): Unit = name match {
    case Some(n) => println(n.toUpperCase)
    case None    => ()
}

// Match mit Guards
def classify(value: Any): String = value match {
    case n: Int if n > 0 => "Positive Zahl"
    case n: Int          => "Nicht-positive Zahl"
    case _               => "Kein Int"
}
```

**Besonderheiten:**
- Typ-Patterns in `match` erstellen neue Variablen mit dem verengten Typ
- Erschöpfende Pattern-Prüfung wird bei Sealed Types erzwungen
- Guards (`if`-Klausel) erlauben zusätzliche Bedingungen
- Scala 3 bietet verbesserte Match Types für Typ-Level Pattern Matching

**Weiterführende Links:**
- [Scala Documentation - Pattern Matching](https://docs.scala-lang.org/scala3/book/control-structures.html#match-expressions)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Flow-Sensitive Typing: Pattern Matching mit Typ-Bindung
func process(_ value: Any) {
    if let s = value as? String {
        print(s.uppercased())  // s ist String
    } else if let n = value as? Int {
        print(n + 1)           // n ist Int
    }
}

// Switch mit Pattern Matching
func describe(_ value: Any) -> String {
    switch value {
    case let s as String: return "Text: \(s.uppercased())"
    case let n as Int:    return "Zahl: \(n + 1)"
    default:              return "Unbekannt"
    }
}

// Optional Binding (seit Swift 5.7: Shorthand)
func greet(_ name: String?) {
    if let name {
        print(name.uppercased())  // name ist String
    }
}
```

**Besonderheiten:**
- `as?` mit `if let` erstellt eine neue Konstante mit dem verengten Typ
- Shorthand Optional Binding `if let name` (seit Swift 5.7) bindet ohne Umbenennung
- `guard let` erzwingt Early Return und verengt den Typ im restlichen Scope
- Switch-Statements unterstützen Typ-Patterns mit `case let ... as Type`

**Weiterführende Links:**
- [Swift Documentation - Type Casting](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/typecasting/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Flow-Sensitive Typing: Automatische Typ-Verengung
function process(value: string | number) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());  // value ist string
    } else {
        console.log(value.toFixed(2));     // value ist number
    }
}

// Discriminated Union Narrowing
type Shape =
    | { kind: "circle"; radius: number }
    | { kind: "rect"; width: number; height: number };

function area(shape: Shape): number {
    switch (shape.kind) {
        case "circle": return Math.PI * shape.radius ** 2;
        case "rect":   return shape.width * shape.height;
    }
}

// Truthiness Narrowing
function greet(name: string | null) {
    if (name) {
        console.log(name.toUpperCase());  // name ist string
    }
}

// User-Defined Type Guards
function isString(value: unknown): value is string {
    return typeof value === "string";
}
```

**Besonderheiten:**
- TypeScript verengt den Typ der Originalvariable automatisch — kein neuer Name nötig
- Unterstützt `typeof`, `instanceof`, `in`, Truthiness und Equality Narrowing
- Discriminated Unions ermöglichen erschöpfende Prüfung über ein gemeinsames Feld
- User-Defined Type Guards (`value is Type`) erlauben benutzerdefinierte Verengungslogik

**Weiterführende Links:**
- [TypeScript Handbook - Narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)

</TabItem>
</FilteredTabs>

## 3.8.17. Literal Types

Literal Types ermöglichen es, spezifische Werte (wie `42`, `"hello"` oder `true`) als eigenständige Typen zu verwenden. Dies erlaubt präzisere Typbeschreibungen und typsichere APIs, bei denen nur bestimmte Werte erlaubt sind.

### Sprachen {#sprachen}

<FilteredTabs availableTabs={['haskell', 'idris', 'purescript', 'scala', 'typescript']} yellowTabs={['cpp', 'rust']}>
<TabItem value="cpp" label="C++">

```cpp
// Non-Type Template Parameters als Literal Types
template<int N>
struct IntConstant {
    static constexpr int value = N;
};

IntConstant<42> answer;   // 42 ist Teil des Typs
IntConstant<0> zero;      // IntConstant<42> ≠ IntConstant<0>

// Verschiedene Literal-Typen als Template-Parameter (seit C++20)
template<auto Value>
struct Constant {
    static constexpr auto value = Value;
};

Constant<42> intConst;    // int-Literal
Constant<true> boolConst; // bool-Literal
Constant<'A'> charConst;  // char-Literal

// Array mit Compile-Zeit-Größe
template<std::size_t N>
struct FixedArray {
    int data[N];
};

FixedArray<3> arr3;  // Array mit genau 3 Elementen
FixedArray<5> arr5;  // FixedArray<3> ≠ FixedArray<5>
```

**Besonderheiten:**
- Non-Type Template Parameters erlauben Werte als Typ-Parameter (seit C++98)
- `auto` als Template-Parameter ermöglicht beliebige Literal-Typen (seit C++20)
- Floating-Point-Werte als Template-Parameter sind seit C++20 erlaubt
- Jeder unterschiedliche Wert erzeugt einen separaten Typ (Monomorphisierung)

**Weiterführende Links:**
- [cppreference - Template Parameters](https://en.cppreference.com/w/cpp/language/template_parameters)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
{-# LANGUAGE DataKinds, KnownNat, KnownSymbol #-}

-- Literal Types auf Typ-Ebene (seit GHC 7.4)

-- Typ-Level Natürliche Zahlen (Nat)
data Proxy (n :: Nat) = Proxy

getValue :: KnownNat n => Proxy n -> Integer
getValue = natVal

result = getValue (Proxy :: Proxy 42)  -- 42

-- Typ-Level Strings (Symbol)
data Label (s :: Symbol) = Label

getName :: KnownSymbol s => Label s -> String
getName = symbolVal

name = getName (Label :: Label "Hallo")  -- "Hallo"

-- Typsichere Vektoren mit Literal-Länge
data Vector (n :: Nat) a = Vector [a]

vec3 :: Vector 3 Int
vec3 = Vector [1, 2, 3]
```

**Besonderheiten:**
- `DataKinds` promotet Werte auf die Typ-Ebene (seit GHC 7.4)
- `Nat` und `Symbol` sind die Haupt-Kinds für Literal Types
- `KnownNat` und `KnownSymbol` ermöglichen den Zugriff auf Typ-Level-Werte zur Laufzeit
- Bool-Literale (`True`, `False`) werden ebenfalls durch `DataKinds` promotet

**Weiterführende Links:**
- [GHC Documentation - DataKinds](https://ghc.gitlab.haskell.org/ghc/doc/users_guide/exts/data_kinds.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Literal Types über Dependent Types
-- Werte sind direkt als Typen verwendbar

-- Funktion die nur den Wert 42 akzeptiert
theAnswer : (n : Nat) -> n = 42 -> String
theAnswer 42 Refl = "Die Antwort"

-- Typsichere Vektoren mit Literal-Länge
vec3 : Vect 3 Int
vec3 = [1, 2, 3]

-- String auf Typ-Ebene
greet : (s : String) -> s = "Hallo" -> String
greet "Hallo" Refl = "Hallo Welt"

-- Allgemein: Beliebige Werte als Typen
data Exactly : a -> Type where
    MkExactly : (x : a) -> Exactly x
```

**Besonderheiten:**
- Dependent Types subsumieren Literal Types — beliebige Werte können auf Typ-Ebene erscheinen
- `Refl` beweist die Gleichheit eines Werts mit einem Typ-Level-Literal
- Keine spezielle Erweiterung nötig — Literal Types sind natürlicher Teil der Sprache
- Compile-Zeit-Prüfung: ungültige Werte werden vom Typsystem abgelehnt

**Weiterführende Links:**
- [Idris 2 Documentation - Dependent Types](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Literal Types: Typ-Level Strings (Symbol)
-- Benötigt: import Type.Proxy (Proxy(..))

class HasLabel (s :: Symbol) where
    label :: Proxy s -> String

instance HasLabel "north" where
    label _ = "Norden"

instance HasLabel "south" where
    label _ = "Süden"

north :: String
north = label (Proxy :: Proxy "north")  -- "Norden"

-- Typ-Level Integers (seit PureScript 0.15)
class HasSize (n :: Int) where
    size :: Proxy n -> Int

instance HasSize 3 where
    size _ = 3
```

**Besonderheiten:**
- `Symbol`-Kind für Typ-Level Strings (ähnlich wie Haskell)
- `Int`-Kind für Typ-Level Integers (seit PureScript 0.15)
- `Proxy` wird verwendet, um Typ-Level-Werte an Funktionen zu übergeben
- Row Types verwenden Symbols als Feldnamen auf Typ-Ebene

**Weiterführende Links:**
- [PureScript Documentation - Type-Level Programming](https://github.com/purescript/documentation/blob/master/language/Types.md)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Const Generics als Literal Types (seit Rust 1.51)
struct Array<const N: usize> {
    data: [i32; N],
}

let arr3: Array<3> = Array { data: [1, 2, 3] };
let arr5: Array<5> = Array { data: [1, 2, 3, 4, 5] };
// Array<3> und Array<5> sind verschiedene Typen

// Const Generics in Funktionen
fn create_zeros<const N: usize>() -> [i32; N] {
    [0; N]
}

let zeros: [i32; 4] = create_zeros::<4>();

// Bool als Const Generic (seit Rust 1.51)
struct Feature<const ENABLED: bool>;
type Enabled = Feature<true>;
type Disabled = Feature<false>;
```

**Besonderheiten:**
- Const Generics erlauben Werte als Typ-Parameter (seit Rust 1.51)
- Unterstützt `usize`, `isize`, `bool`, `char` und Integer-Typen
- Jeder unterschiedliche Wert erzeugt einen separaten Typ (Monomorphisierung)
- String-Literale und Floating-Point-Werte sind noch nicht als Const Generics unterstützt

**Weiterführende Links:**
- [Rust Documentation - Const Generics](https://doc.rust-lang.org/reference/items/generics.html#const-generics)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Literal Types (seit Scala 3)
val answer: 42 = 42
val greeting: "Hallo" = "Hallo"
val flag: true = true

// Literal Types in Union Types
type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6

def roll(value: DiceRoll): Unit =
    println(s"Würfel: $value")

roll(3)     // OK
// roll(7)  // Fehler: 7 ist kein gültiger Literal-Typ

// Literal Types als Funktionsparameter
def greet(name: "Hallo" | "Hi"): String =
    s"$name Welt"
```

**Besonderheiten:**
- Literal Types für Integers, Strings, Booleans, Characters und `null` (seit Scala 3)
- In Scala 2.13 über die `-Yliteral-types`-Flag verfügbar
- Kombinierbar mit Union Types für typsichere Aufzählungen
- `valueOf[T]` extrahiert den Wert aus einem Singleton-Literal-Typ

**Weiterführende Links:**
- [Scala 3 Documentation - Literal Types](https://docs.scala-lang.org/scala3/reference/changed-features/numeric-literals.html)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Literal Types: Werte als Typen
type Direction = "north" | "south" | "east" | "west";

function move(direction: Direction) {
    console.log(`Moving ${direction}`);
}

move("north");    // OK
// move("up");    // Fehler: "up" ist nicht zuweisbar

// Numerische Literal Types
type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;

// Boolean Literal Types
type Success = { ok: true; data: string };
type Failure = { ok: false; error: string };
type Result = Success | Failure;

// Template Literal Types (seit TypeScript 4.1)
type EventName = `on${string}`;
type Greeting = `Hello, ${string}`;

let event: EventName = "onClick";  // OK
let greet: Greeting = "Hello, World";  // OK
```

**Besonderheiten:**
- String-, Number- und Boolean-Literal Types als Kernfeature der Sprache
- Template Literal Types (seit TypeScript 4.1) erlauben String-Pattern auf Typ-Ebene
- `as const` erzeugt automatisch Literal Types aus Werten
- Discriminated Unions nutzen Literal Types als Diskriminator

**Weiterführende Links:**
- [TypeScript Handbook - Literal Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types)

</TabItem>
</FilteredTabs>

