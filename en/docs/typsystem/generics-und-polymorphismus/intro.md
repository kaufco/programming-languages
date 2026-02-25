---
slug: /typsystem/generics-und-polymorphismus
title: 3.7. Generics and Polymorphism
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import FilteredTabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 3.7. Generics and Polymorphism

Generic types and polymorphic concepts.

## 3.7.1. Generics / Templates

Mechanism for defining types, functions, or classes with type parameters that are replaced by concrete types at compile time.

### Languages {#sprachen}

<FilteredTabs availableTabs={['ada', 'carbon', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'eiffel', 'elm', 'fsharp', 'gleam', 'go', 'groovy', 'haskell', 'haxe', 'idris', 'java', 'julia', 'koka', 'kotlin', 'lean4', 'mercury', 'nim', 'object-pascal', 'ocaml', 'odin', 'purescript', 'python', 'roc', 'rust', 'scala', 'swift', 'typescript', 'v', 'vbnet', 'zig']} yellowTabs={['objective-c']} orangeTabs={['c', 'clojure', 'common-lisp', 'elixir']}>
<TabItem value="ada" label="Ada">

```ada
-- Generics: Generic packages and procedures
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

**Special features:**
- Generic packages and procedures are declared with `generic`
- Instantiation with `new` and concrete types
- Generic parameters can have constraints

**Further reading:**
- [Ada Reference Manual - Generic Units](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-12.html)

</TabItem>
<TabItem value="c" label="C">

```c
// Templates: not directly supported (C++ templates)
// Workaround: macros or void* with type casting
#define BOX_TYPE(T) \
    typedef struct { \
        T value; \
    } Box_##T;

BOX_TYPE(int)
BOX_TYPE(double)

// Or with void*
typedef struct {
    void* value;
} Box;
```

**Special features:**
- C has no direct templates
- Macros can simulate generic types
- void* with type casting as workaround

**Further reading:**
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

**Special features:**
- Generic types with `generic` and type parameters
- Experimental language, syntax may still change
- Type parameters can have constraints

**Further reading:**
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

**Special features:**
- Generics since C# 2.0
- Supports generic classes, methods, interfaces, delegates
- Type parameters can have constraints

**Further reading:**
- [Microsoft C# Documentation - Generics](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/types/generics)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Templates: template classes and functions
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

**Special features:**
- Templates since C++98
- Supports template classes, functions, variables (since C++14)
- Template specialization possible
- Compile-time polymorphism

**Further reading:**
- [cppreference.com - Templates](https://en.cppreference.com/w/cpp/language/templates)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Generics: not directly supported (dynamic typing)
;; Workaround: functions with type hints or protocols
(defprotocol Boxable
  (get-value [this]))

(defrecord Box [value]
  Boxable
  (get-value [this] (:value this)))

(def int-box (Box. 42))
(def string-box (Box. "Hallo"))
```

**Special features:**
- Clojure has no direct generics (dynamic typing)
- Protocols can define generic interfaces
- Type hints for performance optimization

