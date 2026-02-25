---
slug: /collections/collections
title: 10.1. Collections
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 10.1. Collections

Various collection types and data structures.

## 10.1.1. Arrays

Homogeneous, index-based collections of elements with fixed or variable size. Enable direct access to elements via numeric indices.

### Languages {#sprachen}

<Tabs availableTabs={['ada', 'c', 'carbon', 'clojure', 'common-lisp', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'eiffel', 'elixir', 'elm', 'erlang', 'fsharp', 'fortran', 'gleam', 'go', 'groovy', 'haskell', 'haxe', 'idris', 'java', 'javascript', 'julia', 'kotlin', 'lean4', 'mercury', 'lua', 'matlab', 'mojo', 'nim', 'objective-c', 'object-pascal', 'ocaml', 'octave', 'odin', 'perl', 'php', 'purescript', 'python', 'r', 'racket', 'roc', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'vbnet', 'v', 'wolfram-language', 'zig']}>
<TabItem value="ada" label="Ada">

```ada
-- Array declaration and initialization
type Integer_Array is array (1 .. 5) of Integer;
numbers : Integer_Array := (10, 20, 30, 40, 50);

-- Access elements
numbers(1) := 15;
first := numbers(1);

-- Array length
length := numbers'Length;
```

**Special features:**
- Arrays have fixed size at compile time
- Index range is explicitly specified (e.g. `1 .. 5`)
- Type-safe and bounds-checked

**Further reading:**
- [Ada Reference Manual - Arrays](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-3-6.html)

</TabItem>
<TabItem value="c" label="C">

```c
// Array declaration and initialization
int numbers[5] = {10, 20, 30, 40, 50};

// Access elements
numbers[0] = 15;
int first = numbers[0];

// Array length (only known at compile time)
size_t length = sizeof(numbers) / sizeof(numbers[0]);
```

**Special features:**
- Arrays have fixed size
- Index starts at 0
- No automatic bounds checking
- Arrays decay to pointers in function calls

