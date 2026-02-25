---
slug: /typsystem/dynamische-typisierung
title: 3.5. Dynamic Typing
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 3.5. Dynamic Typing

Runtime typing with flexible type handling.

## 3.5.1. Duck Typing

An object is compatible if it has the required methods or properties, regardless of the type name. "If it walks like a duck and quacks like a duck, then it's a duck."

### Languages {#sprachen}

<Tabs availableTabs={['clojure', 'common-lisp', 'crystal', 'elixir', 'erlang', 'go', 'groovy', 'javascript', 'lua', 'matlab', 'octave', 'perl', 'php', 'python', 'r', 'racket', 'ruby', 'scheme', 'typescript', 'wolfram-language']}>
<TabItem value="clojure" label="Clojure">

```clojure
;; Duck Typing: Objects are checked structurally at runtime
(defn use-point [p]
  ;; Checks at runtime whether p has the required methods
  (println (str "Point: " (:x p) ", " (:y p))))

(def point-a {:x 1 :y 2})
(def point-b {:x 1 :y 2})

;; Both work if they have the required structure
(use-point point-a) ; Works
(use-point point-b) ; Also works
```

**Special features:**
- Maps are checked structurally at runtime
- A map is compatible if it has the required keys, regardless of the type name

**Further reading:**
- [Clojure Documentation - Maps](https://clojure.org/reference/data_structures#Maps)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Duck Typing: Objects are checked structurally at runtime
(defun use-point (p)
  ;; Checks at runtime whether p has the required slots
  (format t "Point: ~a, ~a~%" (slot-value p 'x) (slot-value p 'y)))

(defclass point-a ()
  ((x :initarg :x :accessor x)
   (y :initarg :y :accessor y)))

(defclass point-b ()
  ((x :initarg :x :accessor x)
   (y :initarg :y :accessor y)))

(defvar p1 (make-instance 'point-a :x 1 :y 2))
(defvar p2 (make-instance 'point-b :x 1 :y 2))

;; Both work if they have the required structure
(use-point p1) ; Works
(use-point p2) ; Also works
```

**Special features:**
- Objects are checked structurally at runtime
- An object is compatible if it has the required slots/methods, regardless of the type name

**Further reading:**
- [Common Lisp HyperSpec - Classes](http://www.lispworks.com/documentation/HyperSpec/Body/t_class.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Duck Typing: Blocks are checked structurally
def use_point(p)
  # Checks at runtime whether p has the required methods
  puts "Point: #{p.x}, #{p.y}"
end

class PointA
  property x : Int32
  property y : Int32

  def initialize(@x, @y)
  end
end

class PointB
  property x : Int32
  property y : Int32

  def initialize(@x, @y)
  end
end

p1 = PointA.new(1, 2)
p2 = PointB.new(1, 2)

# Both work if they have the required structure
use_point(p1) # Works
use_point(p2) # Also works
```

**Special features:**
- Objects are checked structurally at runtime
- An object is compatible if it has the required methods/properties, regardless of the type name

**Further reading:**
- [Crystal Documentation - Classes](https://crystal-lang.org/reference/1.11/syntax_and_semantics/classes.html)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Duck Typing: Protocols enable structural typing
defprotocol PointLike do
  def get_x(point)
  def get_y(point)
end

defmodule PointA do
  defstruct [:x, :y]
end

defmodule PointB do
  defstruct [:x, :y]
end

defimpl PointLike, for: PointA do
  def get_x(%PointA{x: x}), do: x
  def get_y(%PointA{y: y}), do: y
end

defimpl PointLike, for: PointB do
  def get_x(%PointB{x: x}), do: x
  def get_y(%PointB{y: y}), do: y
end

defmodule PointUser do
  def use_point(p) do
    IO.puts("Point: #{PointLike.get_x(p)}, #{PointLike.get_y(p)}")
  end
end

p1 = %PointA{x: 1, y: 2}
p2 = %PointB{x: 1, y: 2}

# Both work if they implement the protocol
PointUser.use_point(p1) # Works
PointUser.use_point(p2) # Also works
```

**Special features:**
- Protocols enable runtime structural typing
- A type satisfies a protocol if `defimpl` is defined for it
- Protocols are explicit (not automatically structural like in Go or TypeScript)

**Further reading:**
- [Elixir Documentation - Protocols](https://elixir-lang.org/getting-started/protocols.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% Duck Typing: Maps are checked structurally at runtime
use_point(P) ->
    % Checks at runtime whether P has the required keys
    X = maps:get(x, P),
    Y = maps:get(y, P),
    io:format("Point: ~p, ~p~n", [X, Y]).

P1 = #{x => 1, y => 2},
P2 = #{x => 1, y => 2}.

% Both work if they have the required structure
use_point(P1). % Works
use_point(P2). % Also works
```

**Special features:**
- Maps are checked structurally at runtime
- A map is compatible if it has the required keys, regardless of the type name

**Further reading:**
- [Erlang Documentation - Maps](https://www.erlang.org/doc/reference_manual/data_types.html#maps)

</TabItem>
<TabItem value="go" label="Go">

```go
// Duck Typing: Interfaces enable structural typing
type PointLike interface {
    GetX() int
    GetY() int
}

type PointA struct {
    X int
    Y int
}

type PointB struct {
    X int
    Y int
}

func (p PointA) GetX() int { return p.X }
func (p PointA) GetY() int { return p.Y }

func (p PointB) GetX() int { return p.X }
func (p PointB) GetY() int { return p.Y }

func usePoint(p PointLike) {
    fmt.Printf("Point: %d, %d\n", p.GetX(), p.GetY())
}

p1 := PointA{X: 1, Y: 2}
p2 := PointB{X: 1, Y: 2}

// Both work if they satisfy the interface
usePoint(p1) // Works
usePoint(p2) // Also works
```

**Special features:**
- Interfaces enable structural typing at compile time
- A type satisfies an interface if it implements all required methods, regardless of the type name

**Further reading:**
- [Go Language Specification - Interface types](https://go.dev/ref/spec#Interface_types)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Duck Typing: Objects are checked structurally at runtime
def usePoint(p) {
    // Checks at runtime whether p has the required properties
    println "Point: ${p.x}, ${p.y}"
}

class PointA {
    int x
    int y
}

class PointB {
    int x
    int y
}

def p1 = new PointA(x: 1, y: 2)
def p2 = new PointB(x: 1, y: 2)

// Both work if they have the required structure
usePoint(p1) // Works
usePoint(p2) // Also works
```

**Special features:**
- Objects are checked structurally at runtime
- An object is compatible if it has the required properties/methods, regardless of the type name

**Further reading:**
- [Groovy Documentation - Dynamic Typing](https://groovy-lang.org/semantics.html#_dynamic_typing)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Duck Typing: Objects are checked structurally at runtime
function usePoint(p) {
    // Checks at runtime whether p has the required properties
    console.log(`Point: ${p.x}, ${p.y}`);
}

const p1 = { x: 1, y: 2 };
const p2 = { x: 1, y: 2 };

// Both work if they have the required structure
usePoint(p1); // Works
usePoint(p2); // Also works
```

**Special features:**
- Objects are checked structurally at runtime
- An object is compatible if it has the required properties, regardless of the type name

**Further reading:**
- [MDN Web Docs - Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Duck Typing: Tables are checked structurally at runtime
function use_point(p)
    -- Checks at runtime whether p has the required fields
    print("Point: " .. p.x .. ", " .. p.y)
end

local p1 = {x = 1, y = 2}
local p2 = {x = 1, y = 2}

-- Both work if they have the required structure
use_point(p1) -- Works
use_point(p2) -- Also works
```

**Special features:**
- Tables are checked structurally at runtime
- A table is compatible if it has the required keys, regardless of the type name

**Further reading:**
- [Lua Documentation - Tables](https://www.lua.org/manual/5.4/manual.html#2.1)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% Duck Typing: Structures are checked structurally at runtime
function use_point(p)
    % Checks at runtime whether p has the required fields
    fprintf('Point: %d, %d\n', p.x, p.y);
end

p1 = struct('x', 1, 'y', 2);
p2 = struct('x', 1, 'y', 2);

% Both work if they have the required structure
use_point(p1) % Works
use_point(p2) % Also works
```

**Special features:**
- Structures are checked structurally at runtime
- A structure is compatible if it has the required fields, regardless of the type name

**Further reading:**
- [MATLAB Documentation - Structures](https://www.mathworks.com/help/matlab/structures.html)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
% Duck Typing: Structures are checked structurally at runtime
function use_point(p)
    % Checks at runtime whether p has the required fields
    printf('Point: %d, %d\n', p.x, p.y);
end

p1 = struct('x', 1, 'y', 2);
p2 = struct('x', 1, 'y', 2);

% Both work if they have the required structure
use_point(p1) % Works
use_point(p2) % Also works
```

**Special features:**
- Structures are checked structurally at runtime
- A structure is compatible if it has the required fields, regardless of the type name

**Further reading:**
- [GNU Octave Documentation - Structures](https://octave.org/doc/v8.1.0/Structures.html)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Duck Typing: Hashes are checked structurally at runtime
sub use_point {
    my ($p) = @_;
    # Checks at runtime whether $p has the required keys
    print "Point: $p->{x}, $p->{y}\n";
}

my $p1 = { x => 1, y => 2 };
my $p2 = { x => 1, y => 2 };

# Both work if they have the required structure
use_point($p1); # Works
use_point($p2); # Also works
```

**Special features:**
- Hashes are checked structurally at runtime
- A hash is compatible if it has the required keys, regardless of the type name

**Further reading:**
- [Perl Documentation - Hashes](https://perldoc.perl.org/perldata#Hashes)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
// Duck Typing: Objects are checked structurally at runtime
function usePoint($p) {
    // Checks at runtime whether $p has the required properties
    echo "Point: {$p->x}, {$p->y}\n";
}

$p1 = (object)['x' => 1, 'y' => 2];
$p2 = (object)['x' => 1, 'y' => 2];

// Both work if they have the required structure
usePoint($p1); // Works
usePoint($p2); // Also works
?>
```

**Special features:**
- Objects are checked structurally at runtime
- An object is compatible if it has the required properties, regardless of the type name

**Further reading:**
- [PHP Documentation - Objects](https://www.php.net/manual/en/language.types.object.php)

</TabItem>
<TabItem value="python" label="Python">

```python
# Duck Typing: Objects are checked structurally at runtime
def use_point(p):
    # Checks at runtime whether p has the required attributes
    print(f"Point: {p.x}, {p.y}")

class PointA:
    def __init__(self, x, y):
        self.x = x
        self.y = y

class PointB:
    def __init__(self, x, y):
        self.x = x
        self.y = y

p1 = PointA(1, 2)
p2 = PointB(1, 2)

# Both work if they have the required structure
use_point(p1)  # Works
use_point(p2)  # Also works
```

**Special features:**
- Objects are checked structurally at runtime
- An object is compatible if it has the required attributes/methods, regardless of the type name

**Further reading:**
- [Python Documentation - Classes](https://docs.python.org/3/tutorial/classes.html)

</TabItem>
<TabItem value="r" label="R">

```r
# Duck Typing: Lists are checked structurally at runtime
use_point <- function(p) {
    # Checks at runtime whether p has the required components
    cat("Point:", p$x, ",", p$y, "\n")
}

p1 <- list(x = 1, y = 2)
p2 <- list(x = 1, y = 2)

# Both work if they have the required structure
use_point(p1) # Works
use_point(p2) # Also works
```

**Special features:**
- Lists are checked structurally at runtime
- A list is compatible if it has the required components, regardless of the type name

**Further reading:**
- [R Documentation - Lists](https://cran.r-project.org/doc/manuals/r-release/R-intro.html#Lists)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
; Duck Typing: Hashes are checked structurally at runtime
(define (use-point p)
  ; Checks at runtime whether p has the required fields
  (printf "Point: ~a, ~a\n" (hash-ref p 'x) (hash-ref p 'y)))

(define p1 (hash 'x 1 'y 2))
(define p2 (hash 'x 1 'y 2))

; Both work if they have the required structure
(use-point p1) ; Works
(use-point p2) ; Also works
```

**Special features:**
- Hashes are checked structurally at runtime
- A hash is compatible if it has the required keys, regardless of the type name

**Further reading:**
- [Racket Documentation - Hashes](https://docs.racket-lang.org/reference/hashtables.html)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Duck Typing: Objects are checked structurally at runtime
def use_point(p)
  # Checks at runtime whether p has the required methods
  puts "Point: #{p.x}, #{p.y}"
end

class PointA
  attr_accessor :x, :y
  def initialize(x, y)
    @x = x
    @y = y
  end
end

class PointB
  attr_accessor :x, :y
  def initialize(x, y)
    @x = x
    @y = y
  end
end

p1 = PointA.new(1, 2)
p2 = PointB.new(1, 2)

# Both work if they have the required structure
use_point(p1) # Works
use_point(p2) # Also works
```

**Special features:**
- Objects are checked structurally at runtime
- An object is compatible if it has the required methods, regardless of the type name

**Further reading:**
- [Ruby Documentation - Classes](https://ruby-doc.org/core-3.1.0/Class.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; Duck Typing: Association lists are checked structurally at runtime
(define (use-point p)
  ;; Checks at runtime whether p has the required keys
  (display (string-append "Point: "
                          (number->string (cdr (assoc 'x p)))
                          ", "
                          (number->string (cdr (assoc 'y p)))
                          "\n")))

(define p1 '((x . 1) (y . 2)))
(define p2 '((x . 1) (y . 2)))

;; Both work if they have the required structure
(use-point p1) ; Works
(use-point p2) ; Also works
```

**Special features:**
- Association lists are checked structurally at runtime
- An association list is compatible if it has the required keys, regardless of the type name

**Further reading:**
- [Scheme Documentation - Association Lists](https://www.scheme.com/tspl4/objects.html)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Duck Typing: Structural Typing enables Duck Typing at compile time
interface PointLike {
    x: number;
    y: number;
}

function usePoint(p: PointLike) {
    console.log(`Point: ${p.x}, ${p.y}`);
}

const p1 = { x: 1, y: 2 };
const p2 = { x: 1, y: 2 };

// Both work if they have the required structure
usePoint(p1); // Works
usePoint(p2); // Also works
```

**Special features:**
- Structural Typing enables Duck Typing at compile time
- An object is compatible if it has the required properties, regardless of the type name

**Further reading:**
- [TypeScript Handbook - Structural Typing](https://www.typescriptlang.org/docs/handbook/type-compatibility.html)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Duck Typing: Associations are checked structurally at runtime *)
usePoint[p_] := Print["Point: ", p["x"], ", ", p["y"]]

p1 = <|"x" -> 1, "y" -> 2|>
p2 = <|"x" -> 1, "y" -> 2|>

(* Both work if they have the required structure *)
usePoint[p1] (* Works *)
usePoint[p2] (* Also works *)
```

**Special features:**
- Associations are checked structurally at runtime
- An association is compatible if it has the required keys, regardless of the type name

**Further reading:**
- [Wolfram Language Documentation - Associations](https://reference.wolfram.com/language/guide/Associations.html)

</TabItem>
</Tabs>


## 3.5.2. Runtime Type Checking / Type Queries

Checking the type of a value at runtime. Enables determining the type of an object at runtime and making decisions based on it.

### Languages {#sprachen}

<Tabs availableTabs={['clojure', 'common-lisp', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'elixir', 'erlang', 'fortran', 'go', 'groovy', 'java', 'javascript', 'julia', 'kotlin', 'lua', 'matlab', 'objective-c', 'object-pascal', 'ocaml', 'octave', 'perl', 'php', 'prolog', 'python', 'r', 'racket', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'vbnet', 'wolfram-language']}>
<TabItem value="cpp" label="C++">

```cpp
// Runtime Type Checking: typeid and RTTI
#include <typeinfo>
#include <iostream>

int value = 42;

// Type information with typeid
const std::type_info& value_type = typeid(value);
std::cout << "Typ: " << value_type.name() << std::endl;

// Type comparison with typeid
if (typeid(value) == typeid(int)) {
    std::cout << "Wert ist ein int" << std::endl;
}

// Type checking with dynamic_cast (for polymorphism)
class Base { public: virtual ~Base() {} };
class Derived : public Base {};

Base* ptr = new Derived();
if (dynamic_cast<Derived*>(ptr) != nullptr) {
    std::cout << "Pointer zeigt auf Derived" << std::endl;
}
```

**Special features:**
- `typeid` provides type information at runtime (RTTI)
- `dynamic_cast` enables safe type conversion at runtime
- RTTI must be enabled (default in most compilers)

**Further reading:**
- [cppreference.com - typeid](https://en.cppreference.com/w/cpp/language/typeid)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Runtime Type Checking: typeof and is operator
object value = 42;

// Check type with is
if (value is int) {
    Console.WriteLine("Wert ist ein int");
}

// Check type and cast with is
if (value is int intValue) {
    Console.WriteLine($"Wert: {intValue}");
}

// typeof for type information
Type type = typeof(int);
Console.WriteLine($"Typ: {type.Name}");
```

**Special features:**
- `is` operator checks type at runtime
- `typeof` provides type information at compile time
- Pattern matching with `is` enables type checking and casting in one step

**Further reading:**
- [Microsoft C# Documentation - Type Testing](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/type-testing-and-cast)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Runtime Type Checking: type and instance?
(def value 42)

;; Check type with instance?
(if (instance? Long value)
  (println "Wert ist ein Long"))

;; Query type with type
(def value-type (type value))
(println (str "Typ: " value-type))

;; Check with class
(if (= (class value) Long)
  (println "Wert ist ein Long"))
```

**Special features:**
- `instance?` checks whether a value is an instance of a class
- `type` returns the type of a value
- `class` returns the class of an object

**Further reading:**
- [Clojure Documentation - Reflection](https://clojure.org/reference/reflection)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Runtime Type Checking: typep and type-of
(defvar value 42)

;; Check type with typep
(if (typep value 'integer)
    (format t "Wert ist ein integer~%"))

;; Query type with type-of
(defvar value-type (type-of value))
(format t "Typ: ~a~%" value-type)

;; Check with typep for specific types
(if (typep value '(integer 0 100))
    (format t "Wert ist ein Integer zwischen 0 und 100~%"))
```

**Special features:**
- `typep` checks whether a value belongs to a type
- `type-of` returns the type of a value
- Also supports type predicates for specific type ranges

**Further reading:**
- [Common Lisp HyperSpec - Type Predicates](http://www.lispworks.com/documentation/HyperSpec/Body/f_typep.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Runtime Type Checking: is_a? and typeof
value = 42

# Check type with is_a?
if value.is_a?(Int32)
  puts "Wert ist ein Int32"
end

# Query type with typeof
value_type = typeof(value)
puts "Typ: #{value_type}"

# Pattern matching with case
case value
when Int32
  puts "Wert ist ein Int32"
when String
  puts "Wert ist ein String"
else
  puts "Unbekannter Typ"
end
```

**Special features:**
- `is_a?` checks type at runtime
- `typeof` provides type information at compile time
- Pattern matching with `case` supports type checking

**Further reading:**
- [Crystal Documentation - Type Reflection](https://crystal-lang.org/reference/1.11/syntax_and_semantics/type_reflection.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Runtime Type Checking: is and runtimeType
var value = 42;

// Check type with is
if (value is int) {
  print("Wert ist ein int");
}

// Query type with runtimeType
Type valueType = value.runtimeType;
print("Typ: $valueType");

// Pattern matching with switch
switch (value) {
  case int():
    print("Wert ist ein int");
    break;
  case String():
    print("Wert ist ein String");
    break;
  default:
    print("Unbekannter Typ");
}
```

**Special features:**
- `is` operator checks type at runtime
- `runtimeType` returns the runtime type
- Pattern matching with `switch` (since Dart 3.0) supports type checking

**Further reading:**
- [Dart Documentation - Type System](https://dart.dev/language/type-system)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Runtime Type Checking: is_atom, is_integer, etc.
value = 42

# Check type with guard functions
if is_integer(value) do
  IO.puts("Wert ist ein Integer")
end

# Pattern matching with case
case value do
  x when is_integer(x) -> IO.puts("Wert ist ein Integer")
  x when is_binary(x) -> IO.puts("Wert ist ein String")
  _ -> IO.puts("Unbekannter Typ")
end

# Type information with IEx
# i(value) returns type information
```

**Special features:**
- Guard functions (`is_integer`, `is_atom`, etc.) check types at runtime
- Pattern matching with guards enables type checking
- IEx provides `i/1` for type information

**Further reading:**
- [Elixir Documentation - Guards](https://elixir-lang.org/getting-started/pattern-matching.html#guards)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% Runtime Type Checking: is_integer, is_atom, etc.
Value = 42.

% Check type with guard functions
case Value of
    X when is_integer(X) -> io:format("Wert ist ein Integer~n");
    X when is_atom(X) -> io:format("Wert ist ein Atom~n");
    _ -> io:format("Unbekannter Typ~n")
end.

% Type information with erlang:is_integer/1
if is_integer(Value) ->
    io:format("Wert ist ein Integer~n");
   true ->
    io:format("Wert ist kein Integer~n")
end.
```

**Special features:**
- Guard functions (`is_integer`, `is_atom`, etc.) check types at runtime
- Pattern matching with guards enables type checking
- `erlang:` module provides many type checking functions

**Further reading:**
- [Erlang Documentation - Guards](https://www.erlang.org/doc/reference_manual/expressions.html#guards)

</TabItem>
<TabItem value="go" label="Go">

```go
// Runtime Type Checking: Type Assertions and Type Switches
var value interface{} = 42

// Type Assertion
if intValue, ok := value.(int); ok {
    fmt.Printf("Wert ist ein int: %d\n", intValue)
}

// Type Switch
switch v := value.(type) {
case int:
    fmt.Printf("Wert ist ein int: %d\n", v)
case string:
    fmt.Printf("Wert ist ein string: %s\n", v)
default:
    fmt.Println("Unbekannter Typ")
}

// Type information with reflect
import "reflect"
valueType := reflect.TypeOf(value)
fmt.Printf("Typ: %s\n", valueType)
```

**Special features:**
- Type Assertions check and cast types at runtime
- Type Switches enable pattern matching based on types
- `reflect` package provides extended type information

**Further reading:**
- [Go Language Specification - Type Assertions](https://go.dev/ref/spec#Type_assertions)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Runtime Type Checking: instanceof and getClass()
def value = 42

// Check type with instanceof
if (value instanceof Integer) {
    println "Wert ist ein Integer"
}

// Query type with getClass()
Class valueClass = value.getClass()
println "Typ: ${valueClass.name}"

// Pattern matching with switch
switch (value) {
    case Integer:
        println "Wert ist ein Integer"
        break
    case String:
        println "Wert ist ein String"
        break
    default:
        println "Unbekannter Typ"
}
```

**Special features:**
- `instanceof` checks type at runtime
- `getClass()` returns the class of an object
- `switch` supports type checking

**Further reading:**
- [Groovy Documentation - Operators](https://groovy-lang.org/operators.html#_instanceof_operator)

</TabItem>
<TabItem value="java" label="Java">

```java
// Runtime Type Checking: instanceof and getClass()
Object value = 42;

// Check type with instanceof
if (value instanceof Integer) {
    System.out.println("Wert ist ein Integer");
}

// Query type with getClass()
Class<?> valueClass = value.getClass();
System.out.println("Typ: " + valueClass.getName());

// Pattern matching with instanceof (since Java 16)
if (value instanceof Integer intValue) {
    System.out.println("Wert: " + intValue);
}
```

**Special features:**
- `instanceof` checks type at runtime
- `getClass()` returns the class of an object
- Pattern matching with `instanceof` (since Java 16) enables type checking and casting in one step

**Further reading:**
- [Oracle Java Documentation - instanceof Operator](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/op2.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Runtime Type Checking: typeof and instanceof
const value = 42;

// Check type with typeof
if (typeof value === "number") {
    console.log("Wert ist ein number");
}

// Check type with instanceof for objects
const obj = new Date();
if (obj instanceof Date) {
    console.log("Wert ist ein Date");
}

// Query type with typeof
const valueType = typeof value;
console.log(`Typ: ${valueType}`);

// Object.prototype.toString for more precise type checking
const preciseType = Object.prototype.toString.call(value);
console.log(`Präziser Typ: ${preciseType}`);
```

**Special features:**
- `typeof` returns the primitive type
- `instanceof` checks whether an object is an instance of a class
- `Object.prototype.toString.call()` provides more precise type information

**Further reading:**
- [MDN Web Docs - typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Runtime Type Checking: isa und typeof
value = 42

# Check type with isa
if isa(value, Int)
    println("Wert ist ein Int")
end

# Query type with typeof
value_type = typeof(value)
println("Typ: $value_type")

# Pattern matching with if-elseif
if isa(value, Int)
    println("Wert ist ein Int")
elseif isa(value, String)
    println("Wert ist ein String")
else
    println("Unbekannter Typ")
end
```

**Special features:**
- `isa` checks whether a value belongs to a type
- `typeof` returns the type of a value
- Also supports subtype checking

**Further reading:**
- [Julia Documentation - Types](https://docs.julialang.org/en/v1/manual/types/)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Runtime Type Checking: is und ::class
val value: Any = 42

// Check type with is
if (value is Int) {
    println("Wert ist ein Int")
}

// Query type with ::class
val valueClass = value::class
println("Typ: ${valueClass.simpleName}")

// Smart Cast after is check
if (value is Int) {
    println("Wert: $value") // Automatic casting
}

// Pattern matching with when
when (value) {
    is Int -> println("Wert ist ein Int")
    is String -> println("Wert ist ein String")
    else -> println("Unbekannter Typ")
}
```

**Special features:**
- `is` operator checks type at runtime
- `::class` returns type information
- Smart Casts enable automatic casting after type checking

**Further reading:**
- [Kotlin Documentation - Type Checks and Casts](https://kotlinlang.org/docs/typecasts.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Runtime Type Checking: type()
local value = 42

-- Typ prüfen mit type()
if type(value) == "number" then
    print("Wert ist ein number")
end

-- Typ abfragen mit type()
local value_type = type(value)
print("Typ: " .. value_type)

-- Pattern matching mit if-elseif
if type(value) == "number" then
    print("Wert ist ein number")
elseif type(value) == "string" then
    print("Wert ist ein string")
else
    print("Unbekannter Typ")
end
```

**Special features:**
- `type()` gibt den Typ eines Wertes zurück
- Unterstützt die Typen: nil, boolean, number, string, function, userdata, thread, table

**Further reading:**
- [Lua Documentation - type](https://www.lua.org/manual/5.4/manual.html#pdf-type)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% Runtime Type Checking: isa und class
value = 42;

% Typ prüfen mit isa
if isa(value, 'double')
    fprintf('Wert ist ein double\n');
end

% Typ abfragen mit class
value_class = class(value);
fprintf('Typ: %s\n', value_class);

% Prüfung mit isnumeric, ischar, etc.
if isnumeric(value)
    fprintf('Wert ist numerisch\n');
end
```

**Special features:**
- `isa` prüft, ob ein Wert zu einem Typ gehört
- `class` gibt den Typ eines Wertes zurück
- Spezielle Prüf-Funktionen wie `isnumeric`, `ischar`, etc.

**Further reading:**
- [MATLAB Documentation - Type Identification](https://www.mathworks.com/help/matlab/data-type-identification.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Runtime Type Checking: Pattern Matching *)
let value = 42

(* Typ prüfen mit Pattern Matching *)
match value with
| x when x > 0 -> print_endline "Wert ist eine positive Zahl"
| _ -> print_endline "Wert ist keine positive Zahl"

(* Typ-Informationen mit Obj *)
let value_type = Obj.tag (Obj.repr value)
(* Tag 0 = Int, Tag 252 = String, etc. *)
```

**Special features:**
- Pattern Matching ermöglicht Typ-Prüfung zur Laufzeit
- `Obj` Modul bietet Low-Level Typ-Informationen
- Typen werden hauptsächlich zur Compile-Zeit geprüft

**Further reading:**
- [OCaml Documentation - Pattern Matching](https://ocaml.org/manual/patterns.html)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
% Runtime Type Checking: isa und class
value = 42;

% Typ prüfen mit isa
if isa(value, 'double')
    printf('Wert ist ein double\n');
end

% Typ abfragen mit class
value_class = class(value);
printf('Typ: %s\n', value_class);

% Prüfung mit isnumeric, ischar, etc.
if isnumeric(value)
    printf('Wert ist numerisch\n');
end
```

**Special features:**
- `isa` prüft, ob ein Wert zu einem Typ gehört
- `class` gibt den Typ eines Wertes zurück
- Spezielle Prüf-Funktionen wie `isnumeric`, `ischar`, etc.

**Further reading:**
- [GNU Octave Documentation - Type Identification](https://octave.org/doc/v8.1.0/Type-Identification.html)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Runtime Type Checking: ref und Scalar::Util
use Scalar::Util qw(blessed reftype);

my $value = 42;

# Typ prüfen mit ref
if (ref($value) eq '') {
    print "Wert ist ein Skalar\n";
}

# Typ abfragen mit ref
my $value_type = ref($value) || 'SCALAR';
print "Typ: $value_type\n";

# Prüfung mit blessed für Objekte
my $obj = bless {}, 'MyClass';
if (blessed($obj)) {
    print "Wert ist ein geblessetes Objekt\n";
}
```

**Special features:**
- `ref` gibt den Typ einer Referenz zurück
- `Scalar::Util::blessed` prüft, ob ein Wert ein geblessetes Objekt ist
- `Scalar::Util::reftype` gibt den Referenz-Typ zurück

**Further reading:**
- [Perl Documentation - ref](https://perldoc.perl.org/functions/ref)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
// Runtime Type Checking: gettype, is_* Funktionen und instanceof
$value = 42;

// Typ prüfen mit is_int
if (is_int($value)) {
    echo "Wert ist ein int\n";
}

// Typ abfragen mit gettype
$value_type = gettype($value);
echo "Typ: $value_type\n";

// Prüfung mit instanceof für Objekte
$obj = new stdClass();
if ($obj instanceof stdClass) {
    echo "Wert ist ein stdClass\n";
}

// get_debug_type (seit PHP 8.0)
$debug_type = get_debug_type($value);
echo "Debug Typ: $debug_type\n";
?>
```

**Special features:**
- `is_*` Funktionen prüfen spezifische Typen
- `gettype` gibt den Typ eines Wertes zurück
- `instanceof` prüft, ob ein Objekt eine Instanz einer Klasse ist
- `get_debug_type` (seit PHP 8.0) gibt präzisere Typ-Informationen

**Further reading:**
- [PHP Documentation - Type Functions](https://www.php.net/manual/en/ref.var.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Runtime Type Checking: Typ-Prüfprädikate
X = 42,
integer(X),        % true
float(X),          % false
number(X),         % true
atom(hello),       % true
is_list([1, 2]),   % true
compound(f(a, b)), % true

% Variablen-Status prüfen
var(Y),            % true (Y ist ungebunden)
nonvar(X),         % true (X ist gebunden)
ground(f(1, 2)),   % true (keine ungebundenen Variablen)

% Struktur-Inspektion mit functor/3 und =../2
functor(f(a, b), F, A),  % F = f, A = 2
f(a, b) =.. List,        % List = [f, a, b]
```

**Special features:**
- Umfangreiche Typ-Prüfprädikate: `integer/1`, `float/1`, `number/1`, `atom/1`, `compound/1`, `is_list/1`, `string/1`, `callable/1`
- `var/1` und `nonvar/1` prüfen den Bindungsstatus von Variablen
- `ground/1` prüft, ob ein Term keine ungebundenen Variablen enthält
- `functor/3` und `=../2` (Univ) ermöglichen strukturelle Inspektion von Termen

**Further reading:**
- [SWI-Prolog Documentation - Type Checking](https://www.swi-prolog.org/pldoc/man?section=typetest)

</TabItem>
<TabItem value="python" label="Python">

```python
# Runtime Type Checking: isinstance, type und type hints
value = 42

# Typ prüfen mit isinstance
if isinstance(value, int):
    print("Wert ist ein int")

# Typ abfragen mit type
value_type = type(value)
print(f"Typ: {value_type}")

# Prüfung mit type() ==
if type(value) == int:
    print("Wert ist genau ein int")

# Typ-Informationen mit __class__
value_class = value.__class__
print(f"Klasse: {value_class}")
```

**Special features:**
- `isinstance` prüft, ob ein Wert zu einem Typ gehört (unterstützt auch Vererbung)
- `type` gibt den exakten Typ eines Wertes zurück
- `__class__` gibt die Klasse eines Objekts zurück

**Further reading:**
- [Python Documentation - Built-in Functions](https://docs.python.org/3/library/functions.html#isinstance)

</TabItem>
<TabItem value="r" label="R">

```r
# Runtime Type Checking: is.* und class()
value <- 42

# Typ prüfen mit is.numeric
if (is.numeric(value)) {
    cat("Wert ist numerisch\n")
}

# Typ abfragen mit class()
value_class <- class(value)
cat("Typ:", value_class, "\n")

# Prüfung mit is.integer
if (is.integer(value)) {
    cat("Wert ist ein integer\n")
}

# typeof gibt den internen Typ zurück
value_type <- typeof(value)
cat("Interner Typ:", value_type, "\n")
```

**Special features:**
- `is.*` Funktionen prüfen spezifische Typen
- `class` gibt die Klasse eines Objekts zurück
- `typeof` gibt den internen Typ zurück

**Further reading:**
- [R Documentation - Type Functions](https://cran.r-project.org/doc/manuals/r-release/R-intro.html#Objects)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
; Runtime Type Checking: Typ-Prädikate
(define value 42)

; Typ prüfen mit number?
(when (number? value)
  (printf "Wert ist eine Zahl\n"))

; Typ abfragen mit Typ-Prädikaten
(cond
  [(number? value) (printf "Typ: number\n")]
  [(string? value) (printf "Typ: string\n")]
  [else (printf "Typ: unbekannt\n")])

; Prüfung mit integer?
(when (integer? value)
  (printf "Wert ist ein integer\n"))
```

**Special features:**
- Typ-Prädikate (`number?`, `string?`, etc.) prüfen Typen zur Laufzeit
- Viele spezifische Prädikate für verschiedene Typen
- `cond` ermöglicht bedingte Verzweigung basierend auf Typ-Prüfungen

**Further reading:**
- [Racket Documentation - Type Predicates](https://docs.racket-lang.org/reference/typepredicates.html)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Runtime Type Checking: is_a?, class und kind_of?
value = 42

# Typ prüfen mit is_a?
if value.is_a?(Integer)
  puts "Wert ist ein Integer"
end

# Typ abfragen mit class
value_class = value.class
puts "Typ: #{value_class}"

# Prüfung mit kind_of? (Alias für is_a?)
if value.kind_of?(Integer)
  puts "Wert ist ein Integer"
end

# Pattern matching mit case
case value
when Integer
  puts "Wert ist ein Integer"
when String
  puts "Wert ist ein String"
else
  puts "Unbekannter Typ"
end
```

**Special features:**
- `is_a?` und `kind_of?` prüfen, ob ein Wert zu einer Klasse gehört
- `class` gibt die Klasse eines Objekts zurück
- `case` unterstützt Typ-Prüfung

**Further reading:**
- [Ruby Documentation - Object](https://ruby-doc.org/core-3.1.0/Object.html#method-i-is_a-3F)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Runtime Type Checking: TypeId und Any Trait
use std::any::{Any, TypeId};

let value: i32 = 42;

// Typ-Informationen mit TypeId
let value_type_id = TypeId::of::<i32>();
let actual_type_id = value.type_id();

if value_type_id == actual_type_id {
    println!("Wert ist ein i32");
}

// Typ-Prüfung mit Any Trait
fn check_type<T: 'static>(value: &dyn Any) -> Option<&T> {
    value.downcast_ref::<T>()
}

if let Some(int_value) = check_type::<i32>(&value) {
    println!("Wert: {}", int_value);
}
```

**Special features:**
- `TypeId` ermöglicht Typ-Vergleich zur Laufzeit
- `Any` Trait ermöglicht Typ-Prüfung und Downcasting
- Typ-Prüfung ist hauptsächlich zur Compile-Zeit

**Further reading:**
- [The Rust Book - Any Trait](https://doc.rust-lang.org/std/any/trait.Any.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Runtime Type Checking: isInstanceOf und getClass
val value: Any = 42

// Typ prüfen mit isInstanceOf
if (value.isInstanceOf[Int]) {
  println("Wert ist ein Int")
}

// Typ abfragen mit getClass
val valueClass = value.getClass
println(s"Typ: ${valueClass.getSimpleName}")

// Pattern matching mit match
value match {
  case _: Int => println("Wert ist ein Int")
  case _: String => println("Wert ist ein String")
  case _ => println("Unbekannter Typ")
}
```

**Special features:**
- `isInstanceOf` prüft Typ zur Laufzeit
- `getClass` gibt die Klasse eines Objekts zurück
- Pattern matching mit `match` unterstützt Typ-Prüfung

**Further reading:**
- [Scala Documentation - Type Testing](https://docs.scala-lang.org/tour/pattern-matching.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; Runtime Type Checking: Typ-Prädikate
(define value 42)

;; Typ prüfen mit number?
(if (number? value)
    (display "Wert ist eine Zahl\n"))

;; Typ abfragen mit Typ-Prädikaten
(cond
  ((number? value) (display "Typ: number\n"))
  ((string? value) (display "Typ: string\n"))
  (else (display "Typ: unbekannt\n")))

;; Prüfung mit integer?
(if (integer? value)
    (display "Wert ist ein integer\n"))
```

**Special features:**
- Typ-Prädikate (`number?`, `string?`, etc.) prüfen Typen zur Laufzeit
- Viele spezifische Prädikate für verschiedene Typen
- `cond` ermöglicht Pattern Matching basierend auf Typen

**Further reading:**
- [Scheme Documentation - Type Predicates](https://www.scheme.com/tspl4/objects.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Runtime Type Checking: is und type(of:)
let value: Any = 42

// Typ prüfen mit is
if value is Int {
    print("Wert ist ein Int")
}

// Typ abfragen mit type(of:)
let valueType = type(of: value)
print("Typ: \(valueType)")

// Pattern matching mit switch
switch value {
case is Int:
    print("Wert ist ein Int")
case is String:
    print("Wert ist ein String")
default:
    print("Unbekannter Typ")
}

// Type Casting mit as?
if let intValue = value as? Int {
    print("Wert: \(intValue)")
}
```

**Special features:**
- `is` Operator prüft Typ zur Laufzeit
- `type(of:)` gibt Typ-Informationen zurück
- `as?` ermöglicht sicheres Type Casting

**Further reading:**
- [Swift Documentation - Type Casting](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/typecasting/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Runtime Type Checking: typeof und Type Guards
const value: unknown = 42;

// Typ prüfen mit typeof
if (typeof value === "number") {
    console.log("Wert ist ein number");
}

// Type Guard Funktion
function isNumber(value: unknown): value is number {
    return typeof value === "number";
}

if (isNumber(value)) {
    console.log(`Wert: ${value}`); // TypeScript weiß hier, dass value number ist
}

// instanceof für Objekte
const obj = new Date();
if (obj instanceof Date) {
    console.log("Wert ist ein Date");
}
```

**Special features:**
- `typeof` prüft primitiven Typ zur Laufzeit
- Type Guards ermöglichen Typ-Narrowing zur Compile-Zeit
- `instanceof` prüft, ob ein Objekt eine Instanz einer Klasse ist

**Further reading:**
- [TypeScript Handbook - Type Guards](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Runtime Type Checking: TypeOf und GetType
Dim value As Object = 42

' Typ prüfen mit TypeOf
If TypeOf value Is Integer Then
    Console.WriteLine("Wert ist ein Integer")
End If

' Typ abfragen mit GetType
Dim valueType As Type = value.GetType()
Console.WriteLine($"Typ: {valueType.Name}")

' Typ-Prüfung mit Is
If value.GetType() Is GetType(Integer) Then
    Console.WriteLine("Wert ist ein Integer")
End If
```

**Special features:**
- `TypeOf ... Is` prüft Typ zur Laufzeit
- `GetType()` gibt Typ-Informationen zurück
- `Is` Operator ermöglicht Typ-Vergleich

**Further reading:**
- [Microsoft VB.NET Documentation - TypeOf Operator](https://learn.microsoft.com/en-us/dotnet/visual-basic/language-reference/operators/typeof-operator)

</TabItem>
<TabItem value="d" label="D">

```d
// Runtime Type Checking
// Benötigt: import std.stdio;
class Animal {}
class Dog : Animal {}
class Cat : Animal {}

Animal a = new Dog();

// typeid für Typabfrage
if (typeid(a) == typeid(Dog)) {
    writeln("a ist ein Dog");
}

// cast für sichere Typkonvertierung
Dog d = cast(Dog) a;
if (d !is null) {
    writeln("Cast erfolgreich");
}

// classinfo für Vererbungsprüfung
if (cast(Dog) a !is null) {
    writeln("a ist ein Dog oder abgeleiteter Typ");
}
```

**Special features:**
- `typeid` liefert TypeInfo zur Laufzeit
- `cast` gibt `null` zurück bei fehlgeschlagener Referenz-Konvertierung
- `is`/`!is` für Referenzvergleich mit `null`
- Compile-time Type Queries via `is()`-Expressions und `std.traits`

**Further reading:**
- [D Language Specification - Expressions (Cast)](https://dlang.org/spec/expression.html#cast_expressions)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Runtime Type Checking mit SELECT TYPE (seit Fortran 2003)
class(Shape), intent(in) :: shape

select type (shape)
    type is (Circle)
        print *, "Kreis mit Radius: ", shape%radius
    type is (Rectangle)
        print *, "Rechteck: ", shape%width, shape%height
    class default
        print *, "Unbekannte Form"
end select
```

**Special features:**
- `SELECT TYPE` für Runtime-Type-Checking auf polymorphen Objekten (seit Fortran 2003)
- `TYPE IS` prüft auf exakten Typ
- `CLASS IS` prüft auf Typ oder abgeleiteten Typ
- `CLASS DEFAULT` als Fallback

**Further reading:**
- [Fortran Wiki - SELECT TYPE](https://fortranwiki.org/fortran/show/SELECT+TYPE)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Runtime Type Checking: is und as Operatoren
type
  Animal = class
    Name: string;
  end;
  Dog = class(Animal)
    Breed: string;
  end;

var
  animal: Animal;
  dog: Dog;
begin
  animal := Dog.Create;
  if animal is Dog then
  begin
    dog := animal as Dog;
    dog.Breed := 'Labrador';
  end;
end;
```

**Special features:**
- `is` prüft den Laufzeittyp eines Objekts
- `as` führt einen sicheren Typecast durch (wirft `EInvalidCast` bei Fehler)
- Funktioniert nur mit Klassen-Typen (Reference Types)

**Further reading:**
- [Delphi Documentation - Class References](https://docwiki.embarcadero.com/RADStudio/en/Class_References)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
NSString *text = @"Hallo";
NSNumber *number = @42;

// Typprüfung mit isKindOfClass:
if ([text isKindOfClass:[NSString class]]) {
    NSLog(@"text ist ein NSString");
}

// Exakte Typprüfung mit isMemberOfClass:
if ([number isMemberOfClass:[NSNumber class]]) {
    NSLog(@"number ist exakt NSNumber");
}

// Prüfung ob Methode existiert
if ([text respondsToSelector:@selector(uppercaseString)]) {
    NSLog(@"%@", [text uppercaseString]);
}

// Prüfung ob Protokoll implementiert wird
if ([text conformsToProtocol:@protocol(NSCopying)]) {
    NSLog(@"text implementiert NSCopying");
}
```

**Special features:**
- `isKindOfClass:` prüft auf Typ und Subtypen
- `isMemberOfClass:` prüft auf exakten Typ (keine Subtypen)
- `respondsToSelector:` prüft ob ein Objekt eine Methode unterstützt
- `conformsToProtocol:` prüft ob ein Protokoll implementiert wird
- Alle Prüfungen erfolgen zur Laufzeit über die Objective-C Runtime

**Further reading:**
- [Apple Documentation - NSObject Protocol](https://developer.apple.com/documentation/objectivec/nsobject)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Runtime Type Checking *)
x = 42;
Head[x]          (* Integer *)
IntegerQ[x]      (* True *)
StringQ[x]       (* False *)
NumberQ[3.14]    (* True *)
ListQ[{1, 2}]   (* True *)
AssociationQ[<|"a" -> 1|>] (* True *)
```

**Special features:**
- `Head[]` gibt den Typ (Head) eines Ausdrucks zurück
- Umfangreiche Typ-Prädikate: `IntegerQ`, `StringQ`, `NumberQ`, `ListQ`, `AssociationQ`, etc.
- `MatchQ[expr, pattern]` für Pattern-basierte Typ-Prüfung

**Further reading:**
- [Wolfram Language Documentation - Testing Expressions](https://reference.wolfram.com/language/guide/TestingExpressions.html)

</TabItem>
</Tabs>


## 3.5.3. Type Coercion

Automatische Konvertierung von Werten zwischen verschiedenen Typen zur Laufzeit. Ermöglicht es, Werte eines Typs in einem Kontext zu verwenden, der einen anderen Typ erwartet.

### Languages {#sprachen}

<Tabs availableTabs={['c', 'clojure', 'common-lisp', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'elixir', 'erlang', 'fortran', 'go', 'groovy', 'java', 'javascript', 'julia', 'kotlin', 'lean4', 'lua', 'matlab', 'objective-c', 'ocaml', 'octave', 'perl', 'php', 'python', 'r', 'racket', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'vbnet', 'wolfram-language']} orangeTabs={['prolog']}>
<TabItem value="c" label="C">

```c
// Type Coercion: Implizite Konvertierungen
int int_val = 42;
double double_val = 3.14;

// Integer zu Double (implizit)
double result1 = int_val + double_val; // 42 wird zu 42.0

// Char zu Int (implizit)
char char_val = 'A';
int int_from_char = char_val; // 'A' wird zu 65

// Float zu Int (implizit, mit Warnung)
float float_val = 3.7f;
int int_from_float = float_val; // 3.7 wird zu 3 (truncation)
```

**Special features:**
- Implizite Konvertierungen zwischen numerischen Typen
- Char wird automatisch zu Int konvertiert
- Float zu Int Konvertierung schneidet Dezimalstellen ab

**Further reading:**
- [C Standard - Type Conversions](https://en.cppreference.com/w/c/language/conversion)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Type Coercion: Implizite Konvertierungen
int int_val = 42;
double double_val = 3.14;

// Integer zu Double (implizit)
double result1 = int_val + double_val; // 42 wird zu 42.0

// String zu verschiedene Typen (mit std::string)
std::string str = "123";
int int_from_str = std::stoi(str); // Explizit, aber häufig verwendet

// Bool zu Int (implizit)
bool bool_val = true;
int int_from_bool = bool_val; // true wird zu 1

// Pointer-Konvertierungen
void* void_ptr = &int_val;
int* int_ptr = static_cast<int*>(void_ptr);
```

**Special features:**
- Implizite Konvertierungen zwischen numerischen Typen
- Bool wird zu Int konvertiert (true=1, false=0)
- Explizite Konvertierungen mit `static_cast`, `dynamic_cast`, etc.

**Further reading:**
- [cppreference.com - Implicit Conversions](https://en.cppreference.com/w/cpp/language/implicit_conversion)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Type Coercion: Implizite und explizite Konvertierungen
int int_val = 42;
double double_val = 3.14;

// Integer zu Double (implizit)
double result1 = int_val + double_val; // 42 wird zu 42.0

// String zu Int (explizit)
string str = "123";
int int_from_str = int.Parse(str); // Explizit

// Boxing (Value Type zu Object)
object obj = int_val; // int wird zu object

// Unboxing (Object zu Value Type)
int unboxed = (int)obj; // Explizit
```

**Special features:**
- Implizite Konvertierungen zwischen kompatiblen numerischen Typen
- Boxing/Unboxing für Value Types
- Explizite Konvertierungen mit Cast-Operatoren oder Parse-Methoden

**Further reading:**
- [Microsoft C# Documentation - Type Conversions](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/types/casting-and-type-conversions)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Type Coercion: Explizite Konvertierungen
(def int-val 42)
(def str-val "123")

;; String zu Int
(def int-from-str (Integer/parseInt str-val))

;; Int zu String
(def str-from-int (str int-val))

;; Int zu Double
(def double-from-int (double int-val))

;; Coercion in arithmetic operations
(def result (+ int-val 3.14)) ; Int is converted to Double
```

**Special features:**
- Explicit conversions with functions like `Integer/parseInt`, `str`, `double`
- Arithmetic operations automatically convert to common type

**Further reading:**
- [Clojure Documentation - Numbers](https://clojure.org/reference/reader#_literals)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Type Coercion: Explicit conversions
(defvar int-val 42)
(defvar str-val "123")

;; String to Int
(defvar int-from-str (parse-integer str-val))

;; Int to String
(defvar str-from-int (write-to-string int-val))

;; Int to Float
(defvar float-from-int (float int-val))

;; Coercion in arithmetic operations
(defvar result (+ int-val 3.14)) ; Int is converted to Float
```

**Special features:**
- Explicit conversions with functions like `parse-integer`, `write-to-string`, `float`
- Arithmetic operations automatically convert to common type

**Further reading:**
- [Common Lisp HyperSpec - Numbers](http://www.lispworks.com/documentation/HyperSpec/Body/c_number.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Type Coercion: Explicit conversions
int_val = 42
str_val = "123"

# String to Int
int_from_str = str_val.to_i

# Int to String
str_from_int = int_val.to_s

# Int to Float
float_from_int = int_val.to_f

# Coercion in arithmetic operations
result = int_val + 3.14 # Int is converted to Float
```

**Special features:**
- Explicit conversions with methods like `to_i`, `to_s`, `to_f`
- Arithmetic operations automatically convert to common type

**Further reading:**
- [Crystal Documentation - Numbers](https://crystal-lang.org/reference/1.11/syntax_and_semantics/literals/numbers.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Type Coercion: Explicit conversions
int int_val = 42;
String str_val = "123";

// String to Int
int int_from_str = int.parse(str_val);

// Int to String
String str_from_int = int_val.toString();

// Int to Double
double double_from_int = int_val.toDouble();

// Coercion in arithmetic operations
double result = int_val + 3.14; // Int is converted to Double
```

**Special features:**
- Explicit conversions with methods like `parse`, `toString`, `toDouble`
- Arithmetic operations automatically convert to common type

**Further reading:**
- [Dart Documentation - Numbers](https://dart.dev/language/numbers)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Type Coercion: Explicit conversions
int_val = 42
str_val = "123"

# String to Int
int_from_str = String.to_integer(str_val)

# Int to String
str_from_int = Integer.to_string(int_val)

# Int to Float
float_from_int = int_val / 1.0

# Coercion in arithmetic operations
result = int_val + 3.14 # Int is converted to Float
```

**Special features:**
- Explicit conversions with functions like `String.to_integer`, `Integer.to_string`
- Arithmetic operations automatically convert to common type

**Further reading:**
- [Elixir Documentation - Numbers](https://elixir-lang.org/getting-started/basic-types.html#numbers)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% Type Coercion: Explicit conversions
IntVal = 42,
StrVal = "123".

% String to Int
IntFromStr = list_to_integer(StrVal).

% Int to String
StrFromInt = integer_to_list(IntVal).

% Int to Float
FloatFromInt = float(IntVal).

% Coercion in arithmetic operations
Result = IntVal + 3.14. % Int is converted to Float
```

**Special features:**
- Explicit conversions with functions like `list_to_integer`, `integer_to_list`, `float`
- Arithmetic operations automatically convert to common type

**Further reading:**
- [Erlang Documentation - Numbers](https://www.erlang.org/doc/reference_manual/data_types.html#number)

</TabItem>
<TabItem value="go" label="Go">

```go
// Type Coercion: Explicit conversions
int_val := 42
str_val := "123"

// String to Int
int_from_str, _ := strconv.Atoi(str_val)

// Int to String
str_from_int := strconv.Itoa(int_val)

// Int to Float64
float_from_int := float64(int_val)

// Coercion in arithmetic operations
result := float64(int_val) + 3.14 // Explicitly required
```

**Special features:**
- Explicit conversions with `strconv` Package
- No implicit conversions - all conversions must be explicit
- Arithmetic operations require explicit type conversion

**Further reading:**
- [Go Language Specification - Conversions](https://go.dev/ref/spec#Conversions)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Type Coercion: Implicit and explicit conversions
int int_val = 42
String str_val = "123"

// String to Int (implicitly possible)
int int_from_str = str_val as Integer

// Int to String (implicit)
String str_from_int = int_val.toString()

// Int to Double (implicit)
double double_from_int = int_val

// Coercion in arithmetic operations
def result = int_val + 3.14 // Int is converted to Double
```

**Special features:**
- Implicit conversions between compatible types
- `as` operator enables explicit conversions
- Arithmetic operations automatically convert to common type

**Further reading:**
- [Groovy Documentation - Type Coercion](https://groovy-lang.org/semantics.html#_coercion)

</TabItem>
<TabItem value="java" label="Java">

```java
// Type Coercion: Implicit and explicit conversions
int int_val = 42;
double double_val = 3.14;

// Integer to Double (implicit)
double result1 = int_val + double_val; // 42 is converted to 42.0

// String to Int (explicit)
String str = "123";
int int_from_str = Integer.parseInt(str);

// Int to String (explicit)
String str_from_int = String.valueOf(int_val);

// Boxing (Primitive to Object)
Integer boxed = int_val; // Autoboxing

// Unboxing (Object to Primitive)
int unboxed = boxed; // Auto-unboxing
```

**Special features:**
- Implicit conversions between compatible numeric types
- Autoboxing/Unboxing for Primitive Types
- Explicit conversions with Parse methods

**Further reading:**
- [Oracle Java Documentation - Type Conversions](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Type Coercion: Implicit conversions
const int_val = 42;
const str_val = "123";

// String to Int (implicit)
const int_from_str = +str_val; // or Number(str_val)

// Int to String (implicit)
const str_from_int = int_val + ""; // or String(int_val)

// Coercion in arithmetic operations
const result = int_val + 3.14; // Int is converted to Number

// Comparison with Coercion
if (int_val == "42") { // true (== with Coercion)
    console.log("Equal with Coercion");
}

if (int_val === "42") { // false (=== without Coercion)
    console.log("Equal without Coercion");
}
```

**Special features:**
- Extensive implicit conversions
- `==` performs Type Coercion, `===` does not
- `+` operator can be addition or string concatenation

**Further reading:**
- [MDN Web Docs - Type Coercion](https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Type Coercion: Explicit conversions
int_val = 42
str_val = "123"

# String to Int
int_from_str = parse(Int, str_val)

# Int to String
str_from_int = string(int_val)

# Int to Float
float_from_int = Float64(int_val)

# Coercion in arithmetic operations
result = int_val + 3.14 # Int is converted to Float64
```

**Special features:**
- Explicit conversions with `parse`, `string`, type constructors
- Arithmetic operations automatically convert to common type

**Further reading:**
- [Julia Documentation - Type Conversions](https://docs.julialang.org/en/v1/manual/conversion-and-promotion/)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Type Coercion: Explicit conversions
val int_val = 42
val str_val = "123"

// String to Int
val int_from_str = str_val.toInt()

// Int to String
val str_from_int = int_val.toString()

// Int to Double
val double_from_int = int_val.toDouble()

// Coercion in arithmetic operations
val result = int_val + 3.14 // Int is converted to Double
```

**Special features:**
- Explicit conversions with methods like `toInt()`, `toString()`, `toDouble()`
- Arithmetic operations automatically convert to common type
- No implicit conversions between numeric types

**Further reading:**
- [Kotlin Documentation - Type Checks and Casts](https://kotlinlang.org/docs/typecasts.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Type Coercion: Coe Type Class for implicit conversions
-- Built-in Coercion: Nat → Int
def natVal : Nat := 42
def intVal : Int := natVal  -- Nat is implicitly converted to Int

-- Define custom Coercion
structure Meters where
  value : Float

instance : Coe Meters Float where
  coe m := m.value

def distance : Meters := { value := 3.14 }
def raw : Float := distance  -- Meters is implicitly converted to Float

-- Explicit conversions
def strFromNat : String := toString 42
def natFromStr : Option Nat := "123".toNat?
```

**Special features:**
- `Coe` Type Class enables implicit conversions between types
- Built-in Coercions e.g. `Nat → Int`, `Char → String`
- Custom Coercions definable via `instance : Coe A B`
- Explicit conversions with `toString`, `toNat?`, etc.

**Further reading:**
- [Lean 4 Documentation - Type Coercions](https://lean-lang.org/theorem_proving_in_lean4/type_classes.html#coercions)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Type Coercion: Implicit conversions
local int_val = 42
local str_val = "123"

-- String to Int (implicit)
local int_from_str = tonumber(str_val)

-- Int to String (implicit)
local str_from_int = tostring(int_val)

-- Coercion in arithmetic operations
local result = int_val + 3.14 -- Int is converted to Number

-- String concatenation automatically converts
local str_result = "Wert: " .. int_val -- Int is converted to String
```

**Special features:**
- `tonumber` and `tostring` for explicit conversions
- Arithmetic operations automatically convert
- String concatenation with `..` automatically converts to String

**Further reading:**
- [Lua Documentation - Coercion](https://www.lua.org/manual/5.4/manual.html#3.4.3)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% Type Coercion: Implicit conversions
int_val = 42;
str_val = "123";

% String to Int
int_from_str = str2double(str_val);

% Int to String
str_from_int = num2str(int_val);

% Int to Double (implicit)
double_from_int = double(int_val);

% Coercion in arithmetic operations
result = int_val + 3.14; % Int is converted to Double
```

**Special features:**
- Explicit conversions with `str2double`, `num2str`, `double`
- Arithmetic operations automatically convert to common type

**Further reading:**
- [MATLAB Documentation - Type Conversion](https://www.mathworks.com/help/matlab/data-type-conversion.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Type Coercion: Explicit conversions *)
let int_val = 42
let str_val = "123"

(* String to Int *)
let int_from_str = int_of_string str_val

(* Int to String *)
let str_from_int = string_of_int int_val

(* Int to Float *)
let float_from_int = float_of_int int_val

(* Coercion in arithmetic operations *)
let result = float_of_int int_val +. 3.14 (* Explicitly required *)
```

**Special features:**
- Explicit conversions with functions like `int_of_string`, `string_of_int`, `float_of_int`
- Arithmetic operations require explicit type conversion (e.g. `+.` for Float)

**Further reading:**
- [OCaml Documentation - Numbers](https://ocaml.org/manual/coreexamples.html#s:coreexamples)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
% Type Coercion: Implicit conversions
int_val = 42;
str_val = "123";

% String to Int
int_from_str = str2num(str_val);

% Int to String
str_from_int = num2str(int_val);

% Int to Double (implicit)
double_from_int = double(int_val);

% Coercion in arithmetic operations
result = int_val + 3.14; % Int is converted to Double
```

**Special features:**
- Explicit conversions with `str2num`, `num2str`, `double`
- Arithmetic operations automatically convert to common type

**Further reading:**
- [GNU Octave Documentation - Type Conversion](https://octave.org/doc/v8.1.0/Type-Conversion.html)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Type Coercion: Implicit conversions
my $int_val = 42;
my $str_val = "123";

# String to Int (implicit)
my $int_from_str = $str_val + 0; # or int($str_val)

# Int to String (implicit)
my $str_from_int = $int_val . ""; # or "$int_val"

# Coercion in arithmetic operations
my $result = $int_val + 3.14; # Int is converted to Number

# Context-dependent Coercion
my $num_context = $str_val + 0; # String is converted to Number
my $str_context = $int_val . ""; # Number is converted to String
```

**Special features:**
- Extensive implicit conversions based on context
- Arithmetic operations automatically convert
- String operations automatically convert to String

**Further reading:**
- [Perl Documentation - Type Coercion](https://perldoc.perl.org/perldata#Scalar-values)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
// Type Coercion: Implicit conversions
$int_val = 42;
$str_val = "123";

// String to Int (implicit)
$int_from_str = (int)$str_val; // or intval($str_val)

// Int to String (implicit)
$str_from_int = (string)$int_val; // or strval($int_val)

// Coercion in arithmetic operations
$result = $int_val + 3.14; // Int is converted to Float

// Comparison with Coercion
if ($int_val == "42") { // true (== with Coercion)
    echo "Equal with Coercion\n";
}

if ($int_val === "42") { // false (=== without Coercion)
    echo "Equal without Coercion\n";
}
?>
```

**Special features:**
- Extensive implicit conversions
- `==` performs Type Coercion, `===` does not
- Explicit casts with `(int)`, `(string)`, etc.

**Further reading:**
- [PHP Documentation - Type Juggling](https://www.php.net/manual/en/language.types.type-juggling.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Type Coercion: Implicit conversion in arithmetic
X is 2 + 3.0,     % X = 5.0 (Integer is converted to Float)
Y is 2 * 3.14,    % Y = 6.28 (Integer is converted to Float)
Z is truncate(3.7), % Z = 3 (Float to Integer, explicit)

% No implicit Coercion between atoms and numbers
% atom_number/2 for explicit conversion
atom_number('42', N),  % N = 42
atom_string(hello, S), % S = "hello"
number_codes(42, Codes) % Codes = [52, 50]
```

**Special features:**
- Implicit Coercion only in arithmetic: Integer is converted to Float in mixed operations
- No automatic conversion between atoms, strings and numbers
- Explicit conversion predicates: `atom_number/2`, `atom_string/2`, `number_codes/2`, `term_to_atom/2`

**Further reading:**
- [SWI-Prolog Documentation - Arithmetic](https://www.swi-prolog.org/pldoc/man?section=arith)

</TabItem>
<TabItem value="python" label="Python">

```python
# Type Coercion: Explicit conversions
int_val = 42
str_val = "123"

# String to Int
int_from_str = int(str_val)

# Int to String
str_from_int = str(int_val)

# Int to Float
float_from_int = float(int_val)

# Coercion in arithmetic operations
result = int_val + 3.14  # Int is converted to Float

# Bool to Int (implicit in arithmetic operations)
bool_val = True
int_from_bool = int(bool_val)  # True is converted to 1, False to 0
```

**Special features:**
- Explicit conversions with type constructors (`int()`, `str()`, `float()`)
- Arithmetic operations automatically convert to common type
- Bool is converted to Int (True=1, False=0)

**Further reading:**
- [Python Documentation - Type Conversions](https://docs.python.org/3/library/functions.html#int)

</TabItem>
<TabItem value="r" label="R">

```r
# Type Coercion: Explicit conversions
int_val <- 42L
str_val <- "123"

# String to Int
int_from_str <- as.integer(str_val)

# Int to String
str_from_int <- as.character(int_val)

# Int to Double
double_from_int <- as.double(int_val)

# Coercion in arithmetic operations
result <- int_val + 3.14 # Int is converted to Double

# Automatic Coercion in vectors
mixed_vec <- c(1, 2, "3") # All are converted to Character
```

**Special features:**
- Explicit conversions with `as.*` functions
- Arithmetic operations automatically convert to common type
- Vectors automatically convert to common type

**Further reading:**
- [R Documentation - Type Coercion](https://cran.r-project.org/doc/manuals/r-release/R-intro.html#Objects)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
; Type Coercion: Explicit conversions
(define int-val 42)
(define str-val "123")

; String to Int
(define int-from-str (string->number str-val))

; Int to String
(define str-from-int (number->string int-val))

; Int to Float
(define float-from-int (exact->inexact int-val))

; Coercion in arithmetic operations
(define result (+ int-val 3.14)) ; Int is converted to Float
```

**Special features:**
- Explicit conversions with functions like `string->number`, `number->string`, `exact->inexact`
- Arithmetic operations automatically convert to common type

**Further reading:**
- [Racket Documentation - Numbers](https://docs.racket-lang.org/reference/numbers.html)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Type Coercion: Explicit conversions
int_val = 42
str_val = "123"

# String to Int
int_from_str = str_val.to_i

# Int to String
str_from_int = int_val.to_s

# Int to Float
float_from_int = int_val.to_f

# Coercion in arithmetic operations
result = int_val + 3.14 # Int is converted to Float

# Implicit Coercion in String interpolation
str_result = "Wert: #{int_val}" # Int is converted to String
```

**Special features:**
- Explicit conversions with methods like `to_i`, `to_s`, `to_f`
- Arithmetic operations automatically convert to common type
- String interpolation automatically converts to String

**Further reading:**
- [Ruby Documentation - Type Conversions](https://ruby-doc.org/core-3.1.0/Object.html#method-i-to_s)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Type Coercion: Explicit conversions
let int_val: i32 = 42;
let str_val = "123";

// String to Int
let int_from_str: i32 = str_val.parse().unwrap();

// Int to String
let str_from_int = int_val.to_string();

// Int to Float
let float_from_int = int_val as f64;

// Coercion in arithmetic operations
let result = int_val as f64 + 3.14; // Explicitly required
```

**Special features:**
- Explicit conversions with `as` operator or `parse()`
- No implicit conversions - all conversions must be explicit
- Arithmetic operations require explicit type conversion

**Further reading:**
- [The Rust Book - Type Conversions](https://doc.rust-lang.org/book/ch03-02-data-types.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Type Coercion: Explicit conversions
val int_val: Int = 42
val str_val: String = "123"

// String to Int
val int_from_str: Int = str_val.toInt

// Int to String
val str_from_int: String = int_val.toString

// Int to Double
val double_from_int: Double = int_val.toDouble

// Coercion in arithmetic operations
val result: Double = int_val + 3.14 // Int is converted to Double
```

**Special features:**
- Explicit conversions with methods like `toInt`, `toString`, `toDouble`
- Arithmetic operations automatically convert to common type

**Further reading:**
- [Scala Documentation - Type Conversions](https://docs.scala-lang.org/tour/implicit-conversions.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; Type Coercion: Explicit conversions
(define int-val 42)
(define str-val "123")

;; String to Int
(define int-from-str (string->number str-val))

;; Int to String
(define str-from-int (number->string int-val))

;; Int to Float
(define float-from-int (exact->inexact int-val))

;; Coercion in arithmetic operations
(define result (+ int-val 3.14)) ; Int is converted to Float
```

**Special features:**
- Explicit conversions with functions like `string->number`, `number->string`, `exact->inexact`
- Arithmetic operations automatically convert to common type

**Further reading:**
- [Scheme Documentation - Numbers](https://www.scheme.com/tspl4/objects.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Type Coercion: Explicit conversions
let int_val: Int = 42
let str_val: String = "123"

// String to Int
let int_from_str: Int? = Int(str_val)

// Int to String
let str_from_int: String = String(int_val)

// Int to Double
let double_from_int: Double = Double(int_val)

// Coercion in arithmetic operations
let result: Double = Double(int_val) + 3.14 // Explicitly required
```

**Special features:**
- Explicit conversions with type constructors (`Int()`, `String()`, `Double()`)
- No implicit conversions - all conversions must be explicit
- Arithmetic operations require explicit type conversion

**Further reading:**
- [Swift Documentation - Type Casting](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/typecasting/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Type Coercion: Explicit conversions (at runtime like JavaScript)
const int_val: number = 42;
const str_val: string = "123";

// String to Int
const int_from_str: number = +str_val; // or Number(str_val)

// Int to String
const str_from_int: string = int_val.toString(); // or String(int_val)

// Coercion in arithmetic operations
const result: number = int_val + 3.14; // Int is converted to Number

// Comparison with Coercion (at runtime)
if (int_val == "42") { // true (== with Coercion)
    console.log("Equal with Coercion");
}

if (int_val === "42") { // false (=== without Coercion)
    console.log("Equal without Coercion");
}
```

**Special features:**
- At runtime like JavaScript - extensive implicit conversions
- `==` performs Type Coercion, `===` does not
- TypeScript checks types at compile time, but Coercion happens at runtime

**Further reading:**
- [TypeScript Handbook - Type Coercion](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Type Coercion: Implicit and explicit conversions
Dim int_val As Integer = 42
Dim str_val As String = "123"

' String to Int (explicit)
Dim int_from_str As Integer = Integer.Parse(str_val)

' Int to String (explicit)
Dim str_from_int As String = int_val.ToString()

' Integer to Double (implicit)
Dim double_from_int As Double = int_val

' Coercion in arithmetic operations
Dim result As Double = int_val + 3.14 ' Int is converted to Double
```

**Special features:**
- Implicit conversions between compatible numeric types
- Explicit conversions with `Parse` and `ToString`
- Arithmetic operations automatically convert to common type

**Further reading:**
- [Microsoft VB.NET Documentation - Type Conversions](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/data-types/type-conversions)

</TabItem>
<TabItem value="d" label="D">

```d
// Type Coercion (implicit conversion)
int i = 42;
double d = i;        // int → double (implicit)
long l = i;          // int → long (implicit)
float f = 3.14;      // double → float (implicit, with possible precision loss)

// No implicit conversion with data loss
// int x = 3.14;     // Error: cannot implicitly convert double to int

// Explicit conversion required
int x = cast(int) 3.14;  // 3 (truncated)
```

**Special features:**
- Implicit widening conversion (e.g. `int` → `long`, `int` → `double`)
- No implicit narrowing conversion (e.g. `double` → `int` requires `cast`)
- Arrays: implicit conversion from `immutable(char)[]` (string) to `const(char)[]`
- Stricter than C/C++ for potentially lossy conversions

**Further reading:**
- [D Language Specification - Implicit Conversions](https://dlang.org/spec/type.html#implicit-conversions)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Type Coercion in mixed expressions
integer :: i = 5
real :: r = 2.5
real :: result

result = i + r  ! INTEGER is implicitly converted to REAL
! result = 7.5
```

**Special features:**
- Implicit conversion in mixed arithmetic expressions
- Conversion order: INTEGER → REAL → DOUBLE PRECISION → COMPLEX
- The type with higher precision is maintained

**Further reading:**
- [Fortran Standard - Type Conversion](https://gcc.gnu.org/onlinedocs/gfortran/Type-conversion.html)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Implicit conversion between numeric types
int intValue = 42;
double doubleValue = intValue;       // int → double (implicit)
float floatValue = doubleValue;      // double → float (implicit, precision loss)

// Implicit conversion on assignment
char charValue = 65;                 // int → char (implicit)
long longValue = intValue;           // int → long (implicit)
```

**Special features:**
- C-style implicit type conversions between numeric types
- Automatic promotion in arithmetic operations (int → double)
- Possible data loss in narrowing conversions (compiler warning)
- No implicit conversion between object types

**Further reading:**
- [Apple Documentation - C Language Types](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Implicit conversion: Integer -> Real in mixed arithmetic *)
result = 1 + 2.5    (* 3.5 - Integer is converted to Real *)
result2 = 1/3       (* Remains as Rational: 1/3 *)
result3 = N[1/3]    (* Converts to Real: 0.333333 *)
```

**Special features:**
- Implicit conversion between Integer and Real in arithmetic
- Rational numbers remain exact if not explicitly converted
- `N[]` for explicit numeric conversion

**Further reading:**
- [Wolfram Language Documentation - Numerical Functions](https://reference.wolfram.com/language/guide/NumericalEvaluation.html)

</TabItem>
</Tabs>


## 3.5.4. Context (Scalar vs. List Context)

Context determines how an expression is evaluated. In a scalar context, an array returns the number of elements, for example, while in a list context it returns the elements themselves.

### Languages {#sprachen}

<Tabs availableTabs={['perl', 'r']} orangeTabs={['racket', 'scheme']}>
<TabItem value="perl" label="Perl">

```perl
# Context: Scalar vs. List Context
my @array = (1, 2, 3, 4, 5);

# Scalar Context: Returns number of elements
my $count = @array; # $count = 5

# List Context: Returns the elements
my @copy = @array; # @copy = (1, 2, 3, 4, 5)

# Scalar Context in assignment
my $scalar = @array; # $scalar = 5

# List Context in assignment
my ($first, $second) = @array; # $first = 1, $second = 2

# Scalar Context in condition
if (@array) { # True if array is not empty (count > 0)
    print "Array has elements\n";
}

# List Context in function
my @result = map { $_ * 2 } @array; # List Context
my $result = map { $_ * 2 } @array; # Scalar Context: Returns count
```

**Special features:**
- Arrays behave differently in scalar and list context
- In scalar context, an array returns the number of elements
- In list context, an array returns the elements
- Context is determined by assignment or usage

**Further reading:**
- [Perl Documentation - Context](https://perldoc.perl.org/perldata#Context)

</TabItem>
<TabItem value="r" label="R">

```r
# Context: Scalar vs. List Context (similar to Perl)
vec <- c(1, 2, 3, 4, 5)

# Scalar Context: Returns length
count <- length(vec) # count = 5

# List Context: Returns the elements
copy <- vec # copy = c(1, 2, 3, 4, 5)

# Scalar Context in condition
if (length(vec) > 0) { # Explicit length check
    cat("Vector has elements\n")
}

# List Context in function
result <- sapply(vec, function(x) x * 2) # List Context
count_result <- length(sapply(vec, function(x) x * 2)) # Scalar Context
```

**Special features:**
- Vectors behave differently depending on usage
- `length()` returns the length (scalar context)
- Direct assignment returns the elements (list context)
- Explicit functions for context differences

**Further reading:**
- [R Documentation - Vectors](https://cran.r-project.org/doc/manuals/r-release/R-intro.html#Vectors)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
; Context-dependent behavior with lists
(define lst '(1 2 3 4 5))

; Scalar-like: Query length
(define count (length lst))  ; 5

; List-like: Use elements
(define copy lst)  ; '(1 2 3 4 5)

; Context-dependent usage
(when (not (null? lst))
  (printf "List has elements\n"))

; Transformation returns list
(define result (map (lambda (x) (* x 2)) lst))
```

**Special features:**
- Racket has no explicit context system like Perl
- Lists behave consistently regardless of context
- Explicit functions like `length` for scalar values, `map` for lists

**Further reading:**
- [Racket Documentation - Lists](https://docs.racket-lang.org/reference/pairs.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; Context: Scheme has no Context system like Perl
;; Values always behave the same, regardless of usage context
(define lst '(1 2 3 4 5))

;; Explicit functions for different operations
(define count (length lst))                              ; Length: 5
(define copy lst)                                         ; Reference to the list
(define result (map (lambda (x) (* x 2)) lst))           ; New list
```

**Special features:**
- Scheme has no Scalar/List-Context concept like Perl
- Values always behave the same regardless of context
- Different operations are distinguished by explicit functions

**Further reading:**
- [Scheme Documentation - Lists](https://www.scheme.com/tspl4/objects.html)

</TabItem>
</Tabs>

