---
slug: /collections/collection-operations
title: 10.2. Collection Operations
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 10.2. Collection Operations

Operations on Collections.

## 10.2.1. Iteration

Iterating through elements in a collection to access each element and perform operations on it. Enables systematic processing of all elements in a collection.

### Languages {#sprachen}

<Tabs availableTabs={['common-lisp', 'cpp', 'csharp', 'd', 'dart', 'go', 'groovy', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'mercury', 'lua', 'nim', 'objective-c', 'perl', 'php', 'python', 'r', 'ruby', 'rust', 'scala', 'swift', 'typescript', 'vbnet', 'wolfram-language']} orangeTabs={['c', 'idris']}>
<TabItem value="c" label="C">

```c
int numbers[] = {10, 20, 30};
int length = sizeof(numbers) / sizeof(numbers[0]);

for (int i = 0; i < length; i++) {
    printf("%d\n", numbers[i]);
}
```

**Special features:**
- Index-based iteration with `for` loop
- Manual length calculation required
- No native collection iteration

**Further reading:**
- [C Documentation - For Loops](https://en.cppreference.com/w/c/language/for)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
int[] numbers = {10, 20, 30};

foreach (int num in numbers) {
    Console.WriteLine(num);
}
```

**Special features:**
- `foreach` for collection iteration (since C# 1.0)
- Type-safe
- Also supports `for` loops

**Further reading:**
- [Microsoft C# Documentation - foreach](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/statements/iteration-statements#the-foreach-statement)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
std::vector<int> numbers = {10, 20, 30};

for (int num : numbers) {
    std::cout << num << std::endl;
}
```

**Special features:**
- Range-based `for` loop (since C++11)
- Also supports `for_each` algorithm
- Template-based

**Further reading:**
- [cppreference.com - Range-based for loop](https://en.cppreference.com/w/cpp/language/range-for)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
var numbers = [10, 20, 30];

for (var num in numbers) {
    print(num);
}
```

**Special features:**
- `for-in` for collection iteration
- Also supports `forEach` method
- Dynamic typing

**Further reading:**
- [Dart Language Tour - Loops](https://dart.dev/guides/language/language-tour#loops)

</TabItem>
<TabItem value="go" label="Go">

```go
numbers := []int{10, 20, 30}

for i, num := range numbers {
    fmt.Println(i, num)
}
```

**Special features:**
- `range` for collection iteration
- Returns index and value
- Also supports index only or value only

**Further reading:**
- [Go Documentation - For Loops](https://go.dev/tour/flowcontrol/1)

</TabItem>
<TabItem value="java" label="Java">

```java
int[] numbers = {10, 20, 30};

for (int num : numbers) {
    System.out.println(num);
}
```

**Special features:**
- Enhanced `for` loop (since Java 5.0)
- Also supports `forEach` method (since Java 8)
- Type-safe

**Further reading:**
- [Oracle Java Documentation - For Loops](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/for.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
const numbers = [10, 20, 30];

for (const num of numbers) {
    console.log(num);
}
```

**Special features:**
- `for-of` for iteration (since ES6)
- Also supports `forEach` method
- Also supports `for-in` for objects

**Further reading:**
- [MDN Web Docs - for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
numbers = [10, 20, 30]

for num in numbers
    println(num)
end
```

**Special features:**
- `for-in` for collection iteration
- Also supports `foreach` function
- High performance

**Further reading:**
- [Julia Documentation - For Loops](https://docs.julialang.org/en/v1/manual/control-flow/#for-Loops)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
val numbers = [10, 20, 30]

// Iteration with foreach
numbers.foreach fn(n)
  println(n.show)

// Iteration with for (numeric range)
for(1, 5) fn(i)
  println(i.show)
```

**Special features:**
- `foreach` for iteration over lists
- `for(start, end)` for numeric ranges
- Functional iteration (no traditional `for-in`)

**Further reading:**
- [Koka Standard Library - list](https://koka-lang.github.io/koka/doc/std_core_list.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
def numbers : List Nat := [10, 20, 30]

-- for-in loop (in the IO monad)
def printNumbers : IO Unit := do
  for n in numbers do
    IO.println s!"{n}"

-- Functional iteration with forM
def printWithForM : IO Unit :=
  numbers.forM (fun n => IO.println s!"{n}")
```

**Special features:**
- `for ... in ...` syntax in `do` blocks for iteration
- `List.forM` for monadic iteration
- `List.forEach` as alternative
- Iteration requires a monad (e.g., `IO`)

**Further reading:**
- [Lean 4 Documentation - For Loops](https://lean-lang.org/lean4/doc/do.html)
- [Lean 4 Documentation - List](https://leanprover-community.github.io/mathlib4_docs/Init/Prelude.html#List)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Recursive iteration (idiomatic)
:- pred print_list(list(int)::in, io::di, io::uo) is det.
print_list([], !IO).
print_list([H | T], !IO) :-
    io.print_line(H, !IO),
    print_list(T, !IO).

% Call
Numbers = [10, 20, 30],
print_list(Numbers, !IO)
```

**Special features:**
- Iteration occurs via recursive predicates with pattern matching
- `[H | T]` destructuring for head and tail
- `!IO` state variable for I/O effects (unique mode pair)
- No imperative loops – recursion is the standard pattern

**Further reading:**
- [Mercury Standard Library - list](https://www.mercurylang.org/information/doc-release/mercury_library/list.html)
- [Mercury Language Reference - IO](https://www.mercurylang.org/information/doc-release/mercury_ref/IO.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
val numbers = listOf(10, 20, 30)

for (num in numbers) {
    println(num)
}
```

**Special features:**
- `for-in` for collection iteration
- Also supports `forEach` function
- Also supports index iteration with `indices`

**Further reading:**
- [Kotlin Documentation - For Loops](https://kotlinlang.org/docs/control-flow.html#for-loops)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
local numbers = {10, 20, 30}

for i, num in ipairs(numbers) do
    print(num)
end
```

**Special features:**
- `for-in` with `ipairs` for array iteration
- Also supports `pairs` for table iteration
- Returns index and value

**Further reading:**
- [Lua Documentation - For Loops](https://www.lua.org/manual/5.4/manual.html#3.3.5)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
my @numbers = (10, 20, 30);

for my $num (@numbers) {
    print "$num\n";
}
```

**Special features:**
- `for` for array iteration
- Also supports `foreach` (alias)
- Also supports C-style `for` loop

**Further reading:**
- [Perl Documentation - For Loops](https://perldoc.perl.org/perlsyn#Foreach-Loops)

</TabItem>
<TabItem value="php" label="PHP">

```php
$numbers = [10, 20, 30];

foreach ($numbers as $num) {
    echo $num . "\n";
}
```

**Special features:**
- `foreach` for array iteration
- Also supports index iteration with `foreach ($arr as $key => $value)`
- Also supports `for` loops

**Further reading:**
- [PHP Documentation - foreach](https://www.php.net/manual/en/control-structures.foreach.php)

</TabItem>
<TabItem value="python" label="Python">

```python
numbers = [10, 20, 30]

for num in numbers:
    print(num)
```

**Special features:**
- `for-in` for collection iteration
- Also supports `enumerate` for index iteration
- Also supports comprehensions

**Further reading:**
- [Python Documentation - For Loops](https://docs.python.org/3/tutorial/controlflow.html#for-statements)

</TabItem>
<TabItem value="r" label="R">

```r
numbers <- c(10, 20, 30)

for (num in numbers) {
    print(num)
}
```

**Special features:**
- `for-in` for vector iteration
- Also supports `lapply` for functional iteration
- Vectorized when possible

**Further reading:**
- [R Documentation - For Loops](https://cran.r-project.org/doc/manuals/r-release/R-intro.html#Repetitive-execution-for-loops)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
numbers = [10, 20, 30]

numbers.each do |num|
    puts num
end
```

**Special features:**
- `each` for collection iteration
- Also supports `for-in` syntax
- Block-based

**Further reading:**
- [Ruby Documentation - Iteration](https://ruby-doc.org/core-3.1.0/Array.html#method-i-each)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
let numbers = vec![10, 20, 30];

for num in numbers {
    println!("{}", num);
}
```

**Special features:**
- `for-in` for iterator iteration
- Ownership-based
- Also supports `iter()` for references

**Further reading:**
- [Rust Book - For Loops](https://doc.rust-lang.org/book/ch03-05-control-flow.html#looping-through-a-collection-with-for)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
val numbers = List(10, 20, 30)

for (num <- numbers) {
    println(num)
}
```

**Special features:**
- `for` with generator syntax
- Also supports `foreach` method
- Also supports comprehensions

**Further reading:**
- [Scala Documentation - For Loops](https://docs.scala-lang.org/tour/for-comprehensions.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
let numbers = [10, 20, 30]

for num in numbers {
    print(num)
}
```

**Special features:**
- `for-in` for collection iteration
- Also supports `forEach` method
- Also supports index iteration with `indices`

**Further reading:**
- [Swift Documentation - For Loops](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/controlflow/#For-In-Loops)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
const numbers: number[] = [10, 20, 30];

for (const num of numbers) {
    console.log(num);
}
```

**Special features:**
- `for-of` for iteration (since ES6)
- Also supports `forEach` method
- Type-safe with TypeScript

**Further reading:**
- [TypeScript Handbook - Iterators](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
Dim numbers() As Integer = {10, 20, 30}

For Each num As Integer In numbers
    Console.WriteLine(num)
Next
```

**Special features:**
- `For Each` for collection iteration
- Also supports `For` loops
- Type-safe

**Further reading:**
- [Microsoft VB.NET Documentation - For Each](https://learn.microsoft.com/en-us/dotnet/visual-basic/language-reference/statements/for-each-next-statement)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; dolist
(dolist (item '(1 2 3 4 5))
  (format t "~a~%" item))

;; dotimes
(dotimes (i 5)
  (format t "~a~%" i))

;; loop
(loop for item in '("a" "b" "c")
      for i from 1
      do (format t "~a: ~a~%" i item))

;; mapc (side-effect based)
(mapc (lambda (x) (format t "~a~%" x)) '(1 2 3))
```

**Special features:**
- `dolist` for simple list iteration
- `dotimes` for counter-based iteration
- `loop` for powerful, complex iterations
- `mapc`/`mapl` for side-effect-based iteration over sequences

**Further reading:**
- [Common Lisp HyperSpec - dolist](http://www.lispworks.com/documentation/HyperSpec/Body/m_dolist.htm)

</TabItem>
<TabItem value="d" label="D">

```d
// Iteration
// Requires: import std.stdio;
int[] numbers = [1, 2, 3, 4, 5];

// foreach
foreach (num; numbers) {
    write(num, " ");
}
writeln();

// foreach with index
foreach (i, num; numbers) {
    writeln("Index ", i, ": ", num);
}

// C-Style for
for (int i = 0; i < numbers.length; i++) {
    write(numbers[i], " ");
}
writeln();
```

**Special features:**
- `foreach` as primary iteration method
- `foreach` with optional index
- `foreach_reverse` for reverse iteration
- Range-based iteration via Phobos ranges

**Further reading:**
- [D Language Specification - Foreach](https://dlang.org/spec/statement.html#foreach-statement)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
def numbers = [10, 20, 30, 40, 50]

// each method
numbers.each { println it }

// eachWithIndex
numbers.eachWithIndex { item, index ->
    println "$index: $item"
}

// for-in loop
for (num in numbers) {
    println num
}
```

**Special features:**
- `each` method with closure for functional iteration
- `eachWithIndex` for iteration with index
- `for-in` loop as alternative syntax
- `it` is the implicit parameter in closures

**Further reading:**
- [Groovy Documentation - Iterating](https://groovy-lang.org/groovy-dev-kit.html#_iterating_on_a_list)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Functional iteration
items : List String
items = ["Apfel", "Banane", "Kirsche"]

-- Iteration with side effects
traverse_ putStrLn items

-- Iteration with for_
for_ items (\item => putStrLn item)
```

**Special features:**
- No imperative loops
- `traverse_` and `for_` for iteration with side effects
- `map` for transformation without side effects

**Further reading:**
- [Idris 2 Documentation - Types and Functions](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Iteration over collections
let items = @[1, 2, 3, 4, 5]

# For-Each
for item in items:
  echo item

# With index
for i, item in items:
  echo i, ": ", item

# Over pairs (maps)
# Requires: import tables
let t = {"a": 1, "b": 2}.toTable
for key, value in t:
  echo key, " -> ", value
```

**Special features:**
- `for item in collection` for simple iteration
- `for i, item in collection` for iteration with index
- `pairs()`, `items()` iterators for different access patterns

**Further reading:**
- [Nim Documentation - For Statement](https://nim-lang.org/docs/manual.html#iterators-and-the-for-statement)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
NSArray *items = @[@"Apfel", @"Banane", @"Kirsche"];

// Fast Enumeration (since Objective-C 2.0)
for (NSString *item in items) {
    NSLog(@"%@", item);
}

// Block-based enumeration
[items enumerateObjectsUsingBlock:^(id obj, NSUInteger idx, BOOL *stop) {
    NSLog(@"%lu: %@", (unsigned long)idx, obj);
}];
```

**Special features:**
- Fast Enumeration with `for-in` (since Objective-C 2.0)
- Block-based enumeration with index and stop flag
- `NSEnumerator` as older alternative
- Fast Enumeration is thread-safe with immutable collections

**Further reading:**
- [Apple Documentation - Fast Enumeration](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Collections/Articles/Enumerators.html)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
items = {"Apfel", "Banane", "Kirsche"};
Scan[Print, items]
```

**Special features:**
- `Scan[f, list]` applies f to each element (for side effects)
- `Map[f, list]` for transformation
- `Do[expr, {i, list}]` for imperative iteration

**Further reading:**
- [Wolfram Language Documentation - Scan](https://reference.wolfram.com/language/ref/Scan.html)

</TabItem>
</Tabs>


## 10.2.2. Filtering

Selecting elements from a collection based on a predicate. Enables keeping only the elements that meet certain conditions.

### Languages {#sprachen}

<Tabs availableTabs={['clojure', 'common-lisp', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'elixir', 'elm', 'erlang', 'fsharp', 'gleam', 'groovy', 'haskell', 'haxe', 'idris', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'mercury', 'mojo', 'nim', 'ocaml', 'perl', 'php', 'purescript', 'python', 'r', 'racket', 'roc', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'vbnet', 'wolfram-language']} yellowTabs={['go']} orangeTabs={['c', 'lua']}>
<TabItem value="c" label="C">

```c
int numbers[] = {10, 20, 30, 40, 50};
int filtered[5];
int count = 0;

for (int i = 0; i < 5; i++) {
    if (numbers[i] > 25) {
        filtered[count++] = numbers[i];
    }
}
```

**Special features:**
- Manual implementation with loop required
- No native filter function
- Dynamic size requires dynamic memory management

**Further reading:**
- [C Documentation - For Loops](https://en.cppreference.com/w/c/language/for)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
int[] numbers = {10, 20, 30, 40, 50};
var filtered = numbers.Where(n => n > 25).ToArray();
```

**Special features:**
- `Where` method from LINQ (since C# 3.0)
- Lazy evaluation with IEnumerable
- Also supports `Where` with index

**Further reading:**
- [Microsoft C# Documentation - Where](https://learn.microsoft.com/en-us/dotnet/api/system.linq.enumerable.where)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
std::vector<int> numbers = {10, 20, 30, 40, 50};
std::vector<int> filtered;
std::copy_if(numbers.begin(), numbers.end(), std::back_inserter(filtered),
    [](int n) { return n > 25; });
```

**Special features:**
- `std::copy_if` algorithm (since C++11)
- Also supports `std::remove_if` for in-place filtering
- Template-based

**Further reading:**
- [cppreference.com - copy_if](https://en.cppreference.com/w/cpp/algorithm/copy)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
(def numbers [10 20 30 40 50])
(def filtered (filter #(> % 25) numbers))
```

**Special features:**
- `filter` function for lazy sequences
- Also supports `filterv` for vectors
- Functional programming

**Further reading:**
- [Clojure Documentation - filter](https://clojuredocs.org/clojure.core/filter)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
(let ((numbers '(10 20 30 40 50)))
  (remove-if-not (lambda (n) (> n 25)) numbers))
```

**Special features:**
- `remove-if-not` for filtering
- Also supports `remove-if` for inverse logic
- Functional programming

**Further reading:**
- [Common Lisp HyperSpec - remove-if-not](http://www.lispworks.com/documentation/HyperSpec/Body/f_rm_fi.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
numbers = [10, 20, 30, 40, 50]
filtered = numbers.select { |n| n > 25 }
```

**Special features:**
- `select` method for filtering
- Also supports `reject` for inverse logic
- Block-based

**Further reading:**
- [Crystal Documentation - Enumerable](https://crystal-lang.org/api/1.11.0/Enumerable.html)

</TabItem>
<TabItem value="d" label="D">

```d
int[] numbers = [10, 20, 30, 40, 50];
auto filtered = numbers.filter!(n => n > 25).array;
```

**Special features:**
- `filter` template function
- Lazy evaluation with ranges
- Also supports `filter` with index

**Further reading:**
- [D Language Documentation - filter](https://dlang.org/phobos/std_algorithm_iteration.html#filter)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
var numbers = [10, 20, 30, 40, 50];
var filtered = numbers.where((n) => n > 25).toList();
```

**Special features:**
- `where` method for filtering
- Lazy evaluation with Iterable
- Also supports `whereType` for type filtering

**Further reading:**
- [Dart Documentation - where](https://api.dart.dev/stable/dart-core/Iterable/where.html)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
numbers = [10, 20, 30, 40, 50]
filtered = Enum.filter(numbers, fn n -> n > 25 end)
```

**Special features:**
- `Enum.filter` for filtering
- Also supports `Enum.reject` for inverse logic
- Functional programming

**Further reading:**
- [Elixir Documentation - Enum.filter](https://hexdocs.pm/elixir/Enum.html#filter/2)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
numbers = [10, 20, 30, 40, 50]
filtered = List.filter (\n -> n > 25) numbers
```

**Special features:**
- `List.filter` for filtering
- Functional programming
- Immutable collections

**Further reading:**
- [Elm Documentation - List.filter](https://package.elm-lang.org/packages/elm/core/latest/List#filter)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
Numbers = [10, 20, 30, 40, 50],
Filtered = lists:filter(fun(N) -> N > 25 end, Numbers).
```

**Special features:**
- `lists:filter` for filtering
- Functional programming
- Also supports `lists:partition` for split

**Further reading:**
- [Erlang Documentation - lists:filter](https://www.erlang.org/doc/man/lists.html#filter-2)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
let numbers = [10; 20; 30; 40; 50]
let filtered = List.filter (fun n -> n > 25) numbers
```

**Special features:**
- `List.filter` for filtering
- Also supports `Seq.filter` for lazy sequences
- Functional programming

**Further reading:**
- [F# Documentation - List.filter](https://fsharp.github.io/fsharp-core-docs/reference/fsharp-collections-listmodule.html#filter)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
let numbers = [10, 20, 30, 40, 50]
let filtered = list.filter(numbers, fn(n) { n > 25 })
```

**Special features:**
- `list.filter` for filtering
- Functional programming
- Type-safe

**Further reading:**
- [Gleam Documentation - list.filter](https://hexdocs.pm/gleam_stdlib/gleam/list.html#filter)

</TabItem>
<TabItem value="go" label="Go">

```go
numbers := []int{10, 20, 30, 40, 50}
var filtered []int

for _, n := range numbers {
    if n > 25 {
        filtered = append(filtered, n)
    }
}
```

**Special features:**
- Manual implementation with loop required
- No native filter function in standard library
- Also supports `slices` package (since Go 1.21)

**Further reading:**
- [Go Documentation - For Loops](https://go.dev/tour/flowcontrol/1)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
def numbers = [10, 20, 30, 40, 50]
def filtered = numbers.findAll { it > 25 }
```

**Special features:**
- `findAll` method for filtering
- Also supports `grep` for pattern matching
- Closure-based

**Further reading:**
- [Groovy Documentation - findAll](https://groovy-lang.org/groovy-dev-kit.html#_working_with_collections)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
numbers = [10, 20, 30, 40, 50]
filtered = filter (> 25) numbers
```

**Special features:**
- `filter` function for filtering
- Lazy evaluation
- Functional programming

**Further reading:**
- [Haskell Documentation - filter](https://hackage.haskell.org/package/base/docs/Prelude.html#v:filter)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
var numbers = [10, 20, 30, 40, 50];
var filtered = numbers.filter(function(n) return n > 25);
```

**Special features:**
- `filter` method for filtering
- Also supports lambda syntax
- Cross-platform

**Further reading:**
- [Haxe Documentation - Array.filter](https://api.haxe.org/Array.html#filter)

</TabItem>
<TabItem value="java" label="Java">

```java
List<Integer> numbers = Arrays.asList(10, 20, 30, 40, 50);
List<Integer> filtered = numbers.stream()
    .filter(n -> n > 25)
    .collect(Collectors.toList());
```

**Special features:**
- Stream API for filtering (since Java 8)
- Also supports `filter` with predicate
- Lazy evaluation

**Further reading:**
- [Oracle Java Documentation - Stream.filter](https://docs.oracle.com/javase/8/docs/api/java/util/stream/Stream.html#filter-java.util.function.Predicate-)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
const numbers = [10, 20, 30, 40, 50];
const filtered = numbers.filter(n => n > 25);
```

**Special features:**
- `filter` method for filtering (since ES5)
- Also supports `filter` with index
- Array method

**Further reading:**
- [MDN Web Docs - Array.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
numbers = [10, 20, 30, 40, 50]
filtered = filter(n -> n > 25, numbers)
```

**Special features:**
- `filter` function for filtering
- Also supports `filter!` for in-place filtering
- High performance

**Further reading:**
- [Julia Documentation - filter](https://docs.julialang.org/en/v1/base/collections/#Base.filter)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
val numbers = [10, 20, 30, 40, 50]
val filtered = numbers.filter(fn(n) n > 25)
// [30, 40, 50]
```

**Special features:**
- `filter` function for filtering
- Returns a new list (immutable)
- Functional higher-order function

**Further reading:**
- [Koka Standard Library - list](https://koka-lang.github.io/koka/doc/std_core_list.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
def numbers : List Nat := [10, 20, 30, 40, 50]
def filtered := numbers.filter (· > 25)
-- [30, 40, 50]

-- With explicit lambda function
def filtered2 := numbers.filter (fun n => n > 25)

-- Array filtering
def arr : Array Nat := #[10, 20, 30, 40, 50]
def filteredArr := arr.filter (· > 25)
-- #[30, 40, 50]
```

**Special features:**
- `List.filter` and `Array.filter` for filtering
- `·` syntax as shorthand for anonymous functions
- Returns a new collection (immutable)
- `List.partition` splits into two lists by predicate

**Further reading:**
- [Lean 4 Documentation - List](https://leanprover-community.github.io/mathlib4_docs/Init/Prelude.html#List)
- [Functional Programming in Lean](https://lean-lang.org/functional_programming_in_lean/)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
Numbers = [10, 20, 30, 40, 50],
list.filter(
    (pred(N::in) is semidet :- N > 25),
    Numbers, Filtered
)
% Filtered = [30, 40, 50]
```

**Special features:**
- `list.filter/3` with predicate (higher-order)
- Lambda predicates with `(pred(...) is semidet :- ...)` syntax
- `semidet` determinism: predicate can fail (= element is excluded)
- Returns new list (immutable)

**Further reading:**
- [Mercury Standard Library - list](https://www.mercurylang.org/information/doc-release/mercury_library/list.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
val numbers = listOf(10, 20, 30, 40, 50)
val filtered = numbers.filter { it > 25 }
```

**Special features:**
- `filter` function for filtering
- Also supports `filterIndexed` for index filtering
- Functional programming

**Further reading:**
- [Kotlin Documentation - filter](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/filter.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
local numbers = {10, 20, 30, 40, 50}
local filtered = {}

for i, n in ipairs(numbers) do
    if n > 25 then
        table.insert(filtered, n)
    end
end
```

**Special features:**
- Manual implementation with loop required
- No native filter function
- Also supports functional libraries

**Further reading:**
- [Lua Documentation - For Loops](https://www.lua.org/manual/5.4/manual.html#3.3.5)

</TabItem>
<TabItem value="mojo" label="Mojo">

```mojo
var numbers = List[Int](10, 20, 30, 40, 50)
var filtered = numbers.filter(lambda n: n > 25)
```

**Special features:**
- `filter` method for filtering
- Supports lambda expressions
- Python-like syntax

**Further reading:**
- [Mojo Documentation](https://docs.modular.com/mojo)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
var numbers = @[10, 20, 30, 40, 50]
var filtered = numbers.filter(proc(n: int): bool = n > 25)
```

**Special features:**
- `filter` function for filtering
- Also supports `filterIt` for compact syntax
- Functional programming

**Further reading:**
- [Nim Documentation - filter](https://nim-lang.org/docs/sequtils.html#filter%2Cseq%2Cuntyped)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
let numbers = [10; 20; 30; 40; 50]
let filtered = List.filter (fun n -> n > 25) numbers
```

**Special features:**
- `List.filter` for filtering
- Also supports `List.filteri` for index filtering
- Functional programming

**Further reading:**
- [OCaml Documentation - List.filter](https://v2.ocaml.org/api/List.html#VALfilter)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
my @numbers = (10, 20, 30, 40, 50);
my @filtered = grep { $_ > 25 } @numbers;
```

**Special features:**
- `grep` function for filtering
- Also supports `grep` with index
- Perl-idiomatic

**Further reading:**
- [Perl Documentation - grep](https://perldoc.perl.org/functions/grep)

</TabItem>
<TabItem value="php" label="PHP">

```php
$numbers = [10, 20, 30, 40, 50];
$filtered = array_filter($numbers, fn($n) => $n > 25);
```

**Special features:**
- `array_filter` function for filtering
- Also supports arrow functions (since PHP 7.4)
- Also supports `array_filter` with flag

**Further reading:**
- [PHP Documentation - array_filter](https://www.php.net/manual/en/function.array-filter.php)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
numbers = [10, 20, 30, 40, 50]
filtered = filter (\n -> n > 25) numbers
```

**Special features:**
- `filter` function for filtering
- Functional programming
- Type-safe

**Further reading:**
- [PureScript Documentation - filter](https://pursuit.purescript.org/packages/purescript-lists/6.0.0/docs/Data.List#v:filter)

</TabItem>
<TabItem value="python" label="Python">

```python
numbers = [10, 20, 30, 40, 50]
filtered = list(filter(lambda n: n > 25, numbers))
```

**Special features:**
- `filter` function for filtering
- Also supports list comprehensions
- Lazy evaluation with Python 3

**Further reading:**
- [Python Documentation - filter](https://docs.python.org/3/library/functions.html#filter)

</TabItem>
<TabItem value="r" label="R">

```r
numbers <- c(10, 20, 30, 40, 50)
filtered <- numbers[numbers > 25]
```

**Special features:**
- Vectorized filtering with indexing
- Also supports `Filter` function
- Vectorized when possible

**Further reading:**
- [R Documentation - Filter](https://www.rdocumentation.org/packages/base/versions/3.6.2/topics/Filter)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
(define numbers '(10 20 30 40 50))
(define filtered (filter (lambda (n) (> n 25)) numbers))
```

**Special features:**
- `filter` function for filtering
- Functional programming
- Also supports `filter-not` for inverse logic

**Further reading:**
- [Racket Documentation - filter](https://docs.racket-lang.org/reference/pairs.html#%28def._%28%28lib._racket%2Fprivate%2Flist..rkt%29._filter%29%29)

</TabItem>
<TabItem value="roc" label="Roc">

```roc
numbers = [10, 20, 30, 40, 50]
filtered = List.filter numbers \n -> n > 25
```

**Special features:**
- `List.filter` for filtering
- Functional programming
- Type-safe

**Further reading:**
- [Roc Documentation - List.filter](https://www.roc-lang.org/builtins/List#filter)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
numbers = [10, 20, 30, 40, 50]
filtered = numbers.select { |n| n > 25 }
```

**Special features:**
- `select` method for filtering
- Also supports `reject` for inverse logic
- Block-based

**Further reading:**
- [Ruby Documentation - Array.select](https://ruby-doc.org/core-3.1.0/Array.html#method-i-select)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
let numbers = vec![10, 20, 30, 40, 50];
let filtered: Vec<i32> = numbers.into_iter()
    .filter(|n| *n > 25)
    .collect();
```

**Special features:**
- `filter` method for iterator filtering
- Lazy evaluation
- Ownership-based

**Further reading:**
- [Rust Documentation - Iterator.filter](https://doc.rust-lang.org/std/iter/trait.Iterator.html#method.filter)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
val numbers = List(10, 20, 30, 40, 50)
val filtered = numbers.filter(_ > 25)
```

**Special features:**
- `filter` method for filtering
- Also supports `filterNot` for inverse logic
- Functional programming

**Further reading:**
- [Scala Documentation - filter](https://www.scala-lang.org/api/current/scala/collection/immutable/List.html#filter%28p:A=%3EBoolean%29:List%5BA%5D)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
(define numbers '(10 20 30 40 50))
(define filtered (filter (lambda (n) (> n 25)) numbers))
```

**Special features:**
- `filter` function for filtering (SRFI-1)
- Functional programming
- Also supports `remove` for inverse logic

**Further reading:**
- [Scheme Documentation - filter](https://srfi.schemers.org/srfi-1/srfi-1.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
let numbers = [10, 20, 30, 40, 50]
let filtered = numbers.filter { $0 > 25 }
```

**Special features:**
- `filter` method for filtering
- Also supports `filter` with index
- Closure-based

**Further reading:**
- [Swift Documentation - filter](https://developer.apple.com/documentation/swift/array/filter(_:))

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
const numbers: number[] = [10, 20, 30, 40, 50];
const filtered = numbers.filter(n => n > 25);
```

**Special features:**
- `filter` method for filtering (since ES5)
- Also supports `filter` with index
- Type-safe with TypeScript

**Further reading:**
- [TypeScript Handbook - Array.filter](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
Dim numbers() As Integer = {10, 20, 30, 40, 50}
Dim filtered = numbers.Where(Function(n) n > 25).ToArray()
```

**Special features:**
- `Where` method from LINQ
- Also supports `Where` with index
- Type-safe

**Further reading:**
- [Microsoft VB.NET Documentation - Where](https://learn.microsoft.com/en-us/dotnet/api/system.linq.enumerable.where)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Filtering
numbers : List Int
numbers = [1, 2, 3, 4, 5, 6]

evens : List Int
evens = filter (\n => mod n 2 == 0) numbers  -- [2, 4, 6]
```

**Special features:**
- `filter` works on lists
- Returns a new list (immutable)
- Supports lambda expressions as predicate

**Further reading:**
- [Idris 2 Documentation - Types and Functions](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
numbers = {1, 2, 3, 4, 5, 6};
evens = Select[numbers, EvenQ]  (* {2, 4, 6} *)
```

**Special features:**
- `Select[list, crit]` filters elements by criterion
- `Pick[list, sel, pattern]` as alternative
- `Cases[list, pattern]` for pattern-based filtering

**Further reading:**
- [Wolfram Language Documentation - Select](https://reference.wolfram.com/language/ref/Select.html)

</TabItem>
</Tabs>


## 10.2.3. Mapping

Transforming each element of a collection by applying a function. Enables converting each element of a collection into a new element.

### Languages {#sprachen}

<Tabs availableTabs={['clojure', 'common-lisp', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'elixir', 'elm', 'erlang', 'fsharp', 'gleam', 'groovy', 'haskell', 'haxe', 'idris', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'mercury', 'mojo', 'nim', 'ocaml', 'perl', 'php', 'purescript', 'python', 'r', 'racket', 'roc', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'vbnet', 'wolfram-language']} yellowTabs={['go']} orangeTabs={['c', 'lua']}>
<TabItem value="c" label="C">

```c
int numbers[] = {10, 20, 30, 40, 50};
int mapped[5];

for (int i = 0; i < 5; i++) {
    mapped[i] = numbers[i] * 2;
}
```

**Special features:**
- Manual implementation with loop required
- No native map function
- Dynamic size requires dynamic memory management

**Further reading:**
- [C Documentation - For Loops](https://en.cppreference.com/w/c/language/for)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
int[] numbers = {10, 20, 30, 40, 50};
var mapped = numbers.Select(n => n * 2).ToArray();
```

**Special features:**
- `Select` method from LINQ (since C# 3.0)
- Lazy evaluation with IEnumerable
- Also supports `Select` with index

**Further reading:**
- [Microsoft C# Documentation - Select](https://learn.microsoft.com/en-us/dotnet/api/system.linq.enumerable.select)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
std::vector<int> numbers = {10, 20, 30, 40, 50};
std::vector<int> mapped;
std::transform(numbers.begin(), numbers.end(), std::back_inserter(mapped),
    [](int n) { return n * 2; });
```

**Special features:**
- `std::transform` algorithm
- Also supports in-place transformation
- Template-based

**Further reading:**
- [cppreference.com - transform](https://en.cppreference.com/w/cpp/algorithm/transform)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
(def numbers [10 20 30 40 50])
(def mapped (map #(* % 2) numbers))
```

**Special features:**
- `map` function for lazy sequences
- Also supports `mapv` for vectors
- Functional programming

**Further reading:**
- [Clojure Documentation - map](https://clojuredocs.org/clojure.core/map)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
(let ((numbers '(10 20 30 40 50)))
  (mapcar (lambda (n) (* n 2)) numbers))
```

**Special features:**
- `mapcar` for mapping
- Also supports `mapc` for side effects
- Functional programming

**Further reading:**
- [Common Lisp HyperSpec - mapcar](http://www.lispworks.com/documentation/HyperSpec/Body/f_mapc_.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
numbers = [10, 20, 30, 40, 50]
mapped = numbers.map { |n| n * 2 }
```

**Special features:**
- `map` method for mapping
- Also supports `map_with_index` for index mapping
- Block-based

**Further reading:**
- [Crystal Documentation - Enumerable](https://crystal-lang.org/api/1.11.0/Enumerable.html)

</TabItem>
<TabItem value="d" label="D">

```d
int[] numbers = [10, 20, 30, 40, 50];
auto mapped = numbers.map!(n => n * 2).array;
```

**Special features:**
- `map` template function
- Lazy evaluation with ranges
- Also supports `map` with index

**Further reading:**
- [D Language Documentation - map](https://dlang.org/phobos/std_algorithm_iteration.html#map)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
var numbers = [10, 20, 30, 40, 50];
var mapped = numbers.map((n) => n * 2).toList();
```

**Special features:**
- `map` method for mapping
- Lazy evaluation with Iterable
- Also supports `mapIndexed` for index mapping

**Further reading:**
- [Dart Documentation - map](https://api.dart.dev/stable/dart-core/Iterable/map.html)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
numbers = [10, 20, 30, 40, 50]
mapped = Enum.map(numbers, fn n -> n * 2 end)
```

**Special features:**
- `Enum.map` for mapping
- Also supports `Enum.map_every` for periodic mapping
- Functional programming

**Further reading:**
- [Elixir Documentation - Enum.map](https://hexdocs.pm/elixir/Enum.html#map/2)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
numbers = [10, 20, 30, 40, 50]
mapped = List.map (\n -> n * 2) numbers
```

**Special features:**
- `List.map` for mapping
- Functional programming
- Immutable collections

**Further reading:**
- [Elm Documentation - List.map](https://package.elm-lang.org/packages/elm/core/latest/List#map)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
Numbers = [10, 20, 30, 40, 50],
Mapped = lists:map(fun(N) -> N * 2 end, Numbers).
```

**Special features:**
- `lists:map` for mapping
- Functional programming
- Also supports `lists:mapfoldl` for mapping with accumulator

**Further reading:**
- [Erlang Documentation - lists:map](https://www.erlang.org/doc/man/lists.html#map-2)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
let numbers = [10; 20; 30; 40; 50]
let mapped = List.map (fun n -> n * 2) numbers
```

**Special features:**
- `List.map` for mapping
- Also supports `Seq.map` for lazy sequences
- Functional programming

**Further reading:**
- [F# Documentation - List.map](https://fsharp.github.io/fsharp-core-docs/reference/fsharp-collections-listmodule.html#map)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
let numbers = [10, 20, 30, 40, 50]
let mapped = list.map(numbers, fn(n) { n * 2 })
```

**Special features:**
- `list.map` for mapping
- Functional programming
- Type-safe

**Further reading:**
- [Gleam Documentation - list.map](https://hexdocs.pm/gleam_stdlib/gleam/list.html#map)

</TabItem>
<TabItem value="go" label="Go">

```go
numbers := []int{10, 20, 30, 40, 50}
mapped := make([]int, len(numbers))

for i, n := range numbers {
    mapped[i] = n * 2
}
```

**Special features:**
- Manual implementation with loop required
- No native map function in standard library
- Also supports `slices` package (since Go 1.21)

**Further reading:**
- [Go Documentation - For Loops](https://go.dev/tour/flowcontrol/1)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
def numbers = [10, 20, 30, 40, 50]
def mapped = numbers.collect { it * 2 }
```

**Special features:**
- `collect` method for mapping
- Also supports `collectMany` for flattening
- Closure-based

**Further reading:**
- [Groovy Documentation - collect](https://groovy-lang.org/groovy-dev-kit.html#_working_with_collections)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
numbers = [10, 20, 30, 40, 50]
mapped = map (* 2) numbers
```

**Special features:**
- `map` function for mapping
- Lazy evaluation
- Functional programming

**Further reading:**
- [Haskell Documentation - map](https://hackage.haskell.org/package/base/docs/Prelude.html#v:map)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
var numbers = [10, 20, 30, 40, 50];
var mapped = numbers.map(function(n) return n * 2);
```

**Special features:**
- `map` method for mapping
- Also supports lambda syntax
- Cross-platform

**Further reading:**
- [Haxe Documentation - Array.map](https://api.haxe.org/Array.html#map)

</TabItem>
<TabItem value="java" label="Java">

```java
List<Integer> numbers = Arrays.asList(10, 20, 30, 40, 50);
List<Integer> mapped = numbers.stream()
    .map(n -> n * 2)
    .collect(Collectors.toList());
```

**Special features:**
- Stream API for mapping (since Java 8)
- Also supports `mapToInt` for primitive types
- Lazy evaluation

**Further reading:**
- [Oracle Java Documentation - Stream.map](https://docs.oracle.com/javase/8/docs/api/java/util/stream/Stream.html#map-java.util.function.Function-)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
const numbers = [10, 20, 30, 40, 50];
const mapped = numbers.map(n => n * 2);
```

**Special features:**
- `map` method for mapping (since ES5)
- Also supports `map` with index
- Array method

**Further reading:**
- [MDN Web Docs - Array.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
numbers = [10, 20, 30, 40, 50]
mapped = map(n -> n * 2, numbers)
```

**Special features:**
- `map` function for mapping
- Also supports `map!` for in-place mapping
- High performance

**Further reading:**
- [Julia Documentation - map](https://docs.julialang.org/en/v1/base/collections/#Base.map)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
val numbers = [10, 20, 30, 40, 50]
val mapped = numbers.map(fn(n) n * 2)
// [20, 40, 60, 80, 100]
```

**Special features:**
- `map` function for mapping
- Returns a new list (immutable)
- Functional higher-order function

**Further reading:**
- [Koka Standard Library - list](https://koka-lang.github.io/koka/doc/std_core_list.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
def numbers : List Nat := [10, 20, 30, 40, 50]
def mapped := numbers.map (· * 2)
-- [20, 40, 60, 80, 100]

-- With explicit lambda function
def mapped2 := numbers.map (fun n => n * 2)

-- Array-Mapping
def arr : Array Nat := #[10, 20, 30, 40, 50]
def mappedArr := arr.map (· * 2)
-- #[20, 40, 60, 80, 100]
```

**Special features:**
- `List.map` and `Array.map` for mapping
- `·` syntax as shorthand for anonymous functions
- Returns a new collection (immutable)
- `List.filterMap` combines mapping and filtering (for `Option` results)

**Further reading:**
- [Lean 4 Documentation - List](https://leanprover-community.github.io/mathlib4_docs/Init/Prelude.html#List)
- [Functional Programming in Lean](https://lean-lang.org/functional_programming_in_lean/)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
Numbers = [10, 20, 30, 40, 50],
Mapped = list.map((func(N) = N * 2), Numbers)
% Mapped = [20, 40, 60, 80, 100]
```

**Special features:**
- `list.map/2` (function) or `list.map/3` (predicate) for mapping
- Lambda functions with `(func(N) = ...)` syntax
- Returns new list (immutable)
- Also `list.map2`, `list.map3` for parallel mapping over multiple lists

**Further reading:**
- [Mercury Standard Library - list](https://www.mercurylang.org/information/doc-release/mercury_library/list.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
val numbers = listOf(10, 20, 30, 40, 50)
val mapped = numbers.map { it * 2 }
```

**Special features:**
- `map` function for mapping
- Also supports `mapIndexed` for index mapping
- Functional programming

**Further reading:**
- [Kotlin Documentation - map](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/map.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
local numbers = {10, 20, 30, 40, 50}
local mapped = {}

for i, n in ipairs(numbers) do
    mapped[i] = n * 2
end
```

**Special features:**
- Manual implementation with loop required
- No native map function
- Also supports functional libraries

**Further reading:**
- [Lua Documentation - For Loops](https://www.lua.org/manual/5.4/manual.html#3.3.5)

</TabItem>
<TabItem value="mojo" label="Mojo">

```mojo
var numbers = List[Int](10, 20, 30, 40, 50)
var mapped = numbers.map(lambda n: n * 2)
```

**Special features:**
- `map` method for mapping
- Supports lambda expressions
- Python-like syntax

**Further reading:**
- [Mojo Documentation](https://docs.modular.com/mojo)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
var numbers = @[10, 20, 30, 40, 50]
var mapped = numbers.map(proc(n: int): int = n * 2)
```

**Special features:**
- `map` function for mapping
- Also supports `mapIt` for compact syntax
- Functional programming

**Further reading:**
- [Nim Documentation - map](https://nim-lang.org/docs/sequtils.html#map%2Cseq%2Cuntyped)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
let numbers = [10; 20; 30; 40; 50]
let mapped = List.map (fun n -> n * 2) numbers
```

**Special features:**
- `List.map` for mapping
- Also supports `List.mapi` for index mapping
- Functional programming

**Further reading:**
- [OCaml Documentation - List.map](https://v2.ocaml.org/api/List.html#VALmap)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
my @numbers = (10, 20, 30, 40, 50);
my @mapped = map { $_ * 2 } @numbers;
```

**Special features:**
- `map` function for mapping
- Also supports `map` with multiple lists
- Perl-idiomatic

**Further reading:**
- [Perl Documentation - map](https://perldoc.perl.org/functions/map)

</TabItem>
<TabItem value="php" label="PHP">

```php
$numbers = [10, 20, 30, 40, 50];
$mapped = array_map(fn($n) => $n * 2, $numbers);
```

**Special features:**
- `array_map` function for mapping
- Also supports arrow functions (since PHP 7.4)
- Also supports `array_map` with multiple arrays

**Further reading:**
- [PHP Documentation - array_map](https://www.php.net/manual/en/function.array-map.php)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
numbers = [10, 20, 30, 40, 50]
mapped = map (\n -> n * 2) numbers
```

**Special features:**
- `map` function for mapping
- Functional programming
- Type-safe

**Further reading:**
- [PureScript Documentation - map](https://pursuit.purescript.org/packages/purescript-prelude/6.0.0/docs/Data.Functor#v:map)

</TabItem>
<TabItem value="python" label="Python">

```python
numbers = [10, 20, 30, 40, 50]
mapped = list(map(lambda n: n * 2, numbers))
```

**Special features:**
- `map` function for mapping
- Also supports list comprehensions
- Lazy evaluation with Python 3

**Further reading:**
- [Python Documentation - map](https://docs.python.org/3/library/functions.html#map)

</TabItem>
<TabItem value="r" label="R">

```r
numbers <- c(10, 20, 30, 40, 50)
mapped <- numbers * 2
```

**Special features:**
- Vectorized mapping with operators
- Also supports `lapply` for functional transformation
- Vectorized when possible

**Further reading:**
- [R Documentation - lapply](https://www.rdocumentation.org/packages/base/versions/3.6.2/topics/lapply)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
(define numbers '(10 20 30 40 50))
(define mapped (map (lambda (n) (* n 2)) numbers))
```

**Special features:**
- `map` function for mapping
- Functional programming
- Also supports `map` with multiple lists

**Further reading:**
- [Racket Documentation - map](https://docs.racket-lang.org/reference/pairs.html#%28def._%28%28lib._racket%2Fprivate%2Flist..rkt%29._map%29%29)

</TabItem>
<TabItem value="roc" label="Roc">

```roc
numbers = [10, 20, 30, 40, 50]
mapped = List.map numbers \n -> n * 2
```

**Special features:**
- `List.map` for mapping
- Functional programming
- Type-safe

**Further reading:**
- [Roc Documentation - List.map](https://www.roc-lang.org/builtins/List#map)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
numbers = [10, 20, 30, 40, 50]
mapped = numbers.map { |n| n * 2 }
```

**Special features:**
- `map` method for mapping
- Also supports `collect` (alias)
- Block-based

**Further reading:**
- [Ruby Documentation - Array.map](https://ruby-doc.org/core-3.1.0/Array.html#method-i-map)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
let numbers = vec![10, 20, 30, 40, 50];
let mapped: Vec<i32> = numbers.into_iter()
    .map(|n| n * 2)
    .collect();
```

**Special features:**
- `map` method for iterator mapping
- Lazy evaluation
- Ownership-based

**Further reading:**
- [Rust Documentation - Iterator.map](https://doc.rust-lang.org/std/iter/trait.Iterator.html#method.map)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
val numbers = List(10, 20, 30, 40, 50)
val mapped = numbers.map(_ * 2)
```

**Special features:**
- `map` method for mapping
- Also supports `map` with index
- Functional programming

**Further reading:**
- [Scala Documentation - map](https://www.scala-lang.org/api/current/scala/collection/immutable/List.html#map%28B%29%28f:A=%3EB%29:List%5BB%5D)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
(define numbers '(10 20 30 40 50))
(define mapped (map (lambda (n) (* n 2)) numbers))
```

**Special features:**
- `map` function for mapping (SRFI-1)
- Functional programming
- Also supports `map` with multiple lists

**Further reading:**
- [Scheme Documentation - map](https://srfi.schemers.org/srfi-1/srfi-1.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
let numbers = [10, 20, 30, 40, 50]
let mapped = numbers.map { $0 * 2 }
```

**Special features:**
- `map` method for mapping
- Also supports `map` with index
- Closure-based

**Further reading:**
- [Swift Documentation - map](https://developer.apple.com/documentation/swift/array/map(_:)-87n4z)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
const numbers: number[] = [10, 20, 30, 40, 50];
const mapped = numbers.map(n => n * 2);
```

**Special features:**
- `map` method for mapping (since ES5)
- Also supports `map` with index
- Type-safe with TypeScript

**Further reading:**
- [TypeScript Handbook - Array.map](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
Dim numbers() As Integer = {10, 20, 30, 40, 50}
Dim mapped = numbers.Select(Function(n) n * 2).ToArray()
```

**Special features:**
- `Select` method from LINQ
- Also supports `Select` with index
- Type-safe

**Further reading:**
- [Microsoft VB.NET Documentation - Select](https://learn.microsoft.com/en-us/dotnet/api/system.linq.enumerable.select)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Mapping
numbers : List Int
numbers = [1, 2, 3, 4, 5]

doubled : List Int
doubled = map (* 2) numbers  -- [2, 4, 6, 8, 10]
```

**Special features:**
- `map` is defined by the `Functor` interface
- Works with lists, Maybe, and all Functor instances
- Returns a new structure (immutable)

**Further reading:**
- [Idris 2 Documentation - Interfaces](https://idris2.readthedocs.io/en/latest/tutorial/interfaces.html)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
numbers = {1, 2, 3, 4, 5};
doubled = Map[# * 2 &, numbers]  (* {2, 4, 6, 8, 10} *)
(* Kurzform *)
doubled2 = # * 2 & /@ numbers   (* {2, 4, 6, 8, 10} *)
```

**Special features:**
- `Map[f, list]` or `f /@ list` applies f to each element
- `MapThread[f, {list1, list2}]` for parallel mapping
- `MapIndexed[f, list]` for mapping with index

**Further reading:**
- [Wolfram Language Documentation - Map](https://reference.wolfram.com/language/ref/Map.html)

</TabItem>
</Tabs>


## 10.2.4. Reduction / Folding

Reducing a collection to a single value by repeatedly applying a function. Allows combining all elements of a collection into a single result.

### Languages {#sprachen}

<Tabs availableTabs={['clojure', 'common-lisp', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'elixir', 'elm', 'erlang', 'fsharp', 'gleam', 'groovy', 'haskell', 'haxe', 'idris', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'mercury', 'mojo', 'nim', 'ocaml', 'perl', 'php', 'purescript', 'python', 'r', 'racket', 'roc', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'vbnet', 'wolfram-language']} orangeTabs={['c', 'go', 'lua']}>
<TabItem value="c" label="C">

```c
int numbers[] = {10, 20, 30, 40, 50};
int sum = 0;

for (int i = 0; i < 5; i++) {
    sum += numbers[i];
}
```

**Special features:**
- Manual implementation with loop required
- No native reduce function
- Initial value must be set manually

**Further reading:**
- [C Documentation - For Loops](https://en.cppreference.com/w/c/language/for)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
int[] numbers = {10, 20, 30, 40, 50};
var sum = numbers.Aggregate(0, (acc, n) => acc + n);
```

**Special features:**
- `Aggregate` method from LINQ (since C# 3.0)
- Also supports `Sum` for numeric sums
- Initial value as parameter

**Further reading:**
- [Microsoft C# Documentation - Aggregate](https://learn.microsoft.com/en-us/dotnet/api/system.linq.enumerable.aggregate)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
std::vector<int> numbers = {10, 20, 30, 40, 50};
int sum = std::accumulate(numbers.begin(), numbers.end(), 0,
    [](int acc, int n) { return acc + n; });
```

**Special features:**
- `std::accumulate` algorithm
- Also supports `std::reduce` for parallelization (since C++17)
- Initial value as parameter

**Further reading:**
- [cppreference.com - accumulate](https://en.cppreference.com/w/cpp/algorithm/accumulate)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
(def numbers [10 20 30 40 50])
(def sum (reduce + 0 numbers))
```

**Special features:**
- `reduce` function for reduction
- Also supports `reductions` for intermediate results
- Functional programming

**Further reading:**
- [Clojure Documentation - reduce](https://clojuredocs.org/clojure.core/reduce)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
(let ((numbers '(10 20 30 40 50)))
  (reduce #'+ numbers :initial-value 0))
```

**Special features:**
- `reduce` function for reduction
- Also supports `reduce` without initial value
- Functional programming

**Further reading:**
- [Common Lisp HyperSpec - reduce](http://www.lispworks.com/documentation/HyperSpec/Body/f_reduce.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
numbers = [10, 20, 30, 40, 50]
sum = numbers.reduce(0) { |acc, n| acc + n }
```

**Special features:**
- `reduce` method for reduction
- Also supports `sum` for numeric sums
- Block-based

**Further reading:**
- [Crystal Documentation - Enumerable](https://crystal-lang.org/api/1.11.0/Enumerable.html)

</TabItem>
<TabItem value="d" label="D">

```d
int[] numbers = [10, 20, 30, 40, 50];
int sum = numbers.reduce!((a, b) => a + b);
```

**Special features:**
- `reduce` template function
- Also supports `fold` for explicit initial value
- Functional programming

**Further reading:**
- [D Language Documentation - reduce](https://dlang.org/phobos/std_algorithm_iteration.html#reduce)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
var numbers = [10, 20, 30, 40, 50];
var sum = numbers.fold(0, (acc, n) => acc + n);
```

**Special features:**
- `fold` method for reduction
- Also supports `reduce` without initial value
- Initial value as parameter

**Further reading:**
- [Dart Documentation - fold](https://api.dart.dev/stable/dart-core/Iterable/fold.html)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
numbers = [10, 20, 30, 40, 50]
sum = Enum.reduce(numbers, 0, fn n, acc -> acc + n end)
```

**Special features:**
- `Enum.reduce` for reduction
- Also supports `Enum.reduce_while` for conditional reduction
- Functional programming

**Further reading:**
- [Elixir Documentation - Enum.reduce](https://hexdocs.pm/elixir/Enum.html#reduce/3)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
numbers = [10, 20, 30, 40, 50]
sum = List.foldl (+) 0 numbers
```

**Special features:**
- `List.foldl` for left-fold
- Also supports `List.foldr` for right-fold
- Functional programming

**Further reading:**
- [Elm Documentation - List.foldl](https://package.elm-lang.org/packages/elm/core/latest/List#foldl)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
Numbers = [10, 20, 30, 40, 50],
Sum = lists:foldl(fun(N, Acc) -> Acc + N end, 0, Numbers).
```

**Special features:**
- `lists:foldl` for left-fold
- Also supports `lists:foldr` for right-fold
- Functional programming

**Further reading:**
- [Erlang Documentation - lists:foldl](https://www.erlang.org/doc/man/lists.html#foldl-3)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
let numbers = [10; 20; 30; 40; 50]
let sum = List.fold (+) 0 numbers
```

**Special features:**
- `List.fold` for left-fold
- Also supports `List.foldBack` for right-fold
- Functional programming

**Further reading:**
- [F# Documentation - List.fold](https://fsharp.github.io/fsharp-core-docs/reference/fsharp-collections-listmodule.html#fold)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
let numbers = [10, 20, 30, 40, 50]
let sum = list.fold(numbers, 0, fn(acc, n) { acc + n })
```

**Special features:**
- `list.fold` for reduction
- Functional programming
- Type-safe

**Further reading:**
- [Gleam Documentation - list.fold](https://hexdocs.pm/gleam_stdlib/gleam/list.html#fold)

</TabItem>
<TabItem value="go" label="Go">

```go
numbers := []int{10, 20, 30, 40, 50}
sum := 0

for _, n := range numbers {
    sum += n
}
```

**Special features:**
- Manual implementation with loop required
- No native reduce function in standard library
- Initial value must be set manually

**Further reading:**
- [Go Documentation - For Loops](https://go.dev/tour/flowcontrol/1)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
def numbers = [10, 20, 30, 40, 50]
def sum = numbers.inject(0) { acc, n -> acc + n }
```

**Special features:**
- `inject` method for reduction
- Also supports `sum` for numeric sums
- Closure-based

**Further reading:**
- [Groovy Documentation - inject](https://groovy-lang.org/groovy-dev-kit.html#_working_with_collections)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
numbers = [10, 20, 30, 40, 50]
sum = foldl (+) 0 numbers
```

**Special features:**
- `foldl` for left-fold
- Also supports `foldr` for right-fold
- Functional programming

**Further reading:**
- [Haskell Documentation - foldl](https://hackage.haskell.org/package/base/docs/Prelude.html#v:foldl)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Required: using Lambda;
var numbers = [10, 20, 30, 40, 50];
var sum = Lambda.fold(numbers, function(n, acc) return acc + n, 0);
```

**Special features:**
- `Lambda.fold` for reduction (parameters: item, accumulator)
- Requires `using Lambda;` or explicit `Lambda.fold()` call
- Cross-platform

**Further reading:**
- [Haxe Documentation - Lambda.fold](https://api.haxe.org/Lambda.html#fold)

</TabItem>
<TabItem value="java" label="Java">

```java
List<Integer> numbers = Arrays.asList(10, 20, 30, 40, 50);
int sum = numbers.stream()
    .reduce(0, (acc, n) -> acc + n);
```

**Special features:**
- Stream API for reduction (since Java 8)
- Also supports `reduce` without initial value
- Lazy evaluation

**Further reading:**
- [Oracle Java Documentation - Stream.reduce](https://docs.oracle.com/javase/8/docs/api/java/util/stream/Stream.html#reduce-T-java.util.function.BinaryOperator-)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
const numbers = [10, 20, 30, 40, 50];
const sum = numbers.reduce((acc, n) => acc + n, 0);
```

**Special features:**
- `reduce` method for reduction (since ES5)
- Also supports `reduce` without initial value
- Array method

**Further reading:**
- [MDN Web Docs - Array.reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
numbers = [10, 20, 30, 40, 50]
sum = reduce(+, numbers, init=0)
```

**Special features:**
- `reduce` function for reduction
- Also supports `foldl` and `foldr` for direction control
- High performance

**Further reading:**
- [Julia Documentation - reduce](https://docs.julialang.org/en/v1/base/collections/#Base.reduce)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
val numbers = [10, 20, 30, 40, 50]
val sum = numbers.foldl(0, fn(acc, n) acc + n)
// 150

// foldr for right-folding
val product = numbers.foldr(1, fn(n, acc) n * acc)
```

**Special features:**
- `foldl` for left-folding, `foldr` for right-folding
- First parameter is the start value
- Functional higher-order function

**Further reading:**
- [Koka Standard Library - list](https://koka-lang.github.io/koka/doc/std_core_list.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
def numbers : List Nat := [10, 20, 30, 40, 50]

-- Left-folding
def sum := numbers.foldl (· + ·) 0
-- 150

-- Right-folding
def product := numbers.foldr (· * ·) 1
-- 12000000

-- Array folding
def arr : Array Nat := #[10, 20, 30, 40, 50]
def arrSum := arr.foldl (· + ·) 0
-- 150
```

**Special features:**
- `List.foldl` for left-folding, `List.foldr` for right-folding
- Start value as second parameter (for `foldl`) or last (for `foldr`)
- `·` syntax for compact binary operations
- Also available on `Array`

**Further reading:**
- [Lean 4 Documentation - List](https://leanprover-community.github.io/mathlib4_docs/Init/Prelude.html#List)
- [Functional Programming in Lean](https://lean-lang.org/functional_programming_in_lean/)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
Numbers = [10, 20, 30, 40, 50],
Sum = list.foldl((func(N, Acc) = Acc + N), Numbers, 0)
% Sum = 150

% Right-folding
Product = list.foldr((func(N, Acc) = N * Acc), Numbers, 1)
% Product = 3000000
```

**Special features:**
- `list.foldl/3` (function) for left-folding
- `list.foldr/3` (function) for right-folding
- Start value as third parameter
- Also available as predicate variant `list.foldl/4`

**Further reading:**
- [Mercury Standard Library - list](https://www.mercurylang.org/information/doc-release/mercury_library/list.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
val numbers = listOf(10, 20, 30, 40, 50)
val sum = numbers.fold(0) { acc, n -> acc + n }
```

**Special features:**
- `fold` function for reduction
- Also supports `reduce` without initial value
- Functional programming

**Further reading:**
- [Kotlin Documentation - fold](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/fold.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
local numbers = {10, 20, 30, 40, 50}
local sum = 0

for _, n in ipairs(numbers) do
    sum = sum + n
end
```

**Special features:**
- Manual implementation with loop required
- No native reduce function
- Initial value must be set manually

**Further reading:**
- [Lua Documentation - For Loops](https://www.lua.org/manual/5.4/manual.html#3.3.5)

</TabItem>
<TabItem value="mojo" label="Mojo">

```mojo
var numbers = List[Int](10, 20, 30, 40, 50)
var sum = numbers.reduce(lambda acc, n: acc + n, 0)
```

**Special features:**
- `reduce` method for reduction
- Supports lambda expressions
- Python-like syntax

**Further reading:**
- [Mojo Documentation](https://docs.modular.com/mojo)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
var numbers = @[10, 20, 30, 40, 50]
var sum = foldl(numbers, a + b, 0)
```

**Besonderheiten:**
- `foldl` für Left-Fold
- Unterstützt auch `foldr` für Right-Fold
- Funktionale Programmierung

**Weiterführende Links:**
- [Nim Documentation - foldl](https://nim-lang.org/docs/sequtils.html#foldl%2Cseq%2Cuntyped%2Cuntyped)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
let numbers = [10; 20; 30; 40; 50]
let sum = List.fold_left (+) 0 numbers
```

**Special features:**
- `List.fold_left` for left-fold
- Also supports `List.fold_right` for right-fold
- Functional programming

**Further reading:**
- [OCaml Documentation - List.fold_left](https://v2.ocaml.org/api/List.html#VALfold_left)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Required: use List::Util qw(reduce);
my @numbers = (10, 20, 30, 40, 50);
my $sum = reduce { $a + $b } @numbers;
```

**Special features:**
- `reduce` function from `List::Util`
- First element of list serves as initial value
- Also supports `sum` from `List::Util` for numeric sums

**Further reading:**
- [Perl Documentation - List::Util reduce](https://perldoc.perl.org/List::Util#reduce)

</TabItem>
<TabItem value="php" label="PHP">

```php
$numbers = [10, 20, 30, 40, 50];
$sum = array_reduce($numbers, fn($acc, $n) => $acc + $n, 0);
```

**Special features:**
- `array_reduce` function for reduction
- Also supports arrow functions (since PHP 7.4)
- Initial value as parameter

**Further reading:**
- [PHP Documentation - array_reduce](https://www.php.net/manual/en/function.array-reduce.php)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
numbers = [10, 20, 30, 40, 50]
sum = foldl (+) 0 numbers
```

**Besonderheiten:**
- `foldl` für Left-Fold
- Unterstützt auch `foldr` für Right-Fold
- Funktionale Programmierung

**Weiterführende Links:**
- [PureScript Documentation - foldl](https://pursuit.purescript.org/packages/purescript-foldable-traversable/6.0.0/docs/Data.Foldable#v:foldl)

</TabItem>
<TabItem value="python" label="Python">

```python
from functools import reduce
numbers = [10, 20, 30, 40, 50]
sum = reduce(lambda acc, n: acc + n, numbers, 0)
```

**Special features:**
- `reduce` function from functools
- Also supports `sum` for numeric sums
- Initial value as parameter

**Further reading:**
- [Python Documentation - functools.reduce](https://docs.python.org/3/library/functools.html#functools.reduce)

</TabItem>
<TabItem value="r" label="R">

```r
numbers <- c(10, 20, 30, 40, 50)
sum <- Reduce(`+`, numbers, init = 0)
```

**Special features:**
- `Reduce` function for reduction
- Also supports `sum` for numeric sums
- Functional programming

**Further reading:**
- [R Documentation - Reduce](https://www.rdocumentation.org/packages/base/versions/3.6.2/topics/Reduce)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
(define numbers '(10 20 30 40 50))
(define sum (foldl + 0 numbers))
```

**Besonderheiten:**
- `foldl` für Left-Fold
- Unterstützt auch `foldr` für Right-Fold
- Funktionale Programmierung

**Weiterführende Links:**
- [Racket Documentation - foldl](https://docs.racket-lang.org/reference/pairs.html#%28def._%28%28lib._racket%2Fprivate%2Flist..rkt%29._foldl%29%29)

</TabItem>
<TabItem value="roc" label="Roc">

```roc
numbers = [10, 20, 30, 40, 50]
sum = List.fold numbers \acc, n -> acc + n 0
```

**Special features:**
- `List.fold` for reduction
- Functional programming
- Type-safe

**Further reading:**
- [Roc Documentation - List.fold](https://www.roc-lang.org/builtins/List#fold)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
numbers = [10, 20, 30, 40, 50]
sum = numbers.reduce(0) { |acc, n| acc + n }
```

**Special features:**
- `reduce` method for reduction
- Also supports `inject` (alias)
- Block-based

**Further reading:**
- [Ruby Documentation - Array.reduce](https://ruby-doc.org/core-3.1.0/Array.html#method-i-reduce)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
let numbers = vec![10, 20, 30, 40, 50];
let sum = numbers.into_iter()
    .fold(0, |acc, n| acc + n);
```

**Special features:**
- `fold` method for iterator reduction
- Also supports `reduce` without initial value
- Ownership-based

**Further reading:**
- [Rust Documentation - Iterator.fold](https://doc.rust-lang.org/std/iter/trait.Iterator.html#method.fold)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
val numbers = List(10, 20, 30, 40, 50)
val sum = numbers.foldLeft(0)(_ + _)
```

**Special features:**
- `foldLeft` for left-fold
- Also supports `foldRight` for right-fold
- Functional programming

**Further reading:**
- [Scala Documentation - foldLeft](https://www.scala-lang.org/api/current/scala/collection/immutable/List.html#foldLeft%5BB%5D%28z:B%29%28op:%28B,A%29=%3EB%29:B)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
(define numbers '(10 20 30 40 50))
(define sum (fold + 0 numbers))
```

**Special features:**
- `fold` function for reduction (SRFI-1)
- Also supports `fold-right` for right-fold
- Functional programming

**Further reading:**
- [Scheme Documentation - fold](https://srfi.schemers.org/srfi-1/srfi-1.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
let numbers = [10, 20, 30, 40, 50]
let sum = numbers.reduce(0) { $0 + $1 }
```

**Special features:**
- `reduce` method for reduction
- Also supports `reduce` without initial value
- Closure-based

**Further reading:**
- [Swift Documentation - reduce](https://developer.apple.com/documentation/swift/array/reduce(_:_:)-8u3lo)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
const numbers: number[] = [10, 20, 30, 40, 50];
const sum = numbers.reduce((acc, n) => acc + n, 0);
```

**Special features:**
- `reduce` method for reduction (since ES5)
- Also supports `reduce` without initial value
- Type-safe with TypeScript

**Further reading:**
- [TypeScript Handbook - Array.reduce](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
Dim numbers() As Integer = {10, 20, 30, 40, 50}
Dim sum = numbers.Aggregate(0, Function(acc, n) acc + n)
```

**Special features:**
- `Aggregate` method from LINQ
- Also supports `Sum` for numeric sums
- Type-safe

**Further reading:**
- [Microsoft VB.NET Documentation - Aggregate](https://learn.microsoft.com/en-us/dotnet/api/system.linq.enumerable.aggregate)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Folding
numbers : List Int
numbers = [1, 2, 3, 4, 5]

total : Int
total = foldl (+) 0 numbers  -- 15

product : Int
product = foldl (*) 1 numbers  -- 120
```

**Special features:**
- `foldl` for left-folding, `foldr` for right-folding
- Defined by the `Foldable` interface
- Works with lists and all Foldable instances

**Further reading:**
- [Idris 2 Documentation - Interfaces](https://idris2.readthedocs.io/en/latest/tutorial/interfaces.html)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
numbers = {1, 2, 3, 4, 5};
sum = Fold[Plus, 0, numbers]        (* 15 *)
product = Fold[Times, 1, numbers]   (* 120 *)
```

**Special features:**
- `Fold[f, init, list]` folds from left
- `FoldList[f, init, list]` returns all intermediate values
- `Total[list]` as specialized sum function

**Further reading:**
- [Wolfram Language Documentation - Fold](https://reference.wolfram.com/language/ref/Fold.html)

</TabItem>
</Tabs>


## 10.2.5. Searching

Searching for one or more elements in a collection. Allows checking if an element is present or finding its position.

### Languages {#sprachen}

<Tabs availableTabs={['clojure', 'common-lisp', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'elixir', 'elm', 'erlang', 'fsharp', 'groovy', 'haskell', 'haxe', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'mercury', 'mojo', 'nim', 'ocaml', 'perl', 'php', 'purescript', 'python', 'r', 'racket', 'roc', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'vbnet', 'wolfram-language']} yellowTabs={['gleam']} orangeTabs={['c', 'go', 'lua']}>
<TabItem value="c" label="C">

```c
int numbers[] = {10, 20, 30, 40, 50};
int target = 30;
int found = 0;

for (int i = 0; i < 5; i++) {
    if (numbers[i] == target) {
        found = 1;
        break;
    }
}
```

**Special features:**
- Manual implementation with loop required
- No native search function
- Index must be tracked manually

**Further reading:**
- [C Documentation - For Loops](https://en.cppreference.com/w/c/language/for)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
int[] numbers = {10, 20, 30, 40, 50};
bool found = numbers.Contains(30);
int index = Array.IndexOf(numbers, 30);
```

**Special features:**
- `Contains` for existence check
- `Array.IndexOf` for index search
- Also supports `Find` for predicate search

**Further reading:**
- [Microsoft C# Documentation - Array.IndexOf](https://learn.microsoft.com/en-us/dotnet/api/system.array.indexof)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
std::vector<int> numbers = {10, 20, 30, 40, 50};
bool found = std::find(numbers.begin(), numbers.end(), 30) != numbers.end();
auto it = std::find(numbers.begin(), numbers.end(), 30);
int index = std::distance(numbers.begin(), it);
```

**Special features:**
- `std::find` algorithm for search
- Also supports `std::find_if` for predicate search
- Returns iterator

**Further reading:**
- [cppreference.com - find](https://en.cppreference.com/w/cpp/algorithm/find)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
(def numbers [10 20 30 40 50])
(def found (some #(= % 30) numbers))
(def index (.indexOf numbers 30))
```

**Special features:**
- `some` for existence check
- `.indexOf` for index search
- Also supports `filter` for multiple matches

**Further reading:**
- [Clojure Documentation - some](https://clojuredocs.org/clojure.core/some)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
(let ((numbers '(10 20 30 40 50)))
  (position 30 numbers))
```

**Special features:**
- `position` for index search
- Also supports `find` for element search
- Returns `nil` if not found

**Further reading:**
- [Common Lisp HyperSpec - position](http://www.lispworks.com/documentation/HyperSpec/Body/f_posit.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
numbers = [10, 20, 30, 40, 50]
found = numbers.includes?(30)
index = numbers.index(30)
```

**Special features:**
- `includes?` for existence check
- `index` for index search
- Also supports `find` for predicate search

**Further reading:**
- [Crystal Documentation - Enumerable](https://crystal-lang.org/api/1.11.0/Enumerable.html)

</TabItem>
<TabItem value="d" label="D">

```d
int[] numbers = [10, 20, 30, 40, 50];
bool found = numbers.canFind(30);
size_t index = numbers.countUntil!(n => n == 30);
```

**Special features:**
- `canFind` for existence check
- `countUntil` for index search
- Also supports `find` for element search

**Further reading:**
- [D Language Documentation - canFind](https://dlang.org/phobos/std_algorithm_searching.html#canFind)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
var numbers = [10, 20, 30, 40, 50];
bool found = numbers.contains(30);
int index = numbers.indexOf(30);
```

**Special features:**
- `contains` for existence check
- `indexOf` for index search
- Also supports `firstWhere` for predicate search

**Further reading:**
- [Dart Documentation - contains](https://api.dart.dev/stable/dart-core/List/contains.html)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
numbers = [10, 20, 30, 40, 50]
found = Enum.member?(numbers, 30)
index = Enum.find_index(numbers, fn n -> n == 30 end)
```

**Special features:**
- `Enum.member?` for existence check
- `Enum.find_index` for index search
- Also supports `Enum.find` for element search

**Further reading:**
- [Elixir Documentation - Enum.member?](https://hexdocs.pm/elixir/Enum.html#member?/2)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
numbers = [10, 20, 30, 40, 50]

-- Existence check
found = List.member 30 numbers  -- True

-- Find first element that satisfies a condition
-- Required: import List.Extra (elm-community/list-extra)
-- found = List.Extra.find (\n -> n > 25) numbers

-- With core functions: Filter + Head
firstOver25 = List.filter (\n -> n > 25) numbers |> List.head
-- Just 30
```

**Special features:**
- `List.member` for existence check (in core module)
- Index-based search not in core module
- `List.filter` + `List.head` as core alternative for element search
- Community package `elm-community/list-extra` provides extended search functions

**Further reading:**
- [Elm Documentation - List.member](https://package.elm-lang.org/packages/elm/core/latest/List#member)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
Numbers = [10, 20, 30, 40, 50],
Found = lists:member(30, Numbers),
Index = case lists:keyfind(30, 1, lists:zip(lists:seq(1, length(Numbers)), Numbers)) of
    false -> not_found;
    {Pos, _} -> Pos - 1
end.
```

**Special features:**
- `lists:member` for existence check
- Index search requires manual implementation
- Also supports `lists:keyfind` for structured search

**Further reading:**
- [Erlang Documentation - lists:member](https://www.erlang.org/doc/man/lists.html#member-2)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
let numbers = [10; 20; 30; 40; 50]
let found = List.contains 30 numbers
let index = List.findIndex (fun n -> n = 30) numbers
```

**Special features:**
- `List.contains` for existence check
- `List.findIndex` for index search
- Also supports `List.find` for element search

**Further reading:**
- [F# Documentation - List.contains](https://fsharp.github.io/fsharp-core-docs/reference/fsharp-collections-listmodule.html#contains)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
let numbers = [10, 20, 30, 40, 50]
let found = list.contains(numbers, 30)  // True
let result = list.find(numbers, fn(n) { n == 30 })  // Ok(30)
```

**Special features:**
- `list.contains` for existence check
- `list.find` for search with predicate, returns `Result`
- No `list.index_of` - index-based search is not idiomatic

**Further reading:**
- [Gleam Documentation - list.find](https://hexdocs.pm/gleam_stdlib/gleam/list.html#find)

</TabItem>
<TabItem value="go" label="Go">

```go
numbers := []int{10, 20, 30, 40, 50}
target := 30
found := false
index := -1

for i, n := range numbers {
    if n == target {
        found = true
        index = i
        break
    }
}
```

**Special features:**
- Manual implementation with loop required
- No native search function in standard library
- Index must be tracked manually

**Further reading:**
- [Go Documentation - For Loops](https://go.dev/tour/flowcontrol/1)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
def numbers = [10, 20, 30, 40, 50]
def found = numbers.contains(30)
def index = numbers.indexOf(30)
```

**Special features:**
- `contains` for existence check
- `indexOf` for index search
- Also supports `find` for predicate search

**Further reading:**
- [Groovy Documentation - contains](https://groovy-lang.org/groovy-dev-kit.html#_working_with_collections)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
numbers = [10, 20, 30, 40, 50]
found = 30 `elem` numbers
index = case elemIndex 30 numbers of
    Just i -> i
    Nothing -> -1
```

**Besonderheiten:**
- `elem` für Existenzprüfung
- `elemIndex` für Index-Suche (gibt Maybe zurück)
- Funktionale Programmierung

**Weiterführende Links:**
- [Haskell Documentation - elem](https://hackage.haskell.org/package/base/docs/Prelude.html#v:elem)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
var numbers = [10, 20, 30, 40, 50];
var found = numbers.indexOf(30) != -1;
var index = numbers.indexOf(30);
```

**Special features:**
- `indexOf` for index search
- Existence check by comparison with -1
- Cross-platform

**Further reading:**
- [Haxe Documentation - Array.indexOf](https://api.haxe.org/Array.html#indexOf)

</TabItem>
<TabItem value="java" label="Java">

```java
List<Integer> numbers = Arrays.asList(10, 20, 30, 40, 50);
boolean found = numbers.contains(30);
int index = numbers.indexOf(30);
```

**Special features:**
- `contains` for existence check
- `indexOf` for index search
- Also supports Stream API for predicate search

**Further reading:**
- [Oracle Java Documentation - List.contains](https://docs.oracle.com/javase/8/docs/api/java/util/List.html#contains-java.lang.Object-)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
const numbers = [10, 20, 30, 40, 50];
const found = numbers.includes(30);
const index = numbers.indexOf(30);
```

**Special features:**
- `includes` for existence check (since ES2016)
- `indexOf` for index search (since ES5)
- Also supports `find` for predicate search

**Further reading:**
- [MDN Web Docs - Array.includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
numbers = [10, 20, 30, 40, 50]
found = 30 in numbers
index = findfirst(n -> n == 30, numbers)
```

**Special features:**
- `in` for existence check
- `findfirst` for index search
- Also supports `findall` for multiple matches

**Further reading:**
- [Julia Documentation - findfirst](https://docs.julialang.org/en/v1/base/collections/#Base.findfirst)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
val numbers = [10, 20, 30, 40, 50]

// Existence check
val has30 = numbers.any(fn(n) n == 30)
// True

// Search for first match
val found = numbers.find(fn(n) n > 25)
// Just(30)

// Check all elements
val allPositive = numbers.all(fn(n) n > 0)
// True
```

**Special features:**
- `find` returns `maybe<a>` (Just or Nothing)
- `any` and `all` for existence/universal check
- Functional higher-order functions

**Further reading:**
- [Koka Standard Library - list](https://koka-lang.github.io/koka/doc/std_core_list.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
def numbers : List Nat := [10, 20, 30, 40, 50]

-- Search for first match
def found := numbers.find? (· > 25)
-- some 30

-- Existence check
def has30 := numbers.any (· == 30)
-- true

-- Check all elements
def allPositive := numbers.all (· > 0)
-- true

-- Element contained
def contains30 := numbers.contains 30
-- true

-- Find index
def idx := numbers.findIdx? (· > 25)
-- some 2
```

**Special features:**
- `List.find?` returns `Option α` (`some` or `none`)
- `List.any` and `List.all` for existence/universal check
- `List.contains` for simple containment check
- `List.findIdx?` returns the index of the first match

**Further reading:**
- [Lean 4 Documentation - List](https://leanprover-community.github.io/mathlib4_docs/Init/Prelude.html#List)
- [Functional Programming in Lean](https://lean-lang.org/functional_programming_in_lean/)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
Numbers = [10, 20, 30, 40, 50],

% Existence check
( list.member(30, Numbers) ->
    Found = yes
;
    Found = no
),

% Search with predicate
( list.find_first_match(
      (pred(N::in) is semidet :- N > 25),
      Numbers, Match) ->
    % Match = 30
    true
;
    true
)
```

**Special features:**
- `list.member/2` for existence check (`semidet` – can fail)
- `list.find_first_match/3` for search with predicate
- No `indexOf` – index-based search is not idiomatic
- If-Then-Else with `( Cond -> Then ; Else )` for semidet predicates

**Further reading:**
- [Mercury Standard Library - list](https://www.mercurylang.org/information/doc-release/mercury_library/list.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
val numbers = listOf(10, 20, 30, 40, 50)
val found = numbers.contains(30)
val index = numbers.indexOf(30)
```

**Special features:**
- `contains` for existence check
- `indexOf` for index search
- Also supports `find` for predicate search

**Further reading:**
- [Kotlin Documentation - contains](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/contains.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
local numbers = {10, 20, 30, 40, 50}
local target = 30
local found = false
local index = nil

for i, n in ipairs(numbers) do
    if n == target then
        found = true
        index = i
        break
    end
end
```

**Special features:**
- Manual implementation with loop required
- No native search function
- Index must be tracked manually

**Further reading:**
- [Lua Documentation - For Loops](https://www.lua.org/manual/5.4/manual.html#3.3.5)

</TabItem>
<TabItem value="mojo" label="Mojo">

```mojo
var numbers = List[Int](10, 20, 30, 40, 50)
var found = 30 in numbers
var index = numbers.index(30)
```

**Special features:**
- `in` for existence check
- `index` for index search
- Python-like syntax

**Further reading:**
- [Mojo Documentation](https://docs.modular.com/mojo)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
var numbers = @[10, 20, 30, 40, 50]
var found = 30 in numbers
var index = numbers.find(30)
```

**Special features:**
- `in` for existence check
- `find` for index search
- Also supports `find` with predicate

**Further reading:**
- [Nim Documentation - find](https://nim-lang.org/docs/sequtils.html#find%2Cseq%2Cuntyped)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
let numbers = [10; 20; 30; 40; 50]
let found = List.mem 30 numbers
let index = List.find_index (fun n -> n = 30) numbers
```

**Special features:**
- `List.mem` for existence check
- `List.find_index` for index search (returns Option)
- Functional programming

**Further reading:**
- [OCaml Documentation - List.mem](https://v2.ocaml.org/api/List.html#VALmem)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
my @numbers = (10, 20, 30, 40, 50);
my $found = grep { $_ == 30 } @numbers;
my $index = first_index { $_ == 30 } @numbers;
```

**Special features:**
- `grep` for existence check
- `first_index` from List::MoreUtils for index search
- Perl-idiomatic

**Further reading:**
- [Perl Documentation - grep](https://perldoc.perl.org/functions/grep)

</TabItem>
<TabItem value="php" label="PHP">

```php
$numbers = [10, 20, 30, 40, 50];
$found = in_array(30, $numbers);
$index = array_search(30, $numbers);
```

**Special features:**
- `in_array` for existence check
- `array_search` for index search
- Also supports strict type checking

**Further reading:**
- [PHP Documentation - in_array](https://www.php.net/manual/en/function.in-array.php)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
numbers = [10, 20, 30, 40, 50]
found = elem 30 numbers
index = elemIndex 30 numbers
```

**Besonderheiten:**
- `elem` für Existenzprüfung
- `elemIndex` für Index-Suche (gibt Maybe zurück)
- Funktionale Programmierung

**Weiterführende Links:**
- [PureScript Documentation - elem](https://pursuit.purescript.org/packages/purescript-lists/6.0.0/docs/Data.List#v:elem)

</TabItem>
<TabItem value="python" label="Python">

```python
numbers = [10, 20, 30, 40, 50]
found = 30 in numbers
index = numbers.index(30)
```

**Special features:**
- `in` for existence check
- `index` for index search
- Also supports `find` for predicate search

**Further reading:**
- [Python Documentation - list.index](https://docs.python.org/3/tutorial/datastructures.html#more-on-lists)

</TabItem>
<TabItem value="r" label="R">

```r
numbers <- c(10, 20, 30, 40, 50)
found <- 30 %in% numbers
index <- match(30, numbers)
```

**Special features:**
- `%in%` for existence check
- `match` for index search
- Vectorized when possible

**Further reading:**
- [R Documentation - match](https://www.rdocumentation.org/packages/base/versions/3.6.2/topics/match)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
(define numbers '(10 20 30 40 50))
(define found (member 30 numbers))
(define index (index-of numbers 30))
```

**Special features:**
- `member` for existence check
- `index-of` for index search
- Also supports `find` for predicate search

**Further reading:**
- [Racket Documentation - member](https://docs.racket-lang.org/reference/pairs.html#%28def._%28%28lib._racket%2Fprivate%2Flist..rkt%29._member%29%29)

</TabItem>
<TabItem value="roc" label="Roc">

```roc
numbers = [10, 20, 30, 40, 50]
found = List.contains numbers 30
index = List.index_of numbers 30
```

**Special features:**
- `List.contains` for existence check
- `List.index_of` for index search
- Type-safe

**Further reading:**
- [Roc Documentation - List.contains](https://www.roc-lang.org/builtins/List#contains)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
numbers = [10, 20, 30, 40, 50]
found = numbers.include?(30)
index = numbers.index(30)
```

**Special features:**
- `include?` for existence check
- `index` for index search
- Also supports `find` for predicate search

**Further reading:**
- [Ruby Documentation - Array.include?](https://ruby-doc.org/core-3.1.0/Array.html#method-i-include-3F)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
let numbers = vec![10, 20, 30, 40, 50];
let found = numbers.contains(&30);
let index = numbers.iter().position(|&n| n == 30);
```

**Special features:**
- `contains` for existence check
- `position` for index search (returns Option)
- Ownership-based

**Further reading:**
- [Rust Documentation - Vec.contains](https://doc.rust-lang.org/std/vec/struct.Vec.html#method.contains)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
val numbers = List(10, 20, 30, 40, 50)
val found = numbers.contains(30)
val index = numbers.indexOf(30)
```

**Special features:**
- `contains` for existence check
- `indexOf` for index search
- Also supports `find` for predicate search

**Further reading:**
- [Scala Documentation - contains](https://www.scala-lang.org/api/current/scala/collection/immutable/List.html#contains%28elem:A%29:Boolean)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
(define numbers '(10 20 30 40 50))
(define found (member 30 numbers))
(define index (list-index (lambda (n) (= n 30)) numbers))
```

**Special features:**
- `member` for existence check
- `list-index` for index search (SRFI-1)
- Functional programming

**Further reading:**
- [Scheme Documentation - member](https://srfi.schemers.org/srfi-1/srfi-1.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
let numbers = [10, 20, 30, 40, 50]
let found = numbers.contains(30)
let index = numbers.firstIndex(of: 30)
```

**Special features:**
- `contains` for existence check
- `firstIndex` for index search (returns Optional)
- Also supports `first` for element search

**Further reading:**
- [Swift Documentation - contains](https://developer.apple.com/documentation/swift/array/contains(_:)-1h4k1)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
const numbers: number[] = [10, 20, 30, 40, 50];
const found = numbers.includes(30);
const index = numbers.indexOf(30);
```

**Special features:**
- `includes` for existence check (since ES2016)
- `indexOf` for index search (since ES5)
- Type-safe with TypeScript

**Further reading:**
- [TypeScript Handbook - Array.includes](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
Dim numbers() As Integer = {10, 20, 30, 40, 50}
Dim found = numbers.Contains(30)
Dim index = Array.IndexOf(numbers, 30)
```

**Special features:**
- `Contains` for existence check
- `Array.IndexOf` for index search
- Type-safe

**Further reading:**
- [Microsoft VB.NET Documentation - Array.IndexOf](https://learn.microsoft.com/en-us/dotnet/api/system.array.indexof)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
items = {"Apfel", "Banane", "Kirsche"};
found = MemberQ[items, "Banane"]         (* True *)
pos = Position[items, "Banane"]          (* {{2}} *)
first = FirstCase[items, "Banane"]       (* "Banane" *)
```

**Special features:**
- `MemberQ[list, elem]` checks membership
- `Position[list, elem]` returns position
- `FirstCase[list, pattern]` finds first match

**Further reading:**
- [Wolfram Language Documentation - MemberQ](https://reference.wolfram.com/language/ref/MemberQ.html)

</TabItem>
</Tabs>


## 10.2.6. Sorting

Arranging the elements of a collection in a specific order. Allows sorting elements by a criterion to make them easier to search or process.

### Languages {#sprachen}

<Tabs availableTabs={['c', 'clojure', 'common-lisp', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'elixir', 'elm', 'erlang', 'fsharp', 'gleam', 'go', 'groovy', 'haskell', 'haxe', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'mercury', 'lua', 'mojo', 'nim', 'ocaml', 'perl', 'php', 'purescript', 'python', 'r', 'racket', 'roc', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'vbnet', 'wolfram-language']}>
<TabItem value="c" label="C">

```c
int numbers[] = {50, 20, 40, 10, 30};
int length = sizeof(numbers) / sizeof(numbers[0]);

qsort(numbers, length, sizeof(int), 
    (int (*)(const void *, const void *))compare);

int compare(const void *a, const void *b) {
    return (*(int*)a - *(int*)b);
}
```

**Special features:**
- `qsort` function from stdlib.h
- Requires comparison function
- In-place sorting

**Further reading:**
- [C Documentation - qsort](https://en.cppreference.com/w/c/algorithm/qsort)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
int[] numbers = {50, 20, 40, 10, 30};
Array.Sort(numbers);
```

**Special features:**
- `Array.Sort` for in-place sorting
- Also supports `OrderBy` for LINQ (since C# 3.0)
- Also supports custom comparison functions

**Further reading:**
- [Microsoft C# Documentation - Array.Sort](https://learn.microsoft.com/en-us/dotnet/api/system.array.sort)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
std::vector<int> numbers = {50, 20, 40, 10, 30};
std::sort(numbers.begin(), numbers.end());
```

**Special features:**
- `std::sort` algorithm
- Also supports custom comparison functions
- In-place sorting

**Further reading:**
- [cppreference.com - sort](https://en.cppreference.com/w/cpp/algorithm/sort)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
(def numbers [50 20 40 10 30])
(def sorted (sort numbers))
```

**Special features:**
- `sort` function for sorting
- Also supports `sort-by` for custom sorting
- Creates new collection

**Further reading:**
- [Clojure Documentation - sort](https://clojuredocs.org/clojure.core/sort)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
(let ((numbers '(50 20 40 10 30)))
  (sort (copy-list numbers) #'<))
```

**Special features:**
- `sort` function for in-place sorting
- Also supports custom comparison functions
- Modifies the original list

**Further reading:**
- [Common Lisp HyperSpec - sort](http://www.lispworks.com/documentation/HyperSpec/Body/f_sort_.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
numbers = [50, 20, 40, 10, 30]
sorted = numbers.sort
```

**Special features:**
- `sort` method for sorting
- Also supports `sort_by` for custom sorting
- Creates new collection

**Further reading:**
- [Crystal Documentation - Enumerable](https://crystal-lang.org/api/1.11.0/Enumerable.html)

</TabItem>
<TabItem value="d" label="D">

```d
int[] numbers = [50, 20, 40, 10, 30];
numbers.sort();
```

**Special features:**
- `sort` method for in-place sorting
- Also supports custom comparison functions
- Modifies the original collection

**Further reading:**
- [D Language Documentation - sort](https://dlang.org/phobos/std_algorithm_sorting.html#sort)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
var numbers = [50, 20, 40, 10, 30];
numbers.sort();
```

**Special features:**
- `sort` method for in-place sorting
- Also supports custom comparison functions
- Modifies the original collection

**Further reading:**
- [Dart Documentation - sort](https://api.dart.dev/stable/dart-core/List/sort.html)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
numbers = [50, 20, 40, 10, 30]
sorted = Enum.sort(numbers)
```

**Special features:**
- `Enum.sort` for sorting
- Also supports `Enum.sort_by` for custom sorting
- Creates new collection

**Further reading:**
- [Elixir Documentation - Enum.sort](https://hexdocs.pm/elixir/Enum.html#sort/1)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
numbers = [50, 20, 40, 10, 30]
sorted = List.sort numbers
```

**Besonderheiten:**
- `List.sort` für Sortierung
- Unterstützt auch `List.sortBy` für benutzerdefinierte Sortierung
- Funktionale Programmierung

**Weiterführende Links:**
- [Elm Documentation - List.sort](https://package.elm-lang.org/packages/elm/core/latest/List#sort)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
Numbers = [50, 20, 40, 10, 30],
Sorted = lists:sort(Numbers).
```

**Special features:**
- `lists:sort` for sorting
- Also supports `lists:sort` with custom function
- Functional programming

**Further reading:**
- [Erlang Documentation - lists:sort](https://www.erlang.org/doc/man/lists.html#sort-1)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
let numbers = [50; 20; 40; 10; 30]
let sorted = List.sort numbers
```

**Besonderheiten:**
- `List.sort` für Sortierung
- Unterstützt auch `List.sortBy` für benutzerdefinierte Sortierung
- Funktionale Programmierung

**Weiterführende Links:**
- [F# Documentation - List.sort](https://fsharp.github.io/fsharp-core-docs/reference/fsharp-collections-listmodule.html#sort)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// Required: import gleam/int
let numbers = [50, 20, 40, 10, 30]
let sorted = list.sort(numbers, int.compare)
```

**Special features:**
- `list.sort` requires a comparison function
- `int.compare`, `float.compare`, `string.compare` for standard comparisons
- Functional sorting, returns new list

**Further reading:**
- [Gleam Documentation - list.sort](https://hexdocs.pm/gleam_stdlib/gleam/list.html#sort)

</TabItem>
<TabItem value="go" label="Go">

```go
import "sort"
numbers := []int{50, 20, 40, 10, 30}
sort.Ints(numbers)
```

**Special features:**
- `sort.Ints` for in-place sorting
- Also supports `sort.Slice` for custom sorting
- Modifies the original collection

**Further reading:**
- [Go Documentation - sort](https://pkg.go.dev/sort)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
def numbers = [50, 20, 40, 10, 30]
def sorted = numbers.sort()
```

**Special features:**
- `sort` method for in-place sorting
- Also supports `sort` with closure
- Modifies the original collection

**Further reading:**
- [Groovy Documentation - sort](https://groovy-lang.org/groovy-dev-kit.html#_working_with_collections)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
numbers = [50, 20, 40, 10, 30]
sorted = sort numbers
```

**Special features:**
- `sort` function for sorting
- Also supports `sortBy` for custom sorting
- Functional programming

**Further reading:**
- [Haskell Documentation - sort](https://hackage.haskell.org/package/base/docs/Data-List.html#v:sort)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
var numbers = [50, 20, 40, 10, 30];
numbers.sort(function(a, b) return a - b);
```

**Special features:**
- `sort` method for in-place sorting
- Requires comparison function
- Modifies the original collection

**Further reading:**
- [Haxe Documentation - Array.sort](https://api.haxe.org/Array.html#sort)

</TabItem>
<TabItem value="java" label="Java">

```java
List<Integer> numbers = Arrays.asList(50, 20, 40, 10, 30);
Collections.sort(numbers);
```

**Special features:**
- `Collections.sort` for in-place sorting
- Also supports `List.sort` (since Java 8)
- Modifies the original collection

**Further reading:**
- [Oracle Java Documentation - Collections.sort](https://docs.oracle.com/javase/8/docs/api/java/util/Collections.html#sort-java.util.List-)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
const numbers = [50, 20, 40, 10, 30];
numbers.sort((a, b) => a - b);
```

**Special features:**
- `sort` method for in-place sorting
- Requires comparison function for numeric sorting
- Modifies the original collection

**Further reading:**
- [MDN Web Docs - Array.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
numbers = [50, 20, 40, 10, 30]
sorted = sort(numbers)
```

**Special features:**
- `sort` function for sorting
- Also supports `sort!` for in-place sorting
- High performance

**Further reading:**
- [Julia Documentation - sort](https://docs.julialang.org/en/v1/base/sort/#Base.sort)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
val numbers = [50, 20, 40, 10, 30]
val sorted = numbers.sort()
// [10, 20, 30, 40, 50]

// Custom sorting
val descending = numbers.sort-by(fn(a, b) b.compare(a))
// [50, 40, 30, 20, 10]
```

**Special features:**
- `sort` sorts ascending (returns new list)
- `sort-by` for custom comparison function
- Immutable – original list remains unchanged

**Further reading:**
- [Koka Standard Library - list](https://koka-lang.github.io/koka/doc/std_core_list.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
def numbers : List Nat := [50, 20, 40, 10, 30]

-- Sort list (Merge Sort)
def sorted := numbers.mergeSort
-- [10, 20, 30, 40, 50]

-- Custom sorting (descending)
def descending := numbers.mergeSort (· > ·)
-- [50, 40, 30, 20, 10]

-- Sort array (in-place optimized)
def arr : Array Nat := #[50, 20, 40, 10, 30]
def sortedArr := arr.qsort (· < ·)
-- #[10, 20, 30, 40, 50]
```

**Special features:**
- `List.mergeSort` for stable sorting (returns new list)
- `Array.qsort` for array sorting (optimized with unique reference)
- Custom comparison function as parameter
- Immutable – original list remains unchanged

**Further reading:**
- [Lean 4 Documentation - List](https://leanprover-community.github.io/mathlib4_docs/Init/Prelude.html#List)
- [Lean 4 Documentation - Array](https://lean-lang.org/lean4/doc/array.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
Numbers = [50, 20, 40, 10, 30],
list.sort(Numbers, Sorted)
% Sorted = [10, 20, 30, 40, 50]

% Custom sorting (descending)
list.sort((pred(X::in, Y::in, R::out) is det :-
    compare(R, Y, X)), Numbers, Descending)
% Descending = [50, 40, 30, 20, 10]
```

**Special features:**
- `list.sort/2` sorts with standard comparison (`compare`)
- `list.sort/3` with custom comparison function
- Creates new list (immutable)
- Stable sorting (Merge Sort)

**Further reading:**
- [Mercury Standard Library - list](https://www.mercurylang.org/information/doc-release/mercury_library/list.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
val numbers = mutableListOf(50, 20, 40, 10, 30)
numbers.sort()
```

**Special features:**
- `sort` method for in-place sorting
- Also supports `sorted` for new collection
- Modifies the original collection

**Further reading:**
- [Kotlin Documentation - sort](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/sort.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
local numbers = {50, 20, 40, 10, 30}
table.sort(numbers)
```

**Special features:**
- `table.sort` for in-place sorting
- Also supports custom comparison functions
- Modifies the original collection

**Further reading:**
- [Lua Documentation - table.sort](https://www.lua.org/manual/5.4/manual.html#pdf-table.sort)

</TabItem>
<TabItem value="mojo" label="Mojo">

```mojo
var numbers = List[Int](50, 20, 40, 10, 30)
numbers.sort()
```

**Special features:**
- `sort` method for in-place sorting
- Also supports custom comparison functions
- Python-like syntax

**Further reading:**
- [Mojo Documentation](https://docs.modular.com/mojo)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
var numbers = @[50, 20, 40, 10, 30]
numbers.sort()
```

**Special features:**
- `sort` function for in-place sorting
- Also supports custom comparison functions
- Modifies the original collection

**Further reading:**
- [Nim Documentation - sort](https://nim-lang.org/docs/algorithm.html#sort%2CopenArray%5BT%5D)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
let numbers = [50; 20; 40; 10; 30]
let sorted = List.sort compare numbers
```

**Special features:**
- `List.sort` for sorting
- Requires comparison function
- Functional programming

**Further reading:**
- [OCaml Documentation - List.sort](https://v2.ocaml.org/api/List.html#VALsort)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
my @numbers = (50, 20, 40, 10, 30);
@numbers = sort { $a <=> $b } @numbers;
```

**Special features:**
- `sort` function for sorting
- Also supports custom comparison functions
- Creates new list

**Further reading:**
- [Perl Documentation - sort](https://perldoc.perl.org/functions/sort)

</TabItem>
<TabItem value="php" label="PHP">

```php
$numbers = [50, 20, 40, 10, 30];
sort($numbers);
```

**Special features:**
- `sort` function for in-place sorting
- Also supports custom comparison functions
- Modifies the original collection

**Further reading:**
- [PHP Documentation - sort](https://www.php.net/manual/en/function.sort.php)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
numbers = [50, 20, 40, 10, 30]
sorted = sort numbers
```

**Special features:**
- `sort` function for sorting
- Also supports `sortBy` for custom sorting
- Functional programming

**Further reading:**
- [PureScript Documentation - sort](https://pursuit.purescript.org/packages/purescript-lists/6.0.0/docs/Data.List#v:sort)

</TabItem>
<TabItem value="python" label="Python">

```python
numbers = [50, 20, 40, 10, 30]
numbers.sort()
```

**Special features:**
- `sort` method for in-place sorting
- Also supports `sorted` for new list
- Modifies the original collection

**Further reading:**
- [Python Documentation - list.sort](https://docs.python.org/3/library/stdtypes.html#list.sort)

</TabItem>
<TabItem value="r" label="R">

```r
numbers <- c(50, 20, 40, 10, 30)
sorted <- sort(numbers)
```

**Special features:**
- `sort` function for sorting
- Also supports `order` for index sorting
- Creates new vector

**Further reading:**
- [R Documentation - sort](https://www.rdocumentation.org/packages/base/versions/3.6.2/topics/sort)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
(define numbers '(50 20 40 10 30))
(define sorted (sort numbers <))
```

**Special features:**
- `sort` function for sorting
- Requires comparison function
- Functional programming

**Further reading:**
- [Racket Documentation - sort](https://docs.racket-lang.org/reference/pairs.html#%28def._%28%28lib._racket%2Fprivate%2Flist..rkt%29._sort%29%29)

</TabItem>
<TabItem value="roc" label="Roc">

```roc
numbers = [50, 20, 40, 10, 30]
sorted = List.sort numbers
```

**Special features:**
- `List.sort` for sorting
- Functional programming
- Type-safe

**Further reading:**
- [Roc Documentation - List.sort](https://www.roc-lang.org/builtins/List#sort)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
numbers = [50, 20, 40, 10, 30]
numbers.sort!
```

**Special features:**
- `sort!` for in-place sorting
- Also supports `sort` for new array
- Modifies the original collection

**Further reading:**
- [Ruby Documentation - Array.sort!](https://ruby-doc.org/core-3.1.0/Array.html#method-i-sort-21)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
let mut numbers = vec![50, 20, 40, 10, 30];
numbers.sort();
```

**Special features:**
- `sort` method for in-place sorting
- Also supports `sort_by` for custom sorting
- Modifies the original collection

**Further reading:**
- [Rust Documentation - Vec.sort](https://doc.rust-lang.org/std/vec/struct.Vec.html#method.sort)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
val numbers = List(50, 20, 40, 10, 30)
val sorted = numbers.sorted
```

**Special features:**
- `sorted` method for sorting
- Also supports `sortBy` for custom sorting
- Creates new collection

**Further reading:**
- [Scala Documentation - sorted](https://www.scala-lang.org/api/current/scala/collection/immutable/List.html#sorted%5BB%3E:A%5D%28implicitord:Ordering%5BB%5D%29:List%5BA%5D)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
(define numbers '(50 20 40 10 30))
(define sorted (sort numbers <))
```

**Special features:**
- `sort` function for sorting (SRFI-95)
- Requires comparison function
- Functional programming

**Further reading:**
- [Scheme Documentation - sort](https://srfi.schemers.org/srfi-95/srfi-95.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
var numbers = [50, 20, 40, 10, 30]
numbers.sort()
```

**Special features:**
- `sort` method for in-place sorting
- Also supports `sorted` for new array
- Modifies the original collection

**Further reading:**
- [Swift Documentation - sort](https://developer.apple.com/documentation/swift/array/sort())

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
const numbers: number[] = [50, 20, 40, 10, 30];
numbers.sort((a, b) => a - b);
```

**Special features:**
- `sort` method for in-place sorting (since ES5)
- Requires comparison function for numeric sorting
- Type-safe with TypeScript

**Further reading:**
- [TypeScript Handbook - Array.sort](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
Dim numbers() As Integer = {50, 20, 40, 10, 30}
Array.Sort(numbers)
```

**Special features:**
- `Array.Sort` for in-place sorting
- Also supports custom comparison functions
- Modifies the original collection

**Further reading:**
- [Microsoft VB.NET Documentation - Array.Sort](https://learn.microsoft.com/en-us/dotnet/api/system.array.sort)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
numbers = {3, 1, 4, 1, 5, 9};
sorted = Sort[numbers]                     (* {1, 1, 3, 4, 5, 9} *)
reversed = ReverseSort[numbers]            (* {9, 5, 4, 3, 1, 1} *)
sortedBy = SortBy[{"Banana", "Apple"}, StringLength]  (* {"Apple", "Banana"} *)
```

**Special features:**
- `Sort[list]` sorts ascending
- `SortBy[list, f]` sorts by key function
- `ReverseSort[list]` sorts descending

**Further reading:**
- [Wolfram Language Documentation - Sort](https://reference.wolfram.com/language/ref/Sort.html)

</TabItem>
</Tabs>


## 10.2.7. Slicing

Extracting a subrange from a collection. Allows obtaining a continuous section of a collection without modifying the original collection.

### Languages {#sprachen}

<Tabs availableTabs={['clojure', 'common-lisp', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'elixir', 'elm', 'erlang', 'fsharp', 'gleam', 'go', 'groovy', 'haskell', 'haxe', 'java', 'javascript', 'julia', 'kotlin', 'lean4', 'mercury', 'mojo', 'nim', 'ocaml', 'perl', 'php', 'purescript', 'python', 'r', 'racket', 'roc', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'v', 'vbnet', 'wolfram-language']} yellowTabs={['koka']} orangeTabs={['c', 'lua']}>
<TabItem value="c" label="C">

```c
int numbers[] = {10, 20, 30, 40, 50};
int slice[3];
int start = 1, length = 3;

for (int i = 0; i < length; i++) {
    slice[i] = numbers[start + i];
}
```

**Special features:**
- Manual implementation with loop required
- No native slice function
- Dynamic size requires dynamic memory management

**Further reading:**
- [C Documentation - For Loops](https://en.cppreference.com/w/c/language/for)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
int[] numbers = {10, 20, 30, 40, 50};
int[] slice = numbers[1..4];
```

**Special features:**
- Range operator `..` for slicing (since C# 8.0)
- Also supports `Skip` and `Take` for LINQ
- Creates new array

**Further reading:**
- [Microsoft C# Documentation - Range Operator](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/member-access-operators#range-operator-)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
std::vector<int> numbers = {10, 20, 30, 40, 50};
std::vector<int> slice(numbers.begin() + 1, numbers.begin() + 4);
```

**Special features:**
- Iterator-based slicing
- Also supports `std::span` for views (since C++20)
- Creates new vector

**Further reading:**
- [cppreference.com - span](https://en.cppreference.com/w/cpp/container/span)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
(def numbers [10 20 30 40 50])
(def slice (subvec numbers 1 4))
```

**Special features:**
- `subvec` for vector slicing
- Also supports `drop` and `take` for sequences
- Creates new collection

**Further reading:**
- [Clojure Documentation - subvec](https://clojuredocs.org/clojure.core/subvec)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
(let ((numbers '(10 20 30 40 50)))
  (subseq numbers 1 4))
```

**Special features:**
- `subseq` for slicing
- Also supports lists and vectors
- Creates new sequence

**Further reading:**
- [Common Lisp HyperSpec - subseq](http://www.lispworks.com/documentation/HyperSpec/Body/f_subseq.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
numbers = [10, 20, 30, 40, 50]
slice = numbers[1..3]
```

**Special features:**
- Range operator `..` for slicing
- Also supports `[start, length]` syntax
- Creates new array

**Further reading:**
- [Crystal Documentation - Array](https://crystal-lang.org/api/1.11.0/Array.html)

</TabItem>
<TabItem value="d" label="D">

```d
int[] numbers = [10, 20, 30, 40, 50];
int[] slice = numbers[1..4];
```

**Special features:**
- Range operator `..` for slicing
- Creates slice (no copy)
- Also supports `take` and `drop`

**Further reading:**
- [D Language Documentation - Arrays](https://dlang.org/spec/arrays.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
var numbers = [10, 20, 30, 40, 50];
var slice = numbers.sublist(1, 4);
```

**Special features:**
- `sublist` for slicing
- Also supports `skip` and `take` for iterables
- Creates new list

**Further reading:**
- [Dart Documentation - sublist](https://api.dart.dev/stable/dart-core/List/sublist.html)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
numbers = [10, 20, 30, 40, 50]
slice = Enum.slice(numbers, 1, 3)
```

**Special features:**
- `Enum.slice` for slicing
- Also supports `Enum.take` and `Enum.drop`
- Creates new list

**Further reading:**
- [Elixir Documentation - Enum.slice](https://hexdocs.pm/elixir/Enum.html#slice/3)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
numbers = [10, 20, 30, 40, 50]
slice = List.drop 1 (List.take 4 numbers)
```

**Special features:**
- Combination of `drop` and `take` for slicing
- Funktionale Programmierung
- Creates new list

**Further reading:**
- [Elm Documentation - List.drop](https://package.elm-lang.org/packages/elm/core/latest/List#drop)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
Numbers = [10, 20, 30, 40, 50],
Slice = lists:sublist(Numbers, 2, 3).
```

**Special features:**
- `lists:sublist` for slicing
- Also supports `lists:nthtail` for tail slicing
- Functional programming

**Further reading:**
- [Erlang Documentation - lists:sublist](https://www.erlang.org/doc/man/lists.html#sublist-2)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
let numbers = [10; 20; 30; 40; 50]
let slice = numbers.[1..3]
```

**Special features:**
- Range operator `..` for slicing
- Also supports `List.skip` and `List.take`
- Creates new list

**Further reading:**
- [F# Documentation - List Slicing](https://fsharp.github.io/fsharp-core-docs/reference/fsharp-collections-listmodule.html)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
let numbers = [10, 20, 30, 40, 50]
let slice = list.drop(numbers, 1) |> list.take(3)
```

**Special features:**
- Combination of `drop` and `take` for slicing
- Funktionale Programmierung
- Typ-sicher

**Further reading:**
- [Gleam Documentation - list.drop](https://hexdocs.pm/gleam_stdlib/gleam/list.html#drop)

</TabItem>
<TabItem value="go" label="Go">

```go
numbers := []int{10, 20, 30, 40, 50}
slice := numbers[1:4]
```

**Special features:**
- Slice syntax `[start:end]` for slicing
- Creates slice (no copy)
- Also supports `append` for extension

**Further reading:**
- [Go Documentation - Slices](https://go.dev/tour/moretypes/7)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
def numbers = [10, 20, 30, 40, 50]
def slice = numbers[1..3]
```

**Special features:**
- Range operator `..` for slicing
- Also supports `subList` method
- Creates new list

**Further reading:**
- [Groovy Documentation - Lists](https://groovy-lang.org/groovy-dev-kit.html#_working_with_collections)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
numbers = [10, 20, 30, 40, 50]
slice = take 3 (drop 1 numbers)
```

**Special features:**
- Combination of `drop` and `take` for slicing
- Functional programming
- Lazy evaluation

**Further reading:**
- [Haskell Documentation - take](https://hackage.haskell.org/package/base/docs/Prelude.html#v:take)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
var numbers = [10, 20, 30, 40, 50];
var slice = numbers.slice(1, 4);
```

**Special features:**
- `slice` method for slicing
- Also supports negative indices
- Creates new array

**Further reading:**
- [Haxe Documentation - Array.slice](https://api.haxe.org/Array.html#slice)

</TabItem>
<TabItem value="java" label="Java">

```java
List<Integer> numbers = Arrays.asList(10, 20, 30, 40, 50);
List<Integer> slice = numbers.subList(1, 4);
```

**Special features:**
- `subList` for slicing
- Creates view (no copy)
- Also supports Stream API for transformation

**Further reading:**
- [Oracle Java Documentation - List.subList](https://docs.oracle.com/javase/8/docs/api/java/util/List.html#subList-int-int-)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
const numbers = [10, 20, 30, 40, 50];
const slice = numbers.slice(1, 4);
```

**Special features:**
- `slice` method for slicing (since ES5)
- Also supports negative indices
- Creates new array

**Further reading:**
- [MDN Web Docs - Array.slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
numbers = [10, 20, 30, 40, 50]
slice = numbers[2:4]
```

**Special features:**
- Range operator `:` for slicing
- Also supports `view` for views
- Creates new array

**Further reading:**
- [Julia Documentation - Array Indexing](https://docs.julialang.org/en/v1/manual/arrays/#man-array-indexing)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
val numbers = [10, 20, 30, 40, 50]

// Slicing via take and drop
val first3 = numbers.take(3)
// [10, 20, 30]

val last3 = numbers.drop(2)
// [30, 40, 50]

// Combination for range slicing
val middle = numbers.drop(1).take(3)
// [20, 30, 40]
```

**Special features:**
- No dedicated slice operator
- `take(n)` takes the first n elements
- `drop(n)` skips the first n elements
- Combination of `drop` and `take` for range slicing

**Further reading:**
- [Koka Standard Library - list](https://koka-lang.github.io/koka/doc/std_core_list.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
def numbers : List Nat := [10, 20, 30, 40, 50]

-- First n elements
def first3 := numbers.take 3
-- [10, 20, 30]

-- Skip elements
def last3 := numbers.drop 2
-- [30, 40, 50]

-- Range slicing: drop + take
def middle := (numbers.drop 1).take 3
-- [20, 30, 40]

-- Array slicing with extract
def arr : Array Nat := #[10, 20, 30, 40, 50]
def sliced := arr.extract 1 4
-- #[20, 30, 40]
```

**Special features:**
- `List.take` and `List.drop` for list slicing
- `Array.extract start stop` for array range (exclusive `stop`)
- Combination of `drop` and `take` for range slicing on lists
- No dedicated slice operator

**Further reading:**
- [Lean 4 Documentation - List](https://leanprover-community.github.io/mathlib4_docs/Init/Prelude.html#List)
- [Lean 4 Documentation - Array](https://lean-lang.org/lean4/doc/array.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
Numbers = [10, 20, 30, 40, 50],

% First N elements
list.take_upto(3, Numbers, First3),
% First3 = [10, 20, 30]

% Skip elements
list.det_drop(2, Numbers, Last3),
% Last3 = [30, 40, 50]

% Range slicing: drop + take
list.det_drop(1, Numbers, Dropped),
list.take_upto(3, Dropped, Slice)
% Slice = [20, 30, 40]
```

**Special features:**
- `list.take_upto/3` takes up to N elements (never errors)
- `list.det_drop/3` skips N elements (aborts if list too short)
- Combination of `drop` and `take` for range slicing
- No dedicated slice operator or slice notation

**Further reading:**
- [Mercury Standard Library - list](https://www.mercurylang.org/information/doc-release/mercury_library/list.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
val numbers = listOf(10, 20, 30, 40, 50)
val slice = numbers.slice(1..3)
```

**Special features:**
- `slice` with range for slicing
- Also supports `subList` for lists
- Creates new list

**Further reading:**
- [Kotlin Documentation - slice](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/slice.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
local numbers = {10, 20, 30, 40, 50}
local slice = {}

for i = 2, 4 do
    table.insert(slice, numbers[i])
end
```

**Special features:**
- Manual implementation with loop required
- No native slice function
- Also supports functional libraries

**Further reading:**
- [Lua Documentation - For Loops](https://www.lua.org/manual/5.4/manual.html#3.3.5)

</TabItem>
<TabItem value="mojo" label="Mojo">

```mojo
var numbers = List[Int](10, 20, 30, 40, 50)
var slice = numbers[1:4]
```

**Special features:**
- Slice syntax `[start:end]` for slicing
- Python-like syntax
- Creates new list

**Further reading:**
- [Mojo Documentation](https://docs.modular.com/mojo)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
var numbers = @[10, 20, 30, 40, 50]
var slice = numbers[1..3]
```

**Special features:**
- Range operator `..` for slicing
- Also supports `[start..<end]` for exclusive end
- Creates new sequence

**Further reading:**
- [Nim Documentation - Slicing](https://nim-lang.org/docs/manual.html#procedures-slicing)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
let numbers = [10; 20; 30; 40; 50]
let slice = List.sub numbers 1 3
```

**Special features:**
- `List.sub` for slicing
- Also supports `List.take` and `List.drop`
- Functional programming

**Further reading:**
- [OCaml Documentation - List.sub](https://v2.ocaml.org/api/List.html#VALsub)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
my @numbers = (10, 20, 30, 40, 50);
my @slice = @numbers[1..3];
```

**Special features:**
- Range operator `..` for array slicing
- Also supports `splice` for in-place modification
- Creates new array

**Further reading:**
- [Perl Documentation - Array Slicing](https://perldoc.perl.org/perldata#Slices)

</TabItem>
<TabItem value="php" label="PHP">

```php
$numbers = [10, 20, 30, 40, 50];
$slice = array_slice($numbers, 1, 3);
```

**Special features:**
- `array_slice` for slicing
- Also supports negative indices
- Creates new array

**Further reading:**
- [PHP Documentation - array_slice](https://www.php.net/manual/en/function.array-slice.php)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
numbers = [10, 20, 30, 40, 50]
slice = drop 1 (take 4 numbers)
```

**Special features:**
- Combination of `drop` and `take` for slicing
- Funktionale Programmierung
- Typ-sicher

**Further reading:**
- [PureScript Documentation - drop](https://pursuit.purescript.org/packages/purescript-lists/6.0.0/docs/Data.List#v:drop)

</TabItem>
<TabItem value="python" label="Python">

```python
numbers = [10, 20, 30, 40, 50]
slice = numbers[1:4]
```

**Special features:**
- Slice syntax `[start:end]` for slicing
- Also supports negative indices and step size
- Creates new list

**Further reading:**
- [Python Documentation - Slicing](https://docs.python.org/3/tutorial/introduction.html#lists)

</TabItem>
<TabItem value="r" label="R">

```r
numbers <- c(10, 20, 30, 40, 50)
slice <- numbers[2:4]
```

**Special features:**
- Range operator `:` for slicing
- Also supports negative indices
- Creates new vector

**Further reading:**
- [R Documentation - Indexing](https://cran.r-project.org/doc/manuals/r-release/R-intro.html#Index-vectors)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
(define numbers '(10 20 30 40 50))
(define slice (take (drop numbers 1) 3))
```

**Special features:**
- Combination of `drop` and `take` for slicing
- Funktionale Programmierung
- Creates new list

**Further reading:**
- [Racket Documentation - take](https://docs.racket-lang.org/reference/pairs.html#%28def._%28%28lib._racket%2Fprivate%2Flist..rkt%29._take%29%29)

</TabItem>
<TabItem value="roc" label="Roc">

```roc
numbers = [10, 20, 30, 40, 50]
slice = List.drop numbers 1 |> List.take 3
```

**Special features:**
- Combination of `drop` and `take` for slicing
- Funktionale Programmierung
- Typ-sicher

**Further reading:**
- [Roc Documentation - List.drop](https://www.roc-lang.org/builtins/List#drop)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
numbers = [10, 20, 30, 40, 50]
slice = numbers[1..3]
```

**Special features:**
- Range operator `..` for slicing
- Also supports `[start, length]` syntax
- Creates new array

**Further reading:**
- [Ruby Documentation - Array Slicing](https://ruby-doc.org/core-3.1.0/Array.html#method-i-5B-5D)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
let numbers = vec![10, 20, 30, 40, 50];
let slice = &numbers[1..4];
```

**Special features:**
- Range operator `..` for slicing
- Creates slice reference (no copy)
- Also supports `get` for option-based slicing

**Further reading:**
- [Rust Book - Slices](https://doc.rust-lang.org/book/ch04-03-slices.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
val numbers = List(10, 20, 30, 40, 50)
val slice = numbers.slice(1, 4)
```

**Special features:**
- `slice` method for slicing
- Also supports `take` and `drop`
- Creates new list

**Further reading:**
- [Scala Documentation - slice](https://www.scala-lang.org/api/current/scala/collection/immutable/List.html#slice%28from:Int,until:Int%29:List%5BA%5D)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
(define numbers '(10 20 30 40 50))
(define slice (take (drop numbers 1) 3))
```

**Special features:**
- Combination of `drop` and `take` for slicing (SRFI-1)
- Functional programming
- Creates new list

**Further reading:**
- [Scheme Documentation - take](https://srfi.schemers.org/srfi-1/srfi-1.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
let numbers = [10, 20, 30, 40, 50]
let slice = numbers[1..<4]
```

**Special features:**
- Range operator `..<` for slicing
- Also supports `...` for inclusive end
- Creates new array

**Further reading:**
- [Swift Documentation - Ranges](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/basicoperators/#Range-Operators)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
const numbers: number[] = [10, 20, 30, 40, 50];
const slice = numbers.slice(1, 4);
```

**Special features:**
- `slice` method for slicing (since ES5)
- Also supports negative indices
- Type-safe with TypeScript

**Further reading:**
- [TypeScript Handbook - Array.slice](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
Dim numbers() As Integer = {10, 20, 30, 40, 50}
Dim slice = numbers.Skip(1).Take(3).ToArray()
```

**Special features:**
- `Skip` and `Take` from LINQ for slicing
- Also supports `Array.Copy` for manual slicing
- Creates new array

**Further reading:**
- [Microsoft VB.NET Documentation - Skip](https://learn.microsoft.com/en-us/dotnet/api/system.linq.enumerable.skip)

</TabItem>
<TabItem value="v" label="V">

```v
// Slicing
numbers := [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

slice1 := numbers[2..5]    // [2, 3, 4]
slice2 := numbers[..3]     // [0, 1, 2]
slice3 := numbers[7..]     // [7, 8, 9]
```

**Special features:**
- Syntax: `array[start..end]` (exclusive end)
- `array[..end]` for start to index
- `array[start..]` for index to end

**Further reading:**
- [V Documentation - Arrays](https://github.com/vlang/v/blob/master/doc/docs.md#arrays)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
numbers = {10, 20, 30, 40, 50};
slice = numbers[[2 ;; 4]]      (* {20, 30, 40} *)
first3 = numbers[[;; 3]]       (* {10, 20, 30} *)
last2 = numbers[[-2 ;;]]       (* {40, 50} *)
step = numbers[[1 ;; ;; 2]]    (* {10, 30, 50} - every second *)
```

**Special features:**
- `;;` (Span) for slicing
- Negative indices for access from the end
- Supports step size: `start ;; end ;; step`

**Further reading:**
- [Wolfram Language Documentation - Span](https://reference.wolfram.com/language/ref/Span.html)

</TabItem>
</Tabs>


## 10.2.8. Slice Notation

The special syntax for extracting subranges from collections. Allows accessing continuous sections of a collection with compact notation.

### Languages {#sprachen}

<Tabs availableTabs={['csharp', 'cpp', 'crystal', 'd', 'fsharp', 'go', 'groovy', 'julia', 'kotlin', 'mojo', 'nim', 'perl', 'python', 'r', 'ruby', 'rust', 'swift']}>
<TabItem value="csharp" label="C#">

```csharp
int[] numbers = {10, 20, 30, 40, 50};
int[] slice = numbers[1..4];
```

**Special features:**
- Range operator `..` for slice notation (since C# 8.0)
- Also supports `^` for negative indices
- Creates new array

**Further reading:**
- [Microsoft C# Documentation - Range Operator](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/member-access-operators#range-operator-)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
std::vector<int> numbers = {10, 20, 30, 40, 50};
std::span<int> slice(numbers.begin() + 1, numbers.begin() + 4);
```

**Special features:**
- `std::span` for slice views (since C++20)
- Also supports iterator-based notation
- Creates view (no copy)

**Further reading:**
- [cppreference.com - span](https://en.cppreference.com/w/cpp/container/span)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
numbers = [10, 20, 30, 40, 50]
slice = numbers[1..3]
```

**Special features:**
- Range operator `..` for slice notation
- Also supports `[start, length]` syntax
- Creates new array

**Further reading:**
- [Crystal Documentation - Array](https://crystal-lang.org/api/1.11.0/Array.html)

</TabItem>
<TabItem value="d" label="D">

```d
int[] numbers = [10, 20, 30, 40, 50];
int[] slice = numbers[1..4];
```

**Special features:**
- Range operator `..` for slice notation
- Creates slice (no copy)
- Also supports negative indices

**Further reading:**
- [D Language Documentation - Arrays](https://dlang.org/spec/arrays.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
let numbers = [10; 20; 30; 40; 50]
let slice = numbers.[1..3]
```

**Special features:**
- Range operator `..` for slice notation
- Also supports `[start..]` and `[..end]` syntax
- Creates new list

**Further reading:**
- [F# Documentation - List Slicing](https://fsharp.github.io/fsharp-core-docs/reference/fsharp-collections-listmodule.html)

</TabItem>
<TabItem value="go" label="Go">

```go
numbers := []int{10, 20, 30, 40, 50}
slice := numbers[1:4]
```

**Special features:**
- Slice syntax `[start:end]` for slice notation
- Creates slice (no copy)
- Also supports `[start:]` and `[:end]` syntax

**Further reading:**
- [Go Documentation - Slices](https://go.dev/tour/moretypes/7)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
def numbers = [10, 20, 30, 40, 50]
def slice = numbers[1..3]
```

**Special features:**
- Range operator `..` for slice notation
- Also supports `[start, length]` syntax
- Creates new list

**Further reading:**
- [Groovy Documentation - Lists](https://groovy-lang.org/groovy-dev-kit.html#_working_with_collections)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
numbers = [10, 20, 30, 40, 50]
slice = numbers[2:4]
```

**Special features:**
- Range operator `:` for slice notation
- Also supports `[start:step:end]` for step size
- Creates new array

**Further reading:**
- [Julia Documentation - Array Indexing](https://docs.julialang.org/en/v1/manual/arrays/#man-array-indexing)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
val numbers = listOf(10, 20, 30, 40, 50)
val slice = numbers[1..3]
```

**Special features:**
- Range operator `..` for slice notation
- Also supports `until` for exclusive end
- Creates new list

**Further reading:**
- [Kotlin Documentation - Ranges](https://kotlinlang.org/docs/ranges.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```mojo
var numbers = List[Int](10, 20, 30, 40, 50)
var slice = numbers[1:4]
```

**Special features:**
- Slice syntax `[start:end]` for slice notation
- Python-like syntax
- Creates new list

**Further reading:**
- [Mojo Documentation](https://docs.modular.com/mojo)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
var numbers = @[10, 20, 30, 40, 50]
var slice = numbers[1..3]
```

**Special features:**
- Range operator `..` for slice notation
- Also supports `[start..<end]` for exclusive end
- Creates new sequence

**Further reading:**
- [Nim Documentation - Slicing](https://nim-lang.org/docs/manual.html#procedures-slicing)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
my @numbers = (10, 20, 30, 40, 50);
my @slice = @numbers[1..3];
```

**Special features:**
- Range operator `..` for slice notation
- Also supports negative indices
- Creates new array

**Further reading:**
- [Perl Documentation - Array Slicing](https://perldoc.perl.org/perldata#Slices)

</TabItem>
<TabItem value="python" label="Python">

```python
numbers = [10, 20, 30, 40, 50]
slice = numbers[1:4]
```

**Special features:**
- Slice syntax `[start:end]` for slice notation
- Also supports `[start:end:step]` for step size
- Also supports negative indices

**Further reading:**
- [Python Documentation - Slicing](https://docs.python.org/3/tutorial/introduction.html#lists)

</TabItem>
<TabItem value="r" label="R">

```r
numbers <- c(10, 20, 30, 40, 50)
slice <- numbers[2:4]
```

**Special features:**
- Range operator `:` for slice notation
- Also supports negative indices
- Creates new vector

**Further reading:**
- [R Documentation - Indexing](https://cran.r-project.org/doc/manuals/r-release/R-intro.html#Index-vectors)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
numbers = [10, 20, 30, 40, 50]
slice = numbers[1..3]
```

**Special features:**
- Range operator `..` for slice notation
- Also supports `[start, length]` syntax
- Creates new array

**Further reading:**
- [Ruby Documentation - Array Slicing](https://ruby-doc.org/core-3.1.0/Array.html#method-i-5B-5D)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
let numbers = vec![10, 20, 30, 40, 50];
let slice = &numbers[1..4];
```

**Special features:**
- Range operator `..` for slice notation
- Creates slice reference (no copy)
- Also supports `[start..]` and `[..end]` syntax

**Further reading:**
- [Rust Book - Slices](https://doc.rust-lang.org/book/ch04-03-slices.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
let numbers = [10, 20, 30, 40, 50]
let slice = numbers[1..<4]
```

**Special features:**
- Range operator `..<` for slice notation
- Also supports `...` for inclusive end
- Creates new array

**Further reading:**
- [Swift Documentation - Ranges](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/basicoperators/#Range-Operators)

</TabItem>
</Tabs>

