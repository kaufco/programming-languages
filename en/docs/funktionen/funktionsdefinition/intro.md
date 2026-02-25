---
slug: /funktionen/funktionsdefinition
title: 7.1. Function Definition
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 7.1. Function Definition

Definition and declaration of functions.

## 7.1.1. Named Functions

Functions with a name that can be defined and then called at various places in the code. They allow structuring code into reusable units.

### Languages {#sprachen}

<Tabs availableTabs={['ada', 'c', 'carbon', 'clojure', 'common-lisp', 'crystal', 'csharp', 'cpp', 'd', 'dart', 'eiffel', 'elixir', 'elm', 'erlang', 'fsharp', 'fortran', 'gleam', 'go', 'groovy', 'haskell', 'haxe', 'idris', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'lua', 'matlab', 'mercury', 'mojo', 'nim', 'objective-c', 'object-pascal', 'ocaml', 'octave', 'odin', 'perl', 'php', 'prolog', 'purescript', 'python', 'r', 'racket', 'roc', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'vbnet', 'v', 'wolfram-language', 'zig']}>
<TabItem value="ada" label="Ada">

```ada
function To_Upper(Item : String) return String is
begin
    return Ada.Characters.Handling.To_Upper(Item);
end To_Upper;

Result : String := To_Upper("Apfel");
```

**Special features:**
- Functions must have a return type
- Supports both functions and procedures

