---
slug: /typsystem/dynamische-typisierung
title: 3.5. Dynamische Typisierung
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 3.5. Dynamische Typisierung

Typisierung zur Laufzeit mit flexibler Typbehandlung.

## 3.5.1. Duck Typing

Ein Objekt ist kompatibel, wenn es die erforderlichen Methoden oder Properties hat, unabhängig vom Typnamen. "Wenn es wie eine Ente geht und wie eine Ente quakt, dann ist es eine Ente."

### Sprachen {#sprachen}

<Tabs availableTabs={['clojure', 'common-lisp', 'crystal', 'elixir', 'erlang', 'go', 'groovy', 'javascript', 'lua', 'matlab', 'octave', 'perl', 'php', 'python', 'r', 'racket', 'ruby', 'scheme', 'typescript', 'wolfram-language']}>
<TabItem value="clojure" label="Clojure">

```clojure
;; Duck Typing: Objekte werden zur Laufzeit strukturell geprüft
(defn use-point [p]
  ;; Prüft zur Laufzeit, ob p die erforderlichen Methoden hat
  (println (str "Point: " (:x p) ", " (:y p))))

(def point-a {:x 1 :y 2})
(def point-b {:x 1 :y 2})

;; Beide funktionieren, wenn sie die erforderliche Struktur haben
(use-point point-a) ; Funktioniert
(use-point point-b) ; Funktioniert auch
```

**Besonderheiten:**
- Maps werden zur Laufzeit strukturell geprüft
- Ein Map ist kompatibel, wenn er die erforderlichen Keys hat, unabhängig vom Typnamen

