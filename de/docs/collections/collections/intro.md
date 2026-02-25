---
slug: /collections/collections
title: 10.1. Collections
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 10.1. Collections

Verschiedene Collection-Typen und Datenstrukturen.

## 10.1.1. Arrays

Homogene, indexbasierte Sammlungen von Elementen mit fester oder variabler Größe. Ermöglichen direkten Zugriff auf Elemente über numerische Indizes.

### Sprachen {#sprachen}

<Tabs availableTabs={['ada', 'c', 'carbon', 'clojure', 'common-lisp', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'eiffel', 'elixir', 'elm', 'erlang', 'fsharp', 'fortran', 'gleam', 'go', 'groovy', 'haskell', 'haxe', 'idris', 'java', 'javascript', 'julia', 'kotlin', 'lean4', 'mercury', 'lua', 'matlab', 'mojo', 'nim', 'objective-c', 'object-pascal', 'ocaml', 'octave', 'odin', 'perl', 'php', 'purescript', 'python', 'r', 'racket', 'roc', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'vbnet', 'v', 'wolfram-language', 'zig']}>
<TabItem value="ada" label="Ada">

```ada
-- Array-Deklaration und Initialisierung
type Integer_Array is array (1 .. 5) of Integer;
numbers : Integer_Array := (10, 20, 30, 40, 50);

-- Zugriff auf Elemente
numbers(1) := 15;
first := numbers(1);

-- Array-Länge
length := numbers'Length;
```

**Besonderheiten:**
- Arrays haben feste Größe zur Compile-Zeit
- Indexbereich wird explizit angegeben (z.B. `1 .. 5`)
- Typsicher und bounds-checked

**Weiterführende Links:**
- [Ada Reference Manual - Arrays](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-3-6.html)

</TabItem>
<TabItem value="c" label="C">

```c
// Array-Deklaration und Initialisierung
int numbers[5] = {10, 20, 30, 40, 50};

// Zugriff auf Elemente
numbers[0] = 15;
int first = numbers[0];

// Array-Länge (nur bei Compile-Zeit bekannt)
size_t length = sizeof(numbers) / sizeof(numbers[0]);
```

**Besonderheiten:**
- Arrays haben feste Größe
- Index beginnt bei 0
- Keine automatische Bounds-Checking
- Arrays zerfallen zu Pointern bei Funktionsaufrufen

