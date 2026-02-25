---
slug: /typsystem/generics-und-polymorphismus
title: 3.7. Generics und Polymorphismus
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import FilteredTabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 3.7. Generics und Polymorphismus

Generische Typen und polymorphe Konzepte.

## 3.7.1. Generics / Templates

Mechanismus zur Definition von Typen, Funktionen oder Klassen mit Typ-Parametern, die zur Compile-Zeit durch konkrete Typen ersetzt werden.

### Sprachen {#sprachen}

<FilteredTabs availableTabs={['ada', 'carbon', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'eiffel', 'elm', 'fsharp', 'gleam', 'go', 'groovy', 'haskell', 'haxe', 'idris', 'java', 'julia', 'koka', 'kotlin', 'lean4', 'mercury', 'nim', 'object-pascal', 'ocaml', 'odin', 'purescript', 'python', 'roc', 'rust', 'scala', 'swift', 'typescript', 'v', 'vbnet', 'zig']} yellowTabs={['objective-c']} orangeTabs={['c', 'clojure', 'common-lisp', 'elixir']}>
<TabItem value="ada" label="Ada">

```ada
-- Generics: Generic packages und procedures
generic
    type Item_Type is private;
package Generic_Box is
    type Box is record
        Value : Item_Type;
    end record;
    
    function Create(Value : Item_Type) return Box;
    function Get_Value(B : Box) return Item_Type;
end Generic_Box;

package Integer_Box is new Generic_Box(Integer);
package String_Box is new Generic_Box(String);
```

**Besonderheiten:**
- Generic packages und procedures werden mit `generic` deklariert
- Instanziierung mit `new` und konkreten Typen
- Generic parameters können Constraints haben

**Weiterführende Links:**
- [Ada Reference Manual - Generic Units](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-12.html)

</TabItem>
<TabItem value="c" label="C">

```c
// Templates: nicht direkt unterstützt (C++-Templates)
// Workaround: Makros oder void* mit Type Casting
#define BOX_TYPE(T) \
    typedef struct { \
        T value; \
    } Box_##T;

BOX_TYPE(int)
BOX_TYPE(double)

// Oder mit void*
typedef struct {
    void* value;
} Box;
```

**Besonderheiten:**
- C hat keine direkten Templates
- Makros können generische Typen simulieren
- void* mit Type Casting als Workaround

