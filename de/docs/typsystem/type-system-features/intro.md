---
slug: /typsystem/type-system-features
title: 3.9. Type System Features
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 3.9. Type System Features

Zusätzliche Features des Typsystems.

## 3.9.1. Type Aliases

Einführung eines alternativen Namens für einen bestehenden Typ.

### Sprachen {#sprachen}

<Tabs availableTabs={['common-lisp', 'cpp', 'csharp', 'd', 'dart', 'elm', 'fsharp', 'gleam', 'go', 'haskell', 'haxe', 'julia', 'koka', 'kotlin', 'lean4', 'mercury', 'nim', 'object-pascal', 'ocaml', 'purescript', 'python', 'roc', 'rust', 'scala', 'swift', 'typescript', 'v', 'zig']}>
<TabItem value="csharp" label="C#">

```csharp
// Type alias (seit C# 10.0)
using UserId = int;
using StringList = System.Collections.Generic.List<string>;

UserId userId = 42;
StringList names = new() { "Alice", "Bob" };

// Using-Alias-Direktive (seit C# 1.0)
using System.Collections.Generic;
using MyList = List<int>;

MyList numbers = new() { 1, 2, 3 };
```

**Besonderheiten:**
- `using`-Alias-Direktive seit C# 1.0 für Namespace- und Typ-Aliase
- `using`-Alias für Typen seit C# 10.0 (file-scoped)
- Alias kann für jeden Typ verwendet werden, einschließlich generischer Typen

