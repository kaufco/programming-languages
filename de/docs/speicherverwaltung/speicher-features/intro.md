---
slug: /speicherverwaltung/speicher-features
title: 13.2. Speicher-Features
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 13.2. Speicher-Features

Features zur Speicherverwaltung.

## 13.2.1. Stack Allocation

Speicher wird auf dem Stack allokiert. Stack-Allokation ist schnell, aber die Größe muss zur Compile-Zeit bekannt sein und der Speicher wird automatisch freigegeben, wenn der Scope verlassen wird.

### Sprachen {#sprachen}

<Tabs availableTabs={['c', 'cpp', 'd', 'fortran', 'nim', 'objective-c', 'object-pascal', 'rust', 'zig']}>
<TabItem value="c" label="C">

```c
// Stack Allocation: Lokale Variablen werden auf dem Stack allokiert
void function() {
    int numbers[5] = {10, 20, 30, 40, 50};  // Stack-Allokation
    
    // Array wird automatisch freigegeben, wenn Funktion endet
    for (int i = 0; i < 5; i++) {
        printf("%d\n", numbers[i]);
    }
}

// Stack-Allokation für Strukturen
struct Point {
    int x;
    int y;
};

void function2() {
    struct Point p = {10, 20};  // Stack-Allokation
    // p wird automatisch freigegeben, wenn Funktion endet
}
```

**Besonderheiten:**
- Lokale Variablen werden automatisch auf dem Stack allokiert
- Größe muss zur Compile-Zeit bekannt sein
- Automatische Freigabe beim Verlassen des Scopes
- Sehr schnell, keine Laufzeit-Overhead