**Further reading:**
- [C Standard - Array Types](https://en.cppreference.com/w/c/language/array)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Array declaration (experimental)
var numbers: [i32; 5] = (10, 20, 30, 40, 50);

// Access elements
numbers[0] = 15;
var first: i32 = numbers[0];
```

**Special features:**
- Experimental language, syntax may still change
- C++-like syntax with modern features

**Further reading:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Array-like vectors
(def numbers [10 20 30 40 50])

;; Access elements
(assoc numbers 0 15)
(def first (get numbers 0))

;; Array length
(count numbers)
```

**Special features:**
- Uses vectors (persistent data structures) instead of arrays
- Immutable by default
- Index starts at 0

**Further reading:**
- [Clojure Documentation - Vectors](https://clojure.org/reference/data_structures#Vectors)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Array declaration
(setf numbers (make-array 5 :initial-contents '(10 20 30 40 50)))

;; Access elements
(setf (aref numbers 0) 15)
(setf first (aref numbers 0))

;; Array length
(array-dimension numbers 0)
```

**Special features:**
- Arrays can be multidimensional
- Index starts at 0
- Supports adjustable arrays

**Further reading:**
- [Common Lisp HyperSpec - Arrays](http://www.lispworks.com/documentation/HyperSpec/Body/t_array.htm)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Array declaration (C-style)
int numbers[5] = {10, 20, 30, 40, 50};

// Access elements
numbers[0] = 15;
int first = numbers[0];

// std::array (since C++11)
std::array<int, 5> numbers2 = {10, 20, 30, 40, 50};
numbers2[0] = 15;
size_t length = numbers2.size();
```

**Special features:**
- Supports both C-style arrays and `std::array`
- `std::array` provides better type safety and methods
- Index starts at 0

**Further reading:**
- [cppreference.com - std::array](https://en.cppreference.com/w/cpp/container/array)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Array declaration
numbers = [10, 20, 30, 40, 50]

# Access elements
numbers[0] = 15
first = numbers[0]

# Array length
length = numbers.size
```

**Special features:**
- Dynamic size
- Index starts at 0
- Supports negative indices for access from the end

**Further reading:**
- [Crystal Documentation - Arrays](https://crystal-lang.org/reference/1.11/syntax_and_semantics/literals/array.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Array declaration
int[] numbers = {10, 20, 30, 40, 50};

// Access elements
numbers[0] = 15;
int first = numbers[0];

// Array length
int length = numbers.Length;
```

**Special features:**
- Arrays have fixed size after initialization
- Index starts at 0
- Runtime bounds checking

**Further reading:**
- [Microsoft C# Documentation - Arrays](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/arrays/)

</TabItem>
<TabItem value="d" label="D">

```d
// Array declaration
int[] numbers = [10, 20, 30, 40, 50];

// Access elements
numbers[0] = 15;
int first = numbers[0];

// Array length
size_t length = numbers.length;
```

**Special features:**
- Dynamic arrays are standard
- Index starts at 0
- Supports slicing

**Further reading:**
- [D Language Specification - Arrays](https://dlang.org/spec/arrays.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Array-like lists
var numbers = [10, 20, 30, 40, 50];

// Access elements
numbers[0] = 15;
var first = numbers[0];

// Array length
int length = numbers.length;
```

**Special features:**
- Uses lists instead of arrays
- Dynamic size
- Index starts at 0

**Further reading:**
- [Dart Language Tour - Lists](https://dart.dev/guides/language/language-tour#lists)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
-- Array declaration
numbers: ARRAY [INTEGER]
create numbers.make_filled (0, 1, 5)
numbers.put (10, 1)
numbers.put (20, 2)
numbers.put (30, 3)
numbers.put (40, 4)
numbers.put (50, 5)

-- Access elements
numbers.put (15, 1)
first := numbers.item (1)
```

**Special features:**
- Index starts at 1 (not 0)
- Type-safe with generics
- Runtime bounds checking

**Further reading:**
- [Eiffel Documentation - ARRAY](https://www.eiffel.org/doc/eiffel/ET-Library/ARRAY)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Lists (immutable)
numbers = [10, 20, 30, 40, 50]

# Access elements (read-only)
first = List.first(numbers)
second = Enum.at(numbers, 1)

# New list with change
numbers = List.replace_at(numbers, 0, 15)
```

**Special features:**
- Uses lists instead of arrays
- Immutable by default
- Index starts at 0

**Further reading:**
- [Elixir Documentation - Lists](https://hexdocs.pm/elixir/List.html)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Requires: import Array
-- Arrays (immutable, index-based)
numbers = Array.fromList [10, 20, 30, 40, 50]

-- Access elements (returns Maybe)
first = Array.get 0 numbers     -- Just 10
third = Array.get 2 numbers     -- Just 30
outOfBounds = Array.get 99 numbers  -- Nothing

-- Array operations
updated = Array.set 1 99 numbers
length = Array.length numbers   -- 5
```

**Special features:**
- `Array` is a separate module (not `List`)
- Index-based access via `Array.get` (returns `Maybe`)
- Immutable: `Array.set` creates a new array
- O(log n) access (implemented as relaxed radix balanced tree)

**Further reading:**
- [Elm Documentation - Array](https://package.elm-lang.org/packages/elm/core/latest/Array)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% Lists (immutable)
Numbers = [10, 20, 30, 40, 50],

% Access elements
First = lists:nth(1, Numbers),
Length = length(Numbers)
```

**Special features:**
- Uses lists instead of arrays
- Immutable by default
- Index starts at 1

**Further reading:**
- [Erlang Documentation - Lists](https://www.erlang.org/doc/man/lists.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Array declaration
let numbers = [|10; 20; 30; 40; 50|]

// Access elements
numbers.[0] <- 15
let first = numbers.[0]

// Array length
let length = Array.length numbers
```

**Special features:**
- Arrays are mutable
- Index starts at 0
- Also supports immutable lists

**Further reading:**
- [F# Documentation - Arrays](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/arrays)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Array declaration
integer :: numbers(5)
numbers = [10, 20, 30, 40, 50]

! Access elements
numbers(1) = 15
first = numbers(1)

! Array length
length = size(numbers)
```

**Special features:**
- Index starts at 1 (standard)
- Supports multidimensional arrays
- Column-major order

**Further reading:**
- [Fortran Standard - Arrays](https://gcc.gnu.org/onlinedocs/gfortran/Arrays.html)

</TabItem>
<TabItem value="gleam" label="Gleam">

```erlang
// Lists (immutable)
let numbers = [10, 20, 30, 40, 50]

// Access elements
case numbers {
  [first, ..] -> first
  _ -> 0
}
```

**Special features:**
- Uses lists instead of arrays
- Immutable by default
- Pattern matching for access

**Further reading:**
- [Gleam Documentation - Lists](https://gleam.run/documentation/tour/lists/)

</TabItem>
<TabItem value="go" label="Go">

```go
// Array declaration (fixed size)
var numbers [5]int = [5]int{10, 20, 30, 40, 50}

// Access elements
numbers[0] = 15
first := numbers[0]

// Array length
length := len(numbers)
```

**Special features:**
- Arrays have fixed size
- Slices are more flexible and commonly used
- Index starts at 0

**Further reading:**
- [Go Documentation - Arrays](https://go.dev/tour/moretypes/6)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Array declaration
def numbers = [10, 20, 30, 40, 50] as int[]

// Access elements
numbers[0] = 15
def first = numbers[0]

// Array length
def length = numbers.length
```

**Special features:**
- Supports both arrays and lists
- Index starts at 0
- Dynamic typing

**Further reading:**
- [Groovy Documentation - Arrays](https://groovy-lang.org/syntax.html#_arrays)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Lists (immutable)
numbers = [10, 20, 30, 40, 50]

-- Access elements
first = head numbers
rest = tail numbers
element = numbers !! 0
```

**Special features:**
- Uses lists instead of arrays
- Immutable by default
- Lazy evaluation possible

**Further reading:**
- [Haskell Documentation - Lists](https://www.haskell.org/tutorial/lists.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Array declaration
var numbers = [10, 20, 30, 40, 50];

// Access elements
numbers[0] = 15;
var first = numbers[0];

// Array length
var length = numbers.length;
```

**Special features:**
- Dynamic arrays
- Index starts at 0
- Cross-platform

**Further reading:**
- [Haxe Documentation - Array](https://haxe.org/manual/std-Array.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Lists (immutable)
numbers : List Int
numbers = [10, 20, 30, 40, 50]

-- Access elements
first = head numbers
rest = tail numbers
```

**Special features:**
- Uses lists instead of arrays
- Immutable by default
- Dependent types

**Further reading:**
- [Idris 2 Documentation - Types and Functions](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html#lists)

</TabItem>
<TabItem value="java" label="Java">

```java
// Array declaration
int[] numbers = {10, 20, 30, 40, 50};

// Access elements
numbers[0] = 15;
int first = numbers[0];

// Array length
int length = numbers.length;
```

**Special features:**
- Arrays have fixed size after initialization
- Index starts at 0
- Runtime bounds checking

**Further reading:**
- [Oracle Java Documentation - Arrays](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/arrays.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Array declaration
const numbers = [10, 20, 30, 40, 50];

// Access elements
numbers[0] = 15;
const first = numbers[0];

// Array length
const length = numbers.length;
```

**Special features:**
- Dynamic size
- Index starts at 0
- Arrays are objects

**Further reading:**
- [MDN Web Docs - Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Array declaration
numbers = [10, 20, 30, 40, 50]

# Access elements
numbers[1] = 15
first = numbers[1]

# Array length
length = length(numbers)
```

**Special features:**
- Index starts at 1 (not 0)
- Supports multidimensional arrays
- Column-major order

**Further reading:**
- [Julia Documentation - Arrays](https://docs.julialang.org/en/v1/manual/arrays/)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Array declaration
val numbers = arrayOf(10, 20, 30, 40, 50)

// Access elements
numbers[0] = 15
val first = numbers[0]

// Array length
val length = numbers.size
```

**Special features:**
- Arrays have fixed size
- Index starts at 0
- Runtime bounds checking

**Further reading:**
- [Kotlin Documentation - Arrays](https://kotlinlang.org/docs/arrays.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Array declaration
def numbers : Array Nat := #[10, 20, 30, 40, 50]

-- Access elements (type-safe with proof)
def first := numbers[0]!

-- Array length
def length := numbers.size

-- New array (push creates copy, optimized with unique reference)
def numbers2 := numbers.push 60
```

**Special features:**
- `Array α` as dynamic, contiguous array
- `#[...]` literal syntax for array creation
- `[i]!` for access with runtime bounds check (panic on index error)
- Compiler optimizes with unique reference to in-place mutation

**Further reading:**
- [Lean 4 Documentation - Array](https://lean-lang.org/lean4/doc/array.html)
- [Functional Programming in Lean - Arrays](https://lean-lang.org/functional_programming_in_lean/)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Requires: :- import_module array.
Array = array.from_list([10, 20, 30, 40, 50]),

% Access elements
First = array.lookup(Array, 0),    % First = 10

% Array length
Length = array.size(Array),        % Length = 5

% Modify element (creates new array or in-place with unique modes)
array.set(0, 15, Array, Array2)
```

**Special features:**
- `array` module for index-based, contiguous arrays
- `array.from_list/1` creates array from list
- `array.lookup/2` for O(1) access, `array.set/4` for modification
- Destructive update only with unique modes (`di`/`uo`)

**Further reading:**
- [Mercury Standard Library - array](https://www.mercurylang.org/information/doc-release/mercury_library/array.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Tables (arrays are tables with numeric indices)
numbers = {10, 20, 30, 40, 50}

-- Access elements
numbers[1] = 15
first = numbers[1]

-- Array length
length = #numbers
```

**Special features:**
- Arrays are tables with numeric indices
- Index starts at 1 (standard)
- Dynamic size

**Further reading:**
- [Lua Documentation - Tables](https://www.lua.org/manual/5.4/manual.html#2.1)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% Array declaration
numbers = [10, 20, 30, 40, 50];

% Access elements
numbers(1) = 15;
first = numbers(1);

% Array length
length = length(numbers);
```

**Special features:**
- Index starts at 1 (not 0)
- Supports multidimensional arrays
- Column-major order

**Further reading:**
- [MATLAB Documentation - Arrays](https://www.mathworks.com/help/matlab/learn_matlab/arrays.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# Array declaration
var numbers = Array[Int](10, 20, 30, 40, 50)

# Access elements
numbers[0] = 15
var first = numbers[0]

# Array length
var length = len(numbers)
```

**Special features:**
- Python-like syntax
- Index starts at 0
- Performance-oriented

**Further reading:**
- [Mojo Documentation](https://docs.modular.com/mojo/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Array declaration
var numbers = [10, 20, 30, 40, 50]

# Access elements
numbers[0] = 15
let first = numbers[0]

# Array length
let length = len(numbers)
```

**Special features:**
- Arrays have fixed size
- Index starts at 0
- Sequences are more flexible

**Further reading:**
- [Nim Documentation - Arrays](https://nim-lang.org/docs/manual.html#types-array-and-sequence-types)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// NSArray (immutable)
NSArray *numbers = @[@10, @20, @30, @40, @50];

// Access elements
NSNumber *first = numbers[0];

// NSMutableArray (mutable)
NSMutableArray *mutableNumbers = [@[@10, @20, @30, @40, @50] mutableCopy];
mutableNumbers[0] = @15;
```

**Special features:**
- Uses NSArray/NSMutableArray
- Index starts at 0
- Reference counting

**Further reading:**
- [Apple Documentation - NSArray](https://developer.apple.com/documentation/foundation/nsarray)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Array declaration
var
  numbers: array[0..4] of Integer = (10, 20, 30, 40, 50);

// Access elements
numbers[0] := 15;
first := numbers[0];

// Array length
length := Length(numbers);
```

**Special features:**
- Arrays have fixed size
- Index range is explicitly specified
- Type-safe

**Further reading:**
- [Free Pascal Documentation - Arrays](https://www.freepascal.org/docs-html/ref/refsu14.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Array declaration *)
let numbers = [|10; 20; 30; 40; 50|]

(* Access elements *)
numbers.(0) <- 15
let first = numbers.(0)

(* Array length *)
let length = Array.length numbers
```

**Special features:**
- Arrays are mutable
- Index starts at 0
- Also supports immutable lists

**Further reading:**
- [OCaml Documentation - Arrays](https://v2.ocaml.org/api/Array.html)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
% Array declaration
numbers = [10, 20, 30, 40, 50];

% Access elements
numbers(1) = 15;
first = numbers(1);

% Array length
length = length(numbers);
```

**Special features:**
- Index starts at 1 (not 0)
- Supports multidimensional arrays
- MATLAB-compatible

**Further reading:**
- [GNU Octave Documentation - Matrices](https://octave.org/doc/v8.1.0/Matrices.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Array declaration
numbers: [5]int = {10, 20, 30, 40, 50}

// Access elements
numbers[0] = 15
first := numbers[0]

// Array length
length := len(numbers)
```

**Special features:**
- Arrays have fixed size
- Index starts at 0
- C-like syntax

**Further reading:**
- [Odin Documentation - Arrays](https://odin-lang.org/docs/overview/#arrays)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Array declaration
my @numbers = (10, 20, 30, 40, 50);

# Access elements
$numbers[0] = 15;
my $first = $numbers[0];

# Array length
my $length = scalar @numbers;
```

**Special features:**
- Arrays have dynamic size
- Index starts at 0
- Context-sensitive (scalar vs. list)

**Further reading:**
- [Perl Documentation - Arrays](https://perldoc.perl.org/perldata#Arrays)

</TabItem>
<TabItem value="php" label="PHP">

```php
// Array declaration
$numbers = [10, 20, 30, 40, 50];

// Access elements
$numbers[0] = 15;
$first = $numbers[0];

// Array length
$length = count($numbers);
```

**Special features:**
- Arrays are associative arrays
- Dynamic size
- Index starts at 0

**Further reading:**
- [PHP Documentation - Arrays](https://www.php.net/manual/en/language.types.array.php)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Arrays
let numbers = [10, 20, 30, 40, 50]

-- Access elements
first = numbers !! 0

-- Array length
length = length numbers
```

**Special features:**
- Arrays are immutable
- Index starts at 0
- Functional programming

**Further reading:**
- [PureScript Documentation - Arrays](https://pursuit.purescript.org/packages/purescript-arrays)

</TabItem>
<TabItem value="python" label="Python">

```python
# Lists (array-like)
numbers = [10, 20, 30, 40, 50]

# Access elements
numbers[0] = 15
first = numbers[0]

# Array length
length = len(numbers)
```

**Special features:**
- Uses lists instead of arrays
- Dynamic size
- Index starts at 0

**Further reading:**
- [Python Documentation - Lists](https://docs.python.org/3/tutorial/datastructures.html#more-on-lists)

</TabItem>
<TabItem value="r" label="R">

```r
# Vectors (arrays)
numbers <- c(10, 20, 30, 40, 50)

# Access elements
numbers[1] <- 15
first <- numbers[1]

# Array length
length <- length(numbers)
```

**Special features:**
- Uses vectors instead of arrays
- Index starts at 1 (not 0)
- All elements must have the same type

**Further reading:**
- [R Documentation - Vectors](https://cran.r-project.org/doc/manuals/r-release/R-intro.html#Vectors-and-assignment)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
;; Vectors (arrays)
(define numbers (vector 10 20 30 40 50))

;; Access elements
(vector-set! numbers 0 15)
(define first (vector-ref numbers 0))

;; Array length
(define length (vector-length numbers))
```

**Special features:**
- Uses vectors instead of arrays
- Index starts at 0
- Mutable

**Further reading:**
- [Racket Documentation - Vectors](https://docs.racket-lang.org/reference/vectors.html)

</TabItem>
<TabItem value="roc" label="Roc">

```roc
# Lists (immutable)
numbers = [10, 20, 30, 40, 50]

# Access elements
first = List.get numbers 0
```

**Special features:**
- Uses lists instead of arrays
- Immutable by default
- Functional programming

**Further reading:**
- [Roc Documentation - Lists](https://www.roc-lang.org/builtins/List)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Array declaration
numbers = [10, 20, 30, 40, 50]

# Access elements
numbers[0] = 15
first = numbers[0]

# Array length
length = numbers.length
```

**Special features:**
- Dynamic size
- Index starts at 0
- Supports negative indices

**Further reading:**
- [Ruby Documentation - Arrays](https://ruby-doc.org/core-3.1.0/Array.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Array declaration (fixed size)
let mut numbers = [10, 20, 30, 40, 50];

// Access elements
numbers[0] = 15;
let first = numbers[0];

// Array length
let length = numbers.len();
```

**Special features:**
- Arrays have fixed size at compile time
- Vectors are more flexible
- Index starts at 0
- Runtime bounds checking

**Further reading:**
- [Rust Documentation - Arrays](https://doc.rust-lang.org/book/ch03-02-data-types.html#the-array-type)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Array declaration
val numbers = Array(10, 20, 30, 40, 50)

// Access elements
numbers(0) = 15
val first = numbers(0)

// Array length
val length = numbers.length
```

**Special features:**
- Arrays are mutable
- Index starts at 0
- Also supports immutable collections

**Further reading:**
- [Scala Documentation - Arrays](https://docs.scala-lang.org/overviews/collections-2.13/arrays.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; Vectors (arrays)
(define numbers (vector 10 20 30 40 50))

;; Access elements
(vector-set! numbers 0 15)
(define first (vector-ref numbers 0))

;; Array length
(define length (vector-length numbers))
```

**Special features:**
- Uses vectors instead of arrays
- Index starts at 0
- Mutable

**Further reading:**
- [R7RS Scheme - Vectors](https://small.r7rs.org/attachment/r7rs.pdf)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Array declaration
var numbers = [10, 20, 30, 40, 50]

// Access elements
numbers[0] = 15
let first = numbers[0]

// Array length
let length = numbers.count
```

**Special features:**
- Arrays have dynamic size
- Index starts at 0
- Value semantics

**Further reading:**
- [Swift Documentation - Arrays](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/collectiontypes/#Arrays)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Array declaration
const numbers: number[] = [10, 20, 30, 40, 50];

// Access elements
numbers[0] = 15;
const first = numbers[0];

// Array length
const length = numbers.length;
```

**Special features:**
- Dynamic size
- Index starts at 0
- Type annotations optional

**Further reading:**
- [TypeScript Handbook - Arrays](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Array declaration
Dim numbers() As Integer = {10, 20, 30, 40, 50}

' Access elements
numbers(0) = 15
Dim first As Integer = numbers(0)

' Array length
Dim length As Integer = numbers.Length
```

**Special features:**
- Arrays have fixed size after initialization
- Index starts at 0
- Runtime bounds checking

**Further reading:**
- [Microsoft VB.NET Documentation - Arrays](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/arrays/)

</TabItem>
<TabItem value="v" label="V">

```v
// Array declaration
mut numbers := [10, 20, 30, 40, 50]

// Access elements
numbers[0] = 15
first := numbers[0]

// Array length
length := numbers.len
```

**Special features:**
- Arrays have fixed size
- Index starts at 0
- Immutable by default (mut required)

**Further reading:**
- [V Documentation - Arrays](https://github.com/vlang/v/blob/master/doc/docs.md#arrays)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Lists (arrays) *)
numbers = {10, 20, 30, 40, 50};

(* Access elements *)
numbers[[1]] = 15;
first = numbers[[1]];

(* Array length *)
length = Length[numbers]
```

**Special features:**
- Uses lists instead of arrays
- Index starts at 1 (not 0)
- Negative indices for access from the end: `numbers[[-1]]`

**Further reading:**
- [Wolfram Language Documentation - Lists](https://reference.wolfram.com/language/guide/Lists.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Array declaration
var numbers = [_]i32{10, 20, 30, 40, 50};

// Access elements
numbers[0] = 15;
const first = numbers[0];

// Array length
const length = numbers.len;
```

**Special features:**
- Arrays have fixed size at compile time
- Index starts at 0
- Slices are more flexible

**Further reading:**
- [Zig Documentation - Arrays](https://ziglang.org/documentation/0.11.0/#Arrays)

</TabItem>
</Tabs>


## 10.1.2. Lists

Dynamic, sequential collections of elements that are typically more flexible than arrays. Often support insertion, deletion, and modification of elements at runtime.

### Languages {#sprachen}

<Tabs availableTabs={['carbon', 'clojure', 'common-lisp', 'crystal', 'csharp', 'dart', 'elixir', 'elm', 'erlang', 'fsharp', 'gleam', 'go', 'groovy', 'haskell', 'haxe', 'idris', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'mercury', 'lua', 'mojo', 'nim', 'object-pascal', 'ocaml', 'perl', 'php', 'purescript', 'python', 'r', 'racket', 'roc', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'vbnet', 'wolfram-language']}>
<TabItem value="carbon" label="Carbon">

```cpp
// Lists (experimental)
var items: List<i32> = (10, 20, 30);
items.append(40);
```

**Special features:**
- Experimental language, syntax may still change

**Further reading:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Lists
(def items (list 10 20 30))
(def items2 (conj items 40))
```

**Special features:**
- Lists are immutable and persistent
- `conj` adds at the beginning (not at the end)
- Vectors are better suited for sequential access

**Further reading:**
- [Clojure Documentation - Lists](https://clojure.org/reference/data_structures#Lists)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Lists
(setf items (list 10 20 30))
(setf items (append items (list 40)))
```

**Special features:**
- Lists are the fundamental data structure
- Linked lists, not arrays
- `cons` for construction, `car`/`cdr` for access

**Further reading:**
- [Common Lisp HyperSpec - Lists](http://www.lispworks.com/documentation/HyperSpec/Body/t_list.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Lists (arrays are used as lists)
items = [10, 20, 30]
items << 40
```

**Special features:**
- Arrays are used as lists
- Dynamic size
- Supports all list operations

**Further reading:**
- [Crystal Documentation - Arrays](https://crystal-lang.org/reference/1.11/syntax_and_semantics/literals/array.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// List<T> (since .NET 2.0)
var items = new List<int> { 10, 20, 30 };
items.Add(40);
```

**Special features:**
- `List<T>` is the standard list
- Dynamic size
- Type-safe with generics

**Further reading:**
- [Microsoft C# Documentation - List](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Lists
var items = [10, 20, 30];
items.add(40);
```

**Special features:**
- Lists are the standard collection
- Dynamic size
- Growable lists

**Further reading:**
- [Dart Language Tour - Lists](https://dart.dev/guides/language/language-tour#lists)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Lists (immutable)
items = [10, 20, 30]
items = items ++ [40]
```

**Special features:**
- Lists are immutable linked lists
- `++` for concatenation
- Pattern matching supported

**Further reading:**
- [Elixir Documentation - Lists](https://hexdocs.pm/elixir/List.html)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Lists (immutable)
items = [10, 20, 30]
items2 = items ++ [40]
```

**Special features:**
- Lists are immutable
- `++` for concatenation
- Functional programming

**Further reading:**
- [Elm Documentation - List](https://package.elm-lang.org/packages/elm/core/latest/List)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% Lists (immutable)
Items = [10, 20, 30],
Items2 = Items ++ [40]
```

**Special features:**
- Lists are immutable linked lists
- `++` for concatenation
- Pattern matching supported

**Further reading:**
- [Erlang Documentation - Lists](https://www.erlang.org/doc/man/lists.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Lists (immutable)
let items = [10; 20; 30]
let items2 = items @ [40]
```

**Special features:**
- Lists are immutable linked lists
- `@` for concatenation
- Pattern matching supported

**Further reading:**
- [F# Documentation - Lists](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/lists)

</TabItem>
<TabItem value="gleam" label="Gleam">

```erlang
// Lists (immutable)
let items = [10, 20, 30]
let items2 = items ++ [40]
```

**Special features:**
- Lists are immutable
- `++` for concatenation
- Pattern matching supported

**Further reading:**
- [Gleam Documentation - Lists](https://gleam.run/documentation/tour/lists/)

</TabItem>
<TabItem value="go" label="Go">

```go
// Slices (list-like)
items := []int{10, 20, 30}
items = append(items, 40)
```

**Special features:**
- Uses slices instead of lists
- Dynamic size with `append`
- Slices are references to arrays

**Further reading:**
- [Go Documentation - Slices](https://go.dev/tour/moretypes/7)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Lists
def items = [10, 20, 30]
items << 40
```

**Special features:**
- Lists are the standard collection
- Dynamic size
- Supports `<<` operator

**Further reading:**
- [Groovy Documentation - Lists](https://groovy-lang.org/groovy-dev-kit.html#_working_with_collections)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Lists (immutable)
items = [10, 20, 30]
items2 = items ++ [40]
```

**Special features:**
- Lists are immutable linked lists
- `++` for concatenation
- Lazy evaluation possible

**Further reading:**
- [Haskell Documentation - Lists](https://www.haskell.org/tutorial/lists.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Lists (arrays are used as lists)
var items = [10, 20, 30];
items.push(40);
```

**Special features:**
- Arrays are used as lists
- Dynamic size
- `push` for adding

**Further reading:**
- [Haxe Documentation - Array](https://haxe.org/manual/std-Array.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Lists (immutable)
items : List Int
items = [10, 20, 30]
items2 = items ++ [40]
```

**Special features:**
- Lists are immutable
- `++` for concatenation
- Dependent types

**Further reading:**
- [Idris 2 Documentation - Types and Functions](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html#lists)

</TabItem>
<TabItem value="java" label="Java">

```java
// ArrayList (since Java 1.2)
List<Integer> items = new ArrayList<>();
items.add(10);
items.add(20);
items.add(30);
items.add(40);
```

**Special features:**
- `ArrayList` is the standard list
- Dynamic size
- Type-safe with generics (since Java 5.0)

**Further reading:**
- [Oracle Java Documentation - List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Arrays are used as lists
const items = [10, 20, 30];
items.push(40);
```

**Special features:**
- Arrays are used as lists
- Dynamic size
- `push` for adding at the end

**Further reading:**
- [MDN Web Docs - Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Vectors (list-like)
items = [10, 20, 30]
push!(items, 40)
```

**Special features:**
- Vectors are used as lists
- Dynamic size
- `push!` for adding (mutating)

**Further reading:**
- [Julia Documentation - Arrays](https://docs.julialang.org/en/v1/manual/arrays/)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
// Lists are the primary collection type
val items = [10, 20, 30]
val items2 = Cons(40, items)

// Access
val first = items.head         // 10
val rest = items.tail          // [20, 30]
val third = items[2]           // 30
```

**Special features:**
- `list<a>` is the primary collection type
- Singly linked, immutable list
- `Cons` for prepend, `++` for concatenation
- Pattern matching on `Cons(head, tail)` and `Nil`

**Further reading:**
- [Koka Standard Library - list](https://koka-lang.github.io/koka/doc/std_core_list.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// MutableList
val items = mutableListOf(10, 20, 30)
items.add(40)
```

**Special features:**
- `MutableList` for mutable lists
- `List` is immutable
- Dynamic size

**Further reading:**
- [Kotlin Documentation - Collections](https://kotlinlang.org/docs/collections-overview.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Singly linked list
def items : List Nat := [10, 20, 30]

-- Prepend with :: (Cons)
def items2 := 40 :: items
-- [40, 10, 20, 30]

-- Concatenation
def combined := items ++ [40, 50]
-- [10, 20, 30, 40, 50]

-- Pattern Matching
def firstOrZero (xs : List Nat) : Nat :=
  match xs with
  | [] => 0
  | x :: _ => x
```

**Special features:**
- `List α` as singly linked list (linked list)
- `::` (Cons) for O(1) prepend
- `++` for concatenation
- Pattern matching on `[]` (Nil) and `x :: xs` (Cons)

**Further reading:**
- [Lean 4 Documentation - List](https://leanprover-community.github.io/mathlib4_docs/Init/Prelude.html#List)
- [Functional Programming in Lean](https://lean-lang.org/functional_programming_in_lean/)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Singly linked list
Items = [10, 20, 30],

% Prepend (Cons)
Items2 = [40 | Items],
% Items2 = [40, 10, 20, 30]

% Concatenation
Combined = list.append(Items, [40, 50]),
% Combined = [10, 20, 30, 40, 50]

% Access
First = list.det_head(Items),   % First = 10
Rest = list.det_tail(Items)     % Rest = [20, 30]
```

**Special features:**
- `list` is the central collection type in Mercury
- `[H | T]` syntax for Cons (O(1) prepend)
- Pattern matching on `[]` (Nil) and `[H | T]` (Cons)
- Immutable – all operations create new lists

**Further reading:**
- [Mercury Standard Library - list](https://www.mercurylang.org/information/doc-release/mercury_library/list.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Tables are used as lists
items = {10, 20, 30}
table.insert(items, 40)
```

**Special features:**
- Tables are used as lists
- Dynamic size
- `table.insert` for adding

**Further reading:**
- [Lua Documentation - Tables](https://www.lua.org/manual/5.4/manual.html#2.1)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# Lists (Python-like)
var items = List[Int](10, 20, 30)
items.append(40)
```

**Special features:**
- Python-like syntax
- Dynamic size
- Performance-oriented

**Further reading:**
- [Mojo Documentation](https://docs.modular.com/mojo/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Sequences (lists)
var items = @[10, 20, 30]
items.add(40)
```

**Special features:**
- Sequences are the standard lists
- Dynamic size
- `@[]` for sequence literals

**Further reading:**
- [Nim Documentation - Sequences](https://nim-lang.org/docs/manual.html#types-array-and-sequence-types)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Lists (immutable) *)
let items = [10; 20; 30]
let items2 = items @ [40]
```

**Special features:**
- Lists are immutable linked lists
- `@` for concatenation
- Pattern matching supported

**Further reading:**
- [OCaml Documentation - Lists](https://v2.ocaml.org/api/List.html)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Arrays are used as lists
my @items = (10, 20, 30);
push @items, 40;
```

**Special features:**
- Arrays are used as lists
- Dynamic size
- `push` for adding

**Further reading:**
- [Perl Documentation - Arrays](https://perldoc.perl.org/perldata#Arrays)

</TabItem>
<TabItem value="php" label="PHP">

```php
// Arrays are used as lists
$items = [10, 20, 30];
$items[] = 40;
```

**Special features:**
- Arrays are used as lists
- Dynamic size
- `[]` for adding

**Further reading:**
- [PHP Documentation - Arrays](https://www.php.net/manual/en/language.types.array.php)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Lists (immutable)
let items = [10, 20, 30]
let items2 = items <> [40]
```

**Special features:**
- Lists are immutable
- `<>` for concatenation
- Functional programming

**Further reading:**
- [PureScript Documentation - Lists](https://pursuit.purescript.org/packages/purescript-lists)

</TabItem>
<TabItem value="python" label="Python">

```python
# Lists
items = [10, 20, 30]
items.append(40)
```

**Special features:**
- Lists are the standard collection
- Dynamic size
- `append` for adding at the end

**Further reading:**
- [Python Documentation - Lists](https://docs.python.org/3/tutorial/datastructures.html#more-on-lists)

</TabItem>
<TabItem value="r" label="R">

```r
# Lists (heterogeneous)
items <- list(10, 20, 30)
items[[4]] <- 40
```

**Special features:**
- Lists can contain heterogeneous elements
- `[[` for access
- Different from vectors

**Further reading:**
- [R Documentation - Lists](https://cran.r-project.org/doc/manuals/r-release/R-intro.html#Lists)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
;; Lists (immutable)
(define items (list 10 20 30))
(define items2 (append items (list 40)))
```

**Special features:**
- Lists are immutable linked lists
- `append` for concatenation
- `cons` for construction

**Further reading:**
- [Racket Documentation - Lists](https://docs.racket-lang.org/reference/pairs.html)

</TabItem>
<TabItem value="roc" label="Roc">

```roc
# Lists (immutable)
items = [10, 20, 30]
items2 = List.append items 40
items3 = List.concat items [40, 50]
```

**Special features:**
- Lists are immutable
- `List.append` for single elements
- `List.concat` for concatenation

**Further reading:**
- [Roc Documentation - Lists](https://www.roc-lang.org/builtins/List)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Arrays are used as lists
items = [10, 20, 30]
items << 40
```

**Special features:**
- Arrays are used as lists
- Dynamic size
- Supports `<<` operator

**Further reading:**
- [Ruby Documentation - Arrays](https://ruby-doc.org/core-3.1.0/Array.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Vec (vectors as lists)
let mut items = vec![10, 20, 30];
items.push(40);
```

**Special features:**
- `Vec` is the standard list
- Dynamic size
- `push` for adding

**Further reading:**
- [Rust Documentation - Vec](https://doc.rust-lang.org/std/vec/struct.Vec.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// List (immutable) or ListBuffer (mutable)
val items = List(10, 20, 30)
val items2 = items :+ 40

// Mutable
import scala.collection.mutable.ListBuffer
val mutableItems = ListBuffer(10, 20, 30)
mutableItems += 40
```

**Special features:**
- `List` is immutable
- `ListBuffer` for mutable lists
- `:+` for adding at the end (creates new list)

**Further reading:**
- [Scala Documentation - Lists](https://docs.scala-lang.org/overviews/collections-2.13/lists.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; Lists (immutable)
(define items (list 10 20 30))
(define items2 (append items (list 40)))
```

**Special features:**
- Lists are immutable linked lists
- `append` for concatenation
- `cons` for construction

**Further reading:**
- [R7RS Scheme - Lists](https://small.r7rs.org/attachment/r7rs.pdf)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Arrays are used as lists
var items = [10, 20, 30]
items.append(40)
```

**Special features:**
- Arrays are used as lists
- Dynamic size
- Value semantics

**Further reading:**
- [Swift Documentation - Arrays](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/collectiontypes/#Arrays)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Arrays are used as lists
const items: number[] = [10, 20, 30];
items.push(40);
```

**Special features:**
- Arrays are used as lists
- Dynamic size
- Type annotations optional

**Further reading:**
- [TypeScript Handbook - Arrays](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' List(Of T) (since .NET 2.0)
Dim items As New List(Of Integer) From {10, 20, 30}
items.Add(40)
```

**Special features:**
- `List(Of T)` is the standard list
- Dynamic size
- Type-safe with generics

**Further reading:**
- [Microsoft VB.NET Documentation - List](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```wolfram
(* Lists *)
items = {10, 20, 30}
items = Append[items, 40]
```

**Special features:**
- Lists are the standard collection
- `Append` creates new list
- Symbolic computation

**Further reading:**
- [Wolfram Language Documentation - Lists](https://reference.wolfram.com/language/guide/Lists.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Requires: uses Generics.Collections;
// Lists: TList<T> (since Delphi 2009)
var
  numbers: TList<Integer>;
begin
  numbers := TList<Integer>.Create;
  try
    numbers.Add(10);
    numbers.Add(20);
    numbers.Add(30);
    numbers.Insert(1, 15);
    numbers.Delete(0);
    WriteLn(numbers[0]);     // 15
    WriteLn(numbers.Count);  // 3
  finally
    numbers.Free;
  end;
end;
```

**Special features:**
- `TList<T>` for type-safe generic lists (since Delphi 2009)
- `TStringList` for string lists (older alternative)
- Dynamic size
- Manual memory management (`Free` required)

**Further reading:**
- [Delphi Documentation - TList](https://docwiki.embarcadero.com/Libraries/en/System.Generics.Collections.TList)

</TabItem>
</Tabs>


## 10.1.3. Vectors

Dynamic arrays with automatic size adjustment. Provide efficient sequential access and support insertion and deletion of elements.

### Languages {#sprachen}

<Tabs availableTabs={['clojure', 'common-lisp', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'elixir', 'fsharp', 'go', 'groovy', 'haskell', 'haxe', 'java', 'javascript', 'julia', 'kotlin', 'lua', 'mojo', 'nim', 'ocaml', 'perl', 'php', 'python', 'r', 'racket', 'roc', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'vbnet', 'wolfram-language']}>
<TabItem value="clojure" label="Clojure">

```clojure
;; Vectors (persistent)
(def items [10 20 30])
(def items2 (conj items 40))
```

**Special features:**
- Vectors are immutable and persistent
- `conj` adds at the end
- Efficient sequential access

**Further reading:**
- [Clojure Documentation - Vectors](https://clojure.org/reference/data_structures#Vectors)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// std::vector (since C++98)
std::vector<int> items = {10, 20, 30};
items.push_back(40);
```

**Special features:**
- `std::vector` is the standard vector implementation
- Automatic size adjustment
- Contiguous memory

**Further reading:**
- [cppreference.com - std::vector](https://en.cppreference.com/w/cpp/container/vector)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Arrays are used as vectors
items = [10, 20, 30]
items << 40
```

**Special features:**
- Arrays are used as vectors
- Dynamic size
- Supports all vector operations

**Further reading:**
- [Crystal Documentation - Arrays](https://crystal-lang.org/reference/1.11/syntax_and_semantics/literals/array.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// List<T> is used as vector
var items = new List<int> { 10, 20, 30 };
items.Add(40);
```

**Special features:**
- `List<T>` is used as vector
- Dynamic size
- Automatic size adjustment

**Further reading:**
- [Microsoft C# Documentation - List](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1)

</TabItem>
<TabItem value="d" label="D">

```d
// Arrays are dynamic vectors
int[] items = [10, 20, 30];
items ~= 40;
```

**Special features:**
- Arrays are dynamic vectors
- `~=` for concatenation
- Supports slicing

**Further reading:**
- [D Language Specification - Arrays](https://dlang.org/spec/arrays.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Lists are used as vectors
var items = [10, 20, 30];
items.add(40);
```

**Special features:**
- Lists are used as vectors
- Dynamic size
- Growable lists

**Further reading:**
- [Dart Language Tour - Lists](https://dart.dev/guides/language/language-tour#lists)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Vectors (arrays)
items = [10, 20, 30]
items = items ++ [40]
```

**Special features:**
- Lists are used as vectors
- Immutable by default
- `++` for concatenation

**Further reading:**
- [Elixir Documentation - Lists](https://hexdocs.pm/elixir/List.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// ResizeArray (mutable vector)
let items = ResizeArray<int>([10; 20; 30])
items.Add(40)
```

**Special features:**
- `ResizeArray` is a mutable vector
- Dynamic size
- Automatic size adjustment

**Further reading:**
- [F# Documentation - ResizeArray](https://fsharp.github.io/fsharp-core-docs/reference/fsharp-collections-resizearray-1.html)

</TabItem>
<TabItem value="go" label="Go">

```go
// Slices are used as vectors
items := []int{10, 20, 30}
items = append(items, 40)
```

**Special features:**
- Slices are used as vectors
- Dynamic size with `append`
- Automatic size adjustment

**Further reading:**
- [Go Documentation - Slices](https://go.dev/tour/moretypes/7)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Lists are used as vectors
def items = [10, 20, 30]
items << 40
```

**Special features:**
- Lists are used as vectors
- Dynamic size
- Supports `<<` operator

**Further reading:**
- [Groovy Documentation - Lists](https://groovy-lang.org/groovy-dev-kit.html#_working_with_collections)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Vectors (Data.Vector)
import Data.Vector as V
items = V.fromList [10, 20, 30]
items2 = V.snoc items 40
```

**Special features:**
- `Data.Vector` for mutable vectors
- `Data.Vector.Unboxed` for unboxed vectors
- More efficient than lists for sequential access

**Further reading:**
- [Haskell Documentation - Vector](https://hackage.haskell.org/package/vector)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Arrays are used as vectors
var items = [10, 20, 30];
items.push(40);
```

**Special features:**
- Arrays are used as vectors
- Dynamic size
- `push` for adding

**Further reading:**
- [Haxe Documentation - Array](https://haxe.org/manual/std-Array.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Vector (since Java 1.0, deprecated) or ArrayList
List<Integer> items = new ArrayList<>();
items.add(10);
items.add(20);
items.add(30);
items.add(40);
```

**Special features:**
- `Vector` is deprecated, `ArrayList` is preferred
- Dynamic size
- Automatic resizing

**Further reading:**
- [Oracle Java Documentation - Vector](https://docs.oracle.com/javase/8/docs/api/java/util/Vector.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Arrays are used as vectors
const items = [10, 20, 30];
items.push(40);
```

**Special features:**
- Arrays werden als Vektoren verwendet
- Dynamische Größe
- `push` für Hinzufügen

**Further reading:**
- [MDN Web Docs - Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Vectors (Arrays)
items = [10, 20, 30]
push!(items, 40)
```

**Special features:**
- Arrays are vectors
- Dynamic size
- `push!` for adding (mutating)

**Further reading:**
- [Julia Documentation - Arrays](https://docs.julialang.org/en/v1/manual/arrays/)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// MutableList is used as Vector
val items = mutableListOf(10, 20, 30)
items.add(40)
```

**Special features:**
- `MutableList` is used as Vector
- Dynamic size
- Automatic resizing

**Further reading:**
- [Kotlin Documentation - Collections](https://kotlinlang.org/docs/collections-overview.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Tables are used as vectors
items = {10, 20, 30}
table.insert(items, 40)
```

**Special features:**
- Tables are used as vectors
- Dynamic size
- `table.insert` for adding

**Further reading:**
- [Lua Documentation - Tables](https://www.lua.org/manual/5.4/manual.html#2.1)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# Vectors (Python-like)
var items = List[Int](10, 20, 30)
items.append(40)
```

**Special features:**
- Python-ähnliche Syntax
- Dynamische Größe
- Performance-orientiert

**Further reading:**
- [Mojo Documentation](https://docs.modular.com/mojo/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Sequences are vectors
var items = @[10, 20, 30]
items.add(40)
```

**Special features:**
- Sequences are vectors
- Dynamic size
- `@[]` for sequence literals

**Further reading:**
- [Nim Documentation - Sequences](https://nim-lang.org/docs/manual.html#types-array-and-sequence-types)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Vectors (Arrays) *)
let items = [|10; 20; 30|]
let items2 = Array.append items [|40|]
```

**Special features:**
- Arrays are used as vectors
- Mutable
- `Array.append` for concatenation

**Further reading:**
- [OCaml Documentation - Arrays](https://v2.ocaml.org/api/Array.html)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Arrays are used as vectors
my @items = (10, 20, 30);
push @items, 40;
```

**Special features:**
- Arrays werden als Vektoren verwendet
- Dynamische Größe
- `push` für Hinzufügen

**Further reading:**
- [Perl Documentation - Arrays](https://perldoc.perl.org/perldata#Arrays)

</TabItem>
<TabItem value="php" label="PHP">

```php
// Arrays are used as vectors
$items = [10, 20, 30];
$items[] = 40;
```

**Special features:**
- Arrays are used as vectors
- Dynamic size
- `[]` for adding

**Further reading:**
- [PHP Documentation - Arrays](https://www.php.net/manual/en/language.types.array.php)

</TabItem>
<TabItem value="python" label="Python">

```python
# Lists are used as vectors
items = [10, 20, 30]
items.append(40)
```

**Special features:**
- Lists are used as vectors
- Dynamic size
- `append` for adding

**Further reading:**
- [Python Documentation - Lists](https://docs.python.org/3/tutorial/datastructures.html#more-on-lists)

</TabItem>
<TabItem value="r" label="R">

```r
# Vectors
items <- c(10, 20, 30)
items <- c(items, 40)
```

**Special features:**
- Vectors are the standard collection
- `c()` for concatenation
- All elements must have the same type

**Further reading:**
- [R Documentation - Vectors](https://cran.r-project.org/doc/manuals/r-release/R-intro.html#Vectors-and-assignment)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
;; Vektoren
(define items (vector 10 20 30))
(define items2 (vector-append items (vector 40)))
```

**Special features:**
- Vectors are mutable
- `vector-append` for concatenation
- More efficient than lists

**Further reading:**
- [Racket Documentation - Vectors](https://docs.racket-lang.org/reference/vectors.html)

</TabItem>
<TabItem value="roc" label="Roc">

```roc
# Lists are used as vectors
items = [10, 20, 30]
items2 = List.append items 40
```

**Special features:**
- Lists are used as vectors
- Immutable by default
- `List.append` for adding

**Further reading:**
- [Roc Documentation - Lists](https://www.roc-lang.org/builtins/List)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Arrays are used as vectors
items = [10, 20, 30]
items << 40
```

**Special features:**
- Arrays are used as vectors
- Dynamic size
- Supports `<<` operator

**Further reading:**
- [Ruby Documentation - Arrays](https://ruby-doc.org/core-3.1.0/Array.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Vec (Vectors)
let mut items = vec![10, 20, 30];
items.push(40);
```

**Special features:**
- `Vec` is the standard vector implementation
- Dynamic size
- Automatic resizing

**Further reading:**
- [Rust Documentation - Vec](https://doc.rust-lang.org/std/vec/struct.Vec.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// ArrayBuffer (mutable Vector)
import scala.collection.mutable.ArrayBuffer
val items = ArrayBuffer(10, 20, 30)
items += 40
```

**Special features:**
- `ArrayBuffer` is a mutable vector
- Dynamic size
- Automatic resizing

**Further reading:**
- [Scala Documentation - ArrayBuffer](https://www.scala-lang.org/api/current/scala/collection/mutable/ArrayBuffer.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; Vektoren
(define items (vector 10 20 30))

;; Access and mutation
(vector-ref items 0)       ; 10
(vector-set! items 0 15)   ; Vector is mutated

;; Concatenation (SRFI-43)
;; (define items2 (vector-append items (vector 40)))
```

**Special features:**
- Vectors are mutable with fixed size
- `vector-ref` and `vector-set!` for access/mutation
- `vector-append` requires SRFI-43

**Further reading:**
- [R7RS Scheme - Vectors](https://small.r7rs.org/attachment/r7rs.pdf)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Arrays are used as vectors
var items = [10, 20, 30]
items.append(40)
```

**Special features:**
- Arrays are used as vectors
- Dynamic size
- Value semantics

**Further reading:**
- [Swift Documentation - Arrays](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/collectiontypes/#Arrays)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Arrays are used as vectors
const items: number[] = [10, 20, 30];
items.push(40);
```

**Special features:**
- Arrays are used as vectors
- Dynamic size
- Type annotations optional

**Further reading:**
- [TypeScript Handbook - Arrays](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' List(Of T) is used as Vector
Dim items As New List(Of Integer) From {10, 20, 30}
items.Add(40)
```

**Special features:**
- `List(Of T)` is used as Vector
- Dynamic size
- Automatic resizing

**Further reading:**
- [Microsoft VB.NET Documentation - List](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```wolfram
(* Lists are used as vectors *)
items = {10, 20, 30}
items = Append[items, 40]
```

**Special features:**
- Lists are used as vectors
- `Append` creates new list
- Symbolic computation

**Further reading:**
- [Wolfram Language Documentation - Lists](https://reference.wolfram.com/language/guide/Lists.html)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Create vector
(defvar v1 (vector 1 2 3 4 5))
(defvar v2 (make-array 5 :initial-contents '(10 20 30 40 50)))

;; Access
(aref v1 0)           ; 1
(elt v1 2)            ; 3

;; Adjustable Vector (dynamic size)
(defvar v3 (make-array 0 :adjustable t :fill-pointer 0))
(vector-push-extend 10 v3)
(vector-push-extend 20 v3)
(length v3)           ; 2
```

**Special features:**
- Vectors are one-dimensional arrays
- `vector` for literal vectors, `make-array` for flexible creation
- Adjustable vectors with `fill-pointer` for dynamic size
- Access via `aref` or `elt`

**Further reading:**
- [Common Lisp HyperSpec - Vectors](http://www.lispworks.com/documentation/HyperSpec/Body/t_vector.htm)

</TabItem>
</Tabs>


## 10.1.4. Tuples

Immutable, ordered collections of elements of different types with fixed size. Allow grouping multiple values into a single structure.

### Languages {#sprachen}

<Tabs availableTabs={['carbon', 'clojure', 'crystal', 'csharp', 'd', 'dart', 'elixir', 'elm', 'erlang', 'fsharp', 'gleam', 'groovy', 'haskell', 'haxe', 'idris', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'mercury', 'lua', 'mojo', 'nim', 'ocaml', 'perl', 'php', 'purescript', 'python', 'r', 'racket', 'roc', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'vbnet', 'wolfram-language']} orangeTabs={['common-lisp', 'go']}>
<TabItem value="carbon" label="Carbon">

```cpp
// Tuples (experimental)
var pair: (i32, String) = (10, "hello");
```

**Special features:**
- Experimentelle Sprache, Syntax kann sich noch ändern

**Further reading:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Vectors are used as tuples
(def pair [10 "hello"])
```

**Special features:**
- Vectors are used as tuples
- Immutable by default

**Further reading:**
- [Clojure Documentation - Vectors](https://clojure.org/reference/data_structures#Vectors)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Listen werden als Tuples verwendet
(defvar pair (list 10 "hello"))
(first pair)    ; 10
(second pair)   ; "hello"

;; Multiple Values as lightweight tuples
(defun min-max (list)
  (values (reduce #'min list) (reduce #'max list)))

(multiple-value-bind (lo hi) (min-max '(3 1 4 1 5))
  (format nil "Min: ~a, Max: ~a" lo hi))
```

**Special features:**
- Lists are used as tuples (mutable, not immutable)
- `multiple-value-bind` / `values` for lightweight multiple return values
- No dedicated tuple data type

**Further reading:**
- [Common Lisp HyperSpec - Lists](http://www.lispworks.com/documentation/HyperSpec/Body/t_list.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Tuples
pair = {10, "hello"}
first, second = pair
```

**Special features:**
- Tuples are immutable
- Destructuring supported

**Further reading:**
- [Crystal Documentation - Tuples](https://crystal-lang.org/reference/1.11/syntax_and_semantics/tuples.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Tuples (since C# 7.0)
var pair = (10, "hello");
int first = pair.Item1;
string second = pair.Item2;

// Named tuples
var namedPair = (Number: 10, Text: "hello");
```

**Special features:**
- Tuples were introduced in C# 7.0
- Supports named tuples
- Value types

**Further reading:**
- [Microsoft C# Documentation - Tuples](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/value-tuples)

</TabItem>
<TabItem value="d" label="D">

```d
// Tuples (since D 2.0)
auto pair = tuple(10, "hello");
int first = pair[0];
string second = pair[1];
```

**Special features:**
- Tuples were introduced in D 2.0
- Index-based access
- Template-based

**Further reading:**
- [D Language Specification - Tuples](https://dlang.org/phobos/std_typecons.html#.Tuple)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Records (since Dart 3.0)
var pair = (10, 'hello');
int first = pair.$1;
String second = pair.$2;
```

**Special features:**
- Records were introduced in Dart 3.0
- `$1`, `$2` for access
- Immutable

**Further reading:**
- [Dart Documentation - Records](https://dart.dev/language/records)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Tuples
pair = {10, "hello"}
{first, second} = pair
```

**Special features:**
- Tuples sind immutable
- Pattern matching supported
- Fixed size

**Further reading:**
- [Elixir Documentation - Tuples](https://hexdocs.pm/elixir/Tuple.html)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Tuples
pair = (10, "hello")
(first, second) = pair
```

**Special features:**
- Tuples sind immutable
- Pattern matching supported
- Maximum 3 elements

**Further reading:**
- [Elm Documentation - Tuples](https://package.elm-lang.org/packages/elm/core/latest/Tuple)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% Tuples
Pair = {10, "hello"},
{First, Second} = Pair
```

**Special features:**
- Tuples sind immutable
- Pattern matching supported
- Fixed size

**Further reading:**
- [Erlang Documentation - Tuples](https://www.erlang.org/doc/reference_manual/data_types.html#tuple)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Tuples
let pair = (10, "hello")
let first, second = pair
```

**Special features:**
- Tuples sind immutable
- Pattern matching supported
- Value types

**Further reading:**
- [F# Documentation - Tuples](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/tuples)

</TabItem>
<TabItem value="gleam" label="Gleam">

```erlang
// Tuples
let pair = #(10, "hello")
let #(first, second) = pair
```

**Special features:**
- Tuples sind immutable
- Pattern matching supported
- `#()` Syntax

**Further reading:**
- [Gleam Documentation - Tuples](https://gleam.run/documentation/tour/tuples/)

</TabItem>
<TabItem value="go" label="Go">

```go
// Multiple return values (tuple-like)
func getPair() (int, string) {
    return 10, "hello"
}
first, second := getPair()
```

**Special features:**
- Multiple return values are tuple-like
- No explicit tuple types
- Frequently used for functions

**Further reading:**
- [Go Documentation - Multiple Return Values](https://go.dev/tour/basics/6)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Lists are used as tuples
def pair = [10, "hello"]
def (first, second) = pair
```

**Special features:**
- Lists are used as tuples
- Destructuring supported

**Further reading:**
- [Groovy Documentation - Lists](https://groovy-lang.org/groovy-dev-kit.html#_working_with_collections)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Tuples
pair = (10, "hello")
(first, second) = pair
```

**Special features:**
- Tuples sind immutable
- Pattern matching supported
- Various sizes supported

**Further reading:**
- [Haskell Documentation - Tuples](https://www.haskell.org/tutorial/tuples.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Anon structures (tuple-like)
var pair = {first: 10, second: "hello"};
var first = pair.first;
```

**Special features:**
- Anon structures are tuple-like
- Named fields
- Type inference

**Further reading:**
- [Haxe Documentation - Anonymous Structures](https://haxe.org/manual/types-anonymous-structure.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Tuples
pair : (Int, String)
pair = (10, "hello")
(first, second) = pair
```

**Special features:**
- Tuples sind immutable
- Pattern matching supported
- Dependent types

**Further reading:**
- [Idris 2 Documentation - Types and Functions](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Records (seit Java 14, final seit Java 16)
record Pair(int first, String second) {}
Pair pair = new Pair(10, "hello");
int first = pair.first();
```

**Special features:**
- Records were introduced in Java 14
- Immutable by default
- Automatic methods

**Further reading:**
- [Oracle Java Documentation - Records](https://docs.oracle.com/javase/specs/jls/se16/html/jls-8.html#jls-8.10)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Arrays werden als Tuples verwendet
const pair = [10, "hello"];
const [first, second] = pair;
```

**Special features:**
- Arrays werden als Tuples verwendet
- Destructuring unterstützt
- Nicht typsicher

**Further reading:**
- [MDN Web Docs - Array Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Tuples
pair = (10, "hello")
first, second = pair
```

**Special features:**
- Tuples sind immutable
- Pattern matching supported
- Various sizes supported

**Further reading:**
- [Julia Documentation - Tuples](https://docs.julialang.org/en/v1/manual/functions/#Tuples)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
// Tuples
val pair = (10, "hello")
val triple = (10, "hello", True)

// Access via destructuring
val (x, y) = pair
// x = 10, y = "hello"

// Tuple as return type
fun divmod(a : int, b : int) : (int, int)
  (a / b, a % b)
```

**Special features:**
- Native tuple syntax with `(a, b, ...)`
- Destructuring for access to tuple elements
- Tuples are immutable
- Frequently used as return type for multiple values

**Further reading:**
- [Koka Language Guide](https://koka-lang.github.io/koka/doc/book.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Data classes (tuple-like)
data class Pair(val first: Int, val second: String)
val pair = Pair(10, "hello")
val first = pair.first
```

**Special features:**
- Data classes are tuple-like
- Destructuring supported
- Automatic methods

**Further reading:**
- [Kotlin Documentation - Data Classes](https://kotlinlang.org/docs/data-classes.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Pair (product type)
def pair : Nat × String := (10, "hello")
def first := pair.1   -- 10
def second := pair.2  -- "hello"

-- Triple
def triple : Nat × String × Bool := (10, "hello", true)

-- Pattern matching on tuples
def swap (p : Nat × String) : String × Nat :=
  let (a, b) := p
  (b, a)
```

**Special features:**
- `α × β` as product type (pair)
- `(a, b)` syntax for creation
- `.1`, `.2` for access to components
- Destructuring via `let (a, b) := ...`

**Further reading:**
- [Lean 4 Documentation - Structures](https://lean-lang.org/lean4/doc/struct.html)
- [Functional Programming in Lean](https://lean-lang.org/functional_programming_in_lean/)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Tuples with curly braces
Pair = {10, "hello"},
Triple = {10, "hello", 3.14},

% Pattern matching for access
{First, Second} = Pair,
% First = 10, Second = "hello"

{A, B, C} = Triple
% A = 10, B = "hello", C = 3.14
```

**Special features:**
- `{A, B, ...}` syntax for tuples (curly braces)
- Pattern matching is the primary access method
- Tuples are immutable
- Heterogeneous elements possible (different types)
- No index-based access, only destructuring

**Further reading:**
- [Mercury Language Reference - Terms](https://www.mercurylang.org/information/doc-release/mercury_ref/Terms.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Tables are used as tuples
pair = {10, "hello"}
first, second = pair[1], pair[2]
```

**Special features:**
- Tables are used as tuples
- Not type-safe
- Index-based access

**Further reading:**
- [Lua Documentation - Tables](https://www.lua.org/manual/5.4/manual.html#2.1)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# Tuples (Python-like)
pair = (10, "hello")
first, second = pair
```

**Special features:**
- Python-like syntax
- Immutable
- Destructuring supported

**Further reading:**
- [Mojo Documentation](https://docs.modular.com/mojo/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Tuples
pair = (10, "hello")
let (first, second) = pair
```

**Special features:**
- Tuples sind immutable
- Pattern matching supported
- Various sizes supported

**Further reading:**
- [Nim Documentation - Tuples](https://nim-lang.org/docs/manual.html#types-tuple-and-object-types)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Tuples *)
let pair = (10, "hello")
let first, second = pair
```

**Special features:**
- Tuples sind immutable
- Pattern matching supported
- Value types

**Further reading:**
- [OCaml Documentation - Tuples](https://v2.ocaml.org/manual/coreexamples.html#s:tut-tuples)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Arrays werden als Tuples verwendet
my @pair = (10, "hello");
my ($first, $second) = @pair;
```

**Special features:**
- Arrays werden als Tuples verwendet
- Destructuring unterstützt
- Context-sensitive

**Further reading:**
- [Perl Documentation - Arrays](https://perldoc.perl.org/perldata#Arrays)

</TabItem>
<TabItem value="php" label="PHP">

```php
// Arrays werden als Tuples verwendet
$pair = [10, "hello"];
[$first, $second] = $pair;
```

**Special features:**
- Arrays werden als Tuples verwendet
- Destructuring unterstützt (seit PHP 7.1)
- Nicht typsicher

**Further reading:**
- [PHP Documentation - Arrays](https://www.php.net/manual/en/language.types.array.php)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Tuples
pair = Tuple 10 "hello"
first = fst pair
second = snd pair
```

**Special features:**
- Tuples sind immutable
- `fst` und `snd` für Zugriff
- Nur 2-Element-Tuples

**Further reading:**
- [PureScript Documentation - Tuples](https://pursuit.purescript.org/packages/purescript-tuples)

</TabItem>
<TabItem value="python" label="Python">

```python
# Tuples
pair = (10, "hello")
first, second = pair
```

**Special features:**
- Tuples are immutable
- Destructuring supported
- Various sizes supported

**Further reading:**
- [Python Documentation - Tuples](https://docs.python.org/3/tutorial/datastructures.html#tuples-and-sequences)

</TabItem>
<TabItem value="r" label="R">

```r
# Listen werden als Tuples verwendet
pair <- list(10, "hello")
first <- pair[[1]]
second <- pair[[2]]
```

**Special features:**
- Listen werden als Tuples verwendet
- Heterogen
- `[[` für Zugriff

**Further reading:**
- [R Documentation - Lists](https://cran.r-project.org/doc/manuals/r-release/R-intro.html#Lists)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
;; Listen werden als Tuples verwendet
(define pair (list 10 "hello"))
(define first (first pair))
(define second (second pair))
```

**Special features:**
- Listen werden als Tuples verwendet
- Immutable by default
- Pattern matching supported

**Further reading:**
- [Racket Documentation - Lists](https://docs.racket-lang.org/reference/pairs.html)

</TabItem>
<TabItem value="roc" label="Roc">

```roc
# Tuples
pair = (10, "hello")
(first, second) = pair
```

**Special features:**
- Tuples sind immutable
- Pattern matching supported
- Various sizes supported

**Further reading:**
- [Roc Documentation - Tuples](https://www.roc-lang.org/builtins/Tuple)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Arrays werden als Tuples verwendet
pair = [10, "hello"]
first, second = pair
```

**Special features:**
- Arrays werden als Tuples verwendet
- Destructuring unterstützt
- Nicht typsicher

**Further reading:**
- [Ruby Documentation - Arrays](https://ruby-doc.org/core-3.1.0/Array.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Tuples
let pair = (10, "hello");
let (first, second) = pair;
```

**Special features:**
- Tuples sind immutable by default
- Pattern matching supported
- Various sizes supported

**Further reading:**
- [Rust Documentation - Tuples](https://doc.rust-lang.org/book/ch03-02-data-types.html#the-tuple-type)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Tuples
val pair = (10, "hello")
val (first, second) = pair
```

**Special features:**
- Tuples sind immutable
- Pattern matching supported
- Various sizes supported (bis 22 Elemente)

**Further reading:**
- [Scala Documentation - Tuples](https://docs.scala-lang.org/tour/tuples.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; Listen werden als Tuples verwendet
(define pair (list 10 "hello"))
(define first (car pair))
(define second (cadr pair))
```

**Special features:**
- Lists are used as tuples
- Immutable by default
- `car`/`cdr` for access

**Further reading:**
- [R7RS Scheme - Lists](https://small.r7rs.org/attachment/r7rs.pdf)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Tuples
let pair = (10, "hello")
let (first, second) = pair
```

**Special features:**
- Tuples sind immutable
- Pattern matching supported
- Various sizes supported

**Further reading:**
- [Swift Documentation - Tuples](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/the-basics/#Tuples)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Tuples (seit TypeScript 1.3)
const pair: [number, string] = [10, "hello"];
const [first, second] = pair;
```

**Special features:**
- Tuples were introduced in TypeScript 1.3
- Type-safe
- Destructuring supported

**Further reading:**
- [TypeScript Handbook - Tuples](https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Tuples (since VB.NET 15.0 / .NET Framework 4.7)
Dim pair = (10, "hello")
Dim first = pair.Item1
Dim second = pair.Item2
```

**Special features:**
- Tuples were introduced in VB.NET 15.0
- Value types
- `Item1`, `Item2` for access

**Further reading:**
- [Microsoft VB.NET Documentation - Tuples](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/data-types/tuples)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```wolfram
(* Lists are used as tuples *)
pair = {10, "hello"}
first = pair[[1]]
second = pair[[2]]
```

**Special features:**
- Lists are used as tuples
- Immutable by default
- Index starts at 1

**Further reading:**
- [Wolfram Language Documentation - Lists](https://reference.wolfram.com/language/guide/Lists.html)

</TabItem>
</Tabs>


## 10.1.5. Maps / Dictionaries

Associative collections that store key-value pairs. Enable efficient access to values via their keys.

### Languages {#sprachen}

<Tabs availableTabs={['carbon', 'clojure', 'common-lisp', 'crystal', 'csharp', 'd', 'dart', 'elixir', 'elm', 'erlang', 'fsharp', 'gleam', 'go', 'groovy', 'haskell', 'haxe', 'idris', 'java', 'javascript', 'julia', 'kotlin', 'lean4', 'mercury', 'lua', 'matlab', 'mojo', 'nim', 'objective-c', 'object-pascal', 'ocaml', 'perl', 'php', 'purescript', 'python', 'r', 'racket', 'roc', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'v', 'vbnet', 'wolfram-language']} yellowTabs={['koka']}>
<TabItem value="carbon" label="Carbon">

```cpp
// Maps (experimental)
var map: Map<String, i32> = {};
map["key"] = 10;
```

**Special features:**
- Experimentelle Sprache, Syntax kann sich noch ändern

**Further reading:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Maps (persistent)
(def map {:key 10})
(def value (get map :key))
```

**Special features:**
- Maps are immutable and persistent
- Keywords as keys are common
- `get` for access

**Further reading:**
- [Clojure Documentation - Maps](https://clojure.org/reference/data_structures#Maps)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Hash-Tabellen (Maps)
(setf map (make-hash-table))
(setf (gethash :key map) 10)
(gethash :key map)
```

**Special features:**
- Hash tables are maps
- `gethash` for access
- Mutable

**Further reading:**
- [Common Lisp HyperSpec - Hash Tables](http://www.lispworks.com/documentation/HyperSpec/Body/t_hash_t.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Hash (Maps)
map = {"key" => 10}
value = map["key"]
```

**Special features:**
- Hash is the map implementation
- `=>` for key-value pairs
- Dynamische Größe

**Further reading:**
- [Crystal Documentation - Hash](https://crystal-lang.org/reference/1.11/syntax_and_semantics/literals/hash.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Dictionary<TKey, TValue>
var map = new Dictionary<string, int> { { "key", 10 } };
int value = map["key"];
```

**Special features:**
- `Dictionary<TKey, TValue>` is the standard map
- Type-safe with generics
- Dynamische Größe

**Further reading:**
- [Microsoft C# Documentation - Dictionary](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.dictionary-2)

</TabItem>
<TabItem value="d" label="D">

```d
// Associative Arrays
int[string] map = ["key": 10];
int value = map["key"];
```

**Special features:**
- Associative arrays are maps
- Template-based
- Dynamische Größe

**Further reading:**
- [D Language Specification - Associative Arrays](https://dlang.org/spec/hash-map.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Map
var map = {"key": 10};
var value = map["key"];
```

**Special features:**
- Map is the standard implementation
- Dynamische Größe
- Literal-Syntax

**Further reading:**
- [Dart Language Tour - Maps](https://dart.dev/guides/language/language-tour#maps)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Maps
map = %{"key" => 10}
value = map["key"]
```

**Special features:**
- Maps sind immutable by default
- `%{}` für Maps
- Pattern matching supported

**Further reading:**
- [Elixir Documentation - Maps](https://hexdocs.pm/elixir/Map.html)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Dict (Maps)
import Dict
map = Dict.fromList [("key", 10)]
value = Dict.get "key" map
```

**Special features:**
- `Dict` is the map implementation
- Immutable by default
- Functional programming

**Further reading:**
- [Elm Documentation - Dict](https://package.elm-lang.org/packages/elm/core/latest/Dict)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% Maps (since Erlang R17)
Map = #{key => 10},
Value = maps:get(key, Map)
```

**Special features:**
- Maps wurden in Erlang R17 eingeführt
- Immutable by default
- Pattern matching supported

**Further reading:**
- [Erlang Documentation - Maps](https://www.erlang.org/doc/reference_manual/data_types.html#map)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Map (immutable)
let map = Map.ofList [("key", 10)]
let value = Map.find "key" map
```

**Special features:**
- `Map` is immutable
- `Map.ofList` for creation
- Functional programming

**Further reading:**
- [F# Documentation - Map](https://fsharp.github.io/fsharp-core-docs/reference/fsharp-collections-map-2.html)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// Maps (Dict)
// Requires: import gleam/dict
let d = dict.from_list([#("key", 10)])
let value = dict.get(d, "key")  // Ok(10)
```

**Special features:**
- Dicts are immutable
- `dict.from_list` for creation from key-value pairs
- `dict.get` returns `Result(v, Nil)`

**Further reading:**
- [Gleam Documentation - Dict](https://hexdocs.pm/gleam_stdlib/gleam/dict.html)

</TabItem>
<TabItem value="go" label="Go">

```go
// map[T]U
map := make(map[string]int)
map["key"] = 10
value := map["key"]
```

**Special features:**
- `map[T]U` is the map implementation
- Dynamische Größe
- Reference types

**Further reading:**
- [Go Documentation - Maps](https://go.dev/tour/moretypes/19)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Maps
def map = [key: 10]
def value = map["key"]
```

**Special features:**
- Maps are the standard collection
- Dynamische Größe
- Literal-Syntax

**Further reading:**
- [Groovy Documentation - Maps](https://groovy-lang.org/groovy-dev-kit.html#_working_with_collections)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Data.Map (immutable)
import qualified Data.Map as M
map = M.fromList [("key", 10)]
value = M.lookup "key" map
```

**Special features:**
- `Data.Map` is immutable
- `M.lookup` returns `Maybe`
- Functional programming

**Further reading:**
- [Haskell Documentation - Map](https://hackage.haskell.org/package/containers/docs/Data-Map.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Map<K, V>
var map = new Map<String, Int>();
map.set("key", 10);
var value = map.get("key");
```

**Special features:**
- `Map<K, V>` is the map implementation
- Dynamic size
- Cross-platform

**Further reading:**
- [Haxe Documentation - Map](https://haxe.org/manual/std-Map.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Data.SortedMap (immutable)
-- Requires: import Data.SortedMap
map : SortedMap String Int
map = fromList [("key", 10)]
value = lookup "key" map
```

**Special features:**
- `Data.SortedMap` is immutable
- Sorted by key
- Dependent types

**Further reading:**
- [Idris 2 Documentation - Types and Functions](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// HashMap (since Java 1.2)
Map<String, Integer> map = new HashMap<>();
map.put("key", 10);
Integer value = map.get("key");
```

**Special features:**
- `HashMap` is the standard map
- Type-safe with generics (since Java 5.0)
- Dynamische Größe

**Further reading:**
- [Oracle Java Documentation - Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Objects oder Map
const map = new Map();
map.set("key", 10);
const value = map.get("key");
```

**Special features:**
- `Map` was introduced in ES6
- Objects can also be used as maps
- Dynamische Größe

**Further reading:**
- [MDN Web Docs - Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Dict (Maps)
map = Dict("key" => 10)
value = map["key"]
```

**Special features:**
- `Dict` is the map implementation
- Dynamic size
- `=>` for key-value pairs

**Further reading:**
- [Julia Documentation - Dict](https://docs.julialang.org/en/v1/base/collections/#Base.Dict)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
// Requires: std/data/linearmap
// Association list as map
val scores = [("Alice", 95), ("Bob", 87)]

// Search for key
fun lookup(key : string, pairs : list<(string,int)>) : maybe<int>
  pairs.find(fn((k,_)) k == key).map(snd)
```

**Special features:**
- No native map/dict type in the core language
- `std/data/linearmap` provides association lists
- Lists of tuples as simple key-value stores
- More efficient map implementations via external libraries

**Further reading:**
- [Koka Standard Library](https://koka-lang.github.io/koka/doc/std_core.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Map oder MutableMap
val map = mapOf("key" to 10)
val value = map["key"]
```

**Special features:**
- `Map` ist immutable
- `MutableMap` für mutable Maps
- `to` für Schlüssel-Wert-Paare

**Further reading:**
- [Kotlin Documentation - Maps](https://kotlinlang.org/docs/collections-overview.html#map)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- HashMap (aus Std)
def scores : Std.HashMap String Nat :=
  Std.HashMap.ofList [("Alice", 95), ("Bob", 87)]

-- Zugriff
def aliceScore := scores.find? "Alice"
-- some 95

-- Einfügen (erstellt neue Map)
def scores2 := scores.insert "Carol" 92

-- RBMap (balancierter Baum, geordnet)
def orderedScores : Std.RBMap String Nat compare :=
  Std.RBMap.ofList [("Alice", 95), ("Bob", 87)] compare
```

**Special features:**
- `Std.HashMap` für Hash-basierte Maps
- `Std.RBMap` für geordnete Maps (Rot-Schwarz-Baum)
- `find?` gibt `Option α` zurück
- Alle Maps sind persistent (immutable)

**Further reading:**
- [Lean 4 Std - HashMap](https://leanprover-community.github.io/mathlib4_docs/Std/Data/HashMap.html)
- [Lean 4 Std - RBMap](https://leanprover-community.github.io/mathlib4_docs/Std/Data/RBMap.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Benötigt: :- import_module map.
map.init(M0),
map.set("Alice", 95, M0, M1),
map.set("Bob", 87, M1, M2),

% Wert nachschlagen
map.lookup("Alice", M2, Score),
% Score = 95

% Prüfen ob Key vorhanden
( if map.search(M2, "Carol", _) then
    ...
else
    ...
),

% Alle Keys / Values
Keys = map.keys(M2),
Values = map.values(M2)
```

**Special features:**
- `map/2` als balancierter Suchbaum (immutable, geordnet)
- `map.init/1` für leere Map
- `map.set/4` erstellt neue Map mit eingefügtem/aktualisiertem Key
- `map.lookup/3` für deterministischen Zugriff (Exception bei fehlendem Key)
- `map.search/3` für semideterministischen Zugriff (Fail bei fehlendem Key)

**Further reading:**
- [Mercury Standard Library - map](https://www.mercurylang.org/information/doc-release/mercury_library/map.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Tabellen sind Maps
map = {key = 10}
value = map["key"]
```

**Special features:**
- Tabellen sind Maps
- Dynamische Größe
- String-Keys üblich

**Further reading:**
- [Lua Documentation - Tables](https://www.lua.org/manual/5.4/manual.html#2.1)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# Dict (Python-ähnlich)
var map = Dict[String, Int]()
map["key"] = 10
var value = map["key"]
```

**Special features:**
- Python-ähnliche Syntax
- Dynamische Größe
- Performance-orientiert

**Further reading:**
- [Mojo Documentation](https://docs.modular.com/mojo/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Table (Maps)
import tables
var map = {"key": 10}.toTable
var value = map["key"]
```

**Special features:**
- `Table` ist die Map-Implementierung
- Dynamische Größe
- `toTable` für Erstellung

**Further reading:**
- [Nim Documentation - Tables](https://nim-lang.org/docs/tables.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Map (immutable) *)
module StringMap = Map.Make(String)
let map = StringMap.add "key" 10 StringMap.empty
let value = StringMap.find "key" map
```

**Special features:**
- `Map` ist immutable
- Functor-basiert
- Sorted by key

**Further reading:**
- [OCaml Documentation - Map](https://v2.ocaml.org/api/Map.html)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Hashes (Maps)
my %map = ("key" => 10);
my $value = $map{"key"};
```

**Special features:**
- Hashes sind Maps
- `%` für Hash-Variablen
- Dynamische Größe

**Further reading:**
- [Perl Documentation - Hashes](https://perldoc.perl.org/perldata#Hashes)

</TabItem>
<TabItem value="php" label="PHP">

```php
// Arrays sind Maps
$map = ["key" => 10];
$value = $map["key"];
```

**Special features:**
- Arrays sind assoziative Arrays (Maps)
- Dynamische Größe
- `=>` für Schlüssel-Wert-Paare

**Further reading:**
- [PHP Documentation - Arrays](https://www.php.net/manual/en/language.types.array.php)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Map (immutable)
import Data.Map as M
let map = M.fromFoldable [Tuple "key" 10]
let value = M.lookup "key" map
```

**Special features:**
- `Map` ist immutable
- `M.lookup` gibt `Maybe` zurück
- Funktionale Programmierung

**Further reading:**
- [PureScript Documentation - Map](https://pursuit.purescript.org/packages/purescript-maps)

</TabItem>
<TabItem value="python" label="Python">

```python
# Dictionaries (Maps)
map = {"key": 10}
value = map["key"]
```

**Special features:**
- Dictionaries sind Maps
- Dynamische Größe
- Seit Python 3.7 geordnet

**Further reading:**
- [Python Documentation - Dictionaries](https://docs.python.org/3/tutorial/datastructures.html#dictionaries)

</TabItem>
<TabItem value="r" label="R">

```r
# Named Lists (Maps)
map <- list(key = 10)
value <- map$key
```

**Special features:**
- Named Lists sind Maps
- `$` für Zugriff
- Heterogen

**Further reading:**
- [R Documentation - Lists](https://cran.r-project.org/doc/manuals/r-release/R-intro.html#Lists)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
;; Hash-Tabellen (Maps)
(define ht (make-hash))
(hash-set! ht "key" 10)
(hash-ref ht "key")
```

**Special features:**
- Hash-Tabellen sind Maps
- `hash-set!` für Setzen
- `hash-ref` für Zugriff

**Further reading:**
- [Racket Documentation - Hash Tables](https://docs.racket-lang.org/reference/hashtables.html)

</TabItem>
<TabItem value="roc" label="Roc">

```roc
# Dict (Maps)
map = Dict.fromList [("key", 10), ("other", 20)]
value = Dict.get map "key"
```

**Special features:**
- `Dict` ist ein Builtin-Typ (kein Import nötig)
- `Dict.fromList` mit Liste von Tuples
- `Dict.get` gibt `Result` zurück

**Further reading:**
- [Roc Documentation - Dict](https://www.roc-lang.org/builtins/Dict)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Hashes (Maps)
map = {"key" => 10}
value = map["key"]
```

**Special features:**
- Hashes sind Maps
- Dynamische Größe
- `=>` für Schlüssel-Wert-Paare

**Further reading:**
- [Ruby Documentation - Hashes](https://ruby-doc.org/core-3.1.0/Hash.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// HashMap
use std::collections::HashMap;
let mut map = HashMap::new();
map.insert("key".to_string(), 10);
let value = map.get("key");
```

**Special features:**
- `HashMap` ist die Map-Implementierung
- Dynamische Größe
- Ownership-basiert

**Further reading:**
- [Rust Documentation - HashMap](https://doc.rust-lang.org/std/collections/struct.HashMap.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Map (immutable) oder mutable.Map
val map = Map("key" -> 10)
val value = map("key")
```

**Special features:**
- `Map` ist immutable
- `mutable.Map` für mutable Maps
- `->` für Schlüssel-Wert-Paare

**Further reading:**
- [Scala Documentation - Maps](https://docs.scala-lang.org/overviews/collections-2.13/maps.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; Association Lists (Standard)
(define alist '(("key1" . 10) ("key2" . 20)))
(define value (cdr (assoc "key1" alist)))

;; Hash-Tabellen (SRFI-69)
;; (import (srfi 69))
;; (define ht (make-hash-table))
;; (hash-table-set! ht "key" 10)
```

**Special features:**
- Association Lists sind die Standard-Map-Implementierung
- Hash-Tabellen über SRFI-69 verfügbar
- `assoc` für Suche in Association Lists

**Further reading:**
- [SRFI-69 - Hash Tables](https://srfi.schemers.org/srfi-69/)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Dictionary
var map = ["key": 10]
let value = map["key"]
```

**Special features:**
- Dictionary ist die Map-Implementierung
- Dynamische Größe
- Value semantics

**Further reading:**
- [Swift Documentation - Dictionaries](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/collectiontypes/#Dictionaries)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Map oder Record
const map = new Map<string, number>();
map.set("key", 10);
const value = map.get("key");
```

**Special features:**
- `Map` wurde in ES6 eingeführt
- Typsicher mit TypeScript
- Dynamische Größe

**Further reading:**
- [TypeScript Handbook - Map](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Dictionary(Of TKey, TValue)
Dim map As New Dictionary(Of String, Integer) From {{"key", 10}}
Dim value As Integer = map("key")
```

**Special features:**
- `Dictionary(Of TKey, TValue)` ist die Standard-Map
- Typsicher mit Generics
- Dynamische Größe

**Further reading:**
- [Microsoft VB.NET Documentation - Dictionary](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.dictionary-2)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```wolfram
(* Associations (Maps) *)
map = <|"key" -> 10|>
value = map["key"]
```

**Special features:**
- Associations sind Maps
- `|>` für Erstellung
- Symbolische Berechnung

**Further reading:**
- [Wolfram Language Documentation - Associations](https://reference.wolfram.com/language/guide/Associations.html)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% Maps: containers.Map
ages = containers.Map();
ages('Alice') = 30;
ages('Bob') = 25;

% Zugriff
aliceAge = ages('Alice');  % 30

% Dictionary (seit R2022b)
d = dictionary("key1", 1, "key2", 2);
```

**Special features:**
- `containers.Map` für Key-Value-Paare
- Seit R2022b: `dictionary` als moderne Alternative
- Keys können Strings oder numerische Typen sein

**Further reading:**
- [MATLAB Documentation - containers.Map](https://www.mathworks.com/help/matlab/ref/containers.map.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Benötigt: uses Generics.Collections;
// Dictionaries: TDictionary<K,V> (seit Delphi 2009)
var
  ages: TDictionary<string, Integer>;
begin
  ages := TDictionary<string, Integer>.Create;
  try
    ages.Add('Alice', 30);
    ages.Add('Bob', 25);
    ages.AddOrSetValue('Alice', 31);
    if ages.ContainsKey('Bob') then
      WriteLn('Bob: ', ages['Bob']);
    WriteLn('Anzahl: ', ages.Count);
  finally
    ages.Free;
  end;
end;
```

**Special features:**
- `TDictionary<TKey, TValue>` für generische Dictionaries (seit Delphi 2009)
- Hash-basierte Implementierung
- Manuelles Speichermanagement erforderlich

**Further reading:**
- [Delphi Documentation - TDictionary](https://docwiki.embarcadero.com/Libraries/en/System.Generics.Collections.TDictionary)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// NSDictionary (immutable)
NSDictionary *dict = @{@"name": @"Alice", @"age": @30};
NSString *name = dict[@"name"]; // "Alice"

// NSMutableDictionary (mutable)
NSMutableDictionary *mutableDict = [NSMutableDictionary dictionary];
mutableDict[@"key1"] = @"value1";
mutableDict[@"key2"] = @"value2";
[mutableDict removeObjectForKey:@"key1"];
```

**Special features:**
- `NSDictionary` für immutable, `NSMutableDictionary` für mutable Dictionaries
- Literal-Syntax mit `@{}` (seit Xcode 4.4)
- Subscript-Syntax mit `dict[@"key"]` (seit Xcode 4.4)
- Keys müssen `NSCopying`-Protokoll implementieren

**Further reading:**
- [Apple Documentation - NSDictionary](https://developer.apple.com/documentation/foundation/nsdictionary)

</TabItem>
<TabItem value="v" label="V">

```v
// Maps
mut users := map[string]int{}
users['Alice'] = 30
users['Bob'] = 25

// Map-Literal
colors := {
    'red':   '#FF0000'
    'green': '#00FF00'
    'blue':  '#0000FF'
}

// Zugriff
age := users['Alice'] or { 0 }
println(age)
```

**Special features:**
- Built-in `map[KeyType]ValueType` Syntax
- Map-Literale mit `{ key: value }` Syntax
- Sicherer Zugriff mit `or { default }` Block
- Keys müssen hashbar sein

**Further reading:**
- [V Documentation - Maps](https://github.com/vlang/v/blob/master/doc/docs.md#maps)

</TabItem>
</Tabs>


## 10.1.6. Sets

Collections of unique elements without duplicates. Typically support set operations such as union, intersection, and difference.

### Languages {#sprachen}

<Tabs availableTabs={['carbon', 'clojure', 'common-lisp', 'crystal', 'csharp', 'd', 'dart', 'elixir', 'elm', 'erlang', 'fsharp', 'gleam', 'go', 'groovy', 'haskell', 'idris', 'java', 'javascript', 'julia', 'kotlin', 'lean4', 'mercury', 'lua', 'mojo', 'nim', 'objective-c', 'ocaml', 'perl', 'php', 'purescript', 'python', 'r', 'racket', 'roc', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'vbnet', 'wolfram-language']} orangeTabs={['haxe']}>
<TabItem value="carbon" label="Carbon">

```cpp
// Sets (experimentell)
var set: Set<i32> = {};
set.insert(10);
```

**Special features:**
- Experimentelle Sprache, Syntax kann sich noch ändern

**Further reading:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Sets (persistent)
(def set #{10 20 30})
(def has-value (contains? set 10))
```

**Special features:**
- Sets sind immutable und persistent
- `#{}` für Set-Literale
- `contains?` für Mitgliedschaftsprüfung

**Further reading:**
- [Clojure Documentation - Sets](https://clojure.org/reference/data_structures#Sets)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Hash-Sets
(setf set (make-hash-set))
(hash-set-insert set 10)
(hash-set-contains-p set 10)
```

**Special features:**
- Hash-Sets sind Sets
- Mutable
- `hash-set-contains-p` für Mitgliedschaftsprüfung

**Further reading:**
- [Common Lisp HyperSpec - Hash Tables](http://www.lispworks.com/documentation/HyperSpec/Body/t_hash_t.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Set
set = Set{10, 20, 30}
has_value = set.includes?(10)
```

**Special features:**
- `Set` ist die Set-Implementierung
- Dynamische Größe
- `includes?` für Mitgliedschaftsprüfung

**Further reading:**
- [Crystal Documentation - Set](https://crystal-lang.org/api/Set.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// HashSet<T>
var set = new HashSet<int> { 10, 20, 30 };
bool hasValue = set.Contains(10);
```

**Special features:**
- `HashSet<T>` ist die Standard-Set
- Typsicher mit Generics
- Dynamische Größe

**Further reading:**
- [Microsoft C# Documentation - HashSet](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.hashset-1)

</TabItem>
<TabItem value="d" label="D">

```d
// Sets (seit D 2.0)
import std.container.rbtree;
auto set = redBlackTree(10, 20, 30);
bool hasValue = set.contains(10);
```

**Special features:**
- `redBlackTree` wird als Set verwendet
- Sorted
- Template-basiert

**Further reading:**
- [D Language Specification - Containers](https://dlang.org/phobos/std_container.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Set
var set = {10, 20, 30};
var hasValue = set.contains(10);
```

**Special features:**
- Set is the standard implementation
- Dynamic size
- Literal syntax

**Further reading:**
- [Dart Language Tour - Sets](https://dart.dev/guides/language/language-tour#sets)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# MapSet (Sets)
set = MapSet.new([10, 20, 30])
has_value = MapSet.member?(set, 10)
```

**Special features:**
- `MapSet` is the Set implementation
- Immutable by default
- `MapSet.member?` for membership checking

**Further reading:**
- [Elixir Documentation - MapSet](https://hexdocs.pm/elixir/MapSet.html)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Set (immutable)
import Set
set = Set.fromList [10, 20, 30]
hasValue = Set.member 10 set
```

**Special features:**
- `Set` is immutable
- `Set.member` for membership checking
- Functional programming

**Further reading:**
- [Elm Documentation - Set](https://package.elm-lang.org/packages/elm/core/latest/Set)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% Sets (since Erlang R14B01)
Set = sets:from_list([10, 20, 30]),
HasValue = sets:is_element(10, Set)
```

**Special features:**
- Sets were introduced in Erlang R14B01
- Immutable by default
- `sets:is_element` for membership checking

**Further reading:**
- [Erlang Documentation - Sets](https://www.erlang.org/doc/man/sets.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Set (immutable)
let set = Set.ofList [10; 20; 30]
let hasValue = Set.contains 10 set
```

**Special features:**
- `Set` is immutable
- Sorted
- Functional programming

**Further reading:**
- [F# Documentation - Set](https://fsharp.github.io/fsharp-core-docs/reference/fsharp-collections-set-1.html)

</TabItem>
<TabItem value="gleam" label="Gleam">

```erlang
// Sets
import gleam/set
let set = set.from_list([10, 20, 30])
let has_value = set.contains(set, 10)
```

**Special features:**
- Sets are immutable
- `set.contains` for membership checking
- Pattern matching supported

**Further reading:**
- [Gleam Documentation - Sets](https://gleam.run/documentation/tour/sets/)

</TabItem>
<TabItem value="go" label="Go">

```go
// map[T]bool (Set-like)
set := make(map[int]bool)
set[10] = true
hasValue := set[10]
```

**Special features:**
- Maps are used as Sets
- `map[T]bool` is the common implementation
- Dynamic size

**Further reading:**
- [Go Documentation - Maps](https://go.dev/tour/moretypes/19)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Set
def set = [10, 20, 30] as Set
def hasValue = set.contains(10)
```

**Special features:**
- Set is the standard implementation
- Dynamic size
- Literal syntax

**Further reading:**
- [Groovy Documentation - Sets](https://groovy-lang.org/groovy-dev-kit.html#_working_with_collections)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Data.Set (immutable)
import qualified Data.Set as S
set = S.fromList [10, 20, 30]
hasValue = S.member 10 set
```

**Special features:**
- `Data.Set` is immutable
- Sorted
- Functional programming

**Further reading:**
- [Haskell Documentation - Set](https://hackage.haskell.org/package/containers/docs/Data-Set.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Sets: Workaround via Map<T, Bool>
var set = new Map<Int, Bool>();
set.set(10, true);
set.set(20, true);
var hasValue = set.exists(10); // true
```

**Special features:**
- Haxe has no built-in Set type
- Workaround via `Map<T, Bool>` or third-party libraries
- `haxe.ds.ObjectMap` can serve as a basis for Set implementations

**Further reading:**
- [Haxe Documentation - Map](https://haxe.org/manual/std-Map.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Data.SortedSet (immutable)
-- Requires: import Data.SortedSet
set : SortedSet Int
set = fromList [10, 20, 30]
hasValue = contains 10 set
```

**Special features:**
- `Data.SortedSet` is immutable
- Sorted
- Dependent types

**Further reading:**
- [Idris 2 Documentation - Types and Functions](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// HashSet (since Java 1.2)
Set<Integer> set = new HashSet<>();
set.add(10);
boolean hasValue = set.contains(10);
```

**Special features:**
- `HashSet` is the standard Set
- Type-safe with Generics (since Java 5.0)
- Dynamic size

**Further reading:**
- [Oracle Java Documentation - Set](https://docs.oracle.com/javase/8/docs/api/java/util/Set.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Set (since ES6)
const set = new Set([10, 20, 30]);
const hasValue = set.has(10);
```

**Special features:**
- Sets were introduced in ES6
- Dynamic size
- `has` for membership checking

**Further reading:**
- [MDN Web Docs - Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Set
set = Set([10, 20, 30])
has_value = in(10, set)
```

**Special features:**
- `Set` is the Set implementation
- Dynamic size
- `in` for membership checking

**Further reading:**
- [Julia Documentation - Set](https://docs.julialang.org/en/v1/base/collections/#Base.Set)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Set or MutableSet
val set = setOf(10, 20, 30)
val hasValue = set.contains(10)
```

**Special features:**
- `Set` is immutable
- `MutableSet` for mutable Sets
- Dynamic size

**Further reading:**
- [Kotlin Documentation - Sets](https://kotlinlang.org/docs/collections-overview.html#set)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- HashSet (from Std)
def fruits : Std.HashSet String :=
  Std.HashSet.ofList ["Apfel", "Banane", "Kirsche"]

-- Membership checking
def hasApfel := fruits.contains "Apfel"
-- true

-- Insert (creates new Set)
def fruits2 := fruits.insert "Dattel"

-- RBSet (balanced tree, ordered)
-- Requires: import Std.Data.RBMap
```

**Special features:**
- `Std.HashSet` for hash-based Sets
- `contains` for membership checking
- All Sets are persistent (immutable)
- `insert`, `erase` create new versions

**Further reading:**
- [Lean 4 Std - HashSet](https://leanprover-community.github.io/mathlib4_docs/Std/Data/HashSet.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Requires: :- import_module set.
set.init(S0),
set.insert(10, S0, S1),
set.insert(20, S1, S2),
set.insert(30, S2, S3),

% Membership checking
( if set.member(20, S3) then
    io.write_string("20 ist enthalten\n")
else
    io.write_string("20 nicht enthalten\n")
),

% Set operations
set.union(S3, OtherSet, Union),
set.intersect(S3, OtherSet, Intersection),
set.difference(S3, OtherSet, Diff)
```

**Special features:**
- `set/1` as balanced search tree (immutable, ordered)
- `set.init/1` for empty set
- `set.insert/3` creates new Set with inserted element
- `set.member/2` for membership checking
- `set.union/3`, `set.intersect/3`, `set.difference/3` for set operations
- Duplicates are automatically ignored

**Further reading:**
- [Mercury Standard Library - set](https://www.mercurylang.org/information/doc-release/mercury_library/set.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Tables are used as Sets
set = {}
set[10] = true
has_value = set[10] ~= nil
```

**Special features:**
- Tables are used as Sets
- `map[T]bool`-like
- Dynamic size

**Further reading:**
- [Lua Documentation - Tables](https://www.lua.org/manual/5.4/manual.html#2.1)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# Set (Python-like)
var set = Set[Int](10, 20, 30)
var has_value = set.contains(10)
```

**Special features:**
- Python-like syntax
- Dynamic size
- Performance-orientiert

**Further reading:**
- [Mojo Documentation](https://docs.modular.com/mojo/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# HashSet
import sets
var set = toHashSet([10, 20, 30])
var hasValue = set.contains(10)
```

**Special features:**
- `HashSet` is the Set implementation
- Dynamic size
- `toHashSet` for creation

**Further reading:**
- [Nim Documentation - Sets](https://nim-lang.org/docs/sets.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Set (immutable) *)
module IntSet = Set.Make(Int)
let set = IntSet.of_list [10; 20; 30]
let has_value = IntSet.mem 10 set
```

**Special features:**
- `Set` is immutable
- Functor-basiert
- Sorted

**Further reading:**
- [OCaml Documentation - Set](https://v2.ocaml.org/api/Set.html)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Hashes are used as Sets
my %set;
$set{10} = 1;
my $hasValue = exists $set{10};
```

**Special features:**
- Hashes are used as Sets
- `exists` for membership checking
- Dynamic size

**Further reading:**
- [Perl Documentation - Hashes](https://perldoc.perl.org/perldata#Hashes)

</TabItem>
<TabItem value="php" label="PHP">

```php
// Arrays are used as Sets
$set = [10 => true, 20 => true, 30 => true];
$hasValue = isset($set[10]);
```

**Special features:**
- Arrays are used as Sets
- `isset` for membership checking
- Dynamic size

**Further reading:**
- [PHP Documentation - Arrays](https://www.php.net/manual/en/language.types.array.php)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Set (immutable)
import Data.Set as S
let set = S.fromFoldable [10, 20, 30]
let hasValue = S.member 10 set
```

**Special features:**
- `Set` is immutable
- Sorted
- Functional programming

**Further reading:**
- [PureScript Documentation - Set](https://pursuit.purescript.org/packages/purescript-sets)

</TabItem>
<TabItem value="python" label="Python">

```python
# Sets
set = {10, 20, 30}
has_value = 10 in set
```

**Special features:**
- Sets are the standard implementation
- Dynamic size
- `in` for membership checking

**Further reading:**
- [Python Documentation - Sets](https://docs.python.org/3/tutorial/datastructures.html#sets)

</TabItem>
<TabItem value="r" label="R">

```r
# Vectors are used as Sets
set <- c(10, 20, 30)
has_value <- 10 %in% set
```

**Special features:**
- Vectors are used as Sets
- `%in%` for membership checking
- Not guaranteed unique

**Further reading:**
- [R Documentation - Vectors](https://cran.r-project.org/doc/manuals/r-release/R-intro.html#Vectors-and-assignment)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
;; Sets
(define my-set (set 10 20 30))
(set-member? my-set 10)  ; #t
```

**Special features:**
- Sets are immutable
- `set-member?` for membership checking
- Various implementations available

**Further reading:**
- [Racket Documentation - Sets](https://docs.racket-lang.org/reference/sets.html)

</TabItem>
<TabItem value="roc" label="Roc">

```roc
# Set (immutable)
set = Set.fromList [10, 20, 30]
hasValue = Set.contains set 10
```

**Special features:**
- `Set` is a builtin type (no import needed)
- `Set.contains` for membership checking
- Immutable

**Further reading:**
- [Roc Documentation - Set](https://www.roc-lang.org/builtins/Set)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Set
require 'set'
set = Set[10, 20, 30]
has_value = set.include?(10)
```

**Special features:**
- `Set` is the Set implementation
- Dynamic size
- `include?` for membership checking

**Further reading:**
- [Ruby Documentation - Set](https://ruby-doc.org/stdlib-3.1.0/libdoc/set/rdoc/Set.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// HashSet
use std::collections::HashSet;
let mut set = HashSet::new();
set.insert(10);
let has_value = set.contains(&10);
```

**Special features:**
- `HashSet` is the Set implementation
- Dynamic size
- Ownership-based

**Further reading:**
- [Rust Documentation - HashSet](https://doc.rust-lang.org/std/collections/struct.HashSet.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Set (immutable) or mutable.Set
val set = Set(10, 20, 30)
val hasValue = set.contains(10)
```

**Special features:**
- `Set` is immutable
- `mutable.Set` for mutable Sets
- Dynamic size

**Further reading:**
- [Scala Documentation - Sets](https://docs.scala-lang.org/overviews/collections-2.13/sets.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; Sets (SRFI 113)
(import (srfi 113))
(define set (set 10 20 30))
(set-contains? set 10)
```

**Special features:**
- Sets are defined in SRFI 113
- Immutable by default
- `set-contains?` for membership checking

**Further reading:**
- [SRFI 113 - Sets and Bags](https://srfi.schemers.org/srfi-113/)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Set
var set: Set<Int> = [10, 20, 30]
let hasValue = set.contains(10)
```

**Special features:**
- Set is the Set implementation
- Dynamic size
- Value semantics

**Further reading:**
- [Swift Documentation - Sets](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/collectiontypes/#Sets)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Set (since ES6)
const set = new Set<number>([10, 20, 30]);
const hasValue = set.has(10);
```

**Special features:**
- Sets were introduced in ES6
- Type-safe with TypeScript
- Dynamic size

**Further reading:**
- [TypeScript Handbook - Set](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' HashSet(Of T)
Dim set As New HashSet(Of Integer) From {10, 20, 30}
Dim hasValue As Boolean = set.Contains(10)
```

**Special features:**
- `HashSet(Of T)` is the standard Set
- Type-safe with Generics
- Dynamic size

**Further reading:**
- [Microsoft VB.NET Documentation - HashSet](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.hashset-1)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```wolfram
(* Sets *)
set = {10, 20, 30}
has_value = MemberQ[set, 10]
```

**Special features:**
- Lists are used as Sets
- `MemberQ` for membership checking
- Symbolic computation

**Further reading:**
- [Wolfram Language Documentation - Lists](https://reference.wolfram.com/language/guide/Lists.html)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// NSSet (immutable)
NSSet *set = [NSSet setWithObjects:@"A", @"B", @"C", nil];
BOOL contains = [set containsObject:@"A"]; // YES

// NSMutableSet (mutable)
NSMutableSet *mutableSet = [NSMutableSet set];
[mutableSet addObject:@"X"];
[mutableSet addObject:@"Y"];
[mutableSet removeObject:@"X"];

// Set operations
NSSet *set1 = [NSSet setWithObjects:@1, @2, @3, nil];
NSSet *set2 = [NSSet setWithObjects:@2, @3, @4, nil];
NSMutableSet *intersection = [set1 mutableCopy];
[intersection intersectSet:set2]; // {2, 3}
```

**Special features:**
- `NSSet` for immutable, `NSMutableSet` for mutable Sets
- `NSCountedSet` for multisets (elements with counter)
- Supports set operations (union, intersect, minus)
- No guaranteed order (unordered)

**Further reading:**
- [Apple Documentation - NSSet](https://developer.apple.com/documentation/foundation/nsset)

</TabItem>
</Tabs>


## 10.1.7. Queues

FIFO data structures (First In, First Out), where elements are added at the end and removed at the beginning. Allow processing elements in the order they were added.

### Languages {#languages}

<Tabs availableTabs={['cpp', 'csharp', 'dart', 'java', 'julia', 'kotlin', 'mercury', 'nim', 'python', 'rust', 'scala', 'vbnet']} yellowTabs={['mercury']} orangeTabs={['c', 'go', 'javascript', 'swift', 'typescript']}>
<TabItem value="c" label="C">

```c
// Queue with array and indices
#define MAX_SIZE 100
int queue[MAX_SIZE];
int front = 0, rear = -1;

void enqueue(int item) {
    if (rear < MAX_SIZE - 1) {
        queue[++rear] = item;
    }
}

int dequeue() {
    if (front <= rear) {
        return queue[front++];
    }
    return -1; // Fehler
}

enqueue(10);
enqueue(20);
int first = dequeue(); // 10
```

**Special features:**
- No native Queue implementation
- Must be manually implemented with arrays
- Circular Queue for efficient usage

**Further reading:**
- [C Documentation - Arrays](https://en.cppreference.com/w/c/language/array)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Queue<T>
var queue = new Queue<int>();
queue.Enqueue(10);
queue.Enqueue(20);
int first = queue.Dequeue(); // 10
```

**Special features:**
- `Queue<T>` is the standard Queue (since .NET 2.0)
- Type-safe with Generics
- Dynamic size

**Further reading:**
- [Microsoft C# Documentation - Queue](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.queue-1)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// std::queue
#include <queue>
std::queue<int> queue;
queue.push(10);
queue.push(20);
int first = queue.front();
queue.pop(); // Removes first element
```

**Special features:**
- `std::queue` is the standard Queue (since C++98)
- Template-based
- Dynamic size

**Further reading:**
- [cppreference.com - std::queue](https://en.cppreference.com/w/cpp/container/queue)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Queue
import 'dart:collection';
var queue = Queue<int>();
queue.add(10);
queue.add(20);
int first = queue.removeFirst(); // 10
```

**Special features:**
- `Queue` is the standard Queue
- Dynamic size
- Also supports `addLast` and `removeFirst`

**Further reading:**
- [Dart Documentation - Queue](https://api.dart.dev/stable/dart-collection/Queue-class.html)

</TabItem>
<TabItem value="go" label="Go">

```go
// Slice as Queue
queue := []int{}
queue = append(queue, 10) // Enqueue
queue = append(queue, 20)
first := queue[0]
queue = queue[1:] // Dequeue
```

**Special features:**
- No native Queue implementation
- Slices are used as Queues
- Dynamic size

**Further reading:**
- [Go Documentation - Slices](https://go.dev/tour/moretypes/7)

</TabItem>
<TabItem value="java" label="Java">

```java
// Queue (Interface)
Queue<Integer> queue = new LinkedList<>();
queue.offer(10);
queue.offer(20);
int first = queue.poll(); // 10
```

**Special features:**
- `Queue` is an interface (since Java 1.5)
- `LinkedList` is a common implementation
- `offer` and `poll` for thread-safe operations

**Further reading:**
- [Oracle Java Documentation - Queue](https://docs.oracle.com/javase/8/docs/api/java/util/Queue.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Array as Queue
const queue = [];
queue.push(10); // Enqueue
queue.push(20);
const first = queue.shift(); // Dequeue: 10
```

**Special features:**
- No native Queue implementation
- Arrays are used as Queues
- `shift()` for Dequeue

**Further reading:**
- [MDN Web Docs - Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Queue aus DataStructures.jl
using DataStructures
queue = Queue{Int}()
enqueue!(queue, 10)
enqueue!(queue, 20)
first = dequeue!(queue) # 10
```

**Special features:**
- `Queue` from `DataStructures.jl` package
- Dynamic size
- `enqueue!` and `dequeue!` for operations

**Further reading:**
- [Julia Documentation - DataStructures](https://juliacollections.github.io/DataStructures.jl/latest/queues/)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// ArrayDeque as Queue
val queue = ArrayDeque<Int>()
queue.addLast(10) // Enqueue
queue.addLast(20)
val first = queue.removeFirst() // Dequeue: 10
```

**Special features:**
- `ArrayDeque` is used as Queue
- Dynamic size
- `addLast` and `removeFirst` for FIFO operations

**Further reading:**
- [Kotlin Documentation - Collections](https://kotlinlang.org/docs/collections-overview.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% No native Queue – functional Queue with two lists
:- type queue(T) ---> queue(list(T), list(T)).

:- func empty_queue = queue(T).
empty_queue = queue([], []).

:- func enqueue(T, queue(T)) = queue(T).
enqueue(Item, queue(Front, Back)) = queue(Front, [Item | Back]).

:- func dequeue(queue(T)) = {T, queue(T)}.
dequeue(queue([], [])) = _ :- error("empty queue").
dequeue(queue([H | T], Back)) = {H, queue(T, Back)}.
dequeue(queue([], Back)) = dequeue(queue(list.reverse(Back), [])).
```

**Special features:**
- No native Queue data structure in the standard library
- Functional Queue implementation with two lists (Front/Back)
- `enqueue` is O(1), `dequeue` is amortized O(1)
- Reversal of Back list when Front list is empty
- Persistent (immutable)

**Further reading:**
- [Mercury Standard Library - list](https://www.mercurylang.org/information/doc-release/mercury_library/list.html)
- [Purely Functional Data Structures - Okasaki](https://www.cs.cmu.edu/~rwh/theses/okasaki.pdf)

</TabItem>
<TabItem value="python" label="Python">

```python
# collections.deque as Queue
from collections import deque
queue = deque()
queue.append(10) # Enqueue
queue.append(20)
first = queue.popleft() # Dequeue: 10
```

**Special features:**
- `collections.deque` is used as Queue
- Dynamic size
- `append` and `popleft` for FIFO operations

**Further reading:**
- [Python Documentation - deque](https://docs.python.org/3/library/collections.html#collections.deque)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// VecDeque
use std::collections::VecDeque;
let mut queue = VecDeque::new();
queue.push_back(10); // Enqueue
queue.push_back(20);
let first = queue.pop_front(); // Dequeue: Some(10)
```

**Special features:**
- `VecDeque` is the standard Queue
- Dynamic size
- Ownership-based

**Further reading:**
- [Rust Documentation - VecDeque](https://doc.rust-lang.org/std/collections/struct.VecDeque.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// mutable.Queue
import scala.collection.mutable
val queue = mutable.Queue[Int]()
queue.enqueue(10)
queue.enqueue(20)
val first = queue.dequeue() // 10
```

**Special features:**
- `mutable.Queue` is the standard Queue
- Dynamic size
- `enqueue` and `dequeue` for operations

**Further reading:**
- [Scala Documentation - Queue](https://www.scala-lang.org/api/current/scala/collection/mutable/Queue.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Array as Queue
var queue: [Int] = []
queue.append(10) // Enqueue
queue.append(20)
let first = queue.removeFirst() // Dequeue: 10
```

**Special features:**
- No native Queue implementation
- Arrays are used as Queues
- `removeFirst()` for Dequeue

**Further reading:**
- [Swift Documentation - Arrays](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/collectiontypes/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Array as Queue
const queue: number[] = [];
queue.push(10); // Enqueue
queue.push(20);
const first = queue.shift(); // Dequeue: 10
```

**Special features:**
- No native Queue implementation
- Arrays are used as Queues
- `shift()` for Dequeue

**Further reading:**
- [TypeScript Handbook - Arrays](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Queue(Of T)
Dim queue As New Queue(Of Integer)
queue.Enqueue(10)
queue.Enqueue(20)
Dim first As Integer = queue.Dequeue() ' 10
```

**Special features:**
- `Queue(Of T)` is the standard Queue (since .NET 2.0)
- Type-safe with Generics
- Dynamic size

**Further reading:**
- [Microsoft VB.NET Documentation - Queue](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.queue-1)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Requires: import deques
var q = initDeque[int]()
q.addLast(1)
q.addLast(2)
q.addLast(3)

echo q.popFirst()  # 1
echo q.peekFirst()  # 2
echo q.len  # 2
```

**Special features:**
- `Deque[T]` from the `deques` module
- Double-ended Queue (usable both as Queue and as Stack)
- `addFirst`, `addLast`, `popFirst`, `popLast` operations

**Further reading:**
- [Nim Documentation - Deques](https://nim-lang.org/docs/deques.html)

</TabItem>
</Tabs>


## 10.1.8. Stacks

LIFO data structures (Last In, First Out), where elements are added at the top and removed from the top. Allow processing elements in reverse order of their addition.

### Languages {#languages}

<Tabs availableTabs={['csharp', 'cpp', 'java', 'kotlin', 'mercury', 'rust', 'scala', 'vbnet']} yellowTabs={['mercury']} orangeTabs={['c', 'dart', 'go', 'javascript', 'julia', 'python', 'swift', 'typescript']}>
<TabItem value="c" label="C">

```c
// Stack with array and index
#define MAX_SIZE 100
int stack[MAX_SIZE];
int top = -1;

void push(int item) {
    if (top < MAX_SIZE - 1) {
        stack[++top] = item;
    }
}

int pop() {
    if (top >= 0) {
        return stack[top--];
    }
    return -1; // Fehler
}

push(10);
push(20);
int last = pop(); // 20
```

**Special features:**
- No native Stack implementation
- Must be manually implemented with arrays
- `top` points to the top element

**Further reading:**
- [C Documentation - Arrays](https://en.cppreference.com/w/c/language/array)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Stack<T>
var stack = new Stack<int>();
stack.Push(10);
stack.Push(20);
int last = stack.Pop(); // 20
```

**Special features:**
- `Stack<T>` is the standard Stack (since .NET 2.0)
- Type-safe with Generics
- Dynamic size

**Further reading:**
- [Microsoft C# Documentation - Stack](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.stack-1)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// std::stack
#include <stack>
std::stack<int> stack;
stack.push(10);
stack.push(20);
int last = stack.top();
stack.pop(); // Removes top element
```

**Special features:**
- `std::stack` is the standard Stack (since C++98)
- Template-based
- Dynamic size

**Further reading:**
- [cppreference.com - std::stack](https://en.cppreference.com/w/cpp/container/stack)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// List as Stack
var stack = <int>[];
stack.add(10); // Push
stack.add(20);
int last = stack.removeLast(); // Pop: 20
```

**Special features:**
- No native Stack implementation
- Lists are used as Stacks
- `add` and `removeLast` for LIFO operations

**Further reading:**
- [Dart Documentation - Lists](https://dart.dev/guides/language/language-tour#lists)

</TabItem>
<TabItem value="go" label="Go">

```go
// Slice as Stack
stack := []int{}
stack = append(stack, 10) // Push
stack = append(stack, 20)
last := stack[len(stack)-1]
stack = stack[:len(stack)-1] // Pop
```

**Special features:**
- No native Stack implementation
- Slices are used as Stacks
- Dynamic size

**Further reading:**
- [Go Documentation - Slices](https://go.dev/tour/moretypes/7)

</TabItem>
<TabItem value="java" label="Java">

```java
// Stack (since Java 1.0)
Stack<Integer> stack = new Stack<>();
stack.push(10);
stack.push(20);
int last = stack.pop(); // 20
```

**Special features:**
- `Stack` is the standard Stack (since Java 1.0)
- Thread-safe
- Dynamic size

**Further reading:**
- [Oracle Java Documentation - Stack](https://docs.oracle.com/javase/8/docs/api/java/util/Stack.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Array as Stack
const stack = [];
stack.push(10); // Push
stack.push(20);
const last = stack.pop(); // Pop: 20
```

**Special features:**
- No native Stack implementation
- Arrays are used as Stacks
- `push` and `pop` for LIFO operations

**Further reading:**
- [MDN Web Docs - Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Array as Stack
stack = Int[]
push!(stack, 10) # Push
push!(stack, 20)
last = pop!(stack) # Pop: 20
```

**Special features:**
- No native Stack implementation
- Arrays are used as Stacks
- `push!` and `pop!` for LIFO operations

**Further reading:**
- [Julia Documentation - Arrays](https://docs.julialang.org/en/v1/manual/arrays/)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// ArrayDeque as Stack
val stack = ArrayDeque<Int>()
stack.addLast(10) // Push
stack.addLast(20)
val last = stack.removeLast() // Pop: 20
```

**Special features:**
- `ArrayDeque` is used as Stack
- Dynamic size
- `addLast` and `removeLast` for LIFO operations

**Further reading:**
- [Kotlin Documentation - Collections](https://kotlinlang.org/docs/collections-overview.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Lists as Stack (natural LIFO behavior)
Stack0 = [],
Stack1 = [10 | Stack0],   % Push 10
Stack2 = [20 | Stack1],   % Push 20
Stack3 = [30 | Stack2],   % Push 30
% Stack3 = [30, 20, 10]

% Pop
Stack3 = [Top | Rest],
% Top = 30, Rest = [20, 10]
```

**Special features:**
- No native Stack data structure needed – lists are natural stacks
- `[Item | Stack]` for Push (O(1) Prepend)
- Pattern Matching `[Top | Rest]` for Pop (O(1))
- Persistent (immutable) – old Stack versions remain available

**Further reading:**
- [Mercury Standard Library - list](https://www.mercurylang.org/information/doc-release/mercury_library/list.html)

</TabItem>
<TabItem value="python" label="Python">

```python
# List as Stack
stack = []
stack.append(10) # Push
stack.append(20)
last = stack.pop() # Pop: 20
```

**Special features:**
- No native Stack implementation
- Lists are used as Stacks
- `append` and `pop` for LIFO operations

**Further reading:**
- [Python Documentation - Lists](https://docs.python.org/3/tutorial/datastructures.html#more-on-lists)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Vec as Stack
let mut stack = Vec::new();
stack.push(10); // Push
stack.push(20);
let last = stack.pop(); // Pop: Some(20)
```

**Special features:**
- `Vec` is used as Stack
- Dynamic size
- Ownership-based

**Further reading:**
- [Rust Book - Vectors](https://doc.rust-lang.org/book/ch08-01-vectors.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// mutable.Stack
import scala.collection.mutable
val stack = mutable.Stack[Int]()
stack.push(10)
stack.push(20)
val last = stack.pop() // 20
```

**Special features:**
- `mutable.Stack` is the standard Stack
- Dynamic size
- `push` and `pop` for LIFO operations

**Further reading:**
- [Scala Documentation - Stack](https://www.scala-lang.org/api/current/scala/collection/mutable/Stack.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Array as Stack
var stack: [Int] = []
stack.append(10) // Push
stack.append(20)
let last = stack.removeLast() // Pop: 20
```

**Special features:**
- No native Stack implementation
- Arrays are used as Stacks
- `removeLast()` for Pop

**Further reading:**
- [Swift Documentation - Arrays](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/collectiontypes/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Array as Stack
const stack: number[] = [];
stack.push(10); // Push
stack.push(20);
const last = stack.pop(); // Pop: 20
```

**Special features:**
- No native Stack implementation
- Arrays are used as Stacks
- `push` and `pop` for LIFO operations

**Further reading:**
- [TypeScript Handbook - Arrays](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Stack(Of T)
Dim stack As New Stack(Of Integer)
stack.Push(10)
stack.Push(20)
Dim last As Integer = stack.Pop() ' 20
```

**Special features:**
- `Stack(Of T)` is the standard Stack (since .NET 2.0)
- Type-safe with Generics
- Dynamic size

**Further reading:**
- [Microsoft VB.NET Documentation - Stack](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.stack-1)

</TabItem>
</Tabs>


## 10.1.9. Ranges / Sequences

### Ranges / Sequences


Continuous ranges of values, typically used for iterations. Allow compact definition and traversal of sequences of numbers or other values.


<Tabs availableTabs={['cpp', 'csharp', 'dart', 'elm', 'groovy', 'haskell', 'java', 'julia', 'kotlin', 'nim', 'perl', 'python', 'r', 'ruby', 'rust', 'scala', 'swift', 'wolfram-language']} yellowTabs={['koka']} orangeTabs={['go', 'javascript', 'typescript']}>
<TabItem value="csharp" label="C#">

```csharp
// Range (since C# 8.0)
var range = 1..10;
var numbers = Enumerable.Range(1, 10);
foreach (var num in numbers) {
    Console.WriteLine(num);
}
```

**Special features:**
- `Range` was introduced in C# 8.0
- `Enumerable.Range` for integer sequences
- Also supports `^` for end indices

**Further reading:**
- [Microsoft C# Documentation - Ranges](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/member-access-operators#range-operator-)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// std::ranges (since C++20)
#include <ranges>
auto range = std::views::iota(1, 11);
for (auto num : range) {
    std::cout << num << std::endl;
}
```

**Special features:**
- `std::ranges` was introduced in C++20
- `std::views::iota` for integer sequences
- Lazy Evaluation

**Further reading:**
- [cppreference.com - Ranges](https://en.cppreference.com/w/cpp/ranges)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Range with Iterable
var range = Iterable.generate(10, (i) => i + 1);
for (var num in range) {
    print(num);
}
```

**Special features:**
- `Iterable.generate` for sequences
- Lazy evaluation
- Dynamic generation

**Further reading:**
- [Dart Documentation - Iterable](https://api.dart.dev/stable/dart-core/Iterable-class.html)

</TabItem>
<TabItem value="go" label="Go">

```go
// Range with for loop
for i := 1; i <= 10; i++ {
    fmt.Println(i)
}
```

**Special features:**
- No native Range implementation
- `for` loop with three components
- Direct iteration

**Further reading:**
- [Go Documentation - For Loops](https://go.dev/tour/flowcontrol/1)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- [start..end]
range = [1..10]
mapM_ print range
```

**Special features:**
- `[start..end]` for Ranges
- Lazy evaluation
- Also supports step size: `[1,3..10]`

**Further reading:**
- [Haskell Documentation - Lists](https://www.haskell.org/tutorial/lists.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// IntStream.range (since Java 8)
IntStream.range(1, 11).forEach(System.out::println);
```

**Special features:**
- `IntStream.range` for integer sequences (since Java 8)
- Lazy evaluation
- Also supports `rangeClosed` for inclusive end

**Further reading:**
- [Oracle Java Documentation - IntStream](https://docs.oracle.com/javase/8/docs/api/java/util/stream/IntStream.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Array.from with Range
const range = Array.from({length: 10}, (_, i) => i + 1);
range.forEach(num => console.log(num));
```

**Special features:**
- No native Range implementation
- `Array.from` for sequences
- Also supports generators

**Further reading:**
- [MDN Web Docs - Array.from](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Range with :
range = 1:10
for num in range
    println(num)
end
```

**Special features:**
- `:` for Ranges
- Lazy evaluation
- Also supports step size: `1:2:10`

**Further reading:**
- [Julia Documentation - Ranges](https://docs.julialang.org/en/v1/manual/arrays/#Ranges)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
// Range über list-Funktion
val numbers = list(1, 10)
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Iteration über Bereich
for(1, 10) fn(i)
  println(i.show)
```

**Special features:**
- No dedicated Range type
- `list(start, end)` creates a list with range values
- `for(start, end)` iterates over a numeric range
- Ranges are eager (immediately materialized as list)

**Further reading:**
- [Koka Standard Library](https://koka-lang.github.io/koka/doc/std_core.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Range with ..
val range = 1..10
for (num in range) {
    println(num)
}
```

**Special features:**
- `..` for Ranges (since Kotlin 1.0)
- Also supports `downTo` and `step`
- Lazy evaluation

**Further reading:**
- [Kotlin Documentation - Ranges](https://kotlinlang.org/docs/ranges.html)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Range with ..
my @range = (1..10);
foreach my $num (@range) {
    print "$num\n";
}
```

**Special features:**
- `..` for Ranges
- Creates array
- Also supports characters: `'a'..'z'`

**Further reading:**
- [Perl Documentation - Range Operator](https://perldoc.perl.org/perlop#Range-Operators)

</TabItem>
<TabItem value="python" label="Python">

```python
# range()
range_obj = range(1, 11)
for num in range_obj:
    print(num)
```

**Special features:**
- `range()` for Ranges (since Python 2.3)
- Lazy evaluation
- Supports step size: `range(1, 11, 2)`

**Further reading:**
- [Python Documentation - range](https://docs.python.org/3/library/stdtypes.html#range)

</TabItem>
<TabItem value="r" label="R">

```r
# seq()
range <- seq(1, 10)
for (num in range) {
    print(num)
}
```

**Special features:**
- `seq()` for sequences
- Supports step size: `seq(1, 10, by=2)`
- Creates vector

**Further reading:**
- [R Documentation - seq](https://www.rdocumentation.org/packages/base/versions/3.6.2/topics/seq)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Range with ..
range = 1..10
range.each do |num|
    puts num
end
```

**Special features:**
- `..` for inclusive Ranges
- `...` for exclusive Ranges
- Also supports characters: `'a'..'z'`

**Further reading:**
- [Ruby Documentation - Range](https://ruby-doc.org/core-3.1.0/Range.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Range with ..
let range = 1..11;
for num in range {
    println!("{}", num);
}
```

**Special features:**
- `..` for Ranges
- Also supports `..=` for inclusive end
- Iterator-based

**Further reading:**
- [Rust Book - Ranges](https://doc.rust-lang.org/book/ch03-05-control-flow.html#loops)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Range
val range = 1 to 10
range.foreach(println)
```

**Special features:**
- `to` for inclusive Ranges
- `until` for exclusive Ranges
- Supports step size: `1 to 10 by 2`

**Further reading:**
- [Scala Documentation - Range](https://www.scala-lang.org/api/current/scala/collection/immutable/Range.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Range with ...
let range = 1...10
for num in range {
    print(num)
}
```

**Special features:**
- `...` for closed Ranges
- `..<` for half-open Ranges
- Also supports `stride` for step size

**Further reading:**
- [Swift Documentation - Ranges](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/basicoperators/#Range-Operators)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Array.from with Range
const range = Array.from({length: 10}, (_, i) => i + 1);
range.forEach(num => console.log(num));
```

**Special features:**
- No native Range implementation
- `Array.from` for sequences
- Also supports generators

**Further reading:**
- [TypeScript Handbook - Arrays](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Ranges with List.range
numbers = List.range 1 10      -- [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
countdown = List.range 10 1    -- [] (descending not supported)

-- Usage in combination with map
squares = List.map (\n -> n * n) (List.range 1 5)
-- [1, 4, 9, 16, 25]
```

**Special features:**
- `List.range start end` creates a list of integers
- Only ascending integer ranges (descending results in empty list)
- Creates a complete list in memory (eager evaluation)

**Further reading:**
- [Elm Documentation - List.range](https://package.elm-lang.org/packages/elm/core/latest/List#range)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Ranges
def numbers = 1..10        // Inklusiv: [1, 2, 3, ..., 10]
def exclusive = 1..<10     // Exklusiv: [1, 2, 3, ..., 9]
def letters = 'a'..'z'    // Buchstaben-Range

// Range-Methoden
println numbers.size()     // 10
println numbers.contains(5) // true
println numbers.from       // 1
println numbers.to         // 10

// Iteration
numbers.each { println it }
```

**Special features:**
- `..` for inclusive, `..<` for exclusive Ranges
- Ranges are objects of type `groovy.lang.Range`
- Supports numbers, characters and other `Comparable` types
- Lazy Evaluation: elements are generated on demand

**Further reading:**
- [Groovy Documentation - Ranges](https://groovy-lang.org/groovy-dev-kit.html#_working_with_ranges)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Ranges and Sequences
# Range (used in for loops)
for i in 0..5:
  echo i

# Sequence (dynamisches Array)
var s: seq[int] = @[1, 2, 3, 4, 5]
s.add(6)
echo s  # @[1, 2, 3, 4, 5, 6]

# Slice einer Sequence
let sub = s[1..3]  # @[2, 3, 4]
```

**Special features:**
- Ranges with `..` and `..<` operators
- `seq[T]` as dynamic sequence (similar to Vector)
- Ranges do not create Collections in memory, only for iteration

**Further reading:**
- [Nim Documentation - Sequences](https://nim-lang.org/docs/system.html#seq)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Ranges *)
r1 = Range[5]          (* {1, 2, 3, 4, 5} *)
r2 = Range[2, 10]      (* {2, 3, 4, ..., 10} *)
r3 = Range[0, 1, 0.1]  (* {0., 0.1, 0.2, ..., 1.} *)
```

**Special features:**
- `Range[n]` creates `{1, 2, ..., n}`
- `Range[start, end, step]` with optional step size
- Creates a complete list (not lazy)

**Further reading:**
- [Wolfram Language Documentation - Range](https://reference.wolfram.com/language/ref/Range.html)

</TabItem>
</Tabs>



---

### Ranges (D-style / Phobos ranges)


A concept from the D programming language, where Ranges are abstract iterators that can sequentially traverse elements. Ranges are lazy, composable and allow algorithms to be used generically across different data structures.


<Tabs availableTabs={['cpp', 'd', 'rust']}>
<TabItem value="cpp" label="C++">

```cpp
// std::ranges (since C++20, similar to D-Ranges)
#include <ranges>
#include <vector>
#include <algorithm>

std::vector<int> vec = {1, 2, 3, 4, 5};
auto range = vec | std::views::filter([](int x) { return x % 2 == 0; })
                 | std::views::transform([](int x) { return x * 2; });

for (auto val : range) {
    std::cout << val << std::endl;
}
```

**Special features:**
- `std::ranges` was introduced in C++20 (similar to D-Ranges)
- Supports pipe operator for composition
- Lazy Evaluation
- View-based

**Further reading:**
- [cppreference.com - Ranges](https://en.cppreference.com/w/cpp/ranges)

</TabItem>
<TabItem value="d" label="D">

```d
// Phobos Ranges (since D 2.0)
import std.range;
import std.algorithm;

auto range = iota(1, 11)
    .filter!(x => x % 2 == 0)
    .map!(x => x * 2);

foreach (val; range) {
    writeln(val);
}
```

**Special features:**
- Ranges are the central concept in D (since D 2.0)
- Supports pipe operator for composition
- Lazy Evaluation
- Input, Forward, Bidirectional, Random Access and Output Ranges

**Further reading:**
- [D Language Specification - Ranges](https://dlang.org/phobos/std_range.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Iterators (similar to D-Ranges)
let range = (1..11)
    .filter(|x| x % 2 == 0)
    .map(|x| x * 2);

for val in range {
    println!("{}", val);
}
```

**Special features:**
- Iterators are similar to D-Ranges
- Supports method chaining for composition
- Lazy Evaluation
- Ownership-based

**Further reading:**
- [Rust Book - Iterators](https://doc.rust-lang.org/book/ch13-02-iterators.html)

</TabItem>
</Tabs>


## 10.1.10. Tables (Lua-style)

The only data structure in Lua that can be used both as an Array and as a Map. Tables are associative arrays that support both numeric and non-numeric indices. They are the central data structure in Lua and are used for Arrays, Maps, Sets, Objects and more.

### Languages {#languages}

<Tabs availableTabs={['javascript', 'lua']} orangeTabs={['python']}>
<TabItem value="javascript" label="JavaScript">

```javascript
// Objects (similar to Lua Tables)
const table = {};
table[1] = "first";      // Numeric index
table["key"] = "value";  // String index
table.prop = "property"; // Property access

console.log(table[1]);      // "first"
console.log(table["key"]);  // "value"
console.log(table.prop);    // "property"
```

**Special features:**
- Objects are similar to Lua Tables
- Support both numeric and string indices
- Property access possible
- Can be used both as Arrays and as Maps

**Further reading:**
- [MDN Web Docs - Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Tables (the only data structure)
local table = {}
table[1] = "first"        -- Numeric index
table["key"] = "value"    -- String index
table.prop = "property"   -- Property access

print(table[1])           -- "first"
print(table["key"])       -- "value"
print(table.prop)          -- "property"

-- As Array
local arr = {10, 20, 30}
print(arr[1])             -- 10

-- As Map
local map = {name = "Alice", age = 25}
print(map.name)           -- "Alice"
```

**Special features:**
- Tables are the only data structure in Lua
- Support both numeric and non-numeric indices
- Property access possible
- Can be used both as Arrays and as Maps
- Indices start at 1 (not 0)

**Further reading:**
- [Lua Documentation - Tables](https://www.lua.org/manual/5.4/manual.html#2.1)

</TabItem>
<TabItem value="python" label="Python">

```python
# Dictionaries (similar to Lua Tables)
table = {}
table[1] = "first"        # Numeric index
table["key"] = "value"   # String index

print(table[1])          # "first"
print(table["key"])      # "value"

# As Dictionary
map = {"name": "Alice", "age": 25}
print(map["name"])       # "Alice"
```

**Special features:**
- Dictionaries are similar to Lua Tables
- Support various key types
- Can be used as Maps
- No property access syntax like in Lua

**Further reading:**
- [Python Documentation - Dictionaries](https://docs.python.org/3/tutorial/datastructures.html#dictionaries)

</TabItem>
</Tabs>

## 10.1.11. Collection Literals

Special syntax for compact creation of Collections directly in code. Collection Literals enable inline definition of lists, arrays, maps and sets without step-by-step addition of individual elements.

### Languages

<Tabs availableTabs={['ada', 'c', 'clojure', 'common-lisp', 'crystal', 'csharp', 'cpp', 'd', 'dart', 'eiffel', 'elixir', 'elm', 'erlang', 'fsharp', 'fortran', 'gleam', 'go', 'groovy', 'haskell', 'haxe', 'idris', 'java', 'javascript', 'julia', 'koka', 'lean4', 'mercury', 'lua', 'matlab', 'mojo', 'nim', 'objective-c', 'object-pascal', 'ocaml', 'octave', 'odin', 'perl', 'php', 'purescript', 'python', 'racket', 'roc', 'ruby', 'rust', 'scheme', 'swift', 'typescript', 'vbnet', 'v', 'wolfram-language', 'zig']} yellowTabs={['kotlin', 'r', 'scala']}>
<TabItem value="ada" label="Ada">

```ada
-- Array-Aggregat
Items : array (1 .. 3) of Integer := (10, 20, 30);

-- Named Association
Matrix : array (1 .. 2, 1 .. 2) of Integer := ((1, 2), (3, 4));
```

**Special features:**
- Array aggregate with position specification or named association
- Supports `others => value` for default values
- Only arrays have literal syntax, no maps or sets

**Further reading:**
- [Ada Documentation - Array Aggregates](https://learn.adacore.com/courses/intro-to-ada/chapters/arrays.html)

</TabItem>
<TabItem value="c" label="C">

```c
// Array initializer
int items[] = {10, 20, 30};

// Designated Initializers (since C99)
int items2[] = {[0] = 10, [2] = 30};

// Struct initializer
struct Point { int x; int y; };
struct Point p = {.x = 1, .y = 2};
```

**Special features:**
- Array initializers with `{}` are part of the language
- Designated initializers since C99
- No map or set literals

**Further reading:**
- [C Standard - Initialization](https://en.cppreference.com/w/c/language/initialization)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Collection Expressions (since C# 12)
int[] items = [10, 20, 30];
List<int> list = [10, 20, 30];

// Dictionary initializer
var scores = new Dictionary<string, int>
{
    ["Alice"] = 95,
    ["Bob"] = 87
};

// Collection initializer (since C# 3.0)
var set = new HashSet<int> { 10, 20, 30 };
```

**Special features:**
- Collection Expressions `[...]` since C# 12 for arrays, lists, spans
- Dictionary initializer with `{ [key] = value }` since C# 6.0
- Collection initializer with `{ item, ... }` since C# 3.0
- Spread operator `..` in Collection Expressions: `[..list1, ..list2]`

**Further reading:**
- [Microsoft C# Documentation - Collection Expressions](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/collection-expressions)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Initializer Lists (since C++11)
std::vector<int> items = {10, 20, 30};
std::array<int, 3> arr = {10, 20, 30};

// Map initializer
std::map<std::string, int> scores = {
    {"Alice", 95},
    {"Bob", 87}
};

// Set initializer
std::set<int> unique = {10, 20, 30};
```

**Special features:**
- Initializer Lists `{...}` since C++11 for all STL containers
- Uniform Initialization with curly braces
- `std::initializer_list<T>` as underlying type

**Further reading:**
- [cppreference.com - Initializer Lists](https://en.cppreference.com/w/cpp/utility/initializer_list)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Vector-Literal
(def items [10 20 30])

;; Map-Literal
(def scores {"Alice" 95 "Bob" 87})

;; Set-Literal
(def unique #{10 20 30})

;; List-Literal (quoted)
(def lst '(10 20 30))
```

**Special features:**
- Four built-in collection literal types: `[]` (Vector), `{}` (Map), `#{}` (Set), `'()` (List)
- All literals create persistent, immutable collections
- Commas are optional (whitespace is sufficient)

**Further reading:**
- [Clojure Documentation - Data Structures](https://clojure.org/reference/data_structures)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; List-Literal (quoted)
(defvar items '(10 20 30))

;; Vector-Literal
(defvar vec #(10 20 30))

;; Association List (Pseudo-Map)
(defvar scores '(("Alice" . 95) ("Bob" . 87)))
```

**Special features:**
- List literals with `'()` (quote syntax)
- Vector literals with `#()` (read macro)
- Association Lists as pseudo-maps
- No native Set or Map literal

**Further reading:**
- [Common Lisp HyperSpec - Lists](http://www.lispworks.com/documentation/lw50/CLHS/Body/t_list.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Array-Literal
items = [10, 20, 30]

# Hash-Literal
scores = {"Alice" => 95, "Bob" => 87}

# Set-Literal
unique = Set{10, 20, 30}

# Tuple-Literal
tuple = {10, "text", true}
```

**Special features:**
- Array literals `[...]` with automatic type inference
- Hash literals with `=>` syntax
- Set literals with `Set{...}`
- Tuple literals with `{...}` (value types)

**Further reading:**
- [Crystal Documentation - Literals](https://crystal-lang.org/reference/syntax_and_semantics/literals/)

</TabItem>
<TabItem value="d" label="D">

```d
// Array-Literal
int[] items = [10, 20, 30];

// Associative Array-Literal
int[string] scores = ["Alice": 95, "Bob": 87];
```

**Special features:**
- Array literals with `[...]`
- Associative arrays with `[key: value]` syntax
- No native Set literal

**Further reading:**
- [D Documentation - Arrays](https://dlang.org/spec/arrays.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// List-Literal
var items = [10, 20, 30];

// Map-Literal
var scores = {"Alice": 95, "Bob": 87};

// Set-Literal (since Dart 2.2)
var unique = {10, 20, 30};
```

**Special features:**
- List, Map, and Set literals are part of the language
- Set literals since Dart 2.2
- Spread operator `...` in collection literals
- Collection `if` and collection `for` in literals

**Further reading:**
- [Dart Documentation - Collections](https://dart.dev/language/collections)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
-- Manifest Array
items: ARRAY [INTEGER]
items := <<10, 20, 30>>
```

**Special features:**
- Manifest Arrays with `<<...>>` syntax
- Only array literals natively supported
- Other collections require explicit construction

**Further reading:**
- [Eiffel Documentation - Arrays](https://www.eiffel.org/doc/eiffel/Eiffel_programming_language_syntax#Manifest_arrays)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# List-Literal
items = [10, 20, 30]

# Map-Literal
scores = %{"Alice" => 95, "Bob" => 87}

# Keyword-List-Literal
opts = [name: "Alice", age: 30]

# Tuple-Literal
tuple = {10, "text", true}
```

**Special features:**
- Four literal types: `[]` (List), `%{}` (Map), `[key: val]` (Keyword List), `{}` (Tuple)
- Maps with atom keys: `%{alice: 95, bob: 87}`
- No native Set literal (`MapSet.new([1, 2, 3])`)

**Further reading:**
- [Elixir Documentation - Collections](https://elixir-lang.org/getting-started/basic-types.html)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- List-Literal
items = [10, 20, 30]

-- Tuple-Literal
pair = (10, 20)
```

**Special features:**
- List literals with `[...]`
- Tuple literals for 2-3 elements
- No native Dict or Set literal (`Dict.fromList`, `Set.fromList`)

**Further reading:**
- [Elm Guide - Core Language](https://guide.elm-lang.org/core_language)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% List-Literal
Items = [10, 20, 30],

% Map-Literal (since Erlang 17)
Scores = #{"Alice" => 95, "Bob" => 87},

% Tuple-Literal
Tuple = {10, "text", true}.
```

**Special features:**
- List literals with `[...]`
- Map literals with `#{...}` since Erlang 17
- Tuple literals with `{...}`
- No native Set literal

**Further reading:**
- [Erlang Documentation - Data Types](https://www.erlang.org/doc/reference_manual/data_types.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// List-Literal
let items = [10; 20; 30]

// Array-Literal
let arr = [|10; 20; 30|]

// Set-Literal
let unique = set [10; 20; 30]

// Map-Literal
let scores = Map [("Alice", 95); ("Bob", 87)]
```

**Special features:**
- Lists `[...]` and arrays `[|...|]` with semicolon as separator
- Set and Map via constructor functions with list literal
- Sequence expressions: `[for i in 1..3 -> i * 10]`

**Further reading:**
- [F# Documentation - Lists](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/lists)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Array Constructor (since Fortran 2003)
integer :: items(3) = [10, 20, 30]

! Older syntax with (/ /)
integer :: items2(3) = (/10, 20, 30/)
```

**Special features:**
- Array constructors with `[...]` since Fortran 2003
- Older syntax with `(/ ... /)`
- Implied-Do-Loops: `[(i, i=1,10)]`
- No Map or Set literals

**Further reading:**
- [Fortran Wiki - Array Constructors](https://fortranwiki.org/fortran/show/Array+constructors)

</TabItem>
<TabItem value="gleam" label="Gleam">

```erlang
// List-Literal
let items = [10, 20, 30]

// Tuple-Literal
let pair = #(10, 20)
```

**Special features:**
- List literals with `[...]`
- Tuple literals with `#(...)`
- No native Map or Set literal (`dict.from_list`, `set.from_list`)

**Further reading:**
- [Gleam Documentation - Data Types](https://gleam.run/book/tour/lists.html)

</TabItem>
<TabItem value="go" label="Go">

```go
// Slice-Literal
items := []int{10, 20, 30}

// Map-Literal
scores := map[string]int{
    "Alice": 95,
    "Bob":   87,
}

// Array-Literal (fixed size)
arr := [3]int{10, 20, 30}
```

**Special features:**
- Composite literals for arrays, slices, maps, and structs
- Type specification is part of the literal
- No native Set literal

**Further reading:**
- [Go Specification - Composite Literals](https://go.dev/ref/spec#Composite_literals)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// List-Literal
def items = [10, 20, 30]

// Map-Literal
def scores = ["Alice": 95, "Bob": 87]

// Range-Literal
def range = 1..10
```

**Special features:**
- List literals with `[...]` (create `ArrayList`)
- Map literals with `[key: value]` (create `LinkedHashMap`)
- Range literals with `..`
- No native Set literal (`[1, 2, 3] as Set`)

**Further reading:**
- [Groovy Documentation - Collections](https://groovy-lang.org/groovy-dev-kit.html#_working_with_collections)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- List-Literal
items = [10, 20, 30]

-- Tuple-Literal
pair = (10, 20)

-- String as character list
name = "Alice"  -- = ['A','l','i','c','e']
```

**Special features:**
- List literals with `[...]`
- Tuple literals with `(...)`
- No native Map or Set literal (`Map.fromList`, `Set.fromList`)
- List comprehensions: `[x * 2 | x <- [1..10]]`

**Further reading:**
- [Haskell Wiki - Lists](https://wiki.haskell.org/How_to_work_on_lists)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Array-Literal
var items = [10, 20, 30];

// Map-Literal
var scores = ["Alice" => 95, "Bob" => 87];
```

**Special features:**
- Array literals with `[...]`
- Map literals with `[key => value]`
- No native Set literal

**Further reading:**
- [Haxe Documentation - Expression](https://haxe.org/manual/expression.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- List-Literal
items : List Int
items = [10, 20, 30]

-- Tuple-Literal
pair : (Int, Int)
pair = (10, 20)
```

**Special features:**
- List literals with `[...]`
- Tuple literals with `(...)`
- No native Map or Set literal
- Dependent types enable length-encoded vectors: `Vect 3 Int`

**Further reading:**
- [Idris 2 Documentation - Types](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Array-Literal
int[] items = {10, 20, 30};

// List-Literal (since Java 9)
var list = List.of(10, 20, 30);

// Map-Literal (since Java 9)
var scores = Map.of("Alice", 95, "Bob", 87);

// Set-Literal (since Java 9)
var unique = Set.of(10, 20, 30);
```

**Special features:**
- Array initializer `{...}` since Java 1.0
- `List.of()`, `Map.of()`, `Set.of()` since Java 9 (factory methods, create immutable collections)
- No true literal syntax for lists, maps, and sets (only factory methods)

**Further reading:**
- [Oracle Java Documentation - Collections](https://docs.oracle.com/javase/9/docs/api/java/util/List.html#of--)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Array-Literal
const items = [10, 20, 30];

// Object-Literal (as Map equivalent)
const scores = { Alice: 95, Bob: 87 };

// Map and Set constructors (since ES6)
const map = new Map([["Alice", 95], ["Bob", 87]]);
const set = new Set([10, 20, 30]);
```

**Special features:**
- Array literals `[...]` and object literals `{...}` are core language features
- `Map` and `Set` require constructor calls (no literal syntax)
- Spread operator: `[...arr1, ...arr2]`

**Further reading:**
- [MDN Web Docs - Grammar and Types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#literals)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Array-Literal
items = [10, 20, 30]

# Dictionary
scores = Dict("Alice" => 95, "Bob" => 87)

# Set
unique = Set([10, 20, 30])

# Tuple-Literal
tuple = (10, 20, 30)
```

**Special features:**
- Array literals `[...]` and tuple literals `(...)` are native syntax
- `Dict()` and `Set()` are constructors (no literal syntax)
- Matrix literals: `[1 2; 3 4]`
- Comprehensions: `[x^2 for x in 1:5]`

**Further reading:**
- [Julia Documentation - Arrays](https://docs.julialang.org/en/v1/manual/arrays/)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
// List-Literal
val items = [10, 20, 30]

// Tuple-Literal
val pair = (10, "hello")

// Empty list
val empty : list<int> = []
```

**Special features:**
- `[...]` for list literals (native syntax)
- `(...)` for tuple literals (native syntax)
- No Map or Set literals (via functions/constructors)

**Further reading:**
- [Koka Language Guide - Basics](https://koka-lang.github.io/koka/doc/book.html#sec-basics)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- List-Literal
def items : List Nat := [10, 20, 30]

-- Array-Literal
def arr : Array Nat := #[10, 20, 30]

-- Tuple-Literal
def pair : Nat × String := (10, "hello")

-- HashMap via constructor
def scores := Std.HashMap.ofList [("Alice", 95), ("Bob", 87)]

-- HashSet via constructor
def unique := Std.HashSet.ofList [10, 20, 30]
```

**Special features:**
- `[...]` for list literals
- `#[...]` for array literals
- `(a, b)` for tuple literals
- Maps and sets via constructor functions (`ofList`)

**Further reading:**
- [Lean 4 Documentation - Syntax](https://lean-lang.org/lean4/doc/syntax.html)
- [Functional Programming in Lean](https://lean-lang.org/functional_programming_in_lean/)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% List-Literal
Items = [10, 20, 30],

% Tuple-Literal
Pair = {10, "hello"},

% Maps and Sets have no literal syntax
% Create map from key/value lists
map.from_corresponding_lists(["Alice", "Bob"], [95, 87], Scores),

% Create set from list
set.list_to_set([10, 20, 30], UniqueSet)
```

**Special features:**
- `[...]` for list literals (only collection with native literal syntax)
- `{...}` for tuple literals
- No direct literal syntax for arrays, maps, or sets
- Maps/Sets are created via library predicates (`map.from_corresponding_lists`, `set.list_to_set`)
- Arrays from lists via `array.from_list/1`

**Further reading:**
- [Mercury Standard Library - list](https://www.mercurylang.org/information/doc-release/mercury_library/list.html)
- [Mercury Standard Library - map](https://www.mercurylang.org/information/doc-release/mercury_library/map.html)
- [Mercury Standard Library - set](https://www.mercurylang.org/information/doc-release/mercury_library/set.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Factory functions (not true literals)
val items = listOf(10, 20, 30)
val scores = mapOf("Alice" to 95, "Bob" to 87)
val unique = setOf(10, 20, 30)

// Array factory
val arr = intArrayOf(10, 20, 30)
```

**Special features:**
- No native collection literal syntax
- `listOf()`, `mapOf()`, `setOf()` are standard library functions
- `to` is an infix function for `Pair` creation
- Array literals only in annotation arguments: `@Ann([1, 2, 3])`

**Further reading:**
- [Kotlin Documentation - Collections](https://kotlinlang.org/docs/collections-overview.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Array-like table
local items = {10, 20, 30}

-- Map-like table
local scores = {Alice = 95, Bob = 87}

-- Mixed table
local mixed = {10, 20, name = "Alice", [42] = true}
```

**Special features:**
- Table constructors `{...}` are the only collection literal syntax
- Tables serve as arrays, maps, and objects
- Arbitrary keys with `[key] = value` syntax
- 1-based indexing for sequential parts

**Further reading:**
- [Lua Documentation - Table Constructors](https://www.lua.org/manual/5.4/manual.html#3.4.9)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% Numeric array
items = [10, 20, 30];

% Cell array (heterogeneous elements)
mixed = {10, 'text', true};

% Struct
s = struct('Alice', 95, 'Bob', 87);
```

**Special features:**
- Numeric arrays with `[...]`
- Cell arrays with `{...}` for heterogeneous data
- Matrix literals: `[1 2; 3 4]`
- No native Map literal (`containers.Map` since R2008b)

**Further reading:**
- [MATLAB Documentation - Matrices and Arrays](https://www.mathworks.com/help/matlab/matrices-and-arrays.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# List-Literal
var items = List[Int](10, 20, 30)

# Dict-Literal
var scores = Dict[String, Int]()
scores["Alice"] = 95
scores["Bob"] = 87
```

**Special features:**
- Lists via `List[T](...)` constructor
- Dict via `Dict[K, V]()` with subsequent assignment
- Syntax follows Python but requires type annotations
- SIMD literals: `SIMD[DType.int32, 4](1, 2, 3, 4)`

**Further reading:**
- [Mojo Documentation - Types](https://docs.modular.com/mojo/manual/types)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Seq-Literal (dynamic)
var items = @[10, 20, 30]

# Array-Literal (fixed size)
var arr = [10, 20, 30]

# Table
# Requires: import std/tables
var scores = {"Alice": 95, "Bob": 87}.toTable
```

**Special features:**
- Seq literals with `@[...]` (dynamic arrays)
- Array literals with `[...]` (fixed size)
- Table literals with `{...}.toTable` (requires conversion)
- Set literals: `{10, 20, 30}` (only for ordinal types)

**Further reading:**
- [Nim Documentation - Collections](https://nim-lang.org/docs/collections.html)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Array-Literal (since Xcode 4.4)
NSArray *items = @[@10, @20, @30];

// Dictionary-Literal
NSDictionary *scores = @{@"Alice": @95, @"Bob": @87};
```

**Special features:**
- Array literals `@[...]` and dictionary literals `@{...}` since Xcode 4.4 / Clang
- Require `@` boxing for primitive types (`@10` instead of `10`)
- Create immutable collections (NSArray, NSDictionary)

**Further reading:**
- [Apple Documentation - Objective-C Literals](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/FoundationTypesandCollections/FoundationTypesandCollections.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Array constant
const
  Items: array[0..2] of Integer = (10, 20, 30);

// Dynamic array (since Delphi XE7)
var
  Items2: TArray<Integer>;
begin
  Items2 := [10, 20, 30];
end;
```

**Special features:**
- Static array constants with `(...)` syntax
- Dynamic array literals with `[...]` since Delphi XE7
- No Map or Set literals

**Further reading:**
- [Free Pascal Documentation - Arrays](https://www.freepascal.org/docs-html/ref/refsu14.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* List-Literal *)
let items = [10; 20; 30]

(* Array-Literal *)
let arr = [|10; 20; 30|]

(* Tuple-Literal *)
let pair = (10, 20)
```

**Special features:**
- List literals `[...]` with semicolon as separator
- Array literals `[|...|]`
- Tuple literals `(...)`
- No native Map or Set literal (`Map.of_list`, `Set.of_list`)

**Further reading:**
- [OCaml Documentation - Lists](https://v2.ocaml.org/api/List.html)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
% Numeric array
items = [10, 20, 30];

% Cell array (heterogeneous elements)
mixed = {10, 'text', true};

% Struct
s.Alice = 95;
s.Bob = 87;
```

**Special features:**
- Numeric arrays with `[...]`
- Cell arrays with `{...}` for heterogeneous data
- Matrix literals: `[1 2; 3 4]`
- No native Map literal

**Further reading:**
- [Octave Documentation - Data Types](https://octave.org/doc/v8.1.0/Data-Types.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Array-Literal
items := [?]int{10, 20, 30}

// Dynamic Array-Literal
dyn := [dynamic]int{10, 20, 30}

// Map-Literal
scores := map[string]int{
    "Alice" = 95,
    "Bob"   = 87,
}
```

**Special features:**
- Composite literals for arrays, dynamic arrays, and maps
- `[?]` for automatic length inference
- Similar syntax to Go

**Further reading:**
- [Odin Documentation - Arrays](https://odin-lang.org/docs/overview/#arrays)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Array
my @items = (10, 20, 30);

# Hash
my %scores = ("Alice" => 95, "Bob" => 87);

# Array-Referenz
my $ref = [10, 20, 30];

# Hash-Referenz
my $href = {"Alice" => 95, "Bob" => 87};
```

**Special features:**
- Lists `(...)`, array references `[...]`, hash references `{...}`
- `=>` (Fat Comma) as syntactic sugar for strings on the left side
- `qw()` for word lists: `qw(Alice Bob Carol)`

**Further reading:**
- [Perl Documentation - Data Types](https://perldoc.perl.org/perldata)

</TabItem>
<TabItem value="php" label="PHP">

```php
// Array-Literal
$items = [10, 20, 30];

// Associative array
$scores = ["Alice" => 95, "Bob" => 87];
```

**Special features:**
- `[...]` syntax since PHP 5.4 (previously `array(...)`)
- Arrays and associative arrays use the same syntax
- No native Set literal

**Further reading:**
- [PHP Documentation - Arrays](https://www.php.net/manual/en/language.types.array.php)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Array-Literal
items :: Array Int
items = [10, 20, 30]
```

**Special features:**
- Array literals with `[...]`
- No native Map or Set literal (`Map.fromFoldable`, `Set.fromFoldable`)
- Records: `{ name: "Alice", score: 95 }`

**Further reading:**
- [PureScript Documentation - Types](https://book.purescript.org/chapter3.html)

</TabItem>
<TabItem value="python" label="Python">

```python
# List
items = [10, 20, 30]

# Dictionary
scores = {"Alice": 95, "Bob": 87}

# Set
unique = {10, 20, 30}

# Tuple
coords = (10, 20, 30)
```

**Special features:**
- Four collection literal types: `[]` (List), `{}` (Dict/Set), `()` (Tuple)
- Empty set only via `set()` (since `{}` creates an empty dict)
- Comprehensions: `[x*2 for x in items]`, `{k: v for k, v in pairs}`

**Further reading:**
- [Python Documentation - Data Structures](https://docs.python.org/3/tutorial/datastructures.html)

</TabItem>
<TabItem value="r" label="R">

```r
# Vector (via function call)
items <- c(10, 20, 30)

# Named list (pseudo-map)
scores <- list(Alice = 95, Bob = 87)

# Named vector
named_vec <- c(Alice = 95, Bob = 87)
```

**Special features:**
- `c()` is a function, not true literal syntax
- `list()` for heterogeneous and named collections
- No true collection literals in the grammar
- Matrix construction via `matrix(c(1,2,3,4), nrow=2)`

**Further reading:**
- [R Documentation - Vectors](https://cran.r-project.org/doc/manuals/r-release/R-intro.html#Vectors-and-assignment)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
;; List-Literal (quoted)
(define items '(10 20 30))

;; Vector-Literal
(define vec #(10 20 30))

;; Hash-Literal
(define scores #hash(("Alice" . 95) ("Bob" . 87)))
```

**Special features:**
- List literals with `'()` (quote syntax)
- Vector literals with `#()`
- Hash literals with `#hash()`
- Quasi-quoting: `` `(1 2 ,(+ 1 2)) `` → `(1 2 3)`

**Further reading:**
- [Racket Documentation - Data Types](https://docs.racket-lang.org/guide/datatypes.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
# List-Literal
items = [10, 20, 30]

# Record-Literal (as Map equivalent)
scores = { alice: 95, bob: 87 }
```

**Special features:**
- List literals with `[...]`
- Records as structured data (no dynamic map)
- No native Set or Map literal
- Tag unions for algebraic data types

**Further reading:**
- [Roc Documentation - Tutorial](https://www.roc-lang.org/tutorial)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Array-Literal
items = [10, 20, 30]

# Hash-Literal
scores = { "Alice" => 95, "Bob" => 87 }

# Symbol-Keys (Kurzform)
scores2 = { Alice: 95, Bob: 87 }
```

**Special features:**
- Array literals `[...]` and hash literals `{...}`
- Symbol key shorthand: `{ key: value }` instead of `{ :key => value }`
- `%w[Alice Bob Carol]` for string arrays
- `Set[10, 20, 30]` for sets (requires `require 'set'`)

**Further reading:**
- [Ruby Documentation - Literals](https://ruby-doc.org/core-3.1.0/doc/syntax/literals_rdoc.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Array-Literal (fixed size)
let items = [10, 20, 30];

// Vec via macro
let vec = vec![10, 20, 30];

// HashMap via macro (since Rust 2021 with crate)
// Requires: use std::collections::HashMap;
let scores = HashMap::from([("Alice", 95), ("Bob", 87)]);
```

**Special features:**
- Array literals `[...]` for fixed sizes
- `vec![...]` macro for dynamic vectors
- No native Map literal, but `HashMap::from()` since Rust 1.56
- Repetition syntax: `[0; 100]` for array with 100 zeros

**Further reading:**
- [Rust Documentation - Collections](https://doc.rust-lang.org/std/collections/index.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Factory methods (not true literals)
val items = List(10, 20, 30)
val scores = Map("Alice" -> 95, "Bob" -> 87)
val unique = Set(10, 20, 30)

// Array-Literal
val arr = Array(10, 20, 30)
```

**Special features:**
- No native collection literal syntax
- `List()`, `Map()`, `Set()` are `apply` methods on companion objects
- `->` creates tuple pairs: `"Alice" -> 95` is `("Alice", 95)`

**Further reading:**
- [Scala Documentation - Collections](https://docs.scala-lang.org/overviews/collections-2.13/introduction.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; List-Literal (quoted)
(define items '(10 20 30))

;; Vector-Literal
(define vec #(10 20 30))
```

**Special features:**
- List literals with `'()` (quote syntax)
- Vector literals with `#()`
- No native Map or Set literal
- Association Lists as pseudo-maps: `'((Alice . 95) (Bob . 87))`

**Further reading:**
- [R7RS Scheme Specification](https://small.r7rs.org/attachment/r7rs.pdf)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Array-Literal
let items = [10, 20, 30]

// Dictionary-Literal
let scores = ["Alice": 95, "Bob": 87]

// Set-Literal
let unique: Set = [10, 20, 30]
```

**Special features:**
- Array and dictionary literals use `[...]` with context-dependent interpretation
- Sets use the same literal syntax as arrays (type annotation required)
- `ExpressibleByArrayLiteral` / `ExpressibleByDictionaryLiteral` protocols for custom types

**Further reading:**
- [Swift Documentation - Collection Types](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/collectiontypes/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Array-Literal
const items = [10, 20, 30];

// Object-Literal (as Map equivalent)
const scores = { Alice: 95, Bob: 87 };

// Map and Set constructors
const map = new Map([["Alice", 95], ["Bob", 87]]);
const set = new Set([10, 20, 30]);

// Tuple type
const tuple: [number, string] = [10, "text"];
```

**Special features:**
- Identical to JavaScript, extended with type annotations
- Tuple types as typed arrays of fixed length
- `as const` for readonly tuple literals: `[10, 20] as const`

**Further reading:**
- [TypeScript Handbook - Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

</TabItem>
<TabItem value="v" label="V">

```v
// Array-Literal
items := [10, 20, 30]

// Map-Literal
scores := {
    'Alice': 95
    'Bob':   87
}
```

**Special features:**
- Array literals with `[...]`
- Map literals with `{ key: value }` (without commas)
- Fixed-size arrays: `items := [10, 20, 30]!`

**Further reading:**
- [V Documentation - Arrays](https://github.com/vlang/v/blob/master/doc/docs.md#arrays)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```csharp
' Array-Literal
Dim items() As Integer = {10, 20, 30}

' Collection-Initializer
Dim list As New List(Of Integer) From {10, 20, 30}

' Dictionary-Initializer (since VB.NET 15)
Dim scores As New Dictionary(Of String, Integer) From {
    {"Alice", 95},
    {"Bob", 87}
}
```

**Special features:**
- Array literals with `{...}`
- Collection initializer with `From {}`
- Dictionary initializer with nested `{key, value}`

**Further reading:**
- [Microsoft VB.NET Documentation - Collection Initializers](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/collection-initializers/)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```wolfram
(* List-Literal *)
items = {10, 20, 30};

(* Association (Map equivalent) *)
scores = <|"Alice" -> 95, "Bob" -> 87|>;
```

**Special features:**
- List literals with `{...}` (curly braces)
- Associations with `<|...|>` as key-value pairs
- Nested lists for matrices: `{{1, 2}, {3, 4}}`

**Further reading:**
- [Wolfram Language Documentation - Lists](https://reference.wolfram.com/language/guide/Lists.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Array-Literal
const items = [_]i32{ 10, 20, 30 };

// Struct-Literal (as Record equivalent)
const point = .{ .x = 10, .y = 20 };

// Anonymous Struct-Literal
const tuple = .{ 10, "text", true };
```

**Special features:**
- Array literals with `[_]T{...}` (type inference with `[_]`)
- Anonymous struct literals with `.{...}`
- Repetition syntax: `[_]i32{0} ** 100`
- No native Map or Set literal

**Further reading:**
- [Zig Documentation - Arrays](https://ziglang.org/documentation/0.11.0/#Arrays)

</TabItem>
</Tabs>