**Weiterführende Links:**
- [Clojure Documentation - Maps](https://clojure.org/reference/data_structures#Maps)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Duck Typing: Objekte werden zur Laufzeit strukturell geprüft
(defun use-point (p)
  ;; Prüft zur Laufzeit, ob p die erforderlichen Slots hat
  (format t "Point: ~a, ~a~%" (slot-value p 'x) (slot-value p 'y)))

(defclass point-a ()
  ((x :initarg :x :accessor x)
   (y :initarg :y :accessor y)))

(defclass point-b ()
  ((x :initarg :x :accessor x)
   (y :initarg :y :accessor y)))

(defvar p1 (make-instance 'point-a :x 1 :y 2))
(defvar p2 (make-instance 'point-b :x 1 :y 2))

;; Beide funktionieren, wenn sie die erforderliche Struktur haben
(use-point p1) ; Funktioniert
(use-point p2) ; Funktioniert auch
```

**Besonderheiten:**
- Objekte werden zur Laufzeit strukturell geprüft
- Ein Objekt ist kompatibel, wenn es die erforderlichen Slots/Methoden hat, unabhängig vom Typnamen

**Weiterführende Links:**
- [Common Lisp HyperSpec - Classes](http://www.lispworks.com/documentation/HyperSpec/Body/t_class.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Duck Typing: Blocks werden strukturell geprüft
def use_point(p)
  # Prüft zur Laufzeit, ob p die erforderlichen Methoden hat
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

# Beide funktionieren, wenn sie die erforderliche Struktur haben
use_point(p1) # Funktioniert
use_point(p2) # Funktioniert auch
```

**Besonderheiten:**
- Objekte werden zur Laufzeit strukturell geprüft
- Ein Objekt ist kompatibel, wenn es die erforderlichen Methoden/Properties hat, unabhängig vom Typnamen

**Weiterführende Links:**
- [Crystal Documentation - Classes](https://crystal-lang.org/reference/1.11/syntax_and_semantics/classes.html)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Duck Typing: Protocols ermöglichen strukturelles Typing
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

# Beide funktionieren, wenn sie das Protocol implementieren
PointUser.use_point(p1) # Funktioniert
PointUser.use_point(p2) # Funktioniert auch
```

**Besonderheiten:**
- Protocols ermöglichen Runtime-Strukturelles-Typing
- Ein Typ erfüllt ein Protocol, wenn `defimpl` dafür definiert ist
- Protocols sind explizit (nicht automatisch strukturell wie in Go oder TypeScript)

**Weiterführende Links:**
- [Elixir Documentation - Protocols](https://elixir-lang.org/getting-started/protocols.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% Duck Typing: Maps werden zur Laufzeit strukturell geprüft
use_point(P) ->
    % Prüft zur Laufzeit, ob P die erforderlichen Keys hat
    X = maps:get(x, P),
    Y = maps:get(y, P),
    io:format("Point: ~p, ~p~n", [X, Y]).

P1 = #{x => 1, y => 2},
P2 = #{x => 1, y => 2}.

% Beide funktionieren, wenn sie die erforderliche Struktur haben
use_point(P1). % Funktioniert
use_point(P2). % Funktioniert auch
```

**Besonderheiten:**
- Maps werden zur Laufzeit strukturell geprüft
- Ein Map ist kompatibel, wenn er die erforderlichen Keys hat, unabhängig vom Typnamen

**Weiterführende Links:**
- [Erlang Documentation - Maps](https://www.erlang.org/doc/reference_manual/data_types.html#maps)

</TabItem>
<TabItem value="go" label="Go">

```go
// Duck Typing: Interfaces ermöglichen strukturelles Typing
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

// Beide funktionieren, wenn sie das Interface erfüllen
usePoint(p1) // Funktioniert
usePoint(p2) // Funktioniert auch
```

**Besonderheiten:**
- Interfaces ermöglichen strukturelles Typing zur Compile-Zeit
- Ein Typ erfüllt ein Interface, wenn er alle erforderlichen Methoden implementiert, unabhängig vom Typnamen

**Weiterführende Links:**
- [Go Language Specification - Interface types](https://go.dev/ref/spec#Interface_types)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Duck Typing: Objekte werden zur Laufzeit strukturell geprüft
def usePoint(p) {
    // Prüft zur Laufzeit, ob p die erforderlichen Properties hat
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

// Beide funktionieren, wenn sie die erforderliche Struktur haben
usePoint(p1) // Funktioniert
usePoint(p2) // Funktioniert auch
```

**Besonderheiten:**
- Objekte werden zur Laufzeit strukturell geprüft
- Ein Objekt ist kompatibel, wenn es die erforderlichen Properties/Methoden hat, unabhängig vom Typnamen

**Weiterführende Links:**
- [Groovy Documentation - Dynamic Typing](https://groovy-lang.org/semantics.html#_dynamic_typing)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Duck Typing: Objekte werden zur Laufzeit strukturell geprüft
function usePoint(p) {
    // Prüft zur Laufzeit, ob p die erforderlichen Properties hat
    console.log(`Point: ${p.x}, ${p.y}`);
}

const p1 = { x: 1, y: 2 };
const p2 = { x: 1, y: 2 };

// Beide funktionieren, wenn sie die erforderliche Struktur haben
usePoint(p1); // Funktioniert
usePoint(p2); // Funktioniert auch
```

**Besonderheiten:**
- Objekte werden zur Laufzeit strukturell geprüft
- Ein Objekt ist kompatibel, wenn es die erforderlichen Properties hat, unabhängig vom Typnamen

**Weiterführende Links:**
- [MDN Web Docs - Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Duck Typing: Tables werden zur Laufzeit strukturell geprüft
function use_point(p)
    -- Prüft zur Laufzeit, ob p die erforderlichen Felder hat
    print("Point: " .. p.x .. ", " .. p.y)
end

local p1 = {x = 1, y = 2}
local p2 = {x = 1, y = 2}

-- Beide funktionieren, wenn sie die erforderliche Struktur haben
use_point(p1) -- Funktioniert
use_point(p2) -- Funktioniert auch
```

**Besonderheiten:**
- Tables werden zur Laufzeit strukturell geprüft
- Ein Table ist kompatibel, wenn er die erforderlichen Keys hat, unabhängig vom Typnamen

**Weiterführende Links:**
- [Lua Documentation - Tables](https://www.lua.org/manual/5.4/manual.html#2.1)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% Duck Typing: Structures werden zur Laufzeit strukturell geprüft
function use_point(p)
    % Prüft zur Laufzeit, ob p die erforderlichen Felder hat
    fprintf('Point: %d, %d\n', p.x, p.y);
end

p1 = struct('x', 1, 'y', 2);
p2 = struct('x', 1, 'y', 2);

% Beide funktionieren, wenn sie die erforderliche Struktur haben
use_point(p1) % Funktioniert
use_point(p2) % Funktioniert auch
```

**Besonderheiten:**
- Structures werden zur Laufzeit strukturell geprüft
- Eine Structure ist kompatibel, wenn sie die erforderlichen Felder hat, unabhängig vom Typnamen

**Weiterführende Links:**
- [MATLAB Documentation - Structures](https://www.mathworks.com/help/matlab/structures.html)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
% Duck Typing: Structures werden zur Laufzeit strukturell geprüft
function use_point(p)
    % Prüft zur Laufzeit, ob p die erforderlichen Felder hat
    printf('Point: %d, %d\n', p.x, p.y);
end

p1 = struct('x', 1, 'y', 2);
p2 = struct('x', 1, 'y', 2);

% Beide funktionieren, wenn sie die erforderliche Struktur haben
use_point(p1) % Funktioniert
use_point(p2) % Funktioniert auch
```

**Besonderheiten:**
- Structures werden zur Laufzeit strukturell geprüft
- Eine Structure ist kompatibel, wenn sie die erforderlichen Felder hat, unabhängig vom Typnamen

**Weiterführende Links:**
- [GNU Octave Documentation - Structures](https://octave.org/doc/v8.1.0/Structures.html)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Duck Typing: Hashes werden zur Laufzeit strukturell geprüft
sub use_point {
    my ($p) = @_;
    # Prüft zur Laufzeit, ob $p die erforderlichen Keys hat
    print "Point: $p->{x}, $p->{y}\n";
}

my $p1 = { x => 1, y => 2 };
my $p2 = { x => 1, y => 2 };

# Beide funktionieren, wenn sie die erforderliche Struktur haben
use_point($p1); # Funktioniert
use_point($p2); # Funktioniert auch
```

**Besonderheiten:**
- Hashes werden zur Laufzeit strukturell geprüft
- Ein Hash ist kompatibel, wenn er die erforderlichen Keys hat, unabhängig vom Typnamen

**Weiterführende Links:**
- [Perl Documentation - Hashes](https://perldoc.perl.org/perldata#Hashes)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
// Duck Typing: Objects werden zur Laufzeit strukturell geprüft
function usePoint($p) {
    // Prüft zur Laufzeit, ob $p die erforderlichen Properties hat
    echo "Point: {$p->x}, {$p->y}\n";
}

$p1 = (object)['x' => 1, 'y' => 2];
$p2 = (object)['x' => 1, 'y' => 2];

// Beide funktionieren, wenn sie die erforderliche Struktur haben
usePoint($p1); // Funktioniert
usePoint($p2); // Funktioniert auch
?>
```

**Besonderheiten:**
- Objects werden zur Laufzeit strukturell geprüft
- Ein Object ist kompatibel, wenn es die erforderlichen Properties hat, unabhängig vom Typnamen

**Weiterführende Links:**
- [PHP Documentation - Objects](https://www.php.net/manual/en/language.types.object.php)

</TabItem>
<TabItem value="python" label="Python">

```python
# Duck Typing: Objekte werden zur Laufzeit strukturell geprüft
def use_point(p):
    # Prüft zur Laufzeit, ob p die erforderlichen Attribute hat
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

# Beide funktionieren, wenn sie die erforderliche Struktur haben
use_point(p1)  # Funktioniert
use_point(p2)  # Funktioniert auch
```

**Besonderheiten:**
- Objekte werden zur Laufzeit strukturell geprüft
- Ein Objekt ist kompatibel, wenn es die erforderlichen Attribute/Methoden hat, unabhängig vom Typnamen

**Weiterführende Links:**
- [Python Documentation - Classes](https://docs.python.org/3/tutorial/classes.html)

</TabItem>
<TabItem value="r" label="R">

```r
# Duck Typing: Lists werden zur Laufzeit strukturell geprüft
use_point <- function(p) {
    # Prüft zur Laufzeit, ob p die erforderlichen Komponenten hat
    cat("Point:", p$x, ",", p$y, "\n")
}

p1 <- list(x = 1, y = 2)
p2 <- list(x = 1, y = 2)

# Beide funktionieren, wenn sie die erforderliche Struktur haben
use_point(p1) # Funktioniert
use_point(p2) # Funktioniert auch
```

**Besonderheiten:**
- Lists werden zur Laufzeit strukturell geprüft
- Eine List ist kompatibel, wenn sie die erforderlichen Komponenten hat, unabhängig vom Typnamen

**Weiterführende Links:**
- [R Documentation - Lists](https://cran.r-project.org/doc/manuals/r-release/R-intro.html#Lists)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
; Duck Typing: Hashes werden zur Laufzeit strukturell geprüft
(define (use-point p)
  ; Prüft zur Laufzeit, ob p die erforderlichen Felder hat
  (printf "Point: ~a, ~a\n" (hash-ref p 'x) (hash-ref p 'y)))

(define p1 (hash 'x 1 'y 2))
(define p2 (hash 'x 1 'y 2))

; Beide funktionieren, wenn sie die erforderliche Struktur haben
(use-point p1) ; Funktioniert
(use-point p2) ; Funktioniert auch
```

**Besonderheiten:**
- Hashes werden zur Laufzeit strukturell geprüft
- Ein Hash ist kompatibel, wenn er die erforderlichen Keys hat, unabhängig vom Typnamen

**Weiterführende Links:**
- [Racket Documentation - Hashes](https://docs.racket-lang.org/reference/hashtables.html)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Duck Typing: Objekte werden zur Laufzeit strukturell geprüft
def use_point(p)
  # Prüft zur Laufzeit, ob p die erforderlichen Methoden hat
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

# Beide funktionieren, wenn sie die erforderliche Struktur haben
use_point(p1) # Funktioniert
use_point(p2) # Funktioniert auch
```

**Besonderheiten:**
- Objekte werden zur Laufzeit strukturell geprüft
- Ein Objekt ist kompatibel, wenn es die erforderlichen Methoden hat, unabhängig vom Typnamen

**Weiterführende Links:**
- [Ruby Documentation - Classes](https://ruby-doc.org/core-3.1.0/Class.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; Duck Typing: Association lists werden zur Laufzeit strukturell geprüft
(define (use-point p)
  ;; Prüft zur Laufzeit, ob p die erforderlichen Keys hat
  (display (string-append "Point: "
                          (number->string (cdr (assoc 'x p)))
                          ", "
                          (number->string (cdr (assoc 'y p)))
                          "\n")))

(define p1 '((x . 1) (y . 2)))
(define p2 '((x . 1) (y . 2)))

;; Beide funktionieren, wenn sie die erforderliche Struktur haben
(use-point p1) ; Funktioniert
(use-point p2) ; Funktioniert auch
```

**Besonderheiten:**
- Association lists werden zur Laufzeit strukturell geprüft
- Eine Association list ist kompatibel, wenn sie die erforderlichen Keys hat, unabhängig vom Typnamen

**Weiterführende Links:**
- [Scheme Documentation - Association Lists](https://www.scheme.com/tspl4/objects.html)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Duck Typing: Structural Typing ermöglicht Duck Typing zur Compile-Zeit
interface PointLike {
    x: number;
    y: number;
}

function usePoint(p: PointLike) {
    console.log(`Point: ${p.x}, ${p.y}`);
}

const p1 = { x: 1, y: 2 };
const p2 = { x: 1, y: 2 };

// Beide funktionieren, wenn sie die erforderliche Struktur haben
usePoint(p1); // Funktioniert
usePoint(p2); // Funktioniert auch
```

**Besonderheiten:**
- Structural Typing ermöglicht Duck Typing zur Compile-Zeit
- Ein Objekt ist kompatibel, wenn es die erforderlichen Properties hat, unabhängig vom Typnamen

**Weiterführende Links:**
- [TypeScript Handbook - Structural Typing](https://www.typescriptlang.org/docs/handbook/type-compatibility.html)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Duck Typing: Associations werden zur Laufzeit strukturell geprüft *)
usePoint[p_] := Print["Point: ", p["x"], ", ", p["y"]]

p1 = <|"x" -> 1, "y" -> 2|>
p2 = <|"x" -> 1, "y" -> 2|>

(* Beide funktionieren, wenn sie die erforderliche Struktur haben *)
usePoint[p1] (* Funktioniert *)
usePoint[p2] (* Funktioniert auch *)
```

**Besonderheiten:**
- Associations werden zur Laufzeit strukturell geprüft
- Eine Association ist kompatibel, wenn sie die erforderlichen Keys hat, unabhängig vom Typnamen

**Weiterführende Links:**
- [Wolfram Language Documentation - Associations](https://reference.wolfram.com/language/guide/Associations.html)

</TabItem>
</Tabs>


## 3.5.2. Runtime Type Checking / Type Queries

Prüfung des Typs eines Wertes zur Laufzeit. Ermöglicht es, den Typ eines Objekts zur Laufzeit zu bestimmen und darauf basierend Entscheidungen zu treffen.

### Sprachen {#sprachen}

<Tabs availableTabs={['clojure', 'common-lisp', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'elixir', 'erlang', 'fortran', 'go', 'groovy', 'java', 'javascript', 'julia', 'kotlin', 'lua', 'matlab', 'objective-c', 'object-pascal', 'ocaml', 'octave', 'perl', 'php', 'prolog', 'python', 'r', 'racket', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'vbnet', 'wolfram-language']}>
<TabItem value="cpp" label="C++">

```cpp
// Runtime Type Checking: typeid und RTTI
#include <typeinfo>
#include <iostream>

int value = 42;

// Typ-Informationen mit typeid
const std::type_info& value_type = typeid(value);
std::cout << "Typ: " << value_type.name() << std::endl;

// Typ-Vergleich mit typeid
if (typeid(value) == typeid(int)) {
    std::cout << "Wert ist ein int" << std::endl;
}

// Typ-Prüfung mit dynamic_cast (für Polymorphismus)
class Base { public: virtual ~Base() {} };
class Derived : public Base {};

Base* ptr = new Derived();
if (dynamic_cast<Derived*>(ptr) != nullptr) {
    std::cout << "Pointer zeigt auf Derived" << std::endl;
}
```

**Besonderheiten:**
- `typeid` gibt Typ-Informationen zur Laufzeit (RTTI)
- `dynamic_cast` ermöglicht sichere Typ-Konvertierung zur Laufzeit
- RTTI muss aktiviert sein (Standard in den meisten Compilern)

**Weiterführende Links:**
- [cppreference.com - typeid](https://en.cppreference.com/w/cpp/language/typeid)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Runtime Type Checking: typeof und is Operator
object value = 42;

// Typ prüfen mit is
if (value is int) {
    Console.WriteLine("Wert ist ein int");
}

// Typ prüfen und casten mit is
if (value is int intValue) {
    Console.WriteLine($"Wert: {intValue}");
}

// typeof für Typ-Informationen
Type type = typeof(int);
Console.WriteLine($"Typ: {type.Name}");
```

**Besonderheiten:**
- `is` Operator prüft Typ zur Laufzeit
- `typeof` gibt Type-Informationen zur Compile-Zeit
- Pattern matching mit `is` ermöglicht Typ-Prüfung und Casting in einem Schritt

**Weiterführende Links:**
- [Microsoft C# Documentation - Type Testing](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/type-testing-and-cast)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Runtime Type Checking: type und instance?
(def value 42)

;; Typ prüfen mit instance?
(if (instance? Long value)
  (println "Wert ist ein Long"))

;; Typ abfragen mit type
(def value-type (type value))
(println (str "Typ: " value-type))

;; Prüfung mit class
(if (= (class value) Long)
  (println "Wert ist ein Long"))
```

**Besonderheiten:**
- `instance?` prüft, ob ein Wert eine Instanz einer Klasse ist
- `type` gibt den Typ eines Wertes zurück
- `class` gibt die Klasse eines Objekts zurück

**Weiterführende Links:**
- [Clojure Documentation - Reflection](https://clojure.org/reference/reflection)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Runtime Type Checking: typep und type-of
(defvar value 42)

;; Typ prüfen mit typep
(if (typep value 'integer)
    (format t "Wert ist ein integer~%"))

;; Typ abfragen mit type-of
(defvar value-type (type-of value))
(format t "Typ: ~a~%" value-type)

;; Prüfung mit typep für spezifische Typen
(if (typep value '(integer 0 100))
    (format t "Wert ist ein Integer zwischen 0 und 100~%"))
```

**Besonderheiten:**
- `typep` prüft, ob ein Wert zu einem Typ gehört
- `type-of` gibt den Typ eines Wertes zurück
- Unterstützt auch Typ-Prädikate für spezifische Typbereiche

**Weiterführende Links:**
- [Common Lisp HyperSpec - Type Predicates](http://www.lispworks.com/documentation/HyperSpec/Body/f_typep.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Runtime Type Checking: is_a? und typeof
value = 42

# Typ prüfen mit is_a?
if value.is_a?(Int32)
  puts "Wert ist ein Int32"
end

# Typ abfragen mit typeof
value_type = typeof(value)
puts "Typ: #{value_type}"

# Pattern matching mit case
case value
when Int32
  puts "Wert ist ein Int32"
when String
  puts "Wert ist ein String"
else
  puts "Unbekannter Typ"
end
```

**Besonderheiten:**
- `is_a?` prüft Typ zur Laufzeit
- `typeof` gibt Typ-Informationen zur Compile-Zeit
- Pattern matching mit `case` unterstützt Typ-Prüfung

**Weiterführende Links:**
- [Crystal Documentation - Type Reflection](https://crystal-lang.org/reference/1.11/syntax_and_semantics/type_reflection.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Runtime Type Checking: is und runtimeType
var value = 42;

// Typ prüfen mit is
if (value is int) {
  print("Wert ist ein int");
}

// Typ abfragen mit runtimeType
Type valueType = value.runtimeType;
print("Typ: $valueType");

// Pattern matching mit switch
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

**Besonderheiten:**
- `is` Operator prüft Typ zur Laufzeit
- `runtimeType` gibt den Laufzeit-Typ zurück
- Pattern matching mit `switch` (seit Dart 3.0) unterstützt Typ-Prüfung

**Weiterführende Links:**
- [Dart Documentation - Type System](https://dart.dev/language/type-system)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Runtime Type Checking: is_atom, is_integer, etc.
value = 42

# Typ prüfen mit Guard-Funktionen
if is_integer(value) do
  IO.puts("Wert ist ein Integer")
end

# Pattern matching mit case
case value do
  x when is_integer(x) -> IO.puts("Wert ist ein Integer")
  x when is_binary(x) -> IO.puts("Wert ist ein String")
  _ -> IO.puts("Unbekannter Typ")
end

# Typ-Informationen mit IEx
# i(value) gibt Typ-Informationen zurück
```

**Besonderheiten:**
- Guard-Funktionen (`is_integer`, `is_atom`, etc.) prüfen Typen zur Laufzeit
- Pattern matching mit Guards ermöglicht Typ-Prüfung
- IEx bietet `i/1` für Typ-Informationen

**Weiterführende Links:**
- [Elixir Documentation - Guards](https://elixir-lang.org/getting-started/pattern-matching.html#guards)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% Runtime Type Checking: is_integer, is_atom, etc.
Value = 42.

% Typ prüfen mit Guard-Funktionen
case Value of
    X when is_integer(X) -> io:format("Wert ist ein Integer~n");
    X when is_atom(X) -> io:format("Wert ist ein Atom~n");
    _ -> io:format("Unbekannter Typ~n")
end.

% Typ-Informationen mit erlang:is_integer/1
if is_integer(Value) ->
    io:format("Wert ist ein Integer~n");
   true ->
    io:format("Wert ist kein Integer~n")
end.
```

**Besonderheiten:**
- Guard-Funktionen (`is_integer`, `is_atom`, etc.) prüfen Typen zur Laufzeit
- Pattern matching mit Guards ermöglicht Typ-Prüfung
- `erlang:` Modul bietet viele Typ-Prüf-Funktionen

**Weiterführende Links:**
- [Erlang Documentation - Guards](https://www.erlang.org/doc/reference_manual/expressions.html#guards)

</TabItem>
<TabItem value="go" label="Go">

```go
// Runtime Type Checking: Type Assertions und Type Switches
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

// Typ-Informationen mit reflect
import "reflect"
valueType := reflect.TypeOf(value)
fmt.Printf("Typ: %s\n", valueType)
```

**Besonderheiten:**
- Type Assertions prüfen und casten Typen zur Laufzeit
- Type Switches ermöglichen Pattern Matching basierend auf Typen
- `reflect` Package bietet erweiterte Typ-Informationen

**Weiterführende Links:**
- [Go Language Specification - Type Assertions](https://go.dev/ref/spec#Type_assertions)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Runtime Type Checking: instanceof und getClass()
def value = 42

// Typ prüfen mit instanceof
if (value instanceof Integer) {
    println "Wert ist ein Integer"
}

// Typ abfragen mit getClass()
Class valueClass = value.getClass()
println "Typ: ${valueClass.name}"

// Pattern matching mit switch
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

**Besonderheiten:**
- `instanceof` prüft Typ zur Laufzeit
- `getClass()` gibt die Klasse eines Objekts zurück
- `switch` unterstützt Typ-Prüfung

**Weiterführende Links:**
- [Groovy Documentation - Operators](https://groovy-lang.org/operators.html#_instanceof_operator)

</TabItem>
<TabItem value="java" label="Java">

```java
// Runtime Type Checking: instanceof und getClass()
Object value = 42;

// Typ prüfen mit instanceof
if (value instanceof Integer) {
    System.out.println("Wert ist ein Integer");
}

// Typ abfragen mit getClass()
Class<?> valueClass = value.getClass();
System.out.println("Typ: " + valueClass.getName());

// Pattern matching mit instanceof (seit Java 16)
if (value instanceof Integer intValue) {
    System.out.println("Wert: " + intValue);
}
```

**Besonderheiten:**
- `instanceof` prüft Typ zur Laufzeit
- `getClass()` gibt die Klasse eines Objekts zurück
- Pattern matching mit `instanceof` (seit Java 16) ermöglicht Typ-Prüfung und Casting in einem Schritt

**Weiterführende Links:**
- [Oracle Java Documentation - instanceof Operator](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/op2.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Runtime Type Checking: typeof und instanceof
const value = 42;

// Typ prüfen mit typeof
if (typeof value === "number") {
    console.log("Wert ist ein number");
}

// Typ prüfen mit instanceof für Objekte
const obj = new Date();
if (obj instanceof Date) {
    console.log("Wert ist ein Date");
}

// Typ abfragen mit typeof
const valueType = typeof value;
console.log(`Typ: ${valueType}`);

// Object.prototype.toString für präzisere Typ-Prüfung
const preciseType = Object.prototype.toString.call(value);
console.log(`Präziser Typ: ${preciseType}`);
```

**Besonderheiten:**
- `typeof` gibt den primitiven Typ zurück
- `instanceof` prüft, ob ein Objekt eine Instanz einer Klasse ist
- `Object.prototype.toString.call()` gibt präzisere Typ-Informationen

**Weiterführende Links:**
- [MDN Web Docs - typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Runtime Type Checking: isa und typeof
value = 42

# Typ prüfen mit isa
if isa(value, Int)
    println("Wert ist ein Int")
end

# Typ abfragen mit typeof
value_type = typeof(value)
println("Typ: $value_type")

# Pattern matching mit if-elseif
if isa(value, Int)
    println("Wert ist ein Int")
elseif isa(value, String)
    println("Wert ist ein String")
else
    println("Unbekannter Typ")
end
```

**Besonderheiten:**
- `isa` prüft, ob ein Wert zu einem Typ gehört
- `typeof` gibt den Typ eines Wertes zurück
- Unterstützt auch Subtyp-Prüfung

**Weiterführende Links:**
- [Julia Documentation - Types](https://docs.julialang.org/en/v1/manual/types/)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Runtime Type Checking: is und ::class
val value: Any = 42

// Typ prüfen mit is
if (value is Int) {
    println("Wert ist ein Int")
}

// Typ abfragen mit ::class
val valueClass = value::class
println("Typ: ${valueClass.simpleName}")

// Smart Cast nach is-Prüfung
if (value is Int) {
    println("Wert: $value") // Automatisches Casting
}

// Pattern matching mit when
when (value) {
    is Int -> println("Wert ist ein Int")
    is String -> println("Wert ist ein String")
    else -> println("Unbekannter Typ")
}
```

**Besonderheiten:**
- `is` Operator prüft Typ zur Laufzeit
- `::class` gibt Typ-Informationen zurück
- Smart Casts ermöglichen automatisches Casting nach Typ-Prüfung

**Weiterführende Links:**
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

**Besonderheiten:**
- `type()` gibt den Typ eines Wertes zurück
- Unterstützt die Typen: nil, boolean, number, string, function, userdata, thread, table

**Weiterführende Links:**
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

**Besonderheiten:**
- `isa` prüft, ob ein Wert zu einem Typ gehört
- `class` gibt den Typ eines Wertes zurück
- Spezielle Prüf-Funktionen wie `isnumeric`, `ischar`, etc.

**Weiterführende Links:**
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

**Besonderheiten:**
- Pattern Matching ermöglicht Typ-Prüfung zur Laufzeit
- `Obj` Modul bietet Low-Level Typ-Informationen
- Typen werden hauptsächlich zur Compile-Zeit geprüft

**Weiterführende Links:**
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

**Besonderheiten:**
- `isa` prüft, ob ein Wert zu einem Typ gehört
- `class` gibt den Typ eines Wertes zurück
- Spezielle Prüf-Funktionen wie `isnumeric`, `ischar`, etc.

**Weiterführende Links:**
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

**Besonderheiten:**
- `ref` gibt den Typ einer Referenz zurück
- `Scalar::Util::blessed` prüft, ob ein Wert ein geblessetes Objekt ist
- `Scalar::Util::reftype` gibt den Referenz-Typ zurück

**Weiterführende Links:**
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

**Besonderheiten:**
- `is_*` Funktionen prüfen spezifische Typen
- `gettype` gibt den Typ eines Wertes zurück
- `instanceof` prüft, ob ein Objekt eine Instanz einer Klasse ist
- `get_debug_type` (seit PHP 8.0) gibt präzisere Typ-Informationen

**Weiterführende Links:**
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

**Besonderheiten:**
- Umfangreiche Typ-Prüfprädikate: `integer/1`, `float/1`, `number/1`, `atom/1`, `compound/1`, `is_list/1`, `string/1`, `callable/1`
- `var/1` und `nonvar/1` prüfen den Bindungsstatus von Variablen
- `ground/1` prüft, ob ein Term keine ungebundenen Variablen enthält
- `functor/3` und `=../2` (Univ) ermöglichen strukturelle Inspektion von Termen

**Weiterführende Links:**
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

**Besonderheiten:**
- `isinstance` prüft, ob ein Wert zu einem Typ gehört (unterstützt auch Vererbung)
- `type` gibt den exakten Typ eines Wertes zurück
- `__class__` gibt die Klasse eines Objekts zurück

**Weiterführende Links:**
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

**Besonderheiten:**
- `is.*` Funktionen prüfen spezifische Typen
- `class` gibt die Klasse eines Objekts zurück
- `typeof` gibt den internen Typ zurück

**Weiterführende Links:**
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

**Besonderheiten:**
- Typ-Prädikate (`number?`, `string?`, etc.) prüfen Typen zur Laufzeit
- Viele spezifische Prädikate für verschiedene Typen
- `cond` ermöglicht bedingte Verzweigung basierend auf Typ-Prüfungen

**Weiterführende Links:**
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

**Besonderheiten:**
- `is_a?` und `kind_of?` prüfen, ob ein Wert zu einer Klasse gehört
- `class` gibt die Klasse eines Objekts zurück
- `case` unterstützt Typ-Prüfung

**Weiterführende Links:**
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

**Besonderheiten:**
- `TypeId` ermöglicht Typ-Vergleich zur Laufzeit
- `Any` Trait ermöglicht Typ-Prüfung und Downcasting
- Typ-Prüfung ist hauptsächlich zur Compile-Zeit

**Weiterführende Links:**
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

**Besonderheiten:**
- `isInstanceOf` prüft Typ zur Laufzeit
- `getClass` gibt die Klasse eines Objekts zurück
- Pattern matching mit `match` unterstützt Typ-Prüfung

**Weiterführende Links:**
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

**Besonderheiten:**
- Typ-Prädikate (`number?`, `string?`, etc.) prüfen Typen zur Laufzeit
- Viele spezifische Prädikate für verschiedene Typen
- `cond` ermöglicht Pattern Matching basierend auf Typen

**Weiterführende Links:**
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

**Besonderheiten:**
- `is` Operator prüft Typ zur Laufzeit
- `type(of:)` gibt Typ-Informationen zurück
- `as?` ermöglicht sicheres Type Casting

**Weiterführende Links:**
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

**Besonderheiten:**
- `typeof` prüft primitiven Typ zur Laufzeit
- Type Guards ermöglichen Typ-Narrowing zur Compile-Zeit
- `instanceof` prüft, ob ein Objekt eine Instanz einer Klasse ist

**Weiterführende Links:**
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

**Besonderheiten:**
- `TypeOf ... Is` prüft Typ zur Laufzeit
- `GetType()` gibt Typ-Informationen zurück
- `Is` Operator ermöglicht Typ-Vergleich

**Weiterführende Links:**
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

**Besonderheiten:**
- `typeid` liefert TypeInfo zur Laufzeit
- `cast` gibt `null` zurück bei fehlgeschlagener Referenz-Konvertierung
- `is`/`!is` für Referenzvergleich mit `null`
- Compile-time Type Queries via `is()`-Expressions und `std.traits`

**Weiterführende Links:**
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

**Besonderheiten:**
- `SELECT TYPE` für Runtime-Type-Checking auf polymorphen Objekten (seit Fortran 2003)
- `TYPE IS` prüft auf exakten Typ
- `CLASS IS` prüft auf Typ oder abgeleiteten Typ
- `CLASS DEFAULT` als Fallback

**Weiterführende Links:**
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

**Besonderheiten:**
- `is` prüft den Laufzeittyp eines Objekts
- `as` führt einen sicheren Typecast durch (wirft `EInvalidCast` bei Fehler)
- Funktioniert nur mit Klassen-Typen (Reference Types)

**Weiterführende Links:**
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

**Besonderheiten:**
- `isKindOfClass:` prüft auf Typ und Subtypen
- `isMemberOfClass:` prüft auf exakten Typ (keine Subtypen)
- `respondsToSelector:` prüft ob ein Objekt eine Methode unterstützt
- `conformsToProtocol:` prüft ob ein Protokoll implementiert wird
- Alle Prüfungen erfolgen zur Laufzeit über die Objective-C Runtime

**Weiterführende Links:**
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

**Besonderheiten:**
- `Head[]` gibt den Typ (Head) eines Ausdrucks zurück
- Umfangreiche Typ-Prädikate: `IntegerQ`, `StringQ`, `NumberQ`, `ListQ`, `AssociationQ`, etc.
- `MatchQ[expr, pattern]` für Pattern-basierte Typ-Prüfung

**Weiterführende Links:**
- [Wolfram Language Documentation - Testing Expressions](https://reference.wolfram.com/language/guide/TestingExpressions.html)

</TabItem>
</Tabs>


## 3.5.3. Type Coercion

Automatische Konvertierung von Werten zwischen verschiedenen Typen zur Laufzeit. Ermöglicht es, Werte eines Typs in einem Kontext zu verwenden, der einen anderen Typ erwartet.

### Sprachen {#sprachen}

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

**Besonderheiten:**
- Implizite Konvertierungen zwischen numerischen Typen
- Char wird automatisch zu Int konvertiert
- Float zu Int Konvertierung schneidet Dezimalstellen ab

**Weiterführende Links:**
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

**Besonderheiten:**
- Implizite Konvertierungen zwischen numerischen Typen
- Bool wird zu Int konvertiert (true=1, false=0)
- Explizite Konvertierungen mit `static_cast`, `dynamic_cast`, etc.

**Weiterführende Links:**
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

**Besonderheiten:**
- Implizite Konvertierungen zwischen kompatiblen numerischen Typen
- Boxing/Unboxing für Value Types
- Explizite Konvertierungen mit Cast-Operatoren oder Parse-Methoden

**Weiterführende Links:**
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

;; Coercion in arithmetischen Operationen
(def result (+ int-val 3.14)) ; Int wird zu Double
```

**Besonderheiten:**
- Explizite Konvertierungen mit Funktionen wie `Integer/parseInt`, `str`, `double`
- Arithmetische Operationen konvertieren automatisch zu gemeinsamen Typ

**Weiterführende Links:**
- [Clojure Documentation - Numbers](https://clojure.org/reference/reader#_literals)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Type Coercion: Explizite Konvertierungen
(defvar int-val 42)
(defvar str-val "123")

;; String zu Int
(defvar int-from-str (parse-integer str-val))

;; Int zu String
(defvar str-from-int (write-to-string int-val))

;; Int zu Float
(defvar float-from-int (float int-val))

;; Coercion in arithmetischen Operationen
(defvar result (+ int-val 3.14)) ; Int wird zu Float
```

**Besonderheiten:**
- Explizite Konvertierungen mit Funktionen wie `parse-integer`, `write-to-string`, `float`
- Arithmetische Operationen konvertieren automatisch zu gemeinsamen Typ

**Weiterführende Links:**
- [Common Lisp HyperSpec - Numbers](http://www.lispworks.com/documentation/HyperSpec/Body/c_number.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Type Coercion: Explizite Konvertierungen
int_val = 42
str_val = "123"

# String zu Int
int_from_str = str_val.to_i

# Int zu String
str_from_int = int_val.to_s

# Int zu Float
float_from_int = int_val.to_f

# Coercion in arithmetischen Operationen
result = int_val + 3.14 # Int wird zu Float
```

**Besonderheiten:**
- Explizite Konvertierungen mit Methoden wie `to_i`, `to_s`, `to_f`
- Arithmetische Operationen konvertieren automatisch zu gemeinsamen Typ

**Weiterführende Links:**
- [Crystal Documentation - Numbers](https://crystal-lang.org/reference/1.11/syntax_and_semantics/literals/numbers.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Type Coercion: Explizite Konvertierungen
int int_val = 42;
String str_val = "123";

// String zu Int
int int_from_str = int.parse(str_val);

// Int zu String
String str_from_int = int_val.toString();

// Int zu Double
double double_from_int = int_val.toDouble();

// Coercion in arithmetischen Operationen
double result = int_val + 3.14; // Int wird zu Double
```

**Besonderheiten:**
- Explizite Konvertierungen mit Methoden wie `parse`, `toString`, `toDouble`
- Arithmetische Operationen konvertieren automatisch zu gemeinsamen Typ

**Weiterführende Links:**
- [Dart Documentation - Numbers](https://dart.dev/language/numbers)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Type Coercion: Explizite Konvertierungen
int_val = 42
str_val = "123"

# String zu Int
int_from_str = String.to_integer(str_val)

# Int zu String
str_from_int = Integer.to_string(int_val)

# Int zu Float
float_from_int = int_val / 1.0

# Coercion in arithmetischen Operationen
result = int_val + 3.14 # Int wird zu Float
```

**Besonderheiten:**
- Explizite Konvertierungen mit Funktionen wie `String.to_integer`, `Integer.to_string`
- Arithmetische Operationen konvertieren automatisch zu gemeinsamen Typ

**Weiterführende Links:**
- [Elixir Documentation - Numbers](https://elixir-lang.org/getting-started/basic-types.html#numbers)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% Type Coercion: Explizite Konvertierungen
IntVal = 42,
StrVal = "123".

% String zu Int
IntFromStr = list_to_integer(StrVal).

% Int zu String
StrFromInt = integer_to_list(IntVal).

% Int zu Float
FloatFromInt = float(IntVal).

% Coercion in arithmetischen Operationen
Result = IntVal + 3.14. % Int wird zu Float
```

**Besonderheiten:**
- Explizite Konvertierungen mit Funktionen wie `list_to_integer`, `integer_to_list`, `float`
- Arithmetische Operationen konvertieren automatisch zu gemeinsamen Typ

**Weiterführende Links:**
- [Erlang Documentation - Numbers](https://www.erlang.org/doc/reference_manual/data_types.html#number)

</TabItem>
<TabItem value="go" label="Go">

```go
// Type Coercion: Explizite Konvertierungen
int_val := 42
str_val := "123"

// String zu Int
int_from_str, _ := strconv.Atoi(str_val)

// Int zu String
str_from_int := strconv.Itoa(int_val)

// Int zu Float64
float_from_int := float64(int_val)

// Coercion in arithmetischen Operationen
result := float64(int_val) + 3.14 // Explizit erforderlich
```

**Besonderheiten:**
- Explizite Konvertierungen mit `strconv` Package
- Keine impliziten Konvertierungen - alle Konvertierungen müssen explizit sein
- Arithmetische Operationen erfordern explizite Typ-Konvertierung

**Weiterführende Links:**
- [Go Language Specification - Conversions](https://go.dev/ref/spec#Conversions)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Type Coercion: Implizite und explizite Konvertierungen
int int_val = 42
String str_val = "123"

// String zu Int (implizit möglich)
int int_from_str = str_val as Integer

// Int zu String (implizit)
String str_from_int = int_val.toString()

// Int zu Double (implizit)
double double_from_int = int_val

// Coercion in arithmetischen Operationen
def result = int_val + 3.14 // Int wird zu Double
```

**Besonderheiten:**
- Implizite Konvertierungen zwischen kompatiblen Typen
- `as` Operator ermöglicht explizite Konvertierungen
- Arithmetische Operationen konvertieren automatisch zu gemeinsamen Typ

**Weiterführende Links:**
- [Groovy Documentation - Type Coercion](https://groovy-lang.org/semantics.html#_coercion)

</TabItem>
<TabItem value="java" label="Java">

```java
// Type Coercion: Implizite und explizite Konvertierungen
int int_val = 42;
double double_val = 3.14;

// Integer zu Double (implizit)
double result1 = int_val + double_val; // 42 wird zu 42.0

// String zu Int (explizit)
String str = "123";
int int_from_str = Integer.parseInt(str);

// Int zu String (explizit)
String str_from_int = String.valueOf(int_val);

// Boxing (Primitive zu Object)
Integer boxed = int_val; // Autoboxing

// Unboxing (Object zu Primitive)
int unboxed = boxed; // Auto-unboxing
```

**Besonderheiten:**
- Implizite Konvertierungen zwischen kompatiblen numerischen Typen
- Autoboxing/Unboxing für Primitive Types
- Explizite Konvertierungen mit Parse-Methoden

**Weiterführende Links:**
- [Oracle Java Documentation - Type Conversions](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Type Coercion: Implizite Konvertierungen
const int_val = 42;
const str_val = "123";

// String zu Int (implizit)
const int_from_str = +str_val; // oder Number(str_val)

// Int zu String (implizit)
const str_from_int = int_val + ""; // oder String(int_val)

// Coercion in arithmetischen Operationen
const result = int_val + 3.14; // Int wird zu Number

// Vergleich mit Coercion
if (int_val == "42") { // true (== mit Coercion)
    console.log("Gleich mit Coercion");
}

if (int_val === "42") { // false (=== ohne Coercion)
    console.log("Gleich ohne Coercion");
}
```

**Besonderheiten:**
- Umfangreiche implizite Konvertierungen
- `==` führt Type Coercion durch, `===` nicht
- `+` Operator kann Addition oder String-Konkatenation sein

**Weiterführende Links:**
- [MDN Web Docs - Type Coercion](https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Type Coercion: Explizite Konvertierungen
int_val = 42
str_val = "123"

# String zu Int
int_from_str = parse(Int, str_val)

# Int zu String
str_from_int = string(int_val)

# Int zu Float
float_from_int = Float64(int_val)

# Coercion in arithmetischen Operationen
result = int_val + 3.14 # Int wird zu Float64
```

**Besonderheiten:**
- Explizite Konvertierungen mit `parse`, `string`, Typ-Konstruktoren
- Arithmetische Operationen konvertieren automatisch zu gemeinsamen Typ

**Weiterführende Links:**
- [Julia Documentation - Type Conversions](https://docs.julialang.org/en/v1/manual/conversion-and-promotion/)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Type Coercion: Explizite Konvertierungen
val int_val = 42
val str_val = "123"

// String zu Int
val int_from_str = str_val.toInt()

// Int zu String
val str_from_int = int_val.toString()

// Int zu Double
val double_from_int = int_val.toDouble()

// Coercion in arithmetischen Operationen
val result = int_val + 3.14 // Int wird zu Double
```

**Besonderheiten:**
- Explizite Konvertierungen mit Methoden wie `toInt()`, `toString()`, `toDouble()`
- Arithmetische Operationen konvertieren automatisch zu gemeinsamen Typ
- Keine impliziten Konvertierungen zwischen numerischen Typen

**Weiterführende Links:**
- [Kotlin Documentation - Type Checks and Casts](https://kotlinlang.org/docs/typecasts.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Type Coercion: Coe Type Class für implizite Konvertierungen
-- Eingebaute Coercion: Nat → Int
def natVal : Nat := 42
def intVal : Int := natVal  -- Nat wird implizit zu Int konvertiert

-- Eigene Coercion definieren
structure Meters where
  value : Float

instance : Coe Meters Float where
  coe m := m.value

def distance : Meters := { value := 3.14 }
def raw : Float := distance  -- Meters wird implizit zu Float konvertiert

-- Explizite Konvertierungen
def strFromNat : String := toString 42
def natFromStr : Option Nat := "123".toNat?
```

**Besonderheiten:**
- `Coe` Type Class ermöglicht implizite Konvertierungen zwischen Typen
- Eingebaute Coercions z.B. `Nat → Int`, `Char → String`
- Eigene Coercions über `instance : Coe A B` definierbar
- Explizite Konvertierungen mit `toString`, `toNat?`, etc.

**Weiterführende Links:**
- [Lean 4 Documentation - Type Coercions](https://lean-lang.org/theorem_proving_in_lean4/type_classes.html#coercions)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Type Coercion: Implizite Konvertierungen
local int_val = 42
local str_val = "123"

-- String zu Int (implizit)
local int_from_str = tonumber(str_val)

-- Int zu String (implizit)
local str_from_int = tostring(int_val)

-- Coercion in arithmetischen Operationen
local result = int_val + 3.14 -- Int wird zu Number

-- String-Konkatenation konvertiert automatisch
local str_result = "Wert: " .. int_val -- Int wird zu String
```

**Besonderheiten:**
- `tonumber` und `tostring` für explizite Konvertierungen
- Arithmetische Operationen konvertieren automatisch
- String-Konkatenation mit `..` konvertiert automatisch zu String

**Weiterführende Links:**
- [Lua Documentation - Coercion](https://www.lua.org/manual/5.4/manual.html#3.4.3)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% Type Coercion: Implizite Konvertierungen
int_val = 42;
str_val = "123";

% String zu Int
int_from_str = str2double(str_val);

% Int zu String
str_from_int = num2str(int_val);

% Int zu Double (implizit)
double_from_int = double(int_val);

% Coercion in arithmetischen Operationen
result = int_val + 3.14; % Int wird zu Double
```

**Besonderheiten:**
- Explizite Konvertierungen mit `str2double`, `num2str`, `double`
- Arithmetische Operationen konvertieren automatisch zu gemeinsamen Typ

**Weiterführende Links:**
- [MATLAB Documentation - Type Conversion](https://www.mathworks.com/help/matlab/data-type-conversion.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Type Coercion: Explizite Konvertierungen *)
let int_val = 42
let str_val = "123"

(* String zu Int *)
let int_from_str = int_of_string str_val

(* Int zu String *)
let str_from_int = string_of_int int_val

(* Int zu Float *)
let float_from_int = float_of_int int_val

(* Coercion in arithmetischen Operationen *)
let result = float_of_int int_val +. 3.14 (* Explizit erforderlich *)
```

**Besonderheiten:**
- Explizite Konvertierungen mit Funktionen wie `int_of_string`, `string_of_int`, `float_of_int`
- Arithmetische Operationen erfordern explizite Typ-Konvertierung (z.B. `+.` für Float)

**Weiterführende Links:**
- [OCaml Documentation - Numbers](https://ocaml.org/manual/coreexamples.html#s:coreexamples)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
% Type Coercion: Implizite Konvertierungen
int_val = 42;
str_val = "123";

% String zu Int
int_from_str = str2num(str_val);

% Int zu String
str_from_int = num2str(int_val);

% Int zu Double (implizit)
double_from_int = double(int_val);

% Coercion in arithmetischen Operationen
result = int_val + 3.14; % Int wird zu Double
```

**Besonderheiten:**
- Explizite Konvertierungen mit `str2num`, `num2str`, `double`
- Arithmetische Operationen konvertieren automatisch zu gemeinsamen Typ

**Weiterführende Links:**
- [GNU Octave Documentation - Type Conversion](https://octave.org/doc/v8.1.0/Type-Conversion.html)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Type Coercion: Implizite Konvertierungen
my $int_val = 42;
my $str_val = "123";

# String zu Int (implizit)
my $int_from_str = $str_val + 0; # oder int($str_val)

# Int zu String (implizit)
my $str_from_int = $int_val . ""; # oder "$int_val"

# Coercion in arithmetischen Operationen
my $result = $int_val + 3.14; # Int wird zu Number

# Kontext-abhängige Coercion
my $num_context = $str_val + 0; # String wird zu Number
my $str_context = $int_val . ""; # Number wird zu String
```

**Besonderheiten:**
- Umfangreiche implizite Konvertierungen basierend auf Kontext
- Arithmetische Operationen konvertieren automatisch
- String-Operationen konvertieren automatisch zu String

**Weiterführende Links:**
- [Perl Documentation - Type Coercion](https://perldoc.perl.org/perldata#Scalar-values)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
// Type Coercion: Implizite Konvertierungen
$int_val = 42;
$str_val = "123";

// String zu Int (implizit)
$int_from_str = (int)$str_val; // oder intval($str_val)

// Int zu String (implizit)
$str_from_int = (string)$int_val; // oder strval($int_val)

// Coercion in arithmetischen Operationen
$result = $int_val + 3.14; // Int wird zu Float

// Vergleich mit Coercion
if ($int_val == "42") { // true (== mit Coercion)
    echo "Gleich mit Coercion\n";
}

if ($int_val === "42") { // false (=== ohne Coercion)
    echo "Gleich ohne Coercion\n";
}
?>
```

**Besonderheiten:**
- Umfangreiche implizite Konvertierungen
- `==` führt Type Coercion durch, `===` nicht
- Explizite Casts mit `(int)`, `(string)`, etc.

**Weiterführende Links:**
- [PHP Documentation - Type Juggling](https://www.php.net/manual/en/language.types.type-juggling.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Type Coercion: Implizite Konversion in Arithmetik
X is 2 + 3.0,     % X = 5.0 (Integer wird zu Float)
Y is 2 * 3.14,    % Y = 6.28 (Integer wird zu Float)
Z is truncate(3.7), % Z = 3 (Float zu Integer, explizit)

% Keine implizite Coercion zwischen Atomen und Zahlen
% atom_number/2 für explizite Konversion
atom_number('42', N),  % N = 42
atom_string(hello, S), % S = "hello"
number_codes(42, Codes) % Codes = [52, 50]
```

**Besonderheiten:**
- Implizite Coercion nur bei Arithmetik: Integer wird bei gemischten Operationen zu Float
- Keine automatische Konversion zwischen Atomen, Strings und Zahlen
- Explizite Konversionsprädikate: `atom_number/2`, `atom_string/2`, `number_codes/2`, `term_to_atom/2`

**Weiterführende Links:**
- [SWI-Prolog Documentation - Arithmetic](https://www.swi-prolog.org/pldoc/man?section=arith)

</TabItem>
<TabItem value="python" label="Python">

```python
# Type Coercion: Explizite Konvertierungen
int_val = 42
str_val = "123"

# String zu Int
int_from_str = int(str_val)

# Int zu String
str_from_int = str(int_val)

# Int zu Float
float_from_int = float(int_val)

# Coercion in arithmetischen Operationen
result = int_val + 3.14  # Int wird zu Float

# Bool zu Int (implizit in arithmetischen Operationen)
bool_val = True
int_from_bool = int(bool_val)  # True wird zu 1, False zu 0
```

**Besonderheiten:**
- Explizite Konvertierungen mit Typ-Konstruktoren (`int()`, `str()`, `float()`)
- Arithmetische Operationen konvertieren automatisch zu gemeinsamen Typ
- Bool wird zu Int konvertiert (True=1, False=0)

**Weiterführende Links:**
- [Python Documentation - Type Conversions](https://docs.python.org/3/library/functions.html#int)

</TabItem>
<TabItem value="r" label="R">

```r
# Type Coercion: Explizite Konvertierungen
int_val <- 42L
str_val <- "123"

# String zu Int
int_from_str <- as.integer(str_val)

# Int zu String
str_from_int <- as.character(int_val)

# Int zu Double
double_from_int <- as.double(int_val)

# Coercion in arithmetischen Operationen
result <- int_val + 3.14 # Int wird zu Double

# Automatische Coercion in Vektoren
mixed_vec <- c(1, 2, "3") # Alle werden zu Character
```

**Besonderheiten:**
- Explizite Konvertierungen mit `as.*` Funktionen
- Arithmetische Operationen konvertieren automatisch zu gemeinsamen Typ
- Vektoren konvertieren automatisch zu gemeinsamen Typ

**Weiterführende Links:**
- [R Documentation - Type Coercion](https://cran.r-project.org/doc/manuals/r-release/R-intro.html#Objects)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
; Type Coercion: Explizite Konvertierungen
(define int-val 42)
(define str-val "123")

; String zu Int
(define int-from-str (string->number str-val))

; Int zu String
(define str-from-int (number->string int-val))

; Int zu Float
(define float-from-int (exact->inexact int-val))

; Coercion in arithmetischen Operationen
(define result (+ int-val 3.14)) ; Int wird zu Float
```

**Besonderheiten:**
- Explizite Konvertierungen mit Funktionen wie `string->number`, `number->string`, `exact->inexact`
- Arithmetische Operationen konvertieren automatisch zu gemeinsamen Typ

**Weiterführende Links:**
- [Racket Documentation - Numbers](https://docs.racket-lang.org/reference/numbers.html)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Type Coercion: Explizite Konvertierungen
int_val = 42
str_val = "123"

# String zu Int
int_from_str = str_val.to_i

# Int zu String
str_from_int = int_val.to_s

# Int zu Float
float_from_int = int_val.to_f

# Coercion in arithmetischen Operationen
result = int_val + 3.14 # Int wird zu Float

# Implizite Coercion in String-Interpolation
str_result = "Wert: #{int_val}" # Int wird zu String
```

**Besonderheiten:**
- Explizite Konvertierungen mit Methoden wie `to_i`, `to_s`, `to_f`
- Arithmetische Operationen konvertieren automatisch zu gemeinsamen Typ
- String-Interpolation konvertiert automatisch zu String

**Weiterführende Links:**
- [Ruby Documentation - Type Conversions](https://ruby-doc.org/core-3.1.0/Object.html#method-i-to_s)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Type Coercion: Explizite Konvertierungen
let int_val: i32 = 42;
let str_val = "123";

// String zu Int
let int_from_str: i32 = str_val.parse().unwrap();

// Int zu String
let str_from_int = int_val.to_string();

// Int zu Float
let float_from_int = int_val as f64;

// Coercion in arithmetischen Operationen
let result = int_val as f64 + 3.14; // Explizit erforderlich
```

**Besonderheiten:**
- Explizite Konvertierungen mit `as` Operator oder `parse()`
- Keine impliziten Konvertierungen - alle Konvertierungen müssen explizit sein
- Arithmetische Operationen erfordern explizite Typ-Konvertierung

**Weiterführende Links:**
- [The Rust Book - Type Conversions](https://doc.rust-lang.org/book/ch03-02-data-types.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Type Coercion: Explizite Konvertierungen
val int_val: Int = 42
val str_val: String = "123"

// String zu Int
val int_from_str: Int = str_val.toInt

// Int zu String
val str_from_int: String = int_val.toString

// Int zu Double
val double_from_int: Double = int_val.toDouble

// Coercion in arithmetischen Operationen
val result: Double = int_val + 3.14 // Int wird zu Double
```

**Besonderheiten:**
- Explizite Konvertierungen mit Methoden wie `toInt`, `toString`, `toDouble`
- Arithmetische Operationen konvertieren automatisch zu gemeinsamen Typ

**Weiterführende Links:**
- [Scala Documentation - Type Conversions](https://docs.scala-lang.org/tour/implicit-conversions.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; Type Coercion: Explizite Konvertierungen
(define int-val 42)
(define str-val "123")

;; String zu Int
(define int-from-str (string->number str-val))

;; Int zu String
(define str-from-int (number->string int-val))

;; Int zu Float
(define float-from-int (exact->inexact int-val))

;; Coercion in arithmetischen Operationen
(define result (+ int-val 3.14)) ; Int wird zu Float
```

**Besonderheiten:**
- Explizite Konvertierungen mit Funktionen wie `string->number`, `number->string`, `exact->inexact`
- Arithmetische Operationen konvertieren automatisch zu gemeinsamen Typ

**Weiterführende Links:**
- [Scheme Documentation - Numbers](https://www.scheme.com/tspl4/objects.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Type Coercion: Explizite Konvertierungen
let int_val: Int = 42
let str_val: String = "123"

// String zu Int
let int_from_str: Int? = Int(str_val)

// Int zu String
let str_from_int: String = String(int_val)

// Int zu Double
let double_from_int: Double = Double(int_val)

// Coercion in arithmetischen Operationen
let result: Double = Double(int_val) + 3.14 // Explizit erforderlich
```

**Besonderheiten:**
- Explizite Konvertierungen mit Typ-Konstruktoren (`Int()`, `String()`, `Double()`)
- Keine impliziten Konvertierungen - alle Konvertierungen müssen explizit sein
- Arithmetische Operationen erfordern explizite Typ-Konvertierung

**Weiterführende Links:**
- [Swift Documentation - Type Casting](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/typecasting/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Type Coercion: Explizite Konvertierungen (zur Laufzeit wie JavaScript)
const int_val: number = 42;
const str_val: string = "123";

// String zu Int
const int_from_str: number = +str_val; // oder Number(str_val)

// Int zu String
const str_from_int: string = int_val.toString(); // oder String(int_val)

// Coercion in arithmetischen Operationen
const result: number = int_val + 3.14; // Int wird zu Number

// Vergleich mit Coercion (zur Laufzeit)
if (int_val == "42") { // true (== mit Coercion)
    console.log("Gleich mit Coercion");
}

if (int_val === "42") { // false (=== ohne Coercion)
    console.log("Gleich ohne Coercion");
}
```

**Besonderheiten:**
- Zur Laufzeit wie JavaScript - umfangreiche implizite Konvertierungen
- `==` führt Type Coercion durch, `===` nicht
- TypeScript prüft Typen zur Compile-Zeit, aber Coercion passiert zur Laufzeit

**Weiterführende Links:**
- [TypeScript Handbook - Type Coercion](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Type Coercion: Implizite und explizite Konvertierungen
Dim int_val As Integer = 42
Dim str_val As String = "123"

' String zu Int (explizit)
Dim int_from_str As Integer = Integer.Parse(str_val)

' Int zu String (explizit)
Dim str_from_int As String = int_val.ToString()

' Integer zu Double (implizit)
Dim double_from_int As Double = int_val

' Coercion in arithmetischen Operationen
Dim result As Double = int_val + 3.14 ' Int wird zu Double
```

**Besonderheiten:**
- Implizite Konvertierungen zwischen kompatiblen numerischen Typen
- Explizite Konvertierungen mit `Parse` und `ToString`
- Arithmetische Operationen konvertieren automatisch zu gemeinsamen Typ

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Type Conversions](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/data-types/type-conversions)

</TabItem>
<TabItem value="d" label="D">

```d
// Type Coercion (implizite Konvertierung)
int i = 42;
double d = i;        // int → double (implizit)
long l = i;          // int → long (implizit)
float f = 3.14;      // double → float (implizit, mit möglichem Präzisionsverlust)

// Keine implizite Konvertierung bei Datenverlust
// int x = 3.14;     // Fehler: cannot implicitly convert double to int

// Explizite Konvertierung nötig
int x = cast(int) 3.14;  // 3 (abgeschnitten)
```

**Besonderheiten:**
- Implizite Erweiterungskonvertierung (z.B. `int` → `long`, `int` → `double`)
- Keine implizite Einengungskonvertierung (z.B. `double` → `int` erfordert `cast`)
- Arrays: implizite Konvertierung von `immutable(char)[]` (string) zu `const(char)[]`
- Strenger als C/C++ bei potenziell verlustbehafteten Konvertierungen

**Weiterführende Links:**
- [D Language Specification - Implicit Conversions](https://dlang.org/spec/type.html#implicit-conversions)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Type Coercion in gemischten Ausdrücken
integer :: i = 5
real :: r = 2.5
real :: result

result = i + r  ! INTEGER wird implizit zu REAL konvertiert
! result = 7.5
```

**Besonderheiten:**
- Implizite Konvertierung in gemischten arithmetischen Ausdrücken
- Konvertierungsreihenfolge: INTEGER → REAL → DOUBLE PRECISION → COMPLEX
- Der Typ mit höherer Genauigkeit wird beibehalten

**Weiterführende Links:**
- [Fortran Standard - Type Conversion](https://gcc.gnu.org/onlinedocs/gfortran/Type-conversion.html)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Implizite Konvertierung zwischen numerischen Typen
int intValue = 42;
double doubleValue = intValue;       // int → double (implizit)
float floatValue = doubleValue;      // double → float (implizit, Präzisionsverlust)

// Implizite Konvertierung bei Zuweisung
char charValue = 65;                 // int → char (implizit)
long longValue = intValue;           // int → long (implizit)
```

**Besonderheiten:**
- C-style implizite Typkonvertierungen zwischen numerischen Typen
- Automatische Promotion bei arithmetischen Operationen (int → double)
- Möglicher Datenverlust bei Narrowing-Konvertierungen (Compiler-Warnung)
- Keine implizite Konvertierung zwischen Objekttypen

**Weiterführende Links:**
- [Apple Documentation - C Language Types](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Implizite Konversion: Integer -> Real bei gemischter Arithmetik *)
result = 1 + 2.5    (* 3.5 - Integer wird zu Real konvertiert *)
result2 = 1/3       (* Bleibt als Rational: 1/3 *)
result3 = N[1/3]    (* Konvertiert zu Real: 0.333333 *)
```

**Besonderheiten:**
- Implizite Konversion zwischen Integer und Real bei Arithmetik
- Rationale Zahlen bleiben exakt, wenn nicht explizit konvertiert
- `N[]` für explizite numerische Konversion

**Weiterführende Links:**
- [Wolfram Language Documentation - Numerical Functions](https://reference.wolfram.com/language/guide/NumericalEvaluation.html)

</TabItem>
</Tabs>


## 3.5.4. Context (Scalar vs. List Context)

Der Kontext bestimmt, wie ein Ausdruck ausgewertet wird. In einem Skalar-Kontext gibt ein Array z.B. die Anzahl der Elemente zurück, in einem List-Kontext die Elemente selbst.

### Sprachen {#sprachen}

<Tabs availableTabs={['perl', 'r']} orangeTabs={['racket', 'scheme']}>
<TabItem value="perl" label="Perl">

```perl
# Context: Skalar vs. List Context
my @array = (1, 2, 3, 4, 5);

# Skalar Context: Gibt Anzahl der Elemente zurück
my $count = @array; # $count = 5

# List Context: Gibt die Elemente zurück
my @copy = @array; # @copy = (1, 2, 3, 4, 5)

# Skalar Context in Zuweisung
my $scalar = @array; # $scalar = 5

# List Context in Zuweisung
my ($first, $second) = @array; # $first = 1, $second = 2

# Skalar Context in Bedingung
if (@array) { # Wahr, wenn Array nicht leer (Anzahl > 0)
    print "Array hat Elemente\n";
}

# List Context in Funktion
my @result = map { $_ * 2 } @array; # List Context
my $result = map { $_ * 2 } @array; # Skalar Context: Gibt Anzahl zurück
```

**Besonderheiten:**
- Arrays verhalten sich unterschiedlich in Skalar- und List-Kontext
- In Skalar-Kontext gibt ein Array die Anzahl der Elemente zurück
- In List-Kontext gibt ein Array die Elemente zurück
- Der Kontext wird durch die Zuweisung oder den Verwendungszweck bestimmt

**Weiterführende Links:**
- [Perl Documentation - Context](https://perldoc.perl.org/perldata#Context)

</TabItem>
<TabItem value="r" label="R">

```r
# Context: Skalar vs. List Context (ähnlich wie Perl)
vec <- c(1, 2, 3, 4, 5)

# Skalar Context: Gibt Länge zurück
count <- length(vec) # count = 5

# List Context: Gibt die Elemente zurück
copy <- vec # copy = c(1, 2, 3, 4, 5)

# Skalar Context in Bedingung
if (length(vec) > 0) { # Explizite Länge-Prüfung
    cat("Vector hat Elemente\n")
}

# List Context in Funktion
result <- sapply(vec, function(x) x * 2) # List Context
count_result <- length(sapply(vec, function(x) x * 2)) # Skalar Context
```

**Besonderheiten:**
- Vektoren verhalten sich unterschiedlich je nach Verwendungszweck
- `length()` gibt die Länge zurück (Skalar-Kontext)
- Direkte Zuweisung gibt die Elemente zurück (List-Kontext)
- Explizite Funktionen für Kontext-Unterschiede

**Weiterführende Links:**
- [R Documentation - Vectors](https://cran.r-project.org/doc/manuals/r-release/R-intro.html#Vectors)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
; Kontextabhängiges Verhalten bei Listen
(define lst '(1 2 3 4 5))

; Skalar-ähnlich: Länge abfragen
(define count (length lst))  ; 5

; List-ähnlich: Elemente verwenden
(define copy lst)  ; '(1 2 3 4 5)

; Kontextabhängige Verwendung
(when (not (null? lst))
  (printf "List hat Elemente\n"))

; Transformation gibt Liste zurück
(define result (map (lambda (x) (* x 2)) lst))
```

**Besonderheiten:**
- Racket hat kein explizites Kontext-System wie Perl
- Listen verhalten sich konsistent unabhängig vom Kontext
- Explizite Funktionen wie `length` für skalare Werte, `map` für Listen

**Weiterführende Links:**
- [Racket Documentation - Lists](https://docs.racket-lang.org/reference/pairs.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; Context: Scheme hat kein Context-System wie Perl
;; Werte verhalten sich immer gleich, unabhängig vom Verwendungskontext
(define lst '(1 2 3 4 5))

;; Explizite Funktionen für unterschiedliche Operationen
(define count (length lst))                              ; Länge: 5
(define copy lst)                                         ; Referenz auf die Liste
(define result (map (lambda (x) (* x 2)) lst))           ; Neue Liste
```

**Besonderheiten:**
- Scheme hat kein Scalar/List-Context-Konzept wie Perl
- Werte verhalten sich unabhängig vom Kontext immer gleich
- Verschiedene Operationen werden durch explizite Funktionen unterschieden

**Weiterführende Links:**
- [Scheme Documentation - Lists](https://www.scheme.com/tspl4/objects.html)

</TabItem>
</Tabs>