**Weiterführende Links:**
- [C Standard - Storage Duration](https://en.cppreference.com/w/c/language/storage_duration)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Stack Allocation: Lokale Variablen werden auf dem Stack allokiert
void function() {
    int numbers[5] = {10, 20, 30, 40, 50};  // Stack-Allokation
    
    // Array wird automatisch freigegeben, wenn Funktion endet
    for (int i = 0; i < 5; i++) {
        std::cout << numbers[i] << std::endl;
    }
}

// Stack-Allokation für Objekte
class Point {
    int x, y;
public:
    Point(int x, int y) : x(x), y(y) {}
};

void function2() {
    Point p(10, 20);  // Stack-Allokation, Destruktor wird automatisch aufgerufen
    // p wird automatisch freigegeben, wenn Funktion endet
}
```

**Besonderheiten:**
- Lokale Variablen werden automatisch auf dem Stack allokiert
- Größe muss zur Compile-Zeit bekannt sein
- Destruktoren werden automatisch aufgerufen beim Verlassen des Scopes
- RAII funktioniert mit Stack-Allokation
- Sehr schnell, keine Laufzeit-Overhead

**Weiterführende Links:**
- [cppreference.com - Storage Duration](https://en.cppreference.com/w/cpp/language/storage_duration)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Stack Allocation: Lokale Variablen werden auf dem Stack allokiert
fn function() {
    let numbers = [10, 20, 30, 40, 50];  // Stack-Allokation
    
    // Array wird automatisch freigegeben, wenn Funktion endet
    for num in numbers.iter() {
        println!("{}", num);
    }
}

// Stack-Allokation für Strukturen
struct Point {
    x: i32,
    y: i32,
}

fn function2() {
    let p = Point { x: 10, y: 20 };  // Stack-Allokation
    // p wird automatisch freigegeben, wenn Funktion endet
    // Drop-Trait wird automatisch aufgerufen
}
```

**Besonderheiten:**
- Lokale Variablen werden automatisch auf dem Stack allokiert
- Größe muss zur Compile-Zeit bekannt sein
- `Drop`-Trait wird automatisch aufgerufen beim Verlassen des Scopes
- Ownership-System funktioniert mit Stack-Allokation
- Sehr schnell, keine Laufzeit-Overhead

**Weiterführende Links:**
- [The Rust Book - The Stack and the Heap](https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html#the-stack-and-the-heap)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Stack Allocation: Lokale Variablen werden auf dem Stack allokiert
fn function() void {
    var numbers = [5]i32{ 10, 20, 30, 40, 50 };  // Stack-Allokation
    
    // Array wird automatisch freigegeben, wenn Funktion endet
    for (numbers) |num| {
        std.debug.print("{}\n", .{num});
    }
}

// Stack-Allokation für Strukturen
const Point = struct {
    x: i32,
    y: i32,
};

fn function2() void {
    var p = Point{ .x = 10, .y = 20 };  // Stack-Allokation
    // p wird automatisch freigegeben, wenn Funktion endet
}
```

**Besonderheiten:**
- Lokale Variablen werden automatisch auf dem Stack allokiert
- Größe muss zur Compile-Zeit bekannt sein
- Automatische Freigabe beim Verlassen des Scopes
- Sehr schnell, keine Laufzeit-Overhead

**Weiterführende Links:**
- [Zig Documentation - Memory](https://ziglang.org/documentation/0.11.0/#Memory)

</TabItem>
<TabItem value="d" label="D">

```d
// Stack Allocation
int x = 42;                    // Stack
double y = 3.14;               // Stack
struct Point { int x, y; }
Point p = Point(1, 2);         // Stack

// Arrays auf dem Stack (statische Arrays)
int[10] staticArray;           // Stack (feste Größe)

// Klassen sind IMMER auf dem Heap (via GC)
// class Obj {}
// auto obj = new Obj();       // Heap
```

**Besonderheiten:**
- Primitive Typen und Structs werden standardmäßig auf dem Stack alloziert
- Statische Arrays (feste Größe) auf dem Stack
- Klassen werden immer auf dem Heap alloziert (GC-verwaltet)
- Dynamische Arrays und Slices verweisen auf Heap-Speicher

**Weiterführende Links:**
- [D Language Specification - Memory](https://dlang.org/spec/garbage.html)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Stack Allocation
subroutine process(n)
    integer, intent(in) :: n
    integer :: local_var          ! Stack-Allokation
    real :: auto_array(n)         ! Automatisches Array auf dem Stack
    auto_array = 0.0
end subroutine
```

**Besonderheiten:**
- Lokale Variablen werden auf dem Stack allokiert
- Automatische Arrays (Größe abhängig von Parametern) sind Stack-allokiert
- Kein explizites Keyword für Stack-Allokation

**Weiterführende Links:**
- [Fortran Wiki - Arrays](https://fortranwiki.org/fortran/show/Arrays)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Stack Allocation: Value Types werden auf dem Stack allokiert
type Point = object
  x, y: float

proc createPoint(): Point =
  Point(x: 1.0, y: 2.0)  # Stack-allokiert

var p = createPoint()
echo p.x  # 1.0

# Arrays auf dem Stack
var arr: array[10, int]
arr[0] = 42
```

**Besonderheiten:**
- `object`-Typen werden auf dem Stack allokiert
- `ref object`-Typen werden auf dem Heap allokiert
- Arrays mit fester Größe sind Stack-allokiert
- Keine explizite Kontrolle nötig

**Weiterführende Links:**
- [Nim Documentation - Object Types](https://nim-lang.org/docs/manual.html#types-object-types)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
type
  TPoint = record
    X, Y: Double;
  end;

procedure Example;
var
  x: Integer;     // Stack
  p: TPoint;      // Stack (Record = Value Type)
begin
  x := 42;
  p.X := 1.0;
  p.Y := 2.0;
end;  // Automatisch freigegeben
```

**Besonderheiten:**
- Lokale Variablen und Records werden auf dem Stack allokiert
- Automatische Freigabe beim Verlassen des Scopes
- Klassen-Instanzen werden auf dem Heap allokiert

**Weiterführende Links:**
- [Delphi Documentation - Memory Management](https://docwiki.embarcadero.com/RADStudio/en/Memory_Management)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Stack Allocation für primitive Typen und Structs
int value = 42;
CGPoint point = CGPointMake(10.0, 20.0);
char buffer[256];
```

**Besonderheiten:**
- Primitive Typen und C-Structs werden auf dem Stack allokiert
- Objective-C-Objekte werden immer auf dem Heap allokiert
- Blocks werden initial auf dem Stack erstellt, bei Bedarf auf den Heap kopiert

**Weiterführende Links:**
- [Apple Documentation - Memory Management](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/MemoryMgmt/Articles/MemoryMgmt.html)

</TabItem>
</Tabs>


## 13.2.2. Heap Allocation

Speicher wird auf dem Heap allokiert. Heap-Allokation erlaubt dynamische Größen zur Laufzeit, erfordert aber explizite Freigabe (bei manueller Speicherverwaltung) oder wird automatisch verwaltet (bei GC/ARC).

### Sprachen {#sprachen}

<Tabs availableTabs={['c', 'cpp', 'csharp', 'd', 'dart', 'fortran', 'go', 'java', 'javascript', 'kotlin', 'nim', 'objective-c', 'object-pascal', 'odin', 'python', 'rust', 'swift', 'typescript', 'zig']}>
<TabItem value="c" label="C">

```c
// Heap Allocation: malloc/free
// Benötigt: #include <stdlib.h>
int* numbers = malloc(5 * sizeof(int));  // Heap-Allokation
if (numbers == NULL) {
    // Fehlerbehandlung
    return;
}

numbers[0] = 10;
numbers[1] = 20;
numbers[2] = 30;
numbers[3] = 40;
numbers[4] = 50;

// Explizite Freigabe erforderlich
free(numbers);
numbers = NULL;
```

**Besonderheiten:**
- Verwendet `malloc`/`calloc` für Heap-Allokation
- Größe kann zur Laufzeit bestimmt werden
- Explizite Freigabe mit `free` erforderlich
- `malloc` gibt `NULL` zurück bei Fehlern

**Weiterführende Links:**
- [C Standard Library - Memory Management](https://en.cppreference.com/w/c/memory)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Heap Allocation: new/delete
int* numbers = new int[5];  // Heap-Allokation
numbers[0] = 10;
numbers[1] = 20;
numbers[2] = 30;
numbers[3] = 40;
numbers[4] = 50;

// Explizite Freigabe erforderlich
delete[] numbers;
numbers = nullptr;

// Oder mit Smart Pointers (automatische Freigabe)
#include <memory>
auto numbers2 = std::make_unique<int[]>(5);
numbers2[0] = 10;
// Automatische Freigabe, wenn numbers2 den Scope verlässt
```

**Besonderheiten:**
- Verwendet `new`/`delete` für Heap-Allokation
- Größe kann zur Laufzeit bestimmt werden
- Explizite Freigabe mit `delete`/`delete[]` erforderlich
- Smart Pointers (`std::unique_ptr`, `std::shared_ptr`) für automatische Freigabe

**Weiterführende Links:**
- [cppreference.com - Dynamic memory management](https://en.cppreference.com/w/cpp/memory)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Heap Allocation: Box, Vec, etc.
let numbers = vec![10, 20, 30, 40, 50];  // Heap-Allokation

// Automatische Freigabe, wenn numbers den Scope verlässt
// Drop-Trait wird automatisch aufgerufen

// Box für einzelne Objekte
let boxed = Box::new(42);  // Heap-Allokation
// Automatische Freigabe, wenn boxed den Scope verlässt
```

**Besonderheiten:**
- `Vec`, `Box`, `String` verwenden Heap-Allokation
- Größe kann zur Laufzeit bestimmt werden
- Automatische Freigabe durch Ownership-System
- Keine explizite Freigabe erforderlich

**Weiterführende Links:**
- [The Rust Book - The Stack and the Heap](https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html#the-stack-and-the-heap)

</TabItem>
<TabItem value="java" label="Java">

```java
// Heap Allocation: new
int[] numbers = new int[5];  // Heap-Allokation
numbers[0] = 10;
numbers[1] = 20;
numbers[2] = 30;
numbers[3] = 40;
numbers[4] = 50;

// Automatische Freigabe durch Garbage Collector
numbers = null;
```

**Besonderheiten:**
- Alle Objekte werden auf dem Heap allokiert
- Größe kann zur Laufzeit bestimmt werden
- Automatische Freigabe durch Garbage Collector
- Keine explizite Freigabe erforderlich

**Weiterführende Links:**
- [Oracle Java Documentation - Memory Management](https://docs.oracle.com/javase/8/docs/technotes/guides/vm/gctuning/)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Heap Allocation: new
int[] numbers = new int[5];  // Heap-Allokation
numbers[0] = 10;
numbers[1] = 20;
numbers[2] = 30;
numbers[3] = 40;
numbers[4] = 50;

// Automatische Freigabe durch Garbage Collector
numbers = null;
```

**Besonderheiten:**
- Alle Objekte werden auf dem Heap allokiert
- Größe kann zur Laufzeit bestimmt werden
- Automatische Freigabe durch Garbage Collector
- Keine explizite Freigabe erforderlich

**Weiterführende Links:**
- [Microsoft .NET Documentation - Garbage Collection](https://learn.microsoft.com/en-us/dotnet/standard/garbage-collection/)

</TabItem>
<TabItem value="python" label="Python">

```python
# Heap Allocation: Alle Objekte werden auf dem Heap allokiert
numbers = [10, 20, 30, 40, 50]  # Heap-Allokation

# Automatische Freigabe durch Garbage Collector
numbers = None
```

**Besonderheiten:**
- Alle Objekte werden auf dem Heap allokiert
- Größe kann zur Laufzeit bestimmt werden
- Automatische Freigabe durch Garbage Collector (Reference Counting + zyklischer GC)
- Keine explizite Freigabe erforderlich

**Weiterführende Links:**
- [Python Documentation - gc](https://docs.python.org/3/library/gc.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Heap Allocation: Alle Objekte werden auf dem Heap allokiert
let numbers = [10, 20, 30, 40, 50];  // Heap-Allokation

// Automatische Freigabe durch Garbage Collector
numbers = null;
```

**Besonderheiten:**
- Alle Objekte werden auf dem Heap allokiert
- Größe kann zur Laufzeit bestimmt werden
- Automatische Freigabe durch Garbage Collector
- Keine explizite Freigabe erforderlich

**Weiterführende Links:**
- [MDN Web Docs - Memory Management](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Heap Allocation: Alle Objekte werden auf dem Heap allokiert
let numbers: number[] = [10, 20, 30, 40, 50];  // Heap-Allokation

// Automatische Freigabe durch Garbage Collector
numbers = null;
```

**Besonderheiten:**
- Alle Objekte werden auf dem Heap allokiert
- Größe kann zur Laufzeit bestimmt werden
- Automatische Freigabe durch Garbage Collector (JavaScript-Engine)
- Keine explizite Freigabe erforderlich

**Weiterführende Links:**
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

</TabItem>
<TabItem value="go" label="Go">

```go
// Heap Allocation: make, new
numbers := make([]int, 5)  // Heap-Allokation
numbers[0] = 10
numbers[1] = 20
numbers[2] = 30
numbers[3] = 40
numbers[4] = 50

// Automatische Freigabe durch Garbage Collector
numbers = nil
```

**Besonderheiten:**
- `make` und `new` allokieren auf dem Heap
- Größe kann zur Laufzeit bestimmt werden
- Automatische Freigabe durch Garbage Collector
- Keine explizite Freigabe erforderlich

**Weiterführende Links:**
- [Go Documentation - Garbage Collector](https://go.dev/doc/gc-guide)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Heap Allocation: Klassen werden auf dem Heap allokiert
var numbers = [10, 20, 30, 40, 50]  // Heap-Allokation

// Automatische Freigabe durch ARC
numbers = []
```

**Besonderheiten:**
- Klassen werden auf dem Heap allokiert
- Größe kann zur Laufzeit bestimmt werden
- Automatische Freigabe durch ARC
- Keine explizite Freigabe erforderlich

**Weiterführende Links:**
- [Swift Documentation - Automatic Reference Counting](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/automaticreferencecounting/)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Heap Allocation: Alle Objekte werden auf dem Heap allokiert
val numbers = intArrayOf(10, 20, 30, 40, 50)  // Heap-Allokation

// Automatische Freigabe durch Garbage Collector (JVM)
// numbers = null (nicht nötig für val)
```

**Besonderheiten:**
- Alle Objekte werden auf dem Heap allokiert
- Größe kann zur Laufzeit bestimmt werden
- Automatische Freigabe durch Garbage Collector (JVM)
- Keine explizite Freigabe erforderlich

**Weiterführende Links:**
- [Kotlin Documentation - Memory Management](https://kotlinlang.org/docs/native-memory-manager.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Heap Allocation: Alle Objekte werden auf dem Heap allokiert
List<int> numbers = [10, 20, 30, 40, 50];  // Heap-Allokation

// Automatische Freigabe durch Garbage Collector
numbers = null;
```

**Besonderheiten:**
- Alle Objekte werden auf dem Heap allokiert
- Größe kann zur Laufzeit bestimmt werden
- Automatische Freigabe durch Garbage Collector
- Keine explizite Freigabe erforderlich

**Weiterführende Links:**
- [Dart Documentation - Memory Management](https://dart.dev/guides/language/effective-dart/memory)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Heap Allocation: new
var numbers = newSeq[int](5)  # Heap-Allokation
numbers[0] = 10
numbers[1] = 20
numbers[2] = 30
numbers[3] = 40
numbers[4] = 50

# Automatische Freigabe durch Garbage Collector (wenn GC aktiviert)
numbers = nil
```

**Besonderheiten:**
- `newSeq`, `new` allokieren auf dem Heap
- Größe kann zur Laufzeit bestimmt werden
- Automatische Freigabe durch Garbage Collector (wenn aktiviert)
- Optional: Manuelle Speicherverwaltung möglich

**Weiterführende Links:**
- [Nim Manual - Memory Management](https://nim-lang.org/docs/manual.html#memory-management)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Heap Allocation: make
package main

import "core:mem"

main :: proc() {
    numbers := make([]int, 5)  // Heap-Allokation
    defer delete(numbers)  // Explizite Freigabe
    
    numbers[0] = 10
    numbers[1] = 20
    numbers[2] = 30
    numbers[3] = 40
    numbers[4] = 50
}
```

**Besonderheiten:**
- `make` allokiert auf dem Heap
- Größe kann zur Laufzeit bestimmt werden
- Explizite Freigabe mit `delete` erforderlich
- `defer` kann verwendet werden für automatische Freigabe

**Weiterführende Links:**
- [Odin Documentation - Memory Management](https://odin-lang.org/docs/overview/#memory-management)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Heap Allocation: Allocator
const std = @import("std");

var gpa = std.heap.GeneralPurposeAllocator(.{}){};
const allocator = gpa.allocator();
defer _ = gpa.deinit();

const numbers = try allocator.alloc(i32, 5);  // Heap-Allokation
defer allocator.free(numbers);

numbers[0] = 10;
numbers[1] = 20;
numbers[2] = 30;
numbers[3] = 40;
numbers[4] = 50;
```

**Besonderheiten:**
- Explizite Allokatoren für Heap-Allokation
- Größe kann zur Laufzeit bestimmt werden
- Explizite Freigabe mit `allocator.free` erforderlich
- `defer` kann verwendet werden für automatische Freigabe

**Weiterführende Links:**
- [Zig Documentation - Memory Management](https://ziglang.org/documentation/0.11.0/#Memory)

</TabItem>
<TabItem value="d" label="D">

```d
// Heap Allocation
class Person {
    string name;
    this(string name) { this.name = name; }
}

auto p = new Person("Alice");     // Heap (GC-verwaltet)
int[] arr = new int[100];         // Heap (dynamisches Array)

// Manuell via malloc
// Benötigt: import core.stdc.stdlib;
int* ptr = cast(int*) malloc(int.sizeof);
*ptr = 42;
free(ptr);
```

**Besonderheiten:**
- `new` alloziert auf dem GC-verwalteten Heap
- Klassen werden immer auf dem Heap alloziert
- Dynamische Arrays und assoziative Arrays sind Heap-alloziert
- Manuelle Heap-Allokation via `core.stdc.stdlib.malloc`/`free`

**Weiterführende Links:**
- [D Language Specification - Memory Management](https://dlang.org/spec/garbage.html)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Heap Allocation mit ALLOCATABLE
integer, allocatable :: dynamic_arr(:)
allocate(dynamic_arr(1000))
dynamic_arr = 0
deallocate(dynamic_arr)

! Heap Allocation mit POINTER
integer, pointer :: ptr(:)
allocate(ptr(500))
ptr = 0
deallocate(ptr)
```

**Besonderheiten:**
- `ALLOCATABLE` für dynamische Arrays und Skalare (empfohlen)
- `POINTER` für dynamische Allokation mit Zeiger-Semantik
- `ALLOCATABLE` bevorzugt gegenüber `POINTER` (automatisches Cleanup)
- Allocatable Variablen werden beim Scope-Verlassen automatisch freigegeben

**Weiterführende Links:**
- [Fortran Wiki - ALLOCATABLE](https://fortranwiki.org/fortran/show/ALLOCATABLE)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
var
  person: TPerson;       // Heap (Klasse)
  data: array of Integer; // Heap (dynamisches Array)
begin
  person := TPerson.Create('Alice');  // Heap-Allokation
  SetLength(data, 100);               // Heap-Allokation
  try
    // Verwenden
  finally
    person.Free;  // Manuelle Freigabe
    // data wird per Reference Counting freigegeben
  end;
end;
```

**Besonderheiten:**
- Klassen werden immer auf dem Heap allokiert (`Create`)
- Dynamische Arrays und Strings auf dem Heap (Reference Counted)
- Manuelle Freigabe mit `Free` für Klassen erforderlich

**Weiterführende Links:**
- [Delphi Documentation - Memory Management](https://docwiki.embarcadero.com/RADStudio/en/Memory_Management)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Heap Allocation für ObjC-Objekte
NSString *str = [[NSString alloc] initWithString:@"Hallo"];

// C-style Heap Allocation
int *array = (int *)malloc(10 * sizeof(int));
array[0] = 42;
free(array);
```

**Besonderheiten:**
- Alle Objective-C-Objekte werden auf dem Heap allokiert (`alloc`)
- C-style `malloc`/`free` für primitive Typen und Structs
- ARC verwaltet automatisch die Freigabe von ObjC-Objekten
- `malloc`/`free` muss manuell verwaltet werden

**Weiterführende Links:**
- [Apple Documentation - Memory Management](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/MemoryMgmt/Articles/MemoryMgmt.html)

</TabItem>
</Tabs>


## 13.2.3. References vs. Pointers

Unterschiede zwischen Referenzen und Zeigern: Referenzen sind Aliase für Objekte und können nicht neu zugewiesen werden, während Zeiger Adressen speichern und neu zugewiesen werden können.

### Sprachen {#sprachen}

<Tabs availableTabs={['cpp', 'd', 'nim', 'objective-c', 'object-pascal', 'rust']}>
<TabItem value="cpp" label="C++">

```cpp
// Pointers: Können neu zugewiesen werden, können null sein
int value = 42;
int* ptr = &value;  // Pointer
*ptr = 100;  // Dereferenzierung

ptr = nullptr;  // Kann neu zugewiesen werden
if (ptr != nullptr) {  // Null-Check möglich
    *ptr = 200;
}

// References: Können nicht neu zugewiesen werden, können nicht null sein
int value2 = 42;
int& ref = value2;  // Reference (Alias)
ref = 100;  // Direkte Verwendung, keine Dereferenzierung

// ref = value;  // Fehler: Kann nicht neu zugewiesen werden
// int& ref2;  // Fehler: Muss initialisiert werden
```

**Besonderheiten:**
- Pointer können `nullptr` sein, References nicht
- Pointer können neu zugewiesen werden, References nicht
- Pointer erfordern Dereferenzierung (`*`), References nicht
- References müssen bei der Deklaration initialisiert werden
- Pointer können arithmetische Operationen durchführen, References nicht

**Weiterführende Links:**
- [cppreference.com - Pointers](https://en.cppreference.com/w/cpp/language/pointer)
- [cppreference.com - References](https://en.cppreference.com/w/cpp/language/reference)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// References: Immutable und Mutable References
let mut value = 42;
let ref1 = &value;  // Immutable Reference
let ref2 = &value;  // Mehrere immutable References erlaubt
// *ref1 = 100;  // Fehler: Immutable Reference kann nicht mutiert werden

let ref3 = &mut value;  // Mutable Reference
*ref3 = 100;  // Dereferenzierung und Mutation
// let ref4 = &value;  // Fehler: Keine weiteren References, wenn mutable Reference existiert

// Raw Pointers: Nur in unsafe-Blöcken
let raw_ptr: *const i32 = &value;  // Immutable Raw Pointer
let raw_ptr_mut: *mut i32 = &mut value;  // Mutable Raw Pointer

unsafe {
    *raw_ptr_mut = 200;  // Unsafe Dereferenzierung
}
```

**Besonderheiten:**
- References sind sicher und werden zur Compile-Zeit geprüft
- Immutable References können mehrfach existieren
- Mutable References sind exklusiv (nur eine gleichzeitig)
- Raw Pointers (`*const T`, `*mut T`) sind unsicher und nur in `unsafe`-Blöcken
- References können nicht null sein, Raw Pointers können null sein

**Weiterführende Links:**
- [The Rust Book - References and Borrowing](https://doc.rust-lang.org/book/ch04-02-references-and-borrowing.html)
- [The Rust Book - Unsafe Rust](https://doc.rust-lang.org/book/ch19-01-unsafe-rust.html)

</TabItem>
<TabItem value="d" label="D">

```d
// References vs. Pointers
int x = 42;

// Pointers (explizit)
int* ptr = &x;
*ptr = 100;
writeln(x);  // 100

// References (nur als Parameter)
void modify(ref int val) {
    val = 200;
}
modify(x);
writeln(x);  // 200

// Klassen sind implizit Referenztypen
class MyClass { int value; }
MyClass a = new MyClass();
MyClass b = a;  // Referenz, keine Kopie
b.value = 42;
writeln(a.value);  // 42
```

**Besonderheiten:**
- Pointers: explizit mit `*` und `&`, ähnlich wie C
- `ref` Parameter: nur für Funktionsparameter, keine eigenständigen ref-Variablen
- Klassen sind implizit Referenztypen
- Structs sind Value-Typen (werden kopiert)

**Weiterführende Links:**
- [D Language Specification - Pointers](https://dlang.org/spec/type.html#pointers)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# References (ref) vs. Pointers (ptr)
type
  RefNode = ref object  # Garbage-collected Reference
    value: int

  PtrNode = ptr object  # Unmanaged Pointer
    value: int

# ref: automatisch verwaltet
var r = RefNode(value: 42)

# ptr: manuell verwaltet
var p = cast[PtrNode](alloc0(sizeof(PtrNode)))
p.value = 42
dealloc(p)
```

**Besonderheiten:**
- `ref`: Garbage-collected/ARC-verwaltete Referenzen (sicher)
- `ptr`: Unmanaged Pointer (unsicher, für C-Interop)
- `addr`: Adresse einer Variable ermitteln
- `[]`: Pointer/Referenz dereferenzieren

**Weiterführende Links:**
- [Nim Documentation - Reference and Pointer Types](https://nim-lang.org/docs/manual.html#types-reference-and-pointer-types)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
type
  PInteger = ^Integer;  // Typisierter Pointer

var
  x: Integer = 42;
  ptr: PInteger;         // Expliziter Pointer
  obj: TObject;          // Implizite Reference
begin
  // Pointer: Explizite Adressierung
  ptr := @x;
  ptr^ := 100;

  // Reference: Klassen-Variablen sind implizite References
  obj := TObject.Create;
  // obj ist eine Reference, kein Pointer
  obj.Free;
end;
```

**Besonderheiten:**
- Pointer: `^Type`, Dereferenzierung mit `^`, Adresse mit `@`
- Klassen-Variablen sind implizite References (keine explizite `^`-Syntax nötig)
- `var`-Parameter sind implizite References (Call-by-Reference)
- `Pointer` als untypisierter Pointer (wie `void*` in C)

**Weiterführende Links:**
- [Free Pascal Documentation - Pointers](https://www.freepascal.org/docs-html/ref/refse16.html)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Pointer auf Objekte
NSString *str = @"Hallo"; // Pointer auf NSString-Objekt

// Pointer auf primitive Typen
int value = 42;
int *ptr = &value;
*ptr = 100; // value ist jetzt 100

// Doppelpointer (z.B. für NSError)
NSError *error = nil;
[self doSomethingWithError:&error];
```

**Besonderheiten:**
- Objective-C verwendet ausschließlich Pointer (keine Referenzen wie C++)
- Alle Objekt-Variablen sind Pointer (`NSString *`)
- C-style Pointer-Arithmetik verfügbar
- Doppelpointer (`NSError **`) für Out-Parameter

**Weiterführende Links:**
- [Apple Documentation - Programming with Objective-C](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html)

</TabItem>
</Tabs>


## 13.2.4. Smart Pointers

Intelligente Zeiger, die automatisch Speicher verwalten. Sie kombinieren die Flexibilität von Zeigern mit automatischer Speicherverwaltung durch RAII.

### Sprachen {#sprachen}

<Tabs availableTabs={['cpp', 'rust']}>
<TabItem value="cpp" label="C++">

```cpp
#include <memory>

// unique_ptr: Exklusives Ownership
std::unique_ptr<int> ptr1 = std::make_unique<int>(42);
// Automatische Freigabe, wenn ptr1 den Scope verlässt

// unique_ptr kann nicht kopiert werden, nur verschoben
std::unique_ptr<int> ptr2 = std::move(ptr1);  // ptr1 ist jetzt nullptr

// shared_ptr: Geteiltes Ownership
std::shared_ptr<int> shared1 = std::make_shared<int>(42);
std::shared_ptr<int> shared2 = shared1;  // Referenzzähler: 2
// Automatische Freigabe, wenn letzter shared_ptr den Scope verlässt

// weak_ptr: Nicht-besitzende Referenz
std::weak_ptr<int> weak = shared1;
if (auto locked = weak.lock()) {  // Prüft, ob Objekt noch existiert
    *locked = 100;
}
```

**Besonderheiten:**
- `std::unique_ptr`: Exklusives Ownership, automatische Freigabe
- `std::shared_ptr`: Geteiltes Ownership mit Referenzzählung
- `std::weak_ptr`: Nicht-besitzende Referenz, verhindert zirkuläre Referenzen
- Automatische Freigabe durch RAII
- `std::make_unique` und `std::make_shared` für sichere Allokation

**Weiterführende Links:**
- [cppreference.com - Smart Pointers](https://en.cppreference.com/w/cpp/memory)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
use std::rc::Rc;
use std::sync::Arc;
use std::cell::RefCell;

// Box: Einzelnes Ownership auf dem Heap
let boxed = Box::new(42);
// Automatische Freigabe, wenn boxed den Scope verlässt

// Rc: Reference Counted (nicht thread-safe)
let rc1 = Rc::new(42);
let rc2 = Rc::clone(&rc1);  // Referenzzähler: 2
// Automatische Freigabe, wenn letzter Rc den Scope verlässt

// Arc: Atomic Reference Counted (thread-safe)
let arc1 = Arc::new(42);
let arc2 = Arc::clone(&arc1);  // Referenzzähler: 2
// Automatische Freigabe, wenn letzter Arc den Scope verlässt

// RefCell: Interne Mutability
let cell = RefCell::new(42);
let mut borrow = cell.borrow_mut();
*borrow = 100;
```

**Besonderheiten:**
- `Box<T>`: Einzelnes Ownership, automatische Freigabe
- `Rc<T>`: Reference Counted, nicht thread-safe
- `Arc<T>`: Atomic Reference Counted, thread-safe
- `RefCell<T>`: Interne Mutability zur Laufzeit
- Automatische Freigabe durch Ownership-System

**Weiterführende Links:**
- [The Rust Book - Smart Pointers](https://doc.rust-lang.org/book/ch15-00-smart-pointers.html)

</TabItem>
</Tabs>


## 13.2.5. Weak References

Schwache Referenzen, die den Referenzzähler nicht erhöhen. Verhindern zirkuläre Referenzen und erlauben es, auf Objekte zu verweisen, ohne deren Lebensdauer zu beeinflussen.

### Sprachen {#sprachen}

<Tabs availableTabs={['cpp', 'dart', 'java', 'kotlin', 'objective-c', 'python', 'rust', 'scala', 'swift']}>
<TabItem value="cpp" label="C++">

```cpp
#include <memory>

// weak_ptr: Nicht-besitzende Referenz
std::shared_ptr<int> shared = std::make_shared<int>(42);
std::weak_ptr<int> weak = shared;  // Erhöht Referenzzähler nicht

// Prüfen, ob Objekt noch existiert
if (auto locked = weak.lock()) {  // Erstellt shared_ptr, wenn Objekt existiert
    *locked = 100;
} else {
    // Objekt wurde bereits freigegeben
}

shared = nullptr;  // Objekt wird freigegeben
// weak.lock() gibt jetzt nullptr zurück
```

**Besonderheiten:**
- `std::weak_ptr` erhöht Referenzzähler nicht
- Verhindert zirkuläre Referenzen bei `std::shared_ptr`
- `lock()` erstellt `std::shared_ptr`, wenn Objekt noch existiert
- Automatische Freigabe, wenn alle `shared_ptr` freigegeben werden

**Weiterführende Links:**
- [cppreference.com - weak_ptr](https://en.cppreference.com/w/cpp/memory/weak_ptr)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
use std::rc::{Rc, Weak};
use std::cell::RefCell;

// Weak: Nicht-besitzende Referenz
let rc = Rc::new(RefCell::new(42));
let weak = Rc::downgrade(&rc);  // Erstellt Weak-Referenz

// Prüfen, ob Objekt noch existiert
if let Some(rc_upgrade) = weak.upgrade() {  // Erstellt Rc, wenn Objekt existiert
    *rc_upgrade.borrow_mut() = 100;
} else {
    // Objekt wurde bereits freigegeben
}

drop(rc);  // Objekt wird freigegeben
// weak.upgrade() gibt jetzt None zurück
```

**Besonderheiten:**
- `Weak<T>` erhöht Referenzzähler nicht
- Verhindert zirkuläre Referenzen bei `Rc<T>`
- `upgrade()` erstellt `Rc<T>`, wenn Objekt noch existiert
- Automatische Freigabe, wenn alle `Rc<T>` freigegeben werden

**Weiterführende Links:**
- [The Rust Book - Reference Cycles Can Leak Memory](https://doc.rust-lang.org/book/ch15-06-reference-cycles.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// weak: Nicht-besitzende Referenz
class Parent {
    let name: String
    var child: Child?
    init(name: String) {
        self.name = name
    }
}

class Child {
    let name: String
    weak var parent: Parent?  // Weak Reference
    init(name: String) {
        self.name = name
    }
}

var parent: Parent? = Parent(name: "Alice")
var child: Child? = Child(name: "Bob")
parent?.child = child
child?.parent = parent  // Weak Reference, erhöht Referenzzähler nicht

parent = nil  // Parent wird freigegeben
// child?.parent ist jetzt nil
```

**Besonderheiten:**
- `weak` erhöht Referenzzähler nicht
- Verhindert zirkuläre Referenzen bei ARC
- `weak` Variablen werden automatisch auf `nil` gesetzt, wenn Objekt freigegeben wird
- Optionale Typen erforderlich (`weak var parent: Parent?`)

**Weiterführende Links:**
- [Swift Documentation - Weak References](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/automaticreferencecounting/#Weak-References)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// __weak: Nicht-besitzende Referenz
@interface Parent : NSObject
@property (nonatomic, strong) Child *child;
@end

@interface Child : NSObject
@property (nonatomic, weak) Parent *parent;  // Weak Reference
@end

Parent *parent = [[Parent alloc] init];
Child *child = [[Child alloc] init];
parent.child = child;
child.parent = parent;  // Weak Reference, erhöht Referenzzähler nicht

parent = nil;  // Parent wird freigegeben
// child.parent ist jetzt nil
```

**Besonderheiten:**
- `__weak` oder `weak` Property-Attribut erhöht Referenzzähler nicht
- Verhindert zirkuläre Referenzen bei ARC
- `weak` Variablen werden automatisch auf `nil` gesetzt, wenn Objekt freigegeben wird
- Optionale Typen erforderlich

**Weiterführende Links:**
- [Apple Documentation - Weak References](https://developer.apple.com/library/archive/releasenotes/ObjectiveC/RN-TransitioningToARC/)

</TabItem>
<TabItem value="java" label="Java">

```java
import java.lang.ref.WeakReference;

// WeakReference: Nicht-besitzende Referenz
Object obj = new Object();
WeakReference<Object> weakRef = new WeakReference<>(obj);

// Prüfen, ob Objekt noch existiert
Object retrieved = weakRef.get();
if (retrieved != null) {
    // Objekt existiert noch
} else {
    // Objekt wurde bereits freigegeben
}

obj = null;  // Objekt kann jetzt freigegeben werden
// weakRef.get() kann jetzt null zurückgeben
```

**Besonderheiten:**
- `WeakReference` erhöht Referenzzähler nicht
- Verhindert zirkuläre Referenzen bei Garbage Collection
- `get()` gibt Objekt zurück, wenn es noch existiert, sonst `null`
- Automatische Freigabe durch Garbage Collector

**Weiterführende Links:**
- [Java Documentation - WeakReference](https://docs.oracle.com/javase/8/docs/api/java/lang/ref/WeakReference.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
import java.lang.ref.WeakReference

// WeakReference: Nicht-besitzende Referenz
val obj = Any()
val weakRef = WeakReference(obj)

// Prüfen, ob Objekt noch existiert
val retrieved = weakRef.get()
if (retrieved != null) {
    // Objekt existiert noch
} else {
    // Objekt wurde bereits freigegeben
}

// obj = null (nicht nötig, da val)
// weakRef.get() kann jetzt null zurückgeben
```

**Besonderheiten:**
- `WeakReference` erhöht Referenzzähler nicht
- Verhindert zirkuläre Referenzen bei Garbage Collection
- `get()` gibt Objekt zurück, wenn es noch existiert, sonst `null`
- Automatische Freigabe durch Garbage Collector (JVM)

**Weiterführende Links:**
- [Kotlin Documentation](https://kotlinlang.org/docs/home.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
import java.lang.ref.WeakReference

// WeakReference: Nicht-besitzende Referenz
val obj = new AnyRef()
val weakRef = new WeakReference(obj)

// Prüfen, ob Objekt noch existiert
val retrieved = weakRef.get()
if (retrieved != null) {
    // Objekt existiert noch
} else {
    // Objekt wurde bereits freigegeben
}

// obj wird automatisch freigegeben, wenn nicht mehr referenziert
// weakRef.get() kann jetzt null zurückgeben
```

**Besonderheiten:**
- `WeakReference` erhöht Referenzzähler nicht
- Verhindert zirkuläre Referenzen bei Garbage Collection
- `get()` gibt Objekt zurück, wenn es noch existiert, sonst `null`
- Automatische Freigabe durch Garbage Collector (JVM)

**Weiterführende Links:**
- [Scala Documentation](https://docs.scala-lang.org/)

</TabItem>
<TabItem value="python" label="Python">

```python
import weakref

# weakref: Nicht-besitzende Referenz
obj = [10, 20, 30]
weak_ref = weakref.ref(obj)

# Prüfen, ob Objekt noch existiert
retrieved = weak_ref()
if retrieved is not None:
    # Objekt existiert noch
    print(retrieved)
else:
    # Objekt wurde bereits freigegeben
    print("Objekt wurde freigegeben")

obj = None  # Objekt kann jetzt freigegeben werden
# weak_ref() gibt jetzt None zurück
```

**Besonderheiten:**
- `weakref.ref` erhöht Referenzzähler nicht
- Verhindert zirkuläre Referenzen bei Reference Counting
- `weak_ref()` gibt Objekt zurück, wenn es noch existiert, sonst `None`
- Automatische Freigabe durch Garbage Collector

**Weiterführende Links:**
- [Python Documentation - weakref](https://docs.python.org/3/library/weakref.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
import 'dart:collection';

// WeakReference: Nicht-besitzende Referenz (seit Dart 2.17)
final obj = Object();
final weakRef = WeakReference(obj);

// Prüfen, ob Objekt noch existiert
final retrieved = weakRef.target;
if (retrieved != null) {
    // Objekt existiert noch
} else {
    // Objekt wurde bereits freigegeben
}

// obj wird automatisch freigegeben, wenn nicht mehr referenziert
// weakRef.target gibt jetzt null zurück
```

**Besonderheiten:**
- `WeakReference` erhöht Referenzzähler nicht (seit Dart 2.17)
- Verhindert zirkuläre Referenzen bei Garbage Collection
- `target` gibt Objekt zurück, wenn es noch existiert, sonst `null`
- Automatische Freigabe durch Garbage Collector

**Weiterführende Links:**
- [Dart Documentation - WeakReference](https://api.dart.dev/stable/dart-core/WeakReference-class.html)

</TabItem>
</Tabs>


## 13.2.6. Memory Pools

Vorallokierte Speicherpools für effiziente Speicherverwaltung. Reduzieren Allokations-Overhead durch Wiederverwendung von Speicherblöcken.

### Sprachen {#sprachen}

<Tabs availableTabs={['c', 'cpp', 'objective-c', 'rust', 'zig']}>
<TabItem value="c" label="C">

```c
// Memory Pool: Manuelle Implementierung
#include <stdlib.h>

typedef struct {
    void* pool;
    size_t block_size;
    size_t pool_size;
    size_t used;
} MemoryPool;

MemoryPool* create_pool(size_t block_size, size_t num_blocks) {
    MemoryPool* pool = malloc(sizeof(MemoryPool));
    pool->block_size = block_size;
    pool->pool_size = block_size * num_blocks;
    pool->pool = malloc(pool->pool_size);
    pool->used = 0;
    return pool;
}

void* pool_alloc(MemoryPool* pool) {
    if (pool->used + pool->block_size > pool->pool_size) {
        return NULL;  // Pool voll
    }
    void* ptr = (char*)pool->pool + pool->used;
    pool->used += pool->block_size;
    return ptr;
}

void pool_free(MemoryPool* pool) {
    free(pool->pool);
    free(pool);
}
```

**Besonderheiten:**
- Manuelle Implementierung erforderlich
- Vorallokation reduziert Allokations-Overhead
- Wiederverwendung von Speicherblöcken
- Kann für spezifische Anwendungsfälle optimiert werden

**Weiterführende Links:**
- [C Standard Library - Memory Management](https://en.cppreference.com/w/c/memory)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
#include <memory>
#include <vector>

// Memory Pool: Manuelle Implementierung oder Bibliothek
template<typename T>
class MemoryPool {
    std::vector<T> pool;
    std::vector<bool> used;
public:
    MemoryPool(size_t size) : pool(size), used(size, false) {}
    
    T* allocate() {
        for (size_t i = 0; i < used.size(); ++i) {
            if (!used[i]) {
                used[i] = true;
                return &pool[i];
            }
        }
        return nullptr;  // Pool voll
    }
    
    void deallocate(T* ptr) {
        for (size_t i = 0; i < pool.size(); ++i) {
            if (&pool[i] == ptr) {
                used[i] = false;
                return;
            }
        }
    }
};

// Oder: boost::pool oder ähnliche Bibliotheken
```

**Besonderheiten:**
- Manuelle Implementierung oder Bibliotheken (z.B. boost::pool)
- Vorallokation reduziert Allokations-Overhead
- Wiederverwendung von Speicherblöcken
- Template-basierte Implementierung möglich

**Weiterführende Links:**
- [cppreference.com - Memory Management](https://en.cppreference.com/w/cpp/memory)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
use std::alloc::{Layout, alloc, dealloc};

// Memory Pool: Manuelle Implementierung
struct MemoryPool {
    pool: *mut u8,
    block_size: usize,
    pool_size: usize,
    used: usize,
}

impl MemoryPool {
    fn new(block_size: usize, num_blocks: usize) -> Self {
        let pool_size = block_size * num_blocks;
        let layout = Layout::from_size_align(pool_size, block_size).unwrap();
        let pool = unsafe { alloc(layout) };
        
        MemoryPool {
            pool,
            block_size,
            pool_size,
            used: 0,
        }
    }
    
    unsafe fn alloc(&mut self) -> *mut u8 {
        if self.used + self.block_size > self.pool_size {
            return std::ptr::null_mut();
        }
        let ptr = self.pool.add(self.used);
        self.used += self.block_size;
        ptr
    }
}

impl Drop for MemoryPool {
    fn drop(&mut self) {
        let layout = Layout::from_size_align(self.pool_size, self.block_size).unwrap();
        unsafe { dealloc(self.pool, layout) };
    }
}
```

**Besonderheiten:**
- Manuelle Implementierung in `unsafe`-Blöcken
- Vorallokation reduziert Allokations-Overhead
- Wiederverwendung von Speicherblöcken
- RAII durch `Drop`-Trait

**Weiterführende Links:**
- [The Rust Book - Unsafe Rust](https://doc.rust-lang.org/book/ch19-01-unsafe-rust.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
const std = @import("std");

// Memory Pool: Arena Allocator
const MemoryPool = struct {
    allocator: std.mem.Allocator,
    arena: std.heap.ArenaAllocator,
    
    pub fn init(allocator: std.mem.Allocator) MemoryPool {
        return MemoryPool{
            .allocator = allocator,
            .arena = std.heap.ArenaAllocator.init(allocator),
        };
    }
    
    pub fn alloc(self: *MemoryPool, comptime T: type, n: usize) ![]T {
        return self.arena.allocator().alloc(T, n);
    }
    
    pub fn deinit(self: *MemoryPool) void {
        self.arena.deinit();
    }
};
```

**Besonderheiten:**
- `ArenaAllocator` für Memory Pools
- Vorallokation reduziert Allokations-Overhead
- Wiederverwendung von Speicherblöcken
- Explizite Allokatoren für verschiedene Strategien

**Weiterführende Links:**
- [Zig Documentation - Memory Management](https://ziglang.org/documentation/0.11.0/#Memory)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// @autoreleasepool (moderne Syntax)
@autoreleasepool {
    for (int i = 0; i < 100000; i++) {
        @autoreleasepool {
            NSString *str = [NSString stringWithFormat:@"Item %d", i];
            // str wird am Ende des inneren Pools freigegeben
        }
    }
}
```

**Besonderheiten:**
- `@autoreleasepool` Blöcke für automatische Speicherfreigabe
- Wichtig für Schleifen mit vielen temporären Objekten
- Jeder Thread benötigt mindestens einen Autorelease Pool
- Ersetzt das ältere `NSAutoreleasePool`-Objekt

**Weiterführende Links:**
- [Apple Documentation - Autorelease Pools](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/MemoryMgmt/Articles/mmAutoreleasePools.html)

</TabItem>
</Tabs>


## 13.2.7. Move Semantics

Übertragung von Ownership ohne Kopieren. Ermöglicht effiziente Übertragung von Ressourcen, indem der Besitz eines Objekts übertragen wird, ohne eine Kopie zu erstellen.

### Sprachen {#sprachen}

<Tabs availableTabs={['cpp', 'rust']}>
<TabItem value="cpp" label="C++">

```cpp
#include <vector>
#include <utility>

// Move Semantics: Übertragung von Ownership ohne Kopieren
std::vector<int> create_vector() {
    std::vector<int> vec = {10, 20, 30, 40, 50};
    return vec;  // Move (seit C++11)
}

std::vector<int> vec1 = create_vector();  // Move-Konstruktor
std::vector<int> vec2 = std::move(vec1);  // Explizites Move
// vec1 ist jetzt leer (moved-from state)

// Move Assignment
vec1 = std::move(vec2);  // vec2 ist jetzt leer

// Move-Konstruktor und Move-Assignment-Operator
class MyClass {
    std::vector<int> data;
public:
    // Move-Konstruktor
    MyClass(MyClass&& other) noexcept : data(std::move(other.data)) {}
    
    // Move-Assignment-Operator
    MyClass& operator=(MyClass&& other) noexcept {
        if (this != &other) {
            data = std::move(other.data);
        }
        return *this;
    }
};
```

**Besonderheiten:**
- Move Semantics seit C++11
- `std::move` markiert Objekt als "bereit zum Verschieben"
- Move-Konstruktor und Move-Assignment-Operator erforderlich
- Reduziert unnötige Kopien
- Moved-from Objekte sind in gültigem, aber unspezifiziertem Zustand

**Weiterführende Links:**
- [cppreference.com - Move Semantics](https://en.cppreference.com/w/cpp/language/move_constructor)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Move Semantics: Übertragung von Ownership ohne Kopieren
fn create_vector() -> Vec<i32> {
    vec![10, 20, 30, 40, 50]  // Move
}

let vec1 = create_vector();  // Ownership wird übertragen
let vec2 = vec1;  // Move (vec1 ist nicht mehr verwendbar)
// vec1 kann nicht mehr verwendet werden

// Move in Funktionen
fn take_ownership(vec: Vec<i32>) {
    // vec wird hier verwendet
}

let vec3 = vec![10, 20, 30];
take_ownership(vec3);  // Move
// vec3 kann nicht mehr verwendet werden

// Copy-Types werden kopiert, nicht verschoben
let x = 42;
let y = x;  // Copy (i32 implementiert Copy)
// x kann weiterhin verwendet werden
```

**Besonderheiten:**
- Move ist Standard für alle Typen, die nicht `Copy` implementieren
- Ownership wird automatisch übertragen
- Moved-from Variablen können nicht mehr verwendet werden
- `Copy`-Trait für Typen, die kopiert statt verschoben werden sollen
- Compiler verhindert Verwendung von moved-from Variablen

**Weiterführende Links:**
- [The Rust Book - Ownership and Moves](https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html#ownership-and-functions)

</TabItem>
</Tabs>


## 13.2.8. Borrowing / References (Rust-style)

Temporäre Referenzen auf Objekte ohne Ownership-Transfer. Ermöglicht es, auf Objekte zuzugreifen, ohne deren Ownership zu übernehmen.

### Sprachen {#sprachen}

<Tabs availableTabs={['rust']}>
<TabItem value="rust" label="Rust">

```rust
// Borrowing: Immutable und Mutable References
let mut value = 42;

// Immutable Borrowing: Mehrere References erlaubt
let ref1 = &value;  // Immutable Reference
let ref2 = &value;  // Mehrere immutable References erlaubt
println!("{} {}", ref1, ref2);

// Mutable Borrowing: Nur eine Reference gleichzeitig
let ref3 = &mut value;  // Mutable Reference
*ref3 = 100;  // Mutation
// let ref4 = &value;  // Fehler: Keine weiteren References, wenn mutable Reference existiert

// Borrowing in Funktionen
fn borrow_immutable(x: &i32) {
    println!("{}", x);
}

fn borrow_mutable(x: &mut i32) {
    *x = 200;
}

let mut num = 42;
borrow_immutable(&num);  // Immutable Borrow
borrow_mutable(&mut num);  // Mutable Borrow

// Borrowing Rules:
// 1. Entweder mehrere immutable References ODER eine mutable Reference
// 2. References müssen gültig bleiben (Lifetime)
// 3. Compiler garantiert Speichersicherheit zur Compile-Zeit
```

**Besonderheiten:**
- Immutable References (`&T`): Mehrere gleichzeitig erlaubt
- Mutable References (`&mut T`): Nur eine gleichzeitig, exklusiv
- Borrowing Rules werden zur Compile-Zeit geprüft
- Verhindert Data Races und Speicherfehler
- Lifetime-Annotationen für komplexere Fälle

**Weiterführende Links:**
- [The Rust Book - References and Borrowing](https://doc.rust-lang.org/book/ch04-02-references-and-borrowing.html)

</TabItem>
</Tabs>


## 13.2.9. Lifetimes

Lebensdauer von Referenzen. Garantiert, dass Referenzen nicht länger existieren als die Objekte, auf die sie verweisen.

### Sprachen {#sprachen}

<Tabs availableTabs={['rust']}>
<TabItem value="rust" label="Rust">

```rust
// Lifetimes: Garantieren Gültigkeit von Referenzen
fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() {
        x
    } else {
        y
    }
}

let string1 = String::from("long string");
let result;
{
    let string2 = String::from("xyz");
    result = longest(string1.as_str(), string2.as_str());
    // result ist gültig hier
}
// result wäre ungültig hier, wenn string2 den Scope verlassen hätte

// Lifetime-Elision: Compiler kann Lifetimes oft ableiten
fn first_word(s: &str) -> &str {  // Elided: fn first_word<'a>(s: &'a str) -> &'a str
    let bytes = s.as_bytes();
    for (i, &item) in bytes.iter().enumerate() {
        if item == b' ' {
            return &s[0..i];
        }
    }
    &s[..]
}

// Structs mit Lifetime-Parametern
struct ImportantExcerpt<'a> {
    part: &'a str,
}

impl<'a> ImportantExcerpt<'a> {
    fn level(&self) -> i32 {
        3
    }
    
    fn announce_and_return_part(&self, announcement: &str) -> &str {
        println!("Attention please: {}", announcement);
        self.part
    }
}

let novel = String::from("Call me Ishmael. Some years ago...");
let first_sentence = novel.split('.').next().expect("Could not find a '.'");
let i = ImportantExcerpt {
    part: first_sentence,
};
```

**Besonderheiten:**
- Lifetime-Parameter (`'a`, `'b`, etc.) annotieren Lebensdauer von Referenzen
- Lifetime-Elision: Compiler kann Lifetimes oft automatisch ableiten
- Structs können Lifetime-Parameter haben
- Verhindert Dangling References zur Compile-Zeit
- `'static` Lifetime für Referenzen, die für die gesamte Programmlaufzeit gültig sind

**Weiterführende Links:**
- [The Rust Book - Validating References with Lifetimes](https://doc.rust-lang.org/book/ch10-03-lifetime-syntax.html)

</TabItem>
</Tabs>


## 13.2.10. Explicit Allocators

Explizite Allokatoren für kontrollierte Speicherverwaltung. Ermöglichen es, verschiedene Allokationsstrategien zu wählen und Speicherverwaltung zu optimieren.

### Sprachen {#sprachen}

<Tabs availableTabs={['cpp', 'd', 'rust', 'zig']}>
<TabItem value="zig" label="Zig">

```zig
const std = @import("std");

// Explicit Allocators: Verschiedene Allokatoren verfügbar
var gpa = std.heap.GeneralPurposeAllocator(.{}){};
const allocator = gpa.allocator();
defer _ = gpa.deinit();

// GeneralPurposeAllocator
const memory1 = try allocator.alloc(u8, 100);
defer allocator.free(memory1);

// ArenaAllocator: Alle Allokationen werden zusammen freigegeben
var arena = std.heap.ArenaAllocator.init(allocator);
defer arena.deinit();
const arena_allocator = arena.allocator();

const memory2 = try arena_allocator.alloc(u8, 100);
// Wird automatisch freigegeben, wenn arena.deinit() aufgerufen wird

// FixedBufferAllocator: Allokation aus festem Buffer
var buffer: [1000]u8 = undefined;
var fba = std.heap.FixedBufferAllocator.init(&buffer);
const fba_allocator = fba.allocator();

const memory3 = try fba_allocator.alloc(u8, 100);
// Wird automatisch freigegeben, wenn Buffer voll ist oder Allocator zerstört wird
```

**Besonderheiten:**
- Verschiedene Allokatoren verfügbar (GeneralPurposeAllocator, ArenaAllocator, FixedBufferAllocator, etc.)
- Explizite Auswahl der Allokationsstrategie
- `defer` für automatische Freigabe
- Allokatoren werden als Parameter übergeben

**Weiterführende Links:**
- [Zig Documentation - Memory Management](https://ziglang.org/documentation/0.11.0/#Memory)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
use std::alloc::{Layout, GlobalAlloc, System};

// Explicit Allocators: Custom Allocator (seit Rust 1.28)
struct MyAllocator;

unsafe impl GlobalAlloc for MyAllocator {
    unsafe fn alloc(&self, layout: Layout) -> *mut u8 {
        System.alloc(layout)
    }
    
    unsafe fn dealloc(&self, ptr: *mut u8, layout: Layout) {
        System.dealloc(ptr, layout)
    }
}

#[global_allocator]
static GLOBAL: MyAllocator = MyAllocator;

// Oder: Allocator API (experimentell)
use std::alloc::Allocator;

fn custom_alloc<T, A: Allocator>(allocator: &A, value: T) -> Box<T, A> {
    Box::new_in(value, allocator)
}
```

**Besonderheiten:**
- Custom Allocators seit Rust 1.28
- `GlobalAlloc` Trait für globale Allokatoren
- Allocator API (experimentell) für lokale Allokatoren
- Standardmäßig verwendet Rust System-Allocator

**Weiterführende Links:**
- [The Rust Book - Custom Allocators](https://doc.rust-lang.org/edition-guide/rust-2018/platform-and-target-support/custom-allocators.html)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
#include <memory>
#include <vector>

// Explicit Allocators: Custom Allocator
template<typename T>
class MyAllocator {
public:
    using value_type = T;
    
    T* allocate(std::size_t n) {
        return static_cast<T*>(::operator new(n * sizeof(T)));
    }
    
    void deallocate(T* p, std::size_t) {
        ::operator delete(p);
    }
};

// Verwendung mit STL-Containern
std::vector<int, MyAllocator<int>> vec;

// Oder: std::allocator (Standard)
std::vector<int, std::allocator<int>> vec2;

// Polymorphic Allocators (seit C++17)
#include <memory_resource>
std::pmr::vector<int> vec3;  // Verwendet default memory resource
```

**Besonderheiten:**
- Custom Allocators durch Template-Spezialisierung
- STL-Container akzeptieren Allokatoren als Template-Parameter
- Polymorphic Allocators (seit C++17) mit `std::pmr`
- `std::allocator` ist Standard-Allocator

**Weiterführende Links:**
- [cppreference.com - Allocators](https://en.cppreference.com/w/cpp/named_req/Allocator)

</TabItem>
<TabItem value="d" label="D">

```d
// Explicit Allocators
// Benötigt: import std.experimental.allocator;
// Benötigt: import std.experimental.allocator.mallocator;

// Mallocator (malloc-basiert)
auto allocator = Mallocator.instance;
int[] arr = allocator.makeArray!int(100);
// ... verwenden ...
allocator.dispose(arr);

// GC Allocator (Standard)
// Benötigt: import std.experimental.allocator.gc_allocator;
auto gcArr = GCAllocator.instance.makeArray!int(100);
// Wird vom GC verwaltet
```

**Besonderheiten:**
- `std.experimental.allocator` bietet austauschbare Allocator-Strategien
- `Mallocator`: malloc/free-basiert
- `GCAllocator`: GC-verwaltete Allokation
- Composable Allocators: verschiedene Strategien kombinierbar
- `@nogc` kompatible Allocators verfügbar

**Weiterführende Links:**
- [D Phobos - std.experimental.allocator](https://dlang.org/phobos/std_experimental_allocator.html)

</TabItem>
</Tabs>


## 13.2.11. No Hidden Allocations

Garantie, dass keine versteckten Heap-Allokationen stattfinden. Alle Allokationen sind explizit und zur Compile-Zeit bekannt.

### Sprachen {#sprachen}

<Tabs availableTabs={['c', 'cpp', 'rust', 'zig']}>
<TabItem value="c" label="C">

```c
// No Hidden Allocations: Alle Allokationen sind explizit
void function() {
    int stack_array[5] = {10, 20, 30, 40, 50};  // Stack-Allokation, explizit
    
    // Heap-Allokation ist explizit
    int* heap_array = malloc(5 * sizeof(int));  // Explizite Allokation
    if (heap_array == NULL) {
        // Fehlerbehandlung
        return;
    }
    free(heap_array);  // Explizite Freigabe
    
    // Keine versteckten Allokationen
}
```

**Besonderheiten:**
- Alle Allokationen sind explizit (`malloc`, `calloc`, etc.)
- Keine versteckten Heap-Allokationen
- Stack-Allokation ist explizit durch Array-Deklaration
- Programmierer hat vollständige Kontrolle über Speicherverwaltung

**Weiterführende Links:**
- [C Standard Library - Memory Management](https://en.cppreference.com/w/c/memory)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// No Hidden Allocations: Alle Allokationen sind explizit
void function() {
    int stack_array[5] = {10, 20, 30, 40, 50};  // Stack-Allokation, explizit
    
    // Heap-Allokation ist explizit
    int* heap_array = new int[5];  // Explizite Allokation
    delete[] heap_array;  // Explizite Freigabe
    
    // Smart Pointers: Allokation ist explizit
    auto smart_ptr = std::make_unique<int[]>(5);  // Explizite Allokation
    // Automatische Freigabe, aber Allokation war explizit
    
    // Keine versteckten Allokationen in Standard-Containern
    std::vector<int> vec(5);  // Allokation ist explizit durch Konstruktor
}
```

**Besonderheiten:**
- Alle Allokationen sind explizit (`new`, `std::make_unique`, etc.)
- Keine versteckten Heap-Allokationen
- Stack-Allokation ist explizit durch Array-Deklaration
- STL-Container allokieren explizit, aber zur Laufzeit

**Weiterführende Links:**
- [cppreference.com - Dynamic memory management](https://en.cppreference.com/w/cpp/memory)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// No Hidden Allocations: Alle Allokationen sind explizit
fn function() {
    let stack_array = [10, 20, 30, 40, 50];  // Stack-Allokation, explizit
    
    // Heap-Allokation ist explizit
    let heap_vec = vec![10, 20, 30, 40, 50];  // Explizite Allokation durch vec!
    let boxed = Box::new(42);  // Explizite Allokation durch Box::new
    
    // Keine versteckten Allokationen
    // String-Literale sind statisch allokiert
    let s = "Hello";  // Statische Allokation, kein Heap
}
```

**Besonderheiten:**
- Alle Heap-Allokationen sind explizit (`Vec`, `Box`, `String`, etc.)
- Keine versteckten Heap-Allokationen
- Stack-Allokation ist explizit durch Array-Deklaration
- Compiler kann Allokationen zur Compile-Zeit optimieren

**Weiterführende Links:**
- [The Rust Book - The Stack and the Heap](https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html#the-stack-and-the-heap)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// No Hidden Allocations: Alle Allokationen sind explizit
fn function() void {
    var stack_array = [5]i32{ 10, 20, 30, 40, 50 };  // Stack-Allokation, explizit
    
    // Heap-Allokation ist explizit durch Allocator
    const std = @import("std");
    var gpa = std.heap.GeneralPurposeAllocator(.{}){};
    const allocator = gpa.allocator();
    defer _ = gpa.deinit();
    
    const heap_array = allocator.alloc(i32, 5) catch return;  // Explizite Allokation
    defer allocator.free(heap_array);
    
    // Keine versteckten Allokationen
}
```

**Besonderheiten:**
- Alle Allokationen sind explizit durch Allokatoren
- Keine versteckten Heap-Allokationen
- Stack-Allokation ist explizit durch Array-Deklaration
- Allokatoren müssen explizit übergeben werden

**Weiterführende Links:**
- [Zig Documentation - Memory Management](https://ziglang.org/documentation/0.11.0/#Memory)

</TabItem>
</Tabs>


## 13.2.12. Unsafe Blocks

Ermöglicht es, Code zu schreiben, der die normalen Typsicherheits- und Speichersicherheits-Garantien der Sprache umgeht, um direkten Speicherzugriff oder Low-Level-Operationen zu ermöglichen.

### Sprachen {#sprachen}

<Tabs availableTabs={['csharp', 'd', 'go', 'lean4', 'rust', 'swift', 'v']} orangeTabs={['nim']}>
<TabItem value="rust" label="Rust">

```rust
let mut x = 5;

// Unsafe Block für unsichere Operationen
unsafe {
    // Rohe Zeiger
    let raw_ptr = &mut x as *mut i32;
    *raw_ptr = 10;
    
    // Unsichere Funktionen aufrufen
    unsafe_function();
    
    // Statische Variablen modifizieren
    static mut COUNTER: i32 = 0;
    COUNTER += 1;
}
// x ist jetzt 10
```

**Besonderheiten:**
- `unsafe` Block für unsichere Operationen
- Rohe Zeiger (`*const T`, `*mut T`)
- Unsichere Funktionen müssen explizit markiert werden
- Statische mutable Variablen nur in `unsafe` Blöcken

**Weiterführende Links:**
- [Rust Documentation - Unsafe](https://doc.rust-lang.org/book/ch19-01-unsafe-rust.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Benötigt: using System;

int x = 5;

// Unsafe Block für unsichere Operationen
unsafe {
    // Zeiger-Arithmetik
    int* ptr = &x;
    *ptr = 10;
    
    // Stackalloc für Stack-Allokation
    int* arr = stackalloc int[10];
    arr[0] = 42;
}
// x ist jetzt 10
```

**Besonderheiten:**
- `unsafe` Block für unsichere Operationen
- Zeiger-Arithmetik über `*` und `&`
- `stackalloc` für Stack-Allokation
- Erfordert `/unsafe` Compiler-Flag

**Weiterführende Links:**
- [Microsoft C# Documentation - Unsafe Code](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/unsafe-code)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Benötigt: import Foundation

var x = 5

// UnsafeMutablePointer für unsichere Operationen
withUnsafeMutablePointer(to: &x) { ptr in
    ptr.pointee = 10
}

// UnsafeRawPointer für rohe Zeiger
let rawPtr = withUnsafePointer(to: &x) { $0 }
let value = rawPtr.load(as: Int.self)
// x ist jetzt 10
```

**Besonderheiten:**
- `UnsafePointer`, `UnsafeMutablePointer` für unsichere Zeiger
- `withUnsafePointer` für sichere Wrapper
- `UnsafeRawPointer` für rohe Zeiger
- Explizite Typkonvertierung erforderlich

**Weiterführende Links:**
- [Swift Documentation - Unsafe Pointers](https://developer.apple.com/documentation/swift/unsafepointer)

</TabItem>
<TabItem value="go" label="Go">

```go
// Benötigt: import "unsafe"

x := 5

// Unsafe.Pointer für unsichere Operationen
ptr := unsafe.Pointer(&x)
intPtr := (*int)(ptr)
*intPtr = 10

// Unsafe.Sizeof für Größen-Berechnung
size := unsafe.Sizeof(x)

// Unsafe.Offsetof für Offset-Berechnung
type Struct struct {
    A int
    B int
}
offset := unsafe.Offsetof(Struct{}.B)
// x ist jetzt 10, size und offset enthalten die Werte
```

**Besonderheiten:**
- `unsafe.Pointer` für unsichere Zeiger
- `unsafe.Sizeof` für Größen-Berechnung
- `unsafe.Offsetof` für Offset-Berechnung
- Sehr eingeschränkte unsichere Operationen

**Weiterführende Links:**
- [Go Documentation - unsafe](https://pkg.go.dev/unsafe)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- unsafe-Keyword für unsichere Operationen
unsafe def unsafeCast {α β : Type} (a : α) : β :=
  unsafeCast a

-- @[implementedBy] für unsafe FFI-Implementierungen
@[extern "lean_io_prim_println"]
opaque printlnRaw : String → IO Unit

-- unsafe für Low-Level-Operationen
unsafe def readRawBytes (ptr : USize) (n : USize) : IO ByteArray :=
  -- Direkter Speicherzugriff möglich
  pure (ByteArray.mkEmpty n.toNat)
```

**Besonderheiten:**
- `unsafe` Keyword markiert Funktionen, die das Typsystem umgehen.
- Innerhalb von `unsafe` können unsichere Casts und FFI-Aufrufe durchgeführt werden.
- Der Lean-Kernel verifiziert `unsafe`-Definitionen nicht.
- `@[extern]` und `@[implementedBy]` ermöglichen FFI zu C-Code.

**Weiterführende Links:**
- [Lean 4 Documentation - FFI](https://lean-lang.org/lean4/doc/dev/ffi.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Unsafe Operationen (kein explizites unsafe-Block)
proc unsafeExample() =
  var x = 5

  # Unsafe Cast
  let p = cast[ptr int](addr(x))
  p[] = 10

  # Unsafe Pointer-Arithmetik
  let arr = cast[ptr UncheckedArray[int]](alloc(10 * sizeof(int)))
  arr[0] = 42
  dealloc(arr)

  echo "x: ", x  # 10

unsafeExample()
```

**Besonderheiten:**
- `cast` für unsichere Typkonvertierung
- `addr` für Adress-Operator
- `alloc`/`dealloc` für manuelle Speicher-Allokation
- Kein explizites `unsafe`-Block-Keyword wie in Rust

**Weiterführende Links:**
- [Nim Documentation - Unsafe Operations](https://nim-lang.org/docs/manual.html#types-reference-and-pointer-types)

</TabItem>
<TabItem value="d" label="D">

```d
// Benötigt: import std.stdio;

int x = 5;

// Unsafe Cast
int* ptr = cast(int*) &x;
*ptr = 10;

// Unsafe Pointer-Arithmetik
int[10] arr;
int* arrPtr = arr.ptr;
arrPtr[0] = 42;
// x ist jetzt 10
```

**Besonderheiten:**
- `cast` für unsichere Typkonvertierung
- `&` für Adress-Operator
- Pointer-Arithmetik möglich
- Weniger strukturiert als Rust

**Weiterführende Links:**
- [D Language Documentation - Pointers](https://dlang.org/spec/expression.html#address_of)

</TabItem>
<TabItem value="v" label="V">

```v
// Unsafe Blocks
mut arr := [1, 2, 3, 4, 5]

unsafe {
    ptr := &arr[0]
    second := ptr + 1
    println(*second)  // 2
}
```

**Besonderheiten:**
- `unsafe { }` für Pointer-Arithmetik und andere unsichere Operationen
- Deaktiviert Bounds-Checking und andere Sicherheitsprüfungen
- Notwendig für C-Interop und low-level Programmierung
- Compiler warnt vor unnötigen `unsafe`-Blöcken

**Weiterführende Links:**
- [V Documentation - Unsafe](https://github.com/vlang/v/blob/master/doc/docs.md#unsafe)

</TabItem>
</Tabs>

## 13.2.13. Array Decay

Automatische Konvertierung von Arrays zu Zeigern (Pointer) bei der Übergabe an Funktionen oder bei bestimmten Operationen. Das Array verliert dabei seine Größeninformation und wird zu einem Zeiger auf das erste Element.

### Sprachen {#sprachen}

<Tabs availableTabs={['c', 'cpp', 'objective-c', 'rust']}>
<TabItem value="c" label="C">

```c
void func(int arr[]) {
    // arr ist hier ein Zeiger, nicht ein Array
    // sizeof(arr) gibt Zeigergröße, nicht Array-Größe
}

int main() {
    int array[10];
    func(array);  // Array "zerfällt" zu Zeiger
}
```

**Besonderheiten:**
- Arrays zerfallen automatisch zu Zeigern bei Funktionsaufrufen
- `sizeof()` auf Funktionsparameter gibt Zeigergröße, nicht Array-Größe
- Keine Größeninformation im Funktionsparameter verfügbar

**Weiterführende Links:**
- [C Standard - Array to Pointer Conversion](https://en.cppreference.com/w/c/language/array)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
void func(int arr[]) {
    // arr ist hier ein Zeiger, nicht ein Array
    // sizeof(arr) gibt Zeigergröße, nicht Array-Größe
}

int main() {
    int array[10];
    func(array);  // Array "zerfällt" zu Zeiger
}
```

**Besonderheiten:**
- Arrays zerfallen automatisch zu Zeigern bei Funktionsaufrufen
- `std::array` oder Referenzen können Array Decay vermeiden
- `sizeof()` auf Funktionsparameter gibt Zeigergröße, nicht Array-Größe

**Weiterführende Links:**
- [cppreference.com - Array to Pointer Conversion](https://en.cppreference.com/w/cpp/language/array#Array-to-pointer_decay)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Rust hat kein Array Decay
fn func(arr: &[i32]) {
    // arr ist ein Slice, behält Größeninformation
}

fn main() {
    let array = [1, 2, 3, 4, 5];
    func(&array);  // Kein Decay, Slice wird übergeben
}
```

**Besonderheiten:**
- Kein Array Decay in Rust
- Arrays können als Slices (`&[T]`) übergeben werden, die Größeninformation behalten
- Typ-sicher, keine impliziten Konvertierungen

**Weiterführende Links:**
- [Rust Documentation - Arrays and Slices](https://doc.rust-lang.org/book/ch04-03-slices.html)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Array Decay: C-Array zerfällt zu Pointer
int numbers[] = {1, 2, 3, 4, 5};
int *ptr = numbers; // Array zerfällt zu Pointer auf erstes Element

void processArray(int *arr, int size) {
    for (int i = 0; i < size; i++) {
        NSLog(@"%d", arr[i]);
    }
}

processArray(numbers, 5); // Array wird als Pointer übergeben
```

**Besonderheiten:**
- C-style Array Decay: Arrays zerfallen zu Pointern bei Funktionsübergabe
- Größeninformation geht beim Decay verloren
- Betrifft nur C-Arrays, nicht NSArray-Objekte

**Weiterführende Links:**
- [Apple Documentation - Programming with Objective-C](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html)

</TabItem>

</Tabs>


