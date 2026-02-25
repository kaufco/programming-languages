---
slug: /typsystem/type-system-features
title: 3.9. Type System Features
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 3.9. Type System Features

Additional features of the type system.

## 3.9.1. Type Aliases

Introduction of an alternative name for an existing type.

### Languages {#languages}

<Tabs availableTabs={['common-lisp', 'cpp', 'csharp', 'd', 'dart', 'elm', 'fsharp', 'gleam', 'go', 'haskell', 'haxe', 'julia', 'koka', 'kotlin', 'lean4', 'mercury', 'nim', 'object-pascal', 'ocaml', 'purescript', 'python', 'roc', 'rust', 'scala', 'swift', 'typescript', 'v', 'zig']}>
<TabItem value="csharp" label="C#">

```csharp
// Type alias (since C# 10.0)
using UserId = int;
using StringList = System.Collections.Generic.List<string>;

UserId userId = 42;
StringList names = new() { "Alice", "Bob" };

// Using alias directive (since C# 1.0)
using System.Collections.Generic;
using MyList = List<int>;

MyList numbers = new() { 1, 2, 3 };
```

**Special features:**
- `using` alias directive since C# 1.0 for namespace and type aliases
- `using` alias for types since C# 10.0 (file-scoped)
- Alias can be used for any type, including generic types

