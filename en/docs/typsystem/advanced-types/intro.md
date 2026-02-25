---
slug: /typsystem/advanced-types
title: 3.8. Advanced Types
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import FilteredTabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 3.8. Advanced Types

Advanced type constructs such as Union Types and ADTs.

## 3.8.1. Union Types

Types that can take a value from multiple possible types.

### Languages {#languages}

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

**Special features:**
- Variant Records with Discriminants
- Type-safe Union Types
- Discriminant determines active variant

**Further reading:**
- [Ada Reference Manual - Variant Records](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-3-8.html)

</TabItem>
<TabItem value="c" label="C">

```c
// Union Types: C-style unions (not type-safe)
union Number {
    int int_value;
    double float_value;
};

union Number num1;
num1.int_value = 42;

union Number num2;
num2.float_value = 3.14;
```

**Special features:**
- C-style unions are not type-safe
- All variants share the same memory
- No type checking at compile time

**Further reading:**
- [C Standard - Union Types](https://en.cppreference.com/w/c/language/union)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Union Types: planned
// Syntax not yet final
// var num: Int | Float = 42;
```

**Special features:**
- Union Types are planned
- Experimental language, syntax may still change

**Further reading:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Union Types: std::variant (since C++17)
#include <variant>

std::variant<int, double> num1 = 42;
std::variant<int, double> num2 = 3.14;

// Type-safe access
int int_val = std::get<int>(num1);
double float_val = std::get<double>(num2);

// Or with std::visit
std::visit([](auto& value) {
    std::cout << value << std::endl;
}, num1);
```

**Special features:**
- `std::variant` since C++17
- Type-safe Union Types
- Supports `std::visit` for Pattern Matching

**Further reading:**
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

**Special features:**
- Union Types with `|` syntax
- Type narrowing with `is_a?`
- Compile-time type checking

**Further reading:**
- [Crystal Documentation - Union Types](https://crystal-lang.org/reference/1.11/syntax_and_semantics/union_types.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Union Types: Discriminated Unions (not directly supported)
// Workaround: Records with sealed classes (since C# 9.0)
abstract record Number;
record IntNumber(int Value) : Number;
record FloatNumber(double Value) : Number;

Number num1 = new IntNumber(42);
Number num2 = new FloatNumber(3.14);

// Pattern Matching (since C# 8.0)
string result = num1 switch
{
    IntNumber i => $"Integer: {i.Value}",
    FloatNumber f => $"Float: {f.Value}",
    _ => "Unknown"
};
```

**Special features:**
- No direct Union Types
- Discriminated Unions with sealed classes/records (since C# 9.0)
- Pattern Matching since C# 8.0

**Further reading:**
- [Microsoft C# Documentation - Pattern Matching](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/functional/pattern-matching)

</TabItem>
<TabItem value="d" label="D">

```d
// Union Types: std.variant
import std.variant;

Variant num1 = 42;
Variant num2 = 3.14;

// Type-safe access
int int_val = num1.get!int;
double float_val = num2.get!double;

// Or with visit
num1.visit!((int i) => writeln("Integer: ", i),
            (double d) => writeln("Float: ", d));
```

**Special features:**
- `std.variant.Variant` for Union Types
- Type-safe access with `get!`
- Supports `visit` for Pattern Matching

**Further reading:**
- [D Language Specification - Variant](https://dlang.org/phobos/std_variant.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Union Types: not directly supported
// Workaround: Object or dynamic
Object num1 = 42;
Object num2 = 3.14;

// Type checking at runtime
if (num1 is int) {
  print('Integer: $num1');
} else if (num1 is double) {
  print('Float: $num1');
}
```

**Special features:**
- No direct Union Types
- `Object` or `dynamic` as workaround
- Type checking at runtime with `is`

**Further reading:**
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

**Special features:**
- Discriminated Unions with `|` syntax
- Pattern Matching with `match`
- Type-safe Union Types

**Further reading:**
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

**Special features:**
- Union Types with `haxe.extern.EitherType`
- Type checking at runtime
- Supports multiple types

**Further reading:**
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

**Special features:**
- Union Types with `Union{}` syntax
- Type checking with `isa`
- Compile-time type checking

**Further reading:**
- [Julia Documentation - Union Types](https://docs.julialang.org/en/v1/manual/types/#Union-Types)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Union Types: Sealed Classes (since Kotlin 1.0)
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

**Special features:**
- Sealed Classes as Union Types
- Pattern Matching with `when`
- Type-safe Union Types

**Further reading:**
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

**Special features:**
- Discriminated Unions with `---->` and `;` as variant separators
- Each variant is a named constructor with typed arguments
- Pattern Matching directly in clause definition (each variant = own clause)

**Further reading:**
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

**Special features:**
- Object variants with `case` and `of`
- Type-safe Union Types
- Pattern Matching with `case`

**Further reading:**
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

**Special features:**
- Variant Records with `case` and `of`
- Type-safe Union Types
- Discriminant determines active variant

**Further reading:**
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

**Special features:**
- Variants with `|` syntax
- Pattern Matching with `match`
- Type-safe Union Types

**Further reading:**
- [OCaml Documentation - Variants](https://ocaml.org/manual/data-types.html#s:variant-types)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Union Types: Union Types (since Odin 0.1)
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

**Special features:**
- Union Types with `union{}` syntax
- Type-safe Union Types
- Pattern Matching with `switch`

**Further reading:**
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

**Special features:**
- Sum Types as Union Types
- Pattern Matching with case expressions
- Type-safe Union Types

**Further reading:**
- [PureScript Documentation - Data Types](https://github.com/purescript/documentation/blob/master/language/Types.md)

</TabItem>
<TabItem value="python" label="Python">

```python
# Union Types: Union Types (since Python 3.10)
from typing import Union

# Since Python 3.10: | syntax
Number = int | float

num1: Number = 42
num2: Number = 3.14

# Or with typing.Union (before Python 3.10)
NumberOld = Union[int, float]

# Type checking at runtime
if isinstance(num1, int):
    print(f"Integer: {num1}")
elif isinstance(num1, float):
    print(f"Float: {num1}")
```

**Special features:**
- Union Types with `|` syntax (since Python 3.10)
- `typing.Union` for older versions
- Type hints not enforced at runtime

**Further reading:**
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

**Special features:**
- Tag Unions with `[Tag1 Payload, Tag2 Payload]` syntax
- Pattern Matching with `when/is`
- Type-safe Tag Unions

**Further reading:**
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

**Special features:**
- Enums as Union Types
- Pattern Matching with `match`
- Type-safe Union Types

**Further reading:**
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

**Special features:**
- Sealed Traits/Classes as Union Types
- Pattern Matching with `match`
- Type-safe Union Types

**Further reading:**
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

**Special features:**
- Enums with Associated Values as Union Types
- Pattern Matching with `switch`
- Type-safe Union Types

**Further reading:**
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

**Special features:**
- Union Types with `|` syntax
- Type narrowing with `typeof`
- Type erasure at runtime (JavaScript)

**Further reading:**
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

**Special features:**
- Union Types with `union(enum)` syntax
- Pattern Matching with `switch`
- Type-safe Union Types

**Further reading:**
- [Zig Documentation - Union Types](https://ziglang.org/documentation/0.11.0/#union)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Union Types with or Type Specifier
(deftype string-or-number () '(or string number))

(typep 42 'string-or-number)        ; T
(typep "hello" 'string-or-number)   ; T
(typep :symbol 'string-or-number)   ; NIL

;; In type declarations
(defun process (x)
  (declare (type (or string number) x))
  (typecase x
    (string (format nil "String: ~a" x))
    (number (format nil "Number: ~a" x))))
```

**Special features:**
- Union Types via `(or type1 type2 ...)` Type Specifier
- Can be defined as named types with `deftype`
- `typecase` for type-based dispatching
- Fully integrated into the type system (checkable with `typep` and `subtypep`)

**Further reading:**
- [Common Lisp HyperSpec - Type Specifiers](http://www.lispworks.com/documentation/HyperSpec/Body/04_bc.htm)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Union Types (Custom Types)
type Color
    = Red
    | Green
    | Blue

-- Union Types with data
type Shape
    = Circle Float
    | Rectangle Float Float
    | Triangle Float Float Float

-- Usage with Pattern Matching
area : Shape -> Float
area shape =
    case shape of
        Circle r -> pi * r * r
        Rectangle w h -> w * h
        Triangle a b c ->
            let s = (a + b + c) / 2
            in sqrt (s * (s - a) * (s - b) * (s - c))
```

**Special features:**
- Custom Types are Tagged Unions (discriminated unions)
- Each constructor can carry different data
- Exhaustive Pattern Matching is enforced by the compiler
- Custom Types are the primary mechanism for data modeling

**Further reading:**
- [Elm Documentation - Custom Types](https://guide.elm-lang.org/types/custom_types.html)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
// Union Types (since PHP 8.0)
function processInput(int|string $input): string {
    if (is_int($input)) {
        return "Number: $input";
    }
    return "Text: $input";
}

echo processInput(42);       // "Number: 42"
echo processInput("hello");  // "Text: hello"
?>
```

**Special features:**
- Union Types since PHP 8.0 with `|` syntax
- Can be used for parameters, return values and properties
- `null` can be part of a Union Type: `int|null` (equivalent to `?int`)

**Further reading:**
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

**Special features:**
- Sum Types with `type Name = A | B | C`
- Tagged Unions (type-safe)
- Exhaustive `match` for Pattern Matching
- Can combine any number of types

**Further reading:**
- [V Documentation - Sum Types](https://github.com/vlang/v/blob/master/doc/docs.md#sum-types)

</TabItem>
</FilteredTabs>


## 3.8.2. Intersection Types

Types that combine all properties of multiple types, so that a value must satisfy all requirements.

### Languages {#languages}

<FilteredTabs availableTabs={['carbon', 'crystal', 'csharp', 'dart', 'fsharp', 'go', 'haskell', 'haxe', 'idris', 'java', 'julia', 'kotlin', 'nim', 'ocaml', 'odin', 'php', 'purescript', 'rust', 'scala', 'swift', 'typescript', 'zig']} orangeTabs={['python']}>
<TabItem value="carbon" label="Carbon">

```cpp
// Intersection Types: planned
// Syntax not yet final
// type DrawableAndComparable = Drawable & Comparable;
```

**Special features:**
- Intersection Types are planned
- Experimental language, syntax may still change

**Further reading:**
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

# Intersection: Type must implement both modules
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

**Special features:**
- Intersection Types with `&` syntax
- Type must implement all modules
- Compile-time type checking

**Further reading:**
- [Crystal Documentation - Modules](https://crystal-lang.org/reference/1.11/syntax_and_semantics/modules.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Intersection Types: Interfaces (since C# 1.0)
interface IDrawable
{
    void Draw();
}

interface IComparable<T>
{
    int CompareTo(T other);
}

// Intersection: Class must implement both interfaces
class Shape : IDrawable, IComparable<Shape>
{
    public void Draw() { }
    public int CompareTo(Shape other) => 0;
}

// Usage
void Process<T>(T item) where T : IDrawable, IComparable<T>
{
    item.Draw();
    // item.CompareTo(...) available
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
// Intersection Types: Mixins (since Dart 2.0)
mixin Drawable {
  void draw() {}
}

mixin Comparable<T> {
  int compareTo(T other) => 0;
}

// Intersection: Class must use both mixins
class Shape with Drawable, Comparable<Shape> {
  @override
  void draw() {}
  
  @override
  int compareTo(Shape other) => 0;
}
```

**Special features:**
- Mixins as Intersection Types
- Multiple mixins with `with`
- Compile-time type checking

**Further reading:**
- [Dart Documentation - Mixins](https://dart.dev/language/mixins)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Intersection Types: Interfaces
type IDrawable =
    abstract member Draw: unit -> unit

type IComparable<'T> =
    abstract member CompareTo: 'T -> int

// Intersection: Type must implement both interfaces
type Shape() =
    interface IDrawable with
        member this.Draw() = ()
    
    interface IComparable<Shape> with
        member this.CompareTo(other: Shape) = 0

// Usage
let processItem (item: 'T when 'T :> IDrawable and 'T :> IComparable<'T>) =
    (item :> IDrawable).Draw()
```

**Special features:**
- Interfaces as Intersection Types
- Constraints with `when` and `and`
- Compile-time type checking

**Further reading:**
- [F# Documentation - Interfaces](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/interfaces)

</TabItem>
<TabItem value="go" label="Go">

```go
// Intersection Types: Interfaces (since Go 1.0)
type Drawable interface {
    Draw()
}

type Comparable interface {
    CompareTo(other interface{}) int
}

// Intersection: Type must implement both interfaces
type Shape struct{}

func (s Shape) Draw() {}
func (s Shape) CompareTo(other interface{}) int { return 0 }

// Usage
func processItem(item interface{}) {
    if d, ok := item.(Drawable); ok {
        d.Draw()
    }
    if c, ok := item.(Comparable); ok {
        c.CompareTo(nil)
    }
}
```

**Special features:**
- Interfaces as Intersection Types
- Duck typing at runtime
- Type assertions with `.(Interface)`

**Further reading:**
- [Go Documentation - Interfaces](https://go.dev/tour/methods/9)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Intersection Types: Type Class Constraints
class Drawable a where
    draw :: a -> IO ()

class Comparable a where
    compareTo :: a -> a -> Ordering

-- Intersection: Type must satisfy both type classes
data Shape = Shape

instance Drawable Shape where
    draw _ = putStrLn "Drawing shape"

instance Comparable Shape where
    compareTo _ _ = EQ

-- Usage
processItem :: (Drawable a, Comparable a) => a -> IO ()
processItem item = do
    draw item
    print (compareTo item item)
```

**Special features:**
- Type Class Constraints as Intersection Types
- Multiple constraints with `(Constraint1, Constraint2)`
- Compile-time type checking

**Further reading:**
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

// Intersection: Type must implement both interfaces
class Shape implements Drawable implements Comparable<Shape> {
    public function draw(): Void {}
    public function compareTo(other: Shape): Int { return 0; }
}

// Usage
function processItem<T:Drawable & Comparable<T>>(item: T): Void {
    item.draw();
    item.compareTo(item);
}
```

**Special features:**
- Intersection Types with `&` syntax
- Multiple interfaces with `implements`
- Compile-time type checking

**Further reading:**
- [Haxe Documentation - Interfaces](https://haxe.org/manual/types-interfaces.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Intersection Types: Interface Constraints
interface Drawable a where
    draw : a -> IO ()

interface Comparable a where
    compareTo : a -> a -> Ordering

-- Intersection: Type must satisfy both interfaces
data Shape = MkShape

Drawable Shape where
    draw _ = putStrLn "Drawing shape"

Comparable Shape where
    compareTo _ _ = EQ

-- Usage
processItem : (Drawable a, Comparable a) => a -> IO ()
processItem item = do
    draw item
    print (compareTo item item)
```

**Special features:**
- Interface Constraints as Intersection Types
- Multiple constraints with `(Constraint1, Constraint2)`
- Compile-time type checking

**Further reading:**
- [Idris Documentation - Interfaces](https://idris2.readthedocs.io/en/latest/tutorial/interfaces.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Intersection Types: Interfaces (since Java 1.0)
interface Drawable {
    void draw();
}

interface Printable {
    void print();
}

// Intersection: Class must implement both interfaces
class Shape implements Drawable, Printable {
    @Override
    public void draw() { System.out.println("Drawing"); }

    @Override
    public void print() { System.out.println("Printing"); }
}

// Intersection Type in Generics with &
<T extends Drawable & Printable> void processItem(T item) {
    item.draw();
    item.print();
}
```

**Special features:**
- Interfaces as Intersection Types
- Multiple interfaces with `&` in generics
- Compile-time type checking

**Further reading:**
- [Oracle Java Documentation - Intersection Types](https://docs.oracle.com/javase/tutorial/java/generics/bounded.html)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Intersection Types: Intersection Types
abstract type Drawable end
abstract type Comparable end

# Intersection: Type must satisfy both abstract types
struct Shape <: Drawable <: Comparable
end

# Usage
function process_item(item::Drawable & Comparable)
    # item satisfies both types
end
```

**Special features:**
- Intersection Types with `&` syntax
- Type must satisfy both abstract types
- Compile-time type checking

**Further reading:**
- [Julia Documentation - Type System](https://docs.julialang.org/en/v1/manual/types/)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Intersection Types: Interfaces (since Kotlin 1.0)
interface Drawable {
    fun draw()
}

interface Comparable<T> {
    fun compareTo(other: T): Int
}

// Intersection: Class must implement both interfaces
class Shape : Drawable, Comparable<Shape> {
    override fun draw() {}
    override fun compareTo(other: Shape) = 0
}

// Usage with generics
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
# Intersection Types: Concepts with multiple constraints
type
  Drawable = concept a
    a.draw() is void

  Comparable = concept a
    a.compareTo(a) is int

# Intersection: Type must satisfy both concepts
type Shape = object

proc draw(s: Shape) = discard
proc compareTo(s: Shape, other: Shape): int = 0

# Multiple constraints
proc processItem[T: Drawable and Comparable](item: T) =
  item.draw()
  discard item.compareTo(item)
```

**Special features:**
- Concepts as Intersection Types
- Intersection with `and` syntax
- Compile-time type checking

**Further reading:**
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

(* Intersection: Module must satisfy both module types *)
module Shape : Drawable * Comparable = struct
    let draw () = ()
    let compare_to _ _ = 0
end
```

**Special features:**
- Module Types as Intersection Types
- Multiple module types with `*`
- Compile-time type checking

**Further reading:**
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

// Intersection: Type must implement both interfaces
Shape :: struct {
    // ...
}

draw :: proc(self: ^Shape) {}
compare_to :: proc(self: ^Shape, other: ^Shape) -> int { return 0 }
```

**Special features:**
- Interfaces as Intersection Types
- Type must implement all interfaces
- Compile-time type checking

**Further reading:**
- [Odin Documentation - Interfaces](https://odin-lang.org/docs/overview/#interfaces)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Intersection Types: Type Class Constraints
class Drawable a where
    draw :: a -> Effect Unit

class Comparable a where
    compareTo :: a -> a -> Ordering

-- Intersection: Type must satisfy both type classes
data Shape = Shape

instance Drawable Shape where
    draw _ = pure unit

instance Comparable Shape where
    compareTo _ _ = EQ

-- Usage with multiple constraints
processItem :: forall a. Drawable a => Comparable a => a -> Effect Unit
processItem item = do
    draw item
    pure unit
```

**Special features:**
- Type Class Constraints as Intersection Types
- Multiple constraints with `=>` chains
- Compile-time type checking

**Further reading:**
- [PureScript Documentation - Type Classes](https://github.com/purescript/documentation/blob/master/language/Type-Classes.md)

</TabItem>
<TabItem value="python" label="Python">

```python
from typing import Protocol

class Drawable(Protocol):
    def draw(self) -> None: ...

class Comparable(Protocol):
    def compare_to(self, other) -> int: ...

# Intersection via multiple inheritance of Protocols
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

**Special features:**
- No native intersection syntax (`&` is not available for types)
- Intersection simulated via multiple inheritance of `Protocol` classes
- Type hints not enforced at runtime

**Further reading:**
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

// Intersection: Type must implement both traits
struct Shape;

impl Drawable for Shape {
    fn draw(&self) {}
}

impl Comparable for Shape {
    fn compare_to(&self, other: &Self) -> std::cmp::Ordering {
        std::cmp::Ordering::Equal
    }
}

// Usage
fn process_item<T: Drawable + Comparable>(item: T) {
    item.draw();
    item.compare_to(&item);
}
```

**Special features:**
- Traits as Intersection Types
- Multiple traits with `+` syntax
- Compile-time type checking

**Further reading:**
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

// Intersection: Class must implement both traits
class Shape extends Drawable with Comparable[Shape] {
    override def draw(): Unit = {}
    override def compareTo(other: Shape): Int = 0
}

// Usage
def processItem[T <: Drawable with Comparable[T]](item: T): Unit = {
    item.draw()
    item.compareTo(item)
}
```

**Special features:**
- Traits as Intersection Types
- Multiple traits with `with`
- Compile-time type checking

**Further reading:**
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

// Intersection: Type must implement both protocols
struct Shape: Drawable, Comparable {
    func draw() {}
    func compareTo(_ other: Shape) -> ComparisonResult {
        return .orderedSame
    }
}

// Usage
func processItem<T: Drawable & Comparable>(_ item: T) {
    item.draw()
    item.compareTo(item)
}
```

**Special features:**
- Protocols as Intersection Types
- Multiple protocols with `&` syntax
- Compile-time type checking

**Further reading:**
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

// Intersection: Type must satisfy both interfaces
type DrawableAndComparable<T> = Drawable & Comparable<T>;

class Shape implements Drawable, Comparable<Shape> {
    draw(): void {}
    compareTo(other: Shape): number { return 0; }
}

// Usage
function processItem<T extends Drawable & Comparable<T>>(item: T): void {
    item.draw();
    item.compareTo(item);
}
```

**Special features:**
- Intersection Types with `&` syntax
- Multiple interfaces with `&`
- Type erasure at runtime (JavaScript)

**Further reading:**
- [TypeScript Handbook - Intersection Types](https://www.typescriptlang.org/docs/handbook/2/objects.html#intersection-types)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Intersection Types: Interfaces (planned)
// Currently: Workaround with structs
const Drawable = struct {
    draw: fn(*const @This()) void,
};

const Comparable = struct {
    compare_to: fn(*const @This(), *const @This()) i32,
};

// Intersection: Type must satisfy both structs
const Shape = struct {
    draw: fn(*const @This()) void,
    compare_to: fn(*const @This(), *const @This()) i32,
};
```

**Special features:**
- Interfaces are planned
- Currently: Workaround with structs
- Compile-time type checking

**Further reading:**
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

**Special features:**
- Intersection Types since PHP 8.1 with `&` syntax
- Requires that a value satisfies multiple types simultaneously
- Only for classes and interfaces, not for primitive types

**Further reading:**
- [PHP Documentation - Intersection Types](https://www.php.net/manual/en/language.types.declarations.php#language.types.declarations.intersection)

</TabItem>
</FilteredTabs>


## 3.8.3. Enums

Enumeration types that define a fixed set of named values.

### Languages {#languages}

<FilteredTabs availableTabs={['ada', 'c', 'carbon', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'fortran', 'fsharp', 'gleam', 'go', 'groovy', 'haxe', 'java', 'julia', 'koka', 'kotlin', 'lean4', 'matlab', 'mercury', 'nim', 'object-pascal', 'objective-c', 'ocaml', 'odin', 'php', 'purescript', 'python', 'roc', 'rust', 'scala', 'swift', 'typescript', 'v', 'vbnet', 'zig']} orangeTabs={['eiffel']}>
<TabItem value="ada" label="Ada">

```ada
-- Enums: Enumeration Types
type Color is (Red, Green, Blue);
type Status is (Pending, Active, Completed);

current_color : Color := Red;
current_status : Status := Active;
```

**Special features:**
- Enumeration Types with `is` syntax
- Values are ordered (ordinal)
- Supports attributes like `Color'First`, `Color'Last`

**Further reading:**
- [Ada Reference Manual - Enumeration Types](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-3-5-1.html)

</TabItem>
<TabItem value="c" label="C">

```c
// Enums: Enum Types (since C89)
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

**Special features:**
- Enum Types since C89
- Values are integer constants
- Supports explicit values: `RED = 1`

**Further reading:**
- [C Standard - Enum Types](https://en.cppreference.com/w/c/language/enum)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Enums: Enums (planned)
// enum Color { Red, Green, Blue };
```

**Special features:**
- Enums are planned
- Experimental language, syntax may still change

**Further reading:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Enums: Enum Types (since C++98)
enum Color {
    RED,
    GREEN,
    BLUE
};

// Scoped Enums (since C++11)
enum class Status {
    PENDING,
    ACTIVE,
    COMPLETED
};

Color current_color = RED;
Status current_status = Status::ACTIVE;
```

**Special features:**
- Enum Types since C++98
- Scoped Enums with `enum class` (since C++11)
- Supports explicit values and types

**Further reading:**
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

**Special features:**
- Enum Types with `enum` keyword
- Values are types
- Supports methods on enums

**Further reading:**
- [Crystal Documentation - Enums](https://crystal-lang.org/reference/1.11/syntax_and_semantics/enum.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Enums: Enum Types (since C# 1.0)
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

**Special features:**
- Enum Types since C# 1.0
- Supports explicit values and types
- Flags attribute for bit flags

**Further reading:**
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

**Special features:**
- Enum Types with `enum` keyword
- Values are integer constants
- Supports explicit values

**Further reading:**
- [D Language Specification - Enums](https://dlang.org/spec/enum.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Enums: Enum Types (since Dart 2.17)
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

**Special features:**
- Enum Types since Dart 2.17
- Supports methods and properties
- Enhanced Enums with fields (since Dart 2.17)

**Further reading:**
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

-- Usage
local
    c: COLOR
    current_color: INTEGER
do
    create c
    current_color := c.green
end
```

**Special features:**
- Eiffel has no native `enum` keyword
- Enumerations are realized via classes with integer constants
- Type safety must be ensured manually
- No automatic exhaustiveness checking

**Further reading:**
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

**Special features:**
- Enum Types with explicit values
- Values must be integers
- Supports Pattern Matching

**Further reading:**
- [F# Documentation - Enums](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/enumerations)

</TabItem>
<TabItem value="go" label="Go">

```go
// Enums: iota for Enums (since Go 1.0)
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

**Special features:**
- Enums with `iota` for automatic values
- Type alias with integer base
- Values are integer constants

**Further reading:**
- [Go Documentation - Iota](https://go.dev/ref/spec#Iota)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Enums: Enum Types (Java-compatible)
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

**Special features:**
- Enum Types (Java-compatible)
- Supports methods and properties
- Supports constructors

**Further reading:**
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

**Special features:**
- Enum Types with `enum` keyword
- Supports parameters for enum values
- Pattern Matching with `switch`

**Further reading:**
- [Haxe Documentation - Enums](https://haxe.org/manual/types-enum-instance.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Enums: Enum Types (since Java 5)
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

**Special features:**
- Enum Types since Java 5
- Supports methods and constructors
- Supports interfaces

**Further reading:**
- [Oracle Java Documentation - Enums](https://docs.oracle.com/javase/tutorial/java/javaOO/enum.html)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Enums: Enum Types (since Julia 0.4)
@enum Color Red Green Blue
@enum Status Pending Active Completed

current_color = Red
current_status = Active
```

**Special features:**
- Enum Types with `@enum` macro
- Values are integer constants
- Supports explicit values

**Further reading:**
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

**Special features:**
- Enums are defined as algebraic data types without fields
- Constructors begin with capital letters
- No separate `enum` keyword — Enums are a special case of `type`

**Further reading:**
- [Koka Language Documentation - Type Declarations](https://koka-lang.github.io/koka/doc/book.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Enums: Enum Classes (since Kotlin 1.0)
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

**Special features:**
- Enum Types with `enum` keyword
- Supports Associated Values
- Pattern Matching with `match`

**Further reading:**
- [The Rust Book - Enums](https://doc.rust-lang.org/book/ch06-01-defining-an-enum.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Enums: Enum Types (since Scala 3)
enum Color:
    case Red, Green, Blue

enum Status:
    case Pending, Active, Completed

val currentColor = Color.Red
val currentStatus = Status.Active
```

**Special features:**
- Enum Types since Scala 3
- Supports parameters and methods
- Pattern Matching with `match`

**Further reading:**
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

**Special features:**
- Enum Types with `enum` keyword
- Supports Associated Values
- Pattern Matching with `switch`

**Further reading:**
- [Swift Documentation - Enumerations](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/enumerations/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Enums: Enum Types (since TypeScript 1.0)
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

**Special features:**
- Enum Types since TypeScript 1.0
- Supports String Enums
- Type erasure at runtime (JavaScript)

**Further reading:**
- [TypeScript Handbook - Enums](https://www.typescriptlang.org/docs/handbook/enums.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Enums: Enum Types (since VB.NET 1.0)
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

**Special features:**
- Enum Types since VB.NET 1.0
- Supports explicit values
- Flags attribute for bit flags

**Further reading:**
- [Microsoft VB.NET Documentation - Enums](https://learn.microsoft.com/en-us/dotnet/visual-basic/language-reference/statements/enum-statement)

</TabItem>
<TabItem value="v" label="V">

```v
// Enums: Enum Types (since V 0.3)
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

**Special features:**
- Enum Types since V 0.3
- Values are integer constants
- Supports explicit values

**Further reading:**
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

**Special features:**
- Enum Types with `enum{}` syntax
- Values are integer constants
- Supports explicit values

**Further reading:**
- [Zig Documentation - Enums](https://ziglang.org/documentation/0.11.0/#enums)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Enums with BIND(C) (since Fortran 2003)
enum, bind(c)
    enumerator :: RED = 0, GREEN = 1, BLUE = 2
end enum

integer(kind=kind(RED)) :: color
color = GREEN
```

**Special features:**
- `ENUM, BIND(C)` for C-compatible enumerations (since Fortran 2003)
- Enumerators are treated as INTEGER constants
- Primarily intended for C interoperability

**Further reading:**
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

**Special features:**
- Custom Types with constructors without arguments work like Enums
- Exhaustiveness checking by the compiler
- No separate `enum` keyword, uses `type`

**Further reading:**
- [Gleam Documentation - Custom Types](https://tour.gleam.run/data-types/custom-types/)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% Enums: Enumeration classes (since R2010b)
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

**Special features:**
- Enumerations are defined as `classdef` with `enumeration` block
- Can inherit from superclasses (e.g., `int32`)
- Support since R2010b

**Further reading:**
- [MATLAB Documentation - Enumerations](https://www.mathworks.com/help/matlab/matlab_oop/enumerations.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Enums: Enumeration types as Discriminated Unions without arguments
:- type color
    --->    red
    ;       green
    ;       blue.

:- type status
    --->    pending
    ;       active
    ;       completed.
```

**Special features:**
- Enums are Discriminated Unions without arguments (nullary constructors)
- Defined with `---->` and `;` as variant separators
- Exhaustive Pattern Matching over all constructors enforced

**Further reading:**
- [Mercury Language Reference - Discriminated Unions](https://www.mercurylang.org/information/doc-release/mercury_ref/Discriminated-unions.html)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
// Enums (since PHP 8.1)
enum Suit {
    case Hearts;
    case Diamonds;
    case Clubs;
    case Spades;
}

// Backed Enums with values
enum Color: string {
    case Red = 'red';
    case Green = 'green';
    case Blue = 'blue';
}

$suit = Suit::Hearts;
$color = Color::from('red'); // Color::Red
?>
```

**Special features:**
- Native Enums since PHP 8.1
- Backed Enums with `string` or `int` values
- Supports interfaces and methods in Enums
- `from()` and `tryFrom()` for Backed Enums

**Further reading:**
- [PHP Documentation - Enumerations](https://www.php.net/manual/en/language.enumerations.php)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Enums as Tag Unions without payloads
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

**Special features:**
- Enums are defined as Tag Unions without payloads
- Exhaustive Pattern Matching enforced
- Compile-time Type Safety

**Further reading:**
- [Roc Documentation - Tags](https://www.roc-lang.org/tutorial#tags)

</TabItem>
</FilteredTabs>


## 3.8.4. Algebraic Data Types

### Algebraic Data Types


Types constructed by combining Sum Types (variants) and Product Types (tuples/records).


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

**Special features:**
- Discriminated Unions as ADTs
- Combination of Sum Types and Product Types
- Pattern Matching with `match`

**Further reading:**
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

**Special features:**
- Data Types as ADTs
- Combination of Sum Types and Product Types
- Pattern Matching with case expressions

**Further reading:**
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

**Special features:**
- Data Types as ADTs
- Combination of Sum Types and Product Types
- Dependent Types extend ADTs

**Further reading:**
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

**Special features:**
- Algebraic Data Types with `type` and named constructors
- Constructors can have named fields
- Pattern Matching with `match`
- Product Types (Structs) with `struct` keyword also possible

**Further reading:**
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

**Special features:**
- Inductive types as ADTs with `inductive` and constructors
- Combination of Sum Types and Product Types
- Pattern Matching directly in function definition

**Further reading:**
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

**Special features:**
- Discriminated Unions as ADTs with `---->` and `;`
- Combination of Sum Types (`;`) and Product Types (constructor arguments)
- Pattern Matching directly in function clauses

**Further reading:**
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

**Special features:**
- Variants as ADTs
- Combination of Sum Types and Product Types
- Pattern Matching with `match` or `function`

**Further reading:**
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

**Special features:**
- Data Types as ADTs
- Combination of Sum Types and Product Types
- Pattern Matching with case expressions

**Further reading:**
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

**Special features:**
- Enums with Associated Values as ADTs
- Combination of Sum Types and Product Types
- Pattern Matching with `match`

**Further reading:**
- [The Rust Book - Enums](https://doc.rust-lang.org/book/ch06-01-defining-an-enum.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Algebraic Data Types: Sealed Traits/Classes (since Scala 3)
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

**Special features:**
- Enums (since Scala 3) as ADTs
- Combination of Sum Types and Product Types
- Pattern Matching with `match`

**Further reading:**
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

**Special features:**
- Enums with Associated Values as ADTs
- Combination of Sum Types and Product Types
- Pattern Matching with `switch`

**Further reading:**
- [Swift Documentation - Enumerations](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/enumerations/)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Algebraic Data Type: Sum Type + Product Type
type Expr
    = Lit Int
    | Add Expr Expr
    | Mul Expr Expr
    | Neg Expr

-- Evaluation
eval : Expr -> Int
eval expr =
    case expr of
        Lit n -> n
        Add a b -> eval a + eval b
        Mul a b -> eval a * eval b
        Neg a -> -(eval a)

-- Example
result = eval (Add (Lit 1) (Mul (Lit 2) (Lit 3)))
```

**Special features:**
- Custom Types are complete ADTs (Sum Types + Product Types)
- Pattern Matching for deconstruction
- Recursive type definitions possible
- Compiler enforces complete handling of all variants

**Further reading:**
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

**Special features:**
- Custom Types are Algebraic Data Types (Sum Types + Product Types)
- Pattern Matching for deconstruction
- Compiler enforces complete coverage of all variants

**Further reading:**
- [Gleam Documentation - Custom Types](https://tour.gleam.run/data-types/custom-types/)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Algebraic Data Types: Enums with parameters
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

**Special features:**
- Enums with constructor parameters are full-fledged algebraic data types
- Pattern Matching with `switch` for destructuring
- Exhaustiveness checking by the compiler

**Further reading:**
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

**Special features:**
- Object Variants as ADTs via `case` discriminant
- Exhaustive Pattern Matching with `case`
- Compile-time safety for field access

**Further reading:**
- [Nim Documentation - Object Variants](https://nim-lang.org/docs/manual.html#types-object-variants)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Algebraic Data Types as Tag Unions
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

**Special features:**
- Tag Unions with different payloads
- Exhaustive Pattern Matching
- Recursive Tag Unions possible

**Further reading:**
- [Roc Documentation - Tags](https://www.roc-lang.org/tutorial#tags)

</TabItem>
</FilteredTabs>



---

### Sum Types


Types that represent a value from a selection of multiple possible types (disjoint union).


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

**Special features:**
- Discriminated Unions as Sum Types
- Disjoint union of types
- Pattern Matching with `match`

**Further reading:**
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

**Special features:**
- Data Types as Sum Types
- Disjoint union of types
- Pattern Matching with case expressions

**Further reading:**
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

**Special features:**
- Data Types as Sum Types
- Disjoint union of types
- Dependent Types extend Sum Types

**Further reading:**
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

**Special features:**
- Inductive types as Sum Types
- Disjoint union of types
- Pattern Matching with `match` or directly in function definition

**Further reading:**
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

**Special features:**
- Variants as Sum Types
- Disjoint union of types
- Pattern Matching with `match`

**Further reading:**
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

**Special features:**
- Data Types as Sum Types
- Disjoint union of types
- Pattern Matching with case expressions

**Further reading:**
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

**Special features:**
- Enums as Sum Types
- Disjoint union of types
- Pattern Matching with `match`

**Further reading:**
- [The Rust Book - Enums](https://doc.rust-lang.org/book/ch06-01-defining-an-enum.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Sum Types: Sealed Traits/Classes (since Scala 3)
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

**Special features:**
- Enums (since Scala 3) as Sum Types
- Disjoint union of types
- Pattern Matching with `match`

**Further reading:**
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

**Special features:**
- Enums as Sum Types
- Disjoint union of types
- Pattern Matching with `switch`

**Further reading:**
- [Swift Documentation - Enumerations](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/enumerations/)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Sum Type: A value can be one of several variants
type Direction
    = North
    | South
    | East
    | West

type Maybe a
    = Just a
    | Nothing

-- Usage
move : Direction -> (Int, Int) -> (Int, Int)
move dir (x, y) =
    case dir of
        North -> (x, y + 1)
        South -> (x, y - 1)
        East  -> (x + 1, y)
        West  -> (x - 1, y)
```

**Special features:**
- Custom Types are always Sum Types (one of several variants)
- Each variant can carry different data
- `Maybe` and `Result` are the most important built-in Sum Types
- Compiler enforces complete handling

**Further reading:**
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

**Special features:**
- Custom Types with multiple constructors are Sum Types
- `Result` and `Option` are predefined in the standard library
- Exhaustive Pattern Matching by the compiler

**Further reading:**
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

**Special features:**
- Object Variants as Sum Types
- Discriminant-based selection
- Exhaustive `case` checking

**Further reading:**
- [Nim Documentation - Object Variants](https://nim-lang.org/docs/manual.html#types-object-variants)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Sum Types as Tag Unions
Result a e : [Ok a, Err e]

divide : F64, F64 -> [Ok F64, Err Str]
divide = \x, y ->
    if y == 0.0 then
        Err "Division by zero"
    else
        Ok (x / y)
```

**Special features:**
- Tag Unions are the primary mechanism for Sum Types
- Can contain type variables
- Exhaustive Pattern Matching enforced

**Further reading:**
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

**Special features:**
- Definition with `type Name = A | B | C`
- Exhaustive Pattern Matching with `match`
- Type-safe access to variants
- Can combine structs, interfaces and primitive types

**Further reading:**
- [V Documentation - Sum Types](https://github.com/vlang/v/blob/master/doc/docs.md#sum-types)

</TabItem>
</FilteredTabs>



---

### Product Types


Types that combine multiple values simultaneously (cartesian product).


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

**Special features:**
- Records as Product Types
- Cartesian product of types
- Named fields with `=>` syntax

**Further reading:**
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

**Special features:**
- Structs as Product Types
- Cartesian product of types
- Named fields with `.` syntax

**Further reading:**
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

**Special features:**
- Structs are Product Types (cartesian product of field types)
- Experimental language, syntax may still change
- Designated Initializers with `.field = value` syntax

**Further reading:**
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

**Special features:**
- Structs/Classes as Product Types
- Cartesian product of types
- Supports constructors

**Further reading:**
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

**Special features:**
- Structs as Product Types
- Cartesian product of types
- Supports Properties

**Further reading:**
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

**Special features:**
- Structs/Classes as Product Types
- Cartesian product of types
- Supports Properties

**Further reading:**
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

**Special features:**
- Structs as Product Types
- Cartesian product of types
- Supports constructors

**Further reading:**
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

**Special features:**
- Classes as Product Types
- Cartesian product of types
- Supports Named Constructors

**Further reading:**
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

**Special features:**
- Records as Product Types
- Cartesian product of types
- Supports Pattern Matching

**Further reading:**
- [F# Documentation - Records](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/records)

</TabItem>
<TabItem value="go" label="Go">

```go
// Product Types: Structs (since Go 1.0)
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

**Special features:**
- Structs as Product Types
- Cartesian product of types
- Supports tags for serialization

**Further reading:**
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

**Special features:**
- Classes as Product Types
- Cartesian product of types
- Supports Named Parameters

**Further reading:**
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

**Special features:**
- Records as Product Types
- Cartesian product of types
- Supports Record Syntax

**Further reading:**
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

**Special features:**
- Classes/Structs as Product Types
- Cartesian product of types
- Supports Properties

**Further reading:**
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

**Special features:**
- Records as Product Types
- Cartesian product of types
- Dependent Types extend Product Types

**Further reading:**
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

**Special features:**
- Classes as Product Types
- Cartesian product of types
- Supports constructors

**Further reading:**
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

**Special features:**
- Structs as Product Types
- Cartesian product of types
- Supports Type Parameters

**Further reading:**
- [Julia Documentation - Structs](https://docs.julialang.org/en/v1/manual/types/#Composite-Types)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Product Types: Data Classes (since Kotlin 1.0)
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

**Special features:**
- Data Classes as Product Types
- Cartesian product of types
- Automatic `equals`, `hashCode`, `toString`

**Further reading:**
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

**Special features:**
- `structure` defines Product Types with named fields
- Record syntax with `{ field := value }` for construction
- Automatic accessor functions (e.g., `p.x`)

**Further reading:**
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

**Special features:**
- Objects as Product Types
- Cartesian product of types
- Supports inheritance

**Further reading:**
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

**Special features:**
- Records as Product Types
- Cartesian product of types
- Named fields with `.` syntax

**Further reading:**
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

**Special features:**
- Structs as Product Types
- Cartesian product of types
- Named fields with `.` syntax

**Further reading:**
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

**Special features:**
- Records as Product Types
- Cartesian product of types
- Supports Pattern Matching

**Further reading:**
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

**Special features:**
- Structs as Product Types
- Cartesian product of types
- Named fields with `=` syntax

**Further reading:**
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

**Special features:**
- Records as Product Types
- Cartesian product of types
- Supports Record Syntax

**Further reading:**
- [PureScript Documentation - Records](https://github.com/purescript/documentation/blob/master/language/Syntax.md#records)

</TabItem>
<TabItem value="python" label="Python">

```python
# Product Types: Dataclasses (since Python 3.7)
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

**Special features:**
- Dataclasses as Product Types (since Python 3.7)
- Cartesian product of types
- Automatic `__init__`, `__repr__`, `__eq__`

**Further reading:**
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

**Special features:**
- Structs as Product Types
- Cartesian product of types
- Supports Pattern Matching

**Further reading:**
- [The Rust Book - Structs](https://doc.rust-lang.org/book/ch05-00-structs.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Product Types: Case Classes (since Scala 1.0)
case class Point(x: Double, y: Double)
case class Person(name: String, age: Int)

val p = Point(1.0, 2.0)
val person = Person("Alice", 30)
```

**Special features:**
- Case Classes as Product Types
- Cartesian product of types
- Automatic `equals`, `hashCode`, `toString`

**Further reading:**
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

**Special features:**
- Structs as Product Types
- Cartesian product of types
- Supports Properties

**Further reading:**
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

**Special features:**
- Interfaces/Types as Product Types
- Cartesian product of types
- Type erasure at runtime (JavaScript)

**Further reading:**
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

**Special features:**
- Structures/Classes as Product Types
- Cartesian product of types
- Supports Properties

**Further reading:**
- [Microsoft VB.NET Documentation - Structures](https://learn.microsoft.com/en-us/dotnet/visual-basic/language-reference/statements/structure-statement)

</TabItem>
<TabItem value="v" label="V">

```v
// Product Types: Structs (since V 0.3)
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

**Special features:**
- Structs as Product Types (since V 0.3)
- Cartesian product of types
- Named fields with `:` syntax

**Further reading:**
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

**Special features:**
- Structs as Product Types
- Cartesian product of types
- Named fields with `.` syntax

**Further reading:**
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

-- Custom Type constructors as Product Types
type Shape
    = Circle Float            -- 1 Feld
    | Rectangle Float Float   -- 2 fields (Product)
```

**Special features:**
- Records are named Product Types with field names
- Tuples are anonymous Product Types (maximum 3 elements)
- Custom Type constructors can have multiple fields (Product)
- All Product Types are immutable

**Further reading:**
- [Elm Documentation - Records](https://guide.elm-lang.org/types/records.html)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// Product Types: Records and Tuples
pub type Point {
  Point(x: Int, y: Int)
}

// Tuple as anonymous Product Type
let pair = #(1, "hello")
```

**Special features:**
- Custom Types with named fields are Product Types (Records)
- Tuples are anonymous Product Types
- Access to Record fields via dot notation

**Further reading:**
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

**Special features:**
- Records as named Product Types
- Tuples as anonymous Product Types
- All Product Types are immutable

**Further reading:**
- [Roc Documentation - Records](https://www.roc-lang.org/tutorial#records)

</TabItem>
</FilteredTabs>


## 3.8.5. GADTs (Generalized Algebraic Data Types)

GADTs extend ordinary algebraic data types by allowing constructors to produce different type specializations of the return type. This allows the compiler to refine the concrete type in pattern matching expressions and enforce stronger type guarantees at compile time.

### Languages {#sprachen}

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

**Special features:**
- Requires the `GADTs` language extension (`{-# LANGUAGE GADTs #-}`)
- Constructors can produce different return types
- Pattern Matching automatically refines the type (Type Refinement)

**Further reading:**
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

**Special features:**
- GADTs are a natural special case of Dependent Types
- No special extension needed — the standard data type declaration supports GADTs
- Pattern matching automatically refines the type

**Further reading:**
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

**Special features:**
- GADTs are a natural special case of Dependent Types (indexed inductive families)
- No special extension needed — the standard `inductive` declaration supports GADTs
- Pattern matching automatically refines the type (Type Refinement)

**Further reading:**
- [Lean 4 Documentation - Inductive Families](https://lean-lang.org/lean4/doc/declarations.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* GADTs: Generalized Algebraic Data Types (since OCaml 4.00) *)
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

**Special features:**
- Native GADT support since OCaml 4.00
- Constructors use the `:` syntax instead of `of`
- Requires locally abstract types (`type a.`) in recursive functions

**Further reading:**
- [OCaml Manual - GADTs](https://v2.ocaml.org/manual/gadts-tutorial.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// GADTs: Generalized Algebraic Data Types (since Scala 3)
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

**Special features:**
- GADTs via Enums with explicit `extends` clauses (since Scala 3)
- Pattern matching automatically refines the type
- Possible in Scala 2 via Sealed Traits with type parameters, but less ergonomic

**Further reading:**
- [Scala 3 Documentation - ADTs and GADTs](https://docs.scala-lang.org/scala3/book/types-adts-gadts.html)

</TabItem>
</FilteredTabs>

## 3.8.6. Type Classes

Abstract interfaces that define a set of operations that types must implement.

### Languages {#sprachen}

<FilteredTabs availableTabs={['haskell', 'idris', 'lean4', 'mercury', 'purescript', 'roc', 'rust', 'scala']}>
<TabItem value="haskell" label="Haskell">

```haskell
-- Type Classes: Type Classes
class Eq a where
    (==) :: a -> a -> Bool
    (/=) :: a -> a -> Bool

class Show a where
    show :: a -> String

-- Instances
instance Eq Int where
    (==) = (Prelude.==)
    (/=) = (Prelude./=)

instance Show Int where
    show = Prelude.show

-- Usage
compareValues :: (Eq a, Show a) => a -> a -> String
compareValues x y = if x == y
    then show x ++ " equals " ++ show y
    else show x ++ " does not equal " ++ show y
```

**Special features:**
- Type Classes as abstract interfaces
- Instances implement Type Classes
- Multiple constraints possible

**Further reading:**
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

-- Custom instance for custom type
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

-- Usage with constraints
compareValues : (Eq a, Show a) => a -> a -> String
compareValues x y = if x == y
    then show x ++ " equals " ++ show y
    else show x ++ " does not equal " ++ show y
```

**Special features:**
- Interfaces as Type Classes
- Instances implement Interfaces
- Dependent Types extend Type Classes

**Further reading:**
- [Idris 2 Documentation - Interfaces](https://idris2.readthedocs.io/en/latest/tutorial/interfaces.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Type Classes: Classes and instances
class MyEq (α : Type) where
  eq : α → α → Bool

class MyShow (α : Type) where
  show : α → String

-- Instances for custom types
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

-- Usage with constraints
def compareValues [MyEq α] [MyShow α] (x y : α) : String :=
  if MyEq.eq x y
  then MyShow.show x ++ " equals " ++ MyShow.show y
  else MyShow.show x ++ " does not equal " ++ MyShow.show y
```

**Special features:**
- `class` and `instance` as native Type-Class syntax
- Square brackets `[...]` for instance arguments (automatic resolution)
- Multiple constraints possible via multiple `[...]` parameters

**Further reading:**
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

% Instances for custom type
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

% Usage with constraints
:- func compare_values(T, T) = string <= (my_eq(T), my_show(T)).
compare_values(X, Y) =
    ( if eq(X, Y) then
        show(X) ++ " equals " ++ show(Y)
    else
        show(X) ++ " does not equal " ++ show(Y)
    ).
```

**Special features:**
- Type Classes with `typeclass` and `instance` declarations
- Methods are specified via `pred` and `func` with determinism declarations
- Constraints with `<=` syntax on function signatures
- Instance methods are implemented via named predicates/functions

**Further reading:**
- [Mercury Language Reference - Type Classes](https://www.mercurylang.org/information/doc-release/mercury_ref/Type-classes.html)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Type Classes: Type Classes
class Eq a where
    eq :: a -> a -> Boolean

class Show a where
    show :: a -> String

-- Instances for custom types
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

-- Usage
compareValues :: forall a. Eq a => Show a => a -> a -> String
compareValues x y = if eq x y
    then show x <> " equals " <> show y
    else show x <> " does not equal " <> show y
```

**Special features:**
- Type Classes as abstract interfaces
- Instances implement Type Classes
- Multiple constraints possible

**Further reading:**
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

// Implementations
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

// Usage
fn compare_values<T: Eq + Display>(x: T, y: T) -> String {
    if x.eq(&y) {
        format!("{} equals {}", x.fmt(), y.fmt())
    } else {
        format!("{} does not equal {}", x.fmt(), y.fmt())
    }
}
```

**Special features:**
- Traits as Type Classes
- Implementations satisfy Traits
- Multiple trait bounds possible

**Further reading:**
- [The Rust Book - Traits](https://doc.rust-lang.org/book/ch10-02-traits.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Type Classes: Type Classes (since Scala 2.5)
trait Eq[A] {
    def eq(a: A, b: A): Boolean
}

trait Show[A] {
    def show(a: A): String
}

// Instances
implicit object IntEq extends Eq[Int] {
    def eq(a: Int, b: Int): Boolean = a == b
}

implicit object IntShow extends Show[Int] {
    def show(a: Int): String = a.toString
}

// Usage
def compareValues[A](x: A, y: A)(implicit eq: Eq[A], show: Show[A]): String = {
    if (eq.eq(x, y)) {
        show.show(x) + " equals " + show.show(y)
    } else {
        show.show(x) + " does not equal " + show.show(y)
    }
}
```

**Special features:**
- Type Classes with Traits and Implicits
- Implicit parameters for Type Classes
- Multiple constraints possible

**Further reading:**
- [Scala Documentation - Type Classes](https://docs.scala-lang.org/tour/implicit-parameters.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Abilities (similar to Type Classes)
-- Built-in Abilities: Eq, Hash, Inspect
-- Custom Abilities can be defined

isEqual : a, a -> Bool where a implements Eq
isEqual = \x, y -> x == y
```

**Special features:**
- Abilities are Roc's concept for Type Classes / Traits
- Built-in Abilities: `Eq`, `Hash`, `Inspect`, `Encoding`, `Decoding`
- Custom Abilities can be defined

**Further reading:**
- [Roc Documentation - Abilities](https://www.roc-lang.org/tutorial#abilities)

</TabItem>
</FilteredTabs>


## 3.8.7. Dependent Types

Types that depend on values enable more precise type descriptions and provable correctness.

### Languages {#sprachen}

<FilteredTabs availableTabs={['idris', 'lean4']}>
<TabItem value="idris" label="Idris">

```idris
-- Dependent Types: Dependent Types
data Vect : Nat -> Type -> Type where
    Nil : Vect 0 a
    (::) : a -> Vect n a -> Vect (S n) a

-- Vector with known length at compile time
vec3 : Vect 3 Int
vec3 = [1, 2, 3]

-- Function with dependent type
append : Vect n a -> Vect m a -> Vect (n + m) a
append [] ys = ys
append (x :: xs) ys = x :: append xs ys

-- Usage
vec1 : Vect 2 Int
vec1 = [1, 2]

vec2 : Vect 2 Int
vec2 = [3, 4]

combined : Vect 4 Int
combined = append vec1 vec2
```

**Special features:**
- Dependent Types are fundamental in Idris
- Types can depend on values
- Compile-time proofs possible

**Further reading:**
- [Idris Documentation - Dependent Types](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html#dependent-types)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Dependent Types: Vector with length-indexed type
inductive Vect : Nat → Type → Type where
  | nil  : Vect 0 α
  | cons : α → Vect n α → Vect (n + 1) α

-- Vector with known length at compile time
def vec3 : Vect 3 Int := .cons 1 (.cons 2 (.cons 3 .nil))

-- Function with dependent type
def append : Vect n α → Vect m α → Vect (n + m) α
  | .nil, ys => ys
  | .cons x xs, ys => .cons x (append xs ys)

-- Usage
def vec1 : Vect 2 Int := .cons 1 (.cons 2 .nil)
def vec2 : Vect 2 Int := .cons 3 (.cons 4 .nil)
def combined : Vect 4 Int := append vec1 vec2
```

**Special features:**
- Dependent Types are fundamental in Lean 4 — Lean 4 is a full-featured proof assistant
- Types can depend on values (e.g., vector length in the type)
- Compile-time proofs and tactical metaprogramming (`by omega`, `by simp`)
- Universe polymorphism: `Type`, `Type 1`, `Type 2`, ...

**Further reading:**
- [Lean 4 Documentation - Dependent Types](https://lean-lang.org/lean4/doc/dep_types.html)

</TabItem>
</FilteredTabs>


## 3.8.8. Symbol Type

Unique, immutable values used as identifiers.

### Languages {#sprachen}

<FilteredTabs availableTabs={['clojure', 'common-lisp', 'elixir', 'erlang', 'javascript', 'prolog', 'racket', 'ruby', 'scheme', 'typescript']} orangeTabs={['lua', 'perl', 'python']}>
<TabItem value="clojure" label="Clojure">

```clojure
;; Symbol Type: Symbols
(def my-symbol 'my-symbol)
(def another-symbol 'another-symbol)

;; Symbols are unique
(= 'my-symbol 'my-symbol)  ; true
(= 'my-symbol 'another-symbol)  ; false

;; Usage in Maps as keys
{:my-key "value"}
{'my-symbol "value"}
```

**Special features:**
- Symbols are fundamental in Clojure
- Unique, immutable values
- Used as identifiers

**Further reading:**
- [Clojure Documentation - Symbols](https://clojure.org/reference/data_structures#Symbols)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Symbol Type: Symbols
(defvar my-symbol 'my-symbol)
(defvar another-symbol 'another-symbol)

;; Symbols are unique
(eq 'my-symbol 'my-symbol)  ; T
(eq 'my-symbol 'another-symbol)  ; NIL

;; Usage in Property Lists
(setf (get 'my-symbol 'property) 'value)
```

**Special features:**
- Symbols are fundamental in Common Lisp
- Unique, immutable values
- Used as identifiers

**Further reading:**
- [Common Lisp HyperSpec - Symbols](http://www.lispworks.com/documentation/HyperSpec/Body/t_symbol.htm)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Symbol Type: Atoms
my_atom = :my_atom
another_atom = :another_atom

# Atoms are unique
my_atom == :my_atom  # true
my_atom == another_atom  # false

# Usage in Maps
%{my_atom => "value"}
%{:my_atom => "value"}
```

**Special features:**
- Atoms as Symbols
- Unique, immutable values
- Used as identifiers

**Further reading:**
- [Elixir Documentation - Atoms](https://elixir-lang.org/getting-started/basic-types.html#atoms)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% Symbol Type: Atoms
MyAtom = my_atom,
AnotherAtom = another_atom.

% Atoms are unique
MyAtom =:= my_atom.  % true
MyAtom =:= AnotherAtom.  % false

% Usage in Maps
#{my_atom => "value"}.
```

**Special features:**
- Atoms as Symbols
- Unique, immutable values
- Used as identifiers

**Further reading:**
- [Erlang Documentation - Atoms](https://www.erlang.org/doc/reference_manual/data_types.html#atom)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Symbol Type: Symbols (since ES6)
const mySymbol = Symbol('mySymbol');
const anotherSymbol = Symbol('anotherSymbol');

// Symbols are unique
mySymbol === Symbol('mySymbol');  // false
const sameSymbol = Symbol.for('mySymbol');
Symbol.for('mySymbol') === sameSymbol;  // true

// Usage as Object keys
const obj = {
    [mySymbol]: 'value'
};
```

**Special features:**
- Symbols since ES6
- Unique values (except `Symbol.for`)
- Used as Object keys

**Further reading:**
- [MDN Web Docs - Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Symbol Type: not directly supported
-- Workaround: Strings as identifiers
local my_symbol = "my_symbol"
local another_symbol = "another_symbol"

-- Usage in Tables
local t = {}
t[my_symbol] = "value"
t["my_symbol"] = "value"
```

**Special features:**
- No direct Symbols
- Strings as workaround
- Tables use Strings as keys

**Further reading:**
- [Lua Documentation - Types](https://www.lua.org/manual/5.4/manual.html#2.1)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Symbol Type: not directly supported
# Workaround: Strings as identifiers
my $my_symbol = 'my_symbol';
my $another_symbol = 'another_symbol';

# Usage in Hashes
my %hash = (
    $my_symbol => 'value',
    'my_symbol' => 'value'
);
```

**Special features:**
- No direct Symbols
- Strings as workaround
- Hashes use Strings as keys

**Further reading:**
- [Perl Documentation - Data Types](https://perldoc.perl.org/perldata)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Symbol Type: Atoms as Symbols
my_atom = hello,
another_atom = world,

% Atoms are unique and immutable
hello == hello,           % true
hello == world,           % false

% Atoms as keys in associative lists
Pairs = [name-hello, status-active],
member(name-hello, Pairs), % true

% Atoms as enumeration values
Color = red,
(Color == red -> write('Red') ; write('Other Color'))
```

**Special features:**
- Atoms are the native Symbols in Prolog
- Unique, immutable values (interned)
- Comparison via `==/2` (structural equality) or unification `=/2`
- Atoms are frequently used as identifiers, tags, and enumeration values

**Further reading:**
- [SWI-Prolog Documentation - Atoms](https://www.swi-prolog.org/pldoc/man?section=atoms)

</TabItem>
<TabItem value="python" label="Python">

```python
# Symbol Type: not directly supported
# Workaround: Strings or Enum as identifiers
from enum import Enum

class Symbol(Enum):
    MY_SYMBOL = "my_symbol"
    ANOTHER_SYMBOL = "another_symbol"

# Or with Strings
my_symbol = "my_symbol"
another_symbol = "another_symbol"

# Usage in Dictionaries
d = {my_symbol: "value", "my_symbol": "value"}
```

**Special features:**
- No direct Symbols
- Strings or Enum as workaround
- Dictionaries use hashable values as keys

**Further reading:**
- [Python Documentation - Enum](https://docs.python.org/3/library/enum.html)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
; Symbol Type: Symbols
(define my-symbol 'my-symbol)
(define another-symbol 'another-symbol)

;; Symbols are unique
(eq? 'my-symbol 'my-symbol)      ; #t
(eq? 'my-symbol 'another-symbol) ; #f

;; Usage in Hash Tables
(define h (make-hash))
(hash-set! h 'my-symbol "value")
```

**Special features:**
- Symbols are fundamental in Racket
- Unique, immutable values
- Used as identifiers

**Further reading:**
- [Racket Documentation - Symbols](https://docs.racket-lang.org/reference/symbols.html)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Symbol Type: Symbols
my_symbol = :my_symbol
another_symbol = :another_symbol

# Symbols are unique
my_symbol == :my_symbol  # true
my_symbol == another_symbol  # false

# Usage in Hashes
hash = {my_symbol => "value", :my_symbol => "value"}
```

**Special features:**
- Symbols are fundamental in Ruby
- Unique, immutable values
- Used as identifiers

**Further reading:**
- [Ruby Documentation - Symbols](https://ruby-doc.org/core-3.1.2/Symbol.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; Symbol Type: Symbols
(define my-symbol 'my-symbol)
(define another-symbol 'another-symbol)

;; Symbols are unique
(eq? 'my-symbol 'my-symbol)  ; #t
(eq? 'my-symbol 'another-symbol)  ; #f

;; Usage in Association Lists
(define alist '((my-symbol . "value")))
```

**Special features:**
- Symbols are fundamental in Scheme
- Unique, immutable values
- Used as identifiers

**Further reading:**
- [Scheme Documentation - Symbols](https://www.scheme.com/tspl4/objects.html#./objects:s2)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Symbol Type: Symbols (since TypeScript 1.0, ES6)
const mySymbol = Symbol('mySymbol');
const anotherSymbol = Symbol('anotherSymbol');

// Symbols are unique
mySymbol === Symbol('mySymbol');  // false
const sameSymbol = Symbol.for('mySymbol');
Symbol.for('mySymbol') === sameSymbol;  // true

// Usage as Object keys
const obj: { [key: symbol]: string } = {
    [mySymbol]: 'value'
};
```

**Special features:**
- Symbols since TypeScript 1.0 (ES6)
- Unique values (except `Symbol.for`)
- Type erasure at runtime (JavaScript)

**Further reading:**
- [TypeScript Handbook - Symbols](https://www.typescriptlang.org/docs/handbook/symbols.html)

</TabItem>
</FilteredTabs>

## 3.8.9. Opaque Types

Opaque Types hide the internal representation of a type from consumers of a module. Only the defining module can create and inspect values of the type, while external users can only access it through a public interface.

### Languages {#sprachen}

<FilteredTabs availableTabs={['ada', 'elm', 'fsharp', 'gleam', 'haskell', 'koka', 'lean4', 'mercury', 'ocaml', 'purescript', 'roc', 'rust', 'scala']} yellowTabs={['c', 'go']}>
<TabItem value="ada" label="Ada">

```ada
-- Opaque Types: Private Types
-- Specification: Internal representation is hidden
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

**Special features:**
- `private` Types hide the implementation in the `private` part of the package specification
- Only the package itself can access the internal structure
- External users see only the public interface

**Further reading:**
- [Ada Documentation - Private Types](https://learn.adacore.com/courses/intro-to-ada/chapters/privacy.html)

</TabItem>
<TabItem value="c" label="C">

```c
// Opaque Types: Opaque Pointers
// Header (user_id.h): Only forward declaration
typedef struct UserId UserId;
UserId* user_id_create(int value);
int user_id_value(const UserId* id);

// Implementation (user_id.c): Complete definition
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

**Special features:**
- Opaque Pointers via forward declaration of structs (Incomplete Types)
- Header contains only the declaration, implementation is hidden in the `.c` file
- Requires heap allocation, as the struct size is not known externally

**Further reading:**
- [C Documentation - Incomplete Types](https://en.cppreference.com/w/c/language/type#Incomplete_types)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Opaque Types: Module-based
-- Constructor is NOT exported
module UserId exposing (UserId, create, toInt)

type UserId = UserId Int

create : Int -> UserId
create value = UserId value

toInt : UserId -> Int
toInt (UserId value) = value
```

**Special features:**
- Opaque Types via selective exporting (constructor is not exported)
- External modules cannot access the constructor or perform pattern matching
- Widely used Elm pattern for type-safe abstractions

**Further reading:**
- [Elm Guide - Modules](https://guide.elm-lang.org/webapps/modules)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Opaque Types: Signature files
// Signature (UserId.fsi): type UserId (without implementation)

// Implementation (UserId.fs)
module UserId

type UserId = private { Value: int }

let create value = { Value = value }
let value id = id.Value
```

**Special features:**
- Opaque Types via signature files (`.fsi`) or `private` modifier on record fields
- Signature file declares the type without implementation details
- `private` prevents external construction and pattern matching

**Further reading:**
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

**Special features:**
- Dedicated `opaque` keyword for type definitions
- Constructors and fields are not accessible outside the module
- Simplest syntax among all languages for Opaque Types

**Further reading:**
- [Gleam Documentation - Opaque Types](https://gleam.run/book/tour/opaque-types)

</TabItem>
<TabItem value="go" label="Go">

```go
// Opaque Types: Unexported fields
package userid

type UserId struct {
    value int // lowercase = not exported
}

func Create(value int) UserId {
    return UserId{value: value}
}

func (id UserId) Value() int {
    return id.value
}
```

**Special features:**
- Visibility is controlled via capitalization (lowercase = private)
- Unexported fields are not accessible outside the package
- No dedicated Opaque-Type feature, but idiomatic in Go

**Further reading:**
- [Go Documentation - Exported Identifiers](https://go.dev/ref/spec#Exported_identifiers)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Opaque Types: Smart Constructors
module UserId (UserId, create, toInt) where
-- Constructor MkUserId is NOT exported

newtype UserId = MkUserId Int

create :: Int -> UserId
create = MkUserId

toInt :: UserId -> Int
toInt (MkUserId n) = n
```

**Special features:**
- Opaque Types via selective exporting in the module header
- `newtype` creates a new type without runtime costs
- Smart Constructors enable validation at creation

**Further reading:**
- [Haskell Wiki - Smart Constructors](https://wiki.haskell.org/Smart_constructors)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Opaque Types: Abstract types via Module
// Module declares the type as abstract
abstract type user-id
  UserId(value : int)

fun create(value : int) : user-id
  UserId(value)

fun to-int(id : user-id) : int
  id.value
```

**Special features:**
- `abstract` keyword hides constructors and fields outside the module
- External modules can only access the type via public functions
- Within the module, constructors and pattern matching are available

**Further reading:**
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

-- Outside: No direct construction or field access
-- let id := UserId.mk 42  -- Error: private constructor
-- let v := id.value        -- Error: private field
```

**Special features:**
- `private` on constructor and fields hides the internal representation
- Outside the namespace, only the public API is accessible
- `opaque def` creates definitions whose body is not reducible

**Further reading:**
- [Lean 4 Documentation - Structures](https://lean-lang.org/lean4/doc/struct.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Opaque Types: Abstract types via Module Interface
% Interface file (.int): Only type name, no implementation
:- module user_id.
:- interface.
:- type user_id.
:- func create(int) = user_id.
:- func to_int(user_id) = int.

% Implementation (.m):
:- implementation.
:- type user_id ---> user_id(int).

create(Value) = user_id(Value).
to_int(user_id(Value)) = Value.
```

**Special features:**
- Abstract types via declaration without definition in the interface (`:- type user_id.`)
- Only the implementing module knows the internal representation
- External modules cannot directly construct values or inspect via pattern matching

**Further reading:**
- [Mercury Language Reference - Module System](https://www.mercurylang.org/information/doc-release/mercury_ref/Modules.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Opaque Types: Abstract types in signatures *)
(* Signature (user_id.mli) *)
type t
val create : int -> t
val to_int : t -> int

(* Implementation (user_id.ml) *)
type t = int
let create value = value
let to_int id = id
```

**Special features:**
- Abstract types in `.mli` signature files hide the implementation
- The signature declares `type t` without definition — the type is externally fully opaque
- Implementation can be chosen arbitrarily (here directly `int`)

**Further reading:**
- [OCaml Manual - Module Signatures](https://v2.ocaml.org/manual/moduleexamples.html)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Opaque Types: Module-based
module UserId (UserId, create, toInt) where
-- Constructor is NOT exported

newtype UserId = UserId Int

create :: Int -> UserId
create = UserId

toInt :: UserId -> Int
toInt (UserId n) = n
```

**Special features:**
- Opaque Types via selective exporting in the module header
- `newtype` creates a new type without runtime costs
- Identical pattern as in Haskell

**Further reading:**
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

-- Only the defining module can use @
```

**Special features:**
- Dedicated syntax with `:=` for Opaque-Type declarations
- `@TypeName` as constructor/destructor — only usable in the defining module
- External modules can use the type, but cannot create or inspect it

**Further reading:**
- [Roc Documentation - Opaque Types](https://www.roc-lang.org/tutorial#opaque-types)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Opaque Types: pub struct with private fields
pub struct UserId(i64); // field is private

impl UserId {
    pub fn create(value: i64) -> Self {
        UserId(value)
    }

    pub fn value(&self) -> i64 {
        self.0
    }
}
```

**Special features:**
- Tuple-Struct fields are private by default (Newtype Pattern)
- External crates can use the type, but cannot directly construct or destructure it
- Very idiomatic in Rust — often called Newtype Pattern

**Further reading:**
- [Rust Documentation - Visibility](https://doc.rust-lang.org/reference/visibility-and-privacy.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Opaque Types: Opaque Type Alias (since Scala 3)
object UserIdModule:
  opaque type UserId = Int

  def create(value: Int): UserId = value

  extension (id: UserId)
    def toInt: Int = id

// Outside: UserId is not known as Int
val id = UserIdModule.create(42)
val n = id.toInt
```

**Special features:**
- `opaque type` Alias hides the implementation outside the defining scope (since Scala 3)
- Within the scope, `UserId = Int` is transparent, outside it is opaque
- No runtime overhead — resolved at compile time

**Further reading:**
- [Scala 3 Documentation - Opaque Type Aliases](https://docs.scala-lang.org/scala3/book/types-opaque-types.html)

</TabItem>
</FilteredTabs>

## 3.8.10. Row Polymorphism

Row Polymorphism allows defining functions that operate on records with certain fields without knowing the complete record type. The record can have additional fields that are not used by the function.

### Languages {#sprachen}

<FilteredTabs availableTabs={['elm', 'koka', 'ocaml', 'purescript', 'roc']} yellowTabs={['typescript']}>
<TabItem value="elm" label="Elm">

```elm
-- Row Polymorphism: Extensible Records
greet : { a | name : String } -> String
greet record = "Hello, " ++ record.name

-- Usage with arbitrary records
user = { name = "Alice", age = 30 }
company = { name = "Acme", city = "Berlin" }

greeting1 = greet user     -- "Hello, Alice"
greeting2 = greet company  -- "Hello, Acme"
```

**Special features:**
- Extensible Records with `{ a | field : Type }` syntax
- `a` is a type variable for the remaining fields of the record
- Enables functions that operate on arbitrary records with certain fields

**Further reading:**
- [Elm Guide - Records](https://guide.elm-lang.org/types/records)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Row Polymorphism: Effect rows
// Function with open effect type
fun greet(name : string) : <console|e> ()
  println("Hello, " ++ name)

// Function with extended effect type
fun greet-loud(name : string) : <console|e> ()
  greet(name.to-upper)

// Effect rows are automatically inferred
fun compute() : <div|e> int
  val x = 10
  x * 2
```

**Special features:**
- Row Polymorphism is primarily used for the effect type system
- `<effect1, effect2 | e>` describes an open effect row
- `e` is a row variable for additional effects
- Enables polymorphic functions over effects

**Further reading:**
- [Koka Language Documentation - Effect Types](https://koka-lang.github.io/koka/doc/book.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Row Polymorphism: Object types *)
let greet (obj : < name : string; .. >) =
  "Hello, " ^ obj#name

(* Usage with arbitrary objects *)
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

**Special features:**
- Row Polymorphism in object types with `< method : type; .. >` syntax
- `..` stands for arbitrary additional methods (open row)
- Also available in polymorphic variants

**Further reading:**
- [OCaml Manual - Objects](https://v2.ocaml.org/manual/objectexamples.html)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Row Polymorphism: Records with open rows
greet :: forall r. { name :: String | r } -> String
greet record = "Hello, " <> record.name

-- Usage with arbitrary records
user = { name: "Alice", age: 30 }
company = { name: "Acme", city: "Berlin" }

greeting1 = greet user     -- "Hello, Alice"
greeting2 = greet company  -- "Hello, Acme"
```

**Special features:**
- Native Row Polymorphism with `{ field :: Type | r }` syntax
- `r` is a row variable for the remaining fields
- Also used for Effect-Tracking (extensible effects)

**Further reading:**
- [PureScript Documentation - Records](https://github.com/purescript/documentation/blob/master/language/Records.md)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Row Polymorphism: Open records
greet : { name : Str }* -> Str
greet = \record -> Str.concat "Hello, " record.name

-- Usage with arbitrary records
user = { name: "Alice", age: 30 }
company = { name: "Acme", city: "Berlin" }

greeting1 = greet user     -- "Hello, Alice"
greeting2 = greet company  -- "Hello, Acme"
```

**Special features:**
- Open records with `{ field : Type }*` syntax
- `*` marks an open record that can have additional fields
- Records are structurally typed by default

**Further reading:**
- [Roc Documentation - Records](https://www.roc-lang.org/tutorial#records)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Row Polymorphism: Structural Typing
function greet(record: { name: string }): string {
    return "Hello, " + record.name;
}

// Usage with arbitrary objects
const user = { name: "Alice", age: 30 };
const company = { name: "Acme", city: "Berlin" };

greet(user);     // "Hello, Alice"
greet(company);  // "Hello, Acme"
```

**Special features:**
- Structural Typing allows objects with additional properties
- No dedicated Row-Polymorphism feature — Structural Subtyping achieves a similar result
- Excess Property Checking only applies to object literals, not variables

**Further reading:**
- [TypeScript Handbook - Object Types](https://www.typescriptlang.org/docs/handbook/2/objects.html)

</TabItem>
</FilteredTabs>

## 3.8.11. Units of Measure

Units of Measure allow annotating numeric types with physical units that are checked at compile time. Incompatible units are detected during compilation and prevent erroneous calculations.

### Languages {#sprachen}

<FilteredTabs availableTabs={['fsharp']} yellowTabs={['ada', 'nim', 'scala']} orangeTabs={['cpp', 'haskell', 'rust']}>
<TabItem value="ada" label="Ada">

```ada
-- Units of Measure: Derived types
type Meters is new Float;
type Seconds is new Float;

Distance : Meters := 100.0;
Time_Taken : Seconds := 9.58;

-- Type-safe arithmetic
Doubled : Meters := Distance + Distance;

-- Compile error: incompatible types
-- Invalid : Meters := Distance + Time_Taken;  -- Error!
```

**Special features:**
- Derived types (`new Float`) create incompatible types
- Arithmetic operators are automatically inherited
- No automatic unit algebra (e.g., `Meters / Seconds` does not create a new type)

**Further reading:**
- [Ada Documentation - Derived Types](https://learn.adacore.com/courses/intro-to-ada/chapters/strongly_typed_language.html#derived-types)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Units of Measure: With mp-units library
// Requires: mp-units library (C++ Proposal P2981)
using namespace mp_units;
using namespace mp_units::si::unit_symbols;

auto distance = 100.0 * m;
auto time = 9.58 * s;
auto speed = distance / time;  // quantity<m / s>

// Compile error: incompatible units
// auto invalid = distance + time;  // Error!
```

**Special features:**
- Requires external library (mp-units, Boost.Units)
- Template metaprogramming enables complete unit algebra
- ISO-C++ Proposal P2981 for standardization in progress

**Further reading:**
- [mp-units Documentation](https://mpusz.github.io/mp-units/)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Units of Measure: Native unit annotations
[<Measure>] type m
[<Measure>] type km
[<Measure>] type s

let distance = 100.0<m>
let time = 9.58<s>
let speed = distance / time  // float<m/s>

// Conversion
let toKm (d: float<m>) : float<km> = d / 1000.0<m/km>

// Compile error: incompatible units
// let invalid = distance + time  // Error: m ≠ s
```

**Special features:**
- Native `[<Measure>]` attribute for unit definitions
- Automatic unit algebra (e.g., `m/s` from division)
- No runtime overhead — units are resolved at compile time (Type Erasure)

**Further reading:**
- [F# Documentation - Units of Measure](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/units-of-measure)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Units of Measure: With dimensional library
-- Requires: Numeric.Units.Dimensional.Prelude

distance :: Length Double
distance = 100.0 *~ meter

time :: Time Double
time = 9.58 *~ second

speed :: Velocity Double
speed = distance /~ time

-- Compile error: incompatible units
-- invalid = distance +~ time  -- Error: Length ≠ Time
```

**Special features:**
- Requires external library (`dimensional` or `units`)
- Complete unit algebra via Phantom Types and type-level calculations
- Type-safe conversions between units

**Further reading:**
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

# Compile error: incompatible types
# let invalid = distance + time  # Error!
```

**Special features:**
- `distinct` Types create incompatible types
- `{.borrow.}` pragma borrows operators from the base type
- Operators must be explicitly defined for each Distinct Type

**Further reading:**
- [Nim Documentation - Distinct Types](https://nim-lang.org/docs/manual.html#types-distinct-type)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Units of Measure: With uom crate
// Requires: use uom::si::f64::*;
// Requires: use uom::si::length::meter;
// Requires: use uom::si::time::second;

let distance = Length::new::<meter>(100.0);
let time = Time::new::<second>(9.58);
let speed = distance / time;  // Velocity

// Compile error: incompatible units
// let invalid = distance + time;  // Error!
```

**Special features:**
- Requires external crate (`uom`)
- Complete unit algebra via Phantom Types and Traits
- SI unit system and other unit systems supported

**Further reading:**
- [uom - crates.io](https://crates.io/crates/uom)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Units of Measure: Opaque Types (since Scala 3)
object Units:
  opaque type Meters = Double
  opaque type Seconds = Double

  def meters(value: Double): Meters = value
  def seconds(value: Double): Seconds = value

  extension (a: Meters)
    def +(b: Meters): Meters = a + b

val distance = Units.meters(100.0)
val doubled = distance + distance

// Compile error: incompatible types
// val invalid = distance + Units.seconds(9.58)  // Error!
```

**Special features:**
- Opaque Types (since Scala 3) enable type-safe units without runtime costs
- Operators must be defined via Extension Methods
- No automatic unit algebra — requires manual definition of derived units

**Further reading:**
- [Scala 3 Documentation - Opaque Type Aliases](https://docs.scala-lang.org/scala3/book/types-opaque-types.html)

</TabItem>
</FilteredTabs>

## 3.8.12. Phantom Types

Phantom Types are type parameters that are not used at the value level but encode additional information at the type level. They enable compile-time safety guarantees without runtime costs.

### Languages {#sprachen}

<FilteredTabs availableTabs={['haskell', 'idris', 'lean4', 'ocaml', 'purescript', 'rust', 'scala']} yellowTabs={['cpp', 'elm', 'fsharp', 'swift']} orangeTabs={['typescript']}>
<TabItem value="cpp" label="C++">

```cpp
// Phantom Types: Template parameters without value-level usage
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
// auto invalid = add(Money<USD>{10.0}, Money<EUR>{5.0});  // Compile error!
```

**Special features:**
- Template parameters as Phantom Types — `Currency` is only used at the type level
- Compile-time checking without runtime costs
- Empty structs (`USD`, `EUR`) as type tags

**Further reading:**
- [C++ Reference - Templates](https://en.cppreference.com/w/cpp/language/templates)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Phantom Types: Type parameters without value-level usage
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

**Special features:**
- Type parameter `currency` in `Money currency` is not used at the value level
- Custom Types as type tags (`USD`, `EUR`)
- Often used in combination with Opaque Types

**Further reading:**
- [Elm Guide - Custom Types](https://guide.elm-lang.org/types/custom_types)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Phantom Types: Generic type parameters without value-level usage
type USD = class end
type EUR = class end

type Money<'Currency> = Money of float

let add (Money a : Money<'c>) (Money b : Money<'c>) : Money<'c> =
    Money (a + b)

let usd (amount: float) : Money<USD> = Money amount
let eur (amount: float) : Money<EUR> = Money amount

let total = add (usd 10.0) (usd 20.0)  // OK: Money<USD>
// let invalid = add (usd 10.0) (eur 5.0)  // Compile error!
```

**Special features:**
- Generic type parameters as Phantom Types
- Empty classes (`class end`) as type tags
- Compiler warning possible for unused type parameter

**Further reading:**
- [F# Documentation - Generics](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/generics/)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Phantom Types: Type parameters without value-level usage
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

**Special features:**
- Empty data types (`data USD`) as type tags — no constructors, only exist at type level
- `newtype` creates no runtime overhead
- Classic functional pattern for type-safe abstractions

**Further reading:**
- [Haskell Wiki - Phantom Types](https://wiki.haskell.org/Phantom_type)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Phantom Types: Type parameters without value-level usage
data USD = MkUSD  -- Constructor is never used
data EUR = MkEUR  -- Constructor is never used

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

**Special features:**
- Phantom Types are a special case of Dependent Types
- Type parameter `currency` is only used at the type level
- In Idris, Phantom Types can be extended to full Dependent Types

**Further reading:**
- [Idris 2 Documentation - Types and Functions](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Phantom Types: Type parameters without value-level usage
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

**Special features:**
- Type parameter `currency` is not used at the value level
- Empty structures as type tags — no runtime overhead
- Phantom Types are a special case of Dependent Types in Lean 4

**Further reading:**
- [Lean 4 Documentation - Structures](https://lean-lang.org/lean4/doc/struct.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Phantom Types: Type parameters without value-level usage *)
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

**Special features:**
- Empty types (`type usd`) as type tags — no constructors
- Type parameter `'currency` is not used at the value level
- Frequently combined with modules and signatures

**Further reading:**
- [OCaml Manual - Parametric Polymorphism](https://v2.ocaml.org/manual/coreexamples.html#s:tut-poly)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Phantom Types: Type parameters without value-level usage
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

**Special features:**
- Empty data types as type tags
- Identical pattern as in Haskell
- `newtype` creates no runtime overhead

**Further reading:**
- [PureScript Documentation - Types](https://github.com/purescript/documentation/blob/master/language/Types.md)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Phantom Types: PhantomData marker
// Requires: use std::marker::PhantomData;

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
// let invalid = add(usd(10.0), eur(5.0));  // Compile error!
```

**Special features:**
- `PhantomData<T>` as explicit marker for unused type parameters
- Rust requires `PhantomData`, as unused type parameters would otherwise cause a compile error
- Zero-Size Type — no runtime overhead

**Further reading:**
- [Rust Documentation - PhantomData](https://doc.rust-lang.org/std/marker/struct.PhantomData.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Phantom Types: Type parameters without value-level usage
sealed trait USD
sealed trait EUR

case class Money[Currency](amount: Double)

def add[C](a: Money[C], b: Money[C]): Money[C] =
  Money(a.amount + b.amount)

def usd(amount: Double): Money[USD] = Money(amount)
def eur(amount: Double): Money[EUR] = Money(amount)

val total = add(usd(10.0), usd(20.0))  // OK: Money[USD]
// val invalid = add(usd(10.0), eur(5.0))  // Compile error!
```

**Special features:**
- `sealed trait` without implementation as Type Tags
- Type parameter `Currency` is only used at type level
- Type Erasure at runtime (JVM) — no runtime distinction between `Money[USD]` and `Money[EUR]`

**Further reading:**
- [Scala Documentation - Type Parameters](https://docs.scala-lang.org/tour/generic-classes.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Phantom Types: Generic type parameters without value-level usage
enum USD {}
enum EUR {}

struct Money<Currency> {
    let amount: Double
}

func add<C>(_ a: Money<C>, _ b: Money<C>) -> Money<C> {
    Money(amount: a.amount + b.amount)
}

let total = add(Money<USD>(amount: 10.0), Money<USD>(amount: 20.0))  // OK
// let invalid = add(Money<USD>(amount: 10.0), Money<EUR>(amount: 5.0))  // Compile error!
```

**Special features:**
- Empty enums (`enum USD {}`) as Type Tags — cannot be instantiated
- Generic type parameters enable compile-time safety
- No special phantom type feature needed — standard generics suffice

**Further reading:**
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
// pay(eur(5.0));  // Compile error: Money<EUR> ≠ Money<USD>
```

**Special features:**
- Structural typing requires Branded Types as a workaround
- `unique symbol` prevents structural equality of phantom types
- Type assertions (`as`) needed, as the brand property does not exist at runtime

**Further reading:**
- [TypeScript Handbook - Type Assertions](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions)

</TabItem>
</FilteredTabs>

## 3.8.13. Existential Types

Existential Types abstract over a concrete type without revealing its identity. The consumer knows that a type exists but cannot inspect it — this enables type-safe encapsulation and heterogeneous collections.

### Languages {#sprachen}

<FilteredTabs availableTabs={['go', 'haskell', 'idris', 'java', 'kotlin', 'lean4', 'mercury', 'ocaml', 'rust', 'scala', 'swift']} yellowTabs={['cpp']}>
<TabItem value="cpp" label="C++">

```cpp
// Existential types via virtual base classes
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

// Heterogeneous collection — concrete type is hidden
std::vector<std::unique_ptr<Displayable>> items;
items.push_back(std::make_unique<IntVal>(42));
items.push_back(std::make_unique<StrVal>("Hallo"));

for (const auto& item : items) {
    std::cout << item->display();
}

// std::any as type-erased container (since C++17)
std::any value = 42;
int extracted = std::any_cast<int>(value);
```

**Special features:**
- Virtual base classes with polymorphism as the classical form of existential types
- `std::any` (since C++17) provides a general type-erased container
- `std::any_cast` requires knowledge of the concrete type for extraction

**Further reading:**
- [cppreference - std::any](https://en.cppreference.com/w/cpp/utility/any)

</TabItem>
<TabItem value="go" label="Go">

```go
// Interfaces as implicit existential types
type Displayable interface {
    Display() string
}

type IntVal struct{ Value int }
func (v IntVal) Display() string { return fmt.Sprintf("%d", v.Value) }

type StrVal struct{ Value string }
func (v StrVal) Display() string { return v.Value }

// Heterogeneous collection — concrete type is hidden
items := []Displayable{
    IntVal{42},
    StrVal{"Hallo"},
}

for _, item := range items {
    fmt.Println(item.Display())
}

// any (= interface{}) as general existential type
var value any = 42
```

**Special features:**
- Interfaces are structurally typed and implicit — no explicit implementation needed
- Each interface value is a pair of (concrete type, value), which exactly corresponds to an existential type
- `any` (alias for `interface{}`) is the most general existential type

**Further reading:**
- [Go Documentation - Interfaces](https://go.dev/tour/methods/9)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
{-# LANGUAGE ExistentialQuantification #-}

-- Existential type: hides the concrete type
data Displayable = forall a. Show a => MkDisplayable a

display :: Displayable -> String
display (MkDisplayable x) = show x

-- Heterogeneous list with different types
items :: [Displayable]
items = [MkDisplayable 42, MkDisplayable "Hallo", MkDisplayable True]

results :: [String]
results = map display items
-- ["42", "\"Hallo\"", "True"]
```

**Special features:**
- Requires the `ExistentialQuantification` extension (or GADT syntax)
- `forall a.` in the data constructor binds the type existentially
- The concrete type is not accessible outside of pattern matching
- Only operations of the specified type class (here `Show`) are available

**Further reading:**
- [GHC Documentation - Existential Quantification](https://ghc.gitlab.haskell.org/ghc/doc/users_guide/exts/existential_quantification.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Existential types via Dependent Pairs
data Displayable : Type where
    MkDisplayable : Show a => a -> Displayable

display : Displayable -> String
display (MkDisplayable x) = show x

-- Heterogeneous list with different types
items : List Displayable
items = [MkDisplayable 42, MkDisplayable "Hallo", MkDisplayable True]

results : List String
results = map display items
```

**Special features:**
- Dependent Pairs (`DPair`) are the general form of existential types
- The concrete type is hidden by the data constructor
- Dependent types fully subsume existential types

**Further reading:**
- [Idris 2 Documentation - Dependent Pairs](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Existential types via wildcards
List<? extends Number> numbers = List.of(42, 3.14, 100L);

// Concrete type parameter is hidden — only Number operations available
double sum = 0;
for (Number n : numbers) {
    sum += n.doubleValue();
}

// Bounded wildcard as existential type
static double sumAll(List<? extends Number> items) {
    return items.stream().mapToDouble(Number::doubleValue).sum();
}

// Unbounded wildcard: completely hidden
static void printAll(List<?> items) {
    for (Object item : items) {
        System.out.println(item);
    }
}
```

**Special features:**
- `?` (Wildcard) in generics is the primary form of existential types
- `? extends T` (Upper Bounded) only allows read operations
- `? super T` (Lower Bounded) allows write operations
- Wildcards enable variance without explicit variance annotations

**Further reading:**
- [Oracle Java Documentation - Wildcards](https://docs.oracle.com/javase/tutorial/java/generics/wildcards.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Existential types via star projections
val items: List<*> = listOf(42, "Hallo", true)

// Concrete type parameter is hidden — elements are Any?
for (item in items) {
    println(item)
}

// Bounded star projection
fun sumAll(items: List<out Number>): Double {
    return items.sumOf { it.toDouble() }
}

// Use-site variance as existential type
fun printAll(items: List<out Any?>) {
    for (item in items) {
        println(item)
    }
}
```

**Special features:**
- Star projection (`*`) corresponds to Java's unbounded wildcard (`?`)
- `out T` corresponds to `? extends T` (covariance, existential type)
- `in T` corresponds to `? super T` (contravariance)
- Type parameters are not accessible outside the projection

**Further reading:**
- [Kotlin Documentation - Star Projections](https://kotlinlang.org/docs/generics.html#star-projections)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Existential types via structures with implicit fields
structure Displayable where
  {α : Type}
  [inst : ToString α]
  val : α

def mkDisplayable [ToString α] (x : α) : Displayable :=
  { val := x }

def display (d : Displayable) : String :=
  @ToString.toString d.α d.inst d.val

-- Heterogeneous list with different types
def items : List Displayable :=
  [mkDisplayable (42 : Int), mkDisplayable "Hallo", mkDisplayable true]

def results : List String := items.map display
-- ["42", "Hallo", "true"]
```

**Special features:**
- Structures with implicit fields (`{α : Type}`) hide the concrete type
- Instance fields (`[inst : ToString α]`) couple type class constraints existentially
- Dependent types fully subsume existential types (`Sigma` types, `∃` quantifier)

**Further reading:**
- [Lean 4 Documentation - Structures](https://lean-lang.org/lean4/doc/struct.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Existential types: Existentially Quantified Constructors
:- typeclass showable(T) where [
    func show(T) = string
].

:- type displayable
    --->    some [T] (showable(T) => displayable(T)).

:- func display(displayable) = string.
display(displayable(X)) = show(X).

% Heterogeneous list with different types
:- func items = list(displayable).
items = [displayable(42), displayable("Hallo"), displayable(yes)].

:- func results = list(string).
results = list.map(display, items).
```

**Special features:**
- `some [T]` in the constructor binds the type existentially
- Typeclass constraints with `=>` couple operations to the hidden type
- The concrete type is not accessible outside of pattern matching
- Native part of the type system (no extension needed)

**Further reading:**
- [Mercury Language Reference - Existential Types](https://www.mercurylang.org/information/doc-release/mercury_ref/Existential-types.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Existential types via first-class modules *)
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

(* Heterogeneous list — concrete type is hidden *)
let items = [
  make_displayable string_of_int 42;
  make_displayable Fun.id "Hallo";
  make_displayable string_of_bool true
]

let results = List.map display items
(* ["42"; "Hallo"; "true"] *)
```

**Special features:**
- First-class modules enable existential types via abstract types in module signatures
- The concrete type `t` is not accessible outside the module
- Locally abstract types (`type a`) enable the construction of existential values

**Further reading:**
- [OCaml Documentation - First-Class Modules](https://ocaml.org/manual/5.2/firstclassmodules.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Required: use std::fmt::Display;

// Existential types via trait objects (dyn)
let items: Vec<Box<dyn Display>> = vec![
    Box::new(42),
    Box::new("Hallo"),
    Box::new(true),
];

for item in &items {
    println!("{}", item);  // Concrete type is hidden
}

// impl Trait as existential return type (since Rust 1.26)
fn make_greeting() -> impl Display {
    "Hallo Welt"
}
```

**Special features:**
- `dyn Trait` (trait objects) are the primary form of existential types
- Trait objects require dynamic dispatch (vtable)
- `impl Trait` in return position is an opaque existential type (since Rust 1.26)
- `Box<dyn Trait>` enables heterogeneous collections on the heap

**Further reading:**
- [Rust Documentation - Trait Objects](https://doc.rust-lang.org/book/ch17-02-trait-objects.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Existential types (Scala 3: wildcards)
val items: List[?] = List(42, "Hallo", true)

for (item <- items) {
    println(item)  // item is Any
}

// Wildcard with upper bound
def sumAll(items: List[? <: Number]): Double =
    items.map(_.doubleValue()).sum

// Scala 2: forSome syntax (deprecated in Scala 3)
// val items: List[T] forSome { type T } = List(42, "Hallo")
```

**Special features:**
- Scala 3 uses `?` as wildcard (replaces `_` from Scala 2)
- `forSome` syntax from Scala 2 is removed in Scala 3
- `? <: T` corresponds to upper bounded existential types
- Match types in Scala 3 can partially replace existential types

**Further reading:**
- [Scala 3 Documentation - Type Wildcards](https://docs.scala-lang.org/scala3/reference/changed-features/wildcards.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Existential types via protocols (since Swift 5.6: any)
let items: [any CustomStringConvertible] = [42, "Hallo", true]

for item in items {
    print(item.description)  // Concrete type is hidden
}

// Function with existential parameter
func display(item: any CustomStringConvertible) {
    print(item.description)
}

// Existential type vs. opaque type (some)
func makeGreeting() -> some CustomStringConvertible {
    return "Hallo Welt"  // Concrete type remains hidden
}
```

**Special features:**
- `any Protocol` explicitly marks existential types (since Swift 5.6)
- `some Protocol` (opaque types) are the counterpart with static dispatch
- Existential types require dynamic dispatch and cannot use all protocol features
- Before Swift 5.6, protocol types were implicitly existential

**Further reading:**
- [Swift Documentation - Protocols](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/protocols/)

</TabItem>
</FilteredTabs>

## 3.8.14. Linear / Affine Types

Linear types guarantee that a value is used exactly once. Affine types allow usage at most once — the value may also be discarded. Both concepts enable safe resource management without a garbage collector.

### Languages {#sprachen}

<FilteredTabs availableTabs={['haskell', 'idris', 'rust']} yellowTabs={['mojo', 'swift']}>
<TabItem value="haskell" label="Haskell">

```haskell
{-# LANGUAGE LinearTypes #-}

-- Linear types (since GHC 9.0)
-- %1 → argument must be used exactly once

-- Linear consumption
consume :: a %1 -> ()
consume _ = ()

-- Linear swap: both parts are used exactly once
swap :: (a, b) %1 -> (b, a)
swap (x, y) = (y, x)

-- Linear file access (conceptual)
-- openFile  :: FilePath -> (Handle %1 -> Ur a) -> a
-- readFile  :: Handle %1 -> (Handle, String)
-- closeFile :: Handle %1 -> ()

-- Error: x is used twice
-- dup :: a %1 -> (a, a)
-- dup x = (x, x)  -- Compile error!
```

**Special features:**
- `%1` marks linear function arrows (argument must be used exactly once)
- `%Many` (default) allows arbitrary usage
- `Ur a` (Unrestricted) lifts the linearity restriction
- Requires the `LinearTypes` extension (since GHC 9.0)

**Further reading:**
- [GHC Documentation - Linear Types](https://ghc.gitlab.haskell.org/ghc/doc/users_guide/exts/linear_types.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Linear types via multiplicities
-- 1 → must be used exactly once
-- 0 → must not be used at runtime

-- Linear consumption
consume : (1 x : a) -> ()
consume _ = ()

-- Linear swap: both parts used exactly once
swap : (1 _ : (a, b)) -> (b, a)
swap (x, y) = (y, x)

-- Linear file access
-- openFile  : (1 _ : String) -> IORes FileHandle
-- readFile  : (1 _ : FileHandle) -> IORes (FileHandle, String)
-- closeFile : (1 _ : FileHandle) -> IORes ()

-- Error: x is used twice
-- dup : (1 x : a) -> (a, a)
-- dup x = (x, x)  -- Compile error!
```

**Special features:**
- Multiplicities (`0`, `1`, `Unrestricted`) are integrated into the type system
- Quantitative Type Theory (QTT) as theoretical foundation
- `0` marks type-level values that are erased at runtime
- Linearity is fully checked by the compiler

**Further reading:**
- [Idris 2 Documentation - Multiplicities](https://idris2.readthedocs.io/en/latest/tutorial/multiplicities.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# Ownership system with move semantics
struct FileHandle:
    var name: String

    fn __init__(inout self, name: String):
        self.name = name

    fn read(owned self) -> String:
        return "Inhalt von " + self.name

    fn __del__(owned self):
        print("Handle geschlossen: " + self.name)

var handle = FileHandle("daten.txt")
var content = handle.read()  # handle is transferred (Move)
# handle.read()  # Error: handle was already moved
```

**Special features:**
- `owned` marks parameters that take ownership (move semantics)
- `borrowed` for read-only references (default for `self`)
- `inout` for mutable references
- Destructor (`__del__`) is called automatically

**Further reading:**
- [Mojo Documentation - Ownership](https://docs.modular.com/mojo/manual/values/ownership)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Affine types: ownership system
struct FileHandle {
    name: String,
}

impl FileHandle {
    fn new(name: &str) -> Self {
        FileHandle { name: name.to_string() }
    }

    fn read(self) -> String {  // Consumes self (Move)
        format!("Inhalt von {}", self.name)
    }
}

let handle = FileHandle::new("daten.txt");
let content = handle.read();  // handle is moved
// handle.read();  // Error: value used after move

// Drop trait for automatic resource deallocation
impl Drop for FileHandle {
    fn drop(&mut self) {
        println!("Handle geschlossen: {}", self.name);
    }
}
```

**Special features:**
- The ownership system is an affine type system (values can be used at most once)
- Move semantics is the default — copying requires explicit `Clone`
- Borrowing (`&` and `&mut`) enables temporary access without ownership transfer
- The borrow checker enforces the rules at compile time

**Further reading:**
- [Rust Documentation - Ownership](https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Move-only types: ~Copyable (since Swift 5.9)
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
let content = handle.read()  // handle is consumed
// handle.read()  // Error: handle was already consumed
```

**Special features:**
- `~Copyable` marks non-copyable types (since Swift 5.9)
- `consuming` methods consume the value (move semantics)
- `borrowing` methods only borrow the value
- `deinit` is called automatically when the value is consumed

**Further reading:**
- [Swift Documentation - Noncopyable Types](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/copyable/)

</TabItem>
</FilteredTabs>

## 3.8.15. Refinement Types

Refinement types refine existing types through predicates or constraints, so that only values of a specific subset are valid. They enable more precise type information than simple base types.

### Languages {#sprachen}

<FilteredTabs availableTabs={['ada', 'idris', 'lean4', 'nim', 'object-pascal']}>
<TabItem value="ada" label="Ada">

```ada
-- Refinement types: subtypes with constraints
subtype Age is Integer range 0 .. 150;
subtype Percentage is Float range 0.0 .. 100.0;
subtype Month is Integer range 1 .. 12;

-- Custom types with constraints
type Positive_Int is new Integer range 1 .. Integer'Last;

-- Usage: constraint is checked at runtime
procedure Set_Age (Value : Age) is
begin
    null;  -- Value is guaranteed to be in range 0..150
end Set_Age;

Valid   : Age := 25;   -- Valid
-- Invalid : Age := 200;  -- Constraint_Error at runtime

-- Discriminants as refinement
type Matrix is array (Positive range <>, Positive range <>) of Float;
subtype Matrix_3x3 is Matrix (1 .. 3, 1 .. 3);
```

**Special features:**
- Subtypes define constraints on existing types with `range`
- `type ... is new` creates a new type with constraints (not assignment compatible)
- `subtype` creates a compatible subrange (assignment compatible)
- Range violations raise `Constraint_Error` at runtime

**Further reading:**
- [Ada Documentation - Subtypes](https://learn.adacore.com/courses/intro-to-ada/chapters/strongly_typed_language.html#subtypes)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Refinement types via dependent types and proofs

-- Proof that a number is positive
data IsPositive : Nat -> Type where
    ItIsPositive : IsPositive (S n)

-- Function accepts only positive numbers
positiveDouble : (n : Nat) -> IsPositive n -> Nat
positiveDouble (S n) ItIsPositive = 2 * (S n)

-- Compile-time proof: 5 is positive
result : Nat
result = positiveDouble 5 ItIsPositive  -- 10

-- Compile error: 0 is not positive
-- bad = positiveDouble 0 ItIsPositive  -- Type error!

-- More general constraint: range
data InRange : (lo : Nat) -> (hi : Nat) -> (n : Nat) -> Type where
    MkInRange : LTE lo n -> LTE n hi -> InRange lo hi n
```

**Special features:**
- Dependent types fully subsume refinement types
- Constraints are checked as proofs at compile time
- Arbitrarily complex predicates possible (not just ranges)
- No runtime checks needed — correctness is statically proven

**Further reading:**
- [Idris 2 Documentation - Theorem Proving](https://idris2.readthedocs.io/en/latest/tutorial/theorems.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Refinement types via subtype and dependent types

-- Subtype: value with proof of a property
def posDouble (n : { x : Nat // x > 0 }) : Nat :=
  2 * n.val

-- Compile-time proof: 5 > 0
#eval posDouble ⟨5, by omega⟩  -- 10

-- User-defined refinement types
def Age := { n : Nat // n ≤ 150 }
def Percentage := { n : Nat // n ≤ 100 }

def validAge : Age := ⟨25, by omega⟩
-- def invalidAge : Age := ⟨200, by omega⟩  -- Proof fails!

-- General predicates as refinements
def InRange (lo hi n : Nat) : Prop := lo ≤ n ∧ n ≤ hi
```

**Special features:**
- Dependent types fully subsume refinement types
- `Subtype` (`{ x : T // P x }`) refines a type with a proof
- Tactics like `by omega` generate proofs automatically
- Arbitrarily complex predicates possible — correctness is statically proven

**Further reading:**
- [Lean 4 Documentation - Propositions and Proofs](https://lean-lang.org/lean4/doc/propositions.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Refinement types: range types
type
  Age = range[0..150]
  Percentage = range[0..100]
  Month = range[1..12]
  PositiveInt = range[1..high(int)]

# Usage: constraint is checked at compile time and runtime
var age: Age = 25       # Valid
var pct: Percentage = 50  # Valid
# var bad: Age = 200     # Error: value outside range

# Distinct types for type-safe units
type
  Meter = distinct float
  Second = distinct float

var distance: Meter = 100.Meter
var time: Second = 9.58.Second
# var wrong: Meter = time  # Error: incompatible types
```

**Special features:**
- `range[a..b]` defines a value range as a type
- Range checks occur both at compile time (when possible) and at runtime
- `distinct` creates incompatible types from existing types
- Range types can be used in arrays and loops

**Further reading:**
- [Nim Documentation - Subrange Types](https://nim-lang.org/docs/manual.html#types-subrange-types)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Refinement types: subrange types
type
  TAge = 0..150;
  TPercentage = 0..100;
  TMonth = 1..12;

// Enum subrange
type
  TWorkday = Monday..Friday;

// Usage
var
  age: TAge;
  pct: TPercentage;
begin
  age := 25;    // Valid
  pct := 50;    // Valid
  // age := 200; // Runtime error with {$R+}: Range check error
end;

// Set types based on subranges
type
  TDaySet = set of TWorkday;
```

**Special features:**
- Subrange types define a value range with `Low..High`
- Range checks can be enabled via the compiler directive `{$R+}`
- Subrange types can serve as basis for set types and array indices
- Enum subranges enable subsets of enumeration types

**Further reading:**
- [Free Pascal Documentation - Subrange Types](https://www.freepascal.org/docs-html/ref/refsu4.html)

</TabItem>
</FilteredTabs>

## 3.8.16. Flow-Sensitive Typing

Flow-sensitive typing (also called type narrowing or smart casts) enables the compiler to automatically narrow the type of a variable based on control flow analysis. After a type check, the more specific type is available without explicit casts.

### Languages {#sprachen}

<FilteredTabs availableTabs={['dart', 'kotlin', 'typescript']} yellowTabs={['csharp', 'go', 'java', 'rust', 'scala', 'swift']}>
<TabItem value="csharp" label="C#">

```csharp
// Pattern matching with type tests (since C# 7.0)
void Process(object value) {
    if (value is string s) {
        Console.WriteLine(s.ToUpper());  // s is string
    } else if (value is int n) {
        Console.WriteLine(n + 1);        // n is int
    }
}

// Switch expression with pattern matching (since C# 8.0)
string Describe(object value) => value switch {
    string s => $"Text: {s.ToUpper()}",
    int n    => $"Zahl: {n + 1}",
    _        => "Unbekannt"
};

// Nullable reference types flow analysis (since C# 8.0)
void Greet(string? name) {
    if (name != null) {
        Console.WriteLine(name.ToUpper());  // name is non-null
    }
}
```

**Special features:**
- Pattern matching with `is` requires a new variable (`is string s`) — no implicit narrowing of the original variable
- Nullable reference types (since C# 8.0) provide true flow analysis for null checks
- Switch expressions (since C# 8.0) support exhaustive pattern checking
- `when` guards allow additional conditions in patterns

**Further reading:**
- [Microsoft C# Documentation - Pattern Matching](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/patterns)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Flow-sensitive typing: type promotion
void process(Object value) {
    if (value is String) {
        print(value.toUpperCase());  // value is automatically String
    } else if (value is int) {
        print(value + 1);            // value is automatically int
    }
}

// Null-check promotion
void greet(String? name) {
    if (name != null) {
        print(name.toUpperCase());  // name is automatically String
    }
}

// Negated check with early return
void processNotNull(String? value) {
    if (value == null) return;
    print(value.toUpperCase());  // value is automatically String
}
```

**Special features:**
- Type promotion automatically narrows the type of the original variable
- Works with `is`, null checks and logical operators
- Early return after null check narrows the type in the remaining scope
- Local variables, parameters and private fields can be promoted

**Further reading:**
- [Dart Documentation - Type Promotion](https://dart.dev/tools/non-promotion-reasons)

</TabItem>
<TabItem value="go" label="Go">

```go
// Flow-sensitive typing: type switches
func process(value interface{}) {
    switch v := value.(type) {
    case string:
        fmt.Println(strings.ToUpper(v))  // v is string
    case int:
        fmt.Println(v + 1)               // v is int
    }
}

// Type assertion with ok pattern
func greet(value interface{}) {
    if name, ok := value.(string); ok {
        fmt.Println(strings.ToUpper(name))  // name is string
    }
}
```

**Special features:**
- Type switches create a new variable with the narrowed type
- Type assertions with the `ok` pattern avoid panics on wrong type
- Without `ok` pattern, a failed assertion causes a panic
- Only available for interface types (not for concrete types)

**Further reading:**
- [Go Documentation - Type Switches](https://go.dev/tour/methods/16)

</TabItem>
<TabItem value="java" label="Java">

```java
// Pattern matching for instanceof (since Java 16)
void process(Object value) {
    if (value instanceof String s) {
        System.out.println(s.toUpperCase());  // s is String
    } else if (value instanceof Integer n) {
        System.out.println(n + 1);            // n is Integer
    }
}

// Switch pattern matching (since Java 21)
String describe(Object value) {
    return switch (value) {
        case String s  -> "Text: " + s.toUpperCase();
        case Integer n -> "Zahl: " + (n + 1);
        default        -> "Unbekannt";
    };
}

// Guarded patterns (since Java 21)
String classify(Object value) {
    return switch (value) {
        case Integer n when n > 0 -> "Positive Zahl";
        case Integer n            -> "Nicht-positive Zahl";
        default                   -> "Kein Integer";
    };
}
```

**Special features:**
- Pattern matching for `instanceof` (since Java 16) creates a new pattern variable
- Switch pattern matching (since Java 21) enables exhaustive type tests
- Guarded patterns with `when` clause (since Java 21) allow additional conditions
- Before Java 16, an explicit cast after `instanceof` was required

**Further reading:**
- [Oracle Java Documentation - Pattern Matching](https://docs.oracle.com/en/java/javase/21/language/pattern-matching.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Flow-sensitive typing: smart casts
fun process(value: Any) {
    if (value is String) {
        println(value.uppercase())  // value is automatically String
    } else if (value is Int) {
        println(value + 1)          // value is automatically Int
    }
}

// Null-check smart cast
fun greet(name: String?) {
    if (name != null) {
        println(name.uppercase())  // name is automatically String
    }
}

// when expression with smart cast
fun describe(value: Any): String = when (value) {
    is String -> "Text: ${value.uppercase()}"
    is Int    -> "Zahl: ${value + 1}"
    else      -> "Unbekannt"
}
```

**Special features:**
- Smart casts automatically narrow the type of the original variable — no new name needed
- Works with `is`, `!is`, null checks and `when` expressions
- Smart casts only work for `val` variables (or `var` that are not modified)
- Mutable properties cannot be smart-cast (thread safety)

**Further reading:**
- [Kotlin Documentation - Smart Casts](https://kotlinlang.org/docs/typecasts.html#smart-casts)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Flow-sensitive typing: pattern matching with enums
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

// if let for single patterns
fn greet(name: &Option<String>) {
    if let Some(n) = name {
        println!("{}", n.to_uppercase());  // n is &String
    }
}

// let-else for early return (since Rust 1.65)
fn process_text(value: &Value) {
    let Value::Text(s) = value else { return };
    println!("{}", s.to_uppercase());  // s is &String
}
```

**Special features:**
- Pattern matching in `match`, `if let` and `let-else` creates new bindings with the narrowed type
- `let-else` (since Rust 1.65) enables narrowing with early return
- The compiler enforces exhaustive pattern checking in `match`
- Pattern matching works with enums, structs, tuples and references

**Further reading:**
- [Rust Documentation - Pattern Matching](https://doc.rust-lang.org/book/ch06-02-match.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Flow-sensitive typing: match with type patterns
def process(value: Any): Unit = value match {
    case s: String => println(s.toUpperCase)  // s is String
    case n: Int    => println(n + 1)          // n is Int
    case _         => println("Unbekannt")
}

// Option matching
def greet(name: Option[String]): Unit = name match {
    case Some(n) => println(n.toUpperCase)
    case None    => ()
}

// Match with guards
def classify(value: Any): String = value match {
    case n: Int if n > 0 => "Positive Zahl"
    case n: Int          => "Nicht-positive Zahl"
    case _               => "Kein Int"
}
```

**Special features:**
- Type patterns in `match` create new variables with the narrowed type
- Exhaustive pattern checking is enforced for sealed types
- Guards (`if` clause) allow additional conditions
- Scala 3 provides improved match types for type-level pattern matching

**Further reading:**
- [Scala Documentation - Pattern Matching](https://docs.scala-lang.org/scala3/book/control-structures.html#match-expressions)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Flow-sensitive typing: pattern matching with type binding
func process(_ value: Any) {
    if let s = value as? String {
        print(s.uppercased())  // s is String
    } else if let n = value as? Int {
        print(n + 1)           // n is Int
    }
}

// Switch with pattern matching
func describe(_ value: Any) -> String {
    switch value {
    case let s as String: return "Text: \(s.uppercased())"
    case let n as Int:    return "Zahl: \(n + 1)"
    default:              return "Unbekannt"
    }
}

// Optional binding (since Swift 5.7: shorthand)
func greet(_ name: String?) {
    if let name {
        print(name.uppercased())  // name is String
    }
}
```

**Special features:**
- `as?` with `if let` creates a new constant with the narrowed type
- Shorthand optional binding `if let name` (since Swift 5.7) binds without renaming
- `guard let` enforces early return and narrows the type in the remaining scope
- Switch statements support type patterns with `case let ... as Type`

**Further reading:**
- [Swift Documentation - Type Casting](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/typecasting/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Flow-sensitive typing: automatic type narrowing
function process(value: string | number) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());  // value is string
    } else {
        console.log(value.toFixed(2));     // value is number
    }
}

// Discriminated union narrowing
type Shape =
    | { kind: "circle"; radius: number }
    | { kind: "rect"; width: number; height: number };

function area(shape: Shape): number {
    switch (shape.kind) {
        case "circle": return Math.PI * shape.radius ** 2;
        case "rect":   return shape.width * shape.height;
    }
}

// Truthiness narrowing
function greet(name: string | null) {
    if (name) {
        console.log(name.toUpperCase());  // name is string
    }
}

// User-defined type guards
function isString(value: unknown): value is string {
    return typeof value === "string";
}
```

**Special features:**
- TypeScript automatically narrows the type of the original variable — no new name needed
- Supports `typeof`, `instanceof`, `in`, truthiness and equality narrowing
- Discriminated unions enable exhaustive checking via a common field
- User-defined type guards (`value is Type`) allow custom narrowing logic

**Further reading:**
- [TypeScript Handbook - Narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)

</TabItem>
</FilteredTabs>

## 3.8.17. Literal Types

Literal types enable using specific values (such as `42`, `"hello"` or `true`) as standalone types. This allows more precise type descriptions and type-safe APIs where only specific values are allowed.

### Languages {#sprachen}

<FilteredTabs availableTabs={['haskell', 'idris', 'purescript', 'scala', 'typescript']} yellowTabs={['cpp', 'rust']}>
<TabItem value="cpp" label="C++">

```cpp
// Non-type template parameters as literal types
template<int N>
struct IntConstant {
    static constexpr int value = N;
};

IntConstant<42> answer;   // 42 is part of the type
IntConstant<0> zero;      // IntConstant<42> ≠ IntConstant<0>

// Various literal types as template parameters (since C++20)
template<auto Value>
struct Constant {
    static constexpr auto value = Value;
};

Constant<42> intConst;    // int literal
Constant<true> boolConst; // bool literal
Constant<'A'> charConst;  // char literal

// Array with compile-time size
template<std::size_t N>
struct FixedArray {
    int data[N];
};

FixedArray<3> arr3;  // Array with exactly 3 elements
FixedArray<5> arr5;  // FixedArray<3> ≠ FixedArray<5>
```

**Special features:**
- Non-type template parameters allow values as type parameters (since C++98)
- `auto` as template parameter enables arbitrary literal types (since C++20)
- Floating-point values as template parameters are allowed since C++20
- Each different value creates a separate type (monomorphization)

**Further reading:**
- [cppreference - Template Parameters](https://en.cppreference.com/w/cpp/language/template_parameters)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
{-# LANGUAGE DataKinds, KnownNat, KnownSymbol #-}

-- Literal types at type level (since GHC 7.4)

-- Type-level natural numbers (Nat)
data Proxy (n :: Nat) = Proxy

getValue :: KnownNat n => Proxy n -> Integer
getValue = natVal

result = getValue (Proxy :: Proxy 42)  -- 42

-- Type-level strings (Symbol)
data Label (s :: Symbol) = Label

getName :: KnownSymbol s => Label s -> String
getName = symbolVal

name = getName (Label :: Label "Hallo")  -- "Hallo"

-- Type-safe vectors with literal length
data Vector (n :: Nat) a = Vector [a]

vec3 :: Vector 3 Int
vec3 = Vector [1, 2, 3]
```

**Special features:**
- `DataKinds` promotes values to the type level (since GHC 7.4)
- `Nat` and `Symbol` are the main kinds for literal types
- `KnownNat` and `KnownSymbol` enable access to type-level values at runtime
- Bool literals (`True`, `False`) are also promoted by `DataKinds`

**Further reading:**
- [GHC Documentation - DataKinds](https://ghc.gitlab.haskell.org/ghc/doc/users_guide/exts/data_kinds.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Literal types via dependent types
-- Values are directly usable as types

-- Function that only accepts the value 42
theAnswer : (n : Nat) -> n = 42 -> String
theAnswer 42 Refl = "Die Antwort"

-- Type-safe vectors with literal length
vec3 : Vect 3 Int
vec3 = [1, 2, 3]

-- String at type level
greet : (s : String) -> s = "Hallo" -> String
greet "Hallo" Refl = "Hallo Welt"

-- General: arbitrary values as types
data Exactly : a -> Type where
    MkExactly : (x : a) -> Exactly x
```

**Special features:**
- Dependent types subsume literal types — arbitrary values can appear at type level
- `Refl` proves the equality of a value with a type-level literal
- No special extension needed — literal types are a natural part of the language
- Compile-time checking: invalid values are rejected by the type system

**Further reading:**
- [Idris 2 Documentation - Dependent Types](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Literal types: type-level strings (Symbol)
-- Required: import Type.Proxy (Proxy(..))

class HasLabel (s :: Symbol) where
    label :: Proxy s -> String

instance HasLabel "north" where
    label _ = "Norden"

instance HasLabel "south" where
    label _ = "Süden"

north :: String
north = label (Proxy :: Proxy "north")  -- "Norden"

-- Type-level integers (since PureScript 0.15)
class HasSize (n :: Int) where
    size :: Proxy n -> Int

instance HasSize 3 where
    size _ = 3
```

**Special features:**
- `Symbol` kind for type-level strings (similar to Haskell)
- `Int` kind for type-level integers (since PureScript 0.15)
- `Proxy` is used to pass type-level values to functions
- Row types use symbols as field names at type level

**Further reading:**
- [PureScript Documentation - Type-Level Programming](https://github.com/purescript/documentation/blob/master/language/Types.md)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Const generics as literal types (since Rust 1.51)
struct Array<const N: usize> {
    data: [i32; N],
}

let arr3: Array<3> = Array { data: [1, 2, 3] };
let arr5: Array<5> = Array { data: [1, 2, 3, 4, 5] };
// Array<3> and Array<5> are different types

// Const generics in functions
fn create_zeros<const N: usize>() -> [i32; N] {
    [0; N]
}

let zeros: [i32; 4] = create_zeros::<4>();

// Bool as const generic (since Rust 1.51)
struct Feature<const ENABLED: bool>;
type Enabled = Feature<true>;
type Disabled = Feature<false>;
```

**Special features:**
- Const generics allow values as type parameters (since Rust 1.51)
- Supports `usize`, `isize`, `bool`, `char` and integer types
- Each different value creates a separate type (monomorphization)
- String literals and floating-point values are not yet supported as const generics

**Further reading:**
- [Rust Documentation - Const Generics](https://doc.rust-lang.org/reference/items/generics.html#const-generics)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Literal types (since Scala 3)
val answer: 42 = 42
val greeting: "Hallo" = "Hallo"
val flag: true = true

// Literal types in union types
type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6

def roll(value: DiceRoll): Unit =
    println(s"Würfel: $value")

roll(3)     // OK
// roll(7)  // Error: 7 is not a valid literal type

// Literal types as function parameters
def greet(name: "Hallo" | "Hi"): String =
    s"$name Welt"
```

**Special features:**
- Literal types for integers, strings, booleans, characters and `null` (since Scala 3)
- Available in Scala 2.13 via the `-Yliteral-types` flag
- Combinable with union types for type-safe enumerations
- `valueOf[T]` extracts the value from a singleton literal type

**Further reading:**
- [Scala 3 Documentation - Literal Types](https://docs.scala-lang.org/scala3/reference/changed-features/numeric-literals.html)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Literal types: values as types
type Direction = "north" | "south" | "east" | "west";

function move(direction: Direction) {
    console.log(`Moving ${direction}`);
}

move("north");    // OK
// move("up");    // Error: "up" is not assignable

// Numeric literal types
type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;

// Boolean literal types
type Success = { ok: true; data: string };
type Failure = { ok: false; error: string };
type Result = Success | Failure;

// Template literal types (since TypeScript 4.1)
type EventName = `on${string}`;
type Greeting = `Hello, ${string}`;

let event: EventName = "onClick";  // OK
let greet: Greeting = "Hello, World";  // OK
```

**Special features:**
- String, number and boolean literal types as core language feature
- Template literal types (since TypeScript 4.1) allow string patterns at type level
- `as const` automatically creates literal types from values
- Discriminated unions use literal types as discriminator

**Further reading:**
- [TypeScript Handbook - Literal Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types)

</TabItem>
</FilteredTabs>