**Further reading:**
- [Ada Documentation - Subprograms](https://learn.adacore.com/courses/intro-to-ada/chapters/subprograms.html)

</TabItem>
<TabItem value="c" label="C">

```c
char* to_upper(char* item) {
    for (int i = 0; item[i]; i++) {
        item[i] = toupper(item[i]);
    }
    return item;
}

char result[] = "Apfel";
to_upper(result);
```

**Special features:**
- Functions must be declared before use
- Supports function pointers

**Further reading:**
- [C Documentation - Functions](https://en.cppreference.com/w/c/language/functions)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
fn ToUpper(item: String) -> String {
    return item.ToUpper();
}

var result: String = ToUpper("Apfel");
```

**Special features:**
- Experimental language, syntax may still change
- C++-like syntax with modern features

**Further reading:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
(defn to-upper [item]
  (.toUpperCase item))

(def result (to-upper "Apfel"))
```

**Special features:**
- Functions are first-class objects
- Supports multimethods and polymorphism

**Further reading:**
- [Clojure Documentation - Functions](https://clojure.org/reference/functions)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
(defun to-upper (item)
  (string-upcase item))

(defvar result (to-upper "Apfel"))
```

**Special features:**
- Functions are first-class objects
- Supports multiple dispatch

**Further reading:**
- [Common Lisp HyperSpec - Functions](http://www.lispworks.com/documentation/HyperSpec/Body/f_fun.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
def to_upper(item : String) : String
  item.upcase
end

result = to_upper("Apfel")
```

**Special features:**
- Ruby-like syntax
- Supports method overloading

**Further reading:**
- [Crystal Documentation - Methods](https://crystal-lang.org/reference/1.11/syntax_and_semantics/methods.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
string ToUpper(string item)
{
    return item.ToUpper();
}

string result = ToUpper("Apfel");
```

**Special features:**
- Supports method overloading
- Can be defined as static or instance methods

**Further reading:**
- [Microsoft C# Documentation - Methods](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/methods)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
std::string toUpper(const std::string& item) {
    std::string result = item;
    std::transform(result.begin(), result.end(), result.begin(), ::toupper);
    return result;
}

std::string result = toUpper("Apfel");
```

**Special features:**
- Supports function overloading
- Can be defined inline

**Further reading:**
- [cppreference.com - Functions](https://en.cppreference.com/w/cpp/language/functions)

</TabItem>
<TabItem value="d" label="D">

```d
string toUpper(string item) {
    import std.string : toUpper;
    return item.toUpper();
}

string result = toUpper("Apfel");
```

**Special features:**
- Supports function overloading
- Can be defined as template functions

**Further reading:**
- [D Language Specification - Functions](https://dlang.org/spec/function.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
String toUpper(String item) {
    return item.toUpperCase();
}

String result = toUpper("Apfel");
```

**Special features:**
- Supports named parameters
- Can be defined as top-level functions or methods

**Further reading:**
- [Dart Documentation - Functions](https://dart.dev/guides/language/language-tour#functions)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
to_upper (item: STRING): STRING
    do
        Result := item.as_upper
    end

result: STRING
    do
        Result := to_upper("Apfel")
    end
```

**Special features:**
- Supports Design by Contract (preconditions, postconditions)
- Functions must have a return type

**Further reading:**
- [Eiffel Documentation - Routines](https://www.eiffel.org/doc/eiffel/Routines)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
def to_upper(item) do
    String.upcase(item)
end

result = to_upper("Apfel")
```

**Special features:**
- Functions are first-class objects
- Supports pattern matching in function heads

**Further reading:**
- [Elixir Documentation - Functions](https://elixir-lang.org/getting-started/basic-types.html#functions)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
toUpper : String -> String
toUpper item =
    String.toUpper item

result = toUpper "Apfel"
```

**Special features:**
- Functional language with explicit type annotations
- Supports currying

**Further reading:**
- [Elm Documentation - Functions](https://guide.elm-lang.org/core_language.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
to_upper(Item) ->
    string:uppercase(Item).

Result = to_upper("Apfel").
```

**Special features:**
- Functions are defined in modules
- Supports pattern matching in function heads

**Further reading:**
- [Erlang Documentation - Functions](https://www.erlang.org/doc/reference_manual/functions.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
let toUpper (item: string) : string =
    item.ToUpper()

let result = toUpper "Apfel"
```

**Special features:**
- Functional language with first-class functions
- Supports currying and partial application

**Further reading:**
- [F# Documentation - Functions](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/functions/)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
function to_upper(item) result(result_str)
    character(len=*), intent(in) :: item
    character(len=len(item)) :: result_str
    integer :: i
    
    do i = 1, len(item)
        result_str(i:i) = achar(iachar(item(i:i)) - 32)
    end do
end function to_upper

character(len=5) :: result
result = to_upper("Apfel")
```

**Special features:**
- Functions must have a return type
- Supports both functions and subroutines

**Further reading:**
- [Fortran Documentation - Functions](https://gcc.gnu.org/onlinedocs/gfortran/Function.html)

</TabItem>
<TabItem value="gleam" label="Gleam">

```erlang
pub fn to_upper(item: String) -> String {
    string.uppercase(item)
}

let result = to_upper("Apfel")
```

**Special features:**
- Functional language with explicit type annotations
- Functions are first-class objects

**Further reading:**
- [Gleam Documentation - Functions](https://gleam.run/documentation/tour/functions/)

</TabItem>
<TabItem value="go" label="Go">

```go
func toUpper(item string) string {
    return strings.ToUpper(item)
}

result := toUpper("Apfel")
```

**Special features:**
- Supports multiple return values
- Functions are first-class objects

**Further reading:**
- [Go Documentation - Functions](https://go.dev/ref/spec#Function_declarations)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
def toUpper(item) {
    item.toUpperCase()
}

def result = toUpper("Apfel")
```

**Special features:**
- Supports both static and dynamic typing
- Can be defined as methods or closures

**Further reading:**
- [Groovy Documentation - Methods](https://groovy-lang.org/structure.html#_methods)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
toUpper :: String -> String
toUpper item = map toUpper item

result = toUpper "Apfel"
```

**Special features:**
- Functional language with explicit type annotations
- Supports currying

**Further reading:**
- [Haskell Documentation - Functions](https://www.haskell.org/tutorial/functions.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
function toUpper(item:String):String {
    return item.toUpperCase();
}

var result = toUpper("Apfel");
```

**Special features:**
- Cross-platform compilation
- Functions can be defined at module level or as class methods

**Further reading:**
- [Haxe Documentation - Functions](https://haxe.org/manual/types-function.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Benötigt: import Data.String
toUpperCase : String -> String
toUpperCase item = toUpper item

result : String
result = toUpperCase "Apfel"
```

**Special features:**
- Functional language with dependent types
- Supports currying

**Further reading:**
- [Idris 2 Documentation - Functions](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html)

</TabItem>
<TabItem value="java" label="Java">

```java
static String toUpper(String item) {
    return item.toUpperCase();
}

String result = toUpper("Apfel");
```

**Special features:**
- Functions must be part of a class
- Supports method overloading

**Further reading:**
- [Oracle Java Documentation - Methods](https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
function toUpper(item) {
    return item.toUpperCase();
}

const result = toUpper("Apfel");
```

**Special features:**
- Functions are first-class objects
- Supports function hoisting

**Further reading:**
- [MDN Web Docs - Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
function to_upper(item)
    uppercase(item)
end

result = to_upper("Apfel")
```

**Special features:**
- Supports multiple dispatch
- Functions are first-class objects

**Further reading:**
- [Julia Documentation - Functions](https://docs.julialang.org/en/v1/manual/functions/)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Named Functions
fun to-upper(item: string): string
  item.to-upper

val result = to-upper("Apfel")

// Function with multiple parameters
fun add(x: int, y: int): int
  x + y

// Function with effect annotation
fun greet(name: string): console ()
  println("Hallo, " ++ name)
```

**Special features:**
- Functions are defined with `fun`
- Return type comes after the `:`
- Effects are annotated in the function type (e.g., `console`)
- The last expression is the implicit return value
- Hyphens in function names allowed (`to-upper`)

**Further reading:**
- [Koka Language Guide - Functions](https://koka-lang.github.io/koka/doc/book.html#sec-functions)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
fun toUpper(item: String): String {
    return item.uppercase()
}

val result = toUpper("Apfel")
```

**Special features:**
- Supports extension functions
- Can be defined as top-level functions or methods

**Further reading:**
- [Kotlin Documentation - Functions](https://kotlinlang.org/docs/functions.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```haskell
def toUpper (item : String) : String :=
  item.map Char.toUpper

#eval toUpper "Apfel"  -- "APFEL"
```

**Special features:**
- Functions are defined with `def`
- Return type is annotated with `: Type`
- `:=` separates signature from implementation
- Functions are pure by default

**Further reading:**
- [Lean 4 Documentation - Defining Functions](https://lean-lang.org/lean4/doc/functions.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
function to_upper(item)
    return string.upper(item)
end

local result = to_upper("Apfel")
```

**Special features:**
- Functions are first-class objects
- Supports multiple return values

**Further reading:**
- [Lua Documentation - Functions](https://www.lua.org/manual/5.4/manual.html#3.4.11)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
function result = to_upper(item)
    result = upper(item);
end

result = to_upper("Apfel");
```

**Special features:**
- Functions must be defined in separate files (except local functions)
- Supports both functions and scripts

**Further reading:**
- [MATLAB Documentation - Functions](https://www.mathworks.com/help/matlab/ref/function.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
:- func to_upper(string) = string.
to_upper(Item) = string.to_upper(Item).
```

**Special features:**
- Function declaration with `:- func` followed by the definition
- Mercury distinguishes between functions (`func`) and predicates (`pred`)
- Strong static typing

**Further reading:**
- [Mercury Language Reference - Functions](https://mercurylang.org/information/doc-latest/mercury_ref/Functions.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
fn to_upper(item: String) -> String:
    return item.upper()

var result = to_upper("Apfel")
```

**Special features:**
- Python-like syntax with static typing
- Supports both `fn` and `def` functions

**Further reading:**
- [Mojo Documentation - Functions](https://docs.modular.com/mojo/manual/functions/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
proc toUpper(item: string): string =
    item.toUpper()

let result = toUpper("Apfel")
```

**Special features:**
- Supports both `proc` and `func` (pure functions)
- Can be defined as methods

**Further reading:**
- [Nim Documentation - Procedures](https://nim-lang.org/docs/manual.html#procedures)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
NSString* toUpper(NSString* item) {
    return [item uppercaseString];
}

NSString* result = toUpper(@"Apfel");
```

**Special features:**
- Supports both C functions and Objective-C methods
- Methods are defined in classes

**Further reading:**
- [Objective-C Documentation - Functions](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/DefiningClasses/DefiningClasses.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
function ToUpper(const item: string): string;
begin
    Result := UpperCase(item);
end;

var result: string;
result := ToUpper('Apfel');
```

**Special features:**
- Supports both functions and procedures
- Functions must have a return type

**Further reading:**
- [Object Pascal Documentation - Functions](https://docwiki.embarcadero.com/RADStudio/en/Procedures_and_Functions)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
let to_upper (item: string) : string =
    String.uppercase_ascii item

let result = to_upper "Apfel"
```

**Special features:**
- Functional language with first-class functions
- Supports currying

**Further reading:**
- [OCaml Documentation - Functions](https://ocaml.org/docs/first-hour#functions)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
function result = to_upper(item)
    result = toupper(item);
end

result = to_upper("Apfel");
```

**Special features:**
- MATLAB-like syntax
- Functions must be defined in separate files

**Further reading:**
- [Octave Documentation - Functions](https://octave.org/doc/v8.1.0/Functions-and-Scripts.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
to_upper :: proc(item: string) -> string {
    return strings.to_upper(item)
}

result := to_upper("Apfel")
```

**Special features:**
- Supports both procedures and functions
- Functions must have a return type

**Further reading:**
- [Odin Documentation - Procedures](https://odin-lang.org/docs/overview/#procedures)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
sub to_upper {
    my $item = shift;
    return uc($item);
}

my $result = to_upper("Apfel");
```

**Special features:**
- Supports both functions and subroutines
- Functions are first-class objects

**Further reading:**
- [Perl Documentation - Functions](https://perldoc.perl.org/perlsub)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
function toUpper($item) {
    return strtoupper($item);
}

$result = toUpper("Apfel");
```

**Special features:**
- Functions are first-class objects
- Supports both functions and methods

**Further reading:**
- [PHP Documentation - Functions](https://www.php.net/manual/en/functions.user-defined.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
to_upper(Item, Result) :-
    upcase_atom(Item, Result).

?- to_upper(apfel, Result).
%  Result = 'APFEL'
```

**Special features:**
- Prolog defines predicates (relations) instead of functions
- Predicates have no return value — results are bound through unification of arguments
- Predicates are defined with `:-` (rules) or as facts without body

**Further reading:**
- [SWI-Prolog Documentation - Defining Predicates](https://www.swi-prolog.org/pldoc/man?section=predicate)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Required: import Data.String as String
toUpper :: String -> String
toUpper item = String.toUpper item

result :: String
result = toUpper "Apfel"
```

**Special features:**
- Functional language with explicit type annotations
- Supports currying

**Further reading:**
- [PureScript Documentation - Functions](https://book.purescript.org/chapter3.html)

</TabItem>
<TabItem value="python" label="Python">

```python
def to_upper(item):
    return item.upper()

result = to_upper("Apfel")
```

**Special features:**
- Functions are first-class objects
- Supports both functions and methods

**Further reading:**
- [Python Documentation - Functions](https://docs.python.org/3/tutorial/controlflow.html#defining-functions)

</TabItem>
<TabItem value="r" label="R">

```r
to_upper <- function(item) {
    toupper(item)
}

result <- to_upper("Apfel")
```

**Special features:**
- Functions are first-class objects
- Supports both functions and methods

**Further reading:**
- [R Documentation - Functions](https://cran.r-project.org/doc/manuals/r-release/R-lang.html#Function-objects)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
(define (to-upper item)
    (string-upcase item))

(define result (to-upper "Apfel"))
```

**Special features:**
- Functional language with first-class functions
- Supports both functions and procedures

**Further reading:**
- [Racket Documentation - Functions](https://docs.racket-lang.org/guide/define.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
toUpper : Str -> Str
toUpper = \item -> Str.toUpper item

result : Str
result = toUpper "Apfel"
```

**Special features:**
- Functional language with explicit type annotations
- Functions are defined as bindings of lambda expressions

**Further reading:**
- [Roc Documentation - Functions](https://www.roc-lang.org/tutorial#defining-functions)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
def to_upper(item)
    item.upcase
end

result = to_upper("Apfel")
```

**Special features:**
- Functions are first-class objects
- Supports both functions and methods

**Further reading:**
- [Ruby Documentation - Methods](https://docs.ruby-lang.org/en/master/syntax/methods_rdoc.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
fn to_upper(item: &str) -> String {
    item.to_uppercase()
}

let result = to_upper("Apfel");
```

**Special features:**
- Supports both functions and methods
- Functions can be defined as closures

**Further reading:**
- [Rust Book - Functions](https://doc.rust-lang.org/book/ch03-03-functions.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
def toUpper(item: String): String = {
    item.toUpperCase
}

val result = toUpper("Apfel")
```

**Special features:**
- Functional and object-oriented language
- Supports both functions and methods

**Further reading:**
- [Scala Documentation - Functions](https://docs.scala-lang.org/tour/functions.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
(define (to-upper item)
    (string-upcase item))

(define result (to-upper "Apfel"))
```

**Special features:**
- Functional language with first-class functions
- Supports both functions and procedures

**Further reading:**
- [Scheme Documentation - Functions](https://www.scheme.com/tspl4/start.html#./start:h0)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
func toUpper(item: String) -> String {
    return item.uppercased()
}

let result = toUpper(item: "Apfel")
```

**Special features:**
- Supports both functions and methods
- Functions can be defined as closures

**Further reading:**
- [Swift Documentation - Functions](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/functions/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
function toUpper(item: string): string {
    return item.toUpperCase();
}

const result = toUpper("Apfel");
```

**Special features:**
- Supports full type annotations
- Functions are first-class objects

**Further reading:**
- [TypeScript Handbook - Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
Function ToUpper(item As String) As String
    Return item.ToUpper()
End Function

Dim result As String = ToUpper("Apfel")
```

**Special features:**
- Supports both functions and subroutines
- Functions must have a return type

**Further reading:**
- [Microsoft VB.NET Documentation - Functions](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/procedures/function-procedures)

</TabItem>
<TabItem value="v" label="V">

```v
fn to_upper(item string) string {
    return item.to_upper()
}

result := to_upper("Apfel")
```

**Special features:**
- Supports both functions and methods
- Functions must have a return type

**Further reading:**
- [V Documentation - Functions](https://github.com/vlang/v/blob/master/doc/docs.md#functions)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```wolfram
toUpper[item_] := ToUpperCase[item]

result = toUpper["Apfel"]
```

**Special features:**
- Supports pattern matching in function definitions
- Functions are first-class objects

**Further reading:**
- [Wolfram Language Documentation - Functions](https://reference.wolfram.com/language/guide/FunctionsAndPrograms.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
fn toUpper(item: []const u8) []const u8 {
    // Implementation would go here
    return item;
}

const result = toUpper("Apfel");
```

**Special features:**
- Supports both functions and methods
- Functions must have a return type

**Further reading:**
- [Zig Documentation - Functions](https://ziglang.org/documentation/0.11.0/#Functions)

</TabItem>
</Tabs>


## 7.1.2. Anonymous Functions / Lambdas

### Anonymous Functions


Functions without names that can be defined and used directly. They are often passed as arguments to other functions or stored in variables.


<Tabs availableTabs={['ada', 'carbon', 'clojure', 'common-lisp', 'crystal', 'csharp', 'cpp', 'd', 'dart', 'eiffel', 'elixir', 'elm', 'erlang', 'fsharp', 'gleam', 'go', 'groovy', 'haskell', 'haxe', 'idris', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'lua', 'matlab', 'mercury', 'mojo', 'nim', 'objective-c', 'object-pascal', 'ocaml', 'octave', 'odin', 'perl', 'php', 'purescript', 'python', 'r', 'racket', 'roc', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'vbnet', 'v', 'wolfram-language']} orangeTabs={['c', 'fortran', 'zig']}>
<TabItem value="ada" label="Ada">

```ada
type String_Func is access function(Item : String) return String;

function Apply_Func(Func : String_Func; Item : String) return String is
begin
    return Func(Item);
end Apply_Func;

Result : String := Apply_Func(
    new String_Func'(function(Item : String) return String is
        begin
            return Ada.Characters.Handling.To_Upper(Item);
        end),
    "Apfel"
);
```

**Special features:**
- Anonymous functions are implemented via access types
- Requires explicit type definitions

**Further reading:**
- [Ada Documentation - Access Types](https://learn.adacore.com/courses/intro-to-ada/chapters/access_types.html)

</TabItem>
<TabItem value="c" label="C">

```c
typedef char* (*StringFunc)(char*);

char* apply_func(StringFunc func, char* item) {
    return func(item);
}

char* to_upper_impl(char* item) {
    for (int i = 0; item[i]; i++) {
        item[i] = toupper(item[i]);
    }
    return item;
}

char result[] = "Apfel";
apply_func(to_upper_impl, result);
```

**Special features:**
- Anonymous functions are implemented via function pointers
- No direct support for closures

**Further reading:**
- [C Documentation - Function Pointers](https://en.cppreference.com/w/c/language/pointer#Function_pointers)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
fn ApplyFunc(func: fn(String) -> String, item: String) -> String {
    return func(item);
}

var result = ApplyFunc(fn(item: String) -> String {
    return item.ToUpper();
}, "Apfel");
```

**Special features:**
- Experimental language, syntax may still change
- Supports anonymous functions directly

**Further reading:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
(defn apply-func [func item]
  (func item))

(def result (apply-func 
  (fn [item] (.toUpperCase item))
  "Apfel"))
```

**Special features:**
- Supports both `fn` and the compact `#` syntax
- Functions are first-class objects

**Further reading:**
- [Clojure Documentation - Anonymous Functions](https://clojure.org/reference/reader#_dispatch)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
(defun apply-func (func item)
  (funcall func item))

(defvar result (apply-func 
  (lambda (item) (string-upcase item))
  "Apfel"))
```

**Special features:**
- Uses `lambda` for anonymous functions
- Functions are first-class objects

**Further reading:**
- [Common Lisp HyperSpec - Lambda](http://www.lispworks.com/documentation/HyperSpec/Body/m_lambda.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
def apply_func(func, item)
  func.call(item)
end

result = apply_func(->(item : String) { item.upcase }, "Apfel")
```

**Special features:**
- Supports anonymous functions via procs
- Ruby-like syntax

**Further reading:**
- [Crystal Documentation - Procs](https://crystal-lang.org/reference/1.11/syntax_and_semantics/literals/proc.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
string ApplyFunc(Func<string, string> func, string item)
{
    return func(item);
}

string result = ApplyFunc(item => item.ToUpper(), "Apfel");
```

**Special features:**
- Supports anonymous functions since C# 1.0
- Can be defined as delegates or lambda expressions

**Further reading:**
- [Microsoft C# Documentation - Anonymous Methods](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/delegate-operator)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
#include <functional>
#include <string>

std::string applyFunc(std::function<std::string(const std::string&)> func, 
                      const std::string& item) {
    return func(item);
}

std::string result = applyFunc([](const std::string& item) {
    std::string result = item;
    std::transform(result.begin(), result.end(), result.begin(), ::toupper);
    return result;
}, "Apfel");
```

**Special features:**
- Supports anonymous functions via lambda expressions (since C++11)
- Can also be implemented via function pointers

**Further reading:**
- [cppreference.com - Lambda expressions](https://en.cppreference.com/w/cpp/language/lambda)

</TabItem>
<TabItem value="d" label="D">

```d
string applyFunc(string function(string) func, string item) {
    return func(item);
}

string result = applyFunc((string item) {
    import std.string : toUpper;
    return item.toUpper();
}, "Apfel");
```

**Special features:**
- Supports anonymous functions since D 2.0
- Supports closures

**Further reading:**
- [D Language Specification - Function Literals](https://dlang.org/spec/expression.html#function_literals)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
String applyFunc(String Function(String) func, String item) {
    return func(item);
}

String result = applyFunc((String item) {
    return item.toUpperCase();
}, "Apfel");
```

**Special features:**
- Supports anonymous functions since Dart 1.0
- Full closure support

**Further reading:**
- [Dart Documentation - Functions](https://dart.dev/guides/language/language-tour#functions)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
apply_func (func: FUNCTION [STRING, STRING]; item: STRING): STRING
    do
        Result := func.item ([item])
    end

result: STRING
    local
        anon_func: FUNCTION [STRING, STRING]
    do
        create {FUNCTION [STRING, STRING]} anon_func.make (
            agent (s: STRING): STRING
                do
                    Result := s.as_upper
                end
        )
        Result := apply_func (anon_func, "Apfel")
    end
```

**Special features:**
- Anonymous functions are implemented via agents
- Supports closures

**Further reading:**
- [Eiffel Documentation - Agents](https://www.eiffel.org/doc/eiffel/Agents)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
def apply_func(func, item) do
    func.(item)
end

result = apply_func(fn item -> String.upcase(item) end, "Apfel")
```

**Special features:**
- Supports both `fn` and the compact `&` syntax
- Functions are first-class objects

**Further reading:**
- [Elixir Documentation - Anonymous Functions](https://hexdocs.pm/elixir/Function.html)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
applyFunc : (String -> String) -> String -> String
applyFunc func item =
    func item

result = applyFunc (\item -> String.toUpper item) "Apfel"
```

**Special features:**
- Functional language with explicit type annotations
- Supports anonymous functions via lambda expressions

**Further reading:**
- [Elm Documentation - Functions](https://guide.elm-lang.org/core_language.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
apply_func(Func, Item) ->
    Func(Item).

Result = apply_func(fun(Item) -> string:uppercase(Item) end, "Apfel").
```

**Special features:**
- Uses `fun` for anonymous functions
- Functions are first-class objects

**Further reading:**
- [Erlang Documentation - Fun Expressions](https://www.erlang.org/doc/reference_manual/expressions.html#fun-expressions)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
let applyFunc (func: string -> string) (item: string) : string =
    func item

let result = applyFunc (fun item -> item.ToUpper()) "Apfel"
```

**Special features:**
- Uses `fun` for anonymous functions
- Supports currying and partial application

**Further reading:**
- [F# Documentation - Lambda Expressions](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/functions/lambda-expressions-the-fun-keyword)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Fortran does not support anonymous functions directly
! Functionality must be implemented via named functions

function apply_func(item) result(result_str)
    character(len=*), intent(in) :: item
    character(len=len(item)) :: result_str
    integer :: i
    
    do i = 1, len(item)
        result_str(i:i) = achar(iachar(item(i:i)) - 32)
    end do
end function apply_func

character(len=5) :: result
result = apply_func("Apfel")
```

**Special features:**
- Fortran does not support anonymous functions directly
- Functionality must be implemented via named functions

**Further reading:**
- [Fortran Documentation - Functions](https://gcc.gnu.org/onlinedocs/gfortran/Function.html)

</TabItem>
<TabItem value="gleam" label="Gleam">

```erlang
pub fn apply_func(func: fn(String) -> String, item: String) -> String {
    func(item)
}

let result = apply_func(fn(item) { string.uppercase(item) }, "Apfel")
```

**Special features:**
- Functional language with explicit type annotations
- Supports anonymous functions via `fn`

**Further reading:**
- [Gleam Documentation - Functions](https://gleam.run/documentation/tour/functions/)

</TabItem>
<TabItem value="go" label="Go">

```go
func applyFunc(func func(string) string, item string) string {
    return func(item)
}

result := applyFunc(func(item string) string {
    return strings.ToUpper(item)
}, "Apfel")
```

**Special features:**
- Supports anonymous functions since Go 1.0
- Functions are first-class objects

**Further reading:**
- [Go Documentation - Function literals](https://go.dev/ref/spec#Function_literals)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
def applyFunc(func, item) {
    func(item)
}

def result = applyFunc({ item -> item.toUpperCase() }, "Apfel")
```

**Special features:**
- Uses closures for anonymous functions
- Supports implicit parameters (`it`)

**Further reading:**
- [Groovy Documentation - Closures](https://groovy-lang.org/closures.html)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
applyFunc :: (String -> String) -> String -> String
applyFunc func item = func item

result = applyFunc (\item -> map toUpper item) "Apfel"
```

**Special features:**
- Functional language with explicit type annotations
- Supports anonymous functions via lambda expressions

**Further reading:**
- [Haskell Documentation - Lambda Expressions](https://www.haskell.org/onlinereport/haskell2010/haskellch3.html#x8-580003.17)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
function applyFunc(func: String -> String, item: String): String {
    return func(item);
}

var result = applyFunc(function(item: String): String {
    return item.toUpperCase();
}, "Apfel");
```

**Special features:**
- Supports anonymous functions
- Cross-platform compilation

**Further reading:**
- [Haxe Documentation - Functions](https://haxe.org/manual/types-function.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
applyFunc : (String -> String) -> String -> String
applyFunc func item = func item

result : String
result = applyFunc (\item => toUpper item) "Apfel"
```

**Special features:**
- Functional language with dependent types
- Supports anonymous functions via lambda expressions

**Further reading:**
- [Idris Documentation - Functions](https://idris2.readthedocs.io/en/latest/tutorial/functions.html)

</TabItem>
<TabItem value="java" label="Java">

```java
static String applyFunc(java.util.function.Function<String, String> func, String item) {
    return func.apply(item);
}

String result = applyFunc(item -> item.toUpperCase(), "Apfel");
```

**Special features:**
- Supports anonymous functions via lambda expressions (since Java 8.0)
- Before Java 8, anonymous inner classes were used

**Further reading:**
- [Oracle Java Documentation - Lambda Expressions](https://docs.oracle.com/javase/tutorial/java/javaOO/lambdaexpressions.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
function applyFunc(func, item) {
    return func(item);
}

const result = applyFunc(function(item) {
    return item.toUpperCase();
}, "Apfel");
```

**Special features:**
- Supports anonymous functions since ES1
- Functions are first-class objects

**Further reading:**
- [MDN Web Docs - Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
function apply_func(func, item)
    func(item)
end

result = apply_func(item -> uppercase(item), "Apfel")
```

**Special features:**
- Supports anonymous functions via lambda expressions
- Functions are first-class objects

**Further reading:**
- [Julia Documentation - Anonymous Functions](https://docs.julialang.org/en/v1/manual/functions/#man-anonymous-functions)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Anonymous Functions
val double = fn(x: int) { x * 2 }
val result = double(5) // 10

// Passed as argument
fun apply(f: (int) -> int, x: int): int
  f(x)

val r = apply(fn(x) { x + 1 }, 10) // 11

// Trailing Lambda Syntax
val items = [1, 2, 3, 4, 5]
val evens = items.filter fn(x) { x % 2 == 0 } // [2, 4]
```

**Special features:**
- Anonymous functions with `fn(params) { body }`
- Functions are first-class values
- Trailing lambda syntax: Last lambda parameter can be placed after parentheses
- Closures automatically capture free variables

**Further reading:**
- [Koka Language Guide - Anonymous Functions](https://koka-lang.github.io/koka/doc/book.html#sec-anonymous-functions)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
fun applyFunc(func: (String) -> String, item: String): String {
    return func(item)
}

val result = applyFunc({ item -> item.uppercase() }, "Apfel")
```

**Special features:**
- Supports anonymous functions via lambda expressions
- Can be written as the last parameter outside parentheses

**Further reading:**
- [Kotlin Documentation - Lambda Expressions](https://kotlinlang.org/docs/lambdas.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```haskell
def applyFunc (func : String → String) (item : String) : String :=
  func item

#eval applyFunc (fun item => item.map Char.toUpper) "Apfel"  -- "APFEL"
```

**Special features:**
- Anonymous functions with `fun parameter => expression`
- Multiple parameters: `fun x y => x + y`
- Type annotations optional: `fun (x : Nat) => x + 1`

**Further reading:**
- [Lean 4 Documentation - Anonymous Functions](https://lean-lang.org/lean4/doc/functions.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
function apply_func(func, item)
    return func(item)
end

local result = apply_func(function(item)
    return string.upper(item)
end, "Apfel")
```

**Special features:**
- Supports anonymous functions
- Functions are first-class objects

**Further reading:**
- [Lua Documentation - Functions](https://www.lua.org/manual/5.4/manual.html#3.4.11)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
function result = apply_func(func, item)
    result = func(item);
end

result = apply_func(@(item) upper(item), "Apfel");
```

**Special features:**
- Supports anonymous functions via function handles
- Uses `@` syntax for anonymous functions

**Further reading:**
- [MATLAB Documentation - Anonymous Functions](https://www.mathworks.com/help/matlab/matlab_prog/anonymous-functions.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
:- func apply_func((func(string) = string), string) = string.
apply_func(Func, Item) = Func(Item).

Result = apply_func((func(Item) = string.to_upper(Item)), "Apfel").
```

**Special features:**
- Lambda functions with `(func(Args) = Expr)` syntax
- Lambda predicates with `(pred(Args::Modes) is Det :- Body)` syntax
- Lambdas can capture variables from the surrounding scope

**Further reading:**
- [Mercury Language Reference - Lambda Expressions](https://mercurylang.org/information/doc-latest/mercury_ref/Lambda-expressions.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
fn apply_func(func: fn(String) -> String, item: String) -> String:
    return func(item)

var result = apply_func(fn(item: String) -> String:
    return item.upper()
, "Apfel")
```

**Special features:**
- Python-like syntax with static typing
- Supports anonymous functions via `fn`

**Further reading:**
- [Mojo Documentation - Functions](https://docs.modular.com/mojo/manual/functions/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
proc applyFunc(func: proc(item: string): string, item: string): string =
    func(item)

let result = applyFunc(proc(item: string): string = item.toUpper(), "Apfel")
```

**Special features:**
- Uses `proc` for anonymous functions
- Supports closures

**Further reading:**
- [Nim Documentation - Procedures](https://nim-lang.org/docs/manual.html#procedures)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
NSString* (^applyFunc)(NSString* (^)(NSString*), NSString*) = ^NSString* (NSString* (^func)(NSString*), NSString* item) {
    return func(item);
};

NSString* result = applyFunc(^NSString* (NSString* item) {
    return [item uppercaseString];
}, @"Apfel");
```

**Special features:**
- Supports anonymous functions via blocks (since Objective-C 2.0)
- Blocks are closures with variable capture

**Further reading:**
- [Apple Documentation - Blocks](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/WorkingwithBlocks/WorkingwithBlocks.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
type
  TStringFunc = function(const item: string): string;

function ApplyFunc(func: TStringFunc; const item: string): string;
begin
    Result := func(item);
end;

var result: string;
begin
    result := ApplyFunc(function(const item: string): string
        begin
            Result := UpperCase(item);
        end, 'Apfel');
end;
```

**Special features:**
- Supports anonymous functions via anonymous methods (since Delphi 2009)
- Supports closures with variable capture

**Further reading:**
- [Embarcadero Delphi Documentation - Anonymous Methods](https://docwiki.embarcadero.com/RADStudio/en/Anonymous_Methods_in_Delphi)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
let apply_func (func: string -> string) (item: string) : string =
    func item

let result = apply_func (fun item -> String.uppercase_ascii item) "Apfel"
```

**Special features:**
- Verwendet `fun` für anonyme Funktionen
- Funktionale Sprache mit First-Class-Funktionen

**Further reading:**
- [OCaml Documentation - Functions](https://ocaml.org/docs/first-hour#functions)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
function result = apply_func(func, item)
    result = func(item);
end

result = apply_func(@(item) toupper(item), "Apfel");
```

**Special features:**
- Unterstützt anonyme Funktionen über Function Handles
- Verwendet `@`-Syntax für anonyme Funktionen

**Further reading:**
- [Octave Documentation - Anonymous Functions](https://octave.org/doc/v8.1.0/Anonymous-Functions.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
apply_func :: proc(func: proc(item: string) -> string, item: string) -> string {
    return func(item)
}

result := apply_func(proc(item: string) -> string {
    return strings.to_upper(item)
}, "Apfel")
```

**Special features:**
- Unterstützt anonyme Funktionen über Prozeduren
- Funktionen müssen einen Rückgabetyp haben

**Further reading:**
- [Odin Documentation - Procedures](https://odin-lang.org/docs/overview/#procedures)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
sub apply_func {
    my ($func, $item) = @_;
    return $func->($item);
}

my $result = apply_func(sub {
    my $item = shift;
    return uc($item);
}, "Apfel");
```

**Special features:**
- Verwendet anonyme Subroutinen
- Unterstützt Closures

**Further reading:**
- [Perl Documentation - Anonymous Subroutines](https://perldoc.perl.org/perlsub#Anonymous-Subroutines)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
function applyFunc($func, $item) {
    return $func($item);
}

$result = applyFunc(function($item) {
    return strtoupper($item);
}, "Apfel");
```

**Special features:**
- Unterstützt anonyme Funktionen seit PHP 5.3
- Unterstützen Closures mit `use`-Klausel

**Further reading:**
- [PHP Documentation - Anonymous Functions](https://www.php.net/manual/en/functions.anonymous.php)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
applyFunc :: (String -> String) -> String -> String
applyFunc func item = func item

result :: String
result = applyFunc (\item -> toUpper item) "Apfel"
```

**Special features:**
- Funktionale Sprache mit expliziten Typannotationen
- Unterstützt anonyme Funktionen über Lambda-Ausdrücke

**Further reading:**
- [PureScript Documentation - Functions](https://book.purescript.org/chapter3.html)

</TabItem>
<TabItem value="python" label="Python">

```python
def apply_func(func, item):
    return func(item)

result = apply_func(lambda item: item.upper(), "Apfel")
```

**Special features:**
- Unterstützt anonyme Funktionen über Lambda-Ausdrücke
- Lambda-Ausdrücke sind auf einen einzelnen Ausdruck beschränkt

**Further reading:**
- [Python Documentation - Lambda Expressions](https://docs.python.org/3/tutorial/controlflow.html#lambda-expressions)

</TabItem>
<TabItem value="r" label="R">

```r
apply_func <- function(func, item) {
    func(item)
}

result <- apply_func(function(item) {
    toupper(item)
}, "Apfel")
```

**Special features:**
- Unterstützt anonyme Funktionen
- Funktionen sind First-Class-Objekte

**Further reading:**
- [R Documentation - Functions](https://cran.r-project.org/doc/manuals/r-release/R-lang.html#Function-objects)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
(define (apply-func func item)
    (func item))

(define result (apply-func (lambda (item) (string-upcase item)) "Apfel"))
```

**Special features:**
- Verwendet `lambda` für anonyme Funktionen
- Funktionale Sprache mit First-Class-Funktionen

**Further reading:**
- [Racket Documentation - Lambda](https://docs.racket-lang.org/guide/lambda.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
applyFunc : (Str -> Str), Str -> Str
applyFunc = \func, item -> func item

result : Str
result = applyFunc (\item -> Str.toUpper item) "Apfel"
```

**Special features:**
- Lambda-Ausdrücke mit `\param -> body` Syntax
- Funktionale Sprache mit First-Class-Funktionen

**Further reading:**
- [Roc Documentation - Functions](https://www.roc-lang.org/tutorial#defining-functions)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
def apply_func(func, item)
    func.call(item)
end

result = apply_func(proc { |item| item.upcase }, "Apfel")
```

**Special features:**
- Verwendet Procs oder Blocks für anonyme Funktionen
- Unterstützt sowohl `proc` als auch `lambda`

**Further reading:**
- [Ruby Documentation - Procs](https://docs.ruby-lang.org/en/master/syntax/methods_rdoc.html#label-Procs)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
fn apply_func<F>(func: F, item: &str) -> String
where
    F: Fn(&str) -> String,
{
    func(item)
}

let result = apply_func(|item| item.to_uppercase(), "Apfel");
```

**Special features:**
- Unterstützt anonyme Funktionen über Closures
- Unterstützt drei Arten von Closures: `Fn`, `FnMut`, `FnOnce`

**Further reading:**
- [Rust Book - Closures](https://doc.rust-lang.org/book/ch13-01-closures.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
def applyFunc(func: String => String, item: String): String = {
    func(item)
}

val result = applyFunc(item => item.toUpperCase, "Apfel")
```

**Special features:**
- Unterstützt anonyme Funktionen über Lambda-Ausdrücke
- Funktionale und objektorientierte Sprache

**Further reading:**
- [Scala Documentation - Anonymous Functions](https://docs.scala-lang.org/scala3/book/fun-anonymous-functions.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
(define (apply-func func item)
    (func item))

(define result (apply-func (lambda (item) (string-upcase item)) "Apfel"))
```

**Special features:**
- Verwendet `lambda` für anonyme Funktionen
- Funktionale Sprache mit First-Class-Funktionen

**Further reading:**
- [Scheme Documentation - Lambda](https://www.scheme.com/tspl4/start.html#./start:h3)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
let toUpper: (String) -> String = { item in item.uppercased() }

let result = toUpper("Apfel")

// Closure mit Shorthand Argument Names
let toLower: (String) -> String = { $0.lowercased() }
```

**Special features:**
- Closures sind die anonymen Funktionen in Swift
- Unterstützt Shorthand Argument Names (`$0`, `$1`, etc.)
- Trailing Closure Syntax bei letztem Parameter

**Further reading:**
- [Swift Documentation - Closures](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/closures/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
function applyFunc(func: (item: string) => string, item: string): string {
    return func(item);
}

const result = applyFunc(function(item: string): string {
    return item.toUpperCase();
}, "Apfel");
```

**Special features:**
- Unterstützt vollständige Typannotationen
- Funktionen sind First-Class-Objekte

**Further reading:**
- [TypeScript Handbook - Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
Function ApplyFunc(func As Func(Of String, String), item As String) As String
    Return func(item)
End Function

Dim result As String = ApplyFunc(Function(item As String) item.ToUpper(), "Apfel")
```

**Special features:**
- Supports anonymous functions since VB.NET 9.0
- Supports both `Function` and `Sub` lambdas

**Further reading:**
- [Microsoft VB.NET Documentation - Lambda Expressions](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/procedures/lambda-expressions)

</TabItem>
<TabItem value="v" label="V">

```v
fn apply_func(func fn(string) string, item string) string {
    return func(item)
}

result := apply_func(fn(item string) string {
    return item.to_upper()
}, "Apfel")
```

**Special features:**
- Supports anonymous functions via `fn`
- Functions must have a return type

**Further reading:**
- [V Documentation - Functions](https://github.com/vlang/v/blob/master/doc/docs.md#functions)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```wolfram
applyFunc[func_, item_] := func[item]

result = applyFunc[Function[item, ToUpperCase[item]], "Apfel"]
```

**Special features:**
- Uses `Function` or `&` for anonymous functions
- Supports pattern matching in functions

**Further reading:**
- [Wolfram Language Documentation - Pure Functions](https://reference.wolfram.com/language/guide/FunctionalProgramming.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
fn applyFunc(func: *const fn ([]const u8) []const u8, item: []const u8) []const u8 {
    return func(item);
}

// Anonymous function via struct-method pattern
const result = applyFunc(&struct {
    fn call(item: []const u8) []const u8 {
        return item;
    }
}.call, "Apfel");
```

**Special features:**
- Zig has no true anonymous function literals
- Workaround: Define anonymous struct with method
- Functions can be passed via function pointers
- No closures (no access to outer variables)

**Further reading:**
- [Zig Documentation - Functions](https://ziglang.org/documentation/master/#Functions)

</TabItem>
</Tabs>


---

### Lambda Expressions


Anonymous functions that can be defined compactly inline. Enable treating functions as first-class objects and passing them to other functions or returning them from functions.


<Tabs availableTabs={['carbon', 'clojure', 'common-lisp', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'elixir', 'elm', 'erlang', 'fsharp', 'gleam', 'go', 'groovy', 'haskell', 'haxe', 'idris', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'lua', 'mojo', 'nim', 'object-pascal', 'ocaml', 'perl', 'php', 'purescript', 'python', 'r', 'racket', 'roc', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'vbnet', 'wolfram-language']} yellowTabs={['octave']}>
<TabItem value="csharp" label="C#">

```csharp
// Lambda expression (since C# 3.0)
// Requires: using System.Linq;
string[] items = { "Apfel", "Banane", "Kirsche" };
var filtered = items.Where(item => item.StartsWith("A")).ToArray();

// Lambda mit mehreren Anweisungen
items.ToList().ForEach(item => {
    Console.WriteLine($"Item: {item}");
});
```

**Special features:**
- Introduced in C# 3.0 and strongly integrated with LINQ
- Support full closures

**Further reading:**
- [Microsoft C# Documentation - Lambda Expressions](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/lambda-expressions)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Lambda expression (since C++11)
// Requires: #include <vector>, <string>, <algorithm>, <iostream>
std::vector<std::string> items = {"Apfel", "Banane", "Kirsche"};
std::vector<std::string> filtered;
std::copy_if(items.begin(), items.end(), std::back_inserter(filtered),
    [](const std::string& item) { return item.starts_with("A"); });

// Lambda mit mehreren Anweisungen
std::for_each(items.begin(), items.end(), [](const std::string& item) {
    std::cout << "Item: " << item << std::endl;
});
```

**Special features:**
- Introduced in C++11
- Support capture lists for variables from the surrounding scope

**Further reading:**
- [cppreference.com - Lambda expressions](https://en.cppreference.com/w/cpp/language/lambda)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Lambda expression (experimental)
var items: [String] = {"Apfel", "Banane", "Kirsche"};
var filtered = items.Where([](item: String) -> bool {
    return item.StartsWith("A");
});
```

**Special features:**
- Experimental language, syntax may still change
- C++-like syntax with modern features

**Further reading:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Lambda expression (fn or # syntax)
(def items ["Apfel" "Banane" "Kirsche"])
(def filtered (filter #(.startsWith % "A") items))

;; Lambda mit mehreren Anweisungen
(doseq [item items]
  (println (str "Item: " item)))
```

**Special features:**
- Supports both `fn` and the compact `#` syntax
- Functions are first-class objects

**Further reading:**
- [Clojure Documentation - Functions](https://clojure.org/reference/reader#_dispatch)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Lambda expression
(let ((items '("Apfel" "Banane" "Kirsche")))
  (remove-if-not (lambda (item) (string-prefix-p "A" item)) items))

;; Lambda mit mehreren Anweisungen
(mapc (lambda (item) (format t "Item: ~a~%" item)) items)
```

**Special features:**
- `lambda` is a macro that creates anonymous functions
- Functions are first-class objects

**Further reading:**
- [Common Lisp HyperSpec - Lambda](http://www.lispworks.com/documentation/HyperSpec/Body/m_lambda.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Lambda expression (Proc)
items = ["Apfel", "Banane", "Kirsche"]
filtered = items.select { |item| item.starts_with?("A") }

# Lambda mit mehreren Anweisungen
items.each do |item|
  puts "Item: #{item}"
end
```

**Special features:**
- Uses blocks (similar to Ruby)
- Supports both `{ }` and `do...end` syntax

**Further reading:**
- [Crystal Documentation - Blocks and Procs](https://crystal-lang.org/reference/1.11/syntax_and_semantics/blocks_and_procs.html)

</TabItem>
<TabItem value="d" label="D">

```d
// Lambda expression (since D 2.0)
// Requires: import std.algorithm, std.array, std.stdio;
string[] items = ["Apfel", "Banane", "Kirsche"];
auto filtered = items.filter!(item => item.startsWith("A")).array;

// Lambda mit mehreren Anweisungen
items.each!(item => writeln("Item: ", item));
```

**Special features:**
- Introduced in D 2.0
- Support closures

**Further reading:**
- [D Language Specification - Function Literals](https://dlang.org/spec/expression.html#function_literals)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Lambda expression (Arrow Function)
var items = ["Apfel", "Banane", "Kirsche"];
var filtered = items.where((item) => item.startsWith("A")).toList();

// Lambda mit mehreren Anweisungen
items.forEach((item) {
  print("Item: $item");
});
```

**Special features:**
- Supports both arrow functions and traditional anonymous functions
- Full closure support

**Further reading:**
- [Dart Language Tour - Functions](https://dart.dev/guides/language/language-tour#functions)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Lambda expression (fn or & syntax)
items = ["Apfel", "Banane", "Kirsche"]
filtered = Enum.filter(items, fn item -> String.starts_with?(item, "A") end)

# Compact & syntax
filtered = Enum.filter(items, &String.starts_with?(&1, "A"))

# Lambda mit mehreren Anweisungen
Enum.each(items, fn item ->
  IO.puts("Item: #{item}")
end)
```

**Special features:**
- Supports both `fn` and the compact `&` syntax
- Functions are first-class objects

**Further reading:**
- [Elixir Documentation - Anonymous Functions](https://hexdocs.pm/elixir/Function.html)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Lambda expression
items = ["Apfel", "Banane", "Kirsche"]
filtered = List.filter (\item -> String.startsWith "A" item) items

-- Lambda mit mehreren Anweisungen
List.map (\item -> 
    Debug.log "Item" item
) items
```

**Special features:**
- Functional language with first-class functions
- Supports currying

**Further reading:**
- [Elm Documentation - Functions](https://guide.elm-lang.org/core_language.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% Lambda expression (Fun)
Items = ["Apfel", "Banane", "Kirsche"],
Filtered = lists:filter(fun(Item) -> string:prefix(Item, "A") =/= nomatch end, Items),

% Lambda mit mehreren Anweisungen
lists:foreach(fun(Item) ->
    io:format("Item: ~s~n", [Item])
end, Items).
```

**Special features:**
- Uses `fun` for anonymous functions
- Functions are first-class objects

**Further reading:**
- [Erlang Documentation - Fun Expressions](https://www.erlang.org/doc/reference_manual/expressions.html#fun-expressions)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Lambda expression
let items = ["Apfel"; "Banane"; "Kirsche"]
let filtered = List.filter (fun item -> item.StartsWith("A")) items

// Lambda mit mehreren Anweisungen
List.iter (fun item ->
    printfn "Item: %s" item
) items
```

**Special features:**
- Uses `fun` for anonymous functions
- Supports currying and partial application

**Further reading:**
- [F# Documentation - Lambda Expressions](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/functions/lambda-expressions-the-fun-keyword)

</TabItem>
<TabItem value="gleam" label="Gleam">

```erlang
// Lambda expression
let items = ["Apfel", "Banane", "Kirsche"]
let filtered = list.filter(items, fn(item) { string.starts_with(item, "A") })

// Lambda mit mehreren Anweisungen
list.each(items, fn(item) {
  io.println(string.append("Item: ", item))
})
```

**Special features:**
- Functional language with first-class functions
- Supports closures

**Further reading:**
- [Gleam Documentation - Functions](https://gleam.run/documentation/tour/functions/)

</TabItem>
<TabItem value="go" label="Go">

```go
// Anonymous function (since Go 1.0)
items := []string{"Apfel", "Banane", "Kirsche"}
var filtered []string
for _, item := range items {
    if func(s string) bool { return strings.HasPrefix(s, "A") }(item) {
        filtered = append(filtered, item)
    }
}

// Lambda-like usage with higher-order functions
filtered = slices.FilterFunc(items, func(item string) bool {
    return strings.HasPrefix(item, "A")
})
```

**Special features:**
- Supports anonymous functions since version 1.0
- Since Go 1.18, there are generic higher-order functions in `slices` and `maps`

**Further reading:**
- [Go Documentation - Function literals](https://go.dev/ref/spec#Function_literals)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Lambda expression (Closure)
def items = ["Apfel", "Banane", "Kirsche"]
def filtered = items.findAll { it.startsWith("A") }

// Lambda mit mehreren Anweisungen
items.each { item ->
    println "Item: $item"
}
```

**Special features:**
- Uses closures for lambda-like functionality
- Supports implicit parameters (`it`)

**Further reading:**
- [Groovy Documentation - Closures](https://groovy-lang.org/closures.html)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Lambda-Ausdruck
items = ["Apfel", "Banane", "Kirsche"]
filtered = filter (\item -> "A" `isPrefixOf` item) items

-- Lambda mit mehreren Anweisungen
mapM_ (\item -> putStrLn $ "Item: " ++ item) items
```

**Special features:**
- Functional language with first-class functions
- Supports currying

**Further reading:**
- [Haskell Documentation - Lambda Expressions](https://www.haskell.org/onlinereport/haskell2010/haskellch3.html#x8-580003.17)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Lambda expression
var items = ["Apfel", "Banane", "Kirsche"];
var filtered = items.filter(item -> item.indexOf("A") == 0);

// Lambda mit mehreren Anweisungen
items.forEach(item -> {
    trace("Item: " + item);
});
```

**Special features:**
- Supports arrow functions
- Cross-platform compilation

**Further reading:**
- [Haxe Documentation - Functions](https://haxe.org/manual/types-function.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Lambda expression
items : List String
items = ["Apfel", "Banane", "Kirsche"]
filtered = filter (\item => isPrefixOf "A" item) items

-- Lambda mit mehreren Anweisungen
traverse_ (\item => putStrLn $ "Item: " ++ item) items
```

**Special features:**
- Functional language with dependent types
- Supports currying

**Further reading:**
- [Idris Documentation - Functions](https://idris2.readthedocs.io/en/latest/tutorial/functions.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Lambda expression (since Java 8.0)
List<String> items = Arrays.asList("Apfel", "Banane", "Kirsche");
var filtered = items.stream()
                   .filter(item -> item.startsWith("A"))
                   .toList();

// Lambda mit mehreren Anweisungen
items.forEach((item) -> {
    System.out.println("Item: " + item);
});
```

**Special features:**
- Introduced in Java 8.0 and must implement functional interfaces
- Support effectively final variables for closures

**Further reading:**
- [Oracle Java Documentation - Lambda Expressions](https://docs.oracle.com/javase/tutorial/java/javaOO/lambdaexpressions.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Arrow Function (seit ES6/ES2015)
const items = ["Apfel", "Banane", "Kirsche"];
const filtered = items.filter(item => item.startsWith("A"));

// Arrow Function mit mehreren Anweisungen
items.forEach((item) => {
    console.log(`Item: ${item}`);
});

// Lexikalisches this-Binding
const obj = {
    name: "Test",
    getName: () => this.name, // this bezieht sich auf umgebenden Kontext
    getNameTraditional: function() {
        return this.name; // this bezieht sich auf obj
    }
};
```

**Special features:**
- Have lexical `this` binding (no own `this`), making them ideal for callbacks

**Further reading:**
- [MDN Web Docs - Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Lambda expression (Anonymous Function)
items = ["Apfel", "Banane", "Kirsche"]
filtered = filter(item -> startswith(item, "A"), items)

# Lambda mit mehreren Anweisungen
foreach(items) do item
    println("Item: $item")
end
```

**Special features:**
- Supports both `->` and `do...end` syntax
- Functions are first-class objects

**Further reading:**
- [Julia Documentation - Anonymous Functions](https://docs.julialang.org/en/v1/manual/functions/#man-anonymous-functions)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Lambda expressions
val items = ["Apfel", "Banane", "Kirsche"]
val filtered = items.filter fn(item) { item.starts-with("A") }

// Lambda with explicit type
val double: (int) -> int = fn(x) { x * 2 }

// Short form for single-line lambdas
val square = fn(x: int) { x * x }
```

**Special features:**
- Lambda syntax: `fn(params) { body }`
- Lambdas can be passed inline as arguments
- Trailing lambda syntax for better readability
- Type inference for lambda parameters

**Further reading:**
- [Koka Language Guide - Anonymous Functions](https://koka-lang.github.io/koka/doc/book.html#sec-anonymous-functions)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Lambda expression
val items = listOf("Apfel", "Banane", "Kirsche")
val filtered = items.filter { it.startsWith("A") }

// Lambda mit mehreren Anweisungen
items.forEach { item ->
    println("Item: $item")
}
```

**Special features:**
- Supports both `{ }` and explicit parameters
- Implicit parameter `it` when only one parameter is present

**Further reading:**
- [Kotlin Documentation - Lambda Expressions](https://kotlinlang.org/docs/lambdas.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```haskell
-- Lambda-Ausdruck
let items := ["Apfel", "Banane", "Kirsche"]
let filtered := items.filter (fun item => "A".isPrefixOf item)

-- Short form with · (anonymous function shorthand)
let doubled := [1, 2, 3].map (· * 2)  -- [2, 4, 6]
```

**Special features:**
- `fun parameter => expression` for lambda expressions
- `·` (middle dot) as shorthand for single-parameter anonymous functions
- Automatic currying makes partial application trivial

**Further reading:**
- [Lean 4 Documentation - Anonymous Functions](https://lean-lang.org/lean4/doc/functions.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Lambda expression (Anonymous Function)
local items = {"Apfel", "Banane", "Kirsche"}
local filtered = {}
for _, item in ipairs(items) do
    if (function(s) return string.sub(s, 1, 1) == "A" end)(item) then
        table.insert(filtered, item)
    end
end

-- Lambda mit mehreren Anweisungen
for _, item in ipairs(items) do
    (function(s) print("Item: " .. s) end)(item)
end
```

**Special features:**
- Supports anonymous functions
- Functions are first-class objects

**Further reading:**
- [Lua Documentation - Functions](https://www.lua.org/manual/5.4/manual.html#3.4.11)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# Lambda expression (Python-like)
var items = ["Apfel", "Banane", "Kirsche"]
var filtered = [item for item in items if item.startswith("A")]

# Lambda mit filter
filtered = list(filter(lambda item: item.startswith("A"), items))
```

**Special features:**
- Python-like syntax
- Supports lambda expressions like Python

**Further reading:**
- [Mojo Documentation - Functions](https://docs.modular.com/mojo/manual/functions/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Lambda expression (Anonymous Procedure)
var items = @["Apfel", "Banane", "Kirsche"]
var filtered = items.filter(proc(item: string): bool = item.startsWith("A"))

# Lambda mit mehreren Anweisungen
items.apply(proc(item: string) =
    echo "Item: ", item
)
```

**Special features:**
- Uses `proc` for anonymous functions
- Supports closures

**Further reading:**
- [Nim Documentation - Procedures](https://nim-lang.org/docs/manual.html#procedures)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Lambda expression (Anonymous Method, since Delphi 2009)
var
  items: TArray<string>;
  filterFunc: TFunc<string, Boolean>;
begin
  items := ['Apfel', 'Banane', 'Kirsche'];
  filterFunc := function(const item: string): Boolean
    begin
      Result := item.StartsWith('A');
    end;

  // Lambda mit mehreren Anweisungen
  TArray<string>.ForEach(items, procedure(const item: string)
    begin
      WriteLn('Item: ', item);
    end);
end;
```

**Special features:**
- Introduced in Delphi 2009 (Anonymous Methods)
- Supports both `procedure` and `function` anonymous methods
- Supports closures with variable capture

**Further reading:**
- [Embarcadero Delphi Documentation - Anonymous Methods](https://docwiki.embarcadero.com/RADStudio/en/Anonymous_Methods_in_Delphi)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Lambda expression (Anonymous Function) *)
let items = ["Apfel"; "Banane"; "Kirsche"]
let filtered = List.filter (fun item -> String.starts_with item "A") items

(* Lambda mit mehreren Anweisungen *)
List.iter (fun item ->
    print_endline ("Item: " ^ item)
) items
```

**Special features:**
- Uses `fun` for anonymous functions
- Functional language with first-class functions

**Further reading:**
- [OCaml Documentation - Functions](https://ocaml.org/docs/first-hour#functions)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Lambda expression (Anonymous Subroutine)
my @items = ("Apfel", "Banane", "Kirsche");
my @filtered = grep { substr($_, 0, 1) eq "A" } @items;

# Lambda mit mehreren Anweisungen
foreach my $item (@items) {
    sub { print "Item: $_[0]\n" }->($item);
}
```

**Special features:**
- Uses anonymous subroutines
- Supports closures

**Further reading:**
- [Perl Documentation - Anonymous Subroutines](https://perldoc.perl.org/perlsub#Anonymous-Subroutines)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
// Lambda expression (Anonymous Function, since PHP 5.3)
$items = ["Apfel", "Banane", "Kirsche"];
$filtered = array_filter($items, function($item) {
    return str_starts_with($item, "A");
});

// Lambda mit mehreren Anweisungen
array_walk($items, function($item) {
    echo "Item: $item\n";
});
```

**Special features:**
- Introduced in PHP 5.3
- Support closures with `use` clause

**Further reading:**
- [PHP Documentation - Anonymous Functions](https://www.php.net/manual/en/functions.anonymous.php)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Lambda expression
items = ["Apfel", "Banane", "Kirsche"]
filtered = filter (\item -> String.startsWith "A" item) items

-- Lambda mit mehreren Anweisungen
traverse_ (\item -> log $ "Item: " <> item) items
```

**Special features:**
- Functional language with first-class functions
- Supports currying

**Further reading:**
- [PureScript Documentation - Functions](https://book.purescript.org/chapter3.html)

</TabItem>
<TabItem value="python" label="Python">

```python
# Lambda expression
items = ["Apfel", "Banane", "Kirsche"]
filtered = list(filter(lambda item: item.startswith("A"), items))

# Lambda with forEach-like iteration
for item in items:
    print(f"Item: {item}")
```

**Special features:**
- Limited to a single expression
- For more complex functions, regular functions should be used

**Further reading:**
- [Python Documentation - Lambda Expressions](https://docs.python.org/3/tutorial/controlflow.html#lambda-expressions)

</TabItem>
<TabItem value="r" label="R">

```r
# Lambda expression (Anonymous Function)
items <- c("Apfel", "Banane", "Kirsche")
filtered <- Filter(function(item) startsWith(item, "A"), items)

# Lambda mit mehreren Anweisungen
lapply(items, function(item) {
  cat("Item:", item, "\n")
})
```

**Special features:**
- Supports anonymous functions
- Functions are first-class objects

**Further reading:**
- [R Documentation - Functions](https://cran.r-project.org/doc/manuals/r-release/R-lang.html#Function-objects)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
;; Lambda expression
(define items '("Apfel" "Banane" "Kirsche"))
(define filtered (filter (lambda (item) (string-prefix? item "A")) items))

;; Lambda mit mehreren Anweisungen
(for-each (lambda (item) (printf "Item: ~a\n" item)) items)
```

**Special features:**
- Uses `lambda` for anonymous functions
- Functional language with first-class functions

**Further reading:**
- [Racket Documentation - Lambda](https://docs.racket-lang.org/guide/lambda.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Lambda-Ausdruck
items = ["Apfel", "Banane", "Kirsche"]
filtered = List.keepIf items \item -> Str.startsWith item "A"

-- Lambda with multiple parameters
sum = List.walk [1, 2, 3] 0 \acc, n -> acc + n
```

**Special features:**
- Functional language with first-class functions
- Lambdas with `\param -> body` syntax
- Supports closures

**Further reading:**
- [Roc Documentation - Functions](https://www.roc-lang.org/tutorial#defining-functions)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Lambda expression (Block or Proc)
items = ["Apfel", "Banane", "Kirsche"]
filtered = items.select { |item| item.start_with?("A") }

# Lambda mit mehreren Anweisungen
items.each do |item|
  puts "Item: #{item}"
end
```

**Special features:**
- Uses blocks for lambda-like functionality
- Supports both `{ }` and `do...end` syntax

**Further reading:**
- [Ruby Documentation - Blocks](https://ruby-doc.org/core-3.1.0/doc/syntax/methods_rdoc.html#label-Blocks)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Lambda expression (Closure)
let items = vec!["Apfel", "Banane", "Kirsche"];
let filtered: Vec<_> = items.into_iter()
    .filter(|item| item.starts_with("A"))
    .collect();

// Lambda mit mehreren Anweisungen
items.iter().for_each(|item| {
    println!("Item: {}", item);
});
```

**Special features:**
- Introduced in Rust 1.0
- Support three types of closures: `Fn`, `FnMut`, `FnOnce`

**Further reading:**
- [Rust Documentation - Closures](https://doc.rust-lang.org/book/ch13-01-closures.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Lambda expression
val items = List("Apfel", "Banane", "Kirsche")
val filtered = items.filter(item => item.startsWith("A"))

// Lambda mit mehreren Anweisungen
items.foreach { item =>
  println(s"Item: $item")
}
```

**Special features:**
- Supports both `=>` and block syntax
- Functional and object-oriented language

**Further reading:**
- [Scala Documentation - Anonymous Functions](https://docs.scala-lang.org/scala3/book/fun-anonymous-functions.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; Lambda expression
(define items '("Apfel" "Banane" "Kirsche"))
(define filtered (filter (lambda (item) (string-prefix? "A" item)) items))

;; Lambda mit mehreren Anweisungen
(for-each (lambda (item) (display (string-append "Item: " item "\n"))) items)
```

**Special features:**
- Uses `lambda` for anonymous functions
- Functional language with first-class functions

**Further reading:**
- [Scheme Documentation - Lambda](https://www.scheme.com/tspl4/start.html#./start:h3)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Lambda expression (Closure)
let items = ["Apfel", "Banane", "Kirsche"]
let filtered = items.filter { $0.hasPrefix("A") }

// Lambda mit mehreren Anweisungen
items.forEach { item in
    print("Item: \(item)")
}
```

**Special features:**
- Supports both `{ }` and explicit parameters
- Shorthand argument names (`$0`, `$1`, etc.)

**Further reading:**
- [Swift Documentation - Closures](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/closures/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Arrow Function (seit ES6/ES2015)
const items = ["Apfel", "Banane", "Kirsche"];
const filtered = items.filter(item => item.startsWith("A"));

// Arrow Function mit mehreren Anweisungen
items.forEach((item) => {
    console.log(`Item: ${item}`);
});

// Lexikalisches this-Binding
const obj = {
    name: "Test",
    getName: () => this.name, // this bezieht sich auf umgebenden Kontext
    getNameTraditional: function() {
        return this.name; // this bezieht sich auf obj
    }
};
```

**Special features:**
- Have lexical `this` binding (no own `this`), making them ideal for callbacks

**Further reading:**
- [TypeScript Handbook - Arrow Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html#arrow-functions)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```csharp
' Lambda expression (since VB.NET 9.0 / .NET Framework 3.5)
Dim items As String() = {"Apfel", "Banane", "Kirsche"}
Dim filtered = items.Where(Function(item) item.StartsWith("A")).ToArray()

' Lambda mit mehreren Anweisungen
items.ToList().ForEach(Sub(item)
    Console.WriteLine($"Item: {item}")
End Sub)
```

**Special features:**
- Introduced in VB.NET 9.0
- Supports both `Function` and `Sub` lambdas

**Further reading:**
- [Microsoft VB.NET Documentation - Lambda Expressions](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/procedures/lambda-expressions)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```wolfram
(* Lambda expression (Pure Function) *)
items = {"Apfel", "Banane", "Kirsche"};
filtered = Select[items, StringStartsQ[#, "A"] &];

(* Lambda mit mehreren Anweisungen *)
Map[Function[item, Print["Item: ", item]], items]
```

**Special features:**
- Uses `Function` or `&` for anonymous functions
- Supports pattern matching in functions

**Further reading:**
- [Wolfram Language Documentation - Pure Functions](https://reference.wolfram.com/language/guide/FunctionalProgramming.html)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
% Lambda expressions (anonymous functions)
square = @(x) x^2;
result = square(5);  % 25

add = @(a, b) a + b;
result = add(3, 4);  % 7
```

**Special features:**
- Syntax: `@(parameter) expression`
- Anonymous functions can capture variables from the surrounding scope
- Only a single expression possible (no function body)

**Further reading:**
- [GNU Octave Documentation - Anonymous Functions](https://octave.org/doc/v8.1.0/Anonymous-Functions.html)

</TabItem>
</Tabs>


---

### Arrow Functions


Compact syntax for anonymous functions with an arrow (`=>` or `->`). Often provide lexical `this` binding and a shorter notation than traditional anonymous functions.


<Tabs availableTabs={['carbon', 'csharp', 'dart', 'elixir', 'elm', 'fsharp', 'haxe', 'javascript', 'kotlin', 'lean4', 'ocaml', 'php', 'purescript', 'rust', 'scala', 'typescript']} orangeTabs={['swift']}>
<TabItem value="carbon" label="Carbon">

```cpp
fn ApplyFunc(func: fn(String) -> String, item: String) -> String {
    return func(item);
}

var result = ApplyFunc(fn(item: String) -> String {
    return item.ToUpper();
}, "Apfel");
```

**Special features:**
- Experimental language, syntax may still change
- Uses `->` for return types

**Further reading:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
string ApplyFunc(Func<string, string> func, string item)
{
    return func(item);
}

string result = ApplyFunc(item => item.ToUpper(), "Apfel");
```

**Special features:**
- Arrow functions were introduced in C# 3.0
- Support full closures

**Further reading:**
- [Microsoft C# Documentation - Lambda Expressions](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/lambda-expressions)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
String ApplyFunc(String Function(String) func, String item) {
    return func(item);
}

String result = ApplyFunc((item) => item.toUpperCase(), "Apfel");
```

**Special features:**
- Arrow functions were introduced in Dart 1.0
- Full closure support

**Further reading:**
- [Dart Documentation - Arrow Functions](https://dart.dev/guides/language/language-tour#arrow-functions)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
def apply_func(func, item) do
    func.(item)
end

result = apply_func(&String.upcase/1, "Apfel")
```

**Special features:**
- Uses `&` syntax for arrow functions
- Supports both `fn` and the compact `&` syntax

**Further reading:**
- [Elixir Documentation - Anonymous Functions](https://hexdocs.pm/elixir/Function.html)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
applyFunc : (String -> String) -> String -> String
applyFunc func item =
    func item

result = applyFunc (\item -> String.toUpper item) "Apfel"
```

**Special features:**
- Functional language with explicit type annotations
- Uses `->` for function signatures

**Further reading:**
- [Elm Documentation - Functions](https://guide.elm-lang.org/core_language.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
let applyFunc (func: string -> string) (item: string) : string =
    func item

let result = applyFunc (fun item -> item.ToUpper()) "Apfel"
```

**Special features:**
- Uses `->` for function signatures
- Supports currying and partial application

**Further reading:**
- [F# Documentation - Lambda Expressions](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/functions/lambda-expressions-the-fun-keyword)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
function applyFunc(func: String -> String, item: String): String {
    return func(item);
}

var result = applyFunc(item -> item.toUpperCase(), "Apfel");
```

**Special features:**
- Supports arrow functions
- Cross-platform compilation

**Further reading:**
- [Haxe Documentation - Functions](https://haxe.org/manual/types-function.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
function applyFunc(func, item) {
    return func(item);
}

const result = applyFunc(item => item.toUpperCase(), "Apfel");

// Lexikalisches this-Binding
const obj = {
    name: "Test",
    getName: () => this.name, // this bezieht sich auf umgebenden Kontext
    getNameTraditional: function() {
        return this.name; // this bezieht sich auf obj
    }
};
```

**Special features:**
- Arrow functions were introduced in ES6/ES2015
- Have lexical `this` binding (no own `this`), making them ideal for callbacks

**Further reading:**
- [MDN Web Docs - Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
fun applyFunc(func: (String) -> String, item: String): String {
    return func(item)
}

val result = applyFunc({ item -> item.uppercase() }, "Apfel")
```

**Special features:**
- Supports arrow functions via lambda expressions
- Can be written as the last parameter outside the parentheses

**Further reading:**
- [Kotlin Documentation - Lambda Expressions](https://kotlinlang.org/docs/lambdas.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```haskell
def applyFunc (func : String → String) (item : String) : String :=
  func item

-- Arrow function with fun ... =>
let result := applyFunc (fun item => item.map Char.toUpper) "Apfel"
```

**Special features:**
- `fun parameter => expression` as arrow function syntax
- `=>` as arrow operator (similar to `->` in OCaml/Haskell)
- `→` (Unicode) or `->` (ASCII) for function types

**Further reading:**
- [Lean 4 Documentation - Anonymous Functions](https://lean-lang.org/lean4/doc/functions.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
let apply_func (func: string -> string) (item: string) : string =
    func item

let result = apply_func (fun item -> String.uppercase_ascii item) "Apfel"
```

**Special features:**
- Uses `->` for function signatures
- Functional language with first-class functions

**Further reading:**
- [OCaml Documentation - Functions](https://ocaml.org/docs/first-hour#functions)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
applyFunc :: (String -> String) -> String -> String
applyFunc func item = func item

result :: String
result = applyFunc (\item -> toUpper item) "Apfel"
```

**Special features:**
- Functional language with explicit type annotations
- Uses `->` for function signatures

**Further reading:**
- [PureScript Documentation - Functions](https://book.purescript.org/chapter3.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
fn apply_func<F>(func: F, item: &str) -> String
where
    F: Fn(&str) -> String,
{
    func(item)
}

let result = apply_func(|item| item.to_uppercase(), "Apfel");
```

**Special features:**
- Supports arrow functions via closures with `|` syntax
- Supports three types of closures: `Fn`, `FnMut`, `FnOnce`

**Further reading:**
- [Rust Book - Closures](https://doc.rust-lang.org/book/ch13-01-closures.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
def applyFunc(func: String => String, item: String): String = {
    func(item)
}

val result = applyFunc(item => item.toUpperCase, "Apfel")
```

**Special features:**
- Supports arrow functions via `=>` syntax
- Functional and object-oriented language

**Further reading:**
- [Scala Documentation - Anonymous Functions](https://docs.scala-lang.org/scala3/book/fun-anonymous-functions.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Closures (Swifts Äquivalent zu Arrow Functions)
let items = ["Apfel", "Banane", "Kirsche"]
let filtered = items.filter { $0.hasPrefix("A") }

// Closure mit expliziten Parametern
items.forEach { item in
    print("Item: \(item)")
}
```

**Special features:**
- Swift has no arrow functions in the sense of JavaScript/TypeScript
- Closures with `{ }` are the equivalent
- Shorthand argument names (`$0`, `$1`, etc.)

**Further reading:**
- [Swift Documentation - Closures](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/closures/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
function applyFunc(func: (item: string) => string, item: string): string {
    return func(item);
}

const result = applyFunc((item: string) => item.toUpperCase(), "Apfel");

// Lexikalisches this-Binding
const obj = {
    name: "Test",
    getName: () => this.name, // this bezieht sich auf umgebenden Kontext
    getNameTraditional: function() {
        return this.name; // this bezieht sich auf obj
    }
};
```

**Special features:**
- Arrow functions were introduced in ES6/ES2015
- Have lexical `this` binding (no own `this`), making them ideal for callbacks
- Supports full type annotations

**Further reading:**
- [TypeScript Handbook - Arrow Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html#arrow-functions)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
// Arrow Functions (seit PHP 7.4)
$double = fn($x) => $x * 2;

$numbers = [1, 2, 3, 4, 5];
$doubled = array_map(fn($n) => $n * 2, $numbers);

// Arrow Functions erfassen Variablen automatisch per Value
$factor = 3;
$multiply = fn($x) => $x * $factor;
?>
```

**Special features:**
- `fn` syntax since PHP 7.4
- Capture outer variables automatically by value (no `use` needed)
- Only a single expression (no block body)
- Implicit `return`

**Further reading:**
- [PHP Documentation - Arrow Functions](https://www.php.net/manual/en/functions.arrow.php)

</TabItem>
</Tabs>


## 7.1.3. Blocks (Ruby-style)

Code blocks that can be passed to methods. They are defined with `{ }` or `do...end` and allow passing code as arguments, similar to lambda expressions, but with special syntax integration.

### Languages {#sprachen}

<Tabs availableTabs={['crystal', 'ruby']}>
<TabItem value="crystal" label="Crystal">

```crystal
def apply_block(items, &block)
  result = [] of String
  items.each do |item|
    result << block.call(item)
  end
  result
end

items = ["Apfel", "Banane", "Kirsche"]
result = apply_block(items) { |item| item.upcase }

# Alternative syntax with do...end
result = apply_block(items) do |item|
  item.upcase
end
```

**Special features:**
- Supports both `{ }` and `do...end` syntax
- Blocks are first-class objects (Procs)
- Can be stored in variables

**Further reading:**
- [Crystal Documentation - Blocks and Procs](https://crystal-lang.org/reference/1.11/syntax_and_semantics/blocks_and_procs.html)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
def apply_block(items, &block)
  result = []
  items.each do |item|
    result << block.call(item)
  end
  result
end

items = ["Apfel", "Banane", "Kirsche"]
result = apply_block(items) { |item| item.upcase }

# Alternative syntax with do...end
result = apply_block(items) do |item|
  item.upcase
end

# Block can also be passed directly to methods
result = items.map { |item| item.upcase }
```

**Special features:**
- Supports both `{ }` and `do...end` syntax
- Blocks are first-class objects (Procs)
- Can be stored in variables
- Can be passed to methods without being explicitly declared as a parameter

**Further reading:**
- [Ruby Documentation - Blocks](https://ruby-doc.org/core-3.1.0/doc/syntax/methods_rdoc.html#label-Blocks)

</TabItem>
</Tabs>


## 7.1.4. Local Functions

Functions that can be defined within another function. Allow placing helper functions close to their usage and limiting the scope.

### Languages {#sprachen}

<Tabs availableTabs={['ada', 'clojure', 'common-lisp', 'csharp', 'd', 'dart', 'elixir', 'elm', 'erlang', 'fortran', 'fsharp', 'go', 'groovy', 'haskell', 'idris', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'lua', 'matlab', 'nim', 'object-pascal', 'ocaml', 'octave', 'perl', 'php', 'python', 'r', 'racket', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'vbnet', 'wolfram-language']}>
<TabItem value="ada" label="Ada">

```ada
function Calculate(Items : String_Array) return String_Array is
    function Filter_Items(Items : String_Array; Prefix : String) return String_Array is
        Result : String_Array(1 .. 0);
    begin
        for Item of Items loop
            if Item'Length >= Prefix'Length and then
               Item(Item'First .. Item'First + Prefix'Length - 1) = Prefix then
                Result := Result & Item;
            end if;
        end loop;
        return Result;
    end Filter_Items;
    
    function Process_Item(Item : String) return String is
    begin
        return To_Upper(Item);
    end Process_Item;
    
    Filtered : String_Array := Filter_Items(Items, "A");
    Result : String_Array(1 .. 0);
begin
    for Item of Filtered loop
        Result := Result & Process_Item(Item);
    end loop;
    return Result;
end Calculate;
```

**Special features:**
- Local functions can access variables of the outer function
- Support closures

**Further reading:**
- [Ada Documentation - Functions](https://learn.adacore.com/courses/intro-to-ada/chapters/subprograms.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
string[] Calculate(string[] items)
{
    string[] FilterItems(string[] items, string prefix)
    {
        return items.Where(item => item.StartsWith(prefix)).ToArray();
    }
    
    string ProcessItem(string item)
    {
        return item.ToUpper();
    }
    
    var filtered = FilterItems(items, "A");
    return filtered.Select(ProcessItem).ToArray();
}

// Requires: using System.Linq;
string[] items = { "Apfel", "Banane", "Kirsche" };
string[] result = Calculate(items);
```

**Special features:**
- Local functions (since C# 7.0)
- Can access variables of the outer function
- Can be called before their definition

**Further reading:**
- [Microsoft C# Documentation - Local Functions](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/local-functions)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
List<String> calculate(List<String> items) {
    List<String> filterItems(List<String> items, String prefix) {
        return items.where((item) => item.startsWith(prefix)).toList();
    }
    
    String processItem(String item) {
        return item.toUpperCase();
    }
    
    var filtered = filterItems(items, "A");
    return filtered.map(processItem).toList();
}

var items = ["Apfel", "Banane", "Kirsche"];
var result = calculate(items);
```

**Special features:**
- Local functions can access variables of the outer function
- Support closures

**Further reading:**
- [Dart Documentation - Functions](https://dart.dev/guides/language/language-tour#functions)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
def calculate(items) do
    filter_items = fn items, prefix ->
        Enum.filter(items, &String.starts_with?(&1, prefix))
    end
    
    process_item = fn item ->
        String.upcase(item)
    end
    
    filtered = filter_items.(items, "A")
    Enum.map(filtered, process_item)
end

items = ["Apfel", "Banane", "Kirsche"]
result = calculate(items)
```

**Special features:**
- Local functions are defined as anonymous functions
- Can access variables of the outer function (closures)

**Further reading:**
- [Elixir Documentation - Functions](https://elixir-lang.org/getting-started/basic-types.html#functions)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
calculate(Items) ->
    FilterItems = fun(Items, Prefix) ->
        lists:filter(fun(Item) -> 
            string:prefix(Item, Prefix) =/= nomatch 
        end, Items)
    end,
    
    ProcessItem = fun(Item) ->
        string:uppercase(Item)
    end,
    
    Filtered = FilterItems(Items, "A"),
    lists:map(ProcessItem, Filtered).

Items = ["Apfel", "Banane", "Kirsche"],
Result = calculate(Items).
```

**Special features:**
- Local functions are defined as anonymous functions
- Can access variables of the outer function (closures)

**Further reading:**
- [Erlang Documentation - Functions](https://www.erlang.org/doc/reference_manual/functions.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
let calculate items =
    let filterItems items prefix =
        List.filter (fun item -> item.StartsWith(prefix)) items
    
    let processItem item =
        item.ToUpper()
    
    let filtered = filterItems items "A"
    List.map processItem filtered

let items = ["Apfel"; "Banane"; "Kirsche"]
let result = calculate items
```

**Special features:**
- Local functions are defined with `let`
- Can access variables of the outer function

**Further reading:**
- [F# Documentation - Functions](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/functions/)

</TabItem>
<TabItem value="go" label="Go">

```go
func calculate(items []string) []string {
    filterItems := func(items []string, prefix string) []string {
        var filtered []string
        for _, item := range items {
            if strings.HasPrefix(item, prefix) {
                filtered = append(filtered, item)
            }
        }
        return filtered
    }
    
    processItem := func(item string) string {
        return strings.ToUpper(item)
    }
    
    filtered := filterItems(items, "A")
    result := make([]string, len(filtered))
    for i, item := range filtered {
        result[i] = processItem(item)
    }
    return result
}

// Requires: import "strings"
items := []string{"Apfel", "Banane", "Kirsche"}
result := calculate(items)
```

**Special features:**
- Local functions are defined as anonymous functions
- Can access variables of the outer function (closures)

**Further reading:**
- [Go Documentation - Functions](https://go.dev/ref/spec#Function_declarations)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
def calculate(items) {
    def filterItems(items, prefix) {
        items.findAll { it.startsWith(prefix) }
    }
    
    def processItem(item) {
        item.toUpperCase()
    }
    
    def filtered = filterItems(items, "A")
    filtered.collect { processItem(it) }
}

def items = ["Apfel", "Banane", "Kirsche"]
def result = calculate(items)
```

**Special features:**
- Local functions can access variables of the outer function
- Support closures

**Further reading:**
- [Groovy Documentation - Functions](https://groovy-lang.org/closures.html)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
calculate :: [String] -> [String]
calculate items = 
    let filterItems items prefix = filter (isPrefixOf prefix) items
        processItem item = map toUpper item
        filtered = filterItems items "A"
    in map processItem filtered

items = ["Apfel", "Banane", "Kirsche"]
result = calculate items
```

**Special features:**
- Local functions are defined with `let` or `where`
- Can access variables of the outer function

**Further reading:**
- [Haskell Documentation - Functions](https://www.haskell.org/tutorial/functions.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
function calculate(items) {
    function filterItems(items, prefix) {
        return items.filter(item => item.startsWith(prefix));
    }
    
    function processItem(item) {
        return item.toUpperCase();
    }
    
    const filtered = filterItems(items, "A");
    return filtered.map(processItem);
}

const items = ["Apfel", "Banane", "Kirsche"];
const result = calculate(items);
```

**Special features:**
- Local functions can access variables of the outer function (closures)
- Are hoisted to the beginning of the function

**Further reading:**
- [MDN Web Docs - Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
function calculate(items)
    function filter_items(items, prefix)
        filter(item -> startswith(item, prefix), items)
    end
    
    function process_item(item)
        uppercase(item)
    end
    
    filtered = filter_items(items, "A")
    map(process_item, filtered)
end

items = ["Apfel", "Banane", "Kirsche"]
result = calculate(items)
```

**Special features:**
- Local functions can access variables of the outer function
- Support closures

**Further reading:**
- [Julia Documentation - Functions](https://docs.julialang.org/en/v1/manual/functions/)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Local Functions
fun calculate(items: list<string>): list<string>
  // Local helper function
  fun filter-items(xs: list<string>, prefix: string): list<string>
    xs.filter fn(item) { item.starts-with(prefix) }

  fun process-item(item: string): string
    item.to-upper

  val filtered = filter-items(items, "A")
  filtered.map(process-item)

val items = ["Apfel", "Banane", "Kirsche"]
val result = calculate(items) // ["APFEL"]
```

**Special features:**
- Local functions are defined with `fun` within another function
- Have access to variables of the enclosing function (closures)
- Can be recursive
- Serve to encapsulate helper logic

**Further reading:**
- [Koka Language Guide - Functions](https://koka-lang.github.io/koka/doc/book.html#sec-functions)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
fun calculate(items: List<String>): List<String> {
    fun filterItems(items: List<String>, prefix: String): List<String> {
        return items.filter { it.startsWith(prefix) }
    }
    
    fun processItem(item: String): String {
        return item.uppercase()
    }
    
    val filtered = filterItems(items, "A")
    return filtered.map(::processItem)
}

val items = listOf("Apfel", "Banane", "Kirsche")
val result = calculate(items)
```

**Special features:**
- Local functions can access variables of the outer function
- Support closures

**Further reading:**
- [Kotlin Documentation - Functions](https://kotlinlang.org/docs/functions.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```haskell
def calculate (items : List String) : List String :=
  let filtered := filterItems items "A"
  filtered.map processItem
where
  filterItems (items : List String) (prefix : String) : List String :=
    items.filter (fun item => prefix.isPrefixOf item)
  processItem (item : String) : String :=
    item.map Char.toUpper

let items := ["Apfel", "Banane", "Kirsche"]
#eval calculate items  -- ["APFEL"]
```

**Special features:**
- `where` clause for local function definitions after the function body
- `let ... := ...` for local bindings in the function body
- Local functions can access parameters of the outer function (Closures)

**Further reading:**
- [Lean 4 Documentation - Where Declarations](https://lean-lang.org/lean4/doc/declarations.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
function calculate(items)
    local function filterItems(items, prefix)
        local filtered = {}
        for _, item in ipairs(items) do
            if string.sub(item, 1, #prefix) == prefix then
                table.insert(filtered, item)
            end
        end
        return filtered
    end
    
    local function processItem(item)
        return string.upper(item)
    end
    
    local filtered = filterItems(items, "A")
    local result = {}
    for _, item in ipairs(filtered) do
        table.insert(result, processItem(item))
    end
    return result
end

local items = {"Apfel", "Banane", "Kirsche"}
local result = calculate(items)
```

**Special features:**
- Local functions can access variables of the outer function
- Support Closures

**Further reading:**
- [Lua Documentation - Functions](https://www.lua.org/manual/5.4/manual.html#3.4.11)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
proc calculate(items: seq[string]): seq[string] =
    proc filterItems(items: seq[string], prefix: string): seq[string] =
        result = @[]
        for item in items:
            if item.startsWith(prefix):
                result.add(item)
    
    proc processItem(item: string): string =
        item.toUpper()
    
    let filtered = filterItems(items, "A")
    result = @[]
    for item in filtered:
        result.add(processItem(item))

let items = @["Apfel", "Banane", "Kirsche"]
let result = calculate(items)
```

**Special features:**
- Local functions can access variables of the outer function
- Support Closures

**Further reading:**
- [Nim Documentation - Functions](https://nim-lang.org/docs/manual.html#procedures)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
let calculate items =
    let filter_items items prefix =
        List.filter (fun item -> String.starts_with ~prefix item) items
    in
    let process_item item =
        String.uppercase_ascii item
    in
    let filtered = filter_items items "A" in
    List.map process_item filtered

let items = ["Apfel"; "Banane"; "Kirsche"]
let result = calculate items
```

**Special features:**
- Local functions are defined with `let ... in`
- Can access variables of the outer function

**Further reading:**
- [OCaml Documentation - Functions](https://ocaml.org/manual/expr.html#ss:expr-let)

</TabItem>
<TabItem value="php" label="PHP">

```php
function calculate($items) {
    $filterItems = function($items, $prefix) {
        return array_filter($items, function($item) use ($prefix) {
            return str_starts_with($item, $prefix);
        });
    };
    
    $processItem = function($item) {
        return strtoupper($item);
    };
    
    $filtered = $filterItems($items, "A");
    return array_map($processItem, $filtered);
}

$items = ["Apfel", "Banane", "Kirsche"];
$result = calculate($items);
```

**Special features:**
- Local functions are defined as anonymous functions
- Can access variables of the outer function (with `use`)

**Further reading:**
- [PHP Documentation - Functions](https://www.php.net/manual/en/functions.anonymous.php)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
sub calculate {
    my @items = @_;
    
    sub filter_items {
        my ($items, $prefix) = @_;
        return grep { substr($_, 0, length($prefix)) eq $prefix } @$items;
    }
    
    sub process_item {
        my $item = shift;
        return uc($item);
    }
    
    my @filtered = filter_items(\@items, "A");
    return map { process_item($_) } @filtered;
}

my @items = ("Apfel", "Banane", "Kirsche");
my @result = calculate(@items);
```

**Special features:**
- Local functions can access variables of the outer function
- Support Closures

**Further reading:**
- [Perl Documentation - Functions](https://perldoc.perl.org/perlsub)

</TabItem>
<TabItem value="python" label="Python">

```python
def calculate(items):
    def filter_items(items, prefix):
        return [item for item in items if item.startswith(prefix)]
    
    def process_item(item):
        return item.upper()
    
    filtered = filter_items(items, "A")
    return [process_item(item) for item in filtered]

items = ["Apfel", "Banane", "Kirsche"]
result = calculate(items)
```

**Special features:**
- Local functions can access variables of the outer function (Closures)
- Can be called after definition, even if they are defined later in the code

**Further reading:**
- [Python Documentation - Nested Functions](https://docs.python.org/3/tutorial/controlflow.html#defining-functions)

</TabItem>
<TabItem value="r" label="R">

```r
calculate <- function(items) {
    filter_items <- function(items, prefix) {
        items[startsWith(items, prefix)]
    }
    
    process_item <- function(item) {
        toupper(item)
    }
    
    filtered <- filter_items(items, "A")
    sapply(filtered, process_item)
}

items <- c("Apfel", "Banane", "Kirsche")
result <- calculate(items)
```

**Special features:**
- Local functions can access variables of the outer function
- Support Closures

**Further reading:**
- [R Documentation - Functions](https://cran.r-project.org/doc/manuals/r-release/R-intro.html#Functions)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
(define (calculate items)
    (define (filter-items items prefix)
        (filter (lambda (item) (string-prefix? item prefix)) items))
    
    (define (process-item item)
        (string-upcase item))
    
    (define filtered (filter-items items "A"))
    (map process-item filtered))

(define items '("Apfel" "Banane" "Kirsche"))
(define result (calculate items))
```

**Special features:**
- Local functions are defined with `define` inside the function
- Can access variables of the outer function

**Further reading:**
- [Racket Documentation - Functions](https://docs.racket-lang.org/guide/define.html)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
def calculate(items)
    def filter_items(items, prefix)
        items.select { |item| item.start_with?(prefix) }
    end
    
    def process_item(item)
        item.upcase
    end
    
    filtered = filter_items(items, "A")
    filtered.map { |item| process_item(item) }
end

items = ["Apfel", "Banane", "Kirsche"]
result = calculate(items)
```

**Special features:**
- Local functions can access variables of the outer function
- Support Closures

**Further reading:**
- [Ruby Documentation - Methods](https://docs.ruby-lang.org/en/master/syntax/methods_rdoc.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
fn calculate(items: Vec<&str>) -> Vec<String> {
    fn filter_items(items: &[&str], prefix: &str) -> Vec<&str> {
        items.iter().filter(|item| item.starts_with(prefix)).copied().collect()
    }
    
    fn process_item(item: &str) -> String {
        item.to_uppercase()
    }
    
    let filtered = filter_items(&items, "A");
    filtered.iter().map(|item| process_item(item)).collect()
}

let items = vec!["Apfel", "Banane", "Kirsche"];
let result = calculate(items);
```

**Special features:**
- Local functions can access variables of the outer function
- Support Closures

**Further reading:**
- [Rust Book - Functions](https://doc.rust-lang.org/book/ch03-03-functions.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
def calculate(items: List[String]): List[String] = {
    def filterItems(items: List[String], prefix: String): List[String] = {
        items.filter(_.startsWith(prefix))
    }
    
    def processItem(item: String): String = {
        item.toUpperCase
    }
    
    val filtered = filterItems(items, "A")
    filtered.map(processItem)
}

val items = List("Apfel", "Banane", "Kirsche")
val result = calculate(items)
```

**Special features:**
- Local functions can access variables of the outer function
- Support Closures

**Further reading:**
- [Scala Documentation - Functions](https://docs.scala-lang.org/tour/functions.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
(define (calculate items)
    (define (filter-items items prefix)
        (filter (lambda (item) (string-prefix? prefix item)) items))

    (define (process-item item)
        (string-upcase item))

    (define filtered (filter-items items "A"))
    (map process-item filtered))

(define items '("Apfel" "Banane" "Kirsche"))
(define result (calculate items))
```

**Special features:**
- Local functions are defined with `define` inside the function
- Access to variables of the outer function is possible

**Further reading:**
- [Scheme Documentation - Functions](https://www.scheme.com/tspl4/start.html#./start:h0)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
func calculate(items: [String]) -> [String] {
    func filterItems(items: [String], prefix: String) -> [String] {
        return items.filter { $0.hasPrefix(prefix) }
    }
    
    func processItem(item: String) -> String {
        return item.uppercased()
    }
    
    let filtered = filterItems(items: items, prefix: "A")
    return filtered.map(processItem)
}

let items = ["Apfel", "Banane", "Kirsche"]
let result = calculate(items: items)
```

**Special features:**
- Local functions can access variables of the outer function
- Support Closures

**Further reading:**
- [Swift Documentation - Functions](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/functions/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
function calculate(items: string[]): string[] {
    function filterItems(items: string[], prefix: string): string[] {
        return items.filter(item => item.startsWith(prefix));
    }
    
    function processItem(item: string): string {
        return item.toUpperCase();
    }
    
    const filtered = filterItems(items, "A");
    return filtered.map(processItem);
}

const items = ["Apfel", "Banane", "Kirsche"];
const result = calculate(items);
```

**Special features:**
- Local functions can access variables of the outer function (Closures)
- Are hoisted to the beginning of the function
- Support full type annotations

**Further reading:**
- [TypeScript Handbook - Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
Function Calculate(items As String()) As String()
    Function FilterItems(items As String(), prefix As String) As String()
        Return items.Where(Function(item) item.StartsWith(prefix)).ToArray()
    End Function
    
    Function ProcessItem(item As String) As String
        Return item.ToUpper()
    End Function
    
    Dim filtered = FilterItems(items, "A")
    Return filtered.Select(Function(item) ProcessItem(item)).ToArray()
End Function

' Requires: Imports System.Linq
Dim items As String() = {"Apfel", "Banane", "Kirsche"}
Dim result As String() = Calculate(items)
```

**Special features:**
- Local functions (since VB.NET 16.0)
- Can access variables of the outer function
- Can be called before their definition

**Further reading:**
- [Microsoft VB.NET Documentation - Local Functions](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/procedures/local-functions)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Local functions with letfn
(defn process [items]
  (letfn [(double-val [x] (* x 2))
          (format-val [x] (str "Wert: " x))]
    (map (comp format-val double-val) items)))

(process [1 2 3])  ; ("Wert: 2" "Wert: 4" "Wert: 6")

;; letfn allows mutual recursion
(letfn [(even? [n] (if (zero? n) true (odd? (dec n))))
        (odd? [n] (if (zero? n) false (even? (dec n))))]
  (even? 10))  ; true
```

**Special features:**
- `letfn` for local function definitions
- Allows mutual recursion between local functions
- Alternative: `let` with `fn` for simple local functions

**Further reading:**
- [Clojure Documentation - Special Forms](https://clojure.org/reference/special_forms#letfn)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; flet (non-recursive local functions)
(flet ((square (x) (* x x))
       (double (x) (* x 2)))
  (+ (square 3) (double 4)))  ; 17

;; labels (recursive local functions)
(labels ((factorial (n)
           (if (<= n 1) 1
               (* n (factorial (1- n))))))
  (factorial 5))  ; 120
```

**Special features:**
- `flet` for non-recursive local functions (cannot call themselves)
- `labels` for recursive local functions (can call themselves and each other)
- Local functions can form closures over the surrounding environment

**Further reading:**
- [Common Lisp HyperSpec - flet](http://www.lispworks.com/documentation/HyperSpec/Body/s_flet_.htm)

</TabItem>
<TabItem value="d" label="D">

```d
// Local Functions (nested functions)
int calculate(int x, int y) {
    // Local helper function
    int square(int n) {
        return n * n;
    }

    int add(int a, int b) {
        return a + b;
    }

    return add(square(x), square(y));
}

int result = calculate(3, 4);  // 25
```

**Special features:**
- Functions can be defined inside other functions
- Local functions have access to the surrounding scope (Closure)
- Can be passed as delegates to other functions
- Supports arbitrary nesting depth

**Further reading:**
- [D Language Specification - Nested Functions](https://dlang.org/spec/function.html#nested)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Local functions in let expressions
fibonacci : Int -> Int
fibonacci n =
    let
        fib a b count =
            if count <= 0 then a
            else fib b (a + b) (count - 1)
    in
    fib 0 1 n
```

**Special features:**
- Local functions are defined in `let ... in`
- Have access to the surrounding scope (Closures)
- Can be recursive
- Not visible outside the `let` block

**Further reading:**
- [Elm Documentation - Let Expressions](https://guide.elm-lang.org/core_language.html)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Local functions with CONTAINS
subroutine process(values, n)
    integer, intent(in) :: n
    real, intent(inout) :: values(n)
    integer :: i

    do i = 1, n
        values(i) = transform(values(i))
    end do

contains
    function transform(x) result(res)
        real, intent(in) :: x
        real :: res
        res = x * 2.0 + 1.0
    end function transform
end subroutine process
```

**Special features:**
- Internal procedures are defined after `CONTAINS`
- Have access to variables of the surrounding procedure (Host Association)
- Only visible within the surrounding procedure

**Further reading:**
- [Fortran Wiki - Internal procedures](https://fortranwiki.org/fortran/show/Internal+procedures)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Local functions with where
circleArea : Double -> Double
circleArea radius = pi * square radius
  where
    square : Double -> Double
    square x = x * x

-- Local functions with let
compute : Int -> Int
compute n =
    let double : Int -> Int
        double x = x * 2
    in double n + double (n + 1)
```

**Special features:**
- `where` clauses define local functions at the end of a definition
- `let` expressions define local functions inline
- Local functions have access to outer bindings

**Further reading:**
- [Idris 2 Documentation - Where Clauses](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
function result = main()
    result = helper(5);
end

% Local function (only accessible in this file)
function y = helper(x)
    y = x * 2;
end
```

**Special features:**
- Local functions are defined at the end of the file
- Only accessible within the file
- Supported in scripts since R2016b

**Further reading:**
- [MATLAB Documentation - Local Functions](https://www.mathworks.com/help/matlab/matlab_prog/local-functions.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
procedure Outer;
var
  x: Integer;

  function Square(n: Integer): Integer;
  begin
    Result := n * n;
  end;

  procedure PrintResult(n: Integer);
  begin
    WriteLn('Ergebnis: ', Square(n));
  end;

begin
  x := 5;
  PrintResult(x);
end;
```

**Special features:**
- Nested functions/procedures possible at any depth
- Access to variables of the outer function (Lexical Scoping)
- Must be declared before the `begin` block of the outer function

**Further reading:**
- [Free Pascal Documentation - Nested Procedures](https://www.freepascal.org/docs-html/ref/refch14.html)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
function result = main()
    result = helper(5);
end

function result = helper(x)
    result = x * 2;
end
```

**Special features:**
- Local functions are defined at the end of the file
- Only visible within the same file
- Main function must be the first function in the file

**Further reading:**
- [GNU Octave Documentation - Functions](https://octave.org/doc/v8.1.0/Functions-and-Scripts.html)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
outer[] := Module[{inner},
    inner[x_] := x * 2;
    inner[5] + inner[10]
]

outer[]  (* 30 *)
```

**Special features:**
- Local functions can be defined in `Module[]`
- They are only visible within the module

**Further reading:**
- [Wolfram Language Documentation - Module](https://reference.wolfram.com/language/ref/Module.html)

</TabItem>
</Tabs>

## 7.1.5. Lambda with Receiver

Lambda expressions that are called with a receiver object. The receiver is available as `this` within the lambda expression, which allows calling methods of the receiver directly without explicitly referencing the object.

### Languages {#sprachen}

<Tabs availableTabs={['kotlin']}>
<TabItem value="kotlin" label="Kotlin">

```kotlin
class StringBuilder {
    private val items = mutableListOf<String>()
    
    fun append(item: String) {
        items.add(item)
    }
    
    fun build(): String {
        return items.joinToString(", ")
    }
}

fun buildString(block: StringBuilder.() -> Unit): String {
    val sb = StringBuilder()
    sb.block()
    return sb.build()
}

val result = buildString {
    append("Apfel")
    append("Banane")
    append("Kirsche")
}
```

**Special features:**
- Lambda with Receiver was introduced in Kotlin 1.0
- Enables creating DSL-like syntax
- The receiver is available as `this` within the lambda expression

**Further reading:**
- [Kotlin Documentation - Lambda with Receiver](https://kotlinlang.org/docs/lambdas.html#function-literals-with-receiver)

</TabItem>
</Tabs>


## 7.1.6. Functions vs. Subroutines

Distinction between functions (which return a value) and subroutines/procedures (which do not return a value). Some languages explicitly distinguish between these two concepts.

### Languages {#sprachen}

<Tabs availableTabs={['ada', 'fortran', 'mercury', 'object-pascal', 'vbnet']}>
<TabItem value="ada" label="Ada">

```ada
-- Function (returns a value)
function Add(a, b: Integer) return Integer is
begin
    return a + b;
end Add;

-- Procedure (does not return a value)
procedure Print_Sum(a, b: Integer) is
    Sum: Integer;
begin
    Sum := a + b;
    Put_Line(Integer'Image(Sum));
end Print_Sum;

Result : Integer := Add(5, 3);
Print_Sum(5, 3);
```

**Special features:**
- Functions must have a return type
- Procedures do not return a value
- Both can have parameters

**Further reading:**
- [Ada Documentation - Subprograms](https://learn.adacore.com/courses/intro-to-ada/chapters/subprograms.html)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Function (returns a value)
function Add(a, b) result(sum)
    integer, intent(in) :: a, b
    integer :: sum
    sum = a + b
end function Add

! Subroutine (does not return a value)
subroutine Print_Sum(a, b)
    integer, intent(in) :: a, b
    integer :: sum
    sum = a + b
    print *, sum
end subroutine Print_Sum

integer :: result
result = Add(5, 3)
call Print_Sum(5, 3)
```

**Special features:**
- Functions must have a return type
- Subroutines do not return a value
- Subroutines are called with `call`

**Further reading:**
- [Fortran Documentation - Functions and Subroutines](https://gcc.gnu.org/onlinedocs/gfortran/Function.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Function (returns a value)
:- func add(int, int) = int.
add(A, B) = A + B.

% Predicate (does not return a value, uses output parameters)
:- pred print_sum(int::in, int::in, io::di, io::uo) is det.
print_sum(A, B, !IO) :-
    Sum = A + B,
    io.write_int(Sum, !IO),
    io.nl(!IO).
```

**Special features:**
- Functions (`func`) return a value
- Predicates (`pred`) use output parameters instead of return values
- Determinism declaration required (`is det`, `is semidet`, etc.)
- `!IO` is a state variable pair for I/O threading

**Further reading:**
- [Mercury Language Reference - Functions](https://mercurylang.org/information/doc-latest/mercury_ref/Functions.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Function (returns a value)
function Add(a, b: Integer): Integer;
begin
    Result := a + b;
end;

// Procedure (does not return a value)
procedure PrintSum(a, b: Integer);
var
    Sum: Integer;
begin
    Sum := a + b;
    WriteLn(Sum);
end;

var
    Result: Integer;
begin
    Result := Add(5, 3);
    PrintSum(5, 3);
end.
```

**Special features:**
- Functions must have a return type
- Procedures do not return a value
- Both can have parameters

**Further reading:**
- [Object Pascal Documentation - Procedures and Functions](https://docwiki.embarcadero.com/RADStudio/en/Procedures_and_Functions)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Function (returns a value)
Function Add(a As Integer, b As Integer) As Integer
    Return a + b
End Function

' Subroutine (does not return a value)
Sub PrintSum(a As Integer, b As Integer)
    Dim sum As Integer = a + b
    Console.WriteLine(sum)
End Sub

Dim result As Integer = Add(5, 3)
PrintSum(5, 3)
```

**Special features:**
- Functions must have a return type
- Subroutines do not return a value
- Both can have parameters

**Further reading:**
- [Microsoft VB.NET Documentation - Procedures](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/procedures/)

</TabItem>
</Tabs>


## 7.1.7. Default Parameters

Function parameters can be given default values. If no value is passed for a parameter when calling, the default value is used.

### Languages {#sprachen}

<Tabs availableTabs={['carbon', 'common-lisp', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'elixir', 'groovy', 'haxe', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'matlab', 'nim', 'object-pascal', 'ocaml', 'odin', 'php', 'python', 'r', 'racket', 'ruby', 'scala', 'swift', 'typescript', 'v', 'vbnet', 'wolfram-language']} yellowTabs={['fortran']} orangeTabs={['clojure', 'java', 'lua', 'octave', 'rust', 'zig']}>
<TabItem value="carbon" label="Carbon">

```cpp
fn Greet(name: String, greeting: String = "Hallo") -> String {
    return greeting + ", " + name + "!";
}

var result1 = Greet("Welt");
var result2 = Greet("Welt", "Guten Tag");
```

**Special features:**
- Experimental language, syntax may still change
- Supports Default Parameters

**Further reading:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
def greet(name : String, greeting : String = "Hallo") : String
  "#{greeting}, #{name}!"
end

result1 = greet("Welt")
result2 = greet("Welt", "Guten Tag")
```

**Special features:**
- Supports Default Parameters
- Ruby-like syntax

**Further reading:**
- [Crystal Documentation - Default Arguments](https://crystal-lang.org/reference/1.11/syntax_and_semantics/default_and_named_arguments.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
string Greet(string name, string greeting = "Hallo")
{
    return $"{greeting}, {name}!";
}

string result1 = Greet("Welt");
string result2 = Greet("Welt", "Guten Tag");
```

**Special features:**
- Supports Default Parameters since C# 4.0
- Default Parameters must be at the end of the parameter list

**Further reading:**
- [Microsoft C# Documentation - Named and Optional Arguments](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/named-and-optional-arguments)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
#include <string>

std::string Greet(const std::string& name, const std::string& greeting = "Hallo") {
    return greeting + ", " + name + "!";
}

std::string result1 = Greet("Welt");
std::string result2 = Greet("Welt", "Guten Tag");
```

**Special features:**
- Supports Default Parameters since C++98
- Default Parameters must be at the end of the parameter list

**Further reading:**
- [cppreference.com - Default arguments](https://en.cppreference.com/w/cpp/language/default_arguments)

</TabItem>
<TabItem value="d" label="D">

```d
string greet(string name, string greeting = "Hallo") {
    return greeting ~ ", " ~ name ~ "!";
}

string result1 = greet("Welt");
string result2 = greet("Welt", "Guten Tag");
```

**Special features:**
- Supports Default Parameters
- Default Parameters must be at the end of the parameter list

**Further reading:**
- [D Language Specification - Default Function Arguments](https://dlang.org/spec/function.html#default-arguments)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
String greet(String name, [String greeting = "Hallo"]) {
    return "$greeting, $name!";
}

String result1 = greet("Welt");
String result2 = greet("Welt", "Guten Tag");
```

**Special features:**
- Supports Default Parameters via optional parameters with `[]`
- Default Parameters must be at the end of the parameter list

**Further reading:**
- [Dart Documentation - Optional Parameters](https://dart.dev/guides/language/language-tour#optional-parameters)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
def greet(name, greeting = "Hallo") {
    "$greeting, $name!"
}

def result1 = greet("Welt")
def result2 = greet("Welt", "Guten Tag")
```

**Special features:**
- Supports Default Parameters
- Default Parameters must be at the end of the parameter list

**Further reading:**
- [Groovy Documentation - Methods](https://groovy-lang.org/structure.html#_methods)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
function greet(name: String, ?greeting: String = "Hallo"): String {
    return greeting + ", " + name + "!";
}

var result1 = greet("Welt");
var result2 = greet("Welt", "Guten Tag");
```

**Special features:**
- Supports Default Parameters via optional parameters with `?`
- Cross-platform compilation

**Further reading:**
- [Haxe Documentation - Optional Arguments](https://haxe.org/manual/lf-function-arguments.html#optional-arguments)

</TabItem>
<TabItem value="java" label="Java">

```java
static String greet(String name, String greeting) {
    if (greeting == null) {
        greeting = "Hallo";
    }
    return greeting + ", " + name + "!";
}

// Java does not support Default Parameters directly
// Workaround: Method Overloading
static String greet(String name) {
    return greet(name, "Hallo");
}

String result1 = greet("Welt");
String result2 = greet("Welt", "Guten Tag");
```

**Special features:**
- Java does not support Default Parameters directly
- Workaround: Use Method Overloading

**Further reading:**
- [Oracle Java Documentation - Methods](https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
function greet(name, greeting = "Hallo") {
    return `${greeting}, ${name}!`;
}

const result1 = greet("Welt");
const result2 = greet("Welt", "Guten Tag");
```

**Special features:**
- Supports Default Parameters since ES6/ES2015
- Default Parameters must be at the end of the parameter list

**Further reading:**
- [MDN Web Docs - Default Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
function greet(name; greeting = "Hallo")
    "$greeting, $name!"
end

result1 = greet("Welt")
result2 = greet("Welt", greeting = "Guten Tag")
```

**Special features:**
- Supports Default Parameters via Keyword Arguments
- Default Parameters are separated with `;`

**Further reading:**
- [Julia Documentation - Keyword Arguments](https://docs.julialang.org/en/v1/manual/functions/#Keyword-Arguments)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Default Parameters
fun greet(name: string, greeting: string = "Hallo"): string
  greeting ++ ", " ++ name ++ "!"

val result1 = greet("Welt")                    // "Hallo, Welt!"
val result2 = greet("Welt", "Guten Tag")       // "Guten Tag, Welt!"

// Multiple Default Parameters
fun create-point(x: int = 0, y: int = 0): (int, int)
  (x, y)

val origin = create-point()       // (0, 0)
val point  = create-point(5)      // (5, 0)
val point2 = create-point(5, 10)  // (5, 10)
```

**Special features:**
- Default values are specified with `=` after the parameter type
- Parameters with default values can be omitted when calling
- Can be combined with Named Parameters

**Further reading:**
- [Koka Language Guide - Functions](https://koka-lang.github.io/koka/doc/book.html#sec-functions)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
fun greet(name: String, greeting: String = "Hallo"): String {
    return "$greeting, $name!"
}

val result1 = greet("Welt")
val result2 = greet("Welt", "Guten Tag")
```

**Special features:**
- Supports Default Parameters since Kotlin 1.0
- Default Parameters must be at the end of the parameter list

**Further reading:**
- [Kotlin Documentation - Default Arguments](https://kotlinlang.org/docs/functions.html#default-arguments)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```haskell
def greet (name : String) (greeting : String := "Hallo") : String :=
  s!"{greeting}, {name}!"

#eval greet "Welt"               -- "Hallo, Welt!"
#eval greet "Welt" "Guten Tag"   -- "Guten Tag, Welt!"
```

**Special features:**
- Default values with `:= value` in the parameter list
- Default Parameters can be at any position
- Can be combined with Named Parameters

**Further reading:**
- [Lean 4 Documentation - Default Arguments](https://lean-lang.org/lean4/doc/functions.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
function greet(name, greeting)
    greeting = greeting or "Hallo"
    return greeting .. ", " .. name .. "!"
end

local result1 = greet("Welt")
local result2 = greet("Welt", "Guten Tag")
```

**Special features:**
- Lua does not support Default Parameters directly
- Workaround: Use `or` operator

**Further reading:**
- [Lua Documentation - Functions](https://www.lua.org/manual/5.4/manual.html#3.4.11)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
proc greet(name: string, greeting: string = "Hallo"): string =
    greeting & ", " & name & "!"

let result1 = greet("Welt")
let result2 = greet("Welt", "Guten Tag")
```

**Special features:**
- Supports Default Parameters
- Default Parameters must be at the end of the parameter list

**Further reading:**
- [Nim Documentation - Procedures](https://nim-lang.org/docs/manual.html#procedures)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
function Greet(name: string; greeting: string = 'Hallo'): string;
begin
    Result := greeting + ', ' + name + '!';
end;

var
    result1, result2: string;
begin
    result1 := Greet('Welt');
    result2 := Greet('Welt', 'Guten Tag');
end.
```

**Special features:**
- Supports Default Parameters
- Default Parameters must be at the end of the parameter list

**Further reading:**
- [Object Pascal Documentation - Default Parameters](https://docwiki.embarcadero.com/RADStudio/en/Default_Parameters)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
let greet ?(greeting = "Hallo") name =
    greeting ^ ", " ^ name ^ "!"

let result1 = greet "Welt"
let result2 = greet ~greeting:"Guten Tag" "Welt"
```

**Special features:**
- Supports Default Parameters via optional parameters with `?`
- Default Parameters can be passed in any order

**Further reading:**
- [OCaml Documentation - Optional Arguments](https://ocaml.org/docs/first-hour#optional-arguments)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
greet :: proc(name: string, greeting: string = "Hallo") -> string {
    return fmt.tprintf("%s, %s!", greeting, name)
}

result1 := greet("Welt")
result2 := greet("Welt", "Guten Tag")
```

**Special features:**
- Supports Default Parameters
- Default Parameters must be at the end of the parameter list

**Further reading:**
- [Odin Documentation - Procedures](https://odin-lang.org/docs/overview/#procedures)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
function greet($name, $greeting = "Hallo") {
    return "$greeting, $name!";
}

$result1 = greet("Welt");
$result2 = greet("Welt", "Guten Tag");
```

**Special features:**
- Supports Default Parameters since PHP 4.0
- Default Parameters must be at the end of the parameter list

**Further reading:**
- [PHP Documentation - Function Arguments](https://www.php.net/manual/en/functions.arguments.php#functions.arguments.default)

</TabItem>
<TabItem value="python" label="Python">

```python
def greet(name, greeting="Hallo"):
    return f"{greeting}, {name}!"

result1 = greet("Welt")
result2 = greet("Welt", "Guten Tag")
```

**Special features:**
- Supports Default Parameters since Python 1.0
- Default Parameters must be at the end of the parameter list

**Further reading:**
- [Python Documentation - Default Argument Values](https://docs.python.org/3/tutorial/controlflow.html#default-argument-values)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
def greet(name, greeting = "Hallo")
    "#{greeting}, #{name}!"
end

result1 = greet("Welt")
result2 = greet("Welt", "Guten Tag")
```

**Special features:**
- Supports Default Parameters since Ruby 1.0
- Default Parameters must be at the end of the parameter list

**Further reading:**
- [Ruby Documentation - Methods](https://docs.ruby-lang.org/en/master/syntax/methods_rdoc.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
fn greet(name: &str, greeting: Option<&str>) -> String {
    let greeting = greeting.unwrap_or("Hallo");
    format!("{}, {}!", greeting, name)
}

let result1 = greet("Welt", None);
let result2 = greet("Welt", Some("Guten Tag"));
```

**Special features:**
- Rust does not support Default Parameters directly
- Workaround: Use `Option<T>`

**Further reading:**
- [Rust Book - Functions](https://doc.rust-lang.org/book/ch03-03-functions.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
def greet(name: String, greeting: String = "Hallo"): String = {
    s"$greeting, $name!"
}

val result1 = greet("Welt")
val result2 = greet("Welt", "Guten Tag")
```

**Special features:**
- Supports Default Parameters since Scala 2.0
- Default Parameters must be at the end of the parameter list

**Further reading:**
- [Scala Documentation - Default Parameter Values](https://docs.scala-lang.org/tour/default-parameter-values.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
func greet(name: String, greeting: String = "Hallo") -> String {
    return "\(greeting), \(name)!"
}

let result1 = greet(name: "Welt")
let result2 = greet(name: "Welt", greeting: "Guten Tag")
```

**Special features:**
- Supports Default Parameters since Swift 1.0
- Default Parameters can be at any position (not just at the end)

**Further reading:**
- [Swift Documentation - Functions](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/functions/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
function greet(name: string, greeting: string = "Hallo"): string {
    return `${greeting}, ${name}!`;
}

const result1 = greet("Welt");
const result2 = greet("Welt", "Guten Tag");
```

**Special features:**
- Supports Default Parameters since ES6/ES2015
- Default Parameters must be at the end of the parameter list

**Further reading:**
- [TypeScript Handbook - Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
Function Greet(name As String, Optional greeting As String = "Hallo") As String
    Return greeting & ", " & name & "!"
End Function

Dim result1 As String = Greet("Welt")
Dim result2 As String = Greet("Welt", "Guten Tag")
```

**Special features:**
- Supports Default Parameters via `Optional` keyword
- Default Parameters must be at the end of the parameter list

**Further reading:**
- [Microsoft VB.NET Documentation - Optional Parameters](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/procedures/optional-parameters)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
fn greet(name: []const u8, greeting: ?[]const u8) []const u8 {
    const g = greeting orelse "Hallo";
    // Implementation would go here
    return name;
}

const result1 = greet("Welt", null);
const result2 = greet("Welt", "Guten Tag");
```

**Special features:**
- Zig does not support Default Parameters directly
- Workaround: Use optional parameters with `?`

**Further reading:**
- [Zig Documentation - Functions](https://ziglang.org/documentation/0.11.0/#Functions)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Default Parameters via Multi-Arity
(defn greet
  ([name] (greet name "Hello"))
  ([name greeting] (str greeting ", " name "!")))

(greet "Alice")           ; "Hello, Alice!"
(greet "Alice" "Hallo")   ; "Hallo, Alice!"

;; Alternative: Map Destructuring with Defaults
(defn connect [{:keys [host port timeout]
                :or {host "localhost" port 8080 timeout 5000}}]
  (str host ":" port " (timeout: " timeout ")"))

(connect {})                    ; "localhost:8080 (timeout: 5000)"
(connect {:port 3000})          ; "localhost:3000 (timeout: 5000)"
```

**Special features:**
- Multi-arity functions as a replacement for default parameters
- Map destructuring with `:or` for named defaults
- No direct keyword argument syntax like in Python

**Further reading:**
- [Clojure Documentation - Functions](https://clojure.org/guides/learn/functions#_multi_arity_functions)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Default Parameters with &optional
(defun greet (name &optional (greeting "Hello"))
  (format nil "~a, ~a!" greeting name))

(greet "World")          ; "Hello, World!"
(greet "World" "Hi")     ; "Hi, World!"

;; supplied-p parameter to check if argument was passed
(defun log-message (msg &optional (level :info level-supplied-p))
  (if level-supplied-p
      (format nil "[~a] ~a (explicit)" level msg)
      (format nil "[~a] ~a (default)" level msg)))
```

**Special features:**
- `&optional` for optional parameters with default values
- `supplied-p` parameter to detect if an argument was passed
- Default values can be arbitrary expressions (evaluated at call time)

**Further reading:**
- [Common Lisp HyperSpec - Ordinary Lambda Lists](http://www.lispworks.com/documentation/HyperSpec/Body/03_da.htm)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
defmodule Greeter do
  def greet(name, greeting \\ "Hallo") do
    "#{greeting}, #{name}!"
  end

  def create_point(x \\ 0, y \\ 0) do
    {x, y}
  end
end

Greeter.greet("Welt")          # "Hallo, Welt!"
Greeter.greet("Welt", "Hi")    # "Hi, Welt!"
Greeter.create_point()         # {0, 0}
Greeter.create_point(1, 2)     # {1, 2}
```

**Special features:**
- Default values are defined with `\\`
- Internally generates multiple function clauses with different arities
- For functions with multiple clauses, a function head without body must be declared

**Further reading:**
- [Elixir Documentation - Default Arguments](https://elixir-lang.org/getting-started/modules-and-functions.html#default-arguments)

</TabItem>

<TabItem value="fortran" label="Fortran">

```fortran
! Optional parameters with OPTIONAL and PRESENT()
subroutine greet(name, greeting)
    character(len=*), intent(in) :: name
    character(len=*), intent(in), optional :: greeting

    if (present(greeting)) then
        print *, greeting, " ", name
    else
        print *, "Hallo ", name
    end if
end subroutine

call greet("Welt")              ! "Hallo Welt"
call greet("Welt", "Guten Tag") ! "Guten Tag Welt"
```

**Special features:**
- `OPTIONAL` attribute for optional parameters
- `PRESENT(arg)` checks if an optional argument was passed
- No actual default value in the signature, but manual check with `PRESENT()`

**Further reading:**
- [Fortran Wiki - Optional Arguments](https://fortranwiki.org/fortran/show/Optional+arguments)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% Default Parameters (since R2019b)
function result = greet(name, greeting)
    arguments
        name string
        greeting string = "Hallo"
    end
    result = greeting + " " + name;
end

greet("Max")          % "Hallo Max"
greet("Max", "Hi")    % "Hi Max"
```

**Special features:**
- `arguments` block for parameter validation and default values (since R2019b)
- Before R2019b: manual check with `nargin`
- Default values are only used for missing arguments

**Further reading:**
- [MATLAB Documentation - Arguments Validation](https://www.mathworks.com/help/matlab/matlab_prog/function-argument-validation-1.html)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
function result = greet(name, greeting)
    if nargin < 2
        greeting = "Hallo";
    end
    result = sprintf("%s, %s!", greeting, name);
end

greet("Welt")          % "Hallo, Welt!"
greet("Welt", "Hi")    % "Hi, Welt!"
```

**Special features:**
- No direct default parameter syntax
- `nargin` returns the number of arguments passed
- Default values are set via `if nargin < n` check

**Further reading:**
- [GNU Octave Documentation - Defining Functions](https://octave.org/doc/v8.1.0/Defining-Functions.html)

</TabItem>
<TabItem value="r" label="R">

```r
greet <- function(name, greeting = "Hallo") {
    paste(greeting, name)
}

result1 <- greet("Anna")           # "Hallo Anna"
result2 <- greet("Anna", "Hi")     # "Hi Anna"
```

**Special features:**
- Default values are specified in the function definition
- Default expressions are evaluated lazily (only when used)
- Default values can reference other parameters

**Further reading:**
- [R Documentation - Function Definition](https://cran.r-project.org/doc/manuals/r-release/R-lang.html#Function-objects)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
(define (greet [name "Welt"])
  (printf "Hallo, ~a!\n" name))

(greet)         ; "Hallo, Welt!"
(greet "Max")   ; "Hallo, Max!"
```

**Special features:**
- Optional parameters are defined in square brackets with default value
- Can be combined with keyword arguments

**Further reading:**
- [Racket Documentation - Function Definitions](https://docs.racket-lang.org/guide/define.html)

</TabItem>
<TabItem value="v" label="V">

```v
// Default Parameters (via struct arguments)
@[params]
struct Config {
    width  int = 800
    height int = 600
    title  string = 'Untitled'
}

fn create_window(c Config) {
    println('${c.title}: ${c.width}x${c.height}')
}

create_window()                          // All defaults
create_window(width: 1920, height: 1080) // Partially overridden
create_window(title: 'Mein Fenster')     // Only title
```

**Special features:**
- Default parameters via `@[params]` struct attribute
- Fields with default values can be omitted when calling
- Named arguments when calling

**Further reading:**
- [V Documentation - Default Field Values](https://github.com/vlang/v/blob/master/doc/docs.md#default-field-values)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Default Parameters with Optional *)
greet[name_: "Welt"] := "Hallo, " <> name <> "!"

greet[]        (* "Hallo, Welt!" *)
greet["Max"]   (* "Hallo, Max!" *)
```

**Special features:**
- `x_: default` defines an optional parameter with default value
- Multiple optional parameters possible

**Further reading:**
- [Wolfram Language Documentation - Optional](https://reference.wolfram.com/language/ref/Optional.html)

</TabItem>
</Tabs>


## 7.1.8. Named Parameters

Function parameters can be explicitly named when calling, which improves readability and allows passing parameters in any order.

### Languages {#sprachen}

<Tabs availableTabs={['carbon', 'common-lisp', 'crystal', 'csharp', 'dart', 'fortran', 'gleam', 'groovy', 'julia', 'koka', 'kotlin', 'lean4', 'matlab', 'nim', 'ocaml', 'odin', 'php', 'python', 'r', 'racket', 'ruby', 'scala', 'swift', 'typescript', 'vbnet']} yellowTabs={['objective-c']} orangeTabs={['lua']}>
<TabItem value="carbon" label="Carbon">

```cpp
fn CreateUser(name: String, age: i32, email: String) -> User {
    // Implementation would go here
    return User{};
}

var user = CreateUser(name: "Max", age: 30, email: "max@example.com");
```

**Special features:**
- Experimental language, syntax may still change
- Supports Named Parameters

**Further reading:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
def create_user(name : String, age : Int32, email : String) : User
  # Implementation würde hier stehen
  User.new
end

user = create_user(name: "Max", age: 30, email: "max@example.com")
```

**Special features:**
- Supports Named Parameters
- Ruby-like syntax

**Further reading:**
- [Crystal Documentation - Named Arguments](https://crystal-lang.org/reference/1.11/syntax_and_semantics/default_and_named_arguments.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
User CreateUser(string name, int age, string email)
{
    // Implementation would go here
    return new User();
}

var user = CreateUser(name: "Max", age: 30, email: "max@example.com");
```

**Special features:**
- Supports Named Parameters since C# 4.0
- Named Parameters can be passed in any order

**Further reading:**
- [Microsoft C# Documentation - Named and Optional Arguments](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/named-and-optional-arguments)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
User createUser({required String name, required int age, required String email}) {
    // Implementation would go here
    return User();
}

var user = createUser(name: "Max", age: 30, email: "max@example.com");
```

**Special features:**
- Supports Named Parameters via `{}` syntax
- `required` keyword for mandatory parameters

**Further reading:**
- [Dart Documentation - Named Parameters](https://dart.dev/guides/language/language-tour#named-parameters)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
def createUser(Map args) {
    def name = args.name
    def age = args.age
    def email = args.email
    // Implementation would go here
    return new User()
}

def user = createUser(name: "Max", age: 30, email: "max@example.com")
```

**Special features:**
- Supports Named Parameters via Map syntax
- Parameters can be passed in any order

**Further reading:**
- [Groovy Documentation - Named Parameters](https://groovy-lang.org/structure.html#_named_parameters)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
function create_user(; name, age, email)
    # Implementation würde hier stehen
    return User()
end

user = create_user(name = "Max", age = 30, email = "max@example.com")
```

**Special features:**
- Supports Named Parameters via Keyword Arguments with `;`
- Named Parameters can be passed in any order

**Further reading:**
- [Julia Documentation - Keyword Arguments](https://docs.julialang.org/en/v1/manual/functions/#Keyword-Arguments)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Named Parameters
fun create-rectangle(width: int, height: int): int
  width * height

// Call with Named Parameters
val area1 = create-rectangle(width = 10, height = 5)   // 50
val area2 = create-rectangle(height = 5, width = 10)   // 50 (order doesn't matter)

// Combination with Default Parameters
fun greet(name: string, greeting: string = "Hallo"): string
  greeting ++ ", " ++ name ++ "!"

val result = greet(greeting = "Guten Tag", name = "Welt") // "Guten Tag, Welt!"
```

**Special features:**
- Named Parameters are specified with `name = value` when calling
- Allow any order of arguments
- Improve readability for functions with many parameters
- Can be combined with Default Parameters

**Further reading:**
- [Koka Language Guide - Functions](https://koka-lang.github.io/koka/doc/book.html#sec-functions)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
fun createUser(name: String, age: Int, email: String): User {
    // Implementation would go here
    return User()
}

val user = createUser(name = "Max", age = 30, email = "max@example.com")
```

**Special features:**
- Supports Named Parameters since Kotlin 1.0
- Named Parameters can be passed in any order

**Further reading:**
- [Kotlin Documentation - Named Arguments](https://kotlinlang.org/docs/functions.html#named-arguments)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```haskell
structure User where
  name : String
  age : Nat
  email : String

def createUser (name : String) (age : Nat) (email : String) : User :=
  { name, age, email }

-- Named Parameters with (param := value)
#eval createUser (name := "Max") (age := 30) (email := "max@example.com")

-- Order can be changed
#eval createUser (email := "max@example.com") (name := "Max") (age := 30)
```

**Special features:**
- Named Parameters with `(parameter := value)` syntax
- Allow arbitrary order of arguments
- Can be combined with Default Parameters
- Improve readability for functions with many parameters

**Further reading:**
- [Lean 4 Documentation - Named Arguments](https://lean-lang.org/lean4/doc/functions.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
function createUser(args)
    local name = args.name
    local age = args.age
    local email = args.email
    -- Implementation would go here
    return {}
end

local user = createUser({name = "Max", age = 30, email = "max@example.com"})
```

**Special features:**
- Lua does not support Named Parameters directly
- Workaround: Use table as parameter

**Further reading:**
- [Lua Documentation - Functions](https://www.lua.org/manual/5.4/manual.html#3.4.11)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
proc createUser(name: string, age: int, email: string): User =
    # Implementation would go here
    User()

let user = createUser(name = "Max", age = 30, email = "max@example.com")
```

**Special features:**
- Supports Named Parameters
- Named Parameters can be passed in any order

**Further reading:**
- [Nim Documentation - Procedures](https://nim-lang.org/docs/manual.html#procedures)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
let create_user ~name ~age ~email =
    (* Implementation would go here *)
    { name; age; email }

let user = create_user ~name:"Max" ~age:30 ~email:"max@example.com"
```

**Special features:**
- Supports Named Parameters via `~` syntax
- Named Parameters can be passed in any order

**Further reading:**
- [OCaml Documentation - Labeled Arguments](https://ocaml.org/docs/first-hour#labeled-arguments)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
create_user :: proc(name: string, age: int, email: string) -> User {
    // Implementation would go here
    return User{}
}

user := create_user(name = "Max", age = 30, email = "max@example.com")
```

**Special features:**
- Supports Named Parameters
- Named Parameters can be passed in any order

**Further reading:**
- [Odin Documentation - Procedures](https://odin-lang.org/docs/overview/#procedures)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
function createUser($name, $age, $email) {
    // Implementation would go here
    return new User();
}

$user = createUser(name: "Max", age: 30, email: "max@example.com");
```

**Special features:**
- Supports Named Parameters since PHP 8.0
- Named Parameters can be passed in any order

**Further reading:**
- [PHP Documentation - Named Arguments](https://www.php.net/manual/en/functions.arguments.php#functions.named-arguments)

</TabItem>
<TabItem value="python" label="Python">

```python
def create_user(name, age, email):
    # Implementation would go here
    return User()

user = create_user(name="Max", age=30, email="max@example.com")
```

**Special features:**
- Supports Named Parameters since Python 1.0
- Named Parameters can be passed in any order

**Further reading:**
- [Python Documentation - Keyword Arguments](https://docs.python.org/3/tutorial/controlflow.html#keyword-arguments)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
def create_user(name:, age:, email:)
    # Implementation would go here
    User.new
end

user = create_user(name: "Max", age: 30, email: "max@example.com")
```

**Special features:**
- Supports Named Parameters via Keyword Arguments (since Ruby 2.0)
- Named Parameters can be passed in any order

**Further reading:**
- [Ruby Documentation - Keyword Arguments](https://docs.ruby-lang.org/en/master/syntax/methods_rdoc.html#label-Keyword+Arguments)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
def createUser(name: String, age: Int, email: String): User = {
    // Implementation would go here
    User()
}

val user = createUser(name = "Max", age = 30, email = "max@example.com")
```

**Special features:**
- Supports Named Parameters since Scala 2.0
- Named Parameters can be passed in any order

**Further reading:**
- [Scala Documentation - Named Arguments](https://docs.scala-lang.org/tour/named-arguments.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
func createUser(name: String, age: Int, email: String) {
    print("\(name), \(age), \(email)")
}

let user = createUser(name: "Max", age: 30, email: "max@example.com")
```

**Special features:**
- Named Parameters (Argument Labels) are standard in Swift
- Arguments must be passed in the defined order
- External and internal parameter names can differ (`func greet(for name: String)`)

**Further reading:**
- [Swift Documentation - Functions](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/functions/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
function createUser(name: string, age: number, email: string): User {
    // Implementation would go here
    return {} as User;
}

const user = createUser(name: "Max", age: 30, email: "max@example.com");
```

**Special features:**
- Supports Named Parameters since ES6/ES2015
- Named Parameters can be passed in any order

**Further reading:**
- [TypeScript Handbook - Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
Function CreateUser(name As String, age As Integer, email As String) As User
    ' Implementation would go here
    Return New User()
End Function

Dim user As User = CreateUser(name:="Max", age:=30, email:="max@example.com")
```

**Special features:**
- Supports Named Parameters since VB.NET 1.0
- Named Parameters can be passed in any order

**Further reading:**
- [Microsoft VB.NET Documentation - Named Arguments](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/procedures/passing-arguments-by-position-and-by-name)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Named Parameters with &key
(defun make-person (&key name age (city "Berlin"))
  (list :name name :age age :city city))

(make-person :name "Alice" :age 30)
;; (:NAME "Alice" :AGE 30 :CITY "Berlin")

(make-person :age 25 :name "Bob" :city "München")
;; (:NAME "Bob" :AGE 25 :CITY "München")
```

**Special features:**
- `&key` for named (Keyword) parameters
- Order of arguments doesn't matter
- Default values and `supplied-p` like with `&optional`
- Can be combined with `&optional` and `&rest`

**Further reading:**
- [Common Lisp HyperSpec - Ordinary Lambda Lists](http://www.lispworks.com/documentation/HyperSpec/Body/03_da.htm)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Named Parameters (Keyword Arguments)
subroutine create_rect(width, height, color)
    real, intent(in) :: width, height
    character(len=*), intent(in) :: color
    print *, width, height, color
end subroutine

! Call with Keyword Arguments
call create_rect(width=10.0, height=20.0, color="rot")
call create_rect(color="blau", height=5.0, width=3.0)
```

**Special features:**
- Keyword Arguments allow arbitrary order of arguments
- Syntax: `parameter_name=value`
- Requires explicit interface (e.g., via Module)

**Further reading:**
- [Fortran Wiki - Keyword Arguments](https://fortranwiki.org/fortran/show/Keyword+arguments)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// Named Parameters (Labelled Arguments)
pub fn replace(in string: String, each pattern: String, with replacement: String) -> String {
  // Implementation
  string
}

// Call with labels
replace(in: "Hello World", each: "World", with: "Gleam")
```

**Special features:**
- Labelled Arguments with `label name: Type` syntax
- Labels are optional when calling
- Improve readability of function calls

**Further reading:**
- [Gleam Documentation - Labelled Arguments](https://tour.gleam.run/functions/labelled-arguments/)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% Named Parameters (since R2021a)
function result = createPoint(options)
    arguments
        options.x double = 0
        options.y double = 0
        options.color string = "red"
    end
    result = sprintf("(%g, %g) in %s", options.x, options.y, options.color);
end

createPoint(x=1, y=2, color="blue")
```

**Special features:**
- Name-value arguments since R2021a with `arguments` block
- Before R2021a: `varargin` with `inputParser` or manual parsing
- Name-value arguments are optional and have default values

**Further reading:**
- [MATLAB Documentation - Name-Value Arguments](https://www.mathworks.com/help/matlab/matlab_prog/function-argument-validation-1.html)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Named Parameters via Selector Labels
- (void)sendMessage:(NSString *)message
         toRecipient:(NSString *)recipient
         withPriority:(int)priority {
    NSLog(@"Sende '%@' an %@ (Priorität: %d)", message, recipient, priority);
}

// Call with named parameters
[self sendMessage:@"Hallo"
      toRecipient:@"Alice"
      withPriority:1];
```

**Special features:**
- Parameter labels are part of the method selector
- Labels are mandatory when calling (not optional)
- Parameter order is fixed (cannot be rearranged)
- Selector-based naming is a core element of the Smalltalk tradition

**Further reading:**
- [Apple Documentation - Defining Classes](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/DefiningClasses/DefiningClasses.html)

</TabItem>
<TabItem value="r" label="R">

```r
create_person <- function(name, age, city) {
    list(name = name, age = age, city = city)
}

# Call with Named Parameters (order doesn't matter)
person <- create_person(age = 30, name = "Anna", city = "Berlin")
```

**Special features:**
- All parameters can be passed by name
- Named Parameters allow arbitrary order
- Partial matching of parameter names possible (e.g., `na` for `name`)

**Further reading:**
- [R Documentation - Function Arguments](https://cran.r-project.org/doc/manuals/r-release/R-lang.html#Argument-matching)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
(define (create-point #:x x #:y y)
  (list x y))

(create-point #:x 3 #:y 4)  ; '(3 4)
(create-point #:y 4 #:x 3)  ; '(3 4) - order doesn't matter
```

**Special features:**
- Keyword arguments with `#:keyword` syntax
- Order of keyword arguments is arbitrary
- Can be combined with default values

**Further reading:**
- [Racket Documentation - Keyword Arguments](https://docs.racket-lang.org/guide/lambda.html)

</TabItem>
</Tabs>


## 7.1.9. Implicit Parameters

Function parameters that are automatically provided from the context.

### Languages {#sprachen}

<Tabs availableTabs={['haskell', 'lean4', 'scala']} orangeTabs={['swift']}>
<TabItem value="haskell" label="Haskell">

```haskell
-- Implicit parameters with ?-syntax
f :: (?x :: Int) => Int -> Int
f y = y + ?x

-- Usage
let ?x = 10 in f 5  -- Result: 15

-- Implicit parameters with type classes
class Show a where
    show :: a -> String

instance Show Int where
    show = show

-- show uses Show instance implicitly
printValue :: (Show a) => a -> IO ()
printValue x = putStrLn (show x)  -- show is implicit
```

**Special features:**
- Implicit parameters with `?` syntax
- Type classes enable implicit parameters via type context
- Implicit parameters must be explicitly declared in type signature
- Provided from lexical context

**Further reading:**
- [Haskell Documentation - Implicit Parameters](https://ghc.gitlab.haskell.org/ghc/doc/users_guide/exts/implicit_parameters.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```haskell
-- Implicit parameters with {}
def identity {α : Type} (x : α) : α := x

-- Typeclass constraint with []
def add [Add α] (x y : α) : α := x + y

-- Auto-bound implicit (α becomes implicit automatically)
def head? (xs : List α) : Option α :=
  xs.head?

-- Instance resolution
#eval add 5 3       -- 8 (Add Nat is automatically chosen)
#eval identity 42   -- 42 (α = Nat is inferred)
```

**Special features:**
- `{x : Type}` for regular implicit parameters (inferred by unifier)
- `[Typeclass α]` for typeclass instances (resolved by instance search)
- `{{x : Type}}` for strictly implicit parameters (only via instance search)
- Auto-bound implicit variables: free type variables become implicit automatically
- Implicit parameters are a core feature of Lean 4

**Further reading:**
- [Lean 4 Documentation - Implicit Arguments](https://lean-lang.org/lean4/doc/typeClasses.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Implicit parameters
def greet(name: String)(implicit greeting: String): String = {
  s"$greeting, $name!"
}

implicit val defaultGreeting: String = "Hello"

greet("Alice")  // Uses defaultGreeting implicitly

// Implicit parameters with type classes
trait Ordering[T] {
  def compare(x: T, y: T): Int
}

def max[T](x: T, y: T)(implicit ord: Ordering[T]): T = {
  if (ord.compare(x, y) > 0) x else y
}

implicit val intOrdering: Ordering[Int] = (x, y) => x.compareTo(y)

max(10, 20)  // Uses intOrdering implicitly
```

**Special features:**
- Implicit parameters with `implicit` keyword
- Implicit values must be available in scope
- Type classes are implemented via implicit parameters
- Can lead to unexpected behavior, so use with caution

**Further reading:**
- [Scala Documentation - Implicit Parameters](https://docs.scala-lang.org/tour/implicit-parameters.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Implicit parameters with default arguments
func greet(name: String, greeting: String = "Hello") -> String {
    return "\(greeting), \(name)!"
}

greet("Alice")  // Uses default "Hello"

// Implicit parameters with protocols
protocol Ordering {
    associatedtype Element
    func compare(_ x: Element, _ y: Element) -> Int
}

func max<T>(_ x: T, _ y: T, using ordering: Ordering) -> T where ordering.Element == T {
    return ordering.compare(x, y) > 0 ? x : y
}

// Swift does not have true implicit parameters like Scala
// Instead, default arguments are used
```

**Special features:**
- No true implicit parameters like in Scala
- Default arguments enable similar functionality
- Protocols enable type-class-like functionality
- Explicit parameter passing is required

**Further reading:**
- [Swift Documentation - Functions](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/thebasics/)

</TabItem>
</Tabs>


## 7.1.10. Variadic Functions

Functions that can accept a variable number of arguments. Enable writing functions that can be called with different numbers of parameters.

### Languages {#sprachen}

<Tabs availableTabs={['c', 'clojure', 'common-lisp', 'cpp', 'csharp', 'd', 'go', 'groovy', 'java', 'javascript', 'julia', 'kotlin', 'lua', 'matlab', 'nim', 'objective-c', 'object-pascal', 'octave', 'odin', 'perl', 'php', 'python', 'r', 'racket', 'ruby', 'scala', 'swift', 'typescript', 'v', 'vbnet', 'wolfram-language']} orangeTabs={['dart', 'haxe', 'ocaml', 'rust', 'zig']}>
<TabItem value="c" label="C">

```c
#include <stdarg.h>
#include <stdio.h>

int sum(int count, ...) {
    va_list args;
    va_start(args, count);
    int total = 0;
    for (int i = 0; i < count; i++) {
        total += va_arg(args, int);
    }
    va_end(args);
    return total;
}

int result = sum(3, 1, 2, 3);
```

**Special features:**
- Supports Variadic Functions via `stdarg.h`
- Requires at least one fixed parameter
- Type-unsafe

**Further reading:**
- [C Documentation - Variadic Functions](https://en.cppreference.com/w/c/variadic)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
int Sum(params int[] numbers)
{
    return numbers.Sum();
}

int result = Sum(1, 2, 3, 4, 5);
```

**Special features:**
- Supports Variadic Functions via `params` keyword
- Type-safe
- Must be at the end of parameter list

**Further reading:**
- [Microsoft C# Documentation - params](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/params)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
#include <initializer_list>
#include <numeric>

int sum(std::initializer_list<int> numbers) {
    return std::accumulate(numbers.begin(), numbers.end(), 0);
}

int result = sum({1, 2, 3, 4, 5});
```

**Special features:**
- Supports Variadic Functions via `std::initializer_list` (since C++11)
- Type-safe
- Alternative: Template Variadic Functions (since C++11)

**Further reading:**
- [cppreference.com - Variadic functions](https://en.cppreference.com/w/cpp/utility/variadic)

</TabItem>
<TabItem value="d" label="D">

```d
int sum(int[] numbers...) {
    return numbers.sum;
}

int result = sum(1, 2, 3, 4, 5);
```

**Special features:**
- Supports Variadic Functions via `...` syntax
- Type-safe
- Must be at the end of parameter list

**Further reading:**
- [D Language Specification - Variadic Functions](https://dlang.org/spec/function.html#variadic-functions)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
int sum(List<int> numbers) {
    return numbers.fold(0, (a, b) => a + b);
}

int result = sum([1, 2, 3, 4, 5]);
```

**Special features:**
- Dart does not support Variadic Functions directly
- Workaround: Use list as parameter

**Further reading:**
- [Dart Documentation - Functions](https://dart.dev/guides/language/language-tour#functions)

</TabItem>
<TabItem value="go" label="Go">

```go
func sum(numbers ...int) int {
    total := 0
    for _, num := range numbers {
        total += num
    }
    return total
}

result := sum(1, 2, 3, 4, 5)
```

**Special features:**
- Supports Variadic Functions via `...` syntax
- Type-safe
- Must be at the end of parameter list

**Further reading:**
- [Go Documentation - Variadic Functions](https://go.dev/ref/spec#Function_types)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
def sum(Object... numbers) {
    numbers.sum()
}

def result = sum(1, 2, 3, 4, 5)
```

**Special features:**
- Supports Variadic Functions via `...` syntax
- Type-safe (with type annotations)

**Further reading:**
- [Groovy Documentation - Methods](https://groovy-lang.org/structure.html#_methods)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
function sum(numbers: Array<Int>): Int {
    var total = 0;
    for (num in numbers) {
        total += num;
    }
    return total;
}

var result = sum([1, 2, 3, 4, 5]);
```

**Special features:**
- Haxe does not support Variadic Functions directly
- Workaround: Use array as parameter

**Further reading:**
- [Haxe Documentation - Functions](https://haxe.org/manual/types-function.html)

</TabItem>
<TabItem value="java" label="Java">

```java
static int sum(int... numbers) {
    int total = 0;
    for (int num : numbers) {
        total += num;
    }
    return total;
}

int result = sum(1, 2, 3, 4, 5);
```

**Special features:**
- Supports Variadic Functions via `...` syntax (since Java 5.0)
- Type-safe
- Must be at the end of parameter list

**Further reading:**
- [Oracle Java Documentation - Variable Arguments](https://docs.oracle.com/javase/tutorial/java/javaOO/arguments.html#varargs)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}

const result = sum(1, 2, 3, 4, 5);
```

**Special features:**
- Supports Variadic Functions via Rest Parameters (since ES6/ES2015)
- Type-safe (with TypeScript)
- Must be at the end of parameter list

**Further reading:**
- [MDN Web Docs - Rest Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
function sum(numbers...)
    total = 0
    for num in numbers
        total += num
    end
    total
end

result = sum(1, 2, 3, 4, 5)
```

**Special features:**
- Supports Variadic Functions via `...` syntax
- Type-safe (with type annotations)
- Must be at the end of parameter list

**Further reading:**
- [Julia Documentation - Varargs Functions](https://docs.julialang.org/en/v1/manual/functions/#Varargs-Functions)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
fun sum(vararg numbers: Int): Int {
    return numbers.sum()
}

val result = sum(1, 2, 3, 4, 5)
```

**Special features:**
- Supports Variadic Functions via `vararg` keyword
- Type-safe
- Must be at the end of parameter list

**Further reading:**
- [Kotlin Documentation - Variable Number of Arguments](https://kotlinlang.org/docs/functions.html#variable-number-of-arguments-varargs)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
function sum(...)
    local numbers = {...}
    local total = 0
    for _, num in ipairs(numbers) do
        total = total + num
    end
    return total
end

local result = sum(1, 2, 3, 4, 5)
```

**Special features:**
- Supports Variadic Functions via `...` syntax
- Type-safe (with type annotations in Lua 5.4+)

**Further reading:**
- [Lua Documentation - Functions](https://www.lua.org/manual/5.4/manual.html#3.4.11)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
proc sum(numbers: varargs[int]): int =
    result = 0
    for num in numbers:
        result += num

let result = sum(1, 2, 3, 4, 5)
```

**Special features:**
- Supports Variadic Functions via `varargs` keyword
- Type-safe
- Must be at the end of parameter list

**Further reading:**
- [Nim Documentation - Procedures](https://nim-lang.org/docs/manual.html#procedures)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
let sum numbers =
    List.fold_left (+) 0 numbers

let result = sum [1; 2; 3; 4; 5]
```

**Special features:**
- OCaml does not support Variadic Functions directly
- Workaround: Use list as parameter

**Further reading:**
- [OCaml Documentation - Functions](https://ocaml.org/docs/first-hour#functions)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
sum :: proc(numbers: ..int) -> int {
    total := 0
    for num in numbers {
        total += num
    }
    return total
}

result := sum(1, 2, 3, 4, 5)
```

**Special features:**
- Supports Variadic Functions via `..` syntax
- Type-safe
- Must be at the end of parameter list

**Further reading:**
- [Odin Documentation - Procedures](https://odin-lang.org/docs/overview/#procedures)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
sub sum {
    my $total = 0;
    foreach my $num (@_) {
        $total += $num;
    }
    return $total;
}

my $result = sum(1, 2, 3, 4, 5);
```

**Special features:**
- Supports Variadic Functions via `@_` array
- All parameters are automatically stored in `@_`

**Further reading:**
- [Perl Documentation - Functions](https://perldoc.perl.org/perlsub)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
function sum(...$numbers) {
    return array_sum($numbers);
}

$result = sum(1, 2, 3, 4, 5);
```

**Special features:**
- Supports Variadic Functions via `...` syntax (since PHP 5.6)
- Type-safe (with type annotations)
- Must be at the end of parameter list

**Further reading:**
- [PHP Documentation - Variable-length argument lists](https://www.php.net/manual/en/functions.arguments.php#functions.variable-arg-list)

</TabItem>
<TabItem value="python" label="Python">

```python
def sum(*numbers):
    return sum(numbers)

result = sum(1, 2, 3, 4, 5)
```

**Special features:**
- Supports Variadic Functions via `*args` syntax
- Type-safe (with type annotations)
- Must be at the end of parameter list

**Further reading:**
- [Python Documentation - Arbitrary Argument Lists](https://docs.python.org/3/tutorial/controlflow.html#arbitrary-argument-lists)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
def sum(*numbers)
    numbers.sum
end

result = sum(1, 2, 3, 4, 5)
```

**Special features:**
- Supports Variadic Functions via `*args` syntax
- Type-safe (with type annotations)
- Must be at the end of parameter list

**Further reading:**
- [Ruby Documentation - Methods](https://docs.ruby-lang.org/en/master/syntax/methods_rdoc.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
fn sum(numbers: &[i32]) -> i32 {
    numbers.iter().sum()
}

let result = sum(&[1, 2, 3, 4, 5]);
```

**Special features:**
- Rust does not support Variadic Functions directly
- Workaround: Use slice as parameter

**Further reading:**
- [Rust Book - Functions](https://doc.rust-lang.org/book/ch03-03-functions.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
def sum(numbers: Int*): Int = {
    numbers.sum
}

val result = sum(1, 2, 3, 4, 5)
```

**Special features:**
- Supports Variadic Functions via `*` syntax
- Type-safe
- Must be at the end of parameter list

**Further reading:**
- [Scala Documentation - Variable Arguments](https://docs.scala-lang.org/tour/varargs.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
func sum(_ numbers: Int...) -> Int {
    return numbers.reduce(0, +)
}

let result = sum(1, 2, 3, 4, 5)
```

**Special features:**
- Supports Variadic Functions via `...` syntax
- Type-safe
- Must be at the end of parameter list

**Further reading:**
- [Swift Documentation - Functions](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/functions/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
function sum(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b, 0);
}

const result = sum(1, 2, 3, 4, 5);
```

**Special features:**
- Supports Variadic Functions via Rest Parameters (since ES6/ES2015)
- Type-safe
- Must be at the end of parameter list

**Further reading:**
- [TypeScript Handbook - Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
Function Sum(ParamArray numbers() As Integer) As Integer
    Return numbers.Sum()
End Function

Dim result As Integer = Sum(1, 2, 3, 4, 5)
```

**Special features:**
- Supports Variadic Functions via `ParamArray` keyword
- Type-safe
- Must be at the end of parameter list

**Further reading:**
- [Microsoft VB.NET Documentation - ParamArray](https://learn.microsoft.com/en-us/dotnet/visual-basic/language-reference/modifiers/paramarray)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
fn sum(numbers: []const i32) i32 {
    var total: i32 = 0;
    for (numbers) |num| {
        total += num;
    }
    return total;
}

const result = sum(&[_]i32{ 1, 2, 3, 4, 5 });
```

**Special features:**
- Zig does not support Variadic Functions directly
- Workaround: Use slice as parameter

**Further reading:**
- [Zig Documentation - Functions](https://ziglang.org/documentation/0.11.0/#Functions)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Variadic Functions with &
(defn sum [& numbers]
  (apply + numbers))

(sum 1 2 3 4 5)  ; 15

;; Combination with fixed parameters
(defn log [level & messages]
  (println (str "[" level "] " (clojure.string/join " " messages))))

(log "INFO" "Server" "gestartet" "auf" "Port" "8080")
;; [INFO] Server gestartet auf Port 8080
```

**Special features:**
- `&` collects remaining arguments as a sequence
- Can be combined with fixed parameters
- `apply` for forwarding variadic arguments

**Further reading:**
- [Clojure Documentation - Functions](https://clojure.org/guides/learn/functions#_variadic_functions)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Variadic Functions with &rest
(defun sum (&rest numbers)
  (apply #'+ numbers))

(sum 1 2 3)       ; 6
(sum 1 2 3 4 5)   ; 15

;; Combination with fixed parameters
(defun log-message (level &rest parts)
  (format nil "[~a] ~{~a~^ ~}" level parts))

(log-message :info "User" "logged" "in")
;; "[INFO] User logged in"
```

**Special features:**
- `&rest` collects all remaining arguments into a list
- `apply` passes a list as individual arguments to a function
- Can be combined with `&optional` and `&key`

**Further reading:**
- [Common Lisp HyperSpec - Ordinary Lambda Lists](http://www.lispworks.com/documentation/HyperSpec/Body/03_da.htm)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% Variadic Functions: varargin and varargout
function result = sum_all(varargin)
    result = 0;
    for i = 1:nargin
        result = result + varargin{i};
    end
end

sum_all(1, 2, 3)     % 6
sum_all(1, 2, 3, 4)  % 10
```

**Special features:**
- `varargin` as Cell Array for variable input arguments
- `varargout` as Cell Array for variable output arguments
- `nargin` and `nargout` for number of arguments

**Further reading:**
- [MATLAB Documentation - varargin](https://www.mathworks.com/help/matlab/ref/varargin.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
procedure PrintAll(const Args: array of const);
var
  i: Integer;
begin
  for i := Low(Args) to High(Args) do
    case Args[i].VType of
      vtInteger: WriteLn(Args[i].VInteger);
      vtString: WriteLn(Args[i].VString^);
      vtAnsiString: WriteLn(AnsiString(Args[i].VAnsiString));
    end;
end;

begin
  PrintAll([42, 'Hallo', 3.14]);
end;
```

**Special features:**
- `array of const` for heterogeneous variadic parameters
- `array of Type` for homogeneous variadic parameters (Open Arrays)
- `TVarRec` record for type information at runtime

**Further reading:**
- [Free Pascal Documentation - Open Arrays](https://www.freepascal.org/docs-html/ref/refsu69.html)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Variadic method with nil termination
- (NSArray *)arrayWithItems:(id)firstItem, ... NS_REQUIRES_NIL_TERMINATION {
    NSMutableArray *items = [NSMutableArray array];
    va_list args;
    va_start(args, firstItem);
    for (id item = firstItem; item != nil; item = va_arg(args, id)) {
        [items addObject:item];
    }
    va_end(args);
    return items;
}

NSArray *items = [self arrayWithItems:@"A", @"B", @"C", nil];
```

**Special features:**
- C-style variadic functions with `va_list`, `va_start`, `va_end`
- ObjC convention: nil-terminated argument lists
- `NS_REQUIRES_NIL_TERMINATION` attribute for compiler checking
- NSString `stringWithFormat:` is a prominent example

**Further reading:**
- [Apple Documentation - Programming with Objective-C](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
function result = sum_all(varargin)
    result = 0;
    for i = 1:length(varargin)
        result = result + varargin{i};
    end
end

sum_all(1, 2, 3)      % 6
sum_all(1, 2, 3, 4, 5) % 15
```

**Special features:**
- `varargin` as last parameter collects all further arguments
- `varargin` is a Cell Array
- `varargout` for variable number of return values

**Further reading:**
- [GNU Octave Documentation - Variable-length Argument Lists](https://octave.org/doc/v8.1.0/Variable_002dlength-Argument-Lists.html)

</TabItem>
<TabItem value="r" label="R">

```r
my_sum <- function(...) {
    args <- list(...)
    total <- 0
    for (val in args) {
        total <- total + val
    }
    total
}

result <- my_sum(1, 2, 3, 4, 5) # 15
```

**Special features:**
- `...` (dots) accepts any number of arguments
- `list(...)` converts to a list
- Dots can be passed to other functions

**Further reading:**
- [R Documentation - dots](https://cran.r-project.org/doc/manuals/r-release/R-lang.html#Dot-dot-dot)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
(define (sum . args)
  (apply + args))

(sum 1 2 3)      ; 6
(sum 1 2 3 4 5)  ; 15
```

**Special features:**
- Rest arguments with dot notation `(define (f . args) ...)`
- `apply` for applying functions to lists
- Built-in operators like `+`, `*` are already variadic

**Further reading:**
- [Racket Documentation - Function Definitions](https://docs.racket-lang.org/guide/define.html)

</TabItem>
<TabItem value="v" label="V">

```v
// Variadic Functions
fn sum(values ...int) int {
    mut total := 0
    for v in values {
        total += v
    }
    return total
}

result := sum(1, 2, 3, 4, 5)
println(result)  // 15
```

**Special features:**
- `...Type` for variadic parameters
- Parameter is treated as an array
- Must be last parameter

**Further reading:**
- [V Documentation - Variadic Functions](https://github.com/vlang/v/blob/master/doc/docs.md#variadic-functions)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Variadic Functions with BlankSequence *)
mySum[args__] := Plus[args]

mySum[1, 2, 3]       (* 6 *)
mySum[1, 2, 3, 4, 5] (* 15 *)
```

**Special features:**
- `__` (BlankSequence) matches one or more arguments
- `___` (BlankNullSequence) matches zero or more arguments

**Further reading:**
- [Wolfram Language Documentation - BlankSequence](https://reference.wolfram.com/language/ref/BlankSequence.html)

</TabItem>
</Tabs>


## 7.1.11. Function Overloading

### Function Overloading


Defining multiple functions with the same name but different parameters (number, types, or both). The compiler or interpreter selects the appropriate function based on the arguments passed.


<Tabs availableTabs={['carbon', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'fortran', 'groovy', 'java', 'julia', 'kotlin', 'mercury', 'nim', 'object-pascal', 'ocaml', 'odin', 'prolog', 'rust', 'scala', 'swift', 'typescript', 'vbnet', 'wolfram-language']} yellowTabs={['objective-c']} orangeTabs={['haxe', 'php']}>
<TabItem value="carbon" label="Carbon">

```cpp
fn Add(a: i32, b: i32) -> i32 {
    return a + b;
}

fn Add(a: f64, b: f64) -> f64 {
    return a + b;
}

var result1: i32 = Add(5, 3);
var result2: f64 = Add(5.0, 3.0);
```

**Special features:**
- Experimental language, syntax may still change
- Supports Function Overloading based on parameter types

**Further reading:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
def add(a : Int32, b : Int32) : Int32
  a + b
end

def add(a : Float64, b : Float64) : Float64
  a + b
end

result1 = add(5, 3)
result2 = add(5.0, 3.0)
```

**Special features:**
- Supports Function Overloading based on parameter types
- Ruby-like syntax

**Further reading:**
- [Crystal Documentation - Method Overloading](https://crystal-lang.org/reference/1.11/syntax_and_semantics/methods.html#overloading)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
int Add(int a, int b)
{
    return a + b;
}

double Add(double a, double b)
{
    return a + b;
}

int result1 = Add(5, 3);
double result2 = Add(5.0, 3.0);
```

**Special features:**
- Supports Function Overloading based on parameter types and number
- Cannot be distinguished by return type alone

**Further reading:**
- [Microsoft C# Documentation - Method Overloading](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/methods#method-overloading)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
int Add(int a, int b) {
    return a + b;
}

double Add(double a, double b) {
    return a + b;
}

int result1 = Add(5, 3);
double result2 = Add(5.0, 3.0);
```

**Special features:**
- Supports Function Overloading based on parameter types and number
- Cannot be distinguished by return type alone

**Further reading:**
- [cppreference.com - Function overloading](https://en.cppreference.com/w/cpp/language/overload_resolution)

</TabItem>
<TabItem value="d" label="D">

```d
int add(int a, int b) {
    return a + b;
}

double add(double a, double b) {
    return a + b;
}

int result1 = add(5, 3);
double result2 = add(5.0, 3.0);
```

**Special features:**
- Supports Function Overloading based on parameter types and number
- Cannot be distinguished by return type alone

**Further reading:**
- [D Language Specification - Function Overloading](https://dlang.org/spec/function.html#function-overloading)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
int add(int a, int b) {
    return a + b;
}

double add(double a, double b) {
    return a + b;
}

int result1 = add(5, 3);
double result2 = add(5.0, 3.0);
```

**Special features:**
- Supports Function Overloading based on parameter types and number
- Cannot be distinguished by return type alone

**Further reading:**
- [Dart Documentation - Methods](https://dart.dev/guides/language/language-tour#methods)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
def add(int a, int b) {
    a + b
}

def add(double a, double b) {
    a + b
}

def result1 = add(5, 3)
def result2 = add(5.0, 3.0)
```

**Special features:**
- Supports Function Overloading based on parameter types and number
- Supports both static and dynamic typing

**Further reading:**
- [Groovy Documentation - Methods](https://groovy-lang.org/structure.html#_methods)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Function Overloading: only for extern classes via @:overload
// Regular functions CANNOT be overloaded
// Workaround: Optional parameters or Dynamic
function add(a:Float, b:Float):Float {
    return a + b;
}

var result1 = add(5, 3);     // 8.0
var result2 = add(5.0, 3.0); // 8.0
```

**Special features:**
- Haxe does NOT support traditional Function Overloading
- For extern classes, `@:overload` metadata can be used
- Workaround: Optional parameters or `Dynamic` type

**Further reading:**
- [Haxe Documentation - Functions](https://haxe.org/manual/types-function.html)

</TabItem>
<TabItem value="java" label="Java">

```java
static int add(int a, int b) {
    return a + b;
}

static double add(double a, double b) {
    return a + b;
}

int result1 = add(5, 3);
double result2 = add(5.0, 3.0);
```

**Special features:**
- Supports Method Overloading based on parameter types and number
- Cannot be distinguished by return type alone

**Further reading:**
- [Oracle Java Documentation - Method Overloading](https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html#overloading)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
add(a::Int, b::Int) = a + b
add(a::Float64, b::Float64) = a + b

result1 = add(5, 3)
result2 = add(5.0, 3.0)
```

**Special features:**
- Supports Multiple Dispatch (Function Overloading based on all parameter types)
- Very powerful overloading system

**Further reading:**
- [Julia Documentation - Methods](https://docs.julialang.org/en/v1/manual/methods/)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
fun add(a: Int, b: Int): Int {
    return a + b
}

fun add(a: Double, b: Double): Double {
    return a + b
}

val result1 = add(5, 3)
val result2 = add(5.0, 3.0)
```

**Special features:**
- Supports Function Overloading based on parameter types and number
- Cannot be distinguished by return type alone

**Further reading:**
- [Kotlin Documentation - Functions](https://kotlinlang.org/docs/functions.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Overloading via type classes
:- typeclass addable(T) where [
    func add(T, T) = T
].

:- instance addable(int) where [
    add(A, B) = A + B
].

:- instance addable(float) where [
    add(A, B) = A + B
].

Result1 = add(5, 3),       % int
Result2 = add(5.0, 3.0).   % float
```

**Special features:**
- Overloading via type classes (`typeclass`) and instances (`instance`)
- Predicates/functions can be overloaded by type and arity
- Overload resolution at compile time by the type system
- Similar to Haskell's Type Classes

**Further reading:**
- [Mercury Language Reference - Type Classes](https://mercurylang.org/information/doc-latest/mercury_ref/Type-classes.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
proc add(a: int, b: int): int =
    a + b

proc add(a: float64, b: float64): float64 =
    a + b

let result1 = add(5, 3)
let result2 = add(5.0, 3.0)
```

**Special features:**
- Supports Function Overloading based on parameter types and number
- Cannot be distinguished by return type alone

**Further reading:**
- [Nim Documentation - Procedures](https://nim-lang.org/docs/manual.html#procedures)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Objective-C: No traditional overloading
// Methods are distinguished by selector names
- (int)addInt:(int)a with:(int)b {
    return a + b;
}

- (double)addDouble:(double)a with:(double)b {
    return a + b;
}

int result1 = [self addInt:5 with:3];
double result2 = [self addDouble:5.0 with:3.0];
```

**Special features:**
- Objective-C does NOT support overloading based on parameter types
- Methods are distinguished by their full selector
- Different selector names enable similar functionality
- The selector `addInt:with:` is different from `addDouble:with:`

**Further reading:**
- [Apple Documentation - Defining Classes](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/DefiningClasses/DefiningClasses.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
function Add(a, b: Integer): Integer; overload;
begin
    Result := a + b;
end;

function Add(a, b: Double): Double; overload;
begin
    Result := a + b;
end;

var
    result1: Integer;
    result2: Double;
begin
    result1 := Add(5, 3);
    result2 := Add(5.0, 3.0);
end.
```

**Special features:**
- `overload` directive is required for Function Overloading
- Distinction based on parameter types and number
- Cannot be distinguished by return type alone

**Further reading:**
- [Delphi Documentation - Overloading](https://docwiki.embarcadero.com/RADStudio/en/Overloading_procedures_and_functions)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
let add (a: int) (b: int) : int = a + b

let add (a: float) (b: float) : float = a +. b

let result1 = add 5 3
let result2 = add 5.0 3.0
```

**Special features:**
- Supports Function Overloading based on parameter types
- Functional language with first-class functions

**Further reading:**
- [OCaml Documentation - Functions](https://ocaml.org/docs/first-hour#functions)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
add :: proc(a: int, b: int) -> int {
    return a + b
}

add :: proc(a: f64, b: f64) -> f64 {
    return a + b
}

result1 := add(5, 3)
result2 := add(5.0, 3.0)
```

**Special features:**
- Supports Function Overloading based on parameter types and number
- Cannot be distinguished by return type alone

**Further reading:**
- [Odin Documentation - Procedures](https://odin-lang.org/docs/overview/#procedures)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
// PHP does not support Function Overloading
// Instead: Union Types (since PHP 8.0) or dynamic types
function add(int|float $a, int|float $b): int|float {
    return $a + $b;
}

$result1 = add(5, 3);       // 8
$result2 = add(5.0, 3.0);   // 8.0
?>
```

**Special features:**
- PHP does NOT support Function Overloading
- Two functions with the same name cause Fatal Error
- Union Types (since PHP 8.0) as alternative
- `__call()` Magic Method as OOP workaround

**Further reading:**
- [PHP Documentation - Functions](https://www.php.net/manual/en/functions.user-defined.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Predicates with different arity (number of arguments)
add(X, Y, Result) :-
    Result is X + Y.

add(X, Y, Z, Result) :-
    Result is X + Y + Z.

?- add(5, 3, Result1).
%  Result1 = 8
?- add(5, 3, 2, Result2).
%  Result2 = 10
```

**Special features:**
- Prolog supports overloading based on arity (number of arguments)
- `add/3` and `add/4` are different predicates
- No overloading based on types (Prolog is dynamically typed)
- Additionally, pattern matching in the head enables different clauses for different argument patterns

**Further reading:**
- [SWI-Prolog Documentation - Predicate Indicators](https://www.swi-prolog.org/pldoc/man?section=preddesc)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
fn add(a: i32, b: i32) -> i32 {
    a + b
}

fn add(a: f64, b: f64) -> f64 {
    a + b
}

let result1 = add(5, 3);
let result2 = add(5.0, 3.0);
```

**Special features:**
- Supports Function Overloading based on parameter types and number
- Cannot be distinguished by return type alone

**Further reading:**
- [Rust Book - Functions](https://doc.rust-lang.org/book/ch03-03-functions.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
def add(a: Int, b: Int): Int = {
    a + b
}

def add(a: Double, b: Double): Double = {
    a + b
}

val result1 = add(5, 3)
val result2 = add(5.0, 3.0)
```

**Special features:**
- Supports Function Overloading based on parameter types and number
- Functional and object-oriented language

**Further reading:**
- [Scala Documentation - Methods](https://docs.scala-lang.org/tour/methods.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
func add(a: Int, b: Int) -> Int {
    return a + b
}

func add(a: Double, b: Double) -> Double {
    return a + b
}

let result1 = add(a: 5, b: 3)
let result2 = add(a: 5.0, b: 3.0)
```

**Special features:**
- Supports Function Overloading based on parameter types and number
- Cannot be distinguished by return type alone

**Further reading:**
- [Swift Documentation - Functions](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/functions/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
function add(a: number, b: number): number {
    return a + b;
}

function add(a: string, b: string): string {
    return a + b;
}

const result1 = add(5, 3);
const result2 = add("5", "3");
```

**Special features:**
- Supports Function Overloading based on parameter types and number
- Cannot be distinguished by return type alone

**Further reading:**
- [TypeScript Handbook - Function Overloads](https://www.typescriptlang.org/docs/handbook/2/functions.html#function-overloads)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
Function Add(a As Integer, b As Integer) As Integer
    Return a + b
End Function

Function Add(a As Double, b As Double) As Double
    Return a + b
End Function

Dim result1 As Integer = Add(5, 3)
Dim result2 As Double = Add(5.0, 3.0)
```

**Special features:**
- Supports Function Overloading based on parameter types and number
- Cannot be distinguished by return type alone

**Further reading:**
- [Microsoft VB.NET Documentation - Procedure Overloading](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/procedures/overloaded-procedures)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Function Overloading via generic interfaces
interface double_value
    module procedure double_int, double_real
end interface

function double_int(x) result(res)
    integer, intent(in) :: x
    integer :: res
    res = x * 2
end function

function double_real(x) result(res)
    real, intent(in) :: x
    real :: res
    res = x * 2.0
end function

integer :: i = double_value(5)      ! Calls double_int
real :: r = double_value(3.14)      ! Calls double_real
```

**Special features:**
- Overloading via `INTERFACE` blocks with `MODULE PROCEDURE`
- Resolution based on parameter types and number
- Cannot be distinguished by return type alone

**Further reading:**
- [Fortran Wiki - Generic Interfaces](https://fortranwiki.org/fortran/show/Generic+interfaces)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Function Overloading via Pattern Matching *)
area[r_?NumericQ] := Pi * r^2                          (* Circle *)
area[w_?NumericQ, h_?NumericQ] := w * h                (* Rectangle *)
area[a_?NumericQ, b_?NumericQ, c_?NumericQ] := Module[ (* Triangle *)
    {s = (a + b + c) / 2},
    Sqrt[s (s - a) (s - b) (s - c)]
]

area[5]        (* 78.5398 - Circle *)
area[3, 4]     (* 12 - Rectangle *)
area[3, 4, 5]  (* 6 - Triangle *)
```

**Special features:**
- Overloading via different pattern definitions
- Automatic selection based on argument number and type
- More specific patterns take precedence

**Further reading:**
- [Wolfram Language Documentation - Functions](https://reference.wolfram.com/language/guide/FunctionsAndPrograms.html)

</TabItem>
</Tabs>



---

### Procedure Overloading


Define multiple procedures/subroutines with the same name but different parameters (number, types, or both). The compiler or interpreter selects the appropriate procedure based on the arguments passed.


<Tabs availableTabs={['ada', 'fortran', 'object-pascal', 'vbnet']}>
<TabItem value="ada" label="Ada">

```ada
procedure Print_Value(value: Integer) is
begin
    Put_Line("Integer: " & Integer'Image(value));
end Print_Value;

procedure Print_Value(value: Float) is
begin
    Put_Line("Float: " & Float'Image(value));
end Print_Value;

procedure Print_Value(value: String) is
begin
    Put_Line("String: " & value);
end Print_Value;

Print_Value(42);
Print_Value(3.14);
Print_Value("Apfel");
```

**Special features:**
- Supports procedure overloading based on parameter types and number
- Cannot be distinguished by return type alone (procedures have no return type)

**Further reading:**
- [Ada Documentation - Subprograms](https://learn.adacore.com/courses/intro-to-ada/chapters/subprograms.html)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Procedure Overloading via generic interfaces
interface PrintValue
    module procedure PrintValue_int, PrintValue_real, PrintValue_str
end interface

subroutine PrintValue_int(value)
    integer, intent(in) :: value
    print *, "Integer: ", value
end subroutine

subroutine PrintValue_real(value)
    real, intent(in) :: value
    print *, "Real: ", value
end subroutine

subroutine PrintValue_str(value)
    character(len=*), intent(in) :: value
    print *, "String: ", value
end subroutine

call PrintValue(42)
call PrintValue(3.14)
call PrintValue("Apfel")
```

**Special features:**
- Overloading via `INTERFACE` blocks with `MODULE PROCEDURE`
- Resolution based on parameter types and number
- Subroutines must have different internal names

**Further reading:**
- [Fortran Wiki - Generic Interfaces](https://fortranwiki.org/fortran/show/Generic+interfaces)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
procedure PrintValue(value: Integer); overload;
begin
    WriteLn('Integer: ', value);
end;

procedure PrintValue(value: Double); overload;
begin
    WriteLn('Double: ', value);
end;

procedure PrintValue(value: string); overload;
begin
    WriteLn('String: ', value);
end;

begin
    PrintValue(42);
    PrintValue(3.14);
    PrintValue('Apfel');
end.
```

**Special features:**
- `overload` directive is required for procedure overloading
- Distinction based on parameter types and number

**Further reading:**
- [Delphi Documentation - Overloading](https://docwiki.embarcadero.com/RADStudio/en/Overloading_procedures_and_functions)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
Sub PrintValue(value As Integer)
    Console.WriteLine("Integer: " & value)
End Sub

Sub PrintValue(value As Double)
    Console.WriteLine("Double: " & value)
End Sub

Sub PrintValue(value As String)
    Console.WriteLine("String: " & value)
End Sub

PrintValue(42)
PrintValue(3.14)
PrintValue("Apfel")
```

**Special features:**
- Supports subroutine overloading based on parameter types and number
- Cannot be distinguished by return type alone (subroutines have no return type)

**Further reading:**
- [Microsoft VB.NET Documentation - Procedure Overloading](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/procedures/overloaded-procedures)

</TabItem>
</Tabs>


## 7.1.12. Higher-Order Functions

Functions that accept other functions as parameters or return functions as return values. Enable code to be more abstract and reusable.

### Languages {#sprachen}

<Tabs availableTabs={['carbon', 'clojure', 'common-lisp', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'elixir', 'elm', 'erlang', 'fsharp', 'gleam', 'go', 'groovy', 'haskell', 'haxe', 'idris', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'lua', 'matlab', 'mercury', 'nim', 'objective-c', 'ocaml', 'octave', 'perl', 'php', 'prolog', 'purescript', 'python', 'r', 'racket', 'roc', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'v', 'vbnet', 'wolfram-language', 'zig']}>
<TabItem value="carbon" label="Carbon">

```cpp
fn ApplyFunc(func: fn(i32) -> i32, value: i32) -> i32 {
    return func(value);
}

fn Double(x: i32) -> i32 {
    return x * 2;
}

var result = ApplyFunc(Double, 5);
```

**Special features:**
- Experimental language, syntax may still change
- Supports higher-order functions

**Further reading:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
(defn apply-func [func value]
  (func value))

(defn double [x]
  (* x 2))

(def result (apply-func double 5))
```

**Special features:**
- Functions are first-class objects
- Natively supports higher-order functions

**Further reading:**
- [Clojure Documentation - Functions](https://clojure.org/reference/functions)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
(defun apply-func (func value)
  (funcall func value))

(defun double (x)
  (* x 2))

(defvar result (apply-func #'double 5))
```

**Special features:**
- Functions are first-class objects
- Natively supports higher-order functions

**Further reading:**
- [Common Lisp HyperSpec - Functions](http://www.lispworks.com/documentation/HyperSpec/Body/f_fun.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
def apply_func(func, value)
  func.call(value)
end

def double(x)
  x * 2
end

result = apply_func(->double, 5)
```

**Special features:**
- Supports higher-order functions via procs
- Ruby-like syntax

**Further reading:**
- [Crystal Documentation - Procs](https://crystal-lang.org/reference/1.11/syntax_and_semantics/literals/proc.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
int ApplyFunc(Func<int, int> func, int value)
{
    return func(value);
}

int Double(int x)
{
    return x * 2;
}

int result = ApplyFunc(Double, 5);
```

**Special features:**
- Supports higher-order functions via delegates and lambda expressions
- Available since C# 1.0

**Further reading:**
- [Microsoft C# Documentation - Delegates](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/delegates/)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
#include <functional>

int applyFunc(std::function<int(int)> func, int value) {
    return func(value);
}

int doubleValue(int x) {
    return x * 2;
}

int result = applyFunc(doubleValue, 5);
```

**Special features:**
- Supports higher-order functions via function pointers and `std::function`
- Available since C++98

**Further reading:**
- [cppreference.com - std::function](https://en.cppreference.com/w/cpp/utility/functional/function)

</TabItem>
<TabItem value="d" label="D">

```d
int applyFunc(int function(int) func, int value) {
    return func(value);
}

int doubleValue(int x) {
    return x * 2;
}

int result = applyFunc(&doubleValue, 5);
```

**Special features:**
- Supports higher-order functions via function pointers
- Also supports delegates

**Further reading:**
- [D Language Specification - Function Pointers](https://dlang.org/spec/function.html#function-pointers)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
int applyFunc(int Function(int) func, int value) {
    return func(value);
}

int doubleValue(int x) {
    return x * 2;
}

int result = applyFunc(doubleValue, 5);
```

**Special features:**
- Natively supports higher-order functions
- Functions are first-class objects

**Further reading:**
- [Dart Documentation - Functions](https://dart.dev/guides/language/language-tour#functions)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
def apply_func(func, value) do
    func.(value)
end

def double(x) do
    x * 2
end

result = apply_func(&double/1, 5)
```

**Special features:**
- Functions are first-class objects
- Natively supports higher-order functions

**Further reading:**
- [Elixir Documentation - Functions](https://elixir-lang.org/getting-started/basic-types.html#functions)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
applyFunc : (Int -> Int) -> Int -> Int
applyFunc func value =
    func value

double : Int -> Int
double x =
    x * 2

result = applyFunc double 5
```

**Special features:**
- Functional language with explicit type annotations
- Natively supports higher-order functions

**Further reading:**
- [Elm Documentation - Functions](https://guide.elm-lang.org/core_language.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
apply_func(Func, Value) ->
    Func(Value).

double(X) ->
    X * 2.

Result = apply_func(fun double/1, 5).
```

**Special features:**
- Functions are first-class objects
- Natively supports higher-order functions

**Further reading:**
- [Erlang Documentation - Functions](https://www.erlang.org/doc/reference_manual/functions.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
let applyFunc (func: int -> int) (value: int) : int =
    func value

let double (x: int) : int =
    x * 2

let result = applyFunc double 5
```

**Special features:**
- Functional language with first-class functions
- Natively supports higher-order functions

**Further reading:**
- [F# Documentation - Functions](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/functions/)

</TabItem>
<TabItem value="gleam" label="Gleam">

```erlang
pub fn apply_func(func: fn(Int) -> Int, value: Int) -> Int {
    func(value)
}

pub fn double(x: Int) -> Int {
    x * 2
}

let result = apply_func(double, 5)
```

**Special features:**
- Functional language with explicit type annotations
- Natively supports higher-order functions

**Further reading:**
- [Gleam Documentation - Functions](https://gleam.run/documentation/tour/functions/)

</TabItem>
<TabItem value="go" label="Go">

```go
func applyFunc(f func(int) int, value int) int {
    return f(value)
}

func double(x int) int {
    return x * 2
}

result := applyFunc(double, 5)
```

**Special features:**
- Supports higher-order functions via function pointers
- Functions are first-class objects

**Further reading:**
- [Go Documentation - Functions](https://go.dev/ref/spec#Function_declarations)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
def applyFunc(func, value) {
    func(value)
}

def doubleValue(x) {
    x * 2
}

// Method reference with .& operator
def result = applyFunc(this.&doubleValue, 5) // 10

// Or directly with closure
def result2 = applyFunc({ x -> x * 2 }, 5) // 10
```

**Special features:**
- Supports higher-order functions via closures and method references
- `.&` operator for method references
- Functions/closures are first-class objects

**Further reading:**
- [Groovy Documentation - Closures](https://groovy-lang.org/closures.html)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
applyFunc :: (Int -> Int) -> Int -> Int
applyFunc func value = func value

double :: Int -> Int
double x = x * 2

result = applyFunc double 5
```

**Special features:**
- Functional language with explicit type annotations
- Natively supports higher-order functions

**Further reading:**
- [Haskell Documentation - Functions](https://www.haskell.org/tutorial/functions.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
function applyFunc(func: Int -> Int, value: Int): Int {
    return func(value);
}

function double(x: Int): Int {
    return x * 2;
}

var result = applyFunc(double, 5);
```

**Special features:**
- Natively supports higher-order functions
- Cross-platform compilation

**Further reading:**
- [Haxe Documentation - Functions](https://haxe.org/manual/types-function.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
applyFunc : (Int -> Int) -> Int -> Int
applyFunc func value = func value

double : Int -> Int
double x = x * 2

result : Int
result = applyFunc double 5
```

**Special features:**
- Functional language with dependent types
- Natively supports higher-order functions

**Further reading:**
- [Idris Documentation - Functions](https://idris2.readthedocs.io/en/latest/tutorial/functions.html)

</TabItem>
<TabItem value="java" label="Java">

```java
import java.util.function.Function;

static int applyFunc(Function<Integer, Integer> func, int value) {
    return func.apply(value);
}

static int doubleValue(int x) {
    return x * 2;
}

int result = applyFunc(Main::doubleValue, 5);
```

**Special features:**
- Supports higher-order functions via functional interfaces (since Java 8.0)
- Uses method references or lambda expressions

**Further reading:**
- [Oracle Java Documentation - Functional Interfaces](https://docs.oracle.com/javase/tutorial/java/javaOO/lambdaexpressions.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
function applyFunc(func, value) {
    return func(value);
}

function double(x) {
    return x * 2;
}

const result = applyFunc(double, 5);
```

**Special features:**
- Natively supports higher-order functions
- Functions are first-class objects

**Further reading:**
- [MDN Web Docs - Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
function apply_func(func, value)
    func(value)
end

function double(x)
    x * 2
end

result = apply_func(double, 5)
```

**Special features:**
- Natively supports higher-order functions
- Functions are first-class objects

**Further reading:**
- [Julia Documentation - Functions](https://docs.julialang.org/en/v1/manual/functions/)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Higher-Order Functions
fun apply(f: (int) -> int, x: int): int
  f(x)

fun double(x: int): int
  x * 2

val result = apply(double, 5) // 10

// Standard Higher-Order Functions
val numbers = [1, 2, 3, 4, 5]
val doubled = numbers.map fn(x) { x * 2 }         // [2, 4, 6, 8, 10]
val evens = numbers.filter fn(x) { x % 2 == 0 }   // [2, 4]
val sum = numbers.foldl(0) fn(acc, x) { acc + x }  // 15

// Function as return value
fun multiplier(factor: int): (int) -> int
  fn(x) { x * factor }

val triple = multiplier(3)
val tripled = triple(7) // 21
```

**Special features:**
- Functions are first-class values and can be passed as parameters and returned
- Effects are automatically propagated through higher-order functions
- Extensive standard library with `map`, `filter`, `foldl` etc.
- Trailing lambda syntax for ergonomic HOF calls

**Further reading:**
- [Koka Language Guide - Functions](https://koka-lang.github.io/koka/doc/book.html#sec-functions)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
fun applyFunc(func: (Int) -> Int, value: Int): Int {
    return func(value)
}

fun double(x: Int): Int {
    return x * 2
}

val result = applyFunc(::double, 5)
```

**Special features:**
- Natively supports higher-order functions
- Functions are first-class objects

**Further reading:**
- [Kotlin Documentation - Higher-Order Functions](https://kotlinlang.org/docs/lambdas.html#higher-order-functions)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```haskell
def applyFunc (func : Nat → Nat) (value : Nat) : Nat :=
  func value

def double (x : Nat) : Nat := x * 2

#eval applyFunc double 5  -- 10

-- map, filter as higher-order functions
#eval [1, 2, 3, 4, 5].map (· * 2)       -- [2, 4, 6, 8, 10]
#eval [1, 2, 3, 4, 5].filter (· > 3)    -- [4, 5]
```

**Special features:**
- Functions are first-class values and can be passed as parameters
- `·` as shorthand for anonymous functions
- Standard library provides `map`, `filter`, `foldl` etc.

**Further reading:**
- [Lean 4 Documentation - Functions](https://lean-lang.org/lean4/doc/functions.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
function apply_func(func, value)
    return func(value)
end

function double(x)
    return x * 2
end

local result = apply_func(double, 5)
```

**Special features:**
- Natively supports higher-order functions
- Functions are first-class objects

**Further reading:**
- [Lua Documentation - Functions](https://www.lua.org/manual/5.4/manual.html#3.4.11)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
proc applyFunc(func: proc(x: int): int, value: int): int =
    func(value)

proc double(x: int): int =
    x * 2

let result = applyFunc(double, 5)
```

**Special features:**
- Supports higher-order functions via procedures
- Functions are first-class objects

**Further reading:**
- [Nim Documentation - Procedures](https://nim-lang.org/docs/manual.html#procedures)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
let apply_func (func: int -> int) (value: int) : int =
    func value

let double (x: int) : int =
    x * 2

let result = apply_func double 5
```

**Special features:**
- Functional language with first-class functions
- Natively supports higher-order functions

**Further reading:**
- [OCaml Documentation - Functions](https://ocaml.org/docs/first-hour#functions)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
sub apply_func {
    my ($func, $value) = @_;
    return $func->($value);
}

sub double {
    my $x = shift;
    return $x * 2;
}

my $result = apply_func(\&double, 5);
```

**Special features:**
- Supports higher-order functions via function references
- Functions are first-class objects

**Further reading:**
- [Perl Documentation - Functions](https://perldoc.perl.org/perlsub)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
function applyFunc($func, $value) {
    return $func($value);
}

function double($x) {
    return $x * 2;
}

$result = applyFunc('double', 5);
```

**Special features:**
- Supports higher-order functions via function names or closures
- Functions are first-class objects

**Further reading:**
- [PHP Documentation - Functions](https://www.php.net/manual/en/functions.user-defined.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Higher-Order with call/N and maplist
double(X, Result) :-
    Result is X * 2.

apply_func(Func, Value, Result) :-
    call(Func, Value, Result).

?- apply_func(double, 5, Result).
%  Result = 10

% maplist as higher-order predicate
?- maplist(double, [1, 2, 3], Results).
%  Results = [2, 4, 6]
```

**Special features:**
- `call/N` enables calling predicates that are passed as terms (ISO standard)
- `maplist/2-5`, `include/3`, `exclude/3`, `foldl/4-7` are built-in higher-order predicates
- Predicates can be passed as arguments to other predicates

**Further reading:**
- [SWI-Prolog Documentation - Meta-predicates](https://www.swi-prolog.org/pldoc/man?section=metacall)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
applyFunc :: (Int -> Int) -> Int -> Int
applyFunc func value = func value

double :: Int -> Int
double x = x * 2

result :: Int
result = applyFunc double 5
```

**Special features:**
- Functional language with explicit type annotations
- Natively supports higher-order functions

**Further reading:**
- [PureScript Documentation - Functions](https://book.purescript.org/chapter3.html)

</TabItem>
<TabItem value="python" label="Python">

```python
def apply_func(func, value):
    return func(value)

def double(x):
    return x * 2

result = apply_func(double, 5)
```

**Special features:**
- Natively supports higher-order functions
- Functions are first-class objects

**Further reading:**
- [Python Documentation - Functions](https://docs.python.org/3/tutorial/controlflow.html#defining-functions)

</TabItem>
<TabItem value="r" label="R">

```r
apply_func <- function(func, value) {
    func(value)
}

double <- function(x) {
    x * 2
}

result <- apply_func(double, 5)
```

**Special features:**
- Natively supports higher-order functions
- Functions are first-class objects

**Further reading:**
- [R Documentation - Functions](https://cran.r-project.org/doc/manuals/r-release/R-lang.html#Function-objects)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
(define (apply-func func value)
    (func value))

(define (double x)
    (* x 2))

(define result (apply-func double 5))
```

**Special features:**
- Functional language with first-class functions
- Natively supports higher-order functions

**Further reading:**
- [Racket Documentation - Functions](https://docs.racket-lang.org/guide/define.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
applyFunc : (I64 -> I64), I64 -> I64
applyFunc = \func, value -> func value

double : I64 -> I64
double = \x -> x * 2

result : I64
result = applyFunc double 5
```

**Special features:**
- Functional language with explicit type annotations
- Natively supports higher-order functions

**Further reading:**
- [Roc Documentation - Functions](https://www.roc-lang.org/tutorial#defining-functions)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
def apply_func(func, value)
    func.call(value)
end

def double(x)
    x * 2
end

result = apply_func(method(:double), 5)
```

**Special features:**
- Supports higher-order functions via method objects or procs
- Functions are first-class objects

**Further reading:**
- [Ruby Documentation - Methods](https://docs.ruby-lang.org/en/master/syntax/methods_rdoc.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
fn apply_func<F>(func: F, value: i32) -> i32
where
    F: Fn(i32) -> i32,
{
    func(value)
}

fn double(x: i32) -> i32 {
    x * 2
}

let result = apply_func(double, 5);
```

**Special features:**
- Supports higher-order functions via closures and function pointers
- Type-safe with generics

**Further reading:**
- [Rust Book - Closures](https://doc.rust-lang.org/book/ch13-01-closures.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
def applyFunc(func: Int => Int, value: Int): Int = {
    func(value)
}

def double(x: Int): Int = {
    x * 2
}

val result = applyFunc(double, 5)
```

**Special features:**
- Functional and object-oriented language
- Natively supports higher-order functions

**Further reading:**
- [Scala Documentation - Functions](https://docs.scala-lang.org/tour/functions.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
(define (apply-func func value)
    (func value))

(define (double x)
    (* x 2))

(define result (apply-func double 5))
```

**Special features:**
- Functional language with first-class functions
- Natively supports higher-order functions

**Further reading:**
- [Scheme Documentation - Functions](https://www.scheme.com/tspl4/start.html#./start:h0)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
func applyFunc(_ fn: (Int) -> Int, value: Int) -> Int {
    return fn(value)
}

func double(x: Int) -> Int {
    return x * 2
}

let result = applyFunc(double, value: 5)
```

**Special features:**
- Natively supports higher-order functions
- Functions are first-class objects

**Further reading:**
- [Swift Documentation - Functions](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/functions/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
function applyFunc(func: (value: number) => number, value: number): number {
    return func(value);
}

function double(x: number): number {
    return x * 2;
}

const result = applyFunc(double, 5);
```

**Special features:**
- Natively supports higher-order functions
- Full type annotations

**Further reading:**
- [TypeScript Handbook - Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
Function ApplyFunc(func As Func(Of Integer, Integer), value As Integer) As Integer
    Return func(value)
End Function

Function DoubleValue(x As Integer) As Integer
    Return x * 2
End Function

Dim result As Integer = ApplyFunc(AddressOf DoubleValue, 5)
```

**Special features:**
- Supports higher-order functions via delegates
- Uses `AddressOf` for function references

**Further reading:**
- [Microsoft VB.NET Documentation - Delegates](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/delegates/)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% Higher-Order Functions
function result = apply(func, value)
    result = func(value);
end

result = apply(@sqrt, 16);     % 4
result = apply(@(x) x^2, 5);  % 25

% Built-in higher-order functions
numbers = [1, 2, 3, 4, 5];
squared = arrayfun(@(x) x^2, numbers); % [1, 4, 9, 16, 25]
```

**Special features:**
- Function handles (`@`) enable functions as arguments
- `arrayfun`, `cellfun`, `structfun` as built-in higher-order functions

**Further reading:**
- [MATLAB Documentation - Function Handles](https://www.mathworks.com/help/matlab/matlab_prog/creating-a-function-handle.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Higher-Order Predicates
% Mercury supports higher-order predicates and functions as first-class values.

:- func apply_func((func(int) = int), int) = int.
apply_func(F, X) = apply(F, X).

:- func double(int) = int.
double(X) = X * 2.

:- func add_n(int, int) = int.
add_n(N, X) = X + N.

% Function that returns a function
:- func make_adder(int) = (func(int) = int).
make_adder(N) = add_n(N).

:- pred main(io::di, io::uo) is det.
main(!IO) :-
    Result1 = apply_func(double, 5),
    io.format("double(5) = %d\n", [i(Result1)], !IO),

    Adder = make_adder(10),
    Result2 = apply(Adder, 3),
    io.format("make_adder(10)(3) = %d\n", [i(Result2)], !IO),

    % Built-in higher-order functions
    List = [1, 2, 3, 4, 5],
    Doubled = list.map(double, List),
    Filtered = list.filter((pred(X::in) is semidet :- X > 3), List),
    list.foldl((pred(X::in, Acc0::in, Acc::out) is det :- Acc = Acc0 + X), List, 0, Sum).
```

**Special features:**
- Mercury supports higher-order predicates and functions as first-class values.
- `apply/N` is used to call functions/predicates that were passed as arguments.
- Functions can return other functions (closures).
- The standard library provides `list.map`, `list.filter`, `list.foldl` and other higher-order functions.
- The type signature for higher-order arguments uses parentheses: `(func(int) = int)` or `pred(int)`.

**Further reading:**
- [Mercury Language Reference - Higher-Order](https://www.mercurylang.org/information/doc-release/mercury_ref/Higher-order.html)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Higher-Order Function: Block as parameter
- (NSArray *)map:(NSArray *)array withBlock:(id (^)(id))block {
    NSMutableArray *result = [NSMutableArray array];
    for (id item in array) {
        [result addObject:block(item)];
    }
    return result;
}

NSArray *numbers = @[@1, @2, @3];
NSArray *doubled = [self map:numbers withBlock:^id(id item) {
    return @([item intValue] * 2);
}];
```

**Special features:**
- Blocks enable higher-order functions
- Blocks can be passed as parameters and returned
- NSArray methods like `enumerateObjectsUsingBlock:` use higher-order patterns

**Further reading:**
- [Apple Documentation - Blocks](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/WorkingwithBlocks/WorkingwithBlocks.html)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
function result = apply(func, value)
    result = func(value);
end

square = @(x) x^2;
result = apply(square, 5);  % 25

% Built-in HOFs
numbers = [1, 2, 3, 4, 5];
doubled = arrayfun(@(x) x * 2, numbers);  % [2, 4, 6, 8, 10]
```

**Special features:**
- Function handles (`@`) enable passing functions as arguments
- `arrayfun`, `cellfun`, `structfun` as built-in higher-order functions

**Further reading:**
- [GNU Octave Documentation - Function Handles](https://octave.org/doc/v8.1.0/Function-Handles.html)

</TabItem>
<TabItem value="v" label="V">

```v
// Higher-Order Functions
fn apply(values []int, transform fn (int) int) []int {
    mut result := []int{}
    for v in values {
        result << transform(v)
    }
    return result
}

doubled := apply([1, 2, 3], fn (x int) int {
    return x * 2
})
println(doubled)  // [2, 4, 6]
```

**Special features:**
- Functions can be passed as parameters
- Function types with `fn (params) return_type` syntax
- Support for anonymous functions as arguments

**Further reading:**
- [V Documentation - Functions](https://github.com/vlang/v/blob/master/doc/docs.md#functions)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Higher-Order Functions *)
items = {1, 2, 3, 4, 5};
doubled = Map[# * 2 &, items]            (* {2, 4, 6, 8, 10} *)
evens = Select[items, EvenQ]              (* {2, 4} *)
sum = Fold[Plus, 0, items]               (* 15 *)
```

**Special features:**
- `Map` (/@), `Select`, `Fold`, `Apply` (@@) are central higher-order functions
- Short form: `f /@ list` for `Map[f, list]`

**Further reading:**
- [Wolfram Language Documentation - Functional Programming](https://reference.wolfram.com/language/guide/FunctionalProgramming.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Higher-Order Functions: Functions as parameters
fn applyTwice(func: *const fn (i32) i32, x: i32) i32 {
    return func(func(x));
}

fn double(x: i32) i32 {
    return x * 2;
}

const result = applyTwice(&double, 3);  // 12
```

**Special features:**
- Functions can be passed as parameters via function pointers
- Function types are explicitly annotated
- No closures, but function pointers are first-class

**Further reading:**
- [Zig Documentation - Functions](https://ziglang.org/documentation/master/#Functions)

</TabItem>
</Tabs>


## 7.1.13. Currying

Technique where a function with multiple arguments is transformed into a sequence of functions, each accepting a single argument. Enables functions to be applied step by step.

### Languages {#sprachen}

<Tabs availableTabs={['common-lisp', 'elixir', 'elm', 'erlang', 'fsharp', 'groovy', 'haskell', 'idris', 'javascript', 'koka', 'lean4', 'ocaml', 'purescript', 'python', 'racket', 'scala', 'scheme', 'wolfram-language']} orangeTabs={['clojure']}>
<TabItem value="clojure" label="Clojure">

```clojure
(defn add [x y z]
  (+ x y z))

;; Currying manually
(defn add-curried [x]
  (fn [y]
    (fn [z]
      (+ x y z))))

(def result (((add-curried 1) 2) 3))  ; 6
```

**Special features:**
- Currying is manually implemented via nested functions
- Functions are first-class objects
- No native currying like in Haskell

**Further reading:**
- [Clojure Documentation - Functions](https://clojure.org/reference/functions)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
(defun add (x y z)
  (+ x y z))

;; Currying manually
(defun add-curried (x)
  (lambda (y)
    (lambda (z)
      (+ x y z))))

(defvar result (funcall (funcall (add-curried 1) 2) 3))
```

**Special features:**
- Currying is manually implemented via nested lambda expressions
- Functions are first-class objects

**Further reading:**
- [Common Lisp HyperSpec - Functions](http://www.lispworks.com/documentation/HyperSpec/Body/f_fun.htm)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
defmodule CurryExample do
  def add(x, y, z) do
    x + y + z
  end

  # Currying manually
  def add_curried(x) do
    fn y ->
      fn z ->
        x + y + z
      end
    end
  end
end

result = CurryExample.add_curried(1).(2).(3)
# => 6
```

**Special features:**
- Currying is manually implemented via nested anonymous functions
- Named functions are called with `()`, anonymous with `.()`
- Functions are first-class objects

**Further reading:**
- [Elixir Documentation - Functions](https://elixir-lang.org/getting-started/modules-and-functions.html)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
add : Int -> Int -> Int -> Int
add x y z = x + y + z

-- Currying is automatic
add1 : Int -> Int -> Int
add1 = add 1

add12 : Int -> Int
add12 = add1 2

result = add12 3
```

**Special features:**
- Currying is automatic - all functions are automatically curried
- Functional language with explicit type annotations

**Further reading:**
- [Elm Documentation - Functions](https://guide.elm-lang.org/core_language.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
add(X, Y, Z) ->
    X + Y + Z.

% Currying manuell
add_curried(X) ->
    fun(Y) ->
        fun(Z) ->
            X + Y + Z
        end
    end.

Result = ((add_curried(1))(2))(3).
```

**Special features:**
- Currying is manually implemented via nested anonymous functions
- Functions are first-class objects

**Further reading:**
- [Erlang Documentation - Functions](https://www.erlang.org/doc/reference_manual/functions.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
let add x y z = x + y + z

// Currying is automatic
let add1 = add 1
let add12 = add1 2
let result = add12 3
```

**Special features:**
- Currying is automatic - all functions are automatically curried
- Functional language with first-class functions

**Further reading:**
- [F# Documentation - Functions](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/functions/)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
add :: Int -> Int -> Int -> Int
add x y z = x + y + z

-- Currying is automatic
add1 :: Int -> Int -> Int
add1 = add 1

add12 :: Int -> Int
add12 = add1 2

result = add12 3
```

**Special features:**
- Currying is automatic - all functions are automatically curried
- Functional language with explicit type annotations

**Further reading:**
- [Haskell Documentation - Functions](https://www.haskell.org/tutorial/functions.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
add : Int -> Int -> Int -> Int
add x y z = x + y + z

-- Currying is automatic
add1 : Int -> Int -> Int
add1 = add 1

add12 : Int -> Int
add12 = add1 2

result : Int
result = add12 3
```

**Besonderheiten:**
- Currying ist automatisch - alle Funktionen sind automatisch curried
- Funktionale Sprache mit abhängigen Typen

**Weiterführende Links:**
- [Idris Documentation - Functions](https://idris2.readthedocs.io/en/latest/tutorial/functions.html)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Currying (manual)
fun add(x: int): (int) -> int
  fn(y) { x + y }

val add5 = add(5)
val result = add5(3) // 8

// Multi-stage currying
fun add3(x: int): (int) -> ((int) -> int)
  fn(y) { fn(z) { x + y + z } }

val result2 = add3(1)(2)(3) // 6
```

**Special features:**
- Koka has no automatic currying like Haskell
- Currying is manually achieved via nested functions
- Functions are first-class values, which enables currying
- Useful for creating specialized functions

**Further reading:**
- [Koka Language Guide - Functions](https://koka-lang.github.io/koka/doc/book.html#sec-functions)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```haskell
-- Functions are automatically curried
def add (x : Nat) (y : Nat) (z : Nat) : Nat := x + y + z

-- Type: Nat → Nat → Nat → Nat
-- Equivalent to: Nat → (Nat → (Nat → Nat))

-- Partial application via currying
def add1 := add 1
def add12 := add1 2

#eval add12 3  -- 6
```

**Special features:**
- Automatic currying: All functions with multiple parameters are automatically curried
- Each parameter can be passed individually
- Partial application naturally follows from currying

**Further reading:**
- [Lean 4 Documentation - Functions](https://lean-lang.org/lean4/doc/functions.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
function add(x, y, z) {
    return x + y + z;
}

// Currying manually
function addCurried(x) {
    return function(y) {
        return function(z) {
            return x + y + z;
        };
    };
}

const result = addCurried(1)(2)(3);
```

**Special features:**
- Currying is manually implemented via nested functions
- Arrow functions can be used for more compact syntax

**Further reading:**
- [MDN Web Docs - Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
let add x y z = x + y + z

(* Currying is automatic *)
let add1 = add 1
let add12 = add1 2
let result = add12 3
```

**Special features:**
- Currying is automatic - all functions are automatically curried
- Functional language with first-class functions

**Further reading:**
- [OCaml Documentation - Functions](https://ocaml.org/docs/first-hour#functions)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
add :: Int -> Int -> Int -> Int
add x y z = x + y + z

-- Currying is automatic
add1 :: Int -> Int -> Int
add1 = add 1

add12 :: Int -> Int
add12 = add1 2

result :: Int
result = add12 3
```

**Special features:**
- Currying is automatic - all functions are automatically curried
- Functional language with explicit type annotations

**Further reading:**
- [PureScript Documentation - Functions](https://book.purescript.org/chapter3.html)

</TabItem>
<TabItem value="python" label="Python">

```python
def add(x, y, z):
    return x + y + z

# Currying manually
def add_curried(x):
    def inner(y):
        def inner2(z):
            return x + y + z
        return inner2
    return inner

result = add_curried(1)(2)(3)
```

**Special features:**
- Currying is manually implemented via nested functions
- Functions are first-class objects

**Further reading:**
- [Python Documentation - Functions](https://docs.python.org/3/tutorial/controlflow.html#defining-functions)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
(define (add x y z)
    (+ x y z))

;; Currying manually
(define (add-curried x)
    (lambda (y)
        (lambda (z)
            (+ x y z))))

(define result (((add-curried 1) 2) 3))
```

**Besonderheiten:**
- Currying wird manuell durch verschachtelte Lambda-Ausdrücke realisiert
- Funktionale Sprache mit First-Class-Funktionen

**Weiterführende Links:**
- [Racket Documentation - Functions](https://docs.racket-lang.org/guide/define.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
def add(x: Int)(y: Int)(z: Int): Int = {
    x + y + z
}

// Currying with multiple parameter lists
val add1 = add(1) _
val add12 = add1(2)
val result = add12(3)
```

**Special features:**
- Supports currying via multiple parameter lists
- Functional and object-oriented language

**Further reading:**
- [Scala Documentation - Currying](https://docs.scala-lang.org/tour/multiple-parameter-lists.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
(define (add x y z)
    (+ x y z))

;; Currying manually
(define (add-curried x)
    (lambda (y)
        (lambda (z)
            (+ x y z))))

(define result (((add-curried 1) 2) 3))
```

**Besonderheiten:**
- Currying wird manuell durch verschachtelte Lambda-Ausdrücke realisiert
- Funktionale Sprache mit First-Class-Funktionen

**Weiterführende Links:**
- [Scheme Documentation - Functions](https://www.scheme.com/tspl4/start.html#./start:h0)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Currying with .curry()
def multiply = { a, b -> a * b }

def double = multiply.curry(2)
def triple = multiply.curry(3)

println double(5)  // 10
println triple(5)  // 15

// Right-currying with .rcurry()
def power = { base, exp -> base ** exp }
def square = power.rcurry(2)
println square(5)  // 25
```

**Special features:**
- `.curry()` binds arguments from the left
- `.rcurry()` binds arguments from the right
- `.ncurry()` binds arguments at any position
- Returns a new closure

**Further reading:**
- [Groovy Documentation - Currying](https://groovy-lang.org/closures.html#_currying)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Currying *)
add[x_][y_] := x + y
add5 = add[5];
add5[3]  (* 8 *)

(* OperatorApplied (seit Version 13.1) *)
addOp = OperatorApplied[Plus, 2];
add10 = addOp[10];
add10[5]  (* 15 *)
```

**Special features:**
- Currying via nested function definitions `f[x_][y_] := ...`
- `OperatorApplied` (since version 13.1) for explicit currying

**Further reading:**
- [Wolfram Language Documentation - OperatorApplied](https://reference.wolfram.com/language/ref/OperatorApplied.html)

</TabItem>
</Tabs>


## 7.1.14. Partial Application

Technique where a function with multiple arguments is called with fewer arguments than it expects, resulting in a new function that expects the remaining arguments. Similar to currying, but less strict.

### Languages {#sprachen}

<Tabs availableTabs={['clojure', 'common-lisp', 'elixir', 'elm', 'erlang', 'fsharp', 'groovy', 'haskell', 'idris', 'javascript', 'koka', 'lean4', 'mercury', 'ocaml', 'purescript', 'python', 'racket', 'scala', 'scheme', 'wolfram-language']} yellowTabs={['prolog']}>
<TabItem value="clojure" label="Clojure">

```clojure
(defn add [x y z]
  (+ x y z))

;; Partial Application
(def add1 (partial add 1))
(def add12 (partial add1 2))

(def result (add12 3))
```

**Special features:**
- Supports partial application via `partial` function
- Functions are first-class objects

**Further reading:**
- [Clojure Documentation - partial](https://clojure.org/reference/other_functions#partial)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
(defun add (x y z)
  (+ x y z))

;; Partial Application manually
(defun add1 (y z)
  (add 1 y z))

(defun add12 (z)
  (add 1 2 z))

(defvar result (add12 3))
```

**Special features:**
- Partial application is manually implemented via wrapper functions
- Functions are first-class objects

**Further reading:**
- [Common Lisp HyperSpec - Functions](http://www.lispworks.com/documentation/HyperSpec/Body/f_fun.htm)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
def add(x, y, z) do
    x + y + z
end

# Partial Application via &-syntax
add1 = &add(1, &1, &2)
add12 = &add(1, 2, &1)

result = add12.(3)
```

**Special features:**
- Supports partial application via `&`-syntax
- Functions are first-class objects

**Further reading:**
- [Elixir Documentation - Partial Application](https://elixir-lang.org/getting-started/basic-types.html#functions)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
add : Int -> Int -> Int -> Int
add x y z = x + y + z

-- Partial Application is automatic
add1 : Int -> Int -> Int
add1 = add 1

add12 : Int -> Int
add12 = add 1 2

result = add12 3
```

**Special features:**
- Partial application is automatic via currying
- Functional language with explicit type annotations

**Further reading:**
- [Elm Documentation - Functions](https://guide.elm-lang.org/core_language.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
add(X, Y, Z) ->
    X + Y + Z.

% Partial Application via fun
Add1 = fun(Y, Z) -> add(1, Y, Z) end.
Add12 = fun(Z) -> add(1, 2, Z) end.

Result = Add12(3).
```

**Special features:**
- Partial application is implemented via anonymous functions
- Functions are first-class objects

**Further reading:**
- [Erlang Documentation - Functions](https://www.erlang.org/doc/reference_manual/functions.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
let add x y z = x + y + z

// Partial Application is automatic
let add1 = add 1
let add12 = add 1 2
let result = add12 3
```

**Special features:**
- Partial application is automatic via currying
- Functional language with first-class functions

**Further reading:**
- [F# Documentation - Functions](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/functions/)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
add :: Int -> Int -> Int -> Int
add x y z = x + y + z

-- Partial Application is automatic
add1 :: Int -> Int -> Int
add1 = add 1

add12 :: Int -> Int
add12 = add 1 2

result = add12 3
```

**Special features:**
- Partial application is automatic via currying
- Functional language with explicit type annotations

**Further reading:**
- [Haskell Documentation - Functions](https://www.haskell.org/tutorial/functions.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
add : Int -> Int -> Int -> Int
add x y z = x + y + z

-- Partial Application is automatic
add1 : Int -> Int -> Int
add1 = add 1

add12 : Int -> Int
add12 = add 1 2

result : Int
result = add12 3
```

**Special features:**
- Partial application is automatic via currying
- Functional language with dependent types

**Further reading:**
- [Idris Documentation - Functions](https://idris2.readthedocs.io/en/latest/tutorial/functions.html)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Partial Application (manual via lambdas)
fun add(x: int, y: int, z: int): int
  x + y + z

// Partial Application via lambda wrapper
val add1 = fn(y, z) { add(1, y, z) }
val add12 = fn(z) { add(1, 2, z) }

val result = add12(3) // 6

// Partially applied higher-order function
val numbers = [1, 2, 3, 4, 5]
fun greaterThan(threshold: int): (int) -> bool
  fn(x) { x > threshold }

val bigNumbers = numbers.filter(greaterThan(3)) // [4, 5]
```

**Special features:**
- Koka has no automatic partial application like Haskell
- Achieved manually via lambda expressions
- Common pattern: function returns a specialized lambda
- Useful in combination with higher-order functions

**Further reading:**
- [Koka Language Guide - Functions](https://koka-lang.github.io/koka/doc/book.html#sec-functions)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```haskell
def add (x : Nat) (y : Nat) (z : Nat) : Nat := x + y + z

-- Partial Application via automatic currying
def add1 := add 1
def add12 := add 1 2

#eval add12 3  -- 6

-- Partial Application with anonymous function
def multiplyBy (factor : Nat) : Nat → Nat := (· * factor)

#eval [1, 2, 3].map (multiplyBy 3)  -- [3, 6, 9]
```

**Special features:**
- Partial application automatically follows from currying
- Every function can be called with fewer arguments
- `·` notation for anonymous partial application

**Further reading:**
- [Lean 4 Documentation - Functions](https://lean-lang.org/lean4/doc/functions.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Partial Application
% Mercury natively supports partial application of predicates and functions.

:- func add(int, int) = int.
add(X, Y) = X + Y.

:- pred print_list(list(int)::in, io::di, io::uo) is det.
print_list([], !IO).
print_list([H|T], !IO) :-
    io.format("%d ", [i(H)], !IO),
    print_list(T, !IO).

:- pred main(io::di, io::uo) is det.
main(!IO) :-
    % Partial application of a function
    AddFive = add(5),          % AddFive : func(int) = int
    Result = apply(AddFive, 3), % Result = 8

    % Partial application with list.map
    Numbers = [1, 2, 3, 4, 5],
    Incremented = list.map(add(10), Numbers),  % [11, 12, 13, 14, 15]

    % Partial application of a predicate
    list.filter((pred(X::in) is semidet :- X > 3), Numbers, Filtered),

    io.format("add(5)(3) = %d\n", [i(Result)], !IO),
    print_list(Incremented, !IO),
    io.nl(!IO).
```

**Special features:**
- Mercury natively supports partial application.
- If a function `f(A, B) = C` exists, `f(A)` can be used as a higher-order term with one remaining argument.
- This works for both `func` and `pred` declarations.
- Partial application is often combined with `list.map`, `list.filter` and other higher-order functions.

**Further reading:**
- [Mercury Language Reference - Higher-Order](https://www.mercurylang.org/information/doc-release/mercury_ref/Higher-order.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
function add(x, y, z) {
    return x + y + z;
}

// Partial Application manually
function partial(fn, ...args) {
    return function(...restArgs) {
        return fn(...args, ...restArgs);
    };
}

const add1 = partial(add, 1);
const add12 = partial(add1, 2);
const result = add12(3);
```

**Special features:**
- Partial application is manually implemented via wrapper functions
- Arrow functions can be used for more compact syntax

**Further reading:**
- [MDN Web Docs - Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
let add x y z = x + y + z

(* Partial Application is automatic *)
let add1 = add 1
let add12 = add 1 2
let result = add12 3
```

**Special features:**
- Partial application is automatic via currying
- Functional language with first-class functions

**Further reading:**
- [OCaml Documentation - Functions](https://ocaml.org/docs/first-hour#functions)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
add(X, Y, Z, Result) :-
    Result is X + Y + Z.

% Partial Application via call/N
% call(add(1), 2, 3, Result) becomes add(1, 2, 3, Result)
?- call(add(1), 2, 3, Result).
%  Result = 6

% Partial Application mit maplist
increment(X, Result) :- Result is X + 1.
?- maplist(increment, [1, 2, 3], Results).
%  Results = [2, 3, 4]

% Multiple partial application
add_partial(X, Y, Result) :- Result is X + Y.
?- maplist(call(add_partial(10)), [1, 2, 3], Results).
%  Results = [11, 12, 13]
```

**Special features:**
- `call/N` (ISO standard) enables partial application by appending arguments to a term
- `call(Goal, Arg1, ...)` calls `Goal` with additional arguments
- Often used in combination with `maplist`, `include`, `foldl`

**Further reading:**
- [SWI-Prolog Documentation - call/N](https://www.swi-prolog.org/pldoc/doc_for?object=call/2)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
add :: Int -> Int -> Int -> Int
add x y z = x + y + z

-- Partial Application is automatic
add1 :: Int -> Int -> Int
add1 = add 1

add12 :: Int -> Int
add12 = add 1 2

result :: Int
result = add12 3
```

**Special features:**
- Partial application is automatic via currying
- Functional language with explicit type annotations

**Further reading:**
- [PureScript Documentation - Functions](https://book.purescript.org/chapter3.html)

</TabItem>
<TabItem value="python" label="Python">

```python
def add(x, y, z):
    return x + y + z

# Partial Application via functools.partial
from functools import partial

add1 = partial(add, 1)
add12 = partial(add1, 2)
result = add12(3)
```

**Special features:**
- Supports partial application via `functools.partial`
- Functions are first-class objects

**Further reading:**
- [Python Documentation - functools.partial](https://docs.python.org/3/library/functools.html#functools.partial)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
(define (add x y z)
  (+ x y z))

;; Partial Application with curry
(define add1 (curry add 1))
(define add12 (curry add 1 2))

(add12 3)  ; 6

;; Partial Application from the right with curryr
(define add-to-3 (curryr add 3))
```

**Special features:**
- `curry` and `curryr` for built-in partial application
- `curry` binds arguments from the left, `curryr` from the right
- Functional language with first-class functions

**Further reading:**
- [Racket Documentation - curry](https://docs.racket-lang.org/reference/procedures.html#%28def._%28%28lib._racket%2Ffunction..rkt%29._curry%29%29)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
def add(x: Int)(y: Int)(z: Int): Int = {
    x + y + z
}

// Partial Application with multiple parameter lists
val add1 = add(1) _
val add12 = add(1)(2) _
val result = add12(3)
```

**Special features:**
- Supports partial application via multiple parameter lists
- Functional and object-oriented language

**Further reading:**
- [Scala Documentation - Currying](https://docs.scala-lang.org/tour/multiple-parameter-lists.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
(define (add x y z)
    (+ x y z))

;; Partial Application manually
(define (add1 y z)
    (add 1 y z))

(define (add12 z)
    (add 1 2 z))

(define result (add12 3))
```

**Special features:**
- Partial application is implemented manually via wrapper functions
- Functional language with first-class functions

**Further reading:**
- [Scheme Documentation - Functions](https://www.scheme.com/tspl4/start.html#./start:h0)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Partial Application via curry
def add = { a, b, c -> a + b + c }

// Partial application
def addFive = add.curry(5)
println addFive(3, 2)  // 10

// Multiple partial application
def addFiveAndThree = add.curry(5).curry(3)
println addFiveAndThree(2)  // 10

// ncurry for binding at a specific position
def greeting = { greeting, name, punctuation -> "$greeting, $name$punctuation" }
def helloGreeting = greeting.ncurry(0, "Hallo")
println helloGreeting("Welt", "!")  // "Hallo, Welt!"
```

**Special features:**
- `.curry()` for partial application from the left
- `.rcurry()` for partial application from the right
- `.ncurry(index, args)` for partial application at a specific position

**Further reading:**
- [Groovy Documentation - Currying](https://groovy-lang.org/closures.html#_currying)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Partial Application mit Pure Functions *)
multiply = Function[{x, y}, x * y];
double = multiply[2, #] &;
double[5]  (* 10 *)

(* Partial Application mit Slot *)
addTen = (# + 10) &;
addTen[5]  (* 15 *)
```

**Special features:**
- `#` slots enable partial application
- Pure functions (`&`) can be partially applied

**Further reading:**
- [Wolfram Language Documentation - Pure Functions](https://reference.wolfram.com/language/ref/Function.html)

</TabItem>
</Tabs>

## 7.1.15. Function Composition

Function composition combines two or more functions into a new function, where the output of one serves as the input of the next: `(f ∘ g)(x) = f(g(x))`.

### Languages {#sprachen}

<Tabs availableTabs={['clojure', 'elm', 'fsharp', 'groovy', 'haskell', 'idris', 'java', 'julia', 'lean4', 'ocaml', 'purescript', 'racket', 'ruby', 'scala', 'wolfram-language']} orangeTabs={['common-lisp', 'd', 'elixir', 'erlang', 'koka', 'kotlin', 'python', 'scheme', 'swift']}>
<TabItem value="clojure" label="Clojure">

```clojure
(defn double-val [x] (* x 2))
(defn increment [x] (+ x 1))

;; comp composes right to left: (increment (double-val x))
(def double-then-increment (comp increment double-val))
(double-then-increment 5)  ; 11

;; Compose multiple functions
(def transform (comp str inc #(* % 2)))
(transform 5)  ; "11"
```

**Special features:**
- `comp` composes any number of functions from right to left
- Without arguments, `(comp)` returns the identity function
- `comp` is part of `clojure.core` and immediately available

**Further reading:**
- [Clojure Documentation - comp](https://clojuredocs.org/clojure.core/comp)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
(defun double-val (x) (* x 2))
(defun increment (x) (+ x 1))

;; Manual composition function
(defun compose (f g)
  (lambda (x) (funcall f (funcall g x))))

(defvar double-then-increment (compose #'increment #'double-val))
(funcall double-then-increment 5)  ; 11
```

**Special features:**
- No built-in `compose` function in the standard
- Trivial to implement with `lambda` and `funcall`
- The Alexandria library provides `compose` as a utility

**Further reading:**
- [Common Lisp HyperSpec - funcall](http://www.lispworks.com/documentation/HyperSpec/Body/f_funcal.htm)

</TabItem>
<TabItem value="d" label="D">

```d
int doubleVal(int x) { return x * 2; }
int increment(int x) { return x + 1; }

// Manual composition with lambda
auto doubleThenIncrement = (int x) => increment(doubleVal(x));
doubleThenIncrement(5);  // 11
```

**Special features:**
- No built-in composition function in the standard library
- Composition is implemented manually with lambda expressions
- D's template system enables generic composition wrappers

**Further reading:**
- [D Language Reference - Function Literals](https://dlang.org/spec/expression.html#function_literals)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
double_val = fn x -> x * 2 end
increment = fn x -> x + 1 end

# Manual composition
double_then_increment = fn x -> increment.(double_val.(x)) end
double_then_increment.(5)  # 11
```

**Special features:**
- No native composition operator
- The pipe operator `|>` provides related but different functionality (value piping, not function composition)
- Anonymous functions are called with `.()`

**Further reading:**
- [Elixir Documentation - Anonymous Functions](https://hexdocs.pm/elixir/anonymous-functions.html)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
doubleVal : Int -> Int
doubleVal x = x * 2

increment : Int -> Int
increment x = x + 1

-- >> composes left to right
doubleThenIncrement : Int -> Int
doubleThenIncrement = doubleVal >> increment
-- doubleThenIncrement 5 == 11

-- << composes right to left
incrementThenDouble : Int -> Int
incrementThenDouble = doubleVal << increment
-- incrementThenDouble 5 == 12
```

**Special features:**
- `>>` composes left to right (forward composition)
- `<<` composes right to left (backward composition)
- Composition is a central concept in Elm and is frequently used in pipelines

**Further reading:**
- [Elm Documentation - Function Composition](https://package.elm-lang.org/packages/elm/core/latest/Basics#%3C%3C)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
DoubleVal = fun(X) -> X * 2 end,
Increment = fun(X) -> X + 1 end,

%% Manual composition
DoubleThenIncrement = fun(X) -> Increment(DoubleVal(X)) end,
DoubleThenIncrement(5).  % 11
```

**Special features:**
- No native composition operator or built-in composition function
- Composition is implemented manually with anonymous functions (`fun`)

**Further reading:**
- [Erlang Documentation - Funs](https://www.erlang.org/doc/programming_examples/funs)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Function Composition (manual)
fun double(x: int): int
  x * 2

fun increment(x: int): int
  x + 1

// Manual composition via lambda
val doubleThenIncrement = fn(x: int) { increment(double(x)) }
val result = doubleThenIncrement(5) // 11

// Composition helper function
fun compose(f: (int) -> int, g: (int) -> int): (int) -> int
  fn(x) { f(g(x)) }

val doubleThenInc = compose(increment, double)
val result2 = doubleThenInc(5) // 11

// Dot notation as pipe-like composition
val result3 = 5.double.increment // 11
```

**Special features:**
- Koka has no built-in composition operator like Haskell's `.`
- Composition can be achieved manually via lambdas or helper functions
- Dot notation (`x.f.g`) enables natural left-to-right composition
- UFCS (Uniform Function Call Syntax) makes composition more readable

**Further reading:**
- [Koka Language Guide - Functions](https://koka-lang.github.io/koka/doc/book.html#sec-functions)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
let doubleVal x = x * 2
let increment x = x + 1

// >> composes left to right
let doubleThenIncrement = doubleVal >> increment
doubleThenIncrement 5  // 11

// << composes right to left
let incrementThenDouble = doubleVal << increment
incrementThenDouble 5  // 12
```

**Special features:**
- `>>` composes left to right (forward composition)
- `<<` composes right to left (backward composition)
- Composition is a central idiom in F# and is frequently used instead of piping

**Further reading:**
- [Microsoft F# Documentation - Function Composition](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/functions/#function-composition-and-pipelining)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
def doubleVal = { x -> x * 2 }
def increment = { x -> x + 1 }

// >> composes left to right
def doubleThenIncrement = doubleVal >> increment
doubleThenIncrement(5)  // 11

// << composes right to left
def incrementThenDouble = doubleVal << increment
incrementThenDouble(5)  // 12
```

**Special features:**
- `>>` (rightShift) and `<<` (leftShift) on closures for composition
- `>>` corresponds to `andThen`, `<<` corresponds to `compose`
- Closures are first-class objects with built-in composition support

**Further reading:**
- [Groovy Documentation - Closures](https://groovy-lang.org/closures.html#_composition)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
doubleVal :: Int -> Int
doubleVal x = x * 2

increment :: Int -> Int
increment x = x + 1

-- . composes right to left
doubleThenIncrement :: Int -> Int
doubleThenIncrement = increment . doubleVal
-- doubleThenIncrement 5 == 11

-- Multiple composition
transform :: Int -> String
transform = show . increment . doubleVal
-- transform 5 == "11"
```

**Special features:**
- `.` is the composition operator (right to left)
- Composition is a fundamental concept in Haskell and is used extensively
- Point-free style relies heavily on function composition

**Further reading:**
- [Haskell Wiki - Function Composition](https://wiki.haskell.org/Function_composition)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
doubleVal : Int -> Int
doubleVal x = x * 2

increment : Int -> Int
increment x = x + 1

-- . composes right to left
doubleThenIncrement : Int -> Int
doubleThenIncrement = increment . doubleVal
-- doubleThenIncrement 5 == 11
```

**Special features:**
- `.` is the composition operator as in Haskell
- Composition is type-checked — types must be compatible
- Function composition is also usable in dependently typed contexts

**Further reading:**
- [Idris 2 Documentation - Functions](https://idris2.readthedocs.io/en/latest/tutorial/functions.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Required: import java.util.function.Function (since Java 8)
Function<Integer, Integer> doubleVal = x -> x * 2;
Function<Integer, Integer> increment = x -> x + 1;

// andThen: links nach rechts
Function<Integer, Integer> doubleThenIncrement = doubleVal.andThen(increment);
doubleThenIncrement.apply(5);  // 11

// compose: rechts nach links
Function<Integer, Integer> incrementThenDouble = doubleVal.compose(increment);
incrementThenDouble.apply(5);  // 12
```

**Special features:**
- `Function.andThen()` composes left to right (since Java 8)
- `Function.compose()` composes right to left (since Java 8)
- Requires the use of `Function<T, R>` — not usable with primitive types
- `UnaryOperator<T>`, `BiFunction<T, U, R>` also support composition

**Further reading:**
- [Oracle Java Documentation - Function](https://docs.oracle.com/javase/8/docs/api/java/util/function/Function.html)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
double_val(x) = x * 2
increment(x) = x + 1

# ∘ (Unicode) composes right to left
double_then_increment = increment ∘ double_val
double_then_increment(5)  # 11

# Multiple composition
transform = string ∘ increment ∘ double_val
transform(5)  # "11"
```

**Special features:**
- `∘` (entered as `\circ` + Tab) is the native composition operator
- Composes right to left
- Available since Julia 0.6
- The pipe operator `|>` provides the reverse direction for value piping

**Further reading:**
- [Julia Documentation - Function Composition](https://docs.julialang.org/en/v1/manual/functions/#Function-composition-and-piping)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
val doubleVal: (Int) -> Int = { x -> x * 2 }
val increment: (Int) -> Int = { x -> x + 1 }

// Manual composition
val doubleThenIncrement: (Int) -> Int = { x -> increment(doubleVal(x)) }
doubleThenIncrement(5)  // 11

// Generic composition extension function
fun <A, B, C> ((B) -> C).compose(other: (A) -> B): (A) -> C =
    { a -> this(other(a)) }

val composed = increment.compose(doubleVal)
composed(5)  // 11
```

**Special features:**
- No native composition operator
- Composition can be elegantly implemented via extension functions
- Function types are first-class and support variable assignment

**Further reading:**
- [Kotlin Documentation - Higher-Order Functions](https://kotlinlang.org/docs/lambdas.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Function Composition
def doubleVal (x : Int) : Int := x * 2
def increment (x : Int) : Int := x + 1

-- Composition operator ∘ (right to left)
def doubleThenIncrement : Int → Int := increment ∘ doubleVal
def result : Int := doubleThenIncrement 5 -- 11
```

**Special features:**
- Lean 4 provides a native composition operator `∘` (entered as `\circ` + Tab) that composes functions from right to left
- Composition is a fundamental concept in Lean 4 as a functional language
- Composition is type-safe and checked by the compiler

**Further reading:**
- [Lean 4 Documentation - Functions](https://lean-lang.org/lean4/doc/functions.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
let double_val x = x * 2
let increment x = x + 1

(* Fun.compose since OCaml 4.08 *)
let double_then_increment = Fun.compose increment double_val
(* double_then_increment 5 = 11 *)

(* Custom composition operator *)
let ( >> ) f g x = g (f x)
let transform = double_val >> increment
(* transform 5 = 11 *)
```

**Special features:**
- `Fun.compose` in the standard library since OCaml 4.08
- Custom operators for composition are idiomatic and widely used
- `|>` is the pipe operator (value piping, not composition)

**Further reading:**
- [OCaml Documentation - Fun Module](https://ocaml.org/api/Fun.html)

</TabItem>
<TabItem value="purescript" label="PureScript">

```haskell
doubleVal :: Int -> Int
doubleVal x = x * 2

increment :: Int -> Int
increment x = x + 1

-- <<< composes right to left
doubleThenIncrement :: Int -> Int
doubleThenIncrement = increment <<< doubleVal
-- doubleThenIncrement 5 == 11

-- >>> composes left to right
incrementThenDouble :: Int -> Int
incrementThenDouble = increment >>> doubleVal
-- incrementThenDouble 5 == 12
```

**Special features:**
- `<<<` composes right to left (like `.` in Haskell)
- `>>>` composes left to right
- Defined in the `Semigroupoid` type class from `purescript-prelude`

**Further reading:**
- [PureScript Documentation - Semigroupoid](https://pursuit.purescript.org/packages/purescript-prelude/docs/Control.Semigroupoid)

</TabItem>
<TabItem value="python" label="Python">

```python
def double_val(x): return x * 2
def increment(x): return x + 1

# Manual composition with lambda
double_then_increment = lambda x: increment(double_val(x))
double_then_increment(5)  # 11

# Generic composition function
from functools import reduce

def compose(*funcs):
    return reduce(lambda f, g: lambda x: f(g(x)), funcs)

transform = compose(str, increment, double_val)
transform(5)  # "11"
```

**Special features:**
- No native composition operator or built-in `compose` function
- `functools` does not contain a composition function
- Composition is frequently implemented manually with lambda expressions

**Further reading:**
- [Python Documentation - functools](https://docs.python.org/3/library/functools.html)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
(define (double-val x) (* x 2))
(define (increment x) (+ x 1))

;; compose composes right to left
(define double-then-increment (compose increment double-val))
(double-then-increment 5)  ; 11

;; Compose multiple functions
(define transform (compose number->string increment double-val))
(transform 5)  ; "11"
```

**Special features:**
- `compose` is part of `racket/base` and immediately available
- Composes any number of functions from right to left
- `compose1` is an optimized variant for single-argument functions

**Further reading:**
- [Racket Documentation - compose](https://docs.racket-lang.org/reference/procedures.html#%28def._%28%28lib._racket%2Fprivate%2Flist..rkt%29._compose%29%29)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
double_val = ->(x) { x * 2 }
increment = ->(x) { x + 1 }

# >> composes left to right (since Ruby 2.6)
double_then_increment = double_val >> increment
double_then_increment.call(5)  # 11

# << composes right to left (since Ruby 2.6)
increment_then_double = double_val << increment
increment_then_double.call(5)  # 12
```

**Special features:**
- `Proc#>>` and `Proc#<<` since Ruby 2.6
- `>>` composes left to right, `<<` right to left
- `Method` objects also support `>>` and `<<`

**Further reading:**
- [Ruby Documentation - Proc#>>](https://docs.ruby-lang.org/en/master/Proc.html#method-i-3E-3E)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
val doubleVal: Int => Int = _ * 2
val increment: Int => Int = _ + 1

// andThen: links nach rechts
val doubleThenIncrement = doubleVal.andThen(increment)
doubleThenIncrement(5)  // 11

// compose: rechts nach links
val incrementThenDouble = doubleVal.compose(increment)
incrementThenDouble(5)  // 12
```

**Special features:**
- `Function1` provides `andThen` and `compose`
- `andThen` composes left to right
- `compose` composes right to left
- Also available for `PartialFunction`

**Further reading:**
- [Scala Documentation - Function1](https://www.scala-lang.org/api/current/scala/Function1.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
(define (double-val x) (* x 2))
(define (increment x) (+ x 1))

;; Manual composition function
(define (compose f g)
  (lambda (x) (f (g x))))

(define double-then-increment (compose increment double-val))
(double-then-increment 5)  ; 11
```

**Special features:**
- No built-in `compose` in the R7RS standard
- Trivial to implement with `lambda`
- Some Scheme implementations (e.g., Chez Scheme, Guile) provide `compose` as an extension

**Further reading:**
- [R7RS Standard](https://r7rs.org/)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
func doubleVal(_ x: Int) -> Int { x * 2 }
func increment(_ x: Int) -> Int { x + 1 }

// Generic composition function
func compose<A, B, C>(_ f: @escaping (B) -> C, _ g: @escaping (A) -> B) -> (A) -> C {
    return { x in f(g(x)) }
}

let doubleThenIncrement = compose(increment, doubleVal)
doubleThenIncrement(5)  // 11

// Custom composition operator
precedencegroup CompositionPrecedence {
    associativity: left
}
infix operator >>>: CompositionPrecedence
func >>> <A, B, C>(f: @escaping (A) -> B, g: @escaping (B) -> C) -> (A) -> C {
    return { x in g(f(x)) }
}

let transform = doubleVal >>> increment
transform(5)  // 11
```

**Special features:**
- No native composition operator
- Custom operators enable the definition of a custom composition operator
- `@escaping` is necessary since the functions are stored in a closure

**Further reading:**
- [Swift Documentation - Closures](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/closures/)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```wolfram
doubleVal[x_] := x * 2
increment[x_] := x + 1

(* Composition composes right to left *)
doubleThenIncrement = Composition[increment, doubleVal]
doubleThenIncrement[5]  (* 11 *)

(* Operator-Notation mit @* *)
doubleThenIncrement2 = increment @* doubleVal
doubleThenIncrement2[5]  (* 11 *)

(* RightComposition composes left to right *)
incrementThenDouble = RightComposition[increment, doubleVal]
incrementThenDouble[5]  (* 12 *)
```

**Special features:**
- `Composition` and `@*` compose right to left
- `RightComposition` and `/*` compose left to right
- Any number of functions can be composed
- `Identity` is the neutral element of composition

**Further reading:**
- [Wolfram Language Documentation - Composition](https://reference.wolfram.com/language/ref/Composition.html)

</TabItem>
</Tabs>

## 7.1.16. Memoization

Memoization is an optimization technique where the results of function calls are cached and returned directly from the cache on subsequent calls with the same arguments.

### Languages {#sprachen}

<Tabs availableTabs={['clojure', 'd', 'groovy', 'mercury', 'prolog', 'python', 'wolfram-language']} yellowTabs={['eiffel', 'perl', 'r']} orangeTabs={['haskell', 'java', 'javascript', 'kotlin', 'lua', 'ruby', 'scala', 'typescript']}>
<TabItem value="clojure" label="Clojure">

```clojure
(def fib
  (memoize
    (fn [n]
      (if (< n 2)
        n
        (+ (fib (- n 1)) (fib (- n 2)))))))

(fib 40)  ; immediately computed thanks to memoization
```

**Special features:**
- `memoize` is part of `clojure.core` and immediately available
- Wraps a function and caches results in an internal map
- Thread-safe through the use of atoms
- Cache grows unbounded — no automatic eviction

**Further reading:**
- [Clojure Documentation - memoize](https://clojuredocs.org/clojure.core/memoize)

</TabItem>
<TabItem value="d" label="D">

```d
// Required: import std.functional : memoize
int square(int n) {
    return n * n;
}

alias cachedSquare = memoize!square;
cachedSquare(5);  // 25 — computation on first call
cachedSquare(5);  // 25 — from cache

// Recursive memoization requires manual approach
ulong[ulong] fibCache;

ulong fib(ulong n) {
    if (auto p = n in fibCache) return *p;
    ulong result = n < 2 ? n : fib(n - 1) + fib(n - 2);
    fibCache[n] = result;
    return result;
}

fib(40);  // immediately computed thanks to memoization
```

**Special features:**
- `std.functional.memoize` is a template that creates a memoized version of a function
- For recursive functions: recursive calls do not automatically use the cache — manual approach with associative array needed
- Configurable cache size limit via template parameters

**Further reading:**
- [D Language - std.functional](https://dlang.org/phobos/std_functional.html#memoize)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
-- once functions: result is computed and stored on first call
feature
    pi_approximation: REAL_64
        once
            Result := compute_expensive_pi
        end

    shared_config: CONFIG
        once
            create Result.make_from_file ("config.json")
        end
```

**Special features:**
- `once` functions compute their result only on the first call and cache it
- Only for parameterless functions — no argument-based memoization
- Various `once` variants: `once ("PROCESS")`, `once ("THREAD")`, `once ("OBJECT")`
- `once ("PROCESS")` caches for the entire process (default), `once ("OBJECT")` per object

**Further reading:**
- [Eiffel Documentation - Once Routines](https://www.eiffel.org/doc/eiffel/Once_routines)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Required: import groovy.transform.Memoized
@Memoized
long fib(long n) {
    if (n < 2) return n
    return fib(n - 1) + fib(n - 2)
}

fib(40)  // immediately computed thanks to memoization
```

**Special features:**
- `@Memoized` is a built-in AST transformation
- Recursive calls automatically use the cache
- Optional: `@Memoized(maxCacheSize = 100)` limits the cache size
- Also applicable to closures with `.memoize()`

**Further reading:**
- [Groovy Documentation - @Memoized](https://groovy-lang.org/metaprogramming.html#xform-Memoized)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Memoization via tabling (pragma memo)
% Mercury provides built-in memoization via the pragma directive.

:- module fib_memo.
:- interface.
:- import_module io.
:- pred main(io::di, io::uo) is det.
:- implementation.
:- import_module int, string.

% Memoized function with pragma memo
:- func fib(int) = int.
:- pragma memo(fib/1).
fib(N) =
    ( if N < 2 then N
      else fib(N - 1) + fib(N - 2)
    ).

main(!IO) :-
    Result = fib(40),
    io.format("fib(40) = %d\n", [i(Result)], !IO).
```

**Special features:**
- Mercury provides built-in memoization via `:- pragma memo(pred_name/arity)`.
- Tabled evaluation automatically caches computed results.
- Particularly useful for recursive functions like Fibonacci.
- Memoization is managed by the compiler and requires no manual cache implementation.
- Works for both `func` and `pred` declarations.

**Further reading:**
- [Mercury Language Reference - Tabling pragmas](https://www.mercurylang.org/information/doc-release/mercury_ref/Tabling-pragmas.html)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Memoization via lazy evaluation and indexed list
fib :: Int -> Integer
fib = (map fib' [0..] !!)
  where
    fib' 0 = 0
    fib' 1 = 1
    fib' n = fib (n - 1) + fib (n - 2)

-- fib 40 — immediately computed thanks to memoization
```

**Special features:**
- No built-in memoization function
- Lazy evaluation enables memoization via indexed data structures (lists, arrays)
- The list `map fib' [0..]` is generated lazily — each element is computed only once
- Libraries like `MemoTrie` and `data-memocombinators` provide generic memoization

**Further reading:**
- [Haskell Wiki - Memoization](https://wiki.haskell.org/Memoization)

</TabItem>
<TabItem value="java" label="Java">

```java
private Map<Long, Long> cache = new HashMap<>();

long fib(long n) {
    if (cache.containsKey(n)) return cache.get(n);
    long result;
    if (n < 2) result = n;
    else result = fib(n - 1) + fib(n - 2);
    cache.put(n, result);
    return result;
}

fib(40);  // immediately computed thanks to memoization
```

**Special features:**
- No built-in memoization mechanism
- `HashMap`-based memoization is the common pattern
- For thread safety: use `ConcurrentHashMap`
- `Map.computeIfAbsent` can be used for non-recursive functions

**Further reading:**
- [Oracle Java Documentation - HashMap](https://docs.oracle.com/javase/8/docs/api/java/util/HashMap.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
function memoize(fn) {
    const cache = new Map();
    return function(n) {
        if (cache.has(n)) return cache.get(n);
        const result = fn(n);
        cache.set(n, result);
        return result;
    };
}

const fib = memoize(n => {
    if (n < 2) return n;
    return fib(n - 1) + fib(n - 2);
});

fib(40);  // immediately computed thanks to memoization
```

**Special features:**
- No built-in memoization mechanism
- `Map`-based closures are the common pattern
- `WeakMap` can be used for object-based keys to avoid memory leaks
- Libraries like Lodash provide `_.memoize()`

**Further reading:**
- [MDN Web Docs - Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
val cache = mutableMapOf<Long, Long>()

fun fib(n: Long): Long = cache.getOrPut(n) {
    if (n < 2) n else fib(n - 1) + fib(n - 2)
}

fib(40)  // immediately computed thanks to memoization
```

**Special features:**
- No built-in memoization mechanism
- `MutableMap.getOrPut()` is an elegant pattern for cache logic
- `lazy { }` provides memoization for parameterless computations
- For thread safety: `ConcurrentHashMap` or `lazy(LazyThreadSafetyMode.SYNCHRONIZED)`

**Further reading:**
- [Kotlin Documentation - getOrPut](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/get-or-put.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
local cache = {}

function fib(n)
    if cache[n] then return cache[n] end
    local result
    if n < 2 then
        result = n
    else
        result = fib(n - 1) + fib(n - 2)
    end
    cache[n] = result
    return result
end

fib(40)  -- immediately computed thanks to memoization
```

**Special features:**
- No built-in memoization mechanism
- Table-based caches are the common pattern in Lua
- Metatables can be used for transparent caching
- Simple implementation thanks to Lua tables as a universal data structure

**Further reading:**
- [Lua Documentation - Tables](https://www.lua.org/manual/5.4/manual.html#2.1)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Required: use Memoize (CPAN module)
use Memoize;

sub fib {
    my ($n) = @_;
    return $n if $n < 2;
    return fib($n - 1) + fib($n - 2);
}

memoize('fib');
fib(40);  # immediately computed thanks to memoization
```

**Special features:**
- `Memoize` is a widely used CPAN module (not in Perl core)
- `memoize('functionname')` replaces the function with a cached version
- Supports various cache backends via `HASH` option
- `Memoize::Expire` enables time-based cache eviction

**Further reading:**
- [CPAN - Memoize](https://metacpan.org/pod/Memoize)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Tabling (Memoization) with :- table directive
:- table fib/2.

fib(0, 0).
fib(1, 1).
fib(N, Result) :-
    N > 1,
    N1 is N - 1,
    N2 is N - 2,
    fib(N1, R1),
    fib(N2, R2),
    Result is R1 + R2.

?- fib(40, Result).
%  Result = 102334155 (immediately computed thanks to tabling)
```

**Special features:**
- `:- table predicate/arity.` activates automatic tabling (memoization)
- Results are returned from the cache on subsequent calls with the same arguments
- Tabling also prevents infinite loops in left-recursive predicates
- Available in SWI-Prolog, XSB, YAP, B-Prolog and other implementations

**Further reading:**
- [SWI-Prolog Documentation - Tabling](https://www.swi-prolog.org/pldoc/man?section=tabling)

</TabItem>
<TabItem value="python" label="Python">

```python
# @cache — unlimited cache (since Python 3.9)
from functools import cache

@cache
def fib(n):
    if n < 2:
        return n
    return fib(n - 1) + fib(n - 2)

fib(40)  # immediately computed thanks to memoization

# @lru_cache — with optional size limit (since Python 3.2)
from functools import lru_cache

@lru_cache(maxsize=128)
def fib_limited(n):
    if n < 2:
        return n
    return fib_limited(n - 1) + fib_limited(n - 2)
```

**Special features:**
- `@cache` (since Python 3.9) — unlimited cache, equivalent to `@lru_cache(maxsize=None)`
- `@lru_cache` (since Python 3.2) — LRU cache with configurable size limit
- `cache_info()` provides statistics (hits, misses, size)
- `cache_clear()` clears the cache
- Thread-safe implementation

**Further reading:**
- [Python Documentation - functools.cache](https://docs.python.org/3/library/functools.html#functools.cache)

</TabItem>
<TabItem value="r" label="R">

```r
# Required: library(memoise)
library(memoise)

fib <- memoise(function(n) {
    if (n < 2) return(n)
    fib(n - 1) + fib(n - 2)
})

fib(40)  # immediately computed thanks to memoization
```

**Special features:**
- `memoise` is a separate R package (not in base R)
- Recursive calls automatically use the cache
- Various cache backends: in-memory, filesystem, AWS S3
- `forget(fib)` clears the cache of a memoized function

**Further reading:**
- [CRAN - memoise](https://cran.r-project.org/web/packages/memoise/index.html)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
def fib(n, cache = {})
  cache[n] ||= n < 2 ? n : fib(n - 1, cache) + fib(n - 2, cache)
end

fib(40)  # immediately computed thanks to memoization
```

**Special features:**
- No built-in memoization mechanism
- `||=` is the idiomatic Ruby pattern for lazy caching
- Hash as default parameter is a common memoization pattern
- For class-based memoization: `@cache` instance variable or the `memoizable` gem

**Further reading:**
- [Ruby Documentation - Hash](https://docs.ruby-lang.org/en/master/Hash.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
val cache = scala.collection.mutable.Map[Long, Long]()

def fib(n: Long): Long = cache.getOrElseUpdate(n, {
  if (n < 2) n else fib(n - 1) + fib(n - 2)
})

fib(40)  // immediately computed thanks to memoization
```

**Special features:**
- No built-in memoization mechanism
- `mutable.Map.getOrElseUpdate` is an elegant pattern for cache logic
- `lazy val` provides memoization for parameterless computations
- Libraries like Scalaz and Cats provide functional memoization abstraction

**Further reading:**
- [Scala Documentation - mutable.Map](https://www.scala-lang.org/api/current/scala/collection/mutable/Map.html)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
function memoize(fn) {
    const cache = new Map();
    return function(n) {
        if (cache.has(n)) return cache.get(n);
        const result = fn(n);
        cache.set(n, result);
        return result;
    };
}

const fib = memoize(n => {
    if (n < 2) return n;
    return fib(n - 1) + fib(n - 2);
});

fib(40);  // immediately computed thanks to memoization
```

**Special features:**
- Identical pattern as in JavaScript
- No built-in memoization mechanism
- `Map`-based closures are the common pattern
- Libraries like Lodash provide typed `_.memoize()`

**Further reading:**
- [MDN Web Docs - Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```wolfram
(* Definition-based memoization *)
fib[0] = 0;
fib[1] = 1;
fib[n_] := fib[n] = fib[n - 1] + fib[n - 2]

fib[40]  (* immediately computed thanks to memoization *)

(* Once — result is computed once and stored *)
expensiveResult = Once[LongComputation[]]
```

**Special features:**
- `f[n_] := f[n] = expr` is the idiomatic memoization pattern: the expression is evaluated and stored as a specific rule `f[n] = result`
- `Once[expr]` computes `expr` once and caches the result permanently
- Stored definitions can be inspected with `Clear[f]` or `DownValues`
- No automatic cache eviction — manual management required

**Further reading:**
- [Wolfram Language Documentation - Once](https://reference.wolfram.com/language/ref/Once.html)

</TabItem>
</Tabs>

