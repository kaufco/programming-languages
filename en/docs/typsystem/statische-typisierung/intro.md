---
slug: /typsystem/statische-typisierung
title: 3.4. Static Typing
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 3.4. Static Typing

Type checking at compile time with explicit or inferred types.

## 3.4.1. Explicit Type Annotations

Explicit specification of types for variables, parameters, and return values at compile time.

### Languages {#sprachen}

<Tabs availableTabs={['ada', 'c', 'carbon', 'common-lisp', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'eiffel', 'elm', 'fortran', 'fsharp', 'gleam', 'go', 'groovy', 'haskell', 'haxe', 'idris', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'mercury', 'mojo', 'nim', 'object-pascal', 'objective-c', 'ocaml', 'odin', 'purescript', 'python', 'roc', 'ruby', 'rust', 'scala', 'swift', 'typescript', 'v', 'vbnet', 'zig']} yellowTabs={['php']}>
<TabItem value="ada" label="Ada">

```ada
-- Explicit type annotations
count : Integer := 42;
name : String := "Hello";
price : Float := 19.99;

-- Function parameters and return value
function Add(a : Integer; b : Integer) return Integer is
begin
    return a + b;
end Add;
```

**Special features:**
- Types must be explicitly specified
- Supports subtypes and derived types

**Further reading:**
- [Ada Reference Manual - Type Declarations](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-3-2-1.html)

</TabItem>
<TabItem value="c" label="C">

```c
// Explicit type annotations
int count = 42;
char* name = "Hello";
double price = 19.99;

// Function parameters and return value
int add(int a, int b) {
    return a + b;
}
```

**Special features:**
- Types must be explicitly specified
- Supports `typedef` for type aliases

