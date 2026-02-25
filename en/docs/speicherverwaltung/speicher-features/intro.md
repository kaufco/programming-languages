---
slug: /speicherverwaltung/speicher-features
title: 13.2. Memory Features
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 13.2. Memory Features

Features for memory management.

## 13.2.1. Stack Allocation

Memory is allocated on the stack. Stack allocation is fast, but the size must be known at compile time and the memory is automatically freed when the scope is left.

### Languages {#sprachen}

<Tabs availableTabs={['c', 'cpp', 'd', 'fortran', 'nim', 'objective-c', 'object-pascal', 'rust', 'zig']}>
<TabItem value="c" label="C">

```c
// Stack Allocation: Local variables are allocated on the stack
void function() {
    int numbers[5] = {10, 20, 30, 40, 50};  // Stack allocation
    
    // Array is automatically freed when function ends
    for (int i = 0; i < 5; i++) {
        printf("%d\n", numbers[i]);
    }
}

// Stack allocation for structures
struct Point {
    int x;
    int y;
};

void function2() {
    struct Point p = {10, 20};  // Stack allocation
    // p is automatically freed when function ends
}
```

**Special features:**
- Local variables are automatically allocated on the stack
- Size must be known at compile time
- Automatic deallocation when leaving the scope
- Very fast, no runtime overhead