**Weiterführende Links:**
- [C Standard - Array Types](https://en.cppreference.com/w/c/language/array)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Array-Deklaration (experimentell)
var numbers: [i32; 5] = (10, 20, 30, 40, 50);

// Zugriff auf Elemente
numbers[0] = 15;
var first: i32 = numbers[0];
```

**Besonderheiten:**
- Experimentelle Sprache, Syntax kann sich noch ändern
- C++-ähnliche Syntax mit modernen Features

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Array-ähnliche Vektoren
(def numbers [10 20 30 40 50])

;; Zugriff auf Elemente
(assoc numbers 0 15)
(def first (get numbers 0))

;; Array-Länge
(count numbers)
```

**Besonderheiten:**
- Verwendet Vektoren (persistente Datenstrukturen) statt Arrays
- Immutable by default
- Index beginnt bei 0

**Weiterführende Links:**
- [Clojure Documentation - Vectors](https://clojure.org/reference/data_structures#Vectors)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Array-Deklaration
(setf numbers (make-array 5 :initial-contents '(10 20 30 40 50)))

;; Zugriff auf Elemente
(setf (aref numbers 0) 15)
(setf first (aref numbers 0))

;; Array-Länge
(array-dimension numbers 0)
```

**Besonderheiten:**
- Arrays können mehrdimensional sein
- Index beginnt bei 0
- Unterstützt adjustable arrays

**Weiterführende Links:**
- [Common Lisp HyperSpec - Arrays](http://www.lispworks.com/documentation/HyperSpec/Body/t_array.htm)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Array-Deklaration (C-Style)
int numbers[5] = {10, 20, 30, 40, 50};

// Zugriff auf Elemente
numbers[0] = 15;
int first = numbers[0];

// std::array (seit C++11)
std::array<int, 5> numbers2 = {10, 20, 30, 40, 50};
numbers2[0] = 15;
size_t length = numbers2.size();
```

**Besonderheiten:**
- Unterstützt sowohl C-Style-Arrays als auch `std::array`
- `std::array` bietet bessere Type-Safety und Methoden
- Index beginnt bei 0

**Weiterführende Links:**
- [cppreference.com - std::array](https://en.cppreference.com/w/cpp/container/array)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Array-Deklaration
numbers = [10, 20, 30, 40, 50]

# Zugriff auf Elemente
numbers[0] = 15
first = numbers[0]

# Array-Länge
length = numbers.size
```

**Besonderheiten:**
- Dynamische Größe
- Index beginnt bei 0
- Unterstützt negative Indizes für Zugriff vom Ende

**Weiterführende Links:**
- [Crystal Documentation - Arrays](https://crystal-lang.org/reference/1.11/syntax_and_semantics/literals/array.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Array-Deklaration
int[] numbers = {10, 20, 30, 40, 50};

// Zugriff auf Elemente
numbers[0] = 15;
int first = numbers[0];

// Array-Länge
int length = numbers.Length;
```

**Besonderheiten:**
- Arrays haben feste Größe nach Initialisierung
- Index beginnt bei 0
- Bounds-checking zur Laufzeit

**Weiterführende Links:**
- [Microsoft C# Documentation - Arrays](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/arrays/)

</TabItem>
<TabItem value="d" label="D">

```d
// Array-Deklaration
int[] numbers = [10, 20, 30, 40, 50];

// Zugriff auf Elemente
numbers[0] = 15;
int first = numbers[0];

// Array-Länge
size_t length = numbers.length;
```

**Besonderheiten:**
- Dynamische Arrays sind Standard
- Index beginnt bei 0
- Unterstützt Slicing

**Weiterführende Links:**
- [D Language Specification - Arrays](https://dlang.org/spec/arrays.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Array-ähnliche Listen
var numbers = [10, 20, 30, 40, 50];

// Zugriff auf Elemente
numbers[0] = 15;
var first = numbers[0];

// Array-Länge
int length = numbers.length;
```

**Besonderheiten:**
- Verwendet Listen statt Arrays
- Dynamische Größe
- Index beginnt bei 0

**Weiterführende Links:**
- [Dart Language Tour - Lists](https://dart.dev/guides/language/language-tour#lists)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
-- Array-Deklaration
numbers: ARRAY [INTEGER]
create numbers.make_filled (0, 1, 5)
numbers.put (10, 1)
numbers.put (20, 2)
numbers.put (30, 3)
numbers.put (40, 4)
numbers.put (50, 5)

-- Zugriff auf Elemente
numbers.put (15, 1)
first := numbers.item (1)
```

**Besonderheiten:**
- Index beginnt bei 1 (nicht 0)
- Typsicher mit Generics
- Bounds-checking zur Laufzeit

**Weiterführende Links:**
- [Eiffel Documentation - ARRAY](https://www.eiffel.org/doc/eiffel/ET-Library/ARRAY)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Listen (immutable)
numbers = [10, 20, 30, 40, 50]

# Zugriff auf Elemente (nur lesend)
first = List.first(numbers)
second = Enum.at(numbers, 1)

# Neue Liste mit Änderung
numbers = List.replace_at(numbers, 0, 15)
```

**Besonderheiten:**
- Verwendet Listen statt Arrays
- Immutable by default
- Index beginnt bei 0

**Weiterführende Links:**
- [Elixir Documentation - Lists](https://hexdocs.pm/elixir/List.html)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Benötigt: import Array
-- Arrays (immutable, index-basiert)
numbers = Array.fromList [10, 20, 30, 40, 50]

-- Zugriff auf Elemente (gibt Maybe zurück)
first = Array.get 0 numbers     -- Just 10
third = Array.get 2 numbers     -- Just 30
outOfBounds = Array.get 99 numbers  -- Nothing

-- Array-Operationen
updated = Array.set 1 99 numbers
length = Array.length numbers   -- 5
```

**Besonderheiten:**
- `Array` ist ein separates Modul (nicht `List`)
- Index-basierter Zugriff über `Array.get` (gibt `Maybe` zurück)
- Immutable: `Array.set` erzeugt ein neues Array
- O(log n) Zugriff (implementiert als relaxed radix balanced tree)

**Weiterführende Links:**
- [Elm Documentation - Array](https://package.elm-lang.org/packages/elm/core/latest/Array)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% Listen (immutable)
Numbers = [10, 20, 30, 40, 50],

% Zugriff auf Elemente
First = lists:nth(1, Numbers),
Length = length(Numbers)
```

**Besonderheiten:**
- Verwendet Listen statt Arrays
- Immutable by default
- Index beginnt bei 1

**Weiterführende Links:**
- [Erlang Documentation - Lists](https://www.erlang.org/doc/man/lists.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Array-Deklaration
let numbers = [|10; 20; 30; 40; 50|]

// Zugriff auf Elemente
numbers.[0] <- 15
let first = numbers.[0]

// Array-Länge
let length = Array.length numbers
```

**Besonderheiten:**
- Arrays sind mutable
- Index beginnt bei 0
- Unterstützt auch immutable Listen

**Weiterführende Links:**
- [F# Documentation - Arrays](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/arrays)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Array-Deklaration
integer :: numbers(5)
numbers = [10, 20, 30, 40, 50]

! Zugriff auf Elemente
numbers(1) = 15
first = numbers(1)

! Array-Länge
length = size(numbers)
```

**Besonderheiten:**
- Index beginnt bei 1 (Standard)
- Unterstützt mehrdimensionale Arrays
- Column-major order

**Weiterführende Links:**
- [Fortran Standard - Arrays](https://gcc.gnu.org/onlinedocs/gfortran/Arrays.html)

</TabItem>
<TabItem value="gleam" label="Gleam">

```erlang
// Listen (immutable)
let numbers = [10, 20, 30, 40, 50]

// Zugriff auf Elemente
case numbers {
  [first, ..] -> first
  _ -> 0
}
```

**Besonderheiten:**
- Verwendet Listen statt Arrays
- Immutable by default
- Pattern Matching für Zugriff

**Weiterführende Links:**
- [Gleam Documentation - Lists](https://gleam.run/documentation/tour/lists/)

</TabItem>
<TabItem value="go" label="Go">

```go
// Array-Deklaration (feste Größe)
var numbers [5]int = [5]int{10, 20, 30, 40, 50}

// Zugriff auf Elemente
numbers[0] = 15
first := numbers[0]

// Array-Länge
length := len(numbers)
```

**Besonderheiten:**
- Arrays haben feste Größe
- Slices sind flexibler und häufiger verwendet
- Index beginnt bei 0

**Weiterführende Links:**
- [Go Documentation - Arrays](https://go.dev/tour/moretypes/6)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Array-Deklaration
def numbers = [10, 20, 30, 40, 50] as int[]

// Zugriff auf Elemente
numbers[0] = 15
def first = numbers[0]

// Array-Länge
def length = numbers.length
```

**Besonderheiten:**
- Unterstützt sowohl Arrays als auch Listen
- Index beginnt bei 0
- Dynamische Typisierung

**Weiterführende Links:**
- [Groovy Documentation - Arrays](https://groovy-lang.org/syntax.html#_arrays)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Listen (immutable)
numbers = [10, 20, 30, 40, 50]

-- Zugriff auf Elemente
first = head numbers
rest = tail numbers
element = numbers !! 0
```

**Besonderheiten:**
- Verwendet Listen statt Arrays
- Immutable by default
- Lazy evaluation möglich

**Weiterführende Links:**
- [Haskell Documentation - Lists](https://www.haskell.org/tutorial/lists.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Array-Deklaration
var numbers = [10, 20, 30, 40, 50];

// Zugriff auf Elemente
numbers[0] = 15;
var first = numbers[0];

// Array-Länge
var length = numbers.length;
```

**Besonderheiten:**
- Dynamische Arrays
- Index beginnt bei 0
- Cross-platform

**Weiterführende Links:**
- [Haxe Documentation - Array](https://haxe.org/manual/std-Array.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Listen (immutable)
numbers : List Int
numbers = [10, 20, 30, 40, 50]

-- Zugriff auf Elemente
first = head numbers
rest = tail numbers
```

**Besonderheiten:**
- Verwendet Listen statt Arrays
- Immutable by default
- Dependent types

**Weiterführende Links:**
- [Idris 2 Documentation - Types and Functions](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html#lists)

</TabItem>
<TabItem value="java" label="Java">

```java
// Array-Deklaration
int[] numbers = {10, 20, 30, 40, 50};

// Zugriff auf Elemente
numbers[0] = 15;
int first = numbers[0];

// Array-Länge
int length = numbers.length;
```

**Besonderheiten:**
- Arrays haben feste Größe nach Initialisierung
- Index beginnt bei 0
- Bounds-checking zur Laufzeit

**Weiterführende Links:**
- [Oracle Java Documentation - Arrays](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/arrays.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Array-Deklaration
const numbers = [10, 20, 30, 40, 50];

// Zugriff auf Elemente
numbers[0] = 15;
const first = numbers[0];

// Array-Länge
const length = numbers.length;
```

**Besonderheiten:**
- Dynamische Größe
- Index beginnt bei 0
- Arrays sind Objekte

**Weiterführende Links:**
- [MDN Web Docs - Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Array-Deklaration
numbers = [10, 20, 30, 40, 50]

# Zugriff auf Elemente
numbers[1] = 15
first = numbers[1]

# Array-Länge
length = length(numbers)
```

**Besonderheiten:**
- Index beginnt bei 1 (nicht 0)
- Unterstützt mehrdimensionale Arrays
- Column-major order

**Weiterführende Links:**
- [Julia Documentation - Arrays](https://docs.julialang.org/en/v1/manual/arrays/)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Array-Deklaration
val numbers = arrayOf(10, 20, 30, 40, 50)

// Zugriff auf Elemente
numbers[0] = 15
val first = numbers[0]

// Array-Länge
val length = numbers.size
```

**Besonderheiten:**
- Arrays haben feste Größe
- Index beginnt bei 0
- Bounds-checking zur Laufzeit

**Weiterführende Links:**
- [Kotlin Documentation - Arrays](https://kotlinlang.org/docs/arrays.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Array-Deklaration
def numbers : Array Nat := #[10, 20, 30, 40, 50]

-- Zugriff auf Elemente (typsicher mit Beweis)
def first := numbers[0]!

-- Array-Länge
def length := numbers.size

-- Neues Array (push erstellt Kopie, optimiert bei eindeutiger Referenz)
def numbers2 := numbers.push 60
```

**Besonderheiten:**
- `Array α` als dynamisches, zusammenhängendes Array
- `#[...]`-Literal-Syntax für Array-Erstellung
- `[i]!` für Zugriff mit Laufzeit-Bounds-Check (Panic bei Index-Fehler)
- Der Compiler optimiert bei eindeutiger Referenz zu In-Place-Mutation

**Weiterführende Links:**
- [Lean 4 Documentation - Array](https://lean-lang.org/lean4/doc/array.html)
- [Functional Programming in Lean - Arrays](https://lean-lang.org/functional_programming_in_lean/)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Benötigt: :- import_module array.
Array = array.from_list([10, 20, 30, 40, 50]),

% Zugriff auf Elemente
First = array.lookup(Array, 0),    % First = 10

% Array-Länge
Length = array.size(Array),        % Length = 5

% Element ändern (erstellt neues Array oder in-place mit unique modes)
array.set(0, 15, Array, Array2)
```

**Besonderheiten:**
- `array`-Modul für indexbasierte, zusammenhängende Arrays
- `array.from_list/1` erstellt Array aus Liste
- `array.lookup/2` für O(1)-Zugriff, `array.set/4` für Modifikation
- Destructive Update nur mit unique modes (`di`/`uo`)

**Weiterführende Links:**
- [Mercury Standard Library - array](https://www.mercurylang.org/information/doc-release/mercury_library/array.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Tabellen (Arrays sind Tabellen mit numerischen Indizes)
numbers = {10, 20, 30, 40, 50}

-- Zugriff auf Elemente
numbers[1] = 15
first = numbers[1]

-- Array-Länge
length = #numbers
```

**Besonderheiten:**
- Arrays sind Tabellen mit numerischen Indizes
- Index beginnt bei 1 (Standard)
- Dynamische Größe

**Weiterführende Links:**
- [Lua Documentation - Tables](https://www.lua.org/manual/5.4/manual.html#2.1)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% Array-Deklaration
numbers = [10, 20, 30, 40, 50];

% Zugriff auf Elemente
numbers(1) = 15;
first = numbers(1);

% Array-Länge
length = length(numbers);
```

**Besonderheiten:**
- Index beginnt bei 1 (nicht 0)
- Unterstützt mehrdimensionale Arrays
- Column-major order

**Weiterführende Links:**
- [MATLAB Documentation - Arrays](https://www.mathworks.com/help/matlab/learn_matlab/arrays.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# Array-Deklaration
var numbers = Array[Int](10, 20, 30, 40, 50)

# Zugriff auf Elemente
numbers[0] = 15
var first = numbers[0]

# Array-Länge
var length = len(numbers)
```

**Besonderheiten:**
- Python-ähnliche Syntax
- Index beginnt bei 0
- Performance-orientiert

**Weiterführende Links:**
- [Mojo Documentation](https://docs.modular.com/mojo/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Array-Deklaration
var numbers = [10, 20, 30, 40, 50]

# Zugriff auf Elemente
numbers[0] = 15
let first = numbers[0]

# Array-Länge
let length = len(numbers)
```

**Besonderheiten:**
- Arrays haben feste Größe
- Index beginnt bei 0
- Sequences sind flexibler

**Weiterführende Links:**
- [Nim Documentation - Arrays](https://nim-lang.org/docs/manual.html#types-array-and-sequence-types)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// NSArray (immutable)
NSArray *numbers = @[@10, @20, @30, @40, @50];

// Zugriff auf Elemente
NSNumber *first = numbers[0];

// NSMutableArray (mutable)
NSMutableArray *mutableNumbers = [@[@10, @20, @30, @40, @50] mutableCopy];
mutableNumbers[0] = @15;
```

**Besonderheiten:**
- Verwendet NSArray/NSMutableArray
- Index beginnt bei 0
- Reference counting

**Weiterführende Links:**
- [Apple Documentation - NSArray](https://developer.apple.com/documentation/foundation/nsarray)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Array-Deklaration
var
  numbers: array[0..4] of Integer = (10, 20, 30, 40, 50);

// Zugriff auf Elemente
numbers[0] := 15;
first := numbers[0];

// Array-Länge
length := Length(numbers);
```

**Besonderheiten:**
- Arrays haben feste Größe
- Indexbereich wird explizit angegeben
- Typsicher

**Weiterführende Links:**
- [Free Pascal Documentation - Arrays](https://www.freepascal.org/docs-html/ref/refsu14.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Array-Deklaration *)
let numbers = [|10; 20; 30; 40; 50|]

(* Zugriff auf Elemente *)
numbers.(0) <- 15
let first = numbers.(0)

(* Array-Länge *)
let length = Array.length numbers
```

**Besonderheiten:**
- Arrays sind mutable
- Index beginnt bei 0
- Unterstützt auch immutable Listen

**Weiterführende Links:**
- [OCaml Documentation - Arrays](https://v2.ocaml.org/api/Array.html)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
% Array-Deklaration
numbers = [10, 20, 30, 40, 50];

% Zugriff auf Elemente
numbers(1) = 15;
first = numbers(1);

% Array-Länge
length = length(numbers);
```

**Besonderheiten:**
- Index beginnt bei 1 (nicht 0)
- Unterstützt mehrdimensionale Arrays
- MATLAB-kompatibel

**Weiterführende Links:**
- [GNU Octave Documentation - Matrices](https://octave.org/doc/v8.1.0/Matrices.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Array-Deklaration
numbers: [5]int = {10, 20, 30, 40, 50}

// Zugriff auf Elemente
numbers[0] = 15
first := numbers[0]

// Array-Länge
length := len(numbers)
```

**Besonderheiten:**
- Arrays haben feste Größe
- Index beginnt bei 0
- C-ähnliche Syntax

**Weiterführende Links:**
- [Odin Documentation - Arrays](https://odin-lang.org/docs/overview/#arrays)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Array-Deklaration
my @numbers = (10, 20, 30, 40, 50);

# Zugriff auf Elemente
$numbers[0] = 15;
my $first = $numbers[0];

# Array-Länge
my $length = scalar @numbers;
```

**Besonderheiten:**
- Arrays haben dynamische Größe
- Index beginnt bei 0
- Context-sensitive (Skalar vs. List)

**Weiterführende Links:**
- [Perl Documentation - Arrays](https://perldoc.perl.org/perldata#Arrays)

</TabItem>
<TabItem value="php" label="PHP">

```php
// Array-Deklaration
$numbers = [10, 20, 30, 40, 50];

// Zugriff auf Elemente
$numbers[0] = 15;
$first = $numbers[0];

// Array-Länge
$length = count($numbers);
```

**Besonderheiten:**
- Arrays sind assoziative Arrays
- Dynamische Größe
- Index beginnt bei 0

**Weiterführende Links:**
- [PHP Documentation - Arrays](https://www.php.net/manual/en/language.types.array.php)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Arrays
let numbers = [10, 20, 30, 40, 50]

-- Zugriff auf Elemente
first = numbers !! 0

-- Array-Länge
length = length numbers
```

**Besonderheiten:**
- Arrays sind immutable
- Index beginnt bei 0
- Funktionale Programmierung

**Weiterführende Links:**
- [PureScript Documentation - Arrays](https://pursuit.purescript.org/packages/purescript-arrays)

</TabItem>
<TabItem value="python" label="Python">

```python
# Listen (Array-ähnlich)
numbers = [10, 20, 30, 40, 50]

# Zugriff auf Elemente
numbers[0] = 15
first = numbers[0]

# Array-Länge
length = len(numbers)
```

**Besonderheiten:**
- Verwendet Listen statt Arrays
- Dynamische Größe
- Index beginnt bei 0

**Weiterführende Links:**
- [Python Documentation - Lists](https://docs.python.org/3/tutorial/datastructures.html#more-on-lists)

</TabItem>
<TabItem value="r" label="R">

```r
# Vektoren (Arrays)
numbers <- c(10, 20, 30, 40, 50)

# Zugriff auf Elemente
numbers[1] <- 15
first <- numbers[1]

# Array-Länge
length <- length(numbers)
```

**Besonderheiten:**
- Verwendet Vektoren statt Arrays
- Index beginnt bei 1 (nicht 0)
- Alle Elemente müssen denselben Typ haben

**Weiterführende Links:**
- [R Documentation - Vectors](https://cran.r-project.org/doc/manuals/r-release/R-intro.html#Vectors-and-assignment)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
;; Vektoren (Arrays)
(define numbers (vector 10 20 30 40 50))

;; Zugriff auf Elemente
(vector-set! numbers 0 15)
(define first (vector-ref numbers 0))

;; Array-Länge
(define length (vector-length numbers))
```

**Besonderheiten:**
- Verwendet Vektoren statt Arrays
- Index beginnt bei 0
- Mutable

**Weiterführende Links:**
- [Racket Documentation - Vectors](https://docs.racket-lang.org/reference/vectors.html)

</TabItem>
<TabItem value="roc" label="Roc">

```roc
# Listen (immutable)
numbers = [10, 20, 30, 40, 50]

# Zugriff auf Elemente
first = List.get numbers 0
```

**Besonderheiten:**
- Verwendet Listen statt Arrays
- Immutable by default
- Funktionale Programmierung

**Weiterführende Links:**
- [Roc Documentation - Lists](https://www.roc-lang.org/builtins/List)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Array-Deklaration
numbers = [10, 20, 30, 40, 50]

# Zugriff auf Elemente
numbers[0] = 15
first = numbers[0]

# Array-Länge
length = numbers.length
```

**Besonderheiten:**
- Dynamische Größe
- Index beginnt bei 0
- Unterstützt negative Indizes

**Weiterführende Links:**
- [Ruby Documentation - Arrays](https://ruby-doc.org/core-3.1.0/Array.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Array-Deklaration (feste Größe)
let mut numbers = [10, 20, 30, 40, 50];

// Zugriff auf Elemente
numbers[0] = 15;
let first = numbers[0];

// Array-Länge
let length = numbers.len();
```

**Besonderheiten:**
- Arrays haben feste Größe zur Compile-Zeit
- Vektoren sind flexibler
- Index beginnt bei 0
- Bounds-checking zur Laufzeit

**Weiterführende Links:**
- [Rust Documentation - Arrays](https://doc.rust-lang.org/book/ch03-02-data-types.html#the-array-type)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Array-Deklaration
val numbers = Array(10, 20, 30, 40, 50)

// Zugriff auf Elemente
numbers(0) = 15
val first = numbers(0)

// Array-Länge
val length = numbers.length
```

**Besonderheiten:**
- Arrays sind mutable
- Index beginnt bei 0
- Unterstützt auch immutable Collections

**Weiterführende Links:**
- [Scala Documentation - Arrays](https://docs.scala-lang.org/overviews/collections-2.13/arrays.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; Vektoren (Arrays)
(define numbers (vector 10 20 30 40 50))

;; Zugriff auf Elemente
(vector-set! numbers 0 15)
(define first (vector-ref numbers 0))

;; Array-Länge
(define length (vector-length numbers))
```

**Besonderheiten:**
- Verwendet Vektoren statt Arrays
- Index beginnt bei 0
- Mutable

**Weiterführende Links:**
- [R7RS Scheme - Vectors](https://small.r7rs.org/attachment/r7rs.pdf)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Array-Deklaration
var numbers = [10, 20, 30, 40, 50]

// Zugriff auf Elemente
numbers[0] = 15
let first = numbers[0]

// Array-Länge
let length = numbers.count
```

**Besonderheiten:**
- Arrays haben dynamische Größe
- Index beginnt bei 0
- Value semantics

**Weiterführende Links:**
- [Swift Documentation - Arrays](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/collectiontypes/#Arrays)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Array-Deklaration
const numbers: number[] = [10, 20, 30, 40, 50];

// Zugriff auf Elemente
numbers[0] = 15;
const first = numbers[0];

// Array-Länge
const length = numbers.length;
```

**Besonderheiten:**
- Dynamische Größe
- Index beginnt bei 0
- Type annotations optional

**Weiterführende Links:**
- [TypeScript Handbook - Arrays](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Array-Deklaration
Dim numbers() As Integer = {10, 20, 30, 40, 50}

' Zugriff auf Elemente
numbers(0) = 15
Dim first As Integer = numbers(0)

' Array-Länge
Dim length As Integer = numbers.Length
```

**Besonderheiten:**
- Arrays haben feste Größe nach Initialisierung
- Index beginnt bei 0
- Bounds-checking zur Laufzeit

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Arrays](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/arrays/)

</TabItem>
<TabItem value="v" label="V">

```v
// Array-Deklaration
mut numbers := [10, 20, 30, 40, 50]

// Zugriff auf Elemente
numbers[0] = 15
first := numbers[0]

// Array-Länge
length := numbers.len
```

**Besonderheiten:**
- Arrays haben feste Größe
- Index beginnt bei 0
- Immutable by default (mut erforderlich)

**Weiterführende Links:**
- [V Documentation - Arrays](https://github.com/vlang/v/blob/master/doc/docs.md#arrays)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Listen (Arrays) *)
numbers = {10, 20, 30, 40, 50};

(* Zugriff auf Elemente *)
numbers[[1]] = 15;
first = numbers[[1]];

(* Array-Länge *)
length = Length[numbers]
```

**Besonderheiten:**
- Verwendet Listen statt Arrays
- Index beginnt bei 1 (nicht 0)
- Negative Indizes für Zugriff von hinten: `numbers[[-1]]`

**Weiterführende Links:**
- [Wolfram Language Documentation - Lists](https://reference.wolfram.com/language/guide/Lists.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Array-Deklaration
var numbers = [_]i32{10, 20, 30, 40, 50};

// Zugriff auf Elemente
numbers[0] = 15;
const first = numbers[0];

// Array-Länge
const length = numbers.len;
```

**Besonderheiten:**
- Arrays haben feste Größe zur Compile-Zeit
- Index beginnt bei 0
- Slices sind flexibler

**Weiterführende Links:**
- [Zig Documentation - Arrays](https://ziglang.org/documentation/0.11.0/#Arrays)

</TabItem>
</Tabs>


## 10.1.2. Lists

Dynamische, sequenzielle Sammlungen von Elementen, die typischerweise flexibler als Arrays sind. Unterstützen häufig Einfügen, Löschen und Ändern von Elementen zur Laufzeit.

### Sprachen {#sprachen}

<Tabs availableTabs={['carbon', 'clojure', 'common-lisp', 'crystal', 'csharp', 'dart', 'elixir', 'elm', 'erlang', 'fsharp', 'gleam', 'go', 'groovy', 'haskell', 'haxe', 'idris', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'mercury', 'lua', 'mojo', 'nim', 'object-pascal', 'ocaml', 'perl', 'php', 'purescript', 'python', 'r', 'racket', 'roc', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'vbnet', 'wolfram-language']}>
<TabItem value="carbon" label="Carbon">

```cpp
// Listen (experimentell)
var items: List<i32> = (10, 20, 30);
items.append(40);
```

**Besonderheiten:**
- Experimentelle Sprache, Syntax kann sich noch ändern

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Listen
(def items (list 10 20 30))
(def items2 (conj items 40))
```

**Besonderheiten:**
- Listen sind immutable und persistent
- `conj` fügt am Anfang hinzu (nicht am Ende)
- Vektoren sind für sequenziellen Zugriff besser geeignet

**Weiterführende Links:**
- [Clojure Documentation - Lists](https://clojure.org/reference/data_structures#Lists)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Listen
(setf items (list 10 20 30))
(setf items (append items (list 40)))
```

**Besonderheiten:**
- Listen sind die grundlegende Datenstruktur
- Linked Lists, nicht Arrays
- `cons` für Konstruktion, `car`/`cdr` für Zugriff

**Weiterführende Links:**
- [Common Lisp HyperSpec - Lists](http://www.lispworks.com/documentation/HyperSpec/Body/t_list.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Listen (Arrays werden als Listen verwendet)
items = [10, 20, 30]
items << 40
```

**Besonderheiten:**
- Arrays werden als Listen verwendet
- Dynamische Größe
- Unterstützt alle List-Operationen

**Weiterführende Links:**
- [Crystal Documentation - Arrays](https://crystal-lang.org/reference/1.11/syntax_and_semantics/literals/array.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// List<T> (seit .NET 2.0)
var items = new List<int> { 10, 20, 30 };
items.Add(40);
```

**Besonderheiten:**
- `List<T>` ist die Standard-Liste
- Dynamische Größe
- Typsicher mit Generics

**Weiterführende Links:**
- [Microsoft C# Documentation - List](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Listen
var items = [10, 20, 30];
items.add(40);
```

**Besonderheiten:**
- Listen sind die Standard-Collection
- Dynamische Größe
- Growable lists

**Weiterführende Links:**
- [Dart Language Tour - Lists](https://dart.dev/guides/language/language-tour#lists)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Listen (immutable)
items = [10, 20, 30]
items = items ++ [40]
```

**Besonderheiten:**
- Listen sind immutable Linked Lists
- `++` für Konkatenation
- Pattern Matching unterstützt

**Weiterführende Links:**
- [Elixir Documentation - Lists](https://hexdocs.pm/elixir/List.html)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Listen (immutable)
items = [10, 20, 30]
items2 = items ++ [40]
```

**Besonderheiten:**
- Listen sind immutable
- `++` für Konkatenation
- Funktionale Programmierung

**Weiterführende Links:**
- [Elm Documentation - List](https://package.elm-lang.org/packages/elm/core/latest/List)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% Listen (immutable)
Items = [10, 20, 30],
Items2 = Items ++ [40]
```

**Besonderheiten:**
- Listen sind immutable Linked Lists
- `++` für Konkatenation
- Pattern Matching unterstützt

**Weiterführende Links:**
- [Erlang Documentation - Lists](https://www.erlang.org/doc/man/lists.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Listen (immutable)
let items = [10; 20; 30]
let items2 = items @ [40]
```

**Besonderheiten:**
- Listen sind immutable Linked Lists
- `@` für Konkatenation
- Pattern Matching unterstützt

**Weiterführende Links:**
- [F# Documentation - Lists](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/lists)

</TabItem>
<TabItem value="gleam" label="Gleam">

```erlang
// Listen (immutable)
let items = [10, 20, 30]
let items2 = items ++ [40]
```

**Besonderheiten:**
- Listen sind immutable
- `++` für Konkatenation
- Pattern Matching unterstützt

**Weiterführende Links:**
- [Gleam Documentation - Lists](https://gleam.run/documentation/tour/lists/)

</TabItem>
<TabItem value="go" label="Go">

```go
// Slices (Listen-ähnlich)
items := []int{10, 20, 30}
items = append(items, 40)
```

**Besonderheiten:**
- Verwendet Slices statt Listen
- Dynamische Größe mit `append`
- Slices sind Referenzen auf Arrays

**Weiterführende Links:**
- [Go Documentation - Slices](https://go.dev/tour/moretypes/7)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Listen
def items = [10, 20, 30]
items << 40
```

**Besonderheiten:**
- Listen sind die Standard-Collection
- Dynamische Größe
- Unterstützt `<<` Operator

**Weiterführende Links:**
- [Groovy Documentation - Lists](https://groovy-lang.org/groovy-dev-kit.html#_working_with_collections)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Listen (immutable)
items = [10, 20, 30]
items2 = items ++ [40]
```

**Besonderheiten:**
- Listen sind immutable Linked Lists
- `++` für Konkatenation
- Lazy evaluation möglich

**Weiterführende Links:**
- [Haskell Documentation - Lists](https://www.haskell.org/tutorial/lists.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Listen (Arrays werden als Listen verwendet)
var items = [10, 20, 30];
items.push(40);
```

**Besonderheiten:**
- Arrays werden als Listen verwendet
- Dynamische Größe
- `push` für Hinzufügen

**Weiterführende Links:**
- [Haxe Documentation - Array](https://haxe.org/manual/std-Array.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Listen (immutable)
items : List Int
items = [10, 20, 30]
items2 = items ++ [40]
```

**Besonderheiten:**
- Listen sind immutable
- `++` für Konkatenation
- Dependent types

**Weiterführende Links:**
- [Idris 2 Documentation - Types and Functions](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html#lists)

</TabItem>
<TabItem value="java" label="Java">

```java
// ArrayList (seit Java 1.2)
List<Integer> items = new ArrayList<>();
items.add(10);
items.add(20);
items.add(30);
items.add(40);
```

**Besonderheiten:**
- `ArrayList` ist die Standard-Liste
- Dynamische Größe
- Typsicher mit Generics (seit Java 5.0)

**Weiterführende Links:**
- [Oracle Java Documentation - List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Arrays werden als Listen verwendet
const items = [10, 20, 30];
items.push(40);
```

**Besonderheiten:**
- Arrays werden als Listen verwendet
- Dynamische Größe
- `push` für Hinzufügen am Ende

**Weiterführende Links:**
- [MDN Web Docs - Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Vektoren (Listen-ähnlich)
items = [10, 20, 30]
push!(items, 40)
```

**Besonderheiten:**
- Vektoren werden als Listen verwendet
- Dynamische Größe
- `push!` für Hinzufügen (mutating)

**Weiterführende Links:**
- [Julia Documentation - Arrays](https://docs.julialang.org/en/v1/manual/arrays/)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
// Listen sind der primäre Collection-Typ
val items = [10, 20, 30]
val items2 = Cons(40, items)

// Zugriff
val first = items.head         // 10
val rest = items.tail          // [20, 30]
val third = items[2]           // 30
```

**Besonderheiten:**
- `list<a>` ist der primäre Collection-Typ
- Einfach verkettete, unveränderliche Liste
- `Cons` für Prepend, `++` für Konkatenation
- Pattern Matching auf `Cons(head, tail)` und `Nil`

**Weiterführende Links:**
- [Koka Standard Library - list](https://koka-lang.github.io/koka/doc/std_core_list.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// MutableList
val items = mutableListOf(10, 20, 30)
items.add(40)
```

**Besonderheiten:**
- `MutableList` für veränderbare Listen
- `List` ist immutable
- Dynamische Größe

**Weiterführende Links:**
- [Kotlin Documentation - Collections](https://kotlinlang.org/docs/collections-overview.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Einfach verkettete Liste
def items : List Nat := [10, 20, 30]

-- Prepend mit :: (Cons)
def items2 := 40 :: items
-- [40, 10, 20, 30]

-- Konkatenation
def combined := items ++ [40, 50]
-- [10, 20, 30, 40, 50]

-- Pattern Matching
def firstOrZero (xs : List Nat) : Nat :=
  match xs with
  | [] => 0
  | x :: _ => x
```

**Besonderheiten:**
- `List α` als einfach verkettete Liste (linked list)
- `::` (Cons) für O(1) Prepend
- `++` für Konkatenation
- Pattern Matching auf `[]` (Nil) und `x :: xs` (Cons)

**Weiterführende Links:**
- [Lean 4 Documentation - List](https://leanprover-community.github.io/mathlib4_docs/Init/Prelude.html#List)
- [Functional Programming in Lean](https://lean-lang.org/functional_programming_in_lean/)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Einfach verkettete Liste
Items = [10, 20, 30],

% Prepend (Cons)
Items2 = [40 | Items],
% Items2 = [40, 10, 20, 30]

% Konkatenation
Combined = list.append(Items, [40, 50]),
% Combined = [10, 20, 30, 40, 50]

% Zugriff
First = list.det_head(Items),   % First = 10
Rest = list.det_tail(Items)     % Rest = [20, 30]
```

**Besonderheiten:**
- `list` ist der zentrale Collection-Typ in Mercury
- `[H | T]`-Syntax für Cons (O(1) Prepend)
- Pattern Matching auf `[]` (Nil) und `[H | T]` (Cons)
- Immutable – alle Operationen erzeugen neue Listen

**Weiterführende Links:**
- [Mercury Standard Library - list](https://www.mercurylang.org/information/doc-release/mercury_library/list.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Tabellen werden als Listen verwendet
items = {10, 20, 30}
table.insert(items, 40)
```

**Besonderheiten:**
- Tabellen werden als Listen verwendet
- Dynamische Größe
- `table.insert` für Hinzufügen

**Weiterführende Links:**
- [Lua Documentation - Tables](https://www.lua.org/manual/5.4/manual.html#2.1)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# Listen (Python-ähnlich)
var items = List[Int](10, 20, 30)
items.append(40)
```

**Besonderheiten:**
- Python-ähnliche Syntax
- Dynamische Größe
- Performance-orientiert

**Weiterführende Links:**
- [Mojo Documentation](https://docs.modular.com/mojo/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Sequences (Listen)
var items = @[10, 20, 30]
items.add(40)
```

**Besonderheiten:**
- Sequences sind die Standard-Listen
- Dynamische Größe
- `@[]` für Sequence-Literale

**Weiterführende Links:**
- [Nim Documentation - Sequences](https://nim-lang.org/docs/manual.html#types-array-and-sequence-types)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Listen (immutable) *)
let items = [10; 20; 30]
let items2 = items @ [40]
```

**Besonderheiten:**
- Listen sind immutable Linked Lists
- `@` für Konkatenation
- Pattern Matching unterstützt

**Weiterführende Links:**
- [OCaml Documentation - Lists](https://v2.ocaml.org/api/List.html)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Arrays werden als Listen verwendet
my @items = (10, 20, 30);
push @items, 40;
```

**Besonderheiten:**
- Arrays werden als Listen verwendet
- Dynamische Größe
- `push` für Hinzufügen

**Weiterführende Links:**
- [Perl Documentation - Arrays](https://perldoc.perl.org/perldata#Arrays)

</TabItem>
<TabItem value="php" label="PHP">

```php
// Arrays werden als Listen verwendet
$items = [10, 20, 30];
$items[] = 40;
```

**Besonderheiten:**
- Arrays werden als Listen verwendet
- Dynamische Größe
- `[]` für Hinzufügen

**Weiterführende Links:**
- [PHP Documentation - Arrays](https://www.php.net/manual/en/language.types.array.php)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Listen (immutable)
let items = [10, 20, 30]
let items2 = items <> [40]
```

**Besonderheiten:**
- Listen sind immutable
- `<>` für Konkatenation
- Funktionale Programmierung

**Weiterführende Links:**
- [PureScript Documentation - Lists](https://pursuit.purescript.org/packages/purescript-lists)

</TabItem>
<TabItem value="python" label="Python">

```python
# Listen
items = [10, 20, 30]
items.append(40)
```

**Besonderheiten:**
- Listen sind die Standard-Collection
- Dynamische Größe
- `append` für Hinzufügen am Ende

**Weiterführende Links:**
- [Python Documentation - Lists](https://docs.python.org/3/tutorial/datastructures.html#more-on-lists)

</TabItem>
<TabItem value="r" label="R">

```r
# Listen (heterogen)
items <- list(10, 20, 30)
items[[4]] <- 40
```

**Besonderheiten:**
- Listen können heterogene Elemente enthalten
- `[[` für Zugriff
- Verschieden von Vektoren

**Weiterführende Links:**
- [R Documentation - Lists](https://cran.r-project.org/doc/manuals/r-release/R-intro.html#Lists)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
;; Listen (immutable)
(define items (list 10 20 30))
(define items2 (append items (list 40)))
```

**Besonderheiten:**
- Listen sind immutable Linked Lists
- `append` für Konkatenation
- `cons` für Konstruktion

**Weiterführende Links:**
- [Racket Documentation - Lists](https://docs.racket-lang.org/reference/pairs.html)

</TabItem>
<TabItem value="roc" label="Roc">

```roc
# Listen (immutable)
items = [10, 20, 30]
items2 = List.append items 40
items3 = List.concat items [40, 50]
```

**Besonderheiten:**
- Listen sind immutable
- `List.append` für einzelne Elemente
- `List.concat` für Konkatenation

**Weiterführende Links:**
- [Roc Documentation - Lists](https://www.roc-lang.org/builtins/List)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Arrays werden als Listen verwendet
items = [10, 20, 30]
items << 40
```

**Besonderheiten:**
- Arrays werden als Listen verwendet
- Dynamische Größe
- Unterstützt `<<` Operator

**Weiterführende Links:**
- [Ruby Documentation - Arrays](https://ruby-doc.org/core-3.1.0/Array.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Vec (Vektoren als Listen)
let mut items = vec![10, 20, 30];
items.push(40);
```

**Besonderheiten:**
- `Vec` ist die Standard-Liste
- Dynamische Größe
- `push` für Hinzufügen

**Weiterführende Links:**
- [Rust Documentation - Vec](https://doc.rust-lang.org/std/vec/struct.Vec.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// List (immutable) oder ListBuffer (mutable)
val items = List(10, 20, 30)
val items2 = items :+ 40

// Mutable
import scala.collection.mutable.ListBuffer
val mutableItems = ListBuffer(10, 20, 30)
mutableItems += 40
```

**Besonderheiten:**
- `List` ist immutable
- `ListBuffer` für mutable Listen
- `:+` für Hinzufügen am Ende (erstellt neue Liste)

**Weiterführende Links:**
- [Scala Documentation - Lists](https://docs.scala-lang.org/overviews/collections-2.13/lists.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; Listen (immutable)
(define items (list 10 20 30))
(define items2 (append items (list 40)))
```

**Besonderheiten:**
- Listen sind immutable Linked Lists
- `append` für Konkatenation
- `cons` für Konstruktion

**Weiterführende Links:**
- [R7RS Scheme - Lists](https://small.r7rs.org/attachment/r7rs.pdf)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Arrays werden als Listen verwendet
var items = [10, 20, 30]
items.append(40)
```

**Besonderheiten:**
- Arrays werden als Listen verwendet
- Dynamische Größe
- Value semantics

**Weiterführende Links:**
- [Swift Documentation - Arrays](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/collectiontypes/#Arrays)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Arrays werden als Listen verwendet
const items: number[] = [10, 20, 30];
items.push(40);
```

**Besonderheiten:**
- Arrays werden als Listen verwendet
- Dynamische Größe
- Type annotations optional

**Weiterführende Links:**
- [TypeScript Handbook - Arrays](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' List(Of T) (seit .NET 2.0)
Dim items As New List(Of Integer) From {10, 20, 30}
items.Add(40)
```

**Besonderheiten:**
- `List(Of T)` ist die Standard-Liste
- Dynamische Größe
- Typsicher mit Generics

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - List](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```wolfram
(* Listen *)
items = {10, 20, 30}
items = Append[items, 40]
```

**Besonderheiten:**
- Listen sind die Standard-Collection
- `Append` erstellt neue Liste
- Symbolische Berechnung

**Weiterführende Links:**
- [Wolfram Language Documentation - Lists](https://reference.wolfram.com/language/guide/Lists.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Benötigt: uses Generics.Collections;
// Listen: TList<T> (seit Delphi 2009)
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

**Besonderheiten:**
- `TList<T>` für typsichere generische Listen (seit Delphi 2009)
- `TStringList` für String-Listen (ältere Alternative)
- Dynamische Größe
- Manuelles Speichermanagement (`Free` erforderlich)

**Weiterführende Links:**
- [Delphi Documentation - TList](https://docwiki.embarcadero.com/Libraries/en/System.Generics.Collections.TList)

</TabItem>
</Tabs>


## 10.1.3. Vectors

Dynamische Arrays mit automatischer Größenanpassung. Bieten effizienten sequenziellen Zugriff und unterstützen Einfügen und Löschen von Elementen.

### Sprachen {#sprachen}

<Tabs availableTabs={['clojure', 'common-lisp', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'elixir', 'fsharp', 'go', 'groovy', 'haskell', 'haxe', 'java', 'javascript', 'julia', 'kotlin', 'lua', 'mojo', 'nim', 'ocaml', 'perl', 'php', 'python', 'r', 'racket', 'roc', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'vbnet', 'wolfram-language']}>
<TabItem value="clojure" label="Clojure">

```clojure
;; Vektoren (persistent)
(def items [10 20 30])
(def items2 (conj items 40))
```

**Besonderheiten:**
- Vektoren sind immutable und persistent
- `conj` fügt am Ende hinzu
- Effizienter sequenzieller Zugriff

**Weiterführende Links:**
- [Clojure Documentation - Vectors](https://clojure.org/reference/data_structures#Vectors)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// std::vector (seit C++98)
std::vector<int> items = {10, 20, 30};
items.push_back(40);
```

**Besonderheiten:**
- `std::vector` ist die Standard-Vector-Implementierung
- Automatische Größenanpassung
- Kontinuierlicher Speicher

**Weiterführende Links:**
- [cppreference.com - std::vector](https://en.cppreference.com/w/cpp/container/vector)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Arrays werden als Vektoren verwendet
items = [10, 20, 30]
items << 40
```

**Besonderheiten:**
- Arrays werden als Vektoren verwendet
- Dynamische Größe
- Unterstützt alle Vector-Operationen

**Weiterführende Links:**
- [Crystal Documentation - Arrays](https://crystal-lang.org/reference/1.11/syntax_and_semantics/literals/array.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// List<T> wird als Vector verwendet
var items = new List<int> { 10, 20, 30 };
items.Add(40);
```

**Besonderheiten:**
- `List<T>` wird als Vector verwendet
- Dynamische Größe
- Automatische Größenanpassung

**Weiterführende Links:**
- [Microsoft C# Documentation - List](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1)

</TabItem>
<TabItem value="d" label="D">

```d
// Arrays sind dynamische Vektoren
int[] items = [10, 20, 30];
items ~= 40;
```

**Besonderheiten:**
- Arrays sind dynamische Vektoren
- `~=` für Konkatenation
- Unterstützt Slicing

**Weiterführende Links:**
- [D Language Specification - Arrays](https://dlang.org/spec/arrays.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Listen werden als Vektoren verwendet
var items = [10, 20, 30];
items.add(40);
```

**Besonderheiten:**
- Listen werden als Vektoren verwendet
- Dynamische Größe
- Growable lists

**Weiterführende Links:**
- [Dart Language Tour - Lists](https://dart.dev/guides/language/language-tour#lists)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Vektoren (Arrays)
items = [10, 20, 30]
items = items ++ [40]
```

**Besonderheiten:**
- Listen werden als Vektoren verwendet
- Immutable by default
- `++` für Konkatenation

**Weiterführende Links:**
- [Elixir Documentation - Lists](https://hexdocs.pm/elixir/List.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// ResizeArray (mutable Vector)
let items = ResizeArray<int>([10; 20; 30])
items.Add(40)
```

**Besonderheiten:**
- `ResizeArray` ist ein mutable Vector
- Dynamische Größe
- Automatische Größenanpassung

**Weiterführende Links:**
- [F# Documentation - ResizeArray](https://fsharp.github.io/fsharp-core-docs/reference/fsharp-collections-resizearray-1.html)

</TabItem>
<TabItem value="go" label="Go">

```go
// Slices werden als Vektoren verwendet
items := []int{10, 20, 30}
items = append(items, 40)
```

**Besonderheiten:**
- Slices werden als Vektoren verwendet
- Dynamische Größe mit `append`
- Automatische Größenanpassung

**Weiterführende Links:**
- [Go Documentation - Slices](https://go.dev/tour/moretypes/7)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Listen werden als Vektoren verwendet
def items = [10, 20, 30]
items << 40
```

**Besonderheiten:**
- Listen werden als Vektoren verwendet
- Dynamische Größe
- Unterstützt `<<` Operator

**Weiterführende Links:**
- [Groovy Documentation - Lists](https://groovy-lang.org/groovy-dev-kit.html#_working_with_collections)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Vektoren (Data.Vector)
import Data.Vector as V
items = V.fromList [10, 20, 30]
items2 = V.snoc items 40
```

**Besonderheiten:**
- `Data.Vector` für mutable Vektoren
- `Data.Vector.Unboxed` für unboxed Vektoren
- Effizienter als Listen für sequenziellen Zugriff

**Weiterführende Links:**
- [Haskell Documentation - Vector](https://hackage.haskell.org/package/vector)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Arrays werden als Vektoren verwendet
var items = [10, 20, 30];
items.push(40);
```

**Besonderheiten:**
- Arrays werden als Vektoren verwendet
- Dynamische Größe
- `push` für Hinzufügen

**Weiterführende Links:**
- [Haxe Documentation - Array](https://haxe.org/manual/std-Array.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Vector (seit Java 1.0, veraltet) oder ArrayList
List<Integer> items = new ArrayList<>();
items.add(10);
items.add(20);
items.add(30);
items.add(40);
```

**Besonderheiten:**
- `Vector` ist veraltet, `ArrayList` wird bevorzugt
- Dynamische Größe
- Automatische Größenanpassung

**Weiterführende Links:**
- [Oracle Java Documentation - Vector](https://docs.oracle.com/javase/8/docs/api/java/util/Vector.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Arrays werden als Vektoren verwendet
const items = [10, 20, 30];
items.push(40);
```

**Besonderheiten:**
- Arrays werden als Vektoren verwendet
- Dynamische Größe
- `push` für Hinzufügen

**Weiterführende Links:**
- [MDN Web Docs - Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Vektoren (Arrays)
items = [10, 20, 30]
push!(items, 40)
```

**Besonderheiten:**
- Arrays sind Vektoren
- Dynamische Größe
- `push!` für Hinzufügen (mutating)

**Weiterführende Links:**
- [Julia Documentation - Arrays](https://docs.julialang.org/en/v1/manual/arrays/)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// MutableList wird als Vector verwendet
val items = mutableListOf(10, 20, 30)
items.add(40)
```

**Besonderheiten:**
- `MutableList` wird als Vector verwendet
- Dynamische Größe
- Automatische Größenanpassung

**Weiterführende Links:**
- [Kotlin Documentation - Collections](https://kotlinlang.org/docs/collections-overview.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Tabellen werden als Vektoren verwendet
items = {10, 20, 30}
table.insert(items, 40)
```

**Besonderheiten:**
- Tabellen werden als Vektoren verwendet
- Dynamische Größe
- `table.insert` für Hinzufügen

**Weiterführende Links:**
- [Lua Documentation - Tables](https://www.lua.org/manual/5.4/manual.html#2.1)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# Vektoren (Python-ähnlich)
var items = List[Int](10, 20, 30)
items.append(40)
```

**Besonderheiten:**
- Python-ähnliche Syntax
- Dynamische Größe
- Performance-orientiert

**Weiterführende Links:**
- [Mojo Documentation](https://docs.modular.com/mojo/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Sequences sind Vektoren
var items = @[10, 20, 30]
items.add(40)
```

**Besonderheiten:**
- Sequences sind Vektoren
- Dynamische Größe
- `@[]` für Sequence-Literale

**Weiterführende Links:**
- [Nim Documentation - Sequences](https://nim-lang.org/docs/manual.html#types-array-and-sequence-types)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Vektoren (Arrays) *)
let items = [|10; 20; 30|]
let items2 = Array.append items [|40|]
```

**Besonderheiten:**
- Arrays werden als Vektoren verwendet
- Mutable
- `Array.append` für Konkatenation

**Weiterführende Links:**
- [OCaml Documentation - Arrays](https://v2.ocaml.org/api/Array.html)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Arrays werden als Vektoren verwendet
my @items = (10, 20, 30);
push @items, 40;
```

**Besonderheiten:**
- Arrays werden als Vektoren verwendet
- Dynamische Größe
- `push` für Hinzufügen

**Weiterführende Links:**
- [Perl Documentation - Arrays](https://perldoc.perl.org/perldata#Arrays)

</TabItem>
<TabItem value="php" label="PHP">

```php
// Arrays werden als Vektoren verwendet
$items = [10, 20, 30];
$items[] = 40;
```

**Besonderheiten:**
- Arrays werden als Vektoren verwendet
- Dynamische Größe
- `[]` für Hinzufügen

**Weiterführende Links:**
- [PHP Documentation - Arrays](https://www.php.net/manual/en/language.types.array.php)

</TabItem>
<TabItem value="python" label="Python">

```python
# Listen werden als Vektoren verwendet
items = [10, 20, 30]
items.append(40)
```

**Besonderheiten:**
- Listen werden als Vektoren verwendet
- Dynamische Größe
- `append` für Hinzufügen

**Weiterführende Links:**
- [Python Documentation - Lists](https://docs.python.org/3/tutorial/datastructures.html#more-on-lists)

</TabItem>
<TabItem value="r" label="R">

```r
# Vektoren
items <- c(10, 20, 30)
items <- c(items, 40)
```

**Besonderheiten:**
- Vektoren sind die Standard-Collection
- `c()` für Konkatenation
- Alle Elemente müssen denselben Typ haben

**Weiterführende Links:**
- [R Documentation - Vectors](https://cran.r-project.org/doc/manuals/r-release/R-intro.html#Vectors-and-assignment)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
;; Vektoren
(define items (vector 10 20 30))
(define items2 (vector-append items (vector 40)))
```

**Besonderheiten:**
- Vektoren sind mutable
- `vector-append` für Konkatenation
- Effizienter als Listen

**Weiterführende Links:**
- [Racket Documentation - Vectors](https://docs.racket-lang.org/reference/vectors.html)

</TabItem>
<TabItem value="roc" label="Roc">

```roc
# Listen werden als Vektoren verwendet
items = [10, 20, 30]
items2 = List.append items 40
```

**Besonderheiten:**
- Listen werden als Vektoren verwendet
- Immutable by default
- `List.append` für Hinzufügen

**Weiterführende Links:**
- [Roc Documentation - Lists](https://www.roc-lang.org/builtins/List)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Arrays werden als Vektoren verwendet
items = [10, 20, 30]
items << 40
```

**Besonderheiten:**
- Arrays werden als Vektoren verwendet
- Dynamische Größe
- Unterstützt `<<` Operator

**Weiterführende Links:**
- [Ruby Documentation - Arrays](https://ruby-doc.org/core-3.1.0/Array.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Vec (Vektoren)
let mut items = vec![10, 20, 30];
items.push(40);
```

**Besonderheiten:**
- `Vec` ist die Standard-Vector-Implementierung
- Dynamische Größe
- Automatische Größenanpassung

**Weiterführende Links:**
- [Rust Documentation - Vec](https://doc.rust-lang.org/std/vec/struct.Vec.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// ArrayBuffer (mutable Vector)
import scala.collection.mutable.ArrayBuffer
val items = ArrayBuffer(10, 20, 30)
items += 40
```

**Besonderheiten:**
- `ArrayBuffer` ist ein mutable Vector
- Dynamische Größe
- Automatische Größenanpassung

**Weiterführende Links:**
- [Scala Documentation - ArrayBuffer](https://www.scala-lang.org/api/current/scala/collection/mutable/ArrayBuffer.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; Vektoren
(define items (vector 10 20 30))

;; Zugriff und Mutation
(vector-ref items 0)       ; 10
(vector-set! items 0 15)   ; Vektor wird mutiert

;; Konkatenation (SRFI-43)
;; (define items2 (vector-append items (vector 40)))
```

**Besonderheiten:**
- Vektoren sind mutable mit fester Größe
- `vector-ref` und `vector-set!` für Zugriff/Mutation
- `vector-append` benötigt SRFI-43

**Weiterführende Links:**
- [R7RS Scheme - Vectors](https://small.r7rs.org/attachment/r7rs.pdf)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Arrays werden als Vektoren verwendet
var items = [10, 20, 30]
items.append(40)
```

**Besonderheiten:**
- Arrays werden als Vektoren verwendet
- Dynamische Größe
- Value semantics

**Weiterführende Links:**
- [Swift Documentation - Arrays](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/collectiontypes/#Arrays)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Arrays werden als Vektoren verwendet
const items: number[] = [10, 20, 30];
items.push(40);
```

**Besonderheiten:**
- Arrays werden als Vektoren verwendet
- Dynamische Größe
- Type annotations optional

**Weiterführende Links:**
- [TypeScript Handbook - Arrays](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' List(Of T) wird als Vector verwendet
Dim items As New List(Of Integer) From {10, 20, 30}
items.Add(40)
```

**Besonderheiten:**
- `List(Of T)` wird als Vector verwendet
- Dynamische Größe
- Automatische Größenanpassung

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - List](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```wolfram
(* Listen werden als Vektoren verwendet *)
items = {10, 20, 30}
items = Append[items, 40]
```

**Besonderheiten:**
- Listen werden als Vektoren verwendet
- `Append` erstellt neue Liste
- Symbolische Berechnung

**Weiterführende Links:**
- [Wolfram Language Documentation - Lists](https://reference.wolfram.com/language/guide/Lists.html)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Vector erstellen
(defvar v1 (vector 1 2 3 4 5))
(defvar v2 (make-array 5 :initial-contents '(10 20 30 40 50)))

;; Zugriff
(aref v1 0)           ; 1
(elt v1 2)            ; 3

;; Adjustable Vector (dynamische Größe)
(defvar v3 (make-array 0 :adjustable t :fill-pointer 0))
(vector-push-extend 10 v3)
(vector-push-extend 20 v3)
(length v3)           ; 2
```

**Besonderheiten:**
- Vektoren sind eindimensionale Arrays
- `vector` für literale Vektoren, `make-array` für flexible Erstellung
- Adjustable Vectors mit `fill-pointer` für dynamische Größe
- Zugriff über `aref` oder `elt`

**Weiterführende Links:**
- [Common Lisp HyperSpec - Vectors](http://www.lispworks.com/documentation/HyperSpec/Body/t_vector.htm)

</TabItem>
</Tabs>


## 10.1.4. Tuples

Unveränderliche, geordnete Sammlungen von Elementen unterschiedlicher Typen mit fester Größe. Ermöglichen das Gruppieren mehrerer Werte in einer einzigen Struktur.

### Sprachen {#sprachen}

<Tabs availableTabs={['carbon', 'clojure', 'crystal', 'csharp', 'd', 'dart', 'elixir', 'elm', 'erlang', 'fsharp', 'gleam', 'groovy', 'haskell', 'haxe', 'idris', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'mercury', 'lua', 'mojo', 'nim', 'ocaml', 'perl', 'php', 'purescript', 'python', 'r', 'racket', 'roc', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'vbnet', 'wolfram-language']} orangeTabs={['common-lisp', 'go']}>
<TabItem value="carbon" label="Carbon">

```cpp
// Tuples (experimentell)
var pair: (i32, String) = (10, "hello");
```

**Besonderheiten:**
- Experimentelle Sprache, Syntax kann sich noch ändern

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Vektoren werden als Tuples verwendet
(def pair [10 "hello"])
```

**Besonderheiten:**
- Vektoren werden als Tuples verwendet
- Immutable by default

**Weiterführende Links:**
- [Clojure Documentation - Vectors](https://clojure.org/reference/data_structures#Vectors)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Listen werden als Tuples verwendet
(defvar pair (list 10 "hello"))
(first pair)    ; 10
(second pair)   ; "hello"

;; Multiple Values als leichtgewichtige Tuples
(defun min-max (list)
  (values (reduce #'min list) (reduce #'max list)))

(multiple-value-bind (lo hi) (min-max '(3 1 4 1 5))
  (format nil "Min: ~a, Max: ~a" lo hi))
```

**Besonderheiten:**
- Listen werden als Tuples verwendet (mutable, nicht immutable)
- `multiple-value-bind` / `values` für leichtgewichtige Multiple Return Values
- Kein eigener Tuple-Datentyp

**Weiterführende Links:**
- [Common Lisp HyperSpec - Lists](http://www.lispworks.com/documentation/HyperSpec/Body/t_list.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Tuples
pair = {10, "hello"}
first, second = pair
```

**Besonderheiten:**
- Tuples sind immutable
- Destructuring unterstützt

**Weiterführende Links:**
- [Crystal Documentation - Tuples](https://crystal-lang.org/reference/1.11/syntax_and_semantics/tuples.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Tuples (seit C# 7.0)
var pair = (10, "hello");
int first = pair.Item1;
string second = pair.Item2;

// Named tuples
var namedPair = (Number: 10, Text: "hello");
```

**Besonderheiten:**
- Tuples wurden in C# 7.0 eingeführt
- Unterstützt named tuples
- Value types

**Weiterführende Links:**
- [Microsoft C# Documentation - Tuples](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/value-tuples)

</TabItem>
<TabItem value="d" label="D">

```d
// Tuples (seit D 2.0)
auto pair = tuple(10, "hello");
int first = pair[0];
string second = pair[1];
```

**Besonderheiten:**
- Tuples wurden in D 2.0 eingeführt
- Index-basierter Zugriff
- Template-basiert

**Weiterführende Links:**
- [D Language Specification - Tuples](https://dlang.org/phobos/std_typecons.html#.Tuple)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Records (seit Dart 3.0)
var pair = (10, 'hello');
int first = pair.$1;
String second = pair.$2;
```

**Besonderheiten:**
- Records wurden in Dart 3.0 eingeführt
- `$1`, `$2` für Zugriff
- Immutable

**Weiterführende Links:**
- [Dart Documentation - Records](https://dart.dev/language/records)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Tuples
pair = {10, "hello"}
{first, second} = pair
```

**Besonderheiten:**
- Tuples sind immutable
- Pattern Matching unterstützt
- Feste Größe

**Weiterführende Links:**
- [Elixir Documentation - Tuples](https://hexdocs.pm/elixir/Tuple.html)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Tuples
pair = (10, "hello")
(first, second) = pair
```

**Besonderheiten:**
- Tuples sind immutable
- Pattern Matching unterstützt
- Maximal 3 Elemente

**Weiterführende Links:**
- [Elm Documentation - Tuples](https://package.elm-lang.org/packages/elm/core/latest/Tuple)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% Tuples
Pair = {10, "hello"},
{First, Second} = Pair
```

**Besonderheiten:**
- Tuples sind immutable
- Pattern Matching unterstützt
- Feste Größe

**Weiterführende Links:**
- [Erlang Documentation - Tuples](https://www.erlang.org/doc/reference_manual/data_types.html#tuple)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Tuples
let pair = (10, "hello")
let first, second = pair
```

**Besonderheiten:**
- Tuples sind immutable
- Pattern Matching unterstützt
- Value types

**Weiterführende Links:**
- [F# Documentation - Tuples](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/tuples)

</TabItem>
<TabItem value="gleam" label="Gleam">

```erlang
// Tuples
let pair = #(10, "hello")
let #(first, second) = pair
```

**Besonderheiten:**
- Tuples sind immutable
- Pattern Matching unterstützt
- `#()` Syntax

**Weiterführende Links:**
- [Gleam Documentation - Tuples](https://gleam.run/documentation/tour/tuples/)

</TabItem>
<TabItem value="go" label="Go">

```go
// Mehrfache Rückgabewerte (Tuple-ähnlich)
func getPair() (int, string) {
    return 10, "hello"
}
first, second := getPair()
```

**Besonderheiten:**
- Mehrfache Rückgabewerte sind Tuple-ähnlich
- Keine expliziten Tuple-Typen
- Häufig für Funktionen verwendet

**Weiterführende Links:**
- [Go Documentation - Multiple Return Values](https://go.dev/tour/basics/6)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Listen werden als Tuples verwendet
def pair = [10, "hello"]
def (first, second) = pair
```

**Besonderheiten:**
- Listen werden als Tuples verwendet
- Destructuring unterstützt

**Weiterführende Links:**
- [Groovy Documentation - Lists](https://groovy-lang.org/groovy-dev-kit.html#_working_with_collections)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Tuples
pair = (10, "hello")
(first, second) = pair
```

**Besonderheiten:**
- Tuples sind immutable
- Pattern Matching unterstützt
- Verschiedene Größen unterstützt

**Weiterführende Links:**
- [Haskell Documentation - Tuples](https://www.haskell.org/tutorial/tuples.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Anon-Strukturen (Tuple-ähnlich)
var pair = {first: 10, second: "hello"};
var first = pair.first;
```

**Besonderheiten:**
- Anon-Strukturen sind Tuple-ähnlich
- Named fields
- Typinferenz

**Weiterführende Links:**
- [Haxe Documentation - Anonymous Structures](https://haxe.org/manual/types-anonymous-structure.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Tuples
pair : (Int, String)
pair = (10, "hello")
(first, second) = pair
```

**Besonderheiten:**
- Tuples sind immutable
- Pattern Matching unterstützt
- Dependent types

**Weiterführende Links:**
- [Idris 2 Documentation - Types and Functions](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Records (seit Java 14, final seit Java 16)
record Pair(int first, String second) {}
Pair pair = new Pair(10, "hello");
int first = pair.first();
```

**Besonderheiten:**
- Records wurden in Java 14 eingeführt
- Immutable by default
- Automatische Methoden

**Weiterführende Links:**
- [Oracle Java Documentation - Records](https://docs.oracle.com/javase/specs/jls/se16/html/jls-8.html#jls-8.10)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Arrays werden als Tuples verwendet
const pair = [10, "hello"];
const [first, second] = pair;
```

**Besonderheiten:**
- Arrays werden als Tuples verwendet
- Destructuring unterstützt
- Nicht typsicher

**Weiterführende Links:**
- [MDN Web Docs - Array Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Tuples
pair = (10, "hello")
first, second = pair
```

**Besonderheiten:**
- Tuples sind immutable
- Pattern Matching unterstützt
- Verschiedene Größen unterstützt

**Weiterführende Links:**
- [Julia Documentation - Tuples](https://docs.julialang.org/en/v1/manual/functions/#Tuples)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
// Tuples
val pair = (10, "hello")
val triple = (10, "hello", True)

// Zugriff über Destructuring
val (x, y) = pair
// x = 10, y = "hello"

// Tuple als Rückgabetyp
fun divmod(a : int, b : int) : (int, int)
  (a / b, a % b)
```

**Besonderheiten:**
- Native Tuple-Syntax mit `(a, b, ...)`
- Destructuring für Zugriff auf Tuple-Elemente
- Tuples sind unveränderlich
- Häufig als Rückgabetyp für mehrere Werte verwendet

**Weiterführende Links:**
- [Koka Language Guide](https://koka-lang.github.io/koka/doc/book.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Data classes (Tuple-ähnlich)
data class Pair(val first: Int, val second: String)
val pair = Pair(10, "hello")
val first = pair.first
```

**Besonderheiten:**
- Data classes sind Tuple-ähnlich
- Destructuring unterstützt
- Automatische Methoden

**Weiterführende Links:**
- [Kotlin Documentation - Data Classes](https://kotlinlang.org/docs/data-classes.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Paar (Produkttyp)
def pair : Nat × String := (10, "hello")
def first := pair.1   -- 10
def second := pair.2  -- "hello"

-- Tripel
def triple : Nat × String × Bool := (10, "hello", true)

-- Pattern Matching auf Tuples
def swap (p : Nat × String) : String × Nat :=
  let (a, b) := p
  (b, a)
```

**Besonderheiten:**
- `α × β` als Produkttyp (Paar)
- `(a, b)` Syntax für Erstellung
- `.1`, `.2` für Zugriff auf Komponenten
- Destructuring über `let (a, b) := ...`

**Weiterführende Links:**
- [Lean 4 Documentation - Structures](https://lean-lang.org/lean4/doc/struct.html)
- [Functional Programming in Lean](https://lean-lang.org/functional_programming_in_lean/)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Tuples mit geschweiften Klammern
Pair = {10, "hello"},
Triple = {10, "hello", 3.14},

% Pattern Matching für Zugriff
{First, Second} = Pair,
% First = 10, Second = "hello"

{A, B, C} = Triple
% A = 10, B = "hello", C = 3.14
```

**Besonderheiten:**
- `{A, B, ...}` Syntax für Tuples (geschweifte Klammern)
- Pattern Matching ist die primäre Zugriffsmethode
- Tuples sind immutable
- Heterogene Elemente möglich (verschiedene Typen)
- Kein Index-basierter Zugriff, nur Destructuring

**Weiterführende Links:**
- [Mercury Language Reference - Terms](https://www.mercurylang.org/information/doc-release/mercury_ref/Terms.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Tabellen werden als Tuples verwendet
pair = {10, "hello"}
first, second = pair[1], pair[2]
```

**Besonderheiten:**
- Tabellen werden als Tuples verwendet
- Nicht typsicher
- Index-basierter Zugriff

**Weiterführende Links:**
- [Lua Documentation - Tables](https://www.lua.org/manual/5.4/manual.html#2.1)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# Tuples (Python-ähnlich)
pair = (10, "hello")
first, second = pair
```

**Besonderheiten:**
- Python-ähnliche Syntax
- Immutable
- Destructuring unterstützt

**Weiterführende Links:**
- [Mojo Documentation](https://docs.modular.com/mojo/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Tuples
pair = (10, "hello")
let (first, second) = pair
```

**Besonderheiten:**
- Tuples sind immutable
- Pattern Matching unterstützt
- Verschiedene Größen unterstützt

**Weiterführende Links:**
- [Nim Documentation - Tuples](https://nim-lang.org/docs/manual.html#types-tuple-and-object-types)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Tuples *)
let pair = (10, "hello")
let first, second = pair
```

**Besonderheiten:**
- Tuples sind immutable
- Pattern Matching unterstützt
- Value types

**Weiterführende Links:**
- [OCaml Documentation - Tuples](https://v2.ocaml.org/manual/coreexamples.html#s:tut-tuples)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Arrays werden als Tuples verwendet
my @pair = (10, "hello");
my ($first, $second) = @pair;
```

**Besonderheiten:**
- Arrays werden als Tuples verwendet
- Destructuring unterstützt
- Context-sensitive

**Weiterführende Links:**
- [Perl Documentation - Arrays](https://perldoc.perl.org/perldata#Arrays)

</TabItem>
<TabItem value="php" label="PHP">

```php
// Arrays werden als Tuples verwendet
$pair = [10, "hello"];
[$first, $second] = $pair;
```

**Besonderheiten:**
- Arrays werden als Tuples verwendet
- Destructuring unterstützt (seit PHP 7.1)
- Nicht typsicher

**Weiterführende Links:**
- [PHP Documentation - Arrays](https://www.php.net/manual/en/language.types.array.php)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Tuples
pair = Tuple 10 "hello"
first = fst pair
second = snd pair
```

**Besonderheiten:**
- Tuples sind immutable
- `fst` und `snd` für Zugriff
- Nur 2-Element-Tuples

**Weiterführende Links:**
- [PureScript Documentation - Tuples](https://pursuit.purescript.org/packages/purescript-tuples)

</TabItem>
<TabItem value="python" label="Python">

```python
# Tuples
pair = (10, "hello")
first, second = pair
```

**Besonderheiten:**
- Tuples sind immutable
- Destructuring unterstützt
- Verschiedene Größen unterstützt

**Weiterführende Links:**
- [Python Documentation - Tuples](https://docs.python.org/3/tutorial/datastructures.html#tuples-and-sequences)

</TabItem>
<TabItem value="r" label="R">

```r
# Listen werden als Tuples verwendet
pair <- list(10, "hello")
first <- pair[[1]]
second <- pair[[2]]
```

**Besonderheiten:**
- Listen werden als Tuples verwendet
- Heterogen
- `[[` für Zugriff

**Weiterführende Links:**
- [R Documentation - Lists](https://cran.r-project.org/doc/manuals/r-release/R-intro.html#Lists)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
;; Listen werden als Tuples verwendet
(define pair (list 10 "hello"))
(define first (first pair))
(define second (second pair))
```

**Besonderheiten:**
- Listen werden als Tuples verwendet
- Immutable by default
- Pattern Matching unterstützt

**Weiterführende Links:**
- [Racket Documentation - Lists](https://docs.racket-lang.org/reference/pairs.html)

</TabItem>
<TabItem value="roc" label="Roc">

```roc
# Tuples
pair = (10, "hello")
(first, second) = pair
```

**Besonderheiten:**
- Tuples sind immutable
- Pattern Matching unterstützt
- Verschiedene Größen unterstützt

**Weiterführende Links:**
- [Roc Documentation - Tuples](https://www.roc-lang.org/builtins/Tuple)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Arrays werden als Tuples verwendet
pair = [10, "hello"]
first, second = pair
```

**Besonderheiten:**
- Arrays werden als Tuples verwendet
- Destructuring unterstützt
- Nicht typsicher

**Weiterführende Links:**
- [Ruby Documentation - Arrays](https://ruby-doc.org/core-3.1.0/Array.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Tuples
let pair = (10, "hello");
let (first, second) = pair;
```

**Besonderheiten:**
- Tuples sind immutable by default
- Pattern Matching unterstützt
- Verschiedene Größen unterstützt

**Weiterführende Links:**
- [Rust Documentation - Tuples](https://doc.rust-lang.org/book/ch03-02-data-types.html#the-tuple-type)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Tuples
val pair = (10, "hello")
val (first, second) = pair
```

**Besonderheiten:**
- Tuples sind immutable
- Pattern Matching unterstützt
- Verschiedene Größen unterstützt (bis 22 Elemente)

**Weiterführende Links:**
- [Scala Documentation - Tuples](https://docs.scala-lang.org/tour/tuples.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; Listen werden als Tuples verwendet
(define pair (list 10 "hello"))
(define first (car pair))
(define second (cadr pair))
```

**Besonderheiten:**
- Listen werden als Tuples verwendet
- Immutable by default
- `car`/`cdr` für Zugriff

**Weiterführende Links:**
- [R7RS Scheme - Lists](https://small.r7rs.org/attachment/r7rs.pdf)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Tuples
let pair = (10, "hello")
let (first, second) = pair
```

**Besonderheiten:**
- Tuples sind immutable
- Pattern Matching unterstützt
- Verschiedene Größen unterstützt

**Weiterführende Links:**
- [Swift Documentation - Tuples](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/the-basics/#Tuples)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Tuples (seit TypeScript 1.3)
const pair: [number, string] = [10, "hello"];
const [first, second] = pair;
```

**Besonderheiten:**
- Tuples wurden in TypeScript 1.3 eingeführt
- Typsicher
- Destructuring unterstützt

**Weiterführende Links:**
- [TypeScript Handbook - Tuples](https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Tuples (seit VB.NET 15.0 / .NET Framework 4.7)
Dim pair = (10, "hello")
Dim first = pair.Item1
Dim second = pair.Item2
```

**Besonderheiten:**
- Tuples wurden in VB.NET 15.0 eingeführt
- Value types
- `Item1`, `Item2` für Zugriff

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Tuples](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/data-types/tuples)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```wolfram
(* Listen werden als Tuples verwendet *)
pair = {10, "hello"}
first = pair[[1]]
second = pair[[2]]
```

**Besonderheiten:**
- Listen werden als Tuples verwendet
- Immutable by default
- Index beginnt bei 1

**Weiterführende Links:**
- [Wolfram Language Documentation - Lists](https://reference.wolfram.com/language/guide/Lists.html)

</TabItem>
</Tabs>


## 10.1.5. Maps / Dictionaries

Assoziative Sammlungen, die Schlüssel-Wert-Paare speichern. Ermöglichen effizienten Zugriff auf Werte über ihre Schlüssel.

### Sprachen {#sprachen}

<Tabs availableTabs={['carbon', 'clojure', 'common-lisp', 'crystal', 'csharp', 'd', 'dart', 'elixir', 'elm', 'erlang', 'fsharp', 'gleam', 'go', 'groovy', 'haskell', 'haxe', 'idris', 'java', 'javascript', 'julia', 'kotlin', 'lean4', 'mercury', 'lua', 'matlab', 'mojo', 'nim', 'objective-c', 'object-pascal', 'ocaml', 'perl', 'php', 'purescript', 'python', 'r', 'racket', 'roc', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'v', 'vbnet', 'wolfram-language']} yellowTabs={['koka']}>
<TabItem value="carbon" label="Carbon">

```cpp
// Maps (experimentell)
var map: Map<String, i32> = {};
map["key"] = 10;
```

**Besonderheiten:**
- Experimentelle Sprache, Syntax kann sich noch ändern

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Maps (persistent)
(def map {:key 10})
(def value (get map :key))
```

**Besonderheiten:**
- Maps sind immutable und persistent
- Keywords als Schlüssel üblich
- `get` für Zugriff

**Weiterführende Links:**
- [Clojure Documentation - Maps](https://clojure.org/reference/data_structures#Maps)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Hash-Tabellen (Maps)
(setf map (make-hash-table))
(setf (gethash :key map) 10)
(gethash :key map)
```

**Besonderheiten:**
- Hash-Tabellen sind Maps
- `gethash` für Zugriff
- Mutable

**Weiterführende Links:**
- [Common Lisp HyperSpec - Hash Tables](http://www.lispworks.com/documentation/HyperSpec/Body/t_hash_t.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Hash (Maps)
map = {"key" => 10}
value = map["key"]
```

**Besonderheiten:**
- Hash ist die Map-Implementierung
- `=>` für Schlüssel-Wert-Paare
- Dynamische Größe

**Weiterführende Links:**
- [Crystal Documentation - Hash](https://crystal-lang.org/reference/1.11/syntax_and_semantics/literals/hash.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Dictionary<TKey, TValue>
var map = new Dictionary<string, int> { { "key", 10 } };
int value = map["key"];
```

**Besonderheiten:**
- `Dictionary<TKey, TValue>` ist die Standard-Map
- Typsicher mit Generics
- Dynamische Größe

**Weiterführende Links:**
- [Microsoft C# Documentation - Dictionary](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.dictionary-2)

</TabItem>
<TabItem value="d" label="D">

```d
// Associative Arrays
int[string] map = ["key": 10];
int value = map["key"];
```

**Besonderheiten:**
- Associative Arrays sind Maps
- Template-basiert
- Dynamische Größe

**Weiterführende Links:**
- [D Language Specification - Associative Arrays](https://dlang.org/spec/hash-map.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Map
var map = {"key": 10};
var value = map["key"];
```

**Besonderheiten:**
- Map ist die Standard-Implementierung
- Dynamische Größe
- Literal-Syntax

**Weiterführende Links:**
- [Dart Language Tour - Maps](https://dart.dev/guides/language/language-tour#maps)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Maps
map = %{"key" => 10}
value = map["key"]
```

**Besonderheiten:**
- Maps sind immutable by default
- `%{}` für Maps
- Pattern Matching unterstützt

**Weiterführende Links:**
- [Elixir Documentation - Maps](https://hexdocs.pm/elixir/Map.html)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Dict (Maps)
import Dict
map = Dict.fromList [("key", 10)]
value = Dict.get "key" map
```

**Besonderheiten:**
- `Dict` ist die Map-Implementierung
- Immutable by default
- Funktionale Programmierung

**Weiterführende Links:**
- [Elm Documentation - Dict](https://package.elm-lang.org/packages/elm/core/latest/Dict)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% Maps (seit Erlang R17)
Map = #{key => 10},
Value = maps:get(key, Map)
```

**Besonderheiten:**
- Maps wurden in Erlang R17 eingeführt
- Immutable by default
- Pattern Matching unterstützt

**Weiterführende Links:**
- [Erlang Documentation - Maps](https://www.erlang.org/doc/reference_manual/data_types.html#map)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Map (immutable)
let map = Map.ofList [("key", 10)]
let value = Map.find "key" map
```

**Besonderheiten:**
- `Map` ist immutable
- `Map.ofList` für Erstellung
- Funktionale Programmierung

**Weiterführende Links:**
- [F# Documentation - Map](https://fsharp.github.io/fsharp-core-docs/reference/fsharp-collections-map-2.html)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// Maps (Dict)
// Benötigt: import gleam/dict
let d = dict.from_list([#("key", 10)])
let value = dict.get(d, "key")  // Ok(10)
```

**Besonderheiten:**
- Dicts sind immutable
- `dict.from_list` für Erstellung aus Key-Value-Paaren
- `dict.get` gibt `Result(v, Nil)` zurück

**Weiterführende Links:**
- [Gleam Documentation - Dict](https://hexdocs.pm/gleam_stdlib/gleam/dict.html)

</TabItem>
<TabItem value="go" label="Go">

```go
// map[T]U
map := make(map[string]int)
map["key"] = 10
value := map["key"]
```

**Besonderheiten:**
- `map[T]U` ist die Map-Implementierung
- Dynamische Größe
- Reference types

**Weiterführende Links:**
- [Go Documentation - Maps](https://go.dev/tour/moretypes/19)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Maps
def map = [key: 10]
def value = map["key"]
```

**Besonderheiten:**
- Maps sind die Standard-Collection
- Dynamische Größe
- Literal-Syntax

**Weiterführende Links:**
- [Groovy Documentation - Maps](https://groovy-lang.org/groovy-dev-kit.html#_working_with_collections)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Data.Map (immutable)
import qualified Data.Map as M
map = M.fromList [("key", 10)]
value = M.lookup "key" map
```

**Besonderheiten:**
- `Data.Map` ist immutable
- `M.lookup` gibt `Maybe` zurück
- Funktionale Programmierung

**Weiterführende Links:**
- [Haskell Documentation - Map](https://hackage.haskell.org/package/containers/docs/Data-Map.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Map<K, V>
var map = new Map<String, Int>();
map.set("key", 10);
var value = map.get("key");
```

**Besonderheiten:**
- `Map<K, V>` ist die Map-Implementierung
- Dynamische Größe
- Cross-platform

**Weiterführende Links:**
- [Haxe Documentation - Map](https://haxe.org/manual/std-Map.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Data.SortedMap (immutable)
-- Benötigt: import Data.SortedMap
map : SortedMap String Int
map = fromList [("key", 10)]
value = lookup "key" map
```

**Besonderheiten:**
- `Data.SortedMap` ist immutable
- Sorted by key
- Dependent types

**Weiterführende Links:**
- [Idris 2 Documentation - Types and Functions](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// HashMap (seit Java 1.2)
Map<String, Integer> map = new HashMap<>();
map.put("key", 10);
Integer value = map.get("key");
```

**Besonderheiten:**
- `HashMap` ist die Standard-Map
- Typsicher mit Generics (seit Java 5.0)
- Dynamische Größe

**Weiterführende Links:**
- [Oracle Java Documentation - Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Objects oder Map
const map = new Map();
map.set("key", 10);
const value = map.get("key");
```

**Besonderheiten:**
- `Map` wurde in ES6 eingeführt
- Objects können auch als Maps verwendet werden
- Dynamische Größe

**Weiterführende Links:**
- [MDN Web Docs - Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Dict (Maps)
map = Dict("key" => 10)
value = map["key"]
```

**Besonderheiten:**
- `Dict` ist die Map-Implementierung
- Dynamische Größe
- `=>` für Schlüssel-Wert-Paare

**Weiterführende Links:**
- [Julia Documentation - Dict](https://docs.julialang.org/en/v1/base/collections/#Base.Dict)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
// Benötigt: std/data/linearmap
// Assoziationsliste als Map
val scores = [("Alice", 95), ("Bob", 87)]

// Suche nach Schlüssel
fun lookup(key : string, pairs : list<(string,int)>) : maybe<int>
  pairs.find(fn((k,_)) k == key).map(snd)
```

**Besonderheiten:**
- Kein nativer Map/Dict-Typ in der Kernsprache
- `std/data/linearmap` bietet assoziative Listen
- Listen von Tupeln als einfache Key-Value-Stores
- Effizientere Map-Implementierungen über externe Bibliotheken

**Weiterführende Links:**
- [Koka Standard Library](https://koka-lang.github.io/koka/doc/std_core.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Map oder MutableMap
val map = mapOf("key" to 10)
val value = map["key"]
```

**Besonderheiten:**
- `Map` ist immutable
- `MutableMap` für mutable Maps
- `to` für Schlüssel-Wert-Paare

**Weiterführende Links:**
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

**Besonderheiten:**
- `Std.HashMap` für Hash-basierte Maps
- `Std.RBMap` für geordnete Maps (Rot-Schwarz-Baum)
- `find?` gibt `Option α` zurück
- Alle Maps sind persistent (immutable)

**Weiterführende Links:**
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

**Besonderheiten:**
- `map/2` als balancierter Suchbaum (immutable, geordnet)
- `map.init/1` für leere Map
- `map.set/4` erstellt neue Map mit eingefügtem/aktualisiertem Key
- `map.lookup/3` für deterministischen Zugriff (Exception bei fehlendem Key)
- `map.search/3` für semideterministischen Zugriff (Fail bei fehlendem Key)

**Weiterführende Links:**
- [Mercury Standard Library - map](https://www.mercurylang.org/information/doc-release/mercury_library/map.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Tabellen sind Maps
map = {key = 10}
value = map["key"]
```

**Besonderheiten:**
- Tabellen sind Maps
- Dynamische Größe
- String-Keys üblich

**Weiterführende Links:**
- [Lua Documentation - Tables](https://www.lua.org/manual/5.4/manual.html#2.1)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# Dict (Python-ähnlich)
var map = Dict[String, Int]()
map["key"] = 10
var value = map["key"]
```

**Besonderheiten:**
- Python-ähnliche Syntax
- Dynamische Größe
- Performance-orientiert

**Weiterführende Links:**
- [Mojo Documentation](https://docs.modular.com/mojo/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Table (Maps)
import tables
var map = {"key": 10}.toTable
var value = map["key"]
```

**Besonderheiten:**
- `Table` ist die Map-Implementierung
- Dynamische Größe
- `toTable` für Erstellung

**Weiterführende Links:**
- [Nim Documentation - Tables](https://nim-lang.org/docs/tables.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Map (immutable) *)
module StringMap = Map.Make(String)
let map = StringMap.add "key" 10 StringMap.empty
let value = StringMap.find "key" map
```

**Besonderheiten:**
- `Map` ist immutable
- Functor-basiert
- Sorted by key

**Weiterführende Links:**
- [OCaml Documentation - Map](https://v2.ocaml.org/api/Map.html)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Hashes (Maps)
my %map = ("key" => 10);
my $value = $map{"key"};
```

**Besonderheiten:**
- Hashes sind Maps
- `%` für Hash-Variablen
- Dynamische Größe

**Weiterführende Links:**
- [Perl Documentation - Hashes](https://perldoc.perl.org/perldata#Hashes)

</TabItem>
<TabItem value="php" label="PHP">

```php
// Arrays sind Maps
$map = ["key" => 10];
$value = $map["key"];
```

**Besonderheiten:**
- Arrays sind assoziative Arrays (Maps)
- Dynamische Größe
- `=>` für Schlüssel-Wert-Paare

**Weiterführende Links:**
- [PHP Documentation - Arrays](https://www.php.net/manual/en/language.types.array.php)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Map (immutable)
import Data.Map as M
let map = M.fromFoldable [Tuple "key" 10]
let value = M.lookup "key" map
```

**Besonderheiten:**
- `Map` ist immutable
- `M.lookup` gibt `Maybe` zurück
- Funktionale Programmierung

**Weiterführende Links:**
- [PureScript Documentation - Map](https://pursuit.purescript.org/packages/purescript-maps)

</TabItem>
<TabItem value="python" label="Python">

```python
# Dictionaries (Maps)
map = {"key": 10}
value = map["key"]
```

**Besonderheiten:**
- Dictionaries sind Maps
- Dynamische Größe
- Seit Python 3.7 geordnet

**Weiterführende Links:**
- [Python Documentation - Dictionaries](https://docs.python.org/3/tutorial/datastructures.html#dictionaries)

</TabItem>
<TabItem value="r" label="R">

```r
# Named Lists (Maps)
map <- list(key = 10)
value <- map$key
```

**Besonderheiten:**
- Named Lists sind Maps
- `$` für Zugriff
- Heterogen

**Weiterführende Links:**
- [R Documentation - Lists](https://cran.r-project.org/doc/manuals/r-release/R-intro.html#Lists)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
;; Hash-Tabellen (Maps)
(define ht (make-hash))
(hash-set! ht "key" 10)
(hash-ref ht "key")
```

**Besonderheiten:**
- Hash-Tabellen sind Maps
- `hash-set!` für Setzen
- `hash-ref` für Zugriff

**Weiterführende Links:**
- [Racket Documentation - Hash Tables](https://docs.racket-lang.org/reference/hashtables.html)

</TabItem>
<TabItem value="roc" label="Roc">

```roc
# Dict (Maps)
map = Dict.fromList [("key", 10), ("other", 20)]
value = Dict.get map "key"
```

**Besonderheiten:**
- `Dict` ist ein Builtin-Typ (kein Import nötig)
- `Dict.fromList` mit Liste von Tuples
- `Dict.get` gibt `Result` zurück

**Weiterführende Links:**
- [Roc Documentation - Dict](https://www.roc-lang.org/builtins/Dict)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Hashes (Maps)
map = {"key" => 10}
value = map["key"]
```

**Besonderheiten:**
- Hashes sind Maps
- Dynamische Größe
- `=>` für Schlüssel-Wert-Paare

**Weiterführende Links:**
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

**Besonderheiten:**
- `HashMap` ist die Map-Implementierung
- Dynamische Größe
- Ownership-basiert

**Weiterführende Links:**
- [Rust Documentation - HashMap](https://doc.rust-lang.org/std/collections/struct.HashMap.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Map (immutable) oder mutable.Map
val map = Map("key" -> 10)
val value = map("key")
```

**Besonderheiten:**
- `Map` ist immutable
- `mutable.Map` für mutable Maps
- `->` für Schlüssel-Wert-Paare

**Weiterführende Links:**
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

**Besonderheiten:**
- Association Lists sind die Standard-Map-Implementierung
- Hash-Tabellen über SRFI-69 verfügbar
- `assoc` für Suche in Association Lists

**Weiterführende Links:**
- [SRFI-69 - Hash Tables](https://srfi.schemers.org/srfi-69/)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Dictionary
var map = ["key": 10]
let value = map["key"]
```

**Besonderheiten:**
- Dictionary ist die Map-Implementierung
- Dynamische Größe
- Value semantics

**Weiterführende Links:**
- [Swift Documentation - Dictionaries](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/collectiontypes/#Dictionaries)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Map oder Record
const map = new Map<string, number>();
map.set("key", 10);
const value = map.get("key");
```

**Besonderheiten:**
- `Map` wurde in ES6 eingeführt
- Typsicher mit TypeScript
- Dynamische Größe

**Weiterführende Links:**
- [TypeScript Handbook - Map](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Dictionary(Of TKey, TValue)
Dim map As New Dictionary(Of String, Integer) From {{"key", 10}}
Dim value As Integer = map("key")
```

**Besonderheiten:**
- `Dictionary(Of TKey, TValue)` ist die Standard-Map
- Typsicher mit Generics
- Dynamische Größe

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Dictionary](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.dictionary-2)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```wolfram
(* Associations (Maps) *)
map = <|"key" -> 10|>
value = map["key"]
```

**Besonderheiten:**
- Associations sind Maps
- `|>` für Erstellung
- Symbolische Berechnung

**Weiterführende Links:**
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

**Besonderheiten:**
- `containers.Map` für Key-Value-Paare
- Seit R2022b: `dictionary` als moderne Alternative
- Keys können Strings oder numerische Typen sein

**Weiterführende Links:**
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

**Besonderheiten:**
- `TDictionary<TKey, TValue>` für generische Dictionaries (seit Delphi 2009)
- Hash-basierte Implementierung
- Manuelles Speichermanagement erforderlich

**Weiterführende Links:**
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

**Besonderheiten:**
- `NSDictionary` für immutable, `NSMutableDictionary` für mutable Dictionaries
- Literal-Syntax mit `@{}` (seit Xcode 4.4)
- Subscript-Syntax mit `dict[@"key"]` (seit Xcode 4.4)
- Keys müssen `NSCopying`-Protokoll implementieren

**Weiterführende Links:**
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

**Besonderheiten:**
- Built-in `map[KeyType]ValueType` Syntax
- Map-Literale mit `{ key: value }` Syntax
- Sicherer Zugriff mit `or { default }` Block
- Keys müssen hashbar sein

**Weiterführende Links:**
- [V Documentation - Maps](https://github.com/vlang/v/blob/master/doc/docs.md#maps)

</TabItem>
</Tabs>


## 10.1.6. Sets

Sammlungen eindeutiger Elemente ohne Duplikate. Unterstützen typischerweise Mengenoperationen wie Vereinigung, Schnitt und Differenz.

### Sprachen {#sprachen}

<Tabs availableTabs={['carbon', 'clojure', 'common-lisp', 'crystal', 'csharp', 'd', 'dart', 'elixir', 'elm', 'erlang', 'fsharp', 'gleam', 'go', 'groovy', 'haskell', 'idris', 'java', 'javascript', 'julia', 'kotlin', 'lean4', 'mercury', 'lua', 'mojo', 'nim', 'objective-c', 'ocaml', 'perl', 'php', 'purescript', 'python', 'r', 'racket', 'roc', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'vbnet', 'wolfram-language']} orangeTabs={['haxe']}>
<TabItem value="carbon" label="Carbon">

```cpp
// Sets (experimentell)
var set: Set<i32> = {};
set.insert(10);
```

**Besonderheiten:**
- Experimentelle Sprache, Syntax kann sich noch ändern

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Sets (persistent)
(def set #{10 20 30})
(def has-value (contains? set 10))
```

**Besonderheiten:**
- Sets sind immutable und persistent
- `#{}` für Set-Literale
- `contains?` für Mitgliedschaftsprüfung

**Weiterführende Links:**
- [Clojure Documentation - Sets](https://clojure.org/reference/data_structures#Sets)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Hash-Sets
(setf set (make-hash-set))
(hash-set-insert set 10)
(hash-set-contains-p set 10)
```

**Besonderheiten:**
- Hash-Sets sind Sets
- Mutable
- `hash-set-contains-p` für Mitgliedschaftsprüfung

**Weiterführende Links:**
- [Common Lisp HyperSpec - Hash Tables](http://www.lispworks.com/documentation/HyperSpec/Body/t_hash_t.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Set
set = Set{10, 20, 30}
has_value = set.includes?(10)
```

**Besonderheiten:**
- `Set` ist die Set-Implementierung
- Dynamische Größe
- `includes?` für Mitgliedschaftsprüfung

**Weiterführende Links:**
- [Crystal Documentation - Set](https://crystal-lang.org/api/Set.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// HashSet<T>
var set = new HashSet<int> { 10, 20, 30 };
bool hasValue = set.Contains(10);
```

**Besonderheiten:**
- `HashSet<T>` ist die Standard-Set
- Typsicher mit Generics
- Dynamische Größe

**Weiterführende Links:**
- [Microsoft C# Documentation - HashSet](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.hashset-1)

</TabItem>
<TabItem value="d" label="D">

```d
// Sets (seit D 2.0)
import std.container.rbtree;
auto set = redBlackTree(10, 20, 30);
bool hasValue = set.contains(10);
```

**Besonderheiten:**
- `redBlackTree` wird als Set verwendet
- Sorted
- Template-basiert

**Weiterführende Links:**
- [D Language Specification - Containers](https://dlang.org/phobos/std_container.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Set
var set = {10, 20, 30};
var hasValue = set.contains(10);
```

**Besonderheiten:**
- Set ist die Standard-Implementierung
- Dynamische Größe
- Literal-Syntax

**Weiterführende Links:**
- [Dart Language Tour - Sets](https://dart.dev/guides/language/language-tour#sets)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# MapSet (Sets)
set = MapSet.new([10, 20, 30])
has_value = MapSet.member?(set, 10)
```

**Besonderheiten:**
- `MapSet` ist die Set-Implementierung
- Immutable by default
- `MapSet.member?` für Mitgliedschaftsprüfung

**Weiterführende Links:**
- [Elixir Documentation - MapSet](https://hexdocs.pm/elixir/MapSet.html)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Set (immutable)
import Set
set = Set.fromList [10, 20, 30]
hasValue = Set.member 10 set
```

**Besonderheiten:**
- `Set` ist immutable
- `Set.member` für Mitgliedschaftsprüfung
- Funktionale Programmierung

**Weiterführende Links:**
- [Elm Documentation - Set](https://package.elm-lang.org/packages/elm/core/latest/Set)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% Sets (seit Erlang R14B01)
Set = sets:from_list([10, 20, 30]),
HasValue = sets:is_element(10, Set)
```

**Besonderheiten:**
- Sets wurden in Erlang R14B01 eingeführt
- Immutable by default
- `sets:is_element` für Mitgliedschaftsprüfung

**Weiterführende Links:**
- [Erlang Documentation - Sets](https://www.erlang.org/doc/man/sets.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Set (immutable)
let set = Set.ofList [10; 20; 30]
let hasValue = Set.contains 10 set
```

**Besonderheiten:**
- `Set` ist immutable
- Sorted
- Funktionale Programmierung

**Weiterführende Links:**
- [F# Documentation - Set](https://fsharp.github.io/fsharp-core-docs/reference/fsharp-collections-set-1.html)

</TabItem>
<TabItem value="gleam" label="Gleam">

```erlang
// Sets
import gleam/set
let set = set.from_list([10, 20, 30])
let has_value = set.contains(set, 10)
```

**Besonderheiten:**
- Sets sind immutable
- `set.contains` für Mitgliedschaftsprüfung
- Pattern Matching unterstützt

**Weiterführende Links:**
- [Gleam Documentation - Sets](https://gleam.run/documentation/tour/sets/)

</TabItem>
<TabItem value="go" label="Go">

```go
// map[T]bool (Set-ähnlich)
set := make(map[int]bool)
set[10] = true
hasValue := set[10]
```

**Besonderheiten:**
- Maps werden als Sets verwendet
- `map[T]bool` ist die übliche Implementierung
- Dynamische Größe

**Weiterführende Links:**
- [Go Documentation - Maps](https://go.dev/tour/moretypes/19)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Set
def set = [10, 20, 30] as Set
def hasValue = set.contains(10)
```

**Besonderheiten:**
- Set ist die Standard-Implementierung
- Dynamische Größe
- Literal-Syntax

**Weiterführende Links:**
- [Groovy Documentation - Sets](https://groovy-lang.org/groovy-dev-kit.html#_working_with_collections)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Data.Set (immutable)
import qualified Data.Set as S
set = S.fromList [10, 20, 30]
hasValue = S.member 10 set
```

**Besonderheiten:**
- `Data.Set` ist immutable
- Sorted
- Funktionale Programmierung

**Weiterführende Links:**
- [Haskell Documentation - Set](https://hackage.haskell.org/package/containers/docs/Data-Set.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Sets: Workaround über Map<T, Bool>
var set = new Map<Int, Bool>();
set.set(10, true);
set.set(20, true);
var hasValue = set.exists(10); // true
```

**Besonderheiten:**
- Haxe hat keinen eingebauten Set-Typ
- Workaround über `Map<T, Bool>` oder Third-Party-Libraries
- `haxe.ds.ObjectMap` kann als Basis für Set-Implementierungen dienen

**Weiterführende Links:**
- [Haxe Documentation - Map](https://haxe.org/manual/std-Map.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Data.SortedSet (immutable)
-- Benötigt: import Data.SortedSet
set : SortedSet Int
set = fromList [10, 20, 30]
hasValue = contains 10 set
```

**Besonderheiten:**
- `Data.SortedSet` ist immutable
- Sorted
- Dependent types

**Weiterführende Links:**
- [Idris 2 Documentation - Types and Functions](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// HashSet (seit Java 1.2)
Set<Integer> set = new HashSet<>();
set.add(10);
boolean hasValue = set.contains(10);
```

**Besonderheiten:**
- `HashSet` ist die Standard-Set
- Typsicher mit Generics (seit Java 5.0)
- Dynamische Größe

**Weiterführende Links:**
- [Oracle Java Documentation - Set](https://docs.oracle.com/javase/8/docs/api/java/util/Set.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Set (seit ES6)
const set = new Set([10, 20, 30]);
const hasValue = set.has(10);
```

**Besonderheiten:**
- Sets wurden in ES6 eingeführt
- Dynamische Größe
- `has` für Mitgliedschaftsprüfung

**Weiterführende Links:**
- [MDN Web Docs - Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Set
set = Set([10, 20, 30])
has_value = in(10, set)
```

**Besonderheiten:**
- `Set` ist die Set-Implementierung
- Dynamische Größe
- `in` für Mitgliedschaftsprüfung

**Weiterführende Links:**
- [Julia Documentation - Set](https://docs.julialang.org/en/v1/base/collections/#Base.Set)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Set oder MutableSet
val set = setOf(10, 20, 30)
val hasValue = set.contains(10)
```

**Besonderheiten:**
- `Set` ist immutable
- `MutableSet` für mutable Sets
- Dynamische Größe

**Weiterführende Links:**
- [Kotlin Documentation - Sets](https://kotlinlang.org/docs/collections-overview.html#set)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- HashSet (aus Std)
def fruits : Std.HashSet String :=
  Std.HashSet.ofList ["Apfel", "Banane", "Kirsche"]

-- Mitgliedschaftsprüfung
def hasApfel := fruits.contains "Apfel"
-- true

-- Einfügen (erstellt neues Set)
def fruits2 := fruits.insert "Dattel"

-- RBSet (balancierter Baum, geordnet)
-- Benötigt: import Std.Data.RBMap
```

**Besonderheiten:**
- `Std.HashSet` für Hash-basierte Sets
- `contains` für Mitgliedschaftsprüfung
- Alle Sets sind persistent (immutable)
- `insert`, `erase` erstellen neue Versionen

**Weiterführende Links:**
- [Lean 4 Std - HashSet](https://leanprover-community.github.io/mathlib4_docs/Std/Data/HashSet.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Benötigt: :- import_module set.
set.init(S0),
set.insert(10, S0, S1),
set.insert(20, S1, S2),
set.insert(30, S2, S3),

% Mitgliedschaftsprüfung
( if set.member(20, S3) then
    io.write_string("20 ist enthalten\n")
else
    io.write_string("20 nicht enthalten\n")
),

% Mengenoperationen
set.union(S3, OtherSet, Union),
set.intersect(S3, OtherSet, Intersection),
set.difference(S3, OtherSet, Diff)
```

**Besonderheiten:**
- `set/1` als balancierter Suchbaum (immutable, geordnet)
- `set.init/1` für leere Menge
- `set.insert/3` erstellt neues Set mit eingefügtem Element
- `set.member/2` für Mitgliedschaftsprüfung
- `set.union/3`, `set.intersect/3`, `set.difference/3` für Mengenoperationen
- Duplikate werden automatisch ignoriert

**Weiterführende Links:**
- [Mercury Standard Library - set](https://www.mercurylang.org/information/doc-release/mercury_library/set.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Tabellen werden als Sets verwendet
set = {}
set[10] = true
has_value = set[10] ~= nil
```

**Besonderheiten:**
- Tabellen werden als Sets verwendet
- `map[T]bool`-ähnlich
- Dynamische Größe

**Weiterführende Links:**
- [Lua Documentation - Tables](https://www.lua.org/manual/5.4/manual.html#2.1)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# Set (Python-ähnlich)
var set = Set[Int](10, 20, 30)
var has_value = set.contains(10)
```

**Besonderheiten:**
- Python-ähnliche Syntax
- Dynamische Größe
- Performance-orientiert

**Weiterführende Links:**
- [Mojo Documentation](https://docs.modular.com/mojo/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# HashSet
import sets
var set = toHashSet([10, 20, 30])
var hasValue = set.contains(10)
```

**Besonderheiten:**
- `HashSet` ist die Set-Implementierung
- Dynamische Größe
- `toHashSet` für Erstellung

**Weiterführende Links:**
- [Nim Documentation - Sets](https://nim-lang.org/docs/sets.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Set (immutable) *)
module IntSet = Set.Make(Int)
let set = IntSet.of_list [10; 20; 30]
let has_value = IntSet.mem 10 set
```

**Besonderheiten:**
- `Set` ist immutable
- Functor-basiert
- Sorted

**Weiterführende Links:**
- [OCaml Documentation - Set](https://v2.ocaml.org/api/Set.html)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Hashes werden als Sets verwendet
my %set;
$set{10} = 1;
my $hasValue = exists $set{10};
```

**Besonderheiten:**
- Hashes werden als Sets verwendet
- `exists` für Mitgliedschaftsprüfung
- Dynamische Größe

**Weiterführende Links:**
- [Perl Documentation - Hashes](https://perldoc.perl.org/perldata#Hashes)

</TabItem>
<TabItem value="php" label="PHP">

```php
// Arrays werden als Sets verwendet
$set = [10 => true, 20 => true, 30 => true];
$hasValue = isset($set[10]);
```

**Besonderheiten:**
- Arrays werden als Sets verwendet
- `isset` für Mitgliedschaftsprüfung
- Dynamische Größe

**Weiterführende Links:**
- [PHP Documentation - Arrays](https://www.php.net/manual/en/language.types.array.php)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Set (immutable)
import Data.Set as S
let set = S.fromFoldable [10, 20, 30]
let hasValue = S.member 10 set
```

**Besonderheiten:**
- `Set` ist immutable
- Sorted
- Funktionale Programmierung

**Weiterführende Links:**
- [PureScript Documentation - Set](https://pursuit.purescript.org/packages/purescript-sets)

</TabItem>
<TabItem value="python" label="Python">

```python
# Sets
set = {10, 20, 30}
has_value = 10 in set
```

**Besonderheiten:**
- Sets sind die Standard-Implementierung
- Dynamische Größe
- `in` für Mitgliedschaftsprüfung

**Weiterführende Links:**
- [Python Documentation - Sets](https://docs.python.org/3/tutorial/datastructures.html#sets)

</TabItem>
<TabItem value="r" label="R">

```r
# Vektoren werden als Sets verwendet
set <- c(10, 20, 30)
has_value <- 10 %in% set
```

**Besonderheiten:**
- Vektoren werden als Sets verwendet
- `%in%` für Mitgliedschaftsprüfung
- Nicht garantiert eindeutig

**Weiterführende Links:**
- [R Documentation - Vectors](https://cran.r-project.org/doc/manuals/r-release/R-intro.html#Vectors-and-assignment)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
;; Sets
(define my-set (set 10 20 30))
(set-member? my-set 10)  ; #t
```

**Besonderheiten:**
- Sets sind immutable
- `set-member?` für Mitgliedschaftsprüfung
- Verschiedene Implementierungen verfügbar

**Weiterführende Links:**
- [Racket Documentation - Sets](https://docs.racket-lang.org/reference/sets.html)

</TabItem>
<TabItem value="roc" label="Roc">

```roc
# Set (immutable)
set = Set.fromList [10, 20, 30]
hasValue = Set.contains set 10
```

**Besonderheiten:**
- `Set` ist ein Builtin-Typ (kein Import nötig)
- `Set.contains` für Mitgliedschaftsprüfung
- Immutable

**Weiterführende Links:**
- [Roc Documentation - Set](https://www.roc-lang.org/builtins/Set)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Set
require 'set'
set = Set[10, 20, 30]
has_value = set.include?(10)
```

**Besonderheiten:**
- `Set` ist die Set-Implementierung
- Dynamische Größe
- `include?` für Mitgliedschaftsprüfung

**Weiterführende Links:**
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

**Besonderheiten:**
- `HashSet` ist die Set-Implementierung
- Dynamische Größe
- Ownership-basiert

**Weiterführende Links:**
- [Rust Documentation - HashSet](https://doc.rust-lang.org/std/collections/struct.HashSet.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Set (immutable) oder mutable.Set
val set = Set(10, 20, 30)
val hasValue = set.contains(10)
```

**Besonderheiten:**
- `Set` ist immutable
- `mutable.Set` für mutable Sets
- Dynamische Größe

**Weiterführende Links:**
- [Scala Documentation - Sets](https://docs.scala-lang.org/overviews/collections-2.13/sets.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; Sets (SRFI 113)
(import (srfi 113))
(define set (set 10 20 30))
(set-contains? set 10)
```

**Besonderheiten:**
- Sets sind in SRFI 113 definiert
- Immutable by default
- `set-contains?` für Mitgliedschaftsprüfung

**Weiterführende Links:**
- [SRFI 113 - Sets and Bags](https://srfi.schemers.org/srfi-113/)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Set
var set: Set<Int> = [10, 20, 30]
let hasValue = set.contains(10)
```

**Besonderheiten:**
- Set ist die Set-Implementierung
- Dynamische Größe
- Value semantics

**Weiterführende Links:**
- [Swift Documentation - Sets](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/collectiontypes/#Sets)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Set (seit ES6)
const set = new Set<number>([10, 20, 30]);
const hasValue = set.has(10);
```

**Besonderheiten:**
- Sets wurden in ES6 eingeführt
- Typsicher mit TypeScript
- Dynamische Größe

**Weiterführende Links:**
- [TypeScript Handbook - Set](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' HashSet(Of T)
Dim set As New HashSet(Of Integer) From {10, 20, 30}
Dim hasValue As Boolean = set.Contains(10)
```

**Besonderheiten:**
- `HashSet(Of T)` ist die Standard-Set
- Typsicher mit Generics
- Dynamische Größe

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - HashSet](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.hashset-1)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```wolfram
(* Sets *)
set = {10, 20, 30}
has_value = MemberQ[set, 10]
```

**Besonderheiten:**
- Listen werden als Sets verwendet
- `MemberQ` für Mitgliedschaftsprüfung
- Symbolische Berechnung

**Weiterführende Links:**
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

// Mengenoperationen
NSSet *set1 = [NSSet setWithObjects:@1, @2, @3, nil];
NSSet *set2 = [NSSet setWithObjects:@2, @3, @4, nil];
NSMutableSet *intersection = [set1 mutableCopy];
[intersection intersectSet:set2]; // {2, 3}
```

**Besonderheiten:**
- `NSSet` für immutable, `NSMutableSet` für mutable Sets
- `NSCountedSet` für Multisets (Elemente mit Zähler)
- Unterstützt Mengenoperationen (union, intersect, minus)
- Keine garantierte Reihenfolge (ungeordnet)

**Weiterführende Links:**
- [Apple Documentation - NSSet](https://developer.apple.com/documentation/foundation/nsset)

</TabItem>
</Tabs>


## 10.1.7. Queues

FIFO-Datenstrukturen (First In, First Out), bei denen Elemente am Ende hinzugefügt und am Anfang entfernt werden. Ermöglichen es, Elemente in der Reihenfolge ihrer Hinzufügung zu verarbeiten.

### Sprachen {#sprachen}

<Tabs availableTabs={['cpp', 'csharp', 'dart', 'java', 'julia', 'kotlin', 'mercury', 'nim', 'python', 'rust', 'scala', 'vbnet']} yellowTabs={['mercury']} orangeTabs={['c', 'go', 'javascript', 'swift', 'typescript']}>
<TabItem value="c" label="C">

```c
// Queue mit Array und Indizes
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

**Besonderheiten:**
- Keine native Queue-Implementierung
- Muss manuell mit Arrays implementiert werden
- Circular Queue für effiziente Nutzung

**Weiterführende Links:**
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

**Besonderheiten:**
- `Queue<T>` ist die Standard-Queue (seit .NET 2.0)
- Typsicher mit Generics
- Dynamische Größe

**Weiterführende Links:**
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
queue.pop(); // Entfernt erstes Element
```

**Besonderheiten:**
- `std::queue` ist die Standard-Queue (seit C++98)
- Template-basiert
- Dynamische Größe

**Weiterführende Links:**
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

**Besonderheiten:**
- `Queue` ist die Standard-Queue
- Dynamische Größe
- Unterstützt auch `addLast` und `removeFirst`

**Weiterführende Links:**
- [Dart Documentation - Queue](https://api.dart.dev/stable/dart-collection/Queue-class.html)

</TabItem>
<TabItem value="go" label="Go">

```go
// Slice als Queue
queue := []int{}
queue = append(queue, 10) // Enqueue
queue = append(queue, 20)
first := queue[0]
queue = queue[1:] // Dequeue
```

**Besonderheiten:**
- Keine native Queue-Implementierung
- Slices werden als Queues verwendet
- Dynamische Größe

**Weiterführende Links:**
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

**Besonderheiten:**
- `Queue` ist ein Interface (seit Java 1.5)
- `LinkedList` ist eine häufige Implementierung
- `offer` und `poll` für Thread-sichere Operationen

**Weiterführende Links:**
- [Oracle Java Documentation - Queue](https://docs.oracle.com/javase/8/docs/api/java/util/Queue.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Array als Queue
const queue = [];
queue.push(10); // Enqueue
queue.push(20);
const first = queue.shift(); // Dequeue: 10
```

**Besonderheiten:**
- Keine native Queue-Implementierung
- Arrays werden als Queues verwendet
- `shift()` für Dequeue

**Weiterführende Links:**
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

**Besonderheiten:**
- `Queue` aus `DataStructures.jl` Package
- Dynamische Größe
- `enqueue!` und `dequeue!` für Operationen

**Weiterführende Links:**
- [Julia Documentation - DataStructures](https://juliacollections.github.io/DataStructures.jl/latest/queues/)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// ArrayDeque als Queue
val queue = ArrayDeque<Int>()
queue.addLast(10) // Enqueue
queue.addLast(20)
val first = queue.removeFirst() // Dequeue: 10
```

**Besonderheiten:**
- `ArrayDeque` wird als Queue verwendet
- Dynamische Größe
- `addLast` und `removeFirst` für FIFO-Operationen

**Weiterführende Links:**
- [Kotlin Documentation - Collections](https://kotlinlang.org/docs/collections-overview.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Keine native Queue – funktionale Queue mit zwei Listen
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

**Besonderheiten:**
- Keine native Queue-Datenstruktur in der Standardbibliothek
- Funktionale Queue-Implementierung mit zwei Listen (Front/Back)
- `enqueue` ist O(1), `dequeue` ist amortisiert O(1)
- Umkehrung der Back-Liste bei leerer Front-Liste
- Persistent (immutable)

**Weiterführende Links:**
- [Mercury Standard Library - list](https://www.mercurylang.org/information/doc-release/mercury_library/list.html)
- [Purely Functional Data Structures - Okasaki](https://www.cs.cmu.edu/~rwh/theses/okasaki.pdf)

</TabItem>
<TabItem value="python" label="Python">

```python
# collections.deque als Queue
from collections import deque
queue = deque()
queue.append(10) # Enqueue
queue.append(20)
first = queue.popleft() # Dequeue: 10
```

**Besonderheiten:**
- `collections.deque` wird als Queue verwendet
- Dynamische Größe
- `append` und `popleft` für FIFO-Operationen

**Weiterführende Links:**
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

**Besonderheiten:**
- `VecDeque` ist die Standard-Queue
- Dynamische Größe
- Ownership-basiert

**Weiterführende Links:**
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

**Besonderheiten:**
- `mutable.Queue` ist die Standard-Queue
- Dynamische Größe
- `enqueue` und `dequeue` für Operationen

**Weiterführende Links:**
- [Scala Documentation - Queue](https://www.scala-lang.org/api/current/scala/collection/mutable/Queue.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Array als Queue
var queue: [Int] = []
queue.append(10) // Enqueue
queue.append(20)
let first = queue.removeFirst() // Dequeue: 10
```

**Besonderheiten:**
- Keine native Queue-Implementierung
- Arrays werden als Queues verwendet
- `removeFirst()` für Dequeue

**Weiterführende Links:**
- [Swift Documentation - Arrays](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/collectiontypes/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Array als Queue
const queue: number[] = [];
queue.push(10); // Enqueue
queue.push(20);
const first = queue.shift(); // Dequeue: 10
```

**Besonderheiten:**
- Keine native Queue-Implementierung
- Arrays werden als Queues verwendet
- `shift()` für Dequeue

**Weiterführende Links:**
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

**Besonderheiten:**
- `Queue(Of T)` ist die Standard-Queue (seit .NET 2.0)
- Typsicher mit Generics
- Dynamische Größe

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Queue](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.queue-1)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Benötigt: import deques
var q = initDeque[int]()
q.addLast(1)
q.addLast(2)
q.addLast(3)

echo q.popFirst()  # 1
echo q.peekFirst()  # 2
echo q.len  # 2
```

**Besonderheiten:**
- `Deque[T]` aus dem `deques`-Modul
- Double-ended Queue (sowohl als Queue als auch als Stack nutzbar)
- `addFirst`, `addLast`, `popFirst`, `popLast` Operationen

**Weiterführende Links:**
- [Nim Documentation - Deques](https://nim-lang.org/docs/deques.html)

</TabItem>
</Tabs>


## 10.1.8. Stacks

LIFO-Datenstrukturen (Last In, First Out), bei denen Elemente oben hinzugefügt und von oben entfernt werden. Ermöglichen es, Elemente in umgekehrter Reihenfolge ihrer Hinzufügung zu verarbeiten.

### Sprachen {#sprachen}

<Tabs availableTabs={['csharp', 'cpp', 'java', 'kotlin', 'mercury', 'rust', 'scala', 'vbnet']} yellowTabs={['mercury']} orangeTabs={['c', 'dart', 'go', 'javascript', 'julia', 'python', 'swift', 'typescript']}>
<TabItem value="c" label="C">

```c
// Stack mit Array und Index
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

**Besonderheiten:**
- Keine native Stack-Implementierung
- Muss manuell mit Arrays implementiert werden
- `top` zeigt auf das oberste Element

**Weiterführende Links:**
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

**Besonderheiten:**
- `Stack<T>` ist die Standard-Stack (seit .NET 2.0)
- Typsicher mit Generics
- Dynamische Größe

**Weiterführende Links:**
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
stack.pop(); // Entfernt oberstes Element
```

**Besonderheiten:**
- `std::stack` ist die Standard-Stack (seit C++98)
- Template-basiert
- Dynamische Größe

**Weiterführende Links:**
- [cppreference.com - std::stack](https://en.cppreference.com/w/cpp/container/stack)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// List als Stack
var stack = <int>[];
stack.add(10); // Push
stack.add(20);
int last = stack.removeLast(); // Pop: 20
```

**Besonderheiten:**
- Keine native Stack-Implementierung
- Listen werden als Stacks verwendet
- `add` und `removeLast` für LIFO-Operationen

**Weiterführende Links:**
- [Dart Documentation - Lists](https://dart.dev/guides/language/language-tour#lists)

</TabItem>
<TabItem value="go" label="Go">

```go
// Slice als Stack
stack := []int{}
stack = append(stack, 10) // Push
stack = append(stack, 20)
last := stack[len(stack)-1]
stack = stack[:len(stack)-1] // Pop
```

**Besonderheiten:**
- Keine native Stack-Implementierung
- Slices werden als Stacks verwendet
- Dynamische Größe

**Weiterführende Links:**
- [Go Documentation - Slices](https://go.dev/tour/moretypes/7)

</TabItem>
<TabItem value="java" label="Java">

```java
// Stack (seit Java 1.0)
Stack<Integer> stack = new Stack<>();
stack.push(10);
stack.push(20);
int last = stack.pop(); // 20
```

**Besonderheiten:**
- `Stack` ist die Standard-Stack (seit Java 1.0)
- Thread-sicher
- Dynamische Größe

**Weiterführende Links:**
- [Oracle Java Documentation - Stack](https://docs.oracle.com/javase/8/docs/api/java/util/Stack.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Array als Stack
const stack = [];
stack.push(10); // Push
stack.push(20);
const last = stack.pop(); // Pop: 20
```

**Besonderheiten:**
- Keine native Stack-Implementierung
- Arrays werden als Stacks verwendet
- `push` und `pop` für LIFO-Operationen

**Weiterführende Links:**
- [MDN Web Docs - Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Array als Stack
stack = Int[]
push!(stack, 10) # Push
push!(stack, 20)
last = pop!(stack) # Pop: 20
```

**Besonderheiten:**
- Keine native Stack-Implementierung
- Arrays werden als Stacks verwendet
- `push!` und `pop!` für LIFO-Operationen

**Weiterführende Links:**
- [Julia Documentation - Arrays](https://docs.julialang.org/en/v1/manual/arrays/)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// ArrayDeque als Stack
val stack = ArrayDeque<Int>()
stack.addLast(10) // Push
stack.addLast(20)
val last = stack.removeLast() // Pop: 20
```

**Besonderheiten:**
- `ArrayDeque` wird als Stack verwendet
- Dynamische Größe
- `addLast` und `removeLast` für LIFO-Operationen

**Weiterführende Links:**
- [Kotlin Documentation - Collections](https://kotlinlang.org/docs/collections-overview.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Listen als Stack (natürliches LIFO-Verhalten)
Stack0 = [],
Stack1 = [10 | Stack0],   % Push 10
Stack2 = [20 | Stack1],   % Push 20
Stack3 = [30 | Stack2],   % Push 30
% Stack3 = [30, 20, 10]

% Pop
Stack3 = [Top | Rest],
% Top = 30, Rest = [20, 10]
```

**Besonderheiten:**
- Keine native Stack-Datenstruktur nötig – Listen sind natürliche Stacks
- `[Item | Stack]` für Push (O(1) Prepend)
- Pattern Matching `[Top | Rest]` für Pop (O(1))
- Persistent (immutable) – alte Stack-Versionen bleiben erhalten

**Weiterführende Links:**
- [Mercury Standard Library - list](https://www.mercurylang.org/information/doc-release/mercury_library/list.html)

</TabItem>
<TabItem value="python" label="Python">

```python
# List als Stack
stack = []
stack.append(10) # Push
stack.append(20)
last = stack.pop() # Pop: 20
```

**Besonderheiten:**
- Keine native Stack-Implementierung
- Listen werden als Stacks verwendet
- `append` und `pop` für LIFO-Operationen

**Weiterführende Links:**
- [Python Documentation - Lists](https://docs.python.org/3/tutorial/datastructures.html#more-on-lists)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Vec als Stack
let mut stack = Vec::new();
stack.push(10); // Push
stack.push(20);
let last = stack.pop(); // Pop: Some(20)
```

**Besonderheiten:**
- `Vec` wird als Stack verwendet
- Dynamische Größe
- Ownership-basiert

**Weiterführende Links:**
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

**Besonderheiten:**
- `mutable.Stack` ist die Standard-Stack
- Dynamische Größe
- `push` und `pop` für LIFO-Operationen

**Weiterführende Links:**
- [Scala Documentation - Stack](https://www.scala-lang.org/api/current/scala/collection/mutable/Stack.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Array als Stack
var stack: [Int] = []
stack.append(10) // Push
stack.append(20)
let last = stack.removeLast() // Pop: 20
```

**Besonderheiten:**
- Keine native Stack-Implementierung
- Arrays werden als Stacks verwendet
- `removeLast()` für Pop

**Weiterführende Links:**
- [Swift Documentation - Arrays](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/collectiontypes/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Array als Stack
const stack: number[] = [];
stack.push(10); // Push
stack.push(20);
const last = stack.pop(); // Pop: 20
```

**Besonderheiten:**
- Keine native Stack-Implementierung
- Arrays werden als Stacks verwendet
- `push` und `pop` für LIFO-Operationen

**Weiterführende Links:**
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

**Besonderheiten:**
- `Stack(Of T)` ist die Standard-Stack (seit .NET 2.0)
- Typsicher mit Generics
- Dynamische Größe

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Stack](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.stack-1)

</TabItem>
</Tabs>


## 10.1.9. Ranges / Sequences

### Ranges / Sequences


Kontinuierliche Bereiche von Werten, die typischerweise für Iterationen verwendet werden. Ermöglichen es, Sequenzen von Zahlen oder anderen Werten kompakt zu definieren und zu durchlaufen.


<Tabs availableTabs={['cpp', 'csharp', 'dart', 'elm', 'groovy', 'haskell', 'java', 'julia', 'kotlin', 'nim', 'perl', 'python', 'r', 'ruby', 'rust', 'scala', 'swift', 'wolfram-language']} yellowTabs={['koka']} orangeTabs={['go', 'javascript', 'typescript']}>
<TabItem value="csharp" label="C#">

```csharp
// Range (seit C# 8.0)
var range = 1..10;
var numbers = Enumerable.Range(1, 10);
foreach (var num in numbers) {
    Console.WriteLine(num);
}
```

**Besonderheiten:**
- `Range` wurde in C# 8.0 eingeführt
- `Enumerable.Range` für Integer-Sequenzen
- Unterstützt auch `^` für End-Indizes

**Weiterführende Links:**
- [Microsoft C# Documentation - Ranges](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/member-access-operators#range-operator-)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// std::ranges (seit C++20)
#include <ranges>
auto range = std::views::iota(1, 11);
for (auto num : range) {
    std::cout << num << std::endl;
}
```

**Besonderheiten:**
- `std::ranges` wurde in C++20 eingeführt
- `std::views::iota` für Integer-Sequenzen
- Lazy Evaluation

**Weiterführende Links:**
- [cppreference.com - Ranges](https://en.cppreference.com/w/cpp/ranges)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Range mit Iterable
var range = Iterable.generate(10, (i) => i + 1);
for (var num in range) {
    print(num);
}
```

**Besonderheiten:**
- `Iterable.generate` für Sequenzen
- Lazy Evaluation
- Dynamische Generierung

**Weiterführende Links:**
- [Dart Documentation - Iterable](https://api.dart.dev/stable/dart-core/Iterable-class.html)

</TabItem>
<TabItem value="go" label="Go">

```go
// Range mit for-Schleife
for i := 1; i <= 10; i++ {
    fmt.Println(i)
}
```

**Besonderheiten:**
- Keine native Range-Implementierung
- `for`-Schleife mit drei Komponenten
- Direkte Iteration

**Weiterführende Links:**
- [Go Documentation - For Loops](https://go.dev/tour/flowcontrol/1)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- [start..end]
range = [1..10]
mapM_ print range
```

**Besonderheiten:**
- `[start..end]` für Ranges
- Lazy Evaluation
- Unterstützt auch Schrittweite: `[1,3..10]`

**Weiterführende Links:**
- [Haskell Documentation - Lists](https://www.haskell.org/tutorial/lists.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// IntStream.range (seit Java 8)
IntStream.range(1, 11).forEach(System.out::println);
```

**Besonderheiten:**
- `IntStream.range` für Integer-Sequenzen (seit Java 8)
- Lazy Evaluation
- Unterstützt auch `rangeClosed` für inklusive End

**Weiterführende Links:**
- [Oracle Java Documentation - IntStream](https://docs.oracle.com/javase/8/docs/api/java/util/stream/IntStream.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Array.from mit Range
const range = Array.from({length: 10}, (_, i) => i + 1);
range.forEach(num => console.log(num));
```

**Besonderheiten:**
- Keine native Range-Implementierung
- `Array.from` für Sequenzen
- Unterstützt auch Generatoren

**Weiterführende Links:**
- [MDN Web Docs - Array.from](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Range mit :
range = 1:10
for num in range
    println(num)
end
```

**Besonderheiten:**
- `:` für Ranges
- Lazy Evaluation
- Unterstützt auch Schrittweite: `1:2:10`

**Weiterführende Links:**
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

**Besonderheiten:**
- Kein dedizierter Range-Typ
- `list(start, end)` erzeugt eine Liste mit Bereichswerten
- `for(start, end)` iteriert über einen numerischen Bereich
- Ranges sind eager (sofort als Liste materialisiert)

**Weiterführende Links:**
- [Koka Standard Library](https://koka-lang.github.io/koka/doc/std_core.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Range mit ..
val range = 1..10
for (num in range) {
    println(num)
}
```

**Besonderheiten:**
- `..` für Ranges (seit Kotlin 1.0)
- Unterstützt auch `downTo` und `step`
- Lazy Evaluation

**Weiterführende Links:**
- [Kotlin Documentation - Ranges](https://kotlinlang.org/docs/ranges.html)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Range mit ..
my @range = (1..10);
foreach my $num (@range) {
    print "$num\n";
}
```

**Besonderheiten:**
- `..` für Ranges
- Erstellt Array
- Unterstützt auch Zeichen: `'a'..'z'`

**Weiterführende Links:**
- [Perl Documentation - Range Operator](https://perldoc.perl.org/perlop#Range-Operators)

</TabItem>
<TabItem value="python" label="Python">

```python
# range()
range_obj = range(1, 11)
for num in range_obj:
    print(num)
```

**Besonderheiten:**
- `range()` für Ranges (seit Python 2.3)
- Lazy Evaluation
- Unterstützt Schrittweite: `range(1, 11, 2)`

**Weiterführende Links:**
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

**Besonderheiten:**
- `seq()` für Sequenzen
- Unterstützt Schrittweite: `seq(1, 10, by=2)`
- Erstellt Vektor

**Weiterführende Links:**
- [R Documentation - seq](https://www.rdocumentation.org/packages/base/versions/3.6.2/topics/seq)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Range mit ..
range = 1..10
range.each do |num|
    puts num
end
```

**Besonderheiten:**
- `..` für inklusive Ranges
- `...` für exklusive Ranges
- Unterstützt auch Zeichen: `'a'..'z'`

**Weiterführende Links:**
- [Ruby Documentation - Range](https://ruby-doc.org/core-3.1.0/Range.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Range mit ..
let range = 1..11;
for num in range {
    println!("{}", num);
}
```

**Besonderheiten:**
- `..` für Ranges
- Unterstützt auch `..=` für inklusive End
- Iterator-basiert

**Weiterführende Links:**
- [Rust Book - Ranges](https://doc.rust-lang.org/book/ch03-05-control-flow.html#loops)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Range
val range = 1 to 10
range.foreach(println)
```

**Besonderheiten:**
- `to` für inklusive Ranges
- `until` für exklusive Ranges
- Unterstützt Schrittweite: `1 to 10 by 2`

**Weiterführende Links:**
- [Scala Documentation - Range](https://www.scala-lang.org/api/current/scala/collection/immutable/Range.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Range mit ...
let range = 1...10
for num in range {
    print(num)
}
```

**Besonderheiten:**
- `...` für geschlossene Ranges
- `..<` für halboffene Ranges
- Unterstützt auch `stride` für Schrittweite

**Weiterführende Links:**
- [Swift Documentation - Ranges](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/basicoperators/#Range-Operators)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Array.from mit Range
const range = Array.from({length: 10}, (_, i) => i + 1);
range.forEach(num => console.log(num));
```

**Besonderheiten:**
- Keine native Range-Implementierung
- `Array.from` für Sequenzen
- Unterstützt auch Generatoren

**Weiterführende Links:**
- [TypeScript Handbook - Arrays](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Ranges mit List.range
numbers = List.range 1 10      -- [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
countdown = List.range 10 1    -- [] (absteigend nicht unterstützt)

-- Verwendung in Kombination mit map
squares = List.map (\n -> n * n) (List.range 1 5)
-- [1, 4, 9, 16, 25]
```

**Besonderheiten:**
- `List.range start end` erzeugt eine Liste von Ganzzahlen
- Nur aufsteigende Integer-Ranges (absteigend ergibt leere Liste)
- Erzeugt eine vollständige Liste im Speicher (eager evaluation)

**Weiterführende Links:**
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

**Besonderheiten:**
- `..` für inklusive, `..<` für exklusive Ranges
- Ranges sind Objekte vom Typ `groovy.lang.Range`
- Unterstützt Zahlen, Zeichen und andere `Comparable`-Typen
- Lazy Evaluation: Elemente werden bei Bedarf generiert

**Weiterführende Links:**
- [Groovy Documentation - Ranges](https://groovy-lang.org/groovy-dev-kit.html#_working_with_ranges)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Ranges und Sequences
# Range (wird in for-Schleifen verwendet)
for i in 0..5:
  echo i

# Sequence (dynamisches Array)
var s: seq[int] = @[1, 2, 3, 4, 5]
s.add(6)
echo s  # @[1, 2, 3, 4, 5, 6]

# Slice einer Sequence
let sub = s[1..3]  # @[2, 3, 4]
```

**Besonderheiten:**
- Ranges mit `..` und `..<` Operatoren
- `seq[T]` als dynamische Sequenz (ähnlich wie Vector)
- Ranges erzeugen keine Collections im Speicher, nur für Iteration

**Weiterführende Links:**
- [Nim Documentation - Sequences](https://nim-lang.org/docs/system.html#seq)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Ranges *)
r1 = Range[5]          (* {1, 2, 3, 4, 5} *)
r2 = Range[2, 10]      (* {2, 3, 4, ..., 10} *)
r3 = Range[0, 1, 0.1]  (* {0., 0.1, 0.2, ..., 1.} *)
```

**Besonderheiten:**
- `Range[n]` erzeugt `{1, 2, ..., n}`
- `Range[start, end, step]` mit optionalem Schrittweite
- Erzeugt eine vollständige Liste (nicht lazy)

**Weiterführende Links:**
- [Wolfram Language Documentation - Range](https://reference.wolfram.com/language/ref/Range.html)

</TabItem>
</Tabs>



---

### Ranges (D-style / Phobos ranges)


Ein Konzept aus der D-Programmiersprache, bei dem Ranges abstrakte Iteratoren sind, die Elemente sequenziell durchlaufen können. Ranges sind lazy, komponierbar und ermöglichen es, Algorithmen generisch über verschiedene Datenstrukturen hinweg zu verwenden.


<Tabs availableTabs={['cpp', 'd', 'rust']}>
<TabItem value="cpp" label="C++">

```cpp
// std::ranges (seit C++20, ähnlich zu D-Ranges)
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

**Besonderheiten:**
- `std::ranges` wurde in C++20 eingeführt (ähnlich zu D-Ranges)
- Unterstützt Pipe-Operator für Komposition
- Lazy Evaluation
- View-basiert

**Weiterführende Links:**
- [cppreference.com - Ranges](https://en.cppreference.com/w/cpp/ranges)

</TabItem>
<TabItem value="d" label="D">

```d
// Phobos Ranges (seit D 2.0)
import std.range;
import std.algorithm;

auto range = iota(1, 11)
    .filter!(x => x % 2 == 0)
    .map!(x => x * 2);

foreach (val; range) {
    writeln(val);
}
```

**Besonderheiten:**
- Ranges sind das zentrale Konzept in D (seit D 2.0)
- Unterstützt Pipe-Operator für Komposition
- Lazy Evaluation
- Input, Forward, Bidirectional, Random Access und Output Ranges

**Weiterführende Links:**
- [D Language Specification - Ranges](https://dlang.org/phobos/std_range.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Iterators (ähnlich zu D-Ranges)
let range = (1..11)
    .filter(|x| x % 2 == 0)
    .map(|x| x * 2);

for val in range {
    println!("{}", val);
}
```

**Besonderheiten:**
- Iterators sind ähnlich zu D-Ranges
- Unterstützt Method Chaining für Komposition
- Lazy Evaluation
- Ownership-basiert

**Weiterführende Links:**
- [Rust Book - Iterators](https://doc.rust-lang.org/book/ch13-02-iterators.html)

</TabItem>
</Tabs>


## 10.1.10. Tables (Lua-style)

Die einzige Datenstruktur in Lua, die sowohl als Array als auch als Map verwendet werden kann. Tables sind assoziative Arrays, die sowohl numerische als auch nicht-numerische Indizes unterstützen. Sie sind die zentrale Datenstruktur in Lua und werden für Arrays, Maps, Sets, Objekte und mehr verwendet.

### Sprachen {#sprachen}

<Tabs availableTabs={['javascript', 'lua']} orangeTabs={['python']}>
<TabItem value="javascript" label="JavaScript">

```javascript
// Objects (ähnlich zu Lua Tables)
const table = {};
table[1] = "first";      // Numerischer Index
table["key"] = "value";  // String-Index
table.prop = "property"; // Property-Zugriff

console.log(table[1]);      // "first"
console.log(table["key"]);  // "value"
console.log(table.prop);    // "property"
```

**Besonderheiten:**
- Objects sind ähnlich zu Lua Tables
- Unterstützen sowohl numerische als auch String-Indizes
- Property-Zugriff möglich
- Können sowohl als Arrays als auch als Maps verwendet werden

**Weiterführende Links:**
- [MDN Web Docs - Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Tables (die einzige Datenstruktur)
local table = {}
table[1] = "first"        -- Numerischer Index
table["key"] = "value"    -- String-Index
table.prop = "property"   -- Property-Zugriff

print(table[1])           -- "first"
print(table["key"])       -- "value"
print(table.prop)          -- "property"

-- Als Array
local arr = {10, 20, 30}
print(arr[1])             -- 10

-- Als Map
local map = {name = "Alice", age = 25}
print(map.name)           -- "Alice"
```

**Besonderheiten:**
- Tables sind die einzige Datenstruktur in Lua
- Unterstützen sowohl numerische als auch nicht-numerische Indizes
- Property-Zugriff möglich
- Können sowohl als Arrays als auch als Maps verwendet werden
- Indizes beginnen bei 1 (nicht 0)

**Weiterführende Links:**
- [Lua Documentation - Tables](https://www.lua.org/manual/5.4/manual.html#2.1)

</TabItem>
<TabItem value="python" label="Python">

```python
# Dictionaries (ähnlich zu Lua Tables)
table = {}
table[1] = "first"        # Numerischer Index
table["key"] = "value"   # String-Index

print(table[1])          # "first"
print(table["key"])      # "value"

# Als Dictionary
map = {"name": "Alice", "age": 25}
print(map["name"])       # "Alice"
```

**Besonderheiten:**
- Dictionaries sind ähnlich zu Lua Tables
- Unterstützen verschiedene Schlüsseltypen
- Können als Maps verwendet werden
- Keine Property-Zugriff-Syntax wie in Lua

**Weiterführende Links:**
- [Python Documentation - Dictionaries](https://docs.python.org/3/tutorial/datastructures.html#dictionaries)

</TabItem>
</Tabs>

## 10.1.11. Collection Literals

Spezielle Syntax zur kompakten Erstellung von Collections direkt im Code. Collection Literals ermöglichen die Inline-Definition von Listen, Arrays, Maps und Sets ohne schrittweises Hinzufügen einzelner Elemente.

### Sprachen

<Tabs availableTabs={['ada', 'c', 'clojure', 'common-lisp', 'crystal', 'csharp', 'cpp', 'd', 'dart', 'eiffel', 'elixir', 'elm', 'erlang', 'fsharp', 'fortran', 'gleam', 'go', 'groovy', 'haskell', 'haxe', 'idris', 'java', 'javascript', 'julia', 'koka', 'lean4', 'mercury', 'lua', 'matlab', 'mojo', 'nim', 'objective-c', 'object-pascal', 'ocaml', 'octave', 'odin', 'perl', 'php', 'purescript', 'python', 'racket', 'roc', 'ruby', 'rust', 'scheme', 'swift', 'typescript', 'vbnet', 'v', 'wolfram-language', 'zig']} yellowTabs={['kotlin', 'r', 'scala']}>
<TabItem value="ada" label="Ada">

```ada
-- Array-Aggregat
Items : array (1 .. 3) of Integer := (10, 20, 30);

-- Named Association
Matrix : array (1 .. 2, 1 .. 2) of Integer := ((1, 2), (3, 4));
```

**Besonderheiten:**
- Array-Aggregate mit Positionsangabe oder Named Association
- Unterstützt `others => Wert` für Standardwerte
- Nur Arrays haben Literal-Syntax, keine Maps oder Sets

**Weiterführende Links:**
- [Ada Documentation - Array Aggregates](https://learn.adacore.com/courses/intro-to-ada/chapters/arrays.html)

</TabItem>
<TabItem value="c" label="C">

```c
// Array-Initializer
int items[] = {10, 20, 30};

// Designated Initializers (seit C99)
int items2[] = {[0] = 10, [2] = 30};

// Struct-Initializer
struct Point { int x; int y; };
struct Point p = {.x = 1, .y = 2};
```

**Besonderheiten:**
- Array-Initializer mit `{}` sind Teil der Sprache
- Designated Initializers seit C99
- Keine Map- oder Set-Literals

**Weiterführende Links:**
- [C Standard - Initialization](https://en.cppreference.com/w/c/language/initialization)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Collection Expressions (seit C# 12)
int[] items = [10, 20, 30];
List<int> list = [10, 20, 30];

// Dictionary-Initializer
var scores = new Dictionary<string, int>
{
    ["Alice"] = 95,
    ["Bob"] = 87
};

// Collection-Initializer (seit C# 3.0)
var set = new HashSet<int> { 10, 20, 30 };
```

**Besonderheiten:**
- Collection Expressions `[...]` seit C# 12 für Arrays, Listen, Spans
- Dictionary-Initializer mit `{ [key] = value }` seit C# 6.0
- Collection-Initializer mit `{ item, ... }` seit C# 3.0
- Spread-Operator `..` in Collection Expressions: `[..list1, ..list2]`

**Weiterführende Links:**
- [Microsoft C# Documentation - Collection Expressions](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/collection-expressions)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Initializer Lists (seit C++11)
std::vector<int> items = {10, 20, 30};
std::array<int, 3> arr = {10, 20, 30};

// Map-Initializer
std::map<std::string, int> scores = {
    {"Alice", 95},
    {"Bob", 87}
};

// Set-Initializer
std::set<int> unique = {10, 20, 30};
```

**Besonderheiten:**
- Initializer Lists `{...}` seit C++11 für alle STL-Container
- Uniform Initialization mit geschweiften Klammern
- `std::initializer_list<T>` als zugrunde liegender Typ

**Weiterführende Links:**
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

;; Liste-Literal (quoted)
(def lst '(10 20 30))
```

**Besonderheiten:**
- Vier eingebaute Collection-Literal-Typen: `[]` (Vector), `{}` (Map), `#{}` (Set), `'()` (Liste)
- Alle Literals erzeugen persistente, immutable Collections
- Kommas sind optional (Whitespace genügt)

**Weiterführende Links:**
- [Clojure Documentation - Data Structures](https://clojure.org/reference/data_structures)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Listen-Literal (quoted)
(defvar items '(10 20 30))

;; Vektor-Literal
(defvar vec #(10 20 30))

;; Association List (Pseudo-Map)
(defvar scores '(("Alice" . 95) ("Bob" . 87)))
```

**Besonderheiten:**
- Listen-Literale mit `'()` (Quote-Syntax)
- Vektor-Literale mit `#()` (Read-Macro)
- Association Lists als Pseudo-Maps
- Kein natives Set- oder Map-Literal

**Weiterführende Links:**
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

**Besonderheiten:**
- Array-Literals `[...]` mit automatischer Typinferenz
- Hash-Literals mit `=>` Syntax
- Set-Literale mit `Set{...}`
- Tuple-Literale mit `{...}` (Werttypen)

**Weiterführende Links:**
- [Crystal Documentation - Literals](https://crystal-lang.org/reference/syntax_and_semantics/literals/)

</TabItem>
<TabItem value="d" label="D">

```d
// Array-Literal
int[] items = [10, 20, 30];

// Assoziatives Array-Literal
int[string] scores = ["Alice": 95, "Bob": 87];
```

**Besonderheiten:**
- Array-Literale mit `[...]`
- Assoziative Arrays mit `[key: value]` Syntax
- Kein natives Set-Literal

**Weiterführende Links:**
- [D Documentation - Arrays](https://dlang.org/spec/arrays.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// List-Literal
var items = [10, 20, 30];

// Map-Literal
var scores = {"Alice": 95, "Bob": 87};

// Set-Literal (seit Dart 2.2)
var unique = {10, 20, 30};
```

**Besonderheiten:**
- List-, Map- und Set-Literale sind Teil der Sprache
- Set-Literale seit Dart 2.2
- Spread-Operator `...` in Collection-Literalen
- Collection-`if` und Collection-`for` in Literalen

**Weiterführende Links:**
- [Dart Documentation - Collections](https://dart.dev/language/collections)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
-- Manifest Array
items: ARRAY [INTEGER]
items := <<10, 20, 30>>
```

**Besonderheiten:**
- Manifest Arrays mit `<<...>>` Syntax
- Nur Array-Literale nativ unterstützt
- Andere Collections erfordern explizite Konstruktion

**Weiterführende Links:**
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

**Besonderheiten:**
- Vier Literal-Typen: `[]` (List), `%{}` (Map), `[key: val]` (Keyword List), `{}` (Tuple)
- Maps mit Atom-Keys: `%{alice: 95, bob: 87}`
- Kein natives Set-Literal (`MapSet.new([1, 2, 3])`)

**Weiterführende Links:**
- [Elixir Documentation - Collections](https://elixir-lang.org/getting-started/basic-types.html)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- List-Literal
items = [10, 20, 30]

-- Tuple-Literal
pair = (10, 20)
```

**Besonderheiten:**
- Listen-Literale mit `[...]`
- Tuple-Literale für 2-3 Elemente
- Kein natives Dict- oder Set-Literal (`Dict.fromList`, `Set.fromList`)

**Weiterführende Links:**
- [Elm Guide - Core Language](https://guide.elm-lang.org/core_language)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% Listen-Literal
Items = [10, 20, 30],

% Map-Literal (seit Erlang 17)
Scores = #{"Alice" => 95, "Bob" => 87},

% Tuple-Literal
Tuple = {10, "text", true}.
```

**Besonderheiten:**
- Listen-Literale mit `[...]`
- Map-Literale mit `#{...}` seit Erlang 17
- Tuple-Literale mit `{...}`
- Kein natives Set-Literal

**Weiterführende Links:**
- [Erlang Documentation - Data Types](https://www.erlang.org/doc/reference_manual/data_types.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Listen-Literal
let items = [10; 20; 30]

// Array-Literal
let arr = [|10; 20; 30|]

// Set-Literal
let unique = set [10; 20; 30]

// Map-Literal
let scores = Map [("Alice", 95); ("Bob", 87)]
```

**Besonderheiten:**
- Listen `[...]` und Arrays `[|...|]` mit Semikolon als Trenner
- Set und Map über Konstruktorfunktionen mit Listen-Literal
- Sequence-Expressions: `[for i in 1..3 -> i * 10]`

**Weiterführende Links:**
- [F# Documentation - Lists](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/lists)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Array-Konstruktor (seit Fortran 2003)
integer :: items(3) = [10, 20, 30]

! Ältere Syntax mit (/ /)
integer :: items2(3) = (/10, 20, 30/)
```

**Besonderheiten:**
- Array-Konstruktoren mit `[...]` seit Fortran 2003
- Ältere Syntax mit `(/ ... /)`
- Implied-Do-Loops: `[(i, i=1,10)]`
- Keine Map- oder Set-Literale

**Weiterführende Links:**
- [Fortran Wiki - Array Constructors](https://fortranwiki.org/fortran/show/Array+constructors)

</TabItem>
<TabItem value="gleam" label="Gleam">

```erlang
// List-Literal
let items = [10, 20, 30]

// Tuple-Literal
let pair = #(10, 20)
```

**Besonderheiten:**
- Listen-Literale mit `[...]`
- Tuple-Literale mit `#(...)`
- Kein natives Map- oder Set-Literal (`dict.from_list`, `set.from_list`)

**Weiterführende Links:**
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

// Array-Literal (feste Größe)
arr := [3]int{10, 20, 30}
```

**Besonderheiten:**
- Composite Literals für Arrays, Slices, Maps und Structs
- Typangabe ist Teil des Literals
- Kein natives Set-Literal

**Weiterführende Links:**
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

**Besonderheiten:**
- Listen-Literale mit `[...]` (erzeugen `ArrayList`)
- Map-Literale mit `[key: value]` (erzeugen `LinkedHashMap`)
- Range-Literale mit `..`
- Kein natives Set-Literal (`[1, 2, 3] as Set`)

**Weiterführende Links:**
- [Groovy Documentation - Collections](https://groovy-lang.org/groovy-dev-kit.html#_working_with_collections)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Listen-Literal
items = [10, 20, 30]

-- Tuple-Literal
pair = (10, 20)

-- String als Zeichenliste
name = "Alice"  -- = ['A','l','i','c','e']
```

**Besonderheiten:**
- Listen-Literale mit `[...]`
- Tuple-Literale mit `(...)`
- Kein natives Map- oder Set-Literal (`Map.fromList`, `Set.fromList`)
- List Comprehensions: `[x * 2 | x <- [1..10]]`

**Weiterführende Links:**
- [Haskell Wiki - Lists](https://wiki.haskell.org/How_to_work_on_lists)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Array-Literal
var items = [10, 20, 30];

// Map-Literal
var scores = ["Alice" => 95, "Bob" => 87];
```

**Besonderheiten:**
- Array-Literale mit `[...]`
- Map-Literale mit `[key => value]`
- Kein natives Set-Literal

**Weiterführende Links:**
- [Haxe Documentation - Expression](https://haxe.org/manual/expression.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Listen-Literal
items : List Int
items = [10, 20, 30]

-- Tuple-Literal
pair : (Int, Int)
pair = (10, 20)
```

**Besonderheiten:**
- Listen-Literale mit `[...]`
- Tuple-Literale mit `(...)`
- Kein natives Map- oder Set-Literal
- Dependent Types ermöglichen längenkodierte Vektoren: `Vect 3 Int`

**Weiterführende Links:**
- [Idris 2 Documentation - Types](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Array-Literal
int[] items = {10, 20, 30};

// List-Literal (seit Java 9)
var list = List.of(10, 20, 30);

// Map-Literal (seit Java 9)
var scores = Map.of("Alice", 95, "Bob", 87);

// Set-Literal (seit Java 9)
var unique = Set.of(10, 20, 30);
```

**Besonderheiten:**
- Array-Initializer `{...}` seit Java 1.0
- `List.of()`, `Map.of()`, `Set.of()` seit Java 9 (Factory-Methoden, erzeugen immutable Collections)
- Keine echte Literal-Syntax für Listen, Maps und Sets (nur Factory-Methoden)

**Weiterführende Links:**
- [Oracle Java Documentation - Collections](https://docs.oracle.com/javase/9/docs/api/java/util/List.html#of--)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Array-Literal
const items = [10, 20, 30];

// Object-Literal (als Map-Äquivalent)
const scores = { Alice: 95, Bob: 87 };

// Map- und Set-Konstruktoren (seit ES6)
const map = new Map([["Alice", 95], ["Bob", 87]]);
const set = new Set([10, 20, 30]);
```

**Besonderheiten:**
- Array-Literale `[...]` und Object-Literale `{...}` sind Kernbestandteile der Sprache
- `Map` und `Set` erfordern Konstruktor-Aufrufe (keine Literal-Syntax)
- Spread-Operator: `[...arr1, ...arr2]`

**Weiterführende Links:**
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

**Besonderheiten:**
- Array-Literale `[...]` und Tuple-Literale `(...)` sind native Syntax
- `Dict()` und `Set()` sind Konstruktoren (keine Literal-Syntax)
- Matrix-Literale: `[1 2; 3 4]`
- Comprehensions: `[x^2 for x in 1:5]`

**Weiterführende Links:**
- [Julia Documentation - Arrays](https://docs.julialang.org/en/v1/manual/arrays/)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
// Listen-Literal
val items = [10, 20, 30]

// Tuple-Literal
val pair = (10, "hello")

// Leere Liste
val empty : list<int> = []
```

**Besonderheiten:**
- `[...]` für Listen-Literale (native Syntax)
- `(...)` für Tuple-Literale (native Syntax)
- Keine Map- oder Set-Literale (über Funktionen/Konstruktoren)

**Weiterführende Links:**
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

-- HashMap über Konstruktor
def scores := Std.HashMap.ofList [("Alice", 95), ("Bob", 87)]

-- HashSet über Konstruktor
def unique := Std.HashSet.ofList [10, 20, 30]
```

**Besonderheiten:**
- `[...]` für Listen-Literale
- `#[...]` für Array-Literale
- `(a, b)` für Tuple-Literale
- Maps und Sets über Konstruktorfunktionen (`ofList`)

**Weiterführende Links:**
- [Lean 4 Documentation - Syntax](https://lean-lang.org/lean4/doc/syntax.html)
- [Functional Programming in Lean](https://lean-lang.org/functional_programming_in_lean/)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Listen-Literal
Items = [10, 20, 30],

% Tuple-Literal
Pair = {10, "hello"},

% Maps und Sets haben keine Literal-Syntax
% Map aus Schlüssel/Wert-Listen erstellen
map.from_corresponding_lists(["Alice", "Bob"], [95, 87], Scores),

% Set aus Liste erstellen
set.list_to_set([10, 20, 30], UniqueSet)
```

**Besonderheiten:**
- `[...]` für Listen-Literale (einzige Collection mit nativer Literal-Syntax)
- `{...}` für Tuple-Literale
- Keine direkte Literal-Syntax für Arrays, Maps oder Sets
- Maps/Sets werden über Bibliotheksprädikate erstellt (`map.from_corresponding_lists`, `set.list_to_set`)
- Arrays über `array.from_list/1` aus Listen

**Weiterführende Links:**
- [Mercury Standard Library - list](https://www.mercurylang.org/information/doc-release/mercury_library/list.html)
- [Mercury Standard Library - map](https://www.mercurylang.org/information/doc-release/mercury_library/map.html)
- [Mercury Standard Library - set](https://www.mercurylang.org/information/doc-release/mercury_library/set.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Factory-Funktionen (keine echten Literale)
val items = listOf(10, 20, 30)
val scores = mapOf("Alice" to 95, "Bob" to 87)
val unique = setOf(10, 20, 30)

// Array-Factory
val arr = intArrayOf(10, 20, 30)
```

**Besonderheiten:**
- Keine native Collection-Literal-Syntax
- `listOf()`, `mapOf()`, `setOf()` sind Standard-Library-Funktionen
- `to` ist eine Infix-Funktion für `Pair`-Erstellung
- Array-Literale nur in Annotation-Argumenten: `@Ann([1, 2, 3])`

**Weiterführende Links:**
- [Kotlin Documentation - Collections](https://kotlinlang.org/docs/collections-overview.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Array-artige Tabelle
local items = {10, 20, 30}

-- Map-artige Tabelle
local scores = {Alice = 95, Bob = 87}

-- Gemischte Tabelle
local mixed = {10, 20, name = "Alice", [42] = true}
```

**Besonderheiten:**
- Tabellen-Konstruktoren `{...}` sind die einzige Collection-Literal-Syntax
- Tabellen dienen als Arrays, Maps und Objekte
- Beliebige Schlüssel mit `[key] = value` Syntax
- 1-basierte Indizierung für sequentielle Teile

**Weiterführende Links:**
- [Lua Documentation - Table Constructors](https://www.lua.org/manual/5.4/manual.html#3.4.9)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% Numerisches Array
items = [10, 20, 30];

% Cell Array (heterogene Elemente)
mixed = {10, 'text', true};

% Struct
s = struct('Alice', 95, 'Bob', 87);
```

**Besonderheiten:**
- Numerische Arrays mit `[...]`
- Cell Arrays mit `{...}` für heterogene Daten
- Matrix-Literale: `[1 2; 3 4]`
- Kein natives Map-Literal (`containers.Map` seit R2008b)

**Weiterführende Links:**
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

**Besonderheiten:**
- Listen über `List[T](...)` Konstruktor
- Dict über `Dict[K, V]()` mit nachträglicher Zuweisung
- Syntax orientiert sich an Python, erfordert aber Typangaben
- SIMD-Literale: `SIMD[DType.int32, 4](1, 2, 3, 4)`

**Weiterführende Links:**
- [Mojo Documentation - Types](https://docs.modular.com/mojo/manual/types)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Seq-Literal (dynamisch)
var items = @[10, 20, 30]

# Array-Literal (feste Größe)
var arr = [10, 20, 30]

# Table
# Benötigt: import std/tables
var scores = {"Alice": 95, "Bob": 87}.toTable
```

**Besonderheiten:**
- Seq-Literale mit `@[...]` (dynamische Arrays)
- Array-Literale mit `[...]` (feste Größe)
- Table-Literale mit `{...}.toTable` (erfordert Konvertierung)
- Set-Literale: `{10, 20, 30}` (nur für Ordinal-Typen)

**Weiterführende Links:**
- [Nim Documentation - Collections](https://nim-lang.org/docs/collections.html)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Array-Literal (seit Xcode 4.4)
NSArray *items = @[@10, @20, @30];

// Dictionary-Literal
NSDictionary *scores = @{@"Alice": @95, @"Bob": @87};
```

**Besonderheiten:**
- Array-Literale `@[...]` und Dictionary-Literale `@{...}` seit Xcode 4.4 / Clang
- Erfordern `@`-Boxing für Primitiv-Typen (`@10` statt `10`)
- Erzeugen immutable Collections (NSArray, NSDictionary)

**Weiterführende Links:**
- [Apple Documentation - Objective-C Literals](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/FoundationTypesandCollections/FoundationTypesandCollections.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Array-Konstante
const
  Items: array[0..2] of Integer = (10, 20, 30);

// Dynamisches Array (seit Delphi XE7)
var
  Items2: TArray<Integer>;
begin
  Items2 := [10, 20, 30];
end;
```

**Besonderheiten:**
- Statische Array-Konstanten mit `(...)` Syntax
- Dynamische Array-Literale mit `[...]` seit Delphi XE7
- Keine Map- oder Set-Literale

**Weiterführende Links:**
- [Free Pascal Documentation - Arrays](https://www.freepascal.org/docs-html/ref/refsu14.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Listen-Literal *)
let items = [10; 20; 30]

(* Array-Literal *)
let arr = [|10; 20; 30|]

(* Tuple-Literal *)
let pair = (10, 20)
```

**Besonderheiten:**
- Listen-Literale `[...]` mit Semikolon als Trenner
- Array-Literale `[|...|]`
- Tuple-Literale `(...)`
- Kein natives Map- oder Set-Literal (`Map.of_list`, `Set.of_list`)

**Weiterführende Links:**
- [OCaml Documentation - Lists](https://v2.ocaml.org/api/List.html)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
% Numerisches Array
items = [10, 20, 30];

% Cell Array (heterogene Elemente)
mixed = {10, 'text', true};

% Struct
s.Alice = 95;
s.Bob = 87;
```

**Besonderheiten:**
- Numerische Arrays mit `[...]`
- Cell Arrays mit `{...}` für heterogene Daten
- Matrix-Literale: `[1 2; 3 4]`
- Kein natives Map-Literal

**Weiterführende Links:**
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

**Besonderheiten:**
- Composite Literals für Arrays, Dynamic Arrays und Maps
- `[?]` für automatische Längeninferenz
- Ähnliche Syntax wie Go

**Weiterführende Links:**
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

**Besonderheiten:**
- Listen `(...)`, Array-Referenzen `[...]`, Hash-Referenzen `{...}`
- `=>` (Fat Comma) als syntaktischer Zucker für Strings auf der linken Seite
- `qw()` für Wortlisten: `qw(Alice Bob Carol)`

**Weiterführende Links:**
- [Perl Documentation - Data Types](https://perldoc.perl.org/perldata)

</TabItem>
<TabItem value="php" label="PHP">

```php
// Array-Literal
$items = [10, 20, 30];

// Assoziatives Array
$scores = ["Alice" => 95, "Bob" => 87];
```

**Besonderheiten:**
- `[...]` Syntax seit PHP 5.4 (vorher `array(...)`)
- Arrays und assoziative Arrays verwenden dieselbe Syntax
- Kein natives Set-Literal

**Weiterführende Links:**
- [PHP Documentation - Arrays](https://www.php.net/manual/en/language.types.array.php)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Array-Literal
items :: Array Int
items = [10, 20, 30]
```

**Besonderheiten:**
- Array-Literale mit `[...]`
- Kein natives Map- oder Set-Literal (`Map.fromFoldable`, `Set.fromFoldable`)
- Records: `{ name: "Alice", score: 95 }`

**Weiterführende Links:**
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

**Besonderheiten:**
- Vier Collection-Literal-Typen: `[]` (List), `{}` (Dict/Set), `()` (Tuple)
- Leeres Set nur via `set()` (da `{}` ein leeres Dict erzeugt)
- Comprehensions: `[x*2 for x in items]`, `{k: v for k, v in pairs}`

**Weiterführende Links:**
- [Python Documentation - Data Structures](https://docs.python.org/3/tutorial/datastructures.html)

</TabItem>
<TabItem value="r" label="R">

```r
# Vektor (via Funktionsaufruf)
items <- c(10, 20, 30)

# Benannte Liste (Pseudo-Map)
scores <- list(Alice = 95, Bob = 87)

# Benannter Vektor
named_vec <- c(Alice = 95, Bob = 87)
```

**Besonderheiten:**
- `c()` ist eine Funktion, keine echte Literal-Syntax
- `list()` für heterogene und benannte Collections
- Keine echten Collection-Literale in der Grammatik
- Matrix-Konstruktion via `matrix(c(1,2,3,4), nrow=2)`

**Weiterführende Links:**
- [R Documentation - Vectors](https://cran.r-project.org/doc/manuals/r-release/R-intro.html#Vectors-and-assignment)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
;; Listen-Literal (quoted)
(define items '(10 20 30))

;; Vektor-Literal
(define vec #(10 20 30))

;; Hash-Literal
(define scores #hash(("Alice" . 95) ("Bob" . 87)))
```

**Besonderheiten:**
- Listen-Literale mit `'()` (Quote-Syntax)
- Vektor-Literale mit `#()`
- Hash-Literale mit `#hash()`
- Quasi-Quoting: `` `(1 2 ,(+ 1 2)) `` → `(1 2 3)`

**Weiterführende Links:**
- [Racket Documentation - Data Types](https://docs.racket-lang.org/guide/datatypes.html)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
# List-Literal
items = [10, 20, 30]

# Record-Literal (als Map-Äquivalent)
scores = { alice: 95, bob: 87 }
```

**Besonderheiten:**
- Listen-Literale mit `[...]`
- Records als strukturierte Daten (kein dynamisches Map)
- Kein natives Set- oder Map-Literal
- Tag Unions für algebraische Datentypen

**Weiterführende Links:**
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

**Besonderheiten:**
- Array-Literale `[...]` und Hash-Literale `{...}`
- Symbol-Key-Kurzform: `{ key: value }` statt `{ :key => value }`
- `%w[Alice Bob Carol]` für String-Arrays
- `Set[10, 20, 30]` für Sets (benötigt `require 'set'`)

**Weiterführende Links:**
- [Ruby Documentation - Literals](https://ruby-doc.org/core-3.1.0/doc/syntax/literals_rdoc.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Array-Literal (feste Größe)
let items = [10, 20, 30];

// Vec via Makro
let vec = vec![10, 20, 30];

// HashMap via Makro (seit Rust 2021 mit Crate)
// Benötigt: use std::collections::HashMap;
let scores = HashMap::from([("Alice", 95), ("Bob", 87)]);
```

**Besonderheiten:**
- Array-Literale `[...]` für feste Größen
- `vec![...]` Makro für dynamische Vektoren
- Kein natives Map-Literal, aber `HashMap::from()` seit Rust 1.56
- Wiederholungs-Syntax: `[0; 100]` für Array mit 100 Nullen

**Weiterführende Links:**
- [Rust Documentation - Collections](https://doc.rust-lang.org/std/collections/index.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Factory-Methoden (keine echten Literale)
val items = List(10, 20, 30)
val scores = Map("Alice" -> 95, "Bob" -> 87)
val unique = Set(10, 20, 30)

// Array-Literal
val arr = Array(10, 20, 30)
```

**Besonderheiten:**
- Keine native Collection-Literal-Syntax
- `List()`, `Map()`, `Set()` sind `apply`-Methoden auf Companion Objects
- `->` erzeugt Tuple-Paare: `"Alice" -> 95` ist `("Alice", 95)`

**Weiterführende Links:**
- [Scala Documentation - Collections](https://docs.scala-lang.org/overviews/collections-2.13/introduction.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; Listen-Literal (quoted)
(define items '(10 20 30))

;; Vektor-Literal
(define vec #(10 20 30))
```

**Besonderheiten:**
- Listen-Literale mit `'()` (Quote-Syntax)
- Vektor-Literale mit `#()`
- Kein natives Map- oder Set-Literal
- Association Lists als Pseudo-Maps: `'((Alice . 95) (Bob . 87))`

**Weiterführende Links:**
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

**Besonderheiten:**
- Array- und Dictionary-Literale verwenden `[...]` mit kontextabhängiger Interpretation
- Sets verwenden dieselbe Literal-Syntax wie Arrays (Typannotation erforderlich)
- `ExpressibleByArrayLiteral` / `ExpressibleByDictionaryLiteral` Protocols für eigene Typen

**Weiterführende Links:**
- [Swift Documentation - Collection Types](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/collectiontypes/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Array-Literal
const items = [10, 20, 30];

// Object-Literal (als Map-Äquivalent)
const scores = { Alice: 95, Bob: 87 };

// Map- und Set-Konstruktoren
const map = new Map([["Alice", 95], ["Bob", 87]]);
const set = new Set([10, 20, 30]);

// Tuple-Typ
const tuple: [number, string] = [10, "text"];
```

**Besonderheiten:**
- Identisch mit JavaScript, ergänzt um Typannotationen
- Tuple-Typen als typisierte Arrays fester Länge
- `as const` für Readonly-Tuple-Literale: `[10, 20] as const`

**Weiterführende Links:**
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

**Besonderheiten:**
- Array-Literale mit `[...]`
- Map-Literale mit `{ key: value }` (ohne Kommas)
- Fixed-Size Arrays: `items := [10, 20, 30]!`

**Weiterführende Links:**
- [V Documentation - Arrays](https://github.com/vlang/v/blob/master/doc/docs.md#arrays)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```csharp
' Array-Literal
Dim items() As Integer = {10, 20, 30}

' Collection-Initializer
Dim list As New List(Of Integer) From {10, 20, 30}

' Dictionary-Initializer (seit VB.NET 15)
Dim scores As New Dictionary(Of String, Integer) From {
    {"Alice", 95},
    {"Bob", 87}
}
```

**Besonderheiten:**
- Array-Literale mit `{...}`
- Collection-Initializer mit `From {}`
- Dictionary-Initializer mit verschachtelten `{key, value}`

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Collection Initializers](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/collection-initializers/)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```wolfram
(* Listen-Literal *)
items = {10, 20, 30};

(* Association (Map-Äquivalent) *)
scores = <|"Alice" -> 95, "Bob" -> 87|>;
```

**Besonderheiten:**
- Listen-Literale mit `{...}` (geschweifte Klammern)
- Associations mit `<|...|>` als Schlüssel-Wert-Paare
- Verschachtelte Listen für Matrizen: `{{1, 2}, {3, 4}}`

**Weiterführende Links:**
- [Wolfram Language Documentation - Lists](https://reference.wolfram.com/language/guide/Lists.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Array-Literal
const items = [_]i32{ 10, 20, 30 };

// Struct-Literal (als Record-Äquivalent)
const point = .{ .x = 10, .y = 20 };

// Anonymes Struct-Literal
const tuple = .{ 10, "text", true };
```

**Besonderheiten:**
- Array-Literale mit `[_]T{...}` (Typinferenz mit `[_]`)
- Anonyme Struct-Literale mit `.{...}`
- Wiederholungs-Syntax: `[_]i32{0} ** 100`
- Kein natives Map- oder Set-Literal

**Weiterführende Links:**
- [Zig Documentation - Arrays](https://ziglang.org/documentation/0.11.0/#Arrays)

</TabItem>
</Tabs>

