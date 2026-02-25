---
slug: /collections/collection-operations
title: 10.2. Collection Operations
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 10.2. Collection Operations

Operationen auf Collections.

## 10.2.1. Iteration

Das Durchlaufen von Elementen in einer Collection, um auf jedes Element zuzugreifen und Operationen darauf auszuführen. Ermöglicht es, alle Elemente einer Collection systematisch zu verarbeiten.

### Sprachen {#sprachen}

<Tabs availableTabs={['common-lisp', 'cpp', 'csharp', 'd', 'dart', 'go', 'groovy', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'mercury', 'lua', 'nim', 'objective-c', 'perl', 'php', 'python', 'r', 'ruby', 'rust', 'scala', 'swift', 'typescript', 'vbnet', 'wolfram-language']} orangeTabs={['c', 'idris']}>
<TabItem value="c" label="C">

```c
int numbers[] = {10, 20, 30};
int length = sizeof(numbers) / sizeof(numbers[0]);

for (int i = 0; i < length; i++) {
    printf("%d\n", numbers[i]);
}
```

**Besonderheiten:**
- Index-basierte Iteration mit `for`-Schleife
- Manuelle Längenberechnung erforderlich
- Keine native Collection-Iteration

**Weiterführende Links:**
- [C Documentation - For Loops](https://en.cppreference.com/w/c/language/for)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
int[] numbers = {10, 20, 30};

foreach (int num in numbers) {
    Console.WriteLine(num);
}
```

**Besonderheiten:**
- `foreach` für Collection-Iteration (seit C# 1.0)
- Typsicher
- Unterstützt auch `for`-Schleifen

**Weiterführende Links:**
- [Microsoft C# Documentation - foreach](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/statements/iteration-statements#the-foreach-statement)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
std::vector<int> numbers = {10, 20, 30};

for (int num : numbers) {
    std::cout << num << std::endl;
}
```

**Besonderheiten:**
- Range-based `for`-Schleife (seit C++11)
- Unterstützt auch `for_each` Algorithm
- Template-basiert

**Weiterführende Links:**
- [cppreference.com - Range-based for loop](https://en.cppreference.com/w/cpp/language/range-for)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
var numbers = [10, 20, 30];

for (var num in numbers) {
    print(num);
}
```

**Besonderheiten:**
- `for-in` für Collection-Iteration
- Unterstützt auch `forEach` Methode
- Dynamische Typisierung

**Weiterführende Links:**
- [Dart Language Tour - Loops](https://dart.dev/guides/language/language-tour#loops)

</TabItem>
<TabItem value="go" label="Go">

```go
numbers := []int{10, 20, 30}

for i, num := range numbers {
    fmt.Println(i, num)
}
```

**Besonderheiten:**
- `range` für Collection-Iteration
- Gibt Index und Wert zurück
- Unterstützt auch nur Index oder nur Wert

**Weiterführende Links:**
- [Go Documentation - For Loops](https://go.dev/tour/flowcontrol/1)

</TabItem>
<TabItem value="java" label="Java">

```java
int[] numbers = {10, 20, 30};

for (int num : numbers) {
    System.out.println(num);
}
```

**Besonderheiten:**
- Enhanced `for`-Schleife (seit Java 5.0)
- Unterstützt auch `forEach` Methode (seit Java 8)
- Typsicher

**Weiterführende Links:**
- [Oracle Java Documentation - For Loops](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/for.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
const numbers = [10, 20, 30];

for (const num of numbers) {
    console.log(num);
}
```

**Besonderheiten:**
- `for-of` für Iteration (seit ES6)
- Unterstützt auch `forEach` Methode
- Unterstützt auch `for-in` für Objekte

**Weiterführende Links:**
- [MDN Web Docs - for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
numbers = [10, 20, 30]

for num in numbers
    println(num)
end
```

**Besonderheiten:**
- `for-in` für Collection-Iteration
- Unterstützt auch `foreach` Funktion
- Hochperformant

**Weiterführende Links:**
- [Julia Documentation - For Loops](https://docs.julialang.org/en/v1/manual/control-flow/#for-Loops)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
val numbers = [10, 20, 30]

// Iteration mit foreach
numbers.foreach fn(n)
  println(n.show)

// Iteration mit for (numerischer Bereich)
for(1, 5) fn(i)
  println(i.show)
```

**Besonderheiten:**
- `foreach` für Iteration über Listen
- `for(start, end)` für numerische Bereiche
- Funktionale Iteration (kein traditionelles `for-in`)

**Weiterführende Links:**
- [Koka Standard Library - list](https://koka-lang.github.io/koka/doc/std_core_list.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
def numbers : List Nat := [10, 20, 30]

-- for-in Schleife (in der IO-Monade)
def printNumbers : IO Unit := do
  for n in numbers do
    IO.println s!"{n}"

-- Funktionale Iteration mit forM
def printWithForM : IO Unit :=
  numbers.forM (fun n => IO.println s!"{n}")
```

**Besonderheiten:**
- `for ... in ...` Syntax in `do`-Blöcken für Iteration
- `List.forM` für monadische Iteration
- `List.forEach` als Alternative
- Iteration erfordert eine Monade (z.B. `IO`)

**Weiterführende Links:**
- [Lean 4 Documentation - For Loops](https://lean-lang.org/lean4/doc/do.html)
- [Lean 4 Documentation - List](https://leanprover-community.github.io/mathlib4_docs/Init/Prelude.html#List)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Rekursive Iteration (idiomatic)
:- pred print_list(list(int)::in, io::di, io::uo) is det.
print_list([], !IO).
print_list([H | T], !IO) :-
    io.print_line(H, !IO),
    print_list(T, !IO).

% Aufruf
Numbers = [10, 20, 30],
print_list(Numbers, !IO)
```

**Besonderheiten:**
- Iteration erfolgt über rekursive Prädikate mit Pattern Matching
- `[H | T]`-Destrukturierung für Head und Tail
- `!IO` State-Variable für I/O-Effekte (Unique-Mode-Pair)
- Keine imperativen Schleifen – Rekursion ist das Standardmuster

**Weiterführende Links:**
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

**Besonderheiten:**
- `for-in` für Collection-Iteration
- Unterstützt auch `forEach` Funktion
- Unterstützt auch Index-Iteration mit `indices`

**Weiterführende Links:**
- [Kotlin Documentation - For Loops](https://kotlinlang.org/docs/control-flow.html#for-loops)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
local numbers = {10, 20, 30}

for i, num in ipairs(numbers) do
    print(num)
end
```

**Besonderheiten:**
- `for-in` mit `ipairs` für Array-Iteration
- Unterstützt auch `pairs` für Table-Iteration
- Gibt Index und Wert zurück

**Weiterführende Links:**
- [Lua Documentation - For Loops](https://www.lua.org/manual/5.4/manual.html#3.3.5)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
my @numbers = (10, 20, 30);

for my $num (@numbers) {
    print "$num\n";
}
```

**Besonderheiten:**
- `for` für Array-Iteration
- Unterstützt auch `foreach` (Alias)
- Unterstützt auch C-style `for`-Schleife

**Weiterführende Links:**
- [Perl Documentation - For Loops](https://perldoc.perl.org/perlsyn#Foreach-Loops)

</TabItem>
<TabItem value="php" label="PHP">

```php
$numbers = [10, 20, 30];

foreach ($numbers as $num) {
    echo $num . "\n";
}
```

**Besonderheiten:**
- `foreach` für Array-Iteration
- Unterstützt auch Index-Iteration mit `foreach ($arr as $key => $value)`
- Unterstützt auch `for`-Schleifen

**Weiterführende Links:**
- [PHP Documentation - foreach](https://www.php.net/manual/en/control-structures.foreach.php)

</TabItem>
<TabItem value="python" label="Python">

```python
numbers = [10, 20, 30]

for num in numbers:
    print(num)
```

**Besonderheiten:**
- `for-in` für Collection-Iteration
- Unterstützt auch `enumerate` für Index-Iteration
- Unterstützt auch Comprehensions

**Weiterführende Links:**
- [Python Documentation - For Loops](https://docs.python.org/3/tutorial/controlflow.html#for-statements)

</TabItem>
<TabItem value="r" label="R">

```r
numbers <- c(10, 20, 30)

for (num in numbers) {
    print(num)
}
```

**Besonderheiten:**
- `for-in` für Vektor-Iteration
- Unterstützt auch `lapply` für funktionale Iteration
- Vektorisiert wenn möglich

**Weiterführende Links:**
- [R Documentation - For Loops](https://cran.r-project.org/doc/manuals/r-release/R-intro.html#Repetitive-execution-for-loops)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
numbers = [10, 20, 30]

numbers.each do |num|
    puts num
end
```

**Besonderheiten:**
- `each` für Collection-Iteration
- Unterstützt auch `for-in` Syntax
- Block-basiert

**Weiterführende Links:**
- [Ruby Documentation - Iteration](https://ruby-doc.org/core-3.1.0/Array.html#method-i-each)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
let numbers = vec![10, 20, 30];

for num in numbers {
    println!("{}", num);
}
```

**Besonderheiten:**
- `for-in` für Iterator-Iteration
- Ownership-basiert
- Unterstützt auch `iter()` für Referenzen

**Weiterführende Links:**
- [Rust Book - For Loops](https://doc.rust-lang.org/book/ch03-05-control-flow.html#looping-through-a-collection-with-for)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
val numbers = List(10, 20, 30)

for (num <- numbers) {
    println(num)
}
```

**Besonderheiten:**
- `for` mit Generator-Syntax
- Unterstützt auch `foreach` Methode
- Unterstützt auch Comprehensions

**Weiterführende Links:**
- [Scala Documentation - For Loops](https://docs.scala-lang.org/tour/for-comprehensions.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
let numbers = [10, 20, 30]

for num in numbers {
    print(num)
}
```

**Besonderheiten:**
- `for-in` für Collection-Iteration
- Unterstützt auch `forEach` Methode
- Unterstützt auch Index-Iteration mit `indices`

**Weiterführende Links:**
- [Swift Documentation - For Loops](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/controlflow/#For-In-Loops)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
const numbers: number[] = [10, 20, 30];

for (const num of numbers) {
    console.log(num);
}
```

**Besonderheiten:**
- `for-of` für Iteration (seit ES6)
- Unterstützt auch `forEach` Methode
- Typsicher mit TypeScript

**Weiterführende Links:**
- [TypeScript Handbook - Iterators](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
Dim numbers() As Integer = {10, 20, 30}

For Each num As Integer In numbers
    Console.WriteLine(num)
Next
```

**Besonderheiten:**
- `For Each` für Collection-Iteration
- Unterstützt auch `For`-Schleifen
- Typsicher

**Weiterführende Links:**
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

;; mapc (Seiteneffekt-basiert)
(mapc (lambda (x) (format t "~a~%" x)) '(1 2 3))
```

**Besonderheiten:**
- `dolist` für einfache Listen-Iteration
- `dotimes` für Zähler-basierte Iteration
- `loop` für mächtige, komplexe Iterationen
- `mapc`/`mapl` für Seiteneffekt-basierte Iteration über Sequenzen

**Weiterführende Links:**
- [Common Lisp HyperSpec - dolist](http://www.lispworks.com/documentation/HyperSpec/Body/m_dolist.htm)

</TabItem>
<TabItem value="d" label="D">

```d
// Iteration
// Benötigt: import std.stdio;
int[] numbers = [1, 2, 3, 4, 5];

// foreach
foreach (num; numbers) {
    write(num, " ");
}
writeln();

// foreach mit Index
foreach (i, num; numbers) {
    writeln("Index ", i, ": ", num);
}

// C-Style for
for (int i = 0; i < numbers.length; i++) {
    write(numbers[i], " ");
}
writeln();
```

**Besonderheiten:**
- `foreach` als primäre Iterationsmethode
- `foreach` mit optionalem Index
- `foreach_reverse` für Rückwärts-Iteration
- Range-basierte Iteration via Phobos Ranges

**Weiterführende Links:**
- [D Language Specification - Foreach](https://dlang.org/spec/statement.html#foreach-statement)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
def numbers = [10, 20, 30, 40, 50]

// each-Methode
numbers.each { println it }

// eachWithIndex
numbers.eachWithIndex { item, index ->
    println "$index: $item"
}

// for-in Schleife
for (num in numbers) {
    println num
}
```

**Besonderheiten:**
- `each` Methode mit Closure für funktionale Iteration
- `eachWithIndex` für Iteration mit Index
- `for-in` Schleife als alternative Syntax
- `it` ist der implizite Parameter in Closures

**Weiterführende Links:**
- [Groovy Documentation - Iterating](https://groovy-lang.org/groovy-dev-kit.html#_iterating_on_a_list)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Funktionale Iteration
items : List String
items = ["Apfel", "Banane", "Kirsche"]

-- Iteration mit Seiteneffekten
traverse_ putStrLn items

-- Iteration mit for_
for_ items (\item => putStrLn item)
```

**Besonderheiten:**
- Keine imperativen Schleifen
- `traverse_` und `for_` für Iteration mit Seiteneffekten
- `map` für Transformation ohne Seiteneffekte

**Weiterführende Links:**
- [Idris 2 Documentation - Types and Functions](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Iteration über Collections
let items = @[1, 2, 3, 4, 5]

# For-Each
for item in items:
  echo item

# Mit Index
for i, item in items:
  echo i, ": ", item

# Über Paare (Maps)
# Benötigt: import tables
let t = {"a": 1, "b": 2}.toTable
for key, value in t:
  echo key, " -> ", value
```

**Besonderheiten:**
- `for item in collection` für einfache Iteration
- `for i, item in collection` für Iteration mit Index
- `pairs()`, `items()` Iteratoren für verschiedene Zugriffsarten

**Weiterführende Links:**
- [Nim Documentation - For Statement](https://nim-lang.org/docs/manual.html#iterators-and-the-for-statement)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
NSArray *items = @[@"Apfel", @"Banane", @"Kirsche"];

// Fast Enumeration (seit Objective-C 2.0)
for (NSString *item in items) {
    NSLog(@"%@", item);
}

// Block-basierte Enumeration
[items enumerateObjectsUsingBlock:^(id obj, NSUInteger idx, BOOL *stop) {
    NSLog(@"%lu: %@", (unsigned long)idx, obj);
}];
```

**Besonderheiten:**
- Fast Enumeration mit `for-in` (seit Objective-C 2.0)
- Block-basierte Enumeration mit Index und Stop-Flag
- `NSEnumerator` als ältere Alternative
- Fast Enumeration ist Thread-safe bei immutable Collections

**Weiterführende Links:**
- [Apple Documentation - Fast Enumeration](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Collections/Articles/Enumerators.html)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
items = {"Apfel", "Banane", "Kirsche"};
Scan[Print, items]
```

**Besonderheiten:**
- `Scan[f, list]` wendet f auf jedes Element an (für Seiteneffekte)
- `Map[f, list]` für Transformation
- `Do[expr, {i, list}]` für imperative Iteration

**Weiterführende Links:**
- [Wolfram Language Documentation - Scan](https://reference.wolfram.com/language/ref/Scan.html)

</TabItem>
</Tabs>


## 10.2.2. Filtering

Das Auswählen von Elementen aus einer Collection basierend auf einem Prädikat. Ermöglicht es, nur die Elemente zu behalten, die bestimmte Bedingungen erfüllen.

### Sprachen {#sprachen}

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

**Besonderheiten:**
- Manuelle Implementierung mit Schleife erforderlich
- Keine native Filter-Funktion
- Dynamische Größe erfordert dynamische Speicherverwaltung

**Weiterführende Links:**
- [C Documentation - For Loops](https://en.cppreference.com/w/c/language/for)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
int[] numbers = {10, 20, 30, 40, 50};
var filtered = numbers.Where(n => n > 25).ToArray();
```

**Besonderheiten:**
- `Where` Methode aus LINQ (seit C# 3.0)
- Lazy Evaluation bei IEnumerable
- Unterstützt auch `Where` mit Index

**Weiterführende Links:**
- [Microsoft C# Documentation - Where](https://learn.microsoft.com/en-us/dotnet/api/system.linq.enumerable.where)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
std::vector<int> numbers = {10, 20, 30, 40, 50};
std::vector<int> filtered;
std::copy_if(numbers.begin(), numbers.end(), std::back_inserter(filtered),
    [](int n) { return n > 25; });
```

**Besonderheiten:**
- `std::copy_if` Algorithm (seit C++11)
- Unterstützt auch `std::remove_if` für in-place Filtering
- Template-basiert

**Weiterführende Links:**
- [cppreference.com - copy_if](https://en.cppreference.com/w/cpp/algorithm/copy)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
(def numbers [10 20 30 40 50])
(def filtered (filter #(> % 25) numbers))
```

**Besonderheiten:**
- `filter` Funktion für Lazy Sequences
- Unterstützt auch `filterv` für Vektoren
- Funktionale Programmierung

**Weiterführende Links:**
- [Clojure Documentation - filter](https://clojuredocs.org/clojure.core/filter)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
(let ((numbers '(10 20 30 40 50)))
  (remove-if-not (lambda (n) (> n 25)) numbers))
```

**Besonderheiten:**
- `remove-if-not` für Filtering
- Unterstützt auch `remove-if` für inverse Logik
- Funktionale Programmierung

**Weiterführende Links:**
- [Common Lisp HyperSpec - remove-if-not](http://www.lispworks.com/documentation/HyperSpec/Body/f_rm_fi.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
numbers = [10, 20, 30, 40, 50]
filtered = numbers.select { |n| n > 25 }
```

**Besonderheiten:**
- `select` Methode für Filtering
- Unterstützt auch `reject` für inverse Logik
- Block-basiert

**Weiterführende Links:**
- [Crystal Documentation - Enumerable](https://crystal-lang.org/api/1.11.0/Enumerable.html)

</TabItem>
<TabItem value="d" label="D">

```d
int[] numbers = [10, 20, 30, 40, 50];
auto filtered = numbers.filter!(n => n > 25).array;
```

**Besonderheiten:**
- `filter` Template-Funktion
- Lazy Evaluation mit Ranges
- Unterstützt auch `filter` mit Index

**Weiterführende Links:**
- [D Language Documentation - filter](https://dlang.org/phobos/std_algorithm_iteration.html#filter)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
var numbers = [10, 20, 30, 40, 50];
var filtered = numbers.where((n) => n > 25).toList();
```

**Besonderheiten:**
- `where` Methode für Filtering
- Lazy Evaluation bei Iterable
- Unterstützt auch `whereType` für Typ-Filtering

**Weiterführende Links:**
- [Dart Documentation - where](https://api.dart.dev/stable/dart-core/Iterable/where.html)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
numbers = [10, 20, 30, 40, 50]
filtered = Enum.filter(numbers, fn n -> n > 25 end)
```

**Besonderheiten:**
- `Enum.filter` für Filtering
- Unterstützt auch `Enum.reject` für inverse Logik
- Funktionale Programmierung

**Weiterführende Links:**
- [Elixir Documentation - Enum.filter](https://hexdocs.pm/elixir/Enum.html#filter/2)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
numbers = [10, 20, 30, 40, 50]
filtered = List.filter (\n -> n > 25) numbers
```

**Besonderheiten:**
- `List.filter` für Filtering
- Funktionale Programmierung
- Immutable Collections

**Weiterführende Links:**
- [Elm Documentation - List.filter](https://package.elm-lang.org/packages/elm/core/latest/List#filter)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
Numbers = [10, 20, 30, 40, 50],
Filtered = lists:filter(fun(N) -> N > 25 end, Numbers).
```

**Besonderheiten:**
- `lists:filter` für Filtering
- Funktionale Programmierung
- Unterstützt auch `lists:partition` für Split

**Weiterführende Links:**
- [Erlang Documentation - lists:filter](https://www.erlang.org/doc/man/lists.html#filter-2)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
let numbers = [10; 20; 30; 40; 50]
let filtered = List.filter (fun n -> n > 25) numbers
```

**Besonderheiten:**
- `List.filter` für Filtering
- Unterstützt auch `Seq.filter` für Lazy Sequences
- Funktionale Programmierung

**Weiterführende Links:**
- [F# Documentation - List.filter](https://fsharp.github.io/fsharp-core-docs/reference/fsharp-collections-listmodule.html#filter)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
let numbers = [10, 20, 30, 40, 50]
let filtered = list.filter(numbers, fn(n) { n > 25 })
```

**Besonderheiten:**
- `list.filter` für Filtering
- Funktionale Programmierung
- Typ-sicher

**Weiterführende Links:**
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

**Besonderheiten:**
- Manuelle Implementierung mit Schleife erforderlich
- Keine native Filter-Funktion in Standard-Bibliothek
- Unterstützt auch `slices` Package (seit Go 1.21)

**Weiterführende Links:**
- [Go Documentation - For Loops](https://go.dev/tour/flowcontrol/1)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
def numbers = [10, 20, 30, 40, 50]
def filtered = numbers.findAll { it > 25 }
```

**Besonderheiten:**
- `findAll` Methode für Filtering
- Unterstützt auch `grep` für Pattern-Matching
- Closure-basiert

**Weiterführende Links:**
- [Groovy Documentation - findAll](https://groovy-lang.org/groovy-dev-kit.html#_working_with_collections)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
numbers = [10, 20, 30, 40, 50]
filtered = filter (> 25) numbers
```

**Besonderheiten:**
- `filter` Funktion für Filtering
- Lazy Evaluation
- Funktionale Programmierung

**Weiterführende Links:**
- [Haskell Documentation - filter](https://hackage.haskell.org/package/base/docs/Prelude.html#v:filter)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
var numbers = [10, 20, 30, 40, 50];
var filtered = numbers.filter(function(n) return n > 25);
```

**Besonderheiten:**
- `filter` Methode für Filtering
- Unterstützt auch Lambda-Syntax
- Cross-platform

**Weiterführende Links:**
- [Haxe Documentation - Array.filter](https://api.haxe.org/Array.html#filter)

</TabItem>
<TabItem value="java" label="Java">

```java
List<Integer> numbers = Arrays.asList(10, 20, 30, 40, 50);
List<Integer> filtered = numbers.stream()
    .filter(n -> n > 25)
    .collect(Collectors.toList());
```

**Besonderheiten:**
- Stream API für Filtering (seit Java 8)
- Unterstützt auch `filter` mit Predicate
- Lazy Evaluation

**Weiterführende Links:**
- [Oracle Java Documentation - Stream.filter](https://docs.oracle.com/javase/8/docs/api/java/util/stream/Stream.html#filter-java.util.function.Predicate-)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
const numbers = [10, 20, 30, 40, 50];
const filtered = numbers.filter(n => n > 25);
```

**Besonderheiten:**
- `filter` Methode für Filtering (seit ES5)
- Unterstützt auch `filter` mit Index
- Array-Methode

**Weiterführende Links:**
- [MDN Web Docs - Array.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
numbers = [10, 20, 30, 40, 50]
filtered = filter(n -> n > 25, numbers)
```

**Besonderheiten:**
- `filter` Funktion für Filtering
- Unterstützt auch `filter!` für in-place Filtering
- Hochperformant

**Weiterführende Links:**
- [Julia Documentation - filter](https://docs.julialang.org/en/v1/base/collections/#Base.filter)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
val numbers = [10, 20, 30, 40, 50]
val filtered = numbers.filter(fn(n) n > 25)
// [30, 40, 50]
```

**Besonderheiten:**
- `filter` Funktion für Filtering
- Gibt eine neue Liste zurück (immutable)
- Funktionale Higher-Order-Funktion

**Weiterführende Links:**
- [Koka Standard Library - list](https://koka-lang.github.io/koka/doc/std_core_list.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
def numbers : List Nat := [10, 20, 30, 40, 50]
def filtered := numbers.filter (· > 25)
-- [30, 40, 50]

-- Mit expliziter Lambda-Funktion
def filtered2 := numbers.filter (fun n => n > 25)

-- Array-Filtering
def arr : Array Nat := #[10, 20, 30, 40, 50]
def filteredArr := arr.filter (· > 25)
-- #[30, 40, 50]
```

**Besonderheiten:**
- `List.filter` und `Array.filter` für Filtering
- `·`-Syntax als Kurzform für anonyme Funktionen
- Gibt eine neue Collection zurück (immutable)
- `List.partition` teilt in zwei Listen nach Prädikat

**Weiterführende Links:**
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

**Besonderheiten:**
- `list.filter/3` mit Prädikat (Higher-Order)
- Lambda-Prädikate mit `(pred(...) is semidet :- ...)`-Syntax
- `semidet`-Determinismus: Prädikat kann scheitern (= Element wird ausgeschlossen)
- Gibt neue Liste zurück (immutable)

**Weiterführende Links:**
- [Mercury Standard Library - list](https://www.mercurylang.org/information/doc-release/mercury_library/list.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
val numbers = listOf(10, 20, 30, 40, 50)
val filtered = numbers.filter { it > 25 }
```

**Besonderheiten:**
- `filter` Funktion für Filtering
- Unterstützt auch `filterIndexed` für Index-Filtering
- Funktionale Programmierung

**Weiterführende Links:**
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

**Besonderheiten:**
- Manuelle Implementierung mit Schleife erforderlich
- Keine native Filter-Funktion
- Unterstützt auch funktionale Bibliotheken

**Weiterführende Links:**
- [Lua Documentation - For Loops](https://www.lua.org/manual/5.4/manual.html#3.3.5)

</TabItem>
<TabItem value="mojo" label="Mojo">

```mojo
var numbers = List[Int](10, 20, 30, 40, 50)
var filtered = numbers.filter(lambda n: n > 25)
```

**Besonderheiten:**
- `filter` Methode für Filtering
- Unterstützt Lambda-Ausdrücke
- Python-ähnliche Syntax

**Weiterführende Links:**
- [Mojo Documentation](https://docs.modular.com/mojo)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
var numbers = @[10, 20, 30, 40, 50]
var filtered = numbers.filter(proc(n: int): bool = n > 25)
```

**Besonderheiten:**
- `filter` Funktion für Filtering
- Unterstützt auch `filterIt` für kompakte Syntax
- Funktionale Programmierung

**Weiterführende Links:**
- [Nim Documentation - filter](https://nim-lang.org/docs/sequtils.html#filter%2Cseq%2Cuntyped)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
let numbers = [10; 20; 30; 40; 50]
let filtered = List.filter (fun n -> n > 25) numbers
```

**Besonderheiten:**
- `List.filter` für Filtering
- Unterstützt auch `List.filteri` für Index-Filtering
- Funktionale Programmierung

**Weiterführende Links:**
- [OCaml Documentation - List.filter](https://v2.ocaml.org/api/List.html#VALfilter)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
my @numbers = (10, 20, 30, 40, 50);
my @filtered = grep { $_ > 25 } @numbers;
```

**Besonderheiten:**
- `grep` Funktion für Filtering
- Unterstützt auch `grep` mit Index
- Perl-idiomatisch

**Weiterführende Links:**
- [Perl Documentation - grep](https://perldoc.perl.org/functions/grep)

</TabItem>
<TabItem value="php" label="PHP">

```php
$numbers = [10, 20, 30, 40, 50];
$filtered = array_filter($numbers, fn($n) => $n > 25);
```

**Besonderheiten:**
- `array_filter` Funktion für Filtering
- Unterstützt auch Arrow Functions (seit PHP 7.4)
- Unterstützt auch `array_filter` mit Flag

**Weiterführende Links:**
- [PHP Documentation - array_filter](https://www.php.net/manual/en/function.array-filter.php)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
numbers = [10, 20, 30, 40, 50]
filtered = filter (\n -> n > 25) numbers
```

**Besonderheiten:**
- `filter` Funktion für Filtering
- Funktionale Programmierung
- Typ-sicher

**Weiterführende Links:**
- [PureScript Documentation - filter](https://pursuit.purescript.org/packages/purescript-lists/6.0.0/docs/Data.List#v:filter)

</TabItem>
<TabItem value="python" label="Python">

```python
numbers = [10, 20, 30, 40, 50]
filtered = list(filter(lambda n: n > 25, numbers))
```

**Besonderheiten:**
- `filter` Funktion für Filtering
- Unterstützt auch List Comprehensions
- Lazy Evaluation bei Python 3

**Weiterführende Links:**
- [Python Documentation - filter](https://docs.python.org/3/library/functions.html#filter)

</TabItem>
<TabItem value="r" label="R">

```r
numbers <- c(10, 20, 30, 40, 50)
filtered <- numbers[numbers > 25]
```

**Besonderheiten:**
- Vektorisiertes Filtering mit Indexierung
- Unterstützt auch `Filter` Funktion
- Vektorisiert wenn möglich

**Weiterführende Links:**
- [R Documentation - Filter](https://www.rdocumentation.org/packages/base/versions/3.6.2/topics/Filter)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
(define numbers '(10 20 30 40 50))
(define filtered (filter (lambda (n) (> n 25)) numbers))
```

**Besonderheiten:**
- `filter` Funktion für Filtering
- Funktionale Programmierung
- Unterstützt auch `filter-not` für inverse Logik

**Weiterführende Links:**
- [Racket Documentation - filter](https://docs.racket-lang.org/reference/pairs.html#%28def._%28%28lib._racket%2Fprivate%2Flist..rkt%29._filter%29%29)

</TabItem>
<TabItem value="roc" label="Roc">

```roc
numbers = [10, 20, 30, 40, 50]
filtered = List.filter numbers \n -> n > 25
```

**Besonderheiten:**
- `List.filter` für Filtering
- Funktionale Programmierung
- Typ-sicher

**Weiterführende Links:**
- [Roc Documentation - List.filter](https://www.roc-lang.org/builtins/List#filter)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
numbers = [10, 20, 30, 40, 50]
filtered = numbers.select { |n| n > 25 }
```

**Besonderheiten:**
- `select` Methode für Filtering
- Unterstützt auch `reject` für inverse Logik
- Block-basiert

**Weiterführende Links:**
- [Ruby Documentation - Array.select](https://ruby-doc.org/core-3.1.0/Array.html#method-i-select)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
let numbers = vec![10, 20, 30, 40, 50];
let filtered: Vec<i32> = numbers.into_iter()
    .filter(|n| *n > 25)
    .collect();
```

**Besonderheiten:**
- `filter` Methode für Iterator-Filtering
- Lazy Evaluation
- Ownership-basiert

**Weiterführende Links:**
- [Rust Documentation - Iterator.filter](https://doc.rust-lang.org/std/iter/trait.Iterator.html#method.filter)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
val numbers = List(10, 20, 30, 40, 50)
val filtered = numbers.filter(_ > 25)
```

**Besonderheiten:**
- `filter` Methode für Filtering
- Unterstützt auch `filterNot` für inverse Logik
- Funktionale Programmierung

**Weiterführende Links:**
- [Scala Documentation - filter](https://www.scala-lang.org/api/current/scala/collection/immutable/List.html#filter%28p:A=%3EBoolean%29:List%5BA%5D)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
(define numbers '(10 20 30 40 50))
(define filtered (filter (lambda (n) (> n 25)) numbers))
```

**Besonderheiten:**
- `filter` Funktion für Filtering (SRFI-1)
- Funktionale Programmierung
- Unterstützt auch `remove` für inverse Logik

**Weiterführende Links:**
- [Scheme Documentation - filter](https://srfi.schemers.org/srfi-1/srfi-1.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
let numbers = [10, 20, 30, 40, 50]
let filtered = numbers.filter { $0 > 25 }
```

**Besonderheiten:**
- `filter` Methode für Filtering
- Unterstützt auch `filter` mit Index
- Closure-basiert

**Weiterführende Links:**
- [Swift Documentation - filter](https://developer.apple.com/documentation/swift/array/filter(_:))

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
const numbers: number[] = [10, 20, 30, 40, 50];
const filtered = numbers.filter(n => n > 25);
```

**Besonderheiten:**
- `filter` Methode für Filtering (seit ES5)
- Unterstützt auch `filter` mit Index
- Typsicher mit TypeScript

**Weiterführende Links:**
- [TypeScript Handbook - Array.filter](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
Dim numbers() As Integer = {10, 20, 30, 40, 50}
Dim filtered = numbers.Where(Function(n) n > 25).ToArray()
```

**Besonderheiten:**
- `Where` Methode aus LINQ
- Unterstützt auch `Where` mit Index
- Typsicher

**Weiterführende Links:**
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

**Besonderheiten:**
- `filter` arbeitet auf Listen
- Gibt eine neue Liste zurück (immutable)
- Unterstützt Lambda-Ausdrücke als Prädikat

**Weiterführende Links:**
- [Idris 2 Documentation - Types and Functions](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
numbers = {1, 2, 3, 4, 5, 6};
evens = Select[numbers, EvenQ]  (* {2, 4, 6} *)
```

**Besonderheiten:**
- `Select[list, crit]` filtert Elemente nach Kriterium
- `Pick[list, sel, pattern]` als Alternative
- `Cases[list, pattern]` für Pattern-basiertes Filtern

**Weiterführende Links:**
- [Wolfram Language Documentation - Select](https://reference.wolfram.com/language/ref/Select.html)

</TabItem>
</Tabs>


## 10.2.3. Mapping

Das Transformieren jedes Elements einer Collection durch Anwendung einer Funktion. Ermöglicht es, jedes Element einer Collection in ein neues Element umzuwandeln.

### Sprachen {#sprachen}

<Tabs availableTabs={['clojure', 'common-lisp', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'elixir', 'elm', 'erlang', 'fsharp', 'gleam', 'groovy', 'haskell', 'haxe', 'idris', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'mercury', 'mojo', 'nim', 'ocaml', 'perl', 'php', 'purescript', 'python', 'r', 'racket', 'roc', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'vbnet', 'wolfram-language']} yellowTabs={['go']} orangeTabs={['c', 'lua']}>
<TabItem value="c" label="C">

```c
int numbers[] = {10, 20, 30, 40, 50};
int mapped[5];

for (int i = 0; i < 5; i++) {
    mapped[i] = numbers[i] * 2;
}
```

**Besonderheiten:**
- Manuelle Implementierung mit Schleife erforderlich
- Keine native Map-Funktion
- Dynamische Größe erfordert dynamische Speicherverwaltung

**Weiterführende Links:**
- [C Documentation - For Loops](https://en.cppreference.com/w/c/language/for)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
int[] numbers = {10, 20, 30, 40, 50};
var mapped = numbers.Select(n => n * 2).ToArray();
```

**Besonderheiten:**
- `Select` Methode aus LINQ (seit C# 3.0)
- Lazy Evaluation bei IEnumerable
- Unterstützt auch `Select` mit Index

**Weiterführende Links:**
- [Microsoft C# Documentation - Select](https://learn.microsoft.com/en-us/dotnet/api/system.linq.enumerable.select)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
std::vector<int> numbers = {10, 20, 30, 40, 50};
std::vector<int> mapped;
std::transform(numbers.begin(), numbers.end(), std::back_inserter(mapped),
    [](int n) { return n * 2; });
```

**Besonderheiten:**
- `std::transform` Algorithm
- Unterstützt auch in-place Transformation
- Template-basiert

**Weiterführende Links:**
- [cppreference.com - transform](https://en.cppreference.com/w/cpp/algorithm/transform)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
(def numbers [10 20 30 40 50])
(def mapped (map #(* % 2) numbers))
```

**Besonderheiten:**
- `map` Funktion für Lazy Sequences
- Unterstützt auch `mapv` für Vektoren
- Funktionale Programmierung

**Weiterführende Links:**
- [Clojure Documentation - map](https://clojuredocs.org/clojure.core/map)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
(let ((numbers '(10 20 30 40 50)))
  (mapcar (lambda (n) (* n 2)) numbers))
```

**Besonderheiten:**
- `mapcar` für Mapping
- Unterstützt auch `mapc` für Seiteneffekte
- Funktionale Programmierung

**Weiterführende Links:**
- [Common Lisp HyperSpec - mapcar](http://www.lispworks.com/documentation/HyperSpec/Body/f_mapc_.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
numbers = [10, 20, 30, 40, 50]
mapped = numbers.map { |n| n * 2 }
```

**Besonderheiten:**
- `map` Methode für Mapping
- Unterstützt auch `map_with_index` für Index-Mapping
- Block-basiert

**Weiterführende Links:**
- [Crystal Documentation - Enumerable](https://crystal-lang.org/api/1.11.0/Enumerable.html)

</TabItem>
<TabItem value="d" label="D">

```d
int[] numbers = [10, 20, 30, 40, 50];
auto mapped = numbers.map!(n => n * 2).array;
```

**Besonderheiten:**
- `map` Template-Funktion
- Lazy Evaluation mit Ranges
- Unterstützt auch `map` mit Index

**Weiterführende Links:**
- [D Language Documentation - map](https://dlang.org/phobos/std_algorithm_iteration.html#map)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
var numbers = [10, 20, 30, 40, 50];
var mapped = numbers.map((n) => n * 2).toList();
```

**Besonderheiten:**
- `map` Methode für Mapping
- Lazy Evaluation bei Iterable
- Unterstützt auch `mapIndexed` für Index-Mapping

**Weiterführende Links:**
- [Dart Documentation - map](https://api.dart.dev/stable/dart-core/Iterable/map.html)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
numbers = [10, 20, 30, 40, 50]
mapped = Enum.map(numbers, fn n -> n * 2 end)
```

**Besonderheiten:**
- `Enum.map` für Mapping
- Unterstützt auch `Enum.map_every` für periodisches Mapping
- Funktionale Programmierung

**Weiterführende Links:**
- [Elixir Documentation - Enum.map](https://hexdocs.pm/elixir/Enum.html#map/2)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
numbers = [10, 20, 30, 40, 50]
mapped = List.map (\n -> n * 2) numbers
```

**Besonderheiten:**
- `List.map` für Mapping
- Funktionale Programmierung
- Immutable Collections

**Weiterführende Links:**
- [Elm Documentation - List.map](https://package.elm-lang.org/packages/elm/core/latest/List#map)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
Numbers = [10, 20, 30, 40, 50],
Mapped = lists:map(fun(N) -> N * 2 end, Numbers).
```

**Besonderheiten:**
- `lists:map` für Mapping
- Funktionale Programmierung
- Unterstützt auch `lists:mapfoldl` für Mapping mit Akkumulator

**Weiterführende Links:**
- [Erlang Documentation - lists:map](https://www.erlang.org/doc/man/lists.html#map-2)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
let numbers = [10; 20; 30; 40; 50]
let mapped = List.map (fun n -> n * 2) numbers
```

**Besonderheiten:**
- `List.map` für Mapping
- Unterstützt auch `Seq.map` für Lazy Sequences
- Funktionale Programmierung

**Weiterführende Links:**
- [F# Documentation - List.map](https://fsharp.github.io/fsharp-core-docs/reference/fsharp-collections-listmodule.html#map)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
let numbers = [10, 20, 30, 40, 50]
let mapped = list.map(numbers, fn(n) { n * 2 })
```

**Besonderheiten:**
- `list.map` für Mapping
- Funktionale Programmierung
- Typ-sicher

**Weiterführende Links:**
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

**Besonderheiten:**
- Manuelle Implementierung mit Schleife erforderlich
- Keine native Map-Funktion in Standard-Bibliothek
- Unterstützt auch `slices` Package (seit Go 1.21)

**Weiterführende Links:**
- [Go Documentation - For Loops](https://go.dev/tour/flowcontrol/1)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
def numbers = [10, 20, 30, 40, 50]
def mapped = numbers.collect { it * 2 }
```

**Besonderheiten:**
- `collect` Methode für Mapping
- Unterstützt auch `collectMany` für Flattening
- Closure-basiert

**Weiterführende Links:**
- [Groovy Documentation - collect](https://groovy-lang.org/groovy-dev-kit.html#_working_with_collections)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
numbers = [10, 20, 30, 40, 50]
mapped = map (* 2) numbers
```

**Besonderheiten:**
- `map` Funktion für Mapping
- Lazy Evaluation
- Funktionale Programmierung

**Weiterführende Links:**
- [Haskell Documentation - map](https://hackage.haskell.org/package/base/docs/Prelude.html#v:map)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
var numbers = [10, 20, 30, 40, 50];
var mapped = numbers.map(function(n) return n * 2);
```

**Besonderheiten:**
- `map` Methode für Mapping
- Unterstützt auch Lambda-Syntax
- Cross-platform

**Weiterführende Links:**
- [Haxe Documentation - Array.map](https://api.haxe.org/Array.html#map)

</TabItem>
<TabItem value="java" label="Java">

```java
List<Integer> numbers = Arrays.asList(10, 20, 30, 40, 50);
List<Integer> mapped = numbers.stream()
    .map(n -> n * 2)
    .collect(Collectors.toList());
```

**Besonderheiten:**
- Stream API für Mapping (seit Java 8)
- Unterstützt auch `mapToInt` für primitive Typen
- Lazy Evaluation

**Weiterführende Links:**
- [Oracle Java Documentation - Stream.map](https://docs.oracle.com/javase/8/docs/api/java/util/stream/Stream.html#map-java.util.function.Function-)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
const numbers = [10, 20, 30, 40, 50];
const mapped = numbers.map(n => n * 2);
```

**Besonderheiten:**
- `map` Methode für Mapping (seit ES5)
- Unterstützt auch `map` mit Index
- Array-Methode

**Weiterführende Links:**
- [MDN Web Docs - Array.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
numbers = [10, 20, 30, 40, 50]
mapped = map(n -> n * 2, numbers)
```

**Besonderheiten:**
- `map` Funktion für Mapping
- Unterstützt auch `map!` für in-place Mapping
- Hochperformant

**Weiterführende Links:**
- [Julia Documentation - map](https://docs.julialang.org/en/v1/base/collections/#Base.map)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
val numbers = [10, 20, 30, 40, 50]
val mapped = numbers.map(fn(n) n * 2)
// [20, 40, 60, 80, 100]
```

**Besonderheiten:**
- `map` Funktion für Mapping
- Gibt eine neue Liste zurück (immutable)
- Funktionale Higher-Order-Funktion

**Weiterführende Links:**
- [Koka Standard Library - list](https://koka-lang.github.io/koka/doc/std_core_list.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
def numbers : List Nat := [10, 20, 30, 40, 50]
def mapped := numbers.map (· * 2)
-- [20, 40, 60, 80, 100]

-- Mit expliziter Lambda-Funktion
def mapped2 := numbers.map (fun n => n * 2)

-- Array-Mapping
def arr : Array Nat := #[10, 20, 30, 40, 50]
def mappedArr := arr.map (· * 2)
-- #[20, 40, 60, 80, 100]
```

**Besonderheiten:**
- `List.map` und `Array.map` für Mapping
- `·`-Syntax als Kurzform für anonyme Funktionen
- Gibt eine neue Collection zurück (immutable)
- `List.filterMap` kombiniert Mapping und Filtering (für `Option`-Ergebnisse)

**Weiterführende Links:**
- [Lean 4 Documentation - List](https://leanprover-community.github.io/mathlib4_docs/Init/Prelude.html#List)
- [Functional Programming in Lean](https://lean-lang.org/functional_programming_in_lean/)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
Numbers = [10, 20, 30, 40, 50],
Mapped = list.map((func(N) = N * 2), Numbers)
% Mapped = [20, 40, 60, 80, 100]
```

**Besonderheiten:**
- `list.map/2` (Funktion) oder `list.map/3` (Prädikat) für Mapping
- Lambda-Funktionen mit `(func(N) = ...)`-Syntax
- Gibt neue Liste zurück (immutable)
- Auch `list.map2`, `list.map3` für paralleles Mapping über mehrere Listen

**Weiterführende Links:**
- [Mercury Standard Library - list](https://www.mercurylang.org/information/doc-release/mercury_library/list.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
val numbers = listOf(10, 20, 30, 40, 50)
val mapped = numbers.map { it * 2 }
```

**Besonderheiten:**
- `map` Funktion für Mapping
- Unterstützt auch `mapIndexed` für Index-Mapping
- Funktionale Programmierung

**Weiterführende Links:**
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

**Besonderheiten:**
- Manuelle Implementierung mit Schleife erforderlich
- Keine native Map-Funktion
- Unterstützt auch funktionale Bibliotheken

**Weiterführende Links:**
- [Lua Documentation - For Loops](https://www.lua.org/manual/5.4/manual.html#3.3.5)

</TabItem>
<TabItem value="mojo" label="Mojo">

```mojo
var numbers = List[Int](10, 20, 30, 40, 50)
var mapped = numbers.map(lambda n: n * 2)
```

**Besonderheiten:**
- `map` Methode für Mapping
- Unterstützt Lambda-Ausdrücke
- Python-ähnliche Syntax

**Weiterführende Links:**
- [Mojo Documentation](https://docs.modular.com/mojo)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
var numbers = @[10, 20, 30, 40, 50]
var mapped = numbers.map(proc(n: int): int = n * 2)
```

**Besonderheiten:**
- `map` Funktion für Mapping
- Unterstützt auch `mapIt` für kompakte Syntax
- Funktionale Programmierung

**Weiterführende Links:**
- [Nim Documentation - map](https://nim-lang.org/docs/sequtils.html#map%2Cseq%2Cuntyped)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
let numbers = [10; 20; 30; 40; 50]
let mapped = List.map (fun n -> n * 2) numbers
```

**Besonderheiten:**
- `List.map` für Mapping
- Unterstützt auch `List.mapi` für Index-Mapping
- Funktionale Programmierung

**Weiterführende Links:**
- [OCaml Documentation - List.map](https://v2.ocaml.org/api/List.html#VALmap)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
my @numbers = (10, 20, 30, 40, 50);
my @mapped = map { $_ * 2 } @numbers;
```

**Besonderheiten:**
- `map` Funktion für Mapping
- Unterstützt auch `map` mit mehreren Listen
- Perl-idiomatisch

**Weiterführende Links:**
- [Perl Documentation - map](https://perldoc.perl.org/functions/map)

</TabItem>
<TabItem value="php" label="PHP">

```php
$numbers = [10, 20, 30, 40, 50];
$mapped = array_map(fn($n) => $n * 2, $numbers);
```

**Besonderheiten:**
- `array_map` Funktion für Mapping
- Unterstützt auch Arrow Functions (seit PHP 7.4)
- Unterstützt auch `array_map` mit mehreren Arrays

**Weiterführende Links:**
- [PHP Documentation - array_map](https://www.php.net/manual/en/function.array-map.php)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
numbers = [10, 20, 30, 40, 50]
mapped = map (\n -> n * 2) numbers
```

**Besonderheiten:**
- `map` Funktion für Mapping
- Funktionale Programmierung
- Typ-sicher

**Weiterführende Links:**
- [PureScript Documentation - map](https://pursuit.purescript.org/packages/purescript-prelude/6.0.0/docs/Data.Functor#v:map)

</TabItem>
<TabItem value="python" label="Python">

```python
numbers = [10, 20, 30, 40, 50]
mapped = list(map(lambda n: n * 2, numbers))
```

**Besonderheiten:**
- `map` Funktion für Mapping
- Unterstützt auch List Comprehensions
- Lazy Evaluation bei Python 3

**Weiterführende Links:**
- [Python Documentation - map](https://docs.python.org/3/library/functions.html#map)

</TabItem>
<TabItem value="r" label="R">

```r
numbers <- c(10, 20, 30, 40, 50)
mapped <- numbers * 2
```

**Besonderheiten:**
- Vektorisiertes Mapping mit Operatoren
- Unterstützt auch `lapply` für funktionale Transformation
- Vektorisiert wenn möglich

**Weiterführende Links:**
- [R Documentation - lapply](https://www.rdocumentation.org/packages/base/versions/3.6.2/topics/lapply)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
(define numbers '(10 20 30 40 50))
(define mapped (map (lambda (n) (* n 2)) numbers))
```

**Besonderheiten:**
- `map` Funktion für Mapping
- Funktionale Programmierung
- Unterstützt auch `map` mit mehreren Listen

**Weiterführende Links:**
- [Racket Documentation - map](https://docs.racket-lang.org/reference/pairs.html#%28def._%28%28lib._racket%2Fprivate%2Flist..rkt%29._map%29%29)

</TabItem>
<TabItem value="roc" label="Roc">

```roc
numbers = [10, 20, 30, 40, 50]
mapped = List.map numbers \n -> n * 2
```

**Besonderheiten:**
- `List.map` für Mapping
- Funktionale Programmierung
- Typ-sicher

**Weiterführende Links:**
- [Roc Documentation - List.map](https://www.roc-lang.org/builtins/List#map)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
numbers = [10, 20, 30, 40, 50]
mapped = numbers.map { |n| n * 2 }
```

**Besonderheiten:**
- `map` Methode für Mapping
- Unterstützt auch `collect` (Alias)
- Block-basiert

**Weiterführende Links:**
- [Ruby Documentation - Array.map](https://ruby-doc.org/core-3.1.0/Array.html#method-i-map)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
let numbers = vec![10, 20, 30, 40, 50];
let mapped: Vec<i32> = numbers.into_iter()
    .map(|n| n * 2)
    .collect();
```

**Besonderheiten:**
- `map` Methode für Iterator-Mapping
- Lazy Evaluation
- Ownership-basiert

**Weiterführende Links:**
- [Rust Documentation - Iterator.map](https://doc.rust-lang.org/std/iter/trait.Iterator.html#method.map)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
val numbers = List(10, 20, 30, 40, 50)
val mapped = numbers.map(_ * 2)
```

**Besonderheiten:**
- `map` Methode für Mapping
- Unterstützt auch `map` mit Index
- Funktionale Programmierung

**Weiterführende Links:**
- [Scala Documentation - map](https://www.scala-lang.org/api/current/scala/collection/immutable/List.html#map%28B%29%28f:A=%3EB%29:List%5BB%5D)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
(define numbers '(10 20 30 40 50))
(define mapped (map (lambda (n) (* n 2)) numbers))
```

**Besonderheiten:**
- `map` Funktion für Mapping (SRFI-1)
- Funktionale Programmierung
- Unterstützt auch `map` mit mehreren Listen

**Weiterführende Links:**
- [Scheme Documentation - map](https://srfi.schemers.org/srfi-1/srfi-1.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
let numbers = [10, 20, 30, 40, 50]
let mapped = numbers.map { $0 * 2 }
```

**Besonderheiten:**
- `map` Methode für Mapping
- Unterstützt auch `map` mit Index
- Closure-basiert

**Weiterführende Links:**
- [Swift Documentation - map](https://developer.apple.com/documentation/swift/array/map(_:)-87n4z)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
const numbers: number[] = [10, 20, 30, 40, 50];
const mapped = numbers.map(n => n * 2);
```

**Besonderheiten:**
- `map` Methode für Mapping (seit ES5)
- Unterstützt auch `map` mit Index
- Typsicher mit TypeScript

**Weiterführende Links:**
- [TypeScript Handbook - Array.map](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
Dim numbers() As Integer = {10, 20, 30, 40, 50}
Dim mapped = numbers.Select(Function(n) n * 2).ToArray()
```

**Besonderheiten:**
- `Select` Methode aus LINQ
- Unterstützt auch `Select` mit Index
- Typsicher

**Weiterführende Links:**
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

**Besonderheiten:**
- `map` ist durch das `Functor`-Interface definiert
- Funktioniert mit Listen, Maybe, und allen Functor-Instanzen
- Gibt eine neue Struktur zurück (immutable)

**Weiterführende Links:**
- [Idris 2 Documentation - Interfaces](https://idris2.readthedocs.io/en/latest/tutorial/interfaces.html)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
numbers = {1, 2, 3, 4, 5};
doubled = Map[# * 2 &, numbers]  (* {2, 4, 6, 8, 10} *)
(* Kurzform *)
doubled2 = # * 2 & /@ numbers   (* {2, 4, 6, 8, 10} *)
```

**Besonderheiten:**
- `Map[f, list]` oder `f /@ list` wendet f auf jedes Element an
- `MapThread[f, {list1, list2}]` für paralleles Mapping
- `MapIndexed[f, list]` für Mapping mit Index

**Weiterführende Links:**
- [Wolfram Language Documentation - Map](https://reference.wolfram.com/language/ref/Map.html)

</TabItem>
</Tabs>


## 10.2.4. Reduction / Folding

Das Reduzieren einer Collection auf einen einzelnen Wert durch wiederholte Anwendung einer Funktion. Ermöglicht es, alle Elemente einer Collection zu einem einzigen Ergebnis zu kombinieren.

### Sprachen {#sprachen}

<Tabs availableTabs={['clojure', 'common-lisp', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'elixir', 'elm', 'erlang', 'fsharp', 'gleam', 'groovy', 'haskell', 'haxe', 'idris', 'java', 'javascript', 'julia', 'koka', 'kotlin', 'lean4', 'mercury', 'mojo', 'nim', 'ocaml', 'perl', 'php', 'purescript', 'python', 'r', 'racket', 'roc', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'vbnet', 'wolfram-language']} orangeTabs={['c', 'go', 'lua']}>
<TabItem value="c" label="C">

```c
int numbers[] = {10, 20, 30, 40, 50};
int sum = 0;

for (int i = 0; i < 5; i++) {
    sum += numbers[i];
}
```

**Besonderheiten:**
- Manuelle Implementierung mit Schleife erforderlich
- Keine native Reduce-Funktion
- Initialwert muss manuell gesetzt werden

**Weiterführende Links:**
- [C Documentation - For Loops](https://en.cppreference.com/w/c/language/for)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
int[] numbers = {10, 20, 30, 40, 50};
var sum = numbers.Aggregate(0, (acc, n) => acc + n);
```

**Besonderheiten:**
- `Aggregate` Methode aus LINQ (seit C# 3.0)
- Unterstützt auch `Sum` für numerische Summen
- Initialwert als Parameter

**Weiterführende Links:**
- [Microsoft C# Documentation - Aggregate](https://learn.microsoft.com/en-us/dotnet/api/system.linq.enumerable.aggregate)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
std::vector<int> numbers = {10, 20, 30, 40, 50};
int sum = std::accumulate(numbers.begin(), numbers.end(), 0,
    [](int acc, int n) { return acc + n; });
```

**Besonderheiten:**
- `std::accumulate` Algorithm
- Unterstützt auch `std::reduce` für Parallelisierung (seit C++17)
- Initialwert als Parameter

**Weiterführende Links:**
- [cppreference.com - accumulate](https://en.cppreference.com/w/cpp/algorithm/accumulate)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
(def numbers [10 20 30 40 50])
(def sum (reduce + 0 numbers))
```

**Besonderheiten:**
- `reduce` Funktion für Reduction
- Unterstützt auch `reductions` für Zwischenergebnisse
- Funktionale Programmierung

**Weiterführende Links:**
- [Clojure Documentation - reduce](https://clojuredocs.org/clojure.core/reduce)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
(let ((numbers '(10 20 30 40 50)))
  (reduce #'+ numbers :initial-value 0))
```

**Besonderheiten:**
- `reduce` Funktion für Reduction
- Unterstützt auch `reduce` ohne Initialwert
- Funktionale Programmierung

**Weiterführende Links:**
- [Common Lisp HyperSpec - reduce](http://www.lispworks.com/documentation/HyperSpec/Body/f_reduce.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
numbers = [10, 20, 30, 40, 50]
sum = numbers.reduce(0) { |acc, n| acc + n }
```

**Besonderheiten:**
- `reduce` Methode für Reduction
- Unterstützt auch `sum` für numerische Summen
- Block-basiert

**Weiterführende Links:**
- [Crystal Documentation - Enumerable](https://crystal-lang.org/api/1.11.0/Enumerable.html)

</TabItem>
<TabItem value="d" label="D">

```d
int[] numbers = [10, 20, 30, 40, 50];
int sum = numbers.reduce!((a, b) => a + b);
```

**Besonderheiten:**
- `reduce` Template-Funktion
- Unterstützt auch `fold` für expliziten Initialwert
- Funktionale Programmierung

**Weiterführende Links:**
- [D Language Documentation - reduce](https://dlang.org/phobos/std_algorithm_iteration.html#reduce)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
var numbers = [10, 20, 30, 40, 50];
var sum = numbers.fold(0, (acc, n) => acc + n);
```

**Besonderheiten:**
- `fold` Methode für Reduction
- Unterstützt auch `reduce` ohne Initialwert
- Initialwert als Parameter

**Weiterführende Links:**
- [Dart Documentation - fold](https://api.dart.dev/stable/dart-core/Iterable/fold.html)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
numbers = [10, 20, 30, 40, 50]
sum = Enum.reduce(numbers, 0, fn n, acc -> acc + n end)
```

**Besonderheiten:**
- `Enum.reduce` für Reduction
- Unterstützt auch `Enum.reduce_while` für bedingte Reduction
- Funktionale Programmierung

**Weiterführende Links:**
- [Elixir Documentation - Enum.reduce](https://hexdocs.pm/elixir/Enum.html#reduce/3)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
numbers = [10, 20, 30, 40, 50]
sum = List.foldl (+) 0 numbers
```

**Besonderheiten:**
- `List.foldl` für Left-Fold
- Unterstützt auch `List.foldr` für Right-Fold
- Funktionale Programmierung

**Weiterführende Links:**
- [Elm Documentation - List.foldl](https://package.elm-lang.org/packages/elm/core/latest/List#foldl)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
Numbers = [10, 20, 30, 40, 50],
Sum = lists:foldl(fun(N, Acc) -> Acc + N end, 0, Numbers).
```

**Besonderheiten:**
- `lists:foldl` für Left-Fold
- Unterstützt auch `lists:foldr` für Right-Fold
- Funktionale Programmierung

**Weiterführende Links:**
- [Erlang Documentation - lists:foldl](https://www.erlang.org/doc/man/lists.html#foldl-3)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
let numbers = [10; 20; 30; 40; 50]
let sum = List.fold (+) 0 numbers
```

**Besonderheiten:**
- `List.fold` für Left-Fold
- Unterstützt auch `List.foldBack` für Right-Fold
- Funktionale Programmierung

**Weiterführende Links:**
- [F# Documentation - List.fold](https://fsharp.github.io/fsharp-core-docs/reference/fsharp-collections-listmodule.html#fold)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
let numbers = [10, 20, 30, 40, 50]
let sum = list.fold(numbers, 0, fn(acc, n) { acc + n })
```

**Besonderheiten:**
- `list.fold` für Reduction
- Funktionale Programmierung
- Typ-sicher

**Weiterführende Links:**
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

**Besonderheiten:**
- Manuelle Implementierung mit Schleife erforderlich
- Keine native Reduce-Funktion in Standard-Bibliothek
- Initialwert muss manuell gesetzt werden

**Weiterführende Links:**
- [Go Documentation - For Loops](https://go.dev/tour/flowcontrol/1)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
def numbers = [10, 20, 30, 40, 50]
def sum = numbers.inject(0) { acc, n -> acc + n }
```

**Besonderheiten:**
- `inject` Methode für Reduction
- Unterstützt auch `sum` für numerische Summen
- Closure-basiert

**Weiterführende Links:**
- [Groovy Documentation - inject](https://groovy-lang.org/groovy-dev-kit.html#_working_with_collections)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
numbers = [10, 20, 30, 40, 50]
sum = foldl (+) 0 numbers
```

**Besonderheiten:**
- `foldl` für Left-Fold
- Unterstützt auch `foldr` für Right-Fold
- Funktionale Programmierung

**Weiterführende Links:**
- [Haskell Documentation - foldl](https://hackage.haskell.org/package/base/docs/Prelude.html#v:foldl)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Benötigt: using Lambda;
var numbers = [10, 20, 30, 40, 50];
var sum = Lambda.fold(numbers, function(n, acc) return acc + n, 0);
```

**Besonderheiten:**
- `Lambda.fold` für Reduction (Parameter: item, accumulator)
- Erfordert `using Lambda;` oder expliziten `Lambda.fold()`-Aufruf
- Cross-platform

**Weiterführende Links:**
- [Haxe Documentation - Lambda.fold](https://api.haxe.org/Lambda.html#fold)

</TabItem>
<TabItem value="java" label="Java">

```java
List<Integer> numbers = Arrays.asList(10, 20, 30, 40, 50);
int sum = numbers.stream()
    .reduce(0, (acc, n) -> acc + n);
```

**Besonderheiten:**
- Stream API für Reduction (seit Java 8)
- Unterstützt auch `reduce` ohne Initialwert
- Lazy Evaluation

**Weiterführende Links:**
- [Oracle Java Documentation - Stream.reduce](https://docs.oracle.com/javase/8/docs/api/java/util/stream/Stream.html#reduce-T-java.util.function.BinaryOperator-)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
const numbers = [10, 20, 30, 40, 50];
const sum = numbers.reduce((acc, n) => acc + n, 0);
```

**Besonderheiten:**
- `reduce` Methode für Reduction (seit ES5)
- Unterstützt auch `reduce` ohne Initialwert
- Array-Methode

**Weiterführende Links:**
- [MDN Web Docs - Array.reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
numbers = [10, 20, 30, 40, 50]
sum = reduce(+, numbers, init=0)
```

**Besonderheiten:**
- `reduce` Funktion für Reduction
- Unterstützt auch `foldl` und `foldr` für Richtungssteuerung
- Hochperformant

**Weiterführende Links:**
- [Julia Documentation - reduce](https://docs.julialang.org/en/v1/base/collections/#Base.reduce)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
val numbers = [10, 20, 30, 40, 50]
val sum = numbers.foldl(0, fn(acc, n) acc + n)
// 150

// foldr für Rechts-Faltung
val product = numbers.foldr(1, fn(n, acc) n * acc)
```

**Besonderheiten:**
- `foldl` für Links-Faltung, `foldr` für Rechts-Faltung
- Erster Parameter ist der Startwert
- Funktionale Higher-Order-Funktion

**Weiterführende Links:**
- [Koka Standard Library - list](https://koka-lang.github.io/koka/doc/std_core_list.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
def numbers : List Nat := [10, 20, 30, 40, 50]

-- Links-Faltung
def sum := numbers.foldl (· + ·) 0
-- 150

-- Rechts-Faltung
def product := numbers.foldr (· * ·) 1
-- 12000000

-- Array-Folding
def arr : Array Nat := #[10, 20, 30, 40, 50]
def arrSum := arr.foldl (· + ·) 0
-- 150
```

**Besonderheiten:**
- `List.foldl` für Links-Faltung, `List.foldr` für Rechts-Faltung
- Startwert als zweiter Parameter (bei `foldl`) bzw. letzter (bei `foldr`)
- `·`-Syntax für kompakte Binäroperationen
- Auch auf `Array` verfügbar

**Weiterführende Links:**
- [Lean 4 Documentation - List](https://leanprover-community.github.io/mathlib4_docs/Init/Prelude.html#List)
- [Functional Programming in Lean](https://lean-lang.org/functional_programming_in_lean/)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
Numbers = [10, 20, 30, 40, 50],
Sum = list.foldl((func(N, Acc) = Acc + N), Numbers, 0)
% Sum = 150

% Rechts-Faltung
Product = list.foldr((func(N, Acc) = N * Acc), Numbers, 1)
% Product = 3000000
```

**Besonderheiten:**
- `list.foldl/3` (Funktion) für Links-Faltung
- `list.foldr/3` (Funktion) für Rechts-Faltung
- Startwert als dritter Parameter
- Auch als Prädikat-Variante `list.foldl/4` verfügbar

**Weiterführende Links:**
- [Mercury Standard Library - list](https://www.mercurylang.org/information/doc-release/mercury_library/list.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
val numbers = listOf(10, 20, 30, 40, 50)
val sum = numbers.fold(0) { acc, n -> acc + n }
```

**Besonderheiten:**
- `fold` Funktion für Reduction
- Unterstützt auch `reduce` ohne Initialwert
- Funktionale Programmierung

**Weiterführende Links:**
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

**Besonderheiten:**
- Manuelle Implementierung mit Schleife erforderlich
- Keine native Reduce-Funktion
- Initialwert muss manuell gesetzt werden

**Weiterführende Links:**
- [Lua Documentation - For Loops](https://www.lua.org/manual/5.4/manual.html#3.3.5)

</TabItem>
<TabItem value="mojo" label="Mojo">

```mojo
var numbers = List[Int](10, 20, 30, 40, 50)
var sum = numbers.reduce(lambda acc, n: acc + n, 0)
```

**Besonderheiten:**
- `reduce` Methode für Reduction
- Unterstützt Lambda-Ausdrücke
- Python-ähnliche Syntax

**Weiterführende Links:**
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

**Besonderheiten:**
- `List.fold_left` für Left-Fold
- Unterstützt auch `List.fold_right` für Right-Fold
- Funktionale Programmierung

**Weiterführende Links:**
- [OCaml Documentation - List.fold_left](https://v2.ocaml.org/api/List.html#VALfold_left)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Benötigt: use List::Util qw(reduce);
my @numbers = (10, 20, 30, 40, 50);
my $sum = reduce { $a + $b } @numbers;
```

**Besonderheiten:**
- `reduce` Funktion aus `List::Util`
- Erstes Element der Liste dient als Initialwert
- Unterstützt auch `sum` aus `List::Util` für numerische Summen

**Weiterführende Links:**
- [Perl Documentation - List::Util reduce](https://perldoc.perl.org/List::Util#reduce)

</TabItem>
<TabItem value="php" label="PHP">

```php
$numbers = [10, 20, 30, 40, 50];
$sum = array_reduce($numbers, fn($acc, $n) => $acc + $n, 0);
```

**Besonderheiten:**
- `array_reduce` Funktion für Reduction
- Unterstützt auch Arrow Functions (seit PHP 7.4)
- Initialwert als Parameter

**Weiterführende Links:**
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

**Besonderheiten:**
- `reduce` Funktion aus functools
- Unterstützt auch `sum` für numerische Summen
- Initialwert als Parameter

**Weiterführende Links:**
- [Python Documentation - functools.reduce](https://docs.python.org/3/library/functools.html#functools.reduce)

</TabItem>
<TabItem value="r" label="R">

```r
numbers <- c(10, 20, 30, 40, 50)
sum <- Reduce(`+`, numbers, init = 0)
```

**Besonderheiten:**
- `Reduce` Funktion für Reduction
- Unterstützt auch `sum` für numerische Summen
- Funktionale Programmierung

**Weiterführende Links:**
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

**Besonderheiten:**
- `List.fold` für Reduction
- Funktionale Programmierung
- Typ-sicher

**Weiterführende Links:**
- [Roc Documentation - List.fold](https://www.roc-lang.org/builtins/List#fold)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
numbers = [10, 20, 30, 40, 50]
sum = numbers.reduce(0) { |acc, n| acc + n }
```

**Besonderheiten:**
- `reduce` Methode für Reduction
- Unterstützt auch `inject` (Alias)
- Block-basiert

**Weiterführende Links:**
- [Ruby Documentation - Array.reduce](https://ruby-doc.org/core-3.1.0/Array.html#method-i-reduce)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
let numbers = vec![10, 20, 30, 40, 50];
let sum = numbers.into_iter()
    .fold(0, |acc, n| acc + n);
```

**Besonderheiten:**
- `fold` Methode für Iterator-Reduction
- Unterstützt auch `reduce` ohne Initialwert
- Ownership-basiert

**Weiterführende Links:**
- [Rust Documentation - Iterator.fold](https://doc.rust-lang.org/std/iter/trait.Iterator.html#method.fold)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
val numbers = List(10, 20, 30, 40, 50)
val sum = numbers.foldLeft(0)(_ + _)
```

**Besonderheiten:**
- `foldLeft` für Left-Fold
- Unterstützt auch `foldRight` für Right-Fold
- Funktionale Programmierung

**Weiterführende Links:**
- [Scala Documentation - foldLeft](https://www.scala-lang.org/api/current/scala/collection/immutable/List.html#foldLeft%5BB%5D%28z:B%29%28op:%28B,A%29=%3EB%29:B)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
(define numbers '(10 20 30 40 50))
(define sum (fold + 0 numbers))
```

**Besonderheiten:**
- `fold` Funktion für Reduction (SRFI-1)
- Unterstützt auch `fold-right` für Right-Fold
- Funktionale Programmierung

**Weiterführende Links:**
- [Scheme Documentation - fold](https://srfi.schemers.org/srfi-1/srfi-1.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
let numbers = [10, 20, 30, 40, 50]
let sum = numbers.reduce(0) { $0 + $1 }
```

**Besonderheiten:**
- `reduce` Methode für Reduction
- Unterstützt auch `reduce` ohne Initialwert
- Closure-basiert

**Weiterführende Links:**
- [Swift Documentation - reduce](https://developer.apple.com/documentation/swift/array/reduce(_:_:)-8u3lo)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
const numbers: number[] = [10, 20, 30, 40, 50];
const sum = numbers.reduce((acc, n) => acc + n, 0);
```

**Besonderheiten:**
- `reduce` Methode für Reduction (seit ES5)
- Unterstützt auch `reduce` ohne Initialwert
- Typsicher mit TypeScript

**Weiterführende Links:**
- [TypeScript Handbook - Array.reduce](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
Dim numbers() As Integer = {10, 20, 30, 40, 50}
Dim sum = numbers.Aggregate(0, Function(acc, n) acc + n)
```

**Besonderheiten:**
- `Aggregate` Methode aus LINQ
- Unterstützt auch `Sum` für numerische Summen
- Typsicher

**Weiterführende Links:**
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

**Besonderheiten:**
- `foldl` für Links-Faltung, `foldr` für Rechts-Faltung
- Durch das `Foldable`-Interface definiert
- Funktioniert mit Listen und allen Foldable-Instanzen

**Weiterführende Links:**
- [Idris 2 Documentation - Interfaces](https://idris2.readthedocs.io/en/latest/tutorial/interfaces.html)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
numbers = {1, 2, 3, 4, 5};
sum = Fold[Plus, 0, numbers]        (* 15 *)
product = Fold[Times, 1, numbers]   (* 120 *)
```

**Besonderheiten:**
- `Fold[f, init, list]` faltet von links
- `FoldList[f, init, list]` gibt alle Zwischenwerte zurück
- `Total[list]` als spezialisierte Summen-Funktion

**Weiterführende Links:**
- [Wolfram Language Documentation - Fold](https://reference.wolfram.com/language/ref/Fold.html)

</TabItem>
</Tabs>


## 10.2.5. Searching

Das Suchen nach einem Element oder mehreren Elementen in einer Collection. Ermöglicht es, zu prüfen, ob ein Element vorhanden ist, oder dessen Position zu finden.

### Sprachen {#sprachen}

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

**Besonderheiten:**
- Manuelle Implementierung mit Schleife erforderlich
- Keine native Search-Funktion
- Index muss manuell verfolgt werden

**Weiterführende Links:**
- [C Documentation - For Loops](https://en.cppreference.com/w/c/language/for)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
int[] numbers = {10, 20, 30, 40, 50};
bool found = numbers.Contains(30);
int index = Array.IndexOf(numbers, 30);
```

**Besonderheiten:**
- `Contains` für Existenzprüfung
- `Array.IndexOf` für Index-Suche
- Unterstützt auch `Find` für Prädikat-Suche

**Weiterführende Links:**
- [Microsoft C# Documentation - Array.IndexOf](https://learn.microsoft.com/en-us/dotnet/api/system.array.indexof)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
std::vector<int> numbers = {10, 20, 30, 40, 50};
bool found = std::find(numbers.begin(), numbers.end(), 30) != numbers.end();
auto it = std::find(numbers.begin(), numbers.end(), 30);
int index = std::distance(numbers.begin(), it);
```

**Besonderheiten:**
- `std::find` Algorithm für Suche
- Unterstützt auch `std::find_if` für Prädikat-Suche
- Gibt Iterator zurück

**Weiterführende Links:**
- [cppreference.com - find](https://en.cppreference.com/w/cpp/algorithm/find)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
(def numbers [10 20 30 40 50])
(def found (some #(= % 30) numbers))
(def index (.indexOf numbers 30))
```

**Besonderheiten:**
- `some` für Existenzprüfung
- `.indexOf` für Index-Suche
- Unterstützt auch `filter` für mehrere Treffer

**Weiterführende Links:**
- [Clojure Documentation - some](https://clojuredocs.org/clojure.core/some)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
(let ((numbers '(10 20 30 40 50)))
  (position 30 numbers))
```

**Besonderheiten:**
- `position` für Index-Suche
- Unterstützt auch `find` für Element-Suche
- Gibt `nil` zurück wenn nicht gefunden

**Weiterführende Links:**
- [Common Lisp HyperSpec - position](http://www.lispworks.com/documentation/HyperSpec/Body/f_posit.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
numbers = [10, 20, 30, 40, 50]
found = numbers.includes?(30)
index = numbers.index(30)
```

**Besonderheiten:**
- `includes?` für Existenzprüfung
- `index` für Index-Suche
- Unterstützt auch `find` für Prädikat-Suche

**Weiterführende Links:**
- [Crystal Documentation - Enumerable](https://crystal-lang.org/api/1.11.0/Enumerable.html)

</TabItem>
<TabItem value="d" label="D">

```d
int[] numbers = [10, 20, 30, 40, 50];
bool found = numbers.canFind(30);
size_t index = numbers.countUntil!(n => n == 30);
```

**Besonderheiten:**
- `canFind` für Existenzprüfung
- `countUntil` für Index-Suche
- Unterstützt auch `find` für Element-Suche

**Weiterführende Links:**
- [D Language Documentation - canFind](https://dlang.org/phobos/std_algorithm_searching.html#canFind)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
var numbers = [10, 20, 30, 40, 50];
bool found = numbers.contains(30);
int index = numbers.indexOf(30);
```

**Besonderheiten:**
- `contains` für Existenzprüfung
- `indexOf` für Index-Suche
- Unterstützt auch `firstWhere` für Prädikat-Suche

**Weiterführende Links:**
- [Dart Documentation - contains](https://api.dart.dev/stable/dart-core/List/contains.html)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
numbers = [10, 20, 30, 40, 50]
found = Enum.member?(numbers, 30)
index = Enum.find_index(numbers, fn n -> n == 30 end)
```

**Besonderheiten:**
- `Enum.member?` für Existenzprüfung
- `Enum.find_index` für Index-Suche
- Unterstützt auch `Enum.find` für Element-Suche

**Weiterführende Links:**
- [Elixir Documentation - Enum.member?](https://hexdocs.pm/elixir/Enum.html#member?/2)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
numbers = [10, 20, 30, 40, 50]

-- Existenzprüfung
found = List.member 30 numbers  -- True

-- Erstes Element finden, das eine Bedingung erfüllt
-- Benötigt: import List.Extra (elm-community/list-extra)
-- found = List.Extra.find (\n -> n > 25) numbers

-- Mit Core-Funktionen: Filter + Head
firstOver25 = List.filter (\n -> n > 25) numbers |> List.head
-- Just 30
```

**Besonderheiten:**
- `List.member` für Existenzprüfung (im Core-Modul)
- Index-basierte Suche nicht im Core-Modul
- `List.filter` + `List.head` als Core-Alternative für Elementsuche
- Community-Paket `elm-community/list-extra` bietet erweiterte Suchfunktionen

**Weiterführende Links:**
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

**Besonderheiten:**
- `lists:member` für Existenzprüfung
- Index-Suche erfordert manuelle Implementierung
- Unterstützt auch `lists:keyfind` für strukturierte Suche

**Weiterführende Links:**
- [Erlang Documentation - lists:member](https://www.erlang.org/doc/man/lists.html#member-2)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
let numbers = [10; 20; 30; 40; 50]
let found = List.contains 30 numbers
let index = List.findIndex (fun n -> n = 30) numbers
```

**Besonderheiten:**
- `List.contains` für Existenzprüfung
- `List.findIndex` für Index-Suche
- Unterstützt auch `List.find` für Element-Suche

**Weiterführende Links:**
- [F# Documentation - List.contains](https://fsharp.github.io/fsharp-core-docs/reference/fsharp-collections-listmodule.html#contains)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
let numbers = [10, 20, 30, 40, 50]
let found = list.contains(numbers, 30)  // True
let result = list.find(numbers, fn(n) { n == 30 })  // Ok(30)
```

**Besonderheiten:**
- `list.contains` für Existenzprüfung
- `list.find` für Suche mit Prädikat, gibt `Result` zurück
- Kein `list.index_of` - Index-basierte Suche ist nicht idiomatisch

**Weiterführende Links:**
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

**Besonderheiten:**
- Manuelle Implementierung mit Schleife erforderlich
- Keine native Search-Funktion in Standard-Bibliothek
- Index muss manuell verfolgt werden

**Weiterführende Links:**
- [Go Documentation - For Loops](https://go.dev/tour/flowcontrol/1)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
def numbers = [10, 20, 30, 40, 50]
def found = numbers.contains(30)
def index = numbers.indexOf(30)
```

**Besonderheiten:**
- `contains` für Existenzprüfung
- `indexOf` für Index-Suche
- Unterstützt auch `find` für Prädikat-Suche

**Weiterführende Links:**
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

**Besonderheiten:**
- `indexOf` für Index-Suche
- Existenzprüfung durch Vergleich mit -1
- Cross-platform

**Weiterführende Links:**
- [Haxe Documentation - Array.indexOf](https://api.haxe.org/Array.html#indexOf)

</TabItem>
<TabItem value="java" label="Java">

```java
List<Integer> numbers = Arrays.asList(10, 20, 30, 40, 50);
boolean found = numbers.contains(30);
int index = numbers.indexOf(30);
```

**Besonderheiten:**
- `contains` für Existenzprüfung
- `indexOf` für Index-Suche
- Unterstützt auch Stream API für Prädikat-Suche

**Weiterführende Links:**
- [Oracle Java Documentation - List.contains](https://docs.oracle.com/javase/8/docs/api/java/util/List.html#contains-java.lang.Object-)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
const numbers = [10, 20, 30, 40, 50];
const found = numbers.includes(30);
const index = numbers.indexOf(30);
```

**Besonderheiten:**
- `includes` für Existenzprüfung (seit ES2016)
- `indexOf` für Index-Suche (seit ES5)
- Unterstützt auch `find` für Prädikat-Suche

**Weiterführende Links:**
- [MDN Web Docs - Array.includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
numbers = [10, 20, 30, 40, 50]
found = 30 in numbers
index = findfirst(n -> n == 30, numbers)
```

**Besonderheiten:**
- `in` für Existenzprüfung
- `findfirst` für Index-Suche
- Unterstützt auch `findall` für mehrere Treffer

**Weiterführende Links:**
- [Julia Documentation - findfirst](https://docs.julialang.org/en/v1/base/collections/#Base.findfirst)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
val numbers = [10, 20, 30, 40, 50]

// Existenzprüfung
val has30 = numbers.any(fn(n) n == 30)
// True

// Suche nach erstem Treffer
val found = numbers.find(fn(n) n > 25)
// Just(30)

// Alle Elemente prüfen
val allPositive = numbers.all(fn(n) n > 0)
// True
```

**Besonderheiten:**
- `find` gibt `maybe<a>` zurück (Just oder Nothing)
- `any` und `all` für Existenz-/Universalprüfung
- Funktionale Higher-Order-Funktionen

**Weiterführende Links:**
- [Koka Standard Library - list](https://koka-lang.github.io/koka/doc/std_core_list.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
def numbers : List Nat := [10, 20, 30, 40, 50]

-- Suche nach erstem Treffer
def found := numbers.find? (· > 25)
-- some 30

-- Existenzprüfung
def has30 := numbers.any (· == 30)
-- true

-- Alle Elemente prüfen
def allPositive := numbers.all (· > 0)
-- true

-- Element enthalten
def contains30 := numbers.contains 30
-- true

-- Index finden
def idx := numbers.findIdx? (· > 25)
-- some 2
```

**Besonderheiten:**
- `List.find?` gibt `Option α` zurück (`some` oder `none`)
- `List.any` und `List.all` für Existenz-/Universalprüfung
- `List.contains` für einfache Enthaltungsprüfung
- `List.findIdx?` gibt den Index des ersten Treffers zurück

**Weiterführende Links:**
- [Lean 4 Documentation - List](https://leanprover-community.github.io/mathlib4_docs/Init/Prelude.html#List)
- [Functional Programming in Lean](https://lean-lang.org/functional_programming_in_lean/)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
Numbers = [10, 20, 30, 40, 50],

% Existenzprüfung
( list.member(30, Numbers) ->
    Found = yes
;
    Found = no
),

% Suche mit Prädikat
( list.find_first_match(
      (pred(N::in) is semidet :- N > 25),
      Numbers, Match) ->
    % Match = 30
    true
;
    true
)
```

**Besonderheiten:**
- `list.member/2` für Existenzprüfung (`semidet` – kann scheitern)
- `list.find_first_match/3` für Suche mit Prädikat
- Kein `indexOf` – Index-basierte Suche ist nicht idiomatisch
- If-Then-Else mit `( Cond -> Then ; Else )` für semidet-Prädikate

**Weiterführende Links:**
- [Mercury Standard Library - list](https://www.mercurylang.org/information/doc-release/mercury_library/list.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
val numbers = listOf(10, 20, 30, 40, 50)
val found = numbers.contains(30)
val index = numbers.indexOf(30)
```

**Besonderheiten:**
- `contains` für Existenzprüfung
- `indexOf` für Index-Suche
- Unterstützt auch `find` für Prädikat-Suche

**Weiterführende Links:**
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

**Besonderheiten:**
- Manuelle Implementierung mit Schleife erforderlich
- Keine native Search-Funktion
- Index muss manuell verfolgt werden

**Weiterführende Links:**
- [Lua Documentation - For Loops](https://www.lua.org/manual/5.4/manual.html#3.3.5)

</TabItem>
<TabItem value="mojo" label="Mojo">

```mojo
var numbers = List[Int](10, 20, 30, 40, 50)
var found = 30 in numbers
var index = numbers.index(30)
```

**Besonderheiten:**
- `in` für Existenzprüfung
- `index` für Index-Suche
- Python-ähnliche Syntax

**Weiterführende Links:**
- [Mojo Documentation](https://docs.modular.com/mojo)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
var numbers = @[10, 20, 30, 40, 50]
var found = 30 in numbers
var index = numbers.find(30)
```

**Besonderheiten:**
- `in` für Existenzprüfung
- `find` für Index-Suche
- Unterstützt auch `find` mit Prädikat

**Weiterführende Links:**
- [Nim Documentation - find](https://nim-lang.org/docs/sequtils.html#find%2Cseq%2Cuntyped)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
let numbers = [10; 20; 30; 40; 50]
let found = List.mem 30 numbers
let index = List.find_index (fun n -> n = 30) numbers
```

**Besonderheiten:**
- `List.mem` für Existenzprüfung
- `List.find_index` für Index-Suche (gibt Option zurück)
- Funktionale Programmierung

**Weiterführende Links:**
- [OCaml Documentation - List.mem](https://v2.ocaml.org/api/List.html#VALmem)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
my @numbers = (10, 20, 30, 40, 50);
my $found = grep { $_ == 30 } @numbers;
my $index = first_index { $_ == 30 } @numbers;
```

**Besonderheiten:**
- `grep` für Existenzprüfung
- `first_index` aus List::MoreUtils für Index-Suche
- Perl-idiomatisch

**Weiterführende Links:**
- [Perl Documentation - grep](https://perldoc.perl.org/functions/grep)

</TabItem>
<TabItem value="php" label="PHP">

```php
$numbers = [10, 20, 30, 40, 50];
$found = in_array(30, $numbers);
$index = array_search(30, $numbers);
```

**Besonderheiten:**
- `in_array` für Existenzprüfung
- `array_search` für Index-Suche
- Unterstützt auch strikte Typenprüfung

**Weiterführende Links:**
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

**Besonderheiten:**
- `in` für Existenzprüfung
- `index` für Index-Suche
- Unterstützt auch `find` für Prädikat-Suche

**Weiterführende Links:**
- [Python Documentation - list.index](https://docs.python.org/3/tutorial/datastructures.html#more-on-lists)

</TabItem>
<TabItem value="r" label="R">

```r
numbers <- c(10, 20, 30, 40, 50)
found <- 30 %in% numbers
index <- match(30, numbers)
```

**Besonderheiten:**
- `%in%` für Existenzprüfung
- `match` für Index-Suche
- Vektorisiert wenn möglich

**Weiterführende Links:**
- [R Documentation - match](https://www.rdocumentation.org/packages/base/versions/3.6.2/topics/match)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
(define numbers '(10 20 30 40 50))
(define found (member 30 numbers))
(define index (index-of numbers 30))
```

**Besonderheiten:**
- `member` für Existenzprüfung
- `index-of` für Index-Suche
- Unterstützt auch `find` für Prädikat-Suche

**Weiterführende Links:**
- [Racket Documentation - member](https://docs.racket-lang.org/reference/pairs.html#%28def._%28%28lib._racket%2Fprivate%2Flist..rkt%29._member%29%29)

</TabItem>
<TabItem value="roc" label="Roc">

```roc
numbers = [10, 20, 30, 40, 50]
found = List.contains numbers 30
index = List.index_of numbers 30
```

**Besonderheiten:**
- `List.contains` für Existenzprüfung
- `List.index_of` für Index-Suche
- Typ-sicher

**Weiterführende Links:**
- [Roc Documentation - List.contains](https://www.roc-lang.org/builtins/List#contains)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
numbers = [10, 20, 30, 40, 50]
found = numbers.include?(30)
index = numbers.index(30)
```

**Besonderheiten:**
- `include?` für Existenzprüfung
- `index` für Index-Suche
- Unterstützt auch `find` für Prädikat-Suche

**Weiterführende Links:**
- [Ruby Documentation - Array.include?](https://ruby-doc.org/core-3.1.0/Array.html#method-i-include-3F)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
let numbers = vec![10, 20, 30, 40, 50];
let found = numbers.contains(&30);
let index = numbers.iter().position(|&n| n == 30);
```

**Besonderheiten:**
- `contains` für Existenzprüfung
- `position` für Index-Suche (gibt Option zurück)
- Ownership-basiert

**Weiterführende Links:**
- [Rust Documentation - Vec.contains](https://doc.rust-lang.org/std/vec/struct.Vec.html#method.contains)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
val numbers = List(10, 20, 30, 40, 50)
val found = numbers.contains(30)
val index = numbers.indexOf(30)
```

**Besonderheiten:**
- `contains` für Existenzprüfung
- `indexOf` für Index-Suche
- Unterstützt auch `find` für Prädikat-Suche

**Weiterführende Links:**
- [Scala Documentation - contains](https://www.scala-lang.org/api/current/scala/collection/immutable/List.html#contains%28elem:A%29:Boolean)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
(define numbers '(10 20 30 40 50))
(define found (member 30 numbers))
(define index (list-index (lambda (n) (= n 30)) numbers))
```

**Besonderheiten:**
- `member` für Existenzprüfung
- `list-index` für Index-Suche (SRFI-1)
- Funktionale Programmierung

**Weiterführende Links:**
- [Scheme Documentation - member](https://srfi.schemers.org/srfi-1/srfi-1.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
let numbers = [10, 20, 30, 40, 50]
let found = numbers.contains(30)
let index = numbers.firstIndex(of: 30)
```

**Besonderheiten:**
- `contains` für Existenzprüfung
- `firstIndex` für Index-Suche (gibt Optional zurück)
- Unterstützt auch `first` für Element-Suche

**Weiterführende Links:**
- [Swift Documentation - contains](https://developer.apple.com/documentation/swift/array/contains(_:)-1h4k1)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
const numbers: number[] = [10, 20, 30, 40, 50];
const found = numbers.includes(30);
const index = numbers.indexOf(30);
```

**Besonderheiten:**
- `includes` für Existenzprüfung (seit ES2016)
- `indexOf` für Index-Suche (seit ES5)
- Typsicher mit TypeScript

**Weiterführende Links:**
- [TypeScript Handbook - Array.includes](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
Dim numbers() As Integer = {10, 20, 30, 40, 50}
Dim found = numbers.Contains(30)
Dim index = Array.IndexOf(numbers, 30)
```

**Besonderheiten:**
- `Contains` für Existenzprüfung
- `Array.IndexOf` für Index-Suche
- Typsicher

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Array.IndexOf](https://learn.microsoft.com/en-us/dotnet/api/system.array.indexof)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
items = {"Apfel", "Banane", "Kirsche"};
found = MemberQ[items, "Banane"]         (* True *)
pos = Position[items, "Banane"]          (* {{2}} *)
first = FirstCase[items, "Banane"]       (* "Banane" *)
```

**Besonderheiten:**
- `MemberQ[list, elem]` prüft Mitgliedschaft
- `Position[list, elem]` gibt Position zurück
- `FirstCase[list, pattern]` findet erstes Match

**Weiterführende Links:**
- [Wolfram Language Documentation - MemberQ](https://reference.wolfram.com/language/ref/MemberQ.html)

</TabItem>
</Tabs>


## 10.2.6. Sorting

Das Anordnen der Elemente einer Collection in einer bestimmten Reihenfolge. Ermöglicht es, Elemente nach einem Kriterium zu sortieren, um sie leichter zu durchsuchen oder zu verarbeiten.

### Sprachen {#sprachen}

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

**Besonderheiten:**
- `qsort` Funktion aus stdlib.h
- Benötigt Vergleichsfunktion
- In-place Sortierung

**Weiterführende Links:**
- [C Documentation - qsort](https://en.cppreference.com/w/c/algorithm/qsort)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
int[] numbers = {50, 20, 40, 10, 30};
Array.Sort(numbers);
```

**Besonderheiten:**
- `Array.Sort` für in-place Sortierung
- Unterstützt auch `OrderBy` für LINQ (seit C# 3.0)
- Unterstützt auch benutzerdefinierte Vergleichsfunktionen

**Weiterführende Links:**
- [Microsoft C# Documentation - Array.Sort](https://learn.microsoft.com/en-us/dotnet/api/system.array.sort)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
std::vector<int> numbers = {50, 20, 40, 10, 30};
std::sort(numbers.begin(), numbers.end());
```

**Besonderheiten:**
- `std::sort` Algorithm
- Unterstützt auch benutzerdefinierte Vergleichsfunktionen
- In-place Sortierung

**Weiterführende Links:**
- [cppreference.com - sort](https://en.cppreference.com/w/cpp/algorithm/sort)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
(def numbers [50 20 40 10 30])
(def sorted (sort numbers))
```

**Besonderheiten:**
- `sort` Funktion für Sortierung
- Unterstützt auch `sort-by` für benutzerdefinierte Sortierung
- Erstellt neue Collection

**Weiterführende Links:**
- [Clojure Documentation - sort](https://clojuredocs.org/clojure.core/sort)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
(let ((numbers '(50 20 40 10 30)))
  (sort (copy-list numbers) #'<))
```

**Besonderheiten:**
- `sort` Funktion für in-place Sortierung
- Unterstützt auch benutzerdefinierte Vergleichsfunktionen
- Modifiziert die ursprüngliche Liste

**Weiterführende Links:**
- [Common Lisp HyperSpec - sort](http://www.lispworks.com/documentation/HyperSpec/Body/f_sort_.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
numbers = [50, 20, 40, 10, 30]
sorted = numbers.sort
```

**Besonderheiten:**
- `sort` Methode für Sortierung
- Unterstützt auch `sort_by` für benutzerdefinierte Sortierung
- Erstellt neue Collection

**Weiterführende Links:**
- [Crystal Documentation - Enumerable](https://crystal-lang.org/api/1.11.0/Enumerable.html)

</TabItem>
<TabItem value="d" label="D">

```d
int[] numbers = [50, 20, 40, 10, 30];
numbers.sort();
```

**Besonderheiten:**
- `sort` Methode für in-place Sortierung
- Unterstützt auch benutzerdefinierte Vergleichsfunktionen
- Modifiziert die ursprüngliche Collection

**Weiterführende Links:**
- [D Language Documentation - sort](https://dlang.org/phobos/std_algorithm_sorting.html#sort)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
var numbers = [50, 20, 40, 10, 30];
numbers.sort();
```

**Besonderheiten:**
- `sort` Methode für in-place Sortierung
- Unterstützt auch benutzerdefinierte Vergleichsfunktionen
- Modifiziert die ursprüngliche Collection

**Weiterführende Links:**
- [Dart Documentation - sort](https://api.dart.dev/stable/dart-core/List/sort.html)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
numbers = [50, 20, 40, 10, 30]
sorted = Enum.sort(numbers)
```

**Besonderheiten:**
- `Enum.sort` für Sortierung
- Unterstützt auch `Enum.sort_by` für benutzerdefinierte Sortierung
- Erstellt neue Collection

**Weiterführende Links:**
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

**Besonderheiten:**
- `lists:sort` für Sortierung
- Unterstützt auch `lists:sort` mit benutzerdefinierter Funktion
- Funktionale Programmierung

**Weiterführende Links:**
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
// Benötigt: import gleam/int
let numbers = [50, 20, 40, 10, 30]
let sorted = list.sort(numbers, int.compare)
```

**Besonderheiten:**
- `list.sort` benötigt eine Vergleichsfunktion
- `int.compare`, `float.compare`, `string.compare` für Standard-Vergleiche
- Funktionale Sortierung, gibt neue Liste zurück

**Weiterführende Links:**
- [Gleam Documentation - list.sort](https://hexdocs.pm/gleam_stdlib/gleam/list.html#sort)

</TabItem>
<TabItem value="go" label="Go">

```go
import "sort"
numbers := []int{50, 20, 40, 10, 30}
sort.Ints(numbers)
```

**Besonderheiten:**
- `sort.Ints` für in-place Sortierung
- Unterstützt auch `sort.Slice` für benutzerdefinierte Sortierung
- Modifiziert die ursprüngliche Collection

**Weiterführende Links:**
- [Go Documentation - sort](https://pkg.go.dev/sort)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
def numbers = [50, 20, 40, 10, 30]
def sorted = numbers.sort()
```

**Besonderheiten:**
- `sort` Methode für in-place Sortierung
- Unterstützt auch `sort` mit Closure
- Modifiziert die ursprüngliche Collection

**Weiterführende Links:**
- [Groovy Documentation - sort](https://groovy-lang.org/groovy-dev-kit.html#_working_with_collections)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
numbers = [50, 20, 40, 10, 30]
sorted = sort numbers
```

**Besonderheiten:**
- `sort` Funktion für Sortierung
- Unterstützt auch `sortBy` für benutzerdefinierte Sortierung
- Funktionale Programmierung

**Weiterführende Links:**
- [Haskell Documentation - sort](https://hackage.haskell.org/package/base/docs/Data-List.html#v:sort)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
var numbers = [50, 20, 40, 10, 30];
numbers.sort(function(a, b) return a - b);
```

**Besonderheiten:**
- `sort` Methode für in-place Sortierung
- Benötigt Vergleichsfunktion
- Modifiziert die ursprüngliche Collection

**Weiterführende Links:**
- [Haxe Documentation - Array.sort](https://api.haxe.org/Array.html#sort)

</TabItem>
<TabItem value="java" label="Java">

```java
List<Integer> numbers = Arrays.asList(50, 20, 40, 10, 30);
Collections.sort(numbers);
```

**Besonderheiten:**
- `Collections.sort` für in-place Sortierung
- Unterstützt auch `List.sort` (seit Java 8)
- Modifiziert die ursprüngliche Collection

**Weiterführende Links:**
- [Oracle Java Documentation - Collections.sort](https://docs.oracle.com/javase/8/docs/api/java/util/Collections.html#sort-java.util.List-)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
const numbers = [50, 20, 40, 10, 30];
numbers.sort((a, b) => a - b);
```

**Besonderheiten:**
- `sort` Methode für in-place Sortierung
- Benötigt Vergleichsfunktion für numerische Sortierung
- Modifiziert die ursprüngliche Collection

**Weiterführende Links:**
- [MDN Web Docs - Array.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
numbers = [50, 20, 40, 10, 30]
sorted = sort(numbers)
```

**Besonderheiten:**
- `sort` Funktion für Sortierung
- Unterstützt auch `sort!` für in-place Sortierung
- Hochperformant

**Weiterführende Links:**
- [Julia Documentation - sort](https://docs.julialang.org/en/v1/base/sort/#Base.sort)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
val numbers = [50, 20, 40, 10, 30]
val sorted = numbers.sort()
// [10, 20, 30, 40, 50]

// Benutzerdefinierte Sortierung
val descending = numbers.sort-by(fn(a, b) b.compare(a))
// [50, 40, 30, 20, 10]
```

**Besonderheiten:**
- `sort` sortiert aufsteigend (gibt neue Liste zurück)
- `sort-by` für benutzerdefinierte Vergleichsfunktion
- Immutable – Originalliste bleibt unverändert

**Weiterführende Links:**
- [Koka Standard Library - list](https://koka-lang.github.io/koka/doc/std_core_list.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
def numbers : List Nat := [50, 20, 40, 10, 30]

-- Liste sortieren (Merge Sort)
def sorted := numbers.mergeSort
-- [10, 20, 30, 40, 50]

-- Benutzerdefinierte Sortierung (absteigend)
def descending := numbers.mergeSort (· > ·)
-- [50, 40, 30, 20, 10]

-- Array sortieren (in-place optimiert)
def arr : Array Nat := #[50, 20, 40, 10, 30]
def sortedArr := arr.qsort (· < ·)
-- #[10, 20, 30, 40, 50]
```

**Besonderheiten:**
- `List.mergeSort` für stabile Sortierung (gibt neue Liste zurück)
- `Array.qsort` für Array-Sortierung (optimiert bei eindeutiger Referenz)
- Benutzerdefinierte Vergleichsfunktion als Parameter
- Immutable – Originalliste bleibt unverändert

**Weiterführende Links:**
- [Lean 4 Documentation - List](https://leanprover-community.github.io/mathlib4_docs/Init/Prelude.html#List)
- [Lean 4 Documentation - Array](https://lean-lang.org/lean4/doc/array.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
Numbers = [50, 20, 40, 10, 30],
list.sort(Numbers, Sorted)
% Sorted = [10, 20, 30, 40, 50]

% Benutzerdefinierte Sortierung (absteigend)
list.sort((pred(X::in, Y::in, R::out) is det :-
    compare(R, Y, X)), Numbers, Descending)
% Descending = [50, 40, 30, 20, 10]
```

**Besonderheiten:**
- `list.sort/2` sortiert mit Standard-Vergleich (`compare`)
- `list.sort/3` mit benutzerdefinierter Vergleichsfunktion
- Erstellt neue Liste (immutable)
- Stabile Sortierung (Merge Sort)

**Weiterführende Links:**
- [Mercury Standard Library - list](https://www.mercurylang.org/information/doc-release/mercury_library/list.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
val numbers = mutableListOf(50, 20, 40, 10, 30)
numbers.sort()
```

**Besonderheiten:**
- `sort` Methode für in-place Sortierung
- Unterstützt auch `sorted` für neue Collection
- Modifiziert die ursprüngliche Collection

**Weiterführende Links:**
- [Kotlin Documentation - sort](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/sort.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
local numbers = {50, 20, 40, 10, 30}
table.sort(numbers)
```

**Besonderheiten:**
- `table.sort` für in-place Sortierung
- Unterstützt auch benutzerdefinierte Vergleichsfunktionen
- Modifiziert die ursprüngliche Collection

**Weiterführende Links:**
- [Lua Documentation - table.sort](https://www.lua.org/manual/5.4/manual.html#pdf-table.sort)

</TabItem>
<TabItem value="mojo" label="Mojo">

```mojo
var numbers = List[Int](50, 20, 40, 10, 30)
numbers.sort()
```

**Besonderheiten:**
- `sort` Methode für in-place Sortierung
- Unterstützt auch benutzerdefinierte Vergleichsfunktionen
- Python-ähnliche Syntax

**Weiterführende Links:**
- [Mojo Documentation](https://docs.modular.com/mojo)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
var numbers = @[50, 20, 40, 10, 30]
numbers.sort()
```

**Besonderheiten:**
- `sort` Funktion für in-place Sortierung
- Unterstützt auch benutzerdefinierte Vergleichsfunktionen
- Modifiziert die ursprüngliche Collection

**Weiterführende Links:**
- [Nim Documentation - sort](https://nim-lang.org/docs/algorithm.html#sort%2CopenArray%5BT%5D)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
let numbers = [50; 20; 40; 10; 30]
let sorted = List.sort compare numbers
```

**Besonderheiten:**
- `List.sort` für Sortierung
- Benötigt Vergleichsfunktion
- Funktionale Programmierung

**Weiterführende Links:**
- [OCaml Documentation - List.sort](https://v2.ocaml.org/api/List.html#VALsort)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
my @numbers = (50, 20, 40, 10, 30);
@numbers = sort { $a <=> $b } @numbers;
```

**Besonderheiten:**
- `sort` Funktion für Sortierung
- Unterstützt auch benutzerdefinierte Vergleichsfunktionen
- Erstellt neue Liste

**Weiterführende Links:**
- [Perl Documentation - sort](https://perldoc.perl.org/functions/sort)

</TabItem>
<TabItem value="php" label="PHP">

```php
$numbers = [50, 20, 40, 10, 30];
sort($numbers);
```

**Besonderheiten:**
- `sort` Funktion für in-place Sortierung
- Unterstützt auch benutzerdefinierte Vergleichsfunktionen
- Modifiziert die ursprüngliche Collection

**Weiterführende Links:**
- [PHP Documentation - sort](https://www.php.net/manual/en/function.sort.php)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
numbers = [50, 20, 40, 10, 30]
sorted = sort numbers
```

**Besonderheiten:**
- `sort` Funktion für Sortierung
- Unterstützt auch `sortBy` für benutzerdefinierte Sortierung
- Funktionale Programmierung

**Weiterführende Links:**
- [PureScript Documentation - sort](https://pursuit.purescript.org/packages/purescript-lists/6.0.0/docs/Data.List#v:sort)

</TabItem>
<TabItem value="python" label="Python">

```python
numbers = [50, 20, 40, 10, 30]
numbers.sort()
```

**Besonderheiten:**
- `sort` Methode für in-place Sortierung
- Unterstützt auch `sorted` für neue Liste
- Modifiziert die ursprüngliche Collection

**Weiterführende Links:**
- [Python Documentation - list.sort](https://docs.python.org/3/library/stdtypes.html#list.sort)

</TabItem>
<TabItem value="r" label="R">

```r
numbers <- c(50, 20, 40, 10, 30)
sorted <- sort(numbers)
```

**Besonderheiten:**
- `sort` Funktion für Sortierung
- Unterstützt auch `order` für Index-Sortierung
- Erstellt neuen Vektor

**Weiterführende Links:**
- [R Documentation - sort](https://www.rdocumentation.org/packages/base/versions/3.6.2/topics/sort)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
(define numbers '(50 20 40 10 30))
(define sorted (sort numbers <))
```

**Besonderheiten:**
- `sort` Funktion für Sortierung
- Benötigt Vergleichsfunktion
- Funktionale Programmierung

**Weiterführende Links:**
- [Racket Documentation - sort](https://docs.racket-lang.org/reference/pairs.html#%28def._%28%28lib._racket%2Fprivate%2Flist..rkt%29._sort%29%29)

</TabItem>
<TabItem value="roc" label="Roc">

```roc
numbers = [50, 20, 40, 10, 30]
sorted = List.sort numbers
```

**Besonderheiten:**
- `List.sort` für Sortierung
- Funktionale Programmierung
- Typ-sicher

**Weiterführende Links:**
- [Roc Documentation - List.sort](https://www.roc-lang.org/builtins/List#sort)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
numbers = [50, 20, 40, 10, 30]
numbers.sort!
```

**Besonderheiten:**
- `sort!` für in-place Sortierung
- Unterstützt auch `sort` für neue Array
- Modifiziert die ursprüngliche Collection

**Weiterführende Links:**
- [Ruby Documentation - Array.sort!](https://ruby-doc.org/core-3.1.0/Array.html#method-i-sort-21)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
let mut numbers = vec![50, 20, 40, 10, 30];
numbers.sort();
```

**Besonderheiten:**
- `sort` Methode für in-place Sortierung
- Unterstützt auch `sort_by` für benutzerdefinierte Sortierung
- Modifiziert die ursprüngliche Collection

**Weiterführende Links:**
- [Rust Documentation - Vec.sort](https://doc.rust-lang.org/std/vec/struct.Vec.html#method.sort)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
val numbers = List(50, 20, 40, 10, 30)
val sorted = numbers.sorted
```

**Besonderheiten:**
- `sorted` Methode für Sortierung
- Unterstützt auch `sortBy` für benutzerdefinierte Sortierung
- Erstellt neue Collection

**Weiterführende Links:**
- [Scala Documentation - sorted](https://www.scala-lang.org/api/current/scala/collection/immutable/List.html#sorted%5BB%3E:A%5D%28implicitord:Ordering%5BB%5D%29:List%5BA%5D)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
(define numbers '(50 20 40 10 30))
(define sorted (sort numbers <))
```

**Besonderheiten:**
- `sort` Funktion für Sortierung (SRFI-95)
- Benötigt Vergleichsfunktion
- Funktionale Programmierung

**Weiterführende Links:**
- [Scheme Documentation - sort](https://srfi.schemers.org/srfi-95/srfi-95.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
var numbers = [50, 20, 40, 10, 30]
numbers.sort()
```

**Besonderheiten:**
- `sort` Methode für in-place Sortierung
- Unterstützt auch `sorted` für neue Array
- Modifiziert die ursprüngliche Collection

**Weiterführende Links:**
- [Swift Documentation - sort](https://developer.apple.com/documentation/swift/array/sort())

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
const numbers: number[] = [50, 20, 40, 10, 30];
numbers.sort((a, b) => a - b);
```

**Besonderheiten:**
- `sort` Methode für in-place Sortierung (seit ES5)
- Benötigt Vergleichsfunktion für numerische Sortierung
- Typsicher mit TypeScript

**Weiterführende Links:**
- [TypeScript Handbook - Array.sort](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
Dim numbers() As Integer = {50, 20, 40, 10, 30}
Array.Sort(numbers)
```

**Besonderheiten:**
- `Array.Sort` für in-place Sortierung
- Unterstützt auch benutzerdefinierte Vergleichsfunktionen
- Modifiziert die ursprüngliche Collection

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Array.Sort](https://learn.microsoft.com/en-us/dotnet/api/system.array.sort)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
numbers = {3, 1, 4, 1, 5, 9};
sorted = Sort[numbers]                     (* {1, 1, 3, 4, 5, 9} *)
reversed = ReverseSort[numbers]            (* {9, 5, 4, 3, 1, 1} *)
sortedBy = SortBy[{"Banane", "Apfel"}, StringLength]  (* {"Apfel", "Banane"} *)
```

**Besonderheiten:**
- `Sort[list]` sortiert aufsteigend
- `SortBy[list, f]` sortiert nach Schlüsselfunktion
- `ReverseSort[list]` sortiert absteigend

**Weiterführende Links:**
- [Wolfram Language Documentation - Sort](https://reference.wolfram.com/language/ref/Sort.html)

</TabItem>
</Tabs>


## 10.2.7. Slicing

Das Extrahieren eines Teilbereichs aus einer Collection. Ermöglicht es, einen kontinuierlichen Abschnitt einer Collection zu erhalten, ohne die ursprüngliche Collection zu modifizieren.

### Sprachen {#sprachen}

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

**Besonderheiten:**
- Manuelle Implementierung mit Schleife erforderlich
- Keine native Slice-Funktion
- Dynamische Größe erfordert dynamische Speicherverwaltung

**Weiterführende Links:**
- [C Documentation - For Loops](https://en.cppreference.com/w/c/language/for)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
int[] numbers = {10, 20, 30, 40, 50};
int[] slice = numbers[1..4];
```

**Besonderheiten:**
- Range-Operator `..` für Slicing (seit C# 8.0)
- Unterstützt auch `Skip` und `Take` für LINQ
- Erstellt neue Array

**Weiterführende Links:**
- [Microsoft C# Documentation - Range Operator](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/member-access-operators#range-operator-)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
std::vector<int> numbers = {10, 20, 30, 40, 50};
std::vector<int> slice(numbers.begin() + 1, numbers.begin() + 4);
```

**Besonderheiten:**
- Iterator-basiertes Slicing
- Unterstützt auch `std::span` für Views (seit C++20)
- Erstellt neue Vector

**Weiterführende Links:**
- [cppreference.com - span](https://en.cppreference.com/w/cpp/container/span)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
(def numbers [10 20 30 40 50])
(def slice (subvec numbers 1 4))
```

**Besonderheiten:**
- `subvec` für Vektor-Slicing
- Unterstützt auch `drop` und `take` für Sequenzen
- Erstellt neue Collection

**Weiterführende Links:**
- [Clojure Documentation - subvec](https://clojuredocs.org/clojure.core/subvec)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
(let ((numbers '(10 20 30 40 50)))
  (subseq numbers 1 4))
```

**Besonderheiten:**
- `subseq` für Slicing
- Unterstützt auch Listen und Vektoren
- Erstellt neue Sequence

**Weiterführende Links:**
- [Common Lisp HyperSpec - subseq](http://www.lispworks.com/documentation/HyperSpec/Body/f_subseq.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
numbers = [10, 20, 30, 40, 50]
slice = numbers[1..3]
```

**Besonderheiten:**
- Range-Operator `..` für Slicing
- Unterstützt auch `[start, length]` Syntax
- Erstellt neue Array

**Weiterführende Links:**
- [Crystal Documentation - Array](https://crystal-lang.org/api/1.11.0/Array.html)

</TabItem>
<TabItem value="d" label="D">

```d
int[] numbers = [10, 20, 30, 40, 50];
int[] slice = numbers[1..4];
```

**Besonderheiten:**
- Range-Operator `..` für Slicing
- Erstellt Slice (keine Kopie)
- Unterstützt auch `take` und `drop`

**Weiterführende Links:**
- [D Language Documentation - Arrays](https://dlang.org/spec/arrays.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
var numbers = [10, 20, 30, 40, 50];
var slice = numbers.sublist(1, 4);
```

**Besonderheiten:**
- `sublist` für Slicing
- Unterstützt auch `skip` und `take` für Iterables
- Erstellt neue Liste

**Weiterführende Links:**
- [Dart Documentation - sublist](https://api.dart.dev/stable/dart-core/List/sublist.html)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
numbers = [10, 20, 30, 40, 50]
slice = Enum.slice(numbers, 1, 3)
```

**Besonderheiten:**
- `Enum.slice` für Slicing
- Unterstützt auch `Enum.take` und `Enum.drop`
- Erstellt neue Liste

**Weiterführende Links:**
- [Elixir Documentation - Enum.slice](https://hexdocs.pm/elixir/Enum.html#slice/3)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
numbers = [10, 20, 30, 40, 50]
slice = List.drop 1 (List.take 4 numbers)
```

**Besonderheiten:**
- Kombination aus `drop` und `take` für Slicing
- Funktionale Programmierung
- Erstellt neue Liste

**Weiterführende Links:**
- [Elm Documentation - List.drop](https://package.elm-lang.org/packages/elm/core/latest/List#drop)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
Numbers = [10, 20, 30, 40, 50],
Slice = lists:sublist(Numbers, 2, 3).
```

**Besonderheiten:**
- `lists:sublist` für Slicing
- Unterstützt auch `lists:nthtail` für Tail-Slicing
- Funktionale Programmierung

**Weiterführende Links:**
- [Erlang Documentation - lists:sublist](https://www.erlang.org/doc/man/lists.html#sublist-2)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
let numbers = [10; 20; 30; 40; 50]
let slice = numbers.[1..3]
```

**Besonderheiten:**
- Range-Operator `..` für Slicing
- Unterstützt auch `List.skip` und `List.take`
- Erstellt neue Liste

**Weiterführende Links:**
- [F# Documentation - List Slicing](https://fsharp.github.io/fsharp-core-docs/reference/fsharp-collections-listmodule.html)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
let numbers = [10, 20, 30, 40, 50]
let slice = list.drop(numbers, 1) |> list.take(3)
```

**Besonderheiten:**
- Kombination aus `drop` und `take` für Slicing
- Funktionale Programmierung
- Typ-sicher

**Weiterführende Links:**
- [Gleam Documentation - list.drop](https://hexdocs.pm/gleam_stdlib/gleam/list.html#drop)

</TabItem>
<TabItem value="go" label="Go">

```go
numbers := []int{10, 20, 30, 40, 50}
slice := numbers[1:4]
```

**Besonderheiten:**
- Slice-Syntax `[start:end]` für Slicing
- Erstellt Slice (keine Kopie)
- Unterstützt auch `append` für Erweiterung

**Weiterführende Links:**
- [Go Documentation - Slices](https://go.dev/tour/moretypes/7)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
def numbers = [10, 20, 30, 40, 50]
def slice = numbers[1..3]
```

**Besonderheiten:**
- Range-Operator `..` für Slicing
- Unterstützt auch `subList` Methode
- Erstellt neue Liste

**Weiterführende Links:**
- [Groovy Documentation - Lists](https://groovy-lang.org/groovy-dev-kit.html#_working_with_collections)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
numbers = [10, 20, 30, 40, 50]
slice = take 3 (drop 1 numbers)
```

**Besonderheiten:**
- Kombination aus `drop` und `take` für Slicing
- Funktionale Programmierung
- Lazy Evaluation

**Weiterführende Links:**
- [Haskell Documentation - take](https://hackage.haskell.org/package/base/docs/Prelude.html#v:take)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
var numbers = [10, 20, 30, 40, 50];
var slice = numbers.slice(1, 4);
```

**Besonderheiten:**
- `slice` Methode für Slicing
- Unterstützt auch negative Indizes
- Erstellt neue Array

**Weiterführende Links:**
- [Haxe Documentation - Array.slice](https://api.haxe.org/Array.html#slice)

</TabItem>
<TabItem value="java" label="Java">

```java
List<Integer> numbers = Arrays.asList(10, 20, 30, 40, 50);
List<Integer> slice = numbers.subList(1, 4);
```

**Besonderheiten:**
- `subList` für Slicing
- Erstellt View (keine Kopie)
- Unterstützt auch Stream API für Transformation

**Weiterführende Links:**
- [Oracle Java Documentation - List.subList](https://docs.oracle.com/javase/8/docs/api/java/util/List.html#subList-int-int-)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
const numbers = [10, 20, 30, 40, 50];
const slice = numbers.slice(1, 4);
```

**Besonderheiten:**
- `slice` Methode für Slicing (seit ES5)
- Unterstützt auch negative Indizes
- Erstellt neue Array

**Weiterführende Links:**
- [MDN Web Docs - Array.slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
numbers = [10, 20, 30, 40, 50]
slice = numbers[2:4]
```

**Besonderheiten:**
- Range-Operator `:` für Slicing
- Unterstützt auch `view` für Views
- Erstellt neue Array

**Weiterführende Links:**
- [Julia Documentation - Array Indexing](https://docs.julialang.org/en/v1/manual/arrays/#man-array-indexing)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
val numbers = [10, 20, 30, 40, 50]

// Slicing über take und drop
val first3 = numbers.take(3)
// [10, 20, 30]

val last3 = numbers.drop(2)
// [30, 40, 50]

// Kombination für Bereichs-Slicing
val middle = numbers.drop(1).take(3)
// [20, 30, 40]
```

**Besonderheiten:**
- Kein dedizierter Slice-Operator
- `take(n)` nimmt die ersten n Elemente
- `drop(n)` überspringt die ersten n Elemente
- Kombination von `drop` und `take` für Bereichs-Slicing

**Weiterführende Links:**
- [Koka Standard Library - list](https://koka-lang.github.io/koka/doc/std_core_list.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
def numbers : List Nat := [10, 20, 30, 40, 50]

-- Erste n Elemente
def first3 := numbers.take 3
-- [10, 20, 30]

-- Elemente überspringen
def last3 := numbers.drop 2
-- [30, 40, 50]

-- Bereichs-Slicing: drop + take
def middle := (numbers.drop 1).take 3
-- [20, 30, 40]

-- Array-Slicing mit extract
def arr : Array Nat := #[10, 20, 30, 40, 50]
def sliced := arr.extract 1 4
-- #[20, 30, 40]
```

**Besonderheiten:**
- `List.take` und `List.drop` für Listen-Slicing
- `Array.extract start stop` für Array-Bereich (exklusiv `stop`)
- Kombination von `drop` und `take` für Bereichs-Slicing auf Listen
- Kein dedizierter Slice-Operator

**Weiterführende Links:**
- [Lean 4 Documentation - List](https://leanprover-community.github.io/mathlib4_docs/Init/Prelude.html#List)
- [Lean 4 Documentation - Array](https://lean-lang.org/lean4/doc/array.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
Numbers = [10, 20, 30, 40, 50],

% Erste N Elemente
list.take_upto(3, Numbers, First3),
% First3 = [10, 20, 30]

% Elemente überspringen
list.det_drop(2, Numbers, Last3),
% Last3 = [30, 40, 50]

% Bereichs-Slicing: drop + take
list.det_drop(1, Numbers, Dropped),
list.take_upto(3, Dropped, Slice)
% Slice = [20, 30, 40]
```

**Besonderheiten:**
- `list.take_upto/3` nimmt bis zu N Elemente (gibt nie Fehler)
- `list.det_drop/3` überspringt N Elemente (Abbruch bei zu kurzer Liste)
- Kombination von `drop` und `take` für Bereichs-Slicing
- Kein dedizierter Slice-Operator oder Slice-Notation

**Weiterführende Links:**
- [Mercury Standard Library - list](https://www.mercurylang.org/information/doc-release/mercury_library/list.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
val numbers = listOf(10, 20, 30, 40, 50)
val slice = numbers.slice(1..3)
```

**Besonderheiten:**
- `slice` mit Range für Slicing
- Unterstützt auch `subList` für Listen
- Erstellt neue Liste

**Weiterführende Links:**
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

**Besonderheiten:**
- Manuelle Implementierung mit Schleife erforderlich
- Keine native Slice-Funktion
- Unterstützt auch funktionale Bibliotheken

**Weiterführende Links:**
- [Lua Documentation - For Loops](https://www.lua.org/manual/5.4/manual.html#3.3.5)

</TabItem>
<TabItem value="mojo" label="Mojo">

```mojo
var numbers = List[Int](10, 20, 30, 40, 50)
var slice = numbers[1:4]
```

**Besonderheiten:**
- Slice-Syntax `[start:end]` für Slicing
- Python-ähnliche Syntax
- Erstellt neue Liste

**Weiterführende Links:**
- [Mojo Documentation](https://docs.modular.com/mojo)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
var numbers = @[10, 20, 30, 40, 50]
var slice = numbers[1..3]
```

**Besonderheiten:**
- Range-Operator `..` für Slicing
- Unterstützt auch `[start..<end]` für exklusives Ende
- Erstellt neue Sequence

**Weiterführende Links:**
- [Nim Documentation - Slicing](https://nim-lang.org/docs/manual.html#procedures-slicing)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
let numbers = [10; 20; 30; 40; 50]
let slice = List.sub numbers 1 3
```

**Besonderheiten:**
- `List.sub` für Slicing
- Unterstützt auch `List.take` und `List.drop`
- Funktionale Programmierung

**Weiterführende Links:**
- [OCaml Documentation - List.sub](https://v2.ocaml.org/api/List.html#VALsub)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
my @numbers = (10, 20, 30, 40, 50);
my @slice = @numbers[1..3];
```

**Besonderheiten:**
- Range-Operator `..` für Array-Slicing
- Unterstützt auch `splice` für in-place Modifikation
- Erstellt neue Array

**Weiterführende Links:**
- [Perl Documentation - Array Slicing](https://perldoc.perl.org/perldata#Slices)

</TabItem>
<TabItem value="php" label="PHP">

```php
$numbers = [10, 20, 30, 40, 50];
$slice = array_slice($numbers, 1, 3);
```

**Besonderheiten:**
- `array_slice` für Slicing
- Unterstützt auch negative Indizes
- Erstellt neue Array

**Weiterführende Links:**
- [PHP Documentation - array_slice](https://www.php.net/manual/en/function.array-slice.php)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
numbers = [10, 20, 30, 40, 50]
slice = drop 1 (take 4 numbers)
```

**Besonderheiten:**
- Kombination aus `drop` und `take` für Slicing
- Funktionale Programmierung
- Typ-sicher

**Weiterführende Links:**
- [PureScript Documentation - drop](https://pursuit.purescript.org/packages/purescript-lists/6.0.0/docs/Data.List#v:drop)

</TabItem>
<TabItem value="python" label="Python">

```python
numbers = [10, 20, 30, 40, 50]
slice = numbers[1:4]
```

**Besonderheiten:**
- Slice-Syntax `[start:end]` für Slicing
- Unterstützt auch negative Indizes und Schrittweite
- Erstellt neue Liste

**Weiterführende Links:**
- [Python Documentation - Slicing](https://docs.python.org/3/tutorial/introduction.html#lists)

</TabItem>
<TabItem value="r" label="R">

```r
numbers <- c(10, 20, 30, 40, 50)
slice <- numbers[2:4]
```

**Besonderheiten:**
- Range-Operator `:` für Slicing
- Unterstützt auch negative Indizes
- Erstellt neuen Vektor

**Weiterführende Links:**
- [R Documentation - Indexing](https://cran.r-project.org/doc/manuals/r-release/R-intro.html#Index-vectors)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
(define numbers '(10 20 30 40 50))
(define slice (take (drop numbers 1) 3))
```

**Besonderheiten:**
- Kombination aus `drop` und `take` für Slicing
- Funktionale Programmierung
- Erstellt neue Liste

**Weiterführende Links:**
- [Racket Documentation - take](https://docs.racket-lang.org/reference/pairs.html#%28def._%28%28lib._racket%2Fprivate%2Flist..rkt%29._take%29%29)

</TabItem>
<TabItem value="roc" label="Roc">

```roc
numbers = [10, 20, 30, 40, 50]
slice = List.drop numbers 1 |> List.take 3
```

**Besonderheiten:**
- Kombination aus `drop` und `take` für Slicing
- Funktionale Programmierung
- Typ-sicher

**Weiterführende Links:**
- [Roc Documentation - List.drop](https://www.roc-lang.org/builtins/List#drop)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
numbers = [10, 20, 30, 40, 50]
slice = numbers[1..3]
```

**Besonderheiten:**
- Range-Operator `..` für Slicing
- Unterstützt auch `[start, length]` Syntax
- Erstellt neue Array

**Weiterführende Links:**
- [Ruby Documentation - Array Slicing](https://ruby-doc.org/core-3.1.0/Array.html#method-i-5B-5D)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
let numbers = vec![10, 20, 30, 40, 50];
let slice = &numbers[1..4];
```

**Besonderheiten:**
- Range-Operator `..` für Slicing
- Erstellt Slice-Referenz (keine Kopie)
- Unterstützt auch `get` für Option-basiertes Slicing

**Weiterführende Links:**
- [Rust Book - Slices](https://doc.rust-lang.org/book/ch04-03-slices.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
val numbers = List(10, 20, 30, 40, 50)
val slice = numbers.slice(1, 4)
```

**Besonderheiten:**
- `slice` Methode für Slicing
- Unterstützt auch `take` und `drop`
- Erstellt neue Liste

**Weiterführende Links:**
- [Scala Documentation - slice](https://www.scala-lang.org/api/current/scala/collection/immutable/List.html#slice%28from:Int,until:Int%29:List%5BA%5D)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
(define numbers '(10 20 30 40 50))
(define slice (take (drop numbers 1) 3))
```

**Besonderheiten:**
- Kombination aus `drop` und `take` für Slicing (SRFI-1)
- Funktionale Programmierung
- Erstellt neue Liste

**Weiterführende Links:**
- [Scheme Documentation - take](https://srfi.schemers.org/srfi-1/srfi-1.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
let numbers = [10, 20, 30, 40, 50]
let slice = numbers[1..<4]
```

**Besonderheiten:**
- Range-Operator `..<` für Slicing
- Unterstützt auch `...` für inklusives Ende
- Erstellt neue Array

**Weiterführende Links:**
- [Swift Documentation - Ranges](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/basicoperators/#Range-Operators)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
const numbers: number[] = [10, 20, 30, 40, 50];
const slice = numbers.slice(1, 4);
```

**Besonderheiten:**
- `slice` Methode für Slicing (seit ES5)
- Unterstützt auch negative Indizes
- Typsicher mit TypeScript

**Weiterführende Links:**
- [TypeScript Handbook - Array.slice](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
Dim numbers() As Integer = {10, 20, 30, 40, 50}
Dim slice = numbers.Skip(1).Take(3).ToArray()
```

**Besonderheiten:**
- `Skip` und `Take` aus LINQ für Slicing
- Unterstützt auch `Array.Copy` für manuelles Slicing
- Erstellt neue Array

**Weiterführende Links:**
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

**Besonderheiten:**
- Syntax: `array[start..end]` (exklusives Ende)
- `array[..end]` für Anfang bis Index
- `array[start..]` für Index bis Ende

**Weiterführende Links:**
- [V Documentation - Arrays](https://github.com/vlang/v/blob/master/doc/docs.md#arrays)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
numbers = {10, 20, 30, 40, 50};
slice = numbers[[2 ;; 4]]      (* {20, 30, 40} *)
first3 = numbers[[;; 3]]       (* {10, 20, 30} *)
last2 = numbers[[-2 ;;]]       (* {40, 50} *)
step = numbers[[1 ;; ;; 2]]    (* {10, 30, 50} - jedes zweite *)
```

**Besonderheiten:**
- `;;` (Span) für Slicing
- Negative Indizes für Zugriff von hinten
- Unterstützt Schrittweite: `start ;; end ;; step`

**Weiterführende Links:**
- [Wolfram Language Documentation - Span](https://reference.wolfram.com/language/ref/Span.html)

</TabItem>
</Tabs>


## 10.2.8. Slice Notation

Die spezielle Syntax zum Extrahieren von Teilbereichen aus Collections. Ermöglicht es, mit kompakter Notation auf kontinuierliche Abschnitte einer Collection zuzugreifen.

### Sprachen {#sprachen}

<Tabs availableTabs={['csharp', 'cpp', 'crystal', 'd', 'fsharp', 'go', 'groovy', 'julia', 'kotlin', 'mojo', 'nim', 'perl', 'python', 'r', 'ruby', 'rust', 'swift']}>
<TabItem value="csharp" label="C#">

```csharp
int[] numbers = {10, 20, 30, 40, 50};
int[] slice = numbers[1..4];
```

**Besonderheiten:**
- Range-Operator `..` für Slice Notation (seit C# 8.0)
- Unterstützt auch `^` für negative Indizes
- Erstellt neue Array

**Weiterführende Links:**
- [Microsoft C# Documentation - Range Operator](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/member-access-operators#range-operator-)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
std::vector<int> numbers = {10, 20, 30, 40, 50};
std::span<int> slice(numbers.begin() + 1, numbers.begin() + 4);
```

**Besonderheiten:**
- `std::span` für Slice Views (seit C++20)
- Unterstützt auch Iterator-basierte Notation
- Erstellt View (keine Kopie)

**Weiterführende Links:**
- [cppreference.com - span](https://en.cppreference.com/w/cpp/container/span)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
numbers = [10, 20, 30, 40, 50]
slice = numbers[1..3]
```

**Besonderheiten:**
- Range-Operator `..` für Slice Notation
- Unterstützt auch `[start, length]` Syntax
- Erstellt neue Array

**Weiterführende Links:**
- [Crystal Documentation - Array](https://crystal-lang.org/api/1.11.0/Array.html)

</TabItem>
<TabItem value="d" label="D">

```d
int[] numbers = [10, 20, 30, 40, 50];
int[] slice = numbers[1..4];
```

**Besonderheiten:**
- Range-Operator `..` für Slice Notation
- Erstellt Slice (keine Kopie)
- Unterstützt auch negative Indizes

**Weiterführende Links:**
- [D Language Documentation - Arrays](https://dlang.org/spec/arrays.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
let numbers = [10; 20; 30; 40; 50]
let slice = numbers.[1..3]
```

**Besonderheiten:**
- Range-Operator `..` für Slice Notation
- Unterstützt auch `[start..]` und `[..end]` Syntax
- Erstellt neue Liste

**Weiterführende Links:**
- [F# Documentation - List Slicing](https://fsharp.github.io/fsharp-core-docs/reference/fsharp-collections-listmodule.html)

</TabItem>
<TabItem value="go" label="Go">

```go
numbers := []int{10, 20, 30, 40, 50}
slice := numbers[1:4]
```

**Besonderheiten:**
- Slice-Syntax `[start:end]` für Slice Notation
- Erstellt Slice (keine Kopie)
- Unterstützt auch `[start:]` und `[:end]` Syntax

**Weiterführende Links:**
- [Go Documentation - Slices](https://go.dev/tour/moretypes/7)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
def numbers = [10, 20, 30, 40, 50]
def slice = numbers[1..3]
```

**Besonderheiten:**
- Range-Operator `..` für Slice Notation
- Unterstützt auch `[start, length]` Syntax
- Erstellt neue Liste

**Weiterführende Links:**
- [Groovy Documentation - Lists](https://groovy-lang.org/groovy-dev-kit.html#_working_with_collections)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
numbers = [10, 20, 30, 40, 50]
slice = numbers[2:4]
```

**Besonderheiten:**
- Range-Operator `:` für Slice Notation
- Unterstützt auch `[start:step:end]` für Schrittweite
- Erstellt neue Array

**Weiterführende Links:**
- [Julia Documentation - Array Indexing](https://docs.julialang.org/en/v1/manual/arrays/#man-array-indexing)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
val numbers = listOf(10, 20, 30, 40, 50)
val slice = numbers[1..3]
```

**Besonderheiten:**
- Range-Operator `..` für Slice Notation
- Unterstützt auch `until` für exklusives Ende
- Erstellt neue Liste

**Weiterführende Links:**
- [Kotlin Documentation - Ranges](https://kotlinlang.org/docs/ranges.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```mojo
var numbers = List[Int](10, 20, 30, 40, 50)
var slice = numbers[1:4]
```

**Besonderheiten:**
- Slice-Syntax `[start:end]` für Slice Notation
- Python-ähnliche Syntax
- Erstellt neue Liste

**Weiterführende Links:**
- [Mojo Documentation](https://docs.modular.com/mojo)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
var numbers = @[10, 20, 30, 40, 50]
var slice = numbers[1..3]
```

**Besonderheiten:**
- Range-Operator `..` für Slice Notation
- Unterstützt auch `[start..<end]` für exklusives Ende
- Erstellt neue Sequence

**Weiterführende Links:**
- [Nim Documentation - Slicing](https://nim-lang.org/docs/manual.html#procedures-slicing)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
my @numbers = (10, 20, 30, 40, 50);
my @slice = @numbers[1..3];
```

**Besonderheiten:**
- Range-Operator `..` für Slice Notation
- Unterstützt auch negative Indizes
- Erstellt neue Array

**Weiterführende Links:**
- [Perl Documentation - Array Slicing](https://perldoc.perl.org/perldata#Slices)

</TabItem>
<TabItem value="python" label="Python">

```python
numbers = [10, 20, 30, 40, 50]
slice = numbers[1:4]
```

**Besonderheiten:**
- Slice-Syntax `[start:end]` für Slice Notation
- Unterstützt auch `[start:end:step]` für Schrittweite
- Unterstützt auch negative Indizes

**Weiterführende Links:**
- [Python Documentation - Slicing](https://docs.python.org/3/tutorial/introduction.html#lists)

</TabItem>
<TabItem value="r" label="R">

```r
numbers <- c(10, 20, 30, 40, 50)
slice <- numbers[2:4]
```

**Besonderheiten:**
- Range-Operator `:` für Slice Notation
- Unterstützt auch negative Indizes
- Erstellt neuen Vektor

**Weiterführende Links:**
- [R Documentation - Indexing](https://cran.r-project.org/doc/manuals/r-release/R-intro.html#Index-vectors)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
numbers = [10, 20, 30, 40, 50]
slice = numbers[1..3]
```

**Besonderheiten:**
- Range-Operator `..` für Slice Notation
- Unterstützt auch `[start, length]` Syntax
- Erstellt neue Array

**Weiterführende Links:**
- [Ruby Documentation - Array Slicing](https://ruby-doc.org/core-3.1.0/Array.html#method-i-5B-5D)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
let numbers = vec![10, 20, 30, 40, 50];
let slice = &numbers[1..4];
```

**Besonderheiten:**
- Range-Operator `..` für Slice Notation
- Erstellt Slice-Referenz (keine Kopie)
- Unterstützt auch `[start..]` und `[..end]` Syntax

**Weiterführende Links:**
- [Rust Book - Slices](https://doc.rust-lang.org/book/ch04-03-slices.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
let numbers = [10, 20, 30, 40, 50]
let slice = numbers[1..<4]
```

**Besonderheiten:**
- Range-Operator `..<` für Slice Notation
- Unterstützt auch `...` für inklusives Ende
- Erstellt neue Array

**Weiterführende Links:**
- [Swift Documentation - Ranges](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/basicoperators/#Range-Operators)

</TabItem>
</Tabs>

