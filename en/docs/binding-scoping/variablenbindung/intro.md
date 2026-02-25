---
slug: /binding-scoping/variablenbindung
title: 4.1. Variable Binding
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 4.1. Variable Binding

Declaration and assignment of variables.

## 4.1.1. Variable Declaration

Announcement that a variable exists before it is used.

### Languages {#sprachen}

<Tabs availableTabs={['ada', 'c', 'carbon', 'clojure', 'common-lisp', 'crystal', 'csharp', 'cpp', 'd', 'dart', 'eiffel', 'elixir', 'elm', 'erlang', 'fsharp', 'fortran', 'gleam', 'go', 'groovy', 'haskell', 'haxe', 'idris', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'lua', 'matlab', 'mercury', 'mojo', 'nim', 'objective-c', 'object-pascal', 'ocaml', 'octave', 'odin', 'perl', 'prolog', 'purescript', 'python', 'r', 'racket', 'roc', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'vbnet', 'v', 'wolfram-language', 'zig']} yellowTabs={['php']}>
<TabItem value="ada" label="Ada">

```ada
-- Variable declaration
count : Integer;
name : String;
price : Float;

-- Declaration with initialization
count : Integer := 42;
name : String := "Hallo";
```

**Special features:**
- Type must be explicitly specified
- Initialization is optional

**Further reading:**
- [Ada Reference Manual - Object Declarations](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-3-3-1.html)

</TabItem>
<TabItem value="c" label="C">

```c
// Variable declaration
int count;
char* name;
double price;

// Declaration with initialization
int count = 42;
char* name = "Hallo";
```

**Special features:**
- Type must be explicitly specified
- Variables can be declared without initialization

