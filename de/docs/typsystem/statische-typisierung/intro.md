---
slug: /typsystem/statische-typisierung
title: 3.4. Statische Typisierung
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 3.4. Statische Typisierung

Typisierung zur Compile-Zeit mit expliziten oder inferierten Typen.

## 3.4.1. Explizite Typannotationen

Explizite Angabe von Typen für Variablen, Parameter und Rückgabewerte zur Compile-Zeit.

### Sprachen {#sprachen}

<Tabs availableTabs={['ada', 'c', 'carbon', 'common-lisp', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'eiffel', 'elm', 'fortran', 'fsharp', 'gleam', 'go', 'groovy', 'haskell', 'haxe', 'idris', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'mercury', 'mojo', 'nim', 'object-pascal', 'objective-c', 'ocaml', 'odin', 'purescript', 'python', 'roc', 'ruby', 'rust', 'scala', 'swift', 'typescript', 'v', 'vbnet', 'zig']} yellowTabs={['php']}>
<TabItem value="ada" label="Ada">

```ada
-- Explizite Typannotationen
count : Integer := 42;
name : String := "Hallo";
price : Float := 19.99;

-- Funktionsparameter und Rückgabewert
function Add(a : Integer; b : Integer) return Integer is
begin
    return a + b;
end Add;
```

**Besonderheiten:**
- Typen müssen explizit angegeben werden
- Unterstützt Subtypen und abgeleitete Typen

**Weiterführende Links:**
- [Ada Reference Manual - Type Declarations](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-3-2-1.html)

</TabItem>
<TabItem value="c" label="C">

```c
// Explizite Typannotationen
int count = 42;
char* name = "Hallo";
double price = 19.99;

// Funktionsparameter und Rückgabewert
int add(int a, int b) {
    return a + b;
}
```

**Besonderheiten:**
- Typen müssen explizit angegeben werden
- Unterstützt `typedef` für Typaliase