**Weiterführende Links:**
- [C Standard - Preprocessing](https://en.cppreference.com/w/c/preprocessor)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Generics: generic types
generic class Box(T:! type) {
    var value: T;
    
    fn new(value: T) -> Self {
        return {.value = value};
    }
    
    fn get_value(self: Self) -> T {
        return self.value;
    }
}

var int_box: Box(i32) = Box(i32).new(42);
var str_box: Box(String) = Box(String).new("Hallo");
```

**Besonderheiten:**
- Generic types mit `generic` und Type-Parametern
- Experimentelle Sprache, Syntax kann sich noch ändern
- Type-Parameter können Constraints haben

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Generics: generic classes, methods, interfaces
class Box<T> {
    private T value;
    
    public Box(T value) {
        this.value = value;
    }
    
    public T GetValue() {
        return value;
    }
}

var intBox = new Box<int>(42);
var stringBox = new Box<string>("Hallo");
```

**Besonderheiten:**
- Generics seit C# 2.0
- Unterstützt generic classes, methods, interfaces, delegates
- Type-Parameter können Constraints haben

**Weiterführende Links:**
- [Microsoft C# Documentation - Generics](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/types/generics)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Templates: template classes und functions
template<typename T>
class Box {
private:
    T value;
    
public:
    Box(T value) : value(value) {}
    
    T getValue() const {
        return value;
    }
};

Box<int> intBox(42);
Box<std::string> stringBox("Hallo");
```

**Besonderheiten:**
- Templates seit C++98
- Unterstützt template classes, functions, variables (seit C++14)
- Template specialization möglich
- Compile-time Polymorphismus

**Weiterführende Links:**
- [cppreference.com - Templates](https://en.cppreference.com/w/cpp/language/templates)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Generics: nicht direkt unterstützt (dynamische Typisierung)
;; Workaround: Funktionen mit Typ-Hints oder Protocols
(defprotocol Boxable
  (get-value [this]))

(defrecord Box [value]
  Boxable
  (get-value [this] (:value this)))

(def int-box (Box. 42))
(def string-box (Box. "Hallo"))
```

**Besonderheiten:**
- Clojure hat keine direkten Generics (dynamische Typisierung)
- Protocols können generische Interfaces definieren
- Typ-Hints für Performance-Optimierung

**Weiterführende Links:**
- [Clojure Documentation - Protocols](https://clojure.org/reference/protocols)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Generics: nicht direkt unterstützt (dynamische Typisierung)
;; Workaround: Generic Functions (CLOS)
(defgeneric get-value (box))

(defclass box ()
  ((value :initarg :value :accessor box-value)))

(defmethod get-value ((b box))
  (box-value b))

(defvar int-box (make-instance 'box :value 42))
(defvar string-box (make-instance 'box :value "Hallo"))
```

**Besonderheiten:**
- Common Lisp hat keine direkten Generics (dynamische Typisierung)
- Generic Functions (CLOS) für Polymorphismus
- Typen werden zur Laufzeit geprüft

**Weiterführende Links:**
- [Common Lisp HyperSpec - Generic Functions](http://www.lispworks.com/documentation/HyperSpec/Body/f_generi.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Generics: generic types
class Box(T)
  def initialize(@value : T)
  end
  
  def value : T
    @value
  end
end

int_box = Box(Int32).new(42)
string_box = Box(String).new("Hallo")
```

**Besonderheiten:**
- Generic types mit Type-Parametern in Klammern
- Type-Parameter können Constraints haben
- Compile-time Typ-Prüfung

**Weiterführende Links:**
- [Crystal Documentation - Generics](https://crystal-lang.org/reference/1.11/syntax_and_semantics/generics.html)

</TabItem>
<TabItem value="d" label="D">

```d
// Templates: template classes und functions
class Box(T) {
    private T value;
    
    this(T value) {
        this.value = value;
    }
    
    T getValue() {
        return value;
    }
}

auto intBox = new Box!int(42);
auto stringBox = new Box!string("Hallo");
```

**Besonderheiten:**
- Templates seit D1.0
- Template-Instanziierung mit `!` (z.B. `Box!int`)
- Unterstützt template classes, functions, structs

**Weiterführende Links:**
- [D Language Specification - Templates](https://dlang.org/spec/template.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Generics: generic classes und methods
class Box<T> {
  T value;
  
  Box(this.value);
  
  T getValue() {
    return value;
  }
}

var intBox = Box<int>(42);
var stringBox = Box<String>("Hallo");
```

**Besonderheiten:**
- Generics seit Dart 2.0
- Unterstützt generic classes, methods, functions
- Type-Parameter können Constraints haben

**Weiterführende Links:**
- [Dart Documentation - Generics](https://dart.dev/language/generics)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
-- Generics: generic classes
class BOX [G] feature
    value: G
    
    make (a_value: G)
    do
        value := a_value
    end
    
    get_value: G
    do
        Result := value
    end
end

-- Verwendung
int_box: BOX [INTEGER]
str_box: BOX [STRING]
```

**Besonderheiten:**
- Generic classes mit eckigen Klammern
- Type-Parameter können Constraints haben
- Compile-time Typ-Prüfung

**Weiterführende Links:**
- [Eiffel Documentation - Genericity](https://www.eiffel.org/doc/eiffel/Eiffel_Standard)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Generics: nicht direkt unterstützt (dynamische Typisierung)
# Workaround: Structs mit Typ-Informationen
defmodule Box do
  defstruct [:value]
  
  def new(value), do: %Box{value: value}
  
  def get_value(%Box{value: value}), do: value
end

int_box = Box.new(42)
string_box = Box.new("Hallo")
```

**Besonderheiten:**
- Elixir hat keine direkten Generics (dynamische Typisierung)
- Structs können generische Datenstrukturen simulieren
- Typen werden zur Laufzeit geprüft

**Weiterführende Links:**
- [Elixir Documentation - Structs](https://elixir-lang.org/getting-started/structs.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Generics: generic types und functions
type Box<'T> = {
    Value: 'T
}

let createBox value = { Value = value }
let getValue (box: Box<'T>) = box.Value

let intBox = createBox 42
let stringBox = createBox "Hallo"
```

**Besonderheiten:**
- Generics seit F# 1.0
- Type-Parameter mit `'T` (Tick-Notation)
- Unterstützt generic types, functions, modules

**Weiterführende Links:**
- [F# Documentation - Generics](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/generics/)

</TabItem>
<TabItem value="go" label="Go">

```go
// Generics: type parameters (seit Go 1.18)
type Box[T any] struct {
    value T
}

func NewBox[T any](value T) Box[T] {
    return Box[T]{value: value}
}

func (b Box[T]) GetValue() T {
    return b.value
}

intBox := NewBox(42)
stringBox := NewBox("Hallo")
```

**Besonderheiten:**
- Generics seit Go 1.18
- Type-Parameter mit Constraints (z.B. `any`, `comparable`)
- Unterstützt generic types, functions, methods

**Weiterführende Links:**
- [Go Language Specification - Type Parameters](https://go.dev/ref/spec#Type_parameters)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Generics: generic classes (Java-kompatibel)
class Box<T> {
    T value

    Box(T value) {
        this.value = value
    }

    T getValue() {
        return value
    }
}

def intBox = new Box<Integer>(42)
def stringBox = new Box<String>("Hallo")
```

**Besonderheiten:**
- Generics seit Groovy 1.5 (Java-kompatibel)
- Unterstützt generische Klassen, Methoden, Interfaces
- Typparameter können Constraints haben

**Weiterführende Links:**
- [Groovy Documentation - Generics](https://groovy-lang.org/objectorientation.html#generics)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Generics: type parameters (immer vorhanden)
data Box a = Box { value :: a }

createBox :: a -> Box a
createBox = Box

getValue :: Box a -> a
getValue = value

intBox :: Box Int
intBox = createBox 42

stringBox :: Box String
stringBox = createBox "Hallo"
```

**Besonderheiten:**
- Type-Parameter sind fundamental in Haskell
- Alle Typen sind implizit generisch
- Type classes für Constraints

**Weiterführende Links:**
- [Haskell Documentation - Type Parameters](https://www.haskell.org/tutorial/goodies.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Generics: generic classes und functions
class Box<T> {
    private var value: T;
    
    public function new(value: T) {
        this.value = value;
    }
    
    public function getValue(): T {
        return value;
    }
}

var intBox = new Box<Int>(42);
var stringBox = new Box<String>("Hallo");
```

**Besonderheiten:**
- Generics seit Haxe 2.0
- Unterstützt generic classes, functions, interfaces
- Type-Parameter können Constraints haben

**Weiterführende Links:**
- [Haxe Documentation - Generics](https://haxe.org/manual/type-system-generics.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Generics: type parameters (immer vorhanden)
data Box : Type -> Type where
    MkBox : a -> Box a

createBox : a -> Box a
createBox = MkBox

getValue : Box a -> a
getValue (MkBox x) = x

intBox : Box Int
intBox = createBox 42

stringBox : Box String
stringBox = createBox "Hallo"
```

**Besonderheiten:**
- Type-Parameter sind fundamental in Idris
- Alle Typen sind implizit generisch
- Dependent types für erweiterte Generics

**Weiterführende Links:**
- [Idris Documentation - Types](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html#types)

</TabItem>
<TabItem value="java" label="Java">

```java
// Generics: generic classes, methods, interfaces (seit Java 5)
class Box<T> {
    private T value;
    
    public Box(T value) {
        this.value = value;
    }
    
    public T getValue() {
        return value;
    }
}

Box<Integer> intBox = new Box<>(42);
Box<String> stringBox = new Box<>("Hallo");
```

**Besonderheiten:**
- Generics seit Java 5
- Type erasure zur Laufzeit
- Unterstützt generic classes, methods, interfaces
- Wildcards für Varianz

**Weiterführende Links:**
- [Oracle Java Documentation - Generics](https://docs.oracle.com/javase/tutorial/java/generics/index.html)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Generics: parametric types
struct Box{T}
    value::T
end

function create_box(value::T) where T
    Box{T}(value)
end

function get_value(box::Box{T}) where T
    box.value
end

int_box = create_box(42)
string_box = create_box("Hallo")
```

**Besonderheiten:**
- Parametric types seit Julia 0.1
- Type-Parameter mit `where`-Klauseln
- Unterstützt parametric types, functions

**Weiterführende Links:**
- [Julia Documentation - Parametric Types](https://docs.julialang.org/en/v1/manual/types/#Parametric-Types)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Generics: Parametrische Polymorphie
type box<a>
  Box(value: a)

fun create-box(value: a): box<a>
  Box(value)

fun get-value(b: box<a>): a
  match b
    Box(v) -> v

val int-box = create-box(42)
val string-box = create-box("Hallo")
```

**Besonderheiten:**
- Koka verwendet parametrische Polymorphie mit impliziter Quantifizierung
- Type-Parameter werden in spitzen Klammern `<a>` angegeben
- Kleinbuchstaben-Bezeichner in Typposition sind automatisch polymorphe Typvariablen
- Type Inference leitet Typparameter automatisch ab

**Weiterführende Links:**
- [Koka Language Guide - Type Parameters](https://koka-lang.github.io/koka/doc/book.html#sec-polymorphism)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Generics: generic classes, functions, interfaces
class Box<T>(private val value: T) {
    fun getValue(): T {
        return value
    }
}

val intBox = Box(42)
val stringBox = Box("Hallo")
```

**Besonderheiten:**
- Generics seit Kotlin 1.0
- Unterstützt generic classes, functions, interfaces
- Type-Parameter können Constraints haben
- Reified type parameters für inline functions

**Weiterführende Links:**
- [Kotlin Documentation - Generics](https://kotlinlang.org/docs/generics.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Generics: Polymorphe Funktionen und Strukturen
structure Box (α : Type) where
  value : α

def intBox : Box Int := { value := 42 }
def stringBox : Box String := { value := "Hallo" }

-- Polymorphe Funktion
def identity (x : α) : α := x

-- Generische Funktion mit mehreren Typparametern
def pair (a : α) (b : β) : α × β := (a, b)
```

**Besonderheiten:**
- Universeller Polymorphismus durch implizite und explizite Typparameter
- Typparameter in runden Klammern `(α : Type)` oder implizit `{α : Type}`
- Unterstützt Universe-Polymorphismus (`Type u`)
- Typinferenz leitet Typparameter automatisch ab

**Weiterführende Links:**
- [Lean 4 Documentation - Polymorphism](https://lean-lang.org/theorem_proving_in_lean4/dependent_type_theory.html#polymorphism)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Generics: Parametrischer Polymorphismus
:- type box(T) ---> box(T).

:- func new_box(T) = box(T).
new_box(Value) = box(Value).

:- func get_value(box(T)) = T.
get_value(box(Value)) = Value.

% Polymorphe Funktion
:- func identity(T) = T.
identity(X) = X.

% Generische Funktion mit mehreren Typparametern
:- func pair(T1, T2) = {T1, T2}.
pair(A, B) = {A, B}.
```

**Besonderheiten:**
- Parametrischer Polymorphismus durch Typvariablen in Typdeklarationen
- Typparameter werden in runden Klammern angegeben
- Typinferenz leitet Typparameter automatisch ab
- Alle polymorphen Typen sind uniform repräsentiert (Type Erasure)

**Weiterführende Links:**
- [Mercury Language Reference - Parametric Polymorphism](https://www.mercurylang.org/information/doc-release/mercury_ref/Polymorphism.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Generics: generic types und procedures
type Box[T] = object
    value: T

proc newBox[T](value: T): Box[T] =
    Box[T](value: value)

proc getValue[T](box: Box[T]): T =
    box.value

var intBox = newBox(42)
var stringBox = newBox("Hallo")
```

**Besonderheiten:**
- Generics seit Nim 0.9.0
- Type-Parameter mit eckigen Klammern
- Unterstützt generic types, procedures, templates

**Weiterführende Links:**
- [Nim Documentation - Generics](https://nim-lang.org/docs/manual.html#generics)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Generics: Lightweight Generics (seit Xcode 7)
@interface Box<__covariant T> : NSObject
@property (nonatomic, strong) T value;
- (instancetype)initWithValue:(T)value;
- (T)getValue;
@end

Box<NSNumber *> *intBox = [[Box alloc] initWithValue:@42];
Box<NSString *> *stringBox = [[Box alloc] initWithValue:@"Hallo"];
```

**Besonderheiten:**
- Lightweight Generics seit Xcode 7 (2015)
- Primär für Collection-Klassen wie NSArray, NSDictionary, NSSet
- Type erasure zur Laufzeit (keine Laufzeit-Typprüfung)
- Unterstützt Variance-Annotationen (`__covariant`, `__contravariant`)

**Weiterführende Links:**
- [Apple Documentation - Programming with Objective-C](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Generics: generic classes (seit Delphi 2009, Free Pascal 2.2)
type
  TBox<T> = class
  private
    FValue: T;
  public
    constructor Create(AValue: T);
    function GetValue: T;
  end;

var
  IntBox: TBox<Integer>;
  StringBox: TBox<String>;
```

**Besonderheiten:**
- Generics seit Delphi 2009, Free Pascal 2.2
- Type-Parameter mit eckigen Klammern
- Unterstützt generic classes, records, procedures

**Weiterführende Links:**
- [Free Pascal Documentation - Generics](https://www.freepascal.org/docs-html/ref/refse57.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Generics: type parameters (immer vorhanden) *)
type 'a box = { value : 'a }

let create_box value = { value }

let get_value box = box.value

let int_box = create_box 42
let string_box = create_box "Hallo"
```

**Besonderheiten:**
- Type-Parameter sind fundamental in OCaml
- Alle Typen sind implizit generisch
- Polymorphic variants für erweiterte Generics

**Weiterführende Links:**
- [OCaml Documentation - Polymorphism](https://ocaml.org/manual/polymorphism.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Generics: generic procedures (seit Odin 0.1)
Box :: struct(T: typeid) {
    value: T,
}

make_box :: proc(T: typeid, value: T) -> Box(T) {
    return Box(T){value = value}
}

get_value :: proc(box: $T/Box) -> T.value {
    return box.value
}

int_box := make_box(int, 42)
string_box := make_box(string, "Hallo")
```

**Besonderheiten:**
- Generics seit Odin 0.1
- Type-Parameter mit `typeid`
- Unterstützt generic procedures, structs

**Weiterführende Links:**
- [Odin Documentation - Generics](https://odin-lang.org/docs/overview/#generics)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Generics: type parameters (immer vorhanden)
data Box a = Box a

createBox :: forall a. a -> Box a
createBox = Box

getValue :: forall a. Box a -> a
getValue (Box x) = x

intBox :: Box Int
intBox = createBox 42

stringBox :: Box String
stringBox = createBox "Hallo"
```

**Besonderheiten:**
- Type-Parameter sind fundamental in PureScript
- Alle Typen sind implizit generisch
- `forall` für explizite Polymorphismus

**Weiterführende Links:**
- [PureScript Documentation - Types](https://github.com/purescript/documentation/blob/master/language/Types.md)

</TabItem>
<TabItem value="python" label="Python">

```python
# Generics: type hints mit typing.Generic (seit Python 3.5)
from typing import Generic, TypeVar

T = TypeVar('T')

class Box(Generic[T]):
    def __init__(self, value: T):
        self.value = value
    
    def get_value(self) -> T:
        return self.value

int_box: Box[int] = Box(42)
string_box: Box[str] = Box("Hallo")
```

**Besonderheiten:**
- Generics seit Python 3.5 (typing module)
- Type hints zur Laufzeit nicht erzwungen
- Unterstützt generic classes, functions

**Weiterführende Links:**
- [Python Documentation - Generic Types](https://docs.python.org/3/library/typing.html#generics)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Generics: generic types und functions
struct Box<T> {
    value: T,
}

impl<T> Box<T> {
    fn new(value: T) -> Self {
        Box { value }
    }
    
    fn get_value(&self) -> &T {
        &self.value
    }
}

let int_box = Box::new(42);
let string_box = Box::new("Hallo");
```

**Besonderheiten:**
- Generics seit Rust 1.0
- Unterstützt generic types, functions, traits
- Monomorphization zur Compile-Zeit
- Lifetimes als spezielle Generics

**Weiterführende Links:**
- [The Rust Book - Generics](https://doc.rust-lang.org/book/ch10-00-generics.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Generics: generic classes, methods, traits
class Box[T](private val value: T) {
    def getValue: T = value
}

val intBox = new Box[Int](42)
val stringBox = new Box[String]("Hallo")
```

**Besonderheiten:**
- Generics seit Scala 1.0
- Unterstützt generic classes, methods, traits
- Type-Parameter können Constraints haben
- Variance annotations (`+`, `-`)

**Weiterführende Links:**
- [Scala Documentation - Generics](https://docs.scala-lang.org/tour/generic-classes.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Generics: generic types und functions
struct Box<T> {
    var value: T
    
    init(value: T) {
        self.value = value
    }
    
    func getValue() -> T {
        return value
    }
}

let intBox = Box(value: 42)
let stringBox = Box(value: "Hallo")
```

**Besonderheiten:**
- Generics seit Swift 1.0
- Unterstützt generic types, functions, protocols
- Type-Parameter können Constraints haben
- Associated types für Protocols

**Weiterführende Links:**
- [Swift Documentation - Generics](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/generics/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Generics: generic types und functions
class Box<T> {
    private value: T;
    
    constructor(value: T) {
        this.value = value;
    }
    
    getValue(): T {
        return this.value;
    }
}

const intBox = new Box<number>(42);
const stringBox = new Box<string>("Hallo");
```

**Besonderheiten:**
- Generics seit TypeScript 1.0
- Unterstützt generic types, functions, interfaces
- Type erasure zur Laufzeit (JavaScript)
- Type-Parameter können Constraints haben

**Weiterführende Links:**
- [TypeScript Handbook - Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Generics: generic classes, methods, interfaces
Public Class Box(Of T)
    Private value As T
    
    Public Sub New(value As T)
        Me.value = value
    End Sub
    
    Public Function GetValue() As T
        Return value
    End Function
End Class

Dim intBox As New Box(Of Integer)(42)
Dim stringBox As New Box(Of String)("Hallo")
```

**Besonderheiten:**
- Generics seit VB.NET 2005
- Type-Parameter mit `Of T` Syntax
- Unterstützt generic classes, methods, interfaces

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Generics](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/data-types/generic-types)

</TabItem>
<TabItem value="v" label="V">

```v
// Generics: generic structs und functions (seit V 0.3)
struct Box[T] {
    value T
}

fn new_box[T](value T) Box[T] {
    return Box[T]{value: value}
}

fn (b Box[T]) get_value() T {
    return b.value
}

int_box := new_box(42)
string_box := new_box("Hallo")
```

**Besonderheiten:**
- Generics seit V 0.3
- Type-Parameter mit eckigen Klammern
- Unterstützt generic structs, functions, methods

**Weiterführende Links:**
- [V Documentation - Generics](https://github.com/vlang/v/blob/master/doc/docs.md#generics)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Generics: comptime generics
fn Box(comptime T: type) type {
    return struct {
        value: T,
        
        pub fn init(value: T) @This() {
            return .{ .value = value };
        }
        
        pub fn getValue(self: @This()) T {
            return self.value;
        }
    };
}

const IntBox = Box(i32);
const StringBox = Box([]const u8);

var int_box = IntBox.init(42);
var string_box = StringBox.init("Hallo");
```

**Besonderheiten:**
- Generics mit `comptime` zur Compile-Zeit
- Generic functions geben Typen zurück
- Type-Parameter müssen zur Compile-Zeit bekannt sein

**Weiterführende Links:**
- [Zig Documentation - Generics](https://ziglang.org/documentation/0.11.0/#Generic-Data-Structures)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Typvariablen (Generics)
identity : a -> a
identity x = x

-- Generische Datenstrukturen
type Maybe a
    = Just a
    | Nothing

type List a
    = Empty
    | Node a (List a)

-- Generische Funktionen
map : (a -> b) -> List a -> List b
map func list =
    case list of
        Empty -> Empty
        Node x rest -> Node (func x) (map func rest)
```

**Besonderheiten:**
- Typvariablen werden als Kleinbuchstaben geschrieben (`a`, `b`, `comparable`, etc.)
- Spezielle eingebaute Typvariablen: `number` (Int oder Float), `comparable`, `appendable`
- Keine benutzerdefinierten Typklassen-Constraints
- Parametrischer Polymorphismus nach Hindley-Milner

**Weiterführende Links:**
- [Elm Documentation - Types](https://guide.elm-lang.org/types/)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// Generics: Type Parameters
pub type Box(a) {
  Box(value: a)
}

pub fn unwrap(box: Box(a)) -> a {
  box.value
}

let int_box = Box(42)         // Box(Int)
let str_box = Box("Hallo")   // Box(String)
```

**Besonderheiten:**
- Type Parameters werden als Kleinbuchstaben angegeben (z.B. `a`, `b`)
- Unterstützt generische Custom Types und Funktionen
- Keine Bounded Type Parameters (keine Type Constraints)

**Weiterführende Links:**
- [Gleam Documentation - Generic Types](https://tour.gleam.run/data-types/generics/)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Parametrischer Polymorphismus
identity : a -> a
identity = \x -> x

first : a, b -> a
first = \a, _ -> a
```

**Besonderheiten:**
- Typvariablen in Kleinbuchstaben (z.B. `a`, `b`)
- Vollständiger parametrischer Polymorphismus
- Keine explizite Generics-Syntax nötig

**Weiterführende Links:**
- [Roc Documentation - Types](https://www.roc-lang.org/tutorial#type-annotations)

</TabItem>
</FilteredTabs>


## 3.7.2. Type Parameters

Parameter in generischen Typen, Funktionen oder Klassen, die durch konkrete Typen ersetzt werden können.

### Sprachen {#sprachen}

<FilteredTabs availableTabs={['ada', 'carbon', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'eiffel', 'elm', 'fsharp', 'gleam', 'go', 'groovy', 'haskell', 'haxe', 'idris', 'java', 'julia', 'koka', 'kotlin', 'lean4', 'mercury', 'nim', 'object-pascal', 'objective-c', 'ocaml', 'odin', 'purescript', 'python', 'roc', 'rust', 'scala', 'swift', 'typescript', 'v', 'vbnet', 'zig']} orangeTabs={['c', 'clojure', 'common-lisp', 'elixir']}>
<TabItem value="ada" label="Ada">

```ada
-- Type Parameters: Generic type parameters
generic
    type Element_Type is private;
    type Index_Type is range <>;
package Generic_Array is
    type Array_Type is array (Index_Type) of Element_Type;
end Generic_Array;

package Int_Array is new Generic_Array(Integer, 1..10);
```

**Besonderheiten:**
- Generic type parameters mit `type` deklariert
- Constraints möglich (z.B. `is private`, `is range <>`)
- Mehrere Type-Parameter möglich

**Weiterführende Links:**
- [Ada Reference Manual - Generic Formal Types](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-12-5.html)

</TabItem>
<TabItem value="c" label="C">

```c
// Type Parameters: nicht direkt unterstützt
// Workaround: Makros mit Typ-Parametern
#define ARRAY_TYPE(T, N) \
    typedef struct { \
        T data[N]; \
    } Array_##T##_##N;

ARRAY_TYPE(int, 10)
ARRAY_TYPE(double, 20)
```

**Besonderheiten:**
- C hat keine direkten Type-Parameter
- Makros können Type-Parameter simulieren
- Keine Type-Sicherheit zur Compile-Zeit

**Weiterführende Links:**
- [C Standard - Preprocessing](https://en.cppreference.com/w/c/preprocessor)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Type Parameters: type parameters in generics
generic class Container(T:! type, Size:! i32) {
    var data: [Size; T];
    
    fn get(self: Self, index: i32) -> T {
        return self.data[index];
    }
}

var int_container: Container(i32, 10);
```

**Besonderheiten:**
- Type-Parameter mit `T:! type` Syntax
- Value-Parameter möglich (z.B. `Size:! i32`)
- Experimentelle Sprache, Syntax kann sich noch ändern

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Type Parameters: type parameters in generics
class Container<T, U> {
    private T first;
    private U second;
    
    public Container(T first, U second) {
        this.first = first;
        this.second = second;
    }
    
    public T GetFirst() => first;
    public U GetSecond() => second;
}

var container = new Container<int, string>(42, "Hallo");
```

**Besonderheiten:**
- Type-Parameter mit `<T, U>` Syntax
- Mehrere Type-Parameter möglich
- Type-Parameter können Constraints haben

**Weiterführende Links:**
- [Microsoft C# Documentation - Type Parameters](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/types/generics#type-parameters)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Type Parameters: template type parameters
template<typename T, typename U = int>
class Container {
private:
    T first;
    U second;
    
public:
    Container(T first, U second) : first(first), second(second) {}
    
    T getFirst() const { return first; }
    U getSecond() const { return second; }
};

Container<int, std::string> container(42, "Hallo");
Container<double> container2(3.14, 0); // U = int (default)
```

**Besonderheiten:**
- Template type parameters mit `typename` oder `class`
- Default-Argumente für Type-Parameter möglich
- Mehrere Type-Parameter möglich
- Non-type template parameters möglich

**Weiterführende Links:**
- [cppreference.com - Template Parameters](https://en.cppreference.com/w/cpp/language/template_parameters)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Type Parameters: nicht direkt unterstützt (dynamische Typisierung)
;; Workaround: Funktionen mit Typ-Hints
(defn container [first second]
  {:first first :second second})

(def int-string-container (container 42 "Hallo"))
```

**Besonderheiten:**
- Clojure hat keine direkten Type-Parameter (dynamische Typisierung)
- Typ-Hints für Performance-Optimierung
- Typen werden zur Laufzeit geprüft

**Weiterführende Links:**
- [Clojure Documentation - Type Hints](https://clojure.org/reference/java_interop#type-hints)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Type Parameters: nicht direkt unterstützt (dynamische Typisierung)
;; Workaround: Generic Functions mit Typ-Spezialisierung
(defgeneric container (first second))

(defmethod container ((first integer) (second string))
  (list first second))

(container 42 "Hallo")
```

**Besonderheiten:**
- Common Lisp hat keine direkten Type-Parameter (dynamische Typisierung)
- Generic Functions mit Typ-Spezialisierung
- Typen werden zur Laufzeit geprüft

**Weiterführende Links:**
- [Common Lisp HyperSpec - Generic Functions](http://www.lispworks.com/documentation/HyperSpec/Body/f_generi.htm)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Type Parameters: type parameters in generics
class Container(T, U)
  def initialize(@first : T, @second : U)
  end
  
  def first : T
    @first
  end
  
  def second : U
    @second
  end
end

container = Container(Int32, String).new(42, "Hallo")
```

**Besonderheiten:**
- Type-Parameter mit `(T, U)` Syntax
- Mehrere Type-Parameter möglich
- Type-Parameter können Constraints haben

**Weiterführende Links:**
- [Crystal Documentation - Generics](https://crystal-lang.org/reference/1.11/syntax_and_semantics/generics.html)

</TabItem>
<TabItem value="d" label="D">

```d
// Type Parameters: template type parameters
class Container(T, U) {
    private T first;
    private U second;
    
    this(T first, U second) {
        this.first = first;
        this.second = second;
    }
    
    T getFirst() { return first; }
    U getSecond() { return second; }
}

auto container = new Container!(int, string)(42, "Hallo");
```

**Besonderheiten:**
- Template type parameters mit `(T, U)` Syntax
- Template-Instanziierung mit `!` (z.B. `Container!int`)
- Mehrere Type-Parameter möglich

**Weiterführende Links:**
- [D Language Specification - Template Parameters](https://dlang.org/spec/template.html#template-parameters)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Type Parameters: type parameters in generics
class Container<T, U> {
  T first;
  U second;
  
  Container(this.first, this.second);
  
  T getFirst() => first;
  U getSecond() => second;
}

var container = Container<int, String>(42, "Hallo");
```

**Besonderheiten:**
- Type-Parameter mit `<T, U>` Syntax
- Mehrere Type-Parameter möglich
- Type-Parameter können Constraints haben

**Weiterführende Links:**
- [Dart Documentation - Generics](https://dart.dev/language/generics)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
-- Type Parameters: generic type parameters
class CONTAINER [G, H] feature
    first: G
    second: H
    
    make (a_first: G; a_second: H)
    do
        first := a_first
        second := a_second
    end
    
    get_first: G
    do
        Result := first
    end
    
    get_second: H
    do
        Result := second
    end
end

-- Verwendung
container: CONTAINER [INTEGER, STRING]
```

**Besonderheiten:**
- Generic type parameters mit eckigen Klammern `[G, H]`
- Mehrere Type-Parameter möglich
- Type-Parameter können Constraints haben

**Weiterführende Links:**
- [Eiffel Documentation - Genericity](https://www.eiffel.org/doc/eiffel/Eiffel_Standard)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Type Parameters: nicht direkt unterstützt (dynamische Typisierung)
# Workaround: Structs mit Typ-Informationen
defmodule Container do
  defstruct [:first, :second]
  
  def new(first, second), do: %Container{first: first, second: second}
  
  def get_first(%Container{first: first}), do: first
  def get_second(%Container{second: second}), do: second
end

container = Container.new(42, "Hallo")
```

**Besonderheiten:**
- Elixir hat keine direkten Type-Parameter (dynamische Typisierung)
- Structs können generische Datenstrukturen simulieren
- Typen werden zur Laufzeit geprüft

**Weiterführende Links:**
- [Elixir Documentation - Structs](https://elixir-lang.org/getting-started/structs.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Type Parameters: type parameters in generics
type Container<'T, 'U> = {
    First: 'T
    Second: 'U
}

let createContainer first second = { First = first; Second = second }
let getFirst (container: Container<'T, 'U>) = container.First
let getSecond (container: Container<'T, 'U>) = container.Second

let container = createContainer 42 "Hallo"
```

**Besonderheiten:**
- Type-Parameter mit `'T, 'U` (Tick-Notation)
- Mehrere Type-Parameter möglich
- Type-Parameter können Constraints haben

**Weiterführende Links:**
- [F# Documentation - Type Parameters](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/generics/#type-parameters)

</TabItem>
<TabItem value="go" label="Go">

```go
// Type Parameters: type parameters (seit Go 1.18)
type Container[T, U any] struct {
    first  T
    second U
}

func NewContainer[T, U any](first T, second U) Container[T, U] {
    return Container[T, U]{first: first, second: second}
}

func (c Container[T, U]) GetFirst() T {
    return c.first
}

func (c Container[T, U]) GetSecond() U {
    return c.second
}

container := NewContainer(42, "Hallo")
```

**Besonderheiten:**
- Type-Parameter seit Go 1.18
- Type-Parameter mit Constraints (z.B. `any`, `comparable`)
- Mehrere Type-Parameter möglich

**Weiterführende Links:**
- [Go Language Specification - Type Parameters](https://go.dev/ref/spec#Type_parameters)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Type Parameters: type parameters in generics
class Container<T, U> {
    T first
    U second

    Container(T first, U second) {
        this.first = first
        this.second = second
    }

    T getFirst() {
        return first
    }

    U getSecond() {
        return second
    }
}

def container = new Container<Integer, String>(42, "Hallo")
```

**Besonderheiten:**
- Typparameter mit `<T, U>` Syntax (Java-kompatibel)
- Mehrere Typparameter möglich
- Typparameter können Constraints haben

**Weiterführende Links:**
- [Groovy Documentation - Generics](https://groovy-lang.org/objectorientation.html#generics)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Type Parameters: type parameters (immer vorhanden)
data Container a b = Container { first :: a, second :: b }

createContainer :: a -> b -> Container a b
createContainer = Container

getFirst :: Container a b -> a
getFirst = first

getSecond :: Container a b -> b
getSecond = second

container :: Container Int String
container = createContainer 42 "Hallo"
```

**Besonderheiten:**
- Type-Parameter sind fundamental in Haskell
- Alle Typen sind implizit generisch
- Mehrere Type-Parameter möglich
- Type classes für Constraints

**Weiterführende Links:**
- [Haskell Documentation - Type Parameters](https://www.haskell.org/tutorial/goodies.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Type Parameters: type parameters in generics
class Container<T, U> {
    private var first: T;
    private var second: U;
    
    public function new(first: T, second: U) {
        this.first = first;
        this.second = second;
    }
    
    public function getFirst(): T {
        return first;
    }
    
    public function getSecond(): U {
        return second;
    }
}

var container = new Container<Int, String>(42, "Hallo");
```

**Besonderheiten:**
- Type-Parameter mit `<T, U>` Syntax
- Mehrere Type-Parameter möglich
- Type-Parameter können Constraints haben

**Weiterführende Links:**
- [Haxe Documentation - Type Parameters](https://haxe.org/manual/type-system-generics.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Type Parameters: type parameters (immer vorhanden)
data Container : Type -> Type -> Type where
    MkContainer : a -> b -> Container a b

createContainer : a -> b -> Container a b
createContainer = MkContainer

getFirst : Container a b -> a
getFirst (MkContainer x _) = x

getSecond : Container a b -> b
getSecond (MkContainer _ y) = y

container : Container Int String
container = createContainer 42 "Hallo"
```

**Besonderheiten:**
- Type-Parameter sind fundamental in Idris
- Alle Typen sind implizit generisch
- Mehrere Type-Parameter möglich
- Dependent types für erweiterte Type-Parameter

**Weiterführende Links:**
- [Idris Documentation - Types](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html#types)

</TabItem>
<TabItem value="java" label="Java">

```java
// Type Parameters: type parameters in generics (seit Java 5)
class Container<T, U> {
    private T first;
    private U second;
    
    public Container(T first, U second) {
        this.first = first;
        this.second = second;
    }
    
    public T getFirst() {
        return first;
    }
    
    public U getSecond() {
        return second;
    }
}

Container<Integer, String> container = new Container<>(42, "Hallo");
```

**Besonderheiten:**
- Type-Parameter seit Java 5
- Type-Parameter mit `<T, U>` Syntax
- Mehrere Type-Parameter möglich
- Type-Parameter können Constraints haben

**Weiterführende Links:**
- [Oracle Java Documentation - Type Parameters](https://docs.oracle.com/javase/tutorial/java/generics/types.html)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Type Parameters: parametric type parameters
struct Container{T, U}
    first::T
    second::U
end

function create_container(first::T, second::U) where {T, U}
    Container{T, U}(first, second)
end

function get_first(container::Container{T, U}) where {T, U}
    container.first
end

function get_second(container::Container{T, U}) where {T, U}
    container.second
end

container = create_container(42, "Hallo")
```

**Besonderheiten:**
- Parametric type parameters mit `{T, U}` Syntax
- Type-Parameter mit `where`-Klauseln
- Mehrere Type-Parameter möglich

**Weiterführende Links:**
- [Julia Documentation - Parametric Types](https://docs.julialang.org/en/v1/manual/types/#Parametric-Types)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Type Parameters: Mehrere Typparameter
type container<a, b>
  Container(first: a, second: b)

fun create-container(first: a, second: b): container<a, b>
  Container(first, second)

fun get-first(c: container<a, b>): a
  match c
    Container(f, _) -> f

fun get-second(c: container<a, b>): b
  match c
    Container(_, s) -> s

val c = create-container(42, "Hallo")
```

**Besonderheiten:**
- Mehrere Typparameter werden durch Komma getrennt in spitzen Klammern angegeben
- Typparameter sind implizit universell quantifiziert
- Koka verwendet Hindley-Milner Type Inference für automatische Typ-Ableitung
- Typparameter können auch in Effekt-Signaturen verwendet werden

**Weiterführende Links:**
- [Koka Language Guide - Type Parameters](https://koka-lang.github.io/koka/doc/book.html#sec-polymorphism)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Type Parameters: type parameters in generics
class Container<T, U>(private val first: T, private val second: U) {
    fun getFirst(): T {
        return first
    }
    
    fun getSecond(): U {
        return second
    }
}

val container = Container(42, "Hallo")
```

**Besonderheiten:**
- Type-Parameter mit `<T, U>` Syntax
- Mehrere Type-Parameter möglich
- Type-Parameter können Constraints haben
- Reified type parameters für inline functions

**Weiterführende Links:**
- [Kotlin Documentation - Type Parameters](https://kotlinlang.org/docs/generics.html#type-parameters)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Type Parameters: Explizite und implizite Typparameter
structure Container (α β : Type) where
  first : α
  second : β

def container : Container Int String := { first := 42, second := "Hallo" }

-- Implizite Typparameter mit geschweiften Klammern
def swap {α β : Type} (c : Container α β) : Container β α :=
  { first := c.second, second := c.first }

-- Mehrere Typparameter in Funktionen
def mapFirst {α β γ : Type} (f : α → γ) (c : Container α β) : Container γ β :=
  { first := f c.first, second := c.second }
```

**Besonderheiten:**
- Explizite Typparameter mit `(α : Type)`, implizite mit `{α : Type}`
- Auto-bound implizite Parameter: Lean erkennt freie Typvariablen automatisch
- Universe-Polymorphismus mit `Type u` für verschiedene Universe-Levels
- Typparameter können auch Werte sein (abhängige Typen)

**Weiterführende Links:**
- [Lean 4 Documentation - Implicit Arguments](https://lean-lang.org/theorem_proving_in_lean4/dependent_type_theory.html#implicit-arguments)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Type Parameters: Mehrere Typparameter
:- type container(T, U) ---> container(T, U).

:- func swap(container(T, U)) = container(U, T).
swap(container(First, Second)) = container(Second, First).

% Funktion mit mehreren Typparametern
:- func map_first(func(T) = V, container(T, U)) = container(V, U).
map_first(F, container(First, Second)) = container(F(First), Second).
```

**Besonderheiten:**
- Typparameter in runden Klammern nach dem Typnamen
- Mehrere Typparameter durch Komma getrennt
- Typparameter werden automatisch aus dem Kontext inferiert
- Higher-Order Funktionen können generisch über Typparameter sein

**Weiterführende Links:**
- [Mercury Language Reference - Polymorphism](https://www.mercurylang.org/information/doc-release/mercury_ref/Polymorphism.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Type Parameters: generic type parameters
type Container[T, U] = object
    first: T
    second: U

proc newContainer[T, U](first: T, second: U): Container[T, U] =
    Container[T, U](first: first, second: second)

proc getFirst[T, U](container: Container[T, U]): T =
    container.first

proc getSecond[T, U](container: Container[T, U]): U =
    container.second

var container = newContainer(42, "Hallo")
```

**Besonderheiten:**
- Generic type parameters mit `[T, U]` Syntax
- Mehrere Type-Parameter möglich
- Type-Parameter können Constraints haben

**Weiterführende Links:**
- [Nim Documentation - Generic Type Parameters](https://nim-lang.org/docs/manual.html#generics)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Type Parameters: Lightweight Generics (seit Xcode 7)
@interface Container<__covariant T, __covariant U> : NSObject
@property (nonatomic, strong) T first;
@property (nonatomic, strong) U second;
- (instancetype)initWithFirst:(T)first second:(U)second;
- (T)getFirst;
- (U)getSecond;
@end

Container<NSNumber *, NSString *> *container =
    [[Container alloc] initWithFirst:@42 second:@"Hallo"];
```

**Besonderheiten:**
- Type-Parameter seit Xcode 7 (2015)
- Lightweight Generics mit Variance-Annotationen
- Mehrere Type-Parameter möglich
- Type erasure zur Laufzeit

**Weiterführende Links:**
- [Apple Documentation - Programming with Objective-C](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Type Parameters: generic type parameters (seit Delphi 2009, Free Pascal 2.2)
type
  TContainer<T, U> = class
  private
    FFirst: T;
    FSecond: U;
  public
    constructor Create(AFirst: T; ASecond: U);
    function GetFirst: T;
    function GetSecond: U;
  end;

var
  Container: TContainer<Integer, String>;
```

**Besonderheiten:**
- Generic type parameters mit `<T, U>` Syntax
- Mehrere Type-Parameter möglich
- Type-Parameter können Constraints haben

**Weiterführende Links:**
- [Free Pascal Documentation - Generic Type Parameters](https://www.freepascal.org/docs-html/ref/refse57.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Type Parameters: type parameters (immer vorhanden) *)
type ('a, 'b) container = { first : 'a; second : 'b }

let create_container first second = { first; second }

let get_first container = container.first

let get_second container = container.second

let container = create_container 42 "Hallo"
```

**Besonderheiten:**
- Type-Parameter sind fundamental in OCaml
- Alle Typen sind implizit generisch
- Mehrere Type-Parameter möglich
- Polymorphic variants für erweiterte Type-Parameter

**Weiterführende Links:**
- [OCaml Documentation - Type Parameters](https://ocaml.org/manual/polymorphism.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Type Parameters: generic type parameters (seit Odin 0.1)
Container :: struct(T: typeid, U: typeid) {
    first: T,
    second: U,
}

make_container :: proc(T: typeid, U: typeid, first: T, second: U) -> Container(T, U) {
    return Container(T, U){first = first, second = second}
}

get_first :: proc(container: $T/Container) -> T.first {
    return container.first
}

get_second :: proc(container: $T/Container) -> T.second {
    return container.second
}

container := make_container(int, string, 42, "Hallo")
```

**Besonderheiten:**
- Generic type parameters mit `typeid`
- Mehrere Type-Parameter möglich
- Type-Parameter müssen zur Compile-Zeit bekannt sein

**Weiterführende Links:**
- [Odin Documentation - Generics](https://odin-lang.org/docs/overview/#generics)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Type Parameters: type parameters (immer vorhanden)
data Container a b = Container a b

createContainer :: forall a b. a -> b -> Container a b
createContainer = Container

getFirst :: forall a b. Container a b -> a
getFirst (Container x _) = x

getSecond :: forall a b. Container a b -> b
getSecond (Container _ y) = y

container :: Container Int String
container = createContainer 42 "Hallo"
```

**Besonderheiten:**
- Type-Parameter sind fundamental in PureScript
- Alle Typen sind implizit generisch
- Mehrere Type-Parameter möglich
- `forall` für explizite Polymorphismus

**Weiterführende Links:**
- [PureScript Documentation - Type Parameters](https://github.com/purescript/documentation/blob/master/language/Types.md)

</TabItem>
<TabItem value="python" label="Python">

```python
# Type Parameters: type parameters mit typing (seit Python 3.5)
from typing import Generic, TypeVar

T = TypeVar('T')
U = TypeVar('U')

class Container(Generic[T, U]):
    def __init__(self, first: T, second: U):
        self.first = first
        self.second = second
    
    def get_first(self) -> T:
        return self.first
    
    def get_second(self) -> U:
        return self.second

container: Container[int, str] = Container(42, "Hallo")
```

**Besonderheiten:**
- Type-Parameter seit Python 3.5 (typing module)
- Type-Parameter mit `TypeVar` definiert
- Mehrere Type-Parameter möglich
- Type hints zur Laufzeit nicht erzwungen

**Weiterführende Links:**
- [Python Documentation - Type Variables](https://docs.python.org/3/library/typing.html#typing.TypeVar)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Type Parameters: type parameters in generics
struct Container<T, U> {
    first: T,
    second: U,
}

impl<T, U> Container<T, U> {
    fn new(first: T, second: U) -> Self {
        Container { first, second }
    }
    
    fn get_first(&self) -> &T {
        &self.first
    }
    
    fn get_second(&self) -> &U {
        &self.second
    }
}

let container = Container::new(42, "Hallo");
```

**Besonderheiten:**
- Type-Parameter mit `<T, U>` Syntax
- Mehrere Type-Parameter möglich
- Type-Parameter können Constraints haben
- Lifetimes als spezielle Type-Parameter

**Weiterführende Links:**
- [The Rust Book - Type Parameters](https://doc.rust-lang.org/book/ch10-01-syntax.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Type Parameters: type parameters in generics
class Container[T, U](private val first: T, private val second: U) {
    def getFirst: T = first
    def getSecond: U = second
}

val container = new Container[Int, String](42, "Hallo")
```

**Besonderheiten:**
- Type-Parameter mit `[T, U]` Syntax
- Mehrere Type-Parameter möglich
- Type-Parameter können Constraints haben
- Variance annotations (`+`, `-`)

**Weiterführende Links:**
- [Scala Documentation - Type Parameters](https://docs.scala-lang.org/tour/generic-classes.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Type Parameters: type parameters in generics
struct Container<T, U> {
    var first: T
    var second: U
    
    init(first: T, second: U) {
        self.first = first
        self.second = second
    }
    
    func getFirst() -> T {
        return first
    }
    
    func getSecond() -> U {
        return second
    }
}

let container = Container(first: 42, second: "Hallo")
```

**Besonderheiten:**
- Type-Parameter mit `<T, U>` Syntax
- Mehrere Type-Parameter möglich
- Type-Parameter können Constraints haben
- Associated types für Protocols

**Weiterführende Links:**
- [Swift Documentation - Type Parameters](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/generics/#type-parameters)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Type Parameters: type parameters in generics
class Container<T, U> {
    private first: T;
    private second: U;
    
    constructor(first: T, second: U) {
        this.first = first;
        this.second = second;
    }
    
    getFirst(): T {
        return this.first;
    }
    
    getSecond(): U {
        return this.second;
    }
}

const container = new Container<number, string>(42, "Hallo");
```

**Besonderheiten:**
- Type-Parameter mit `<T, U>` Syntax
- Mehrere Type-Parameter möglich
- Type-Parameter können Constraints haben
- Type erasure zur Laufzeit (JavaScript)

**Weiterführende Links:**
- [TypeScript Handbook - Type Parameters](https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-types)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Type Parameters: type parameters in generics
Public Class Container(Of T, U)
    Private first As T
    Private second As U
    
    Public Sub New(first As T, second As U)
        Me.first = first
        Me.second = second
    End Sub
    
    Public Function GetFirst() As T
        Return first
    End Function
    
    Public Function GetSecond() As U
        Return second
    End Function
End Class

Dim container As New Container(Of Integer, String)(42, "Hallo")
```

**Besonderheiten:**
- Type-Parameter mit `Of T, U` Syntax
- Mehrere Type-Parameter möglich
- Type-Parameter können Constraints haben

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Type Parameters](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/data-types/generic-types#type-parameters)

</TabItem>
<TabItem value="v" label="V">

```v
// Type Parameters: type parameters in generics (seit V 0.3)
struct Container[T, U] {
    first T
    second U
}

fn new_container[T, U](first T, second U) Container[T, U] {
    return Container[T, U]{first: first, second: second}
}

fn (c Container[T, U]) get_first() T {
    return c.first
}

fn (c Container[T, U]) get_second() U {
    return c.second
}

container := new_container(42, "Hallo")
```

**Besonderheiten:**
- Type-Parameter mit `[T, U]` Syntax
- Mehrere Type-Parameter möglich
- Type-Parameter können Constraints haben

**Weiterführende Links:**
- [V Documentation - Generics](https://github.com/vlang/v/blob/master/doc/docs.md#generics)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Type Parameters: comptime type parameters
fn Container(comptime T: type, comptime U: type) type {
    return struct {
        first: T,
        second: U,
        
        pub fn init(first: T, second: U) @This() {
            return .{ .first = first, .second = second };
        }
        
        pub fn getFirst(self: @This()) T {
            return self.first;
        }
        
        pub fn getSecond(self: @This()) U {
            return self.second;
        }
    };
}

const IntStringContainer = Container(i32, []const u8);
var container = IntStringContainer.init(42, "Hallo");
```

**Besonderheiten:**
- Type-Parameter mit `comptime` zur Compile-Zeit
- Mehrere Type-Parameter möglich
- Type-Parameter müssen zur Compile-Zeit bekannt sein
- Generic functions geben Typen zurück

**Weiterführende Links:**
- [Zig Documentation - Generic Data Structures](https://ziglang.org/documentation/0.11.0/#Generic-Data-Structures)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Typparameter in Custom Types
type Result error value
    = Ok value
    | Err error

-- Typparameter in Type Aliases
type alias Pair a b = { first : a, second : b }

-- Verwendung
myResult : Result String Int
myResult = Ok 42

myPair : Pair String Int
myPair = { first = "Hallo", second = 42 }
```

**Besonderheiten:**
- Typparameter werden als Kleinbuchstaben nach dem Typnamen angegeben
- Mehrere Typparameter möglich (`Result error value`)
- Typparameter werden bei Verwendung konkretisiert

**Weiterführende Links:**
- [Elm Documentation - Custom Types](https://guide.elm-lang.org/types/custom_types.html)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// Type Parameters
pub fn identity(value: a) -> a {
  value
}

pub type Pair(a, b) {
  Pair(first: a, second: b)
}

let pair = Pair(1, "hello")  // Pair(Int, String)
```

**Besonderheiten:**
- Type Parameters werden als Kleinbuchstaben geschrieben
- Mehrere Type Parameters möglich
- Type Inference leitet konkrete Typen ab

**Weiterführende Links:**
- [Gleam Documentation - Generics](https://tour.gleam.run/data-types/generics/)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Type Parameters als Typvariablen
swap : a, b -> (b, a)
swap = \x, y -> (y, x)

mapList : List a, (a -> b) -> List b
mapList = \list, f -> List.map list f
```

**Besonderheiten:**
- Typvariablen sind implizit universell quantifiziert
- Kleinbuchstaben für Typvariablen (z.B. `a`, `b`)

**Weiterführende Links:**
- [Roc Documentation - Types](https://www.roc-lang.org/tutorial#type-annotations)

</TabItem>
</FilteredTabs>


## 3.7.3. Bounded Type Parameters

Type-Parameter mit Constraints, die einschränken, welche Typen als Argumente verwendet werden können.

### Sprachen {#sprachen}

<FilteredTabs availableTabs={['ada', 'carbon', 'crystal', 'csharp', 'd', 'dart', 'eiffel', 'fsharp', 'go', 'groovy', 'haskell', 'haxe', 'idris', 'java', 'julia', 'kotlin', 'lean4', 'mercury', 'nim', 'object-pascal', 'purescript', 'python', 'roc', 'rust', 'scala', 'swift', 'typescript', 'v', 'vbnet']} yellowTabs={['cpp']} orangeTabs={['c', 'ocaml', 'odin', 'zig']}>
<TabItem value="ada" label="Ada">

```ada
-- Bounded Type Parameters: Generic constraints
generic
    type Item_Type is private;
    type Item_Type is new Integer;  -- Constraint: muss von Integer abgeleitet sein
package Generic_Calculator is
    function Add(A, B : Item_Type) return Item_Type;
end Generic_Calculator;

package Int_Calculator is new Generic_Calculator(Integer);
```

**Besonderheiten:**
- Generic constraints mit `is new` oder `is range`
- Constraints können Typ-Hierarchien spezifizieren
- Mehrere Constraints möglich

**Weiterführende Links:**
- [Ada Reference Manual - Generic Formal Types](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-12-5.html)

</TabItem>
<TabItem value="c" label="C">

```c
// Bounded Type Parameters: nicht direkt unterstützt
// Workaround: Makros mit Typ-Prüfung
#define CALCULATOR_TYPE(T) \
    _Static_assert(_Generic((T){0}, \
        int: 1, \
        long: 1, \
        default: 0), "T must be an integer type"); \
    typedef struct { \
        T value; \
    } Calculator_##T;
```

**Besonderheiten:**
- C hat keine direkten bounded type parameters
- `_Generic` kann zur Compile-Zeit Typen prüfen
- Keine vollständige Type-Sicherheit

**Weiterführende Links:**
- [C Standard - Generic Selection](https://en.cppreference.com/w/c/language/generic)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Bounded Type Parameters: type constraints
generic class Calculator(T:! Addable) {
    fn add(self: Self, a: T, b: T) -> T {
        return a + b;
    }
}

// Addable ist ein Interface/Concept
```

**Besonderheiten:**
- Type constraints mit `T:! Interface` Syntax
- Experimentelle Sprache, Syntax kann sich noch ändern
- Constraints definieren erforderliche Operationen

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Bounded Type Parameters: type constraints
interface IAddable {
    int Add(int a, int b);
}

class Calculator<T> where T : IComparable<T> {
    public T Max(T a, T b) {
        return a.CompareTo(b) > 0 ? a : b;
    }
}

class NumberCalculator<T> where T : struct, IComparable<T> {
    public T Add(T a, T b) {
        return (dynamic)a + (dynamic)b;
    }
}
```

**Besonderheiten:**
- Type constraints mit `where T : Constraint` Syntax
- Constraints: `class`, `struct`, `new()`, Interfaces, Base classes
- Mehrere Constraints mit `,` kombiniert

**Weiterführende Links:**
- [Microsoft C# Documentation - Type Constraints](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/generics/constraints-on-type-parameters)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Bounded Type Parameters: template constraints (C++20 Concepts)
template<typename T>
concept Addable = requires(T a, T b) {
    { a + b } -> std::convertible_to<T>;
};

template<Addable T>
class Calculator {
public:
    T add(T a, T b) {
        return a + b;
    }
};

// Oder mit std::enable_if (vor C++20)
template<typename T>
class Calculator {
    static_assert(std::is_arithmetic_v<T>, "T must be arithmetic");
public:
    T add(T a, T b) { return a + b; }
};
```

**Besonderheiten:**
- Concepts seit C++20 für Type constraints
- `std::enable_if` und `static_assert` als Workaround (vor C++20)
- SFINAE für Template-Spezialisierung

**Weiterführende Links:**
- [cppreference.com - Constraints](https://en.cppreference.com/w/cpp/language/constraints)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Bounded Type Parameters: type constraints
module Addable
  abstract def +(other : self) : self
end

class Calculator(T)
  def add(a : T, b : T) : T
    a + b
  end
end

# T muss Addable implementieren
class IntCalculator < Calculator(Int32)
end
```

**Besonderheiten:**
- Type constraints mit Modules/Interfaces
- Type-Parameter können Constraints haben
- Compile-time Typ-Prüfung

**Weiterführende Links:**
- [Crystal Documentation - Generics](https://crystal-lang.org/reference/1.11/syntax_and_semantics/generics.html)

</TabItem>
<TabItem value="d" label="D">

```d
// Bounded Type Parameters: template constraints
interface Addable(T) {
    T opBinary(string op : "+")(T rhs);
}

class Calculator(T) if (is(T : Addable!T)) {
    T add(T a, T b) {
        return a + b;
    }
}

// Oder mit is() expressions
class NumberCalculator(T) if (isNumeric!T) {
    T add(T a, T b) {
        return a + b;
    }
}
```

**Besonderheiten:**
- Template constraints mit `if`-Klauseln
- Constraints mit `is()` expressions
- Mehrere Constraints möglich

**Weiterführende Links:**
- [D Language Specification - Template Constraints](https://dlang.org/spec/template.html#template-constraints)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Bounded Type Parameters: type constraints
abstract class Comparable<T> {
  int compareTo(T other);
}

class Calculator<T extends Comparable<T>> {
  T max(T a, T b) {
    return a.compareTo(b) > 0 ? a : b;
  }
}

class NumberCalculator<T extends num> {
  T add(T a, T b) {
    return a + b;
  }
}
```

**Besonderheiten:**
- Type constraints mit `extends` Syntax
- Constraints können Classes oder Interfaces sein
- Mehrere Constraints mit `&` kombiniert

**Weiterführende Links:**
- [Dart Documentation - Generic Type Constraints](https://dart.dev/language/generics#restricting-the-parameterized-type)

</TabItem>
<TabItem value="eiffel" label="Eiffel">

```eiffel
-- Bounded Type Parameters: generic constraints
class CALCULATOR [G -> COMPARABLE] feature
    max (a, b: G): G
    do
        if a >= b then
            Result := a
        else
            Result := b
        end
    end
end

-- G muss COMPARABLE erfüllen
int_calculator: CALCULATOR [INTEGER]
```

**Besonderheiten:**
- Generic constraints mit `->` Syntax
- Constraints können Classes oder Interfaces sein
- Compile-time Typ-Prüfung

**Weiterführende Links:**
- [Eiffel Documentation - Constrained Genericity](https://www.eiffel.org/doc/eiffel/Eiffel_Standard)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Bounded Type Parameters: type constraints
type Calculator<'T when 'T : comparison> = {
    Max: 'T -> 'T -> 'T
}

let createCalculator () = {
    Max = fun a b -> if a > b then a else b
}

// Oder mit Interfaces
type IAddable<'T> =
    abstract member Add: 'T -> 'T -> 'T

type NumberCalculator<'T when 'T :> IAddable<'T>> = {
    Add: 'T -> 'T -> 'T
}
```

**Besonderheiten:**
- Type constraints mit `when`-Klauseln
- Constraints: `comparison`, `equality`, `:>`, `: null`, `struct`, `not struct`
- Mehrere Constraints möglich

**Weiterführende Links:**
- [F# Documentation - Type Constraints](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/generics/constraints)

</TabItem>
<TabItem value="go" label="Go">

```go
// Bounded Type Parameters: type constraints (seit Go 1.18)
type Comparable interface {
    CompareTo(other Comparable) int
}

type Calculator[T Comparable] struct{}

func (c Calculator[T]) Max(a, b T) T {
    if a.CompareTo(b) > 0 {
        return a
    }
    return b
}

// Oder mit type sets (seit Go 1.18)
type Numeric interface {
    ~int | ~int64 | ~float64
}

type NumberCalculator[T Numeric] struct{}

func (c NumberCalculator[T]) Add(a, b T) T {
    return a + b
}
```

**Besonderheiten:**
- Type constraints seit Go 1.18
- Constraints mit Interfaces oder type sets
- Type sets mit `|` für Union constraints

**Weiterführende Links:**
- [Go Language Specification - Type Constraints](https://go.dev/ref/spec#Type_constraints)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Bounded Type Parameters: type constraints (Java-kompatibel)
class Calculator<T extends Comparable<T>> {
    T max(T a, T b) {
        return a.compareTo(b) > 0 ? a : b
    }
}

class NumberCalculator<T extends Number> {
    double sum(T a, T b) {
        return a.doubleValue() + b.doubleValue()
    }
}

def calc = new Calculator<Integer>()
def result = calc.max(3, 7) // 7
```

**Besonderheiten:**
- Type Constraints mit `extends` Syntax (Java-kompatibel)
- Constraints können Klassen oder Interfaces sein
- Mehrere Constraints mit `&` kombiniert

**Weiterführende Links:**
- [Groovy Documentation - Generics](https://groovy-lang.org/objectorientation.html#generics)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Bounded Type Parameters: type class constraints
class Comparable a where
    compareTo :: a -> a -> Ordering

maxValue :: (Comparable a) => a -> a -> a
maxValue a b = case compareTo a b of
    GT -> a
    _  -> b

-- Oder mit Standard-Constraints
maxNum :: (Ord a, Num a) => a -> a -> a
maxNum a b = if a > b then a else b
```

**Besonderheiten:**
- Type class constraints mit `(Constraint a) =>` Syntax
- Type classes definieren Constraints
- Mehrere Constraints möglich

**Weiterführende Links:**
- [Haskell Documentation - Type Classes](https://www.haskell.org/tutorial/classes.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Bounded Type Parameters: type constraints
interface Comparable<T> {
    function compareTo(other:T):Int;
}

class Calculator<T:Comparable<T>> {
    public function max(a:T, b:T):T {
        return a.compareTo(b) > 0 ? a : b;
    }
}
```

**Besonderheiten:**
- Type constraints mit `:` Syntax
- Constraints können Classes oder Interfaces sein
- Mehrere Constraints mit `&` möglich: `<T:Interface1 & Interface2>`

**Weiterführende Links:**
- [Haxe Documentation - Type Constraints](https://haxe.org/manual/type-system-type-parameter-constraints.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Bounded Type Parameters: interface constraints
interface Comparable a where
    compareTo : a -> a -> Ordering

maxValue : Comparable a => a -> a -> a
maxValue a b = case compareTo a b of
    GT => a
    _  => b

-- Oder mit Standard-Constraints
maxNum : Ord a => Num a => a -> a -> a
maxNum a b = if a > b then a else b
```

**Besonderheiten:**
- Interface constraints mit `Constraint =>` Syntax
- Interfaces definieren Constraints
- Mehrere Constraints möglich

**Weiterführende Links:**
- [Idris Documentation - Interfaces](https://idris2.readthedocs.io/en/latest/tutorial/interfaces.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Bounded Type Parameters (seit Java 5)
// Benötigt: import java.util.List;

// Upper Bound mit extends
class Calculator<T extends Comparable<T>> {
    public T max(T a, T b) {
        return a.compareTo(b) > 0 ? a : b;
    }
}

// Mehrere Bounds mit &
class Processor<T extends Comparable<T> & Serializable> {
    public T process(T item) {
        return item;
    }
}

Calculator<Integer> calc = new Calculator<>();
int result = calc.max(5, 3); // 5
```

**Besonderheiten:**
- Type Constraints seit Java 5
- Constraints mit `extends` Syntax
- Constraints können Klassen oder Interfaces sein
- Mehrere Interfaces mit `&` kombiniert
- Genau eine Klasse als Bound erlaubt (muss zuerst stehen)

**Weiterführende Links:**
- [Oracle Java Documentation - Bounded Type Parameters](https://docs.oracle.com/javase/tutorial/java/generics/bounded.html)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Bounded Type Parameters: type constraints mit where
abstract type Comparable end

function max_value(a::T, b::T) where T <: Comparable
    # T muss von Comparable abgeleitet sein
    return a > b ? a : b
end

# Oder mit Traits
function max_num(a::T, b::T) where {T <: Number}
    return a > b ? a : b
end
```

**Besonderheiten:**
- Type constraints mit `<:` Syntax in `where`-Klauseln
- Constraints können Abstract types oder Concrete types sein
- Mehrere Constraints möglich

**Weiterführende Links:**
- [Julia Documentation - Type Constraints](https://docs.julialang.org/en/v1/manual/types/#Type-Constraints)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Bounded Type Parameters: type constraints
interface Comparable<T> {
    fun compareTo(other: T): Int
}

class Calculator<T : Comparable<T>> {
    fun max(a: T, b: T): T {
        return if (a.compareTo(b) > 0) a else b
    }
}

class NumberCalculator<T : Number> {
    fun add(a: T, b: T): Double {
        return a.toDouble() + b.toDouble()
    }
}
```

**Besonderheiten:**
- Type constraints mit `:` Syntax
- Constraints können Classes oder Interfaces sein
- Mehrere Constraints mit `where`-Klausel

**Weiterführende Links:**
- [Kotlin Documentation - Upper Bounds](https://kotlinlang.org/docs/generics.html#upper-bounds)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Bounded Type Parameters: Type Class Constraints
class Addable (α : Type) where
  add : α → α → α

class Showable (α : Type) where
  show : α → String

-- Funktion mit Type Class Constraint
def addValues [Addable α] (a b : α) : α :=
  Addable.add a b

-- Mehrere Constraints
def addAndShow [Addable α] [Showable α] (a b : α) : String :=
  Showable.show (Addable.add a b)

-- Instanzen
instance : Addable Nat where
  add := Nat.add

instance : Showable Nat where
  show := toString
```

**Besonderheiten:**
- Type Class Constraints mit `[ClassName α]` Syntax
- Mehrere Constraints in eckigen Klammern
- Constraints werden automatisch aufgelöst (Instance Resolution)
- Unterstützt auch `variable`-Deklarationen für wiederverwendbare Constraints

**Weiterführende Links:**
- [Lean 4 Documentation - Type Classes](https://lean-lang.org/theorem_proving_in_lean4/type_classes.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```mercury
% Bounded Type Parameters: Type Class Constraints
:- typeclass comparable(T) where [
    pred less_than(T::in, T::in) is semidet
].

:- typeclass showable(T) where [
    pred show(T::in, string::out) is det
].

% Prädikat mit einem Constraint
:- pred max_value(T::in, T::in, T::out) is det <= comparable(T).
max_value(A, B, Max) :-
    ( if less_than(A, B) then Max = B else Max = A ).

% Prädikat mit mehreren Constraints
:- pred max_and_show(T::in, T::in, string::out) is det <= (comparable(T), showable(T)).
max_and_show(A, B, S) :-
    max_value(A, B, Max),
    show(Max, S).

% Instanzen
:- instance comparable(int) where [
    less_than(A, B) :- A < B
].
:- instance showable(int) where [
    show(I, S) :- string.int_to_string(I, S)
].

:- pred main(io::di, io::uo) is det.
main(!IO) :-
    max_value(3, 7, Max),
    max_and_show(3, 7, S),
    io.write_int(Max, !IO), io.nl(!IO),
    io.write_string(S, !IO), io.nl(!IO).
```

**Besonderheiten:**
- Bounded Type Parameters werden in Mercury durch Type Class Constraints realisiert.
- Constraints werden mit `<= (Constraint1, Constraint2)` in der Prädikatsdeklaration angegeben.
- Type Classes definieren die Operationen, die ein Typ unterstützen muss.
- Das Constraint-System ist ähnlich wie in Haskell, aber mit Mercury-spezifischen Modi und Determinismus-Deklarationen.

**Weiterführende Links:**
- [The Mercury Language Reference Manual - Type Classes](https://www.mercurylang.org/documentation/reference.html#Type_classes)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Bounded Type Parameters: type constraints
type
  Comparable = concept a
    (a < a) is bool

proc maxValue[T: Comparable](a, b: T): T =
  if a < b:
    b
  else:
    a

# Oder mit Interfaces
type
  Addable = concept a
    (a + a) is type(a)

proc add[T: Addable](a, b: T): T =
  a + b
```

**Besonderheiten:**
- Type constraints mit Concepts
- Concepts definieren erforderliche Operationen
- Compile-time Typ-Prüfung

**Weiterführende Links:**
- [Nim Documentation - Concepts](https://nim-lang.org/docs/manual.html#concepts)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Bounded Type Parameters: generic constraints (seit Delphi 2009, Free Pascal 2.2)
type
  IComparable<T> = interface
    function CompareTo(other: T): Integer;
  end;
  
  TCalculator<T: IComparable<T>> = class
  public
    function Max(a, b: T): T;
  end;
  
  TNumberCalculator<T: TObject> = class
  public
    function Add(a, b: T): T;
  end;
```

**Besonderheiten:**
- Generic constraints mit `:` Syntax
- Constraints können Classes oder Interfaces sein
- Mehrere Constraints möglich

**Weiterführende Links:**
- [Free Pascal Documentation - Generic Constraints](https://www.freepascal.org/docs-html/ref/refse57.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Bounded Type Parameters: nicht direkt unterstützt *)
(* Workaround: Funktoren mit Modul-Signaturen *)
module type Comparable = sig
    type t
    val compare : t -> t -> int
end

module Calculator (C : Comparable) = struct
    let max a b = if C.compare a b > 0 then a else b
end

module IntComparable = struct
    type t = int
    let compare = compare
end

module IntCalculator = Calculator(IntComparable)
```

**Besonderheiten:**
- OCaml hat keine direkten bounded type parameters
- Funktoren mit Modul-Signaturen als Workaround
- Module definieren Constraints

**Weiterführende Links:**
- [OCaml Documentation - Functors](https://ocaml.org/manual/functors.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Bounded Type Parameters: nicht direkt unterstützt
// Workaround: Type-Assertions zur Compile-Zeit
Calculator :: struct(T: typeid) where intrinsics.type_is_numeric(T) {
    // T muss numerisch sein
}

make_calculator :: proc(T: typeid) -> Calculator(T) where intrinsics.type_is_numeric(T) {
    return Calculator(T){}
}
```

**Besonderheiten:**
- Odin hat keine direkten bounded type parameters
- Type-Assertions mit `where`-Klauseln
- Intrinsics für Type-Prüfung

**Weiterführende Links:**
- [Odin Documentation - Generics](https://odin-lang.org/docs/overview/#generics)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Bounded Type Parameters: type class constraints
class Comparable a where
    compareTo :: a -> a -> Ordering

maxValue :: forall a. Comparable a => a -> a -> a
maxValue a b = case compareTo a b of
    GT -> a
    _  -> b

-- Mit Standard-Constraints
maxOf :: forall a. Ord a => a -> a -> a
maxOf a b = if a > b then a else b
```

**Besonderheiten:**
- Type class constraints mit `=>` Syntax
- Type classes definieren Constraints
- Mehrere Constraints mit `=>` Ketten: `Ord a => Show a => a -> String`

**Weiterführende Links:**
- [PureScript Documentation - Type Classes](https://github.com/purescript/documentation/blob/master/language/Type-Classes.md)

</TabItem>
<TabItem value="python" label="Python">

```python
# Bounded Type Parameters: type constraints (seit Python 3.8)
from typing import TypeVar, Protocol

T = TypeVar('T')

class Comparable(Protocol[T]):
    def compare_to(self, other: T) -> int: ...

class Calculator(Generic[T]):
    def max(self, a: T, b: T) -> T:
        # Type checker prüft, ob T Comparable erfüllt
        return a if a.compare_to(b) > 0 else b

# Oder mit TypeVar bounds
T = TypeVar('T', bound=Comparable)

class NumberCalculator(Generic[T]):
    def add(self, a: T, b: T) -> T:
        return a + b  # Type checker prüft, ob T + unterstützt
```

**Besonderheiten:**
- Type constraints seit Python 3.8 (typing module)
- Constraints mit `bound=` oder `Protocol`
- Type hints zur Laufzeit nicht erzwungen

**Weiterführende Links:**
- [Python Documentation - TypeVar](https://docs.python.org/3/library/typing.html#typing.TypeVar)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Bounded Type Parameters: trait bounds
trait Comparable {
    fn compare_to(&self, other: &Self) -> std::cmp::Ordering;
}

struct Calculator<T: Comparable> {
    _phantom: std::marker::PhantomData<T>,
}

impl<T: Comparable> Calculator<T> {
    fn max(&self, a: T, b: T) -> T {
        match a.compare_to(&b) {
            std::cmp::Ordering::Greater => a,
            _ => b,
        }
    }
}

// Oder mit where-Klauseln
struct NumberCalculator<T> where T: std::ops::Add<Output = T> {
    _phantom: std::marker::PhantomData<T>,
}
```

**Besonderheiten:**
- Trait bounds mit `:` oder `where`-Klauseln
- Traits definieren Constraints
- Mehrere Constraints möglich
- Lifetimes als spezielle Constraints

**Weiterführende Links:**
- [The Rust Book - Trait Bounds](https://doc.rust-lang.org/book/ch10-02-traits.html#trait-bounds)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Bounded Type Parameters: type bounds
trait Comparable[T] {
    def compareTo(other: T): Int
}

class Calculator[T <: Comparable[T]] {
    def max(a: T, b: T): T = {
        if (a.compareTo(b) > 0) a else b
    }
}

class NumberCalculator[T <: Number] {
    def add(a: T, b: T): Double = {
        a.doubleValue() + b.doubleValue()
    }
}
```

**Besonderheiten:**
- Type bounds mit `<:` (upper bound) oder `>:` (lower bound)
- Constraints können Classes oder Traits sein
- Mehrere Constraints möglich
- Variance annotations (`+`, `-`)

**Weiterführende Links:**
- [Scala Documentation - Upper Type Bounds](https://docs.scala-lang.org/tour/upper-type-bounds.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Bounded Type Parameters: type constraints
protocol Comparable {
    func compareTo(_ other: Self) -> ComparisonResult
}

struct Calculator<T: Comparable> {
    func max(_ a: T, _ b: T) -> T {
        return a.compareTo(b) == .orderedDescending ? a : b
    }
}

struct NumberCalculator<T: Numeric> {
    func add(_ a: T, _ b: T) -> T {
        return a + b
    }
}
```

**Besonderheiten:**
- Type constraints mit `:` Syntax
- Constraints können Protocols oder Classes sein
- Mehrere Constraints möglich
- Associated types für Protocols

**Weiterführende Links:**
- [Swift Documentation - Type Constraints](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/generics/#type-constraints)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Bounded Type Parameters: type constraints
interface Comparable<T> {
    compareTo(other: T): number;
}

class Calculator<T extends Comparable<T>> {
    max(a: T, b: T): T {
        return a.compareTo(b) > 0 ? a : b;
    }
}

class NumberCalculator<T extends number> {
    add(a: T, b: T): number {
        return a + b;
    }
}
```

**Besonderheiten:**
- Type constraints mit `extends` Syntax
- Constraints können Interfaces, Classes oder Type aliases sein
- Mehrere Constraints möglich
- Type erasure zur Laufzeit (JavaScript)

**Weiterführende Links:**
- [TypeScript Handbook - Generic Constraints](https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-constraints)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Bounded Type Parameters: type constraints
Public Interface IComparable(Of T)
    Function CompareTo(other As T) As Integer
End Interface

Public Class Calculator(Of T As IComparable(Of T))
    Public Function Max(a As T, b As T) As T
        Return If(a.CompareTo(b) > 0, a, b)
    End Function
End Class

Public Class NumberCalculator(Of T As Structure)
    Public Function Add(a As T, b As T) As T
        ' T muss ein Value Type sein
        Return CType(CObj(a), T)
    End Function
End Class
```

**Besonderheiten:**
- Type constraints mit `As` Syntax
- Constraints: `Class`, `Structure`, `New()`, Interfaces, Base classes
- Mehrere Constraints möglich

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Type Constraints](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/data-types/generic-types#constraints)

</TabItem>
<TabItem value="v" label="V">

```v
// Bounded Type Parameters: type constraints (seit V 0.3)
interface Comparable[T] {
    compare_to(other T) int
}

struct Calculator[T] {
    // T muss Comparable implementieren
}

fn (c Calculator[T]) max(a T, b T) T {
    if a.compare_to(b) > 0 {
        return a
    }
    return b
}
```

**Besonderheiten:**
- Type constraints mit Interfaces
- Type-Parameter können Constraints haben
- Compile-time Typ-Prüfung

**Weiterführende Links:**
- [V Documentation - Generics](https://github.com/vlang/v/blob/master/doc/docs.md#generics)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Bounded Type Parameters: nicht direkt unterstützt
// Workaround: comptime type checks
fn Calculator(comptime T: type) type {
    // Prüfe zur Compile-Zeit, ob T die erforderlichen Operationen hat
    comptime {
        _ = @typeInfo(T);
        // Manuelle Prüfung erforderlich
    }
    return struct {
        pub fn add(a: T, b: T) T {
            return a + b;  // Compiler prüft zur Compile-Zeit
        }
    };
}
```

**Besonderheiten:**
- Zig hat keine direkten bounded type parameters
- Comptime type checks als Workaround
- Manuelle Type-Prüfung erforderlich

**Weiterführende Links:**
- [Zig Documentation - Generic Data Structures](https://ziglang.org/documentation/0.11.0/#Generic-Data-Structures)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Bounded Type Parameters mit Abilities
maxOf : a, a -> a where a implements Ord
maxOf = \x, y ->
    if x > y then x else y
```

**Besonderheiten:**
- `where a implements Ability` für Type Constraints
- Abilities sind ähnlich wie Type Classes oder Traits

**Weiterführende Links:**
- [Roc Documentation - Abilities](https://www.roc-lang.org/tutorial#abilities)

</TabItem>
</FilteredTabs>


## 3.7.4. Template Specialization

Spezielle Implementierungen von Templates für bestimmte Typen oder Typ-Kombinationen.

### Sprachen {#sprachen}

<FilteredTabs availableTabs={['carbon', 'cpp', 'd', 'nim', 'zig']} orangeTabs={['c']}>
<TabItem value="c" label="C">

```c
// Template Specialization: nicht direkt unterstützt
// Workaround: Makros mit Typ-Prüfung
#define SWAP_TYPE(T) \
    void swap_##T(T* a, T* b) { \
        T temp = *a; \
        *a = *b; \
        *b = temp; \
    }

SWAP_TYPE(int)
SWAP_TYPE(double)

// Spezialisierung für Pointer
#define SWAP_PTR(T) \
    void swap_ptr_##T(T** a, T** b) { \
        T* temp = *a; \
        *a = *b; \
        *b = temp; \
    }
```

**Besonderheiten:**
- C hat keine direkten Template Specializations
- Makros können spezialisierte Versionen simulieren
- Keine vollständige Type-Sicherheit

**Weiterführende Links:**
- [C Standard - Preprocessing](https://en.cppreference.com/w/c/preprocessor)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Template Specialization: specialization (geplant)
generic class Container(T:! type) {
    fn get(self: Self) -> T {
        // Generic implementation
    }
}

// Spezialisierung für bestimmte Typen (Syntax noch nicht final)
// class Container(String) {
//     fn get(self: Self) -> String {
//         // Specialized implementation
//     }
// }
```

**Besonderheiten:**
- Template Specialization ist geplant
- Experimentelle Sprache, Syntax kann sich noch ändern
- Aktuell noch nicht vollständig implementiert

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Template Specialization: explicit specialization
template<typename T>
class Container {
public:
    void process(T value) {
        // Generic implementation
        std::cout << "Generic: " << value << std::endl;
    }
};

// Explicit specialization für int
template<>
class Container<int> {
public:
    void process(int value) {
        // Specialized implementation
        std::cout << "Specialized for int: " << value << std::endl;
    }
};

// Partial specialization
template<typename T>
class Container<T*> {
public:
    void process(T* value) {
        // Specialized for pointers
        std::cout << "Pointer specialization" << std::endl;
    }
};
```

**Besonderheiten:**
- Explicit specialization mit `template<>`
- Partial specialization für Teil-Typen möglich
- Function template specialization möglich
- SFINAE für Template-Spezialisierung

**Weiterführende Links:**
- [cppreference.com - Template Specialization](https://en.cppreference.com/w/cpp/language/template_specialization)

</TabItem>
<TabItem value="d" label="D">

```d
// Template Specialization: template specialization
template Container(T) {
    void process(T value) {
        writeln("Generic: ", value);
    }
}

// Explicit specialization für int
template Container(int) {
    void process(int value) {
        writeln("Specialized for int: ", value);
    }
}

// Partial specialization mit is() expressions
template Container(T) if (isPointer!T) {
    void process(T value) {
        writeln("Pointer specialization");
    }
}
```

**Besonderheiten:**
- Template specialization mit spezifischen Typen
- Partial specialization mit `if`-Klauseln und `is()` expressions
- Mehrere Specializations möglich

**Weiterführende Links:**
- [D Language Specification - Template Specialization](https://dlang.org/spec/template.html#template-specialization)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Template Specialization: generics mit when-Klauseln
proc process[T](value: T) =
    when T is int:
        echo "Specialized for int: ", value
    elif T is string:
        echo "Specialized for string: ", value
    else:
        echo "Generic: ", value

process(42)        # Specialized for int
process("Hallo")   # Specialized for string
process(3.14)      # Generic
```

**Besonderheiten:**
- Specialization mit `when`-Klauseln zur Compile-Zeit
- Pattern matching auf Typen
- Compile-time Polymorphismus

**Weiterführende Links:**
- [Nim Documentation - When Statement](https://nim-lang.org/docs/manual.html#when-statement)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Template Specialization: comptime type checks
fn process(comptime T: type, value: T) void {
    if (T == i32) {
        std.debug.print("Specialized for i32: {}\n", .{value});
    } else if (T == []const u8) {
        std.debug.print("Specialized for string: {s}\n", .{value});
    } else {
        std.debug.print("Generic: {}\n", .{value});
    }
}

process(i32, 42);           // Specialized for i32
process([]const u8, "Hallo"); // Specialized for string
process(f64, 3.14);         // Generic
```

**Besonderheiten:**
- Specialization mit `comptime` type checks
- Pattern matching auf Typen zur Compile-Zeit
- Compile-time Polymorphismus

**Weiterführende Links:**
- [Zig Documentation - Comptime](https://ziglang.org/documentation/0.11.0/#comptime)

</TabItem>
</FilteredTabs>


## 3.7.5. Concepts (C++20)

Named requirements für Template-Parameter, die Constraints und Anforderungen an Typen definieren.

### Sprachen {#sprachen}

<FilteredTabs availableTabs={['carbon', 'cpp', 'd', 'haskell', 'lean4', 'mercury', 'nim', 'rust', 'scala']} orangeTabs={['zig']}>
<TabItem value="carbon" label="Carbon">

```cpp
// Concepts: interfaces als constraints (geplant)
interface Addable {
    fn add(self: Self, other: Self) -> Self;
}

generic class Calculator(T:! Addable) {
    fn add(self: Self, a: T, b: T) -> T {
        return a.add(b);
    }
}
```

**Besonderheiten:**
- Interfaces als Concepts (geplant)
- Experimentelle Sprache, Syntax kann sich noch ändern
- Ähnlich zu C++20 Concepts

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Concepts: C++20 Concepts
#include <concepts>

template<typename T>
concept Addable = requires(T a, T b) {
    { a + b } -> std::convertible_to<T>;
};

template<typename T>
concept Numeric = std::integral<T> || std::floating_point<T>;

template<Addable T>
T add(T a, T b) {
    return a + b;
}

template<Numeric T>
T multiply(T a, T b) {
    return a * b;
}

// Verwendung
int result1 = add(5, 3);           // OK: int erfüllt Addable
double result2 = multiply(2.5, 3.0); // OK: double erfüllt Numeric
```

**Besonderheiten:**
- Concepts seit C++20
- `concept`-Keyword für Definition
- `requires`-Klauseln für Anforderungen
- Kombinierbar mit `&&` und `||`
- Standard-Concepts in `<concepts>` Header

**Weiterführende Links:**
- [cppreference.com - Concepts](https://en.cppreference.com/w/cpp/language/constraints)

</TabItem>
<TabItem value="d" label="D">

```d
// Concepts: template constraints (ähnlich zu Concepts)
interface Addable(T) {
    T opBinary(string op : "+")(T rhs);
}

template isAddable(T) {
    enum isAddable = is(T : Addable!T);
}

class Calculator(T) if (isAddable!T) {
    T add(T a, T b) {
        return a + b;
    }
}

// Oder mit is() expressions
class NumericCalculator(T) if (isNumeric!T) {
    T multiply(T a, T b) {
        return a * b;
    }
}
```

**Besonderheiten:**
- Template constraints ähnlich zu Concepts
- `is()` expressions für Type-Prüfung
- Interfaces können als Concepts verwendet werden
- Compile-time Typ-Prüfung

**Weiterführende Links:**
- [D Language Specification - Template Constraints](https://dlang.org/spec/template.html#template-constraints)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Concepts: type classes (ähnlich zu Concepts)
class Addable a where
    add :: a -> a -> a

class Numeric a where
    multiply :: a -> a -> a

instance Addable Int where
    add = (+)

instance Numeric Int where
    multiply = (*)

-- Verwendung
result1 :: Int
result1 = add 5 3

result2 :: Int
result2 = multiply 2 3
```

**Besonderheiten:**
- Type classes sind ähnlich zu Concepts
- Definieren Anforderungen an Typen
- Instanzen implementieren Concepts für konkrete Typen
- Mehrere Constraints möglich

**Weiterführende Links:**
- [Haskell Documentation - Type Classes](https://www.haskell.org/tutorial/classes.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Concepts: Type Classes als Constraints
class Addable (α : Type) where
  add : α → α → α

class Numeric (α : Type) extends Addable α where
  multiply : α → α → α

-- Instanzen implementieren Concepts für konkrete Typen
instance : Addable Int where
  add := Int.add

instance : Numeric Int where
  multiply := Int.mul

-- Verwendung mit Constraints
def sum [Addable α] (a b : α) : α :=
  Addable.add a b

def product [Numeric α] (a b : α) : α :=
  Numeric.multiply a b

def result1 : Int := sum 5 3           -- 8
def result2 : Int := product 2 3       -- 6
```

**Besonderheiten:**
- Type Classes definieren benannte Anforderungen an Typen (ähnlich zu Concepts)
- `extends` für Type-Class-Vererbung
- Instanzen implementieren Concepts für konkrete Typen
- Automatische Instance Resolution zur Compile-Zeit

**Weiterführende Links:**
- [Lean 4 Documentation - Type Classes](https://lean-lang.org/theorem_proving_in_lean4/type_classes.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```mercury
% Concepts: Type Classes als benannte Anforderungen
:- typeclass addable(T) where [
    func add(T, T) = T
].

:- typeclass numeric(T) <= addable(T) where [
    func multiply(T, T) = T
].

% Instanzen implementieren Concepts für konkrete Typen
:- instance addable(int) where [
    add(A, B) = A + B
].
:- instance numeric(int) where [
    multiply(A, B) = A * B
].

% Verwendung mit Constraints
:- func sum(T, T) = T <= addable(T).
sum(A, B) = add(A, B).

:- func product(T, T) = T <= numeric(T).
product(A, B) = multiply(A, B).

:- pred main(io::di, io::uo) is det.
main(!IO) :-
    Result1 = sum(5, 3),
    Result2 = product(2, 3),
    io.write_int(Result1, !IO), io.nl(!IO),
    io.write_int(Result2, !IO), io.nl(!IO).
```

**Besonderheiten:**
- Type Classes definieren benannte Anforderungen an Typen, äquivalent zu Concepts.
- Superclass-Constraints mit `<= superclass(T)` ermöglichen Vererbung von Anforderungen.
- Instanzen implementieren die geforderten Funktionen/Prädikate für konkrete Typen.
- Constraints in Funktions-/Prädikatsdeklarationen mit `<= constraint(T)`.

**Weiterführende Links:**
- [The Mercury Language Reference Manual - Type Classes](https://www.mercurylang.org/documentation/reference.html#Type_classes)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Concepts: concepts (seit Nim 1.0)
type
  Addable = concept a, b
    (a + b) is type(a)

  Numeric = concept a
    a is int or a is float

proc add[T: Addable](a, b: T): T =
  a + b

proc multiply[T: Numeric](a, b: T): T =
  a * b

# Verwendung
let result1 = add(5, 3)        # OK: int erfüllt Addable
let result2 = multiply(2.5, 3.0) # OK: float erfüllt Numeric
```

**Besonderheiten:**
- Concepts seit Nim 1.0
- Definieren erforderliche Operationen
- Compile-time Typ-Prüfung
- Pattern matching auf Typen

**Weiterführende Links:**
- [Nim Documentation - Concepts](https://nim-lang.org/docs/manual.html#concepts)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Concepts: traits (ähnlich zu Concepts)
trait Addable {
    fn add(self, other: Self) -> Self;
}

trait Numeric: Addable + std::ops::Mul<Output = Self> {
    fn multiply(self, other: Self) -> Self {
        self * other
    }
}

fn add<T: Addable>(a: T, b: T) -> T {
    a.add(b)
}

fn multiply<T: Numeric>(a: T, b: T) -> T {
    a.multiply(b)
}

// Verwendung
let result1 = add(5, 3);           // OK: i32 erfüllt Addable
let result2 = multiply(2.5, 3.0); // OK: f64 erfüllt Numeric
```

**Besonderheiten:**
- Traits sind ähnlich zu Concepts
- Definieren Anforderungen an Typen
- Implementierungen erfüllen Traits
- Mehrere Trait bounds möglich

**Weiterführende Links:**
- [The Rust Book - Traits](https://doc.rust-lang.org/book/ch10-02-traits.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Concepts: type classes (ähnlich zu Concepts)
trait Addable[T] {
    def add(a: T, b: T): T
}

trait Numeric[T] extends Addable[T] {
    def multiply(a: T, b: T): T
}

implicit object IntAddable extends Addable[Int] {
    def add(a: Int, b: Int): Int = a + b
}

implicit object IntNumeric extends Numeric[Int] {
    def add(a: Int, b: Int): Int = a + b
    def multiply(a: Int, b: Int): Int = a * b
}

def add[T](a: T, b: T)(implicit ev: Addable[T]): T = {
    ev.add(a, b)
}

// Verwendung
val result1 = add(5, 3)        // OK: Int erfüllt Addable
val result2 = multiply(2, 3)   // OK: Int erfüllt Numeric
```

**Besonderheiten:**
- Type classes sind ähnlich zu Concepts
- Implicit parameters für Type classes
- Definieren Anforderungen an Typen
- Mehrere Constraints möglich

**Weiterführende Links:**
- [Scala Documentation - Type Classes](https://docs.scala-lang.org/tour/implicit-parameters.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Concepts: nicht direkt unterstützt
// Workaround: comptime type checks
fn isAddable(comptime T: type) bool {
    return @hasDecl(T, "add");
}

fn add(comptime T: type, a: T, b: T) T {
    comptime {
        if (!isAddable(T)) {
            @compileError("Type must implement add");
        }
    }
    return a.add(b);
}

// Oder mit Interfaces (geplant)
// const Addable = struct {
//     pub fn add(self: @This(), other: @This()) @This();
// };
```

**Besonderheiten:**
- Zig hat keine direkten Concepts
- Comptime type checks als Workaround
- Interfaces sind geplant
- Manuelle Type-Prüfung erforderlich

**Weiterführende Links:**
- [Zig Documentation - Comptime](https://ziglang.org/documentation/0.11.0/#comptime)

</TabItem>
</FilteredTabs>


## 3.7.6. Variance (Covariance, Contravariance, Invariance)

Regeln, die bestimmen, wie Subtyp-Beziehungen zwischen generischen Typen mit Subtyp-Beziehungen ihrer Type-Parameter zusammenhängen.

### Sprachen {#sprachen}

<FilteredTabs availableTabs={['csharp', 'fsharp', 'groovy', 'haskell', 'java', 'kotlin', 'objective-c', 'ocaml', 'purescript', 'python', 'scala', 'typescript', 'vbnet']} yellowTabs={['dart', 'php']} orangeTabs={['cpp', 'go', 'nim', 'rust', 'swift']}>
<TabItem value="csharp" label="C#">

```csharp
// Variance: Covariance und Contravariance (seit C# 4.0)
class Animal { }
class Dog : Animal { }

// Covariance: out keyword
interface IProducer<out T> {
    T Get();
}

// Contravariance: in keyword
interface IConsumer<in T> {
    void Accept(T item);
}

// Invariance: keine Keywords
interface IContainer<T> {
    void Set(T item);
    T Get();
}

// Verwendung
IProducer<Dog> dogProducer = null;
IProducer<Animal> animalProducer = dogProducer; // OK: Covariance

IConsumer<Animal> animalConsumer = null;
IConsumer<Dog> dogConsumer = animalConsumer; // OK: Contravariance

IContainer<Dog> dogContainer = null;
// IContainer<Animal> animalContainer = dogContainer; // Fehler: Invariance
```

**Besonderheiten:**
- Covariance mit `out` keyword (seit C# 4.0)
- Contravariance mit `in` keyword (seit C# 4.0)
- Nur für Interfaces und Delegates
- Arrays sind kovariant (unsafe)

**Weiterführende Links:**
- [Microsoft C# Documentation - Variance](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/covariance-contravariance/)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Variance: nicht direkt unterstützt
// Templates sind invariant
class Animal { };
class Dog : public Animal { };

template<typename T>
class Container {
public:
    void set(T item) { }
    T get() { return T(); }
};

// Keine automatische Konvertierung
Container<Dog> dogContainer;
// Container<Animal> animalContainer = dogContainer; // Fehler: Invariance

// Workaround: explizite Konvertierung oder Polymorphismus
template<typename T>
class Container {
public:
    virtual void set(T* item) = 0;
    virtual T* get() = 0;
};
```

**Besonderheiten:**
- C++ Templates sind invariant
- Keine automatische Variance-Unterstützung
- Polymorphismus mit Pointers/References als Workaround
- Concepts können Constraints definieren

**Weiterführende Links:**
- [cppreference.com - Templates](https://en.cppreference.com/w/cpp/language/templates)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Variance: Covariance (seit Dart 2.0)
class Animal {}
class Dog extends Animal {}

// Generics sind kovariant
List<Dog> dogs = [Dog()];
List<Animal> animals = dogs; // OK: Covariance

// Contravariance nicht direkt unterstützt
// Invariance für mutable Collections
class Container<T> {
  T? _value;
  void set(T value) { _value = value; }
  T? get() => _value;
}

Container<Dog> dogContainer = Container<Dog>();
// Container<Animal> animalContainer = dogContainer; // Fehler: Invariance
```

**Besonderheiten:**
- Generics sind kovariant für read-only Collections
- Mutable Collections sind invariant
- Contravariance nicht direkt unterstützt
- Type erasure zur Laufzeit

**Weiterführende Links:**
- [Dart Documentation - Generics](https://dart.dev/language/generics)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Variance über .NET-Interfaces
// Benötigt: System.Collections.Generic
type Animal() = class end
type Dog() = inherit Animal()

// IEnumerable<'T> ist covariant (deklariert in .NET mit out-Annotation)
let dogs: seq<Dog> = seq { yield Dog() }
let animals: seq<Animal> = dogs  // OK: Covariance

// IComparable<'T> ist contravariant (deklariert in .NET mit in-Annotation)
// F# selbst deklariert Varianz nicht direkt auf eigenen Interfaces
```

**Besonderheiten:**
- Varianz wird über .NET CLR-Interfaces unterstützt (z.B. `IEnumerable<out T>`, `IComparable<in T>`)
- F# konsumiert variante Interfaces aus .NET
- Nur für Interfaces und Delegates
- Compile-time Typ-Prüfung

**Weiterführende Links:**
- [F# Documentation - Generics](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/generics/)

</TabItem>

<TabItem value="go" label="Go">

```go
// Variance: nicht direkt unterstützt (seit Go 1.18)
type Animal struct{}
type Dog struct{ Animal }

// Generics sind invariant
type Container[T any] struct {
    value T
}

func NewContainer[T any](value T) Container[T] {
    return Container[T]{value: value}
}

// Keine automatische Konvertierung
dogContainer := NewContainer(Dog{})
// animalContainer := Container[Animal](dogContainer) // Fehler: Invariance
```

**Besonderheiten:**
- Generics sind invariant (seit Go 1.18)
- Keine automatische Variance-Unterstützung
- Interfaces können Polymorphismus ermöglichen
- Type erasure zur Laufzeit

**Weiterführende Links:**
- [Go Language Specification - Type Parameters](https://go.dev/ref/spec#Type_parameters)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Variance: Wildcards (Java-kompatibel)
class Animal {}
class Dog extends Animal {}

// Covariance: ? extends
List<? extends Animal> animals = new ArrayList<Dog>()

// Contravariance: ? super
List<? super Dog> dogs = new ArrayList<Animal>()

// Invariance: keine Wildcards
List<Dog> dogList = new ArrayList<Dog>()
// List<Animal> animalList = dogList // Fehler: Invariance
```

**Besonderheiten:**
- Wildcards für Variance (Java-kompatibel)
- Covariance mit `? extends`
- Contravariance mit `? super`
- Generics sind ohne Wildcards invariant

**Weiterführende Links:**
- [Groovy Documentation - Generics](https://groovy-lang.org/objectorientation.html#generics)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Variance: Functor (Covariance) und Contravariant
data Animal = Animal
data Dog = Dog Animal

-- Covariance: Functor
class Functor f where
    fmap :: (a -> b) -> f a -> f b

-- Contravariance: Contravariant
class Contravariant f where
    contramap :: (b -> a) -> f a -> f b

-- Invariance: keine automatische Konvertierung
data Container a = Container a

-- Keine automatische Konvertierung
dogContainer :: Container Dog
dogContainer = Container Dog
-- animalContainer :: Container Animal = dogContainer -- Fehler: Invariance
```

**Besonderheiten:**
- Functor für Covariance
- Contravariant für Contravariance
- Type classes definieren Variance
- Compile-time Typ-Prüfung

**Weiterführende Links:**
- [Haskell Documentation - Functor](https://hackage.haskell.org/package/base-4.19.0.0/docs/Data-Functor.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Variance: Wildcards (seit Java 5)
class Animal { }
class Dog extends Animal { }

// Covariance: ? extends
List<? extends Animal> animals = new ArrayList<Dog>();

// Contravariance: ? super
List<? super Dog> dogs = new ArrayList<Animal>();

// Invariance: keine Wildcards
List<Dog> dogList = new ArrayList<Dog>();
// List<Animal> animalList = dogList; // Fehler: Invariance
```

**Besonderheiten:**
- Wildcards für Variance (seit Java 5)
- Covariance mit `? extends`
- Contravariance mit `? super`
- Generics sind invariant ohne Wildcards
- Type erasure zur Laufzeit

**Weiterführende Links:**
- [Oracle Java Documentation - Wildcards](https://docs.oracle.com/javase/tutorial/java/generics/wildcards.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Variance: Declaration-site variance (seit Kotlin 1.0)
open class Animal
class Dog : Animal()

// Covariance: out keyword
interface Producer<out T> {
    fun get(): T
}

// Contravariance: in keyword
interface Consumer<in T> {
    fun accept(item: T)
}

// Invariance: keine Keywords
interface Container<T> {
    fun set(item: T)
    fun get(): T
}

// Verwendung
val dogProducer: Producer<Dog> = object : Producer<Dog> {
    override fun get() = Dog()
}
val animalProducer: Producer<Animal> = dogProducer // OK: Covariance

val animalConsumer: Consumer<Animal> = object : Consumer<Animal> {
    override fun accept(item: Animal) {}
}
val dogConsumer: Consumer<Dog> = animalConsumer // OK: Contravariance
```

**Besonderheiten:**
- Declaration-site variance mit `out` und `in` (seit Kotlin 1.0)
- Use-site variance mit `out` und `in` möglich
- Covariance mit `out` keyword
- Contravariance mit `in` keyword

**Weiterführende Links:**
- [Kotlin Documentation - Variance](https://kotlinlang.org/docs/generics.html#variance)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Variance: nicht direkt unterstützt
type
  Animal = object of RootObj
  Dog = object of Animal

# Generics sind invariant
type Container[T] = object
  value: T

proc newContainer[T](value: T): Container[T] =
  Container[T](value: value)

# Keine automatische Konvertierung
var dogContainer = newContainer(Dog())
# var animalContainer: Container[Animal] = dogContainer # Fehler: Invariance
```

**Besonderheiten:**
- Generics sind invariant
- Keine automatische Variance-Unterstützung
- Polymorphismus über Vererbung mit `ref object of` möglich
- Compile-time Typ-Prüfung

**Weiterführende Links:**
- [Nim Documentation - Generics](https://nim-lang.org/docs/manual.html#generics)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Variance: Lightweight Generics (seit Xcode 7)
@interface Animal : NSObject
@end

@interface Dog : Animal
@end

// Covariance: __covariant
@interface Producer<__covariant T> : NSObject
- (T)get;
@end

// Contravariance: __contravariant
@interface Consumer<__contravariant T> : NSObject
- (void)accept:(T)item;
@end

// Verwendung
Producer<Dog *> *dogProducer = nil;
Producer<Animal *> *animalProducer = dogProducer; // OK: Covariance

Consumer<Animal *> *animalConsumer = nil;
Consumer<Dog *> *dogConsumer = animalConsumer; // OK: Contravariance
```

**Besonderheiten:**
- Lightweight Generics mit Variance-Annotationen (seit Xcode 7)
- Covariance mit `__covariant`
- Contravariance mit `__contravariant`
- Type erasure zur Laufzeit

**Weiterführende Links:**
- [Apple Documentation - Programming with Objective-C](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Variance: Variance annotations *)
type animal = Animal
type dog = Dog of animal

(* Covariance: + annotation *)
type 'a producer = { get : unit -> 'a }

(* Contravariance: - annotation *)
type 'a consumer = { accept : 'a -> unit }

(* Invariance: keine Annotation *)
type 'a container = { set : 'a -> unit; get : unit -> 'a }

(* Verwendung *)
let dog_producer : dog producer = { get = fun () -> Dog Animal }
let animal_producer : animal producer = dog_producer (* OK: Covariance *)
```

**Besonderheiten:**
- Variance annotations mit `+` und `-`
- Covariance mit `+` annotation
- Contravariance mit `-` annotation
- Compile-time Typ-Prüfung

**Weiterführende Links:**
- [OCaml Documentation - Variance](https://ocaml.org/manual/polymorphism.html#s:variance)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Variance: Functor (Covariance) und Contravariant
data Animal = Animal
data Dog = Dog Animal

-- Covariance: Functor
class Functor f where
    map :: forall a b. (a -> b) -> f a -> f b

-- Contravariance: Contravariant
class Contravariant f where
    cmap :: forall a b. (b -> a) -> f a -> f b

-- Invariance: keine automatische Konvertierung
data Container a = Container a

-- Keine automatische Konvertierung
dogContainer :: Container Dog
dogContainer = Container (Dog Animal)
-- animalContainer :: Container Animal = dogContainer -- Fehler: Invariance
```

**Besonderheiten:**
- Functor für Covariance
- Contravariant für Contravariance
- Type classes definieren Variance
- Compile-time Typ-Prüfung

**Weiterführende Links:**
- [PureScript Documentation - Functor](https://pursuit.purescript.org/packages/purescript-prelude/docs/Data.Functor)

</TabItem>
<TabItem value="python" label="Python">

```python
# Variance: Type hints (seit Python 3.5)
from typing import Generic, TypeVar, Protocol

T = TypeVar('T')
T_co = TypeVar('T_co', covariant=True)  # Covariance
T_contra = TypeVar('T_contra', contravariant=True)  # Contravariance

class Animal:
    pass

class Dog(Animal):
    pass

# Covariance
class Producer(Protocol[T_co]):
    def get(self) -> T_co: ...

# Contravariance
class Consumer(Protocol[T_contra]):
    def accept(self, item: T_contra) -> None: ...

# Type hints zur Laufzeit nicht erzwungen
dog_producer: Producer[Dog] = None
animal_producer: Producer[Animal] = dog_producer  # OK: Covariance
```

**Besonderheiten:**
- Type hints für Variance (seit Python 3.5)
- Covariance mit `covariant=True`
- Contravariance mit `contravariant=True`
- Type hints zur Laufzeit nicht erzwungen

**Weiterführende Links:**
- [Python Documentation - TypeVar](https://docs.python.org/3/library/typing.html#typing.TypeVar)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Variance: nicht direkt unterstützt
trait Animal {}
struct Dog {}

impl Animal for Dog {}

// Generics sind invariant
struct Container<T> {
    value: T,
}

// Keine automatische Konvertierung
let dog_container: Container<Dog> = Container { value: Dog {} };
// let animal_container: Container<dyn Animal> = dog_container; // Fehler: Invariance

// Workaround: Trait objects
struct ContainerBox {
    value: Box<dyn Animal>,
}
```

**Besonderheiten:**
- Generics sind invariant
- Keine automatische Variance-Unterstützung
- Trait objects für Polymorphismus
- Lifetimes beeinflussen Variance

**Weiterführende Links:**
- [The Rust Book - Trait Objects](https://doc.rust-lang.org/book/ch17-02-trait-objects.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Variance: Declaration-site variance (seit Scala 1.0)
class Animal
class Dog extends Animal

// Covariance: + annotation
trait Producer[+T] {
    def get: T
}

// Contravariance: - annotation
trait Consumer[-T] {
    def accept(item: T): Unit
}

// Invariance: keine Annotation
trait Container[T] {
    def set(item: T): Unit
    def get: T
}

// Verwendung
val dogProducer: Producer[Dog] = new Producer[Dog] {
    def get = new Dog
}
val animalProducer: Producer[Animal] = dogProducer // OK: Covariance

val animalConsumer: Consumer[Animal] = new Consumer[Animal] {
    def accept(item: Animal): Unit = {}
}
val dogConsumer: Consumer[Dog] = animalConsumer // OK: Contravariance
```

**Besonderheiten:**
- Declaration-site variance mit `+` und `-` (seit Scala 1.0)
- Covariance mit `+` annotation
- Contravariance mit `-` annotation
- Use-site variance mit `+` und `-` möglich

**Weiterführende Links:**
- [Scala Documentation - Variance](https://docs.scala-lang.org/tour/variances.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Variance: nicht direkt unterstützt
class Animal {}
class Dog : Animal {}

// Generics sind invariant
struct Container<T> {
    var value: T
}

// Keine automatische Konvertierung
let dogContainer = Container(value: Dog())
// let animalContainer: Container<Animal> = dogContainer // Fehler: Invariance

// Workaround: Protocols mit associated types
protocol Producer {
    associatedtype T
    func get() -> T
}
```

**Besonderheiten:**
- Generics sind invariant
- Keine automatische Variance-Unterstützung
- Protocols mit associated types für Polymorphismus
- Type erasure zur Laufzeit

**Weiterführende Links:**
- [Swift Documentation - Generics](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/generics/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Variance: Structural typing (seit TypeScript 1.0)
class Animal {}
class Dog extends Animal {}

// Covariance: automatisch für read-only
interface Producer<T> {
    get(): T;
}

// Contravariance: automatisch für write-only
interface Consumer<T> {
    accept(item: T): void;
}

// Invariance: für read-write
interface Container<T> {
    set(item: T): void;
    get(): T;
}

// Verwendung
const dogProducer: Producer<Dog> = { get: () => new Dog() };
const animalProducer: Producer<Animal> = dogProducer; // OK: Covariance

const animalConsumer: Consumer<Animal> = { accept: (item: Animal) => {} };
const dogConsumer: Consumer<Dog> = animalConsumer; // OK: Contravariance
```

**Besonderheiten:**
- Structural typing ermöglicht automatische Variance
- Covariance für read-only Interfaces
- Contravariance für write-only Interfaces
- Invariance für read-write Interfaces
- Type erasure zur Laufzeit (JavaScript)

**Weiterführende Links:**
- [TypeScript Handbook - Variance](https://www.typescriptlang.org/docs/handbook/2/objects.html#variance)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Variance: Covariance und Contravariance (seit VB.NET 2010)
Class Animal
End Class

Class Dog
    Inherits Animal
End Class

' Covariance: Out keyword
Interface IProducer(Of Out T)
    Function Get() As T
End Interface

' Contravariance: In keyword
Interface IConsumer(Of In T)
    Sub Accept(item As T)
End Interface

' Invariance: keine Keywords
Interface IContainer(Of T)
    Sub Set(item As T)
    Function Get() As T
End Interface

' Verwendung
Dim dogProducer As IProducer(Of Dog) = Nothing
Dim animalProducer As IProducer(Of Animal) = dogProducer ' OK: Covariance

Dim animalConsumer As IConsumer(Of Animal) = Nothing
Dim dogConsumer As IConsumer(Of Dog) = animalConsumer ' OK: Contravariance
```

**Besonderheiten:**
- Covariance mit `Out` keyword (seit VB.NET 2010)
- Contravariance mit `In` keyword (seit VB.NET 2010)
- Nur für Interfaces und Delegates
- Ähnlich zu C#

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Variance](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/concepts/covariance-contravariance/)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
// Variance (seit PHP 7.4)
class Animal {}
class Dog extends Animal {}

class AnimalShelter {
    public function adopt(Dog $dog): Animal {
        return $dog;
    }
}

class DogShelter extends AnimalShelter {
    // Kovariant: Rückgabetyp darf spezialisierter sein
    // Kontravariant: Parametertyp darf allgemeiner sein
    public function adopt(Animal $animal): Dog {
        return new Dog();
    }
}
?>
```

**Besonderheiten:**
- Kovariante Rückgabetypen seit PHP 7.4
- Kontravariante Parametertypen seit PHP 7.4
- Generics werden nicht unterstützt, Varianz nur für Vererbung

**Weiterführende Links:**
- [PHP Documentation - Covariance and Contravariance](https://www.php.net/manual/en/language.oop5.variance.php)

</TabItem>
</FilteredTabs>


## 3.7.7. Higher-Kind Types

Typen, die selbst Typen als Parameter nehmen, ermöglichen abstrakte Operationen über Typkonstruktoren.

### Sprachen {#sprachen}

<FilteredTabs availableTabs={['haskell', 'idris', 'lean4', 'ocaml', 'purescript', 'scala', 'typescript']} orangeTabs={['rust']}>
<TabItem value="haskell" label="Haskell">

```haskell
-- Higher-Kind Types: type constructors
class Functor f where
    fmap :: (a -> b) -> f a -> f b

class Functor f => Applicative f where
    pure :: a -> f a
    (<*>) :: f (a -> b) -> f a -> f b

class Applicative f => Monad f where
    return :: a -> f a
    (>>=) :: f a -> (a -> f b) -> f b

-- Verwendung
instance Functor Maybe where
    fmap f (Just x) = Just (f x)
    fmap f Nothing = Nothing

instance Applicative Maybe where
    pure = Just
    (Just f) <*> (Just x) = Just (f x)
    _ <*> _ = Nothing

instance Monad Maybe where
    return = Just
    (Just x) >>= f = f x
    Nothing >>= _ = Nothing
```

**Besonderheiten:**
- Higher-Kind Types sind fundamental in Haskell
- Type constructors wie `Maybe`, `[]`, `IO` sind Higher-Kind Types
- Type classes arbeiten mit Higher-Kind Types
- Compile-time Typ-Prüfung

**Weiterführende Links:**
- [Haskell Documentation - Kind System](https://www.haskell.org/onlinereport/haskell2010/haskellch4.html#x10-730004.1.1)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Higher-Kind Types: type constructors
interface Functor (f : Type -> Type) where
    map : (a -> b) -> f a -> f b

interface Functor f => Applicative (f : Type -> Type) where
    pure : a -> f a
    (<*>) : f (a -> b) -> f a -> f b

interface Applicative f => Monad (f : Type -> Type) where
    return : a -> f a
    (>>=) : f a -> (a -> f b) -> f b

-- Verwendung
Functor Maybe where
    map f (Just x) = Just (f x)
    map f Nothing = Nothing

Applicative Maybe where
    pure = Just
    (Just f) <*> (Just x) = Just (f x)
    _ <*> _ = Nothing

Monad Maybe where
    return = Just
    (Just x) >>= f = f x
    Nothing >>= _ = Nothing
```

**Besonderheiten:**
- Higher-Kind Types sind fundamental in Idris
- Type constructors sind Higher-Kind Types
- Interfaces arbeiten mit Higher-Kind Types
- Dependent types erweitern Higher-Kind Types

**Weiterführende Links:**
- [Idris Documentation - Type Constructors](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html#type-constructors)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Higher-Kind Types: Typkonstruktoren als Parameter
class Functor (f : Type → Type) where
  map : (α → β) → f α → f β

class Functor f => Applicative (f : Type → Type) where
  pure : α → f α
  seq : f (α → β) → f α → f β

class Applicative f => Monad (f : Type → Type) where
  bind : f α → (α → f β) → f β

-- Verwendung mit Option (Maybe)
instance : Functor Option where
  map f
    | some x => some (f x)
    | none   => none

instance : Applicative Option where
  pure := some
  seq f x := match f with
    | some g => Functor.map g x
    | none   => none

instance : Monad Option where
  bind x f := match x with
    | some a => f a
    | none   => none
```

**Besonderheiten:**
- Volle Unterstützung für Higher-Kind Types mit `Type → Type`
- Type Classes arbeiten nativ mit Typkonstruktoren
- `Functor`, `Applicative`, `Monad` sind in der Standardbibliothek definiert
- Unterstützt auch höhere Kinds wie `(Type → Type) → Type`

**Weiterführende Links:**
- [Lean 4 Documentation - Type Classes](https://lean-lang.org/theorem_proving_in_lean4/type_classes.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Higher-Kind Types: functors (ähnlich zu Higher-Kind Types) *)
module type Functor = sig
    type 'a t
    val map : ('a -> 'b) -> 'a t -> 'b t
end

module type Applicative = sig
    include Functor
    val pure : 'a -> 'a t
    val apply : ('a -> 'b) t -> 'a t -> 'b t
end

module type Monad = sig
    include Applicative
    val bind : 'a t -> ('a -> 'b t) -> 'b t
end

(* Verwendung *)
module MaybeFunctor : Functor with type 'a t = 'a option = struct
    type 'a t = 'a option
    let map f = function
        | Some x -> Some (f x)
        | None -> None
end
```

**Besonderheiten:**
- Funktoren sind ähnlich zu Higher-Kind Types
- Module types definieren abstrakte Typkonstruktoren
- Compile-time Typ-Prüfung
- Polymorphic variants für erweiterte Higher-Kind Types

**Weiterführende Links:**
- [OCaml Documentation - Functors](https://ocaml.org/manual/functors.html)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Higher-Kind Types: type constructors
class Functor f where
    map :: forall a b. (a -> b) -> f a -> f b

class Functor f <= Applicative f where
    pure :: forall a. a -> f a
    apply :: forall a b. f (a -> b) -> f a -> f b

class Applicative f <= Monad f where
    bind :: forall a b. f a -> (a -> f b) -> f b

-- Verwendung
instance Functor Maybe where
    map f (Just x) = Just (f x)
    map f Nothing = Nothing

instance Applicative Maybe where
    pure = Just
    apply (Just f) (Just x) = Just (f x)
    apply _ _ = Nothing

instance Monad Maybe where
    bind (Just x) f = f x
    bind Nothing _ = Nothing
```

**Besonderheiten:**
- Higher-Kind Types sind fundamental in PureScript
- Type constructors sind Higher-Kind Types
- Type classes arbeiten mit Higher-Kind Types
- Compile-time Typ-Prüfung

**Weiterführende Links:**
- [PureScript Documentation - Type Constructors](https://github.com/purescript/documentation/blob/master/language/Types.md)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Higher-Kind Types: nicht direkt unterstützt
// Workaround: Associated types und Traits
trait Functor {
    type Inner;
    type Output<B>;
    
    fn map<B, F>(self, f: F) -> Self::Output<B>
    where
        F: FnOnce(Self::Inner) -> B;
}

// Oder mit generischen Associated types (geplant)
// trait Functor {
//     type Output<T>;
//     fn map<B, F>(self, f: F) -> Self::Output<B>
//     where
//         F: FnOnce(Self::Inner) -> B;
// }

// Verwendung mit konkreten Typen
struct Maybe<T>(Option<T>);

impl<T> Functor for Maybe<T> {
    type Inner = T;
    type Output<B> = Maybe<B>;
    
    fn map<B, F>(self, f: F) -> Self::Output<B>
    where
        F: FnOnce(T) -> B,
    {
        Maybe(self.0.map(f))
    }
}
```

**Besonderheiten:**
- Rust hat keine direkten Higher-Kind Types
- Associated types als Workaround
- Generische Associated types sind geplant
- Traits können abstrakte Typkonstruktoren simulieren

**Weiterführende Links:**
- [The Rust Book - Associated Types](https://doc.rust-lang.org/book/ch19-03-advanced-traits.html#associated-types)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Higher-Kind Types: type constructors (seit Scala 2.5)
trait Functor[F[_]] {
    def map[A, B](fa: F[A])(f: A => B): F[B]
}

trait Applicative[F[_]] extends Functor[F] {
    def pure[A](a: A): F[A]
    def ap[A, B](ff: F[A => B])(fa: F[A]): F[B]
}

trait Monad[F[_]] extends Applicative[F] {
    def flatMap[A, B](fa: F[A])(f: A => F[B]): F[B]
}

// Verwendung
implicit object MaybeFunctor extends Functor[Option] {
    def map[A, B](fa: Option[A])(f: A => B): Option[B] = fa.map(f)
}

implicit object MaybeApplicative extends Applicative[Option] {
    def pure[A](a: A): Option[A] = Some(a)
    def ap[A, B](ff: Option[A => B])(fa: Option[A]): Option[B] = 
        for { f <- ff; a <- fa } yield f(a)
}

implicit object MaybeMonad extends Monad[Option] {
    def flatMap[A, B](fa: Option[A])(f: A => Option[B]): Option[B] = 
        fa.flatMap(f)
}
```

**Besonderheiten:**
- Higher-Kind Types seit Scala 2.5
- Type constructors mit `F[_]` Syntax
- Type classes arbeiten mit Higher-Kind Types
- Implicit parameters für Type classes

**Weiterführende Links:**
- [Scala Documentation - Higher-Kinded Types](https://docs.scala-lang.org/tutorials/FAQ/higher-kinded-types.html)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Higher-Kind Types: type-level programming (seit TypeScript 2.8)
type HKT<F, A> = F extends { type: infer T } ? T : never;

interface Functor<F> {
    map<A, B>(fa: HKT<F, A>, f: (a: A) => B): HKT<F, B>;
}

interface Applicative<F> extends Functor<F> {
    pure<A>(a: A): HKT<F, A>;
    ap<A, B>(ff: HKT<F, (a: A) => B>, fa: HKT<F, A>): HKT<F, B>;
}

interface Monad<F> extends Applicative<F> {
    flatMap<A, B>(fa: HKT<F, A>, f: (a: A) => HKT<F, B>): HKT<F, B>;
}

// Verwendung
type Maybe<A> = { type: 'Maybe'; value: A | null };

const MaybeFunctor: Functor<Maybe<any>> = {
    map: <A, B>(fa: Maybe<A>, f: (a: A) => B): Maybe<B> => ({
        type: 'Maybe',
        value: fa.value !== null ? f(fa.value) : null,
    }),
};
```

**Besonderheiten:**
- Higher-Kind Types mit type-level programming (seit TypeScript 2.8)
- Type-level HKT simulation mit conditional types
- Defunctionalization für Higher-Kind Types
- Type erasure zur Laufzeit (JavaScript)

**Weiterführende Links:**
- [TypeScript Handbook - Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html)

</TabItem>
</FilteredTabs>

## 3.7.8. Type Erasure vs. Reification

Type Erasure und Reification beschreiben, wie generische Typinformationen zur Laufzeit behandelt werden. Bei **Type Erasure** werden Typparameter zur Compile-Zeit entfernt und sind zur Laufzeit nicht verfügbar. Bei **Reification** bleiben generische Typinformationen zur Laufzeit erhalten und können abgefragt werden. **Monomorphisierung** erzeugt zur Compile-Zeit für jeden verwendeten Typ eine spezialisierte Version des generischen Codes.

### Sprachen {#sprachen}

<FilteredTabs availableTabs={['csharp', 'cpp', 'crystal', 'd', 'dart', 'fsharp', 'go', 'haskell', 'java', 'koka', 'kotlin', 'lean4', 'mercury', 'nim', 'ocaml', 'rust', 'scala', 'swift', 'typescript', 'v', 'zig']}>
<TabItem value="csharp" label="C#">

```csharp
// Reification: Generische Typinformationen bleiben zur Laufzeit erhalten
var strings = new List<string>();
var numbers = new List<int>();

// Zur Laufzeit unterschiedliche Typen
Console.WriteLine(strings.GetType() == numbers.GetType()); // false
Console.WriteLine(strings.GetType().Name); // "List`1[System.String]"

// typeof(T) in generischen Methoden verfügbar
void PrintType<T>()
{
    Console.WriteLine(typeof(T).Name); // z.B. "String", "Int32"
}

PrintType<string>(); // "String"
PrintType<int>();    // "Int32"

// Typprüfung mit generischen Typen möglich
if (strings is List<string>) { /* OK */ }
```

**Besonderheiten:**
- .NET verwendet Reification — generische Typinformationen bleiben vollständig zur Laufzeit erhalten
- `typeof(T)` erlaubt Zugriff auf den konkreten Typparameter in generischen Methoden
- `is`- und `as`-Operatoren funktionieren mit generischen Typen
- Reflection kann generische Typparameter zur Laufzeit auslesen
- Werttypen (z.B. `int`) werden nativ spezialisiert (kein Boxing)

**Weiterführende Links:**
- [Microsoft C# Documentation - Generics](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/types/generics)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Monomorphisierung: Jede Template-Instanziierung erzeugt separaten Code
template<typename T>
void printInfo()
{
    std::cout << "Type: " << typeid(T).name()
              << ", Size: " << sizeof(T) << std::endl;
}

// Compiler erzeugt separate Funktionen:
printInfo<int>();         // eigene Funktion für int
printInfo<double>();      // eigene Funktion für double
printInfo<std::string>(); // eigene Funktion für std::string

// Jede Instanziierung ist ein eigener Typ
std::vector<int> vi;
std::vector<double> vd;
std::cout << (typeid(vi) == typeid(vd)); // false
```

**Besonderheiten:**
- C++ verwendet Monomorphisierung — Templates erzeugen zur Compile-Zeit spezialisierten Code für jeden Typ
- `typeid` liefert Laufzeit-Typinformationen (RTTI)
- `sizeof(T)` ist zur Compile-Zeit verfügbar
- Template-Spezialisierung erlaubt typspezifische Implementierungen
- Erhöht die Codegröße, vermeidet aber Laufzeit-Overhead

**Weiterführende Links:**
- [cppreference.com - Templates](https://en.cppreference.com/w/cpp/language/templates)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Monomorphisierung: Generics werden zu spezialisierten Versionen
def identity(value : T) : T forall T
  value
end

# Compiler erzeugt separate Funktionen
x = identity(42)      # spezialisiert für Int32
s = identity("hello") # spezialisiert für String

# typeof zur Compile-Zeit verfügbar
puts typeof(x) # Int32
puts typeof(s) # String

# Typprüfung zur Laufzeit
puts x.is_a?(Int32)  # true
puts s.is_a?(String) # true
```

**Besonderheiten:**
- Crystal verwendet Monomorphisierung — jede generische Instanziierung erzeugt spezialisierten Code
- `typeof()` liefert den Typ zur Compile-Zeit
- `is_a?` für Laufzeit-Typprüfung
- Keine Typparameter zur Laufzeit, aber spezialisierter Code pro Typ

**Weiterführende Links:**
- [Crystal Documentation - Generics](https://crystal-lang.org/reference/syntax_and_semantics/generics.html)

</TabItem>
<TabItem value="d" label="D">

```d
// Monomorphisierung: Templates erzeugen spezialisierten Code
T identity(T)(T value)
{
    return value;
}

// Compiler erzeugt separate Funktionen
auto x = identity!int(42);
auto s = identity!string("hello");

// typeid für Laufzeit-Typinfo
void printType(T)(T value)
{
    writeln(typeid(T));
}

printType(42);      // int
printType("hello"); // immutable(char)[]
```

**Besonderheiten:**
- D verwendet Monomorphisierung — Templates erzeugen spezialisierten Code
- `typeid(T)` liefert Laufzeit-Typinformationen
- Template-Spezialisierung für typspezifische Implementierungen
- `static if` erlaubt Compile-Zeit-Entscheidungen basierend auf Typen
- CTFE (Compile-Time Function Execution) ergänzt die Template-Metaprogrammierung

**Weiterführende Links:**
- [D Language Documentation - Templates](https://dlang.org/spec/template.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Reification: Generische Typinformationen zur Laufzeit verfügbar
var strings = <String>["a", "b"];
var numbers = <int>[1, 2];

// Zur Laufzeit unterschiedliche Typen
print(strings.runtimeType); // List<String>
print(numbers.runtimeType); // List<int>

// Typprüfung mit generischen Typen
print(strings is List<String>); // true
print(strings is List<int>);    // false

// Generischer Typparameter in Funktionen verfügbar
void printType<T>() {
  print(T); // z.B. String, int
}

printType<String>(); // String
printType<int>();    // int
```

**Besonderheiten:**
- Dart verwendet Reification — generische Typinformationen bleiben zur Laufzeit erhalten
- `is`-Operator funktioniert mit generischen Typen
- `runtimeType` zeigt den vollständigen generischen Typ
- `T` kann als Wert in generischen Funktionen verwendet werden

**Weiterführende Links:**
- [Dart Documentation - Generics](https://dart.dev/language/generics)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Reification: .NET bewahrt generische Typinformationen
let strings = [ "a"; "b" ]
let numbers = [ 1; 2 ]

// typeof<'T> in generischen Funktionen verfügbar
let printType<'T> () =
    printfn "%s" (typeof<'T>.Name)

printType<string> () // "String"
printType<int> ()    // "Int32"

// Typprüfung mit generischen Typen
let checkType (x: obj) =
    match x with
    | :? list<int> -> "list<int>"
    | :? list<string> -> "list<string>"
    | _ -> "Unbekannt"
```

**Besonderheiten:**
- F# nutzt .NET-Reification — generische Typinformationen bleiben zur Laufzeit erhalten
- `typeof<'T>` liefert den konkreten Typparameter
- Pattern Matching auf generische Typen möglich
- Inline-Funktionen mit `^T` (statically resolved type parameters) werden monomorphisiert

**Weiterführende Links:**
- [F# Documentation - Generics](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/generics/)

</TabItem>
<TabItem value="go" label="Go">

```go
// Monomorphisierung (seit Go 1.18)
func PrintType[T any](value T) {
    fmt.Printf("Type: %T, Value: %v\n", value, value)
}

PrintType(42)      // Type: int, Value: 42
PrintType("hello") // Type: string, Value: hello

// Compiler nutzt Mix aus Stenciling und Dictionaries
// Ähnliche Typen können Code teilen (GC Shape Stenciling)
func Max[T constraints.Ordered](a, b T) T {
    if a > b {
        return a
    }
    return b
}

Max(3, 5)     // spezialisiert für int
Max(1.5, 2.5) // spezialisiert für float64
```

**Besonderheiten:**
- Go verwendet seit 1.18 Monomorphisierung mit GC Shape Stenciling
- Typen mit gleicher Speicherrepräsentation teilen sich Code (effizienter als vollständige Monomorphisierung)
- `%T` in `fmt.Printf` zeigt den konkreten Typ zur Laufzeit
- Reflection (`reflect.TypeOf`) liefert Laufzeit-Typinformationen

**Weiterführende Links:**
- [Go Blog - Generics](https://go.dev/blog/intro-generics)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Type Erasure: Parametrische Polymorphie mit Löschung
-- Typparameter existieren zur Laufzeit nicht
identity :: a -> a
identity x = x

-- Compiler generiert einheitlichen Code für alle Typen
-- (uniforme Repräsentation über Pointer)

-- Typeable als Workaround für Laufzeit-Typinfo
-- Benötigt: import Data.Typeable
showType :: Typeable a => a -> String
showType x = show (typeOf x)

-- showType (42 :: Int)       → "Int"
-- showType ("hello" :: String) → "[Char]"
```

**Besonderheiten:**
- Haskell verwendet Type Erasure — Typparameter werden zur Compile-Zeit entfernt
- Uniforme Repräsentation: Alle Werte werden als Pointer gespeichert (Boxing)
- Dictionary Passing: Typklassen-Constraints werden als versteckte Dictionary-Parameter übergeben
- `Typeable`-Typklasse als optionaler Workaround für Laufzeit-Typinformation
- Kein Laufzeit-Overhead für generischen Code, aber Boxing-Overhead

**Weiterführende Links:**
- [GHC Documentation - Typeable](https://hackage.haskell.org/package/base/docs/Data-Typeable.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Type Erasure: Generische Typparameter werden zur Compile-Zeit entfernt
List<String> strings = new ArrayList<>();
List<Integer> numbers = new ArrayList<>();

// Zur Laufzeit identischer Typ — Typparameter gelöscht
System.out.println(strings.getClass() == numbers.getClass()); // true
System.out.println(strings.getClass().getName()); // "java.util.ArrayList"

// Typprüfung mit Typparameter nicht möglich
// if (obj instanceof List<String>) { }  // Compile-Fehler

// Unbounded Wildcard funktioniert
if (strings instanceof List<?>) {
    System.out.println("Ist eine Liste"); // OK
}

// Raw Type Warning bei Casts
// List<String> list = (List<String>) obj; // Unchecked Cast Warning
```

**Besonderheiten:**
- Java verwendet Type Erasure — generische Typparameter werden zur Compile-Zeit gelöscht
- `List<String>` und `List<Integer>` sind zur Laufzeit identisch (`ArrayList`)
- `instanceof` kann keine generischen Typen prüfen
- Casts auf generische Typen erzeugen Unchecked-Warnings
- Eingeführt in Java 5.0 mit Rückwärtskompatibilität zu Raw Types

**Weiterführende Links:**
- [Oracle Java Documentation - Type Erasure](https://docs.oracle.com/javase/tutorial/java/generics/erasure.html)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Type Erasure: Typparameter werden zur Compile-Zeit entfernt
type box<a>
  Box(value: a)

val int-box = Box(42)
val string-box = Box("Hallo")

// Zur Laufzeit gibt es keine Unterscheidung zwischen box<int> und box<string>
// Koka kompiliert zu C — generische Typen werden monomorphisiert oder erasured
```

**Besonderheiten:**
- Koka verwendet Type Erasure — generische Typparameter existieren nur zur Compile-Zeit
- Kompiliert zu C-Code, wobei Typparameter durch konkrete Typen ersetzt oder als `void*` (boxed) repräsentiert werden
- Keine Laufzeit-Reflexion über generische Typparameter möglich
- Optimierungen durch den Compiler können Monomorphisierung durchführen

**Weiterführende Links:**
- [Koka Language Guide - Compilation](https://koka-lang.github.io/koka/doc/book.html#sec-compile)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Type Erasure auf JVM (Standard)
val strings = listOf("a", "b")
val numbers = listOf(1, 2)

// Zur Laufzeit identischer Typ
println(strings::class == numbers::class) // true

// Typprüfung mit Typparameter nicht möglich
// if (obj is List<String>) { }  // Compile-Fehler

// Reified Type Parameters in Inline-Funktionen
inline fun <reified T> isType(value: Any): Boolean {
    return value is T // Nur mit reified möglich
}

println(isType<String>("hello")) // true
println(isType<Int>("hello"))    // false

// Reified erlaubt auch T::class
inline fun <reified T> printType() {
    println(T::class.simpleName)
}
```

**Besonderheiten:**
- Kotlin verwendet Type Erasure auf der JVM wie Java
- `reified` Typparameter in `inline`-Funktionen bewahren Typinfo zur Laufzeit
- `reified` ermöglicht `is T`, `T::class` und `Array<T>()` in Inline-Funktionen
- Nur in `inline`-Funktionen verfügbar, da der Code am Aufrufort eingebettet wird

**Weiterführende Links:**
- [Kotlin Documentation - Reified Type Parameters](https://kotlinlang.org/docs/inline-functions.html#reified-type-parameters)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Type Erasure: Typen werden zur Compile-Zeit gelöscht
def identity (x : α) : α := x

-- Zur Laufzeit ist der Typ nicht mehr verfügbar
def intResult := identity 42        -- Typ Int zur Compile-Zeit bekannt
def strResult := identity "hello"   -- Typ String zur Compile-Zeit bekannt

-- Lean 4 verwendet Boxed-Repräsentation für polymorphe Werte
-- Alle polymorphen Werte werden als `lean_object*` repräsentiert

-- Monomorphisierung für Performance-kritische Fälle
@[specialize] def fastIdentity (x : α) : α := x

-- @[specialize] Attribut kann Monomorphisierung erzwingen
```

**Besonderheiten:**
- Lean 4 verwendet Type Erasure: Typinformationen sind zur Laufzeit nicht verfügbar
- Polymorphe Werte werden als boxed objects (`lean_object*`) im C-Backend repräsentiert
- `@[specialize]` Attribut kann Monomorphisierung für Performance erzwingen
- Compile-Zeit Typinformationen für Beweisführung und Optimierung verfügbar

**Weiterführende Links:**
- [Lean 4 Documentation - Compiler](https://lean-lang.org/lean4/doc/dev/ffi.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```mercury
% Type Erasure / Monomorphisierung: Typen werden zur Compile-Zeit aufgelöst
% Mercury kompiliert polymorphen Code über Type Passing oder Monomorphisierung.

% Polymorphes Prädikat
:- pred identity(T::in, T::out) is det.
identity(X, X).

% Der Compiler erzeugt spezialisierten Code je nach Backend:
% - C-Backend: Type Info wird als versteckter Parameter übergeben (Type Passing)
% - Oder Monomorphisierung für häufig verwendete Typen

:- pred main(io::di, io::uo) is det.
main(!IO) :-
    identity(42, IntResult),
    identity("hello", StringResult),
    io.write_int(IntResult, !IO), io.nl(!IO),
    io.write_string(StringResult, !IO), io.nl(!IO).

% Typinformationen sind zur Laufzeit NICHT direkt abfragbar.
% Es gibt keine Laufzeit-Reflexion über generische Typparameter.
```

**Besonderheiten:**
- Mercury verwendet Type Passing: Typinformationen werden als versteckte Parameter an polymorphe Prädikate übergeben.
- Das C-Backend nutzt `MR_TypeInfo`-Strukturen, um generische Operationen (z.B. Vergleich, Kopie) zu implementieren.
- Keine Laufzeit-Reflexion über generische Typparameter möglich.
- Der Compiler kann Monomorphisierung als Optimierung durchführen, wenn der konkrete Typ bekannt ist.

**Weiterführende Links:**
- [The Mercury Language Reference Manual - Polymorphism](https://www.mercurylang.org/documentation/reference.html#Polymorphism)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Monomorphisierung: Generics werden spezialisiert
proc identity[T](value: T): T =
  value

# Compiler erzeugt separate Funktionen
let x = identity[int](42)
let s = identity[string]("hello")

# Typinfo über Compiler-Intrinsics
proc printType[T](value: T) =
  echo typeof(value) # z.B. "int", "string"

printType(42)      # int
printType("hello") # string
```

**Besonderheiten:**
- Nim verwendet Monomorphisierung — Generics werden zu spezialisierten Funktionen kompiliert
- `typeof()` liefert den Typ zur Compile-Zeit
- `is`-Operator für Compile-Zeit-Typprüfung
- `when`-Statements für Compile-Zeit-Entscheidungen basierend auf Typen

**Weiterführende Links:**
- [Nim Documentation - Generics](https://nim-lang.org/docs/manual.html#generics)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Type Erasure: Uniforme Repräsentation *)
(* Alle Werte haben zur Laufzeit dieselbe Repräsentation *)
let identity (x : 'a) : 'a = x

(* Compiler generiert einheitlichen Code — keine Spezialisierung *)
let int_id = identity 42
let str_id = identity "hello"
(* Beide nutzen dieselbe Funktion zur Laufzeit *)

(* Kein Zugriff auf Typparameter zur Laufzeit *)
(* Vorteil: Schnelle Kompilierung, kompakter Code *)
(* Nachteil: Boxing-Overhead für unboxed Typen *)
```

**Besonderheiten:**
- OCaml verwendet Type Erasure mit uniformer Repräsentation
- Alle polymorphen Werte werden als Pointer gleicher Größe gespeichert
- Typparameter existieren zur Laufzeit nicht — kein Zugriff auf generische Typinfo
- Schnellere Kompilierung und kompakterer Code als bei Monomorphisierung
- Kein RTTI (Run-Time Type Information) für generische Parameter

**Weiterführende Links:**
- [OCaml Documentation - Polymorphism](https://v2.ocaml.org/manual/coreexamples.html#s:tut-poly)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Monomorphisierung: Generics werden zu spezialisierten Funktionen
fn type_name_of<T>(_: &T) -> &'static str {
    std::any::type_name::<T>()
}

let x = 42;
let s = "hello";
println!("{}", type_name_of(&x)); // "i32"
println!("{}", type_name_of(&s)); // "&str"

// Jede Instanziierung erzeugt eigene Funktion
fn add<T: std::ops::Add<Output = T>>(a: T, b: T) -> T {
    a + b
}

// add::<i32>() und add::<f64>() sind separate Funktionen
let sum_int = add(1, 2);     // spezialisiert für i32
let sum_float = add(1.0, 2.0); // spezialisiert für f64
```

**Besonderheiten:**
- Rust verwendet Monomorphisierung — jede generische Instanziierung erzeugt spezialisierten Code
- `std::any::type_name::<T>()` liefert den Typnamen
- `std::mem::size_of::<T>()` liefert die Größe zur Compile-Zeit
- Kein Laufzeit-Overhead, aber erhöhte Codegröße
- Trait Objects (`dyn Trait`) bieten dynamischen Dispatch als Alternative

**Weiterführende Links:**
- [Rust Book - Generic Data Types](https://doc.rust-lang.org/book/ch10-01-syntax.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Type Erasure auf JVM
val strings: List[String] = List("a", "b")
val numbers: List[Int] = List(1, 2)

// Zur Laufzeit identischer Typ
println(strings.getClass == numbers.getClass) // true

// ClassTag als Workaround für Laufzeit-Typinformation
import scala.reflect.ClassTag

def createArray[T: ClassTag](size: Int): Array[T] =
    new Array[T](size) // Benötigt ClassTag für Array-Erstellung

val arr = createArray[String](5) // Funktioniert dank ClassTag

// TypeTag für vollständige Typinformation
import scala.reflect.runtime.universe._

def showType[T: TypeTag](value: T): String =
    typeOf[T].toString

println(showType(List(1, 2, 3))) // "List[Int]"
```

**Besonderheiten:**
- Scala verwendet Type Erasure auf der JVM wie Java
- `ClassTag` bewahrt die Klasse des Typparameters zur Laufzeit
- `TypeTag` bewahrt vollständige generische Typinformation (via Reflection)
- `WeakTypeTag` für Typen mit nicht-konkreten Typparametern
- Scala 3 bietet `TypeTest` als Ersatz für einige ClassTag-Anwendungsfälle

**Weiterführende Links:**
- [Scala Documentation - Type Erasure](https://docs.scala-lang.org/overviews/reflection/typetags-manifests.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Reification: Generische Typinformationen zur Laufzeit verfügbar
let strings: [String] = ["a", "b"]
let numbers: [Int] = [1, 2]

// Typinformation zur Laufzeit abrufbar
print(type(of: strings)) // Array<String>
print(type(of: numbers)) // Array<Int>

// Typparameter in generischen Funktionen verfügbar
func printType<T>(_ value: T)
{
    print(String(describing: T.self)) // z.B. "String", "Int"
}

printType("hello") // String
printType(42)      // Int

// Typprüfung mit generischen Typen
if strings is [String] { print("Ist [String]") } // OK
```

**Besonderheiten:**
- Swift verwendet Reification — generische Typinformationen bleiben zur Laufzeit erhalten
- `type(of:)` liefert den konkreten Typ inklusive Typparameter
- `T.self` in generischen Funktionen liefert den Metatyp
- Witness Tables für Protokoll-Konformität (ähnlich wie vtables)
- Spezialisierung (Monomorphisierung) als optionale Compiler-Optimierung

**Weiterführende Links:**
- [Swift Documentation - Generics](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/generics/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Vollständige Type Erasure: Alle Typen werden zur Compile-Zeit entfernt
function identity<T>(value: T): T {
    // typeof T ist zur Laufzeit nicht verfügbar
    // T existiert nur zur Compile-Zeit
    return value;
}

// Kompiliert zu JavaScript:
// function identity(value) { return value; }

const a = identity<string>("hello");
const b = identity<number>(42);

// Kein Unterschied zur Laufzeit
// typeof a === "string" (JavaScript typeof, nicht TypeScript)
// Generische Typparameter sind vollständig entfernt
```

**Besonderheiten:**
- TypeScript verwendet vollständige Type Erasure — alle Typen werden beim Kompilieren zu JavaScript entfernt
- Generische Typparameter existieren nur zur Compile-Zeit
- Kein Laufzeit-Overhead für Generics (kein Code generiert)
- JavaScript-`typeof` prüft nur primitive Typen, nicht TypeScript-Generics
- Discriminated Unions als Workaround für Laufzeit-Typunterscheidung

**Weiterführende Links:**
- [TypeScript Handbook - Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)

</TabItem>
<TabItem value="v" label="V">

```v
// Monomorphisierung: Generics werden spezialisiert
fn identity[T](value T) T {
    return value
}

// Compiler erzeugt separate Funktionen
x := identity[int](42)
s := identity[string]('hello')

// typeof für Typinfo
println(typeof(x).name) // int
println(typeof(s).name) // string
```

**Besonderheiten:**
- V verwendet Monomorphisierung — Generics werden zu spezialisierten Funktionen kompiliert
- `typeof()` liefert Compile-Zeit-Typinformationen
- Generics seit V 0.3 verfügbar
- Kein Laufzeit-Overhead für generischen Code

**Weiterführende Links:**
- [V Documentation - Generics](https://github.com/vlang/v/blob/master/doc/docs.md#generics)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Comptime-Monomorphisierung: Generics via comptime-Parameter
fn identity(comptime T: type, value: T) T {
    return value;
}

// Compiler erzeugt separate Funktionen zur Compile-Zeit
const x = identity(i32, 42);
const s = identity([]const u8, "hello");

// @typeName für Typinfo
fn printType(comptime T: type) void {
    @import("std").debug.print("Type: {s}\n", .{@typeName(T)});
}

printType(i32);       // "i32"
printType([]const u8); // "[]const u8"
```

**Besonderheiten:**
- Zig verwendet Comptime-Monomorphisierung — Generics sind `comptime`-Parameter
- Typen sind First-Class-Werte zur Compile-Zeit
- `@typeName(T)` liefert den Typnamen als String
- `@sizeOf(T)` liefert die Größe zur Compile-Zeit
- Keine spezielle Generics-Syntax — `comptime` ist der universelle Mechanismus

**Weiterführende Links:**
- [Zig Documentation - Comptime](https://ziglang.org/documentation/master/#comptime)

</TabItem>
</FilteredTabs>