**Further reading:**
- [C Standard - Type Specifiers](https://en.cppreference.com/w/c/language/declarations)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Explicit type annotations
int count = 42;
string name = "Hello";
double price = 19.99;

// Function parameters and return value
int Add(int a, int b) {
    return a + b;
}

// With var for implicit typing (since C# 3.0)
var items = new List<string>();
```

**Special features:**
- Types can be explicitly specified
- Supports `var` for type inference (since C# 3.0)
- Type annotations are optional when the type can be inferred

**Further reading:**
- [Microsoft C# Documentation - Types](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/types)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Explicit type annotations
int count = 42;
std::string name = "Hello";
double price = 19.99;

// Function parameters and return value
int add(int a, int b) {
    return a + b;
}

// With auto for implicit typing (since C++11)
auto items = std::vector<std::string>();
```

**Special features:**
- Types can be explicitly specified
- Supports `auto` for type inference (since C++11)
- Supports `decltype` for type deduction from expressions (since C++11)

**Further reading:**
- [cppreference.com - Type specifiers](https://en.cppreference.com/w/cpp/language/declarations)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Explicit type annotations
var count: i32 = 42;
var name: String = "Hello";
var price: f64 = 19.99;

// Function parameters and return value
fn Add(a: i32, b: i32) -> i32 {
    return a + b;
}
```

**Special features:**
- Experimental language, syntax may still change
- Uses `var` with explicit type annotations after colon

**Further reading:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Explicit type annotations
count : Int32 = 42
name : String = "Hello"
price : Float64 = 19.99

# Function parameters and return value
def add(a : Int32, b : Int32) : Int32
  a + b
end

# Type annotations are optional
items = ["Apple", "Banana"]
```

**Special features:**
- Type annotations are optional but recommended
- Type inference is enabled by default

**Further reading:**
- [Crystal Documentation - Type System](https://crystal-lang.org/reference/1.11/syntax_and_semantics/type_system.html)

</TabItem>
<TabItem value="d" label="D">

```d
// Explicit type annotations
int count = 42;
string name = "Hello";
double price = 19.99;

// Function parameters and return value
int add(int a, int b) {
    return a + b;
}

// With auto for implicit typing
auto items = ["Apple", "Banana"];
```

**Special features:**
- Types can be explicitly specified
- Supports `auto` for type inference

**Further reading:**
- [D Language Specification - Type](https://dlang.org/spec/type.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Explicit type annotations
int count = 42;
String name = "Hello";
double price = 19.99;

// Function parameters and return value
int add(int a, int b) {
    return a + b;
}

// Type annotations are optional
var items = ["Apple", "Banana"];
```

**Special features:**
- Type annotations are optional but recommended
- Type inference is enabled by default

**Further reading:**
- [Dart Language Specification - Types](https://dart.dev/guides/language/spec)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
-- Explicit type annotations
count: INTEGER
    do
        count := 42
    end

name: STRING
    do
        name := "Hello"
    end

-- Function parameters and return value
add (a: INTEGER; b: INTEGER): INTEGER
    do
        Result := a + b
    end
```

**Special features:**
- Types must be explicitly specified
- Uses colon syntax for type annotations

**Further reading:**
- [Eiffel Language Specification](https://www.eiffel.org/doc/eiffel)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Explicit type annotations
let count: int = 42
let name: string = "Hello"
let price: float = 19.99

// Function parameters and return value
let add (a: int) (b: int): int =
    a + b

// Type annotations are optional
let items = ["Apple"; "Banana"]
```

**Special features:**
- Type annotations are optional but recommended
- Type inference is enabled by default

**Further reading:**
- [F# Language Reference - Types](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/type-inference)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Explicit type annotations
integer :: count = 42
character(len=5) :: name = "Hello"
real :: price = 19.99

! Function parameters and return value
integer function add(a, b)
    integer, intent(in) :: a, b
    add = a + b
end function add
```

**Special features:**
- Types must be explicitly specified
- Supports `implicit none` to disable implicit typing

**Further reading:**
- [Fortran Standard - Type Declaration](https://gcc.gnu.org/onlinedocs/gfortran/Type-Declarations.html)

</TabItem>
<TabItem value="go" label="Go">

```go
// Explicit type annotations
var count int = 42
var name string = "Hello"
var price float64 = 19.99

// Function parameters and return value
func add(a int, b int) int {
    return a + b
}

// Type annotations are optional
items := []string{"Apple", "Banana"}
```

**Special features:**
- Type annotations are optional when the type can be inferred
- Supports short variable declaration with `:=`

**Further reading:**
- [Go Language Specification - Types](https://go.dev/ref/spec#Types)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Explicit type annotations
int count = 42
String name = "Hello"
double price = 19.99

// Function parameters and return value
int add(int a, int b) {
    return a + b
}

// Type annotations are optional
def items = ["Apple", "Banana"]
```

**Special features:**
- Type annotations are optional
- Supports `def` for dynamic typing

**Further reading:**
- [Groovy Documentation - Static Type Checking](https://groovy-lang.org/semantics.html#static-type-checking)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Explicit type annotations
var count: Int = 42;
var name: String = "Hello";
var price: Float = 19.99;

// Function parameters and return value
function add(a: Int, b: Int): Int {
    return a + b;
}

// Type annotations are optional
var items = ["Apple", "Banana"];
```

**Special features:**
- Type annotations are optional
- Type inference is enabled by default

**Further reading:**
- [Haxe Manual - Type System](https://haxe.org/manual/type-system.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Explicit type annotations
count : Int
count = 42

name : String
name = "Hello"

-- Function parameters and return value
add : Int -> Int -> Int
add a b = a + b
```

**Special features:**
- Types must be explicitly specified
- Uses Curry-Howard correspondence
- Types are annotated with `:`

**Further reading:**
- [Idris 2 Documentation - Types](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Explicit type annotations
int count = 42;
String name = "Hello";
double price = 19.99;

// Function parameters and return value
int add(int a, int b) {
    return a + b;
}

// With var for implicit typing (since Java 10)
var items = new ArrayList<String>();
```

**Special features:**
- Types must be explicitly specified
- Supports `var` for local variable type inference (since Java 10)

**Further reading:**
- [Java Language Specification - Types, Values, and Variables](https://docs.oracle.com/javase/specs/jls/se21/html/jls-4.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Explicit type annotations with JSDoc
/**
 * @type {number}
 */
let count = 42;

/**
 * @type {string}
 */
let name = "Hello";

/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a, b) {
    return a + b;
}
```

**Special features:**
- Supports type annotations via JSDoc comments
- Types are not checked at runtime
- TypeScript provides native type annotations

**Further reading:**
- [JSDoc Documentation - Type Tags](https://jsdoc.app/tags-type.html)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Explicit type annotations
count::Int = 42
name::String = "Hello"
price::Float64 = 19.99

# Function parameters and return value
function add(a::Int, b::Int)::Int
    return a + b
end

# Type annotations are optional
items = ["Apple", "Banana"]
```

**Special features:**
- Type annotations are optional but recommended for performance
- Type inference is enabled by default
- Uses `::` for type annotations

**Further reading:**
- [Julia Documentation - Types](https://docs.julialang.org/en/v1/manual/types/)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Explicit type annotations
val count: int = 42
val name: string = "Hello"
val price: float64 = 19.99

// Function parameters and return value
fun add(a: int, b: int): int
  a + b

// Type annotations are optional (Type Inference)
val items = ["Apple", "Banana"]
```

**Special features:**
- Type annotations use `: type` syntax after the identifier
- Type annotations are optional thanks to Hindley-Milner Type Inference
- Function parameters and return values can be explicitly annotated
- Effect annotations are also optional (e.g., `: console int`)

**Further reading:**
- [Koka Language Guide - Type Annotations](https://koka-lang.github.io/koka/doc/book.html#sec-type-annotations)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Explicit type annotations
val count: Int = 42
val name: String = "Hello"
val price: Double = 19.99

// Function parameters and return value
fun add(a: Int, b: Int): Int {
    return a + b
}

// Type annotations are optional
val items = listOf("Apple", "Banana")
```

**Special features:**
- Type annotations are optional when the type can be inferred
- Type inference is enabled by default

**Further reading:**
- [Kotlin Documentation - Basic Types](https://kotlinlang.org/docs/basic-types.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Explicit type annotations
def count : Nat := 42
def name : String := "Hello"
def price : Float := 19.99

-- Function parameters and return value
def add (a : Nat) (b : Nat) : Nat :=
  a + b

-- Type annotations are often optional (type inference)
def items := ["Apple", "Banana"]
```

**Special features:**
- Type annotations with `:` after the identifier
- Function parameters are annotated individually `(name : Type)`
- Type annotations are optional when the type can be inferred
- Supports universe annotations (`Type u`)

**Further reading:**
- [Lean 4 Documentation - Dependent Type Theory](https://lean-lang.org/theorem_proving_in_lean4/dependent_type_theory.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```mercury
% Explicit type annotations
% Mercury uses declarations for predicates and functions.

% Type declaration for a predicate
:- pred greet(string::in, io::di, io::uo) is det.
greet(Name, !IO) :-
    io.write_string("Hello, ", !IO),
    io.write_string(Name, !IO),
    io.nl(!IO).

% Type declaration for a function
:- func add(int, int) = int.
add(A, B) = A + B.

% Type declaration for data types
:- type point
    --->    point(
                x :: float,
                y :: float
            ).

:- pred main(io::di, io::uo) is det.
main(!IO) :-
    greet("World", !IO),
    Result = add(10, 20),
    io.write_int(Result, !IO), io.nl(!IO).
```

**Special features:**
- Type annotations are specified as separate declarations with `:- pred` or `:- func`.
- Each declaration contains types AND modes (e.g., `in`, `out`, `di`, `uo`).
- Determinism declarations (e.g., `is det`, `is semidet`) are part of the type signature.
- Local variables are type-inferred, but predicate/function declarations are mandatory.

**Further reading:**
- [The Mercury Language Reference Manual - Declarations](https://www.mercurylang.org/documentation/reference.html#Declarations)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# Explicit type annotations
var count: Int = 42
var name: String = "Hello"
var price: Float64 = 19.99

# Function parameters and return value
fn add(a: Int, b: Int) -> Int:
    return a + b

# Type annotations are optional
var items = List[String]()
```

**Special features:**
- Supports explicit type annotations with `:` syntax
- Type annotations are optional
- Combines Python syntax with static typing

**Further reading:**
- [Mojo Documentation - Type System](https://docs.modular.com/mojo/manual/basics/types)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Explicit type annotations
var count: int = 42
var name: string = "Hello"
var price: float = 19.99

# Function parameters and return value
proc add(a: int, b: int): int =
    return a + b

# Type annotations are optional
var items = @["Apple", "Banana"]
```

**Special features:**
- Type annotations are optional
- Type inference is enabled by default

**Further reading:**
- [Nim Manual - Types](https://nim-lang.org/docs/manual.html#types)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Explicit type annotations
int count = 42;
NSString *name = @"Hello";
double price = 19.99;

// Function parameters and return value
- (int)add:(int)a with:(int)b {
    return a + b;
}
```

**Special features:**
- Types must be explicitly specified
- Uses C types with ObjC extensions

**Further reading:**
- [Objective-C Programming Language](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Explicit type annotations
var
  count: Integer = 42;
  name: String = 'Hello';
  price: Real = 19.99;

// Function parameters and return value
function Add(a: Integer; b: Integer): Integer;
begin
  Result := a + b;
end;
```

**Special features:**
- Types must be explicitly specified
- Uses `:` for type annotations

**Further reading:**
- [Free Pascal Documentation - Types](https://www.freepascal.org/docs-html/ref/ref.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Explicit type annotations *)
let count : int = 42
let name : string = "Hello"
let price : float = 19.99

(* Function parameters and return value *)
let add (a : int) (b : int) : int =
    a + b

(* Type annotations are optional *)
let items = ["Apple"; "Banana"]
```

**Special features:**
- Type annotations are optional
- Type inference is enabled by default

**Further reading:**
- [OCaml Manual - Type System](https://v2.ocaml.org/manual/types.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Explicit type annotations
count: int = 42
name: string = "Hello"
price: f64 = 19.99

// Function parameters and return value
add :: proc(a: int, b: int) -> int {
    return a + b
}

// Type annotations are optional
items := []string{"Apple", "Banana"}
```

**Special features:**
- Type annotations are optional
- Supports `:=` for type inference

**Further reading:**
- [Odin Documentation - Types](https://odin-lang.org/docs/overview/#types)

</TabItem>
<TabItem value="php" label="PHP">

```php
// Explicit type annotations (since PHP 7.0)
$count = 42; // int
$name = "Hello"; // string
$price = 19.99; // float

// Function parameters and return value
function add(int $a, int $b): int {
    return $a + $b;
}
```

**Special features:**
- Type annotations for function parameters and return values (since PHP 7.0)
- Type annotations for variables are not directly supported, but types can be documented via PHPDoc

**Further reading:**
- [PHP Documentation - Type Declarations](https://www.php.net/manual/en/functions.arguments.php#functions.arguments.type-declaration)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Explicit type annotations
count :: Int
count = 42

name :: String
name = "Hello"

-- Function parameters and return value
add :: Int -> Int -> Int
add a b = a + b
```

**Special features:**
- Explicit type annotations are optional thanks to Type Inference, but recommended for top-level definitions
- Types are annotated with `::`
- Function signatures use `->` for parameters and return type

**Further reading:**
- [PureScript Documentation - Types](https://github.com/purescript/documentation/blob/master/language/Types.md)

</TabItem>
<TabItem value="python" label="Python">

```python
# Explicit type annotations (since Python 3.5)
count: int = 42
name: str = "Hello"
price: float = 19.99

# Function parameters and return value
def add(a: int, b: int) -> int:
    return a + b

# Type annotations are optional
items = ["Apple", "Banana"]
```

**Special features:**
- Type annotations are optional (since Python 3.5)
- Types are not checked at runtime
- Static type checking possible with tools like `mypy`

**Further reading:**
- [Python Documentation - Type Hints](https://docs.python.org/3/library/typing.html)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Explicit type annotations with RBS (Ruby Type Signature)
# count.rbs
count: Integer

# count.rb
count = 42

# name.rbs
name: String

# name.rb
name = "Hello"

# Function parameters and return value
# add.rbs
def add: (Integer a, Integer b) -> Integer

# add.rb
def add(a, b)
  a + b
end
```

**Special features:**
- Type annotations via RBS (Ruby Type Signature) in separate `.rbs` files
- Types are not checked at runtime
- Static type checking possible with tools like `steep`

**Further reading:**
- [RBS Documentation](https://github.com/ruby/rbs)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Explicit type annotations
let count: i32 = 42;
let name: &str = "Hello";
let price: f64 = 19.99;

// Function parameters and return value
fn add(a: i32, b: i32) -> i32 {
    a + b
}

// Type annotations are optional
let items = vec!["Apple", "Banana"];
```

**Special features:**
- Type annotations are optional when the type can be inferred
- Type inference is enabled by default

**Further reading:**
- [Rust Book - Types](https://doc.rust-lang.org/book/ch03-02-data-types.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Explicit type annotations
val count: Int = 42
val name: String = "Hello"
val price: Double = 19.99

// Function parameters and return value
def add(a: Int, b: Int): Int = {
    a + b
}

// Type annotations are optional
val items = List("Apple", "Banana")
```

**Special features:**
- Type annotations are optional
- Type inference is enabled by default

**Further reading:**
- [Scala Documentation - Types](https://docs.scala-lang.org/tour/unified-types.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Explicit type annotations
var count: Int = 42
var name: String = "Hello"
var price: Double = 19.99

// Function parameters and return value
func add(a: Int, b: Int) -> Int {
    return a + b
}

// Type annotations are optional
var items = ["Apple", "Banana"]
```

**Special features:**
- Type annotations are optional when the type can be inferred
- Type inference is enabled by default

**Further reading:**
- [Swift Documentation - Types](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/types/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Explicit type annotations
let count: number = 42;
let name: string = "Hello";
let price: number = 19.99;

// Function parameters and return value
function add(a: number, b: number): number {
    return a + b;
}

// Type annotations are optional
let items = ["Apple", "Banana"];
```

**Special features:**
- Type annotations are optional
- Type inference is enabled by default
- Types are checked at compile time

**Further reading:**
- [TypeScript Handbook - Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Explicit type annotations
Dim count As Integer = 42
Dim name As String = "Hello"
Dim price As Double = 19.99

' Function parameters and return value
Function Add(a As Integer, b As Integer) As Integer
    Return a + b
End Function

' With Option Infer On for implicit typing
Dim items = New List(Of String)()
```

**Special features:**
- Types can be explicitly specified
- Supports `Option Infer On` for type inference

**Further reading:**
- [VB.NET Documentation - Types](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/data-types/)

</TabItem>
<TabItem value="v" label="V">

```v
// Explicit type annotations
mut count := 42  // int
mut name := "Hello"  // string
mut price := 19.99  // f64

// Explicit type annotations with type
mut count: int = 42
mut name: string = "Hello"
mut price: f64 = 19.99

// Function parameters and return value
fn add(a int, b int) int {
    return a + b
}
```

**Special features:**
- Type annotations are optional
- Supports `:=` for type inference

**Further reading:**
- [V Language Documentation - Types](https://github.com/vlang/v/blob/master/doc/docs.md#types)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Explicit type annotations
var count: i32 = 42;
var name: []const u8 = "Hello";
var price: f64 = 19.99;

// Function parameters and return value
fn add(a: i32, b: i32) i32 {
    return a + b;
}

// Type annotations are optional
var items = [_][]const u8{"Apple", "Banana"};
```

**Special features:**
- Type annotations are optional
- Type inference is enabled by default

**Further reading:**
- [Zig Documentation - Types](https://ziglang.org/documentation/0.11.0/#Types)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Explicit type declarations
(defun add (a b)
  (declare (type integer a b))
  (the integer (+ a b)))

;; Type declaration for variables
(let ((x 42))
  (declare (type fixnum x))
  (* x 2))
```

**Special features:**
- Type declarations via `declare` and `the`
- Declarations are optional and primarily serve as optimization hints for the compiler
- No compile-time type checking guaranteed (implementation-dependent)
- SBCL uses type declarations for extended compile-time warnings

**Further reading:**
- [Common Lisp HyperSpec - declare](http://www.lispworks.com/documentation/HyperSpec/Body/s_declar.htm)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Explicit type annotations
count : Int
count = 42

name : String
name = "Hello"

price : Float
price = 19.99

-- Functions with type annotations
add : Int -> Int -> Int
add a b = a + b

greet : String -> String
greet name = "Hello, " ++ name
```

**Special features:**
- Type annotations are optional but recommended for public APIs
- Type annotations are on a separate line above the definition
- Notation: `functionname : Type1 -> Type2 -> ReturnType`
- The compiler checks type annotations against the inferred type

**Further reading:**
- [Elm Documentation - Type Annotations](https://guide.elm-lang.org/types/reading_types.html)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// Explicit type annotations
let count: Int = 42
let name: String = "Hello"
let price: Float = 19.99

// Functions with explicit types
pub fn add(a: Int, b: Int) -> Int {
  a + b
}
```

**Special features:**
- Type annotations are optional since Type Inference is available
- Function parameters and return values can be annotated
- `let` bindings can optionally be annotated with types

**Further reading:**
- [Gleam Documentation - Type Annotations](https://tour.gleam.run/basics/type-annotations/)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Explicit type annotations with ::
count :: Int
count = 42

name :: String
name = "Hello"

price :: Double
price = 19.99

-- Function parameters and return value
add :: Int -> Int -> Int
add a b = a + b

-- Polymorphic type annotation
identity :: a -> a
identity x = x
```

**Special features:**
- Type annotations use `::` syntax
- Type annotations are optional thanks to Hindley-Milner Type Inference
- Recommended best practice: always annotate top-level functions with types
- Supports polymorphic type annotations with type variables

**Further reading:**
- [Haskell Documentation - Types](https://www.haskell.org/tutorial/goodies.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Explicit type annotations
count : I64
count = 42

name : Str
name = "Hello"

add : I64, I64 -> I64
add = \a, b -> a + b
```

**Special features:**
- Type annotations are above the binding
- Format: `name : Type`
- Function signatures with comma-separated parameters and `->` for the return type

**Further reading:**
- [Roc Documentation - Type Annotations](https://www.roc-lang.org/tutorial#type-annotations)

</TabItem>
</Tabs>


## 3.4.2. Type Inference

Automatic deduction of types at compile time from context, without explicit type annotations.

### Languages {#sprachen}

<Tabs availableTabs={['carbon', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'elm', 'fsharp', 'gleam', 'go', 'groovy', 'haskell', 'haxe', 'idris', 'java', 'julia', 'koka', 'kotlin', 'lean4', 'mercury', 'mojo', 'nim', 'ocaml', 'odin', 'purescript', 'python', 'roc', 'rust', 'scala', 'swift', 'typescript', 'v', 'vbnet', 'zig']}>
<TabItem value="csharp" label="C#">

```csharp
// Type Inference with var (since C# 3.0)
var count = 42;  // int
var name = "Hello";  // string
var price = 19.99;  // double

// Function parameters and return value
var result = Add(10, 20);  // int

int Add(int a, int b) {
    return a + b;
}

// With explicit types
int count2 = 42;
string name2 = "Hello";
```

**Special features:**
- `var` for local variables (since C# 3.0)
- Type must be determinable at compile time
- Function parameters and return values cannot be declared with `var`

**Further reading:**
- [Microsoft C# Documentation - Implicitly Typed Local Variables](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/statements/declarations#implicitly-typed-local-variables)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Type Inference with auto (since C++11)
auto count = 42;  // int
auto name = std::string("Hello");  // std::string
auto price = 19.99;  // double

// Function parameters and return value
auto result = add(10, 20);  // int

int add(int a, int b) {
    return a + b;
}

// With explicit types
int count2 = 42;
std::string name2 = "Hello";
```

**Special features:**
- `auto` for variables (since C++11)
- `decltype` for type deduction from expressions (since C++11)
- Function parameters can be declared with `auto` (since C++14, with Concepts since C++20)

**Further reading:**
- [cppreference.com - auto specifier](https://en.cppreference.com/w/cpp/language/auto)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Type Inference with var
var count = 42;  // i32
var name = "Hello";  // String
var price = 19.99;  // f64

// Function parameters and return value
var result = Add(10, 20);  // i32

fn Add(a: i32, b: i32) -> i32 {
    return a + b;
}
```

**Special features:**
- Experimental language, syntax may still change
- `var` for Type Inference

**Further reading:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Type Inference (enabled by default)
count = 42  # Int32
name = "Hello"  # String
price = 19.99  # Float64

# Function parameters and return value
result = add(10, 20)  # Int32

def add(a : Int32, b : Int32) : Int32
  a + b
end

# Explicit type annotations are optional
count2 : Int32 = 42
```

**Special features:**
- Type Inference is enabled by default
- Types are inferred at compile time
- Explicit type annotations are optional but recommended

**Further reading:**
- [Crystal Documentation - Type System](https://crystal-lang.org/reference/1.11/syntax_and_semantics/type_system.html)

</TabItem>
<TabItem value="d" label="D">

```d
// Type Inference with auto
auto count = 42;  // int
auto name = "Hello";  // string
auto price = 19.99;  // double

// Function parameters and return value
auto result = add(10, 20);  // int

int add(int a, int b) {
    return a + b;
}

// With explicit types
int count2 = 42;
string name2 = "Hello";
```

**Special features:**
- `auto` for Type Inference
- Type must be determinable at compile time

**Further reading:**
- [D Language Specification - Type Inference](https://dlang.org/spec/type.html#type-inference)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Type Inference (enabled by default)
var count = 42;  // int
var name = "Hello";  // String
var price = 19.99;  // double

// Function parameters and return value
var result = add(10, 20);  // int

int add(int a, int b) {
    return a + b;
}

// Explicit type annotations are optional
int count2 = 42;
String name2 = "Hello";
```

**Special features:**
- Type Inference is enabled by default with `var`
- Types are inferred at compile time
- Explicit type annotations are optional but recommended

**Further reading:**
- [Dart Language Specification - Type Inference](https://dart.dev/guides/language/spec#type-inference)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Type Inference (enabled by default)
count = 42  -- Int
name = "Hello"  -- String
price = 19.99  -- Float

-- Function parameters and return value
result = add 10 20  -- Int

add a b = a + b  -- Int -> Int -> Int

-- Explicit type annotations are optional
count2 : Int
count2 = 42
```

**Special features:**
- Type Inference is enabled by default
- Types are inferred at compile time
- Explicit type annotations are optional but recommended for public APIs

**Further reading:**
- [Elm Documentation - Type Annotations](https://guide.elm-lang.org/types/type_annotations.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Type Inference (enabled by default)
let count = 42  // int
let name = "Hello"  // string
let price = 19.99  // float

// Function parameters and return value
let add a b = a + b  // int -> int -> int
let result = add 10 20  // int

// Explicit type annotations are optional
let count2: int = 42
```

**Special features:**
- Type Inference is enabled by default
- Types are inferred at compile time
- Explicit type annotations are optional but recommended for clarity

**Further reading:**
- [F# Language Reference - Type Inference](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/type-inference)

</TabItem>
<TabItem value="go" label="Go">

```go
// Type Inference with :=
count := 42  // int
name := "Hello"  // string
price := 19.99  // float64

// Function parameters and return value
result := add(10, 20)  // int

func add(a int, b int) int {
    return a + b
}

// With explicit types
var count2 int = 42
var name2 string = "Hello"
```

**Special features:**
- `:=` for short variable declaration with Type Inference
- Type must be determinable at compile time
- Function parameters must be explicitly typed

**Further reading:**
- [Go Language Specification - Type Inference](https://go.dev/ref/spec#Type_inference)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Type Inference with def
def count = 42  // Integer
def name = "Hello"  // String
def price = 19.99  // Double

// Function parameters and return value
def result = add(10, 20)  // Integer

def add(a, b) {
    return a + b
}

// With explicit types
int count2 = 42
String name2 = "Hello"
```

**Special features:**
- `def` for Type Inference (dynamic typing at runtime)
- Also supports static typing with explicit types

**Further reading:**
- [Groovy Documentation - Static Type Checking](https://groovy-lang.org/semantics.html#static-type-checking)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Type Inference (enabled by default)
count = 42  -- Int
name = "Hello"  -- [Char]
price = 19.99  -- Double

-- Function parameters and return value
result = add 10 20  -- Int

add a b = a + b  -- Int -> Int -> Int

-- Explicit type annotations are optional
count2 :: Int
count2 = 42
```

**Special features:**
- Type Inference is enabled by default
- Types are inferred at compile time
- Explicit type annotations are optional but recommended for public APIs

**Further reading:**
- [Haskell Documentation - Type Inference](https://www.haskell.org/tutorial/classes.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Type Inference (enabled by default)
var count = 42;  // Int
var name = "Hello";  // String
var price = 19.99;  // Float

// Function parameters and return value
var result = add(10, 20);  // Int

function add(a: Int, b: Int): Int {
    return a + b;
}

// Explicit type annotations are optional
var count2: Int = 42;
```

**Special features:**
- Type Inference is enabled by default
- Types are inferred at compile time
- Explicit type annotations are optional

**Further reading:**
- [Haxe Manual - Type Inference](https://haxe.org/manual/type-system-type-inference.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Type Inference with var (since Java 10)
var count = 42;  // int
var name = "Hello";  // String
var price = 19.99;  // double

// Function parameters and return value
var result = add(10, 20);  // int

int add(int a, int b) {
    return a + b;
}

// With explicit types
int count2 = 42;
String name2 = "Hello";
```

**Special features:**
- `var` for local variables (since Java 10)
- Type must be determinable at compile time
- Function parameters and return values cannot be declared with `var`

**Further reading:**
- [Java Language Specification - Local Variable Type Inference](https://docs.oracle.com/javase/specs/jls/se21/html/jls-14.html#jls-14.4.1)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Type Inference (enabled by default)
count = 42  # Int64
name = "Hello"  # String
price = 19.99  # Float64

# Function with inferred return type
function add(a::Int, b::Int)
    a + b  # Return type is inferred as Int
end

result = add(10, 20)  # Int64

# Explicit type annotations are optional
count2::Int = 42
```

**Special features:**
- Type Inference is enabled by default
- Types are inferred at compile time (JIT compilation)
- Explicit type annotations are optional but recommended for performance

**Further reading:**
- [Julia Documentation - Type System](https://docs.julialang.org/en/v1/manual/types/)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Type Inference (Hindley-Milner, enabled by default)
val count = 42       // int
val name = "Hello"   // string
val price = 19.99    // float64

// Functions with inferred types
fun add(a, b)
  a + b  // inferred as (int, int) -> int

// Effects are also inferred
fun greet(name)
  println("Hello " ++ name)  // inferred as (string) -> console ()
```

**Special features:**
- Koka uses global Hindley-Milner Type Inference
- All types and effects are automatically inferred
- Explicit type annotations are optional but useful for documentation
- Effects are also inferred (e.g., `console`, `exn`)

**Further reading:**
- [Koka Language Guide - Type Inference](https://koka-lang.github.io/koka/doc/book.html#sec-type-inference)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Type Inference (enabled by default)
val count = 42  // Int
val name = "Hello"  // String
val price = 19.99  // Double

// Function parameters and return value
val result = add(10, 20)  // Int

fun add(a: Int, b: Int): Int {
    return a + b
}

// Explicit type annotations are optional
val count2: Int = 42
```

**Special features:**
- Type Inference is enabled by default
- Types are inferred at compile time
- Explicit type annotations are optional when the type can be inferred

**Further reading:**
- [Kotlin Documentation - Type Inference](https://kotlinlang.org/docs/type-inference.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Type Inference (enabled by default)
def count := 42          -- Nat
def name := "Hello"      -- String
def price := 19.99       -- Float

-- Function parameters and return value
def result := add 10 20  -- Nat

def add (a b : Nat) : Nat := a + b

-- Implicit type parameters are automatically inferred
def identity (x : α) : α := x
def r := identity 42     -- α is inferred as Nat
```

**Special features:**
- Type Inference is enabled by default
- Types are inferred at compile time (Elaboration)
- Implicit type parameters are automatically resolved
- Bidirectional type inference for dependent types

**Further reading:**
- [Lean 4 Documentation - Type Inference](https://lean-lang.org/theorem_proving_in_lean4/dependent_type_theory.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```mercury
% Type Inference: Local variables are automatically typed
:- pred main(io::di, io::uo) is det.
main(!IO) :-
    X = 42,                    % int (inferred)
    Name = "Hello",            % string (inferred)
    Items = [1, 2, 3],         % list(int) (inferred)
    Result = add(X, 10),       % int (inferred from add/2)
    io.write_int(Result, !IO), io.nl(!IO),
    io.write_string(Name, !IO), io.nl(!IO).

% Type declaration is mandatory for predicates/functions
:- func add(int, int) = int.
add(A, B) = A + B.

% Polymorphic types are inferred
:- func identity(T) = T.
identity(X) = X.

% Call — T is inferred as int
:- func result = int.
result = identity(42).
```

**Special features:**
- Local variables are fully typed through type inference.
- Predicate and function declarations require explicit type annotations.
- Polymorphic type variables are automatically inferred when used.
- The type system is based on Hindley-Milner-like inference.

**Further reading:**
- [The Mercury Language Reference Manual - Type System](https://www.mercurylang.org/documentation/reference.html#Type_system)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# Type Inference with var
var count = 42  # Int
var name = "Hello"  # String
var price = 19.99  # Float64

# Function parameters and return value
var result = add(10, 20)  # Int

fn add(a: Int, b: Int) -> Int:
    return a + b

# Explicit type annotations are optional
var count2: Int = 42
```

**Special features:**
- `var` for Type Inference
- Combines Python syntax with static typing
- Types are inferred at compile time

**Further reading:**
- [Mojo Documentation - Type System](https://docs.modular.com/mojo/manual/basics/types)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Type Inference (enabled by default)
var count = 42  # int
var name = "Hello"  # string
var price = 19.99  # float

# Function parameters and return value
var result = add(10, 20)  # int

proc add(a: int, b: int): int =
    return a + b

# Explicit type annotations are optional
var count2: int = 42
```

**Special features:**
- Type Inference is enabled by default
- Types are inferred at compile time
- Explicit type annotations are optional

**Further reading:**
- [Nim Manual - Type Inference](https://nim-lang.org/docs/manual.html#type-inference)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Type Inference (enabled by default) *)
let count = 42  (* int *)
let name = "Hello"  (* string *)
let price = 19.99  (* float *)

(* Function parameters and return value *)
let result = add 10 20  (* int *)

let add a b = a + b  (* int -> int -> int *)

(* Explicit type annotations are optional *)
let count2: int = 42
```

**Special features:**
- Type Inference is enabled by default
- Types are inferred at compile time
- Explicit type annotations are optional but recommended for clarity

**Further reading:**
- [OCaml Manual - Type Inference](https://v2.ocaml.org/manual/typedecl.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Type Inference with :=
count := 42  // int
name := "Hello"  // string
price := 19.99  // f64

// Function parameters and return value
result := add(10, 20)  // int

add :: proc(a: int, b: int) -> int {
    return a + b
}

// Explicit type annotations are optional
count2: int = 42
```

**Special features:**
- `:=` for Type Inference
- Type must be determinable at compile time
- Function parameters must be explicitly typed

**Further reading:**
- [Odin Documentation - Type System](https://odin-lang.org/docs/overview/#types)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Type Inference (enabled by default)
count = 42  -- Int
name = "Hello"  -- String
price = 19.99  -- Number

-- Function parameters and return value
result = add 10 20  -- Int

add a b = a + b  -- Int -> Int -> Int

-- Explicit type annotations are optional
count2 :: Int
count2 = 42
```

**Special features:**
- Type Inference is enabled by default
- Types are inferred at compile time
- Explicit type annotations are optional but recommended for public APIs

**Further reading:**
- [PureScript Documentation - Type Inference](https://github.com/purescript/documentation/blob/master/language/Types.md)

</TabItem>
<TabItem value="python" label="Python">

```python
# Type Inference (dynamic at runtime)
count = 42  # int
name = "Hello"  # str
price = 19.99  # float

# Function parameters and return value
result = add(10, 20)  # int

def add(a: int, b: int) -> int:
    return a + b

# Explicit type annotations are optional (since Python 3.5)
count2: int = 42
```

**Special features:**
- Type Inference occurs dynamically at runtime
- Static type annotations are optional (since Python 3.5)
- Types are not checked at runtime (except with tools like `mypy`)

**Further reading:**
- [Python Documentation - Type Hints](https://docs.python.org/3/library/typing.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Type Inference (enabled by default)
let count = 42;  // i32
let name = "Hello";  // &str
let price = 19.99;  // f64

// Function parameters and return value
let result = add(10, 20);  // i32

fn add(a: i32, b: i32) -> i32 {
    a + b
}

// Explicit type annotations are optional
let count2: i32 = 42;
```

**Special features:**
- Type Inference is enabled by default
- Types are inferred at compile time
- Explicit type annotations are optional when the type can be inferred

**Further reading:**
- [Rust Book - Type Inference](https://doc.rust-lang.org/book/ch03-02-data-types.html#type-inference)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Type Inference (enabled by default)
val count = 42  // Int
val name = "Hello"  // String
val price = 19.99  // Double

// Function parameters and return value
val result = add(10, 20)  // Int

def add(a: Int, b: Int): Int = {
    a + b
}

// Explicit type annotations are optional
val count2: Int = 42
```

**Special features:**
- Type Inference is enabled by default
- Types are inferred at compile time
- Explicit type annotations are optional but recommended for public APIs

**Further reading:**
- [Scala Documentation - Type Inference](https://docs.scala-lang.org/tour/type-inference.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Type Inference (enabled by default)
var count = 42  // Int
var name = "Hello"  // String
var price = 19.99  // Double

// Function parameters and return value
var result = add(10, 20)  // Int

func add(a: Int, b: Int) -> Int {
    return a + b
}

// Explicit type annotations are optional
var count2: Int = 42
```

**Special features:**
- Type Inference is enabled by default
- Types are inferred at compile time
- Explicit type annotations are optional when the type can be inferred

**Further reading:**
- [Swift Documentation - Type Inference](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/thebasics/#Type-Safety-and-Type-Inference)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Type Inference (enabled by default)
let count = 42;  // number
let name = "Hello";  // string
let price = 19.99;  // number

// Function parameters and return value
let result = add(10, 20);  // number

function add(a: number, b: number): number {
    return a + b;
}

// Explicit type annotations are optional
let count2: number = 42;
```

**Special features:**
- Type Inference is enabled by default
- Types are inferred at compile time
- Explicit type annotations are optional when the type can be inferred

**Further reading:**
- [TypeScript Handbook - Type Inference](https://www.typescriptlang.org/docs/handbook/type-inference.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Type Inference with Option Infer On
Option Infer On

Dim count = 42  ' Integer
Dim name = "Hello"  ' String
Dim price = 19.99  ' Double

' Function parameters and return value
Dim result = Add(10, 20)  ' Integer

Function Add(a As Integer, b As Integer) As Integer
    Return a + b
End Function

' With explicit types
Dim count2 As Integer = 42
```

**Special features:**
- `Option Infer On` enables Type Inference
- Type must be determinable at compile time
- Function parameters must be explicitly typed

**Further reading:**
- [VB.NET Documentation - Type Inference](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/variables/local-type-inference)

</TabItem>
<TabItem value="v" label="V">

```v
// Type Inference with :=
mut count := 42  // int
mut name := "Hello"  // string
mut price := 19.99  // f64

// Function parameters and return value
mut result := add(10, 20)  // int

fn add(a int, b int) int {
    return a + b
}

// Explicit type annotations are optional
mut count2: int = 42
```

**Special features:**
- `:=` for Type Inference
- Type must be determinable at compile time
- Function parameters must be explicitly typed

**Further reading:**
- [V Language Documentation - Type System](https://github.com/vlang/v/blob/master/doc/docs.md#types)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Type Inference with const (comptime-known values)
const count = 42;           // comptime_int
const name = "Hello";       // *const [5:0]u8
const price = 19.99;        // comptime_float

// Type Inference from function return value
fn add(a: i32, b: i32) i32 {
    return a + b;
}
const result = add(10, 20);  // i32 (derived from return type)

// Explicit type annotation required for var
var counter: i32 = 42;      // Explicit type required for var
```

**Special features:**
- `const` allows type inference for comptime-known values
- `var` requires an explicit type annotation in most cases
- Function return values are derived from the return type
- Function parameters always require explicit type annotations

**Further reading:**
- [Zig Documentation - Type Inference](https://ziglang.org/documentation/master/#Type-Inference)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// Type Inference: Types are automatically derived
let count = 42          // Int
let name = "Hello"      // String
let price = 19.99       // Float
let items = [1, 2, 3]   // List(Int)

pub fn double(x) {
  x * 2
}
// double is inferred as fn(Int) -> Int
```

**Special features:**
- Complete Type Inference based on Hindley-Milner algorithm
- Type annotations are optional in most cases
- Compiler infers types for local variables and function parameters

**Further reading:**
- [Gleam Documentation - Type Checking](https://tour.gleam.run/basics/type-checking/)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Type Inference for local bindings
example : Int
example =
    let x = 42          -- Type Int is inferred
        y = 3.14        -- Type Double is inferred
        name = "Hello"  -- Type String is inferred
    in x

-- Top-level definitions require type annotations
add : Int -> Int -> Int
add a b = a + b
```

**Special features:**
- Bidirectional Type Inference
- Top-level definitions require explicit type annotations
- Local bindings (let, where) can infer types
- Dependent Types often require explicit annotations

**Further reading:**
- [Idris 2 Documentation - Types and Functions](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Type Inference: Types are automatically derived
count = 42
name = "Hello"

add = \a, b -> a + b
result = add 5 3
```

**Features:**
- Full Hindley-Milner Type Inference
- Type annotations are optional
- Compiler infers types globally

**Further Reading:**
- [Roc Documentation - Type Annotations](https://www.roc-lang.org/tutorial#type-annotations)

</TabItem>
</Tabs>


## 3.4.3. Type Inference Strategies (Local, Global, etc.)

Different strategies for type inference: local (only from initialization), global (from entire context), bidirectional (from context and usage), or Hindley-Milner (functional languages).

### Languages {#sprachen}

<Tabs availableTabs={['cpp', 'crystal', 'csharp', 'dart', 'elm', 'fsharp', 'go', 'haskell', 'java', 'koka', 'kotlin', 'lean4', 'mercury', 'ocaml', 'purescript', 'roc', 'rust', 'scala', 'swift', 'typescript']}>
<TabItem value="csharp" label="C#">

```csharp
// Local Type Inference (only from initialization, since C# 3.0)
var count = 42;  // int - type from initialization
var name = "Hello";  // string - type from initialization

// Type is inferred from right-hand side
var result = Process(10);  // int - type from Process return value

int Process(int x) {
    return x * 2;  // return type must be explicitly specified
}

// Implicit array creation (since C# 3.0)
var items = new[] { 1, 2, 3 };  // int[] - type from array elements
```

**Features:**
- Uses exclusively Local Type Inference with `var` (since C# 3.0)
- Function return types must always be explicitly specified
- Implicit array creation with `new[]` since C# 3.0

**Further Reading:**
- [Microsoft C# Documentation - Type Inference](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/statements/declarations#implicitly-typed-local-variables)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Local Type Inference with auto (since C++11)
auto count = 42;  // int - type from initialization
auto name = std::string("Hello");  // std::string - type from initialization

// Global Type Inference (from function body)
auto result = process(10);  // int - type from return value

auto process(int x) {  // return type is inferred (since C++14)
    return x * 2;
}

// Bidirectional type inference with decltype
decltype(count) another = 42;  // type derived from expression
```

**Features:**
- Uses mainly Local Type Inference with `auto` (since C++11)
- Function return types can be inferred with `auto` (since C++14)
- `decltype` for type inference from expressions (since C++11)

**Further Reading:**
- [cppreference.com - auto specifier](https://en.cppreference.com/w/cpp/language/auto)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Global Type Inference (from entire context)
def process(x)
  x * 2  # return type is derived from expression
end

result = process(10)  # Int32 - type from function return value

# Local Type Inference
count = 42  # Int32 - type from initialization
name = "Hello"  # String - type from initialization

# Bidirectional type inference
items = [1, 2, 3]  # Array(Int32) - type from array elements
```

**Features:**
- Uses Global Type Inference for function return types
- Local Type Inference for variables
- Bidirectional type inference for collections

**Further Reading:**
- [Crystal Documentation - Type System](https://crystal-lang.org/reference/1.11/syntax_and_semantics/type_system.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Local Type Inference
var count = 42;  // int - type from initialization
var name = "Hello";  // String - type from initialization

// Global Type Inference (from function body)
var result = process(10);  // int - type from return value

int process(int x) {
    return x * 2;  // return type explicit, but could be inferred
}

// Bidirectional type inference
var items = [1, 2, 3];  // List<int> - type from list elements
```

**Features:**
- Uses mainly Local Type Inference with `var`
- Function return types must be explicitly specified
- Bidirectional type inference for collections

**Further Reading:**
- [Dart Language Specification - Type Inference](https://dart.dev/guides/language/spec#type-inference)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Hindley-Milner Type Inference
process x = x * 2  -- Int -> Int - type is inferred globally

result = process 10  -- Int - type from function return value

-- Local Type Inference
count = 42  -- Int - type from initialization
name = "Hello"  -- String - type from initialization

-- Bidirectional type inference
items = [1, 2, 3]  -- List Int - type from list elements
```

**Features:**
- Uses Hindley-Milner Type Inference (global)
- Types are inferred from the entire context
- Bidirectional type inference for collections

**Further Reading:**
- [Elm Documentation - Type Annotations](https://guide.elm-lang.org/types/type_annotations.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Hindley-Milner Type Inference
let process x = x * 2  // int -> int - type is inferred globally

let result = process 10  // int - type from function return value

// Local Type Inference
let count = 42  // int - type from initialization
let name = "Hello"  // string - type from initialization

// Bidirectional type inference
let items = [1; 2; 3]  // int list - type from list elements
```

**Features:**
- Uses Hindley-Milner Type Inference (global)
- Types are inferred from the entire context
- Bidirectional type inference for collections

**Further Reading:**
- [F# Language Reference - Type Inference](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/type-inference)

</TabItem>
<TabItem value="go" label="Go">

```go
// Local Type Inference with :=
count := 42  // int - type from initialization
name := "Hello"  // string - type from initialization

// Global Type Inference (from function body)
result := process(10)  // int - type from return value

func process(x int) int {
    return x * 2  // return type explicit, but could be inferred
}

// Bidirectional type inference
items := []int{1, 2, 3}  // []int - type from slice elements
```

**Features:**
- Uses mainly Local Type Inference with `:=`
- Function return types must be explicitly specified
- Bidirectional type inference for slices

**Further Reading:**
- [Go Language Specification - Type Inference](https://go.dev/ref/spec#Type_inference)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Hindley-Milner Type Inference
process x = x * 2  -- Int -> Int - type is inferred globally

result = process 10  -- Int - type from function return value

-- Local Type Inference
count = 42  -- Int - type from initialization
name = "Hello"  -- [Char] - type from initialization

-- Bidirectional type inference
items = [1, 2, 3]  -- [Int] - type from list elements
```

**Features:**
- Uses Hindley-Milner Type Inference (global)
- Types are inferred from the entire context
- Bidirectional type inference for collections

**Further Reading:**
- [Haskell Documentation - Type Inference](https://www.haskell.org/tutorial/classes.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Local Type Inference with var (since Java 10)
var count = 42;  // int - type from initialization
var name = "Hello";  // String - type from initialization

// Global Type Inference (from function body)
var result = process(10);  // int - type from return value

int process(int x) {
    return x * 2;  // return type explicit
}

// Bidirectional type inference
var items = new ArrayList<Integer>();  // ArrayList<Integer> - type from generic
```

**Features:**
- Uses mainly Local Type Inference with `var` (since Java 10)
- Function return types must be explicitly specified
- Bidirectional type inference for generics (Diamond Operator since Java 7)

**Further Reading:**
- [Java Language Specification - Local Variable Type Inference](https://docs.oracle.com/javase/specs/jls/se21/html/jls-14.html#jls-14.4.1)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Global Hindley-Milner Type Inference
val count = 42       // int
val name = "Hello"   // string

// Function types are inferred globally
fun identity(x)
  x  // inferred as forall<a> (x: a) -> a

// Effects are also inferred globally
fun greet(name)
  println("Hello " ++ name)  // inferred as (string) -> console ()

// Bidirectional inference for polymorphic types
fun apply(f, x)
  f(x)  // inferred as forall<a,b> (f: (a) -> b, x: a) -> b
```

**Features:**
- Uses global Hindley-Milner Type Inference (like Haskell, OCaml)
- Infers not only types, but also effects (unique)
- Effect inference automatically determines which side effects a function has
- No explicit type annotations needed (but recommended for documentation)

**Further Reading:**
- [Koka Language Guide - Type Inference](https://koka-lang.github.io/koka/doc/book.html#sec-type-inference)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Local Type Inference
val count = 42  // Int - type from initialization
val name = "Hello"  // String - type from initialization

// Global Type Inference (from function body)
val result = process(10)  // Int - type from return value

fun process(x: Int) = x * 2  // Int - return type is inferred

// Bidirectional type inference
val items = listOf(1, 2, 3)  // List<Int> - type from list elements
```

**Features:**
- Uses Local Type Inference for variables
- Function return types can be inferred
- Bidirectional type inference for collections

**Further Reading:**
- [Kotlin Documentation - Type Inference](https://kotlinlang.org/docs/type-inference.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Bidirectional type inference (Elaboration)
def count := 42          -- Nat - type from literal
def name := "Hello"      -- String - type from literal

-- Global type inference for implicit parameters
def identity (x : α) : α := x
def result := identity 42  -- α is inferred as Nat

-- Bidirectional type inference: expected type flows in
def items : List Nat := [1, 2, 3]  -- Expected type List Nat

-- Unification for dependent types
def append {α : Type} : List α → List α → List α
  | [], ys => ys
  | x :: xs, ys => x :: append xs ys
```

**Features:**
- Uses bidirectional type inference (Elaboration)
- Implicit parameters `{α : Type}` are resolved through unification
- Expected type flows into inference (top-down)
- Supports dependent types in inference

**Further Reading:**
- [Lean 4 Documentation - Elaboration](https://lean-lang.org/theorem_proving_in_lean4/dependent_type_theory.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```mercury
% Type Inference Strategy: Global + Local
% Mercury uses a combination of global and local type inference.

% Global inference: Polymorphic types are resolved module-wide
:- func identity(T) = T.
identity(X) = X.

% Local inference: Variable types within clauses
:- pred process(int::in, int::out) is det.
process(X, Result) :-
    Doubled = X * 2,          % int (locally inferred from X * 2)
    Offset = 10,              % int (locally inferred from literal)
    Result = Doubled + Offset. % int (locally inferred)

% Global inference: Type variables across module boundaries
:- func apply(func(A) = B, A) = B.
apply(F, X) = F(X).

:- func result = int.
result = apply((func(X) = X + 1), 41). % A=int, B=int inferred
```

**Features:**
- Combination of global and local type inference.
- Global inference resolves polymorphic type variables module-wide.
- Local inference determines types within clauses through unification.
- Similar to Hindley-Milner, but with extensions for modes and determinism.

**Further Reading:**
- [The Mercury Language Reference Manual - Type System](https://www.mercurylang.org/documentation/reference.html#Type_system)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Hindley-Milner Type Inference *)
let process x = x * 2  (* int -> int - type is inferred globally *)

let result = process 10  (* int - type from function return value *)

(* Local Type Inference *)
let count = 42  (* int - type from initialization *)
let name = "Hello"  (* string - type from initialization *)

(* Bidirectional type inference *)
let items = [1; 2; 3]  (* int list - type from list elements *)
```

**Features:**
- Uses Hindley-Milner Type Inference (global)
- Types are inferred from the entire context
- Bidirectional type inference for collections

**Further Reading:**
- [OCaml Manual - Type Inference](https://v2.ocaml.org/manual/typedecl.html)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Hindley-Milner Type Inference
process x = x * 2  -- Int -> Int - type is inferred globally

result = process 10  -- Int - type from function return value

-- Local Type Inference
count = 42  -- Int - type from initialization
name = "Hello"  -- String - type from initialization

-- Bidirectional type inference
items = [1, 2, 3]  -- Array Int - type from array elements
```

**Features:**
- Uses Hindley-Milner Type Inference (global)
- Types are inferred from the entire context
- Bidirectional type inference for collections

**Further Reading:**
- [PureScript Documentation - Type Inference](https://github.com/purescript/documentation/blob/master/language/Types.md)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Local Type Inference
let count = 42;  // i32 - type from initialization
let name = "Hello";  // &str - type from initialization

// Global Type Inference (from function body)
let result = process(10);  // i32 - type from return value

fn process(x: i32) -> i32 {
    x * 2  // return type explicit, but could be inferred
}

// Bidirectional type inference
let items = vec![1, 2, 3];  // Vec<i32> - type from vec elements
```

**Features:**
- Uses Local Type Inference for variables
- Function return types must be explicitly specified
- Bidirectional type inference for collections

**Further Reading:**
- [Rust Book - Type Inference](https://doc.rust-lang.org/book/ch03-02-data-types.html#type-inference)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Local Type Inference
val count = 42  // Int - type from initialization
val name = "Hello"  // String - type from initialization

// Global Type Inference (from function body)
val result = process(10)  // Int - type from return value

def process(x: Int) = x * 2  // Int - return type is inferred

// Bidirectional type inference
val items = List(1, 2, 3)  // List[Int] - type from list elements
```

**Features:**
- Uses Local Type Inference for variables
- Function return types can be inferred
- Bidirectional type inference for collections

**Further Reading:**
- [Scala Documentation - Type Inference](https://docs.scala-lang.org/tour/type-inference.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Local Type Inference
var count = 42  // Int - type from initialization
var name = "Hello"  // String - type from initialization

// Global Type Inference (from function body)
var result = process(10)  // Int - type from return value

func process(x: Int) -> Int {
    return x * 2  // return type explicit
}

// Bidirectional type inference
var items = [1, 2, 3]  // [Int] - type from array elements
```

**Features:**
- Uses Local Type Inference for variables
- Function return types must be explicitly specified
- Bidirectional type inference for arrays

**Further Reading:**
- [Swift Documentation - Type Inference](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/thebasics/#Type-Safety-and-Type-Inference)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Local Type Inference
let count = 42;  // number - type from initialization
let name = "Hello";  // string - type from initialization

// Global Type Inference (from function body)
let result = process(10);  // number - type from return value

function process(x: number): number {
    return x * 2;  // return type explicit
}

// Bidirectional type inference
let items = [1, 2, 3];  // number[] - type from array elements
```

**Features:**
- Uses Local Type Inference for variables
- Function return types can be inferred (optional)
- Bidirectional type inference for arrays

**Further Reading:**
- [TypeScript Handbook - Type Inference](https://www.typescriptlang.org/docs/handbook/type-inference.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Global Type Inference (Hindley-Milner)
add = \a, b -> a + b
result = add 5 3
```

**Features:**
- Global Hindley-Milner Type Inference
- Types are inferred program-wide
- No explicit type annotations required

**Further Reading:**
- [Roc Documentation - Type Annotations](https://www.roc-lang.org/tutorial#type-annotations)

</TabItem>
</Tabs>


## 3.4.4. Gradual Typing

Combination of static and dynamic typing, where types are optional and can be added incrementally. Types are checked at runtime or validated through static analysis tools.

### Languages {#sprachen}

<Tabs availableTabs={['crystal', 'dart', 'groovy', 'haxe', 'javascript', 'php', 'python', 'racket', 'ruby', 'typescript']}>
<TabItem value="crystal" label="Crystal">

```crystal
# Dynamic typing (without type annotations)
def process(x)
  x * 2
end

result = process(10)  # Works without types

# Static typing (with type annotations)
def process_typed(x : Int32) : Int32
  x * 2
end

result_typed = process_typed(10)  # With explicit types
```

**Features:**
- Type annotations are optional
- Types are checked at compile time when specified
- Code can be gradually migrated from dynamic to static

**Further Reading:**
- [Crystal Documentation - Type System](https://crystal-lang.org/reference/1.11/syntax_and_semantics/type_system.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Dynamic typing (without type annotations)
process(x) {
  return x * 2;
}

var result = process(10);  // Works without types

// Static typing (with type annotations)
int processTyped(int x) {
  return x * 2;
}

int resultTyped = processTyped(10);  // With explicit types
```

**Features:**
- Type annotations are optional
- Types are checked at compile time when specified
- Code can be gradually migrated from dynamic to static

**Further Reading:**
- [Dart Language Specification - Types](https://dart.dev/guides/language/spec)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Dynamic typing (with def)
def process(x) {
    return x * 2
}

def result = process(10)  // Works without types

// Static typing (with type annotations)
int processTyped(int x) {
    return x * 2
}

int resultTyped = processTyped(10)  // With explicit types
```

**Features:**
- Supports both static and dynamic typing
- `def` for dynamic typing
- Explicit types for static typing
- Code can be gradually migrated from dynamic to static

**Further Reading:**
- [Groovy Documentation - Static Type Checking](https://groovy-lang.org/semantics.html#static-type-checking)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Dynamic typing (with Dynamic)
function process(x: Dynamic): Dynamic {
    return x * 2;
}

var result = process(10);  // Works without types

// Static typing (with type annotations)
function processTyped(x: Int): Int {
    return x * 2;
}

var resultTyped: Int = processTyped(10);  // With explicit types
```

**Features:**
- Type annotations are optional
- `Dynamic` for dynamic typing
- Types are checked at compile time when specified
- Code can be gradually migrated from dynamic to static

**Further Reading:**
- [Haxe Manual - Type System](https://haxe.org/manual/type-system.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Dynamic typing (without types)
function process(x) {
    return x * 2;
}

let result = process(10);  // Works without types

// Static typing (with JSDoc)
/**
 * @param {number} x
 * @returns {number}
 */
function processTyped(x) {
    return x * 2;
}

/** @type {number} */
let resultTyped = processTyped(10);  // With JSDoc types
```

**Features:**
- Types are not checked at runtime
- JSDoc comments for optional type annotations
- Static type checking possible with tools like TypeScript or Flow
- Code can be gradually annotated with JSDoc

**Further Reading:**
- [JSDoc Documentation - Type Tags](https://jsdoc.app/tags-type.html)

</TabItem>
<TabItem value="php" label="PHP">

```php
// Dynamic typing (without types, until PHP 7.0)
function process($x) {
    return $x * 2;
}

$result = process(10);  // Works without types

// Static typing (with type annotations, since PHP 7.0)
function processTyped(int $x): int {
    return $x * 2;
}

$resultTyped = processTyped(10);  // With explicit types
```

**Features:**
- Type annotations for function parameters and return values (since PHP 7.0)
- Types are checked at runtime
- Variables cannot be directly typed
- Code can be gradually migrated from dynamic to static

**Further Reading:**
- [PHP Documentation - Type Declarations](https://www.php.net/manual/en/functions.arguments.php#functions.arguments.type-declaration)

</TabItem>
<TabItem value="python" label="Python">

```python
# Dynamic typing (without types)
def process(x):
    return x * 2

result = process(10)  # Works without types

# Static typing (with Type Hints, since Python 3.5)
def process_typed(x: int) -> int:
    return x * 2

result_typed: int = process_typed(10)  # With explicit types
```

**Features:**
- Type Hints are optional (since Python 3.5)
- Types are not checked at runtime
- Static type checking possible with tools like `mypy`
- Code can be gradually migrated from dynamic to static

**Further Reading:**
- [Python Documentation - Type Hints](https://docs.python.org/3/library/typing.html)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Dynamic typing (without types)
def process(x)
  x * 2
end

result = process(10)  # Works without types

# Static typing (with RBS - Ruby Type Signature)
# process.rbs
def process_typed: (Integer x) -> Integer

# process.rb
def process_typed(x)
  x * 2
end

result_typed = process_typed(10)  # With RBS types
```

**Features:**
- Type annotations via RBS (Ruby Type Signature) in separate `.rbs` files
- Types are not checked at runtime
- Static type checking possible with tools like `steep`
- Code can be gradually annotated with RBS

**Further Reading:**
- [RBS Documentation](https://github.com/ruby/rbs)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Dynamic typing (without types, JavaScript-compatible)
function process(x: any) {
    return x * 2;
}

let result = process(10);  // Works without types

// Static typing (with type annotations)
function processTyped(x: number): number {
    return x * 2;
}

let resultTyped: number = processTyped(10);  // With explicit types
```

**Features:**
- Type annotations are optional
- `any` for dynamic typing
- Types are checked at compile time
- Code can be gradually migrated from JavaScript to TypeScript

**Further Reading:**
- [TypeScript Handbook - Gradual Typing](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
; Typed Racket: Gradual Typing
; Untyped module
(module untyped racket
  (provide greet)
  (define (greet name)
    (string-append "Hello, " name)))

; Typed module
(module typed typed/racket
  (require/typed (submod ".." untyped)
    [greet (-> String String)])
  (greet "World"))
```

**Features:**
- Typed Racket enables gradual introduction of types
- Contracts are automatically inserted at type boundaries between typed and untyped modules
- Typed Racket is one of the pioneering systems for gradual typing

**Further Reading:**
- [Typed Racket Documentation](https://docs.racket-lang.org/ts-guide/index.html)

</TabItem>
</Tabs>