**Further reading:**
- [Clojure Documentation - Protocols](https://clojure.org/reference/protocols)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Generics: not directly supported (dynamic typing)
;; Workaround: Generic Functions (CLOS)
(defgeneric get-value (box))

(defclass box ()
  ((value :initarg :value :accessor box-value)))

(defmethod get-value ((b box))
  (box-value b))

(defvar int-box (make-instance 'box :value 42))
(defvar string-box (make-instance 'box :value "Hallo"))
```

**Special features:**
- Common Lisp has no direct generics (dynamic typing)
- Generic Functions (CLOS) for polymorphism
- Types are checked at runtime

**Further reading:**
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

**Special features:**
- Generic types with type parameters in parentheses
- Type parameters can have constraints
- Compile-time type checking

**Further reading:**
- [Crystal Documentation - Generics](https://crystal-lang.org/reference/1.11/syntax_and_semantics/generics.html)

</TabItem>
<TabItem value="d" label="D">

```d
// Templates: template classes and functions
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

**Special features:**
- Templates since D1.0
- Template instantiation with `!` (e.g. `Box!int`)
- Supports template classes, functions, structs

**Further reading:**
- [D Language Specification - Templates](https://dlang.org/spec/template.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Generics: generic classes and methods
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

**Special features:**
- Generics since Dart 2.0
- Supports generic classes, methods, functions
- Type parameters can have constraints

**Further reading:**
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

-- Usage
int_box: BOX [INTEGER]
str_box: BOX [STRING]
```

**Special features:**
- Generic classes with square brackets
- Type parameters can have constraints
- Compile-time type checking

**Further reading:**
- [Eiffel Documentation - Genericity](https://www.eiffel.org/doc/eiffel/Eiffel_Standard)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Generics: not directly supported (dynamic typing)
# Workaround: structs with type information
defmodule Box do
  defstruct [:value]
  
  def new(value), do: %Box{value: value}
  
  def get_value(%Box{value: value}), do: value
end

int_box = Box.new(42)
string_box = Box.new("Hallo")
```

**Special features:**
- Elixir has no direct generics (dynamic typing)
- Structs can simulate generic data structures
- Types are checked at runtime

**Further reading:**
- [Elixir Documentation - Structs](https://elixir-lang.org/getting-started/structs.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Generics: generic types and functions
type Box<'T> = {
    Value: 'T
}

let createBox value = { Value = value }
let getValue (box: Box<'T>) = box.Value

let intBox = createBox 42
let stringBox = createBox "Hallo"
```

**Special features:**
- Generics since F# 1.0
- Type parameters with `'T` (tick notation)
- Supports generic types, functions, modules

**Further reading:**
- [F# Documentation - Generics](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/generics/)

</TabItem>
<TabItem value="go" label="Go">

```go
// Generics: type parameters (since Go 1.18)
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

**Special features:**
- Generics since Go 1.18
- Type parameters with constraints (e.g. `any`, `comparable`)
- Supports generic types, functions, methods

**Further reading:**
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

**Special features:**
- Generics since Groovy 1.5 (Java-compatible)
- Supports generic classes, methods, interfaces
- Type parameters can have constraints

**Further reading:**
- [Groovy Documentation - Generics](https://groovy-lang.org/objectorientation.html#generics)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Generics: type parameters (always present)
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

**Special features:**
- Type parameters are fundamental in Haskell
- All types are implicitly generic
- Type classes for constraints

**Further reading:**
- [Haskell Documentation - Type Parameters](https://www.haskell.org/tutorial/goodies.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Generics: generic classes and functions
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

**Special features:**
- Generics since Haxe 2.0
- Supports generic classes, functions, interfaces
- Type parameters can have constraints

**Further reading:**
- [Haxe Documentation - Generics](https://haxe.org/manual/type-system-generics.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Generics: type parameters (always present)
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

**Special features:**
- Type parameters are fundamental in Idris
- All types are implicitly generic
- Dependent types for extended generics

**Further reading:**
- [Idris Documentation - Types](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html#types)

</TabItem>
<TabItem value="java" label="Java">

```java
// Generics: generic classes, methods, interfaces (since Java 5)
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

**Special features:**
- Generics since Java 5
- Type erasure at runtime
- Supports generic classes, methods, interfaces
- Wildcards for variance

**Further reading:**
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

**Special features:**
- Parametric types since Julia 0.1
- Type parameters with `where` clauses
- Supports parametric types, functions

**Further reading:**
- [Julia Documentation - Parametric Types](https://docs.julialang.org/en/v1/manual/types/#Parametric-Types)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Generics: Parametric polymorphism
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

**Special features:**
- Koka uses parametric polymorphism with implicit quantification
- Type parameters are specified in angle brackets `<a>`
- Lowercase identifiers in type position are automatically polymorphic type variables
- Type inference automatically derives type parameters

**Further reading:**
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

**Special features:**
- Generics since Kotlin 1.0
- Supports generic classes, functions, interfaces
- Type parameters can have constraints
- Reified type parameters for inline functions

**Further reading:**
- [Kotlin Documentation - Generics](https://kotlinlang.org/docs/generics.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Generics: Polymorphic functions and structures
structure Box (α : Type) where
  value : α

def intBox : Box Int := { value := 42 }
def stringBox : Box String := { value := "Hallo" }

-- Polymorphic function
def identity (x : α) : α := x

-- Generic function with multiple type parameters
def pair (a : α) (b : β) : α × β := (a, b)
```

**Special features:**
- Universal polymorphism through implicit and explicit type parameters
- Type parameters in parentheses `(α : Type)` or implicit `{α : Type}`
- Supports universe polymorphism (`Type u`)
- Type inference automatically derives type parameters

**Further reading:**
- [Lean 4 Documentation - Polymorphism](https://lean-lang.org/theorem_proving_in_lean4/dependent_type_theory.html#polymorphism)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Generics: Parametric polymorphism
:- type box(T) ---> box(T).

:- func new_box(T) = box(T).
new_box(Value) = box(Value).

:- func get_value(box(T)) = T.
get_value(box(Value)) = Value.

% Polymorphic function
:- func identity(T) = T.
identity(X) = X.

% Generic function with multiple type parameters
:- func pair(T1, T2) = {T1, T2}.
pair(A, B) = {A, B}.
```

**Special features:**
- Parametric polymorphism through type variables in type declarations
- Type parameters are specified in parentheses
- Type inference automatically derives type parameters
- All polymorphic types are uniformly represented (Type Erasure)

**Further reading:**
- [Mercury Language Reference - Parametric Polymorphism](https://www.mercurylang.org/information/doc-release/mercury_ref/Polymorphism.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Generics: generic types and procedures
type Box[T] = object
    value: T

proc newBox[T](value: T): Box[T] =
    Box[T](value: value)

proc getValue[T](box: Box[T]): T =
    box.value

var intBox = newBox(42)
var stringBox = newBox("Hallo")
```

**Special features:**
- Generics since Nim 0.9.0
- Type parameters with square brackets
- Supports generic types, procedures, templates

**Further reading:**
- [Nim Documentation - Generics](https://nim-lang.org/docs/manual.html#generics)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Generics: Lightweight Generics (since Xcode 7)
@interface Box<__covariant T> : NSObject
@property (nonatomic, strong) T value;
- (instancetype)initWithValue:(T)value;
- (T)getValue;
@end

Box<NSNumber *> *intBox = [[Box alloc] initWithValue:@42];
Box<NSString *> *stringBox = [[Box alloc] initWithValue:@"Hallo"];
```

**Special features:**
- Lightweight Generics since Xcode 7 (2015)
- Primarily for collection classes like NSArray, NSDictionary, NSSet
- Type erasure at runtime (no runtime type checking)
- Supports variance annotations (`__covariant`, `__contravariant`)

**Further reading:**
- [Apple Documentation - Programming with Objective-C](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Generics: generic classes (since Delphi 2009, Free Pascal 2.2)
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

**Special features:**
- Generics since Delphi 2009, Free Pascal 2.2
- Type parameters with square brackets
- Supports generic classes, records, procedures

**Further reading:**
- [Free Pascal Documentation - Generics](https://www.freepascal.org/docs-html/ref/refse57.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Generics: type parameters (always present) *)
type 'a box = { value : 'a }

let create_box value = { value }

let get_value box = box.value

let int_box = create_box 42
let string_box = create_box "Hallo"
```

**Special features:**
- Type parameters are fundamental in OCaml
- All types are implicitly generic
- Polymorphic variants for extended generics

**Further reading:**
- [OCaml Documentation - Polymorphism](https://ocaml.org/manual/polymorphism.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Generics: generic procedures (since Odin 0.1)
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

**Special features:**
- Generics since Odin 0.1
- Type parameters with `typeid`
- Supports generic procedures, structs

**Further reading:**
- [Odin Documentation - Generics](https://odin-lang.org/docs/overview/#generics)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Generics: type parameters (always present)
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

**Special features:**
- Type parameters are fundamental in PureScript
- All types are implicitly generic
- `forall` for explicit polymorphism

**Further reading:**
- [PureScript Documentation - Types](https://github.com/purescript/documentation/blob/master/language/Types.md)

</TabItem>
<TabItem value="python" label="Python">

```python
# Generics: type hints with typing.Generic (since Python 3.5)
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

**Special features:**
- Generics since Python 3.5 (typing module)
- Type hints not enforced at runtime
- Supports generic classes, functions

**Further reading:**
- [Python Documentation - Generic Types](https://docs.python.org/3/library/typing.html#generics)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Generics: generic types and functions
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

**Special features:**
- Generics since Rust 1.0
- Supports generic types, functions, traits
- Monomorphization at compile time
- Lifetimes as special generics

**Further reading:**
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

**Special features:**
- Generics since Scala 1.0
- Supports generic classes, methods, traits
- Type parameters can have constraints
- Variance annotations (`+`, `-`)

**Further reading:**
- [Scala Documentation - Generics](https://docs.scala-lang.org/tour/generic-classes.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Generics: generic types and functions
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

**Special features:**
- Generics since Swift 1.0
- Supports generic types, functions, protocols
- Type parameters can have constraints
- Associated types for protocols

**Further reading:**
- [Swift Documentation - Generics](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/generics/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Generics: generic types and functions
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

**Special features:**
- Generics since TypeScript 1.0
- Supports generic types, functions, interfaces
- Type erasure at runtime (JavaScript)
- Type parameters can have constraints

**Further reading:**
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

**Special features:**
- Generics since VB.NET 2005
- Type parameters with `Of T` syntax
- Supports generic classes, methods, interfaces

**Further reading:**
- [Microsoft VB.NET Documentation - Generics](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/data-types/generic-types)

</TabItem>
<TabItem value="v" label="V">

```v
// Generics: generic structs and functions (since V 0.3)
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

**Special features:**
- Generics since V 0.3
- Type parameters with square brackets
- Supports generic structs, functions, methods

**Further reading:**
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

**Special features:**
- Generics with `comptime` at compile time
- Generic functions return types
- Type parameters must be known at compile time

**Further reading:**
- [Zig Documentation - Generics](https://ziglang.org/documentation/0.11.0/#Generic-Data-Structures)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Type variables (Generics)
identity : a -> a
identity x = x

-- Generic data structures
type Maybe a
    = Just a
    | Nothing

type List a
    = Empty
    | Node a (List a)

-- Generic functions
map : (a -> b) -> List a -> List b
map func list =
    case list of
        Empty -> Empty
        Node x rest -> Node (func x) (map func rest)
```

**Special features:**
- Type variables are written in lowercase (`a`, `b`, `comparable`, etc.)
- Special built-in type variables: `number` (Int or Float), `comparable`, `appendable`
- No user-defined type class constraints
- Parametric polymorphism according to Hindley-Milner

**Further reading:**
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

**Special features:**
- Type parameters are specified in lowercase (e.g. `a`, `b`)
- Supports generic custom types and functions
- No bounded type parameters (no type constraints)

**Further reading:**
- [Gleam Documentation - Generic Types](https://tour.gleam.run/data-types/generics/)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Parametric polymorphism
identity : a -> a
identity = \x -> x

first : a, b -> a
first = \a, _ -> a
```

**Special features:**
- Type variables in lowercase (e.g. `a`, `b`)
- Full parametric polymorphism
- No explicit generics syntax required

**Further reading:**
- [Roc Documentation - Types](https://www.roc-lang.org/tutorial#type-annotations)

</TabItem>
</FilteredTabs>


## 3.7.2. Type Parameters

Parameters in generic types, functions, or classes that can be replaced by concrete types.

### Languages {#sprachen}

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

**Special features:**
- Generic type parameters declared with `type`
- Constraints possible (e.g. `is private`, `is range <>`)
- Multiple type parameters possible

**Further reading:**
- [Ada Reference Manual - Generic Formal Types](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-12-5.html)

</TabItem>
<TabItem value="c" label="C">

```c
// Type Parameters: not directly supported
// Workaround: macros with type parameters
#define ARRAY_TYPE(T, N) \
    typedef struct { \
        T data[N]; \
    } Array_##T##_##N;

ARRAY_TYPE(int, 10)
ARRAY_TYPE(double, 20)
```

**Special features:**
- C has no direct type parameters
- Macros can simulate type parameters
- No type safety at compile time

**Further reading:**
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

**Special features:**
- Type parameters with `T:! type` syntax
- Value parameters possible (e.g. `Size:! i32`)
- Experimental language, syntax may still change

**Further reading:**
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

**Special features:**
- Type parameters with `<T, U>` syntax
- Multiple type parameters possible
- Type parameters can have constraints

**Further reading:**
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

**Special features:**
- Template type parameters with `typename` or `class`
- Default arguments for type parameters possible
- Multiple type parameters possible
- Non-type template parameters possible

**Further reading:**
- [cppreference.com - Template Parameters](https://en.cppreference.com/w/cpp/language/template_parameters)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Type Parameters: not directly supported (dynamic typing)
;; Workaround: functions with type hints
(defn container [first second]
  {:first first :second second})

(def int-string-container (container 42 "Hallo"))
```

**Special features:**
- Clojure has no direct type parameters (dynamic typing)
- Type hints for performance optimization
- Types are checked at runtime

**Further reading:**
- [Clojure Documentation - Type Hints](https://clojure.org/reference/java_interop#type-hints)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Type Parameters: not directly supported (dynamic typing)
;; Workaround: Generic Functions with type specialization
(defgeneric container (first second))

(defmethod container ((first integer) (second string))
  (list first second))

(container 42 "Hallo")
```

**Special features:**
- Common Lisp has no direct type parameters (dynamic typing)
- Generic Functions with type specialization
- Types are checked at runtime

**Further reading:**
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

**Special features:**
- Type parameters with `(T, U)` syntax
- Multiple type parameters possible
- Type parameters can have constraints

**Further reading:**
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

**Special features:**
- Template type parameters with `(T, U)` syntax
- Template instantiation with `!` (e.g. `Container!int`)
- Multiple type parameters possible

**Further reading:**
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

**Special features:**
- Type parameters with `<T, U>` syntax
- Multiple type parameters possible
- Type parameters can have constraints

**Further reading:**
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

-- Usage
container: CONTAINER [INTEGER, STRING]
```

**Special features:**
- Generic type parameters with square brackets `[G, H]`
- Multiple type parameters possible
- Type parameters can have constraints

**Further reading:**
- [Eiffel Documentation - Genericity](https://www.eiffel.org/doc/eiffel/Eiffel_Standard)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Type Parameters: not directly supported (dynamic typing)
# Workaround: structs with type information
defmodule Container do
  defstruct [:first, :second]
  
  def new(first, second), do: %Container{first: first, second: second}
  
  def get_first(%Container{first: first}), do: first
  def get_second(%Container{second: second}), do: second
end

container = Container.new(42, "Hallo")
```

**Special features:**
- Elixir has no direct type parameters (dynamic typing)
- Structs can simulate generic data structures
- Types are checked at runtime

**Further reading:**
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

**Special features:**
- Type parameters with `'T, 'U` (tick notation)
- Multiple type parameters possible
- Type parameters can have constraints

**Further reading:**
- [F# Documentation - Type Parameters](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/generics/#type-parameters)

</TabItem>
<TabItem value="go" label="Go">

```go
// Type Parameters: type parameters (since Go 1.18)
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

**Special features:**
- Type parameters since Go 1.18
- Type parameters with constraints (e.g. `any`, `comparable`)
- Multiple type parameters possible

**Further reading:**
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

**Special features:**
- Type parameters with `<T, U>` syntax (Java-compatible)
- Multiple type parameters possible
- Type parameters can have constraints

**Further reading:**
- [Groovy Documentation - Generics](https://groovy-lang.org/objectorientation.html#generics)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Type Parameters: type parameters (always present)
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

**Special features:**
- Type parameters are fundamental in Haskell
- All types are implicitly generic
- Multiple type parameters possible
- Type classes for constraints

**Further reading:**
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

**Special features:**
- Type parameters with `<T, U>` syntax
- Multiple type parameters possible
- Type parameters can have constraints

**Further reading:**
- [Haxe Documentation - Type Parameters](https://haxe.org/manual/type-system-generics.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Type Parameters: type parameters (always present)
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

**Special features:**
- Type parameters are fundamental in Idris
- All types are implicitly generic
- Multiple type parameters possible
- Dependent types for extended type parameters

**Further reading:**
- [Idris Documentation - Types](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html#types)

</TabItem>
<TabItem value="java" label="Java">

```java
// Type Parameters: type parameters in generics (since Java 5)
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

**Special features:**
- Type parameters since Java 5
- Type parameters with `<T, U>` syntax
- Multiple type parameters possible
- Type parameters can have constraints

**Further reading:**
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

**Special features:**
- Parametric type parameters with `{T, U}` syntax
- Type parameters with `where` clauses
- Multiple type parameters possible

**Further reading:**
- [Julia Documentation - Parametric Types](https://docs.julialang.org/en/v1/manual/types/#Parametric-Types)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Type Parameters: Multiple type parameters
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

**Special features:**
- Multiple type parameters are specified separated by commas in angle brackets
- Type parameters are implicitly universally quantified
- Koka uses Hindley-Milner type inference for automatic type derivation
- Type parameters can also be used in effect signatures

**Further reading:**
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

**Special features:**
- Type parameters with `<T, U>` syntax
- Multiple type parameters possible
- Type parameters can have constraints
- Reified type parameters for inline functions

**Further reading:**
- [Kotlin Documentation - Type Parameters](https://kotlinlang.org/docs/generics.html#type-parameters)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Type Parameters: Explicit and implicit type parameters
structure Container (α β : Type) where
  first : α
  second : β

def container : Container Int String := { first := 42, second := "Hallo" }

-- Implicit type parameters with curly braces
def swap {α β : Type} (c : Container α β) : Container β α :=
  { first := c.second, second := c.first }

-- Multiple type parameters in functions
def mapFirst {α β γ : Type} (f : α → γ) (c : Container α β) : Container γ β :=
  { first := f c.first, second := c.second }
```

**Special features:**
- Explicit type parameters with `(α : Type)`, implicit with `{α : Type}`
- Auto-bound implicit parameters: Lean automatically recognizes free type variables
- Universe polymorphism with `Type u` for different universe levels
- Type parameters can also be values (dependent types)

**Further reading:**
- [Lean 4 Documentation - Implicit Arguments](https://lean-lang.org/theorem_proving_in_lean4/dependent_type_theory.html#implicit-arguments)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Type Parameters: Multiple type parameters
:- type container(T, U) ---> container(T, U).

:- func swap(container(T, U)) = container(U, T).
swap(container(First, Second)) = container(Second, First).

% Function with multiple type parameters
:- func map_first(func(T) = V, container(T, U)) = container(V, U).
map_first(F, container(First, Second)) = container(F(First), Second).
```

**Special features:**
- Type parameters in parentheses after the type name
- Multiple type parameters separated by commas
- Type parameters are automatically inferred from context
- Higher-order functions can be generic over type parameters

**Further reading:**
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

**Special features:**
- Generic type parameters with `[T, U]` syntax
- Multiple type parameters possible
- Type parameters can have constraints

**Further reading:**
- [Nim Documentation - Generic Type Parameters](https://nim-lang.org/docs/manual.html#generics)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Type Parameters: Lightweight Generics (since Xcode 7)
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

**Special features:**
- Type parameters since Xcode 7 (2015)
- Lightweight Generics with variance annotations
- Multiple type parameters possible
- Type erasure at runtime

**Further reading:**
- [Apple Documentation - Programming with Objective-C](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Type Parameters: generic type parameters (since Delphi 2009, Free Pascal 2.2)
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

**Special features:**
- Generic type parameters with `<T, U>` syntax
- Multiple type parameters possible
- Type parameters can have constraints

**Further reading:**
- [Free Pascal Documentation - Generic Type Parameters](https://www.freepascal.org/docs-html/ref/refse57.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Type Parameters: type parameters (always present) *)
type ('a, 'b) container = { first : 'a; second : 'b }

let create_container first second = { first; second }

let get_first container = container.first

let get_second container = container.second

let container = create_container 42 "Hallo"
```

**Special features:**
- Type parameters are fundamental in OCaml
- All types are implicitly generic
- Multiple type parameters possible
- Polymorphic variants for extended type parameters

**Further reading:**
- [OCaml Documentation - Type Parameters](https://ocaml.org/manual/polymorphism.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Type Parameters: generic type parameters (since Odin 0.1)
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

**Special features:**
- Generic type parameters with `typeid`
- Multiple type parameters possible
- Type parameters must be known at compile time

**Further reading:**
- [Odin Documentation - Generics](https://odin-lang.org/docs/overview/#generics)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Type Parameters: type parameters (always present)
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

**Special features:**
- Type parameters are fundamental in PureScript
- All types are implicitly generic
- Multiple type parameters possible
- `forall` for explicit polymorphism

**Further reading:**
- [PureScript Documentation - Type Parameters](https://github.com/purescript/documentation/blob/master/language/Types.md)

</TabItem>
<TabItem value="python" label="Python">

```python
# Type Parameters: type parameters with typing (since Python 3.5)
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

**Special features:**
- Type parameters since Python 3.5 (typing module)
- Type parameters defined with `TypeVar`
- Multiple type parameters possible
- Type hints not enforced at runtime

**Further reading:**
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

**Special features:**
- Type parameters with `<T, U>` syntax
- Multiple type parameters possible
- Type parameters can have constraints
- Lifetimes as special type parameters

**Further reading:**
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

**Special features:**
- Type parameters with `[T, U]` syntax
- Multiple type parameters possible
- Type parameters can have constraints
- Variance annotations (`+`, `-`)

**Further reading:**
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

**Special features:**
- Type parameters with `<T, U>` syntax
- Multiple type parameters possible
- Type parameters can have constraints
- Associated types for Protocols

**Further reading:**
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

**Special features:**
- Type parameters with `<T, U>` syntax
- Multiple type parameters possible
- Type parameters can have constraints
- Type erasure at runtime (JavaScript)

**Further reading:**
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

**Special features:**
- Type parameters with `Of T, U` syntax
- Multiple type parameters possible
- Type parameters can have constraints

**Further reading:**
- [Microsoft VB.NET Documentation - Type Parameters](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/data-types/generic-types#type-parameters)

</TabItem>
<TabItem value="v" label="V">

```v
// Type Parameters: type parameters in generics (since V 0.3)
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

**Special features:**
- Type parameters with `[T, U]` syntax
- Multiple type parameters possible
- Type parameters can have constraints

**Further reading:**
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

**Special features:**
- Type parameters with `comptime` at compile time
- Multiple type parameters possible
- Type parameters must be known at compile time
- Generic functions return types

**Further reading:**
- [Zig Documentation - Generic Data Structures](https://ziglang.org/documentation/0.11.0/#Generic-Data-Structures)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Type parameters in Custom Types
type Result error value
    = Ok value
    | Err error

-- Type parameters in Type Aliases
type alias Pair a b = { first : a, second : b }

-- Usage
myResult : Result String Int
myResult = Ok 42

myPair : Pair String Int
myPair = { first = "Hallo", second = 42 }
```

**Special features:**
- Type parameters are specified as lowercase letters after the type name
- Multiple type parameters possible (`Result error value`)
- Type parameters are concretized when used

**Further reading:**
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

**Special features:**
- Type Parameters are written in lowercase
- Multiple Type Parameters possible
- Type Inference derives concrete types

**Further reading:**
- [Gleam Documentation - Generics](https://tour.gleam.run/data-types/generics/)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Type Parameters as type variables
swap : a, b -> (b, a)
swap = \x, y -> (y, x)

mapList : List a, (a -> b) -> List b
mapList = \list, f -> List.map list f
```

**Special features:**
- Type variables are implicitly universally quantified
- Lowercase letters for type variables (e.g. `a`, `b`)

**Further reading:**
- [Roc Documentation - Types](https://www.roc-lang.org/tutorial#type-annotations)

</TabItem>
</FilteredTabs>


## 3.7.3. Bounded Type Parameters

Type parameters with constraints that restrict which types can be used as arguments.

### Languages {#sprachen}

<FilteredTabs availableTabs={['ada', 'carbon', 'crystal', 'csharp', 'd', 'dart', 'eiffel', 'fsharp', 'go', 'groovy', 'haskell', 'haxe', 'idris', 'java', 'julia', 'kotlin', 'lean4', 'mercury', 'nim', 'object-pascal', 'purescript', 'python', 'roc', 'rust', 'scala', 'swift', 'typescript', 'v', 'vbnet']} yellowTabs={['cpp']} orangeTabs={['c', 'ocaml', 'odin', 'zig']}>
<TabItem value="ada" label="Ada">

```ada
-- Bounded Type Parameters: Generic constraints
generic
    type Item_Type is private;
    type Item_Type is new Integer;  -- Constraint: must be derived from Integer
package Generic_Calculator is
    function Add(A, B : Item_Type) return Item_Type;
end Generic_Calculator;

package Int_Calculator is new Generic_Calculator(Integer);
```

**Special features:**
- Generic constraints with `is new` or `is range`
- Constraints can specify type hierarchies
- Multiple constraints possible

**Further reading:**
- [Ada Reference Manual - Generic Formal Types](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-12-5.html)

</TabItem>
<TabItem value="c" label="C">

```c
// Bounded Type Parameters: not directly supported
// Workaround: macros with type checking
#define CALCULATOR_TYPE(T) \
    _Static_assert(_Generic((T){0}, \
        int: 1, \
        long: 1, \
        default: 0), "T must be an integer type"); \
    typedef struct { \
        T value; \
    } Calculator_##T;
```

**Special features:**
- C has no direct bounded type parameters
- `_Generic` can check types at compile time
- No complete type safety

**Further reading:**
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

// Addable is an Interface/Concept
```

**Special features:**
- Type constraints with `T:! Interface` syntax
- Experimental language, syntax may still change
- Constraints define required operations

**Further reading:**
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

**Special features:**
- Type constraints with `where T : Constraint` syntax
- Constraints: `class`, `struct`, `new()`, Interfaces, Base classes
- Multiple constraints combined with `,`

**Further reading:**
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

// Or with std::enable_if (before C++20)
template<typename T>
class Calculator {
    static_assert(std::is_arithmetic_v<T>, "T must be arithmetic");
public:
    T add(T a, T b) { return a + b; }
};
```

**Special features:**
- Concepts since C++20 for type constraints
- `std::enable_if` and `static_assert` as workaround (before C++20)
- SFINAE for template specialization

**Further reading:**
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

# T must implement Addable
class IntCalculator < Calculator(Int32)
end
```

**Special features:**
- Type constraints with Modules/Interfaces
- Type parameters can have constraints
- Compile-time type checking

**Further reading:**
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

// Or with is() expressions
class NumberCalculator(T) if (isNumeric!T) {
    T add(T a, T b) {
        return a + b;
    }
}
```

**Special features:**
- Template constraints with `if` clauses
- Constraints with `is()` expressions
- Multiple constraints possible

**Further reading:**
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

**Special features:**
- Type constraints with `extends` syntax
- Constraints can be Classes or Interfaces
- Multiple constraints combined with `&`

**Further reading:**
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

-- G must satisfy COMPARABLE
int_calculator: CALCULATOR [INTEGER]
```

**Special features:**
- Generic constraints with `->` syntax
- Constraints can be Classes or Interfaces
- Compile-time type checking

**Further reading:**
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

// Or with Interfaces
type IAddable<'T> =
    abstract member Add: 'T -> 'T -> 'T

type NumberCalculator<'T when 'T :> IAddable<'T>> = {
    Add: 'T -> 'T -> 'T
}
```

**Special features:**
- Type constraints with `when` clauses
- Constraints: `comparison`, `equality`, `:>`, `: null`, `struct`, `not struct`
- Multiple constraints possible

**Further reading:**
- [F# Documentation - Type Constraints](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/generics/constraints)

</TabItem>
<TabItem value="go" label="Go">

```go
// Bounded Type Parameters: type constraints (since Go 1.18)
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

// Or with type sets (since Go 1.18)
type Numeric interface {
    ~int | ~int64 | ~float64
}

type NumberCalculator[T Numeric] struct{}

func (c NumberCalculator[T]) Add(a, b T) T {
    return a + b
}
```

**Special features:**
- Type constraints since Go 1.18
- Constraints with Interfaces or type sets
- Type sets with `|` for Union constraints

**Further reading:**
- [Go Language Specification - Type Constraints](https://go.dev/ref/spec#Type_constraints)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Bounded Type Parameters: type constraints (Java-compatible)
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

**Special features:**
- Type Constraints with `extends` syntax (Java-compatible)
- Constraints can be classes or interfaces
- Multiple constraints combined with `&`

**Further reading:**
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

-- Or with standard constraints
maxNum :: (Ord a, Num a) => a -> a -> a
maxNum a b = if a > b then a else b
```

**Special features:**
- Type class constraints with `(Constraint a) =>` syntax
- Type classes define constraints
- Multiple constraints possible

**Further reading:**
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

**Special features:**
- Type constraints with `:` syntax
- Constraints can be Classes or Interfaces
- Multiple constraints with `&` possible: `<T:Interface1 & Interface2>`

**Further reading:**
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

-- Or with standard constraints
maxNum : Ord a => Num a => a -> a -> a
maxNum a b = if a > b then a else b
```

**Special features:**
- Interface constraints with `Constraint =>` syntax
- Interfaces define constraints
- Multiple constraints possible

**Further reading:**
- [Idris Documentation - Interfaces](https://idris2.readthedocs.io/en/latest/tutorial/interfaces.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Bounded Type Parameters (since Java 5)
// Required: import java.util.List;

// Upper Bound with extends
class Calculator<T extends Comparable<T>> {
    public T max(T a, T b) {
        return a.compareTo(b) > 0 ? a : b;
    }
}

// Multiple bounds with &
class Processor<T extends Comparable<T> & Serializable> {
    public T process(T item) {
        return item;
    }
}

Calculator<Integer> calc = new Calculator<>();
int result = calc.max(5, 3); // 5
```

**Special features:**
- Type Constraints since Java 5
- Constraints with `extends` syntax
- Constraints can be classes or interfaces
- Multiple interfaces combined with `&`
- Exactly one class as bound allowed (must come first)

**Further reading:**
- [Oracle Java Documentation - Bounded Type Parameters](https://docs.oracle.com/javase/tutorial/java/generics/bounded.html)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Bounded Type Parameters: type constraints with where
abstract type Comparable end

function max_value(a::T, b::T) where T <: Comparable
    # T must be derived from Comparable
    return a > b ? a : b
end

# Or with Traits
function max_num(a::T, b::T) where {T <: Number}
    return a > b ? a : b
end
```

**Special features:**
- Type constraints with `<:` syntax in `where` clauses
- Constraints can be Abstract types or Concrete types
- Multiple constraints possible

**Further reading:**
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

**Special features:**
- Type constraints with `:` syntax
- Constraints can be Classes or Interfaces
- Multiple constraints with `where` clause

**Further reading:**
- [Kotlin Documentation - Upper Bounds](https://kotlinlang.org/docs/generics.html#upper-bounds)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Bounded Type Parameters: Type Class Constraints
class Addable (α : Type) where
  add : α → α → α

class Showable (α : Type) where
  show : α → String

-- Function with Type Class Constraint
def addValues [Addable α] (a b : α) : α :=
  Addable.add a b

-- Multiple Constraints
def addAndShow [Addable α] [Showable α] (a b : α) : String :=
  Showable.show (Addable.add a b)

-- Instanzen
instance : Addable Nat where
  add := Nat.add

instance : Showable Nat where
  show := toString
```

**Special features:**
- Type Class Constraints with `[ClassName α]` syntax
- Multiple constraints in square brackets
- Constraints are automatically resolved (Instance Resolution)
- Also supports `variable` declarations for reusable constraints

**Further reading:**
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

% Predicate with one constraint
:- pred max_value(T::in, T::in, T::out) is det <= comparable(T).
max_value(A, B, Max) :-
    ( if less_than(A, B) then Max = B else Max = A ).

% Predicate with multiple constraints
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

**Special features:**
- Bounded Type Parameters are realized in Mercury through Type Class Constraints.
- Constraints are specified with `<= (Constraint1, Constraint2)` in the predicate declaration.
- Type Classes define the operations that a type must support.
- The constraint system is similar to Haskell, but with Mercury-specific modes and determinism declarations.

**Further reading:**
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

# Or with Interfaces
type
  Addable = concept a
    (a + a) is type(a)

proc add[T: Addable](a, b: T): T =
  a + b
```

**Special features:**
- Type constraints with Concepts
- Concepts define required operations
- Compile-time type checking

**Further reading:**
- [Nim Documentation - Concepts](https://nim-lang.org/docs/manual.html#concepts)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
// Bounded Type Parameters: generic constraints (since Delphi 2009, Free Pascal 2.2)
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

**Special features:**
- Generic constraints with `:` syntax
- Constraints can be Classes or Interfaces
- Multiple constraints possible

**Further reading:**
- [Free Pascal Documentation - Generic Constraints](https://www.freepascal.org/docs-html/ref/refse57.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Bounded Type Parameters: not directly supported *)
(* Workaround: functors with module signatures *)
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

**Special features:**
- OCaml has no direct bounded type parameters
- Functors with module signatures as workaround
- Modules define constraints

**Further reading:**
- [OCaml Documentation - Functors](https://ocaml.org/manual/functors.html)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Bounded Type Parameters: not directly supported
// Workaround: type assertions at compile time
Calculator :: struct(T: typeid) where intrinsics.type_is_numeric(T) {
    // T must be numeric
}

make_calculator :: proc(T: typeid) -> Calculator(T) where intrinsics.type_is_numeric(T) {
    return Calculator(T){}
}
```

**Special features:**
- Odin has no direct bounded type parameters
- Type assertions with `where` clauses
- Intrinsics for type checking

**Further reading:**
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

-- With standard constraints
maxOf :: forall a. Ord a => a -> a -> a
maxOf a b = if a > b then a else b
```

**Special features:**
- Type class constraints with `=>` syntax
- Type classes define constraints
- Multiple constraints with `=>` chains: `Ord a => Show a => a -> String`

**Further reading:**
- [PureScript Documentation - Type Classes](https://github.com/purescript/documentation/blob/master/language/Type-Classes.md)

</TabItem>
<TabItem value="python" label="Python">

```python
# Bounded Type Parameters: type constraints (since Python 3.8)
from typing import TypeVar, Protocol

T = TypeVar('T')

class Comparable(Protocol[T]):
    def compare_to(self, other: T) -> int: ...

class Calculator(Generic[T]):
    def max(self, a: T, b: T) -> T:
        # Type checker checks if T satisfies Comparable
        return a if a.compare_to(b) > 0 else b

# Or with TypeVar bounds
T = TypeVar('T', bound=Comparable)

class NumberCalculator(Generic[T]):
    def add(self, a: T, b: T) -> T:
        return a + b  # Type checker checks if T supports +
```

**Special features:**
- Type constraints since Python 3.8 (typing module)
- Constraints with `bound=` or `Protocol`
- Type hints not enforced at runtime

**Further reading:**
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

// Or with where clauses
struct NumberCalculator<T> where T: std::ops::Add<Output = T> {
    _phantom: std::marker::PhantomData<T>,
}
```

**Special features:**
- Trait bounds with `:` or `where` clauses
- Traits define constraints
- Multiple constraints possible
- Lifetimes as special constraints

**Further reading:**
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

**Special features:**
- Type bounds with `<:` (upper bound) or `>:` (lower bound)
- Constraints can be Classes or Traits
- Multiple constraints possible
- Variance annotations (`+`, `-`)

**Further reading:**
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

**Special features:**
- Type constraints with `:` syntax
- Constraints can be Protocols or Classes
- Multiple constraints possible
- Associated types for Protocols

**Further reading:**
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

**Special features:**
- Type constraints with `extends` syntax
- Constraints can be Interfaces, Classes or Type aliases
- Multiple constraints possible
- Type erasure at runtime (JavaScript)

**Further reading:**
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
        ' T must be a Value Type
        Return CType(CObj(a), T)
    End Function
End Class
```

**Special features:**
- Type constraints with `As` syntax
- Constraints: `Class`, `Structure`, `New()`, Interfaces, Base classes
- Multiple constraints possible

**Further reading:**
- [Microsoft VB.NET Documentation - Type Constraints](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/data-types/generic-types#constraints)

</TabItem>
<TabItem value="v" label="V">

```v
// Bounded Type Parameters: type constraints (since V 0.3)
interface Comparable[T] {
    compare_to(other T) int
}

struct Calculator[T] {
    // T must implement Comparable
}

fn (c Calculator[T]) max(a T, b T) T {
    if a.compare_to(b) > 0 {
        return a
    }
    return b
}
```

**Special features:**
- Type constraints with Interfaces
- Type parameters can have constraints
- Compile-time type checking

**Further reading:**
- [V Documentation - Generics](https://github.com/vlang/v/blob/master/doc/docs.md#generics)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Bounded Type Parameters: not directly supported
// Workaround: comptime type checks
fn Calculator(comptime T: type) type {
    // Check at compile time if T has the required operations
    comptime {
        _ = @typeInfo(T);
        // Manual checking required
    }
    return struct {
        pub fn add(a: T, b: T) T {
            return a + b;  // Compiler checks at compile time
        }
    };
}
```

**Special features:**
- Zig has no direct bounded type parameters
- Comptime type checks as workaround
- Manual type checking required

**Further reading:**
- [Zig Documentation - Generic Data Structures](https://ziglang.org/documentation/0.11.0/#Generic-Data-Structures)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Bounded Type Parameters with Abilities
maxOf : a, a -> a where a implements Ord
maxOf = \x, y ->
    if x > y then x else y
```

**Special features:**
- `where a implements Ability` for Type Constraints
- Abilities are similar to Type Classes or Traits

**Further reading:**
- [Roc Documentation - Abilities](https://www.roc-lang.org/tutorial#abilities)

</TabItem>
</FilteredTabs>


## 3.7.4. Template Specialization

Special implementations of templates for specific types or type combinations.

### Languages {#sprachen}

<FilteredTabs availableTabs={['carbon', 'cpp', 'd', 'nim', 'zig']} orangeTabs={['c']}>
<TabItem value="c" label="C">

```c
// Template Specialization: not directly supported
// Workaround: macros with type checking
#define SWAP_TYPE(T) \
    void swap_##T(T* a, T* b) { \
        T temp = *a; \
        *a = *b; \
        *b = temp; \
    }

SWAP_TYPE(int)
SWAP_TYPE(double)

// Specialization for pointers
#define SWAP_PTR(T) \
    void swap_ptr_##T(T** a, T** b) { \
        T* temp = *a; \
        *a = *b; \
        *b = temp; \
    }
```

**Special features:**
- C has no direct Template Specializations
- Macros can simulate specialized versions
- No complete type safety

**Further reading:**
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

// Specialization for specific types (syntax not yet final)
// class Container(String) {
//     fn get(self: Self) -> String {
//         // Specialized implementation
//     }
// }
```

**Special features:**
- Template Specialization is planned
- Experimental language, syntax may still change
- Currently not yet fully implemented

**Further reading:**
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

**Special features:**
- Explicit specialization with `template<>`
- Partial specialization for partial types possible
- Function template specialization possible
- SFINAE for template specialization

**Further reading:**
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

**Special features:**
- Template specialization with specific types
- Partial specialization with `if` clauses and `is()` expressions
- Multiple specializations possible

**Further reading:**
- [D Language Specification - Template Specialization](https://dlang.org/spec/template.html#template-specialization)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Template Specialization: generics with when clauses
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

**Special features:**
- Specialization with `when` clauses at compile time
- Pattern matching on types
- Compile-time polymorphism

**Further reading:**
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

**Special features:**
- Specialization with `comptime` type checks
- Pattern matching on types at compile time
- Compile-time polymorphism

**Further reading:**
- [Zig Documentation - Comptime](https://ziglang.org/documentation/0.11.0/#comptime)

</TabItem>
</FilteredTabs>


## 3.7.5. Concepts (C++20)

Named requirements for template parameters that define constraints and requirements for types.

### Languages {#sprachen}

<FilteredTabs availableTabs={['carbon', 'cpp', 'd', 'haskell', 'lean4', 'mercury', 'nim', 'rust', 'scala']} orangeTabs={['zig']}>
<TabItem value="carbon" label="Carbon">

```cpp
// Concepts: interfaces as constraints (planned)
interface Addable {
    fn add(self: Self, other: Self) -> Self;
}

generic class Calculator(T:! Addable) {
    fn add(self: Self, a: T, b: T) -> T {
        return a.add(b);
    }
}
```

**Special features:**
- Interfaces as Concepts (planned)
- Experimental language, syntax may still change
- Similar to C++20 Concepts

**Further reading:**
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

// Usage
int result1 = add(5, 3);           // OK: int satisfies Addable
double result2 = multiply(2.5, 3.0); // OK: double satisfies Numeric
```

**Special features:**
- Concepts since C++20
- `concept` keyword for definition
- `requires` clauses for requirements
- Combinable with `&&` and `||`
- Standard Concepts in `<concepts>` header

**Further reading:**
- [cppreference.com - Concepts](https://en.cppreference.com/w/cpp/language/constraints)

</TabItem>
<TabItem value="d" label="D">

```d
// Concepts: template constraints (similar to Concepts)
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

// Or with is() expressions
class NumericCalculator(T) if (isNumeric!T) {
    T multiply(T a, T b) {
        return a * b;
    }
}
```

**Special features:**
- Template constraints similar to Concepts
- `is()` expressions for type checking
- Interfaces can be used as Concepts
- Compile-time type checking

**Further reading:**
- [D Language Specification - Template Constraints](https://dlang.org/spec/template.html#template-constraints)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Concepts: type classes (similar to Concepts)
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

**Special features:**
- Type classes are similar to Concepts
- Define requirements for types
- Instances implement Concepts for concrete types
- Multiple constraints possible

**Further reading:**
- [Haskell Documentation - Type Classes](https://www.haskell.org/tutorial/classes.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Concepts: Type Classes als Constraints
class Addable (α : Type) where
  add : α → α → α

class Numeric (α : Type) extends Addable α where
  multiply : α → α → α

-- Instances implement Concepts for concrete types
instance : Addable Int where
  add := Int.add

instance : Numeric Int where
  multiply := Int.mul

-- Usage with constraints
def sum [Addable α] (a b : α) : α :=
  Addable.add a b

def product [Numeric α] (a b : α) : α :=
  Numeric.multiply a b

def result1 : Int := sum 5 3           -- 8
def result2 : Int := product 2 3       -- 6
```

**Special features:**
- Type Classes define named requirements for types (similar to Concepts)
- `extends` for type class inheritance
- Instances implement Concepts for concrete types
- Automatic instance resolution at compile time

**Further reading:**
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

% Instances implement Concepts for concrete types
:- instance addable(int) where [
    add(A, B) = A + B
].
:- instance numeric(int) where [
    multiply(A, B) = A * B
].

% Usage with constraints
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

**Special features:**
- Type Classes define named requirements for types, equivalent to Concepts.
- Superclass constraints with `<= superclass(T)` enable inheritance of requirements.
- Instances implement the required functions/predicates for concrete types.
- Constraints in function/predicate declarations with `<= constraint(T)`.

**Further reading:**
- [The Mercury Language Reference Manual - Type Classes](https://www.mercurylang.org/documentation/reference.html#Type_classes)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Concepts: concepts (since Nim 1.0)
type
  Addable = concept a, b
    (a + b) is type(a)

  Numeric = concept a
    a is int or a is float

proc add[T: Addable](a, b: T): T =
  a + b

proc multiply[T: Numeric](a, b: T): T =
  a * b

# Usage
let result1 = add(5, 3)        # OK: int satisfies Addable
let result2 = multiply(2.5, 3.0) # OK: float satisfies Numeric
```

**Special features:**
- Concepts since Nim 1.0
- Define required operations
- Compile-time type checking
- Pattern matching on types

**Further reading:**
- [Nim Documentation - Concepts](https://nim-lang.org/docs/manual.html#concepts)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Concepts: traits (similar to Concepts)
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

// Usage
let result1 = add(5, 3);           // OK: i32 satisfies Addable
let result2 = multiply(2.5, 3.0); // OK: f64 satisfies Numeric
```

**Special features:**
- Traits are similar to Concepts
- Define requirements for types
- Implementations satisfy traits
- Multiple trait bounds possible

**Further reading:**
- [The Rust Book - Traits](https://doc.rust-lang.org/book/ch10-02-traits.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Concepts: type classes (similar to Concepts)
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

// Usage
val result1 = add(5, 3)        // OK: Int satisfies Addable
val result2 = multiply(2, 3)   // OK: Int satisfies Numeric
```

**Special features:**
- Type classes are similar to Concepts
- Implicit parameters for type classes
- Define requirements for types
- Multiple constraints possible

**Further reading:**
- [Scala Documentation - Type Classes](https://docs.scala-lang.org/tour/implicit-parameters.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Concepts: not directly supported
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

// Or with Interfaces (planned)
// const Addable = struct {
//     pub fn add(self: @This(), other: @This()) @This();
// };
```

**Special features:**
- Zig has no direct Concepts
- Comptime type checks as workaround
- Interfaces are planned
- Manual type checking required

**Further reading:**
- [Zig Documentation - Comptime](https://ziglang.org/documentation/0.11.0/#comptime)

</TabItem>
</FilteredTabs>


## 3.7.6. Variance (Covariance, Contravariance, Invariance)

Rules that determine how subtype relationships between generic types relate to subtype relationships of their type parameters.

### Languages {#sprachen}

<FilteredTabs availableTabs={['csharp', 'fsharp', 'groovy', 'haskell', 'java', 'kotlin', 'objective-c', 'ocaml', 'purescript', 'python', 'scala', 'typescript', 'vbnet']} yellowTabs={['dart', 'php']} orangeTabs={['cpp', 'go', 'nim', 'rust', 'swift']}>
<TabItem value="csharp" label="C#">

```csharp
// Variance: Covariance and Contravariance (since C# 4.0)
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

// Invariance: no keywords
interface IContainer<T> {
    void Set(T item);
    T Get();
}

// Usage
IProducer<Dog> dogProducer = null;
IProducer<Animal> animalProducer = dogProducer; // OK: Covariance

IConsumer<Animal> animalConsumer = null;
IConsumer<Dog> dogConsumer = animalConsumer; // OK: Contravariance

IContainer<Dog> dogContainer = null;
// IContainer<Animal> animalContainer = dogContainer; // Error: Invariance
```

**Special features:**
- Covariance with `out` keyword (since C# 4.0)
- Contravariance with `in` keyword (since C# 4.0)
- Only for Interfaces and Delegates
- Arrays are covariant (unsafe)

**Further reading:**
- [Microsoft C# Documentation - Variance](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/covariance-contravariance/)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Variance: not directly supported
// Templates are invariant
class Animal { };
class Dog : public Animal { };

template<typename T>
class Container {
public:
    void set(T item) { }
    T get() { return T(); }
};

// No automatic conversion
Container<Dog> dogContainer;
// Container<Animal> animalContainer = dogContainer; // Error: Invariance

// Workaround: explicit conversion or polymorphism
template<typename T>
class Container {
public:
    virtual void set(T* item) = 0;
    virtual T* get() = 0;
};
```

**Special features:**
- C++ Templates are invariant
- No automatic variance support
- Polymorphism with Pointers/References as workaround
- Concepts can define constraints

**Further reading:**
- [cppreference.com - Templates](https://en.cppreference.com/w/cpp/language/templates)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Variance: Covariance (since Dart 2.0)
class Animal {}
class Dog extends Animal {}

// Generics sind kovariant
List<Dog> dogs = [Dog()];
List<Animal> animals = dogs; // OK: Covariance

// Contravariance not directly supported
// Invariance for mutable Collections
class Container<T> {
  T? _value;
  void set(T value) { _value = value; }
  T? get() => _value;
}

Container<Dog> dogContainer = Container<Dog>();
// Container<Animal> animalContainer = dogContainer; // Error: Invariance
```

**Special features:**
- Generics are covariant for read-only Collections
- Mutable Collections are invariant
- Contravariance not directly supported
- Type erasure at runtime

**Further reading:**
- [Dart Documentation - Generics](https://dart.dev/language/generics)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Variance via .NET Interfaces
// Required: System.Collections.Generic
type Animal() = class end
type Dog() = inherit Animal()

// IEnumerable<'T> is covariant (declared in .NET with out annotation)
let dogs: seq<Dog> = seq { yield Dog() }
let animals: seq<Animal> = dogs  // OK: Covariance

// IComparable<'T> is contravariant (declared in .NET with in annotation)
// F# itself does not declare variance directly on its own interfaces
```

**Special features:**
- Variance is supported via .NET CLR interfaces (e.g. `IEnumerable<out T>`, `IComparable<in T>`)
- F# consumes variant interfaces from .NET
- Only for Interfaces and Delegates
- Compile-time type checking

**Further reading:**
- [F# Documentation - Generics](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/generics/)

</TabItem>

<TabItem value="go" label="Go">

```go
// Variance: not directly supported (since Go 1.18)
type Animal struct{}
type Dog struct{ Animal }

// Generics sind invariant
type Container[T any] struct {
    value T
}

func NewContainer[T any](value T) Container[T] {
    return Container[T]{value: value}
}

// No automatic conversion
dogContainer := NewContainer(Dog{})
// animalContainer := Container[Animal](dogContainer) // Error: Invariance
```

**Special features:**
- Generics are invariant (since Go 1.18)
- No automatic variance support
- Interfaces can enable polymorphism
- Type erasure at runtime

**Further reading:**
- [Go Language Specification - Type Parameters](https://go.dev/ref/spec#Type_parameters)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Variance: Wildcards (Java-compatible)
class Animal {}
class Dog extends Animal {}

// Covariance: ? extends
List<? extends Animal> animals = new ArrayList<Dog>()

// Contravariance: ? super
List<? super Dog> dogs = new ArrayList<Animal>()

// Invariance: no wildcards
List<Dog> dogList = new ArrayList<Dog>()
// List<Animal> animalList = dogList // Error: Invariance
```

**Special features:**
- Wildcards for variance (Java-compatible)
- Covariance with `? extends`
- Contravariance with `? super`
- Generics are invariant without wildcards

**Further reading:**
- [Groovy Documentation - Generics](https://groovy-lang.org/objectorientation.html#generics)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Variance: Functor (Covariance) and Contravariant
data Animal = Animal
data Dog = Dog Animal

-- Covariance: Functor
class Functor f where
    fmap :: (a -> b) -> f a -> f b

-- Contravariance: Contravariant
class Contravariant f where
    contramap :: (b -> a) -> f a -> f b

-- Invariance: no automatic conversion
data Container a = Container a

-- No automatic conversion
dogContainer :: Container Dog
dogContainer = Container Dog
-- animalContainer :: Container Animal = dogContainer -- Error: Invariance
```

**Special features:**
- Functor for covariance
- Contravariant for contravariance
- Type classes define variance
- Compile-time type checking

**Further reading:**
- [Haskell Documentation - Functor](https://hackage.haskell.org/package/base-4.19.0.0/docs/Data-Functor.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Variance: Wildcards (since Java 5)
class Animal { }
class Dog extends Animal { }

// Covariance: ? extends
List<? extends Animal> animals = new ArrayList<Dog>();

// Contravariance: ? super
List<? super Dog> dogs = new ArrayList<Animal>();

// Invariance: no wildcards
List<Dog> dogList = new ArrayList<Dog>();
// List<Animal> animalList = dogList; // Error: Invariance
```

**Special features:**
- Wildcards for variance (since Java 5)
- Covariance with `? extends`
- Contravariance with `? super`
- Generics are invariant without wildcards
- Type erasure at runtime

**Further reading:**
- [Oracle Java Documentation - Wildcards](https://docs.oracle.com/javase/tutorial/java/generics/wildcards.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Variance: Declaration-site variance (since Kotlin 1.0)
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

// Invariance: no keywords
interface Container<T> {
    fun set(item: T)
    fun get(): T
}

// Usage
val dogProducer: Producer<Dog> = object : Producer<Dog> {
    override fun get() = Dog()
}
val animalProducer: Producer<Animal> = dogProducer // OK: Covariance

val animalConsumer: Consumer<Animal> = object : Consumer<Animal> {
    override fun accept(item: Animal) {}
}
val dogConsumer: Consumer<Dog> = animalConsumer // OK: Contravariance
```

**Special features:**
- Declaration-site variance with `out` and `in` (since Kotlin 1.0)
- Use-site variance with `out` and `in` possible
- Covariance with `out` keyword
- Contravariance with `in` keyword

**Further reading:**
- [Kotlin Documentation - Variance](https://kotlinlang.org/docs/generics.html#variance)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Variance: not directly supported
type
  Animal = object of RootObj
  Dog = object of Animal

# Generics are invariant
type Container[T] = object
  value: T

proc newContainer[T](value: T): Container[T] =
  Container[T](value: value)

# No automatic conversion
var dogContainer = newContainer(Dog())
# var animalContainer: Container[Animal] = dogContainer # Error: Invariance
```

**Special features:**
- Generics are invariant
- No automatic variance support
- Polymorphism via inheritance with `ref object of` possible
- Compile-time type checking

**Further reading:**
- [Nim Documentation - Generics](https://nim-lang.org/docs/manual.html#generics)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Variance: Lightweight Generics (since Xcode 7)
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

// Usage
Producer<Dog *> *dogProducer = nil;
Producer<Animal *> *animalProducer = dogProducer; // OK: Covariance

Consumer<Animal *> *animalConsumer = nil;
Consumer<Dog *> *dogConsumer = animalConsumer; // OK: Contravariance
```

**Special features:**
- Lightweight Generics with variance annotations (since Xcode 7)
- Covariance with `__covariant`
- Contravariance with `__contravariant`
- Type erasure at runtime

**Further reading:**
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

(* Invariance: no annotation *)
type 'a container = { set : 'a -> unit; get : unit -> 'a }

(* Usage *)
let dog_producer : dog producer = { get = fun () -> Dog Animal }
let animal_producer : animal producer = dog_producer (* OK: Covariance *)
```

**Special features:**
- Variance annotations with `+` and `-`
- Covariance with `+` annotation
- Contravariance with `-` annotation
- Compile-time type checking

**Further reading:**
- [OCaml Documentation - Variance](https://ocaml.org/manual/polymorphism.html#s:variance)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Variance: Functor (Covariance) and Contravariant
data Animal = Animal
data Dog = Dog Animal

-- Covariance: Functor
class Functor f where
    map :: forall a b. (a -> b) -> f a -> f b

-- Contravariance: Contravariant
class Contravariant f where
    cmap :: forall a b. (b -> a) -> f a -> f b

-- Invariance: no automatic conversion
data Container a = Container a

-- No automatic conversion
dogContainer :: Container Dog
dogContainer = Container (Dog Animal)
-- animalContainer :: Container Animal = dogContainer -- Error: Invariance
```

**Special features:**
- Functor for covariance
- Contravariant for contravariance
- Type classes define variance
- Compile-time type checking

**Further reading:**
- [PureScript Documentation - Functor](https://pursuit.purescript.org/packages/purescript-prelude/docs/Data.Functor)

</TabItem>
<TabItem value="python" label="Python">

```python
# Variance: Type hints (since Python 3.5)
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

# Type hints not enforced at runtime
dog_producer: Producer[Dog] = None
animal_producer: Producer[Animal] = dog_producer  # OK: Covariance
```

**Special features:**
- Type hints for variance (since Python 3.5)
- Covariance with `covariant=True`
- Contravariance with `contravariant=True`
- Type hints not enforced at runtime

**Further reading:**
- [Python Documentation - TypeVar](https://docs.python.org/3/library/typing.html#typing.TypeVar)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Variance: not directly supported
trait Animal {}
struct Dog {}

impl Animal for Dog {}

// Generics are invariant
struct Container<T> {
    value: T,
}

// No automatic conversion
let dog_container: Container<Dog> = Container { value: Dog {} };
// let animal_container: Container<dyn Animal> = dog_container; // Error: Invariance

// Workaround: Trait objects
struct ContainerBox {
    value: Box<dyn Animal>,
}
```

**Special features:**
- Generics are invariant
- No automatic variance support
- Trait objects for polymorphism
- Lifetimes affect variance

**Further reading:**
- [The Rust Book - Trait Objects](https://doc.rust-lang.org/book/ch17-02-trait-objects.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Variance: Declaration-site variance (since Scala 1.0)
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

// Invariance: no annotation
trait Container[T] {
    def set(item: T): Unit
    def get: T
}

// Usage
val dogProducer: Producer[Dog] = new Producer[Dog] {
    def get = new Dog
}
val animalProducer: Producer[Animal] = dogProducer // OK: Covariance

val animalConsumer: Consumer[Animal] = new Consumer[Animal] {
    def accept(item: Animal): Unit = {}
}
val dogConsumer: Consumer[Dog] = animalConsumer // OK: Contravariance
```

**Special features:**
- Declaration-site variance with `+` and `-` (since Scala 1.0)
- Covariance with `+` annotation
- Contravariance with `-` annotation
- Use-site variance with `+` and `-` possible

**Further reading:**
- [Scala Documentation - Variance](https://docs.scala-lang.org/tour/variances.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Variance: not directly supported
class Animal {}
class Dog : Animal {}

// Generics are invariant
struct Container<T> {
    var value: T
}

// No automatic conversion
let dogContainer = Container(value: Dog())
// let animalContainer: Container<Animal> = dogContainer // Error: Invariance

// Workaround: Protocols with associated types
protocol Producer {
    associatedtype T
    func get() -> T
}
```

**Special features:**
- Generics are invariant
- No automatic variance support
- Protocols with associated types for polymorphism
- Type erasure at runtime

**Further reading:**
- [Swift Documentation - Generics](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/generics/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Variance: Structural typing (since TypeScript 1.0)
class Animal {}
class Dog extends Animal {}

// Covariance: automatic for read-only
interface Producer<T> {
    get(): T;
}

// Contravariance: automatic for write-only
interface Consumer<T> {
    accept(item: T): void;
}

// Invariance: for read-write
interface Container<T> {
    set(item: T): void;
    get(): T;
}

// Usage
const dogProducer: Producer<Dog> = { get: () => new Dog() };
const animalProducer: Producer<Animal> = dogProducer; // OK: Covariance

const animalConsumer: Consumer<Animal> = { accept: (item: Animal) => {} };
const dogConsumer: Consumer<Dog> = animalConsumer; // OK: Contravariance
```

**Special features:**
- Structural typing enables automatic variance
- Covariance for read-only interfaces
- Contravariance for write-only interfaces
- Invariance for read-write interfaces
- Type erasure at runtime (JavaScript)

**Further reading:**
- [TypeScript Handbook - Variance](https://www.typescriptlang.org/docs/handbook/2/objects.html#variance)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Variance: Covariance and Contravariance (since VB.NET 2010)
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

' Invariance: no keywords
Interface IContainer(Of T)
    Sub Set(item As T)
    Function Get() As T
End Interface

' Usage
Dim dogProducer As IProducer(Of Dog) = Nothing
Dim animalProducer As IProducer(Of Animal) = dogProducer ' OK: Covariance

Dim animalConsumer As IConsumer(Of Animal) = Nothing
Dim dogConsumer As IConsumer(Of Dog) = animalConsumer ' OK: Contravariance
```

**Special features:**
- Covariance with `Out` keyword (since VB.NET 2010)
- Contravariance with `In` keyword (since VB.NET 2010)
- Only for interfaces and delegates
- Similar to C#

**Further reading:**
- [Microsoft VB.NET Documentation - Variance](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/concepts/covariance-contravariance/)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
// Variance (since PHP 7.4)
class Animal {}
class Dog extends Animal {}

class AnimalShelter {
    public function adopt(Dog $dog): Animal {
        return $dog;
    }
}

class DogShelter extends AnimalShelter {
    // Covariant: return type may be more specific
    // Contravariant: parameter type may be more general
    public function adopt(Animal $animal): Dog {
        return new Dog();
    }
}
?>
```

**Special features:**
- Covariant return types since PHP 7.4
- Contravariant parameter types since PHP 7.4
- Generics are not supported, variance only for inheritance

**Further reading:**
- [PHP Documentation - Covariance and Contravariance](https://www.php.net/manual/en/language.oop5.variance.php)

</TabItem>
</FilteredTabs>


## 3.7.7. Higher-Kind Types

Types that themselves take types as parameters enable abstract operations over type constructors.

### Languages {#languages}

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

-- Usage
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

**Special features:**
- Higher-Kind Types are fundamental in Haskell
- Type constructors like `Maybe`, `[]`, `IO` are Higher-Kind Types
- Type classes work with Higher-Kind Types
- Compile-time type checking

**Further reading:**
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

-- Usage
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

**Special features:**
- Higher-Kind Types are fundamental in Idris
- Type constructors are Higher-Kind Types
- Interfaces work with Higher-Kind Types
- Dependent types extend Higher-Kind Types

**Further reading:**
- [Idris Documentation - Type Constructors](https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html#type-constructors)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Higher-Kind Types: type constructors as parameters
class Functor (f : Type → Type) where
  map : (α → β) → f α → f β

class Functor f => Applicative (f : Type → Type) where
  pure : α → f α
  seq : f (α → β) → f α → f β

class Applicative f => Monad (f : Type → Type) where
  bind : f α → (α → f β) → f β

-- Usage with Option (Maybe)
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

**Special features:**
- Full support for Higher-Kind Types with `Type → Type`
- Type Classes work natively with type constructors
- `Functor`, `Applicative`, `Monad` are defined in the standard library
- Also supports higher kinds like `(Type → Type) → Type`

**Further reading:**
- [Lean 4 Documentation - Type Classes](https://lean-lang.org/theorem_proving_in_lean4/type_classes.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Higher-Kind Types: functors (similar to Higher-Kind Types) *)
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

(* Usage *)
module MaybeFunctor : Functor with type 'a t = 'a option = struct
    type 'a t = 'a option
    let map f = function
        | Some x -> Some (f x)
        | None -> None
end
```

**Special features:**
- Functors are similar to Higher-Kind Types
- Module types define abstract type constructors
- Compile-time type checking
- Polymorphic variants for extended Higher-Kind Types

**Further reading:**
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

-- Usage
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

**Special features:**
- Higher-Kind Types are fundamental in PureScript
- Type constructors are Higher-Kind Types
- Type classes work with Higher-Kind Types
- Compile-time type checking

**Further reading:**
- [PureScript Documentation - Type Constructors](https://github.com/purescript/documentation/blob/master/language/Types.md)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Higher-Kind Types: not directly supported
// Workaround: Associated types and Traits
trait Functor {
    type Inner;
    type Output<B>;
    
    fn map<B, F>(self, f: F) -> Self::Output<B>
    where
        F: FnOnce(Self::Inner) -> B;
}

// Or with generic Associated types (planned)
// trait Functor {
//     type Output<T>;
//     fn map<B, F>(self, f: F) -> Self::Output<B>
//     where
//         F: FnOnce(Self::Inner) -> B;
// }

// Usage with concrete types
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

**Special features:**
- Rust has no direct Higher-Kind Types
- Associated types as workaround
- Generic Associated types are planned
- Traits can simulate abstract type constructors

**Further reading:**
- [The Rust Book - Associated Types](https://doc.rust-lang.org/book/ch19-03-advanced-traits.html#associated-types)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Higher-Kind Types: type constructors (since Scala 2.5)
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

// Usage
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

**Special features:**
- Higher-Kind Types since Scala 2.5
- Type constructors with `F[_]` syntax
- Type classes work with Higher-Kind Types
- Implicit parameters for type classes

**Further reading:**
- [Scala Documentation - Higher-Kinded Types](https://docs.scala-lang.org/tutorials/FAQ/higher-kinded-types.html)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Higher-Kind Types: type-level programming (since TypeScript 2.8)
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

// Usage
type Maybe<A> = { type: 'Maybe'; value: A | null };

const MaybeFunctor: Functor<Maybe<any>> = {
    map: <A, B>(fa: Maybe<A>, f: (a: A) => B): Maybe<B> => ({
        type: 'Maybe',
        value: fa.value !== null ? f(fa.value) : null,
    }),
};
```

**Special features:**
- Higher-Kind Types with type-level programming (since TypeScript 2.8)
- Type-level HKT simulation with conditional types
- Defunctionalization for Higher-Kind Types
- Type erasure at runtime (JavaScript)

**Further reading:**
- [TypeScript Handbook - Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html)

</TabItem>
</FilteredTabs>

## 3.7.8. Type Erasure vs. Reification

Type Erasure and Reification describe how generic type information is handled at runtime. With **Type Erasure**, type parameters are removed at compile time and are not available at runtime. With **Reification**, generic type information remains available at runtime and can be queried. **Monomorphization** generates a specialized version of the generic code at compile time for each type used.

### Languages {#languages}

<FilteredTabs availableTabs={['csharp', 'cpp', 'crystal', 'd', 'dart', 'fsharp', 'go', 'haskell', 'java', 'koka', 'kotlin', 'lean4', 'mercury', 'nim', 'ocaml', 'rust', 'scala', 'swift', 'typescript', 'v', 'zig']}>
<TabItem value="csharp" label="C#">

```csharp
// Reification: Generic type information remains available at runtime
var strings = new List<string>();
var numbers = new List<int>();

// Different types at runtime
Console.WriteLine(strings.GetType() == numbers.GetType()); // false
Console.WriteLine(strings.GetType().Name); // "List`1[System.String]"

// typeof(T) available in generic methods
void PrintType<T>()
{
    Console.WriteLine(typeof(T).Name); // e.g. "String", "Int32"
}

PrintType<string>(); // "String"
PrintType<int>();    // "Int32"

// Type checking with generic types possible
if (strings is List<string>) { /* OK */ }
```

**Special features:**
- .NET uses reification — generic type information remains fully available at runtime
- `typeof(T)` allows access to the concrete type parameter in generic methods
- `is` and `as` operators work with generic types
- Reflection can read generic type parameters at runtime
- Value types (e.g. `int`) are natively specialized (no boxing)

**Further reading:**
- [Microsoft C# Documentation - Generics](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/types/generics)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Monomorphization: Each template instantiation generates separate code
template<typename T>
void printInfo()
{
    std::cout << "Type: " << typeid(T).name()
              << ", Size: " << sizeof(T) << std::endl;
}

// Compiler generates separate functions:
printInfo<int>();         // own function for int
printInfo<double>();      // own function for double
printInfo<std::string>(); // own function for std::string

// Each instantiation is its own type
std::vector<int> vi;
std::vector<double> vd;
std::cout << (typeid(vi) == typeid(vd)); // false
```

**Special features:**
- C++ uses monomorphization — templates generate specialized code at compile time for each type
- `typeid` provides runtime type information (RTTI)
- `sizeof(T)` is available at compile time
- Template specialization allows type-specific implementations
- Increases code size, but avoids runtime overhead

**Further reading:**
- [cppreference.com - Templates](https://en.cppreference.com/w/cpp/language/templates)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Monomorphization: Generics become specialized versions
def identity(value : T) : T forall T
  value
end

# Compiler generates separate functions
x = identity(42)      # specialized for Int32
s = identity("hello") # specialized for String

# typeof available at compile time
puts typeof(x) # Int32
puts typeof(s) # String

# Type checking at runtime
puts x.is_a?(Int32)  # true
puts s.is_a?(String) # true
```

**Special features:**
- Crystal uses monomorphization — each generic instantiation generates specialized code
- `typeof()` provides the type at compile time
- `is_a?` for runtime type checking
- No type parameters at runtime, but specialized code per type

**Further reading:**
- [Crystal Documentation - Generics](https://crystal-lang.org/reference/syntax_and_semantics/generics.html)

</TabItem>
<TabItem value="d" label="D">

```d
// Monomorphization: Templates generate specialized code
T identity(T)(T value)
{
    return value;
}

// Compiler generates separate functions
auto x = identity!int(42);
auto s = identity!string("hello");

// typeid for runtime type info
void printType(T)(T value)
{
    writeln(typeid(T));
}

printType(42);      // int
printType("hello"); // immutable(char)[]
```

**Special features:**
- D uses monomorphization — templates generate specialized code
- `typeid(T)` provides runtime type information
- Template specialization for type-specific implementations
- `static if` allows compile-time decisions based on types
- CTFE (Compile-Time Function Execution) complements template metaprogramming

**Further reading:**
- [D Language Documentation - Templates](https://dlang.org/spec/template.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Reification: Generic type information available at runtime
var strings = <String>["a", "b"];
var numbers = <int>[1, 2];

// Different types at runtime
print(strings.runtimeType); // List<String>
print(numbers.runtimeType); // List<int>

// Type checking with generic types
print(strings is List<String>); // true
print(strings is List<int>);    // false

// Generic type parameter available in functions
void printType<T>() {
  print(T); // e.g. String, int
}

printType<String>(); // String
printType<int>();    // int
```

**Special features:**
- Dart uses reification — generic type information remains available at runtime
- `is` operator works with generic types
- `runtimeType` shows the complete generic type
- `T` can be used as a value in generic functions

**Further reading:**
- [Dart Documentation - Generics](https://dart.dev/language/generics)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Reification: .NET preserves generic type information
let strings = [ "a"; "b" ]
let numbers = [ 1; 2 ]

// typeof<'T> available in generic functions
let printType<'T> () =
    printfn "%s" (typeof<'T>.Name)

printType<string> () // "String"
printType<int> ()    // "Int32"

// Type checking with generic types
let checkType (x: obj) =
    match x with
    | :? list<int> -> "list<int>"
    | :? list<string> -> "list<string>"
    | _ -> "Unknown"
```

**Special features:**
- F# uses .NET reification — generic type information remains available at runtime
- `typeof<'T>` provides the concrete type parameter
- Pattern matching on generic types possible
- Inline functions with `^T` (statically resolved type parameters) are monomorphized

**Further reading:**
- [F# Documentation - Generics](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/generics/)

</TabItem>
<TabItem value="go" label="Go">

```go
// Monomorphization (since Go 1.18)
func PrintType[T any](value T) {
    fmt.Printf("Type: %T, Value: %v\n", value, value)
}

PrintType(42)      // Type: int, Value: 42
PrintType("hello") // Type: string, Value: hello

// Compiler uses mix of stenciling and dictionaries
// Similar types can share code (GC Shape Stenciling)
func Max[T constraints.Ordered](a, b T) T {
    if a > b {
        return a
    }
    return b
}

Max(3, 5)     // specialized for int
Max(1.5, 2.5) // specialized for float64
```

**Special features:**
- Go uses monomorphization with GC Shape Stenciling since 1.18
- Types with the same memory representation share code (more efficient than full monomorphization)
- `%T` in `fmt.Printf` shows the concrete type at runtime
- Reflection (`reflect.TypeOf`) provides runtime type information

**Further reading:**
- [Go Blog - Generics](https://go.dev/blog/intro-generics)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Type Erasure: Parametric polymorphism with erasure
-- Type parameters do not exist at runtime
identity :: a -> a
identity x = x

-- Compiler generates uniform code for all types
-- (uniform representation via pointers)

-- Typeable as workaround for runtime type info
-- Required: import Data.Typeable
showType :: Typeable a => a -> String
showType x = show (typeOf x)

-- showType (42 :: Int)       → "Int"
-- showType ("hello" :: String) → "[Char]"
```

**Special features:**
- Haskell uses type erasure — type parameters are removed at compile time
- Uniform representation: All values are stored as pointers (boxing)
- Dictionary passing: Type class constraints are passed as hidden dictionary parameters
- `Typeable` type class as optional workaround for runtime type information
- No runtime overhead for generic code, but boxing overhead

**Further reading:**
- [GHC Documentation - Typeable](https://hackage.haskell.org/package/base/docs/Data-Typeable.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Type Erasure: Generic type parameters are removed at compile time
List<String> strings = new ArrayList<>();
List<Integer> numbers = new ArrayList<>();

// Identical type at runtime — type parameters erased
System.out.println(strings.getClass() == numbers.getClass()); // true
System.out.println(strings.getClass().getName()); // "java.util.ArrayList"

// Type checking with type parameter not possible
// if (obj instanceof List<String>) { }  // Compile error

// Unbounded wildcard works
if (strings instanceof List<?>) {
    System.out.println("Is a list"); // OK
}

// Raw Type Warning for casts
// List<String> list = (List<String>) obj; // Unchecked Cast Warning
```

**Special features:**
- Java uses type erasure — generic type parameters are erased at compile time
- `List<String>` and `List<Integer>` are identical at runtime (`ArrayList`)
- `instanceof` cannot check generic types
- Casts to generic types generate unchecked warnings
- Introduced in Java 5.0 with backward compatibility to raw types

**Further reading:**
- [Oracle Java Documentation - Type Erasure](https://docs.oracle.com/javase/tutorial/java/generics/erasure.html)

</TabItem>
<TabItem value="koka" label="Koka">

```haskell
// Type Erasure: Type parameters are removed at compile time
type box<a>
  Box(value: a)

val int-box = Box(42)
val string-box = Box("Hallo")

// At runtime there is no distinction between box<int> and box<string>
// Koka compiles to C — generic types are monomorphized or erased
```

**Special features:**
- Koka uses type erasure — generic type parameters exist only at compile time
- Compiles to C code, where type parameters are replaced by concrete types or represented as `void*` (boxed)
- No runtime reflection over generic type parameters possible
- Compiler optimizations can perform monomorphization

**Further reading:**
- [Koka Language Guide - Compilation](https://koka-lang.github.io/koka/doc/book.html#sec-compile)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Type Erasure on JVM (standard)
val strings = listOf("a", "b")
val numbers = listOf(1, 2)

// Identical type at runtime
println(strings::class == numbers::class) // true

// Type checking with type parameter not possible
// if (obj is List<String>) { }  // Compile error

// Reified Type Parameters in inline functions
inline fun <reified T> isType(value: Any): Boolean {
    return value is T // Only possible with reified
}

println(isType<String>("hello")) // true
println(isType<Int>("hello"))    // false

// Reified also allows T::class
inline fun <reified T> printType() {
    println(T::class.simpleName)
}
```

**Special features:**
- Kotlin uses type erasure on the JVM like Java
- `reified` type parameters in `inline` functions preserve type info at runtime
- `reified` enables `is T`, `T::class` and `Array<T>()` in inline functions
- Only available in `inline` functions, since the code is embedded at the call site

**Further reading:**
- [Kotlin Documentation - Reified Type Parameters](https://kotlinlang.org/docs/inline-functions.html#reified-type-parameters)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Type Erasure: Types are erased at compile time
def identity (x : α) : α := x

-- Type is no longer available at runtime
def intResult := identity 42        -- Type Int known at compile time
def strResult := identity "hello"   -- Type String known at compile time

-- Lean 4 uses boxed representation for polymorphic values
-- All polymorphic values are represented as `lean_object*`

-- Monomorphization for performance-critical cases
@[specialize] def fastIdentity (x : α) : α := x

-- @[specialize] attribute can force monomorphization
```

**Special features:**
- Lean 4 uses type erasure: type information is not available at runtime
- Polymorphic values are represented as boxed objects (`lean_object*`) in the C backend
- `@[specialize]` attribute can force monomorphization for performance
- Compile-time type information available for proof and optimization

**Further reading:**
- [Lean 4 Documentation - Compiler](https://lean-lang.org/lean4/doc/dev/ffi.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```mercury
% Type Erasure / Monomorphization: Types are resolved at compile time
% Mercury compiles polymorphic code via Type Passing or Monomorphization.

% Polymorphic predicate
:- pred identity(T::in, T::out) is det.
identity(X, X).

% The compiler generates specialized code depending on backend:
% - C-Backend: Type Info is passed as hidden parameter (Type Passing)
% - Or monomorphization for frequently used types

:- pred main(io::di, io::uo) is det.
main(!IO) :-
    identity(42, IntResult),
    identity("hello", StringResult),
    io.write_int(IntResult, !IO), io.nl(!IO),
    io.write_string(StringResult, !IO), io.nl(!IO).

% Type information is NOT directly queryable at runtime.
% There is no runtime reflection over generic type parameters.
```

**Special features:**
- Mercury uses Type Passing: type information is passed as hidden parameters to polymorphic predicates.
- The C-Backend uses `MR_TypeInfo` structures to implement generic operations (e.g. comparison, copy).
- No runtime reflection over generic type parameters possible.
- The compiler can perform monomorphization as an optimization when the concrete type is known.

**Further reading:**
- [The Mercury Language Reference Manual - Polymorphism](https://www.mercurylang.org/documentation/reference.html#Polymorphism)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Monomorphization: Generics are specialized
proc identity[T](value: T): T =
  value

# Compiler generates separate functions
let x = identity[int](42)
let s = identity[string]("hello")

# Type info via compiler intrinsics
proc printType[T](value: T) =
  echo typeof(value) # e.g. "int", "string"

printType(42)      # int
printType("hello") # string
```

**Special features:**
- Nim uses monomorphization — generics are compiled to specialized functions
- `typeof()` provides the type at compile time
- `is` operator for compile-time type checking
- `when` statements for compile-time decisions based on types

**Further reading:**
- [Nim Documentation - Generics](https://nim-lang.org/docs/manual.html#generics)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Type Erasure: Uniform Representation *)
(* All values have the same representation at runtime *)
let identity (x : 'a) : 'a = x

(* Compiler generates uniform code — no specialization *)
let int_id = identity 42
let str_id = identity "hello"
(* Both use the same function at runtime *)

(* No access to type parameters at runtime *)
(* Advantage: Fast compilation, compact code *)
(* Disadvantage: Boxing overhead for unboxed types *)
```

**Special features:**
- OCaml uses type erasure with uniform representation
- All polymorphic values are stored as pointers of the same size
- Type parameters do not exist at runtime — no access to generic type info
- Faster compilation and more compact code than monomorphization
- No RTTI (Run-Time Type Information) for generic parameters

**Further reading:**
- [OCaml Documentation - Polymorphism](https://v2.ocaml.org/manual/coreexamples.html#s:tut-poly)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Monomorphization: Generics become specialized functions
fn type_name_of<T>(_: &T) -> &'static str {
    std::any::type_name::<T>()
}

let x = 42;
let s = "hello";
println!("{}", type_name_of(&x)); // "i32"
println!("{}", type_name_of(&s)); // "&str"

// Each instantiation generates its own function
fn add<T: std::ops::Add<Output = T>>(a: T, b: T) -> T {
    a + b
}

// add::<i32>() and add::<f64>() are separate functions
let sum_int = add(1, 2);     // specialized for i32
let sum_float = add(1.0, 2.0); // specialized for f64
```

**Special features:**
- Rust uses monomorphization — each generic instantiation generates specialized code
- `std::any::type_name::<T>()` provides the type name
- `std::mem::size_of::<T>()` provides the size at compile time
- No runtime overhead, but increased code size
- Trait Objects (`dyn Trait`) offer dynamic dispatch as an alternative

**Further reading:**
- [Rust Book - Generic Data Types](https://doc.rust-lang.org/book/ch10-01-syntax.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Type Erasure on JVM
val strings: List[String] = List("a", "b")
val numbers: List[Int] = List(1, 2)

// Identical type at runtime
println(strings.getClass == numbers.getClass) // true

// ClassTag as workaround for runtime type information
import scala.reflect.ClassTag

def createArray[T: ClassTag](size: Int): Array[T] =
    new Array[T](size) // Requires ClassTag for array creation

val arr = createArray[String](5) // Works thanks to ClassTag

// TypeTag for complete type information
import scala.reflect.runtime.universe._

def showType[T: TypeTag](value: T): String =
    typeOf[T].toString

println(showType(List(1, 2, 3))) // "List[Int]"
```

**Special features:**
- Scala uses type erasure on the JVM like Java
- `ClassTag` preserves the class of the type parameter at runtime
- `TypeTag` preserves complete generic type information (via reflection)
- `WeakTypeTag` for types with non-concrete type parameters
- Scala 3 offers `TypeTest` as a replacement for some ClassTag use cases

**Further reading:**
- [Scala Documentation - Type Erasure](https://docs.scala-lang.org/overviews/reflection/typetags-manifests.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Reification: Generic type information available at runtime
let strings: [String] = ["a", "b"]
let numbers: [Int] = [1, 2]

// Type information retrievable at runtime
print(type(of: strings)) // Array<String>
print(type(of: numbers)) // Array<Int>

// Type parameters available in generic functions
func printType<T>(_ value: T)
{
    print(String(describing: T.self)) // e.g. "String", "Int"
}

printType("hello") // String
printType(42)      // Int

// Type checking with generic types
if strings is [String] { print("Is [String]") } // OK
```

**Special features:**
- Swift uses reification — generic type information remains available at runtime
- `type(of:)` provides the concrete type including type parameters
- `T.self` in generic functions provides the metatype
- Witness Tables for protocol conformance (similar to vtables)
- Specialization (monomorphization) as optional compiler optimization

**Further reading:**
- [Swift Documentation - Generics](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/generics/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Complete Type Erasure: All types are removed at compile time
function identity<T>(value: T): T {
    // typeof T is not available at runtime
    // T exists only at compile time
    return value;
}

// Compiles to JavaScript:
// function identity(value) { return value; }

const a = identity<string>("hello");
const b = identity<number>(42);

// No difference at runtime
// typeof a === "string" (JavaScript typeof, not TypeScript)
// Generic type parameters are completely removed
```

**Special features:**
- TypeScript uses complete type erasure — all types are removed when compiling to JavaScript
- Generic type parameters exist only at compile time
- No runtime overhead for generics (no code generated)
- JavaScript `typeof` only checks primitive types, not TypeScript generics
- Discriminated Unions as workaround for runtime type distinction

**Further reading:**
- [TypeScript Handbook - Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)

</TabItem>
<TabItem value="v" label="V">

```v
// Monomorphization: Generics are specialized
fn identity[T](value T) T {
    return value
}

// Compiler generates separate functions
x := identity[int](42)
s := identity[string]('hello')

// typeof for type info
println(typeof(x).name) // int
println(typeof(s).name) // string
```

**Special features:**
- V uses monomorphization — generics are compiled to specialized functions
- `typeof()` provides compile-time type information
- Generics available since V 0.3
- No runtime overhead for generic code

**Further reading:**
- [V Documentation - Generics](https://github.com/vlang/v/blob/master/doc/docs.md#generics)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Comptime-Monomorphization: Generics via comptime parameters
fn identity(comptime T: type, value: T) T {
    return value;
}

// Compiler generates separate functions at compile time
const x = identity(i32, 42);
const s = identity([]const u8, "hello");

// @typeName for type info
fn printType(comptime T: type) void {
    @import("std").debug.print("Type: {s}\n", .{@typeName(T)});
}

printType(i32);       // "i32"
printType([]const u8); // "[]const u8"
```

**Special features:**
- Zig uses comptime-monomorphization — generics are `comptime` parameters
- Types are first-class values at compile time
- `@typeName(T)` provides the type name as a string
- `@sizeOf(T)` provides the size at compile time
- No special generics syntax — `comptime` is the universal mechanism

**Further reading:**
- [Zig Documentation - Comptime](https://ziglang.org/documentation/master/#comptime)

</TabItem>
</FilteredTabs>