**Further reading:**
- [C# Documentation - Using Directive](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/using-directive)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Type alias (since C++11)
using UserId = int;
using StringVector = std::vector<std::string>;

UserId userId = 42;
StringVector names = {"Alice", "Bob"};

// Template type alias
template<typename T>
using Vector = std::vector<T>;

Vector<int> numbers = {1, 2, 3};
```

**Special features:**
- `using` syntax since C++11
- Supports template aliases
- Alternative to `typedef`, but with better readability for templates

**Further reading:**
- [C++ Reference - Type Alias](https://en.cppreference.com/w/cpp/language/type_alias)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Type alias
typedef UserId = int;
typedef StringList = List<String>;

UserId userId = 42;
StringList names = ['Alice', 'Bob'];

// Function type alias
typedef IntFunction = int Function(int);

IntFunction square = (x) => x * x;
```

**Special features:**
- `typedef` syntax for type aliases
- Also supports function type aliases
- Can be used for types and function signatures

**Further reading:**
- [Dart Documentation - Typedefs](https://dart.dev/language/typedefs)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Type alias
type UserId = int
type StringList = List<string>

let userId: UserId = 42
let names: StringList = ["Alice"; "Bob"]

// Type alias with generics
type Pair<'T> = 'T * 'T

let pair: Pair<int> = (1, 2)
```

**Special features:**
- `type` syntax for type aliases
- Supports generic type aliases
- Aliases are structurally equivalent to the original type

**Further reading:**
- [F# Documentation - Type Abbreviations](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/type-abbreviations)

</TabItem>
<TabItem value="go" label="Go">

```go
// Type alias
type UserId int
type StringSlice []string

var userId UserId = 42
var names StringSlice = []string{"Alice", "Bob"}

// Type alias with struct
type Point struct {
    X, Y int
}
type Coordinate Point

var coord Coordinate = Coordinate{X: 1, Y: 2}
```

**Special features:**
- `type` syntax for type aliases
- Creates a new type (not just an alias)
- Can be used for all types, including structs

**Further reading:**
- [Go Documentation - Type Declarations](https://go.dev/ref/spec#Type_declarations)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Type alias
type UserId = Int
type StringList = [String]

userId :: UserId
userId = 42

names :: StringList
names = ["Alice", "Bob"]

-- Type alias with parameters
type Pair a = (a, a)

pair :: Pair Int
pair = (1, 2)
```

**Special features:**
- `type` syntax for type aliases
- Supports parameterized type aliases
- Aliases are structurally equivalent to the original type

**Further reading:**
- [Haskell Documentation - Type Synonyms](https://www.haskell.org/onlinereport/haskell2010/haskellch4.html#x10-750004.2)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Type alias
typealias UserId = Int
typealias StringList = List<String>

val userId: UserId = 42
val names: StringList = listOf("Alice", "Bob")

// Function type alias
typealias IntOperation = (Int) -> Int

val square: IntOperation = { it * it }
```

**Special features:**
- `typealias` syntax for type aliases
- Supports function type aliases
- Can be used for all types, including generic types

**Further reading:**
- [Kotlin Documentation - Type Aliases](https://kotlinlang.org/docs/type-aliases.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Type Aliases with `abbrev`
abbrev UserId := Int
abbrev StringList := List String

def userId : UserId := 42
def names : StringList := ["Alice", "Bob"]

-- Function type alias
abbrev IntOperation := Int → Int

def square : IntOperation := fun x => x * x
```

**Special features:**
- `abbrev` creates transparent type aliases (fully reducible)
- `def` can also be used for type aliases (but is less transparent)
- Supports generic and function type aliases
- Aliases are fully compatible with the original type

**Further reading:**
- [Lean 4 Documentation - Dependent Type Theory](https://lean-lang.org/theorem_proving_in_lean4/dependent_type_theory.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```mercury
% Type Aliases: Type equivalence declarations
:- type user_id == int.
:- type string_list == list(string).

% Function type alias
:- type int_operation == (func(int) = int).

:- func square(int) = int.
square(X) = X * X.

:- pred main(io::di, io::uo) is det.
main(!IO) :-
    UserId : user_id = 42,
    Names : string_list = ["Alice", "Bob"],
    Sq : int_operation = square,
    io.write_int(UserId, !IO), io.nl(!IO),
    io.write(Names, !IO), io.nl(!IO),
    io.write_int(Sq(5), !IO), io.nl(!IO).
```

**Special features:**
- Type Aliases are defined with `:- type name == existing_type`.
- The alias is fully equivalent to the original type (transparent alias).
- Supports parameterized type aliases and function type aliases.
- Unlike new type declarations (`--->`), `==` does not create a new type.

**Further reading:**
- [The Mercury Language Reference Manual - Type Definitions](https://www.mercurylang.org/documentation/reference.html#Type_definitions)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Type alias *)
type user_id = int
type string_list = string list

let userId: user_id = 42
let names: string_list = ["Alice"; "Bob"]

(* Type alias with parameters *)
type 'a pair = 'a * 'a

let pair: int pair = (1, 2)
```

**Special features:**
- `type` syntax for type aliases
- Supports parameterized type aliases
- Aliases are structurally equivalent to the original type

**Further reading:**
- [OCaml Documentation - Type Definitions](https://ocaml.org/manual/types.html)

</TabItem>
<TabItem value="python" label="Python">

```python
# Type alias (since Python 3.10)
from typing import TypeAlias

UserId: TypeAlias = int
StringList: TypeAlias = list[str]

userId: UserId = 42
names: StringList = ["Alice", "Bob"]

# Alternative syntax (before Python 3.10)
from typing import List

OldStringList = List[str]
```

**Special features:**
- `TypeAlias` since Python 3.10 for explicit type aliases
- Before Python 3.10: Simple assignment of types
- Mainly used for type hints

**Further reading:**
- [Python Documentation - Type Aliases](https://docs.python.org/3/library/typing.html#type-aliases)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Type alias
type UserId = i32;
type StringVec = Vec<String>;

let userId: UserId = 42;
let names: StringVec = vec!["Alice".to_string(), "Bob".to_string()];

// Type alias with generics
type Pair<T> = (T, T);

let pair: Pair<i32> = (1, 2);
```

**Special features:**
- `type` syntax for type aliases
- Supports generic type aliases
- Aliases are structurally equivalent to the original type

**Further reading:**
- [Rust Documentation - Type Aliases](https://doc.rust-lang.org/book/ch19-04-advanced-types.html#creating-type-synonyms-with-type-aliases)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Type alias
type UserId = Int
type StringList = List[String]

val userId: UserId = 42
val names: StringList = List("Alice", "Bob")

// Type alias with parameters
type Pair[A] = (A, A)

val pair: Pair[Int] = (1, 2)
```

**Special features:**
- `type` syntax for type aliases
- Supports parameterized type aliases
- Aliases are structurally equivalent to the original type

**Further reading:**
- [Scala Documentation - Type Aliases](https://docs.scala-lang.org/tour/type-aliases.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Type alias
typealias UserId = Int
typealias StringArray = [String]

let userId: UserId = 42
let names: StringArray = ["Alice", "Bob"]

// Type alias with generics
typealias Pair<T> = (T, T)

let pair: Pair<Int> = (1, 2)
```

**Special features:**
- `typealias` syntax for type aliases
- Supports generic type aliases
- Can be used for all types, including tuple types

**Further reading:**
- [Swift Documentation - Type Aliases](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/thebasics/#Type-Aliases)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Type alias
type UserId = number;
type StringArray = string[];

const userId: UserId = 42;
const names: StringArray = ["Alice", "Bob"];

// Type alias with generics
type Pair<T> = [T, T];

const pair: Pair<number> = [1, 2];
```

**Special features:**
- `type` syntax for type aliases
- Supports generic type aliases
- Can be used for all types, including union and intersection types

**Further reading:**
- [TypeScript Documentation - Type Aliases](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Type Alias with deftype
(deftype age () '(integer 0 150))
(deftype name () 'string)
(deftype coordinate () '(cons number number))

(typep 25 'age)           ; T
(typep -1 'age)           ; NIL
(typep "Alice" 'name)     ; T
```

**Special features:**
- Type Aliases defined via `deftype`
- Supports parameterized type definitions
- Types can contain constraining conditions (e.g., value ranges)
- Checkable with `typep` and `subtypep`

**Further reading:**
- [Common Lisp HyperSpec - deftype](http://www.lispworks.com/documentation/HyperSpec/Body/m_deftp.htm)

</TabItem>
<TabItem value="d" label="D">

```d
// Type Aliases with alias
alias UserId = int;
alias StringList = string[];
alias Callback = void delegate(int);

UserId id = 42;
StringList names = ["Alice", "Bob"];
Callback cb = (int x) { writeln(x); };

// Alias for template instantiations
alias IntMap = int[string];
IntMap scores;
scores["Alice"] = 100;
```

**Special features:**
- `alias` creates an alternative name for an existing type
- Supports aliases for templates, functions, and symbols
- No new type – just an alternative name
- `alias this` enables implicit conversion between types

**Further reading:**
- [D Language Specification - Alias Declarations](https://dlang.org/spec/declaration.html#alias)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Type Alias for Records
type alias Point = { x : Float, y : Float }
type alias Person = { name : String, age : Int }

-- Type Alias creates constructor function
p : Point
p = Point 1.0 2.0  -- Equivalent to { x = 1.0, y = 2.0 }

-- Type Alias for simple types
type alias Name = String
type alias Age = Int
```

**Special features:**
- `type alias` creates an alternative name for an existing type
- Record aliases automatically create a constructor function
- Type Aliases are structurally equivalent to the original type
- Difference from `type`: `type alias` is just a name, `type` is a new type

**Further reading:**
- [Elm Documentation - Type Aliases](https://guide.elm-lang.org/types/type_aliases.html)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// Type Alias
pub type UserId = Int
pub type UserName = String
pub type Headers = List(#(String, String))
```

**Special features:**
- Type Aliases are defined with `type Name = OriginalType`
- Simplify complex type signatures
- Are transparent aliases (no new type)

**Further reading:**
- [Gleam Documentation - Type Aliases](https://tour.gleam.run/data-types/type-aliases/)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Type Aliases with typedef
typedef StringArray = Array<String>;
typedef Point = { x:Int, y:Int };
typedef Callback = Int -> String -> Void;

var items:StringArray = ["Apfel", "Banane"];
var p:Point = { x: 1, y: 2 };
```

**Special features:**
- `typedef` creates Type Aliases
- Can be used for anonymous structures, function types, and complex generic types
- Typedefs use structural typing

**Further reading:**
- [Haxe Documentation - Type System - Typedef](https://haxe.org/manual/type-system-typedef.html)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Type Aliases
const StringOrInt = Union{String, Int}
const MyInt = Int64
const Point2D = Tuple{Float64, Float64}

x::MyInt = 42
value::StringOrInt = "Hello"
point::Point2D = (1.0, 2.0)
```

**Special features:**
- Type Aliases are defined with `const`
- Can be used for Union Types, tuple types, and other types
- Aliases are fully interchangeable with the original type

**Further reading:**
- [Julia Documentation - Type Aliases](https://docs.julialang.org/en/v1/manual/types/#Type-Aliases)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Type Aliases
alias user-id = int
alias string-list = list<string>
alias int-operation = (int) -> int

val userId: user-id = 42
val names: string-list = ["Alice", "Bob"]

// Funktions-Typ-Alias
val square: int-operation = fn(x) { x * x }
```

**Special features:**
- `alias` defines type aliases
- Aliases are fully transparent and interchangeable with the original type
- Supports generic aliases and function type aliases
- Useful for readability and documentation

**Further reading:**
- [Koka Language Guide - Type Aliases](https://koka-lang.github.io/koka/doc/book.html#sec-type-aliases)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Type Aliases
type
  Name = string
  Age = int
  IntList = seq[int]
  Callback = proc(x: int): int

var name: Name = "Alice"
var age: Age = 30
var numbers: IntList = @[1, 2, 3]
```

**Special features:**
- Type Aliases with `type Name = ExistingType` syntax
- Alias types are fully compatible with the base type
- For incompatible types: use `distinct`

**Further reading:**
- [Nim Documentation - Type Aliases](https://nim-lang.org/docs/manual.html#types-type-aliases)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Type Aliases
type
  TInteger = Integer;
  TMyString = String;
  TRealArray = array of Real;

var
  x: TInteger;
  name: TMyString;
begin
  x := 42;
  name := 'Hello';
end;
```

**Special features:**
- `type NewType = ExistingType` creates a new type (nominal alias)
- The new type is not compatible with the original type (nominal typing)
- For compatible aliases: `type TAlias = type Integer` creates a distinct type

**Further reading:**
- [Free Pascal Documentation - Type Declarations](https://www.freepascal.org/docs-html/ref/refse4.html)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Type Aliases
type Name = String
type Age = Int
type Point = { x :: Number, y :: Number }

-- Usage
greet :: Name -> String
greet name = "Hello, " <> name

p :: Point
p = { x: 1.0, y: 2.0 }
```

**Special features:**
- `type` keyword for Type Aliases
- Type Aliases are transparent (interchangeable with the original type)
- Supports parameterized Type Aliases: `type Pair a = { fst :: a, snd :: a }`

**Further reading:**
- [PureScript Documentation - Type Synonyms](https://github.com/purescript/documentation/blob/master/language/Types.md#type-synonyms)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Type Aliases
Point : { x : F64, y : F64 }
Name : Str
UserId : U64

origin : Point
origin = { x: 0.0, y: 0.0 }
```

**Special features:**
- Type Aliases are defined as type annotations
- Structurally equivalent to the original type
- Improve readability

**Further reading:**
- [Roc Documentation - Type Annotations](https://www.roc-lang.org/tutorial#type-annotations)

</TabItem>
<TabItem value="v" label="V">

```v
// Type Aliases
type MyInt = int
type Name = string
type Callback = fn (int) string

x := MyInt(42)
name := Name('Alice')
```

**Special features:**
- `type Name = ExistingType` for aliases
- Aliases are interchangeable with the original type
- Also usable for function types

**Further reading:**
- [V Documentation - Type Aliases](https://github.com/vlang/v/blob/master/doc/docs.md#type-aliases)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Type Aliases: const Alias = Type
const String = []const u8;
const Integer = i32;
const Float = f64;

const name: String = "Hello";
const count: Integer = 42;
const price: Float = 19.99;
```

**Special features:**
- Type Aliases are created with `const`
- Aliases are fully interchangeable with the original type
- No new types, just alternative names

**Further reading:**
- [Zig Documentation - Type Coercion](https://ziglang.org/documentation/master/#Type-Coercion)

</TabItem>
</Tabs>


## 3.9.2. Typedef (C-style)

Introduction of an alternative name for a type with C syntax.

### Languages {#languages}

<Tabs availableTabs={['c', 'cpp', 'objective-c']}>
<TabItem value="c" label="C">

```c
// Typedef
typedef int UserId;
typedef char* String;

UserId userId = 42;
String name = "Alice";

// Typedef für struct
typedef struct {
    int x, y;
} Point;

Point p = {1, 2};

// Typedef für function pointer
typedef int (*Operation)(int, int);

int add(int a, int b) { return a + b; }
Operation op = add;
```

**Special features:**
- `typedef` syntax for type aliases
- Often used for structs to avoid the `struct` keyword
- Supports function pointer aliases

**Further reading:**
- [C Reference - Typedef](https://en.cppreference.com/w/c/language/typedef)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Typedef (C-style, since C++98)
typedef int UserId;
typedef std::vector<std::string> StringVector;

UserId userId = 42;
StringVector names = {"Alice", "Bob"};

// Typedef for struct
typedef struct {
    int x, y;
} Point;

Point p = {1, 2};

// Typedef for function pointer
typedef int (*Operation)(int, int);

int add(int a, int b) { return a + b; }
Operation op = add;
```

**Special features:**
- `typedef` syntax since C++98 (compatible with C)
- Often used for structs
- Supports function pointer aliases
- `using` syntax (since C++11) is preferred for modern C++ code

**Further reading:**
- [C++ Reference - Typedef](https://en.cppreference.com/w/cpp/language/typedef)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objective-c
// Typedef
typedef int UserId;
typedef NSString* String;

UserId userId = 42;
String name = @"Alice";

// Typedef for struct
typedef struct {
    int x, y;
} Point;

Point p = {1, 2};

// Typedef for block
typedef int (^Operation)(int, int);

Operation add = ^(int a, int b) {
    return a + b;
};
```

**Special features:**
- `typedef` syntax for type aliases (compatible with C)
- Often used for structs
- Supports block aliases (Objective-C specific)

**Further reading:**
- [Objective-C Documentation - Typedef](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html)

</TabItem>
</Tabs>


## 3.9.3. Type Casting (Explicit, Implicit, Safe, Unsafe)

Conversion of a value from one type to another type.

### Languages {#languages}

<Tabs availableTabs={['c', 'cpp', 'csharp', 'd', 'dart', 'fortran', 'go', 'java', 'julia', 'kotlin', 'nim', 'objective-c', 'object-pascal', 'octave', 'python', 'rust', 'scala', 'swift', 'typescript', 'v', 'zig']}>
<TabItem value="c" label="C">

```c
// Explicit cast
int x = 42;
double y = (double)x;

// Unsafe cast (no runtime checking)
int* ptr = (int*)malloc(sizeof(int));
*ptr = 42;

// Implicit conversion
int a = 10;
double b = a;  // Implicit conversion int -> double
```

**Special features:**
- Explicit casts with `(type)` syntax
- No runtime type checking (unsafe)
- Implicit conversions between compatible numeric types
- Pointer casts are possible but unsafe

**Further reading:**
- [C Reference - Type Conversions](https://en.cppreference.com/w/c/language/conversion)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Explicit cast
int x = 42;
double y = (double)x;

// Safe cast (as operator, returns null on failure)
object obj = "Hello";
string str = obj as string;

// Unsafe cast (throws exception on failure)
object obj2 = "World";
string str2 = (string)obj2;

// Pattern matching (since C# 7.0)
if (obj is string s) {
    Console.WriteLine(s);
}
```

**Special features:**
- Explicit casts with `(type)` syntax
- `as` operator for safe casts (returns null on failure)
- `is` operator for type checking
- Pattern matching since C# 7.0 for safe type conversion

**Further reading:**
- [C# Documentation - Casting and Type Conversions](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/types/casting-and-type-conversions)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Explicit cast (C-style)
int x = 42;
double y = (double)x;

// C++ cast operators
int* ptr = new int(42);
void* vptr = static_cast<void*>(ptr);

// Dynamic cast (safe, only for polymorphism)
Base* base = new Derived();
Derived* derived = dynamic_cast<Derived*>(base);

// Const cast
const int* cptr = &x;
int* mutable = const_cast<int*>(cptr);

// Reinterpret cast (unsafe)
int value = 42;
double* dptr = reinterpret_cast<double*>(&value);
```

**Special features:**
- C-style casts: `(type)`
- `static_cast` for safe static conversions
- `dynamic_cast` for safe runtime casts with polymorphism
- `const_cast` for const/volatile modification
- `reinterpret_cast` for unsafe low-level conversions

**Further reading:**
- [C++ Reference - Type Conversions](https://en.cppreference.com/w/cpp/language/explicit_cast)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Explicit cast
int x = 42;
double y = x.toDouble();

// Safe cast (as operator)
Object obj = "Hello";
String str = obj as String;

// Unsafe cast (throws exception on failure)
Object obj2 = "World";
String str2 = obj2 as String;

// Type check
if (obj is String) {
  print(obj.length);
}
```

**Special features:**
- Explicit conversion with methods like `toDouble()`, `toString()`
- `as` operator for explicit casts (throws exception on failure)
- `is` operator for type checking
- Pattern matching with `is` operator

**Further reading:**
- [Dart Documentation - Type System](https://dart.dev/guides/language/type-system)

</TabItem>
<TabItem value="go" label="Go">

```go
// Type assertion (safe, returns ok on failure)
var i interface{} = "hello"
s, ok := i.(string)
if ok {
    fmt.Println(s)
}

// Type assertion (unsafe, panics on failure)
var j interface{} = 42
str := j.(string)  // Panic!

// Type switch
switch v := i.(type) {
case string:
    fmt.Println("string:", v)
case int:
    fmt.Println("int:", v)
}
```

**Special features:**
- Type assertion with `value.(type)` syntax
- Two-value form returns `ok` bool
- One-value form panics on failure
- Type switch for safe type conversion

**Further reading:**
- [Go Documentation - Type Assertions](https://go.dev/ref/spec#Type_assertions)

</TabItem>
<TabItem value="java" label="Java">

```java
// Explicit cast
int x = 42;
double y = (double)x;

// Safe cast (ClassCastException on failure)
Object obj = "Hello";
String str = (String)obj;

// Type check
if (obj instanceof String) {
    String s = (String)obj;
    System.out.println(s);
}

// Pattern matching (since Java 16)
if (obj instanceof String s) {
    System.out.println(s);
}
```

**Special features:**
- Explicit casts with `(type)` syntax
- `instanceof` operator for type checking
- Pattern matching since Java 16 for safe type conversion
- Throws `ClassCastException` on failed casts

**Further reading:**
- [Java Documentation - Type Casting](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Explicit cast (unsafe, throws exception on failure)
val obj: Any = "Hello"
val str: String = obj as String

// Safe cast (returns null on failure)
val obj2: Any = 42
val str2: String? = obj2 as? String

// Type check
if (obj is String) {
    println(obj.length)
}

// Smart cast (automatisch nach is-Prüfung)
if (obj is String) {
    val length = obj.length  // Automatischer Cast
}
```

**Special features:**
- `as` operator for explicit casts (throws exception on failure)
- `as?` operator for safe casts (returns null on failure)
- `is` operator for type checking
- Smart casts: Automatic cast after `is` check

**Further reading:**
- [Kotlin Documentation - Type Checks and Casts](https://kotlinlang.org/docs/typecasts.html)

</TabItem>
<TabItem value="python" label="Python">

```python
# Explicit cast
x = 42
y = float(x)

# Type conversion functions
s = str(42)
i = int("42")
f = float("3.14")

# Type check
if isinstance(x, int):
    print("x is an integer")

# Duck typing (no explicit casts needed)
def process(value):
    return value.upper()  # Works for all objects with upper()
```

**Special features:**
- Explicit conversion with type functions (`int()`, `str()`, `float()`)
- `isinstance()` for type checking
- Duck typing: No explicit casts needed if objects have compatible methods
- Dynamic typing: Types are determined at runtime

**Further reading:**
- [Python Documentation - Type Conversion](https://docs.python.org/3/library/functions.html#type-conversion)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Explicit cast (as keyword)
let x: i32 = 42;
let y: f64 = x as f64;

// Unsafe cast (transmute, sehr gefährlich)
use std::mem;
let bytes: [u8; 4] = [0x00, 0x00, 0x00, 0x2A];
let value: i32 = unsafe { mem::transmute(bytes) };

// Type conversion with From/Into traits
let s: String = "hello".to_string();
let bytes: Vec<u8> = s.into_bytes();
```

**Special features:**
- `as` keyword for explicit casts between primitive types
- `transmute` for unsafe low-level conversions (only in `unsafe` blocks)
- `From`/`Into` traits for safe type conversions
- Compiler checks casts at compile time

**Further reading:**
- [Rust Documentation - Type Casting](https://doc.rust-lang.org/rust-by-example/types/cast.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Explicit cast
val x: Int = 42
val y: Double = x.toDouble

// Type check and cast
val obj: Any = "Hello"
if (obj.isInstanceOf[String]) {
  val str = obj.asInstanceOf[String]
  println(str)
}

// Pattern matching (safe cast)
obj match {
  case str: String => println(str)
  case _ => println("Not a string")
}
```

**Special features:**
- Explicit conversion with methods like `toDouble()`, `toString()`
- `asInstanceOf` for explicit casts (throws exception on failure)
- `isInstanceOf` for type checking
- Pattern matching for safe type conversion

**Further reading:**
- [Scala Documentation - Type Casting](https://docs.scala-lang.org/tour/type-casting.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Explicit cast (as operator, throws exception on failure)
let obj: Any = "Hello"
let str = obj as! String

// Safe cast (as? operator, returns nil on failure)
let obj2: Any = 42
let str2 = obj2 as? String

// Type check
if obj is String {
    print("It's a string")
}

// Pattern matching (safe cast)
if let str = obj as? String {
    print(str)
}
```

**Special features:**
- `as!` operator for explicit casts (throws exception on failure)
- `as?` operator for safe casts (returns nil on failure)
- `is` operator for type checking
- Optional binding with `if let` for safe type conversion

**Further reading:**
- [Swift Documentation - Type Casting](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/typecasting/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Type assertion (as syntax)
const obj: unknown = "Hello";
const str = obj as string;

// Type assertion (angle bracket syntax)
const str2 = <string>obj;

// Type guard (safe check)
function isString(value: unknown): value is string {
    return typeof value === "string";
}

if (isString(obj)) {
    console.log(obj.toUpperCase());  // Type narrowing
}

// Type narrowing with typeof
if (typeof obj === "string") {
    console.log(obj.length);
}
```

**Special features:**
- Type assertions with `as` syntax or angle bracket syntax
- Type guards for safe type checking at runtime
- Type narrowing: Compiler narrows type after check
- Only at compile time, no runtime type checking

**Further reading:**
- [TypeScript Documentation - Type Assertions](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions)

</TabItem>
<TabItem value="d" label="D">

```d
// Type Casting mit cast
double pi = 3.14159;
int truncated = cast(int) pi;  // 3

// Pointer Casts
int x = 42;
void* vp = &x;
int* ip = cast(int*) vp;

// Klassen-Cast (gibt null zurück bei Fehler)
class Base {}
class Derived : Base {}
Base b = new Derived();
Derived d = cast(Derived) b;  // Erfolgreich

// Unsichere Casts
float f = 1.0f;
int bits = *cast(int*)&f;  // Reinterpret Cast (unsicher)
```

**Special features:**
- `cast` for explicit conversion between types
- Class casts return `null` on failed conversion
- Pointer casts are possible but unsafe
- `@safe` code prohibits dangerous casts

**Further reading:**
- [D Language Specification - Cast Expressions](https://dlang.org/spec/expression.html#cast_expressions)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Explicit type conversion with intrinsic functions
real :: r = 3.7
integer :: i
double precision :: d

i = INT(r)       ! REAL → INTEGER (truncation): 3
d = DBLE(i)      ! INTEGER → DOUBLE PRECISION: 3.0
r = REAL(i)      ! INTEGER → REAL: 3.0
```

**Special features:**
- Explicit conversion via intrinsic functions: `INT()`, `REAL()`, `DBLE()`, `CMPLX()`
- `INT()` truncates (no rounding)
- `NINT()` for rounding to nearest integer
- `TRANSFER()` for bit-level reinterpretation (unsafe)

**Further reading:**
- [Fortran Standard - Type Conversion Functions](https://gcc.gnu.org/onlinedocs/gfortran/Type-conversion-functions.html)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Explizite Konvertierung mit convert()
x = convert(Float64, 42)       # 42.0
y = convert(Int, 3.0)          # 3

# Typ-Konstruktoren
a = Float64(42)                # 42.0
b = Int(3.7)                   # Fehler: InexactError
c = Int(trunc(3.7))            # 3

# String-Konvertierungen
s = string(42)                 # "42"
n = parse(Int, "42")           # 42
```

**Special features:**
- `convert()` for type conversions
- Type constructors for direct conversion
- `InexactError` on loss of information (e.g., Float → Int)
- `parse()` for string-to-number conversions

**Further reading:**
- [Julia Documentation - Conversion and Promotion](https://docs.julialang.org/en/v1/manual/conversion-and-promotion/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Type Casting
var x: int = 42

# Safe Type Conversion (prüft Grenzen)
var f: float = float(x)
var i: int32 = int32(x)

# Unsafe Cast (keine Prüfung)
var ptr = cast[pointer](addr(x))
var back = cast[ptr int](ptr)

# String-Konvertierung
var s: string = $x  # "42"
```

**Special features:**
- Safe conversion with `Type(value)` syntax
- Unsafe cast with `cast[Type](value)` for low-level operations
- `$` operator for string conversion
- No implicit conversions (except with `converter` procedures)

**Further reading:**
- [Nim Documentation - Type Conversions](https://nim-lang.org/docs/manual.html#type-relations-type-conversions)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Type Casting
var
  i: Integer;
  r: Double;
  b: Byte;
  obj: TObject;
  person: TPerson;
begin
  // Explicit cast (value types)
  r := 3.14;
  i := Integer(Trunc(r));
  b := Byte(i);

  // Safe object cast (as)
  obj := TPerson.Create;
  person := obj as TPerson;

  // Unsafe object cast
  person := TPerson(obj);
end;
```

**Special features:**
- `TypeName(expr)` for explicit casts on value types
- `as` for safe class casts (throws `EInvalidCast` on error)
- `TypeName(obj)` for unsafe class casts (no checking)
- Implicit conversion: Integer → Real

**Further reading:**
- [Delphi Documentation - Typecasts](https://docwiki.embarcadero.com/RADStudio/en/Typecasts)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// C-style Cast
double pi = 3.14159;
int intPi = (int)pi; // 3

// Object cast
id obj = @"Hello";
NSString *str = (NSString *)obj;

// Safe cast with type checking
if ([obj isKindOfClass:[NSString class]]) {
    NSString *safeStr = (NSString *)obj;
}
```

**Special features:**
- C-style casts for primitive types
- Object casts with bracket syntax
- No compiler error on invalid object cast (runtime error possible)
- Safe casts through prior `isKindOfClass:` check

**Further reading:**
- [Apple Documentation - Programming with Objective-C](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
% Type Casting: Explicit type conversions
x = 3.14;
int_val = int32(x);       % double → int32
char_val = char(65);       % int → char ('A')
double_val = double(int_val); % int32 → double
logical_val = logical(1);  % numeric → logical
str_val = num2str(42);     % numeric → string
num_val = str2double("3.14"); % string → double
```

**Special features:**
- Explicit conversion via type functions: `double()`, `int32()`, `uint8()`, `char()`, `logical()`
- `num2str()` and `str2double()` / `str2num()` for string conversions
- No unsafe casts (dynamically typed)

**Further reading:**
- [GNU Octave Documentation - Numeric Data Types](https://octave.org/doc/v8.1.0/Numeric-Data-Types.html)

</TabItem>
<TabItem value="v" label="V">

```v
// Type Casting
x := 42
f := f64(x)        // int -> f64
b := u8(x)         // int -> u8
s := x.str()       // int -> string

y := 3.14
i := int(y)        // f64 -> int (truncated)
```

**Special features:**
- Explicit casting with `Type(value)` syntax
- No implicit casting between numeric types
- `.str()` method for string conversion
- Unsafe casts possible in `unsafe` blocks

**Further reading:**
- [V Documentation - Casting](https://github.com/vlang/v/blob/master/doc/docs.md#casting)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Type Casting: Explicit casts via builtins
const x: i32 = 42;
const y: u8 = @intCast(x);           // Integer cast (safe)
const z: f64 = @floatFromInt(x);     // Int to Float

const a: f64 = 3.14;
const b: f32 = @floatCast(a);        // Float cast (safe)
const c: i32 = @intFromFloat(a);     // Float to Int

// Pointer casts
var value: i32 = 42;
const ptr: *i32 = &value;
const raw: *anyopaque = @ptrCast(ptr);  // Pointer cast
```

**Special features:**
- All casts are explicit via builtin functions
- `@intCast`: Integer-to-integer conversion
- `@floatCast`: Float-to-float conversion
- `@floatFromInt` / `@intFromFloat`: Conversion between Int and Float
- `@ptrCast`: Pointer conversion
- Overflow on casts triggers a runtime error (in debug builds)

**Further reading:**
- [Zig Documentation - Builtin Functions](https://ziglang.org/documentation/master/#Builtin-Functions)

</TabItem>
</Tabs>


## 3.9.4. Implicit Conversions

Automatic type conversion without explicit casts.

### Languages {#languages}

<Tabs availableTabs={['c', 'cpp', 'csharp', 'd', 'fortran', 'go', 'java', 'lean4', 'nim', 'objective-c', 'octave', 'python', 'scala']} yellowTabs={['kotlin']} orangeTabs={['dart', 'rust', 'swift']}>
<TabItem value="c" label="C">

```c
// Implicit conversion between numeric types
int x = 42;
double y = x;  // int -> double

char c = 'A';
int i = c;  // char -> int

// Pointer conversion
int* ptr = NULL;  // NULL is void*
```

**Special features:**
- Automatic conversion between compatible numeric types
- `char` is implicitly converted to `int`
- `NULL` (void*) is implicitly converted to any pointer type
- No conversion between incompatible types

**Further reading:**
- [C Reference - Implicit Conversions](https://en.cppreference.com/w/c/language/conversion)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Implicit conversion between numeric types
int x = 42;
double y = x;  // int -> double

// Implicit conversion with user-defined operators
public struct Distance {
    public double Meters { get; }
    public Distance(double meters) => Meters = meters;
    
    public static implicit operator Distance(double meters) {
        return new Distance(meters);
    }
}

Distance d = 100.0;  // double -> Distance
```

**Special features:**
- Automatic conversion between compatible numeric types
- User-defined implicit conversions with `implicit operator`
- No data loss with implicit conversions
- Explicit conversions with `explicit operator` possible

**Further reading:**
- [C# Documentation - User-defined Conversions](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/user-defined-conversion-operators)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Implicit conversion between numeric types
int x = 42;
double y = x;  // int -> double

// Implicit conversion with constructors
class Distance {
public:
    Distance(double meters) : meters_(meters) {}
    double meters() const { return meters_; }
private:
    double meters_;
};

Distance d = 100.0;  // double -> Distance

// Implicit conversion with conversion operators
class MyInt {
public:
    operator int() const { return value_; }
private:
    int value_;
};
```

**Special features:**
- Automatic conversion between compatible numeric types
- Constructors with one parameter enable implicit conversion
- Conversion operators for user-defined conversions
- `explicit` keyword prevents implicit conversion

**Further reading:**
- [C++ Reference - Implicit Conversions](https://en.cppreference.com/w/cpp/language/implicit_conversion)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Implicit conversion between numeric types
int x = 42;
double y = x.toDouble();  // Explicit required

// Extension methods enable implicit conversion
extension IntExtension on int {
  Distance toDistance() => Distance(this.toDouble());
}

class Distance {
  final double meters;
  Distance(this.meters);
}

int meters = 100;
Distance d = meters.toDistance();  // Explicit required
```

**Special features:**
- No automatic implicit conversions between numeric types
- Explicit conversion with methods like `toDouble()`, `toInt()`
- Extension methods enable user-defined conversions
- Type safety is ensured through explicit conversions

**Further reading:**
- [Dart Documentation - Type System](https://dart.dev/guides/language/type-system)

</TabItem>
<TabItem value="go" label="Go">

```go
// No implicit conversions between numeric types
var x int = 42
var y float64 = float64(x)  // Explicit required

// Implicit conversion only with untyped constants
const c = 42
var i int = c      // OK
var f float64 = c  // OK

// Interface satisfaction (implicit)
type Writer interface {
    Write([]byte) (int, error)
}

type MyWriter struct{}
func (m MyWriter) Write([]byte) (int, error) { return 0, nil }

var w Writer = MyWriter{}  // Implicit conversion
```

**Special features:**
- No implicit conversions between numeric types
- Explicit conversion with type casts required
- Untyped constants can be implicitly converted
- Interface satisfaction is implicit

**Further reading:**
- [Go Documentation - Conversions](https://go.dev/ref/spec#Conversions)

</TabItem>
<TabItem value="java" label="Java">

```java
// Implicit conversion between numeric types (Widening)
int x = 42;
double y = x;  // int -> double (widening)

byte b = 10;
int i = b;  // byte -> int (widening)

// No implicit conversion on Narrowing
double d = 3.14;
// int i2 = d;  // Compilation error!

// Boxing (automatic since Java 5)
int primitive = 42;
Integer boxed = primitive;  // Autoboxing
```

**Special features:**
- Automatic conversion on widening (smaller to larger type)
- No implicit conversion on narrowing (larger to smaller type)
- Autoboxing/Unboxing between primitive types and wrapper classes
- No implicit conversion between incompatible reference types

**Further reading:**
- [Java Documentation - Type Conversions](https://docs.oracle.com/javase/specs/jls/se17/html/jls-5.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Implicit conversion between numeric types (Widening)
val x: Int = 42
val y: Double = x.toDouble()  // Explicit required

// Smart casts (implicit after type check)
val obj: Any = "Hello"
if (obj is String) {
    val length = obj.length  // Implicit cast
}

// Implicit conversion with extension functions
fun Int.toDistance(): Distance = Distance(this.toDouble())

val meters = 100
val d: Distance = meters.toDistance()  // Explicit required
```

**Special features:**
- No automatic implicit conversions between numeric types
- Explicit conversion with methods like `toDouble()`, `toInt()`
- Smart casts: Automatic conversion after type check
- Extension functions enable user-defined conversions

**Further reading:**
- [Kotlin Documentation - Type Checks and Casts](https://kotlinlang.org/docs/typecasts.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Implicit Conversions with Coe Type Class
structure Meters where
  val : Float

-- Coe instance for implicit conversion
instance : Coe Meters Float where
  coe m := m.val

def distance : Meters := ⟨42.0⟩
def result : Float := distance  -- Implicit conversion via Coe

-- Nat → Int is implicit by default
def n : Nat := 5
def i : Int := n  -- Implicit conversion Nat → Int
```

**Special features:**
- `Coe` Type Class for user-defined implicit conversions
- `CoeSort` for conversion to types, `CoeFun` for conversion to functions
- Nat → Int conversion is available by default
- Compiler automatically applies registered coercions

**Further reading:**
- [Lean 4 Documentation - Type Coercions](https://lean-lang.org/theorem_proving_in_lean4/type_classes.html#coercions)

</TabItem>
<TabItem value="python" label="Python">

```python
# Implicit conversion between numeric types
x = 42  # int
y = float(x)  # Explicit required for explicit conversion

# Duck typing (implicit behavior)
def process(value):
    return value.upper()  # Works for all objects with upper()

# Implicit conversion in operators
result = 10 + 3.14  # int + float -> float
```

**Special features:**
- Dynamic typing: Types are determined at runtime
- Duck typing: Objects are implicitly treated if they have compatible methods
- Implicit conversion in arithmetic operations
- No explicit type declarations needed

**Further reading:**
- [Python Documentation - Type Conversion](https://docs.python.org/3/library/functions.html#type-conversion)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// No implicit conversions between numeric types
let x: i32 = 42;
let y: f64 = x as f64;  // Explicit required

// Implicit conversion with From/Into traits
use std::convert::From;

struct Distance(f64);

impl From<f64> for Distance {
    fn from(meters: f64) -> Self {
        Distance(meters)
    }
}

let d: Distance = 100.0.into();  // Implicit via Into trait
```

**Special features:**
- No automatic implicit conversions between numeric types
- Explicit conversion with `as` keyword required
- `From`/`Into` traits enable user-defined conversions
- Type safety is ensured through explicit conversions

**Further reading:**
- [Rust Documentation - Type Conversions](https://doc.rust-lang.org/book/ch19-04-advanced-types.html#type-aliases)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Implicit conversion with implicit functions
implicit def intToDistance(meters: Int): Distance = Distance(meters.toDouble)

case class Distance(meters: Double)

val d: Distance = 100  // Implicit conversion

// Implicit conversion with implicit classes (since Scala 2.10)
implicit class IntDistance(val meters: Int) extends AnyVal {
  def toDistance: Distance = Distance(meters.toDouble)
}

val d2: Distance = 100.toDistance
```

**Special features:**
- Implicit conversions with `implicit def` functions
- Implicit classes (since Scala 2.10) for extension method-like functionality
- Implicit conversions must be explicitly imported
- Can lead to unexpected behavior, so use with caution

**Further reading:**
- [Scala Documentation - Implicit Conversions](https://docs.scala-lang.org/tour/implicit-conversions.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Implicit conversion between numeric types (Widening)
let x: Int = 42
let y: Double = Double(x)  // Explicit required

// Implicit conversion with ExpressibleBy protocols
struct Distance {
    let meters: Double
}

extension Distance: ExpressibleByFloatLiteral {
    init(floatLiteral value: Double) {
        self.meters = value
    }
}

let d: Distance = 100.0  // Implicit conversion
```

**Special features:**
- No automatic implicit conversions between numeric types
- Explicit conversion with initializers required
- `ExpressibleBy` protocols enable implicit conversion of literals
- Type safety is ensured through explicit conversions

**Further reading:**
- [Swift Documentation - Type Conversions](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/thebasics/)

</TabItem>
<TabItem value="d" label="D">

```d
// Implicit conversions
byte b = 42;
int i = b;        // byte → int
long l = i;       // int → long
double d = i;     // int → double

// Array conversions
immutable(char)[] s = "hello";   // string
const(char)[] cs = s;            // string → const(char)[]

// Enum to base type
enum Color { red, green, blue }
int colorVal = Color.red;  // enum → int
```

**Special features:**
- Widening conversions automatic (e.g., `int` → `long`)
- No implicit narrowing (e.g., `long` → `int` not allowed)
- `alias this` enables user-defined implicit conversions
- `immutable` → `const` implicitly possible

**Further reading:**
- [D Language Specification - Implicit Conversions](https://dlang.org/spec/type.html#implicit-conversions)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Implicit conversions
integer :: i = 42
real :: r
double precision :: d

r = i       ! INTEGER → REAL (implicit)
d = r       ! REAL → DOUBLE PRECISION (implicit)
i = 3.7     ! REAL → INTEGER (implicit, truncation): 3
```

**Special features:**
- Implicit conversion in assignments between numeric types
- On conversion REAL → INTEGER truncation occurs (not rounded)
- Implicit conversion in mixed expressions (the more precise type is retained)

**Further reading:**
- [Fortran Standard - Type Conversion](https://gcc.gnu.org/onlinedocs/gfortran/Type-conversion.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Implicit Conversions with converter
type
  Celsius = distinct float
  Fahrenheit = distinct float

converter toFahrenheit(c: Celsius): Fahrenheit =
  Fahrenheit(float(c) * 9.0 / 5.0 + 32.0)

var temp: Celsius = Celsius(100.0)
var fTemp: Fahrenheit = temp  # implicit conversion
```

**Special features:**
- `converter` procedures define implicit conversions
- Compiler automatically applies converters
- Should be used sparingly (can cause confusion)

**Further reading:**
- [Nim Documentation - Converters](https://nim-lang.org/docs/manual.html#converters)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Implicit conversion with numeric types
int intVal = 42;
double doubleVal = intVal;    // int → double
long longVal = intVal;        // int → long

// Implicit conversion in expressions
int a = 5;
double b = 2.5;
double result = a + b; // a is implicitly converted to double
```

**Special features:**
- C-style implicit conversions (Widening Conversions)
- Automatic promotion in mixed expressions
- Narrowing Conversions generate compiler warnings
- No implicit conversion between object types

**Further reading:**
- [Apple Documentation - Programming with Objective-C](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
% Implicit Conversions: Automatic conversion
int_val = int32(5);
result = int_val + 3.14;  % int32 is converted to double

% Logical to Numeric
flag = true;
sum = flag + 5;  % logical is converted to 1, result: 6
```

**Special features:**
- Arithmetic operations automatically convert to the common type
- `logical` is converted to 0/1 in numeric contexts
- Integer types are converted to `double` in operations with floating-point numbers

**Further reading:**
- [GNU Octave Documentation - Numeric Data Types](https://octave.org/doc/v8.1.0/Numeric-Data-Types.html)

</TabItem>
</Tabs>


## 3.9.5. Implicit Variable Declaration

Variable declaration without explicit type specification, type is automatically inferred.

### Languages {#sprachen}

<Tabs availableTabs={['csharp', 'dart', 'fortran', 'go', 'haskell', 'java', 'kotlin', 'lua', 'matlab', 'mercury', 'octave', 'prolog', 'python', 'rust', 'scala', 'swift', 'typescript']}>
<TabItem value="csharp" label="C#">

```csharp
// var keyword (since C# 3.0)
var x = 42;  // int
var name = "Alice";  // string
var numbers = new List<int>();  // List<int>

// var cannot be used for fields
class MyClass {
    // private var field;  // Compilation error!
    private int field = 42;  // Explicit required
}
```

**Special features:**
- `var` keyword since C# 3.0 for local variables
- Type is inferred at compile time
- Cannot be used for fields, parameters, or return types
- Must be initialized

**Further reading:**
- [C# Documentation - Implicitly Typed Local Variables](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/statements/declarations#implicitly-typed-local-variables)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// var keyword
var x = 42;  // int
var name = "Alice";  // String
var numbers = <int>[];  // List<int>

// final and const with var
final var y = 10;  // Compilation error! var not with final/const
final z = 10;  // final int
const w = 20;  // const int
```

**Special features:**
- `var` keyword for local variables
- Type is inferred at compile time
- `final` and `const` can be used without type
- `var` cannot be combined with `final` or `const`

**Further reading:**
- [Dart Documentation - Variables](https://dart.dev/guides/language/language-tour#variables)

</TabItem>
<TabItem value="go" label="Go">

```go
// Short variable declaration (:=)
x := 42  // int
name := "Alice"  // string
numbers := []int{1, 2, 3}  // []int

// Multiple variables
a, b := 10, 20  // int, int

// Type inference for functions
func add(x, y int) int {
    return x + y
}

result := add(1, 2)  // int
```

**Special features:**
- `:=` syntax for Short Variable Declaration
- Type is inferred at compile time
- Can declare multiple variables simultaneously
- Only for local variables, not for package-level variables

**Further reading:**
- [Go Documentation - Short Variable Declarations](https://go.dev/ref/spec#Short_variable_declarations)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Type inference
x = 42  -- Num a => a
name = "Alice"  -- [Char]
numbers = [1, 2, 3]  -- Num a => [a]

-- Explicit type annotation possible
x' :: Int
x' = 42

-- Type inference for functions
add x y = x + y  -- Num a => a -> a -> a
```

**Special features:**
- Complete type inference (Hindley-Milner)
- Types are inferred at compile time
- Explicit type annotations are optional but recommended
- Polymorphic types are automatically inferred

**Further reading:**
- [Haskell Documentation - Type Inference](https://www.haskell.org/onlinereport/haskell2010/haskellch4.html#x10-750004.2)

</TabItem>
<TabItem value="java" label="Java">

```java
// var keyword (since Java 10)
var x = 42;  // int
var name = "Alice";  // String
var numbers = new ArrayList<Integer>();  // ArrayList<Integer>

// var cannot be used for fields
class MyClass {
    // private var field;  // Compilation error!
    private int field = 42;  // Explicit required
}
```

**Special features:**
- `var` keyword since Java 10 for local variables
- Type is inferred at compile time
- Cannot be used for fields, method parameters, or return types
- Must be initialized

**Further reading:**
- [Java Documentation - Local Variable Type Inference](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// var and val with type inference
var x = 42  // Int
val name = "Alice"  // String
val numbers = listOf(1, 2, 3)  // List<Int>

// Explicit type annotation possible
var y: Int = 10
val z: String = "Hello"

// Type inference for functions
fun add(x: Int, y: Int) = x + y  // Int
```

**Special features:**
- `var` and `val` with type inference
- Type is inferred at compile time
- Explicit type annotations are optional
- Can be used for local variables, properties, and functions

**Further reading:**
- [Kotlin Documentation - Type Inference](https://kotlinlang.org/docs/type-inference.html)

</TabItem>
<TabItem value="python" label="Python">

```python
# Implicit variable declaration (dynamic typing)
x = 42  # int
name = "Alice"  # str
numbers = [1, 2, 3]  # list

# Types are determined at runtime
x = "Hello"  # Now str

# Type hints (optional, since Python 3.5)
x: int = 42
name: str = "Alice"
```

**Special features:**
- Dynamic typing: variables have no fixed type
- Types are determined at runtime
- Variables can change their type at runtime
- Type hints (since Python 3.5) for static type analysis, but not at runtime

**Further reading:**
- [Python Documentation - Type Hints](https://docs.python.org/3/library/typing.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Type inference
let x = 42;  // i32
let name = "Alice";  // &str
let numbers = vec![1, 2, 3];  // Vec<i32>

// Explicit type annotation possible
let y: i32 = 10;
let z: String = "Hello".to_string();

// Type inference for functions
fn add(x: i32, y: i32) -> i32 {
    x + y
}

let result = add(1, 2);  // i32
```

**Special features:**
- Complete type inference
- Types are inferred at compile time
- Explicit type annotations are optional but sometimes necessary
- `let` bindings with type inference

**Further reading:**
- [Rust Documentation - Type Inference](https://doc.rust-lang.org/book/ch03-02-data-types.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// var and val with type inference
var x = 42  // Int
val name = "Alice"  // String
val numbers = List(1, 2, 3)  // List[Int]

// Explicit type annotation possible
var y: Int = 10
val z: String = "Hello"

// Type inference for functions
def add(x: Int, y: Int) = x + y  // Int
```

**Special features:**
- `var` and `val` with type inference
- Type is inferred at compile time
- Explicit type annotations are optional
- Can be used for local variables, properties, and functions

**Further reading:**
- [Scala Documentation - Type Inference](https://docs.scala-lang.org/tour/type-inference.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Type inference
var x = 42  // Int
let name = "Alice"  // String
let numbers = [1, 2, 3]  // [Int]

// Explicit type annotation possible
var y: Int = 10
let z: String = "Hello"

// Type inference for functions
func add(x: Int, y: Int) -> Int {
    return x + y
}

let result = add(1, 2)  // Int
```

**Special features:**
- `var` and `let` with type inference
- Type is inferred at compile time
- Explicit type annotations are optional
- Can be used for local variables, properties, and functions

**Further reading:**
- [Swift Documentation - Type Inference](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/thebasics/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Type inference
let x = 42;  // number
const name = "Alice";  // "Alice" (literal type)
const numbers = [1, 2, 3];  // number[]

// Explicit type annotation possible
let y: number = 10;
const z: string = "Hello";

// Type inference for functions
function add(x: number, y: number): number {
    return x + y;
}

const result = add(1, 2);  // number
```

**Special features:**
- Type inference for variables and functions
- Type is inferred at compile time
- Explicit type annotations are optional
- Literal types are inferred for `const` variables

**Further reading:**
- [TypeScript Documentation - Type Inference](https://www.typescriptlang.org/docs/handbook/type-inference.html)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Implicit variable declaration (default behavior)
! Variables starting with I-N are INTEGER
! Variables starting with A-H, O-Z are REAL
i = 42        ! implicitly INTEGER
x = 3.14      ! implicitly REAL
name = 2.71   ! implicitly REAL (starts with n = INTEGER!)
```

**Special features:**
- Default behavior: variables are typed based on the first letter
- I-N → INTEGER, A-H and O-Z → REAL
- Can be disabled with `IMPLICIT NONE` (recommended for modern programs)
- Common source of errors with typos

**Further reading:**
- [Fortran Documentation - Implicit Statement](https://gcc.gnu.org/onlinedocs/gfortran/IMPLICIT.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Implicit variable declaration: Global variables
-- Variables without "local" are automatically global
count = 42          -- Global variable, implicitly declared
name = "Hello"      -- Global variable, implicitly declared

function example()
    result = 100    -- Global variable, implicitly declared (in function!)
end

-- Explicit local declaration for comparison
local x = 10       -- Local variable, explicitly with "local"

-- Global variables are stored in the _G table
print(_G["count"])  -- 42
```

**Special features:**
- Variables without `local` are automatically created as global variables in `_G`
- No declaration keyword required for global variables
- Common source of errors: forgotten `local` creates unintended global variables
- Linting tools like `luacheck` warn about implicit globals

**Further reading:**
- [Lua Reference Manual - Variables](https://www.lua.org/manual/5.4/manual.html#3.2)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% Implicit variable declaration by assignment
x = 42;           % double
name = "Hello";   % string
flag = true;      % logical
items = [1, 2, 3]; % double array
```

**Special features:**
- Variables are implicitly declared by assignment
- No keyword required for variable declaration
- Type is determined dynamically

**Further reading:**
- [MATLAB Documentation - Variables](https://www.mathworks.com/help/matlab/matlab_prog/creating-and-concatenating-matrices.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```mercury
% Implicit Variable Declaration: Variables are declared on first use
:- pred main(io::di, io::uo) is det.
main(!IO) :-
    X = 42,                    % int (implicitly declared, type inferred)
    Name = "Alice",            % string (implicitly declared, type inferred)
    Items = [1, 2, 3],        % list(int) (implicitly declared, type inferred)
    Result = X + 10,           % int (implicitly declared, type inferred)
    io.write_int(Result, !IO), io.nl(!IO),
    io.write_string(Name, !IO), io.nl(!IO),
    io.write(Items, !IO), io.nl(!IO).

% Variables do not need to be declared in advance.
% The compiler infers the type from the context.
```

**Special features:**
- Variables are implicitly declared on their first use (no `var`/`let` needed).
- The type is fully determined by type inference at compile time.
- Variable names must start with an uppercase letter (Prolog convention).
- Unlike dynamic languages, typing is still static and strict.

**Further reading:**
- [The Mercury Language Reference Manual - Variables](https://www.mercurylang.org/documentation/reference.html#Variables)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
% Implicit Variable Declaration: Assignment creates the variable
x = 42;
name = "Hello";
flag = true;
```

**Special features:**
- Variables are implicitly declared by first assignment
- No declaration keyword required
- Type is determined dynamically at runtime

**Further reading:**
- [GNU Octave Documentation - Variables](https://octave.org/doc/v8.1.0/Variables.html)

</TabItem>
</Tabs>


## 3.9.6. Implicit None (Fortran-style)

Disabling implicit variable declaration based on the first letter of the variable name.

### Languages {#sprachen}

<Tabs availableTabs={['fortran']}>
<TabItem value="fortran" label="Fortran">

```fortran
! Implicit typing (default behavior)
! Variables starting with I-N are INTEGER
! Variables starting with other letters are REAL
implicit integer (i-n)
implicit real (a-h,o-z)

i = 42        ! INTEGER (implicit)
x = 3.14      ! REAL (implicit)

! Implicit none (disables implicit typing)
implicit none

integer :: count
real :: value
double precision :: pi

! All variables must be explicitly declared
count = 10
value = 3.14
pi = 3.141592653589793d0
```

**Special features:**
- `implicit none` disables implicit typing
- Default behavior: variables are typed based on the first letter
- With `implicit none`, all variables must be explicitly declared
- Recommended for modern Fortran programs to avoid errors

**Further reading:**
- [Fortran Documentation - Implicit Statement](https://gcc.gnu.org/onlinedocs/gfortran/IMPLICIT.html)

</TabItem>
</Tabs>


## 3.9.7. Smart Casts

Automatic type conversion after type checking by the compiler.

### Languages {#sprachen}

<Tabs availableTabs={['dart', 'kotlin', 'scala', 'swift', 'typescript']}>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Smart cast after is check
val obj: Any = "Hello"
if (obj is String) {
    println(obj.length)  // Automatic cast to String
}

// Smart cast with when
when (obj) {
    is String -> println(obj.length)  // Automatic cast
    is Int -> println(obj * 2)  // Automatic cast
    else -> println("Unknown type")
}

// Smart cast with && and ||
if (obj is String && obj.length > 0) {
    println(obj.uppercase())  // Automatic cast
}
```

**Special features:**
- Automatic cast after `is` check
- Works with `if`, `when`, `&&`, `||`
- Compiler checks that variable is not changed between check and use
- Only works with `val`, not with `var`

**Further reading:**
- [Kotlin Documentation - Smart Casts](https://kotlinlang.org/docs/typecasts.html#smart-casts)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Smart cast with pattern matching
val obj: Any = "Hello"
obj match {
  case str: String => println(str.length)  // Automatic cast
  case num: Int => println(num * 2)  // Automatic cast
  case _ => println("Unknown type")
}

// Smart cast with if
if (obj.isInstanceOf[String]) {
  val str = obj.asInstanceOf[String]  // Explicit required
  println(str.length)
}
```

**Special features:**
- Pattern matching enables automatic type conversion
- `isInstanceOf`/`asInstanceOf` require explicit casts
- Pattern matching is the preferred method for Smart Casts
- Compiler checks types at compile time

**Further reading:**
- [Scala Documentation - Pattern Matching](https://docs.scala-lang.org/tour/pattern-matching.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Smart cast with optional binding
let obj: Any = "Hello"
if let str = obj as? String {
    print(str.count)  // Automatic cast to String
}

// Smart cast with guard
guard let str = obj as? String else {
    return
}
print(str.count)  // Automatic cast to String

// Smart cast with switch
switch obj {
case let str as String:
    print(str.count)  // Automatic cast
case let num as Int:
    print(num * 2)  // Automatic cast
default:
    print("Unknown type")
}
```

**Special features:**
- Optional binding with `if let` enables automatic type conversion
- `guard let` for early returns with automatic cast
- Pattern matching with `switch` enables automatic type conversion
- Compiler checks types at compile time

**Further reading:**
- [Swift Documentation - Type Casting](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/typecasting/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Type narrowing (Smart Cast)
function process(value: unknown) {
    if (typeof value === "string") {
        console.log(value.length);  // Automatic cast to string
    }
}

// Type narrowing with type guards
function isString(value: unknown): value is string {
    return typeof value === "string";
}

function process2(value: unknown) {
    if (isString(value)) {
        console.log(value.toUpperCase());  // Automatic cast to string
    }
}

// Type narrowing with instanceof
class MyClass {
    method() { return "hello"; }
}

function process3(value: unknown) {
    if (value instanceof MyClass) {
        value.method();  // Automatic cast to MyClass
    }
}
```

**Special features:**
- Type narrowing: compiler narrows type after check
- Works with `typeof`, `instanceof`, type guards
- Only at compile time, no runtime type checking
- Type guards enable custom type checks

**Further reading:**
- [TypeScript Documentation - Type Narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Smart Casts: Type Promotion
void processValue(Object value) {
  if (value is String) {
    // value is automatically promoted as String
    print(value.length);
    print(value.toUpperCase());
  }
  
  if (value is int) {
    // value is automatically promoted as int
    print(value.isEven);
  }
}

// Also with logical operators
void checkAndUse(Object? value) {
  if (value != null && value is String) {
    // value is promoted as non-nullable String
    print(value.length);
  }
}
```

**Special features:**
- Type Promotion works with `is` checks and null checks
- Promotion applies to the entire scope after the check
- Also works in `else` branches (negated promotion)
- Since Dart 2.0; improved Flow Analysis since Dart 2.12 (Sound Null Safety)

**Further reading:**
- [Dart Documentation - Type System](https://dart.dev/language/type-system)

</TabItem>
</Tabs>


## 3.9.8. Type Guards

Functions that check the type of a value at runtime and inform the compiler about the type.

### Languages {#sprachen}

<Tabs availableTabs={['typescript']}>
<TabItem value="typescript" label="TypeScript">

```typescript
// Type guard function
function isString(value: unknown): value is string {
    return typeof value === "string";
}

function process(value: unknown) {
    if (isString(value)) {
        console.log(value.toUpperCase());  // Type narrowing to string
    }
}

// Type guard for objects
interface User {
    name: string;
    age: number;
}

function isUser(value: unknown): value is User {
    return (
        typeof value === "object" &&
        value !== null &&
        "name" in value &&
        "age" in value &&
        typeof (value as any).name === "string" &&
        typeof (value as any).age === "number"
    );
}

function processUser(value: unknown) {
    if (isUser(value)) {
        console.log(value.name);  // Type narrowing to User
    }
}

// Type guard with instanceof
class MyClass {
    method() { return "hello"; }
}

function isMyClass(value: unknown): value is MyClass {
    return value instanceof MyClass;
}

function processClass(value: unknown) {
    if (isMyClass(value)) {
        value.method();  // Type narrowing to MyClass
    }
}
```

**Special features:**
- Type guard functions with `value is Type` syntax
- Check the type of a value at runtime
- Inform the compiler about the type (Type Narrowing)
- Can be used for primitive types, objects, and classes

**Further reading:**
- [TypeScript Documentation - Type Guards](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates)

</TabItem>
</Tabs>


## 3.9.9. Const Correctness

Guarantee that const-qualified values cannot be modified.

### Languages {#sprachen}

<Tabs availableTabs={['c', 'cpp', 'd', 'nim', 'objective-c', 'rust', 'zig']}>
<TabItem value="c" label="C">

```c
// const variables
const int x = 42;
// x = 10;  // Compilation error!

// const pointers
const int* ptr1;  // Pointer to const int
int* const ptr2;  // const pointer to int
const int* const ptr3;  // const pointer to const int

// const function parameters
void process(const int* data, size_t length) {
    // data cannot be modified
    // *data = 10;  // Compilation error!
}

// const return values
const char* getMessage() {
    return "Hello";
}
```

**Special features:**
- `const` qualifier for variables, pointers, and functions
- Compiler checks at compile time that const values are not modified
- `const` pointers can point to non-const data, but data cannot be modified through pointer
- `const` qualifier can be combined with `volatile`

**Further reading:**
- [C Reference - Type Qualifiers](https://en.cppreference.com/w/c/language/const)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// const variables
const int x = 42;
// x = 10;  // Compilation error!

// const member functions
class MyClass {
public:
    int getValue() const {  // const member function
        return value_;  // Cannot modify member
    }
    
    void setValue(int v) {
        value_ = v;  // Non-const member function
    }
    
private:
    int value_;
};

// const references
void process(const std::vector<int>& vec) {
    // vec cannot be modified
    // vec.push_back(10);  // Compilation error!
}

// constexpr (since C++11)
constexpr int square(int x) {
    return x * x;
}

constexpr int result = square(5);  // Compile-time evaluation
```

**Special features:**
- `const` qualifier for variables, member functions, references
- `const` member functions cannot modify object
- `constexpr` (since C++11) for compile-time constants
- `mutable` keyword enables modification in const member functions

**Further reading:**
- [C++ Reference - Const Correctness](https://isocpp.org/wiki/faq/const-correctness)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Immutable variables (default)
let x = 42;
// x = 10;  // Compilation error!

// Mutable variables
let mut y = 10;
y = 20;  // OK

// const (compile-time constants)
const MAX_VALUE: i32 = 100;

// Immutable references
fn process(data: &Vec<i32>) {
    // data cannot be modified
    // data.push(10);  // Compilation error!
}

// Mutable references
fn modify(data: &mut Vec<i32>) {
    data.push(10);  // OK
}

// const functions
const fn square(x: i32) -> i32 {
    x * x
}

const RESULT: i32 = square(5);  // Compile-time evaluation
```

**Special features:**
- Variables are immutable by default
- `mut` keyword for mutable variables and references
- `const` for compile-time constants
- `const fn` for compile-time functions
- Ownership system prevents unauthorized modifications

**Further reading:**
- [Rust Documentation - Variables and Mutability](https://doc.rust-lang.org/book/ch03-01-variables-and-mutability.html)

</TabItem>
<TabItem value="d" label="D">

```d
// Const Correctness: const, immutable, inout
const int x = 42;
// x = 10;  // Error: cannot modify const

immutable int y = 100;
// y = 200;  // Error: cannot modify immutable

// const Parameter
void printValue(const int[] arr) {
    // arr[0] = 10;  // Error: cannot modify const
    writeln(arr);
}

// immutable: deeply unchangeable, thread-safe
immutable string greeting = "Hello";

// inout: generic over mutability
inout(char)[] trim(inout(char)[] s) {
    // Returns const/mutable/immutable depending on input
    return s;
}
```

**Special features:**
- `const`: transitively unchangeable (but can be changed elsewhere)
- `immutable`: guaranteed unchangeable, implicitly thread-safe
- `inout`: wildcard for const/mutable/immutable (generic mutability)
- Transitive Const: `const(int[])` also makes array elements const

**Further reading:**
- [D Language Specification - Const and Immutable](https://dlang.org/spec/const3.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Const Correctness
const MaxSize = 100          # Compile-time constant
const Pi = 3.14159           # Compile-time constant
let name = "Alice"           # Runtime constant (unchangeable)
var count = 0                # Changeable

# count = 10  # OK
# name = "Bob"  # Error: name is unchangeable
```

**Special features:**
- `const` for compile-time constants
- `let` for runtime constants (unchangeable after initialization)
- `var` for changeable variables
- No explicit const reference like in C++

**Further reading:**
- [Nim Documentation - Constants](https://nim-lang.org/docs/manual.html#constants-and-constant-expressions)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Const variables
const int maxSize = 100;
// maxSize = 200; // Error: Cannot assign to variable with const-qualified type

// Const pointer
const char *str = "Hello";    // Pointer to const char
char *const ptr = buffer;      // Const pointer to char
const char *const both = "X";  // Const pointer to const char

// Const in method parameters
- (void)processData:(const int *)data length:(int)length;
```

**Special features:**
- C-style `const` qualifier for variables and pointers
- `const` prevents modification of the qualified value
- Pointer-const vs. value-const distinction
- Method parameters can be marked as `const`

**Further reading:**
- [Apple Documentation - Programming with Objective-C](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Const Correctness: const vs var
const x: i32 = 42;    // Immutable
// x = 10;             // Compilation error!

var y: i32 = 42;      // Mutable
y = 10;                // OK

// Const Pointers
var value: i32 = 42;
const ptr: *const i32 = &value;  // Pointer to const i32
// ptr.* = 10;                    // Compilation error!

const mut_ptr: *i32 = &value;    // Mutable Pointer
mut_ptr.* = 10;                   // OK

// Const Slices
const slice: []const u8 = "Hello";  // Slice to const u8
// slice[0] = 'h';                   // Compilation error!
```

**Special features:**
- `const` and `var` distinguish between immutable and mutable bindings
- `*const T` and `*T` distinguish between pointers to const and mutable data
- `[]const T` and `[]T` distinguish between const and mutable slices
- Compiler strictly enforces Const Correctness

**Further reading:**
- [Zig Documentation - Variables](https://ziglang.org/documentation/master/#Variables)

</TabItem>
</Tabs>


## 3.9.10. Distinct Types

New types that are structurally identical to an existing type but are treated as separate types.

### Languages {#sprachen}

<Tabs availableTabs={['nim', 'odin', 'purescript']} orangeTabs={['zig']}>
<TabItem value="nim" label="Nim">

```nim
# Distinct type
type
  UserId = distinct int
  ProductId = distinct int

var userId: UserId = UserId(42)
var productId: ProductId = ProductId(100)

# Distinct types are not compatible
# userId = productId  # Compilation error!

# Explicit conversion required
var id: int = int(userId)

# Distinct types can have methods
proc `$`(id: UserId): string = "UserId(" & $int(id) & ")"

echo userId  # UserId(42)
```

**Special features:**
- `distinct` keyword creates new types based on existing types
- Distinct types are structurally identical but not compatible
- Explicit conversion to base type required
- Can define own methods and operators

**Further reading:**
- [Nim Documentation - Distinct Types](https://nim-lang.org/docs/manual.html#types-distinct-type)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Distinct type
UserId :: distinct int
ProductId :: distinct int

userId: UserId = 42
productId: ProductId = 100

// Distinct types are not compatible
// userId = productId  // Compilation error!

// Explicit conversion required
id: int = int(userId)

// Distinct types can have methods
UserId :: struct {
    using _: int,
}

UserId :: proc(id: UserId) -> string {
    return fmt.tprintf("UserId(%d)", int(id))
}
```

**Special features:**
- `distinct` keyword creates new types based on existing types
- Distinct types are structurally identical but not compatible
- Explicit conversion to base type required
- Can be used with `using` for method calls

**Further reading:**
- [Odin Documentation - Distinct Types](https://odin-lang.org/docs/overview/#distinct-types)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Distinct type (with struct)
const UserId = struct {
    value: u32,
    
    pub fn init(value: u32) UserId {
        return UserId{ .value = value };
    }
    
    pub fn format(self: UserId, comptime fmt: []const u8, options: std.fmt.FormatOptions, writer: anytype) !void {
        _ = fmt;
        _ = options;
        try writer.print("UserId({})", .{self.value});
    }
};

const ProductId = struct {
    value: u32,
    
    pub fn init(value: u32) ProductId {
        return ProductId{ .value = value };
    }
};

var userId = UserId.init(42);
var productId = ProductId.init(100);

// Distinct types are not compatible
// userId = productId  // Compilation error!
```

**Special features:**
- Zig has no explicit `distinct` keyword
- Distinct types are implemented through separate structs
- Structs with same fields are not compatible
- Can define own methods and format functions

**Further reading:**
- [Zig Documentation - Structs](https://ziglang.org/documentation/0.11.0/#structs)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Distinct Types: newtype
newtype UserId = UserId Int
newtype Email = Email String

-- Functions with Distinct Types
getUserName :: UserId -> String
getUserName (UserId id) = "User " <> show id

sendMail :: Email -> String
sendMail (Email addr) = "Sending to " <> addr

-- Does not compile: UserId and Int are different types
-- getUserName 42 -- Error: Could not match type Int with UserId
```

**Special features:**
- `newtype` creates a distinctly typed wrapper
- No runtime overhead (zero-cost abstraction)
- Enforces type safety at compile time

**Further reading:**
- [PureScript Documentation - Newtypes](https://github.com/purescript/documentation/blob/master/language/Types.md#newtypes)

</TabItem>
</Tabs>


## 3.9.11. Inline Classes / Value Classes

Classes that do not create an additional object instance at runtime but directly use the wrapped value.

### Languages {#sprachen}

<Tabs availableTabs={['kotlin', 'scala']}>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Inline class (since Kotlin 1.3, deprecated in 1.5, value class since 1.5)
@JvmInline
value class UserId(val value: Int)

@JvmInline
value class ProductId(val value: Int)

val userId = UserId(42)
val productId = ProductId(100)

// Value classes are not compatible
// userId = productId  // Compilation error!

// At runtime only the Int value is used (no boxing)
fun processUserId(id: UserId) {
    println(id.value)
}

processUserId(userId)  // No object instance at runtime
```

**Special features:**
- `@JvmInline value class` since Kotlin 1.5 (replaces deprecated `inline class`)
- Must have exactly one property
- At runtime only the wrapped value is used (no boxing)
- Can have methods and properties
- Can implement interfaces

**Further reading:**
- [Kotlin Documentation - Inline Classes](https://kotlinlang.org/docs/inline-classes.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Value class (since Scala 2.10)
class UserId(val value: Int) extends AnyVal

class ProductId(val value: Int) extends AnyVal

val userId = new UserId(42)
val productId = new ProductId(100)

// Value classes are not compatible
// userId = productId  // Compilation error!

// At runtime only the Int value is used (no boxing)
def processUserId(id: UserId): Unit = {
  println(id.value)
}

processUserId(userId)  // No object instance at runtime
```

**Special features:**
- `extends AnyVal` creates a Value Class
- Must have exactly one field
- At runtime only the wrapped value is used (no boxing)
- Can have methods but no other fields
- Can implement traits but cannot extend classes

**Further reading:**
- [Scala Documentation - Value Classes](https://docs.scala-lang.org/overviews/core/value-classes.html)

</TabItem>
</Tabs>


## 3.9.12. Reified Type Parameters

Type parameters that are available at runtime and can be used for type checks.

### Languages {#sprachen}

<Tabs availableTabs={['dart', 'kotlin']}>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Reified type parameter
inline fun <reified T> checkType(value: Any): Boolean {
    return value is T
}

val result1 = checkType<String>("Hello")  // true
val result2 = checkType<Int>("Hello")     // false

// Reified type parameter with when
inline fun <reified T> process(value: Any) {
    when (T::class) {
        String::class -> println("It's a String: $value")
        Int::class -> println("It's an Int: $value")
        else -> println("Unknown type")
    }
}

process<String>("Hello")  // It's a String: Hello
process<Int>(42)          // It's an Int: 42

// Reified type parameter for instantiation
inline fun <reified T> createInstance(): T? {
    return T::class.constructors.firstOrNull()?.call() as? T
}

val instance = createInstance<MyClass>()
```

**Special features:**
- `reified` keyword only possible with `inline` functions
- Type parameter is available at runtime
- Enables `is` checks and `::class` access on type parameters
- Only for functions, not for classes or interfaces

**Further reading:**
- [Kotlin Documentation - Reified Type Parameters](https://kotlinlang.org/docs/inline-functions.html#reified-type-parameters)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Reified Type Parameters
void checkType<T>(T value) {
  print(T);           // Prints the actual type
  print(value is T);  // true - Type check at runtime possible
}

// Type parameters are available at runtime
List<int> numbers = [1, 2, 3];
print(numbers is List<int>);    // true
print(numbers is List<String>); // false

// Factory pattern with reified generics
T createDefault<T>() {
  if (T == int) return 0 as T;
  if (T == String) return '' as T;
  throw UnsupportedError('Type $T not supported');
}
```

**Special features:**
- Generics are fully reified (unlike Java with Type Erasure)
- Type parameters can be queried and compared at runtime
- `is` checks with generics work correctly at runtime

**Further reading:**
- [Dart Documentation - Generics](https://dart.dev/language/generics)

</TabItem>
</Tabs>


## 3.9.13. Utility Types

Predefined generic types for common type transformations.

### Languages {#sprachen}

<Tabs availableTabs={['typescript']}>
<TabItem value="typescript" label="TypeScript">

```typescript
// Partial - makes all properties optional
interface User {
    name: string;
    age: number;
}

type PartialUser = Partial<User>;
// { name?: string; age?: number; }

// Required - makes all properties required
type RequiredUser = Required<PartialUser>;
// { name: string; age: number; }

// Readonly - makes all properties readonly
type ReadonlyUser = Readonly<User>;
// { readonly name: string; readonly age: number; }

// Pick - selects specific properties
type UserName = Pick<User, "name">;
// { name: string; }

// Omit - removes specific properties
type UserWithoutAge = Omit<User, "age">;
// { name: string; }

// Record - creates object type with specific keys
type UserMap = Record<string, User>;
// { [key: string]: User; }

// Exclude - removes types from union
type NonNullable<T> = Exclude<T, null | undefined>;

// Extract - extracts types from union
type StringOrNumber = Extract<string | number | boolean, string | number>;
// string | number
```

**Special features:**
- Predefined Utility Types for common type transformations
- `Partial`, `Required`, `Readonly` for property modifications
- `Pick`, `Omit` for property selection
- `Record`, `Exclude`, `Extract` for union type manipulation
- Can be combined for complex type transformations

**Further reading:**
- [TypeScript Documentation - Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html)

</TabItem>
</Tabs>


## 3.9.14. Mapped Types

Types that create new types by iterating over the properties of an existing type.

### Languages {#sprachen}

<Tabs availableTabs={['typescript']}>
<TabItem value="typescript" label="TypeScript">

```typescript
// Mapped type - makes all properties optional
type Optional<T> = {
    [K in keyof T]?: T[K];
};

interface User {
    name: string;
    age: number;
}

type OptionalUser = Optional<User>;
// { name?: string; age?: number; }

// Mapped type - makes all properties readonly
type Readonly<T> = {
    readonly [K in keyof T]: T[K];
};

type ReadonlyUser = Readonly<User>;
// { readonly name: string; readonly age: number; }

// Mapped type - changes property types
type Stringify<T> = {
    [K in keyof T]: string;
};

type StringifiedUser = Stringify<User>;
// { name: string; age: string; }

// Mapped type with filter
type NonFunctionPropertyNames<T> = {
    [K in keyof T]: T[K] extends Function ? never : K;
}[keyof T];

type UserProperties = NonFunctionPropertyNames<User>;
// "name" | "age"
```

**Special features:**
- `[K in keyof T]` syntax for Mapped Types
- Iterates over all properties of a type
- Can modify or filter property types
- Frequently used for Utility Types
- Can be combined with Conditional Types

**Further reading:**
- [TypeScript Documentation - Mapped Types](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html)

</TabItem>
</Tabs>


## 3.9.15. Conditional Types

Types that return different types based on a condition.

### Languages {#sprachen}

<Tabs availableTabs={['typescript']}>
<TabItem value="typescript" label="TypeScript">

```typescript
// Conditional type - basic syntax
type IsArray<T> = T extends any[] ? true : false;

type Test1 = IsArray<string[]>;  // true
type Test2 = IsArray<string>;    // false

// Conditional type - NonNullable
type NonNullable<T> = T extends null | undefined ? never : T;

type Test3 = NonNullable<string | null>;  // string
type Test4 = NonNullable<number | undefined>;  // number

// Conditional type - Extract
type Extract<T, U> = T extends U ? T : never;

type Test5 = Extract<string | number, string>;  // string

// Conditional type - Exclude
type Exclude<T, U> = T extends U ? never : T;

type Test6 = Exclude<string | number, string>;  // number

// Conditional type - ReturnType
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

type Test7 = ReturnType<() => string>;  // string
type Test8 = ReturnType<(x: number) => boolean>;  // boolean

// Conditional type - Parameters
type Parameters<T> = T extends (...args: infer P) => any ? P : never;

type Test9 = Parameters<(x: number, y: string) => void>;  // [number, string]
```

**Special features:**
- `T extends U ? X : Y` syntax for Conditional Types
- `infer` keyword for type inference in Conditional Types
- Can be used for complex type transformations
- Frequently used for Utility Types
- Can be combined with Mapped Types

**Further reading:**
- [TypeScript Documentation - Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html)

</TabItem>
</Tabs>


## 3.9.16. Template Literal Types

Types that create string literal types based on template string syntax.

### Languages {#sprachen}

<Tabs availableTabs={['typescript']}>
<TabItem value="typescript" label="TypeScript">

```typescript
// Template literal type - basic syntax
type Greeting = `Hello, ${string}!`;

const greeting: Greeting = "Hello, World!";  // OK
// const invalid: Greeting = "Hi, World!";  // Compilation error!

// Template literal type with union types
type EventName = "click" | "hover" | "focus";
type HandlerName = `on${EventName}`;
// "onclick" | "onhover" | "onfocus"

const handler: HandlerName = "onclick";  // OK

// Template literal type with Capitalize
type Capitalize<T extends string> = T extends `${infer F}${infer R}`
    ? `${Uppercase<F>}${R}`
    : T;

type CapitalizedEvent = Capitalize<EventName>;
// "Click" | "Hover" | "Focus"

// Template literal type for API routes
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";
type ApiRoute = `/${string}`;
type FullRoute = `${HttpMethod} ${ApiRoute}`;

const route: FullRoute = "GET /users";  // OK
// const invalid: FullRoute = "GET users";  // Compilation error!
```

**Special features:**
- Template string syntax with backticks and `${}`
- Can combine string literal types
- Support string manipulation like `Uppercase`, `Lowercase`, `Capitalize`
- Can be combined with Conditional Types and Mapped Types
- Available since TypeScript 4.1

**Further reading:**
- [TypeScript Documentation - Template Literal Types](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html)

</TabItem>
</Tabs>


## 3.9.17. Index Signatures

Definition of object types with dynamic property names.

### Languages {#sprachen}

<Tabs availableTabs={['javascript', 'typescript']}>
<TabItem value="javascript" label="JavaScript">

```javascript
// Index signatures with Proxy (since ES6)
const handler = {
    get(target, prop) {
        return target[prop] || `Property ${prop} not found`;
    },
    set(target, prop, value) {
        target[prop] = value;
        return true;
    }
};

const obj = new Proxy({}, handler);
obj.name = "Alice";
console.log(obj.name);  // "Alice"
console.log(obj.age);    // "Property age not found"

// Index signatures with Map
const map = new Map();
map.set("name", "Alice");
map.set("age", 30);
console.log(map.get("name"));  // "Alice"
```

**Special features:**
- Dynamic property access is possible by default
- `Proxy` (since ES6) enables custom property access
- `Map` for structured key-value storage
- No static type checking at compile time

**Further reading:**
- [MDN - Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Index signature - string keys
interface StringDictionary {
    [key: string]: string;
}

const dict: StringDictionary = {
    name: "Alice",
    city: "Berlin"
};

dict["age"] = "30";  // OK
// dict["age"] = 30;  // Compilation error!

// Index signature - number keys
interface NumberDictionary {
    [index: number]: string;
}

const arr: NumberDictionary = ["Alice", "Bob"];
console.log(arr[0]);  // "Alice"

// Index signature with mixed properties
interface MixedDictionary {
    name: string;  // Explicit property
    [key: string]: string | number;  // Index signature
}

const mixed: MixedDictionary = {
    name: "Alice",
    age: 30,
    city: "Berlin"
};

// Index signature with readonly
interface ReadonlyDictionary {
    readonly [key: string]: string;
}

const readonly: ReadonlyDictionary = {
    name: "Alice"
};
// readonly["name"] = "Bob";  // Compilation error!
```

**Special features:**
- `[key: string]` or `[index: number]` for Index Signatures
- Can be combined with explicit properties
- Explicit properties must be compatible with Index Signature
- `readonly` can be used for Index Signatures
- Static type checking at compile time

**Further reading:**
- [TypeScript Documentation - Index Signatures](https://www.typescriptlang.org/docs/handbook/2/objects.html#index-signatures)

</TabItem>
</Tabs>