**Weiterführende Links:**
- [C Standard - Type Specifiers](https://en.cppreference.com/w/c/language/declarations)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Explizite Typannotationen
int count = 42;
string name = "Hallo";
double price = 19.99;

// Funktionsparameter und Rückgabewert
int Add(int a, int b) {
    return a + b;
}

// Mit var für implizite Typisierung (seit C# 3.0)
var items = new List<string>();
```

**Besonderheiten:**
- Typen können explizit angegeben werden
- Unterstützt `var` für Typinferenz (seit C# 3.0)
- Typannotationen sind optional, wenn der Typ inferiert werden kann

**Weiterführende Links:**
- [Microsoft C# Documentation - Types](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/types)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Explizite Typannotationen
int count = 42;
std::string name = "Hallo";
double price = 19.99;

// Funktionsparameter und Rückgabewert
int add(int a, int b) {
    return a + b;
}

// Mit auto für implizite Typisierung (seit C++11)
auto items = std::vector<std::string>();
```

**Besonderheiten:**
- Typen können explizit angegeben werden
- Unterstützt `auto` für Typinferenz (seit C++11)
- Unterstützt `decltype` für Typableitung aus Ausdrücken (seit C++11)

**Weiterführende Links:**
- [cppreference.com - Type specifiers](https://en.cppreference.com/w/cpp/language/declarations)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Explizite Typannotationen
var count: i32 = 42;
var name: String = "Hallo";
var price: f64 = 19.99;

// Funktionsparameter und Rückgabewert
fn Add(a: i32, b: i32) -> i32 {
    return a + b;
}
```

**Besonderheiten:**
- Experimentelle Sprache, Syntax kann sich noch ändern
- Verwendet `var` mit expliziten Typannotationen nach Doppelpunkt

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Explizite Typannotationen
count : Int32 = 42
name : String = "Hallo"
price : Float64 = 19.99

# Funktionsparameter und Rückgabewert
def add(a : Int32, b : Int32) : Int32
  a + b
end

# Typannotationen sind optional
items = ["Apfel", "Banane"]
```

**Besonderheiten:**
- Typannotationen sind optional, aber empfohlen
- Typinferenz ist standardmäßig aktiv

**Weiterführende Links:**
- [Crystal Documentation - Type System](https://crystal-lang.org/reference/1.11/syntax_and_semantics/type_system.html)

</TabItem>
<TabItem value="d" label="D">

```d
// Explizite Typannotationen
int count = 42;
string name = "Hallo";
double price = 19.99;

// Funktionsparameter und Rückgabewert
int add(int a, int b) {
    return a + b;
}

// Mit auto für implizite Typisierung
auto items = ["Apfel", "Banane"];
```

**Besonderheiten:**
- Typen können explizit angegeben werden
- Unterstützt `auto` für Typinferenz

**Weiterführende Links:**
- [D Language Specification - Type](https://dlang.org/spec/type.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Explizite Typannotationen
int count = 42;
String name = "Hallo";
double price = 19.99;

// Funktionsparameter und Rückgabewert
int add(int a, int b) {
    return a + b;
}

// Typannotationen sind optional
var items = ["Apfel", "Banane"];
```

**Besonderheiten:**
- Typannotationen sind optional, aber empfohlen
- Typinferenz ist standardmäßig aktiv

**Weiterführende Links:**
- [Dart Language Specification - Types](https://dart.dev/guides/language/spec)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
-- Explizite Typannotationen
count: INTEGER
    do
        count := 42
    end

name: STRING
    do
        name := "Hallo"
    end

-- Funktionsparameter und Rückgabewert
add (a: INTEGER; b: INTEGER): INTEGER
    do
        Result := a + b
    end
```

**Besonderheiten:**
- Typen müssen explizit angegeben werden
- Verwendet Doppelpunkt-Syntax für Typannotationen

**Weiterführende Links:**
- [Eiffel Language Specification](https://www.eiffel.org/doc/eiffel)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Explizite Typannotationen
let count: int = 42
let name: string = "Hallo"
let price: float = 19.99

// Funktionsparameter und Rückgabewert
let add (a: int) (b: int): int =
    a + b

// Typannotationen sind optional
let items = ["Apfel"; "Banane"]
```

**Besonderheiten:**
- Typannotationen sind optional, aber empfohlen
- Typinferenz ist standardmäßig aktiv

**Weiterführende Links:**
- [F# Language Reference - Types](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/type-inference)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Explizite Typannotationen
integer :: count = 42
character(len=5) :: name = "Hallo"
real :: price = 19.99

! Funktionsparameter und Rückgabewert
integer function add(a, b)
    integer, intent(in) :: a, b
    add = a + b
end function add
```

**Besonderheiten:**
- Typen müssen explizit angegeben werden
- Unterstützt `implicit none` um implizite Typisierung zu deaktivieren

**Weiterführende Links:**
- [Fortran Standard - Type Declaration](https://gcc.gnu.org/onlinedocs/gfortran/Type-Declarations.html)

</TabItem>
<TabItem value="go" label="Go">

```go
// Explizite Typannotationen
var count int = 42
var name string = "Hallo"
var price float64 = 19.99

// Funktionsparameter und Rückgabewert
func add(a int, b int) int {
    return a + b
}

// Typannotationen sind optional
items := []string{"Apfel", "Banane"}
```

**Besonderheiten:**
- Typannotationen sind optional, wenn der Typ inferiert werden kann
- Unterstützt kurze Variablendeklaration mit `:=`

**Weiterführende Links:**
- [Go Language Specification - Types](https://go.dev/ref/spec#Types)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Explizite Typannotationen
int count = 42
String name = "Hallo"
double price = 19.99

// Funktionsparameter und Rückgabewert
int add(int a, int b) {
    return a + b
}

// Typannotationen sind optional
def items = ["Apfel", "Banane"]
```

**Besonderheiten:**
- Typannotationen sind optional
- Unterstützt `def` für dynamische Typisierung

**Weiterführende Links:**
- [Groovy Documentation - Static Type Checking](https://groovy-lang.org/semantics.html#static-type-checking)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Explizite Typannotationen
var count: Int = 42;
var name: String = "Hallo";
var price: Float = 19.99;

// Funktionsparameter und Rückgabewert
function add(a: Int, b: Int): Int {
    return a + b;
}

// Typannotationen sind optional
var items = ["Apfel", "Banane"];
```

**Besonderheiten:**
- Typannotationen sind optional
- Typinferenz ist standardmäßig aktiv

**Weiterführende Links:**
- [Haxe Manual - Type System](https://haxe.org/manual/type-system.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Explizite Typannotationen
count : Int
count = 42

name : String
name = "Hallo"

-- Funktionsparameter und Rückgabewert
add : Int -> Int -> Int
add a b = a + b
```

**Besonderheiten:**
- Typen müssen explizit angegeben werden
- Verwendet Curry-Howard-Korrespondenz
- Typen werden mit `:` annotiert

**Weiterführende Links:**
- [Idris 2 Documentation - Types](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Explizite Typannotationen
int count = 42;
String name = "Hallo";
double price = 19.99;

// Funktionsparameter und Rückgabewert
int add(int a, int b) {
    return a + b;
}

// Mit var für implizite Typisierung (seit Java 10)
var items = new ArrayList<String>();
```

**Besonderheiten:**
- Typen müssen explizit angegeben werden
- Unterstützt `var` für lokale Variablen-Typinferenz (seit Java 10)

**Weiterführende Links:**
- [Java Language Specification - Types, Values, and Variables](https://docs.oracle.com/javase/specs/jls/se21/html/jls-4.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Explizite Typannotationen mit JSDoc
/**
 * @type {number}
 */
let count = 42;

/**
 * @type {string}
 */
let name = "Hallo";

/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a, b) {
    return a + b;
}
```

**Besonderheiten:**
- Unterstützt Typannotationen über JSDoc-Kommentare
- Typen werden zur Laufzeit nicht geprüft
- TypeScript bietet native Typannotationen

**Weiterführende Links:**
- [JSDoc Documentation - Type Tags](https://jsdoc.app/tags-type.html)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Explizite Typannotationen
count::Int = 42
name::String = "Hallo"
price::Float64 = 19.99

# Funktionsparameter und Rückgabewert
function add(a::Int, b::Int)::Int
    return a + b
end

# Typannotationen sind optional
items = ["Apfel", "Banane"]
```

**Besonderheiten:**
- Typannotationen sind optional, aber empfohlen für Performance
- Typinferenz ist standardmäßig aktiv
- Verwendet `::` für Typannotationen

**Weiterführende Links:**
- [Julia Documentation - Types](https://docs.julialang.org/en/v1/manual/types/)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Explizite Typannotationen
val count: int = 42
val name: string = "Hallo"
val price: float64 = 19.99

// Funktionsparameter und Rückgabewert
fun add(a: int, b: int): int
  a + b

// Typannotationen sind optional (Type Inference)
val items = ["Apfel", "Banane"]
```

**Besonderheiten:**
- Typannotationen verwenden `: typ` Syntax nach dem Bezeichner
- Typannotationen sind optional dank Hindley-Milner Type Inference
- Funktionsparameter und Rückgabewerte können explizit annotiert werden
- Effekt-Annotationen sind ebenfalls optional (z.B. `: console int`)

**Weiterführende Links:**
- [Koka Language Guide - Type Annotations](https://koka-lang.github.io/koka/doc/book.html#sec-type-annotations)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Explizite Typannotationen
val count: Int = 42
val name: String = "Hallo"
val price: Double = 19.99

// Funktionsparameter und Rückgabewert
fun add(a: Int, b: Int): Int {
    return a + b
}

// Typannotationen sind optional
val items = listOf("Apfel", "Banane")
```

**Besonderheiten:**
- Typannotationen sind optional, wenn der Typ inferiert werden kann
- Typinferenz ist standardmäßig aktiv

**Weiterführende Links:**
- [Kotlin Documentation - Basic Types](https://kotlinlang.org/docs/basic-types.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Explizite Typannotationen
def count : Nat := 42
def name : String := "Hallo"
def price : Float := 19.99

-- Funktionsparameter und Rückgabewert
def add (a : Nat) (b : Nat) : Nat :=
  a + b

-- Typannotationen sind oft optional (Typinferenz)
def items := ["Apfel", "Banane"]
```

**Besonderheiten:**
- Typannotationen mit `:` nach dem Bezeichner
- Funktionsparameter werden einzeln annotiert `(name : Type)`
- Typannotationen sind optional, wenn der Typ inferiert werden kann
- Unterstützt Universe-Annotationen (`Type u`)

**Weiterführende Links:**
- [Lean 4 Documentation - Dependent Type Theory](https://lean-lang.org/theorem_proving_in_lean4/dependent_type_theory.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```mercury
% Explizite Typannotationen
% Mercury verwendet Deklarationen für Prädikate und Funktionen.

% Typdeklaration für ein Prädikat
:- pred greet(string::in, io::di, io::uo) is det.
greet(Name, !IO) :-
    io.write_string("Hallo, ", !IO),
    io.write_string(Name, !IO),
    io.nl(!IO).

% Typdeklaration für eine Funktion
:- func add(int, int) = int.
add(A, B) = A + B.

% Typdeklaration für Datentypen
:- type point
    --->    point(
                x :: float,
                y :: float
            ).

:- pred main(io::di, io::uo) is det.
main(!IO) :-
    greet("Welt", !IO),
    Result = add(10, 20),
    io.write_int(Result, !IO), io.nl(!IO).
```

**Besonderheiten:**
- Typannotationen werden als separate Deklarationen mit `:- pred` bzw. `:- func` angegeben.
- Jede Deklaration enthält Typen UND Modi (z.B. `in`, `out`, `di`, `uo`).
- Determinismus-Deklarationen (z.B. `is det`, `is semidet`) sind Teil der Typsignatur.
- Lokale Variablen werden typinferiert, aber Prädikats-/Funktionsdeklarationen sind Pflicht.

**Weiterführende Links:**
- [The Mercury Language Reference Manual - Declarations](https://www.mercurylang.org/documentation/reference.html#Declarations)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# Explizite Typannotationen
var count: Int = 42
var name: String = "Hallo"
var price: Float64 = 19.99

# Funktionsparameter und Rückgabewert
fn add(a: Int, b: Int) -> Int:
    return a + b

# Typannotationen sind optional
var items = List[String]()
```

**Besonderheiten:**
- Unterstützt explizite Typannotationen mit `:` Syntax
- Typannotationen sind optional
- Kombiniert Python-Syntax mit statischer Typisierung

**Weiterführende Links:**
- [Mojo Documentation - Type System](https://docs.modular.com/mojo/manual/basics/types)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Explizite Typannotationen
var count: int = 42
var name: string = "Hallo"
var price: float = 19.99

# Funktionsparameter und Rückgabewert
proc add(a: int, b: int): int =
    return a + b

# Typannotationen sind optional
var items = @["Apfel", "Banane"]
```

**Besonderheiten:**
- Typannotationen sind optional
- Typinferenz ist standardmäßig aktiv

**Weiterführende Links:**
- [Nim Manual - Types](https://nim-lang.org/docs/manual.html#types)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Explizite Typannotationen
int count = 42;
NSString *name = @"Hallo";
double price = 19.99;

// Funktionsparameter und Rückgabewert
- (int)add:(int)a with:(int)b {
    return a + b;
}
```

**Besonderheiten:**
- Typen müssen explizit angegeben werden
- Verwendet C-Typen mit ObjC-Erweiterungen

**Weiterführende Links:**
- [Objective-C Programming Language](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Explizite Typannotationen
var
  count: Integer = 42;
  name: String = 'Hallo';
  price: Real = 19.99;

// Funktionsparameter und Rückgabewert
function Add(a: Integer; b: Integer): Integer;
begin
  Result := a + b;
end;
```

**Besonderheiten:**
- Typen müssen explizit angegeben werden
- Verwendet `:` für Typannotationen

**Weiterführende Links:**
- [Free Pascal Documentation - Types](https://www.freepascal.org/docs-html/ref/ref.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Explizite Typannotationen *)
let count : int = 42
let name : string = "Hallo"
let price : float = 19.99

(* Funktionsparameter und Rückgabewert *)
let add (a : int) (b : int) : int =
    a + b

(* Typannotationen sind optional *)
let items = ["Apfel"; "Banane"]
```

**Besonderheiten:**
- Typannotationen sind optional
- Typinferenz ist standardmäßig aktiv

**Weiterführende Links:**
- [OCaml Manual - Type System](https://v2.ocaml.org/manual/types.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Explizite Typannotationen
count: int = 42
name: string = "Hallo"
price: f64 = 19.99

// Funktionsparameter und Rückgabewert
add :: proc(a: int, b: int) -> int {
    return a + b
}

// Typannotationen sind optional
items := []string{"Apfel", "Banane"}
```

**Besonderheiten:**
- Typannotationen sind optional
- Unterstützt `:=` für Typinferenz

**Weiterführende Links:**
- [Odin Documentation - Types](https://odin-lang.org/docs/overview/#types)

</TabItem>
<TabItem value="php" label="PHP">

```php
// Explizite Typannotationen (seit PHP 7.0)
$count = 42; // int
$name = "Hallo"; // string
$price = 19.99; // float

// Funktionsparameter und Rückgabewert
function add(int $a, int $b): int {
    return $a + $b;
}
```

**Besonderheiten:**
- Typannotationen für Funktionsparameter und Rückgabewerte (seit PHP 7.0)
- Typannotationen für Variablen sind nicht direkt unterstützt, aber Typen können über PHPDoc dokumentiert werden

**Weiterführende Links:**
- [PHP Documentation - Type Declarations](https://www.php.net/manual/en/functions.arguments.php#functions.arguments.type-declaration)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Explizite Typannotationen
count :: Int
count = 42

name :: String
name = "Hallo"

-- Funktionsparameter und Rückgabewert
add :: Int -> Int -> Int
add a b = a + b
```

**Besonderheiten:**
- Explizite Typannotationen sind optional dank Type Inference, aber empfohlen für Top-Level-Definitionen
- Typen werden mit `::` annotiert
- Funktionssignaturen verwenden `->` für Parameter und Rückgabetyp

**Weiterführende Links:**
- [PureScript Documentation - Types](https://github.com/purescript/documentation/blob/master/language/Types.md)

</TabItem>
<TabItem value="python" label="Python">

```python
# Explizite Typannotationen (seit Python 3.5)
count: int = 42
name: str = "Hallo"
price: float = 19.99

# Funktionsparameter und Rückgabewert
def add(a: int, b: int) -> int:
    return a + b

# Typannotationen sind optional
items = ["Apfel", "Banane"]
```

**Besonderheiten:**
- Typannotationen sind optional (seit Python 3.5)
- Typen werden zur Laufzeit nicht geprüft
- Statische Typprüfung mit Tools wie `mypy` möglich

**Weiterführende Links:**
- [Python Documentation - Type Hints](https://docs.python.org/3/library/typing.html)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Explizite Typannotationen mit RBS (Ruby Type Signature)
# count.rbs
count: Integer

# count.rb
count = 42

# name.rbs
name: String

# name.rb
name = "Hallo"

# Funktionsparameter und Rückgabewert
# add.rbs
def add: (Integer a, Integer b) -> Integer

# add.rb
def add(a, b)
  a + b
end
```

**Besonderheiten:**
- Typannotationen über RBS (Ruby Type Signature) in separaten `.rbs` Dateien
- Typen werden zur Laufzeit nicht geprüft
- Statische Typprüfung mit Tools wie `steep` möglich

**Weiterführende Links:**
- [RBS Documentation](https://github.com/ruby/rbs)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Explizite Typannotationen
let count: i32 = 42;
let name: &str = "Hallo";
let price: f64 = 19.99;

// Funktionsparameter und Rückgabewert
fn add(a: i32, b: i32) -> i32 {
    a + b
}

// Typannotationen sind optional
let items = vec!["Apfel", "Banane"];
```

**Besonderheiten:**
- Typannotationen sind optional, wenn der Typ inferiert werden kann
- Typinferenz ist standardmäßig aktiv

**Weiterführende Links:**
- [Rust Book - Types](https://doc.rust-lang.org/book/ch03-02-data-types.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Explizite Typannotationen
val count: Int = 42
val name: String = "Hallo"
val price: Double = 19.99

// Funktionsparameter und Rückgabewert
def add(a: Int, b: Int): Int = {
    a + b
}

// Typannotationen sind optional
val items = List("Apfel", "Banane")
```

**Besonderheiten:**
- Typannotationen sind optional
- Typinferenz ist standardmäßig aktiv

**Weiterführende Links:**
- [Scala Documentation - Types](https://docs.scala-lang.org/tour/unified-types.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Explizite Typannotationen
var count: Int = 42
var name: String = "Hallo"
var price: Double = 19.99

// Funktionsparameter und Rückgabewert
func add(a: Int, b: Int) -> Int {
    return a + b
}

// Typannotationen sind optional
var items = ["Apfel", "Banane"]
```

**Besonderheiten:**
- Typannotationen sind optional, wenn der Typ inferiert werden kann
- Typinferenz ist standardmäßig aktiv

**Weiterführende Links:**
- [Swift Documentation - Types](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/types/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Explizite Typannotationen
let count: number = 42;
let name: string = "Hallo";
let price: number = 19.99;

// Funktionsparameter und Rückgabewert
function add(a: number, b: number): number {
    return a + b;
}

// Typannotationen sind optional
let items = ["Apfel", "Banane"];
```

**Besonderheiten:**
- Typannotationen sind optional
- Typinferenz ist standardmäßig aktiv
- Typen werden zur Compile-Zeit geprüft

**Weiterführende Links:**
- [TypeScript Handbook - Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Explizite Typannotationen
Dim count As Integer = 42
Dim name As String = "Hallo"
Dim price As Double = 19.99

' Funktionsparameter und Rückgabewert
Function Add(a As Integer, b As Integer) As Integer
    Return a + b
End Function

' Mit Option Infer On für implizite Typisierung
Dim items = New List(Of String)()
```

**Besonderheiten:**
- Typen können explizit angegeben werden
- Unterstützt `Option Infer On` für Typinferenz

**Weiterführende Links:**
- [VB.NET Documentation - Types](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/data-types/)

</TabItem>
<TabItem value="v" label="V">

```v
// Explizite Typannotationen
mut count := 42  // int
mut name := "Hallo"  // string
mut price := 19.99  // f64

// Explizite Typannotationen mit Typ
mut count: int = 42
mut name: string = "Hallo"
mut price: f64 = 19.99

// Funktionsparameter und Rückgabewert
fn add(a int, b int) int {
    return a + b
}
```

**Besonderheiten:**
- Typannotationen sind optional
- Unterstützt `:=` für Typinferenz

**Weiterführende Links:**
- [V Language Documentation - Types](https://github.com/vlang/v/blob/master/doc/docs.md#types)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Explizite Typannotationen
var count: i32 = 42;
var name: []const u8 = "Hallo";
var price: f64 = 19.99;

// Funktionsparameter und Rückgabewert
fn add(a: i32, b: i32) i32 {
    return a + b;
}

// Typannotationen sind optional
var items = [_][]const u8{"Apfel", "Banane"};
```

**Besonderheiten:**
- Typannotationen sind optional
- Typinferenz ist standardmäßig aktiv

**Weiterführende Links:**
- [Zig Documentation - Types](https://ziglang.org/documentation/0.11.0/#Types)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Explizite Typdeklarationen
(defun add (a b)
  (declare (type integer a b))
  (the integer (+ a b)))

;; Typdeklaration für Variablen
(let ((x 42))
  (declare (type fixnum x))
  (* x 2))
```

**Besonderheiten:**
- Typdeklarationen über `declare` und `the`
- Deklarationen sind optional und dienen primär als Optimierungshinweise für den Compiler
- Keine Compile-Time-Typprüfung garantiert (implementierungsabhängig)
- SBCL nutzt Typdeklarationen für erweiterte Compile-Time-Warnungen

**Weiterführende Links:**
- [Common Lisp HyperSpec - declare](http://www.lispworks.com/documentation/HyperSpec/Body/s_declar.htm)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Explizite Typannotationen
count : Int
count = 42

name : String
name = "Hallo"

price : Float
price = 19.99

-- Funktionen mit Typannotationen
add : Int -> Int -> Int
add a b = a + b

greet : String -> String
greet name = "Hallo, " ++ name
```

**Besonderheiten:**
- Typannotationen sind optional, aber für öffentliche APIs empfohlen
- Typannotationen stehen auf einer separaten Zeile über der Definition
- Notation: `funktionsname : Typ1 -> Typ2 -> Rückgabetyp`
- Der Compiler prüft Typannotationen gegen den inferierten Typ

**Weiterführende Links:**
- [Elm Documentation - Type Annotations](https://guide.elm-lang.org/types/reading_types.html)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// Explizite Typannotationen
let count: Int = 42
let name: String = "Hallo"
let price: Float = 19.99

// Funktionen mit expliziten Typen
pub fn add(a: Int, b: Int) -> Int {
  a + b
}
```

**Besonderheiten:**
- Typannotationen sind optional, da Type Inference verfügbar ist
- Funktionsparameter und Rückgabewerte können annotiert werden
- `let` Bindungen können optional mit Typannotation versehen werden

**Weiterführende Links:**
- [Gleam Documentation - Type Annotations](https://tour.gleam.run/basics/type-annotations/)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Explizite Typannotationen mit ::
count :: Int
count = 42

name :: String
name = "Hallo"

price :: Double
price = 19.99

-- Funktionsparameter und Rückgabewert
add :: Int -> Int -> Int
add a b = a + b

-- Polymorphe Typannotation
identity :: a -> a
identity x = x
```

**Besonderheiten:**
- Typannotationen verwenden `::` Syntax
- Typannotationen sind optional dank Hindley-Milner Type Inference
- Empfohlene Best Practice: Top-Level-Funktionen immer mit Typannotation versehen
- Unterstützt polymorphe Typannotationen mit Typvariablen

**Weiterführende Links:**
- [Haskell Documentation - Types](https://www.haskell.org/tutorial/goodies.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Explizite Typannotationen
count : I64
count = 42

name : Str
name = "Hallo"

add : I64, I64 -> I64
add = \a, b -> a + b
```

**Besonderheiten:**
- Typannotationen stehen über der Bindung
- Format: `name : Type`
- Funktionssignaturen mit Komma-getrennten Parametern und `->` für den Rückgabetyp

**Weiterführende Links:**
- [Roc Documentation - Type Annotations](https://www.roc-lang.org/tutorial#type-annotations)

</TabItem>
</Tabs>


## 3.4.2. Type Inference

Automatische Ableitung von Typen zur Compile-Zeit aus dem Kontext, ohne explizite Typannotationen.

### Sprachen {#sprachen}

<Tabs availableTabs={['carbon', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'elm', 'fsharp', 'gleam', 'go', 'groovy', 'haskell', 'haxe', 'idris', 'java', 'julia', 'koka', 'kotlin', 'lean4', 'mercury', 'mojo', 'nim', 'ocaml', 'odin', 'purescript', 'python', 'roc', 'rust', 'scala', 'swift', 'typescript', 'v', 'vbnet', 'zig']}>
<TabItem value="csharp" label="C#">

```csharp
// Type Inference mit var (seit C# 3.0)
var count = 42;  // int
var name = "Hallo";  // string
var price = 19.99;  // double

// Funktionsparameter und Rückgabewert
var result = Add(10, 20);  // int

int Add(int a, int b) {
    return a + b;
}

// Mit expliziten Typen
int count2 = 42;
string name2 = "Hallo";
```

**Besonderheiten:**
- `var` für lokale Variablen (seit C# 3.0)
- Typ muss zur Compile-Zeit bestimmbar sein
- Funktionsparameter und Rückgabewerte können nicht mit `var` deklariert werden

**Weiterführende Links:**
- [Microsoft C# Documentation - Implicitly Typed Local Variables](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/statements/declarations#implicitly-typed-local-variables)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Type Inference mit auto (seit C++11)
auto count = 42;  // int
auto name = std::string("Hallo");  // std::string
auto price = 19.99;  // double

// Funktionsparameter und Rückgabewert
auto result = add(10, 20);  // int

int add(int a, int b) {
    return a + b;
}

// Mit expliziten Typen
int count2 = 42;
std::string name2 = "Hallo";
```

**Besonderheiten:**
- `auto` für Variablen (seit C++11)
- `decltype` für Typableitung aus Ausdrücken (seit C++11)
- Funktionsparameter können mit `auto` deklariert werden (seit C++14, mit Concepts seit C++20)

**Weiterführende Links:**
- [cppreference.com - auto specifier](https://en.cppreference.com/w/cpp/language/auto)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Type Inference mit var
var count = 42;  // i32
var name = "Hallo";  // String
var price = 19.99;  // f64

// Funktionsparameter und Rückgabewert
var result = Add(10, 20);  // i32

fn Add(a: i32, b: i32) -> i32 {
    return a + b;
}
```

**Besonderheiten:**
- Experimentelle Sprache, Syntax kann sich noch ändern
- `var` für Type Inference

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Type Inference (standardmäßig aktiv)
count = 42  # Int32
name = "Hallo"  # String
price = 19.99  # Float64

# Funktionsparameter und Rückgabewert
result = add(10, 20)  # Int32

def add(a : Int32, b : Int32) : Int32
  a + b
end

# Explizite Typannotationen sind optional
count2 : Int32 = 42
```

**Besonderheiten:**
- Type Inference ist standardmäßig aktiv
- Typen werden zur Compile-Zeit inferiert
- Explizite Typannotationen sind optional, aber empfohlen

**Weiterführende Links:**
- [Crystal Documentation - Type System](https://crystal-lang.org/reference/1.11/syntax_and_semantics/type_system.html)

</TabItem>
<TabItem value="d" label="D">

```d
// Type Inference mit auto
auto count = 42;  // int
auto name = "Hallo";  // string
auto price = 19.99;  // double

// Funktionsparameter und Rückgabewert
auto result = add(10, 20);  // int

int add(int a, int b) {
    return a + b;
}

// Mit expliziten Typen
int count2 = 42;
string name2 = "Hallo";
```

**Besonderheiten:**
- `auto` für Type Inference
- Typ muss zur Compile-Zeit bestimmbar sein

**Weiterführende Links:**
- [D Language Specification - Type Inference](https://dlang.org/spec/type.html#type-inference)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Type Inference (standardmäßig aktiv)
var count = 42;  // int
var name = "Hallo";  // String
var price = 19.99;  // double

// Funktionsparameter und Rückgabewert
var result = add(10, 20);  // int

int add(int a, int b) {
    return a + b;
}

// Explizite Typannotationen sind optional
int count2 = 42;
String name2 = "Hallo";
```

**Besonderheiten:**
- Type Inference ist standardmäßig aktiv mit `var`
- Typen werden zur Compile-Zeit inferiert
- Explizite Typannotationen sind optional, aber empfohlen

**Weiterführende Links:**
- [Dart Language Specification - Type Inference](https://dart.dev/guides/language/spec#type-inference)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Type Inference (standardmäßig aktiv)
count = 42  -- Int
name = "Hallo"  -- String
price = 19.99  -- Float

-- Funktionsparameter und Rückgabewert
result = add 10 20  -- Int

add a b = a + b  -- Int -> Int -> Int

-- Explizite Typannotationen sind optional
count2 : Int
count2 = 42
```

**Besonderheiten:**
- Type Inference ist standardmäßig aktiv
- Typen werden zur Compile-Zeit inferiert
- Explizite Typannotationen sind optional, aber empfohlen für öffentliche APIs

**Weiterführende Links:**
- [Elm Documentation - Type Annotations](https://guide.elm-lang.org/types/type_annotations.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Type Inference (standardmäßig aktiv)
let count = 42  // int
let name = "Hallo"  // string
let price = 19.99  // float

// Funktionsparameter und Rückgabewert
let add a b = a + b  // int -> int -> int
let result = add 10 20  // int

// Explizite Typannotationen sind optional
let count2: int = 42
```

**Besonderheiten:**
- Type Inference ist standardmäßig aktiv
- Typen werden zur Compile-Zeit inferiert
- Explizite Typannotationen sind optional, aber empfohlen für Klarheit

**Weiterführende Links:**
- [F# Language Reference - Type Inference](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/type-inference)

</TabItem>
<TabItem value="go" label="Go">

```go
// Type Inference mit :=
count := 42  // int
name := "Hallo"  // string
price := 19.99  // float64

// Funktionsparameter und Rückgabewert
result := add(10, 20)  // int

func add(a int, b int) int {
    return a + b
}

// Mit expliziten Typen
var count2 int = 42
var name2 string = "Hallo"
```

**Besonderheiten:**
- `:=` für kurze Variablendeklaration mit Type Inference
- Typ muss zur Compile-Zeit bestimmbar sein
- Funktionsparameter müssen explizit typisiert werden

**Weiterführende Links:**
- [Go Language Specification - Type Inference](https://go.dev/ref/spec#Type_inference)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Type Inference mit def
def count = 42  // Integer
def name = "Hallo"  // String
def price = 19.99  // Double

// Funktionsparameter und Rückgabewert
def result = add(10, 20)  // Integer

def add(a, b) {
    return a + b
}

// Mit expliziten Typen
int count2 = 42
String name2 = "Hallo"
```

**Besonderheiten:**
- `def` für Type Inference (dynamische Typisierung zur Laufzeit)
- Unterstützt auch statische Typisierung mit expliziten Typen

**Weiterführende Links:**
- [Groovy Documentation - Static Type Checking](https://groovy-lang.org/semantics.html#static-type-checking)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Type Inference (standardmäßig aktiv)
count = 42  -- Int
name = "Hallo"  -- [Char]
price = 19.99  -- Double

-- Funktionsparameter und Rückgabewert
result = add 10 20  -- Int

add a b = a + b  -- Int -> Int -> Int

-- Explizite Typannotationen sind optional
count2 :: Int
count2 = 42
```

**Besonderheiten:**
- Type Inference ist standardmäßig aktiv
- Typen werden zur Compile-Zeit inferiert
- Explizite Typannotationen sind optional, aber empfohlen für öffentliche APIs

**Weiterführende Links:**
- [Haskell Documentation - Type Inference](https://www.haskell.org/tutorial/classes.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Type Inference (standardmäßig aktiv)
var count = 42;  // Int
var name = "Hallo";  // String
var price = 19.99;  // Float

// Funktionsparameter und Rückgabewert
var result = add(10, 20);  // Int

function add(a: Int, b: Int): Int {
    return a + b;
}

// Explizite Typannotationen sind optional
var count2: Int = 42;
```

**Besonderheiten:**
- Type Inference ist standardmäßig aktiv
- Typen werden zur Compile-Zeit inferiert
- Explizite Typannotationen sind optional

**Weiterführende Links:**
- [Haxe Manual - Type Inference](https://haxe.org/manual/type-system-type-inference.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Type Inference mit var (seit Java 10)
var count = 42;  // int
var name = "Hallo";  // String
var price = 19.99;  // double

// Funktionsparameter und Rückgabewert
var result = add(10, 20);  // int

int add(int a, int b) {
    return a + b;
}

// Mit expliziten Typen
int count2 = 42;
String name2 = "Hallo";
```

**Besonderheiten:**
- `var` für lokale Variablen (seit Java 10)
- Typ muss zur Compile-Zeit bestimmbar sein
- Funktionsparameter und Rückgabewerte können nicht mit `var` deklariert werden

**Weiterführende Links:**
- [Java Language Specification - Local Variable Type Inference](https://docs.oracle.com/javase/specs/jls/se21/html/jls-14.html#jls-14.4.1)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Type Inference (standardmäßig aktiv)
count = 42  # Int64
name = "Hallo"  # String
price = 19.99  # Float64

# Funktion mit inferierten Rückgabetyp
function add(a::Int, b::Int)
    a + b  # Rückgabetyp wird als Int inferiert
end

result = add(10, 20)  # Int64

# Explizite Typannotationen sind optional
count2::Int = 42
```

**Besonderheiten:**
- Type Inference ist standardmäßig aktiv
- Typen werden zur Compile-Zeit inferiert (JIT-Compilation)
- Explizite Typannotationen sind optional, aber empfohlen für Performance

**Weiterführende Links:**
- [Julia Documentation - Type System](https://docs.julialang.org/en/v1/manual/types/)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Type Inference (Hindley-Milner, standardmäßig aktiv)
val count = 42       // int
val name = "Hallo"   // string
val price = 19.99    // float64

// Funktionen mit inferierten Typen
fun add(a, b)
  a + b  // inferiert als (int, int) -> int

// Auch Effekte werden inferiert
fun greet(name)
  println("Hallo " ++ name)  // inferiert als (string) -> console ()
```

**Besonderheiten:**
- Koka verwendet globale Hindley-Milner Type Inference
- Alle Typen und Effekte werden automatisch inferiert
- Explizite Typannotationen sind optional, aber nützlich für Dokumentation
- Effekte werden ebenfalls inferiert (z.B. `console`, `exn`)

**Weiterführende Links:**
- [Koka Language Guide - Type Inference](https://koka-lang.github.io/koka/doc/book.html#sec-type-inference)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Type Inference (standardmäßig aktiv)
val count = 42  // Int
val name = "Hallo"  // String
val price = 19.99  // Double

// Funktionsparameter und Rückgabewert
val result = add(10, 20)  // Int

fun add(a: Int, b: Int): Int {
    return a + b
}

// Explizite Typannotationen sind optional
val count2: Int = 42
```

**Besonderheiten:**
- Type Inference ist standardmäßig aktiv
- Typen werden zur Compile-Zeit inferiert
- Explizite Typannotationen sind optional, wenn der Typ inferiert werden kann

**Weiterführende Links:**
- [Kotlin Documentation - Type Inference](https://kotlinlang.org/docs/type-inference.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Type Inference (standardmäßig aktiv)
def count := 42          -- Nat
def name := "Hallo"      -- String
def price := 19.99       -- Float

-- Funktionsparameter und Rückgabewert
def result := add 10 20  -- Nat

def add (a b : Nat) : Nat := a + b

-- Implizite Typparameter werden automatisch inferiert
def identity (x : α) : α := x
def r := identity 42     -- α wird als Nat inferiert
```

**Besonderheiten:**
- Type Inference ist standardmäßig aktiv
- Typen werden zur Compile-Zeit inferiert (Elaboration)
- Implizite Typparameter werden automatisch aufgelöst
- Bidirektionale Typinferenz für abhängige Typen

**Weiterführende Links:**
- [Lean 4 Documentation - Type Inference](https://lean-lang.org/theorem_proving_in_lean4/dependent_type_theory.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```mercury
% Type Inference: Lokale Variablen werden automatisch typisiert
:- pred main(io::di, io::uo) is det.
main(!IO) :-
    X = 42,                    % int (inferiert)
    Name = "Hallo",            % string (inferiert)
    Items = [1, 2, 3],         % list(int) (inferiert)
    Result = add(X, 10),       % int (inferiert aus add/2)
    io.write_int(Result, !IO), io.nl(!IO),
    io.write_string(Name, !IO), io.nl(!IO).

% Typdeklaration ist für Prädikate/Funktionen Pflicht
:- func add(int, int) = int.
add(A, B) = A + B.

% Polymorphe Typen werden inferiert
:- func identity(T) = T.
identity(X) = X.

% Aufruf — T wird als int inferiert
:- func result = int.
result = identity(42).
```

**Besonderheiten:**
- Lokale Variablen werden vollständig durch Typinferenz typisiert.
- Prädikats- und Funktionsdeklarationen erfordern explizite Typannotationen.
- Polymorphe Typvariablen werden bei der Verwendung automatisch inferiert.
- Das Typsystem basiert auf Hindley-Milner-artiger Inferenz.

**Weiterführende Links:**
- [The Mercury Language Reference Manual - Type System](https://www.mercurylang.org/documentation/reference.html#Type_system)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# Type Inference mit var
var count = 42  # Int
var name = "Hallo"  # String
var price = 19.99  # Float64

# Funktionsparameter und Rückgabewert
var result = add(10, 20)  # Int

fn add(a: Int, b: Int) -> Int:
    return a + b

# Explizite Typannotationen sind optional
var count2: Int = 42
```

**Besonderheiten:**
- `var` für Type Inference
- Kombiniert Python-Syntax mit statischer Typisierung
- Typen werden zur Compile-Zeit inferiert

**Weiterführende Links:**
- [Mojo Documentation - Type System](https://docs.modular.com/mojo/manual/basics/types)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Type Inference (standardmäßig aktiv)
var count = 42  # int
var name = "Hallo"  # string
var price = 19.99  # float

# Funktionsparameter und Rückgabewert
var result = add(10, 20)  # int

proc add(a: int, b: int): int =
    return a + b

# Explizite Typannotationen sind optional
var count2: int = 42
```

**Besonderheiten:**
- Type Inference ist standardmäßig aktiv
- Typen werden zur Compile-Zeit inferiert
- Explizite Typannotationen sind optional

**Weiterführende Links:**
- [Nim Manual - Type Inference](https://nim-lang.org/docs/manual.html#type-inference)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Type Inference (standardmäßig aktiv) *)
let count = 42  (* int *)
let name = "Hallo"  (* string *)
let price = 19.99  (* float *)

(* Funktionsparameter und Rückgabewert *)
let result = add 10 20  (* int *)

let add a b = a + b  (* int -> int -> int *)

(* Explizite Typannotationen sind optional *)
let count2: int = 42
```

**Besonderheiten:**
- Type Inference ist standardmäßig aktiv
- Typen werden zur Compile-Zeit inferiert
- Explizite Typannotationen sind optional, aber empfohlen für Klarheit

**Weiterführende Links:**
- [OCaml Manual - Type Inference](https://v2.ocaml.org/manual/typedecl.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Type Inference mit :=
count := 42  // int
name := "Hallo"  // string
price := 19.99  // f64

// Funktionsparameter und Rückgabewert
result := add(10, 20)  // int

add :: proc(a: int, b: int) -> int {
    return a + b
}

// Explizite Typannotationen sind optional
count2: int = 42
```

**Besonderheiten:**
- `:=` für Type Inference
- Typ muss zur Compile-Zeit bestimmbar sein
- Funktionsparameter müssen explizit typisiert werden

**Weiterführende Links:**
- [Odin Documentation - Type System](https://odin-lang.org/docs/overview/#types)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Type Inference (standardmäßig aktiv)
count = 42  -- Int
name = "Hallo"  -- String
price = 19.99  -- Number

-- Funktionsparameter und Rückgabewert
result = add 10 20  -- Int

add a b = a + b  -- Int -> Int -> Int

-- Explizite Typannotationen sind optional
count2 :: Int
count2 = 42
```

**Besonderheiten:**
- Type Inference ist standardmäßig aktiv
- Typen werden zur Compile-Zeit inferiert
- Explizite Typannotationen sind optional, aber empfohlen für öffentliche APIs

**Weiterführende Links:**
- [PureScript Documentation - Type Inference](https://github.com/purescript/documentation/blob/master/language/Types.md)

</TabItem>
<TabItem value="python" label="Python">

```python
# Type Inference (dynamisch zur Laufzeit)
count = 42  # int
name = "Hallo"  # str
price = 19.99  # float

# Funktionsparameter und Rückgabewert
result = add(10, 20)  # int

def add(a: int, b: int) -> int:
    return a + b

# Explizite Typannotationen sind optional (seit Python 3.5)
count2: int = 42
```

**Besonderheiten:**
- Type Inference erfolgt dynamisch zur Laufzeit
- Statische Typannotationen sind optional (seit Python 3.5)
- Typen werden zur Laufzeit nicht geprüft (außer mit Tools wie `mypy`)

**Weiterführende Links:**
- [Python Documentation - Type Hints](https://docs.python.org/3/library/typing.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Type Inference (standardmäßig aktiv)
let count = 42;  // i32
let name = "Hallo";  // &str
let price = 19.99;  // f64

// Funktionsparameter und Rückgabewert
let result = add(10, 20);  // i32

fn add(a: i32, b: i32) -> i32 {
    a + b
}

// Explizite Typannotationen sind optional
let count2: i32 = 42;
```

**Besonderheiten:**
- Type Inference ist standardmäßig aktiv
- Typen werden zur Compile-Zeit inferiert
- Explizite Typannotationen sind optional, wenn der Typ inferiert werden kann

**Weiterführende Links:**
- [Rust Book - Type Inference](https://doc.rust-lang.org/book/ch03-02-data-types.html#type-inference)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Type Inference (standardmäßig aktiv)
val count = 42  // Int
val name = "Hallo"  // String
val price = 19.99  // Double

// Funktionsparameter und Rückgabewert
val result = add(10, 20)  // Int

def add(a: Int, b: Int): Int = {
    a + b
}

// Explizite Typannotationen sind optional
val count2: Int = 42
```

**Besonderheiten:**
- Type Inference ist standardmäßig aktiv
- Typen werden zur Compile-Zeit inferiert
- Explizite Typannotationen sind optional, aber empfohlen für öffentliche APIs

**Weiterführende Links:**
- [Scala Documentation - Type Inference](https://docs.scala-lang.org/tour/type-inference.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Type Inference (standardmäßig aktiv)
var count = 42  // Int
var name = "Hallo"  // String
var price = 19.99  // Double

// Funktionsparameter und Rückgabewert
var result = add(10, 20)  // Int

func add(a: Int, b: Int) -> Int {
    return a + b
}

// Explizite Typannotationen sind optional
var count2: Int = 42
```

**Besonderheiten:**
- Type Inference ist standardmäßig aktiv
- Typen werden zur Compile-Zeit inferiert
- Explizite Typannotationen sind optional, wenn der Typ inferiert werden kann

**Weiterführende Links:**
- [Swift Documentation - Type Inference](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/thebasics/#Type-Safety-and-Type-Inference)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Type Inference (standardmäßig aktiv)
let count = 42;  // number
let name = "Hallo";  // string
let price = 19.99;  // number

// Funktionsparameter und Rückgabewert
let result = add(10, 20);  // number

function add(a: number, b: number): number {
    return a + b;
}

// Explizite Typannotationen sind optional
let count2: number = 42;
```

**Besonderheiten:**
- Type Inference ist standardmäßig aktiv
- Typen werden zur Compile-Zeit inferiert
- Explizite Typannotationen sind optional, wenn der Typ inferiert werden kann

**Weiterführende Links:**
- [TypeScript Handbook - Type Inference](https://www.typescriptlang.org/docs/handbook/type-inference.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Type Inference mit Option Infer On
Option Infer On

Dim count = 42  ' Integer
Dim name = "Hallo"  ' String
Dim price = 19.99  ' Double

' Funktionsparameter und Rückgabewert
Dim result = Add(10, 20)  ' Integer

Function Add(a As Integer, b As Integer) As Integer
    Return a + b
End Function

' Mit expliziten Typen
Dim count2 As Integer = 42
```

**Besonderheiten:**
- `Option Infer On` aktiviert Type Inference
- Typ muss zur Compile-Zeit bestimmbar sein
- Funktionsparameter müssen explizit typisiert werden

**Weiterführende Links:**
- [VB.NET Documentation - Type Inference](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/variables/local-type-inference)

</TabItem>
<TabItem value="v" label="V">

```v
// Type Inference mit :=
mut count := 42  // int
mut name := "Hallo"  // string
mut price := 19.99  // f64

// Funktionsparameter und Rückgabewert
mut result := add(10, 20)  // int

fn add(a int, b int) int {
    return a + b
}

// Explizite Typannotationen sind optional
mut count2: int = 42
```

**Besonderheiten:**
- `:=` für Type Inference
- Typ muss zur Compile-Zeit bestimmbar sein
- Funktionsparameter müssen explizit typisiert werden

**Weiterführende Links:**
- [V Language Documentation - Type System](https://github.com/vlang/v/blob/master/doc/docs.md#types)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Type Inference mit const (comptime-bekannte Werte)
const count = 42;           // comptime_int
const name = "Hallo";       // *const [5:0]u8
const price = 19.99;        // comptime_float

// Type Inference aus Funktionsrückgabe
fn add(a: i32, b: i32) i32 {
    return a + b;
}
const result = add(10, 20);  // i32 (aus Rückgabetyp abgeleitet)

// Explizite Typannotation für var nötig
var counter: i32 = 42;      // Expliziter Typ erforderlich bei var
```

**Besonderheiten:**
- `const` erlaubt Typ-Inferenz für comptime-bekannte Werte
- `var` erfordert in den meisten Fällen eine explizite Typannotation
- Funktionsrückgabewerte werden aus dem Rückgabetyp abgeleitet
- Funktionsparameter erfordern immer explizite Typannotationen

**Weiterführende Links:**
- [Zig Documentation - Type Inference](https://ziglang.org/documentation/master/#Type-Inference)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// Type Inference: Typen werden automatisch abgeleitet
let count = 42          // Int
let name = "Hallo"      // String
let price = 19.99       // Float
let items = [1, 2, 3]   // List(Int)

pub fn double(x) {
  x * 2
}
// double wird als fn(Int) -> Int inferiert
```

**Besonderheiten:**
- Vollständige Type Inference basierend auf Hindley-Milner-Algorithmus
- Typannotationen sind in den meisten Fällen optional
- Compiler inferiert Typen für lokale Variablen und Funktionsparameter

**Weiterführende Links:**
- [Gleam Documentation - Type Checking](https://tour.gleam.run/basics/type-checking/)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Type Inference für lokale Bindungen
example : Int
example =
    let x = 42          -- Typ Int wird inferiert
        y = 3.14        -- Typ Double wird inferiert
        name = "Hallo"  -- Typ String wird inferiert
    in x

-- Top-Level-Definitionen benötigen Typannotationen
add : Int -> Int -> Int
add a b = a + b
```

**Besonderheiten:**
- Bidirektionale Type Inference
- Top-Level-Definitionen benötigen explizite Typannotationen
- Lokale Bindungen (let, where) können Typen inferieren
- Dependent Types erfordern oft explizite Annotationen

**Weiterführende Links:**
- [Idris 2 Documentation - Types and Functions](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Type Inference: Typen werden automatisch abgeleitet
count = 42
name = "Hallo"

add = \a, b -> a + b
result = add 5 3
```

**Besonderheiten:**
- Vollständige Hindley-Milner Type Inference
- Typannotationen sind optional
- Compiler leitet Typen global ab

**Weiterführende Links:**
- [Roc Documentation - Type Annotations](https://www.roc-lang.org/tutorial#type-annotations)

</TabItem>
</Tabs>


## 3.4.3. Type Inference Strategies (Local, Global, etc.)

Verschiedene Strategien zur Typableitung: lokal (nur aus Initialisierung), global (aus gesamten Kontext), bidirektional (aus Kontext und Verwendung) oder Hindley-Milner (funktionale Sprachen).

### Sprachen {#sprachen}

<Tabs availableTabs={['cpp', 'crystal', 'csharp', 'dart', 'elm', 'fsharp', 'go', 'haskell', 'java', 'koka', 'kotlin', 'lean4', 'mercury', 'ocaml', 'purescript', 'roc', 'rust', 'scala', 'swift', 'typescript']}>
<TabItem value="csharp" label="C#">

```csharp
// Local Type Inference (nur aus Initialisierung, seit C# 3.0)
var count = 42;  // int - Typ aus Initialisierung
var name = "Hallo";  // string - Typ aus Initialisierung

// Typ wird aus rechter Seite inferiert
var result = Process(10);  // int - Typ aus Rückgabewert von Process

int Process(int x) {
    return x * 2;  // Rückgabetyp muss explizit angegeben werden
}

// Implizite Array-Erstellung (seit C# 3.0)
var items = new[] { 1, 2, 3 };  // int[] - Typ aus Array-Elementen
```

**Besonderheiten:**
- Verwendet ausschließlich Local Type Inference mit `var` (seit C# 3.0)
- Funktionsrückgabetypen müssen immer explizit angegeben werden
- Implizite Array-Erstellung mit `new[]` seit C# 3.0

**Weiterführende Links:**
- [Microsoft C# Documentation - Type Inference](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/statements/declarations#implicitly-typed-local-variables)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Local Type Inference mit auto (seit C++11)
auto count = 42;  // int - Typ aus Initialisierung
auto name = std::string("Hallo");  // std::string - Typ aus Initialisierung

// Global Type Inference (aus Funktionskörper)
auto result = process(10);  // int - Typ aus Rückgabewert

auto process(int x) {  // Rückgabetyp wird abgeleitet (seit C++14)
    return x * 2;
}

// Bidirektionale Typinferenz mit decltype
decltype(count) another = 42;  // Typ aus Ausdruck abgeleitet
```

**Besonderheiten:**
- Verwendet hauptsächlich Local Type Inference mit `auto` (seit C++11)
- Funktionsrückgabetypen können mit `auto` abgeleitet werden (seit C++14)
- `decltype` für Typableitung aus Ausdrücken (seit C++11)

**Weiterführende Links:**
- [cppreference.com - auto specifier](https://en.cppreference.com/w/cpp/language/auto)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Global Type Inference (aus gesamten Kontext)
def process(x)
  x * 2  # Rückgabetyp wird aus Ausdruck abgeleitet
end

result = process(10)  # Int32 - Typ aus Funktionsrückgabewert

# Local Type Inference
count = 42  # Int32 - Typ aus Initialisierung
name = "Hallo"  # String - Typ aus Initialisierung

# Bidirektionale Typinferenz
items = [1, 2, 3]  # Array(Int32) - Typ aus Array-Elementen
```

**Besonderheiten:**
- Verwendet Global Type Inference für Funktionsrückgabetypen
- Local Type Inference für Variablen
- Bidirektionale Typinferenz für Collections

**Weiterführende Links:**
- [Crystal Documentation - Type System](https://crystal-lang.org/reference/1.11/syntax_and_semantics/type_system.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Local Type Inference
var count = 42;  // int - Typ aus Initialisierung
var name = "Hallo";  // String - Typ aus Initialisierung

// Global Type Inference (aus Funktionskörper)
var result = process(10);  // int - Typ aus Rückgabewert

int process(int x) {
    return x * 2;  // Rückgabetyp explizit, aber könnte abgeleitet werden
}

// Bidirektionale Typinferenz
var items = [1, 2, 3];  // List<int> - Typ aus List-Elementen
```

**Besonderheiten:**
- Verwendet hauptsächlich Local Type Inference mit `var`
- Funktionsrückgabetypen müssen explizit angegeben werden
- Bidirektionale Typinferenz für Collections

**Weiterführende Links:**
- [Dart Language Specification - Type Inference](https://dart.dev/guides/language/spec#type-inference)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Hindley-Milner Type Inference
process x = x * 2  -- Int -> Int - Typ wird global abgeleitet

result = process 10  -- Int - Typ aus Funktionsrückgabewert

-- Local Type Inference
count = 42  -- Int - Typ aus Initialisierung
name = "Hallo"  -- String - Typ aus Initialisierung

-- Bidirektionale Typinferenz
items = [1, 2, 3]  -- List Int - Typ aus List-Elementen
```

**Besonderheiten:**
- Verwendet Hindley-Milner Type Inference (global)
- Typen werden aus dem gesamten Kontext abgeleitet
- Bidirektionale Typinferenz für Collections

**Weiterführende Links:**
- [Elm Documentation - Type Annotations](https://guide.elm-lang.org/types/type_annotations.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Hindley-Milner Type Inference
let process x = x * 2  // int -> int - Typ wird global abgeleitet

let result = process 10  // int - Typ aus Funktionsrückgabewert

// Local Type Inference
let count = 42  // int - Typ aus Initialisierung
let name = "Hallo"  // string - Typ aus Initialisierung

// Bidirektionale Typinferenz
let items = [1; 2; 3]  // int list - Typ aus List-Elementen
```

**Besonderheiten:**
- Verwendet Hindley-Milner Type Inference (global)
- Typen werden aus dem gesamten Kontext abgeleitet
- Bidirektionale Typinferenz für Collections

**Weiterführende Links:**
- [F# Language Reference - Type Inference](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/type-inference)

</TabItem>
<TabItem value="go" label="Go">

```go
// Local Type Inference mit :=
count := 42  // int - Typ aus Initialisierung
name := "Hallo"  // string - Typ aus Initialisierung

// Global Type Inference (aus Funktionskörper)
result := process(10)  // int - Typ aus Rückgabewert

func process(x int) int {
    return x * 2  // Rückgabetyp explizit, aber könnte abgeleitet werden
}

// Bidirektionale Typinferenz
items := []int{1, 2, 3}  // []int - Typ aus Slice-Elementen
```

**Besonderheiten:**
- Verwendet hauptsächlich Local Type Inference mit `:=`
- Funktionsrückgabetypen müssen explizit angegeben werden
- Bidirektionale Typinferenz für Slices

**Weiterführende Links:**
- [Go Language Specification - Type Inference](https://go.dev/ref/spec#Type_inference)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Hindley-Milner Type Inference
process x = x * 2  -- Int -> Int - Typ wird global abgeleitet

result = process 10  -- Int - Typ aus Funktionsrückgabewert

-- Local Type Inference
count = 42  -- Int - Typ aus Initialisierung
name = "Hallo"  -- [Char] - Typ aus Initialisierung

-- Bidirektionale Typinferenz
items = [1, 2, 3]  -- [Int] - Typ aus List-Elementen
```

**Besonderheiten:**
- Verwendet Hindley-Milner Type Inference (global)
- Typen werden aus dem gesamten Kontext abgeleitet
- Bidirektionale Typinferenz für Collections

**Weiterführende Links:**
- [Haskell Documentation - Type Inference](https://www.haskell.org/tutorial/classes.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Local Type Inference mit var (seit Java 10)
var count = 42;  // int - Typ aus Initialisierung
var name = "Hallo";  // String - Typ aus Initialisierung

// Global Type Inference (aus Funktionskörper)
var result = process(10);  // int - Typ aus Rückgabewert

int process(int x) {
    return x * 2;  // Rückgabetyp explizit
}

// Bidirektionale Typinferenz
var items = new ArrayList<Integer>();  // ArrayList<Integer> - Typ aus Generic
```

**Besonderheiten:**
- Verwendet hauptsächlich Local Type Inference mit `var` (seit Java 10)
- Funktionsrückgabetypen müssen explizit angegeben werden
- Bidirektionale Typinferenz für Generics (Diamond Operator seit Java 7)

**Weiterführende Links:**
- [Java Language Specification - Local Variable Type Inference](https://docs.oracle.com/javase/specs/jls/se21/html/jls-14.html#jls-14.4.1)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Globale Hindley-Milner Type Inference
val count = 42       // int
val name = "Hallo"   // string

// Funktionstypen werden global inferiert
fun identity(x)
  x  // inferiert als forall<a> (x: a) -> a

// Effekte werden ebenfalls global inferiert
fun greet(name)
  println("Hallo " ++ name)  // inferiert als (string) -> console ()

// Bidirektionale Inferenz für polymorphe Typen
fun apply(f, x)
  f(x)  // inferiert als forall<a,b> (f: (a) -> b, x: a) -> b
```

**Besonderheiten:**
- Verwendet globale Hindley-Milner Type Inference (wie Haskell, OCaml)
- Inferiert nicht nur Typen, sondern auch Effekte (einzigartig)
- Effekt-Inferenz bestimmt automatisch, welche Seiteneffekte eine Funktion hat
- Keine expliziten Typannotationen nötig (werden aber für Dokumentation empfohlen)

**Weiterführende Links:**
- [Koka Language Guide - Type Inference](https://koka-lang.github.io/koka/doc/book.html#sec-type-inference)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Local Type Inference
val count = 42  // Int - Typ aus Initialisierung
val name = "Hallo"  // String - Typ aus Initialisierung

// Global Type Inference (aus Funktionskörper)
val result = process(10)  // Int - Typ aus Rückgabewert

fun process(x: Int) = x * 2  // Int - Rückgabetyp wird abgeleitet

// Bidirektionale Typinferenz
val items = listOf(1, 2, 3)  // List<Int> - Typ aus List-Elementen
```

**Besonderheiten:**
- Verwendet Local Type Inference für Variablen
- Funktionsrückgabetypen können abgeleitet werden
- Bidirektionale Typinferenz für Collections

**Weiterführende Links:**
- [Kotlin Documentation - Type Inference](https://kotlinlang.org/docs/type-inference.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Bidirektionale Typinferenz (Elaboration)
def count := 42          -- Nat - Typ aus Literal
def name := "Hallo"      -- String - Typ aus Literal

-- Globale Typinferenz für implizite Parameter
def identity (x : α) : α := x
def result := identity 42  -- α wird als Nat inferiert

-- Bidirektionale Typinferenz: erwarteter Typ fließt ein
def items : List Nat := [1, 2, 3]  -- Erwarteter Typ List Nat

-- Unifikation für abhängige Typen
def append {α : Type} : List α → List α → List α
  | [], ys => ys
  | x :: xs, ys => x :: append xs ys
```

**Besonderheiten:**
- Verwendet bidirektionale Typinferenz (Elaboration)
- Implizite Parameter `{α : Type}` werden durch Unifikation aufgelöst
- Erwarteter Typ fließt in die Inferenz ein (top-down)
- Unterstützt abhängige Typen in der Inferenz

**Weiterführende Links:**
- [Lean 4 Documentation - Elaboration](https://lean-lang.org/theorem_proving_in_lean4/dependent_type_theory.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```mercury
% Type Inference Strategy: Global + Local
% Mercury verwendet eine Kombination aus globaler und lokaler Typinferenz.

% Globale Inferenz: Polymorphe Typen werden modulweit aufgelöst
:- func identity(T) = T.
identity(X) = X.

% Lokale Inferenz: Variablentypen innerhalb von Klauseln
:- pred process(int::in, int::out) is det.
process(X, Result) :-
    Doubled = X * 2,          % int (lokal inferiert aus X * 2)
    Offset = 10,              % int (lokal inferiert aus Literal)
    Result = Doubled + Offset. % int (lokal inferiert)

% Globale Inferenz: Typvariablen über Modulgrenzen hinweg
:- func apply(func(A) = B, A) = B.
apply(F, X) = F(X).

:- func result = int.
result = apply((func(X) = X + 1), 41). % A=int, B=int inferiert
```

**Besonderheiten:**
- Kombination aus globaler und lokaler Typinferenz.
- Globale Inferenz löst polymorphe Typvariablen modulweit auf.
- Lokale Inferenz bestimmt Typen innerhalb von Klauseln durch Unifikation.
- Ähnlich zu Hindley-Milner, aber mit Erweiterungen für Modi und Determinismus.

**Weiterführende Links:**
- [The Mercury Language Reference Manual - Type System](https://www.mercurylang.org/documentation/reference.html#Type_system)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Hindley-Milner Type Inference *)
let process x = x * 2  (* int -> int - Typ wird global abgeleitet *)

let result = process 10  (* int - Typ aus Funktionsrückgabewert *)

(* Local Type Inference *)
let count = 42  (* int - Typ aus Initialisierung *)
let name = "Hallo"  (* string - Typ aus Initialisierung *)

(* Bidirektionale Typinferenz *)
let items = [1; 2; 3]  (* int list - Typ aus List-Elementen *)
```

**Besonderheiten:**
- Verwendet Hindley-Milner Type Inference (global)
- Typen werden aus dem gesamten Kontext abgeleitet
- Bidirektionale Typinferenz für Collections

**Weiterführende Links:**
- [OCaml Manual - Type Inference](https://v2.ocaml.org/manual/typedecl.html)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Hindley-Milner Type Inference
process x = x * 2  -- Int -> Int - Typ wird global abgeleitet

result = process 10  -- Int - Typ aus Funktionsrückgabewert

-- Local Type Inference
count = 42  -- Int - Typ aus Initialisierung
name = "Hallo"  -- String - Typ aus Initialisierung

-- Bidirektionale Typinferenz
items = [1, 2, 3]  -- Array Int - Typ aus Array-Elementen
```

**Besonderheiten:**
- Verwendet Hindley-Milner Type Inference (global)
- Typen werden aus dem gesamten Kontext abgeleitet
- Bidirektionale Typinferenz für Collections

**Weiterführende Links:**
- [PureScript Documentation - Type Inference](https://github.com/purescript/documentation/blob/master/language/Types.md)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Local Type Inference
let count = 42;  // i32 - Typ aus Initialisierung
let name = "Hallo";  // &str - Typ aus Initialisierung

// Global Type Inference (aus Funktionskörper)
let result = process(10);  // i32 - Typ aus Rückgabewert

fn process(x: i32) -> i32 {
    x * 2  // Rückgabetyp explizit, aber könnte abgeleitet werden
}

// Bidirektionale Typinferenz
let items = vec![1, 2, 3];  // Vec<i32> - Typ aus Vec-Elementen
```

**Besonderheiten:**
- Verwendet Local Type Inference für Variablen
- Funktionsrückgabetypen müssen explizit angegeben werden
- Bidirektionale Typinferenz für Collections

**Weiterführende Links:**
- [Rust Book - Type Inference](https://doc.rust-lang.org/book/ch03-02-data-types.html#type-inference)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Local Type Inference
val count = 42  // Int - Typ aus Initialisierung
val name = "Hallo"  // String - Typ aus Initialisierung

// Global Type Inference (aus Funktionskörper)
val result = process(10)  // Int - Typ aus Rückgabewert

def process(x: Int) = x * 2  // Int - Rückgabetyp wird abgeleitet

// Bidirektionale Typinferenz
val items = List(1, 2, 3)  // List[Int] - Typ aus List-Elementen
```

**Besonderheiten:**
- Verwendet Local Type Inference für Variablen
- Funktionsrückgabetypen können abgeleitet werden
- Bidirektionale Typinferenz für Collections

**Weiterführende Links:**
- [Scala Documentation - Type Inference](https://docs.scala-lang.org/tour/type-inference.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Local Type Inference
var count = 42  // Int - Typ aus Initialisierung
var name = "Hallo"  // String - Typ aus Initialisierung

// Global Type Inference (aus Funktionskörper)
var result = process(10)  // Int - Typ aus Rückgabewert

func process(x: Int) -> Int {
    return x * 2  // Rückgabetyp explizit
}

// Bidirektionale Typinferenz
var items = [1, 2, 3]  // [Int] - Typ aus Array-Elementen
```

**Besonderheiten:**
- Verwendet Local Type Inference für Variablen
- Funktionsrückgabetypen müssen explizit angegeben werden
- Bidirektionale Typinferenz für Arrays

**Weiterführende Links:**
- [Swift Documentation - Type Inference](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/thebasics/#Type-Safety-and-Type-Inference)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Local Type Inference
let count = 42;  // number - Typ aus Initialisierung
let name = "Hallo";  // string - Typ aus Initialisierung

// Global Type Inference (aus Funktionskörper)
let result = process(10);  // number - Typ aus Rückgabewert

function process(x: number): number {
    return x * 2;  // Rückgabetyp explizit
}

// Bidirektionale Typinferenz
let items = [1, 2, 3];  // number[] - Typ aus Array-Elementen
```

**Besonderheiten:**
- Verwendet Local Type Inference für Variablen
- Funktionsrückgabetypen können abgeleitet werden (optional)
- Bidirektionale Typinferenz für Arrays

**Weiterführende Links:**
- [TypeScript Handbook - Type Inference](https://www.typescriptlang.org/docs/handbook/type-inference.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Global Type Inference (Hindley-Milner)
add = \a, b -> a + b
result = add 5 3
```

**Besonderheiten:**
- Globale Hindley-Milner Type Inference
- Typen werden programmweit abgeleitet
- Keine expliziten Typannotationen erforderlich

**Weiterführende Links:**
- [Roc Documentation - Type Annotations](https://www.roc-lang.org/tutorial#type-annotations)

</TabItem>
</Tabs>


## 3.4.4. Graduelle Typisierung

Kombination aus statischer und dynamischer Typisierung, bei der Typen optional sind und schrittweise hinzugefügt werden können. Typen werden zur Laufzeit geprüft oder durch statische Analyse-Tools validiert.

### Sprachen {#sprachen}

<Tabs availableTabs={['crystal', 'dart', 'groovy', 'haxe', 'javascript', 'php', 'python', 'racket', 'ruby', 'typescript']}>
<TabItem value="crystal" label="Crystal">

```crystal
# Dynamische Typisierung (ohne Typannotationen)
def process(x)
  x * 2
end

result = process(10)  # Funktioniert ohne Typen

# Statische Typisierung (mit Typannotationen)
def process_typed(x : Int32) : Int32
  x * 2
end

result_typed = process_typed(10)  # Mit expliziten Typen
```

**Besonderheiten:**
- Typannotationen sind optional
- Typen werden zur Compile-Zeit geprüft, wenn angegeben
- Code kann schrittweise von dynamisch zu statisch migriert werden

**Weiterführende Links:**
- [Crystal Documentation - Type System](https://crystal-lang.org/reference/1.11/syntax_and_semantics/type_system.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Dynamische Typisierung (ohne Typannotationen)
process(x) {
  return x * 2;
}

var result = process(10);  // Funktioniert ohne Typen

// Statische Typisierung (mit Typannotationen)
int processTyped(int x) {
  return x * 2;
}

int resultTyped = processTyped(10);  // Mit expliziten Typen
```

**Besonderheiten:**
- Typannotationen sind optional
- Typen werden zur Compile-Zeit geprüft, wenn angegeben
- Code kann schrittweise von dynamisch zu statisch migriert werden

**Weiterführende Links:**
- [Dart Language Specification - Types](https://dart.dev/guides/language/spec)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Dynamische Typisierung (mit def)
def process(x) {
    return x * 2
}

def result = process(10)  // Funktioniert ohne Typen

// Statische Typisierung (mit Typannotationen)
int processTyped(int x) {
    return x * 2
}

int resultTyped = processTyped(10)  // Mit expliziten Typen
```

**Besonderheiten:**
- Unterstützt sowohl statische als auch dynamische Typisierung
- `def` für dynamische Typisierung
- Explizite Typen für statische Typisierung
- Code kann schrittweise von dynamisch zu statisch migriert werden

**Weiterführende Links:**
- [Groovy Documentation - Static Type Checking](https://groovy-lang.org/semantics.html#static-type-checking)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Dynamische Typisierung (mit Dynamic)
function process(x: Dynamic): Dynamic {
    return x * 2;
}

var result = process(10);  // Funktioniert ohne Typen

// Statische Typisierung (mit Typannotationen)
function processTyped(x: Int): Int {
    return x * 2;
}

var resultTyped: Int = processTyped(10);  // Mit expliziten Typen
```

**Besonderheiten:**
- Typannotationen sind optional
- `Dynamic` für dynamische Typisierung
- Typen werden zur Compile-Zeit geprüft, wenn angegeben
- Code kann schrittweise von dynamisch zu statisch migriert werden

**Weiterführende Links:**
- [Haxe Manual - Type System](https://haxe.org/manual/type-system.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Dynamische Typisierung (ohne Typen)
function process(x) {
    return x * 2;
}

let result = process(10);  // Funktioniert ohne Typen

// Statische Typisierung (mit JSDoc)
/**
 * @param {number} x
 * @returns {number}
 */
function processTyped(x) {
    return x * 2;
}

/** @type {number} */
let resultTyped = processTyped(10);  // Mit JSDoc-Typen
```

**Besonderheiten:**
- Typen werden zur Laufzeit nicht geprüft
- JSDoc-Kommentare für optionale Typannotationen
- Statische Typprüfung mit Tools wie TypeScript oder Flow möglich
- Code kann schrittweise mit JSDoc annotiert werden

**Weiterführende Links:**
- [JSDoc Documentation - Type Tags](https://jsdoc.app/tags-type.html)

</TabItem>
<TabItem value="php" label="PHP">

```php
// Dynamische Typisierung (ohne Typen, bis PHP 7.0)
function process($x) {
    return $x * 2;
}

$result = process(10);  // Funktioniert ohne Typen

// Statische Typisierung (mit Typannotationen, seit PHP 7.0)
function processTyped(int $x): int {
    return $x * 2;
}

$resultTyped = processTyped(10);  // Mit expliziten Typen
```

**Besonderheiten:**
- Typannotationen für Funktionsparameter und Rückgabewerte (seit PHP 7.0)
- Typen werden zur Laufzeit geprüft
- Variablen können nicht direkt typisiert werden
- Code kann schrittweise von dynamisch zu statisch migriert werden

**Weiterführende Links:**
- [PHP Documentation - Type Declarations](https://www.php.net/manual/en/functions.arguments.php#functions.arguments.type-declaration)

</TabItem>
<TabItem value="python" label="Python">

```python
# Dynamische Typisierung (ohne Typen)
def process(x):
    return x * 2

result = process(10)  # Funktioniert ohne Typen

# Statische Typisierung (mit Type Hints, seit Python 3.5)
def process_typed(x: int) -> int:
    return x * 2

result_typed: int = process_typed(10)  # Mit expliziten Typen
```

**Besonderheiten:**
- Type Hints sind optional (seit Python 3.5)
- Typen werden zur Laufzeit nicht geprüft
- Statische Typprüfung mit Tools wie `mypy` möglich
- Code kann schrittweise von dynamisch zu statisch migriert werden

**Weiterführende Links:**
- [Python Documentation - Type Hints](https://docs.python.org/3/library/typing.html)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Dynamische Typisierung (ohne Typen)
def process(x)
  x * 2
end

result = process(10)  # Funktioniert ohne Typen

# Statische Typisierung (mit RBS - Ruby Type Signature)
# process.rbs
def process_typed: (Integer x) -> Integer

# process.rb
def process_typed(x)
  x * 2
end

result_typed = process_typed(10)  # Mit RBS-Typen
```

**Besonderheiten:**
- Typannotationen über RBS (Ruby Type Signature) in separaten `.rbs` Dateien
- Typen werden zur Laufzeit nicht geprüft
- Statische Typprüfung mit Tools wie `steep` möglich
- Code kann schrittweise mit RBS annotiert werden

**Weiterführende Links:**
- [RBS Documentation](https://github.com/ruby/rbs)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Dynamische Typisierung (ohne Typen, JavaScript-kompatibel)
function process(x: any) {
    return x * 2;
}

let result = process(10);  // Funktioniert ohne Typen

// Statische Typisierung (mit Typannotationen)
function processTyped(x: number): number {
    return x * 2;
}

let resultTyped: number = processTyped(10);  // Mit expliziten Typen
```

**Besonderheiten:**
- Typannotationen sind optional
- `any` für dynamische Typisierung
- Typen werden zur Compile-Zeit geprüft
- Code kann schrittweise von JavaScript zu TypeScript migriert werden

**Weiterführende Links:**
- [TypeScript Handbook - Gradual Typing](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
; Typed Racket: Graduelle Typisierung
; Ungetyptes Modul
(module untyped racket
  (provide greet)
  (define (greet name)
    (string-append "Hello, " name)))

; Getyptes Modul
(module typed typed/racket
  (require/typed (submod ".." untyped)
    [greet (-> String String)])
  (greet "World"))
```

**Besonderheiten:**
- Typed Racket ermöglicht schrittweise Einführung von Typen
- Contracts werden automatisch an Typgrenzen zwischen getypten und ungetypten Modulen eingefügt
- Typed Racket ist eines der Pioniersysteme für graduelle Typisierung

**Weiterführende Links:**
- [Typed Racket Documentation](https://docs.racket-lang.org/ts-guide/index.html)

</TabItem>
</Tabs>

