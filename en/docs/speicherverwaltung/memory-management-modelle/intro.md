---
slug: /speicherverwaltung/memory-management-modelle
title: 13.1. Memory Management Models
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 13.1. Memory Management Models

Models for memory management.

## 13.1.1. Manual Memory Management

The programmer manages memory explicitly through manual allocation and deallocation.

### Languages {#sprachen}

<Tabs availableTabs={['c', 'cpp', 'd', 'fortran', 'nim', 'objective-c', 'object-pascal', 'odin', 'rust', 'v', 'zig']}>
<TabItem value="c" label="C">

```c
// Required: #include <stdlib.h>
int* numbers = malloc(5 * sizeof(int));
if (numbers == NULL) {
    // Error handling
    return;
}

numbers[0] = 10;
numbers[1] = 20;
numbers[2] = 30;
numbers[3] = 40;
numbers[4] = 50;

// Explicitly free memory
free(numbers);
numbers = NULL;
```

**Special features:**
- Uses `malloc`/`calloc` for allocation and `free` for deallocation
- `malloc` returns `NULL` on errors, so always check
- After `free`, pointer should be set to `NULL` to avoid dangling pointers

**Further reading:**
- [C Standard Library - Memory Management](https://en.cppreference.com/w/c/memory)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// C-style: malloc/free
// Required: #include <cstdlib>
int* numbers = static_cast<int*>(malloc(5 * sizeof(int)));
if (numbers == nullptr) {
    // Error handling
    return;
}

numbers[0] = 10;
numbers[1] = 20;
numbers[2] = 30;
numbers[3] = 40;
numbers[4] = 50;

free(numbers);
numbers = nullptr;

// C++-style: new/delete
int* numbers2 = new int[5];
numbers2[0] = 10;
numbers2[1] = 20;
numbers2[2] = 30;
numbers2[3] = 40;
numbers2[4] = 50;

delete[] numbers2;
numbers2 = nullptr;
```

**Special features:**
- Supports both C-style (`malloc`/`free`) and C++-style (`new`/`delete`)
- `new[]` requires `delete[]`, `new` requires `delete` (mismatch leads to undefined behavior)
- Modern C++ practice prefers smart pointers over manual memory management

**Further reading:**
- [cppreference.com - Dynamic memory management](https://en.cppreference.com/w/cpp/memory)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Manual memory management with alloc/free
# Required: import system/alloc
var numbers = cast[ptr UncheckedArray[int]](alloc(5 * sizeof(int)))
if numbers == nil:
    # Error handling
    return

numbers[0] = 10
numbers[1] = 20
numbers[2] = 30
numbers[3] = 40
numbers[4] = 50

dealloc(numbers)
numbers = nil
```

**Special features:**
- Supports manual memory management via `alloc`/`dealloc`
- By default, Nim uses Garbage Collection, manual management is optional
- `UncheckedArray` is used for manually allocated arrays

**Further reading:**
- [Nim Manual - Memory Management](https://nim-lang.org/docs/manual.html#memory-management)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
package main

import "core:mem"

main :: proc() {
    numbers := cast([^]i32)mem.alloc(5 * size_of(i32))
    defer mem.free(numbers)
    
    numbers[0] = 10
    numbers[1] = 20
    numbers[2] = 30
    numbers[3] = 40
    numbers[4] = 50
}
```

**Special features:**
- Uses `mem.alloc` for allocation and `mem.free` for deallocation
- `defer` can be used to ensure deallocation at the end of the scope
- Supports various allocators (Default, Context, Temp)

**Further reading:**
- [Odin Documentation - Memory Management](https://odin-lang.org/docs/overview/#memory-management)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Manual memory management only in unsafe blocks
use std::alloc::{alloc, dealloc, Layout};

unsafe {
    let layout = Layout::new::<[i32; 5]>();
    let numbers = alloc(layout) as *mut i32;
    
    if numbers.is_null() {
        // Error handling
        return;
    }
    
    *numbers.add(0) = 10;
    *numbers.add(1) = 20;
    *numbers.add(2) = 30;
    *numbers.add(3) = 40;
    *numbers.add(4) = 50;
    
    dealloc(numbers as *mut u8, layout);
}
```

**Special features:**
- Manual memory management only possible in `unsafe` blocks
- By default, Rust uses Ownership system and RAII
- `Layout` must be correctly specified for `alloc`/`dealloc`

**Further reading:**
- [The Rust Book - Unsafe Rust](https://doc.rust-lang.org/book/ch19-01-unsafe-rust.html)

</TabItem>
<TabItem value="v" label="V">

```v
// Manual memory management
unsafe {
    ptr := malloc(5 * sizeof(int))
    if isnil(ptr) {
        return
    }

    mut numbers := &int(ptr)
    numbers[0] = 10
    numbers[1] = 20
    numbers[2] = 30

    free(ptr)
}
```

**Special features:**
- V uses GC by default (autofree)
- Manual management with `malloc()` and `free()` in `unsafe` blocks
- C interop: `C.malloc()` and `C.free()` also available
- `-autofree` compiler flag for automatic memory management without GC

**Further reading:**
- [V Documentation - Memory Management](https://github.com/vlang/v/blob/master/doc/docs.md#memory-management)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
const std = @import("std");

// Manual memory management with allocator
var gpa = std.heap.GeneralPurposeAllocator(.{}){};
const allocator = gpa.allocator();
defer _ = gpa.deinit();

const numbers = try allocator.alloc(i32, 5);
defer allocator.free(numbers);

numbers[0] = 10;
numbers[1] = 20;
numbers[2] = 30;
numbers[3] = 40;
numbers[4] = 50;
```

**Special features:**
- Uses explicit allocators for memory management
- `defer` is used to ensure deallocation at the end of the scope
- Various allocators available (GeneralPurposeAllocator, ArenaAllocator, etc.)

**Further reading:**
- [Zig Documentation - Memory Management](https://ziglang.org/documentation/0.11.0/#Memory)

</TabItem>
<TabItem value="d" label="D">

```d
// Manual Memory Management
// Required: import core.memory;
// Required: import core.stdc.stdlib;

// C-compatible malloc/free
int* ptr = cast(int*) malloc(int.sizeof * 10);
if (ptr !is null) {
    ptr[0] = 42;
    free(ptr);
}

// Disable GC for critical sections
GC.disable();
// ... Performance-critical code ...
GC.enable();

// @nogc functions prohibit GC allocations
@nogc int add(int a, int b) {
    return a + b;
}
```

**Special features:**
- `core.stdc.stdlib` provides `malloc`, `free`, `realloc`
- `@nogc` attribute prohibits GC allocations in a function
- `GC.disable()` / `GC.enable()` for GC control
- Hybrid approach: GC as default, manual management when needed

**Further reading:**
- [D Language Specification - Memory Management](https://dlang.org/spec/garbage.html)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Manual memory management with ALLOCATE/DEALLOCATE
integer, allocatable :: arr(:)
integer :: ierr

allocate(arr(100), stat=ierr)
if (ierr /= 0) stop "Allocation failed"

arr = 0
! ... Usage ...

deallocate(arr)
```

**Special features:**
- `ALLOCATE` for dynamic memory allocation
- `DEALLOCATE` for deallocation
- `STAT=` for error handling
- Allocatable variables are automatically deallocated when they leave scope (since Fortran 2003)

**Further reading:**
- [Fortran Wiki - ALLOCATE](https://fortranwiki.org/fortran/show/ALLOCATE)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
var
  person: TPerson;
  buffer: Pointer;
begin
  // Objects: Create / Free
  person := TPerson.Create('Alice');
  try
    person.Greet;
  finally
    person.Free;
  end;

  // Low-level: GetMem / FreeMem
  GetMem(buffer, 1024);
  try
    // use buffer
  finally
    FreeMem(buffer);
  end;
end;
```

**Special features:**
- Objects must be manually freed with `Free`
- `try`/`finally` recommended for safe deallocation
- `GetMem`/`FreeMem` for raw memory
- `New`/`Dispose` for typed pointers

**Further reading:**
- [Delphi Documentation - Memory Management](https://docwiki.embarcadero.com/RADStudio/en/Memory_Management)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Manual Reference Counting (MRC) - before ARC
NSObject *obj = [[NSObject alloc] init]; // Reference count: 1
[obj retain];                             // Reference count: 2
[obj release];                            // Reference count: 1
[obj release];                            // Reference count: 0 → deallocation

// Autorelease Pool
NSAutoreleasePool *pool = [[NSAutoreleasePool alloc] init];
NSString *str = [[[NSString alloc] initWithString:@"Hallo"] autorelease];
[pool drain]; // Frees all autoreleased objects
```

**Special features:**
- Manual Reference Counting (MRC) was the standard before ARC
- `alloc`/`retain` increases, `release` decreases the reference count
- `autorelease` delays `release` until pool drain
- MRC is optionally usable with ARC compilers (per-file flag)

**Further reading:**
- [Apple Documentation - Memory Management](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/MemoryMgmt/Articles/MemoryMgmt.html)

</TabItem>
</Tabs>


## 13.1.2. Garbage Collection

Automatic memory management through a garbage collector that automatically frees objects that are no longer referenced.

### Languages {#sprachen}

<Tabs availableTabs={['clojure', 'common-lisp', 'crystal', 'csharp', 'd', 'dart', 'elixir', 'elm', 'erlang', 'fsharp', 'gleam', 'go', 'groovy', 'haskell', 'haxe', 'idris', 'java', 'javascript', 'julia', 'kotlin', 'lua', 'matlab', 'mercury', 'nim', 'ocaml', 'octave', 'perl', 'php', 'prolog', 'purescript', 'python', 'r', 'racket', 'ruby', 'scala', 'scheme', 'typescript', 'v', 'vbnet', 'wolfram-language']} yellowTabs={['mojo']} orangeTabs={['swift']}>
<TabItem value="csharp" label="C#">

```csharp
// Objects are automatically managed by the garbage collector
List<int> numbers = new List<int> { 10, 20, 30, 40, 50 };

// When numbers is no longer referenced, it is automatically freed
numbers = null;

// Explicit garbage collection (usually not necessary)
GC.Collect();
GC.WaitForPendingFinalizers();
```

**Special features:**
- Uses a mark-and-sweep garbage collector
- Generational GC with different generations (0, 1, 2)
- `GC.Collect()` can be called manually, but is usually not necessary

**Further reading:**
- [Microsoft .NET Documentation - Garbage Collection](https://learn.microsoft.com/en-us/dotnet/standard/garbage-collection/)

</TabItem>
<TabItem value="java" label="Java">

```java
// Objects are automatically managed by the garbage collector
List<Integer> numbers = new ArrayList<>(Arrays.asList(10, 20, 30, 40, 50));

// When numbers is no longer referenced, it is automatically freed
numbers = null;

// Explicit garbage collection (usually not necessary)
System.gc();
```

**Special features:**
- Various GC algorithms available (G1, ZGC, Parallel GC, etc.)
- Generational GC with Young Generation and Old Generation
- `System.gc()` is only a hint, not a guarantee

**Further reading:**
- [Oracle Java Documentation - Garbage Collection](https://docs.oracle.com/javase/8/docs/technotes/guides/vm/gctuning/)

</TabItem>
<TabItem value="python" label="Python">

```python
# Objects are automatically managed by the garbage collector
numbers = [10, 20, 30, 40, 50]

# When numbers is no longer referenced, it is automatically freed
numbers = None

# Explicit garbage collection (usually not necessary)
import gc
gc.collect()
```

**Special features:**
- Uses reference counting as primary mechanism
- Additionally cyclic garbage collector for circular references
- `gc.collect()` can be called manually

**Further reading:**
- [Python Documentation - gc](https://docs.python.org/3/library/gc.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Objects are automatically managed by the garbage collector
let numbers = [10, 20, 30, 40, 50];

// When numbers is no longer referenced, it is automatically freed
numbers = null;

// No explicit GC API available (browser/engine-specific)
```

**Special features:**
- GC implementation is engine-specific (V8, SpiderMonkey, etc.)
- Modern engines use mark-and-sweep with various optimizations
- No standardized API for manual GC

**Further reading:**
- [MDN Web Docs - Memory Management](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Objects are automatically managed by the garbage collector
let numbers: number[] = [10, 20, 30, 40, 50];

// When numbers is no longer referenced, it is automatically freed
numbers = null;

// No explicit GC API available (browser/engine-specific)
```

**Special features:**
- Uses the GC of the underlying JavaScript engine
- Same GC characteristics as JavaScript
- No standardized API for manual GC

**Further reading:**
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

</TabItem>
<TabItem value="go" label="Go">

```go
// Objects are automatically managed by the garbage collector
numbers := []int{10, 20, 30, 40, 50}

// When numbers is no longer referenced, it is automatically freed
numbers = nil

// Explicit garbage collection (usually not necessary)
import "runtime"
runtime.GC()
```

**Special features:**
- Concurrent garbage collector with low latency
- Stop-the-world phases are minimal
- `runtime.GC()` can be called manually

**Further reading:**
- [Go Documentation - Garbage Collector](https://go.dev/doc/gc-guide)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Objects are automatically managed by the garbage collector
numbers = [10, 20, 30, 40, 50]

# When numbers is no longer referenced, it is automatically freed
numbers = nil

# Explicit garbage collection (usually not necessary)
GC.start
```

**Special features:**
- Uses a mark-and-sweep garbage collector
- Generational GC since Ruby 2.1
- `GC.start` can be called manually

**Further reading:**
- [Ruby Documentation - GC](https://ruby-doc.org/core-3.1.2/GC.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Objects are automatically managed (ARC, not classical GC)
var numbers = [10, 20, 30, 40, 50]

// When numbers is no longer referenced, it is automatically freed
numbers = []

// No explicit GC API (uses ARC)
```

**Special features:**
- Uses Automatic Reference Counting (ARC), not classical GC
- Memory is managed at compile time, not at runtime
- No stop-the-world phases

**Further reading:**
- [Swift Documentation - Automatic Reference Counting](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/automaticreferencecounting/)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Objects are automatically managed by the garbage collector (JVM)
val numbers = listOf(10, 20, 30, 40, 50)

// When numbers is no longer referenced, it is automatically freed
// (Kotlin has no explicit null assignment for val)

// Explicit garbage collection (usually not necessary)
System.gc()
```

**Special features:**
- On JVM: Uses Java GC
- On Native: Uses own GC
- `System.gc()` is only a hint, not a guarantee

**Further reading:**
- [Kotlin Documentation - Memory Management](https://kotlinlang.org/docs/native-memory-manager.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Objects are automatically managed by the garbage collector (JVM)
val numbers = List(10, 20, 30, 40, 50)

// When numbers is no longer referenced, it is automatically freed

// Explicit garbage collection (usually not necessary)
System.gc()
```

**Special features:**
- On JVM: Uses Java GC
- Same GC characteristics as Java
- `System.gc()` is only a hint, not a guarantee

**Further reading:**
- [Scala Documentation](https://docs.scala-lang.org/)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Objects are automatically managed by the garbage collector
List<int> numbers = [10, 20, 30, 40, 50];

// When numbers is no longer referenced, it is automatically freed
numbers = null;

// Explicit garbage collection (usually not necessary)
import 'dart:developer' as developer;
developer.gc();
```

**Special features:**
- Generational garbage collector
- Optimized for Flutter apps with 60fps
- `developer.gc()` can be called manually

**Further reading:**
- [Dart Documentation - Memory Management](https://dart.dev/guides/language/effective-dart/memory)

</TabItem>
<TabItem value="php" label="PHP">

```php
// Objects are automatically managed by the garbage collector
$numbers = [10, 20, 30, 40, 50];

// When $numbers is no longer referenced, it is automatically freed
$numbers = null;

// Explicit garbage collection (usually not necessary)
gc_collect_cycles();
```

**Special features:**
- Uses reference counting as primary mechanism
- Cyclic garbage collector for circular references
- `gc_collect_cycles()` can be called manually

**Further reading:**
- [PHP Documentation - Garbage Collection](https://www.php.net/manual/en/features.gc.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Terms are automatically managed by the garbage collector
numbers([10, 20, 30, 40, 50]).

% When terms are no longer referenced, they are automatically freed
% Prolog manages memory automatically via WAM (Warren Abstract Machine)

% Explicit garbage collection (SWI-Prolog)
:- garbage_collect.
```

**Special features:**
- Prolog manages memory completely automatically via WAM (Warren Abstract Machine)
- SWI-Prolog uses mark-and-sweep garbage collection on the global stack
- `garbage_collect/0` can be called manually in SWI-Prolog
- Various memory areas: Local Stack, Global Stack (Heap), Trail, Choice Points

**Further reading:**
- [SWI-Prolog Documentation - Memory Management](https://www.swi-prolog.org/pldoc/man?section=memory)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Objects are automatically managed by the garbage collector
local numbers = {10, 20, 30, 40, 50}

-- When numbers is no longer referenced, it is automatically freed
numbers = nil

-- Explicit garbage collection (usually not necessary)
collectgarbage("collect")
```

**Special features:**
- Incremental garbage collector
- `collectgarbage()` can be called manually
- Various GC modes available

**Further reading:**
- [Lua Documentation - Garbage Collection](https://www.lua.org/manual/2.4/manual.html#2.5)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Objects are automatically managed by the garbage collector
numbers = [10, 20, 30, 40, 50]

-- When numbers is no longer referenced, it is automatically freed
-- (Haskell has no explicit null assignment)

-- Explicit garbage collection (usually not necessary)
-- System.Mem.performGC (GHC-specific)
```

**Special features:**
- GHC uses a generational, parallel garbage collector
- Optimized for functional programming
- `System.Mem.performGC` can be called manually

**Further reading:**
- [GHC Documentation - Memory Management](https://ghc.gitlab.haskell.org/ghc/doc/users_guide/runtime_control.html#rts-options-gc)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Objects are automatically managed by the garbage collector *)
let numbers = [10; 20; 30; 40; 50]

(* When numbers is no longer referenced, it is automatically freed *)

(* Explicit garbage collection (usually not necessary) *)
Gc.full_major ()
```

**Special features:**
- Generational garbage collector
- Incremental GC with stop-the-world phases
- `Gc.full_major` can be called manually

**Further reading:**
- [OCaml Documentation - Garbage Collection](https://v2.ocaml.org/api/Gc.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Objects are automatically managed by the garbage collector (.NET)
let numbers = [10; 20; 30; 40; 50]

// When numbers is no longer referenced, it is automatically freed

// Explicit garbage collection (usually not necessary)
System.GC.Collect()
```

**Special features:**
- Uses .NET garbage collector
- Same GC characteristics as C#
- `System.GC.Collect()` can be called manually

**Further reading:**
- [F# Documentation](https://learn.microsoft.com/en-us/dotnet/fsharp/)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Objects are automatically managed by the garbage collector (JVM)
(def numbers [10 20 30 40 50])

;; When numbers is no longer referenced, it is automatically freed

;; Explicit garbage collection (usually not necessary)
(System/gc)
```

**Special features:**
- On JVM: Uses Java GC
- Same GC characteristics as Java
- `System/gc` is only a hint, not a guarantee

**Further reading:**
- [Clojure Documentation](https://clojure.org/reference/documentation)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Objects are automatically managed by the garbage collector (JVM)
def numbers = [10, 20, 30, 40, 50]

// When numbers is no longer referenced, it is automatically freed
numbers = null

// Explicit garbage collection (usually not necessary)
System.gc()
```

**Special features:**
- On JVM: Uses Java GC
- Same GC characteristics as Java
- `System.gc()` is only a hint, not a guarantee

**Further reading:**
- [Groovy Documentation](https://groovy-lang.org/documentation.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
% Objects are automatically managed by the garbage collector
Numbers = [10, 20, 30, 40, 50].

% When Numbers is no longer referenced, it is automatically freed
% (Erlang has no explicit null assignment)

% Explicit garbage collection (usually not necessary)
% erlang:garbage_collect() (process-specific)
```

**Special features:**
- Per-process garbage collector
- Each process has its own heap
- `erlang:garbage_collect()` can be called per process

**Further reading:**
- [Erlang Documentation - Memory Management](https://www.erlang.org/doc/efficiency_guide/processes.html#memory)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Objects are automatically managed by the garbage collector (BEAM VM)
numbers = [10, 20, 30, 40, 50]

# When numbers is no longer referenced, it is automatically freed

# Explicit garbage collection (usually not necessary)
# :erlang.garbage_collect() (process-specific)
```

**Special features:**
- Uses BEAM VM garbage collector (like Erlang)
- Per-process garbage collector
- `:erlang.garbage_collect()` can be called per process

**Further reading:**
- [Elixir Documentation - Processes](https://elixir-lang.org/getting-started/processes.html)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Objects are automatically managed by the garbage collector
numbers = [10, 20, 30, 40, 50]

-- When numbers is no longer referenced, it is automatically freed
-- (Elm has no explicit null assignment)

-- No explicit GC API available
```

**Special features:**
- Uses JavaScript GC (compiles to JavaScript)
- Same GC characteristics as JavaScript
- No standardized API for manual GC

**Further reading:**
- [Elm Documentation](https://guide.elm-lang.org/)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Objects are automatically managed by the garbage collector
let numbers = [10, 20, 30, 40, 50]

-- When numbers is no longer referenced, it is automatically freed
-- (PureScript has no explicit null assignment)

-- No explicit GC API available (target-specific)
```

**Special features:**
- GC depends on target (JavaScript, Erlang, etc.)
- Same GC characteristics as the target
- No standardized API for manual GC

**Further reading:**
- [PureScript Documentation](https://www.purescript.org/documentation/)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Objects are automatically managed by the garbage collector
var numbers = [10, 20, 30, 40, 50];

// When numbers is no longer referenced, it is automatically freed
numbers = null;

// No explicit GC API available (target-specific)
```

**Special features:**
- GC depends on target (JavaScript, C#, Java, etc.)
- Same GC characteristics as the target
- No standardized API for manual GC

**Further reading:**
- [Haxe Documentation](https://haxe.org/documentation/)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Objects are automatically managed by the garbage collector
numbers = [10, 20, 30, 40, 50]

# When numbers is no longer referenced, it is automatically freed
numbers = nothing

# Explicit garbage collection (usually not necessary)
GC.gc()
```

**Special features:**
- Mark-and-sweep garbage collector
- Optimized for numerical computations
- `GC.gc()` can be called manually

**Further reading:**
- [Julia Documentation - Garbage Collection](https://docs.julialang.org/en/v1/manual/garbage-collection/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Objects are automatically managed by the garbage collector
var numbers = @[10, 20, 30, 40, 50]

# When numbers is no longer referenced, it is automatically freed
numbers = nil

# Explicit garbage collection (usually not necessary)
GC_fullCollect()
```

**Special features:**
- By default, Nim uses garbage collection
- Various GC algorithms available (refc, markAndSweep, etc.)
- `GC_fullCollect()` can be called manually

**Further reading:**
- [Nim Manual - Garbage Collection](https://nim-lang.org/docs/gc.html)

</TabItem>
<TabItem value="d" label="D">

```d
// Objects are automatically managed by the garbage collector
int[] numbers = [10, 20, 30, 40, 50];

// When numbers is no longer referenced, it is automatically freed
numbers = null;

// Explicit garbage collection (usually not necessary)
import core.memory;
GC.collect();
```

**Special features:**
- Mark-and-sweep garbage collector
- Optional: @nogc for manual memory management
- `GC.collect()` can be called manually

**Further reading:**
- [D Language Specification - Garbage Collection](https://dlang.org/spec/garbage.html)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Objects are automatically managed by the garbage collector
numbers = [10, 20, 30, 40, 50]

# When numbers is no longer referenced, it is automatically freed
numbers = nil

# Explicit garbage collection (usually not necessary)
GC.collect
```

**Special features:**
- Boehm-Demers-Weiser garbage collector
- Mark-and-sweep algorithm
- `GC.collect` can be called manually

**Further reading:**
- [Crystal Documentation - Garbage Collection](https://crystal-lang.org/reference/guides/gc.html)

</TabItem>
<TabItem value="r" label="R">

```r
# Objects are automatically managed by the garbage collector
numbers <- c(10, 20, 30, 40, 50)

# When numbers is no longer referenced, it is automatically freed
numbers <- NULL

# Explicit garbage collection (usually not necessary)
gc()
```

**Special features:**
- Mark-and-sweep garbage collector
- `gc()` can be called manually
- Automatic GC under memory pressure

**Further reading:**
- [R Documentation - Memory](https://cran.r-project.org/doc/manuals/r-release/R-exts.html#Memory-allocators)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Objects are automatically managed by the garbage collector
my @numbers = (10, 20, 30, 40, 50);

# When @numbers is no longer referenced, it is automatically freed
@numbers = ();

# Explicit garbage collection (usually not necessary)
# No explicit GC API in standard Perl
```

**Special features:**
- Reference counting as primary mechanism
- Cyclic garbage collector for circular references
- Automatic deallocation at reference count 0

**Further reading:**
- [Perl Documentation - Memory Management](https://perldoc.perl.org/perlguts#Memory-Management)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; Objects are automatically managed by the garbage collector
(define numbers (list 10 20 30 40 50))

;; When numbers is no longer referenced, it is automatically freed

;; Explicit garbage collection (usually not necessary)
;; (gc) (implementation-specific)
```

**Special features:**
- GC implementation is implementation-specific
- Various GC algorithms depending on implementation
- `(gc)` can be called manually (if available)

**Further reading:**
- [R7RS Scheme Specification](https://small.r7rs.org/)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
; Objects are automatically managed by the garbage collector
(define numbers (list 10 20 30 40 50))

; When numbers is no longer referenced, it is automatically freed

; Explicit garbage collection (usually not necessary)
(collect-garbage)
```

**Special features:**
- Generational garbage collector
- `collect-garbage` can be called manually
- Optimized for functional programming

**Further reading:**
- [Racket Documentation - Memory Management](https://docs.racket-lang.org/reference/gc.html)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Objects are automatically managed by the garbage collector
(defvar numbers (list 10 20 30 40 50))

;; When numbers is no longer referenced, it is automatically freed

;; Explicit garbage collection (usually not necessary)
(sb-ext:gc) ; SBCL-specific
```

**Special features:**
- GC implementation is implementation-specific
- Various GC algorithms depending on implementation
- `gc` can be called manually (implementation-specific)

**Further reading:**
- [Common Lisp HyperSpec](http://www.lispworks.com/documentation/HyperSpec/Front/index.htm)

</TabItem>
<TabItem value="mojo" label="Mojo">

```mojo
# Objects are automatically managed by the garbage collector
var numbers = List[Int](10, 20, 30, 40, 50)

# When numbers is no longer referenced, it is automatically freed
numbers = None

# No explicit GC API available (experimental)
```

**Special features:**
- Experimental language, GC implementation may change
- Python-like syntax with modern features
- Automatic memory management

**Further reading:**
- [Mojo Documentation](https://docs.modular.com/mojo/)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
% Objects are automatically managed by the garbage collector
numbers = [10, 20, 30, 40, 50];

% When numbers is no longer referenced, it is automatically freed
numbers = [];

% No explicit GC API available
```

**Special features:**
- Automatic memory management
- GC runs automatically under memory pressure
- No standardized API for manual GC

**Further reading:**
- [MATLAB Documentation - Memory Management](https://www.mathworks.com/help/matlab/matlab_prog/memory-management.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Terms are automatically managed by the garbage collector
main(!IO) :-
    Numbers = [10, 20, 30, 40, 50],
    % When Numbers is no longer referenced, it is automatically freed
    % Mercury manages memory completely automatically
    io.write_line(Numbers, !IO).

% No explicit GC API available
% The garbage collector runs automatically in the background
```

**Special features:**
- Mercury uses the Boehm-Demers-Weiser conservative garbage collector (C backend)
- On the Java backend, the JVM GC is used, on the Erlang backend the BEAM GC
- No explicit GC API available – the GC runs completely automatically
- All terms and data structures are automatically managed by the GC

**Further reading:**
- [Mercury Documentation - Garbage Collection](https://www.mercurylang.org/information/doc-latest/mercury_ref/Garbage-collection.html)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
% Objects are automatically managed by the garbage collector
numbers = [10, 20, 30, 40, 50];

% When numbers is no longer referenced, it is automatically freed
numbers = [];

% No explicit GC API available
```

**Special features:**
- Automatic memory management
- GC runs automatically under memory pressure
- No standardized API for manual GC

**Further reading:**
- [GNU Octave Documentation](https://octave.org/doc/)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Objects are automatically managed by the garbage collector (.NET)
Dim numbers As List(Of Integer) = New List(Of Integer) From {10, 20, 30, 40, 50}

' When numbers is no longer referenced, it is automatically freed
numbers = Nothing

' Explicit garbage collection (usually not necessary)
GC.Collect()
```

**Special features:**
- Uses .NET garbage collector
- Same GC characteristics as C#
- `GC.Collect()` can be called manually

**Further reading:**
- [Microsoft VB.NET Documentation](https://learn.microsoft.com/en-us/dotnet/visual-basic/)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```wolfram
(* Objects are automatically managed by the garbage collector *)
numbers = {10, 20, 30, 40, 50};

(* When numbers is no longer referenced, it is automatically freed *)
numbers = Null;

(* No explicit GC API available *)
```

**Special features:**
- Automatic memory management
- GC runs automatically under memory pressure
- No standardized API for manual GC

**Further reading:**
- [Wolfram Language Documentation - Memory Management](https://reference.wolfram.com/language/guide/MemoryManagement.html)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// Garbage Collection by BEAM VM
pub fn create_list() -> List(Int) {
  // Memory is automatically managed
  list.range(1, 1000)
}
// Values that are no longer referenced are automatically freed
```

**Special features:**
- BEAM VM provides per-process garbage collection
- Each BEAM process has its own heap
- GC runs per process, no global GC pauses
- Generational garbage collection

**Further reading:**
- [Gleam Documentation](https://gleam.run/documentation/)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Memory management is automatic
-- Garbage Collection is provided by the backend
items : List Int
items = [1, 2, 3, 4, 5]
filtered : List Int
filtered = filter (> 2) items
-- items is automatically freed when no longer referenced
```

**Special features:**
- Automatic memory management through garbage collection
- GC is provided by the chosen backend (Chez Scheme, C with Boehm GC, etc.)
- No manual memory management needed

**Further reading:**
- [Idris 2 Documentation](https://idris2.readthedocs.io/)

</TabItem>
<TabItem value="v" label="V">

```v
// Garbage Collection (default)
fn create_data() []int {
    mut data := []int{cap: 1000}
    for i in 0 .. 1000 {
        data << i
    }
    return data  // GC manages the memory
}

result := create_data()
// Memory is automatically freed
```

**Special features:**
- GC is the default memory management
- `-gc boehm` for Boehm GC (default)
- `-autofree` for deterministic deallocation without GC
- `-gc none` completely disables GC

**Further reading:**
- [V Documentation - Memory Management](https://github.com/vlang/v/blob/master/doc/docs.md#memory-management)

</TabItem>
</Tabs>


## 13.1.3. Reference Counting

Memory management by counting references to objects. Objects are automatically freed when the reference count drops to 0.

### Languages {#sprachen}

<Tabs availableTabs={['koka', 'lean4', 'nim', 'objective-c', 'object-pascal', 'perl', 'php', 'python', 'roc', 'swift']}>
<TabItem value="python" label="Python">

```python
# Required: import sys
# Reference Counting as primary mechanism
numbers = [10, 20, 30, 40, 50]
ref_count = sys.getrefcount(numbers)  # Shows current reference count

# New reference increases count
numbers2 = numbers

# Removing reference decreases count
numbers2 = None

# When all references are removed, object is freed
numbers = None
```

**Special features:**
- Reference counting as primary mechanism
- Additionally cyclic garbage collector for circular references
- `sys.getrefcount()` shows current reference count (incl. temporary reference)

**Further reading:**
- [Python Documentation - gc](https://docs.python.org/3/library/gc.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Automatic Reference Counting (ARC)
var numbers: [Int]? = [10, 20, 30, 40, 50]

// New reference increases reference count
var numbers2 = numbers

// Removing reference decreases count
numbers2 = nil

// When all references are removed, object is freed
numbers = nil
```

**Special features:**
- Uses Automatic Reference Counting (ARC)
- Reference count is managed at compile time
- No runtime overhead for reference counting
- Weak references available for circular references

**Further reading:**
- [Swift Documentation - Automatic Reference Counting](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/automaticreferencecounting/)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Automatic Reference Counting (ARC)
NSArray *numbers = @[@10, @20, @30, @40, @50];

// New reference increases reference count
NSArray *numbers2 = numbers;

// Removing reference decreases count
numbers2 = nil;

// When all references are removed, object is freed
numbers = nil;
```

**Special features:**
- Uses Automatic Reference Counting (ARC) since iOS 5.0 / OS X 10.7
- Before ARC: Manual reference counting with `retain`/`release`/`autorelease`
- Weak references available for circular references
- `__weak` and `__strong` qualifiers available

**Further reading:**
- [Apple Documentation - Automatic Reference Counting](https://developer.apple.com/library/archive/releasenotes/ObjectiveC/RN-TransitioningToARC/)

</TabItem>
<TabItem value="php" label="PHP">

```php
// Reference Counting as primary mechanism
$numbers = [10, 20, 30, 40, 50];

// New reference increases reference count
$numbers2 = $numbers;

// Removing reference decreases count
$numbers2 = null;

// When all references are removed, object is freed
$numbers = null;
```

**Special features:**
- Reference counting as primary mechanism
- Additionally cyclic garbage collector for circular references
- Automatic deallocation at reference count 0

**Further reading:**
- [PHP Documentation - Garbage Collection](https://www.php.net/manual/en/features.gc.php)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Reference Counting as primary mechanism
my @numbers = (10, 20, 30, 40, 50);
my $numbers_ref = \@numbers;

# New reference increases reference count
my $numbers_ref2 = $numbers_ref;

# Removing reference decreases count
$numbers_ref2 = undef;

# When all references are removed, object is freed
$numbers_ref = undef;
```

**Special features:**
- Reference counting as primary mechanism
- Cyclic garbage collector for circular references (since Perl 5.8)
- Automatic deallocation at reference count 0

**Further reading:**
- [Perl Documentation - Memory Management](https://perldoc.perl.org/perlguts#Memory-Management)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
// Perceus Reference Counting
// Koka uses Perceus, a precise reference counting system
// with automatic reuse analysis

// Values are automatically managed via reference counting
fun main()
  val xs = [1, 2, 3, 4, 5]
  val ys = xs  // Reference count is increased
  // When xs is no longer used, the count decreases
  // At count 0, memory is freed or reused
  println(ys.show)
```

**Special features:**
- Perceus Reference Counting: precise, automatic reference counting at compile time
- Automatic reuse analysis: memory is reused in-place when possible
- No cycles possible through purely functional design (no mutable references)
- No garbage collector needed – deterministic memory deallocation

**Further reading:**
- [Koka – Perceus Reference Counting](https://koka-lang.github.io/koka/doc/book.html#sec-perceus)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Lean 4 uses Reference Counting for memory management
-- The compiler automatically inserts RC operations

-- Values are managed via reference counting
def example : IO Unit := do
  let xs := [1, 2, 3, 4, 5]
  let ys := xs  -- Reference count is increased
  IO.println s!"{ys}"
  -- When xs is no longer used, the count decreases
  -- At count 0, memory is freed
```

**Special features:**
- Lean 4 uses reference counting as the primary memory management mechanism.
- The compiler automatically inserts `rc_inc` and `rc_dec` operations.
- No cycles possible through purely functional design (no mutable references).
- No garbage collector needed – deterministic memory deallocation.

**Further reading:**
- [Lean 4 Documentation - Memory Management](https://lean-lang.org/lean4/doc/dev/ffi.html#memory-management)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Reference Counting (ARC/ORC since Nim 1.4)
type
  Node = ref object
    value: int
    next: Node

var a = Node(value: 1)
var b = a  # Reference count increases
b = nil    # Reference count decreases, object is freed when 0
```

**Special features:**
- ARC (Automatic Reference Counting) since Nim 1.4, default since Nim 2.0
- ORC extends ARC with cycle detection
- Deterministic memory management
- Old GC backends (refc, markAndSweep) still available

**Further reading:**
- [Nim Documentation - ARC/ORC](https://nim-lang.org/docs/mm.html)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
type
  IMyInterface = interface
    procedure DoSomething;
  end;

  TMyClass = class(TInterfacedObject, IMyInterface)
    procedure DoSomething;
  end;

var
  intf: IMyInterface;
begin
  intf := TMyClass.Create;
  intf.DoSomething;
  // Automatic deallocation via reference counting
  // when intf leaves scope
end;
```

**Special features:**
- Interfaces are automatically managed via reference counting
- `TInterfacedObject` implements `_AddRef` and `_Release`
- Strings and dynamic arrays are also managed via reference counting
- Class objects (without interface) must be manually freed

**Further reading:**
- [Delphi Documentation - Interfaces](https://docwiki.embarcadero.com/RADStudio/en/Interfaces)

</TabItem>
<TabItem value="roc" label="Roc">

```haskell
-- Automatic Reference Counting
numbers = [10, 20, 30, 40, 50]

-- Memory is automatically freed when
-- no references exist anymore
-- Roc optimizes: when only one reference exists,
-- it mutates in-place (opportunistic mutation)
```

**Special features:**
- Automatic Reference Counting (ARC)
- No garbage collection pauses
- Opportunistic mutation with single reference (performance optimization)
- No manual memory management needed

**Further reading:**
- [Roc Documentation](https://www.roc-lang.org/)

</TabItem>
</Tabs>


## 13.1.4. Ownership System

Memory management through an ownership system where each object has exactly one owner. When the owner leaves scope, the object is automatically freed.

### Languages {#sprachen}

<Tabs availableTabs={['rust']}>
<TabItem value="rust" label="Rust">

```rust
// Ownership: Each object has exactly one owner
let numbers = vec![10, 20, 30, 40, 50];

// Ownership is transferred (move)
let numbers2 = numbers;
// numbers is no longer usable

// Ownership can be shared through borrowing
let numbers3 = vec![10, 20, 30, 40, 50];
let reference = &numbers3;  // Immutable borrow
let reference2 = &numbers3;  // Multiple immutable borrows allowed

// Mutable borrow
let mut numbers4 = vec![10, 20, 30, 40, 50];
let mutable_ref = &mut numbers4;  // Only one mutable borrow at a time

// At the end of scope, object is automatically freed
```

**Special features:**
- Each object has exactly one owner
- Ownership can be transferred through move semantics
- Borrowing allows temporary references without ownership transfer
- Compiler guarantees memory safety at compile time
- No runtime overhead for memory management

**Further reading:**
- [The Rust Book - Ownership](https://doc.rust-lang.org/book/ch04-00-understanding-ownership.html)

</TabItem>
</Tabs>


## 13.1.5. RAII (Resource Acquisition Is Initialization)

Resources are acquired during object initialization and automatically freed when leaving scope.

### Languages {#sprachen}

<Tabs availableTabs={['cpp', 'd', 'rust']}>
<TabItem value="cpp" label="C++">

```cpp
// RAII: Resources are acquired in constructor and freed in destructor
#include <fstream>
#include <memory>

class FileHandler {
    std::ofstream file;
public:
    FileHandler(const std::string& filename) : file(filename) {
        // File is opened in constructor
    }
    
    ~FileHandler() {
        // File is automatically closed in destructor
        if (file.is_open()) {
            file.close();
        }
    }
    
    void write(const std::string& data) {
        file << data;
    }
};

// RAII: File is automatically closed when object leaves scope
{
    FileHandler handler("output.txt");
    handler.write("Hello, World!");
    // Destructor is automatically called, file is closed
}

// Smart pointers use RAII
{
    auto ptr = std::make_unique<int>(42);
    // Memory is automatically freed when ptr leaves scope
}
```

**Special features:**
- Resources are acquired in constructor
- Resources are automatically freed in destructor
- Works even with exceptions (exception safety)
- Smart pointers (`std::unique_ptr`, `std::shared_ptr`) use RAII

**Further reading:**
- [cppreference.com - RAII](https://en.cppreference.com/w/cpp/language/raii)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// RAII: Resources are acquired during initialization and automatically freed
use std::fs::File;
use std::io::Write;

struct FileHandler {
    file: File,
}

impl FileHandler {
    fn new(filename: &str) -> std::io::Result<Self> {
        let file = File::create(filename)?;
        Ok(FileHandler { file })
    }
    
    fn write(&mut self, data: &str) -> std::io::Result<()> {
        self.file.write_all(data.as_bytes())
    }
}

// RAII: File is automatically closed when object leaves scope
{
    let mut handler = FileHandler::new("output.txt")?;
    handler.write("Hello, World!")?;
    // Drop trait is automatically called, file is closed
}

// Box, Vec, etc. use RAII
{
    let vec = vec![10, 20, 30];
    // Memory is automatically freed when vec leaves scope
}
```

**Special features:**
- Resources are acquired during initialization
- `Drop` trait is automatically called when object leaves scope
- Works even with exceptions (panics)
- All types with ownership use RAII

**Further reading:**
- [The Rust Book - Drop](https://doc.rust-lang.org/book/ch15-03-drop.html)

</TabItem>
<TabItem value="d" label="D">

```d
// RAII via struct destructors
struct FileHandle {
    private int fd;

    this(string filename) {
        // Open resource
        writeln("File opened: ", filename);
    }

    ~this() {
        // Automatically free resource
        writeln("File closed");
    }
}

void processFile() {
    auto handle = FileHandle("data.txt");
    // ... use file ...
}  // ~this() is automatically called here

// Scope guards as alternative
void process() {
    auto resource = acquireResource();
    scope(exit) releaseResource(resource);
    // ... use resource ...
}  // releaseResource is guaranteed to be called
```

**Special features:**
- Struct destructors (`~this()`) are called when leaving scope
- `scope(exit)`, `scope(success)`, `scope(failure)` as scope guards
- RAII only works with structs (not with classes, as they are GC-managed)
- Combination of RAII and scope guards is idiomatic D

**Further reading:**
- [D Language Specification - Scope Guard Statement](https://dlang.org/spec/statement.html#scope-guard-statement)

</TabItem>
</Tabs>


## 13.1.6. Automatic Reference Counting (ARC)

Automatic reference counting at compile time. The compiler automatically inserts code to increment and decrement reference counters.

### Languages {#sprachen}

<Tabs availableTabs={['koka', 'lean4', 'nim', 'objective-c', 'swift']}>
<TabItem value="swift" label="Swift">

```swift
// Automatic Reference Counting (ARC)
class Person {
    let name: String
    init(name: String) {
        self.name = name
    }
    deinit {
        print("\(name) is freed")
    }
}

// Reference increases count
var person1: Person? = Person(name: "Alice")
var person2 = person1  // Reference count: 2

// Removing reference decreases count
person2 = nil  // Reference count: 1

// Removing last reference frees object
person1 = nil  // "Alice is freed"

// Weak references for circular references
class Parent {
    let name: String
    var child: Child?
    init(name: String) {
        self.name = name
    }
    deinit {
        print("\(name) is freed")
    }
}

class Child {
    let name: String
    weak var parent: Parent?  // Weak Reference
    init(name: String) {
        self.name = name
    }
    deinit {
        print("\(name) is freed")
    }
}
```

**Special features:**
- ARC is implemented at compile time, not at runtime
- No runtime overhead for reference counting
- Weak references available for circular references
- `weak` and `unowned` qualifiers available
- Automatic deallocation when reference count drops to 0

**Further reading:**
- [Swift Documentation - Automatic Reference Counting](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/automaticreferencecounting/)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Automatic Reference Counting (ARC)
@interface Person : NSObject
@property (nonatomic, strong) NSString *name;
@end

@implementation Person
- (void)dealloc {
    NSLog(@"%@ wird freigegeben", self.name);
}
@end

// Reference increases counter
Person *person1 = [[Person alloc] init];
person1.name = @"Alice";
Person *person2 = person1;  // Reference count: 2

// Removing reference decreases counter
person2 = nil;  // Reference count: 1

// Removing last reference frees object
person1 = nil;  // "Alice wird freigegeben"

// Weak References for circular references
@interface Parent : NSObject
@property (nonatomic, strong) Child *child;
@end

@interface Child : NSObject
@property (nonatomic, weak) Parent *parent;  // Weak Reference
@end
```

**Special features:**
- ARC was introduced in iOS 5.0 / OS X 10.7
- Before ARC: Manual Reference Counting with `retain`/`release`/`autorelease`
- `__weak` and `__strong` qualifiers available
- `weak` property attribute for circular references
- Automatic deallocation when reference count reaches 0

**Further reading:**
- [Apple Documentation - Automatic Reference Counting](https://developer.apple.com/library/archive/releasenotes/ObjectiveC/RN-TransitioningToARC/)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
// Perceus: Automatic Reference Counting at compile time
// The compiler automatically inserts reference counting operations

fun process-data()
  val data = [1, 2, 3, 4, 5]
  // Compiler automatically inserts RC increments/decrements
  val result = data.map(fn(x) x * 2)
  // 'data' is automatically freed when no longer needed
  // If possible, memory is reused in-place (Reuse analysis)
  result.foreach(fn(x) println(x.show))

fun main()
  process-data()
  // All resources are deterministically freed
```

**Special features:**
- Perceus: Compiler-supported ARC with precise reference counting
- Reuse analysis: Memory is automatically reused in-place
- No circular references possible (purely functional design)
- Deterministic: Deallocation occurs immediately when reference count is 0
- No runtime GC needed – suitable for embedded systems

**Further reading:**
- [Koka – Perceus Reference Counting](https://koka-lang.github.io/koka/doc/book.html#sec-perceus)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Lean 4 uses Automatic Reference Counting (ARC)
-- The compiler automatically inserts RC operations

-- Every value is managed via ARC
def processData : IO Unit := do
  let data := [1, 2, 3, 4, 5]
  -- Compiler automatically inserts rc_inc/rc_dec operations
  let result := data.map (fun x => x * 2)
  -- 'data' is automatically freed when no longer needed
  IO.println s!"{result}"
```

**Special features:**
- Lean 4 uses ARC as the primary memory management mechanism.
- The compiler automatically inserts `rc_inc` and `rc_dec` operations.
- No circular references possible due to purely functional design.
- Deterministic: Deallocation occurs immediately when reference count is 0.
- No runtime GC needed.

**Further reading:**
- [Lean 4 Documentation - Memory Management](https://lean-lang.org/lean4/doc/dev/ffi.html#memory-management)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# ARC (Automatic Reference Counting, standard since Nim 2.0)
type
  Resource = ref object
    data: string

proc createResource(): Resource =
  Resource(data: "wichtige Daten")

block:
  var r = createResource()
  echo r.data
  # r is automatically freed at the end of the scope
```

**Special features:**
- ARC is the standard memory management since Nim 2.0
- ORC (ARC + cycle detection) is recommended for cyclic data structures
- Compile flags: `--mm:arc` or `--mm:orc`
- Deterministic, predictable deallocation behavior

**Further reading:**
- [Nim Documentation - Memory Management](https://nim-lang.org/docs/mm.html)

</TabItem>
</Tabs>