**Further reading:**
- [C Standard - Storage Duration](https://en.cppreference.com/w/c/language/storage_duration)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Stack Allocation: Local variables are allocated on the stack
void function() {
    int numbers[5] = {10, 20, 30, 40, 50};  // Stack allocation
    
    // Array is automatically freed when function ends
    for (int i = 0; i < 5; i++) {
        std::cout << numbers[i] << std::endl;
    }
}

// Stack allocation for objects
class Point {
    int x, y;
public:
    Point(int x, int y) : x(x), y(y) {}
};

void function2() {
    Point p(10, 20);  // Stack allocation, destructor is automatically called
    // p is automatically freed when function ends
}
```

**Special features:**
- Local variables are automatically allocated on the stack
- Size must be known at compile time
- Destructors are automatically called when leaving the scope
- RAII works with stack allocation
- Very fast, no runtime overhead

**Further reading:**
- [cppreference.com - Storage Duration](https://en.cppreference.com/w/cpp/language/storage_duration)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Stack Allocation: Local variables are allocated on the stack
fn function() {
    let numbers = [10, 20, 30, 40, 50];  // Stack allocation
    
    // Array is automatically freed when function ends
    for num in numbers.iter() {
        println!("{}", num);
    }
}

// Stack allocation for structures
struct Point {
    x: i32,
    y: i32,
}

fn function2() {
    let p = Point { x: 10, y: 20 };  // Stack allocation
    // p is automatically freed when function ends
    // Drop trait is automatically called
}
```

**Special features:**
- Local variables are automatically allocated on the stack
- Size must be known at compile time
- `Drop` trait is automatically called when leaving the scope
- Ownership system works with stack allocation
- Very fast, no runtime overhead

**Further reading:**
- [The Rust Book - The Stack and the Heap](https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html#the-stack-and-the-heap)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Stack Allocation: Local variables are allocated on the stack
fn function() void {
    var numbers = [5]i32{ 10, 20, 30, 40, 50 };  // Stack allocation
    
    // Array is automatically freed when function ends
    for (numbers) |num| {
        std.debug.print("{}\n", .{num});
    }
}

// Stack allocation for structures
const Point = struct {
    x: i32,
    y: i32,
};

fn function2() void {
    var p = Point{ .x = 10, .y = 20 };  // Stack allocation
    // p is automatically freed when function ends
}
```

**Special features:**
- Local variables are automatically allocated on the stack
- Size must be known at compile time
- Automatic deallocation when leaving the scope
- Very fast, no runtime overhead

**Further reading:**
- [Zig Documentation - Memory](https://ziglang.org/documentation/0.11.0/#Memory)

</TabItem>
<TabItem value="d" label="D">

```d
// Stack Allocation
int x = 42;                    // Stack
double y = 3.14;               // Stack
struct Point { int x, y; }
Point p = Point(1, 2);         // Stack

// Arrays on the stack (static arrays)
int[10] staticArray;           // Stack (fixed size)

// Classes are ALWAYS on the heap (via GC)
// class Obj {}
// auto obj = new Obj();       // Heap
```

**Special features:**
- Primitive types and structs are allocated on the stack by default
- Static arrays (fixed size) on the stack
- Classes are always allocated on the heap (GC-managed)
- Dynamic arrays and slices reference heap memory

**Further reading:**
- [D Language Specification - Memory](https://dlang.org/spec/garbage.html)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Stack Allocation
subroutine process(n)
    integer, intent(in) :: n
    integer :: local_var          ! Stack allocation
    real :: auto_array(n)         ! Automatic array on the stack
    auto_array = 0.0
end subroutine
```

**Special features:**
- Local variables are allocated on the stack
- Automatic arrays (size dependent on parameters) are stack-allocated
- No explicit keyword for stack allocation

**Further reading:**
- [Fortran Wiki - Arrays](https://fortranwiki.org/fortran/show/Arrays)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Stack Allocation: Value types are allocated on the stack
type Point = object
  x, y: float

proc createPoint(): Point =
  Point(x: 1.0, y: 2.0)  # Stack-allocated

var p = createPoint()
echo p.x  # 1.0

# Arrays on the stack
var arr: array[10, int]
arr[0] = 42
```

**Special features:**
- `object` types are allocated on the stack
- `ref object` types are allocated on the heap
- Arrays with fixed size are stack-allocated
- No explicit control needed

**Further reading:**
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
end;  // Automatically freed
```

**Special features:**
- Local variables and records are allocated on the stack
- Automatic deallocation when leaving the scope
- Class instances are allocated on the heap

**Further reading:**
- [Delphi Documentation - Memory Management](https://docwiki.embarcadero.com/RADStudio/en/Memory_Management)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Stack Allocation for primitive types and structs
int value = 42;
CGPoint point = CGPointMake(10.0, 20.0);
char buffer[256];
```

**Special features:**
- Primitive types and C structs are allocated on the stack
- Objective-C objects are always allocated on the heap
- Blocks are initially created on the stack, copied to the heap if needed

**Further reading:**
- [Apple Documentation - Memory Management](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/MemoryMgmt/Articles/MemoryMgmt.html)

</TabItem>
</Tabs>


## 13.2.2. Heap Allocation

Memory is allocated on the heap. Heap allocation allows dynamic sizes at runtime, but requires explicit deallocation (with manual memory management) or is automatically managed (with GC/ARC).

### Languages {#sprachen}

<Tabs availableTabs={['c', 'cpp', 'csharp', 'd', 'dart', 'fortran', 'go', 'java', 'javascript', 'kotlin', 'nim', 'objective-c', 'object-pascal', 'odin', 'python', 'rust', 'swift', 'typescript', 'zig']}>
<TabItem value="c" label="C">

```c
// Heap Allocation: malloc/free
// Requires: #include <stdlib.h>
int* numbers = malloc(5 * sizeof(int));  // Heap allocation
if (numbers == NULL) {
    // Error handling
    return;
}

numbers[0] = 10;
numbers[1] = 20;
numbers[2] = 30;
numbers[3] = 40;
numbers[4] = 50;

// Explicit deallocation required
free(numbers);
numbers = NULL;
```

**Special features:**
- Uses `malloc`/`calloc` for heap allocation
- Size can be determined at runtime
- Explicit deallocation with `free` required
- `malloc` returns `NULL` on errors

**Further reading:**
- [C Standard Library - Memory Management](https://en.cppreference.com/w/c/memory)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Heap Allocation: new/delete
int* numbers = new int[5];  // Heap allocation
numbers[0] = 10;
numbers[1] = 20;
numbers[2] = 30;
numbers[3] = 40;
numbers[4] = 50;

// Explicit deallocation required
delete[] numbers;
numbers = nullptr;

// Or with Smart Pointers (automatic deallocation)
#include <memory>
auto numbers2 = std::make_unique<int[]>(5);
numbers2[0] = 10;
// Automatic deallocation when numbers2 leaves scope
```

**Special features:**
- Uses `new`/`delete` for heap allocation
- Size can be determined at runtime
- Explicit deallocation with `delete`/`delete[]` required
- Smart Pointers (`std::unique_ptr`, `std::shared_ptr`) for automatic deallocation

**Further reading:**
- [cppreference.com - Dynamic memory management](https://en.cppreference.com/w/cpp/memory)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Heap Allocation: Box, Vec, etc.
let numbers = vec![10, 20, 30, 40, 50];  // Heap allocation

// Automatic deallocation when numbers leaves scope
// Drop trait is automatically called

// Box for single objects
let boxed = Box::new(42);  // Heap allocation
// Automatic deallocation when boxed leaves scope
```

**Special features:**
- `Vec`, `Box`, `String` use heap allocation
- Size can be determined at runtime
- Automatic deallocation through ownership system
- No explicit deallocation required

**Further reading:**
- [The Rust Book - The Stack and the Heap](https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html#the-stack-and-the-heap)

</TabItem>
<TabItem value="java" label="Java">

```java
// Heap Allocation: new
int[] numbers = new int[5];  // Heap allocation
numbers[0] = 10;
numbers[1] = 20;
numbers[2] = 30;
numbers[3] = 40;
numbers[4] = 50;

// Automatic deallocation by Garbage Collector
numbers = null;
```

**Special features:**
- All objects are allocated on the heap
- Size can be determined at runtime
- Automatic deallocation by Garbage Collector
- No explicit deallocation required

**Further reading:**
- [Oracle Java Documentation - Memory Management](https://docs.oracle.com/javase/8/docs/technotes/guides/vm/gctuning/)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Heap Allocation: new
int[] numbers = new int[5];  // Heap allocation
numbers[0] = 10;
numbers[1] = 20;
numbers[2] = 30;
numbers[3] = 40;
numbers[4] = 50;

// Automatic deallocation by Garbage Collector
numbers = null;
```

**Special features:**
- All objects are allocated on the heap
- Size can be determined at runtime
- Automatic deallocation by Garbage Collector
- No explicit deallocation required

**Further reading:**
- [Microsoft .NET Documentation - Garbage Collection](https://learn.microsoft.com/en-us/dotnet/standard/garbage-collection/)

</TabItem>
<TabItem value="python" label="Python">

```python
# Heap Allocation: All objects are allocated on the heap
numbers = [10, 20, 30, 40, 50]  # Heap allocation

# Automatic deallocation by Garbage Collector
numbers = None
```

**Special features:**
- All objects are allocated on the heap
- Size can be determined at runtime
- Automatic deallocation by Garbage Collector (Reference Counting + cyclic GC)
- No explicit deallocation required

**Further reading:**
- [Python Documentation - gc](https://docs.python.org/3/library/gc.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Heap Allocation: All objects are allocated on the heap
let numbers = [10, 20, 30, 40, 50];  // Heap allocation

// Automatic deallocation by Garbage Collector
numbers = null;
```

**Special features:**
- All objects are allocated on the heap
- Size can be determined at runtime
- Automatic deallocation by Garbage Collector
- No explicit deallocation required

**Further reading:**
- [MDN Web Docs - Memory Management](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Heap Allocation: All objects are allocated on the heap
let numbers: number[] = [10, 20, 30, 40, 50];  // Heap allocation

// Automatic deallocation by Garbage Collector
numbers = null;
```

**Special features:**
- All objects are allocated on the heap
- Size can be determined at runtime
- Automatic deallocation by Garbage Collector (JavaScript engine)
- No explicit deallocation required

**Further reading:**
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

</TabItem>
<TabItem value="go" label="Go">

```go
// Heap Allocation: make, new
numbers := make([]int, 5)  // Heap allocation
numbers[0] = 10
numbers[1] = 20
numbers[2] = 30
numbers[3] = 40
numbers[4] = 50

// Automatic deallocation by Garbage Collector
numbers = nil
```

**Special features:**
- `make` and `new` allocate on the heap
- Size can be determined at runtime
- Automatic deallocation by Garbage Collector
- No explicit deallocation required

**Further reading:**
- [Go Documentation - Garbage Collector](https://go.dev/doc/gc-guide)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Heap Allocation: Classes are allocated on the heap
var numbers = [10, 20, 30, 40, 50]  // Heap allocation

// Automatic deallocation by ARC
numbers = []
```

**Special features:**
- Classes are allocated on the heap
- Size can be determined at runtime
- Automatic deallocation by ARC
- No explicit deallocation required

**Further reading:**
- [Swift Documentation - Automatic Reference Counting](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/automaticreferencecounting/)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Heap Allocation: All objects are allocated on the heap
val numbers = intArrayOf(10, 20, 30, 40, 50)  // Heap allocation

// Automatic deallocation by Garbage Collector (JVM)
// numbers = null (not needed for val)
```

**Special features:**
- All objects are allocated on the heap
- Size can be determined at runtime
- Automatic deallocation by Garbage Collector (JVM)
- No explicit deallocation required

**Further reading:**
- [Kotlin Documentation - Memory Management](https://kotlinlang.org/docs/native-memory-manager.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Heap Allocation: All objects are allocated on the heap
List<int> numbers = [10, 20, 30, 40, 50];  // Heap allocation

// Automatic deallocation by Garbage Collector
numbers = null;
```

**Special features:**
- All objects are allocated on the heap
- Size can be determined at runtime
- Automatic deallocation by Garbage Collector
- No explicit deallocation required

**Further reading:**
- [Dart Documentation - Memory Management](https://dart.dev/guides/language/effective-dart/memory)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Heap Allocation: new
var numbers = newSeq[int](5)  # Heap allocation
numbers[0] = 10
numbers[1] = 20
numbers[2] = 30
numbers[3] = 40
numbers[4] = 50

# Automatic deallocation by Garbage Collector (if GC enabled)
numbers = nil
```

**Special features:**
- `newSeq`, `new` allocate on the heap
- Size can be determined at runtime
- Automatic deallocation by Garbage Collector (if enabled)
- Optional: Manual memory management possible

**Further reading:**
- [Nim Manual - Memory Management](https://nim-lang.org/docs/manual.html#memory-management)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Heap Allocation: make
package main

import "core:mem"

main :: proc() {
    numbers := make([]int, 5)  // Heap allocation
    defer delete(numbers)  // Explicit deallocation
    
    numbers[0] = 10
    numbers[1] = 20
    numbers[2] = 30
    numbers[3] = 40
    numbers[4] = 50
}
```

**Special features:**
- `make` allocates on the heap
- Size can be determined at runtime
- Explicit deallocation with `delete` required
- `defer` can be used for automatic deallocation

**Further reading:**
- [Odin Documentation - Memory Management](https://odin-lang.org/docs/overview/#memory-management)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Heap Allocation: Allocator
const std = @import("std");

var gpa = std.heap.GeneralPurposeAllocator(.{}){};
const allocator = gpa.allocator();
defer _ = gpa.deinit();

const numbers = try allocator.alloc(i32, 5);  // Heap allocation
defer allocator.free(numbers);

numbers[0] = 10;
numbers[1] = 20;
numbers[2] = 30;
numbers[3] = 40;
numbers[4] = 50;
```

**Special features:**
- Explicit allocators for heap allocation
- Size can be determined at runtime
- Explicit deallocation with `allocator.free` required
- `defer` can be used for automatic deallocation

**Further reading:**
- [Zig Documentation - Memory Management](https://ziglang.org/documentation/0.11.0/#Memory)

</TabItem>
<TabItem value="d" label="D">

```d
// Heap Allocation
class Person {
    string name;
    this(string name) { this.name = name; }
}

auto p = new Person("Alice");     // Heap (GC-managed)
int[] arr = new int[100];         // Heap (dynamic array)

// Manually via malloc
// Requires: import core.stdc.stdlib;
int* ptr = cast(int*) malloc(int.sizeof);
*ptr = 42;
free(ptr);
```

**Special features:**
- `new` allocates on the GC-managed heap
- Classes are always allocated on the heap
- Dynamic arrays and associative arrays are heap-allocated
- Manual heap allocation via `core.stdc.stdlib.malloc`/`free`

**Further reading:**
- [D Language Specification - Memory Management](https://dlang.org/spec/garbage.html)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Heap Allocation with ALLOCATABLE
integer, allocatable :: dynamic_arr(:)
allocate(dynamic_arr(1000))
dynamic_arr = 0
deallocate(dynamic_arr)

! Heap Allocation with POINTER
integer, pointer :: ptr(:)
allocate(ptr(500))
ptr = 0
deallocate(ptr)
```

**Special features:**
- `ALLOCATABLE` for dynamic arrays and scalars (recommended)
- `POINTER` for dynamic allocation with pointer semantics
- `ALLOCATABLE` preferred over `POINTER` (automatic cleanup)
- Allocatable variables are automatically freed when leaving scope

**Further reading:**
- [Fortran Wiki - ALLOCATABLE](https://fortranwiki.org/fortran/show/ALLOCATABLE)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
var
  person: TPerson;       // Heap (class)
  data: array of Integer; // Heap (dynamic array)
begin
  person := TPerson.Create('Alice');  // Heap allocation
  SetLength(data, 100);               // Heap allocation
  try
    // Use
  finally
    person.Free;  // Manual deallocation
    // data is freed via Reference Counting
  end;
end;
```

**Special features:**
- Classes are always allocated on the heap (`Create`)
- Dynamic arrays and strings on the heap (Reference Counted)
- Manual deallocation with `Free` required for classes

**Further reading:**
- [Delphi Documentation - Memory Management](https://docwiki.embarcadero.com/RADStudio/en/Memory_Management)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Heap Allocation for ObjC objects
NSString *str = [[NSString alloc] initWithString:@"Hallo"];

// C-style Heap Allocation
int *array = (int *)malloc(10 * sizeof(int));
array[0] = 42;
free(array);
```

**Special features:**
- All Objective-C objects are allocated on the heap (`alloc`)
- C-style `malloc`/`free` for primitive types and structs
- ARC automatically manages deallocation of ObjC objects
- `malloc`/`free` must be managed manually

**Further reading:**
- [Apple Documentation - Memory Management](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/MemoryMgmt/Articles/MemoryMgmt.html)

</TabItem>
</Tabs>


## 13.2.3. References vs. Pointers

Differences between references and pointers: References are aliases for objects and cannot be reassigned, while pointers store addresses and can be reassigned.

### Languages {#sprachen}

<Tabs availableTabs={['cpp', 'd', 'nim', 'objective-c', 'object-pascal', 'rust']}>
<TabItem value="cpp" label="C++">

```cpp
// Pointers: Can be reassigned, can be null
int value = 42;
int* ptr = &value;  // Pointer
*ptr = 100;  // Dereferencing

ptr = nullptr;  // Can be reassigned
if (ptr != nullptr) {  // Null check possible
    *ptr = 200;
}

// References: Cannot be reassigned, cannot be null
int value2 = 42;
int& ref = value2;  // Reference (Alias)
ref = 100;  // Direct use, no dereferencing

// ref = value;  // Error: Cannot be reassigned
// int& ref2;  // Error: Must be initialized
```

**Special features:**
- Pointers can be `nullptr`, references cannot
- Pointers can be reassigned, references cannot
- Pointers require dereferencing (`*`), references do not
- References must be initialized at declaration
- Pointers can perform arithmetic operations, references cannot

**Further reading:**
- [cppreference.com - Pointers](https://en.cppreference.com/w/cpp/language/pointer)
- [cppreference.com - References](https://en.cppreference.com/w/cpp/language/reference)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// References: Immutable and Mutable References
let mut value = 42;
let ref1 = &value;  // Immutable Reference
let ref2 = &value;  // Multiple immutable references allowed
// *ref1 = 100;  // Error: Immutable reference cannot be mutated

let ref3 = &mut value;  // Mutable Reference
*ref3 = 100;  // Dereferencing and mutation
// let ref4 = &value;  // Error: No further references when mutable reference exists

// Raw Pointers: Only in unsafe blocks
let raw_ptr: *const i32 = &value;  // Immutable Raw Pointer
let raw_ptr_mut: *mut i32 = &mut value;  // Mutable Raw Pointer

unsafe {
    *raw_ptr_mut = 200;  // Unsafe dereferencing
}
```

**Special features:**
- References are safe and checked at compile time
- Immutable references can exist multiple times
- Mutable references are exclusive (only one at a time)
- Raw Pointers (`*const T`, `*mut T`) are unsafe and only in `unsafe` blocks
- References cannot be null, Raw Pointers can be null

**Further reading:**
- [The Rust Book - References and Borrowing](https://doc.rust-lang.org/book/ch04-02-references-and-borrowing.html)
- [The Rust Book - Unsafe Rust](https://doc.rust-lang.org/book/ch19-01-unsafe-rust.html)

</TabItem>
<TabItem value="d" label="D">

```d
// References vs. Pointers
int x = 42;

// Pointers (explicit)
int* ptr = &x;
*ptr = 100;
writeln(x);  // 100

// References (only as parameters)
void modify(ref int val) {
    val = 200;
}
modify(x);
writeln(x);  // 200

// Classes are implicitly reference types
class MyClass { int value; }
MyClass a = new MyClass();
MyClass b = a;  // Reference, not a copy
b.value = 42;
writeln(a.value);  // 42
```

**Special features:**
- Pointers: explicit with `*` and `&`, similar to C
- `ref` parameters: only for function parameters, no standalone ref variables
- Classes are implicitly reference types
- Structs are value types (are copied)

**Further reading:**
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

# ref: automatically managed
var r = RefNode(value: 42)

# ptr: manually managed
var p = cast[PtrNode](alloc0(sizeof(PtrNode)))
p.value = 42
dealloc(p)
```

**Special features:**
- `ref`: Garbage-collected/ARC-managed references (safe)
- `ptr`: Unmanaged pointer (unsafe, for C interop)
- `addr`: Get address of a variable
- `[]`: Dereference pointer/reference

**Further reading:**
- [Nim Documentation - Reference and Pointer Types](https://nim-lang.org/docs/manual.html#types-reference-and-pointer-types)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
type
  PInteger = ^Integer;  // Typed pointer

var
  x: Integer = 42;
  ptr: PInteger;         // Explicit pointer
  obj: TObject;          // Implicit reference
begin
  // Pointer: Explicit addressing
  ptr := @x;
  ptr^ := 100;

  // Reference: Class variables are implicit references
  obj := TObject.Create;
  // obj is a reference, not a pointer
  obj.Free;
end;
```

**Special features:**
- Pointer: `^Type`, dereferencing with `^`, address with `@`
- Class variables are implicit references (no explicit `^` syntax needed)
- `var` parameters are implicit references (Call-by-Reference)
- `Pointer` as untyped pointer (like `void*` in C)

**Further reading:**
- [Free Pascal Documentation - Pointers](https://www.freepascal.org/docs-html/ref/refse16.html)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Pointer to objects
NSString *str = @"Hallo"; // Pointer to NSString object

// Pointer to primitive types
int value = 42;
int *ptr = &value;
*ptr = 100; // value is now 100

// Double pointer (e.g. for NSError)
NSError *error = nil;
[self doSomethingWithError:&error];
```

**Special features:**
- Objective-C uses exclusively pointers (no references like C++)
- All object variables are pointers (`NSString *`)
- C-style pointer arithmetic available
- Double pointers (`NSError **`) for out parameters

**Further reading:**
- [Apple Documentation - Programming with Objective-C](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html)

</TabItem>
</Tabs>


## 13.2.4. Smart Pointers

Smart pointers that automatically manage memory. They combine the flexibility of pointers with automatic memory management through RAII.

### Languages {#sprachen}

<Tabs availableTabs={['cpp', 'rust']}>
<TabItem value="cpp" label="C++">

```cpp
#include <memory>

// unique_ptr: Exclusive ownership
std::unique_ptr<int> ptr1 = std::make_unique<int>(42);
// Automatic deallocation when ptr1 leaves scope

// unique_ptr cannot be copied, only moved
std::unique_ptr<int> ptr2 = std::move(ptr1);  // ptr1 is now nullptr

// shared_ptr: Shared ownership
std::shared_ptr<int> shared1 = std::make_shared<int>(42);
std::shared_ptr<int> shared2 = shared1;  // Reference count: 2
// Automatic deallocation when last shared_ptr leaves scope

// weak_ptr: Non-owning reference
std::weak_ptr<int> weak = shared1;
if (auto locked = weak.lock()) {  // Checks if object still exists
    *locked = 100;
}
```

**Special features:**
- `std::unique_ptr`: Exclusive ownership, automatic deallocation
- `std::shared_ptr`: Shared ownership with reference counting
- `std::weak_ptr`: Non-owning reference, prevents circular references
- Automatic deallocation through RAII
- `std::make_unique` and `std::make_shared` for safe allocation

**Further reading:**
- [cppreference.com - Smart Pointers](https://en.cppreference.com/w/cpp/memory)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
use std::rc::Rc;
use std::sync::Arc;
use std::cell::RefCell;

// Box: Single ownership on the heap
let boxed = Box::new(42);
// Automatic deallocation when boxed leaves scope

// Rc: Reference Counted (not thread-safe)
let rc1 = Rc::new(42);
let rc2 = Rc::clone(&rc1);  // Reference count: 2
// Automatic deallocation when last Rc leaves scope

// Arc: Atomic Reference Counted (thread-safe)
let arc1 = Arc::new(42);
let arc2 = Arc::clone(&arc1);  // Reference count: 2
// Automatic deallocation when last Arc leaves scope

// RefCell: Interior mutability
let cell = RefCell::new(42);
let mut borrow = cell.borrow_mut();
*borrow = 100;
```

**Special features:**
- `Box<T>`: Single ownership, automatic deallocation
- `Rc<T>`: Reference Counted, not thread-safe
- `Arc<T>`: Atomic Reference Counted, thread-safe
- `RefCell<T>`: Interior mutability at runtime
- Automatic deallocation through ownership system

**Further reading:**
- [The Rust Book - Smart Pointers](https://doc.rust-lang.org/book/ch15-00-smart-pointers.html)

</TabItem>
</Tabs>


## 13.2.5. Weak References

Weak references that do not increase the reference count. Prevent circular references and allow referencing objects without affecting their lifetime.

### Languages {#sprachen}

<Tabs availableTabs={['cpp', 'dart', 'java', 'kotlin', 'objective-c', 'python', 'rust', 'scala', 'swift']}>
<TabItem value="cpp" label="C++">

```cpp
#include <memory>

// weak_ptr: Non-owning reference
std::shared_ptr<int> shared = std::make_shared<int>(42);
std::weak_ptr<int> weak = shared;  // Does not increase reference count

// Check if object still exists
if (auto locked = weak.lock()) {  // Creates shared_ptr if object exists
    *locked = 100;
} else {
    // Object was already deallocated
}

shared = nullptr;  // Object is deallocated
// weak.lock() now returns nullptr
```

**Special features:**
- `std::weak_ptr` does not increase reference count
- Prevents circular references with `std::shared_ptr`
- `lock()` creates `std::shared_ptr` if object still exists
- Automatic deallocation when all `shared_ptr` are deallocated

**Further reading:**
- [cppreference.com - weak_ptr](https://en.cppreference.com/w/cpp/memory/weak_ptr)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
use std::rc::{Rc, Weak};
use std::cell::RefCell;

// Weak: Non-owning reference
let rc = Rc::new(RefCell::new(42));
let weak = Rc::downgrade(&rc);  // Creates weak reference

// Check if object still exists
if let Some(rc_upgrade) = weak.upgrade() {  // Creates Rc if object exists
    *rc_upgrade.borrow_mut() = 100;
} else {
    // Object was already deallocated
}

drop(rc);  // Object is deallocated
// weak.upgrade() now returns None
```

**Special features:**
- `Weak<T>` does not increase reference count
- Prevents circular references with `Rc<T>`
- `upgrade()` creates `Rc<T>` if object still exists
- Automatic deallocation when all `Rc<T>` are deallocated

**Further reading:**
- [The Rust Book - Reference Cycles Can Leak Memory](https://doc.rust-lang.org/book/ch15-06-reference-cycles.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// weak: Non-owning reference
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
child?.parent = parent  // Weak Reference, does not increase reference count

parent = nil  // Parent is deallocated
// child?.parent is now nil
```

**Special features:**
- `weak` does not increase reference count
- Prevents circular references with ARC
- `weak` variables are automatically set to `nil` when object is deallocated
- Optional types required (`weak var parent: Parent?`)

**Further reading:**
- [Swift Documentation - Weak References](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/automaticreferencecounting/#Weak-References)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// __weak: Non-owning reference
@interface Parent : NSObject
@property (nonatomic, strong) Child *child;
@end

@interface Child : NSObject
@property (nonatomic, weak) Parent *parent;  // Weak Reference
@end

Parent *parent = [[Parent alloc] init];
Child *child = [[Child alloc] init];
parent.child = child;
child.parent = parent;  // Weak Reference, does not increase reference count

parent = nil;  // Parent is deallocated
// child.parent is now nil
```

**Special features:**
- `__weak` or `weak` property attribute does not increase reference count
- Prevents circular references with ARC
- `weak` variables are automatically set to `nil` when object is deallocated
- Optional types required

**Further reading:**
- [Apple Documentation - Weak References](https://developer.apple.com/library/archive/releasenotes/ObjectiveC/RN-TransitioningToARC/)

</TabItem>
<TabItem value="java" label="Java">

```java
import java.lang.ref.WeakReference;

// WeakReference: Non-owning reference
Object obj = new Object();
WeakReference<Object> weakRef = new WeakReference<>(obj);

// Check if object still exists
Object retrieved = weakRef.get();
if (retrieved != null) {
    // Object still exists
} else {
    // Object was already deallocated
}

obj = null;  // Object can now be deallocated
// weakRef.get() can now return null
```

**Special features:**
- `WeakReference` does not increase reference count
- Prevents circular references with Garbage Collection
- `get()` returns object if it still exists, otherwise `null`
- Automatic deallocation by Garbage Collector

**Further reading:**
- [Java Documentation - WeakReference](https://docs.oracle.com/javase/8/docs/api/java/lang/ref/WeakReference.html)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
import java.lang.ref.WeakReference

// WeakReference: Non-owning reference
val obj = Any()
val weakRef = WeakReference(obj)

// Check if object still exists
val retrieved = weakRef.get()
if (retrieved != null) {
    // Object still exists
} else {
    // Object was already deallocated
}

// obj = null (not needed, since val)
// weakRef.get() can now return null
```

**Special features:**
- `WeakReference` does not increase reference count
- Prevents circular references with Garbage Collection
- `get()` returns object if it still exists, otherwise `null`
- Automatic deallocation by Garbage Collector (JVM)

**Further reading:**
- [Kotlin Documentation](https://kotlinlang.org/docs/home.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
import java.lang.ref.WeakReference

// WeakReference: Non-owning reference
val obj = new AnyRef()
val weakRef = new WeakReference(obj)

// Check if object still exists
val retrieved = weakRef.get()
if (retrieved != null) {
    // Object still exists
} else {
    // Object was already deallocated
}

// obj is automatically deallocated when no longer referenced
// weakRef.get() can now return null
```

**Special features:**
- `WeakReference` does not increase reference count
- Prevents circular references with Garbage Collection
- `get()` returns object if it still exists, otherwise `null`
- Automatic deallocation by Garbage Collector (JVM)

**Further reading:**
- [Scala Documentation](https://docs.scala-lang.org/)

</TabItem>
<TabItem value="python" label="Python">

```python
import weakref

# weakref: Non-owning reference
obj = [10, 20, 30]
weak_ref = weakref.ref(obj)

# Check if object still exists
retrieved = weak_ref()
if retrieved is not None:
    # Object still exists
    print(retrieved)
else:
    # Object was already deallocated
    print("Object was deallocated")

obj = None  # Object can now be deallocated
# weak_ref() now returns None
```

**Special features:**
- `weakref.ref` does not increase reference count
- Prevents circular references with Reference Counting
- `weak_ref()` returns object if it still exists, otherwise `None`
- Automatic deallocation by Garbage Collector

**Further reading:**
- [Python Documentation - weakref](https://docs.python.org/3/library/weakref.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
import 'dart:collection';

// WeakReference: Non-owning reference (since Dart 2.17)
final obj = Object();
final weakRef = WeakReference(obj);

// Check if object still exists
final retrieved = weakRef.target;
if (retrieved != null) {
    // Object still exists
} else {
    // Object was already deallocated
}

// obj is automatically deallocated when no longer referenced
// weakRef.target now returns null
```

**Special features:**
- `WeakReference` does not increase reference count (since Dart 2.17)
- Prevents circular references with Garbage Collection
- `target` returns object if it still exists, otherwise `null`
- Automatic deallocation by Garbage Collector

**Further reading:**
- [Dart Documentation - WeakReference](https://api.dart.dev/stable/dart-core/WeakReference-class.html)

</TabItem>
</Tabs>


## 13.2.6. Memory Pools

Pre-allocated memory pools for efficient memory management. Reduce allocation overhead by reusing memory blocks.

### Languages {#sprachen}

<Tabs availableTabs={['c', 'cpp', 'objective-c', 'rust', 'zig']}>
<TabItem value="c" label="C">

```c
// Memory Pool: Manual implementation
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
        return NULL;  // Pool full
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

**Special features:**
- Manual implementation required
- Pre-allocation reduces allocation overhead
- Reuse of memory blocks
- Can be optimized for specific use cases

**Further reading:**
- [C Standard Library - Memory Management](https://en.cppreference.com/w/c/memory)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
#include <memory>
#include <vector>

// Memory Pool: Manual implementation or library
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
        return nullptr;  // Pool full
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

// Or: boost::pool or similar libraries
```

**Special features:**
- Manual implementation or libraries (e.g. boost::pool)
- Pre-allocation reduces allocation overhead
- Reuse of memory blocks
- Template-based implementation possible

**Further reading:**
- [cppreference.com - Memory Management](https://en.cppreference.com/w/cpp/memory)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
use std::alloc::{Layout, alloc, dealloc};

// Memory Pool: Manual implementation
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

**Special features:**
- Manual implementation in `unsafe` blocks
- Pre-allocation reduces allocation overhead
- Reuse of memory blocks
- RAII through `Drop` trait

**Further reading:**
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

**Special features:**
- `ArenaAllocator` for memory pools
- Pre-allocation reduces allocation overhead
- Reuse of memory blocks
- Explicit allocators for different strategies

**Further reading:**
- [Zig Documentation - Memory Management](https://ziglang.org/documentation/0.11.0/#Memory)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// @autoreleasepool (modern syntax)
@autoreleasepool {
    for (int i = 0; i < 100000; i++) {
        @autoreleasepool {
            NSString *str = [NSString stringWithFormat:@"Item %d", i];
            // str is freed at the end of the inner pool
        }
    }
}
```

**Special features:**
- `@autoreleasepool` blocks for automatic memory deallocation
- Important for loops with many temporary objects
- Each thread requires at least one autorelease pool
- Replaces the older `NSAutoreleasePool` object

**Further reading:**
- [Apple Documentation - Autorelease Pools](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/MemoryMgmt/Articles/mmAutoreleasePools.html)

</TabItem>
</Tabs>


## 13.2.7. Move Semantics

Transfer of ownership without copying. Enables efficient transfer of resources by transferring ownership of an object without creating a copy.

### Languages {#sprachen}

<Tabs availableTabs={['cpp', 'rust']}>
<TabItem value="cpp" label="C++">

```cpp
#include <vector>
#include <utility>

// Move Semantics: Transfer of ownership without copying
std::vector<int> create_vector() {
    std::vector<int> vec = {10, 20, 30, 40, 50};
    return vec;  // Move (since C++11)
}

std::vector<int> vec1 = create_vector();  // Move constructor
std::vector<int> vec2 = std::move(vec1);  // Explicit move
// vec1 is now empty (moved-from state)

// Move Assignment
vec1 = std::move(vec2);  // vec2 is now empty

// Move constructor and Move-assignment operator
class MyClass {
    std::vector<int> data;
public:
    // Move constructor
    MyClass(MyClass&& other) noexcept : data(std::move(other.data)) {}
    
    // Move-assignment operator
    MyClass& operator=(MyClass&& other) noexcept {
        if (this != &other) {
            data = std::move(other.data);
        }
        return *this;
    }
};
```

**Special features:**
- Move Semantics since C++11
- `std::move` marks object as "ready to move"
- Move constructor and move-assignment operator required
- Reduces unnecessary copies
- Moved-from objects are in valid but unspecified state

**Further reading:**
- [cppreference.com - Move Semantics](https://en.cppreference.com/w/cpp/language/move_constructor)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Move Semantics: Transfer of ownership without copying
fn create_vector() -> Vec<i32> {
    vec![10, 20, 30, 40, 50]  // Move
}

let vec1 = create_vector();  // Ownership is transferred
let vec2 = vec1;  // Move (vec1 is no longer usable)
// vec1 can no longer be used

// Move in functions
fn take_ownership(vec: Vec<i32>) {
    // vec is used here
}

let vec3 = vec![10, 20, 30];
take_ownership(vec3);  // Move
// vec3 can no longer be used

// Copy types are copied, not moved
let x = 42;
let y = x;  // Copy (i32 implements Copy)
// x can still be used
```

**Special features:**
- Move is default for all types that do not implement `Copy`
- Ownership is automatically transferred
- Moved-from variables can no longer be used
- `Copy` trait for types that should be copied instead of moved
- Compiler prevents use of moved-from variables

**Further reading:**
- [The Rust Book - Ownership and Moves](https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html#ownership-and-functions)

</TabItem>
</Tabs>


## 13.2.8. Borrowing / References (Rust-style)

Temporary references to objects without ownership transfer. Allows accessing objects without taking ownership of them.

### Languages {#sprachen}

<Tabs availableTabs={['rust']}>
<TabItem value="rust" label="Rust">

```rust
// Borrowing: Immutable and Mutable References
let mut value = 42;

// Immutable Borrowing: Multiple references allowed
let ref1 = &value;  // Immutable Reference
let ref2 = &value;  // Multiple immutable references allowed
println!("{} {}", ref1, ref2);

// Mutable Borrowing: Only one reference at a time
let ref3 = &mut value;  // Mutable Reference
*ref3 = 100;  // Mutation
// let ref4 = &value;  // Error: No further references when mutable reference exists

// Borrowing in functions
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
// 1. Either multiple immutable references OR one mutable reference
// 2. References must remain valid (Lifetime)
// 3. Compiler guarantees memory safety at compile time
```

**Special features:**
- Immutable References (`&T`): Multiple simultaneously allowed
- Mutable References (`&mut T`): Only one at a time, exclusive
- Borrowing Rules are checked at compile time
- Prevents data races and memory errors
- Lifetime annotations for more complex cases

**Further reading:**
- [The Rust Book - References and Borrowing](https://doc.rust-lang.org/book/ch04-02-references-and-borrowing.html)

</TabItem>
</Tabs>


## 13.2.9. Lifetimes

Lifetime of references. Guarantees that references do not exist longer than the objects they refer to.

### Languages {#sprachen}

<Tabs availableTabs={['rust']}>
<TabItem value="rust" label="Rust">

```rust
// Lifetimes: Guarantee validity of references
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
    // result is valid here
}
// result would be invalid here if string2 had left scope

// Lifetime Elision: Compiler can often infer lifetimes
fn first_word(s: &str) -> &str {  // Elided: fn first_word<'a>(s: &'a str) -> &'a str
    let bytes = s.as_bytes();
    for (i, &item) in bytes.iter().enumerate() {
        if item == b' ' {
            return &s[0..i];
        }
    }
    &s[..]
}

// Structs with lifetime parameters
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

**Special features:**
- Lifetime parameters (`'a`, `'b`, etc.) annotate lifetime of references
- Lifetime Elision: Compiler can often automatically infer lifetimes
- Structs can have lifetime parameters
- Prevents dangling references at compile time
- `'static` lifetime for references that are valid for the entire program runtime

**Further reading:**
- [The Rust Book - Validating References with Lifetimes](https://doc.rust-lang.org/book/ch10-03-lifetime-syntax.html)

</TabItem>
</Tabs>


## 13.2.10. Explicit Allocators

Explicit allocators for controlled memory management. Allow choosing different allocation strategies and optimizing memory management.

### Languages {#sprachen}

<Tabs availableTabs={['cpp', 'd', 'rust', 'zig']}>
<TabItem value="zig" label="Zig">

```zig
const std = @import("std");

// Explicit Allocators: Various allocators available
var gpa = std.heap.GeneralPurposeAllocator(.{}){};
const allocator = gpa.allocator();
defer _ = gpa.deinit();

// GeneralPurposeAllocator
const memory1 = try allocator.alloc(u8, 100);
defer allocator.free(memory1);

// ArenaAllocator: All allocations are freed together
var arena = std.heap.ArenaAllocator.init(allocator);
defer arena.deinit();
const arena_allocator = arena.allocator();

const memory2 = try arena_allocator.alloc(u8, 100);
// Is automatically freed when arena.deinit() is called

// FixedBufferAllocator: Allocation from fixed buffer
var buffer: [1000]u8 = undefined;
var fba = std.heap.FixedBufferAllocator.init(&buffer);
const fba_allocator = fba.allocator();

const memory3 = try fba_allocator.alloc(u8, 100);
// Automatically freed when buffer is full or allocator is destroyed
```

**Special features:**
- Various allocators available (GeneralPurposeAllocator, ArenaAllocator, FixedBufferAllocator, etc.)
- Explicit selection of allocation strategy
- `defer` for automatic deallocation
- Allocators are passed as parameters

**Further reading:**
- [Zig Documentation - Memory Management](https://ziglang.org/documentation/0.11.0/#Memory)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
use std::alloc::{Layout, GlobalAlloc, System};

// Explicit Allocators: Custom Allocator (since Rust 1.28)
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

// Or: Allocator API (experimental)
use std::alloc::Allocator;

fn custom_alloc<T, A: Allocator>(allocator: &A, value: T) -> Box<T, A> {
    Box::new_in(value, allocator)
}
```

**Special features:**
- Custom Allocators since Rust 1.28
- `GlobalAlloc` Trait for global allocators
- Allocator API (experimental) for local allocators
- Rust uses System-Allocator by default

**Further reading:**
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

// Usage with STL containers
std::vector<int, MyAllocator<int>> vec;

// Or: std::allocator (standard)
std::vector<int, std::allocator<int>> vec2;

// Polymorphic Allocators (since C++17)
#include <memory_resource>
std::pmr::vector<int> vec3;  // Uses default memory resource
```

**Special features:**
- Custom Allocators through template specialization
- STL containers accept allocators as template parameters
- Polymorphic Allocators (since C++17) with `std::pmr`
- `std::allocator` is the standard allocator

**Further reading:**
- [cppreference.com - Allocators](https://en.cppreference.com/w/cpp/named_req/Allocator)

</TabItem>
<TabItem value="d" label="D">

```d
// Explicit Allocators
// Required: import std.experimental.allocator;
// Required: import std.experimental.allocator.mallocator;

// Mallocator (malloc-based)
auto allocator = Mallocator.instance;
int[] arr = allocator.makeArray!int(100);
// ... use ...
allocator.dispose(arr);

// GC Allocator (standard)
// Required: import std.experimental.allocator.gc_allocator;
auto gcArr = GCAllocator.instance.makeArray!int(100);
// Managed by GC
```

**Special features:**
- `std.experimental.allocator` provides interchangeable allocator strategies
- `Mallocator`: malloc/free-based
- `GCAllocator`: GC-managed allocation
- Composable Allocators: different strategies can be combined
- `@nogc` compatible allocators available

**Further reading:**
- [D Phobos - std.experimental.allocator](https://dlang.org/phobos/std_experimental_allocator.html)

</TabItem>
</Tabs>


## 13.2.11. No Hidden Allocations

Guarantee that no hidden heap allocations occur. All allocations are explicit and known at compile time.

### Languages {#languages}

<Tabs availableTabs={['c', 'cpp', 'rust', 'zig']}>
<TabItem value="c" label="C">

```c
// No Hidden Allocations: All allocations are explicit
void function() {
    int stack_array[5] = {10, 20, 30, 40, 50};  // Stack allocation, explicit
    
    // Heap allocation is explicit
    int* heap_array = malloc(5 * sizeof(int));  // Explicit allocation
    if (heap_array == NULL) {
        // Error handling
        return;
    }
    free(heap_array);  // Explicit deallocation
    
    // No hidden allocations
}
```

**Special features:**
- All allocations are explicit (`malloc`, `calloc`, etc.)
- No hidden heap allocations
- Stack allocation is explicit through array declaration
- Programmer has full control over memory management

**Further reading:**
- [C Standard Library - Memory Management](https://en.cppreference.com/w/c/memory)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// No Hidden Allocations: All allocations are explicit
void function() {
    int stack_array[5] = {10, 20, 30, 40, 50};  // Stack allocation, explicit
    
    // Heap allocation is explicit
    int* heap_array = new int[5];  // Explicit allocation
    delete[] heap_array;  // Explicit deallocation
    
    // Smart Pointers: allocation is explicit
    auto smart_ptr = std::make_unique<int[]>(5);  // Explicit allocation
    // Automatic deallocation, but allocation was explicit
    
    // No hidden allocations in standard containers
    std::vector<int> vec(5);  // Allocation is explicit through constructor
}
```

**Special features:**
- All allocations are explicit (`new`, `std::make_unique`, etc.)
- No hidden heap allocations
- Stack allocation is explicit through array declaration
- STL containers allocate explicitly, but at runtime

**Further reading:**
- [cppreference.com - Dynamic memory management](https://en.cppreference.com/w/cpp/memory)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// No Hidden Allocations: All allocations are explicit
fn function() {
    let stack_array = [10, 20, 30, 40, 50];  // Stack allocation, explicit
    
    // Heap allocation is explicit
    let heap_vec = vec![10, 20, 30, 40, 50];  // Explicit allocation via vec!
    let boxed = Box::new(42);  // Explicit allocation via Box::new
    
    // No hidden allocations
    // String literals are statically allocated
    let s = "Hello";  // Static allocation, no heap
}
```

**Special features:**
- All heap allocations are explicit (`Vec`, `Box`, `String`, etc.)
- No hidden heap allocations
- Stack allocation is explicit through array declaration
- Compiler can optimize allocations at compile time

**Further reading:**
- [The Rust Book - The Stack and the Heap](https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html#the-stack-and-the-heap)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// No Hidden Allocations: All allocations are explicit
fn function() void {
    var stack_array = [5]i32{ 10, 20, 30, 40, 50 };  // Stack allocation, explicit
    
    // Heap allocation is explicit through allocator
    const std = @import("std");
    var gpa = std.heap.GeneralPurposeAllocator(.{}){};
    const allocator = gpa.allocator();
    defer _ = gpa.deinit();
    
    const heap_array = allocator.alloc(i32, 5) catch return;  // Explicit allocation
    defer allocator.free(heap_array);
    
    // No hidden allocations
}
```

**Special features:**
- All allocations are explicit through allocators
- No hidden heap allocations
- Stack allocation is explicit through array declaration
- Allocators must be explicitly passed

**Further reading:**
- [Zig Documentation - Memory Management](https://ziglang.org/documentation/0.11.0/#Memory)

</TabItem>
</Tabs>


## 13.2.12. Unsafe Blocks

Allows writing code that bypasses the language's normal type safety and memory safety guarantees to enable direct memory access or low-level operations.

### Languages {#languages}

<Tabs availableTabs={['csharp', 'd', 'go', 'lean4', 'rust', 'swift', 'v']} orangeTabs={['nim']}>
<TabItem value="rust" label="Rust">

```rust
let mut x = 5;

// Unsafe block for unsafe operations
unsafe {
    // Raw pointers
    let raw_ptr = &mut x as *mut i32;
    *raw_ptr = 10;
    
    // Call unsafe functions
    unsafe_function();
    
    // Modify static variables
    static mut COUNTER: i32 = 0;
    COUNTER += 1;
}
// x is now 10
```

**Special features:**
- `unsafe` block for unsafe operations
- Raw pointers (`*const T`, `*mut T`)
- Unsafe functions must be explicitly marked
- Static mutable variables only in `unsafe` blocks

**Further reading:**
- [Rust Documentation - Unsafe](https://doc.rust-lang.org/book/ch19-01-unsafe-rust.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Required: using System;

int x = 5;

// Unsafe block for unsafe operations
unsafe {
    // Pointer arithmetic
    int* ptr = &x;
    *ptr = 10;
    
    // stackalloc for stack allocation
    int* arr = stackalloc int[10];
    arr[0] = 42;
}
// x is now 10
```

**Special features:**
- `unsafe` block for unsafe operations
- Pointer arithmetic via `*` and `&`
- `stackalloc` for stack allocation
- Requires `/unsafe` compiler flag

**Further reading:**
- [Microsoft C# Documentation - Unsafe Code](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/unsafe-code)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Required: import Foundation

var x = 5

// UnsafeMutablePointer for unsafe operations
withUnsafeMutablePointer(to: &x) { ptr in
    ptr.pointee = 10
}

// UnsafeRawPointer for raw pointers
let rawPtr = withUnsafePointer(to: &x) { $0 }
let value = rawPtr.load(as: Int.self)
// x is now 10
```

**Special features:**
- `UnsafePointer`, `UnsafeMutablePointer` for unsafe pointers
- `withUnsafePointer` for safe wrappers
- `UnsafeRawPointer` for raw pointers
- Explicit type conversion required

**Further reading:**
- [Swift Documentation - Unsafe Pointers](https://developer.apple.com/documentation/swift/unsafepointer)

</TabItem>
<TabItem value="go" label="Go">

```go
// Required: import "unsafe"

x := 5

// unsafe.Pointer for unsafe operations
ptr := unsafe.Pointer(&x)
intPtr := (*int)(ptr)
*intPtr = 10

// unsafe.Sizeof for size calculation
size := unsafe.Sizeof(x)

// unsafe.Offsetof for offset calculation
type Struct struct {
    A int
    B int
}
offset := unsafe.Offsetof(Struct{}.B)
// x is now 10, size and offset contain the values
```

**Special features:**
- `unsafe.Pointer` for unsafe pointers
- `unsafe.Sizeof` for size calculation
- `unsafe.Offsetof` for offset calculation
- Very limited unsafe operations

**Further reading:**
- [Go Documentation - unsafe](https://pkg.go.dev/unsafe)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- unsafe keyword for unsafe operations
unsafe def unsafeCast {α β : Type} (a : α) : β :=
  unsafeCast a

-- @[implementedBy] for unsafe FFI implementations
@[extern "lean_io_prim_println"]
opaque printlnRaw : String → IO Unit

-- unsafe for low-level operations
unsafe def readRawBytes (ptr : USize) (n : USize) : IO ByteArray :=
  -- Direct memory access possible
  pure (ByteArray.mkEmpty n.toNat)
```

**Special features:**
- `unsafe` keyword marks functions that bypass the type system.
- Within `unsafe`, unsafe casts and FFI calls can be performed.
- The Lean kernel does not verify `unsafe` definitions.
- `@[extern]` and `@[implementedBy]` enable FFI to C code.

**Further reading:**
- [Lean 4 Documentation - FFI](https://lean-lang.org/lean4/doc/dev/ffi.html)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Unsafe operations (no explicit unsafe block)
proc unsafeExample() =
  var x = 5

  # Unsafe cast
  let p = cast[ptr int](addr(x))
  p[] = 10

  # Unsafe pointer arithmetic
  let arr = cast[ptr UncheckedArray[int]](alloc(10 * sizeof(int)))
  arr[0] = 42
  dealloc(arr)

  echo "x: ", x  # 10

unsafeExample()
```

**Special features:**
- `cast` for unsafe type conversion
- `addr` for address operator
- `alloc`/`dealloc` for manual memory allocation
- No explicit `unsafe` block keyword like in Rust

**Further reading:**
- [Nim Documentation - Unsafe Operations](https://nim-lang.org/docs/manual.html#types-reference-and-pointer-types)

</TabItem>
<TabItem value="d" label="D">

```d
// Required: import std.stdio;

int x = 5;

// Unsafe cast
int* ptr = cast(int*) &x;
*ptr = 10;

// Unsafe pointer arithmetic
int[10] arr;
int* arrPtr = arr.ptr;
arrPtr[0] = 42;
// x is now 10
```

**Special features:**
- `cast` for unsafe type conversion
- `&` for address operator
- Pointer arithmetic possible
- Less structured than Rust

**Further reading:**
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

**Special features:**
- `unsafe { }` for pointer arithmetic and other unsafe operations
- Disables bounds checking and other safety checks
- Necessary for C interop and low-level programming
- Compiler warns about unnecessary `unsafe` blocks

**Further reading:**
- [V Documentation - Unsafe](https://github.com/vlang/v/blob/master/doc/docs.md#unsafe)

</TabItem>
</Tabs>

## 13.2.13. Array Decay

Automatic conversion of arrays to pointers when passing to functions or during certain operations. The array loses its size information and becomes a pointer to the first element.

### Languages {#languages}

<Tabs availableTabs={['c', 'cpp', 'objective-c', 'rust']}>
<TabItem value="c" label="C">

```c
void func(int arr[]) {
    // arr is a pointer here, not an array
    // sizeof(arr) gives pointer size, not array size
}

int main() {
    int array[10];
    func(array);  // Array "decays" to pointer
}
```

**Special features:**
- Arrays automatically decay to pointers in function calls
- `sizeof()` on function parameters gives pointer size, not array size
- No size information available in function parameter

**Further reading:**
- [C Standard - Array to Pointer Conversion](https://en.cppreference.com/w/c/language/array)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
void func(int arr[]) {
    // arr is a pointer here, not an array
    // sizeof(arr) gives pointer size, not array size
}

int main() {
    int array[10];
    func(array);  // Array "decays" to pointer
}
```

**Special features:**
- Arrays automatically decay to pointers in function calls
- `std::array` or references can avoid array decay
- `sizeof()` on function parameters gives pointer size, not array size

**Further reading:**
- [cppreference.com - Array to Pointer Conversion](https://en.cppreference.com/w/cpp/language/array#Array-to-pointer_decay)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Rust has no array decay
fn func(arr: &[i32]) {
    // arr is a slice, retains size information
}

fn main() {
    let array = [1, 2, 3, 4, 5];
    func(&array);  // No decay, slice is passed
}
```

**Special features:**
- No array decay in Rust
- Arrays can be passed as slices (`&[T]`) which retain size information
- Type-safe, no implicit conversions

**Further reading:**
- [Rust Documentation - Arrays and Slices](https://doc.rust-lang.org/book/ch04-03-slices.html)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Array Decay: C-Array decays to pointer
int numbers[] = {1, 2, 3, 4, 5};
int *ptr = numbers; // Array decays to pointer to first element

void processArray(int *arr, int size) {
    for (int i = 0; i < size; i++) {
        NSLog(@"%d", arr[i]);
    }
}

processArray(numbers, 5); // Array is passed as pointer
```

**Special features:**
- C-style Array Decay: Arrays decay to pointers when passed to functions
- Size information is lost during decay
- Only affects C-arrays, not NSArray objects

**Further reading:**
- [Apple Documentation - Programming with Objective-C](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html)

</TabItem>

</Tabs>