**Further reading:**
- [C Standard - Declarations](https://en.cppreference.com/w/c/language/declarations)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Variable declaration
int count;
string name;
double price;

// Declaration with initialization
int count = 42;
string name = "Hallo";
```

**Special features:**
- Type must be explicitly specified (except with `var`)
- Local variables must be initialized before use

**Further reading:**
- [Microsoft C# Documentation - Variables](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/variables)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Variable declaration
int count;
std::string name;
double price;

// Declaration with initialization
int count = 42;
std::string name = "Hallo";
```

**Special features:**
- Type must be explicitly specified (except with `auto`)
- Variables can be declared without initialization

**Further reading:**
- [cppreference.com - Declarations](https://en.cppreference.com/w/cpp/language/declarations)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Variable declaration
var count: i32;
var name: String;
var price: f64;

// Declaration with initialization
var count: i32 = 42;
var name: String = "Hallo";
```

**Special features:**
- Experimental language, syntax may still change
- `var` with explicit type or type inference

**Further reading:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Variable declaration (with def)
(def count 42)
(def name "Hallo")
(def price 19.99)

;; Local variables (with let)
(let [count 42
      name "Hallo"]
  (println count name))
```

**Special features:**
- `def` for global bindings
- `let` for local bindings
- Immutable by default

**Further reading:**
- [Clojure Documentation - Vars](https://clojure.org/reference/vars)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Variable declaration (with defvar or defparameter)
(defvar count 42)
(defparameter name "Hallo")

;; Local variables (with let)
(let ((count 42)
      (name "Hallo"))
  (format t "~a ~a~%" count name))
```

**Special features:**
- `defvar` for variables that cannot be overwritten
- `defparameter` for variables that can be overwritten
- `let` for local bindings

**Further reading:**
- [Common Lisp HyperSpec - Variables](http://www.lispworks.com/documentation/HyperSpec/Body/03_abab.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Variable declaration
count : Int32
name : String
price : Float64

# Declaration with initialization
count = 42
name = "Hallo"
```

**Special features:**
- Type can be explicitly specified or inferred
- Type inference is active by default

**Further reading:**
- [Crystal Documentation - Variables](https://crystal-lang.org/reference/1.11/syntax_and_semantics/variables.html)

</TabItem>
<TabItem value="d" label="D">

```d
// Variable declaration
int count;
string name;
double price;

// Declaration with initialization
int count = 42;
string name = "Hallo";
```

**Special features:**
- Type must be explicitly specified
- Variables can be declared without initialization

**Further reading:**
- [D Language Specification - Variables](https://dlang.org/spec/declaration.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Variable declaration
int count;
String name;
double price;

// Declaration with initialization
int count = 42;
String name = "Hallo";
```

**Special features:**
- Type can be explicitly specified or inferred
- Local variables must be initialized before use

**Further reading:**
- [Dart Language Tour - Variables](https://dart.dev/guides/language/language-tour#variables)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
-- Variable declaration (in class)
count: INTEGER
name: STRING
price: REAL

-- Declaration with initialization
count: INTEGER := 42
name: STRING := "Hallo"
```

**Special features:**
- Type must be explicitly specified
- Variables are declared in classes

**Further reading:**
- [Eiffel Documentation - Variables](https://www.eiffel.org/doc/eiffel/Variables)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Variable declaration (with pattern matching)
count = 42
name = "Hallo"
price = 19.99

# Local variables (in functions)
def example do
  count = 42
  name = "Hallo"
  count + String.length(name)
end
```

**Special features:**
- Pattern matching for variable declaration
- Immutable by default
- Variables start with lowercase letters

**Further reading:**
- [Elixir Documentation - Variables](https://elixir-lang.org/getting-started/basic-types.html#variables)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Variable declaration
count = 42
name = "Hallo"
price = 19.99

-- Type annotations (optional)
count : Int
count = 42

name : String
name = "Hallo"
```

**Special features:**
- Immutable by default
- Type annotations are optional but recommended

**Further reading:**
- [Elm Documentation - Values](https://guide.elm-lang.org/core_language.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% Variable declaration (with pattern matching)
Count = 42,
Name = "Hallo",
Price = 19.99.

% In functions
example() ->
    Count = 42,
    Name = "Hallo",
    Count + length(Name).
```

**Special features:**
- Pattern matching for variable declaration
- Immutable by default
- Variables start with uppercase letters

**Further reading:**
- [Erlang Documentation - Variables](https://www.erlang.org/doc/reference_manual/data_types.html#variables)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Variable declaration
let count = 42
let name = "Hallo"
let price = 19.99

// With type annotation
let count : int = 42
let name : string = "Hallo"
```

**Special features:**
- `let` for variable declaration
- Immutable by default
- Type can be explicitly specified or inferred

**Further reading:**
- [F# Documentation - Values](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/values/)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Variable declaration
integer :: count
character(len=10) :: name
real :: price

! Declaration with initialization
integer :: count = 42
character(len=10) :: name = "Hallo"
```

**Special features:**
- Type must be explicitly specified
- `::` for type annotation

**Further reading:**
- [Fortran Standard - Variable Declarations](https://gcc.gnu.org/onlinedocs/gfortran/Variable-Declarations.html)

</TabItem>
<TabItem value="gleam" label="Gleam">

```erlang
// Variable declaration (with let)
let count = 42
let name = "Hallo"
let price = 19.99

// With type annotation
let count: Int = 42
let name: String = "Hallo"
```

**Special features:**
- `let` for variable declaration
- Immutable by default
- Type can be explicitly specified or inferred

**Further reading:**
- [Gleam Documentation - Variables](https://gleam.run/documentation/)

</TabItem>
<TabItem value="go" label="Go">

```go
// Variable declaration
var count int
var name string
var price float64

// Declaration with initialization
var count int = 42
var name string = "Hallo"

// Short form with type inference
count := 42
name := "Hallo"
```

**Special features:**
- `var` for explicit declaration
- `:=` for short declaration with type inference
- Type can be explicitly specified or inferred

**Further reading:**
- [Go Documentation - Variables](https://go.dev/ref/spec#Variable_declarations)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Variable declaration with def (dynamic type)
def count = 42
def name = "Hallo"
def price = 19.99

// Declaration without initialization
def uninitialized

// With explicit type
int number = 42
String text = "Hallo"
```

**Special features:**
- `def` for dynamic typing
- Explicit types are optional
- Type can be explicitly specified or inferred

**Further reading:**
- [Groovy Documentation - Variables](https://groovy-lang.org/semantics.html#_variable_declaration)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Variable declaration (in let or where)
example = let
    count = 42
    name = "Hallo"
    price = 19.99
  in count + length name

-- With type annotation
example :: Int
example = let
    count :: Int
    count = 42
  in count
```

**Special features:**
- Immutable by default
- Variables are declared in `let` or `where` blocks
- Type annotations are optional but recommended

**Further reading:**
- [Haskell Documentation - Variables](https://www.haskell.org/tutorial/variables.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Variable declaration
var count: Int;
var name: String;
var price: Float;

// Declaration with initialization
var count: Int = 42;
var name: String = "Hallo";

// With type inference
var count = 42;
var name = "Hallo";
```

**Special features:**
- `var` for variable declaration
- Type can be explicitly specified or inferred

**Further reading:**
- [Haxe Documentation - Variables](https://haxe.org/manual/expression-var.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Variable declaration (with let)
example : Int
example = let
    count = 42
    name = "Hallo"
  in count + length name

-- With type annotation
example2 : Int
example2 = let
    count : Int
    count = 42
  in count
```

**Special features:**
- Immutable by default
- Variables are declared in `let` blocks
- Type annotations are optional but recommended

**Further reading:**
- [Idris 2 Documentation - Types and Functions](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Variable declaration
int count;
String name;
double price;

// Declaration with initialization
int count = 42;
String name = "Hallo";
```

**Special features:**
- Type must be explicitly specified
- Local variables must be initialized before use

**Further reading:**
- [Java Language Specification - Variables](https://docs.oracle.com/javase/specs/jls/se21/html/jls-4.html#jls-4.12)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Variable declaration (with var, let or const)
var count;
let name;
const price = 19.99;

// Declaration with initialization
var count = 42;
let name = "Hallo";
```

**Special features:**
- `var`, `let` or `const` for variable declaration
- `var` has function scope, `let` and `const` have block scope

**Further reading:**
- [MDN Web Docs - Variables](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#declarations)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Variable declaration
count
name
price

# Declaration with initialization
count = 42
name = "Hallo"
price = 19.99

# With type annotation
count::Int = 42
name::String = "Hallo"
```

**Special features:**
- Type can be explicitly specified or inferred
- Variables can be declared without initialization

**Further reading:**
- [Julia Documentation - Variables](https://docs.julialang.org/en/v1/manual/variables/)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Variable declaration with val (immutable)
val count = 42
val name = "Hallo"
val price = 19.99

// With explicit type annotation
val count2: int = 42
val name2: string = "Hallo"

// Mutable variables with var
var counter := 0
var message := "Start"
```

**Special features:**
- `val` for immutable bindings (default)
- `var` for mutable local variables (with `:=` for initialization)
- Type inference is standard, explicit annotations optional
- Variables must be initialized at declaration

**Further reading:**
- [Koka Language Guide - Basics](https://koka-lang.github.io/koka/doc/book.html#sec-basics)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Variable declaration with def (top-level)
def count : Nat := 42
def name : String := "Hallo"
def price : Float := 19.99

-- Local variables with let
def example : Nat :=
  let count := 42
  let name := "Hallo"
  count + name.length

-- With explicit type annotation
def example2 : Nat :=
  let count : Nat := 42
  let name : String := "Hallo"
  count + name.length
```

**Special features:**
- `def` for top-level definitions (immutable)
- `let` for local bindings in expressions and `do` blocks
- Type inference is standard, explicit annotations optional
- Variables must be initialized at declaration

**Further reading:**
- [Lean 4 Documentation - Definitions](https://lean-lang.org/lean4/doc/lean-by-example/variables.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Variable declaration
var count: Int
var name: String
var price: Double

// Declaration with initialization
var count: Int = 42
var name: String = "Hallo"

// With type inference
var count = 42
var name = "Hallo"
```

**Special features:**
- `var` for mutable variables, `val` for immutable variables
- Type can be explicitly specified or inferred

**Further reading:**
- [Kotlin Documentation - Variables](https://kotlinlang.org/docs/basic-syntax.html#variables)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Variable declaration (implicit through assignment)
local count
local name
local price

-- Declaration with initialization
local count = 42
local name = "Hallo"
local price = 19.99
```

**Special features:**
- `local` for local variables
- Global variables are declared without `local`
- Type is determined dynamically

**Further reading:**
- [Lua Documentation - Variables](https://www.lua.org/manual/5.4/manual.html#3.3.7)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% Variable declaration (implicit through assignment)
count = 42;
name = 'Hallo';
price = 19.99;
```

**Special features:**
- Variables are implicitly declared through assignment
- Type is determined dynamically

**Further reading:**
- [MATLAB Documentation - Variables](https://www.mathworks.com/help/matlab/matlab_prog/creating-and-concatenating-matrices.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```mercury
% Variable declaration (implicit through use)
:- pred example(int::out, string::out) is det.
example(Count, Name) :-
    Count = 42,
    Name = "Hallo".

% Variables start with uppercase letters
:- func calculate(int, int) = int.
calculate(X, Y) = X + Y.

% _ is the anonymous variable
:- pred print_first(list(T)::in, T::out) is semidet.
print_first([First | _], First).
```

**Special features:**
- Variables are implicitly declared (no keyword needed)
- Variables start with uppercase letters or underscore
- `_` is the anonymous variable (each occurrence is independent)
- Variables are bound through unification, not assignment
- Strong type system with type inference

**Further reading:**
- [Mercury Language Reference - Syntax](https://www.mercurylang.org/information/doc-release/mercury_ref/Syntax.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# Variable declaration
var count: Int
var name: String
var price: Float64

# Declaration with initialization
var count: Int = 42
var name: String = "Hallo"

# With type inference
var count = 42
var name = "Hallo"
```

**Special features:**
- `var` for variable declaration
- Type can be explicitly specified or inferred

**Further reading:**
- [Mojo Documentation - Variables](https://docs.modular.com/mojo/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Variable declaration
var count: int
var name: string
var price: float

# Declaration with initialization
var count: int = 42
var name: string = "Hallo"

# With type inference
var count = 42
var name = "Hallo"
```

**Special features:**
- `var` for mutable variables, `let` for immutable variables
- Type can be explicitly specified or inferred

**Further reading:**
- [Nim Documentation - Variables](https://nim-lang.org/docs/manual.html#variables)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objectivec
// Variable declaration
int count;
NSString* name;
double price;

// Declaration with initialization
int count = 42;
NSString* name = @"Hallo";
```

**Special features:**
- Type must be explicitly specified
- Objects are declared as pointers

**Further reading:**
- [Objective-C Documentation - Variables](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Variable declaration
var
  count: Integer;
  name: String;
  price: Double;

// Declaration with initialization
var
  count: Integer = 42;
  name: String = 'Hallo';
```

**Special features:**
- `var` block for variable declarations
- Type must be explicitly specified

**Further reading:**
- [Object Pascal Documentation - Variables](https://www.freepascal.org/docs-html/ref/refse14.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Variable declaration (with let) *)
let count = 42
let name = "Hallo"
let price = 19.99

(* With type annotation *)
let count : int = 42
let name : string = "Hallo"
```

**Special features:**
- `let` for variable declaration
- Immutable by default
- Type can be explicitly specified or inferred

**Further reading:**
- [OCaml Documentation - Variables](https://ocaml.org/manual/expr.html#ss:expr-let)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
% Variable declaration (implicit through assignment)
count = 42;
name = "Hallo";
price = 19.99;
```

**Special features:**
- Variables are implicitly declared through assignment
- Type is determined dynamically

**Further reading:**
- [Octave Documentation - Variables](https://octave.org/doc/v8.1.0/Variables.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Variable declaration
count: int
name: string
price: f64

// Declaration with initialization
count: int = 42
name: string = "Hallo"
```

**Special features:**
- Type must be explicitly specified
- Variables can be declared without initialization

**Further reading:**
- [Odin Documentation - Variables](https://odin-lang.org/docs/overview/#variables)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Variable declaration (with my, our or state)
my $count;
my $name;
my $price;

# Declaration with initialization
my $count = 42;
my $name = "Hallo";
```

**Special features:**
- `my` for lexical variables
- `our` for package variables
- `state` for static variables
- Sigils (`$`, `@`, `%`) for type indicators

**Further reading:**
- [Perl Documentation - Variables](https://perldoc.perl.org/perlvar)

</TabItem>
<TabItem value="php" label="PHP">

```php
// Variable declaration (implicit through assignment)
$count = 42;
$name = "Hallo";
$price = 19.99;

// Function parameters with type annotation (since PHP 7.0)
function add(int $a, int $b): int {
    return $a + $b;
}
```

**Special features:**
- Variables are implicitly declared through assignment
- No explicit declaration without assignment possible
- Type is determined dynamically
- Type annotations for parameters and return values (since PHP 7.0)

**Further reading:**
- [PHP Documentation - Variables](https://www.php.net/manual/en/language.variables.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Variable declaration (implicit through use)
example(Count, Name) :-
    Count = 42,
    Name = hello.

% Variables start with uppercase letters
calculate(X, Y, Result) :-
    Result is X + Y.

% _ is the anonymous variable
print_first([First|_]) :-
    format("~w~n", [First]).
```

**Special features:**
- Variables are implicitly declared (no keyword needed)
- Variables start with uppercase letters or underscore
- `_` is the anonymous variable (each occurrence is independent)
- Variables are bound through unification, not assignment

**Further reading:**
- [SWI-Prolog Manual - Syntax of Terms](https://www.swi-prolog.org/pldoc/man?section=syntax)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Variable declaration (with let)
example = let
    count = 42
    name = "Hallo"
    price = 19.99
  in count + length name

-- With type annotation
example :: Int
example = let
    count :: Int
    count = 42
  in count
```

**Special features:**
- Immutable by default
- Variables are declared in `let` blocks
- Type annotations are optional but recommended

**Further reading:**
- [PureScript Documentation - Variables](https://www.purescript.org/learn/getting-started/)

</TabItem>
<TabItem value="python" label="Python">

```python
# Variable declaration (implicit through assignment)
count = 42
name = "Hallo"
price = 19.99

# With type annotation (since Python 3.6, optional)
count: int = 42
name: str = "Hallo"
```

**Special features:**
- Variables are implicitly declared through assignment
- Type annotations are optional (since Python 3.6)
- Type is determined dynamically

**Further reading:**
- [Python Documentation - Variables](https://docs.python.org/3/reference/executionmodel.html#naming-and-binding)

</TabItem>
<TabItem value="r" label="R">

```r
# Variable declaration (implicit through assignment)
count <- 42
name <- "Hallo"
price <- 19.99

# Alternative syntax
count = 42
name = "Hallo"
```

**Special features:**
- Variables are implicitly declared through assignment
- `<-` or `=` for assignment
- Type is determined dynamically

**Further reading:**
- [R Documentation - Variables](https://cran.r-project.org/doc/manuals/r-release/R-intro.html#Simple-manipulations-numbers-vectors-and-matrices)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
;; Variable declaration (with define or let)
(define count 42)
(define name "Hallo")
(define price 19.99)

;; Local variables (with let)
(let ([count 42]
      [name "Hallo"])
  (display count))
```

**Special features:**
- `define` for global bindings
- `let` for local bindings
- Immutable by default

**Further reading:**
- [Racket Documentation - Variables](https://docs.racket-lang.org/guide/define.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Variable declaration (with def)
count = 42
name = "Hallo"
price = 19.99

-- With type annotation
count : I64
count = 42
```

**Special features:**
- Immutable by default
- Type can be explicitly specified or inferred

**Further reading:**
- [Roc Documentation - Variables](https://www.roc-lang.org/)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Variable declaration (implicit through assignment)
count = 42
name = "Hallo"
price = 19.99

# Local variables
count = 42
name = "Hallo"
```

**Special features:**
- Variables are implicitly declared through assignment
- Type is determined dynamically
- Local variables start with lowercase letters

**Further reading:**
- [Ruby Documentation - Variables](https://ruby-doc.org/core-3.1.2/doc/syntax/assignment_rdoc.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Variable declaration
let count: i32;
let name: String;
let price: f64;

// Declaration with initialization
let count: i32 = 42;
let name: String = "Hallo".to_string();

// With type inference
let count = 42;
let name = "Hallo".to_string();
```

**Special features:**
- `let` for variable declaration
- Immutable by default (`mut` for mutable variables)
- Type can be explicitly specified or inferred

**Further reading:**
- [Rust Documentation - Variables](https://doc.rust-lang.org/book/ch03-01-variables-and-mutability.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Variable declaration
var count: Int
var name: String
var price: Double

// Declaration with initialization
var count: Int = 42
var name: String = "Hallo"

// With type inference
var count = 42
var name = "Hallo"
```

**Special features:**
- `var` for mutable variables, `val` for immutable variables
- Type can be explicitly specified or inferred

**Further reading:**
- [Scala Documentation - Variables](https://docs.scala-lang.org/tour/basics.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; Variable declaration (with define or let)
(define count 42)
(define name "Hallo")
(define price 19.99)

;; Local variables (with let)
(let ((count 42)
      (name "Hallo"))
  (display count))
```

**Special features:**
- `define` for global bindings
- `let` for local bindings
- Immutable by default

**Further reading:**
- [Scheme Documentation - Variables](https://www.scheme.com/tspl4/binding.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Variable declaration
var count: Int
var name: String
var price: Double

// Declaration with initialization
var count: Int = 42
var name: String = "Hallo"

// With type inference
var count = 42
var name = "Hallo"
```

**Special features:**
- `var` for mutable variables, `let` for immutable variables
- Type can be explicitly specified or inferred

**Further reading:**
- [Swift Documentation - Variables](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/thebasics/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Variable declaration (with var, let or const)
var count: number;
let name: string;
const price: number = 19.99;

// Declaration with initialization
var count: number = 42;
let name: string = "Hallo";

// With type inference
var count = 42;
let name = "Hallo";
```

**Special features:**
- `var`, `let` or `const` for variable declaration
- Type can be explicitly specified or inferred
- `var` has function scope, `let` and `const` have block scope

**Further reading:**
- [TypeScript Documentation - Variables](https://www.typescriptlang.org/docs/handbook/variable-declarations.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vbnet
' Variable declaration
Dim count As Integer
Dim name As String
Dim price As Double

' Declaration with initialization
Dim count As Integer = 42
Dim name As String = "Hallo"
```

**Special features:**
- `Dim` for variable declaration
- Type must be explicitly specified (except with type inference)

**Further reading:**
- [VB.NET Documentation - Variables](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/variables/)

</TabItem>
<TabItem value="v" label="V">

```v
// Variable declaration
mut count int
mut name string
mut price f64

// Declaration with initialization
mut count int = 42
mut name string = "Hallo"

// With type inference
mut count := 42
mut name := "Hallo"
```

**Special features:**
- `mut` for mutable variables
- Type can be explicitly specified or inferred
- `:=` for short declaration with type inference

**Further reading:**
- [V Documentation - Variables](https://github.com/vlang/v/blob/master/doc/docs.md)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```wolfram
(* Variable declaration (implicit through assignment) *)
count = 42
name = "Hallo"
price = 19.99

(* With type annotation *)
count = 42 (* Integer *)
name = "Hallo" (* String *)
```

**Special features:**
- Variables are implicitly declared through assignment
- Type is determined dynamically
- Pattern matching for variable declaration

**Further reading:**
- [Wolfram Language Documentation - Variables](https://reference.wolfram.com/language/guide/VariablesAndFunctions.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Variable declaration
var count: i32 = undefined;
var name: []const u8 = undefined;
var price: f64 = undefined;

// Declaration with initialization
var count: i32 = 42;
var name: []const u8 = "Hallo";
```

**Special features:**
- `var` for mutable variables, `const` for immutable variables
- Type must be explicitly specified
- `undefined` for uninitialized variables

**Further reading:**
- [Zig Documentation - Variables](https://ziglang.org/documentation/0.11.0/#Variables)

</TabItem>
</Tabs>


## 4.1.2. Variable Assignment

Assignment of values to already declared variables.

### Languages {#sprachen}

<Tabs availableTabs={['ada', 'c', 'carbon', 'clojure', 'common-lisp', 'crystal', 'csharp', 'cpp', 'd', 'dart', 'eiffel', 'elixir', 'erlang', 'fsharp', 'fortran', 'go', 'groovy', 'haxe', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'lua', 'matlab', 'mojo', 'nim', 'objective-c', 'object-pascal', 'ocaml', 'octave', 'odin', 'perl', 'php', 'python', 'r', 'racket', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'vbnet', 'v', 'wolfram-language', 'zig']} orangeTabs={['elm', 'gleam', 'haskell', 'idris', 'mercury', 'prolog', 'purescript', 'roc']}>
<TabItem value="ada" label="Ada">

```ada
-- Variable assignment
count : Integer := 10;
count := 42;
name : String := "Welt";
name := "Hallo";
```

**Special features:**
- `:=` for assignment
- Type must be specified at declaration

**Further reading:**
- [Ada Reference Manual - Assignment Statements](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-5-2.html)

</TabItem>
<TabItem value="c" label="C">

```c
// Variable assignment
int count = 10;
count = 42;
char* name = "Welt";
name = "Hallo";
```

**Special features:**
- `=` for assignment
- Type must be specified at declaration

**Further reading:**
- [C Standard - Assignment Operators](https://en.cppreference.com/w/c/language/operator_assignment)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Variable assignment
int count = 10;
count = 42;
string name = "Welt";
name = "Hallo";
```

**Special features:**
- `=` for assignment
- Type must be specified at declaration (except with `var`)

**Further reading:**
- [Microsoft C# Documentation - Assignment Operators](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/assignment-operator)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Variable assignment
int count = 10;
count = 42;
std::string name = "Welt";
name = "Hallo";
```

**Special features:**
- `=` for assignment
- Type must be specified at declaration (except with `auto`)

**Further reading:**
- [cppreference.com - Assignment Operators](https://en.cppreference.com/w/cpp/language/operator_assignment)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Variable assignment
var count: i32 = 10;
count = 42;
var name: String = "Welt";
name = "Hallo";
```

**Special features:**
- `=` for assignment
- Experimental language, syntax may still change

**Further reading:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Variable assignment (with atom for mutable variables)
(def count (atom 10))
(swap! count (fn [_] 42))

;; Local bindings are immutable
(let [count 10
      count 42]  ; Shadowing, not assignment
  count)
```

**Special features:**
- Immutable by default
- `atom` for mutable variables with `swap!` or `reset!`
- Local bindings cannot be reassigned

**Further reading:**
- [Clojure Documentation - Atoms](https://clojure.org/reference/atoms)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Variable assignment
(defvar count 10)
(setf count 42)
(defparameter name "Welt")
(setf name "Hallo")
```

**Special features:**
- `setf` for assignment
- `defvar` and `defparameter` for variable declaration

**Further reading:**
- [Common Lisp HyperSpec - Assignment](http://www.lispworks.com/documentation/HyperSpec/Body/m_setf_.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Variable assignment
count = 10
count = 42
name = "Welt"
name = "Hallo"
```

**Special features:**
- `=` for assignment
- Type is inferred or can be explicitly specified

**Further reading:**
- [Crystal Documentation - Variables](https://crystal-lang.org/reference/1.11/syntax_and_semantics/variables.html)

</TabItem>
<TabItem value="d" label="D">

```d
// Variable assignment
int count = 10;
count = 42;
string name = "Welt";
name = "Hallo";
```

**Special features:**
- `=` for assignment
- Type must be specified at declaration

**Further reading:**
- [D Language Specification - Assignment](https://dlang.org/spec/expression.html#assignment_expressions)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Variable assignment
int count = 10;
count = 42;
String name = "Welt";
name = "Hallo";
```

**Special features:**
- `=` for assignment
- Type can be specified at declaration or is inferred

**Further reading:**
- [Dart Language Tour - Variables](https://dart.dev/guides/language/language-tour#variables)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
-- Variable assignment
count: INTEGER := 10
count := 42
name: STRING := "Welt"
name := "Hallo"
```

**Special features:**
- `:=` for assignment
- Type must be specified at declaration

**Further reading:**
- [Eiffel Documentation - Assignment](https://www.eiffel.org/doc/eiffel/Assignment)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Variable assignment (Pattern Matching)
count = 10
count = 42  # New binding, not assignment
name = "Welt"
name = "Hallo"
```

**Special features:**
- `=` for pattern matching, not assignment
- Technically, variables are rebound, not assigned
- Immutable by default

**Further reading:**
- [Elixir Documentation - Pattern Matching](https://elixir-lang.org/getting-started/pattern-matching.html)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Variable assignment (not possible, as immutable)
count = 10
-- count = 42  -- Error: cannot be reassigned

-- New binding with different name
count2 = 42
```

**Special features:**
- Immutable by default
- Variables cannot be reassigned
- New bindings with different names must be created

**Further reading:**
- [Elm Documentation - Values](https://guide.elm-lang.org/core_language.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% Variable assignment (Pattern Matching)
Count = 10,
Count = 42,  % Error: cannot be reassigned

% New binding with different name
Count2 = 42.
```

**Special features:**
- `=` for pattern matching, not assignment
- Immutable by default
- Variables cannot be reassigned

**Further reading:**
- [Erlang Documentation - Variables](https://www.erlang.org/doc/reference_manual/data_types.html#variables)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Variable assignment (mutable variables)
let mutable count = 10
count <- 42
let mutable name = "Welt"
name <- "Hallo"
```

**Special features:**
- `<-` for assignment to mutable variables
- `mutable` keyword required for assignment
- Immutable by default

**Further reading:**
- [F# Documentation - Mutable Variables](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/values/#mutable-variables)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Variable assignment
integer :: count = 10
count = 42
character(len=10) :: name = "Welt"
name = "Hallo"
```

**Special features:**
- `=` for assignment
- Type must be specified at declaration

**Further reading:**
- [Fortran Standard - Assignment](https://gcc.gnu.org/onlinedocs/gfortran/Assignment.html)

</TabItem>
<TabItem value="gleam" label="Gleam">

```erlang
// Variable assignment (not possible, as immutable)
let count = 10
// count = 42  // Error: cannot be reassigned

// New binding with different name
let count2 = 42
```

**Special features:**
- Immutable by default
- Variables cannot be reassigned
- New bindings with different names must be created

**Further reading:**
- [Gleam Documentation - Variables](https://gleam.run/documentation/)

</TabItem>
<TabItem value="go" label="Go">

```go
// Variable assignment
var count int = 10
count = 42
var name string = "Welt"
name = "Hallo"
```

**Special features:**
- `=` for assignment
- Type can be specified at declaration or is inferred

**Further reading:**
- [Go Documentation - Assignment](https://go.dev/ref/spec#Assignments)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Variable assignment
def count = 10
count = 42
def name = "Welt"
name = "Hallo"
```

**Special features:**
- `=` for assignment
- Type is determined dynamically or can be explicitly specified

**Further reading:**
- [Groovy Documentation - Variables](https://groovy-lang.org/semantics.html#_variable_declaration)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Variable assignment (not possible, as immutable)
count = 10
-- count = 42  -- Error: cannot be reassigned

-- New binding with different name
count2 = 42
```

**Special features:**
- Immutable by default
- Variables cannot be reassigned
- New bindings with different names must be created

**Further reading:**
- [Haskell Documentation - Variables](https://www.haskell.org/tutorial/variables.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Variable assignment
var count: Int = 10;
count = 42;
var name: String = "Welt";
name = "Hallo";
```

**Special features:**
- `=` for assignment
- Type can be specified at declaration or is inferred

**Further reading:**
- [Haxe Documentation - Variables](https://haxe.org/manual/expression-var.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Variable assignment (not possible, as immutable)
count : Int
count = 10
-- count = 42  -- Error: cannot be reassigned

-- New binding with different name
count2 : Int
count2 = 42
```

**Special features:**
- Immutable by default
- Variables cannot be reassigned
- New bindings with different names must be created

**Further reading:**
- [Idris 2 Documentation - Types and Functions](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Variable assignment
int count = 10;
count = 42;
String name = "Welt";
name = "Hallo";
```

**Special features:**
- `=` for assignment
- Type must be specified at declaration

**Further reading:**
- [Java Language Specification - Assignment](https://docs.oracle.com/javase/specs/jls/se21/html/jls-15.html#jls-15.26)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Variable assignment
var count = 10;
count = 42;
let name = "Welt";
name = "Hallo";
const price = 19.99;
// price = 20.00;  // Error: const cannot be reassigned
```

**Special features:**
- `=` for assignment
- `var` and `let` for mutable variables
- `const` for immutable variables

**Further reading:**
- [MDN Web Docs - Assignment Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Variable assignment
count = 10
count = 42
name = "Welt"
name = "Hallo"
```

**Special features:**
- `=` for assignment
- Type is determined dynamically or can be explicitly specified

**Further reading:**
- [Julia Documentation - Variables](https://docs.julialang.org/en/v1/manual/variables/)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Variable assignment with var and :=
var count := 10
count := 42
var name := "Welt"
name := "Hallo"

// val cannot be reassigned
val price = 19.99
// price := 20.00  // Compile error: val is immutable
```

**Special features:**
- `:=` for assignment to `var` variables
- `val` bindings are immutable and cannot be reassigned
- `var` is limited to local scope (no global `var`)

**Further reading:**
- [Koka Language Guide - Basics](https://koka-lang.github.io/koka/doc/book.html#sec-basics)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Variable assignment with let mut
def example : IO Unit := do
  let mut count := 10
  count := 42
  let mut name := "Welt"
  name := "Hallo"
  IO.println s!"{count}"  -- 42
  IO.println name          -- Hallo

-- let bindings cannot be reassigned
-- let x := 10
-- x := 20  -- Error: let bindings are immutable
```

**Special features:**
- `:=` for assignment to `let mut` variables
- `let` bindings are immutable and cannot be reassigned
- `let mut` is only available in `do` blocks

**Further reading:**
- [Lean 4 Documentation - Mutable Variables](https://lean-lang.org/lean4/doc/do.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Variable assignment
var count = 10
count = 42
var name = "Welt"
name = "Hallo"
val price = 19.99
// price = 20.00  // Error: val cannot be reassigned
```

**Special features:**
- `=` for assignment
- `var` for mutable variables
- `val` for immutable variables

**Further reading:**
- [Kotlin Documentation - Variables](https://kotlinlang.org/docs/basic-syntax.html#variables)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Variable assignment
local count = 10
count = 42
local name = "Welt"
name = "Hallo"
```

**Special features:**
- `=` for assignment
- Type is determined dynamically

**Further reading:**
- [Lua Documentation - Variables](https://www.lua.org/manual/5.4/manual.html#3.3.7)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% Variable assignment
count = 10;
count = 42;
name = 'Welt';
name = 'Hallo';
```

**Special features:**
- `=` for assignment
- Type is determined dynamically

**Further reading:**
- [MATLAB Documentation - Variables](https://www.mathworks.com/help/matlab/matlab_prog/creating-and-concatenating-matrices.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```mercury
% Variable binding through unification (no reassignment)
:- pred example(io::di, io::uo) is det.
example(!IO) :-
    Count = 42,
    % Count = 100  % Error: Count is already bound to 42

    % New binding with different name
    Count2 = 100,
    io.format("%d %d\n", [i(Count), i(Count2)], !IO).
```

**Special features:**
- `=` is unification, not assignment
- Variables cannot be reassigned (single binding)
- New bindings must be created with new variable names
- `is/2` does not evaluate arithmetic expressions — functions are used instead

**Further reading:**
- [Mercury Language Reference - Unification](https://www.mercurylang.org/information/doc-release/mercury_ref/Builtin-unification-and-comparison.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# Variable assignment
var count: Int = 10
count = 42
var name: String = "Welt"
name = "Hallo"
```

**Special features:**
- `=` for assignment
- Type can be specified at declaration or is inferred

**Further reading:**
- [Mojo Documentation - Variables](https://docs.modular.com/mojo/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Variable assignment
var count = 10
count = 42
var name = "Welt"
name = "Hallo"
```

**Special features:**
- `=` for assignment
- `var` for mutable variables
- Type can be specified at declaration or is inferred

**Further reading:**
- [Nim Documentation - Variables](https://nim-lang.org/docs/manual.html#variables)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objectivec
// Variable assignment
int count = 10;
count = 42;
NSString* name = @"Welt";
name = @"Hallo";
```

**Special features:**
- `=` for assignment
- Type must be specified at declaration

**Further reading:**
- [Objective-C Documentation - Variables](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Variable assignment
var
  count: Integer = 10;
  name: String = 'Welt';
begin
  count := 42;
  name := 'Hallo';
end;
```

**Special features:**
- `:=` for assignment
- Type must be specified at declaration

**Further reading:**
- [Object Pascal Documentation - Variables](https://www.freepascal.org/docs-html/ref/refse14.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Variable assignment (mutable variables) *)
let count = ref 10
count := 42
let name = ref "Welt"
name := "Hallo"
```

**Special features:**
- `:=` for assignment to `ref` variables
- `ref` for mutable variables
- Immutable by default

**Further reading:**
- [OCaml Documentation - References](https://ocaml.org/manual/coreexamples.html#s:references)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
% Variable assignment
count = 10;
count = 42;
name = "Welt";
name = "Hallo";
```

**Special features:**
- `=` for assignment
- Type is determined dynamically

**Further reading:**
- [Octave Documentation - Variables](https://octave.org/doc/v8.1.0/Variables.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Variable assignment
count: int = 10
count = 42
name: string = "Welt"
name = "Hallo"
```

**Special features:**
- `=` for assignment
- Type must be specified at declaration

**Further reading:**
- [Odin Documentation - Variables](https://odin-lang.org/docs/overview/#variables)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Variable assignment
my $count = 10;
$count = 42;
my $name = "Welt";
$name = "Hallo";
```

**Special features:**
- `=` for assignment
- Sigils (`$`, `@`, `%`) for type indicators

**Further reading:**
- [Perl Documentation - Variables](https://perldoc.perl.org/perlvar)

</TabItem>
<TabItem value="php" label="PHP">

```php
// Variable assignment
$count = 10;
$count = 42;
$name = "Welt";
$name = "Hallo";
```

**Special features:**
- `=` for assignment
- Type is determined dynamically

**Further reading:**
- [PHP Documentation - Variables](https://www.php.net/manual/en/language.variables.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Variable binding through unification (no reassignment)
example :-
    Count = 42,
    % Count = 100  % Error: Count is already bound to 42

    % New binding with different name
    Count2 = 100,
    format("~w ~w~n", [Count, Count2]).
```

**Special features:**
- `=` is unification, not assignment
- Variables cannot be reassigned (single binding)
- New bindings must be created with new variable names
- `is/2` evaluates arithmetic expressions and unifies the result

**Further reading:**
- [SWI-Prolog Manual - Unification](https://www.swi-prolog.org/pldoc/man?predicate=%3D/2)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Variable assignment (not possible, as immutable)
count = 10
-- count = 42  -- Error: cannot be reassigned

-- New binding with different name
count2 = 42
```

**Special features:**
- Immutable by default
- Variables cannot be reassigned
- New bindings with different names must be created

**Further reading:**
- [PureScript Documentation - Variables](https://www.purescript.org/learn/getting-started/)

</TabItem>
<TabItem value="python" label="Python">

```python
# Variable assignment
count = 10
count = 42
name = "Welt"
name = "Hallo"
```

**Special features:**
- `=` for assignment
- Type is determined dynamically

**Further reading:**
- [Python Documentation - Assignment Statements](https://docs.python.org/3/reference/simple_stmts.html#assignment-statements)

</TabItem>
<TabItem value="r" label="R">

```r
# Variable assignment
count <- 10
count <- 42
name <- "Welt"
name <- "Hallo"

# Alternative syntax
count = 10
count = 42
```

**Special features:**
- `<-` or `=` for assignment
- Type is determined dynamically

**Further reading:**
- [R Documentation - Variables](https://cran.r-project.org/doc/manuals/r-release/R-intro.html#Simple-manipulations-numbers-vectors-and-matrices)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
;; Variable assignment (mutable variables)
(define count 10)
(set! count 42)
(define name "Welt")
(set! name "Hallo")
```

**Special features:**
- `set!` for assignment to existing variables
- `define` creates bindings that can be changed with `set!`
- Mutation with `set!` is possible but stylistically avoided

**Further reading:**
- [Racket Documentation - Assignment](https://docs.racket-lang.org/guide/set_.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Variable assignment (not possible, as immutable)
count = 10
-- count = 42  -- Error: cannot be reassigned

-- New binding with different name
count2 = 42
```

**Special features:**
- Immutable by default
- Variables cannot be reassigned
- New bindings with different names must be created

**Further reading:**
- [Roc Documentation - Variables](https://www.roc-lang.org/)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Variable assignment
count = 10
count = 42
name = "Welt"
name = "Hallo"
```

**Special features:**
- `=` for assignment
- Type is determined dynamically

**Further reading:**
- [Ruby Documentation - Variables](https://ruby-doc.org/core-3.1.2/doc/syntax/assignment_rdoc.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Variable assignment
let mut count = 10;
count = 42;
let mut name = "Welt".to_string();
name = "Hallo".to_string();
```

**Special features:**
- `=` for assignment
- `mut` keyword required for mutable variables
- Immutable by default

**Further reading:**
- [Rust Documentation - Variables](https://doc.rust-lang.org/book/ch03-01-variables-and-mutability.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Variable assignment
var count = 10
count = 42
var name = "Welt"
name = "Hallo"
```

**Special features:**
- `=` for assignment
- `var` for mutable variables
- `val` for immutable variables

**Further reading:**
- [Scala Documentation - Variables](https://docs.scala-lang.org/tour/basics.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; Variable assignment (mutable variables)
(define count 10)
(set! count 42)
(define name "Welt")
(set! name "Hallo")
```

**Special features:**
- `set!` for assignment to mutable variables
- `define` creates immutable bindings by default
- `set!` requires that the variable was declared as mutable with `define`

**Further reading:**
- [Scheme Documentation - Assignment](https://www.scheme.com/tspl4/assignment.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Variable assignment
var count = 10
count = 42
var name = "Welt"
name = "Hallo"
```

**Special features:**
- `=` for assignment
- `var` for mutable variables
- `let` for immutable variables

**Further reading:**
- [Swift Documentation - Variables](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/thebasics/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Variable assignment
var count = 10;
count = 42;
let name = "Welt";
name = "Hallo";
const price = 19.99;
// price = 20.00;  // Error: const cannot be reassigned
```

**Special features:**
- `=` for assignment
- `var` and `let` for mutable variables
- `const` for immutable variables

**Further reading:**
- [TypeScript Documentation - Variable Declarations](https://www.typescriptlang.org/docs/handbook/variable-declarations.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vbnet
' Variable assignment
Dim count As Integer = 10
count = 42
Dim name As String = "Welt"
name = "Hallo"
```

**Special features:**
- `=` for assignment
- Type can be specified at declaration or is inferred

**Further reading:**
- [VB.NET Documentation - Variables](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/variables/)

</TabItem>
<TabItem value="v" label="V">

```v
// Variable assignment
mut count := 10
count = 42
mut name := "Welt"
name = "Hallo"
```

**Special features:**
- `=` for assignment
- `mut` for mutable variables
- `:=` for short declaration with type inference

**Further reading:**
- [V Documentation - Variables](https://github.com/vlang/v/blob/master/doc/docs.md)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```wolfram
(* Variable assignment *)
count = 10
count = 42
name = "Welt"
name = "Hallo"
```

**Special features:**
- `=` for assignment
- Type is determined dynamically

**Further reading:**
- [Wolfram Language Documentation - Variables](https://reference.wolfram.com/language/guide/VariablesAndFunctions.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Variable assignment
var count: i32 = 10;
count = 42;
var name: []const u8 = "Welt";
name = "Hallo";
```

**Special features:**
- `=` for assignment
- `var` for mutable variables
- Type must be specified at declaration

**Further reading:**
- [Zig Documentation - Variables](https://ziglang.org/documentation/0.11.0/#Variables)

</TabItem>
</Tabs>


## 4.1.3. Immutable Variables (const, let, val)

Variables that cannot be changed after initialization.

### Languages {#sprachen}

<Tabs availableTabs={['carbon', 'clojure', 'csharp', 'd', 'dart', 'elixir', 'elm', 'erlang', 'fortran', 'fsharp', 'gleam', 'groovy', 'haskell', 'haxe', 'idris', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'mercury', 'nim', 'objective-c', 'object-pascal', 'ocaml', 'php', 'prolog', 'purescript', 'racket', 'roc', 'rust', 'scala', 'swift', 'typescript', 'v', 'zig']} orangeTabs={['common-lisp', 'scheme']}>
<TabItem value="csharp" label="C#">

```csharp
// Immutable variables (const and readonly)
const int count = 42;
readonly string name = "Hallo";

// const for compile-time constants
const double PI = 3.14159;

// readonly for runtime constants
readonly DateTime createdAt = DateTime.Now;
```

**Special features:**
- `const` for compile-time constants
- `readonly` for runtime constants (only in classes)

**Further reading:**
- [Microsoft C# Documentation - const](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/const)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Immutable variables (final and const)
final int count = 42;
const String name = "Hallo";

// final for runtime constants
final DateTime now = DateTime.now();

// const for compile-time constants
const double PI = 3.14159;
```

**Special features:**
- `final` for runtime constants
- `const` for compile-time constants

**Further reading:**
- [Dart Language Tour - Final and Const](https://dart.dev/guides/language/language-tour#final-and-const)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Immutable variables (const)
const count = 42;
const name = "Hallo";
const price = 19.99;

// const cannot be reassigned
// count = 50;  // Error: Assignment to constant variable
```

**Special features:**
- `const` for immutable variables (since ES6)
- `const` prevents reassignment, but objects can be modified

**Further reading:**
- [MDN Web Docs - const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Immutable variables (const)
const count = 42;
const name = "Hallo";
const price = 19.99;

// const cannot be reassigned
// count = 50;  // Error: Cannot assign to 'count' because it is a constant
```

**Special features:**
- `const` for immutable variables
- `const` prevents reassignment, but objects can be modified

**Further reading:**
- [TypeScript Documentation - const](https://www.typescriptlang.org/docs/handbook/variable-declarations.html#const-declarations)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Immutable variables (val)
val count = 42
val name = "Hallo"
val price = 19.99

// val cannot be reassigned
// count = 50  // Error: Val cannot be reassigned
```

**Special features:**
- `val` for immutable variables
- `var` for mutable variables

**Further reading:**
- [Kotlin Documentation - Properties](https://kotlinlang.org/docs/properties.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Immutable variables (val)
val count = 42
val name = "Hallo"
val price = 19.99

// val cannot be reassigned
// count = 50  // Error: reassignment to val
```

**Special features:**
- `val` for immutable variables
- `var` for mutable variables

**Further reading:**
- [Scala Documentation - Values](https://docs.scala-lang.org/tour/basics.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Immutable variables (let)
let count = 42
let name = "Hallo"
let price = 19.99

// let cannot be reassigned
// count = 50  // Error: Cannot assign to value: 'count' is a 'let' constant
```

**Special features:**
- `let` for immutable variables
- `var` for mutable variables

**Further reading:**
- [Swift Documentation - Constants and Variables](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/thebasics/)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Immutable variables (let without mut)
let count = 42;
let name = "Hallo".to_string();
let price = 19.99;

// let cannot be reassigned
// count = 50;  // Error: cannot assign twice to immutable variable
```

**Special features:**
- `let` for immutable variables (default)
- `let mut` for mutable variables

**Further reading:**
- [Rust Documentation - Variables](https://doc.rust-lang.org/book/ch03-01-variables-and-mutability.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Immutable variables (let)
let count = 42
let name = "Hallo"
let price = 19.99

# let cannot be reassigned
# count = 50  # Error: 'count' cannot be assigned to
```

**Special features:**
- `let` for immutable variables
- `var` for mutable variables

**Further reading:**
- [Nim Documentation - Variables](https://nim-lang.org/docs/manual.html#variables)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Immutable variables (let without mutable)
let count = 42
let name = "Hallo"
let price = 19.99

// let cannot be reassigned
// count <- 50  // Error: This value is immutable
```

**Special features:**
- `let` for immutable variables (default)
- `let mutable` for mutable variables

**Further reading:**
- [F# Documentation - Values](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/values/)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Immutable variables (let without ref) *)
let count = 42
let name = "Hallo"
let price = 19.99

(* let cannot be reassigned *)
(* count := 50  (* Error: only ref variables can be assigned *) *)
```

**Special features:**
- `let` for immutable variables (default)
- `ref` for mutable variables

**Further reading:**
- [OCaml Documentation - Values](https://ocaml.org/manual/expr.html#ss:expr-let)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Immutable Variablen (Standard)
count = 42
name = "Hallo"
price = 19.99

-- Alle Variablen sind immutable
-- count = 50  -- Fehler: kann nicht neu zugewiesen werden
```

**Special features:**
- Alle Variablen sind standardmäßig immutable
- Keine expliziten Keywords erforderlich

**Further reading:**
- [Haskell Documentation - Variables](https://www.haskell.org/tutorial/variables.html)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Immutable variables (default)
count = 42
name = "Hallo"
price = 19.99

-- All variables are immutable
-- count = 50  -- Error: cannot be reassigned
```

**Special features:**
- All variables are immutable by default
- No explicit keywords required

**Further reading:**
- [Elm Documentation - Values](https://guide.elm-lang.org/core_language.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% Immutable variables (default)
Count = 42,
Name = "Hallo",
Price = 19.99.

% All variables are immutable
% Count = 50.  % Error: cannot be reassigned
```

**Special features:**
- All variables are immutable by default
- Pattern matching instead of assignment

**Further reading:**
- [Erlang Documentation - Variables](https://www.erlang.org/doc/reference_manual/data_types.html#variables)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Immutable variables (default)
count = 42
name = "Hallo"
price = 19.99

# All variables are immutable
# count = 50  # New binding, not assignment
```

**Special features:**
- All variables are immutable by default
- `=` is pattern matching, not assignment

**Further reading:**
- [Elixir Documentation - Pattern Matching](https://elixir-lang.org/getting-started/pattern-matching.html)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Immutable variables (default)
(def count 42)
(def name "Hallo")
(def price 19.99)

;; All variables are immutable
;; count = 50  ;; Error: cannot be reassigned
```

**Special features:**
- All variables are immutable by default
- `def` for global bindings, `let` for local bindings

**Further reading:**
- [Clojure Documentation - Vars](https://clojure.org/reference/vars)

</TabItem>
<TabItem value="gleam" label="Gleam">

```erlang
// Immutable variables (default)
let count = 42
let name = "Hallo"
let price = 19.99

// All variables are immutable
// count = 50  // Error: cannot be reassigned
```

**Special features:**
- All variables are immutable by default
- `let` for variable declaration

**Further reading:**
- [Gleam Documentation - Variables](https://gleam.run/documentation/)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Immutable variables (default)
count = 42
name = "Hallo"
price = 19.99

-- All variables are immutable
-- count = 50  -- Error: cannot be reassigned
```

**Special features:**
- All variables are immutable by default
- No explicit keywords required

**Further reading:**
- [PureScript Documentation - Variables](https://www.purescript.org/learn/getting-started/)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Immutable variables (default)
count = 42
name = "Hallo"
price = 19.99

-- All variables are immutable
-- count = 50  -- Error: cannot be reassigned
```

**Special features:**
- All variables are immutable by default
- No explicit keywords required

**Further reading:**
- [Roc Documentation - Variables](https://www.roc-lang.org/)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Immutable variables (default)
count : Int
count = 42
name : String
name = "Hallo"

-- All variables are immutable
-- count = 50  -- Error: cannot be reassigned
```

**Special features:**
- All variables are immutable by default
- Type annotations are optional but recommended

**Further reading:**
- [Idris 2 Documentation - Types and Functions](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
;; Immutable values (data structures)
(define items (list 1 2 3))   ; List is immutable
(define pair (cons 'a 'b))    ; Pair is immutable
(define str "hello")          ; String is immutable

;; Variable bindings are conventionally immutable
;; (set! items '(4 5 6))  ;; Technically possible, stylistically avoided
```

**Special features:**
- Data structures (lists, pairs, strings) are immutable by default
- Variable bindings can be changed with `set!`, but convention is immutability
- Functional programming style prefers immutable bindings

**Further reading:**
- [Racket Documentation - Variables](https://docs.racket-lang.org/guide/define.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; Immutable variables (not directly supported)
;; Scheme has no enforced immutability for variables
;; All variables declared with define can be changed with set!
(define count 42)
(define name "Hallo")
(define price 19.99)

;; Convention: do not change variables with set!
;; But: (set! count 50) is syntactically and semantically valid
```

**Special features:**
- Scheme has no enforced immutability for variables
- All `define` bindings can be changed with `set!`
- Immutability is convention, not enforced by the language

**Further reading:**
- [Scheme Documentation - Variables](https://www.scheme.com/tspl4/binding.html)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Immutable variables (not directly supported)
;; Common Lisp has no explicit immutable variables
;; All variables are mutable by default
(defvar count 42)
(defparameter name "Hallo")
```

**Special features:**
- No explicit immutable variables
- All variables are mutable by default

**Further reading:**
- [Common Lisp HyperSpec - Variables](http://www.lispworks.com/documentation/HyperSpec/Body/03_abab.htm)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Immutable variables with let
let count: i32 = 42;
let name: String = "Hallo";
let price: f64 = 19.99;

// Assignment to let variable is not allowed
// count = 10; // Error: Cannot assign to let binding
```

**Special features:**
- `let` declares immutable bindings
- `var` declares mutable variables (see Mutable Variables)
- Experimental language, syntax may still change

**Further reading:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="d" label="D">

```d
// Immutable Variables
immutable int x = 42;
// x = 10;  // Error: cannot modify immutable

const double pi = 3.14159;
// pi = 3.0;  // Error: cannot modify const

// enum for compile-time constants
enum MAX_SIZE = 100;

// immutable arrays
immutable int[] values = [1, 2, 3];
// values[0] = 10;  // Error
```

**Special features:**
- `immutable`: value can never be changed (deeply immutable)
- `const`: value cannot be changed through this reference
- `enum`: compile-time constant (no memory allocation)
- `immutable` data is implicitly thread-safe

**Further reading:**
- [D Language Specification - Const and Immutable](https://dlang.org/spec/const3.html)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Constants with PARAMETER
integer, parameter :: MAX_SIZE = 100
real, parameter :: PI = 3.141592653589793
character(len=*), parameter :: GREETING = "Hallo"

! MAX_SIZE = 200  ! Error: PARAMETER cannot be changed
```

**Special features:**
- `PARAMETER` attribute for compile-time constants
- Value must be known at compile time
- Cannot be reassigned

**Further reading:**
- [Fortran Standard - PARAMETER](https://gcc.gnu.org/onlinedocs/gfortran/PARAMETER.html)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Immutable variables with final
final int count = 42
// count = 43 // Error: Cannot assign a value to final variable

final String name = "Hallo"
// name = "Welt" // Error: Cannot assign a value to final variable

// Also with def
final def price = 19.99
```

**Special features:**
- `final` prevents reassignment after initialization
- No `const` or `val` keyword
- `final` on objects only prevents reassignment, not mutation of the object

**Further reading:**
- [Groovy Documentation - Variables](https://groovy-lang.org/semantics.html#_variable_declaration)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Immutable Variables with final (since Haxe 4.0)
final count = 42;
final name:String = "Hallo";
// count = 43; // Error: Cannot assign to final
```

**Special features:**
- `final` for immutable variables (since Haxe 4.0)
- Type can be specified explicitly or is inferred

**Further reading:**
- [Haxe Documentation - Final](https://haxe.org/manual/class-field-final.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Immutable Variables: final keyword
final int count = 42;
// count = 10;  // Compile error: cannot assign a value to final variable

final String name = "Alice";
// name = "Bob";  // Compile error

// final with reference types: reference is immutable, object is not
final List<String> items = new ArrayList<>();
items.add("Apfel");  // OK: object can be modified
// items = new ArrayList<>();  // Compile error: reference cannot be changed
```

**Special features:**
- `final` keyword makes variables immutable
- With reference types, only the reference is immutable, not the object itself
- `final` can be used for local variables, parameters, fields, and method parameters
- Since Java 10: `var` can be combined with `final` (`final var x = 42;`)

**Further reading:**
- [Oracle Java Documentation - final Keyword](https://docs.oracle.com/javase/tutorial/java/javaOO/classvars.html)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Constants with const (global scope)
const MAX_SIZE = 100
const PI_APPROX = 3.14159

# const prevents type change
# MAX_SIZE = "text"  # Error: type change not allowed

# Value change generates warning
# MAX_SIZE = 200  # Warning: redefinition of constant

# Immutable structs
struct Point
    x::Float64
    y::Float64
end

p = Point(1.0, 2.0)
# p.x = 3.0  # Error: immutable struct
```

**Special features:**
- `const` only available for global variables, not local
- Type change of a `const` variable generates an error
- Value change of a `const` variable generates a warning
- `struct` (without `mutable`) creates immutable data types

**Further reading:**
- [Julia Documentation - Constants](https://docs.julialang.org/en/v1/manual/variables-and-scoping/#Constants)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Immutable Variables: val (default)
val count = 42
val name = "Hallo"
val price = 19.99

// val cannot be reassigned
// count := 50  // Compile error: val is immutable

// All val bindings are immutable
fun example(): console ()
  val x = 10
  val y = 20
  println((x + y).show)  // 30
```

**Special features:**
- `val` is the default for variable declarations (immutable)
- Immutability is a core principle of Koka
- Data structures are immutable by default
- For mutable variables, `var` must be used explicitly

**Further reading:**
- [Koka Language Guide - Basics](https://koka-lang.github.io/koka/doc/book.html#sec-basics)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Immutable Variables: let and def (default)
def count : Nat := 42
def name : String := "Hallo"
def price : Float := 19.99

-- def cannot be reassigned (top-level definition)

-- let in do blocks
def example : IO Unit := do
  let x := 10
  let y := 20
  -- x := 30  -- Error: let bindings are immutable
  IO.println s!"{x + y}"  -- 30
```

**Special features:**
- `def` for top-level definitions (always immutable)
- `let` for local bindings (immutable by default)
- Immutability is a core principle of Lean 4
- For mutable local variables, `let mut` must be used explicitly

**Further reading:**
- [Lean 4 Documentation - Definitions](https://lean-lang.org/lean4/doc/lean-by-example/variables.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```mercury
% Immutable variables (default in Mercury)
:- pred example(io::di, io::uo) is det.
example(!IO) :-
    Count = 42,
    Name = "hello",
    Price = 19.99,
    % Count = 50  % Error: unification fails (Count is already 42)
    io.format("%d %s %f\n", [i(Count), s(Name), f(Price)], !IO).

% All variables are immutable after binding
:- pred immutable_demo(io::di, io::uo) is det.
immutable_demo(!IO) :-
    X = [1, 2, 3],
    % X = [4, 5, 6]  % Error: X is already bound
    list.length(X, Len),
    io.format("Length: %d\n", [i(Len)], !IO).
```

**Special features:**
- All variables are immutable after binding (unification)
- Immutability is a fundamental principle of logic programming
- No special keyword like `const` or `val` needed — immutability is the default
- New values require new variable names

**Further reading:**
- [Mercury Language Reference - Unification](https://www.mercurylang.org/information/doc-release/mercury_ref/Builtin-unification-and-comparison.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Constants
const
  MaxSize = 100;
  Pi = 3.14159;
  Greeting: string = 'Hallo Welt';

// Typed Constants (are actually mutable in Free Pascal!)
const
  Counter: Integer = 0;

begin
  // MaxSize := 200;  // Error: Cannot be assigned
end;
```

**Special features:**
- `const` for compile-time constants
- Typed Constants (`const x: Type = value`) are mutable by default in Free Pascal (with `{$J+}`)
- True Constants (`const x = value`) are always immutable
- `{$J-}` makes Typed Constants immutable

**Further reading:**
- [Free Pascal Documentation - Constants](https://www.freepascal.org/docs-html/ref/refse3.html)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Immutable variable with const
const int maxValue = 100;
// maxValue = 200; // Error

// Immutable pointer
NSString *const name = @"Hallo";
// name = @"Welt"; // Error: Cannot assign to variable with const-qualified type
```

**Special features:**
- `const` for immutable primitive values
- `const` with pointers distinguishes between pointer constancy and value constancy
- No own keyword like `let` or `val` (that's Swift/Kotlin)

**Further reading:**
- [Apple Documentation - Programming with Objective-C](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
// Constants
const MAX_SIZE = 100;
define('PI', 3.14159);

// Class constants
class Config {
    const VERSION = "1.0";
    public const NAME = "MyApp";
}

echo Config::VERSION;
?>
```

**Special features:**
- `const` for compile-time constants (only scalar values)
- `define()` for runtime constants
- Class constants with `const` within classes
- Variables cannot be declared as immutable

**Further reading:**
- [PHP Documentation - Constants](https://www.php.net/manual/en/language.constants.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Immutable variables (default in Prolog)
example :-
    Count = 42,
    Name = hello,
    Price = 19.99,
    % Count = 50   % Error: unification fails (Count is already 42)
    format("~w ~w ~w~n", [Count, Name, Price]).

% All variables are immutable after binding
immutable_demo :-
    X = [1, 2, 3],
    % X = [4, 5, 6]  % Error: X is already bound
    length(X, Len),
    format("Length: ~w~n", [Len]).
```

**Special features:**
- All variables are immutable after binding (unification)
- Immutability is a fundamental principle of logic programming
- No special keyword like `const` or `val` needed — immutability is the default
- New values require new variable names

**Further reading:**
- [SWI-Prolog Manual - Unification](https://www.swi-prolog.org/pldoc/man?predicate=%3D/2)

</TabItem>
<TabItem value="v" label="V">

```v
// Immutable Variables (default)
name := 'Alice'
age := 30

// name = 'Bob'  // Error: Cannot assign to immutable variable

// Mutable with `mut`
mut counter := 0
counter = 1  // OK
```

**Special features:**
- Variables are immutable by default (declared with `:=`)
- `mut` keyword for mutable variables
- Immutability is enforced by the compiler

**Further reading:**
- [V Documentation - Variables](https://github.com/vlang/v/blob/master/doc/docs.md#variables)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Immutable Variables: const
const count: i32 = 42;
const name: []const u8 = "Hallo";
const price: f64 = 19.99;

// Cannot be changed
// count = 10;  // Compile error: cannot assign to constant

// Const with type inference
const pi = 3.14159;
const message = "Welt";
```

**Special features:**
- `const` creates immutable bindings
- Preferred declaration type in Zig (idiomatic)
- Comptime values are always `const`
- `const` is relevant not only for the binding, but also for the pointer type

**Further reading:**
- [Zig Documentation - Variables](https://ziglang.org/documentation/master/#Variables)

</TabItem>
</Tabs>


## 4.1.4. Mutable Variables (var)

Variables that can be changed after initialization.

### Languages {#sprachen}

<Tabs availableTabs={['ada', 'c', 'carbon', 'clojure', 'common-lisp', 'crystal', 'csharp', 'cpp', 'd', 'dart', 'eiffel', 'fsharp', 'go', 'groovy', 'haxe', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'lua', 'matlab', 'mojo', 'nim', 'objective-c', 'object-pascal', 'ocaml', 'octave', 'odin', 'perl', 'php', 'python', 'r', 'racket', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'vbnet', 'v', 'wolfram-language', 'zig']}>
<TabItem value="csharp" label="C#">

```csharp
// Mutable variables (var oder expliziter Typ)
var count = 10;
count = 42;
var name = "Welt";
name = "Hallo";

// Mit explizitem Typ
int count2 = 10;
count2 = 42;
```

**Special features:**
- `var` for type inference (seit C# 3.0)
- Explicit types for mutable variables

**Further reading:**
- [Microsoft C# Documentation - var](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/statements/declarations#implicitly-typed-local-variables)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Mutable variables (var oder let)
var count = 10;
count = 42;
let name = "Welt";
name = "Hallo";
```

**Special features:**
- `var` for function scope
- `let` for block scope

**Further reading:**
- [MDN Web Docs - var](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Mutable variables (var oder let)
var count = 10;
count = 42;
let name = "Welt";
name = "Hallo";
```

**Special features:**
- `var` for function scope
- `let` for block scope

**Further reading:**
- [TypeScript Documentation - Variable Declarations](https://www.typescriptlang.org/docs/handbook/variable-declarations.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Mutable variables (var)
var count = 10
count = 42
var name = "Welt"
name = "Hallo"
```

**Special features:**
- `var` for mutable variables
- `val` for immutable variables

**Further reading:**
- [Kotlin Documentation - Variables](https://kotlinlang.org/docs/basic-syntax.html#variables)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Mutable variables (var)
var count = 10
count = 42
var name = "Welt"
name = "Hallo"
```

**Special features:**
- `var` for mutable variables
- `val` for immutable variables

**Further reading:**
- [Scala Documentation - Variables](https://docs.scala-lang.org/tour/basics.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Mutable variables (var)
var count = 10
count = 42
var name = "Welt"
name = "Hallo"
```

**Special features:**
- `var` for mutable variables
- `let` for immutable variables

**Further reading:**
- [Swift Documentation - Variables](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/thebasics/)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Mutable variables (let mut)
let mut count = 10;
count = 42;
let mut name = "Welt".to_string();
name = "Hallo".to_string();
```

**Special features:**
- `let mut` for mutable variables
- `let` for immutable variables (default)

**Further reading:**
- [Rust Documentation - Variables](https://doc.rust-lang.org/book/ch03-01-variables-and-mutability.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Mutable variables (var)
var count = 10
count = 42
var name = "Welt"
name = "Hallo"
```

**Special features:**
- `var` for mutable variables
- `let` for immutable variables

**Further reading:**
- [Nim Documentation - Variables](https://nim-lang.org/docs/manual.html#variables)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Mutable variables (var oder expliziter Typ)
var count = 10;
count = 42;
String name = "Welt";
name = "Hallo";
```

**Special features:**
- `var` for type inference
- Explicit types for mutable variables

**Further reading:**
- [Dart Language Tour - Variables](https://dart.dev/guides/language/language-tour#variables)

</TabItem>
<TabItem value="go" label="Go">

```go
// Mutable variables (var oder :=)
var count int = 10
count = 42
name := "Welt"
name = "Hallo"
```

**Special features:**
- `var` for explicit declaration
- `:=` for short declaration with type inference

**Further reading:**
- [Go Documentation - Variables](https://go.dev/ref/spec#Variable_declarations)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Mutable variables (def oder expliziter Typ)
def count = 10
count = 42
String name = "Welt"
name = "Hallo"
```

**Special features:**
- `def` for dynamic typing
- Explicit types for mutable variables

**Further reading:**
- [Groovy Documentation - Variables](https://groovy-lang.org/semantics.html#_variable_declaration)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Mutable variables (var)
var count: Int = 10;
count = 42;
var name: String = "Welt";
name = "Hallo";
```

**Special features:**
- `var` for variable declaration
- Type can be specified explicitly or is inferred

**Further reading:**
- [Haxe Documentation - Variables](https://haxe.org/manual/expression-var.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# Mutable variables (var)
var count: Int = 10
count = 42
var name: String = "Welt"
name = "Hallo"
```

**Special features:**
- `var` for variable declaration
- Type can be specified explicitly or is inferred

**Further reading:**
- [Mojo Documentation - Variables](https://docs.modular.com/mojo/)

</TabItem>
<TabItem value="v" label="V">

```v
// Mutable variables (mut)
mut count := 10
count = 42
mut name := "Welt"
name = "Hallo"
```

**Special features:**
- `mut` for mutable variables
- `:=` for short declaration with type inference

**Further reading:**
- [V Documentation - Variables](https://github.com/vlang/v/blob/master/doc/docs.md)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vbnet
' Mutable variables (Dim)
Dim count As Integer = 10
count = 42
Dim name As String = "Welt"
name = "Hallo"
```

**Special features:**
- `Dim` für Variablendeklaration
- Type can be specified explicitly or is inferred

**Further reading:**
- [VB.NET Documentation - Variables](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/variables/)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Mutable variables (var)
var count: i32 = 10;
count = 42;
var name: []const u8 = "Welt";
name = "Hallo";
```

**Special features:**
- `var` for mutable variables
- `const` for immutable variables

**Further reading:**
- [Zig Documentation - Variables](https://ziglang.org/documentation/0.11.0/#Variables)

</TabItem>
<TabItem value="java" label="Java">

```java
// Mutable variables (expliziter Typ)
int count = 10;
count = 42;
String name = "Welt";
name = "Hallo";
```

**Special features:**
- Explicit types for mutable variables
- Since Java 10: `var` for local type inference (`var x = 42;`)

**Further reading:**
- [Java Language Specification - Variables](https://docs.oracle.com/javase/specs/jls/se21/html/jls-4.html#jls-4.12)

</TabItem>
<TabItem value="c" label="C">

```c
// Mutable variables (expliziter Typ)
int count = 10;
count = 42;
char* name = "Welt";
name = "Hallo";
```

**Special features:**
- Explicit types for mutable variables
- All variables are mutable by default

**Further reading:**
- [C Standard - Declarations](https://en.cppreference.com/w/c/language/declarations)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Mutable variables (expliziter Typ oder auto)
int count = 10;
count = 42;
auto name = std::string("Welt");
name = "Hallo";
```

**Special features:**
- Explicit types or `auto` for mutable variables
- All variables are mutable by default

**Further reading:**
- [cppreference.com - Declarations](https://en.cppreference.com/w/cpp/language/declarations)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Mutable variables (var)
var count: i32 = 10;
count = 42;
var name: String = "Welt";
name = "Hallo";
```

**Special features:**
- `var` for variable declaration
- Experimental language, syntax may still change

**Further reading:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="d" label="D">

```d
// Mutable variables (expliziter Typ)
int count = 10;
count = 42;
string name = "Welt";
name = "Hallo";
```

**Special features:**
- Explicit types for mutable variables
- All variables are mutable by default

**Further reading:**
- [D Language Specification - Variables](https://dlang.org/spec/declaration.html)

</TabItem>
<TabItem value="ada" label="Ada">

```ada
-- Mutable variables (expliziter Typ)
count : Integer := 10;
count := 42;
name : String := "Welt";
name := "Hallo";
```

**Special features:**
- Explicit types for mutable variables
- `:=` for assignment

**Further reading:**
- [Ada Reference Manual - Variables](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-3-3-1.html)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
-- Mutable variables (expliziter Typ)
count: INTEGER := 10
count := 42
name: STRING := "Welt"
name := "Hallo"
```

**Special features:**
- Explicit types for mutable variables
- `:=` for assignment

**Further reading:**
- [Eiffel Documentation - Variables](https://www.eiffel.org/doc/eiffel/Variables)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Mutable variables (expliziter Typ)
count: int = 10
count = 42
name: string = "Welt"
name = "Hallo"
```

**Special features:**
- Explicit types for mutable variables
- All variables are mutable by default

**Further reading:**
- [Odin Documentation - Variables](https://odin-lang.org/docs/overview/#variables)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objectivec
// Mutable variables (expliziter Typ)
int count = 10;
count = 42;
NSString* name = @"Welt";
name = @"Hallo";
```

**Special features:**
- Explicit types for mutable variables
- All variables are mutable by default

**Further reading:**
- [Objective-C Documentation - Variables](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Mutable variables (var Block)
var
  count: Integer = 10;
  name: String = 'Welt';
begin
  count := 42;
  name := 'Hallo';
end;
```

**Special features:**
- `var` block for variable declarations
- `:=` for assignment

**Further reading:**
- [Object Pascal Documentation - Variables](https://www.freepascal.org/docs-html/ref/refse14.html)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Mutable variables (standardmäßig)
count = 10
count = 42
name = "Welt"
name = "Hallo"
```

**Special features:**
- All variables are mutable by default
- No explicit `var` keyword required

**Further reading:**
- [Crystal Documentation - Variables](https://crystal-lang.org/reference/1.11/syntax_and_semantics/variables.html)

</TabItem>
<TabItem value="python" label="Python">

```python
# Mutable variables (standardmäßig)
count = 10
count = 42
name = "Welt"
name = "Hallo"
```

**Special features:**
- All variables are mutable by default
- No explicit `var` keyword required

**Further reading:**
- [Python Documentation - Assignment Statements](https://docs.python.org/3/reference/simple_stmts.html#assignment-statements)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Mutable variables (standardmäßig)
count = 10
count = 42
name = "Welt"
name = "Hallo"
```

**Special features:**
- All variables are mutable by default
- No explicit `var` keyword required

**Further reading:**
- [Ruby Documentation - Variables](https://ruby-doc.org/core-3.1.2/doc/syntax/assignment_rdoc.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Mutable variables (local)
local count = 10
count = 42
local name = "Welt"
name = "Hallo"
```

**Special features:**
- `local` for local variables
- All variables are mutable by default

**Further reading:**
- [Lua Documentation - Variables](https://www.lua.org/manual/5.4/manual.html#3.3.7)

</TabItem>
<TabItem value="php" label="PHP">

```php
// Mutable variables (standardmäßig)
$count = 10;
$count = 42;
$name = "Welt";
$name = "Hallo";
```

**Special features:**
- All variables are mutable by default
- `$` prefix for variables

**Further reading:**
- [PHP Documentation - Variables](https://www.php.net/manual/en/language.variables.php)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Mutable variables (my)
my $count = 10;
$count = 42;
my $name = "Welt";
$name = "Hallo";
```

**Special features:**
- `my` for lexical variables
- Sigils (`$`, `@`, `%`) for type indicators

**Further reading:**
- [Perl Documentation - Variables](https://perldoc.perl.org/perlvar)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Mutable variables (standardmäßig)
count = 10
count = 42
name = "Welt"
name = "Hallo"
```

**Special features:**
- All variables are mutable by default
- Type can be specified explicitly or is inferred

**Further reading:**
- [Julia Documentation - Variables](https://docs.julialang.org/en/v1/manual/variables/)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Mutable variables mit var
fun example(): console ()
  var count := 10
  count := 42
  var name := "Welt"
  name := "Hallo"
  println(count.show)  // 42
  println(name)        // Hallo
```

**Special features:**
- `var` for mutable local variables
- `:=` for initialization and reassignment
- `var` is only available in local scope (not at module level)
- Mutable state is tracked by the effect system

**Further reading:**
- [Koka Language Guide - Basics](https://koka-lang.github.io/koka/doc/book.html#sec-basics)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Mutable variables (let mut in do-Blöcken)
def example : IO Unit := do
  let mut count := 10
  count := 42
  let mut name := "Welt"
  name := "Hallo"
  IO.println s!"{count}"  -- 42
  IO.println name          -- Hallo
```

**Special features:**
- `let mut` for mutable local variables
- `:=` for initialization and reassignment
- `let mut` is only available in `do` blocks
- `let` (without `mut`) is immutable (default)

**Further reading:**
- [Lean 4 Documentation - Mutable Variables](https://lean-lang.org/lean4/doc/do.html)

</TabItem>
<TabItem value="r" label="R">

```r
# Mutable variables (standardmäßig)
count <- 10
count <- 42
name <- "Welt"
name <- "Hallo"
```

**Special features:**
- `<-` or `=` for assignment
- All variables are mutable by default

**Further reading:**
- [R Documentation - Variables](https://cran.r-project.org/doc/manuals/r-release/R-intro.html#Simple-manipulations-numbers-vectors-and-matrices)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% Mutable variables (standardmäßig)
count = 10;
count = 42;
name = 'Welt';
name = 'Hallo';
```

**Special features:**
- All variables are mutable by default
- Type is determined dynamically

**Further reading:**
- [MATLAB Documentation - Variables](https://www.mathworks.com/help/matlab/matlab_prog/creating-and-concatenating-matrices.html)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
% Mutable variables (standardmäßig)
count = 10;
count = 42;
name = "Welt";
name = "Hallo";
```

**Special features:**
- All variables are mutable by default
- Type is determined dynamically

**Further reading:**
- [Octave Documentation - Variables](https://octave.org/doc/v8.1.0/Variables.html)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```wolfram
(* Mutable variables (standardmäßig) *)
count = 10
count = 42
name = "Welt"
name = "Hallo"
```

**Special features:**
- All variables are mutable by default
- Type is determined dynamically

**Further reading:**
- [Wolfram Language Documentation - Variables](https://reference.wolfram.com/language/guide/VariablesAndFunctions.html)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Mutable variables (mit atom)
(def count (atom 10))
(swap! count (fn [_] 42))
(reset! count 42)

(def name (atom "Welt"))
(swap! name (fn [_] "Hallo"))
```

**Special features:**
- `atom` for mutable variables
- `swap!` and `reset!` for changes
- Variables are immutable by default

**Further reading:**
- [Clojure Documentation - Atoms](https://clojure.org/reference/atoms)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Mutable variables (defvar oder defparameter)
(defvar count 10)
(setf count 42)
(defparameter name "Welt")
(setf name "Hallo")
```

**Special features:**
- `defvar` and `defparameter` for variable declaration
- `setf` for assignment
- All variables are mutable by default

**Further reading:**
- [Common Lisp HyperSpec - Variables](http://www.lispworks.com/documentation/HyperSpec/Body/03_abab.htm)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Mutable variables (let mutable)
let mutable count = 10
count <- 42
let mutable name = "Welt"
name <- "Hallo"
```

**Special features:**
- `let mutable` for mutable variables
- `<-` for assignment
- Variables are immutable by default

**Further reading:**
- [F# Documentation - Mutable Variables](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/values/#mutable-variables)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Mutable variables (ref) *)
let count = ref 10
count := 42
let name = ref "Welt"
name := "Hallo"
```

**Special features:**
- `ref` for mutable variables
- `:=` for assignment
- Variables are immutable by default

**Further reading:**
- [OCaml Documentation - References](https://ocaml.org/manual/coreexamples.html#s:references)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
;; Mutable variables (define mit set!)
(define count 10)
(set! count 42)
(define name "Welt")
(set! name "Hallo")
```

**Special features:**
- `define` for variable declaration
- `set!` for mutation of existing bindings
- Variables can be mutated, but functional style prefers immutability

**Further reading:**
- [Racket Documentation - Assignment](https://docs.racket-lang.org/guide/set_.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; Mutable variables (alle define-Variablen sind mutable)
(define count 10)
(set! count 42)
(define name "Welt")
(set! name "Hallo")
```

**Special features:**
- `define` creates bindings that can be changed with `set!`
- `set!` for reassignment
- No separate "mutable" declaration needed - all variables are mutable

**Further reading:**
- [Scheme Documentation - Assignment](https://www.scheme.com/tspl4/assignment.html)

</TabItem>
</Tabs>


## 4.1.5. Variable Shadowing

A variable in an inner scope shadows a variable with the same name in an outer scope.

### Languages {#sprachen}

<Tabs availableTabs={['c', 'clojure', 'common-lisp', 'cpp', 'csharp', 'd', 'dart', 'elm', 'gleam', 'go', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'lua', 'nim', 'objective-c', 'octave', 'perl', 'python', 'roc', 'rust', 'scala', 'swift', 'typescript', 'wolfram-language']}>
<TabItem value="javascript" label="JavaScript">

```javascript
// Variable Shadowing
let count = 10;
{
  let count = 42;  // Shadows the outer variable
  console.log(count);  // 42
}
console.log(count);  // 10
```

**Special features:**
- `let` and `const` support shadowing
- `var` does not support shadowing (function scope)

**Further reading:**
- [MDN Web Docs - let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Variable Shadowing
let count = 10;
{
  let count = 42;  // Shadows the outer variable
  console.log(count);  // 42
}
console.log(count);  // 10
```

**Special features:**
- `let` and `const` support shadowing
- `var` does not support shadowing (function scope)

**Further reading:**
- [TypeScript Documentation - Variable Declarations](https://www.typescriptlang.org/docs/handbook/variable-declarations.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Variable Shadowing: fields by local variables
class Example {
    int count = 10;  // Feld

    void method() {
        int count = 42;  // Shadows the field
        System.out.println(count);       // 42
        System.out.println(this.count);  // 10
    }
}
```

**Special features:**
- Fields can be shadowed by local variables
- Access to the shadowed field via `this.fieldname`
- Local variables CANNOT be shadowed by other local variables in the same method block (compile error)

**Further reading:**
- [Java Language Specification - Scope](https://docs.oracle.com/javase/specs/jls/se21/html/jls-6.html#jls-6.4)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Variable Shadowing: only fields by local variables
class Example {
    int count = 10;  // Feld
    
    void Method() {
        int count = 42;  // Local variable shadows field
        Console.WriteLine(count);        // 42 (lokale Variable)
        Console.WriteLine(this.count);   // 10 (Feld)
    }
}

// Variable Shadowing in verschachtelten Methoden
void Outer() {
    int x = 10;
    void Inner() {
        int x = 42;  // OK: Eigener Scope in lokaler Funktion
        Console.WriteLine(x);  // 42
    }
}
```

**Special features:**
- Fields can be shadowed by local variables (Zugriff auf Feld mit `this.`)
- Local variables CANNOT be shadowed in nested blocks of the same method scope (CS0136)
- Lokale Funktionen haben eigene Scopes und können Variablen shadowen

**Further reading:**
- [Microsoft C# Documentation - Scope](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/basic-concepts#scopes)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Variable Shadowing
int count = 10;
{
  int count = 42;  // Shadowt die äußere Variable
  std::cout << count << std::endl;  // 42
}
std::cout << count << std::endl;  // 10
```

**Special features:**
- Local variables can shadow variables in outer scopes
- Namespace variables can be shadowed by local variables

**Further reading:**
- [cppreference.com - Scope](https://en.cppreference.com/w/cpp/language/scope)

</TabItem>
<TabItem value="c" label="C">

```c
// Variable Shadowing
int count = 10;
{
  int count = 42;  // Shadowt die äußere Variable
  printf("%d\n", count);  // 42
}
printf("%d\n", count);  // 10
```

**Special features:**
- Local variables can shadow variables in outer scopes
- Global variables can be shadowed by local variables

**Further reading:**
- [C Standard - Scope](https://en.cppreference.com/w/c/language/scope)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Variable Shadowing
let count = 10;
{
  let count = 42;  // Shadows the outer variable
  println!("{}", count);  // 42
}
println!("{}", count);  // 10
```

**Special features:**
- Shadowing is allowed and commonly used
- Shadowing allows type changes

**Further reading:**
- [Rust Documentation - Variables](https://doc.rust-lang.org/book/ch03-01-variables-and-mutability.html)

</TabItem>
<TabItem value="go" label="Go">

```go
// Variable Shadowing
count := 10
{
  count := 42  // Shadows the outer variable
  fmt.Println(count)  // 42
}
fmt.Println(count)  // 10
```

**Special features:**
- Local variables can shadow variables in outer scopes
- Package variables can be shadowed by local variables

**Further reading:**
- [Go Documentation - Scope](https://go.dev/ref/spec#Declarations_and_scope)

</TabItem>
<TabItem value="python" label="Python">

```python
# Variable Shadowing
count = 10
def inner():
    count = 42  # Shadows the outer variable
    print(count)  # 42
inner()
print(count)  # 10
```

**Special features:**
- Local variables can shadow global variables
- Within functions, variables from outer scopes can be shadowed

**Further reading:**
- [Python Documentation - Scopes](https://docs.python.org/3/tutorial/classes.html#scopes-and-namespaces)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Variable Shadowing
val count = 10
run {
  val count = 42  // Shadows the outer variable
  println(count)  // 42
}
println(count)  // 10
```

**Special features:**
- Local variables can shadow variables in outer scopes
- Parameters can be shadowed by local variables

**Further reading:**
- [Kotlin Documentation - Scope](https://kotlinlang.org/docs/scope-functions.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Variable Shadowing
val count = 10
{
  val count = 42  // Shadows the outer variable
  println(count)  // 42
}
println(count)  // 10
```

**Special features:**
- Local variables can shadow variables in outer scopes
- Parameters can be shadowed by local variables

**Further reading:**
- [Scala Documentation - Scope](https://docs.scala-lang.org/tour/basics.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Variable Shadowing
let count = 10
{
  let count = 42  // Shadows the outer variable
  print(count)  // 42
}
print(count)  // 10
```

**Special features:**
- Local variables can shadow variables in outer scopes
- Parameters can be shadowed by local variables

**Further reading:**
- [Swift Documentation - Scope](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/thebasics/)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Variable Shadowing
int count = 10;
{
  int count = 42;  // Shadows the outer variable
  print(count);  // 42
}
print(count);  // 10
```

**Special features:**
- Local variables can shadow variables in outer scopes
- Parameters can be shadowed by local variables

**Further reading:**
- [Dart Language Tour - Scope](https://dart.dev/guides/language/language-tour#scope)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Variable Shadowing in let blocks
(def x 10)

(let [x 20]
  (println x)    ; 20 (outer x is shadowed)
  (let [x 30]
    (println x))) ; 30 (inner x shadows the middle one)

(println x)       ; 10 (original value unchanged)
```

**Special features:**
- Shadowing in `let` blocks is idiomatic
- Outer bindings remain unchanged
- Also possible within the same `let`: `(let [x 1 x (+ x 1)] x)` → 2

**Further reading:**
- [Clojure Documentation - let](https://clojure.org/reference/special_forms#let)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Variable Shadowing through nested let
(let ((x 10))
  (format t "Outer x: ~a~%" x)  ; 10
  (let ((x 20))
    (format t "Inner x: ~a~%" x))  ; 20
  (format t "Outer x again: ~a~%" x))  ; 10
```

**Special features:**
- Nested `let` forms shadow outer variables
- Outer variable remains unchanged after the inner `let` ends
- Also applies to function parameters and `flet`/`labels`

**Further reading:**
- [Common Lisp HyperSpec - let](http://www.lispworks.com/documentation/HyperSpec/Body/s_let_l.htm)

</TabItem>
<TabItem value="d" label="D">

```d
// Variable Shadowing in nested scopes
int x = 10;
{
    int x = 20;  // Shadows the outer variable
    writeln(x);  // 20
}
writeln(x);  // 10

// Shadowing in foreach
int i = 100;
foreach (i; 0 .. 5) {
    writeln(i);  // 0, 1, 2, 3, 4
}
writeln(i);  // 100
```

**Special features:**
- Shadowing only allowed in nested scopes
- Shadowing in the same scope is not allowed (compilation error)
- Function parameters can shadow module-level variables

**Further reading:**
- [D Language Specification - Declarations](https://dlang.org/spec/declaration.html)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Variable Shadowing in let expressions
example : Int
example =
    let
        x = 10
    in
    let
        x = 20  -- Shadowing: new x shadows the outer x
    in
    x  -- 20
```

**Special features:**
- Shadowing is allowed in `let` expressions
- The outer binding remains unchanged
- No shadowing at top-level within a module

**Further reading:**
- [Elm Documentation - Let Expressions](https://guide.elm-lang.org/core_language.html)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// Variable Shadowing
let x = 10
let x = x + 5    // x is now 15 (Shadowing)
let x = "hello"  // x is now a String (Shadowing with different type)
```

**Special features:**
- Variable shadowing is allowed and common
- Enables rebinding with a different type
- No mutability - a new binding is created

**Further reading:**
- [Gleam Documentation - Variables](https://tour.gleam.run/basics/variables/)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
x = 10

function demo()
    x = 20  # Local variable, shadows the global one
    println(x)  # 20
    
    let x = 30  # New scope with let
        println(x)  # 30
    end
    
    println(x)  # 20
end

demo()
println(x)  # 10 (global variable unchanged)
```

**Special features:**
- Local variables in functions shadow global variables
- `let` blocks create a new scope for shadowing
- Loop variables shadow outer variables

**Further reading:**
- [Julia Documentation - Scope of Variables](https://docs.julialang.org/en/v1/manual/variables-and-scoping/)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Variable Shadowing
fun example(): console ()
  val x = 10
  val x = 42  // Shadows the previous binding
  println(x.show)  // 42

  val y = 100
  fun inner()
    val y = 200  // Shadows y from outer scope
    println(y.show)  // 200
  inner()
  println(y.show)  // 100
```

**Special features:**
- Koka allows variable shadowing with `val`
- Inner bindings can shadow outer bindings with the same name
- A new binding is created, the old one remains unchanged

**Further reading:**
- [Koka Language Guide - Basics](https://koka-lang.github.io/koka/doc/book.html#sec-basics)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Variable Shadowing
def example : IO Unit := do
  let x := 10
  let x := 42  -- Shadows the previous binding
  IO.println s!"{x}"  -- 42

-- In nested let expressions
def nested : Nat :=
  let x := 10
  let result :=
    let x := 20  -- Shadows x from outer scope
    x + 1
  result + x  -- 21 + 10 = 31
```

**Special features:**
- Lean 4 allows variable shadowing with `let`
- Inner bindings can shadow outer bindings with the same name
- A new binding is created, the old one remains unchanged

**Further reading:**
- [Lean 4 Documentation - Variables](https://lean-lang.org/lean4/doc/lean-by-example/variables.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Variable Shadowing with local
local x = 10

do
    local x = 20    -- Shadows the outer variable
    print(x)        -- 20
end

print(x)            -- 10 (Original value)

-- Shadowing in functions
local function example()
    local x = 30    -- Shadows the outer variable
    print(x)        -- 30
end

example()
print(x)            -- 10 (Original value preserved)
```

**Special features:**
- `local` variables can shadow outer `local` variables in nested blocks
- Inner declaration shadows the outer one without changing it
- Applies to all block contexts: `do...end`, `if...then...end`, `for...do...end`, functions

**Further reading:**
- [Lua Reference Manual - Local Declarations](https://www.lua.org/manual/5.4/manual.html#3.3.7)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Variable Shadowing
var x = 10
echo x  # 10

block:
  var x = 20  # Shadowed
  echo x  # 20

echo x  # 10 (outer variable unchanged)

# Shadowing in loops
for i in 0..2:
  let x = i * 10
  echo x  # 0, 10, 20
```

**Special features:**
- Variables can be redeclared in inner scopes
- Outer variable is shadowed, not overwritten
- Compiler warns by default on shadowing

**Further reading:**
- [Nim Documentation - Scoping Rules](https://nim-lang.org/docs/manual.html#scoping-rules)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
int value = 10;
{
    int value = 20; // Shadowed: shadows outer variable
    NSLog(@"%d", value); // 20
}
NSLog(@"%d", value); // 10
```

**Special features:**
- C-style variable shadowing in nested blocks
- Compiler warning possible on shadowing (`-Wshadow`)
- Outer variable is not changed

**Further reading:**
- [Apple Documentation - Programming with Objective-C](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
x = 10;

function result = inner()
    x = 20;  % Local variable, shadows the outer one
    result = x;
end

result = inner();  % 20
% x in outer scope is still 10
```

**Special features:**
- Local variables in functions shadow outer variables
- Each function has its own scope

**Further reading:**
- [GNU Octave Documentation - Variables](https://octave.org/doc/v8.1.0/Variables.html)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Variable Shadowing with my
my $x = 10;
{
    my $x = 20;  # Shadowed: new $x in inner block
    print "$x\n";  # 20
}
print "$x\n";  # 10
```

**Special features:**
- `my` in inner blocks creates new lexical variable
- Outer variable remains unchanged
- Also works in loops and functions

**Further reading:**
- [Perl Documentation - my](https://perldoc.perl.org/functions/my)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Variable Shadowing
x = 10
x = x + 5
-- x is now 15 (new binding, no reassignment)
```

**Special features:**
- Shadowing creates a new binding with the same name
- The old binding is no longer accessible
- Not a reassignment, but a new binding

**Further reading:**
- [Roc Documentation](https://www.roc-lang.org/tutorial)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
x = 10;
Module[{x = 20},
    Print[x]  (* 20 - local variable shadows global *)
];
Print[x]      (* 10 - global variable unchanged *)
```

**Special features:**
- `Module[]` creates local variables that shadow global ones
- `Block[]` also uses local bindings

**Further reading:**
- [Wolfram Language Documentation - Module](https://reference.wolfram.com/language/ref/Module.html)

</TabItem>
</Tabs>


## 4.1.6. Variable Variables

Using the value of a variable as the name of another variable.

### Languages {#sprachen}

<Tabs availableTabs={['php', 'perl', 'python', 'ruby']}>
<TabItem value="php" label="PHP">

```php
// Variable Variables
$name = "count";
$$name = 42;  // Creates $count = 42
echo $count;  // 42

// With curly braces
${$name} = 42;
${"prefix_" . $name} = 42;  // $prefix_count = 42
```

**Special features:**
- `$$` for variable variables
- Curly braces for more complex expressions

**Further reading:**
- [PHP Documentation - Variable Variables](https://www.php.net/manual/en/language.variables.variable.php)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Variable Variables
my $name = "count";
${$name} = 42;  # Creates $count = 42
print $count;  # 42

# With symbol table
my $var_name = "count";
*{$var_name} = \42;  # Creates $count = 42
```

**Special features:**
- `${$name}` for variable variables
- Symbol table for extended functionality

**Further reading:**
- [Perl Documentation - Symbol Tables](https://perldoc.perl.org/perldata#Typeglobs-and-Filehandles)

</TabItem>
<TabItem value="python" label="Python">

```python
# Variable Variables (with globals() or locals())
name = "count"
globals()[name] = 42  # Creates count = 42
print(count)  # 42

# With locals() in functions
def example():
    name = "count"
    locals()[name] = 42  # Only works in certain contexts
```

**Special features:**
- `globals()` and `locals()` for variable variables
- Not recommended as it makes code hard to read

**Further reading:**
- [Python Documentation - globals()](https://docs.python.org/3/library/functions.html#globals)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Variable Variables (with instance_variable_set or eval)
name = "count"
instance_variable_set("@#{name}", 42)  # @count = 42

# With eval (not recommended)
eval("#{name} = 42")
```

**Special features:**
- `instance_variable_set` for instance variables
- `eval` possible, but not recommended

**Further reading:**
- [Ruby Documentation - instance_variable_set](https://ruby-doc.org/core-3.1.2/Object.html#method-i-instance_variable_set)

</TabItem>
</Tabs>


## 4.1.7. Hoisting

Variable and function declarations are moved to the beginning of their scope before the code is executed.

### Languages {#sprachen}

<Tabs availableTabs={['javascript', 'typescript']}>
<TabItem value="javascript" label="JavaScript">

```javascript
// Hoisting with var
console.log(count);  // undefined (not ReferenceError)
var count = 42;

// Function hoisting
console.log(hello());  // "Hallo"
function hello() {
  return "Hallo";
}

// let and const are not hoisted (Temporal Dead Zone)
// console.log(name);  // ReferenceError
let name = "Welt";
```

**Special features:**
- `var` is hoisted, but initialized with `undefined`
- Function declarations are fully hoisted
- `let` and `const` are not hoisted (Temporal Dead Zone)

**Further reading:**
- [MDN Web Docs - Hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Hoisting with var
console.log(count);  // undefined (not ReferenceError)
var count = 42;

// Function hoisting
console.log(hello());  // "Hallo"
function hello(): string {
  return "Hallo";
}

// let and const are not hoisted (Temporal Dead Zone)
// console.log(name);  // ReferenceError
let name = "Welt";
```

**Special features:**
- `var` is hoisted, but initialized with `undefined`
- Function declarations are fully hoisted
- `let` and `const` are not hoisted (Temporal Dead Zone)

**Further reading:**
- [TypeScript Documentation - Variable Declarations](https://www.typescriptlang.org/docs/handbook/variable-declarations.html)

</TabItem>
</Tabs>


## 4.1.8. Sigils

Characters that indicate the type of a variable (e.g., `$`, `@`, `%`).

### Languages {#sprachen}

<Tabs availableTabs={['elixir', 'perl', 'php', 'ruby']}>
<TabItem value="perl" label="Perl">

```perl
# Sigils for different types
my $scalar = 42;        # $ for scalars
my @array = (1, 2, 3);  # @ for arrays
my %hash = (a => 1);    # % for hashes

# Accessing array elements
$array[0] = 10;  # $ for individual elements

# Accessing hash elements
$hash{a} = 1;  # $ for individual values
```

**Special features:**
- `$` for scalars and individual elements
- `@` for arrays
- `%` for hashes
- Sigils indicate the type, not the variable

**Further reading:**
- [Perl Documentation - Sigils](https://perldoc.perl.org/perlintro#Variable-types)

</TabItem>
<TabItem value="php" label="PHP">

```php
// Sigils for variables
$scalar = 42;           // $ for all variables
$array = [1, 2, 3];     // $ for arrays
$hash = ['a' => 1];     // $ for associative arrays

// Accessing array elements
$array[0] = 10;

// Accessing hash elements
$hash['a'] = 1;
```

**Special features:**
- `$` for all variables
- Type is determined by the value, not by the sigil

**Further reading:**
- [PHP Documentation - Variables](https://www.php.net/manual/en/language.variables.php)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Sigils for different variable types
scalar = 42           # No sigil for local variables
@instance = 42        # @ for instance variables
@@class = 42          # @@ for class variables
$global = 42          # $ for global variables
CONSTANT = 42         # Uppercase for constants
```

**Special features:**
- No sigil for local variables
- `@` for instance variables
- `@@` for class variables
- `$` for global variables

**Further reading:**
- [Ruby Documentation - Variables](https://ruby-doc.org/core-3.1.2/doc/syntax/assignment_rdoc.html)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Built-in sigils
regex = ~r/hello\s+world/i       # Regular Expression
string = ~s(hello "world")       # String with escape
words = ~w(foo bar baz)          # Word List: ["foo", "bar", "baz"]
charlist = ~c(hello)             # Charlist

# Heredoc variants (uppercase = without interpolation)
raw = ~S(hello #{name})          # No interpolation: "hello \#{name}"
words_atoms = ~w(foo bar baz)a   # Atom List: [:foo, :bar, :baz]
```

**Special features:**
- Lowercase sigils support string interpolation and escape sequences
- Uppercase sigils are "raw" (no interpolation/escaping)
- `~w` supports modifiers: `a` for atoms, `c` for charlists, `s` for strings (default)
- Custom sigils can be created via `sigil_x` functions

**Further reading:**
- [Elixir Documentation - Sigils](https://elixir-lang.org/getting-started/sigils.html)

</TabItem>
</Tabs>

## 4.1.9. Destructuring Declarations

Destructuring declarations allow extracting values from objects and arrays in separate declarations.

### Languages {#sprachen}

<Tabs availableTabs={['clojure', 'csharp', 'dart', 'elixir', 'elm', 'erlang', 'fsharp', 'gleam', 'haskell', 'javascript', 'koka', 'kotlin', 'lean4', 'mercury', 'ocaml', 'prolog', 'purescript', 'python', 'roc', 'rust', 'scala', 'swift', 'typescript', 'wolfram-language']}>
<TabItem value="csharp" label="C#">

```csharp
// Destructuring Declarations (seit C# 7.0)
var point = (x: 5, y: 10);
var (x, y) = point;

// Array-Destructuring (seit C# 12)
int[] arr = {1, 2, 3};
var (first, second, third) = arr;
```

**Special features:**
- Tuple destructuring since C# 7.0
- Array destructuring since C# 12
- Variables are declared directly

**Further reading:**
- [C# Tuple Types](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/value-tuples)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Destructuring Declarations
point = {5, 10}
{x, y} = point

# List-Destructuring
list = [1, 2, 3]
[first, second, third] = list
```

**Special features:**
- Destructuring is a fundamental language feature
- Tuple and list destructuring supported
- Pattern matching in declarations

**Further reading:**
- [Elixir Pattern Matching Guide](https://elixir-lang.org/getting-started/pattern-matching.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% Destructuring Declarations
Point = {5, 10},
{X, Y} = Point.

% List-Destructuring
List = [1, 2, 3],
[First, Second, Third] = List.
```

**Special features:**
- Destructuring is a fundamental language feature
- Tuple and list destructuring supported
- Pattern matching in declarations

**Further reading:**
- [Erlang Pattern Matching](https://www.erlang.org/doc/reference_manual/patterns.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Destructuring Declarations
let point = (5, 10)
let (x, y) = point

// List-Destructuring
let list = [1; 2; 3]
let [first; second; third] = list
```

**Special features:**
- Destructuring is a fundamental language feature
- Tuple and list destructuring supported
- Pattern matching in declarations

**Further reading:**
- [F# Pattern Matching](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/pattern-matching)

</TabItem>
<TabItem value="gleam" label="Gleam">

```erlang
// Destructuring Declarations
let point = #(5, 10)
let #(x, y) = point

// List-Destructuring
let list = [1, 2, 3]
let [first, second, third] = list
```

**Special features:**
- Destructuring is a fundamental language feature
- Tuple and list destructuring supported
- Pattern matching in declarations

**Further reading:**
- [Gleam Pattern Matching](https://gleam.run/documentation/tour/pattern-matching/)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Destructuring Declarations
point = (5, 10)
(x, y) = point

-- List-Destructuring
list = [1, 2, 3]
(first:second:third:_) = list
```

**Special features:**
- Destructuring is a fundamental language feature
- Tuple and list destructuring supported
- Pattern matching in declarations

**Further reading:**
- [Haskell Pattern Matching](https://www.haskell.org/tutorial/patterns.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Destructuring Declarations (seit ES6)
const point = {x: 5, y: 10};
const {x, y} = point;

// Array-Destructuring
const arr = [1, 2, 3];
const [first, second, third] = arr;
```

**Special features:**
- Destructuring assignment since ES6
- Object and array destructuring supported
- Variables are declared directly

**Further reading:**
- [MDN: Destructuring Assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Destructuring Declarations über Pattern Matching
type Point
  Point(x: int, y: int)

val Point(x, y) = Point(5, 10)
// x is 5, y is 10

// Tuple-Destructuring
val (a, b, c) = (1, "hello", True)

// In match-Ausdrücken
type Shape
  Circle(radius: float64)
  Rectangle(width: float64, height: float64)

fun area(s: Shape): float64
  match s
    Circle(r) -> 3.14159 * r * r
    Rectangle(w, h) -> w * h
```

**Special features:**
- Destructuring via pattern matching in `val` bindings
- Algebraic data types can be destructured directly
- Tuple destructuring supported
- Complete pattern matching in `match` expressions

**Further reading:**
- [Koka Language Guide - Pattern Matching](https://koka-lang.github.io/koka/doc/book.html#sec-pattern-matching)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Destructuring Declarations über Pattern Matching
structure Point where
  x : Nat
  y : Nat

def example : Nat :=
  let p := Point.mk 5 10
  let ⟨x, y⟩ := p  -- Destructuring with anonymous constructor
  x + y  -- 15

-- Tuple-Destructuring
def tupleExample : Nat :=
  let (a, b, c) := (1, 2, 3)
  a + b + c  -- 6

-- In match-Ausdrücken
inductive Shape where
  | circle (radius : Float)
  | rectangle (width : Float) (height : Float)

def area : Shape → Float
  | .circle r => 3.14159 * r * r
  | .rectangle w h => w * h
```

**Special features:**
- Destructuring via pattern matching in `let` bindings
- `⟨...⟩` (anonymous constructor) for structures
- Tuple destructuring supported
- Complete pattern matching in `match` expressions and function definitions

**Further reading:**
- [Lean 4 Documentation - Pattern Matching](https://lean-lang.org/lean4/doc/lean-by-example/pattern-matching.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```mercury
% Destructuring Declarations über Unifikation/Pattern Matching
% Funktor-Destructuring
:- type point ---> point(int, int).

:- pred example(io::di, io::uo) is det.
example(!IO) :-
    Point = point(5, 10),
    point(X, Y) = Point,
    % X = 5, Y = 10

    % List-Destructuring
    List = [1, 2, 3],
    [First, Second, Third] = List,

    % Head-Tail-Destructuring
    [Head | Tail] = [1, 2, 3],
    % Head = 1, Tail = [2, 3]

    io.format("%d %d\n", [i(X), i(Y)], !IO).

% In Prädikatköpfen
:- pred process_pair(pair(K, V)::in, io::di, io::uo) is det.
process_pair(Key - Value, !IO) :-
    io.format("%s: %d\n", [s(Key), i(Value)], !IO).
```

**Special features:**
- Destructuring is a fundamental language feature (via unification)
- Functors and lists can be destructured directly in predicate heads
- `[Head | Tail]` notation for list decomposition
- Pattern matching is the primary method for data extraction
- Strong type system checks destructuring patterns at compile time

**Further reading:**
- [Mercury Language Reference - Data Types](https://www.mercurylang.org/information/doc-release/mercury_ref/Types.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Destructuring Declarations
data class Point(val x: Int, val y: Int)
val point = Point(5, 10)
val (x, y) = point

// Array-Destructuring
val arr = arrayOf(1, 2, 3)
val (first, second, third) = arr
```

**Special features:**
- Destructuring declarations for data classes
- Array destructuring supported
- Variables are declared directly

**Further reading:**
- [Kotlin Destructuring Declarations](https://kotlinlang.org/docs/destructuring-declarations.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Destructuring Declarations *)
let point = (5, 10) in
let (x, y) = point in

(* List-Destructuring *)
let list = [1; 2; 3] in
let [first; second; third] = list in
```

**Special features:**
- Destructuring is a fundamental language feature
- Tuple and list destructuring supported
- Pattern matching in declarations

**Further reading:**
- [OCaml Pattern Matching](https://ocaml.org/manual/patterns.html)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Destructuring Declarations über Unifikation/Pattern Matching
% Tuple-Destructuring (über Funktor-Argumente)
Point = point(5, 10),
point(X, Y) = Point,
% X = 5, Y = 10

% List-Destructuring
List = [1, 2, 3],
[First, Second, Third] = List,
% First = 1, Second = 2, Third = 3

% Head-Tail-Destructuring
[Head|Tail] = [1, 2, 3],
% Head = 1, Tail = [2, 3]

% In Prädikatköpfen
process_pair(pair(Key, Value)) :-
    format("~w: ~w~n", [Key, Value]).
```

**Special features:**
- Destructuring is a fundamental language feature (via unification)
- Functors and lists can be destructured directly in predicate heads
- `[Head|Tail]` notation for list decomposition
- Pattern matching is the primary method for data extraction

**Further reading:**
- [SWI-Prolog Manual - Pattern Matching](https://www.swi-prolog.org/pldoc/man?section=syntax)

</TabItem>
<TabItem value="python" label="Python">

```python
# Destructuring Declarations
point = (5, 10)
x, y = point

# List-Destructuring
arr = [1, 2, 3]
first, second, third = arr
```

**Special features:**
- Tuple unpacking is a fundamental language feature
- List unpacking supported
- Variables are declared directly

**Further reading:**
- [Python: Unpacking](https://docs.python.org/3/tutorial/datastructures.html#tuples-and-sequences)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Destructuring Declarations
let point = (5, 10);
let (x, y) = point;

// Array-Destructuring
let arr = [1, 2, 3];
let [first, second, third] = arr;
```

**Special features:**
- Destructuring is a fundamental language feature
- Tuple and array destructuring supported
- Pattern matching in declarations

**Further reading:**
- [Rust Pattern Matching](https://doc.rust-lang.org/book/ch18-03-pattern-syntax.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Destructuring Declarations
val point = (5, 10)
val (x, y) = point

// List-Destructuring
val list = List(1, 2, 3)
val first :: second :: third :: _ = list
```

**Special features:**
- Destructuring is a fundamental language feature
- Tuple and list destructuring supported
- Pattern matching in declarations

**Further reading:**
- [Scala Pattern Matching](https://docs.scala-lang.org/tour/pattern-matching.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Destructuring Declarations
let point = (x: 5, y: 10)
let (x, y) = point

// Array-Destructuring
let arr = [1, 2, 3]
let (first, second, third) = (arr[0], arr[1], arr[2])
```

**Special features:**
- Tuple destructuring is a fundamental language feature
- Array destructuring via tuple unpacking
- Variables are declared directly

**Further reading:**
- [Swift: Tuples](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/thebasics/#Tuples)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Destructuring Declarations (seit ES6)
const point = {x: 5, y: 10};
const {x, y} = point;

// Array-Destructuring
const arr = [1, 2, 3];
const [first, second, third] = arr;
```

**Special features:**
- Destructuring assignment since ES6
- Object and array destructuring supported
- Variables are declared directly

**Further reading:**
- [TypeScript: Destructuring](https://www.typescriptlang.org/docs/handbook/variable-declarations.html#destructuring)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Destructuring in function parameters
(defn greet [{:keys [name age]}]
  (println (str name " is " age " years old")))

(greet {:name "Alice" :age 30})

;; Destructuring in for/doseq
(doseq [[key value] {:a 1 :b 2 :c 3}]
  (println key "->" value))

;; Nested destructuring in functions
(defn process-point [[x y]]
  (Math/sqrt (+ (* x x) (* y y))))

(process-point [3 4])  ; 5.0
```

**Special features:**
- Destructuring directly in `defn` parameters
- Also usable in `for`, `doseq`, `loop`
- Combinable with variadic arguments

**Further reading:**
- [Clojure Documentation - Destructuring](https://clojure.org/guides/destructuring)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Destructuring Declarations (since Dart 3.0)
// In var declarations
var (a, b) = (1, 'hello');
var [first, second, ...rest] = [1, 2, 3, 4, 5];

// In for loops
var map = {'a': 1, 'b': 2};
for (var MapEntry(:key, :value) in map.entries) {
  print('$key: $value');
}

// In if-case
if (json case {'name': String name, 'age': int age}) {
  print('$name is $age years old');
}
```

**Special features:**
- Destructuring works in `var` declarations
- Can be used in `for-in` loops
- `if-case` combines destructuring with conditions
- Supports all pattern types (List, Map, Record, Object)

**Further reading:**
- [Dart Documentation - Patterns](https://dart.dev/language/patterns)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Destructuring in let bindings
example : String
example =
    let
        (x, y) = (10, 20)
        { name, age } = { name = "Alice", age = 30 }
    in
    name ++ " is " ++ String.fromInt age ++ " years old"
```

**Special features:**
- Tuple destructuring in `let` bindings
- Record destructuring in `let` bindings
- Function parameters also support destructuring

**Further reading:**
- [Elm Documentation - Records](https://guide.elm-lang.org/types/records.html)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Destructuring Declarations
example = let
    Tuple x y = Tuple 1 2
    { name, age } = { name: "Alice", age: 30 }
  in name <> " is " <> show age
```

**Special features:**
- Destructuring in `let` and `where` bindings
- Supports record and data type patterns

**Further reading:**
- [PureScript Documentation - Pattern Matching](https://github.com/purescript/documentation/blob/master/language/Pattern-Matching.md)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Destructuring Declarations
{ x, y } = { x: 10, y: 20 }
(first, second) = (1, "hello")
```

**Special features:**
- Destructuring directly in bindings
- Works with records and tuples

**Further reading:**
- [Roc Documentation - Pattern Matching](https://www.roc-lang.org/tutorial#pattern-matching)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Destructuring assignment *)
{x, y, z} = {10, 20, 30};
Print[x]  (* 10 *)
Print[y]  (* 20 *)

(* With rest pattern *)
{first, rest___} = {1, 2, 3, 4};
Print[first]   (* 1 *)
Print[{rest}]  (* {2, 3, 4} *)
```

**Special features:**
- Direct destructuring in assignment
- `___` (BlankNullSequence) for rest elements
- Works with all expression types

**Further reading:**
- [Wolfram Language Documentation - Set](https://reference.wolfram.com/language/ref/Set.html)

</TabItem>
</Tabs>