**Weiterführende Links:**
- [C# Documentation - Using Directive](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/using-directive)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Type alias (seit C++11)
using UserId = int;
using StringVector = std::vector<std::string>;

UserId userId = 42;
StringVector names = {"Alice", "Bob"};

// Template type alias
template<typename T>
using Vector = std::vector<T>;

Vector<int> numbers = {1, 2, 3};
```

**Besonderheiten:**
- `using`-Syntax seit C++11
- Unterstützt Template-Aliase
- Alternative zu `typedef`, aber mit besserer Lesbarkeit für Templates

**Weiterführende Links:**
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

**Besonderheiten:**
- `typedef`-Syntax für Typ-Aliase
- Unterstützt auch Funktions-Typ-Aliase
- Kann für Typen und Funktionssignaturen verwendet werden

**Weiterführende Links:**
- [Dart Documentation - Typedefs](https://dart.dev/language/typedefs)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Type alias
type UserId = int
type StringList = List<string>

let userId: UserId = 42
let names: StringList = ["Alice"; "Bob"]

// Type alias mit Generics
type Pair<'T> = 'T * 'T

let pair: Pair<int> = (1, 2)
```

**Besonderheiten:**
- `type`-Syntax für Typ-Aliase
- Unterstützt generische Typ-Aliase
- Aliase sind strukturell äquivalent zum ursprünglichen Typ

**Weiterführende Links:**
- [F# Documentation - Type Abbreviations](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/type-abbreviations)

</TabItem>
<TabItem value="go" label="Go">

```go
// Type alias
type UserId int
type StringSlice []string

var userId UserId = 42
var names StringSlice = []string{"Alice", "Bob"}

// Type alias mit struct
type Point struct {
    X, Y int
}
type Coordinate Point

var coord Coordinate = Coordinate{X: 1, Y: 2}
```

**Besonderheiten:**
- `type`-Syntax für Typ-Aliase
- Erstellt einen neuen Typ (nicht nur ein Alias)
- Kann für alle Typen verwendet werden, einschließlich Structs

**Weiterführende Links:**
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

**Besonderheiten:**
- `type`-Syntax für Typ-Aliase
- Unterstützt parametrisierte Typ-Aliase
- Aliase sind strukturell äquivalent zum ursprünglichen Typ

**Weiterführende Links:**
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

**Besonderheiten:**
- `typealias`-Syntax für Typ-Aliase
- Unterstützt Funktions-Typ-Aliase
- Kann für alle Typen verwendet werden, einschließlich generischer Typen

**Weiterführende Links:**
- [Kotlin Documentation - Type Aliases](https://kotlinlang.org/docs/type-aliases.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Type Aliases mit `abbrev`
abbrev UserId := Int
abbrev StringList := List String

def userId : UserId := 42
def names : StringList := ["Alice", "Bob"]

-- Funktions-Typ-Alias
abbrev IntOperation := Int → Int

def square : IntOperation := fun x => x * x
```

**Besonderheiten:**
- `abbrev` erstellt transparente Typ-Aliase (vollständig reduzierbar)
- `def` kann auch für Typ-Aliase verwendet werden (ist aber weniger transparent)
- Unterstützt generische und Funktions-Typ-Aliase
- Aliase sind vollständig kompatibel mit dem Originaltyp

**Weiterführende Links:**
- [Lean 4 Documentation - Dependent Type Theory](https://lean-lang.org/theorem_proving_in_lean4/dependent_type_theory.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```mercury
% Type Aliases: Typäquivalenz-Deklarationen
:- type user_id == int.
:- type string_list == list(string).

% Funktions-Typ-Alias
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

**Besonderheiten:**
- Type Aliases werden mit `:- type name == existing_type` definiert.
- Der Alias ist vollständig äquivalent zum Originaltyp (transparentes Alias).
- Unterstützt parametrisierte Typ-Aliase und Funktions-Typ-Aliase.
- Im Gegensatz zu neuen Typdeklarationen (`--->`) erstellt `==` keinen neuen Typ.

**Weiterführende Links:**
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

**Besonderheiten:**
- `type`-Syntax für Typ-Aliase
- Unterstützt parametrisierte Typ-Aliase
- Aliase sind strukturell äquivalent zum ursprünglichen Typ

**Weiterführende Links:**
- [OCaml Documentation - Type Definitions](https://ocaml.org/manual/types.html)

</TabItem>
<TabItem value="python" label="Python">

```python
# Type alias (seit Python 3.10)
from typing import TypeAlias

UserId: TypeAlias = int
StringList: TypeAlias = list[str]

userId: UserId = 42
names: StringList = ["Alice", "Bob"]

# Alternative Syntax (vor Python 3.10)
from typing import List

OldStringList = List[str]
```

**Besonderheiten:**
- `TypeAlias` seit Python 3.10 für explizite Typ-Aliase
- Vor Python 3.10: Einfache Zuweisung von Typen
- Wird hauptsächlich für Type Hints verwendet

**Weiterführende Links:**
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

**Besonderheiten:**
- `type`-Syntax für Typ-Aliase
- Unterstützt generische Typ-Aliase
- Aliase sind strukturell äquivalent zum ursprünglichen Typ

**Weiterführende Links:**
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

**Besonderheiten:**
- `type`-Syntax für Typ-Aliase
- Unterstützt parametrisierte Typ-Aliase
- Aliase sind strukturell äquivalent zum ursprünglichen Typ

**Weiterführende Links:**
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

**Besonderheiten:**
- `typealias`-Syntax für Typ-Aliase
- Unterstützt generische Typ-Aliase
- Kann für alle Typen verwendet werden, einschließlich Tuple-Typen

**Weiterführende Links:**
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

**Besonderheiten:**
- `type`-Syntax für Typ-Aliase
- Unterstützt generische Typ-Aliase
- Kann für alle Typen verwendet werden, einschließlich Union- und Intersection-Typen

**Weiterführende Links:**
- [TypeScript Documentation - Type Aliases](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Type Alias mit deftype
(deftype age () '(integer 0 150))
(deftype name () 'string)
(deftype coordinate () '(cons number number))

(typep 25 'age)           ; T
(typep -1 'age)           ; NIL
(typep "Alice" 'name)     ; T
```

**Besonderheiten:**
- Type Aliases über `deftype` definiert
- Unterstützt parametrisierte Typdefinitionen
- Typen können einschränkende Bedingungen enthalten (z.B. Wertebereiche)
- Prüfbar mit `typep` und `subtypep`

**Weiterführende Links:**
- [Common Lisp HyperSpec - deftype](http://www.lispworks.com/documentation/HyperSpec/Body/m_deftp.htm)

</TabItem>
<TabItem value="d" label="D">

```d
// Type Aliases mit alias
alias UserId = int;
alias StringList = string[];
alias Callback = void delegate(int);

UserId id = 42;
StringList names = ["Alice", "Bob"];
Callback cb = (int x) { writeln(x); };

// Alias für Template-Instanziierungen
alias IntMap = int[string];
IntMap scores;
scores["Alice"] = 100;
```

**Besonderheiten:**
- `alias` erstellt einen alternativen Namen für einen bestehenden Typ
- Unterstützt Aliase für Templates, Funktionen und Symbole
- Kein neuer Typ – nur ein alternativer Name
- `alias this` ermöglicht implizite Konvertierung zwischen Typen

**Weiterführende Links:**
- [D Language Specification - Alias Declarations](https://dlang.org/spec/declaration.html#alias)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Type Alias für Records
type alias Point = { x : Float, y : Float }
type alias Person = { name : String, age : Int }

-- Type Alias erzeugt Konstruktorfunktion
p : Point
p = Point 1.0 2.0  -- Äquivalent zu { x = 1.0, y = 2.0 }

-- Type Alias für einfache Typen
type alias Name = String
type alias Age = Int
```

**Besonderheiten:**
- `type alias` erstellt einen alternativen Namen für einen existierenden Typ
- Record-Aliases erzeugen automatisch eine Konstruktorfunktion
- Type Aliases sind strukturell äquivalent zum Original-Typ
- Unterschied zu `type`: `type alias` ist nur ein Name, `type` ist ein neuer Typ

**Weiterführende Links:**
- [Elm Documentation - Type Aliases](https://guide.elm-lang.org/types/type_aliases.html)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// Type Alias
pub type UserId = Int
pub type UserName = String
pub type Headers = List(#(String, String))
```

**Besonderheiten:**
- Type Aliases werden mit `type Name = OriginalType` definiert
- Vereinfachen komplexe Typsignaturen
- Sind transparente Aliase (kein neuer Typ)

**Weiterführende Links:**
- [Gleam Documentation - Type Aliases](https://tour.gleam.run/data-types/type-aliases/)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Type Aliases mit typedef
typedef StringArray = Array<String>;
typedef Point = { x:Int, y:Int };
typedef Callback = Int -> String -> Void;

var items:StringArray = ["Apfel", "Banane"];
var p:Point = { x: 1, y: 2 };
```

**Besonderheiten:**
- `typedef` erstellt Type Aliases
- Kann für anonyme Strukturen, Funktionstypen und komplexe generische Typen verwendet werden
- Typedefs verwenden strukturelles Typing

**Weiterführende Links:**
- [Haxe Documentation - Type System - Typedef](https://haxe.org/manual/type-system-typedef.html)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Type Aliases
const StringOrInt = Union{String, Int}
const MyInt = Int64
const Point2D = Tuple{Float64, Float64}

x::MyInt = 42
value::StringOrInt = "Hallo"
point::Point2D = (1.0, 2.0)
```

**Besonderheiten:**
- Type Aliases werden mit `const` definiert
- Können für Union Types, Tupel-Typen und andere Typen verwendet werden
- Aliases sind vollständig austauschbar mit dem Originaltyp

**Weiterführende Links:**
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

**Besonderheiten:**
- `alias` definiert Typ-Aliase
- Aliase sind vollständig transparent und austauschbar mit dem Originaltyp
- Unterstützt generische Aliase und Funktionstyp-Aliase
- Nützlich für Lesbarkeit und Dokumentation

**Weiterführende Links:**
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

**Besonderheiten:**
- Type Aliases mit `type Name = ExistingType` Syntax
- Alias-Typen sind vollständig kompatibel mit dem Basistyp
- Für inkompatible Typen: `distinct` verwenden

**Weiterführende Links:**
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
  name := 'Hallo';
end;
```

**Besonderheiten:**
- `type NewType = ExistingType` erstellt einen neuen Typ (nominaler Alias)
- Der neue Typ ist nicht kompatibel mit dem Originaltyp (nominale Typisierung)
- Für kompatible Aliases: `type TAlias = type Integer` erzeugt einen distinkten Typ

**Weiterführende Links:**
- [Free Pascal Documentation - Type Declarations](https://www.freepascal.org/docs-html/ref/refse4.html)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Type Aliases
type Name = String
type Age = Int
type Point = { x :: Number, y :: Number }

-- Verwendung
greet :: Name -> String
greet name = "Hallo, " <> name

p :: Point
p = { x: 1.0, y: 2.0 }
```

**Besonderheiten:**
- `type` Keyword für Type Aliases
- Type Aliases sind transparent (austauschbar mit dem Originaltyp)
- Unterstützt parametrische Type Aliases: `type Pair a = { fst :: a, snd :: a }`

**Weiterführende Links:**
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

**Besonderheiten:**
- Type Aliases werden als Typannotationen definiert
- Strukturell äquivalent zum Original-Typ
- Verbessern die Lesbarkeit

**Weiterführende Links:**
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

**Besonderheiten:**
- `type Name = ExistingType` für Aliase
- Aliase sind austauschbar mit dem Originaltyp
- Auch für Funktionstypen verwendbar

**Weiterführende Links:**
- [V Documentation - Type Aliases](https://github.com/vlang/v/blob/master/doc/docs.md#type-aliases)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Type Aliases: const Alias = Type
const String = []const u8;
const Integer = i32;
const Float = f64;

const name: String = "Hallo";
const count: Integer = 42;
const price: Float = 19.99;
```

**Besonderheiten:**
- Type Aliases werden mit `const` erstellt
- Aliases sind vollständig austauschbar mit dem Originaltyp
- Keine neuen Typen, nur alternative Namen

**Weiterführende Links:**
- [Zig Documentation - Type Coercion](https://ziglang.org/documentation/master/#Type-Coercion)

</TabItem>
</Tabs>


## 3.9.2. Typedef (C-style)

Einführung eines alternativen Namens für einen Typ mit C-Syntax.

### Sprachen {#sprachen}

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

**Besonderheiten:**
- `typedef`-Syntax für Typ-Aliase
- Wird häufig für Structs verwendet, um die `struct`-Schlüsselwort zu vermeiden
- Unterstützt Function-Pointer-Aliase

**Weiterführende Links:**
- [C Reference - Typedef](https://en.cppreference.com/w/c/language/typedef)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Typedef (C-style, seit C++98)
typedef int UserId;
typedef std::vector<std::string> StringVector;

UserId userId = 42;
StringVector names = {"Alice", "Bob"};

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

**Besonderheiten:**
- `typedef`-Syntax seit C++98 (kompatibel mit C)
- Wird häufig für Structs verwendet
- Unterstützt Function-Pointer-Aliase
- `using`-Syntax (seit C++11) wird bevorzugt für moderne C++-Code

**Weiterführende Links:**
- [C++ Reference - Typedef](https://en.cppreference.com/w/cpp/language/typedef)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objective-c
// Typedef
typedef int UserId;
typedef NSString* String;

UserId userId = 42;
String name = @"Alice";

// Typedef für struct
typedef struct {
    int x, y;
} Point;

Point p = {1, 2};

// Typedef für block
typedef int (^Operation)(int, int);

Operation add = ^(int a, int b) {
    return a + b;
};
```

**Besonderheiten:**
- `typedef`-Syntax für Typ-Aliase (kompatibel mit C)
- Wird häufig für Structs verwendet
- Unterstützt Block-Aliase (Objective-C-spezifisch)

**Weiterführende Links:**
- [Objective-C Documentation - Typedef](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html)

</TabItem>
</Tabs>


## 3.9.3. Type Casting (Explicit, Implicit, Safe, Unsafe)

Umwandlung eines Wertes von einem Typ zu einem anderen Typ.

### Sprachen {#sprachen}

<Tabs availableTabs={['c', 'cpp', 'csharp', 'd', 'dart', 'fortran', 'go', 'java', 'julia', 'kotlin', 'nim', 'objective-c', 'object-pascal', 'octave', 'python', 'rust', 'scala', 'swift', 'typescript', 'v', 'zig']}>
<TabItem value="c" label="C">

```c
// Explicit cast
int x = 42;
double y = (double)x;

// Unsafe cast (keine Runtime-Prüfung)
int* ptr = (int*)malloc(sizeof(int));
*ptr = 42;

// Implicit conversion
int a = 10;
double b = a;  // Implizite Konvertierung int -> double
```

**Besonderheiten:**
- Explizite Casts mit `(type)`-Syntax
- Keine Runtime-Typ-Prüfung (unsafe)
- Implizite Konvertierungen zwischen kompatiblen numerischen Typen
- Pointer-Casts sind möglich, aber unsicher

**Weiterführende Links:**
- [C Reference - Type Conversions](https://en.cppreference.com/w/c/language/conversion)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Explicit cast
int x = 42;
double y = (double)x;

// Safe cast (as operator, gibt null bei Fehlschlag)
object obj = "Hello";
string str = obj as string;

// Unsafe cast (wirft Exception bei Fehlschlag)
object obj2 = "World";
string str2 = (string)obj2;

// Pattern matching (seit C# 7.0)
if (obj is string s) {
    Console.WriteLine(s);
}
```

**Besonderheiten:**
- Explizite Casts mit `(type)`-Syntax
- `as`-Operator für sichere Casts (gibt null bei Fehlschlag)
- `is`-Operator für Typ-Prüfung
- Pattern matching seit C# 7.0 für sichere Typumwandlung

**Weiterführende Links:**
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

// Dynamic cast (safe, nur für Polymorphismus)
Base* base = new Derived();
Derived* derived = dynamic_cast<Derived*>(base);

// Const cast
const int* cptr = &x;
int* mutable = const_cast<int*>(cptr);

// Reinterpret cast (unsafe)
int value = 42;
double* dptr = reinterpret_cast<double*>(&value);
```

**Besonderheiten:**
- C-style Casts: `(type)`
- `static_cast` für sichere statische Konvertierungen
- `dynamic_cast` für sichere Runtime-Casts bei Polymorphismus
- `const_cast` für const/volatile-Modifikation
- `reinterpret_cast` für unsichere Low-Level-Konvertierungen

**Weiterführende Links:**
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

// Unsafe cast (wirft Exception bei Fehlschlag)
Object obj2 = "World";
String str2 = obj2 as String;

// Type check
if (obj is String) {
  print(obj.length);
}
```

**Besonderheiten:**
- Explizite Konvertierung mit Methoden wie `toDouble()`, `toString()`
- `as`-Operator für explizite Casts (wirft Exception bei Fehlschlag)
- `is`-Operator für Typ-Prüfung
- Pattern matching mit `is`-Operator

**Weiterführende Links:**
- [Dart Documentation - Type System](https://dart.dev/guides/language/type-system)

</TabItem>
<TabItem value="go" label="Go">

```go
// Type assertion (safe, gibt ok bei Fehlschlag)
var i interface{} = "hello"
s, ok := i.(string)
if ok {
    fmt.Println(s)
}

// Type assertion (unsafe, panic bei Fehlschlag)
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

**Besonderheiten:**
- Type assertion mit `value.(type)`-Syntax
- Zwei-Value-Form gibt `ok`-Bool zurück
- Ein-Value-Form wirft Panic bei Fehlschlag
- Type switch für sichere Typumwandlung

**Weiterführende Links:**
- [Go Documentation - Type Assertions](https://go.dev/ref/spec#Type_assertions)

</TabItem>
<TabItem value="java" label="Java">

```java
// Explicit cast
int x = 42;
double y = (double)x;

// Safe cast (ClassCastException bei Fehlschlag)
Object obj = "Hello";
String str = (String)obj;

// Type check
if (obj instanceof String) {
    String s = (String)obj;
    System.out.println(s);
}

// Pattern matching (seit Java 16)
if (obj instanceof String s) {
    System.out.println(s);
}
```

**Besonderheiten:**
- Explizite Casts mit `(type)`-Syntax
- `instanceof`-Operator für Typ-Prüfung
- Pattern matching seit Java 16 für sichere Typumwandlung
- Wirft `ClassCastException` bei fehlgeschlagenen Casts

**Weiterführende Links:**
- [Java Documentation - Type Casting](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Explicit cast (unsafe, wirft Exception bei Fehlschlag)
val obj: Any = "Hello"
val str: String = obj as String

// Safe cast (gibt null bei Fehlschlag)
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

**Besonderheiten:**
- `as`-Operator für explizite Casts (wirft Exception bei Fehlschlag)
- `as?`-Operator für sichere Casts (gibt null bei Fehlschlag)
- `is`-Operator für Typ-Prüfung
- Smart casts: Automatischer Cast nach `is`-Prüfung

**Weiterführende Links:**
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

# Duck typing (keine expliziten Casts nötig)
def process(value):
    return value.upper()  # Funktioniert für alle Objekte mit upper()
```

**Besonderheiten:**
- Explizite Konvertierung mit Typ-Funktionen (`int()`, `str()`, `float()`)
- `isinstance()` für Typ-Prüfung
- Duck typing: Keine expliziten Casts nötig, wenn Objekte kompatible Methoden haben
- Dynamische Typisierung: Typen werden zur Laufzeit bestimmt

**Weiterführende Links:**
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

**Besonderheiten:**
- `as`-Keyword für explizite Casts zwischen primitiven Typen
- `transmute` für unsichere Low-Level-Konvertierungen (nur in `unsafe`-Blöcken)
- `From`/`Into`-Traits für sichere Typkonvertierungen
- Compiler prüft Casts zur Compile-Zeit

**Weiterführende Links:**
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

**Besonderheiten:**
- Explizite Konvertierung mit Methoden wie `toDouble()`, `toString()`
- `asInstanceOf` für explizite Casts (wirft Exception bei Fehlschlag)
- `isInstanceOf` für Typ-Prüfung
- Pattern matching für sichere Typumwandlung

**Weiterführende Links:**
- [Scala Documentation - Type Casting](https://docs.scala-lang.org/tour/type-casting.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Explicit cast (as operator, wirft Exception bei Fehlschlag)
let obj: Any = "Hello"
let str = obj as! String

// Safe cast (as? operator, gibt nil bei Fehlschlag)
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

**Besonderheiten:**
- `as!`-Operator für explizite Casts (wirft Exception bei Fehlschlag)
- `as?`-Operator für sichere Casts (gibt nil bei Fehlschlag)
- `is`-Operator für Typ-Prüfung
- Optional binding mit `if let` für sichere Typumwandlung

**Weiterführende Links:**
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

**Besonderheiten:**
- Type assertions mit `as`-Syntax oder Angle-Bracket-Syntax
- Type guards für sichere Typ-Prüfung zur Laufzeit
- Type narrowing: Compiler verengt Typ nach Prüfung
- Nur zur Compile-Zeit, keine Runtime-Typ-Prüfung

**Weiterführende Links:**
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

**Besonderheiten:**
- `cast` für explizite Konvertierung zwischen Typen
- Klassen-Casts geben `null` zurück bei fehlgeschlagener Konvertierung
- Pointer-Casts sind möglich aber unsicher
- `@safe`-Code verbietet gefährliche Casts

**Weiterführende Links:**
- [D Language Specification - Cast Expressions](https://dlang.org/spec/expression.html#cast_expressions)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Explizite Typkonvertierung mit intrinsischen Funktionen
real :: r = 3.7
integer :: i
double precision :: d

i = INT(r)       ! REAL → INTEGER (Abschneiden): 3
d = DBLE(i)      ! INTEGER → DOUBLE PRECISION: 3.0
r = REAL(i)      ! INTEGER → REAL: 3.0
```

**Besonderheiten:**
- Explizite Konvertierung über intrinsische Funktionen: `INT()`, `REAL()`, `DBLE()`, `CMPLX()`
- `INT()` schneidet ab (keine Rundung)
- `NINT()` für Rundung auf nächsten Integer
- `TRANSFER()` für Bit-Level-Reinterpretation (unsafe)

**Weiterführende Links:**
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

**Besonderheiten:**
- `convert()` für Typ-Konvertierungen
- Typ-Konstruktoren für direkte Konvertierung
- `InexactError` bei Verlust von Information (z.B. Float → Int)
- `parse()` für String-zu-Zahl-Konvertierungen

**Weiterführende Links:**
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

**Besonderheiten:**
- Sichere Konvertierung mit `Type(value)` Syntax
- Unsicherer Cast mit `cast[Type](value)` für Low-Level-Operationen
- `$`-Operator für String-Konvertierung
- Keine impliziten Konvertierungen (außer bei `converter`-Prozeduren)

**Weiterführende Links:**
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
  // Expliziter Cast (Werttypen)
  r := 3.14;
  i := Integer(Trunc(r));
  b := Byte(i);

  // Sicherer Object-Cast (as)
  obj := TPerson.Create;
  person := obj as TPerson;

  // Unsicherer Object-Cast
  person := TPerson(obj);
end;
```

**Besonderheiten:**
- `TypeName(expr)` für explizite Casts auf Werttypen
- `as` für sichere Klassen-Casts (wirft `EInvalidCast` bei Fehler)
- `TypeName(obj)` für unsichere Klassen-Casts (keine Prüfung)
- Implizite Konvertierung: Integer → Real

**Weiterführende Links:**
- [Delphi Documentation - Typecasts](https://docwiki.embarcadero.com/RADStudio/en/Typecasts)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// C-style Cast
double pi = 3.14159;
int intPi = (int)pi; // 3

// Objekt-Cast
id obj = @"Hallo";
NSString *str = (NSString *)obj;

// Sicherer Cast mit Typprüfung
if ([obj isKindOfClass:[NSString class]]) {
    NSString *safeStr = (NSString *)obj;
}
```

**Besonderheiten:**
- C-style Casts für primitive Typen
- Objekt-Casts mit Klammersyntax
- Kein Compiler-Error bei ungültigem Objekt-Cast (Runtime-Fehler möglich)
- Sichere Casts durch vorherige `isKindOfClass:`-Prüfung

**Weiterführende Links:**
- [Apple Documentation - Programming with Objective-C](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
% Type Casting: Explizite Typumwandlungen
x = 3.14;
int_val = int32(x);       % double → int32
char_val = char(65);       % int → char ('A')
double_val = double(int_val); % int32 → double
logical_val = logical(1);  % numeric → logical
str_val = num2str(42);     % numeric → string
num_val = str2double("3.14"); % string → double
```

**Besonderheiten:**
- Explizite Konvertierung durch Typ-Funktionen: `double()`, `int32()`, `uint8()`, `char()`, `logical()`
- `num2str()` und `str2double()` / `str2num()` für String-Konvertierungen
- Keine unsicheren Casts (dynamisch typisiert)

**Weiterführende Links:**
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
i := int(y)        // f64 -> int (abgeschnitten)
```

**Besonderheiten:**
- Explizites Casting mit `Type(value)` Syntax
- Kein implizites Casting zwischen numerischen Typen
- `.str()` Methode für String-Konvertierung
- Unsafe Casts in `unsafe`-Blöcken möglich

**Weiterführende Links:**
- [V Documentation - Casting](https://github.com/vlang/v/blob/master/doc/docs.md#casting)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Type Casting: Explizite Casts über Builtins
const x: i32 = 42;
const y: u8 = @intCast(x);           // Integer-Cast (safe)
const z: f64 = @floatFromInt(x);     // Int zu Float

const a: f64 = 3.14;
const b: f32 = @floatCast(a);        // Float-Cast (safe)
const c: i32 = @intFromFloat(a);     // Float zu Int

// Pointer-Casts
var value: i32 = 42;
const ptr: *i32 = &value;
const raw: *anyopaque = @ptrCast(ptr);  // Pointer-Cast
```

**Besonderheiten:**
- Alle Casts sind explizit über Builtin-Funktionen
- `@intCast`: Integer-zu-Integer-Konvertierung
- `@floatCast`: Float-zu-Float-Konvertierung
- `@floatFromInt` / `@intFromFloat`: Konvertierung zwischen Int und Float
- `@ptrCast`: Pointer-Konvertierung
- Overflow bei Casts löst einen Runtime-Fehler aus (in Debug-Builds)

**Weiterführende Links:**
- [Zig Documentation - Builtin Functions](https://ziglang.org/documentation/master/#Builtin-Functions)

</TabItem>
</Tabs>


## 3.9.4. Implicit Conversions

Automatische Typumwandlung ohne explizite Casts.

### Sprachen {#sprachen}

<Tabs availableTabs={['c', 'cpp', 'csharp', 'd', 'fortran', 'go', 'java', 'lean4', 'nim', 'objective-c', 'octave', 'python', 'scala']} yellowTabs={['kotlin']} orangeTabs={['dart', 'rust', 'swift']}>
<TabItem value="c" label="C">

```c
// Implicit conversion zwischen numerischen Typen
int x = 42;
double y = x;  // int -> double

char c = 'A';
int i = c;  // char -> int

// Pointer conversion
int* ptr = NULL;  // NULL ist void*
```

**Besonderheiten:**
- Automatische Konvertierung zwischen kompatiblen numerischen Typen
- `char` wird implizit zu `int` konvertiert
- `NULL` (void*) wird implizit zu jedem Pointer-Typ konvertiert
- Keine Konvertierung zwischen inkompatiblen Typen

**Weiterführende Links:**
- [C Reference - Implicit Conversions](https://en.cppreference.com/w/c/language/conversion)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Implicit conversion zwischen numerischen Typen
int x = 42;
double y = x;  // int -> double

// Implicit conversion mit benutzerdefinierten Operatoren
public struct Distance {
    public double Meters { get; }
    public Distance(double meters) => Meters = meters;
    
    public static implicit operator Distance(double meters) {
        return new Distance(meters);
    }
}

Distance d = 100.0;  // double -> Distance
```

**Besonderheiten:**
- Automatische Konvertierung zwischen kompatiblen numerischen Typen
- Benutzerdefinierte implizite Konvertierungen mit `implicit operator`
- Keine Datenverluste bei impliziten Konvertierungen
- Explizite Konvertierungen mit `explicit operator` möglich

**Weiterführende Links:**
- [C# Documentation - User-defined Conversions](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/user-defined-conversion-operators)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Implicit conversion zwischen numerischen Typen
int x = 42;
double y = x;  // int -> double

// Implicit conversion mit Konstruktoren
class Distance {
public:
    Distance(double meters) : meters_(meters) {}
    double meters() const { return meters_; }
private:
    double meters_;
};

Distance d = 100.0;  // double -> Distance

// Implicit conversion mit conversion operators
class MyInt {
public:
    operator int() const { return value_; }
private:
    int value_;
};
```

**Besonderheiten:**
- Automatische Konvertierung zwischen kompatiblen numerischen Typen
- Konstruktoren mit einem Parameter ermöglichen implizite Konvertierung
- Conversion operators für benutzerdefinierte Konvertierungen
- `explicit`-Keyword verhindert implizite Konvertierung

**Weiterführende Links:**
- [C++ Reference - Implicit Conversions](https://en.cppreference.com/w/cpp/language/implicit_conversion)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Implicit conversion zwischen numerischen Typen
int x = 42;
double y = x.toDouble();  // Explizit nötig

// Extension methods ermöglichen implizite Konvertierung
extension IntExtension on int {
  Distance toDistance() => Distance(this.toDouble());
}

class Distance {
  final double meters;
  Distance(this.meters);
}

int meters = 100;
Distance d = meters.toDistance();  // Explizit nötig
```

**Besonderheiten:**
- Keine automatischen impliziten Konvertierungen zwischen numerischen Typen
- Explizite Konvertierung mit Methoden wie `toDouble()`, `toInt()`
- Extension methods ermöglichen benutzerdefinierte Konvertierungen
- Type safety wird durch explizite Konvertierungen gewährleistet

**Weiterführende Links:**
- [Dart Documentation - Type System](https://dart.dev/guides/language/type-system)

</TabItem>
<TabItem value="go" label="Go">

```go
// Keine impliziten Konvertierungen zwischen numerischen Typen
var x int = 42
var y float64 = float64(x)  // Explizit nötig

// Implicit conversion nur bei untyped constants
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

**Besonderheiten:**
- Keine impliziten Konvertierungen zwischen numerischen Typen
- Explizite Konvertierung mit Typ-Casts nötig
- Untyped constants können implizit konvertiert werden
- Interface satisfaction ist implizit

**Weiterführende Links:**
- [Go Documentation - Conversions](https://go.dev/ref/spec#Conversions)

</TabItem>
<TabItem value="java" label="Java">

```java
// Implicit conversion zwischen numerischen Typen (Widening)
int x = 42;
double y = x;  // int -> double (widening)

byte b = 10;
int i = b;  // byte -> int (widening)

// Keine implizite Konvertierung bei Narrowing
double d = 3.14;
// int i2 = d;  // Kompilierfehler!

// Boxing (automatisch seit Java 5)
int primitive = 42;
Integer boxed = primitive;  // Autoboxing
```

**Besonderheiten:**
- Automatische Konvertierung bei Widening (kleinerer zu größerem Typ)
- Keine implizite Konvertierung bei Narrowing (größerer zu kleinerem Typ)
- Autoboxing/Unboxing zwischen primitiven Typen und Wrapper-Klassen
- Keine implizite Konvertierung zwischen inkompatiblen Referenztypen

**Weiterführende Links:**
- [Java Documentation - Type Conversions](https://docs.oracle.com/javase/specs/jls/se17/html/jls-5.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Implicit conversion zwischen numerischen Typen (Widening)
val x: Int = 42
val y: Double = x.toDouble()  // Explizit nötig

// Smart casts (implicit nach type check)
val obj: Any = "Hello"
if (obj is String) {
    val length = obj.length  // Implicit cast
}

// Implicit conversion mit extension functions
fun Int.toDistance(): Distance = Distance(this.toDouble())

val meters = 100
val d: Distance = meters.toDistance()  // Explizit nötig
```

**Besonderheiten:**
- Keine automatischen impliziten Konvertierungen zwischen numerischen Typen
- Explizite Konvertierung mit Methoden wie `toDouble()`, `toInt()`
- Smart casts: Automatische Konvertierung nach Typ-Prüfung
- Extension functions ermöglichen benutzerdefinierte Konvertierungen

**Weiterführende Links:**
- [Kotlin Documentation - Type Checks and Casts](https://kotlinlang.org/docs/typecasts.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Implicit Conversions mit Coe Type Class
structure Meters where
  val : Float

-- Coe-Instanz für implizite Konvertierung
instance : Coe Meters Float where
  coe m := m.val

def distance : Meters := ⟨42.0⟩
def result : Float := distance  -- Implicit conversion durch Coe

-- Nat → Int ist standardmäßig implizit
def n : Nat := 5
def i : Int := n  -- Implicit conversion Nat → Int
```

**Besonderheiten:**
- `Coe` Type Class für benutzerdefinierte implizite Konvertierungen
- `CoeSort` für Konvertierung zu Typen, `CoeFun` für Konvertierung zu Funktionen
- Nat → Int Konvertierung ist standardmäßig verfügbar
- Compiler wendet registrierte Coercions automatisch an

**Weiterführende Links:**
- [Lean 4 Documentation - Type Coercions](https://lean-lang.org/theorem_proving_in_lean4/type_classes.html#coercions)

</TabItem>
<TabItem value="python" label="Python">

```python
# Implicit conversion zwischen numerischen Typen
x = 42  # int
y = float(x)  # Explizit nötig für explizite Konvertierung

# Duck typing (implicit behavior)
def process(value):
    return value.upper()  # Funktioniert für alle Objekte mit upper()

# Implicit conversion bei Operatoren
result = 10 + 3.14  # int + float -> float
```

**Besonderheiten:**
- Dynamische Typisierung: Typen werden zur Laufzeit bestimmt
- Duck typing: Objekte werden implizit behandelt, wenn sie kompatible Methoden haben
- Implizite Konvertierung bei arithmetischen Operationen
- Keine expliziten Typdeklarationen nötig

**Weiterführende Links:**
- [Python Documentation - Type Conversion](https://docs.python.org/3/library/functions.html#type-conversion)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Keine impliziten Konvertierungen zwischen numerischen Typen
let x: i32 = 42;
let y: f64 = x as f64;  // Explizit nötig

// Implicit conversion mit From/Into traits
use std::convert::From;

struct Distance(f64);

impl From<f64> for Distance {
    fn from(meters: f64) -> Self {
        Distance(meters)
    }
}

let d: Distance = 100.0.into();  // Implicit via Into trait
```

**Besonderheiten:**
- Keine automatischen impliziten Konvertierungen zwischen numerischen Typen
- Explizite Konvertierung mit `as`-Keyword nötig
- `From`/`Into`-Traits ermöglichen benutzerdefinierte Konvertierungen
- Type safety wird durch explizite Konvertierungen gewährleistet

**Weiterführende Links:**
- [Rust Documentation - Type Conversions](https://doc.rust-lang.org/book/ch19-04-advanced-types.html#type-aliases)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Implicit conversion mit implicit functions
implicit def intToDistance(meters: Int): Distance = Distance(meters.toDouble)

case class Distance(meters: Double)

val d: Distance = 100  // Implicit conversion

// Implicit conversion mit implicit classes (seit Scala 2.10)
implicit class IntDistance(val meters: Int) extends AnyVal {
  def toDistance: Distance = Distance(meters.toDouble)
}

val d2: Distance = 100.toDistance
```

**Besonderheiten:**
- Implicit conversions mit `implicit def`-Funktionen
- Implicit classes (seit Scala 2.10) für Extension-Methoden-ähnliche Funktionalität
- Implicit conversions müssen explizit importiert werden
- Kann zu unerwartetem Verhalten führen, daher vorsichtig verwenden

**Weiterführende Links:**
- [Scala Documentation - Implicit Conversions](https://docs.scala-lang.org/tour/implicit-conversions.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Implicit conversion zwischen numerischen Typen (Widening)
let x: Int = 42
let y: Double = Double(x)  // Explizit nötig

// Implicit conversion mit ExpressibleBy protocols
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

**Besonderheiten:**
- Keine automatischen impliziten Konvertierungen zwischen numerischen Typen
- Explizite Konvertierung mit Initialisierern nötig
- `ExpressibleBy`-Protokolle ermöglichen implizite Konvertierung von Literalen
- Type safety wird durch explizite Konvertierungen gewährleistet

**Weiterführende Links:**
- [Swift Documentation - Type Conversions](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/thebasics/)

</TabItem>
<TabItem value="d" label="D">

```d
// Implizite Konvertierungen
byte b = 42;
int i = b;        // byte → int
long l = i;       // int → long
double d = i;     // int → double

// Array-Konvertierungen
immutable(char)[] s = "hello";   // string
const(char)[] cs = s;            // string → const(char)[]

// Enum zu Basistyp
enum Color { red, green, blue }
int colorVal = Color.red;  // enum → int
```

**Besonderheiten:**
- Erweiterungskonvertierungen automatisch (z.B. `int` → `long`)
- Keine implizite Einengung (z.B. `long` → `int` nicht erlaubt)
- `alias this` ermöglicht benutzerdefinierte implizite Konvertierungen
- `immutable` → `const` implizit möglich

**Weiterführende Links:**
- [D Language Specification - Implicit Conversions](https://dlang.org/spec/type.html#implicit-conversions)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Implizite Konvertierungen
integer :: i = 42
real :: r
double precision :: d

r = i       ! INTEGER → REAL (implizit)
d = r       ! REAL → DOUBLE PRECISION (implizit)
i = 3.7     ! REAL → INTEGER (implizit, Abschneiden): 3
```

**Besonderheiten:**
- Implizite Konvertierung bei Zuweisungen zwischen numerischen Typen
- Bei Konvertierung REAL → INTEGER wird abgeschnitten (nicht gerundet)
- Implizite Konvertierung in gemischten Ausdrücken (der genauere Typ wird beibehalten)

**Weiterführende Links:**
- [Fortran Standard - Type Conversion](https://gcc.gnu.org/onlinedocs/gfortran/Type-conversion.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Implicit Conversions mit converter
type
  Celsius = distinct float
  Fahrenheit = distinct float

converter toFahrenheit(c: Celsius): Fahrenheit =
  Fahrenheit(float(c) * 9.0 / 5.0 + 32.0)

var temp: Celsius = Celsius(100.0)
var fTemp: Fahrenheit = temp  # implizite Konvertierung
```

**Besonderheiten:**
- `converter`-Prozeduren definieren implizite Konvertierungen
- Compiler wendet Converter automatisch an
- Sollte sparsam eingesetzt werden (kann Verwirrung stiften)

**Weiterführende Links:**
- [Nim Documentation - Converters](https://nim-lang.org/docs/manual.html#converters)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Implizite Konvertierung bei numerischen Typen
int intVal = 42;
double doubleVal = intVal;    // int → double
long longVal = intVal;        // int → long

// Implizite Konvertierung in Ausdrücken
int a = 5;
double b = 2.5;
double result = a + b; // a wird implizit zu double konvertiert
```

**Besonderheiten:**
- C-style implizite Konvertierungen (Widening Conversions)
- Automatische Promotion bei gemischten Ausdrücken
- Narrowing Conversions erzeugen Compiler-Warnungen
- Keine implizite Konvertierung zwischen Objekttypen

**Weiterführende Links:**
- [Apple Documentation - Programming with Objective-C](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
% Implicit Conversions: Automatische Konvertierung
int_val = int32(5);
result = int_val + 3.14;  % int32 wird zu double konvertiert

% Logical zu Numeric
flag = true;
sum = flag + 5;  % logical wird zu 1, Ergebnis: 6
```

**Besonderheiten:**
- Arithmetische Operationen konvertieren automatisch zum gemeinsamen Typ
- `logical` wird in numerischen Kontexten zu 0/1 konvertiert
- Integer-Typen werden zu `double` bei Operationen mit Fließkommazahlen

**Weiterführende Links:**
- [GNU Octave Documentation - Numeric Data Types](https://octave.org/doc/v8.1.0/Numeric-Data-Types.html)

</TabItem>
</Tabs>


## 3.9.5. Implicit Variable Declaration

Variablendeklaration ohne explizite Typangabe, Typ wird automatisch inferiert.

### Sprachen {#sprachen}

<Tabs availableTabs={['csharp', 'dart', 'fortran', 'go', 'haskell', 'java', 'kotlin', 'lua', 'matlab', 'mercury', 'octave', 'prolog', 'python', 'rust', 'scala', 'swift', 'typescript']}>
<TabItem value="csharp" label="C#">

```csharp
// var keyword (seit C# 3.0)
var x = 42;  // int
var name = "Alice";  // string
var numbers = new List<int>();  // List<int>

// var kann nicht für Felder verwendet werden
class MyClass {
    // private var field;  // Kompilierfehler!
    private int field = 42;  // Explizit nötig
}
```

**Besonderheiten:**
- `var`-Keyword seit C# 3.0 für lokale Variablen
- Typ wird zur Compile-Zeit inferiert
- Kann nicht für Felder, Parameter oder Rückgabetypen verwendet werden
- Muss initialisiert werden

**Weiterführende Links:**
- [C# Documentation - Implicitly Typed Local Variables](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/statements/declarations#implicitly-typed-local-variables)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// var keyword
var x = 42;  // int
var name = "Alice";  // String
var numbers = <int>[];  // List<int>

// final und const mit var
final var y = 10;  // Kompilierfehler! var nicht mit final/const
final z = 10;  // final int
const w = 20;  // const int
```

**Besonderheiten:**
- `var`-Keyword für lokale Variablen
- Typ wird zur Compile-Zeit inferiert
- `final` und `const` können ohne Typ verwendet werden
- `var` kann nicht mit `final` oder `const` kombiniert werden

**Weiterführende Links:**
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

// Type inference für Funktionen
func add(x, y int) int {
    return x + y
}

result := add(1, 2)  // int
```

**Besonderheiten:**
- `:=`-Syntax für Short Variable Declaration
- Typ wird zur Compile-Zeit inferiert
- Kann mehrere Variablen gleichzeitig deklarieren
- Nur für lokale Variablen, nicht für Package-Level-Variablen

**Weiterführende Links:**
- [Go Documentation - Short Variable Declarations](https://go.dev/ref/spec#Short_variable_declarations)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Type inference
x = 42  -- Num a => a
name = "Alice"  -- [Char]
numbers = [1, 2, 3]  -- Num a => [a]

-- Explizite Typannotation möglich
x' :: Int
x' = 42

-- Type inference für Funktionen
add x y = x + y  -- Num a => a -> a -> a
```

**Besonderheiten:**
- Vollständige Typinferenz (Hindley-Milner)
- Typen werden zur Compile-Zeit inferiert
- Explizite Typannotationen sind optional, aber empfohlen
- Polymorphe Typen werden automatisch inferiert

**Weiterführende Links:**
- [Haskell Documentation - Type Inference](https://www.haskell.org/onlinereport/haskell2010/haskellch4.html#x10-750004.2)

</TabItem>
<TabItem value="java" label="Java">

```java
// var keyword (seit Java 10)
var x = 42;  // int
var name = "Alice";  // String
var numbers = new ArrayList<Integer>();  // ArrayList<Integer>

// var kann nicht für Felder verwendet werden
class MyClass {
    // private var field;  // Kompilierfehler!
    private int field = 42;  // Explizit nötig
}
```

**Besonderheiten:**
- `var`-Keyword seit Java 10 für lokale Variablen
- Typ wird zur Compile-Zeit inferiert
- Kann nicht für Felder, Methoden-Parameter oder Rückgabetypen verwendet werden
- Muss initialisiert werden

**Weiterführende Links:**
- [Java Documentation - Local Variable Type Inference](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// var und val mit type inference
var x = 42  // Int
val name = "Alice"  // String
val numbers = listOf(1, 2, 3)  // List<Int>

// Explizite Typannotation möglich
var y: Int = 10
val z: String = "Hello"

// Type inference für Funktionen
fun add(x: Int, y: Int) = x + y  // Int
```

**Besonderheiten:**
- `var` und `val` mit Typinferenz
- Typ wird zur Compile-Zeit inferiert
- Explizite Typannotationen sind optional
- Kann für lokale Variablen, Eigenschaften und Funktionen verwendet werden

**Weiterführende Links:**
- [Kotlin Documentation - Type Inference](https://kotlinlang.org/docs/type-inference.html)

</TabItem>
<TabItem value="python" label="Python">

```python
# Implicit variable declaration (dynamische Typisierung)
x = 42  # int
name = "Alice"  # str
numbers = [1, 2, 3]  # list

# Typen werden zur Laufzeit bestimmt
x = "Hello"  # Jetzt str

# Type hints (optional, seit Python 3.5)
x: int = 42
name: str = "Alice"
```

**Besonderheiten:**
- Dynamische Typisierung: Variablen haben keinen festen Typ
- Typen werden zur Laufzeit bestimmt
- Variablen können ihren Typ zur Laufzeit ändern
- Type hints (seit Python 3.5) für statische Typanalyse, aber nicht zur Laufzeit

**Weiterführende Links:**
- [Python Documentation - Type Hints](https://docs.python.org/3/library/typing.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Type inference
let x = 42;  // i32
let name = "Alice";  // &str
let numbers = vec![1, 2, 3];  // Vec<i32>

// Explizite Typannotation möglich
let y: i32 = 10;
let z: String = "Hello".to_string();

// Type inference für Funktionen
fn add(x: i32, y: i32) -> i32 {
    x + y
}

let result = add(1, 2);  // i32
```

**Besonderheiten:**
- Vollständige Typinferenz
- Typen werden zur Compile-Zeit inferiert
- Explizite Typannotationen sind optional, aber manchmal nötig
- `let`-Bindungen mit Typinferenz

**Weiterführende Links:**
- [Rust Documentation - Type Inference](https://doc.rust-lang.org/book/ch03-02-data-types.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// var und val mit type inference
var x = 42  // Int
val name = "Alice"  // String
val numbers = List(1, 2, 3)  // List[Int]

// Explizite Typannotation möglich
var y: Int = 10
val z: String = "Hello"

// Type inference für Funktionen
def add(x: Int, y: Int) = x + y  // Int
```

**Besonderheiten:**
- `var` und `val` mit Typinferenz
- Typ wird zur Compile-Zeit inferiert
- Explizite Typannotationen sind optional
- Kann für lokale Variablen, Eigenschaften und Funktionen verwendet werden

**Weiterführende Links:**
- [Scala Documentation - Type Inference](https://docs.scala-lang.org/tour/type-inference.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Type inference
var x = 42  // Int
let name = "Alice"  // String
let numbers = [1, 2, 3]  // [Int]

// Explizite Typannotation möglich
var y: Int = 10
let z: String = "Hello"

// Type inference für Funktionen
func add(x: Int, y: Int) -> Int {
    return x + y
}

let result = add(1, 2)  // Int
```

**Besonderheiten:**
- `var` und `let` mit Typinferenz
- Typ wird zur Compile-Zeit inferiert
- Explizite Typannotationen sind optional
- Kann für lokale Variablen, Eigenschaften und Funktionen verwendet werden

**Weiterführende Links:**
- [Swift Documentation - Type Inference](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/thebasics/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Type inference
let x = 42;  // number
const name = "Alice";  // "Alice" (literal type)
const numbers = [1, 2, 3];  // number[]

// Explizite Typannotation möglich
let y: number = 10;
const z: string = "Hello";

// Type inference für Funktionen
function add(x: number, y: number): number {
    return x + y;
}

const result = add(1, 2);  // number
```

**Besonderheiten:**
- Typinferenz für Variablen und Funktionen
- Typ wird zur Compile-Zeit inferiert
- Explizite Typannotationen sind optional
- Literal types werden für `const`-Variablen inferiert

**Weiterführende Links:**
- [TypeScript Documentation - Type Inference](https://www.typescriptlang.org/docs/handbook/type-inference.html)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Implizite Variablendeklaration (Standard-Verhalten)
! Variablen mit I-N am Anfang sind INTEGER
! Variablen mit A-H, O-Z am Anfang sind REAL
i = 42        ! implizit INTEGER
x = 3.14      ! implizit REAL
name = 2.71   ! implizit REAL (beginnt mit n = INTEGER!)
```

**Besonderheiten:**
- Standard-Verhalten: Variablen werden basierend auf dem ersten Buchstaben typisiert
- I-N → INTEGER, A-H und O-Z → REAL
- Kann mit `IMPLICIT NONE` deaktiviert werden (empfohlen für moderne Programme)
- Häufige Fehlerquelle bei Tippfehlern

**Weiterführende Links:**
- [Fortran Documentation - Implicit Statement](https://gcc.gnu.org/onlinedocs/gfortran/IMPLICIT.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Implizite Variablendeklaration: Globale Variablen
-- Variablen ohne "local" werden automatisch global
count = 42          -- Globale Variable, implizit deklariert
name = "Hallo"      -- Globale Variable, implizit deklariert

function example()
    result = 100    -- Globale Variable, implizit deklariert (in Funktion!)
end

-- Explizite lokale Deklaration zum Vergleich
local x = 10       -- Lokale Variable, explizit mit "local"

-- Globale Variablen sind im _G-Table gespeichert
print(_G["count"])  -- 42
```

**Besonderheiten:**
- Variablen ohne `local` werden automatisch als globale Variablen in `_G` erstellt
- Kein Deklarations-Schlüsselwort für globale Variablen nötig
- Häufige Fehlerquelle: vergessenes `local` erzeugt unbeabsichtigte globale Variablen
- Linting-Tools wie `luacheck` warnen vor impliziten Globals

**Weiterführende Links:**
- [Lua Reference Manual - Variables](https://www.lua.org/manual/5.4/manual.html#3.2)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% Implizite Variablendeklaration durch Zuweisung
x = 42;           % double
name = "Hello";   % string
flag = true;      % logical
items = [1, 2, 3]; % double array
```

**Besonderheiten:**
- Variablen werden implizit durch Zuweisung deklariert
- Kein Schlüsselwort für Variablendeklaration erforderlich
- Typ wird dynamisch bestimmt

**Weiterführende Links:**
- [MATLAB Documentation - Variables](https://www.mathworks.com/help/matlab/matlab_prog/creating-and-concatenating-matrices.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```mercury
% Implicit Variable Declaration: Variablen werden bei erster Verwendung deklariert
:- pred main(io::di, io::uo) is det.
main(!IO) :-
    X = 42,                    % int (implizit deklariert, Typ inferiert)
    Name = "Alice",            % string (implizit deklariert, Typ inferiert)
    Items = [1, 2, 3],        % list(int) (implizit deklariert, Typ inferiert)
    Result = X + 10,           % int (implizit deklariert, Typ inferiert)
    io.write_int(Result, !IO), io.nl(!IO),
    io.write_string(Name, !IO), io.nl(!IO),
    io.write(Items, !IO), io.nl(!IO).

% Variablen müssen nicht vorab deklariert werden.
% Der Compiler inferiert den Typ aus dem Kontext.
```

**Besonderheiten:**
- Variablen werden bei ihrer ersten Verwendung implizit deklariert (kein `var`/`let` nötig).
- Der Typ wird vollständig durch Typinferenz zur Compile-Zeit bestimmt.
- Variablennamen müssen mit einem Großbuchstaben beginnen (Prolog-Konvention).
- Im Gegensatz zu dynamischen Sprachen ist die Typisierung trotzdem statisch und strikt.

**Weiterführende Links:**
- [The Mercury Language Reference Manual - Variables](https://www.mercurylang.org/documentation/reference.html#Variables)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
% Implicit Variable Declaration: Zuweisung erzeugt die Variable
x = 42;
name = "Hallo";
flag = true;
```

**Besonderheiten:**
- Variablen werden durch erste Zuweisung implizit deklariert
- Kein Deklarations-Keyword erforderlich
- Typ wird dynamisch zur Laufzeit bestimmt

**Weiterführende Links:**
- [GNU Octave Documentation - Variables](https://octave.org/doc/v8.1.0/Variables.html)

</TabItem>
</Tabs>


## 3.9.6. Implicit None (Fortran-style)

Deaktivierung der impliziten Variablendeklaration basierend auf dem ersten Buchstaben des Variablennamens.

### Sprachen {#sprachen}

<Tabs availableTabs={['fortran']}>
<TabItem value="fortran" label="Fortran">

```fortran
! Implicit typing (Standard-Verhalten)
! Variablen, die mit I-N beginnen, sind INTEGER
! Variablen, die mit anderen Buchstaben beginnen, sind REAL
implicit integer (i-n)
implicit real (a-h,o-z)

i = 42        ! INTEGER (implizit)
x = 3.14      ! REAL (implizit)

! Implicit none (deaktiviert implizite Typisierung)
implicit none

integer :: count
real :: value
double precision :: pi

! Alle Variablen müssen explizit deklariert werden
count = 10
value = 3.14
pi = 3.141592653589793d0
```

**Besonderheiten:**
- `implicit none` deaktiviert implizite Typisierung
- Standard-Verhalten: Variablen werden basierend auf dem ersten Buchstaben typisiert
- Mit `implicit none` müssen alle Variablen explizit deklariert werden
- Empfohlen für moderne Fortran-Programme zur Vermeidung von Fehlern

**Weiterführende Links:**
- [Fortran Documentation - Implicit Statement](https://gcc.gnu.org/onlinedocs/gfortran/IMPLICIT.html)

</TabItem>
</Tabs>


## 3.9.7. Smart Casts

Automatische Typumwandlung nach Typ-Prüfung durch den Compiler.

### Sprachen {#sprachen}

<Tabs availableTabs={['dart', 'kotlin', 'scala', 'swift', 'typescript']}>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Smart cast nach is-Prüfung
val obj: Any = "Hello"
if (obj is String) {
    println(obj.length)  // Automatischer Cast zu String
}

// Smart cast mit when
when (obj) {
    is String -> println(obj.length)  // Automatischer Cast
    is Int -> println(obj * 2)  // Automatischer Cast
    else -> println("Unknown type")
}

// Smart cast mit && und ||
if (obj is String && obj.length > 0) {
    println(obj.uppercase())  // Automatischer Cast
}
```

**Besonderheiten:**
- Automatischer Cast nach `is`-Prüfung
- Funktioniert mit `if`, `when`, `&&`, `||`
- Compiler prüft, dass Variable nicht zwischen Prüfung und Verwendung geändert wird
- Funktioniert nur mit `val`, nicht mit `var`

**Weiterführende Links:**
- [Kotlin Documentation - Smart Casts](https://kotlinlang.org/docs/typecasts.html#smart-casts)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Smart cast mit pattern matching
val obj: Any = "Hello"
obj match {
  case str: String => println(str.length)  // Automatischer Cast
  case num: Int => println(num * 2)  // Automatischer Cast
  case _ => println("Unknown type")
}

// Smart cast mit if
if (obj.isInstanceOf[String]) {
  val str = obj.asInstanceOf[String]  // Explizit nötig
  println(str.length)
}
```

**Besonderheiten:**
- Pattern matching ermöglicht automatische Typumwandlung
- `isInstanceOf`/`asInstanceOf` erfordern explizite Casts
- Pattern matching ist die bevorzugte Methode für Smart Casts
- Compiler prüft Typen zur Compile-Zeit

**Weiterführende Links:**
- [Scala Documentation - Pattern Matching](https://docs.scala-lang.org/tour/pattern-matching.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Smart cast mit optional binding
let obj: Any = "Hello"
if let str = obj as? String {
    print(str.count)  // Automatischer Cast zu String
}

// Smart cast mit guard
guard let str = obj as? String else {
    return
}
print(str.count)  // Automatischer Cast zu String

// Smart cast mit switch
switch obj {
case let str as String:
    print(str.count)  // Automatischer Cast
case let num as Int:
    print(num * 2)  // Automatischer Cast
default:
    print("Unknown type")
}
```

**Besonderheiten:**
- Optional binding mit `if let` ermöglicht automatische Typumwandlung
- `guard let` für frühe Returns mit automatischem Cast
- Pattern matching mit `switch` ermöglicht automatische Typumwandlung
- Compiler prüft Typen zur Compile-Zeit

**Weiterführende Links:**
- [Swift Documentation - Type Casting](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/typecasting/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Type narrowing (Smart Cast)
function process(value: unknown) {
    if (typeof value === "string") {
        console.log(value.length);  // Automatischer Cast zu string
    }
}

// Type narrowing mit type guards
function isString(value: unknown): value is string {
    return typeof value === "string";
}

function process2(value: unknown) {
    if (isString(value)) {
        console.log(value.toUpperCase());  // Automatischer Cast zu string
    }
}

// Type narrowing mit instanceof
class MyClass {
    method() { return "hello"; }
}

function process3(value: unknown) {
    if (value instanceof MyClass) {
        value.method();  // Automatischer Cast zu MyClass
    }
}
```

**Besonderheiten:**
- Type narrowing: Compiler verengt Typ nach Prüfung
- Funktioniert mit `typeof`, `instanceof`, type guards
- Nur zur Compile-Zeit, keine Runtime-Typ-Prüfung
- Type guards ermöglichen benutzerdefinierte Typ-Prüfungen

**Weiterführende Links:**
- [TypeScript Documentation - Type Narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Smart Casts: Type Promotion
void processValue(Object value) {
  if (value is String) {
    // value ist automatisch als String promoted
    print(value.length);
    print(value.toUpperCase());
  }
  
  if (value is int) {
    // value ist automatisch als int promoted
    print(value.isEven);
  }
}

// Auch mit logischen Operatoren
void checkAndUse(Object? value) {
  if (value != null && value is String) {
    // value ist als non-nullable String promoted
    print(value.length);
  }
}
```

**Besonderheiten:**
- Type Promotion funktioniert mit `is`-Checks und Null-Checks
- Promotion gilt im gesamten Scope nach dem Check
- Funktioniert auch in `else`-Zweigen (negierte Promotion)
- Seit Dart 2.0; verbesserte Flow Analysis seit Dart 2.12 (Sound Null Safety)

**Weiterführende Links:**
- [Dart Documentation - Type System](https://dart.dev/language/type-system)

</TabItem>
</Tabs>


## 3.9.8. Type Guards

Funktionen, die zur Laufzeit den Typ eines Wertes prüfen und den Compiler über den Typ informieren.

### Sprachen {#sprachen}

<Tabs availableTabs={['typescript']}>
<TabItem value="typescript" label="TypeScript">

```typescript
// Type guard function
function isString(value: unknown): value is string {
    return typeof value === "string";
}

function process(value: unknown) {
    if (isString(value)) {
        console.log(value.toUpperCase());  // Type narrowing zu string
    }
}

// Type guard für Objekte
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
        console.log(value.name);  // Type narrowing zu User
    }
}

// Type guard mit instanceof
class MyClass {
    method() { return "hello"; }
}

function isMyClass(value: unknown): value is MyClass {
    return value instanceof MyClass;
}

function processClass(value: unknown) {
    if (isMyClass(value)) {
        value.method();  // Type narrowing zu MyClass
    }
}
```

**Besonderheiten:**
- Type guard functions mit `value is Type`-Syntax
- Prüfen zur Laufzeit den Typ eines Wertes
- Informieren den Compiler über den Typ (Type Narrowing)
- Können für primitive Typen, Objekte und Klassen verwendet werden

**Weiterführende Links:**
- [TypeScript Documentation - Type Guards](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates)

</TabItem>
</Tabs>


## 3.9.9. Const Correctness

Garantie, dass const-qualifizierte Werte nicht modifiziert werden können.

### Sprachen {#sprachen}

<Tabs availableTabs={['c', 'cpp', 'd', 'nim', 'objective-c', 'rust', 'zig']}>
<TabItem value="c" label="C">

```c
// const variables
const int x = 42;
// x = 10;  // Kompilierfehler!

// const pointers
const int* ptr1;  // Pointer zu const int
int* const ptr2;  // const pointer zu int
const int* const ptr3;  // const pointer zu const int

// const function parameters
void process(const int* data, size_t length) {
    // data kann nicht modifiziert werden
    // *data = 10;  // Kompilierfehler!
}

// const return values
const char* getMessage() {
    return "Hello";
}
```

**Besonderheiten:**
- `const`-Qualifier für Variablen, Pointer und Funktionen
- Compiler prüft zur Compile-Zeit, dass const-Werte nicht modifiziert werden
- `const`-Pointer können auf nicht-const-Daten zeigen, aber Daten können nicht über Pointer modifiziert werden
- `const`-Qualifier kann mit `volatile` kombiniert werden

**Weiterführende Links:**
- [C Reference - Type Qualifiers](https://en.cppreference.com/w/c/language/const)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// const variables
const int x = 42;
// x = 10;  // Kompilierfehler!

// const member functions
class MyClass {
public:
    int getValue() const {  // const member function
        return value_;  // Kann member nicht modifizieren
    }
    
    void setValue(int v) {
        value_ = v;  // Nicht-const member function
    }
    
private:
    int value_;
};

// const references
void process(const std::vector<int>& vec) {
    // vec kann nicht modifiziert werden
    // vec.push_back(10);  // Kompilierfehler!
}

// constexpr (seit C++11)
constexpr int square(int x) {
    return x * x;
}

constexpr int result = square(5);  // Compile-time evaluation
```

**Besonderheiten:**
- `const`-Qualifier für Variablen, Member-Funktionen, Referenzen
- `const`-Member-Funktionen können Objekt nicht modifizieren
- `constexpr` (seit C++11) für Compile-Time-Konstanten
- `mutable`-Keyword ermöglicht Modifikation in const-Member-Funktionen

**Weiterführende Links:**
- [C++ Reference - Const Correctness](https://isocpp.org/wiki/faq/const-correctness)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Immutable variables (default)
let x = 42;
// x = 10;  // Kompilierfehler!

// Mutable variables
let mut y = 10;
y = 20;  // OK

// const (compile-time constants)
const MAX_VALUE: i32 = 100;

// Immutable references
fn process(data: &Vec<i32>) {
    // data kann nicht modifiziert werden
    // data.push(10);  // Kompilierfehler!
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

**Besonderheiten:**
- Variablen sind standardmäßig immutable
- `mut`-Keyword für mutable Variablen und Referenzen
- `const` für Compile-Time-Konstanten
- `const fn` für Compile-Time-Funktionen
- Ownership-System verhindert unerlaubte Modifikationen

**Weiterführende Links:**
- [Rust Documentation - Variables and Mutability](https://doc.rust-lang.org/book/ch03-01-variables-and-mutability.html)

</TabItem>
<TabItem value="d" label="D">

```d
// Const Correctness: const, immutable, inout
const int x = 42;
// x = 10;  // Fehler: cannot modify const

immutable int y = 100;
// y = 200;  // Fehler: cannot modify immutable

// const Parameter
void printValue(const int[] arr) {
    // arr[0] = 10;  // Fehler: cannot modify const
    writeln(arr);
}

// immutable: tief unveränderlich, Thread-sicher
immutable string greeting = "Hallo";

// inout: generisch über Mutabilität
inout(char)[] trim(inout(char)[] s) {
    // Gibt const/mutable/immutable zurück, je nach Input
    return s;
}
```

**Besonderheiten:**
- `const`: transitiv unveränderlich (kann aber anderswo verändert werden)
- `immutable`: garantiert unveränderlich, implizit Thread-sicher
- `inout`: Wildcard für const/mutable/immutable (generische Mutabilität)
- Transitive Const: `const(int[])` macht auch die Array-Elemente const

**Weiterführende Links:**
- [D Language Specification - Const and Immutable](https://dlang.org/spec/const3.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Const Correctness
const MaxSize = 100          # Compile-Time-Konstante
const Pi = 3.14159           # Compile-Time-Konstante
let name = "Alice"           # Runtime-Konstante (unveränderlich)
var count = 0                # Veränderlich

# count = 10  # OK
# name = "Bob"  # Fehler: name ist unveränderlich
```

**Besonderheiten:**
- `const` für Compile-Time-Konstanten
- `let` für Runtime-Konstanten (nach Initialisierung unveränderlich)
- `var` für veränderliche Variablen
- Keine explizite const-Referenz wie in C++

**Weiterführende Links:**
- [Nim Documentation - Constants](https://nim-lang.org/docs/manual.html#constants-and-constant-expressions)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Const-Variablen
const int maxSize = 100;
// maxSize = 200; // Fehler: Cannot assign to variable with const-qualified type

// Const-Pointer
const char *str = "Hallo";    // Pointer auf const char
char *const ptr = buffer;      // Const Pointer auf char
const char *const both = "X";  // Const Pointer auf const char

// Const in Methodenparametern
- (void)processData:(const int *)data length:(int)length;
```

**Besonderheiten:**
- C-style `const`-Qualifier für Variablen und Pointer
- `const` verhindert Modifikation des qualifizierten Werts
- Pointer-Const vs. Wert-Const Unterscheidung
- Methoden-Parameter können als `const` markiert werden

**Weiterführende Links:**
- [Apple Documentation - Programming with Objective-C](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Const Correctness: const vs var
const x: i32 = 42;    // Immutable
// x = 10;             // Kompilierfehler!

var y: i32 = 42;      // Mutable
y = 10;                // OK

// Const Pointers
var value: i32 = 42;
const ptr: *const i32 = &value;  // Pointer auf const i32
// ptr.* = 10;                    // Kompilierfehler!

const mut_ptr: *i32 = &value;    // Mutable Pointer
mut_ptr.* = 10;                   // OK

// Const Slices
const slice: []const u8 = "Hallo";  // Slice auf const u8
// slice[0] = 'h';                   // Kompilierfehler!
```

**Besonderheiten:**
- `const` und `var` unterscheiden zwischen immutablen und mutablen Bindungen
- `*const T` und `*T` unterscheiden zwischen Pointern auf const und mutable Daten
- `[]const T` und `[]T` unterscheiden zwischen const und mutable Slices
- Compiler erzwingt Const Correctness strikt

**Weiterführende Links:**
- [Zig Documentation - Variables](https://ziglang.org/documentation/master/#Variables)

</TabItem>
</Tabs>


## 3.9.10. Distinct Types

Neue Typen, die strukturell identisch zu einem bestehenden Typ sind, aber als separate Typen behandelt werden.

### Sprachen {#sprachen}

<Tabs availableTabs={['nim', 'odin', 'purescript']} orangeTabs={['zig']}>
<TabItem value="nim" label="Nim">

```nim
# Distinct type
type
  UserId = distinct int
  ProductId = distinct int

var userId: UserId = UserId(42)
var productId: ProductId = ProductId(100)

# Distinct types sind nicht kompatibel
# userId = productId  # Kompilierfehler!

# Explizite Konvertierung nötig
var id: int = int(userId)

# Distinct types können Methoden haben
proc `$`(id: UserId): string = "UserId(" & $int(id) & ")"

echo userId  # UserId(42)
```

**Besonderheiten:**
- `distinct`-Keyword erstellt neue Typen basierend auf bestehenden Typen
- Distinct types sind strukturell identisch, aber nicht kompatibel
- Explizite Konvertierung zum Basistyp nötig
- Können eigene Methoden und Operatoren definieren

**Weiterführende Links:**
- [Nim Documentation - Distinct Types](https://nim-lang.org/docs/manual.html#types-distinct-type)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Distinct type
UserId :: distinct int
ProductId :: distinct int

userId: UserId = 42
productId: ProductId = 100

// Distinct types sind nicht kompatibel
// userId = productId  // Kompilierfehler!

// Explizite Konvertierung nötig
id: int = int(userId)

// Distinct types können Methoden haben
UserId :: struct {
    using _: int,
}

UserId :: proc(id: UserId) -> string {
    return fmt.tprintf("UserId(%d)", int(id))
}
```

**Besonderheiten:**
- `distinct`-Keyword erstellt neue Typen basierend auf bestehenden Typen
- Distinct types sind strukturell identisch, aber nicht kompatibel
- Explizite Konvertierung zum Basistyp nötig
- Können mit `using` für Method-Aufrufe verwendet werden

**Weiterführende Links:**
- [Odin Documentation - Distinct Types](https://odin-lang.org/docs/overview/#distinct-types)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Distinct type (mit struct)
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

// Distinct types sind nicht kompatibel
// userId = productId  // Kompilierfehler!
```

**Besonderheiten:**
- Zig hat kein explizites `distinct`-Keyword
- Distinct types werden durch separate structs implementiert
- Structs mit gleichen Feldern sind nicht kompatibel
- Können eigene Methoden und Format-Funktionen definieren

**Weiterführende Links:**
- [Zig Documentation - Structs](https://ziglang.org/documentation/0.11.0/#structs)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Distinct Types: newtype
newtype UserId = UserId Int
newtype Email = Email String

-- Funktionen mit Distinct Types
getUserName :: UserId -> String
getUserName (UserId id) = "User " <> show id

sendMail :: Email -> String
sendMail (Email addr) = "Sending to " <> addr

-- Kompiliert nicht: UserId und Int sind verschiedene Typen
-- getUserName 42 -- Fehler: Could not match type Int with UserId
```

**Besonderheiten:**
- `newtype` erstellt einen distinkt typisierten Wrapper
- Keine Laufzeit-Overhead (zero-cost abstraction)
- Erzwingt Typsicherheit zur Compile-Zeit

**Weiterführende Links:**
- [PureScript Documentation - Newtypes](https://github.com/purescript/documentation/blob/master/language/Types.md#newtypes)

</TabItem>
</Tabs>


## 3.9.11. Inline Classes / Value Classes

Klassen, die zur Laufzeit keine zusätzliche Objekt-Instanz erzeugen, sondern direkt den Wrapped-Wert verwenden.

### Sprachen {#sprachen}

<Tabs availableTabs={['kotlin', 'scala']}>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Inline class (seit Kotlin 1.3, deprecated in 1.5, value class seit 1.5)
@JvmInline
value class UserId(val value: Int)

@JvmInline
value class ProductId(val value: Int)

val userId = UserId(42)
val productId = ProductId(100)

// Value classes sind nicht kompatibel
// userId = productId  // Kompilierfehler!

// Zur Laufzeit wird nur der Int-Wert verwendet (keine Boxing)
fun processUserId(id: UserId) {
    println(id.value)
}

processUserId(userId)  // Keine Objekt-Instanz zur Laufzeit
```

**Besonderheiten:**
- `@JvmInline value class` seit Kotlin 1.5 (ersetzt deprecated `inline class`)
- Muss genau eine Property haben
- Zur Laufzeit wird nur der Wrapped-Wert verwendet (keine Boxing)
- Können Methoden und Properties haben
- Können Interfaces implementieren

**Weiterführende Links:**
- [Kotlin Documentation - Inline Classes](https://kotlinlang.org/docs/inline-classes.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Value class (seit Scala 2.10)
class UserId(val value: Int) extends AnyVal

class ProductId(val value: Int) extends AnyVal

val userId = new UserId(42)
val productId = new ProductId(100)

// Value classes sind nicht kompatibel
// userId = productId  // Kompilierfehler!

// Zur Laufzeit wird nur der Int-Wert verwendet (keine Boxing)
def processUserId(id: UserId): Unit = {
  println(id.value)
}

processUserId(userId)  // Keine Objekt-Instanz zur Laufzeit
```

**Besonderheiten:**
- `extends AnyVal` erstellt eine Value Class
- Muss genau ein Feld haben
- Zur Laufzeit wird nur der Wrapped-Wert verwendet (keine Boxing)
- Können Methoden haben, aber keine andere Felder
- Können Traits implementieren, aber keine Klassen erweitern

**Weiterführende Links:**
- [Scala Documentation - Value Classes](https://docs.scala-lang.org/overviews/core/value-classes.html)

</TabItem>
</Tabs>


## 3.9.12. Reified Type Parameters

Type-Parameter, die zur Laufzeit verfügbar sind und für Typ-Prüfungen verwendet werden können.

### Sprachen {#sprachen}

<Tabs availableTabs={['dart', 'kotlin']}>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Reified type parameter
inline fun <reified T> checkType(value: Any): Boolean {
    return value is T
}

val result1 = checkType<String>("Hello")  // true
val result2 = checkType<Int>("Hello")     // false

// Reified type parameter mit when
inline fun <reified T> process(value: Any) {
    when (T::class) {
        String::class -> println("It's a String: $value")
        Int::class -> println("It's an Int: $value")
        else -> println("Unknown type")
    }
}

process<String>("Hello")  // It's a String: Hello
process<Int>(42)          // It's an Int: 42

// Reified type parameter für Instanziierung
inline fun <reified T> createInstance(): T? {
    return T::class.constructors.firstOrNull()?.call() as? T
}

val instance = createInstance<MyClass>()
```

**Besonderheiten:**
- `reified`-Keyword nur mit `inline`-Funktionen möglich
- Type-Parameter ist zur Laufzeit verfügbar
- Ermöglicht `is`-Prüfungen und `::class`-Zugriff auf Type-Parameter
- Nur für Funktionen, nicht für Klassen oder Interfaces

**Weiterführende Links:**
- [Kotlin Documentation - Reified Type Parameters](https://kotlinlang.org/docs/inline-functions.html#reified-type-parameters)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Reified Type Parameters
void checkType<T>(T value) {
  print(T);           // Gibt den tatsächlichen Typ aus
  print(value is T);  // true - Typ-Check zur Laufzeit möglich
}

// Typ-Parameter sind zur Laufzeit verfügbar
List<int> numbers = [1, 2, 3];
print(numbers is List<int>);    // true
print(numbers is List<String>); // false

// Factory-Pattern mit reified Generics
T createDefault<T>() {
  if (T == int) return 0 as T;
  if (T == String) return '' as T;
  throw UnsupportedError('Typ $T nicht unterstützt');
}
```

**Besonderheiten:**
- Generics sind vollständig reified (nicht wie Java mit Type Erasure)
- Typ-Parameter können zur Laufzeit abgefragt und verglichen werden
- `is`-Checks mit Generics funktionieren korrekt zur Laufzeit

**Weiterführende Links:**
- [Dart Documentation - Generics](https://dart.dev/language/generics)

</TabItem>
</Tabs>


## 3.9.13. Utility Types

Vordefinierte generische Typen für häufige Typ-Transformationen.

### Sprachen {#sprachen}

<Tabs availableTabs={['typescript']}>
<TabItem value="typescript" label="TypeScript">

```typescript
// Partial - macht alle Properties optional
interface User {
    name: string;
    age: number;
}

type PartialUser = Partial<User>;
// { name?: string; age?: number; }

// Required - macht alle Properties required
type RequiredUser = Required<PartialUser>;
// { name: string; age: number; }

// Readonly - macht alle Properties readonly
type ReadonlyUser = Readonly<User>;
// { readonly name: string; readonly age: number; }

// Pick - wählt bestimmte Properties aus
type UserName = Pick<User, "name">;
// { name: string; }

// Omit - entfernt bestimmte Properties
type UserWithoutAge = Omit<User, "age">;
// { name: string; }

// Record - erstellt Objekt-Typ mit bestimmten Keys
type UserMap = Record<string, User>;
// { [key: string]: User; }

// Exclude - entfernt Typen aus Union
type NonNullable<T> = Exclude<T, null | undefined>;

// Extract - extrahiert Typen aus Union
type StringOrNumber = Extract<string | number | boolean, string | number>;
// string | number
```

**Besonderheiten:**
- Vordefinierte Utility Types für häufige Typ-Transformationen
- `Partial`, `Required`, `Readonly` für Property-Modifikationen
- `Pick`, `Omit` für Property-Auswahl
- `Record`, `Exclude`, `Extract` für Union-Typ-Manipulation
- Können kombiniert werden für komplexe Typ-Transformationen

**Weiterführende Links:**
- [TypeScript Documentation - Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html)

</TabItem>
</Tabs>


## 3.9.14. Mapped Types

Typen, die neue Typen durch Iteration über die Properties eines bestehenden Typs erstellen.

### Sprachen {#sprachen}

<Tabs availableTabs={['typescript']}>
<TabItem value="typescript" label="TypeScript">

```typescript
// Mapped type - macht alle Properties optional
type Optional<T> = {
    [K in keyof T]?: T[K];
};

interface User {
    name: string;
    age: number;
}

type OptionalUser = Optional<User>;
// { name?: string; age?: number; }

// Mapped type - macht alle Properties readonly
type Readonly<T> = {
    readonly [K in keyof T]: T[K];
};

type ReadonlyUser = Readonly<User>;
// { readonly name: string; readonly age: number; }

// Mapped type - ändert Property-Typen
type Stringify<T> = {
    [K in keyof T]: string;
};

type StringifiedUser = Stringify<User>;
// { name: string; age: string; }

// Mapped type mit Filter
type NonFunctionPropertyNames<T> = {
    [K in keyof T]: T[K] extends Function ? never : K;
}[keyof T];

type UserProperties = NonFunctionPropertyNames<User>;
// "name" | "age"
```

**Besonderheiten:**
- `[K in keyof T]`-Syntax für Mapped Types
- Iteriert über alle Properties eines Typs
- Kann Property-Typen modifizieren oder filtern
- Wird häufig für Utility Types verwendet
- Kann mit Conditional Types kombiniert werden

**Weiterführende Links:**
- [TypeScript Documentation - Mapped Types](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html)

</TabItem>
</Tabs>


## 3.9.15. Conditional Types

Typen, die basierend auf einer Bedingung unterschiedliche Typen zurückgeben.

### Sprachen {#sprachen}

<Tabs availableTabs={['typescript']}>
<TabItem value="typescript" label="TypeScript">

```typescript
// Conditional type - grundlegende Syntax
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

**Besonderheiten:**
- `T extends U ? X : Y`-Syntax für Conditional Types
- `infer`-Keyword für Typ-Inferenz in Conditional Types
- Können für komplexe Typ-Transformationen verwendet werden
- Werden häufig für Utility Types verwendet
- Können mit Mapped Types kombiniert werden

**Weiterführende Links:**
- [TypeScript Documentation - Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html)

</TabItem>
</Tabs>


## 3.9.16. Template Literal Types

Typen, die String-Literal-Typen basierend auf Template-String-Syntax erstellen.

### Sprachen {#sprachen}

<Tabs availableTabs={['typescript']}>
<TabItem value="typescript" label="TypeScript">

```typescript
// Template literal type - grundlegende Syntax
type Greeting = `Hello, ${string}!`;

const greeting: Greeting = "Hello, World!";  // OK
// const invalid: Greeting = "Hi, World!";  // Kompilierfehler!

// Template literal type mit Union types
type EventName = "click" | "hover" | "focus";
type HandlerName = `on${EventName}`;
// "onclick" | "onhover" | "onfocus"

const handler: HandlerName = "onclick";  // OK

// Template literal type mit Capitalize
type Capitalize<T extends string> = T extends `${infer F}${infer R}`
    ? `${Uppercase<F>}${R}`
    : T;

type CapitalizedEvent = Capitalize<EventName>;
// "Click" | "Hover" | "Focus"

// Template literal type für API-Routen
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";
type ApiRoute = `/${string}`;
type FullRoute = `${HttpMethod} ${ApiRoute}`;

const route: FullRoute = "GET /users";  // OK
// const invalid: FullRoute = "GET users";  // Kompilierfehler!
```

**Besonderheiten:**
- Template-String-Syntax mit Backticks und `${}`
- Können String-Literal-Typen kombinieren
- Unterstützen String-Manipulation wie `Uppercase`, `Lowercase`, `Capitalize`
- Können mit Conditional Types und Mapped Types kombiniert werden
- Seit TypeScript 4.1 verfügbar

**Weiterführende Links:**
- [TypeScript Documentation - Template Literal Types](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html)

</TabItem>
</Tabs>


## 3.9.17. Index Signatures

Definition von Objekt-Typen mit dynamischen Property-Namen.

### Sprachen {#sprachen}

<Tabs availableTabs={['javascript', 'typescript']}>
<TabItem value="javascript" label="JavaScript">

```javascript
// Index signatures mit Proxy (seit ES6)
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

// Index signatures mit Map
const map = new Map();
map.set("name", "Alice");
map.set("age", 30);
console.log(map.get("name"));  // "Alice"
```

**Besonderheiten:**
- Dynamische Property-Zugriffe sind standardmäßig möglich
- `Proxy` (seit ES6) ermöglicht benutzerdefinierte Property-Zugriffe
- `Map` für strukturierte Key-Value-Speicherung
- Keine statische Typ-Prüfung zur Compile-Zeit

**Weiterführende Links:**
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
// dict["age"] = 30;  // Kompilierfehler!

// Index signature - number keys
interface NumberDictionary {
    [index: number]: string;
}

const arr: NumberDictionary = ["Alice", "Bob"];
console.log(arr[0]);  // "Alice"

// Index signature mit mixed properties
interface MixedDictionary {
    name: string;  // Explizite Property
    [key: string]: string | number;  // Index signature
}

const mixed: MixedDictionary = {
    name: "Alice",
    age: 30,
    city: "Berlin"
};

// Index signature mit readonly
interface ReadonlyDictionary {
    readonly [key: string]: string;
}

const readonly: ReadonlyDictionary = {
    name: "Alice"
};
// readonly["name"] = "Bob";  // Kompilierfehler!
```

**Besonderheiten:**
- `[key: string]` oder `[index: number]` für Index Signatures
- Können mit expliziten Properties kombiniert werden
- Explizite Properties müssen mit Index Signature kompatibel sein
- `readonly` kann für Index Signatures verwendet werden
- Statische Typ-Prüfung zur Compile-Zeit

**Weiterführende Links:**
- [TypeScript Documentation - Index Signatures](https://www.typescriptlang.org/docs/handbook/2/objects.html#index-signatures)

</TabItem>
</Tabs>

